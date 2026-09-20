// -*- coding: utf-8 -*-
// SEFER-OK-0070 · TARAYICI SINAVI (headless Chrome + CDP) — 20 Eylül 2026
//
// 🔴 NİÇİN BU ALET VAR: sınavı önce uygulamanın kendi tarayıcı panosunda
// koşturdum; pano GİZLENİNCE `document.hidden === true` oldu, Chrome
// requestAnimationFrame'i durdurdu ve MapLibre HİÇ render etmedi
// (`isStyleLoaded()` false, katman sayısı 0). Yani "ölçemedim" sebebi
// ÖLÇÜLDÜ: kusur atlasta değil, gizli sekmede. Bu alet aynı sayfayı
// headless Chrome'da açar — orada rAF çalışır — ve aynı soruları sorar.
//
// Kullanım:  node denetim/ARAC-SEFER-OK-SINAV-0070.js [port]
// Bağımlılık YOK: Chrome CDP'ye Node 22'nin GLOBAL WebSocket'iyle bağlanılır.
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const URL_ = 'http://localhost:' + PORT + '/';
const CDP = 9333;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function bekle(ms) { return new Promise(r => setTimeout(r, ms)); }
function getJSON(yol) {
  return new Promise((ok, hata) => {
    http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
      let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
    }).on('error', hata);
  });
}

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'seferok-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil,
    '--window-size=1400,900', '--no-first-run', '--disable-extensions', URL_],
    { stdio: 'ignore', detached: false });

  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try {
      const l = await getJSON('/json/list');
      hedef = l.find(t => t.type === 'page' && t.url.indexOf('localhost') > 0);
    } catch (e) { /* Chrome henüz açılmadı */ }
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); return; }

  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bekleyen = new Map();
  ws.addEventListener('message', ev => {
    const m = JSON.parse(ev.data);
    if (m.id && bekleyen.has(m.id)) { bekleyen.get(m.id)(m); bekleyen.delete(m.id); }
  });
  function gonder(metot, params) {
    const id = ++no;
    return new Promise(r => { bekleyen.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: params || {} })); });
  }
  async function js(ifade) {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + JSON.stringify(c.result.exceptionDetails.exception && c.result.exceptionDetails.exception.description || '') };
    return c.result && c.result.result ? c.result.result.value : null;
  }
  await gonder('Runtime.enable');

  // ---- harita hazır olana kadar bekle
  const hazir = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
    for(let i=0;i<120;i++){ if(window.haritaHazir) return {hazir:true,tur:i*0.5}; await b(500);}
    return {hazir:false, styleLoaded: window.harita&&harita.isStyleLoaded?harita.isStyleLoaded():null};})()`);

  const sonuc = { url: URL_, hazir };
  if (hazir && hazir.hazir) {
    // ① kalınlık kuralı + katman sırası + kaynak noktası
    sonuc.kalinlik_ve_sira = await js(`(()=>{const L=harita.getStyle().layers.map(l=>l.id);
      const ix=id=>L.indexOf(id);
      const ilkSymbol=harita.getStyle().layers.findIndex(l=>l.type==='symbol'&&l.id.indexOf('sefer')!==0);
      return { sefer_genislik: harita.getPaintProperty('sefer-cizgi-sefer','line-width'),
               en_ince_tur: Math.min.apply(null, Object.keys(HAREKET).map(t=>HAREKET[t].kalinlik)),
               sefer_cizgi_ix: ix('sefer-cizgi-sefer'), sefer_kaynak_ix: ix('sefer-kaynak'),
               isgal_dolgu_ix: ix('isgal-dolgu'), devir_dolgu_ix: ix('devir-dolgu'),
               ilk_symbol_ix: ilkSymbol, katman_sayi: L.length };})()`);

    // ② durağan çizim: Napolyon'un Mısır seferi (1798-07-20)
    sonuc.durgun_cizim = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1798-07-20')); harita.jumpTo({center:[30.3,30.7],zoom:7.2}); await b(1500);
      const s=harita.getSource('seferler'); const d=s.serialize?s.serialize().data:s._data;
      const f=(d&&d.features)||[];
      return { ozellik: f.length,
               cizgi: f.filter(x=>x.geometry.type==='LineString').length,
               kaynak_nokta: f.filter(x=>x.properties.nokta==='kaynak').length,
               renkler: f.map(x=>x.properties.renk).filter((v,i,a)=>a.indexOf(v)===i) };})()`);

    // ③ "ok" fazı — js/sefer_ok.js sayfaya bağlı değilse enjekte edilir
    sonuc.faz = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      if(typeof window.SEFER_OK_FAZ!=='function'){
        await new Promise((ok,hata)=>{const s=document.createElement('script');s.src='js/sefer_ok.js';s.onload=ok;s.onerror=()=>hata(new Error('yuklenemedi'));document.head.appendChild(s);});
        await b(300);
      }
      if(typeof window.SEFER_OK_FAZ!=='function') return {durum:'FAZ YOK'};
      const olay = olaylar.find(o=>o.t && o.t.indexOf('1798-07-24')===0) || olaylar.find(o=>o.t&&o.t.indexOf('1798-07')===0);
      if(!olay) return {durum:'MADDE BULUNAMADI'};
      let bitti=false; const t0=performance.now();
      const dondu = SEFER_OK_FAZ(olay, ()=>{bitti=true;});
      if(dondu!==true) return {durum:'FAZ FALSE DONDU (ok yok)', madde:olay.b};
      // 🔴 ARA ÖLÇÜM İLK KAREYİ BEKLER: headless Chrome swiftshader ile ilk
      // requestAnimationFrame karesi ~1 sn gecikebiliyor; sabit 250 ms beklemek
      // "animasyon yok" gibi YANLIŞ bir sıfır ölçtürmüştü (ilk koşuda ölçüldü).
      const oku = ()=>{const s=harita.getSource('sefer-anim'); const d=s&&(s.serialize?s.serialize().data:s._data);
        const f=(d&&d.features)||[]; const c=f.find(x=>x.geometry.type==='LineString');
        return { ozellik:f.length, nokta:c?c.geometry.coordinates.length:0,
                 uc:c?c.geometry.coordinates[c.geometry.coordinates.length-1]:null,
                 gizli: Object.keys(window.SEFER_ANIM_GIZLI||{}).length };};
      let ara=null, orneklem=[];
      for(let i=0;i<60&&!bitti;i++){ const o=oku(); if(o.ozellik){ if(!ara) ara=o; orneklem.push(o.nokta);} await b(100); }
      ara = ara || oku();
      ara.ilerleme_ornek = orneklem.slice(0,12);
      ara.ilerledi = orneklem.length>1 && orneklem[orneklem.length-1] >= orneklem[0];
      for(let i=0;i<40&&!bitti;i++) await b(150);
      const son = (()=>{const s=harita.getSource('sefer-anim'); const d=s&&(s.serialize?s.serialize().data:s._data);
        return { anim_bos: !((d&&d.features)||[]).length, gizli_kalan: Object.keys(window.SEFER_ANIM_GIZLI||{}).length };})();
      return { madde: olay.b, dondu, bitti, sure_ms: Math.round(performance.now()-t0), ara, son };})()`);

    // ④ faz "ok" YOKSA false dönmeli — güzergâhsız bir madde ile sınanır
    sonuc.faz_guzergahsiz = await js(`(()=>{
      const olay = olaylar.find(o=>o.t&&o.t.indexOf('1326-04-06')===0);
      if(!olay) return {durum:'MADDE YOK'};
      return { madde: olay.b, dondu: SEFER_OK_FAZ(olay, ()=>{}) };})()`);

    // ⑤ ORTAK SAHNE — js/anim_dili.js (ELE-GECIRME-ANIM-0070) ile birlikte:
    // faz "ok" sıralayıcıya kaydoluyor mu, sahne sırayla akıyor mu?
    // İki dosya da index.html'e HENÜZ BAĞLI DEĞİL (koordinatör ekler), bu
    // yüzden sınavda enjekte edilirler — "bağlı olmamak" ile "çalışmamak"
    // ayrı sorular (D099).
    sonuc.ortak_sahne = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      if(!window.ANIM){
        try{ await new Promise((ok,hata)=>{const s=document.createElement('script');s.src='js/anim_dili.js';s.onload=ok;s.onerror=()=>hata(new Error('yok'));document.head.appendChild(s);}); }
        catch(e){ return {durum:'anim_dili.js YOK — ortak sahne sinanmadi'}; }
        await b(400);
      }
      if(!window.ANIM||!ANIM.sahnele) return {durum:'ANIM.sahnele YOK'};
      const kayitli = !!(ANIM._fazlar ? ANIM._fazlar.ok : true);
      const olay = olaylar.find(o=>o.t&&o.t.indexOf('1798-07-24')===0) || olaylar.find(o=>o.t&&o.t.indexOf('1798-07')===0);
      const t0=performance.now(); let gorulen=[];
      try{ ANIM.sahnele(olay); }catch(e){ return {durum:'sahnele HATA: '+e.message}; }
      for(let i=0;i<60;i++){ const s=harita.getSource('sefer-anim'); const d=s&&(s.serialize?s.serialize().data:s._data);
        if(((d&&d.features)||[]).length) gorulen.push('ok'); await b(100); if(gorulen.length>3) break; }
      return { madde: olay&&olay.b, kayitli, ok_fazi_cizdi: gorulen.length>0, sure_ms: Math.round(performance.now()-t0) };})()`);

    sonuc.konsol_hata = await js(`(window.__hata||null)`);
  }
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

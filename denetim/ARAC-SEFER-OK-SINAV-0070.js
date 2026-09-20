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

    // ⑥ M-4714 (Emre kuralı, 20 Eylül) — "ok taralı alanla karışmayacak,
    // animasyon/simge/yazı birbirine girmeyecek". Ölçütleri teslimde SAYIYLA
    // göstermek şart: üç madde × iki zoom + katman sırası + ekran görüntüsü.
    sonuc.m4714 = { madde: [], zoom: [] };

    // (a) ok + işgal aynı sahnede · (b) yalnız ok · (c) yalnız el değiştirme
    // 🔴 (a)'nın GÜNÜ ELLE SEÇİLMİYOR, ÖLÇÜLÜYOR: ilk denemede 1798-07-20
    // seçilmişti ve `isgal_poligon: 0` çıktı — Napolyon'un Mısır'ı işgal
    // katmanında YOK (ayrı sevk: NAPOLYON-MISIR-0070). "Ok ile tarama aynı
    // sahnede" sınavı, ikisinin gerçekten çakıştığı bir gün ister; o gün
    // ISGALLER × seferler kesişiminden bulunuyor.
    const kesisim = await js(`(()=>{
      const ig=(window.ISGALLER||[]).map(g=>({f:gunIdx(g.f),t:gunIdx(g.t),ad:g.ad}));
      for(const m of (window.seferler||[])){
        for(const g of ig){
          const a=Math.max(m.fi,g.f), b=Math.min(m.ti,g.t);
          if(a<=b){ const gun=Math.floor((a+b)/2);
            return { gun: (t=>t.y+'-'+String(t.a).padStart(2,'0')+'-'+String(t.g).padStart(2,'0'))(idxTarih(gun)), gi:gun, sefer:m.ad, isgal:g.ad,
                     merkez:m.yol[Math.floor(m.yol.length/2)] }; }
        }
      }
      return null;})()`);
    const uclu = [
      kesisim && kesisim.gi !== undefined
        ? { ad: 'ok+isgal', gi: kesisim.gi, merkez: kesisim.merkez, zoom: 6.0, not: kesisim.sefer + ' × ' + kesisim.isgal }
        : { ad: 'ok+isgal', gun: '1798-07-20', merkez: [30.3, 30.7], zoom: 7.2, not: 'kesisim BULUNAMADI' },
      { ad: 'yalniz-ok', gun: '1867-07-01', merkez: [10.0, 46.0], zoom: 4.6 },
      { ad: 'yalniz-el-degistirme', gun: '1326-04-06', merkez: [29.06, 40.18], zoom: 7.0 }
    ];
    for (const u of uclu) {
      sonuc.m4714.madde.push(await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
        const gi = ${u.gi !== undefined ? u.gi : `gunIdx('${u.gun}')`};
        tarihAyarla(gi); harita.jumpTo({center:[${u.merkez[0]},${u.merkez[1]}],zoom:${u.zoom}}); await b(1800);
        const sf=harita.getSource('seferler'); const d=sf.serialize?sf.serialize().data:sf._data;
        const f=(d&&d.features)||[];
        const ig=harita.getSource('isgal'); const gd=ig&&(ig.serialize?ig.serialize().data:ig._data);
        const L=harita.getStyle().layers; const ix=id=>L.findIndex(l=>l.id===id);
        const ilkSymbol=L.findIndex(l=>l.type==='symbol'&&l.id.indexOf('sefer')!==0);
        // madde: tam o günde yoksa EN YAKIN madde (sahne yine de sınanmalı)
        let olay=null, fark=Infinity;
        for(const o of (window.olaylar||[])){ const d=Math.abs(o.gi-gi); if(d<fark){fark=d;olay=o;} }
        return { ad:'${u.ad}', gun:(t=>t.y+'-'+String(t.a).padStart(2,'0')+'-'+String(t.g).padStart(2,'0'))(idxTarih(gi)), not:${JSON.stringify(u.not || '')},
                 madde_gun_farki: fark, symbol_katman_sayisi: L.filter(l=>l.type==='symbol').length,
                 ok_cizgi: f.filter(x=>x.geometry.type==='LineString').length,
                 kaynak_nokta: f.filter(x=>x.properties.nokta==='kaynak').length,
                 isgal_poligon: ((gd&&gd.features)||[]).length,
                 ok_ustte_mi: Math.min(ix('sefer-cizgi-sefer'),ix('sefer-kaynak')) > Math.max(ix('isgal-dolgu'),ix('devir-dolgu')),
                 yazi_okun_ustunde_mi: ilkSymbol < 0 ? null : ilkSymbol > ix('sefer-kaynak'),
                 madde: olay?olay.b.slice(0,50):null,
                 faz_ok_var_mi: olay?SEFER_OK_FAZ(olay,()=>{}):null };})()`));
      // fazı hemen kapat ki sıradaki ölçüm temiz başlasın
      await js(`(()=>{ Object.keys(window.SEFER_ANIM_GIZLI||{}).forEach(k=>delete SEFER_ANIM_GIZLI[k]); try{seferGuncelle(suanki);}catch(e){} return 1; })()`);
      const ss = await gonder('Page.captureScreenshot', { format: 'png' });
      if (ss.result && ss.result.data)
        fs.writeFileSync(path.join(__dirname, 'SINAV-SEFER-OK-0070-' + u.ad + '.png'), Buffer.from(ss.result.data, 'base64'));
    }

    // iki zoom: ok kalınlığı ekran px'i olarak sabittir, tarama deseni de —
    // oran zoomla değişmemeli (kural "en az 3 kat" her ölçekte geçerli)
    for (const z of [5.0, 8.5]) {
      sonuc.m4714.zoom.push(await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
        tarihAyarla(gunIdx('1798-07-20')); harita.jumpTo({center:[30.3,30.7],zoom:${z}}); await b(1200);
        return { zoom:${z}, gorunen_zoom: harita.getZoom(),
                 ok_genislik: harita.getPaintProperty('sefer-cizgi-sefer','line-width'),
                 ince_tarama_px: 3/Math.SQRT2, oran: +(harita.getPaintProperty('sefer-cizgi-sefer','line-width')/(3/Math.SQRT2)).toFixed(2),
                 ok_opaklik: harita.getPaintProperty('sefer-cizgi-sefer','line-opacity'),
                 isgal_opaklik: harita.getPaintProperty('isgal-dolgu','fill-opacity') };})()`));
      const ss = await gonder('Page.captureScreenshot', { format: 'png' });
      if (ss.result && ss.result.data)
        fs.writeFileSync(path.join(__dirname, 'SINAV-SEFER-OK-0070-zoom' + String(z).replace('.', '_') + '.png'), Buffer.from(ss.result.data, 'base64'));
    }

    // ⑦ mükerrer kaydın TEK çizilmesi (M-4714 §4)
    sonuc.mukerrer = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1867-07-01')); await b(1200);
      const sf=harita.getSource('seferler'); const d=sf.serialize?sf.serialize().data:sf._data;
      const f=((d&&d.features)||[]).filter(x=>x.geometry.type==='LineString');
      const kayit=(window.seferler||[]).filter(m=>m._fiKirpik<=suanki&&suanki<m._tiKirpik);
      const eller=(window.seferler||[]).filter(m=>/Abd(ü|u)laziz/i.test(m.ad||''));
      return { aktif_kayit: kayit.length, cizilen_cizgi: f.length,
               abdulaziz_kayit: eller.length,
               abdulaziz_ekli: eller.filter(m=>m.ekli).length };})()`);

    // ⑧ OK EKRANDA GERÇEKTEN ÇİZİLİYOR MU — katman sırası "çizilir" DEMEZ.
    // Ölçüm: aynı sahnenin iki ekran görüntüsü (ok katmanları görünür / gizli).
    // Tek değişken ok katmanıdır; PNG'ler BİREBİR aynıysa ok ekrana hiç
    // düşmüyor demektir. (Piksel çözümlemesine gerek yok: fark VARSA çizim var.)
    // 🔴 KAMERA OKUN KENDİ KUTUSUNA OTURTULUR: ilk denemede sabit merkez/zoom
    // verilmişti ve iki görüntü aynı çıkmıştı — sebebi okun çizilmemesi DEĞİL,
    // görünümün okun GEÇMEDİĞİ bir kareye bakmasıydı. Sınav, sınadığı şeyi
    // ekrana sokmak zorundadır.
    sonuc.ok_ekranda_kamera = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1798-07-20')); await b(600);
      const m=(window.seferler||[]).find(x=>x.ekli&&x.tur==='sefer')||(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'EKRANDA OK YOK'};
      let m1=[999,999], m2=[-999,-999];
      m.yol.forEach(p=>{m1=[Math.min(m1[0],p[0]),Math.min(m1[1],p[1])];m2=[Math.max(m2[0],p[0]),Math.max(m2[1],p[1])];});
      harita.fitBounds([m1,m2],{padding:80,duration:0}); await b(1800);
      return { ok:m.ad, kutu:[m1,m2], zoom:+harita.getZoom().toFixed(2) };})()`);
    const a1 = await gonder('Page.captureScreenshot', { format: 'png' });
    await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      Object.keys(HAREKET).forEach(t=>harita.setLayoutProperty('sefer-cizgi-'+t,'visibility','none'));
      harita.setLayoutProperty('sefer-kaynak','visibility','none'); await b(900); return 1;})()`);
    const a2 = await gonder('Page.captureScreenshot', { format: 'png' });
    await js(`(()=>{Object.keys(HAREKET).forEach(t=>harita.setLayoutProperty('sefer-cizgi-'+t,'visibility','visible'));
      harita.setLayoutProperty('sefer-kaynak','visibility','visible'); return 1;})()`);
    const d1 = a1.result && a1.result.data, d2 = a2.result && a2.result.data;
    sonuc.ok_ekranda = { karsilastirildi: !!(d1 && d2), fark_var: !!(d1 && d2 && d1 !== d2),
                         bayt_acik: d1 ? d1.length : null, bayt_kapali: d2 ? d2.length : null };
    if (d1) fs.writeFileSync(path.join(__dirname, 'SINAV-SEFER-OK-0070-okla.png'), Buffer.from(d1, 'base64'));
    if (d2) fs.writeFileSync(path.join(__dirname, 'SINAV-SEFER-OK-0070-oksuz.png'), Buffer.from(d2, 'base64'));

    // ⑨ Okun kendi güzergâhı üzerinde render edilmiş mi (nokta nokta sorgu)
    sonuc.ok_render = await js(`(()=>{
      const m=(window.seferler||[]).find(x=>x.ekli&&x.tur==='sefer')||(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'ekranda ok yok'};
      const kat=Object.keys(HAREKET).map(t=>'sefer-cizgi-'+t).filter(id=>harita.getLayer(id));
      const orta=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
      const ornek=[m.yol[0], orta(m.yol[0],m.yol[1]), m.yol[Math.floor(m.yol.length/2)], m.yol[m.yol.length-1]];
      return { ok:m.ad, gorunur: harita.getLayoutProperty('sefer-cizgi-'+m.tur,'visibility')||'visible',
        noktalar: ornek.map(p=>{ const e=harita.project(p);
          const f=harita.queryRenderedFeatures([[e.x-6,e.y-6],[e.x+6,e.y+6]],{layers:kat});
          const fk=harita.queryRenderedFeatures([[e.x-10,e.y-10],[e.x+10,e.y+10]],{layers:['sefer-kaynak']});
          return { lonlat:p, ekran:[Math.round(e.x),Math.round(e.y)], cizgi:f.length, kaynak_nokta:fk.length }; }),
        tuval: [harita.getCanvas().width, harita.getCanvas().height] };})()`);

    sonuc.konsol_hata = await js(`(window.__hata||null)`);
  }
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

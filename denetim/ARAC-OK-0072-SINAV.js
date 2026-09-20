// -*- coding: utf-8 -*-
// SEFER-OK-0070 · paket 0072 H-0010 TARAYICI SINAVI — 20 Eylül 2026
// Soru: ok rengi artık ÜLKENİN koyu tonu mu, ve kenar (casing) okunurluğu
// sağlıyor mu? Ölçüm uygulamanın KENDİ hesabından okunur (taklit değil).
// Kullanım: node denetim/ARAC-OK-0072-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9338;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0072-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p) => { const id = ++no; return new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }); };
  const js = async ifade => {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + ((c.result.exceptionDetails.exception || {}).description || '') };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  await gonder('Log.enable');
  const hatalar = [];
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data);
    if (m.method === 'Log.entryAdded' && m.params && m.params.entry && m.params.entry.level === 'error') hatalar.push(m.params.entry.text.slice(0,200));
    if (m.method === 'Runtime.exceptionThrown') hatalar.push('EXC: ' + JSON.stringify(m.params.exceptionDetails.exception && m.params.exceptionDetails.exception.description || m.params.exceptionDetails.text).slice(0,300)); });
  let hazir = false;
  for (let i = 0; i < 20 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }

  const sonuc = { hazir };
  if (hazir !== true) {
    // Harita hazır olmadıysa SEBEBİ ölç — "hazir:false" tek başına teşhis değil.
    sonuc.teshis = await js(`(()=>{
      const st = window.harita && harita.style;
      return { harita_var: !!window.harita,
               styleLoaded: (window.harita&&harita.isStyleLoaded)?harita.isStyleLoaded():null,
               katman: (st&&st._order)?st._order.length:0,
               sefer_katmanlari: (st&&st._order)?st._order.filter(x=>x.indexOf('sefer')===0):[],
               hidden: document.hidden,
               son_hata: window.__sonHata || null };})()`);
  }
  if (hazir === true) {
    sonuc.katmanlar = await js(`(()=>{const L=harita.getStyle().layers.map(l=>l.id);
      return { kenar: L.filter(id=>id.indexOf('sefer-kenar-')===0).length,
               govde: L.filter(id=>id.indexOf('sefer-cizgi-')===0).length,
               kenar_gövde_altinda: L.indexOf('sefer-kenar-sefer') < L.indexOf('sefer-cizgi-sefer'),
               kenar_genislik: harita.getPaintProperty('sefer-kenar-sefer','line-width'),
               govde_genislik: harita.getPaintProperty('sefer-cizgi-sefer','line-width'),
               kenar_renk: harita.getPaintProperty('sefer-kenar-sefer','line-color'),
               deniz_kenar_desen: harita.getPaintProperty('sefer-kenar-deniz','line-dasharray'),
               deniz_govde_desen: harita.getPaintProperty('sefer-cizgi-deniz','line-dasharray'),
               toplam_katman: L.length };})()`);

    // renk kuralı: uygulamanın KENDİ çözdüğü renkler (seferler dizisinden)
    sonuc.renkler = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      // tembel renk çözümü ilk seferGuncelle'de koşar
      tarihAyarla(gunIdx('1798-07-20')); await b(800);
      tarihAyarla(gunIdx('1526-08-29')); await b(800);
      const S=(window.seferler||[]);
      const say={};
      S.forEach(m=>{ if(m._renkCozuldu) say[m.renk]=(say[m.renk]||0)+1; });
      const ornek = ['Mohaç seferi','Fransız filosunun','Rus donanmasının Büyükdere','İngiliz donanmasının Çanakkale']
        .map(ad=>{const m=S.find(x=>(x.ad||'').indexOf(ad)===0); return m?{ad:m.ad.slice(0,40),renk:m.renk,devlet:m.devlet||null,taraf:m.taraf||null,cozuldu:!!m._renkCozuldu}:{ad,durum:'YOK'};});
      return { cozulen: S.filter(m=>m._renkCozuldu).length, toplam: S.length, renk_dagilimi_ilk10: Object.entries(say).sort((a,b)=>b[1]-a[1]).slice(0,10), ornek };})()`);

    // görsel kanıt: Osmanlı toprağında bir kara seferi (Mohaç 1526)
    sonuc.sahne = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olay = olaylar.find(o=>o.t && o.t.indexOf('1526-08-29')===0);
      if(olay){ tarihAyarla(olay.gi); }
      await b(600);
      const m=(window.seferler||[]).filter(x=>x.ekli);
      if(!m.length) return {durum:'EKRANDA OK YOK'};
      let a=[999,999],c=[-999,-999];
      m.forEach(x=>x.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];}));
      harita.fitBounds([a,c],{padding:70,duration:0}); await b(1600);
      return { oklar: m.map(x=>({ad:x.ad.slice(0,42), renk:x.renk, tur:x.tur})) };})()`);
    // 🔴 "EKRANDA VAR" İDDİASI ÖLÇÜLÜR — ekran görüntüsüne bakıp "çizilmiş"
    // demek 0070'te bir kez yanılttı. Okun yolu üzerindeki üç noktada hem
    // gövde hem kenar katmanı sorgulanıyor.
    sonuc.render = await js(`(()=>{
      const m=(window.seferler||[]).find(x=>x.ekli&&(x.ad||'').indexOf('Mohaç seferi')===0)||(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'ekranda ok yok'};
      const kat=Object.keys(HAREKET).map(t=>'sefer-cizgi-'+t).filter(id=>harita.getLayer(id));
      const ken=Object.keys(HAREKET).map(t=>'sefer-kenar-'+t).filter(id=>harita.getLayer(id));
      const nokta=[m.yol[1], m.yol[Math.floor(m.yol.length/2)], m.yol[m.yol.length-2]];
      return { ok:m.ad.slice(0,40), renk:m.renk,
        olcum: nokta.map(p=>{ const e=harita.project(p);
          const kutu=[[e.x-7,e.y-7],[e.x+7,e.y+7]];
          return { lonlat:p, govde:harita.queryRenderedFeatures(kutu,{layers:kat}).length,
                   kenar:harita.queryRenderedFeatures(kutu,{layers:ken}).length };})};})()`);

    const ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data)
      fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0072-kenar.png'), Buffer.from(ss.result.data, 'base64'));

    // 🔴 GÖRÜNÜRLÜK — 0070'te ok katmanları "none" olduğu için hiç çizilmiyordu
    // (kova/kutu kusuru). Aynı soru her sınavda yeniden sorulur.
    sonuc.gorunurluk = await js(`(()=>{
      const g = id => harita.getLayer(id) ? (harita.getLayoutProperty(id, 'visibility') || '(varsayilan)') : 'KATMAN YOK';
      const kutu = document.querySelector('input[data-katman="harekat"]');
      return { sefer_cizgi: g('sefer-cizgi-sefer'), sefer_kenar: g('sefer-kenar-sefer'),
               sefer_kaynak: g('sefer-kaynak'),
               kutu_harekat: kutu ? { var: true, checked: kutu.checked } : { var: false },
               kaynak_ozellik: (function () {
                 const s = harita.getSource('seferler');
                 const d = s && (s.serialize ? s.serialize().data : s._data);
                 return ((d && d.features) || []).length;
               })() };})()`);
    sonuc.konsol_hata = await js('(window.__hata||null)');
  }
  sonuc.tarayici_hatalari = hatalar.slice(0,10);
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

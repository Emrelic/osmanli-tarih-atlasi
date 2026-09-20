// -*- coding: utf-8 -*-
// SEFER-OK-0070 · gövde kalınlığı taralı/sade (Emre M-4838) SINAVI — 20 Eylül 2026
// Kullanım: node denetim/ARAC-OK-0074-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9346;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0074-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1200,800',
    '--no-first-run', 'http://localhost:' + PORT + '/'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 60 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p) => { const id = ++no; return new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }); };
  const js = async i => {
    const c = await gonder('Runtime.evaluate', { expression: i, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  let hazir = false;
  for (let i = 0; i < 24 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }
  const cikti = { hazir };
  if (hazir === true) {
    // ① TABAN: tarama şeridi zoom'dan bağımsız mı? (desen tanımı + iki zoomda
    // aynı mı) — "sabit piksel yazma, ölçümden al" şartının sınavı.
    cikti.taban = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olc = async z => { harita.setZoom(z); await b(900);
        const im = harita.style && harita.style.imageManager && harita.style.imageManager.images;
        const ad = Object.keys(im||{}).find(k=>k.indexOf('isgal-')===0);
        const g = ad ? im[ad] : null;
        return { zoom: z, desen_adi: ad||null,
                 boyut: g && g.data ? [g.data.width, g.data.height] : null,
                 pixelRatio: g ? (g.pixelRatio||1) : null }; };
      const a = await olc(4), c = await olc(9);
      return { z4:a, z9:c, serit_dik_px: +(3/Math.SQRT2).toFixed(2),
               sabit_mi: JSON.stringify(a.boyut)===JSON.stringify(c.boyut) && a.pixelRatio===c.pixelRatio,
               tablo: Object.keys(HAREKET).map(t=>t+' sade '+seferKalinlik(t,false)+' / tarali '+seferKalinlik(t,true)).join(' · ') };})()`);

    // ② TARALI ZEMİNDEN GEÇEN OK — Eflak-Boğdan işgali (1806-1812)
    cikti.tarali_ok = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1806-12-25')); await b(1200);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const m=(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'EKRANDA OK YOK'};
      let a=[999,999],c=[-999,-999];
      m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
      harita.fitBounds([a,c],{padding:70,duration:0}); await b(1500);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const s=harita.getSource('seferler'); const d=s&&(s.serialize?s.serialize().data:s._data);
      const f=((d&&d.features)||[]).filter(x=>x.geometry.type==='LineString');
      const ig=harita.getSource('isgal'); const gd=ig&&(ig.serialize?ig.serialize().data:ig._data);
      return { ok:m.ad.slice(0,45), isgal_poligon: ((gd&&gd.features)||[]).length,
               kesim: (m._kesimler||[]).map(k=>({tarali:k.tarali, nokta:k.yol.length})),
               cizilen_kesim: f.map(x=>({kalinlik:x.properties.kalinlik, nokta:x.geometry.coordinates.length})),
               render: (function(){ const p=harita.project(m.yol[Math.floor(m.yol.length/2)]);
                 return harita.queryRenderedFeatures([[p.x-8,p.y-8],[p.x+8,p.y+8]],{layers:['sefer-cizgi-sefer']}).length; })() };})()`);
    const ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0074-tarali.png'), Buffer.from(ss.result.data, 'base64'));

    // ③ TARALI OLMAYAN OK — Duckworth 1807 (denizde)
    cikti.sade_ok = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1807-02-20')); await b(1200);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const m=(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'EKRANDA OK YOK'};
      let a=[999,999],c=[-999,-999];
      m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
      harita.fitBounds([a,c],{padding:70,duration:0}); await b(1500);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const s=harita.getSource('seferler'); const d=s&&(s.serialize?s.serialize().data:s._data);
      const f=((d&&d.features)||[]).filter(x=>x.geometry.type==='LineString');
      return { ok:m.ad.slice(0,45), tur:m.tur,
               kesim: (m._kesimler||[]).map(k=>({tarali:k.tarali, nokta:k.yol.length})),
               cizilen_kesim: f.map(x=>({kalinlik:x.properties.kalinlik})),
               kenar_genislik: harita.getPaintProperty('sefer-kenar-deniz','line-width') };})()`);
    const ss2 = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss2.result && ss2.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0074-sade.png'), Buffer.from(ss2.result.data, 'base64'));
  }
  console.log(JSON.stringify(cikti, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

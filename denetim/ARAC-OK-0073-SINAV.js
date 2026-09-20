// -*- coding: utf-8 -*-
// SEFER-OK-0070 · paket 0073 SINAVI (H-0003 kalınlık · H-0001 kavis/uç) — 20 Eylül 2026
// Kullanım: node denetim/ARAC-OK-0073-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9344;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0073-'));
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
    cikti.kalinlik = await js(`(()=>({
      tablo: Object.keys(HAREKET).map(t=>t+':'+HAREKET[t].kalinlik).join(' · '),
      sefer_govde: harita.getPaintProperty('sefer-cizgi-sefer','line-width'),
      sefer_kenar: harita.getPaintProperty('sefer-kenar-sefer','line-width'),
      ince_tarama_px: +(3/Math.SQRT2).toFixed(2),
      oran_tarama: +(harita.getPaintProperty('sefer-cizgi-sefer','line-width')/(3/Math.SQRT2)).toFixed(2),
      uc_katmani: !!harita.getLayer('sefer-ucu'), uc_kenar: !!harita.getLayer('sefer-ucu-kenar'),
      katman_sayi: harita.getStyle().layers.length
    }))()`);

    cikti.sahne = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1526-08-29')); await b(1200); for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const m=(window.seferler||[]).find(x=>x.ekli&&(x.ad||'').indexOf('Mohaç')===0)||(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'ekranda ok yok'};
      let a=[999,999],c=[-999,-999];
      m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
      harita.fitBounds([a,c],{padding:60,duration:0}); await b(1500); for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); } await b(1200);
      const s=harita.getSource('seferler'); const d=s&&(s.serialize?s.serialize().data:s._data);
      const f=(d&&d.features)||[];
      const govde=f.find(x=>x.geometry.type==='LineString');
      const uc=f.find(x=>x.properties.nokta==='uc');
      const p=harita.project(m.yol[Math.floor(m.yol.length/2)]);
      const kutu=[[p.x-8,p.y-8],[p.x+8,p.y+8]];
      const son=harita.project((m._kavisli||m.yol)[(m._kavisli||m.yol).length-1]);
      const kutuUc=[[son.x-14,son.y-14],[son.x+14,son.y+14]];
      return { ok:m.ad.slice(0,40), veri_nokta:m.yol.length, cizilen_nokta: govde?govde.geometry.coordinates.length:0,
               kavis_uygulandi: !!(m._kavisli && m._kavisli.length > m.yol.length),
               uc_ozelligi: !!uc, uc_kanat: uc?uc.geometry.coordinates.length:0,
               render_govde: harita.queryRenderedFeatures(kutu,{layers:['sefer-cizgi-sefer']}).length,
               render_uc: harita.queryRenderedFeatures(kutuUc,{layers:['sefer-ucu']}).length,
               glif_px: (function(){const el=document.querySelector('.sefer-ok'); return el?getComputedStyle(el).fontSize:null;})() };})()`);

    const ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0073-mohac.png'), Buffer.from(ss.result.data, 'base64'));

    // ikinci sahne: uzun DÜZ hat (Duckworth deniz oku) — kavis burada görünmeli
    cikti.sahne2 = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('1807-02-20')); await b(1200);
      const m=(window.seferler||[]).find(x=>x.ekli);
      if(!m) return {durum:'ekranda ok yok'};
      let a=[999,999],c=[-999,-999];
      m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
      harita.fitBounds([a,c],{padding:60,duration:0}); await b(1500); for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); } await b(1200);
      return { ok:m.ad.slice(0,45), veri_nokta:m.yol.length, kavisli_nokta:(m._kavisli||[]).length, tur:m.tur };})()`);
    const ss2 = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss2.result && ss2.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0073-duckworth.png'), Buffer.from(ss2.result.data, 'base64'));
  }
  console.log(JSON.stringify(cikti, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

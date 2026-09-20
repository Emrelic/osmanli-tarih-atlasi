// -*- coding: utf-8 -*-
// SEFER-OK-0070 · DALGA-0074 H-0011 — yeni okun (p0074) sınavı, 21 Eylül 2026
// `data/seferler_p0074.js` index.html'e BAĞLI DEĞİL (koordinatör bağlar); sınav
// index.html'in GEÇİCİ bir kopyasını üretip dosyayı app.js'ten ÖNCE bağlıyor.
// "Bağlı değil" ile "çalışmıyor" ayrı sorulardır (D099).
// Kullanım: node denetim/ARAC-OK-0074B-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9348;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

function sinavSayfasi(kok) {
  const html = fs.readFileSync(path.join(kok, 'index.html'), 'utf8');
  const i = html.indexOf('<script src="js/app.js');
  if (i < 0) throw new Error('js/app.js satiri yok');
  const yeni = html.slice(0, i) + '<script src="data/seferler_p0074.js"></script>\n' + html.slice(i);
  const yol = path.join(kok, '_sinav_ok0074.html');
  fs.writeFileSync(yol, yeni, 'utf8');
  return yol;
}

(async () => {
  const KOK = path.resolve(__dirname, '..');
  let sayfa = null;
  try { sayfa = sinavSayfasi(KOK); } catch (e) { console.log('SAYFA YAZILAMADI: ' + e.message); return; }
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0074b-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1200,800',
    '--no-first-run', 'http://localhost:' + PORT + '/_sinav_ok0074.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 60 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); try { fs.unlinkSync(sayfa); } catch (e) { } return; }
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
    cikti.olcum = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const okundu = (window.SEFERLER_P0074||[]).length;
      tarihAyarla(gunIdx('1829-08-01')); await b(1200);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const m=(window.seferler||[]).find(x=>(x.ad||'').indexOf('Diebitsch')>=0);
      if(!m) return { okundu, durum:'KAYIT seferler dizisinde YOK' };
      let a=[999,999],c=[-999,-999];
      m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
      harita.fitBounds([a,c],{padding:80,duration:0}); await b(1500);
      for(let i=0;i<40;i++){ if(harita.loaded()) break; await b(250); }
      const s=harita.getSource('seferler'); const d=s&&(s.serialize?s.serialize().data:s._data);
      const f=((d&&d.features)||[]).filter(x=>x.geometry.type==='LineString');
      const p=harita.project(m._kavisli?m._kavisli[Math.floor(m._kavisli.length/2)]:m.yol[0]);
      return { okundu, ok:m.ad.slice(0,50), ekli:!!m.ekli, renk:m.renk,
               kavisli_nokta:(m._kavisli||[]).length, veri_nokta:m.yol.length,
               kesim:(m._kesimler||[]).map(k=>({tarali:k.tarali, nokta:k.yol.length})),
               cizilen:f.map(x=>({kalinlik:x.properties.kalinlik})),
               render: harita.queryRenderedFeatures([[p.x-8,p.y-8],[p.x+8,p.y+8]],{layers:['sefer-cizgi-sefer']}).length };})()`);
    const ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0074B-dibic.png'), Buffer.from(ss.result.data, 'base64'));
  }
  console.log(JSON.stringify(cikti, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  try { fs.unlinkSync(sayfa); } catch (e) { }
  process.exit(0);
})();

// -*- coding: utf-8 -*-
// YUKLEME-0072 — JS KAYNAK AYRISTIRMA vs JSON.parse (ayni veri, iki yol).
// app.js:306 "olculdu: <script> 12,0-14,1 sn <-> fetch+JSON 5,9-6,9 sn" diyor;
// bu alet o iddiayi BAGIMSIZ olcer.
// Kullanim: node denetim/ARAC-YUKLEME-0072-JSON.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8799';
const CDP = 9347;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

const SINAV = [
  { ad: 'PARCALAR (Osmanli havuzu)', yol: '/denetim/_parcalar_olcum.json' },
  { ad: 'DEVLET_PARCALAR (yabanci havuzu)', yol: '/denetim/_devletparca_olcum.json' },
];

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'json0072-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 60 && !hedef; i++) { await bekle(500); try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page'); } catch (e) { } }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bekleyen = new Map();
  ws.addEventListener('message', ev => {
    const m = JSON.parse(ev.data);
    if (m.id && bekleyen.has(m.id)) { bekleyen.get(m.id)(m.result || m.error); bekleyen.delete(m.id); }
  });
  const cagir = (y, p) => new Promise(ok => { const id = ++no; bekleyen.set(id, ok); ws.send(JSON.stringify({ id, method: y, params: p || {} })); });
  const dg = (i, ms) => cagir('Runtime.evaluate', { expression: i, returnByValue: true, awaitPromise: true, timeout: ms || 300000 });

  await cagir('Runtime.enable'); await cagir('Page.enable');
  const rapor = [];
  for (const s of SINAV) {
    // her sinav icin TEMIZ sayfa (yigin kirlenmesin)
    await cagir('Page.navigate', { url: 'http://127.0.0.1:' + PORT + '/denetim/_yukleme0072_bos.html' });
    await bekle(1500);
    const r = await dg('(async function(){'
      + 'var g=await fetch("' + s.yol + '");var t=await g.text();'
      + 'var m0=performance.memory.usedJSHeapSize;'
      + 'var a=performance.now();var J=JSON.parse(t);var b=performance.now();'
      + 'var m1=performance.memory.usedJSHeapSize;'
      + 'window._J=J;'
      + 'var c=performance.now();var F=(new Function("return "+t))();var d=performance.now();'
      + 'var m2=performance.memory.usedJSHeapSize;'
      + 'window._F=F;'
      + 'return JSON.stringify({bayt:t.length,json:Math.round(b-a),kaynak:Math.round(d-c),'
      + 'json_yigin:m1-m0,kaynak_yigin:m2-m1,oge:J.length,esit:J.length===F.length});})()', 600000);
    if (!r || !r.result || typeof r.result.value !== 'string') { console.log(s.ad, 'OLCULEMEDI', JSON.stringify(r).slice(0, 300)); continue; }
    const v = JSON.parse(r.result.value);
    v.ad = s.ad;
    v.kazanc_yuzde = Math.round(100 * (1 - v.json / v.kaynak));
    rapor.push(v);
    console.log(s.ad + ':');
    console.log('   bayt              : ' + (v.bayt / 1048576).toFixed(2) + ' MB   oge: ' + v.oge);
    console.log('   JS kaynak (Function): ' + v.kaynak + ' ms   yigin ' + (v.kaynak_yigin / 1048576).toFixed(0) + ' MB');
    console.log('   JSON.parse          : ' + v.json + ' ms   yigin ' + (v.json_yigin / 1048576).toFixed(0) + ' MB');
    console.log('   KAZANC              : %' + v.kazanc_yuzde + '  (ayni oge sayisi: ' + v.esit + ')');
  }
  fs.writeFileSync(path.join(path.resolve(__dirname, '..'), 'denetim', 'YUKLEME-0072-JSON.json'),
    JSON.stringify({ zaman: new Date().toISOString(), sinav: rapor }, null, 1), 'utf8');
  console.log('\nJSON: denetim/YUKLEME-0072-JSON.json');
  ws.close(); ch.kill(); process.exit(0);
})();

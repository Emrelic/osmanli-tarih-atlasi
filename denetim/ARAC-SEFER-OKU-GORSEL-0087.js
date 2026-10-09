// -*- coding: utf-8 -*-
// SEFER-OKU-0087 — sahne görüntüsü (headless Chrome + CDP). Kalıp: ARAC-SEFER-OK-UC-0080.js.
// Kullanım: node denetim/ARAC-SEFER-OKU-GORSEL-0087.js <port> <etiket> <cikti_klasoru>
'use strict';
const { spawn } = require('child_process');
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path');
const [PORT, ETIKET, KLASOR] = [process.argv[2] || '8791', process.argv[3] || 'sonra', process.argv[4] || '.'];
const CDP = +(process.env.CDP || 9361);
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SAHNE = [
  { ad: 'rodos-0626-z6',  gun: '1522-06-26', c: [27.3, 38.6], z: 6 },
  { ad: 'rodos-0105-z6',  gun: '1523-01-05', c: [27.3, 38.6], z: 6 },
  { ad: 'misir-0605-z5',  gun: '1516-06-05', c: [33.5, 35.5], z: 4.6 },
  { ad: 'misir-0824-z5',  gun: '1516-08-24', c: [33.5, 35.5], z: 4.6 },
  { ad: 'misir-0102-z5',  gun: '1517-01-02', c: [33.5, 35.5], z: 4.6 },
  { ad: 'sahkulu-0702-z6', gun: '1511-07-02', c: [33.5, 38.5], z: 5.5 },
];
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = y => new Promise((ok, no) => http.get({ host: '127.0.0.1', port: CDP, path: y }, res => {
  let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { no(e); } });
}).on('error', no));
(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'seferoku-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader', '--enable-unsafe-swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', '--disable-extensions', 'http://127.0.0.1:' + PORT + '/index.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) { await bekle(500); try { const l = await getJSON('/json/list'); hedef = l.find(t => t.type === 'page' && t.url.indexOf('127.0.0.1') > 0); } catch (e) {} }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const cdp = (method, params) => new Promise(r => { const id = ++no; bek.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
  const ev = async expr => { const r = await cdp('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : JSON.stringify(r); };
  let hazir = false;
  for (let i = 0; i < 240 && !hazir; i++) { await bekle(1000); hazir = await ev('typeof haritaHazir!=="undefined" && haritaHazir===true'); }
  if (!hazir) { console.log('HARITA HAZIR OLMADI'); ch.kill(); return; }
  await ev('(function(){var b=[].slice.call(document.querySelectorAll("button")).filter(function(x){return x.textContent.trim()==="Hayır";})[0]; if(b) b.click(); return !!b;})()');
  await bekle(1000);
  for (const s of SAHNE) {
    await ev(`(function(){ window.SEFER_ANIM_GIZLI = {}; tarihAyarla(gunIdx("${s.gun}")); harita.jumpTo({center:${JSON.stringify(s.c)}, zoom:${s.z}}); return 1; })()`);
    await bekle(9000);
    const r = await cdp('Page.captureScreenshot', { format: 'png' });
    const yol = path.join(KLASOR, 'SINAV-SEFER-OKU-0087-' + ETIKET + '-' + s.ad + '.png');
    fs.writeFileSync(yol, Buffer.from(r.result.data, 'base64'));
    console.log(yol);
  }
  ws.close(); ch.kill();
})();

// -*- coding: utf-8 -*-
// GORUNTU-0087 — sahne görüntüsü + o sahnedeki katman/özellik ölçümü (headless Chrome + CDP).
// Kalıp: denetim/ARAC-SEFER-OK-UC-0080.js. Gerçek index.html + data; app.js'in kendi tarihAyarla'sı.
// Kullanım: node denetim/ARAC-GORUNTU-0087.js <port> <sahne.json> <cikti_klasoru>
//   sahne.json: [{ad, gun, c:[lon,lat], z, sor?: "JS ifadesi (sonucu JSON'a yazılır)"}]
'use strict';
const { spawn } = require('child_process');
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path');
const [PORT, SAHNE_YOL, KLASOR] = [process.argv[2], process.argv[3], process.argv[4] || '.'];
const SAHNE = JSON.parse(fs.readFileSync(SAHNE_YOL, 'utf8'));
const CDP = +(process.env.CDP || 9371);
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = y => new Promise((ok, no) => http.get({ host: '127.0.0.1', port: CDP, path: y }, res => {
  let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { no(e); } });
}).on('error', no));
(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'goruntu87-'));
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
  // "tam ekran" sorusunu kapat (SEFER-OKU-0087'de görüntüyü örtüyordu)
  await ev('(function(){try{localStorage.setItem("tamEkranSorma","1")}catch(e){};[].slice.call(document.querySelectorAll("button")).forEach(function(b){if(b.textContent.trim()==="Hayır")b.click();});return 1})()');
  const out = {};
  for (const s of SAHNE) {
    await ev(`(function(){ tarihAyarla(gunIdx("${s.gun}")); harita.jumpTo({center:${JSON.stringify(s.c)}, zoom:${s.z}}); return 1; })()`);
    await bekle(9000);
    await ev('(function(){[].slice.call(document.querySelectorAll("button")).forEach(function(b){if(b.textContent.trim()==="Hayır")b.click();});return 1})()');
    await bekle(800);
    const r = await cdp('Page.captureScreenshot', { format: 'png' });
    const yol = path.join(KLASOR, 'SINAV-GORUNTU-0087-' + s.ad + '.png');
    fs.writeFileSync(yol, Buffer.from(r.result.data, 'base64'));
    out[s.ad] = { png: yol, sor: s.sor ? await ev(s.sor) : null };
  }
  console.log(JSON.stringify(out, null, 1));
  ws.close(); ch.kill();
})();

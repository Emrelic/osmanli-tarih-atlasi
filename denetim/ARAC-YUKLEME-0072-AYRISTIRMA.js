// -*- coding: utf-8 -*-
// YUKLEME-0072 — DOSYA BASINA AYRISTIRMA+CALISTIRMA maliyeti.
// Ag etkisini yok etmek icin dosyalar YEREL sunucudan, TEK TEK, sirayla yuklenir;
// her biri icin: gecen sure (fetch+derleme+calistirma) ve JS yigini artisi olculur.
// Kullanim: node denetim/ARAC-YUKLEME-0072-AYRISTIRMA.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const KOK = path.resolve(__dirname, '..');
const PORT = process.argv[2] || '8799';
const CDP = 9345;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const sut = (s, n) => (s.length > n ? s.slice(0, n - 1) + '~' : s).padEnd(n);
const sag = (x, n) => String(x).padStart(n);
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

// index.html'deki script sirasini al (yerel olanlar)
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const liste = [];
for (const m of html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)) {
  const s = m[1];
  if (s.startsWith('http')) continue;
  const yol = s.split('?')[0];
  if (fs.existsSync(path.join(KOK, yol.replace('/', path.sep)))) liste.push(yol);
}

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ayr0072-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--js-flags=--expose-gc', '--no-first-run', 'about:blank'], { stdio: 'ignore' });
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
  const cagir = (yon, par) => new Promise(ok => { const id = ++no; bekleyen.set(id, ok); ws.send(JSON.stringify({ id, method: yon, params: par || {} })); });
  const degerle = (ifade, ms) => cagir('Runtime.evaluate', { expression: ifade, returnByValue: true, awaitPromise: true, timeout: ms || 120000 });

  await cagir('Runtime.enable');
  await cagir('Page.enable');
  await cagir('Page.navigate', { url: 'http://127.0.0.1:' + PORT + '/denetim/_yukleme0072_bos.html' });
  await bekle(2500);

  const sonuc = [];
  for (const yol of liste) {
    const r = await degerle('(async function(){'
      + 'var t0=performance.now();'
      + 'var m0=(performance.memory?performance.memory.usedJSHeapSize:0);'
      + 'var g=await fetch("/' + yol + '");var metin=await g.text();'
      + 'var t1=performance.now();'
      + 'var s=document.createElement("script");s.textContent=metin;document.head.appendChild(s);'
      + 'var t2=performance.now();'
      + 'var m1=(performance.memory?performance.memory.usedJSHeapSize:0);'
      + 'return JSON.stringify({yol:"' + yol + '",bayt:metin.length,getir:Math.round(t1-t0),'
      + 'ayristir:Math.round(t2-t1),yigin:m1-m0});})()', 300000);
    if (r && r.result && typeof r.result.value === 'string') sonuc.push(JSON.parse(r.result.value));
    else sonuc.push({ yol, hata: JSON.stringify(r && (r.exceptionDetails || r)).slice(0, 200) });
  }
  const son = await degerle('JSON.stringify({yigin:performance.memory.usedJSHeapSize,toplam:performance.memory.totalJSHeapSize})');
  const bilgi = JSON.parse(son.result.value);

  const iyi = sonuc.filter(s => !s.hata);
  const topA = iyi.reduce((a, s) => a + s.ayristir, 0);
  const topG = iyi.reduce((a, s) => a + s.getir, 0);
  const topB = iyi.reduce((a, s) => a + s.bayt, 0);
  console.log('dosya            : ' + iyi.length + ' / ' + liste.length + '   hatali: ' + (sonuc.length - iyi.length));
  console.log('toplam kaynak    : ' + (topB / 1048576).toFixed(1) + ' MB');
  console.log('TOPLAM AYRISTIRMA+CALISTIRMA : ' + (topA / 1000).toFixed(1) + ' sn');
  console.log('toplam yerel getirme         : ' + (topG / 1000).toFixed(1) + ' sn (diskten, ag degil)');
  console.log('son JS yigini                : ' + (bilgi.yigin / 1048576).toFixed(0) + ' MB (toplam ' + (bilgi.toplam / 1048576).toFixed(0) + ' MB)');
  console.log('\n--- en pahali 12 (ayristirma+calistirma) ---');
  console.log('  ' + sut('dosya', 40) + sag('MB', 8) + sag('ayr.ms', 9) + sag('MB/sn', 8) + sag('yigin MB', 10));
  iyi.slice().sort((a, b) => b.ayristir - a.ayristir).slice(0, 12).forEach(s => console.log('  ' + sut(s.yol, 40)
    + sag((s.bayt / 1048576).toFixed(2), 8) + sag(s.ayristir, 9)
    + sag((s.bayt / 1048576 / (s.ayristir / 1000)).toFixed(1), 8) + sag((s.yigin / 1048576).toFixed(0), 10)));
  const uc = iyi.filter(s => /donemler\.js|devletler_harita\.js|altlik\.js/.test(s.yol));
  const ucA = uc.reduce((a, s) => a + s.ayristir, 0);
  console.log('\nUC BUYUK DOSYA : ' + (ucA / 1000).toFixed(1) + ' sn = toplam ayristirmanin %' + (100 * ucA / topA).toFixed(0));
  console.log('KALAN ' + (iyi.length - uc.length) + ' dosya : ' + ((topA - ucA) / 1000).toFixed(1) + ' sn');

  fs.writeFileSync(path.join(KOK, 'denetim', 'YUKLEME-0072-AYRISTIRMA.json'),
    JSON.stringify({ zaman: new Date().toISOString(), toplam_ayristirma_ms: topA, toplam_bayt: topB, yigin: bilgi, dosyalar: sonuc }, null, 1), 'utf8');
  console.log('\nJSON: denetim/YUKLEME-0072-AYRISTIRMA.json');
  ws.close(); ch.kill(); process.exit(0);
})();

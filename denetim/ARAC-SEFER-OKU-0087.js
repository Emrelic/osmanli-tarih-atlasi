// -*- coding: utf-8 -*-
// SEFER-OKU-0087 — sefer oklarının GÖRÜNÜRLÜK ve HAT ölçümü (headless Chrome + CDP).
// Kalıp: denetim/ARAC-SEFER-OK-UC-0080.js. Gerçek index.html + data yüklenir, app.js'in
// KENDİ seferGuncelle(t) / seferHat(m,t) işlevleri çağrılır (kopya hesap YOK).
// Kullanım: node denetim/ARAC-SEFER-OKU-0087.js <port> [ek.js]
//   ek.js verilirse sayfa yüklendikten SONRA, seferler yeniden toplanmadan önce
//   değerlendirilir (öneri verisini sınamak için: window.SEFERLER'i yamalar ve
//   `seferler` dizisini app.js'in kendi seferKayitlariniTopla() ile yeniden kurar).
'use strict';
const { spawn } = require('child_process');
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path');
const PORT = process.argv[2] || '8791';
const EK = process.argv[3] ? fs.readFileSync(process.argv[3], 'utf8') : '';
const CDP = +(process.env.CDP || 9351);
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = y => new Promise((ok, no) => http.get({ host: '127.0.0.1', port: CDP, path: y }, res => {
  let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { no(e); } });
}).on('error', no));

// Ölçülecek günler × kayıt adı alt dizgisi
const OLCUM = `
(function(){
  var GUN = ${JSON.stringify([
    ['Şahkulu', ['1511-03-01','1511-07-02','1511-07-03','1512-01-01','1512-07-01','1512-08-06']],
    ['Mısır seferi (1516', ['1516-06-05','1516-07-30','1516-08-24','1516-08-28','1516-09-27','1516-12-21','1516-12-29','1517-01-02','1517-01-22','1517-01-24','1517-02-15','1517-02-22','1517-02-23']],
    ['Rodos seferi (1522', ['1522-06-01','1522-06-04','1522-06-18','1522-06-26','1522-07-26','1522-12-21','1523-01-01','1523-01-02','1523-01-05']],
    ['Marmaris', ['1522-06-18','1522-07-26','1522-09-24','1522-12-21']],
    ['Çaldıran seferi', ['1514-03-20','1514-08-23']]
  ])};
  var out = {};
  GUN.forEach(function(g){
    var ad = g[0];
    var K = seferler.filter(function(m){ return (m.ad||'').indexOf(ad) >= 0; });
    out[ad] = K.map(function(m){
      var r = { ad: m.ad, tur: m.tur, nokta: m.yol.length, kademe: !!m.kademe, kavis: m.kavis, gunler: {} };
      g[1].forEach(function(d){
        var t = gunIdx(d);
        seferGuncelle(t);
        var aktif = m._fiKirpik <= t && t < m._tiKirpik;
        var hat = aktif ? seferHat(m, t) : null;
        r.gunler[d] = aktif ? ('GORUNUR · hat ' + hat.length + ' nokta · uç ' + JSON.stringify(m.yol[Math.max(1, seferKademeIdx(m,t) < 0 ? m.yol.length-1 : seferKademeIdx(m,t))])) : 'gizli';
      });
      r.fi = m.fi; r.ti = m.ti; r.fiKirpik = m._fiKirpik; r.tiKirpik = m._tiKirpik;
      return r;
    });
  });
  // gün indisini tarihe çevirmek için: komşu olay başlıkları
  function olayAdi(gi){ var o = olaylar.filter(function(x){return x.gi===gi;})[0]; return o ? (o.b||o.baslik||'?') : '(olay yok)'; }
  Object.keys(out).forEach(function(k){ out[k].forEach(function(r){ r.tiKirpik_olay = olayAdi(r.tiKirpik); r.fiKirpik_olay = olayAdi(r.fiKirpik); }); });
  return JSON.stringify(out);
})()`;

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'seferoku-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader', '--enable-unsafe-swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', '--disable-extensions', 'http://127.0.0.1:' + PORT + '/index.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { const l = await getJSON('/json/list'); hedef = l.find(t => t.type === 'page' && t.url.indexOf('127.0.0.1') > 0); } catch (e) {}
  }
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
  if (EK) { const r = await ev(EK); console.error('EK:', r); }
  const sonuc = await ev(OLCUM);
  if (process.env.CIKTI) fs.writeFileSync(process.env.CIKTI, sonuc, 'utf8'); else console.log(sonuc);
  ws.close(); ch.kill();
})();

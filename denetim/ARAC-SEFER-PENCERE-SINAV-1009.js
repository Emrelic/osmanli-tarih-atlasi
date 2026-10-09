// -*- coding: utf-8 -*-
// ARAC-SEFER-PENCERE-SINAV-1009 — sefer okunun görünürlük penceresi sınavı (headless Chrome + CDP).
// Emre kararı "A" (9 Ekim 2026): ok `t` GÜNÜNÜN SONUNDA düşer (js/app.js `_tiKirpik = min(sonraki, ti+1)`).
// Gerçek index.html + data yüklenir; app.js'in KENDİ `seferGuncelle`'si `_fiKirpik/_tiKirpik`i kurar,
// görünürlük app.js'teki ifadenin aynısıyla okunur (`_fiKirpik <= t && t < _tiKirpik`).
//
// Kullanım (iki kol, ayrı sunucu ya da aynı sunucu farklı app.js ile):
//   node ARAC-SEFER-PENCERE-SINAV-1009.js olc <port> <yamasiz|yamali> <cikti.json>
//   node ARAC-SEFER-PENCERE-SINAV-1009.js karsilastir <yamasiz.json> <yamali.json>
// Çıkış: 0 = bütün beklentiler tuttu · 1 = en az bir beklenti TUTMADI · 2 = ölçülemedi.
//
// BEKLENTİLER (iki yönde):
//   yamasiz : t'yi aşan ok > 0 (ölçüm: origin/main 5921a031'de 126/131) · Kefe 1454-07-15 GÖRÜNÜR
//   yamali  : t'yi aşan ok = 0 · Kefe 1454-07-14 GÖRÜNÜR / 07-15 GİZLİ
//   ikisi   : Çaldıran seferi 1514-08-23 (kendi t günü) GÖRÜNÜR
//   karsilastir: "olay olay" kipi — her ok × her madde günü görünürlüğü iki kolda AYNI (fark 0)
'use strict';
const { spawn } = require('child_process');
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path');
const [MOD, A1, A2, A3] = process.argv.slice(2);
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CDP = +(process.env.CDP || 9411);
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = y => new Promise((ok, no) => http.get({ host: '127.0.0.1', port: CDP, path: y }, res => {
  let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { no(e); } });
}).on('error', no));

const OLCUM = `(function(){
  var gun = function(d){ return gunIdx(d); };
  seferGuncelle(gun('1454-07-14'));                 // kırpma alanlarını app.js kursun
  seferler.forEach(function(m){ if (m._tiKirpik === undefined) seferGuncelle(m.ti); });
  var gor = function(m, t){ return m._fiKirpik <= t && t < m._tiKirpik; };   // app.js:aktif ifadesi
  var gunler = olaylar.map(function(o){ return o.gi; }).filter(function(g,i,a){ return a.indexOf(g) === i; }).sort(function(a,b){return a-b;});
  var ok = seferler.map(function(m){
    var vek = gunler.map(function(g){ return gor(m, g) ? 1 : 0; }).join('');
    return { ad: m.ad, tur: m.tur, ti: m.ti, tiK: m._tiKirpik, asan: m._tiKirpik - m.ti > 1, vek: vek };
  });
  var bul = function(s){ return seferler.filter(function(m){ return (m.ad||'').indexOf(s) >= 0; })[0]; };
  var kefe = bul('Kefe seferi (1454)'), cal = bul('Çaldıran seferi (1514)');
  return JSON.stringify({ n_ok: seferler.length, n_madde_gunu: gunler.length, ok: ok,
    kefe: kefe ? { '1454-07-14': gor(kefe, gun('1454-07-14')), '1454-07-15': gor(kefe, gun('1454-07-15')) } : null,
    caldiran: cal ? { '1514-08-23': gor(cal, gun('1514-08-23')) } : null });
})()`;

async function olc(port, kol, cikti) {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'pencere1009-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader', '--enable-unsafe-swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', '--disable-extensions', 'http://127.0.0.1:' + port + '/index.html'], { stdio: 'ignore' });
  try {
    let hedef = null;
    for (let i = 0; i < 40 && !hedef; i++) { await bekle(500); try { const l = await getJSON('/json/list'); hedef = l.find(t => t.type === 'page' && t.url.indexOf('127.0.0.1') > 0); } catch (e) {} }
    if (!hedef) { console.log('ÖLÇÜLEMEDİ: Chrome açılmadı'); return 2; }
    const ws = new WebSocket(hedef.webSocketDebuggerUrl);
    await new Promise(r => ws.addEventListener('open', r));
    let no = 0; const bek = new Map();
    ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
    const cdp = (method, params) => new Promise(r => { const id = ++no; bek.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
    const ev = async e => { const r = await cdp('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
    let hazir = false;
    for (let i = 0; i < 240 && !hazir; i++) { await bekle(1000); hazir = await ev('typeof haritaHazir!=="undefined" && haritaHazir===true'); }
    if (!hazir) { console.log('ÖLÇÜLEMEDİ: harita hazır olmadı'); return 2; }
    const s = JSON.parse(await ev(OLCUM)); s.kol = kol;
    fs.writeFileSync(cikti, JSON.stringify(s), 'utf8');
    ws.close();
    const asan = s.ok.filter(o => o.asan).length;
    const B = [];
    if (kol === 'yamasiz') B.push(['t\'yi aşan ok > 0', asan > 0, asan + '/' + s.n_ok]);
    if (kol === 'yamali')  B.push(['t\'yi aşan ok = 0', asan === 0, asan + '/' + s.n_ok]);
    if (!s.kefe) B.push(['Kefe kaydı yüklü', false, 'YOK']);
    else if (kol === 'yamali') { B.push(['Kefe 1454-07-14 görünür', s.kefe['1454-07-14'] === true, s.kefe['1454-07-14']]);
                                 B.push(['Kefe 1454-07-15 gizli', s.kefe['1454-07-15'] === false, s.kefe['1454-07-15']]); }
    else { B.push(['Kefe 1454-07-14 görünür', s.kefe['1454-07-14'] === true, s.kefe['1454-07-14']]);
           B.push(['Kefe 1454-07-15 GÖRÜNÜR (eski davranış — sınavın öbür yönü)', s.kefe['1454-07-15'] === true, s.kefe['1454-07-15']]); }
    B.push(['Çaldıran 1514-08-23 (kendi t günü) görünür', !!(s.caldiran && s.caldiran['1514-08-23']), s.caldiran && s.caldiran['1514-08-23']]);
    let kod = 0;
    console.log('KOL ' + kol + ' · ok ' + s.n_ok + ' · madde günü ' + s.n_madde_gunu);
    B.forEach(b => { console.log('  ' + (b[1] ? '✓' : '✗') + ' ' + b[0] + '  [' + b[2] + ']'); if (!b[1]) kod = 1; });
    return kod;
  } finally { ch.kill(); }
}

function karsilastir(a, b) {
  const A = JSON.parse(fs.readFileSync(a, 'utf8')), Bv = JSON.parse(fs.readFileSync(b, 'utf8'));
  if (A.n_madde_gunu !== Bv.n_madde_gunu) { console.log('ÖLÇÜLEMEDİ: iki kolun madde günü sayısı farklı'); return 2; }
  const Bm = new Map(Bv.ok.map(o => [o.ad + '|' + o.ti, o]));
  let fark = [], eksik = 0;
  A.ok.forEach(o => { const p = Bm.get(o.ad + '|' + o.ti); if (!p) { eksik++; return; } if (p.vek !== o.vek) fark.push(o.ad); });
  console.log('OLAY OLAY KİPİ — ' + A.ok.length + ' ok × ' + A.n_madde_gunu + ' madde günü');
  console.log('  ' + (fark.length === 0 && eksik === 0 ? '✓' : '✗') + ' görünürlüğü farklı ok: ' + fark.length + '/' + A.ok.length + (eksik ? ' · eşleşmeyen ' + eksik : ''));
  fark.slice(0, 20).forEach(x => console.log('     ' + x));
  return (fark.length === 0 && eksik === 0) ? 0 : 1;
}

(async () => {
  let kod = 2;
  if (MOD === 'olc') kod = await olc(A1, A2, A3);
  else if (MOD === 'karsilastir') kod = karsilastir(A1, A2);
  else console.log('kullanım: olc <port> <yamasiz|yamali> <cikti.json> | karsilastir <a.json> <b.json>');
  process.exit(kod);
})();

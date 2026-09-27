// -*- coding: utf-8 -*-
// SEFER-OK-0077 · parti-emrelic-0080 H-0012 — OK BAŞI SINAVI (headless Chrome + CDP)
// Emre: "deniz seferi ok başı çok şekilsiz ... hem çok büyük hem asimetrik hem ok
// başı olduğu anlaşılmıyor."
//
// Ne yapar: aynı sahneleri (gün · merkez · zoom) açar, ok başının EKRANDAKİ
// boyunu ölçer (kanat uçlarının piksel uzaklığı) ve kırpılmış PNG alır.
// Kalıp: denetim/ARAC-SEFER-OK-SINAV-0070.js (gizli panoda rAF durur — D: 0070 §2.3).
//
// Kullanım:  node denetim/ARAC-SEFER-OK-UC-0080.js <etiket> [port]
//   etiket → çıktı: denetim/SINAV-SEFER-OK-UC-0080-<etiket>-<sahne>.png + JSON stdout
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ETIKET = process.argv[2] || 'once';
const PORT = process.argv[3] || '8777';
const URL_ = 'http://localhost:' + PORT + '/';
const CDP = 9334;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Sahneler: Emre'nin görseli (Savoy 1366, z6) + aynı ok iki zoom ucunda +
// kısa bir deniz oku + bir kara oku (D206: tek uçta ölçülen düzeltme öbür uca taşır).
const SAHNE = [
  { ad: 'savoy-z6',   gun: '1366-08-01', c: [26.2, 40.2], z: 6 },
  { ad: 'savoy-z4',   gun: '1366-08-01', c: [22.0, 40.0], z: 4 },
  { ad: 'savoy-z8',   gun: '1366-08-01', c: [26.6, 40.35], z: 8 },
  { ad: 'karadeniz-z5', gun: '1914-10-29', c: [33.3, 43.8], z: 5 },
  { ad: 'bakü-z6',    gun: '1918-09-15', c: [48.3, 40.5], z: 6 },
];

function bekle(ms) { return new Promise(r => setTimeout(r, ms)); }
function getJSON(yol) {
  return new Promise((ok, hata) => {
    http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
      let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
    }).on('error', hata);
  });
}

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'seferuc-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil,
    '--window-size=1400,900', '--no-first-run', '--disable-extensions', URL_],
    { stdio: 'ignore', detached: false });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { const l = await getJSON('/json/list'); hedef = l.find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) {}
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bekleyen = new Map();
  const istisnalar = [];
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data);
    if (m.method === 'Runtime.exceptionThrown') istisnalar.push((m.params.exceptionDetails.exception || {}).description || m.params.exceptionDetails.text);
    if (m.id && bekleyen.has(m.id)) { bekleyen.get(m.id)(m); bekleyen.delete(m.id); } });
  const gonder = (metot, params) => { const id = ++no; return new Promise(r => { bekleyen.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: params || {} })); }); };
  async function js(ifade) {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + JSON.stringify(c.result.exceptionDetails.exception && c.result.exceptionDetails.exception.description) };
    return c.result && c.result.result ? c.result.result.value : null;
  }
  await gonder('Runtime.enable');
  const hazir = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
    for(let i=0;i<180;i++){ if(window.haritaHazir && typeof seferGuncelle==='function') return true; await b(500);} return false;})()`);
  const sonuc = { etiket: ETIKET, hazir, sahne: {} };
  if (!hazir) sonuc.teshis = { istisnalar: istisnalar.slice(0, 5).map(s => String(s).slice(0, 400)),
    durum: await js(`({h:window.haritaHazir, stil:!!(window.harita&&harita.isStyleLoaded&&harita.isStyleLoaded()), gorunur:document.visibilityState})`) };
  if (hazir) {
    for (const s of SAHNE) {
      sonuc.sahne[s.ad] = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
        tarihAyarla(gunIdx('${s.gun}')); harita.jumpTo({center:[${s.c}],zoom:${s.z}});
        await b(2500);
        for(let i=0;i<40 && !harita.loaded();i++) await b(500);
        await new Promise(r=>{ harita.once('idle', r); harita.triggerRepaint(); setTimeout(r, 8000); });
        await b(800);
        const src=harita.getSource('seferler'); const d=src.serialize?src.serialize().data:src._data;
        const f=((d&&d.features)||[]);
        // ok başı: nokta:'uc' (çizgi kanatları) ya da nokta:'uc-uc' (yeni üçgen) — hangisi varsa
        const uc=f.filter(x=>x.properties && /^uc/.test(x.properties.nokta||''));
        const pxs=[];
        uc.forEach(x=>{ const g=x.geometry;
          const noktalar = g.type==='MultiLineString'? [].concat(...g.coordinates)
                         : g.type==='Polygon'? g.coordinates[0] : g.type==='Point'? [g.coordinates] : g.coordinates;
          const p=noktalar.map(k=>harita.project(k));
          let mx=0; for(const a of p) for(const bb of p) mx=Math.max(mx,Math.hypot(a.x-bb.x,a.y-bb.y));
          pxs.push(Math.round(mx)); });
        // v2: uç bir Point + SDF ikon — ekrandaki boyu = icon-size × 26 css-px (resim boyu)
        const L = harita.getLayer('sefer-ucu');
        const sembol = L && L.type === 'symbol';
        if (sembol) uc.forEach((x,i)=>{ pxs[i] = Math.round((x.properties.kalinlik||3)*5.5); });
        const ikon = sembol ? harita.queryRenderedFeatures({layers:['sefer-ucu']}).length : null;
        return { katman: L && L.type, ok_basi_ozellik: uc.length, geometri: uc.map(x=>x.geometry.type),
                 ekran_px: pxs, aci: uc.map(x=>x.properties.aci!=null?Math.round(x.properties.aci):null), ikon_render: ikon };})()`);
      const ss = await gonder('Page.captureScreenshot', { format: 'png' });
      if (ss.result && ss.result.data)
        fs.writeFileSync(path.join(__dirname, 'SINAV-SEFER-OK-UC-0080-' + ETIKET + '-' + s.ad + '.png'), Buffer.from(ss.result.data, 'base64'));
    }
  }
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
})();

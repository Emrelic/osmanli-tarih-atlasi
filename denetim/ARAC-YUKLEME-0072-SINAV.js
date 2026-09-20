// -*- coding: utf-8 -*-
// YUKLEME-0072 — YAYINDAKİ sitenin acilis olcumu (headless Chrome + CDP).
// A) soguk  B) ikinci ziyaret (ayni profil)  C) soguk / 20 Mbit kisilmis
// Sayilar CDP Network olaylarindan okunur (PerformanceResourceTiming tamponu 250'de taşar).
// Kullanim: node denetim/ARAC-YUKLEME-0072-SINAV.js [A|B|C]
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const KOK = path.resolve(__dirname, '..');
const URL_YAYIN = 'https://emrelic.github.io/osmanli-tarih-atlasi/';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const MOD = (process.argv[2] || 'A').toUpperCase();
const CDP = 9340 + (MOD === 'C' ? 1 : MOD === 'B' ? 2 : 0);
const bekle = ms => new Promise(r => setTimeout(r, ms));
const mb = b => (b / 1048576);
const sut = (s, n) => (s.length > n ? s.slice(0, n - 1) + '~' : s).padEnd(n);
const sag = (x, n) => String(x).padStart(n);
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'yukleme0072-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });

  let hedef = null;
  for (let i = 0; i < 60 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page'); } catch (e) { }
  }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }

  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bekleyen = new Map(); let olaylar = [];
  ws.addEventListener('message', ev => {
    const m = JSON.parse(ev.data);
    if (m.id && bekleyen.has(m.id)) { bekleyen.get(m.id)(m.result || m.error); bekleyen.delete(m.id); }
    else if (m.method) olaylar.push(m);
  });
  const cagir = (yon, par) => new Promise(ok => { const id = ++no; bekleyen.set(id, ok); ws.send(JSON.stringify({ id, method: yon, params: par || {} })); });

  await cagir('Network.enable', { maxTotalBufferSize: 1, maxResourceBufferSize: 1 });
  await cagir('Page.enable');
  await cagir('Runtime.enable');
  await cagir('Performance.enable');
  await cagir('Network.setCacheDisabled', { cacheDisabled: false });
  await cagir('Page.addScriptToEvaluateOnNewDocument', { source: 'try{performance.setResourceTimingBufferSize(6000);}catch(e){}' });
  if (MOD === 'C') {
    await cagir('Network.emulateNetworkConditions', {
      offline: false, latency: 50, downloadThroughput: 20 * 1000 * 1000 / 8, uploadThroughput: 2 * 1000 * 1000 / 8,
    });
  }

  async function tur(etiket) {
    olaylar = [];
    const t0 = Date.now();
    await cagir('Page.navigate', { url: URL_YAYIN });
    let haritaHazir = null, dur = null;
    const seri = [];
    for (let i = 0; i < 3000; i++) {           // en cok 300 sn
      await bekle(100);
      if (i % 5 === 0) {                        // ~her 0,5 sn: is zamani serisi
        const mm = await cagir('Performance.getMetrics', {});
        const X = {}; (mm.metrics || []).forEach(x => { X[x.name] = x.value; });
        seri.push({ t: Math.round((Date.now() - t0)), s: +(X.ScriptDuration || 0).toFixed(2),
          g: +(X.TaskDuration || 0).toFixed(2), y: +(X.LayoutDuration || 0).toFixed(2),
          h: Math.round((X.JSHeapUsedSize || 0) / 1048576) });
      }
      const r = await cagir('Runtime.evaluate', {
        expression: '(function(){try{'
          + 'var h=(typeof harita!=="undefined")?harita:null;'
          + 'var p=performance.getEntriesByType("paint");'
          + 'var n=performance.getEntriesByType("navigation")[0]||{};'
          + 'return JSON.stringify({'
          + ' hl:!!(h&&h.loaded&&h.loaded()), hs:!!(h&&h.isStyleLoaded&&h.isStyleLoaded()),'
          + ' kat:(h&&h.getStyle&&h.getStyle().layers)?h.getStyle().layers.length:0,'
          + ' fcp:Math.round((p.find(function(x){return x.name==="first-contentful-paint"})||{}).startTime||0),'
          + ' dcl:Math.round(n.domContentLoadedEventEnd||0), load:Math.round(n.loadEventEnd||0),'
          + ' simdi:Math.round(performance.now())});'
          + '}catch(e){return JSON.stringify({hata:String(e)});}})()', returnByValue: true,
      });
      if (!r || !r.result || typeof r.result.value !== 'string') continue;
      dur = JSON.parse(r.result.value);
      if (dur.hl && dur.hs && dur.kat > 0) { haritaHazir = dur.simdi; break; }
    }
    await bekle(3000);

    // --- CDP Network olaylarindan istek tablosu ---
    const istek = new Map();
    let navT = null;
    for (const o of olaylar) {
      const p = o.params;
      if (o.method === 'Network.requestWillBeSent') {
        if (p.type === 'Document' && navT === null) navT = p.timestamp;
        istek.set(p.requestId, { u: p.request.url, tur: p.type, bas: p.timestamp, bit: null, bayt: 0, durum: null, kodlama: null, onbellekten: false, protokol: null });
      } else if (o.method === 'Network.responseReceived') {
        const k = istek.get(p.requestId); if (!k) continue;
        const h = {}; Object.keys(p.response.headers || {}).forEach(x => { h[x.toLowerCase()] = p.response.headers[x]; });
        k.durum = p.response.status; k.kodlama = h['content-encoding'] || '(yok)';
        k.onbellek = h['cache-control'] || '(yok)'; k.etag = h['etag'] ? 'var' : 'yok';
        k.onbellekten = !!p.response.fromDiskCache; k.protokol = p.response.protocol;
        k.tur_mime = h['content-type'] || '';
      } else if (o.method === 'Network.loadingFinished') {
        const k = istek.get(p.requestId); if (!k) continue;
        k.bit = p.timestamp; k.bayt = p.encodedDataLength || 0;
      } else if (o.method === 'Network.loadingFailed') {
        const k = istek.get(p.requestId); if (!k) continue;
        k.bit = p.timestamp; k.hata = p.errorText;
      }
    }
    const L = [...istek.values()].filter(k => k.bas != null);
    L.forEach(k => { k.basMs = Math.round((k.bas - navT) * 1000); k.bitMs = k.bit ? Math.round((k.bit - navT) * 1000) : null; });

    const metr = await cagir('Performance.getMetrics', {});
    const M = {}; (metr.metrics || []).forEach(x => { M[x.name] = x.value; });

    return { etiket, duvar_sn: Math.round((Date.now() - t0) / 100) / 10, harita_hazir_ms: haritaHazir, son: dur, seri,
      metrik: { ScriptDuration: M.ScriptDuration, TaskDuration: M.TaskDuration, LayoutDuration: M.LayoutDuration, JSHeapUsedSize: M.JSHeapUsedSize },
      istek: L };
  }

  function bas(t) {
    const L = t.istek;
    const top = L.reduce((a, k) => a + k.bayt, 0);
    const sayim = {}; L.forEach(k => { const d = k.onbellekten ? 'onbellek' : String(k.durum); sayim[d] = (sayim[d] || 0) + 1; });
    const tur = {}; L.forEach(k => { const a = tur[k.tur] = tur[k.tur] || { n: 0, b: 0 }; a.n++; a.b += k.bayt; });
    console.log('\n=== ' + t.etiket + ' ===');
    console.log(' duvar saati            : ' + t.duvar_sn + ' sn');
    console.log(' ilk boyama (FCP)       : ' + t.son.fcp + ' ms');
    console.log(' DOMContentLoaded       : ' + t.son.dcl + ' ms    load: ' + t.son.load + ' ms');
    console.log(' HARITA KULLANILABILIR  : ' + t.harita_hazir_ms + ' ms');
    console.log(' istek                  : ' + L.length + '   ' + JSON.stringify(sayim));
    console.log(' tel ustu toplam        : ' + mb(top).toFixed(2) + ' MB');
    console.log(' ScriptDuration         : ' + (t.metrik.ScriptDuration || 0).toFixed(1) + ' s    TaskDuration: ' + (t.metrik.TaskDuration || 0).toFixed(1) + ' s');
    console.log(' JS yigin               : ' + mb(t.metrik.JSHeapUsedSize || 0).toFixed(0) + ' MB');
    console.log(' --- istek turune gore ---');
    Object.keys(tur).forEach(k => console.log('   ' + sut(k, 14) + sag(tur[k].n, 5) + ' istek ' + sag(mb(tur[k].b).toFixed(2), 9) + ' MB'));
    console.log(' --- en cok bayt getiren 8 ---');
    L.slice().sort((a, b) => b.bayt - a.bayt).slice(0, 8).forEach(k => console.log('   ' + sut(k.u.replace(URL_YAYIN, ''), 40)
      + ' bas ' + sag(k.basMs, 7) + ' bit ' + sag(k.bitMs, 7) + ' sure ' + sag(k.bitMs - k.basMs, 7)
      + '  ' + sag(mb(k.bayt).toFixed(2), 7) + ' MB  ' + (k.kodlama || '') + ' ' + (k.protokol || '')));
    const ornek = L.find(k => k.u.indexOf('donemler.js') > 0) || L[0];
    console.log(' ornek baslik (' + ornek.u.replace(URL_YAYIN, '') + '): durum=' + ornek.durum + ' kodlama=' + ornek.kodlama
      + ' cache-control=' + ornek.onbellek + ' etag=' + ornek.etag + ' protokol=' + ornek.protokol + ' diskten=' + ornek.onbellekten);
    // es zamanlilik: en cok kac istek ayni anda acikti
    const olay = [];
    L.forEach(k => { if (k.bitMs != null) { olay.push([k.basMs, 1]); olay.push([k.bitMs, -1]); } });
    olay.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let c = 0, enc = 0; olay.forEach(e => { c += e[1]; if (c > enc) enc = c; });
    console.log(' en yuksek es zamanli istek : ' + enc);
    const sonBit = Math.max(...L.map(k => k.bitMs || 0));
    console.log(' son bayt indi              : ' + sonBit + ' ms   => indirme sonrasi kalan: ' + (t.harita_hazir_ms - sonBit) + ' ms');
    console.log(' etkin hiz                  : ' + (top * 8 / 1e6 / (sonBit / 1000)).toFixed(1) + ' Mbit/s');
    // is zamani serisi: 5 sn'lik dilimlerde gecen duvar saati vs ana iplik mesgul zamani
    const S = t.seri; if (S && S.length > 1) {
      console.log(' --- 5 sn dilimlerde: duvar / ana iplik mesgul (TaskDuration) / betik / yigin ---');
      let onceki = S[0];
      for (let i = 0; i < S.length; i++) {
        if (S[i].t - onceki.t < 5000 && i !== S.length - 1) continue;
        const dt = S[i].t - onceki.t, dg = S[i].g - onceki.g, ds = S[i].s - onceki.s;
        console.log('   ' + sag(Math.round(onceki.t / 1000), 4) + '-' + sag(Math.round(S[i].t / 1000), 3) + ' sn'
          + '   mesgul ' + sag((100 * dg * 1000 / dt).toFixed(0), 3) + '%'
          + '   betik ' + sag((100 * ds * 1000 / dt).toFixed(0), 3) + '%'
          + '   BOSTA(GC/ag) ' + sag((100 * (1 - dg * 1000 / dt)).toFixed(0), 4) + '%'
          + '   yigin ' + sag(S[i].h, 5) + ' MB');
        onceki = S[i];
      }
    }
  }

  const cikti = { mod: MOD, url: URL_YAYIN, zaman: new Date().toISOString(), turlar: [] };
  cikti.turlar.push(await tur(MOD === 'B' ? 'birinci (isinma)' : 'soguk'));
  if (MOD === 'B') cikti.turlar.push(await tur('ikinci ziyaret'));
  cikti.turlar.forEach(bas);

  const dosya = path.join(KOK, 'denetim', 'YUKLEME-0072-SINAV-' + MOD + '.json');
  fs.writeFileSync(dosya, JSON.stringify(cikti, null, 1), 'utf8');
  console.log('\nJSON: ' + dosya);
  ws.close(); ch.kill();
  process.exit(0);
})();

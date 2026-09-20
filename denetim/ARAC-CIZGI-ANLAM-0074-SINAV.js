// -*- coding: utf-8 -*-
// CIZGI-ANLAM-0072 · DALGA-0074 H-0006 TARAYICI SINAVI (headless Chrome + CDP)
//
// SORU: kullanici mavi cizgiye TIKLAYINCA ne okuyor? Balonun metni IDDIA degil
// RENDER olarak geri okunur; ayrica gercek bir tuvale TIKLANIR (mekanizma da
// sinanir, yalniz metin uretici degil).
//
// ONGORU (olcumden ONCE):
//   Q1 1827-07-06 + H-0006 kutusunda `d-sinir-hat-E` IKI kayit cizer:
//      d1923-nl-de ve dg4-nl-fr-kortrijk. Baska sinif hic cizilmez.
//   Q2 Yeni balon baslinda ARTIK slug DEGIL antlasma adi var
//      ("Meppen"/"Kortrijk" gecer), ve "pencere sonudur" uyarisi
//      d1923-nl-de'de VAR (t=1923-10-29), kortrijk'te YOK (t=1830-10-04).
//   Q3 Tuvale tiklayinca DOM'da .maplibregl-popup belirir.
//
// Kullanim: node denetim/ARAC-CIZGI-ANLAM-0074-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8791';
const CDP = 9343;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const GUN = '1827-07-06';
const KUTU = [1.94, 48.87, 7.83, 53.74], ZOOM = 5.7;
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'cizgi0074-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/index.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p) => { const id = ++no; return new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }); };
  const js = async ifade => {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + ((c.result.exceptionDetails.exception || {}).description || '') };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  let hazir = false;
  for (let i = 0; i < 25 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }
  const sonuc = { hazir, gun: GUN };
  if (hazir === true) {
    await js('(function(){ tarihAyarla(gunIdx("' + GUN + '"));' +
      ' harita.jumpTo({center:[' + ((KUTU[0] + KUTU[2]) / 2) + ',' + ((KUTU[1] + KUTU[3]) / 2) + '],zoom:' + ZOOM + '}); return true; })()');
    // 🔴 `areTilesLoaded()` tek basina YETMIYOR (0072 sinavinda olculdu: ilk
    // sahneler 0 ozellik verdi) — sabit ek bekleme sart. rAF KULLANILMAZ,
    // headless'ta hic tetiklenmeyip awaitPromise'i sonsuza asiyor.
    for (let i = 0; i < 12; i++) {
      const o = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<10;i++){if(!harita.isMoving()&&harita.areTilesLoaded()&&harita.loaded())return true;await b(400);}return false;})()');
      if (o === true) break;
    }
    await bekle(2500);

    // Q1 — o gun o kutuda FIILEN cizilen kayitlar
    sonuc.cizilen = await js(`(function(){
      var out = {};
      ['C','E','F','D'].forEach(function(s){
        var lyr = 'd-sinir-hat-' + s, f = [];
        try { f = harita.queryRenderedFeatures({layers:[lyr]}); } catch(e) { out[lyr]='HATA'; return; }
        var kayit = {};
        f.forEach(function(x){ var k = x.properties.kayit_id;
          kayit[k] = (kayit[k]||0) + 1; });
        out[lyr] = { ozellik: f.length, kayitlar: kayit };
      });
      return out;
    })()`);

    // Q2 — balon METNI (uretici dogrudan cagriliyor: icerik sinavi)
    sonuc.balon = await js(`(function(){
      var ix = _dKayitIndeksi(), out = {};
      ['d1923-nl-de','dg4-nl-fr-kortrijk'].forEach(function(id){
        var k = ix[id];
        if (!k) { out[id] = 'KAYIT YOK'; return; }
        var h = _dPopupHtml(k, _dEtkinSinif(k));
        out[id] = { html_uzunluk: h.length,
          metin: h.replace(/<br>/g,' ⏎ ').replace(/<[^>]+>/g,'').replace(/\\s+/g,' ').trim(),
          slug_baslikta: h.indexOf('<b>' + id + '</b>') === 0,
          pencere_uyarisi: h.indexOf('pencere sonudur') >= 0,
          petek_uyarisi: h.indexOf('yerleşim peteğinden') >= 0 };
      });
      return out;
    })()`);

    // Q3 — MEKANIZMA: hattin ustunde bir noktaya gercek tuval tiklamasi
    const nokta = await js(`(function(){
      var f = harita.queryRenderedFeatures({layers:['d-sinir-hat-E']});
      if (!f.length) return null;
      var g = f[0].geometry.coordinates;
      var c = Array.isArray(g[0][0]) ? g[0][Math.floor(g[0].length/2)] : g[Math.floor(g.length/2)];
      var p = harita.project(c);
      return { kayit: f[0].properties.kayit_id, lng: c[0], lat: c[1], x: Math.round(p.x), y: Math.round(p.y) };
    })()`);
    sonuc.tiklama_noktasi = nokta;
    if (nokta && nokta.x != null) {
      const kanvas = await js('(function(){var r=harita.getCanvas().getBoundingClientRect();return {l:r.left,t:r.top};})()');
      const X = nokta.x + (kanvas.l || 0), Y = nokta.y + (kanvas.t || 0);
      for (const tip of ['mousePressed', 'mouseReleased']) {
        await gonder('Input.dispatchMouseEvent', { type: tip, x: X, y: Y, button: 'left', clickCount: 1 });
      }
      await bekle(1200);
      sonuc.dom_balon = await js(`(function(){
        var p = document.querySelector('.maplibregl-popup');
        if (!p) return { acildi: false };
        return { acildi: true,
          metin: p.innerText.replace(/\\s+/g,' ').trim().slice(0, 600) };
      })()`);
    }
  }
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
})();

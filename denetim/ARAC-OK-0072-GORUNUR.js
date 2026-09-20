// -*- coding: utf-8 -*-
// SEFER-OK-0070 · 0072 — TEK SORULUK TEŞHİS: ok katmanı görünür mü, kaynakta
// veri var mı, ekranda çiziliyor mu? (20 Eylül 2026)
// Büyük sınav betiği makinenin belleği dolduğu için (tahta M-4789) yarıda
// kaldı; bu betik aynı soruyu en küçük ölçümle sorar.
// Kullanım: node denetim/ARAC-OK-0072-GORUNUR.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9340;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0072g-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1200,800',
    '--no-first-run', 'http://localhost:' + PORT + '/'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 60 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }
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
      tarihAyarla(gunIdx('1526-08-29')); await b(1200);
      const g = id => harita.getLayer(id) ? (harita.getLayoutProperty(id,'visibility')||'(varsayilan)') : 'KATMAN YOK';
      const s = harita.getSource('seferler');
      const d = s && (s.serialize ? s.serialize().data : s._data);
      const f = (d && d.features) || [];
      const kutu = document.querySelector('input[data-katman="harekat"]');
      const m = (window.seferler||[]).find(x=>x.ekli&&(x.ad||'').indexOf('Mohaç')===0);
      let render = null;
      if (m) {
        let a=[999,999],c=[-999,-999];
        m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
        harita.fitBounds([a,c],{padding:60,duration:0});
        await b(2000);
        const p = harita.project(m.yol[Math.floor(m.yol.length/2)]);
        const kt=[[p.x-8,p.y-8],[p.x+8,p.y+8]];
        render = { govde: harita.queryRenderedFeatures(kt,{layers:['sefer-cizgi-sefer']}).length,
                   kenar: harita.queryRenderedFeatures(kt,{layers:['sefer-kenar-sefer']}).length,
                   o_noktada: harita.queryRenderedFeatures(kt).map(x=>x.layer.id).filter((v,i,ar)=>ar.indexOf(v)===i).slice(0,8),
                   ekran: [Math.round(p.x), Math.round(p.y)], zoom: +harita.getZoom().toFixed(2) };
      }
      return { gorunurluk: { cizgi: g('sefer-cizgi-sefer'), kenar: g('sefer-kenar-sefer'), kaynakNokta: g('sefer-kaynak') },
               kutu_harekat: kutu ? kutu.checked : 'KUTU YOK',
               kaynak_ozellik: f.length,
               kaynak_cizgi: f.filter(x=>x.geometry.type==='LineString').length,
               ok_ekli: (window.seferler||[]).filter(x=>x.ekli).length,
               mohac: m ? { ad: m.ad, renk: m.renk } : 'ekranda yok',
               render };})()`);
  }
  if (hazir === true) {
    // Tekilleştirme (koordinatör hükmü): farklı GÜNDE başlayan mükerrer çift de
    // tek çizilmeli — Alemdar 1808 (SEFERLER 01-01 · OK103 07-01) bunun sınavı.
    cikti.tekillestirme = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olc = async (gun, ad) => { tarihAyarla(gunIdx(gun)); await b(1200);
        const s=harita.getSource('seferler'); const d=s&&(s.serialize?s.serialize().data:s._data);
        const f=((d&&d.features)||[]).filter(x=>x.geometry.type==='LineString');
        const kayit=(window.seferler||[]).filter(x=>(x.ad||'').indexOf(ad)>=0 && x._fiKirpik<=suanki && suanki<x._tiKirpik);
        return { gun, ad, aktif_kayit: kayit.length, ekli_marker: kayit.filter(x=>x.ekli).length, ekrandaki_cizgi: f.length };};
      return [ await olc('1808-07-19','Alemdar'), await olc('1867-07-01','Abdülaziz'), await olc('1770-07-06','Çeşme') ];})()`);

    const ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) {
      fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0072-kenar.png'), Buffer.from(ss.result.data, 'base64'));
      cikti.ekran_goruntusu = 'denetim/SINAV-OK-0072-kenar.png';
    }
  }
  console.log(JSON.stringify(cikti, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

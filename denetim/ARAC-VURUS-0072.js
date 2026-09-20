// -*- coding: utf-8 -*-
// SEFER-OK-0070 · ele geçirme sahnesinin ARA VURUŞU — ölçüm (20 Eylül 2026)
// Soru (koordinatör sevki, Emre'nin birebir sırası): bugünkü dizideki
// `hal:"yok"` anında ekranda hangi sahip görünüyor — ESKİ mi YENİ mi?
// Öngörü ölçümden ÖNCE yazıldı: denetim/ONGORU-VURUS-0072.md
// Kullanım: node denetim/ARAC-VURUS-0072.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9342;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'vurus-'));
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
  // 🔴 HAREKET KISITI EMÜLASYONU KAPATILIYOR ve sebebi ölçüldü: headless
  // Chrome'da `prefers-reduced-motion: reduce` VARSAYILAN olarak açık geliyor.
  // İlk koşuda sahne izi "yok → sonra → yok" çıktı, yani yeni dizi hiç
  // koşmadı — app.js'in erişilebilirlik dalı (tek durak) devredeydi. Sınav,
  // sınadığı dalın koştuğundan emin olmalı.
  try { await gonder('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] }); } catch (e) { }
  let hazir = false;
  for (let i = 0; i < 24 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }
  const cikti = { hazir };
  if (hazir === true) {
    // El değiştirme sahnesi olan bir madde bul: kronolojiyi gezip ANT_FARK.fs
    // dolan ilk maddeyi seç (iddia değil, ölçüm — hangi madde olduğu da yazılır).
    cikti.olcum = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const adaylar = olaylar.filter(o=>o.t && (o.t.indexOf('1526')===0 || o.t.indexOf('1803')===0 || o.t.indexOf('1683')===0 || o.t.indexOf('1878')===0));
      let secilen = null;
      for (const o of adaylar) {
        tarihAyarla(o.gi); obGoster(o); haritayiOlayaGotur(o, true);
        await b(900);
        if (ANT_FARK && ANT_FARK.fs && ANT_FARK.fs.length) { secilen = o; break; }
      }
      if (!secilen) return { durum: 'EL DEĞİŞTİRME MADDESİ BULUNAMADI (denenen: ' + adaylar.length + ')' };
      const fs0 = ANT_FARK.fs;
      const ornek = fs0.slice(0,5).map(f=>({ ad: f.properties.ad, once: f.properties.once, sonra: f.properties.sonra, koyu: f.properties.koyu }));
      const onceVar = fs0.filter(f=>!!f.properties.once).length;

      // örtüyü kapat ("yok" hâli) ve altında ne kaldığını ölç
      _antlasmaHal('yok'); await b(700);
      const g = fs0[0].geometry;
      const koor = (g.type==='Polygon') ? g.coordinates[0] : g.coordinates[0][0];
      let sx=0, sy=0;
      for (let i=0;i<koor.length-1;i++){ sx+=koor[i][0]; sy+=koor[i][1]; }
      const merkez = [sx/(koor.length-1), sy/(koor.length-1)];
      const p = harita.project(merkez);
      const kutu = [[p.x-4,p.y-4],[p.x+4,p.y+4]];
      const dolgular = harita.queryRenderedFeatures(kutu).filter(x=>/dolgu|osmanli|devlet|vassal|isgal/.test(x.layer.id));
      const ustteki = dolgular.length ? dolgular[0] : null;
      let renk = null;
      if (ustteki) { try { renk = harita.getPaintProperty(ustteki.layer.id, 'fill-color'); } catch(e){} }

      return { madde: secilen.b.slice(0,55), gun: secilen.t,
               petek: fs0.length, once_tanimli: onceVar, ornek,
               yok_aninda_ustteki_katman: ustteki ? ustteki.layer.id : null,
               yok_aninda_katmanlar: dolgular.map(x=>x.layer.id).filter((v,i,a)=>a.indexOf(v)===i).slice(0,6),
               ustteki_fill_color: renk,
               ustteki_ozellikler: ustteki ? Object.keys(ustteki.properties).slice(0,8).reduce((a,k)=>{a[k]=ustteki.properties[k];return a;},{}) : null,
               iz: await (async function(){
                 // SAHNE GERÇEKTEN AKIYOR MU: kırpmayı başlat ve boyayı örnekle.
                 // Ölçüt: fill-color ifadesinin okuduğu alan (get hal) ve
                 // fill-opacity — ikisi birlikte hangi adımda olduğumuzu verir.
                 // (Bu blok bir template literal İÇİNDE: ters tırnak yazılamaz.)
                 const kayit = [];
                 antlasmaFarkiKirp(0);
                 const t0 = performance.now();
                 for (let i=0;i<32;i++){
                   let c=null,op=null;
                   try { c = harita.getPaintProperty('antlasma-fark-dolgu','fill-color');
                         op = harita.getPaintProperty('antlasma-fark-dolgu','fill-opacity'); } catch(e){}
                   const alan = Array.isArray(c) ? c[1] : c;
                   const son = kayit[kayit.length-1];
                   const hal = (op===0) ? 'yok' : alan;
                   if (!son || son.hal !== hal) kayit.push({ hal, ms: Math.round(performance.now()-t0) });
                   await b(80);
                 }
                 return kayit;
               })(),
               dizi: (typeof eleGecirmeDizisi==='function') ? eleGecirmeDizisi().map(x=>x.hal+':'+x.ms) : null,
               sahne_suresi_ms: (typeof eleGecirmeDizisi==='function') ? eleGecirmeDizisi().reduce((a,x)=>a+x.ms,0) : null,
               faz_tavan: (window.ANIM && ANIM.SABIT) ? ANIM.SABIT.FAZ_TAVAN_MS : 'ANIM yok' };})()`);
  }
  console.log(JSON.stringify(cikti, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

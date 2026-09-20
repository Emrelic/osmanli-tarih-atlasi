// -*- coding: utf-8 -*-
// CIZGI-ANLAM-0072 · TARAYICI SINAVI (headless Chrome + CDP) — 20 Eylul 2026
// Paket 0072 H-0004 · H-0007 · H-0008: "haritada CIZGI var, ne oldugu anlasilmiyor".
//
// SORU (ucu icin ayni): o cizgi HANGI KATMAN · HANGI KAYIT · aciklanmis mi?
// Yontem: gercek index.html (DEGISTIRILMEZ — enjeksiyon yok, yalnizca okunur),
// Emre'nin ekran goruntusundeki TARIH + KUTU'ya gidilir, `queryRenderedFeatures`
// o kutuda FIILEN CIZILEN ozellikleri geri okur. Iddia degil RENDER olculur.
//
// ONGORU (olcumden ONCE yazildi — CLAUDE.md §11):
//   O1  H-0007 pembe kesikli  = d-sinir-hat-E, kayit d1812-ru-bg-prut, renk #d4707d
//   O2  H-0008 lacivert       = d-sinir-hat-*, taraflarinda `isvicre` gecen >=5 kayit, renk #0a2f5c
//   O3  H-0004 siyah kesikli  = hukuki-sinir-hat, kayit karlofca-bosna-sava-1699
//   O4  d-sinir-hat-* katman secicide HICBIR kovaya girmez (siniflanmamis)
//   O5  lejantta #0a2f5c gecmez (D katmaninin lejant satiri YOK)
//
// Kullanim:  node denetim/ARAC-CIZGI-ANLAM-0072-SINAV.js <port>
//            (<port>'ta projenin kokunu servis eden bir HTTP sunucusu olmali)
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8791';
const CDP = 9341;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

// Emre'nin uc ekran goruntusunun kendi alt yazisindan okunan tarih + kutu.
const SAHNE = [
  // `sonda`: [enlem, lon_bas, lon_son, adim] — Prut'u KESEN dogu-bati kesitler.
  // Prut o enlemlerde ~27,8 (46,5) ve ~27,9 (47,2) dolayinda; kesit iki yani da
  // kapsasin diye 27,0'den 29,0'e gidiyor.
  { ad: 'H-0007', gun: '1815-04-23', kutu: [26.23, 45.23, 28.56, 48.30], zoom: 6.2,
    sonda: [[46.50, 27.00, 29.00, 0.10], [47.20, 27.00, 29.00, 0.10]] },
  { ad: 'H-0008', gun: '1816-09-01', kutu: [4.88, 45.03, 14.28, 48.87], zoom: 6.1 },
  { ad: 'H-0004', gun: '1814-01-28', kutu: [17.54, 44.26, 19.98, 45.42], zoom: 5.0 }
];

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'cizgi0072-'));
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
  // Bekleme PARCALI: tek uzun awaitPromise CDP'de sessizce null donebiliyor.
  let hazir = false;
  for (let i = 0; i < 25 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }

  const sonuc = { hazir, sahne: {} };

  if (hazir === true) {
    // ---- O4/O5: katman envanteri, siniflandirma, lejant
    sonuc.katman = await js(`(function(){
      var st = harita.getStyle().layers.map(function(l){return l.id;});
      var d = st.filter(function(i){return /^d-sinir-hat/.test(i);});
      var boya = {};
      d.forEach(function(i){
        boya[i] = { renk: harita.getPaintProperty(i,'line-color'),
                    genislik: harita.getPaintProperty(i,'line-width'),
                    desen: harita.getPaintProperty(i,'line-dasharray') || null,
                    opaklik: harita.getPaintProperty(i,'line-opacity'),
                    gorunur: harita.getLayoutProperty(i,'visibility') || 'visible' };
      });
      var kova = (typeof katmanSinifla==='function') ? katmanSinifla() : null;
      var lj = document.querySelector('.lejant');
      return { toplam_katman: st.length, d_katmanlari: d, d_boya: boya,
        siniflanmamis: kova ? kova.siniflanmamis : 'katmanSinifla YOK',
        d_siniflanmamis_mi: kova ? d.every(function(i){return kova.siniflanmamis.indexOf(i)>=0;}) : null,
        hukuki_hat_boya: { renk: harita.getPaintProperty('hukuki-sinir-hat','line-color'),
                           genislik: harita.getPaintProperty('hukuki-sinir-hat','line-width'),
                           desen: harita.getPaintProperty('hukuki-sinir-hat','line-dasharray') },
        lejant_var: !!lj,
        lejant_0a2f5c: lj ? (lj.innerHTML.indexOf('0a2f5c')>=0) : null,
        lejant_d4707d: lj ? (lj.innerHTML.match(/d4707d/g)||[]).length : null,
        lejant_1a1a1a: lj ? (lj.innerHTML.indexOf('1a1a1a')>=0) : null,
        d_gorunum_dugmeleri: Array.prototype.map.call(
          document.querySelectorAll('.maplibregl-ctrl button'), function(b){return b.textContent;})
          .filter(function(t){return /^D:/.test(t);})
      };
    })()`);

    // ---- her sahne: tarihe git, kutuya git, CIZILENI geri oku
    for (const s of SAHNE) {
      await js(`(function(){ tarihAyarla(gunIdx("${s.gun}"));
        harita.jumpTo({ center:[${(s.kutu[0]+s.kutu[2])/2}, ${(s.kutu[1]+s.kutu[3])/2}], zoom:${s.zoom} });
        return true; })()`);
      // render + guncelle otursun.
      // 🔴 `areTilesLoaded()` YETMEDI — ilk kosuda iki sahne de 0 ozellik verdi
      // (ucuncusu dolu geldi). `queryRenderedFeatures` yalnizca FIILEN BOYANMIS
      // kareyi okur; dosemeler "yuklendi" dedikten sonra da bir cerceve gecmesi
      // gerekiyor. O yuzden `idle` OLAYI beklenir + iki requestAnimationFrame.
      // ⚠️ `requestAnimationFrame` BEKLEME — headless'ta hic tetiklenmeyip
      // `awaitPromise`i SONSUZA kadar asiyor (olculdu: kosu 500 sn'de bitmedi,
      // cikti 0 bayt). Yalnizca setTimeout + areTilesLoaded kullanilir.
      let oturdu = false;
      for (let i = 0; i < 12 && oturdu !== true; i++) {
        oturdu = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<10;i++){if(!harita.isMoving()&&harita.areTilesLoaded()&&harita.loaded())return true;await b(400);}return false;})()');
      }
      // 🔴 EK SETTLE — `areTilesLoaded()` YETMEDI: ilk kosuda ilk iki sahne
      // 0 ozellik verdi, ucuncusu dolu geldi. `queryRenderedFeatures` yalnizca
      // FIILEN BOYANMIS kareyi okur; dosemeler "yuklendi" dedikten sonra hala
      // bir cerceve gecmesi gerekiyor. Sabit bekleme, kiyaslanabilir sonuc.
      await bekle(2500);
      sonuc.sahne[s.ad] = await js(`(function(){
        var st = harita.getStyle().layers.map(function(l){return l.id;});
        var hatKat = st.filter(function(i){return /^(d-sinir-hat|hukuki-sinir-hat)/.test(i);});
        var bb = harita.getBounds();
        var out = { gun: "${s.gun}", oturdu: true,
          // 🔴 Gercekte gorunen kutu ALT YAZIDAKINDEN GENIS olabilir: ekran
          // 1400 px, Emre'nin penceresi degil. Rapor bu satira bakarak okunur.
          gorunen_kutu: [ +bb.getWest().toFixed(2), +bb.getSouth().toFixed(2),
                          +bb.getEast().toFixed(2), +bb.getNorth().toFixed(2) ],
          zoom: +harita.getZoom().toFixed(2), cizilen: {} };
        hatKat.forEach(function(lyr){
          var f = [];
          try { f = harita.queryRenderedFeatures({ layers:[lyr] }); } catch(e) { out.cizilen[lyr] = 'HATA '+e.message; return; }
          var kayit = {};
          f.forEach(function(x){
            var k = x.properties.kayit_id || '(id yok)';
            if(!kayit[k]) kayit[k] = { sinif: x.properties.sinif || null, renk: x.properties.renk || null, parca: 0 };
            kayit[k].parca++;
          });
          out.cizilen[lyr] = { ozellik: f.length, kayitlar: kayit };
        });
        // ayni kutuda gorunen OTEKI cizgi katmanlari (karisma sorusu)
        var oteki = ['bolge-cizgi','devlet-cizgi','isgal-cizgi','imparatorluk-hale',
                     'vassal-serit-dis','himaye-serit-ic','veri-siniri-cizgi','koridor-kenar-cizgi',
                     'g-nehir-motor','g-sirt-motor','antlasma-fark-cizgi'];
        out.oteki_cizgiler = {};
        oteki.forEach(function(lyr){
          if (st.indexOf(lyr)<0) { out.oteki_cizgiler[lyr]='KATMAN YOK'; return; }
          var gorunur = harita.getLayoutProperty(lyr,'visibility') || 'visible';
          var n = 0; try { n = harita.queryRenderedFeatures({layers:[lyr]}).length; } catch(e) {}
          out.oteki_cizgiler[lyr] = gorunur + ' · ' + n;
        });
        return out;
      })()`);

      // ---- SONDA: cizginin ALTINDA ne boyaniyor?
      // H-0007'nin asil sorusu "pembe cizgi nerede" degil, "cizginin iki yani
      // ayni renk mi". Ekran pikseli degil MOTORUN KENDI cevabi olculur:
      // `queryRenderedFeatures(nokta)` o enlem/boylamda FIILEN cizilen dolguyu
      // ve `id` ozelligini verir. Bosluk (hicbir dolgu) da bir cevaptir.
      if (s.sonda) {
        sonuc.sahne[s.ad].sonda = await js(`(function(){
          var DOLGU = ['osmanli-dolgu','vassal-dolgu','himaye-dolgu','devlet-dolgu',
                       'isgal-dolgu','hukuki-sinir-dolgu'];
          var st = harita.getStyle().layers.map(function(l){return l.id;});
          var kat = DOLGU.filter(function(i){return st.indexOf(i)>=0;});
          var out = [];
          ${JSON.stringify(s.sonda)}.forEach(function(hat){
            var lat = hat[0], satir = [];
            for (var lon = hat[1]; lon <= hat[2] + 1e-9; lon += hat[3]) {
              var p = harita.project([lon, lat]);
              var f = [];
              try { f = harita.queryRenderedFeatures([p.x, p.y], { layers: kat }); } catch(e) {}
              var ust = f.length ? (f[0].layer.id + ':' + (f[0].properties.id || f[0].properties.renk || '?')) : 'BOS';
              satir.push(lon.toFixed(2) + ' ' + ust);
            }
            out.push({ lat: lat, ornek: satir });
          });
          return out;
        })()`);
      }
    }
  }

  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
})();

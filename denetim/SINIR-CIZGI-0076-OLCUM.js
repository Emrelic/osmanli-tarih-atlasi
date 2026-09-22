// -*- coding: utf-8 -*-
// SINIR-CIZGI-0076 — "bu cizgi neyin nesi / anakronizm" olcumu.
// Kullanim: node denetim/SINIR-CIZGI-0076-OLCUM.js
//
// 🔴 TEKRARLANMAYAN olcumler (D-RENK-0073 zaten olctu, CITE edilir, TEKRAR EDILMEZ):
//   · renk-cizgi sapmasi (medyan 117 km dunya / 8-17 km yerel)  -> D-RENK-0073-OLCUM-0920.md §4
//   · pencere var mi / cizim pencereye bakiyor mu               -> D-RENK-0073-YURURLUK-0921.md §1-2
//   · balonun ne gosterdigi                                      -> CIZGI-ANLAM-0074-H0006.md
// BU ALETIN YENI SORUSU:
//   A) Cizgi, kendi DAYANAK belgesinden ONCE mi ciziliyor? (= Emre'nin "anakronizm"i)
//   B) Emre'nin 6 gorselindeki kutuda O GUN yururlukte olan hat HANGI KAYIT? (= "bu cizgi neyin nesi")
'use strict';
global.window = global;
const fs = require('fs');
const P = 'C:/atlas/';

const AILE = ['d_sinirlar', 'd_sinirlar_komsu', 'd_sinirlar_avrupa_bati',
  'd_sinirlar_avrupa_orta', 'd_sinirlar_ortadogu', 'd_sinirlar_afrika',
  'd_sinirlar_asya', 'd_sinirlar_amerika', 'd_sinirlar_okyanusya'];
const AD = ['D_SINIRLAR', 'D_SINIRLAR_KOMSU', 'D_SINIRLAR_AVRUPA_BATI',
  'D_SINIRLAR_AVRUPA_ORTA', 'D_SINIRLAR_ORTADOGU', 'D_SINIRLAR_AFRIKA',
  'D_SINIRLAR_ASYA', 'D_SINIRLAR_AMERIKA', 'D_SINIRLAR_OKYANUSYA'];
AILE.forEach(f => eval(fs.readFileSync(P + 'data/' + f + '.js', 'utf8')));

let tum = [];
AD.forEach(a => { if (Array.isArray(window[a])) tum = tum.concat(window[a]); });

// js/d_katman.js _dEtkinSinif ile BIREBIR ayni tablo
const sinif = k => k.sinif ? k.sinif
  : (k.kategori === 'D' ? 'E' : k.kategori === 'fiili' ? 'D' : k.kategori === 'C' ? 'C' : 'YOK');
const ciz = tum.filter(k => k && Array.isArray(k.hat) && k.hat.length >= 2 && k.f != null && sinif(k) !== 'YOK');

const pad = s => {                       // D205: uc haneli yil dizgi kiyasinda pad SART
  if (s == null) return null;
  const m = String(s).match(/^(\d{1,4})(-\d{2})?(-\d{2})?/);
  if (!m) return null;
  return ('0000' + m[1]).slice(-4) + (m[2] || '-01') + (m[3] || '-01');
};

console.log('== EVREN ==');
console.log('  D kaydi toplam        :', tum.length);
console.log('  CIZILEBILIR           :', ciz.length, '(hat>=2 + f + sinif!=YOK)');
const sd = {}; ciz.forEach(k => { const s = sinif(k); sd[s] = (sd[s] || 0) + 1; });
console.log('  sinif dagilimi        :', JSON.stringify(sd));

// ---------------------------------------------------------------- A) ANAKRONIZM
// Soru: kaydin `f`si, kendi dayanak belgelerinin EN ERKENINDEN once mi?
console.log('\n== A · CIZGI KENDI BELGESINDEN ONCE MI CIZILIYOR ==');
let dayanakli = 0, tarihli = 0, oncesi = 0, esit = 0, sonrasi = 0;
const ornek = [];
ciz.forEach(k => {
  const d = Array.isArray(k.dayanak) ? k.dayanak : [];
  if (d.length) dayanakli++;
  const tarihler = d.map(c => pad(c && c.tarih)).filter(Boolean);
  if (!tarihler.length) return;
  tarihli++;
  const enErken = tarihler.slice().sort()[0];
  const f = pad(k.f);
  if (f < enErken) {
    oncesi++;
    const gun = (Date.parse(enErken) - Date.parse(f)) / 86400000;
    ornek.push({ id: k.id, sinif: sinif(k), f: k.f, enErken: enErken, yil: (gun / 365.25).toFixed(1) });
  } else if (tarihler.indexOf(f) >= 0) esit++;
  else sonrasi++;
});
console.log('  dayanak[] dolu        :', dayanakli, '/', ciz.length);
console.log('  dayanakta tarih VAR   :', tarihli);
console.log('  f = bir dayanak tarihi:', esit);
console.log('  f > en erken dayanak  :', sonrasi, '(belgeden SONRA yururluge girmis — normal)');
console.log('  🔴 f < en erken dayanak:', oncesi, '(= cizgi HICBIR belgenin desteklemedigi gunde ciziliyor)');
ornek.sort((a, b) => b.yil - a.yil).slice(0, 12).forEach(o =>
  console.log('     ', o.id, '·', o.sinif, '· f', o.f, '< dayanak', o.enErken, '·', o.yil, 'yil ERKEN'));

// t = 1923-10-29 (geriye sarma tasarim gunu) — D-RENK-0073 197 olcmustu, teyit
const t1923 = ciz.filter(k => k.t === '1923-10-29').length;
console.log('  t = 1923-10-29 (tasarim gunu, tarihi bitis DEGIL):', t1923, '/', ciz.length);

// ---------------------------------------------------------------- B) GORSEL KUTULARI
// Emre'nin gorsellerinin ALT SERIDINDEN okunan gun + kutu (K=enlem, D=boylam)
const VAKA = [
  { no: 'H-0041', gun: '1878-06-04', G: 39.97, K: 41.67, B: 42.49, D: 44.02, not: 'Kars-Ardahan / Rus siniri' },
  { no: 'H-0059', gun: '1881-12-20', G: 44.67, K: 48.55, B: 25.72, D: 29.92, not: 'Romanya-Rusya / Tuna agzi' },
  { no: 'H-0116', gun: '1909-04-27', G: 44.80, K: 45.20, B: 17.86, D: 19.35, not: 'Bosna Brod' },
  { no: 'H-0118', gun: '1910-05-19', G: 28.71, K: 33.71, B: 6.71, D: 11.67, not: 'Tunus-Trablusgarp' },
  { no: 'H-0120', gun: '1911-10-08', G: 29.29, K: 31.49, B: 33.46, D: 35.30, not: 'Sina / Misir-Osmanli' },
  { no: 'H-0144', gun: '1913-06-29', G: 42.87, K: 44.44, B: 22.03, D: 29.10, not: 'Tuna / Romanya-Bulgaristan' },
  { no: 'H-0155', gun: '1913-11-14', G: 40.20, K: 41.59, B: 20.65, D: 24.36, not: 'Yunanistan kuzey siniri' },
  { no: 'H-0156', gun: '1913-11-17', G: 29.53, K: 39.77, B: 43.95, D: 50.21, not: 'Osmanli-Iran siniri' }
];

function kesisiyorMu(hat, v) {
  // vertex kutunun icinde mi, ya da ardisik iki vertex kutuyu kesiyor mu (kaba: segment kutusu ortusmesi)
  for (let i = 0; i < hat.length; i++) {
    const [x, y] = hat[i];
    if (x >= v.B && x <= v.D && y >= v.G && y <= v.K) return true;
  }
  for (let i = 1; i < hat.length; i++) {
    const [x1, y1] = hat[i - 1], [x2, y2] = hat[i];
    const sB = Math.min(x1, x2), sD = Math.max(x1, x2), sG = Math.min(y1, y2), sK = Math.max(y1, y2);
    if (sD >= v.B && sB <= v.D && sK >= v.G && sG <= v.K) {
      // segment kutusu ortusuyor; kutu kenarini gercekten kesiyor mu diye kaba ornekleme
      for (let t = 0; t <= 20; t++) {
        const x = x1 + (x2 - x1) * t / 20, y = y1 + (y2 - y1) * t / 20;
        if (x >= v.B && x <= v.D && y >= v.G && y <= v.K) return true;
      }
    }
  }
  return false;
}

console.log('\n== B · EMRE NIN GORSELLERINDE O GUN CIZILEN HAT HANGI KAYIT ==');
console.log('   (gorunum HUKUKI varsayildi: F+E+C; fiili gorunumde D de cizilir — ayrica isaretlendi)');
VAKA.forEach(v => {
  const g = pad(v.gun);
  const aktif = ciz.filter(k => {
    const f = pad(k.f); if (g < f) return false;
    if (k.t != null && g >= pad(k.t)) return false;
    return kesisiyorMu(k.hat, v);
  });
  console.log('\n' + v.no + ' · ' + v.gun + ' · ' + v.not + ' · kutu ' + v.G + '-' + v.K + 'K ' + v.B + '-' + v.D + 'D');
  if (!aktif.length) { console.log('   ⚪ O KUTUDA O GUN YURURLUKTE D/E/C HATTI YOK — ekrandaki cizgi BASKA KATMANDAN.'); }
  aktif.forEach(k => {
    const d0 = (k.dayanak || []).find(c => c && pad(c.tarih) === pad(k.f)) || (k.dayanak || [])[0] || {};
    console.log('   · ' + k.id + ' [' + sinif(k) + ']' +
      ' f=' + k.f + ' t=' + (k.t == null ? '(acik)' : k.t) +
      ' taraflar=' + JSON.stringify(k.taraflar || []) +
      (k.uzunluk_km != null ? ' ' + k.uzunluk_km + 'km' : ''));
    console.log('       dayanak: ' + (d0.ad || d0.kaynak || '(yok)') + (d0.tarih ? ' (' + d0.tarih + ')' : ''));
  });
  // ayni kutuda HERHANGI bir tarihte gecen hatlar (gun disi) — "yanlis tarihte mi duruyor" sorusu icin
  const kutuda = ciz.filter(k => kesisiyorMu(k.hat, v));
  console.log('   [kutuya degen hat, HER tarih: ' + kutuda.length + ' · o gun yururlukte: ' + aktif.length + ']');
});

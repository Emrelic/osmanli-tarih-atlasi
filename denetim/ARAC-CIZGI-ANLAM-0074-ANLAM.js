// -*- coding: utf-8 -*-
// CIZGI-ANLAM-0072 · DALGA-0074 H-0006 — "bu mavi cizgiler ne anlatiyor?"
//
// 🔴 BU ALET GOSTERIM SORUSUNU OLCER, cizgi/renk sapmasini DEGIL. Sapmayi
// D-RENK-0073 olctu (M-4862, denetim/D-RENK-0073-OLCUM-0920.md) — TEKRARLANMAZ.
// Buradaki soru: kullanici o cizgiye BAKINCA / TIKLAYINCA ne ogrenebiliyor,
// ve ogrenebilecegi sey DOGRU MU.
//
// ONGORU (olcumden ONCE yazildi):
//   P1 Tiklama balonunun BASLIGI kaydin ic slug'i (`kayit.id`) — insan adi YOK.
//      Yani "d1923-nl-de" yaziyor. Beklenen: cizilebilen kayitlarin %100'unde
//      baslik slug, cunku semada `ad` alani yok.
//   P2 `taraflar[]` kimlikleri devletler.js'te insan adina COZULEBILIR
//      (>= %90) — yani balona "Hollanda ↔ Almanya" YAZILABILIR ama yazilmiyor.
//   P3 Balon `t:` alanini gosterMIYOR; gosterse bile 1923-10-29 yaniltirdi.
//   P4 Dort sinif ekranda YALNIZ kesik deseni + kalinlikla ayrisiyor; renk
//      ayirt edici DEGIL (D_HAT_RENK hepsinde ayni). Yani renk korlugu degil,
//      DESEN OKURYAZARLIGI gerektiriyor.
//
// Kullanim: node denetim/ARAC-CIZGI-ANLAM-0074-ANLAM.js [gun] [W S E N]
'use strict';
global.window = global;
const fs = require('fs');

const AILE = ['d_sinirlar', 'd_sinirlar_komsu', 'd_sinirlar_avrupa_bati',
  'd_sinirlar_avrupa_orta', 'd_sinirlar_ortadogu', 'd_sinirlar_afrika',
  'd_sinirlar_asya', 'd_sinirlar_amerika', 'd_sinirlar_okyanusya'];
const AD = ['D_SINIRLAR', 'D_SINIRLAR_KOMSU', 'D_SINIRLAR_AVRUPA_BATI',
  'D_SINIRLAR_AVRUPA_ORTA', 'D_SINIRLAR_ORTADOGU', 'D_SINIRLAR_AFRIKA',
  'D_SINIRLAR_ASYA', 'D_SINIRLAR_AMERIKA', 'D_SINIRLAR_OKYANUSYA'];
AILE.forEach(f => eval(fs.readFileSync('data/' + f + '.js', 'utf8')));
eval(fs.readFileSync('data/devletler.js', 'utf8'));

let tum = [];
AD.forEach(a => { if (Array.isArray(window[a])) tum = tum.concat(window[a]); });
// `js/d_katman.js` `_dEtkinSinif` ile BIREBIR ayni (kopya degil, ayni tablo)
const sinif = k => k.sinif ? k.sinif
  : (k.kategori === 'D' ? 'E' : k.kategori === 'fiili' ? 'D' : k.kategori === 'C' ? 'C' : 'YOK');
// `_dAktifKayitlar`in cizilebilirlik sarti (gun suzgeci HARIC)
const cizilebilir = tum.filter(k => k && Array.isArray(k.hat) && k.hat.length >= 2 &&
  k.f != null && sinif(k) !== 'YOK');

const DEV = {};
(window.DEVLETLER || []).forEach(d => { if (d && d.id) DEV[d.id] = d; });

const yuzde = (n, t) => t ? (100 * n / t).toFixed(1) + '%' : '—';
console.log('== EVREN ==');
console.log('  toplam D kaydi      :', tum.length);
console.log('  CIZILEBILIR (hat+f+sinif) :', cizilebilir.length);
const sd = {};
cizilebilir.forEach(k => { const s = sinif(k); sd[s] = (sd[s] || 0) + 1; });
console.log('  sinif dagilimi      :', JSON.stringify(sd));

console.log('\n== P1/P3 · TIKLAMA BALONUNUN GOSTEREBILECEGI ALANLAR ==');
console.log('   (js/d_katman.js _dPopupHtml bugun YALNIZ: id · sinif etiketi · uzunluk_km · kesinlik_km · dayanak[0..1])');
const alan = ['ad', 'baslik', 'not', 'dayanak', 'uzunluk_km', 'kesinlik_km',
  'kesinlik_not', 'tahdit', 'degisti', 'sinif_not', 'geometri_kaynagi', 't'];
alan.forEach(a => {
  const n = cizilebilir.filter(k => k[a] != null &&
    !(Array.isArray(k[a]) && !k[a].length)).length;
  console.log('   %s %s %s', a.padEnd(18), String(n).padStart(4), yuzde(n, cizilebilir.length));
});

console.log('\n== P2 · `taraflar[]` INSAN ADINA COZULUYOR MU (devletler.js `ad`) ==');
let cift = 0, coz = 0, cozulmeyen = {};
cizilebilir.forEach(k => (k.taraflar || []).forEach(t => {
  cift++;
  if (DEV[t] && DEV[t].ad) coz++; else cozulmeyen[t] = (cozulmeyen[t] || 0) + 1;
}));
console.log('   taraf-kayit cifti :', cift, '· adi COZULEN:', coz, yuzde(coz, cift));
const eksik = Object.entries(cozulmeyen).sort((a, b) => b[1] - a[1]);
console.log('   cozulmeyen kimlik :', eksik.length, eksik.slice(0, 8).map(e => e[0] + '×' + e[1]).join(', '));

console.log('\n== P3 · `t` ALANININ ANLAMI ==');
const bitis = {};
cizilebilir.forEach(k => { const t = k.t == null ? '(acik uc)' : k.t; bitis[t] = (bitis[t] || 0) + 1; });
Object.entries(bitis).sort((a, b) => b[1] - a[1]).slice(0, 5)
  .forEach(([t, n]) => console.log('   t = %s  %s kayit  %s', String(t).padEnd(12), String(n).padStart(4), yuzde(n, cizilebilir.length)));

console.log('\n== P4 · SINIFIN EKRANDAKI KARSILIGI (js/d_katman.js D_SINIF_STIL) ==');
const STIL = { F: [3.5, null, 1], E: [2.8, '[6,2]', 1], D: [2.5, '[1,2]', 0.75], C: [2.2, '[2,2]', 0.85] };
const ETIKET = { F: 'hukuki (uluslararasi taninmis)', E: 'hukuki', D: 'fiili (de facto, hukuken gecersiz)', C: 'belge kaba' };
console.log('   sinif · renk · genislik · desen · opaklik · desen PERIYODU (px = desen×genislik) · bugun cizilebilen · balon etiketi');
['F', 'E', 'D', 'C'].forEach(s => {
  const [g, ds, op] = STIL[s];
  let per = 'yok (duz)';
  if (ds) { const p = JSON.parse(ds); per = ((p[0] + p[1]) * g).toFixed(1) + ' px'; }
  console.log('   %s · #0a2f5c (vasal ise #d4707d) · %s px · %s · %s · %s · %s kayit · "%s"',
    s, String(g).padEnd(3), String(ds).padEnd(6), op, per.padEnd(10), String(sd[s] || 0).padStart(3), ETIKET[s]);
});

// ---- P5 (olcum sirasinda dogdu, ongorude YOKTU — acikca boyle yaziliyor):
// "taraflarin adini balona bas" onerisi SAGLAM MI? `taraflar[]` atlasin HARITA
// KIMLIGIDIR, o gunun polity'si degil. 1827'de `hollanda` kunyesi "Hollanda
// Cumhuriyeti" (1581-1923) diyor — oysa 1795'te bitti, 1827'de Birlesik
// Hollanda Kralligi vardi; `almanya` "Kutsal Roma / Almanya" (962-1923) diyor —
// 1827'de dogu komsu PRUSYA idi ve antlasmayi Prusya/Hannover imzaladi.
// ⇒ Kunye adini basmak TARIHSEL OLARAK YANLIS metin uretir. Olcut: kunye
// penceresi ne kadar genis (genis pencere = "kap" kimligi, gunun devleti degil).
// 🔴 TARIH KARSILASTIRMASI pad'siz YAPILMAZ: "962-02-02" <= "1827-07-06" dizgi
// olarak FALSE doner (D205). Bu alette bir kez tam o tuzaga dusuldu.
function gunSayi(s) {
  if (s == null) return null;
  const p = String(s).split('-');
  return Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5;
}
console.log('\n== P5 · `taraflar[]` ADI O GUNUN DEVLETINI ANLATIYOR MU ==');
let genis = 0, dar = 0, olculemez = 0;
const gpay = [];
Object.keys(DEV).forEach(() => { });
cizilebilir.forEach(k => {
  (k.taraflar || []).forEach(t => {
    const d = DEV[t];
    if (!d || d.f == null || d.t == null) { olculemez++; return; }
    const yil = (gunSayi(d.t) - gunSayi(d.f)) / 365.25;
    gpay.push(yil);
    if (yil > 300) genis++; else dar++;
  });
});
gpay.sort((a, b) => a - b);
console.log('   taraf-kayit cifti: %d · kunye penceresi >300 yil: %d (%s) · <=300: %d · olculemez: %d',
  cift, genis, yuzde(genis, cift), dar, olculemez);
console.log('   kunye penceresi (yil): medyan %s · ust ceyrek %s · en genis %s',
  gpay.length ? gpay[Math.floor(gpay.length / 2)].toFixed(0) : '—',
  gpay.length ? gpay[Math.floor(gpay.length * 0.75)].toFixed(0) : '—',
  gpay.length ? gpay[gpay.length - 1].toFixed(0) : '—');
console.log('   ⇒ balona TARAF ADI degil DAYANAK (antlasma) adi basilmali:');
console.log('     `dayanak` doluluk %s · ilk dayanakta `ad` olan: %s',
  yuzde(cizilebilir.filter(k => (k.dayanak || []).length).length, cizilebilir.length),
  yuzde(cizilebilir.filter(k => (k.dayanak || [])[0] && (k.dayanak[0].ad || k.dayanak[0].kaynak)).length, cizilebilir.length));

// ---- SAHNE: verilen gun + kutuda FIILEN cizilen kayitlar, balon metniyle
const GUN = process.argv[2] || '1827-07-06';
const K = process.argv.slice(3, 7).map(Number);
const KUTU = K.length === 4 ? K : [1.94, 48.87, 7.83, 53.74];
const aktif = cizilebilir.filter(k => k.f <= GUN && (k.t == null || GUN < k.t) &&
  k.hat.some(p => p[0] >= KUTU[0] && p[0] <= KUTU[2] && p[1] >= KUTU[1] && p[1] <= KUTU[3]));
console.log('\n== SAHNE %s · kutu %s ==', GUN, KUTU.join(','));
console.log('   kutuda cizilen kayit: %d', aktif.length);
aktif.forEach(k => {
  const lons = k.hat.map(p => p[0]), lats = k.hat.map(p => p[1]);
  const adlar = (k.taraflar || []).map(t => (DEV[t] && DEV[t].ad) || ('[' + t + ' — kunye YOK]'));
  console.log('\n   --- %s  (sinif %s)', k.id, sinif(k));
  console.log('       taraflar   : %s  ⇒  "%s"', JSON.stringify(k.taraflar), adlar.join(' ↔ '));
  console.log('       pencere    : %s → %s', k.f, k.t == null ? '(acik uc)' : k.t);
  console.log('       hat        : %d kose · lon %s..%s · lat %s..%s · %s km',
    k.hat.length, Math.min(...lons).toFixed(2), Math.max(...lons).toFixed(2),
    Math.min(...lats).toFixed(2), Math.max(...lats).toFixed(2), k.uzunluk_km);
  console.log('       kesinlik   : %s km · %s', k.kesinlik_km, (k.kesinlik_not || '—'));
  console.log('       dayanak    : %s', (k.dayanak || []).map(c => (c.ad || c.kaynak) + (c.tarih ? ' (' + c.tarih + ')' : '')).join(' | ') || '—');
  console.log('       degisti    : %s', k.degisti ? (k.degisti.deger + ' · ' + (k.degisti.not || '')) : '—');
  console.log('       not        : %s', k.not || '—');
  console.log('       BUGUNKU BALON BASLIGI: "%s"   ⇐ ic slug, insan adi degil', k.id);
});

// SITE YUKU — tarayiciya NE INIYOR, ve A/B ikinci surumu ne EKLER?
//
// Emre: "iki versiyonda aynı sitede yük olarak durmasin. kisinin
// tercihine göre switch seçer gibi versiyon degistirilebilsin."
// ⇒ Once BUGUNKU yuku olcmek gerekiyor: neyi bolecegimizi bilmeden
//   "tembel yukleme" bir tasarim degil bir temenni.
const fs = require('fs'), path = require('path');
const KOK = process.cwd();
const mb = n => (n / 1048576).toFixed(2);
const tr = s => String(s).replace(/İ/g,'I').replace(/ı/g,'i').replace(/ş/g,'s')
  .replace(/ü/g,'u').replace(/ö/g,'o').replace(/ç/g,'c').replace(/ğ/g,'g');

const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const yollar = [...new Set((html.match(/(?:data|js|css)\/[A-Za-z0-9_.-]+\.(?:js|css)/g) || []))];

const kayit = [];
let toplam = 0;
for (const y of yollar) {
  const tam = path.join(KOK, y);
  if (!fs.existsSync(tam)) continue;
  const s = fs.statSync(tam).size;
  kayit.push([y, s]);
  toplam += s;
}
kayit.sort((a, b) => b[1] - a[1]);

console.log('=== TARAYICIYA INEN DOSYALAR (index.html) ===');
console.log('  dosya sayisi : ' + kayit.length);
console.log('  TOPLAM       : ' + mb(toplam) + ' MB');
console.log('');
console.log('  EN AGIR 14:');
for (const [y, s] of kayit.slice(0, 14))
  console.log('   ' + (mb(s) + ' MB').padStart(9) + '  ' + tr(y));
console.log('');

// ── kova: GEOMETRI mi VERI mi ───────────────────────────────────────────
const GEO = ['donemler.js', 'bolgeler.js', 'devletler_harita.js', 'petek_govde.js', 'altlik.js', 'devirler.js'];
let geo = 0, oteki = 0;
const geoDetay = [];
for (const [y, s] of kayit) {
  const ad = path.basename(y);
  if (GEO.includes(ad)) { geo += s; geoDetay.push([ad, s]); }
  else oteki += s;
}
console.log('=== KOVA ===');
console.log('  GEOMETRI (kosunun urettigi) : ' + mb(geo) + ' MB');
for (const [a, s] of geoDetay.sort((x,y)=>y[1]-x[1]))
  console.log('     ' + (mb(s) + ' MB').padStart(9) + '  ' + a);
console.log('  OTEKI (yerlesim·kronoloji·dizin) : ' + mb(oteki) + ' MB');
console.log('');
console.log('=== A/B IKINCI SURUMUN MALIYETI ===');
console.log('  B surumu YALNIZ geometriyi ikizler ⇒ +' + mb(geo) + ' MB');
console.log('  ikisi BIRLIKTE inerse toplam : ' + mb(toplam + geo) + ' MB');
console.log('  TEMBEL yuklenirse (tek surum): ' + mb(toplam) + ' MB  (degisiklik YOK)');

// PAKET-A6C · Tebük-Medine hac yolu boşluk ölçümü (salt okunur) · 13 Eylül 2026
// Aday noktalar için: en yakın 3 mevcut nokta (3 km mükerrer sınavı) + hattın en büyük boşluğu.
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const gp = fs.readFileSync(path.join(KOK, 'arac/girdi.py'), 'utf8');
const bas = gp.indexOf('GIRDI_DOSYALARI = ['), son = gp.indexOf('\n]', bas);
const DOS = [...gp.slice(bas, son).split('\n').map(l => l.replace(/#.*$/, '')).join('\n').matchAll(/"([^"]+\.js)"/g)].map(m => m[1]);
let Y = [];
for (const f of DOS) { const w = {}; global.window = w; try { eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const y of w[k]) if (y && y.ad && y.lat != null) Y.push(y); }
const km = (a, b, c, d) => { const r = Math.PI / 180, x = (d - b) * r * Math.cos((a + c) / 2 * r), yy = (c - a) * r; return 6371 * Math.sqrt(x * x + yy * yy); };
const ADAY = [
  ['Ahdar (Kal‘atü’l-Ahdar)', 28.0833, 37.15, 'GeoNames: Qal\'at al Akhdar, fort, 28°05\'N 37°09\'E'],
  ['Dârülhamrâ', 27.34, 37.79, 'GeoNames: Ad Dar al Hamra, abandoned railroad station, 27.34N 37.79E'],
];
for (const [ad, la, lo, k] of ADAY) {
  const en = Y.map(y => [km(la, lo, y.lat, y.lon), y.ad]).sort((p, q) => p[0] - q[0]).slice(0, 3);
  console.log(ad, la, lo, '|', k, '| en yakin:', en.map(([d, n]) => n + ' ' + d.toFixed(1) + ' km').join(' · '));
}
// hat örneklemesi: Tebük -> Medâin-i Sâlih, her 10 km'de en yakın mevcut noktaya mesafe
const A = [28.384, 36.566], B = [26.7917, 37.9542];
let enBuyuk = [0, null];
for (let i = 0; i <= 20; i++) { const la = A[0] + (B[0] - A[0]) * i / 20, lo = A[1] + (B[1] - A[1]) * i / 20;
  const [d, n] = Y.map(y => [km(la, lo, y.lat, y.lon), y.ad]).sort((p, q) => p[0] - q[0])[0];
  if (d > enBuyuk[0]) enBuyuk = [d, `${la.toFixed(3)},${lo.toFixed(3)} en yakin ${n}`]; }
console.log('Tebuk -> Medain-i Salih hattinda en uzak nokta-mesafesi:', enBuyuk[0].toFixed(1), 'km @', enBuyuk[1]);

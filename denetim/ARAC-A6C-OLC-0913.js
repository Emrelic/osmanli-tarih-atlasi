// PAKET-A6C · salt okunur ölçüm aleti · 13 Eylül 2026
// Kullanım: node denetim/ARAC-A6C-OLC-0913.js <gun> <ad-deseni(regex)> [latmin latmax lonmin lonmax]
// Yerleşim kaynağı: arac/girdi.py GIRDI_DOSYALARI (izin listesi) — dosya listesi oradan okunur.
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const gp = fs.readFileSync(path.join(KOK, 'arac/girdi.py'), 'utf8');
const bas = gp.indexOf('GIRDI_DOSYALARI = [');
const son = gp.indexOf('\n]', bas);
const blok = gp.slice(bas, son).split('\n').map(l => l.replace(/#.*$/, '')).join('\n');
const DOS = [...blok.matchAll(/"([^"]+\.js)"/g)].map(m => m[1]);
let Y = [];
for (const f of DOS) {
  const p = path.join(KOK, 'data', f);
  if (!fs.existsSync(p)) { console.error('YOK:', f); continue; }
  const w = {}; global.window = w;
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { console.error('HATA', f, e.message); continue; }
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const y of w[k]) if (y && y.ad) Y.push(Object.assign({ _dosya: f }, y));
}
const [gun, desen, a, b, c, d] = process.argv.slice(2);
const re = desen ? new RegExp(desen, 'i') : null;
const bul = (arr, g) => (arr || []).filter(p => p.f <= g && g < p.t);
const out = [];
for (const y of Y) {
  const lat = y.lat ?? (y.k && y.k[0]), lon = y.lon ?? (y.k && y.k[1]);
  if (re && !re.test(y.ad)) {
    if (!(a && lat >= +a && lat <= +b && lon >= +c && lon <= +d)) continue;
  } else if (!re && !(a && lat >= +a && lat <= +b && lon >= +c && lon <= +d)) continue;
  const s = {};
  for (const alan of ['d', 'v', 's', 'isg']) { const x = bul(y[alan], gun); if (x.length) s[alan] = x; }
  out.push({ ad: y.ad, dosya: y._dosya, lat, lon, gun, simdi: s, tam: { d: y.d, v: y.v, s: y.s, isg: y.isg, kur: y.kur, m: y.m } });
}
console.log('dosya:', DOS.length, '· yerlesim:', Y.length, '· eslesen:', out.length);
for (const o of out) console.log(JSON.stringify(o));

// H-0056 — Sahra: "isaretlenmemis yerlesim kalmis mi" + BIR TAMAMLIK OLCUTU.
// Emre iki sey istedi: (a) bosluk taramasi (b) "hepsinin oldugundan emin olalim"
// (b) bir OLCUT ister. Bu betik ikisini de uretir: BOSLUK HARITASI + ESIK.
const fs = require('fs'), path = require('path');
const KOK = process.argv[2], canli = process.argv[3].split(',');

const Y = [];
for (const f of canli) {
  const yol = path.join(KOK, 'data', f); if (!fs.existsSync(yol)) continue;
  global.window = {};
  try { eval(fs.readFileSync(yol, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) { const v = global.window[k]; if (Array.isArray(v)) for (const r of v) if (r && r.ad) Y.push(r); }
}
console.log('canli kulliyat: ' + Y.length + ' nokta');

// Sahra kusagi — TASNIF'in kullandigi kutu (15-33 K / -17..+33 D)
const G = 15, K = 33, B = -17, D = 33;
const kutu = Y.filter(y => y.lat >= G && y.lat <= K && y.lon >= B && y.lon <= D);
console.log('Sahra kutusunda: ' + kutu.length + ' nokta');

// 3x3 derecelik hucreler — ekvatorda ~333x333 km, 25 K'de ~333x302 km
const AD = 3;
const cells = {};
for (let la = G; la < K; la += AD) for (let lo = B; lo < D; lo += AD) cells[la + '|' + lo] = [];
for (const y of kutu) {
  const la = G + Math.floor((y.lat - G) / AD) * AD, lo = B + Math.floor((y.lon - B) / AD) * AD;
  const k = la + '|' + lo; if (cells[k]) cells[k].push(y.ad);
}

const bos = [], dolu = [];
for (const k of Object.keys(cells)) (cells[k].length ? dolu : bos).push(k);
console.log('');
console.log('HUCRE (3x3 derece · ~333x310 km): toplam ' + Object.keys(cells).length +
  '  ·  DOLU ' + dolu.length + '  ·  BOS ' + bos.length +
  '  (%' + Math.round(100 * bos.length / Object.keys(cells).length) + ' bos)');

// Bos hucrelerin en yakin noktaya uzakligi — "ne kadar derin bir bosluk"
const km = (a, b, c, d) => { const R = 6371, r = Math.PI / 180, dl = (c - a) * r, dn = (d - b) * r; return 2 * R * Math.asin(Math.sqrt(Math.sin(dl / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dn / 2) ** 2)); };
const derin = bos.map(k => {
  const [la, lo] = k.split('|').map(Number);
  const cla = la + AD / 2, clo = lo + AD / 2;
  let d = 1e9, en = '';
  for (const y of Y) { const t = km(cla, clo, y.lat, y.lon); if (t < d) { d = t; en = y.ad; } }
  return { la: cla, lo: clo, d: d, en: en };
}).sort((a, b) => b.d - a.d);

console.log('');
console.log('EN DERIN 15 BOSLUK — hucre merkezinden en yakin NOKTAYA uzaklik');
console.log('(bu mesafe, o hucreyi hangi petegin YUTTUGUNU da soyler — CLAUDE.md 2)');
for (const c of derin.slice(0, 15))
  console.log('   ' + c.la.toFixed(1).padStart(5) + ' K / ' + c.lo.toFixed(1).padStart(6) + ' D   ' +
    c.d.toFixed(0).padStart(4) + ' km ->  ' + c.en);

console.log('');
console.log('TAMAMLIK OLCUTU ONERISI (Emre: "hepsinin oldugundan emin olalim"):');
console.log('   Bir kusak TAMAM sayilir <=> hicbir 3x3 derecelik hucrenin merkezi');
console.log('   en yakin noktadan X km uzakta DEGIL. Bugunku en derin bosluk:');
console.log('   ' + derin[0].d.toFixed(0) + ' km.  Kaydedilir, esik KOORDINATORUN.');
console.log('   NOT: bos hucrelerin cogu KASITLI olabilir (col dolgusu tasarimi).');
console.log('   Bu betik "bos" der, "KUSUR" DEMEZ — ayrimi kaynak yapar.');

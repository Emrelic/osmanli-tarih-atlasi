// node _hicri.js <hicri-yil> -> 1 Muharrem'in Jülyen karşılığı (tablo/sivil takvim; ±1 gün). Sınav: 287 -> 0900-01-07
function jdnIslamic(y, m, d) { return d + Math.ceil(29.5 * (m - 1)) + (y - 1) * 354 + Math.floor((3 + 11 * y) / 30) + 1948440 - 1; }
function jdnToJulian(j) { // JDN -> Julian takvim
  const c = j + 32082; const d = Math.floor((4 * c + 3) / 1461); const e = c - Math.floor(1461 * d / 4); const m = Math.floor((5 * e + 2) / 153);
  return { y: d - 4800 + Math.floor(m / 10), m: m + 3 - 12 * Math.floor(m / 10), d: e - Math.floor((153 * m + 2) / 5) + 1 };
}
const pad = (n, w) => String(n).padStart(w, '0');
function muharrem1(y) { const j = jdnToJulian(jdnIslamic(y, 1, 1)); return `${pad(j.y, 4)}-${pad(j.m, 2)}-${pad(j.d, 2)}`; }
module.exports = { muharrem1, jdnIslamic, jdnToJulian };
if (require.main === module) for (const y of process.argv.slice(2)) console.log(y, muharrem1(+y), '->', muharrem1(+y + 1));

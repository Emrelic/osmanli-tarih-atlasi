// Tablo (sivil) hicrî -> Jülyen (<=1582-10-04) çevirici. node hicri.js 140:757 141:758 ...
function hicriJDN(y, m, d) { return Math.floor((11 * y + 3) / 30) + 354 * y + 30 * m - Math.floor((m - 1) / 2) + d + 1948440 - 385; }
function jdnJulian(jdn) { // Jülyen takvim
  const c = jdn + 32082; const dd = Math.floor((4 * c + 3) / 1461); const e = c - Math.floor(1461 * dd / 4);
  const m = Math.floor((5 * e + 2) / 153);
  const day = e - Math.floor((153 * m + 2) / 5) + 1; const month = m + 3 - 12 * Math.floor(m / 10); const year = dd - 4800 + Math.floor(m / 10);
  return [year, month, day];
}
const p2 = n => String(n).padStart(2, '0'), p4 = n => String(n).padStart(4, '0');
function iso(a) { return p4(a[0]) + '-' + p2(a[1]) + '-' + p2(a[2]); }
// hicrî yıl AH'nin, miladî Y yılıyla kesişiminin ilk günü (Jülyen)
function kesisimIlk(AH, Y) {
  const bas = jdnJulian(hicriJDN(AH, 1, 1)), son = jdnJulian(hicriJDN(AH + 1, 1, 1) - 1);
  const basIso = iso(bas), sonIso = iso(son);
  const yBas = p4(Y) + '-01-01', ySon = p4(Y) + '-12-31';
  const lo = basIso > yBas ? basIso : yBas, hi = sonIso < ySon ? sonIso : ySon;
  return { AH, Y, hicri_bas: basIso, hicri_son: sonIso, ilk: lo <= hi ? lo : null };
}
module.exports = { kesisimIlk, hicriJDN, jdnJulian, iso };
if (require.main === module) for (const a of process.argv.slice(2)) { const [ah, y] = a.split(':').map(Number); console.log(JSON.stringify(kesisimIlk(ah, y))); }

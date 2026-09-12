// KITA 7 -- B3 KORIDOR, GERCEK VERI kesit dokumu.
// data/donemler.js (KOSU 9'un GERCEK, yayinlanmis ciktisi) icinden belirli
// tarihlerde Osmanli dogrudan (o) ve tabi (v) topraginin GERCEK poligonlarini
// (PARCA_HALKA + PARCALAR uzerinden, delik dahil) cikarir, JSON'a yazar.
// arac/uret_petek.py'ye HIC DOKUNMAZ, import ETMEZ -- yalniz onun GERCEK
// ciktisini (donemler.js) D023 geregi node'un kendi eval()'iyle okur.
const fs = require('fs');
global.window = {};
eval(fs.readFileSync('data/donemler.js', 'utf8'));
const D = window.DONEMLER, PARCALAR = window.PARCALAR, PH = window.PARCA_HALKA;

function parcaGeom(k) {
  // PARCA_HALKA[k] = [dis_halka_idx, delik1_idx, delik2_idx, ...]
  const rings = PH[k];
  const ext = PARCALAR[rings[0]];
  const holes = rings.slice(1).map(i => PARCALAR[i]);
  return { ext, holes };
}

// 521 kayittan her 10.'yu al (52 kesit) + hem 'o' (dogrudan) hem 'v' (tabi).
const kesitler = [];
for (let i = 0; i < D.length; i += 10) {
  const d = D[i];
  for (const [alan, kume] of [['dogrudan', d.o], ['tabi', d.v]]) {
    if (!kume || !kume.length) continue;
    const parcalar = kume.map(k => parcaGeom(k));
    kesitler.push({ tarih: d.f, alan, n_parca: parcalar.length, parcalar });
  }
}
fs.writeFileSync(
  process.argv[2] || 'real_kesit.json',
  JSON.stringify(kesitler)
);
console.log('kesit sayisi:', kesitler.length, '-> yazildi:', process.argv[2]);

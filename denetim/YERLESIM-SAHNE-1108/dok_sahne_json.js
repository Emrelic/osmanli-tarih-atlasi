// data/yerlesimler_sahne1108.js kayıtlarını teyit ajanları için gruplu JSON'a döker. node dok_sahne_json.js <cikti_dizini> <grup_sayisi>
const fs = require('fs'), path = require('path'), o = require('./ortak.js');
const L = o.yukle('yerlesimler_sahne1108.js').YERLESIMLER_SAHNE1108;
const n = +process.argv[3] || 4, D = process.argv[2];
const gr = Array.from({ length: n }, () => []);
L.forEach((y, i) => gr[i % n].push({
  ad: y.ad, lat: y.lat, lon: y.lon, kur: y.kur || null, bit: y.bit || null,
  s: (y.s || []).map(r => ({ f: r.f, t: r.t, d: r.d, kaynak: String(r.kaynak || '').replace(/ \[KAYNAK OKUNMADI[^\]]*\]/, '') })),
  d: y.d || [], v: y.v || [], isg: y.isg || [], koordinat_notu: y.kaynak
}));
gr.forEach((g, i) => fs.writeFileSync(path.join(D, `teyit_girdi_${i + 1}.json`), JSON.stringify(g, null, 1)));
console.log(L.length, gr.map(g => g.length));

// 1923-10-29'da etkin YABANCI DEVLET govdelerini GeoJSON'a doker (olcum icin).
// 🔴 parcaCoz (js/app.js:133) ile AYNI cozum: dnm.g -> DEVLET_PARCA_HALKA[p]
//    -> halka indeksleri -> DEVLET_PARCALAR[h].  (ilk denemede ters kurulmustu,
//    16/16 sehir sinavi X vermisti — D048 ailesi: sema tahmin edilmez, okunur.)
const fs = require('fs'), vm = require('vm');
const GUN = process.argv[2] || '1923-10-29';
const OUT = process.argv[3];
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data/devletler_harita.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('data/devletler.js', 'utf8'), sandbox);
const P = sandbox.window.DEVLET_PARCALAR, H = sandbox.window.DEVLET_HARITA;
const HALKA = sandbox.window.DEVLET_PARCA_HALKA || [];
const D = sandbox.window.DEVLETLER || [];
console.log('parca havuzu: ' + P.length + ' · kimlik: ' + H.length + ' · halka: ' + HALKA.length);

// id -> harita anahtari (D048: govde `harita:` ile anahtarli, id ile DEGIL)
const idHarita = {};
for (const d of D) if (d && d.id) idHarita[d.id] = d.harita || d.id;
fs.writeFileSync(OUT.replace(/\.geojson$/, '_idharita.json'), JSON.stringify(idHarita));

const out = [];
let etkin = 0;
for (const d of H) {
  for (const dn of (d.dnm || [])) {
    const f = dn.f || '0000-01-01', t = dn.t || '9999-12-31';
    if (!(f <= GUN && GUN <= t)) continue;
    etkin++;
    const polys = [];
    for (const p of (dn.g || [])) {
      if (typeof p !== 'number') { polys.push([p]); continue; }
      const ph = HALKA[p];
      if (!ph) continue;
      polys.push(ph.map(h => P[h]).filter(Boolean));
    }
    if (!polys.length) continue;
    out.push({ type: 'Feature', properties: { id: d.id, f: f, t: t },
               geometry: { type: 'MultiPolygon', coordinates: polys } });
  }
}
console.log(GUN + ' etkin donem: ' + etkin + ' · feature: ' + out.length);
fs.writeFileSync(OUT, JSON.stringify({ type: 'FeatureCollection', features: out }));
console.log('yazildi: ' + (fs.statSync(OUT).size / 1048576).toFixed(1) + ' MB');

// Verilen GUN icin haritada BOYALI butun govdeler -> GeoJSON
//   yabanci: data/devletler_harita.js (dnm.g -> DEVLET_PARCA_HALKA -> DEVLET_PARCALAR)
//   osmanli: data/donemler.js  (kayit.o = dogrudan · kayit.v = tabi) -> PARCA_HALKA/PARCALAR
// Cozum js/app.js:133 parcaCoz ile AYNI.
const fs = require('fs'), vm = require('vm');
const GUN = process.argv[2], OUT = process.argv[3];
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data/devletler.js', 'utf8'), sandbox);
const idHarita = {};
for (const d of (sandbox.window.DEVLETLER || [])) if (d && d.id) idHarita[d.id] = d.harita || d.id;
fs.writeFileSync(OUT.replace(/\.geojson$/, '_idharita.json'), JSON.stringify(idHarita));

function coz(g, havuz, halka) {
  const polys = [];
  for (const p of (g || [])) {
    if (typeof p !== 'number') { polys.push([p]); continue; }
    const ph = halka[p];
    if (!ph) continue;
    polys.push(ph.map(h => havuz[h]).filter(Boolean));
  }
  return polys;
}
const out = [];

vm.runInContext(fs.readFileSync('data/devletler_harita.js', 'utf8'), sandbox);
const P = sandbox.window.DEVLET_PARCALAR, HALKA = sandbox.window.DEVLET_PARCA_HALKA || [];
for (const d of (sandbox.window.DEVLET_HARITA || [])) {
  for (const dn of (d.dnm || [])) {
    if (!((dn.f || '0000-01-01') <= GUN && GUN <= (dn.t || '9999-12-31'))) continue;
    const polys = coz(dn.g, P, HALKA);
    if (polys.length) out.push({ type: 'Feature', properties: { id: d.id, kaynak: 'yabanci' },
                                 geometry: { type: 'MultiPolygon', coordinates: polys } });
  }
}
const yabanci = out.length;

vm.runInContext(fs.readFileSync('data/donemler.js', 'utf8'), sandbox);
const PP = sandbox.window.PARCALAR, PH = sandbox.window.PARCA_HALKA || [];
for (const d of (sandbox.window.DONEMLER || [])) {
  if (!((d.f || '0000-01-01') <= GUN && GUN <= (d.t || '9999-12-31'))) continue;
  for (const [alan, kimlik] of [['o', 'osmanli'], ['v', 'osmanli-tabi']]) {
    const polys = coz(d[alan], PP, PH);
    if (polys.length) out.push({ type: 'Feature', properties: { id: kimlik, kaynak: 'osmanli', donem: d.ad },
                                 geometry: { type: 'MultiPolygon', coordinates: polys } });
  }
}
console.log(GUN + ' · yabanci govde: ' + yabanci + ' · osmanli katmani: ' + (out.length - yabanci));
fs.writeFileSync(OUT, JSON.stringify({ type: 'FeatureCollection', features: out }));
console.log('yazildi: ' + (fs.statSync(OUT).size / 1048576).toFixed(1) + ' MB');

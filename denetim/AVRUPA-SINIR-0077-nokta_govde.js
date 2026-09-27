// node nokta_govde.js GUN noktalar.json  -> her nokta icin o gun boyali govde id'leri
// noktalar.json: [[ad, lat, lon], ...]   Cozum ARAC-D-RENK-0073-GOVDEGUN.js ile ayni.
const fs = require('fs'), vm = require('vm');
process.chdir('C:/atlas');
const GUNLER = process.argv[2].split(','), NOK = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const sb = { window: {}, console }; vm.createContext(sb);
vm.runInContext(fs.readFileSync('data/devletler_harita.js', 'utf8'), sb);
vm.runInContext(fs.readFileSync('data/donemler.js', 'utf8'), sb);
const W = sb.window;
function coz(g, havuz, halka) {
  const polys = [];
  for (const p of (g || [])) {
    if (typeof p !== 'number') { polys.push([p]); continue; }
    const ph = halka[p]; if (!ph) continue;
    polys.push(ph.map(h => havuz[h]).filter(Boolean));
  }
  return polys;
}
function inRing(x, y, r) {
  let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c;
  }
  return c;
}
function inPoly(x, y, poly) { // poly: [outer, holes...] ; bazen halka listesi duz
  if (!poly.length) return false;
  if (!inRing(x, y, poly[0])) return false;
  for (let k = 1; k < poly.length; k++) if (inRing(x, y, poly[k])) return false;
  return true;
}
for (const GUN of GUNLER) {
  const feats = [];
  for (const d of (W.DEVLET_HARITA || [])) for (const dn of (d.dnm || [])) {
    if (!((dn.f || '0000-01-01') <= GUN && GUN <= (dn.t || '9999-12-31'))) continue;
    feats.push([d.id, coz(dn.g, W.DEVLET_PARCALAR, W.DEVLET_PARCA_HALKA || [])]);
  }
  for (const d of (W.DONEMLER || [])) {
    if (!((d.f || '0000-01-01') <= GUN && GUN <= (d.t || '9999-12-31'))) continue;
    for (const [a, k] of [['o', 'OSMANLI'], ['v', 'OSM-TABI']]) feats.push([k, coz(d[a], W.PARCALAR, W.PARCA_HALKA || [])]);
  }
  for (const [ad, lat, lon] of NOK) {
    const hit = [];
    for (const [id, polys] of feats) if (polys.some(p => inPoly(lon, lat, p))) hit.push(id);
    console.log(GUN + '  ' + ad.padEnd(28) + ' ' + (hit.join(',') || '(yok)'));
  }
}

// denetim/SINIR-UZAKDOGU-0078-govde.js — 1923-09-01'de Uzakdoğu kutusundaki petek
// gövdelerini (data/devletler_harita.js, js/app.js ile AYNI çözümleme) GeoJSON'a döker.
// Kullanım: node denetim/SINIR-UZAKDOGU-0078-govde.js <çıktı.geojson> [gün]
// Tüketicisi: denetim/SINIR-UZAKDOGU-0078-uret.py (şerit ölçümü, §5.4).
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const cikti = process.argv[2], gunS = process.argv[3] || "1923-09-01";
const KUTU = [115, 30, 180, 72];
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(KOK, "data/devletler_harita.js"), "utf8"), ctx);
const W = ctx.window;
function gunIdx(s) { const p = s.split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); }
const BITIS = gunIdx("1923-10-29"), t = gunIdx(gunS);
function aktif(fi, ti) { return fi <= t && (t < ti || (t === BITIS && ti === BITIS)); }
function coz(dizi) {
  const H = W.DEVLET_PARCALAR, PH = W.DEVLET_PARCA_HALKA, yeni = !!(PH && PH.length);
  return dizi.map(p => typeof p !== "number" ? p : (!yeni ? H[p] : PH[p].map(h => H[h])));
}
function kutudaMi(mp) {
  for (const poly of mp) for (const [x, y] of poly[0])
    if (x >= KUTU[0] && x <= KUTU[2] && y >= KUTU[1] && y <= KUTU[3]) return true;
  return false;
}
const feats = [];
for (const s of W.DEVLET_HARITA) for (const p of s.dnm) {
  if (!aktif(gunIdx(p.f), gunIdx(p.t)) || !p.g) continue;
  const mp = coz(p.g);
  if (!kutudaMi(mp)) continue;
  feats.push({ type: "Feature", properties: { id: s.id, f: p.f, t: p.t }, geometry: { type: "MultiPolygon", coordinates: mp } });
}
fs.writeFileSync(cikti, JSON.stringify({ type: "FeatureCollection", features: feats }));
console.log(`${gunS}: kutuda ${feats.length} aktif gövde → ${cikti}: ` + feats.map(f => f.properties.id).join(", "));

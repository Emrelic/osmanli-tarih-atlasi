// -*- coding: utf-8 -*-
// SINIR-D-AMERIKA-0077 — 1923-09-01 günü haritada boyanan YABANCI gövdeleri (A katmanı,
// data/devletler_harita.js) Amerika kutusunda GeoJSON'a döker. SALT OKUR; çıktı scratchpad'e.
// Çözüm js/app.js parcaCoz / gunIdx / aktifAralik ile BİREBİR (satır 15, 111, 133).
// Kullanım: node denetim/SINIR-D-AMERIKA-0077-govde.js <çıktı.geojson> [YYYY-MM-DD]
'use strict';
global.window = global;
const fs = require('fs');
const P = 'C:/atlas/';
eval(fs.readFileSync(P + 'data/devletler_harita.js', 'utf8'));
eval(fs.readFileSync(P + 'data/devletler.js', 'utf8'));

function gunIdx(s) { const p = s.split('-'); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); }
const BITIS = gunIdx('1923-10-29');   // app.js BITIS ile aynı olmalı — aşağıda denetlenir
function aktifAralik(fi, ti, t) { return fi <= t && (t < ti || (t === BITIS && ti === BITIS)); }
function parcaCoz(dizi, havuz, ph) {
  if (!dizi) return null;
  const yeni = !!(ph && ph.length);
  return { type: 'MultiPolygon', coordinates: dizi.map(p => typeof p !== 'number' ? p : (!yeni ? havuz[p] : ph[p].map(h => havuz[h]))) };
}
const app = fs.readFileSync(P + 'js/app.js', 'utf8');
const mB = app.match(/var BITIS\s*=\s*gunIdx\("([^"]+)"\)/);
if (mB && mB[1] !== '1923-10-29') throw new Error('BITIS farklı: ' + mB[1]);

const out = process.argv[2];
const gun = gunIdx(process.argv[3] || '1923-09-01');
const KUTU = [-170, -60, -30, 75];
const feats = [];
for (const s of window.DEVLET_HARITA) {
  const p = s.dnm.find(p => aktifAralik(gunIdx(p.f), gunIdx(p.t), gun));
  if (!p) continue;
  const g = parcaCoz(p.g, window.DEVLET_PARCALAR, window.DEVLET_PARCA_HALKA);
  const polys = g.coordinates.filter(poly => poly && poly[0] && poly[0].some(([x, y]) => x >= KUTU[0] && x <= KUTU[2] && y >= KUTU[1] && y <= KUTU[3]));
  if (!polys.length) continue;
  feats.push({ type: 'Feature', properties: { id: s.id, renk: s.renk }, geometry: { type: 'MultiPolygon', coordinates: polys } });
}
// künye id → harita anahtarı (D048)
const idh = {};
for (const d of (window.DEVLETLER || [])) if (d.harita) idh[d.id] = d.harita;
fs.writeFileSync(out, JSON.stringify({ type: 'FeatureCollection', idharita: idh, features: feats }));
console.log('gövde:', feats.length, '·', feats.map(f => f.properties.id).join(' '));

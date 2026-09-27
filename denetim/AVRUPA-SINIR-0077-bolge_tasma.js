// node bolge_tasma.js GUN[,GUN] [bbox lon0,lat0,lon1,lat1] [D-dosya D-id]
// O gun gorunen her BOLGELER poligonunu 0.02 derece izgarayla orneklendirir; ornegin
// o gun hangi govdede oldugu sorulur. OSMANLI/OSM-TABI disi govde = TASMA.
// D hat verilirse tasan orneklerin hatta uzakligi (km) olculur.
const fs = require('fs'), vm = require('vm');
process.chdir('C:/atlas');
const GUNLER = process.argv[2].split(',');
const BB = process.argv[3] ? process.argv[3].split(',').map(Number) : null;
const DF = process.argv[4], DID = process.argv[5];
const sb = { window: {}, console }; vm.createContext(sb);
for (const f of ['data/bolgeler.js', 'data/devletler_harita.js', 'data/donemler.js']) vm.runInContext(fs.readFileSync(f, 'utf8'), sb);
let HAT = null;
if (DF) { vm.runInContext(fs.readFileSync(DF, 'utf8'), sb);
  for (const k of Object.keys(sb.window)) if (Array.isArray(sb.window[k])) for (const r of sb.window[k]) if (r && r.id === DID) HAT = r.hat; }
const W = sb.window;
function coz(g, havuz, halka) { const polys = [];
  for (const p of (g || [])) { if (typeof p !== 'number') { polys.push([p]); continue; }
    const ph = halka[p]; if (!ph) continue; polys.push(ph.map(h => havuz[h]).filter(Boolean)); }
  return polys; }
function inRing(x, y, r) { let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c; } return c; }
function inPoly(x, y, p) { if (!p.length || !inRing(x, y, p[0])) return false;
  for (let k = 1; k < p.length; k++) if (inRing(x, y, p[k])) return false; return true; }
function bbox(polys) { let a = [1e9, 1e9, -1e9, -1e9];
  for (const p of polys) for (const q of p[0]) { a[0] = Math.min(a[0], q[0]); a[1] = Math.min(a[1], q[1]); a[2] = Math.max(a[2], q[0]); a[3] = Math.max(a[3], q[1]); } return a; }
function segKm(px, py, ax, ay, bx, by) { const m = Math.cos(py * Math.PI / 180);
  const X = (px - ax) * m, Y = py - ay, Dx = (bx - ax) * m, Dy = by - ay; const L = Dx * Dx + Dy * Dy;
  let t = L ? (X * Dx + Y * Dy) / L : 0; t = Math.max(0, Math.min(1, t));
  return 111.32 * Math.hypot(X - t * Dx, Y - t * Dy); }
function hatKm(x, y) { if (!HAT) return null; let best = 1e9;
  const parts = Array.isArray(HAT[0][0]) ? HAT : [HAT];
  for (const p of parts) for (let i = 1; i < p.length; i++) best = Math.min(best, segKm(x, y, p[i-1][0], p[i-1][1], p[i][0], p[i][1]));
  return best; }
const ADIM = 0.02;
for (const GUN of GUNLER) {
  const feats = [];
  for (const d of (W.DEVLET_HARITA || [])) for (const dn of (d.dnm || [])) {
    if (!((dn.f || '0000') <= GUN && GUN <= (dn.t || '9999'))) continue;
    const ps = coz(dn.g, W.DEVLET_PARCALAR, W.DEVLET_PARCA_HALKA || []); feats.push([d.id, ps, bbox(ps)]); }
  for (const d of (W.DONEMLER || [])) { if (!((d.f || '0000') <= GUN && GUN <= (d.t || '9999'))) continue;
    for (const [a, k] of [['o', 'OSMANLI'], ['v', 'OSM-TABI']]) { const ps = coz(d[a], W.PARCALAR, W.PARCA_HALKA || []); if (ps.length) feats.push([k, ps, bbox(ps)]); } }
  function govde(x, y) { const h = [];
    for (const [id, ps, b] of feats) { if (x < b[0] || x > b[2] || y < b[1] || y > b[3]) continue; if (ps.some(p => inPoly(x, y, p))) h.push(id); }
    return h; }
  let toplam = 0, tasan = 0, bolgeSay = 0, tasanBolge = 0;
  const satirlar = [];
  for (const B of W.BOLGELER) {
    if (!(B.f <= GUN && GUN < B.t)) continue;
    const polys = B.g; const bb = bbox(polys);
    if (BB && (bb[2] < BB[0] || bb[0] > BB[2] || bb[3] < BB[1] || bb[1] > BB[3])) continue;
    bolgeSay++;
    let n = 0, dis = 0, maxKm = 0; const kime = {};
    for (let x = bb[0] + ADIM / 2; x < bb[2]; x += ADIM) for (let y = bb[1] + ADIM / 2; y < bb[3]; y += ADIM) {
      if (!polys.some(p => inPoly(x, y, p))) continue;
      n++; const h = govde(x, y);
      if (!h.length) continue; // deniz/delik: sayma
      if (h.includes('OSMANLI') || h.includes('OSM-TABI')) continue;
      dis++; kime[h[0]] = (kime[h[0]] || 0) + 1;
      const k = hatKm(x, y); if (k !== null) maxKm = Math.max(maxKm, k);
    }
    toplam += n; tasan += dis;
    if (dis) { tasanBolge++;
      const km2 = dis * (ADIM * 111.32) * (ADIM * 111.32 * Math.cos(B.lat * Math.PI / 180));
      satirlar.push(`${GUN}  ${B.ad.padEnd(26)} k${B.k}  ornek ${String(n).padStart(5)}  yabanci ${String(dis).padStart(4)} (%${(100 * dis / n).toFixed(1)}) ~${Math.round(km2)} km2  ${JSON.stringify(kime)}` + (HAT ? `  hatta max ${maxKm.toFixed(1)} km` : '')); }
  }
  satirlar.sort(); for (const s of satirlar) console.log(s);
  console.log(`${GUN}  OZET: gorunen bolge ${bolgeSay} · tasan ${tasanBolge} · ornek ${toplam} · yabanci govdede ${tasan} (%${(100 * tasan / Math.max(1, toplam)).toFixed(2)})`);
}

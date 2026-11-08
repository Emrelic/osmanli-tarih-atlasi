// F-ADIMI-1108 — üretilmiş haritada (çözülmüş data/donemler*.js + devletler_harita*.js)
// bir noktanın SAHİBİNİ gün gün sorar. Salt okur. Kullanım:
//   node --max-old-space-size=10000 f_harita.js <kok> <girdi.json> <cikti.json>
// girdi: [{id, lat, lon, sorgu:[{ust:"YYYY-MM-DD", ofs:[-1,0,...]}]}]
// çıktı: {id: {"YYYY-MM-DD|ofs": ["osmanli","devlet-id",...]}, ...}  + _meta
const fs = require('fs');
const kok = process.argv[2], girdiYol = process.argv[3], ciktiYol = process.argv[4];
global.window = {};
for (const f of ['donemler_ust.js', 'donemler.js',
  'devlet_harita_ust.js', 'devletler_harita.js']) {
  const yol = kok + '/data/' + f;
  if (!fs.existsSync(yol)) { console.error('YOK:', f); continue; }
  try { (new Function('window', fs.readFileSync(yol, 'utf8')))(window); }
  catch (e) { console.error('HATA', f, e.message); }
}
const DON = window.DONEMLER, PAR = window.PARCALAR, PH = window.PARCA_HALKA;
const DH = window.DEVLET_HARITA, DP = window.DEVLET_PARCALAR, DPH = window.DEVLET_PARCA_HALKA;
if (!DON || !PAR || !PH || !DH || !DP || !DPH) { console.error('EKSIK VERI'); process.exit(3); }

// proleptik Gregoryen gün sayısı (negatif yıl dahil)
function gunNo(s) {
  const m = /^(-?\d+)-(\d\d)-(\d\d)$/.exec(s); if (!m) return null;
  let y = +m[1]; const mo = +m[2], d = +m[3];
  y -= mo <= 2 ? 1 : 0;
  const era = Math.floor(y / 400), yoe = y - era * 400;
  const doy = Math.floor((153 * (mo + (mo > 2 ? -3 : 9)) + 2) / 5) + d - 1;
  const doe = yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy;
  return era * 146097 + doe - 719468;
}
function gunTarih(z) {
  z += 719468; const era = Math.floor(z / 146097), doe = z - era * 146097;
  const yoe = Math.floor((doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365);
  let y = yoe + era * 400; const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100));
  const mp = Math.floor((5 * doy + 2) / 153), d = doy - Math.floor((153 * mp + 2) / 5) + 1, m = mp + (mp < 10 ? 3 : -9);
  y += m <= 2 ? 1 : 0;
  return (y < 0 ? '-' : '') + String(Math.abs(y)).padStart(4, '0') + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
}

// halka (ring) önbelleği: bbox
const bbOn = new Map();
function bbox(r) {
  let b = bbOn.get(r); if (b) return b;
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  for (const p of r) { if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0]; if (p[1] < y0) y0 = p[1]; if (p[1] > y1) y1 = p[1]; }
  b = [x0, y0, x1, y1]; bbOn.set(r, b); return b;
}
function pipRing(r, x, y) {
  let ic = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) ic = !ic;
  }
  return ic;
}
// poligon = [dış, delik...]
function pipPoly(halkalar, x, y, tol) {
  const d = halkalar[0]; if (!d) return false;
  const b = bbox(d);
  if (x < b[0] - tol || x > b[2] + tol || y < b[1] - tol || y > b[3] + tol) return false;
  if (!tol) {
    if (!pipRing(d, x, y)) return false;
    for (let k = 1; k < halkalar.length; k++) if (halkalar[k] && pipRing(halkalar[k], x, y)) return false;
    return true;
  }
  // tolerans: nokta bir kenara tol derece içindeyse yakın say
  for (let i = 0, j = d.length - 1; i < d.length; j = i++) {
    const ax = d[j][0], ay = d[j][1], bx = d[i][0], by = d[i][1];
    const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    let t = l2 ? ((x - ax) * dx + (y - ay) * dy) / l2 : 0; t = Math.max(0, Math.min(1, t));
    const px = ax + t * dx - x, py = ay + t * dy - y;
    if (px * px + py * py <= tol * tol) return true;
  }
  return false;
}
function govdeIcinde(parcaIdx, havuz, halkaTab, x, y, tol) {
  if (!parcaIdx) return false;
  for (const p of parcaIdx) {
    let poly;
    if (typeof p !== 'number') poly = p;
    else { const ph = halkaTab[p]; if (!ph) continue; poly = ph.map(h => havuz[h]).filter(Boolean); }
    if (poly.length && pipPoly(poly, x, y, tol)) return true;
  }
  return false;
}

// dönem ve devlet dilimlerini gün numarasına çevir
const donG = DON.map(d => ({ d, a: gunNo(d.f), b: gunNo(d.t) }));
const devG = [];
for (const s of DH) for (const p of (s.dnm || [])) devG.push({ id: s.id, p, a: gunNo(p.f), b: gunNo(p.t) });
const TOL = 0.04; // ≈ 4 km (derece) — yakınlık yedeği

function sahip(x, y, z, tol) {
  const s = new Set();
  for (const e of donG) {
    if (z >= e.a && z < e.b) {
      if (govdeIcinde(e.d.o, PAR, PH, x, y, tol)) s.add('osmanli');
      if (govdeIcinde(e.d.v, PAR, PH, x, y, tol)) s.add('osmanli-tabi');
      for (const h of (e.d.h || [])) if (govdeIcinde(h.g, PAR, PH, x, y, tol)) s.add('h:' + (h.renk || ''));
    }
  }
  for (const e of devG) {
    if (z >= e.a && z < e.b && govdeIcinde(e.p.g, DP, DPH, x, y, tol)) s.add(e.id);
  }
  return [...s].sort();
}
const G = JSON.parse(fs.readFileSync(girdiYol, 'utf8'));
const out = { _meta: { donem: DON.length, devlet_dilim: devG.length } };
for (const n of G) {
  const r = {};
  for (const q of n.sorgu) {
    const z0 = gunNo(q.ust); if (z0 === null) continue;
    for (const o of q.ofs) {
      const z = z0 + o, k = q.ust + '|' + o;
      let a = sahip(n.lon, n.lat, z, 0), yak = false;
      if (!a.length) { a = sahip(n.lon, n.lat, z, TOL); yak = a.length > 0; }
      r[k] = { s: a, yak: yak, gun: gunTarih(z) };
    }
  }
  out[n.id] = r;
}
fs.writeFileSync(ciktiYol, JSON.stringify(out));
console.log('tamam', G.length);

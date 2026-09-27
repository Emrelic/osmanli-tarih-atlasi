// node hat_kiyas.js dosyaA idA dosyaB idB  -> A'nin noktalarinin B'ye uzakligi (km) dagilimi
const fs = require('fs'), vm = require('vm');
process.chdir('C:/atlas');
const [FA, IA, FB, IB] = process.argv.slice(2);
function bul(f, id) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb);
  for (const k of Object.keys(sb.window)) if (Array.isArray(sb.window[k])) for (const r of sb.window[k]) if (r && r.id === id) return r; }
const A = bul(FA, IA), B = bul(FB, IB);
const parts = h => Array.isArray(h[0][0]) ? h : [h];
function seg(px, py, ax, ay, bx, by) { const m = Math.cos(py * Math.PI / 180);
  const X = (px - ax) * m, Y = py - ay, Dx = (bx - ax) * m, Dy = by - ay, L = Dx * Dx + Dy * Dy;
  let t = L ? (X * Dx + Y * Dy) / L : 0; t = Math.max(0, Math.min(1, t)); return 111.32 * Math.hypot(X - t * Dx, Y - t * Dy); }
const d = [];
for (const p of parts(A.hat)) for (const [x, y] of p) { let b = 1e9;
  for (const q of parts(B.hat)) for (let i = 1; i < q.length; i++) b = Math.min(b, seg(x, y, q[i-1][0], q[i-1][1], q[i][0], q[i][1])); d.push(b); }
d.sort((a, b) => a - b);
const q = f => d[Math.floor(f * (d.length - 1))].toFixed(1);
console.log(`${IA} (${A.f}→${A.t}, ${d.length} nokta) → ${IB} (${B.f}→${B.t}): ≤1km %${(100 * d.filter(x => x <= 1).length / d.length).toFixed(0)} · ≤5km %${(100 * d.filter(x => x <= 5).length / d.length).toFixed(0)} · medyan ${q(.5)} · p90 ${q(.9)} · max ${q(1)} km`);

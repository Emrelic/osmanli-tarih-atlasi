// PAKET-A6C · devirler.js taralı alanlarının İÇİNDEKİ yerleşimler (salt okunur)
// Kullanım: node denetim/ARAC-A6C-DEVIR-0913.js "<antlaşma adı parçası>" [yaricap_km]
// Her alıcı parçası için: içindeki noktalar + savaş başı ve antlaşma günündeki sahip.
// Ayrıca parça içinde nokta yoksa en yakın nokta (petek emilmesi).
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const gp = fs.readFileSync(path.join(KOK, 'arac/girdi.py'), 'utf8');
const bas = gp.indexOf('GIRDI_DOSYALARI = ['), son = gp.indexOf('\n]', bas);
const DOS = [...gp.slice(bas, son).split('\n').map(l => l.replace(/#.*$/, '')).join('\n').matchAll(/"([^"]+\.js)"/g)].map(m => m[1]);
let Y = [];
for (const f of DOS) { const w = {}; global.window = w; try { eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const y of w[k]) if (y && y.ad && y.lat != null) Y.push(y); }
global.window = {}; eval(fs.readFileSync(path.join(KOK, 'data/devirler.js'), 'utf8'));
const D = window.DEVIRLER;
const sahip = (y, g) => { if (y.kur && y.kur > g) return '(yok)';
  for (const p of (y.isg || [])) if (p.f <= g && g < p.t) return 'ISG:' + p.d;
  for (const p of (y.d || [])) if (p.f <= g && g < p.t) return 'OSMANLI';
  for (const p of (y.v || [])) if (p.f <= g && g < p.t) return 'tabi:' + (p.kid || p.k || '');
  for (const p of (y.s || [])) if (p.f <= g && g < p.t) return p.d; return '(sahipsiz)'; };
const pip = (x, yv, ring) => { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, yi] = ring[i], [xj, yj] = ring[j];
  if ((yi > yv) !== (yj > yv) && x < (xj - xi) * (yv - yi) / (yj - yi) + xi) c = !c; } return c; };
const inPoly = (x, yv, poly) => pip(x, yv, poly[0]) && !poly.slice(1).some(h => pip(x, yv, h));
const km = (a, b, c, d) => { const R = 6371, r = Math.PI / 180; const x = (d - b) * r * Math.cos((a + c) / 2 * r), yy = (c - a) * r; return R * Math.sqrt(x * x + yy * yy); };
const hedef = process.argv[2];
for (const a of D) { if (!a.ad.includes(hedef)) continue;
  console.log('==', a.ad, a.t, 'savas_basi', a.savas_basi);
  for (const r of a.alicilar) { console.log(' alici', r.id, 'parca', r.parca.length);
    r.parca.forEach((poly, i) => { let mnx = 999, mxx = -999, mny = 999, mxy = -999, n = 0, sx = 0, sy = 0;
      for (const [x, yv] of poly[0]) { mnx = Math.min(mnx, x); mxx = Math.max(mxx, x); mny = Math.min(mny, yv); mxy = Math.max(mxy, yv); sx += x; sy += yv; n++; }
      const ic = Y.filter(y => inPoly(y.lon, y.lat, poly));
      console.log(`  parca ${i} bbox lon ${mnx}-${mxx} lat ${mny}-${mxy} · merkez ${(sy / n).toFixed(3)},${(sx / n).toFixed(3)} · icindeki nokta ${ic.length}`);
      for (const y of ic) console.log(`     ${y.ad.padEnd(28)} ${y.lat},${y.lon}  @savas_basi=${sahip(y, a.savas_basi)}  @antlasma=${sahip(y, a.t)}`);
      if (!ic.length) { const cx = sx / n, cy = sy / n; const en = Y.map(y => [km(cy, cx, y.lat, y.lon), y]).sort((p, q) => p[0] - q[0]).slice(0, 3);
        for (const [dk, y] of en) console.log(`     (en yakin) ${y.ad.padEnd(22)} ${dk.toFixed(1)} km  @savas_basi=${sahip(y, a.savas_basi)}  @antlasma=${sahip(y, a.t)}`); }
    }); } }

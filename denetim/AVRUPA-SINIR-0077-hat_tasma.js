// node hat_tasma.js GUN DOSYA ID[,ID...]
// Ham govde (motor ciktisi, tarayici yaslamasi ONCESI) ile D hattini karsilastirir.
// Hattin her 3 km'sinde, iki yana 1..40 km dik ornek. Her yan icin: o yanin "dogru"
// sahibi (taraf) disinda, KARSI tarafin govdesine ait ornek = TASMA. Tasma derinligi = hattan km.
// Tasan ornegi en yakin (o gun karsi tarafa ait) yerlesime baglar -> hangi sehrin peteği.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
process.chdir('C:/atlas');
const [GUN, DF, IDS] = process.argv.slice(2);
const sb = { window: {}, console }; vm.createContext(sb);
for (const f of ['data/devletler.js', 'data/devletler_harita.js', 'data/donemler.js', DF]) vm.runInContext(fs.readFileSync(f, 'utf8'), sb);
const W = sb.window;
const harita = {}; for (const d of W.DEVLETLER) if (d && d.id) harita[d.id] = d.harita || d.id;
const kayitlar = {}; for (const k of Object.keys(W)) if (Array.isArray(W[k])) for (const r of W[k]) if (r && r.id) kayitlar[r.id] = r;
// yerlesimler: girdi.py ile JSON'a dok (sahip hesabi icin)
const YJ = 'C:/atlas/denetim/AVRUPA-SINIR-0077-yer.json';
if (!fs.existsSync(YJ)) cp.execSync('py C:/atlas/denetim/AVRUPA-SINIR-0077-yer_dok.py');
const Y = JSON.parse(fs.readFileSync(YJ, 'utf8'));
function sahip(y, g) {
  for (const p of y.isg || []) if (p.f <= g && g < p.t) return p.d;
  for (const p of y.s || []) if (p.f <= g && g < p.t) return p.d;
  for (const p of y.v || []) if (p.f <= g && g < p.t) return 'OSM-TABI';
  for (const p of y.d || []) if (p.f <= g && g < p.t) return 'OSMANLI';
  return null; }
function coz(g, havuz, halka) { const polys = [];
  for (const p of (g || [])) { if (typeof p !== 'number') { polys.push([p]); continue; }
    const ph = halka[p]; if (!ph) continue; polys.push(ph.map(h => havuz[h]).filter(Boolean)); } return polys; }
function inRing(x, y, r) { let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c; } return c; }
function inPoly(x, y, p) { if (!p.length || !inRing(x, y, p[0])) return false;
  for (let k = 1; k < p.length; k++) if (inRing(x, y, p[k])) return false; return true; }
function bbox(ps) { const a = [1e9, 1e9, -1e9, -1e9]; for (const p of ps) for (const q of p[0]) { a[0] = Math.min(a[0], q[0]); a[1] = Math.min(a[1], q[1]); a[2] = Math.max(a[2], q[0]); a[3] = Math.max(a[3], q[1]); } return a; }
const feats = [];
for (const d of W.DEVLET_HARITA) for (const dn of d.dnm || []) { if (!((dn.f || '0') <= GUN && GUN < (dn.t || '9'))) continue;
  const ps = coz(dn.g, W.DEVLET_PARCALAR, W.DEVLET_PARCA_HALKA || []); if (ps.length) feats.push([d.id, ps, bbox(ps)]); }
for (const d of W.DONEMLER) { if (!((d.f || '0') <= GUN && GUN < (d.t || '9'))) continue;
  for (const [a, k] of [['o', 'OSMANLI'], ['v', 'OSM-TABI']]) { const ps = coz(d[a], W.PARCALAR, W.PARCA_HALKA || []); if (ps.length) feats.push([k, ps, bbox(ps)]); } }
function govde(x, y) { for (const [id, ps, b] of feats) { if (x < b[0] || x > b[2] || y < b[1] || y > b[3]) continue; if (ps.some(p => inPoly(x, y, p))) return id; } return null; }
function kimlik(t) { if (t === 'osmanli') return 'OSMANLI'; return t; }
// govde id'si kunye id'si de olabilir harita anahtari da (romanya-kralligi vs romanya)
function esit(g, t) { if (!g) return false; return g === t || g === harita[t] || harita[g] === t || (!!harita[g] && harita[g] === harita[t]); }
for (const ID of IDS.split(',')) {
  const r = kayitlar[ID]; if (!r) { console.log(ID, 'YOK'); continue; }
  if (!process.env.ZORLA && !(r.f <= GUN && GUN < r.t)) { console.log(`${ID}: ${GUN} penceresi DISINDA (${r.f}→${r.t})`); continue; }
  const hat = r.hat; if (!hat || !hat.length) { console.log(ID, 'hatsiz'); continue; }
  const parts = Array.isArray(hat[0][0]) ? hat : [hat];
  const sol = r.sol_taraf, sag = r.taraflar.find(t => t !== sol);
  const SOL = kimlik(sol), SAG = kimlik(sag);
  const stat = { sol: { n: 0, dogru: 0, karsi: 0, diger: {}, bos: 0, derin: [] }, sag: { n: 0, dogru: 0, karsi: 0, diger: {}, bos: 0, derin: [] } };
  const sehir = {};
  let km = 0;
  for (const p of parts) for (let i = 1; i < p.length; i++) {
    const [ax, ay] = p[i - 1], [bx, by] = p[i]; const m = Math.cos(ay * Math.PI / 180);
    const L = 111.32 * Math.hypot((bx - ax) * m, by - ay); if (L < 1e-6) continue;
    const ux = (bx - ax) * m / (L / 111.32), uy = (by - ay) / (L / 111.32); // birim (km-olcekli)
    for (let s = (km % 3 === 0 ? 0 : 3 - km % 3); s < L; s += 3) {
      const cx = ax + (bx - ax) * s / L, cy = ay + (by - ay) * s / L;
      for (const [yan, isr, sahibi, karsi] of [['sol', 1, SOL, SAG], ['sag', -1, SAG, SOL]]) {
        // sol normal: (-uy, ux)
        let enDerin = 0, surer = true;
        for (let d = 1; d <= 40; d += (d < 10 ? 1 : 2)) {
          const nx = cx + isr * (-uy) * d / 111.32 / m, ny = cy + isr * ux * d / 111.32;
          const g = govde(nx, ny);
          if (d === 5) { const S = stat[yan]; S.n++; if (!g) S.bos++; else if (esit(g, sahibi)) S.dogru++; else if (esit(g, karsi)) S.karsi++; else S.diger[g] = (S.diger[g] || 0) + 1; }
          if (!esit(g, karsi)) surer = false;
          if ((surer && d > 25) || (!surer && d >= 5)) break;
          if (surer && esit(g, karsi)) { enDerin = d;
            // en yakin karsi-sahipli yerlesim
            let best = null, bk = 1e9;
            for (const y of Y) { if (Math.abs(y.lat - ny) > 0.8 || Math.abs(y.lon - nx) > 1.2) continue;
              const o = sahip(y, GUN); if (o === null) continue; if (!esit(kimlik(o), karsi)) continue;
              const k = 111.32 * Math.hypot((y.lon - nx) * m, y.lat - ny); if (k < bk) { bk = k; best = y.ad; } }
            if (best) { const e = sehir[best] || (sehir[best] = { yan, max: 0, n: 0 }); e.n++; e.max = Math.max(e.max, d); }
          }
        }
        if (enDerin) stat[yan].derin.push(enDerin);
      }
    }
    km += L;
  }
  const med = a => { if (!a.length) return 0; const b = [...a].sort((x, y) => x - y); return b[b.length >> 1]; };
  console.log(`\n${ID} · ${r.sinif} · ${r.f}→${r.t} · ${Math.round(km)} km · sol=${sol}(${SOL}) sag=${sag}(${SAG}) · GUN ${GUN}`);
  for (const yan of ['sol', 'sag']) { const S = stat[yan]; const h = S.n - S.bos;
    console.log(`  ${yan} yan (5 km): ${S.n} ornek · dogru ${S.dogru} (%${(100 * S.dogru / Math.max(1, h)).toFixed(0)}) · KARSI ${S.karsi} · diger ${JSON.stringify(S.diger)} · bos ${S.bos}`);
    console.log(`     karsi govde bu yana tasiyor: ${S.derin.length} kesitte · medyan ${med(S.derin)} km · max ${Math.max(0, ...S.derin)} km`); }
  const L = Object.entries(sehir).sort((a, b) => b[1].max - a[1].max);
  console.log(`  tasan yerlesim petegi: ${L.length} · ` + L.slice(0, 15).map(([a, e]) => `${a}(${e.yan}:${e.max}km)`).join(' · '));
}

// PAKET-A6B — salt okuma ölçümü: Hotin · Özi · Çehrin ve komşuları, verilen günlerde sahiplik
// Evren: arac/girdi.py GIRDI_DOSYALARI (py yardımcısından) — başka dosya okunmaz.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const KOK = path.resolve(__dirname, '..');
const liste = JSON.parse(cp.execSync('py "' + path.join(__dirname, 'ARAC-A6B-GIRDI-0913.py') + '"').toString());
const Y = [];
for (const f of liste) {
  global.window = {};
  const p = path.join(KOK, 'data', f);
  if (!fs.existsSync(p)) { console.log('YOK', f); continue; }
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { console.log('EVAL HATA', f, e.message); continue; }
  for (const k of Object.keys(window)) {
    const a = window[k];
    if (Array.isArray(a)) for (const r of a) if (r && r.ad && typeof r.lat === 'number') { r._dosya = f; Y.push(r); }
  }
}
console.log('dosya', liste.length, 'kayit', Y.length);
const iR = (arr, g) => (arr || []).find(p => p.f <= g && g < p.t);
function sahip(y, g) {
  if (y.kur && y.kur > g) return '(kurulmamis)';
  let out = [];
  const d = iR(y.d, g); if (d) out.push('OSMANLI' + (d.y ? '/' + d.y : ''));
  const v = iR(y.v, g); if (v) out.push('tabi:' + (v.kid || v.k));
  const s = iR(y.s, g); if (s) out.push(s.d);
  const i = iR(y.isg, g); if (i) out.push('isg:' + (i.d || JSON.stringify(i)));
  return out.length ? out.join('+') : 'SAHIPSIZ';
}
const km = (a, b, c, d) => { const R = 6371, r = x => x * Math.PI / 180; const dl = r(c - a), dn = r(d - b); const h = Math.sin(dl / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
function komsu(adRe, yaricap, gunler) {
  const m = Y.filter(y => adRe.test(y.ad));
  for (const c of m) {
    console.log('\n=== ' + c.ad + ' [' + c._dosya + '] ' + c.lat + ',' + c.lon);
    console.log(JSON.stringify({ d: c.d, v: c.v, s: c.s, isg: c.isg, m: c.m, kaynak: c.kaynak }));
    const n = Y.map(y => [km(c.lat, c.lon, y.lat, y.lon), y]).filter(x => x[0] <= yaricap).sort((a, b) => a[0] - b[0]);
    console.log('km'.padStart(5) + '  ' + 'ad'.padEnd(34) + gunler.map(g => g.padEnd(26)).join(''));
    for (const [k, y] of n) console.log(k.toFixed(0).padStart(5) + '  ' + y.ad.slice(0, 33).padEnd(34) + gunler.map(g => sahip(y, g).slice(0, 25).padEnd(26)).join(''));
  }
}
komsu(/^Hotin/, 260, ['1769-09-01', '1769-10-01', '1771-06-01', '1774-08-01']);
komsu(/^Özi/, 330, ['1737-07-01', '1737-08-01', '1739-10-01', '1788-06-01', '1789-01-01']);
komsu(/^Çehrin/, 260, ['1308-01-01', '1400-01-01', '1500-01-01', '1569-08-01', '1650-01-01', '1737-07-01']);

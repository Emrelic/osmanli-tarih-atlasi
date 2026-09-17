// D4-ORTADOGU · NOKTA-ARABISTAN — data/yerlesimler_nokta_ortadogu_0917.js doğrulayıcısı (SALT OKUMA).
// Sorular: ① dönemler sıralı/çakışmasız/sıfır uzunluksuz mu ② 1281-01-01 → 1923-10-29 (ya da kur) boşluksuz mu
//          (bos:"devletsiz" beyanlı kayıtta boşluk BİLDİRİLİR ama hata sayılmaz) ③ s: anahtarları renkler.py'de var mı
//          ④ mevcut canlı noktalara (girdi.py) 3 km'den yakın mı ⑤ kaynak alanı dolu mu
// Kullanım: node denetim/ARAC-D4-NOKTA-DOGRULA-0917.js
const fs = require('fs'), path = require('path'), cp = require('child_process');
const kok = path.join(__dirname, '..');
const HEDEF = 'yerlesimler_nokta_ortadogu_0917.js';
const liste = JSON.parse(cp.execSync('py -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;print(json.dumps([str(f) for f in girdi.GIRDI_DOSYALARI]))"', { cwd: kok }).toString());
global.window = {};
const mevcut = [];
for (const f of liste) {
  if (f === HEDEF) continue;
  const once = new Set(Object.keys(window));
  try { eval(fs.readFileSync(path.join(kok, 'data', f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(window)) if (!once.has(k) && Array.isArray(window[k]))
    for (const y of window[k]) if (y && y.ad && typeof y.lat === 'number') mevcut.push({ ...y, _f: f });
}
global.window = {};
eval(fs.readFileSync(path.join(kok, 'data', HEDEF), 'utf8'));
const Y = window.YERLESIMLER_NOKTA_ORTADOGU_0917;
const renkMetin = fs.readFileSync(path.join(kok, 'arac', 'renkler.py'), 'utf8');
{ const w = global.window; global.window = {}; eval(fs.readFileSync(path.join(kok, 'data', 'devletler.js'), 'utf8'));
  const D = Object.values(window).find(v => Array.isArray(v) && v[0] && v[0].id && v[0].ad);
  global.HARITA = Object.fromEntries(D.map(d => [d.id, d.harita || d.id])); global.KUNYE = Object.fromEntries(D.map(d => [d.id, d])); global.window = w; }
// renk künyenin HARİTA anahtarına bakar (CLAUDE.md §3.5.0); anahtar künye değilse kendisi
const renk = { includes: s => { const k = s.slice(1, -1); return renkMetin.includes('"' + (HARITA[k] || k) + '"'); } };
const km = (a, b, c, d) => { const r = Math.PI / 180; return 6371 * Math.hypot((d - b) * r * Math.cos((a + c) / 2 * r), (c - a) * r); };
let hata = 0, uyari = 0;
const H = m => { hata++; console.log('   ✗', m); }, U = m => { uyari++; console.log('   ⚠', m); };
console.log(`mevcut canlı nokta ${mevcut.length} (${liste.length - 1} dosya) · yeni kayıt ${Y.length}`);
for (const y of Y) {
  console.log(`● ${y.ad} (${y.lat}, ${y.lon})`);
  if (!y.kaynak) H('kaynak alanı yok');
  const P = [];
  for (const [alan, L] of [['s', y.s], ['d', y.d], ['v', y.v]]) for (const p of (L || [])) {
    if (!(p.f < p.t)) H(`${alan} ters/sıfır dönem ${p.f}→${p.t}`);
    if (alan === 's' && !renk.includes('"' + p.d + '"')) H(`renk yok: ${p.d}`);
    P.push({ ...p, alan });
  }
  P.sort((a, b) => a.f.localeCompare(b.f));
  let imlec = y.kur && y.kur > '1281-01-01' ? y.kur : '1281-01-01';
  for (const p of P) {
    if (p.f < imlec) H(`çakışma: ${p.alan}:${p.d || p.k || 'OSM'} ${p.f} < ${imlec}`);
    else if (p.f > imlec) (y.bos ? U : H)(`boşluk ${imlec} → ${p.f}${y.bos ? ' (bos beyanlı)' : ''}`);
    if (p.t > imlec) imlec = p.t;
  }
  if (imlec < '1923-10-29') (y.bos ? U : H)(`son boşluk ${imlec} → 1923-10-29`);
  const yakin = mevcut.map(m => ({ ad: m.ad, f: m._f, km: km(y.lat, y.lon, m.lat, m.lon) })).sort((a, b) => a.km - b.km).slice(0, 3);
  console.log('   en yakın:', yakin.map(z => `${z.ad} ${z.km.toFixed(1)} km`).join(' · '));
  if (yakin[0] && yakin[0].km < 3) H(`3 km'den yakın mevcut nokta: ${yakin[0].ad} (${yakin[0].f})`);
}
for (let i = 0; i < Y.length; i++) for (let j = i + 1; j < Y.length; j++)
  if (km(Y[i].lat, Y[i].lon, Y[j].lat, Y[j].lon) < 3) H(`dosya içi mükerrer: ${Y[i].ad} ~ ${Y[j].ad}`);
console.log(`SONUÇ: ${Y.length} kayıt · hata ${hata} · uyarı ${uyari}`);
process.exit(hata ? 1 : 0);

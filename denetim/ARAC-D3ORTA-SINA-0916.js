// D3-AVRUPA-ORTA — üretilen veri için sınama.
// ① node ile yükleniyor mu ② D/fiili çizgi noktası D-YOK kutusuna düşüyor mu (kendi dosyası + öteki D dosyaları)
// ③ sol_taraf taraflardan biri mi ④ f ≤ t ve tarafların künye penceresi içinde mi
// Kullanım: node denetim/ARAC-D3ORTA-SINA-0916.js
const fs = require('fs');
global.window = {};
const dosyalar = fs.readdirSync('data').filter(f => /^d_sinirlar.*\.js$/.test(f));
for (const f of dosyalar) eval(fs.readFileSync('data/' + f, 'utf8'));
eval(fs.readFileSync('data/devletler.js', 'utf8'));
const K = Object.fromEntries(window.DEVLETLER.map(d => [d.id, d]));
const BEN = window.D_SINIRLAR_AVRUPA_ORTA;
if (!BEN) { console.log('🔴 window.D_SINIRLAR_AVRUPA_ORTA yok'); process.exit(1); }
const HEPSI = [];
for (const k of Object.keys(window)) if (/^D_SINIRLAR/.test(k)) for (const r of window[k]) HEPSI.push([k, r]);
console.log('D dosyaları:', dosyalar.join(' · '), '| kayıt toplamı', HEPSI.length, '| bende', BEN.length);
const ic = (p, b) => b && p[0] >= b[0] && p[0] <= b[2] && p[1] >= b[1] && p[1] <= b[3];
let hata = 0;
// ② kendi çizgilerim × herkesin D-YOK kutusu ; herkesin çizgisi × benim kutularım
for (const [ka, a] of HEPSI) {
  if (!a.hat) continue;
  for (const [kb, b] of HEPSI) {
    if (b.kategori !== 'D-YOK') continue;
    if (ka !== 'D_SINIRLAR_AVRUPA_ORTA' && kb !== 'D_SINIRLAR_AVRUPA_ORTA') continue;
    // zaman: aralıklar kesişmiyorsa çakışma yok (G2 kutuları 1914-18, G1/1923 çizgileri sonrası)
    const P = s => (s || '').replace(/^(\d{1,3})-/, (m, y) => y.padStart(4, '0') + '-');
    if (!(P(a.f) < P(b.t) && P(b.f) < P(a.t))) continue;
    const n = a.hat.filter(p => ic(p, b.kutu)).length;
    if (n) { console.log(`  ⚠️ ${ka}:${a.id} (${a.kategori}) ${n}/${a.hat.length} nokta → ${kb}:${b.id} kutusunda`); if (ka !== kb) hata++; }
  }
}
for (const r of BEN) {
  if (r.sol_taraf && !r.taraflar.includes(r.sol_taraf)) { console.log('  🔴 sol_taraf taraf değil', r.id); hata++; }
  if (r.hat && !r.sol_taraf) console.log('  ⚠️ sol_taraf yok', r.id);
  if (!(r.f <= r.t)) { console.log('  🔴 f>t', r.id); hata++; }
  for (const t of r.taraflar) {
    const d = K[t];
    if (!d) { console.log('  🟡 künye yok', r.id, t); continue; }
    // 🔴 üç haneli yıl tuzağı ("1920" < "962"): yılı 4 haneye doldur
    const pad = s => (s || '').replace(/^(\d{1,3})-/, (m, y) => y.padStart(4, '0') + '-');
    if (pad(r.f) < pad(d.f)) console.log(`  🟡 ${r.id}: f ${r.f} < ${t}.f ${d.f}`);
    if (pad(r.t) > pad(d.t || '9999')) console.log(`  🟡 ${r.id}: t ${r.t} > ${t}.t ${d.t}`);
  }
}
console.log(hata ? `🔴 ${hata} sorun (başka dosyayla çakışma dahil)` : '✓ başka dosyayla çakışma / taraf hatası yok');

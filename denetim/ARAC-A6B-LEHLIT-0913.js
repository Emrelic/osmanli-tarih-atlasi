// PAKET-A6B — salt okuma: lehistan · polonya-erken · litvanya-buyuk-dukalik kimliklerinin veride kullanımı
// Soru: 1569-07-01 öncesi `lehistan`, sonrası `litvanya-buyuk-dukalik`/`polonya-erken` var mı; künye pencereleri aşılıyor mu.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const KOK = path.resolve(__dirname, '..');
const liste = JSON.parse(cp.execSync('py "' + path.join(__dirname, 'ARAC-A6B-GIRDI-0913.py') + '"').toString());
const Y = [];
for (const f of liste) {
  global.window = {};
  try { eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(window)) { const a = window[k]; if (Array.isArray(a)) for (const r of a) if (r && r.ad && typeof r.lat === 'number') { r._dosya = f; Y.push(r); } }
}
const KUNYE = { 'polonya-erken': ['1320-01-20', '1569-07-01'], 'litvanya-buyuk-dukalik': ['1253-07-06', '1569-07-01'], 'lehistan': ['1569-07-01', '1795-10-24'] };
const pad = s => s.length < 10 ? s.padStart(10, '0') : s;
for (const id of Object.keys(KUNYE)) {
  const [kf, kt] = KUNYE[id];
  let n = 0, once = [], sonra = [], nokta = new Set();
  for (const y of Y) for (const p of (y.s || [])) {
    if (p.d !== id) continue;
    n++; nokta.add(y.ad);
    if (pad(p.f) < kf) once.push([y.ad, y._dosya, p.f, p.t]);
    if (pad(p.t) > kt) sonra.push([y.ad, y._dosya, p.f, p.t]);
  }
  console.log('\n### ' + id + ' künye ' + kf + '→' + kt + ' · dönem ' + n + ' · nokta ' + nokta.size);
  console.log('  künye ÖNCESİ başlayan: ' + once.length);
  const grup = {};
  for (const r of once) (grup[r[2] + '→' + r[3]] = grup[r[2] + '→' + r[3]] || []).push(r[0]);
  for (const [k, v] of Object.entries(grup)) console.log('    ' + k + '  (' + v.length + ') ' + v.slice(0, 12).join(' · '));
  console.log('  künye SONRASI biten: ' + sonra.length);
  const g2 = {};
  for (const r of sonra) (g2[r[2] + '→' + r[3]] = g2[r[2] + '→' + r[3]] || []).push(r[0]);
  for (const [k, v] of Object.entries(g2)) console.log('    ' + k + '  (' + v.length + ') ' + v.slice(0, 12).join(' · '));
}
// 1308-01-01 kesitinde bu üç kimliğin noktaları (ekran görüntüsü günü)
for (const g of ['1308-01-01', '1400-01-01', '1500-01-01']) {
  const c = {};
  for (const y of Y) for (const p of (y.s || [])) if (KUNYE[p.d] && p.f <= g && g < p.t) (c[p.d] = c[p.d] || []).push(y.ad);
  console.log('\n' + g + ' kesiti:');
  for (const [k, v] of Object.entries(c)) console.log('  ' + k + ' (' + v.length + '): ' + v.join(' · '));
}

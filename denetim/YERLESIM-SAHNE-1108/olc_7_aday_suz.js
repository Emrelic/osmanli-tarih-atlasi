// ÖLÇÜM 7 — aday yer adlarını atlasa karşı süz: ad (parantez içi + / , ; ayrık) eşleşmesi = zaten VAR.
// Kullanım: node olc_7_aday_suz.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const idx = new Map();               // norm ad -> [yerlesim]
function ekle(s, y) { const k = o.norm(s); if (k.length < 3) return; (idx.get(k) || idx.set(k, []).get(k)).push(y); }
for (const y of Y) {
  ekle(y.ad.split(' (')[0], y);
  const p = /\(([^)]+)\)/.exec(y.ad);
  if (p) for (const a of p[1].split(/[\/,;]/)) ekle(a, y);
  ekle(y.ad, y);
}
// Alias VERİDEN (data/ad_esanlam.js, ALIAS-VERI 10 Kasım 2026): atlas adı -> eşanlamlar; eşanlam da o yerleşimi bulur.
// 4. argüman: sözlük dosyası yolu ('-' = sözlüğü kullanma, taşıma-öncesi taban çizgisi).
const SOZ = process.argv[4] === '-' ? null : (process.argv[4] || path.join(__dirname, '..', '..', 'data', 'ad_esanlam.js'));
let aliasEklenen = 0;
if (SOZ) {
  const w = o.yukleYol ? o.yukleYol(SOZ) : (() => { const sb = { window: {} }; require('vm').runInNewContext(fs.readFileSync(SOZ, 'utf8'), sb); return sb.window; })();
  const es = (w.AD_ESANLAM && w.AD_ESANLAM.esanlam) || {};
  const adIdx = new Map(Y.map(y => [y.ad, y]));
  for (const [atlasAd, liste] of Object.entries(es)) {
    const y = adIdx.get(atlasAd); if (!y) continue;
    for (const e of liste) { ekle(e, y); aliasEklenen++; }
  }
}
const rows = fs.readFileSync(path.join(CIK, 'm1_EKSIK_YERLESIM_ADAY.tsv'), 'utf8').split('\n').slice(1).filter(Boolean).map(l => l.split('\t'));
const var_ = [], yok = [];
for (const r of rows) {
  const h = idx.get(o.norm(r[0]));
  if (h) var_.push([...r.slice(0, 3), h[0].ad, h[0].lat.toFixed(2) + ',' + h[0].lon.toFixed(2)].join('\t'));
  else yok.push(r.slice(0, 4).join('\t'));
}
fs.writeFileSync(path.join(CIK, 'm7_aday_zaten_var.tsv'), 'aday\tmadde\tilk\tatlas_ad\tkonum\n' + var_.join('\n'));
fs.writeFileSync(path.join(CIK, 'm7_aday_gercekten_yok.tsv'), 'aday\tmadde\tilk\tdosyalar\n' + yok.join('\n'));
console.log(JSON.stringify({ aliasEklenen, aday: rows.length, zatenVar: var_.length, gercektenYok: yok.length }));

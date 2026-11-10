// ÖLÇÜM 9 — GERÇEK konumsuz maddeler: uygulamanın konum çözümü (olayKonumu + odak_yer) sonunda haritada NOKTASI olmayanlar.
// Çözüm kuralı js/app.js ile aynı: yer_kon → yer_id (birebir ad ya da ' (' öncesi) ; odak_yer adları aynı kuralla.
// Kullanım: node olc_9_konumsuz.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y, M } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const tam = new Map(), pre = new Map();
for (const y of Y) { if (!tam.has(y.ad)) tam.set(y.ad, y); const p = y.ad.split(' (')[0]; if (!pre.has(p)) pre.set(p, y); }
const coz = a => tam.get(a) || pre.get(a) || null;
const ix = new Map();   // norm -> set(yerlesim) — öneri için
for (const y of Y) { for (const s of [y.ad, y.ad.split(' (')[0], ...((/\(([^)]+)\)/.exec(y.ad) || [, ''])[1].split(/[\/,;]/))]) { const k = o.norm(s); if (k.length >= 3) (ix.get(k) || ix.set(k, new Set()).get(k)).add(y); } }
const out = { madde: M.length, konumlu_yer_kon: 0, konumlu_yer_id: 0, konumlu_odak_yer: 0, konumsuz: 0, yer_id_cozulmez: 0, odak_yer_cozulmez_madde: 0, odak_yer_ad_cozulmez: {} };
const kon = [];
for (const m of M) {
  const oy = m.odak_yer ? [].concat(m.odak_yer) : [];
  const kk = m.yer_kon && m.yer_kon.length === 2;
  const yi = m.yer_id && coz(m.yer_id);
  if (m.yer_id && !yi) out.yer_id_cozulmez++;
  const oyOk = oy.filter(a => coz(a)), oyYok = oy.filter(a => !coz(a));
  if (oyYok.length) { out.odak_yer_cozulmez_madde++; for (const a of oyYok) out.odak_yer_ad_cozulmez[a] = (out.odak_yer_ad_cozulmez[a] || 0) + 1; }
  if (kk) out.konumlu_yer_kon++; else if (yi) out.konumlu_yer_id++; else if (oyOk.length) out.konumlu_odak_yer++;
  else if (!m.odak_kimlik) {
    out.konumsuz++;
    const h = m.yer ? ix.get(o.norm(m.yer)) : null;
    kon.push([m._dosya, m.t, (m.b || '').slice(0, 70), m.yer || '', m.yer_id || '', oy.join('|'), h && h.size === 1 ? [...h][0].ad : (h ? 'BELIRSIZ' : '')].join('\t'));
  }
}
out.odak_yer_ad_cozulmez_top = Object.entries(out.odak_yer_ad_cozulmez).sort((a, b) => b[1] - a[1]).slice(0, 40);
const tum = out.odak_yer_ad_cozulmez; delete out.odak_yer_ad_cozulmez; out.odak_yer_ad_cozulmez_benzersiz = Object.keys(tum).length;
fs.writeFileSync(path.join(CIK, 'm9_konumsuz_maddeler.tsv'), 'dosya\tt\tbaslik\tyer\tyer_id\todak_yer\tatlas_onerisi\n' + kon.join('\n'));
fs.writeFileSync(path.join(CIK, 'm9_odak_yer_cozulmez.tsv'), 'ad\tmadde\n' + Object.entries(tum).sort((a, b) => b[1] - a[1]).map(x => x.join('\t')).join('\n'));
fs.writeFileSync(path.join(CIK, 'm9_ozet.json'), JSON.stringify(out, null, 1));
console.log(JSON.stringify(out, null, 1));

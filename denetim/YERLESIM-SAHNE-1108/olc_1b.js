// ÖLÇÜM 1b — yer_id'siz, yer metni dolu maddelerin madde-düzeyi dağılımı + aday eşikleri.
// Kullanım: node olc_1b.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y, M } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const tam = new Set(), pre = new Set(), nrm = new Set();
for (const y of Y) { tam.add(y.ad); const p = y.ad.split(' (')[0]; pre.add(p); nrm.add(o.norm(p)); const ic = /\(([^)]+)\)/.exec(y.ad); if (ic) for (const s of ic[1].split(/[\/,;]/)) nrm.add(o.norm(s)); }
const var_ = (a) => tam.has(a) || pre.has(a) || nrm.has(o.norm(a));
let n = 0, hepsiVar = 0, kismen = 0, hicVar = 0, jetonsuz = 0;
const donem = { 'ilk madde<1281': 0, '1281-1923': 0, '>1923': 0 };
const hicVarMadde = [];
for (const m of M) {
  if (m.yer_id || !m.yer) continue;
  n++;
  const jet = String(m.yer).split(/\s*(?:,|;|\/|\bve\b| ile | - | – )\s*/).map(p => p.replace(/\(.*?\)/g, '').replace(/^(?:ve|ile)\s+/i, '').replace(/[.]+$/, '').trim()).filter(a => a.length >= 3 && a.length <= 40);
  if (!jet.length) { jetonsuz++; continue; }
  const v = jet.filter(var_).length;
  if (v === jet.length) hepsiVar++; else if (v > 0) kismen++; else { hicVar++; if (hicVarMadde.length < 400) hicVarMadde.push([m.t, m.yer.slice(0, 60), m._dosya].join('\t')); }
  const k = o.gk(m.t); donem[k < 12810101 ? 'ilk madde<1281' : k <= 19231029 ? '1281-1923' : '>1923']++;
}
const ozet = { yerIdsizYerli: n, jetonsuz, hepsiAtlasta: hepsiVar, kismenAtlasta: kismen, hicbiriAtlastaDegil: hicVar, donem };
fs.writeFileSync(path.join(CIK, 'm1b_ozet.json'), JSON.stringify(ozet, null, 1));
fs.writeFileSync(path.join(CIK, 'm1b_hic_atlasta_yok_maddeler.tsv'), 't\tyer\tdosya\n' + hicVarMadde.join('\n'));
// aday eşik dağılımı
const ad = fs.readFileSync(path.join(CIK, 'm1_EKSIK_YERLESIM_ADAY.tsv'), 'utf8').split('\n').slice(1).map(l => l.split('\t'));
ozet.adayEsik = { 'n>=2': ad.filter(r => +r[1] >= 2).length, 'n>=3': ad.filter(r => +r[1] >= 3).length, 'n>=5': ad.filter(r => +r[1] >= 5).length, 'toplam(1500 ile kesik)': ad.length };
console.log(JSON.stringify(ozet, null, 1));

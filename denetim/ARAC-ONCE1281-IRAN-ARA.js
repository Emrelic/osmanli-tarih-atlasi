// node denetim/ARAC-ONCE1281-IRAN-ARA.js <parça> [<parça> …]  → havuzda norm-alt-dizgi eşleşmeleri (ad · lat · lon)
const fs = require('fs'), path = require('path');
const H = JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-HAVUZ.json'), 'utf8'));
const TR = { 'İ': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ğ': 'g', 'ğ': 'g', 'Ü': 'u', 'ü': 'u', 'Ö': 'o', 'ö': 'o', 'Ç': 'c', 'ç': 'c', 'Â': 'a', 'â': 'a', 'Î': 'i', 'î': 'i', 'Û': 'u', 'û': 'u' };
const norm = s => String(s || '').replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû]/g, c => TR[c]).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase();
for (const q of process.argv.slice(2)) {
  const n = norm(q);
  const r = H.filter(h => norm(h.ad).includes(n)).slice(0, 8).map(h => `${h.ad} (${h.lat},${h.lon})`);
  console.log(q.padEnd(14), r.length ? r.join(' | ') : '—');
}

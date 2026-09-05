// EMSAL — Kibris · Misir · Tunus · Korfez: atlas himayeyi NASIL yaziyor?
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const ARANAN = ['Lefkoşa', 'Kıbrıs', 'Magosa', 'Kahire', 'İskenderiye', 'Tunus',
                'Kuveyt', 'Doha', 'Manama', 'Aden', 'Maskat', 'Bahreyn'];
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) continue;
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) {
      if (!y || !y.ad || !ARANAN.some(x => y.ad.indexOf(x) >= 0)) continue;
      console.log('=== ' + y.ad + '   [' + rel + ']');
      for (const alan of ['d', 's', 'v', 'isg']) {
        for (const per of (y[alan] || [])) {
          if ((per.t || '') < '1750') continue;   // yalniz gec donem
          console.log('    ' + alan.padEnd(4) + (per.f || '?') + ' → ' + (per.t || '?')
                      + (per.d ? '  ' + per.d : '  (kimliksiz)'));
        }
      }
    }
  }
}

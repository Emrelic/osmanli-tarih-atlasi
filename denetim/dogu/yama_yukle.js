// node denetim/dogu/yama_yukle.js <cikti.json>
// Tüm denetim/dogu/*/yama_*.js dosyalarını yükler, tek JSON'a döker. Biçimler: {ad, s_onek:[…]} ya da {ad, s:[…]}.
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..');
const cikti = [];
for (const k of fs.readdirSync(__dirname)) {
  const dir = path.join(__dirname, k);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) {
    if (/^yama.*\.json$/.test(f)) {
      for (const y of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))) cikti.push({ kume: k, dosya: f, ad: y.ad, s: y.s_onek || y.s || [], devam_gerekli: y.devam_gerekli || null });
      continue;
    }
    if (!/^yama.*\.js$/.test(f)) continue;
    const sb = { window: {} }; vm.createContext(sb);
    try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb); } catch (e) { console.error('YUKLENEMEDI', k + '/' + f, e.message.slice(0, 80)); process.exitCode = 2; continue; }
    for (const g of Object.keys(sb.window)) for (const y of sb.window[g] || []) {
      cikti.push({ kume: k, dosya: f, ad: y.ad, s: y.s_onek || y.s || [], devam_gerekli: y.devam_gerekli || null });
    }
  }
}
fs.writeFileSync(process.argv[2], JSON.stringify(cikti));
console.log('yama kaydi', cikti.length);

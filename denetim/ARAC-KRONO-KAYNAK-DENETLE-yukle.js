// KRONO-KAYNAK-DENETLE — evreni node vm ile DEĞERLENDİREREK okur, JSON basar.
// Kullanım: node denetim/ARAC-KRONO-KAYNAK-DENETLE-yukle.js <çıktı.json>
const fs = require('fs'), vm = require('vm'), path = require('path');
const kok = path.join(__dirname, '..');
const dosyalar = fs.readdirSync(path.join(kok, 'data')).filter(f =>
  f === 'kronoloji_cok_1923_1945.js' || /^kronoloji_cok_once1281_.*\.js$/.test(f) ||
  /^kronoloji_cok_ince_.*\.js$/.test(f)).sort();
const cikti = { dosyalar: {}, maddeler: [], hatalar: [] };
for (const f of dosyalar) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(path.join(kok, 'data', f), 'utf8'), ctx, { filename: f }); }
  catch (e) { cikti.hatalar.push({ dosya: f, hata: String(e) }); continue; }
  const adlar = Object.keys(ctx.window);
  let n = 0;
  for (const ad of adlar) {
    const dizi = ctx.window[ad];
    if (!Array.isArray(dizi)) continue;
    dizi.forEach((m, i) => { cikti.maddeler.push({ dosya: f, degisken: ad, sira: i, ...m }); n++; });
  }
  cikti.dosyalar[f] = { degiskenler: adlar, madde: n };
}
fs.writeFileSync(process.argv[2], JSON.stringify(cikti));
console.log(JSON.stringify({ dosya: dosyalar.length, madde: cikti.maddeler.length, hata: cikti.hatalar }, null, 0));
for (const [f, v] of Object.entries(cikti.dosyalar)) console.log(f, v.madde, v.degiskenler.join(','));

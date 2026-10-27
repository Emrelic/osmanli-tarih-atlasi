// node _zincir.js "Ad1" "Ad2" ... : mevcut yerlesimlerin ilk 3 s: dilimini gosterir
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..', '..');
const sb = { window: {} }; vm.createContext(sb);
const dir = path.join(KOK, 'data');
for (const f of fs.readdirSync(dir)) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb, { filename: f }); } catch (e) { }
}
const adlar = process.argv.slice(2);
for (const k of Object.keys(sb.window)) {
  if (!/^YERLESIMLER/.test(k)) continue;
  for (const y of sb.window[k]) {
    if (adlar.some(a => (y.ad || '').includes(a))) {
      console.log(k, y.ad, y.lat, y.lon, 'kur=', y.kur);
      for (const p of (y.s || []).slice(0, 4)) console.log('   ', p.f, p.t, p.d);
    }
  }
}

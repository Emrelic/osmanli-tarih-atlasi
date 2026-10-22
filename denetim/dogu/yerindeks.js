// node yerindeks.js <worktree> <cikti.json> : mevcut butun yerlesimlerin hafif dizini (mukerrer taramasi icin)
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2];
const sb = { window: {} }; vm.createContext(sb);
const girdi = fs.readFileSync(path.join(root, 'denetim/dogu/_log/girdi.txt'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
for (const f of girdi) {
  const p = path.join(root, 'data', f);
  if (!fs.existsSync(p)) continue;
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), sb, { filename: p }); } catch (e) { console.error('YUKLENEMEDI', f, e.message.slice(0, 80)); }
}
const out = [];
for (const k of Object.keys(sb.window)) {
  if (!/^YERLESIMLER/.test(k) || !Array.isArray(sb.window[k])) continue;
  for (const y of sb.window[k]) {
    if (typeof y.lat !== 'number') continue;
    const ds = new Set();
    for (const kol of ['s', 'd', 'v', 'isg']) for (const p of (y[kol] || [])) if (p.d) ds.add(p.d);
    out.push({ ad: y.ad, lat: y.lat, lon: y.lon, k: y.k, kur: y.kur || null, tur: y.tur, devletler: [...ds], dosya: k });
  }
}
fs.writeFileSync(process.argv[3], JSON.stringify(out));
console.log('yerlesim', out.length);

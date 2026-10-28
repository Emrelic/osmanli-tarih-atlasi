// node _idler.js [regex]  -> gecerli devlet kimlikleri (devletler.js + ms1 + kunye_yeni) f/t
const vm = require('vm'), fs = require('fs');
const R = 'denetim/dogu/';
const all = {};
function yukle(f, kaynak) {
  const sb = { window: {} }; vm.createContext(sb);
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), sb) } catch (e) { return }
  for (const k in sb.window) { const a = sb.window[k]; if (!Array.isArray(a)) continue; for (const r of a) if (r && r.id && r.f !== undefined && !all[r.id]) all[r.id] = { f: r.f, t: r.t, ad: r.ad, k: kaynak, bolge: r.bolge }; }
}
yukle('data/devletler.js', 'devletler');
yukle('denetim/_gecici_devletler_ms1.js', 'ms1');
for (const d of fs.readdirSync(R)) { const p = R + d + '/kunye_yeni.js'; if (fs.existsSync(p)) yukle(p, d); }
module.exports = all;
if (require.main === module) {
  const re = new RegExp(process.argv[2] || '.', 'i');
  for (const id in all) if (re.test(id) || re.test(all[id].ad || '')) console.log(id, all[id].f, all[id].t, all[id].k, '|', all[id].ad);
}

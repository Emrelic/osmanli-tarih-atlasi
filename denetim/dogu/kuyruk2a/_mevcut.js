const vm = require('vm'), fs = require('fs');
const bos = JSON.parse(fs.readFileSync('denetim/dogu/kuyruk_bosluk2.json', 'utf8'));
const hedef = new Set(bos.map(b => b.ad));
const out = {};
for (const f of fs.readdirSync('data')) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  const sb = { window: {} }; vm.createContext(sb);
  try { vm.runInContext(fs.readFileSync('data/' + f, 'utf8'), sb) } catch (e) { continue }
  for (const k in sb.window) { const a = sb.window[k]; if (!Array.isArray(a)) continue; for (const r of a) if (r && hedef.has(r.ad)) { (out[r.ad] = out[r.ad] || []).push({ f, kur: r.kur, s: r.s }); } }
}
fs.writeFileSync('denetim/dogu/kuyruk2a/_mevcut.json', JSON.stringify(out, null, 1));
for (const a in out) for (const r of out[a]) console.log(a, r.f, 'kur=' + r.kur, (r.s || []).slice(0, 3).map(p => p.d + ' ' + p.f + '>' + p.t).join(' | '));

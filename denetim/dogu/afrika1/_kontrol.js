const vm = require('vm'), fs = require('fs');
const sb = { window: {} }; vm.createContext(sb);
for (const f of fs.readdirSync('data').filter(f => /^yerlesimler.*\.js$/.test(f))) { try { vm.runInContext(fs.readFileSync('data/' + f, 'utf8'), sb); } catch (e) { } }
const mevcut = {};
for (const k of Object.keys(sb.window)) { const a = sb.window[k]; if (!Array.isArray(a)) continue; for (const y of a) if (y && y.ad && y.s && y.s.length) mevcut[y.ad] = y; }
const w2 = { window: {} }; vm.createContext(w2);
vm.runInContext(fs.readFileSync('denetim/dogu/afrika1/yama_afrika1.js', 'utf8'), w2);
for (const y of w2.window.YAMA_DOGU_AFRIKA1) {
  const m = mevcut[y.ad];
  if (!m) { console.log('YOK mevcut:', y.ad); continue; }
  const son = y.s_onek[y.s_onek.length - 1];
  console.log(y.ad.padEnd(18), 'önek', y.s_onek[0].f, '→', son.t, '| mevcut ilk', m.s[0].f, m.s[0].d, son.t === m.s[0].f ? 'EŞİT' : 'FARKLI!');
}
const w3 = { window: {} }; vm.createContext(w3);
for (const f of ['kunye_yeni', 'kronoloji_cok_dogu_afrika1', 'kronoloji_sinir_dogu_afrika1', 'yerlesimler_dogu_afrika1', 'yama_afrika1']) {
  const s = fs.readFileSync('denetim/dogu/afrika1/' + f + '.js', 'utf8');
  const bad = s.match(/"(-?\d{3,4}-\d{2})"/g);
  if (bad) console.log('YYYY-MM:', f, bad.slice(0, 5));
}

// SINIR-STATU-0075 — d_sinirlar*.js kayitlarini (hat koordinatlari HARIC) okunur bicimde basar.
// Kullanim: node denetim/ARAC-SINIR-STATU-0075-KAYIT.js <id> [<id> ...]   (proje kokunden)
const fs = require('fs'), vm = require('vm'), path = require('path');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
for (const f of fs.readdirSync('data').filter(f => /^d_sinirlar.*\.js$/.test(f))) {
  try { vm.runInContext(fs.readFileSync(path.join('data', f), 'utf8'), sandbox); } catch (e) { console.error('HATA ' + f + ' ' + e.message); }
}
const ids = new Set(process.argv.slice(2));
for (const [ad, val] of Object.entries(sandbox.window)) {
  if (!Array.isArray(val)) continue;
  for (const k of val) {
    if (!ids.has(k.id)) continue;
    const o = Object.assign({}, k);
    const n = Array.isArray(o.hat) ? o.hat.length : 0;
    const ilk = n ? o.hat[0] : null, son = n ? o.hat[n - 1] : null;
    delete o.hat;
    o.__hat_nokta = n; o.__hat_ilk = ilk; o.__hat_son = son; o.__kova = ad;
    for (const [a, v] of Object.entries(o)) {
      const s = typeof v === 'string' ? v : JSON.stringify(v);
      console.log('  ' + k.id + ' · ' + a + ': ' + (s.length > 420 ? s.slice(0, 420) + '…' : s));
    }
    console.log('  ------');
  }
}

// D4-ORTADOGU · NOKTA-ARABISTAN — yeni nokta dosyasının kırılma günlerini çekirdek (olaylar*) ve kuyruk (kronoloji*)
// maddeleriyle ±30 gün penceresinde eşler (Değişmez 2 / 2s öngörüsü). SALT OKUMA.
const fs = require('fs'), path = require('path');
const kok = path.join(__dirname, '..', 'data');
const gun = s => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);
const oku = desen => { global.window = {}; for (const f of fs.readdirSync(kok).filter(f => desen.test(f))) { try { eval(fs.readFileSync(path.join(kok, f), 'utf8')); } catch (e) {} }
  const M = []; for (const k of Object.keys(window)) if (Array.isArray(window[k])) for (const o of window[k]) if (o && o.t && o.b && /^\d{4}-\d{2}-\d{2}$/.test(o.t)) M.push(o); return M; };
const CEK = oku(/^olaylar.*\.js$/), KUY = oku(/^kronoloji.*\.js$/);
global.window = {};
eval(fs.readFileSync(path.join(kok, 'yerlesimler_nokta_ortadogu_0917.js'), 'utf8'));
const K = {};
for (const y of window.YERLESIMLER_NOKTA_ORTADOGU_0917)
  for (const p of [...(y.s || []), ...(y.d || []), ...(y.v || [])]) for (const g of [p.f, p.t])
    if (g > '1281-01-01' && g < '1923-10-29') (K[g] = K[g] || new Set()).add(y.ad);
let acik = 0;
for (const g of Object.keys(K).sort()) {
  const yakin = L => L.map(o => ({ o, d: Math.abs(gun(o.t) - gun(g)) })).sort((a, b) => a.d - b.d)[0];
  const c = yakin(CEK), k = yakin(KUY);
  const ok = c && c.d <= 30;
  if (!ok) acik++;
  console.log(`${g} ${ok ? '✓' : '✗ AÇIK'}  [${[...K[g]].join(', ')}]  çekirdek: ${c ? c.d + 'g ' + c.o.b.slice(0, 55) : '-'}  | kuyruk: ${k ? k.d + 'g ' + k.o.b.slice(0, 45) : '-'}`);
}
console.log(`kırılma günü ${Object.keys(K).length} · çekirdekte ±30 gün maddesiz ${acik}`);

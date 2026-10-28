const vm = require('vm'), fs = require('fs');
const w = { window: {} }; vm.createContext(w);
for (const f of ['kunye_yeni', 'kronoloji_cok_dogu_afrika1', 'kronoloji_sinir_dogu_afrika1', 'yerlesimler_dogu_afrika1', 'yama_afrika1']) vm.runInContext(fs.readFileSync('denetim/dogu/afrika1/' + f + '.js', 'utf8'), w);
const W = w.window;
const say = {};
for (const m of [...W.KRONOLOJI_COK_DOGU_AFRIKA1, ...W.KRONOLOJI_SINIR_DOGU_AFRIKA1]) for (const t of m.taraflar) say[t] = (say[t] || 0) + 1;
const kun = W.DOGU_KUNYE_AFRIKA1.map(k => k.id);
const kronK = {};
for (const k of W.DOGU_KUNYE_AFRIKA1) kronK[k.id] = k.kronoloji.length;
console.log('taraf başına (anlatı+sınır, ortak sayılı):', JSON.stringify(say));
console.log('künye iskeleti:', JSON.stringify(kronK));
let bos = 0, tum = 0;
for (const y of W.YAMA_DOGU_AFRIKA1) for (const s of y.s_onek) { tum++; if (s.d === '__BOSLUK__') bos++; }
for (const y of W.YERLESIMLER_DOGU_AFRIKA1) for (const s of y.s) { tum++; if (s.d === '__BOSLUK__') bos++; }
console.log('toplam s dilimi', tum, 'bosluk', bos);
const t = {};
for (const m of W.KRONOLOJI_COK_DOGU_AFRIKA1) t[m.kesinlik] = (t[m.kesinlik] || 0) + 1;
console.log('anlatı kesinlik', JSON.stringify(t));
const t2 = {};
for (const m of W.KRONOLOJI_SINIR_DOGU_AFRIKA1) t2[m.kesinlik] = (t2[m.kesinlik] || 0) + 1;
console.log('sınır kesinlik', JSON.stringify(t2));
const yer = {};
for (const m of W.KRONOLOJI_SINIR_DOGU_AFRIKA1) yer[m.yer_id] = (yer[m.yer_id] || 0) + 1;
console.log('sınır yer başına', JSON.stringify(yer));

const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..', '..');
const r = fs.readFileSync(path.join(KOK, 'arac/renkler.py'), 'utf8');
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(path.join(__dirname, 'yama_kuyruk2b.js'), 'utf8'), sb);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'yerlesimler_dogu_kuyruk2b.js'), 'utf8'), sb);
const ids = new Set();
for (const y of sb.window.YAMA_DOGU_KUYRUK2B) for (const s of y.s_onek) ids.add(s.d);
for (const y of sb.window.YERLESIMLER_DOGU_KUYRUK2B) for (const s of y.s) ids.add(s.d);
const eksik = [];
for (const id of ids) { if (id === '__BOSLUK__') continue; if (!new RegExp('[\'"]' + id.replace(/-/g, '\\-') + '[\'"]').test(r)) eksik.push(id); }
console.log('kullanılan kimlik', ids.size, 'BOYALAR\'da bulunmayan (metin araması):', eksik.join(', '));

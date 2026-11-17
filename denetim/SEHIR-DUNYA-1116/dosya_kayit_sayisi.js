// origin/main sehir_tarihce_*.js dosya -> kayıt sayısı (vm ile çalıştırır, alan sırasından bağımsız). SALT OKUR.
var cp = require('child_process'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..');
var ds = cp.execSync('git -C "' + KOK + '" ls-tree -r --name-only origin/main data', { encoding: 'utf8' }).split('\n').filter(function (s) { return /^data\/sehir_tarihce_.*\.js$/.test(s); });
var top = 0;
ds.forEach(function (d) {
  var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } });
  try { vm.runInContext(cp.execSync('git -C "' + KOK + '" show origin/main:' + d, { encoding: 'utf8', maxBuffer: 80 * 1024 * 1024 }), ctx, { timeout: 120000 }); } catch (e) {}
  var n = 0; Object.keys(win).forEach(function (k) { if (Array.isArray(win[k])) n += win[k].filter(function (c) { return c && c.id; }).length; });
  top += n; console.log(d.replace('data/', '') + '\t' + n);
});
console.log('TOPLAM\t' + top + '\t(' + ds.length + ' dosya, origin/main)');

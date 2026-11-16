// Çelişki adaylarının iki tarafını (şehir olayı + kronoloji maddesi) kaynak/kesinlik alanlarıyla yan yana döker. SALT OKUR.
// Kullanım: node celiski_dump.js <dosya_filtre_regex> [baslangic] [adet]   (varsayılan: LAB dosyaları)
var fs = require('fs'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..', '..'); var DATA = path.join(KOK, 'data') + path.sep;
function run(f) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(fs.readFileSync(DATA + f, 'utf8'), ctx, { timeout: 120000 }); } catch (e) {} return win; }
var re = new RegExp(process.argv[2] || 'sehir_tarihce_(hint|orta_asya|afrika_gb)'), bas = +(process.argv[3] || 0), adet = +(process.argv[4] || 999);
var tsv = fs.readFileSync(path.join(__dirname, 'f3_celiski.tsv'), 'utf8').split('\n').slice(1).filter(Boolean).map(function (l) { return l.split('\t'); }).filter(function (c) { return re.test(c[0]) && (!process.env.ONCELIK || (+c[8] >= 3 && Math.abs(+c[7]) <= 400)); });
var sehirler = {}; var kr = {};
tsv.forEach(function (c) { if (!sehirler[c[0]]) { var w = run(c[0]); Object.keys(w).forEach(function (k) { (w[k] || []).forEach && w[k].forEach(function (s) { if (s && s.id) sehirler[c[0] + '|' + s.id] = s; }); }); sehirler[c[0]] = 1; } });
var kd = fs.readdirSync(DATA).filter(function (f) { return /^(olaylar|kronoloji)\w*\.js$/.test(f) && !/parca/.test(f); });
var K = []; kd.forEach(function (f) { var w = run(f); Object.keys(w).forEach(function (k) { if (Array.isArray(w[k])) w[k].forEach(function (m) { if (m && m.t && m.b) K.push([f, m]); }); }); });
tsv.slice(bas, bas + adet).forEach(function (c, i) {
  var s = sehirler[c[0] + '|' + c[1]]; var e = s ? s.olay.filter(function (o) { return o.t === c[3]; })[0] : null;
  var km = K.filter(function (p) { return p[1].t === c[5] && String(p[1].b).slice(0, 70) === c[6].slice(0, 70); })[0];
  function kisa(v) { return String(v == null ? '' : v).replace(/\s+/g, ' ').slice(0, 260); }
  console.log('#' + (bas + i) + ' ' + c[1] + ' | fark ' + c[7] + ' gün | ortak ' + c[8]);
  console.log('  ŞEHİR  t=' + c[3] + ' gun=' + kisa(e && e.gun) + ' kes=' + kisa(e && e.kesinlik) + ' b=' + kisa(c[4]));
  console.log('         kaynak=' + kisa(e && e.kaynak).slice(0, 170) + ' | tanik=' + kisa(e && e.tanik).slice(0, 100));
  console.log('  KRON   t=' + c[5] + ' gun=' + kisa(km && km[1].gun) + ' kes=' + kisa(km && JSON.stringify(km[1].kesinlik)) + ' dosya=' + (km && km[0]) + ' b=' + kisa(c[6]));
  console.log('         kaynak=' + kisa(km && km[1].kaynak).slice(0, 170) + ' | ic_not_gun=' + kisa(km && km[1].ic_not_gun).slice(0, 120));
});

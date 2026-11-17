// MUKERRER-SEHIR.tsv: LAB şehir kayıtları (data/sehir_tarihce_{hint,orta_asya,afrika_gb}.js) ile origin/main'deki ÖTEKİ dosyalardaki aynı şehir kayıtları (3 km içinde) — kanonik = en dolu kayıt. SALT OKUR.
var cp = require('child_process'), vm = require('vm'), path = require('path'), fs = require('fs');
var KOK = path.resolve(__dirname, '..', '..', '..'), D = __dirname;
function git(a) { return cp.execSync('git -C "' + KOK + '" ' + a, { encoding: 'utf8', maxBuffer: 90 * 1024 * 1024 }); }
function calistir(kod) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(kod, ctx, { timeout: 120000 }); } catch (e) {} var o = []; Object.keys(win).forEach(function (k) { if (Array.isArray(win[k])) win[k].forEach(function (c) { if (c && c.id) o.push(c); }); }); return o; }
function km(a, b, c, d) { var p = Math.PI / 180, x = Math.sin((c - a) * p / 2) ** 2 + Math.cos(a * p) * Math.cos(c * p) * Math.sin((d - b) * p / 2) ** 2; return 12742 * Math.asin(Math.sqrt(x)); }
var BENIM = ['sehir_tarihce_hint.js', 'sehir_tarihce_orta_asya.js', 'sehir_tarihce_afrika_gb.js'];
var benim = []; BENIM.forEach(function (f) { calistir(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')).forEach(function (c) { c._dosya = f; benim.push(c); }); });
var oteki = [];
git('ls-tree -r --name-only origin/main data').split('\n').filter(function (s) { return /^data\/sehir_tarihce_.*\.js$/.test(s); }).forEach(function (d) { var f = d.replace('data/', ''); if (BENIM.indexOf(f) >= 0) return; calistir(git('show origin/main:' + d)).forEach(function (c) { c._dosya = f; oteki.push(c); }); });
function skor(c) { var o = c.olay || [], t = 0; if (c.ilk && c.ilk.tanik) t++; o.forEach(function (x) { if (x.tanik) t++; }); return { olay: o.length, sahip: (c.sahip || []).length, tanikli: t, ad: (c.adlar || []).length, ic: (c.ic_not || '').length, puan: o.length + 2 * (c.sahip || []).length + 3 * t }; }
var satir = ['lab_id\tlab_dosya\toteki_id\toteki_dosya\tkm\tlab_puan(olay/sahip/tanikli)\toteki_puan(olay/sahip/tanikli)\tkanonik\tneden\tad_kaynak_lab'];
var say = 0, lab_kan = 0, oteki_kan = 0;
benim.forEach(function (b) {
  oteki.forEach(function (o) {
    if (b.lat == null || o.lat == null) return;
    var d = km(+b.lat, +b.lon, +o.lat, +o.lon); if (d > 3) return;
    var sb = skor(b), so = skor(o); var kan = sb.puan > so.puan ? 'LAB' : (so.puan > sb.puan ? 'OTEKI' : 'LAB(esit)');
    if (kan.indexOf('LAB') === 0) lab_kan++; else oteki_kan++;
    say++;
    satir.push([b.id, b._dosya, o.id, o._dosya, d.toFixed(1), sb.puan + ' (' + sb.olay + '/' + sb.sahip + '/' + sb.tanikli + ')', so.puan + ' (' + so.olay + '/' + so.sahip + '/' + so.tanikli + ')', kan, 'puan = olay + 2×sahip + 3×tanıklı; en dolu kayıt kanonik', (b.ad_kaynak || []).length].join('\t'));
  });
});
fs.writeFileSync(path.join(D, 'MUKERRER-SEHIR.tsv'), satir.join('\n') + '\n');
// kanonik = ÖTEKİ olan çiftlerde LAB'ın doğrulanmış ad_kaynak'ı kanonik kayda aktarılmak üzere yama (KASA uygular)
function nrm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, ' ').trim(); }
var yama = [];
benim.forEach(function (b) { if (!(b.ad_kaynak || []).length) return; oteki.forEach(function (o) {
  if (b.lat == null || o.lat == null || km(+b.lat, +b.lon, +o.lat, +o.lon) > 3) return;
  var sb = skor(b), so = skor(o); if (sb.puan > so.puan) return;
  var var_ = {}; (o.adlar || []).forEach(function (a) { var_[nrm(a)] = 1; });
  yama.push({ dosya: o._dosya, id: o.id, lab_id: b.id, ad_kaynak: b.ad_kaynak, adlar_eklenecek: b.ad_kaynak.map(function (e) { return e.ad; }).filter(function (a, i, L) { return !var_[nrm(a)] && L.indexOf(a) === i; }) });
}); });
fs.writeFileSync(path.join(D, 'AD-KAYNAK-YAMA-OTEKI.json'), JSON.stringify(yama, null, 1));
console.log('ad_kaynak yaması (kanonik öteki kayda)', yama.length, 'kayıt,', yama.reduce(function (s, y) { return s + y.ad_kaynak.length; }, 0), 'ad_kaynak girdisi');
console.log('mükerrer çift', say, '| kanonik LAB', lab_kan, '| kanonik öteki', oteki_kan);
satir.slice(1).forEach(function (l) { var p = l.split('\t'); console.log(p[0], '|', p[1].replace('sehir_tarihce_', ''), '<->', p[2], '|', p[3].replace('sehir_tarihce_', ''), '|', p[4] + 'km |', p[5], 'vs', p[6], '→', p[7], '| ad_kaynak', p[9]); });

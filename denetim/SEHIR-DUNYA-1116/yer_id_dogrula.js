// yer_id çözümünü SİTENİN kuralıyla (js/app.js adKonumBul: p.ad === ad || p.ad.split(" (")[0] === ad; ilk eşleşme) yeniden ölçer ve
// {afrika-guney-bati,hint,orta-asya-mogolistan}/yer_id_kronoloji.tsv'deki kayıtlı koordinatla karşılaştırır. SALT OKUR. (KASA bulgusu 17 Kasım: Accra)
var fs = require('fs'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..'), D = __dirname;
var sira = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8').match(/data\/yerlesimler[^"']*\.js/g) || [];
var liste = [];
sira.forEach(function (f) {
  var yol = path.join(KOK, f); if (!fs.existsSync(yol)) return;
  var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } });
  try { vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { timeout: 120000 }); } catch (e) {}
  Object.keys(win).forEach(function (k) { if (Array.isArray(win[k])) win[k].forEach(function (p) { if (p && p.ad && p.lat != null) liste.push(p); }); });
});
function bul(ad) { for (var i = 0; i < liste.length; i++) { var p = liste[i]; if (p.ad === ad || p.ad.split(' (')[0] === ad) return p; } return null; }
function km(a, b, c, d) { var p = Math.PI / 180, x = Math.sin((c - a) * p / 2) ** 2 + Math.cos(a * p) * Math.cos(c * p) * Math.sin((d - b) * p / 2) ** 2; return 12742 * Math.asin(Math.sqrt(x)); }
console.log('yerleşim kaydı', liste.length, '| yerlesimler dosyaları', sira.length);
var say = 0, sapma = 0;
['afrika-guney-bati', 'hint', 'orta-asya-mogolistan'].forEach(function (b) {
  var t = fs.readFileSync(path.join(D, b, 'yer_id_kronoloji.tsv'), 'utf8').replace(/\r/g, '').split('\n'); var h = t[0].split('\t');
  var iyer = h.indexOf('yer_id'), ilat = h.indexOf('lat'), ilon = h.indexOf('lon');
  if (ilat < 0) { console.log(b, 'başlık:', h.join(',')); return; }
  t.slice(1).filter(Boolean).forEach(function (l) {
    var c = l.split('\t'); say++; var p = bul(c[iyer]); if (!c[ilat]) return;
    if (!p) { console.log('ÇÖZÜLEMEDİ', b, c[iyer]); return; }
    var d = km(+c[ilat], +c[ilon], +p.lat, +p.lon);
    if (d > 5) { sapma++; console.log('SAPMA', b, c[iyer], '| kayıtlı', c[ilat], c[ilon], '| sitenin çözümü', p.ad, p.lat, p.lon, '|', Math.round(d), 'km'); }
  });
});
console.log('yer_id satırı', say, '| >5 km sapma', sapma);

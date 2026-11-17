// origin/main'deki 12 aynı-id çift kaydı (k3_g1↔osm, afrika_magrip↔k3, arkeoloji_d2-iran-orta-asya↔k12) karşılaştırır. SALT OKUR. (LAB, 17 Kasım)
var cp = require('child_process'), vm = require('vm'), path = require('path'), fs = require('fs');
var KOK = path.resolve(__dirname, '..', '..', '..');
function git(a) { return cp.execSync('git -C "' + KOK + '" ' + a, { encoding: 'utf8', maxBuffer: 90 * 1024 * 1024 }); }
function yukle(f) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); vm.runInContext(git('show origin/main:data/' + f), ctx, { timeout: 120000 }); var o = {}; Object.keys(win).forEach(function (k) { if (Array.isArray(win[k])) win[k].forEach(function (c) { if (c && c.id) o[c.id] = c; }); }); return o; }
var DOS = { k3_g1: 'sehir_tarihce_k3_g1.js', osm: 'sehir_tarihce_osm.js', magrip: 'sehir_tarihce_afrika_magrip.js', k3: 'sehir_tarihce_k3.js', iran: 'sehir_tarihce_arkeoloji_d2-iran-orta-asya.js', k12: 'sehir_tarihce_k12.js' };
var V = {}; Object.keys(DOS).forEach(function (k) { V[k] = yukle(DOS[k]); });
var CIFT = [['k3_g1', 'osm'], ['magrip', 'k3'], ['iran', 'k12']];
function ozet(c) {
  var kay = {}; function k(x) { if (x && x.kaynak) kay[String(x.kaynak).slice(0, 80)] = 1; }
  k(c.ilk); (c.sahip || []).forEach(k); (c.olay || []).forEach(k); k(c.kur); k(c.ark);
  var tanikli = 0; if (c.ilk && c.ilk.tanik) tanikli++; (c.olay || []).forEach(function (o) { if (o.tanik) tanikli++; });
  return { ad: c.ad, atlas_ad: c.atlas_ad, ilk_t: c.ilk && c.ilk.t, ilk_nicelik: c.ilk && c.ilk.nicelik, ilk_tanik: !!(c.ilk && c.ilk.tanik), sahip: (c.sahip || []).length, sahip_f: (c.sahip || [])[0] && c.sahip[0].f, sahip_t: (c.sahip || []).slice(-1)[0] && c.sahip.slice(-1)[0].t, olay: (c.olay || []).length, olay_tanikli: tanikli, kaynak_sayisi: Object.keys(kay).length, adlar: (c.adlar || []).length, ic_not_uz: (c.ic_not || '').length };
}
var cikti = {};
CIFT.forEach(function (p) {
  Object.keys(V[p[0]]).forEach(function (id) {
    if (!V[p[1]][id]) return;
    cikti[id] = { dosyalar: p, a: ozet(V[p[0]][id]), b: ozet(V[p[1]][id]), olaylar_a: (V[p[0]][id].olay || []).map(function (o) { return o.t + '|' + (o.k || '') + '|' + String(o.b || '').slice(0, 70); }), olaylar_b: (V[p[1]][id].olay || []).map(function (o) { return o.t + '|' + (o.k || '') + '|' + String(o.b || '').slice(0, 70); }) };
  });
});
fs.writeFileSync(path.join(__dirname, 'cift_ozet.json'), JSON.stringify(cikti, null, 1));
var tam = {}; Object.keys(cikti).forEach(function (id) { tam[id] = { dosyalar: cikti[id].dosyalar, a: V[cikti[id].dosyalar[0]][id], b: V[cikti[id].dosyalar[1]][id] }; });
fs.writeFileSync(path.join(__dirname, 'cift_tam.json'), JSON.stringify(tam, null, 1));
console.log(Object.keys(cikti).length, 'çift id:', Object.keys(cikti).join(', '));
Object.keys(cikti).forEach(function (id) { var c = cikti[id]; console.log(id, '|', c.dosyalar[0], JSON.stringify([c.a.ilk_t, c.a.sahip, c.a.olay, c.a.olay_tanikli, c.a.kaynak_sayisi, c.a.ilk_tanik]), '|', c.dosyalar[1], JSON.stringify([c.b.ilk_t, c.b.sahip, c.b.olay, c.b.olay_tanikli, c.b.kaynak_sayisi, c.b.ilk_tanik])); });

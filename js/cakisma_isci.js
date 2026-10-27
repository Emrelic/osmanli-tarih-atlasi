// ÇAKIŞMA İŞÇİSİ — `js/app.js` `cakismaGider`in Web Worker kopyası.
// 🔴 26 Ekim 2026, Emre: "tarihe git ... epey uzun sürüyor ilgili tarihe gitmesi."
// ÖLÇÜLDÜ (yayındaki site, Chrome, 1453-05-29 · 1520-09-30): `devletGuncelle`
// 5,5 sn ana iş parçacığını kilitliyor; bunun 5,5 sn'si `cakismaGider` —
// o gün ilk kez görülen 603 gövde çifti için polygon-clipping `intersection`
// (4,2 sn) + 178 `difference` (1,4 sn). Önbellek çift anahtarlı olduğu için
// aynı güne İKİNCİ gidiş 60 ms; ama her yeni gün (tarihe git, uzak sıçrama,
// çubuğu sürükleme) bedeli baştan ödüyordu.
// ⇒ Hesap buraya taşındı: harita gövdeleri HEMEN (çakışması giderilmemiş)
//   çizer, sonuç gelince aynı gün hâlâ ekrandaysa düzeltilmiş hâli yazar.
// ⚠️ Algoritma `cakismaGider` ile BİREBİR aynıdır (sıra, anahtar, küçük gövde
//    kalır kuralı) — biri değişirse öteki de değişir.
importScripts("https://cdn.jsdelivr.net/npm/polygon-clipping@0.15.7/dist/polygon-clipping.umd.min.js");

var pc = self.polygonClipping;
var ONBELLEK = {};

function bbox(c) {
  var b = [1e9, 1e9, -1e9, -1e9];
  c.forEach(function (p) { p[0].forEach(function (k) {
    if (k[0] < b[0]) b[0] = k[0]; if (k[1] < b[1]) b[1] = k[1];
    if (k[0] > b[2]) b[2] = k[0]; if (k[1] > b[3]) b[3] = k[1];
  }); });
  return b;
}
function alanHesap(c) {
  var a = 0;
  c.forEach(function (p) { p.forEach(function (r, k) {
    var s = 0;
    for (var i = 0; i < r.length - 1; i++) s += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1];
    a += (k ? -1 : 1) * Math.abs(s) / 2;
  }); });
  return a;
}

// Girdi: g = [{id, c}] (c: MultiPolygon koordinatı ya da null). Çıktı: d =
// {indeks: yeni koordinat} — yalnız DEĞİŞEN gövdeler (boş dizi = gövde düştü).
self.onmessage = function (e) {
  try { self.postMessage({ is: e.data.is, d: coz(e.data.g) }); }
  catch (er) { self.postMessage({ is: e.data.is, hata: String(er) }); }
};
function coz(g) {
  var c = g.map(function (x) { return x.c; });
  var bs = c.map(function (k) { return k ? bbox(k) : null; });
  var alan = c.map(function (k, i) { return bs[i] ? alanHesap(k) : 0; });
  var d = {};
  for (var i = 0; i < g.length; i++) {
    if (!bs[i]) continue;
    for (var j = i + 1; j < g.length; j++) {
      if (!bs[i]) break;                  // i'nin kendisi bu turda tamamen düştü
      if (!bs[j] || g[i].id === g[j].id) continue;
      var a = bs[i], b = bs[j];
      if (a[2] < b[0] || b[2] < a[0] || a[3] < b[1] || b[3] < a[1]) continue;
      var kucuk = alan[i] <= alan[j] ? i : j, buyuk = kucuk === i ? j : i;
      var anahtar = g[kucuk].id + "@" + alan[kucuk].toFixed(5) + "|" +
                    g[buyuk].id + "@" + alan[buyuk].toFixed(5);
      var k = ONBELLEK[anahtar];
      if (k === undefined) {
        try {
          var kes = pc.intersection(c[kucuk], c[buyuk]);
          k = (kes && kes.length) ? pc.difference(c[buyuk], c[kucuk]) : null;
        } catch (er) { k = null; }
        ONBELLEK[anahtar] = k;
      }
      if (k) {
        c[buyuk] = k; d[buyuk] = k;
        bs[buyuk] = k.length ? bbox(k) : null;
        alan[buyuk] = bs[buyuk] ? alanHesap(k) : 0;
      }
    }
  }
  return d;
}

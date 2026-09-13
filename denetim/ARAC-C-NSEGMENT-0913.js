// ============================================================================
// denetim/ARAC-C-NSEGMENT-0913.js — C-NSEGMENT (13 Eylül 2026)
// js/app.js `_cKayitGeometrisi` N noktalı hat dolgu bölmesinin sınavı.
//
// Kopya kod YOK (D023): js/app.js'in C bloğu (`var _cDevletIxOnbellek`
// … `var _cAktifId`) METİN olarak kesilip değerlendirilir — hem ÇALIŞMA
// KOPYASINDAN (yeni) hem `git show HEAD:js/app.js`ten (eski).
//
//   node denetim/ARAC-C-NSEGMENT-0913.js         (çıkış kodu 1 = başarısız)
//
// Sınavlar:
//  (a) data/hukuki_sinirlar.js'in BÜTÜN kayıtları eski/yeni kodla aynı
//      çıktıyı veriyor mu (JSON birebir) — her geometri fonksiyonu için.
//  (a2) Yeni polyline bölücü 2 noktalı kayıtlara UYGULANSAYDI eski kirişle
//      aynı bölgeleri verir miydi (alan + ızgara örnekleme) — anlam tutarlılığı.
//  (b) Sentetik 19 köşeli zikzak + at nalı (aynı kenardan giriş/çıkış) +
//      desteklenmeyen iki durum (kutuya iki kez giriş, kendini kesme → null).
//  (c) Ferhat Paşa 19 köşeli hat, bellekte `kapsama.tur:"bbox"` yapılarak
//      (dosyaya YAZILMAZ): KAYNAK hükmü + GAZETTEER koordinatı (GeoNames).
// ============================================================================
"use strict";
var fs = require("fs"), path = require("path"), cp = require("child_process");
var KOK = path.join(__dirname, "..");
var hata = 0;
function sinav(ad, kosul, ek) {
  console.log((kosul ? "  ✓ " : "  ✗ ") + ad + (ek ? "  — " + ek : ""));
  if (!kosul) hata++;
}

// ---- veri --------------------------------------------------------------------
global.window = {};
function yukle(f) { eval(fs.readFileSync(path.join(KOK, f), "utf8")); }
yukle("data/devletler.js");
yukle("data/devletler_harita.js");
yukle("data/hukuki_sinirlar.js");
var KAYITLAR = window.HUKUKI_SINIRLAR;

// ---- app.js C bloğunu kes ve değerlendir --------------------------------------
function blok(metin) {
  var b = metin.indexOf("var _cDevletIxOnbellek = null;");
  var s = metin.indexOf("var _cAktifId = null;");
  if (b < 0 || s < 0 || s < b) throw new Error("C bloğu işaretleri bulunamadı");
  return metin.slice(b, s);
}
function derle(kod) {
  var f = new Function("window", "_DEVLET_RENK", "console",
    kod + "\nreturn { _cKayitGeometrisi: _cKayitGeometrisi, _cParalelGeometrisi: _cParalelGeometrisi," +
    " _cBolgeGeometrisi: _cBolgeGeometrisi, _cNoktaKumesiOzellikleri: _cNoktaKumesiOzellikleri," +
    " _cTarafRengi: _cTarafRengi, _cDogruylaKes: _cDogruylaKes, _cBboxPoligonu: _cBboxPoligonu," +
    " _cPolylineKutuBol: (typeof _cPolylineKutuBol === 'function' ? _cPolylineKutuBol : null) };");
  var renk = {};
  (window.DEVLET_HARITA || []).forEach(function (d) { if (d && d.id) renk[d.id] = d.renk; });
  var uyarilar = [];
  var api = f(window, renk, { warn: function (m) { uyarilar.push(m); } });
  api.uyarilar = uyarilar;
  return api;
}
var yeniMetin = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");
var eskiMetin = cp.execSync("git show HEAD:js/app.js", { cwd: KOK, encoding: "utf8", maxBuffer: 64 << 20 });
var YENI = derle(blok(yeniMetin)), ESKI = derle(blok(eskiMetin));

// ---- geometri yardımcıları ---------------------------------------------------
function alan(h) {
  var s = 0; for (var i = 0; i < h.length; i++) { var a = h[i], b = h[(i + 1) % h.length]; s += a[0] * b[1] - b[0] * a[1]; }
  return s / 2;
}
function icinde(h, P) {   // ışın atma; h kapanmış ya da açık halka
  var ic = false;
  for (var i = 0, j = h.length - 1; i < h.length; j = i++) {
    var a = h[i], b = h[j];
    if ((a[1] > P[1]) !== (b[1] > P[1]) && P[0] < (b[0] - a[0]) * (P[1] - a[1]) / (b[1] - a[1]) + a[0]) ic = !ic;
  }
  return ic;
}
// geometri çıktısında P noktasını içeren dolgu parçalarının renkleri
function renkler(g, P) {
  return (g ? g.dolgu : []).filter(function (f) { return icinde(f.geometry.coordinates[0], P); })
    .map(function (f) { return f.properties.renk; });
}

// =============================================================================
console.log("\n(a) MEVCUT KAYITLAR — eski (HEAD) ve yeni app.js çıktısı birebir mi");
console.log("    kayıt sayısı: " + KAYITLAR.length);
KAYITLAR.forEach(function (k) {
  var nd = ((k.hat || {}).nokta_dizisi || []).length;
  ["_cKayitGeometrisi", "_cParalelGeometrisi", "_cBolgeGeometrisi", "_cNoktaKumesiOzellikleri"].forEach(function (fn) {
    var e, y, eh = null, yh = null;
    try { e = JSON.stringify(ESKI[fn](k)); } catch (x) { eh = String(x.message); }
    try { y = JSON.stringify(YENI[fn](k)); } catch (x) { yh = String(x.message); }
    if (fn !== "_cKayitGeometrisi" && e === y && eh === yh) return;   // yalnız fark varsa yaz
    sinav(k.id + " · " + fn + " (hat.tur=" + (k.hat || {}).tur + ", nokta=" + nd + ", kapsama.tur=" + (k.kapsama || {}).tur + ")",
      e === y && eh === yh, eh || yh ? "hata eski=" + eh + " yeni=" + yh : (e ? e.length + " karakter" : "null"));
  });
});

// =============================================================================
console.log("\n(a2) ANLAM TUTARLILIĞI — yeni polyline bölücü 2 noktalı kayıtlarda kirişle aynı bölgeyi veriyor mu");
KAYITLAR.filter(function (k) {
  var nd = (k.hat || {}).nokta_dizisi || [];
  return nd.length === 2 && k.kapsama && k.kapsama.kutu && k.kapsama.tur !== "poligon";
}).forEach(function (k) {
  var kutu = k.kapsama.kutu, nd = k.hat.nokta_dizisi;
  var A = [nd[0].lon, nd[0].lat], B = [nd[1].lon, nd[1].lat];
  var kp = YENI._cBboxPoligonu(kutu);
  var eN = YENI._cDogruylaKes(kp, A, B, true), eP = YENI._cDogruylaKes(kp, A, B, false);
  var y = YENI._cPolylineKutuBol(kutu, [A, B]);
  var dA = Math.abs(Math.abs(alan(eN)) - Math.abs(alan(y.negatif))) + Math.abs(Math.abs(alan(eP)) - Math.abs(alan(y.pozitif)));
  var fark = 0, ornek = 0;
  for (var i = 1; i < 40; i++) for (var j = 1; j < 40; j++) {
    var P = [kutu.lon_min + (kutu.lon_max - kutu.lon_min) * (i + 0.37) / 40, kutu.lat_min + (kutu.lat_max - kutu.lat_min) * (j + 0.61) / 40];
    ornek++;
    if (icinde(eN, P) !== icinde(y.negatif, P) || icinde(eP, P) !== icinde(y.pozitif, P)) fark++;
  }
  sinav(k.id + " — alan farkı " + dA.toExponential(2) + " · ızgara " + ornek + " noktada farklı taraf " + fark, dA < 1e-9 && fark === 0);
});

// =============================================================================
console.log("\n(b) SENTETİK");
var KUTU = { lon_min: 0, lon_max: 10, lat_min: 0, lat_max: 10 };
function sentetikKayit(noktalar, neg) {
  return { id: "sentetik", taraflar: ["osmanli", "safevi"],
    hat: { tur: "dogal-tanimsiz", nokta_dizisi: noktalar.map(function (p) { return { lon: p[0], lat: p[1] }; }) },
    kapsama: { tur: "bbox", negatif_taraf: neg, kutu: KUTU } };
}
var RO = YENI._cTarafRengi("osmanli"), RS = YENI._cTarafRengi("safevi");
sinav("iki taraf rengi ayırt edilebilir (osmanli " + RO + " · safevi " + RS + ")", RO !== RS);

// b1: 19 köşeli zikzak, güneyden kuzeye, uçlar kutu kenarına ULAŞMIYOR (uzatma sınanır)
var zik = [];
for (var i = 0; i < 19; i++) zik.push([5 + (i % 2 ? 2.2 : -2.2), 1 + 8 * i / 18]);
var gZ = YENI._cKayitGeometrisi(sentetikKayit(zik, "osmanli"));
var gZk = ESKI._cKayitGeometrisi(sentetikKayit(zik, "osmanli"));
sinav("b1 zikzak: iki dolgu parçası", gZ && gZ.dolgu.length === 2);
var toplam = gZ.dolgu.reduce(function (s, f) { return s + Math.abs(alan(f.geometry.coordinates[0])); }, 0);
sinav("b1 zikzak: parça alanları toplamı = kutu alanı (100)", Math.abs(toplam - 100) < 1e-9, toplam.toFixed(12));
// her parçanın orta noktasından normal boyunca ±0,15 — SAĞ (güneyden kuzeye giderken DOĞU tarafı genel olarak) = negatif = osmanli
var dogru = 0, yanlis = 0, kirisYanlis = 0, n = 0;
for (i = 0; i < zik.length - 1; i++) {
  var a = zik[i], b = zik[i + 1], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  var dx = b[0] - a[0], dy = b[1] - a[1], l = Math.sqrt(dx * dx + dy * dy);
  var sag = [m[0] + dy / l * 0.15, m[1] - dx / l * 0.15], sol = [m[0] - dy / l * 0.15, m[1] + dx / l * 0.15];
  [[sag, RO], [sol, RS]].forEach(function (c) {
    n++;
    var r = renkler(gZ, c[0]);
    if (r.length === 1 && r[0] === c[1]) dogru++; else yanlis++;
    var rk = renkler(gZk, c[0]);
    if (!(rk.length === 1 && rk[0] === c[1])) kirisYanlis++;
  });
}
sinav("b1 zikzak: hattın iki yanındaki " + n + " sınama noktası doğru renk, tek parçada", dogru === n && yanlis === 0,
  "yeni doğru " + dogru + "/" + n + " · ESKİ (kiriş) kodla yanlış " + kirisYanlis + "/" + n);
// uzatma: ilk parça (2.8,1)→(7.2,1.444) doğuya gidiyor ⇒ geri uzantı BATI kenarına
// (0, ≈0.717) çıkar; o uzantının güneyi (sağ) osmanli, kuzeyi safevi. Aynı şey
// son parçanın uzantısı için kuzey kenarda.
sinav("b1 baş uzantısı (x<2.8): (1.4,0.5) osmanli · (1.4,1.2) safevi",
  renkler(gZ, [1.4, 0.5])[0] === RO && renkler(gZ, [1.4, 1.2])[0] === RS);
var zs = zik[18], zo = zik[17];   // (2.8,9) ← (7.2,8.556): batıya gidiyor, sağ = kuzey
sinav("b1 son uzantısı (x<2.8): (1.4,9.5) osmanli · (1.4,8.8) safevi  [son köşe " + zs + ", önceki " + zo + "]",
  renkler(gZ, [1.4, 9.5])[0] === RO && renkler(gZ, [1.4, 8.8])[0] === RS);

// b2: aynı hattın TERS sırası + negatif_taraf aynı ⇒ renkler yer değiştirmemeli mi? Hayır:
// negatif = yöne göre SAĞ; sıra ters ⇒ sağ taraf batıya geçer. negatif_taraf:"safevi" ile görünüm AYNI kalmalı.
var gZt = YENI._cKayitGeometrisi(sentetikKayit(zik.slice().reverse(), "safevi"));
var ayni = 0, top = 0;
for (i = 1; i < 50; i++) for (var j = 1; j < 50; j++) {
  var Q = [i / 5 + 0.013, j / 5 + 0.007]; top++;
  if (JSON.stringify(renkler(gZ, Q)) === JSON.stringify(renkler(gZt, Q))) ayni++;
}
sinav("b2 ters nokta sırası + negatif_taraf çevrilince görünüm aynı (ızgara)", ayni === top, ayni + "/" + top);

// b3: at nalı — güney kenardan girip güney kenardan çıkıyor
var nal = [[3, 0], [3, 6], [5, 8], [7, 6], [7, 0]];
var gN = YENI._cKayitGeometrisi(sentetikKayit(nal, "osmanli"));
// güneyden kuzeye x=3'te çıkarken SAĞ = doğu = nalın İÇİ ⇒ osmanli; dışı safevi
sinav("b3 at nalı: iç (5,3) osmanli, dış (1,3)/(9,3)/(5,9.5) safevi",
  renkler(gN, [5, 3])[0] === RO && renkler(gN, [1, 3])[0] === RS && renkler(gN, [9, 3])[0] === RS && renkler(gN, [5, 9.5])[0] === RS);

// b4: desteklenmeyen — kutudan çıkıp tekrar giriyor ⇒ null, dolgu yok + uyarı
var uyariOnce = YENI.uyarilar.length;
var gC = YENI._cKayitGeometrisi(sentetikKayit([[2, 5], [5, 12], [8, 5]], "osmanli"));
sinav("b4 iki kez giriş: _cPolylineKutuBol null", YENI._cPolylineKutuBol(KUTU, [[2, 5], [5, 12], [8, 5]]) === null);
sinav("b4 iki kez giriş: dolgu 0 parça, çizgi çiziliyor", gC && gC.dolgu.length === 0 && !!gC.hat);
sinav("b4 iki kez giriş: uyarı basıldı (sessiz değil)", YENI.uyarilar.length === uyariOnce + 1, YENI.uyarilar.slice(-1)[0]);
// b5: kendini kesen
sinav("b5 kendini kesen hat: null", YENI._cPolylineKutuBol(KUTU, [[2, 2], [8, 8], [8, 2], [2, 8]]) === null);

// =============================================================================
console.log("\n(c) FERHAT PAŞA 19 KÖŞELİ HAT — bellekte bbox (dosyaya yazılmıyor)");
var FP = KAYITLAR.filter(function (k) { return k.id === "ferhad-pasa-1590-sinir-hatti"; })[0];
if (!FP) { sinav("ferhad-pasa-1590-sinir-hatti kaydı bulundu", false); }
else {
  var fpBbox = JSON.parse(JSON.stringify(FP));
  fpBbox.kapsama = { tur: "bbox", negatif_taraf: FP.kapsama.negatif_taraf, kutu: FP.kapsama.kutu };
  console.log("    köşe sayısı " + FP.hat.nokta_dizisi.length + " · kutu " + JSON.stringify(FP.kapsama.kutu) + " · negatif_taraf " + FP.kapsama.negatif_taraf);
  var gY = YENI._cKayitGeometrisi(fpBbox), gE = ESKI._cKayitGeometrisi(fpBbox);
  // Koordinat: GeoNames gazetteer (geonames.org, 13 Eylül 2026 sorgusu) — ATLAS NOKTASI DEĞİL.
  // Hüküm: kaynak (kayıttaki araştırma raporlarının adıyla verdiği kaynaklar).
  var TEST = [
    { ad: "Tebriz",  P: [46.29167, 38.08000], bek: "osmanli", koord: "GeoNames Tabriz N38°04'48\" E46°17'30\"", hukum: "TDV tebriz: 1585-09-25 Özdemiroğlu Osman Paşa aldı; 21 Ekim 1603'e kadar Osmanlı" },
    { ad: "Erdebil", P: [48.29306, 38.24972], bek: "safevi",  koord: "GeoNames Ardabil N38°14'59\" E48°17'35\"", hukum: "Eskandar Beg Monshi (tr. Savory) · TDV erdebil — Safevî'de kaldı" },
    { ad: "Hemedan", P: [48.51444, 34.79917], bek: "safevi",  koord: "GeoNames Hamadan N34°47'57\" E48°30'52\"", hukum: "Monshi/Savory s.587·690·825 · Iranica NEHĀVAND — Safevî valisi" },
    { ad: "Bağdat",  P: [44.400876, 33.34058], bek: "osmanli", koord: "GeoNames Baghdad 33.34058 44.400876", hukum: "TDV bagdat / safeviler [211] — 1534'ten beri Osmanlı, 1590 bölge listesinde" },
    { ad: "Bakü",    P: [49.89194, 40.37750], bek: "osmanli", koord: "GeoNames Baku N40°22'39\" E49°53'31\"", hukum: "Iranica BAKU i · TDV safeviler [211] 'Şirvan' — Osmanlı" }
  ];
  TEST.forEach(function (t) {
    var ry = renkler(gY, t.P), re = renkler(gE, t.P), beklenen = YENI._cTarafRengi(t.bek);
    var ad = function (r) { return r.map(function (x) { return x === RO ? "osmanli" : x === RS ? "safevi" : x; }).join("+") || "yok"; };
    sinav(t.ad + " beklenen " + t.bek + " → YENİ " + ad(ry), ry.length === 1 && ry[0] === beklenen,
      "ESKİ (kiriş) " + ad(re) + " · koord " + t.koord);
  });
  // tam kayıt hâli (poligon + boş nokta_dizisi) dokunulmadı
  sinav("kaydın DOSYADAKİ hâli (kapsama.tur poligon, boş dizi) eski/yeni aynı ve dolgusuz",
    JSON.stringify(YENI._cKayitGeometrisi(FP)) === JSON.stringify(ESKI._cKayitGeometrisi(FP)) && YENI._cKayitGeometrisi(FP).dolgu.length === 0);
}

console.log("\n" + (hata ? "BAŞARISIZ: " + hata + " sınav" : "HEPSİ GEÇTİ"));
process.exit(hata ? 1 : 0);

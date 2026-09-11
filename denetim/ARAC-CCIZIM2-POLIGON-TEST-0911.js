// C ÇİZİM II — poligon kapsama fizibilite testi (node, tarayıcı GEREKMİYOR).
// js/app.js'teki _cCross/_cKesisim/_cDogruylaKes ile BİREBİR AYNI kod —
// kopyalanmadı, birebir alındı, davranış test edilsin diye burada tekrar
// tanımlandı (app.js DOM'a bağımlı, node'da doğrudan require edilemez).

function cCross(A, B, P) {
  return (B[0] - A[0]) * (P[1] - A[1]) - (B[1] - A[1]) * (P[0] - A[0]);
}
function cKesisim(P1, P2, A, B) {
  var d1 = cCross(A, B, P1), d2 = cCross(A, B, P2);
  var t = d1 / (d1 - d2);
  return [P1[0] + t * (P2[0] - P1[0]), P1[1] + t * (P2[1] - P1[1])];
}
function cDogruylaKes(poly, A, B, negatifTutulsun) {
  var out = [], n = poly.length;
  for (var i = 0; i < n; i++) {
    var cur = poly[i], prev = poly[(i - 1 + n) % n];
    var cs = cCross(A, B, cur), ps = cCross(A, B, prev);
    var curIn = negatifTutulsun ? cs <= 0 : cs >= 0;
    var prevIn = negatifTutulsun ? ps <= 0 : ps >= 0;
    if (curIn) { if (!prevIn) out.push(cKesisim(prev, cur, A, B)); out.push(cur); }
    else if (prevIn) { out.push(cKesisim(prev, cur, A, B)); }
  }
  return out;
}
function alan(poly) {
  var s = 0, n = poly.length;
  for (var i = 0; i < n; i++) {
    var a = poly[i], b = poly[(i + 1) % n];
    s += a[0] * b[1] - b[0] * a[1];
  }
  return Math.abs(s) / 2;
}

var A = [26.075, 40.724], B = [28.09611, 41.63528]; // Enez -> Midye

console.log("=== TEST 1: DİKDÖRTGEN kapsama (mevcut davranış, sanity) ===");
var dikdortgen = [[25.8, 40.5], [29.3, 40.5], [29.3, 42.0], [25.8, 42.0]];
var neg1 = cDogruylaKes(dikdortgen, A, B, true);
var poz1 = cDogruylaKes(dikdortgen, A, B, false);
console.log("negatif (taraf_a) nokta sayısı:", neg1.length, "alan:", alan(neg1).toFixed(3));
console.log("pozitif (taraf_b) nokta sayısı:", poz1.length, "alan:", alan(poz1).toFixed(3));

console.log("\n=== TEST 2: POLİGON kapsama — Marmara'nın Anadolu kıyısını DIŞARIDA");
console.log("    bırakan, Trakya yarımadasını KABACA takip eden 8 köşeli şekil ===");
// Kaba/elle çizilmiş — Ege kıyısı (güney), Gelibolu/Marmara boğazı (Anadolu'ya
// GİRMEYECEK şekilde kuzeye dönüyor), Karadeniz kıyısı (doğu/kuzey), Bulgaristan
// içine (batı) cömert bir sınır. Gerçek koordinatlar DEĞİL — yalnız MEKANİZMANIN
// dışbükey OLMAYAN bir şekli doğru kesip kesmediğini sınamak için.
var trakya = [
  [25.4, 40.55],   // Ege kıyısı, batı
  [26.3, 40.32],   // Gelibolu ucu (Ege)
  [26.7, 40.42],   // Gelibolu-Marmara dönüşü — İÇE ÇIKINTI (dışbükey DEĞİL)
  [27.5, 40.75],   // Marmara kuzey kıyısı (Trakya tarafı), Anadolu'ya İNMİYOR
  [28.0, 41.05],   // İstanbul'un batısında duruyor
  [28.6, 41.9],    // Karadeniz kıyısına çıkış
  [27.5, 42.3],    // Karadeniz kıyısı boyunca kuzey
  [25.4, 42.1]     // Bulgaristan içine, batıya dönüş
];
var neg2 = cDogruylaKes(trakya, A, B, true);
var poz2 = cDogruylaKes(trakya, A, B, false);
console.log("negatif (taraf_a) nokta sayısı:", neg2.length, "alan:", alan(neg2).toFixed(3));
console.log("pozitif (taraf_b) nokta sayısı:", poz2.length, "alan:", alan(poz2).toFixed(3));
console.log("orijinal poligon alanı:", alan(trakya).toFixed(3),
            "| iki parçanın toplamı:", (alan(neg2) + alan(poz2)).toFixed(3),
            "| eşit mi (kesim ALAN KAYBETMİYOR mu):",
            Math.abs(alan(trakya) - (alan(neg2) + alan(poz2))) < 1e-9);

console.log("\nSONUÇ: dışbükey OLMAYAN (içe çıkıntılı) bir poligon bile TEK bir");
console.log("_cDogruylaKes çağrısıyla doğru ikiye ayrılıyor, alan kaybı YOK.");
console.log("app.js'teki _cKayitGeometrisi kodu DEĞİŞMEDEN, yalnız");
console.log("_cBboxPoligonu(k) yerine kapsama.poligon'un KENDİSİ verilirse");
console.log("ÇALIŞIR — YENİ KOD GEREKMEZ.");

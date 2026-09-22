// SEFER-OK-0075 — tarayıcı sınavı (konsola / javascript_tool'a yapıştırılır).
// Ön koşul: harita hazır (harita.getLayer("sefer-cizgi-sefer") — isStyleLoaded() YALAN SÖYLER)
// ve veri yamaları uygulanmış (kademe + rota + SEFERLER_SEFER_OK_0075).
// Hiçbir şey yazmaz; ekrana çizilen GeoJSON'u yakalar ve okur.
//
//   ① KADEMELİ OK — her madde gününde okun UCU o maddenin yerinde olmalı:
//        1832-05-27 Akkâ (35.08,32.93) · 06-16 Şam (36.29,33.51) · 06-26 Halep (37.16,36.20)
//        07-09 hâlâ Halep (ok GERİ KISALMAZ) · 07-29 Belen (36.20,36.52)
//   ② FAZ — ilerleme YOKSA faz false döner (Akkâ düştü, Humus); varsa true.
//   ③ TAHLİYE — üç ok `tahliye` türünde çizilir, Mora oku 4 noktalı (rota), eğrilmez.
(async function () {
  var src = harita.getSource("seferler");
  if (!src.__orig) { src.__orig = src.setData; src.setData = function (d) { window.__son = d; return src.__orig.call(src, d); }; }
  function uclar() {
    var f = (window.__son && window.__son.features) || [];
    return f.filter(function (x) { return x.geometry.type === "LineString"; }).map(function (x) {
      var c = x.geometry.coordinates; return x.properties.tur + ":" + c.length + "p→" + c[c.length - 1].map(function (v) { return +v.toFixed(2); }).join(",");
    });
  }
  var cikti = [];
  [["1832-05-27", "Akkâ"], ["1832-06-16", "Şam"], ["1832-06-26", "Halep"], ["1832-07-09", "Halep (geri kısalmadı)"],
   ["1832-07-29", "Belen"], ["1828-10-05", "Mora→Girit tahliye"], ["1836-01-01", "Silistre tahliye"],
   ["1841-02-25", "Suriye/Çukurova tahliye"]].forEach(function (g) {
    tarihAyarla(gunIdx(g[0]));
    cikti.push(g[0] + " " + g[1] + " → " + JSON.stringify(uclar()));
  });
  var bul = function (b) { return olaylar.filter(function (o) { return o.b && o.b.indexOf(b) === 0; })[0]; };
  ["Akkâ kuşatması başladı", "Akkâ düştü", "Şam teslim oldu", "Halep ele geçirildi", "Humus Muharebesi",
   "Mısır kuvvetleri Mora'yı boşalttı", "Rusların Silistre'yi boşaltması"].forEach(function (b) {
    var ol = bul(b); if (!ol) { cikti.push(b + ": olay yok"); return; }
    tarihAyarla(ol.gi); cikti.push("faz(" + b + ") = " + SEFER_OK_FAZ(ol, function () { }));
  });
  return cikti.join("\n");
})();

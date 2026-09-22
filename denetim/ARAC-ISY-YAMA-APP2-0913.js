// PAKET-ISYAN · 13 Eylül 2026 · js/app.js İKİNCİ yama (tek sefer).
// node denetim/ARAC-ISY-YAMA-APP2-0913.js
// 🔴 SEBEP (tarayıcıda ölçüldü): PETEKLER yalnız AD taşıyor — PETEKLER[155] = {a:"Bükreş"},
//    3808 kaydın g'li olanı 0. İlk yama PETEKLER[i].g okuyordu ⇒ tarama HİÇ çizilmeyecekti.
//    node ölçüm aleti yalnız AD eşleşmesini sınadığı için bunu göstermedi.
//    Geometri data/petek_govde.js'te (PETEK_GOVDE[i] → PETEK_GOVDE_PARCA); PAKET-UI2'nin
//    tembel yükleyicisi (_petekGovdeYukle) yeniden kullanılır.
"use strict";
const fs = require("fs"), path = require("path");
const P = path.join(__dirname, "..", "js", "app.js");
let s = fs.readFileSync(P, "utf8");
if (s.indexOf("ISYAN.yukleniyor") >= 0) { console.log("zaten uygulanmış — çıkılıyor"); process.exit(0); }
const EOL = s.indexOf("\r\n") >= 0 ? "\r\n" : "\n";
const YAMALAR = [
["yorum",
`// elle çizim YOK, petek_govde.js YÜKLENMEZ (PETEKLER zaten bellekte).`,
`// elle çizim YOK. 🔴 PETEKLER yalnız AD taşır (tarayıcıda ölçüldü: {a:"Bükreş"}, g'li 0/3808);
// geometri data/petek_govde.js'tedir ve PAKET-UI2'nin tembel yükleyicisiyle
// (_petekGovdeYukle) ilk isyan penceresine girilince BİR KEZ iner.`],
["tembel",
`  if (anahtar && SG && SG.isyanSecim) {
    if (!ISYAN.petAd) {`,
`  if (anahtar && !window.PETEK_GOVDE && !_PETEK_GOVDE_YUK.hata) {
    // Geometri henüz yok: bir kez tembel yükle, gelince O ANKİ günü yeniden çiz.
    // Anahtar zaten kaydedildi ⇒ aynı pencere kümesinde kare başına buraya girilmez;
    // bayrak ⇒ yükleme sürerken kuyruğa ikinci geri çağrı eklenmez.
    if (!ISYAN.yukleniyor) {
      ISYAN.yukleniyor = true;
      _petekGovdeYukle(function () { ISYAN.yukleniyor = false; ISYAN.anahtar = null; isyanGuncelle(suanki); });
    }
    return;
  }
  if (anahtar && SG && SG.isyanSecim) {
    if (!ISYAN.petAd) {`],
["geometri",
`      var pi = ISYAN.petAd[Y[sec.i].ad], pt = (pi === undefined) ? null : PETEKLER[pi];
      if (!pt || !pt.g || !pt.g.length) { ISYAN.eksik++; return; }`,
`      var pi = ISYAN.petAd[Y[sec.i].ad], G = window.PETEK_GOVDE, PP = window.PETEK_GOVDE_PARCA;
      var ix = (pi === undefined || !G || !PP) ? null : G[pi];
      if (!ix || !ix.length) { ISYAN.eksik++; return; }`],
["koordinat",
`                geometry: { type: "MultiPolygon", coordinates: pt.g } });`,
`                geometry: { type: "MultiPolygon", coordinates: ix.map(function (j) { return PP[j]; }) } });`]
];
for (const y of YAMALAR) { y[1] = y[1].replace(/\r?\n/g, EOL); y[2] = y[2].replace(/\r?\n/g, EOL); }
let hata = 0;
for (const [ad, eski] of YAMALAR) { const n = s.split(eski).length - 1; console.log(ad.padEnd(10), "eşleşme", n); if (n !== 1) hata++; }
if (hata) { console.log("✗ YAZILMADI"); process.exit(1); }
for (const [, eski, yeni] of YAMALAR) s = s.replace(eski, () => yeni);
fs.writeFileSync(P, s, "utf8");
console.log("✓ app.js yazıldı ·", YAMALAR.length, "yama");

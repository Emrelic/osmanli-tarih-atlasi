// 🔴 KENDİ KUSURUM — konum düzeltmesi `not:` alanını EZDİ Mİ?
//
// KAMERIKA partisinde 54 kayıt `denetle.py`nin reçetesiyle taşındı ve
// her taşımaya bir açıklama notu yazıldı. İki kayıtta (`Sisimiut` · `Nome`)
// `not:` alanında ARTIK YALNIZ o taşıma notu var — akademik dayanak
// (`dayanak: <yayın>`) YOK OLMUŞ.
//
// `arac/_sahiplik_uygula.py`nin sözleşmesi bunu açıkça yasaklıyor:
// `kaynak` · `bos` · `neden` · `not` ÜZERİNE YAZILMAZ, çünkü bir
// ARAŞTIRMACININ BEYANINI taşırlar — "kimse burayı araştırmadı" ile
// "biri araştırdı ve şu sonuca vardı" arasındaki farkı silerler.
// Benim düzeltmem o sözleşmeye uymamış.
//
// §11: "bir düzeltme doğru çalışabilir ve sonraki aşama onu GERİ
// ALABİLİR — ve ikisi arasındaki boşluk hiçbir denetimin sorusu değildir."
//
// kullanım: node denetim/ARAC-KAMERIKA-NOT-EZILME.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
global.window = {};
eval(fs.readFileSync("data/yerlesimler_kamerika.js", "utf8"));
const Y = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);

const tasinan = Y.filter(y => /konum denetle\.py/.test(String(y.not || "")));
const dayanakli = tasinan.filter(y => /dayanak:/.test(String(y.not || "")));
const ezilen = tasinan.filter(y => !/dayanak:/.test(String(y.not || "")));
const hicTasinmayan = Y.filter(y => !/konum denetle\.py/.test(String(y.not || "")));
const hicTasinmayanDayanaksiz = hicTasinmayan.filter(y => !/dayanak:/.test(String(y.not || "")));

console.log("KAMERIKA: " + Y.length + " kayıt\n");
console.log("konum düzeltmesi ALAN kayıt        : " + tasinan.length);
console.log("   ↳ `dayanak:` KORUNMUŞ           : " + dayanakli.length);
console.log("   ↳ 🔴 `dayanak:` EZİLMİŞ          : " + ezilen.length);
console.log("konum düzeltmesi ALMAYAN kayıt     : " + hicTasinmayan.length);
console.log("   ↳ `dayanak:` yine de YOK        : " + hicTasinmayanDayanaksiz.length
  + "   ← bu AYRI bir kalem (düzeltmeyle ilgisiz)");

if (ezilen.length) {
  console.log("\n=== 🔴 DAYANAĞI EZİLEN KAYITLAR ===");
  for (const y of ezilen)
    console.log("   " + y.ad.padEnd(28) + String(y.not).slice(0, 96));
}
if (hicTasinmayanDayanaksiz.length) {
  console.log("\n=== `dayanak:` hiç yazılmamış (düzeltmeyle İLGİSİZ) ===");
  for (const y of hicTasinmayanDayanaksiz.slice(0, 12))
    console.log("   " + y.ad.padEnd(28) + "not: " + String(y.not || "(YOK)").slice(0, 70));
  if (hicTasinmayanDayanaksiz.length > 12)
    console.log("   … +" + (hicTasinmayanDayanaksiz.length - 12));
}

// düzeltme notu MÜKERRER mi — aynı taşıma iki kez yazılmış mı
const mukerrer = tasinan.filter(y =>
  (String(y.not).match(/konum denetle\.py/g) || []).length > 1);
console.log("\n=== YAN BULGU: düzeltme notu MÜKERRER yazılan kayıt: "
  + mukerrer.length + " ===");
for (const y of mukerrer.slice(0, 5))
  console.log("   " + y.ad.padEnd(28)
    + (String(y.not).match(/konum denetle\.py/g) || []).length + " kez");

// KENDİ İDDİAMI ÖLÇÜYORUM.
//
// KAMERIKA partisinin commit mesajında şunu yazdım:
//   "her kayıtta kaynak:'bulunamadi', akademik dayanak not: alanında
//    ADIYLA yazılı"
// İkinci tur kaynak denetimi 199 KAMERIKA kaydını "çıplak" kovasına attı.
// İkisi çelişiyor. Hangisi doğru — ve çelişiyorlarsa BENİM iddiam yanlıştı.
//
// 🔴 Kendi partimin kaydını "temiz" varsaymıyorum. Bu proje aynı hatayı
//   kaydediyor: bir oturum kendi aletinin çıktısından genelleme yapıp
//   MEVCUT kayıtları suçlamıştı (Taos · Acoma · Santa Fe) — o BENDİM,
//   ve düzeltmesi ölçmekle geldi. Şimdi ters yönü sınıyorum: kendi
//   kaydımı iyi sanıyor olabilir miyim?
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
global.window = {};
eval(fs.readFileSync("data/yerlesimler_kamerika.js", "utf8"));
const Y = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);
console.log("KAMERIKA partisi: " + Y.length + " kayıt\n");

const alan = {};
for (const y of Y) for (const a of Object.keys(y)) alan[a] = (alan[a] || 0) + 1;
console.log("ALAN DOLULUĞU: " + Object.entries(alan).sort((a, b) => b[1] - a[1])
  .map(([k, v]) => k + ":" + v).join(" · "));

const KUT = /HSAI|Handbook|Dictionary|University|Press|Bulletin|Atlas|Encyclop|Survey|Council|Library|Archives|Museum|Journal|Smithsonian|Weber|Black|Gubser|Birket|Steward/;
const kova = { hem: [], sadece_not: [], sadece_kaynak: [], hicbiri: [] };
for (const y of Y) {
  const k = KUT.test(String(y.kaynak || ""));
  const n = KUT.test(String(y.not || ""));
  if (k && n) kova.hem.push(y);
  else if (n) kova.sadece_not.push(y);
  else if (k) kova.sadece_kaynak.push(y);
  else kova.hicbiri.push(y);
}
console.log("\nKÜTÜK ADI GEÇEN ALAN:");
console.log("  hem `kaynak:` hem `not:` : " + kova.hem.length);
console.log("  yalnız `not:`            : " + kova.sadece_not.length);
console.log("  yalnız `kaynak:`         : " + kova.sadece_kaynak.length);
console.log("  🔴 HİÇBİRİ               : " + kova.hicbiri.length);

console.log("\n=== 🔴 KÜTÜK ADI GEÇMEYEN KAYITLAR — gerçekten dayanaksız mı? ===");
for (const y of kova.hicbiri.slice(0, 8)) {
  console.log("\n  " + y.ad);
  console.log("    kaynak: " + String(y.kaynak || "(YOK)").slice(0, 200));
  console.log("    not   : " + String(y.not || "(YOK)").slice(0, 200));
}
if (kova.hicbiri.length > 8) console.log("\n  … +" + (kova.hicbiri.length - 8));

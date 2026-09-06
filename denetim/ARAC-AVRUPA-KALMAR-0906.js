// KALMAR BİRLİĞİ ASİMETRİSİ — aynı birlik, atlasta İKİ FARKLI işlem görüyor mu?
//
// BALKAN'ın öncülü: "`isvec` muhtemelen §3.5.0③ sınıfı (ikisi de doğru, farklı
// şey ölçüyor — ad/unvan ömrü ≠ tasarruf sürekliliği)". Koordinatör: "ÖLÇ,
// o bir öncel, hüküm DEĞİL."
//
// ③ SINAVI: o sınıf ancak ÖNCÜL KÜNYE YOKSA geçerlidir (`sardinya` vakası).
// Burada `isvec-birlik-oncesi` VAR. Asıl soru: proje bu ayrımı BAŞKA YERDE
// yapıyor mu? Yapıyorsa ③ değil, TUTARSIZLIK demektir.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const say = (f) => N.filter(f).length;
const don = (z) => (z.s || []);

console.log("=== KALMAR BİRLİĞİ (1397-1523) — ATLASTA NASIL MODELLENMİŞ? ===");
console.log("");
console.log("NORVEÇ tarafı:");
console.log("   norvec-kralligi kullanan          : " +
  say(z => don(z).some(p => p.d === "norvec-kralligi")));
console.log("   1537-1814 danimarka ile yazılmış  : " +
  say(z => don(z).some(p => p.d === "danimarka" && p.f === "1537-01-01")));
console.log("   1281'den beri doğrudan norvec     : " +
  say(z => don(z).some(p => p.d === "norvec" && p.f < "1905-06-07")));
console.log("");
console.log("İSVEÇ tarafı:");
console.log("   isvec-birlik-oncesi kullanan      : " +
  say(z => don(z).some(p => p.d === "isvec-birlik-oncesi")));
console.log("   1281'den beri doğrudan isvec      : " +
  say(z => don(z).some(p => p.d === "isvec" && p.f < "1523-06-06")));
console.log("");
console.log("DANİMARKA tarafı (birliğin LİDERİ):");
console.log("   danimarka künyesi                 : 1281-01-01 -> 1923-10-29 (tek blok)");
console.log("   1281'den beri doğrudan danimarka  : " +
  say(z => don(z).some(p => p.d === "danimarka" && p.f === "1281-01-01")));
console.log("");
console.log("⇒ Norveç'te birlik AYRI KÜNYELERLE modellenmiş, İsveç'te MODELLENMEMİŞ.");
console.log("  Aynı tarihsel olay, atlasta iki farklı işlem.");

console.log("");
console.log("--- İSVEÇ: 1281'den beri doğrudan `isvec` yazan noktalar (TAM zincir) ---");
let n = 0;
for (const z of N) {
  if (!don(z).some(p => p.d === "isvec" && p.f < "1523-06-06")) continue;
  n++;
  if (n <= 6)
    console.log("   " + z.ad.padEnd(18) +
      don(z).map(p => p.f + ">" + p.t + " " + p.d).join(" | ").slice(0, 88));
}
console.log("   ... toplam " + n + " nokta");

console.log("");
console.log("--- NORVEÇ EMSALİ: tam zincir nasıl görünüyor ---");
let m = 0;
for (const z of N) {
  if (!don(z).some(p => p.d === "norvec-kralligi")) continue;
  m++;
  if (m <= 4)
    console.log("   " + z.ad.padEnd(18) +
      don(z).map(p => p.f + ">" + p.t + " " + p.d).join(" | ").slice(0, 100));
}

console.log("");
console.log("--- `isvec` kimliğini 1523 ÖNCESİ kullanan noktalar HANGİ DOSYADA ---");
const dosya = {};
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A)
      if (y && y.s && y.s.some(p => p.d === "isvec" && p.f < "1523-06-06"))
        dosya[f] = (dosya[f] || 0) + 1;
  }
}
for (const [f, c] of Object.entries(dosya).sort((a, b) => b[1] - a[1]))
  console.log("   " + String(c).padStart(4) + "  " + f);

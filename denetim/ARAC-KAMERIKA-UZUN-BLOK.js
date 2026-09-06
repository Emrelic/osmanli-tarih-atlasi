// 🔴 KENDİ PARTİMİ TARIYORUM — Moskito kusuru başka nerede olabilir?
//
// `Río Tinto` kusuru şu desendeydi: TEK BİR `s:` dönemi, uzun, ve
// 1923'te bitiyor — yani "bir kez şu devletin oldu, bir daha hiç
// değişmedi". `§3.5.-1`in Harput dersi tam bunu söylüyor:
//   «bir bölgenin EN AYRINTILI modellenmiş yeri, EN AZ ayrıntılı
//    kaydını en iyi ele veren yerdir» — Harput üçlüsü TEK 184 yıllık
//    bloktu ve komşuları 4'er dönem taşıyordu.
//
// Bu alet o deseni sayar: tek dönemli, uzun, 1923'te biten kayıtlar —
// VE komşularının kaç dönem taşıdığını yanına yazar.
// ⚠️ Bu bir KUSUR LİSTESİ DEĞİL bir ŞÜPHE LİSTESİ: tek dönem meşru
//   olabilir (bir yer gerçekten hiç el değiştirmemiş olabilir).
//
// kullanım: node denetim/ARAC-KAMERIKA-UZUN-BLOK.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const ESIK_YIL = 150;

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const HEPSI = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") HEPSI.push([y, f]);
}
const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};
const yil = (a, b) => (Date.parse(b) - Date.parse(a)) / 864e5 / 365.2425;

const benim = HEPSI.filter(([, f]) => f === "yerlesimler_kamerika.js");
console.log("KAMERIKA partisi: " + benim.length + " kayıt\n");

const suphe = [];
for (const [y, f] of benim) {
  if (!Array.isArray(y.s) || y.s.length !== 1) continue;
  const p = y.s[0];
  if (p.t !== "1923-10-29") continue;
  const u = yil(p.f, p.t);
  if (u < ESIK_YIL) continue;
  // komşuların dönem sayısı
  const kom = HEPSI.map(([o]) => [km(y.lat, y.lon, o.lat, o.lon), o])
    .filter(x => x[0] > 0.01 && x[0] <= 600).sort((a, b) => a[0] - b[0]).slice(0, 5);
  const ort = kom.length
    ? (kom.reduce((s, x) => s + ((x[1].s || []).length), 0) / kom.length) : 0;
  suphe.push([u, y, p, kom, ort]);
}
suphe.sort((a, b) => b[0] - a[0]);
console.log("TEK DÖNEMLİ · " + ESIK_YIL + "+ YIL · 1923'te biten: " + suphe.length + "\n");
for (const [u, y, p, kom, ort] of suphe) {
  const im = ort >= 2 ? "🔴" : "🟡";
  console.log(im + " " + Math.round(u).toString().padStart(3) + " yıl  "
    + y.ad.padEnd(34) + p.d.padEnd(16)
    + " komşu ort. dönem " + ort.toFixed(1));
  console.log("        " + p.f + " → " + p.t
    + "   komşular: " + kom.map(x => x[1].ad + "(" + ((x[1].s || []).length) + ")").join(" · "));
}
console.log("\n⚠️ 🔴 = komşuları ortalama 2+ dönem taşıyor, bu kayıt TEK dönem");
console.log("   ⇒ ŞÜPHE, kusur DEĞİL. Her satır ayrıca ölçülür.");

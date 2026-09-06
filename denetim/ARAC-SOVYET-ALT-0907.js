// `sovyet-rusya` — İKİ ALT SORU (Emre'nin sevki, 7 Eylül)
//   ① Ukrayna SSC · Belarus SSC ayrı kimlik olmalı mı — KÜNYE TARANIR
//   ② Riga hattı (1921-03-18): 65'in içinde POLONYA tarafına düşen var mı
//
// 🔴 id TAHMİN EDİLMEZ, `devletler.js` TARANIR (`§4` · `urdun-emirligi`
//    ve `ingiliz-hindistani` emsalleri).
// 🔴 Hat bir BOYLAM VARSAYIMIYLA değil, VERİNİN KENDİ `polonya` noktalarıyla
//    ölçülür — atlasın çizdiği sınır neredeyse, ölçüt odur.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";

function baglam(y) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window;
}
const DEV = baglam("data/devletler.js").DEVLETLER || [];
const BOYALAR = new Set(
  (fs.readFileSync("arac/renkler.py", "utf8").match(/^\s*"([a-z0-9-]+)":\s*\(/gm) || [])
    .map(s => s.match(/"([a-z0-9-]+)"/)[1]));
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
const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};

console.log("=== ① UKRAYNA · BELARUS KİMLİĞİ — devletler.js TARANDI ===");
const DESEN = /ukray|ukrain|belarus|beyaz-rus|litvan-belarus|galic|volhin|podol/i;
let bulundu = 0;
for (const k of DEV) {
  const metin = [k.id, k.ad, k.ozet].join(" ");
  if (DESEN.test(metin)) {
    bulundu++;
    const anah = k.harita || k.id;
    console.log("   " + k.id.padEnd(30) + k.f + " -> " + k.t +
      "   " + (BOYALAR.has(anah) ? "renk✓" : "🔴 renk YOK") +
      "   [" + (k.bolge || "?") + "]");
    if (!/ukray|belarus|beyaz/i.test(k.id))
      console.log("        (ad/özetten eşleşti: " + String(k.ad).slice(0, 50) + ")");
  }
}
if (!bulundu) console.log("   🔴 HİÇBİRİ YOK");

// veride kullanım
const kullanim = {};
for (const y of N) for (const p of (y.s || []))
  if (DESEN.test(String(p.d))) kullanim[p.d] = (kullanim[p.d] || 0) + 1;
console.log("   veride kullanım: " +
  (Object.keys(kullanim).length ? JSON.stringify(kullanim) : "🔴 0"));

console.log("");
console.log("=== ② RİGA HATTI — atlasın KENDİ `polonya` sınırı ===");
const pol = N.filter(y => sahip(y) === "polonya");
const sov = N.filter(y => sahip(y) === "sovyet-rusya");
console.log("   `polonya` 1923-10-28: " + pol.length + " nokta");
pol.sort((a, b) => b.lon - a.lon);
console.log("   EN DOĞU 6 `polonya` noktası (sınırın atlas tarafı):");
for (const y of pol.slice(0, 6))
  console.log("      " + y.ad.padEnd(26) + y.lat.toFixed(2) + "  " + y.lon.toFixed(2));
const polEnDogu = pol[0];
console.log("");
const enBati = sov.filter(y => y.lat >= 46).sort((a, b) => a.lon - b.lon).slice(0, 8);
console.log("   EN BATI 8 `sovyet-rusya` noktası (lat>=46):");
for (const y of enBati)
  console.log("      " + y.ad.padEnd(26) + y.lat.toFixed(2) + "  " + y.lon.toFixed(2));
console.log("");
console.log("   🔴 `polonya`nın en doğusu " + polEnDogu.lon.toFixed(2) +
  "° · `sovyet-rusya`nın en batısı " + enBati[0].lon.toFixed(2) + "°");
const cakisan = sov.filter(y => y.lon < polEnDogu.lon && y.lat >= 46);
console.log("   `polonya`nın en doğu noktasından BATIDA kalan sovyet noktası: " +
  cakisan.length);
for (const y of cakisan)
  console.log("      🟡 " + y.ad.padEnd(26) + y.lat.toFixed(2) + "  " + y.lon.toFixed(2));

console.log("");
console.log("=== ③ 1921-03-18 (Riga) VERİDE KULLANILIYOR MU ===");
let riga = 0;
for (const y of N) for (const alan of ["d", "s", "v"])
  for (const p of (y[alan] || []))
    if (p.f === "1921-03-18" || p.t === "1921-03-18") {
      riga++;
      console.log("   " + y.ad.padEnd(26) + alan + ": " + p.f + " -> " + p.t +
        "  " + (p.d || ""));
    }
if (!riga) console.log("   🔴 `1921-03-18` veride HİÇ KULLANILMIYOR");

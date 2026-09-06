// 🔴 İKİ ŞÜPHELİ `abd` KAYDI — kaba anakara kutum ötüyor, ÖLÇÜYORUM.
//
// Tehuantepec  (16,32 · -95,24)  → OAXACA, MEKSİKA
// St. John's   (47,56 · -52,71)  → NEWFOUNDLAND, İngiliz dominyonu
// İkisi de `abd 1783-09-03 → 1923-10-29` taşıyor. 1783-09-03 Paris
// Antlaşması — ABD'nin bağımsızlığı. O gün ne Oaxaca ne Newfoundland
// Amerikan toprağıydı.
//
// 🔴 AMA ALETİN ÖTÜŞÜ, ÖTME SEBEBİNİ SÖYLEMEZ (§11, ve bu dersi geçen
//   turda ben kendi üzerimde öğrendim: Taos·Acoma·Santa Fe'yi BAKMADAN
//   suçlamıştım). Önce KAYDI okuyorum, sonra komşusunu.
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const HEDEF = ["Tehuantepec", "St. John's (Newfoundland)"];
const G = "1923-10-28";

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};
const sahipG = y => {
  const p = (y.s || []).find(q => q.f <= G && G < q.t);
  return p ? p.d : "(sahipsiz)";
};

for (const ad of HEDEF) {
  const e = K.find(([y]) => y.ad === ad);
  if (!e) { console.log("🔴 YOK: " + ad); continue; }
  const [y, f] = e;
  console.log("=".repeat(74));
  console.log(y.ad + "   (" + y.lat + ", " + y.lon + ")   [" + f + "]");
  console.log("   ALANLAR: " + Object.keys(y).sort().join(" · "));
  console.log("   kur: " + (y.kur || "—"));
  for (const p of (y.s || [])) console.log("     s: " + p.f + " → " + p.t + "  " + p.d);
  if (y.kaynak) console.log("   kaynak: " + String(y.kaynak).slice(0, 200));
  if (y.not) console.log("   not   : " + String(y.not).slice(0, 300));
  // komşular — konvansiyon
  const kom = K.map(([o, ff]) => [km(y.lat, y.lon, o.lat, o.lon), o, ff])
    .filter(x => x[0] > 0.01).sort((a, b) => a[0] - b[0]).slice(0, 6);
  console.log("\n   EN YAKIN 6 KOMŞU (1923'te kim):");
  for (const [d, o, ff] of kom)
    console.log("     " + d.toFixed(0).padStart(5) + " km  " + o.ad.padEnd(32)
      + sahipG(o).padEnd(22) + "[" + ff + "]");
}

// 1783-09-03 gününü kim daha kullanıyor
console.log("\n" + "=".repeat(74));
console.log("`1783-09-03` gününü KULLANAN DÖNEMLER (küresel):");
let n = 0;
for (const [y, f] of K) for (const kat of ["s", "d", "v", "isg"])
  for (const p of (Array.isArray(y[kat]) ? y[kat] : []))
    if (p.f === "1783-09-03" || p.t === "1783-09-03") {
      n++;
      console.log("   " + y.ad.padEnd(34) + kat + ": " + p.f + " → " + p.t
        + "  " + (p.d || p.k || "") + "   [" + f + "]");
    }
console.log("   toplam: " + n);

// 🔴 MOSKİTO KIYISI — `ingiltere 1732 → 1923` GERÇEK BİR KİMLİK HATASI MI?
//
// Bulgu: iki hakemli makalenin BAŞLIĞI bile dönemi veriyor —
//   HAHR 63/4: "William Pitt's Settlement at Black River on the Mosquito
//     Shore: A Challenge to Spain in Central America, **1732-87**"
//   The Americas (Cambridge): "The Evacuation of the Mosquito Shore and
//     the English Who Stayed Behind, **1786-1800**" — ve tahliye edilecek
//     bölge «sixty miles east of Trujillo ... along some 550 miles of coast»,
//     yani Black River DÂHİL.
// ⇒ İngilizler 1787'de TAHLİYE ETTİ; veri 1923'e kadar `ingiltere` boyuyor.
//
// 🔴 AMA HÜKÜM VERMEDEN ÖNCE KOMŞU KONVANSİYONU: 1787'den sonra o kıyı
//   atlasta hangi kimliği taşıyor? Kendi cevabımı ICAT ETMEM — komşuya
//   sorarım. (§11: kardeşin konvansiyonunu izle.)
//
// kullanım: node denetim/ARAC-MOSKITO-SINA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const HEDEF = { ad: "Río Tinto (Black River, Moskito kıyısı)", lat: 15.85, lon: -84.85 };

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
const zin = y => (y.s || []).map(p => p.d + " " + p.f + "→" + p.t).join("\n            ");

console.log("HEDEF: " + HEDEF.ad + "\n");
const yakin = K.map(([y, f]) => [km(HEDEF.lat, HEDEF.lon, y.lat, y.lon), y, f])
  .sort((a, b) => a[0] - b[0]).slice(0, 10);
console.log("EN YAKIN 10 KOMŞU — 1787 sonrası hangi kimliği taşıyorlar:");
for (const [d, y, f] of yakin) {
  console.log("\n  " + d.toFixed(0).padStart(4) + " km  " + y.ad + "   [" + f + "]");
  console.log("            " + (zin(y) || "(s: yok)"));
}

// aynı kıyıda 1787-1923 arası hangi kimlikler kullanılıyor
console.log("\n" + "=".repeat(72));
console.log("ORTA AMERİKA KIYISI (13-18K / 89-83B) · 1800-01-01'de kim:");
const kutu = K.filter(([y]) => y.lat >= 13 && y.lat <= 18 && y.lon >= -89 && y.lon <= -83);
const G = "1800-01-01";
const say = {};
for (const [y, f] of kutu) {
  const p = (y.s || []).find(q => q.f <= G && G < q.t);
  const k = p ? p.d : "(sahipsiz)";
  say[k] = (say[k] || 0) + 1;
  console.log("   " + y.ad.padEnd(38) + k + "   [" + f + "]");
}
console.log("   dağılım: " + Object.entries(say).map(([k, v]) => k + " " + v).join(" · "));

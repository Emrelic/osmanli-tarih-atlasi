// ⑨ TRİYAJ METROPOL — AMERİKA + OKYANUSYA DİLİMİ · TABAN ÖLÇÜMÜ.
//
// 🔴 B10: DEVRALDIĞIM SAYIYI DOĞRULAMADAN KULLANMIYORUM. Koordinatörün
//   ölçümü 803 anakara-dışı nokta diyor (Britanya 384 · Fransa 226 ·
//   İtalya 84 · Portekiz 50 · Belçika 50). Kendi dilimimi kendim sayıyorum.
//
// 🔴 VE ALETİN `METROPOL` LİSTESİNDE İKİ EKSİK VAR — benim dilimimde ikisi de
//   canlı: `danimarka` (Grönland) ve `abd` (Porto Riko · Filipinler · Guam).
//   Koordinatörün listesi sekiz Avrupa metropolüyle sınırlı. Bu bir kusur
//   değil bir KAPSAM sınırı, ama sayılmazsa dilimim eksik çıkar.
//   ⇒ Listeyi GENİŞLETİYORUM ve genişletmenin ne getirdiğini AYRI sayıyorum.
//
// kullanım: node denetim/ARAC-TRIYAJ-METROPOL-AMERIKA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

// koordinatörün sekizi + benim dilimimde canlı olan ikisi
const METROPOL = {
  "ingiltere":         { ad: "Britanya", la: [49.8, 61.0], lo: [-11.0, 2.0], kaynak: "koordinatör" },
  "fransa-cumhuriyet": { ad: "Fransa", la: [41.0, 51.5], lo: [-5.5, 9.6], kaynak: "koordinatör" },
  "ispanya":           { ad: "İspanya", la: [35.9, 43.9], lo: [-9.6, 3.4], kaynak: "koordinatör" },
  "portekiz":          { ad: "Portekiz", la: [36.8, 42.2], lo: [-9.6, -6.1], kaynak: "koordinatör" },
  "hollanda":          { ad: "Hollanda", la: [50.7, 53.6], lo: [3.3, 7.3], kaynak: "koordinatör" },
  "belcika":           { ad: "Belçika", la: [49.4, 51.6], lo: [2.5, 6.5], kaynak: "koordinatör" },
  "italya":            { ad: "İtalya", la: [36.6, 47.1], lo: [6.6, 18.6], kaynak: "koordinatör" },
  "almanya":           { ad: "Almanya", la: [47.2, 55.1], lo: [5.8, 15.1], kaynak: "koordinatör" },
  // 🆕 BENİM EKLEDİKLERİM
  "danimarka":         { ad: "Danimarka", la: [54.5, 57.8], lo: [8.0, 12.7], kaynak: "AMERİKA ekledi" },
  "abd":               { ad: "ABD (kıta)", la: [24.5, 49.4], lo: [-125.0, -66.9], kaynak: "AMERİKA ekledi" },
};

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
if (K.length < 3000) throw new Error("SESSİZ SIFIR ŞÜPHESİ: " + K.length);
console.log("girdi: " + dosyalar.length + " dosya · " + K.length + " nokta");

// bekleyen yamaların KAPSADIĞI noktalar — bunlar zaten çözülüyor
const KAPSANAN = new Set();
for (const f of ["yer_yama_guyana.js", "yer_yama_amerika_1923.js", "yer_yama_moskito.js"]) {
  const yol = path.join("denetim", f);
  if (!fs.existsSync(yol)) { console.log("  ⚠️ yama yok: " + f); continue; }
  global.window = {};
  eval(fs.readFileSync(yol, "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const r of global.window[k]) KAPSANAN.add(r.ad);
}
console.log("bekleyen yamaların kapsadığı nokta: " + KAPSANAN.size);

const benim = K.filter(([y]) => BENIM.includes(bolge(y)));
console.log("dilimim (KUZEY-AMERIKA · GUNEY-ORTA-AMERIKA · OKYANUSYA): " + benim.length + "\n");

const aday = [];
for (const [y, f] of benim) {
  const sp = (y.s || []).find(p => p.f <= G && G < p.t);
  if (!sp) continue;
  const m = METROPOL[sp.d];
  if (!m) continue;
  const icinde = y.lat >= m.la[0] && y.lat <= m.la[1] && y.lon >= m.lo[0] && y.lon <= m.lo[1];
  if (icinde) continue;                       // anakarada — konu değil
  aday.push({ ad: y.ad, lat: +y.lat.toFixed(3), lon: +y.lon.toFixed(3),
    kimlik: sp.d, metropol: m.ad, listeKaynagi: m.kaynak,
    donem: sp.f + " → " + sp.t, dosya: f, kapsanan: KAPSANAN.has(y.ad) });
}

console.log("=".repeat(74));
console.log("ANAKARA DIŞI METROPOL KİMLİĞİ · dilimim · " + G);
console.log("=".repeat(74));
const grup = {};
for (const a of aday) (grup[a.kimlik] = grup[a.kimlik] || []).push(a);
for (const [k, v] of Object.entries(grup).sort((a, b) => b[1].length - a[1].length)) {
  const kaps = v.filter(x => x.kapsanan).length;
  console.log("\n" + k + "   " + v.length + " nokta"
    + (kaps ? "  (bekleyen yamada kapsanan: " + kaps + ")" : "")
    + "   [liste: " + v[0].listeKaynagi + "]");
  for (const a of v.sort((x, y) => x.lon - y.lon))
    console.log("   " + (a.kapsanan ? "✓" : " ") + " " + a.ad.padEnd(34)
      + ("(" + a.lat + ", " + a.lon + ")").padEnd(20) + a.donem);
}
const kapsanan = aday.filter(a => a.kapsanan).length;
console.log("\n" + "-".repeat(74));
console.log("TOPLAM aday          : " + aday.length);
console.log("   bekleyen yamada   : " + kapsanan + "  (bunlar ZATEN çözülüyor)");
console.log("   TRİYAJ EDİLECEK   : " + (aday.length - kapsanan));
const eklenen = aday.filter(a => a.listeKaynagi !== "koordinatör").length;
console.log("   listeyi genişletmenin getirdiği: " + eklenen
  + "  (danimarka + abd — koordinatörün listesinde YOKTU)");

fs.writeFileSync("denetim/_triyaj_taban_amerika.json",
  JSON.stringify(aday, null, 1) + "\n", "utf8");
console.log("\n-> denetim/_triyaj_taban_amerika.json (ara çıktı)");

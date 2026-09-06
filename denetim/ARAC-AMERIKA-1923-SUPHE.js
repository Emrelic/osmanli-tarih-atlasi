// İLK ŞÜPHELİLER — taban ölçümünden çıkan üç soru.
// kullanım: node denetim/ARAC-AMERIKA-1923-SUPHE.js
const fs = require("fs");
const path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const GUN = "1923-10-28";
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const Y = [];
const kaynakDosya = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", f), "utf8"));
  for (const k of Object.keys(global.window))
    if (Array.isArray(global.window[k]))
      for (const y of global.window[k]) { Y.push(y); kaynakDosya.set(y, f); }
}
const aktif = (a, g) => Array.isArray(a) ? (a.find(p => p.f <= g && g < p.t) || null) : null;
function sahip(y, g) {
  const d = aktif(y.d, g); if (d) return "OSMANLI";
  const v = aktif(y.v, g); if (v) return v.k || "tabi";
  const s = aktif(y.s, g); if (s) return s.d;
  return null;
}

// künye ömürleri
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);
const OMUR = {};
for (const d of D) if (d && d.id) OMUR[d.id] = [d.f, d.t, d.ad];

const benim = Y.filter(y => typeof y.lat === "number" && BENIM.includes(bolge(y)));

console.log("=== ① 1923'te KÜNYESİ BİTMİŞ bir kimlikle çizilen nokta (HAYALET) ===");
let n1 = 0;
for (const y of benim) {
  const k = sahip(y, GUN);
  if (!k || k === "OSMANLI" || !OMUR[k]) continue;
  const [f, t] = OMUR[k];
  if (t <= GUN) {
    n1++;
    console.log("  " + y.ad.padEnd(34) + k.padEnd(24) + "künye " + f + ".." + t
      + "   [" + kaynakDosya.get(y) + "]");
  }
}
console.log("  toplam: " + n1);

console.log("\n=== ② `ingiliz-kuzey-amerika` 1923'te kimlerde ===");
for (const y of benim) if (sahip(y, GUN) === "ingiliz-kuzey-amerika") {
  const s = aktif(y.s, GUN);
  console.log("  " + y.ad.padEnd(34) + s.f + " → " + s.t
    + "   [" + kaynakDosya.get(y) + "]");
}
console.log("  künye ömrü: " + (OMUR["ingiliz-kuzey-amerika"] || []).join(" .. "));

console.log("\n=== ③ OKYANUSYA kovasındaki `sovyet-rusya` — coğrafî kontrol ===");
const sr = benim.filter(y => sahip(y, GUN) === "sovyet-rusya");
const lo = sr.map(y => y.lon), la = sr.map(y => y.lat);
console.log("  nokta: " + sr.length + " · boylam " + Math.min(...lo).toFixed(1)
  + " → " + Math.max(...lo).toFixed(1) + " · enlem " + Math.min(...la).toFixed(1)
  + " → " + Math.max(...la).toFixed(1));
console.log("  örnek: " + sr.slice(0, 8).map(y => y.ad).join(" · "));

console.log("\n=== ④ SAHİPSİZ 92 — ne bunlar? ===");
const sz = benim.filter(y => !sahip(y, GUN));
const kova = {};
for (const y of sz) { const b = bolge(y); kova[b] = (kova[b] || 0) + 1; }
console.log("  " + Object.entries(kova).map(([k, v]) => k + " " + v).join(" · "));
const bitli = sz.filter(y => y.bit), beyanli = sz.filter(y => y.kasitli_bosluk);
console.log("  `bit:` taşıyan (yerleşim SONA ERMİŞ): " + bitli.length);
console.log("  `kasitli_bosluk` beyanlı            : " + beyanli.length);
console.log("  ikisi de YOK (şüpheli)              : "
  + sz.filter(y => !y.bit && !y.kasitli_bosluk).length);
for (const y of sz.filter(y => !y.bit && !y.kasitli_bosluk).slice(0, 12))
  console.log("     " + y.ad.padEnd(34) + "[" + kaynakDosya.get(y) + "]");

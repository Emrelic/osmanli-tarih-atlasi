// ÜÇ GUYANA — TABAN ÖLÇÜMÜ.
//
// 🔴 KÜNYENİN `f:`İ BİR KAYNAK DEĞİLDİR (§4). Şartname
//   "`fransiz-guyanasi f:1817`" diyor; o günün NEYİ tarihlediği AYRICA
//   ölçülecek. Bu alet yalnız DURUMU ölçer, tarih ÖNERMEZ.
//
// kullanım: node denetim/ARAC-GUYANA-TABAN.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

const ID = ["ingiliz-guyanasi", "hollanda-guyanasi", "fransiz-guyanasi"];
// Guyanalar kutusu: 1,0K–8,7K / 61,5B–51,5B  (Orinoco ağzı → Oyapock)
const KUTU = { la: [1.0, 8.7], lo: [-61.5, -51.0] };

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const kayit = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) kayit.push([y, f]);
}

console.log("=== A · KÜNYELER ===");
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);
for (const id of ID) {
  const d = D.find(x => x && x.id === id);
  if (!d) { console.log("  🔴 KÜNYE YOK: " + id); continue; }
  console.log("  " + id.padEnd(20) + d.f + " .. " + d.t + "   " + d.ad);
  console.log("      harita : " + (d.harita || "(yok — id ile boyanır)"));
  console.log("      kaynak : " + String(d.kaynak || "(BOŞ)").slice(0, 150));
  console.log("      ozet   : " + String(d.ozet || "(BOŞ)").slice(0, 200));
}

console.log("\n=== B · BU KİMLİKLERİ VERİDE KULLANAN DÖNEM ===");
for (const id of ID) {
  let n = 0;
  for (const [y] of kayit) for (const kat of ["s", "d", "v", "isg"])
    for (const p of (Array.isArray(y[kat]) ? y[kat] : []))
      if (p.d === id || p.k === id) n++;
  console.log("  " + id.padEnd(20) + n + " dönem" + (n ? "" : "   🔴 SIFIR — künye ÂTIL"));
}

console.log("\n=== C · KUTUDAKİ NOKTALAR ve BUGÜNKÜ ZİNCİRLERİ ===");
const ic = kayit.filter(([y]) => typeof y.lat === "number" &&
  y.lat >= KUTU.la[0] && y.lat <= KUTU.la[1] &&
  y.lon >= KUTU.lo[0] && y.lon <= KUTU.lo[1]);
console.log("  kutu " + KUTU.la.join("–") + "K / " + KUTU.lo.join("–")
  + "  ⇒ " + ic.length + " nokta");
for (const [y, f] of ic.sort((a, b) => a[0].lon - b[0].lon)) {
  console.log("\n  " + y.ad + "   (" + y.lat.toFixed(2) + ", " + y.lon.toFixed(2)
    + ")  kur:" + (y.kur || "—") + "   [" + f + "]");
  for (const kat of ["d", "v", "s", "isg"])
    for (const p of (Array.isArray(y[kat]) ? y[kat] : []))
      console.log("      " + kat + ": " + p.f + " → " + p.t + "  " + (p.d || p.k || ""));
  if (y.kaynak) console.log("      kaynak: " + String(y.kaynak).slice(0, 110));
}

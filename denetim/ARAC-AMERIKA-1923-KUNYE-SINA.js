// KÜNYE KESİMİNİN ÖN KOŞULU — ve `ARAC-AMERIKA-1923-SUPHE.js ②`nin KÖR NOKTASI.
//
// 🔴 ② şunu sordu: "1923-10-28'de bu künyeyi kim kullanıyor?" → 3 nokta.
//   AMA künyeyi 1867'de kesmek, 1867'yi AŞAN HER dönemi hayalet yapar.
//   1923'te bitmeyen ama 1870'te ya da 1900'de biten bir dönem ②'nin
//   sorusuna HİÇ DÜŞMEZ. Kesim kararı için doğru soru "1923'te kim"
//   değil, "KESİM GÜNÜNÜ AŞAN dönem var mı" — ve evren KÜRESEL olmalı,
//   çünkü künye kesimi bölge tanımaz.
//   `§11`: bir denetimin KAPSAMI, doğruluğundan AYRI ölçülür —
//   "hangi çiftleri KURUYOR" sorusu "kurduklarını doğru ölçüyor mu"dan önce gelir.
//
// kullanım: node denetim/ARAC-AMERIKA-1923-KUNYE-SINA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const KESIM = "1867-07-01", ID = "ingiliz-kuzey-amerika";

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const kayit = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) kayit.push([y, f]);
}
console.log("evren: " + kayit.length + " nokta · " + dosyalar.length + " dosya (KURESEL)");

console.log("\n=== A · " + ID + " KULLANAN HER DONEM (tarih sinirsiz, dort katman) ===");
let asan = 0, toplam = 0;
for (const [y, f] of kayit) for (const kat of ["s", "d", "v", "isg"]) {
  if (!Array.isArray(y[kat])) continue;
  for (const p of y[kat]) if (p.d === ID || p.k === ID) {
    toplam++;
    const im = p.t > KESIM ? "🔴 KESIMI ASIYOR" : "🟢 kesimin altinda";
    if (p.t > KESIM) asan++;
    console.log("  " + im + "  " + y.ad.padEnd(26) + kat + ": " + p.f + " -> " + p.t + "  [" + f + "]");
  }
}
console.log("  toplam donem: " + toplam + " · kesimi ASAN: " + asan);
console.log("  ⇒ yama " + asan + " donemi kesmeli; eksik kalan her biri HAYALET olur.");

console.log("\n=== B · kanada KULLANAN DONEMLERIN EN ERKENI ===");
let en = null, nk = 0;
for (const [y] of kayit) for (const p of (y.s || [])) if (p.d === "kanada") {
  nk++; if (!en || p.f < en[0]) en = [p.f, y.ad];
}
console.log("  " + nk + " donem · en erken: " + (en ? en[0] + "  (" + en[1] + ")" : "yok"));

console.log("\n=== C · KUNYE OMURLERI ===");
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);
for (const id of [ID, "kanada"]) {
  const d = D.find(x => x && x.id === id);
  console.log("  " + id.padEnd(24) + (d ? d.f + " .. " + d.t + "   " + d.ad : "🔴 KUNYE YOK"));
}

console.log("\n=== D · DEGISMEZ 2 — kesim gunu CEKIRDEKTE maddeli mi ===");
const olay = [];
for (const f of fs.readdirSync("data")) if (/^olaylar.*\.js$/.test(f)) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", f), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const o of global.window[k]) olay.push(o);
}
const g = s => Math.round(
  Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5);
const hedef = g(KESIM);
const yakin = olay.filter(o => o.t &&
  Math.abs(g(o.t.length === 7 ? o.t + "-01" : o.t) - hedef) <= 30);
console.log("  cekirdek madde: " + olay.length + " · +-30 gun icinde: " + yakin.length);
for (const o of yakin) console.log("     " + o.t + "  " + String(o.b || "").slice(0, 72));

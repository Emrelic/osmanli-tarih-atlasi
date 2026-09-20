// EKO-ISYAN-0072 · bağ ölçer (salt okunur) · 20 Eylül 2026
// Kullanım: node denetim/ARAC-ISYAN-BAG-0072.js
// Ne yapar: data/ekokuma_isyan1821.js'teki her kartın her `olay:` dizgisini,
// app.js'in KENDİ `_ekNorm` + `_ekBagEslesir` fonksiyonlarıyla (dosyadan
// ayıklanıp eval edilir, yeniden YAZILMAZ) bütün kronoloji maddelerine karşı
// tarar ve kaç maddeye tuttuğunu basar. Hiçbir dosyayı DEĞİŞTİRMEZ.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const kok = path.resolve(__dirname, "..");
const sandbox = { window: {}, console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

// ① app.js'ten iki yardımcıyı AYIKLA (kopya yazmak = ikinci mekanizma, D045)
const app = fs.readFileSync(path.join(kok, "js", "app.js"), "utf8");
function fnCek(ad) {
  const bas = app.indexOf("function " + ad + "(");
  if (bas < 0) throw new Error("app.js'te bulunamadi: " + ad);
  let i = app.indexOf("{", bas), derinlik = 0;
  for (let j = i; j < app.length; j++) {
    if (app[j] === "{") derinlik++;
    else if (app[j] === "}") { derinlik--; if (derinlik === 0) return app.slice(bas, j + 1); }
  }
  throw new Error("fonksiyon kapanmadi: " + ad);
}
vm.runInContext(fnCek("_ekNorm") + "\n" + fnCek("_ekBagEslesir"), sandbox);

// ② kronoloji evreni — olaylar*.js + kronoloji*.js
const veri = path.join(kok, "data");
const dosyalar = fs.readdirSync(veri)
  .filter(f => /^(olaylar|kronoloji).*\.js$/.test(f)).sort();
let yuklenen = 0, hatali = [];
for (const f of dosyalar) {
  try { vm.runInContext(fs.readFileSync(path.join(veri, f), "utf8"), sandbox); yuklenen++; }
  catch (e) { hatali.push(f + " :: " + e.message); }
}
const maddeler = [];
for (const k of Object.keys(sandbox.window)) {
  const v = sandbox.window[k];
  if (!Array.isArray(v)) continue;
  for (const o of v) if (o && typeof o === "object" && o.t && o.b) maddeler.push({ t: o.t, b: o.b, kume: k });
}
console.log("YUKLENEN kronoloji dosyasi :", yuklenen, "/", dosyalar.length);
if (hatali.length) { console.log("YUKLENEMEYEN:"); hatali.forEach(h => console.log("   ", h)); }
console.log("KRONOLOJI MADDESI (t+b)    :", maddeler.length);

// ③ kartlar
vm.runInContext(fs.readFileSync(path.join(veri, "ekokuma_isyan1821.js"), "utf8"), sandbox);
const kartlar = sandbox.window.EKOKUMA_ISYAN1821 || [];
console.log("KART                       :", kartlar.length);
console.log("");

let toplamBag = 0, tutmayan = 0;
for (const kart of kartlar) {
  console.log("== " + kart.id + "   [tur: " + kart.tur + "]");
  for (const bag of (kart.olay || [])) {
    toplamBag++;
    const tutan = maddeler.filter(o => sandbox._ekBagEslesir(bag, o));
    if (!tutan.length) tutmayan++;
    console.log("   " + (tutan.length ? "OK " : "YOK") + " " + tutan.length + "  " + bag);
    tutan.forEach(o => console.log("        - " + o.t + "  " + o.b.slice(0, 82) + "   (" + o.kume + ")"));
  }
  console.log("");
}
console.log("TOPLAM BAG :", toplamBag, " TUTMAYAN :", tutmayan);
process.exit(tutmayan ? 1 : 0);

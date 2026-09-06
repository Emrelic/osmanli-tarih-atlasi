// BAŞKENT TARAMASI — E kovasının GERÇEK sorusu.
//
// 🔴 Komşuluk metriği yanlış şeyi ölçtü: Karayip'te adalar birbirine
//   yakın olduğu için `kuba`nın komşusu `ingiltere` (Jamaika) ve
//   `meksika` (Yucatán) çıkıyor — İKİSİ DE DOĞRU. Metrik ADA
//   YOĞUNLUĞUNU ölçüyordu, kusuru değil. (§11: nehir geçiş metriği
//   nehri değil ATLASI ölçüyordu — aynı sınıf.)
//
// 🟢 GERÇEK SORU başka: bu ülkelerin 1923'teki BAŞKENTİ atlasta var mı?
//   `haiti` kimliğini tek başına bir Taino kasikazgosu (Jaragua)
//   taşıyor; `guatemala`yı 1776 öncesi Antigua taşıyor.
//
// 🔴 "YOK" DEMEDEN ÖNCE TARANIR, TAHMİN EDİLMEZ. Ve normalleştirici
//   ŞART: `usku` araması `Üsküp`ü bulmamış ve altı mükerrer nokta
//   yazılmak üzereymiş. Türkçe harf + diakritik + kesme normalleştirilir.
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

const HARF = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
  "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a",
  "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'", "‘": "'" };
const nrm = s => [...String(s)].map(c => HARF[c] || c).join("")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (y && y.ad) K.push([y, f]);
}
console.log("evren: " + K.length + " nokta\n");

// künyelerin `bk:` alanı var mı
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]).filter(d => d && d.id);

// [künye id, aranan başkent adları (varyantlarıyla)]
const HEDEF = [
  ["haiti", ["port-au-prince", "port au prince", "portoprens", "cap-haitien",
    "cap haitien", "cap francais", "gonaives"]],
  ["guatemala", ["guatemala city", "nueva guatemala", "ciudad de guatemala",
    "guatemala (sehir)"]],
  ["tonga-kralligi", ["nuku'alofa", "nukualofa", "nuku alofa"]],
  ["panama-cumhuriyeti", ["panama"]],
  ["dominik-cumhuriyeti", ["santo domingo"]],
  ["kuba-cumhuriyeti", ["havana", "la habana"]],
];
for (const [id, adaylar] of HEDEF) {
  const d = D.find(x => x.id === id);
  console.log("=".repeat(72));
  console.log(id + "   " + (d ? d.ad : "🔴 KÜNYE YOK"));
  if (d) console.log("   künye `bk:` alanı: "
    + (d.bk ? JSON.stringify(d.bk).slice(0, 160) : "🔴 YOK"));
  for (const a of adaylar) {
    const bul = K.filter(([y]) => nrm(y.ad).includes(nrm(a)));
    if (bul.length) for (const [y, f] of bul)
      console.log("   🟢 " + a.padEnd(20) + "→ " + y.ad.padEnd(30)
        + "(" + y.lat + ", " + y.lon + ")  [" + f + "]");
    else console.log("   🔴 " + a.padEnd(20) + "→ atlasta YOK");
  }
}

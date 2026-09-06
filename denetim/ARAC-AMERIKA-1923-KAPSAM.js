// 1867-07-01 BİR `2s` BORCU MU? — ve borcu YAMA MI doğuruyor?
//
// 🔴 Yamanın başlığına "bu gün çekirdekte ZATEN maddeli" yazmıştım.
//   ÖLÇTÜM: ±30 günde iki madde var ve ikisi de Osmanlı (Abdülaziz'in
//   seyahati · hidiv unvanı). Kanada maddesi çekirdekte YOK — hafızadan
//   aktardığım bir cümleyi ölçmeden dosyaya yazmışım.
//   ⇒ İDDİA GERİ ÇEKİLDİ. Yerine ÖLÇÜLEN iki şey konuyor:
//
//   ① GÜN ZATEN KIRILIYOR: 1867-07-01'de canlı veride 127 dönem
//      bitiyor (benim KAMERIKA partim). Yamanın eklediği 3 dönem
//      YENİ BİR GÜN AÇMIYOR — var olan bir kırılmaya katılıyor.
//      ⇒ Borç varsa BUGÜN de var; yama onu DOĞURMUYOR.
//   ② KAPSAM: `2s` yalnız Osmanlı gövdesinin ~2014 km'si içindeki
//      kırılmaları AÇIK sayar. `§11`: küre "`d:` ya da `v:` taşıyan
//      BÜTÜN noktalar"dır — başkentler DEĞİL (bir oturum tam bunu
//      varsayıp kapsamı 15 sanmıştı, gerçek 165'ti). Ölçüyorum.
//
// kullanım: node denetim/ARAC-AMERIKA-1923-KAPSAM.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const GUN = "1867-07-01";
const HEDEF = ["Quebec", "Montreal (Ville-Marie)", "Port Royal (Acadia)"];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const Y = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    Y.push(...global.window[k]);
}

// ---- ① gün canlı veride zaten kırılıyor mu ----
let kir = 0;
for (const y of Y) for (const kat of ["d", "v", "s"]) {
  if (!Array.isArray(y[kat])) continue;
  for (const p of y[kat]) if (p.f === GUN || p.t === GUN) kir++;
}
console.log("① " + GUN + " gununde CANLI veride kirilan donem ucu: " + kir);
console.log("   ⇒ yamanin ekledigi 3 uc YENI BIR GUN acmiyor; gun ZATEN kirilma gunu.");

// ---- ② kapsam: Osmanlı küresine uzaklık ----
const R = 6371, rad = x => x * Math.PI / 180;
function km(a, b, c, d) {
  const dl = rad(c - a), dg = rad(d - b);
  const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(dg / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
// 🔴 KÜRE = `d:` YA DA `v:` TAŞIYAN BÜTÜN NOKTALAR (baskentler DEGIL)
const kure = Y.filter(y => typeof y.lat === "number" &&
  ((Array.isArray(y.d) && y.d.length) || (Array.isArray(y.v) && y.v.length)));
console.log("\n② Osmanli kuresi (d: ya da v: tasiyan nokta): " + kure.length);
const lo = kure.map(y => y.lon), la = kure.map(y => y.lat);
console.log("   boylam " + Math.min(...lo).toFixed(1) + " -> " + Math.max(...lo).toFixed(1)
  + " · enlem " + Math.min(...la).toFixed(1) + " -> " + Math.max(...la).toFixed(1));

const ESIK = 2014;
for (const ad of HEDEF) {
  const y = Y.find(x => x.ad === ad);
  let en = Infinity, kim = "";
  for (const o of kure) {
    const d = km(y.lat, y.lon, o.lat, o.lon);
    if (d < en) { en = d; kim = o.ad; }
  }
  console.log("   " + ad.padEnd(26) + "en yakin Osmanli noktasi " + Math.round(en)
    + " km (" + kim + ")   " + (en > ESIK ? "🟢 KAPSAM DISI" : "🔴 KAPSAM ICI"));
}
console.log("   esik: " + ESIK + " km — kapsam disi bir kirilma `2s` ACIK sayilmaz.");

// BÖLGE BÖLÜMLEMESİNİN SIRA KUSURU — ölçüm, suçlama DEĞİL.
//
// `ARAC-BOLGE-KUTU-0906.js` cascade sırası:
//   53: la >= 12 && lo <= -50  → KUZEY-AMERIKA
//   54: la <  12 && lo <= -30  → GUNEY-ORTA-AMERIKA
//   55: lo > 100 || lo < -140  → OKYANUSYA
//   56: else                   → VOLGA-URAL-SIBIRYA
//
// 🔴 55'in `lo < -140` DALI, 12°K'NİN ALTINDA HİÇ ATEŞLENEMEZ: 54 önce
//   çalışıyor ve `lo <= -30` olan her şeyi yutuyor. Yani antimeridyen'in
//   doğusundaki GÜNEY Pasifik adaları (Tonga · Samoa · Cook · Fransız
//   Polinezyası) OKYANUSYA'ya HİÇ giremiyor.
//   Aletin kendi dosyası Sibirya vakasını (55'in `lo > 100` dalı) 90-95.
//   satırlarda ZATEN kaydediyor; bu KARDEŞ vaka kayıtlı DEĞİL.
//
// ⚠️ Bu bir KUSUR RAPORU değil bir ÖLÇÜM: bölümleme İŞ DAĞITIMI için
//   yazıldı, coğrafya dersi için değil, ve iki kova da aynı süper bölgeye
//   ("AMERİKA-OKYANUSYA") bağlı ⇒ İŞ hiçbir yere kaymıyor. Ama kova ADI
//   raporlarda görünüyor ve "Tonga Güney Amerika'da" diye okunuyor.
//
// kullanım: node denetim/ARAC-KUTU-SIRA-SINA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
console.log("evren: " + K.length + " nokta\n");

// ① GÜNEY PASİFİK: la < 12 ve lo <= -140  ⇒ 54 yutuyor, 55 göremiyor
const pas = K.filter(([y]) => y.lat < 12 && y.lon <= -140);
console.log("① GÜNEY PASİFİK (la<12 · lo<=-140) — 55'in ölü dalı: " + pas.length + " nokta");
for (const [y, f] of pas.sort((a, b) => a[0].lon - b[0].lon))
  console.log("   " + y.ad.padEnd(28) + ("(" + y.lat.toFixed(2) + ", " + y.lon.toFixed(2) + ")").padEnd(20)
    + "kova: " + bolge(y).padEnd(20) + "[" + f + "]");

// ② KUZEY PASİFİK: la >= 12 ve lo <= -140  ⇒ 53 yutuyor
const kpas = K.filter(([y]) => y.lat >= 12 && y.lon <= -140);
console.log("\n② KUZEY PASİFİK (la>=12 · lo<=-140) — 53 yutuyor: " + kpas.length + " nokta");
for (const [y, f] of kpas.sort((a, b) => a[0].lon - b[0].lon).slice(0, 12))
  console.log("   " + y.ad.padEnd(28) + ("(" + y.lat.toFixed(2) + ", " + y.lon.toFixed(2) + ")").padEnd(20)
    + "kova: " + bolge(y).padEnd(20) + "[" + f + "]");
if (kpas.length > 12) console.log("   … +" + (kpas.length - 12));

// ③ SİBİRYA: lo > 100 ve la > 50  ⇒ 55 OKYANUSYA'ya atıyor (KAYITLI)
const sib = K.filter(([y]) => y.lon > 100 && y.lat > 50 && bolge(y) === "OKYANUSYA");
console.log("\n③ SİBİRYA (lo>100 · la>50, kova OKYANUSYA) — aletin kendi kaydında VAR: "
  + sib.length + " nokta");
console.log("   boylam " + Math.min(...sib.map(x => x[0].lon)).toFixed(1) + " → "
  + Math.max(...sib.map(x => x[0].lon)).toFixed(1)
  + " · enlem " + Math.min(...sib.map(x => x[0].lat)).toFixed(1) + " → "
  + Math.max(...sib.map(x => x[0].lat)).toFixed(1));

// ④ ETKİ: iş dağıtımı değişiyor mu
const { SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");
console.log("\n④ İŞ DAĞITIMINA ETKİSİ");
for (const b of ["GUNEY-ORTA-AMERIKA", "OKYANUSYA", "KUZEY-AMERIKA", "VOLGA-URAL-SIBIRYA"])
  console.log("   " + b.padEnd(22) + "→ " + (SAHIP[b] || "?"));
console.log("   ⇒ Güney Pasifik ve Kuzey Pasifik kovaları AYNI oturuma bağlı;");
console.log("     iş kaymıyor. Sibirya ise ATANMAMIŞ bir kovaya ait ve");
console.log("     OKYANUSYA'ya düşüyor ⇒ ORASI iş kayması ÜRETİYOR.");

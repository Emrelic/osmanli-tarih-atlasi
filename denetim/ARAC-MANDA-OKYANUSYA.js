// MANDA KOVASI — "0" YAZMADAN ÖNCE BAKIYORUM.
//
// 🔴 `§11`: «`0`, "yok" ile "bakmadım" arasında ayrım yapmaz.» Koordinatörün
//   METROPOL listesi sekiz Avrupa devleti; ama 1919'da Alman Pasifik
//   sömürgeleri MC MANDASI oldu ve mandater güçler AVUSTRALYA · YENİ
//   ZELANDA · JAPONYA idi — üçü de o listede YOK.
//   ⇒ Eğer atlasta Yeni Gine · Samoa · Nauru · Mikronezya noktaları varsa
//     ve `avustralya`/`yeni-zelanda`/`japonya` taşıyorlarsa, MANDA kovası
//     BOŞ DEĞİLDİR.
//
// kullanım: node denetim/ARAC-MANDA-OKYANUSYA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
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
const sah = y => { const p = (y.s || []).find(q => q.f <= G && G < q.t); return p ? p.d : null; };
const oky = K.filter(([y]) => bolge(y) === "OKYANUSYA");
console.log("OKYANUSYA kovası: " + oky.length + " nokta\n");

// 1919 manda coğrafyaları — kaba kutular, YALNIZ "orada nokta var mı" sorusu için
const MANDA_BOLGE = [
  ["Alman Yeni Gine → AVUSTRALYA mandası", -11, -1, 140, 156],
  ["Batı Samoa → YENİ ZELANDA mandası", -14.5, -13.0, -173.5, -171.0],
  ["Nauru → İngiliz/Avustralya mandası", -0.7, -0.4, 166.8, 167.0],
  ["Alman Mikronezya (Marshall·Karolin·Mariana) → JAPONYA mandası", 0, 21, 130, 172],
  ["Papua (Avustralya toprağı, MANDA DEĞİL)", -11, -5, 140, 151],
];
for (const [ad, la0, la1, lo0, lo1] of MANDA_BOLGE) {
  const ic = K.filter(([y]) => y.lat >= la0 && y.lat <= la1 && y.lon >= lo0 && y.lon <= lo1);
  console.log("=".repeat(72));
  console.log(ad + "   (" + la0 + ".." + la1 + "K / " + lo0 + ".." + lo1 + "D)");
  if (!ic.length) { console.log("   🟢 atlasta NOKTA YOK ⇒ bu manda kovaya GİRMİYOR"); continue; }
  for (const [y, f] of ic)
    console.log("   " + y.ad.padEnd(30) + ("(" + y.lat.toFixed(2) + ", "
      + y.lon.toFixed(2) + ")").padEnd(20) + String(sah(y)).padEnd(20) + "[" + f + "]");
}

console.log("\n" + "=".repeat(72));
console.log("OKYANUSYA'DA 1923'te KULLANILAN BÜTÜN KİMLİKLER:");
const say = {};
for (const [y] of oky) { const s = sah(y) || "(sahipsiz)"; say[s] = (say[s] || 0) + 1; }
for (const [k, v] of Object.entries(say).sort((a, b) => b[1] - a[1]))
  console.log("   " + String(v).padStart(4) + "  " + k);

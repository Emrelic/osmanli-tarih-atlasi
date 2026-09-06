// YENİ GİNE — MANDA ile İLHAK aynı kimlikle mi boyanıyor?
//
// 1923'te ada ÜÇE bölünmüş ve hukukî durumları FARKLI:
//   PAPUA (güneydoğu)     İngiliz Yeni Ginesi 1888 ilhak → 1906 Avustralya
//                         TOPRAĞI  ⇒ §②a İLHAK, `avustralya` DOĞRU
//   YENİ GİNE (kuzeydoğu) Alman Kaiser-Wilhelmsland → 1920-12-17 MC
//                         C-TİPİ MANDASI (Avustralya mandater)
//                         ⇒ §②a MANDA, KENDİ KİMLİĞİ olmalı
//   HOLLANDA YENİ GİNESİ  (batı) — `hollanda-dogu-hint`, ayrı
//
// kullanım: node denetim/ARAC-YENIGINE-ZINCIR.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const HEDEF = ["Port Moresby", "Samarai", "Madang", "Finschhafen",
  "Herbertshöhe (Kokopo) — Rabaul", "Jayapura (Hollandia)", "Yap"];
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (y && y.ad) K.set(y.ad, [y, f]);
}
for (const ad of HEDEF) {
  const e = K.get(ad);
  if (!e) { console.log("🔴 YOK: " + ad); continue; }
  const [y, f] = e;
  console.log("=".repeat(74));
  console.log(y.ad + "   (" + y.lat + ", " + y.lon + ")   [" + f + "]");
  console.log("   alanlar: " + Object.keys(y).sort().join(" · "));
  for (const kat of ["d", "v", "s", "isg"])
    for (const p of (Array.isArray(y[kat]) ? y[kat] : []))
      console.log("     " + kat + ": " + p.f + " → " + p.t + "  " + (p.d || p.k || ""));
  if (y.kaynak) console.log("   kaynak: " + String(y.kaynak).slice(0, 160));
  if (y.not) console.log("   not   : " + String(y.not).slice(0, 200));
}

// manda kimliği künyesi var mı — TAHMİN ETME, TARA
console.log("\n" + "=".repeat(74));
console.log("MANDA KİMLİĞİ KÜNYESİ VAR MI — 617 künye normalleştirilmiş tarandı");
const HARF = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
  "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c" };
const nrm = s => [...String(s)].map(c => HARF[c] || c).join("")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]).filter(d => d && d.id);
console.log("künye evreni: " + D.length);
for (const anahtar of ["gine", "papua", "manda", "nauru", "samoa", "mikronezya",
  "karolin", "marshall", "bismarck", "kaiser"]) {
  const bul = D.filter(d => nrm(d.id).includes(anahtar) || nrm(d.ad).includes(anahtar)
    || nrm(d.harita || "").includes(anahtar));
  console.log("   " + anahtar.padEnd(12) + (bul.length
    ? bul.map(d => d.id + " (" + d.f + ".." + d.t + ")").join(" · ") : "🔴 eşleşme 0"));
}

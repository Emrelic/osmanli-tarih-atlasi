// ARAC-SINIR-ARAP-NAMETR-0907 — NE'nin NAME_TR alaninin KAPSAMASINI olcer.
//
// NICIN: `ORTAK §7` "NE'nin adlari Ingilizce · 175 kenar ucundan yalniz 6'si
// otomatik eslesiyor" diyor ve elle bir esleme tablosu yazdiriyor. Bolgemin
// alanlarini DOKERKEN (varsaymadan) NE'de bir `NAME_TR` alani cikti.
// Bu alet o alanin GERCEKTEN doldurulmus olup olmadigini olcer — ve atlas
// kunyeleriyle kac tanesinin esleistigini.
//
// `§11` — veri zaten bir dilde yazilmissa O DILIN YORUMLAYICISINI cagir:
// devletler.js regex ile DEGIL, node/vm ile okunuyor. Bu proje ayni dersi
// yedi kez ogrendi.
// `§4` Turkce yazim ekseni: karsilastirmada `lower()` YETMEZ ("İ".lower()
// iki kod noktasi verir) — NFKD + birlesik isaret atma ile normallestirilir.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.dirname(__dirname);

function norm(s) {
  if (!s) return "";
  const cev = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
                "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
                "’": "'", "‘": "'" };
  let t = "";
  for (const ch of s) t += (cev[ch] !== undefined ? cev[ch] : ch);
  return t.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// --- NE ---
const gj = JSON.parse(fs.readFileSync(path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), "utf8"));
const ne = gj.features.map(f => f.properties);

let dolu = 0, bos = 0, ingilizceyleAyni = 0;
const bosOrnek = [];
for (const p of ne) {
  const tr = p.NAME_TR;
  if (tr === undefined || tr === null || String(tr).trim() === "" || String(tr) === "-99") {
    bos++; if (bosOrnek.length < 12) bosOrnek.push(p.ADMIN);
  } else {
    dolu++;
    if (norm(tr) === norm(p.NAME_EN || p.NAME)) ingilizceyleAyni++;
  }
}
console.log("NE girdi           : " + ne.length);
console.log("NAME_TR DOLU       : " + dolu + "  (%" + (100 * dolu / ne.length).toFixed(1) + ")");
console.log("NAME_TR BOS/-99    : " + bos + "  " + JSON.stringify(bosOrnek));
console.log("TR == EN (ad ayni) : " + ingilizceyleAyni + "  <- bunlar bir CEVIRI kazanci vermez");
console.log("");

// --- atlas kunyeleri (kendi dilinin yorumlayicisiyla) ---
const kap = { window: {} };
vm.createContext(kap);
vm.runInContext(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"), kap, { filename: "devletler.js" });
const D = kap.window.DEVLETLER;
console.log("devletler.js kunye : " + D.length);

const adIdx = new Map();
for (const d of D) {
  for (const a of [d.ad, d.id, d.harita]) if (a) {
    const n = norm(String(a));
    if (!adIdx.has(n)) adIdx.set(n, []);
    adIdx.get(n).push(d.id);
  }
}

const BOLGE = new Set(["Syria","Lebanon","Israel","Palestine","Jordan","Iraq","Saudi Arabia",
                       "Yemen","Oman","United Arab Emirates","Qatar","Bahrain","Kuwait",
                       "Turkey","Iran","Egypt"]);

console.log("");
console.log("BOLGEMIN UCLARI — NAME_TR atlas kunyesine oturuyor mu?");
console.log("ADMIN".padEnd(23) + "NAME_TR".padEnd(28) + "atlas kunyesi (tam ad/id eslesmesi)");
let tam = 0, yok = 0;
for (const p of ne) {
  if (!BOLGE.has(p.ADMIN)) continue;
  const tr = p.NAME_TR || "";
  const hit = adIdx.get(norm(tr));
  if (hit) tam++; else yok++;
  console.log(String(p.ADMIN).padEnd(23) + String(tr).padEnd(28) + (hit ? "EVET -> " + hit.join(",") : "yok"));
}
console.log("");
console.log("bolgemde TAM eslesen: " + tam + " / " + (tam + yok));
// --- KURESEL: bir bolgede olculen oran komsu bolge icin tahmin bile degildir (§4)
let kTam = 0, kIng = 0;
for (const p of ne) {
  if (adIdx.get(norm(p.NAME_TR))) kTam++;
  if (adIdx.get(norm(p.NAME_EN || p.NAME))) kIng++;
}
console.log("KURESEL (258 girdi) — ayni olcut, butun dunya:");
console.log("  NAME_TR ile tam eslesen : " + kTam + "  (%" + (100 * kTam / ne.length).toFixed(1) + ")");
console.log("  NAME_EN ile tam eslesen : " + kIng + "  (%" + (100 * kIng / ne.length).toFixed(1) + ")");
console.log("  KAZANC                  : " + (kTam - kIng) + " girdi");
console.log("");
console.log("OLCUM SINIRI (olcmedigim): NAME_TR bir MODERN ulke adidir; 1923'un");
console.log("kimligini VERMEZ. Bu alet yalnizca ESLEME MALIYETINI olcer,");
console.log("`kimlik_1923` alanini DEGIL.");

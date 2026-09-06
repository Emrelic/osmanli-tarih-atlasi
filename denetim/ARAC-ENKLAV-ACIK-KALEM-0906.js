// ENKLAV TEYİDİNİN AÇIK İKİ KALEMİ — `OLCUM-ENKLAV-TEYIT-0906.md §⑤`
//
// O belge iki kalemi ADIYLA açık bıraktı:
//   ① `Sutter's Fort (Sacramento) abd 1839` — "kaydı veride BULAMADIM
//      (kesme işareti aramayı bozdu), TEYİT EDİLMEDİ"
//   ② `safevi Aşkale+Erzincan+Erzurum+Kemah` — "tarihen mümkün ama
//      ÖLÇÜLMEDİ"
//
// 🔴 ①'in sebebi bir veri kusuru değil bir ARAMA kusuru: kesme işareti
//    üç ayrı kod noktasıyla yazılabiliyor (U+0027 · U+2019 · U+02BC) ve
//    naif bir arama yalnız birini bulur. Bu, `CLAUDE.md §4`ün Türkçe
//    yazım ekseninin (usku ≠ Üsküp) NOKTALAMA yüzü — ve o eksen bu
//    projede beş kez ısırdı.
//    ⇒ Burada kesme işaretine AGNOSTİK bir normalleştirici kullanılıyor.
//
// KULLANIM:  node denetim/ARAC-ENKLAV-ACIK-KALEM-0906.js

const fs = require("fs"), vm = require("vm");

// Kesme işaretinin ÜÇ yazımı + diakritik + Türkçe harfler
const KESME = /['’ʼ‘´]/g;
const norm = (s) => s.normalize("NFKD")
  .replace(/[̀-ͯ]/g, "")
  .replace(KESME, "")
  .replace(/[İI]/g, "i").replace(/ı/g, "i")
  .toLowerCase();

function yerlesimler() {
  const hepsi = [];
  for (const f of fs.readdirSync("data")) {
    if (!/^yerlesim.*\.js$/.test(f) && !/^yer_yama.*\.js$/.test(f)) continue;
    const d = { window: {} };
    vm.createContext(d);   // her dosya AYRI bağlam — sessiz ezme olmasın
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); }
    catch (e) { continue; }
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (!Array.isArray(A)) continue;
      for (const y of A) if (y && y.ad) hepsi.push({ f, y });
    }
  }
  return hepsi;
}

const H = yerlesimler();
console.log("taranan kayit: " + H.length);
console.log("");

// ── ① SUTTER'S FORT ────────────────────────────────────────────────────
console.log("=== (1) SUTTER'S FORT / SACRAMENTO ===");
const aday = H.filter((r) => {
  const n = norm(r.y.ad);
  return n.includes("sutter") || n.includes("sacramento");
});
console.log("  bulunan: " + aday.length);
for (const r of aday) {
  console.log("  dosya: " + r.f + "  ad: " + JSON.stringify(r.y.ad));
  console.log("    kur: " + (r.y.kur || "-") + "  konum: " +
              (r.y.k1 !== undefined ? r.y.k1 : "?") + "," +
              (r.y.k2 !== undefined ? r.y.k2 : "?"));
  for (const alan of ["d", "s", "v", "isg"]) {
    if (!Array.isArray(r.y[alan])) continue;
    for (const p of r.y[alan]) {
      console.log("    " + alan + ": " + p.f + " -> " + p.t +
                  (p.d ? "  " + p.d : "") + (p.kaynak ? "  kaynak:" + p.kaynak : ""));
    }
  }
}
if (!aday.length) {
  console.log("  ⇒ ATLASTA YOK. Enklav listesindeki kayit BASKA bir addan");
  console.log("    geliyor olmali; ad listeden dogrulanmali.");
}

// ── ② SAFEVI: ERZURUM KUSAGI ───────────────────────────────────────────
console.log("");
console.log("=== (2) SAFEVI — Askale / Erzincan / Erzurum / Kemah ===");
const hedef = ["askale", "erzincan", "erzurum", "kemah"];
for (const h of hedef) {
  const r = H.find((x) => norm(x.y.ad) === h);
  if (!r) { console.log("  " + h + ": KAYIT YOK"); continue; }
  const donem = [];
  for (const alan of ["d", "s", "v", "isg"]) {
    if (!Array.isArray(r.y[alan])) continue;
    for (const p of r.y[alan]) {
      if (alan === "s" && p.d === "safevi") {
        donem.push("🔴 s:safevi " + p.f + " -> " + p.t +
                   (p.kaynak ? "  kaynak:" + p.kaynak : "  kaynak:YOK"));
      }
    }
  }
  console.log("  " + r.y.ad.padEnd(12) + " (" + r.f + ")");
  if (donem.length) donem.forEach((x) => console.log("      " + x));
  else console.log("      safevi donemi YOK");
  // tam zincir
  const zincir = [];
  for (const alan of ["d", "s", "v"]) {
    if (!Array.isArray(r.y[alan])) continue;
    for (const p of r.y[alan]) zincir.push([p.f, alan + (p.d ? ":" + p.d : "")]);
  }
  zincir.sort((a, b) => a[0] < b[0] ? -1 : 1);
  console.log("      zincir: " + zincir.map((z) => z[0] + " " + z[1]).join(" | ").slice(0, 200));
}

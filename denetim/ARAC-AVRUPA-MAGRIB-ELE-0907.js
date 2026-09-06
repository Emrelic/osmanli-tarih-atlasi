// MAĞRİB ELEMESİ — defterin `sahip` alanı bir SURVEY ölçütü, KİMLİK kalemi DEĞİL.
//
// 🔴 SORUN: `ARAC-BOLGE-KUTU-0906.js` cascade'i Mağrib kıyısını Avrupa
//    kutularına düşürüyor (şartname §④: Tunus → ITALYA, ölçülmüş). Defter
//    `sahip`i o kutulardan hesaplıyor ⇒ bana ORTADOĞU'nun günlerini veriyor:
//      1519-09-01 `zeyyani`      → Tilimsan/Cezayir
//      1830-07-05 Cezayir fethi  → koordinatör kendi mesajında "ORTADOĞU" dedi,
//                                   defter "IBERYA" diyor ⇒ İKİ OTORİTE AYRIŞIYOR
//      1881-05-12 Bardo          → Tunus himayesi
//      1574-08-25 `hafsi`        → Tunus'un Osmanlı fethi
//      1832-11-22 · 1844-03-04 `abdulkadir` → Cezayir direnişi
//
// ⇒ Şartname §④: "cascade SURVEY'i yönetir, KİMLİK kalemlerini DEĞİL."
//   Bu alet günleri COĞRAFÎ olarak sınar: noktalarının çoğunluğu Kuzey
//   Afrika'daysa o gün ORTADOĞU'nundur, defter ne derse desin.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const BENIM = new Set(["KUZEY-AVRUPA", "BATI-ORTA-AVRUPA", "IBERYA", "ITALYA"]);
const UC = new Set(["1281-01-01", "1923-10-29"]);
// Kuzey Afrika kıyı şeridi — Cebelitarık'tan Sirte'ye
const magrib = (y) => y.lat < 38.0 && y.lon >= -17 && y.lon <= 25 && y.lat > 19;

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
// gün -> {avrupa: Set, magrib: Set}  (nokta BİR KEZ — uç bazlı DEĞİL)
const gun = {};
for (const y of N) {
  const b = bolge(y);
  const kendi = new Set();
  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || []))
      for (const g of [p.f, p.t]) if (g && !UC.has(g)) kendi.add(g);
  for (const g of kendi) {
    const G = (gun[g] = gun[g] || { avrupa: new Set(), magrib: new Set() });
    if (BENIM.has(b)) (magrib(y) ? G.magrib : G.avrupa).add(y.ad);
  }
}

const D = JSON.parse(fs.readFileSync("denetim/DAYANAK-GUNLER-0907.json", "utf8"));
const benim = (D.gunler || []).filter(g => BENIM.has(g.sahip));

const temiz = [], kirli = [], karisik = [];
for (const g of benim) {
  const d = gun[g.gun] || { avrupa: new Set(), magrib: new Set() };
  const a = d.avrupa.size, m = d.magrib.size;
  const kayit = { ...g, avrupa: a, magrib: m };
  if (m === 0) temiz.push(kayit);
  else if (a === 0) kirli.push(kayit);
  else karisik.push(kayit);
}
const say = (L) => L.reduce((s, x) => s + x.nokta, 0);

console.log("=== MAĞRİB ELEMESİ — defterin verdiği 161 gün ===");
console.log("");
console.log("  🟢 TEMİZ (Mağrib noktası YOK)      : " + temiz.length +
  " gün · " + say(temiz) + " nokta   ⇒ BENİM, çalışılabilir");
console.log("  🔴 TAMAMEN MAĞRİB (Avrupa yok)     : " + kirli.length +
  " gün · " + say(kirli) + " nokta   ⇒ ORTADOĞU'NUN, dokunma");
console.log("  🟡 KARIŞIK (ikisinde de nokta var) : " + karisik.length +
  " gün · " + say(karisik) + " nokta   ⇒ BÖLÜŞÜM gerekir");
console.log("");
console.log("--- 🔴 TAMAMEN MAĞRİB — defter bana verdi, ben ALMIYORUM ---");
for (const g of kirli.sort((a, b) => b.nokta - a.nokta).slice(0, 14))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta · " +
    g.sahip.padEnd(18) + (g.kimlik || []).slice(0, 2).join(", "));
console.log("");
console.log("--- 🟡 KARIŞIK — hem Avrupa hem Mağrib noktası ---");
for (const g of karisik.sort((a, b) => b.nokta - a.nokta).slice(0, 10))
  console.log("   " + g.gun + "  Avrupa " + String(g.avrupa).padStart(3) +
    " · Mağrib " + String(g.magrib).padStart(3) + "   " +
    (g.kimlik || []).slice(0, 2).join(", "));
console.log("");
console.log("--- 🟢 TEMİZ, EN BÜYÜK 18 — iş sırası ---");
for (const g of temiz.sort((a, b) => b.nokta - a.nokta).slice(0, 18))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta · " +
    g.sahip.padEnd(18) + (g.kimlik || []).slice(0, 3).join(", ").slice(0, 44));

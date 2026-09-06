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

// 🔴🔴 KUTU AYIRAMAZ — YAPISAL SINIR, ayar hatası DEĞİL.
//   ORTADOĞU ölçtü (7 Eylül): ilk hâlim (lat < 38 · lon -17..25) Endülüs'ü,
//   Cebelitarık'ı ve Malta'yı Mağrib sandı ve DOKUZ GÜNÜ haksız eledi.
//   Sebep tek bir eşikte değil, coğrafyada:
//     Cebelitarık 36,14°K / -5,35  ↔  Tanca   35,78°K / -5,80
//     Almería     36,83°K / -2,46  ↔  Melilla 35,3°K  / -2,95
//     Malta       35,90°K / 14,51  ↔  Benzert 37,28°K /  9,86  ← Malta'nın KUZEYİNDE
//   ⇒ İki kıta aynı enlem VE boylam bandında, arada Akdeniz var.
//     Hiçbir enlem/boylam dikdörtgeni İberya ile Mağrib'i ayıramaz.
//     Ayıracak olan KARA MASKESİ ya da açık bir AD LİSTESİ.
// ⚠️ KIRILGANLIK BEYANI: aşağıdaki liste ELLE tutuluyor. Kutuya düşen YENİ
//   bir Avrupa noktası eklenirse SESSİZCE Mağrib sayılır — bu bir kusur
//   değil, ad listesinin doğası. Kalıcı çare kara maskesi.
const AVRUPA_YAKASI = new Set([
  // Endülüs — Reconquista'nın son kaleleri (ORTADOĞU'nun raporundan)
  "Granada", "Málaga", "Ronda", "Mojácar", "Almería", "Motril",
  // Akdeniz'in kuzey yakası
  "Cebelitarık (Gibraltar)", "Malta",
]);
const magrib = (y) => !AVRUPA_YAKASI.has(y.ad) &&
  y.lat < 38.0 && y.lon >= -17 && y.lon <= 25 && y.lat > 19;

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
for (const g of kirli.sort((a, b) => b.nokta - a.nokta).slice(0, process.argv.includes("--tam") ? 999 : 14))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta · " +
    g.sahip.padEnd(18) + (g.kimlik || []).slice(0, 2).join(", "));
const TAM = process.argv.includes("--tam");
console.log("");
console.log("--- 🟡 KARIŞIK — hem Avrupa hem Mağrib noktası ---");
for (const g of karisik.sort((a, b) => b.nokta - a.nokta).slice(0, TAM ? 999 : 10))
  console.log("   " + g.gun + "  Avrupa " + String(g.avrupa).padStart(3) +
    " · Mağrib " + String(g.magrib).padStart(3) + "   " +
    (g.kimlik || []).slice(0, 2).join(", "));
console.log("");
console.log("--- 🟢 TEMİZ" + (TAM ? "" : ", EN BÜYÜK 18") + " — iş sırası ---");
for (const g of temiz.sort((a, b) => b.nokta - a.nokta).slice(0, TAM ? 999 : 18))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta · " +
    g.sahip.padEnd(18) + (g.kimlik || []).slice(0, 3).join(", ").slice(0, 44));

// ══════════════════════════════════════════════════════════════════════
// ㉘ TERS YÖN — `magrib()` AVRUPA tarafında kaç günü YANLIŞ eledi?
// ══════════════════════════════════════════════════════════════════════
// 🔴 ORTADOĞU bir ucu ölçtü ("bana FAZLA gelenler"); ÖTEKİ UÇ BENİM
//    (§3.5.1: bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür).
//    Ölçülmezse kaç günü haksız yere kaybettiğim BİLİNMEZ.
const magribHAM = (y) => y.lat < 38.0 && y.lon >= -17 && y.lon <= 25 && y.lat > 19;
const gunHAM = {};
for (const y of N) {
  const b = bolge(y);
  if (!BENIM.has(b)) continue;
  const kendi = new Set();
  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || []))
      for (const g of [p.f, p.t]) if (g && !UC.has(g)) kendi.add(g);
  for (const g of kendi) {
    const G = (gunHAM[g] = gunHAM[g] || { avrupa: new Set(), magrib: new Set() });
    (magribHAM(y) ? G.magrib : G.avrupa).add(y.ad);
  }
}
const kirliHAM = new Set(), kirliYENI = new Set(kirli.map(g => g.gun));
for (const g of benim) {
  const d = gunHAM[g.gun] || { avrupa: new Set(), magrib: new Set() };
  if (d.magrib.size && !d.avrupa.size) kirliHAM.add(g.gun);
}
const geriGelen = [...kirliHAM].filter(g => !kirliYENI.has(g));
const nokta = {}; for (const g of benim) nokta[g.gun] = g.nokta;
console.log("");
console.log("=".repeat(70));
console.log("㉘ TERS YÖN — `magrib()` düzeltmesinin AVRUPA tarafındaki etkisi");
console.log("=".repeat(70));
console.log("  ham ölçüt (yalnız kutu)   : " + kirliHAM.size + " gün Mağrib sayıldı");
console.log("  düzeltilmiş (kutu + liste): " + kirliYENI.size + " gün");
console.log("  🟢 GERİ GELEN             : " + geriGelen.length + " gün · " +
  geriGelen.reduce((a, g) => a + (nokta[g] || 0), 0) + " nokta");
for (const g of geriGelen.sort((a, b) => (nokta[b] || 0) - (nokta[a] || 0)))
  console.log("     " + g + "   " + String(nokta[g] || 0).padStart(3) + " nokta");
console.log("");
console.log("  ⇒ Ham ölçüt bu " + geriGelen.length + " günü HAKSIZ ELEDİ.");
console.log("    Sebep: İberya ile Mağrib aynı enlem/boylam bandında —");
console.log("    kutu AYIRAMAZ (yapısal sınır, ayar hatası DEĞİL).");

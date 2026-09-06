// GÜN BÖLÜŞÜMÜ — 162 dayanaksız günün hangisi YALNIZ AVRUPA'da, hangisi ORTAK?
//
// 🔴 NİÇİN: dayanak borcunun birimi NOKTA değil GÜN (ölçüldü: 315 nokta →
//    162 gün). Ama o günlerin çoğu OTURUMLAR ARASI ORTAK — `1917-03-15`
//    hem KUZEY-AVRUPA'da (Helsinki · Riga) hem DOĞU-AVRUPA'da (Moskova).
//    Beş oturum aynı gün için ayrı kaynak ararsa BEŞ KEZ aynı iş yapılır,
//    ve daha kötüsü aynı gün için BEŞ AYRI dayanak doğar
//    (§11: "metin birleştirmek, DAYANAKLARI birleştirmek değildir").
//
// Bu alet bölüşümü YAPMAZ — koordinatöre veri verir, ve bu arada
// KESİŞİMSİZ kümede (yalnız AVRUPA) çalışmaya izin verir.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = "1923-10-28";
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);
const UC = new Set(["1281-01-01", "1923-10-29"]);

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

// Bir günü kullanan BÜTÜN noktalar (külliyat geneli) — hangi oturumlarda?
// 🔴 Nokta BİR KEZ sayılır: aynı nokta bir günü hem `f` hem `t` olarak
//    taşıyabilir ve iki kez saymak sayıyı ŞİŞİRİR (kendi ölçümümde oldu).
const gun = {};
for (const y of N) {
  const b = bolge(y), o = SAHIP[b] || "?";
  const kendi = new Set();
  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || []))
      for (const g of [p.f, p.t])
        if (g && !UC.has(g)) kendi.add(g);
  for (const g of kendi) {
    const G2 = (gun[g] = gun[g] || { oturum: {}, nokta: 0, benim: 0, ornek: [] });
    G2.oturum[o] = (G2.oturum[o] || 0) + 1;
    G2.nokta++;
    if (BENIM.has(b)) { G2.benim++; if (G2.ornek.length < 3) G2.ornek.push(y.ad); }
  }
}

// Yalnız AVRUPA'da geçen ve benim kovamda nokta taşıyan günler
const yalniz = [], ortak = [];
for (const [g, d] of Object.entries(gun)) {
  if (!d.benim) continue;
  const oturumlar = Object.keys(d.oturum);
  (oturumlar.length === 1 && oturumlar[0] === "AVRUPA" ? yalniz : ortak)
    .push([g, d, oturumlar]);
}
yalniz.sort((a, b) => b[1].benim - a[1].benim);
ortak.sort((a, b) => b[1].benim - a[1].benim);

console.log("=== GÜN BÖLÜŞÜMÜ · AVRUPA kovasında nokta taşıyan günler ===");
console.log("(nokta BİR KEZ sayılır — f/t ikisinde de geçse tek)");
console.log("");
console.log("🟢 YALNIZ AVRUPA'DA : " + yalniz.length + " gün");
console.log("🟡 ORTAK            : " + ortak.length + " gün");
console.log("");
console.log("--- 🟢 YALNIZ BENİM (kesişimsiz — bölüşüm beklemeden çalışılabilir) ---");
for (const [g, d] of yalniz.slice(0, 22))
  console.log("   " + g + "   " + String(d.benim).padStart(3) + " nokta   " +
    d.ornek.join(", "));
if (yalniz.length > 22) console.log("   ... +" + (yalniz.length - 22));

console.log("");
console.log("--- 🟡 ORTAK (koordinatör bölüşümü GEREKİR) ---");
for (const [g, d, o] of ortak.slice(0, 16))
  console.log("   " + g + "   AVRUPA " + String(d.benim).padStart(3) +
    " / toplam " + String(d.nokta).padStart(3) + "   ⇒ " + o.join(" · "));
if (ortak.length > 16) console.log("   ... +" + (ortak.length - 16));

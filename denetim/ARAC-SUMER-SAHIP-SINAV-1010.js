// ARAC-SUMER-SAHIP-SINAV-1010 — 21 Sümer noktasının sahibi örnek günlerde ne? (suzgec.sahipAnahtari, A2'li)
//
// Görev SUMER-SAHIP-1010 (UMIT, 10 Ekim 2026). Ağaç: NOKTA-SUMER + B10 + KUNYE-SUMER-7-v4 + NEGATIF-YIL-A2
// + SUMER-SAHIP-1010 uygulanmış olmalı.
// KOŞ:  node ARAC-SUMER-SAHIP-SINAV-1010.js --kok <worktree> --talep <SUMER-SAHIP-1010-KAYNAK-TALEP.json>
// ÇIKIŞ: 0 hepsi tuttu · 1 en az bir soru tutmadı · 2 ÖLÇÜLEMEDİ
//
// SORULAR (iki yön)
//   S1  1000 · 1281 · 1500 · 1923 günlerinde CANLI ve "" olan Sümer noktası YOK (hepsi bit:'li beklenir)
//   S2  MÖ/MS örnek günlerinde "" olan HER (nokta, gün) KAYNAK TALEP listesinin bir penceresine düşer
//       (beyansız "" yok)  — ters yön: talep penceresine düşen her gün gerçekten "" (talep fazlası yok)
//   S3  her s: dilimi künyenin penceresi İÇİNDE (hayalet yok) ve s: dilimleri kur:/bit: arasında, çakışmasız
//   S4  KÜNYE v4 (zincir eşitliği): ahameni.t ≤ makedon.f (örtüşme 0) — ve ahameni.t == makedon.f (boşluk 0)
//   S5  ATAR: sentetik bozuk kopya (bit: silinmiş Ur; künye dışı dilim) S1/S3'te YAKALANIR
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const arg = process.argv.slice(2);
function argAl(ad, v) { const i = arg.indexOf(ad); return i >= 0 ? arg[i + 1] : v; }
const KOK = path.resolve(argAl("--kok", "."));
const TALEP = argAl("--talep", null);
function olculemedi(n) { console.log("ÖLÇÜLEMEDİ: " + n); process.exit(2); }
let gecen = 0, kalan = 0; const kotu = [];
function soru(ad, k, ay) { if (k) gecen++; else { kalan++; kotu.push(ad + (ay ? " → " + ay : "")); }
  console.log((k ? "  ✓ " : "  ✗ ") + ad + (!k && ay ? " → " + ay : "")); }

let GUN, S, DEV, NOK, TL;
try {
  const m = { exports: {} }; vm.runInNewContext(fs.readFileSync(path.join(KOK, "js", "gun.js"), "utf8"), { module: m }); GUN = m.exports;
  const src = fs.readFileSync(path.join(KOK, "js", "suzgec.js"), "utf8");
  if (!/NEGATIF-YIL-1010-A2/.test(src)) olculemedi("suzgec.js A2'siz — MÖ'de dizgi kıyası, ölçüm anlamsız");
  const m2 = { exports: {} }; vm.runInNewContext(src, { module: m2, console, GUN }); S = m2.exports;
  const w1 = {}; vm.runInNewContext(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"), { window: w1 }); DEV = {};
  for (const d of w1.DEVLETLER) DEV[d.id] = d;
  const w2 = {}; vm.runInNewContext(fs.readFileSync(path.join(KOK, "data", "yerlesimler_nokta_ortadogu_0917.js"), "utf8"), { window: w2 });
  NOK = w2.YERLESIMLER_NOKTA_ORTADOGU_0917.filter(y => y.bit && GUN.gun(y.bit) < GUN.gun("1000-01-01"));
  TL = JSON.parse(fs.readFileSync(TALEP, "utf8")).talep;
} catch (e) { olculemedi(e.message); }
if (typeof S.sahipAnahtari !== "function") olculemedi("suzgec.sahipAnahtari yok");
if (NOK.length !== 21) olculemedi("Sümer noktası 21 değil: " + NOK.length);
const g = s => GUN.gun(s);

const GUNLER = ["-2499-06-15", "-1999-06-15", "-1499-06-15", "-0999-06-15", "-0599-06-15", "-0499-06-15",
  "-0399-06-15", "-0329-12-01", "-0299-06-15", "-0199-06-15", "-0099-06-15", "0050-06-15", "0300-06-15",
  "0600-06-15", "1000-06-15", "1281-06-15", "1500-06-15", "1923-06-15"];
const SONRA = new Set(["1000-06-15", "1281-06-15", "1500-06-15", "1923-06-15"]);
function durum(y, gs) {
  if (y.kur && g(y.kur) > g(gs)) return "·kur";       // henüz kurulmamış
  if (y.bit && g(y.bit) <= g(gs)) return "·bit";      // yok olmuş
  const k = S.sahipAnahtari(y, gs);
  return k === "" ? '""' : k.replace(/^s:/, "");
}
function talepte(ad, gs) { return TL.some(t => t.nokta === ad && g(t.pencere_f) <= g(gs) && g(gs) < g(t.pencere_t)); }

// ---- tablo --------------------------------------------------------------
const kisa = s => s.replace(/^(-?)0*(\d+)-06-15$/, (m, e, y) => (e ? "-" : "") + y).replace("-0329-12-01", "-329/12");
console.log("TABLO — suzgec.sahipAnahtari (A2) · ·kur = kurulmamış · ·bit = yok olmuş · \"\" = sahipsiz");
console.log("nokta".padEnd(30) + GUNLER.map(kisa).map(s => s.padStart(9)).join(""));
let bosSay = 0, canliSay = 0; const sayac = {};
for (const y of NOK) {
  const satir = GUNLER.map(gs => durum(y, gs));
  satir.forEach((d, i) => { if (d[0] !== "·") { canliSay++; if (d === '""') bosSay++; }
    const k = GUNLER[i]; sayac[k] = sayac[k] || { canli: 0, bos: 0 }; if (d[0] !== "·") { sayac[k].canli++; if (d === '""') sayac[k].bos++; } });
  console.log(y.ad.slice(0, 29).padEnd(30) + satir.map(s => s.slice(0, 8).padStart(9)).join(""));
}
console.log("".padEnd(30) + GUNLER.map(k => (sayac[k].bos + "/" + sayac[k].canli).padStart(9)).join("") + "   (\"\" / canlı)");
console.log(`TOPLAM canlı nokta-gün ${canliSay} · "" ${bosSay} (%${(100 * bosSay / Math.max(1, canliSay)).toFixed(1)})`);

// ---- S1 ---------------------------------------------------------------
console.log("\nS1 · 1000/1281/1500/1923'te canlı+sahipsiz Sümer noktası yok");
const s1 = [];
for (const y of NOK) for (const gs of SONRA) if (durum(y, gs) === '""') s1.push(y.ad + "@" + gs);
soru("1000+ günlerinde \"\" = 0", s1.length === 0, s1.join(", "));
soru("21 noktanın 21'i bit:'li (1000'den önce)", NOK.every(y => y.bit && g(y.bit) <= g("1000-06-15")));

// ---- S2 ---------------------------------------------------------------
console.log("\nS2 · her \"\" bir talep penceresinde · her talep penceresi gerçekten \"\"");
const beyansiz = [], fazla = [];
for (const y of NOK) for (const gs of GUNLER) {
  const d = durum(y, gs);
  if (d === '""' && !talepte(y.ad, gs) && g(gs) >= g("-2999-01-01")) beyansiz.push(y.ad + "@" + gs);
  if (d !== '""' && talepte(y.ad, gs)) fazla.push(y.ad + "@" + gs + "=" + d);
}
soru("beyansız \"\" (talep listesinde OLMAYAN) = 0", beyansiz.length === 0, beyansiz.slice(0, 8).join(", "));
soru("talep fazlası (sahibi olan güne talep) = 0", fazla.length === 0, fazla.slice(0, 8).join(", "));
// talep pencerelerinin orta günleri de gerçekten "" mi (örnek günlere bağlı kalmasın)
const ortaKotu = [];
for (const t of TL) { const y = NOK.find(n => n.ad === t.nokta); const o = GUN.dizgi(Math.floor((g(t.pencere_f) + g(t.pencere_t)) / 2));
  if (durum(y, o) !== '""') ortaKotu.push(t.nokta + "@" + o + "=" + durum(y, o)); }
soru(`talep pencerelerinin orta günü "" (${TL.length} pencere)`, ortaKotu.length === 0, ortaKotu.join(", "));

// ---- S3 ---------------------------------------------------------------
function dilimDenet(Y) {
  const h = [];
  for (const y of Y) {
    const bas = y.kur ? g(y.kur) : -Infinity, son = y.bit ? g(y.bit) : Infinity;
    const sl = (y.s || []).slice().sort((a, b) => g(a.f) - g(b.f)); let onc = bas;
    for (const p of sl) {
      const k = DEV[p.d];
      if (!k) { h.push(y.ad + " " + p.d + " KÜNYE YOK"); continue; }
      if (!(g(k.f) <= g(p.f) && g(p.t) <= g(k.t))) h.push(`${y.ad} ${p.d} ${p.f}→${p.t} künye ${k.f}→${k.t} DIŞINDA`);
      if (!(g(p.f) < g(p.t))) h.push(`${y.ad} ${p.d} ters/sıfır`);
      if (g(p.f) < onc) h.push(`${y.ad} ${p.d} çakışma ya da kur: öncesi`);
      if (g(p.t) > son) h.push(`${y.ad} ${p.d} bit: sonrası`);
      if (!p.kaynak) h.push(`${y.ad} ${p.d} kaynak: YOK`);
      onc = g(p.t);
    }
  }
  return h;
}
console.log("\nS3 · hayalet / çakışma / kaynaksız dilim");
const s3 = dilimDenet(NOK);
soru("dilim kusuru = 0 (" + NOK.reduce((n, y) => n + (y.s || []).length, 0) + " dilim)", s3.length === 0, s3.join(" | "));

// ---- S4 ---------------------------------------------------------------
console.log("\nS4 · künye v4 (zincir eşitliği)");
const ah = DEV.ahameni, mk = DEV.makedon;
soru("ahameni.t ≤ makedon.f (örtüşme yok)", g(ah.t) <= g(mk.f), ah.t + " / " + mk.f);
soru("ahameni.t == makedon.f (boşluk yok)", g(ah.t) === g(mk.f), ah.t + " / " + mk.f);

// ---- S5 ATAR ------------------------------------------------------------
console.log("\nS5 · ATAR — bozuk kopya yakalanıyor mu");
const ur = JSON.parse(JSON.stringify(NOK.find(y => y.ad.startsWith("Ur ")))); delete ur.bit;
soru("bit: silinmiş Ur 1281'de \"\" verir (S1 öterdi)", durum(ur, "1281-06-15") === '""');
const hay = JSON.parse(JSON.stringify(NOK.find(y => y.ad.startsWith("Sippar"))));
hay.s.push({ d: "ahameni", f: "-0200-01-01", t: "-0199-01-01", kaynak: "x" });
soru("künye dışı ahameni dilimi S3'te yakalanır", dilimDenet([hay]).some(s => /DIŞINDA/.test(s)));
const hay2 = JSON.parse(JSON.stringify(NOK.find(y => y.ad.startsWith("Sippar")))); delete hay2.s[0].kaynak;
soru("kaynaksız dilim S3'te yakalanır", dilimDenet([hay2]).some(s => /kaynak: YOK/.test(s)));
const eskiAh = { f: "-0538-01-01", t: "-0330-10-22" };
soru("v2 değeri (ahameni.t -0330-10-22) S4'te örtüşme olarak yakalanır", !(g(eskiAh.t) <= g(mk.f)));

console.log(`\nSONUÇ: ${gecen} tuttu · ${kalan} tutmadı`);
if (kalan) { kotu.forEach(k => console.log("  ✗ " + k)); process.exit(1); }
process.exit(0);

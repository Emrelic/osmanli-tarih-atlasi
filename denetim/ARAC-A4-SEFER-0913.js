// ARAC-A4-SEFER-0913.js — PAKET-A4 (13 Eylül 2026)
// Kullanım:
//   node denetim/ARAC-A4-SEFER-0913.js                 → SEFERLER doğrulaması (A4 kayıtları)
//   node denetim/ARAC-A4-SEFER-0913.js 1799-02-10 ...  → verilen günlerin ±30 gün maddeleri
//
// Ne ölçer:
//   ① data/savaslar.js sözdizimi (eval hatası → exit 1)
//   ② SEFERLER sayısı: HEAD (git show) → çalışma ağacı
//   ③ `id` alanı "a4-" ile başlayan her kayıt: kaynak var mı · f/t biçimi · f <= t
//      (SEFERLER'de `t` = BİTİŞ — D190) · yol en az 2 nokta, [lon,lat] aralıkta
//   ④ her A4 kaydının f ve t gününe ±30 gün içindeki kronoloji maddeleri
//      (evren: data/olaylar*.js + data/kronoloji*.js — ÇEKİRDEK + KUYRUK, ayrı sayılır)
// Pencere uçları (1923-10-29 vb.) burada sorgu günü olarak kullanılmaz (D180).
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process");
const KOK = path.join(__dirname, "..");
const DATA = path.join(KOK, "data");

function yukle(kod, ad) {
  const w = {};
  try { new Function("window", kod)(w); }
  catch (e) { console.error("SÖZDİZİMİ HATASI " + ad + ": " + e.message); process.exit(1); }
  return w;
}

const simdi = yukle(fs.readFileSync(path.join(DATA, "savaslar.js"), "utf8"), "savaslar.js (ağaç)");
let headSay = "ölçülemedi", headSavas = "ölçülemedi";
try {
  const h = cp.execSync("git show HEAD:data/savaslar.js", { cwd: KOK, maxBuffer: 64e6 }).toString("utf8");
  const hw = yukle(h, "savaslar.js (HEAD)");
  headSay = (hw.SEFERLER || []).length;
  headSavas = (hw.SAVASLAR || []).length;
} catch (e) { headSay = headSavas = "ölçülemedi (" + e.message.split("\n")[0] + ")"; }

// H-0030 (A1'den devir) — SAVASLAR'a eklenen iki işaret. `id` alanı yok (SAVASLAR şeması),
// o yüzden AD + GÜN çiftiyle aranır. `t` burada BAŞLANGIÇ/olay günüdür (D190).
// Erdel (1594-01-01) ve Kalûgerân (1595-01-01) koordinatör hükmüyle ÇIKARILDI (§4 pencere şartı);
// ikisinin de ağaçta OLMADIĞI ayrıca sınanır (YOKLAR listesi).
const H0030 = [
  ["1594-11-13", "Eflak ayaklanması — Mihail'in Bükreş'te isyanı (1594)"],
  ["1594-11-13", "Boğdan ayaklanması — Aron Voyvoda'nın Yaş'ta isyanı (1594)"],
];
const YOKLAR = [/Erdel'in Kutsal İttifak/, /^Kalûgerân$/];
// Çaldıran ⚔ taşındı: beklenen konum (gazetteer OSM node/879415755)
const CALDIRAN = { t: "1514-08-23", ad: "Çaldıran", lat: 39.065, lon: 44.384 };

// --- kronoloji evreni ---
const gun = s => { const p = (s.length === 7 ? s + "-01" : s.length === 4 ? s + "-01-01" : s).split("-");
  return Math.round(Date.UTC(+p[0], +p[1] - 1, +(p[2] || 1)) / 864e5); };
const maddeler = [];
for (const f of fs.readdirSync(DATA)) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  const kova = f.startsWith("olaylar") ? "çekirdek" : "kuyruk";
  let w;
  try { w = {}; new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("  ⚠ okunamadı: " + f + " (" + e.message + ")"); continue; }
  for (const k of Object.keys(w)) {
    const v = w[k];
    if (!Array.isArray(v)) continue;
    for (const o of v) if (o && typeof o.t === "string" && /^\d{3,4}-\d\d/.test(o.t) && o.b)
      maddeler.push({ t: o.t, g: gun(o.t), b: o.b, f, kova });
  }
}

function yakin(tarih, esik) {
  const g = gun(tarih);
  return maddeler.filter(m => Math.abs(m.g - g) <= esik)
    .sort((a, b) => Math.abs(a.g - g) - Math.abs(b.g - g));
}

const argTarih = process.argv.slice(2).filter(a => /^\d{4}-\d\d-\d\d$/.test(a));
if (argTarih.length) {
  console.log("madde evreni: " + maddeler.length);
  for (const d of argTarih) {
    const y = yakin(d, 30);
    console.log("\n" + d + " ±30 gün: " + y.length);
    for (const m of y.slice(0, 12)) console.log("   " + m.t + " [" + m.kova + " " + m.f + "] " + m.b);
  }
  process.exit(0);
}

const S = simdi.SEFERLER || [];
console.log("SEFERLER  HEAD " + headSay + " → ağaç " + S.length);
console.log("madde evreni: " + maddeler.length + " (olaylar*+kronoloji*)");
const A4 = S.filter(s => typeof s.id === "string" && s.id.startsWith("a4-"));
console.log("A4 kaydı: " + A4.length);
let hata = 0;
const tarihOk = s => typeof s === "string" && /^\d{4}-\d\d-\d\d$/.test(s);
for (const s of A4) {
  const sorun = [];
  if (!s.kaynak || String(s.kaynak).trim().length < 10) sorun.push("kaynak YOK");
  if (!tarihOk(s.f)) sorun.push("f biçimi");
  if (!tarihOk(s.t)) sorun.push("t biçimi");
  if (tarihOk(s.f) && tarihOk(s.t) && s.f > s.t) sorun.push("f > t (t BİTİŞ olmalı — D190)");
  if (!Array.isArray(s.yol) || s.yol.length < 2) sorun.push("yol < 2 nokta");
  else for (const p of s.yol)
    if (!Array.isArray(p) || p.length !== 2 || Math.abs(p[0]) > 180 || Math.abs(p[1]) > 90) { sorun.push("yol noktası bozuk " + JSON.stringify(p)); break; }
  if (sorun.length) hata++;
  console.log("\n" + (sorun.length ? "✗ " : "✓ ") + s.id + " — " + s.ad + "  [" + s.f + " → " + s.t + "] tur:" + (s.tur || "sefer") + " nokta:" + (s.yol || []).length);
  for (const x of sorun) console.log("   ✗ " + x);
  for (const uc of ["f", "t"]) {
    if (!tarihOk(s[uc])) continue;
    const y = yakin(s[uc], 30);
    const enYakin = y[0];
    console.log("   " + uc + " " + s[uc] + " ±30g madde: " + y.length +
      (enYakin ? "  · en yakın " + enYakin.t + " [" + enYakin.kova + "] " + enYakin.b.slice(0, 70) : "  · 🔴 MADDE YOK"));
  }
}
// --- H-0030: SAVASLAR işaretleri (`t` = olay günü; `bitis` bu kayıtlarda yok) ---
const SV = simdi.SAVASLAR || [];
console.log("\nSAVASLAR  HEAD " + headSavas + " → ağaç " + SV.length);
for (const [g, ad] of H0030) {
  const bul = SV.filter(s => s.t === g && s.ad === ad);
  const s = bul[0];
  const sorun = [];
  if (bul.length !== 1) sorun.push("kayıt sayısı " + bul.length + " (beklenen 1)");
  if (s) {
    if (!s.kaynak || String(s.kaynak).trim().length < 10) sorun.push("kaynak YOK");
    if (!tarihOk(s.t)) sorun.push("t biçimi");
    if (typeof s.lat !== "number" || typeof s.lon !== "number") sorun.push("koordinat eksik");
    if (s.bitis) sorun.push("bitis beklenmiyordu");
  }
  if (sorun.length) hata++;
  console.log((sorun.length ? "✗ " : "✓ ") + "SAVASLAR " + g + " — " + ad +
    (s ? "  tur:" + s.tur + " [" + s.lat + "," + s.lon + "]" + (s.tarih_hassasiyet ? " · hassasiyet: " + s.tarih_hassasiyet : "") : ""));
  for (const x of sorun) console.log("   ✗ " + x);
  const y = yakin(g, 30), e = y[0];
  console.log("   t " + g + " ±30g madde: " + y.length +
    (e ? "  · en yakın " + e.t + " [" + e.kova + "] " + e.b.slice(0, 70) : "  · 🔴 MADDE YOK"));
}

// --- Koordinatör hükmü (13 Eylül): çıkarılanlar GERÇEKTEN yok mu · Çaldıran taşındı mı ---
for (const re of YOKLAR) {
  const kalan = SV.filter(s => re.test(s.ad || ""));
  if (kalan.length) hata++;
  console.log((kalan.length ? "✗ " : "✓ ") + "ÇIKARILDI " + re + " — ağaçta " + kalan.length + " kayıt");
}
{
  const c = SV.filter(s => s.t === CALDIRAN.t && s.ad === CALDIRAN.ad);
  const ok = c.length === 1 && c[0].lat === CALDIRAN.lat && c[0].lon === CALDIRAN.lon && !!c[0].konum_kaynagi;
  if (!ok) hata++;
  console.log((ok ? "✓ " : "✗ ") + "Çaldıran ⚔ " + (c[0] ? c[0].lat + "," + c[0].lon : "YOK") +
    " (beklenen " + CALDIRAN.lat + "," + CALDIRAN.lon + ") · konum_kaynagi " + (c[0] && c[0].konum_kaynagi ? "var" : "YOK"));
  // SEFERLER okunun ucu ile ⚔ aynı yerde mi
  const ok2 = S.find(s => s.id === "a4-caldiran-gidis-1514");
  if (ok2) {
    const u = ok2.yol[ok2.yol.length - 1];
    const ayni = u[0] === CALDIRAN.lon && u[1] === CALDIRAN.lat;
    if (!ayni) hata++;
    console.log((ayni ? "✓ " : "✗ ") + "a4-caldiran-gidis-1514 ok ucu " + JSON.stringify(u) + " ⚔ ile " + (ayni ? "AYNI" : "FARKLI"));
  }
}

console.log("\nsonuç: " + (hata ? hata + " kayıtta sorun" : "A4 + H-0030 kayıtlarında şema sorunu yok"));
process.exit(hata ? 1 : 0);

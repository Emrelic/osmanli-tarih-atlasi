// ARAC-RUS-SEFER-0913.js — PAKET-RUS (13 Eylül 2026) · salt okuma
// Kullanım:  node denetim/ARAC-RUS-SEFER-0913.js
// A4 aletinin (denetim/ARAC-A4-SEFER-0913.js) yaklaşımı, `id` öneki "rus-" olan SEFERLER kayıtları için:
//   ① data/savaslar.js sözdizimi (hata → exit 1)
//   ② SEFERLER sayısı HEAD → ağaç; "rus-" kayıt sayısı BEKLENEN ile aynı mı
//   ③ her kayıt: kaynak · f/t biçimi · f <= t (SEFERLER'de t = BİTİŞ, D190) · yol >= 2 nokta, [lon,lat] aralıkta
//      · tur app.js HAREKET anahtarlarından biri mi · taraf/renk var mı · id tekil mi
//   ④ Emre kararı (13 Eylül): ilerleyen ordu KESİKLİ çizgi + OK ⇒ tur:"sefer" (HAREKET.sefer desen [1.5,1.5], glif ➤)
//   ⑤ her kaydın f ve t gününe ±30 gün kronoloji maddeleri (çekirdek olaylar* · kuyruk kronoloji*, ayrı)
//   ⑥ mükerrer kontrol: aynı f+t ve benzer ada sahip rus- DIŞI bir kayıt var mı
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process");
const KOK = path.join(__dirname, "..");
const DATA = path.join(KOK, "data");
const BEKLENEN = 11;
const HAREKET = ["sefer", "cekilme", "tahliye", "akin", "kusatma", "deniz", "teslim", "seyahat", "isyan"];

function yukle(kod, ad) {
  const w = {};
  try { new Function("window", kod)(w); }
  catch (e) { console.error("SÖZDİZİMİ HATASI " + ad + ": " + e.message); process.exit(1); }
  return w;
}
const simdi = yukle(fs.readFileSync(path.join(DATA, "savaslar.js"), "utf8"), "savaslar.js (ağaç)");
let headSay = "ölçülemedi";
try {
  const h = cp.execSync("git show HEAD:data/savaslar.js", { cwd: KOK, maxBuffer: 64e6 }).toString("utf8");
  headSay = (yukle(h, "savaslar.js (HEAD)").SEFERLER || []).length;
} catch (e) { headSay = "ölçülemedi (" + e.message.split("\n")[0] + ")"; }

const gun = s => { const p = (s.length === 7 ? s + "-01" : s.length === 4 ? s + "-01-01" : s).split("-");
  return Math.round(Date.UTC(+p[0], +p[1] - 1, +(p[2] || 1)) / 864e5); };
const maddeler = [];
for (const f of fs.readdirSync(DATA)) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  const kova = f.startsWith("olaylar") ? "çekirdek" : "kuyruk";
  const w = {};
  try { new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("  ⚠ okunamadı: " + f + " (" + e.message + ")"); continue; }
  for (const k of Object.keys(w)) {
    if (!Array.isArray(w[k])) continue;
    for (const o of w[k]) if (o && typeof o.t === "string" && /^\d{3,4}-\d\d/.test(o.t) && o.b)
      maddeler.push({ t: o.t, g: gun(o.t), b: o.b, f, kova });
  }
}
const yakin = (d, e) => { const g = gun(d); return maddeler.filter(m => Math.abs(m.g - g) <= e).sort((a, b) => Math.abs(a.g - g) - Math.abs(b.g - g)); };

const S = simdi.SEFERLER || [];
const R = S.filter(s => typeof s.id === "string" && s.id.startsWith("rus-"));
console.log("SEFERLER  HEAD " + headSay + " → ağaç " + S.length);
console.log("madde evreni: " + maddeler.length + " (olaylar*+kronoloji*)");
console.log("rus- kaydı: " + R.length + " (beklenen " + BEKLENEN + ")");
let hata = 0;
if (R.length !== BEKLENEN) { hata++; console.log("✗ rus- kayıt sayısı beklenenden farklı"); }
const idSay = {};
for (const s of S) if (s.id) idSay[s.id] = (idSay[s.id] || 0) + 1;
const tarihOk = s => typeof s === "string" && /^\d{4}-\d\d-\d\d$/.test(s);
let acikUc = 0;
for (const s of R) {
  const sorun = [];
  if (idSay[s.id] > 1) sorun.push("id mükerrer (" + idSay[s.id] + ")");
  if (!s.kaynak || String(s.kaynak).trim().length < 10) sorun.push("kaynak YOK");
  if (!tarihOk(s.f)) sorun.push("f biçimi");
  if (!tarihOk(s.t)) sorun.push("t biçimi");
  if (tarihOk(s.f) && tarihOk(s.t) && s.f > s.t) sorun.push("f > t (t BİTİŞ olmalı — D190)");
  if (HAREKET.indexOf(s.tur) < 0) sorun.push("tur HAREKET'te yok: " + s.tur);
  if (s.tur !== "sefer") sorun.push("Emre kararı: ilerleyen ordu tur:\"sefer\" (kesikli + ok) olmalı");
  if (s.taraf !== "dusman") sorun.push("taraf dusman değil");
  if (!/^#[0-9a-f]{6}$/i.test(s.renk || "")) sorun.push("renk yok/bozuk");
  if (!Array.isArray(s.yol) || s.yol.length < 2) sorun.push("yol < 2 nokta");
  else for (const p of s.yol)
    if (!Array.isArray(p) || p.length !== 2 || Math.abs(p[0]) > 180 || Math.abs(p[1]) > 90) { sorun.push("yol noktası bozuk " + JSON.stringify(p)); break; }
  // ⑥ mükerrer
  const esik = S.filter(x => x !== s && !(x.id || "").startsWith("rus-") && x.f === s.f && x.t === s.t);
  if (esik.length) sorun.push("aynı f/t'li başka kayıt: " + esik.map(x => x.ad).join(" · "));
  if (sorun.length) hata++;
  console.log("\n" + (sorun.length ? "✗ " : "✓ ") + s.id + " — " + s.ad + "  [" + s.f + " → " + s.t + "] tur:" + s.tur + " nokta:" + (s.yol || []).length);
  for (const x of sorun) console.log("   ✗ " + x);
  for (const uc of ["f", "t"]) {
    if (!tarihOk(s[uc])) continue;
    const y = yakin(s[uc], 30), c = y.filter(m => m.kova === "çekirdek");
    if (!c.length) acikUc++;
    console.log("   " + uc + " " + s[uc] + " ±30g madde: çekirdek " + c.length + " · kuyruk " + (y.length - c.length) +
      (y[0] ? "  · en yakın " + y[0].t + " [" + y[0].kova + "] " + y[0].b.slice(0, 70) : "  · 🔴 MADDE YOK"));
  }
}
console.log("\nsonuç: " + (hata ? hata + " sorun" : "rus- kayıtlarında şema sorunu yok") +
  " · çekirdekte ±30g maddesiz uç: " + acikUc + " (bilgi — SEFERLER Değişmez 2 evreninde değil)");
process.exit(hata ? 1 : 0);

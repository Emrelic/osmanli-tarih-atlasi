// KITA 22 — data/ekokuma_magazin.js doğrulayıcısı (node).
// Sınar: dosya ayrıştırılıyor mu · ad alanı · zorunlu alanlar · kesinlik sözlüğü ·
// id tekilliği · metin ≤900 · soru ≤52 · t: değeri kronolojide (olaylar*+kronoloji*)
// BİREBİR var mı (app.js bağlama kuralı) · olay:[0] === t · kisi: padişah id'si mi.
// Hiçbir kural sessiz geçilmez: her ihlal sayılıp basılır, varsa exit(1).
const fs = require("fs"), path = require("path");
const K = "data/";
global.window = {};
eval(fs.readFileSync(K + "ekokuma_magazin.js", "utf8"));
const M = window.EKOKUMA_MAGAZIN;
const hata = [];
if (!Array.isArray(M)) { console.log("🔴 window.EKOKUMA_MAGAZIN dizi değil"); process.exit(1); }
if (window.EKOKUMA) hata.push("window.EKOKUMA bu dosyada TANIMLANMIŞ — ad alanı ihlali");

// kronoloji t: evreni
const T = new Map();
for (const f of fs.readdirSync(K).filter(f => /^(olaylar|kronoloji).*\.js$/.test(f))) {
  global.window = {};
  try { eval(fs.readFileSync(K + f, "utf8")); } catch (e) { hata.push("AYRIŞTIRILAMADI " + f); continue; }
  for (const k of Object.keys(window)) if (Array.isArray(window[k]))
    for (const o of window[k]) if (o && o.t) { if (!T.has(o.t)) T.set(o.t, []); T.get(o.t).push(f + " · " + (o.b || "").slice(0, 60)); }
}
global.window = {};
eval(fs.readFileSync(K + "padisahlar.js", "utf8"));
const PID = new Set(window.PADISAHLAR.map(p => p.id));

const KES = new Set(["kesin", "tartismali", "iddia", "rivayet"]);
const ZORUNLU = ["id", "tur", "t", "baslik", "metin", "kesinlik", "kaynak"];
const ids = new Set();
for (const k of M) {
  const n = k.id || "(idsiz)";
  for (const a of ZORUNLU) if (!k[a] || typeof k[a] !== "string") hata.push(n + ": zorunlu alan boş/eksik: " + a);
  if (k.tur !== "magazin") hata.push(n + ": tur magazin değil: " + k.tur);
  if (!KES.has(k.kesinlik)) hata.push(n + ": kesinlik sözlük dışı: " + k.kesinlik);
  if (ids.has(k.id)) hata.push(n + ": MÜKERRER id"); ids.add(k.id);
  if ((k.metin || "").length > 900) hata.push(n + ": metin " + k.metin.length + " > 900");
  if ((k.soru || "").length > 52) hata.push(n + ": soru " + k.soru.length + " > 52");
  if (!T.has(k.t)) hata.push(n + ": t:" + k.t + " kronolojide BİREBİR YOK — buton ÇIKMAZ");
  if (!Array.isArray(k.olay) || k.olay[0] !== k.t) hata.push(n + ": olay[0] !== t");
  for (const p of (k.kisi || [])) if (!PID.has(p)) hata.push(n + ": kisi padişah id'si değil: " + p);
  console.log(`  ${k.t.padEnd(10)} ${k.kesinlik.padEnd(10)} metin ${String(k.metin.length).padStart(3)} · soru ${String((k.soru||"").length).padStart(2)} · ${k.id}\n     ↳ bağlandığı madde: ${(T.get(k.t) || ["YOK"]).join(" | ")}`);
}
const say = {}; for (const k of M) say[k.kesinlik] = (say[k.kesinlik] || 0) + 1;
const pad = {}; for (const k of M) for (const p of k.kisi) pad[p] = (pad[p] || 0) + 1;
console.log("\nKART:", M.length, "· kesinlik:", JSON.stringify(say), "· padişah:", JSON.stringify(pad));
console.log("HATA:", hata.length); for (const h of hata) console.log("  🔴", h);
process.exit(hata.length ? 1 : 0);

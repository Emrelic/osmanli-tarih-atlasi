// AMERİKA-OKYANUSYA — 1923-10-28 TABANI. Kendi ölçümüm (B10).
//
// 🔴 DEVRALDIĞIM SAYIYI DOĞRULAMADAN KULLANMIYORUM. Şartname
//   "730 nokta · 27 BENZERSİZ kimlik" diyor ve planın 30'unun ŞİŞİK
//   olduğunu (alt bölge toplamı) ASYA'nın yakaladığını yazıyor.
//   ⇒ Aynı sayı benim kutumda da şişebilir; ölçüyorum.
//
// 🔴 DÖRT KATMAN BİRDEN — d: → v: → s: → isg:
//   Bugün ORTADOĞU yalnız `v:`ye bakıp bir manşet yazdı ve kendi
//   çürüttü (Tunus: `isg:` örtüsü 36/36 zaten vardı). Koordinatör
//   benim kovamda örtülü nokta 0 diyor — ama "0" ile "bakmadım"
//   arasındaki farkı ancak BAKARAK bilirim.
//
// SAHİPLİK SIRASI (denetle.py `degismez3.durum` ile aynı):
//   d: (doğrudan Osmanlı) → v: (tâbi) → s: (yabancı)
//   isg: AYRI bir katman — ÖRTÜ. Sahibi değiştirmez, ÜSTÜNE biner.
//   ⇒ "1923'te ne ÇİZİLİYOR" sorusu için ikisi de okunur.
//
// kullanım:  node denetim/ARAC-AMERIKA-1923-TABAN.js
const fs = require("fs");
const path = require("path");
const KOK = path.dirname(__dirname);
process.chdir(KOK);

const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");
const GUN = "1923-10-28";
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

// ---- CANLI dosya listesi ----
// 🔴 İLK SÜRÜMDE BUNU REGEX'LE ÇIKARDIM VE 77 YERİNE 1 DOSYA ALDIM.
//   `GIRDI_DOSYALARI = (...)` bloğunu tembel `[\s\S]*?` ile eşleştirdim,
//   desen İLK kapanış parantezinde kesildi ⇒ 792 nokta okundu, kutumda
//   0 çıktı ve neredeyse "730 değil 0" diye rapor edecektim.
//   Alet HATA VERMEDİ — temiz bir sayı bastı. `§11`: sessiz atlama,
//   yanlış sonuçtan pahalıdır.
// 🟢 ÇARE regex'i düzeltmek DEĞİL, BIRAKMAK: YONTEM §③ zaten
//   `py denetim/_girdi_listesi.py`yi "CANLI dosya listesi (tek otorite)"
//   diye yazıyordu — cevap şartnamedeydi, ben kendi ayrıştırıcımı yazdım.
const { execFileSync } = require("child_process");
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
console.log("CANLI girdi dosyasi: " + dosyalar.length + "  (tek otorite: _girdi_listesi.py)");

const Y = [];
for (const f of dosyalar) {
  const yol = path.join("data", path.basename(f));
  if (!fs.existsSync(yol)) { console.log("  ⚠️ YOK: " + yol); continue; }
  global.window = {};
  eval(fs.readFileSync(yol, "utf8"));
  for (const k of Object.keys(global.window)) {
    if (Array.isArray(global.window[k])) Y.push(...global.window[k]);
  }
}
console.log("bagli nokta (dunya): " + Y.length);

// ---- DÖRT KATMAN ----
function aktif(dizi, g) {
  if (!Array.isArray(dizi)) return null;
  for (const p of dizi) if (p.f <= g && g < p.t) return p;
  return null;
}
function sahiplik(y, g) {
  const d = aktif(y.d, g);   if (d) return { kim: "OSMANLI", kat: "d" };
  const v = aktif(y.v, g);   if (v) return { kim: v.k || "tabi", kat: "v" };
  const s = aktif(y.s, g);   if (s) return { kim: s.d, kat: "s" };
  return null;
}

const kova = {};
const kimlik = {};
const ortulu = [];
let benimToplam = 0, sahipsiz = [];

for (const y of Y) {
  if (typeof y.lat !== "number" || typeof y.lon !== "number") continue;
  const b = bolge(y);
  kova[b] = (kova[b] || 0) + 1;
  if (!BENIM.includes(b)) continue;
  benimToplam++;
  const sh = sahiplik(y, GUN);
  if (!sh) { sahipsiz.push(y.ad); continue; }
  (kimlik[sh.kim] = kimlik[sh.kim] || { n: 0, kat: {}, bolge: {} });
  kimlik[sh.kim].n++;
  kimlik[sh.kim].kat[sh.kat] = (kimlik[sh.kim].kat[sh.kat] || 0) + 1;
  kimlik[sh.kim].bolge[b] = (kimlik[sh.kim].bolge[b] || 0) + 1;
  // ÖRTÜ — sahibi değiştirmez ama ÇİZİMİ değiştirir
  const isg = aktif(y.isg, GUN);
  if (isg) ortulu.push(y.ad + " → " + (isg.d || "?") + " (sahip: " + sh.kim + ")");
}

console.log("\n=== BÖLGE DAĞILIMI (cascade) ===");
for (const k of Object.keys(kova).sort((a, b) => kova[b] - kova[a])) {
  const im = BENIM.includes(k) ? " ← BENİM" : "";
  console.log("  " + k.padEnd(22) + String(kova[k]).padStart(5) + im);
}

console.log("\n=== BENİM KUTUM · " + GUN + " ===");
for (const b of BENIM) console.log("  " + b.padEnd(22) + String(kova[b] || 0).padStart(5));
console.log("  " + "TOPLAM".padEnd(22) + String(benimToplam).padStart(5)
  + "   (şartname: 730)");

const adlar = Object.keys(kimlik).sort((a, b) => kimlik[b].n - kimlik[a].n);
console.log("\nBENZERSİZ KİMLİK: " + adlar.length + "   (şartname: 27)");
console.log("sahipsiz        : " + sahipsiz.length
  + (sahipsiz.length ? "  " + sahipsiz.slice(0, 6).join(" · ") : ""));
console.log("ÖRTÜLÜ (isg:)   : " + ortulu.length
  + (ortulu.length ? "" : "   ← koordinatör 0 dedi, ÖLÇTÜM"));
for (const o of ortulu) console.log("    " + o);

console.log("\n=== KİMLİK DAĞILIMI ===");
for (const a of adlar) {
  const k = kimlik[a];
  const kat = Object.entries(k.kat).map(([x, n]) => x + ":" + n).join(" ");
  const bl = Object.entries(k.bolge).map(([x, n]) => x.slice(0, 6) + " " + n).join(" · ");
  console.log("  " + String(k.n).padStart(4) + "  " + a.padEnd(26)
    + "[" + kat + "]  " + bl);
}

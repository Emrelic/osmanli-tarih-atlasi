// ARAC-RUS-ETKI-0913.js — PAKET-RUS (13 Eylül 2026) · salt okuma
// Kullanım:  node denetim/ARAC-RUS-ETKI-0913.js
//
// Ne ölçer (C maddesi — Değişmez 2 / 2i / 2s etkisi, ÖNGÖRÜ; veri yazılmaz):
//   ① denetim/YAMA-RUS-0913.json `isg_onerileri[].kayitlar × donemler[]` uçları (kategori isg → Değişmez 2i)
//   ② `kirilma_ekleri[]` (d/v → Değişmez 2 · s → 2s) — künye ve cins değişikliğinin doğurduğu yeni kırılmalar
//   her uç günü için ±30 gün kronoloji maddeleri; evren İKİ KOVA ayrı sayılır (§5 · D006):
//     çekirdek = data/olaylar*.js   (denetle.py Değişmez 2/2i/2s bunu okur)
//     kuyruk   = data/kronoloji*.js (canlı ama Değişmez 2 evreninde DEĞİL)
//   Pencere uçları (1923-10-29 ve sonrası) sorgu günü olarak kullanılmaz (D180).
//   Her önerinin yerleşim adı girdi dosyalarında VAR mı (ad birebir; girdi.py GIRDI_DOSYALARI) — yoksa exit 1.
//   Önerinin mevcut isg dönemleriyle örtüşmesi basılır (bilgi: `degistir` önerilerinde beklenir).
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process");
const KOK = path.join(__dirname, "..");
const DATA = path.join(KOK, "data");
const yama = JSON.parse(fs.readFileSync(path.join(__dirname, "YAMA-RUS-0913.json"), "utf8"));

const gun = s => { const p = (s.length === 7 ? s + "-01" : s.length === 4 ? s + "-01-01" : s).split("-");
  return Math.round(Date.UTC(+p[0], +p[1] - 1, +(p[2] || 1)) / 864e5); };

const maddeler = [];
for (const f of fs.readdirSync(DATA)) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  const kova = f.startsWith("olaylar") ? "çekirdek" : "kuyruk";
  const w = {};
  try { new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("⚠ okunamadı: " + f + " — " + e.message); continue; }
  for (const k of Object.keys(w)) {
    if (!Array.isArray(w[k])) continue;
    for (const o of w[k]) if (o && typeof o.t === "string" && /^\d{3,4}-\d\d/.test(o.t) && o.b)
      maddeler.push({ t: o.t, g: gun(o.t), b: o.b, f, kova });
  }
}

let dosyalar;
try { dosyalar = JSON.parse(cp.execSync("py denetim/ARAC-A6B-GIRDI-0913.py", { cwd: KOK }).toString("utf8")); }
catch (e) { console.error("girdi listesi okunamadı: " + e.message); process.exit(1); }
const kayit = {};
for (const f of dosyalar) {
  const w = {};
  try { new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("⚠ okunamadı: " + f); continue; }
  for (const k of Object.keys(w)) {
    if (!Array.isArray(w[k])) continue;
    for (const y of w[k]) if (y && y.ad && typeof y.lat === "number") (kayit[y.ad] = kayit[y.ad] || []).push({ f, y });
  }
}
console.log("madde evreni: " + maddeler.filter(m => m.kova === "çekirdek").length + " çekirdek · " +
  maddeler.filter(m => m.kova === "kuyruk").length + " kuyruk");
console.log("girdi: " + dosyalar.length + " dosya · " + Object.keys(kayit).length + " ayrı ad\n");

const uclar = {};   // "kategori|gün" → {...}
let adYok = 0, ortusme = 0, donemSay = 0;
const ekle = (kat, d, tip, yer, id) => {
  if (!d || d <= "1281-01-01" || d >= "1923-10-29") return;
  const key = kat + "|" + d;
  const u = (uclar[key] = uclar[key] || { kat, d, tip: new Set(), yer: new Set(), oneri: new Set() });
  u.tip.add(tip); u.yer.add(yer); u.oneri.add(id);
};
const adSina = (ad, id) => {
  const bul = kayit[ad];
  if (!bul) { adYok++; console.log("✗ YERLEŞİM ADI GİRDİDE YOK: " + ad + " (" + id + ")"); }
  else if (bul.length > 1) console.log("⚠ ad " + bul.length + " kayıtta: " + ad + " (" + id + ")");
  return bul;
};
for (const o of (yama.isg_onerileri || [])) {
  for (const ad of (o.kayitlar || [])) {
    const bul = adSina(ad, o.id);
    for (const p of (o.donemler || [])) {
      donemSay++;
      if (bul) for (const { y } of bul) for (const q of (y.isg || []))
        if (q.f < p.t && p.f < q.t) { ortusme++; console.log("  ⓘ mevcut isg ile örtüşme [" + (o.islem || "?") + "]: " + ad + " " + q.f + "→" + q.t + " ~ öneri " + p.f + "→" + p.t); }
      ekle("isg", p.f, "başlangıç", ad, o.id);
      ekle("isg", p.t, "bitiş", ad, o.id);
    }
  }
}
for (const k of (yama.kirilma_ekleri || [])) {
  for (const ad of (k.kayitlar || [])) { adSina(ad, k.id); ekle(k.kategori, k.gun, k.tip || "kırılma", ad, k.id); }
}

const sonuc = { isg: [0, 0], dv: [0, 0], s: [0, 0] };
const satirlar = [];
console.log("");
for (const key of Object.keys(uclar).sort((a, b) => a.split("|")[1] < b.split("|")[1] ? -1 : 1)) {
  const u = uclar[key], g = gun(u.d);
  const yak = maddeler.filter(m => Math.abs(m.g - g) <= 30).sort((a, b) => Math.abs(a.g - g) - Math.abs(b.g - g));
  const c = yak.filter(m => m.kova === "çekirdek"), q = yak.filter(m => m.kova === "kuyruk");
  const kova = u.kat === "isg" ? "isg" : (u.kat === "s" ? "s" : "dv");
  sonuc[kova][0]++; if (!c.length) sonuc[kova][1]++;
  const etiket = { isg: "2i", dv: "2 ", s: "2s" }[kova];
  console.log((c.length ? "✓ " : (q.length ? "🟡 " : "🔴 ")) + "[" + etiket + "] " + u.d + " (" + [...u.tip].join("+") + ") " +
    u.yer.size + " yer: " + [...u.yer].slice(0, 5).join(", ") + (u.yer.size > 5 ? " …" : ""));
  console.log("      çekirdek ±30g: " + c.length + (c[0] ? "  · en yakın " + c[0].t + " [" + c[0].f + "] " + c[0].b.slice(0, 78) : ""));
  if (q.length) console.log("      kuyruk   ±30g: " + q.length + "  · en yakın " + q[0].t + " [" + q[0].f + "] " + q[0].b.slice(0, 78));
  satirlar.push({ degismez: etiket.trim(), gun: u.d, tip: [...u.tip], yerler: [...u.yer], oneriler: [...u.oneri],
    cekirdek: c.slice(0, 4).map(m => ({ t: m.t, f: m.f, b: m.b })), kuyruk: q.slice(0, 2).map(m => ({ t: m.t, f: m.f, b: m.b })) });
}
fs.writeFileSync(path.join(__dirname, "OLCUM-RUS-ETKI-0913.json"), JSON.stringify(satirlar, null, 1));
console.log("\nisg dönem-yerleşim çifti: " + donemSay + " · mevcut isg örtüşmesi: " + ortusme + " · girdide olmayan ad: " + adYok);
console.log("Değişmez 2i  ayrık uç günü " + sonuc.isg[0] + " · çekirdekte ±30g maddesiz " + sonuc.isg[1]);
console.log("Değişmez 2   ayrık uç günü " + sonuc.dv[0] + " · çekirdekte ±30g maddesiz " + sonuc.dv[1]);
console.log("Değişmez 2s  ayrık uç günü " + sonuc.s[0] + " · çekirdekte ±30g maddesiz " + sonuc.s[1]);
console.log("⚠ ÖNGÖRÜ: denetle.py en yakın maddeye AD bakmadan eşler; ±30 günde madde olması o maddenin BU değişimi anlattığını göstermez (A4 Kalûgerân vakası).");
process.exit(adYok ? 1 : 0);

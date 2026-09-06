// 🔴 ÖLÇÜM — 1923 TABANIM `isg:` ÖRTÜSÜNE KÖR MÜ, VE NE KADAR?
//
// DOĞURAN VAKA (6 Eylül 2026, ORTADOĞU kendi manşetini çürüterek buldu):
//   ORTADOĞU "Tunus 36 nokta 1923'te hâlâ Osmanlı tâbi, 42 yıl anakronizm"
//   dedi; koordinatör onu "büyük bulgu" diye Emre'ye aktardı. Sonra
//   ORTADOĞU İKİNCİ UCU ölçtü: 36 kaydın 36'sında da
//   `isg: 1881-05-12 → 1923-10-29 fransa-cumhuriyet` ZATEN VAR — ve o gün
//   TDV'nin Bardo Antlaşması günüyle BİREBİR aynı. Veri yanlış değil, İYİ.
//
// 🔴 AMA KUSUR ORTADOĞU'NUN ALETİNDE BİTMİYOR — KOORDİNATÖRÜN TABANINDA DA VAR:
//   `ARAC-1923-KESIT-0906.js` · `ARAC-1923-TRIYAJ-0906.js` ·
//   `ARAC-BOLGE-KUTU-0906.js` — ÜÇÜNÜN DE `sahip()` fonksiyonu
//   d: → v: → s: sırasıyla bakıyor ve `isg:`ye HİÇ BAKMIYOR.
//   Yani "1923'te bu noktanın sahibi kim" sorusunun cevabı, HARİTADA
//   ÇİZİLEN şey değil ALTTAKİ katman.
//
// 📌 `§11`: "s: TEK BAŞINA SÜREKLİ DEĞİLDİR" dersinin ÖRTÜ yüzü —
//   orada eksik olan `d:`ydi, burada `isg:`. Ve ders YÖNTEM dosyasında
//   yazılıydı; üç oturum da onu okudu; kusur yine de üretildi.
//   ⇒ "Kural yetmiyor, ALET gerekiyor."
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";
const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");

function b(y) { const d = { window: {} }; vm.createContext(d); vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window; }
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py", { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const y = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(y)) continue;
  let w; try { w = b(y); } catch (e) { continue; }
  for (const k of Object.keys(w)) { const A = w[k]; if (!Array.isArray(A)) continue; for (const r of A) if (r && r.ad && r.lat !== undefined) N.push(r); }
}
// ALTTAKİ katman (bugünkü aletlerimin cevabı)
const alt = (r) => {
  for (const p of (r.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (r.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (r.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
// ÖRTÜ
const ortu = (r) => {
  for (const p of (r.isg || [])) if (p.f <= G && G < p.t) return p.d || "(kimliksiz)";
  return null;
};

let sahipli = 0, ortulu = 0;
const cift = {}, bolgeSay = {}, oturumSay = {};
for (const r of N) {
  if (r.bit && r.bit <= G) continue;
  if (r.kur && r.kur > G) continue;
  const a = alt(r);
  if (!a) continue;
  sahipli++;
  const o = ortu(r);
  if (!o) continue;
  ortulu++;
  const k = a + "  ->ÖRTÜ->  " + o;
  cift[k] = (cift[k] || 0) + 1;
  const bb = bolge(r);
  bolgeSay[bb] = (bolgeSay[bb] || 0) + 1;
  oturumSay[SAHIP[bb]] = (oturumSay[SAHIP[bb]] || 0) + 1;
}
console.log("=== " + G + " · `isg:` ÖRTÜSÜ ===");
console.log("sahipli nokta            " + sahipli);
console.log("ÖRTÜSÜ OLAN              " + ortulu +
  "   (%" + (100 * ortulu / sahipli).toFixed(1) + ")");
console.log("⇒ bu kadar noktada ALTTAKİ katman ile ÇİZİLEN farklı olabilir");
console.log("");
console.log("ALT KATMAN -> ÖRTÜ  (kaç nokta)");
for (const [k, n] of Object.entries(cift).sort((a, c) => c[1] - a[1]))
  console.log("  " + String(n).padStart(4) + "   " + k);
console.log("");
console.log("ÖRTÜLÜ NOKTALAR — OTURUM DAĞILIMI");
for (const [o, n] of Object.entries(oturumSay).sort((a, c) => c[1] - a[1]))
  console.log("  " + o.padEnd(34) + String(n).padStart(4));

// `k` anahtarı: YOKLUK mu BOŞLUK mu (ORTADOĞU'nun ikinci bulgusu)
let vYok = 0, vBos = 0, vDolu = 0;
for (const r of N) for (const p of (r.v || [])) {
  if (!("k" in p)) vYok++;
  else if (!p.k) vBos++;
  else vDolu++;
}
console.log("");
console.log("=== `v:` dönemlerinde `k` anahtarı (ORTADOĞU ölçtü, doğrulanıyor) ===");
console.log("  HİÇ YOK  " + String(vYok).padStart(4) + "   <- `p.get('k')` bunu 'boş' sanır");
console.log("  VAR-BOŞ  " + String(vBos).padStart(4));
console.log("  DOLU     " + String(vDolu).padStart(4));
console.log("  ⇒ bu külliyatta BOŞLUK yok, yalnız YOKLUK var: bir tarama");
console.log("    `in` ile sorulmazsa " + vYok + " kaydı sessizce yanlış kovaya koyar.");

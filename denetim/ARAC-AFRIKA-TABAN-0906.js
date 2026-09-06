// AFRİKA 1923 TABANI — ve ÖRTÜLÜ KAYIT ölçümü.
//
// 🔴 NİÇİN AYRI BİR ALET: `ARAC-BOLGE-KUTU-0906.js`in `sahip()`i
//   `d:` → `v:` → `s:` bakıyor, **`isg:`ye BAKMIYOR.** Şartnamem
//   (`oturumlar/AFRIKA-1923.md §6`) bunu açıkça yasaklıyor:
//     "bir noktanın 1923'te NE ÇİZDİĞİNİ sormak için
//      d: → v: → s: → isg: DÖRDÜ BİRDEN okunur."
//   ORTADOĞU bu körlük yüzünden "Tunus 42 yıl anakronizm" manşeti yazdı
//   ve kendi çürüttü — `isg:` örtüsü 36/36 zaten oradaydı.
//   ⇒ Bu alet ALT KATMAN ile ÜST ÖRTÜYÜ AYRI raporlar; hangisinin
//     çizildiğini iddia ETMEZ, ikisini de gösterir.
//
// 🔴 VE `k` ANAHTARI `in` İLE SORULUR, `.get()` ile DEĞİL:
//   ölçüldü (ORTADOĞU): HİÇ YOK 56 · VAR-BOŞ 0 · DOLU 373.
//   Bu külliyatta BOŞLUK yok, yalnız YOKLUK var — ikisini karıştıran
//   bir tarama 56 kaydı SESSİZCE yanlış kovaya koyar.
//
// KULLANIM  node denetim/ARAC-AFRIKA-TABAN-0906.js [gun]
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = process.argv[2] || "1923-10-28";
const BOLGEM = "SAHRA-ALTI-AFRIKA";

// CANLI dosya listesi — TAHMİN EDİLMEZ, tek otorite girdi.py
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());

const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} };
  vm.createContext(d);                 // İZOLE bağlam — tek bağlamda
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); }  // eval, aynı
  catch (e) { continue; }              // window.X adını kullanan iki
  for (const k of Object.keys(d.window)) {   // dosyada SESSİZ EZME yapar
    const A = d.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}

const akt = (dizi) => (dizi || []).filter(p => p.f <= G && G < p.t);

// ALT KATMAN — koordinatörün ölçütü (d: → v: → s:)
function alt(y) {
  if (akt(y.d).length) return { k: "OSMANLI", kat: "d" };
  const v = akt(y.v)[0];
  if (v) return { k: "OSMANLI-tabi", kat: "v", v };
  const s = akt(y.s)[0];
  if (s) return { k: s.d, kat: "s" };
  return null;
}
// ÜST ÖRTÜ — işgal katmanı, ayrı sorulur
function ortu(y) {
  const i = akt(y.isg)[0];
  return i ? (i.d || i.isg || i.k || "(kimliksiz)") : null;
}

const bende = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G)
  && alt(y) && bolge(y) === BOLGEM);

console.log("=== AFRİKA TABANI · " + G + " ===");
console.log("SAHRA-ALTI-AFRIKA sahipli nokta: " + bende.length +
  "   (şartname 501)");

const say = {}, ortulu = [], kimlikler = new Set();
for (const y of bende) {
  const a = alt(y), o = ortu(y);
  kimlikler.add(a.k);
  say[a.k] = (say[a.k] || 0) + 1;
  if (o) ortulu.push({ ad: y.ad, alt: a.k, kat: a.kat, ortu: o });
}
console.log("BENZERSİZ kimlik (alt katman): " + kimlikler.size +
  "   (şartname 12)");

console.log("\n=== KİMLİK DAĞILIMI ===");
for (const [k, n] of Object.entries(say).sort((a, b) => b[1] - a[1]))
  console.log("  " + String(k).padEnd(26) + String(n).padStart(4));

console.log("\n=== 🔴 ÖRTÜLÜ KAYIT (isg: aktif) — " + ortulu.length + " ===");
if (!ortulu.length) console.log("  yok");
for (const o of ortulu)
  console.log("  " + o.ad.padEnd(22) + o.alt.padEnd(20) +
    " ⟵ örtü: " + o.ortu);

// `k` anahtarı — YOKLUK ≠ BOŞLUK
let yok = 0, bosVar = 0, dolu = 0;
for (const y of bende) for (const p of akt(y.v)) {
  if (!("k" in p)) yok++; else if (!p.k) bosVar++; else dolu++;
}
console.log("\n=== `v:` DÖNEMLERİNDE `k` ANAHTARI (in ile soruldu) ===");
console.log("  HİÇ YOK " + yok + " · VAR-BOŞ " + bosVar + " · DOLU " + dolu);

// D SINIFI adayları — metropol kimlikleri
const METROPOL = ["ingiltere", "fransa-cumhuriyet", "belcika", "portekiz",
  "italya", "ispanya", "almanya"];
console.log("\n=== D SINIFI ADAYI (metropol kimliği) — VET EDİLECEK ===");
let dtop = 0;
for (const m of METROPOL) if (say[m]) {
  console.log("  " + m.padEnd(26) + String(say[m]).padStart(4));
  dtop += say[m];
}
console.log("  " + "TOPLAM".padEnd(26) + String(dtop).padStart(4) +
  "   (" + (100 * dtop / bende.length).toFixed(1) + "% — ADAY, kusur DEĞİL)");

console.log("\n=== BAĞIMSIZ / YERLİ kimlikler ===");
for (const [k, n] of Object.entries(say).sort((a, b) => b[1] - a[1]))
  if (!METROPOL.includes(k)) console.log("  " + k.padEnd(26) + String(n).padStart(4));

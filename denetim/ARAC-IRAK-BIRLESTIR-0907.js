// ARAC-IRAK-BIRLESTIR-0907 — 28 cakismayi KAPATAN birlestirme.
//
// HUKUM (olculdu, ARAC-FETRET-MANDA*-0907):
//   · baslangic gunleri UC KAYNAKTA DA AYNI -> tartisma YOK
//   · MANDA 20. yy'i 1921-08-23'te boluyor (irak-kralligi) -> 60 yeni donem
//   · FETRET 14. yy sinirini duzeltiyor (1335-12-01 -> 1340-01-01, M-2133)
//   · Bagdat TEK gercek iki tarafli catisma: MANDA eski siniri tasiyor
//
// CARE: iki dosyayi BIRBIRINE UYUMLU hale getir; kazanan secme.
//   FETRET kayitlarina MANDA'nin 1921 bolunmesi eklenir
//   MANDA'nin Bagdat kaydi FETRET'in 1340 sinirini alir
// => iki dosya AYNI seyi soyler, uygulayici cakisma GORMEZ.
//
// SALT OKUMA + rapor. Yazma isini `--yaz` yapar.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);
const YAZ = process.argv.includes("--yaz");

function yukleHam(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) throw new Error("DOSYA YOK: " + rel);
  const ctx = { window: {}, console: { log() {} } };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  let ad = null, en = null;
  for (const a of Object.keys(ctx.window)) {
    const v = ctx.window[a];
    if (Array.isArray(v) && (!en || v.length > en.length)) { en = v; ad = a; }
  }
  if (!en || !en.length) throw new Error("SIFIR KAYIT: " + rel);
  return { ad, kayit: en, yol: p };
}

const M = yukleHam("data/yer_yama_manda_0906.js");
const F = yukleHam("data/yer_yama_ok109_fetret.js");
console.log("manda %s %d · fetret %s %d", M.ad, M.kayit.length, F.ad, F.kayit.length);

const mI = new Map(M.kayit.map(r => [r.ad, r]));
const fI = new Map(F.kayit.map(r => [r.ad, r]));
const anahtar = p => (p.f || "?") + "|" + (p.t || "?") + "|" + (p.d || "?");

// SINIR: 20. yy = f >= 1900. 14. yy duzeltmesi bunun cok altinda,
// ikisi ASLA cakismaz (olculdu: en gec ortacag donemi 1546).
const YY20 = "1900-01-01";

let fDegisen = 0, mDegisen = 0;
const rapor = [];
for (const ad of fI.keys()) {
  if (!mI.has(ad)) continue;
  const f = fI.get(ad), m = mI.get(ad);
  if (!Array.isArray(f.s) || !Array.isArray(m.s)) continue;

  // FETRET'e MANDA'nin 20. yy'ini ver
  const fEski = f.s.filter(p => (p.f || "") < YY20);
  const mYeni = m.s.filter(p => (p.f || "") >= YY20);
  const yeniF = fEski.concat(mYeni);
  // MANDA'ya FETRET'in 14. yy'ini ver
  const mYy20 = m.s.filter(p => (p.f || "") >= YY20);
  const yeniM = fEski.concat(mYy20);   // ayni birlesim — iki dosya ESITLENIR

  const fOnce = f.s.map(anahtar).sort().join(";");
  const mOnce = m.s.map(anahtar).sort().join(";");
  const sonra = yeniF.map(anahtar).sort().join(";");
  if (fOnce !== sonra) fDegisen++;
  if (mOnce !== sonra) mDegisen++;
  if (fOnce !== sonra || mOnce !== sonra) {
    rapor.push({ ad, fFark: fOnce !== sonra, mFark: mOnce !== sonra,
                 donem: yeniF.length, once: [f.s.length, m.s.length] });
  }
  f.s = yeniF;
  m.s = yeniM;
}

console.log("\nBIRLESTIRILEN: fetret %d kayit · manda %d kayit degisti",
  fDegisen, mDegisen);
for (const r of rapor.slice(0, 6)) {
  console.log("  %-14s donem %d<-%s  %s%s", r.ad, r.donem, r.once.join("/"),
    r.fFark ? "F " : "", r.mFark ? "M" : "");
}
if (rapor.length > 6) console.log("  … +%d", rapor.length - 6);

// DOGRULAMA: iki dosya artik ortak adlarda ESIT MI?
let esitsiz = 0;
for (const ad of fI.keys()) {
  if (!mI.has(ad)) continue;
  const a = fI.get(ad).s.map(anahtar).sort().join(";");
  const b = mI.get(ad).s.map(anahtar).sort().join(";");
  if (a !== b) { esitsiz++; console.log("  ESITSIZ: " + ad); }
}
console.log("ortak adlarda ESITSIZ kalan: %d", esitsiz);
if (esitsiz) throw new Error("BIRLESTIRME TUTMADI");

if (!YAZ) { console.log("\n(kuru kosu — yazmak icin --yaz)"); process.exit(0); }

function yazDosya(o, basSatir) {
  const govde = "window." + o.ad + " = " +
    JSON.stringify(o.kayit, null, 2) + ";\n";
  const eski = fs.readFileSync(o.yol, "utf8");
  const bas = eski.slice(0, eski.indexOf("window." + o.ad));
  if (!bas) throw new Error("BASLIK BULUNAMADI: " + o.yol);
  fs.writeFileSync(o.yol, bas + basSatir + govde, "utf8");
  console.log("YAZILDI: " + path.basename(o.yol));
}
const NOT = "// BIRLESTIRME 7 Eylul 2026 (1.MURAT) — HUKUM-CAKISMA-MANDA-FETRET-0907.md\n" +
  "// 28 cakisma: baslangic gunleri UC KAYNAKTA DA AYNIYDI (olculdu, fark 0).\n" +
  "// Gercek fark TEK: MANDA 20.yy'i 1921-08-23'te boluyor (irak-kralligi).\n" +
  "// Iki dosya ortak adlarda ESITLENDI: 14.yy FETRET'ten, 20.yy MANDA'dan.\n";
yazDosya(F, NOT);
yazDosya(M, NOT);

// SUDAN KALEMİ — 37 noktanın CANLI zincirleri.
//
// `YONTEM-1923-SINIR.md §⑥`: YAMA ELLE YAZILMAZ, canlı veriden üretilir.
// Silistre elle yazıldı ve yama 6 dönemin 5'ini SİLİYORDU.
// ⇒ Bu alet önce zincirin TAMAMINI döker: hangi noktada `ingiltere`
//   dönemi NE ZAMAN başlıyor, ÖNCESİNDE ne var, `v:`/`isg:` var mı.
//
// 🔴 Süzgeçli bir bakış kaydın tamamı sanılırsa SİLDİĞİ ŞEYİ GÖSTERMEZ.
//   Bu yüzden `s:` `d:` `v:` `isg:` DÖRDÜ de basılıyor, süzgeçsiz.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} }; vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (Array.isArray(A)) for (const y of A)
      if (y && y.ad && y.lat !== undefined) N.push({ y, dosya: f });
  }
}
const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);
const alt = (y) => {
  if (akt(y.d).length) return "OSMANLI";
  if (akt(y.v).length) return "OSMANLI-tabi";
  const s = akt(y.s)[0]; return s ? s.d : null;
};
const KUTU = (y) => y.lat >= 3.5 && y.lat <= 22 && y.lon >= 22 && y.lon <= 38.6;

const hedef = N.filter(({ y }) =>
  !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) &&
  alt(y) === "ingiltere" && bolge(y) === "SAHRA-ALTI-AFRIKA" && KUTU(y));

console.log("=== SUDAN KUTUSU · `ingiltere` taşıyan " + hedef.length + " nokta ===\n");

// hangi dosyalarda
const df = {};
for (const h of hedef) df[h.dosya] = (df[h.dosya] || 0) + 1;
console.log("DOSYA DAĞILIMI (yama hangi dosyalara dokunacak):");
for (const [f, n] of Object.entries(df).sort((a, b) => b[1] - a[1]))
  console.log("  " + f.padEnd(34) + n);

// `ingiltere` döneminin BAŞLANGIÇ günleri — dağılım
console.log("\n=== `ingiltere` DÖNEMİNİN BAŞLANGIÇ GÜNÜ — dağılım ===");
const bas = {};
for (const { y } of hedef) {
  const p = akt(y.s)[0];
  bas[p.f] = (bas[p.f] || 0) + 1;
}
for (const [g, n] of Object.entries(bas).sort())
  console.log("  " + g + "   " + String(n).padStart(3) + " nokta");

// TAM ZİNCİRLER — süzgeçsiz, dördü birden
console.log("\n=== TAM ZİNCİRLER (süzgeçsiz — d:/v:/s:/isg:) ===");
for (const { y, dosya } of hedef.slice(0, 40)) {
  const par = [];
  for (const [ad, z] of [["d", y.d], ["v", y.v], ["isg", y.isg]])
    if (z && z.length) par.push(ad + ":" + z.length);
  console.log("\n  " + y.ad + "   [" + dosya + "]" +
    (par.length ? "   " + par.join(" ") : ""));
  for (const p of (y.s || []))
    console.log("      s: " + p.f + " -> " + p.t + "  " + p.d +
      (p.k ? "  k:" + p.k : ""));
  for (const p of (y.isg || []))
    console.log("      isg: " + p.f + " -> " + p.t + "  " +
      (p.d || p.isg || "(kimliksiz)"));
}

// KAYNAK alanı — mevcut dayanak ne diyor
console.log("\n=== MEVCUT `kaynak:` ALANLARI ===");
const kay = {};
for (const { y } of hedef) {
  const k = y.kaynak || "(yok)";
  kay[k] = (kay[k] || 0) + 1;
}
for (const [k, n] of Object.entries(kay).sort((a, b) => b[1] - a[1]))
  console.log("  " + String(n).padStart(3) + "  " + String(k).slice(0, 100));

// ZATEN `ingiliz-sudani` taşıyan tek nokta — EMSAL
console.log("\n=== EMSAL — `ingiliz-sudani` taşıyan TEK nokta ===");
for (const { y, dosya } of N) {
  if (!(y.s || []).some(p => p.d === "ingiliz-sudani")) continue;
  console.log("  " + y.ad + "  lat " + y.lat + " lon " + y.lon +
    "  [" + dosya + "]  bölge: " + bolge(y));
  for (const p of (y.s || []))
    console.log("      s: " + p.f + " -> " + p.t + "  " + p.d);
  console.log("      kaynak: " + (y.kaynak || "(yok)"));
}

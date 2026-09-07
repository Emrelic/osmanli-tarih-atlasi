// ARAC-MUKERRER-TEKILLE-0907 — IKIZI BIREBIR AYNI olan mukerrer
// ust-seviye anahtarlari tekillestirir.
//
// NICIN: JS ayni anahtarin SONUNCUSUNU okur. `_sahiplik_uygula.py` ise
// ILKINE yazar (`ara_disi` ilk eslesmeyi doner) ⇒ bu kayitlarda her yama
// SESSIZCE OLU. Mersin'de tam bu oldu ve kaydin kendi notu soyluyordu.
//
// KAPSAM: YALNIZ iki deger BIREBIR AYNI ise. Farkli olanlar KARAR ister,
// bu betik onlara DOKUNMAZ.
//
// 🔴 EDITLEME ORIJINAL METIN UZERINDE: yorumlari SILMEK ofsetleri kaydirir,
//    o yuzden yorumlar SILINMEZ, MASKELENIR (dizgeler gibi). Boylece bir
//    yorumun icindeki `d:` sayilmaz ama konumlar bozulmaz.
//
// SINAV (--yaz sonrasi ZORUNLU): girdi.yukle ONCE/SONRA ayni veriyi
// vermeli. Bu bir NO-OP olmali; degilse geri alinir.
const fs = require("fs"), path = require("path");
const KOK = path.dirname(__dirname);
const YAZ = process.argv.includes("--yaz");
const ALAN = ["d", "s", "v", "isg", "kaynak", "neden", "not", "m", "bos", "kur"];

// dizge VE yorum karakterlerini 1 isaretler — uzunluk KORUNUR
function maskele(s) {
  const m = new Uint8Array(s.length);
  let t = null, k = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (k) { m[i] = 1; k = false; continue; }
    if (t) { m[i] = 1; if (c === "\\") k = true; else if (c === t) t = null; continue; }
    if (c === '"' || c === "'") { t = c; m[i] = 1; continue; }
    if (c === "/" && s[i + 1] === "/") { while (i < s.length && s[i] !== "\n") m[i++] = 1; i--; continue; }
    if (c === "/" && s[i + 1] === "*") { const b = i; i += 2; while (i < s.length && !(s[i] === "*" && s[i + 1] === "/")) i++; i++; for (let q = b; q <= i && q < s.length; q++) m[q] = 1; continue; }
  }
  return m;
}
function derinlikMaskeli(s, m, bas, son) {
  let d = 0;
  for (let p = bas; p < son; p++) {
    if (m[p]) continue;
    const c = s[p];
    if (c === "{" || c === "[") d++;
    else if (c === "}" || c === "]") d--;
  }
  return d;
}
function degerSonu(s, m, bas) {
  let p = bas;
  while (p < s.length && /\s/.test(s[p])) p++;
  if (!m[p] && (s[p] === "[" || s[p] === "{")) {
    let d = 0;
    for (let q = p; q < s.length; q++) {
      if (m[q]) continue;
      const c = s[q];
      if (c === "[" || c === "{") d++;
      else if (c === "]" || c === "}") { d--; if (!d) return q + 1; }
    }
  }
  if (s[p] === '"') {              // dizge: maskeli, sonunu maskeden bul
    let q = p + 1;
    while (q < s.length && m[q]) q++;
    return q;
  }
  let q = p;
  while (q < s.length && !(!m[q] && ",}".includes(s[q]))) q++;
  return q;
}

let toplamSilinen = 0, dosyaDegisen = 0;
const rapor = [];
for (const f of fs.readdirSync(path.join(KOK, "data")).sort()) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  const yol = path.join(KOK, "data", f);
  let s = fs.readFileSync(yol, "utf8");
  let m = maskele(s);
  const atama = /window\.[A-Z0-9_]+\s*=/.exec(s);
  if (!atama) continue;

  // kayit sinirlarini bul (maskeli)
  const kayitlar = [];
  let i = atama.index + atama[0].length;
  while (i < s.length) {
    while (i < s.length && (m[i] || s[i] !== "{")) i++;
    if (i >= s.length) break;
    let d = 0, j = i;
    for (; j < s.length; j++) {
      if (m[j]) continue;
      const c = s[j];
      if (c === "{" || c === "[") d++;
      else if (c === "}" || c === "]") { d--; if (!d) break; }
    }
    if (d !== 0) break;
    kayitlar.push([i, j]);
    i = j + 1;
  }

  // TERSTEN — silme ofsetleri bozmasin
  const silinecek = [];
  for (const [b, e] of kayitlar) {
    const govde = s.slice(b, e + 1);
    const adM = /\bad:\s*"((?:[^"\\]|\\.)*)"/.exec(govde);
    if (!adM) continue;
    for (const a of ALAN) {
      const rx = new RegExp("\\b" + a + ":", "g");
      const yerler = []; let mm;
      while ((mm = rx.exec(govde))) {
        const mutlak = b + mm.index;
        if (m[mutlak]) continue;
        if (derinlikMaskeli(s, m, b, mutlak) !== 1) continue;
        yerler.push(mutlak);
      }
      if (yerler.length < 2) continue;
      const degerler = yerler.map(p => {
        const bd = p + a.length + 1;
        return s.slice(bd, degerSonu(s, m, bd)).trim();
      });
      if (!degerler.every(x => x === degerler[0])) continue;   // FARKLI: dokunma
      // sonuncuyu TUT (JS onu okuyor), oncekileri sil
      for (let ix = 0; ix < yerler.length - 1; ix++) {
        const p = yerler[ix];
        let son = degerSonu(s, m, p + a.length + 1);
        while (son < s.length && /\s/.test(s[son])) son++;
        if (s[son] === ",") son++;            // ayirici virgulu da al
        silinecek.push([p, son, f, adM[1], a]);
      }
    }
  }
  if (!silinecek.length) continue;
  silinecek.sort((x, y) => y[0] - x[0]);
  for (const [p, q, dosya, ad, alan] of silinecek) {
    rapor.push("  %s :: %s  ·  %s (%d bayt)".replace("%s", dosya)
      .replace("%s", ad).replace("%s", alan).replace("%d", q - p));
    s = s.slice(0, p) + s.slice(q);
    toplamSilinen++;
  }
  if (YAZ) fs.writeFileSync(yol, s, "utf8");
  dosyaDegisen++;
}
console.log("silinecek mukerrer alan: %d · dosya: %d", toplamSilinen, dosyaDegisen);
for (const r of rapor) console.log(r);
if (!toplamSilinen) throw new Error("SESSIZ SIFIR — hicbir mekanik mukerrer bulunamadi");
console.log(YAZ ? "\nYAZILDI — simdi AYRISTIRMA ve VERI ESITLIGI sinavi kosturulmali."
                : "\n(kuru kosu — yazmak icin --yaz)");

// ARAC-MUKERRER-DOK-0907 — 12 kaydin mukerrer alanlarinin IKI DEGERINI
// yan yana doker. JS SONUNCUYU okur ⇒ [son] CANLI, oncekiler OLU.
//
// 🔴 ILK SURUM YORUMLARIN ICINDE ARADI ve sahte bulgu uretti
//    (bir yorumdaki "Antananarivo", bir sonraki gercek kayitla eslesti).
//    Bu surum once `//` ve `/* */` yorumlarini siler, sonra
//    `window.<AD> =` atamasindan baslar.
const fs = require("fs"), path = require("path");
const KOK = path.dirname(__dirname);
const ALAN = ["d", "s", "v", "isg", "kaynak", "neden", "not", "m", "bos", "kur"];

function yorumsuz(s) {
  let o = "", t = null, k = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (k) { o += c; k = false; continue; }
    if (t) { o += c; if (c === "\\") k = true; else if (c === t) t = null; continue; }
    if (c === '"' || c === "'") { t = c; o += c; continue; }
    if (c === "/" && s[i + 1] === "/") { while (i < s.length && s[i] !== "\n") i++; o += "\n"; continue; }
    if (c === "/" && s[i + 1] === "*") { i += 2; while (i < s.length && !(s[i] === "*" && s[i + 1] === "/")) i++; i++; continue; }
    o += c;
  }
  return o;
}
function kayitAyir(metin) {
  const cikti = [];
  let i = metin.indexOf("{");
  while (i >= 0) {
    let d = 0, t = null, k = false, j = i; const maske = [];
    for (; j < metin.length; j++) {
      const c = metin[j];
      maske.push(k || t ? 1 : 0);
      if (k) { k = false; continue; }
      if (t) { if (c === "\\") k = true; else if (c === t) t = null; continue; }
      if (c === '"' || c === "'") { t = c; maske[maske.length - 1] = 1; continue; }
      if (c === "{" || c === "[") d++;
      else if (c === "}" || c === "]") { d--; if (!d) break; }
    }
    if (d !== 0) break;
    cikti.push({ metin: metin.slice(i, j + 1), maske });
    i = metin.indexOf("{", j + 1);
  }
  return cikti;
}
function derinlik(s, son) {
  let d = 0, t = null, k = false;
  for (let p = 0; p < son; p++) {
    const c = s[p];
    if (k) { k = false; continue; }
    if (t) { if (c === "\\") k = true; else if (c === t) t = null; continue; }
    if (c === '"' || c === "'") { t = c; continue; }
    if (c === "{" || c === "[") d++; else if (c === "}" || c === "]") d--;
  }
  return d;
}
function degerAl(s, bas) {
  let p = bas;
  while (p < s.length && /\s/.test(s[p])) p++;
  if (s[p] === "[" || s[p] === "{") {
    let d = 0, t = null, k = false;
    for (let q = p; q < s.length; q++) {
      const c = s[q];
      if (k) { k = false; continue; }
      if (t) { if (c === "\\") k = true; else if (c === t) t = null; continue; }
      if (c === '"' || c === "'") { t = c; continue; }
      if (c === "[" || c === "{") d++;
      else if (c === "]" || c === "}") { d--; if (!d) return s.slice(p, q + 1); }
    }
  }
  if (s[p] === '"') {
    let k = false;
    for (let q = p + 1; q < s.length; q++) {
      if (k) { k = false; continue; }
      if (s[q] === "\\") { k = true; continue; }
      if (s[q] === '"') return s.slice(p, q + 1);
    }
  }
  let q = p;
  while (q < s.length && !",}".includes(s[q])) q++;
  return s.slice(p, q);
}

let bulunan = 0;
for (const f of fs.readdirSync(path.join(KOK, "data")).sort()) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  const temiz = yorumsuz(fs.readFileSync(path.join(KOK, "data", f), "utf8"));
  const mm = /window\.[A-Z0-9_]+\s*=/.exec(temiz);
  if (!mm) continue;
  for (const k of kayitAyir(temiz.slice(mm.index + mm[0].length))) {
    const ad = (/\bad:\s*"((?:[^"\\]|\\.)*)"/.exec(k.metin) || [])[1];
    if (!ad) continue;
    const bulgu = [];
    for (const a of ALAN) {
      const rx = new RegExp("\\b" + a + ":", "g");
      const yerler = []; let m;
      while ((m = rx.exec(k.metin)))
        if (!k.maske[m.index] && derinlik(k.metin, m.index) === 1)
          yerler.push(m.index + a.length + 1);
      if (yerler.length > 1) bulgu.push([a, yerler.map(p => degerAl(k.metin, p))]);
    }
    if (!bulgu.length) continue;
    bulunan++;
    console.log("\n" + "=".repeat(74));
    console.log("%s  ::  %s", f, ad);
    console.log("=".repeat(74));
    for (const [a, degerler] of bulgu) {
      const ayni = degerler.every(x => x === degerler[0]);
      console.log("  %s x%d  %s", a, degerler.length,
        ayni ? "IKISI AYNI ⇒ MEKANIK (birini sil)" : "FARKLI ⇒ KARAR");
      degerler.forEach((v, ix) => console.log("     %s %s",
        ix === degerler.length - 1 ? "CANLI" : " OLU ", v.slice(0, 180)));
    }
  }
}
console.log("\nbulunan kayit: %d", bulunan);
if (!bulunan) throw new Error("SESSIZ SIFIR — tarayici hicbir sey bulmadi");

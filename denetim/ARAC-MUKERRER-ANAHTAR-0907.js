// ARAC-MUKERRER-ANAHTAR-0907 — bir kayitta AYNI ALAN IKI KEZ yaziliysa
// JS SONUNCUYU okur; oncekine yazilan her duzeltme SESSIZCE OLUR.
//
// NICIN: Cukurova yamasi `Mersin`e `d:`/`s:` yazdi ve INMEDI. Sebebi
// kaydin KENDI notunda yaziliymis: "MUKERRER `s:`/`d:` yuzunden JS'te
// sonuncusu kazaniyor ve duzeltme motora hic girmiyordu."
// Vaka biliniyordu; SINIF olarak olculmedi.
//
// 🔴 OLCUM NEDEN ZOR: `JSON.parse`/`vm` de sonuncuyu tutar ⇒ AYRISTIRILMIS
//    veriye bakarak mukerreri GOREMEZSIN. Ham metin sart.
//
// 🔴🔴 VE ILK SURUMUM YORUMLARIN ICINDE ARADI — kendi urettigi sahte
//    bulguyu neredeyse rapor ediyordum:
//      `ham.indexOf("=")` dosyanin ILK `=`ini buluyordu ve o, baslik
//      YORUMLARININ icindeydi. Tarayici yorum metnindeki suslu
//      parantezleri kayit sandi; bir yorumdaki "Antananarivo" (Madagaskar)
//      bir sonraki gercek kayitla (Honolulu · `hawaii-kralligi`)
//      eslesti ve "Madagaskar'a Hawaii yazilmis" gibi gorundu.
//    ⇒ §11: "bir alet, aradigi seyin NEREDE OLMAYACAGINI da bilmeli" —
//      ve bu sefer alet YORUMDA ariyordu, tam da bu belgede kayitli olan
//      hata. Care: once `//` yorumlarini (dizge disinda) SIL, sonra
//      `window.<AD> =` atamasindan BASLA.
const fs = require("fs"), path = require("path");
const KOK = path.dirname(__dirname);
const ALAN = ["d", "s", "v", "isg", "kaynak", "neden", "not", "m", "bos", "kur",
              "ikiz", "kd", "go", "k", "lat", "lon", "tur"];

function yorumsuz(s) {
  let cikti = "", tirnak = null, kacis = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (kacis) { cikti += c; kacis = false; continue; }
    if (tirnak) {
      cikti += c;
      if (c === "\\") kacis = true;
      else if (c === tirnak) tirnak = null;
      continue;
    }
    if (c === '"' || c === "'") { tirnak = c; cikti += c; continue; }
    if (c === "/" && s[i + 1] === "/") {           // satir yorumu
      while (i < s.length && s[i] !== "\n") i++;
      cikti += "\n";
      continue;
    }
    if (c === "/" && s[i + 1] === "*") {           // blok yorumu
      i += 2;
      while (i < s.length && !(s[i] === "*" && s[i + 1] === "/")) i++;
      i++;
      continue;
    }
    cikti += c;
  }
  return cikti;
}

function kayitAyir(metin) {
  const cikti = [];
  let i = metin.indexOf("{");
  while (i >= 0) {
    let d = 0, tirnak = null, kacis = false, j = i;
    const maske = [];
    for (; j < metin.length; j++) {
      const c = metin[j];
      maske.push(kacis || tirnak ? 1 : 0);
      if (kacis) { kacis = false; continue; }
      if (tirnak) { if (c === "\\") kacis = true; else if (c === tirnak) tirnak = null; continue; }
      if (c === '"' || c === "'") { tirnak = c; maske[maske.length - 1] = 1; continue; }
      if (c === "{" || c === "[") d++;
      else if (c === "}" || c === "]") { d--; if (d === 0) break; }
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
    if (c === "{" || c === "[") d++;
    else if (c === "}" || c === "]") d--;
  }
  return d;
}

let toplam = 0, kusurlu = [], dosyaSay = 0, atlanan = [];
for (const f of fs.readdirSync(path.join(KOK, "data")).sort()) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  const temiz = yorumsuz(fs.readFileSync(path.join(KOK, "data", f), "utf8"));
  const m = /window\.[A-Z0-9_]+\s*=/.exec(temiz);
  if (!m) { atlanan.push(f); continue; }
  dosyaSay++;
  for (const k of kayitAyir(temiz.slice(m.index + m[0].length))) {
    const ad = (/\bad:\s*"((?:[^"\\]|\\.)*)"/.exec(k.metin) || [])[1];
    if (!ad) continue;
    toplam++;
    const say = {};
    for (const a of ALAN) {
      const rx = new RegExp("\\b" + a + ":", "g");
      let mm, n = 0;
      while ((mm = rx.exec(k.metin)))
        if (!k.maske[mm.index] && derinlik(k.metin, mm.index) === 1) n++;
      if (n > 1) say[a] = n;
    }
    if (Object.keys(say).length) kusurlu.push({ dosya: f, ad, say });
  }
}
if (atlanan.length) console.log("ATLANAN (window.X bulunamadi): " + atlanan.join(", "));
console.log("taranan dosya %d · ust seviye kayit %d", dosyaSay, toplam);
if (toplam < 3000) throw new Error("SESSIZ SIFIR: " + toplam);
console.log("=".repeat(70));
console.log("MUKERRER UST-SEVIYE ANAHTAR tasiyan kayit: %d", kusurlu.length);
console.log("=".repeat(70));
const alanSay = {};
for (const k of kusurlu) for (const a of Object.keys(k.say)) alanSay[a] = (alanSay[a] || 0) + 1;
console.log("alan dagilimi: " + (Object.entries(alanSay)
  .sort((a, b) => b[1] - a[1]).map(x => x[0] + " " + x[1]).join(" · ") || "(yok)"));
for (const k of kusurlu)
  console.log("  %s  %s  %s", k.dosya.replace(/^yerlesimler_?/, "").padEnd(20),
    k.ad.padEnd(26), JSON.stringify(k.say));

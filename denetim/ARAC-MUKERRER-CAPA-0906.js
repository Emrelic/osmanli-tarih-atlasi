// MÜKERRER ALAN — SİLİNECEK METNİ HESAPLAR (elle yazılmaz)
//
// `ARAC-MUKERRER-DUZELT-0906.py` uzun çapalar istiyor. Elle yazmak
// kırılgan: bir karakter kayarsa çapa tutmaz (iyi hâl) ya da YANLIŞ
// yeri keser (kötü hâl). Bu alet çapayı `ARAC-MUKERRER-ALAN-0906b.js`in
// doğrulanmış çözümleyicisiyle HESAPLAR ve Python değişmezi olarak basar.
//
// KULLANIM:  node denetim/ARAC-MUKERRER-CAPA-0906.js

const fs = require("fs");

// hangi kayitta HANGI yazim silinecek (0 = ilk, -1 = son)
const PLAN = [
  ["yerlesimler_ek_bozkir.js", "Yedisan bozkırı", "s", -1],
  ["yerlesimler_4ff22b.js",    "Honolulu",         "s",  0],
  ["yerlesimler_ek29.js",      "Yagodina (Jagodina)", "s", 0],
  ["yerlesimler_ek29.js",      "Yagodina (Jagodina)", "d", 0],
];

// bir alanin TUM yazimlarinin [bas,son] konumlarini bul (dizgi/yorum bilinçli)
function yazimlar(metin, alan) {
  const cikti = [];
  let i = 0;
  const n = metin.length;
  while (i < n) {
    const c = metin[i];
    if (c === "/" && metin[i + 1] === "/") { while (i < n && metin[i] !== "\n") i++; continue; }
    if (c === "/" && metin[i + 1] === "*") { i += 2; while (i < n && !(metin[i] === "*" && metin[i + 1] === "/")) i++; i += 2; continue; }
    if (c === '"' || c === "'" || c === "`") {
      const q = c; i++;
      while (i < n) { if (metin[i] === "\\") { i += 2; continue; } if (metin[i] === q) { i++; break; } i++; }
      continue;
    }
    // alan adi mi?
    if (/[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_$]/.test(metin[j])) j++;
      if (metin.slice(i, j) === alan) {
        let k = j;
        while (k < n && /\s/.test(metin[k])) k++;
        if (metin[k] === ":") {
          let m = k + 1;
          while (m < n && /\s/.test(metin[m])) m++;
          if (metin[m] === "[") {
            let derin = 0, q = m;
            for (; q < n; q++) {
              const ch = metin[q];
              if (ch === '"' || ch === "'") { const qq = ch; q++; while (q < n) { if (metin[q] === "\\") { q += 2; continue; } if (metin[q] === qq) break; q++; } continue; }
              if (ch === "[") derin++;
              else if (ch === "]") { derin--; if (!derin) break; }
            }
            cikti.push([i, q + 1]);
            i = q + 1;
            continue;
          }
        }
      }
      i = j;
      continue;
    }
    i++;
  }
  return cikti;
}

function kayitMetni(ham, ad) {
  let p = ham.indexOf('ad:"' + ad + '"');
  if (p < 0) p = ham.indexOf('ad: "' + ad + '"');
  if (p < 0) return null;
  const bas = ham.lastIndexOf("{", p);
  let derin = 0, j = bas;
  for (; j < ham.length; j++) {
    const c = ham[j];
    if (c === '"') { j++; while (j < ham.length && ham[j] !== '"') { if (ham[j] === "\\") j++; j++; } continue; }
    if (c === "{") derin++;
    else if (c === "}") { derin--; if (!derin) break; }
  }
  return { bas, son: j + 1, metin: ham.slice(bas, j + 1) };
}

const pyLit = (s) => '"""' + s.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"') + '"""';

console.log("# ── OTOMATIK URETILDI: node denetim/ARAC-MUKERRER-CAPA-0906.js");
console.log("EK_ISLER = [");
for (const [dosya, ad, alan, hangi] of PLAN) {
  const ham = fs.readFileSync("data/" + dosya, "utf8");
  const kayit = kayitMetni(ham, ad);
  if (!kayit) { console.log("    # [X] " + ad + " BULUNAMADI"); continue; }
  const y = yazimlar(kayit.metin, alan);
  if (y.length < 2) {
    console.log("    # [X] " + ad + " `" + alan + "`: " + y.length + " yazim (2+ bekleniyordu)");
    continue;
  }
  const idx = hangi < 0 ? y.length + hangi : hangi;
  let [b, e] = y[idx];
  // onundeki virgul/bosluk da silinsin ki sozdizimi bozulmasin
  let b2 = b;
  while (b2 > 0 && /[\s]/.test(kayit.metin[b2 - 1])) b2--;
  if (kayit.metin[b2 - 1] === ",") b2--;
  else if (kayit.metin[e] === ",") e++;      // basta ise SONRAKI virgulu al
  const kes = kayit.metin.slice(b2, e);
  const tam = ham.split(kes).length - 1;
  console.log("    # " + ad + "  `" + alan + "`  yazim " + (idx + 1) + "/" + y.length +
              "  ·  dosyada " + tam + " kez geciyor" + (tam === 1 ? "  ✓" : "  🔴 BENZERSIZ DEGIL"));
  console.log("    (" + JSON.stringify(dosya) + ", " + JSON.stringify(ad + " `" + alan + "`") + ",");
  console.log("     " + pyLit(kes) + ", None),");
}
console.log("]");

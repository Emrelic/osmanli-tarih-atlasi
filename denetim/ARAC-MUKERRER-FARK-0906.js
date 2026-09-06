// MÜKERRER ALANIN BEDELİ — iki okuyucu NE KADAR ayrışıyor?
//
// `ARAC-MUKERRER-ALAN-0906b.js` beş kayıt buldu. Bu alet, her birinde
// İLK ve SON yazımın ne olduğunu yan yana koyar:
//     JavaScript        SON anahtarı alır  → SİTE ve MOTOR bunu görür
//     _sahiplik_uygula  `_dilim` regexi İLK'i alır → KORUMA bunu görür
// ⇒ Aradaki fark, sessizce kaybolan düzeltmenin ta kendisidir.
//
// KULLANIM:  node denetim/ARAC-MUKERRER-FARK-0906.js

const fs = require("fs"), vm = require("vm");

const HEDEF = [
  ["yerlesimler_4ff22b.js", "Honolulu"],
  ["yerlesimler_ek27.js", "Mersin"],
  ["yerlesimler_ek29.js", "Yagodina (Jagodina)"],
  ["yerlesimler_ek_bozkir.js", "Yedisan bozkırı"],
  ["yerlesimler_ok109.js", "Şırnak"],
];

// bir kaydin METNINDEN `<alan>:[...]` YAZIMLARININ HEPSINI cikar
function tumYazimlar(metin, alan) {
  const rx = new RegExp("\\b" + alan + "\\s*:\\s*\\[", "g");
  const cikti = [];
  let m;
  while ((m = rx.exec(metin)) !== null) {
    let i = m.index + m[0].length - 1, derin = 0, j = i;
    for (; j < metin.length; j++) {
      const c = metin[j];
      if (c === '"') { j++; while (j < metin.length && metin[j] !== '"') { if (metin[j] === "\\") j++; j++; } continue; }
      if (c === "[") derin++;
      else if (c === "]") { derin--; if (!derin) break; }
    }
    cikti.push(metin.slice(i, j + 1));
  }
  return cikti;
}

function ozet(dizi) {
  try {
    const a = JSON.parse(dizi.replace(/([{,])\s*([A-Za-z_]\w*)\s*:/g, '$1"$2":'));
    return a.map((p) => (p.f || "?") + "→" + (p.t || "?") + (p.d ? " " + p.d : "")).join("  |  ");
  } catch (e) { return "(ayristirilamadi) " + dizi.slice(0, 60); }
}

for (const [dosya, ad] of HEDEF) {
  const ham = fs.readFileSync("data/" + dosya, "utf8");
  // kaydin metnini kabaca al: `ad:"<ad>"` den baslayip dengeli `}` ye kadar
  const i = ham.indexOf('ad:"' + ad + '"') >= 0
    ? ham.lastIndexOf("{", ham.indexOf('ad:"' + ad + '"'))
    : ham.lastIndexOf("{", ham.indexOf('ad: "' + ad + '"'));
  if (i < 0) { console.log("== " + ad + " : BULUNAMADI"); continue; }
  let derin = 0, j = i;
  for (; j < ham.length; j++) {
    const c = ham[j];
    if (c === '"') { j++; while (j < ham.length && ham[j] !== '"') { if (ham[j] === "\\") j++; j++; } continue; }
    if (c === "{") derin++;
    else if (c === "}") { derin--; if (!derin) break; }
  }
  const metin = ham.slice(i, j + 1);

  console.log("");
  console.log("═══ " + ad + "   [" + dosya + "] ═══");
  for (const alan of ["d", "s", "v", "isg"]) {
    const y = tumYazimlar(metin, alan);
    if (y.length < 2) continue;
    console.log("  " + alan + ":  " + y.length + " YAZIM");
    console.log("     İLK  (uygulayıcı/koruma bunu görür): " + ozet(y[0]));
    console.log("     SON  (JS · site · motor bunu görür): " + ozet(y[y.length - 1]));
    console.log("     " + (ozet(y[0]) === ozet(y[y.length - 1]) ? "🟢 AYNI — zararsız"
                                                                : "🔴 AYRIŞIYOR"));
  }
}

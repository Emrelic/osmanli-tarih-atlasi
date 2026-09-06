// SÖMÜRGE KONVANSİYONU — SEÇİM Mİ İHMAL Mİ?
//
// Üç oturum aynı soruyu ayrı ayrı buldu ve hiçbiri tek başına
// cevaplayamadı, çünkü her biri KENDİ KUTUSUNU görüyor:
//    AVRUPA   Malta  — künyesi YOK, `ingiltere` yazıyor
//             kibris-ingiliz — künye VAR, veride KULLANILMIYOR (âtıl)
//    AMERİKA  altı İngiliz sömürge kümesi — künyesi YOK
//    ORTADOĞU manda künyeleri — VAR ve kullanılıyor
//
// Soru tek: ATLAS SÖMÜRGEYİ METROPOL KİMLİĞİYLE Mİ YAZIYOR?
// Cevabı ancak KÜRESEL ölçüm verir — ve bu betik onu sorar.
//
// 🔴 ÖLÇÜT NE DEĞİL: "kaç künye var" DEĞİL. Bir künyenin VAR olması
//    kullanıldığı anlamına gelmiyor (kibris-ingiliz bunun kanıtı).
//    Ölçüt: METROPOL kimliğinin kendi anakarası DIŞINDA kaç noktada
//    kullanıldığı — çünkü konvansiyon orada görünür.

const fs = require("fs");
const path = require("path");
const KOK = path.join(__dirname, "..");

global.window = {};
const gi = require("child_process").execSync(
  'py -c "import sys;sys.path.insert(0,\'arac\');import girdi;print(chr(10).join(girdi.GIRDI_DOSYALARI))"',
  { cwd: KOK, encoding: "utf8" }
).trim().split(/\r?\n/);

// 🔴 girdi.py ÇIPLAK ad verir ("yerlesimler.js"), yol DEĞİL — ilk yazımda
//    `data/` önekini koymadım ve `fs.existsSync` 77 dosyanın 77'sini SESSİZCE
//    atladı; alet hata vermeden "0 nokta" bastı. Sıfır burada "yok" değil
//    "hiç okumadım" demekti. O yüzden artık okuma SAYILIYOR ve assert var.
let okunan = 0;
for (const f of gi) {
  const yol = path.join(KOK, "data", f.trim());
  if (!fs.existsSync(yol)) throw new Error("GİRDİ DOSYASI YOK: " + yol);
  eval(fs.readFileSync(yol, "utf8"));
  okunan++;
}
const Y = Object.keys(global.window)
  .filter(k => k.startsWith("YERLESIM"))
  .flatMap(k => global.window[k]);
if (okunan !== gi.length) throw new Error("okunan " + okunan + " != " + gi.length);
if (Y.length < 3000) throw new Error("YERLEŞİM ÇOK AZ: " + Y.length + " — sessiz sıfır");
console.log("girdi: " + okunan + " dosya · " + Y.length + " nokta");

// Metropol kimlikleri ve ANAKARA kutuları (kaba, yalnız "dışarıda mı" sorusu için)
const METROPOL = {
  "ingiltere":            { ad: "Britanya",  la: [49.8, 61.0], lo: [-11.0, 2.0] },
  "fransa-cumhuriyet":    { ad: "Fransa",    la: [41.0, 51.5], lo: [-5.5, 9.6] },
  "ispanya":              { ad: "İspanya",   la: [35.9, 43.9], lo: [-9.6, 3.4] },
  "portekiz":             { ad: "Portekiz",  la: [36.8, 42.2], lo: [-9.6, -6.1] },
  "hollanda":             { ad: "Hollanda",  la: [50.7, 53.6], lo: [3.3, 7.3] },
  "belcika":              { ad: "Belçika",   la: [49.4, 51.6], lo: [2.5, 6.5] },
  "italya":               { ad: "İtalya",    la: [36.6, 47.1], lo: [6.6, 18.6] },
  "almanya":              { ad: "Almanya",   la: [47.2, 55.1], lo: [5.8, 15.1] },
};

const G = "1923-10-28";
const aktif = (dz, g) => (dz || []).some(p => p.f <= g && g < p.t);

const sonuc = {};
for (const [kim, m] of Object.entries(METROPOL)) sonuc[kim] = { ic: 0, dis: [] };

for (const y of Y) {
  for (const sp of (y.s || [])) {
    if (!(sp.f <= G && G < sp.t)) continue;
    const m = METROPOL[sp.d];
    if (!m) continue;
    const icinde = y.lat >= m.la[0] && y.lat <= m.la[1] &&
                   y.lon >= m.lo[0] && y.lon <= m.lo[1];
    if (icinde) sonuc[sp.d].ic++;
    else sonuc[sp.d].dis.push({ ad: y.ad, la: +y.lat.toFixed(2), lo: +y.lon.toFixed(2) });
  }
}

console.log("=".repeat(72));
console.log("1923-10-28 · METROPOL KİMLİĞİ ANAKARA DIŞINDA KAÇ NOKTADA?");
console.log("=".repeat(72));
let toplamDis = 0;
for (const [kim, v] of Object.entries(sonuc)) {
  if (v.ic === 0 && v.dis.length === 0) continue;
  toplamDis += v.dis.length;
  console.log(
    `${METROPOL[kim].ad.padEnd(10)} ${String(v.ic).padStart(4)} içeride ` +
    `${String(v.dis.length).padStart(4)} DIŞARIDA`
  );
  if (v.dis.length) {
    const ilk = v.dis.slice(0, 12).map(d => d.ad).join(", ");
    console.log(`   ${ilk}${v.dis.length > 12 ? ` … (+${v.dis.length - 12})` : ""}`);
  }
}
console.log("-".repeat(72));
console.log(`TOPLAM anakara DIŞI metropol kimliği: ${toplamDis} nokta`);
console.log("\n⚠️ Bu sayı bir KUSUR sayısı DEĞİLDİR — `§②a`ya göre İLHAK edilmiş");
console.log("   toprakta metropol kimliği DOĞRUDUR (Cezayir · Cebelitarık · Sebte).");
console.log("   Bu ölçüm yalnız KONVANSİYONUN VARLIĞINI gösterir; her kaydın");
console.log("   hukukî durumu AYRICA sorulur.");

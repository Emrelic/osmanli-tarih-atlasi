// IZ-YOK DENETIM A — yama dosyalarini JSON'a doker (SALT OKUR).
//
// 🔴 KENDI AYRISTIRICIMI YAZMIYORUM (D023 · ve yama_uygula.js'in kendi
//    dersi: "Veri zaten bir dilde yazilmissa, o dilin yorumlayicisini
//    cagir"). Dosyalar JS; node onlari eval ediyor.
//
// Kullanim:
//    node denetim/ARAC-IZYOK-A-YAMADOK-0910.js <liste-dosyasi> <cikti.json>
//
// Cikti: { "<dosya>": { "degiskenler": {ad: kayitlar}, "hata": null } }

const fs = require("fs");
const path = require("path");

const KOK = path.resolve(__dirname, "..");
const VERI = path.join(KOK, "data");

const listeYolu = process.argv[2];
const ciktiYolu = process.argv[3];

const dosyalar = fs.readFileSync(listeYolu, "utf8")
  .split(/\r?\n/).map(s => s.trim()).filter(Boolean);

const sonuc = {};
for (const d of dosyalar) {
  const tam = path.join(VERI, d);
  const kayit = { degiskenler: {}, hata: null, bayt: 0, ustyazi: "" };
  try {
    const metin = fs.readFileSync(tam, "utf8");
    kayit.bayt = metin.length;
    // ust yazi: ilk 40 satirin YORUM olanlari (dosyanin kendi beyani)
    kayit.ustyazi = metin.split(/\r?\n/).slice(0, 40)
      .filter(s => /^\s*(\/\/|\/\*|\*)/.test(s)).join("\n");
    global.window = {};
    eval(metin);
    for (const k of Object.keys(global.window)) {
      const v = global.window[k];
      kayit.degiskenler[k] = v;
    }
  } catch (e) {
    kayit.hata = String(e && e.message ? e.message : e);
  }
  sonuc[d] = kayit;
}

fs.writeFileSync(ciktiYolu, JSON.stringify(sonuc), "utf8");
let hatali = 0;
for (const d of Object.keys(sonuc)) if (sonuc[d].hata) hatali++;
console.log("dosya:", dosyalar.length, "| eval HATASI:", hatali);
for (const d of Object.keys(sonuc)) {
  if (sonuc[d].hata) console.log("  🔴", d, "->", sonuc[d].hata);
}

// ARAC-CUKUROVA-TASI-0907 — merge adim ⑥: denetim/ -> data/
//
// NICIN SIMDI: sahiplik yamasi indikten sonra `Degismez 7` 662 -> 663
// oldu ve YENI DORT ENKLAV olculdu:
//     1921-10-20 · Antep · Kilis · Mersin · Payas · OSMANLI adasi
// Sebep: Karapinar · Ilgin · Kelkit · Tosya o gun OSMANLI -> tbmm-turkiye
// oldu (bunlar liste[1:]'de dusuyordu, artik iniyorlar) ve dort noktanin
// OSMANLI koprusu KESILDI.
//
// CARE ZATEN HUKME BAGLI (HUKUM-CUKUROVA-CAKISMA-0907.md):
//   ORTADOGU modeli  d: -> 1920-04-23 · s: tbmm-turkiye · isg: ortu
//   ve `denetim/YAMA-ISG-FAZ2-cukurova.json` 15 kaydi TASIYOR.
// Yama `denetim/`de oldugu icin uygulayicinin glob'una GIRMIYORDU
// (`data/yer_yama*.js`). Bu betik onu tasiyabilir bicime cevirir.
//
// SALT OKUMA + tek dosya yazar. Veri dosyalarina DOKUNMAZ.
const fs = require("fs"), path = require("path");
const KOK = path.dirname(__dirname);
const KAYNAK = path.join(KOK, "denetim", "YAMA-ISG-FAZ2-cukurova.json");
const HEDEF = path.join(KOK, "data", "yer_yama_cukurova_isg_0907.js");

const d = JSON.parse(fs.readFileSync(KAYNAK, "utf8"));
const kayit = d.kayit;
if (!Array.isArray(kayit) || kayit.length < 5)
  throw new Error("SESSIZ SIFIR: kayit " + (kayit || []).length);
console.log("kaynak kayit: %d", kayit.length);

// SESSIZ SIFIR KORUMASI — beklenen dort nokta ICINDE mi?
const bekle = ["Antep", "Kilis", "Mersin", "Payas"];
const var_ = bekle.filter(a => kayit.some(r => r.ad === a));
console.log("beklenen dort: %s", var_.join(" · "));
if (var_.length !== 4) throw new Error("DORT NOKTA EKSIK: " + var_.join(","));

const bas =
  "// -*- coding: utf-8 -*-\n" +
  "// YER_YAMA_CUKUROVA_ISG_0907 — denetim/YAMA-ISG-FAZ2-cukurova.json'dan\n" +
  "// TASINDI (merge adim 6), 7 Eylul 2026, 1.MURAT.\n" +
  "//\n" +
  "// HUKUM: denetim/HUKUM-CUKUROVA-CAKISMA-0907.md\n" +
  "//   Fransiz isgali bir MUTAREKE ISGALIDIR: Sevr onaylanmadi, Ankara\n" +
  "//   Itilafnamesi'yle Fransa cekildi, Osmanli egemenligi HIC DEVROLMADI.\n" +
  "//   => `isg:` ORTU, `s:` DEVIR DEGIL. (`yer_yama_tbmm_dort_0906.js`\n" +
  "//   ters modeli tasiyordu ve o yuzden UYGULANMAZ damgali.)\n" +
  "//\n" +
  "// 🔴 TASIMANIN SEBEBI OLCULDU, tahmin degil:\n" +
  "//   Sahiplik yamasi inince `Degismez 7` 662 -> 663 oldu ve yeni dort\n" +
  "//   enklav 1921-10-20'de Antep·Kilis·Mersin·Payas cikti. Karapinar ·\n" +
  "//   Ilgin · Kelkit · Tosya o gun OSMANLI -> tbmm-turkiye oldu (eskiden\n" +
  "//   `liste[1:]`de sessizce dusuyorlardi) ve dordun koprusu kesildi.\n" +
  "//   Bu yama dordu de `s:tbmm-turkiye 1920-04-23`e alir — Adana ile AYNI\n" +
  "//   kimlik — ve ada kapanir.\n" +
  "//\n" +
  "// _NOT (kaynak dosyadan):\n" +
  (String(d._NOT || "").split("\n").map(x => "//   " + x).join("\n")) + "\n" +
  "// ═══════════════════════════════════════════════════════════════════\n";

fs.writeFileSync(HEDEF,
  bas + "window.YER_YAMA_CUKUROVA_ISG_0907 = " +
  JSON.stringify(kayit, null, 2) + ";\n", "utf8");
console.log("YAZILDI: %s", path.basename(HEDEF));

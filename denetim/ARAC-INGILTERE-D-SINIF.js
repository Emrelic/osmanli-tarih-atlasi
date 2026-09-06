// `ingiltere` D-SINIFI — yamamdan SONRA kalan 10 nokta, beş sömürge kümesi.
// Her küme için: künye VAR MI, rengi VAR MI?
//
// 🔴 id TAHMİN EDİLMEZ, TARANIR. `ingiliz-hindistan` diye arandı ve
//   "yok" hükmü verildi; gerçek id `ingiliz-hindistani`ydi (sonda bir 'i')
//   ve 70-76 noktada KULLANILIYORDU. Üstüne bir hüküm kuruldu.
//   ⇒ Burada arama NORMALLEŞTİRİLMİŞ ve `id` · `ad` · `harita` üç alanda.
//   🔴 `"İ".lower()` iki kod noktası verir; `casefold()` de çözmez.
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));

const HARF = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
  "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a",
  "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'", "‘": "'" };
const nrm = s => [...String(s)].map(c => HARF[c] || c).join("")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]).filter(d => d && d.id);
console.log("künye evreni: " + D.length + "\n");

const { execFileSync } = require("child_process");
let BOYA = null;
try {
  const py = "import sys,json,io,contextlib;sys.path.insert(0,'arac');"
    + "buf=io.StringIO()\n"
    + "with contextlib.redirect_stdout(buf): import renkler as R\n"
    + "sys.stdout.write(json.dumps(sorted(R.BOYALAR.keys())))";
  BOYA = new Set(JSON.parse(execFileSync("py", ["-c", py], { encoding: "utf8" })));
} catch (e) { console.log("⚪ RENK ÖLÇÜLEMEDİ: " + String(e.message).slice(0, 70)); }

// [küme adı, noktalar, aranacak anahtarlar]
const KUME = [
  ["Jamaika", "Spanish Town · Port Royal · Kingston", ["jamaika", "jamaica"]],
  ["Trinidad", "Port of Spain · San José de Oruña", ["trinidad", "tobago"]],
  ["İngiliz Hondurası (Belize)", "Belize Town", ["belize", "honduras", "hondura"]],
  ["Moskito kıyısı", "Río Tinto (Black River)", ["moskito", "mosquito", "miskito"]],
  ["Fiji", "Suva · Levuka", ["fiji", "fici"]],
  ["Güney Georgia / Falkland", "Grytviken", ["georgia", "falkland", "malvin"]],
];
for (const [ad, nokta, anahtarlar] of KUME) {
  console.log("=".repeat(72));
  console.log(ad + "   [" + nokta + "]");
  const bul = D.filter(d => anahtarlar.some(a =>
    nrm(d.id).includes(a) || nrm(d.ad).includes(a) || nrm(d.harita || "").includes(a)));
  if (!bul.length) { console.log("   🔴 KÜNYE YOK — üç alanda da (id · ad · harita) eşleşme 0"); continue; }
  for (const d of bul) {
    const anah = d.harita || d.id;
    const renk = BOYA ? (BOYA.has(anah) ? "🟢 renk VAR" : "🔴 RENK YOK") : "⚪ ölçülemedi";
    console.log("   🟢 " + d.id.padEnd(24) + d.f + " .. " + d.t + "   " + d.ad);
    console.log("      boya anahtarı: " + anah + "   " + renk);
  }
}

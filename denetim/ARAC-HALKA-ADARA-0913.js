// ARAC-HALKA-ADARA-0913 — C-HALKA-ALTYAPI · 13 Eylül 2026
// Tohum verisi yazılmadan ÖNCE: aranan yer adlarının yerleşim havuzunda
// TAM `ad` karşılığını bulur. Havuz = index.html'in yüklediği bütün
// data/yerlesimler*.js (tarayıcıyla aynı toplama: window.YERLESIMLER +
// /^YERLESIMLER_/). Arama §4 normalleştiricisiyle (İ/ı/ş/ğ/ü/ö/ç/â/î/û),
// alt-dizgi — yalnız ADAY listeler, hüküm vermez.
// Kullanım: node denetim/ARAC-HALKA-ADARA-0913.js "Tiflis" "Gence" ...
// ⚠️ Koordinat/sahiplik OKUMAZ — atlas referans değildir (CLAUDE.md §4).
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/src="(data\/yerlesimler[^"?]*\.js)/g)].map(m => m[1]);
global.window = {};
for (const f of dosyalar) {
  try { eval(fs.readFileSync(path.join(KOK, f), "utf8")); }
  catch (e) { console.error("OKUNAMADI", f, e.message); }
}
const Y = Object.keys(window).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(window[k]))
  .reduce((a, k) => a.concat(window[k]), (window.YERLESIMLER || []).slice());
const norm = s => String(s).replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
  .replace(/[Üüûù]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c").replace(/[Ââ]/g, "a")
  .replace(/[Îî]/g, "i").normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
console.log("dosya", dosyalar.length, "· yerleşim", Y.length);
for (const q of process.argv.slice(2)) {
  const n = norm(q);
  const bul = Y.filter(y => norm(y.ad).includes(n)).map(y => y.ad);
  console.log(q.padEnd(16), "→", bul.length ? bul.join(" | ") : "YOK");
}

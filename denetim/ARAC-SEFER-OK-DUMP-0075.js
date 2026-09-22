// SEFER-OK-0075 — bütün SEFERLER* kayıtlarını düz JSON'a döker (ölçüm girdisi).
// Kullanım: node denetim/ARAC-SEFER-OK-DUMP-0075.js <cikti.json>
// app.js'in seferKayitlariniTopla() süzgeciyle AYNI desen: /^SEFERLER(_[A-Za-z0-9_]+)?$/
// Yalnız OKUR; data/ ve arac/ dosyalarına yazmaz.
const fs = require("fs"), path = require("path"), vm = require("vm");
const kok = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(kok, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/<script[^>]+src="(data\/[^"?]+)/g)].map(m => m[1]);
const sandbox = { window: {}, console: { log() {}, warn() {} } };
sandbox.window = sandbox; vm.createContext(sandbox);
let yuklenen = 0;
// 3. argüman (isteğe bağlı): yama kopyası kökü — orada bulunan data dosyaları ÖNCELİKLİ okunur
const ust = process.argv[3] || null;
for (const d of dosyalar) {
  const yol = (ust && fs.existsSync(path.join(ust, d))) ? path.join(ust, d) : path.join(kok, d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), sandbox, { filename: d }); yuklenen++; }
  catch (e) { /* tek dosya bozuksa diğerleri okunur */ }
}
const out = [];
for (const k of Object.keys(sandbox).sort((a, b) => a === "SEFERLER" ? -1 : b === "SEFERLER" ? 1 : a < b ? -1 : 1)) {
  if (!/^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k) || !Array.isArray(sandbox[k])) continue;
  sandbox[k].forEach((s, i) => { if (s && Array.isArray(s.yol) && s.yol.length >= 2) out.push(Object.assign({ _ns: k, _i: i }, s)); });
}
fs.writeFileSync(process.argv[2], JSON.stringify(out));
console.log("script " + dosyalar.length + " · yüklendi " + yuklenen + " · sefer kaydı " + out.length);

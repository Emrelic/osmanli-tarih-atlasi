// EKOKUMA-0077-C — olay: bağ sınavı. Kart dosyasını ve index.html'in yüklediği
// olaylar*/kronoloji* dosyalarını yükler, her bağın kaç maddeye tuttuğunu basar.
// Kullanım: node denetim/ARAC-EKOKUMA-0077-C-OLAY.js [--bozuk]
// --bozuk: sınav için bilerek tutmayan bir bağ ekler (aletin ateşlediğini gösterir).
const fs = require("fs"), vm = require("vm"), path = require("path");
const kok = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(kok, "index.html"), "utf8");
const IK = require("./INDEX-KAYNAK-1006.js"); // W32: paket_NN.js açılır + SESSİZ SIFIR kapısı
const dosyalar = IK.kaynaklar(html, /src="(data\/(?:olaylar|kronoloji)[^"?]*\.js)/);
const win = {}; const ctx = vm.createContext({ window: win, console });
for (const d of dosyalar) vm.runInContext(fs.readFileSync(path.join(kok, d), "utf8"), ctx);
vm.runInContext(fs.readFileSync(path.join(kok, "data/ekokuma_p77c.js"), "utf8"), ctx);
function norm(s) {
  s = String(s == null ? "" : s).replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c").replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function eslesir(v, o) {
  const s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  const a = norm(s.slice(i + 1));
  return !a || norm(o.b).indexOf(a) >= 0;
}
const maddeler = [];
for (const [ad, v] of Object.entries(win)) if (Array.isArray(v) && ad !== "EKOKUMA_P77C") for (const o of v) if (o && o.t && o.b) maddeler.push(o);
const kartlar = win.EKOKUMA_P77C;
if (process.argv.includes("--bozuk")) kartlar[0].olay = kartlar[0].olay.concat(["1915-05-28|Tehcir"]);
let bag = 0, tutmayan = 0; const idler = new Set();
for (const k of kartlar) {
  if (idler.has(k.id)) console.log("MÜKERRER id:", k.id); idler.add(k.id);
  for (const v of k.olay || []) {
    bag++;
    const n = maddeler.filter(o => eslesir(v, o)).length;
    if (!n) tutmayan++;
    console.log((n ? "  ✓ " : "  ✗ ") + n + " madde · " + k.id + " · " + v);
  }
}
console.log(`kart ${kartlar.length} · bağ ${bag} · tutmayan ${tutmayan} · kronoloji dosyası ${dosyalar.length} · madde ${maddeler.length}`);
process.exit(tutmayan ? 1 : 0);

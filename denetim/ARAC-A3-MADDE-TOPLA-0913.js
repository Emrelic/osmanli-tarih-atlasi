// PAKET-A3 / A5 — bütün kronoloji maddelerini toplar (yalnız OKUR).
// node denetim/ARAC-A3-MADDE-TOPLA-0913.js CIKTI.json
// Evren: data/olaylar*.js (ÇEKİRDEK) + data/kronoloji*.js (KUYRUK). Her dosya ayrı
// bir `window` nesnesinde eval edilir (§7 ad alanı ezilmesi ölçümü bozmasın).
// Madde = `t` ve `b` taşıyan nesne; kronoloji dosyalarında künye.kronoloji[] de gezilir.
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");
const out = [];
let dosyaSay = 0, hata = [];
for (const f of fs.readdirSync(DATA).sort()) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  const kova = f.startsWith("olaylar") ? "cekirdek" : "kuyruk";
  const w = {};
  try {
    new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w);
  } catch (e) { hata.push(f + ": " + e.message); continue; }
  dosyaSay++;
  const gez = (x, derin) => {
    if (!x || derin > 4) return;
    if (Array.isArray(x)) { x.forEach((y) => gez(y, derin + 1)); return; }
    if (typeof x !== "object") return;
    if (typeof x.t === "string" && typeof x.b === "string") {
      out.push({ dosya: f, kova, t: x.t, b: x.b, k: x.k || null, tur: x.tur || null,
        etiket: Array.isArray(x.etiket) ? x.etiket : (x.etiket ? [String(x.etiket)] : []),
        d: typeof x.d === "string" ? x.d : "", kisiler: x.kisiler || "", vefat_id: x.vefat_id || null });
      return;
    }
    for (const k of Object.keys(x)) gez(x[k], derin + 1);
  };
  for (const k of Object.keys(w)) gez(w[k], 0);
}
fs.writeFileSync(process.argv[2], JSON.stringify(out));
console.log("dosya", dosyaSay, "madde", out.length, "cekirdek", out.filter(o => o.kova === "cekirdek").length,
  "kuyruk", out.filter(o => o.kova === "kuyruk").length, "hata", hata.length);
hata.forEach((h) => console.log("  HATA " + h));

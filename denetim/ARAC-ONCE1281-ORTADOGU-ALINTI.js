// ONCE1281-ORTADOGU — alıntı sınavı: kaynak alanlarındaki TDV tırnaklı cümleler önbellekte birebir var mı
//   node denetim/ARAC-ONCE1281-ORTADOGU-ALINTI.js
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.resolve(__dirname, ".."), ONB = path.join(__dirname, "ONCE1281-ORTADOGU-tdv-onbellek");
const c = { window: {} }; vm.createContext(c);
vm.runInContext(fs.readFileSync(path.join(KOK, "data/kronoloji_cok_once1281_ortadogu.js"), "utf8"), c);
const K = JSON.parse(fs.readFileSync(path.join(__dirname, "ONCE1281-ORTADOGU-KUNYE.json"), "utf8"));
const metinler = [];
c.window.KRONOLOJI_COK_ONCE1281_ORTADOGU.forEach(m => metinler.push(["madde " + m.t, m.kaynak]));
K.kunyeler.forEach(k => { for (const a of ["kaynak", "ic_not_f", "ic_not_t"]) if (k[a]) metinler.push([k.id + "." + a, k[a]]);
  (k.kronoloji || []).forEach(m => metinler.push([k.id + " iskelet " + m.t, m.kaynak])); });
const onb = {}; const oku = s => { if (!(s in onb)) { const p = path.join(ONB, s + ".txt"); onb[s] = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null; } return onb[s]; };
const norm = s => s.replace(/\s+/g, " ").trim();
let alinti = 0, bulundu = 0, yok = [], onbYok = 0;
for (const [yer, s] of metinler) {
  if (!s) continue;
  // "TDV: slug (\"...\")" ya da "TDV `slug` (\"...\")" — her TDV slug'ından sonraki tırnaklı parçalar
  const re = /TDV[:\s]+`?([a-z0-9-]+)`?[^"“]*?["“]([^"”]{15,})["”]/g; let m;
  while ((m = re.exec(s))) {
    alinti++; const g = oku(m[1]);
    if (g === null) { onbYok++; yok.push(`${yer}: önbellekte yok (${m[1]})`); continue; }
    const q = norm(m[2]).replace(/^…\s*|\s*…$/g, "");
    const parcalar = q.split(/\s*…\s*/).filter(p => p.length > 8);
    if (parcalar.every(p => norm(g).includes(p))) bulundu++; else yok.push(`${yer} [${m[1]}]: ${q.slice(0, 110)}`);
  }
}
console.log(`evren: ${metinler.length} kaynak metni · TDV alıntısı ${alinti} · birebir bulundu ${bulundu} · bulunamadı ${alinti - bulundu} (önbellekte olmayan slug: ${onbYok})`);
yok.forEach(x => console.log("  ✗", x));

// ARAC-AYRIK-KAYIP2 — 216 riskli addaki "dusen" alan GERCEKTEN KAYIP MI?
//
// `_sahiplik_uygula.py` bir ad icin YALNIZ liste[0]'i uygular. 216 adda
// liste[1:] `liste[0]`da OLMAYAN bir veri alani tasiyor. Ama bu ancak o
// alanin icerigi CANLI VERIDE DE YOKSA kayiptir.
//
//   CANLI'da AYNI ise -> alan zaten inmis, kayip YOK (gecikme, kusur degil)
//   CANLI'dan FARKLI  -> gercekten INMIYOR, ve hicbir yerde raporlanmiyor
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);
function yukleDosya(p) {
  const ctx = { window: {}, console: { log() {} } };
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx); } catch (e) { return null; }
  let en = null;
  for (const a of Object.keys(ctx.window)) {
    const v = ctx.window[a];
    if (Array.isArray(v) && (!en || v.length > en.length)) en = v;
  }
  return en;
}
// CANLI = girdi.py'nin okudugu TUM yerlesim dosyalari degil; yamalarin
// hedefi `data/yerlesimler*.js`. Hepsini tara.
const CANLI = new Map();
for (const f of fs.readdirSync(path.join(KOK, "data")).sort()) {
  if (!/^yerlesimler.*\.js$/.test(f)) continue;
  const k = yukleDosya(path.join(KOK, "data", f));
  if (!k) continue;
  for (const r of k) if (r && r.ad && !CANLI.has(r.ad)) CANLI.set(r.ad, r);
}
if (CANLI.size < 1000) throw new Error("SESSIZ SIFIR: canli " + CANLI.size);
console.log("canli yerlesim: %d", CANLI.size);

const yamalar = [];
for (const f of fs.readdirSync(path.join(KOK, "data")).sort()) {
  if (!/^yer_yama.*\.js$/.test(f)) continue;
  const k = yukleDosya(path.join(KOK, "data", f));
  if (k) yamalar.push([f, k]);
}
const gruplu = new Map();
for (const [f, k] of yamalar)
  for (const r of k) {
    if (!r || !r.ad) continue;
    if (!gruplu.has(r.ad)) gruplu.set(r.ad, []);
    gruplu.get(r.ad).push([f, r]);
  }

const VERI = ["d", "s", "v", "isg", "m"];
const norm = x => JSON.stringify(x, Object.keys(x || {}).sort ? undefined : undefined);
const key = arr => JSON.stringify((arr || []).map(p =>
  Object.keys(p).sort().map(k => k + "=" + JSON.stringify(p[k])).join(",")).sort());

let kayip = [], zatenInmis = [], hedefYok = 0;
for (const [ad, liste] of gruplu) {
  if (liste.length < 2) continue;
  const ilk = new Set(Object.keys(liste[0][1]));
  const c = CANLI.get(ad);
  for (const [dosya, r] of liste.slice(1)) {
    for (const alan of VERI) {
      if (!(alan in r) || ilk.has(alan)) continue;
      if (!c) { hedefYok++; continue; }
      const ayni = (alan === "m")
        ? (c[alan] === r[alan])
        : (key(c[alan]) === key(r[alan]));
      (ayni ? zatenInmis : kayip).push([ad, alan, dosya, liste[0][0]]);
    }
  }
}
console.log("\n" + "=".repeat(70));
console.log("  liste[1:]'in alani CANLIDA ZATEN AYNI (kayip YOK) : %d", zatenInmis.length);
console.log("  liste[1:]'in alani CANLIDAN FARKLI  (INMIYOR)     : %d", kayip.length);
console.log("  hedef canlida bulunamadi                          : %d", hedefYok);
console.log("=".repeat(70));
const say = new Map();
for (const [, alan] of kayip) say.set(alan, (say.get(alan) || 0) + 1);
console.log("INMEYEN alan dagilimi: " +
  [...say.entries()].sort((a, b) => b[1] - a[1]).map(x => x[0] + " " + x[1]).join(" · "));
console.log("\n-- ilk 12 --");
for (const [ad, alan, dosya, ilkDosya] of kayip.slice(0, 12))
  console.log("   %s  [%s]  %s  (liste[0]=%s)", ad.padEnd(24), alan,
    dosya.slice(9, -3), ilkDosya.slice(9, -3));
if (kayip.length > 12) console.log("   … +" + (kayip.length - 12));

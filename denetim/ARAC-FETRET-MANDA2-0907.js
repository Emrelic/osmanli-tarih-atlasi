// ARAC-FETRET-MANDA2 — birinci olcum "baslangic gunu farki YOK" dedi
// (manda 0 · fetret 0 canlidan ayrilan). O halde 25 kaydin UST KUME
// OLMAMASININ sebebi baska. Bu alet onu bulur: donem donem SIMETRIK FARK.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);
function yukle(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) throw new Error("DOSYA YOK: " + rel);
  const ctx = { window: {}, console: { log() {} } };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  let en = null;
  for (const a of Object.keys(ctx.window)) {
    const v = ctx.window[a];
    if (Array.isArray(v) && (!en || v.length > en.length)) en = v;
  }
  if (!en || !en.length) throw new Error("SIFIR KAYIT: " + rel);
  return en;
}
const CANLI = yukle("data/yerlesimler.js");
const MANDA = yukle("data/yer_yama_manda_0906.js");
const FETRET = yukle("data/yer_yama_ok109_fetret.js");
const ix = (A) => { const m = new Map(); for (const r of A) if (r && r.ad) m.set(r.ad, r); return m; };
const cM = ix(CANLI), mM = ix(MANDA), fM = ix(FETRET);
const anahtar = (p) => (p.f || "?") + "|" + (p.t || "?") + "|" + (p.d || "?");
const kume = (r) => new Set((r && Array.isArray(r.s) ? r.s : []).map(anahtar));

const ortak = [...fM.keys()].filter(a => mM.has(a));
const gruplar = new Map();
for (const ad of ortak) {
  const M = kume(mM.get(ad)), F = kume(fM.get(ad)), C = kume(cM.get(ad));
  const yalnizM = [...M].filter(x => !F.has(x));
  const yalnizF = [...F].filter(x => !M.has(x));
  if (!yalnizM.length && !yalnizF.length) continue;
  const imza = "M+[" + yalnizM.map(x => x.replace(/\|1923-10-29/, "|~")).join(", ")
             + "]  F+[" + yalnizF.map(x => x.replace(/\|1923-10-29/, "|~")).join(", ") + "]";
  if (!gruplar.has(imza)) gruplar.set(imza, []);
  gruplar.get(imza).push({ ad, mYeni: yalnizM.filter(x => !C.has(x)).length,
                                fYeni: yalnizF.filter(x => !C.has(x)).length });
}
console.log("ortak ad %d · FARKLI olan %d",
  ortak.length, [...gruplar.values()].reduce((a, b) => a + b.length, 0));
console.log("=".repeat(74));
for (const [imza, kayitlar] of [...gruplar.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log("\nx%d  %s", kayitlar.length, imza);
  console.log("   " + kayitlar.map(k => k.ad).slice(0, 10).join(" · "));
  const mY = kayitlar.reduce((a, k) => a + k.mYeni, 0);
  const fY = kayitlar.reduce((a, k) => a + k.fYeni, 0);
  console.log("   CANLIDA OLMAYAN donem:  MANDA %d · FETRET %d", mY, fY);
}
console.log("\n" + "-".repeat(74));
console.log("=> 'CANLIDA OLMAYAN' 0 olan taraf YENI BILGI getirmiyor.");

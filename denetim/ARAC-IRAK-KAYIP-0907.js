// ARAC-IRAK-KAYIP-0907 — birlestirme KAYIP veriyor mu?
//
// ARAC-IRAK-BIRLESTIR'in "esitsiz 0" sinavi yalnizca IKI DOSYANIN
// BIRBIRIYLE uyustugunu gosterir. Bu ayri bir sorudur:
//   birlesim, her iki dosyanin ve CANLI verinin donemlerini KORUYOR MU?
// CLAUDE.md §3.5.1: "bir sinir kaymasi onerildiginde IKI UC DA olculur."
//
// Birlesim kurali: 14.yy(<1900) FETRET'ten · 20.yy(>=1900) MANDA'dan.
// RISK: MANDA'nin <1900 doneminde FETRET'te OLMAYAN bir sey varsa DUSER.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);
function yukle(rel) {
  const p = path.join(KOK, rel);
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
const M = yukle("data/yer_yama_manda_0906.js");
const F = yukle("data/yer_yama_ok109_fetret.js");
const ix = A => new Map(A.filter(r => r && r.ad).map(r => [r.ad, r]));
const cM = ix(CANLI), mM = ix(M), fM = ix(F);
const an = p => (p.f || "?") + "|" + (p.t || "?") + "|" + (p.d || "?");
const YY20 = "1900-01-01";

let kayipM = 0, kayipC = 0, satir = [];
for (const ad of fM.keys()) {
  if (!mM.has(ad)) continue;
  const f = fM.get(ad), m = mM.get(ad), c = cM.get(ad);
  const birlesim = new Set(
    (f.s || []).filter(p => (p.f || "") < YY20).map(an)
      .concat((m.s || []).filter(p => (p.f || "") >= YY20).map(an)));

  // (a) MANDA'nin HANGI donemi birlesimde YOK?
  const dM = (m.s || []).map(an).filter(x => !birlesim.has(x));
  // (b) CANLI'nin hangi donemi birlesimde YOK? (canli KAYNAK degil,
  //     ama sessiz kayip olursa Degismez 1 delik acar)
  const dC = ((c && c.s) || []).map(an).filter(x => !birlesim.has(x));
  if (dM.length || dC.length) {
    kayipM += dM.length; kayipC += dC.length;
    satir.push({ ad, dM, dC });
  }
}
console.log("ortak ad %d", [...fM.keys()].filter(a => mM.has(a)).length);
console.log("BIRLESIMDE OLMAYAN donem:  MANDA'dan %d · CANLI'dan %d",
  kayipM, kayipC);
for (const s of satir.slice(0, 12)) {
  console.log("  %s", s.ad);
  for (const x of s.dM) console.log("     M- " + x);
  for (const x of s.dC) console.log("     C- " + x);
}
if (satir.length > 12) console.log("  … +" + (satir.length - 12));
if (!satir.length) console.log("  -> HICBIRI. Birlesim iki ucu da KORUYOR.");

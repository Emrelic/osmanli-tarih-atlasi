// Oturum basina BENZERSIZ kimlik sayisi — plan tablosundaki "42" bir
// TOPLAM mi yoksa BENZERSIZ mi? (ASYA sordu, ve haklı olabilir.)
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py", { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const y = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(y)) continue;
  const d = { window: {} };
  vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(y, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) { const A = d.window[k]; if (!Array.isArray(A)) continue; for (const r of A) if (r && r.ad && r.lat !== undefined) N.push(r); }
}
const sh = (r) => {
  for (const p of (r.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (r.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (r.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
const altBolge = {}, oturum = {};
for (const r of N) {
  if (r.bit && r.bit <= G) continue;
  if (r.kur && r.kur > G) continue;
  const s = sh(r); if (!s) continue;
  const b = bolge(r), o = SAHIP[b];
  (altBolge[b] = altBolge[b] || new Set()).add(s);
  (oturum[o] = oturum[o] || new Set()).add(s);
}
console.log("ALT BOLGE           kimlik");
for (const [b, S] of Object.entries(altBolge).sort((a, c) => c[1].size - a[1].size))
  console.log("  " + b.padEnd(22) + String(S.size).padStart(4));
console.log("");
console.log("OTURUM                              BENZERSIZ   alt-bolge TOPLAMI");
for (const [o, S] of Object.entries(oturum)) {
  const alt = Object.entries(altBolge).filter(([b]) => SAHIP[b] === o);
  const toplam = alt.reduce((a, [, s]) => a + s.size, 0);
  const im = toplam === S.size ? "" : "  🔴 TOPLAM SISIRIYOR (+" + (toplam - S.size) + ")";
  console.log("  " + o.padEnd(34) + String(S.size).padStart(6) + String(toplam).padStart(16) + im);
}
// dunya geneli
const hepsi = new Set();
for (const S of Object.values(oturum)) for (const x of S) hepsi.add(x);
console.log("");
console.log("DUNYA benzersiz kimlik: " + hepsi.size +
  "   oturum toplamlari: " + Object.values(oturum).reduce((a, s) => a + s.size, 0) +
  "   (fark = birden cok oturumda gorunen kimlikler)");

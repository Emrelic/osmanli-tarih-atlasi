// Guyana kayıtlarının ALAN KÜMESİ — varsayılmaz, DÖKÜLÜR (§11).
// `kaynak:` var mı, ve dönem başına beyan var mı?
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const HEDEF = ["Cayenne", "Paramaribo", "Georgetown (Stabroek)",
  "New Amsterdam (Berbice)", "Kyk-over-al (Essequibo)"];
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (HEDEF.includes(y.ad)) K.set(y.ad, [y, f]);
}
for (const ad of HEDEF) {
  const e = K.get(ad);
  if (!e) { console.log("🔴 YOK: " + ad); continue; }
  const [y, f] = e;
  console.log("\n" + "=".repeat(72));
  console.log(ad + "   [" + f + "]");
  console.log("  ALANLAR: " + Object.keys(y).sort().join(" · "));
  for (const a of ["kaynak", "not", "bos", "neden", "kur"])
    if (y[a] !== undefined) console.log("  " + a + ": " + String(y[a]));
  console.log("  DÖNEM BAŞINA ALANLAR:");
  for (const p of (y.s || []))
    console.log("     " + p.f + " → " + p.t + "  " + p.d
      + "   {" + Object.keys(p).sort().join(",") + "}"
      + (p.kaynak ? "  kaynak:" + p.kaynak : ""));
}

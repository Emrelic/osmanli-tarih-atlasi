// Kutudaki "Beyan ..." noktaları — kimlik mi bekliyorlar, BEYAN mı?
// §11: `bos:` beş kovalı (devletsiz · kabile · veri-yok · insansiz · hata)
// ve cins `neden:`te DEĞİL `bos:`ta durur (girdi.py:831 — tanımlandığı yer).
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const ic = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k])
      if (typeof y.lat === "number" && y.lat >= 1.0 && y.lat <= 8.7
        && y.lon >= -61.5 && y.lon <= -51.0 && /^Beyan/.test(y.ad)) ic.push([y, f]);
}
console.log("Beyan noktasi: " + ic.length);
for (const [y, f] of ic) {
  console.log("\n" + y.ad + "   [" + f + "]");
  console.log("  ALANLAR: " + Object.keys(y).sort().join(" · "));
  for (const a of ["kasitli_bosluk", "bos", "neden", "kaynak", "not"])
    if (y[a] !== undefined) console.log("  " + a + ": " + String(y[a]).slice(0, 220));
  for (const kat of ["d", "v", "s", "isg"])
    for (const p of (Array.isArray(y[kat]) ? y[kat] : []))
      console.log("     " + kat + ": " + p.f + " → " + p.t + "  " + (p.d || p.k || ""));
}

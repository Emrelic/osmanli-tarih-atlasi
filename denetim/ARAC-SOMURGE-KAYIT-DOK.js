// ALTI SÖMÜRGE KÜMESİNİN KAYITLARI — alan kümesi ve `kaynak:` DÖKÜLÜYOR.
// Künye önerisi yazmadan önce: verideki günler NEREDEN geliyor?
// (§4: künyenin `f:`i bir kaynak değildir — ve tersi de: verinin günü de
//  bir kaynak değildir. İkisini de beyanına sormak gerek.)
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const HEDEF = [
  ["Jamaika", ["Spanish Town (Villa de la Vega)", "Port Royal", "Kingston"]],
  ["Trinidad", ["Port of Spain (Puerto de España)", "San José de Oruña (St. Joseph)"]],
  ["Belize / İngiliz Hondurası", ["Belize Town"]],
  ["Moskito kıyısı", ["Río Tinto (Black River, Moskito kıyısı)"]],
  ["Fiji", ["Suva", "Levuka", "Bau (Fiji Konfederasyonları)"]],
  ["Güney Georgia", ["Güney Georgia (Grytviken)"]],
];
const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (y && y.ad) K.set(y.ad, [y, f]);
}
for (const [kume, adlar] of HEDEF) {
  console.log("=".repeat(74));
  console.log(kume);
  for (const ad of adlar) {
    const e = K.get(ad);
    if (!e) { console.log("   🔴 YOK: " + ad); continue; }
    const [y, f] = e;
    console.log("\n   " + y.ad + "   (" + y.lat.toFixed(2) + ", " + y.lon.toFixed(2)
      + ")  kur:" + (y.kur || "—") + "   [" + f + "]");
    console.log("      alanlar: " + Object.keys(y).sort().join(" · "));
    for (const p of (y.s || []))
      console.log("        " + p.f + " → " + p.t + "  " + p.d);
    if (y.kaynak) console.log("      kaynak: " + String(y.kaynak));
    if (y.not) console.log("      not   : " + String(y.not));
  }
}

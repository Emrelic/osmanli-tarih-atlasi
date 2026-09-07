// ARAC-CAKISMA-BAK-0907 — bir cakismayi ACAR: adlari argumandan alir,
// her yamanin o ad icin ne dedigini ve CANLI'nin ne dedigini yan yana basar.
//   node ARAC-CAKISMA-BAK-0907.js "Sehrizor" "Istankoy"
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.dirname(__dirname);
const ADLAR = process.argv.slice(2);
if (!ADLAR.length) throw new Error("AD VER");

function yukle(p) {
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
const dosyalar = fs.readdirSync(path.join(KOK, "data"))
  .filter(f => /^yer_yama.*\.js$/.test(f));
const kaynaklar = [["CANLI yerlesimler.js", yukle(path.join(KOK, "data", "yerlesimler.js"))]];
for (const f of dosyalar) {
  const k = yukle(path.join(KOK, "data", f));
  if (k) kaynaklar.push([f, k]);
}
const an = p => (p.f || "?") + " -> " + (p.t || "?") + "  " + (p.d || "(tabi)");

// normalizasyon: Turkce/ASCII farkini yut
const nrm = s => (s || "").normalize("NFKD").replace(/[̀-ͯ]/g, "")
  .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
  .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
  .toLowerCase().trim();

for (const hedef of ADLAR) {
  console.log("\n" + "=".repeat(70));
  console.log("AD: " + hedef);
  console.log("=".repeat(70));
  let bulundu = 0;
  for (const [dosya, kayitlar] of kaynaklar) {
    const r = kayitlar.find(x => x && x.ad && nrm(x.ad) === nrm(hedef));
    if (!r) continue;
    bulundu++;
    const alanlar = Object.keys(r).filter(k => k !== "ad");
    console.log("\n-- %s   [alan: %s]", dosya, alanlar.join(","));
    for (const kat of ["d", "v", "s", "isg"]) {
      for (const p of (r[kat] || [])) console.log("     %-4s %s", kat, an(p));
    }
  }
  if (!bulundu) console.log("  HICBIR KAYNAKTA BULUNAMADI (ad normalizasyonu sonrasi)");
}

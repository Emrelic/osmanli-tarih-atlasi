// PAKET-A1 · 0042/H-0040 + H-0041 — padisahEslesmesi ölçümü (salt okuma)
// Kullanım: node denetim/ARAC-A1-PORTRE-0913.js
// index.html'in yüklediği data/*.js dosyalarını tek bağlamda yükler, app.js'ten
// ONEK..padisahEslesmesi bloğunu kesip çalıştırır, her kronoloji maddesinin
// portre seçimini (vefat_id yoksa kisiler adlarından) yeniden üretir.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of dosyalar) {
  try { vm.runInContext(fs.readFileSync(path.join(KOK, f), "utf8"), ctx, { filename: f }); }
  catch (e) { console.log("YUKLENEMEDI", f, e.message); }
}
const app = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");
const bas = app.indexOf("var ONEK = ");
const son = app.indexOf("// O tarihte hüküm süren padişahı bul");
if (bas < 0 || son < 0) { console.log("app.js blok bulunamadı"); process.exit(1); }
vm.runInContext(
  "function gunIdx(s){var p=s.split('-');return Math.round(Date.UTC(+p[0],(+p[1]||1)-1,+p[2]||1)/864e5);}\n" +
  app.slice(bas, son), ctx);

const maddeler = [];
for (const k of Object.keys(ctx)) {
  if (!/^(OLAYLAR|KRONOLOJI)/.test(k) || !Array.isArray(ctx[k])) continue;
  for (const o of ctx[k]) if (o && o.t) maddeler.push({ o, k });
}
// ESKİ davranış: "," ayracı, tarih yok · YENİ: /[,;]/ ayracı, madde günü `gi`
const gunIdx = vm.runInContext("gunIdx", ctx);
function portre(o, yeni) {
  const adlar = o.kisiler.split(yeni ? /[,;]/ : ",");
  const gi = gunIdx(o.t.length === 7 ? o.t + "-01" : o.t);
  for (const ad of adlar) {
    const p = ctx.padisahEslesmesi(ad, yeni ? gi : null);
    if (p) return { p, ad: ad.trim() };
  }
  return null;
}
let kisili = 0, eski = 0, yeni = 0, degisen = [];
for (const { o, k } of maddeler) {
  if (!o.kisiler || o.vefat_id) continue;
  kisili++;
  const a = portre(o, false), b = portre(o, true);
  if (a) eski++;
  if (b) yeni++;
  const ai = a ? a.p.id : "—", bi = b ? b.p.id : "—";
  if (ai !== bi) degisen.push([o.t, ai + " → " + bi, (a ? a.ad : "—") + " ⇒ " + (b ? b.ad : "—"), (o.b || "").slice(0, 50), k]);
}
console.log("madde:", maddeler.length, "| kisiler taşıyan (vefat_id yok):", kisili);
console.log("portre eşleşen  ESKİ:", eski, " YENİ:", yeni, " | değişen:", degisen.length);
for (const r of degisen) console.log("  " + r.join("  |  "));

// arac/antlasma_dogrula.py'nin node yükleyicisi: data/antlasma_madde_*.js kayıtlarını ve kronoloji/olay
// maddelerini (yalnız t, b, tur/k, antlasma_id) JSON olarak basar. Kullanım: node antlasma_dogrula_yukle.js <kok>
const fs = require("fs"), vm = require("vm"), path = require("path");
const kok = process.argv[2];
const dir = path.join(kok, "data");
const ctx = { window: {}, console: { log() {}, warn() {}, error() {} } };
ctx.window.window = ctx.window;
vm.createContext(ctx);
const hatalar = [];
const maddeDosyalari = fs.readdirSync(dir).filter(f => /^antlasma_madde_[\w\-]+\.js$/.test(f)).sort();
const kronDosyalari = fs.readdirSync(dir).filter(f => /^(olaylar|kronoloji)[\w.\-]*\.js$/.test(f));
for (const f of kronDosyalari) {
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { timeout: 20000 }); }
  catch (e) { hatalar.push(f + ": " + String(e).slice(0, 80)); }
}
const kayitlar = [];
for (const f of maddeDosyalari) {
  const once = (ctx.window.ANTLASMA_MADDELERI || []).length;
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { timeout: 20000 }); }
  catch (e) { hatalar.push(f + ": " + String(e).slice(0, 80)); continue; }
  (ctx.window.ANTLASMA_MADDELERI || []).slice(once).forEach(k => kayitlar.push(Object.assign({ _dosya: f }, k)));
}
const maddeler = [];
for (const [k, v] of Object.entries(ctx.window)) {
  if (Array.isArray(v) && /^(OLAYLAR|KRONOLOJI)/.test(k)) {
    for (const o of v) if (o && o.t && (o.b || o.baslik)) {
      maddeler.push({ t: o.t, b: String(o.b || o.baslik), tur: o.tur || o.k || "", aid: o.antlasma_id || "", d: k });
    }
  }
}
process.stdout.write(JSON.stringify({ kayitlar, maddeler, hatalar }));

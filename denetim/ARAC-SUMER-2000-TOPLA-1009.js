// SUMER-2000-OLCEK-1009 — index.html'in yüklediği data/ betiklerini node vm'de GERÇEKTEN eval
// eder; madde tarihlerini ve künye f/t'lerini JSON'a döker. Yalnız OKUR.
// Kullanım: node denetim/ARAC-SUMER-2000-TOPLA-1009.js <kok> <cikti.json>
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = process.argv[2], CIKTI = process.argv[3];
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const srcs = [...html.matchAll(/<script[^>]+src="(data\/[^"?]+)/g)].map(m => m[1]);
const ctx = { console: { log() {}, warn() {}, error() {} } };
ctx.window = ctx; ctx.self = ctx; ctx.document = { addEventListener() {}, querySelector() { return null; } };
vm.createContext(ctx);
const hata = [];
for (const s of srcs) {
  try { vm.runInContext(fs.readFileSync(path.join(KOK, s), "utf8"), ctx, { filename: s }); }
  catch (e) { hata.push(s + ": " + String(e.message).slice(0, 120)); }
}
const madde = [];   // [t, kaynak]
for (const k of Object.keys(ctx)) {
  if (!(/^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) || /^KRONOLOJI_[A-Z0-9_]+$/.test(k))) continue;
  const v = ctx[k];
  if (!Array.isArray(v)) continue;
  for (const m of v) if (m && m.t != null) madde.push([String(m.t), k]);
}
const kunye = [];
for (const d of (ctx.DEVLETLER || [])) {
  kunye.push([d.id, d.f == null ? null : String(d.f), d.t == null ? null : String(d.t)]);
  for (const m of (d.kronoloji || [])) if (m && m.t != null) madde.push([String(m.t), "DEVLETLER.kronoloji"]);
}
fs.writeFileSync(CIKTI, JSON.stringify({ betik: srcs.length, hata, madde, kunye }));
console.error("betik", srcs.length, "hata", hata.length, "madde", madde.length, "künye", kunye.length);

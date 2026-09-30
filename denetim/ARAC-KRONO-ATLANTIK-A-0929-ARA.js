// KRONO-ATLANTIK-A-0929 — mükerrer taraması: bütün olaylar*/kronoloji*/savaslar + künye kronolojileri
// Koşu: node denetim/ARAC-KRONO-ATLANTIK-A-0929-ARA.js <YYYY-MM-DD> <gün-penceresi> [anahtar-regex]
//       (anahtar verilmezse penceredeki HER madde basılır)
const fs = require("fs"), vm = require("vm");
const [gun, pen, rx] = [process.argv[2], +(process.argv[3] || 30), process.argv[4]];
const ctx = { window: {} }; vm.createContext(ctx);
const dosyalar = fs.readdirSync("data").filter(f => /^(olaylar|kronoloji|savaslar|devletler\.js)/.test(f) && f.endsWith(".js"));
const once = new Set(Object.keys(ctx.window));
const kaynak = {};
for (const f of dosyalar) {
  const onc = new Set(Object.keys(ctx.window));
  try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), ctx); } catch (e) { console.error("yüklenemedi", f, e.message); continue; }
  for (const k of Object.keys(ctx.window)) if (!onc.has(k)) kaynak[k] = f;
}
const gunS = s => { const m = /^(-?\d+)-(\d\d)-(\d\d)/.exec(s || ""); return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) / 864e5 : NaN; };
const g0 = gunS(gun), R = rx ? new RegExp(rx, "i") : null;
const bas = (yer, m) => {
  const t = m.t || m.tarih || m.baslangic; const dt = gunS(t);
  if (!(Math.abs(dt - g0) <= pen)) return;
  const metin = [m.b, m.baslik, m.ad, m.d, m.yer_id, m.devlet, (m.devletler || []).join(","), (m.taraflar || []).join(",")].join(" ");
  if (R && !R.test(metin)) return;
  console.log(`${t}  [${yer}]  ${(m.b || m.baslik || m.ad || "").slice(0, 110)}`);
};
for (const [k, v] of Object.entries(ctx.window)) {
  if (k === "DEVLETLER") { v.forEach(d => (d.kronoloji || []).forEach(m => bas("künye:" + d.id, m))); continue; }
  if (Array.isArray(v)) v.forEach(m => m && typeof m === "object" && bas(kaynak[k] || k, m));
}

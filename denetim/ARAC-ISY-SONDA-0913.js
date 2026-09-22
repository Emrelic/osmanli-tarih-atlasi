// PAKET-ISYAN · 13 Eylül 2026 · salt okuma SONDA.
// node denetim/ARAC-ISY-SONDA-0913.js
// Kutu 43-49,5°K · 20-30,5°D içinde 1590-1610 penceresine değen bütün d/v/s dönemlerini döker.
// AMAÇ: yalnız GEOMETRİ SEÇİCİ tasarlamak (hangi nokta hangi tâbi kimliğe bağlı) — tarih kaynağı DEĞİL (§4).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]).filter(s => /yerlesimler/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER;
console.log("YERLESIMLER", Y.length);
const kids = {};
Y.forEach(y => {
  if (typeof y.lat !== "number" || y.lat < 43 || y.lat > 49.5 || y.lon < 20 || y.lon > 30.5) return;
  const sat = [];
  ["d", "v", "s", "isg"].forEach(a => (y[a] || []).forEach(p => {
    if (p.t > "1590-01-01" && p.f < "1610-01-01") {
      sat.push(a + ":" + (p.kid || p.d || "") + (p.k ? "[" + p.k + "]" : "") + " " + p.f + "→" + p.t);
      if (a === "v") { const k = (p.kid || "") + "|" + (p.k || ""); kids[k] = (kids[k] || 0) + 1; }
    }
  }));
  console.log((y.ad + "").padEnd(22), y.lat.toFixed(2), y.lon.toFixed(2), sat.join(" · "));
});
console.log("\nv: kid|ad sayımı:", JSON.stringify(kids, null, 1));

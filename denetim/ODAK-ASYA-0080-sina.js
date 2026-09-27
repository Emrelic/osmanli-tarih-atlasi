// ODAK-ASYA-0080 · uygula betiğinin şart sınayıcısı (salt okuma).
// stdin: {"yer":["ad",…], "kimlik":[{"ids":[…],"gs":"YYYY-MM-DD"},…]}
// stdout: {"yer":{"ad":{"n":eşleşen yerleşim sayısı,"ilk":"ilk eşleşenin tam adı"}},
//          "kimlik":[{"n":…,"kunyesiz":[…]}]}
// Ad çözümü app.js `maddeOdakKutusu`/`olayKonumu` ile AYNI: tam ad ya da " (" öncesi.
// Kimlik sayımı app.js ile AYNI: SUZGEC.sahipKimlikte(sahipAnahtari, aktifVAdi, ids, künye).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]).filter(s => /yerlesimler|devletler\.js/.test(s))
  .forEach(rel => { const p = path.join(KOK, rel); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); });
const W = ctx;
const Y = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k])).reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const KIX = {}; (W.DEVLETLER || []).forEach(k => { if (k && k.id) KIX[k.id] = k; });
const girdi = JSON.parse(fs.readFileSync(0, "utf8"));
const out = { yer: {}, kimlik: [] };
for (const ad of girdi.yer || []) {
  const r = Y.filter(y => y.ad && (y.ad === ad || y.ad.split(" (")[0] === ad));
  out.yer[ad] = { n: r.length, ilk: r.length ? r[0].ad : "" };
}
for (const q of girdi.kimlik || []) {
  let n = 0;
  Y.forEach(y => {
    if (typeof y.lat !== "number" || typeof y.lon !== "number") return;
    if (SG.sahipKimlikte(SG.sahipAnahtari(y, q.gs), SG.aktifVAdi(y, q.gs), q.ids, KIX)) n++;
  });
  out.kimlik.push({ n, kunyesiz: q.ids.filter(i => !KIX[i]) });
}
process.stdout.write(JSON.stringify(out));

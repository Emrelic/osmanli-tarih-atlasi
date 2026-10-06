// ODAK-ASYA-0080 · salt okuma arama aleti.
// node denetim/ODAK-ASYA-0080-ara.js <YYYY-MM-DD> ad:<regex> ... id:<id,id,...> ...
//   ad:<regex>  → havuzdaki eşleşen yerleşimler: ad · lat,lon · o günkü sahip anahtarı
//   id:<a,b>    → o gün bu kimliklerin (app.js SUZGEC.sahipKimlikte) yerleşim sayısı + kutusu
//   kunye:<regex> → devletler.js'te id/ad eşleşen künyeler (id · ad · f → t · harita)
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const IK = require("./INDEX-KAYNAK-1006.js"); // W32: paket_NN.js açılır + SESSİZ SIFIR kapısı
IK.kaynaklar(html, /src="(data\/[^"?]+\.js)/).filter(s => /yerlesimler|devletler\.js/.test(s)).forEach(yukle);
const W = ctx;
const Y = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k])).reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
IK.yerlesimKapisi(Y);
const KIX = {}; (W.DEVLETLER || []).forEach(k => { if (k && k.id) KIX[k.id] = k; });
const gs = process.argv[2];
for (const a of process.argv.slice(3)) {
  if (a.startsWith("ad:")) {
    const re = new RegExp(a.slice(3), "i");
    const r = Y.filter(y => y.ad && re.test(y.ad));
    console.log(`ad /${a.slice(3)}/ → ${r.length}`);
    r.slice(0, 300).forEach(y => console.log(`   ${y.ad} · ${y.lat},${y.lon} · ${SG.sahipAnahtari(y, gs) || "—"}`));
  } else if (a.startsWith("id:")) {
    const ids = a.slice(3).split(",");
    let n = 0, x0 = 180, y0 = 90, x1 = -180, y1 = -90; const ad = [];
    Y.forEach(y => {
      if (typeof y.lat !== "number" || typeof y.lon !== "number") return;
      if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, KIX)) return;
      n++; ad.push(y.ad.split(" (")[0]);
      x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat);
    });
    console.log(`id ${ids.join(",")} @${gs} → ${n}` + (n ? ` kutu lon ${x0.toFixed(1)}..${x1.toFixed(1)} lat ${y0.toFixed(1)}..${y1.toFixed(1)}` : "") + ` [${ad.slice(0, 12).join(", ")}${ad.length > 12 ? " …" : ""}]` + ids.filter(i => !KIX[i]).map(i => " ⚠️KÜNYESİZ:" + i).join(""));
  } else if (a.startsWith("kunye:")) {
    const re = new RegExp(a.slice(6), "i");
    (W.DEVLETLER || []).filter(k => re.test(k.id) || re.test(k.ad || "")).slice(0, 25)
      .forEach(k => console.log(`   künye ${k.id} · ${k.ad} · ${k.f} → ${k.t}${k.harita ? " · harita:" + k.harita : ""}`));
  }
}

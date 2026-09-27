// ODAK-OSMANLI-ANADOLU-0080 — `odak_kimlik` ölçeri.
// app.js `maddeOdakKutusu` ile AYNI yolu koşar: window.YERLESIMLER (data/yerlesimler.js),
// SUZGEC.sahipAnahtari/aktifVAdi/sahipKimlikte (js/suzgec.js), künye dizini (data/devletler.js).
// Kullanım: node denetim/ODAK-OSMANLI-ANADOLU-0080-kimlik.js <gun> <id>[,<id>…] [<gun> <id>…]
//   → her çift için yerleşim sayısı, kutu, ilk 8 ad. n < 2 ise app.js kutu KURAMAZ.
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
global.window = global;
for (const f of ["data/devletler.js", "data/yerlesimler.js"]) {
  eval(fs.readFileSync(path.join(KOK, f), "utf8"));
}
const SG = require(path.join(KOK, "js/suzgec.js"));
const kix = {};
(window.DEVLETLER || []).forEach(d => { if (d && d.id) kix[d.id] = d; });
const Y = window.YERLESIMLER || [];
const a = process.argv.slice(2);
for (let i = 0; i + 1 < a.length; i += 2) {
  const gs = a[i], ids = a[i + 1].split(",");
  const yok = ids.filter(x => x !== "osmanli" && !kix[x]);
  let n = 0, x0 = 180, y0 = 90, x1 = -180, y1 = -90; const ad = [];
  Y.forEach(y => {
    if (typeof y.lat !== "number" || typeof y.lon !== "number") return;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kix)) return;
    n++; ad.push(y.ad);
    x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat);
  });
  console.log(gs + " " + ids.join(",") + " → n=" + n + (n >= 2 ? "" : " 🔴KUTU YOK") +
    (yok.length ? " ⚠️künyede YOK:" + yok.join(",") : "") +
    (n ? " kutu=[" + [x0, y0, x1, y1].map(v => v.toFixed(2)).join(",") + "]" : "") +
    " · " + ad.slice(0, 8).join(" | "));
}

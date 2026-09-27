// ODAK-AVRUPA-BATI-0080 — odak önerisi sınayıcısı. app.js maddeOdakKutusu ile
// AYNI kurallar: ad eşleşmesi BİREBİR ya da " (" öncesi; odak_kimlik sayımı
// js/suzgec.js'in sahipAnahtari/sahipKimlikte/aktifVAdi işlevleriyle, künye
// dizini data/devletler.js'ten. Kullanım:
//   node sina.js <havuz.json> ad <regex>            ad arar (lat,lon basar)
//   node sina.js <havuz.json> id <regex>            devletler.js id/ad arar
//   node sina.js <havuz.json> kimlik <gun> <id,id>  o gün kaç yerleşim + kutu
//   node sina.js <havuz.json> dosya <oneri.json>    toplu sınav (JSON çıktı)
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(KOK, "data/devletler.js"), "utf8"));
const SG = require(path.join(KOK, "js/suzgec.js"));
const DEV = window.DEVLETLER || [];
const kix = {}; DEV.forEach(d => { if (d && d.id) kix[d.id] = d; });
const Y = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));

function adBul(ad) {
  for (const y of Y) if (y.ad === ad || y.ad.split(" (")[0] === ad) return y;
  return null;
}
function kimlikSay(gs, ids) {
  let n = 0, x0 = 180, y0 = 90, x1 = -180, y1 = -90;
  for (const y of Y) {
    if (typeof y.lat !== "number") continue;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kix)) continue;
    n++; x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat);
  }
  return { n, kutu: n ? [x0, y0, x1, y1].map(v => +v.toFixed(2)) : null };
}
function gun(t) { // app.js gi → YYYY-MM-DD; madde t'si ay/yıl ise 01 tamamlanır
  const p = String(t).split("-"); while (p.length < 3) p.push("01");
  return p[0].padStart(4, "0") + "-" + p[1] + "-" + p[2];
}
const kip = process.argv[3];
if (kip === "ad") {
  const r = new RegExp(process.argv[4], "i");
  Y.filter(y => r.test(y.ad)).slice(0, 40).forEach(y => console.log(y.ad, y.lat, y.lon));
} else if (kip === "id") {
  const r = new RegExp(process.argv[4], "i");
  DEV.filter(d => r.test(d.id) || r.test(d.ad || "")).slice(0, 40)
     .forEach(d => console.log(d.id, "|", d.ad, "|", d.f, "→", d.t, "| harita:", d.harita || ""));
} else if (kip === "kimlik") {
  console.log(JSON.stringify(kimlikSay(gun(process.argv[4]), process.argv[5].split(","))));
} else if (kip === "dosya") {
  const L = JSON.parse(fs.readFileSync(process.argv[4], "utf8"));
  const out = L.map(o => {
    const r = { anahtar: o.dosya + "|" + o.t + "|" + o.b.slice(0, 40), sinif: o.sinif };
    const y = o.yeni || {};
    if (y.yer_id) r.yer_id = adBul(y.yer_id) ? "OK" : "YOK";
    if (y.odak_yer) r.odak_yer = y.odak_yer.map(a => a + ":" + (adBul(a) ? "OK" : "YOK")).join(" ");
    if (y.odak_kimlik) { const k = kimlikSay(gun(o.t), y.odak_kimlik); r.odak_kimlik = k.n + " " + JSON.stringify(k.kutu); }
    if (y.odak_kimlik) y.odak_kimlik.forEach(i => { if (!kix[i]) r.kunye_yok = (r.kunye_yok || []).concat(i); });
    return r;
  });
  console.log(JSON.stringify(out, null, 0).replace(/\},\{/g, "},\n{"));
}

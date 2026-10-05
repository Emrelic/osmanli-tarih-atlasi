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
// W36 (6 Ekim 2026): index.html 29 Eylul'den (af0c78c6) beri `data/paket_NN.js` yukluyor;
//   eski regex yalniz 1 dosya (yerlesimler_epir.js) buluyor, devletler.js'i HIC bulmuyordu
//   ve sonuc SESSIZCE yanlisti (Bagdat n=0 · "osmanli" kunyesiz). Paketler artik
//   `data/paket_kunye.json` ile ACILIR (arac/paket_coz.py ile ayni kural); ayni dosya
//   kumesi, ayni sira. Bos/eksik kume SESSIZ GECMEZ — betik durur.
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const etiket = [...new Set([...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]))];
let kunye = null;
const kaynak = [];
for (const rel of etiket) {
  if (!/^data\/paket_\d+\.js$/.test(rel)) { kaynak.push(rel); continue; }
  if (!kunye) {
    const kp = path.join(KOK, "data", "paket_kunye.json");
    if (!fs.existsSync(kp)) { console.error("OLCULEMEDI — data/paket_kunye.json yok, paket acilamaz"); process.exit(2); }
    kunye = {};
    for (const p of JSON.parse(fs.readFileSync(kp, "utf8")).paketler || []) kunye[p.paket] = (p.kaynak || []).map(s => s.yol);
  }
  if (!kunye[rel]) { console.error("OLCULEMEDI — " + rel + " kunyede yok"); process.exit(2); }
  kaynak.push(...kunye[rel]);
}
const secili = [...new Set(kaynak)].filter(s => /yerlesimler|devletler\.js/.test(s));
const eksik = secili.filter(rel => !fs.existsSync(path.join(KOK, rel)));
if (!secili.some(s => /devletler\.js$/.test(s)) || !secili.some(s => /yerlesimler/.test(s)) || eksik.length) {
  console.error("OLCULEMEDI — yerlesim/kunye kumesi eksik: secili " + secili.length + " · diskte yok " + eksik.join(", "));
  process.exit(2);
}
secili.forEach(rel => vm.runInContext(fs.readFileSync(path.join(KOK, rel), "utf8"), ctx, { filename: rel }));
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

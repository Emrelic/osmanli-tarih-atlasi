// PAKET-UI3 · 14 Eylül 2026 · salt okuma ölçüm aleti.
// node denetim/ARAC-UI3-OLCUM-0914.js [--is1] [--is2] [--gun YYYY-MM-DD]
// İŞ 1: aynı gün maddesi → o maddenin değiştirdiği yerleşimler (kural adayları ölçülür)
// İŞ 2: dış olay önem süzgeci — eşik başına gizlenen madde, puansız ayrımı, kırılma istisnası
// Yükleyici ARAC-UI2-FARK-0913.js ile aynı (index.html'deki script sırası).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ARG = process.argv.slice(2);
const IS1 = ARG.indexOf("--is1") >= 0 || ARG.indexOf("--is2") < 0;
const IS2 = ARG.indexOf("--is2") >= 0 || ARG.indexOf("--is1") < 0;
const GUNARG = ARG.indexOf("--gun") >= 0 ? ARG[ARG.indexOf("--gun") + 1] : null;
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [];
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).filter(o => o.kapsam !== "konu")
  .map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
console.log("YERLESIMLER", Y.length, "· olaylar (konu hariç)", olaylar.length, "· künye", KUNYE.length);

if (IS1) {
  const IX = SG.sinirIndeksi(Y);
  const t0 = Date.now();
  // app.js'in kullanacağı AYNI fonksiyon
  const say = { gunDegisimli: 0, madde: 0, eslesen: 0, eslesmeyen: 0, yol: {} };
  const gruplar = {};
  // ⚠️ 1281-01-01 atlasın PENCERE UCU (D180): gün−1'de her yer sahipsiz, 2366 "değişim" çıkar. app.js BASLANGIC'ta atlar.
  olaylar.forEach(o => { if (o.t.split("-").length === 3 && o.t > "1281-01-01") (gruplar[o.t] = gruplar[o.t] || []).push(o); });
  const cokluGun = Object.keys(gruplar).filter(g => gruplar[g].length >= 2);
  const satir = [];
  let cokDegisim = 0, cokAtfedilen = 0, cokCakisan = 0;
  if (ARG.indexOf("--km") >= 0) SG.MADDE_DEGISIM_AYAR.komsuKm = +ARG[ARG.indexOf("--km") + 1];
  // bütün maddeler: kaç madde gününde değişim var, kaçına bağ bulunuyor (not kaç kez çıkar)
  const tum = { degisimli: 0, bagli: 0, notCikar: 0, notCikarCoklu: 0, antlasmaAtlanan: 0, yol: {} };
  Object.keys(gruplar).forEach(g => gruplar[g].forEach(o => {
    const r = SG.maddeDegisimleri(o, g, Y, IX, gruplar[g]);
    if (!r.degisim.length) return;
    if (o.k === "antlasma") { tum.antlasmaAtlanan++; return; }
    tum.degisimli++;
    if (r.secilen.length) { tum.bagli++; r.secilen.forEach(d => tum.yol[d.yol] = (tum.yol[d.yol] || 0) + 1); }
    else { tum.notCikar++; if (gruplar[g].length > 1) tum.notCikarCoklu++; }
  }));
  console.log("\n① İŞ 1 · komsuKm", SG.MADDE_DEGISIM_AYAR.komsuKm, "· BÜTÜN tam-günlü maddeler: gününde değişim olan (antlaşma hariç)", tum.degisimli,
    "· bağ bulunan", tum.bagli, "· 'belirlenemedi' notu", tum.notCikar, "(çok maddeli günde", tum.notCikarCoklu + ")",
    "· antlaşma (UI2 kutusu, atlandı)", tum.antlasmaAtlanan, "· yol", JSON.stringify(tum.yol));
  cokluGun.forEach(g => {
    const degisenGun = SG.gunDegisimleri(Y, IX, g);
    if (!degisenGun.length) return;
    say.gunDegisimli++;
    const kim = {};
    gruplar[g].forEach(o => {
      const r = SG.maddeDegisimleri(o, g, Y, IX, gruplar[g]);
      say.madde++;
      if (r.secilen.length) say.eslesen++; else say.eslesmeyen++;
      r.secilen.forEach(d => { say.yol[d.yol] = (say.yol[d.yol] || 0) + 1; (kim[d.i] = kim[d.i] || []).push(o.b.slice(0, 20)); });
      if (!GUNARG || GUNARG === g) satir.push("   " + g + " · " + String(r.secilen.length).padStart(3) + "/" + degisenGun.length + " · " +
        o.b.slice(0, 55) + " · " + r.secilen.slice(0, 8).map(d => Y[d.i].ad + "[" + d.yol + "]").join(", "));
    });
    cokDegisim += degisenGun.length;
    cokAtfedilen += Object.keys(kim).length;
    cokCakisan += Object.keys(kim).filter(i => kim[i].length > 1).length;
  });
  console.log("\n① İŞ 1 · çok maddeli gün", cokluGun.length, "· değişimli olan", say.gunDegisimli,
    "· madde", say.madde, "· bağı bulunan", say.eslesen, "· bulunamayan", say.eslesmeyen,
    "· yol", JSON.stringify(say.yol), "·", Date.now() - t0, "ms");
  console.log("   o günlerin değişen yerleşimi", cokDegisim, "· bir maddeye atfedilen", cokAtfedilen,
    "· iki maddeye birden atfedilen", cokCakisan);
  const goster = (GUNARG || ARG.indexOf("--hepsi") >= 0) ? satir : satir.filter(s => /1521-01-01|1453-05-29|1699-01-26|1878-07-13|1516-08-24|1683-09-12|1913-09-29/.test(s));
  goster.forEach(s => console.log(s));
}

if (IS2) {
  const donem = W.DONEMLER || W.donemler;
  console.log("\n② İŞ 2 · evren", olaylar.length);
  const s = SG.onemSay(olaylar);
  console.log("   onemSay", JSON.stringify(s));
  const kir = [];
  if (donem) for (let d = 1; d < donem.length; d++) kir.push(gunIdx(donem[d].f));   // app.js: donemler[d].fi = gunIdx(DONEMLER[d].f)
  console.log("   Osmanlı kırılması (donemler fi)", kir.length, donem ? "" : "· DONEMLER YÜKLENEMEDİ");
  const gi = olaylar.map(o => o.gi);
  ["0", "5", "4", "hepsi"].forEach(e => {
    const r = SG.disOnemGizli(olaylar, e, gi, kir, 30);
    const gizli = Object.keys(r.gizli).length;
    console.log("   eşik", e.padEnd(5), "· gizli", String(gizli).padStart(4), "· görünen", olaylar.length - gizli,
      "· istisna (Osmanlı kırılmasını maddesiz bırakmasın diye görünür)", r.istisna.length,
      r.istisna.length ? "→ " + r.istisna.map(x => x.i).map(i => olaylar[i].t + " " + olaylar[i].b.slice(0, 40) + " (onem " + olaylar[i].onem + ")").join(" | ") : "");
  });
}

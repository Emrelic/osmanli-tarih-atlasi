// YUK-BOLME-0925 — DILIM SINAVI (node). Iki soru:
//  S1 TAMLIK: bir gun t icin app'in sectigi dilim yuklenince, o gun aktif her
//     kaydin (Osmanli o/v/h, yabanci dnm.g) her halkasi mevcut mu?
//     Test gunleri: her kaydin f, f-1, t, t-1 gunu + dilim sinirlari ±1 +
//     BASLANGIC/BITIS — pencereye kirpilmis. aktifAralik ve gunIdx app.js'in AYNISI.
//  S2 AYNILIK: dilimdeki her halka, ORIJINAL havuzdaki ayni indeksli halkayla
//     birebir ayni mi (JSON esitligi)?  Orijinal: --orijinal <kok>/data/*.js
// Kullanim: node denetim/ARAC-YUK-SINAV-0925.js <dilimli kok> <orijinal kok>
const fs = require("fs"), path = require("path"), vm = require("vm");
const [DKOK, OKOK] = process.argv.slice(2);
function yukle(dosya) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(dosya, "utf8"), ctx); return ctx.window;
}
function gunIdx(s) { var p = s.split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); }
const BASLANGIC = gunIdx("1281-01-01"), BITIS = gunIdx("1923-10-29");
function aktifAralik(fi, ti, t) { return fi <= t && (t < ti || (t === BITIS && ti === BITIS)); }

// Tarayicinin okudugu _web kopyalari (arac/geo_dilimle.py); orijinal havuz ASIL dosyalarda.
const W = Object.assign({}, yukle(path.join(DKOK, "data/donemler_web.js")), yukle(path.join(DKOK, "data/devletler_harita_web.js")));
const G = W.GEO_DILIMLER;
const SINIR = G.d.map(x => gunIdx(x.f));
// 🔴 app.js geoDilimNo ile AYNI olmali
function geoDilimNo(t) { var i = 0; while (i + 1 < SINIR.length && SINIR[i + 1] <= t) i++; return i; }

const KAY = [];
W.DONEMLER.forEach((d, n) => {
  const ph = [].concat(d.o || [], d.v || []); (d.h || []).forEach(h => ph.push(...(h.g || [])));
  KAY.push({ fi: gunIdx(d.f), ti: gunIdx(d.t), ph, havuz: "o", ad: "osm#" + n });
});
W.DEVLET_HARITA.forEach(s => s.dnm.forEach((p, n) => KAY.push({ fi: gunIdx(p.f), ti: gunIdx(p.t), ph: p.g || [], havuz: "y", ad: s.id + "#" + n })));

const gunler = new Set([BASLANGIC, BITIS]);
KAY.forEach(k => [k.fi, k.fi - 1, k.ti, k.ti - 1].forEach(x => gunler.add(x)));
SINIR.forEach(x => [x - 1, x, x + 1].forEach(y => gunler.add(y)));
const GUN = [...gunler].filter(x => x >= BASLANGIC && x <= BITIS).sort((a, b) => a - b);

// dilimleri bir kez oku
const DIL = G.d.map(x => { const j = JSON.parse(fs.readFileSync(path.join(DKOK, x.dosya), "utf8"));
  return { o: new Map(j.o.i.map((i, k) => [i, j.o.r[k]])), y: new Map(j.y.i.map((i, k) => [i, j.y.r[k]])) }; });

let s1_gun = 0, s1_kayit = 0, s1_eksik = 0; const eksikOrnek = [];
for (const t of GUN) {
  const D = DIL[geoDilimNo(t)]; s1_gun++;
  for (const k of KAY) {
    if (!aktifAralik(k.fi, k.ti, t)) continue;
    s1_kayit++;
    const PH = k.havuz === "o" ? W.PARCA_HALKA : W.DEVLET_PARCA_HALKA, H = D[k.havuz];
    for (const p of k.ph) { if (typeof p !== "number") continue;
      for (const h of PH[p]) if (!H.has(h)) { s1_eksik++; if (eksikOrnek.length < 10) eksikOrnek.push([t, k.ad, h]); } }
  }
}
console.log("S1 TAMLIK: test gunu " + s1_gun + " · aktif kayit-gun " + s1_kayit + " · EKSIK halka " + s1_eksik);
if (eksikOrnek.length) console.log("   ornek:", JSON.stringify(eksikOrnek));

if (OKOK) {
  const O1 = yukle(path.join(OKOK, "data/donemler.js")).PARCALAR;
  const O2 = yukle(path.join(OKOK, "data/devletler_harita.js")).DEVLET_PARCALAR;
  let n = 0, fark = 0;
  DIL.forEach(D => { for (const [i, r] of D.o) { n++; if (JSON.stringify(r) !== JSON.stringify(O1[i])) fark++; }
                     for (const [i, r] of D.y) { n++; if (JSON.stringify(r) !== JSON.stringify(O2[i])) fark++; } });
  console.log("S2 AYNILIK: karsilastirilan halka " + n + " · FARKLI " + fark + " · havuz boyu o=" + O1.length + "/" + G.o_n + " y=" + O2.length + "/" + G.y_n);
}

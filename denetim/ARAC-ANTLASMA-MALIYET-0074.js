// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · SALT OKUMA · MALİYET + GÜN KARŞILAŞTIRMASI.
//   node denetim/ARAC-ANTLASMA-MALIYET-0074.js
// ① Bugünkü "Öncesi" düğmesinin günü ile `savas_basi` arasındaki fark (gün).
// ② Üç kademenin UNION petek sayısı (tek katmana kaç özellik yüklenecek).
// ③ K1 hesabının süresi (tam YERLESIMLER taraması, madde başına).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|kronoloji|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [], ANT = W.ANTLASMALAR || [], PET = W.PETEKLER || [];
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);
const IX = SG.sinirIndeksi(Y);
const petAd = {}; PET.forEach((p, i) => { if (p && p.a) petAd[p.a] = i; });
const isgalAnahtari = (y, gs) => { const L = y.isg || []; for (let i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d; return ""; };
console.log("PETEKLER:", PET.length, "· adı eşleşen sözlük:", Object.keys(petAd).length);

const kaynakVar = ANT.filter(a => a.kaynak || a.savas_kaynak).length;
console.log("① ANTLASMALAR kaydında `kaynak` alanı:", kaynakVar, "/", ANT.length, "(savas_basi'nin kaynağı künyede YAZILI DEĞİLSE D210 gereği bildirilir)");

console.log("\n② BUGÜNKÜ 'Öncesi' GÜNÜ  vs  savas_basi  (üç kademesi dolu maddeler)");
let sureTop = 0, n = 0, unionTop = 0, bugunTop = 0;
evren.forEach(o => {
  const a = an(o); if (!a || !a.savas_basi) return;
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), a.taraf || [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T);
  if (!f) return;
  const gunStr = f.gun, onceStr = SG.gunKaydir(gunStr, -1), sonG = idxStr(sonIx);
  const t0 = Date.now();
  // üç kademenin UNION'u: K1 farkı ∪ fiilî işgal ∪ bugünkü fark
  const U = new Set(); let k1 = 0, k2 = 0;
  const sb = SG.gunKaydir(a.savas_basi, -1);
  Y.forEach((y, i) => {
    const p = SG.sahipAnahtari(y, sb), q = SG.sahipAnahtari(y, sonG);
    if (p !== q && (SG.sahipIlgiliMi(p, T) || SG.sahipIlgiliMi(q, T))) { k1++; U.add(i); }
    const g = isgalAnahtari(y, onceStr); if (g && T[g]) { k2++; U.add(i); }
  });
  f.degisim.forEach(d => U.add(d.i));
  const sure = Date.now() - t0;
  sureTop += sure; n++;
  let petYok = 0; U.forEach(i => { if (petAd[Y[i].ad] === undefined) petYok++; });
  if (k1 + k2 === 0) return;
  unionTop += U.size; bugunTop += f.degisim.length;
  const gecen = gunIdx(onceStr) - gunIdx(a.savas_basi);
  console.log("   " + o.t + "  bugünkü 'Öncesi'=" + onceStr + "  savas_basi=" + a.savas_basi +
    "  ARA=" + String(gecen).padStart(5) + " gün  ·  bugün çizilen=" + String(f.degisim.length).padStart(3) +
    " → union=" + String(U.size).padStart(3) + " (peteksiz " + petYok + ")  ·  " + sure + " ms  " + o.b.slice(0, 40));
});
console.log("\n③ MALİYET: ölçülen madde", n, "· K1+K2 taraması madde başına ortalama", (sureTop / Math.max(1, n)).toFixed(1), "ms");
console.log("   çizilen özellik: bugün toplam", bugunTop, "→ üç kademede", unionTop, "(×" + (unionTop / Math.max(1, bugunTop)).toFixed(1) + ")");

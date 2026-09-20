// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · SALT OKUMA · KADEMELERİN AYIRT EDİLEBİLİRLİĞİ.
//   node denetim/ARAC-ANTLASMA-AYIRT-0074.js [--json <yol>]
// DECİSİF SORU: üç kademe BİRBİRİNDEN FARKLI mı? Kademe tanımı (bu oturumun teşhisi):
//   K1 savaştan önce      = de-jure sahiplik, `savas_basi` − 1 günü
//   K2 savaş sonrası fiilî = de-jure sahiplik (bugünkü "Öncesi" günü) + O GÜNKÜ isg: işgali
//   K3 antlaşmadan sonra  = de-jure sahiplik, kırılma günü (bugünkü "Sonrası")
// Üç kademe ANLAMLIDIR ⇔ K1≠K2 (savaş toprak değiştirdi ya da işgal var) ∧ K2≠K3 (antlaşma bir şey değiştirdi).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const jArg = process.argv.indexOf("--json"); const JSONYOL = jArg >= 0 ? process.argv[jArg + 1] : null;
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|kronoloji|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [], ANT = W.ANTLASMALAR || [];
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);
const IX = SG.sinirIndeksi(Y);
const isgalAnahtari = (y, gs) => { const L = y.isg || []; for (let i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d; return ""; };

const S = { "uc-kademe": 0, "iki-kademe": 0, "kademe-yok": 0, "savas-basi-yok": 0 };
const sat = [], ham = [];
evren.forEach(o => {
  const a = an(o);
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), (a && a.taraf) || [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T);
  const k3var = !!f;
  if (!a || !a.savas_basi) {
    S["savas-basi-yok"]++;
    ham.push({ t: o.t, b: o.b.slice(0, 60), sinif: "savas-basi-yok", k1k2: null, k2k3: k3var ? f.degisim.length : 0 });
    return;
  }
  const gunStr = f ? f.gun : idxStr(o.gi), k2gun = SG.gunKaydir(gunStr, -1), k1gun = SG.gunKaydir(a.savas_basi, -1);
  let k1k2 = 0, k1k2Isgal = 0;
  Y.forEach(y => {
    const p = SG.sahipAnahtari(y, k1gun);
    const q = SG.sahipAnahtari(y, k2gun), isg = isgalAnahtari(y, k2gun);
    const q2 = (isg && T[isg]) ? "isg:" + isg : q;       // fiilî hâl: işgal de-jure'yi ÖRTER
    if (isg && T[isg] && q !== q2) k1k2Isgal++;
    if (p !== q2 && (SG.sahipIlgiliMi(p, T) || SG.sahipIlgiliMi(q, T) || (isg && T[isg]))) k1k2++;
  });
  const k2k3 = f ? f.degisim.length : 0;
  const sinif = (k1k2 > 0 && k2k3 > 0) ? "uc-kademe" : (k2k3 > 0 || k1k2 > 0) ? "iki-kademe" : "kademe-yok";
  S[sinif]++;
  const kayit = { t: o.t, b: o.b.slice(0, 58), savas_basi: a.savas_basi, k1gun, k2gun, k1k2, k1k2Isgal, k2k3, sinif };
  ham.push(kayit); if (sinif === "uc-kademe") sat.push(kayit);
});
console.log("EVREN:", evren.length, "antlaşma maddesi");
console.log("  ÜÇ kademe AYIRT EDİLEBİLİR (K1≠K2 ∧ K2≠K3):", S["uc-kademe"]);
console.log("  yalnız İKİ kademe ayırt edilebilir       :", S["iki-kademe"]);
console.log("  hiçbir kademe farkı yok                  :", S["kademe-yok"]);
console.log("  `savas_basi` YOK — K1 TÜRETİLEMEZ        :", S["savas-basi-yok"], "(ANTLASMALAR kaydı olmayan ya da alanı boş madde)");
console.log("\nÜÇ KADEMELİ MADDELER (K1≠K2 · K2≠K3):");
sat.sort((x, y) => y.k1k2 - x.k1k2).forEach(s => console.log("   " + s.t + "  K1(" + s.k1gun + ")≠K2: " + String(s.k1k2).padStart(3) +
  " (bunun " + String(s.k1k2Isgal).padStart(3) + "'ü İŞGAL) · K2≠K3: " + String(s.k2k3).padStart(3) + "   " + s.b));
if (JSONYOL) { fs.writeFileSync(path.join(KOK, JSONYOL), JSON.stringify({ olculdu: "2026-09-21", alet: "denetim/ARAC-ANTLASMA-AYIRT-0074.js", evren: evren.length, sinif: S, maddeler: ham }, null, 1), "utf8"); console.log("\nJSON →", JSONYOL); }

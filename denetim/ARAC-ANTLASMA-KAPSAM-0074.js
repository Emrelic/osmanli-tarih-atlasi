// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · SALT OKUMA · ÜÇÜNCÜ KADEMENİN KAPSAM SEÇENEKLERİ.
//   node denetim/ARAC-ANTLASMA-KAPSAM-0074.js
// Üçüncü kademe HANGİ petek kümesine çizilecek? Üç seçeneğin petek sayısı ve
// GeoJSON yükü (data/petek_govde.js gövdeleri, ortalama 2769 bayt/petek):
//   DAR  = bugünkü fark kümesi (antlaşmanın el değiştirdiği yerleşimler)
//   ORTA = DAR ∪ antlaşma gününde taraf işgali altındaki ∪ pencerede işgali biten
//   GENİŞ= savaş başından antlaşma sonrasına sahipliği değişen HER taraf yerleşimi
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
[...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1])
  .filter(s => /olaylar|kronoloji|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
yukle("data/petek_govde.js");
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [], ANT = W.ANTLASMALAR || [], PET = W.PETEKLER || [];
const G = W.PETEK_GOVDE || [], PARCA = W.PETEK_GOVDE_PARCA || [];
const petAd = {}; PET.forEach((p, i) => { if (p && p.a) petAd[p.a] = i; });
const yuk = ix => { const j = petAd[ix]; return (j === undefined || !G[j]) ? 0 : G[j].reduce((a, k) => a + JSON.stringify(PARCA[k]).length, 0); };
const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };
const olaylar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), []).map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);
const IX = SG.sinirIndeksi(Y);
const isgalAnahtari = (y, gs) => { const L = y.isg || []; for (let i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d; return ""; };
const KB = b => (b / 1024).toFixed(0);

let TD = 0, TO = 0, TG = 0, n = 0;
console.log("madde                              DAR         ORTA         GENİŞ");
evren.forEach(o => {
  const a = an(o); if (!a || !a.savas_basi) return;
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), a.taraf || [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T); if (!f) return;
  const k2gun = SG.gunKaydir(f.gun, -1), k1gun = SG.gunKaydir(a.savas_basi, -1), sonG = idxStr(sonIx);
  const dar = new Set(f.degisim.map(d => d.i));
  const orta = new Set(dar), gen = new Set(dar);
  Y.forEach((y, i) => {
    const isg = isgalAnahtari(y, k2gun);
    if (isg && T[isg]) { orta.add(i); gen.add(i); }
    (y.isg || []).forEach(p => { if (p.t >= idxStr(o.gi - 1) && p.t <= sonG && T[p.d]) { orta.add(i); gen.add(i); } });
    const p1 = SG.sahipAnahtari(y, k1gun), p3 = SG.sahipAnahtari(y, sonG);
    if (p1 !== p3 && (SG.sahipIlgiliMi(p1, T) || SG.sahipIlgiliMi(p3, T))) gen.add(i);
  });
  const yd = [...dar].reduce((s, i) => s + yuk(Y[i].ad), 0);
  const yo = [...orta].reduce((s, i) => s + yuk(Y[i].ad), 0);
  const yg = [...gen].reduce((s, i) => s + yuk(Y[i].ad), 0);
  TD += yd; TO += yo; TG += yg; n++;
  if (gen.size > 30) console.log("  " + o.t + " " + String(dar.size).padStart(4) + " petek/" + String(KB(yd)).padStart(4) + " KB  " +
    String(orta.size).padStart(4) + "/" + String(KB(yo)).padStart(5) + " KB  " + String(gen.size).padStart(4) + "/" + String(KB(yg)).padStart(5) + " KB  " + o.b.slice(0, 34));
});
console.log("\nTOPLAM (" + n + " madde) · DAR " + KB(TD) + " KB · ORTA " + KB(TO) + " KB (×" + (TO / TD).toFixed(1) + ") · GENİŞ " + KB(TG) + " KB (×" + (TG / TD).toFixed(1) + ")");
console.log("madde BAŞINA ortalama: DAR " + KB(TD / n) + " KB · ORTA " + KB(TO / n) + " KB · GENİŞ " + KB(TG / n) + " KB");

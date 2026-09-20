// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · SALT OKUMA · ZİNCİR ÖLÇÜMÜ.
//   node denetim/ARAC-ANTLASMA-ZINCIR-0074.js [--json <yol>]
// SORU: üç kademenin ZİNCİRİ (savaş başı → işgal → antlaşma) kaç maddede TAM?
// Bulgu (ARAC-ANTLASMA-KADEME-0074.js sonrası): birinci kademenin ("savaştan
// önce") kaynağı `ANTLASMALAR[].savas_basi` alanıdır — bugünkü "önce" kademesi
// bu DEĞİL, kırılma gününden bir gün öncesidir (yani savaş BİTMİŞ hâl).
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

// ── ① ANTLASMALAR künyesinin kendi zenginliği ──
const sbVar = ANT.filter(a => a.savas_basi).length;
console.log("① ANTLASMALAR kaydı:", ANT.length, "· `savas_basi` alanı DOLU:", sbVar, "· boş:", ANT.length - sbVar);
console.log("   `topraklar` alanı dolu:", ANT.filter(a => a.topraklar).length, "· `taraf` dizisi dolu:", ANT.filter(a => (a.taraf || []).length).length);

// ── ② 137 maddenin kaçı bir ANTLASMALAR kaydına bağlanıyor? ──
const bagli = evren.filter(o => !!an(o));
console.log("② antlaşma maddesi:", evren.length, "· ANTLASMALAR kaydına BAĞLI:", bagli.length, "· bağsız:", evren.length - bagli.length);
console.log("   (bağsız maddede birinci kademenin kaynağı YOK — `savas_basi` yalnız ANTLASMALAR'da)");

const IX = SG.sinirIndeksi(Y);
const isgalAnahtari = (y, gs) => { const L = y.isg || []; for (let i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d; return ""; };

// ── ③ ZİNCİR TAMLIĞI ──
// K1 (savaştan önce)  : `savas_basi` VAR  ∧  o günden bir gün önce taraf sahipliği okunabiliyor
// K2 (fiilî durum)    : antlaşma gününden bir gün önce taraf işgali VAR (C>0) ya da pencerede işgal BİTİYOR (B>0)
// K3 (antlaşmadan sonra): bugünkü fark VAR (f != null)
const kademe = { "K1+K2+K3": 0, "K2+K3": 0, "K1+K3": 0, "yalnizK3": 0, "K1+K2": 0, "yalnizK2": 0, "hicbiri": 0 };
const satir = [], ham = [];
evren.forEach(o => {
  const a = an(o);
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), a && Array.isArray(a.taraf) ? a.taraf : [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T);
  const gunStr = f ? f.gun : idxStr(o.gi), onceStr = SG.gunKaydir(gunStr, -1);

  // K1: savas_basi'ndan bir gün önce — o günle antlaşma sonrası arasında SAHİPLİK FARKI olan yerleşim sayısı
  let K1 = 0, savasOncesiFarkli = 0;
  if (a && a.savas_basi) {
    const sb = SG.gunKaydir(a.savas_basi, -1), sonG = idxStr(sonIx);
    Y.forEach(y => {
      const p = SG.sahipAnahtari(y, sb), q = SG.sahipAnahtari(y, sonG);
      if (p !== q && (SG.sahipIlgiliMi(p, T) || SG.sahipIlgiliMi(q, T))) savasOncesiFarkli++;
    });
    K1 = savasOncesiFarkli;
  }
  // K2: fiilî durum
  let C = 0, B = 0;
  const bas = idxStr(o.gi - 1), son = idxStr(sonIx);
  Y.forEach(y => {
    if (isgalAnahtari(y, onceStr) && T[isgalAnahtari(y, onceStr)]) C++;
    (y.isg || []).forEach(p => { if (p.t >= bas && p.t <= son && T[p.d]) B++; });
  });
  const k1 = !!(a && a.savas_basi) && K1 > 0, k2 = (C + B) > 0, k3 = !!f;
  const anahtar = k1 && k2 && k3 ? "K1+K2+K3" : k2 && k3 ? "K2+K3" : k1 && k3 ? "K1+K3" : k1 && k2 ? "K1+K2" : k3 ? "yalnizK3" : k2 ? "yalnizK2" : "hicbiri";
  kademe[anahtar]++;
  const kayit = { t: o.t, b: o.b.slice(0, 66), savas_basi: (a && a.savas_basi) || null, K1, C, B, fark: f ? f.degisim.length : 0, sinif: anahtar };
  ham.push(kayit);
  if (anahtar === "K1+K2+K3") satir.push(kayit);
});
console.log("\n③ ZİNCİR SINIFLARI (evren " + evren.length + ")");
Object.entries(kademe).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log("   " + k.padEnd(10) + " " + String(v).padStart(4)));
console.log("\n④ ÜÇ KADEMESİ DE DOLU MADDELER (K1+K2+K3):", satir.length);
satir.sort((x, y) => y.K1 - x.K1).forEach(s =>
  console.log("   " + s.t + "  savaş başı " + s.savas_basi + "  K1=" + String(s.K1).padStart(3) + " işgal(C)=" + String(s.C).padStart(3) + " iade(B)=" + String(s.B).padStart(3) + " bugünkü fark=" + String(s.fark).padStart(3) + "  " + s.b));

if (JSONYOL) {
  fs.writeFileSync(path.join(KOK, JSONYOL), JSON.stringify({
    olculdu: "2026-09-21", alet: "denetim/ARAC-ANTLASMA-ZINCIR-0074.js",
    evren: evren.length, antlasmaKaydi: ANT.length, savasBasiDolu: sbVar, kayda_bagli: bagli.length,
    sinif: kademe, maddeler: ham
  }, null, 1), "utf8");
  console.log("\nJSON →", JSONYOL);
}

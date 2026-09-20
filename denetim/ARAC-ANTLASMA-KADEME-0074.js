// ANTLASMA-KADEME-0074 · 21 Eylül 2026 · SALT OKUMA ölçüm aleti (veri YAZMAZ).
//   node denetim/ARAC-ANTLASMA-KADEME-0074.js [--liste] [--json <yol>]
// SORU (DALGA-0074 H-0013): antlaşma maddelerinde ÜÇÜNCÜ kademe ("savaş sonrası
// FİİLÎ durum") hangi veriden türer ve kaç antlaşmada ANLAMLIDIR?
// D045: uygulamanın çağırdığı AYNI js/suzgec.js fonksiyonları koşturulur; evren
// kuralı js/app.js `antlasmaMaddesiMi` ile birebir aynıdır.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const LISTE = process.argv.indexOf("--liste") >= 0;
const jArg = process.argv.indexOf("--json");
const JSONYOL = jArg >= 0 ? process.argv[jArg + 1] : null;

const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) return false; vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const srcler = [...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]);
srcler.filter(s => /olaylar|kronoloji|savaslar|yerlesimler|devletler\.js|donemler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, KUNYE = W.DEVLETLER || [];

const gunIdx = s => { const p = String(s).split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const idxStr = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };

// app.js ile AYNI: OLAYLAR* çekirdeği (Değişmez 2 evreni) — kronoloji kuyruğu da
// index.html'de yükleniyorsa ayrı sayılır, karıştırılmaz.
const olayAnahtar = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(W[k]));
const olaylar = olayAnahtar.reduce((a, k) => a.concat(W[k]), [])
  .map(o => Object.assign({ gi: gunIdx(o.t) }, o)).sort((a, b) => a.gi - b.gi);
const ANT = W.ANTLASMALAR || [];
const an = o => ANT.filter(a => Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0)[0];
const antMi = o => o.k === "antlasma" || (!!an(o) && /antla[sş]ma/i.test(o.b));
const evren = olaylar.filter(antMi);

console.log("VERİ · YERLESIMLER", Y.length, "· künye", KUNYE.length, "· olay dosyası anahtarı", olayAnahtar.length,
  "· madde", olaylar.length, "· ANTLASMALAR", ANT.length);
console.log("① ANTLAŞMA EVRENİ:", evren.length, "(k:antlasma", olaylar.filter(o => o.k === "antlasma").length, "+ karma", evren.length - olaylar.filter(o => o.k === "antlasma").length, ")");

// ── isg: evreni ────────────────────────────────────────────────────────────
let isgKayit = 0, isgYer = 0;
const isgDevlet = {};
Y.forEach(y => { const L = y.isg || []; if (L.length) { isgYer++; isgKayit += L.length; } L.forEach(p => { isgDevlet[p.d] = (isgDevlet[p.d] || 0) + 1; }); });
console.log("② isg: EVRENİ:", isgKayit, "kayıt ·", isgYer, "yerleşim ·", Object.keys(isgDevlet).length, "işgalci künye");
console.log("   işgalciler:", Object.entries(isgDevlet).sort((a, b) => b[1] - a[1]).map(x => x[0] + ":" + x[1]).join(" · "));
// isg: kayıtlarının yıl dağılımı — üç kademe hangi yüzyılda mümkün?
const isgYil = {};
Y.forEach(y => (y.isg || []).forEach(p => { const c = Math.floor(+String(p.f).slice(0, 4) / 50) * 50; isgYil[c] = (isgYil[c] || 0) + 1; }));
console.log("   isg: başlangıç yılı (50 yıllık kova):", Object.entries(isgYil).sort((a, b) => a[0] - b[0]).map(x => x[0] + ":" + x[1]).join(" · "));

// ── kademe hesabı ──────────────────────────────────────────────────────────
const IX = SG.sinirIndeksi(Y);
// isg: SINIR İNDEKSİNDE YOK (sinirIndeksi yalnız d/v/s okur) — ayrı indeks şart.
const isgIx = {};   // gün -> yerleşim indeksleri (isg başlangıcı VEYA bitişi)
Y.forEach((y, i) => (y.isg || []).forEach(p => {
  [p.f, p.t].forEach(g => { if (!g) return; const l = isgIx[g] || (isgIx[g] = []); if (l[l.length - 1] !== i) l.push(i); });
}));
const isgGunler = Object.keys(isgIx).sort();
console.log("   isg: ayrı sınır günü:", isgGunler.length, "· d/v/s sınır günü:", IX.gunler.length);

// O gün fiilen işgal altında mı? (taraf süzgecinden GEÇMEMİŞ ham hâl)
const isgalAnahtari = (y, gs) => {
  const L = y.isg || [];
  for (let i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d;
  return "";
};

const say = { "ucKademeAnlamli": 0, "ikiKademe": 0, "farkYok": 0 };
const satir = [], ham = [];
evren.forEach(o => {
  const sonraki = olaylar.find(x => x.gi > o.gi);
  const sonIx = Math.max(o.gi, Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365));
  const a = an(o);
  const T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""), a && Array.isArray(a.taraf) ? a.taraf : [], KUNYE);
  const f = SG.antlasmaFarki(Y, IX, idxStr(o.gi), idxStr(sonIx), T);

  // ── ÜÇÜNCÜ KADEME ADAYLARI ──
  // A sınıfı: bugünkü fark listesindeki yerleşim, kırılma gününden bir gün önce
  //           FİİLEN işgal altında ve işgalci de-jure sahibinden farklı.
  // B sınıfı: bugünkü fark listesinde OLMAYAN ama antlaşma penceresinde işgali
  //           BİTEN yerleşim (= antlaşmayla geri verilen toprak). Bugünkü iki
  //           kademe bunu HİÇ göstermez: s: değişmediği için fark listesine girmez.
  const gunStr = f ? f.gun : idxStr(o.gi);
  const onceStr = SG.gunKaydir(gunStr, -1);
  let A = 0;
  if (f) f.degisim.forEach(d => {
    const isg = isgalAnahtari(Y[d.i], onceStr);
    if (isg && ("s:" + isg) !== d.once && !(isg === "osmanli" && d.once === "osmanli") && (T[isg] || T.osmanli)) A++;
  });
  // B: pencerede [o.gi-1, sonIx] içinde t: (işgal bitişi) olan, tarafa ait işgaller
  let B = 0; const bAd = [];
  const bas = idxStr(o.gi - 1), son = idxStr(sonIx);
  Y.forEach(y => (y.isg || []).forEach(p => {
    if (p.t >= bas && p.t <= son && (T[p.d] || T.osmanli)) { B++; if (bAd.length < 6) bAd.push(y.ad + "←" + p.d); }
  }));
  // C: antlaşma gününde HÂLÂ süren, tarafa ait işgal (fiilî durum ≠ antlaşma sonrası olabilir)
  let C = 0;
  Y.forEach(y => { const g = isgalAnahtari(y, onceStr); if (g && T[g]) C++; });

  const kip = (A + B > 0) ? "ucKademeAnlamli" : (f ? "ikiKademe" : "farkYok");
  say[kip]++;
  const kayit = { t: o.t, b: o.b.slice(0, 70), k: o.k, fark: f ? f.degisim.length : 0, farkGun: f ? f.gun : null, A, B, C, kip };
  ham.push(kayit);
  if (A + B > 0) satir.push(kayit);
});

console.log("\n③ ÜÇ KADEME ANLAMLI MI? (evren " + evren.length + " antlaşma maddesi)");
console.log("   ÜÇ kademe anlamlı (A+B>0):", say.ucKademeAnlamli);
console.log("   yalnız İKİ kademe (fark var, işgal yok):", say.ikiKademe);
console.log("   fark da YOK (bugün de boş):", say.farkYok);
console.log("   A = bugünkü fark listesinde olup kırılmadan önce işgal altında olan yerleşim");
console.log("   B = antlaşma penceresinde işgali BİTEN yerleşim (bugünkü iki kademe BUNU GÖSTERMEZ)");

if (satir.length) {
  console.log("\n④ ÜÇ KADEMENİN ANLAMLI OLDUĞU MADDELER");
  satir.sort((x, y) => (y.A + y.B) - (x.A + x.B)).forEach(s =>
    console.log("   " + s.t + "  A=" + String(s.A).padStart(3) + " B=" + String(s.B).padStart(3) + " C=" + String(s.C).padStart(3) + " fark=" + String(s.fark).padStart(3) + "  " + s.b));
}
if (LISTE) { console.log("\n⑤ TÜM EVREN"); ham.forEach(s => console.log("   " + s.t + " " + s.kip.padEnd(18) + " fark=" + String(s.fark).padStart(3) + " A=" + s.A + " B=" + s.B + "  " + s.b)); }

if (JSONYOL) {
  fs.writeFileSync(path.join(KOK, JSONYOL), JSON.stringify({
    olculdu: "2026-09-21", alet: "denetim/ARAC-ANTLASMA-KADEME-0074.js",
    evren: evren.length, madde: olaylar.length, yerlesim: Y.length,
    isg: { kayit: isgKayit, yerlesim: isgYer, devlet: isgDevlet, yilKova: isgYil, sinirGunu: isgGunler.length },
    say, maddeler: ham
  }, null, 1), "utf8");
  console.log("\nJSON →", JSONYOL);
}

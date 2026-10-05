// ODAK-ASYA-0080 · 27 Eylül 2026 · salt okuma döküm aleti.
// node denetim/ODAK-ASYA-0080-dok.js [--json <yol>]
// Kolun 8 dosyasındaki İŞ maddelerini (ODAKSIZ + BEYANLI→yabancı) döker ve her
// aday kimlik için O GÜN kaç yerleşim sahibi olduğunu app.js'in AYNI yoluyla
// (SUZGEC.sahipKimlikte) sayar — odak_kimlik "≥2 yerleşim" şartı tahminle değil
// ölçümle sınansın diye. Ad havuzu: YERLESIMLER adları + " (" öncesi.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) { console.log("YOK:", rel); return false; } vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const IK = require("./INDEX-KAYNAK-1006.js"); // W32: paket_NN.js açılır + SESSİZ SIFIR kapısı
const bagli = IK.kaynaklar(html, /src="(data\/[^"?]+\.js)/);
bagli.filter(s => /yerlesimler|devletler\.js/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER;
IK.yerlesimKapisi(Y);
const KIX = {}; (W.DEVLETLER || []).forEach(k => { if (k && k.id) KIX[k.id] = k; });
const havuz = new Set(); Y.forEach(y => { if (y.ad) { havuz.add(y.ad); havuz.add(y.ad.split(" (")[0]); } });

const DOSYALAR = ["kronoloji_sinir_asya.js", "kronoloji_cin.js", "kronoloji_orta_asya.js", "kronoloji_ozbek.js",
  "kronoloji_hindistan.js", "kronoloji_guney_asya.js", "kronoloji_japonya.js", "kronoloji_timurlu.js"];

function say(ids, gs) {
  let n = 0; const ad = [];
  Y.forEach(y => {
    if (typeof y.lat !== "number" || typeof y.lon !== "number") return;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, KIX)) return;
    n++; if (ad.length < 4) ad.push(y.ad.split(" (")[0]);
  });
  return { n, ad };
}
function sinif(o) {
  const yk = o.yer_kon;
  if (Array.isArray(yk) && yk.length === 2) return "KONUMLU";
  if (o.yer_id && havuz.has(o.yer_id)) return "KONUMLU";
  if (o.odak_kutu_kaynak) return "KUTULU";
  let oy = o.odak_yer; if (oy && !Array.isArray(oy)) oy = [oy];
  if (oy && oy.some(a => havuz.has(a))) return "KUTULU";
  if (Array.isArray(o.odak_kimlik) && o.odak_kimlik.length >= 2) return "KUTULU";
  return o.kapsam_genis === true ? "BEYANLI" : "ODAKSIZ";
}
// metinde geçen havuz adları (≥4 harf, kelime sınırı) — yalnız İPUCU, hüküm değil
const havuzL = [...havuz].filter(a => a.length >= 4);
function ipucu(metin) {
  const r = [];
  for (const a of havuzL) {
    const i = metin.indexOf(a);
    if (i < 0) continue;
    const once = i === 0 ? " " : metin[i - 1];
    if (/[\p{L}]/u.test(once)) continue;
    r.push(a);
  }
  return [...new Set(r)].slice(0, 12);
}

const cikti = [];
for (const f of DOSYALAR) {
  const k = {}; const c = { window: k }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(KOK, "data", f), "utf8"), c);
  const ad = Object.keys(c).find(x => Array.isArray(c[x]));
  const L = c[ad];
  L.forEach((o, i) => {
    const s = sinif(o);
    if (s !== "BEYANLI" && s !== "ODAKSIZ") return;
    const gs = String(o.t || "").padEnd(10, "-01").slice(0, 10).replace(/-$/, "-01");
    const aday = [...new Set([o.devlet].concat(o.taraflar || [], o.devletler || []).filter(Boolean))];
    const sayim = {}; aday.forEach(id => { const r = say([id], gs); sayim[id] = (KIX[id] ? "" : "KÜNYESİZ ") + r.n + (r.ad.length ? " [" + r.ad.join(",") + "]" : ""); });
    cikti.push({ dosya: f, i, sinif: s, t: o.t, devlet: o.devlet, taraflar: o.taraflar, devletler: o.devletler,
      yer_id: o.yer_id, b: o.b, d: (o.d || "").slice(0, 380), kaynak: (o.kaynak || "").slice(0, 120),
      sayim, ipucu: ipucu((o.b || "") + " " + (o.d || "")) });
  });
}
const jy = process.argv.indexOf("--json");
if (jy > 0) fs.writeFileSync(process.argv[jy + 1], JSON.stringify(cikti, null, 1));
for (const x of cikti) {
  console.log(`\n### ${x.dosya}#${x.i} ${x.sinif} ${x.t} devlet=${x.devlet} yer_id=${JSON.stringify(x.yer_id)}`);
  console.log("  b:", x.b);
  console.log("  d:", x.d);
  console.log("  kaynak:", x.kaynak);
  console.log("  sayım:", JSON.stringify(x.sayim));
  console.log("  ipucu:", x.ipucu.join(" · "));
}
console.log("\nTOPLAM iş maddesi:", cikti.length, "· havuz", havuz.size, "· YERLESIMLER", Y.length);

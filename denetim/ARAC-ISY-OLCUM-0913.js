// PAKET-ISYAN · 13 Eylül 2026 · salt okuma ölçüm aleti.
// node denetim/ARAC-ISY-OLCUM-0913.js
// ① data/isyan_tarama.js şema sağlığı  ② örnek günlerde taranan yerleşimler
//    (js/suzgec.js isyanSecim — app.js'in çağırdığı AYNI fonksiyon)
// ③ petek karşılığı (PETEKLER, donemler.js)  ④ çerçeve bütçesi: 1590-1610 arası
//    günlük yürüyüşte anahtar kaç kez değişiyor (= kaç setData)
// ⑤ pencere içinde tâbi seçim kümesi değişiyor mu (app.js yalnız anahtar değişince seçer)
// ⑥ bağlı maddeler veride var mı
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.join(__dirname, "..");
const SG = require(path.join(KOK, "js", "suzgec.js"));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const yukle = rel => { const p = path.join(KOK, rel); if (!fs.existsSync(p)) { console.log("YOK:", rel); return false; } vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; };
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const bagli = [...html.matchAll(/src="(data\/[^"?]+\.js)/g)].map(m => m[1]);
console.log("index.html'de data/isyan_tarama.js bağlı:", bagli.indexOf("data/isyan_tarama.js") >= 0);
bagli.filter(s => /olaylar|yerlesimler|devletler\.js|donemler\.js|isyan_tarama/.test(s)).forEach(yukle);
const W = ctx;
W.YERLESIMLER = Object.keys(W).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(W[k]))
  .reduce((a, k) => a.concat(W[k]), (W.YERLESIMLER || []).slice());
const Y = W.YERLESIMLER, PET = W.PETEKLER || [], IT = W.ISYAN_TARAMA;
const KIX = {}; (W.DEVLETLER || []).forEach(k => { if (k && k.id) KIX[k.id] = k; });
const petAd = {}; PET.forEach((p, i) => { if (p && p.a) petAd[p.a] = i; });
console.log("YERLESIMLER", Y.length, "· PETEKLER", PET.length, "· künye", Object.keys(KIX).length);
if (!IT) { console.log("✗ ISYAN_TARAMA yok"); process.exit(1); }

// ① şema
console.log("\n① şema");
const GUN = /^\d{4}-\d{2}-\d{2}$/, KES = ["gun", "ay", "yil"];
let sorun = 0;
IT.pencereler.forEach(p => {
  const s = [];
  if (!KIX[p.kimlik]) s.push("künye yok");
  if (!GUN.test(p.f) || !GUN.test(p.t) || !(p.f < p.t)) s.push("f/t bozuk");
  if (KES.indexOf(p.kesinlik_f) < 0 || KES.indexOf(p.kesinlik_t) < 0 || KES.indexOf(p.kesinlik) < 0) s.push("kesinlik");
  if (p.kesinlik_f === "ay" && !/-01$/.test(p.f)) s.push("ay kesinliği ayın 1'i değil (f)");
  if (p.kesinlik_t === "ay" && !/-01$/.test(p.t)) s.push("ay kesinliği ayın 1'i değil (t)");
  if (!Array.isArray(p.kaynak) || !p.kaynak.length || p.kaynak.some(k => !k.ad || !(k.slug || k.sayfa) || !k.alinti || !k.gelenek)) s.push("kaynak eksik");
  if (["isyan", "habsburg"].indexOf(p.tur) < 0) s.push("tur");
  const k = KIX[p.kimlik];
  if (k && (k.f > p.f || (k.t && k.t < p.t))) s.push("künye penceresi dışı (" + k.f + "→" + k.t + ")");
  console.log(" ", p.id.padEnd(26), p.kimlik.padEnd(7), p.tur.padEnd(9), p.f, "→", p.t, `[${p.kesinlik_f}/${p.kesinlik_t}]`, s.length ? "✗ " + s.join(" · ") : "✓");
  sorun += s.length;
});
const byK = {};
IT.pencereler.forEach(p => (byK[p.kimlik] = byK[p.kimlik] || []).push(p));
Object.keys(byK).forEach(k => { const L = byK[k].slice().sort((a, b) => a.f < b.f ? -1 : 1); for (let i = 1; i < L.length; i++) if (L[i].f < L[i - 1].t) { console.log("  ✗ örtüşme", L[i - 1].id, L[i].id); sorun++; } });
console.log("  şema sorunu:", sorun);

// ② örnek günler
console.log("\n② örnek günler (isyanSecim)");
const GUNLER = ["1594-10-05", "1594-12-01", "1595-11-01", "1600-06-01", "1601-10-01", "1605-01-01", "1606-01-01"];
// 🔴 PETEKLER yalnız AD taşır — geometri petek_govde.js'te. İlk sürüm yalnız ad eşleşmesini
//    sınıyordu ve "peteksiz 0" diyordu; app.js o sürümde HİÇ çizmeyecekti (tarayıcıda ölçüldü).
//    Artık app.js'in okuduğu AYNI yol sınanıyor: PETEK_GOVDE[pi] boş değil VE parçalar var.
yukle("data/petek_govde.js");
const GOV = W.PETEK_GOVDE, PARCA = W.PETEK_GOVDE_PARCA;
console.log("  PETEK_GOVDE", GOV ? GOV.length : "YOK", "· PARCA", PARCA ? PARCA.length : "YOK",
  "· PETEKLER[0] alanları:", PET[0] ? Object.keys(PET[0]).join(",") : "—");
const geoVar = ad => { const pi = petAd[ad]; const ix = (pi === undefined || !GOV) ? null : GOV[pi]; return !!(ix && ix.length && ix.every(j => PARCA[j] && PARCA[j].length)); };
const t0 = Date.now();
GUNLER.forEach(g => {
  const akt = SG.isyanAktif(IT, g), sec = SG.isyanSecim(Y, akt, g, KIX, IT.kimliksiz_uye);
  const say = {}, adlar = {}, petekYok = [];
  sec.forEach(x => { const a = x.p.id; say[a] = (say[a] || 0) + 1; (adlar[a] = adlar[a] || []).push(Y[x.i].ad + (x.yol === "kaynakli-uye" ? "*" : "")); if (!geoVar(Y[x.i].ad)) petekYok.push(Y[x.i].ad); });
  console.log(" ", g, "· aktif pencere", akt.map(p => p.id).join(", ") || "—", "· taranan", sec.length, "· peteksiz", petekYok.length, petekYok.length ? "(" + petekYok.join(", ") + ")" : "");
  Object.keys(adlar).forEach(a => console.log("     ", a.padEnd(26), say[a], ":", adlar[a].join(", ")));
});
console.log("  ② süresi (7 gün, ms):", Date.now() - t0);

// ④ bütçe + ⑤ pencere içi kararlılık
console.log("\n④ bütçe · ⑤ pencere içi kararlılık (1590-01-01 → 1610-01-01, günlük)");
const gi = s => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);
const gs = i => { const d = new Date(i * 864e5); return String(d.getUTCFullYear()).padStart(4, "0") + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); };
let onceki = null, degisim = 0, anahtarSure = 0, secSure = 0, ilkSecim = null, kararsiz = 0;
const ornekAralik = 30;                                       // her 30 günde bir kararlılık sınaması
for (let i = gi("1590-01-01"); i <= gi("1610-01-01"); i++) {
  const a0 = process.hrtime.bigint();
  const P = IT.pencereler; let an = "";
  for (const p of P) { if (p.gi === undefined) { p.gi = gi(p.f); p.gs = gi(p.t); } if (i >= p.gi && i < p.gs) an += p.id + ";"; }
  anahtarSure += Number(process.hrtime.bigint() - a0);
  if (an !== onceki) {
    degisim++; onceki = an;
    const s0 = Date.now();
    ilkSecim = an ? SG.isyanSecim(Y, SG.isyanAktif(IT, gs(i)), gs(i), KIX, IT.kimliksiz_uye).map(x => x.i + ":" + x.p.id).sort().join(",") : "";
    secSure = Math.max(secSure, Date.now() - s0);
    console.log("   anahtar değişti", gs(i), "→", an || "(boş)");
  } else if (an && i % ornekAralik === 0) {
    const simdi = SG.isyanSecim(Y, SG.isyanAktif(IT, gs(i)), gs(i), KIX, IT.kimliksiz_uye).map(x => x.i + ":" + x.p.id).sort().join(",");
    if (simdi !== ilkSecim) { kararsiz++; if (kararsiz <= 3) console.log("   ✗ pencere içinde seçim değişti:", gs(i)); }
  }
}
console.log("  anahtar değişimi (= setData):", degisim, "· 7306 günlük yürüyüşte anahtar hesabı toplam", (anahtarSure / 1e6).toFixed(1), "ms",
  "· seçim azami", secSure, "ms · pencere içi seçim değişen örnek:", kararsiz);

// ⑥ bağlı maddeler
console.log("\n⑥ bağlı maddeler");
const OL = Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(W[k])).reduce((a, k) => a.concat(W[k]), []);
(IT.maddeler || []).forEach(m => {
  const bul = OL.filter(o => o.t === m.t && String(o.b).indexOf(m.b) === 0);
  const akt = SG.isyanAktif(IT, m.t).map(p => p.id);
  console.log(" ", m.t, bul.length === 1 ? "✓" : "✗ " + bul.length, m.b, "· o gün taralı:", akt.join(", ") || "—");
});
process.exit(sorun ? 1 : 0);

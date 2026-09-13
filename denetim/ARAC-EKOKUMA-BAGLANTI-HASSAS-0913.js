// ARAC-EKOKUMA-BAGLANTI-HASSAS-0913.js — ek okuma kartı → kronoloji maddesi isabet ölçümü
// Kullanım:
//   node denetim/ARAC-EKOKUMA-BAGLANTI-HASSAS-0913.js [--json cikti.json]
//   APP_JS=<app.js yolu> KART_DIR=<data dizini> node ...     (önce/sonra kıyası için)
//   node ... --fark once.json sonra.json                      (iki isabet kümesini karşılaştırır)
//
// ARAC-EKOKUMA-DAGITIM-0913.js'ten farkı: kuralı TAKLİT ETMEZ. `ekKartBagliMi` ve
// yardımcıları (`_ekNorm`, `_ekBagGun`, `_ekBagEslesir`, `_merakHavuz`, varsa) app.js'in
// KENDİ kaynağından kesilip eval edilir. Dosya listesi app.js'in `_EKOKUMA_DOSYA_ADLARI`
// dizisinden, tür listesi `EKOKUMA_TUR` bloğundan okunur. Böylece alet ile arayüz ayrışamaz.
// Madde evreni: index.html'in <script> ile yüklediği data/olaylar*.js (obGoster'e giden çekirdek).
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const a = process.argv;

// ── --fark ─────────────────────────────────────────────────────────────────────
const fi = a.indexOf("--fark");
if (fi > 0) {
  const A = new Set(JSON.parse(fs.readFileSync(a[fi + 1], "utf8")).isabet);
  const B = new Set(JSON.parse(fs.readFileSync(a[fi + 2], "utf8")).isabet);
  const kayip = [...A].filter(x => !B.has(x)), yeni = [...B].filter(x => !A.has(x));
  console.log(`ÖNCE ${A.size} · SONRA ${B.size} · KAYBOLAN ${kayip.length} · YENİ ${yeni.length}`);
  console.log("\nKAYBOLAN:\n  " + (kayip.join("\n  ") || "—"));
  console.log("\nYENİ:\n  " + (yeni.join("\n  ") || "—"));
  process.exit(0);
}

const APP = fs.readFileSync(process.env.APP_JS || path.join(KOK, "js", "app.js"), "utf8");
const KART_DIR = process.env.KART_DIR || path.join(KOK, "data");

// app.js'ten adı verilen üst düzey fonksiyonu süslü parantez sayarak kes (yoksa null)
function kes(ad) {
  const i = APP.search(new RegExp("\\nfunction " + ad + "\\s*\\("));
  if (i < 0) return null;
  let j = APP.indexOf("{", i), d = 0;
  for (let k = j; k < APP.length; k++) {
    if (APP[k] === "{") d++;
    else if (APP[k] === "}" && --d === 0) return APP.slice(i, k + 1);
  }
  throw new Error("kesilemedi: " + ad);
}
const YARDIMCI = ["_ekNorm", "_ekBagGun", "_ekBagEslesir", "ekKartBagliMi", "_merakHavuz", "_ekHavuz"];
const kesilen = YARDIMCI.map(kes).filter(Boolean);
if (!/function ekKartBagliMi/.test(kesilen.join("\n"))) throw new Error("ekKartBagliMi app.js'te bulunamadı");

// dosya listesi — app.js'in kendi dizisi
const dz = APP.match(/_EKOKUMA_DOSYA_ADLARI\s*=\s*\[([\s\S]*?)\];/);
const DOSYALAR = [...dz[1].replace(/\/\/[^\n]*/g, "").matchAll(/"([a-z0-9_]+)"/g)].map(m => m[1]);
// tür listesi — EKOKUMA_TUR bloğu
const tb = APP.match(/var EKOKUMA_TUR = \{([\s\S]*?)\n\};/);
const TURLER = [...tb[1].matchAll(/^\s*"([a-z-]+)":\s*\{\s*etiket/mg)].map(m => m[1]);

// maddeler
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const olayDos = [...html.matchAll(/<script src="data\/([^"?]+)\.js/g)].map(m => m[1]).filter(f => /^olaylar/.test(f));
global.window = {};
for (const f of olayDos) eval(fs.readFileSync(path.join(KOK, "data", f + ".js"), "utf8"));
const OLAY = Object.keys(window).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k)).flatMap(k => window[k]);
global.window = {};
eval(fs.readFileSync(path.join(KOK, "data", "savaslar.js"), "utf8"));
const ANT = window.ANTLASMALAR || [];

// kartlar — tarayıcıdaki gibi TEK window'a yüklenir; diskte olmayan dosya sessizce atlanır
global.window = { ANTLASMALAR: ANT };
const bulunan = [], yok = [];
for (const f of DOSYALAR) {
  const p = path.join(KART_DIR, f + ".js");
  if (!fs.existsSync(p)) { yok.push(f); continue; }
  eval(fs.readFileSync(p, "utf8")); bulunan.push(f);
}
// app.js fonksiyonlarını bu window'a karşı kur
const F = new Function("window", kesilen.join("\n") +
  "\nreturn { ekKartBagliMi: ekKartBagliMi, ekHavuz: typeof _ekHavuz==='function'?_ekHavuz:null," +
  " merakHavuz: typeof _merakHavuz==='function'?_merakHavuz:null," +
  " norm: typeof _ekNorm==='function'?_ekNorm:null, gun: typeof _ekBagGun==='function'?_ekBagGun:null };")(window);
// _ekHavuz Object.keys(window) kullanıyor — aynı nesne
const havuz = () => F.ekHavuz ? F.ekHavuz() : [];
const merakKaynak = () => F.merakHavuz ? F.merakHavuz() : (window.MERAK || []);
function kaynak(tur) {
  if (tur === "merak") return merakKaynak();
  if (tur === "antlasma") return ANT.concat(havuz().filter(k => k.tur === "antlasma"));
  return havuz();
}
const turAlaniYok = tur => tur === "antlasma";

const kartAd = k => (k.id || k.ad || k.baslik || "?");
const isabet = new Set(), maddeKart = new Map(), maddeEk = new Map();
const kartBag = new Map();   // kart → [madde]
for (const tur of TURLER) {
  const kaynaklar = kaynak(tur).filter(k => turAlaniYok(tur) || k.tur === tur);
  for (const o of OLAY) {
    for (const k of kaynaklar) {
      if (!F.ekKartBagliMi(k, o)) continue;
      const ant = !k.tur;
      const anahtar = `${tur}:${kartAd(k)} → ${o.t} | ${o.b}`;
      isabet.add(anahtar);
      if (!ant) {
        (maddeEk.get(o) || maddeEk.set(o, new Set()).get(o)).add(tur);
        (kartBag.get(k) || kartBag.set(k, []).get(k)).push(o);
      }
      (maddeKart.get(o) || maddeKart.set(o, new Set()).get(o)).add(tur);
    }
  }
}

// çakışma: bir kartın aynı `t`'de birden çok maddeye düştüğü satırlar
const cakisma = [];
for (const [k, ol] of kartBag) {
  const g = {};
  for (const o of ol) (g[o.t] = g[o.t] || []).push(o.b);
  for (const [t, bs] of Object.entries(g)) if (bs.length > 1) cakisma.push(`${k.tur}:${kartAd(k)} @ ${t} → ${bs.join(" ‖ ")}`);
}
// bağ değeri denetimi: hiçbir maddeye düşmeyen değer / ayırt edicisi tutmayan değer
const olayByT = {};
for (const o of OLAY) (olayByT[o.t] = olayByT[o.t] || []).push(o);
const bosDeger = [], tumKartlar = havuz().concat(merakKaynak());
for (const k of tumKartlar) {
  const vals = (k.olay || k.baglanti || []).slice();
  for (const v of vals) {
    const s = String(v), i = s.indexOf("|"), t = i < 0 ? s : s.slice(0, i);
    const adaylar = olayByT[t] || [];
    const tutan = adaylar.filter(o => {
      // tek değeri sına: tür "_bag" (magazin DEĞİL) → yalnız liste dalı çalışır
      const kx = Object.assign({}, k, { tur: "_bag", olay: [v], baglanti: undefined, t: undefined });
      return F.ekKartBagliMi(kx, o);
    });
    if (!tutan.length) bosDeger.push(`${k.tur}:${kartAd(k)} @ ${s}  (o gün ${adaylar.length} madde: ${adaylar.map(o => o.b).join(" ‖ ") || "—"})`);
  }
}
const turSay = {};
for (const s of maddeKart.values()) for (const t of s) turSay[t] = (turSay[t] || 0) + 1;
const rapor = {
  app_js: process.env.APP_JS || "js/app.js", kart_dir: KART_DIR,
  dosya_bulunan: bulunan, dosya_diskte_yok: yok,
  madde: OLAY.length, kart_ekokuma_havuz: havuz().length, kart_merak_kaynagi: merakKaynak().length,
  isabet_toplam: isabet.size,
  isabet_kart_madde: [...kartBag.values()].reduce((s, l) => s + l.length, 0),
  kartli_madde_EKOKUMA_MERAK: maddeEk.size,
  butonlu_madde_ANTLASMALAR_dahil: maddeKart.size,
  tur_basina_madde: turSay,
  cakisma_satiri: cakisma.length,
  tutmayan_bag_degeri: bosDeger.length,
};
console.log("ÖZET " + JSON.stringify(rapor, null, 1));
console.log("\nÇAKIŞMA (kart aynı gün birden çok maddeye düşüyor):\n  " + (cakisma.join("\n  ") || "—"));
console.log("\nTUTMAYAN BAĞ DEĞERİ (hiçbir maddeye düşmüyor):\n  " + (bosDeger.join("\n  ") || "—"));
const j = a.indexOf("--json");
if (j > 0) fs.writeFileSync(a[j + 1], JSON.stringify(Object.assign({}, rapor, { cakisma, bos_deger: bosDeger, isabet: [...isabet].sort() }), null, 1));

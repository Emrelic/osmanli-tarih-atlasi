// ARAC-EKOKUMA-ANTLASMA-0921 — antlaşma maddelerinin ek okuma kapsaması
// Evren: index.html'in yüklediği data/*.js dosyalarından gelen OLAYLAR* havuzu
//        (ek okuma kutusu YALNIZ bu havuzun maddelerine çıkar: app.js obGoster
//         çağrıları olaylar[] üzerinden gelir; KRONOLOJI_* ayrı panel).
// Kart evreni: js/app.js _EKOKUMA_DOSYA_ADLARI + window.ANTLASMALAR (savaslar.js)
// Eşleşme mantığı app.js'ten BİREBİR kopyalanmıştır (_ekNorm/_ekBagEslesir/ekKartBagliMi).
// Koşu: node denetim/ARAC-EKOKUMA-ANTLASMA-0921.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.resolve(__dirname, "..");
const ctx = { console };
ctx.window = ctx;
ctx.localStorage = { getItem: () => null, setItem: () => {} };
vm.createContext(ctx);

function yukle(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) return false;
  try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; }
  catch (e) { console.error("HATA " + rel + ": " + e.message); return false; }
}

// ① index.html'deki data/*.js script satırları
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const indexDosyalari = [];
const re = /<script\s+src="(data\/[^"?]+\.js)/g;
let m;
while ((m = re.exec(html))) indexDosyalari.push(m[1]);
let yuklenen = 0, yuklenmeyen = [];
for (const d of indexDosyalari) { if (yukle(d)) yuklenen++; else yuklenmeyen.push(d); }

// ② ek okuma dosyaları — app.js'teki listeyi KAYNAKTAN oku (elle kopyalamak bayatlar)
const appjs = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");
const li = appjs.indexOf("var _EKOKUMA_DOSYA_ADLARI = [");
const lj = appjs.indexOf("\n];", li);
const listeGovde = appjs.slice(li + "var _EKOKUMA_DOSYA_ADLARI = [".length, lj);
const ekAdlar = [];
const re2 = /"([a-z0-9_]+)"/g;
let m2;
while ((m2 = re2.exec(listeGovde.replace(/\/\/[^\n]*/g, "")))) ekAdlar.push(m2[1]);
const ekYok = [];
for (const ad of ekAdlar) { if (!yukle("data/" + ad + ".js")) ekYok.push(ad); }

// ③ app.js'ten BİREBİR: eşleşme mantığı
function _ekNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function _ekBagGun(v) { const s = String(v == null ? "" : v), i = s.indexOf("|"); return i < 0 ? s : s.slice(0, i); }
function _ekBagEslesir(v, o) {
  if (v == null) return false;
  const s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  const ayirt = _ekNorm(s.slice(i + 1));
  return !ayirt || _ekNorm(o.b).indexOf(ayirt) >= 0;
}
function ekKartBagliMi(kart, o) {
  const liste = ((ctx.EKOBAG_ONERI || {})[kart.id]) || kart.olay || kart.baglanti || [];
  for (let i = 0; i < liste.length; i++) if (_ekBagEslesir(liste[i], o)) return true;
  if (kart.tur === "magazin" || !kart.tur) {
    if (!_ekBagEslesir(kart.t, o)) return false;
    for (let j = 0; j < liste.length; j++) if (_ekBagGun(liste[j]) === o.t) return false;
    return true;
  }
  return false;
}

// ④ havuzlar — app.js desenleriyle AYNI
function _ekHavuz() {
  return Object.keys(ctx).filter(k => /^EKOKUMA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(ctx[k]))
    .reduce((a, k) => a.concat(ctx[k]), []);
}
function _merakHavuz() {
  const ekler = Object.keys(ctx).filter(k => /^MERAK_[A-Z0-9]+$/.test(k) && Array.isArray(ctx[k]))
    .reduce((a, k) => a.concat(ctx[k]), []);
  return (Array.isArray(ctx.MERAK) ? ctx.MERAK : []).concat(ekler);
}
// EKOKUMA_TUR kaynak eşlemesi — app.js'teki tanımın ölçüm karşılığı
const TURLER = {
  "sebep-sonuc": _ekHavuz, "magazin": _ekHavuz, "merak": _merakHavuz,
  "tartisma": _ekHavuz, "teknik-bilimsel": _ekHavuz, "kimdir": _ekHavuz,
  "dis-yankilar": _ekHavuz, "kahramanlik": _ekHavuz, "menkibeler": _ekHavuz,
  "sok-haberler": _ekHavuz, "edebiyat": _ekHavuz, "savas-hikayesi": _ekHavuz,
  "karsi-anlati": _ekHavuz
};
const ANTLASMA_KAYNAK = () => (ctx.ANTLASMALAR || []).concat(_ekHavuz().filter(k => k.tur === "antlasma"));

// ⑤ olaylar havuzu — app.js deseni (kapsam süzgeci AYRI sayılır)
const olayAnahtarlari = Object.keys(ctx).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(ctx[k]));
const tumOlaylar = olayAnahtarlari.reduce((a, k) => a.concat(ctx[k].map(o => Object.assign({ _kova: k }, o))), []);
const olaylar = tumOlaylar.filter(o => o.kapsam !== "konu");   // dünya kapalı (varsayılan)

// ⑥ antlaşma maddesi ölçütleri
const KALIP = /(antla[sş]ma|anla[sş]ma|muahede|ahidn[aâ]me|sulh|bar[iı][sş]|protokol|konvansiyon|m[uü]tareke)/i;
const kesin = olaylar.filter(o => o.k === "antlasma");
const gevsek = olaylar.filter(o => o.k === "antlasma" || KALIP.test(_ekNorm(o.b)));

function kartlariBul(o) {
  const cikti = [];
  for (const tur of Object.keys(TURLER)) {
    for (const k of TURLER[tur]()) if (k.tur === tur && ekKartBagliMi(k, o)) cikti.push({ tur, id: k.id || null, b: k.b || k.baslik || null });
  }
  for (const k of ANTLASMA_KAYNAK()) if (ekKartBagliMi(k, o)) cikti.push({ tur: "antlasma", id: k.id || null, b: k.b || k.ad || k.baslik || null });
  return cikti;
}

function olc(kume, ad) {
  const kartli = [], kartsiz = [];
  for (const o of kume) {
    const ks = kartlariBul(o);
    const kayit = { t: o.t, b: o.b, k: o.k, kova: o._kova, kaynak: o.kaynak || null, kartSayisi: ks.length, turler: [...new Set(ks.map(x => x.tur))] };
    (ks.length ? kartli : kartsiz).push(kayit);
  }
  return { ad, toplam: kume.length, kartli: kartli.length, kartsiz: kartsiz.length, kartliListe: kartli, kartsizListe: kartsiz };
}

const sonuc = {
  olculdu: new Date().toISOString(),
  evren: {
    indexDataDosyasi: indexDosyalari.length, yuklenen, yuklenmeyen,
    ekOkumaAdi: ekAdlar.length, ekOkumaDiskteYok: ekYok,
    olayKovasi: olayAnahtarlari.length,
    olayToplam_kapsamKonuDahil: tumOlaylar.length,
    olayToplam_varsayilan: olaylar.length,
    antlasmalarKaydi: (ctx.ANTLASMALAR || []).length,
    ekHavuzKart: _ekHavuz().length, merakHavuzKart: _merakHavuz().length
  },
  kesin: olc(kesin, "k=antlasma"),
  gevsek: olc(gevsek, "k=antlasma VEYA baslik kalibi")
};

fs.writeFileSync(path.join(KOK, "denetim/EKOKUMA-ANTLASMA-0921-OLCUM.json"), JSON.stringify(sonuc, null, 1), "utf8");
console.log("index data dosyasi   :", indexDosyalari.length, "yuklenen", yuklenen, "yok", yuklenmeyen.length);
console.log("ek okuma adi         :", ekAdlar.length, "diskte yok:", ekYok.join(", ") || "-");
console.log("OLAYLAR kovasi       :", olayAnahtarlari.length, "· madde (varsayilan):", olaylar.length, "· kapsam=konu dahil:", tumOlaylar.length);
console.log("ANTLASMALAR kaydi    :", (ctx.ANTLASMALAR || []).length, "· EKOKUMA havuz kart:", _ekHavuz().length);
console.log("");
console.log("KESIN  (k=antlasma)  : toplam", sonuc.kesin.toplam, "· kartli", sonuc.kesin.kartli, "· KARTSIZ", sonuc.kesin.kartsiz);
console.log("GEVSEK (kalip dahil) : toplam", sonuc.gevsek.toplam, "· kartli", sonuc.gevsek.kartli, "· KARTSIZ", sonuc.gevsek.kartsiz);

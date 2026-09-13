// ============================================================================
// ARAC-TEMIZ-TARA-0914 — PAKET-TEMIZ · okura ÇİZİLEN metin alanlarında geliştirici notu taraması
// ============================================================================
//   node denetim/ARAC-TEMIZ-TARA-0914.js [CIKTI.json] [--sert]
// Yalnız OKUR. Evren = js/app.js'in çizdiği alanlar (ölçüldü, 14 Eylül 2026):
//   OLAYLAR*  (olaylar*.js)  b · gun · yer · kisiler · d     obGoster · detayAc · olay listesi · olayMetniUret
//   KRONOLOJI_* (kronoloji*.js) + DEVLETLER[].kronoloji     YALNIZ b   maddeAc (t · b) · birlesikCiz · listeCiz
//   EKOKUMA*/MERAK*  ekKartHtml'in TÜR DALI başına çizdiği alanlar + akordeon başlığı + `kaynak`
//                    (tur EKOKUMA_TUR'da yoksa kart HİÇ çizilmez → gorunur:false)
//   ANTLASMALAR · SERILER (savaslar*.js)                  ad · ozet · topraklar · taraf_metin · savas_basi · aralik
//   KISILER · PADISAHLAR                                  ad · donem · not + kartvizit alanları
//   GORSEL_MADDE                                          eser · sanatci · yil · gorsel_alt
// `ic_not*` app.js'te HİÇ çizilmez (_icNotAyikla; obGoster alanları adıyla seçer) — evrene girmez.
// --sert: yalnız SERT desenli adaylar (zayıf desenler: madde · kayıt · rivayet · denetim · haritada)
// ============================================================================
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");

const DESEN = [
  ["dogrulanamadi", /doğrulanamad|dogrulanamad|doğrulanmad|teyit edilemed/i],
  ["kaynaksiz", /kaynaksız|kaynağı yok|kaynak yok/i],
  ["bulunamadi", /bulunamad/i],
  ["okunmadi", /okunmad|okumadım|(?<!\p{L})okunan (TDV|üç|iki|kaynak|madde|gövde)|(?<!\p{L})okundu(?!\p{L})/iu],
  ["olculemedi", /ölçülemed|ölçülmed|ölçüldü|ölçmedim|sınanmad|sınanmalı/i],
  ["isaret", /⚠️|⚠|🔴|🟢|🟡|📌|🆕/],
  ["tdv-tartisma", /TDV[^.;]{0,80}(diyor|der\b|kaydeder|kaydediyor|belirtiyor|belirtir|vermiyor|vermez|VERMEZ|yazıyor|anmıyor|anmaz|geçmiyor|susuyor|söylüyor|göstermiyor|desteklemiyor|reddediyor)/i],
  ["http-slug", /HTTP \d|\(302\)|(?<!\p{L})(ölü|ÖLÜ)(?!\p{L})|\bslug|--sehir|--ulke|gövde(si|de|lerinde|leri)? (okundu|okunan)|gövdelerinde|Denenen/iu],
  ["atlas", /\batlas(?!\s*(okyanus|dağ|dag|ı'nı aş))/i],
  ["veri", /\bveri(ye|de|si|nin|den|lerde|ler)?\b/i],
  ["kart-madde-meta", /karta yazılmadı|bu kart|kart taraf|bağlı madde|kuyruk kronoloji|madde bulunamad|maddeye bağlandı|kronolojide madde/i],
  ["koordinator", /koordinatör|\bKITA \d|\bPAKET-|\bOK1\d\d|OTURUM-/i],
  ["yyyy", /YYYY|\b\d{3,4}-\d\d-\d\d\b/],
  ["gun-bilinmiyor", /gün(ü)? (bilinmiyor|bilinmez|belirsiz|vermiyor|vermez)|ay\/gün|günü kaynaklarda|TARİH VERMEZ/i],
  ["yuvarlak", /yuvarlak (tarih|gün)|temsilî (tarih|gün)/i],
  ["ic-not", /iç not/i],
  ["kaynak-parantez", /\((kaynak|kaynaklar|bkz\.?)\s*:/i],
  ["dosya-adi", /\b[a-z_0-9]+\.(js|py|json|md)\b/i],
  ["paragraf-ders", /§|\bD\d{3}\b|Değişmez \d/],
  ["kunye", /künye/i],
  ["yerlesim-kimlik", /yerleşim(i|leri)? (haritaya|kimliğinden)|\d+ yerleşim|kimliğinden çıkar/i],
  ["esas-alindi", /esas alındı|kapsamamaktadır|tercihtir|hizalandı|deseninden alındı/i],
  // zayıf (tek başına aday sayılır ama çoğu meşru okur metni)
  ["z-rivayet", /rivayet/i],
  ["z-haritada", /haritada|harita(da)? hâlâ/i],
  ["z-madde", /\bmadde(si|de|ye|nin|ler|lerde)?\b/i],
  ["z-kesinlik", /kesinlik|kesin değil/i],
];
const SERT = process.argv.includes("--sert");
const EKOKUMA_TUR = ["sebep-sonuc", "magazin", "merak", "antlasma", "tartisma", "teknik-bilimsel", "kimdir", "dis-yankilar",
  "kahramanlik", "menkibeler", "sok-haberler", "edebiyat", "savas-hikayesi"];

const out = [];
function ekle(dosya, havuz, kayit, alanYolu, s, gorunur) {
  if (typeof s !== "string" || !s) return;
  const bulunan = [];
  for (const [ad, re] of DESEN) if (re.test(s)) bulunan.push(ad);
  const sert = bulunan.filter((d) => !d.startsWith("z-"));
  if (!bulunan.length || (SERT && !sert.length)) return;
  const parca = [];
  for (const [ad, re] of DESEN) {
    if (!(sert.length ? sert : bulunan).includes(ad)) continue;
    const m = s.match(re);
    if (m) parca.push(s.slice(Math.max(0, m.index - 100), m.index + 120));
  }
  out.push({ dosya, havuz, id: kayit.id || "", t: kayit.t || kayit.from || "", b: kayit.b || kayit.baslik || kayit.soru || kayit.ad || "",
             alan: alanYolu, desen: bulunan, sert: sert.length > 0, gorunur: gorunur !== false, metin: s, parca });
}
function ekKart(dosya, havuz, k, merakHavuzu) {
  const tur = merakHavuzu && !k.tur ? "merak" : k.tur;
  const gorunur = !tur ? !!(k.ozet || k.topraklar) : EKOKUMA_TUR.includes(tur);
  const e = (a, v) => ekle(dosya, havuz, k, a, v, gorunur);
  if (tur === "sebep-sonuc") {
    e("sebep.b", k.sebep && k.sebep.b); e("sonuc.b", k.sonuc && k.sonuc.b); e("bag", k.bag); e("metin", k.metin);
  } else if (tur === "magazin") { e("baslik", k.baslik); e("metin", k.metin); e("not", k.not); }
  else if (tur === "merak") {
    e("soru", k.soru); e("kisa", k.kisa);
    (k["goruşler"] || k.gorusler || []).forEach((g, i) => { e(`gorusler[${i}].tez`, g.tez); e(`gorusler[${i}].dayanak`, g.dayanak); });
  } else if (tur === "edebiyat") {
    e("baslik", k.baslik); if (k.sanatci) { e("sanatci.ad", k.sanatci.ad); e("sanatci.hayat", k.sanatci.hayat); e("sanatci.onem", k.sanatci.onem); }
    e("metin", k.metin); if (k.alinti && k.alinti.metin && !/^bulunamad/.test(k.alinti.metin)) e("alinti.metin", k.alinti.metin);
  } else if (tur === "savas-hikayesi") {
    e("baslik", k.baslik); e("tarih_metin", k.tarih_metin); e("yer", k.yer);
    (k.taraflar || []).forEach((t, i) => ["ad", "komutan", "kuvvet"].forEach((a) => e(`taraflar[${i}].${a}`, t[a])));
    ["oncesi", "akis", "sonuc", "tartisma"].forEach((a) => e(a, k[a]));
  } else if (!tur && (k.ozet || k.topraklar)) {
    ["ad", "taraf_metin", "ozet", "topraklar", "savas_basi"].forEach((a) => e(a, k[a]));
  } else {
    e(k.baslik ? "baslik" : k.ad ? "ad" : "soru", k.baslik || k.ad || k.soru);
    ["ozet", "metin", "kisa", "not", "bag", "aciklama"].forEach((a) => e(a, k[a]));
  }
  e("kaynak", k.kaynak);
}
const KV_ALAN = ["ad", "donem", "not", "dogum", "dogum_yer", "olum", "olum_yer", "olum_sebep", "baba", "anne", "tahta",
                 "skandal", "ovgu", "yergi", "tartisma", "tarihciler"];
function kisi(dosya, havuz, k) {
  for (const a of KV_ALAN) ekle(dosya, havuz, k, a, k[a]);
  ["lakap", "unvan", "esler"].forEach((a) => (k[a] || []).forEach((v, i) => ekle(dosya, havuz, k, `${a}[${i}]`, v)));
}
const dosyaMadde = {};
for (const f of fs.readdirSync(DATA).sort()) {
  if (!/\.js$/.test(f)) continue;
  if (!/^(olaylar|kronoloji|ekokuma|merak|savaslar|kisiler|padisahlar|gorsel_madde|devletler\.js)/.test(f)) continue;
  const w = {};
  try { new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w); }
  catch (e) { console.log("HATA " + f + ": " + e.message); continue; }
  dosyaMadde[f] = 0;
  for (const key of Object.keys(w)) {
    const v = w[key];
    if (!Array.isArray(v)) continue;
    for (const x of v) {
      if (!x || typeof x !== "object") continue;
      dosyaMadde[f]++;
      if (/^OLAYLAR/.test(key)) ["b", "gun", "yer", "kisiler", "d"].forEach((a) => ekle(f, key, x, a, x[a]));
      else if (/^KRONOLOJI_/.test(key)) ekle(f, key, x, "b", x.b);
      else if (/^EKOKUMA/.test(key)) ekKart(f, key, x, false);
      else if (/^MERAK/.test(key)) ekKart(f, key, x, true);
      else if (key === "ANTLASMALAR") ["ad", "ozet", "topraklar", "taraf_metin", "savas_basi"].forEach((a) => ekle(f, key, x, a, x[a]));
      else if (key === "SERILER") ["ad", "ozet", "aralik"].forEach((a) => ekle(f, key, x, a, x[a]));
      else if (key === "KISILER" || key === "PADISAHLAR") kisi(f, key, x);
      else if (key === "GORSEL_MADDE") (x.gorseller || [x]).forEach((r, i) => ["eser", "sanatci", "yil", "gorsel_alt"].forEach((a) => ekle(f, key, x, (x.gorseller ? `gorseller[${i}].` : "") + a, r[a])));
      else if (key === "DEVLETLER") { ["ad", "baskent"].forEach((a) => ekle(f, key, x, a, x[a])); (x.kronoloji || []).forEach((m, i) => ekle(f, key, { id: x.id, t: m.t, b: m.b }, `kronoloji[${i}].b`, m.b)); }
    }
  }
}
const say = {}, havuz = {};
out.forEach((o) => { o.desen.forEach((d) => (say[d] = (say[d] || 0) + 1)); const h = o.havuz.replace(/_.*/, "") + (o.gorunur ? "" : "(çizilmiyor)"); havuz[h] = (havuz[h] || 0) + 1; });
console.log("dosya", Object.keys(dosyaMadde).length, "· kayıt", Object.values(dosyaMadde).reduce((a, b) => a + b, 0),
  "· aday alan", out.length, "· sert", out.filter((o) => o.sert).length, "· görünür sert", out.filter((o) => o.sert && o.gorunur).length);
console.log("havuz", JSON.stringify(havuz));
console.log("desen", JSON.stringify(say));
const cikti = process.argv.find((a) => a.endsWith(".json"));
if (cikti) fs.writeFileSync(cikti, JSON.stringify(out, null, 1));

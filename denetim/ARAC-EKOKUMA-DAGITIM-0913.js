// ARAC-EKOKUMA-DAGITIM-0913.js — ek okuma kartı → kronoloji maddesi bağ ölçümü
// Kullanım: node denetim/ARAC-EKOKUMA-DAGITIM-0913.js [--dump] [--json cikti.json] [--kartsiz cikti.json]
// Bağlama kuralı js/app.js ekKartBagliMi() ile BİREBİR (app.js:6844):
//   tur==="magazin" || !tur  → kart.t === o.t
//   diğer                    → (kart.olay || kart.baglanti || []).indexOf(o.t) >= 0
// Havuz: _ekHavuz() = window /^EKOKUMA(_[A-Z0-9]+)?$/ ; "merak" türü YALNIZ window.MERAK;
// "antlasma" türü ANTLASMALAR (data/savaslar.js, tur alanı YOK → t ile) + havuzdaki tur:"antlasma".
// Madde evreni: index.html'de <script> ile yüklenen data/olaylar*.js (window /^OLAYLAR(_[A-Za-z0-9]+)?$/).
// ⚠️ Anahtar YALNIZ tarih: aynı `t`yi paylaşan her madde kartı birlikte alır (ÇAKIŞMA — ayrıca basılır).
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const src = [...html.matchAll(/<script src="data\/([^"?]+)\.js/g)].map(m => m[1]);
const olayDos = src.filter(f => /^olaylar/.test(f));
function yukle(dosyalar, desen) {
  global.window = {};
  for (const f of dosyalar) {
    try { eval(fs.readFileSync(path.join(KOK, "data", f + ".js"), "utf8")); }
    catch (e) { console.error("OKUNAMADI", f, e.message); }
  }
  const out = [];
  for (const k of Object.keys(window)) if (desen.test(k) && Array.isArray(window[k]))
    for (const o of window[k]) out.push(Object.assign({ _dosya: k }, o));
  return out;
}
const OLAY = yukle(olayDos, /^OLAYLAR(_[A-Za-z0-9]+)?$/);
const ANT = yukle(["savaslar"], /^ANTLASMALAR$/);
const KART_DOS = ["ekokuma", "merak", "ekokuma_antlasma2", "ekokuma_magazin", "ekokuma_mimari",
  "ekokuma_edebiyat", "ekokuma_savas", "ekokuma_sh104", "ekokuma_tartisma", "ekokuma_kadin", "ekokuma_ekonomi"];
// KART_DIR: önce/sonra kıyası için kart dosyalarını başka bir dizinden (ör. `git show HEAD:` kopyası) okur
const KART_DIR = process.env.KART_DIR || path.join(KOK, "data");
global.window = {};
for (const f of KART_DOS) eval(fs.readFileSync(path.join(KART_DIR, f + ".js"), "utf8"));
const KART = [];
for (const k of Object.keys(window)) {
  if (!Array.isArray(window[k])) continue;
  if (!/^EKOKUMA(_[A-Z0-9]+)?$/.test(k) && k !== "MERAK") continue;
  window[k].forEach((c, i) => KART.push(Object.assign({ _var: k, _i: i }, c)));
}
const TURLER = ["sebep-sonuc", "magazin", "antlasma", "tartisma", "teknik-bilimsel", "kimdir",
  "dis-yankilar", "kahramanlik", "menkibeler", "sok-haberler", "edebiyat", "savas-hikayesi"];
function gorunurTur(c) {
  if (c._var === "MERAK") return (c.tur === "merak" || !c.tur) ? "merak" : null;
  return TURLER.includes(c.tur) ? c.tur : null;   // havuzdaki tur:"merak" GÖRÜNMEZ
}
const aktifTarih = c => (c.tur === "magazin" || !c.tur) ? (c.t ? [c.t] : []) : (c.olay || c.baglanti || []);
const olayByT = {};
for (const o of OLAY) (olayByT[o.t] = olayByT[o.t] || []).push(o);
const ad = c => c.baslik || c.soru || c.kisa || c.ad || c.id;

const maddeTur = new Map();          // madde → Set(tür)
const ekle = (o, tur) => { if (!maddeTur.has(o)) maddeTur.set(o, new Set()); maddeTur.get(o).add(tur); };
const rapor = { madde: OLAY.length, kart: KART.length, antlasmalar: ANT.length, kartlar: [], bos_tarih: [], cakisma: [], gizli_bag: [] };
for (const c of KART) {
  const tur = gorunurTur(c);
  const r = { var: c._var, id: c.id, tur: c.tur, gorunur: !!tur, baslik: String(ad(c)).slice(0, 90), tarihler: [] };
  for (const t of aktifTarih(c)) {
    const hit = olayByT[t] || [];
    r.tarihler.push({ t, maddeler: hit.map(o => o.b) });
    if (!hit.length) rapor.bos_tarih.push(`${c._var}:${c.id} @ ${t}`);
    if (hit.length > 1) rapor.cakisma.push(`${c._var}:${c.id} @ ${t} → ${hit.map(o => o.b).join(" ‖ ")}`);
    if (tur) for (const o of hit) ekle(o, tur);
  }
  // magazin: olay[] bugün OKUNMUYOR — etkisiz bağlar ayrıca sayılır
  if (c.tur === "magazin") for (const t of (c.olay || [])) if (t !== c.t)
    rapor.gizli_bag.push(`${c.id} @ ${t} → ${(olayByT[t] || []).map(o => o.b).join(" ‖ ") || "✗"}`);
  rapor.kartlar.push(r);
}
const kartliMadde = maddeTur.size;
for (const a of ANT) for (const o of (olayByT[a.t] || [])) ekle(o, "antlasma(ANTLASMALAR)");
const turSay = {};
for (const s of maddeTur.values()) for (const t of s) turSay[t] = (turSay[t] || 0) + 1;
rapor.ozet = {
  kart_basina: Object.fromEntries(Object.entries(KART.reduce((a, c) => { const k = c._var + ":" + c.tur + (gorunurTur(c) ? "" : "(GÖRÜNMEZ)"); a[k] = (a[k] || 0) + 1; return a; }, {}))),
  bag_toplam: rapor.kartlar.reduce((s, r) => s + (r.gorunur ? r.tarihler.reduce((q, x) => q + x.maddeler.length, 0) : 0), 0),
  kartli_madde_EKOKUMA_MERAK: kartliMadde,
  butonlu_madde_ANTLASMALAR_dahil: maddeTur.size,
  tur_basina_madde: turSay,
  bos_tarih: rapor.bos_tarih.length, cakisma: rapor.cakisma.length, gizli_bag: rapor.gizli_bag.length,
};

// ── kartsız ÖNCELİK listesi: Osmanlı-merkezli çekirdek, hiçbir ek okuma butonu yok ─────────
const AGIRLIK = { taht: 6, antlasma: 5, savas: 5, kusatma: 4, fetih: 4, kayip: 3, isyan: 2, darbe: 3, reform: 3, kanun: 3 };
const PADISAH = /osman gazi|orhan|murad|bayezid|bâyezid|çelebi mehmed|mehmed|selim|süleyman|kanun[iî]|mustafa|ahmed|ibrahim|osman|mahmud|abdülmecid|abdülaziz|abdülhamid|vahdeddin|reşad/i;
const kartsiz = OLAY.filter(o => !maddeTur.has(o) && !o.dunya && o.kapsam !== "konu" && o.kapsam !== "dunya")
  .map(o => {
    let p = (AGIRLIK[o.k] || 0) + (o.vefat_id ? 6 : 0);
    if ((o.onem || 0) >= 4) p += 3;
    if (PADISAH.test(o.b)) p += 2;
    if (/osmanl/i.test(o.b + " " + o.d)) p += 1;
    if (String(o.d || "").length > 450) p += 1;
    return { t: o.t, k: o.k || "", b: o.b, dosya: o._dosya, puan: p };
  }).filter(x => x.puan >= 5).sort((a, b) => b.puan - a.puan || (a.t < b.t ? -1 : 1));
rapor.kartsiz_oncelik = kartsiz;
rapor.ozet.kartsiz_oncelik_aday = kartsiz.length;

const a = process.argv;
if (a.includes("--dump")) {
  for (const r of rapor.kartlar) {
    console.log(`\n[${r.var}] ${r.id} · ${r.tur}${r.gorunur ? "" : " · GÖRÜNMEZ"} · ${r.baslik}`);
    for (const x of r.tarihler) console.log(`   ${x.t} → ${x.maddeler.length ? x.maddeler.join(" ‖ ") : "✗ MADDE YOK"}`);
  }
}
const j = a.indexOf("--json"); if (j > 0) fs.writeFileSync(a[j + 1], JSON.stringify(rapor, null, 1));
const ks = a.indexOf("--kartsiz"); if (ks > 0) fs.writeFileSync(a[ks + 1], JSON.stringify(kartsiz, null, 1));
console.log("\nÖZET " + JSON.stringify(rapor.ozet, null, 1));
console.log("\nÇAKIŞMA (aynı gün, kart her maddeye düşer):\n  " + rapor.cakisma.join("\n  "));
console.log("\nBOŞ TARİH (hiçbir maddeye düşmüyor):\n  " + (rapor.bos_tarih.join("\n  ") || "—"));
console.log("\nMAGAZİN olay[] — bugün ETKİSİZ:\n  " + (rapor.gizli_bag.join("\n  ") || "—"));

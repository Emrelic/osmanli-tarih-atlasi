// denetim/ARAC-KITA15-CKATMAN-DOGRULA-0913.js — KITA 15, IS① dogrulama
// (SALT OKUR). KITA 30'un yontemiyle AYNI: app.js'in GERCEK C-katmani
// kodu fs.readFileSync ile okunup node'da eval edilir, kod KOPYALANMAZ.
// Amac: BULGU-KITA30-MEVCUT-KATMAN-OLCUMU.md'nin 4 kalemi commit 3bb4aa9
// ile app.js'e zaten inmis mi, 7/7 kayit dogru ciziyor mu, renk dogru mu.
//
//   node denetim/ARAC-KITA15-CKATMAN-DOGRULA-0913.js

const fs = require("fs");
const path = require("path");
const KOK = path.resolve(__dirname, "..");

function gunIdx(s) {
  if (!s) return null;
  const p = String(s).length === 7 ? s + "-01" : s;
  const [y, m, d] = p.split("-").map(Number);
  return Math.round(Date.UTC(y, (m || 1) - 1, d || 1) / 864e5);
}

// ---- gercek veri: DEVLETLER, DEVLET_HARITA, HUKUKI_SINIRLAR ---------------
global.window = {};
eval(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"));
eval(fs.readFileSync(path.join(KOK, "data", "devletler_harita.js"), "utf8"));
eval(fs.readFileSync(path.join(KOK, "data", "hukuki_sinirlar.js"), "utf8"));
console.log("DEVLETLER:", (window.DEVLETLER || []).length, "· DEVLET_HARITA:", (window.DEVLET_HARITA || []).length,
            "· HUKUKI_SINIRLAR:", (window.HUKUKI_SINIRLAR || []).length);

// ---- app.js'in GERCEK C-katmani kodunu satir araligiyla cek ---------------
// 🔴 SATIR NUMARALARI ELLE YAZILMIYOR — dosyada ARANIYOR (D131: bir satir
// numarasi, kod degismese bile komsusu degisince kayar; bu dosyada iki kez
// oldu, 13 Eylul 2026).
const appSrc = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8").split("\n");
const basIdx = appSrc.findIndex(l => /^var _DEVLET_RENK/.test(l));
const bitIdx = appSrc.findIndex((l, i) => i > basIdx && /^function _hukukiSinirGuncelle/.test(l));
// Naif "}" satir eslemesi ic ice bloklarda YANLIS satirda durur (denendi,
// cuktu) — GERCEK parantez derinligi sayilir. `_hukukiSinirGuncelle(gun) {`
// satirindaki ILK "{" derinligi 1 baslatir, 0'a donen satir fonksiyonun
// KENDI kapanisidir.
let derinlik = 0, sonIdx = -1, basladiMi = false;
for (let i = bitIdx; i < appSrc.length; i++) {
  for (const ch of appSrc[i]) {
    if (ch === "{") { derinlik++; basladiMi = true; }
    else if (ch === "}") { derinlik--; }
  }
  if (basladiMi && derinlik === 0) { sonIdx = i; break; }
}
if (basIdx < 0 || bitIdx < 0 || sonIdx < 0) {
  console.log("🔴 BLOK BULUNAMADI — fonksiyon adlari degismis olabilir. DUR.");
  process.exit(1);
}
const blok = appSrc.slice(basIdx, sonIdx + 1).join("\n");
if (!/_hukukiSinirGuncelle/.test(blok) || !/_cParalelGeometrisi/.test(blok)) {
  console.log("🔴 SATIR ARALIGI KAYMIS OLABILIR — beklenen fonksiyonlar blokta yok. DUR.");
  process.exit(1);
}

// ---- minimal harita/DOM mock -----------------------------------------------
global.haritaHazir = true;
const _kaynaklar = {};
global.harita = {
  getSource: function (id) {
    if (!_kaynaklar[id]) return null;
    return { setData: function (d) { _kaynaklar[id]._son = d; } };
  }
};
["hukuki-sinir-dolgu", "hukuki-sinir-hat", "hukuki-sinir-nokta"].forEach(function (id) { _kaynaklar[id] = {}; });
global.bosVeri = function () { return { type: "FeatureCollection", features: [] }; };
global.gunIdx = gunIdx;

eval(blok);

// ---- HER 7 KAYDI KENDI PENCERESININ ORTASINDA CALISTIR --------------------
let gecen = 0, toplam = 0;
const sonuc = [];
for (const kayit of window.HUKUKI_SINIRLAR) {
  toplam++;
  const fi = gunIdx(kayit.f), ti = kayit.t ? gunIdx(kayit.t) : fi + 3650;
  const ortaGun = Math.round((fi + ti) / 2);
  // _hukukiSinirGuncelle sadece TUM aktif kayitlari tek celigde islerken
  // "kayit_id" bazli filtre yapmiyor -- her kaydi TEK BASINA sinamak icin
  // ozel bir cagriyla dogrudan geometri fonksiyonlarini kullaniyoruz.
  const tur = (kayit.hat || {}).tur;
  let g = null;
  if (tur === "paralel" || tur === "meridyen") g = _cParalelGeometrisi(kayit);
  else if (tur === "bolge") g = _cBolgeGeometrisi(kayit);
  else if (tur === "nokta-kumesi") g = { dolgu: [], hat: null }; // nokta ayrica sinanir asagida
  else g = _cKayitGeometrisi(kayit);
  const noktalar = _cNoktaKumesiOzellikleri(kayit);
  const ciziliyorMu = (g && (g.dolgu.length || g.hat)) || noktalar.length > 0;
  const renkler = (g ? g.dolgu.map(f => f.properties.renk) : []).concat(noktalar.map(f => f.properties.renk));
  const griVar = renkler.some(r => r === "#9a9a9a");
  if (ciziliyorMu && !griVar) gecen++;
  sonuc.push({ id: kayit.id, tur: tur, ciziliyorMu, renkler, griVar });
}

console.log("\n=== 7 KAYIT TEK TEK ===");
for (const s of sonuc) {
  console.log((s.ciziliyorMu && !s.griVar ? "✓" : "🔴"), s.id.padEnd(32), "tur:", (s.tur||"").padEnd(14),
              "ciziliyor:", s.ciziliyorMu, "renkler:", JSON.stringify(s.renkler), s.griVar ? " <<< GRI VAR" : "");
}
console.log("\nSONUC:", gecen + "/" + toplam, "ciziliyor VE renk dogru (gri yok)");

// ---- TERS SINAMA (D010, iki yon) — negatif_taraf ALANI varsa nokta_dizisi
// SIRASI ters cevrilince renk DEGISMEMELI (alanin ise yaradiginin kaniti).
// Alan YOKSA (bu kod bugun icin gecerli degil, ama gelecek kayitlar icin)
// renk TERS DONER — bu da eski kirilganligin hala orada oldugunu gosterir.
console.log("\n=== TERS SINAMA — nokta_dizisi sirasi ters cevrilince renk ===");
for (const kayit of window.HUKUKI_SINIRLAR) {
  const tur = (kayit.hat || {}).tur;
  if (tur !== "cetvel" && tur !== "dogal-tanimsiz") continue;
  const once = _cKayitGeometrisi(kayit);
  const renkOnce = once ? once.dolgu.map(f => f.properties.renk) : [];
  const ters = JSON.parse(JSON.stringify(kayit));
  ters.hat.nokta_dizisi = ters.hat.nokta_dizisi.slice().reverse();
  const sonra = _cKayitGeometrisi(ters);
  const renkSonra = sonra ? sonra.dolgu.map(f => f.properties.renk) : [];
  const ayniMi = JSON.stringify(renkOnce.slice().sort()) === JSON.stringify(renkSonra.slice().sort());
  const korumali = !!(kayit.kapsama && kayit.kapsama.negatif_taraf);
  console.log(" ", kayit.id.padEnd(32),
              "negatif_taraf:", korumali ? "VAR" : "YOK",
              "| once:", JSON.stringify(renkOnce), "sonra(ters):", JSON.stringify(renkSonra),
              korumali
                ? (ayniMi ? "✓ KORUNUYOR (beklenen)" : "🔴 DEGISTI — alan VARKEN degismemeliydi!")
                : (ayniMi ? "— (fark yok, tesadüf olabilir)" : "(beklenen: alan yok, sıraya bağımlı)"));
}

// ---- capraz kontrol: gercek gun ustunden TUM aktif kayitlari birlikte isle
const testGunleri = ["1899-06-01", "1913-06-10", "1699-06-01", "1750-01-01", "1900-01-01"];
console.log("\n=== capraz: belirli gunlerde hangi kayitlar aktif ===");
for (const g of testGunleri) {
  const gi = gunIdx(g);
  const aktif = window.HUKUKI_SINIRLAR.filter(k => gunIdx(k.f) <= gi && (k.t == null || gi < gunIdx(k.t)));
  console.log(" ", g, "->", aktif.map(k => k.id).join(", ") || "(hicbiri)");
}

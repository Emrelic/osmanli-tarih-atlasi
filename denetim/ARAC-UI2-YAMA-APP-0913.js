// PAKET-UI2 · 13 Eylül 2026 · js/app.js'e metin yaması uygulayıcı (tek seferlik).
// Her [eski, yeni] çifti dosyada TAM BİR KEZ geçmeli; değilse HİÇBİR ŞEY yazılmaz (exit 1).
// node denetim/ARAC-UI2-YAMA-APP-0913.js
"use strict";
const fs = require("fs"), path = require("path");
const YOL = path.join(__dirname, "..", "js", "app.js");
let s = fs.readFileSync(YOL, "utf8");
const CRLF = s.indexOf("\r\n") >= 0;
if (CRLF) s = s.replace(/\r\n/g, "\n");

const YAMALAR = [];
function yama(ad, eski, yeni) { YAMALAR.push({ ad, eski, yeni }); }

// ① obGoster → antlaşma kutusu
yama("obGoster-antlasma-cagri",
`  if (an) kutu("Antlaşma hükmü", karsiTaraf(an) + " ile · " + an.ozet);
`,
`  if (an) kutu("Antlaşma hükmü", karsiTaraf(an) + " ile · " + an.ozet);
  // PAKET-UI2 — antlaşma öncesi/sonrası (Emre'nin 13 Eylül kararı). Hesap MADDE
  // AÇILIŞINDA bir kez yapılır, kare başına değil.
  try { antlasmaFarkiGoster(o, ozel); } catch (eAnt) { console.error("[antlaşma farkı]", eAnt); }
`);

// ② antlaşma fonksiyonları — obGoster'dan hemen sonra
yama("antlasma-fonksiyonlari",
`// 🆕 13 Eylül 2026 — paket 0046, ③ (koordinatörün kararı). Madde görseli`,
`// ═══════════════════════════════════════════════════════════════════════════
// 🆕 PAKET-UI2 (13 Eylül 2026) — ANTLAŞMA ÖNCESİ / SONRASI GÖRÜNÜMÜ
// EMRE'NİN KARARI: *"Antlaşmalar için yeni yapı: bir antlaşma maddesi açılınca
// antlaşma öncesi ve sonrası haritayı gösteren, aradaki farkların (el değiştiren
// toprakların) yanıp söndüğü bir görünüm — her antlaşma için uygulanabilir olsun."*
// Taralı devir alanının YERİNE geçer (bkz. DEVIR_TARAMA_ACIK).
//
// VERİ AKIŞI (yeni geometri YOK, elle çizim YOK):
//   ① antlaşma maddesi mi → k:"antlasma" (113) ∪ [ANTLASMALAR eşleşmesi ∧
//      başlıkta "antlaşma"] (+4: Balta Limanı k:ekonomi · Uşi k:kayip …) = 117
//      ⚠️ ANTLASMALAR eşleşmesi TEK BAŞINA alınmadı: "Prut Zaferi" · "Kozluca
//      Bozgunu" · "Hisarcık Zaferi" (k:savas) aynı 60 günlük pencereye düşüyor.
//   ② pencere: [madde günü, bir sonraki maddeden bir gün önce] (tavan 365 gün)
//      — Değişmez 2'nin mantığı: sonraki maddenin günündeki kırılma ONUNDUR.
//   ③ o penceredeki İLK sınır gününde, TARAFLARDAN birine dokunan yerleşim el
//      değiştirmeleri (SUZGEC.antlasmaFarki — gün başına yalnız o gün sınırı
//      olan yerleşimler bakılır). Taraflar: osmanli + ANTLASMALAR.taraf +
//      madde metninde adı geçen künyeler (SUZGEC.antlasmaTaraflari).
//      ⚠️ Süzgeçsiz ilk ölçümde 1533 İstanbul Antlaşması'nda İnka→İspanya,
//      1352 Ceneviz kapitülasyonunda Kilikya→Ramazanoğlu "fark" çıkıyordu.
//   ④ çizim: değişen yerleşimin motor peteği (PETEKLER, ad ile) — dolgu rengi
//      "öncesi sahibi" ↔ "sonrası sahibi" arasında yanıp söner, altın kesik
//      kenar kalır. Öncesi/Sonrası düğmeleri hâli sabitler.
// ÖLÇÜM (denetim/ARAC-UI2-FARK-0913.js, aynı SUZGEC fonksiyonları, gerçek veri):
//   117 madde · aynı gün 54 · pencerede 3 · değişim YOK 60 · madde başına
//   medyan 7 ms / azami 16 ms · sınır indeksi ilk açılışta bir kez ~35 ms.
// "YOK" dürüstçe yazılır: antlaşma var olan durumu tanımış olabilir ya da toprak
// değişimi o güne işlenmemiş olabilir — hangisi olduğunu arayüz UYDURMAZ.
var ANT_FARK = { madde: null, son: 0, zaman: [], ix: null, petAd: null, fs: null, kutu: null, dugmeler: null };
function _antlasmaKaydi(o) {
  return (window.ANTLASMALAR || []).filter(function (a) {
    return Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0;
  })[0] || null;
}
function antlasmaMaddesiMi(o) {
  if (!o || !o.b) return false;
  if (o.k === "antlasma") return true;
  return /antla[sş]ma/i.test(o.b) && !!_antlasmaKaydi(o);
}
function _sahipRengi(key) {
  if (!key) return "#e8dfc8";                       // sahipsiz — kara zemininin rengi
  if (key === "osmanli") return "#8e0b22";
  if (key.indexOf("tabi:") === 0) {
    var kid = key.slice(5);
    return (kid && _KID_YABANCI_UST[kid]) ? (_DEVLET_RENK[kid] || "#9a9a9a") : "#b2384a";
  }
  return _cTarafRengi(key.slice(2));
}
function _sahipAdi(key) {
  if (!key) return "sahipsiz";
  if (key === "osmanli") return "Osmanlı";
  if (key.indexOf("tabi:") === 0) { var kid = key.slice(5); return kid ? devletAdi(kid) + " (tâbi)" : "Osmanlı tâbii"; }
  return devletAdi(key.slice(2));
}
function antlasmaFarkiHesapla(o) {
  var SG = window.SUZGEC;
  if (!SG || !SG.antlasmaFarki) return { hata: "js/suzgec.js eski sürüm (önbellek)" };
  var Y = window.YERLESIMLER || [];
  if (!ANT_FARK.ix) {
    ANT_FARK.ix = SG.sinirIndeksi(Y);
    ANT_FARK.petAd = {};
    PETEKLER.forEach(function (p, i) { if (p && p.a && p.g && p.g.length) ANT_FARK.petAd[p.a] = i; });
  }
  var oi = olaylar.indexOf(o), sonraki = null;
  for (var j = (oi >= 0 ? oi : 0); j < olaylar.length; j++) {
    if (olaylar[j].gi > o.gi) { sonraki = olaylar[j]; break; }
  }
  var sonIx = Math.min(o.gi + 365, sonraki ? sonraki.gi - 1 : o.gi + 365);
  if (sonIx < o.gi) sonIx = o.gi;
  var kayit = _antlasmaKaydi(o);
  var T = SG.antlasmaTaraflari(o.b + " " + (o.d || ""),
                               kayit && Array.isArray(kayit.taraf) ? kayit.taraf : [],
                               window.DEVLETLER || []);
  return { f: SG.antlasmaFarki(Y, ANT_FARK.ix, _khGunStr(o.gi), _khGunStr(sonIx), T), sonIx: sonIx };
}
function antlasmaFarkiTemizle() {
  ANT_FARK.zaman.forEach(clearTimeout);
  ANT_FARK.zaman = [];
  if (!ANT_FARK.madde) return;
  ANT_FARK.madde = null;
  if (haritaHazir && harita.getSource("antlasma-fark")) harita.getSource("antlasma-fark").setData(bosVeri());
}
function _antlasmaHal(hal) {                         // "once" | "sonra" | "yok"
  if (ANT_FARK.dugmeler) {
    ANT_FARK.dugmeler.once.classList.toggle("secili", hal === "once");
    ANT_FARK.dugmeler.sonra.classList.toggle("secili", hal === "sonra");
  }
  if (!haritaHazir || !harita.getLayer("antlasma-fark-dolgu")) return;
  if (hal === "yok") { harita.setPaintProperty("antlasma-fark-dolgu", "fill-opacity", 0); return; }
  harita.setPaintProperty("antlasma-fark-dolgu", "fill-color", ["get", hal]);
  harita.setPaintProperty("antlasma-fark-dolgu", "fill-opacity", 0.92);
}
// Yanıp sönme: (öncesi → sonrası) × 3, sonra dolgu kalkar, altın kenar kalır.
// Kare başına HESAP YOK — yalnız 7 kez setPaintProperty.
function antlasmaFarkiKirp(gecikme) {
  ANT_FARK.zaman.forEach(clearTimeout);
  ANT_FARK.zaman = [];
  var azHareket = false;
  try { azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { }
  if (azHareket) { _antlasmaHal("sonra"); return; }   // hareket istemeyene sabit "sonrası"
  var MS = 520, sira = ["once", "sonra", "once", "sonra", "once", "sonra", "yok"];
  sira.forEach(function (h, i) {
    ANT_FARK.zaman.push(setTimeout(function () { _antlasmaHal(h); }, (gecikme || 0) + i * MS));
  });
}
function _antlasmaYukle(o) {
  if (ANT_FARK.madde === o) return;
  ANT_FARK.madde = o;
  if (haritaHazir && harita.getSource("antlasma-fark")) {
    harita.getSource("antlasma-fark").setData({ type: "FeatureCollection", features: ANT_FARK.fs || [] });
  }
}
function antlasmaFarkiGoster(o, ozelEl) {
  antlasmaFarkiTemizle();
  ANT_FARK.dugmeler = null;
  if (!antlasmaMaddesiMi(o) || !ozelEl) return;
  var r = antlasmaFarkiHesapla(o);
  var kutuEl = document.createElement("div");
  kutuEl.className = "ob-kutu ob-antlasma";
  var bas = document.createElement("b");
  bas.textContent = "🗺 Antlaşmanın haritadaki karşılığı";
  kutuEl.appendChild(bas);
  var yazi = document.createElement("span");
  kutuEl.appendChild(yazi);
  ozelEl.appendChild(kutuEl);
  if (r.hata) { yazi.textContent = "Görünüm kurulamadı — sayfayı yenileyin (" + r.hata + ")."; return; }
  if (!r.f) {
    yazi.textContent = "Bu maddenin penceresinde (" + _khGunYazi(o.gi) + " → " + _khGunYazi(r.sonIx) +
      ") taraflar arasında haritada el değiştiren toprak yok. Antlaşma var olan durumu tanımış " +
      "olabilir ya da toprak değişimi bu güne işlenmemiş olabilir.";
    return;
  }
  var Y = window.YERLESIMLER || [], fs = [], eksik = 0, say = {};
  var x0 = 180, y0 = 90, x1 = -180, y1 = -90;
  r.f.degisim.forEach(function (d) {
    var y = Y[d.i];
    var an = _sahipAdi(d.once) + " → " + _sahipAdi(d.sonra);
    say[an] = (say[an] || 0) + 1;
    if (typeof y.lon === "number") { x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat); }
    var pi = ANT_FARK.petAd[y.ad];
    if (pi === undefined) { eksik++; return; }
    fs.push({ type: "Feature", properties: { once: _sahipRengi(d.once), sonra: _sahipRengi(d.sonra), ad: y.ad },
              geometry: { type: "MultiPolygon", coordinates: PETEKLER[pi].g } });
  });
  var kirilma = gunIdx(r.f.gun);
  var ozet = Object.keys(say).sort(function (a, b) { return say[b] - say[a]; })
    .map(function (k) { return k + " " + say[k]; }).join(" · ");
  yazi.textContent = (kirilma === o.gi ? "Aynı gün" : "Haritadaki kırılma " + (kirilma - o.gi) + " gün sonra (" + _khGunYazi(kirilma) + ")") +
    " · " + r.f.degisim.length + " yerleşim bölgesi el değiştirdi: " + ozet +
    (eksik ? " · " + eksik + " bölgenin peteği yok, çizilmedi" : "");
  kutuEl.title = r.f.degisim.map(function (d) { return Y[d.i].ad; }).join(", ");
  ANT_FARK.fs = fs;
  ANT_FARK.son = Math.max(kirilma, r.sonIx);
  ANT_FARK.kutu = (x1 >= x0) ? [x0 - 0.6, y0 - 0.6, x1 + 0.6, y1 + 0.6] : null;
  var dugmeler = document.createElement("div");
  dugmeler.className = "ant-dugmeler";
  function dugme(metin, ipucu, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = metin; b.title = ipucu;
    b.addEventListener("click", function () {
      _antlasmaYukle(o);
      ANT_FARK.zaman.forEach(clearTimeout); ANT_FARK.zaman = [];
      fn();
    });
    dugmeler.appendChild(b);
    return b;
  }
  var bOnce = dugme("◀ Öncesi · " + _khGunYazi(gunIdx(r.f.once)), "El değiştiren bölgeler ÖNCEKİ sahiplerinin renginde", function () { _antlasmaHal("once"); });
  var bSonra = dugme("Sonrası · " + _khGunYazi(kirilma) + " ▶", "El değiştiren bölgeler SONRAKİ sahiplerinin renginde", function () { _antlasmaHal("sonra"); });
  dugme("↻ Yakıp söndür", "Farkları yeniden yakıp söndür", function () { antlasmaFarkiKirp(0); });
  dugme("⌖ Farka odaklan", "Haritayı el değiştiren bölgelere çerçevele", function () {
    if (!ANT_FARK.kutu || !haritaHazir) return;
    var k = ANT_FARK.kutu;
    harita.fitBounds([[k[0], k[1]], [k[2], k[3]]], { padding: 50, duration: 900, maxZoom: 7, essential: true });
  });
  kutuEl.appendChild(dugmeler);
  ANT_FARK.dugmeler = { once: bOnce, sonra: bSonra };
  _antlasmaYukle(o);
  _antlasmaHal("yok");
  // Gecikme: panel açılışı + uçuş başlangıcı; mevcut öncesi/sonrası KIRPMASI
  // (bütün harita, ~900 ms) ile üst üste binmesin. Ölçülmedi — gözle ayarlanır.
  antlasmaFarkiKirp(1600);
}

// 🆕 13 Eylül 2026 — paket 0046, ③ (koordinatörün kararı). Madde görseli`);

// ③ katman — işgal katmanlarının hemen ardı
yama("antlasma-katman",
`  harita.addLayer({ id: "isgal-cizgi", type: "line", source: "isgal",
    layout: { "line-join": "round" },
    paint: { "line-color": ["get", "renk"], "line-width": 1.4,
             "line-dasharray": [3, 2] } });
`,
`  harita.addLayer({ id: "isgal-cizgi", type: "line", source: "isgal",
    layout: { "line-join": "round" },
    paint: { "line-color": ["get", "renk"], "line-width": 1.4,
             "line-dasharray": [3, 2] } });

  // 🆕 PAKET-UI2 — ANTLAŞMA FARKI katmanı (bkz. antlasmaFarkiGoster). Veri
  // yalnız antlaşma maddesi açıkken dolar; dolgu rengi "once"/"sonra"
  // özellikleri arasında setPaintProperty ile değişir. TARALI DEĞİL.
  harita.addSource("antlasma-fark", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "antlasma-fark-dolgu", type: "fill", source: "antlasma-fark",
    paint: { "fill-color": ["get", "sonra"], "fill-opacity": 0,
             "fill-opacity-transition": { duration: 160 } } });
  harita.addLayer({ id: "antlasma-fark-cizgi", type: "line", source: "antlasma-fark",
    layout: { "line-join": "round" },
    paint: { "line-color": "#ffd700", "line-width": 2.2, "line-dasharray": [2, 1.4] } });
`);

// ④ guncelle — tarih pencereden çıkınca fark kalkar
yama("guncelle-antlasma-pencere",
`  if (haritaHazir) kaynakliHalkaGuncelle(suanki);
`,
`  if (haritaHazir) kaynakliHalkaGuncelle(suanki);
  // PAKET-UI2 — antlaşma farkı yalnız kendi penceresinde durur (kırpma sırasında
  // dokunulmaz: kırpma madde gününden bir gün geri gider).
  if (typeof ANT_FARK !== "undefined" && ANT_FARK.madde && !_kirpmaKilitli &&
      (suanki < ANT_FARK.madde.gi - 1 || suanki > ANT_FARK.son)) antlasmaFarkiTemizle();
`);

// ⑤ panel kapatılınca
yama("panel-kapat-antlasma",
`document.getElementById("olay-bilgi-kapat").addEventListener("click", function () {
`,
`document.getElementById("olay-bilgi-kapat").addEventListener("click", function () {
  try { antlasmaFarkiTemizle(); } catch (eAk) { }   // PAKET-UI2
`);

// ⑥ odak kutusu çözücüsü — haritayiOlayaGotur'dan önce
yama("odak-cozucu",
`function haritayiOlayaGotur(o, zorla) {
`,
`// 🆕 PAKET-UI2 · 0048/H-0002 — MADDENİN ODAK KUTUSU (tek yer, iki dal okur).
// Emre (1594-10-05 "Üç voyvodalığın birden ayaklanması"): *"geniş açıdan
// odaklanıyor; odağını üç vassal devlet olan Erdel, Eflak ve Boğdan'ı gösterecek
// şekilde getirmesi gerekir."* Ölçüldü: madde \`kapsam_genis:true\`, noktası yok →
// imparatorluk sınırına (\`donemler[di].b\`) çerçeveleniyordu.
// İki kaynak, ikisi de veride elle koordinat İSTEMEZ:
//   ① \`odak_kutu_kaynak\` — HUKUKI_SINIRLAR kaydının kapsama.odak_kutu'su (0046/H-0011)
//      ⚠️ ESKİ HÂLİ yalnız KONUMLU dalda okunuyordu; konumsuz maddede HİÇ okunmuyordu.
//   ② \`odak_kimlik:["eflak","bogdan","erdel"]\` — madde GÜNÜNDE sahibi (d/v/s,
//      tâbi kid ya da kid'siz v: adı künye çekirdeğiyle) bu kimliklerden biri olan
//      atlas yerleşimlerinin kutusu + 0,35° pay. En az 2 yerleşim şart.
//      Ölçüm 1594-10-05: 24 yerleşim · kutu [21.74, 44.33, 28.82, 48.51]
//      (Eflak 11 · Boğdan 10 · kid'siz Erdel Prensliği 3).
function maddeOdakKutusu(o) {
  if (!o) return null;
  if (o.odak_kutu_kaynak) {
    var hk = (window.HUKUKI_SINIRLAR || []).find(function (k) { return k.id === o.odak_kutu_kaynak; });
    var ok = hk && hk.kapsama && hk.kapsama.odak_kutu;
    if (ok) return { kutu: [ok.lon_min, ok.lat_min, ok.lon_max, ok.lat_max], anahtar: "odak:" + o.odak_kutu_kaynak };
  }
  var ids = o.odak_kimlik;
  if (ids && !Array.isArray(ids)) ids = [ids];
  if (ids && ids.length && window.SUZGEC && SUZGEC.sahipKimlikte) {
    var gs = _khGunStr(o.gi), kix = _cDevletIx(), n = 0;
    var x0 = 180, y0 = 90, x1 = -180, y1 = -90;
    (window.YERLESIMLER || []).forEach(function (y) {
      if (typeof y.lat !== "number" || typeof y.lon !== "number") return;
      if (!SUZGEC.sahipKimlikte(SUZGEC.sahipAnahtari(y, gs), SUZGEC.aktifVAdi(y, gs), ids, kix)) return;
      n++;
      if (y.lon < x0) x0 = y.lon; if (y.lon > x1) x1 = y.lon;
      if (y.lat < y0) y0 = y.lat; if (y.lat > y1) y1 = y.lat;
    });
    if (n >= 2) {
      var pay = 0.35;
      return { kutu: [x0 - pay, y0 - pay, x1 + pay, y1 + pay], anahtar: "odakk:" + ids.join(",") + "@" + o.gi, n: n };
    }
    console.warn("[odak_kimlik] " + o.t + " " + ids.join(",") + " → " + n + " yerleşim; kutu kurulamadı (sessiz geçilmedi)");
  }
  return null;
}
function haritayiOlayaGotur(o, zorla) {
`);

// ⑦ konumlu dal
yama("odak-konumlu",
`  if (o.odak_kutu_kaynak) {
    var _hkKayit = (window.HUKUKI_SINIRLAR || []).find(function (k) { return k.id === o.odak_kutu_kaynak; });
    var _ok = _hkKayit && _hkKayit.kapsama && _hkKayit.kapsama.odak_kutu;
    if (_ok) {
      var _obKutu = [_ok.lon_min, _ok.lat_min, _ok.lon_max, _ok.lat_max];
      var _obAnahtar = "odak:" + o.odak_kutu_kaynak;
`,
`  var _odakK = maddeOdakKutusu(o);          // PAKET-UI2: odak_kutu_kaynak ∪ odak_kimlik
  if (_odakK) {
    if (_odakK.kutu) {
      var _obKutu = _odakK.kutu;
      var _obAnahtar = _odakK.anahtar;
`);

// ⑧ konumsuz dal
yama("odak-konumsuz-sart",
`    if (!o.kapsam_genis) {
      if (obYerYokEl) {
        obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri işaretlenmemiş — harita yerinde kaldı.";`,
`    var _odakKG = maddeOdakKutusu(o);      // PAKET-UI2 · 0048/H-0002
    if (!o.kapsam_genis && !_odakKG) {
      if (obYerYokEl) {
        obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri işaretlenmemiş — harita yerinde kaldı.";`);
yama("odak-konumsuz-kutu",
`    if (di >= 0 && donemler[di].b) {
      var b = donemler[di].b;`,
`    var _odakB = _odakKG ? _odakKG.kutu : ((di >= 0 && donemler[di].b) ? donemler[di].b : null);
    if (_odakB) {
      var b = _odakB;`);
yama("odak-konumsuz-metin",
`      if (obYerYokEl) obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri yok — imparatorluk görünümüne geçildi.";`,
`      if (obYerYokEl) obYerYokEl.textContent = _odakKG
        ? "📍 Bu olayın tek bir nokta yeri yok — ilgili bölgeye odaklanıldı."
        : "📍 Bu olayın haritada nokta yeri yok — imparatorluk görünümüne geçildi.";`);

// ⑨ akordeon: eski buton yolunu (ulaşılamayan kod) sil
const BAS = "  ekAkordeonKur(kutu, _akSatirlar);\n  return;\n";
const SON = "var aktifOlay = null;";
const bi = s.indexOf(BAS), si = s.indexOf(SON, bi);
if (bi < 0 || si < 0 || s.indexOf(BAS, bi + 1) >= 0) { console.error("✗ akordeon ölü kod işaretleri bulunamadı/çift"); process.exit(1); }

let hata = 0;
for (const y of YAMALAR) {
  const n = s.split(y.eski).length - 1;
  if (n !== 1) { console.error("✗", y.ad, "eşleşme", n); hata++; }
}
if (hata) { console.error("HİÇBİR ŞEY YAZILMADI"); process.exit(1); }
s = s.slice(0, bi) + "  ekAkordeonKur(kutu, _akSatirlar);\n}\n" + s.slice(si);
for (const y of YAMALAR) s = s.replace(y.eski, () => y.yeni);
if (CRLF) s = s.replace(/\n/g, "\r\n");
fs.writeFileSync(YOL, s);
console.log("✓", YAMALAR.length, "yama + akordeon ölü kod silindi");

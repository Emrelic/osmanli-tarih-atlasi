// ============================================================================
// D KATMANI — 1923 sınırlarının KOORDİNATLA belirlenmiş kesin hattı.
// GORUNUM-ABCD-0916.md §D: "Her köyün, tepenin, akarsuyun hangi tarafta
// kaldığının koordinatla belirlendiği ayrıntılı sınır." Öncelik D > C > (A/B).
//
// Şema: denetim/SEMA-D-0916.md (D1-TURKIYE, 16 Eylül 2026 — bu dosya o ilandan
// SONRA yazıldı, alanlar TEYİTLİ, tahmin değil).
//
// D_SINIRLAR AİLESİ — oturumlar/D-1923-0916.md 'DÜNYA KADROSU' tablosu:
//   window.D_SINIRLAR              (D1-TURKIYE)              data/d_sinirlar.js
//   window.D_SINIRLAR_KOMSU        (D2-KOMSU)                data/d_sinirlar_komsu.js
//   window.D_SINIRLAR_AVRUPA       (D3-AVRUPA-BATI+ORTA)     data/d_sinirlar_avrupa.js
//   + ileride: ORTADOGU · AFRIKA · ASYA · AMERIKA · OKYANUSYA aileleri —
//     hepsi Array.isArray ile güvenli kontrol edilir, yoksa sessizce atlanır.
// Bu dosya yazılırken yalnız D_SINIRLAR (D1-TURKIYE) veriye sahipti; ötekiler
// dosyaya girdikçe otomatik okunur (ad listesine EKLEME dışında kod değişmez).
//
// kategori (SEMA-D-0916.md §2):
//   D      koordinatlı, en yüksek güven          → DÜZ (solid) çizgi
//   C      belge kaba (2 nokta/cetvel)            → KISA kesik çizgi
//   fiili  hukukî hat YOK, bugünkü çizgi VEKİL     → SEYREK kesik + düşük opaklık
//   D-YOK  bu kutuda D çizilmez (A/B geçerli)      → HİÇ ÇİZİLMEZ (hat:null zaten)
// Üçü de AYNI D_HAT_RENK'i kullanır (C katmanından — #1a1a1a siyah kesikli —
// AYIRT edilsin diye, GORUNUM-ABCD-0916.md'nin D>C önceliğini görsel olarak
// da yansıtır); yalnız çizgi biçimi güven seviyesini taşır.
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// İki entegrasyon noktası kendi içinde çözüldü:
//   ① katman kurulumu — kendi `harita.on("load", ...)` dinleyicisi
//      (MapLibre birden fazla "load" dinleyicisini destekler; app.js
//      kendisi de ikinci bir örnek, app.js:7533).
//   ② her gün değişiminde güncelleme — app.js'in global `guncelle()`
//      fonksiyonu monkey-patch ile sarılıyor (aşağıda, dosya sonu).
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA. Tahtadan UI'ya istendi — bkz. denetim/D-KATMAN-0916.md §2/§4.
// ============================================================================
"use strict";

var D_HAT_RENK = "#0a2f5c";

function _dHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}

// ---- VERİ TOPLAMA -----------------------------------------------------
var _D_AILELER = [
  "D_SINIRLAR", "D_SINIRLAR_KOMSU", "D_SINIRLAR_AVRUPA",
  "D_SINIRLAR_AVRUPA_BATI", "D_SINIRLAR_AVRUPA_ORTA", "D_SINIRLAR_ORTADOGU",
  "D_SINIRLAR_AFRIKA", "D_SINIRLAR_ASYA", "D_SINIRLAR_AMERIKA",
  "D_SINIRLAR_OKYANUSYA"
];
function _dKayitlariTopla() {
  var out = [];
  _D_AILELER.forEach(function (ad) {
    var dizi = window[ad];
    if (Array.isArray(dizi)) out = out.concat(dizi);
  });
  return out;
}
var _dIndeksOnbellek = null, _dIndeksSayisi = -1;
function _dKayitIndeksi() {
  var tum = _dKayitlariTopla();
  if (!_dIndeksOnbellek || _dIndeksSayisi !== tum.length) {
    _dIndeksOnbellek = {};
    tum.forEach(function (k) { if (k && k.id) _dIndeksOnbellek[k.id] = k; });
    _dIndeksSayisi = tum.length;
  }
  return _dIndeksOnbellek;
}

// ---- AKTİF PENCERE (D061/D195: açık uç BITIŞE kadar geçerli) ----------
function _dAktifKayitlar(gun) {
  return _dKayitlariTopla().filter(function (k) {
    if (!k || k.kategori === "D-YOK" || !Array.isArray(k.hat) || k.hat.length < 2) return false;
    if (k.f == null) return false;
    var f = gunIdx(k.f);
    if (gun < f) return false;
    if (k.t == null) return true;
    return gun < gunIdx(k.t);
  });
}

// ---- POPUP METNİ (dayanak[] → kısa gösterim) ---------------------------
function _dDayanakSatirlari(kayit) {
  var d = kayit.dayanak;
  if (!Array.isArray(d) || !d.length) return "";
  var GOSTER = 2;
  var satirlar = d.slice(0, GOSTER).map(function (c) {
    var baslik = c.ad || c.kaynak || "";
    var tarih = c.tarih ? " (" + c.tarih + ")" : "";
    var alinti = c.alinti ? ": “" + c.alinti + "”" : "";
    return ekEsc(baslik + tarih) + (alinti ? ekEsc(alinti) : "");
  });
  if (d.length > GOSTER) satirlar.push("+" + (d.length - GOSTER) + " kaynak daha");
  return satirlar.join("<br>");
}
function _dPopupHtml(kayit) {
  var KATEGORI_ETIKET = { "D": "koordinatlı", "C": "belge kaba", "fiili": "fiilî statüko (vekil)" };
  var ust = "<b>" + ekEsc(kayit.id || "D sınırı") + "</b>";
  var alt = [];
  alt.push(KATEGORI_ETIKET[kayit.kategori] || kayit.kategori || "");
  if (kayit.uzunluk_km != null) alt.push(kayit.uzunluk_km + " km");
  if (kayit.kesinlik_km != null) alt.push("kesinlik ±" + kayit.kesinlik_km + " km");
  var dayanakHtml = _dDayanakSatirlari(kayit);
  return ust + "<br><small>" + alt.filter(Boolean).join(" · ") + "</small>" +
    (dayanakHtml ? "<br><small>" + dayanakHtml + "</small>" : "");
}

// ---- GEOMETRİ / GÜNCELLEME ----------------------------------------------
var _dAktifId = null;
function _dSinirGuncelle(gun) {
  if (!_dHazirMi() || !harita.getSource("d-sinir-hat")) return;
  var aktif = _dAktifKayitlar(gun);
  var idImza = aktif.map(function (k) { return k.id; }).join("+") || null;
  if (idImza === _dAktifId) return;
  _dAktifId = idImza;
  var feat = aktif.map(function (k) {
    return {
      type: "Feature",
      properties: { kayit_id: k.id, kategori: k.kategori || "D" },
      geometry: { type: "LineString", coordinates: k.hat }
    };
  });
  harita.getSource("d-sinir-hat").setData({ type: "FeatureCollection", features: feat });
}

// ---- KATMAN KURULUMU (şemadan bağımsız, kalıcı) -------------------------
function _dKatmaniKur() {
  if (!_dHazirMi() || harita.getSource("d-sinir-hat")) return;   // iki kez kurma
  try {
    harita.addSource("d-sinir-hat", { type: "geojson", data: bosVeri() });
    // Üç katman, TEK kaynak — kategoriye göre filtre + farklı çizgi biçimi
    // (line-dasharray MapLibre'de veri-güdümlü ifade almıyor, o yüzden
    // kategori başına AYRI layer; C katmanının çoklu-layer/tek-kaynak
    // deseniyle aynı yaklaşım).
    harita.addLayer({
      id: "d-sinir-hat-d", type: "line", source: "d-sinir-hat",
      filter: ["==", ["get", "kategori"], "D"],
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": D_HAT_RENK, "line-width": 3, "line-opacity": 1 }
    });
    harita.addLayer({
      id: "d-sinir-hat-c", type: "line", source: "d-sinir-hat",
      filter: ["==", ["get", "kategori"], "C"],
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": D_HAT_RENK, "line-width": 2.5, "line-opacity": 1, "line-dasharray": [3, 1.5] }
    });
    harita.addLayer({
      id: "d-sinir-hat-fiili", type: "line", source: "d-sinir-hat",
      filter: ["==", ["get", "kategori"], "fiili"],
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": D_HAT_RENK, "line-width": 2.5, "line-opacity": 0.7, "line-dasharray": [1, 2] }
    });
    var LAYERS = ["d-sinir-hat-d", "d-sinir-hat-c", "d-sinir-hat-fiili"];
    LAYERS.forEach(function (lyr) {
      harita.on("click", lyr, function (e) {
        var kayit = _dKayitIndeksi()[e.features[0].properties.kayit_id];
        if (!kayit) return;
        new maplibregl.Popup({ closeButton: true, maxWidth: "280px" })
          .setLngLat(e.lngLat)
          .setHTML(_dPopupHtml(kayit))
          .addTo(harita);
      });
      harita.on("mouseenter", lyr, function () { harita.getCanvas().style.cursor = "pointer"; });
      harita.on("mouseleave", lyr, function () { harita.getCanvas().style.cursor = ""; });
    });
  } catch (e) {
    console.error("D KATMANI kurulamadı:", e);
  }
}

// Kendi "load" dinleyicisi — app.js'in load işleyicisinden bağımsız.
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _dKatmaniKur);
}

// guncelle() SARMALAMA — app.js'e dokunmadan canlı güncelleme.
// `guncelle` app.js'te üst seviyede tanımlı gerçek bir global (IIFE'siz
// dosya) — bu dosya app.js'TEN SONRA yüklenmek ZORUNDADIR.
(function () {
  if (typeof window.guncelle !== "function") {
    console.warn("D KATMANI: window.guncelle bulunamadı — canlı güncelleme BAĞLANAMADI (script sırası app.js'ten önce mi?).");
    return;
  }
  var _dEskiGuncelle = window.guncelle;
  window.guncelle = function () {
    var r = _dEskiGuncelle.apply(this, arguments);
    if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
      _dSinirGuncelle(suanki);
    }
    return r;
  };
})();

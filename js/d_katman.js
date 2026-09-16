// ============================================================================
// D KATMANI — 1923 sınırlarının KOORDİNATLA belirlenmiş kesin hattı.
// GORUNUM-ABCD-0916.md §D: "Her köyün, tepenin, akarsuyun hangi tarafta
// kaldığının koordinatla belirlendiği ayrıntılı sınır." Öncelik D > C > (A/B).
//
// Şema kaynağı: oturumlar/D-1923-0916.md madde 1 — "data/hukuki_sinirlar.js
// (C) şemasından türet". Bu dosya YAZILDIĞINDA D1-TURKIYE oturumu henüz
// denetim/SEMA-D-0916.md'yi TAHTAYA İLAN ETMEMİŞTİ (bkz. tahta M-4062,
// D-KATMAN → 1.MURAT). Aşağıdaki alan adları (`taraflar` · `f`/`t` ·
// `hat.nokta_dizisi` · `dayanak` · `kesinlik`) şartnamenin KENDİ metninden
// ve C şemasından ("türet" cümlesi) çıkarılmıştır — TEYİT EDİLMEDİ.
// 🔴 SEMA-D-0916.md ilan edilince: yalnız `_dKayitGeometrisi` ve
// `_dDayanakMetni` güncellenir, katman kurulumu (kaynak/layer/tıklama)
// şemadan BAĞIMSIZDIR ve DEĞİŞMEZ.
//
// D_SINIRLAR AİLESİ — oturumlar/D-1923-0916.md 'DÜNYA KADROSU' tablosu:
//   window.D_SINIRLAR              (D1-TURKIYE)
//   window.D_SINIRLAR_KOMSU        (D2-KOMSU)
//   window.D_SINIRLAR_AVRUPA_BATI  (D3-AVRUPA-BATI)
//   window.D_SINIRLAR_AVRUPA_ORTA  (D3-AVRUPA-ORTA)
//   window.D_SINIRLAR_ORTADOGU     (D4-ORTADOGU)
//   window.D_SINIRLAR_AFRIKA       (D4-AFRIKA)
//   window.D_SINIRLAR_ASYA         (D5-ASYA)
//   window.D_SINIRLAR_AMERIKA      (D5-AMERIKA)
//   window.D_SINIRLAR_OKYANUSYA    (D5-OKYANUSYA)
// Hiçbiri henüz yazılmadı; hepsi `Array.isArray` ile güvenli kontrol edilir,
// yoksa sessizce atlanır (D175 — ayrı dosya ayrı ad alanı, ama okuyan taraf
// eksik dosyaya karşı KIRILMAZ).
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// Bu yüzden iki entegrasyon noktası KENDİ İÇİNDE çözülüyor:
//   ① katman kurulumu — kendi `harita.on("load", ...)` dinleyicisi (app.js'in
//      "load" işleyicisinden TAMAMEN bağımsız, MapLibre birden fazla "load"
//      dinleyicisini destekler — js/app.js:7533 zaten ikinci bir örnek).
//   ② her gün değişiminde güncelleme — app.js'in global `guncelle()`
//      fonksiyonu SARILIR (monkey-patch): çağrıldıktan SONRA `_dSinirGuncelle`
//      de çalışır. app.js'e satır eklemeden canlı güncelleme sağlar.
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA (D_HAZIR global'leri ve `guncelle`/`harita`'nın var olması için).
// Tahtadan UI'ya istendi (bkz. denetim/D-KATMAN-0916.md).
// ============================================================================
"use strict";

// C'den (kesik siyah çizgi, #1a1a1a, dasharray 2/1.3, js/app.js:5847-6230)
// AYIRT EDİLEBİLİR: D düz (kesiksiz), daha kalın, koyu lacivert — "bu C'den
// daha kesin/ayrıntılı" izlenimini vermek için. D > C önceliği: D burada
// yalnız GÖRSEL üstünlük veriyor, C'nin altındaki dolguyu değiştirmiyor
// (aynı görüntü mantığı C'de de var — CLAUDE.md §3.5.1 ilkesiyle uyumlu:
// motor kenarı değişmiyor, yalnız üstüne çiziliyor).
var D_HAT_RENK = "#0a2f5c";
var D_HAT_GENISLIK = 3;

function _dHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}

// ---- VERİ TOPLAMA -----------------------------------------------------
var _D_AILELER = [
  "D_SINIRLAR", "D_SINIRLAR_KOMSU", "D_SINIRLAR_AVRUPA_BATI",
  "D_SINIRLAR_AVRUPA_ORTA", "D_SINIRLAR_ORTADOGU", "D_SINIRLAR_AFRIKA",
  "D_SINIRLAR_ASYA", "D_SINIRLAR_AMERIKA", "D_SINIRLAR_OKYANUSYA"
];
function _dKayitlariTopla() {
  var out = [];
  _D_AILELER.forEach(function (ad) {
    var dizi = window[ad];
    if (Array.isArray(dizi)) out = out.concat(dizi);
  });
  return out;
}

// Koordinat dizisi alan adı TEYİT EDİLMEDİ — C'nin `hat.nokta_dizisi`sini
// varsayıyoruz, iki muhtemel alternatifle (üst seviye `nokta_dizisi` ya da
// `koordinatlar`) geriye dönük deniyoruz. Şema ilan edilince BURASI tek
// satıra inecek.
function _dNoktaDizisi(kayit) {
  var nd = (kayit.hat && kayit.hat.nokta_dizisi) || kayit.nokta_dizisi || kayit.koordinatlar;
  if (!Array.isArray(nd) || nd.length < 2) return null;
  return nd.map(function (p) {
    if (Array.isArray(p)) return [p[0], p[1]];      // [lon, lat]
    return [p.lon, p.lat];                            // {lon, lat}
  });
}
function _dDayanakMetni(kayit) {
  var d = kayit.dayanak;
  if (typeof d === "string") return d;
  if (d && (d.alinti || d.ad)) return d.alinti || d.ad;
  // C uyumluluğu — bazı D kayıtları geçiş döneminde C alan adını taşıyabilir.
  if (kayit.kaynak && (kayit.kaynak.alinti || kayit.kaynak.ad)) {
    return kayit.kaynak.alinti || kayit.kaynak.ad;
  }
  return "";
}

// ---- GEOMETRİ / GÜNCELLEME --------------------------------------------
function _dAktifKayitlar(gun) {
  return _dKayitlariTopla().filter(function (k) {
    if (!k || k.f == null) return false;
    var f = gunIdx(k.f);
    if (gun < f) return false;
    if (k.t == null) return true;                    // açık uç — D061/D195: BİTİŞE kadar
    return gun < gunIdx(k.t);
  });
}
function _dSinirGuncelle(gun) {
  if (!_dHazirMi() || !harita.getSource("d-sinir-hat")) return;
  var aktif = _dAktifKayitlar(gun);
  var id = aktif.map(function (k) { return k.id; }).join("+") || null;
  if (id === _dAktifId) return;
  _dAktifId = id;
  var hatFeat = [];
  aktif.forEach(function (k) {
    var nd = _dNoktaDizisi(k);
    if (!nd) {
      console.warn("D KATMANI: '" + (k.id || "?") + "' kaydında okunabilir koordinat dizisi yok — çizilmiyor.");
      return;
    }
    hatFeat.push({
      type: "Feature",
      properties: {
        kayit_id: k.id || "",
        dayanak: _dDayanakMetni(k),
        kesinlik: k.kesinlik != null ? String(k.kesinlik) : ""
      },
      geometry: { type: "LineString", coordinates: nd }
    });
  });
  harita.getSource("d-sinir-hat").setData({ type: "FeatureCollection", features: hatFeat });
}
var _dAktifId = null;

// ---- KATMAN KURULUMU (şemadan bağımsız, kalıcı) ------------------------
function _dKatmaniKur() {
  if (!_dHazirMi() || harita.getSource("d-sinir-hat")) return;   // iki kez kurma
  try {
    harita.addSource("d-sinir-hat", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "d-sinir-hat", type: "line", source: "d-sinir-hat",
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": D_HAT_RENK, "line-width": D_HAT_GENISLIK }
    });
    function _dPopupAc(p, lngLat) {
      var baslik = "<b>" + ekEsc(p.kayit_id || "D sınırı") + "</b>";
      var alt = [];
      if (p.dayanak) alt.push(ekEsc(p.dayanak));
      if (p.kesinlik) alt.push("kesinlik: " + ekEsc(p.kesinlik) + " km");
      new maplibregl.Popup({ closeButton: true, maxWidth: "260px" })
        .setLngLat(lngLat)
        .setHTML(baslik + (alt.length ? "<br><small>" + alt.join(" · ") + "</small>" : ""))
        .addTo(harita);
    }
    harita.on("click", "d-sinir-hat", function (e) {
      _dPopupAc(e.features[0].properties, e.lngLat);
    });
    harita.on("mouseenter", "d-sinir-hat", function () { harita.getCanvas().style.cursor = "pointer"; });
    harita.on("mouseleave", "d-sinir-hat", function () { harita.getCanvas().style.cursor = ""; });
  } catch (e) {
    console.error("D KATMANI kurulamadı:", e);
  }
}

// Kendi "load" dinleyicisi — app.js'in kendi load işleyicisinden bağımsız,
// app.js'e dokunmadan çalışır (bkz. dosya başı yorum ①).
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _dKatmaniKur);
}

// guncelle() SARMALAMA — app.js'e dokunmadan canlı güncelleme (bkz. ②).
// `guncelle` app.js'te üst seviyede `function guncelle() {...}` olarak
// tanımlı (gerçek global, IIFE'siz dosya) — bu satırlar app.js'TEN SONRA
// yüklenmek ZORUNDADIR.
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

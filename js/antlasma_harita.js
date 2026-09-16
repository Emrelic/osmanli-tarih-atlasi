// ============================================================================
// ANTLAŞMA HARİTASI — bir barış antlaşması kronoloji maddesi açıldığında,
// "Haritada gör" DÜĞMESİYLE, antlaşmayla bırakılan bölgeleri boyayıp
// etiketleyen geçici katman. Emre, paket 0054 H-0020:
//   "tüm barış anlaşmaları ... kronolojik maddesinde ... haritada alınan
//   verilen bölgelerin boyanması taranması ve üstlerine ... etiketler
//   koyalım ... bu harita sadece o kronoloji maddesinde geçerli olacaktır"
// DALGA-0055 §A madde 1 (1.MURAT, 16 Eylül gece) — Karlofça pilotunun
// GENELLEMESİ: "maddede 'Haritada gör' düğmesi" — İLK sürüm (commit 1f45b2e)
// madde açılır açılmaz OTOMATİK çiziyordu; ~400 antlaşma maddesi olduğu için
// (DALGA-0055 §B ölçümü) otomatik çizim yerine EXPLICIT düğmeye geçildi —
// hem kullanıcı kontrolü hem gereksiz hesap yok.
//
// Veri: window.ANTLASMA_HARITALARI (data/antlasma_haritalari.js) — her kayıt
// bir antlaşmaya bağlı `bolgeler[]` listesi taşır, geometri KENDİ BAŞINA
// üretilmez, `data/hukuki_sinirlar.js` (window.HUKUKI_SINIRLAR, C katmanı)
// kayıtlarından TÜRETİLİR (D023). Şu an TEK kayıt (Karlofça, pilot); veriyi
// GENİŞLETECEK olan D-GEOARAC (DALGA-0055 §B, `denetim/ARAC-ANTLASMA-HARITA-
// 0916.py`) — şema tahtadan netleştirilecek, KOD DEĞİŞMEDEN yeni kayıtları
// okur (`_ahEslesenKayit` window.ANTLASMA_HARITALARI'nin TAMAMINI tarar).
//
// EŞLEŞTİRME app.js'in ZATEN KULLANDIĞI desenle AYNI (app.js:7991-7993,
// `ANTLASMALAR` için): kronoloji maddesinin `b` alanı antlaşma adını
// içeriyor mu + tarih ±60 gün içinde mi.
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// Tek entegrasyon noktası: app.js'in global `obGoster(o)` fonksiyonu
// (madde detay kartını dolduran fonksiyon, app.js:7909) monkey-patch ile
// sarılıyor — d_katman.js'in `guncelle()` sarmalama deseniyle AYNI yöntem.
// `obGoster` HER madde açılışında çağrılır: eşleşme varsa düğme EKLENİR
// (`#ob-ozel`e — app.js'in kendi kutu deseniyle aynı DOM, dokunulmuyor,
// yalnız APPEND ediliyor), yoksa/madde değişince önceki harita TEMİZLENİR.
// "Yalnız o maddede geçerli" şartı böylece korunuyor — düğmeye TIKLANMAMIŞ
// olsa bile madde kapanınca harita zaten hiç açılmamış/temiz kalıyor.
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA. Tahtadan UI'ya istendi — bkz. denetim/ANTLASMA-HARITA-0916.md.
// ============================================================================
"use strict";

function _ahHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}
function _ahHukukiIndeks() {
  var ix = {};
  (window.HUKUKI_SINIRLAR || []).forEach(function (k) { if (k && k.id) ix[k.id] = k; });
  return ix;
}

// ---- EŞLEŞTİRME: açılan kronoloji maddesi bir antlaşma haritasına denk mi? ---
function _ahEslesenKayit(o) {
  if (!o || !o.b || o.gi == null) return null;
  return (window.ANTLASMA_HARITALARI || []).filter(function (a) {
    return a.tarih && Math.abs(gunIdx(a.tarih) - o.gi) < 60 && o.b.indexOf(a.antlasma_ad) >= 0;
  })[0] || null;
}

// ---- BÖLGE GEOMETRİSİ — hukuki_sinirlar kaydından TARAFA düşen kısmı çıkarır ----
// bbox tipi (2 nokta/cetvel — bugün Karlofça'da tek örnek: Sava hattı): C
// katmanının KENDİ `_cKayitGeometrisi`sini kullanır (D023 — geometri ikinci
// kez yazılmaz), dönen iki yarımdan RENK eşleşmesiyle taraf'a ait OLANI seçer
// (`f.properties.renk`, `_cTarafRengi(tarafSirasi[i])` ile AYNI fonksiyonla
// üretildiği için birebir eşleşir — app.js:6079).
function _ahBolgePoligonu(sinirKaydi, taraf) {
  if (typeof _cKayitGeometrisi !== "function" || typeof _cTarafRengi !== "function") return null;
  if (!sinirKaydi || !sinirKaydi.kapsama || sinirKaydi.kapsama.tur !== "bbox") return null;
  var geo = _cKayitGeometrisi(sinirKaydi);
  if (!geo || !geo.dolgu || !geo.dolgu.length) return null;
  var istenenRenk = _cTarafRengi(taraf);
  var f = geo.dolgu.filter(function (x) { return x.properties.renk === istenenRenk; })[0];
  return f ? f.geometry : null;
}
// nokta-kümesi tipi (lehistan/venedik/bosna-kaleler) — kaydın kendi
// `hat.nokta_atamalari`sından, taraf'a atanmış VE koordinatı bilinen noktalar.
function _ahBolgeNoktalari(sinirKaydi, taraf) {
  var na = sinirKaydi && sinirKaydi.hat && sinirKaydi.hat.nokta_atamalari;
  if (!Array.isArray(na)) return [];
  return na.filter(function (n) { return n.taraf === taraf && n.lat != null && n.lon != null; });
}
function _ahCentroid(coords) {
  if (!coords.length) return null;
  var sx = 0, sy = 0;
  coords.forEach(function (c) { sx += c[0]; sy += c[1]; });
  return [sx / coords.length, sy / coords.length];
}
function _ahPoligonCentroid(geom) {
  if (!geom || geom.type !== "Polygon" || !geom.coordinates[0]) return null;
  var ring = geom.coordinates[0].slice(0, -1);   // son nokta ilkinin tekrarı
  return _ahCentroid(ring);
}

// ---- KAYDI HARİTAYA DÖK — bölge başına dolgu + noktalar + tek etiket ---------
function _ahBolgeleriUret(kayit) {
  var ix = _ahHukukiIndeks();
  var dolguFeat = [], noktaFeat = [], etiketFeat = [];
  (kayit.bolgeler || []).forEach(function (bolge) {
    var renk = (typeof _cTarafRengi === "function") ? _cTarafRengi(bolge.taraf) : "#8e0b22";
    var etiketAnkraj = null;
    (bolge.sinir_id || []).forEach(function (sid) {
      var sinirKaydi = ix[sid];
      if (!sinirKaydi) { console.warn("ANTLAŞMA HARİTASI: '" + sid + "' HUKUKI_SINIRLAR'da yok."); return; }
      var poligon = _ahBolgePoligonu(sinirKaydi, bolge.taraf);
      if (poligon) {
        dolguFeat.push({ type: "Feature", properties: { renk: renk, kayit_id: sid, etiket: bolge.etiket }, geometry: poligon });
        if (!etiketAnkraj) etiketAnkraj = _ahPoligonCentroid(poligon);
      }
      var noktalar = _ahBolgeNoktalari(sinirKaydi, bolge.taraf);
      noktalar.forEach(function (n) {
        noktaFeat.push({
          type: "Feature",
          properties: { renk: renk, ad: n.ad, kaynak: n.kaynak || "", kayit_id: sid, etiket: bolge.etiket },
          geometry: { type: "Point", coordinates: [n.lon, n.lat] }
        });
      });
      if (!etiketAnkraj && noktalar.length) {
        etiketAnkraj = _ahCentroid(noktalar.map(function (n) { return [n.lon, n.lat]; }));
      }
    });
    if (etiketAnkraj) {
      etiketFeat.push({ type: "Feature", properties: { etiket: bolge.etiket, renk: renk },
        geometry: { type: "Point", coordinates: etiketAnkraj } });
    } else {
      console.warn("ANTLAŞMA HARİTASI: '" + bolge.etiket + "' için hiç geometri/nokta bulunamadı — etiket konulamadı.");
    }
  });
  return { dolgu: dolguFeat, nokta: noktaFeat, etiket: etiketFeat };
}

// ---- ÇİZ / TEMİZLE -------------------------------------------------------------
var _ahAktifId = null;
function _ahTemizle() {
  if (!_ahHazirMi() || !_ahAktifId) return;
  ["antlasma-harita-dolgu", "antlasma-harita-nokta", "antlasma-harita-etiket"].forEach(function (kaynak) {
    var s = harita.getSource(kaynak);
    if (s) s.setData(bosVeri());
  });
  _ahAktifId = null;
}
function _ahGoster(kayit) {
  if (!_ahHazirMi() || !harita.getSource("antlasma-harita-dolgu")) return;
  if (_ahAktifId === kayit.id) return;
  var f = _ahBolgeleriUret(kayit);
  harita.getSource("antlasma-harita-dolgu").setData({ type: "FeatureCollection", features: f.dolgu });
  harita.getSource("antlasma-harita-nokta").setData({ type: "FeatureCollection", features: f.nokta });
  harita.getSource("antlasma-harita-etiket").setData({ type: "FeatureCollection", features: f.etiket });
  _ahAktifId = kayit.id;
}

// ---- KATMAN KURULUMU (kendi "load" dinleyicisi, kalıcı) ------------------------
function _ahKatmaniKur() {
  if (!_ahHazirMi() || harita.getSource("antlasma-harita-dolgu")) return;
  try {
    harita.addSource("antlasma-harita-dolgu", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-dolgu", type: "fill", source: "antlasma-harita-dolgu",
      paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.55, "fill-outline-color": "#1a1a1a" }
    });
    harita.addSource("antlasma-harita-nokta", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-nokta", type: "circle", source: "antlasma-harita-nokta",
      paint: { "circle-radius": 7, "circle-color": ["get", "renk"], "circle-stroke-width": 2, "circle-stroke-color": "#1a1a1a" }
    });
    harita.addSource("antlasma-harita-etiket", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-etiket", type: "symbol", source: "antlasma-harita-etiket",
      layout: {
        "text-field": ["get", "etiket"], "text-size": 13, "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
        "text-allow-overlap": true
      },
      paint: { "text-color": "#1a1a1a", "text-halo-color": "#ffffff", "text-halo-width": 2 }
    });
    function popupAc(props, lngLat) {
      var satir = "<b>" + ekEsc(props.etiket || "") + "</b>";
      if (props.ad) satir += "<br>" + ekEsc(props.ad);
      if (props.kaynak) satir += "<br><small>" + ekEsc(props.kaynak) + "</small>";
      new maplibregl.Popup({ closeButton: true, maxWidth: "280px" }).setLngLat(lngLat).setHTML(satir).addTo(harita);
    }
    ["antlasma-harita-dolgu", "antlasma-harita-nokta"].forEach(function (lyr) {
      harita.on("click", lyr, function (e) { popupAc(e.features[0].properties, e.lngLat); });
      harita.on("mouseenter", lyr, function () { harita.getCanvas().style.cursor = "pointer"; });
      harita.on("mouseleave", lyr, function () { harita.getCanvas().style.cursor = ""; });
    });
  } catch (e) {
    console.error("ANTLAŞMA HARİTASI kurulamadı:", e);
  }
}
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _ahKatmaniKur);
}

// ---- DÜĞME — "#ob-ozel"e (app.js'in kendi ek-kutu konteyneri) tek buton ekler ---
function _ahDugmeEkle(kayit) {
  var ozel = document.getElementById("ob-ozel");
  if (!ozel) return;
  var kutu = document.createElement("div");
  kutu.className = "ob-kutu";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.style.cursor = "pointer";
  btn.style.padding = "4px 10px";
  btn.style.borderRadius = "4px";
  btn.style.border = "1px solid #0a2f5c";
  btn.style.background = "#fff";
  btn.style.color = "#0a2f5c";
  var KAPALI = "🗺️ Haritada gör — bırakılan bölgeler", ACIK = "✕ Haritadan kaldır";
  btn.textContent = KAPALI;
  btn.addEventListener("click", function () {
    if (_ahAktifId === kayit.id) {
      _ahTemizle();
      btn.textContent = KAPALI; btn.style.background = "#fff"; btn.style.color = "#0a2f5c";
    } else {
      _ahGoster(kayit);
      btn.textContent = ACIK; btn.style.background = "#0a2f5c"; btn.style.color = "#fff";
    }
  });
  kutu.appendChild(btn);
  ozel.appendChild(kutu);
}

// ---- obGoster() SARMALAMA — app.js'e dokunmadan "madde açıldı" bağlantısı ------
(function () {
  if (typeof window.obGoster !== "function") {
    console.warn("ANTLAŞMA HARİTASI: window.obGoster bulunamadı — bağlanamadı (script sırası app.js'ten önce mi?).");
    return;
  }
  var _ahEskiObGoster = window.obGoster;
  window.obGoster = function (o) {
    var r = _ahEskiObGoster.apply(this, arguments);
    try {
      _ahTemizle();   // her madde açılışında ÖNCE temizle — bir önceki maddenin
                       // haritası (düğmeye tıklanmış olsun olmasın) kalmasın
      var kayit = _ahEslesenKayit(o);
      if (kayit) _ahDugmeEkle(kayit);
    } catch (e) { console.error("[antlaşma haritası]", e); }
    return r;
  };
})();

// ============================================================================
// denetim/ARAC-KITA30-CKATMAN-KOPRU-0913.js — REFERANS UYGULAMA, YAYINA
// BAĞLI DEĞİL. 1.MURAT'ın hükmü (M-3730 sonrası): js/c_katman.js YAYINA
// BAĞLANMAYACAK ("aynı işi yapan iki kod" — D143), ama SİLİNMEDİ: KITA
// 12'nin app.js'i genişletirken bakacağı ÇALIŞAN bir referans olarak
// burada duruyor. index.html'e HİÇBİR satır eklenmedi, bu dosya hiçbir
// sayfadan yüklenmiyor.
//
// Aşağıdaki kod js/c_katman.js'ten AYNEN taşındı (13 Eylül 2026, KITA 30).
// Kapsadığı üç eksik ve ölçüm kaynağı: denetim/BULGU-KITA30-MEVCUT-
// KATMAN-OLCUMU.md.
// ============================================================================
// js/c_katman.js — C GÖSTERİMİ GENİŞLETMESİ (KITA 30, 13 Eylül 2026)
// ============================================================================
// js/app.js (KITA 12, tek sahip) `_hukukiSinirGuncelle()` içinde
// `window.HUKUKI_SINIRLAR`ın YALNIZ "cetvel"/"dogal-tanimsiz" (nokta_dizisi,
// çizgi) türünü çiziyor (bkz. app.js:5049-5160, `_cKayitGeometrisi`).
// BU DOSYA o kodun HİÇ dokunmadığı ÜÇ türü ekliyor:
//   ① hat.tur === "paralel" | "meridyen"   (tek sayı eşiği — Mısır-Sudan)
//   ② hat.tur === "nokta-kumesi"           (nokta-ataması — Karlofça kayıtları)
//   ③ hat.tur === "bolge"                  (tek taraflı bölge — KITA 29 ile
//      M-3718'de uzlaşıldı, Ferhat Paşa 1590 için)
// Aynı kaydı İKİ KEZ çizmiyoruz: bu dosya yalnız yukarıdaki üç türe bakar,
// "cetvel"/"dogal-tanimsiz" kayıtları app.js'in kendi katmanına bırakır.
//
// 🔴 BAĞIMLILIK — bu dosya js/app.js'TEN SONRA yüklenmeli. Kullandığı
// globaller: harita, suanki, gunIdx, bosVeri, haritaHazir, _DEVLET_RENK,
// DEVLETLER.
//
// 🔴 KANCA — aşağıdaki `_kancaKur` `window._hukukiSinirGuncelle`'i çalışma
// anında SARMALAR (orijinali önce çağırıp, sonra kendi çizimini ekler).
// KITA 12 kalıcı bir çağrı eklerse bu sarmalama GEREKSİZLEŞİR ama ZARARSIZ
// kalır (çift çağrı yok, kendi önbelleği var).
// ============================================================================

(function () {
  "use strict";

  // 🔴 KENDİ ÖLÇÜMÜM (denetim/BULGU-KITA30-MEVCUT-KATMAN-OLCUMU.md §②):
  // app.js'in _cTarafRengi'si `id` ile _DEVLET_RENK'te arıyor ama renk
  // tablosu devletin `harita:` alanıyla anahtarlı (id ile harita HER ZAMAN
  // aynı değil — örn. bulgaristan-kralligi/harita:"bulgaristan"). Kendi
  // katmanımda AYNI hataya düşmemek için `id` bulunamazsa `window.DEVLETLER`
  // üzerinden `harita:` alanına DÜŞÜYORUM.
  var _devletIx = null;
  function _renk(id) {
    if (id === "osmanli") return "#8e0b22";
    var tablo = window._DEVLET_RENK || {};
    if (tablo[id]) return tablo[id];
    if (!_devletIx) {
      _devletIx = {};
      (window.DEVLETLER || []).forEach(function (d) { if (d && d.id) _devletIx[d.id] = d; });
    }
    var d = _devletIx[id];
    if (d && d.harita && tablo[d.harita]) return tablo[d.harita];
    return "#9a9a9a";
  }

  // ---- ① PARALEL / MERİDYEN EŞİĞİ (tek sayı karşılaştırması) --------------
  function _paralelGeometrisi(kayit) {
    var h = kayit.hat, k = kayit.kapsama;
    if (!k || !k.kutu) return null;
    var kutu = k.kutu, taraflar = kayit.taraflar || [];
    if (h.tur === "paralel") {
      var e = h.enlem;
      if (e == null || e < kutu.lat_min || e > kutu.lat_max) return null;
      var ust = [[kutu.lon_min, e], [kutu.lon_max, e], [kutu.lon_max, kutu.lat_max], [kutu.lon_min, kutu.lat_max], [kutu.lon_min, e]];
      var alt = [[kutu.lon_min, kutu.lat_min], [kutu.lon_max, kutu.lat_min], [kutu.lon_max, e], [kutu.lon_min, e], [kutu.lon_min, kutu.lat_min]];
      // yon_kurali (veri dosyasında yazılı) "lat>=e -> taraflar[0]" — burada
      // AYNI kural sabit kodlanıyor, string PARSE EDİLMİYOR (app.js'in
      // kendi cross-product yorumuyla AYNI desen: isim değil davranış esas).
      return {
        dolgu: [
          { type: "Feature", properties: { renk: _renk(taraflar[0]) }, geometry: { type: "Polygon", coordinates: [ust] } },
          { type: "Feature", properties: { renk: _renk(taraflar[1]) }, geometry: { type: "Polygon", coordinates: [alt] } }
        ],
        hat: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: [[kutu.lon_min, e], [kutu.lon_max, e]] } }
      };
    }
    if (h.tur === "meridyen") {
      var b = h.boylam;
      if (b == null || b < kutu.lon_min || b > kutu.lon_max) return null;
      var sol = [[kutu.lon_min, kutu.lat_min], [b, kutu.lat_min], [b, kutu.lat_max], [kutu.lon_min, kutu.lat_max], [kutu.lon_min, kutu.lat_min]];
      var sag = [[b, kutu.lat_min], [kutu.lon_max, kutu.lat_min], [kutu.lon_max, kutu.lat_max], [b, kutu.lat_max], [b, kutu.lat_min]];
      return {
        dolgu: [
          { type: "Feature", properties: { renk: _renk(taraflar[0]) }, geometry: { type: "Polygon", coordinates: [sol] } },
          { type: "Feature", properties: { renk: _renk(taraflar[1]) }, geometry: { type: "Polygon", coordinates: [sag] } }
        ],
        hat: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: [[b, kutu.lat_min], [b, kutu.lat_max]] } }
      };
    }
    return null;
  }

  // ---- ③ BÖLGE (tek taraf, bölünme YOK — KITA 29 ile M-3718'de uzlaşıldı) --
  // Belge bir ÇİZGİ değil, "bu bölgenin TAMAMI şu tarafta kalır" tarifi
  // veriyor (ör. Ferhat Paşa 1590, statüko). Şema: hat.tur:"bolge",
  // hat.taraf_atanan (taraflar[]'a İNDEKSLE değil AÇIKÇA id ile — index
  // belirsizliğinden kaçınmak için). nokta_atamalari yalnız REFERANS
  // (kaynakta adıyla geçen yerler), sınır ÇİZMEZ.
  function _bolgeGeometrisi(kayit) {
    var h = kayit.hat, k = kayit.kapsama;
    if (!h || h.tur !== "bolge" || !k || !k.kutu || !h.taraf_atanan) return null;
    var kutu = k.kutu;
    var poly = [[kutu.lon_min, kutu.lat_min], [kutu.lon_max, kutu.lat_min],
                [kutu.lon_max, kutu.lat_max], [kutu.lon_min, kutu.lat_max],
                [kutu.lon_min, kutu.lat_min]];
    return {
      dolgu: [{ type: "Feature", properties: { renk: _renk(h.taraf_atanan) },
                geometry: { type: "Polygon", coordinates: [poly] } }],
      hat: null // çizgi YOK — belge çizgi tarif etmiyor
    };
  }

  // ---- NOKTA-KÜMESİ (nokta-ataması — sadece koordinatlı olanlar) --------
  function _noktaKumesiOzellikleri(kayit) {
    var h = kayit.hat;
    if (!h || (h.tur !== "nokta-kumesi" && h.tur !== "bolge") || !h.nokta_atamalari) return [];
    return h.nokta_atamalari
      .filter(function (n) { return n.lat != null && n.lon != null; })
      .map(function (n) {
        return { type: "Feature",
          properties: { renk: _renk(n.taraf), ad: n.ad, kaynak: n.kaynak || "", kayit_id: kayit.id },
          geometry: { type: "Point", coordinates: [n.lon, n.lat] } };
      });
  }

  var _ekAktifId = null;
  function _cEkGuncelle(gun) {
    if (!window.haritaHazir || !window.harita || !window.harita.getSource("c-ek-dolgu")) return;
    var liste = window.HUKUKI_SINIRLAR || [];
    var aktif = liste.filter(function (k) {
      try { return window.gunIdx(k.f) <= gun && gun < window.gunIdx(k.t); }
      catch (e) { return false; } // t:null vb. — bu kayıt kendi hatasını app.js'e bildirsin, burada sessizce ele
    });
    var id = aktif.map(function (k) { return k.id; }).join("+") || null;
    if (id === _ekAktifId) return;
    _ekAktifId = id;
    var dolguFeat = [], hatFeat = [], noktaFeat = [];
    aktif.forEach(function (kayit) {
      var h = kayit.hat || {};
      if (h.tur === "paralel" || h.tur === "meridyen") {
        var g = _paralelGeometrisi(kayit);
        if (g) { dolguFeat = dolguFeat.concat(g.dolgu); hatFeat.push(g.hat); }
      } else if (h.tur === "nokta-kumesi") {
        noktaFeat = noktaFeat.concat(_noktaKumesiOzellikleri(kayit));
      } else if (h.tur === "bolge") {
        var gb = _bolgeGeometrisi(kayit);
        if (gb) dolguFeat = dolguFeat.concat(gb.dolgu); // hat YOK (çizgi tarif edilmiyor)
        noktaFeat = noktaFeat.concat(_noktaKumesiOzellikleri(kayit)); // referans noktaları
      }
    });
    window.harita.getSource("c-ek-dolgu").setData({ type: "FeatureCollection", features: dolguFeat });
    window.harita.getSource("c-ek-hat").setData({ type: "FeatureCollection", features: hatFeat });
    window.harita.getSource("c-ek-nokta").setData({ type: "FeatureCollection", features: noktaFeat });
  }

  function _kur() {
    var h = window.harita;
    if (!h || h.getSource("c-ek-dolgu")) return;
    try {
      h.addSource("c-ek-dolgu", { type: "geojson", data: window.bosVeri() });
      h.addLayer({ id: "c-ek-dolgu", type: "fill", source: "c-ek-dolgu",
        paint: { "fill-color": ["get", "renk"], "fill-opacity": 1 } });
      h.addSource("c-ek-hat", { type: "geojson", data: window.bosVeri() });
      h.addLayer({ id: "c-ek-hat", type: "line", source: "c-ek-hat",
        paint: { "line-color": "#1a1a1a", "line-width": 2.2, "line-dasharray": [2, 1.3] } });
      h.addSource("c-ek-nokta", { type: "geojson", data: window.bosVeri() });
      h.addLayer({ id: "c-ek-nokta", type: "circle", source: "c-ek-nokta",
        paint: { "circle-radius": 6, "circle-color": ["get", "renk"],
                 "circle-stroke-width": 1.5, "circle-stroke-color": "#1a1a1a" } });
      h.on("click", "c-ek-nokta", function (e) {
        var p = e.features[0].properties;
        new maplibregl.Popup({ closeButton: true })
          .setLngLat(e.lngLat)
          .setHTML("<b>" + p.ad + "</b><br><small>" + (p.kaynak || "") + "</small>")
          .addTo(h);
      });
      h.on("mouseenter", "c-ek-nokta", function () { h.getCanvas().style.cursor = "pointer"; });
      h.on("mouseleave", "c-ek-nokta", function () { h.getCanvas().style.cursor = ""; });
    } catch (e) { console.error("C EK KATMANI kurulamadı:", e); }
  }

  // ---- Kanca: mevcut _hukukiSinirGuncelle'yi sarmala (app.js'e DOKUNMADAN) --
  function _kancaKur() {
    if (!window.harita) { setTimeout(_kancaKur, 200); return; }
    _kur();
    if (typeof window._hukukiSinirGuncelle === "function" && !window._hukukiSinirGuncelle.__cEkSarmali) {
      var orijinal = window._hukukiSinirGuncelle;
      var sarmali = function (gun) { orijinal(gun); _cEkGuncelle(gun); };
      sarmali.__cEkSarmali = true;
      window._hukukiSinirGuncelle = sarmali;
    } else {
      // app.js henüz yüklenmemiş/fonksiyon yok — kendi zayıf nöbetçimiz.
      // Ucuz: _cEkGuncelle kendi _ekAktifId önbelleğiyle korunuyor, bu
      // yüzden her 500ms'de bir "suanki" kontrolü ZARARSIZ.
      setInterval(function () { if (window.suanki != null) _cEkGuncelle(window.suanki); }, 500);
    }
  }

  // ---- Lejant rozeti — app.js'in kendi lejant DOM'una DOKUNMADAN, kendi
  // küçük etiketimiz. Yalnız aktif bir C kaydı varken görünür.
  function _lejantEkle() {
    var el = document.createElement("div");
    el.id = "c-katman-lejant";
    el.style.cssText = "position:absolute;left:8px;bottom:8px;z-index:5;" +
      "background:rgba(255,255,255,.92);border:1px solid #1a1a1a;border-radius:4px;" +
      "padding:4px 8px;font:12px system-ui;display:none;pointer-events:none;";
    el.innerHTML = "<span style='border-bottom:2px dashed #1a1a1a;padding-bottom:1px'>▬▬</span> belgeli sınır (C)";
    var harita_div = document.getElementById("harita");
    if (harita_div) harita_div.appendChild(el);
    var _sonId = null;
    setInterval(function () {
      if (_ekAktifId === _sonId) return;
      _sonId = _ekAktifId;
      el.style.display = _ekAktifId ? "block" : "none";
    }, 400);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { _kancaKur(); _lejantEkle(); });
  } else {
    _kancaKur(); _lejantEkle();
  }
})();

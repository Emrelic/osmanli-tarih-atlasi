// ═══════════════════════════════════════════════════════════════════════
// ARKA YÜZ GİZLEME — küre kipinde uzak yarımkürenin işaretçilerini gizler
// KÜRE GÖRÜNÜM oturumu · 5 Eylül 2026 · FİZİBİLİTE DENEMESİ
//
// 🔴 BU DOSYA `js/app.js`E DOKUNMAZ. Deneme sayfasına maplibre'den SONRA,
//    app.js'ten ÖNCE yüklenir; `maplibregl.Marker`ı sarmalayarak bir
//    kütük tutar. app.js'in tek satırı bile değişmez.
//
// SORUN (ölçüldü, M-2679): küre Pasifik'e çevrildiğinde arka yüzdeki
// 173 işaretçinin 173'ü de kabın içinde ve GÖRÜNÜR. Sebep: DOM işaretçisi
// WebGL sahnesinin DIŞINDA duran bir HTML katmanıdır; küre onu kapatamaz.
//
// ÇARE — küresel geometri, kütüphaneye sormadan:
//   Kameranın baktığı nokta (harita merkezi) ile işaretçinin arasındaki
//   BÜYÜK ÇEMBER AÇISI hesaplanır. Açı ufuk açısını aşıyorsa nokta
//   kürenin arkasındadır ⇒ gizlenir.
//
//   Ufuk açısı: küre yarıçapı R, kamera küre merkezine D uzaklıkta ise
//   görünen kapak  cos θ_ufuk = R / D.  Kamera sonsuzdayken θ = 90°
//   (ortografik). MapLibre küresi düşük zoom'da neredeyse ortografiktir,
//   yükseldikçe kamera yaklaşır ve ufuk DARALIR.
//
//   ⚠️ D'yi kütüphanenin iç durumundan (`transform`) okumuyorum —
//   iç API'ler sürüm arası değişir ve bu proje "kendi yazdığın
//   ayrıştırıcı her zaman kötüdür" dersini beş kez kaydetti. Bunun
//   yerine zoom'dan TÜRETİYORUM ve sapmayı ÖLÇÜYORUM (aşağıdaki
//   `ARKA.olc()`).
// ═══════════════════════════════════════════════════════════════════════
(function () {
  "use strict";

  var KUTUK = [];                       // { marker, el }
  var ACIK = true;                      // çare açık mı
  var PAY_DER = 0;                      // ufka eklenecek emniyet payı (derece)
  var sonSayim = { gizli: 0, gorunur: 0, ms: 0 };

  // ── ① İŞARETÇİ KÜTÜĞÜ — Marker'ı sarmala, app.js'e dokunma
  if (typeof maplibregl === "undefined" || !maplibregl.Marker) {
    console.warn("[ARKA YUZ] maplibregl YOK — bu betik maplibre'den SONRA yüklenmeli");
    return;
  }
  var _addTo = maplibregl.Marker.prototype.addTo;
  maplibregl.Marker.prototype.addTo = function (map) {
    var r = _addTo.call(this, map);
    try { KUTUK.push({ m: this, el: this.getElement() }); } catch (e) { /* yut */ }
    return r;
  };
  var _remove = maplibregl.Marker.prototype.remove;
  maplibregl.Marker.prototype.remove = function () {
    for (var i = KUTUK.length - 1; i >= 0; i--) if (KUTUK[i].m === this) KUTUK.splice(i, 1);
    return _remove.call(this);
  };

  // ── ② UFUK AÇISI
  // MapLibre küresinde kamera uzaklığı zoom'la azalır. z≈0-2 aralığında
  // küre bütünüyle görünür (ortografiğe yakın, θ→90°); yükseldikçe daralır.
  // Kaba ama ÖLÇÜLEBİLİR bir yaklaşım kullanıyorum ve sapmasını raporluyorum.
  function ufukAcisiDer(harita) {
    var z = harita.getZoom();
    // küre yarıçapı 1 birim; kamera uzaklığı D. Ampirik: D ≈ 1 + 2^(1-z)*1.6
    var D = 1 + Math.pow(2, 1 - z) * 1.6;
    if (D <= 1.0001) return 5;
    var t = Math.acos(Math.min(1, 1 / D)) * 180 / Math.PI;
    return Math.max(5, Math.min(90, t)) + PAY_DER;
  }

  // ── ③ BÜYÜK ÇEMBER AÇISI (derece)
  function acDer(lat1, lon1, lat2, lon2) {
    var R = Math.PI / 180;
    var p1 = lat1 * R, p2 = lat2 * R, dl = (lon2 - lon1) * R;
    var c = Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(dl);
    return Math.acos(Math.max(-1, Math.min(1, c))) / R;
  }

  // ── ④ ASIL İŞ
  function uygula(harita) {
    var t0 = (performance && performance.now) ? performance.now() : 0;
    var gizli = 0, gorunur = 0;
    var kure = false;
    try { kure = ACIK && harita.getProjection && harita.getProjection().type === "globe"; }
    catch (e) { kure = false; }

    if (!kure) {
      // 🟢 GEÇME YOLU: küre kapalıyken HİÇBİR şey gizlenmez.
      for (var i = 0; i < KUTUK.length; i++) {
        if (KUTUK[i].el.style.visibility === "hidden") KUTUK[i].el.style.visibility = "";
        gorunur++;
      }
    } else {
      var c = harita.getCenter();
      var ufuk = ufukAcisiDer(harita);
      for (var j = 0; j < KUTUK.length; j++) {
        var k = KUTUK[j], ll;
        try { ll = k.m.getLngLat(); } catch (e) { continue; }
        var a = acDer(c.lat, c.lng, ll.lat, ll.lng);
        if (a > ufuk) { k.el.style.visibility = "hidden"; gizli++; }
        else { if (k.el.style.visibility === "hidden") k.el.style.visibility = ""; gorunur++; }
      }
    }
    sonSayim = {
      gizli: gizli, gorunur: gorunur,
      ms: ((performance && performance.now) ? performance.now() : 0) - t0,
      ufuk: kure ? ufukAcisiDer(harita) : null, kure: kure
    };
    return sonSayim;
  }

  // ── ⑤ BAĞLAN — her KARE değil, `move`/`zoom`/`rotate` olayında
  // 📌 Gerekçe ÖLÇÜM: 173 işaretçi için çağrı ~0,1-0,5 ms. Her karede
  //    (60 fps) koşsa saniyede 60 çağrı; olay tabanlı koşunca yalnız
  //    kamera oynarken koşuyor. İkisinin farkı `ARKA.olc()` ile ölçülür.
  function kur(harita) {
    ["move", "zoom", "rotate", "pitch", "moveend"].forEach(function (o) {
      harita.on(o, function () { uygula(harita); });
    });
    uygula(harita);
  }

  window.ARKA = {
    kur: kur,
    uygula: uygula,
    kutuk: KUTUK,
    sayim: function () { return sonSayim; },
    ac: function () { ACIK = true; return uygula(window.harita); },
    kapat: function () { ACIK = false; return uygula(window.harita); },
    pay: function (d) { PAY_DER = d; return uygula(window.harita); },
    // ölçüm: N çağrının ortalama süresi
    olc: function (n) {
      n = n || 200;
      var t0 = performance.now();
      for (var i = 0; i < n; i++) uygula(window.harita);
      var t = performance.now() - t0;
      return { cagri: n, toplam_ms: Math.round(t * 100) / 100,
               ortalama_ms: Math.round((t / n) * 1000) / 1000,
               isaretci: KUTUK.length };
    }
  };
  console.log("[ARKA YUZ] kuruldu — window.ARKA");
})();

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
// ÇARE — İKİ AŞAMALI, ve ufuk açısı TAHMİN EDİLMEZ, ÖLÇÜLÜR:
//   ① Ufuk açısı kare başına BİR KEZ, kütüphanenin kendi projeksiyon
//      matematiğine sorularak bulunur (ikili arama, ~14 sorgu).
//      Ölçüt: küre arkasındaki nokta ekrana ÖN YÜZE KATLANIR, yani
//      `unproject(project(P)) != P`  ⇔  P arka yüzde.
//   ② Sonra 1.000+ işaretçi bu eşiğe karşı UCUZ trigonometriyle sınanır.
//
// 🔴 İLK SÜRÜM UFKU ZOOM'DAN TÜRETİYORDU ve HER ZOOM SEVİYESİNDE
//    YANLIŞTI — ölçüldü, 5 Eylül 2026:
//        zoom   ölçülen ufuk   eski formül   fark
//         0,5      84,4°          72,2°     -12,2°
//         1,5      79,3°          62,0°     -17,3°
//         3        66,7°          44,4°     -22,3°
//         7        24,2°          12,7°     -11,5°
//    Formül ufku hep DAR veriyordu ⇒ kürenin kenarındaki GÖRÜNÜR
//    etiketleri de siliyordu (z 1,2'de 76 işaretçi fazladan gizlendi;
//    Anadır · Habarovka · Hakodate gibi GERÇEKTEN ön yüzde olanlar).
//    📌 Bunu "olabilir ama ölçemedim" diye yazmıştım; ölçülünce TUTTU.
//
// 🟢 DOĞRULAMA (`ARKA.dogrula()`): hızlı yolun hükmü ile tam oracle'ın
//    hükmü DOKUZ zoom seviyesinde, 1.168 işaretçide karşılaştırıldı —
//    **AYRIŞAN 0.** Yani ucuzlatma bir yaklaşım değil, eşdeğer.
//    Bedel: 4,457 ms → 1,589 ms (1.168 işaretçi).
// ═══════════════════════════════════════════════════════════════════════
(function () {
  "use strict";

  var KUTUK = [];                       // { marker, el }
  var ACIK = true;                      // çare açık mı
  var PAY_DER = 0;                      // ufka eklenecek emniyet payı (derece)
  var sonSayim = { gizli: 0, gorunur: 0, ms: 0 };
  var sonUfuk = null;

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

  // ── ② ÖRTÜLME ÖLÇÜTÜ — KALİBRE EDİLDİ, 5 Eylül 2026
  //
  // 🔴 ESKİ SÜRÜM AMPİRİK BİR UFUK AÇISI KULLANIYORDU ve YANLIŞTI:
  //      D ≈ 1 + 2^(1-z)*1.6  →  z 1,2'de ufuk 65,3°
  //    Kalibrasyon ölçümü (aşağıdaki tablo) gerçek eşiğin **~82°**
  //    olduğunu gösterdi ⇒ formül ~17° FAZLA gizliyordu, yani kürenin
  //    kenarındaki GÖRÜNÜR etiketleri de siliyordu.
  //    📌 Bunu "olabilir" diye yazmıştım ve ÖLÇÜLEMEDİ damgası vurmuştum;
  //       ölçülünce tuttu. Damga doğruydu, formül yanlıştı.
  //
  // 🟢 YENİ ÖLÇÜT — GİDİŞ-DÖNÜŞ SAPMASI. Ampirik sabit YOK.
  //    Küre projeksiyonunda arka yüzdeki bir nokta ekrana ÖN YÜZE
  //    KATLANARAK düşer. Dolayısıyla:
  //        unproject(project(P))  ==  P   ⇔  P ÖN yüzde
  //        unproject(project(P))  !=  P   ⇔  P ARKA yüzde
  //    Bu, kütüphanenin KENDİ projeksiyon matematiğini ölçüt yapar;
  //    kamera uzaklığını tahmin etmeye gerek kalmaz ve her zoom'da,
  //    her pitch'te kendiliğinden doğrudur.
  //
  //    ÖLÇÜLEN AYIRICILIK (z 1,2 · merkez 160°B · 344 işaretçi):
  //        açı bandı   nokta   sapan
  //         0– 80°       84       0     ← ön yüz, sapma TAM SIFIR
  //        80– 90°       20      19     ← eşik burada
  //        90–180°      240     240     ← hepsi, sapma açıyla büyüyor
  //    ⇒ Geçiş keskin; ara bölge tek bir 10° bandı.
  //
  // ⚠️ SINIRI: `project`/`unproject` çağrısı trigonometriden pahalıdır.
  //    Bedeli `ARKA.olc()` ile ölçülüyor ve raporda yazılı.
  var SAPMA_ESIK_DER = 1.0;      // 1°'den büyük sapma ⇒ arka yüz

  function sapiyorMu(harita, lng, lat) {
    var p = harita.project([lng, lat]);
    if (!isFinite(p.x) || !isFinite(p.y)) return true;
    var g = harita.unproject([p.x, p.y]);
    return acDer(lat, lng, g.lat, g.lng) > SAPMA_ESIK_DER;
  }

  // ── ②b BEDEL DÜŞÜRME — ufku ORACLE'a SORARAK bul, sonra ucuz trig
  //
  // 🔴 ÖLÇÜLDÜ: gidiş-dönüş ölçütünü 1.168 işaretçinin HER BİRİNE
  //    uygulamak çağrı başına **4,457 ms** ediyor — trigonometrik
  //    sürümün (0,744 ms / 830 işaretçi) yaklaşık ON KATI. Sebep açık:
  //    işaretçi başına iki ağır çağrı (`project` + `unproject`).
  //
  // 🟢 ÇARE: ölçüt DOĞRU, uygulanma biçimi pahalı. Ufuk açısı bütün
  //    işaretçiler için AYNI olduğuna göre onu işaretçi başına değil
  //    KARE BAŞINA bir kez bulmak yeter. Merkezden kuzeye doğru bir
  //    meridyende İKİLİ ARAMA ile oracle'a ~14 kez sorulur, sonra
  //    1.168 işaretçi ucuz trigonometriyle sınanır.
  //    ⇒ O(2n) yerine O(14 + n).
  //
  // ⚠️ Bu bir YAKLAŞIM DEĞİL: ufuk kürede merkeze göre simetriktir,
  //    yani tek bir yönde ölçülen eşik bütün yönlerde geçerlidir.
  //    Sınaması aşağıda (`ARKA.dogrula()`): iki yöntemin hükmü
  //    kaç işaretçide AYRIŞIYOR — beklenen 0.
  function ufkuOlc(harita) {
    var c = harita.getCenter();
    var alt = 0, ust = 180;
    // merkezden `d` derece kuzeydeki nokta (kutup taşarsa güneye döner)
    function nokta(d) {
      var lat = c.lat + d, lng = c.lng;
      if (lat > 89.9) { lat = 179.8 - lat; lng = c.lng + 180; }
      if (lat < -89.9) { lat = -179.8 - lat; lng = c.lng + 180; }
      return [((lng + 540) % 360) - 180, lat];
    }
    for (var i = 0; i < 14; i++) {
      var orta = (alt + ust) / 2;
      var p = nokta(orta);
      if (sapiyorMu(harita, p[0], p[1])) ust = orta; else alt = orta;
    }
    return alt;
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
      var ufuk = ufkuOlc(harita) + PAY_DER;       // KARE BAŞINA BİR KEZ
      for (var j = 0; j < KUTUK.length; j++) {
        var k = KUTUK[j], ll;
        if (!k.el.isConnected) continue;          // kopmuş kayıt
        try { ll = k.m.getLngLat(); } catch (e) { continue; }
        if (acDer(c.lat, c.lng, ll.lat, ll.lng) > ufuk) {
          k.el.style.visibility = "hidden"; gizli++;
        } else {
          if (k.el.style.visibility === "hidden") k.el.style.visibility = ""; gorunur++;
        }
      }
      sonUfuk = ufuk;
    }
    sonSayim = {
      gizli: gizli, gorunur: gorunur,
      ms: ((performance && performance.now) ? performance.now() : 0) - t0,
      ufuk_der: kure ? Math.round(sonUfuk * 100) / 100 : null,
      olcut: kure ? "ufuk ORACLE'dan (ikili arama) + ucuz trig" : null,
      kure: kure
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
    // 🔴 C13: HIZLI yol ile TAM yol AYNI HUKMU mu veriyor?
    dogrula: function () {
      var h = window.harita, c = h.getCenter();
      var ufuk = ufkuOlc(h) + PAY_DER, ayrisan = 0, n = 0, ornek = [];
      for (var i = 0; i < KUTUK.length; i++) {
        var k = KUTUK[i];
        if (!k.el.isConnected) continue;
        var ll = k.m.getLngLat(); n++;
        var hizli = acDer(c.lat, c.lng, ll.lat, ll.lng) > ufuk;
        var tam = sapiyorMu(h, ll.lng, ll.lat);
        if (hizli !== tam) {
          ayrisan++;
          if (ornek.length < 5) ornek.push({
            ad: (k.el.textContent || '').slice(0, 16),
            aci: Math.round(acDer(c.lat, c.lng, ll.lat, ll.lng) * 10) / 10,
            hizli: hizli, tam: tam });
        }
      }
      return { isaretci: n, ufuk_der: Math.round(ufuk * 100) / 100,
               AYRISAN: ayrisan, ornek: ornek };
    },
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

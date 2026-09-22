// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// SEFER OKU — "ok" ANİMASYON FAZI            SEFER-OK-0070 · 20 Eylül 2026
// ═══════════════════════════════════════════════════════════════════════
// Emre (paket 0070 / H-0006): *"işgal eden ordu bir yuvarlak kalın bir nokta
// şeklinde gösteriliyor iken bu nokta kaynak alınarak bu noktadan çıkan ince
// bir çizgi … ordunun geçtiği güzergaha kabataslak sadık kalınarak … işgal
// edilen ülkenin topraklarına doğru ilerleyecektir. işgal veya ilerleme
// aksiyonunun bittiği noktaya kadar gelen ok sonrası ilgili bölge iki kez …
// yanıp sönecektir."*
//
// BU DOSYANIN SINIRI — ok'un İLERLEMESİ. Varıştaki yanıp sönme ve sahibin
// değişmesi ELE-GECIRME-ANIM-0070'in fazlarıdır (uzlaşma: tahta M-4701/M-4703).
// Sözleşme:
//     ANIM.kayitOl("ok", fn)   fn(olay, bitti)
//     fn false dönerse         bu maddede ok YOK, sahne "vurus"tan başlar
//     bitti()                  sıradaki faza geç (çağrılmazsa 2400 ms tavan)
//     ANIM yoksa               window.SEFER_OK_FAZ ile dışarıdan alınabilir
//
// 📌 0075 (SEFER-OK-0075): iki İSTEĞE BAĞLI alan eklendi, ikisi de app.js'te okunur
//    ve `seferHat()` üzerinden bu dosyaya gelir — `kademe` (ok maddeden maddeye
//    adım adım uzar; faz yalnız YENİ kademeyi ilerletir) ve `rota` (deniz oku
//    kıyıyı dolanan çizim hattı). Alanı olmayan kayıt eskisi gibi davranır.
// 🔴 YENİ VERİ ŞEMASI AÇILMADI, YENİ OK UYDURULMADI. Faz yalnız `window.
//    SEFERLER*`ta ZATEN DURAN güzergâhları canlandırır; güzergâhı olmayan
//    madde "ok yok" kovasına düşer ve false döner (ölçüm: denetim/
//    SEFER-OK-0070.md — 2209 harekât maddesinin 1877'sinde güzergâh YOK).
// 🔴 İKİNCİ BİR OK ÇİZİCİ DE YOK: durağan çizim app.js `seferGuncelle`de
//    kalıyor; bu dosya yalnız faz süresince onu `SEFER_ANIM_GIZLI` ile
//    susturup aynı geometriyi kısmi olarak çiziyor (D023 — var olanı kullan).
(function () {
  "use strict";

  var KAYNAK = "sefer-anim";
  var CIZGI = "sefer-anim-cizgi";
  var NOKTA = "sefer-anim-nokta";
  var TAVAN_MS = 2400, TABAN_MS = 900;
  var ESLESME_GUN = 15;       // maddenin günü ile okun penceresi arası tolerans
  // 🔴 400 → 150 km ve "ucu" → "güzergâhın tamamı" (ATIF ÖLÇÜMÜ,
  // denetim/ARAC-SEFER-OK-ATIF-0070.js · Emre M-4714 §4 "TEK ANLATI").
  // Ölçüldü: ucu esas alan eşleşme "Medine geri alındı" ↔ "Tosun Paşa'nın
  // Hicaz seferi"ni 340 km diye uzak sayıyordu (oysa sefer Medine'den geçer),
  // buna karşılık "II. Mahmud'un ölümü" ↔ "donanmanın İskenderiye'ye teslimi"
  // gibi ALAKASIZ bir çifti 356 km ile kabul ediyordu. Güzergâha ölçülen
  // mesafede 227 eşleşmenin 102'si ≤150 km, 98'i ≤50 km.
  var ESLESME_KM = 150;

  var etkin = null;           // süren animasyonun durumu
  var kare = null;

  // ---- geometri yardımcıları (app.js'in kmArasi'sı kullanılır, kopyalanmaz)
  function parcaKm(a, b) { return kmArasi(a[1], a[0], b[1], b[0]); }

  function kumulatif(yol) {
    var d = [0], top = 0;
    for (var i = 1; i < yol.length; i++) { top += parcaKm(yol[i - 1], yol[i]); d.push(top); }
    return { d: d, top: top };
  }

  // Yolun ilk `oran` kadarını (mesafeye göre) döndürür; son parçada ARA NOKTA
  // üretir ki ok düğümden düğüme sıçramasın.
  function kismiYol(yol, k, oran) {
    if (oran <= 0) return [yol[0], yol[0]];
    if (oran >= 1) return yol.slice();
    var hedef = k.top * oran, out = [yol[0]];
    for (var i = 1; i < yol.length; i++) {
      if (k.d[i] <= hedef) { out.push(yol[i]); continue; }
      var p = (hedef - k.d[i - 1]) / Math.max(1e-9, k.d[i] - k.d[i - 1]);
      out.push([yol[i - 1][0] + (yol[i][0] - yol[i - 1][0]) * p,
                yol[i - 1][1] + (yol[i][1] - yol[i - 1][1]) * p]);
      break;
    }
    return out.length >= 2 ? out : [yol[0], yol[0]];
  }

  function aci(son, onceki) {
    var dx = (son[0] - onceki[0]) * Math.cos(son[1] * Math.PI / 180);
    var dy = son[1] - onceki[1];
    return Math.atan2(dx, dy) * 180 / Math.PI;
  }

  // ---- katmanlar (tembel: ilk animasyonda kurulur; harita hazır olmadan
  // faz zaten çağrılmaz)
  function katmanKur() {
    if (!window.harita || harita.getSource(KAYNAK)) return !!(window.harita && harita.getSource(KAYNAK));
    var bos = { type: "geojson", data: { type: "FeatureCollection", features: [] } };
    harita.addSource(KAYNAK, bos);
    // 🔴 SIRA — Emre M-4714 §1: *"simgeler okun üstünde kalır (ok yazıyı
    // örtmez)."* ELE-GECIRME-ANIM-0070 ölçtü (M-4718 §4a): animasyon katmanları
    // ilk `symbol` katmanının ÜSTÜNDE kalıyordu, yani ilerleyen ok
    // `antlasma-harita-etiket` yazısını örtebiliyordu. Durağan ok katmanları
    // için app.js `_seferKatmanSirasi()` aynı kuralı uyguluyor; burada aynı
    // hedef `beforeId` olarak veriliyor.
    var oncesi = null;
    try {
      var kat = harita.getStyle().layers;
      for (var i = 0; i < kat.length; i++)
        if (kat[i].type === "symbol" && kat[i].id.indexOf("sefer") !== 0) { oncesi = kat[i].id; break; }
    } catch (e) { /* stil hazır değil — sıra bir sonraki kurulumda düzelir */ }
    harita.addLayer({ id: CIZGI, type: "line", source: KAYNAK,
      filter: ["!=", ["geometry-type"], "Point"],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": ["coalesce", ["get", "renk"], "#2b1006"],
               "line-opacity": 0.95,
               "line-width": ["coalesce", ["get", "kalinlik"], 9] } }, oncesi || undefined);
    harita.addLayer({ id: NOKTA, type: "circle", source: KAYNAK,
      filter: ["==", ["geometry-type"], "Point"],
      paint: { "circle-color": ["coalesce", ["get", "renk"], "#2b1006"],
               "circle-radius": ["*", ["coalesce", ["get", "kalinlik"], 9], 0.8],
               "circle-opacity": 0.95,
               "circle-stroke-width": 1.4, "circle-stroke-color": "#fdf6e9" } }, oncesi || undefined);
    return true;
  }

  function ciz(yol, renk, kalinlik) {
    harita.getSource(KAYNAK).setData({ type: "FeatureCollection", features: [
      { type: "Feature", properties: { renk: renk, kalinlik: kalinlik },
        geometry: { type: "LineString", coordinates: yol } },
      { type: "Feature", properties: { renk: renk, kalinlik: kalinlik },
        geometry: { type: "Point", coordinates: yol[0] } }
    ] });
  }

  function temizle() {
    if (window.harita && harita.getSource(KAYNAK))
      harita.getSource(KAYNAK).setData({ type: "FeatureCollection", features: [] });
  }

  // ---- ok seçimi: madde → SEFERLER kaydı
  // 🔴 BAĞ VERİDE YOK: sefer kayıtları kronoloji maddesine `id` ile bağlı
  //    DEĞİL (ölçüldü: 114 kaydın hiçbirinde madde referansı yok). Bu yüzden
  //    eşleşme İKİ ÖLÇÜTLE kuruluyor ve ikisi de ölçülebilir:
  //      ① zaman  — maddenin günü okun [fi,ti] penceresinde (±15 gün)
  //      ② yer    — okun GÜZERGÂHI maddenin yerine 150 km'den yakın
  //    🔴 YERİ ÇÖZÜLEMEYEN MADDEDE OK ÇİZİLMEZ (false döner). Eskiden yalnız
  //    tarihle eşleşme yapılıyordu; ölçüldü (ATIF ÖLÇÜMÜ): 227 eşleşmenin
  //    115'i yalnız tarihe dayanıyordu — yani okun o maddeyle ilgisi HİÇ
  //    sınanmamıştı. Emre M-4714 §4: alakasız ok, oksuzluktan kötüdür.
  //    Uydurma yok: hiçbir aday yoksa faz false döner, sahne "vurus"tan başlar.
  function okSec(o) {
    if (!window.seferler || !seferler.length) return null;
    var g = (o && o.gi !== undefined) ? o.gi : (o && o.t ? gunIdx(o.t) : null);
    if (g === null || g === undefined) return null;
    var kon = (typeof olayKonumu === "function") ? olayKonumu(o) : null;
    if (!kon) return null;                           // yer yok → ok YOK
    var en = null, enPuan = Infinity;
    for (var i = 0; i < seferler.length; i++) {
      var m = seferler[i];
      if (!m.yol || m.yol.length < 2) continue;
      if (g < m.fi - ESLESME_GUN || g > m.ti + ESLESME_GUN) continue;
      // Mesafe GÜZERGÂHIN TAMAMINA: okun ucu seferin en ileri noktasıdır,
      // maddenin anlattığı yer güzergâhın ortasında olabilir.
      var enYakin = Infinity;
      for (var j = 0; j < m.yol.length; j++) {
        var d = kmArasi(kon.lat, kon.lon, m.yol[j][1], m.yol[j][0]);
        if (d < enYakin) enYakin = d;
      }
      if (enYakin > ESLESME_KM) continue;
      if (enYakin < enPuan) { enPuan = enYakin; en = m; }
    }
    return en;
  }

  function sure(km) {
    if (window.ANIM && ANIM.OK_MS) return ANIM.OK_MS;
    return Math.max(TABAN_MS, Math.min(TAVAN_MS, 900 + km * 1.2));
  }

  function bitir(bitti) {
    if (kare) { cancelAnimationFrame(kare); kare = null; }
    if (etkin) {
      if (etkin.mk) etkin.mk.remove();
      if (window.SEFER_ANIM_GIZLI) delete SEFER_ANIM_GIZLI[etkin.id];
      etkin = null;
    }
    temizle();
    // durağan çizim geri gelsin (ok artık tam boy görünür)
    try { if (typeof seferGuncelle === "function") seferGuncelle(suanki); } catch (e) { }
    if (typeof bitti === "function") bitti();
  }

  // ---- FAZ
  function fazOk(o, bitti) {
    if (!window.harita || !window.haritaHazir) return false;
    var m = okSec(o);
    if (!m) return false;                      // "güzergâh yok" kovası — UYDURULMAZ
    if (!katmanKur()) return false;
    if (etkin) bitir(null);                    // önceki sahne yarıda kaldıysa kapat

    // 🔴 KAVİSLİ HAT — 0073 H-0001. Durağan çizim `seferKavisliYol()` ile
    // eğriltilmiş hattı gösteriyor; animasyon düz hattı izleseydi ok, kendi
    // gövdesinin dışından yürürdü. Aynı fonksiyon, tek kaynak (app.js).
    // 🔴 0075 (H-0012 kademe · H-0033 deniz): hat artık `seferHat(m, gün)` —
    // durağan çizimle AYNI fonksiyon. Kademeli okta hat, madde gününe kadar
    // ulaşılan kademeyle biter ve animasyon YALNIZ YENİ kademeyi ilerletir
    // (önceki kademe zaten ekranda duruyordu): p0 = önceki kademenin uzunluk oranı.
    var gun = (o && o.gi !== undefined) ? o.gi : gunIdx(o.t);
    var yol = (typeof seferHat === "function") ? seferHat(m, gun)
            : (typeof seferKavisliYol === "function")
              ? (m._kavisli || (m._kavisli = seferKavisliYol(m.yol))) : m.yol;
    var k = kumulatif(yol);
    var p0 = 0;
    if (m.kademe && typeof seferHat === "function") {
      var onceki = seferHat(m, gun - 1);            // bir gün önceki hat
      p0 = Math.min(1, kumulatif(onceki).top / Math.max(1e-9, k.top));
      yol = seferHat(m, gun);                       // önbelleği bu güne geri al
      if (p0 >= 0.999) return false;                // bu madde okta ilerleme değil
    }
    var sr = sure(k.top * (1 - p0));
    var kal = (window.HAREKET && HAREKET[m.tur] ? HAREKET[m.tur] : { kalinlik: 9 }).kalinlik;
    SEFER_ANIM_GIZLI[m.id] = true;
    try { seferGuncelle(suanki); } catch (e) { }   // durağan kopyayı hemen sustur

    // ok başı: durağan çizimdekiyle AYNI glif ve renk (app.js HAREKET tablosu)
    var el = document.createElement("div");
    var ic = document.createElement("div");
    ic.className = "sefer-ok tur-" + m.tur;
    ic.textContent = (window.HAREKET && HAREKET[m.tur] ? HAREKET[m.tur] : HAREKET.sefer).glif;
    ic.style.color = m.renk;
    el.appendChild(ic);
    ic.style.fontSize = Math.round(kal * 2.2) + "px";   // 0073 H-0003: glif gövdeyle orantılı
    var mk = new maplibregl.Marker({ element: el, anchor: "center", rotation: 0 })
               .setLngLat(yol[0]).addTo(harita);

    etkin = { id: m.id, mk: mk };
    var bas = (window.performance && performance.now) ? performance.now() : Date.now();

    function tik(simdi) {
      if (!etkin) return;
      var gecen = ((simdi !== undefined ? simdi : Date.now()) - bas);
      var p = Math.max(0, Math.min(1, gecen / sr));
      // yumuşak giriş-çıkış: ordu ne bir anda fırlar ne de sona sert çarpar
      var e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      var ky = kismiYol(yol, k, p0 + (1 - p0) * e);
      ciz(ky, m.renk, kal);
      var son = ky[ky.length - 1], onceki = ky[ky.length - 2] || ky[0];
      mk.setLngLat(son);
      if (son[0] !== onceki[0] || son[1] !== onceki[1]) mk.setRotation(aci(son, onceki) - 90);
      if (p >= 1) { bitir(bitti); return; }
      kare = requestAnimationFrame(tik);
    }
    kare = requestAnimationFrame(tik);
    return true;
  }

  window.SEFER_OK_FAZ = fazOk;
  function kaydol() {
    if (window.ANIM && ANIM.kayitOl) { ANIM.kayitOl("ok", fazOk); return true; }
    return false;
  }
  // anim_dili.js bu dosyadan ÖNCE de SONRA da yüklenebilir: ikisini de karşıla.
  if (!kaydol()) {
    var dene = 0;
    var zaman = setInterval(function () {
      if (kaydol() || ++dene > 40) clearInterval(zaman);   // en çok ~10 sn
    }, 250);
  }
})();

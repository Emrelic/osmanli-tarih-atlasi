// ═══════════════════════════════════════════════════════════════════════
// GEOMETRİ ÇÖZÜCÜ — arac/kodla.py'nin ürettiği delta+varint akışını açar.
// ═══════════════════════════════════════════════════════════════════════
// Emre'nin kararı (28 Eylül 2026): yürüyüş açılınca devletler_harita.js
// 85 → 169 MB oldu ve GitHub'ın 100 MB/dosya sınırını geçti. Sadeleştirme
// kolu ÖLÇÜLEREK kapandı (fazladan noktalar ızgara artifaktı DEĞİL, gerçek
// şekil bilgisi: eksen hizalı kenar oranı %7,2 → %6,4, yani artmadı).
// ⇒ Kalan tek kol KAYIPSIZ KODLAMA: aynı noktalar, aynı 3 ondalık hane,
//   nokta başına 16,28 bayt yerine 2,35 bayt.
//
// 🔴 BU DOSYA BOZULURSA HARİTA ÇİZİLİR AMA YANLIŞ ÇİZİLİR ve hiçbir denetim
//    ötmez. Python tarafı (`arac/kodla.py`) 93.050 halkanın HEPSİNDE bayt
//    bayt gidiş-dönüş sınavını geçmeden çıktı yazmaz. Bu dosyadaki çözücü,
//    O SINAVIN JS KARŞILIĞIDIR ve aynı biçimi okur. Biçim değişirse İKİSİ
//    BİRLİKTE değişir — yoksa sessiz bozulma olur.
//
// BİÇİM (arac/kodla.py `_kodla_havuz`):
//    varint  halka sayısı
//    her halka:  varint nokta sayısı
//                2×nokta adet zigzag varint  (önceki noktadan FARK, 1/1000°)
//    Her halkanın ilk noktası (0,0)'dan farktır — yani mutlak değeridir.
//
// SAYI GÜVENLİĞİ: en büyük mutlak değer 180.000 (boylam×1000). Zigzag onu
// 360.000 yapar — 2^19'un altında. Yani 32 bitlik JS bit işleçleri (`<<`,
// `|`) TAŞMAZ. Bu bir varsayım değil sınırdır: boylam ±180, enlem ±90.

(function (kok) {
  "use strict";

  // ── base64 → Uint8Array (parçalı) ──────────────────────────────────
  // 🔴 TEK SEFERDE `atob` YAPILMIYOR: 32 MB'lık base64 dizgisini tek atışta
  //    çözmek 24 MB'lık bir ara dizgi daha doğurur ve zayıf makinede (ölçüldü:
  //    filodaki bir bilgisayarda boş RAM 0,99 GB) tepe belleği gereksiz
  //    büyütür. 4 MB'lık dilimler hâlinde çözülüyor; base64 4 karakterde bir
  //    hizalı olduğu için dilim sınırı 4'ün katı SEÇİLMEK ZORUNDA.
  function b64Coz(s) {
    var DILIM = 4 * 1024 * 1024;              // 4'ün katı
    var uzunluk = (s.length / 4) * 3;
    if (s.charCodeAt(s.length - 1) === 61) uzunluk--;      // '='
    if (s.charCodeAt(s.length - 2) === 61) uzunluk--;
    var u8 = new Uint8Array(uzunluk);
    var y = 0;
    for (var i = 0; i < s.length; i += DILIM) {
      var ham = atob(s.substr(i, DILIM));
      for (var j = 0; j < ham.length; j++) u8[y++] = ham.charCodeAt(j);
    }
    return u8;
  }

  // ── varint akışı → halka havuzu ────────────────────────────────────
  function havuzCoz(u8) {
    var i = 0;

    function v() {                            // zigzag varint oku
      var z = 0, k = 0, c;
      do {
        c = u8[i++];
        z |= (c & 0x7F) << k;
        k += 7;
      } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }

    var nHalka = v();
    var havuz = new Array(nHalka);
    for (var h = 0; h < nHalka; h++) {
      var nNokta = v();
      var halka = new Array(nNokta);
      var px = 0, py = 0;
      for (var p = 0; p < nNokta; p++) {
        px += v();
        py += v();
        // 🔴 BÖLME, ÇARPMA DEĞİL: px/1000 IEEE754'te doğru yuvarlanır ve
        //    metinden `parseFloat("31.114")` ile BİREBİR aynı double'ı verir.
        //    `px * 0.001` vermez (0.001 ikilik tabanda tam değildir).
        halka[p] = [px / 1000, py / 1000];
      }
      havuz[h] = halka;
    }

    // ── NEGATİF SIFIR KUYRUĞU — OKUNUR ama UYGULANMAZ ────────────────
    // Python tarafı bu kuyruğu `-0.0`ı geri koymak için kullanıyor: dosyada
    // 38 yerde `[-0.0,49.331]` gibi değerler var ve `coz.py` özgün METNİ
    // birebir geri üretmek zorunda (17 alet o metni okuyor).
    // 🔴 Burada UYGULANMAZ, çünkü JS'te `String(-0)` === "0" — yani JS bu
    //    ayrımı metinde bile taşıyamaz; ve sayısal olarak `-0 === 0`, harita
    //    birebir aynı çizilir. AMA KUYRUK OKUNMAK ZORUNDA: okunmazsa
    //    aşağıdaki "artakalan bayt" denetimi yanlış alarm verir.
    var nEksi = v();
    for (var e = 0; e < nEksi; e++) v();

    if (i !== u8.length) {
      // Artakalan bayt = biçim uyuşmazlığı. SESSİZ GEÇİLMEZ.
      throw new Error("geo_coz: akış sonunda " + (u8.length - i) +
                      " bayt arttı — biçim uyuşmuyor");
    }
    return havuz;
  }

  kok.geoCoz = { b64Coz: b64Coz, havuzCoz: havuzCoz };

  // ── OTOMATİK BAĞLAMA ───────────────────────────────────────────────
  // Her hedef bir satırlık base64 atar; bu dosya onu çözer ve app.js'in
  // OKUDUĞU KÜRESEL ADA koyar. app.js'e DOKUNULMAZ (Emre'nin şartı).
  // 🔴 SIRA: index.html'de bu dosya bütün `*_parcalar.js`lerden SONRA,
  //    `js/app.js`ten ÖNCE yüklenmeli.
  //
  // İKİ HEDEF (29 Eylül 2026):
  //   __DP_B64 → DEVLET_PARCALAR   devletler_harita.js'ten (169 → 35 MB)
  //   __PR_B64 → PARCALAR          donemler.js'ten        (54,8 → 10,9 MB)
  // ⚠️ Adlar AYRI olmak zorunda: ikisi de aynı sayfada yaşıyor, aynı adı
  //    kullansalardı ikincisi birincisini EZERDİ ve harita sessizce yanlış
  //    çizilirdi — bu dosyanın başındaki uyarının tam olarak anlattığı kusur.
  var HEDEFLER = [
    { b64: "__DP_B64", kuresel: "DEVLET_PARCALAR", ms: "__DP_COZUM_MS",
      hata: "__DP_HATA", ad: "devlet" },
    { b64: "__PR_B64", kuresel: "PARCALAR", ms: "__PR_COZUM_MS",
      hata: "__PR_HATA", ad: "dönem" }
  ];

  // ── KATMAN 1 / KATMAN 2 — TEMBEL YÜKLEME ───────────────────────────
  // ÖLÇÜLDÜ (29 Eylül 2026): devlet_parcalar.js 17,69 MB telde ve açılışta
  // EŞZAMANLI bekleniyordu. Oysa açılış günü (1281-01-01) havuzun yalnız
  // %4,1'ini istiyor: 3.781 halka / 129.898 nokta = 0,42 MB.
  // ⇒ KATMAN 1 (devlet_parca_on.js) senkron iner ve sayfa ONUNLA boyanır;
  //   KATMAN 2 (tam havuz) ilk boyamadan SONRA arka planda iner, gelince
  //   havuz değiştirilir ve `window.__govdeYenile()` çağrılır.
  // ⚠️ Açılışta ekranda EKSİK BİR ŞEY OLMAZ — katman 1 tam o günün verisidir.
  //   Kullanıcı zaman çubuğunu katman 2 inmeden oynatırsa o günün bazı
  //   gövdeleri henüz yoktur; `app.js`in `parcaCoz`u eksik halkayı ATLAR
  //   (çökmez), katman 2 gelince tam hâli çizilir.
  function seyrekCoz(u8) {
    var i = 0;
    function v() {
      var z = 0, k = 0, c;
      do { c = u8[i++]; z |= (c & 0x7F) << k; k += 7; } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }
    var n = v(), idx = new Array(n), onc = 0;
    for (var j = 0; j < n; j++) { onc += v(); idx[j] = onc; }
    var halkalar = havuzCoz(u8.subarray(i));
    if (halkalar.length !== n) {
      throw new Error("geo_coz: seyrek katmanda " + n + " indeks ama " +
                      halkalar.length + " halka");
    }
    var seyrek = [];
    for (var m = 0; m < n; m++) seyrek[idx[m]] = halkalar[m];
    return seyrek;
  }

  function surumEki() {                       // kendi ?v=rNNNN damgamı taşı
    try {
      var b = kok.document.querySelector('script[src*="geo_coz.js"]');
      var q = b && b.src.indexOf("?") >= 0 ? b.src.slice(b.src.indexOf("?")) : "";
      return q;
    } catch (e) { return ""; }
  }

  function tamHavuzuGetir() {
    var s = kok.document.createElement("script");
    s.src = "data/devlet_parcalar.js" + surumEki();
    s.async = true;
    s.onload = function () {
      var t = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
      try {
        if (!kok.__DP_B64) throw new Error("__DP_B64 gelmedi");
        kok.DEVLET_PARCALAR = havuzCoz(b64Coz(kok.__DP_B64));
        kok.__DP_B64 = null;
        if (t) kok.__DP_TAM_MS = Math.round(kok.performance.now() - t);
        kok.__DP_TAM_HALKA = kok.DEVLET_PARCALAR.length;
        if (kok.console) console.log("geo_coz: tam havuz indi — " +
            kok.DEVLET_PARCALAR.length + " halka, " + kok.__DP_TAM_MS + " ms");
        // 🔴 app.js'in kancası. YOKSA sessizce geçilmez: katman 1 ile kalmak
        //    ileri tarihlerde EKSİK harita demektir, ve bu görünmez bir kusurdur.
        if (typeof kok.__govdeYenile === "function") kok.__govdeYenile();
        else {
          kok.__DP_TAM_HATA = "app.js kancası (__govdeYenile) YOK";
          if (kok.console) console.error("🔴 " + kok.__DP_TAM_HATA);
        }
      } catch (e) {
        kok.__DP_TAM_HATA = String(e);
        if (kok.console) console.error("🔴 geo_coz tam havuz BAŞARISIZ:", e);
      }
    };
    s.onerror = function () {
      kok.__DP_TAM_HATA = "devlet_parcalar.js İNDİRİLEMEDİ";
      if (kok.console) console.error("🔴 " + kok.__DP_TAM_HATA);
    };
    kok.document.head.appendChild(s);
  }

  if (kok.__DP_ON_B64 && !kok.DEVLET_PARCALAR) {
    var tOn = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
    try {
      kok.DEVLET_PARCALAR = seyrekCoz(b64Coz(kok.__DP_ON_B64));
      kok.__DP_ON_B64 = null;
      kok.__DP_ON_MS = tOn ? Math.round(kok.performance.now() - tOn) : 0;
      if (kok.console) console.log("geo_coz[katman1]: " + kok.__DP_ON_GUN +
          " için seyrek havuz, " + kok.__DP_ON_MS + " ms");
    } catch (e) {
      kok.__DP_ON_HATA = String(e);
      if (kok.console) console.error("🔴 geo_coz katman1 BAŞARISIZ:", e);
    }
    // Tam havuzu ilk boyamadan SONRA iste — `load` olayı beklenir.
    if (kok.addEventListener) {
      kok.addEventListener("load", function () { setTimeout(tamHavuzuGetir, 0); });
    } else {
      tamHavuzuGetir();
    }
  }

  var cozulenVar = false;
  for (var hi = 0; hi < HEDEFLER.length; hi++) {
    var H = HEDEFLER[hi];
    if (!kok[H.b64] || kok[H.kuresel]) continue;
    cozulenVar = true;
    var t0 = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
    try {
      kok[H.kuresel] = havuzCoz(b64Coz(kok[H.b64]));
      kok[H.b64] = null;                      // büyük dizgiyi bırak
      if (t0) {
        var ms = Math.round(kok.performance.now() - t0);
        kok[H.ms] = ms;
        if (kok.console) console.log("geo_coz[" + H.ad + "]: " +
            kok[H.kuresel].length + " halka, " + ms + " ms");
      }
    } catch (e) {
      // 🔴 HATA YUTULMAZ. Çözülemezse harita EKSİK çizilir; sessizce yanlış
      //    çizmek yerine konsola ve ekrana haykırması gerekir.
      if (kok.console) console.error("🔴 geo_coz BAŞARISIZ [" + H.ad + "]:", e);
      kok[H.hata] = String(e);
      // Eski ad geriye dönük: dış ölçümler __DP_HATA'ya bakıyor.
      if (!kok.__DP_HATA) kok.__DP_HATA = String(e);
    }
  }

  // Katman 1 de bir çözümdür — yerleşim onarımı onda da kurulmalı.
  if (cozulenVar || typeof kok.__DP_ON_MS === "number") {
    // ── 🔴 YERLEŞİM ONARIMI — ölçülmüş bir GERİLEMENİN çaresi ──────────
    // Bu blok bir "ihtiyaten" satırı değil; kıyaslamayla bulunmuş bir kusuru
    // kapatıyor. ÖLÇÜM (28 Eylül 2026, aynı pencere 1024×768):
    //     yayındaki sürüm : tuval 604×695  · kap 604×689   ✓ doğru
    //     kodlama sonrası : tuval 400×300  · kap 604×689   🔴 YANLIŞ
    // Sebep: yukarıdaki çözüm EŞZAMANLI ve ~1,7 sn sürüyor. O sırada tarayıcı
    // ilk yerleşimi (layout) tamamlayamıyor; `js/app.js` haritayı hemen
    // ardından kurunca MapLibre kabın ölçüsünü okuyamıyor ve kendi varsayılan
    // 400×300 tuvaline düşüyor. Harita ÇİZİLİYOR ama kabının sol üst köşesine
    // sıkışıyor — geri kalan alan SİYAH kalıyor.
    // ⚠️ Ekran görüntüsünde bunu "çizilmeyen gövde" sandım; ölçüm çürüttü:
    //    tuval içindeki 300 örnek noktanın KARA olanlarının TAMAMINDA sahip
    //    katmanı vardı (kara-ama-sahipsiz = 0). Yani veri değil YERLEŞİM
    //    kusuruydu. "Haritaya bakıp karar vermek" burada yanlış teşhis verirdi.
    // ÇARE: sayfa yüklenince bir `resize` olayı yayınla. MapLibre varsayılan
    // olarak `trackResize:true` ile pencere yeniden boyutlanmasını dinler ve
    // kendini kabına oturtur. `app.js`e DOKUNULMAZ (Emre'nin şartı).
    if (kok.addEventListener) {
      kok.addEventListener("load", function () {
        try {
          kok.dispatchEvent(new Event("resize"));
        } catch (e2) {
          var ev = kok.document.createEvent("Event");   // eski tarayıcı
          ev.initEvent("resize", true, true);
          kok.dispatchEvent(ev);
        }
      });
    }
  }
})(typeof window !== "undefined" ? window : this);

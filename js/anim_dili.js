// ============================================================================
// ANİMASYON DİLİ — ortak sahne sıralayıcı (DALGA-0070, 20 Eylül 2026)
// Oturumlar: ELE-GECIRME-ANIM-0070 (bu dosya + "vurus"/"cozul" fazları)
//            SEFER-OK-0070        ("ok" fazı, js/sefer_ok.js)
// Tahta anlaşması: M-4701 (teklif) → M-4703 (kabul + iki düzeltme).
//
// NİÇİN VAR: Emre'nin H-0008 ve H-0006 istekleri AYNI SAHNEYİ paylaşıyor —
// önce harita olayın yerine odaklanır, (varsa) ordunun oku yürür, sonra el
// değiştiren bölge yanıp söner ve yeni sahibin rengine bürünür. İki oturum
// ayrı ayrı zamanlayıcı yazsaydı iki ayrı animasyon dili doğardı; bu dosya
// yalnız SIRAYI tutar.
//
// 🔴 BU DOSYA ANİMASYON ÇİZMEZ, SIRALAR. Her fazın içeriği kendi sahibinin
// dosyasında durur ve buraya `kayitOl` ile bağlanır. Sebebi D045/§11: bir
// bilgi (ör. "vuruş kaç kez, kaç ms") iki yerde durursa biri bayatlar.
// ⇒ Vuruş tablosu app.js'te (`ELE_GECIRME_DILI`), koyu ton hesabı app.js'te
//   (`koyuTon`) — burada KOPYASI YOK, `ANIM.koyuTon` oraya vekâlet eder.
//
// 🔴 rAF YOK. Fazların sırası `setTimeout` ile kurulur; "vurus"/"cozul"
// fazları MapLibre'nin kendi `fill-opacity-transition`ını kullanır, kare
// başına hesap yapmaz. Kendi içinde `requestAnimationFrame` isteyen faz
// (ör. yürüyen ok) onu KENDİ dosyasında açar — sıralayıcı karışmaz.
//
// AD ALANI: js/anim_dili.js → window.ANIM. index.html satırını KOORDİNATÖR
// ekler (js/app.js'ten SONRA, js/sefer_ok.js'ten ÖNCE). Satır eklenmeden
// dosya CANLI DEĞİLDİR (D099) — ve app.js bu dosya YOKKEN de doğru çalışır:
// `_eleGecirmeSahnesi()` ANIM'i bulamazsa aynı vuruş tablosunu kendisi
// zamanlar (tek tablo, iki zamanlayıcı DEĞİL — bkz. app.js'teki not).
// ============================================================================
"use strict";

(function () {
  // Faz sırası — sahne her zaman bu sırayla akar. Kayıtlı olmayan faz ATLANIR.
  var SIRA = ["ok", "vurus", "cozul"];

  var _kayit = {};        // faz adı → fn(olay, bitti) · false dönerse faz atlanır
  var _zaman = [];        // bekleyen setTimeout'lar
  var _sahne = 0;         // sahne sayacı — eski sahnenin geç gelen callback'i yeniyi bozmasın
  var _varisBekleyen = null;
  var _koser = false;     // sahne şu an akıyor mu
  var _bitince = [];      // sahne bitince koşacaklar (Emre M-4714 §3: simge FAZ BİTİNCE)

  function _temizle() {
    for (var i = 0; i < _zaman.length; i++) clearTimeout(_zaman[i]);
    _zaman = [];
    _varisBekleyen = null;
  }
  function _gecikmeli(fn, ms) { _zaman.push(setTimeout(fn, ms)); }

  // Kamera hareket ediyor mu? `ucusAcik()` app.js'in TEK KAPISI (pasif kip
  // her yolu kapatır); burada yeniden sorulmuyor, ORAYA soruluyor.
  function _ucusVarMi() {
    try { return typeof ucusAcik === "function" ? !!ucusAcik() : false; } catch (e) { return false; }
  }

  var ANIM = {
    // Faz tavanı: bir faz `bitti()` demezse sahne burada asılı kalmasın.
    SABIT: { FAZ_TAVAN_MS: 2400, VARIS_TAVAN_MS: 1600, PASIF_GECIKME_MS: 220 },

    // Hareket kısıtı açıksa (işletim sistemi ayarı) sahne OYNAMAZ; fazlar
    // "son hâli doğrudan çiz" diye çağrılır (kendi handler'ları karar verir).
    azHareket: function () {
      try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
    },

    // app.js'teki TEK koyu-ton hesabına vekâlet — kopya YOK.
    koyuTon: function (renk, oran) {
      try { return typeof koyuTon === "function" ? koyuTon(renk, oran) : renk; } catch (e) { return renk; }
    },

    // fn(olay, bitti) — `false` dönerse faz atlanır (ör. bu maddenin oku yok).
    // `bitti()` çağrılınca sıradaki faza geçilir; çağrılmazsa FAZ_TAVAN_MS sonra
    // zorla geçilir.
    kayitOl: function (faz, fn) {
      if (SIRA.indexOf(faz) < 0) { console.warn("[anim] bilinmeyen faz: " + faz); return false; }
      _kayit[faz] = fn;
      return true;
    },

    kayitliMi: function (faz) { return typeof _kayit[faz] === "function"; },

    durdur: function () { _sahne++; _temizle(); _koser = false; _bitince = []; },

    koserMi: function () { return _koser; },

    // 🔴 EMRE, 20 Eylül 2026 (M-4714 §3): *"SİMGE … faz bitince görünür, faz
    // sırasında yanıp sönen başka bir şey olmaz."* Bu kanca o kuralın tek
    // uygulama noktası: sahne akıyorsa fn sahnenin SONUNA alınır, akmıyorsa
    // HEMEN koşar (sahnesiz maddede gecikme eklenmesin).
    // ⚠️ Kuyruk sahne başına sıfırlanır — bir önceki maddenin bekleyen simgesi
    // yeni maddenin sahnesine sarkmaz.
    bitince: function (fn) {
      if (typeof fn !== "function") return;
      if (!_koser) { fn(); return; }
      _bitince.push(fn);
    },

    // Kamera olay yerine VARDI — bekleyen sahne tavanı beklemeden başlasın.
    // app.js'in tek varış kapısı `_varista()` bunu çağırır.
    varisBildir: function () {
      if (_varisBekleyen) { var f = _varisBekleyen; _varisBekleyen = null; f(); }
    },

    // Sahneyi başlat. `opt.varisBekle:false` → kamerayı hiç bekleme.
    sahnele: function (olay, opt) {
      opt = opt || {};
      this.durdur();
      var benim = ++_sahne, self = this;
      _koser = true;

      function faz(ix) {
        if (benim !== _sahne) return;                  // yeni sahne başladı — bu ölü
        if (ix >= SIRA.length) {                       // SAHNE BİTTİ
          _koser = false;
          var k = _bitince; _bitince = [];
          k.forEach(function (f) { try { f(); } catch (e) { console.error("[anim] bitince", e); } });
          return;
        }
        var ad = SIRA[ix], fn = _kayit[ad];
        if (typeof fn !== "function") { faz(ix + 1); return; }
        var gecti = false;
        function bitti() {
          if (gecti || benim !== _sahne) return;
          gecti = true;
          faz(ix + 1);
        }
        var sonuc;
        try { sonuc = fn(olay, bitti); }
        catch (e) { console.error("[anim] faz '" + ad + "' hata verdi, sahne sürüyor", e); bitti(); return; }
        if (sonuc === false) { gecti = true; faz(ix + 1); return; }   // faz kendini atladı
        _gecikmeli(bitti, self.SABIT.FAZ_TAVAN_MS);                   // tavan: sahne asılı kalmasın
      }

      // 🔴 PASİF KİP — EMRE, 20 Eylül 2026 (M-4714 §5): *"PASİF kipte animasyon
      // OYNAMAZ; son durum doğrudan gösterilir."* Sahne HİÇ koşmaz; yalnız
      // `bitince` kuyruğu (simge/halka) hemen boşaltılır, çünkü simge animasyon
      // değil DURUMDUR — pasifte de görünmesi gerekir.
      // ⚠️ İlk yazımda burası sahneyi kısa gecikmeyle BAŞLATIYORDU (H-0008'in
      // "atlanan yalnız ODAK adımıdır" okumasıyla). Emre hükmü verdi, okuma
      // çürüdü; gerekçe app.js `_eleGecirmeSahnesi`de de yazılı.
      if (opt.varisBekle === false || !_ucusVarMi()) {
        _koser = false;
        var k = _bitince; _bitince = [];
        k.forEach(function (f) { try { f(); } catch (e) { console.error("[anim] bitince", e); } });
        return;
      }
      _varisBekleyen = function () { if (benim === _sahne) faz(0); };
      _gecikmeli(function () {
        if (_varisBekleyen) { _varisBekleyen = null; faz(0); }
      }, this.SABIT.VARIS_TAVAN_MS);
    }
  };

  window.ANIM = ANIM;
})();

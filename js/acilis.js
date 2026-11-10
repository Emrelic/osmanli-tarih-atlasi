/* ═══ AÇILIŞ MADDESİ — ACILIS-MADDESI-1110 (Emre, 10 Kasım 2026) ═══════════════
   Site, ziyaretçinin ülkesine göre o milletin kutladığı bir olayın gününde ve o
   devletin kronolojisiyle açılır. Tablo ve gerekçeler: data/acilis_tablosu.js.

   ÜLKE TESPİTİ — izin SORMADAN: konum izni ilk saniyede açılan bir pencere olur,
   IP servisi ziyaretçi verisini üçüncü tarafa gönderir. Sıra:
   ① ?acilis=XX (deneme; ?acilis=yok kapatır) ② tarayıcının SAAT DİLİMİ (yer vekili)
   ③ dil etiketinin bölgesi (en-US → US) ④ dilin kendisi (el → GR).
   Bilinmeyen ülke ⇒ DUNYA satırı (Osmanlı + İstanbul'un fethi).

   GÜVENLİK: madde ÇALIŞMA ANINDA veride aranır. Devlet ya da o günün maddesi yoksa
   DUNYA satırına düşer ve konsola sebebini yazar.

   ⚠️ ÇEVİRİ: bu dosyadaki dizgiler arac/ceviri_cikar.js'e arayüz adayı olarak
   girer. Ekranda görünmeyen Türkçe metin (gerekçe, ülke adı) BURAYA yazılmaz —
   data/acilis_tablosu.js'e yazılır; konsol iletileri console.* satırında kalır. */
(function () {
  "use strict";
  var ARAP_ULKELER = ["SA", "EG", "SY", "IQ", "JO", "LB", "PS", "AE", "KW", "QA", "BH", "OM",
                      "YE", "LY", "TN", "DZ", "MA", "SD"];
  // Saat dilimi → ülke: data/acilis_tablosu.js (adlar çevirmene aday düşmesin diye orada).
  var SAAT_DILIMI = window.ACILIS_SAAT_DILIMI || {};
  var DIL = { tr: "TR", el: "GR", fr: "FR", de: "DE", it: "IT", es: "ES", pt: "PT", ru: "RU",
              hu: "HU", sr: "RS", sq: "AL", fi: "FI", ro: "RO", pl: "PL", ja: "JP", ar: "ARAP" };
  var TABLO = window.ACILIS_TABLOSU || {};

  function satir(ulke, yol) {
    if (!ulke) return null;
    ulke = String(ulke).toUpperCase();
    if (ARAP_ULKELER.indexOf(ulke) >= 0) ulke = "ARAP";
    return TABLO[ulke] ? { ulke: ulke, s: TABLO[ulke], yol: yol } : null;
  }

  function ulkeBul() {
    var p = null;
    try { p = new URLSearchParams(location.search).get("acilis"); } catch (e) { /* eski tarayıcı */ }
    if (p) return /^yok$/i.test(p) ? { kapali: true } : (satir(p, "url") || satir("DUNYA", "url?"));
    var sd = "";
    try { sd = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) { /* yok */ }
    var r = satir(SAAT_DILIMI[sd], "tz " + sd);
    if (r) return r;
    var diller = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < diller.length; i++) {
      var bolge = diller[i].split("-")[1] || "";
      r = bolge.length === 2 ? satir(bolge, "lang " + diller[i]) : null;
      if (r) return r;
    }
    for (var j = 0; j < diller.length; j++) {
      r = satir(DIL[(diller[j].split("-")[0] || "").toLowerCase()], "lang " + diller[j]);
      if (r) return r;
    }
    return satir("DUNYA", "tz " + (sd || "?"));
  }

  function kucuk(s) { return String(s || "").toLocaleLowerCase("tr"); }

  // O gündeki maddeler arasından başlığında kelime geçeni seç; yoksa o günün ilki.
  function gunMaddesi(liste, gi, kelime) {
    var gunun = liste.filter(function (o) { return o.gi === gi; });
    var k = kucuk(kelime);
    for (var i = 0; i < gunun.length; i++) {
      var b = gunun[i].b_tr || (gunun[i].m && gunun[i].m.b_tr) || gunun[i].b;
      if (kucuk(b).indexOf(k) >= 0) return gunun[i];
    }
    return gunun[0] || null;
  }

  // Dönüş: gidilen maddenin başlığı, ya da false (veride yok).
  function uygula(sec) {
    var s = sec.s;
    var gi = tarihMetniAyristir(s.t).gi;
    if (gi == null) return false;
    if (s.d === "osmanli") {
      if (window.ODAK_AYARLA) window.ODAK_AYARLA(s.d);
      var o = gunMaddesi(olaylar, gi, s.k);
      if (!o) return false;
      olayaGit(o, true, true);
      return o.b;
    }
    var kunye = (window.DEVLETLER || []).filter(function (d) { return d.id === s.d; })[0];
    if (!kunye || !kunye.kronoloji || !kunye.kronoloji.length || !window.ODAK_AYARLA) return false;
    window.ODAK_AYARLA(s.d);
    if (!window.ODAK_GEZINTI || !ODAK_GEZINTI.aktif()) return false;
    var en = gunMaddesi(ODAK_GEZINTI.liste(), gi, s.k);
    if (!en) { window.ODAK_AYARLA("osmanli"); return false; }
    ODAK_GEZINTI.git(en);
    return en.b;
  }

  function baslat() {
    // Harita hazır olana kadar kullanıcı zamanı kendisi değiştirdiyse (çubuk, tarihe
    // git, madde tıklaması) onun seçimi ezilmez.
    if (typeof suanki !== "undefined" && typeof ACILIS_GUNU !== "undefined" && suanki !== ACILIS_GUNU) {
      console.log("Atlas açılış: kullanıcı zamanı zaten değiştirdi — açılış maddesi uygulanmadı");
      return;
    }
    var sec = ulkeBul();
    if (sec && sec.kapali) { console.log("Atlas açılış: ?acilis=yok — veri penceresinin başından açıldı"); return; }
    if (!sec) { console.warn("Atlas açılış: data/acilis_tablosu.js yüklenmedi"); return; }
    var sonuc = false;
    try { sonuc = uygula(sec); } catch (e) { console.error("Atlas açılış maddesi uygulanamadı:", e); }
    if (!sonuc && sec.ulke !== "DUNYA") {
      console.warn("Atlas açılış: " + sec.ulke + " satırının maddesi veride yok (" + sec.s.d + " · " + sec.s.t + ") — dünya satırına düşüldü");
      try { sonuc = uygula(satir("DUNYA", sec.yol)); } catch (e2) { console.error("Atlas açılış (dünya) uygulanamadı:", e2); }
    }
    console.log("Atlas açılış: " + sec.ulke + " (" + sec.yol + ") → " + (sonuc || "uygulanamadı"));
  }

  // ⚠️ PETEK GÖVDE YARIŞI (ölçüldü, 10 Kasım 2026): app.js `vassalIcSinirGuncelle`
  // PETEK_GOVDE'yi (petek_govde_ust.js) görünce PETEK_GOVDE_PARCA'yı (parça dosyası,
  // sonra çözülür) hazır sanıyor; arada gelen çağrı `PP[pi]`de çöküyor. Açılış
  // 1453 gibi tâbili bir güne atlayınca ilk yüklemede tetikleniyordu. Asıl düzeltme
  // app.js'te (iki yerde "ikisi de hazır mı"); o yapılana kadar açılış iki parçanın
  // da inmesini bekler. Gövde zaten tâbili her günde yüklenir — ek indirme yok.
  function govdeHazir() {
    return !!window.PETEK_GOVDE_PARCA ||
           (typeof _PETEK_GOVDE_YUK !== "undefined" && _PETEK_GOVDE_YUK.hata) ||
           typeof _petekGovdeYukle !== "function";
  }
  var bas = Date.now(), govdeIstendi = false;
  (function bekle() {
    if (Date.now() - bas > 600000) { console.warn("Atlas açılış: harita 10 dk'da hazır olmadı"); return; }
    // Yavaş bağlantı/arka plan sekmesinde açılış dakikaları bulabilir (ölçüldü: gizli
    // önizleme panelinde > 70 sn). Kullanıcı arada zamanı değiştirirse baslat() çekilir.
    if (!document.documentElement.classList.contains("atlas-hazir")) { setTimeout(bekle, 200); return; }
    if (!govdeHazir()) {
      if (!govdeIstendi && !window.PETEK_GOVDE) { govdeIstendi = true; _petekGovdeYukle(function () {}); }
      setTimeout(bekle, 200); return;
    }
    setTimeout(baslat, 50);
  })();
})();

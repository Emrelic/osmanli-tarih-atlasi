// ============================================================================
// ANTLAŞMA EŞLEŞMESİ — kronoloji maddesi ↔ antlaşma kaydı (ORTAK yardımcı)
// EMRELIC 13 Kasım 2026 (KASA/ANTLAŞMA-1113 onayı, denetim/ANTLASMA-OYNATICI-TASARIM-1113.md §3.2).
// Eskiden `js/antlasma_oynatici.js` ve `js/antlasma_harita.js` AYNI deseni (ad ⊂ b ∧ ±60 gün) iki ayrı
// kopyada taşıyordu; bu dosya oynatıcının kopyasını tek yere toplar. (antlasma_harita.js kendi
// ANTLASMA_HARITALARI eşleşmesini korur — veri kümesi ayrı, davranış DEĞİŞMEDİ.)
//
// Kural (öncelik sırasıyla):
//   ① maddede AÇIK bağ:  o.antlasma_id === kayıt.id             → eşleşir (ad/gün kuralı atlanır)
//   ② kayıtta anahtarlar: kayıt.anahtarlar[] (varsayılan [kayıt.ad]) HERHANGİ biri `b` içinde
//      VE |madde.t − kayıt.t| ≤ kayıt.pencere_gun (varsayılan 60)
// ÖLÇÜM (13 Kasım, 12 antlaşma, 18.631 madde): eski kural 59 doğru / 0 yanlış pozitif / 5 yanlış negatif
// (hepsi ad biçimi: «Karlofça —», «Küçük Kaynarca —», «Ayastefanos (San Stefano) …») → anahtarlar[] ile kapanır.
// Ek yardımcılar: gün farkı, ÖNCE/SONRA günü.
// ============================================================================
"use strict";
(function () {
  function gunNo(s) {
    try { if (window.GUN && typeof s === "string") return GUN.gun(s); } catch (e) { /* biçim dışı */ }
    var x = Date.parse(s);
    return isNaN(x) ? null : Math.round(x / 86400000);
  }
  function gunFarki(a, b) {
    var x = gunNo(a), y = gunNo(b);
    return (x == null || y == null) ? 1e9 : Math.abs(x - y);
  }
  function anahtarlar(k) {
    return (k.anahtarlar && k.anahtarlar.length) ? k.anahtarlar : [k.ad];
  }
  // o: kronoloji/olay maddesi ({b, t, antlasma_id?, b_tr?}); kayitlar: verilmezse window.ANTLASMA_MADDELERI
  function eslesen(o, kayitlar) {
    if (!o) return null;
    var liste = kayitlar || window.ANTLASMA_MADDELERI || [];
    if (o.antlasma_id) {
      for (var i = 0; i < liste.length; i++) if (liste[i].id === o.antlasma_id) return liste[i];
    }
    var b = String(o.b_tr || o.b || o.baslik || "");
    if (!b) return null;
    for (var j = 0; j < liste.length; j++) {
      var k = liste[j], pencere = (k.pencere_gun != null) ? k.pencere_gun : 60;
      if (k.eslesme_kipi === "acik") continue;     // düğme YALNIZ maddede açık antlasma_id varsa (aynı antlaşmayı anlatan çok dosyada tekrar düğme çıkmasın)
      if (gunFarki(o.t, k.t) > pencere) continue;
      var ak = anahtarlar(k);
      for (var m = 0; m < ak.length; m++) if (b.indexOf(ak[m]) >= 0) return k;
    }
    return null;
  }
  function gunEkle(s, n) {          // "YYYY-MM-DD" + n gün → "YYYY-MM-DD" (GUN varsa; yoksa UTC)
    try {
      if (window.GUN) return GUN.dizgi(GUN.gun(s) + n);
    } catch (e) { /* düş */ }
    var d = new Date(Date.parse(s) + n * 86400000);
    return isNaN(d.getTime()) ? s : d.toISOString().slice(0, 10);
  }
  // ÖNCE günü: kayıt.onceki_t ya da antlaşma gününden bir gün önce; SONRA günü: kayıt.sonra_t ya da antlaşma günü
  // Üç gün: SAVAŞ ÖNCESİ = kayıt.onceki_t (yoksa null: düğme çıkmaz) · ANTLAŞMA ÖNCESİ = t−1 · SONRA = sonra_t ya da t.
  // etkiOnceGun: "ÖNCE→SONRA" sahiplik etiketlerinin başlangıcı = savaş öncesi varsa o, yoksa t−1.
  function savasOncesiGun(k) { return k.onceki_t || null; }
  function oncekiGun(k) { return gunEkle(k.t, -1); }
  function sonrakiGun(k) { return k.sonra_t || k.t; }
  function etkiOnceGun(k) { return k.onceki_t || oncekiGun(k); }

  window.ANTLASMA_ESLESME = { eslesen: eslesen, gunFarki: gunFarki, anahtarlar: anahtarlar,
                              gunNo: gunNo, gunEkle: gunEkle, oncekiGun: oncekiGun, sonrakiGun: sonrakiGun,
                              savasOncesiGun: savasOncesiGun, etkiOnceGun: etkiOnceGun };
})();

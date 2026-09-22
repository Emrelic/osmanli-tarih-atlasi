// ============================================================================
// YAMA — js/app.js · EKOKUMA_TUR sözlüğüne bir kayıt EKLE
// Hazırlayan: EKOKUMA-0076-A · 23 Eylül 2026
// ============================================================================
// NİÇİN ŞART: parti 0076'nın H-0008 maddesi YENİ BİR EK OKUMA TÜRÜ istiyor
// ("bu ülke neden var" — küçük devletlerin niçin ayrı devlet olduğunu anlatan
// kategori). Kart dosyası hazır: denetim/EKOKUMA-0076-A-YAMA-ekokuma_p76b.js
// içinde bu türde DÖRT kart var (bunv-romanya-1859 · bunv-lubnan-1861 ·
// bunv-bulgaristan-1878 · bunv-sirbistan-karadag-1878).
//
// 🔴 YAMA UYGULANMAZSA: kayıtlar veride sağlam durur, çapaları tutar, ama
//    `ekOkumaButonlariGuncelle` yalnız `Object.keys(EKOKUMA_TUR)` üzerinde
//    döndüğü için TANIMADIĞI TÜRÜ SESSİZCE GEÇER — hiçbir buton/satır
//    çıkmaz ve kimse bir şey kaybolduğunu fark etmez. Aynı sınıf daha önce
//    `karsi-anlati` ile yaşandı (D099): on kart bağlıydı, buton hiç çıkmadı.
//    Ölçüldü: denetim/EKOKUMA-0076-A-SINA.py ④ → "TANIMSIZ 1 · 4 kart".
//
// UYGULAMA: js/app.js'te EKOKUMA_TUR sözlüğünün SON satırı şu anda
// `"karsi-anlati"` kaydıdır ve sonu VİRGÜLSÜZDÜR. O satıra virgül konur ve
// altına yeni kayıt eklenir. Kaynak havuzu ötekilerle AYNI (`_ekHavuz()`):
// `/^EKOKUMA_[A-Z0-9]+$/` regex'i yeni dosyayı da toplar, ayrı havuz GEREKMEZ.
//
// ── ESKİ (js/app.js, EKOKUMA_TUR sözlüğünün son satırı) ─────────────────────
//   "karsi-anlati":    { etiket: "🔄 Karşı Anlatı",      kaynak: function () { return _ekHavuz(); } }
// };
//
// ── YENİ ────────────────────────────────────────────────────────────────────
//   "karsi-anlati":    { etiket: "🔄 Karşı Anlatı",      kaynak: function () { return _ekHavuz(); } },
//   // 🆕 23 Eylül 2026 — parti 0076 / H-0008. Küçük ve "niçin ayrı" sorusu
//   // sorulan devletlerin doğuş dinamiğini anlatan kategori. Kaynağı
//   // ötekilerle aynı havuz; yalnız `tur` değeri ayırır.
//   "bu-ulke-neden-var": { etiket: "🌍 Bu ülke neden var?", kaynak: function () { return _ekHavuz(); } }
// };
// ============================================================================
//
// ⚠️ İKİNCİ ADIM (aynı commit'te gitmeli): kart dosyası data/ekokuma_p76b.js
//    olarak konulduktan sonra js/app.js `_EKOKUMA_DOSYA_ADLARI` dizisine
//    "ekokuma_p76b" satırı eklenir. index.html'e <script> satırı EKLENMEZ —
//    data/ekokuma*.js ana yüke katılmaz, app.js arka planda tembel yükler.
//    Veri dosyası ile yükleyici satırı AYRI commit'e düşerse yayın o dosya
//    için 404 verir.
//
// SINAMA (yama uygulandıktan sonra):
//   py denetim/EKOKUMA-0076-A-SINA.py   → ④ satırı "TANIMSIZ 0" demeli.
// ============================================================================

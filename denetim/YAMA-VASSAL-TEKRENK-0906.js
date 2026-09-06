// ═══════════════════════════════════════════════════════════════════════
// YAMA ÖNERİSİ — VASSAL "TEK RENK"  (Emre'nin isteğinin RENK YARISI)
// ───────────────────────────────────────────────────────────────────────
// KURE GORUNUM · 1.MURAT sevki kalem ① · 6 Eylül 2026
// Ölçüm: denetim/OLCUM-VASSAL-GORUNUM-0906.md
//
// 🔴 BU DOSYA UYGULANMADI. `js/app.js` Oturum 1'in (`§7`); devri
//    1.MURAT yapar. Koşu 6 sürerken `js/app.js` serbest ama sahiplik
//    kısıtı ayrı.
//
// 🔴 İSTEĞİN YALNIZ YARISI: Emre iki şey istedi —
//      ① renk: "vassal devletlerin rengini Osmanlı rengine boyayalım"   ← BU YAMA
//      ② etiket: "kırmızı üstünde beyaz + parantezde vassal/özerk/himaye" ← BLOKE
//    ②'nin ön koşulu bir VERİ alanı: `v:` dönemlerinin `k` alanı serbest
//    metin (41 ayrı değer, 29'u terim taşımıyor, 56 dönem BOŞ) ve
//    parantez slotu ZATEN hanedan/kişi taşıyor ("Mısır (Kavalalı)").
//    Terimi metinden ÇIKARMAK, `VERI-YAPISI.md:399`un üç kez yanıldığı
//    yoldur. ⇒ Bu yamada ② için YER TUTUCU YOK; olsaydı "altyapı hazır"
//    diye okunurdu.
//
// ── DEĞİŞEN TEK ŞEY ────────────────────────────────────────────────────
//    js/app.js:1012  vassal-dolgu  fill-color  "#b2384a" → OSMANLI_KIRMIZI
//
// ── 🔴 BİLİNEREK KABUL EDİLEN: İÇ HAT KALIYOR ──────────────────────────
// `osmanli-cizgi` (katman sırası 16) `vassal-dolgu`nun (12) ÜSTÜNDE.
// Dolgu aynı renk olsa bile iki gövde arasındaki hat 1,8 px `#4d0713`
// çizgiyle çizilmeye devam eder.
// 🟢 ÖLÇÜLDÜ (canlı sayfa, 1683-07-14): vassal gövdesi çevresinde
//    11.449 nokta yoklandı, `osmanli-cizgi` 260'ında RENDER EDİLİYOR.
// ⇒ "DİKİŞSİZ tek gövde" isteniyorsa BU YAMA YETMEZ ve tarayıcıda
//    YAPILAMAZ (`app.js:993`: "gerçek birleşim tarayıcıda hesaplanamaz").
//    Karar YORUM 1 (aynı dolgu, hat kalır) ise yama yeterli.
// ═══════════════════════════════════════════════════════════════════════

// Osmanlı doğrudan toprağının rengi — `osmanli-dolgu` ile AYNI SABİT.
// 🔵 İkisi ayrı yazılırsa AYRIŞIR (bu projede "iki otorite doğar ve
//    ayrışır" dersi). Tek sabit, iki katman.
var OSMANLI_KIRMIZI = "#8e0b22";

// ── js/app.js:1007-1013 — DEĞİŞTİRİLECEK BLOK ─────────────────────────
harita.addSource("vassal", agirKaynak());
// ⚠️ TARİHÇE — bu renk ÜÇÜNCÜ kez değişiyor ve üçü de Emre'nin isteği:
//    #d4707d @0.52  →  #b2384a @1  →  OSMANLI_KIRMIZI (tek renk)
//    ① "kırmızı ve pembe olacak şekilde fark büyük, ayrı devlet gibi
//       görünüyorlar"                              (ton yakınlaştırıldı)
//    ② "devlet tek renk olsun"                     (bu adım)
//    ⇒ Ayrı bir vassal hex'i ARTIK YOK; tâbi toprağı doğrudan topraktan
//      ayıran tek şey `osmanli-cizgi` hattı ve ETİKET olacak.
harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
  paint: { "fill-color": OSMANLI_KIRMIZI, "fill-opacity": 1 } });

// ── AYNI SABİTİ osmanli-dolgu DA KULLANMALI (ayrışmasın diye) ──────────
// js/app.js:1038 — "#8e0b22" yerine:
harita.addLayer({ id: "osmanli-dolgu", type: "fill", source: "osmanli",
  paint: { "fill-color": OSMANLI_KIRMIZI, "fill-opacity": 1 } });

// 🔵 `himaye-dolgu` DOKUNULMADI: onun varsayılanı `["coalesce",
//    ["get","renk"], "#b2384a"]` ve himaye AYRI bir siyasî durum —
//    Emre'nin cümlesi "vassal" diyor. Himayeyi de birleştirmek AYRI bir
//    karar; bu yama onu VERMİYOR. (Varsayılanı `#b2384a` kaldığı için
//    artık hiçbir katmanla eşleşmiyor — bilinçli bırakıldı, çünkü o
//    varsayılan yalnız `renk` alanı BOŞ olduğunda devreye giriyor.)

// ── İNDİKTEN SONRA KOŞULACAK SINAV ─────────────────────────────────────
// ① Bir tâbi gövdesi ile Osmanlı gövdesi AYNI dolguda mı:
//    queryRenderedFeatures ile iki nokta seç, fill-color'ları eşit olmalı.
// ② 🔴 İÇ HAT HÂLÂ ÇİZİLİYOR OLMALI — bu bir kusur değil, bilinen sonuç.
//    Kaybolduysa `osmanli-cizgi` yanlışlıkla düşürülmüş demektir.
// ③ `imparatorluk-hale` dış çerçeveyi HÂLÂ ikisinin etrafından geçirmeli
//    (hatalar 10 md.1'in karşılığı) — hale dolguların ALTINDA, dokunulmadı.
// ④ 🔴 GEÇME YOLU: tâbi dönemi OLMAYAN bir tarihte (`v:` boş) hiçbir şey
//    değişmemeli — `vassal` kaynağı boş, katman çizmez.
// ⚪ ÖLÇÜLMEDİ: sonucun GÖRSEL kabulü. Ekran görüntüsü bu oturumda üç kez
//    zaman aşımına uğradı; renk eşitliği sayısal olarak doğrulanabilir
//    ama "Emre beğenir mi" ölçülemez.

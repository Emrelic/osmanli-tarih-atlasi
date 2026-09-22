// KRONO-0076-C — UYGULANMAYA HAZIR YAMA (koordinatör uygular; ORTAK-0076 §3)
// Uygulayıcı: `py denetim/KRONO-0076-C-YAMA-uygula.py --uygula`
//             (önizleme için bayraksız koştur — hiçbir şeye dokunmaz)
// ⚠️ Bunlar PARTİ maddelerinin talebi DEĞİLDİR; 17 maddeyi ölçerken yan
//    ürün olarak bulunan, KRONO ailesine ait üç kusurdur.
// 🔴 Uygulamadan sonra `py arac/denetle.py` — Değişmez 2 kapısı.

/* ─────────────────────────────────────────────────────────────────────
   YAMA 1 — data/olaylar.js · §8 ihlali: AY hassasiyetli `t:`, gün BİLİNİYOR
   Ölçüm : t:"1911-09" ayın 1'ine genişler; `gun:` alanı "29 Eylül 1911" diyor.
           CLAUDE.md §8: "Kronoloji maddelerinde gün yaz" — ay hassasiyetli t,
           gün hassasiyetli yerleşim değişimlerinden ÖNCE sıralanır.
   Kaynak : TDV `trablusgarp-savasi`, gövde AYNEN: "29 Eylül'de ilân edilen savaş"
            (23 Eylül 2026'da çekildi). Gün UYDURULMADI, kaynaktan okundu.
   Ters yön (D206): eski konumun (1911-09-01) kapsayıp yeni konumun
            (1911-09-29) kapsamadığı yerleşim kırılması = 0 → Değişmez 2 riski YOK.
─────────────────────────────────────────────────────────────────────── */
// ESKİ: { t:"1911-09", k:"savas", etiket:["savas","antlasma",…], b:"Trablusgarp Savaşı",
// YENİ: { t:"1911-09-29", k:"savas", etiket:["savas","antlasma",…], b:"Trablusgarp Savaşı",

/* ─────────────────────────────────────────────────────────────────────
   YAMA 2 — data/olaylar.js · §8 ihlali: AY hassasiyetli `t:`, olay bir ARALIK
   Ölçüm : t:"1914-11" · gun:"29 Ekim – 11 Kasım 1914". Bu madde tek bir güne
           değil bir SÜREÇE karşılık geliyor.
   🔴 İKİ SEÇENEK — hüküm KOORDİNATÖRÜN, gerekçeleriyle:
      (a) ÖNERİLEN → t:"1914-11-01"
          Biçimi §8'e uydurur, sıralamayı HİÇ değiştirmez (t:"1914-11" zaten
          1 Kasım'a genişliyordu), yeni bir TARİH İDDİASI doğurmaz (D210).
      (b) t:"1914-11-11" (Osmanlı'nın savaşa resmen girişi)
          Anlamca daha doğru olabilir AMA bu bir GÜN İDDİASIDIR ve bu oturumda
          kaynağa sorulmadı → D210 gereği kaynaksız yazılmaz.
   Ters yön (D206): her iki seçenekte de açıkta kalan kırılma = 0.
   Uygulayıcı varsayılanı (a)'dır; (b) için `--gun-11` bayrağı var.
─────────────────────────────────────────────────────────────────────── */
// ESKİ: { t:"1914-11", k:"savas", etiket:["savas","ekonomi",…], b:"I. Dünya Savaşı'na giriş",
// YENİ: { t:"1914-11-01", k:"savas", etiket:["savas","ekonomi",…], b:"I. Dünya Savaşı'na giriş",

/* ─────────────────────────────────────────────────────────────────────
   YAMA 3 — data/kronoloji_italya.js · KAYNAK alanı: atlas kendini kaynak
            göstermiş + ÇELİŞKİ ASLINDA YOK (D211 tuzak ②: canlı slug, yanlış madde)
   Ölçüm : Kayıt (t:"1911-09-29", b:"Trablusgarp Savaşı'nın ilanı") `kaynak:`
           alanında AYNEN şunu taşıyor: dayanak `data/devletler.js`, ve
           "TDV `trablusgarp` … farklı bir tarih (1 Eylül 1911) veriyor —
           İKİ KAYNAK ÇELİŞTİ … çelişki KOORDİNATÖRE bildirilecek".
           ① `data/devletler.js` ATLASIN KENDİSİDİR; Emre'nin 13 Eylül hükmü
              (CLAUDE.md §4): atlas kaydı DAYANAK OLAMAZ.
           ② Çelişki SAHTE: `trablusgarp` TDV'de YER maddesi; savaşın maddesi
              `trablusgarp-savasi`. Doğru slug'ın gövdesi (23 Eylül 2026)
              "29 Eylül'de ilân edilen savaş" diyor. ⇒ TDV ile atlas ÇELİŞMİYOR.
   Sonuç : TARİH DEĞİŞMİYOR (1911-09-29 doğru). Yalnız `kaynak:` düzeliyor ve
           koordinatöre açık bırakılmış çelişki KAPANIYOR.
─────────────────────────────────────────────────────────────────────── */
// ESKİ kaynak: "data/devletler.js `italya` embedded kronoloji: … çelişki KOORDİNATÖRE bildirilecek"
// YENİ kaynak: "TDV `trablusgarp-savasi`, gövde: \"29 Eylül'de ilân edilen savaş\" · hassasiyet: GÜN · 23 Eylül 2026'da KRONO-0076-C çekti; eski kayıttaki \"1 Eylül 1911\" çelişkisi YANLIŞ SLUG'DAN doğmuştu (`trablusgarp` = yer maddesi), çelişki KAPANDI"

/* ─────────────────────────────────────────────────────────────────────
   YAMA DEĞİL — ÖLÇÜLDÜ, DOKUNULMADI (kayda geçsin diye)
   data/kronoloji_italya.js · t:"1911-10-05" b:"Trablus'un işgali"
   `kaynak:"bulunamadı — gün YAKLAŞIK…"`. TDV `trablusgarp-savasi` "Trablusgarp
   şehri 9 Ekim'de teslim olmak zorunda kaldı" diyor; AMA bu cümle TESLİMİ
   tarihlendiriyor, kaydın gövdesi ise ÇIKARMAYI anlatıyor (D211 ⑧: rakamı
   taşıyan cümlenin neyi tarihlediği okunur). İki ayrı olgu ⇒ 5 Ekim
   DEĞİŞTİRİLMEDİ, `kaynak:"bulunamadı"` OLDUĞU GİBİ BIRAKILDI.
   Teslim (9 Ekim) zaten iki ayrı kayıtta doğru duruyor:
   data/olaylar_ek9.js t:"1911-10-09" · data/kronoloji_kuzeyafrika.js t:"1911-10-09".
─────────────────────────────────────────────────────────────────────── */

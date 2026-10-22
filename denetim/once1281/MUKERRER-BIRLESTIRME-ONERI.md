# MÜKERRER KÜNYE ÇİFTLERİ — BİRLEŞTİRME ÖNERİSİ (UYGULAMA YOK)

Ölçüm: `py denetim/once1281/referans_say.py` (data/ + js/ + index.html; paket_*.js hariç, çünkü üretilmiş). Ham: `MUKERRER-REFERANS.json`.
Kural: künye `id`'si DEĞİŞTİRİLMEZ (VERI-YAPISI.md) — birleştirme = tutulacak id'ye diğerinin kaynaklı bilgisini katıp, çıkarılacak id'nin referanslarını tutulana yönlendirmek. Bu iş `data/` yazımı olduğu için ilgili era oturumunda ve Emre onayıyla yapılır; değişiklikten sonra `denetle` (Değişmez 2: kronoloji maddeleri düşmemeli), `renk_olc`, `paketle yenile` zorunlu (şu an HAVVA'da iniş sürerken koşturulmaz).

| # | tut | çıkar | gerekçe | taşınacak referans | tarih/alan kararı |
|---|---|---|---|---|---|
| 1 | `tikal-mutul` | `tikal-mutal` | Mutul: krallık türü, gün hassasiyetli t (0869-08-13), 9 kronoloji maddesi; mutal: 0869-01-01, 5 madde | harici referans YOK (yalnız devletler.js) | iki künyenin kronoloji maddeleri birleşir (mükerrer olaylar tekilleşir) |
| 2 | `zapotek-monte-alban` | `monte-alban-zapotek` | `zapotek-monte-alban`ın harici referansı var (yerlesimler_mo_amerika.js ×2, olaylar_arkeoloji_gecis.js ×1); öbürünün yok | 0 taşıma (çıkarılanın harici referansı yok) | f: -0499 şehir kuruluşu; Zapotek devleti Redmond & Spencer'a göre ~MÖ 100 (AMERIKA_REF.json): f -0099'a çek ya da iki dilim (şehir öncesi + devlet) |
| 3 | `tiwanaku` | `tiwanaku-devleti` | t 1150 ↔ 1010; Moseley çöküş ~1100 (AMERIKA_REF) → t ≈ 1100; tür: `krallik` ↔ `imparatorluk` kaynakla seçilmeli | harici referans YOK | t 1100 öneri |
| 4 | `chimu-krallik` | `chimu` | chimu-krallik 32 referans (kronoloji_sinir_guney_g8 ×10, yerlesimler_amerika ×5, ufuk_bantlari_ust ×3, yer_yama ×3…); chimu 12 (devletler.js ×9 = kronoloji maddeleri, kronoloji_cok_once1281_amerika2.js ×3) | kronoloji_cok_once1281_amerika2.js ×3 + devletler.js'teki chimu kronoloji maddeleri | f 1000 yalnız dönem sınırı, t 1470 Moseley ile doğrulandı |
| 5 | `tibet-imparatorlugu` | `tubo-tibet-imparatorlugu` | f 0629, t 0842, başkent Lhasa aynı; Tang shu'da tek 吐蕃 (CIN_RAPOR2). İki künyenin de 9'ar harici referansı aynı dosyada (kronoloji_cok_ms1_1000_asya.js) | kronoloji_cok_ms1_1000_asya.js ×9 | ad: «Tibet (Tubo/Tufan) İmparatorluğu — Yarlung» uzun ad korunabilir |
| 6 | `teuton-devleti` | `teuton-sovalyeleri` | 19 referans (ufuk_bantlari_ust ×6, yerlesimler ×4+1, devlet_harita_ust ×1) ve 13 kronoloji maddesi; öbürü 16 referans (kronoloji_cok_once1281_avrupa2.js ×10, kronoloji_almanya.js ×4) | kronoloji_cok_once1281_avrupa2.js ×10, kronoloji_almanya.js ×4 | aynı 1230–1525-04-08; bolge: orta-avrupa ↔ dogu-avrupa (Prusya) karar gerek; Altın Bulla Rimini Mart 1226 / Ceprano 1230 (ORTAAV_RAPOR2) |
| 7 | `yenisey-kirgiz` | `kirgiz-yenisey` | kirgiz-yenisey yalnız Ötüken evresi (840–920); yenisey-kirgiz 840–1207 (TDV Kırgızlar: 840 Uygur'u yıkar, 920 Kitan, 1207 Cengiz'e itaat). bolge: sibirya-bozkir | kronoloji_cok_ms1_1000_ortadogu.js ×5 | f 0840, t 1207 (BOZKIR_RAPOR2) |
| 8 | `della-scala` | `verona-scaliger` | della-scala 29 referans; verona-scaliger 2 (devletler.js, yerlesimler_avrupa.js ×1). Treccani: signoria scaligera 1277; 1262 hiçbir kaynakta yok (ITALYA_RAPOR2) | yerlesimler_avrupa.js ×1 | f 1277, t 1387 (Verona Visconti'ye 1387) |

## Başka mükerrer/örtüşme adayları (öneri değil, karar bekleyen)
- `ogedey-ulusu` ↔ `ogedey-ulusu-kaydu` (BOZKIR_RAPOR2: aynı polity).
- `hamdani-halep` t 1004 ↔ Lü'lü' kaydı f 1002 örtüşmesi; Halep Lü'lü'sü için yeni künye (mevcut `lului` Musul'dur).
- `bohemya` f 1000 ↔ `buyuk-moravya` t 907 (895–907 örtüşme: bohemya f 895 önerisiyle).
- `makedonya-krallik`, `antigonid-makedonya`, `iskender-imparatorlugu` Makedonya'da örtüşüyor.
- `taife-emirligi` ↔ `taifa-emirligi` tür yazımı (granada-ziriler / sevilla-abbadiler, toledo-zunnunler, zaragoza-hudiler).

## Önerilen sıra
Önce 1, 3, 7, 8 (harici referansı en az: yalnız devletler.js ya da 1–5 satır); sonra 2, 4, 5; en son 6 (bolge kararı). Her adım tek commit; arada `denetle` temiz çıkış (0) beklenir.

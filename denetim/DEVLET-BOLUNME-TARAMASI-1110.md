# Devlet bölünmesi / ad-değişimi taraması — 10 Kasım 2026

Ölçüm: `origin/main` (345ae2345) üstü worktree, `girdi.yukle()` 5604 yerleşim, 2267 künye, 27 080 `s:`/`isg:` dönemi.
Yöntem: (A) aynı anda aktif + ad-kökü ortak + farklı boya; (B) ozet `[[bağ]]` grafı ile eşzamanlılık; (C) yerleşim düzeyinde ardışık devir (≤400 gün) + farklı boya + ad/bağ ilişkisi; (D) künye ömrü aşımı.

## 1. Eşzamanlı "aynı devlet iki-üç renk" — GERÇEK HATA ÇIKMADI
Balkanlar 1200–1430 ölçüldü: Sırp alt künyeleri (`sirbistan-nemanjic`, `sirp-despotlugu`, `sirbistan`) ve Bulgar alt künyeleri
(`bulgar-carligi`, `bulgaristan`) `harita:` anahtarıyla TEK renkte birleşik. Tırnova/Vidin ayrımı (1371–1396) tarihî bölünmeye uygun.
Kalan eşzamanlı çiftler (kökü ortak) incelendi, hepsi tarihî gerçek ayrım: Doğu/Batı Karahanlı, Doğu/Batı Çalukya, Doğu/Batı Frank,
Suriye/Irak/Kirman/Büyük Selçuklu, Anadolu Selçuklu, kolonilerin ana devletle ayrı renkte olması (Hollanda/İngiliz/Fransız/Portekiz/Alman).

## 2. Düzeltilen
- **Monako 1793-01-03→1814-05-30**: `d:"fransa"` (künye 1792-09-22'de bitiyor) → `fransa-cumhuriyet`. Ana kara lacivert, Monako sarı görünüyordu.

## 3. Adı değişince rengi değişen SÜREKLİ devletler — KARAR İSTER (veri değişikliği + HAVVA koşusu gerektirir)
Her biri `harita:` ortak anahtarına bağlanırsa tek renk olur. Radikal rejim değişimi OLMAYANLAR (öneri: birleştir):

| Geçiş | Yıl | Yerleşim | Not |
|---|---|---|---|
| isvec-birlik-oncesi → isvec | 1523 | 42 | aynı krallık, Kalmar sonrası |
| moskova → rusya | 1547 | 78 | unvan değişimi (Knez→Çar), aynı devlet |
| savoya → sardinya-piyemonte | 1720 | 5 | aynı hanedan/devlet, unvan |
| brandenburg-prusya → prusya | 1701 | — | krallık unvanı |
| nguyen-beyligi → nguyen-hanedani | 1802 | 7 | aynı ev |
| luksemburg-kontlugu → luksemburg-dukaligi | 1354 | 8 | kontluk→dükalık |
| tibet → tibet-ganden-phodrang | 1642 | 6 | |
| angkor-kmer → kamboc-kralligi | 1431 | 19 | Khmer sürekliliği, başkent değişimi |
| makdisu-sultanligi → somali | 1500 | 5 | |
| sirbistan-kralligi → yugoslavya | 1918 | 50 | zaten bilerek ayrı (Emre tercihi tipi) |

Bilerek ayrı kabul edilenler (Emre örneği gibi): Rusya→Geçici Hükümet→Sovyet; Fransa→Cumhuriyet; Kaçar→İran; Brezilya İmp.→Cumhuriyet; Ming→Güney Ming.

Tartışmalı: Eyyûbî ana künye + Halep/Hama/Hısnıkeyfa/Yemen kolları ayrı 5 renk (aile konfederasyonu); Tuareg alt konfederasyonları (6 renk); `norvec-kralligi` (→1537) ile `norvec` (1905→) ayrı renk (arada başka sahip, sorun değil).

## 4. Künye ömrü aşımı (bilinen borç, `BEKLENEN_ASAN`)
40 künye, 286 dönem künye f/t dışına taşıyor. En büyükleri: zend (102, künye f 1751 / dönem 1747), adal (36), somali (21), napoli (14), umman (14).
Yeni sayı değil, mevcut tavanın içeriği; yalnız `fransa`/Monako kapatıldı.

## 5. Bölge bölge tarama (2. tur) ve UYGULANAN birleştirmeler
Bölgeler: Britanya, İber, Fransa, İtalya, İskandinavya, Almanya+Avusturya+Macaristan+Polonya, Polonya-Ukrayna-Belarus-Baltık,
Anadolu, Arabistan+Levant+Irak, İran, Hindistan (`denetim/bolge_zaman.py`; `d:`/`v:` Osmanlı dahil).
Sonuç: aynı anda "tek devlet çok renk" gerçek hatası yok. Gereksiz ad-atlaması 14 künye `harita:` ortak anahtarına bağlandı
(`denetim/birlestir_harita_1110.py`): isvec-birlik-oncesi→isvec, moskova→rusya, floransa→toskana, savoya→sardinya,
brandenburg-markgrafligi/brandenburg-prusya→prusya, nguyen-beyligi→nguyen-hanedani, luksemburg-kontlugu→luksemburg-dukaligi,
visconti→milanoduka, avusturya-marki/avusturya-dukaligi→avusturya, bohemya-dukaligi→bohemya, norvec-1814/norvec-isvec-birligi→norvec.
Bilerek birleştirilmeyen: makdisu→somali, tibet, angkor→kamboç, Eyyûbî kolları, Tuareg, kiev-knezligi-litvanya, Portekiz (İber birliği).
Harita değişimi HAVVA koşusundan sonra görünür. Ölçülemeyenler: ad kökü ortak olmayan çiftler, üretilmiş haritanın gözle kontrolü.

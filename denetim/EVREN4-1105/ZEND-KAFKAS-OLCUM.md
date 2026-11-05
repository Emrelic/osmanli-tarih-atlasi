# Zend / Kafkas taraması — ilk ölçüm (KASA SALI, gece-110)

> 🔴 **DÜZELTME (gece-113):** ilk tarama yalnız `ad:"…"` biçimini okuyordu; `"ad": "…"` (JSON biçimi) dosyalarını ve `s: [` boşluklu yazımı kaçırıyordu.
> - Düzeltilmiş tarama (`zend_tara2.py`, iki biçim): **85 dilim, 33 yerleşim — zend 26, kacar 26, afsar 33.**
> - Eklenen 3 yerleşim, hepsi `data/yerlesimler_sinir_kuzey.js`te: **Norapat, Beri, Kliçatak (Suser)**. Üçünde de zend 1747 → 1794 ve kacar 1794 → 1828-02-22 var; Revan Hanlığı bölgesi, aday künye `revan-hanligi`.
> - Kuzeydeki sayı 11'den **14**'e çıkar. Aşağıdaki sayılar ilk taramanındır; `ZEND-KAFKAS-TARAMA.tsv` güncellenmiş hâlidir.
> - Satırları tek satırda olmayan 227 kayıt (çoğu a78_amerika) okunmadı; kutuya düşen yoktur (elle bakıldı: yerlesimler.js'teki 3 çok satırlı kayıt Niş, Bingazi, Derne).

Bu dosya yalnız sayımdır; kaynak araştırması LAB v2 bittikten sonra yapılacak. Veriye dokunulmadı.

- **Ölçüm yeri:** KASA, kasa-1104-kronoloji ağacı (origin/main ile eş).
- **Ölçüm betiği:** arac/girdi.py GIRDI_DOSYALARI, kutu 37.5–43.5 K × 43.0–50.8 D.
- **Ham satırlar:** `ZEND-KAFKAS-TARAMA.tsv`. Kutudaki `afsar`/`zend`/`kacar` dilimlerinden t > 1747 ve f < 1810 olanlar (74 dilim, 28 yerleşim).

## Sayılar

- **`zend` dilimi: 23 yerleşimde 23 dilim**, hepsi `s:` katmanında, 1747-06-20 → 1794-01-01.
- 🔴 **Hayalet:** `zend` künyesi f **1751-01-01** (devletler.js:2617). Bu yüzden 23 dilimin hepsi 1747-06-20 → 1751-01-01 arasında künye dışında kalıyor.
- **`afsar`:** 28 dilim, 1736-03-08 → 1747-06-20. Nadir Şah dönemi; künye 1736-03-08 → 1796. Sahiplik bakımından olağan, bu taramada sorun yok.
- **`kacar`:** 23 dilim, hepsi **1794-01-01** başlangıçlı (yıl hassasiyeti).
  - Aras'ın kuzeyindeki 11 yerleşimde t 1813-10-24'tür (Gülistan).
  - Ama Rusya Gence'yi 1804'te, Şeki'yi 1805'te, Bakü, Derbend ve Kuba'yı 1806'da aldı. Bu dilimler de sınanmalı. EMRELİC'in istediği kapsamın dışında, ek bulgu olarak verildi.

## Zend dilimleri: kuzey ve güney

**Aras'ın kuzeyi ve Dağıstan (11).** Doğru sahip adayı yerel hanlıktır:

| yerleşim | satır | aday künye | künye f–t |
|---|---|---|---|
| Şamahı | 805 | sirvan-hanligi | 1748-01-01 → 1820 |
| Kabala | 825 | sirvan-hanligi ya da seki-hanligi (sınanacak) | |
| Ereş | 826 | seki-hanligi (sınanacak) | 1743 → 1819 |
| Bakü | 807 | baku-hanligi | 1747-01-01 → 1806-10-03 |
| Derbend | 809 | derbent-hanligi, 1765'ten sonra Kuba | 1747-01-01 → 1806 |
| Şâbüran | 827 | kuba-hanligi | 1735 → 1813-10-24 |
| Mahmudâbâd | 828 | salyan ya da talış (Kura yakası sorusu) | |
| Salyan | 2243 | **salyan-hanligi YOK** (1768'den sonra Kuba'ya bağlı) | |
| Berde (Karabağ) | 2254 | karabag-hanligi | 1747-01-01 → 1822 |
| Ordubad | 2258 | nahcivan-hanligi | 1747-01-01 → 1828-02-22 |
| Tarki (Tarku) | 774 | **Tarki Şamhallığı: künye yok.** kumuk-samhalligi t 1726-01-01'de bitiyor; künye genişletme ya da ardıl künye adayı | |

**Aras'ın güneyi, İran Azerbaycanı (12):** Tebriz, Erdebil, Urmiye, Hoy, Selmâs, Merend, Culfa, Ahar, Sarâb, Mâku, Halhâl, Astara.
- Kerim Han'ın Azerbaycan'a hâkimiyeti 1762-63'ten sonradır (Âzâd Han'a karşı; Urmiye 1763). 1747-1762 arası Âzâd Han, Afşar ardılları ve yerel hanlar dönemidir.
- Bu güney dilimleri de en az hayalet aralığı nedeniyle düzeltilecek. 1751-1762 arası için doğru sahip kaynakla belirlenmeli.
- Erdebil, Hoy, Urmiye ve Karadağ'ın yerel hanlıkları künye adayıdır.

## Künyesi olanlar (zend dilimi YOK, zaten hanlıkta)

Gence, Nahçıvan, Kuba, Şeki ve Lenkeran'da `afsar`'dan sonra doğrudan hanlık var; bu yerleşimler doğru.
Ölçülen künyeler: baku, derbent, kuba, sirvan, seki, karabag, gence, nahcivan, revan, talis hanlıkları var.

**Künye adayları (LAB SALI'ya):**
- Salyan hanlığı.
- Tarki Şamhallığı: kumuk-samhalligi'nin genişletilmesi mi, ardıl künye mi?
- Güney için Urmiye, Hoy, Karadağ ve Erdebil hanlıkları (kaynakla).

## Sonraki adım (LAB v2'den sonra)

Her yerleşim için şunlar TDV, Iranica ve Bournoutian'dan kaynakla belirlenecek: hanlığa geçiş günü (1747 Nadir'in ölümü mü, hanın kendi günü mü), varsa Zend'e bağlılık dilimi (`v:` olarak) ve 1794 sonrası Kaçar/Rus geçişleri.
Uygulamayı KASA PAZAR yapar.

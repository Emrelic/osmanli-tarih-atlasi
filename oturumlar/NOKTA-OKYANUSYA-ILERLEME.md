<!-- DURUM: CALISIYORUM | 2026-08-16 | 6 nokta yazildi (2 kur:'lu sehir + 4 kabile dolgu), devam ediyor -->

# NOKTA OKYANUSYA — İLERLEME

**Kimlik:** `local_9d907ce9-25a6-4bfd-96f5-e944cafb32cf` · **Görev:** M-0128/M-0140, kesin tebliğ M-0161/M-0162.
**Dosyam:** `data/yerlesimler_ek30.js` (bu oturumun ürettiği tek dosya, henüz `girdi.py`ye bağlı değil).

## İş 0 — ölçüm (koordinatörün M-0109/M-0111'deki sayılarını kendim doğruladım, B10)

`girdi.yukle()` ile 2527 noktalık tüm veri tarandı, bölge kutularıyla süzüldü:
```
Avustralya ANAKARASI    0 gerçek nokta   (M-0111'in "Avustralya 2" sayısı YANLIŞTI —
                          o 2 nokta Kupang/Rote, coğrafi olarak ENDONEZYA/Timor)
Yeni Zelanda             0 nokta
Yeni Gine                9 nokta — 2 gerçek sahipli (Jayapura, Manokwari, Hollanda dönemi)
                          + 7 kasıtlı_boşluk (Port Moresby, Madang, Finschhafen — devletsiz;
                          4 iç bölge dolgusu — kabile). HEPSİNİN cinsi ZATEN yazılı.
Polinezya/Hawaii/Fiji/Tonga   0 nokta (hiç veri yok)
```
Bu ölçüm önceki oturumun (eski adıyla OPUS HAZIR KITA 8, M-0109) bulgularıyla birebir örtüşüyor.

## İş 1 — 1281 kesiti + kolonyal serpme: İKİNCİ PARTİ (6 nokta, kümülatif)

```
Sydney     kur:1788-01-26   s: ingiltere(1788-1901) → avustralya(1901-1923)
Auckland   kur:1840-09-18   s: yeni-zelanda(1840-1923)
Avustralya İç Kesimi (Arrernte bölgesi)      kasitli_bosluk:true bos:"kabile"
Aotearoa Māori Yerleşimi (Kuzey Adası içi)   kur:1300-01-01 kasitli_bosluk:true bos:"kabile"
Yap                                          kasitli_bosluk:true bos:"kabile" (sawey haraç ağı, merkezi devlet yok)
Rapa Nui (Paskalya Adası)                    kur:1200-01-01 kasitli_bosluk:true bos:"kabile" (11 mata/kabile, 1722'ye kadar tek devlet yok)
```

🟢 **Bir ölçüm çürüdü, iyi yönde:** ilk raporumda `kaynak` alanının `girdi.py`nin
`BILINEN_ALANLAR`ında kayıtlı olmadığını bildirmiştim (M-0171). İkinci doğrulamada
(bu partiden sonra) alan artık KAYITLI görünüyor (`girdi.py:466`) — muhtemelen
koordinatörün M-0169/M-0173 kabul-kapısı düzeltme turunda eklendi. Şimdi 6/6 kayıt
**hiçbir bilinmeyen alan taşımadan** temiz geçiyor.

**Kaynaklar (şartname §5, kurumsal akademik — TDV Okyanusya'yı kapsamıyor):**
- Sydney: Australian Dictionary of Biography, "Arthur Phillip: 1788. The Foundation Year" (adb.anu.edu.au/essay/21); State Library of NSW First Fleet kayıtları.
- Auckland: Te Ara Encyclopedia of New Zealand, "The founding of Auckland: 1840–1869" (teara.govt.nz/en/auckland-region/page-7).
- Aotearoa/Māori: Te Ara, "Māori arrival and settlement" + "When was New Zealand first settled?" (permanent settlement ~1300 CE, radyokarbon + soy ağacı yöntemleriyle çapraz doğrulanmış).
- Aborijin Avustralya: AIATSIS, "Map of Indigenous Australia" + "Our Societies" (aiatsis.gov.au) — merkezî devlet değil, klan/soy temelli örgütlenme.
- Yap: Britannica, "Micronesian culture — Social hierarchy and political organization" (sawey haraç ağı, Gagil şefinin nodal konumu).
- Rapa Nui: Journal of Pacific Archaeology, "Refining the Chronology of Rapa Nui Settlement"; PLOS ONE, "Rapa Nui monument (ahu) locations" — hakemli akademik radyokarbon çalışmaları.

**Doğrulama (yazdıktan sonra geri okuma, `girdi.oku_dosya()` ile):**
```
6/6 kayıt sorunsuz ayrıştı
3 km kuralı: 6/6 TEMİZ — en yakın komşu 1240-4350 km arası (Manokwari/Port Moresby)
BİLİNMEYEN ALAN: 0 — kaynak alanı artık girdi.py'de KAYITLI (yukarı bak, ⑤'ten önce)
```

## 🔴 BİLİNÇLİ OLARAK ATLADIĞIM ÜÇ KALEM — künye/karar gerektiriyor

```
Tuʻi Tonga İmparatorluğu   1200-1845 arası Tonga/Fiji/Samoa/Niue üzerinde tribute
                           alan gerçek bir "imparatorluk" (akademik terim) —
                           bos:"kabile" YAZMAK YANLIŞ OLURDU, kaynak onu devlet
                           gibi tarif ediyor. `devletler.js`de KÜNYE YOK
                           (yalnız 1845 sonrası "tonga-kralligi" var). Künye açılsın mı?
Hawaii öncesi hanedanlar   1795 öncesi (Kamehameha birleşmesi öncesi) ayrı ada
                           krallıkları vardı — devletler.js'te yalnız 1795 sonrası
                           "hawaii-kralligi" var. Aynı künye sorunu.
Suva / Fiji                kur:1849 (şartnamede verilmiş) ama `devletler.js`de
                           "fiji" künyesi YOK. Künye gerekmeden yazamam.
```
Şartname §5: "künye gerekiyorsa KOORDİNATÖRE SÖYLE." Söylüyorum — üçü de bekliyor.

## Bitiş ölçütü — sayıyla (şartname §7 formatı)
**"4 nokta yazıldı, 4'ünde kaynak/kur var, 0 `bulunamadı`; 2 boşluk kaydı (2 kabile).
Üç kalem (Tuʻi Tonga · Hawaii öncesi · Fiji) künye eksikliğinden BEKLEMEDE.
`py arac/denetle.py` henüz koşmadım — dosya `girdi.py`ye bağlı olmadığı için
Değişmez 1/5'i etkilemiyor, ama commit'ten önce koşturacağım."**

Devam ediyorum: Yap-Palau taş parası ağı ve Rapa Nui için kaynak taraması sürüyor.

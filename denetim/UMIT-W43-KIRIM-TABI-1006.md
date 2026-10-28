# UMIT-W43-KIRIM-TABI-1006 — Kırım'ın 12 sessiz maddesi: tâbi mi, delik mi?

Ölçülen commit: **origin/main `d0877829`**. Ağaç `C:\atlas-w43` (detached), iş bitince kaldırıldı.
`data/`'ya, `js/`'e, `arac/`'a yazılmadı. Ölçüm aleti scratchpad'de; `js/suzgec.js` GERÇEK işlevleri çağrıldı (`sahipAnahtari` · `aktifVAdi` · `sahipKimlikte`), `odak_cozum.js` deseniyle.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
| öngörü | ölçüm | hüküm |
|---|---|---|
| 12 maddenin 12'si 1475-1774 tâbi penceresinde | **12/12** (1476-01-01 … 1770-01-01) | ✓ |
| 12 günün 12'sinde Kırım `DEVLET_HARITA`da kendi gövdesiyle YOK; yerleşimlerde `s:osmanli` + `v:kirim` | gövde **0/12** ✓ · sahip anahtarı **`tabi:kirim`** (12-25 yerleşim, ≥12 her gün) ✓ | ✓ |
| Tâbi katman odak kutusuna GİRMİYOR ⇒ sınıf TÂBİ-DOĞRU (odak tâbi katmandan çözülmeli) | sekme dalı yalnız `devletiYay` = yalnız `DEVLET_HARITA` gövdesi okur; tâbi katmanı okumaz ✓. **Ama** `maddeOdakKutusu`nun `odak_kimlik` yolu tâbi katmanı ZATEN okuyor (bkz. §3) | ✓ |
| DELİK sayısı 0 | **0** | ✓ |

## 1. Mekanizma — kamera niye sessiz
- 12 maddenin hepsi `kapsam_genis:true`, `yer_id`/`yer_kon`/`odak_yer`/`odak_kimlik`/`odak_kutu_kaynak` YOK.
- Kırım sekmesinden tıklanınca (`app.js:15076-15091`) `maddeOdakKutusu(m)` null döner ⇒ `devletiYay("kirim")` (`app.js:1099`).
- `devletiYay` yalnız `DEVLET_HARITA`daki `kirim` dönemlerine bakar. Kırım'ın gövde dönemleri yalnız şunlardır:
  - `1441-01-01 → 1475-06-06`
  - `1774-07-21 → 1781-01-01`
  - `1781-01-01 → 1783-04-19`

  ⇒ 1475-06-06 → 1774-07-21 arasında dönem yok, `if (!p) return;` ile **sessiz döner**.
- Osmanlı kronolojisinden tıklanınca da (`haritayiOlayaGotur`, `app.js:12703`) odak kutusu yok ⇒ **Osmanlı imparatorluk kutusuna** (`donemler[di].b`) gider. `odak_olc.py` bu 15 maddeyi zaten `BEYANLI→yabancı 15` sayıyor (kronoloji_kirim.js satırı).

## 2. Madde madde — o gün Kırım haritada nasıl çiziliyor
"tâbi yer." = SUZGEC'e göre sahibi `kirim` kimliğinde olan yerleşim sayısı (hepsi `tabi:kirim`). "tâbi etiket" = `DONEMLER[].vl` içinde "Kırım Hanlığı" etiketi (tâbi katman o gün çiziliyor demek).

| # | gün | madde (kısaltılmış) | kendi gövde | tâbi etiket | tâbi yer. | sınıf |
|---|---|---|---|---|---|---|
| 1 | 1476-01-01 | Seyyid Ahmed Kırım'ı istila etti | yok | var | 12 | TÂBİ-DOĞRU |
| 2 | 1476-07-01 | Eminek Mirza Boğdan seferi | yok | var | 12 | TÂBİ-DOĞRU |
| 3 | 1511-01-01 | Yagellonlarla ittifak | yok | var | 25 | TÂBİ-DOĞRU |
| 4 | 1520-01-01 | Yagellon ittifakı yenilendi | yok | var | 25 | TÂBİ-DOĞRU |
| 5 | 1523-01-01 | I. Mehmed Giray öldürüldü | yok | var | 25 | TÂBİ-DOĞRU |
| 6 | 1524-01-01 | Saadet Giray han oldu | yok | var | 25 | TÂBİ-DOĞRU |
| 7 | 1532-01-01 | Sâhib Giray tahta çıktı | yok | var | 24 | TÂBİ-DOĞRU |
| 8 | 1534-01-01 | Osmanlı metbûluğu kesinleşti | yok | var | 24 | TÂBİ-DOĞRU |
| 9 | 1565-01-01 | Devlet Giray kış seferi | yok | var | 21 | TÂBİ-DOĞRU |
| 10 | 1594-04-01 | II. Gazi Giray–Rusya barışı | yok | var | 18 | TÂBİ-DOĞRU |
| 11 | 1648-01-01 | İslâm Giray Lehistan seferleri | yok | var | 18 | TÂBİ-DOĞRU |
| 12 | 1770-01-01 | Rus orduları Bucak'ı işgal etti | yok | var | 18 | TÂBİ-DOĞRU |

Aynı süzgeçten geçen öteki 3 madde (12'nin dışında, karşılaştırma için):

| gün | madde | gövde | tâbi yer. | durum |
|---|---|---|---|---|
| 1782-01-01 | mahzarlar | `1781-01-01→1783-04-19` | 17 (`s:kirim`) | gövde var, `devletiYay` çalışır |
| 1782-10-01 | Potemkin işgali | `1781-01-01→1783-04-19` | 17 (`s:kirim`) | gövde var, `devletiYay` çalışır |
| 1792-01-01 | Yaş sonrası canlandırma fikri | yok | **0** | künye dışı (`t:1783-04-19`), W13 "dışı" kovasındaki 1 vaka; DELİK değil, Kırım o gün yok |

**Dönem dağılımı:**
- 1475-1774 tâbi: **12**
- 1774-1783 bağımsız: **2** (gövdeli, sessiz değil)
- 1783 sonrası: **1**

⚠️ 12'nin **11'i yıl hassasiyetinde** (`YYYY-01-01`). Yalnız `1476-07-01` ve `1594-04-01` ay taşıyor. Sonuç günlere duyarlı değil: tâbi aralığın hiçbir ucuna yakın düşen yok, en yakını 1476-01-01 (gövde bitişi 1475-06-06'dan 7 ay sonra).

## 3. Hüküm: TÂBİ-DOĞRU, DELİK 0
- Kırım 12 günün 12'sinde haritada **görünür**: tâbi katmanda, etiketiyle ve ≥12 yerleşimle. Veri borcu yok.
- Kameranın Kırım'a gitmemesi **DOĞRU DEĞİL, kusurdur**. Ama kusur veride değil, kamera dalındadır: `devletiYay` tâbi katmanı okumuyor.
- Çözücü zaten var. `maddeOdakKutusu`nun `odak_kimlik` yolu (`app.js:12673-12690`) `SUZGEC.sahipKimlikte` ile `tabi:kid` yerleşimlerini sayar ve ≥2 şartını istiyor. Ölçüldü: aynı aletle `["kirim"]` 12 günün hepsinde **12-25 yerleşim** veriyor, yani kutu kurulur.

## 4. Öneri (iki yol; karar koordinatörde)
| | ne | etki | bedel |
|---|---|---|---|
| **A (önerim) — kod** | sekme dalında `devletiYay` dönem bulamazsa, aynı `odak_kimlik` mantığıyla `[d.id]`ye geri düş (tâbi yerleşim kutusu). `arac/odak_cozum.js`te sekme dalı için aynı soru sorulmalı. | tek noktadan bütün tâbi-çizili künyeler (§1.5: ⚪ 15 tâbi-çizili kimlik). Kırım'la sınırlı değil. | app.js + odak_cozum.js; motor tuzu DEĞİL |
| B — veri | 12 maddeye `odak_kimlik:"kirim"` | yalnız bu 12. Hem sekme dalı hem `haritayiOlayaGotur` düzelir; `odak_olc` BEYANLI→yabancı 15 → 3 düşer. | kronoloji_kirim.js sahibine iş |

- A ile B çelişmez. A, `haritayiOlayaGotur` dalının Osmanlı kutusuna uçmasını DÜZELTMEZ (o dal `d.id` bilmiyor). İki dal için de tam çözüm B'dir ya da A'nın o dala da taşınmasıdır.
- **Bulunamadı / ölçülmedi:**
  - Tâbi `v` birleşik geometrisinin (`DONEMLER[].v`) Kırım'ı kapsadığı poligon düzeyinde ayrıca test edilmedi. Kanıt etiket (`vl`) ve yerleşim sahipliğidir.
  - Tarayıcıda tıklama sınaması yapılmadı. `devletiYay`ın sessiz dönüşü kod okumasıyla ve `DEVLET_HARITA` dönem taramasıyla ölçüldü.

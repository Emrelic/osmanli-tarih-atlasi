# KRONO-ORTA-AVRUPA-0929 — Habsburg · Macaristan · Almanya kronoloji denetimi

29 Eylül 2026 · Dalga 2 · model Opus.
Ek belgeler: [`-DUZELTME.md`](KRONO-ORTA-AVRUPA-0929-DUZELTME.md) · [`-YERLESIM-ONERI.md`](KRONO-ORTA-AVRUPA-0929-YERLESIM-ONERI.md) ·
[`-KUNYE.md`](KRONO-ORTA-AVRUPA-0929-KUNYE.md) · [`-ATIF.json`](KRONO-ORTA-AVRUPA-0929-ATIF.json)

## 0. Tek paragraf

Şartnamenin iddiası doğru çıktı: bu coğrafyanın asıl sorunu **mükerrer ve çelişen günler**. Aynı olayın iki dosyada **iki farklı günde** durduğu 7 vaka buldum ve 6'sını sayfası okunmuş kaynakla düzelttim:
- **Szatmár:** 29 Kasım / 30 Nisan → 29 Nisan 1711
- **Kanije:** 22 → 20 Ekim 1600
- **Sigetvar:** 8 → 7 Eylül 1566
- **Tököli:** 1 Ağustos → 16 Eylül 1682
- **Ferdinand'ın Macar seçimi:** 1 Ocak 1527 → Aralık 1526. İki seçim karışmıştı; 1 Ocak Hırvatların Cetin seçimi.
- **Nagyvárad / Bocskai:** yıl damgası → komşu günü.

Yedincisi, Ausgleich (8 Şubat / 30 Mart 1867), kaynakla çözülemedi.

İkinci bulgu yapısal. `KRONOLOJI_MACARISTAN`ın **83/127** maddesi, bağlandığı `macaristan` künyesinin (1000–1526) penceresi dışında. Madde başına doğru künye atfını dosyaya yazdım. Üçüncü bulgu haritayla ilgili: senkron defterindeki en büyük açık küme (1526-08-29, 24 yerleşim) kronoloji eksikliği değil, **harita artefaktı**. Madde yazılmadı, YERLESIM-ONERI'ye gitti.

## 1. Envanter (ölçüldü, 29 Eylül)

| Dosya | Madde | Yüzyıl | Zorunlu alan eksiği | Künye penceresi dışı | "gün DOĞRULANMADI" |
|---|---|---|---|---|---|
| `kronoloji_habsburg.js` | 117 | 15.yy 16 · 16.yy 27 · 17.yy 34 · 18.yy 34 · 19.yy 6 | yer_id boş 35 | 0 | **26** (+6 yıl damgası) |
| `kronoloji_macaristan.js` | 127 | 12.yy 1 · 13.yy 11 · 14.yy 26 · 15.yy 15 · 16.yy 19 · 17.yy 15 · 18.yy 34 · 19.yy 6 | yer_id boş 39 | **83** | 0 (Engel/Kontler sayfalı) |
| `kronoloji_almanya.js` | 132 | 13.yy 6 · 14.yy 7 · 15.yy 14 · 16.yy 16 · 17.yy 18 · 18.yy 52 · 19.yy 19 | yer_id boş 53 | 1 (1923-11-15) | 13 "bulunamadı" |

(Yüzyıl anahtarı `t[:2]`dir, "19" = 1900'ler.) `kronoloji_habsburg.js` **1526'dan başlıyordu**, oysa `habsburg` künyesi 1282'den başlıyor. 244 yıllık omurga boştu.
`kronoloji_almanya.js`: 132 maddenin hepsinde `devlet:` var, ama **79'u künyesiz id** (brandenburg-prusya 47 · saksonya 10 · …). Bkz. KUNYE.md K2.

## 2. Mükerrer / çelişen gün — bütün evrende (7.160+ madde) tarandı

58 anahtar olay, bütün `olaylar*` + `kronoloji*` + `savaslar*` + künye kronolojilerinde tarandı. Tam liste scratchpad'de.

| Olay | Önceki günler | Hüküm | Dayanak (sayfa okundu) |
|---|---|---|---|
| Szatmár Barışı | habsburg **1711-11-29** · macaristan 1711-04-30 · künye erdel 1711-04-30 | **1711-04-29** (iki dosya düzeltildi; künye B1) | MNL "A szatmári béke" |
| Kanije | olaylar_ek 1600-10-20 · habsburg 1600-10-22 | **10-20** (habsburg düzeltildi) | TDV `kanije` |
| Sigetvar | olaylar 1566-09-07 · macaristan 1566-09-08 | **09-07** (macaristan düzeltildi) | TDV `suleyman-i` |
| Tököli'nin krallığı | macaristan 1682-08-01 · olaylar_ek5 1682-09-16 | **09-16** (macaristan düzeltildi) | TDV `tokoli-imre` |
| Ferdinand Macar kralı | macaristan **1527-01-01** · künye 1526-12-17 | **1526-12-16/17** (macaristan düzeltildi) · 1527-01-01 = Cetin | MKL · Wien Geschichte Wiki |
| Nagyvárad 1538 | habsburg 1538-01-01 · macaristan 1538-02-24 | 02-24 (gün komşudan) | Engel (komşunun kaynağı) |
| Bocskai 1604 | habsburg 1604-01-01 · macaristan 1604-10-15 | 10-15 (gün komşudan) | Kontler (komşunun kaynağı) |
| Diploma Leopoldinum | künye erdel **1690-12-04** | 1691-12-04 (metin) / 1690-10-16 (onay) | MKL (künye → B1) |
| Ausgleich 1867 | 3 dosya 03-30 · künye 02-08 | **ölçülemedi** | — |
| Austerlitz | rusya **1805-11-20** · 3 dosya 12-02 | Jülyen/Gregoryen farkı | → KRONO-KUZEY |
| Karl'ın çekilişi | habsburg 1918-11-11 · ok109 **1918-11-18** | 18 Kasım'da olay yok (ajan özeti) | → çekirdek |
| Alman cumhuriyeti | dosya 1918-11-09 · künye **1918-11-11** | 09 | → künye |

**Tutarlı çıkanlar (gün aynı, iki-altı dosyada):** Mohaç · Budin 1541 · Eğri 1552 · Zitvatorok · Uyvar · Sen Gotar/Vasvar · Viyana 1683 · Parkan · Kutsal İttifak · Budin 1686 · Harsány · Salankamen · Zenta · Karlofça · Varadin · Belgrad 1717 · Pasarofça · Banaluka · Hisarcık · Belgrad 1739 · Ziştovi · Niğbolu · Varna · Kosova 1448 · Vestfalya · Viyana Kongresi Senedi · Alman İmp. 1871 · Versay 1919.
📌 Vasvar için TDV kendisi 9 Ağustos 1664 diyor ve Batı'daki 10 Ağustos'un "yanlış çevirme" olduğunu belirtiyor (ajan özeti). Atlas 09'u kullanıyor.

### 2a. Künye ↔ dosya aynı-gün çiftleri: `KRONO-BAGLAMA-0929` (d) kuralı için hüküm

COK_ yoluna geçince künyenin kendi maddesi ile dosya maddesi panelde yan yana düşer. `t+b` mükerrer atıcısı bunları yakalamaz. 12 künye tarandı:

| Hüküm | Sayı | Çiftler |
|---|---|---|
| **AYNI OLAY: dosya maddesi künyenin yerine geçer** | 37 | habsburg: 1529 · 1541 · 1606 · 1683-09-12 · 1699 · 1718 · 1739 · 1804 · 1867-03-30 · 1878 · 1908 · 1914-07-28 · 1918-11-11 — macaristan: 1301 · 1387 · 1396 · 1456 · 1458 · 1490 · 1521 · 1526 — macaristan-habsburg: 1526-12-17 · 1541 · 1686 · 1699 · 1848-03-15 · 1918-11-16 — almanya: 1871 · 1889 · 1914-08-02 — erdel: 1613 · 1660 — prusya: 1701 · 1807 — bavyera 1806 — orta-macar 1685 — macaristan-naiplik 1918-11-16 |
| **AYNI OLAY, künye YANLIŞ ÇERÇEVE** | 1 | habsburg 1526-08-29 "Ferdinand … tacını aldı": Ferdinand o gün taç almadı. Dosyanın Mohaç maddesi + yeni 1526-10-22 maddesi. |
| **AYNI OLAY, İKİ GÜN (çelişki)** | 5 | almanya 1918-11-11↔11-09 · erdel 1690-12-04↔(1691-12-04) · macaristan 1308-06-15↔11-27 · macaristan-habsburg 1867-02-08↔03-30 · prusya-dukaligi 1525-04-08↔04-10 (antlaşma/biat: iki basamak) |
| **FARKLI OLAY: ikisi de kalsın** (aynı yıl, farklı gün) | 7 | macaristan 1514-07-15 (bastırılma) ↔ 07-20 (idam) · macaristan 1443-11-01 İzladi ↔ 1443-01-01 Uzun Sefer · erdel 1571-05-25 Báthory ↔ 08-16 Torda · almanya 1806-08-06 ↔ 1806-01-01 Württemberg · macaristan-naiplik 1919-03-21 / 08-01 ↔ 08-12 Prekmurje · avusturya-cumhuriyet 1919-09-10 ↔ 05-11 Vorarlberg |
| TEKİL (dosyada karşılığı yok, künyede kalmalı) | 22 | bohemya 5 · prusya 4 · bavyera 3 · erdel 3 · prusya-dukaligi 2 · macaristan-naiplik 2 · … |

⇒ **"Aynı gün = aynı olay" kuralı bu coğrafyada 38/38 tuttu.** Farklı olay örneklerinin hepsi aynı YIL içindeki farklı günlerdi, aynı GÜN değildi. Aynı yıl içindeki 12 çiftin 5'i gün çelişkisi, 7'si farklı olay çıktı. ⇒ Aynı yıl için otomatik kural KURULAMAZ.

## 3. Senkron defteri: 65 net olay adayının dökümü

| Sınıf | Olay adayı | Ne yapıldı |
|---|---|---|
| **Harita artefaktı: madde yazmak yanlışı kalıcılaştırır** | 1526-08-29 almanya→avusturya (24 yer) · 1687-08-12 Erdel (3) | YERLESIM-ONERI Y1–Y3 + doğru güne madde |
| **Doğru günde madde yazıldı** | 1921-11-13 Eisenstadt | `kronoloji_cok_habsburg.js` |
| **Madde zaten var, başlık yeri anmıyor** | 1790-04-16 Orsova ("Eski Hırsova") · 1527-01-01 Drežnik/Udbina (Cetin) · 1685-08-19 Nitra (Uyvar) | mükerrer yazılmadı → DUZELTME B2 (çekirdeğe başlık önerisi) |
| **Alman sömürgeleri** (kapsam dışı) | ≈28 | M-5421: yazılmadı, Dalga 3 |
| **Çekirdek fetihleri** (Osmanlı gözü) | Böğürdelen 1471 · Orsova 1524 · Slavonya 1538/1556 · Gyula 1566 · Yagodina 1690/1739 · Lugos 1688-1716 | çekirdeğin işi |
| **Başka paket** | 1795 Paylaşım (Kielce/Radom şüphesi) → KUZEY · İsviçre 1417/1475 → paketsiz | YERLESIM-ONERI Y5/Y6 |

⚠️ **Senkron körlüğü** (SENKRON-DEFTER §3): `denetle.py` kuyruk ve COK dosyalarını 2s evrenine almıyor. ⇒ Yazdığım maddeler 2s sayısını düşürmez. Bunu sonuç tablosunda "iyileşme" diye göstermiyorum.

## 4. Yazılan yeni maddeler: `data/kronoloji_cok_habsburg.js` → `window.KRONOLOJI_COK_HABSBURG`

9 madde, her birinin kaynak sayfası bu oturumda okundu:

| t | Madde | devlet |
|---|---|---|
| 1282-12-27 | Augsburg belehnungu: Habsburg'un Avusturya'daki başlangıcı | habsburg |
| 1363-01-26 | Tirol'ün devri | habsburg |
| 1515-07-17 | Viyana Prensler Toplantısı: çifte nişan ve karşılıklı veraset | habsburg |
| 1521-04-21 | Worms paylaşımı: Avusturya Ferdinand'a | habsburg |
| 1526-10-22 | Ferdinand Bohemya kralı seçildi | habsburg |
| 1687-10-27 | Balázsfalva | habsburg + erdel |
| 1688-05-09 | Erdel I. Leopold'ü tanıdı (Caraffa) | habsburg + erdel |
| 1691-12-04 | Diploma Leopoldinum | habsburg |
| 1921-11-13 | Burgenland'ın alınışı | avusturya-cumhuriyet + macaristan-naiplik |

`kronoloji_cok_macaristan.js` ve `_almanya.js` **YAZILMADI.** Doğrulanmış ve mükerrer olmayan aday bulamadım. Macar ve Alman dosyalarında omurga dolu; eksik olan künye atfı (§1).
⚠️ **`index.html`e bağlanmayı bekliyor** (ORTAK §4.1). Bağlanana kadar sitede görünmez; bu arıza değil. `paketle.py` koordinatörde.

## 5. Bulamadıklarım (`bulunamadı` bir sonuçtur)

- **Ausgleich 1867'nin "tek" günü:** 02-08 de 03-30 da kaynakla doğrulanamadı. habsburger.net'in ilgili sayfası 404 verdi.
- **Moravya ve Silezya zümrelerinin Ferdinand'ı kabul günü:** bulunamadı.
- **Kassa'nın 1682'de Tököli'ye, 1685'te Habsburg'a geçiş günleri:** bulunamadı (ajan: 14.08.1682 / 25.10.1685, sayfa okunmadı).
- **Karintiya 1335, Feldkirch 1375/1390, Bregenz 1451/1523, Lienz 1500 günleri:** güvenilir sayfa okunamadı.
- **Habsburg dosyasındaki 19 "gün DOĞRULANMADI" maddesi:** ajan özetine göre günler doğru, ama sayfalar okunmadığı için `kaynak:` değiştirilmedi (DUZELTME B3). Kalite borcu, uydurma değil.

## 6. Denetim

- `node --check` ✓ (4 dosya: habsburg · macaristan · almanya · cok_habsburg)
- `py arac/odak_olc.py` ✓: benim dosyalarımda **çözülmeyen odak atfı 0** · `kronoloji_cok_habsburg.js` 9 madde: 5 konumlu, 4 kutulu, 0 odaksız
- `py arac/denetle.py` → **SONUÇ: temiz** (Değişmez 2 591 kırılma 0 açık · 2s 180 açık / tavan 195 · 4c 128 · 4d 331). 2s değişmedi, çünkü kuyruk evrende değil (§3).

# BOLGE maritim — Adım 3: Harita uyumu (15 Kasım 2026, 2. tur — ölçümle yeniden yazıldı)

Önceki sürümdeki "aday" tabloları kaldırıldı (süzgeci eksikti, denetle ile çelişiyordu). Bu sürüm yalnız ölçümdür.

## A. Yetkili ölçüm (`py arac/denetle.py`, tüm repo, 1. tur başlangıç ağacı = origin/main 8fb10bdf1 + coz-c)
- Değişmez 1 ✓ 306 sahipsiz (beklenen 306); 1b ✓ 0 beyansız boşluk.
- **Değişmez 2 ✓ 760 kırılma, 0 açık**; 2i ✓ (349 işgal, 0 açık); 4 / 4c / 4d / 4s ✓ 0; 5 ✓ 0.
- 2s: 154 açık yabancı kırılma (tavan ∞, borç); denetle çıktısında maritim künye/yerleşim adı geçen satır **yok** (grep 0).
- Değişmez 8a ✓ 270 (tavan 270), 8b ✓ 0, 8k ✓, 8m ✓, R ✓. Değişmez 7 🧊 2505 sorgusuz enklav (beklenen 731, bilgi satırı; tavan satırı değil).
- Bölge düzeltmelerinden SONRAKİ ölçüm: adım 7'nin sonunda.

## B. Bölge ölçümü (node + python, tüm 18 734 madde × bölge kırılmaları)
Yöntem: bölgenin 177 yerleşiminde farklı `d:` geçişi olan her `s:` kırılması (≥1281); kırılmanın ±30 gününde, taraf kimliği (eski veya yeni sahip) ya da `yer_id`/`odak_yer` (yerleşim adı) eşleşen bir madde. Bu ölçüt denetle D2'den **daha sıkıdır** (denetle `d:`/`v:` kırılmalarını sayar; `s:` kırılması başka ölçüt). Sonuç: **829 kırılma, 294 eşleşmesiz** (ilk tur çıktısı 435 idi; 2. turda süzgeç tüm maddelere genişletildi). Eşleşmesiz grupların büyükleri:

| tarih | kırılma | yerleşim sayısı |
|---|---|---|
| 1816-08-19 / 1811-08-18 | İngiliz ara dönem başı/sonu (Cava, Sumatra) | 20 / 19 → 2. turda 1811 için madde eklendi (1811-08-04) |
| 1743-11-11 | Mataram → VOC | 17 |
| 1587-01-01 | Demak → Mataram | 16 |
| 1293-01-01 | `__BOSLUK__` → Majapahit | 15 |
| 1898-08-13 | İspanya → ABD (Manila teslimi) | 13 |
| 1527-01-01 | Majapahit → Demak | 13 |
| 1769-10-10 | Timor beylikleri → `__BOSLUK__` | 9 |
| 1511-08-10 / 1528-01-01 / 1400-01-01 | Malaka çevresi (Johor, Bintan, Muar, Siak…) | 7 + 7 + 7 |
| 1903-01-01, 1858-01-01, 1860-08-23, 1906-09-01 … | Açe, Doğu Sumatra, Timor, Papua | 6, 4, 5, 4 |
Ayrıca 1942-03-09 (Hollanda → Japonya, ~70 yerleşim) 2. turda madde eklenerek kapatıldı (1942-03-08, Ricklefs).

Not: denetle D2 bunları açık saymıyor (0). Bu liste "yerleşim penceresi var, aynı yeri/tarafı adlandıran ±30 gün maddesi yok" ölçümüdür; hangi madde eklenmesi gerektiğinin işaret taşıdır, ihlal değil.

## C. Gün/yıl uyumsuzlukları (kaynaklı, 2. turda ölçüldü)
| madde | atlas | kaynak (tam metin) | karar |
|---|---|---|---|
| Cebu | madde 1565-01-01 / pencere 1565-04-27 | B&R cilt 2: «we reached the port of Çibu on Friday, April 27, 1565» + ciltteki Legazpi seferi anlatısı «twenty-seventh and thirtieth of April» | **madde 1565-04-27'ye çekildi** |
| Manila | madde 1571-01-01 / pencere 1571-06-24 | B&R cilt 3, Riquel belgesi: unvan 3 Haziran 1571, 24 Haziran 1571 alcalde/regidor atandı | **madde 1571-06-24'e çekildi** (ic_not: ele geçiriş Mayıs 1571) |
| Malaka düşüşü | 1511-08-10 | TDV malaka + TDV malezya + Coedès («August 10, 1511») = çift teyit | değişmedi; madde ic_not'ta çift teyit |
| Malaka kuruluşu | madde 1396, künye f 1400 | TDV 1396[?]/1390'ların ortası/1402; Ricklefs c.1400; Coedès 1403 | aynı yılı veren çift yok → madde/künye değişmedi, ic_not'ta hakem beyanı |
| Brunei | künye f 1368 / madde 1405 | TDV bruney 1405–1415; 1368 için kaynak yok (Ricklefs 3. bs. Brunei 1368/1405 vermez; yalnız «Majapahit civil war 1405-6», «Malacca ... Chinese protection 1405») | **künye f ve 5 yerleşim penceresi 1405'e çekildi** |
| 1811 İngiliz fethi | pencere 1811-08-18 | Ricklefs: 4 Ağu gemiler, 26 Ağu Batavia, 18 Eyl Janssens teslim | pencere günü kaynaksız → kuyruk; madde 1811-08-04 eklendi |
| 1942 Hollanda teslimi | pencere 1942-03-09 | Ricklefs: 8 Mart 1942 | madde 1942-03-08 eklendi; pencere günü için ikinci kaynak yok → kuyruk |
| Sunda-Pajajaran | künye t 1527-06-22 | TDV bentem (Yûsuf 1570-1580) + Ricklefs «conqueror of Pajajaran c.1579» = iki bağımsız kaynak | **künye t 1579-01-01** (yıl); yerleşim pencereleri kuyruğa |

## D. odak_olc
`ÇÖZÜLMEYEN ODAK ATFI`: 1. tur 0; 2. turda yeni maddeler `yer_id: "Batavia (Cakarta)"` (atlas adına birebir) — sonuç adım 7'de.

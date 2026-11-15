# BOLGE maritim — Adım 3: Harita uyumu (15 Kasım 2026)

Ölçüm: 177 bölge yerleşiminin `s:` kırılmaları (≥1281, farklı `d` geçişi) × bölge maddeleri (±30 gün, taraf adı veya yer_id eşleşmeli). Bu **kaba aday ölçümüdür**; yetkili ölçüt `py arac/denetle.py` D2'dir (sonuç aşağıda "denetle" satırında; çıkış kodu okunmadan hüküm yok). Harita çıktısı (petek koşusu) ölçülmedi.

odak_olc: `ÇÖZÜLMEYEN ODAK ATFI: 0` (bu ağaç, çıkış 0).

## A. yer_id / odak_yer
Bölge maddelerinde çözülmeyen yer atfı yok (odak_olc 0). Yapısal sorun: **boş `yer_id:`'li ~20 madde** (Çola/Magellan/Endonezya anayasası/Japon işgali vb., örn. KRONOLOJI_COK_1923_1945[348,371,374,407,431,449,492,505]; KRONOLOJI_COK_DERIN_ASYA_AFRIKA_1024[20-23,38-41]) haritada kamera odağı vermez; bunların `odak_yer`i yoksa kamera varsayılana düşer (odak_olc bunu hata saymıyor). Öneri: Manila / Jakarta(Batavia) / Brunei / Hagåtña odak_yer eklenmesi — kaynaklı yer adı gerektirmez, yalnız mevcut yerleşim adı.

## B. Madde karşılığı olmayan kırılma adayları (±30 g, taraf/yer eşleşmesi yok) — ayrı gruplar
| tarih | kırılma | yerleşim | durum |
|---|---|---|---|
| 1293-01-01 | `__BOSLUK__` → majapahit (15 yerleşim) | Cava'nın tamamı | madde yok (1292 Kertanagara ölümü, 1293 Majapahit kuruluşu için madde yok); Trowulan penceresi 1293-11-10 ≠ 1293-01-01 |
| 1343, 1368, 1400, 1457 | Pejeng→Majapahit (Bali), Brunei 1368, Malaka 1400, Sulu 1457 | 3+5+7+1 | madde yok / 1396, 1405, 1450 maddeleri günü tutmuyor |
| 1478-01-01 | Majapahit→Bali/Demak (6 yerleşim) | Demak, Semarang, Bali, Sumbawa… | madde yok; TDV Demak'ı 1520'ler yapar |
| 1527-01-01 | Majapahit→Demak (13) | Cava | olaylar_ek16[27] yalnız Surabaya'ya bağlı; 12 yerleşim açıkta |
| 1587-01-01 | Demak→Mataram (16) | Cava | madde yok (1578 Demak dağıldı, 1585 Mataram ortaya çıktı: ±30 g dışı) |
| 1511-08-10 | Malaka→`__BOSLUK__` | 7 yerleşim (Johor, Bintan, Muar, Jambi, Siak, Deli, Rengat) | Malaka'nın madde var (Malaka); diğer 6 yer adı geçmiyor |
| 1522, 1524 | Ternate→Portekiz; Pasai→Açe | Ternate, Pasai | 1512/1521 maddeleri günü tutmuyor |
| 1565-04-27, 1569, 1571-06-24, 1572 | Filipin→İspanya (Cebu, Iloilo, Manila, Vigan) | 8 yerleşim | maddeler 1565-01-01 / 1571-01-01 (yıl) → günler arası 100+ gün |
| 1575-12-28, 1606-04-01, 1663-05-01 | Ternate el değiştirmeleri | Ternate | 1606 maddesi 01-01; diğerleri yok |
| 1605-02-23 | Ambon Portekiz→VOC | Ambon | madde yok (kronoloji_hollanda: Ambon 1605'te geçmiyor) |
| 1621-03-08, 1667-11-18, 1663 vb. | Banda, Makassar, Pagaruyung/Painan | | 1669 Somba Opu maddesi 1669-01-01; Banda 1621 maddesi yok |
| 1743-11-11 | Mataram→VOC (17 yerleşim) | Cava | madde yok (Pakubuwono II 11 Kasım 1743 sözleşmesi) |
| 1811-08-18 / 1816-08-19 | VOC→İngiliz→Hollanda (≈40 geçiş) | Cava, Sumatra | Cava'daki İngiliz ara dönemi (Raffles) için **bölge maddesi yok** |
| 1898-06-21, 1898-08-13 | İspanya→ABD (Guam, 13 Filipin yerleşimi) | | 1898-12-10 Paris maddesi var (kronoloji_ispanya[130]) fakat 118 gün ayrı; 1898-08-13 Manila düşüşü maddesi yok |
| 1942-03-09, 1942-01-02, 1945-09-02 | Japon işgali (Endonezya ~70 yerleşim) | Hollanda Doğu Hint | Filipinler/Brunei için madde var (1942-01-02 Manila); Endonezya için 9 Mart 1942 teslimi ve 1945 Eylül maddesi bölge dosyalarında yok (kronoloji_cok_1923_1945 başka yer adlı olabilir — denetle ölçer) |
| 1860-08-23, 1818, 1822, 1895 | Timor/Kalimantan boşluk kapanışları | | 1860-08-13 Lizbon Antlaşması maddesi var (SINIR_ASYA[49]) yürürlük 08-13; pencere 08-23 → 10 gün, eşleşir |

## C. Fazla kırılma
Ölçülmedi (madde var, pencere yok): 1822-01-01 Hollanda Palembang (pencere 1825-01-01: **3 yıl ayrı**), 1821-02-10 Padang antlaşması (pencere 1819-05-01'e kadar İngiliz, Padang Hollanda 1819), 1787 Banjar vasallığı (pencere 1860), 1849 Bali seferi (pencere 1894-1908; Buleleng/Jembrana ayrı yerleşim yok), 1786-08-11 Penang (pencere 1786-08-11 eşleşir), 1824-03-17 Anglo-Hollanda (Bengkulu 1824-03-17 eşleşir, Malaka 1825-03-01 = 1825 (Antlaşma yürürlük 1825-04-01? okunmadı)). Aday: Palembang 1821/1825 ayrık: atlas'ta hangisi kaynaklı bilinmiyor (Andaya okunmadı).

## D. denetle sonucu (yetkili ölçüm, bu ağaç, coz-c sonrası, veri DEĞİŞMEDEN)
`py arac/denetle.py` (tüm repo, bölge değil): Değişmez 1 ✓ (306 sahipsiz = beklenen 306); 1b ✓ 0 beyansız boşluk; **Değişmez 2 ✓ 760 kırılma, 0 açık**; 2i ✓; 4 ✓ 0 hayalet; **4c ✓ 0, 4d ✓ 0**; 5 ✓ 0 çelişki. 2s: 154 AÇIK yabancı kırılma (tavan inf, borç). Çıkış kodu / Değişmez 8: koşu bu satırlar yazılırken sürüyordu → çıkış kodu OKUNMADI (ölçülmedi; temiz sayılmaz).
**DÜZELTME (B bölümüne):** B'deki "madde karşılığı yok" listesi kaba ve kısmen YANLIŞ-POZİTİFTİR: yetkili D2 0 açık veriyor (maddeler başka dosya/taraf kimliğiyle kapatıyor; benim süzgecim yalnız bölge-künyesi/yer_id eşleşmesine bakıyordu). Dolayısıyla B listesi "D2 ihlali" değil, "bölge maddelerinde günü tutmayan/kaynak teyidi gereken geçişler" olarak okunmalıdır. Aynı şekilde adım 1 D'deki künye-ömrü aşımları (ingiliz-malaya 1826/1825, portekiz-timor, filipin-racaliklari) denetle 4c/4d=0 ile ÇELİŞİR → benim hesabım tolerans/`f`-`t` alanı farkından doğan olası hata; yetkili ölçüm 0'dır, o liste "ölçülmedi/doğrulanmadı" sayılmalı.

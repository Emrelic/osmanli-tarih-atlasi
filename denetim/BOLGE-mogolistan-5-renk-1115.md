# BOLGE-mogolistan — Adım 5: renk (15 Kasım 2026)

`renkler.py` BOYALAR (okundu, yazılmadı):
| künye | harita anahtarı | renk |
|---|---|---|
| kuzey-yuan | kuzey-yuan | #306c78 (koyu camgöbeği) |
| mogolistan / mogolistan-halk-cumhuriyeti | mogolistan | #782088 (mor) |
| cungar | cungar | #3fb4a2 |
| qing-hanedani | qing-hanedani | #636f03 (zeytin) |
| yuan-hanedani | yuan-hanedani | #636f03 (AYNI) |
| mogol-imparatorlugu | — (id) | #24c0c6 |
| tannu-tuva | — (id) | #6024d2 |
| cin-cumhuriyeti | | #bab75a |
| hosut | | #a078e0 |
| mogulistan | | #4254ae |

Bulgular:
1. Renksiz Moğolistan künyesi: 0. (`harita:` boşken `id` BOYALAR'da bulunan: tannu-tuva, mogol-imparatorlugu, uygur, gokturk-1/2, xueyantuo, yenisey-kirgiz, liao, koco-uygur — hepsi tanımlı.)
2. **Yuan ve Qing aynı renk (#636f03):** zamanda çakışmıyorlar (1260-1368 / 1616-1912) ama komşu devlet olarak Ming (1368-1644) ve Kuzey Yuan arası... Çakışma yok; ancak Yuan'dan Qing'e uzanan "Çin–Moğolistan" kullanıcıda aynı renk devamı izlenimi verir. Öneri: Qing'e Yuan'dan farklı bir ton (ör. #8f4a1a); tuz dosyası → `renkler.py` KASA kararı. `py arac/renk_olc.py` KOŞULMADI (ayırt edilebilirlik metrikleri 1348-1912 pencerelerinde Qing/Cungar/Kuzey Yuan/Kobdo komşuluğunda iki komşu #306c78/#3fb4a2 yakın tonlar: camgöbeği-yeşil ailesi → ölçüm önerilir).
3. Cungar (#3fb4a2) ve Kuzey Yuan (#306c78) aynı mavi-yeşil ailesi; Kobdo/Altay'da 1634-1635 ve Karakurum komşuluğunda yan yana boyanır.
4. Eksik künyelerin (Oyrat, Çahar, Halha, Tümed) rengi yok; künye açılınca `renkler.py` ihtiyacı doğar.
5. MHC ile Bogd Hanlık aynı `mogolistan` anahtarı (kasıtlı, süreklilik): 1924 devrimi renk değişimi göstermez; kronoloji maddesi bunu telafi eder.

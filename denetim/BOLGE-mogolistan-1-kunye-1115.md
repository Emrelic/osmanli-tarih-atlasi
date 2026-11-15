# BOLGE-mogolistan — Adım 1: künye envanteri (15 Kasım 2026, UMIT bölge denetimi)

Ölçüm: `origin/main` (8fb10bdf1) üzerinde `index.html` `<script src>` sırasıyla 126 veri dosyası node `vm` ile yüklendi: 2268 künye, 5636 yerleşim, 32838 madde kaydı (tekrarlı). Kutu: lon 87-122E, lat 41-53N = 48 yerleşim (Moğolistan devleti + Sibirya/Buryatya + Sincan + İç Moğolistan parçaları). Moğolistan'a özgü 29 yerleşim (KAPSAM-OLCUM-1114 ile uyumlu).

## Başlangıç hükmünün düzeltmesi
"1691-1911 aktif künye 0" bir ölçüm artefaktıdır: Dış Moğolistan yerleşimlerinin 1691-1911 sahibi `qing-hanedani` (bolge `dogu-asya`) künyesidir; kapsam betiği künyeyi bölge `bolge:` alanından saydığı için Moğolistan'a yazmadı. Gerçek eksik, Qing'in Moğol idaresinin (Lifan Yuan / hoşun-aymag) ayrı bir etiketi olmaması ve 1368-1691 arası Moğol siyasî yapılarının tek künyede (Kuzey Yuan) toplanmasıdır.

## Atlasta karşılığı OLAN künyeler (bölgeyi ilgilendiren)
| id | f → t | harita/renk | yerleşim | künye-içi madde | not |
|---|---|---|---|---|---|
| kamag-mogol | 1130 → 1206 | harita yok | 0 | 2 | Cengiz öncesi; Burkhan Khaldun vekil noktası var |
| kerait / naiman / merkit / tatar / ongut | 1007-1209 | harita yok | 0 | 2'şer | yerleşimsiz, 1281 öncesi |
| mogol-imparatorlugu | 1206-01-01 → 1260-01-01 | BOYALAR var (#24c0c6) | 63 | 4 | `ic_not`/`kaynak:"mogollar"` (kaynak adı değil etiket) |
| yuan-hanedani | 1260-01-01 → 1368-09-14 | var (#636f03) | — | 5 | |
| kuzey-yuan | 1368-09-14 → 1691-05-30 | var (#306c78) | Moğolistan'da ~13 | 4 | künye-içi son madde 1635 (Ejei), künye t 1691 → iç tutarsızlık (Adım 2) |
| cungar | 1634-01-01 → 1758-01-01 | var | 31 | 4 | bolge `orta-asya`; Kobdo, Altay yerleşimlerini tutar |
| qing-hanedani | 1616 → 1912-02-12 | var (#636f03 = Yuan ile aynı) | çok | 6 | Moğolistan'ın 1691-1911 sahibi |
| mogolistan (Bogd Hanlık) | 1911-12-29 → 1924-11-26 | var (#782088) | 15 | 5 | |
| mogolistan-halk-cumhuriyeti | 1924-11-26 → — | aynı harita anahtarı `mogolistan` | 15 | 6 | |
| mogulistan (Doğu Çağatay) | 1347 → 1680 | var | — | 10 | Doğu Türkistan'da; ayrı bölge |
| tannu-tuva | 1921-08-14 → 1944-10-11 | var (#6024d2) | 1 (Kızıl) | 2 | bolge `sibirya-bozkir` |
| uzak-dogu-cumhuriyeti | 1920-04-06 → 1922-11-14 | var | 2 | 7 | Verhneudinsk, Çita |
| hosut | 1636 → 1724 | var | 1 | 4 | Kokonor; Moğol-Oyrat kolu, bölge Tibet/Çin |
| uygur, gokturk-1/2, dogu-gokturk, xueyantuo, yenisey-kirgiz, liao-hanedani, koco-uygur | 1281 öncesi | var | 1-3 | 2-15 | Karakurum zincirinde |

## Atlasta karşılığı OLMAYAN (eksik) devlet/siyasî yapılar — kaynak ve gün hassasiyeti
Aşağıdaki "f/t" değerleri BEN yazmadım; yalnız aday listesidir. Hiçbirinde akademik kaynak OKUNMADI (bu oturumda yalnız ansiklopedik/ikincil web sonuçlarına erişildi; kural gereği künye yazılmadı).
1. **Dörben Oyrat / Oyrat Birliği (Esen Taişi dönemi, 1434-1455 civarı)** — Tumu 1449 maddesi (Kuzey Yuan künyesinde) var ama aktör künyesi yok. Aday kaynak: Ming Shilu; Bawden/Serruys; Dardess; Ulaanbaatar akademik neşirleri (okunmadı).
2. **Tümed / Altan Han (1540'lar-1582 Altan Han, Hohhot)** — künye yok.
3. **Çahar Hanlığı (Ligdan Han, 1604-1634)** — Kuzey Yuan'ın son hanedan kolu; atlasta ayrı künye yok.
4. **Halha (Khalkha) Hanlıkları: Tüşetü / Çeçen / Casaktu (1600'ler-1691)** — Kuzey Yuan künyesi hepsini örtüyor; Urga 1639 ve Dolon Nor 1691 maddeleri Halha'ya işaret eder, künye adı yok.
5. **Hoşut / Dörben Oyrat ayrımı 1634 öncesi Oyrat (Hovd çevresi)** — Cungar künyesi 1634'ten başlıyor; Kobdo 1368-1635 Kuzey Yuan.
6. **Tannu Uriyanhay (Tuva) 1757-1914 Qing, 1914-1921 Rus himayesi** — Tuva yerleşimi yalnız Kızıl (1921+); 1757-1921 boş (yerleşim noktası yok).
7. **Barga / Buryat (1631 Rus) ve Selenga Buryat** — Buryat bölgesi yerleşimi var (Buryat toprakları 1281-1631), künye yok.
8. **Mançukuo / Mengjiang (Meng Jiang, Prens Demchugdongrub 1937-1945)** — Çin bölgesine ait, Moğolistan sınırında; Mengjiang künyesi "yerleşimsiz" (KAPSAM-OLCUM: Çin bölgesi).
9. **Moğol Halk Cumhuriyeti öncesi: Geçici Halk Hükûmeti (1921-03-13 Kyahta) / Halk Hükûmeti (1921-07-11)** — künye `mogolistan` içine gömülü; ayrı künye gerektirmez.

Sayı: künye envanteri 22 ilgili künye (11 yerleşimli çekirdek), 5 yerleşimsiz bozkır kabilesi, 9 eksik yapı adayı (hepsi "kaynak okunmadı").

## Ölçülmedi
Harita çıktısı (petek); kaynak kalitesi; künye `kronoloji:` maddelerinin kaynakça derinliği (çoğu `kaynak:` boş: mogol-imparatorlugu 4/4 boş, kuzey-yuan 4/4 boş, cungar 4/4 boş, mogolistan 5/5 boş).

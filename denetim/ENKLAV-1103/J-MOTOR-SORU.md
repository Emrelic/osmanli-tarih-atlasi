# J-MOTOR-SORU — 0 noktalı kopuk parçalar (KOVALAR J, 202 satır) HAVVA için motor sorusu

Yazan: LAB PAZAR · 4 Kasım 2026 · dal `lab-1104-jkova` (taban `origin/lab-1104-kaynak5` 87741821c) · alet `j_motor_olc.py` → `j_motor.json` · yerleşim 5531 · istek: EMRELİC 1 KASIM.

## ⚠️ Evren ve sınır — önce bunu okuyun

- **Parça geometrisi okunmadı.** Koşu 32 çıktısı bu makinede çözülmüş değil; `coz-c` bellek ister (LAB 7,9 GB, ölçüm anında 1 GB boş, LAB SALI çeviri koşuyordu). Elde J satırlarının kendisi var: temsil noktası (`representative_point`), en büyük kesit alanı, komşu payları, koridor — LAB SALI'nın koşu 32 ölçümünden (`adaylar*.json`).
- **"Emen hücre" = düz Voronoi yaklaşığı:** temsil noktasına en yakın, o gün epoku içindeki nokta. Motor karada ızgara Dijkstra sahipliği kullanır (`uret_petek.py` ~1213-1306), nehir bedeli vb. ile sonuç farklı olabilir. Ayrıca parçayı boyatan devletin **kendi** en yakın noktası verildi (aynı `harita:` boya anahtarı sayılır: `portekiz-mozambik` noktası `portekiz` parçasını boyatabilir; sahibi farklıysa parantezde yazılı) — parçanın gerçek kaynağı büyük ihtimalle odur.
- **Doğal sınır:** temsil noktasından Natural Earth 10m kıyı / nehir / göl çizgisine uzaklık (en yakın ikisi). Sırt ölçülmedi.
- **Tanık adayı:** `denetim/YER-1104` listelerinde (eksik_aday, konum, konum4, konum5, pleiades_tur) koordinatlı aday, temsil noktasına max(30 km, 1,5·√(alan/π)) içinde. Koordinatsız adaylarda ad eşleşmesi denendi; çoğu antlaşma yeri / uzak yer çıktı (Versailles, Meksiko), tanık sayılmadı — sayısı `j_motor.json` `ad_eslesme`de.
- **Kök sebep sezgiseldir** (kural sırası: sahipsiz → uzak sahip > 300 km → bayraklı kale → deniz → ada → eksik nokta > 75 km → kıyı ≤ 10 km → nehir ≤ 15-40 km / göl ≤ 10 km → < 300 km² sınır artığı → belirsiz). Geometri okununca gruplar kayabilir.

## Özet

| kök sebep | parça | Σ en büyük kesit km² | tanık adaylı |
|---|---|---|---|
| KALE-ENKLAV — Kale/liman noktası (`enklav:`/`eksklav:` bayraklı) hücresi karaya taşıyor | 8 | 10.310 | 1 |
| UZAK-SAHİP — Parçayı boyatan devletin en yakın noktası > 300 km | 25 | 236.504 | 0 |
| EKSİK-NOKTA — En yakın herhangi bir nokta > 75 km — bölgede nokta yok | 45 | 195.186 | 0 |
| KIYI — Kıyı artığı (nokta kıyıya ≤ 10 km) | 19 | 20.470 | 1 |
| NEHİR/GÖL — Nehir/göl yaslanması artığı (nehir ≤ 15-40 km ya da göl ≤ 10 km) | 77 | 137.545 | 3 |
| SINIR-ARTIĞI — Sınır çizgisi artığı (< 300 km², başka doğal sınır yakın değil) | 10 | 1.018 | 0 |
| BELİRSİZ — Sınıflanamadı | 18 | 89.306 | 0 |
| **toplam** | **202** | | **5** |

Aynı temsil noktasını paylaşan satırlar (aynı parça, farklı devlet/dönem): 29 nokta 70 satır taşıyor — tek geometri sorusu birden çok satırı kapatır (ör. Harkov güneyi 49,82K 35,85D: 6 satır, 1918-1943 arası 4 devlet).

## HAVVA'ya sorular (gruba göre)

- **KALE-ENKLAV (8):** Parçayı boyatan en yakın kendi noktası bayraklı kale. MOTOR-SORU.md'deki Oran/Bâdis ailesinin genişlemiş hâli: `enklav:true` hücresi kırpılmıyor. **Soru:** bayraklı noktanın hücresi kale çevresiyle (R km / kıyı tamponu) sınırlansın mı?
- **UZAK-SAHİP (25):** Parça X'e boyalı ama X'in en yakın noktası 300 km'den uzakta; Voronoi hücresi bu kadar uzanamaz (200 km tavan). **Soru:** boya nereden geliyor — izleme/ızgara (Dijkstra) sahibinin karar dışı yüzü mü, `bolgeler.js` kaynaklı bölge mi, yoksa başka bir devletin noktası X'e devrediliyor mu (tâbi/çatı eşlemesi)?
- **EKSİK-NOKTA (45):** Parça boş bir alanda; en yakın noktanın hücresi uzaktan emiyor. **Soru:** motor tarafı değil, veri: tanık nokta (merdiven ①-⑤) gerekir. Motor için tek soru: parçanın emildiği hücre en yakın nokta mı (Voronoi) yoksa ızgara mı?
- **KIYI (19):** Kıyı maskesi hücreyi kesip kıyı şeridinde kopuk parça bırakıyor. **Soru:** kara maskesiyle kırpma sonrası küçük kıyı parçaları komşuya mı bırakılmalı, ana gövdeye mi birleşmeli?
- **NEHİR/GÖL (77):** Nehir bedeli (ızgara) hücreyi nehir boyunca ikiye bölüyor, karşı yakada noktasız parça kalıyor. **Soru:** nehir yaslanması karşı yakada sahibin noktası yokken parça bırakmasın mı (karşı yakayı oradaki komşu almalı)?
- **SINIR-ARTIĞI (10):** Küçük şerit/köşe; sınır yaslanması ya da yuvarlama artığı. **Soru:** belli eşik altı kopuk parça komşuya devredilsin mi?
- **BELİRSİZ (18):** Kural dizisine uymadı; parça geometrisi okunmadan karar verilemez.

## KALE-ENKLAV — Kale/liman noktası (`enklav:`/`eksklav:` bayraklı) hücresi karaya taşıyor (8)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| K556 | danimarka | 1620-11-19 → 1845-02-22 | 4.253 | 11.319, 79.509 | Tranquebar (Tharangambadi) (49.3 km, danimarka, bayraklı) | Tranquebar (Tharangambadi) (49.3 km, bayraklı) | nehir Kolidam 13.7 km · kıyı 18.4 km | — |
| E082 | fransa-cumhuriyet | 1831-01-04 → 1841-05-30 | 1.430 | 35.425, -0.541 | Oran (31.6 km, fransa-cumhuriyet, bayraklı) | Oran (31.6 km, bayraklı) | kıyı 34.0 km · nehir Moulouya 166.8 km | — |
| E083 | ispanya | 1509-05-17 → 1708-04-04 | 1.430 | 35.425, -0.541 | Oran (31.6 km, ispanya, bayraklı) | Oran (31.6 km, bayraklı) | kıyı 34.0 km · nehir Moulouya 166.8 km | — |
| E084 | ispanya | 1732-07-01 → 1792-09-12 | 1.430 | 35.425, -0.541 | Oran (31.6 km, ispanya, bayraklı) | Oran (31.6 km, bayraklı) | kıyı 34.0 km · nehir Moulouya 166.8 km | — |
| K723 | ispanya | 1894-03-05 → 2000-12-31 | 918 | 35.026, -2.625 | Melîle (Melilla) (41.0 km, ispanya, bayraklı) | Melîle (Melilla) (41.0 km, bayraklı) | kıyı 8.5 km · nehir Moulouya 10.2 km | — |
| K762 | ingiltere | 1704-08-04 → 2000-12-31 | 473 | 36.160, -5.700 | Cebelitarık (Gibraltar) (31.2 km, ingiltere, bayraklı) | Cebelitarık (Gibraltar) (31.2 km, bayraklı) | kıyı 10.4 km · nehir Guadalquivir 96.6 km | Cezîretülhadrâ (Algeciras) 22.6 km (konum5) |
| K793 | fransa-cumhuriyet | 1897-03-20 → 1897-05-14 | 201 | 10.550, 43.041 | Borama (70.0 km, ingiltere) | Alî Sabîh (76.4 km, bayraklı) | kıyı 83.2 km · göl Lake Assal 137.8 km | — |
| E104 | ispanya | 1564-01-01 → 1673-01-01 | 175 | 34.820, -4.056 | Bâdis (Peñón de Vélez) (45.1 km, ispanya, bayraklı) | Bâdis (Peñón de Vélez) (45.1 km, bayraklı) | kıyı 43.3 km · nehir Moulouya 93.7 km | — |

## UZAK-SAHİP — Parçayı boyatan devletin en yakın noktası > 300 km (25)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| E004 | guney-afrika-birligi | 1915-07-09 → 1920-12-17 | 44.658 | -22.502, 19.593 | Gobabis (64.3 km, ingiltere) | Valvis Körfezi (523.8 km) | nehir Auob 235.5 km · kıyı 520.4 km | — |
| K237 | cin-cumhuriyeti | 1911-10-22 → 1912-02-12 | 30.195 | 22.736, 107.022 | Cao Bằng (78.8 km, fransiz-cinhindi) | Chenzhou (Hunan) (694.4 km) | nehir Zuo 36.7 km · kıyı 155.3 km | — |
| K314 | fransa-cumhuriyet | 1892-01-01 → 1898-01-01 | 19.973 | 5.781, -7.221 | Zwedru (105.5 km, liberya) | Assinie (443.0 km) | göl Lac de Buyo 50.7 km · nehir Sassandra 52.6 km | — |
| K327 | almanya | 1902-01-01 → 1915-07-09 | 18.738 | -18.038, 18.281 | Kuangar (61.7 km, portekiz-angola) | Konstanz (7361.6 km) | nehir Cubango 58.7 km · kıyı 587.1 km | — |
| K328 | guney-afrika-birligi | 1915-07-09 → 1920-12-17 | 18.738 | -18.038, 18.281 | Kuangar (61.7 km, portekiz-angola) | Valvis Körfezi (673.5 km) | nehir Cubango 58.7 km · kıyı 587.1 km | — |
| K358 | guney-afrika-birligi | 1915-07-09 → 1920-12-17 | 14.846 | -18.889, 20.438 | Rundu (127.8 km, ingiltere) | Valvis Körfezi (764.0 km) | nehir Cubango 101.4 km · göl Lake Xau 517.9 km | — |
| K359 | almanya | 1885-04-01 → 1916-02-18 | 14.784 | 5.233, 9.182 | Eski Kalabar (100.2 km, ingiltere) | Konstanz (4717.7 km) | kıyı 75.7 km · nehir Sanaga 186.7 km | — |
| K368 | almanya | 1890-07-01 → 1915-07-09 | 14.286 | -21.136, 20.540 | Ganzi (Ghanzi) (130.9 km, ingiltere) | Konstanz (7733.7 km) | nehir 241.9 km · göl Lake Xau 429.9 km | — |
| K385 | rusya | 1809-09-17 → 1917-03-15 | 11.996 | 68.707, 22.542 | Jukkasjärvi (120.7 km, isvec) | Petsamo (Peçenga) (356.0 km) | nehir Muonio 29.1 km · kıyı 116.2 km | — |
| K413 | ingiliz-sudani | 1919-09-08 → 1923-10-29 | 9.758 | 11.178, 23.374 | Birao (118.5 km, fransa-cumhuriyet) | Rağa (393.9 km) | nehir Aoukalé 59.7 km · göl Lake Chad 958.9 km | — |
| K438 | italya | 1894-05-05 → 1923-10-29 | 8.847 | 9.514, 49.175 | Taleh (92.5 km, ingiltere) | Aseb (802.5 km, bayraklı) | kıyı 155.2 km · nehir Shebele 680.3 km | — |
| K443 | almanya | 1901-01-01 → 1916-02-18 | 8.542 | 8.579, 12.771 | Yola (76.1 km, ingiltere) | Konstanz (4358.8 km) | nehir Bénoué 77.3 km · göl M'Bakaou Reservoir 227.5 km | — |
| K513 | guney-afrika-birligi | 1917-02-06 → 1920-12-17 | 5.598 | -17.539, 14.924 | Ondjiva (Ovambo) (98.4 km, portekiz-angola) | Valvis Körfezi (604.3 km) | nehir Cunene 46.5 km · kıyı 302.2 km | — |
| K580 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 3.634 | 68.368, 23.361 | Jukkasjärvi (124.4 km, isvec) | Petsamo (Peçenga) (339.9 km) | nehir Muonio 24.8 km · göl 143.0 km | — |
| K581 | sovyet-rusya | 1917-11-07 → 1917-12-06 | 3.634 | 68.368, 23.361 | Jukkasjärvi (124.4 km, isvec) | Petsamo (Peçenga) (339.9 km) | nehir Muonio 24.8 km · göl 143.0 km | — |
| K643 | cin-cumhuriyeti | 1911-10-10 → 1912-02-12 | 2.180 | 24.774, 97.717 | Myitkyina (74.6 km, ingiliz-hindistani) | Wuchang (Wuhan) (1756.2 km) | nehir Ayeyarwady 54.4 km · göl Kaptai Lake 591.0 km | — |
| K664 | brezilya-cumhuriyeti | 1889-11-15 → 1906-12-18 | 1.798 | -22.122, -56.868 | Tacuatí (Ypané) (158.7 km, paraguay-cumhuriyeti) | Ladário (354.4 km) | nehir Miranda 94.1 km · göl 349.9 km | — |
| K665 | brezilya-imparatorlugu | 1872-03-26 → 1889-11-15 | 1.798 | -22.122, -56.845 | Tacuatí (Ypané) (157.9 km, paraguay-cumhuriyeti) | Coxim (458.0 km) | nehir Miranda 92.1 km · göl 348.9 km | — |
| K685 | almanya | 1902-01-01 → 1916-02-18 | 1.377 | 12.874, 14.302 | Kukava (Kukawa) (80.5 km, ingiltere) | Konstanz (3897.3 km) | göl Lake Chad 1.2 km · nehir Chari 25.6 km | — |
| K744 | ingiliz-sudani | 1919-09-08 → 1923-10-29 | 728 | 14.416, 22.516 | Iriba (84.4 km, fransa-cumhuriyet) | Ümmü Bedr (580.6 km) | nehir Aoukalé 377.6 km · göl Lake Chad 850.1 km | — |
| K812 | ingiliz-hindistani | 1896-01-15 → 1923-10-29 | 106 | 20.797, 100.320 | Kengtung (92.3 km, san-devletleri) | Pyinmana (443.8 km) | nehir Lancang 1.4 km · göl Siri Kit Dam 306.5 km | — |
| K833 | rusya | 1905-06-07 → 1917-03-15 | 78 | 68.658, 23.459 | Jukkasjärvi (144.4 km, isvec) | Petsamo (Peçenga) (323.1 km) | nehir Muonio 48.9 km · göl 110.6 km | — |
| K834 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 78 | 68.658, 23.459 | Jukkasjärvi (144.4 km, isvec) | Petsamo (Peçenga) (323.1 km) | nehir Muonio 48.9 km · göl 110.6 km | — |
| K835 | sovyet-rusya | 1917-11-07 → 1917-12-06 | 78 | 68.658, 23.459 | Jukkasjärvi (144.4 km, isvec) | Petsamo (Peçenga) (323.1 km) | nehir Muonio 48.9 km · göl 110.6 km | — |
| K848 | cin-cumhuriyeti | 1911-10-10 → 1923-10-29 | 58 | 23.980, 97.582 | Namkham (19.4 km, san-devletleri) | Wuchang (Wuhan) (1807.7 km) | nehir Ayeyarwady 47.5 km · göl Kaptai Lake 550.1 km | — |

## EKSİK-NOKTA — En yakın herhangi bir nokta > 75 km — bölgede nokta yok (45)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| K196 | fransa | 1687-01-01 → 1792-09-22 | 36.474 | 5.823, -3.550 | Assinie (83.1 km, fransa) | Assinie (83.1 km) | nehir Komoé 9.1 km · kıyı 55.7 km | — |
| K256 | fransa-cumhuriyet | 1885-01-01 → 1896-01-01 | 27.623 | 9.906, -13.153 | Konakri (Conakry) (75.3 km, fransa-cumhuriyet) | Konakri (Conakry) (75.3 km) | kıyı 46.6 km · nehir Gêba 128.1 km | — |
| K265 | sili-cumhuriyeti | 1843-10-30 → 2000-12-31 | 26.956 | -52.904, -72.304 | Punta Arenas (96.4 km, sili-cumhuriyeti) | Punta Arenas (96.4 km) | kıyı 14.1 km · nehir Gallegos 83.0 km | — |
| K281 | somali | 1905-01-01 → 1941-02-25 | 23.993 | -0.548, 41.737 | Kısmâyû (92.3 km, somali) | Kısmâyû (92.3 km) | kıyı 45.4 km · göl 91.0 km | — |
| K355 | paraguay-cumhuriyeti | 1876-09-13 → 1923-10-29 | 14.908 | -28.066, -55.002 | Encarnación (Itapúa) (118.0 km, paraguay-cumhuriyeti) | Encarnación (Itapúa) (118.0 km) | nehir Uruguay 24.1 km · göl Laguna Iberá 184.2 km | — |
| K415 | portekiz | 1910-05-31 → 1923-10-29 | 9.642 | -21.997, 30.851 | Cikualakuala (86.1 km, portekiz-mozambik) | Cikualakuala (86.1 km, portekiz-mozambik) | nehir Limpopo 31.7 km · kıyı 438.9 km | — |
| K445 | meksika | 1854-06-30 → 1869-05-14 | 8.424 | 31.825, -113.956 | Yuma geçidi (La Purísima Concepción) (118.3 km, abd) | Misión San Vicente Ferrer (223.8 km) | kıyı 18.1 km · nehir Gila 98.2 km | — |
| K518 | portekiz | 1891-06-11 → 1923-10-29 | 5.472 | -15.025, 29.432 | Zumbo (127.1 km, portekiz-mozambik) | Zumbo (127.1 km, portekiz-mozambik) | nehir Zambezi 72.1 km · göl Lago de Cahora Bassa 161.6 km | — |
| K541 | habesistan | 1908-05-16 → 1923-10-29 | 4.651 | 12.907, 41.670 | Aseb (116.0 km, italya, bayraklı) | Alamata (236.3 km) | kıyı 84.4 km · göl Lake Gemeri 144.2 km | — |
| K584 | sovyet-rusya | 1917-11-07 → 1920-10-14 | 3.513 | 69.570, 29.169 | Petsamo (Peçenga) (79.7 km, sovyet-rusya) | Petsamo (Peçenga) (79.7 km) | kıyı 16.0 km · göl 28.0 km | — |
| K592 | ingiltere | 1915-07-09 → 1920-12-17 | 3.392 | -18.776, 21.134 | Rundu (172.0 km, ingiltere) | Rundu (172.0 km) | nehir Cubango 87.1 km · göl Lake Xau 464.8 km | — |
| E070 | brezilya-cumhuriyeti | 1900-05-26 → 1923-10-29 | 2.719 | -28.209, -57.070 | Maçambará (Recreio) (142.8 km, brezilya-cumhuriyeti) | Maçambará (Recreio) (142.8 km) | göl Laguna Iberá 2.9 km · nehir Paraná 80.0 km | — |
| K623 | portekiz | 1906-07-12 → 1923-10-29 | 2.668 | 13.093, -14.902 | Bissav (Bissau) (156.7 km, portekiz-gine) | Bissav (Bissau) (156.7 km, portekiz-gine) | nehir Gambia 47.7 km · kıyı 59.4 km | — |
| K631 | isvec | 1905-06-07 → 1923-10-29 | 2.469 | 68.798, 22.228 | Jukkasjärvi (121.4 km, isvec) | Jukkasjärvi (121.4 km) | nehir Muonio 35.7 km · kıyı 104.2 km | — |
| K638 | rusya | 1888-01-26 → 1917-03-15 | 2.238 | 37.487, 65.351 | Karşi (Nahşeb) (157.5 km, buhara) | Semerkant (279.3 km) | nehir Amu  Darya 24.8 km · göl Aydar Ko‘l 395.6 km | — |
| K639 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 2.238 | 37.487, 65.351 | Karşi (Nahşeb) (157.5 km, buhara) | Semerkant (279.3 km) | nehir Amu  Darya 24.8 km · göl Aydar Ko‘l 395.6 km | — |
| K640 | sovyet-rusya | 1917-11-07 → 1920-09-02 | 2.238 | 37.487, 65.351 | Karşi (Nahşeb) (157.5 km, buhara) | Semerkant (279.3 km) | nehir Amu  Darya 24.8 km · göl Aydar Ko‘l 395.6 km | — |
| K671 | rusya | 1888-01-26 → 1917-03-15 | 1.684 | 35.349, 62.492 | Herat (115.0 km, afganistan) | Merv (Mari) (256.4 km) | nehir Harirud 117.2 km · göl Aydar Ko‘l 703.8 km | — |
| K672 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 1.684 | 35.349, 62.492 | Herat (115.0 km, afganistan) | Merv (Mari) (256.4 km) | nehir Harirud 117.2 km · göl Aydar Ko‘l 703.8 km | — |
| K673 | sovyet-rusya | 1917-11-07 → 1923-10-29 | 1.684 | 35.349, 62.492 | Herat (115.0 km, afganistan) | Merv (Mari) (256.4 km) | nehir Harirud 117.2 km · göl Aydar Ko‘l 703.8 km | — |
| K684 | abd | 1874-01-01 → 1923-10-29 | 1.422 | 48.797, -114.293 | Fort Macleod (120.3 km, kanada) | Spokane House (262.3 km) | nehir Flathead 1.7 km · göl Flathead Lake 78.9 km | — |
| K697 | portekiz | 1914-01-01 → 1923-10-29 | 1.243 | -5.170, 14.410 | Mbanza-Kongo (São Salvador) (123.8 km, portekiz-angola) | Mbanza-Kongo (São Salvador) (123.8 km, portekiz-angola) | nehir Congo 29.4 km · kıyı 155.6 km | — |
| K703 | rusya | 1905-06-07 → 1917-03-15 | 1.188 | 69.406, 29.014 | Petsamo (Peçenga) (87.5 km, rusya) | Petsamo (Peçenga) (87.5 km) | göl Inarijrvi 8.0 km · nehir Patsoyoki 17.0 km | — |
| K704 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 1.188 | 69.406, 29.014 | Petsamo (Peçenga) (87.5 km, rusya-gecici-hukumet) | Petsamo (Peçenga) (87.5 km) | göl Inarijrvi 8.0 km · nehir Patsoyoki 17.0 km | — |
| K710 | ingiltere | 1911-05-17 → 1915-07-09 | 1.151 | -17.431, 22.261 | Senanga (181.1 km, ingiltere) | Senanga (181.1 km) | nehir Cuando 60.9 km · göl Lake Xau 498.7 km | — |
| K741 | ingiltere | 1895-06-16 → 1923-10-29 | 744 | 13.453, -13.973 | Bulebane (Bundu) (167.9 km, fransa-cumhuriyet) | Albreda-Cufure (258.5 km) | nehir Gambia 1.3 km · kıyı 143.0 km | — |
| E094 | fransa-cumhuriyet | 1912-01-01 → 1923-10-29 | 581 | 4.482, 27.154 | Niangara (Mangbetu) (118.6 km, belcika-kongo) | Obo (125.8 km) | nehir Bomu 69.5 km · göl Lake Albert 497.2 km | — |
| K764 | fransa-cumhuriyet | 1922-07-20 → 1923-10-29 | 461 | 6.885, 10.096 | Bamenda (103.1 km, ingiliz-kamerun) | Fumban (Bamum) (156.2 km, fransiz-kamerun-mandasi) | nehir Benue 146.3 km · göl M'Bakaou Reservoir 281.0 km | — |
| K776 | liberya | 1885-11-11 → 1923-10-29 | 323 | 7.168, -11.671 | Monrovia (136.2 km, liberya) | Monrovia (136.2 km) | kıyı 11.2 km · nehir St. Paul 128.5 km | — |
| E099 | maratha | 1803-08-12 → 1818-01-01 | 266 | 19.325, 73.881 | Nâsik (75.4 km, maratha) | Nâsik (75.4 km) | nehir Bhima 40.6 km · kıyı 88.1 km | — |
| E100 | polonya | 1919-08-27 → 1923-10-29 | 266 | 47.826, 24.974 | Çernovitz (Çernivtsi) (88.2 km, romanya-kralligi) | Haliç (144.8 km) | nehir 12.7 km · göl 255.0 km | — |
| K789 | macaristan-naiplik | 1919-09-10 → 1920-06-04 | 258 | 49.389, 22.265 | Ungvár (Uzhhorod) (85.3 km, cekoslovakya) | Eperjes (Prešov) (86.4 km) | nehir Dniester 44.3 km · göl 246.9 km | — |
| E101 | ingiliz-sudani | 1910-06-16 → 1923-10-29 | 216 | 4.027, 26.871 | Niangara (Mangbetu) (117.0 km, belcika-kongo) | Yambio (179.5 km) | nehir Uele 16.9 km · göl Lake Albert 490.6 km | — |
| K799 | kolombiya-cumhuriyeti | 1917-01-26 → 1923-10-29 | 164 | 1.015, -79.155 | Barbacoas (134.6 km, kolombiya-cumhuriyeti) | Barbacoas (134.6 km) | kıyı 9.5 km · nehir Mira 65.4 km | — |
| E109 | paraguay-cumhuriyeti | 1872-03-26 → 1915-11-11 | 144 | -21.662, -57.466 | Fuerte Olimpo (Borbón) (80.8 km, paraguay-cumhuriyeti) | Fuerte Olimpo (Borbón) (80.8 km) | nehir Paraná 44.6 km · göl 422.7 km | — |
| K805 | arjantin-cumhuriyeti | 1884-10-12 → 2000-12-31 | 126 | -54.304, -71.252 | Fuerte Bulnes (78.3 km, sili-cumhuriyeti) | Ushuaia (197.0 km) | kıyı 2.9 km · nehir Gallegos 249.1 km | — |
| K806 | belcika | 1916-05-01 → 1916-05-06 | 120 | -2.139, 30.851 | Kigali (90.4 km, alman-dogu-afrikasi) | Bukavu (225.0 km, belcika-kongo) | nehir Kagera 2.0 km · göl Lake Victoria 85.2 km | — |
| K807 | hollanda | 1802-01-01 → 1802-03-27 | 120 | 5.229, -58.578 | Beyan K4.5 B59.5 (130.4 km, None) | Kyk-over-al (Essequibo) (130.7 km) | nehir Essequibo 26.5 km · kıyı 128.1 km | — |
| K809 | maratha | 1674-06-06 → 1737-04-01 | 109 | 19.270, 73.871 | Nâsik (81.4 km, babur-imparatorlugu) | Pûne (Poona) (83.4 km) | nehir Bhima 34.8 km · kıyı 86.4 km | — |
| K810 | bicapur | 1636-01-01 → 1674-06-06 | 109 | 19.270, 73.871 | Nâsik (81.4 km, babur-imparatorlugu) | Pûne (Poona) (83.4 km) | nehir Bhima 34.8 km · kıyı 86.4 km | — |
| K825 | kolombiya-cumhuriyeti | 1917-01-26 → 1923-10-29 | 92 | 1.145, -79.078 | Barbacoas (119.8 km, kolombiya-cumhuriyeti) | Barbacoas (119.8 km) | kıyı 3.8 km · nehir Mira 53.2 km | — |
| E119 | abd | 1846-06-15 → 1877-10-05 | 68 | 45.958, -117.130 | Lapwai (Nez Perce) (97.9 km, nez-perce) | Fort Nez Percés (Walla Walla) (137.1 km) | nehir Columbia 20.3 km · göl Lake Pend Oreille 226.3 km | — |
| K852 | qing-hanedani | 1853-03-19 → 1860-06-02 | 54 | 32.625, 120.917 | Yangzhou (143.4 km, taiping) | Suzhou (150.7 km) | kıyı 0.1 km · göl 127.5 km | — |
| K855 | sokoto | 1901-01-01 → 1903-07-27 | 52 | 9.226, 11.044 | Yola (157.6 km, ingiltere) | Bauci (Bauchi) (178.7 km) | nehir Benue 10.6 km · göl M'Bakaou Reservoir 348.8 km | — |
| K858 | qing-hanedani | 1863-12-04 → 1864-07-19 | 51 | 32.625, 120.915 | Yangzhou (143.2 km, taiping) | Suzhou (150.7 km) | kıyı 0.2 km · göl 127.5 km | — |

## KIYI — Kıyı artığı (nokta kıyıya ≤ 10 km) (19)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| K423 | babur-imparatorlugu | 1759-03-04 → 1772-11-18 | 9.406 | 21.794, 73.152 | Broaç (Bharuch) (18.4 km, babur-imparatorlugu) | Broaç (Bharuch) (18.4 km) | nehir Narmada 0.2 km · kıyı 4.0 km | — |
| K659 | portekiz | 1945-09-02 → 1975-12-07 | 1.873 | -9.378, 124.153 | Lifau (Oecussi) (30.7 km, portekiz-timor) | Lifau (Oecussi) (30.7 km, portekiz-timor) | kıyı 8.4 km · nehir Ord 806.4 km | — |
| K660 | endonezya-dogu-timor | 1975-12-07 → 1999-10-25 | 1.873 | -9.378, 124.153 | Lifau (Oecussi) (30.7 km, endonezya-dogu-timor) | Lifau (Oecussi) (30.7 km) | kıyı 8.4 km · nehir Ord 806.4 km | — |
| K661 | untaet | 1999-10-25 → 2000-12-31 | 1.873 | -9.378, 124.153 | Lifau (Oecussi) (30.7 km, untaet) | Lifau (Oecussi) (30.7 km) | kıyı 8.4 km · nehir Ord 806.4 km | — |
| K663 | portekiz | 1914-06-25 → 1942-02-24 | 1.844 | -9.393, 124.148 | Lifau (Oecussi) (32.1 km, portekiz-timor) | Lifau (Oecussi) (32.1 km, portekiz-timor) | kıyı 9.9 km · nehir Ord 805.3 km | — |
| K688 | safevi | 1578-10-05 → 1578-11-01 | 1.318 | 42.632, 47.673 | Tarki (Tarku) (41.2 km, safevi) | Tarki (Tarku) (41.2 km) | kıyı 5.6 km · göl Mingevir Reservoir 194.6 km | — |
| K757 | macaristan | 1522-05-29 → 1537-03-12 | 495 | 43.601, 16.491 | Klis (5.2 km, macaristan) | Klis (5.2 km) | kıyı 6.9 km · nehir Sava 181.9 km | — |
| K777 | OSMANLI | 1574-08-24 → 1574-08-25 | 322 | 36.682, 10.332 | Halkulvâdî (16.0 km, OSMANLI) | Halkulvâdî (16.0 km) | kıyı 5.9 km · nehir Tevere 586.0 km | Qart-ḥadašt 19.0 km (pleiades_tur) |
| K780 | italya | 1861-03-17 → 1923-10-29 | 290 | 43.885, 7.809 | Menton (27.7 km, fransa-cumhuriyet) | Saluzzo (88.4 km) | kıyı 6.4 km · nehir Po 89.1 km | — |
| K781 | sardinya-piyemonte | 1861-03-07 → 1861-03-17 | 290 | 43.885, 7.809 | Menton (27.7 km, fransa-cumhuriyet) | Cenova (107.0 km) | kıyı 6.4 km · nehir Po 89.1 km | — |
| K798 | liberya | 1892-01-01 → 1923-10-29 | 171 | 4.502, -7.276 | Harper (51.1 km, liberya) | Harper (51.1 km) | kıyı 3.9 km · nehir Sassandra 133.4 km | — |
| K802 | fransa-cumhuriyet | 1814-05-04 → 1814-05-30 | 147 | 51.630, 4.206 | Rotterdam (37.7 km, hollanda) | Breda (39.3 km) | kıyı 2.0 km · nehir Maas 3.9 km | — |
| K808 | bati-hint-federasyonu | 1958-01-03 → 1962-05-31 | 112 | 10.091, -61.790 | Chaguaramas (68.2 km, bati-hint-federasyonu) | Chaguaramas (68.2 km) | kıyı 0.8 km · nehir Orinoco 54.5 km | — |
| K820 | norvec | 1905-06-07 → 2000-12-31 | 95 | 69.860, 29.915 | Petsamo (Peçenga) (61.0 km, finlandiya) | Vardø (72.6 km) | kıyı 5.4 km · nehir Patsoyoki 18.7 km | — |
| K821 | norvec-isvec-birligi | 1814-11-04 → 1905-06-07 | 95 | 69.860, 29.915 | Petsamo (Peçenga) (61.0 km, rusya) | Vardø (72.6 km) | kıyı 5.4 km · nehir Patsoyoki 18.7 km | — |
| K832 | liberya | 1892-01-01 → 1923-10-29 | 79 | 4.460, -7.421 | Harper (34.3 km, liberya) | Harper (34.3 km) | kıyı 8.1 km · nehir Sassandra 149.9 km | — |
| K841 | haudenosaunee | 1667-01-01 → 1777-01-01 | 68 | 45.594, -73.779 | Montreal (Ville-Marie) (19.4 km, fransa) | Kahnawake (21.6 km) | kıyı 3.2 km · nehir Richelieu 41.4 km | — |
| K847 | finlandiya | 1917-12-06 → 2000-12-31 | 62 | 65.765, 23.144 | Tornio (46.5 km, finlandiya) | Tornio (46.5 km) | kıyı 2.0 km · nehir Kalix 8.0 km | — |
| K851 | ezo-cumhuriyeti | 1869-01-27 → 1869-06-27 | 56 | 42.539, 140.755 | Sapporo (76.0 km, meiji-japonya) | Hakodate (85.6 km) | kıyı 0.5 km · nehir Ishikari 88.7 km | — |

## NEHİR/GÖL — Nehir/göl yaslanması artığı (nehir ≤ 15-40 km ya da göl ≤ 10 km) (77)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| K242 | ingiltere | 1673-01-01 → 1763-02-10 | 29.551 | 50.453, -73.249 | Mistassini (Lac Mistassini) (43.7 km, ingiltere) | Mistassini (Lac Mistassini) (43.7 km) | nehir Saguenay 7.4 km · göl Lake Mistassini 38.6 km | — |
| K262 | bengal-nevabligi | 1757-06-23 → 1760-10-11 | 27.270 | 22.275, 92.505 | Çatgam (Chittagong) (69.4 km, bengal-nevabligi) | Çatgam (Chittagong) (69.4 km) | göl Kaptai Lake 28.1 km · nehir Kaladan 34.1 km | — |
| E046 | almanya | 1941-10-25 → 1943-02-16 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, almanya) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| E047 | almanya | 1943-03-15 → 1943-08-23 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, almanya) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| E048 | guney-rusya-beyaz | 1919-08-01 → 1919-12-11 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, guney-rusya-beyaz) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| E049 | ukrayna-devleti-1918 | 1918-04-29 → 1918-12-14 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, ukrayna-devleti-1918) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| E050 | ukrayna-halk-cumhuriyeti | 1918-04-19 → 1918-04-29 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, ukrayna-halk-cumhuriyeti) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| E051 | ukrayna-halk-cumhuriyeti | 1918-12-14 → 1919-01-03 | 6.040 | 49.817, 35.850 | Harkov (33.6 km, ukrayna-halk-cumhuriyeti) | Harkov (33.6 km) | nehir Donets 39.7 km · göl 165.2 km | — |
| K508 | portekiz | 1505-01-01 → 1663-02-15 | 5.725 | 11.998, 75.602 | Kannûr (Cannanore) (30.5 km, portekiz) | Kannûr (Cannanore) (30.5 km) | kıyı 22.8 km · nehir Cauvery 35.4 km | — |
| K510 | hollanda | 1663-02-15 → 1771-01-01 | 5.696 | 11.998, 75.602 | Kannûr (Cannanore) (30.5 km, hollanda) | Kannûr (Cannanore) (30.5 km) | kıyı 22.8 km · nehir Cauvery 35.4 km | — |
| K559 | OSMANLI | 1738-05-08 → 1738-08-01 | 4.209 | 45.020, 22.318 | Orsova (Eski Orsova) (34.0 km, OSMANLI) | Orsova (Eski Orsova) (34.0 km) | nehir Danube 32.9 km · göl Lake Skadar 377.6 km | Karánşebeş (Caransebeş) 44.8 km (konum); Mehádia 13.8 km (konum4); Fethülislâm 50.9 km (konum4); Adakale 35.3 km (konum5) |
| K560 | macaristan-habsburg | 1688-01-01 → 1688-06-01 | 4.209 | 45.008, 22.317 | Orsova (Eski Orsova) (32.7 km, macaristan-habsburg) | Orsova (Eski Orsova) (32.7 km) | nehir Danube 31.7 km · göl Lake Skadar 376.5 km | Karánşebeş (Caransebeş) 46.1 km (konum); Mehádia 12.5 km (konum4); Fethülislâm 49.8 km (konum4); Adakale 34.0 km (konum5) |
| K562 | norvec | 1905-06-07 → 1920-10-14 | 4.190 | 69.568, 29.727 | Petsamo (Peçenga) (58.0 km, rusya) | Vardø (103.6 km) | nehir Patsoyoki 18.0 km · kıyı 19.0 km | — |
| K582 | salzburg-baspiskoposlugu | 1281-01-01 → 1555-01-01 | 3.549 | 46.276, 15.588 | Ptuj (Pettau) (26.9 km, salzburg-prens-basepiskoposlugu) | Ptuj (Pettau) (26.9 km, salzburg-prens-basepiskoposlugu) | nehir Drau 27.6 km · göl Lake Balaton 136.8 km | — |
| E077 | konbaung | 1752-01-01 → 1752-04-23 | 1.884 | 22.331, 96.055 | Halin (Hanlin) (28.3 km, konbaung) | Halin (Hanlin) (28.3 km) | nehir Ayeyarwady 4.3 km · kıyı 359.3 km | — |
| K670 | belcika | 1916-05-01 → 1916-05-06 | 1.688 | -0.975, 30.205 | Mbarara (Nkore) (64.9 km, ingiltere) | Butembo (160.4 km, belcika-kongo) | nehir Kagera 30.5 km · göl Lake Bunyonyi 43.7 km | — |
| K702 | ingiltere | 1922-07-20 → 1923-10-29 | 1.191 | 11.912, 14.561 | Ndjamena (56.9 km, fransa-cumhuriyet) | Kukava (Kukawa) (156.3 km) | nehir Chari 29.4 km · göl Lake Chad 108.8 km | — |
| E092 | gurcistan-demokratik-cumhuriyeti | 1919-04-20 → 1920-04-01 | 857 | 41.213, 42.240 | Şavşat (10.6 km, ingiltere) | Saylıca (16.0 km) | nehir Kura 25.3 km · kıyı 68.6 km | — |
| K726 | sovyet-rusya | 1917-12-15 → 1918-04-08 | 844 | 47.191, 27.953 | Yaş (26.9 km, romanya-kralligi) | Balta (150.2 km) | nehir Prut 10.5 km · kıyı 199.3 km | — |
| K739 | bulgar-carligi | 1390-01-01 → 1393-09-01 | 756 | 44.459, 27.998 | Hırsova (Hârșova) (25.5 km, bulgar-carligi) | Hırsova (Hârșova) (25.5 km) | nehir Borcea 4.7 km · kıyı 53.1 km | — |
| K746 | habsburg | 1815-06-09 → 1918-11-11 | 711 | 46.996, 10.044 | Davos (27.1 km, isvicre) | Landeck (42.7 km, avusturya) | nehir Inn 25.2 km · göl Bodensee 62.5 km | — |
| K758 | habsburg | 1918-11-08 → 1918-11-11 | 494 | 47.541, 12.109 | Innsbruck (61.8 km, avusturya) | Innsbruck (61.8 km, avusturya) | nehir Inn 1.6 km · göl Lago di Garda 206.4 km | — |
| K759 | yunanistan | 1913-08-10 → 1913-11-14 | 480 | 41.192, 22.818 | Doyran (8.5 km, sirbistan-kralligi) | Serez (61.9 km) | nehir Strymnas 28.7 km · kıyı 60.8 km | — |
| K761 | fransa-cumhuriyet | 1890-11-23 → 1918-11-19 | 474 | 49.468, 6.198 | Lüksemburg (16.6 km, luksemburg) | Verdun (68.3 km) | nehir Mosel 8.5 km · kıyı 241.4 km | — |
| K767 | fransa-cumhuriyet | 1860-03-24 → 1860-06-14 | 435 | 46.019, 6.827 | Martigny (Martinach) (21.2 km, isvicre) | Grenoble (126.1 km) | nehir Dora Baltea 24.1 km · göl Lake Geneva 42.8 km | — |
| K768 | sardinya-piyemonte | 1859-11-10 → 1860-03-24 | 435 | 46.019, 6.827 | Martigny (Martinach) (21.2 km, isvicre) | Bourg-Saint-Maurice (44.7 km) | nehir Dora Baltea 24.1 km · göl Lake Geneva 42.8 km | — |
| K769 | baden | 1815-06-09 → 1871-01-18 | 434 | 47.752, 8.407 | Zürih (42.9 km, isvicre) | Baden-Baden (113.1 km) | nehir Rhin 19.0 km · göl 37.0 km | — |
| K773 | habsburg | 1815-06-09 → 1859-11-10 | 341 | 46.044, 9.203 | Lugano (20.0 km, isvicre) | Como (27.8 km, avusturya) | nehir Ticino 22.9 km · göl Lago di Como 30.4 km | — |
| K774 | sardinya-piyemonte | 1859-11-10 → 1861-03-17 | 341 | 46.044, 9.203 | Lugano (20.0 km, isvicre) | Como (27.8 km) | nehir Ticino 22.9 km · göl Lago di Como 30.4 km | — |
| K779 | fransa-cumhuriyet | 1918-11-11 → 1918-11-17 | 307 | 47.510, 7.320 | Basel (20.8 km, isvicre) | Besançon (102.2 km) | nehir Doubs 19.4 km · göl Lake Geneva 122.6 km | — |
| K782 | sirbistan-kralligi | 1913-08-10 → 1918-12-01 | 280 | 41.225, 23.003 | Doyran (24.4 km, sirbistan-kralligi) | Doyran (24.4 km) | nehir Strymnas 12.8 km · kıyı 65.0 km | — |
| K783 | yugoslavya | 1918-12-01 → 1920-01-01 | 280 | 41.225, 23.003 | Doyran (24.4 km, yugoslavya) | Doyran (24.4 km) | nehir Strymnas 12.8 km · kıyı 65.0 km | — |
| K788 | baden | 1815-06-09 → 1871-01-18 | 262 | 47.651, 7.639 | Basel (10.9 km, isvicre) | Baden-Baden (131.4 km) | nehir Rhin 6.0 km · göl 93.0 km | — |
| K792 | safevi | 1545-12-26 → 1701-01-01 | 230 | 30.837, 47.358 | Kürne (20.9 km, OSMANLI) | Havîza (97.0 km) | göl Lake Hammar 4.2 km · nehir Euphrates 13.9 km | — |
| K794 | habsburg | 1918-11-03 → 1918-11-11 | 199 | 46.664, 13.095 | Lienz (30.9 km, avusturya) | Lienz (30.9 km, avusturya) | nehir Drau 8.9 km · kıyı 99.2 km | — |
| E103 | bizans | 1299-01-01 → 1313-01-01 | 186 | 40.059, 29.976 | Harmankaya (4.6 km, bizans) | Harmankaya (4.6 km) | nehir Sakarya 29.5 km · kıyı 73.2 km | — |
| K795 | sardinya-piyemonte | 1861-03-07 → 1861-03-17 | 183 | 45.803, 6.902 | Bourg-Saint-Maurice (22.9 km, fransa-cumhuriyet) | Aosta (33.2 km) | nehir Dora Baltea 0.7 km · göl Lake Geneva 66.7 km | — |
| K796 | fransiz-cinhindi | 1912-02-12 → 1923-10-29 | 175 | 22.704, 103.332 | Mengzi (74.2 km, cin-cumhuriyeti) | Muang Sing (281.7 km) | nehir Hong 29.7 km · kıyı 389.5 km | — |
| K797 | avusturya-cumhuriyet | 1918-11-12 → 1923-10-29 | 172 | 47.663, 9.542 | Bregenz (23.5 km, avusturya-cumhuriyet) | Bregenz (23.5 km) | göl Bodensee 3.5 km · nehir Rhein 12.4 km | — |
| K800 | habsburg | 1815-06-09 → 1859-11-10 | 160 | 45.955, 8.736 | Lugano (17.5 km, isvicre) | Como (31.4 km, avusturya) | göl Lago di Como 3.2 km · nehir Ticino 5.7 km | — |
| K801 | isvicre | 1918-11-12 → 1923-10-29 | 158 | 47.377, 9.560 | Feldkirch (15.7 km, avusturya-cumhuriyet) | Chur (Coira) (58.6 km) | nehir Rhein 3.6 km · göl Bodensee 13.3 km | — |
| E107 | avusturya-cumhuriyet | 1919-01-01 → 1920-07-16 | 156 | 48.529, 16.771 | Viyana (46.2 km, avusturya-cumhuriyet) | Viyana (46.2 km) | nehir Morava 10.4 km · göl Lake Balaton 199.3 km | — |
| E108 | karnatik | 1763-01-01 → 1801-07-31 | 145 | 12.630, 79.381 | Arkot (Arcot) (31.4 km, karnatik) | Arkot (Arcot) (31.4 km) | nehir Palar 27.1 km · kıyı 76.3 km | — |
| K811 | romanya-kralligi | 1918-04-08 → 1918-04-09 | 107 | 48.557, 27.416 | Bar (Podolya) (60.5 km, sovyet-rusya) | Dorohoi (100.5 km) | nehir Dniester 4.1 km · göl 94.1 km | — |
| E110 | ispanya | 1866-11-04 → 1923-10-29 | 106 | 38.912, -7.501 | Badajoz (46.1 km, ispanya) | Badajoz (46.1 km) | nehir Guadiana 27.8 km · kıyı 110.6 km | — |
| K813 | israil-devleti | 1948-05-14 → 1948-07-11 | 98 | 31.697, 35.402 | Kudüs (18.2 km, israil-devleti) | Kudüs (18.2 km) | göl Dead Sea 4.7 km · nehir Jordan 9.3 km | — |
| K815 | afsar | 1736-03-08 → 1747-06-20 | 96 | 30.831, 47.392 | Kürne (20.5 km, OSMANLI) | Havîza (95.3 km) | göl Lake Hammar 1.7 km · nehir Shatt al Arab 14.3 km | — |
| K816 | safevi | 1716-01-01 → 1736-03-08 | 96 | 30.831, 47.392 | Kürne (20.5 km, OSMANLI) | Havîza (95.3 km) | göl Lake Hammar 1.7 km · nehir Shatt al Arab 14.3 km | — |
| K817 | zend | 1747-06-20 → 1794-01-01 | 96 | 30.831, 47.392 | Kürne (20.5 km, OSMANLI) | Havîza (95.3 km) | göl Lake Hammar 1.7 km · nehir Shatt al Arab 14.3 km | — |
| K818 | kacar | 1794-01-01 → 1925-10-31 | 96 | 30.834, 47.391 | Kürne (20.2 km, OSMANLI) | Havîza (95.1 km) | göl Lake Hammar 2.0 km · nehir Shatt al Arab 14.2 km | — |
| K819 | iran | 1925-10-31 → 2000-12-31 | 96 | 30.840, 47.391 | Kürne (19.6 km, irak-kralligi) | Muhammere (86.5 km) | göl Lake Hammar 2.6 km · nehir Shatt al Arab 13.8 km | — |
| E112 | ingiltere | 1420-05-21 → 1422-01-01 | 93 | 48.340, 3.185 | Troyes (65.9 km, ingiltere) | Troyes (65.9 km) | nehir Yonne 1.2 km · kıyı 233.4 km | — |
| K824 | fransa | 1435-01-01 → 1439-01-01 | 93 | 48.340, 3.185 | Troyes (65.9 km, fransa) | Troyes (65.9 km) | nehir Yonne 1.2 km · kıyı 233.4 km | — |
| K826 | sovyet-rusya | 1917-12-15 → 1918-04-08 | 91 | 45.317, 28.361 | İshakçı (Isaccea) (9.1 km, romanya-kralligi) | Hacıbey (Odessa) (224.8 km) | nehir Danube 0.6 km · kıyı 57.6 km | Maçin 19.4 km (konum5) |
| K828 | sardinya-piyemonte | 1861-03-07 → 1861-03-17 | 85 | 45.105, 6.825 | Bourg-Saint-Maurice (57.3 km, fransa-cumhuriyet) | Torino (67.8 km) | nehir Durance 23.3 km · göl Lake Geneva 144.3 km | — |
| K829 | lur-i-buzurg | 1335-12-01 → 1393-01-01 | 82 | 30.853, 47.389 | Kürne (18.2 km, ilhanli) | Havîza (93.7 km) | göl Lake Hammar 4.0 km · nehir Shatt al Arab 13.2 km | — |
| K830 | timurlu | 1393-01-01 → 1442-01-16 | 82 | 30.853, 47.389 | Kürne (18.2 km, celayirli) | Havîza (93.7 km) | göl Lake Hammar 4.0 km · nehir Shatt al Arab 13.2 km | — |
| K831 | musasa | 1442-01-16 → 1494-10-02 | 82 | 30.853, 47.389 | Kürne (18.2 km, karakoyunlu) | Havîza (93.7 km) | göl Lake Hammar 4.0 km · nehir Shatt al Arab 13.2 km | — |
| E114 | almanya | 1129-01-01 → 1180-01-01 | 82 | 46.750, 15.835 | Maribor (Marburg) (26.0 km, None) | Graz (46.7 km) | nehir Mur 2.9 km · göl Lake Balaton 107.7 km | — |
| E115 | almanya | 1276-11-21 → 1281-01-01 | 82 | 46.750, 15.835 | Maribor (Marburg) (26.0 km, None) | Graz (46.7 km) | nehir Mur 2.9 km · göl Lake Balaton 107.7 km | — |
| E117 | karaman | 1365-01-01 → 1366-01-01 | 79 | 39.001, 34.044 | Kırşehir (19.2 km, eretna) | Nevşehir (Muşkara) (71.5 km) | nehir Kiz?lirmak 5.1 km · göl Lake Tuz 43.1 km | — |
| K836 | hollanda | 1820-03-28 → 1830-10-04 | 76 | 49.595, 5.421 | Virton (8.6 km, luksemburg-hollanda-birligi) | Dinant (82.5 km) | nehir Maas 20.4 km · kıyı 202.4 km | — |
| K837 | sovyet-rusya | 1917-11-07 → 1918-04-08 | 73 | 47.364, 27.626 | Yaş (23.1 km, romanya-kralligi) | Balta (162.5 km) | nehir Prut 2.1 km · göl 225.3 km | — |
| E118 | ispanya | 1866-11-04 → 1923-10-29 | 70 | 38.931, -7.260 | Badajoz (25.8 km, ispanya) | Badajoz (25.8 km) | nehir Guadiana 15.7 km · kıyı 130.1 km | — |
| K838 | sovyet-rusya | 1917-11-07 → 1918-01-01 | 70 | 45.216, 29.489 | Kili (31.2 km, sovyet-rusya) | Kili (31.2 km) | nehir Bratul Sulina 4.2 km · kıyı 10.6 km | — |
| K840 | ilhanli | 1281-01-01 → 1308-01-01 | 68 | 39.138, 33.432 | Kırşehir (63.1 km, ilhanli) | Kırşehir (63.1 km) | göl Lake Tuz 6.0 km · nehir Kiz?lirmak 17.9 km | — |
| K842 | OSMANLI | 1354-08-01 → 1392-11-01 | 66 | 40.566, 34.346 | Çorum (51.5 km, eretna) | Çankırı (61.8 km) | nehir Kiz?lirmak 1.6 km · kıyı 153.7 km | — |
| K843 | venedik | 1443-01-01 → 1571-01-01 | 63 | 42.300, 19.147 | Podgorica (18.3 km, OSMANLI) | Bar (Antivari) (22.6 km) | göl Lake Skadar 2.6 km · kıyı 19.5 km | — |
| K844 | zeta | 1356-01-01 → 1421-01-01 | 63 | 42.299, 19.150 | Podgorica (18.3 km, sirbistan) | Bar (Antivari) (22.5 km) | göl Lake Skadar 2.5 km · kıyı 19.5 km | — |
| K845 | sirbistan-nemanjic | 1281-01-01 → 1356-01-01 | 63 | 42.299, 19.150 | Podgorica (18.3 km, sirbistan) | Podgorica (18.3 km, sirbistan) | göl Lake Skadar 2.5 km · kıyı 19.5 km | — |
| K846 | sirp-despotlugu | 1421-01-01 → 1443-01-01 | 63 | 42.299, 19.150 | Podgorica (18.3 km, sirbistan) | Podgorica (18.3 km, sirbistan) | göl Lake Skadar 2.5 km · kıyı 19.5 km | — |
| E120 | italya | 1918-11-12 → 1923-10-29 | 58 | 46.805, 10.257 | Davos (32.3 km, isvicre) | Bormio (38.6 km) | nehir Inn 0.9 km · göl Bodensee 88.4 km | — |
| K849 | italya | 1918-11-03 → 1918-11-11 | 58 | 46.805, 10.257 | Davos (32.3 km, isvicre) | Bormio (38.6 km) | nehir Inn 0.9 km · göl Bodensee 88.4 km | — |
| K853 | timurlu | 1402-07-28 → 1402-09-15 | 53 | 40.566, 34.346 | Çorum (51.5 km, mehmed-celebi) | Çankırı (61.8 km) | nehir Kiz?lirmak 1.6 km · kıyı 153.7 km | — |
| K854 | romanya-kralligi | 1918-04-08 → 1918-04-09 | 52 | 48.561, 26.805 | Kamaniçe (21.1 km, sovyet-rusya) | Dorohoi (73.4 km) | nehir Dniester 1.5 km · göl 107.0 km | — |
| K856 | rusya | 1878-08-03 → 1917-03-15 | 51 | 45.224, 29.488 | Kili (30.4 km, rusya) | Kili (30.4 km) | nehir Bratul Sulina 5.0 km · kıyı 10.7 km | — |
| K857 | rusya-gecici-hukumet | 1917-03-15 → 1917-11-07 | 51 | 45.224, 29.488 | Kili (30.4 km, rusya-gecici-hukumet) | Kili (30.4 km) | nehir Bratul Sulina 5.0 km · kıyı 10.7 km | — |

## SINIR-ARTIĞI — Sınır çizgisi artığı (< 300 km², başka doğal sınır yakın değil) (10)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| E102 | isvicre | 1862-12-08 → 1923-10-29 | 205 | 46.378, 5.572 | Cenevre (47.9 km, isvicre) | Cenevre (47.9 km) | nehir Rhône 37.0 km · göl Lake Geneva 47.2 km | — |
| E106 | babur-imparatorlugu | 1759-01-01 → 1760-01-01 | 157 | 19.361, 73.899 | Nâsik (71.7 km, babur-imparatorlugu) | Nâsik (71.7 km) | nehir Bhima 45.0 km · kıyı 90.6 km | — |
| K804 | yunanistan | 1913-08-10 → 1913-11-14 | 128 | 41.076, 22.239 | Gevgili (Gevgelija) (23.3 km, sirbistan-kralligi) | Serez (109.5 km) | nehir Haliacmon 56.6 km · kıyı 72.8 km | — |
| K822 | ispanya | 1714-01-01 → 1810-05-25 | 94 | -24.007, -64.836 | Pucará de Tilcara (73.7 km, ispanyol-peru) | San Esteban de Miraflores (157.5 km) | nehir Bermejo 107.0 km · kıyı 569.9 km | — |
| K823 | arjantin-cumhuriyeti | 1810-05-25 → 1816-07-09 | 93 | -24.007, -64.836 | Pucará de Tilcara (73.7 km, ispanyol-peru) | San Esteban de Miraflores (157.5 km) | nehir Bermejo 107.0 km · kıyı 569.9 km | — |
| E113 | sovyet-rusya | 1918-01-04 → 1920-12-31 | 83 | 63.502, 30.584 | Nurmes (59.6 km, finlandiya) | Kem (252.0 km) | göl 35.8 km · nehir Yanisyoki 109.2 km | — |
| E116 | ming-hanedani | 1382-01-06 → 1382-01-15 | 80 | 24.212, 101.904 | Yuanjiang (68.6 km, kuzey-yuan, bayraklı) | Kunming (123.3 km) | nehir Hong 35.5 km · kıyı 602.0 km | — |
| K839 | transkafkasya | 1917-11-07 → 1918-03-14 | 70 | 41.352, 41.543 | Hopa (10.6 km, transkafkasya) | Hopa (10.6 km) | kıyı 11.7 km · nehir Kura 84.6 km | — |
| K850 | qing-hanedani | 1897-06-05 → 1911-10-10 | 58 | 23.980, 97.582 | Namkham (19.4 km, san-devletleri) | Tengyue (Tengchong) (147.7 km) | nehir Ayeyarwady 47.5 km · göl Kaptai Lake 550.1 km | — |
| E121 | isvicre | 1815-06-09 → 1923-10-29 | 50 | 46.075, 9.475 | Chiavenna (27.8 km, avusturya) | Bellinzona (37.2 km) | nehir Inn 42.0 km · göl Lago di Como 49.3 km | — |

## BELİRSİZ — Sınıflanamadı (18)

| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |
|---|---|---|---|---|---|---|---|---|
| K364 | slovakya-cumhuriyeti | 1939-03-14 → 1945-04-04 | 14.522 | 49.389, 21.346 | Eperjes (Prešov) (44.1 km, slovakya-cumhuriyeti) | Eperjes (Prešov) (44.1 km) | nehir Vistula 105.9 km · göl 183.5 km | — |
| K365 | cekoslovakya | 1938-11-02 → 1939-03-14 | 14.519 | 49.389, 21.346 | Eperjes (Prešov) (44.1 km, cekoslovakya) | Eperjes (Prešov) (44.1 km) | nehir Vistula 105.9 km · göl 183.5 km | — |
| K389 | ingiltere | 1816-04-23 → 1965-02-18 | 11.810 | 13.003, -16.157 | Albreda-Cufure (43.3 km, ingiltere) | Albreda-Cufure (43.3 km) | kıyı 28.2 km · nehir Gambia 104.7 km | — |
| K412 | fransa-cumhuriyet | 1895-06-16 → 1923-10-29 | 9.765 | 13.076, -16.136 | Albreda-Cufure (37.9 km, ingiltere) | Kahone (Salum) (94.0 km) | kıyı 21.0 km · nehir Gambia 98.3 km | — |
| K520 | fransa-cumhuriyet | 1922-07-20 → 1923-10-29 | 5.384 | 5.255, 8.907 | Eski Kalabar (72.8 km, ingiltere) | Duala (160.2 km, fransiz-kamerun-mandasi) | kıyı 59.6 km · nehir Sanaga 207.3 km | — |
| K546 | ingiliz-malaya | 1909-07-10 → 1946-04-01 | 4.508 | 2.562, 102.469 | Malaka (47.4 km, ingiliz-malaya) | Malaka (47.4 km) | kıyı 47.4 km · nehir Pahang 84.3 km | — |
| K547 | ingiliz-malaya | 1874-01-20 → 1888-01-01 | 4.488 | 2.562, 102.469 | Malaka (47.4 km, ingiliz-malaya) | Malaka (47.4 km) | kıyı 47.4 km · nehir Pahang 84.3 km | — |
| K555 | qing-hanedani | 1676-03-01 → 1677-01-01 | 4.261 | 23.140, 116.287 | Swatow (Shantou) (47.2 km, qing-hanedani) | Swatow (Shantou) (47.2 km) | kıyı 17.9 km · nehir Dong 152.2 km | — |
| K608 | ingiltere | 1895-06-16 → 1899-01-01 | 3.040 | 8.003, -2.613 | Bondugu (Gyaaman) (21.0 km, fransa-cumhuriyet) | Bono-Manso (Techiman kuzeyi) (90.9 km, ingiliz-altin-kiyisi) | nehir Mouhoun 49.6 km · göl Lake Volta 121.2 km | — |
| K609 | ingiliz-kuzey-amerika | 1830-01-01 → 1923-10-29 | 2.998 | 57.846, -62.580 | Hebron (Labrador) (39.4 km, ingiliz-kuzey-amerika) | Hebron (Labrador) (39.4 km) | kıyı 11.4 km · nehir Fraser 133.6 km | — |
| K612 | newfoundland-dominyonu | 1923-10-29 → 1934-02-16 | 2.928 | 57.841, -62.575 | Hebron (Labrador) (40.0 km, newfoundland-dominyonu) | Hebron (Labrador) (40.0 km) | kıyı 12.1 km · nehir Fraser 133.1 km | — |
| K613 | newfoundland-komisyon-hukumeti | 1934-02-16 → 1949-03-31 | 2.928 | 57.841, -62.575 | Hebron (Labrador) (40.0 km, newfoundland-komisyon-hukumeti) | Hebron (Labrador) (40.0 km) | kıyı 12.1 km · nehir Fraser 133.1 km | — |
| K642 | ingiltere | 1895-06-16 → 1923-10-29 | 2.186 | 12.715, -16.323 | Kaşev (Cacheu) (52.2 km, portekiz-gine) | Albreda-Cufure (69.4 km) | kıyı 11.5 km · nehir Gambia 138.7 km | — |
| K658 | meiji-japonya | 1942-02-24 → 1942-03-09 | 1.875 | -9.401, 124.134 | Lifau (Oecussi) (33.9 km, meiji-japonya) | Lifau (Oecussi) (33.9 km) | kıyı 10.1 km · nehir Ord 805.4 km | — |
| K668 | rusya | 1774-07-21 → 1778-01-01 | 1.704 | 46.335, 32.201 | Kılburun (Kinburn) (58.3 km, rusya) | Kılburun (Kinburn) (58.3 km) | kıyı 15.0 km · nehir Dnipro 48.8 km | — |
| K693 | habsburg | 1918-11-03 → 1918-11-11 | 1.290 | 47.032, 11.779 | Brixen (Bressanone) (36.5 km, italya) | Innsbruck (39.3 km, avusturya) | nehir Inn 35.2 km · göl Lago di Garda 144.8 km | — |
| K738 | sardinya-piyemonte | 1861-03-07 → 1861-03-17 | 762 | 45.423, 7.202 | Aosta (36.1 km, sardinya-piyemonte) | Aosta (36.1 km) | nehir Dora Baltea 34.1 km · göl Lake Geneva 111.4 km | — |
| K775 | rusya | 1877-12-10 → 1878-07-13 | 339 | 43.270, 23.918 | Plevne (58.8 km, rusya) | Plevne (58.8 km) | nehir Danube 57.2 km · kıyı 261.7 km | — |

## Ölçülmedi

- Parça poligonu, gerçek motor hücre ataması (koşu 32 `coz-c` gerekir) — LAB SALI'nın işi bitince ya da HAVVA'da.
- Sırt/yükseklik yaslanması. Tanık adaylarının o devirde varlığı ve sahibi (KAYNAK-GEREK, merdiven ①-⑤).

# SİLSİLE KOORDİNAT KATMANI — halka ③ adla çözülmeyen yerlerin gazeteerle eşlenmesi

*Bu dosya `py arac/silsile_olc.py --gazeteer-geonames <zip> --gazeteer-pleiades <dizin>` tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*

> Koordinat kaynakları: GeoNames cities1000 (geonames.org, CC BY 4.0) · Pleiades (pleiades.stoa.org, NYU ISAW, CC BY 3.0). Gazeteer TARİH DAYANAĞI DEĞİLDİR — yalnız koordinat ve ad birleştirme içindir.

| | |
|---|---|
| ağaç | `C:\atlas\.claude\worktrees\agent-a3e19d4d872171be7` |
| dal · commit | `worktree-agent-a3e19d4d872171be7` · `183c324e30aa531f9e677e460745bcc4754d2147` |
| data/ + girdi kirli mi | HAYIR (temiz) |
| makine · zaman · süre | EMRELIC · 2026-10-14 11:50 · 62 sn |
| GeoNames | 171228 kayıt okundu · sorgu adına uyan 1046 kayıt |
| Pleiades | 42499 yer (7612 koordinatsız atlandı) · sorgu adına uyan 245 kayıt |

## Yöntem
- **Sorgu:** adla çözülmeyen her ŞEHİR parçası (`denetim/SILSILE-OLCUM-1014` ile aynı evren, aynı `parca_coz` denemeleri: asıl, parantez/eğik çizgi alternatifleri, betimleyicisiz çekirdek) `sadelestir` + açık transliterasyon kurallarıyla anahtara çevrilir. GeoNames'te `name`, `asciiname`, `alternatenames` (kod/sayı/URL elenir); Pleiades'te yer `title` + names tablosunun `nameTransliterated`/`nameAttested` alanları aranır.
- **Bağlam merdiveni (en dardan):** ① maddenin kendi `yer_kon`u ≤50 km · ② aynı maddede adla BULUNAN atlas yerleşimleri (dışbükey zarf + 300 km) · ③ `taraflar` künyelerinin sahip olduğu atlas noktaları (`s:d`; `d:`/`v:` = osmanli) zarfı + 300 km · ④ taraf künyelerinin `bolge`si: EV BÖLGESİ o bolge olan noktalar (ev bölgesi = noktanın en uzun süreli osmanli-dışı sahibinin `bolge`si; osmanli ağırlıklı noktalar en yakın 7 noktanın oyuyla — künyenin fetih noktaları bölgeyi şişirmesin diye: İlhanlı `iran` künyesi Anadolu'yu da tuttuğundan birleşim alanı Aydın'daki `Alamut` köyünü içine alıyordu). Zarf ancak ≤1200 derece² ise kullanılır (kıtalar arası künyede — ABD+Japonya, sömürgeli Almanya — zarf Asya'yı yutuyordu: `Hawaii`→Assam'daki `Hawai`, `Lidice`→Panama), değilse yalnız tampon. *Dosya varsayımı (taraflarsız `olaylar*.js` = osmanli) denendi ve ATILDI*: Osmanlı alanı üç kıta olduğundan Ayastefanos→Adana'daki Yeşilköy, Kozluca→Burdur, Uşi (Ouchy)→Gürün yanlışlarını verdi. Başkentte bağlam = künyenin kendisi (③) ve `bolge`si (④). İlk aday veren katmanda adaylar 10 km'lik tek bağlantıyla kümelenir: **tek küme → seçilir; >1 küme → `belirsiz`, SEÇİLMEZ**. Geniş katmanlarda (④ ⑤) yalnız GeoNames `alternatenames` eşleşmesi yetmez (asıl ad ya da Pleiades adı gerekir; yoksa `belirsiz`). Hiçbir katmanda aday yoksa `belirsiz (bağlam dışı)`; bağlam hiç yoksa `belirsiz (bağlam yok)`.
- **Kaynak önceliği:** madde (ya da künye `f`) yılı < 1500 → Pleiades kaydı temsilci, aksi hâlde GeoNames; aynı kümede öteki gazeteerin kaydı varsa iki kaynak arası km yazılır.
- **Sınıf (temsilcinin en yakın atlas yerleşimine uzaklığı, `girdi.yukle()` evreni):** ≤3 km `atlasta-farkli-adla` (eşanlam ADAYI) · 3–15 km `yakin-incele` · >15 km `atlasta-yok` (yeni nokta ADAYI).
- Bu araç `arac/yer_esanlam.json`a ve `data/`ya **YAZMAZ**. `esanlam_oneri.tsv` onay bekleyen listedir: kaynaklı bulunursa elle `elle` bölümüne geçer. Gazeteer tarih dayanağı değildir.

## Önce / sonra (halka ③)
| ölçü | önce (yalnız ad) | sonra (ad + koordinat) |
|---|---|---|
| çözülmeyen ŞEHİR adı (ayrı anahtar) | 547 | **507** |
| çözülmeyen ŞEHİR parçası | 706 | **627** |
| başkenti indekste OLMAYAN künye (hiç + kısmi) | 433 | **369** |
| — hiçbir başkent parçası yok | 321 | 264 |
| — kısmi | 112 | 105 |

*"Sonra"da yalnız `atlasta-farkli-adla` çözülmüş sayılır — o da eşanlam ADAYIdır; onaylanmadan atlas sözlüğüne girmez. `yakin-incele`, `atlasta-yok`, `belirsiz` çözülmemiş kalır (koordinatı bilinir, atlasta karşılığı yok ya da kesin değil).*

## Sınıf dağılımı
| sınıf | kronoloji parçası | başkent parçası |
|---|---|---|
| atlasta-farkli-adla | 79 | 75 |
| yakin-incele | 31 | 29 |
| atlasta-yok | 197 | 128 |
| belirsiz | 110 | 123 |
| gazeteerde-yok | 289 | 157 |

Anahtar (ayrı ad) düzeyi — kronolojide çözülmeyen 547 ad: gazeteerde-yok 248 · atlasta-yok 137 · belirsiz 86 · atlasta-farkli-adla 40 · yakin-incele 21 · atlasta-yok+belirsiz 6 · atlasta-farkli-adla+belirsiz 5 · atlasta-yok+gazeteerde-yok 2 · yakin-incele+gazeteerde-yok 1 · yakin-incele+belirsiz 1

Belirsiz sebepleri (parça): baglamda-N-ayri-yer 86 · baglam-disi 76 · genis-baglamda-yalniz-geonames-alternatif-ad 46 · baglam-yok 25

Adaş (aynı ad, maddeler arasında >10 km ayrı İKİ yere çözüldü): 0 anahtar — yok

Dosyalar: `esanlam_oneri.tsv` (85) · `yakin_incele.tsv` (46) · `yeni_nokta_aday.tsv` (251) · `belirsiz.tsv` (233) · `gazeteerde_yok.tsv` (446) · `sinav.tsv` · `ozet.json`

## Sınav — iki yön + adaş (`sinav.tsv`)
| tür | girdi | bağlam | yıl | sınıf | sebep | katman | seçilen | lat,lon | en yakın atlas | km | ≤3 km atlas | kaynaklar arası km | hüküm |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VAR (farklı adla) | Şanlıurfa | artuklu | 1100 | atlasta-farkli-adla |  | taraf:artuklu | pleiades:658457 Şanlıurfa | 37.1486,38.7867 | Urfa | 1.42 | Urfa | 2.1 | geçti |
| VAR (farklı adla) | Budapeşte | macaristan | 1900 | atlasta-farkli-adla |  | taraf:macaristan | geonames:3054643 Budapeste | 47.4984,19.0404 | Budin | 0.05 | Budin / Peşte | None | geçti |
| VAR (farklı adla) | Addis Ababa | habesistan | 1930 | atlasta-farkli-adla |  | taraf:habesistan | geonames:344979 Addis Ababa | 9.0250,38.7469 | Addis | 0.94 | Addis | None | geçti |
| ADAŞ (iki Ani) | Ani | ani-bagratli-kralligi,bizans | 1045 | belirsiz | baglamda-2-ayri-yer | bolge:balkanlar,kafkasya | adaylar: pleiades:863739 Ani (40.506,43.571) / pleiades:874322 Ani (39.603,39.036) |  |  |  |  |  | geçti |
| YOK (koordinatlı) | Ani |  + aynı madde: Kars | 1045 | yakin-incele |  | ayni-madde-yerleri | pleiades:863739 Ani | 40.5063,43.5706 | Kliçatak (Suser) | 14.55 |  | None | geçti (yakin-incele: Kliçatak (Suser) 14.6 km'de, başka yer) |
| YOK (koordinatlı) | Harran | selcuklu | 1100 | atlasta-yok |  | taraf:selcuklu | pleiades:658427 Harran | 36.8636,39.0307 | Akçakale | 18.64 |  | 0.4 | geçti |
| YOK (gazeteerde yok) | Alamut | alamut-nizari | 1100 | belirsiz | baglam-disi | bolge:iran | adaylar: geonames:324221 Alamut (37.809,28.292) |  |  |  |  |  | geçti |
| YOK (koordinatlı) | Mistra | bizans | 1400 | atlasta-yok |  | taraf:bizans | geonames:256886 Mistra | 37.0685,22.3722 | Koron | 47.89 |  | None | geçti |
| ADAŞ | Kuba | kuba-hanligi | 1750 | atlasta-farkli-adla |  | bolge:kafkasya | geonames:585221 Quba | 41.3611,48.5134 | Kuba | 0.22 | Kuba | None | geçti |
| ADAŞ | Küba | kuba-cumhuriyeti | 1950 | belirsiz | baglam-disi | taraf:kuba-cumhuriyeti > bolge:orta-amerika-karayip | adaylar: geonames:585221 Quba (41.361,48.513) / geonames:3465059 Kuba (-23.895,-46.425) / geonames:4383070 Kuba (38.063,-91.403) …+4 |  |  |  |  |  | geçti |
| ADAŞ | Saint-Pierre | (bağlam yok) | 1700 | belirsiz | baglam-yok |  | adaylar: geonames:2787352 Saint-Pierre (49.904,5.388) / geonames:2484835 Saint Pierre (36.684,3.367) / geonames:2977411 Saint-Pierre (49.017,-0.033) …+31 |  |  |  |  |  | geçti |
| ADAŞ | Saint-Pierre | martinik | 1700 | atlasta-farkli-adla |  | taraf:martinik | geonames:3569907 Saint-Pierre | 14.7431,-61.1754 | Saint-Pierre (Martinik) | 0.05 | Saint-Pierre (Martinik) | None | geçti |
| ADAŞ | Kediri | kediri | 1100 | belirsiz | baglamda-2-ayri-yer | bolge:guneydogu-asya | adaylar: geonames:1640658 Kediri (-8.634,116.151) / geonames:1640660 Kediri (-7.817,112.017) |  |  |  |  |  | geçti |

## En sık geçen 50 `atlasta-yok` şehir (yeni nokta ADAYI)
| # | ad | madde | künye başkenti | lat | lon | kaynak id | gazeteer adı | en yakın atlas (km) | bağlam katmanı |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Washington | 15 | 0 | 38.89511 | -77.03637 | [geonames:4140963](https://www.geonames.org/4140963) | Washington | Baltimore (57.18) | yer_kon<=50km |
| 2 | Tiran | 7 | 5 | 41.32744 | 19.81866 | [geonames:3183875](https://www.geonames.org/3183875) | Tirana | Akçahisar (Kruja) (20.3) | yer_kon<=50km |
| 3 | Meyyâfârikîn (Silvan) | 3 | 2 | 38.14279 | 41.00326 | [pleiades:874573](https://pleiades.stoa.org/places/874573) | Maipa/Martyropolis/Ioustinianopolis | Hasankeyf (59.65) | taraf:eyyubi |
| 4 | Polonnaruva | 5 | 0 | 7.94751 | 81.00134 | [pleiades:348371058](https://pleiades.stoa.org/places/348371058) | Polonnaruwa | Kandy (83.37) | taraf:seylan-sinhala |
| 5 | Ahlat | 3 | 1 | 38.75278 | 42.49444 | [pleiades:874409](https://pleiades.stoa.org/places/874409) | Calata | Bitlis (51.56) | bolge:anadolu |
| 6 | Canberra | 3 | 1 | -35.28346 | 149.12807 | [geonames:2172517](https://www.geonames.org/2172517) | Canberra | Goulburn (80.15) | yer_kon<=50km |
| 7 | Cürcân | 4 | 0 | 37.10000 | 56.30000 | [pleiades:942333](https://pleiades.stoa.org/places/942333) | Varkana/Hyrcania/Gurgan | Bocnûrd (100.12) | bolge:iran,orta-asya |
| 8 | Harran | 3 | 0 | 36.86359 | 39.03075 | [pleiades:658427](https://pleiades.stoa.org/places/658427) | Harran/Carrhae | Akçakale (18.64) | taraf:antakya-prinkipsligi,artuklu,buyuk-selcuklu |
| 9 | Hattusa | 0 | 3 | 40.02543 | 34.63271 | [pleiades:478681498](https://pleiades.stoa.org/places/478681498) | Yazılıkaya (Hattusa) | Çorum (64.42) | bolge:anadolu |
| 10 | Kinsale | 3 | 0 | 51.70750 | -8.53056 | [geonames:2963155](https://www.geonames.org/2963155) | Kinsale | Cork (21.57) | ayni-madde-yerleri |
| 11 | Managua | 2 | 1 | 12.13282 | -86.25040 | [geonames:3617763](https://www.geonames.org/3617763) | Managua | León (Nikaragua) (76.11) | yer_kon<=50km |
| 12 | Silvan | 3 | 0 | 38.13708 | 41.00817 | [geonames:300796](https://www.geonames.org/300796) | Silvan | Hasankeyf (58.89) | bolge:anadolu |
| 13 | Urambo | 3 | 0 | -5.06667 | 32.05000 | [geonames:149172](https://www.geonames.org/149172) | Urambo | Tabora (Kazeh) (83.24) | bolge:dogu-afrika |
| 14 | Berwick | 2 | 0 | 55.76868 | -2.00537 | [geonames:2655819](https://www.geonames.org/2655819) | Berwick-Upon-Tweed | Edinburg (76.65) | taraf:iskocya |
| 15 | Büyükçekmece | 2 | 0 | 41.02072 | 28.58502 | [geonames:6947641](https://www.geonames.org/6947641) | Büyükçekmece | Çatalca (17.16) | ayni-madde-yerleri |
| 16 | Çayeli | 2 | 0 | 41.08609 | 40.72213 | [geonames:749502](https://www.geonames.org/749502) | Çayeli | Rize (18.24) | ayni-madde-yerleri |
| 17 | Çıldır | 2 | 0 | 41.12525 | 43.13645 | [geonames:749109](https://www.geonames.org/749109) | Çıldır | Hanak (26.28) | ayni-madde-yerleri |
| 18 | Dhâr | 0 | 2 | 22.59373 | 75.29774 | [geonames:1272892](https://www.geonames.org/1272892) | Dhār | Mandu (Mândû) (30.63) | taraf:malva-sultanligi |
| 19 | Dînever | 2 | 0 | 34.61753 | 47.46222 | [pleiades:903012](https://pleiades.stoa.org/places/903012) | Denabaran/Dinawar | Kirmanşah (49.65) | bolge:iran |
| 20 | Entebbe | 0 | 2 | 0.05621 | 32.47949 | [geonames:233508](https://www.geonames.org/233508) | Entebbe | Mengo (Buganda) (34.43) | taraf:ingiliz-uganda-himayesi |
| 21 | Gnezno | 2 | 0 | 52.53481 | 17.58259 | [geonames:3099112](https://www.geonames.org/3099112) | Gniezno | Poznan (46.23) | taraf:polonya-erken |
| 22 | Gümüşhane | 2 | 0 | 40.46001 | 39.47176 | [geonames:746425](https://www.geonames.org/746425) | Gümüşhane | Kelkit (37.02) | ayni-madde-yerleri |
| 23 | Haliç | 2 | 0 | 49.12374 | 24.72748 | [geonames:709034](https://www.geonames.org/709034) | Halych | Yazlofça (Yazlovets) (55.04) | taraf:macaristan |
| 24 | Hulvân | 1 | 1 | 34.46511 | 45.85589 | [pleiades:903043](https://pleiades.stoa.org/places/903043) | [Hulwan]/Valashfarr/Beth Lashpar/Chala/Albania | Kasr-ı Şîrîn (26.14) | bolge:iran |
| 25 | Karánşebeş (Caransebeş) | 2 | 0 | 45.41667 | 22.21667 | [geonames:682729](https://www.geonames.org/682729) | Caransebeş | Lugos (Lugoj) (38.82) | ayni-madde-yerleri |
| 26 | Mahoba | 1 | 1 | 25.29050 | 79.87533 | [geonames:1264359](https://www.geonames.org/1264359) | Mahobā | Orchha (Orcha) (124.34) | bolge:guney-asya |
| 27 | Melun | 2 | 0 | 48.54570 | 2.65356 | [geonames:2994651](https://www.geonames.org/2994651) | Melun | Paris (41.08) | taraf:fransa |
| 28 | Pavia | 0 | 2 | 45.18590 | 9.15656 | [pleiades:383798](https://pleiades.stoa.org/places/383798) | Ticinum | Milano (31.03) | bolge:italya |
| 29 | Potsdam (Cecilienhof) | 2 | 0 | 52.39886 | 13.06566 | [geonames:2852458](https://www.geonames.org/2852458) | Potsdam | Spandau (Batı Berlin) (17.66) | yer_kon<=50km |
| 30 | Sais | 0 | 2 | 30.96715 | 30.77437 | [pleiades:727217](https://pleiades.stoa.org/places/727217) | Sais | Dessûk (22.26) | bolge:misir-sudan |
| 31 | Sis | 0 | 2 | 37.44887 | 35.81635 | [pleiades:34546779](https://pleiades.stoa.org/places/34546779) | Sissû | Erzin (64.62) | taraf:kilikya-ermeni |
| 32 | Tegucigalpa | 1 | 1 | 14.08180 | -87.20681 | [geonames:3600949](https://www.geonames.org/3600949) | Tegucigalpa | Comayagua (Valladolid de Comayagua) (62.53) | yer_kon<=50km |
| 33 | Zafâr | 1 | 1 | 14.21170 | 44.40079 | [pleiades:39423](https://pleiades.stoa.org/places/39423) | Ẓafār | Taiz (81.37) | taraf:resuli |
| 34 | Aarau | 0 | 1 | 47.39254 | 8.04422 | [geonames:2661881](https://www.geonames.org/2661881) | Aarau | Zürih (37.44) | taraf:helvetik-cumhuriyeti |
| 35 | Abidjan | 0 | 1 | 5.35444 | -4.00167 | [geonames:2293538](https://www.geonames.org/2293538) | Abidjan | Assinie (84.52) | taraf:fildisi-sahili |
| 36 | Aigion | 0 | 1 | 38.25271 | 22.08195 | [pleiades:570049](https://pleiades.stoa.org/places/570049) | Aigion | İnebahtı (27.55) | bolge:balkanlar |
| 37 | Aizkraukle (Ascheraden) | 1 | 0 | 56.60477 | 25.25534 | [geonames:461615](https://www.geonames.org/461615) | Aizkraukle | Cēsis (Wenden) (78.65) | taraf:litvanya-buyuk-dukalik |
| 38 | Akdamar | 0 | 1 | 38.34078 | 43.03649 | [pleiades:359852689](https://pleiades.stoa.org/places/359852689) | Akdamar Island | Van (35.86) | bolge:kafkasya |
| 39 | Amalfi | 0 | 1 | 40.63490 | 14.60238 | [geonames:3183130](https://www.geonames.org/3183130) | Amalfi | Salerno (16.69) | bolge:italya |
| 40 | Amapala | 1 | 0 | 13.29222 | -87.65389 | [geonames:3615213](https://www.geonames.org/3615213) | Amapala | La Unión (El Salvador) (21.06) | yer_kon<=50km |
| 41 | Ambur | 1 | 0 | 12.79163 | 78.71644 | [geonames:1278815](https://www.geonames.org/1278815) | Ambur | Vellor (Vellore) (47.13) | ayni-madde-yerleri |
| 42 | Andravida | 0 | 1 | 37.90588 | 21.26936 | [geonames:265056](https://www.geonames.org/265056) | Andravída | Zaklise (Zakynthos) (45.34) | taraf:ahaya-prinkepsligi |
| 43 | Arnhem | 0 | 1 | 51.98000 | 5.91111 | [geonames:2759661](https://www.geonames.org/2759661) | Arnhem | Nijmegen (15.76) | bolge:bati-avrupa |
| 44 | Attika | 1 | 0 | 38.18349 | 23.50583 | [pleiades:580053](https://pleiades.stoa.org/places/580053) | Panakton (Attika) | İstefe (Tebai) (22.44) | ayni-madde-yerleri |
| 45 | Austin | 0 | 1 | 30.26715 | -97.74306 | [geonames:4671654](https://www.geonames.org/4671654) | Austin | San Antonio (Misyon San Antonio de Valero) (117.83) | taraf:teksas-cumhuriyeti |
| 46 | Babaeski | 1 | 0 | 41.42809 | 27.09660 | [geonames:751371](https://www.geonames.org/751371) | Babaeski | Lüleburgaz (22.02) | ayni-madde-yerleri |
| 47 | Badami (Vatapi) | 0 | 1 | 15.91495 | 75.67683 | [geonames:1278017](https://www.geonames.org/1278017) | Bādāmi | Bîcâpur (Bijapur) (101.48) | bolge:guney-asya |
| 48 | Bamburgh | 0 | 1 | 55.60652 | -1.71704 | [geonames:2656425](https://www.geonames.org/2656425) | Bamburgh | Newcastle (70.17) | bolge:bati-avrupa |
| 49 | Bandiagara | 1 | 0 | 14.35005 | -3.61038 | [geonames:2460489](https://www.geonames.org/2460489) | Bandiagara | Hamdullahi (62.27) | bolge:bati-afrika |
| 50 | Banská Bystrica | 1 | 0 | 48.73947 | 19.14932 | [geonames:3061186](https://www.geonames.org/3061186) | Banská Bystrica | Léva (Levice) (70.51) | yer_kon<=50km |

## Belirsizler (`belirsiz.tsv`, tam liste)
233 parça · 194 ayrı ad. Seçim YAPILMADI; insan bağlama bakıp seçer.

| ad | geçiş | sebep(ler) | ilk adaylar |
|---|---|---|---|
| Alamut | 7 | baglam-disi, baglamda-2-ayri-yer | geonames:324221 Alamut (37.809,28.292) |
| Ani | 6 | baglamda-2-ayri-yer | pleiades:863739 Ani (40.506,43.571) / pleiades:874322 Ani (39.603,39.036) |
| Jiankang | 5 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1806176 Jiankang (26.700,101.851) |
| Ras | 4 | baglam-disi | geonames:12184638 Raas (-5.571,114.414) / geonames:1258395 Rās (26.306,74.195) / geonames:108435 Rass (25.869,43.497) |
| Rûyân | 4 | baglamda-2-ayri-yer | geonames:118139 Rūyān (36.350,55.002) / geonames:144290 Rūyān (36.569,51.963) |
| Assur | 3 | baglam-yok | geonames:286245 As Sur (22.567,59.529) / pleiades:893945 Assur (35.456,43.261) |
| Budapeşte | 3 | baglam-yok, genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3054643 Budapeste (47.498,19.040) |
| Ayastefanos (Yeşilköy) | 2 | baglam-disi | geonames:296848 Yeşilköy (36.674,35.493) |
| Canterbury | 2 | baglamda-2-ayri-yer, baglamda-5-ayri-yer | geonames:6949377 Canterbury (-33.912,151.119) / geonames:7932625 Canterbury (-37.825,145.085) / geonames:2653877 Canterbury (51.279,1.080) / geonames:5084190 Canterbury (43.337,-71.565) / geonames:5113775 Canterbury (41. |
| Christiania | 2 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3143244 Christiania (59.913,10.746) |
| Corte | 2 | baglamda-2-ayri-yer | geonames:3023506 Corte (42.310,9.149) / geonames:3177995 Corte (45.308,12.072) |
| Dumlupınar | 2 | baglamda-2-ayri-yer | geonames:316165 Dumlupınar (38.854,29.977) / geonames:747839 Dumlupınar (40.123,32.943) |
| Galata | 2 | baglamda-2-ayri-yer | pleiades:216814 Galata (43.170,27.939) / pleiades:523982 Ġalaṭa (41.023,28.973) |
| Harran | 2 | baglam-disi, baglam-yok | geonames:122881 Haran (33.999,49.208) / geonames:312531 Harran (36.860,39.031) / pleiades:658427 Harran (36.864,39.031) |
| Katâi (Fustat'ın kuzeydoğusu) | 2 | baglam-disi | geonames:8468820 Katai (19.317,73.060) |
| Küçük Kaynarca | 2 | baglam-disi, genis-baglamda-yalniz-geonames-alternatif-ad | geonames:743633 Kucuk Kaynarca (41.031,30.308) |
| Lori (Lukri Kalesi) | 2 | baglam-disi | geonames:2997547 Lorri (47.889,2.515) |
| Marienburg (1309) | 2 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:461528 Marienburg (57.422,27.047) / geonames:3092472 Marienburg (54.036,19.027) / geonames:678361 Marienburg (45.817,25.600) / geonames:501318 Marienburg (59.571,30.065) |
| Pella | 2 | baglamda-3-ayri-yer | geonames:734726 Pélla (40.762,22.526) / pleiades:781836776 Pella (40.910,22.039) / pleiades:491687 Pella (40.754,22.518) / pleiades:491688 Pella (40.750,22.750) |
| Şanlıurfa | 2 | baglam-yok | geonames:298333 Şanlıurfa (37.167,38.794) / pleiades:658457 Şanlıurfa (37.149,38.787) |
| Sivastopol | 2 | baglam-disi, genis-baglamda-yalniz-geonames-alternatif-ad | geonames:694423 Sivastopol (44.608,33.521) |
| Adakale | 1 | baglam-yok | geonames:751950 Adakale (41.120,42.069) |
| Agade | 1 | baglam-yok | pleiades:63806066 Agade (32.500,44.500) |
| Âhengerân (Gur) | 1 | baglam-disi | pleiades:922617 Gur (28.853,52.533) |
| Aigai | 1 | baglamda-4-ayri-yer | pleiades:570040 Aigai (38.155,22.315) / pleiades:540603 Aigai (38.598,23.553) / pleiades:540604 Aigai (38.689,23.448) / pleiades:491512 Aigai (40.480,22.322) |
| Amaravati | 1 | baglamda-3-ayri-yer | geonames:10855441 Amaravati (14.516,75.819) / geonames:12261477 Amaravati (16.514,80.516) / geonames:12465603 Amarāvati (16.542,80.515) / pleiades:49855 Amaravati (16.386,80.135) |
| Ankyra | 1 | baglamda-2-ayri-yer | pleiades:619103 Ankyra (39.944,32.859) / pleiades:609305 Ankyra (39.153,28.864) |
| Antigoneia | 1 | baglamda-2-ayri-yer | pleiades:658380 Antigoneia (36.263,36.230) / pleiades:520960 [Antigoneia] (40.880,29.062) |
| Anyi | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1785738 Anyi (35.023,110.993) |
| Arles | 1 | baglamda-2-ayri-yer | geonames:3036935 Arles (42.457,2.635) / geonames:3036938 Arles (43.677,4.630) / pleiades:148217 Arles (43.678,4.631) |
| Ashingdon (Essex) | 1 | baglamda-3-ayri-yer | geonames:5949531 Essex (42.175,-82.825) / geonames:4354428 Essex (39.309,-76.475) / geonames:4935946 Essex (42.632,-70.783) |
| Aşkabat | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:162183 Askabat (37.950,58.383) |
| Bahawalpur | 1 | baglamda-2-ayri-yer | geonames:1183880 Bahawalpur (29.398,71.675) / geonames:1183883 Bahawalpur (29.998,73.253) |
| Balta Limanı | 1 | baglam-disi | geonames:684848 Bâlta (45.118,23.102) / geonames:684849 Bâlta (44.536,23.470) / geonames:685579 Balta (44.887,22.637) / geonames:685646 Balta (46.734,24.144) / geonames:322073 Balta (37.780,27.883) / geonames:712886 Balt |
| Baranya | 1 | baglam-disi | geonames:712846 Baranya (48.576,22.327) |
| Beçin | 1 | baglam-disi | geonames:1816670 Beȝcinȝ (39.907,116.397) |
| Belur | 1 | baglamda-3-ayri-yer | geonames:1276486 Belūr (13.166,75.865) / geonames:1276487 Belūr (11.708,78.414) / geonames:1276506 Bellur (12.981,76.733) |
| Biograd | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3204121 Biograd (43.943,15.452) |
| Bîşe | 1 | baglam-disi | geonames:3576854 Bisee (14.024,-60.974) |
| Bisel | 1 | baglam-disi | geonames:5146368 Bissell (41.386,-81.340) |
| Bonifacio (Korsika) | 1 | baglamda-2-ayri-yer | geonames:3031801 Bonifacio (41.387,9.157) / pleiades:471933 Bonifacio (41.308,9.261) |
| Bonn | 1 | baglamda-2-ayri-yer | geonames:2946447 Bonn (50.734,7.095) / geonames:3034126 Bon (47.024,4.839) |
| Boquerón (Chaco Boreal) | 1 | baglamda-2-ayri-yer | geonames:3713875 Boquerón (8.244,-80.858) / geonames:12954138 Boquerón (-9.059,-75.636) |
| Bukovina | 1 | baglam-disi | geonames:774790 Bukowina (49.343,20.108) |
| Caishi (Ma'anshan, Anhui) | 1 | baglamda-2-ayri-yer | geonames:1801620 Ma’anshan (31.686,118.510) / geonames:6958793 Ma’anshan (22.721,113.811) |
| Camulodunum (Colchester) | 1 | baglamda-2-ayri-yer | geonames:8643436 Colchester (-33.691,25.822) / pleiades:79393 Colchester (51.890,0.901) |
| Canossa (Emilia) | 1 | baglam-disi | geonames:7626868 Canossa (53.634,-113.520) |
| Caral | 1 | baglam-disi | geonames:3126222 Carral (43.229,-8.355) |
| Casale | 1 | baglamda-2-ayri-yer | geonames:8949202 Casale (41.220,14.002) / geonames:8949468 Casale (44.917,10.432) |
| Caserta | 1 | baglamda-2-ayri-yer | geonames:3179866 Caserta (41.073,14.332) / pleiades:433012 Caserta) (41.097,13.904) |
| Castel Fiorentino (Lucera yakını, Apulia) | 1 | baglamda-4-ayri-yer | geonames:3179696 Castelfiorentino (43.610,10.968) / pleiades:471828779 Castel Fiorentino (41.606,15.263) / pleiades:442469 Apulia (41.120,16.174) / pleiades:442515 Apulia (41.064,16.869) |
| Chanyuan (Puyang, Hebei) | 1 | baglamda-2-ayri-yer | geonames:1798425 Puyang (29.457,119.889) / geonames:9181182 Puyang (35.756,115.044) |
| Cividale | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3178605 Cividale (46.090,13.429) |
| Çongçing | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1814906 Congcing (29.560,106.558) |
| Daha (Kediri) | 1 | baglamda-2-ayri-yer | geonames:1640658 Kediri (-8.634,116.151) / geonames:1640660 Kediri (-7.817,112.017) |
| Dahlak Kebir | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:339563 Dahlak Kebir (15.683,40.017) |
| Dahra | 1 | baglam-disi | geonames:2253277 Dahra (15.348,-15.480) |
| Daliang | 1 | baglamda-2-ayri-yer | geonames:1814078 Daliang (39.539,117.095) / geonames:1814082 Daliang (22.841,113.250) |
| Dara | 1 | baglam-disi | geonames:2169360 Darra (-27.567,152.954) / geonames:2283865 Darra (9.458,-6.399) / geonames:679738 Dara (47.816,22.752) / geonames:2253277 Dara (15.348,-15.480) / geonames:170905 Dar‘ā (32.619,36.102) / geonames:303648 D |
| Daxing | 1 | baglamda-4-ayri-yer | geonames:1802162 Daxing (22.969,102.406) / geonames:1807544 Daxing (39.740,116.327) / geonames:1813299 Daxing (27.264,100.864) / geonames:1904080 Daxing (29.556,106.160) |
| Diégo-Suarez | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1069129 Diego-Suarez (-12.317,49.292) |
| Duklja | 1 | baglam-disi | geonames:772857 Duklja (49.556,21.683) |
| Dur-Kurigalzu | 1 | baglam-yok | pleiades:893988 Dur-(Kuri)galzu (33.356,44.197) |
| Ekaterinodar | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:542420 Ekaterinodar (45.045,38.982) |
| El-Ayûn | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:2462881 El Ayun (27.142,-13.188) |
| Erzen | 1 | baglamda-2-ayri-yer | pleiades:874373 Erzen (39.908,41.276) / pleiades:106515917 Erzen (37.978,41.385) |
| Faizâbâd | 1 | baglamda-2-ayri-yer | geonames:1271976 Faizabad (26.775,82.150) / geonames:10555212 Faizabad (28.573,76.776) |
| Fokşani (Focşani) | 1 | baglam-yok | geonames:678015 Fokʻsani (45.700,27.183) |
| Fontainebleau | 1 | baglam-disi | geonames:3018074 Fontainebleau (48.409,2.702) |
| Fort Christina | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:4145381 Fort Christina (39.746,-75.547) |
| Fossalta | 1 | baglamda-2-ayri-yer | geonames:3176645 Fossalta (45.793,12.910) / geonames:3176646 Fossalta (45.645,12.509) |
| Gaochang | 1 | baglamda-2-ayri-yer | geonames:13158434 Gaochang (42.941,89.186) / pleiades:999273476 Gaochang (42.855,89.529) |
| Garama (Germa) | 1 | baglam-disi | pleiades:609351 Germa (39.533,31.629) |
| Georgenberg (Enns) | 1 | baglamda-2-ayri-yer | geonames:2778701 Georgenberg (47.633,13.150) / geonames:2780048 Enns (48.213,14.476) / pleiades:118802 Enns (48.222,14.475) |
| Girsu/Lagaş | 1 | baglam-yok | pleiades:912855 Girsu (31.560,46.178) / geonames:2332459 Lagas (6.454,3.395) / pleiades:959120263 Lagaš (31.419,46.410) |
| Gur | 1 | baglam-disi | pleiades:922617 Gur (28.853,52.533) |
| Habur | 1 | baglamda-2-ayri-yer | pleiades:211425278 Ḫabūr (37.500,42.500) / pleiades:893928 Hābūr (36.344,40.387) |
| Haliç | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:709034 Halicʻ (49.124,24.727) |
| Hastings (Sussex) | 1 | baglamda-14-ayri-yer | geonames:2163837 Hastings (-38.300,145.183) / geonames:2647356 Hastings (50.856,0.580) / geonames:2408582 Hastings (8.380,-13.137) / geonames:4497622 Hastings (36.398,-78.155) / geonames:4995520 Hastings (42.646,-85.291) |
| Hedeby/Sliesthorp (Guney Jutland) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:2838634 Sliesthorp (54.520,9.568) |
| Hidalgo) | 1 | baglamda-9-ayri-yer | geonames:3527116 Hidalgo (27.790,-99.877) / geonames:3527117 Hidalgo (26.050,-98.200) / geonames:3527119 Hidalgo (24.248,-99.438) / geonames:3527128 Hidalgo (15.350,-92.742) / geonames:3527129 Hidalgo (15.162,-92.630) /  |
| Hire | 1 | baglam-yok | geonames:2287884 Hiré (6.189,-5.295) / pleiades:912800 Ḥīre (31.883,44.450) |
| Hisâr-ı Tâk (Horasan) | 1 | baglam-disi | geonames:745527 Horasan (40.039,42.164) |
| Hıttîn (Taberiye yakını) | 1 | baglamda-2-ayri-yer | geonames:294532 Hittin (32.800,35.503) / pleiades:211425277 Ḥiṭṭīn (32.750,35.250) |
| Horse Creek (North Platte kıyısı) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:4059070 Horse Creek (33.729,-87.090) |
| Hust | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:706165 Hust (48.172,23.298) |
| Indian Springs (Georgia) | 1 | baglamda-2-ayri-yer | geonames:4202021 Indian Springs (33.243,-83.921) / geonames:4202022 Indian Springs (34.958,-85.164) |
| İnönü | 1 | baglamda-2-ayri-yer | geonames:311261 İnönü (39.815,30.145) / geonames:9888786 Inonu (38.533,27.056) |
| İpsili (Sisam karşısı) | 1 | baglam-disi | geonames:747986 Ipsili (40.208,37.531) |
| Kailua-Kona | 1 | baglam-yok | geonames:5847504 Kailua-Kona (19.640,-155.999) |
| Kalafat | 1 | baglam-yok | geonames:683034 Kalafat (43.991,22.933) / geonames:310824 Kalafat (39.947,26.233) |
| Kalhu (Nimrud) | 1 | baglam-yok | pleiades:897364594 Kalhu (36.101,43.329) / pleiades:344586145 Kalhu (36.101,43.328) / pleiades:62810658 Kalhu (36.101,43.327) / pleiades:911483313 Kalhu (36.100,43.329) / pleiades:846526213 Kalhu (36.100,43.328) / pleiad |
| Kalinga | 1 | baglam-disi | geonames:11703908 Kalinga (-27.410,153.051) |
| Kamba (Oppenheim karşısı, Ren) | 1 | baglam-disi | geonames:2335333 Kamba (11.852,3.655) / geonames:2983990 Ren (48.111,-1.674) |
| Kannevc (Kanauj) | 1 | baglam-disi | geonames:1268011 Kannauj (27.055,79.919) |
| Karaburun | 1 | baglam-disi | geonames:616581 Karaburun (40.245,43.822) / geonames:310200 Karaburun (38.636,26.511) / pleiades:638896 Karaburun (36.780,29.996) |
| Kasımpaşa/Haliç | 1 | baglam-disi | geonames:709034 Halicʻ (49.124,24.727) |
| Kemalpaşa (Nymphaion) | 1 | baglamda-4-ayri-yer | geonames:308224 Kemalpaşa (38.426,27.417) / pleiades:639011 [Nymphaion] (36.860,29.187) / pleiades:550778 [Nymphaion] (38.417,27.409) / pleiades:521003 Nymphaion (41.153,29.079) / pleiades:481929 Nymphaion (40.500,19.500 |
| Kerec | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:128747 Kerec (35.833,50.992) |
| Kerek | 1 | baglam-disi | geonames:1640239 Kerek (-6.895,111.887) |
| Khajuraho | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1267154 Khajuraho (24.848,79.934) |
| Koblenz | 1 | baglamda-2-ayri-yer | geonames:2660123 Koblenz (47.610,8.238) / geonames:2886946 Koblenz (50.354,7.579) / pleiades:108903 Koblenz (50.357,7.599) |
| Kocatepe | 1 | baglam-disi | geonames:306890 Kocatepe (37.229,40.161) / geonames:306891 Kocatepe (37.042,37.692) |
| Kozluca | 1 | baglam-disi | geonames:305158 Kozluca (37.493,30.133) |
| Kuleli Burgaz (Pythion) | 1 | baglam-disi | pleiades:491705 Pythion (40.054,22.218) / pleiades:815693600 Pythion (37.967,23.732) |
| Kulm | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:2773264 Kulm (47.058,14.487) / geonames:2658248 Kulm (47.310,8.114) / geonames:3077754 Kulm (50.700,13.940) / geonames:3101795 Kulm (53.349,18.425) / geonames:696959 Kul'm (46.247,29.042) |
| Kūmis | 1 | baglamda-2-ayri-yer | pleiades:942260 Qumis (36.167,54.350) / pleiades:942276 Qumis (35.961,54.038) |
| Kummanni | 1 | baglam-disi | geonames:3185044 Kumani (40.727,19.687) / geonames:788890 Kumani (45.539,20.229) |
| Lagas (Girsu) | 1 | baglam-yok | geonames:2332459 Lagas (6.454,3.395) / pleiades:959120263 Lagaš (31.419,46.410) / pleiades:912855 Girsu (31.560,46.178) |
| La Venta | 1 | baglamda-2-ayri-yer | geonames:3524476 La Venta (16.571,-94.818) / geonames:3802196 La Venta (18.098,-94.045) |
| Leuven | 1 | baglamda-2-ayri-yer | geonames:2792482 Leuven (50.880,4.701) / geonames:2751789 Leeuwen (51.210,5.999) |
| Liangzhou (Wuwei, Gansu) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1803936 Liangzhou (37.927,102.632) / geonames:1791346 Wuwei (31.284,117.902) |
| Lidice | 1 | baglam-disi | geonames:3705894 Lídice (8.749,-79.910) |
| Longcheng | 1 | baglam-disi | geonames:1798899 Longcheng (29.897,116.555) / geonames:1802686 Longcheng (35.001,105.973) / geonames:1802687 Longcheng (34.184,116.951) / geonames:1802689 Longcheng (24.898,102.800) |
| Lysimacheia | 1 | baglamda-2-ayri-yer | pleiades:540921 Lysimacheia (38.530,21.336) / pleiades:501458 Lysimacheia (40.548,26.751) |
| Macaco | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3458185 Macaco (-21.984,-42.253) |
| Maçin | 1 | baglam-yok | geonames:674230 Măcin (45.244,28.136) |
| Maçka | 1 | baglam-disi | geonames:741850 Maçka (40.811,39.605) |
| Mafeking (protektora toprakları dışında) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:980595 Mafeking (-25.865,25.644) |
| Malazgirt | 1 | baglamda-2-ayri-yer | geonames:304916 Malazgirt (39.147,42.535) / geonames:13591681 Malazgirt (37.772,38.272) / pleiades:733857263 Malazgirt (39.146,42.541) |
| Malé | 1 | baglam-disi | geonames:3458090 Male (-25.878,-50.821) / geonames:3174186 Malè (46.354,10.912) / geonames:1282027 Male (4.175,73.509) / pleiades:187467 Malé (46.534,11.296) |
| Mazaka | 1 | baglamda-2-ayri-yer | pleiades:629034 Mazaka (38.721,35.328) / pleiades:629035 Mazaka (38.726,35.474) |
| Mbe | 1 | baglam-disi | geonames:154380 Mbee (-8.900,33.450) |
| Medâin (Ktesifon) | 1 | baglamda-2-ayri-yer | pleiades:912903 Medain (31.558,45.513) / pleiades:893976 Medāʾin (33.095,44.581) |
| Meis | 1 | baglam-disi | geonames:3116968 Meis (42.500,-8.750) |
| Meksiko | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3530597 Meksiko (19.428,-99.128) |
| Milas-Muğla-Denizli (Menteşe) | 1 | baglamda-2-ayri-yer | geonames:304184 Mentese (37.218,28.366) / geonames:319977 Menteşe (37.117,28.267) |
| Mina (Mekke yakını) | 1 | baglam-disi | geonames:1857062 Mina (35.533,136.917) / geonames:3995847 Mina (26.001,-100.530) / geonames:2330100 Minna (9.615,6.548) / geonames:1699684 Mina (10.931,122.575) / geonames:4972286 Mina (44.086,-70.320) / geonames:5690532 |
| Mitau (Jelgava) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:459279 Mitau (56.650,23.713) |
| Monte Castello (Apeninler) | 1 | baglamda-4-ayri-yer | geonames:3456846 Monte Castelo (-26.462,-50.231) / geonames:3456847 Monte Castelo (-21.299,-51.569) / geonames:6535551 Montecastello (44.949,8.686) / pleiades:187544 Monte Castello (46.520,11.574) |
| Mugan Sahrası | 1 | baglam-disi | geonames:616396 Mugan (40.182,44.254) / geonames:807231 Mugan (40.099,48.819) |
| Muğla-Milas-Balat-Datça-Marmaris-Fethiye (Menteşe) | 1 | baglamda-2-ayri-yer | geonames:304184 Mentese (37.218,28.366) / geonames:319977 Menteşe (37.117,28.267) |
| Neuilly-sur-Seine | 1 | baglam-disi | geonames:2990611 Neuilly-sur-Seine (48.885,2.270) |
| Nijni Novgorod | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:520555 Nijni Novgorod (56.329,44.002) |
| Novi (Una kıyısı, Bosna) | 1 | baglamda-3-ayri-yer | geonames:3203647 Novi (45.046,16.378) / geonames:3194355 Novi (45.128,14.789) / geonames:3198214 Novi (43.552,16.336) |
| Novigrad | 1 | baglamda-3-ayri-yer | geonames:2777216 Novi Grad (47.059,16.324) / geonames:3203647 Novi Grad (45.046,16.378) / geonames:3194374 Novi Grad (46.078,16.954) |
| Nuuk | 1 | baglam-disi | geonames:3421319 Nuuk (64.183,-51.722) |
| Ordu-Balık (Ötüken) | 1 | baglam-disi | pleiades:509176198 Ordu-Baliq (47.414,102.634) |
| Pannonia (Ring) | 1 | baglamda-2-ayri-yer | pleiades:197425 Pannonia (45.749,16.603) / pleiades:1001905 Pannonia (47.500,17.500) |
| Patara | 1 | baglamda-2-ayri-yer | pleiades:639041 Patara (36.254,29.354) / pleiades:639042 Patara (36.262,29.315) / pleiades:857264 Patara (40.544,39.648) |
| Pearl Harbor (Hawaii) | 1 | baglam-disi | geonames:11169179 Hawai (27.887,96.802) |
| Pera (Galata) | 1 | baglamda-2-ayri-yer | pleiades:216814 Galata (43.170,27.939) / pleiades:523982 Ġalaṭa (41.023,28.973) |
| Petra | 1 | baglam-yok | geonames:2512638 Petra (39.614,3.113) / geonames:255439 Pétra (39.327,26.176) / geonames:246008 Petra (30.321,35.479) / geonames:670922 Petra (44.361,24.296) / geonames:670923 Petra (43.817,25.167) / pleiades:550816 Petr |
| Phanagoria | 1 | baglamda-2-ayri-yer | pleiades:854724 Phanagor ia (45.276,36.960) / pleiades:854725 Phanagor ia (45.404,37.172) |
| Pingyang | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1803567 Pingyang (36.089,111.519) / geonames:1804645 Pingyang (27.666,120.566) / geonames:1871859 Pingyang (39.034,125.754) |
| Pondicherry | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1259425 Pondicherry (11.934,79.830) |
| Preslav | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:727987 Preslav (43.167,26.817) |
| Puerto Argentino | 1 | baglam-disi | geonames:3426691 Puerto Argentino (-51.694,-57.857) |
| Pyeongyang | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1871859 Pyeongyang (39.034,125.754) |
| Pylos | 1 | baglamda-2-ayri-yer | geonames:255293 Pýlos (36.913,21.697) / pleiades:570639 Pylos (37.900,21.518) / pleiades:570640 Pylos (36.952,21.660) / pleiades:156116232 Pylos (37.027,21.695) / pleiades:226979725 Pylos (37.027,21.695) |
| Rajagriha | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1258864 Rajagriha (25.028,85.421) |
| Refah | 1 | baglam-disi | pleiades:688015 Refaḥ (31.291,34.243) |
| Sabi | 1 | baglam-disi | geonames:2412248 Sabi (13.233,-14.200) |
| Sabra (Mansûriye) | 1 | baglam-disi | geonames:2212771 Sabra (32.793,12.488) / geonames:743558 Mansuriye (41.170,30.227) |
| Sa'da | 1 | baglamda-2-ayri-yer | geonames:71334 Sa'da (16.940,43.764) / geonames:77881 Sadda (14.122,44.421) / pleiades:282851782 Ṣaʿda (16.941,43.765) |
| Sagala (Sialkot) | 1 | baglamda-2-ayri-yer | pleiades:59835 Sagala (26.954,81.858) / geonames:1164909 Sialkot (32.493,74.531) |
| Saint-Germain-en-Laye | 1 | baglam-disi | geonames:2979783 Saint-Germain-en-Laye (48.896,2.090) |
| San Lorenzo | 1 | baglamda-13-ayri-yer | geonames:3589865 San Lorenzo (15.031,-91.735) / geonames:3589869 San Lorenzo (14.486,-91.513) / geonames:3601977 San Lorenzo (13.424,-87.447) / geonames:3518578 San Lorenzo (16.394,-97.874) / geonames:3985749 San Lorenzo |
| Saragosa | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:3104324 Saragosa (41.656,-0.877) |
| Sardes | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:301496 Sardes (38.497,28.042) |
| Sarmizegetusa | 1 | baglamda-2-ayri-yer | geonames:667964 Sarmizegetusa (45.517,22.783) / pleiades:207425 Sarmizegetusa (45.670,23.324) |
| Schönbrunn Sarayı | 1 | baglamda-2-ayri-yer | geonames:3074373 Schonbrunn (49.661,16.306) / geonames:3076671 Schonbrunn (49.935,16.971) |
| Sèvres | 1 | baglamda-2-ayri-yer | geonames:2974677 Sevres (46.569,0.465) / geonames:2974678 Sèvres (48.823,2.218) |
| Shuri | 1 | baglam-disi | geonames:316909 Shuri (37.425,40.862) |
| Sîrvân Kalesi | 1 | baglamda-2-ayri-yer | geonames:148565 Şirvan (39.938,48.929) / geonames:300632 Şirvan (38.063,42.025) |
| Sis | 1 | baglamda-2-ayri-yer | geonames:306112 Sis (37.455,35.816) / pleiades:34546779 Sīs (37.449,35.816) / geonames:146400 Kozan (34.922,33.628) |
| Soba (Alve) | 1 | baglam-disi | geonames:2281525 Soba (8.565,-6.615) / geonames:2281527 Soba (7.806,-7.317) / geonames:2322957 Soba (10.981,8.057) / pleiades:668261 Ṣobȧ (34.738,36.719) |
| St. Veit | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:2766351 St. Veit (47.333,13.150) |
| Subat-Enlil | 1 | baglam-yok | pleiades:223856813 Šubat-Enlil (36.957,41.507) |
| Suda | 1 | baglam-disi | geonames:486874 Suda (59.153,37.558) / geonames:77772 Suda (15.959,43.781) |
| Tabasco | 1 | baglam-disi | geonames:3982729 Tabasco (21.863,-102.911) / geonames:4011420 Tabasco (32.562,-114.926) |
| Taihe | 1 | baglamda-4-ayri-yer | geonames:1793684 Taihe (30.871,105.385) / geonames:1793685 Taihe (30.099,106.049) / geonames:6647609 Taihe (23.735,112.978) / geonames:8399047 Taihe (30.642,109.262) |
| Tancavur | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1254649 Tancavur (10.785,79.139) |
| Tanis | 1 | baglamda-2-ayri-yer | pleiades:727236 Tanis (30.975,31.884) / pleiades:737069 Tanis (29.394,31.031) |
| Taraori (Karnal-Thanesar arası) | 1 | genis-baglamda-yalniz-geonames-alternatif-ad | geonames:1254413 Taraori (29.801,76.928) |
| Tel Bâşir (1144-1150) | 1 | baglam-yok | pleiades:404687440 Tell Bašir (36.874,37.559) |
| Timna | 1 | baglam-disi | geonames:665083 Timna (44.567,23.017) |
| Toplice | 1 | baglam-disi | geonames:3201817 Toplice (45.757,15.059) |
| Trianon (Versailles) | 1 | baglam-yok | geonames:11956110 Trianon (-22.287,166.449) / geonames:2969679 Versailles (48.804,2.134) / geonames:4266266 Versailles (39.072,-85.252) / geonames:4312057 Versailles (38.053,-84.730) / geonames:4413013 Versailles (38.431 |
| Ulaş | 1 | baglam-disi | geonames:298471 Ulaş (39.445,37.039) / geonames:298476 Ulaş (36.997,34.782) |
| Umma | 1 | baglam-yok | geonames:602150 Uma (63.828,20.260) / pleiades:44626252 Umma (31.668,45.887) |
| Uruk | 1 | baglam-yok | pleiades:912986 Uruk (31.323,45.639) |
| Uşi (Ouchy) | 1 | baglam-disi | geonames:1790923 Usi (31.569,120.289) / geonames:3514949 Usi (21.127,-89.268) / pleiades:549905270 Usi (38.723,37.257) |
| Vathy | 1 | baglamda-2-ayri-yer | geonames:252165 Vathý (37.764,23.480) / geonames:252166 Vathý (37.747,26.983) |
| Veden | 1 | baglam-disi | geonames:2970253 Veden (43.977,4.904) |
| Velîlâ | 1 | baglam-disi | geonames:3106213 Velilla (41.559,-5.005) |
| Vengi | 1 | baglam-disi | geonames:2658051 Vengi (47.497,8.953) |
| Vienne | 1 | baglamda-2-ayri-yer | geonames:2969284 Vienne (45.526,4.875) / pleiades:167719 Vienne (45.525,4.876) / pleiades:138652 Vienne (46.226,0.988) |
| Wartburg | 1 | baglam-disi | geonames:4665933 Wartburg (36.105,-84.597) / geonames:941923 Wartburg (-29.432,30.576) |
| Washington | 1 | baglamda-26-ayri-yer | geonames:4140963 Washington (38.895,-77.036) / geonames:4143690 Washington (38.592,-75.291) / geonames:4229546 Washington (33.737,-82.739) / geonames:4266586 Washington (38.659,-87.173) / geonames:4281253 Washington (39. |
| Windsor | 1 | baglamda-16-ayri-yer | geonames:2143406 Windsor (-33.613,150.814) / geonames:2143407 Windsor (-37.853,144.992) / geonames:6943579 Windsor (-27.436,153.029) / geonames:6182958 Windsor (44.983,-64.132) / geonames:6182959 Windsor (45.567,-71.999) |
| Xinzheng | 1 | baglamda-2-ayri-yer | geonames:1788466 Xinzheng (34.397,113.742) / geonames:1788467 Xinzheng (31.275,106.287) |
| Zap Suyu | 1 | baglam-yok | pleiades:894183 Zapsuyu (37.189,43.916) |
| Zeelandia | 1 | baglam-disi | geonames:3520904 Zelandia (18.059,-94.995) |

## Ölçüm uyarıları (ölçülemedi ≠ yok ≠ temiz)
- **GeoNames cities1000 yalnız nüfusu ≥1000 yerleşim yeridir** (P sınıfı): ören yeri, kale, terk edilmiş şehir (Ani, Alamut, Harran'ın antik höyüğü) burada YOKTUR — onlar için tek kaynak Pleiades'tir; Pleiades Greko-Romen merkezlidir, İran/Orta Asya/Doğu Asya/Amerika'yı seyrek kapsar. `gazeteerde-yok` = bu İKİ dosyada yok demektir, dünyada yok değil (GeoNames allCountries indirilmedi — ölçülmedi).
- Ad eşleşmesi Türkçe-güvenli katlama + transliterasyon kurallarıdır; Türkçe/Osmanlıca adlar (`Belensiye`, `Meyyâfârikîn`) gazeteerde ancak alternatenames'te Türkçe biçim varsa ya da kronolojide parantezli modern ad varsa bulunur.
- Bağlam alanı lon/lat düzleminde dışbükey zarftır; antimeridyeni geçen künyelerde (Pasifik) zarf yanlış olabilir, tampon katmanı yine çalışır. Geniş künyeler (imparatorluklar, sömürge sahipleri) zarfı kıtalar boyu açar ⇒ o maddelerde adaş `belirsiz`e düşer (seçmemek bilinçli).
- `atlasta-farkli-adla` eşiği (≤3 km) iki ayrı yeri de yakalayabilir (ikiz şehir, antik/yeni yer, semt): `diger_atlas_3km_icinde` sütunu doluysa birden çok atlas noktası var — örn. Budapeşte hem Budin hem Peşte'ye 3 km içinde.
- Gazeteer koordinatı temsilî noktadır (GeoNames: şehir merkezi; Pleiades: `reprLat/reprLong`); yeni nokta yazılacaksa koordinat ve TARİH akademik kaynaktan ayrıca doğrulanır.

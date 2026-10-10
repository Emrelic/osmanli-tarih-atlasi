# HICRI-GUN-TARAMA-1010 — `gun:` alanında hicrî yıl önde

Taban: `origin/main` **792bf4a4** (ayrı worktree, `--detach`). Betik: `denetim/ARAC-HICRI-GUN-TARAMA-1010.js` (node, vm ile yükleme — regex ayrıştırma YOK). YALNIZ TARAMA: veri/diff yok.

## 1. Evren
- `index.html`in yüklediği `data/*.js`: **71** script (30 paket) → paket işaretleriyle açılınca **330** kaynak parçası, tarayıcı sırasıyla ortak bir `window` üzerinde koşturuldu.
- Paket kopyaları: 289 paket-içi kaynak · diskte ayrıca var: 289 · kayıt imzası (t|gun) disk kopyasıyla EŞİT: **289** · farklı: 0. Her kayıt KAYNAK dosyasına atfedildi, bir kez sayıldı (çift sayma yok); satır numarası kaynak dosyadandır.
- Yükleme hatası: `data/acilis_siluet.js` (ReferenceError: Element is not defined) — DOM silueti, kronoloji taşımaz.
- Olay benzeri kayıt (`t` + `gun`|`b` taşıyan nesne): **13887** · 187 kaynak dosyada · `gun` dolu: **5075**.
  - aile kırılımı: `olaylar*` 73 dosya / 1801 kayıt (§1.5 kronoloji 1801 ile UYUŞUR) / 1662 gun · `kronoloji*` 98 / 7845 / 3354 · `kronoloji_sinir*` 11 / 422 / 15 · `devletler.js` (künye içi devlet kronolojisi) 3187 / 44 · `donemler_ust` 620 / 0 · öteki 12 / 0.
- Tarih metni taşıyan alan adları (≤90 karakter, 3-4 haneli sayı içeren string): `gun` 4272 · `kaynak` 1088 · `ic_not_t` 110 · `tasindi` 82 · `ic_not_d` 80 · `alinti` 64 · `ic_not_gun` 54 · `ic_not` 32 · `sinir_kaydi` 22 · `sinir_id` 12 · `kisiler` 7 · `ic_not_b` 6 · `devlet` 3 · `ic_not_kaynak` 2 · `ic_not_k` 2 · `odak_kutu_kaynak` 1 · `not` 1. Ekranda tarih olarak gösterilen yalnız `gun` (`app.js:122 olayTarihYazi → o.gun || …`); `ic_not_*` iç not, `kaynak`/`alinti` tarih alanı değil ⇒ sınıflama yalnız `gun` üzerinde.

## 2. Sınıflama (yalnız `gun`)
Ölçüt: ilk yıl-sayısı Y (gün ve yüzyıl ayıklanır), t yılı T. Y∈[T±1] (aralık destekli) ⇒ MİLÂDÎ-ÖNDE · Y ≈ (T−622)×1,0307 ± 2, ya da Y metindeki başka bir mîlâdî yılın hicrîsi, ya da metin `H.`/hicrî ay adıyla başlıyor ⇒ HİCRÎ-ÖNDE · ikisi de değil ⇒ BELİRSİZ.

| sınıf | kalem |
|---|---|
| HICRI-ONDE | 683 |
| MILADI-ONDE | 4231 |
| BELIRSIZ | 5 |
| SAYI-YOK | 156 |
| **toplam gun dolu** | 5075 |

**HICRI-ONDE = 683**, iki alt biçim:
- **A — tanımın tam kendisi** ("680 (1281-82)": mîlâdî parantezde ya da hiç yok): **185** (parantezde 184 · mîlâdî yok 1)
- **B — eğik çizgi** ("788 / 1386", "Muharrem 783 / Nisan 1381"): **498**. Mîlâdî metinde var ama ARKADA; ekranda yine ilk okunan sayı hicrîdir. Biçim kuralı A ile aynı karara bağlanırsa kapsama girer.
- Hicrî ay adı içeren: 206 · `H.`/hicrî işaretli: 153.

Pozitif kontrol: `data/olaylar_ek5.js:25` t 1281-01-01 gun "680 (1281-82)" → **HICRI-ONDE / A (parantezde)**, öneri "1281-82 (H. 680)". ✓
Çapraz sınama (bağımsız satır-regex kuralı, yalnız t+gun aynı satırdaysa): 2004 satır, 351 hicrî-önde; **351/351 betikte de var**, betikte olup çaprazda olmayan 332 (çok satırlı kayıt ya da ay adıyla başlayan — çapraz kural bunları görmez).
Yan ölçüm: `app.js:46 gunMetniIdx` (t tam gün değilse gun metninden İLK 4 haneli sayıyı yıl okur — hicrî 1000+ önde olursa yanlış yıl) — sapan kayıt: **0** (bugün zararsız; tetikleyici t biçimi yok).

## 3. Dosyaya göre dağılım (HICRI-ONDE olan dosyalar)
| dosya | paket | gun dolu | HİCRÎ-ÖNDE | A | B |
|---|---|---|---|---|---|
| `data/kronoloji_cok_once1281_iran.js` | - | 170 | 109 | 20 | 89 |
| `data/kronoloji_cok_once1281_ortadogu.js` | - | 171 | 57 | 18 | 39 |
| `data/kronoloji_iran_ardillari.js` | paket_12.js | 128 | 54 | 0 | 54 |
| `data/olaylar_ek14.js` | paket_03.js | 94 | 50 | 29 | 21 |
| `data/kronoloji_karakoyunlu.js` | paket_10.js | 52 | 44 | 0 | 44 |
| `data/kronoloji_akkoyunlu.js` | paket_10.js | 68 | 42 | 0 | 42 |
| `data/kronoloji_cok_once1281_anadolu.js` | - | 175 | 37 | 1 | 36 |
| `data/kronoloji_cok_once1281_afrika.js` | - | 52 | 37 | 31 | 6 |
| `data/kronoloji_memluk.js` | paket_07.js | 98 | 33 | 0 | 33 |
| `data/olaylar_ek5.js` | paket_01.js | 426 | 31 | 13 | 18 |
| `data/kronoloji_cok_ispanya.js` | paket_30.js | 115 | 23 | 11 | 12 |
| `data/devletler.js` | paket_05.js | 44 | 16 | 8 | 8 |
| `data/kronoloji_cok_500_1000.js` | - | 16 | 14 | 0 | 14 |
| `data/kronoloji_cok_fas.js` | paket_30.js | 53 | 13 | 0 | 13 |
| `data/kronoloji_cok_tunus.js` | paket_30.js | 73 | 13 | 0 | 13 |
| `data/olaylar_p0068b.js` | paket_26.js | 37 | 13 | 0 | 13 |
| `data/olaylar_ek7.js` | paket_01.js | 130 | 9 | 1 | 8 |
| `data/kronoloji_cok_ince_anadolu_iran.js` | - | 20 | 9 | 9 | 0 |
| `data/olaylar_ek16.js` | paket_03.js | 61 | 7 | 6 | 1 |
| `data/olaylar_p0057b.js` | paket_26.js | 7 | 6 | 5 | 1 |
| `data/kronoloji_iran.js` | paket_06.js | 52 | 5 | 1 | 4 |
| `data/kronoloji_misir.js` | paket_11.js | 40 | 5 | 0 | 5 |
| `data/olaylar_p0917kosu13.js` | paket_26.js | 29 | 5 | 3 | 2 |
| `data/kronoloji_cok_cezayir.js` | paket_30.js | 47 | 4 | 0 | 4 |
| `data/kronoloji_cok_once1281_hint_amerika.js` | - | 51 | 4 | 0 | 4 |
| `data/olaylar_ek.js` | paket_01.js | 108 | 3 | 3 | 0 |
| `data/olaylar_ek17.js` | paket_04.js | 12 | 3 | 3 | 0 |
| `data/olaylar_ek8.js` | paket_02.js | 30 | 2 | 2 | 0 |
| `data/olaylar_ek10.js` | paket_02.js | 31 | 2 | 2 | 0 |
| `data/kronoloji_cok_iran.js` | paket_30.js | 2 | 2 | 0 | 2 |
| `data/kronoloji_cok_romanya.js` | paket_30.js | 54 | 2 | 2 | 0 |
| `data/kronoloji_cok_memluk.js` | paket_30.js | 2 | 2 | 0 | 2 |
| `data/kronoloji_cok_ince_dg_afrika.js` | - | 28 | 2 | 2 | 0 |
| `data/kronoloji_safevi.js` | paket_12.js | 73 | 2 | 1 | 1 |
| `data/olaylar_p0053.js` | paket_15.js | 3 | 2 | 2 | 0 |
| `data/olaylar_p0036.js` | paket_25.js | 5 | 2 | 2 | 0 |
| `data/olaylar_p0063.js` | paket_26.js | 13 | 2 | 1 | 1 |
| `data/olaylar_ek2.js` | paket_01.js | 65 | 1 | 1 | 0 |
| `data/olaylar_ek3.js` | paket_01.js | 35 | 1 | 1 | 0 |
| `data/olaylar_ek12.js` | paket_02.js | 11 | 1 | 1 | 0 |
| `data/olaylar_ek15.js` | paket_03.js | 13 | 1 | 0 | 1 |
| `data/kronoloji_habsburg.js` | paket_06.js | 7 | 1 | 1 | 0 |
| `data/kronoloji_cok_anadolu2.js` | paket_30.js | 8 | 1 | 0 | 1 |
| `data/kronoloji_cok_arabistan2.js` | paket_30.js | 3 | 1 | 1 | 0 |
| `data/kronoloji_cok_ermeni.js` | paket_30.js | 13 | 1 | 0 | 1 |
| `data/kronoloji_cok_once1281_avrupa.js` | - | 272 | 1 | 0 | 1 |
| `data/kronoloji_cok_ince_guney_asya.js` | - | 56 | 1 | 0 | 1 |
| `data/kronoloji_timurlu.js` | paket_11.js | 2 | 1 | 0 | 1 |
| `data/kronoloji_gurcistan.js` | paket_12.js | 1 | 1 | 1 | 0 |
| `data/olaylar_p0043b.js` | paket_15.js | 1 | 1 | 1 | 0 |
| `data/olaylar_p0048.js` | paket_15.js | 2 | 1 | 1 | 0 |
| `data/olaylar_ok107.js` | - | 2 | 1 | 0 | 1 |
| `data/olaylar_ok106.js` | - | 7 | 1 | 1 | 0 |
| `data/olaylar_kronoeksik_0921.js` | paket_26.js | 4 | 1 | 0 | 1 |
| **54 dosya** | | | **683** | **185** | **498** |

## 4. İkinci soru — gun içi yıl ile t: ÇELİŞKİSİ (ayrı kusur sınıfı)
**9** kalem (tolerans ±1 yıl; aralık uçları dahil). İki tür: (i) gun'daki mîlâdî yıl t'ye uymuyor · (ii) gun'daki HİCRÎ yıl hem t'ye hem yanındaki mîlâdîye uymuyor (hicrî↔mîlâdî iç çelişkisi).
| dosya:satır | t | gun | tür | not |
|---|---|---|---|---|
| `data/olaylar_ek5.js:36` | 1345-01-01 | 735 (1334-35) | mîlâdî ≠ t | H.735 ≈ 1335-36 |
| `data/olaylar_ek14.js:37` | 1505-10-13 | 906 – 14 Cemâziyelevvel 911 (1500 – 13 Ekim 1505) | hicrî t'ye uymuyor, metindeki mîlâdîye uyuyor | H.906 ≈ 1501 |
| `data/olaylar_ek14.js:106` | 1281-01-01 | 1262 dolayı (farklı rivayetler vardır) | mîlâdî ≠ t | gun yılları: 1262 |
| `data/olaylar_ek17.js:184` | 1557-01-01 | 15 Şâban 962 (5 Temmuz 1555) kuruluş, 2 Nisan 1557 Masavva'nın alınışı | hicrî t'ye uymuyor, metindeki mîlâdîye uyuyor | H.962 ≈ 1555-56 |
| `data/kronoloji_memluk.js:112` | 1315-01-01 | H. 720 / 1315 — yıl hassasiyeti · eski t 1315-06-01'in AYI kaynakta YOK (d ve TD | hicrî ≠ yanındaki mîlâdî | H.720 ≈ 1320-21 |
| `data/kronoloji_memluk.js:174` | 1384-01-01 | H. 788 / 1384 — yıl hassasiyeti · TDV `berkuk-kulliyesi`, `memlukler`, `baybars- | hicrî ≠ yanındaki mîlâdî | H.788 ≈ 1386-87 |
| `data/kronoloji_memluk.js:282` | 1472-01-01 | H. 879 / 1472 — yıl hassasiyeti · TDV `kayitbay-kulliyesi`, `memlukler`, `baybar | hicrî ≠ yanındaki mîlâdî | H.879 ≈ 1474-75 |
| `data/kronoloji_memluk.js:284` | 1477-01-01 | H. 884 / 1477 — yıl hassasiyeti · TDV `iskenderiye`, `memlukler`, `baybars-i`, ` | hicrî ≠ yanındaki mîlâdî | H.884 ≈ 1479-80 |
| `data/kronoloji_memluk.js:310` | 1501-01-01 | H. 922 / 1501 — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalav | hicrî ≠ yanındaki mîlâdî | H.922 ≈ 1516-17 |

## 5. BELİRSİZ (adıyla)
| dosya:satır | t | gun | neden |
|---|---|---|---|
| `data/olaylar_ek14.js:106` | 1281-01-01 | 1262 dolayı (farklı rivayetler vardır) | ilk-yil-ne-T-ne-H · ÇELİŞKİ listesinde |
| `data/devletler.js:369` | 1715-09-07 | İKİ ADAY (Sarıkaya & Göger 2018): 1715-06-26 = ordunun Mora'ya GİRİŞİ (fetihnâme | ilk-yil-ne-T-ne-H |
| `data/kronoloji_venedik.js:486` | 1715-09-07 | İKİ ADAY (Sarıkaya & Göger 2018): 1715-06-26 = ordunun Mora'ya GİRİŞİ (fetihnâme | ilk-yil-ne-T-ne-H |
| `data/kronoloji_cok_ispanya.js:20` | 1285-11-11 | 10'u 11'e bağlayan gece, 11 Kasım 1285 (GEC) | ilk-yil-ne-T-ne-H |
| `data/kronoloji_cok_once1281_avrupa.js:61` | 1060-08-04 | 2 ya da 4 Ağustos 1060 (kaynak ikisini de verir; geç uç) | ilk-yil-ne-T-ne-H |

SAYI-YOK 156 kalem listelenmedi (sayı içermeyen gun; konu dışı).

## 6. HICRI-ONDE — tam liste (öneri YALNIZ öneridir; karşılık (T−622)×1,0307 yaklaşığıyla, ±1 yıl)
| # | dosya:satır | t | gun (ilk 80) | alt | hesaplanan karşılık | önerilen biçim |
|---|---|---|---|---|---|---|
| 1 | `data/olaylar_ek.js:67` | 1600-10-20 | 11-13 Rebîülâhir 1009 (20-22 Ekim 1600) | A | 1600-01 | 20-22 Ekim 1600 (H. 11-13 Rebîülâhir 1009) |
| 2 | `data/olaylar_ek.js:68` | 1663-04-13 | 5 Ramazan 1073 (13 Nisan 1663) | A | 1663-64 | 13 Nisan 1663 (H. 5 Ramazan 1073) |
| 3 | `data/olaylar_ek.js:126` | 1452-08-31 | Receb 856 (Temmuz-Ağustos 1452) | A | 1452-53 | Temmuz-Ağustos 1452 (H. Receb 856) |
| 4 | `data/olaylar_ek2.js:107` | 1590-03-21 | 998 (1590) | A | 1590-91 | 1590 (H. 998) |
| 5 | `data/olaylar_ek3.js:29` | 1683-07-14 | 19 Receb 1094 (14 Temmuz 1683) | A | 1683-84 | 14 Temmuz 1683 (H. 19 Receb 1094) |
| 6 | `data/olaylar_ek5.js:15` | 1381-04-01 | Muharrem 783 / Nisan 1381 | B | 1381-82 | Nisan 1381 (H. Muharrem 783) |
| 7 | `data/olaylar_ek5.js:16` | 1386-01-01 | 788 / 1386 | B | 1386-87 | 1386 (H. 788) |
| 8 | `data/olaylar_ek5.js:17` | 1393-01-01 | 795 / 1393 | B | 1393-94 | 1393 (H. 795) |
| 9 | `data/olaylar_ek5.js:25` | 1281-01-01 | 680 (1281-82) | A | 1281-82 | 1281-82 (H. 680) |
| 10 | `data/olaylar_ek5.js:26` | 1285-01-01 | 684 (1285) | A | 1285-86 | 1285 (H. 684) |
| 11 | `data/olaylar_ek5.js:27` | 1288-01-01 | 687 (1288) | A | 1288-89 | 1288 (H. 687) |
| 12 | `data/olaylar_ek5.js:30` | 1303-01-01 | 702 (1303) | A | 1303-04 | 1303 (H. 702) |
| 13 | `data/olaylar_ek5.js:31` | 1304-01-01 | 704 (1304) | A | 1305-06 | 1304 (H. 704) |
| 14 | `data/olaylar_ek5.js:32` | 1305-01-01 | 705 (1305) | A | 1306 | 1305 (H. 705) |
| 15 | `data/olaylar_ek5.js:35` | 1333-08-01 | Zilhicce 733 / Ağustos 1333 | B | 1333-34 | Ağustos 1333 (H. Zilhicce 733) |
| 16 | `data/olaylar_ek5.js:36` | 1345-01-01 | 735 (1334-35) | A | 1335-36 | 1334-35 (H. 735) |
| 17 | `data/olaylar_ek5.js:57` | 1408-06-01 | 810 (1407-1408) | A | 1407-08 | 1407-1408 (H. 810) |
| 18 | `data/olaylar_ek5.js:58` | 1410-02-13 | 8 Şevval 812 / 13 Şubat 1410 | B | 1409-10 | 13 Şubat 1410 (H. 8 Şevval 812) |
| 19 | `data/olaylar_ek5.js:61` | 1416-01-01 | 819 (1416) | A | 1416-17 | 1416 (H. 819) |
| 20 | `data/olaylar_ek5.js:85` | 1427-01-01 | 830 (1427) | A | 1427-28 | 1427 (H. 830) |
| 21 | `data/olaylar_ek5.js:114` | 1386-06-01 | 788 / 1386 | B | 1386-87 | 1386 (H. 788) |
| 22 | `data/olaylar_ek5.js:118` | 1415-03-01 | Muharrem 818 / Mart 1415 | B | 1415-16 | Mart 1415 (H. Muharrem 818) |
| 23 | `data/olaylar_ek5.js:128` | 1462-09-17 | Zilhicce 866 / Eylül 1462 | B | 1462-63 | Eylül 1462 (H. Zilhicce 866) |
| 24 | `data/olaylar_ek5.js:155` | 1515-09-19 | 10 Şâban 921 / 19 Eylül 1515 | B | 1515-16 | 19 Eylül 1515 (H. 10 Şâban 921) |
| 25 | `data/olaylar_ek5.js:164` | 1516-10-10 | 13 Ramazan 922 / 10 Ekim 1516 | B | 1516-17 | 10 Ekim 1516 (H. 13 Ramazan 922) |
| 26 | `data/olaylar_ek5.js:166` | 1516-12-29 | 4 Zilhicce 922 / 29 Aralık 1516 | B | 1516-17 | 29 Aralık 1516 (H. 4 Zilhicce 922) |
| 27 | `data/olaylar_ek5.js:167` | 1517-01-02 | 8 Zilhicce 922 / 2 Ocak 1517 | B | 1516-17 | 2 Ocak 1517 (H. 8 Zilhicce 922) |
| 28 | `data/olaylar_ek5.js:173` | 1517-04-13 | 21 Rebîülevvel 923 / 13 Nisan 1517 | B | 1517-18 | 13 Nisan 1517 (H. 21 Rebîülevvel 923) |
| 29 | `data/olaylar_ek5.js:175` | 1517-05-19 | 27 Rebîülâhir 923 / 19 Mayıs 1517 | B | 1517-18 | 19 Mayıs 1517 (H. 27 Rebîülâhir 923) |
| 30 | `data/olaylar_ek5.js:176` | 1517-07-06 | 16 Cemâziyelâhir 923 / 6 Temmuz 1517 | B | 1517-18 | 6 Temmuz 1517 (H. 16 Cemâziyelâhir 923) |
| 31 | `data/olaylar_ek5.js:177` | 1517-07-12 | 22 Cemâziyelâhir 923 / 12 Temmuz 1517 | B | 1517-18 | 12 Temmuz 1517 (H. 22 Cemâziyelâhir 923) |
| 32 | `data/olaylar_ek5.js:180` | 1517-09-11 | 923 / 1517 | B | 1517-18 | 1517 (H. 923) |
| 33 | `data/olaylar_ek5.js:202` | 1553-10-05 | 27 Şevval 960 (6 Ekim 1553) | A | 1553-54 | 6 Ekim 1553 (H. 27 Şevval 960) |
| 34 | `data/olaylar_ek5.js:225` | 1608-08-09 | 26 Rebîülâhir 1017 (9 Ağustos 1608) | A | 1608-09 | 9 Ağustos 1608 (H. 26 Rebîülâhir 1017) |
| 35 | `data/olaylar_ek5.js:251` | 1672-06-04 | 7 Safer 1083 (4 Haziran 1672) | A | 1672-73 | 4 Haziran 1672 (H. 7 Safer 1083) |
| 36 | `data/olaylar_ek5.js:312` | 1795-09-01 | Safer 1210 / Eylül 1795 | B | 1795-96 | Eylül 1795 (H. Safer 1210) |
| 37 | `data/olaylar_ek7.js:26` | 1513-04-24 | 8 Safer 919 (15 Nisan 1513), Yenişehir savaşının hemen ardından | A | 1513-14 | 15 Nisan 1513 (H. 8 Safer 919), Yenişehir savaşının hemen ardından |
| 38 | `data/olaylar_ek7.js:91` | 1661-11-01 | 8 Rebîülevvel 1072 / 1 Kasım 1661 | B | 1662-63 | 1 Kasım 1661 (H. 8 Rebîülevvel 1072) |
| 39 | `data/olaylar_ek7.js:93` | 1676-11-05 | 28 Şâban 1087 / 5 Kasım 1676 | B | 1676-77 | 5 Kasım 1676 (H. 28 Şâban 1087) |
| 40 | `data/olaylar_ek7.js:94` | 1685-10-12 | 14 Zilkade 1096 / 12 Ekim 1685 | B | 1685-86 | 12 Ekim 1685 (H. 14 Zilkade 1096) |
| 41 | `data/olaylar_ek7.js:95` | 1689-10-25 | 11 Muharrem 1101 / 25 Ekim 1689 | B | 1690-91 | 25 Ekim 1689 (H. 11 Muharrem 1101) |
| 42 | `data/olaylar_ek7.js:99` | 1695-02-06 | 21 Cemâziyelâhir 1106 / 6 Şubat 1695 | B | 1695-96 | 6 Şubat 1695 (H. 21 Cemâziyelâhir 1106) |
| 43 | `data/olaylar_ek7.js:100` | 1695-05-25 | 11 Şevval 1106 / 25 Mayıs 1695 | B | 1695-96 | 25 Mayıs 1695 (H. 11 Şevval 1106) |
| 44 | `data/olaylar_ek7.js:205` | 1406-10-15 | 2 Cemâziyelevvel 809 / 15 Ekim 1406 | B | 1406-07 | 15 Ekim 1406 (H. 2 Cemâziyelevvel 809) |
| 45 | `data/olaylar_ek7.js:206` | 1408-04-13 | 16 Zilkade 810 / 13 Nisan 1408 | B | 1407-08 | 13 Nisan 1408 (H. 16 Zilkade 810) |
| 46 | `data/olaylar_ek8.js:150` | 1603-03-01 | Şevval 1011 (Mart 1603) | A | 1602-03 | Mart 1603 (H. Şevval 1011) |
| 47 | `data/olaylar_ek8.js:315` | 1468-01-01 | 873 (1468) | A | 1468-69 | 1468 (H. 873) |
| 48 | `data/olaylar_ek10.js:499` | 1416-01-01 | 819 (1416) | A | 1416-17 | 1416 (H. 819) |
| 49 | `data/olaylar_ek10.js:507` | 1419-01-01 | 822 (1419) ilkbaharı | A | 1419-20 | 1419 (H. 822) ilkbaharı |
| 50 | `data/olaylar_ek12.js:99` | 1537-01-01 | 944-945 (1537-1538) | A | 1537-38 | 1537-1538 (H. 944-945) |
| 51 | `data/olaylar_ek14.js:29` | 1543-06-01 | 950 Rebîülevvel / Haziran 1543 | B | 1543-44 | Haziran 1543 (H. 950 Rebîülevvel) |
| 52 | `data/olaylar_ek14.js:30` | 1548-08-01 | 955 Receb / Ağustos 1548 | B | 1548-49 | Ağustos 1548 (H. 955 Receb) |
| 53 | `data/olaylar_ek14.js:31` | 1447-01-01 | 841-851 (1437-1447) | A | 1437-38 | 1437-1447 (H. 841-851) |
| 54 | `data/olaylar_ek14.js:32` | 1402-01-01 | 805 (1402-1403) | A | 1403 | 1402-1403 (H. 805) |
| 55 | `data/olaylar_ek14.js:34` | 1567-01-01 | 975 (1567-68) | A | 1567-68 | 1567-68 (H. 975) |
| 56 | `data/olaylar_ek14.js:35` | 1577-01-01 | 985 (1577-78) | A | 1577-78 | 1577-78 (H. 985) |
| 57 | `data/olaylar_ek14.js:36` | 1566-01-01 | 974 (1566-67) dolayı | A | 1566-67 | 1566-67 (H. 974) dolayı |
| 58 | `data/olaylar_ek14.js:37` | 1505-10-13 | 906 – 14 Cemâziyelevvel 911 (1500 – 13 Ekim 1505) | B | 1501 | 1500 – 13 Ekim 1505 (H. 906 – 14 Cemâziyelevvel 911) |
| 59 | `data/olaylar_ek14.js:38` | 1414-01-01 | 817 (1414) | A | 1414-15 | 1414 (H. 817) |
| 60 | `data/olaylar_ek14.js:39` | 1419-12-01 | Zilhicce 822 / Aralık 1419 | B | 1419-20 | Aralık 1419 (H. Zilhicce 822) |
| 61 | `data/olaylar_ek14.js:40` | 1592-01-01 | 1001 (1592) | A | 1593-94 | 1592 (H. 1001) |
| 62 | `data/olaylar_ek14.js:41` | 1598-04-09 | 3 Ramazan 1006 / 9 Nisan 1598 (Dâvud Ağa maddesi farklı bir tarih verir: 23 Ağus | B | 1598-99 | 9 Nisan 1598 (H. 3 Ramazan 1006) (Dâvud Ağa maddesi farklı bir tarih verir: 23 Ağustos 1597) |
| 63 | `data/olaylar_ek14.js:44` | 1665-10-30 | 20 Rebîülâhir 1076 / 30 Ekim 1665 | B | 1665-66 | 30 Ekim 1665 (H. 20 Rebîülâhir 1076) |
| 64 | `data/olaylar_ek14.js:45` | 1566-01-01 | 973 (1566) | A | 1566 | 1566 (H. 973) |
| 65 | `data/olaylar_ek14.js:46` | 1547-01-01 | 954 (1547) | A | 1547-48 | 1547 (H. 954) |
| 66 | `data/olaylar_ek14.js:47` | 1577-01-01 | 985 (1577-78) | A | 1577-78 | 1577-78 (H. 985) |
| 67 | `data/olaylar_ek14.js:48` | 1573-01-01 | 981 (1573) | A | 1573-74 | 1573 (H. 981) |
| 68 | `data/olaylar_ek14.js:49` | 1580-01-01 | 988 (1580) | A | 1580-81 | 1580 (H. 988) |
| 69 | `data/olaylar_ek14.js:51` | 1568-01-01 | 976 (1568) | A | 1568-69 | 1568 (H. 976) |
| 70 | `data/olaylar_ek14.js:52` | 1749-01-19 | 29 Muharrem 1162 / 19 Ocak 1749 | B | 1749-50 | 19 Ocak 1749 (H. 29 Muharrem 1162) |
| 71 | `data/olaylar_ek14.js:53` | 1755-12-05 | 1 Rebîülevvel 1169 / 5 Aralık 1755 | B | 1756-57 | 5 Aralık 1755 (H. 1 Rebîülevvel 1169) |
| 72 | `data/olaylar_ek14.js:56` | 1521-01-01 | 927 (1521) | A | 1521-22 | 1521 (H. 927) |
| 73 | `data/olaylar_ek14.js:57` | 1526-01-01 | 932 (1526) | A | 1526-27 | 1526 (H. 932) |
| 74 | `data/olaylar_ek14.js:58` | 1557-01-01 | Rebîülevvel 964 / Ocak 1557 | B | 1557-58 | Ocak 1557 (H. Rebîülevvel 964) |
| 75 | `data/olaylar_ek14.js:59` | 1534-01-01 | 940 (1534) | A | 1534 | 1534 (H. 940) |
| 76 | `data/olaylar_ek14.js:62` | 1633-01-01 | 1043 (1633) | A | 1633-34 | 1633 (H. 1043) |
| 77 | `data/olaylar_ek14.js:64` | 1775-04-29 | Cemâziyelevvel 1189 / 29 Nisan 1775 | B | 1775-76 | 29 Nisan 1775 (H. Cemâziyelevvel 1189) |
| 78 | `data/olaylar_ek14.js:65` | 1793-07-14 | 5 Zilhicce 1207 / 14 Temmuz 1793 | B | 1793-94 | 14 Temmuz 1793 (H. 5 Zilhicce 1207) |
| 79 | `data/olaylar_ek14.js:70` | 1520-01-01 | 926 (1520) | A | 1520-21 | 1520 (H. 926) |
| 80 | `data/olaylar_ek14.js:71` | 1679-01-01 | 1090 (1679) | A | 1679-80 | 1679 (H. 1090) |
| 81 | `data/olaylar_ek14.js:72` | 1695-01-01 | 1106 (1695) | A | 1695-96 | 1695 (H. 1106) |
| 82 | `data/olaylar_ek14.js:73` | 1578-01-02 | 22 Şevval 985 / 2 Ocak 1578 | B | 1577-78 | 2 Ocak 1578 (H. 22 Şevval 985) |
| 83 | `data/olaylar_ek14.js:74` | 1588-01-01 | 996 Safer / Ocak 1588 | B | 1588-89 | Ocak 1588 (H. 996 Safer) |
| 84 | `data/olaylar_ek14.js:76` | 1732-01-01 | 1145 (1732) | A | 1732-33 | 1732 (H. 1145) |
| 85 | `data/olaylar_ek14.js:77` | 1711-01-01 | 1123 (1711), bazı kaynaklara göre 1124 (1712) | A | 1711-12 | 1711 (H. 1123), bazı kaynaklara göre 1124 (1712) |
| 86 | `data/olaylar_ek14.js:78` | 1778-01-09 | 10 Zilhicce 1191 / 9 Ocak 1778 | B | 1777-78 | 9 Ocak 1778 (H. 10 Zilhicce 1191) |
| 87 | `data/olaylar_ek14.js:80` | 1846-11-29 | 10 Zilhicce 1262 / 29 Kasım 1846 | B | 1846-47 | 29 Kasım 1846 (H. 10 Zilhicce 1262) |
| 88 | `data/olaylar_ek14.js:82` | 1566-09-30 | 15 Rebîülevvel 974 / 30 Eylül 1566 | B | 1566-67 | 30 Eylül 1566 (H. 15 Rebîülevvel 974) |
| 89 | `data/olaylar_ek14.js:87` | 1635-01-01 | 1044 Şâban / Ocak 1635 | B | 1634-35 | Ocak 1635 (H. 1044 Şâban) |
| 90 | `data/olaylar_ek14.js:107` | 1326-01-01 | 726 (1326) — vefat tarihi; evlilik ve rüya olayının tarihi bilinmez | A | 1326-27 | 1326 (H. 726) — vefat tarihi; evlilik ve rüya olayının tarihi bilinmez |
| 91 | `data/olaylar_ek14.js:112` | 1425-01-01 | 828 (1425) | A | 1425-26 | 1425 (H. 828) |
| 92 | `data/olaylar_ek14.js:117` | 1650-01-01 | 1060 (1650) | A | 1650-51 | 1650 (H. 1060) |
| 93 | `data/olaylar_ek14.js:118` | 1640-06-01 | 1050 (1640) | A | 1640-41 | 1640 (H. 1050) |
| 94 | `data/olaylar_ek14.js:128` | 1554-06-01 | 962 (1554-55, bazı kaynaklara göre 960/1553) | A | 1555-56 | 1554-55, bazı kaynaklara göre 960/1553 (H. 962) |
| 95 | `data/olaylar_ek14.js:142` | 1555-06-01 | 963 (1555-56) | A | 1556-57 | 1555-56 (H. 963) |
| 96 | `data/olaylar_ek14.js:143` | 1727-06-01 | 1140 (1727) | A | 1728-29 | 1727 (H. 1140) |
| 97 | `data/olaylar_ek14.js:144` | 1864-03-30 | 21 Şevval 1280 / 30 Mart 1864 | B | 1863-64 | 30 Mart 1864 (H. 21 Şevval 1280) |
| 98 | `data/olaylar_ek14.js:145` | 1873-06-28 | 2 Cemâziyelevvel 1290 / 28 Haziran 1873 | B | 1873-74 | 28 Haziran 1873 (H. 2 Cemâziyelevvel 1290) |
| 99 | `data/olaylar_ek14.js:146` | 1896-02-02 | 17 Şâban 1313 / 2 Şubat 1896 | B | 1895-96 | 2 Şubat 1896 (H. 17 Şâban 1313) |
| 100 | `data/olaylar_ek14.js:150` | 1572-01-22 | 6 Ramazan 979 / 22 Ocak 1572 | B | 1571-72 | 22 Ocak 1572 (H. 6 Ramazan 979) |
| 101 | `data/olaylar_ek15.js:38` | 1689-01-01 | 1100 / 1689 | B | 1689-90 | 1689 (H. 1100) |
| 102 | `data/olaylar_ek16.js:15` | 1297-01-01 | 696 (1296-97) / 1297 | A | 1297-98 | 1296-97 (H. 696) / 1297 |
| 103 | `data/olaylar_ek16.js:31` | 1308-01-01 | 708 (1308) | A | 1308-09 | 1308 (H. 708) |
| 104 | `data/olaylar_ek16.js:81` | 1450-01-01 | 854 (1450) | A | 1450-51 | 1450 (H. 854) |
| 105 | `data/olaylar_ek16.js:95` | 1411-01-01 | 814 (1411) | A | 1411-12 | 1411 (H. 814) |
| 106 | `data/olaylar_ek16.js:111` | 1441-01-01 | 845 (1441-42) — TDV'ye göre en eski Hacı Giray parası bu tarihi taşır | A | 1441-42 | 1441-42 (H. 845) — TDV'ye göre en eski Hacı Giray parası bu tarihi taşır |
| 107 | `data/olaylar_ek16.js:119` | 1452-01-01 | 856-857 (1452-1453) | A | 1452-53 | 1452-1453 (H. 856-857) |
| 108 | `data/olaylar_ek16.js:215` | 1507-05-24 | 8 Muharrem 913 / 20 Mayıs 1507 (Herat'ın düşüşü) — 15 Muharrem/27 Mayıs (hutbeni | B | 1507-08 | 20 Mayıs 1507 (H. 8 Muharrem 913) (Herat'ın düşüşü) — 15 Muharrem/27 Mayıs (hutbenin Şeybânî adına okunuşu) |
| 109 | `data/olaylar_ek17.js:17` | 1513-01-01 | 919 (1513) | A | 1513-14 | 1513 (H. 919) |
| 110 | `data/olaylar_ek17.js:184` | 1557-01-01 | 15 Şâban 962 (5 Temmuz 1555) kuruluş, 2 Nisan 1557 Masavva'nın alınışı | A | 1555-56 | 5 Temmuz 1555 (H. 15 Şâban 962) kuruluş, 2 Nisan 1557 Masavva'nın alınışı |
| 111 | `data/olaylar_ek17.js:241` | 1485-01-01 | 890 (1485) — yıl hassasiyeti; ay ve gün kaynakta yok | A | 1485-86 | 1485 (H. 890) — yıl hassasiyeti; ay ve gün kaynakta yok |
| 112 | `data/devletler.js:8621` | 1068-01-01 | 461 (1068-69) — TDV yıl verir | A | 1069-70 | 1068-69 (H. 461) — TDV yıl verir |
| 113 | `data/devletler.js:8675` | 1009-01-01 | 400 (1009-10) — TDV yıl verir | A | 1010-11 | 1009-10 (H. 400) — TDV yıl verir |
| 114 | `data/devletler.js:9832` | 1171-09-13 | 10 Muharrem 567 / 13 Eylül 1171 | B | 1172-73 | 13 Eylül 1171 (H. 10 Muharrem 567) |
| 115 | `data/devletler.js:9842` | 1024-01-01 | 415 (1024) (TDV yıl verir) | A | 1024-25 | 1024 (H. 415) (TDV yıl verir) |
| 116 | `data/devletler.js:9843` | 1080-06-18 | 26 Zilhicce 472 / 18 Haziran 1080 | B | 1079-80 | 18 Haziran 1080 (H. 26 Zilhicce 472) |
| 117 | `data/devletler.js:9853` | 1104-06-06 | 10 Ramazan 497 / 6 Haziran 1104 | B | 1104-05 | 6 Haziran 1104 (H. 10 Ramazan 497) |
| 118 | `data/devletler.js:9864` | 1081-01-01 | Receb 474 / Aralık 1081 (gün bilinmiyor) | B | 1081-82 | Aralık 1081 (H. Receb 474) (gün bilinmiyor) |
| 119 | `data/devletler.js:9865` | 1157-01-01 | Receb 552 / Ağustos 1157 (gün bilinmiyor) | B | 1157-58 | Ağustos 1157 (H. Receb 552) (gün bilinmiyor) |
| 120 | `data/devletler.js:9875` | 1070-01-01 | 462 (1070) (TDV yıl verir) | A | 1070-71 | 1070 (H. 462) (TDV yıl verir) |
| 121 | `data/devletler.js:9886` | 1099-07-15 | 23 Şâban 492 / 15 Temmuz 1099 | B | 1099-00 | 15 Temmuz 1099 (H. 23 Şâban 492) |
| 122 | `data/devletler.js:9919` | 1109-07-12 | 11 Zilhicce 502 / 12 Temmuz 1109 | B | 1109-10 | 12 Temmuz 1109 (H. 11 Zilhicce 502) |
| 123 | `data/devletler.js:9930` | 1171-09-13 | 10 Muharrem 567 / 13 Eylül 1171 | B | 1172-73 | 13 Eylül 1171 (H. 10 Muharrem 567) |
| 124 | `data/devletler.js:9941` | 1186-01-01 | 582 (1186) (TDV yıl verir) | A | 1186-87 | 1186 (H. 582) (TDV yıl verir) |
| 125 | `data/devletler.js:9952` | 1185-01-01 | 581 (1185) — TDV yıl verir, gün yok | A | 1185-86 | 1185 (H. 581) — TDV yıl verir, gün yok |
| 126 | `data/devletler.js:9953` | 1260-01-01 | 658 (1260) — TDV yıl verir, gün yok | A | 1260-61 | 1260 (H. 658) — TDV yıl verir, gün yok |
| 127 | `data/devletler.js:9963` | 1178-01-01 | 574 (1178-79) — TDV '570 + dört yıl sonra' der, yıl türetilmiş | A | 1178-79 | 1178-79 (H. 574) — TDV '570 + dört yıl sonra' der, yıl türetilmiş |
| 128 | `data/kronoloji_habsburg.js:265` | 1664-08-09 | 16 Muharrem 1075 (9 Ağustos 1664) | A | 1664-65 | 9 Ağustos 1664 (H. 16 Muharrem 1075) |
| 129 | `data/kronoloji_iran.js:62` | 1335-11-30 | 13 Rebîülâhir 736 / 30 Kasım 1335 (TDV `ebu-said-bahadir-han`) | B | 1336-37 | 30 Kasım 1335 (H. 13 Rebîülâhir 736) (TDV `ebu-said-bahadir-han`) |
| 130 | `data/kronoloji_iran.js:78` | 1387-11-18 | 6 Zilkade 789 / 18 Kasım 1387 (TDV `isfahan`, Hâfız-ı Ebrû'ya dayanarak) | B | 1387-88 | 18 Kasım 1387 (H. 6 Zilkade 789) (TDV `isfahan`, Hâfız-ı Ebrû'ya dayanarak) |
| 131 | `data/kronoloji_iran.js:100` | 1467-11-10 | 12 Rebîülâhir 872 / 10 Kasım 1467 (TDV `karakoyunlular`, `uzun-hasan`, `cihan-sa | B | 1468 | 10 Kasım 1467 (H. 12 Rebîülâhir 872) (TDV `karakoyunlular`, `uzun-hasan`, `cihan-sah` — Bingöl-Kiğı arası Sancak mevkii baskını; d'deki "Çap |
| 132 | `data/kronoloji_iran.js:114` | 1501-07-01 | 907 / 1501 — TDV `safeviler` yalnız yıl veriyor; t = `safevi` künyesinin f günü  | B | 1501-02 | 1501 (H. 907) — TDV `safeviler` yalnız yıl veriyor; t = `safevi` künyesinin f günü (KAYNAK DEĞİL — D213 künye günü devralma, yıla indirmek k |
| 133 | `data/kronoloji_iran.js:166` | 1590-03-21 | 998 (1590) | A | 1590-91 | 1590 (H. 998) |
| 134 | `data/kronoloji_memluk.js:56` | 1265-01-01 | H. 663 / 1265 — yıl hassasiyeti · TDV `hisbe`, `memlukler`, `baybars-i`, `kalavu | B | 1265-66 | 1265 (H. 663) — yıl hassasiyeti · TDV `hisbe`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 135 | `data/kronoloji_memluk.js:58` | 1266-01-01 | H. 664 / 1266 — yıl hassasiyeti · TDV `surre`, `memlukler`, `baybars-i`, `kalavu | B | 1266-67 | 1266 (H. 664) — yıl hassasiyeti · TDV `surre`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 136 | `data/kronoloji_memluk.js:68` | 1284-01-01 | H. 684 / 1284 — yıl hassasiyeti · TDV `kalavun-kulliyesi`, `memlukler`, `baybars | B | 1285-86 | 1284 (H. 684) — yıl hassasiyeti · TDV `kalavun-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçü |
| 137 | `data/kronoloji_memluk.js:72` | 1289-01-01 | H. 688 / 1289 — yıl hassasiyeti · eski t 1289-06-01'in AYI kaynakta YOK (d ve TD | B | 1289-90 | 1289 (H. 688) — yıl hassasiyeti · eski t 1289-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `trablussam`, `memlukler`, `baybar |
| 138 | `data/kronoloji_memluk.js:80` | 1294-01-01 | H. 693 / 1294 — yıl hassasiyeti · TDV `trablussam`, `memlukler`, `baybars-i`, `k | B | 1294-95 | 1294 (H. 693) — yıl hassasiyeti · TDV `trablussam`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 139 | `data/kronoloji_memluk.js:82` | 1294-12-01 | Muharrem 694 / Aralık 1294 — ay hassasiyeti (TDV `muhammed-b-kalavun`; gün yok) | B | 1295-96 | Aralık 1294 (H. Muharrem 694) — ay hassasiyeti (TDV `muhammed-b-kalavun`; gün yok) |
| 140 | `data/kronoloji_memluk.js:84` | 1295-01-01 | H. 695 / 1295 — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavu | B | 1296-97 | 1295 (H. 695) — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 141 | `data/kronoloji_memluk.js:108` | 1315-01-01 | H. 715 / 1315 — yıl hassasiyeti · TDV `ikta`, `memlukler`, `baybars-i`, `kalavun | B | 1315-16 | 1315 (H. 715) — yıl hassasiyeti · TDV `ikta`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 142 | `data/kronoloji_memluk.js:112` | 1315-01-01 | H. 720 / 1315 — yıl hassasiyeti · eski t 1315-06-01'in AYI kaynakta YOK (d ve TD | B | 1320-21 | 1315 (H. 720) — yıl hassasiyeti · eski t 1315-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kudus`, `memlukler`, `baybars-i`, |
| 143 | `data/kronoloji_memluk.js:126` | 1329-01-01 | H. 729 / 1329 — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavu | B | 1329-30 | 1329 (H. 729) — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 144 | `data/kronoloji_memluk.js:128` | 1337-01-01 | H. 738 / 1337 — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, ` | B | 1338 | 1337 (H. 738) — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 145 | `data/kronoloji_memluk.js:138` | 1348-01-01 | H. 749 / 1348 — yıl hassasiyeti · eski t 1348-08-01'in AYI kaynakta YOK (d ve TD | B | 1348-49 | 1348 (H. 749) — yıl hassasiyeti · eski t 1348-08-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `taun`, `memlukler`, `baybars-i`,  |
| 146 | `data/kronoloji_memluk.js:140` | 1348-01-01 | H. 749 / 1348 — yıl hassasiyeti · eski t 1348-09-01'in AYI kaynakta YOK (d ve TD | B | 1348-49 | 1348 (H. 749) — yıl hassasiyeti · eski t 1348-09-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `taun`, `memlukler`, `baybars-i`,  |
| 147 | `data/kronoloji_memluk.js:144` | 1350-01-01 | H. 751 / 1350 — yıl hassasiyeti · eski t 1350-06-01'in AYI kaynakta YOK (d ve TD | B | 1350-51 | 1350 (H. 751) — yıl hassasiyeti · eski t 1350-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `resuliler`, `memlukler`, `baybars |
| 148 | `data/kronoloji_memluk.js:148` | 1363-01-01 | H. 764 / 1363 — yıl hassasiyeti · TDV `taun`, `memlukler`, `baybars-i`, `kalavun | B | 1363-64 | 1363 (H. 764) — yıl hassasiyeti · TDV `taun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 149 | `data/kronoloji_memluk.js:150` | 1365-01-01 | H. 767 / 1365 — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, ` | B | 1366-67 | 1365 (H. 767) — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 150 | `data/kronoloji_memluk.js:156` | 1371-01-01 | H. 773 / 1371 — yıl hassasiyeti · TDV `ibnus-satir`, `ilm-i-mikat`, `memlukler`, | B | 1371-72 | 1371 (H. 773) — yıl hassasiyeti · TDV `ibnus-satir`, `ilm-i-mikat`, `memlukler`, `baybars-i` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü |
| 151 | `data/kronoloji_memluk.js:160` | 1374-01-01 | H. 776 / 1374 — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalav | B | 1374-75 | 1374 (H. 776) — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 152 | `data/kronoloji_memluk.js:162` | 1375-01-01 | H. 777 / 1375 — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TD | B | 1375-76 | 1375 (H. 777) — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `ibnus-satir`, `memlukler`, `bayba |
| 153 | `data/kronoloji_memluk.js:164` | 1375-01-01 | H. 776 / 1375 — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TD | B | 1374-75 | 1375 (H. 776) — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `memlukler`, `baybars-i`, `kalavun |
| 154 | `data/kronoloji_memluk.js:166` | 1377-01-01 | H. 779 / 1377 — yıl hassasiyeti · TDV `ibn-haldun`, `memlukler`, `baybars-i`, `k | B | 1377-78 | 1377 (H. 779) — yıl hassasiyeti · TDV `ibn-haldun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 155 | `data/kronoloji_memluk.js:174` | 1384-01-01 | H. 788 / 1384 — yıl hassasiyeti · TDV `berkuk-kulliyesi`, `memlukler`, `baybars- | B | 1386-87 | 1384 (H. 788) — yıl hassasiyeti · TDV `berkuk-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçüm |
| 156 | `data/kronoloji_memluk.js:204` | 1403-01-01 | H. 806 / 1403 — yıl hassasiyeti · eski t 1403-06-01'in AYI kaynakta YOK (d ve TD | B | 1403-04 | 1403 (H. 806) — yıl hassasiyeti · eski t 1403-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kahire`, `memlukler`, `baybars-i` |
| 157 | `data/kronoloji_memluk.js:214` | 1407-01-01 | H. 810 / 1407 — yıl hassasiyeti · TDV `esrefi`, `memlukler`, `baybars-i`, `kalav | B | 1407-08 | 1407 (H. 810) — yıl hassasiyeti · TDV `esrefi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 158 | `data/kronoloji_memluk.js:230` | 1416-01-01 | H. 819 / 1416 — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `bay | B | 1416-17 | 1416 (H. 819) — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 159 | `data/kronoloji_memluk.js:254` | 1430-01-01 | H. 833 / 1430 — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `bay | B | 1430-31 | 1430 (H. 833) — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 160 | `data/kronoloji_memluk.js:278` | 1468-02-01 | 7 Receb 872 / 1 Şubat 1468 — GERÇEK GÜN (TDV `kayitbay`) | B | 1468 | 1 Şubat 1468 (H. 7 Receb 872) — GERÇEK GÜN (TDV `kayitbay`) |
| 161 | `data/kronoloji_memluk.js:282` | 1472-01-01 | H. 879 / 1472 — yıl hassasiyeti · TDV `kayitbay-kulliyesi`, `memlukler`, `baybar | B | 1474-75 | 1472 (H. 879) — yıl hassasiyeti · TDV `kayitbay-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 162 | `data/kronoloji_memluk.js:284` | 1477-01-01 | H. 884 / 1477 — yıl hassasiyeti · TDV `iskenderiye`, `memlukler`, `baybars-i`, ` | B | 1479-80 | 1477 (H. 884) — yıl hassasiyeti · TDV `iskenderiye`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 163 | `data/kronoloji_memluk.js:292` | 1482-01-01 | H. 887 / 1482 — yıl hassasiyeti · TDV `kudus`, `kubbetus-sahre`, `memlukler`, `b | B | 1482-83 | 1482 (H. 887) — yıl hassasiyeti · TDV `kudus`, `kubbetus-sahre`, `memlukler`, `baybars-i` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 164 | `data/kronoloji_memluk.js:304` | 1491-01-01 | H. 896 / 1491 — yıl hassasiyeti · TDV `kayitbay`, `memlukler`, `baybars-i`, `kal | B | 1491-92 | 1491 (H. 896) — yıl hassasiyeti · TDV `kayitbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 165 | `data/kronoloji_memluk.js:310` | 1501-01-01 | H. 922 / 1501 — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalav | B | 1516-17 | 1501 (H. 922) — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 166 | `data/kronoloji_memluk.js:316` | 1503-01-01 | H. 910 / 1503 — yıl hassasiyeti · TDV `kansu-gavri-kulliyesi`, `memlukler`, `bay | B | 1504-05 | 1503 (H. 910) — yıl hassasiyeti · TDV `kansu-gavri-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 167 | `data/kronoloji_cok_anadolu2.js:48` | 1341-01-01 | '742'den (1341) sonra' (TDV sahib-ataogullari) — kesin yıl YOK, değer EN ERKEN s | B | 1341-42 | 1341 (H. '742'den) sonra' (TDV sahib-ataogullari) — kesin yıl YOK, değer EN ERKEN sınırdır |
| 168 | `data/kronoloji_cok_arabistan2.js:35` | 1659-01-01 | 1069 H. (1658-59) — TDV hadramut gün vermez; Miladî yıl iki yıla düşüyor, t ikin | A | 1659-60 | 1658-59 (H. 1069 H.) — TDV hadramut gün vermez; Miladî yıl iki yıla düşüyor, t ikincisidir |
| 169 | `data/kronoloji_cok_cezayir.js:43` | 1516-01-01 | 922/1516 (TDV gün vermez) | B | 1516-17 | 1516 (H. 922) (TDV gün vermez) |
| 170 | `data/kronoloji_cok_cezayir.js:55` | 1518-01-01 | 924/1518 yazı (TDV gün vermez) | B | 1518-19 | 1518 yazı (H. 924) (TDV gün vermez) |
| 171 | `data/kronoloji_cok_cezayir.js:95` | 1533-01-01 | 940/1533-34 (TDV gün vermez; ilk Miladî yıl yazıldı) | B | 1534 | 1533-34 (H. 940) (TDV gün vermez; ilk Miladî yıl yazıldı) |
| 172 | `data/kronoloji_cok_cezayir.js:170` | 1568-06-27 | 2 Muharrem 976 / 27 Haziran 1568 | B | 1568-69 | 27 Haziran 1568 (H. 2 Muharrem 976) |
| 173 | `data/kronoloji_cok_fas.js:56` | 1333-01-01 | 733/1333 (TDV gün vermez) | B | 1333-34 | 1333 (H. 733) (TDV gün vermez) |
| 174 | `data/kronoloji_cok_fas.js:75` | 1539-01-01 | 946/1539 (TDV gün vermez; `fas` "1539-1540" der) | B | 1539-40 | 1539 (H. 946) (TDV gün vermez; `fas` "1539-1540" der) |
| 175 | `data/kronoloji_cok_fas.js:82` | 1545-01-01 | 952/1545 (TDV gün vermez) | B | 1545-46 | 1545 (H. 952) (TDV gün vermez) |
| 176 | `data/kronoloji_cok_fas.js:115` | 1627-01-01 | 1036/1627 (TDV gün vermez) | B | 1627-28 | 1627 (H. 1036) (TDV gün vermez) |
| 177 | `data/kronoloji_cok_fas.js:121` | 1640-01-01 | 1050/1640 (TDV gün vermez) | B | 1640-41 | 1640 (H. 1050) (TDV gün vermez) |
| 178 | `data/kronoloji_cok_fas.js:133` | 1667-01-01 | 1078/1667 (TDV gün vermez) | B | 1667-68 | 1667 (H. 1078) (TDV gün vermez) |
| 179 | `data/kronoloji_cok_fas.js:145` | 1669-01-01 | 1080/1669 (TDV gün vermez) | B | 1669-70 | 1669 (H. 1080) (TDV gün vermez) |
| 180 | `data/kronoloji_cok_fas.js:151` | 1670-01-01 | 1081/1670 (TDV gün vermez) | B | 1670-71 | 1670 (H. 1081) (TDV gün vermez) |
| 181 | `data/kronoloji_cok_fas.js:157` | 1679-01-01 | 1090/1679 (TDV gün vermez) | B | 1679-80 | 1679 (H. 1090) (TDV gün vermez) |
| 182 | `data/kronoloji_cok_fas.js:164` | 1681-01-01 | 1092/1681 (TDV gün vermez) | B | 1681-82 | 1681 (H. 1092) (TDV gün vermez) |
| 183 | `data/kronoloji_cok_fas.js:170` | 1684-01-01 | 1095/1684 (TDV gün vermez) | B | 1684-85 | 1684 (H. 1095) (TDV gün vermez) |
| 184 | `data/kronoloji_cok_fas.js:191` | 1699-01-01 | 1111/1699 (TDV gün vermez) | B | 1699-00 | 1699 (H. 1111) (TDV gün vermez) |
| 185 | `data/kronoloji_cok_fas.js:233` | 1797-01-01 | 1212/1797 (TDV gün vermez) | B | 1797-98 | 1797 (H. 1212) (TDV gün vermez) |
| 186 | `data/kronoloji_cok_iran.js:20` | 1386-01-01 | H. 788 / 1386 — yıl hassasiyeti · TDV `timur` ve `celayirliler` gün/ay vermiyor | B | 1386-87 | 1386 (H. 788) — yıl hassasiyeti · TDV `timur` ve `celayirliler` gün/ay vermiyor |
| 187 | `data/kronoloji_cok_iran.js:27` | 1592-01-01 | H. 1000 / 1592 — yıl hassasiyeti · TDV `gilan` ve `lahican` gün/ay vermiyor | B | 1592-93 | 1592 (H. 1000) — yıl hassasiyeti · TDV `gilan` ve `lahican` gün/ay vermiyor |
| 188 | `data/kronoloji_cok_romanya.js:40` | 1449-01-01 | 853 H. (TDV: 1449) — hicrî 853 yılı Şubat 1449 – Şubat 1450 arasına düşer | A | 1449-50 | TDV: 1449 (H. 853 H.) — hicrî 853 yılı Şubat 1449 – Şubat 1450 arasına düşer |
| 189 | `data/kronoloji_cok_romanya.js:87` | 1792-01-09 | TDV: '15 Cemâziyelevvel 1206 (10 Ocak 1792) Pazartesi'; Pazartesi Gregoryen 9 Oc | A | 1792-93 | 10 Ocak 1792 (H. TDV: '15 Cemâziyelevvel 1206) Pazartesi'; Pazartesi Gregoryen 9 Ocak 1792'ye düşer — atlasın öteki kayıtlarıyla aynı gün ya |
| 190 | `data/kronoloji_cok_tunus.js:52` | 1282-01-01 | 681/1282 (TDV gün vermez) | B | 1282-83 | 1282 (H. 681) (TDV gün vermez) |
| 191 | `data/kronoloji_cok_tunus.js:59` | 1329-01-01 | 729/1329 (TDV gün vermez) | B | 1329-30 | 1329 (H. 729) (TDV gün vermez) |
| 192 | `data/kronoloji_cok_tunus.js:105` | 1549-01-01 | 956/1549 (TDV gün vermez) | B | 1549-50 | 1549 (H. 956) (TDV gün vermez) |
| 193 | `data/kronoloji_cok_tunus.js:140` | 1586-01-01 | 994/1586 (TDV gün vermez) | B | 1586-87 | 1586 (H. 994) (TDV gün vermez) |
| 194 | `data/kronoloji_cok_tunus.js:167` | 1613-01-01 | 1022/1613 (TDV gün vermez) | B | 1613-14 | 1613 (H. 1022) (TDV gün vermez) |
| 195 | `data/kronoloji_cok_tunus.js:173` | 1631-01-01 | 1041/1631 (TDV gün vermez) | B | 1631-32 | 1631 (H. 1041) (TDV gün vermez) |
| 196 | `data/kronoloji_cok_tunus.js:181` | 1637-01-01 | 1047/1637 (TDV gün vermez) | B | 1637-38 | 1637 (H. 1047) (TDV gün vermez) |
| 197 | `data/kronoloji_cok_tunus.js:187` | 1665-01-01 | 1076/1665 (TDV gün vermez) | B | 1665-66 | 1665 (H. 1076) (TDV gün vermez) |
| 198 | `data/kronoloji_cok_tunus.js:193` | 1673-01-01 | 1084/1673 (TDV gün vermez) | B | 1673-74 | 1673 (H. 1084) (TDV gün vermez) |
| 199 | `data/kronoloji_cok_tunus.js:199` | 1675-01-01 | 1086/1675 (TDV gün vermez) | B | 1675-76 | 1675 (H. 1086) (TDV gün vermez) |
| 200 | `data/kronoloji_cok_tunus.js:212` | 1684-01-01 | 1095/1684 (TDV gün vermez) | B | 1684-85 | 1684 (H. 1095) (TDV gün vermez) |
| 201 | `data/kronoloji_cok_tunus.js:218` | 1691-01-01 | 1102/1691 (TDV gün vermez) | B | 1691-92 | 1691 (H. 1102) (TDV gün vermez) |
| 202 | `data/kronoloji_cok_tunus.js:238` | 1704-01-01 | 1116/1704 (TDV gün vermez; Hicrî 1116 = 1704-05) | B | 1704-05 | 1704 (H. 1116) (TDV gün vermez; Hicrî 1116 = 1704-05) |
| 203 | `data/kronoloji_cok_ermeni.js:56` | 1616-09-11 | 29 Şâban 1025 / 11 Eylül 1616 (TDV revan) | B | 1616-17 | 11 Eylül 1616 (H. 29 Şâban 1025) (TDV revan) |
| 204 | `data/kronoloji_cok_ispanya.js:14` | 1273-01-21 | 29 Cemâziyelâhir 671 / 21 Ocak 1273 — TDV'de tam gün (I. Muhammed'in ölümü) | B | 1273 | 21 Ocak 1273 (H. 29 Cemâziyelâhir 671) — TDV'de tam gün (I. Muhammed'in ölümü) |
| 205 | `data/kronoloji_cok_ispanya.js:25` | 1293-01-01 | yalnız yıl: 692/1293 (TDV `meriniler`); gün ve ay bilinmiyor. Tarîf'in Kastilya' | B | 1293-94 | 1293 (H. yalnız yıl: 692) (TDV `meriniler`); gün ve ay bilinmiyor. Tarîf'in Kastilya'ya düşüşünün kendi günü TDV'de yok |
| 206 | `data/kronoloji_cok_ispanya.js:30` | 1302-01-01 | yalnız yıl: 701 (1302) — TDV hükümdar listesi; 701 H. Eylül 1301–Ağustos 1302'yi | A | 1302-03 | 1302 (H. yalnız yıl: 701) — TDV hükümdar listesi; 701 H. Eylül 1301–Ağustos 1302'yi kapsar, gün yok |
| 207 | `data/kronoloji_cok_ispanya.js:32` | 1306-01-01 | yalnız yıl: 705/1306 (TDV `nasriler`) | B | 1306 | 1306 (H. yalnız yıl: 705) (TDV `nasriler`) |
| 208 | `data/kronoloji_cok_ispanya.js:33` | 1309-01-01 | yalnız yıl (TDV 709/1309; GEC 'estiu del 1309') | A | 1309-10 | TDV 709/1309; GEC 'estiu del 1309' (H. yalnız yıl) |
| 209 | `data/kronoloji_cok_ispanya.js:34` | 1309-01-01 | yalnız yıl: 708/1309 (TDV `nasriler`); gün yok | B | 1308-09 | 1309 (H. yalnız yıl: 708) (TDV `nasriler`); gün yok |
| 210 | `data/kronoloji_cok_ispanya.js:37` | 1314-01-01 | yalnız yıl: 713/1314 (TDV `nasriler`); gün yok | B | 1313-14 | 1314 (H. yalnız yıl: 713) (TDV `nasriler`); gün yok |
| 211 | `data/kronoloji_cok_ispanya.js:42` | 1324-01-01 | yalnız yıl: 724 (1324) — TDV, İbnü'l-Hatîb'e dayanarak; gün yok | A | 1324-25 | 1324 (H. yalnız yıl: 724) — TDV, İbnü'l-Hatîb'e dayanarak; gün yok |
| 212 | `data/kronoloji_cok_ispanya.js:46` | 1325-01-01 | yalnız yıl: 725 (1325) (TDV `nasriler`); gün yok | A | 1325-26 | 1325 (H. yalnız yıl: 725) (TDV `nasriler`); gün yok |
| 213 | `data/kronoloji_cok_ispanya.js:51` | 1333-01-01 | yalnız yıl: 733 (1333) (TDV `nasriler`, `ebul-hasan-el-merini`); gün yok | A | 1333-34 | 1333 (H. yalnız yıl: 733) (TDV `nasriler`, `ebul-hasan-el-merini`); gün yok |
| 214 | `data/kronoloji_cok_ispanya.js:54` | 1344-01-01 | yalnız yıl: 744/1344 (TDV `nasriler`); gün yok | B | 1343-44 | 1344 (H. yalnız yıl: 744) (TDV `nasriler`); gün yok |
| 215 | `data/kronoloji_cok_ispanya.js:55` | 1348-01-01 | yalnız yıl: Adalet Kapısı kitabesi 749 (1348) tarihli (TDV); gün yok | A | 1348-49 | 1348 (H. yalnız yıl: Adalet Kapısı kitabesi 749) tarihli (TDV); gün yok |
| 216 | `data/kronoloji_cok_ispanya.js:58` | 1349-01-01 | yalnız yıl: 750 (1349) (TDV `nasriler`, `gani-billah`); gün yok | A | 1349-50 | 1349 (H. yalnız yıl: 750) (TDV `nasriler`, `gani-billah`); gün yok |
| 217 | `data/kronoloji_cok_ispanya.js:65` | 1359-01-01 | yalnız yıl: 760 (1359) (TDV `nasriler`, `gani-billah`); gün yok | A | 1359-60 | 1359 (H. yalnız yıl: 760) (TDV `nasriler`, `gani-billah`); gün yok |
| 218 | `data/kronoloji_cok_ispanya.js:66` | 1362-04-16 | 20 Cemâziyelâhir 763 / 16 Nisan 1362 — TDV tam gün | B | 1362-63 | 16 Nisan 1362 (H. 20 Cemâziyelâhir 763) — TDV tam gün |
| 219 | `data/kronoloji_cok_ispanya.js:70` | 1369-01-01 | Zilhicce 770 / Temmuz 1369 (TDV `gani-billah`); gün yok → YYYY-01-01 | B | 1369-70 | Temmuz 1369 (H. Zilhicce 770) (TDV `gani-billah`); gün yok → YYYY-01-01 |
| 220 | `data/kronoloji_cok_ispanya.js:73` | 1374-01-01 | yıl yaklaşık: TDV `gani-billah` Cebelitârık'ın alınmasını I. Abdülazîz'in ölümü  | A | 1372-73 | 774/1373 (H. yıl yaklaşık: TDV `gani-billah` Cebelitârık'ın alınmasını I. Abdülazîz'in ölümü) ile Ahmed b. Ebû Sâlim'in tahta çıkışı (776/13 |
| 221 | `data/kronoloji_cok_ispanya.js:81` | 1391-01-17 | 10 Safer 793 / 17 Ocak 1391 — TDV `gani-billah` tam gün | B | 1391-92 | 17 Ocak 1391 (H. 10 Safer 793) — TDV `gani-billah` tam gün |
| 222 | `data/kronoloji_cok_ispanya.js:94` | 1432-01-27 | 23 Cemâziyelevvel 835 / 27 Ocak 1432 — TDV `nasriler` tam gün | B | 1432-33 | 27 Ocak 1432 (H. 23 Cemâziyelevvel 835) — TDV `nasriler` tam gün |
| 223 | `data/kronoloji_cok_ispanya.js:105` | 1465-01-01 | yalnız yıl: 870 (1465) (TDV `nasriler`); gün yok | A | 1466-67 | 1465 (H. yalnız yıl: 870) (TDV `nasriler`); gün yok |
| 224 | `data/kronoloji_cok_ispanya.js:114` | 1483-03-20 | Safer 888 / Mart 1483 (TDV); gün 20-21 Mart 1483: RAH Historia Hispánica (Boabdi | B | 1483-84 | Mart 1483 (H. Safer 888) (TDV); gün 20-21 Mart 1483: RAH Historia Hispánica (Boabdil biyografisi, Hechos). TDV gün vermediği için gün RAH'ta |
| 225 | `data/kronoloji_cok_ispanya.js:116` | 1485-01-01 | yalnız yıl: 890 (1485) (TDV `nasriler`); gün yok | A | 1485-86 | 1485 (H. yalnız yıl: 890) (TDV `nasriler`); gün yok |
| 226 | `data/kronoloji_cok_ispanya.js:119` | 1487-08-18 | 27 Şâban 892 / 18 Ağustos 1487 — TDV `maleka` tam gün (kuşatma başlangıcı 7 Mayı | B | 1487-88 | 18 Ağustos 1487 (H. 27 Şâban 892) — TDV `maleka` tam gün (kuşatma başlangıcı 7 Mayıs 1487: RAH) |
| 227 | `data/kronoloji_cok_memluk.js:19` | 1516-06-20 | 19 Cemâziyelevvel 922 / 20 Haziran 1516 (TDV `zebid`) | B | 1516-17 | 20 Haziran 1516 (H. 19 Cemâziyelevvel 922) (TDV `zebid`) |
| 228 | `data/kronoloji_cok_memluk.js:25` | 1517-01-01 | 923 / 1517 — yıl hassasiyeti · TDV `zebid` "ertesi yıl" diyor, gün/ay vermiyor | B | 1517-18 | 1517 (H. 923) — yıl hassasiyeti · TDV `zebid` "ertesi yıl" diyor, gün/ay vermiyor |
| 229 | `data/kronoloji_cok_once1281_anadolu.js:85` | 1024-01-01 | 415/1024 (TDV yıl verir) | B | 1024-25 | 1024 (H. 415) (TDV yıl verir) |
| 230 | `data/kronoloji_cok_once1281_anadolu.js:163` | 1031-01-01 | 422/1031 (TDV yıl verir) | B | 1031-32 | 1031 (H. 422) (TDV yıl verir) |
| 231 | `data/kronoloji_cok_once1281_anadolu.js:300` | 1049-01-01 | 441/1049 (TDV yıl verir) | B | 1049-50 | 1049 (H. 441) (TDV yıl verir) |
| 232 | `data/kronoloji_cok_once1281_anadolu.js:390` | 1061-01-01 | 453/1061 (TDV yıl verir) | B | 1061-62 | 1061 (H. 453) (TDV yıl verir) |
| 233 | `data/kronoloji_cok_once1281_anadolu.js:404` | 1062-01-01 | 454/1062 (TDV yıl verir) | B | 1062-63 | 1062 (H. 454) (TDV yıl verir) |
| 234 | `data/kronoloji_cok_once1281_anadolu.js:539` | 1080-01-01 | 472/1080 (TDV yıl verir) | B | 1079-80 | 1080 (H. 472) (TDV yıl verir) |
| 235 | `data/kronoloji_cok_once1281_anadolu.js:601` | 1083-01-01 | 476/1083 (TDV yıl verir) | B | 1083-84 | 1083 (H. 476) (TDV yıl verir) |
| 236 | `data/kronoloji_cok_once1281_anadolu.js:677` | 1092-01-01 | 485 sonları (1092 sonu - 1093 başı; gün bilinmiyor) | A | 1092-93 | 1092 sonu - 1093 başı; gün bilinmiyor (H. 485 sonları) |
| 237 | `data/kronoloji_cok_once1281_anadolu.js:785` | 1104-01-01 | 497/1104 (kaynak yıl verir) | B | 1104-05 | 1104 (H. 497) (kaynak yıl verir) |
| 238 | `data/kronoloji_cok_once1281_anadolu.js:880` | 1110-01-01 | 504/1110-11 (TDV hicrî yılı iki milâdî yıla yayar) | B | 1110-11 | 1110-11 (H. 504) (TDV hicrî yılı iki milâdî yıla yayar) |
| 239 | `data/kronoloji_cok_once1281_anadolu.js:942` | 1112-01-01 | 505-506/1112 (kaynak yıl verir) | B | 1111-12 | 1112 (H. 505-506) (kaynak yıl verir) |
| 240 | `data/kronoloji_cok_once1281_anadolu.js:958` | 1116-01-01 | 510/1116 (TDV yıl verir) | B | 1116-17 | 1116 (H. 510) (TDV yıl verir) |
| 241 | `data/kronoloji_cok_once1281_anadolu.js:974` | 1118-01-01 | 511/1118 (TDV yıl verir) | B | 1117-18 | 1118 (H. 511) (TDV yıl verir) |
| 242 | `data/kronoloji_cok_once1281_anadolu.js:1085` | 1121-01-01 | 515/1121 (TDV yıl verir) | B | 1121-22 | 1121 (H. 515) (TDV yıl verir) |
| 243 | `data/kronoloji_cok_once1281_anadolu.js:1146` | 1124-01-01 | 518/1124 (TDV yıl verir) | B | 1124-25 | 1124 (H. 518) (TDV yıl verir) |
| 244 | `data/kronoloji_cok_once1281_anadolu.js:1270` | 1132-01-01 | 526/1132 (TDV yıl verir) | B | 1132-33 | 1132 (H. 526) (TDV yıl verir) |
| 245 | `data/kronoloji_cok_once1281_anadolu.js:1285` | 1134-01-01 | 528/1134 (TDV yıl verir) | B | 1134-35 | 1134 (H. 528) (TDV yıl verir) |
| 246 | `data/kronoloji_cok_once1281_anadolu.js:1300` | 1134-01-01 | 528/1134 (TDV yıl verir) | B | 1134-35 | 1134 (H. 528) (TDV yıl verir) |
| 247 | `data/kronoloji_cok_once1281_anadolu.js:1316` | 1135-01-01 | 529/1135 (TDV yıl verir) | B | 1135-36 | 1135 (H. 529) (TDV yıl verir) |
| 248 | `data/kronoloji_cok_once1281_anadolu.js:1347` | 1143-01-01 | 538/1143 (TDV yıl verir) | B | 1143-44 | 1143 (H. 538) (TDV yıl verir) |
| 249 | `data/kronoloji_cok_once1281_anadolu.js:1363` | 1144-01-01 | 538/1144 (TDV yıl verir) | B | 1143-44 | 1144 (H. 538) (TDV yıl verir) |
| 250 | `data/kronoloji_cok_once1281_anadolu.js:1411` | 1154-01-01 | 548/1153-54 (TDV hicrî yılı iki milâdî yıla yayar) | B | 1153-54 | 1153-54 (H. 548) (TDV hicrî yılı iki milâdî yıla yayar) |
| 251 | `data/kronoloji_cok_once1281_anadolu.js:1581` | 1168-01-01 | 563/1168 (TDV yıl verir) | B | 1168-69 | 1168 (H. 563) (TDV yıl verir) |
| 252 | `data/kronoloji_cok_once1281_anadolu.js:1596` | 1172-01-01 | 567/1172 (TDV yıl verir) | B | 1172-73 | 1172 (H. 567) (TDV yıl verir) |
| 253 | `data/kronoloji_cok_once1281_anadolu.js:1627` | 1183-01-01 | 579/1183 (TDV yıl verir) | B | 1183-84 | 1183 (H. 579) (TDV yıl verir) |
| 254 | `data/kronoloji_cok_once1281_anadolu.js:1642` | 1184-01-01 | 580/1184-85 (TDV hicrî yılı iki milâdî yıla yayar) | B | 1184-85 | 1184-85 (H. 580) (TDV hicrî yılı iki milâdî yıla yayar) |
| 255 | `data/kronoloji_cok_once1281_anadolu.js:1847` | 1207-01-01 | 603/1207 (TDV yıl verir) | B | 1207-08 | 1207 (H. 603) (TDV yıl verir) |
| 256 | `data/kronoloji_cok_once1281_anadolu.js:1879` | 1214-01-01 | 611/1214 (TDV yıl verir) | B | 1214-15 | 1214 (H. 611) (TDV yıl verir) |
| 257 | `data/kronoloji_cok_once1281_anadolu.js:2016` | 1220-01-01 | 616/1219-20 (TDV hicrî yılı iki milâdî yıla yayar) | B | 1219-20 | 1219-20 (H. 616) (TDV hicrî yılı iki milâdî yıla yayar) |
| 258 | `data/kronoloji_cok_once1281_anadolu.js:2218` | 1239-01-01 | 636/1239 (TDV yıl verir) | B | 1239-40 | 1239 (H. 636) (TDV yıl verir) |
| 259 | `data/kronoloji_cok_once1281_anadolu.js:2324` | 1249-01-01 | 647/1249 (TDV yıl verir) | B | 1249-50 | 1249 (H. 647) (TDV yıl verir) |
| 260 | `data/kronoloji_cok_once1281_anadolu.js:2387` | 1256-01-01 | 654/1256 (TDV yıl verir) | B | 1256-57 | 1256 (H. 654) (TDV yıl verir) |
| 261 | `data/kronoloji_cok_once1281_anadolu.js:2403` | 1259-01-01 | 657/1259 (TDV yıl verir) | B | 1259-60 | 1259 (H. 657) (TDV yıl verir) |
| 262 | `data/kronoloji_cok_once1281_anadolu.js:2464` | 1260-01-01 | 658/1260 (TDV yıl verir) | B | 1260-61 | 1260 (H. 658) (TDV yıl verir) |
| 263 | `data/kronoloji_cok_once1281_anadolu.js:2479` | 1261-01-01 | 659/1261 (TDV yıl verir) | B | 1261-62 | 1261 (H. 659) (TDV yıl verir) |
| 264 | `data/kronoloji_cok_once1281_anadolu.js:2603` | 1266-01-01 | 664/1266 (TDV yıl verir) | B | 1266-67 | 1266 (H. 664) (TDV yıl verir) |
| 265 | `data/kronoloji_cok_once1281_anadolu.js:2650` | 1276-01-01 | 675/1276 (TDV yıl verir) | B | 1276-77 | 1276 (H. 675) (TDV yıl verir) |
| 266 | `data/kronoloji_cok_once1281_avrupa.js:57` | 1053-01-01 | 445/1053 (kaynak yalnız yıl verir) | B | 1053-54 | 1053 (H. 445) (kaynak yalnız yıl verir) |
| 267 | `data/kronoloji_cok_once1281_ortadogu.js:15` | 1002-01-01 | 392 / 1002 (TDV yıl verir) | B | 1002-03 | 1002 (H. 392) (TDV yıl verir) |
| 268 | `data/kronoloji_cok_once1281_ortadogu.js:16` | 1010-01-01 | 401 / 1010-11 (TDV yıl verir) | B | 1011-12 | 1010-11 (H. 401) (TDV yıl verir) |
| 269 | `data/kronoloji_cok_once1281_ortadogu.js:21` | 1025-01-01 | 416 / 1025 (TDV yıl verir) | B | 1025-26 | 1025 (H. 416) (TDV yıl verir) |
| 270 | `data/kronoloji_cok_once1281_ortadogu.js:23` | 1029-01-01 | Rebîülâhir 420 / Mayıs 1029 (gün bilinmiyor) | B | 1029-30 | Mayıs 1029 (H. Rebîülâhir 420) (gün bilinmiyor) |
| 271 | `data/kronoloji_cok_once1281_ortadogu.js:24` | 1030-01-01 | 421 / 1030 (TDV yıl verir) | B | 1030-31 | 1030 (H. 421) (TDV yıl verir) |
| 272 | `data/kronoloji_cok_once1281_ortadogu.js:25` | 1030-01-01 | Şâban 421 / Ağustos 1030 (gün bilinmiyor) | B | 1030-31 | Ağustos 1030 (H. Şâban 421) (gün bilinmiyor) |
| 273 | `data/kronoloji_cok_once1281_ortadogu.js:26` | 1036-01-01 | 427 / 1036 (TDV yıl verir) | B | 1036-37 | 1036 (H. 427) (TDV yıl verir) |
| 274 | `data/kronoloji_cok_once1281_ortadogu.js:27` | 1038-01-01 | Şâban 429 / Mayıs 1038 (gün bilinmiyor) | B | 1038-39 | Mayıs 1038 (H. Şâban 429) (gün bilinmiyor) |
| 275 | `data/kronoloji_cok_once1281_ortadogu.js:28` | 1042-01-01 | 433 (1042) (TDV yıl verir) | A | 1042-43 | 1042 (H. 433) (TDV yıl verir) |
| 276 | `data/kronoloji_cok_once1281_ortadogu.js:45` | 1065-04-20 | 11 Cemâziyelevvel 457 / 20 Nisan 1065 | B | 1065-66 | 20 Nisan 1065 (H. 11 Cemâziyelevvel 457) |
| 277 | `data/kronoloji_cok_once1281_ortadogu.js:51` | 1070-07-31 | 19 Şevval 462 / 31 Temmuz 1070 | B | 1070-71 | 31 Temmuz 1070 (H. 19 Şevval 462) |
| 278 | `data/kronoloji_cok_once1281_ortadogu.js:52` | 1075-01-01 | 468 (1075) (TDV yıl verir); Bedr el-Cemâlî'nin gelişi 466 (1074) | A | 1076-77 | 1075 (H. 468) (TDV yıl verir); Bedr el-Cemâlî'nin gelişi 466 (1074) |
| 279 | `data/kronoloji_cok_once1281_ortadogu.js:53` | 1075-09-24 | 10 Safer 468 / 24 Eylül 1075 | B | 1076-77 | 24 Eylül 1075 (H. 10 Safer 468) |
| 280 | `data/kronoloji_cok_once1281_ortadogu.js:55` | 1079-01-01 | Zilkade 471 / Mayıs 1079 (gün bilinmiyor) | B | 1078-79 | Mayıs 1079 (H. Zilkade 471) (gün bilinmiyor) |
| 281 | `data/kronoloji_cok_once1281_ortadogu.js:57` | 1084-01-01 | 477 / 1084 (TDV yıl verir) | B | 1084-85 | 1084 (H. 477) (TDV yıl verir) |
| 282 | `data/kronoloji_cok_once1281_ortadogu.js:61` | 1086-06-04 | 18 Safer 479 / 4 Haziran 1086 | B | 1086-87 | 4 Haziran 1086 (H. 18 Safer 479) |
| 283 | `data/kronoloji_cok_once1281_ortadogu.js:62` | 1086-07-11 | 26 Rebîülevvel 479 / 11 Temmuz 1086 | B | 1086-87 | 11 Temmuz 1086 (H. 26 Rebîülevvel 479) |
| 284 | `data/kronoloji_cok_once1281_ortadogu.js:63` | 1086-12-03 | 23 Şâban 479 / 3 Aralık 1086 | B | 1086-87 | 3 Aralık 1086 (H. 23 Şâban 479) |
| 285 | `data/kronoloji_cok_once1281_ortadogu.js:66` | 1090-01-01 | 483 (1090) (TDV yıl verir) | A | 1090-91 | 1090 (H. 483) (TDV yıl verir) |
| 286 | `data/kronoloji_cok_once1281_ortadogu.js:69` | 1094-01-01 | 487 (1094) (TDV yıl verir) | A | 1094-95 | 1094 (H. 487) (TDV yıl verir) |
| 287 | `data/kronoloji_cok_once1281_ortadogu.js:70` | 1094-05-27 | 9 Cemâziyelevvel 487 / 27 Mayıs 1094 | B | 1094-95 | 27 Mayıs 1094 (H. 9 Cemâziyelevvel 487) |
| 288 | `data/kronoloji_cok_once1281_ortadogu.js:71` | 1095-02-25 | 16 Safer 488 / 25 Şubat 1095 | B | 1095-96 | 25 Şubat 1095 (H. 16 Safer 488) |
| 289 | `data/kronoloji_cok_once1281_ortadogu.js:72` | 1098-01-01 | Şâban 491 / Temmuz 1098 (gün bilinmiyor) | B | 1098-99 | Temmuz 1098 (H. Şâban 491) (gün bilinmiyor) |
| 290 | `data/kronoloji_cok_once1281_ortadogu.js:75` | 1102-01-01 | 495 (1102) (TDV yıl verir) | A | 1102-03 | 1102 (H. 495) (TDV yıl verir) |
| 291 | `data/kronoloji_cok_once1281_ortadogu.js:79` | 1108-01-01 | 501 (1108) (TDV yıl verir) | A | 1108-09 | 1108 (H. 501) (TDV yıl verir) |
| 292 | `data/kronoloji_cok_once1281_ortadogu.js:80` | 1108-01-01 | 501 (1108) (TDV yıl verir) | A | 1108-09 | 1108 (H. 501) (TDV yıl verir) |
| 293 | `data/kronoloji_cok_once1281_ortadogu.js:84` | 1111-01-01 | 505 (1111) (TDV yıl verir) | A | 1111-12 | 1111 (H. 505) (TDV yıl verir) |
| 294 | `data/kronoloji_cok_once1281_ortadogu.js:85` | 1113-01-01 | 507 (1113) (TDV yıl verir) | A | 1113-14 | 1113 (H. 507) (TDV yıl verir) |
| 295 | `data/kronoloji_cok_once1281_ortadogu.js:86` | 1113-06-28 | 11 Muharrem 507 / 28 Haziran 1113 | B | 1113-14 | 28 Haziran 1113 (H. 11 Muharrem 507) |
| 296 | `data/kronoloji_cok_once1281_ortadogu.js:89` | 1119-06-28 | 17 Rebîülevvel 513 / 28 Haziran 1119 | B | 1119-20 | 28 Haziran 1119 (H. 17 Rebîülevvel 513) |
| 297 | `data/kronoloji_cok_once1281_ortadogu.js:91` | 1123-01-01 | 517 / 1123 (TDV yıl verir) | B | 1123-24 | 1123 (H. 517) (TDV yıl verir) |
| 298 | `data/kronoloji_cok_once1281_ortadogu.js:94` | 1128-01-01 | 522 (1128) (TDV yıl verir) | A | 1128-29 | 1128 (H. 522) (TDV yıl verir) |
| 299 | `data/kronoloji_cok_once1281_ortadogu.js:95` | 1130-01-01 | Şevval 524 / Eylül 1130 (gün bilinmiyor) | B | 1130-31 | Eylül 1130 (H. Şevval 524) (gün bilinmiyor) |
| 300 | `data/kronoloji_cok_once1281_ortadogu.js:96` | 1133-01-01 | Şevval 527 / Ağustos 1133 (gün bilinmiyor) | B | 1133-34 | Ağustos 1133 (H. Şevval 527) (gün bilinmiyor) |
| 301 | `data/kronoloji_cok_once1281_ortadogu.js:99` | 1137-01-01 | 531 (1137) (TDV yıl verir) | A | 1137-38 | 1137 (H. 531) (TDV yıl verir) |
| 302 | `data/kronoloji_cok_once1281_ortadogu.js:100` | 1138-01-01 | Ramazan 532 / Mayıs 1138 (gün bilinmiyor) | B | 1138-39 | Mayıs 1138 (H. Ramazan 532) (gün bilinmiyor) |
| 303 | `data/kronoloji_cok_once1281_ortadogu.js:107` | 1148-01-01 | 543 (1148) (TDV yıl verir) | A | 1148-49 | 1148 (H. 543) (TDV yıl verir) |
| 304 | `data/kronoloji_cok_once1281_ortadogu.js:109` | 1150-01-01 | Zilhicce 544 / Nisan 1150 (gün bilinmiyor) | B | 1149-50 | Nisan 1150 (H. Zilhicce 544) (gün bilinmiyor) |
| 305 | `data/kronoloji_cok_once1281_ortadogu.js:120` | 1169-01-18 | 17 Rebîülâhir 564 / 18 Ocak 1169 | B | 1169-70 | 18 Ocak 1169 (H. 17 Rebîülâhir 564) |
| 306 | `data/kronoloji_cok_once1281_ortadogu.js:123` | 1174-01-01 | 569 / 1174 (TDV yıl verir) | B | 1174-75 | 1174 (H. 569) (TDV yıl verir) |
| 307 | `data/kronoloji_cok_once1281_ortadogu.js:132` | 1183-06-11 | 17 Safer 579 / 11 Haziran 1183 | B | 1183-84 | 11 Haziran 1183 (H. 17 Safer 579) |
| 308 | `data/kronoloji_cok_once1281_ortadogu.js:134` | 1187-07-04 | 24-25 Rebîülâhir 583 / 3-4 Temmuz 1187 | B | 1187-88 | 3-4 Temmuz 1187 (H. 24-25 Rebîülâhir 583) |
| 309 | `data/kronoloji_cok_once1281_ortadogu.js:135` | 1187-10-02 | 27 Receb 583 / 2 Ekim 1187 | B | 1187-88 | 2 Ekim 1187 (H. 27 Receb 583) |
| 310 | `data/kronoloji_cok_once1281_ortadogu.js:138` | 1192-09-01 | 21 Şâban 588 / 1 Eylül 1192 | B | 1192-93 | 1 Eylül 1192 (H. 21 Şâban 588) |
| 311 | `data/kronoloji_cok_once1281_ortadogu.js:140` | 1193-03-04 | 27 Safer 589 / 4 Mart 1193 | B | 1193-94 | 4 Mart 1193 (H. 27 Safer 589) |
| 312 | `data/kronoloji_cok_once1281_ortadogu.js:141` | 1195-01-01 | 591 / 1195 (TDV yıl verir) | B | 1195-96 | 1195 (H. 591) (TDV yıl verir) |
| 313 | `data/kronoloji_cok_once1281_ortadogu.js:149` | 1216-01-01 | 613 (1216) (TDV yıl verir) | A | 1216-17 | 1216 (H. 613) (TDV yıl verir) |
| 314 | `data/kronoloji_cok_once1281_ortadogu.js:150` | 1218-01-01 | 615 / 1218 (TDV yıl verir) | B | 1218-19 | 1218 (H. 615) (TDV yıl verir) |
| 315 | `data/kronoloji_cok_once1281_ortadogu.js:156` | 1225-01-01 | 622 / 1225 (TDV yıl verir) | B | 1225-26 | 1225 (H. 622) (TDV yıl verir) |
| 316 | `data/kronoloji_cok_once1281_ortadogu.js:163` | 1237-01-01 | 634 (1237) (TDV yıl verir) | A | 1237-38 | 1237 (H. 634) (TDV yıl verir) |
| 317 | `data/kronoloji_cok_once1281_ortadogu.js:166` | 1244-10-20 | 16 Cemâziyelevvel 642 / 20 Ekim 1244 | B | 1244-45 | 20 Ekim 1244 (H. 16 Cemâziyelevvel 642) |
| 318 | `data/kronoloji_cok_once1281_ortadogu.js:168` | 1248-01-01 | 646 (1248) (TDV yıl verir) | A | 1248-49 | 1248 (H. 646) (TDV yıl verir) |
| 319 | `data/kronoloji_cok_once1281_ortadogu.js:170` | 1250-01-01 | 648 (1250) (TDV yıl verir) | A | 1250-51 | 1250 (H. 648) (TDV yıl verir) |
| 320 | `data/kronoloji_cok_once1281_ortadogu.js:178` | 1260-01-01 | Rebîülevvel 658 / Mart 1260 (gün bilinmiyor) | B | 1260-61 | Mart 1260 (H. Rebîülevvel 658) (gün bilinmiyor) |
| 321 | `data/kronoloji_cok_once1281_ortadogu.js:179` | 1260-01-01 | 658 (1260) (TDV yıl verir) — eyyubiler 1259 der | A | 1260-61 | 1260 (H. 658) (TDV yıl verir) — eyyubiler 1259 der |
| 322 | `data/kronoloji_cok_once1281_ortadogu.js:181` | 1260-12-10 | 5 Muharrem 659 / 10 Aralık 1260 | B | 1261-62 | 10 Aralık 1260 (H. 5 Muharrem 659) |
| 323 | `data/kronoloji_cok_once1281_ortadogu.js:182` | 1263-01-01 | 661 (1263) (TDV yıl verir) | A | 1263-64 | 1263 (H. 661) (TDV yıl verir) |
| 324 | `data/kronoloji_cok_once1281_iran.js:9` | 1000-01-01 | 390 h. (1000); gün bilinmiyor | A | 1000-01 | 1000 (H. 390 h.); gün bilinmiyor |
| 325 | `data/kronoloji_cok_once1281_iran.js:10` | 1001-01-01 | 391 h. (1001); gün bilinmiyor | A | 1001-02 | 1001 (H. 391 h.); gün bilinmiyor |
| 326 | `data/kronoloji_cok_once1281_iran.js:11` | 1001-01-01 | 391/1001 (gün bilinmiyor) | B | 1001-02 | 1001 (H. 391) (gün bilinmiyor) |
| 327 | `data/kronoloji_cok_once1281_iran.js:14` | 1007-01-01 | Rebîülevvel 398 / Aralık 1007 (gün bilinmiyor) | B | 1008-09 | Aralık 1007 (H. Rebîülevvel 398) (gün bilinmiyor) |
| 328 | `data/kronoloji_cok_once1281_iran.js:17` | 1012-01-01 | 403 h. (1012-13); gün bilinmiyor | A | 1012-13 | 1012-13 (H. 403 h.); gün bilinmiyor |
| 329 | `data/kronoloji_cok_once1281_iran.js:18` | 1012-01-01 | 402/1012 (gün bilinmiyor) | B | 1012 | 1012 (H. 402) (gün bilinmiyor) |
| 330 | `data/kronoloji_cok_once1281_iran.js:20` | 1017-01-01 | 408 h. (1017); gün bilinmiyor | A | 1017-18 | 1017 (H. 408 h.); gün bilinmiyor |
| 331 | `data/kronoloji_cok_once1281_iran.js:21` | 1018-12-20 | 8 Şâban 409 / 20 Aralık 1018 | B | 1018-19 | 20 Aralık 1018 (H. 8 Şâban 409) |
| 332 | `data/kronoloji_cok_once1281_iran.js:22` | 1023-01-01 | 414/1023-24 (gün bilinmiyor) | B | 1023-24 | 1023-24 (H. 414) (gün bilinmiyor) |
| 333 | `data/kronoloji_cok_once1281_iran.js:23` | 1026-01-01 | 417 h. (1026); gün bilinmiyor | A | 1026-27 | 1026 (H. 417 h.); gün bilinmiyor |
| 334 | `data/kronoloji_cok_once1281_iran.js:24` | 1026-01-08 | 16 Zilkade 416 / 8 Ocak 1026 | B | 1025-26 | 8 Ocak 1026 (H. 16 Zilkade 416) |
| 335 | `data/kronoloji_cok_once1281_iran.js:25` | 1029-01-01 | 420/1029 (gün bilinmiyor) | B | 1029-30 | 1029 (H. 420) (gün bilinmiyor) |
| 336 | `data/kronoloji_cok_once1281_iran.js:26` | 1029-01-01 | 420/1029 (gün bilinmiyor) | B | 1029-30 | 1029 (H. 420) (gün bilinmiyor) |
| 337 | `data/kronoloji_cok_once1281_iran.js:27` | 1029-01-01 | 420/1029 (gün bilinmiyor) | B | 1029-30 | 1029 (H. 420) (gün bilinmiyor) |
| 338 | `data/kronoloji_cok_once1281_iran.js:28` | 1029-01-01 | 420/1029 (gün bilinmiyor) | B | 1029-30 | 1029 (H. 420) (gün bilinmiyor) |
| 339 | `data/kronoloji_cok_once1281_iran.js:29` | 1030-01-01 | 421/1030 (gün bilinmiyor) | B | 1030-31 | 1030 (H. 421) (gün bilinmiyor) |
| 340 | `data/kronoloji_cok_once1281_iran.js:30` | 1030-04-30 | 23 Rebîülâhir 421 / 30 Nisan 1030 | B | 1030-31 | 30 Nisan 1030 (H. 23 Rebîülâhir 421) |
| 341 | `data/kronoloji_cok_once1281_iran.js:31` | 1032-01-01 | Muharrem 424 / Aralık 1032 (gün bilinmiyor) | B | 1033-34 | Aralık 1032 (H. Muharrem 424) (gün bilinmiyor) |
| 342 | `data/kronoloji_cok_once1281_iran.js:32` | 1033-01-01 | 424/1033 (gün bilinmiyor) | B | 1033-34 | 1033 (H. 424) (gün bilinmiyor) |
| 343 | `data/kronoloji_cok_once1281_iran.js:33` | 1035-01-01 | 426 h. (1035); gün bilinmiyor | A | 1035-36 | 1035 (H. 426 h.); gün bilinmiyor |
| 344 | `data/kronoloji_cok_once1281_iran.js:34` | 1035-01-01 | 426/1035 (gün bilinmiyor) | B | 1035-36 | 1035 (H. 426) (gün bilinmiyor) |
| 345 | `data/kronoloji_cok_once1281_iran.js:35` | 1036-01-01 | Safer 428 / Aralık 1036 (gün bilinmiyor) | B | 1037-38 | Aralık 1036 (H. Safer 428) (gün bilinmiyor) |
| 346 | `data/kronoloji_cok_once1281_iran.js:36` | 1038-01-01 | Cemâziyelevvel 429 / Şubat 1038 (gün bilinmiyor) | B | 1038-39 | Şubat 1038 (H. Cemâziyelevvel 429) (gün bilinmiyor) |
| 347 | `data/kronoloji_cok_once1281_iran.js:37` | 1038-01-01 | 430/1038-39 (gün bilinmiyor) | B | 1039-40 | 1038-39 (H. 430) (gün bilinmiyor) |
| 348 | `data/kronoloji_cok_once1281_iran.js:38` | 1041-01-01 | Muharrem 433 / Eylül 1041 (gün bilinmiyor) | B | 1042-43 | Eylül 1041 (H. Muharrem 433) (gün bilinmiyor) |
| 349 | `data/kronoloji_cok_once1281_iran.js:39` | 1041-01-01 | 432/1041 (gün bilinmiyor) | B | 1041-42 | 1041 (H. 432) (gün bilinmiyor) |
| 350 | `data/kronoloji_cok_once1281_iran.js:40` | 1042-01-01 | 434/1042-43 (gün bilinmiyor) | B | 1043-44 | 1042-43 (H. 434) (gün bilinmiyor) |
| 351 | `data/kronoloji_cok_once1281_iran.js:41` | 1046-01-01 | Ramazan 437 / Nisan 1046 (gün bilinmiyor) | B | 1045-46 | Nisan 1046 (H. Ramazan 437) (gün bilinmiyor) |
| 352 | `data/kronoloji_cok_once1281_iran.js:42` | 1047-01-01 | 439/1047 (gün bilinmiyor) | B | 1047-48 | 1047 (H. 439) (gün bilinmiyor) |
| 353 | `data/kronoloji_cok_once1281_iran.js:45` | 1049-01-01 | 441/1049 (gün bilinmiyor; 435/1043-44 de olabilir) | B | 1049-50 | 1049 (H. 441) (gün bilinmiyor; 435/1043-44 de olabilir) |
| 354 | `data/kronoloji_cok_once1281_iran.js:46` | 1051-01-01 | 443/1051 (gün bilinmiyor) | B | 1051-52 | 1051 (H. 443) (gün bilinmiyor) |
| 355 | `data/kronoloji_cok_once1281_iran.js:47` | 1054-01-01 | 446/1054 (gün bilinmiyor) | B | 1054-55 | 1054 (H. 446) (gün bilinmiyor) |
| 356 | `data/kronoloji_cok_once1281_iran.js:48` | 1056-01-01 | 448 h. (1056); gün bilinmiyor | A | 1056-57 | 1056 (H. 448 h.); gün bilinmiyor |
| 357 | `data/kronoloji_cok_once1281_iran.js:50` | 1059-01-01 | 451/1059 (gün bilinmiyor) | B | 1059-60 | 1059 (H. 451) (gün bilinmiyor) |
| 358 | `data/kronoloji_cok_once1281_iran.js:51` | 1059-01-01 | 451 h. (1059); gün bilinmiyor | A | 1059-60 | 1059 (H. 451 h.); gün bilinmiyor |
| 359 | `data/kronoloji_cok_once1281_iran.js:52` | 1060-01-01 | 452/1060 (gün bilinmiyor) | B | 1060-61 | 1060 (H. 452) (gün bilinmiyor) |
| 360 | `data/kronoloji_cok_once1281_iran.js:53` | 1062-01-01 | 454/1062 (gün bilinmiyor) | B | 1062-63 | 1062 (H. 454) (gün bilinmiyor) |
| 361 | `data/kronoloji_cok_once1281_iran.js:55` | 1066-01-01 | 458 h. (1066); gün bilinmiyor | A | 1066-67 | 1066 (H. 458 h.); gün bilinmiyor |
| 362 | `data/kronoloji_cok_once1281_iran.js:56` | 1067-01-01 | 459/1067 (gün bilinmiyor) | B | 1067-68 | 1067 (H. 459) (gün bilinmiyor) |
| 363 | `data/kronoloji_cok_once1281_iran.js:58` | 1072-01-01 | Rebîülâhir 465 / Aralık 1072 (gün bilinmiyor) | B | 1073-74 | Aralık 1072 (H. Rebîülâhir 465) (gün bilinmiyor) |
| 364 | `data/kronoloji_cok_once1281_iran.js:60` | 1073-01-01 | Şâban 465 / Nisan 1073 (gün bilinmiyor) | B | 1073-74 | Nisan 1073 (H. Şâban 465) (gün bilinmiyor) |
| 365 | `data/kronoloji_cok_once1281_iran.js:61` | 1074-01-01 | 466 h. (1074); gün bilinmiyor | A | 1074-75 | 1074 (H. 466 h.); gün bilinmiyor |
| 366 | `data/kronoloji_cok_once1281_iran.js:63` | 1079-01-01 | 472 başı / Temmuz 1079 (gün bilinmiyor) | B | 1079-80 | Temmuz 1079 (H. 472 başı) (gün bilinmiyor) |
| 367 | `data/kronoloji_cok_once1281_iran.js:64` | 1091-01-01 | 484/1091 (gün bilinmiyor) | B | 1091-92 | 1091 (H. 484) (gün bilinmiyor) |
| 368 | `data/kronoloji_cok_once1281_iran.js:67` | 1094-01-01 | 487/1094 (gün bilinmiyor) | B | 1094-95 | 1094 (H. 487) (gün bilinmiyor) |
| 369 | `data/kronoloji_cok_once1281_iran.js:69` | 1095-06-25 | 18 Cemâziyelâhir 488 / 25 Haziran 1095 | B | 1095-96 | 25 Haziran 1095 (H. 18 Cemâziyelâhir 488) |
| 370 | `data/kronoloji_cok_once1281_iran.js:71` | 1101-01-01 | 495/1101-1102 (gün bilinmiyor) | B | 1102-03 | 1101-1102 (H. 495) (gün bilinmiyor) |
| 371 | `data/kronoloji_cok_once1281_iran.js:72` | 1102-05-22 | 2 Şâban 495 / 22 Mayıs 1102 | B | 1102-03 | 22 Mayıs 1102 (H. 2 Şâban 495) |
| 372 | `data/kronoloji_cok_once1281_iran.js:73` | 1104-01-01 | Rebîülâhir 498 / Aralık 1104 (gün bilinmiyor) | B | 1105-06 | Aralık 1104 (H. Rebîülâhir 498) (gün bilinmiyor) |
| 373 | `data/kronoloji_cok_once1281_iran.js:74` | 1104-01-01 | Safer 498 / Ekim-Kasım 1104 (gün bilinmiyor) | B | 1105-06 | Ekim-Kasım 1104 (H. Safer 498) (gün bilinmiyor) |
| 374 | `data/kronoloji_cok_once1281_iran.js:75` | 1117-01-01 | 511/1117 (gün bilinmiyor) | B | 1117-18 | 1117 (H. 511) (gün bilinmiyor) |
| 375 | `data/kronoloji_cok_once1281_iran.js:76` | 1117-01-01 | 511 h. (1117); gün bilinmiyor | A | 1117-18 | 1117 (H. 511 h.); gün bilinmiyor |
| 376 | `data/kronoloji_cok_once1281_iran.js:77` | 1117-07-13 | 11 Rebîülevvel 511 / 13 Temmuz 1117 | B | 1117-18 | 13 Temmuz 1117 (H. 11 Rebîülevvel 511) |
| 377 | `data/kronoloji_cok_once1281_iran.js:81` | 1121-01-01 | 515/1121 (gün bilinmiyor) | B | 1121-22 | 1121 (H. 515) (gün bilinmiyor) |
| 378 | `data/kronoloji_cok_once1281_iran.js:83` | 1130-01-01 | 524 h. (1130); gün bilinmiyor | A | 1130-31 | 1130 (H. 524 h.); gün bilinmiyor |
| 379 | `data/kronoloji_cok_once1281_iran.js:87` | 1133-01-01 | 527/1133 (gün bilinmiyor) | B | 1133-34 | 1133 (H. 527) (gün bilinmiyor) |
| 380 | `data/kronoloji_cok_once1281_iran.js:88` | 1134-01-01 | Muharrem 529 / Kasım 1134 (gün bilinmiyor) | B | 1135-36 | Kasım 1134 (H. Muharrem 529) (gün bilinmiyor) |
| 381 | `data/kronoloji_cok_once1281_iran.js:89` | 1137-01-01 | Ramazan 531 / Haziran 1137 (gün bilinmiyor) | B | 1137-38 | Haziran 1137 (H. Ramazan 531) (gün bilinmiyor) |
| 382 | `data/kronoloji_cok_once1281_iran.js:90` | 1141-09-09 | 5 Safer 536 / 9 Eylül 1141 | B | 1142-43 | 9 Eylül 1141 (H. 5 Safer 536) |
| 383 | `data/kronoloji_cok_once1281_iran.js:91` | 1142-01-01 | Safer 537 / Eylül 1142 (gün bilinmiyor) | B | 1143 | Eylül 1142 (H. Safer 537) (gün bilinmiyor) |
| 384 | `data/kronoloji_cok_once1281_iran.js:92` | 1150-01-01 | 545 h. (1150-51); gün bilinmiyor | A | 1150-51 | 1150-51 (H. 545 h.); gün bilinmiyor |
| 385 | `data/kronoloji_cok_once1281_iran.js:93` | 1152-01-01 | 547 h. (1152); gün bilinmiyor | A | 1152-53 | 1152 (H. 547 h.); gün bilinmiyor |
| 386 | `data/kronoloji_cok_once1281_iran.js:95` | 1153-01-01 | Muharrem 548 / Nisan 1153 (gün bilinmiyor) | B | 1153-54 | Nisan 1153 (H. Muharrem 548) (gün bilinmiyor) |
| 387 | `data/kronoloji_cok_once1281_iran.js:97` | 1158-01-01 | 553 h. (1158); gün bilinmiyor | A | 1158-59 | 1158 (H. 553 h.); gün bilinmiyor |
| 388 | `data/kronoloji_cok_once1281_iran.js:98` | 1158-01-01 | 553/1158 (gün bilinmiyor) | B | 1158-59 | 1158 (H. 553) (gün bilinmiyor) |
| 389 | `data/kronoloji_cok_once1281_iran.js:99` | 1161-01-01 | 556/1161 (gün bilinmiyor) | B | 1161-62 | 1161 (H. 556) (gün bilinmiyor) |
| 390 | `data/kronoloji_cok_once1281_iran.js:101` | 1164-01-01 | 559 h. (1164); gün bilinmiyor | A | 1164-65 | 1164 (H. 559 h.); gün bilinmiyor |
| 391 | `data/kronoloji_cok_once1281_iran.js:102` | 1164-08-08 | 17 Ramazan 559 / 8 Ağustos 1164 | B | 1164-65 | 8 Ağustos 1164 (H. 17 Ramazan 559) |
| 392 | `data/kronoloji_cok_once1281_iran.js:103` | 1168-01-01 | 563/1167-68 (gün bilinmiyor) | B | 1168-69 | 1167-68 (H. 563) (gün bilinmiyor) |
| 393 | `data/kronoloji_cok_once1281_iran.js:104` | 1169-01-01 | 564/1169 (gün bilinmiyor) | B | 1169-70 | 1169 (H. 564) (gün bilinmiyor) |
| 394 | `data/kronoloji_cok_once1281_iran.js:105` | 1170-01-01 | 565/1170 (gün bilinmiyor) | B | 1170-71 | 1170 (H. 565) (gün bilinmiyor) |
| 395 | `data/kronoloji_cok_once1281_iran.js:106` | 1173-01-01 | 568 h. (1173); gün bilinmiyor | A | 1173-74 | 1173 (H. 568 h.); gün bilinmiyor |
| 396 | `data/kronoloji_cok_once1281_iran.js:108` | 1175-01-01 | 571 h. (1175-76); gün bilinmiyor | A | 1175-76 | 1175-76 (H. 571 h.); gün bilinmiyor |
| 397 | `data/kronoloji_cok_once1281_iran.js:109` | 1175-01-01 | 571/1175 (gün bilinmiyor) | B | 1175-76 | 1175 (H. 571) (gün bilinmiyor) |
| 398 | `data/kronoloji_cok_once1281_iran.js:110` | 1177-01-01 | Receb 572 / Ocak 1177 (gün bilinmiyor) | B | 1176-77 | Ocak 1177 (H. Receb 572) (gün bilinmiyor) |
| 399 | `data/kronoloji_cok_once1281_iran.js:111` | 1179-01-01 | 575/1179 (gün bilinmiyor) | B | 1179-80 | 1179 (H. 575) (gün bilinmiyor) |
| 400 | `data/kronoloji_cok_once1281_iran.js:113` | 1185-01-01 | tahminî 581/1185 | B | 1185-86 | 1185 (H. tahminî 581) |
| 401 | `data/kronoloji_cok_once1281_iran.js:115` | 1186-01-01 | Zilhicce 581 / Mart 1186 (gün bilinmiyor) | B | 1185-86 | Mart 1186 (H. Zilhicce 581) (gün bilinmiyor) |
| 402 | `data/kronoloji_cok_once1281_iran.js:116` | 1190-01-01 | Şevval 586 / Kasım 1190 (gün bilinmiyor) | B | 1190-91 | Kasım 1190 (H. Şevval 586) (gün bilinmiyor) |
| 403 | `data/kronoloji_cok_once1281_iran.js:118` | 1191-01-01 | Şâban 587 / Eylül 1191 (gün bilinmiyor) | B | 1191-92 | Eylül 1191 (H. Şâban 587) (gün bilinmiyor) |
| 404 | `data/kronoloji_cok_once1281_iran.js:121` | 1198-01-01 | 595/1198-99 (gün bilinmiyor) | B | 1199-00 | 1198-99 (H. 595) (gün bilinmiyor) |
| 405 | `data/kronoloji_cok_once1281_iran.js:122` | 1200-08-03 | 20 Şevval 596 / 3 Ağustos 1200 | B | 1200-01 | 3 Ağustos 1200 (H. 20 Şevval 596) |
| 406 | `data/kronoloji_cok_once1281_iran.js:125` | 1204-01-01 | 600/1204 (gün bilinmiyor) | B | 1204-05 | 1204 (H. 600) (gün bilinmiyor) |
| 407 | `data/kronoloji_cok_once1281_iran.js:126` | 1205-01-01 | Cemâziyelevvel 601 / Ocak 1205 (gün bilinmiyor) | B | 1205-06 | Ocak 1205 (H. Cemâziyelevvel 601) (gün bilinmiyor) |
| 408 | `data/kronoloji_cok_once1281_iran.js:127` | 1205-01-01 | Receb 601 / Mart 1205 (gün bilinmiyor) | B | 1205-06 | Mart 1205 (H. Receb 601) (gün bilinmiyor) |
| 409 | `data/kronoloji_cok_once1281_iran.js:128` | 1205-01-01 | 602/1205-1206 (gün bilinmiyor) | B | 1206-07 | 1205-1206 (H. 602) (gün bilinmiyor) |
| 410 | `data/kronoloji_cok_once1281_iran.js:130` | 1209-01-09 | 1 Receb 605 / 9 Ocak 1209 | B | 1208-09 | 9 Ocak 1209 (H. 1 Receb 605) |
| 411 | `data/kronoloji_cok_once1281_iran.js:131` | 1210-01-01 | 607/1210 (gün bilinmiyor) | B | 1210-11 | 1210 (H. 607) (gün bilinmiyor) |
| 412 | `data/kronoloji_cok_once1281_iran.js:132` | 1213-01-01 | 610/1213 (gün bilinmiyor) | B | 1213-14 | 1213 (H. 610) (gün bilinmiyor) |
| 413 | `data/kronoloji_cok_once1281_iran.js:133` | 1215-01-01 | 612 h. (1215); gün bilinmiyor | A | 1215-16 | 1215 (H. 612 h.); gün bilinmiyor |
| 414 | `data/kronoloji_cok_once1281_iran.js:134` | 1217-01-01 | 614/1217 (gün bilinmiyor) | B | 1217-18 | 1217 (H. 614) (gün bilinmiyor) |
| 415 | `data/kronoloji_cok_once1281_iran.js:136` | 1219-01-01 | 616 h. (1219); gün bilinmiyor | A | 1219-20 | 1219 (H. 616 h.); gün bilinmiyor |
| 416 | `data/kronoloji_cok_once1281_iran.js:139` | 1221-01-01 | Safer 618 / Nisan 1221 (gün bilinmiyor) | B | 1221-22 | Nisan 1221 (H. Safer 618) (gün bilinmiyor) |
| 417 | `data/kronoloji_cok_once1281_iran.js:142` | 1221-11-26 | 9 Şevval 618 / 26 Kasım 1221 | B | 1221-22 | 26 Kasım 1221 (H. 9 Şevval 618) |
| 418 | `data/kronoloji_cok_once1281_iran.js:145` | 1224-01-01 | 621/1224 (gün bilinmiyor) | B | 1224-25 | 1224 (H. 621) (gün bilinmiyor) |
| 419 | `data/kronoloji_cok_once1281_iran.js:146` | 1224-01-01 | 621/1224 (gün bilinmiyor) | B | 1224-25 | 1224 (H. 621) (gün bilinmiyor) |
| 420 | `data/kronoloji_cok_once1281_iran.js:150` | 1229-01-01 | 626/1229 (gün bilinmiyor) | B | 1229-30 | 1229 (H. 626) (gün bilinmiyor) |
| 421 | `data/kronoloji_cok_once1281_iran.js:153` | 1230-01-01 | 627/1230 (gün bilinmiyor) | B | 1230-31 | 1230 (H. 627) (gün bilinmiyor) |
| 422 | `data/kronoloji_cok_once1281_iran.js:157` | 1241-01-01 | 639 / 1241-42 (gün/ay bilinmiyor) | B | 1241-42 | 1241-42 (H. 639) (gün/ay bilinmiyor) |
| 423 | `data/kronoloji_cok_once1281_iran.js:163` | 1252-01-01 | 650/1252 (gün bilinmiyor) | B | 1252-53 | 1252 (H. 650) (gün bilinmiyor) |
| 424 | `data/kronoloji_cok_once1281_iran.js:164` | 1255-01-01 | 653/1255 (gün bilinmiyor) | B | 1255-56 | 1255 (H. 653) (gün bilinmiyor) |
| 425 | `data/kronoloji_cok_once1281_iran.js:166` | 1258-01-01 | 656/1258 (gün bilinmiyor) | B | 1258-59 | 1258 (H. 656) (gün bilinmiyor) |
| 426 | `data/kronoloji_cok_once1281_iran.js:169` | 1260-01-01 | 658/1260 (gün bilinmiyor) | B | 1260-61 | 1260 (H. 658) (gün bilinmiyor) |
| 427 | `data/kronoloji_cok_once1281_iran.js:170` | 1260-01-01 | 658 / 1260 (gün/ay bilinmiyor) | B | 1260-61 | 1260 (H. 658) (gün/ay bilinmiyor) |
| 428 | `data/kronoloji_cok_once1281_iran.js:171` | 1263-01-01 | 662/1263-64 (gün bilinmiyor) | B | 1264-65 | 1263-64 (H. 662) (gün bilinmiyor) |
| 429 | `data/kronoloji_cok_once1281_iran.js:172` | 1263-01-01 | Rebîülevvel 661 / Ocak 1263 (gün bilinmiyor) | B | 1263-64 | Ocak 1263 (H. Rebîülevvel 661) (gün bilinmiyor) |
| 430 | `data/kronoloji_cok_once1281_iran.js:176` | 1272-01-01 | 671/1272-73 (gün bilinmiyor) | B | 1273 | 1272-73 (H. 671) (gün bilinmiyor) |
| 431 | `data/kronoloji_cok_once1281_iran.js:177` | 1274-01-01 | 672/1274 (gün bilinmiyor) | B | 1273-74 | 1274 (H. 672) (gün bilinmiyor) |
| 432 | `data/kronoloji_cok_once1281_iran.js:178` | 1278-01-01 | 677/1278-79 (gün bilinmiyor) | B | 1278-79 | 1278-79 (H. 677) (gün bilinmiyor) |
| 433 | `data/kronoloji_cok_once1281_hint_amerika.js:39` | 1006-01-01 | 396/1006 (TDV yıl verir) | B | 1006-07 | 1006 (H. 396) (TDV yıl verir) |
| 434 | `data/kronoloji_cok_once1281_hint_amerika.js:41` | 1010-01-01 | 400/1010 (TDV yıl verir) | B | 1010-11 | 1010 (H. 400) (TDV yıl verir) |
| 435 | `data/kronoloji_cok_once1281_hint_amerika.js:109` | 1221-01-01 | 618-620/1221-1223 (TDV yıl aralığı verir; alt uç) | B | 1221-22 | 1221-1223 (H. 618-620) (TDV yıl aralığı verir; alt uç) |
| 436 | `data/kronoloji_cok_once1281_hint_amerika.js:111` | 1228-01-01 | 626/1228 (TDV yıl verir) | B | 1229-30 | 1228 (H. 626) (TDV yıl verir) |
| 437 | `data/kronoloji_cok_once1281_afrika.js:56` | 1061-01-01 | 453 (1061) — TDV yıl verir | A | 1061-62 | 1061 (H. 453) — TDV yıl verir |
| 438 | `data/kronoloji_cok_once1281_afrika.js:63` | 1073-01-01 | 465 (1072-73) — TDV '1073' verir; gün yok | A | 1073-74 | 1072-73 (H. 465) — TDV '1073' verir; gün yok |
| 439 | `data/kronoloji_cok_once1281_afrika.js:70` | 1077-01-01 | 470 (1077-78) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1078 | 1077-78 (H. 470) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 440 | `data/kronoloji_cok_once1281_afrika.js:84` | 1084-01-01 | 477 (1084) — TDV yıl verir | A | 1084-85 | 1084 (H. 477) — TDV yıl verir |
| 441 | `data/kronoloji_cok_once1281_afrika.js:91` | 1087-01-01 | 480 (1087) — TDV yıl verir | A | 1087-88 | 1087 (H. 480) — TDV yıl verir |
| 442 | `data/kronoloji_cok_once1281_afrika.js:98` | 1139-01-01 | 534 (1139-40) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1140-41 | 1139-40 (H. 534) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 443 | `data/kronoloji_cok_once1281_afrika.js:105` | 1143-01-01 | 537 (1142-43) — TDV '1143' verir | A | 1143 | 1142-43 (H. 537) — TDV '1143' verir |
| 444 | `data/kronoloji_cok_once1281_afrika.js:112` | 1144-01-01 | 538 (1143-44) — TDV '1144' verir | A | 1143-44 | 1143-44 (H. 538) — TDV '1144' verir |
| 445 | `data/kronoloji_cok_once1281_afrika.js:128` | 1130-08-21 | 14 Ramazan 524 / 21 Ağustos 1130 — GÜN kaynaktan | B | 1130-31 | 21 Ağustos 1130 (H. 14 Ramazan 524) — GÜN kaynaktan |
| 446 | `data/kronoloji_cok_once1281_afrika.js:135` | 1160-01-21 | 10 Muharrem 555 / 21 Ocak 1160 — GÜN kaynaktan | B | 1160-61 | 21 Ocak 1160 (H. 10 Muharrem 555) — GÜN kaynaktan |
| 447 | `data/kronoloji_cok_once1281_afrika.js:150` | 1184-01-01 | 580 (1184-85) — TDV '1184' verir | A | 1184-85 | 1184-85 (H. 580) — TDV '1184' verir |
| 448 | `data/kronoloji_cok_once1281_afrika.js:165` | 1187-01-01 | 583 (1187) — TDV yıl verir | A | 1187-88 | 1187 (H. 583) — TDV yıl verir |
| 449 | `data/kronoloji_cok_once1281_afrika.js:179` | 1228-06-29 | 24 Receb 625 / 29 Haziran 1228 — GÜN kaynaktan | B | 1228-29 | 29 Haziran 1228 (H. 24 Receb 625) — GÜN kaynaktan |
| 450 | `data/kronoloji_cok_once1281_afrika.js:189` | 1217-01-01 | 614 (1217-18) — TDV '1217' verir | A | 1217-18 | 1217-18 (H. 614) — TDV '1217' verir |
| 451 | `data/kronoloji_cok_once1281_afrika.js:196` | 1223-01-01 | 620 (1223) — TDV yıl verir | A | 1223-24 | 1223 (H. 620) — TDV yıl verir |
| 452 | `data/kronoloji_cok_once1281_afrika.js:203` | 1262-01-01 | 660 (1261-62) — TDV '1262' verir | A | 1262-63 | 1261-62 (H. 660) — TDV '1262' verir |
| 453 | `data/kronoloji_cok_once1281_afrika.js:210` | 1263-01-01 | 661 (1262-63) — TDV '1263' verir | A | 1263-64 | 1262-63 (H. 661) — TDV '1263' verir |
| 454 | `data/kronoloji_cok_once1281_afrika.js:217` | 1268-01-01 | 666 (1267-68) — TDV '1268' verir | A | 1268-69 | 1267-68 (H. 666) — TDV '1268' verir |
| 455 | `data/kronoloji_cok_once1281_afrika.js:224` | 1271-01-01 | 670 (1271-72) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1272-73 | 1271-72 (H. 670) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 456 | `data/kronoloji_cok_once1281_afrika.js:231` | 1274-01-01 | 673 (1274-75) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1274-75 | 1274-75 (H. 673) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 457 | `data/kronoloji_cok_once1281_afrika.js:240` | 1230-01-01 | 628 (1230-31) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1231-32 | 1230-31 (H. 628) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 458 | `data/kronoloji_cok_once1281_afrika.js:247` | 1233-01-01 | 631 (1233-34) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1234-35 | 1233-34 (H. 631) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 459 | `data/kronoloji_cok_once1281_afrika.js:254` | 1249-01-01 | 647 (1249-50) — TDV '1249' verir | A | 1249-50 | 1249-50 (H. 647) — TDV '1249' verir |
| 460 | `data/kronoloji_cok_once1281_afrika.js:261` | 1277-01-01 | 675 (1276-77) — TDV '1277' verir | A | 1276-77 | 1276-77 (H. 675) — TDV '1277' verir |
| 461 | `data/kronoloji_cok_once1281_afrika.js:268` | 1279-08-13 | 3 Rebîülâhir 678 / 13 Ağustos 1279 — GÜN kaynaktan | B | 1279-80 | 13 Ağustos 1279 (H. 3 Rebîülâhir 678) — GÜN kaynaktan |
| 462 | `data/kronoloji_cok_once1281_afrika.js:277` | 1016-01-01 | 406 (1015-16) — TDV '1016' verir | A | 1015-16 | 1015-16 (H. 406) — TDV '1016' verir |
| 463 | `data/kronoloji_cok_once1281_afrika.js:284` | 1028-01-01 | 419 (1028) — TDV yıl verir | A | 1028-29 | 1028 (H. 419) — TDV yıl verir |
| 464 | `data/kronoloji_cok_once1281_afrika.js:291` | 1049-01-01 | 441/1049 veya 443/1051 — TDV İKİ yıl verir; erken olan yazıldı | B | 1049-50 | 1049 veya 443/1051 (H. 441) — TDV İKİ yıl verir; erken olan yazıldı |
| 465 | `data/kronoloji_cok_once1281_afrika.js:299` | 1052-04-14 | 11 Zilhicce 443 / 14 Nisan 1052 — GÜN kaynaktan | B | 1051-52 | 14 Nisan 1052 (H. 11 Zilhicce 443) — GÜN kaynaktan |
| 466 | `data/kronoloji_cok_once1281_afrika.js:306` | 1062-01-01 | 454 (1062) — TDV yıl verir | A | 1062-63 | 1062 (H. 454) — TDV yıl verir |
| 467 | `data/kronoloji_cok_once1281_afrika.js:313` | 1087-01-01 | 480 (1087) — TDV yıl verir | A | 1087-88 | 1087 (H. 480) — TDV yıl verir |
| 468 | `data/kronoloji_cok_once1281_afrika.js:320` | 1089-01-01 | 481 (1088-89) — TDV '1089' verir | A | 1088-89 | 1088-89 (H. 481) — TDV '1089' verir |
| 469 | `data/kronoloji_cok_once1281_afrika.js:327` | 1135-01-01 | 529 (1134-35) — TDV '1135' verir | A | 1135-36 | 1134-35 (H. 529) — TDV '1135' verir |
| 470 | `data/kronoloji_cok_once1281_afrika.js:334` | 1136-01-01 | 530 (1136) veya 531 (1137) — TDV İKİ yıl verir; erken olan yazıldı | A | 1136-37 | 1136 (H. 530) veya 531 (1137) — TDV İKİ yıl verir; erken olan yazıldı |
| 471 | `data/kronoloji_cok_once1281_afrika.js:344` | 1086-10-23 | gün komşudan: murabitlar (TDV murabitlar '12 Receb 479 / 23 Ekim 1086') · TDV te | A | 1086-87 | TDV murabitlar '12 Receb 479 / 23 Ekim 1086' (H. gün komşudan: murabitlar) · TDV tekrur yalnız yıl verir |
| 472 | `data/kronoloji_cok_once1281_afrika.js:417` | 1265-01-01 | 664 (1265-66) — TDV yıl verir; ilk milâdî yıl yazıldı | A | 1266-67 | 1265-66 (H. 664) — TDV yıl verir; ilk milâdî yıl yazıldı |
| 473 | `data/kronoloji_cok_once1281_afrika.js:424` | 1272-01-01 | 671 (1272-73) — TDV vergi kesintisinin başlangıcını verir; saldırının yılı YOK ( | A | 1273 | 1272-73 (H. 671) — TDV vergi kesintisinin başlangıcını verir; saldırının yılı YOK (başlangıç yazıldı) |
| 474 | `data/kronoloji_cok_500_1000.js:15` | 0637-01-01 | 16 H. / 637 (TDV yıl verir) | B | 637-38 | 637 (H. 16 H.) (TDV yıl verir) |
| 475 | `data/kronoloji_cok_500_1000.js:21` | 0642-01-01 | 21 H. / 642 (TDV yıl verir) | B | 642-43 | 642 (H. 21 H.) (TDV yıl verir) |
| 476 | `data/kronoloji_cok_500_1000.js:27` | 0652-01-01 | 32 H. / 652-53 (TDV yıl verir) | B | 653-54 | 652-53 (H. 32 H.) (TDV yıl verir) |
| 477 | `data/kronoloji_cok_500_1000.js:34` | 0656-01-01 | 36 H. / 656 (TDV yıl verir) | B | 656-57 | 656 (H. 36 H.) (TDV yıl verir) |
| 478 | `data/kronoloji_cok_500_1000.js:40` | 0680-10-10 | 10 Muharrem 61 / 10 Ekim 680 | B | 681-82 | 10 Ekim 680 (H. 10 Muharrem 61) |
| 479 | `data/kronoloji_cok_500_1000.js:46` | 0787-01-01 | 171 H. / 787 (TDV yıl verir) | B | 787-88 | 787 (H. 171 H.) (TDV yıl verir) |
| 480 | `data/kronoloji_cok_500_1000.js:52` | 0820-01-01 | 204 H. / 820 (TDV yıl verir) | B | 819-20 | 820 (H. 204 H.) (TDV yıl verir) |
| 481 | `data/kronoloji_cok_500_1000.js:70` | 0870-01-01 | 256 H. / 870 (TDV yıl verir) | B | 870-71 | 870 (H. 256 H.) (TDV yıl verir) |
| 482 | `data/kronoloji_cok_500_1000.js:77` | 0896-01-01 | 282 H. / 896 (TDV yıl verir) | B | 895-96 | 896 (H. 282 H.) (TDV yıl verir) |
| 483 | `data/kronoloji_cok_500_1000.js:83` | 0911-01-01 | Receb 298 / Mart 911 (gün bilinmiyor) | B | 911-12 | Mart 911 (H. Receb 298) (gün bilinmiyor) |
| 484 | `data/kronoloji_cok_500_1000.js:89` | 0946-01-01 | Zilhicce 334 / Temmuz 946 (gün bilinmiyor) | B | 946-47 | Temmuz 946 (H. Zilhicce 334) (gün bilinmiyor) |
| 485 | `data/kronoloji_cok_500_1000.js:95` | 0958-01-01 | 347 H. / 958 (TDV yıl verir) | B | 958-59 | 958 (H. 347 H.) (TDV yıl verir) |
| 486 | `data/kronoloji_cok_500_1000.js:101` | 0964-01-01 | 353 H. / 964 (TDV yıl verir) | B | 964-65 | 964 (H. 353 H.) (TDV yıl verir) |
| 487 | `data/kronoloji_cok_500_1000.js:107` | 0963-01-01 | 352 H. / 963 (TDV yıl verir) | B | 963-64 | 963 (H. 352 H.) (TDV yıl verir) |
| 488 | `data/kronoloji_cok_ince_anadolu_iran.js:60` | 1334-01-01 | 735 Muharremi (Eylül 1334) — TDV karesiogullari; gün yok | A | 1335-36 | Eylül 1334 (H. 735 Muharremi) — TDV karesiogullari; gün yok |
| 489 | `data/kronoloji_cok_ince_anadolu_iran.js:68` | 1379-01-01 | 781 (1379) ilkbaharı — TDV taceddinogullari; gün yok | A | 1379-80 | 1379 (H. 781) ilkbaharı — TDV taceddinogullari; gün yok |
| 490 | `data/kronoloji_cok_ince_anadolu_iran.js:76` | 1381-01-01 | 783 (1381) — TDV taceddinogullari; gün yok | A | 1381-82 | 1381 (H. 783) — TDV taceddinogullari; gün yok |
| 491 | `data/kronoloji_cok_ince_anadolu_iran.js:83` | 1392-01-01 | 794 (1392) — TDV taceddinogullari; gün yok | A | 1392-93 | 1392 (H. 794) — TDV taceddinogullari; gün yok |
| 492 | `data/kronoloji_cok_ince_anadolu_iran.js:114` | 1257-01-01 | 655 (1257) — TDV kutlughanlilar; gün yok | A | 1257-58 | 1257 (H. 655) — TDV kutlughanlilar; gün yok |
| 493 | `data/kronoloji_cok_ince_anadolu_iran.js:122` | 1379-01-01 | 781 (1379) — TDV marasiler; gün yok | A | 1379-80 | 1379 (H. 781) — TDV marasiler; gün yok |
| 494 | `data/kronoloji_cok_ince_anadolu_iran.js:129` | 1380-01-01 | 782 (1380) — TDV marasiler; gün yok | A | 1380-81 | 1380 (H. 782) — TDV marasiler; gün yok |
| 495 | `data/kronoloji_cok_ince_anadolu_iran.js:136` | 1385-01-01 | 787 (1385) — TDV marasiler; gün yok | A | 1385-86 | 1385 (H. 787) — TDV marasiler; gün yok |
| 496 | `data/kronoloji_cok_ince_anadolu_iran.js:154` | 1297-01-01 | 696 (1297) — TDV pervaneogullari; gün yok | A | 1297-98 | 1297 (H. 696) — TDV pervaneogullari; gün yok |
| 497 | `data/kronoloji_cok_ince_dg_afrika.js:39` | 1286-01-01 | (kaynak yıl aralığı verir: 685-688 / 1286-1289) | A | 1286-87 | kaynak yıl aralığı verir: 685-688 / 1286-1289 (H. ) |
| 498 | `data/kronoloji_cok_ince_dg_afrika.js:46` | 1316-01-01 | (kaynak yıl verir: 716 / 1316) | A | 1316-17 | kaynak yıl verir: 716 / 1316 (H. ) |
| 499 | `data/kronoloji_cok_ince_guney_asya.js:146` | 1657-01-01 | 1067 h. / 1656-57 (kaynak yıl verir) | B | 1657-58 | 1656-57 (H. 1067 h.) (kaynak yıl verir) |
| 500 | `data/kronoloji_akkoyunlu.js:136` | 1386-01-01 | H. 788 / 1386 — yıl hassasiyeti · TDV `karakoyunlular`, `akkoyunlular`, `uzun-ha | B | 1386-87 | 1386 (H. 788) — yıl hassasiyeti · TDV `karakoyunlular`, `akkoyunlular`, `uzun-hasan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 501 | `data/kronoloji_akkoyunlu.js:166` | 1409-01-01 | H. 813 / 1409 — yıl hassasiyeti · TDV `akkoyunlular`, `karakoyunlular`, `uzun-ha | B | 1410-11 | 1409 (H. 813) — yıl hassasiyeti · TDV `akkoyunlular`, `karakoyunlular`, `uzun-hasan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 502 | `data/kronoloji_akkoyunlu.js:178` | 1417-01-01 | H. 820 / 1417 — yıl hassasiyeti · TDV `akkoyunlular`, `karakoyunlular`, `uzun-ha | B | 1417-18 | 1417 (H. 820) — yıl hassasiyeti · TDV `akkoyunlular`, `karakoyunlular`, `uzun-hasan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 503 | `data/kronoloji_akkoyunlu.js:196` | 1421-04-01 | Rebîülâhir 824 / Nisan 1421 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyu | B | 1421-22 | Nisan 1421 (H. Rebîülâhir 824) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `akkoyunlular`, `uzun-hasan`) |
| 504 | `data/kronoloji_akkoyunlu.js:202` | 1429-01-01 | H. 832 / 1429 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1429-30 | 1429 (H. 832) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 505 | `data/kronoloji_akkoyunlu.js:208` | 1430-01-01 | H. 833 / 1430 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1430-31 | 1430 (H. 833) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 506 | `data/kronoloji_akkoyunlu.js:214` | 1431-01-01 | H. 834 / 1431 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1431-32 | 1431 (H. 834) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 507 | `data/kronoloji_akkoyunlu.js:220` | 1434-01-01 | H. 837 / 1434 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1434-35 | 1434 (H. 837) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 508 | `data/kronoloji_akkoyunlu.js:226` | 1435-09-01 | Safer 839 / Eylül 1435 — ay hassasiyeti · ay TDV'de var, gün yok (`akkoyunlular` | B | 1436 | Eylül 1435 (H. Safer 839) — ay hassasiyeti · ay TDV'de var, gün yok (`akkoyunlular`, `karakoyunlular`, `uzun-hasan`) |
| 509 | `data/kronoloji_akkoyunlu.js:240` | 1439-01-01 | H. 843 / 1439 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1439-40 | 1439 (H. 843) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 510 | `data/kronoloji_akkoyunlu.js:252` | 1444-10-01 | Receb 848 / Ekim 1444 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, ` | B | 1444-45 | Ekim 1444 (H. Receb 848) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `akkoyunlular`, `karakoyunlular`) |
| 511 | `data/kronoloji_akkoyunlu.js:258` | 1450-01-01 | H. 854 / 1450 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1450-51 | 1450 (H. 854) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 512 | `data/kronoloji_akkoyunlu.js:264` | 1452-09-01 | Ramazan 856 / Eylül 1452 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan` | B | 1452-53 | Eylül 1452 (H. Ramazan 856) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `akkoyunlular`, `karakoyunlular`) |
| 513 | `data/kronoloji_akkoyunlu.js:272` | 1457-06-01 | Receb 861 / Haziran 1457 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan` | B | 1457-58 | Haziran 1457 (H. Receb 861) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `karakoyunlular`, `akkoyunlular`) |
| 514 | `data/kronoloji_akkoyunlu.js:278` | 1458-01-01 | H. 862 / 1458 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1458-59 | 1458 (H. 862) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 515 | `data/kronoloji_akkoyunlu.js:284` | 1461-01-01 | H. 865 / 1461 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1461-62 | 1461 (H. 865) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 516 | `data/kronoloji_akkoyunlu.js:290` | 1462-01-01 | H. 866 / 1462 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1462-63 | 1462 (H. 866) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 517 | `data/kronoloji_akkoyunlu.js:296` | 1464-01-01 | H. 869 / 1464 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1465-66 | 1464 (H. 869) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 518 | `data/kronoloji_akkoyunlu.js:302` | 1465-01-01 | H. 869 / 1465 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1465-66 | 1465 (H. 869) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 519 | `data/kronoloji_akkoyunlu.js:316` | 1468-09-01 | Safer 873 / Eylül 1468 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`,  | B | 1468-69 | Eylül 1468 (H. Safer 873) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `akkoyunlular`, `karakoyunlular`) |
| 520 | `data/kronoloji_akkoyunlu.js:328` | 1469-04-01 | Şevval 873 / Nisan-Mayıs 1469 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-h | B | 1468-69 | Nisan-Mayıs 1469 (H. Şevval 873) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `karakoyunlular`, `akkoyunlular`) |
| 521 | `data/kronoloji_akkoyunlu.js:334` | 1469-01-01 | H. 874 / 1469 — yıl hassasiyeti · eski t 1469-06-01'in AYI kaynakta YOK (d ve TD | B | 1469-70 | 1469 (H. 874) — yıl hassasiyeti · eski t 1469-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `akkoyunlular`, `uzun-hasan`, `kar |
| 522 | `data/kronoloji_akkoyunlu.js:340` | 1470-01-01 | H. 875 / 1470 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1470-71 | 1470 (H. 875) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 523 | `data/kronoloji_akkoyunlu.js:346` | 1472-01-01 | H. 877 / 1472 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1472-73 | 1472 (H. 877) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 524 | `data/kronoloji_akkoyunlu.js:352` | 1472-08-01 | Rebîülevvel 877 / Ağustos 1472 — ay hassasiyeti · ay TDV'de var, gün yok (`otluk | B | 1472-73 | Ağustos 1472 (H. Rebîülevvel 877) — ay hassasiyeti · ay TDV'de var, gün yok (`otlukbeli-savasi`, `uzun-hasan`, `akkoyunlular`, `karakoyunlul |
| 525 | `data/kronoloji_akkoyunlu.js:382` | 1474-01-01 | H. 878 / 1474 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1473-74 | 1474 (H. 878) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 526 | `data/kronoloji_akkoyunlu.js:388` | 1475-07-01 | Rebîülevvel 880 / Temmuz 1475 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-h | B | 1475-76 | Temmuz 1475 (H. Rebîülevvel 880) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `akkoyunlular`, `karakoyunlular`) |
| 527 | `data/kronoloji_akkoyunlu.js:394` | 1476-01-01 | H. 881 / 1476 — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlu | B | 1476-77 | 1476 (H. 881) — yıl hassasiyeti · TDV `uzun-hasan`, `akkoyunlular`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 528 | `data/kronoloji_akkoyunlu.js:400` | 1477-12-01 | Ramazan 882 / Aralık 1477 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan | B | 1477-78 | Aralık 1477 (H. Ramazan 882) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `akkoyunlular`, `karakoyunlular`) |
| 529 | `data/kronoloji_akkoyunlu.js:414` | 1478-01-01 | H. 883 / 1478 — yıl hassasiyeti · eski t 1478-06-01'in AYI kaynakta YOK (d ve TD | B | 1478-79 | 1478 (H. 883) — yıl hassasiyeti · eski t 1478-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `akkoyunlular`, `uzun-hasan`, `kar |
| 530 | `data/kronoloji_akkoyunlu.js:420` | 1480-01-01 | H. 885 / 1480 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1480-81 | 1480 (H. 885) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 531 | `data/kronoloji_akkoyunlu.js:426` | 1486-01-01 | H. 891 / 1486 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1486-87 | 1486 (H. 891) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 532 | `data/kronoloji_akkoyunlu.js:432` | 1489-01-01 | H. 894 / 1489 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1489-90 | 1489 (H. 894) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 533 | `data/kronoloji_akkoyunlu.js:438` | 1490-01-01 | H. 895 / 1490 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1490-91 | 1490 (H. 895) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 534 | `data/kronoloji_akkoyunlu.js:452` | 1493-01-01 | H. 898 / 1493 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1493-94 | 1493 (H. 898) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 535 | `data/kronoloji_akkoyunlu.js:464` | 1498-01-01 | H. 903 / 1498 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1498-99 | 1498 (H. 903) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 536 | `data/kronoloji_akkoyunlu.js:470` | 1499-01-01 | H. 904 / 1499 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1499-00 | 1499 (H. 904) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 537 | `data/kronoloji_akkoyunlu.js:476` | 1500-01-01 | H. 905 / 1500 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1500-01 | 1500 (H. 905) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 538 | `data/kronoloji_akkoyunlu.js:490` | 1503-01-01 | H. 909 / 1503 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1503-04 | 1503 (H. 909) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 539 | `data/kronoloji_akkoyunlu.js:496` | 1505-01-01 | H. 911 / 1505 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1505-06 | 1505 (H. 911) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 540 | `data/kronoloji_akkoyunlu.js:502` | 1509-01-01 | H. 915 / 1509 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1509-10 | 1509 (H. 915) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 541 | `data/kronoloji_akkoyunlu.js:508` | 1514-01-01 | H. 920 / 1514 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1514-15 | 1514 (H. 920) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 542 | `data/kronoloji_karakoyunlu.js:108` | 1366-01-01 | H. 767 / 1366 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1366-67 | 1366 (H. 767) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 543 | `data/kronoloji_karakoyunlu.js:114` | 1374-01-01 | H. 776 / 1374 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1374-75 | 1374 (H. 776) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 544 | `data/kronoloji_karakoyunlu.js:120` | 1375-01-01 | H. 777 / 1375 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1375-76 | 1375 (H. 777) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 545 | `data/kronoloji_karakoyunlu.js:126` | 1377-01-01 | H. 778 / 1377 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1376-77 | 1377 (H. 778) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 546 | `data/kronoloji_karakoyunlu.js:140` | 1382-01-01 | H. 784 / 1382 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1382-83 | 1382 (H. 784) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 547 | `data/kronoloji_karakoyunlu.js:146` | 1386-01-01 | H. 788 / 1386 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1386-87 | 1386 (H. 788) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 548 | `data/kronoloji_karakoyunlu.js:152` | 1387-01-01 | H. 789 / 1387 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1387-88 | 1387 (H. 789) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 549 | `data/kronoloji_karakoyunlu.js:158` | 1388-01-01 | H. 790 / 1388 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1388-89 | 1388 (H. 790) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 550 | `data/kronoloji_karakoyunlu.js:165` | 1389-04-01 | Rebîülâhir 791 / Nisan 1389 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyu | B | 1389-90 | Nisan 1389 (H. Rebîülâhir 791) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 551 | `data/kronoloji_karakoyunlu.js:171` | 1390-01-01 | H. 792 / 1390 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1390-91 | 1390 (H. 792) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 552 | `data/kronoloji_karakoyunlu.js:179` | 1392-01-01 | H. 794 / 1392 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1392-93 | 1392 (H. 794) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 553 | `data/kronoloji_karakoyunlu.js:191` | 1395-01-01 | H. 797 / 1395 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1395-96 | 1395 (H. 797) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 554 | `data/kronoloji_karakoyunlu.js:197` | 1396-01-01 | H. 798 / 1396 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1396-97 | 1396 (H. 798) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 555 | `data/kronoloji_karakoyunlu.js:203` | 1400-01-01 | H. 802 / 1400 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1400-01 | 1400 (H. 802) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 556 | `data/kronoloji_karakoyunlu.js:215` | 1402-08-01 | Muharrem 805 / Ağustos 1402 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyu | B | 1403 | Ağustos 1402 (H. Muharrem 805) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 557 | `data/kronoloji_karakoyunlu.js:221` | 1403-09-01 | Rebîülevvel 806 / Eylül 1403 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoy | B | 1403-04 | Eylül 1403 (H. Rebîülevvel 806) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 558 | `data/kronoloji_karakoyunlu.js:227` | 1405-01-01 | H. 807 / 1405 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1404-05 | 1405 (H. 807) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 559 | `data/kronoloji_karakoyunlu.js:239` | 1405-07-01 | Muharrem 808 / Temmuz 1405 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyun | B | 1405-06 | Temmuz 1405 (H. Muharrem 808) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 560 | `data/kronoloji_karakoyunlu.js:259` | 1409-01-01 | H. 813 / 1409 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1410-11 | 1409 (H. 813) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 561 | `data/kronoloji_karakoyunlu.js:271` | 1411-01-01 | H. 814 / 1411 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1411-12 | 1411 (H. 814) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 562 | `data/kronoloji_karakoyunlu.js:277` | 1412-01-01 | H. 815 / 1412 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1412-13 | 1412 (H. 815) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 563 | `data/kronoloji_karakoyunlu.js:283` | 1415-01-01 | H. 818 / 1415 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1415-16 | 1415 (H. 818) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 564 | `data/kronoloji_karakoyunlu.js:289` | 1417-01-01 | H. 820 / 1417 — yıl hassasiyeti · TDV `karakoyunlular`, `akkoyunlular`, `cihan-s | B | 1417-18 | 1417 (H. 820) — yıl hassasiyeti · TDV `karakoyunlular`, `akkoyunlular`, `cihan-sah` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 565 | `data/kronoloji_karakoyunlu.js:301` | 1418-10-01 | Ramazan 821 / Ekim 1418 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlul | B | 1418-19 | Ekim 1418 (H. Ramazan 821) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 566 | `data/kronoloji_karakoyunlu.js:315` | 1421-04-01 | Rebîülâhir 824 / Nisan 1421 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyu | B | 1421-22 | Nisan 1421 (H. Rebîülâhir 824) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `akkoyunlular`, `cihan-sah`) |
| 567 | `data/kronoloji_karakoyunlu.js:327` | 1425-01-01 | H. 828 / 1425 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1425-26 | 1425 (H. 828) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 568 | `data/kronoloji_karakoyunlu.js:333` | 1427-01-01 | H. 830 / 1427 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1427-28 | 1427 (H. 830) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 569 | `data/kronoloji_karakoyunlu.js:339` | 1428-01-01 | H. 831 / 1428 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1428-29 | 1428 (H. 831) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 570 | `data/kronoloji_karakoyunlu.js:351` | 1430-01-01 | H. 833 / 1430 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1430-31 | 1430 (H. 833) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 571 | `data/kronoloji_karakoyunlu.js:357` | 1434-11-01 | Rebîülâhir 838 / Kasım 1434 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyu | B | 1435-36 | Kasım 1434 (H. Rebîülâhir 838) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 572 | `data/kronoloji_karakoyunlu.js:363` | 1435-09-01 | Safer 839 / Eylül 1435 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlula | B | 1436 | Eylül 1435 (H. Safer 839) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `akkoyunlular`, `cihan-sah`) |
| 573 | `data/kronoloji_karakoyunlu.js:369` | 1436-05-01 | Şevval 839 / Mayıs 1436 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlul | B | 1436 | Mayıs 1436 (H. Şevval 839) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 574 | `data/kronoloji_karakoyunlu.js:375` | 1438-05-01 | Zilkade 841 / Mayıs 1438 — ay hassasiyeti (TDV `karakoyunlular`) · ⚠️ TDV KENDİ  | B | 1437-38 | Mayıs 1438 (H. Zilkade 841) — ay hassasiyeti (TDV `karakoyunlular`) · ⚠️ TDV KENDİ İÇİNDE ÇELİŞİYOR: `cihan-sah` Cihan Şah'ın İskender'in öl |
| 575 | `data/kronoloji_karakoyunlu.js:389` | 1440-01-01 | H. 844 / 1440 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1440-41 | 1440 (H. 844) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 576 | `data/kronoloji_karakoyunlu.js:395` | 1445-01-01 | H. 849 / 1445 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1445-46 | 1445 (H. 849) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 577 | `data/kronoloji_karakoyunlu.js:413` | 1450-01-01 | H. 854 / 1450 — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlu | B | 1450-51 | 1450 (H. 854) — yıl hassasiyeti · TDV `akkoyunlular`, `uzun-hasan`, `karakoyunlular`, `cihan-sah` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 578 | `data/kronoloji_karakoyunlu.js:419` | 1457-06-01 | Receb 861 / Haziran 1457 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlu | B | 1457-58 | Haziran 1457 (H. Receb 861) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `uzun-hasan`, `cihan-sah`, `akkoyunlular`) |
| 579 | `data/kronoloji_karakoyunlu.js:425` | 1462-01-01 | H. 866 / 1462 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1462-63 | 1462 (H. 866) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 580 | `data/kronoloji_karakoyunlu.js:451` | 1468-07-01 | Zilhicce 872 / Temmuz 1468 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyun | B | 1468 | Temmuz 1468 (H. Zilhicce 872) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 581 | `data/kronoloji_karakoyunlu.js:457` | 1468-09-01 | Safer 873 / Eylül 1468 — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`,  | B | 1468-69 | Eylül 1468 (H. Safer 873) — ay hassasiyeti · ay TDV'de var, gün yok (`uzun-hasan`, `karakoyunlular`, `cihan-sah`, `akkoyunlular`) |
| 582 | `data/kronoloji_karakoyunlu.js:463` | 1469-04-01 | Şevval 873 / Nisan 1469 — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlul | B | 1468-69 | Nisan 1469 (H. Şevval 873) — ay hassasiyeti · ay TDV'de var, gün yok (`karakoyunlular`, `uzun-hasan`, `cihan-sah`, `akkoyunlular`) |
| 583 | `data/kronoloji_karakoyunlu.js:469` | 1469-01-01 | H. 873 / 1469 — yıl hassasiyeti · eski t 1469-06-01'in AYI kaynakta YOK (d ve TD | B | 1468-69 | 1469 (H. 873) — yıl hassasiyeti · eski t 1469-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `karakoyunlular`, `cihan-sah`, `ak |
| 584 | `data/kronoloji_karakoyunlu.js:481` | 1479-01-01 | H. 884 / 1479 — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlul | B | 1479-80 | 1479 (H. 884) — yıl hassasiyeti · TDV `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 585 | `data/kronoloji_karakoyunlu.js:489` | 1465-01-01 | H. 870 / 1465 — yıl hassasiyeti · TDV `gokmescid`, `karakoyunlular`, `cihan-sah` | B | 1466-67 | 1465 (H. 870) — yıl hassasiyeti · TDV `gokmescid`, `karakoyunlular`, `cihan-sah`, `akkoyunlular` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçü |
| 586 | `data/kronoloji_misir.js:55` | 1524-01-01 | H. 930 / 1524 — yıl hassasiyeti · TDV `ahmed-pasa-hain`, `misir`, `kavalali-mehm | B | 1524-25 | 1524 (H. 930) — yıl hassasiyeti · TDV `ahmed-pasa-hain`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRO |
| 587 | `data/kronoloji_misir.js:65` | 1760-01-01 | H. 1173 / 1760 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibr | B | 1760-61 | 1760 (H. 1173) — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (K |
| 588 | `data/kronoloji_misir.js:83` | 1775-06-01 | Rebîülâhir 1189 / Haziran 1775 — ay hassasiyeti · ay TDV'de var, gün yok (`misir | B | 1775-76 | Haziran 1775 (H. Rebîülâhir 1189) — ay hassasiyeti · ay TDV'de var, gün yok (`misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, ` |
| 589 | `data/kronoloji_misir.js:87` | 1786-06-09 | 11 Şâban 1200 / 9 Haziran 1786 (TDV `misir`) | B | 1786-87 | 9 Haziran 1786 (H. 11 Şâban 1200) (TDV `misir`) |
| 590 | `data/kronoloji_misir.js:183` | 1833-01-01 | H. 1250 / 1833 — yıl hassasiyeti · TDV `rifaa-et-tahtavi`, `misir`, `kavalali-me | B | 1834-35 | 1833 (H. 1250) — yıl hassasiyeti · TDV `rifaa-et-tahtavi`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (K |
| 591 | `data/kronoloji_timurlu.js:124` | 1409-05-13 | 27 Zilhicce 811 / 13 Mayıs 1409 (TDV `sahruh`) · eski t 1409-05-01 ay başı yer t | B | 1408-09 | 13 Mayıs 1409 (H. 27 Zilhicce 811) (TDV `sahruh`) · eski t 1409-05-01 ay başı yer tutucuydu, kaynağı yoktu (KRONO-CELISKI-1006 §2 #21) |
| 592 | `data/kronoloji_gurcistan.js:177` | 1590-03-21 | 998 (1590) | A | 1590-91 | 1590 (H. 998) |
| 593 | `data/kronoloji_iran_ardillari.js:456` | 1327-01-01 | H. 727 / 1327 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1327-28 | 1327 (H. 727) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 594 | `data/kronoloji_iran_ardillari.js:468` | 1335-11-30 | 13 Rebîülâhir 736 / 30 Kasım 1335 (TDV `ebu-said-bahadir-han`) | B | 1336-37 | 30 Kasım 1335 (H. 13 Rebîülâhir 736) (TDV `ebu-said-bahadir-han`) |
| 595 | `data/kronoloji_iran_ardillari.js:495` | 1336-01-01 | H. 736 / 1336 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1336-37 | 1336 (H. 736) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 596 | `data/kronoloji_iran_ardillari.js:537` | 1339-01-01 | H. 739 / 1339 — yıl hassasiyeti · TDV `ilhanlilar`, `celayirliler`, `muzafferile | B | 1338-39 | 1339 (H. 739) — yıl hassasiyeti · TDV `ilhanlilar`, `celayirliler`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 597 | `data/kronoloji_iran_ardillari.js:555` | 1340-01-01 | H. 740 / 1340 — yıl hassasiyeti · eski t 1340-03-01'in AYI kaynakta YOK (d ve TD | B | 1339-40 | 1340 (H. 740) — yıl hassasiyeti · eski t 1340-03-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `inculular`, `ilhanlilar`, `celayi |
| 598 | `data/kronoloji_iran_ardillari.js:567` | 1343-01-01 | H. 743 / 1343 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1342-43 | 1343 (H. 743) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 599 | `data/kronoloji_iran_ardillari.js:579` | 1344-01-01 | H. 745 / 1344 — yıl hassasiyeti · TDV `ilhanlilar`, `celayirliler`, `muzafferile | B | 1344-45 | 1344 (H. 745) — yıl hassasiyeti · TDV `ilhanlilar`, `celayirliler`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 600 | `data/kronoloji_iran_ardillari.js:607` | 1356-01-01 | H. 757 / 1356 — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferile | B | 1356-57 | 1356 (H. 757) — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 601 | `data/kronoloji_iran_ardillari.js:625` | 1366-01-01 | H. 767 / 1366 — yıl hassasiyeti · TDV `karakoyunlular`, `ilhanlilar`, `celayirli | B | 1366-67 | 1366 (H. 767) — yıl hassasiyeti · TDV `karakoyunlular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-092 |
| 602 | `data/kronoloji_iran_ardillari.js:685` | 1411-01-01 | H. 814 / 1411 — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferile | B | 1411-12 | 1411 (H. 814) — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 603 | `data/kronoloji_iran_ardillari.js:691` | 1415-01-01 | H. 818 / 1415 — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferile | B | 1415-16 | 1415 (H. 818) — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 604 | `data/kronoloji_iran_ardillari.js:697` | 1421-01-01 | H. 824 / 1421 — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferile | B | 1421-22 | 1421 (H. 824) — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 605 | `data/kronoloji_iran_ardillari.js:703` | 1424-01-01 | H. 827 / 1424 — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferile | B | 1424-25 | 1424 (H. 827) — yıl hassasiyeti · TDV `celayirliler`, `ilhanlilar`, `muzafferiler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 606 | `data/kronoloji_iran_ardillari.js:731` | 1291-01-01 | H. 690 / 1291 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1291-92 | 1291 (H. 690) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 607 | `data/kronoloji_iran_ardillari.js:737` | 1313-01-01 | H. 713 / 1313 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1313-14 | 1313 (H. 713) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 608 | `data/kronoloji_iran_ardillari.js:743` | 1318-01-01 | H. 718 / 1318 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1318-19 | 1318 (H. 718) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 609 | `data/kronoloji_iran_ardillari.js:761` | 1350-01-01 | H. 751 / 1350 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1350-51 | 1350 (H. 751) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 610 | `data/kronoloji_iran_ardillari.js:767` | 1352-01-01 | H. 753 / 1352 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1352-53 | 1352 (H. 753) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 611 | `data/kronoloji_iran_ardillari.js:773` | 1353-01-01 | H. 754 / 1353 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1353-54 | 1353 (H. 754) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 612 | `data/kronoloji_iran_ardillari.js:797` | 1358-01-01 | H. 759 / 1358 — yıl hassasiyeti · eski t 1358-06-01'in AYI kaynakta YOK (d ve TD | B | 1358-59 | 1358 (H. 759) — yıl hassasiyeti · eski t 1358-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `muzafferiler`, `ilhanlilar`, `cel |
| 613 | `data/kronoloji_iran_ardillari.js:827` | 1384-01-01 | H. 786 / 1384 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1384-85 | 1384 (H. 786) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 614 | `data/kronoloji_iran_ardillari.js:833` | 1385-01-01 | H. 787 / 1385 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1385-86 | 1385 (H. 787) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 615 | `data/kronoloji_iran_ardillari.js:839` | 1387-11-18 | 6 Zilkade 789 / 18 Kasım 1387 (TDV `isfahan`) — ilk geçişte `muzafferiler` yalnı | B | 1387-88 | 18 Kasım 1387 (H. 6 Zilkade 789) (TDV `isfahan`) — ilk geçişte `muzafferiler` yalnız yıl verdiği için yıla indirilmişti; yer maddesi günü ve |
| 616 | `data/kronoloji_iran_ardillari.js:845` | 1391-01-01 | H. 793 / 1391 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1391-92 | 1391 (H. 793) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 617 | `data/kronoloji_iran_ardillari.js:851` | 1393-01-01 | H. 795 / 1393 — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirlile | B | 1393-94 | 1393 (H. 795) — yıl hassasiyeti · TDV `muzafferiler`, `ilhanlilar`, `celayirliler`, `serbedariler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 618 | `data/kronoloji_iran_ardillari.js:874` | 1325-01-01 | H. 725 / 1325 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1325-26 | 1325 (H. 725) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 619 | `data/kronoloji_iran_ardillari.js:880` | 1338-01-01 | H. 739 / 1338 — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, | B | 1338-39 | 1338 (H. 739) — yıl hassasiyeti · TDV `inculular`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölç |
| 620 | `data/kronoloji_iran_ardillari.js:924` | 1338-07-01 | 12 Zilhicce 738 / 1 Temmuz 1338 — GERÇEK GÜN (TDV `serbedariler`) | B | 1338 | 1 Temmuz 1338 (H. 12 Zilhicce 738) — GERÇEK GÜN (TDV `serbedariler`) |
| 621 | `data/kronoloji_iran_ardillari.js:936` | 1340-01-01 | H. 741 / 1340 — yıl hassasiyeti · eski t 1340-06-01'in AYI kaynakta YOK (d ve TD | B | 1340-41 | 1340 (H. 741) — yıl hassasiyeti · eski t 1340-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `serbedariler`, `ilhanlilar`, `cel |
| 622 | `data/kronoloji_iran_ardillari.js:942` | 1342-02-01 | 23 Şâban 742 / 1 Şubat 1342 — GERÇEK GÜN (TDV `serbedariler`) | B | 1341-42 | 1 Şubat 1342 (H. 23 Şâban 742) — GERÇEK GÜN (TDV `serbedariler`) |
| 623 | `data/kronoloji_iran_ardillari.js:954` | 1344-01-01 | H. 745 / 1344 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1344-45 | 1344 (H. 745) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 624 | `data/kronoloji_iran_ardillari.js:960` | 1346-05-01 | Muharrem 747 / Mayıs 1346 — ay hassasiyeti · ay TDV'de var, gün yok (`serbedaril | B | 1346-47 | Mayıs 1346 (H. Muharrem 747) — ay hassasiyeti · ay TDV'de var, gün yok (`serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` …) |
| 625 | `data/kronoloji_iran_ardillari.js:972` | 1348-01-01 | H. 748 / 1348 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1347-48 | 1348 (H. 748) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 626 | `data/kronoloji_iran_ardillari.js:978` | 1351-01-01 | H. 752 / 1351 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1351-52 | 1351 (H. 752) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 627 | `data/kronoloji_iran_ardillari.js:984` | 1358-01-01 | H. 759 / 1358 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1358-59 | 1358 (H. 759) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 628 | `data/kronoloji_iran_ardillari.js:990` | 1361-05-01 | Receb 762 / Mayıs 1361 — ay hassasiyeti · ay TDV'de var, gün yok (`serbedariler` | B | 1361-62 | Mayıs 1361 (H. Receb 762) — ay hassasiyeti · ay TDV'de var, gün yok (`serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` …) |
| 629 | `data/kronoloji_iran_ardillari.js:1002` | 1362-01-01 | H. 763 / 1362 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1362-63 | 1362 (H. 763) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 630 | `data/kronoloji_iran_ardillari.js:1008` | 1363-01-01 | H. 764 / 1363 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1363-64 | 1363 (H. 764) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 631 | `data/kronoloji_iran_ardillari.js:1020` | 1376-01-01 | H. 778 / 1376 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1376-77 | 1376 (H. 778) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 632 | `data/kronoloji_iran_ardillari.js:1026` | 1379-01-01 | H. 781 / 1379 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1379-80 | 1379 (H. 781) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 633 | `data/kronoloji_iran_ardillari.js:1032` | 1381-01-01 | H. 783 / 1381 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1381-82 | 1381 (H. 783) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 634 | `data/kronoloji_iran_ardillari.js:1038` | 1386-01-01 | H. 788 / 1386 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1386-87 | 1386 (H. 788) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 635 | `data/kronoloji_iran_ardillari.js:1044` | 1405-01-01 | H. 807 / 1405 — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirlile | B | 1404-05 | 1405 (H. 807) — yıl hassasiyeti · TDV `serbedariler`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929  |
| 636 | `data/kronoloji_iran_ardillari.js:1060` | 1245-01-01 | H. 643 / 1245 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1245-46 | 1245 (H. 643) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 637 | `data/kronoloji_iran_ardillari.js:1066` | 1246-01-01 | H. 644 / 1246 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1246-47 | 1246 (H. 644) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 638 | `data/kronoloji_iran_ardillari.js:1078` | 1257-01-01 | H. 655 / 1257 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1257-58 | 1257 (H. 655) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 639 | `data/kronoloji_iran_ardillari.js:1090` | 1285-01-01 | H. 684 / 1285 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1285-86 | 1285 (H. 684) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 640 | `data/kronoloji_iran_ardillari.js:1096` | 1329-01-01 | H. 729 / 1329 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1329-30 | 1329 (H. 729) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 641 | `data/kronoloji_iran_ardillari.js:1102` | 1331-01-01 | H. 731 / 1331 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1331-32 | 1331 (H. 731) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 642 | `data/kronoloji_iran_ardillari.js:1108` | 1335-01-01 | H. 735 / 1335 — yıl hassasiyeti · eski t 1335-06-01'in AYI kaynakta YOK (d ve TD | B | 1335-36 | 1335 (H. 735) — yıl hassasiyeti · eski t 1335-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kert`, `ilhanlilar`, `celayirlile |
| 643 | `data/kronoloji_iran_ardillari.js:1114` | 1370-01-01 | H. 771 / 1370 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1370-71 | 1370 (H. 771) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 644 | `data/kronoloji_iran_ardillari.js:1120` | 1381-01-01 | H. 783 / 1381 — yıl hassasiyeti · eski t 1381-04-01'in AYI kaynakta YOK (d ve TD | B | 1381-82 | 1381 (H. 783) — yıl hassasiyeti · eski t 1381-04-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kert`, `ilhanlilar`, `celayirlile |
| 645 | `data/kronoloji_iran_ardillari.js:1126` | 1389-01-01 | H. 791 / 1389 — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muz | B | 1389-90 | 1389 (H. 791) — yıl hassasiyeti · TDV `kert`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü) |
| 646 | `data/kronoloji_iran_ardillari.js:1180` | 1590-01-01 | H. 998 / 1590 — yıl hassasiyeti · TDV `luristan`, `ilhanlilar`, `celayirliler`,  | B | 1590-91 | 1590 (H. 998) — yıl hassasiyeti · TDV `luristan`, `ilhanlilar`, `celayirliler`, `muzafferiler` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçü |
| 647 | `data/kronoloji_safevi.js:87` | 1504-12-06 | Yezd'e giriş: 28 Cemâziyelâhir 910 / 6 Aralık 1504 (TDV `yezd`) · Kâşân için TDV | B | 1504-05 | 6 Aralık 1504 (H. Yezd'e giriş: 28 Cemâziyelâhir 910) (TDV `yezd`) · Kâşân için TDV gün vermiyor · eski t 1504-06-01 Iranica'ya dayanıyordu, |
| 648 | `data/kronoloji_safevi.js:95` | 1508-01-01 | yıl — 914 H (Mayıs 1508 – Nisan 1509); TDV ay/gün vermiyor | A | 1508-09 | Mayıs 1508 – Nisan 1509 (H. yıl — 914 H); TDV ay/gün vermiyor |
| 649 | `data/olaylar_p0043b.js:34` | 1514-03-20 | 23 Muharrem 920 (20 Mart 1514) | A | 1514-15 | 20 Mart 1514 (H. 23 Muharrem 920) |
| 650 | `data/olaylar_p0048.js:42` | 1592-01-01 | 1000 (1591-92) — kaynak yalnız yılı veriyor | A | 1592-93 | 1591-92 (H. 1000) — kaynak yalnız yılı veriyor |
| 651 | `data/olaylar_p0053.js:27` | 1624-01-01 | 1033 (1623-24) — kaynak gün vermiyor | A | 1624-25 | 1623-24 (H. 1033) — kaynak gün vermiyor |
| 652 | `data/olaylar_p0053.js:38` | 1625-01-01 | 1035 (1625) — ordu eylül başında Musul'a vardı; gün yok | A | 1626-27 | 1625 (H. 1035) — ordu eylül başında Musul'a vardı; gün yok |
| 653 | `data/olaylar_ok107.js:46` | 1515-09-19 | 10 Şâban 921 / 19 Eylül 1515 | B | 1515-16 | 19 Eylül 1515 (H. 10 Şâban 921) |
| 654 | `data/olaylar_ok106.js:82` | 1703-01-01 | 1115 (1703) | A | 1703-04 | 1703 (H. 1115) |
| 655 | `data/olaylar_p0036.js:15` | 1463-01-01 | 867 (1463) inşa görevi, 869 (1464-65) tamamlanma (Kritovulos, TDV) · Evliya Çele | A | 1463-64 | 1463 (H. 867) inşa görevi, 869 (1464-65) tamamlanma (Kritovulos, TDV) · Evliya Çelebi 856/1452 der |
| 656 | `data/olaylar_p0036.js:36` | 1566-09-01 | 15 Safer 974 (1 Eylül 1566) | A | 1566-67 | 1 Eylül 1566 (H. 15 Safer 974) |
| 657 | `data/olaylar_p0057b.js:20` | 1431-01-01 | 835 (1431) | A | 1432-33 | 1431 (H. 835) |
| 658 | `data/olaylar_p0057b.js:22` | 1520-01-01 | 926 (1520) ya da 927 (1521) | A | 1520-21 | 1520 (H. 926) ya da 927 (1521) |
| 659 | `data/olaylar_p0057b.js:24` | 1574-01-01 | 982 (1574) | A | 1574-75 | 1574 (H. 982) |
| 660 | `data/olaylar_p0057b.js:28` | 1702-01-01 | 1114 (1702) | A | 1702-03 | 1702 (H. 1114) |
| 661 | `data/olaylar_p0057b.js:30` | 1734-01-01 | 1147 (1734) | A | 1734-35 | 1734 (H. 1147) |
| 662 | `data/olaylar_p0057b.js:32` | 1756-12-22 | 29 Rebîülevvel 1170 / 22 Aralık 1756 | B | 1757-58 | 22 Aralık 1756 (H. 29 Rebîülevvel 1170) |
| 663 | `data/olaylar_p0063.js:39` | 1736-05-02 | 20 Zilhicce 1148 / 2 Mayıs 1736 | B | 1735-36 | 2 Mayıs 1736 (H. 20 Zilhicce 1148) |
| 664 | `data/olaylar_p0063.js:44` | 1737-07-01 | Rebîülevvel 1150 (Temmuz 1737) | A | 1737-38 | Temmuz 1737 (H. Rebîülevvel 1150) |
| 665 | `data/olaylar_p0917kosu13.js:22` | 1725-09-09 | 1138 (1725) sonbaharı — Ağustos 1725'ten az sonra; gün kaynakta yok, hicrî 1138  | A | 1726-27 | 1725 (H. 1138) sonbaharı — Ağustos 1725'ten az sonra; gün kaynakta yok, hicrî 1138 yılının ilk günü (1 Muharrem = 9 Eylül 1725) kullanıldı |
| 666 | `data/olaylar_p0917kosu13.js:34` | 1450-01-01 | 853 H (24 Şubat 1449 – 13 Şubat 1450); gün kaynakta yok | A | 1449-50 | 24 Şubat 1449 – 13 Şubat 1450 (H. 853 H); gün kaynakta yok |
| 667 | `data/olaylar_p0917kosu13.js:38` | 1532-01-01 | 938 h. / 1532 (ay ve gün kaynakta yok) | B | 1532-33 | 1532 (H. 938 h.) (ay ve gün kaynakta yok) |
| 668 | `data/olaylar_p0917kosu13.js:44` | 1588-09-01 | 997 (1588) — gün kaynakta yok; aynı yılın Gence seferiyle eşlendi | A | 1589-90 | 1588 (H. 997) — gün kaynakta yok; aynı yılın Gence seferiyle eşlendi |
| 669 | `data/olaylar_p0917kosu13.js:46` | 1589-01-01 | 996 sonu – 997 (1588 sonu – 1589) | B | 1588-89 | 1588 sonu – 1589 (H. 996 sonu – 997) |
| 670 | `data/olaylar_p0068b.js:53` | 1788-01-25 | 16 Rebîülâhir 1202 / 25 Ocak 1788 | B | 1788-89 | 25 Ocak 1788 (H. 16 Rebîülâhir 1202) |
| 671 | `data/olaylar_p0068b.js:67` | 1790-03-30 | 14 Receb 1204 / 30 Mart 1790 | B | 1790-91 | 30 Mart 1790 (H. 14 Receb 1204) |
| 672 | `data/olaylar_p0068b.js:74` | 1791-07-09 | 8 Zilkade 1205 / 9 Temmuz 1791 | B | 1791-92 | 9 Temmuz 1791 (H. 8 Zilkade 1205) |
| 673 | `data/olaylar_p0068b.js:78` | 1790-09-18 | 9 Muharrem 1205 Pazar / 18 Eylül 1790 | B | 1791-92 | 18 Eylül 1790 (H. 9 Muharrem 1205 Pazar) |
| 674 | `data/olaylar_p0068b.js:82` | 1791-08-11 | 11 Zilhicce 1205 / 11 Ağustos 1791 | B | 1791-92 | 11 Ağustos 1791 (H. 11 Zilhicce 1205) |
| 675 | `data/olaylar_p0068b.js:85` | 1790-12-30 | 23 Rebîülâhir 1205 / 30 Aralık 1790 | B | 1791-92 | 30 Aralık 1790 (H. 23 Rebîülâhir 1205) |
| 676 | `data/olaylar_p0068b.js:88` | 1791-08-12 | 12 Zilhicce 1205 / 12 Ağustos 1791 | B | 1791-92 | 12 Ağustos 1791 (H. 12 Zilhicce 1205) |
| 677 | `data/olaylar_p0068b.js:89` | 1791-08-31 | 1 Muharrem 1206 / 31 Ağustos 1791 | B | 1792-93 | 31 Ağustos 1791 (H. 1 Muharrem 1206) |
| 678 | `data/olaylar_p0068b.js:91` | 1791-11-10 | 13 Rebîülevvel 1206 / 10 Kasım 1791 | B | 1792-93 | 10 Kasım 1791 (H. 13 Rebîülevvel 1206) |
| 679 | `data/olaylar_p0068b.js:93` | 1792-01-18 | 23 Cemâziyelevvel 1206 / 18 Ocak 1792 | B | 1792-93 | 18 Ocak 1792 (H. 23 Cemâziyelevvel 1206) |
| 680 | `data/olaylar_p0068b.js:94` | 1792-01-27 | 2 Cemâziyelâhir 1206 / 27 Ocak 1792 | B | 1792-93 | 27 Ocak 1792 (H. 2 Cemâziyelâhir 1206) |
| 681 | `data/olaylar_p0068b.js:95` | 1792-02-10 | 16 Cemâziyelâhir 1206 / 10 Şubat 1792 | B | 1792-93 | 10 Şubat 1792 (H. 16 Cemâziyelâhir 1206) |
| 682 | `data/olaylar_p0068b.js:99` | 1792-05-04 | 12 Ramazan 1206 / 4 Mayıs 1792 | B | 1792-93 | 4 Mayıs 1792 (H. 12 Ramazan 1206) |
| 683 | `data/olaylar_kronoeksik_0921.js:33` | 1603-06-07 | 27 Zilhicce 1011 / 7 Haziran 1603 | B | 1602-03 | 7 Haziran 1603 (H. 27 Zilhicce 1011) |

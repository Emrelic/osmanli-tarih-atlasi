# KRONO-CELISKI-1006 — künye maddesi ↔ ad eşlemeli kronoloji dosyası: tarih çelişkileri

Oturum: UMIT-W28-KRONO-CELISKI-1006 · ağaç `C:\atlas-umit` HEAD `5808c6b1` · YALNIZ ARAŞTIRMA
(`data/`, `arac/`, `js/`'e dokunulmadı).

## 0. ÖNGÖRÜ — TDV okunmadan ÖNCE mühürlendi
Ölçüm aracı (scratchpad `cift.js`): `index.html`in yüklediği `data/*.js` vm'de koşturuldu, W26 §0
kuralı uygulandı: aynı gün karşılığı YOK ama (b) ±30 gün ya da (c) `-01-01` + aynı yıl.
**HEAD `5808c6b1`'de 30 satır çıktı** (W26 `847408ea`'da 28 = 25 + 3 ayrı). Fark veri değişikliğinden
geliyor; 30'un tamamı aşağıda işlendi.

Öngörü (30 satır; 3'ü W26'nın "ayrı olay" listesi, 27'si çift):
| kova | öngörü |
|---|---|
| TDV ile çözülen (tek gün kaynaklı) | **15 ± 3** |
| TDV kapsamıyor → akademik kaynakla çözülen | **5 ± 2** (almanya, lehistan Potop, macaristan Dózsa, katalan, isveç) |
| ÇELİŞKİ kalan | **3 ± 2** |
| bulunamadı | **2 ± 2** |
| W26'nın 3'ü dışında gerçekte AYRI olay | **≥ 2** (gurcistan 1578 Tiflis↔Çıldır, venedik 1684 Mora↔İttifak) |
| künye tarafının kendi `kaynak:` alanı dolu | **0** (künye maddelerinde alan yok; künye düzeyi slug var) |

**EK KAPSAM (öngörü mühürlendikten SONRA geldi, UMIT İRTİBAT):** W26 1006b E3'ün 17 MÜKERRER'i.
14'ü yukarıdaki 30'un içinde; 3'ü yeni (kırım 1571 · macaristan 1308 · isveç 1714) → satır 31-33.
Öngörü yalnız ilk 27 çifti bağlar; ek 3 satır öngörü sınavına GİRMEZ.

## 1. Yöntem ve tuzaklar
- Künye maddelerinin (`data/devletler.js` `kronoloji:[]`) **hiçbirinde `kaynak:` alanı yok** (33/33). Künye
  düzeyindeki slug (`kaynak:"safeviler"` vb.) maddeyi tarihlemez; "K kaynağı" sütunu bu yüzden hep `yok`.
- TDV gövdesi `denetim/ARAC-TDV-CIKARICI-1006.py ara` ile alındı (önbellek scratchpad'de). Ölü slug'lar (302):
  `kirim-hanligi` · `kara-yusuf` · `cildir-savasi` · `devlet-giray-i` (doğrusu `devlet-giray`).
  Gönderme maddesi: `lehistan`→`polonya`, `ismail-i`→`sah-ismail` (çıkarıcı 0 bölüm verdi; tuzak ④/⑦; gönderme izlendi).
- (c) satırlarında ilk ölçümüm aynı yıldaki İLK dosya maddesini eşledi; satır 17 ve 24'te bu YANLIŞ eşlemeydi
  (dosyada aynı olay ayrı günle var: karakoyunlu `:382` 1438-04-19 · gürcistan `:159` 1578-08-24). Tabloda doğru eş yazılı.
- Hicrî→miladî kontrolü elle yapıldı (TDV'nin verdiği bir eşleşmeden ay sayarak); iç tutarsızlıklar §3'te.
- Akademik kaynak bu turda AÇILMADI; dosyanın kendi yazdığı akademik dayanak (Engel, Setton, Iranica, Britannica)
  olduğu gibi aktarıldı, doğrulanmadı. Vikipedi kullanılmadı.

## 2. Tablo (33 satır)
K = künye maddesi (`data/devletler.js`) · F = ad eşlemeli dosya (`data/kronoloji_<id>.js`). Satırlar `HEAD 5808c6b1`.
M = MÜKERRER (W26 E3). "-01-01 kaynaklı?" yalnız künye tarafı `-01-01` olan M satırlarında.

| # | çift | K satır · gün | F satır · gün | K kaynağı | F kaynağı (dosyada) | TDV (rakamı taşıyan cümle) | hüküm | önerilen düzeltme |
|---|---|---|---|---|---|---|---|---|
| 1 | lehistan · Potop | `devletler.js:739` 1655-07-01 | `kronoloji_lehistan.js:293` 1655-07-25 | yok | "el-kitabi" (kaynak adı değil) | `polonya`: "Birinci Kuzey Savaşı (1655-1660)" — yalnız yıl aralığı | **bulunamadı** (gün) | ikisinin de günü kaynaksız; F'nin günü kaynak ister, K düşebilir (aynı olay) |
| 2 M | venedik · Girit Savaşı başı | `:369` 1645-01-01 | `kronoloji_venedik.js:402` 1645-08-22 | yok | TDV `girit` yıl + "⚠️ GÜN DOĞRULANMADI" | `girit`: "Hanya Kalesi'ni aldı (1055/1645)" — Hanya'yı tarihliyor, gün yok (1055 = Şub 1645–Şub 1646; cümle 1645 diyor) | **bulunamadı** (gün) · yıl uyumlu | K sil (mükerrer); F'nin 22 Ağustos'u kaynak ister. -01-01 kaynaklı? **EVET** |
| 3 | venedik · Kandiye | `:370` 1669-09-27 | `:427` 1669-09-06 | yok | TDV `girit` | `girit`+`kandiye`: "9 Rebîülâhir 1080 / 6 Eylül 1669" teslim anlaşması | **B doğru** | K → 1669-09-06 ya da sil |
| 4 | venedik · 1684 | `:371` 1684-01-01 "Mora'yı fethetti (1699'a dek)" | `:432` 1684-03-05 Kutsal İttifak'a katılma | yok | "⚠️ GÜN DOĞRULANMADI" | `venedik`: "1684-1699" savaşı · `mora`: "1095 (1684) ile 1097 (1686) yılları arasındaki savaşlar sırasında … Morosini … bütün yarımadayı ele geçirdi" | **AYRI olay** — K fethi 1684'e koyuyor, TDV 1684-1686'ya yayıyor | K metni "Kutsal İttifak savaşı başladı" olsun ya da fetih ayrı madde; F'nin günü kaynak ister |
| 5 | venedik · Mora'nın geri alınışı | `:373` 1715-06-25 | `:481` 1715-07-01 | yok | TDV `mora` + "⚠️ GÜN DOĞRULANMADI" | `mora`: "(1127/1715 yazı)" — mevsim, gün yok | **bulunamadı** (gün) | ikisi de kaynaksız gün; tek madde, gün sorusu açık |
| 6 | bizans · İznik | `:90` 1331-03-02 | `kronoloji_bizans.js:181` 1331-03-01 | yok | "bizans" | `iznik` §2: "şehir Orhan Bey'in eline geçmiştir (2 Mart 1331)" | **A doğru** | F → 1331-03-02 |
| 7 | bizans · 1422 kuşatması | `:95` 1422-06-10 | `:454` 1422-06-08 | yok | "bizans" | `murad-ii`: "Bizans üzerine yürüdü (Receb 825 / Haziran 1422)" — gün yok | **bulunamadı** (gün) + TDV iç uyumsuzluğu §3 | ikisi de kaynaksız gün; tek madde |
| 8 M | memluk · Burcî geçişi | `:113` 1382-01-01 | `kronoloji_memluk.js:170` 1382-11-27 | yok | TDV `berkuk` yıl; gün Britannica | `berkuk`: "Berkuk'u sultan ilân etti (1382)" | **B** (yıl TDV, gün akademik — doğrulanmadı) | K sil. -01-01 kaynaklı? **EVET** |
| 9 | kırım · Sarı Sular 1648 | `:216` 1648-05-01 | `kronoloji_kirim.js:311` 1648-05-16 | yok | "kirim (TDV); tarih data/kronoloji_lehistan.js:429 ile birebir" — **atlas kaydı dayanak olamaz (D207)** | `kirim`: "İslâm Giray 1648-1653 yılları arasında Lehistan'a seferler yaptı" | **bulunamadı** (gün) | ikisi de kaynaksız gün; F'nin "lehistan.js ile birebir" dayanağı kaldırılmalı |
| 10 | macaristan · Dózsa | `:685` 1514-07-15 "isyan bastırıldı" | `kronoloji_macaristan.js:364` 1514-07-20 "idamı" | yok | Engel (2001) s. 357 | `macaristan`: "1514'te cereyan eden köylü ayaklanması" — yıl | **bulunamadı** (K) · F akademik · iki alt-olay (bastırma ↔ idam) | K'nın günü kaynak ister; ayrı alt-olay olarak kalabilir |
| 11 M | fransa · Kapitülasyonlar | `:798` 1536-01-01 | `kronoloji_fransa.js:277` 1536-02-18 | yok | TDV `fransa` | `fransa` §3: "18 Şubat 1536'da … Jean de la Forest ile … İbrâhim Paşa arasında … anlaşma" | **B doğru** | K sil. -01-01 kaynaklı? **HAYIR** (TDV gün veriyor) |
| 12 | almanya · 1918 | `:1510` 1918-11-11 | `kronoloji_almanya.js:676` 1918-11-09 | yok | Blackbourn | `almanya` §2: "tahttan feragat etmek zorunda kalan (9 Kasım 1918) … Aynı gün Alman Cumhuriyeti ilân edildi"; 11 Kasım = Compiègne Mütarekesi | **B doğru** (K mütareke günüyle karışmış) | K → 1918-11-09 ya da sil |
| 13 M | akkoyunlu · Bingöl | `:515` 1467-01-01 | `kronoloji_akkoyunlu.js:308` 1467-11-10 | yok | uzun-hasan… | `uzun-hasan`: "(12 Rebîülâhir 872 / 10 Kasım 1467)" | **B doğru** | K sil. **HAYIR** |
| 14 | karakoyunlu · 1406 "Celâyirlileri yenip Tebriz" (W26 ayrı #3) | `:546` 1406-01-01 | `kronoloji_karakoyunlu.js:246` 1406-10-15 Aras | yok | karakoyunlular | `karakoyunlular`: Aras'ta "Ebû Bekir Mirza'yı yendi (2 Cemâziyelevvel 809 / 15 Ekim 1406)" — rakip **Timurlu**, Celâyirli değil; "Serdrûd'da … (16 Zilkade 810 / 13 Nisan 1408). Serdrûd zaferi Kara Yûsuf'a Azerbaycan'ı kazandırdı" | **AYRI olay doğrulandı · K yanlış** (içerik + yıl). K'nın anlattığı Azerbaycan kazancı = dosyadaki `:252` 1408-04-13 Serdrûd | K sil (dosyada 1408-04-13 var) ya da K → 1408-04-13 |
| 15 M | karakoyunlu · 1410 | `:547` 1410-01-01 "Celâyirli'yi yıkıp Bağdat'ı aldı" | `:264` 1410-08-30 Esed | yok | karakoyunlular | "Esed köyünde … (28 Rebîülâhir 813 / 30 Ağustos 1410)"; Bağdat: "Aynı yıl … Şah Mehmed Bağdat'ı fethetti" — `814/1411` (814 = Nis 1411–Nis 1412: aday 1411 · 1412; cümle 1411) | **B doğru** (Esed) · K'nın "Bağdat" kısmı 1411 | K sil; Bağdat ayrı madde gerekiyorsa 1411-01-01. **HAYIR** |
| 16 M | karakoyunlu · Kara Yûsuf'un ölümü | `:548` 1420-01-01 | `:306` 1420-11-13 | yok | karakoyunlular | "(7 Zilkade 823 / 13 Kasım 1420)" | **B doğru** | K sil. **HAYIR** |
| 17 M | karakoyunlu · Cihan Şah tahta | `:549` 1438-01-01 | `:382` 1438-04-19 (ilk ölçümde yanlışlıkla `:374` İskender eşlenmişti) | yok | karakoyunlular | `cihan-sah`: "19 Nisan 1438'de 'Muzafferüddin' lakabıyla Karakoyunlu tahtına geçti" | **B doğru** · TDV iki maddesi arasında ÇELİŞKİ §3 | K sil. **HAYIR** |
| 18 M | karakoyunlu · Şâhruh'un ölümü | `:550` 1447-01-01 | `:406` 1447-03-13 | yok | karakoyunlular · cihan-sah | `timurlular`: "Rey yakınında öldü (12 Mart 1447)"; `karakoyunlular`: "Şâhruh'un vefatı üzerine de (851/1447) Sultâniye ve Kazvin'i ülkesine kattı" | **TDV üçüncü gün: 12 Mart** (F 1 gün kayık) | K sil; F → 1447-03-12 (ölüm); ilhak 851 H'de (19 Mart 1447 sonrası) ayrı olay. **HAYIR** |
| 19 | isveç · Bender | `:860` 1709-08-01 | `kronoloji_isvec.js:281` 1709-08-08 | yok | isvec (TDV) | `isvec` §2: "Özü'den Bender'e geçerek Yûsuf Paşa ile buluştu (8 Ağustos 1709)" | **B doğru** | K → 1709-08-08 ya da sil |
| 20 M | timurlu · Halep ve Şam | `:1819` 1400-01-01 | `kronoloji_timurlu.js:85` 1400-10-01 | yok | TDV `timur`: "1400-1401: Halep, Hama, Humus ve Şam…" | `timur`: "Suriye'de Halep, Hama, Humus ve Dımaşk gibi şehirleri aldı" — **TARİHSİZ**; `timurlular`: "1399-1400 döneminde Memlükler'i … yendi". **F'nin tırnaklı "1400-1401" alıntısı TDV gövdesinde YOK** (önbellekteki hiçbir TDV sayfasında geçmiyor) | **bulunamadı** (gün) · alıntı kusuru | F'nin alıntısı düzeltilmeli (tuzak ⑧); Halep günü kaynak ister. -01-01 kaynaklı? **EVET** (TDV gün vermiyor) |
| 21 M | timurlu · Şâhruh | `:1822` 1409-01-01 | `:124` 1409-05-01 | yok | TDV timurlular, "gün DOĞRULANMADI" | `sahruh`: "27 Zilhicce 811 (13 Mayıs 1409) tarihinde … Semerkant'a giren Şâhruh" | **TDV üçüncü gün: 13 Mayıs** | K sil; F → 1409-05-13. **HAYIR** |
| 22 | timurlu · 1449 "Uluğ Bey tahta çıktı" (W26 ayrı #1) | `:1823` 1449-01-01 | `:153` 1449-10-25 öldürüldü | yok | TDV `ulug-bey` | `timurlular`: "öldü (12 Mart 1447) … Yerine oğlu Uluğ Bey geçti (1447-1449)"; liste "Uluğ Bey 850 (1447)". Ölüm: "Devletşah … 8 Ramazan 853 (25 Ekim 1449) … mezar taşında 10 Ramazan" | **AYRI olay doğrulandı · K'nın YILI yanlış** (tahta 1447). K = dosyadaki `:148` 1447-01-01 "Uluğ Bey tahta çıktı"nın mükerreri. F'nin günü TDV'de ÇELİŞKİLİ (8 ↔ 10 Ramazan 853) | K sil (dosyada 1447 var); F'ye "ölüm günü çelişkili: Devletşah 25 Ekim · mezar taşı 10 Ramazan" notu |
| 23 M | atina · Nerio | `:989` 1388-01-01 | `kronoloji_atina_dukaligi.js:66` 1388-05-02 | yok | TDV atina 1387 + Setton; dosya çelişkiyi kendi yazmış | `atina`: "1387'de ise … Nerio Acciajuoli tarafından ele geçirildi" | **ÇELİŞKİ** (TDV 1387 ↔ Setton 1388-05-02 Akropolis) | tek seçilmez; K sil, F'de çelişki notu kalsın. -01-01 kaynaklı? **EVET ama YIL TDV ile çelişiyor** |
| 24 M | gürcistan · Tiflis | `:1054` 1578-01-01 | `kronoloji_gurcistan.js:159` 1578-08-24 (ilk ölçümde `:153` Çıldır eşlenmişti) | yok | — | `tiflis`+`gurcistan`: "24 Ağustos'ta Tiflis şehrini savaşsız ele geçirdiler"; Çıldır ayrı: `cildir-eyaleti` "9 Ağustos 1578" | **B doğru** | K sil. **HAYIR** |
| 25 | gürcistan · II. Herakli birleşme | `:1056` 1762-01-01 | `:256` 1762-01-08 | yok | TDV gurcistan, yalnız yıl alıntısı | `gurcistan` §3: "1762 yılında Irakli, Kartli ve Kahet'i bir idare altında birleştirdi" | **A** (yıl hassasiyeti kaynaklı) · F'nin 8 Ocak'ı kaynaksız (kaynağı yıl diyor; D210) | F → 1762-01-01 ya da günün kaynağı yazılsın; K sil |
| 26 M | katalan · Bizans hizmeti | `:998` 1303-01-01 | `kronoloji_katalan.js:13` 1303-09-01 | yok | Setton (1975) · "gün yaklaşıktır" | **TDV kapsamıyor** (başlık aramasında madde yok; `atina` 1311'den başlıyor) | yıl kaynaklı (Setton) · **gün bulunamadı** ("yaklaşık" gün sahte kesinliktir) | F → ay biliniyorsa hassasiyet alanıyla, değilse 1303-01-01; K sil. -01-01 kaynaklı? **EVET** |
| 27 M | nakşa · Barbaros | `:1010` 1537-01-01 | `kronoloji_naksa_dukaligi.js:81` 1537-11-01 | yok | TDV naksa (İNGİLİZCE alıntı) · Slot · "gün yaklaşıktır" | `naksa`: "944-945 (1537-1538) yıllarında Barbaros Hayreddin Paşa'nın adalar seferiyle Osmanlı kontrolü altına girdi" (944 = Haz 1537–May 1538). **F'nin İngilizce tırnaklı cümlesi TDV'de yok** | **A** (yıl) · F'nin günü kaynaksız + alıntı kusuru | F'nin alıntısı Türkçe aslıyla değiştirilsin, gün → yıl; K sil. -01-01 kaynaklı? **EVET** |
| 28 | rodos · teslim | `:1021` 1522-12-25 | `kronoloji_rodos_sovalyeleri.js:248` 1522-12-21 | yok | TDV 20 Aralık + Vatin 21 Aralık; dosya farkı kendi bildirmiş | `rodos`: "1 Safer 929'da (20 Aralık 1522) … Rodos'u fethetti" | **ÇELİŞKİ** (TDV 20 ↔ Vatin 21) · K'nın 25'i hiçbir kaynakta yok | K sil ya da kaynaklı güne çek; F'de iki gün notu kalsın (TDV esas: 20 Aralık) |
| 29 | safevi · 1503 "Diyarbekir, Bağdat ve Musul" (W26 ayrı #2) | `:128` 1503-01-01 | `kronoloji_safevi.js:83` 1503-06-01 Hemedan | yok | Iranica AQ QOYUNLU | `safeviler`: Hemedan "909'da (1503)"; "Şah İsmâil 912'de (1507) Erzincan'a yöneldi … Diyarbekir ve yöresi Safevîler'e bağlanmış oldu. Ertesi yıl Bağdat hâkimiyet altına alındı." `sah-ismail`: "913 (1507) … 914'te (1508) Irâk-ı Arab'a yürüdü … Bağdat savaşsız zaptedildi" | **AYRI olay doğrulandı · K'nın YILI yanlış**: Diyarbekir 1507, Bağdat 1508; Musul TDV'de **bulunamadı**. Diyarbekir hicrî 912 (May 1506–May 1507) ↔ 913 (May 1507–May 1508) iki aday | K'yı böl: Diyarbekir 1507-01-01 · Bağdat 1508-01-01 (dosyada ikisi de YOK — taşınmalı); Musul kaynak ister |
| 30 | safevi · İsfahan 1722 | `:136` 1722-10-23 "İsfahan düştü, Şah tahttan indirildi" | `:395` 1722-10-25 Mahmud şah ilanı | yok | Iranica MAḤMUD ḠALZAY | `safeviler`: "Sultan Hüseyin Şah 30 Muharrem 1135'te (10 Kasım 1722) kayıtsız şartsız teslim olmak zorunda kaldı" (1 Muharrem 1135 ≈ 12 Ekim 1722 → kendi içinde tutarlı) | **ÇELİŞKİ** (K'nın olayı: TDV 10 Kasım ↔ K 23 Ekim, K kaynaksız) · F ayrı olay (Mahmud'un tahta çıkışı) | K → TDV esas 1722-11-10; 23 Ekim'i veren kaynak adıyla bulunursa çelişki notu. F kalır |
| 31 M (yeni) | kırım · Moskova 1571 | `:215` 1571-05-24 | `kronoloji_kirim.js:207` 1571-01-01 | yok | "devlet-giray (TDV); … eski kayıtla (1571-05-24) örtüşüyor, gün TDV'de verilmiyor" | `devlet-giray`: "1571'de Oka suyunda Rus müdafaa hattını yarıp Moskova önlerine geldi ve burayı ateşe verdikten sonra geri döndü" | **F (yıl) kaynaklı · K'nın günü bulunamadı** | K sil ya da 24 Mayıs için akademik kaynak; F'nin "eski kayıtla örtüşüyor" ibaresi dayanak değil (D207). Burada -01-01 DOSYA tarafında ve **kaynaklı** |
| 32 M (yeni) | macaristan · Anjou Károly | `:678` 1308-06-15 | `kronoloji_macaristan.js:126` 1308-11-27 | yok | Engel (2001) s. 124-131 | `macaristan`: "I. Károly 1308'de kral seçildi ve 1310'da taç giydi" | **B** (yıl TDV, gün akademik) · K'nın 15 Haziran'ı TDV'de yok | K sil |
| 33 M (yeni) | isveç · XII. Karl'ın ayrılışı | `:861` 1714-02-01 | `kronoloji_isvec.js:302` 1714-10-11 | yok | TDV isvec | `isvec` §2: "12 Temmuz 1714 tarihli mektubu ile … dönüş izni verildi [Ağustos]. 19 Eylül'de yola çıkıp 11 Ekim'de memleketine ulaştı" | **B doğru** (varış) · K'nın 1 Şubat'ı yanlış; "terk etti" = 19 Eylül | K sil ya da → 1714-09-19 (yola çıkış) |

## 3. TDV'nin kendi içindeki uyumsuzluklar (§4 ⑥ — bildirilir, seçilmez)
1. **Cihan Şah / İskender (satır 17):** `cihan-sah` İskender'in öldürülmesinden SONRA "19 Nisan 1438"de tahta çıktı diyor;
   `karakoyunlular` ölümü "Zilkade 841 / Mayıs 1438" veriyor. 1 Zilkade 841 ≈ 25 Nisan 1438 ⇒ sıra ters.
   Dosyada `:374` 1438-05-01 (İskender) `:382` 1438-04-19'dan (tahta) SONRA sıralanıyor — okuyucuya ters akış.
2. **1422 kuşatması (satır 7):** `murad-ii` "Receb 825 / Haziran 1422". 26 Muharrem 825 = 20 Ocak 1422'den sayınca
   1 Receb 825 ≈ 21 Haziran 1422 ⇒ K (10 Haz) ve F (8 Haz) Receb'e düşmüyor.
3. **Hemedan (satır 29):** `safeviler` "909 (1503)", `sah-ismail` "908/1503". Sınır Haziran 1503; ikisi de 1503 verir.
4. **Diyarbekir (satır 29):** `safeviler` "912 (1507)", `sah-ismail` "913 (1507)" — iki hicrî yıl, miladî 1507 ortak.
5. **Uluğ Bey'in ölümü (satır 22):** aynı maddede 8 Ramazan 853 (Devletşah, 25 Ekim 1449) ↔ 10 Ramazan (mezar taşı).

## 4. Yan bulgular (konu dışı, kanıtıyla)
- `kronoloji_isvec.js:298` 1714-07-12 "XII. Karl'a … izin verildi": TDV'ye göre 12 Temmuz kralın MEKTUBUNUN tarihi, izin "Ağustos içinde".
- `kronoloji_kirim.js:311` ve `:207` dayanak olarak başka atlas kaydını gösteriyor (D207).
- Tırnaklı ama TDV gövdesinde bulunmayan "alıntılar": `kronoloji_timurlu.js:85` ("1400-1401: …"), `kronoloji_naksa_dukaligi.js:81` (İngilizce).
- `kronoloji_iran.js`'teki "1507-01-01 Diyarbakır ve Bağdat'ın fethi": TDV'ye göre Bağdat 1508.

## 5. Öngörü tuttu mu (ilk 27 çift; W26'nın 3 ayrı olayı hariç)
| kova | öngörü | ölçülen | |
|---|---|---|---|
| TDV ile çözülen | 15 ± 3 | **15** (3,4,6,11,12,13,15,16,17,18,19,21,24,25,27) | ✓ |
| akademikle çözülen | 5 ± 2 | **2** (8 Britannica gün, 26 Setton yıl) | ✗ — akademik kaynak bu turda açılmadı |
| ÇELİŞKİ | 3 ± 2 | **3** (23, 28, 30) | ✓ |
| bulunamadı | 2 ± 2 | **7** (1,2,5,7,9,10,20) | ✗ — TDV'nin gün taneciğini fazla tahmin ettim |
| W26 dışında ayrı olay | ≥ 2 | **3** (4 venedik, 10 Dózsa alt-olay, 30 teslim ↔ Mahmud) · adını verdiğim gürcistan 1578 YANLIŞTI (eşleme hatası) | ✓ sayı / ✗ ad |
| künye `kaynak:` dolu | 0 | **0 / 33** | ✓ |

## 6. Özet sayılar (33 satır)
| hüküm | n | satırlar |
|---|---|---|
| A doğru (künye) | 3 | 6 · 25 · 27 |
| B doğru (dosya) | 12 | 3 · 8 · 11 · 12 · 13 · 15 · 16 · 17 · 19 · 24 · 32 · 33 |
| TDV üçüncü bir gün veriyor | 2 | 18 (12 Mart) · 21 (13 Mayıs) |
| ÇELİŞKİ | 3 | 23 · 28 · 30 |
| bulunamadı (gün) | 9 | 1 · 2 · 5 · 7 · 9 · 10 · 20 · 26 · 31 |
| AYRI olay / künyenin yılı yanlış | 4 | 4 · 14 · 22 · 29 |

- W26'nın 3 ayrı olayı **üçü de ayrı ve üçünde de KÜNYENİN YILI YANLIŞ**: 14 → 1408 (Serdrûd, dosyada var) ·
  22 → 1447 (dosyada var) · 29 → Diyarbekir 1507 / Bağdat 1508 (dosyada YOK, taşınmalı).
- MÜKERRER 17'nin künye tarafında `-01-01` olan 14'ü: **6 kaynaklı** (TDV/kaynak gün vermiyor: 2, 8, 20, 23, 26, 27) ·
  **8 kaynaksız** (TDV gün veriyor: 11, 13, 15, 16, 17, 18, 21, 24). Kırım 1571'de `-01-01` dosya tarafında ve kaynaklı.

## 7. Değişen dosyalar
- `denetim/KRONO-CELISKI-1006.md` (yeni, bu dosya). `data/`, `arac/`, `js/`'e dokunulmadı; diff yazılmadı; commit yok.

# TDV-KONUM — EKSIK-ADAY'ın koordinatsız 110 adayı: sınıf ve konum

Ölçen: LAB SALI · 4 Kasım 2026 · `konum_yaz.py` · EMRELİC kuralı (TDV tarifi → GeoNames beyanlı konum; tutmazsa koordinat yok).

**Özet:** ANTİK YERLEŞİM 50, YER DEĞİL 34, OLAY YERİ 13, YERLEŞİM 10, KALE/YAPI 3. YERLEŞİM'lerin 10'i konumlu.

- **TDV:** Arad, Otrar ve Karlofça için TDV aramasında madde başlığı çıkmadı (yalnız madde içi anılma); TDV tarifi okunamadı. Kural basamağı 4 uygulandı: GeoNames, ad + ülke maddeyle tutuyorsa beyanlı konum.
- **OLAY YERİ ve KALE/YAPI petek noktası değildir** (toprağı yanlış sahiplere dağıtır) — kronoloji odağı olarak kalır.
- **ANTİK YERLEŞİM:** Pleiades araması çok sonuç verdi ya da başlık uyuşmadı; Pleiades kimliği elle seçilene dek koordinat yok.

- **Mükerrer (ad + 3 km):** 10 konumun hiçbirinin 3 km'sinde atlas noktası yok; en yakınlar: Karlofça–Varadin 7,5 km, Nukuʻalofa–Nukuleka 7,9 km, Sevr–Paris 10,6 km, Bucaş–Yazlofça 12,7 km (ölçüldü, girdi.km).

## YERLEŞİM (KASA ekleyebilir — sahip madde kaynağıyla teyit)

| # | ad | koordinat | konum dayanağı | madde |
|---|---|---|---|---|
| 7 | Karlofça | 45.20278, 19.93361 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Sremski Karlovci (alt adlar arasında Karlofça), Sırbistan, Voyvodina · https://www.geonames.org/3190101/sremski-karlovci.html | 1699-01-26 — Karlofça Antlaşması — ilk büyük toprak kaybı |
| 23 | Arad | 46.18333, 21.31667 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Arad, Romanya, Arad ili merkezi · https://www.geonames.org/686254/arad.html | 1849-08-13 — Világos'ta Macar ordusu Ruslara teslim oldu — Macar Devrimi bastırıldı |
| 25 | Nukuʻalofa | -21.13667, -175.20111 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Nuku'alofa, Tonga başkenti · https://www.geonames.org/4032402/nuku-alofa.html | 1893-02-18 — I. George Tupou'nun ölümü, II. George Tupou'nun tahta çıkışı (Tonga) |
| 27 | Otrar | 42.91333, 68.34361 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Otrar (Otyrar), Kazakistan, Türkistan ili — yerleşim; antik höyük (Otyrar-tobe) yakını, KASA höyük konumunu tercih edebilir · https://www.geonames.org/1520295/otrar.html | 1218-01-01 — Otrar'da 450 kişilik Moğol kervanı öldürüldü; Alâeddin Muhammed Cengiz |
| 28 | Çayeli | 41.08583, 40.72194 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Çayeli (Mapavri), Türkiye, Rize · https://www.geonames.org/749502/cayeli.html | 1916-03-08 — Rize'nin Rus işgali: Doğu Karadeniz kıyısının düşüşü |
| 37 | Bucaş | 49.06222, 25.39472 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Buchach (Bucac), Ukrayna, Ternopil · https://www.geonames.org/711348/buchach.html | 1672-10-18 — Bucaş Antlaşması — en geniş sınırlar |
| 38 | Küçük Kaynarca | 43.99278, 27.50694 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Kaynardzha, Bulgaristan, Silistre · https://www.geonames.org/730504/kaynardzha.html | 1774-07-21 — Küçük Kaynarca Antlaşması |
| 39 | Sevr | 48.82278, 2.21750 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Sèvres (alt ad Sevr), Fransa, Hauts-de-Seine (ilk sorgu Deux-Sèvres/Niort verdi — elle düzeltildi) · https://www.geonames.org/2974678/sevres.html | 1920-04 — TBMM'nin açılışı ve Sevr |
| 40 | Tepedelen | 40.29583, 20.01917 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Tepelenë, Arnavutluk · https://www.geonames.org/781443/tepelene.html | 1820-03-01 — Tepedelenli Ali Paşa'nın azli ve Yanya kuşatmasının başlaması |
| 42 | Karánşebeş (Caransebeş) | 45.41667, 22.21667 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Caransebeş, Romanya, Caraș-Severin · https://www.geonames.org/682729/caransebes.html | 1552-08-01 — Lugoş (Lugoj) ve Karánşebeş kalelerinin fethi — Temeşvar seferinin dev |

## OLAY YERİ (petek değil)

| # | ad | not | madde |
|---|---|---|---|
| 6 | Çamurlu | 1413 Çamurlu Savaşı (Bulgaristan, Samokov yöresi) | 1413-07 — Çelebi Mehmed birliği yeniden kurdu |
| 8 | Dumlupınar | Büyük Taarruz / Başkomutan Meydan Muharebesi | 1922-09-09 — Büyük Taarruz ve İzmir'in kurtuluşu |
| 24 | İnönü | İnönü muharebeleri | 1921-01-10 — Birinci İnönü Muharebesi: düzenli ordunun ilk zaferi |
| 29 | Karaburun | Börklüce Mustafa isyanı, Karaburun yarımadası | 1416-05-01 — Şeyh Bedreddin isyanı |
| 30 | Otlukbeli | 1473 savaşı | 1473-08-11 — Otlukbeli Savaşı |
| 31 | Mercidabık | 1516 savaşı | 1516-08-24 — Mercidabık Zaferi |
| 32 | Ridaniye | 1517 savaşı | 1517-01-22 — Ridaniye — Mısır'ın fethi ve hilâfet |
| 33 | Haçova (Mezőkeresztes) | 1596 meydan muharebesi | 1596-10-26 — Haçova Meydan Muharebesi |
| 54 | Kynoskephalai (Tesalya) | antik savaş yeri | -0196-01-01 — Kynoskephalai: Roma V. Philippos'u yendi; Makedonya Yunanistan'dan çek |
| 67 | Leuktra (Boiotia) | antik savaş yeri | -0370-01-01 — Leuktra: Teb ordusu Spartalıları yendi; Sparta kara üstünlüğünü yitird |
| 69 | Sybota (Epiros kıyısı) | antik savaş yeri | -0432-01-01 — Sybota: Korint–Korkyra savaşı Atina'yı müdahaleye çekti |
| 84 | Eltekeh | antik savaş yeri | -0700-01-01 — Sennakerib Yehuda seferinde Kush-Mısır ordusuyla Eltekeh'te karşılaştı |
| 94 | Kunaksa | antik savaş yeri | -0400-01-01 — Kunaksa Savaşı: Genç Kyros ağabeyi II. Artakserkses'e yenildi ve öldü |

## KALE/YAPI (petek değil)

| # | ad | not | madde |
|---|---|---|---|
| 34 | Granbosa (Gramvousa) | ada kalesi | 1692-01-01 — Granbosa Kalesi'nin fethi — Girit'in Venedik'te kalan kayalık kaleleri |
| 36 | Spinalonga | ada kalesi | 1715-01-01 — Suda ve Spinalonga kalelerinin fethi — Girit'te son Venedik izinin sil |
| 41 | Pandeleimon Manastırı | Yanya gölü adasında manastır | 1822-02-14 — Tepedelenli Ali Paşa'nın öldürülmesi — Yanya kuşatmasının sonu |

## ANTİK YERLEŞİM (koordinat yok)

| # | ad | not | madde |
|---|---|---|---|
| 3 | Teb | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0185-01-01 — Teb isyanı bastırıldı: Komanos Yukarı Mısır'ı Ptolemaios hâkimiyetine  |
| 4 | Efes | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0087-01-01 — Mithridates Asia eyaletini işgal etti; Efes Vespers'i (80.000 Romalı k |
| 10 | Elefantin | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0024-01-01 — Kandake önderliğinde Kush Elefantin, Syene ve Philae'yi aldı; Augustus |
| 11 | Kalhu (Nimrud) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0878-01-01 — II. Aşşurnasirpal Kalhu'yu (Nimrud) Asur'un yeni başkenti yaptı |
| 12 | Pınarbaşı Höyüğü | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -7999-01-01 — Pınarbaşı (Konya havzası, Karaman): iskân sona erer |
| 13 | Dzheitun (Ahal) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -5926-01-01 — Jeitun: Jeitun yerleşimi sona erer (Bayes) |
| 21 | Qalʿat Sherqat | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0613-01-01 — Aşşur (Eski Asur dönemi belge başlangıcı ve MÖ 614 düşüşü): Aşşur şehr |
| 48 | Nikopolis (Doğu Pontus) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0065-01-01 — Pompeius Mithridates'i yendi; Pontus Roma'ya bağlandı |
| 56 | Sikyon | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0250-01-01 — Aratos Sikyon'u Akhaia Birliği'ne kattı |
| 57 | Argos | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0271-01-01 — Pyrrhos Argos'ta öldü |
| 61 | Lysimakheia (Gelibolu Yarımadası) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0308-01-01 — Lysimakhos Lysimakheia'yı kurdu: Trakya Khersonesos'unda başkent |
| 62 | Baktra | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0326-01-01 — Baktria ve Sogdiana İskender'e boyun eğdi; İskender Roksane ile evlend |
| 64 | Miletos | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0333-01-01 — Batı Anadolu kıyısı İskender'e geçti: Efes, Miletos ve Halikarnassos |
| 65 | Halikarnassos | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0333-01-01 — Batı Anadolu kıyısı İskender'e geçti: Efes, Miletos ve Halikarnassos |
| 66 | Ithome (Messene) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0369-01-01 — Messenia Sparta'dan ayrıldı; Messene kuruldu |
| 68 | Teb (Boiotia) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0378-01-01 — Pelopidas Teb'i kurtardı; Sparta garnizonu Kadmeia'dan atıldı |
| 70 | Eleusis (Attika) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0504-01-01 — Korint'in çekilmesiyle Peloponnes Birliği'nin Atina seferi dağıldı |
| 73 | Nisibis | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | 0198-01-01 — Septimius Severus Mezopotamya'yı eyalet yaptı; Ktesifon yağmalandı |
| 78 | Premnis (Qasr İbrim) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0022-01-01 — Petronius Kush'a karşı sefere çıkıp Pselkis, Premnis ve Napata'yı aldı |
| 80 | Philae | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0028-01-01 — Cornelius Gallus ilk Mısır prefekti oldu; Heroonpolis ve Teb isyanları |
| 85 | Beth-Shean | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1293-01-01 — I. Seti Güney Kenan'dan Fenike kıyısına kadar sefer yaptı: Mısır Kenan |
| 86 | Yenoam | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1293-01-01 — I. Seti Güney Kenan'dan Fenike kıyısına kadar sefer yaptı: Mısır Kenan |
| 87 | Kadeş | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1293-01-01 — I. Seti Güney Kenan'dan Fenike kıyısına kadar sefer yaptı: Mısır Kenan |
| 88 | Akhetaton | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1347-01-01 — IV. Amenhotep (Akhenaton) Mısır'ın başkentini Akhetaton'a (Amarna) taş |
| 89 | Amada | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1424-01-01 — II. Amenhotep Nubya'da Napata'ya ulaştı ve güney sınır steli dikti: Mı |
| 90 | Semne | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1866-01-01 — III. Sesostris Semne'de Mısır'ın güney sınırını II. Şelale'ye çekti; N |
| 91 | Khalkedon | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | 0451-10-08 — Khalkedon Konsili: İskenderiye Patriği Dioskoros mahkûm edildi; Mısır  |
| 92 | Lysimakheia (Trakya kıyısı) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0280-01-01 — Selevkos I Ptolemaios Keraunos tarafından öldürüldü; I. Antiokhos taht |
| 96 | Milet | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0493-01-01 — Lade Deniz Savaşı: Pers donanması İyon filosunu yendi; Milet düştü |
| 97 | Ragai | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0520-05-08 — Dareios'un ordusu Medya isyancısı Fravartiş'i (Phraortes) yendi |
| 99 | Aşkelon | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0603-12-01 — II. Nabukadnezar Aşkelon'u aldı, kralını esir etti ve şehri harabeye ç |
| 100 | Lakiş | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0700-01-01 — Sennacherib Yahuda'yı işgal etti; Lakiş'i aldı, Kudüs'ü kuşattı |
| 102 | Vaşşukanni | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1499-01-01 — Mitanni (Hanigalbat) krallığı Habur-Fırat bölgesinde kuruldu |
| 103 | Djenné-Djenno | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0299-01-01 — Cenne-Ceno (Jenne-jeno): başlar |
| 104 | Teouma | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0944-01-01 — Teouma (Lapita mezarligi), Efate: başlar |
| 105 | Monte Verde | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -12599-01-01 — Monte Verde II: başlar |
| 106 | Caral-Supe | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -2999-01-01 — Norte Chico (Caral-Supe) Geç Arkaik kompleksi: başlar |
| 107 | Stonehenge | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -2871-01-01 — Stonehenge (Aşama 1: hendek ve set): başlar |
| 108 | San Martin Tilcajete | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0374-01-01 — San Martin Tilcajete ilk meydaninin Monte Alban tarafindan yakilmasi:  |
| 109 | Cueva San Marcos | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -3184-01-01 — Tehuacan Vadisi, San Marcos Magarasi - en eski misir (partial domestik |
| 111 | Los Morteros | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -3749-01-01 — Los Morteros (Chao Vadisi, Peru) - en eski kerpic anit mimarisi: Ameri |
| 120 | Izapa | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0749-01-01 — Izapa (Chiapas): Orta Formatif krallik baskenti ve ilk beyaz kil yuzey |
| 121 | Mulifanua (SU-17-1) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0864-01-01 — Mulifanua (Lapita sitesi), Upolu, Samoa: Mulifanua: Samoa'da Lapita is |
| 124 | Talepakemalai (site ECA) | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1284-01-01 — Talepakemalai (ECA), Eloaua Adasi, Mussau: Talepakemalai (Mussau) Lapi |
| 126 | Kamgot | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -1324-01-01 — Kamgot (Erken Lapita yerlesmesi), Babase Adasi, Anir Adalari: Kamgot ( |
| 131 | Afontova Gora-2 | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -14961-01-01 — Afontova Gora-2 (AG-2), Yenisey, Krasnoyarsk yakini: Afontova Gora-2:  |
| 137 | Hisarlık | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -2919-01-01 — Troya I (Hisarlık, Erken Tunç Çağı başı): Troya Ia evresi başlar (Weni |
| 139 | Shillourokambos | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -9149-01-01 — Klimonas ve Shillourokambos (Kıbrıs, Erken Aseramik Neolitik): Kıbrıs' |
| 148 | Qart-ḥadašt | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0759-01-01 — Karthago - kuruluş geleneği 814/813 vs arkeolojik ~760: Kartaca: kesin |
| 150 | Alexandreia | Pleiades'te tek/yakın eşleşme yok — Pleiades kimliği elle seçilmeli (koordinat yok) | -0331-01-01 — Iskenderiye'nin kurulusu: İskenderiye kurulur (gelenek) |

## YER DEĞİL

| # | ad | not | madde |
|---|---|---|---|
| 15 | Tongatapu | kişi, kültür, dönem, bölge ya da ada adı | -0742-01-01 — Nukuleka (ilk Lapita kiyilanisi), Tongatapu: Tongatapu Lapita evresi s |
| 16 | Tembladera | kişi, kültür, dönem, bölge ya da ada adı | -0799-01-01 — Pampa de las Hamacas töreni merkezleri (Jequetepeque, Formatif): Tören |
| 18 | Kom el-Ahmar | kişi, kültür, dönem, bölge ya da ada adı | -3463-01-01 — Hierakonpolis HK11C (Naqada IC-IIB iskan): HK11C iskânı sona erer (Naq |
| 22 | Tell Halaf (Guzana) | kişi, kültür, dönem, bölge ya da ada adı | -5499-01-01 — Halaf kültürü: Halaf döneminin en geç tarihi (üst sınır) |
| 26 | Berka | Berka = Bingazi/Kirenayka bölgesi | 1911-10-16 — Derne'nin İtalyan çıkarmasıyla elden çıkışı |
| 110 | Valle de Tehuacan | kişi, kültür, dönem, bölge ya da ada adı | -3184-01-01 — Tehuacan Vadisi, San Marcos Magarasi - en eski misir (partial domestik |
| 112 | Southern Neolithic | kişi, kültür, dönem, bölge ya da ada adı | -2999-01-01 — Güney Hint Neolitiği (Ashmound geleneği, Deccan): Güney Hint: Kodekal' |
| 113 | Mādā | kişi, kültür, dönem, bölge ya da ada adı | -0699-01-01 — Med Devleti (Hegmatana merkezli): Med devleti: Deioces dönemi başlar ( |
| 114 | Proto-Elamite script | kişi, kültür, dönem, bölge ya da ada adı | -3199-01-01 — Proto-Elam yazı sistemi (Susa): Proto-Elam yazısı ortaya çıkar |
| 115 | Trypillia A1-2 | kişi, kültür, dönem, bölge ya da ada adı | -4648-01-01 — Erken Trypillia (Cucuteni-Trypillia, A1-2 evresi): Erken Trypillia gen |
| 116 | Precucuteni II | kişi, kültür, dönem, bölge ya da ada adı | -4648-01-01 — Erken Trypillia (Cucuteni-Trypillia, A1-2 evresi): Erken Trypillia gen |
| 117 | Formative LBK | kişi, kültür, dönem, bölge ya da ada adı | -5499-01-01 — Formatif Linearbandkeramik (Transdanubia): Transdanubia'da Formatif LB |
| 118 | Transdanubien | kişi, kültür, dönem, bölge ya da ada adı | -5499-01-01 — Formatif Linearbandkeramik (Transdanubia): Transdanubia'da Formatif LB |
| 119 | Tradición Topará | kişi, kültür, dönem, bölge ya da ada adı | -0141-01-01 — Topará geleneği (Jahuay, Chincha): Topará: Jahuay iskânı başlar |
| 122 | 'Upolu | kişi, kültür, dönem, bölge ya da ada adı | -0864-01-01 — Mulifanua (Lapita sitesi), Upolu, Samoa: Mulifanua: Samoa'da Lapita is |
| 123 | Samoa | kişi, kültür, dönem, bölge ya da ada adı | -0864-01-01 — Mulifanua (Lapita sitesi), Upolu, Samoa: Mulifanua: Samoa'da Lapita is |
| 125 | Mussau Islands | kişi, kültür, dönem, bölge ya da ada adı | -1284-01-01 — Talepakemalai (ECA), Eloaua Adasi, Mussau: Talepakemalai (Mussau) Lapi |
| 127 | Anir Group | kişi, kültür, dönem, bölge ya da ada adı | -1324-01-01 — Kamgot (Erken Lapita yerlesmesi), Babase Adasi, Anir Adalari: Kamgot ( |
| 128 | Deer Stone-Khirigsuur Complex (DSKC) | kişi, kültür, dönem, bölge ya da ada adı | -1346-01-01 — Geyik Tasi-Hirigsuur Kompleksi (Deer Stone-Khirigsuur Complex), Mogoli |
| 129 | Lapita Cultural Complex | kişi, kültür, dönem, bölge ya da ada adı | -1449-01-01 — Lapita kulturu - Bismarck Takimadalari baslangici: Lapita Bismarck Tak |
| 130 | Bismarck Archipelago | kişi, kültür, dönem, bölge ya da ada adı | -1449-01-01 — Lapita kulturu - Bismarck Takimadalari baslangici: Lapita Bismarck Tak |
| 132 | Usolsky District | kişi, kültür, dönem, bölge ya da ada adı | -22206-01-01 — Mal'ta (Belaya Nehri, Baykal yakini) - MA-1 bireyi: Mal'ta (MA-1): Üst |
| 133 | Biainili | kişi, kültür, dönem, bölge ya da ada adı | -0899-01-01 — Urartu Krallığı (Tuşpa / Van): Urartu devleti oluşur (9. yy) |
| 135 | Šuppiluliuma II | kişi, kültür, dönem, bölge ya da ada adı | -1206-01-01 — II. Şuppiluliuma (son bilinen Hitit kralı) — tahta çıkışı: II. Şuppilu |
| 136 | Ḫattušili I | kişi, kültür, dönem, bölge ya da ada adı | -1649-01-01 — Hitit Eski Krallığı — I. Hattusili saltanatı (Labarna): I. Hattusili d |
| 140 | Buddha parinirvāṇa | kişi, kültür, dönem, bölge ya da ada adı | -0482-01-01 — Buda'nın parinirvana tarihi (kronoloji dayanağı): Buda'nın parinirvana |
| 141 | Bimbisāra | kişi, kültür, dönem, bölge ya da ada adı | -0542-01-01 — Magadha yükselişi (Bimbisara ve Ajatashatru): Bimbisara Magadha tahtın |
| 142 | Ajātaśatru | kişi, kültür, dönem, bölge ya da ada adı | -0542-01-01 — Magadha yükselişi (Bimbisara ve Ajatashatru): Bimbisara Magadha tahtın |
| 143 | Expulsio regum | kişi, kültür, dönem, bölge ya da ada adı | -0507-01-01 — Roma: Krallık -> Cumhuriyet (ilk konsüller) - YAZILI GELENEK: Roma: Kr |
| 144 | primi consules | kişi, kültür, dönem, bölge ya da ada adı | -0507-01-01 — Roma: Krallık -> Cumhuriyet (ilk konsüller) - YAZILI GELENEK: Roma: Kr |
| 145 | Hallstatt C | kişi, kültür, dönem, bölge ya da ada adı | -0669-01-01 — Hallstatt C -> D geçişi (Dietfurt Bayes modeli; geleneksel 616): Halls |
| 146 | D-Übergang | kişi, kültür, dönem, bölge ya da ada adı | -0669-01-01 — Hallstatt C -> D geçişi (Dietfurt Bayes modeli; geleneksel 616): Halls |
| 147 | Roma condita (traditio) | kişi, kültür, dönem, bölge ya da ada adı | -0751-01-01 — Roma'nın kuruluşu (YAZILI GELENEK tarihleri): Roma'nın kuruluşu (yazıl |
| 149 | Aegyptus | kişi, kültür, dönem, bölge ya da ada adı | -0029-01-01 — Roma Misiri'nin basi - Octavian Iskenderiye'yi alir: Roma Mısır'ı alır |
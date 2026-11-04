# -*- coding: utf-8 -*-
"""KAYNAK5 (LAB SALI, 4 Kasım 2026): K101-K858'in KAYNAK-GEREK hükümlerine bölge bölge kaynak. hukumler2-9.json'u yerinde günceller.
Okuma: TDV (≥ 3 sn tempo), ILHANLI.md'nin daha önce okunmuş TDV alıntıları (kova düzeyi), Hrvatska enciklopedija, Treccani."""
import os, json

BURA = os.path.dirname(os.path.abspath(__file__))
TDV = "TDV, https://islamansiklopedisi.org.tr/"
IL = " (alıntı ENKLAV-1103/ILHANLI.md'de; kova düzeyi)"
U = {
    # Osmanlı-Ortadoğu: İlhanlı sonrası (KOVALAR F, ILHANLI.md)
    "K310": dict(guven="KAYNAKLI", duzeltme="Erzurum 1336 → sutayogullari (Hacı Togay), 1340 → cobaniler (Şeyh Hasan), 1360 → eretna (Mutahharten).",
                 kaynak=TDV + "erzurum — 'Sutay Noyan'ın oğlu Hacı Togay'ın eline geçti (1336). Emîr Çoban'ın torunu Şeyh Hasan 1340'ta Erzurum'a gelerek "
                 "Togaylılar'ı şehirden uzaklaştırdı' · 'Erzurum 1360'ta Eretnaoğulları'nın … nüfuzu altına girdi'"),
    "K335": dict(guven="KAYNAKLI", duzeltme="Elbistan-Göksun 1337 → dulkadir (Memlük tâbii Karaca Bey).",
                 kaynak=TDV + "dulkadirogullari — Karaca Bey 1337'de Memlük sultanınca Elbistan yöresi Türkmenlerinin başına getirildi" + IL),
    "K230": dict(guven="KAYNAKLI", duzeltme="Burûcird-Hürremâbâd 1340-1353 lur-i-kucek (Şücâüddin Mahmûd, 1349'da öldü).",
                 kaynak=TDV + "lur-i-kucek — Hürremâbâd merkezli atabeglik; Şücâüddin Mahmûd 750/1349'da öldürüldü" + IL),
    "K662": dict(guven="KAYNAKLI", duzeltme="Kelkit 1335-1348 eretna (Erzincan-Şebinkarahisar arası; ABİ bölge: Eretna Erzincan'ı).",
                 kaynak=TDV + "eretnaogullari — Eretna ölümünde (1352) '… Erzincan, Doğu Karahisar ve Dârende hâkimiyetindeydi'" + IL + " — BEYANLI YAKLAŞIKLIK"),
    # Osmanlı-Ortadoğu: şehir maddeleri
    "K309": dict(guven="KAYNAKLI", kaynak=TDV + "erzurum — 'Erzurum 1360'ta Eretnaoğulları'nın ve onların Erzincan valisi olan Mutahharten'in nüfuzu "
                 "altına girdi. 1385'te Karakoyunlular'ın eline geçen şehir' (1378-1381 Eretna dönemi bu aralıkta)"),
    "K345": dict(guven="KAYNAKLI", kaynak=TDV + "sivas — '1381-1398 yılları arasında Sivas'ta kendi adına devlet kuran Kadı Burhâneddin' · 'Kadı "
                 "Burhâneddin'in ölümünden (800/1398) sonra … Sivas'ı … I. Bayezid'e bıraktı'"),
    "K382": dict(guven="KAYNAKLI", duzeltme="Sivas 1402-1408 sahibi Mezid Bey (Timur'un bıraktığı) — künye/beyan; 810/1407-08 → OSMANLI.",
                 kaynak=TDV + "sivas — 'takip eden yıllarda Sivas şehri Mezid Bey'in yönetiminde kaldı … 810 (1407-1408) yılında ikinci defa Osmanlılar "
                 "tarafından ele geçirildi'"),
    "K360": dict(guven="KAYNAKLI", kaynak=TDV + "bayburt — 'uzun süre Akkoyunlular'ın elinde kalan şehir ve yöresi 1501'de Safevîler tarafından alındı'"),
    "K212": dict(guven="KAYNAKLI", kaynak=TDV + "bayburt — Kara Yûsuf'un zaptından sonra 'Akkoyunlu Karayülük Osman Bey bu bölgeyi yeniden ele geçirdi … uzun "
                 "süre Akkoyunlular'ın elinde kal[dı]' (1501'e dek)"),
    "K497": dict(guven="KAYNAKLI", kaynak=TDV + "bayburt (K212 ile aynı: Karayülük Osman Bey dönemi Akkoyunlu)"),
    "K311": dict(guven="KAYNAKLI", kaynak=TDV + "harran — 'Harran Musul Atabegliği'ne (Zengîler) bağlandı … Harran'ı üs edinerek 1144 yılında Urfa'yı … geri aldı'"),
    "K344": dict(guven="KAYNAKLI", kaynak=TDV + "harran (K311 ile aynı)"),
    "K320": dict(hukum="YAPAY", kova="YAPAY-c", guven="KAYNAKLI",
                 gerekce="Kastamonu-Sinop 1073-1204 sürekli 'bizans': TDV'ye göre Kastamonu Aleksios Komnenos (1081-1118) döneminde Dânişmendlilere "
                 "geçti; Sinop 13. yy başında Trabzon Komnenoslarının, 2 Kasım 1214'te Selçuklu.",
                 duzeltme="Kastamonu bizans t → Dânişmendli fethi (I. Aleksios dönemi; yıl KAYNAK-GEREK); Sinop 1204 → trabzon, 1214-11-02 → selcuklu.",
                 kaynak=TDV + "kastamonu — 'Ardından Bizans hâkimiyetine giren Kastamonu, İmparator Aleksios Komnenos zamanında Dânişmendliler tarafından "
                 "fethedildi' · " + TDV + "sinop — 'Trabzon'daki Komnenoslar'ın egemenliğine giren Sinop, I. İzzeddin Keykâvus tarafından fethedildi "
                 "(26 Cemâziyelâhir 611 / 2 Kasım 1214)'"),
    "K388": dict(guven="KAYNAKLI", kaynak=TDV + "amasya — '1243 Kösedağ Savaşı'ndan sonra … Moğollar şehri zaptettiler ve … Moğol valileri tarafından "
                 "idare edilmeye başladı' (noktasız parça yine motor sorusu)"),
    "K390": dict(guven="KAYNAKLI", kaynak=TDV + "amasya (K388 ile aynı — 1243 Moğol)"),
    "K398": dict(guven="KAYNAKLI", duzeltme="Safranbolu 1281-1304 bizans, 1304 → candar (Gazan'ın ölümünden sonra Candaroğlu Süleyman Bey).",
                 kaynak=TDV + "safranbolu — 'Bir süre Bizans idaresi altında kalan kalenin … 1304'te Gāzân Han'ın ölümünden sonra harekete geçen "
                 "Candaroğlu Süleyman Bey tarafından Kastamonu ile birlikte ele geçirildiği belirtilir'"),
    "K400": dict(guven="KAYNAKLI", kaynak=TDV + "gence — 'XV. yüzyılın başlarında bu bölge Karakoyunlular'ın eline geçti. Gence ve Berdea hâkimi … "
                 "Emîr Karaman Karakoyunlu beylerbeyi idi' (gün yok)"),
    "K416": dict(guven="KAYNAKLI", kaynak=TDV + "harput — 'buranın Dulkadırlı, Kadı Burhâneddin, Karakoyunlu ve Akkoyunlu devletleri arasında sık sık el "
                 "değiştirmesine yol açtı. 1465'te Uzun Hasan şehri kesin biçimde Akkoyunlular'a kattı' (yıl yok — kısmen)"),
    "K417": dict(guven="KAYNAKLI", kaynak=TDV + "harput (K416 ile aynı — kısmen)"),
    "K418": dict(guven="KAYNAKLI", kaynak=TDV + "harput — bitiş 1465 Uzun Hasan ile birebir"),
    "K434": dict(guven="KAYNAKLI", kaynak=TDV + "diyarbakir — '638 (1240-41) yılında da … II. Gıyâseddin Keyhusrev Âmid'i zaptetti. Burası 1257'de kısa bir "
                 "süre için Meyyâfârikīn Hâkimi e[line geçti]' (başlangıç birebir; Moğol dönemi KAYNAK-GEREK)"),
    "K435": dict(guven="KAYNAKLI", kaynak=TDV + "diyarbakir — 'şehir 1401'de Karayülük Osman Bey'e verildi … 1409, 1411 ve 1418'de … Kara Yûsuf … başarılı "
                 "olamadı. 1423'te oğlu İskender … aynı âkıbete uğradı' (Akkoyunlu Âmid'i, gerçek)"),
    "K479": dict(guven="KAYNAKLI", kaynak=TDV + "diyarbakir — '25 veya 26 Nisan 1394'te Timur tarafından zaptedilerek' (veri bitişi 1394-04-25 Âmid'in düşüşüyle "
                 "birebir; Siirt için ABİ MERKEZ: Âmid — beyan)"),
    "K376": dict(guven="KAYNAKLI", kaynak=TDV + "siirt — 'Yavuz Sultan Selim'in Çaldıran'da … kazandığı zafer sonrasında (920/1514) Siirt çevredeki başka "
                 "yerlerle birlikte Osmanlı topraklarına katıldı'"),
    "K467": dict(guven="KAYNAKLI", kaynak=TDV + "mus — 'Muş, 789'da (1387) Karakoyunlu topraklarına sahip olan Timur'un idaresi altına girdi. Arkasından "
                 "Akkoyunlular'ın eline geçti' (1403-1405 Timurlu dönemi kısmen)"),
}
HE_SHS = ("Hrvatska enciklopedija, 'Država Slovenaca, Hrvata i Srba', https://www.enciklopedija.hr/clanak/drzava-slovenaca-hrvata-i-srba — "
          "'od … zaključaka Hrvatskoga sabora 29. X. 1918. do proglašenja Kraljevstva Srba, Hrvata i Slovenaca u Beogradu 1. XII. 1918.'; Dalmacija, "
          "Bosna i Hercegovina Narodno vijeće'nin alanında (KOVALAR N11 kova kaynağı)")
U.update({
    # Balkan
    "K625": dict(guven="KAYNAKLI", kaynak=HE_SHS), "K644": dict(guven="KAYNAKLI", kaynak=HE_SHS), "K655": dict(guven="KAYNAKLI", kaynak=HE_SHS),
    "K379": dict(guven="KAYNAKLI", duzeltme="Silistre-Tutrakan 1388 → OSMANLI (Çandarlı Ali Paşa); Varna 1369'dan dobruca-despotlugu, 1393 → OSMANLI.",
                 kaynak=TDV + "silistre — '790 (1388) kışında Çandarlı Ali Paşa kumandasındaki Osmanlı ordusu Silistre'yi ele geçirdi' · " + TDV +
                 "varna — '1369'dan itibaren Varna … Dobruca Prensliği'nin … başşehri'"),
    "K641": dict(guven="KAYNAKLI", kaynak=TDV + "varna — Dobruca prensliği 1369'dan (başşehir Varna); Mangalya için ABİ MERKEZ: Varna/Dobruca — BEYANLI YAKLAŞIKLIK"),
    "K250": dict(guven="KAYNAKLI", duzeltme="Yanya-Arta 1342 → sirbistan-nemanjic (Duşan), 1355 → Symeon Uroš (Epir-Tesalya), 1366-67 → Preljubović.",
                 kaynak=TDV + "yanya — '1342'de Sırp Kralı Stefan Duşan tarafından ilhak edildi. Onun 1355'te ölümünden sonra üvey kardeşi Symeon Uroş, Epir ve "
                 "Tesalya'nın idaresini eline aldı. 1366-1367'de şehir … Tomas Preljubović'in idaresine girdi'"),
    "K343": dict(guven="KAYNAKLI", kaynak=TDV + "yanya (K250 ile aynı — 1366-67'den Preljubović)"),
    "K484": dict(hukum="GERCEK", kova="GERCEK", guven="KAYNAKLI",
                 gerekce="Leskofça-Kurşunlu-Ürküp 1444-11 → 1455 Osmanlı, Sırp Despotluğu ortasında: TDV'ye göre 1444 Segedin antlaşmasında Semendire ve "
                 "24 kale Brankoviç'e geri verilirken Kruševac ve Dubočica (Leskofça) Osmanlı'da kaldı — gerçek kalıntı (önceki YAPAY-c hükmü düzeldi).",
                 duzeltme="Yok.", kaynak=TDV + "leskofca — '1444 Segedin Antlaşması'nda Semendire ve yirmi dört büyük kale Brankoviç'e geri verilirken Kruševac ve onunla "
                 "beraber Dubočica, Osma[nlı'da kaldı]'"),
    "K495": dict(guven="KAYNAKLI", kaynak=TDV + "karaferye — bir Meteora yazmasında 'Türkler'in Véria'ya hâkim oldukları 1385-86'; 'Diğer Yunan kaynakları ise "
                 "şehrin Türkler tarafından alınmasının 8 Mayıs 1387'[de olduğunu]' — iki görüş, veri 1387-05-08 ile uyumlu (çelişki beyanlı)"),
})
U.update({
    # Afrika / Arabistan
    "K107": dict(guven="KAYNAKLI", kaynak=TDV + "taif — 'Tâif … Şerîf Hüseyin'in eline geçti (17 Eylül 1916)' · 'Osmanlılar Hicaz'dan çekilince (30 Ekim 1918)'"),
    "K231": dict(hukum="GERCEK", kova="GERCEK", guven="KAYNAKLI",
                 gerekce="Miknâs 1237-1245 Merînî, Muvahhid toprağı ortasında: TDV veriyi doğruluyor — 634/1237 Merînîler aldı, Muvahhidler 643/1245-46'da geri "
                 "aldı (önceki YAPAY-c hükmü düzeldi).", duzeltme="Yok.",
                 kaynak=TDV + "miknas — 'Miknâs, 634'te (1237) … Merînîler'in eline geçti. Muvahhidler şehri 643'te (1245-46) geri aldılarsa da Merînîler iki yıl "
                 "sonra tekrar Miknâs'a hâkim oldular'"),
    "K232": dict(hukum="GERCEK", kova="GERCEK", guven="KAYNAKLI",
                 gerekce="Miknâs 1247-1250 Merînî (iki yıl sonraki ikinci zapt), Fas'ın 1248'e dek Muvahhid kalması: TDV ile gerçek (önceki YAPAY-c düzeldi).",
                 duzeltme="Yok.", kaynak=TDV + "miknas (K231 ile aynı)"),
    "K463": dict(guven="KAYNAKLI", kaynak=TDV + "zebid — 'Müttefik Osmanlı-Memlük ordusu 19 Cemâziyelevvel 922'de (20 Haziran 1516) Zebîd'i ele geçirdi. Şehrin idaresi "
                 "Memlük emîrlerinden Barsbay'a verildi'"),
    "K386": dict(guven="KAYNAKLI", duzeltme="Bombay portekiz f → 1534 (Bahadır Şah - Nuno da Cunha antlaşması; veri 1521); Bombay 1661 → ingiltere (çeyiz); "
                 "Thane 1739 Maratha kaynakla.",
                 kaynak=TDV + "bombay — 'Portekizliler'in 1507'de yaptıkları saldırı başarılı olamadı; ancak şehir yirmi yedi yıl sonra Sultan Bahadır Şah "
                 "Gucerâtî ile … Nuno da Cunha arasında imzalanan antlaşma ile Portekizliler'e bırakıldı. 1661'de … çeyiz olarak İngilizler'e'"),
    "K213": dict(guven="KAYNAKLI", kaynak=TDV + "cenne — 'Cenne 1861'de Hacı Ömer el-Hadîdî yönetimindeki Fûlânîler tarafından ele geçirildi; 1893'te ise Fransız "
                 "kuvvetlerince işgal edil[di]' (tekrur kimliği Hacı Ömer devletiyse veri yıl düzeyinde doğru; 03-10 bitişi KAYNAK-GEREK)"),
})
TR = "Treccani, https://www.treccani.it/enciclopedia/"
U.update({
    "K426": dict(guven="KAYNAKLI", duzeltme="Sassari 1236 komün (Pisa sözleşmeleri), 1294 → ceneviz, 1323 → aragon; 'ceneviz' 1281-1294 ve 1323-1354 yanlış.",
                 kaynak=TR + "sassari/ — 'Nel 1236 i nuovi elementi urbani costituirono il comune … imposte da Pisa. Passata ai Genovesi (1294), nel 1323 si "
                 "diede all'infante Alfonso d'Aragona'"),
    "K444": dict(guven="KAYNAKLI", kaynak=TR + "san-marino/ — 'mantenne la propria indipendenza, protetta dai conti di Montefeltro e da privilegi papali' "
                 "(San Marino 'papalik' yazımı yanlış); " + TR + "rimini/ — 13. yy sonu Malatesta senyörlüğü"),
    "K409": dict(guven="KAYNAKLI", kaynak=TR + "lussemburgo/ — 'Elisabetta cedette i suoi diritti a Filippo il Buono, duca di Borgogna, al quale nel 1451 gli "
                 "Stati del ducato prestarono giuramento di fedeltà' (veri 1443-11-21 fiilî zapt; 1451 Stati yemini — beyan)"),
    "K715": dict(guven="KAYNAKLI", kaynak=TR + "limburgo/ — 'Estintasi la casata (1283), iniziò una guerra di successione, in cui Brabante vinse sul "
                 "Lussemburgo (1288)' (Worringen, veri 1288-06-05 ile uyumlu)"),
})
HE = "Hrvatska enciklopedija, https://www.enciklopedija.hr/clanak/"
U.update({
    # Balkan-Venedik (HE) · Kırım kıyısı (TDV Kefe)
    "K740": dict(guven="KAYNAKLI", duzeltme="Bar despotluk dönemi bitişi 1433 → 1443 (HE: 1443'te kesin Venedik); 1571 → OSMANLI.",
                 kaynak=HE + "bar — 'U prvoj polovici XV. st. Bar je naizmjence pod vlašću Balšića, Venecije i Stefana Lazarevića, a 1443. konačno je došao "
                 "pod vlast Venecije … Godine 1571. osvojili su ga Osmanli' (1421 başlangıcı III. Balša'nın ölümü — HE yüzyıl düzeyinde, gün teyitsiz)"),
    "K765": dict(guven="KAYNAKLI", kaynak=HE + "zadar — '1409. Ladislav Napuljski prodao Mletačkoj Republici Zadar … Mlečani zadržali vlast nad gradom sve do pada "
                 "Mletačke Republike (1797)' · 'ratovi s Osmanlijama, koji … nikada nisu osvojili grad'"),
    "K763": dict(guven="KAYNAKLI", duzeltme="Yok (de jure 1947 bitişi kalabilir); fiilî: 1943-09 İtalya kapitülasyonu → NDH, 1944-11 Yugoslavya — ayrı kova (beyan).",
                 kaynak=HE + "zadar — 'Rapallskim ugovorom 1920. bio je … pripojen Italiji kao enklava na istočnoj obali Jadrana' · 'pod talijanskom upravom sve "
                 "do kapitulacije Italije 1943.' · 'U studenome 1944. grad je napokon bio pripojen matici zemlji'"),
    "K787": dict(kaynak="KISMEN — TDV, https://islamansiklopedisi.org.tr/kefe — 'harekât sonunda Kefe ile beraber bütün sahil şeridi fethedildi (Safer 880 / "
                 "Haziran 1475)' · 'Balıklagu (Balıklava) ve İnkerman da Mangub'a bağlı' (başlangıç teyitli; Mangub'un düşüş günü KAYNAK-GEREK)"),
})
U.update({
    # Osmanlı kenarları — TDV şehir maddeleri (4 Kasım 2026)
    "K611": dict(guven="KAYNAKLI", kaynak=TDV + "gevgili — '1383’te Serez ile 1387’de Selânik’in fethi arasında Gynaikokastro ve çevresi Osmanlılar’ın eline "
                 "geçmiş olmalıdır' · '1383’ten 1912’ye kadar Osmanlı idaresi altında' (TDV de 'olmalıdır' diyor — beyanlı)"),
    "K650": dict(guven="KAYNAKLI", duzeltme="Florina 1371 sonrası Radoslav Hlapen beyliği (Vodina-Karaferye; Prilep/Marko değil), ~1387 → OSMANLI "
                 "(Karaferye ile birlikte; TDV 'civarında' — yıl yaklaşık, beyanlı).",
                 kaynak=TDV + "florina — 'Sırp Çarı Duşan’ın 1355’te ölümünden sonra Radoslav Hlapen’in küçük Sırp devleti sınırları içinde kaldı. … 1387 yılı "
                 "civarında Hlapen’e bağlı Karaferye (Véria) ve Vodina ile (Edessa) birlikte Osmanlılar’ın eline geçti'"),
    "K652": dict(guven="KAYNAKLI", kaynak=TDV + "koron — '1685 yazında Koron, güçlü savunmasına rağmen Mora’da müttefik hıristiyan güçlerin eline geçen ilk "
                 "kale oldu. Venedikli kumandan Morosini …' (yıl/mevsim teyitli; gün teyitsiz)"),
    "K653": dict(guven="KAYNAKLI", kaynak=TDV + "modon — 'Fakat 8 Ekim 1828’de Modon’u ele geçiren Fransız Generali Marquis de Maison kumandasındaki Fransız "
                 "keşif ordusu tarafından şehirden çıkarıldı' · '1715-1828 yılları arasında devam eden ikinci Osmanlı dönemi'"),
})
GUS = ("A. G. Гуськов, 'Ратификация и реализация Константинопольского договора 1700 г.', Новое прошлое / The New Past 2022 no.4, s.114-129, "
       "DOI 10.18522/2500-3224-2022-4-114-129 (hakemli; EMRELİC okudu, PDF kaynak-pdf/lab2) — ")
U.update({
    "K635": dict(guven="KAYNAKLI", duzeltme="Yok — rus t 1700-07-14 (hukukî devir, gün teyitli) kalır; fiilî Rus garnizonu yıkıma dek, 1701 yazı (Jülyen, gün yok) "
                 "— ic_not beyanı yeter (bitişi 1701'e kaydırmak yalnız mevsim hassasiyeti verir ve yeni kronoloji maddesi ister).",
                 kaynak=GUS + "s.116: antlaşma '3 (14) июля 1700 г.' (Gregoryen 1700-07-14; '13 Temmuz' yanlış çeviri); md.2: Tavan, Kazy-Kermen, Nusret- ve "
                 "Sagin-Kermen 'подлежали полному разрушению', toprak Osmanlı'ya; s.122: 'Тавани и Казы-Кермена … осуществлена летом 1701 г.'"),
    "K629": dict(hukum="YAPAY", kova="YAPAY-c", guven="KAYNAKLI",
                 gerekce="Kızıkermen 1700-07-14 → 1774 Osmanlı: toprak Osmanlı'ya iade edildi, ama kale antlaşma gereği 1701 yazında yıkıldı; 1705 sınır "
                         "tarifinde 'yıkılmış Kazy-Kermen' boş yer olarak geçiyor. Yerleşim noktasının 1701 sonrası Osmanlı yerleşimi olarak yaşaması kaynakta yok "
                         "(önceki GERCEK hükmü düzeldi).",
                 duzeltme="Kızıkermen OSMANLI dönemi 1700-07-14 → 1701-06-01 (yıkım 1701 yazı, Jülyen; mevsim hassasiyeti — BEYANLI); sonrası nokta kapanır, "
                          "toprak komşu Özi/Osmanlı peteklerine kalır. 1705 sonrası yeniden iskân kaynakla sınanmadan dönem açılmaz (K624'e bağlı).",
                 kaynak=GUS + "md.2 (s.116) tam yıkım + toprak Osmanlı'ya; s.122 yıkım 'летом 1701 г.'; s.125 sınır tarifinde 'разрушенного Казы-Кермена'; "
                         "Osmanlı tasdiki 7 Ağustos 1701 (s.120); Bug-Dinyeper sınır komisyonu 22 Ekim 1705 (s.124)"),
})
U.update({
    "K536": dict(guven="KAYNAKLI",
                 kaynak="ABİ MERKEZ: Şark Cephesi / Erzurum (XV. Kolordu bölgesi; Ahlat Bitlis vilayetinde) — BEYANLI YAKLAŞIKLIK, kova N10 · " + TDV +
                 "kazim-karabekir — Şark Cephesi kumandanı (14 Ocak 1920) 'Bütün valiliklere tamim göndererek İstanbul ile haberleşmeyi yasakladı' · "
                 "'Türkiye Büyük Millet Meclisi hükümeti kendisine Erzurum valiliği görevini de verdi (6 Mayıs)' · " + TDV +
                 "turkiye-buyuk-millet-meclisi — '23 Nisan 1920 Cuma günü düzenlenen merasimle açıldı'"),
})
BO1 = "EMRELİC Cambridge/JSTOR okuması (BO1, PDF kaynak-pdf/lab2) — "
U.update({
    "K730": dict(guven="KAYNAKLI", duzeltme="Girne venedik t 1570-09-17 → 1570-09-14 (savaşsız teslim, Hill); Osmanlı kaynaklarındaki daha erken (Temmuz) rivayet "
                 "Hill'ce reddedilir — ic_not'ta iki rivayet beyanlı.",
                 kaynak=BO1 + "G. Hill, A History of Cyprus III, ch. XV, s.988: 'on the 14th … gave up the fortress' (Lefkoşa 9 Eylül 1570 düşüşünden sonra)"),
    "K745": dict(guven="KAYNAKLI", kaynak=BO1 + "J. D. Grainger, The Battle for Palestine 1917 (2006), s.173: Yafa'ya 16 Kasım 1917 sabahı Yeni Zelanda birlikleri girdi"),
})
NCMH = "EMRELİC Cambridge okuması — "
U.update({
    "K677": dict(guven="KAYNAKLI", kaynak=NCMH + "New Cambridge Medieval History 7, ch.20 (B. Schnerb, 'Burgundy'), s.439: 'purchase of the county of Namur in "
                 "1421'; 'became Burgundian in 1429' (yıl düzeyi; 23 Nisan günü teyitsiz) — Namur kendi kontluğu, 1421 → burgonya"),
    "K678": dict(guven="KAYNAKLI", duzeltme="Namur burgonya f: 1421 satış (yıl teyitli; gün teyitsiz) — fiilî devir 1429 (III. John'un ölümü), beyanlı.",
                 kaynak=NCMH + "NCMH 7, ch.20 (Schnerb), s.439: 'purchase of the county of Namur in 1421'; 'became Burgundian in 1429' (yıl düzeyi)"),
    "K615": dict(guven="KAYNAKLI", kaynak=NCMH + "L. Bes, The Heirs of Vijayanagara (2022), Epilogue: 'taken by the British in 1781' — yıl teyitli; "
                 "'12 November 1781' yalnız JRAS 1985 toplantı notunda, gün teyitsiz (beyanlı). ADAY: kuşatma 1781-10-21"),
})
KISMEN = {
    "K372": "KISMEN — NCMH 6, ch.14b, s.440: 'Philip's marriage in 1369 to Margaret of Flanders' (yıl teyitli; Lille-Douai-Orchies adı geçmiyor, gün teyitsiz)",
    "K786": "KISMEN — D. Kizilov, Acta Orientalia ASH 59/2 (2006), s.181: 'Ottoman conquest of 1475' (Kırım geneli; Cembalo için ABİ BÖLGE yılı, BEYANLI "
            "YAKLAŞIKLIK); TDV kefe: Haziran 1475; 1357 Ceneviz başlangıcı OKUNMADI",
    "K579": "KISMEN — Guskov 2022 (The New Past 4, s.116-122): Rus zaptı 1695 ve 1701 yazı yıkımı teyitli; 1552 kuruluşu Guskov'da yok, KAYNAK-GEREK",
    "K624": "KISMEN — Guskov 2022: kale 1701 yazı yıkıldı, 1705'te boş yer; 1774'e dek yeniden iskân kaynakta yok — K629 düzeltmesine bağlı",
    "K791": "KISMEN — K. Brummett, Cambridge History of Turkey 2, ch.5, s.143 (Osmanlı 1456, gün yok); s.146 Dorino Gattilusio Enez'i vergi ve tuz payıyla "
            "tutuyordu; 1355 başlangıcı ve 24 Ocak günü teyitsiz",
    "K718": "KISMEN — R. P. Lindner, Cambridge History of Turkey 1, ch.4, s.121: Pelekanon Haziran 1329 (gün yok); Aydos/Samandıra 1328 okunmadı",
    "K683": "KISMEN — Encyclopaedia Iranica 'NĀDER SHAH': Rusya 1720'lerde aldığı toprakların çoğundan çekildi; 'BAKU': Bakü-Derbent Rus işgali 1735 Gence "
            "antlaşmasıyla bitti (1732 Reşt kuzey Hazar'ı kapsamaz); Reşt'in il listesi okunmadı",
    "K785": "KISMEN — Cembalo 1357 Ceneviz başlangıcı akademik kaynakta OKUNMADI (EMRELİC Cambridge/JSTOR, 4 Kasım)",
}
# EMRELİC 1 KASIM (4 Kasım 2026): web-özeti aday tarihleri — KAYNAKLI DEĞİL, yalnız yol gösterir; satırlar KAYNAK-GEREK kalır
ADAY = {
    "K614": "Portekiz 1554; Hollanda 1658 anlaşma, fiilen 1662 ya da 1676 (çelişik)",
    "K615": "İngiliz kuşatması 1781-10-21 → zapt 1781-11-11/12",
    "K729": "Thana kuşatması 1774-12-12…28; Surat 1775-03-06; Purandhar 1776-03-01; Salbai 1782",
    "K604": "Amsterdam ayaklanması 1813-11-15; Lahey 11-16; üçlü hükümet bildirisi 11-21; Willem 11-30",
    "K679": "K604 ile aynı (1813-11-15 … 11-30)",
    "K677": "Namur satışı 1421-04-23; III. John öldü 1429-03-10, fiilî devir 1429",
    "K678": "satış 1421-04-23; fiilî devir 1429 (III. John ölümü 1429-03-10)",
    "K372": "Cesur Philippe – Marguerite evliliği 1369 (19 Haziran?)",
    "K485": "Hacıbey 1415 Litvanya (Długosz), Osmanlı 1480 — TDV'de Hacıbey/Özi maddesi yok (arama 4 Kasım)",
    "K579": "Kızıkermen Rus zaptı 1695 — akademik yol: Guskov, The New Past 4/2022, s.114-129, DOI 10.18522/2500-3224-2022-4-114-129 (PDF okunamadı: sitenin TLS sertifikası süresi dolmuş)",
    "K635": "Rus zaptı 1695; İstanbul antlaşması 3 (14) Temmuz 1700 — Guskov 2022 arama özeti (veri 1700-07-14 Gregoryen ile uyumlu; '13 Temmuz' yanlış çeviri). PDF okunamadı",
    "K629": "1700-07-14 (Jülyen 3 Temmuz) — Guskov 2022 arama özeti; iade/yıkım uygulama günü okunamadı",
    "K624": "Küçük Kaynarca 1774-07-21 (TDV maddesinde Kızıkermen adı geçmiyor; Kılburun-Özü var)",
    "K785": "Ceneviz Cembalo 1357 (1345 iddiası da var)",
    "K786": "Ceneviz 1357; Osmanlı 1475 (Kefe 6 Haziran — TDV Kefe: Haziran 1475)",
    "K164": "Semipalatinsk 1718",
    "K691": "okunmadı",
    "K791": "Osmanlı 1456 (gün teyitsiz); Gattilusio başlangıcı okunmadı",
    "K718": "Pelekanon Haziran 1329",
    "K683": "Reşt 1732-01-21 güney Hazar (Gilan-Mazenderan); Bakü-Derbent 1735 Gence",
}
for i in range(2, 10):
    yol = os.path.join(BURA, "hukumler%d.json" % i)
    H = json.load(open(yol, encoding="utf-8"))
    d = 0
    for k, a in ADAY.items():
        if k in H and H[k].get("guven") == "KAYNAK-GEREK":
            H[k]["aday_tarih"] = a
            eski = H[k].get("kaynak", "").split(" · ADAY TARİH")[0].split(" · KISMEN")[0]
            H[k]["kaynak"] = eski + (" · " + KISMEN[k] if k in KISMEN else "") + " · ADAY TARİH (EMRELİC web özeti, KAYNAKLI DEĞİL): " + a
            d += 1
    if d:
        json.dump(H, open(yol, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=0)
n, korunan = 0, []
for i in range(2, 10):
    yol = os.path.join(BURA, "hukumler%d.json" % i)
    H = json.load(open(yol, encoding="utf-8"))
    deg = 0
    for k, v in U.items():
        if k in H:
            # UMIT'in (umit-1104-enklavkaynak) kaynakladığı satır önce gelir (EMRELİC kararı): orada KAYNAKLI ve kaynak benimkinden farklıysa dokunma
            if H[k].get("guven") == "KAYNAKLI" and H[k].get("kaynak") != v.get("kaynak") and "KAYNAK5" not in H[k].get("kaynak", ""):
                korunan.append(k)
                continue
            H[k].update(v)
            deg += 1
    if deg:
        H["_aciklama"] = H["_aciklama"].split(" KAYNAK5")[0] + " KAYNAK5 (LAB SALI): %d hüküm kaynak_toplu.py ile güncellendi." % deg
        json.dump(H, open(yol, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=0)
        n += deg
print("güncellendi", n, "/", len(U), "· UMIT'te zaten KAYNAKLI, korundu:", korunan)

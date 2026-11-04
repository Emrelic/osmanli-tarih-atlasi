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

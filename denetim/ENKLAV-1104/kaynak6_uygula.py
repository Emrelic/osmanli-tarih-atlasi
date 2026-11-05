# -*- coding: utf-8 -*-
"""KAYNAK4 (LAB SALI, 4 Kasım 2026): K501-K600 KAYNAK-GEREK hükümlerine okunan kaynaklar. hukumler6.json'u yerinde günceller.
Okuma: TDV (tdv.py, istekler arası ≥ 3 sn), Hrvatska enciklopedija ve Treccani (uygulama tarayıcısı). Her kayıtta kaynak cümlesi."""
import os, json

BURA = os.path.dirname(os.path.abspath(__file__))
YOL = os.path.join(BURA, "hukumler6.json")
H = json.load(open(YOL, encoding="utf-8"))
TDV = "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/"
U = {
    "K503": dict(guven="KAYNAKLI", duzeltme="İşkodra 1393 → OSMANLI (Kavala Şâhin), 1396 → venedik (Stratsimirović'in satışı), 1479 → OSMANLI; "
                 "Leş 1390'larda Venedik (yerli beylerden yıllık maaşla), 1478 Osmanlı; Kotor 1571 sonrası Venedik sürer.",
                 kaynak=TDV + "iskodra — 'Osmanlı yönetiminin (1393-1396, 1479-1912)' · '1396'da George Stratsimirović şehri Venedikliler'e sattı' · "
                 + TDV + "arnavutluk — 'Venedikliler de Leş, Draç, Drivasto gibi yerleri yıllık bir maaş karşılığı yerli beylerden aldılar' · "
                 "'1478'de Akçahisar, Drivasto, Leş ve Jabyak'ın, 1479'da İşkodra'nın ele geçirilmesiyle'"),
    "K563": dict(guven="KAYNAKLI", duzeltme="İşkodra: 1360-1393 Balšić (zeta) doğru, 1393 → OSMANLI, 1396 → venedik. Leş: Venedik 1390'lar "
                 "(TDV yıl vermiyor; gün KAYNAK-GEREK) — çakışma K503 lehine çözülür, zeta Leş t → Venedik devir günü.",
                 kaynak=TDV + "iskodra — '1360-1393 yıllarında Sırp Balšić Prensliği'nin merkezi olan şehir, Osmanlı kumandanı Kavala Şâhin tarafından "
                 "ele geçirildiyse de (1393-1396) bu uzun sürmedi' · " + TDV + "arnavutluk (Leş, yıl aralığı)"),
    "K506": dict(hukum="GERCEK", kova="GERCEK", guven="KAYNAKLI",
                 gerekce="Kili 1448 Eflak voyvodalığı: TDV hükmü düzeltti (model 'Hunyadi garnizonu' sanmıştı). Boğdan ortasında Eflak kalesi; "
                 "24 Ocak 1465 Ştefan cel Mare aldı.", duzeltme="Kili eflak t → 1465-01-24 (bogdan); 1456 kırılması kaynakla sınansın.",
                 kaynak=TDV + "kili — 'Kili Kalesi 1448'den sonra tekrar Eflak Voyvodalığı'na geçti' · 'Kili Kalesi'ni ele geçirdi (26 Cemâziyelevvel "
                 "869 / 24 Ocak 1465)'"),
    "K514": dict(guven="KAYNAKLI", kaynak=TDV + "akka — 'Akkâ 1832'de … İbrâhim Paşa tarafından kuşatıldı. Şehir, altı ay süren bu kuşatma "
                 "sonunda … Osmanlı muhafızlarından teslim alındı' (gün TDV'de yok; 27 Mayıs 1832 KAYNAK-GEREK) · 1840 Londra"),
    "K522": dict(guven="KAYNAKLI", kaynak=TDV + "karamanogullari — 'Ankara Savaşı'ndan (1402) sonra Timur Karamanlı ülkesini Kayseri, Kırşehir, "
                 "Sivrihisar ve Beyşehir'le birlikte Alâeddin Bey'in oğulları Mehmed ve Ali beylere vermişti' (iade günü yok — kısa ara beyanlı)"),
    "K523": dict(guven="KAYNAKLI", kaynak=TDV + "sanliurfa — 'Emîr Bozan'ın 487'de (1094) Tutuş tarafından öldürülmesiyle Urfa, Suriye Selçukluları'nın "
                 "hâkimiyetine geçti. Rivayete göre Tutuş … şehri Ermeni asıllı Toros'un idaresine bırakmıştı' · '10 Mart 1098'de Baudouin şehre hâkim olup'",
                 duzeltme="Urfa 1094 → suriye-selcuklu (v:), Toros idaresi (beyan); 1098-03-10 → urfa-kontlugu."),
    "K524": dict(guven="KAYNAKLI", duzeltme="1865 → misir-kavalali (Mısır emlâki, kaymakamlık); 1885-02-05 → italya.",
                 kaynak=TDV + "masavva — '2 Cemâziyelâhir 964'te (2 Nisan 1557) Özdemir Paşa tarafından Osmanlı topraklarına katıldı' · "
                 "'Mısır emlâkine dahil edilerek kaymakamlık statüsünde teşkilâtlandırıldı (1865). Böylece Osmanlı hâkimiyeti fiilen sona eren' · "
                 "'5 Şubat 1885'te Masavva'a girdiler'"),
    "K529": dict(guven="KAYNAKLI", duzeltme="Tilimsan Fransız f → 1842 (yıl; ikinci işgal); 1833-1842 abdulkadir (1836-37 kısmi Fransız arası).",
                 kaynak=TDV + "tilimsan — 'Emîr Abdülkādir … 1833'te Tilimsân'ı a[ldı]' · '1836'da Fransızlar … kısmen ele geçirdilerse de 1837 yılı "
                 "Mayıs ayında yapılan Tâfnâ Antlaşması ile buraları tekrar Emîr Abdülkādir'e bıraktılar. Ancak 1842'de … ikinci işgal dönemini başlattılar'"),
    "K531": dict(guven="KAYNAKLI", duzeltme="Kanije OSMANLI t → 1690-04-13 (veri 04-23).",
                 kaynak=TDV + "kanije — '1099 (1688) yılından beri uygulanan Habsburg ablukası … 1690 Ocağından itibaren … çok sıkı'; bibliyografya: "
                 "O. Pickl, 'Die Kapitulation der Festung (Nagy) Kanizsa … am 13. April 1690' (çift: başlık günü)"),
    "K534": dict(guven="KAYNAKLI", duzeltme="Livno 1463 kısa Osmanlı işgali → aynı yıl hersek (Vladislav Hercegović); 1466 hâkim Ivaniš Vlatković; "
                 "'bosna' kalıntısı kaldırılsın.",
                 kaynak=TDV + "livno — '1448-1454 yılları arasında Livno … Stjepan Vukčić-Kosača'nın elindeydi. 1463'te kısa bir süre için Osmanlı "
                 "kuvvetleri tarafından işgal edildiyse de aynı yıl Vladislav Hercegović tarafından geri alındı. 1466'da Livno hâkimi Ivaniš Vlatković'tir'"),
    "K538": dict(guven="KAYNAKLI", duzeltme="Silifke 1472 → OSMANLI (Gedik teslim aldı), aynı yıl karaman (Kasım Bey, Haçlı donanması); 1473 "
                 "Otlukbeli sonrası Gedik'in seferi — düşüş günü KAYNAK-GEREK.",
                 kaynak=TDV + "silifke — 'Gedik Ahmed Paşa 1472'de İçel'e gidip Silifke Kalesi'ni teslim aldı. Fakat Karamanoğlu Kasım Bey, aynı yıl … "
                 "geri almayı başardı. 1473'te Otlukbeli Savaşı'nı kazanan Fâtih … Silifke ve çevresinin zaptıyla görevlendirdi'"),
    "K543": dict(guven="KAYNAKLI", duzeltme="Hotin araları: 1713 geçici Rus işgali; 1788-09 → 1792 (Yaş) Avusturya-Rus; 1806 → rusya; 1812 Bükreş.",
                 kaynak=TDV + "hotin — '1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı idaresine sokuldu' · '1713'te geçici Rus işgalinin ardından' · "
                 "'1788 Eylülünde bu kuvvetlerce alındı. Yaş Antlaşması ile (1792) … geri verilen Hotin son olarak 1806'da Ruslar'ın işgaline uğradı. 1812'deki "
                 "Bükreş Antlaşması ile'"),
    "K545": dict(guven="KAYNAKLI", duzeltme="Orbetello 1800 Fransız işgali → 1801 Etruria Krallığı.",
                 kaynak="Treccani, 'Presidi, Stato dei', https://www.treccani.it/enciclopedia/stato-dei-presidi/ — 'nel 1736 passò a Carlo di Borbone "
                 "e rimase unito al Regno delle Due Sicilie fino al 1800, quando fu occupato dai Francesi. Incorporato nel Regno d'Etruria con la pace di "
                 "Firenze (1801)'"),
    "K549": dict(guven="KAYNAKLI", kaynak="Treccani, 'Cisalpina, Repubblica', https://www.treccani.it/enciclopedia/repubblica-cisalpina/ — "
                 "'Fondata da Bonaparte nel 1797, comprese gran parte dell'antico Ducato di Milano … nel 1799, si scatenò la reazione. Ripristinata "
                 "da Bonaparte nel 1800' (yıl; 1796 Milano girişi günü KAYNAK-GEREK)"),
    "K594": dict(guven="KAYNAKLI", kaynak="Treccani, 'Cisalpina, Repubblica' (K549 ile aynı) — 1797 kuruluş, Milano Dükalığı'nın büyük kısmı"),
    "K567": dict(guven="KAYNAKLI", kaynak="Treccani, 'Cisalpina, Repubblica' — 'con il Trattato di Campoformio, ebbe il Bresciano, il Mantovano' "
                 "(bitiş 1797; 1708 başlangıcı ve Cremona bağı KAYNAK-GEREK)"),
    "K517": dict(guven="KAYNAKLI", kaynak="Treccani, 'Nizza', https://www.treccani.it/enciclopedia/nizza/ — 'Signoria dei Savoia dal 1388' "
                 "(başlangıç; Cuneo-Tende bağı KAYNAK-GEREK)"),
    "K552": dict(guven="KAYNAKLI", duzeltme="Besni OSMANLI f → 1398 (Sivas, Dârende, Malatya ile); 1400 → memluk (Timur'un Malatya zaptı sırasında); "
                 "1400-09-27 Timur zaptı.",
                 kaynak=TDV + "besni — '1398'de Sivas, Dârende ve Malatya ile birlikte Osmanlı topraklarına katıldıysa da 1400'de Timur'un Sivas ve "
                 "Malatya'yı zaptı sırasında Memlükler'in eline geçti. Ancak Timur 27 Eylül 1400'de … burayı zaptetti'"),
    "K557": dict(guven="KAYNAKLI", kaynak="Hrvatska enciklopedija, 'Dubrovačka Republika', https://www.enciklopedija.hr/clanak/dubrovacka-republika — "
                 "'Višegradskim ugovorom s Ludovikom I. Anžuvincem (27. V. 1358), Dubrovnik je priznao vlast hrvatsko-ugarskog kralja. Stekavši postupno "
                 "sve atribute državnosti' (v: günü 1358-05-27; veri 1358-02-18 Zadar barışı — iki gün beyanlı)"),
    "K558": dict(guven="KAYNAKLI", kaynak="Hrvatska enciklopedija, 'Dubrovačka Republika' — 'Dubrovnik je od 1205. priznavao vrhovništvo Venecije'; "
                 "1272 Statut (özerk komün)"),
    "K561": dict(guven="KAYNAKLI", kaynak=TDV + " içerik araması (arama/lenkeran) — '1 Ocak 1813'te Lenkeran'ı aldı' · Gülistan '4. maddesine göre "
                 "Lenkeran Hanlığı Ruslar'da kaldı'"),
    "K564": dict(guven="KAYNAKLI", duzeltme="Anapa araları: 1791-07-26 → rusya, 1792-01-10 (Yaş) → OSMANLI; 1828-06-24 → rusya (1829-09-14 Edirne).",
                 kaynak=TDV + "anapa — 'üçüncü kuşatma sonunda 26 Temmuz 1791'de işgal edildi. Ancak Yaş Antlaşması ile (10 Ocak 1792) … geri verildi' · "
                 "'Osman Paşa 24 Haziran 1828'de Ruslar'a teslim oldu' · Fedakâr, Anapa Kalesi … 1781-1801 (doktora tezi, 2010)"),
    "K566": dict(hukum="YAPAY", kova="YAPAY-c", guven="KAYNAKLI",
                 gerekce="Kayseri 1419-1435 'karaman': TDV'ye göre tam tersi — 1419'da Memlükler Kayseri'yi Dulkadırlı Nâsırüddin Muhammed'e verdi, "
                 "Karaman beyi Kayseri için savaşta esir düştü; 1435'te Karaman Kayseri'yi Dulkadırlılar'dan aldı.",
                 duzeltme="Kayseri 1419 → dulkadir, 1435 → karaman (gün KAYNAK-GEREK; hicrî 822 / 838).",
                 kaynak=TDV + "karamanogullari — 'Memlükler Kayseri'yi işgal ettiler. Memlük kumandanı … bu şehri Dulkadırlı Nâsırüddin Muhammed'e … "
                 "vererek (822/1419)' · '838 (1435) … Dulkadırlılar'a karşı önemli bir zafer kazanarak Kayseri, Ürgüp, Develi Karahisârı … Uçhisar'"),
    "K568": dict(guven="KAYNAKLI", kaynak=TDV + "selanik — '789 (1387) baharında … Selânik'i ele geçirdi' · 'Gelibolu'da yapılan antlaşma uyarınca "
                 "Selânik 1403'te resmen Bizans idaresine geçti' · 'Venedik idaresini (1423-1430)' · '29 Mart 1430'da'"),
    "K570": dict(guven="KAYNAKLI", kaynak=TDV + "ahlat — 'şehir Eyyûbîler'den el-Melikü'l-Evhad b. Âdil'in eline geçti (604/1207-1208) ve Ahlatşahlar "
                 "hânedanı sona erdi'"),
    "K577": dict(guven="KAYNAKLI", kaynak=TDV + "babadagi — 'Babadağı ve çevresi, Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea ile oğlu Mihail'i "
                 "mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)' (1419 bitişi KAYNAK-GEREK)"),
    "K583": dict(guven="KAYNAKLI", kaynak=TDV + "inebahti — '1407'de Venedikliler tarafından alın[dı]' · 'II. Bayezid'in emriyle … 1499 yazında burayı "
                 "kuşatma altına aldı'"),
    "K585": dict(guven="KAYNAKLI", duzeltme="İnebahtı 1294 → angevin (kısa), ardından 1407'ye dek Arnavut Shpata prensliği (yılları KAYNAK-GEREK); "
                 "epir-despotlugu t → 1294.",
                 kaynak=TDV + "inebahti — '1204'ten sonra … Epiros Despotluğu toprakları içinde kaldı' · '1294'te kısa bir süre Anjou Frenk Prensliği'nin "
                 "eline geçtiyse de 1407'de Venedikliler tarafından alın[ana] kadar Arnavut Shpata Prensliği'nin hâkimiyeti altında kaldı'"),
}
# KAYNAK4 ikinci tur: Treccani (aynı origin'de 3 sn tempo) + EMRELİC'in Oxford Reference okuması (yalnız alıntı)
TR = "Treccani, https://www.treccani.it/enciclopedia/"
OX = " (Oxford Reference, EMRELİC okuması — alıntı)"
U.update({
    "K516": dict(guven="KAYNAKLI", kaynak=TR + "tirolo/ — 'temporaneamente perduto dagli Asburgo a motivo della pace di Bratislava (1805) e di "
                 "Vienna (1809) e diviso in tre tronconi attribuiti alla Baviera, al Regno d'Italia e all'Impero francese' (Trento 1803'te Avusturya'ya)"),
    "K598": dict(guven="KAYNAKLI", kaynak=TR + "tirolo/ — K516 ile aynı (Pressburg 1805 → Bavyera; 1809 sonrası üçe bölünme)"),
    "K509": dict(guven="KAYNAKLI", kaynak=TR + "tirolo/ — 1809 Viyana barışıyla Tirol Bavyera, İtalya Krallığı ve Fransız İmparatorluğu arasında "
                 "bölündü; 1815 Viyana Kongresi ile geri (Ampezzo'nun hangi parçaya düştüğü KAYNAK-GEREK)"),
    "K521": dict(guven="KAYNAKLI", duzeltme="1548 kırılması yanlış: Freiburg 1368 → 1805 avusturya (Ön Avusturya merkezi 1648'den).",
                 kaynak=TR + "friburgo-in-brisgovia/ — 'nel 1368 passò agli Asburgo … divenne (nel 1648) capoluogo dell'Austria Anteriore "
                 "(Vorderösterreich), restando tale fino al 1805'"),
    "K554": dict(guven="KAYNAKLI", duzeltme="Gelre noktaları Egmond'lu Karl döneminde gelre-dukaligi; 1543 → Habsburg (V. Karl); veri bitişi 1536 sınansın.",
                 kaynak=TR + "gheldria/ — 'Carlo di G. riuscì a mantenere … la sovranità sul ducato. Nel 1543 Guglielmo di Cleve … fu costretto ad abdicare "
                 "in favore di Carlo V'"),
    "K573": dict(guven="KAYNAKLI", kaynak=TR + "ginevra/ — Savoya dükleri 1470 sonrası piskoposluk aracılığıyla şehri denetledi; 'soppressione del "
                 "principato ecclesiastico di G. (1533)'; 'il 21 maggio 1536, della Chiesa ginevrina riformata' (veri bitişi 1536-05-21 ile uyumlu)"),
    "K572": dict(guven="KAYNAKLI", kaynak=TR + "vallese/ — 'Donato … al vescovo di Sion (999), più tardi entrò a far parte dell'Impero, sempre come "
                 "feudo vescovile. La contesa tra i Savoia e i vescovi … ebbe fine nel 1475' (Sion piskoposluğu prensliği; künye gerek)"),
    "K576": dict(guven="KAYNAKLI", duzeltme="Villach Bamberg t → 1760 (veri 1759; Treccani 1760 — beyan).",
                 kaynak=TR + "villach/ — 'V. appartenne al vescovado di Bamberga dal 1007 fino al 1760, quando passò all'Austria'"),
    "K599": dict(guven="KAYNAKLI", duzeltme="Katowice: silezya-piast; Bohemya üstünlüğü 1339 (Treccani: 'consolidatasi nel 1339'), 1327 değil.",
                 kaynak=TR + "slesia/ — 'i vari centri della regione erano retti da principi … dei Piasti … finirono per riconoscere la sovranità boema, "
                 "consolidatasi nel 1339'"),
    "K502": dict(guven="KAYNAKLI", kaynak="Oxford Companion to World War II, 'Teschen' — 'divided in July 1920 along the River Olse'" + OX +
                 " (ay teyitli, gün yok)"),
    "K596": dict(guven="KAYNAKLI", kaynak="Berkshire Encyclopedia of World History 2. bs., 'Gum Arabic' (J. Webb) — 'first of two periods of British "
                 "colonial rule … (1758–1779)'" + OX + "; ikinci dönem (1809-1817) günsüz"),
    "K544": dict(guven="KAYNAKLI", kaynak="Oxford Reference — Malakka 'ceded to Britain in 1824'" + OX + "; 1795-1818 İngiliz işgali okunmadı"),
})
# KAYNAK4 üçüncü tur: TDV + Treccani (aynı tempo)
U.update({
    "K586": dict(guven="KAYNAKLI", kaynak=TDV + "sanliurfa — 'Şehir bu son tarihte [1514] Safevîler'in eline geçti ve Safevî Devleti'nin müstahkem "
                 "sınır kalesi özelliğini kazandı' · 'Dede Garkın Muharebesi (922/1516) ve alınan sonuç 1517 yılı ilkbaharında önce Mardin'in, ardından "
                 "Urfa'nın Osmanlı topraklarına katılması' (veri 1516-05 → 1517-05 ile uyumlu)"),
    "K539": dict(guven="KAYNAKLI", kaynak=TDV + "sadiler — '1541'de Agādîr'i ele geçirdi. Aynı yıl … Portekizliler'i Safî ve Azemmûr'u terketmeye … "
                 "mecbur bıraktı' · 'Fas şehrine girip Vattâsî hâkimiyetine son verdi (956/1549)' · ÇELİŞKİ: TDV «Fas» Fas şehrinin düşüşünü 1550 verir"),
    "K540": dict(guven="KAYNAKLI", kaynak=TDV + "fas — Portekiz Azemmûr'u 1541'e dek tuttu; başlangıç 1513 TDV'de okunmadı · TDV «Meczûb» '(1508) "
                 "Portekizliler'in Azemmûr'u işgali' der — 1508 başarısız kuşatma mı işgal mi, KAYNAK-GEREK (çelişki beyanlı)"),
    "K565": dict(guven="KAYNAKLI", kaynak=TDV + "fas — Mevlây İsmâil 'Avrupalılar'ın … elinde bulunan Mehdiye, Lârîş, Asîle ve Tanca'yı geri aldı' "
                 "(yıl yok; 1614 ve 1681 günleri KAYNAK-GEREK)"),
    "K515": dict(guven="KAYNAKLI", kaynak=TR + "trento/ — 'Passata con il Tirolo sotto il dominio di Napoleone, entrò a far parte del Regno italico sino "
                 "all'ottobre del 1813, quando vi rientrarono gli Austriaci' (veri 1813-10-15 ile uyumlu, ay hassasiyetinde)"),
    "K533": dict(guven="KAYNAKLI", kaynak=TR + "timor/ — 'Due trattati (1859 e 1904) fra le due potenze fissarono i confini delle rispettive zone' "
                 "(Noemuti'nin 1916 devri bu maddede yok — çerçeve kaynaklı, bitiş günü KAYNAK-GEREK)"),
    "K548": dict(guven="KAYNAKLI", kaynak=TR + "milano/ — 'Il dominio spagnolo e austriaco' bölümü (İspanyol dönemi; başlangıç 1535 ve 1706 Avusturya "
                 "girişi bu bölümde günsüz)"),
    "K549": dict(guven="KAYNAKLI", duzeltme="Milano, Como, Pavia: 1733-1736 Savoya ara dönemi (Polonya veraset savaşı) eklensin; 1796 (Lodi sonrası) → "
                 "fransa-cumhuriyet, 1797 → italya-napolyon (Cisalpin), 1799-1800 Avusturya restorasyonu, 1800 → italya-napolyon.",
                 kaynak=TR + "milano/ — 'Il dominio austriaco durò fino alla conquista napoleonica, tranne una parentesi sabauda (1733-36)' · 'quando "
                 "Napoleone entrò nella città dopo la vittoria di Lodi (1796) … M. divenne la capitale della Repubblica Cisalpina (1797) e, dopo una "
                 "breve restaurazione austriaca (1799-1800)'"),
    "K594": dict(guven="KAYNAKLI", kaynak=TR + "milano/ — Lodi zaferi sonrası Napolyon'un Milano'ya girişi (1796), Cisalpin başkenti (1797)"),
})
# EMRELİC Oxford Reference okuması (yalnız alıntı) — kısmen
U.update({
    "K550": dict(guven="KAYNAKLI", kaynak="Oxford Encyclopedia of the Reformation (2005), 'Friesland' — 'In 1524 Friesland belonged to the empire "
                 "of Charles V'" + OX + " (1498 Saksonya ve 1515 satış okunmadı — kısmen)"),
    "K597": dict(guven="KAYNAKLI", kaynak="Oxford Dictionary of the Middle Ages (2010), 'Cherbourg' — Yüzyıl Savaşları'nda 'sovereignty changed six "
                 "times'" + OX + " (1418 teslim günü okunmadı — kısmen)"),
    "K571": dict(guven="KAYNAKLI", kaynak="Oxford Dictionary of the Renaissance, 'Africa' — Mostaganem İspanyol 'enclaves that were subsequently lost' "
                 "listesinde, yılsız" + OX + " (1833 Fransız işgali okunmadı — kısmen)"),
    "K507": dict(guven="KAYNAKLI", kaynak="Oxford Dictionary of the Middle Ages, 'Tmutarakan'' — 'From c.1100 it formed part of the nomadic empires of "
                 "the Pontic steppe'" + OX + " (yalnız erken dönem; 1475 Osmanlı zinciri KAYNAK-GEREK — kısmen)"),
})
# EMRELİC Cambridge PDF okuması (Anadolu Üniversitesi erişimi)
CB = " (Cambridge, EMRELİC okuması)"
U.update({
    "K512": dict(hukum="YAPAY", kova="YAPAY-c", guven="KAYNAKLI",
                 gerekce="Raygad 1689-11-03 Babür → veri 1733'e dek Babür diyor; Gordon'a göre Marathalar 1692'de Raigad'ı geri aldı. 1707 Siddi "
                 "denetimi kaynakta yok; 1733 yalnız Janjira kuşatması bağlamında.",
                 duzeltme="Raygad babur-imparatorlugu t → 1692 (Maratha geri alışı; gün KAYNAK-GEREK).",
                 kaynak="S. Gordon, The Marathas 1600-1818 (New Cambridge History of India II.4), böl. 4 — 'In November 1689, Zulfiqar Khan bought "
                 "access to Raigad' · 'In 1692 … Panhala and Raigad were retaken'; böl. 5 (1733 Janjira)" + CB),
    "K540": dict(guven="KAYNAKLI", kaynak="Cambridge History of Africa 3, böl. 5 (J. M. Abun-Nasr) — 'conquest of Safi (1508) and Azemmour (1513)'" + CB +
                 " · TDV «Meczûb» 1508 tarihi Safi'ye ait olabilir — çelişki büyük ölçüde çözüldü (Azemmûr 1513)"),
    "K539": dict(guven="KAYNAKLI", kaynak=TDV + "sadiler — 1541 Portekiz tahliyesi, 956/1549 Fas şehri · CHA 3 böl. 5 (Abun-Nasr) Azemmour 1513 "
                 "fethini teyit eder, tahliye yılı vermez" + CB),
    "K600": dict(guven="KAYNAKLI", kaynak="Cambridge History of Africa 8, böl. 12 — Mali Federasyonu'nun 'break-up … immediately after its independence "
                 "in August 1960'" + CB + " (günler yok; Senegal 1960-08-20 KAYNAK-GEREK)"),
})
U["K542"] = dict(kaynak="TDV'de Çemişgezek beyliği maddesi yok (cemisgezek, cemiskezek-beyligi, cemisgezek-beyligi denendi); Oxford okunmadı — bulunamadı")
U["K551"] = dict(kaynak="TDV'de Bohtan / Cezîre-i İbn Ömer maddesi 1351 tarihini vermiyor (bohtan, cizre, cezire-i-ibn-omer denendi) — bulunamadı; "
                 "KOVALAR F'ye bakınız")
U["K593"] = dict(kaynak="TDV «Bingöl» okundu: Timur 14. yy sonunda Çapakçur'da ordugâh kurdu; 15. yy ortasında Akkoyunlu, sonra Akkoyunlu-Karakoyunlu "
                 "çekişmesi — 1387-1405 Karakoyunlu sahipliği TDV'de yok (KAYNAK-GEREK kalır)")
n = 0
for k, v in U.items():
    H[k].update(v)
    n += 1
H["_aciklama"] = H["_aciklama"].split(" KAYNAK4")[0] + " KAYNAK4 (LAB SALI): %d hüküm TDV / Hrvatska enciklopedija / Treccani ile güncellendi (kaynak6_uygula.py)." % n
json.dump(H, open(YOL, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=0)
print("güncellendi", n)

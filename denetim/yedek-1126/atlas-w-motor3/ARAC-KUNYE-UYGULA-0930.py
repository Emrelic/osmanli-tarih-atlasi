# -*- coding: utf-8 -*-
"""KUNYE-UYGULA-0930 — 29 Eylül künye kalemlerini `data/devletler.js`e uygular.

    py -X utf8 denetim/ARAC-KUNYE-UYGULA-0930.py            # KURU KOŞU (varsayılan)
    py -X utf8 denetim/ARAC-KUNYE-UYGULA-0930.py --uygula   # data/devletler.js'e YAZAR

Güvenlik kapıları `ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py`den ALINIR (kopyalanmaz, import
edilir): her DEGIS dizgisi kayıt bloğunda TAM 1 kez · yeni id dosyada 0 kez · tek ret
varsa --uygula HİÇ yazmaz · yamalı metin node+vm ile koşar · harita s:/isg:/v:kid
penceresi taranır. Bu dosyanın eklediği tek şey: kalem listesi (sınıflandırılmış,
kaynaklı) + 30 Eylül'ün 12 yetim kronoloji dosyasının kimlik sınavı.

KALEM SINIFI (D205): ① devlet öldü → KISALT · ② aynı polity → GENİŞLET · ③ ardıl →
ARDIL KÜNYE · yeni → hiç yoktu · gün → aynı polity, günü kaynağa hizala · metin.
RED/BEKLEYEN kalemler rapora gider: `denetim/KUNYE-UYGULA-0930-RED.md`.
"""
import io, os, re, sys, json, subprocess, importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
_sp = importlib.util.spec_from_file_location("birlestir0929", os.path.join(KOK, "denetim", "ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py"))
B = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(B)
kunye = B.kunye

# ════════════════════════════════════════════════════════════════════════
# YENİ KÜNYELER — 0929 önerileri (kesin + koşullu, uçları bu oturumda yeniden
# sınıflandırıldı) + 30 Eylül yetim dosyalarının künyesiz kimlikleri
# ════════════════════════════════════════════════════════════════════════
_0929 = {re.search(r'id:"([^"]+)"', y["kayit"]).group(1): y for y in B.YENI}
YENI_0929_AL = ["bosna-eyaleti", "iskodra-pasaligi", "arnavutluk-osmanli", "samtshe-atabegligi",
                "revan-hanligi", "cenub-i-garbi-kafkas", "ukrayna-devleti-1918"]
YENI = [dict(_0929[i], grup="kesin") for i in YENI_0929_AL]
_T = "30 Eylül 2026 KUNYE-UYGULA-0930. "
_BOUND = "🟡 TANIKLIK SINIRI: bu uç kuruluş/yıkılış günü DEĞİL, kaynağın devleti VAR gösterdiği en uç gündür (uydurma yok; gerçek ömür daha uzun). "
def Y(sinif, *a, **k):
    return dict(grup="kesin", sinif=sinif, kayit=kunye(*a, **k))
YENI += [
 Y("yeni künye (0929 koşullu → uçlar kaynaklandı)", "epir-despotlugu", "Epir (Yanya) Despotluğu — Tocco dönemi dâhil", "prenslik", "balkanlar",
   "1204-04-13", "1430-10-01",
   "IV. Haçlı Seferi sonrası Epir'de kurulan Bizans ardılı despotluk; Sırp, Arnavut ve Tocco yönetimlerinden geçerek 1430'da Yanya'nın Osmanlı'ya teslimiyle sona erdi. Harita rengi verilmedi (Yanya haritada bizans boyasıyla — ayrı iş).",
   "TDV `yanya`: '1204'teki IV. Haçlı Seferi'nden sonra Despot I. Mikael Angelos (Komnenos) 1430'a kadar yaşayan bağımsız Yunan Epiros Despotluğu'nu kurdu' · t: TDV `yanya`: 'Sphrantzes'e göre Yanya 1430'un Ekim ayında … Sinan Paşa'ya teslim oldu' · Britannica 'Greece — Despotate of Epirus': 'established effective control after 1204'. Öneren: KRONO-BALKAN-D-0929 + KUNYE-DUNYA-0929.",
   not_=_T + _BOUND + "f: '1204'ten SONRA' — yıl kaynakta yok; f = IV. Haçlı'nın İstanbul'u alış günü (bizans künyesi 1204-04-13), kuruluşun ALT sınırı. t: AY hassasiyeti (Ekim 1430); çekirdekteki 1430-10-09 günü TDV'de yok. Britannica ana maddesi 1204-1337 der (1337 Bizans'a dönüş); bu künye Tocco dönemini de kapsar."),
 Y("③ bölünme (bulgar-carligi'nden) — 0929 koşullu → uçlar kaynaklandı", "vidin-carligi", "Vidin Çarlığı (İvan Sracimir)", "prenslik", "balkanlar",
   "1360-01-01", "1396-09-25",
   "İvan Aleksandr'ın Vidin ve çevresini oğlu İvan Sracimir'e vermesiyle doğan yarı bağımsız Bulgar çarlığı; Niğbolu'dan sonra Yıldırım Bayezid onu Osmanlı'ya kattı. bulgar-carligi künyesi Vidin'i de taşımayı sürdürür (Ç2 hükmü koordinatörde).",
   "TDV `vidin` (M. Kiel): 'İvan Aleksandr 1360'tan kısa bir süre önce Vidin'i ve çevresini oğlu İvan Sratsimir'e … vererek bölgeyi yarı bağımsız bir prenslik haline getirdi' · 'Yıldırım Bayezid, Niğbolu'da Haçlı ordularını bozguna uğratınca Sracimir'i Bursa'ya götürdü, Vidin Prensliği'ni de kendi imparatorluğuna kattı' · TDV `nigbolu-savasi`: '(25 Eylül 1396)'. Öneren: KRONO-BALKAN-D-0929.",
   not_=_T + _BOUND + "f: kuruluş '1360'tan kısa bir süre önce' — 1360 başında VARDI. t: ilhak Niğbolu'dan SONRA (gün kaynakta yok) — 25 Eylül 1396'da hâlâ VARDI. Atlasın 1396-10-01'i kaynaksız, kullanılmadı."),
 Y("yeni künye (ayrıştırma — gurcistan 'Krallıkları'ndan)", "kartli-kralligi", "Kartli Krallığı (1762'den Kartli-Kaheti)", "krallik", "kafkasya",
   "1484-01-01", "1801-09-12",
   "Gürcistan'ın 15. yüzyıl sonunda bölünmesinden doğan Tiflis merkezli krallık; 1762'de Kaheti ile birleşti, 1801'de Rusya'ya ilhak edildi. gurcistan künyesi (1008-1801) aynı toprağı taşımayı sürdürür; harita rengi verilmedi.",
   "f: Encyclopaedia Iranica 'KARTLI': 'From 1484 to 1762 Kartli was as a distinct political entity mostly dominated by Persia' (YIL) · t: TDV `gurcistan`: 'I. Pavel, 1800'de Kartli ve Kahet çarlığını feshedip 12 Eylül 1801 tarihli emirle Rusya'nın bir eyaleti ilân ederek'. Öneren: KRONO-KAFKAS-0929 + KUNYE-DUNYA-0929.",
   not_=_T + "f: YIL kodlu ('ayrı siyasî birim' yılı, taç giyme günü değil). 0929 önerisinin 1490'ı hiçbir güvenilir kaynakta bulunamadı, kullanılmadı."),
 Y("yeni künye (Gürcü prensliği)", "megrelya-prensligi", "Megrelya (Dadyan / Odişi) Prensliği", "prenslik", "kafkasya",
   "1578-08-09", "1857-01-01",
   "Batı Gürcistan'da Dadyan (Dadiani) hanedanının prensliği; 1578'de Osmanlı'ya tâbiliğini bildirdi, 1803'te Rus himayesine girdi, Kırım Harbi'nden sonra feshedildi.",
   "f (tanıklık): TDV `gurcistan` 3. bölüm: 'Lala Mustafa Paşa'nın gönderdiği itaat mektubunu kabul eden Dadyan ve Güryel melikleri … Osmanlılar'a tâbi olduklarını bildirdiler' (1578) · t: Britannica 'Georgia — Turkish and Persian domination': 'Imereti was annexed in 1810, followed by Guria, Mingrelia, Svaneti, and Abkhazia in 1829, 1857, 1858, and 1864, respectively' (YIL) · TDV `gurcistan`: 'Kırım Harbi'nden sonra Megreliya, Svanetiya ve Abhaz knezlikleri feshedildi'. Öneren: KRONO-KAFKAS-0929.",
   not_=_T + _BOUND + "f: kuruluş yılı TDV/Britannica/Iranica'da BULUNAMADI ('beş beyliğe ayrıldı', yılsız); f = prensliği adıyla anan ilk kaynaklı gün (1578 tâbilik bildirimi). t: YIL kodlu. TDV'nin 1803'ü himaye/birleşmedir, ilga değil."),
 Y("yeni künye (Gürcü prensliği)", "guria-prensligi", "Guria (Güryel) Prensliği", "prenslik", "kafkasya",
   "1508-01-01", "1829-01-01",
   "Batı Gürcistan'da Karadeniz kıyısındaki Güryel prensliği; 1508'de Osmanlı'ya haraca bağlandı, 1804'te Rus himayesine girdi, 1829'da ilhak edildi.",
   "f (tanıklık): TDV `gurcistan` 3. bölüm: 'Yavuz Sultan Selim Trabzon valisi iken 1508'de Güryel ve İmeret (Açıkbaş) Krallığı'nı Osmanlılar'a itaat ettirip haraca bağlamıştı' · t: Britannica 'Georgia — Turkish and Persian domination': '… followed by Guria, Mingrelia, Svaneti, and Abkhazia in 1829, 1857, 1858, and 1864, respectively' (YIL). Öneren: KRONO-KAFKAS-0929.",
   not_=_T + _BOUND + "f: kuruluş yılı BULUNAMADI; f = prensliği adıyla anan ilk kaynaklı YIL (1508 haraç). t: YIL kodlu. TDV'nin 'Guriya (1804)'ü himayedir, ilhak değil."),
 Y("yeni künye (Kafkas prensliği)", "abhazya-prensligi", "Abhazya (Şervaşidze / Çaçba) Prensliği", "prenslik", "kafkasya",
   "1463-01-01", "1864-01-01",
   "Karadeniz kıyısında Sohum merkezli prenslik; 1463'te Gürcistan'dan bağımsızlaştı, 16. yüzyılda Osmanlı hâkimiyetine girdi, 1810'da Rus himayesini tanıdı, 1864'te ilhak edildi.",
   "Britannica 'Abkhazia': 'Later a part of Georgia, it secured its independence in 1463 only to come under the rule of the Ottoman Empire in the 16th century' · 'In 1810 a treaty with Russia was signed acknowledging a protectorate. Russia annexed Abkhazia in 1864' (iki uç YIL) · TDV `sohum`: 'şehir 1864'te doğrudan Rusya'ya bağlandı'. Öneren: KRONO-KAFKAS-0929.",
   not_=_T + "f: 1463 Gürcistan'dan BAĞIMSIZLIK yılıdır; Şervaşidze hanedanının prenslik olarak kuruluşu ayrıca belgelenmemiş. İki uç YIL kodlu."),
 Y("yeni künye (Ç4: iki künye — veride iki id de kullanılıyor)", "ukrayna-halk-cumhuriyeti", "Ukrayna Halk Cumhuriyeti", "cumhuriyet", "dogu-avrupa",
   "1917-11-20", "1920-11-21",
   "Merkezî Rada'nın Üçüncü Üniversal'iyle ilan edilen Ukrayna devleti; 9 Şubat 1918 Brest-Litovsk'ta Osmanlı'nın antlaşma tarafı. 29 Nisan - 14 Aralık 1918 arası Skoropadski Hetmanlığı (ukrayna-devleti-1918) iktidardaydı; 1920'de hükûmet sürgüne gitti.",
   "Encyclopedia of Ukraine 'Ukrainian National Republic': 'first proclaimed in the Third of the Universals of the Central Rada on 20 November 1917' · 'existed on Ukrainian territory until 1920, when the head of the Directory and the government of the UNR went into exile' · gün: EoU 'Army of the Ukrainian National Republic': 'On 21 November the UNR Army crossed the Zbruch River and was interned by the Polish authorities'. Öneren: KRONO-TUNA-0929 Ö-4 + KUNYE-DUNYA-0929.",
   not_=_T + "🟡 t: ana madde YIL verir; gün aynı ansiklopedinin ordu maddesinden. ÇELİŞKİ: EoU savaş maddesi 'continued fighting until 21 October' der — muhtemelen yazım hatası, bildirildi. 1918 Hetmanlık dönemiyle örtüşme BİLİNÇLİ (Ç4)."),
 Y("yeni künye", "tahiri", "Tâhirîler (Yemen)", "hanedanlik", "arabistan",
   "1454-07-01", "1517-04-15",
   "Yemen'de Resûlîler'den sonra hüküm süren Sünnî hanedan; Memlük seferinin ardından son hükümdar II. Âmir'in öldürülmesiyle sona erdi.",
   "TDV `tahiriler--yemen`: 'Yemen'de Resûlîler'den sonra 1454-1517 yılları arasında hüküm süren Sünnî bir hânedan' · f: 'Aden'i ele geçirdiler (Receb 858/Temmuz 1454)' · t: 'el-Melikü'z-Zâfir II. Âmir öldürüldü (23 Rebîülevvel 923/15 Nisan 1517). … Böylece Tâhirîler hânedanına son verildi'. Öneren: KRONO-DOGU-ISLAM-0929 (+ KUNYE-DUNYA 'tahiriler').",
   not_=_T + "f: AY hassasiyeti (Receb 858 = Temmuz 1454). Doğru TDV slug'ı `tahiriler--yemen` (`tahiriler` 302). Harita Zebîd'i `s:{d:\"yemen\"}` ile boyuyor — ayrı iş, künye haritayı değiştirmez."),
 Y("yeni künye (sömürge genel valiliği)", "yeni-granada-valiligi", "Yeni Granada Genel Valiliği", "gecici-isgal", "guney-amerika",
   "1717-05-27", "1810-07-20",
   "Bogotá merkezli İspanyol genel valiliği (bugünkü Kolombiya, Ekvador, Panama ve 1777'ye dek Venezuela); 1723'te kaldırılıp 1739'da yeniden kuruldu; 1810 bağımsızlık hareketleriyle dağıldı.",
   "Diccionario de Historia de Venezuela (Fundación Empresas Polar) 'Nueva Granada, Virreinato de': 'Por real cédula del 27 de mayo de 1717 determinó el rey Felipe V crear el virreinato' · 'La orden de supresión se dio por real cédula de 5 de noviembre de 1723' · 'por real cédula del 20 de agosto [1739], volver a crear el virreinato' · 'movimiento emancipador del 20 de julio de 1810' · Britannica 'Viceroyalty of New Granada': 'began to disintegrate in 1810'. Öneren: KRONO-AMERIKA-G-0929.",
   not_=_T + "🟡 1723-11-05 → 1739-08-20 arası valilik YOKTU (Yeni Granada Peru'ya bağlı audiencia) — künye tek pencere, ara boşluk BEYANLI. t: 1810 dağılma; valilik 1816'da yeniden kuruldu, Boyacá (1819) sonrası sona erdi — o dönem bu künyenin DIŞINDA."),
 Y("yeni künye (sömürge genel valiliği)", "rio-de-la-plata-valiligi", "Río de la Plata Genel Valiliği", "gecici-isgal", "guney-amerika",
   "1776-01-01", "1810-05-25",
   "Buenos Aires merkezli İspanyol genel valiliği (bugünkü Arjantin, Uruguay, Paraguay, Bolivya); Peru valiliğinden ayrıldı, 1810 Mayıs Devrimi'yle sona erdi.",
   "Britannica 'Viceroyalty of the Río de la Plata': 'the new viceroyalty (established in 1776)' · 'In 1810 the Creoles created a provisional junta and exiled the viceroy … thereby ending the Viceroyalty of the Río de la Plata' (iki uç YIL) · gün komşudan: arjantin-cumhuriyeti f: 1810-05-25 · Encyclopedia.com / EB-LA 'In May 1810 prominent Creoles in Buenos Aires … forced the last Spanish viceroy there to consent'. Öneren: KRONO-AMERIKA-G-0929.",
   not_=_T + "f: YIL kodlu (1776-08-01 ve 1777-10-27 yalnız Vikipedi'de). t: gün komşudan: arjantin-cumhuriyeti · Mayıs Devrimi (aynı olay). ÇELİŞKİ: Gran Enciclopèdia Catalana 1777/1814 der. Montevideo 1814'e dek kralcı kaldı — kronoloji_cok_guney_amerika.js 1811-05-18 Las Piedras maddesi bu yüzden pencere DIŞINDA."),
 Y("yeni künye (sömürge genel kaptanlığı)", "venezuela-genel-kaptanligi", "Venezuela Genel Kaptanlığı", "gecici-isgal", "guney-amerika",
   "1777-09-08", "1810-04-19",
   "Caracas merkezli Bourbon idari birliği; Venezuela eyaletleri Yeni Granada valiliğinden idarî ve askerî bakımdan ayrıldı; 19 Nisan 1810 Caracas cuntasıyla sona erdi.",
   "Diccionario de Historia de Venezuela (Fundación Empresas Polar) 'Capitanía General': 'Del 8 de septiembre de 1777 al 19 de abril de 1810 : el jefe de la provincia de Venezuela (o Caracas) seguirá siendo gobernador en su provincia y capitán general en la suya y en las demás'. Öneren: KRONO-AMERIKA-G-0929."),
 Y("yeni künye (WIC sömürgesi)", "hollanda-brezilyasi", "Hollanda Brezilyası (Nieuw Holland)", "gecici-isgal", "guney-amerika",
   "1630-02-16", "1654-01-26",
   "Hollanda Batı Hindistan Şirketi'nin Pernambuco merkezli Brezilya sömürgesi; Olinda'nın alınmasıyla başladı, Campina do Taborda teslimiyle sona erdi.",
   "f: Olinda Belediyesi 'Nossa cidade': 'Em 16 de fevereiro de 1630, a Holanda invadiu Olinda e conquistou Pernambuco' · RTP Ensina: 'Olinda … foi tomada pelos holandeses em 16 de fevereiro de 1630' · t: Brezilya Ordusu DPHCEx: '26 DE JANEIRO - Capitulação Final dos Invasores Holandeses na Campina do Taborda, Pernambuco, 1654' · Britannica 'Olinda': 'In 1630 the Dutch captured the city, occupying it until 1654'. Öneren: KRONO-AMERIKA-G-0929.",
   not_=_T + "🟡 t: günü DPHCEx sayfasının BAŞLIĞINDAN okundu, gövde okunamadı (sertifika hatası); Britannica yılı teyit eder."),
 Y("③ öncül yapı (burgonya ardılı, hollanda öncülü)", "habsburg-hollandasi", "Habsburg Hollandası (On Yedi Eyalet)", "gecici-isgal", "bati-avrupa",
   "1482-03-27", "1581-07-26",
   "Burgonya mirasının Habsburglara geçmesiyle oluşan Alçak Ülkeler; 1555'ten İspanyol Habsburg idaresi. Kuzey eyaletleri 26 Temmuz 1581'de II. Felipe'ye bağlılıktan çekildi; güney İspanyol (1714'e dek) ve Avusturya (1794'e dek) Felemengi olarak sürdü — o dönem bu künyenin DIŞINDA.",
   "f: Britannica 'Mary, duchess of Burgundy': 'died March 27, 1482, Brugge' · 'resulted in Habsburg control of the Netherlands' · t: Nationaal Archief 'Plakkaat van Verlatinge 1581': 'Op 26 juli 1581 zeggen de Staten-Generaal hun trouw aan koning Filips II op.' · TDV `hollanda`. Öneren: KRONO-ATLANTIK-B-0929 K-1.",
   not_=_T + "f = burgonya künyesinin t'si ile ardışık (Marie'nin ölümü). Britannica Habsburg denetimini 18 Ağustos 1477 evliliğinden başlatır — alternatif uç, bildirildi. t yalnız KUZEY için; hollanda künyesi (f 1581-07-26) ile ardışık."),
 Y("③ ardıl yapı (hollanda içinde Fransız himayesi dönemi)", "batav-cumhuriyeti", "Batav Cumhuriyeti / Holland Krallığı", "cumhuriyet", "bati-avrupa",
   "1795-01-19", "1810-07-09",
   "Fransız himayesinde kurulan Batav Cumhuriyeti (1795), Haziran 1806'dan Louis Bonaparte'ın Holland Krallığı; 9 Temmuz 1810'da Fransa'ya ilhak edildi. hollanda künyesi (1581-1923) bu dönemi de taşır; bu künye yalnız kronoloji içindir, harita rengi verilmedi.",
   "f: Canon van Nederland: 'Op 19 januari 1795 … wordt in patriottisch Amsterdam de vrijheid uitgeroepen: het begin van de Bataafse Republiek' · Britannica 'Batavian Republic': 'In June 1806 … replaced by the Kingdom of Holland under Napoleon's brother Louis' · t: parlement.com 'Koninkrijk Holland 1806-1810': 'op 9 juli 1810 wordt bij het Decreet van Rambouillet Holland ingelijfd bij Frankrijk' · TDV `hollanda`: 'Fransız himayesinde Batav Cumhuriyeti kuruldu (1795)'. Öneren: KRONO-ATLANTIK-B-0929 K-2 + KUNYE-DUNYA-0929.",
   not_=_T + "ÇELİŞKİ (1 gün): Nationaal Archief 'op 20 januari 1795 de Bataafse Republiek uitgeroepen' der; Canon'un 19 Ocak Amsterdam ilanı seçildi. Holland Krallığı (1806-1810) aynı künyede (KUNYE-DUNYA önerisi)."),
 Y("yeni künye (Aragon tacından ayrılan ayrı taç)", "mayorka", "Mayorka Krallığı", "krallik", "iberya",
   "1276-07-27", "1349-10-25",
   "I. Jaume'nin vasiyetiyle Aragon tacından ayrılan krallık (Mayorka, Menorka, İbiza, Rusiyon, Cerdanya, Montpellier); IV. Pedro 1343'te adayı aldı, son kral III. Jaume 1349'da Llucmajor'da tacını ve hayatını kaybetti.",
   "Gran Enciclopèdia Catalana 'regne de Mallorca': 'creat a la mort de Jaume I de Catalunya-Aragó, el 1276' · 'Jaume I de Catalunya-Aragó': '… València, 27 de juliol de 1276' · 'passà a Mallorca el 18 de maig de 1343 i s'apoderà de l'illa ràpidament' · 'Jaume III de Mallorca': 'A la batalla de Llucmajor, el 25 d'octubre de 1349, perdé definitivament la corona i la vida'. Öneren: KRONO-ATLANTIK-A-0929.",
   not_=_T + "t = tacın KESİN kaybı (1349); ada 1343'te fiilen Aragon'a geçti. Toprak haritada aragon boyasıyla — künye haritayı değiştirmez."),
 Y("yeni künye (Sardinya yargıçlığı)", "arborea", "Arborea Yargıçlığı (Sardinya)", "krallik", "italya",
   "1070-01-01", "1410-01-01",
   "Sardinya'yı bölen dört yargıçlıktan (jutjat) biri, merkez Oristano; Aragon'a karşı uzun direnişin ardından 1410'da kaldırıldı, hakları 1420'de V. Alfonso'ya satıldı.",
   "Gran Enciclopèdia Catalana 'jutjat d'Arborea': 'Un dels quatre jutjats en què es dividia Sardenya al segle XI … El primer jutge privatiu d'Arborea documentat és Marià I de Zori (1060-70)' · t: 'renuncià al jutjat d'Arborea, que fou suprimit … (1410)' · 'foren comprats per Alfons IV … el 1420, per 100 000 florins'. Öneren: KRONO-ATLANTIK-A-0929.",
   not_=_T + _BOUND + "f: kuruluş yılı YOK ('11. yüzyıl'); f = belgelenen ilk yargıcın döneminin (1060-70) sonu — o yıl yargıçlık VARDI. t: YIL kodlu (1410 ilga); 1420 satış devletin sonu değil, hakların devridir. 0929 önerisinin 1420-08-17'si bulunamadı."),
 Y("yeni künye (0929'da 'açma' önerildi — dosya bağlanamadığı için açıldı)", "orta-amerika-federasyonu", "Orta Amerika Federal Cumhuriyeti", "federasyon", "orta-amerika",
   "1823-07-01", "1838-05-30",
   "Guatemala, El Salvador, Honduras, Nikaragua ve Kosta Rika'nın İspanya ve Meksika'dan bağımsızlığını ilan eden federasyonu; 1838'de federal kongre eyaletleri serbest bıraktı.",
   "f: Universidad Francisco Marroquín 'Centroamérica declara su independencia, 1 de julio de 1823': 'El 1 de julio de 1823, las provincias de Centro América se declararon libres e independientes' (Memoria Chilena aynı gün) · t: G. Sanz y Tovar, Revista de Política Internacional (CEPC): 'El 30 de mayo de 1838 el Congreso federal publicó un Decreto declarando que se dejaba a los Estados para que organizaran su Gobierno'. Öneren: KRONO-AMERIKA-K-0929 §2.",
   not_=_T + "ÇELİŞKİ: Britannica federasyonu 1823-40 verir (Morazán'ın Mart 1840 yenilgisi); CEPC kararnamesi (1838-05-30) seçildi. KRONO-AMERIKA-K 'açma, madde guatemala'ya da bağlı' dedi; ama madde bu id'yi taşıdığı için kronoloji_cok_orta_amerika.js künye bulmadan BAĞLANAMIYORDU (YETIM-KRONO-0930)."),
 Y("yeni künye (valilik öncesi dönem; yeni-ispanya'nın öncülü)", "yeni-ispanya-ilk-donem", "Yeni İspanya — Genel Valilik Öncesi (Cortés ve Audiencia, 1521-1535)", "gecici-isgal", "orta-amerika",
   "1521-08-13", "1535-04-17",
   "Tenochtitlan'ın düşüşünden genel valiliğin kuruluşuna kadar Yeni İspanya'nın İspanyol idaresi: Cortés'in valiliği (1522 atama) ve 1527'den Birinci Audiencia.",
   "f: Britannica 'Hernán Cortés': 'its capture was completed on August 13, 1521. … Cortés had become the absolute ruler of a huge territory' · M. Ramos Medina (CEHM Carso) kronolojisi, cervantesvirtual: '15 de octubre [1522]: Carlos V firma Real Cédula nombrando a Cortés gobernador, capitán general y justicia mayor de Nueva España' · t: yeni-ispanya künyesinin f'si ile ardışık · Britannica 'Viceroyalty of New Spain': 'Established in 1535'. Öneren: KRONO-AMERIKA-K-0929 §1.",
   not_=_T + "KRONO-AMERIKA-K yeni-ispanya'nın f'sini 1521'e GENİŞLETMEYİ önerdi (②); ama iki madde bu id'yi taşıdığı için ayrı künye açıldı — yeni-ispanya'ya dokunulmadı. Alternatif f: 1522-10-15 (Cortés'in atanması). t: yeni-ispanya f: 1535-04-17 ile ardışık (sınır işareti)."),
 Y("yeni künye", "nagpur-bhonsle", "Nagpur Bhonsle Krallığı", "krallik", "guney-asya",
   "1730-01-01", "1853-12-11",
   "Berar'dan Raghuji Bhonsle'nin kurduğu Maratha hanedanının Nagpur krallığı; 1818'den İngiliz himayesinde sürdü, III. Raghuji'nin varissiz ölümüyle 'ölüm ilkesi' uyarınca İngiliz Hindistanı'na katıldı.",
   "Britannica 'Bhonsle Dynasty': 'Raghuji Bhonsle of Berar founded the dynasty in 1730.' · 'They were British clients from 1818 to 1853.' · Britannica 'Nagpur': 'In 1853 the city lapsed into British control' · gün komşudan: kronoloji_cok_orta_asya2.js 1853-12-11 maddesi · Metcalf & Metcalf, A Concise History of Modern India (Cambridge UP 2006) + Britannica 'Doctrine of Lapse'. Öneren: KRONO-ASYA-UZAK-0929 K3.",
   not_=_T + "f: YIL kodlu (hanedanın kuruluşu). t: Britannica YIL verir; gün komşudan: 1853-12-11 maddesi (III. Raghuji'nin ölümü · Metcalf 2006 — o madde sayfa vermez, beyanlı). Britannica bir yerde Raghuji'nin saltanatını 1727-55 der."),
]

# ════════════════════════════════════════════════════════════════════════
# DEĞİŞİKLİKLER — (eski, yeni) dizgisi kayıt bloğunda TAM 1 kez
# ════════════════════════════════════════════════════════════════════════
DEGIS = [d for d in B.DEGIS if d["grup"] == "kesin" and d["id"] != "karakoyunlu"]
DEGIS += [
 dict(grup="kesin", id="erdel", sinif="gün (t) + künye maddeleri", paket="KRONO-ORTA-AVRUPA B1",
      kaynak="Magyar Nemzeti Levéltár 'A szatmári béke': '1711. április 29-én Nagykárolyban írta alá' · Magyar Katolikus Lexikon 'Diploma Leopoldinum': 'I. 1691. XII. 4'",
      degis=[('t:"1711-04-30", baskent:"Gyulafehérvár"', 't:"1711-04-29", baskent:"Gyulafehérvár"'),
             ('{ t:"1690-12-04", tur:"antlasma", b:"Diploma Leopoldinum ile Habsburg üstünlüğü altında özerklik tanındı" }',
              '{ t:"1691-12-04", tur:"antlasma", b:"Diploma Leopoldinum ile Habsburg üstünlüğü altında özerklik tanındı", kaynak:"Magyar Katolikus Lexikon \'Diploma Leopoldinum\': \'I. 1691. XII. 4\' (KRONO-ORTA-AVRUPA-0929 B1)" }'),
             ('{ t:"1711-04-30", tur:"son", b:"Szatmár Antlaşması ile kesin olarak Habsburg\'a bağlandı" }',
              '{ t:"1711-04-29", tur:"son", b:"Szatmár Antlaşması ile kesin olarak Habsburg\'a bağlandı", kaynak:"Magyar Nemzeti Levéltár \'A szatmári béke\': \'1711. április 29-én Nagykárolyban írta alá\' (KRONO-ORTA-AVRUPA-0929 A1)" }')]),
 dict(grup="kesin", id="karakoyunlu", sinif="② GENİŞLET (t)", paket="KRONO-DOGU-ISLAM + KUNYE-DUNYA ④",
      kaynak="TDV `karakoyunlular`: Hasan Ali Şevval 873 (Nisan 1469); Bağdat kolunun sonu 14 Cemâziyelâhir 874 / 19 Aralık 1469",
      degis=[('  f:"1351-01-01", t:"1469-01-01", baskent:', '  f:"1351-01-01", t:"1469-12-19", baskent:'),
             ('{ t:"1469-01-01", tur:"son", b:"Akkoyunlu\'ya yenilerek yıkıldı" }',
              '{ t:"1469-04-01", tur:"toprak-kayip", b:"Akkoyunlu\'ya yenildi; son hükümdar Hasan Ali öldürüldü", kaynak:"TDV karakoyunlular / uzun-hasan: Şevval 873 (Nisan 1469) — AY hassasiyeti" },\n    { t:"1469-12-19", tur:"son", b:"Bağdat\'taki son Karakoyunlu kolu da düştü; hanedan sona erdi", kaynak:"TDV karakoyunlular: 14 Cemâziyelâhir 874 / 19 Aralık 1469 (KRONO-DOGU-ISLAM-0929)" }')]),
 dict(grup="kesin", id="katalan", sinif="gün (künye maddesi)", paket="KUNYE-DUNYA ④",
      kaynak="künyenin t'si ile aynı gün (TDV `atina`)",
      degis=[('{ t:"1388-01-01", tur:"son",', '{ t:"1388-05-02", tur:"son",')]),
 dict(grup="kesin", id="mekke-serifligi", sinif="not", paket="KUNYE-DUNYA ④",
      kaynak="t değişikliğinin kaydı",
      degis=[("şeriflik o gün sona ermedi, Hicaz Krallığı olarak sürdü.\"",
              "şeriflik o gün sona ermedi, Hicaz Krallığı olarak sürdü. 30 Eylül 2026 KUNYE-UYGULA-0930: t: 1919-05-08'e GENİŞLETİLDİ (②) — TDV `mekke`: '8 Mayıs 1919'da çıkarılan Meclis-i Vükelâ kararı ve irâde-i seniyye ile emirlik unvanı kaldırılıp…'; artık gün KAYNAKLI.\"")]),
 dict(grup="kesin", id="zeyyani", sinif="① KISALT (t, 1 yıl)", paket="KRONO-MAGRIB B5",
      kaynak="TDV `tilimsan`: '960'ta (1553) … Tilimsân şehri Sâlih Reis kumandasındaki Osmanlı ordusu tarafından kesin biçimde ele geçirildi. Böylece üç asırdan fazla süren Zeyyânî hâkimiyeti sona ermiş'",
      degis=[('f:"1236-01-01", t:"1554-01-01", baskent:"Tilimsan (Tlemcen)"', 'f:"1236-01-01", t:"1553-01-01", baskent:"Tilimsan (Tlemcen)"'),
             ('{ t:"1554-01-01", tur:"son", b:"Osmanlı beylerbeyi Salih Reis Tilimsan\'ı alarak hanedana son verdi" }',
              '{ t:"1553-01-01", tur:"son", b:"Osmanlı beylerbeyi Salih Reis Tilimsan\'ı alarak hanedana son verdi", kaynak:"TDV tilimsan: \'960\'ta (1553) … kesin biçimde ele geçirildi. Böylece … Zeyyânî hâkimiyeti sona ermiş\' — YIL (H.960 = Ara 1552-Ara 1553)" }')]),
 dict(grup="kesin", id="rif-cumhuriyeti", sinif="gün (f, 1 gün)", paket="KRONO-MAGRIB C",
      kaynak="TDV `fas`: 'bağımsızlığını ilân etti (19 Eylül 1921)' · `abdulkerim-el-hattabi` aynı gün",
      degis=[('f:"1921-09-18", t:"1926-05-27"', 'f:"1921-09-19", t:"1926-05-27"'),
             ("ardından 18 Eylül 1921'de Kuzey Fas'ta ilan edilen", "ardından 19 Eylül 1921'de Kuzey Fas'ta ilan edilen (TDV `fas`: 'bağımsızlığını ilân etti (19 Eylül 1921)'; 30 Eylül 2026'ya dek künye 18 Eylül diyordu)")]),
 dict(grup="kesin", id="trablusgarp-ocagi", sinif="gün (künye maddeleri)", paket="KRONO-MAGRIB B3/B4",
      kaynak="TDV `karamanli`: 'Trablusgarp eyaletinin idaresini ele geçirdi (29 Temmuz 1711)' · 'Bunlar 27 Mayıs'ta Trablusgarp'ta karaya çıktılar' (1835)",
      degis=[('{ t:"1711-01-01", tur:"hukumdar", b:"Ahmed Karamanlı özerk hanedanlığını kurdu" }',
              '{ t:"1711-07-29", tur:"hukumdar", b:"Ahmed Karamanlı özerk hanedanlığını kurdu", kaynak:"TDV karamanli: \'Trablusgarp eyaletinin idaresini ele geçirdi (29 Temmuz 1711)\'" }'),
             ('{ t:"1835-01-01", tur:"toprak-kazanc", b:"Osmanlı doğrudan idareyi yeniden tesis etti (Karamanlı hanedanına son)" }',
              '{ t:"1835-05-27", tur:"toprak-kazanc", b:"Osmanlı doğrudan idareyi yeniden tesis etti (Karamanlı hanedanına son)", kaynak:"TDV karamanli: \'Bunlar 27 Mayıs\'ta Trablusgarp\'ta karaya çıktılar. Ertesi gün … tutuklandı\' — çekirdek 1835-05-26 (1 gün fark, bildirildi)" }')]),
 dict(grup="kesin", id="tunus-ocagi", sinif="gün (künye maddesi)", paket="KRONO-MAGRIB B6",
      kaynak="TDV `huseyin-pasa-tunus-beyi`: '20 Rebîülevvel 1117 (12 Temmuz 1705) tarihinde Muhammed Hoca'yı dayı, Hüseyin'i de bey seçti'",
      degis=[('{ t:"1705-01-01", tur:"hukumdar", b:"Hüseyin bin Ali, kalıcı bey hanedanını kurdu (Osmanlı\'ya bağlı özerklik)" }',
              '{ t:"1705-07-12", tur:"hukumdar", b:"Hüseyin bin Ali, kalıcı bey hanedanını kurdu (Osmanlı\'ya bağlı özerklik)", kaynak:"TDV huseyin-pasa-tunus-beyi: \'20 Rebîülevvel 1117 (12 Temmuz 1705) tarihinde … Hüseyin\'i de bey seçti\'" }')]),
 dict(grup="kesin", id="abdulkadir", sinif="gün (künye maddesi)", paket="KRONO-MAGRIB C",
      kaynak="TDV `abdulkadir-el-cezairi`: '19 Kasımda “cihâd-ı mukaddes” ilân eden Abdülkādir'",
      degis=[('{ t:"1839-11-01", tur:"savas", b:"Antlaşma bozuldu, tam ölçekli Fransız-Cezayir savaşı yeniden başladı" }',
              '{ t:"1839-11-19", tur:"savas", b:"Antlaşma bozuldu, tam ölçekli Fransız-Cezayir savaşı yeniden başladı", kaynak:"TDV abdulkadir-el-cezairi: \'19 Kasımda cihâd-ı mukaddes ilân eden Abdülkādir\' (1839)" }')]),
 dict(grup="kesin", id="fas", sinif="gün (künye maddeleri)", paket="KRONO-MAGRIB C",
      kaynak="TDV `vattasiler` '(2 Muharrem 956 / 31 Ocak 1549)' · `mevlay-resid` '(9 Muharrem 1075 / 2 Ağustos 1664)' · `mevlay-ismail` '15 Zilhicce 1082 (13 Nisan 1672) tarihinde tamamlanan merasimde'",
      degis=[('{ t:"1549-01-01", tur:"kurulus", b:"Sâdî hanedanı, Vattâsîleri yenerek Fas ve Marakeş\'i aldı" }',
              '{ t:"1549-01-31", tur:"kurulus", b:"Sâdî hanedanı, Vattâsîleri yenerek Fas ve Marakeş\'i aldı", kaynak:"TDV vattasiler: \'(2 Muharrem 956 / 31 Ocak 1549)\' — künye f: 1549-01-01 YIL kodlu kaldı" }'),
             ('{ t:"1664-01-01", tur:"hukumdar", b:"Mevlây Reşîd başa geçti;',
              '{ t:"1664-08-02", tur:"hukumdar", kaynak:"TDV mevlay-resid: \'(9 Muharrem 1075 / 2 Ağustos 1664)\'", b:"Mevlây Reşîd başa geçti;'),
             ('{ t:"1672-01-01", tur:"hukumdar", b:"Mevlây İsmâil tahta çıktı, merkezi otoriteyi güçlendirdi (1727\'ye dek)" }',
              '{ t:"1672-04-13", tur:"hukumdar", b:"Mevlây İsmâil tahta çıktı, merkezi otoriteyi güçlendirdi (1727\'ye dek)", kaynak:"TDV mevlay-ismail: \'15 Zilhicce 1082 (13 Nisan 1672) tarihinde tamamlanan merasimde\' (biat)" }')]),
 dict(grup="kesin", id="bogdan", sinif="gün (künye maddesi, YIL hatası)", paket="KRONO-TUNA A1",
      kaynak="TDV `bogdan` ve `romanya`: Hadım Süleyman Paşa'nın yenilgisi 1475 (çekirdek olaylar_ek5.js ve savaslar.js de 1475-01-10)",
      degis=[('{ t:"1476-01-10", tur:"savas", b:"Ştefan cel Mare, Vaslui\'de Osmanlı\'yı yendi (Valea Albă\'da kısa süre sonra yenildi)" }',
              '{ t:"1475-01-10", tur:"savas", b:"Ştefan cel Mare, Vaslui\'de Osmanlı\'yı yendi (Valea Albă\'da ertesi yıl yenildi)", kaynak:"TDV bogdan · romanya: Vaslui yenilgisi 1475 — YIL; gün 01-10 eski kayıttan (KRONO-TUNA-0929 A1)" }')]),
 dict(grup="kesin", id="sirp-despotlugu", sinif="gün (künye maddesi)", paket="KRONO-BALKAN-B §2",
      kaynak="TDV `semendire`: 27 Ağustos 1439",
      degis=[('{ t:"1439-08-18", tur:"toprak-kayip", b:"Semendire ilk kez Osmanlı\'ya düştü" }',
              '{ t:"1439-08-27", tur:"toprak-kayip", b:"Semendire ilk kez Osmanlı\'ya düştü", kaynak:"TDV semendire: 27 Ağustos 1439 (KRONO-BALKAN-B-0929 §2)" }')]),
 dict(grup="kesin", id="sirbistan-prensligi", sinif="gün (künye maddesi)", paket="KRONO-BALKAN-B §1",
      kaynak="TDV `sirbistan`: 'Nihayet 17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti.'",
      degis=[('{ t:"1830-08-30", tur:"antlasma", b:"Özerklik fermanla tanındı" }',
              '{ t:"1830-10-17", tur:"antlasma", b:"Özerklik fermanla tanındı", kaynak:"TDV sirbistan: \'Nihayet 17 Ekim 1830\'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti.\'" }')]),
 dict(grup="kesin", id="arnavutluk-bagimsiz", sinif="metin", paket="KRONO-BALKAN-B §5",
      kaynak="TDV: Wied 3 Eylül 1914'te ülkeyi terk etti",
      degis=[("(Ekim'de I. Dünya Savaşı kargaşasında ülkeyi terk etti)", "(3 Eylül 1914'te I. Dünya Savaşı kargaşasında ülkeyi terk etti — TDV; eski metin 'Ekim'de')")]),
 dict(grup="kesin", id="girit-devleti", sinif="gün (künye maddesi)", paket="KRONO-BALKAN-D ④",
      kaynak="TDV `girit` (Tukin 1996): Prens George göreve 22 Aralık 1898'de başladı; künyenin kendi f:'si ve özeti de 22 Aralık — 12-09 hiçbir kaynakta yok",
      degis=[('{ t:"1898-12-09", tur:"kurulus",', '{ t:"1898-12-22", tur:"kurulus", kaynak:"TDV girit (Tukin 1996): Prens George 22 Aralık 1898\'de göreve başladı — eski 1898-12-09 kaynaksızdı (KRONO-BALKAN-D-0929 ④)",')]),
 dict(grup="kesin", id="hollanda", sinif="ad (② aynı polity, ad dar)", paket="KRONO-ATLANTIK-B K-3 + KUNYE-DUNYA",
      kaynak="TDV `hollanda`: 'Hollanda Krallığı'nı resmen kabul etti (1815)'",
      degis=[('{ id:"hollanda", ad:"Hollanda Cumhuriyeti",', '{ id:"hollanda", ad:"Hollanda (Birleşik Eyaletler Cumhuriyeti → 1815 Krallık)",')]),
 dict(grup="kesin", id="paraguay-cumhuriyeti", sinif="gün (künye maddesi — kendi alıntısı gün veriyor)", paket="KRONO-AMERIKA-G §1",
      kaynak="maddenin kendi EB alıntısı: 'until he was killed on March 1, 1870'",
      degis=[('{ t:"1870-01-01", tur:"hukumdar", b:"Francisco Solano Lopez oldurulunce', '{ t:"1870-03-01", tur:"hukumdar", b:"Francisco Solano Lopez oldurulunce')]),
 dict(grup="kesin", id="ispanyol-peru", sinif="metin (olgusal hata)", paket="KRONO-AMERIKA-G §1",
      kaynak="1780 isyanın BAŞLANGIÇ yılıdır; bastırılması 1781-83 (KRONO-AMERIKA-G-0929; Burkholder & Johnson, sayfa doğrulanmadı)",
      degis=[('{ t:"1780-01-01", tur:"isyan", b:"Tupac Amaru II\'nin büyük yerli isyanı bastırıldı" }',
              '{ t:"1780-01-01", tur:"isyan", b:"Tupac Amaru II\'nin büyük yerli isyanı başladı (1781-83\'te bastırıldı)", kaynak:"YIL: isyanın başlangıcı 1780 — eski metin \'bastırıldı\' olgusal hataydı (KRONO-AMERIKA-G-0929 §1; Burkholder & Johnson, Colonial Latin America — sayfa doğrulanmadı)" }')]),
]

# 30 Eylül ölçümü (denetim/YETIM-KRONO-0930.json 'sorunlu'): bu 12 dosyanın her
# kimliği künye bulmadıkça dosya index.html'e bağlanamaz.
YETIM = ['arnavut', 'bosna', 'bulgaristan', 'ermeni', 'guney_amerika', 'gurcistan', 'hollanda',
         'ispanya', 'memluk', 'orta_amerika', 'ukrayna', 'yunanistan']
KONSOL = ['trablus-cumhuriyeti', 'kunduz-hanligi', 'kuca-hocalari', 'nagpur-bhonsle']

_YETIM_JS = r"""
const fs=require('fs'),vm=require('vm');
const dev=process.argv[1], files=JSON.parse(process.argv[2]);
const c=vm.createContext({});c.window=c;vm.runInContext(fs.readFileSync(dev,'utf8'),c);
const ix=new Set(c.DEVLETLER.map(d=>d.id)), pen={}; c.DEVLETLER.forEach(d=>pen[d.id]=[d.f,d.t]);
const out={};
for(const f of files){const w=vm.createContext({});w.window=w;
 vm.runInContext(fs.readFileSync('data/kronoloji_cok_'+f+'.js','utf8'),w);
 const eks={};
 for(const k of Object.keys(w)) if(/^KRONOLOJI_/.test(k)) for(const m of w[k])
  for(const d of [].concat(m.taraflar||m.devletler||(m.devlet?[m.devlet]:[]))) if(!ix.has(d)) eks[d]=(eks[d]||0)+1;
 out[f]=eks;}
process.stdout.write(JSON.stringify({yetim:out, var:Object.fromEntries(JSON.parse(process.argv[3]).map(i=>[i,ix.has(i)]))}));
"""


def yetim_olc(yol):
    p = subprocess.run(["node", "-e", _YETIM_JS, yol, json.dumps(YETIM), json.dumps(KONSOL)], capture_output=True, cwd=KOK)
    if p.returncode:
        raise SystemExit("node HATASI: " + p.stderr.decode("utf-8", "replace")[:800])
    return json.loads(p.stdout.decode("utf-8"))


def main(argv):
    yaz = "--uygula" in argv
    B.YENI, B.DEGIS = YENI, DEGIS
    once = io.open(B.DOSYA, encoding="utf-8", newline="").read()
    sonra, uyg, ret, n_yeni = B.yamala(once, True)
    print("KİP:", "UYGULA" if yaz else "KURU KOŞU")
    for u in uyg:
        print("  ✓", u)
    for r in ret:
        print("  ✗ RET", r)
    import tempfile
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".js", delete=False, newline="") as tf:
        tf.write(sonra); gecici = tf.name
    try:
        A, Bn = B.node_olc(B.DOSYA), B.node_olc(gecici)
        YA, YB = yetim_olc(B.DOSYA), yetim_olc(gecici)
    finally:
        os.unlink(gecici)
    print("\nDEVLETLER: %d → %d (beklenen +%d)" % (A["n"], Bn["n"], n_yeni))
    assert Bn["n"] == A["n"] + n_yeni, "künye sayısı tutmuyor"
    print("ETKİ (COK_/SINIR_) künyesiz: %d id / %d madde → %d id / %d madde"
          % (len(A["kunyesiz"]), sum(A["kunyesiz"].values()), len(Bn["kunyesiz"]), sum(Bn["kunyesiz"].values())))
    print("       kalan künyesiz:", ", ".join("%s %d" % kv for kv in sorted(Bn["kunyesiz"].items(), key=lambda x: -x[1])))
    print("\nYETİM 12 DOSYA — künyesiz kimlik (önce → sonra):")
    for f in YETIM:
        a, b = YA["yetim"][f], YB["yetim"][f]
        print("  %-14s %2d → %2d %s" % (f, len(a), len(b), ("  KALAN: " + ", ".join(b)) if b else "✓"))
    print("KONSOL 4 id:", ", ".join("%s %s→%s" % (k, YA["var"][k], YB["var"][k]) for k in KONSOL))
    yeni_idler = [re.search(r'id:"([^"]+)"', y["kayit"]).group(1) for y in YENI]
    disi = [(x, t, f, b) for x, t, f, b in Bn["bag"] if x in yeni_idler
            and not (B.pad(Bn["pencere"][x][0]) <= B.pad(t) <= B.pad(Bn["pencere"][x][1]))]
    print("\nYENİ künyeye bağlanan ama PENCERESİ DIŞINDA kalan madde: %d" % len(disi))
    for x in disi:
        print("  ⚠️", *x)
    degisen = sorted({d["id"] for d in DEGIS})
    once_disi = [(x, t) for x, t, f, b in A["bag"] if x in degisen and not (B.pad(A["pencere"][x][0]) <= B.pad(t) <= B.pad(A["pencere"][x][1]))]
    sonra_disi = [(x, t) for x, t, f, b in Bn["bag"] if x in degisen and not (B.pad(Bn["pencere"][x][0]) <= B.pad(t) <= B.pad(Bn["pencere"][x][1]))]
    print("DEĞİŞEN künyelerde pencere dışı COK_ maddesi: %d → %d" % (len(once_disi), len(sonra_disi)))
    for x in sonra_disi:
        print("  ⚠️ dışında:", *x, "· künye", *Bn["pencere"][x[0]])
    uy = B.harita_uyar(Bn["pencere"], degisen + yeni_idler)
    uy0 = B.harita_uyar(A["pencere"], [i for i in degisen if i in A["pencere"]])
    anah = lambda u: u.split("  (künye")[0]          # yer + katman + dönem; künye penceresi metni hariç
    k0, k1 = {anah(u) for u in uy0}, {anah(u) for u in uy}
    yeni_uy = [u for u in uy if anah(u) not in k0]
    print("\nHARİTA — pencere dışına düşen yerleşim dönemi: önce %d · sonra %d · YENİ doğan %d" % (len(uy0), len(uy), len(yeni_uy)))
    for u in yeni_uy:
        print("  🔴 YENİ", u)
    for u in sorted(k0 - k1):
        print("  ✓ kapandı", u)
    suren = {}
    for u in uy:
        if anah(u) in k0:
            m = re.search(r" (s|isg|v):(?:kid )?(\S+)", u)
            suren[m.group(2) if m else "?"] = suren.get(m.group(2) if m else "?", 0) + 1
    print("  · süren (önceden vardı, bu yama DOĞURMADI):", ", ".join("%s %d" % kv for kv in sorted(suren.items())))
    if yaz:
        if ret:
            raise SystemExit("\n✗ %d RET — HİÇBİR ŞEY YAZILMADI" % len(ret))
        if yeni_uy:
            raise SystemExit("\n✗ %d YENİ harita pencere aşımı — HİÇBİR ŞEY YAZILMADI" % len(yeni_uy))
        io.open(B.DOSYA, "w", encoding="utf-8", newline="").write(sonra)
        print("\n✓ YAZILDI:", B.DOSYA)
    else:
        print("\n(kuru koşu — dosyaya dokunulmadı)")


if __name__ == "__main__":
    main(sys.argv[1:])

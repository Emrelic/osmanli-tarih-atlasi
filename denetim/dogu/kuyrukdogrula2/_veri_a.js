// kuyrukdogrula2: dogrulanmis kayitlar (A: Hint yarimadasi). Her kaynak: bu oturumda ACILIP alintisi aranan kaynak.
const CHI3 = "W. Haig (ed.), The Cambridge History of India, vol. III: Turks and Afghans, Cambridge 1928 (archive.org cambridgehistory03wols)";
const CHI4 = "W. Haig & R. Burn (eds.), The Cambridge History of India, vol. IV: The Mughul Period, Cambridge 1937 (archive.org cambridgehistory04raps)";
const CHI5 = "H. H. Dodwell (ed.), The Cambridge History of India, vol. V: British India 1497-1858, Cambridge 1929 (archive.org cambridgehistory035098mbp)";
const IG8 = "The Imperial Gazetteer of India, vol. VIII, Oxford 1908, «Bombay Presidency: History», s. 282-285 (archive.org dli.ernet.11615)";
const IGBIDAR = "The Imperial Gazetteer of India, vol. VIII, Oxford 1908, «Bidar District» maddesi (archive.org dli.ernet.11615)";
const TDVBEH = "TDV İslâm Ansiklopedisi, «Behmenîler» (Enver Konukçu), https://islamansiklopedisi.org.tr/behmeniler";
const GTHANA = "Gazetteer of the Bombay Presidency, vol. XIII part II: Thana, Bombay 1882, ch. VII «History» (archive.org in.ernet.dli.2015.531207)";
const GAHM = "Gazetteer of the Bombay Presidency, vol. IV: Ahmedabad, Bombay 1879 (archive.org dli.ministry.08145)";
const GKATH = "Gazetteer of the Bombay Presidency, vol. VIII: Kathiawar, Bombay 1884 (archive.org in.ernet.dli.2015.281422)";
const MENON = "V. P. Menon, The Story of the Integration of the Indian States, 1956 (archive.org dli.ernet.527198)";
const ACT47 = "Indian Independence Act 1947, s.1, https://www.legislation.gov.uk/ukpga/Geo6/10-11/30/section/1/enacted";
const ACT47b = "Indian Independence Act 1947, s.7, https://www.legislation.gov.uk/ukpga/Geo6/10-11/30/section/7/enacted";
const GAIT = "E. A. Gait, A History of Assam, Calcutta 1906 (archive.org historyofassam0000edwa)";
const IND47 = "“As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan” (" + ACT47 + ")";
const S = (f, t, d, kesinlik, kaynak, ic_not, devam) => { const o = { f, t, d, kesinlik, kaynak }; if (ic_not) o.ic_not = ic_not; if (devam) o.devam = true; return o; };

const A = [
 { ad: "Kalyani (Basavakalyan)", kume: "hint2", s_ek: [
  S("1281-01-01", "1318-01-01", "yadava", "yil",
    CHI3 + ", «The Deccan»: “The Yadava kingdom occupied the whole of the western half of the Deccan, and its eastern frontier may be marked by a line drawn roughly from somewhere east of Bijapur through Gulbarga, Yadgir, Kalyani, north-east to Mahir” | BEYANLI YAKLAŞIKLIK: Kalyani Yadava doğu sınır çizgisinin ÜZERİNDE sayılıyor; 1281-1318 için Kalyani'yi adıyla Yadava'ya bağlayan ayrı tarihli tanık açılan kaynaklarda yok",
    "Atlas yadava künyesi t=1318 ile hizalı.", true),
  S("1318-01-01", "1347-08-03", "delhi-sultanligi", "yil",
    IG8 + ": “After several revolts the last of the Yadavas was put to death in 1318, and the Deccan became a Muhammadan province.” ; " + CHI3 + ", Mubarak Khalji bölümü: Mubarak 1317'de Deogir'e yürüdü, Harpal yakalanıp öldürüldü, “Mubarak spent the rainy season of 1318 at Deogir, once more parcelled out Maharashtra among Muslim officers” | BEYANLI YAKLAŞIKLIK: Kalyani'nin adıyla Delhi'ye geçişini veren doğrudan tanık bulunamadı; IG8'e göre Muhammed b. Tuğluk'un Dekken eyaleti Bîdar ve Gulbarga'yı içeriyordu (Kalyani Bîdar bölgesinde)",
    "Delhi/Yadava devir yılı: IG8 ve Gazetteer XIII 'fall of Devgiri (1318)'; CHI III 1317 seferi + 1318 kışlama."),
  S("1347-08-03", "1489-01-01", "behmeni", "gun",
    CHI3 + ", Bahmanî bölümü: “On August 3, 1347, he was acclaimed by the assembled nobles of the Deccan under the title of Abu‘l-Muzaffar ‘Ala-ud-din Bahman Shah” ; " + TDVBEH + ": “Behmenîler 1347-1527 yılları arasında Hindistan’ın Dekken bölgesinde hüküm süren bir hânedan” | BEYANLI YAKLAŞIKLIK: Kalyani'nin adıyla Bahmanî'ye geçişini veren doğrudan tanık bulunamadı; Bahmanî çekirdek toprağı Gulbarga-Bîdar'dı ve IG8 Tuğluk Dekken eyaletine Bîdar'ı sayar",
    "Gün: CHI III (Haig) 3 Ağustos 1347; TDV yalnız yıl (748/1347)."),
  S("1489-01-01", "1686-09-22", "bicapur", "yil",
    IG8 + ": “together with Naldrug and Kalyani, was usually held by Bijapur, though the Ahmadnagar kings claimed it” ; " + TDVBEH + ": “Bîcâpûr’da Âdilşâhîler (1489-1686), Ahmednagar’da Nizamşâhîler (1490-1633) ... ve Bîder’de de Berîdşâhîler (1487-1619) Behmenîler’in halefleri olarak ortaya çıktılar” ; " + CHI4 + ": 1636 barışında Bîcâpûr “was allowed to retain possession of Naldrug and eastern Kalyani” | BEYANLI YAKLAŞIKLIK: IG8 'usually' (çoğunlukla) der; Ahmednagar ve Bîdar (Berîdşâhî) arasında el değişimi gün/yıl olarak sayılamadı",
    "Kalyani 10 Ağustos 1657'de Evrengzib'e teslim oldu (CHI IV: “did not surrender until 10 August”) ama CHI IV Evrengzib'in 1657'de “relinquished his conquests” ve Agra'ya yürüdüğünü yazar; bu kısa işgal ayrı dilim yapılmadı. Bicapur künyesi t=1686-09-22."),
  S("1686-09-22", "1724-10-11", "babur-imparatorlugu", "yil",
    CHI4 + ", Bîcâpûr bölümü: “when Aurangzib captured Bijapur in 1686” ; " + IGBIDAR + ": Kalyani Bîdar bölgesi sınırında bir jâgîr (Haydarabad Devleti) | BEYANLI YAKLAŞIKLIK: CHI IV yalnız yıl (1686) verir; gün 22 Eylül, bicapur künyesinden alındı (gün komşudan: bicapur künyesi t=1686-09-22; zincirleme devralma değildir, künye kendi kaynağına dayanır); Kalyani'nin adıyla Bâbürlü'ye geçişini veren doğrudan tanık yok",
    "Gün komşudan: bicapur künyesi t=1686-09-22."),
  S("1724-10-11", "1948-09-17", "haydarabad-nizam", "gun",
    CHI4 + ", ch. XII-XIII «Muhammad Shah» ve «The Hyderabad State (1724-1762)»: “The two armies met at Shakarkhelda in Berar on 11 October.” ; “The battle of Fathkhelda marks the establishment in the Deccan of Nizam-ul-Mulk’s hereditary rule” ; " + IGBIDAR + ": “the jdgir of Kalyani (population, 36,205 ; villages, 72)” Bidar District, Hyderabad State sınırında | BEYANLI YAKLAŞIKLIK: Kalyani'yi adıyla Nizam'a bağlayan 1724 tanığı yok; 1908 IG Haydarabad Devleti içinde Kalyani jâgîri der",
    "Gün: Şakarkhera 11 Ekim (CHI IV; 'late June 1724' ve 'In August' bağlamı yıl 1724'tür)."),
  S("1948-09-17", "2000-12-31", "hindistan-cumhuriyeti", "gun",
    MENON + ": “On the evening of 17 September, the Hyderabad army surrendered. On the 18 th the Indian troops, under Major-General Chaudhuri, entered Hyderabad City.” ; “On 17 September Laik Ali and his cabinet tendered their resignations.” | t=2000-12-31 yalnız ufuk işareti",
    "17 Eylül: ordunun teslimi; Hindistan egemenliğinin hukukî katılışı sonraki günler (BEYANLI)."),
 ]},
 { ad: "Thane", kume: "hint2", s_ek: [
  S("1281-01-01", "1318-01-01", "yadava", "yil",
    GTHANA + ": “some of the references to Bhim, in copies of local grants, belong to the latter part of the thirteenth century (1286-1292), when the Devgiri Yadavs were the overlords of the North Konkan” ; “Under the orders of Shri Ram this Shrikrishnadev governs the whole province of the Konkan” | BEYANLI YAKLAŞIKLIK: Marco Polo (1290) Thana'da 'kimseye haraç vermeyen bir prens' der (aynı bölüm); Yadava üst-hükümdarlığı kesin ama iç özerklik tartışmalı",
    "Atlas yadava künyesi t=1318.", true),
  S("1318-01-01", "1350-01-01", "delhi-sultanligi", "yil",
    GTHANA + ", Musalmans 1300-1500: “After the fall of Devgiri (1318) the Emperor Mubarik I. ... ordered his outposts to be extended to the sea” ; “Under the Emperor of Delhi, Thana was governed by a military officer or malik” (Jordanus-Oderic 1321-24) ; “Under the strong rule of Muhammad Tughlik (1325-1350) the Musalmans probably maintained their supremacy in the north Konkan” | BEYANLI YAKLAŞIKLIK: bitiş yılı 1350, Gazetteer'ın Muhammed Tuğluk dönemi sınırıdır; 1347'de Bahmanîlerin ayrılmasından sonra Thana ile bağ 'çok zayıf' (aynı bölüm)",
    "Delhi garnizonu: Gazetteer XIII-2 s. 438-440."),
  S("1350-01-01", "1429-01-01", "__BOSLUK__", "yil",
    "BOŞLUK BEYANI: arandı, bulunamadı: Thana'nın 1350-1429 arası sahibi. " + GTHANA + ": “Musalman supremacy can have been little more than a name.” ; “Some parts of the Thana coast may in name have remained subordinate to Gujarat.” ; “It appears from a stone dated A.D. 1464, that the Hindu chief of Bhiwndi had power to make land-grants.” ; Bahmanîler 'Thana'ya pek ilgi göstermedi (aynı bölüm). Yerel Hindu beyleri için atlas kimliği yok, abi merkez (Gucerat/Dekken) bağı tarihli değil",
    "Delhi 1350 / Gucerat 1429 uçları kaynaklıdır; aradaki 79 yıl beyanlı boşluktur."),
  S("1429-01-01", "1534-01-01", "gucerat-sultanligi", "yil",
    GTHANA + ": “In 1429, apparently as a regular outpost and not as a new possession, they had a garrison under a captain, Kutb Khan, at Mahim near Bombay, and another garrison overruling Thana.” ; " + IG8 + ": “finally assumed the title of king in 1407” | BEYANLI YAKLAŞIKLIK: 1429 garnizonun GÖRÜLDÜĞÜ yıldır; Gucerat hâkimiyetinin başlangıcı daha eskiye gidebilir. Aynı yıl Bahmanî veziri Malik-ul-Tujar Mahim ve Salsette'yi geçici aldı, Ahmed Şah geri aldı",
    "Gucerat künyesi f=1407."),
  S("1534-01-01", "1737-04-01", "portekiz", "yil",
    GTHANA + ": “In 1534, when Bassein and Salsette were ceded to the Portuguese” ; “On their transfer to the Portuguese in 1534, the Thana coast was made a separate charge” ; " + CHI5 + ", Portekiz bölümü: “He had already, in 1534, made considerable concessions, ceding the island of Bassein with all its dependencies and revenues to the Portuguese.” | BEYANLI YAKLAŞIKLIK: Gazetteer aynı bölümde antlaşmayı '(1533)' diye de yazar, dipnotta 'Faria gives 1534'; gün (23 Aralık) açılan akademik kaynakta okunmadı",
    "Çelişki: 1533 / 1534; CHI V ve Gazetteer çoğu yerde 1534."),
  S("1737-04-01", "1774-12-28", "maratha", "ay",
    GTHANA + ": “The Marathas next (April 1737) attacked Salsette ... At Thana, though the fort was well advanced, the defences were unfinished. The captain fled to Karanja, and though the garrison made a gallant defence, successfully driving back two assaults, in the end they were forced to capitulate.” | BEYANLI YAKLAŞIKLIK: kaynak yalnız ay verir (Nisan 1737); gün yok, ayın ilk günü seçildi",
    "Gazetteer başka bir yerde Salsette'nin 'taken by the Marathas in 1739' (Bassein düşüşü) der; Thana kalesi 1737 anlatısındadır."),
  S("1774-12-28", "1947-08-15", "ingiliz-hindistani", "gun",
    GTHANA + ": “On the 28th, after a serious repulse, the fort was carried by assault and most of the garrison were put to the sword.” ; “By the first of January 1775, Salsette and its dependencies, including Bassein, were in the possession of the British.” (Aralık 1774, General Gordon, Thana seferi)",
    "Hukukî devir: Surat Antlaşması 6 Mart 1775, Salbai 1782 (aynı bölüm)."),
  S("1947-08-15", "2000-12-31", "hindistan-cumhuriyeti", "gun", IND47 + " | t=2000-12-31 yalnız ufuk işareti"),
 ]},
 { ad: "Wadhwan (Vardhamana)", kume: "hint2", s_ek: [
  S("1281-01-01", "1297-01-01", "caulukya", "yil",
    GKATH + ", ch. VII: “the Vdghela power grew weaker, and in about a.d. 1297 Anhilvdda was conquered by Alaghkhan, the commander of the army of Sultan Ala-ud-din Khilji of Delhi, and he shortly afterwards overran Gujarat” [OCR yazımı korunmuştur] | BEYANLI YAKLAŞIKLIK: Vâghela, Çaulukya (Solanki) soyunun devamı sayıldı (IG8: 'the Dholka princes ... superseded the Solankis'); atlas caulukya künyesi t=1297; Wadhwan'ın adıyla zikri yok",
    "Çaulukya/Vâghela ayrımı: IG8 Vâghela'yı Dholka kolu (c.1233) sayar; atlasta caulukya t=1297, vaghela 1243-1299 — örtüşme künye sorunu.", true),
  S("1297-01-01", "1407-01-01", "delhi-sultanligi", "yil",
    GKATH + ": “in a.d. 1297-98 he conquered Somnd^th-Patan ... and subdued at all events the Nd;gher portion of Sorath” [OCR] ; " + CHI3 + ": “In 1297 ‘Ala-ud-din resolved to undertake the conquest of the Hindu kingdom of Gujarat ... Ulugh Khan and Nusrat Khan were selected for the task and invested and took its ancient capital, Anhilvara” ; " + IG8 + ": “For nearly a century (1298-1392) governors were sent to Gujarat by the Sultans of Delhi” | BEYANLI YAKLAŞIKLIK: Wadhwan'ın adıyla Delhi'ye bağlanışı açılan kaynaklarda yok; IG8 Delhi eyaletinin 'yalnız Patan, Cambay, Baroda, Broach çevresini' kapsadığını, Kathiawar Hindu beylerinin ancak Muhammed b. Tuğluk (1347-50) ile geçici itaat ettiğini yazar. Çelişki: Gazetteer/CHI 1297-98, IG8 1298; atlas vaghela t=1299",
    "Yıl çelişkisi 1297/1298/1299 ic_not'ta."),
  S("1407-01-01", "1572-11-20", "gucerat-sultanligi", "yil",
    IG8 + ": “Zafar Khan ... was left more and more to himself ... and finally assumed the title of king in 1407” ; " + GKATH + ", Wadhwan maddesi: Wadhwan parganası Gucerat padişahı Ahmed adına yazılmış bir Vikram 1613 (A.D. 1556-57) kitâbesinde zikredilir (Sultan Ahmed II dönemi) | BEYANLI YAKLAŞIKLIK: kitâbe Wadhwan'ın Gucerat sultanlığına bağlı bir pargana olduğunu 16. yy ortası için gösterir; 1407 başlangıcı IG8 künye tarihidir",
    "Atlas gucerat künyesi f=1407; Haig: Zafar Khan 1396 dolayında fiilen bağımsız (CHI III)."),
  S("1572-11-20", "1707-01-01", "babur-imparatorlugu", "gun",
    CHI4 + ", Akbar bölümü: “He arrived at Ahmadabad on 20 November, and the khutba was recited in his name.” ; " + GKATH + ", Wadhwan maddesi: 17. yy başında Wadhwan 'thânahdâr' (imparatorluk memuru) idaresindedir, c.1630'da Rajoji bu thânahdâr'ın hizmet kiracısı olarak yerleşir | BEYANLI YAKLAŞIKLIK: Akbar'ın Ahmedâbâd'a girişi Gucerat'ın fethinin günüdür; Wadhwan'ın o günkü teslimi ayrı tarihli değil",
    "Gucerat künyesi t=1573-01-01; kaynak Kasım 1572 der (künye düzeltme önerisi)."),
  S("1707-01-01", "1807-01-01", "maratha", "yil",
    GKATH + ", Wadhwan maddesi: Arjansing ve Abhesing 'Kota'dan ordu getirip Bhagatsing'i Wadhwan darbarında öldürdü ve ülkeyi 1707'de paylaştı; Arjansing Wadhwan'ın tek hâkimi olup thânahdâr'ı kovdu' [OCR: thdnahddr] ; ch. VII içeriği: “Mai’athas (a.d. 1704-1807) ; Colonel Walker s Settlement (a.d. 1807-8)” ; “Peshwa’s lieutenant, entered Jhalavdd to collect tribute” | BEYANLI YAKLAŞIKLIK: Wadhwan'da yerel Jhala hanedanı iç egemenliği sürdürdü (ardıl kimliği atlasta yok); Maratha Kathiawar haracı üst-hükümdarlığı yazıldı; Wadhwan'ın Maratha'ya adıyla bağlandığı gün yok",
    "Bâbürlü thânahdâr'ının kovulması 1707 (Gazetteer); Marathalar 'Kathiawar 1704-1807' bölümü."),
  S("1807-01-01", "1947-08-15", "ingiliz-hindistani", "yil",
    GKATH + ", Walker Düzenlemesi: “No chief can claim land held by another, on the score that it was in his possession before the date of Walker’s settlement in 1807” ; “The chiefs agreed to pay the Gaikwar a fixed yearly tribute through the British Government” ; “In 1820 an officer of Government styled a Political Agent was placed in Kathiawar.” | BEYANLI YAKLAŞIKLIK: 1807-08 fiilen İngiliz paramountcy başlangıcı; Gazetteer 'British Paramount (1820)' başlığı kullanır; Wadhwan prenslik olarak iç özerk",
    "Walker düzenlemesi 1807-08; Siyasi Ajan 1820."),
  S("1947-08-15", "2000-12-31", "hindistan-cumhuriyeti", "gun",
    MENON + ": “The States in Kathiawar comprised the fourteen salute States of Junagadh, Nawanagar, Bhavnagar, Dhrangadhra, Porbandar, Morvi, Gondal, Jafrabad, Wankaner, Palitana, Dhrol, Limbdi, Rajkot and Wadhwan” ; “The rulers of all the States geographically contiguous to India, with the exception of Junagadh and two small States under Muslim rulers in Kathiawar, had signed the Instrument of Accession and the Standstill Agreement by 15 August.” ; " + ACT47b + ": “the suzerainty of His Majesty over the Indian States lapses” | t=2000-12-31 yalnız ufuk işareti",
    "Wadhwan istisna listesinde (Junagadh + iki küçük Müslüman devlet) olmadığı için 15 Ağustos 1947'ye kadar katılış imzalanmış sayılır (dolaylı çıkarım: BEYANLI)."),
 ]},
 { ad: "Dholka", kume: "hint3", s_ek: [
  S("1299-01-01", "1407-01-01", "delhi-sultanligi", "yil",
    IG8 + ": “Their kingdom shrank to a jiart of northern Gujarat ... subdued it in a single campaign (1298)” [OCR: Dholka/Vâghela devleti Alaf Han'ın tek seferiyle (1298) boyun eğdirildi] ; " + CHI3 + ": “In 1297 ‘Ala-ud-din resolved to undertake the conquest of the Hindu kingdom of Gujarat” ; " + GAHM + ", Dholka maddesi: “Under the Musalmén kings and viceroys, though never a place of great consequence, Dholka is often mentioned as a town and fort, the quarters of a Local governor” [OCR] | BEYANLI YAKLAŞIKLIK: fetih yılı kaynaklarda 1297/1298; atlas vaghela dilimi t=1299'da bittiği için dilim 1299'dan başlatıldı",
    "Çelişki: CHI III 1297, IG8 1298, Kathiawar Gazetteer 1297-98; mevcut vaghela dilimi t=1299 (hint3) sabit, sınır oradan başlar."),
  S("1407-01-01", "1572-11-20", "gucerat-sultanligi", "yil",
    IG8 + ": “The last governor, Zafar Khan ... finally assumed the title of king in 1407.” ; " + GAHM + ": Dholka Gucerat padişahları ve valileri dönemi 'town and fort, the quarters of a Local governor' | BEYANLI YAKLAŞIKLIK: Dholka'nın adıyla 1407 tanığı yok; Ahmedâbâd ülkesine bağlı kasaba",
    "Haig (CHI III): Zafar Han c.1396'da bağımsız; atlas künyesi 1407."),
  S("1572-11-20", "1736-01-01", "babur-imparatorlugu", "gun",
    CHI4 + ": “He arrived at Ahmadabad on 20 November, and the khutba was recited in his name.” ; " + IG8 + ": “until the province was conquered by Akbar in 1572” | BEYANLI YAKLAŞIKLIK: Dholka'nın adıyla teslim günü yok, Ahmedâbâd'ın Akbar'a girişi günü alındı",
    "Gucerat künyesi t=1573-01-01."),
  S("1736-01-01", "1741-01-01", "maratha", "yil",
    GAHM + ", Dholka maddesi: “Dholka seems to have been taken by the Marathas in 1736; to have been recovered by the Viceroy in 1741; to have again fallen into the Gaikwar’s hands in 1757; and to have remained with him till its cession to the British in 1804.” | BEYANLI YAKLAŞIKLIK: Gazetteer 'seems' (görünüyor) der; yıl hassasiyeti",
    "Gaikwar atlasta Maratha Konfederasyonu içinde sayıldı."),
  S("1741-01-01", "1757-01-01", "babur-imparatorlugu", "yil",
    GAHM + ", Dholka maddesi: “to have been recovered by the Viceroy in 1741” (aynı cümle)"),
  S("1757-01-01", "1803-02-18", "maratha", "yil",
    GAHM + ", Dholka maddesi: “to have again fallen into the Gaikwar’s hands in 1757” (aynı cümle)"),
  S("1803-02-18", "1947-08-15", "ingiliz-hindistani", "gun",
    GAHM + ", ch. VIII «Land Administration»: “the following year (February 18th, 1803) for the support of a subsidiary force, Dholka was handed over by the Gaikwar” [OCR yazımı: «in tho following ear (February 18th, 1803) ... holka was handod over by the Géikwar»]",
    "Çelişki: aynı cildin Dholka şehir maddesi 'British in 1804' der; ch. VIII 18 Şubat 1803 (Aitchison, Treaties IV) — gün kaynaklı olan alındı. Önceki ham dosyadaki 13 Haziran 1817 (Poona) YANLIŞTI: 1817 Ahmedâbâd/Daskroi/Viramgam devridir, Dholka değil."),
  S("1947-08-15", "2000-12-31", "hindistan-cumhuriyeti", "gun", IND47 + " | t=2000-12-31 yalnız ufuk işareti"),
 ]},
 { ad: "Sadiya", kume: "hint3", s_ek: [
  S("1523-01-01", "1826-02-24", "ahom", "yil",
    GAIT + ": “The whole Chutiya country was now annexed, and a new officer of State, who was called the Sadiya Khowa Gohain, was appointed to administer it.” ; “the Sadiya Khowa Gohain, who ruled at Sadiya, and whose appointment dates from the overthrow of the Chutiya kingdom in 1523” | BEYANLI YAKLAŞIKLIK: 1817-1825 Birmanya işgali Sadiya'yı da etkiledi (Gait: “Their bands ... shut up the Sadiya Khowa Gohain within his stockades”); Sadiya Khowa Gohain Ahom hâkimiyeti adına yönetmeyi sürdürdü",
    "Çaldıran gibi gün yok; yalnız yıl 1523. Ahom künyesi t=1826-01-01; Yandabo 24 Şubat 1826 (künye düzeltme önerisi)."),
  S("1826-02-24", "1947-08-15", "ingiliz-hindistani", "gun",
    GAIT + ": “By the treaty of Yandabo, which was concluded on the 24th February, 1826, he agreed, amongst other things, to abstain from all interference in the affairs of the countries which now constitute the province of Assam” [OCR boşlukları düzeltildi] ; “With the exception, therefore, of two tracts in Upper Assam, viz., Sadiya and Matak, it was decided, for a time at least, to administer the country as a British province.” ; “In 1842 a proclamation was issued announcing the incorporation of Matak and Sadiya in British territory.” | BEYANLI YAKLAŞIKLIK: 1826-1842 arası Sadiya Khowa Gohain (Khamti) İngiliz koruması altında ayrı idare edildi; resmî katılış 1842; 1839'da Sadiya garnizonuna Khamti saldırısı (Albay White öldü)",
    "Yandabo günü 24 Şubat 1826 kaynaklı; resmî ilhak 1842 (BEYANLI)."),
  S("1947-08-15", "2000-12-31", "hindistan-cumhuriyeti", "gun", IND47 + " | t=2000-12-31 yalnız ufuk işareti"),
 ]},
 { ad: "Simraungarh (Simraon)", kume: "hint2", s_ek: [
  S("1281-01-01", "1324-01-01", "karnata-mithila", "yil",
    CHI3 + ", Tuğluk bölümü: Gıyâseddin Tuğluk Bengal'den dönerken “He attacked on his way the raja of Tirhut, whose loyalty was doubtful, and reduced him to submission” (1324 Bengal seferi: “in 1324 sought the assistance of Ghiyas-ud-din Tughluq of Delhi against his brother. Tughluq marched into Bengal”) | BEYANLI YAKLAŞIKLIK: kaynak 1324'te bir 'Tirhut racası'nın varlığını gösterir; onun Karnata hanedanı olduğu/başkentinin Simraungarh olduğu CHI III'te yazmaz (atlas karnata-mithila künyesi t=1324)",
    "CHI III: raca 'boyun eğdirildi' der, kentin yıkıldığını yazmaz; yıkım/terk iddiası açılan akademik kaynakta bulunmadı.", true),
 ], kuyruk_gerekli: "1324-01-01 → 2000-12-31",
   kuyruk_neden: "Simraungarh'ın 1324 sonrası sahibi ve kentin terk/yıkım kararı doğrulanamadı: CHI III (Haig) Tirhut racasının 1324-25'te boyun eğdirildiğini yazar, kentin yıkıldığını ya da bir daha yerleşilmediğini yazmaz; Harisimhadeva'nın Nepal'e kaçışı ve kentin yıkımı yalnız akademik olmayan web sayfalarında (Wikiwand, Grokipedia, blog) geçti. 1324 sonrası Tirhut için Delhi Sultanlığı (CHI III: Firuz Şah döneminde Tirhut 'Delhi'nin güneydoğu ili') ve Oiniwar/Mithila yerel sülâlesi kaynaklı zincire dökülemedi." },
];
module.exports = { A, S, CHI3, CHI4, CHI5, IG8, TDVBEH, GTHANA, GAHM, GKATH, MENON, ACT47, ACT47b, GAIT, IND47 };

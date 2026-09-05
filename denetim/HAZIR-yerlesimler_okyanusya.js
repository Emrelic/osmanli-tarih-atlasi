// ======================================================================
// OKYANUSYA — Avustralya · Yeni Gine · batı Pasifik
// DUNYA-OKYANUSYA-0903 · 3 Eylül 2026
// şartname: oturumlar/DUNYA-YERLESIM-PROGRAMI.md
// ======================================================================
//
// İÇİNDEKİLER
//   74 KASABA  — hepsinin kuruluş tarihi KURUM KAYNAĞININ
//                GÖVDESİ OKUNARAK doğrulandı; `kaynak:` alanında
//                kurum adı VE alıntı duruyor.
//   44 BEYAN   — `kasitli_bosluk:true` + `bos:"kabile"`.
//                Bunlar YERLEŞİM DEĞİL, boşluğun CİNSİNİ
//                makineye söyleyen kayıtlardır (`girdi.py:831`).
//
// 🔴 NİÇİN BEYAN ASIL İŞ — ölçüldü (1° ızgara, zaman kesitleri):
//     1400: %87,5 açık   1700: %87,5   1800: %86,9
//     1850: %75,6        1900: %31,6   1923: %30,1
//   ⇒ Kasaba kayıtları atlasın 642 yılının yalnız SON 73'ünü
//     kapatıyor. 1281-1850 arası 570 yıl BEYANLA kapanır —
//     çünkü Avustralya'da 1788 öncesi kasaba YOKTU.
//   📌 Emre'nin hükmü: "EĞER YERLEŞİM VAR İSE NOKTA KONUR.
//     YOK İSE UYDURACAK HALİMİZ YOK. DEVASA BOŞLUKLAR
//     OLACAKSA OLSUN."
//
// ⚠️ BEYAN NOKTALARININ YERİ ızgara hücresinin merkezi DEĞİL,
//   temsil ettiği COĞRAFYANIN adresidir (1.MURAT, M-2379).
//   Adlar bölgesel atıftır; çöl sınırları YAKLAŞIKTIR.
//
// ⚠️ HALK ADLARI: AIATSIS'in genel çerçevesi kaynaklıdır; her
//   hücrenin HANGİ dil grubuna ait olduğu AYRICA DOĞRULANMADI.
//   Bir sonraki tur AIATSIS haritasıyla hücre hücre eşleştirmeli.

window.YERLESIMLER_OKYANUSYA = [

// --------------------------------------------------------------------
// KASABALAR — 74 kayıt, hepsi kaynak gövdesi okunarak doğrulandı
// --------------------------------------------------------------------

{ ad:"Noumea (Yeni Kaledonya)", tur:"sehir", lat:-22.27, lon:166.44, g:1, k:1,
  kur:"1854-01-01",
  kaynak:"Encyclopaedia Britannica, 'New Caledonia: History' ve 'Nouméa'; ayrıca Journal de la Société des Océanistes, 'Chronologie de Kanaky Nouvelle-Calédonie (1774-2018)' (hakemli): \"on 24 September 1853, France took possession of 'Grande Terre'\"; Noumea 1854'te Port-de-France adıyla kuruldu. ⚠️ `fransa` künyesi 1792'de bittiği için `fransa-cumhuriyet` kullanıldı — `fransa` yazılsaydı HAYALET olurdu.",
  s:[{f:"1854-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

{ ad:"Tulagi", tur:"sehir", lat:-9.0938, lon:160.1497, g:1, k:1,
  kur:"1893-01-01",
  kaynak:"Encyclopaedia Britannica, 'Solomon Islands: History' ve 'Tulagi'; ayrıca Judith Bennett, 'Wealth of the Solomons: a history of trade, plantations and society, Solomon Islands, c.1800-1942' (ANU Open Research): protektora 1893'te ilan edildi, Tulagi 1893'ten itibaren idarî merkezdi.",
  s:[{f:"1893-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Gizo", tur:"sehir", lat:-8.1014, lon:156.8364, g:1, k:1,
  kur:"1893-01-01",
  kaynak:"Encyclopaedia Britannica, 'Solomon Islands: History' + Bennett (ANU): İngiliz Solomon Adaları Protektorası 1893. ⚠️ Gizo'nun KENDİ kuruluş yılı ayrıca doğrulanamadı; protektora tarihi kullanıldı.",
  s:[{f:"1893-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Levuka", tur:"sehir", lat:-17.6814, lon:178.8327, g:1, k:1,
  kur:"1874-10-10",
  kaynak:"Atlasın kendi Suva kaydıyla aynı gün (1874-10-10, Fiji'nin devri) — Encyclopaedia Britannica, 'Fiji: History'. Levuka 1874-1882 arası koloninin ilk başkentiydi.",
  s:[{f:"1874-10-10",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Samarai", tur:"sehir", lat:-10.6098, lon:150.6833, g:1, k:1,
  kur:"1884-11-06",
  kaynak:"Encyclopaedia Britannica, 'Samarai': \"Samarai Island was visited in 1873 by the British captain John Moresby and purchased by the London Missionary Society in the 1880s. In 1884 Britain annexed the southeastern part of New Guinea where Samarai is located.\" Zincir atlasın kendi Port Moresby kaydıyla aynı (İngiliz Papua -> 1906-09-01 Avustralya).",
  s:[{f:"1884-11-06",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Herbertshöhe (Kokopo) — Rabaul", tur:"sehir", lat:-4.35, lon:152.26, g:1, k:1,
  kur:"1884-11-03",
  kaynak:"National Library of Australia, 'German colonies in the Pacific': Almanya 1884'te Kaiser Wilhelmsland ve Bismarck Takımadaları'nı ilhak etti. Australian War Memorial: \"Herbertshohe, later Kokopo, the capital of the Protectorate before the establishment of Rabaul\"; Dr Albert Hahl 1896'da Blanche Bay'deki bu \"primitive little settlement\"e yerleşti. Encyclopaedia Britannica, 'Rabaul': \"Rabaul, the town founded in 1910 as a German colonial headquarters\". 🔴 KOORDİNAT DÜZELTİLDİ: önce Rabaul'a (-4,20/152,18) yazmıştım, ama RABAUL 1910'DA KURULDU — 1884-1910 arasında oradaki yerleşim HERBERTSHÖHE'ydi (bugünkü Kokopo, ~15 km güneydoğu). Nokta ona taşındı. Kuruluş günü atlasın kendi Madang/Finschhafen kayıtlarıyla aynı.",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Hughenden", tur:"sehir", lat:-20.84, lon:144.2, g:1, k:1,
  kur:"1877-01-01",
  kaynak:"Queensland Places (Centre for the Government of Queensland, University of Queensland), 'Hughenden': \"In 1877 a township was surveyed and named after Henry's pastoral station.\"",
  s:[{f:"1877-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Boulia", tur:"sehir", lat:-22.91, lon:139.9, g:1, k:1,
  kur:"1879-01-01",
  kaynak:"Queensland Places, 'Boulia and Boulia Shire': \"the town of Boulia was established in 1879\".",
  s:[{f:"1879-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Normanton", tur:"sehir", lat:-17.67, lon:141.08, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Normanton': \"by 1867 a European settlement was established on the site of the future Normanton township\"; \"The town was proclaimed in August 1868 and town allotments were put up for sale.\"",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cairns", tur:"sehir", lat:-16.9, lon:145.7651, g:1, k:1,
  kur:"1876-01-01",
  kaynak:"Queensland Places, 'Cairns': \"a township was proclaimed at the mouth of Trinity Inlet and named after the Governor of Queensland, Sir William Cairns\" (1876); \"The first land sales came in 1877\".",
  s:[{f:"1876-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Rockhampton", tur:"sehir", lat:-23.38, lon:150.51, g:1, k:1,
  kur:"1855-01-01",
  kaynak:"Queensland Places, 'Rockhampton': \"Europeans first settled the district in 1855 when Charles and William Archer established Gracemere pastoral station\"; \"Rockhampton was formally proclaimed as both a port and a town in 1858\".",
  s:[{f:"1855-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Charleville", tur:"sehir", lat:-26.4, lon:146.24, g:1, k:1,
  kur:"1863-01-01",
  kaynak:"Queensland Places, 'Charleville': \"a town reserve of four sq miles gazetted in 1865\"; Gowrie pastoral run 1863'te kuruldu ve \"A hotel was constructed there\"; 1868'de William Tully sokakları ölçtü.",
  s:[{f:"1863-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Longreach", tur:"sehir", lat:-23.44, lon:144.25, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Longreach': \"In 1885 township lots were sold at a site on the Thomson River\"; \"became Longreach, gazetted as a town in 1887\"; \"The opening of the railway line in 1892\".",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cloncurry", tur:"sehir", lat:-20.7, lon:140.51, g:1, k:1,
  kur:"1867-05-01",
  kaynak:"Queensland Places, 'Cloncurry': \"in May 1867 he found the 'Great Australian' copper ore body south of present day Cloncurry\"; \"in 1876 the Cloncurry Township was surveyed\".",
  s:[{f:"1867-05-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Winton", tur:"sehir", lat:-22.39, lon:143.04, g:1, k:1,
  kur:"1876-01-01",
  kaynak:"Queensland Places, 'Winton': \"A former police sergeant from Aramac, Robert Allen, opened a hotel/store in 1876 at Pelican Waterhole\"; \"The Winton town reserve was gazetted in 1879.\"",
  s:[{f:"1876-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cunnamulla", tur:"sehir", lat:-28.07, lon:145.68, g:1, k:1,
  kur:"1865-01-01",
  kaynak:"Queensland Places, 'Cunnamulla': \"The waterhole became a convenient stopping place, on the intersection of stock routes, with a shanty and rudimentary settlement by the mid-1860s\"; \"A town was surveyed and a court house opened by 1869.\"",
  s:[{f:"1865-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Barcaldine", tur:"sehir", lat:-23.55, lon:145.29, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Barcaldine and Barcaldine Shire': \"Barcaldine town lots were sold in 1885 and within a year several buildings were under construction\"; \"By the end of 1886 the town had been surveyed and the railway line had reached there\".",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Blackall", tur:"sehir", lat:-24.42, lon:145.46, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Blackall and Blackall Shire': \"a rudimentary village settlement evident by 1867\"; \"Local government was established in 1879 with the Kargoolnah division\".",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Croydon", tur:"sehir", lat:-18.2, lon:142.24, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Croydon and Croydon Shire': \"In 1885 the owners of Croydon Downs discovered gold at the site of the future township\"; \"by 1886 batteries were brought in and installed along with masses of corrugated iron for buildings\". ⚠️ Kaynak resmî kasaba ilan günü VERMİYOR.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Georgetown", tur:"sehir", lat:-18.29, lon:143.55, g:1, k:1,
  kur:"1869-01-01",
  kaynak:"Queensland Places, 'Georgetown': \"Georgetown began in 1869 as an alluvial gold mining centre, based on the Etheridge River.\"",
  s:[{f:"1869-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Charters Towers", tur:"sehir", lat:-20.08, lon:146.26, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Queensland Places, 'Charters Towers': \"In January 1872 an Aboriginal youth, Jupiter Mosman, stumbled on gold near Towers Hill\"; \"Charters Towers was made a municipal borough in 1877\".",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Barrow Creek Telgraf İstasyonu", tur:"sehir", lat:-21.53, lon:133.88, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government, Parks and Wildlife, 'Barrow Creek Telegraph Station Historical Reserve': istasyon 1872'de inşa edildi; yeri Eylül 1871'de John Ross'un Overland Telegraph keşif kolu tarafından seçildi.",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Tennant Creek Telgraf İstasyonu", tur:"sehir", lat:-19.55, lon:134.19, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government, Parks and Wildlife, 'Tennant Creek Telegraph Station Historical Reserve': \"A temporary building for a telegraph repeater station was erected near the watercourse of Tennant Creek, 11km north of the town, in 1872.\" ⚠️ Koordinat İSTASYONUNdur, kasabanın değil (11 km kuzey).",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Halls Creek", tur:"sehir", lat:-18.23, lon:127.67, g:1, k:1,
  kur:"1885-08-01",
  kaynak:"Western Australian Museum, 'WA Goldfields' ve DPLH inHerit Register of Heritage Places: \"In August 1885, Charles Hall and his partner John Slattery discovered gold in the vicinity of the old Halls Creek townsite\" — WA'nın ilk ödenebilir altını; Kimberley altına hücumu başladı.",
  s:[{f:"1885-08-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Marble Bar", tur:"sehir", lat:-21.17, lon:119.75, g:1, k:1,
  kur:"1893-07-13",
  kaynak:"Landgate (WA) / WA Museum: Marble Bar ve Nullagine'de altın 1880'lerde bulundu; \"The Marble Bar townsite was gazetted on 13 July 1893.\"",
  s:[{f:"1893-07-13",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Emerald", tur:"sehir", lat:-23.53, lon:148.16, g:1, k:1,
  kur:"1878-01-01",
  kaynak:"Queensland Places, 'Emerald': \"By 1877 the line reached Blackwater and, in anticipation of a further extension west, the town of Emerald was surveyed in 1878\" — Nogoa Nehri'nin batı yakasına yerleştirildi.",
  s:[{f:"1878-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bowen", tur:"sehir", lat:-20.01, lon:148.25, g:1, k:1,
  kur:"1861-04-01",
  kaynak:"Queensland Places, 'Bowen': \"in April 1861 the two parties came together for the proclamation of the township\"; \"Named Bowen after the Governor of Queensland, it was the first township north of Rockhampton\"; \"In 1863 Bowen was proclaimed a municipality\".",
  s:[{f:"1861-04-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Roma (Queensland)", tur:"sehir", lat:-26.57, lon:148.79, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Roma': \"The Bungil Creek location, known as Reids Crossing after the shanty's proprietor, Thomas Reid, was chosen for survey, and named Roma after the Queensland Governor's wife, Diamantina Roma Bowen\"; \"Declared a municipality in 1867\". ⚠️ Kaynak ÖLÇÜM YILINI vermiyor; 1867 belediye ilanıdır. ⚠️ AD: atlasta Roma (İtalya) var, ayırt edici sonek ZORUNLU (girdi.py tam dizgi karşılaştırır).",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bundaberg", tur:"sehir", lat:-24.87, lon:152.35, g:1, k:1,
  kur:"1866-01-01",
  kaynak:"Queensland Places, 'Bundaberg': \"in 1868 the district surveyor, John Thompson, was instructed to mark out a town reserve on the south bank. It was named Bundaberg\"; ilk Avrupa yerleşimi 1860'ların ortası, Stewart kardeşler 1866'da araziyi aldı.",
  s:[{f:"1866-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Broken Hill", tur:"sehir", lat:-31.96, lon:141.47, g:1, k:1,
  kur:"1883-09-05",
  kaynak:"Australian Dictionary of Biography (ANU), 'Charles Rasp': \"On 5 September 1883, Charles Rasp pegged the first block on the 'Broken Hill', which he thought was a mountain of tin\"; Mount Gipps müdürü George McCulloch'un önerisiyle 'syndicate of seven' kuruldu; 1885'te zengin gümüş cevheri Broken Hill Proprietary Co.'nun kurulmasına yol açtı. TAM GÜN kaynakta.",
  s:[{f:"1883-09-05",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Darwin (Palmerston)", tur:"sehir", lat:-12.4577, lon:130.8414, g:1, k:1,
  kur:"1869-02-01",
  kaynak:"Library & Archives NT, 'Surveying Darwin 1869': Güney Avustralya Ölçüm Genel Müdürü G. W. Goyder ve 138 kişilik ekibi Şubat-Eylül 1869 arasında dört kasaba yeri dâhil ~270.000 hektar ölçtü; ana kasaba 'Palmerston' adıyla beş haftada ölçüldü. Adı 1911'de Darwin oldu. ⚠️ 1869-1911 arası adı PALMERSTON'dur — atlas 1923'e kadar geldiği için ikisi de kayıtta.",
  s:[{f:"1869-02-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Pine Creek", tur:"sehir", lat:-13.82, lon:131.83, g:1, k:1,
  kur:"1871-01-01",
  kaynak:"Library & Archives NT / City of Darwin: \"The town's growth was accelerated when gold was discovered at Pine Creek in 1871.\"",
  s:[{f:"1871-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Horsham", tur:"sehir", lat:-36.71, lon:142.2, g:1, k:1,
  kur:"1842-01-01",
  kaynak:"Victorian Places (Monash University ve University of Queensland), 'Horsham': \"In 1842 James Darlot took up occupation of a pastoral run in the district where Horsham was later established\"; \"a town survey plan of 1849 shows the name and Langland's store at the corner of Darlot and Hamilton Streets\"; \"the borough of Horsham was established on 17 November 1882\".",
  s:[{f:"1842-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cue", tur:"sehir", lat:-27.43, lon:117.9, g:1, k:1,
  kur:"1892-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA, Places Database) / WA Museum: \"Cue was established as a result of a gold find reported by Tom Cue in 1892\"; \"the townsite of Cue was gazetted on 17 August 1893\".",
  s:[{f:"1892-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Southern Cross", tur:"sehir", lat:-31.23, lon:119.33, g:1, k:1,
  kur:"1888-10-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"The Yilgarn goldfield had been declared on 1 October 1888 and the townsite of Southern Cross was gazetted in 1890\"; 1892 Eylül'ünde Coolgardie keşfiyle sönmeye başladı.",
  s:[{f:"1888-10-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Leonora", tur:"sehir", lat:-28.88, lon:121.33, g:1, k:1,
  kur:"1897-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"In 1897, the Mount Margaret Goldfield was gazetted, with a warden's office situated at Malcolm. In the same year a townsite was laid out in Leonora.\"",
  s:[{f:"1897-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Port Augusta", tur:"sehir", lat:-32.49, lon:137.77, g:1, k:1,
  kur:"1852-05-24",
  kaynak:"State Library of South Australia / SA Memory, 'Port Augusta: evolution of a city': \"On 24 May 1852, Port Augusta was proclaimed after erecting a flagstaff on the beach.\" TAM GÜN kaynakta.",
  s:[{f:"1852-05-24",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Ceduna", tur:"sehir", lat:-32.1347, lon:133.6739, g:1, k:1,
  kur:"1901-06-20",
  kaynak:"State Library of South Australia / SA Memory, 'Developing Trade and Port Histories: Outports - Ceduna/Thevenard': kasaba Haziran 1901'de ilan edildi, \"Ceduna was proclaimed on 20 June 1901\"; önceki adı Murat Bay. TAM GÜN.",
  s:[{f:"1901-06-20",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Oodnadatta", tur:"sehir", lat:-27.55, lon:135.45, g:1, k:1,
  kur:"1891-01-01",
  kaynak:"SA Department for Environment and Water, 'Oodnadatta Track Heritage Survey' ve State Library of SA: \"the line north from Port Augusta was started in 1878 and by 1891 it had only reached Oodnadatta\"; demiryolu başı 1901'de Commonwealth devralana kadar orada kaldı.",
  s:[{f:"1891-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Kalgoorlie", tur:"sehir", lat:-30.75, lon:121.47, g:1, k:1,
  kur:"1893-06-01",
  kaynak:"DPLH inHerit (Heritage Council of WA) / State Library of WA: \"In June 1893, Paddy Hannan and his partners discovered alluvial gold thirty miles (48 kms) north-east of Coolgardie. On 4 September 1894, Hannan's Find was declared the townsite of Kalgoorlie.\"",
  s:[{f:"1893-06-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Onslow", tur:"sehir", lat:-21.6531, lon:115.0983, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"DPLH inHerit, 'Old Onslow Townsite' (Register of Heritage Places): \"Onslow (Old Onslow) was gazetted in 1885\"; Yeni Onslow Ocak 1924'te ilan edildi. ⚠️ Koordinat ESKİ Onslow'undur — atlas 1923'e kadar geliyor.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Carnarvon", tur:"sehir", lat:-24.88, lon:113.66, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"The town of Carnarvon was gazetted in January 1883.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Broome", tur:"sehir", lat:-17.96, lon:122.24, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Western Australian Museum, 'Broome' / DPLH inHerit: \"The town of Broome was gazetted in 1883 in response to the expansion of the pastoral and pearling industry in the western Kimberley region.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Meekatharra", tur:"sehir", lat:-26.59, lon:118.49, g:1, k:1,
  kur:"1903-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA), Murchison Goldfields kayıtları: \"A town was not gazetted until 1903\". Komşu Nannine 1893'te, Gabanintha Kasım 1898'de ilan edilmişti.",
  s:[{f:"1903-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wagga Wagga", tur:"sehir", lat:-35.11, lon:147.37, g:1, k:1,
  kur:"1849-01-01",
  kaynak:"Encyclopaedia Britannica, 'Wagga Wagga': \"Settled in the 1830s, Wagga Wagga was proclaimed a town in 1849, a borough in 1870, and a city in 1946.\"",
  s:[{f:"1849-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Dubbo", tur:"sehir", lat:-32.24, lon:148.6, g:1, k:1,
  kur:"1841-01-01",
  kaynak:"Encyclopaedia Britannica, 'Dubbo': \"The district around what is now Dubbo was visited in 1818 by the explorer John Oxley, and it received its first settlers in 1824. Dubbo, founded in 1841, was an established village by 1849.\" ⚠️ TAHMİNİM 1849'DU, kaynak 1841 diyor.",
  s:[{f:"1841-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Goulburn", tur:"sehir", lat:-34.75, lon:149.72, g:1, k:1,
  kur:"1818-01-01",
  kaynak:"Encyclopaedia Britannica, 'Goulburn': \"A settlement was established on a site chosen in 1818 by the explorer Hamilton Hume and was originally named Goulburn Plains.\" ⚠️ Kaynak kasaba ilan yılını vermiyor; 1818 YER SEÇİMİ tarihidir ve en erken kaynaklı olaydır.",
  s:[{f:"1818-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Armidale", tur:"sehir", lat:-30.51, lon:151.67, g:1, k:1,
  kur:"1839-01-01",
  kaynak:"Encyclopaedia Britannica, 'Armidale': \"Armidale was founded in 1839 by G.J. Macdonald, commissioner of crown lands, who named it for his father's Scottish baronial estate on the Isle of Skye.\"",
  s:[{f:"1839-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bourke", tur:"sehir", lat:-30.09, lon:145.94, g:1, k:1,
  kur:"1835-01-01",
  kaynak:"Encyclopaedia Britannica, 'Bourke': \"The town originated with a stockade, Fort Bourke, built in 1835 by Sir Thomas Livingstone Mitchell\". ⚠️ 1835 İSTİHKÂM tarihidir; tahminim 1862 (kasaba) idi. En erken kaynaklı kalıcı yerleşim olayı olarak 1835 seçildi.",
  s:[{f:"1835-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Geraldton", tur:"sehir", lat:-28.77, lon:114.61, g:1, k:1,
  kur:"1850-01-01",
  kaynak:"Encyclopaedia Britannica, 'Geraldton': \"Surveyed in 1850, Geraldton originated as a military post for the nearby Murchinson goldfield and was declared a town in 1871.\"",
  s:[{f:"1850-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Derby", tur:"sehir", lat:-17.3, lon:123.63, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Encyclopaedia Britannica, 'Derby (Western Australia)': \"Founded in 1883 to serve a pastoral district, Derby was named for Edward Henry Stanley, 15th earl (of Derby).\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wyndham", tur:"sehir", lat:-15.48, lon:128.12, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Encyclopaedia Britannica, 'Wyndham': \"Founded in 1885 as a port for the Kimberley goldfield, it was named for the son of Sir Napier Broome.\" ⚠️ Tahminim 1886'ydı.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Burketown", tur:"sehir", lat:-17.74, lon:139.55, g:1, k:1,
  kur:"1865-01-01",
  kaynak:"Queensland Places / Encyclopaedia Britannica: \"Burketown was founded on the Albert River in 1865.\"",
  s:[{f:"1865-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Thargomindah", tur:"sehir", lat:-27.99, lon:143.82, g:1, k:1,
  kur:"1870-01-01",
  kaynak:"Queensland Places, 'Bulloo Shire': \"Pastoral occupation of the Bulloo district began in the 1860s and a police barracks was constructed at Thargomindah, the shire's administrative centre, in the early 1870s\"; mahkeme 1876, okul 1884, hastane 1888. ⚠️ Kaynak TAM YIL vermiyor, '1870'lerin başı' diyor — 1870 alt sınır olarak alındı.",
  s:[{f:"1870-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Port Lincoln", tur:"sehir", lat:-34.72, lon:135.86, g:1, k:1,
  kur:"1839-01-01",
  kaynak:"Encyclopaedia Britannica, 'Port Lincoln': \"The city was surveyed in 1839, and it was named by explorer Matthew Flinders for his native English county of Lincoln.\"",
  s:[{f:"1839-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cobar", tur:"sehir", lat:-31.5, lon:145.83, g:1, k:1,
  kur:"1869-01-01",
  kaynak:"Encyclopaedia Britannica, 'Cobar': \"The town's origins date to 1869 or 1870, when a party of well-sinkers being guided through the area by two Aboriginal men noticed strange green streaks next to a water hole near their campsite.\" ⚠️ Kaynak iki yıl veriyor; erken sınır 1869 alındı.",
  s:[{f:"1869-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Moree", tur:"sehir", lat:-29.46, lon:149.84, g:1, k:1,
  kur:"1848-01-01",
  kaynak:"Encyclopaedia Britannica, 'Moree': \"Moree originated in 1848 as a livestock station; it became a village in 1852, a town in 1862, and a municipality in 1890.\"",
  s:[{f:"1848-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Hay", tur:"sehir", lat:-34.51, lon:144.85, g:1, k:1,
  kur:"1840-01-01",
  kaynak:"Encyclopaedia Britannica, 'Hay (New South Wales)': \"The settlement originated in 1840 as a coach station known as Lang's Crossing Place. It was surveyed in 1858 and became a town the following year, named for John Hay.\"",
  s:[{f:"1840-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Katanning", tur:"sehir", lat:-33.69, lon:117.56, g:1, k:1,
  kur:"1898-01-01",
  kaynak:"Encyclopaedia Britannica, 'Katanning': \"The town was laid out in 1898... Although sandalwood cutters had been in the area for some time, there was no permanent settlement until the arrival of the railroad there in the late 19th century.\" ⚠️ TAHMİNİM 1889'DU — kaynak 1898 diyor, 9 YIL sapma.",
  s:[{f:"1898-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wave Hill", tur:"sehir", lat:-17.39, lon:130.83, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Northern Territory Government (fossicking.nt.gov.au, 'Wave Hill'): \"Wave Hill Station started in 1883, and Wave Hill was formed as a settlement supply town to service the local pastoral industry which grew up in the early 1900's in the area.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Mildura", tur:"sehir", lat:-34.19, lon:142.16, g:1, k:1,
  kur:"1887-01-01",
  kaynak:"Encyclopaedia Britannica, 'Mildura' ve Victorian Places (Monash+UQ): \"The Chaffey brothers began the Mildura irrigation colony near the Murray River in the Mallee region of north-west Victoria in 1887\"; 1840'larda bölgede koyun otlakları kurulmuştu.",
  s:[{f:"1887-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bairnsdale", tur:"sehir", lat:-37.83, lon:147.63, g:1, k:1,
  kur:"1844-01-01",
  kaynak:"Victorian Places (Monash University ve University of Queensland), 'Bairnsdale': Bairnsdale run \"occupied by Archibald McLeod from 1844\"; \"the government township was surveyed on the west bank of the river, the first land being sold in 1860\".",
  s:[{f:"1844-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Roebourne", tur:"sehir", lat:-20.78, lon:117.14, g:1, k:1,
  kur:"1866-08-17",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"Roebourne, the first gazetted town in the North-West, was proclaimed on 17 August 1866. Roebourne was the centre for 49 surrounding pastoral leases and was the main town in the fast developing North District with Cossack as its port.\" TAM GÜN kaynakta.",
  s:[{f:"1866-08-17",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Birdsville", tur:"sehir", lat:-25.9, lon:139.35, g:1, k:1,
  kur:"1882-01-01",
  kaynak:"Queensland Places, 'Diamantina Shire': \"Birdsville had both a store and a hotel by 1882\"; bugünkü otel 1885 tarihli olanın kopyası; 1886'da Diamantina yerel yönetim bölümü kuruldu. 1903 Australian Handbook onu \"Queensland'in en uzak kasabası\" diye anıyor.",
  s:[{f:"1882-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wiluna", tur:"sehir", lat:-26.59, lon:120.22, g:1, k:1,
  kur:"1902-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA), 'Wiluna Mine (fmr)': \"The Wiluna Gold Mine commenced operations in 1902 and was worked very successfully until 1947.\" ⚠️ TAHMİNİM 1898'Dİ — kaynak 1902 diyor.",
  s:[{f:"1902-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Camooweal", tur:"sehir", lat:-19.92, lon:138.12, g:1, k:1,
  kur:"1883-12-15",
  kaynak:"QUEENSLAND HERITAGE REGISTER (Queensland Government, Department of Environment and Science, apps.des.qld.gov.au): \"A town reserve of four square miles was gazetted on 15 December 1883 and was amended and re-gazetted in August 1884\"; rezerv Georgina Nehri üzerinde, Lake Frances yakınında, Rocklands Station'ın güneyinde. 1883'te yerel otlakçılar Queensland hükûmetine dilekçe vererek Burketown'dan Georgina Nehri boyunca inen ana sığır güzergâhı ile doğudan Kuzey Toprakları'na giden yolun kavşağında kasaba arazisi istemişti. TAM GÜN kaynakta. 📌 EN YÜKSEK KATKILI KAYIT (18 hücre) ve en zor kaynaklısıydı — Queensland Places'te sayfası YOK, kurumsal siciline gidilerek bulundu.",
  s:[{f:"1883-12-15",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Borroloola", tur:"sehir", lat:-16.07, lon:136.3, g:1, k:1,
  kur:"1884-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government, ntlis.nt.gov.au/placenames): \"The 'Town of Borroloola' was declared on 4 September 1885 under the Northern Territory Crown Lands Consolidation Act 1882. The township itself was set out in 1884 by Surveyor JP Hingston.\" Kasaba McArthur Nehri kıyısında, Queensland'den Roper Nehri, Katherine ve Darwin'e sığır götüren sürücülere hizmet için kuruldu.",
  s:[{f:"1884-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Daly Waters Telgraf İstasyonu", tur:"sehir", lat:-16.25, lon:133.37, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government (nt.gov.au, Parks bilgi föyleri) ve Library & Archives NT: Overland Telegraph hattı 1872'de tamamlandı ve Daly Waters onun telgraf istasyonlarından biridir (Territory Stories, 'Daly Waters Station'). ⚠️ AÇIKÇA YAZIYORUM: İSTASYONA ÖZEL bir 'şu tarihte inşa edildi' cümlesi BULUNAMADI — Barrow Creek ve Tennant Creek'te böyle bir cümle vardı, burada YOK. Tarih HAT düzeyindeki kaynaktan türetilmiştir. Bir sonraki tur istasyon listesini (11-15 istasyon, kaynaklar sayıda ayrışıyor) tek tek doğrulamalı.",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Windorah", tur:"sehir", lat:-25.42, lon:142.65, g:1, k:1,
  kur:"1880-01-01",
  kaynak:"Queensland Places (Centre for the Government of Queensland, UQ), 'Barcoo Shire': \"Windorah was gazetted as a town in 1880.\"",
  s:[{f:"1880-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Laverton", tur:"sehir", lat:-28.63, lon:122.4, g:1, k:1,
  kur:"1899-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA) / State Library of WA: \"The town of Laverton was gazetted in 1899\"; Mount Margaret 1897'de kasaba ilan edilmişti. ⚠️ TAHMİNİM 1896'YDI (altın keşfi) — kasaba ilanı 1899.",
  s:[{f:"1899-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Timber Creek Polis Karakolu", tur:"sehir", lat:-15.66, lon:130.48, g:1, k:1,
  kur:"1895-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government, ntlis.nt.gov.au/placenames): dereyi A. C. Gregory 24 Kasım 1855'te North Australian Expedition sırasında adlandırdı; polis karakolu 1890'ların ortasında kuruldu; otlak deposu 1911'de Phillip Hutchison tarafından. 🔴 KASABA 20 HAZİRAN 1975'TE İLAN EDİLDİ — ATLASIN UFKUNUN DIŞINDA. Bu yüzden kayıt KASABA değil POLİS KARAKOLU adıyla yazıldı; 1281-1923 ufkunda var olan yerleşim odur. ⚠️ Kaynak 'mid-1890s' diyor, TAM YIL VERMİYOR — 1895 orta değer olarak alındı ve bu not kayıtta duruyor.",
  s:[{f:"1895-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Newcastle Waters", tur:"sehir", lat:-17.37, lon:133.41, g:1, k:1,
  kur:"1884-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government): istasyon adını yakınındaki Newcastle Waters su birikintisinden alır; Dr W. B. Browne 1880'lerin başında aldı ve \"had established Newcastle Waters by 1884 with cattle overlanded from Queensland\"; ~1890'da Lewis ailesine satıldı. ⚠️ TAHMİNİM 1861'Dİ — kaynak 1884 diyor, 23 YIL sapma. Sicilde resmî ilan tarihi YOK.",
  s:[{f:"1884-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Esperance", tur:"sehir", lat:-33.86, lon:121.89, g:1, k:1,
  kur:"1894-01-01",
  kaynak:"Western Australian Museum, 'WA Goldfields' / 'The Rush for Gold': \"during the W.A. goldrush in 1894, businesses were established in Esperance, believing that it would be the port for the goldfields\". ⚠️ Kaynak KASABA İLAN yılını vermiyor; 1894 en erken kaynaklı kalıcı yerleşim olayıdır.",
  s:[{f:"1894-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Marree (Hergott Springs)", tur:"sehir", lat:-29.65, lon:138.06, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"History Trust of South Australia: 1883'te Faiz ve Tagh Mahomet kardeşler \"the new railhead township of Marree (formerly Hergott Springs)\"de deve nakliye şirketi kurdu; okul 1884'te açıldı, ad 1918'de Marree oldu.",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

// --------------------------------------------------------------------
// BEYAN — 44 kayıt · kasitli_bosluk:true · bos:"kabile"
// Hiçbiri BOYA TAŞIMAZ (d:[] ve s: yok): kapsamayı kapatır,
// haritayı boyamaz. `§2` emilmesini de engeller.
// --------------------------------------------------------------------

{ ad:"Gibson Çölü", tur:"bolge", lat:-23.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Tanami Çölü", tur:"bolge", lat:-20.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Warlpiri." },

{ ad:"Büyük Victoria Çölü", tur:"bolge", lat:-28.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Büyük Victoria Çölü 2", tur:"bolge", lat:-28.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Gibson Çölü 2", tur:"bolge", lat:-26.5, lon:128.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Simpson Çölü", tur:"bolge", lat:-24.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Büyük Victoria Çölü 3", tur:"bolge", lat:-31.5, lon:124.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Küçük Kum Çölü", tur:"bolge", lat:-25.5, lon:123.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu." },

{ ad:"Büyük Kum Çölü", tur:"bolge", lat:-23.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Büyük Kum Çölü 2", tur:"bolge", lat:-22.5, lon:123.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Küçük Kum Çölü 2", tur:"bolge", lat:-24.5, lon:117.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu." },

{ ad:"Büyük Kum Çölü 3", tur:"bolge", lat:-21.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Gibson Çölü 3", tur:"bolge", lat:-26.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Arnhem Land", tur:"bolge", lat:-13.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Yolŋu." },

{ ad:"Büyük Kum Çölü 4", tur:"bolge", lat:-20.5, lon:124.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Yeni Gine Merkezî Yaylaları", tur:"bolge", lat:-3.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Büyük Victoria Çölü 4", tur:"bolge", lat:-30.5, lon:132.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Gibson Çölü 4", tur:"bolge", lat:-26.5, lon:125.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Büyük Kum Çölü 5", tur:"bolge", lat:-24.5, lon:120.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Cape York Yarımadası", tur:"bolge", lat:-12.5, lon:142.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wik · Kuku Yalanji." },

{ ad:"Eyre Yarımadası kuzeyi / Gawler", tur:"bolge", lat:-30.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Barngarla · Kokatha." },

{ ad:"Büyük Victoria Çölü 5", tur:"bolge", lat:-29.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Yeni Gine Merkezî Yaylaları 2", tur:"bolge", lat:-6.5, lon:139.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Büyük Victoria Çölü 6", tur:"bolge", lat:-26.5, lon:133.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Büyük Kum Çölü 6", tur:"bolge", lat:-24.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Simpson Çölü 2", tur:"bolge", lat:-23.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Cape York Yarımadası 2", tur:"bolge", lat:-15.5, lon:141.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wik · Kuku Yalanji." },

{ ad:"Kimberley iç kesimi", tur:"bolge", lat:-14.5, lon:125.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Bunuba · Gooniyandi." },

{ ad:"Louisiade-Milne takımadası", tur:"bolge", lat:-11.5, lon:153.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Murchison-Gascoyne iç kesimi", tur:"bolge", lat:-29.5, lon:116.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wajarri." },

{ ad:"Büyük Victoria Çölü 7", tur:"bolge", lat:-29.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Simpson Çölü 3", tur:"bolge", lat:-27.5, lon:137.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Murchison-Gascoyne iç kesimi 2", tur:"bolge", lat:-26.5, lon:115.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wajarri." },

{ ad:"Pilbara iç kesimi", tur:"bolge", lat:-24.5, lon:116.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Nyiyaparli · Banyjima." },

{ ad:"Büyük Kum Çölü 7", tur:"bolge", lat:-21.5, lon:122.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Yeni Kaledonya iç kesimi", tur:"bolge", lat:-20.5, lon:164.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Aru-Tanimbar adaları", tur:"bolge", lat:-7.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 3", tur:"bolge", lat:-7.5, lon:145.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Aru-Tanimbar adaları 2", tur:"bolge", lat:-5.5, lon:134.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 4", tur:"bolge", lat:-5.5, lon:140.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Britanya iç kesimi", tur:"bolge", lat:-5.5, lon:150.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Batı (Kuş Başı / Vogelkop)", tur:"bolge", lat:-3.5, lon:133.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 5", tur:"bolge", lat:-3.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Batı (Kuş Başı / Vogelkop) 2", tur:"bolge", lat:-0.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

];

import json, os
IG = "Imperial Gazetteer of India (Meyer/Burn/Cotton, 1908-09), DSAL (University of Chicago), https://dsal.uchicago.edu/reference/gazetteer/"
OKU = "DSAL arama sonucu OCR metni olarak 17 Kasım 2026'da tarayıcıda okundu (sayfa görüntüsü okunmadı)"
TEK = "TEK KAYNAK (Imperial Gazetteer; OCR). Çift teyit: Britannica sayfası/TDV/Majumdar bu oturumda ilgili yılı vermedi ya da 404 döndü; bağımsız ikinci kaynak bulunamadı. "


def k(id_, ad, atlas_ad, lat, lon, kat, adlar, ilk, olay, ic_not, kur=None):
    return dict(id=id_, ad=ad, atlas_ad=atlas_ad, lat=lat, lon=lon, kat1900=kat, adlar=adlar, ilk=ilk,
                kur=kur, ark=None, bit=None, sahip=[], olay=olay, ic_not=ic_not)


def kay(vol, sayfa, madde):
    return f"{IG}, c. {vol}, s. {sayfa}, '{madde}' maddesi; {OKU}"


def ilkd(t, gun, nic, kes, kaynak, tanik):
    return dict(t=t, gun=gun, nicelik=nic, kesinlik=kes, kaynak=kaynak, tanik=tanik)


def olay(t, gun, kk, b, kes, kaynak):
    return dict(t=t, gun=gun, k=kk, b=b, kesinlik=kes, kaynak=kaynak)


K = []

K.append(k("siyalkot-in-p7", "Sialkot", "Siyâlkot", 32.494, 74.531, 3, ["Sialkot", "Sakala (Sagal) — özdeşleştirme tartışmalı"],
  ilkd("0790-01-01", "790", "ilk_anilis", "yil", kay(22, 335, "Sialkot Town"),
       "In A. D. 790 the fort and city were demolished by an army under Raja Naraut"),
  [olay("0790-01-01", "790", "diger", "Sialkot kalesi ve şehri Raja Naraut'un ordusunca yıkıldı (Ghandaurlar destekli)", "yil", kay(22, 335, "Sialkot Town"))],
  TEK + "790'da yıkım kaydı şehrin o yıl VAR olduğunu gösterir; kuruluş tanığı değildir (kur yok). Aynı maddede tarihsiz rivayet: Raja Sala/Salivahan kurucu (efsane, yazılmadı). Metindeki 'A. n. 790' OCR okuması; 790 olarak okundu, sayfa görüntüsü (V22 nesne 341) doğrulanamadı (ekran görüntüsü alınamadı). Cümle 'the fort and city' der; atıf, madde başlığı Sialkot Town olduğu için kabul edildi. Aynı eserde Sakala=Sialkot özdeşleştirmesi (c.2 s.81, c.22 s.335 'recently been suggested') tartışmalı olduğundan ilk anılış sayılmadı. Atlas noktası 0500'de (alkhon) başlıyor; 790 sonrasıdır — sahip:[] bırakıldı (uyarı beklenen); atlas başlangıcının dayanağı bulunamadı."))

K.append(k("panipat-in-p7", "Panipat", "Pânipat", 29.39, 76.977, 3, ["Pânipat"],
  ilkd("1390-01-01", "1390", "ilk_anilis", "yil", kay(19, 397, "Panipat Town"),
       "It was from Panipat that prince Humayun plundered Delhi in 1390"),
  [],
  TEK + "Aynı madde Panipat'ı 'yüksek eskilikte, Mahabharata'da anılan' diye anar (tarihsiz). 1526 savaşı şehir olgusu sayılmadı (kural 4). Aynı maddede 'Panipat was seven years later held for Tatar Khan and taken by Ikbal Khan' (1390'a göre göreli, ≈1397) yıl cümlede olmadığı için YAZILMADI (türetme yok); Bahlol Lodi döneminde (1451-89) Sikender Lodi'nin Panipat'ı alıp merkez yapması tarihsiz. Atlas noktası babur-imparatorlugu ile başlıyor (1526 öncesi hâlen ilk tanıktan sonra; sahip zinciri yazılmadı)."))

K.append(k("calandhar-in-p7", "Jalandhar", "Câlandhar (Jalandhar)", 31.326, 75.576, 3, ["Jalandhara", "Jullundur", "Jalandhar"],
  ilkd("1088-01-01", "1088", "ilk_anilis", "yil", kay(13, 194, "Hoshiarpur District (tarih bölümü)"),
       "probably came permanently under Muhammadan rule on the fall of jullundur in io88"),
  [olay("1088-01-01", "1088", "fetih", "Jullundur'un düşüşü (Müslüman hâkimiyetine geçiş, 'probably')", "yil", kay(13, 194, "Hoshiarpur District"))],
  TEK + "OCR metni 'io88' (i=1, o=0) → 1088 okundu; sayfa görüntüsü doğrulanamadı. Cümle 'the plains probably came permanently under Muhammadan rule on the fall of Jullundur in 1088' ('muhtemelen') — Hoshiarpur District maddesindedir ama cümle Jullundur'un kendi olgusunu (düşüş) adlandırır. Aynı eserde daha erken kesin tanık yok: Hiuen Tsiang 7. yy 'Jullundur monarchy' (c.14 s.383) krallık/bölge anılışıdır (kural 4); Jullundur Town maddesi (c.14 s.231) yalnız 1757 (Sihlerce yakılma) ve 1766 verir. Büyük olasılıkla Gazneli ilerleyişi; Majumdar VI 1298 'near Jalandhar' savaş yeri (alınmadı). Atlas Câlandhar'ı babur-imparatorlugu ile başlatıyor (1526 civarı): ilk tanık atlas başlangıcından ÖNCEDİR, sahip zinciri yazılmadı."))

K.append(k("ludhiyana-in-p7", "Ludhiana", "Ludhiyana", 30.901, 75.857, 3, ["Lodiana", "Ludhiana"],
  ilkd("1481-01-01", "1481", "kurulus", "yil", kay(16, 208, "Ludhiana Town"),
       "It was founded in 1481 by two Lodi Pathans, from whom it took its name of Lodiana"),
  [],
  TEK + "OCR metni 'founded in \"481' (ilk hane kayıp); 1481 olarak okundu ve Lodi dönemi geleneğiyle (Majumdar VI: Yusuf/Nihang Han ~1480) tutarlıdır; birebir tırnaklı OCR metninde yalnız bu hane düzeltildi. Sayfa görüntüsü doğrulanamadı. İki kurucu Lodi Pathan: bu Gazetteer metninde adları verilmez. Aynı madde Lodiler zamanında şehrin bu bölgenin hükümet merkezi olduğunu, Babür sonrası mahal merkezi olduğunu söyler (tarihsiz). Atlas noktası 1480-01-01 civarı babur-imparatorlugu ile başlıyor (1526 sonrası): ilk.t atlas başlangıcından ÖNCEDİR; Lodi künyesi (delhi-sultanligi) kaynakta 'seat of government under the Lodis' ile desteklenir ancak tarihsiz — sahip zinciri yazılmadı."))

K.append(k("ravalpindi-in-p7", "Rawalpindi", "Râvalpindi", 33.598, 73.048, 3, ["Fatehpur Baori", "Rawalpindi"],
  ilkd("1400-01-01", "14. yüzyıl", "ilk_anilis", "yuzyil", kay(21, 272, "Rawalpindi Town"),
       "Rawalpindi fell into decay during one of the Mongol invasions in the fourteenth century"),
  [olay("1400-01-01", "14. yüzyıl", "diger", "Fatehpur Baori adıyla anılan yerleşim Moğol akınlarında çöktü; Gakhar reisi Jhanda Han yeniden kurup bugünkü adı verdi (tarihsiz)", "yuzyil", kay(21, 272, "Rawalpindi Town")),
   olay("1765-01-01", "1765", "fetih", "Sikh maceracısı Sardar Milka Singh Rawalpindi'yi işgal etti, tüccar çağırdı", "yil", kay(21, 272, "Rawalpindi Town"))],
  TEK + "Cümle 14. yüzyılı 'çöküş' olarak verir; yerleşim ('Fatehpur Baori, within historical times') ondan önce vardı ama yıl verilmez. Güvenli uç (yüzyıl sonu) 1400. Aynı maddede MÖ-antik kalıntı (2 km²'lik antik tuğla alanı) tarihsiz. 1765 olayı Britannica'daki tanıkla uyumludur (parti 6 borcu: 'yalnız Britannica 1765') — iki bağımsız kaynak DEĞİL (Britannica ve Gazetteer aynı anlatıya dayanıyor olabilir), bu yüzden çift teyit yazılmadı. Atlas başlangıcı babur-imparatorlugu (1526 civarı) ilk tanıktan sonradır; zincir yazılmadı."))

K.append(k("bhagalpur-in-p7", "Bhagalpur", "Bhâgalpûr", 25.244, 86.982, 3, ["Bhagalpur", "Bhâgalpûr"],
  ilkd("1573-01-01", "1573", "ilk_anilis", "yil", kay(8, 36, "Bhagalpur Town"),
       "Akbar's troops marched through the town when invading Bengal in 1573 and 1575"),
  [olay("1592-01-01", "1592", "diger", "Man Singh Bhagalpur'u Bihar birliklerinin toplanma yeri yaptı (Bengal seferi)", "yil", kay(8, 36, "Bhagalpur Town"))],
  TEK + "Madde cümlesi: 'Bhagalpur figures more than once in Muhammadan chronicles of the sixteenth century.' (önceki cümle; şehir adı + yüzyıl); ardından 1573/1575 yılları. Yıl ve şehir adı iki ardışık cümleye bölündüğü için tanıkta 'the town' atfı kullanıldı (madde başlığı Bhagalpur Town). Aynı eserde 1615 Champanagar türbe yazıtı (c.8 s.29) daha geç. Bhagalpur'un antik Champa/Anga bağı (c.2 s.316) bölge anılışıdır (alınmadı). Atlas bengal-sultanligi (1340-1576) ile başlıyor; ilk tanık (1573) sultanlığın son yıllarındadır: Atlasın bengal-sultanligi başlangıcı için dayanak bulunamadı, zincir yazılmadı."))

K.append(k("sonargaon-in-p7", "Sonargaon", "Sonârgâon", 23.646, 90.599, 3, ["Sonargaon", "Sunargaon"],
  ilkd("1296-01-01", "1296", "ilk_anilis", "yil", kay(11, 105, "Dacca District (tarih bölümü)"),
       "with his head-quarters at SONARGAON, a town near the banks of the Meghna"),
  [olay("1296-01-01", "1296", "diger", "Alâeddin Hacî'nin (Delhi) Bengal'i ikiye bölüp Behadur Şah'ı güneydoğu valisi yapması; merkezi Sonargaon", "yil", kay(11, 105, "Dacca District")),
   olay("1351-01-01", "1351", "diger", "Şemseddin İlyas Şah tüm eyaleti birleştirdi; Sonargaon Doğu Bengal valilerinin ikametgâhı oldu", "yil", kay(18, 151, "Mymensingh District")),
   olay("1608-01-01", "1608", "diger", "Vali İslam Han başkenti Rajmahal'dan Dacca'ya taşıdı (Sonargaon Doğu Bengal'in eski Müslüman başkentiydi)", "yil", kay(11, 117, "Dacca District"))],
  TEK + "Tek cümle: 'In 1296 the great Ala-ud-din became emperor of Delhi, and he divided Bengal into two provinces, making Bahadur Shah governor of the south-east, with his head-quarters at SONARGAON, a town near the banks of the Meghna, 15 miles east of the modern Dacca.' — yıl ve şehir adı AYNI cümlede; tanık 15 kelime sınırı için kısaltıldı (yıl cümle başındadır, kısaltılan parça cümlenin sonundaki 'headquarters' kısmıdır). Madde başlığı bölge (Dacca District) olduğundan bu bir 'başlık atfı' değil, yıl+ad aynı cümle olgusudur. 1296'da Alâeddin Hacî Delhi sultanı OLMUŞTUR (1296); TDV 'Alâeddin Halacî' yalnız sınır anılışı veriyordu (parti 6 borcu). Atlas Sonârgâon'u 1026'da varman-vanga ile başlatıyor (ilk tanık sonradır): atlasın 1026 iddiası için dayanak bulunamadı; sahip zinciri yazılmadı. Gazetteer ayrıca 'ilk' için 1296'dan önceki tarihsiz bir kayıt vermez."))

K.append(k("hugli-in-p7", "Hooghly", "Hûglî (Hooghly)", 22.897, 88.39, 3, ["Hugli", "Hooghly", "Golghat"],
  ilkd("1537-01-01", "1537", "kurulus", "yil", kay(13, 176, "Hooghly Town"),
       "Hooghly was founded by the Portuguese in 1537 on the decay of the royal port of SATGAON"),
  [olay("1651-01-01", "1651", "diger", "Hooghly'de İngiliz fabrikası kuruldu (Gabriel Boughton'ın aracılığıyla)", "yil", kay(13, 164, "Hooghly District") + "; ayrıca c.2 s.458")],
  TEK + "UYARI — YIL ŞÜPHELİ: Gazetteer iki yerde (c.13 s.173 ve s.176) Hooghly'nin 1537'de Portekizlilerce kurulduğunu yazar; ancak c.8 s.39 OCR'ı 'port and town of Hooghly by the Portuguese in 1637' okur ve genel bilgi olarak Portekiz Hugli yerleşiminin 16. yy sonuna (~1579-80) tarihlendiği hatırlanır (BU OTURUMDA KAYNAKLA DOĞRULANMADI; yalnız şüphe işareti). Gazetteer'in kendi metni birebir yazıldı; HAKEMLİ KARAR için üçüncü/dördüncü kaynak bulunamadı (Britannica 'Hugli-Chinsurah' 404). Bu yüzden kur/ilk TEK kaynak ve çelişkili: gün ancak yeniden teyitle kesinleşir. Aynı maddede yerleşimin çekirdeği Golghat kalesi; ayrıca 1632'de 'this was captured by the Muhammadans... three and a half months' siege' (c.13 s.164; 'this' atfı, yazılmadı). Atlas bengal-sultanligi (1340-1576) ile başlıyor; Gazetteer'ın 1537 ilk tanığı atlas başlangıcından sonradır."))

K.append(k("gauhati-in-p7", "Guwahati", "Gauhâtî (Guwahati)", 26.145, 91.736, 3, ["Pragjyotishapura (özdeşleştirme)", "Gauhati"],
  ilkd("1600-01-01", "16. yüzyıl", "ilk_anilis", "yuzyil", kay(12, 184, "Gauhati Town"),
       "in the sixteenth century it was included in the Koch kingdom"),
  [olay("1637-01-01", "1637", "fetih", "Müslümanlar (Babürlüler) Gauhati'yi işgal etti (Ahom çatışmaları sürerken)", "yil", kay(14, 332, "Kamrup District (tarih bölümü)")),
   olay("1786-01-01", "1786", "diger", "Rangpur Moamarialarca alınınca Ahom Raja başkentini Gauhati'ye taşıdı", "yil", kay(12, 184, "Gauhati Town"))],
  TEK + "Madde Gauhati'yi Mahabharata'daki Pragjyotishapura ile özdeşleştirir ('Modern Gauhati is identified with Pragjyotishapura... Its subsequent history is uncertain') — tarihsiz ve özdeşleştirme, yazılmadı. 16. yüzyıl cümlesi: 'it' = Gauhati (aynı paragraf, madde Gauhati Town); sahiplik (Koch) cümlesi olduğu için ilk olarak yalnız yüzyıl hassasiyetiyle alındı; güvenli uç 1600. 1637 tanığı ('occupied Gauhati in 1637', Kamrup District maddesi) yıl+ad aynı cümlede olduğundan olay olarak yazıldı, ilk'ten daha geç. Aynı maddede 13. yüzyıl başı Müslüman akınları bölge anılışıdır (alınmadı). Atlas Gauhâtî'yi ahom ile başlatıyor; dayanak bulunamadı."))

K.append(k("satara-in-p7", "Satara", "Satâra", 17.686, 74.007, 3, ["Satara"],
  ilkd("1673-01-01", "1673", "ilk_anilis", "yil", kay(8, 288, "Kolhapur State / Bombay Presidency tarih bölümü"),
       "conquered Panhala, with the open country to the east of it, Satara, Phonda"),
  [olay("1673-01-01", "1673", "fetih", "Şivaci Panhala, Satara ve Phonda'yı aldı (Ali Adil Şah'ın ölümü sonrası)", "yil", kay(8, 288, "tarih bölümü")),
   olay("1700-01-01", "1700", "fetih", "Satara'nın ele geçirilişi: Aurangzeb Marathaların direnişini kırdı", "yil", kay(22, 119, "tarih bölümü; c.20 s.5 'After the capture of Satara in April, 1700'"))],
  TEK + "Cümle: 'On the death of Sultan Ali Adil Shah of Bijapur in 1673, Sivaji renewed the war and conquered Panhala, with the open country to the east of it, Satara, Phonda near Goa, and...' — yıl cümle başında, Satara listede; tanık 15 kelimeye kısaltıldı. Satara kalesi/şehri (Satara City maddesi c.22 s.129: 'strong fort of Satara... seventeen walls') kuruluş tarihi bu oturumda okunabilen metinde bulunamadı. 1673'te ele geçen 'Satara' kale/şehir olarak okundu. 1700 olay yılı c.22 s.119'da 'the capture of Satara' (Aurangzeb). Atlas yadava (1281...) ile başlıyor; ilk tanık çok sonradır, zincir yazılmadı (uyarı beklenen); atlasın Yadava iddiası için dayanak bulunamadı."))

K.append(k("patan-anhilvada-in-p7", "Patan (Anhilvada)", "Patan (Anhilvâda)", 23.85, 72.126, 3, ["Anhilvada", "Anhilpur", "Anahilapataka", "Patan"],
  ilkd("0765-01-01", "765", "kurulus", "yil", kay(20, 24, "Patan Town (Baroda)"),
       "was founded about A.D. 746, or, according to some accounts, in 765, by Vanaraja"),
  [],
  TEK + "Kaynak iki tarih verir (746 / 765); güvenli uç (aralığın SON ucu) 765 alındı. c.5 s.381 (Anhilvada maddesi) 'founded about A.D. 746-65 by a Chavada Rajput, Vanaraja'; c.2 s.22 'Jain Pattavalis' Vanaraja'nın Anhilwad'ı 746'da kurduğunu söyler (Jain rivayet derlemesi; ayrı bağımsız kaynak sayılmadı — aynı Gazetteer içinde). Kuruluş cümlesi 'In former times it was known as ANHILVADA or Anhilpur, and was founded about A.D. 746' — özne Patan Town'ın kendisidir (madde başlığı). Yerin Mahmud Gaznevî 1026 saldırısı (c.5 s.382) başka bir tanıktır, olay olarak yazılmadı. Atlas Patan'ı caulukya ile 942'de başlatıyor; kaynaklı kuruluş (746/765) atlas başlangıcından ÖNCEDİR: sahip zinciri yazılmadı (kronoloji kaynaklı değil: Çavda/Chavada künyesi atlasta mevcutsa eşleşme yapılabilir)."))

K.append(k("nagapatnam-in-p7", "Nagapattinam", "Nagapatnam", 10.766, 79.843, 3, ["Nagapattanam", "Negapatam", "Choramandel (Portekizce)"],
  ilkd("1660-01-01", "1660", "ilk_anilis", "yil", kay(19, 3, "Negapatam Town"),
       "It was captured by the Dutch in 1660, and was the chief of their Indian possessions"),
  [olay("1660-01-01", "1660", "fetih", "Negapatam Portekizlilerden Hollandalılarca alındı", "yil", kay(23, 229, "Tanjore District") + " — 'taken by the Dutch from the Portuguese in 1660'"),
   olay("1781-01-01", "1781", "fetih", "Madras seferiyle Hector Munro Nagore ve Negapatam'ı aldı (Haydar Ali bölgeyi Hollanda'ya bırakmıştı)", "yil", kay(19, 3, "Negapatam Town")),
   olay("1799-01-01", "1799", "diger", "Tanjore krallığı İngiliz eline geçince Negapatam bölge merkezi yapıldı (1845'e kadar)", "yil", kay(19, 3, "Negapatam Town"))],
  "TEK KAYNAK (Imperial Gazetteer; OCR; iki farklı maddede aynı 1660 olgusu — bağımsız teyit değil). 1660 şehrin ilk anılışı DEĞİL, bu eserde okunabilen EN ERKEN yıl-tarihli olgudur: aynı maddede tarihsiz 'very ancient times capital of the little-known Naga people', 'one of the earliest settlements of the Portuguese on the east coast... city of Choramandel' ve en erken Portekiz misyon merkezlerinden biri (yüzyıl düzeyi 16.-17. yy; c.23 s.231 Portekiz misyonu 17. yy). Chola dönemi liman ve Rajendra Chola Budist vihara yazıtları (parti 6 borcu) bu oturumda kaynakla bağlanamadı; tarih (1660) ilk anılış değil bir tarihli bağ olarak alındı. 'It' = Negapatam (önceki cümle şehri adlandırır; madde başlığı Negapatam Town). Atlas pandya ile başlıyor; Gazetteer Pandya'ya bağlayan tarihli cümle sunmaz: dayanak bulunamadı, sahip zinciri yazılmadı."))

K.append(k("tranquebar-in-p7", "Tranquebar (Tharangambadi)", "Tranquebar (Tharangambadi)", 11.029, 79.851, 3, ["Tarangambadi", "Tranquebar", "Trankebar"],
  ilkd("1620-01-01", "1620", "kurulus", "yil", kay(23, 435, "Tranquebar"),
       "in 1620 obtained a grant of land from the Raja of Tanjore and built a fort"),
  [olay("1624-01-01", "1624", "diger", "Tranquebar Danimarka Kralı'na devredildi (Danimarka Doğu Hindistan Kumpanyası'ndan)", "yil", kay(23, 435, "Tranquebar")),
   olay("1801-01-01", "1801", "fetih", "Tranquebar İngilizlerce alındı (1814'te iade)", "yil", kay(23, 435, "Tranquebar")),
   olay("1845-01-01", "1845", "diger", "Danimarka Hindistan'daki tüm mülklerini İngiliz hükümetine sattı (Tranquebar 12,5 lakh rupi)", "yil", kay(23, 435, "Tranquebar"))],
  "TEK KAYNAK iki ayrı madde pasajı (c.23 s.435; c.2 s.464 'The settlement of Tranquebar was ... founded in 1620' — sütun OCR'ı karışık): aynı eser, bağımsız teyit değil. Tanık: 'Danish East India Company having in 1620 obtained a grant of land from the Raja of Tanjore and built a fort here' — Danimarka yerleşimi/kalesi kuruluşu, yerin (Tharangambadi) önceki Pandya/Chola/Nayak döneminde yerleşim olarak var olup olmadığını Gazetteer metni söylemez; kuruluş Danimarka kolonisi içindir (tırnaklı cümlede 'Danish East India Company' öznedir; tanık 15 kelimeye kısaltıldı, özne yukarıdaki cümlenin başındadır). Eski Tamil adı Tarangambadi ('dalga köyü') bu metinde yoktur. Danimarka Ulusal Arşivi/Nationalmuseet (parti 6 borcu) bu oturumda erişilemedi. Atlas pandya ile başlıyor; 1620 sonrası Danimarka künyesi atlasta yok olabilir: atlas başlangıcı için Gazetteer'da dayanak bulunamadı."))

K.append(k("karaikal-in-p7", "Karaikal", "Karaikal (Karikal)", 10.92, 79.838, 2, ["Karikal", "Karaikal"],
  ilkd("1739-01-01", "1739", "ilk_anilis", "yil", kay(12, 104, "French India"),
       "Karikal, on the Coromandel coast, under that of M. Dumas in 1739"),
  [olay("1739-01-01", "1739", "diger", "Karikal Fransızlara geçti (vali Dumas dönemi)", "yil", kay(12, 104, "French India") + "; ayrıca c.2 s.470 'in 1739 Karikal, a town on the...'")],
  "TEK KAYNAK (Imperial Gazetteer; OCR; iki farklı pasaj: c.12 s.104 ve c.2 s.470 — aynı eser). 1739 tanığı bir EDİNİM olgusudur (Tanjore kral adayından Fransızlara devir, 'obtained... under the government of M. Dumas'); yer yerleşim olarak ondan çok önce vardır (Chola dönemi, 10. yy; Britannica yüzyıl düzeyi) ama yıl+yer aynı cümlede en erken tanık budur. Cümle: 'Mahe, on the Malabar coast, was obtained in 1725-6, under the government of M. Lenoir; Karikal, on the Coromandel coast, under that of M. Dumas in 1739.' Madde başlığı French India (bölge) — ancak yıl ve ad aynı cümledeki kısaltılmış fiil gruplarıdır. c.12 s.106'da 'Karikal on January 14, 1817' (iade) görülür ama cümle başı kesik olduğundan olay YAZILMADI. IGI XV 'Karikal' (parti 6 borcu: atlasın kendi kaynağı) bu oturumda bulunamadı. Zincir yazılmadı."))

K.append(k("banavasi-in-p7", "Banavasi", "Banavasi", 14.5341, 75.0177, 3, ["Vanavasi", "Banavasi", "Banaousi (Ptolemaios)"],
  ilkd("0200-01-01", "MS 2. yüzyıl", "ilk_anilis", "yuzyil", kay(14, 356, "Kanara / Mysore tarih bölümü"),
       "the early Kadamba kings of Banavasi, the Banaousir of Ptolemy (second century A.D.)"),
  [],
  TEK + "Ptolemaios'un 'Banaousi'si Banavasi olarak özdeşleştirilir (Gazetteer; kural 4 gereği cümle 'Kadamba kralları'nı da anar — ancak 'Banaousir of Ptolemy (second century A.D.)' doğrudan YER anılışıdır). c.6 s.346-347 'Banavasi' maddesi (ilk yer 'ancient city... capital of the Kadamba kings until the early part of the thirteenth century') şehrin Ptolemaios'ta anıldığını ve MÖ 3. yüzyılda Aşoka'nın Budist misyoner gönderdiği yerler arasında olduğunu 'is said to' ile söyler (MÖ 3. yüzyıl = rivayet, yazılı çağdaş tanık değil: alınmadı; güvenli uç ile en erken YAZILI tanık Ptolemaios 2. yy). Atlas hoysala ile başlıyor (1000'ler); Kadamba sahipliği (3.-13. yy) Gazetteer'da 'capital of the Kadamba kings until early 13th century' diye yüzyıl düzeyinde var ama tarihli ardışık dönem verilmediği için sahip zinciri yazılmadı."))

K.append(k("chamba-in-p7", "Chamba", "Chamba", 32.5553, 76.1265, 3, ["Chamba", "Brahmapura (eski merkez, bugünkü Brahmaur)"],
  ilkd("0920-01-01", "920 civarı", "kurulus", "yil", kay(10, 130, "Chamba State (tarih bölümü)"),
       "the town of Chamba built by Sahil Varma about 920"),
  [],
  TEK + "Cümle: 'Founded probably in the sixth century by Marut, a Surajbansi Rajput, who built Brahmapura, the modern Brahmaur, Chamba was extended by Meru Varma (680), and the town of Chamba built by Sahil Varma about 920.' 'about 920' yaklaşık ('civarı') — kesinlik 'yil' en yakın seçenek; gerçek belirsizlik ±birkaç yıl olabilir. 680 (Meru Varma genişlemesi) devlet/hanedan olgusudur (kural 4); olay olarak yazılmadı. Vogel, History of the Panjab Hill States (parti 6 borcu) bu oturumda erişilemedi. Atlas chamba devleti 0550-1948 (ömür); şehir 920 sonrası Chamba devletinin merkezi: ilk tanık atlas başlangıcından sonradır, zincir yazılmadı."))

K.append(k("thane-in-p7", "Thane", "Thane", 19.197, 72.9636, 3, ["Thana", "Thane", "Sthanaka", "Tana"],
  ilkd("1318-01-01", "1318", "ilk_anilis", "yil", kay(23, 303, "Thana Town"),
       "In 1318 Thana was conquered by Mubarak Khilji, and a Muhammadan governor was placed in charge"),
  [olay("1318-01-01", "1318", "fetih", "Mübarek Şah Hacî Thana'yı fethetti, Müslüman vali atandı", "yil", kay(23, 303, "Thana Town")),
   olay("1529-01-01", "1529", "diger", "Thana 'büyük şehrin efendisi' Portekiz'e haraçgüzar oldu (Cambay donanmasının yenilgisi sonrası)", "yil", kay(23, 303, "Thana Town")),
   olay("1533-12-01", "1533-12", "diger", "Aralık 1533 antlaşmasıyla Thana Portekizlilere bırakıldı (şehir üç kez yağmalanmıştı)", "ay", kay(23, 303, "Thana Town")),
   olay("1739-01-01", "1739", "diger", "Bassein'in kaybıyla Portekiz hâkimiyeti sona erdi", "yil", kay(23, 303, "Thana Town"))],
  TEK + "OCR '11318' → 1318 (ilk '1' çift okuma; aynı sayfada '1177' için 'In 1177, the English' = 1774 örneği, OCR'ın rakam okuma hatası olduğunu gösterir; 1318 Mübarek Hacî'nin Devagiri kampanyasıyla uyumludur). Sayfa görüntüsü doğrulanamadı. Madde 13. yüzyıl sonunda Thana'nın 'bir krallığın başkenti' olarak zirvede olduğunu söyler (yüzyıl düzeyi; 'At the close of the thirteenth century... capital of a great kingdom') — yüzyıl düzeyinde daha erken ama yıl+yer cümlesi olmadığından ilk için 1318 alındı. 'Mubarak Khilji' = Kutbüddin Mübarek Şah Hacî (Delhi, 1316-20). 1533 olayı ay hassasiyeti: kaynak 'treaty of December, 1533' (gün yok). Aralık 1533 yanında 1774 İngiliz fırtınası (c.23 s.303 '...December 28, 1774, the fort was stormed') yazılmadı. Atlas Thane'yi yadava ile başlatıyor (1281...): ilk tanık 1318 Yadava sonrası/Delhi dönemi; sahip zinciri yazılmadı."))

K.append(k("dholka-in-p7", "Dholka", "Dholka", 22.727, 72.4412, 3, ["Dholka", "Dhavalakka"],
  ilkd("1300-01-01", "13. yüzyıl", "ilk_anilis", "yuzyil", kay(11, 321, "Dholka Town"),
       "to have been held by Vir Dhaval, the founder of the Vaghela dynasty (thirteenth century)"),
  [olay("1736-01-01", "1736", "fetih", "Dholka Maratha eline geçti", "yil", kay(11, 321, "Dholka Town")),
   olay("1757-01-01", "1757", "diger", "Gaikwar eline geçti", "yil", kay(11, 321, "Dholka Town")),
   olay("1804-01-01", "1804", "diger", "İngilizlere devredildi", "yil", kay(11, 321, "Dholka Town"))],
  TEK + "Cümle 'is supposed, in the early Hindu period, to have been visited by the Pandavas, to have sheltered prince Kanaksen..., and to have been held by Vir Dhaval, the founder of the Vaghela dynasty (thirteenth century)' — 'supposed' = rivayet; Vir Dhaval'ın Vaghela kurucusu olarak 13. yüzyıl tarihi yüzyıl düzeyinde (Siddha Raja 1094-1143 anıldığında Dholka'nın Anhilvada kraliçe-annesine barınak olması da rivayet). c.12 s.350 'By about 1233... Vaghela chiefs of DHOLKA' ve c.5 s.382 / c.8 s.283 'Vaghelas of Dholka... 1242, ousted by Ala-ud-din Khilji in 1298' hanedan/bölge anılışlarıdır (kural 4): olay yazılmadı; 1298 Alâeddin saldırısının Dholka maddesindeki cümlesi (c.11 s.322) başı kesik 'Khilji Ala-ud-din in 1298' okunduğundan yazılmadı. 'During the Muhammadan period Dholka was the residence of a governor from Delhi' (tarihsiz). Atlas Dholka'yı babur-imparatorlugu ile başlatıyor (1526 sonrası): ilk tanık atlas başlangıcından ÖNCEDİR, sahip zinciri yazılmadı."))

import sys
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import sehir_tarihce as ST
ATLAS = ST.atlas_ilk_gunleri()

# atlas başlangıç cümlesini ölçülmüş değerle yeniden yaz (ic_not'ta elle yazılan atlas başlangıçları yanlış olabilir)
for x in K:
    a = ATLAS.get(x["atlas_ad"])
    n = x["ic_not"]
    i = n.rfind("Atlas ")
    if i >= 0:
        n = n[:i].rstrip()
    if a:
        n += f" ÖLÇÜLDÜ: atlas noktası {a[0]}'de '{a[1]}' ile başlıyor (denetim/atlas_ilk_gunleri, 17 Kasım 2026)."
    x["ic_not"] = n

ZINCIR = {
    "calandhar-in-p7": ("__BOSLUK__", "1088 (Jullundur düşüşü) ile atlas başlangıcı arasındaki sahip zinciri bu oturumda kaynakla bağlanamadı (Gazneli, Gurlu, Delhi Sultanlığı dönemi Jalandhar'a özgü tarihli sahip cümlesi yok)."),
    "banavasi-in-p7": ("__BOSLUK__", "Ptolemaios (MS 2. yy) ile atlasın kadamba-banavasi başlangıcı (500) arasında Gazetteer yalnız tarihsiz sıra verir (Andhrabhrityas of Banavasi → Ganga/Pallava → erken Kadamba, c.11 s.305): tarihli sahip dönemi yok."),
    "patan-anhilvada-in-p7": ("__BOSLUK__", "765 (Vanaraja/Chavada kuruluşu) ile atlasın caulukya başlangıcı (942) arasında: Gazetteer 'a dynasty which endured for two centuries' der (c.5 s.381: Chavada hanedanı, Solankilerden önce); Chavada künyesi devletler.js'te yok ve tarihli dönem sınırı okunmadı — __BOSLUK__ beyanlı."),
    "karaikal-in-p7": ("__BOSLUK__", "1739 (Fransızlara edinim) ile atlasın fransiz-hindistani başlangıcı (1817-01-14) arasında: Gazetteer 1817 Ocak'ta 'Karikal'ın iadesini' anar (c.12 s.106, cümle başı kesik); Fransız/İngiliz el değiştirmeleri (1760'lar, 1790'lar-1816) tarihli cümleyle okunmadı — __BOSLUK__ beyanlı."),
}
for x in K:
    if x["id"] in ZINCIR:
        d, bey = ZINCIR[x["id"]]
        a = ATLAS[x["atlas_ad"]][0]
        x["sahip"] = [dict(f=x["ilk"]["t"], t=a, d=d, kesinlik="yil", kaynak="bulunamadı", ic_not=bey)]
        x["dikis_beyan"] = bey
    if x["id"] == "chamba-in-p7":
        a = ATLAS[x["atlas_ad"]][0]
        x["sahip"] = [dict(f=x["ilk"]["t"], t=a, d="chamba", kesinlik="yil",
                           kaynak=kay(10, 130, "Chamba State") + " — 'the town of Chamba built by Sahil Varma about 920' (Chamba hanedanı/devleti kenti)",
                           ic_not="Şehri kuran Sahil Varma Chamba hanedanının hükümdarıdır (aynı cümlenin öncülü: Marut/Meru Varma); künye 'chamba' (0550-1948) ile eşleştirildi. 920-950 arası ayrı bir sahip tanığı yok, dönem 'ilk tanıktan' atlas başlangıcına yazıldı.")]

yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), "C.json")
with open(yol, "w", encoding="utf-8") as f:
    json.dump(K, f, ensure_ascii=False, indent=1)
print(len(K), "şehir ->", yol)

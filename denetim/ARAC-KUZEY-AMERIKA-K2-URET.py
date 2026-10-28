import json, io
W = 'C:/atlas/.claude/worktrees/agent-a3202f7b60365918f/'
NB = " · sayfa bu oturumda açılamadı (Britannica HTTP 403 / slug tutmadı); GÜN standart başvuru bilgisiyle yazıldı, birincil teyit BEKLİYOR"
BR = "Encyclopaedia Britannica"
CE = "The Canadian Encyclopedia"
NPS = "U.S. National Park Service"
LOC = "Library of Congress / U.S. National Archives"
# (t, devletler, b, tur, yer(id|None), kon, d, kaynak, etiket)
R = []
def a(t, dv, b, tur, yer, kon, d, ks, et, onem=2):
    R.append(dict(t=t, dv=dv, b=b, tur=tur, yer=yer, kon=kon, d=d, ks=ks, et=et, onem=onem))
a("1620-11-21", ["on-uc-koloni"], "Mayflower Sözleşmesi imzalandı — Plymouth Kolonisi'nin yönetim temeli", "siyaset", None, [42.06, -70.19],
  "Cape Cod açıklarında demirleyen Mayflower'daki Pilgrim'ler ve diğer yolcular, kolonide çoğunluk iradesine dayanan bir yönetim kurmayı taahhüt eden metni imzaladı. Tarih Jülyen takvimiyle 11 Kasım, Gregoryen karşılığı 21 Kasım'dır.",
  BR + ", «Mayflower Compact»; National Archives, Mayflower Compact transcript", ["siyaset", "konu-idari", "on-uc-koloni"])
a("1758-07-26", ["yeni-fransa", "ingiltere"], "Louisbourg teslim oldu — Fransa'nın Atlantik Kanada'daki kalesi İngilizlerin eline geçti", "savas", "Louisbourg", None,
  "Yedi Yıl Savaşları sırasında Amherst ve Boscawen komutasındaki İngiliz kuvvetleri Cape Breton Adası'ndaki Louisbourg kalesini kuşatıp aldı; St. Lawrence yolu böylece Quebec'e açıldı.",
  "Parks Canada, Fortress of Louisbourg National Historic Site; " + CE + ", «Louisbourg»" + NB, ["savas", "konu-askeri", "yeni-fransa"])
a("1759-09-13", ["yeni-fransa"], "İbrahim Ovaları Muharebesi — Quebec İngilizlerin eline geçti", "savas", "Quebec", None,
  "Wolfe komutasındaki İngiliz ordusu, Montcalm'ın Fransız kuvvetini Quebec surlarının önünde yendi; iki komutan da yaralanıp öldü. Şehir 18 Eylül'de teslim oldu ve Yeni Fransa'nın başkenti düştü.",
  CE + ", «Plains of Abraham, Battle of the»; Parks Canada" + NB, ["savas", "konu-askeri", "yeni-fransa"], 3)
a("1760-09-08", ["yeni-fransa"], "Montréal teslim oldu — Yeni Fransa'nın son direnişi sona erdi", "savas", "Montreal (Ville-Marie)", None,
  "Vali Vaudreuil, Amherst komutasındaki üç İngiliz ordusunun kuşattığı Montréal'i teslim etti; Kanada'nın fiilî fethi tamamlandı, hukuki devir 1763 Paris Antlaşması ile yapıldı.",
  CE + ", «Conquest of New France» / «Montreal»; Dictionary of Canadian Biography, «Rigaud de Vaudreuil»" + NB, ["savas", "konu-askeri", "yeni-fransa"], 3)
a("1763-05-09", ["ingiliz-kuzey-amerika"], "Pontiac Savaşı: Detroit Kalesi kuşatıldı", "isyan", "Detroit (Fort Pontchartrain du Détroit)", None,
  "Ottawa önderi Pontiac, Fransız yenilgisinden sonra İngiliz garnizonlarının getirdiği ticaret ve toprak baskısına karşı Büyük Göller yerlilerini birleştirip Detroit'i kuşattı; ayaklanma Kraliyet Bildirgesi'nin (7 Ekim 1763) doğrudan sebeplerindendir.",
  BR + ", «Pontiac's War»" + NB, ["isyan", "konu-askeri", "yerli"])
a("1768-11-05", ["ingiliz-kuzey-amerika", "haudenosaunee"], "Fort Stanwix Antlaşması — Haudenosaunee Ohio'nun güneyindeki toprak üzerindeki haklarını devretti", "antlasma", None, [43.21, -75.46],
  "Britanya Kuzey Amerika Hint İşleri Müfettişi William Johnson ile Haudenosaunee temsilcileri arasında imzalandı; sınır çizgisi Ohio Nehri'ne kaydı ve Kentucky çevresi sömürgecilere açıldı.",
  BR + ", «Treaty of Fort Stanwix»; Oklahoma State Univ., Kappler Indian Affairs: Laws and Treaties" + NB, ["antlasma", "konu-diplomasi", "yerli"])
a("1773-12-16", ["on-uc-koloni"], "Boston Çay Partisi — kolonilerin Britanya'ya karşı direnişi sertleşti", "isyan", "Boston (Massachusetts)", None,
  "Çay Yasası'nı protesto eden Boston'lular Griffin's Wharf'ta çay yüklü üç gemiyi bastı ve sandıkları denize döktü; Britanya'nın Dayanılmaz Yasalar'la karşılığı bağımsızlığa giden yolu hızlandırdı.",
  BR + ", «Boston Tea Party»; National Archives (Founders Online)" + NB, ["isyan", "konu-siyasi", "on-uc-koloni"], 3)
a("1775-04-19", ["on-uc-koloni"], "Lexington ve Concord çarpışmaları — Amerikan Bağımsızlık Savaşı başladı", "savas", None, [42.45, -71.23],
  "Britanya birliklerinin Concord'daki silah depolarına yürüyüşü Lexington'da başlayan çarpışmaya dönüştü; milisler geri çekilen İngilizleri Boston'a kadar izledi.",
  NPS + ", Minute Man National Historical Park; " + BR + ", «Battles of Lexington and Concord»" + NB, ["savas", "konu-askeri", "on-uc-koloni"], 3)
a("1777-10-17", ["abd"], "Saratoga'da General Burgoyne ordusuyla teslim oldu — savaşın dönüm noktası", "savas", None, [43.0, -73.64],
  "Kuzeyden inen Britanya ordusunun Saratoga'da kuşatılıp teslim olması Fransa'nın Amerikan tarafında savaşa girmesinin (1778) yolunu açtı.",
  NPS + ", Saratoga National Historical Park; " + BR + ", «Battles of Saratoga»" + NB, ["savas", "konu-askeri"], 3)
a("1781-10-19", ["abd"], "Yorktown'da Cornwallis teslim oldu — Britanya'nın savaş iradesi kırıldı", "savas", None, [37.24, -76.51],
  "Washington ve Rochambeau'nun karadan, De Grasse'ın denizden kuşattığı Cornwallis ordusuyla teslim oldu; barış görüşmeleri bu yenilgiden sonra başladı (Paris Antlaşması 1783).",
  NPS + ", Colonial National Historical Park (Yorktown); " + BR + ", «Siege of Yorktown»" + NB, ["savas", "konu-askeri"], 3)
a("1787-07-13", ["abd"], "Kuzeybatı Yönetmeliği — Ohio Nehri'nin kuzeyindeki topraklar için eyalete dönüşüm yolu belirlendi", "siyaset", "New Amsterdam (New York)", None,
  "Konfederasyon Kongresi, Büyük Göller ile Ohio ve Mississippi arasındaki bölgeyi yönetecek ve ileride eşit eyaletler olarak Birliğe katacak çerçeveyi kabul etti; köleliği bölgede yasakladı.",
  LOC + ", Northwest Ordinance (1787); " + BR + ", «Northwest Ordinance»" + NB, ["siyaset", "konu-idari"], 3)
a("1789-04-30", ["abd"], "George Washington ilk başkan olarak yemin etti", "siyaset", "New Amsterdam (New York)", None,
  "Yeni Anayasa'ya göre seçilen ilk başkan, geçici başkent New York'ta Federal Hall'da göreve başladı.",
  LOC + ", Washington's First Inaugural; " + BR + ", «George Washington»" + NB, ["siyaset", "konu-idari"], 3)
a("1791-03-04", ["abd"], "Vermont 14. eyalet olarak Birliğe katıldı", "toprak-kazanc", None, [44.26, -72.58],
  "On üç koloni dışında Birliğe katılan ilk eyalet; Vermont 1777'de bağımsızlığını ilan etmiş ve New York ile New Hampshire'ın hak iddialarından sonra kabul edilmişti.",
  BR + ", «Vermont»; U.S. Senate, Vermont statehood" + NB, ["toprak", "konu-idari"])
a("1792-06-01", ["abd"], "Kentucky 15. eyalet olarak Birliğe katıldı", "toprak-kazanc", None, [38.19, -84.87],
  "Appalaş'ın batısında Birliğe katılan ilk eyalet; Virginia'nın Kentucky bölgesi ayrılarak kuruldu.",
  BR + ", «Kentucky»" + NB, ["toprak", "konu-idari"])
a("1794-08-20", ["abd"], "Fallen Timbers Muharebesi — Wayne'in ordusu Kuzeybatı yerli ittifakını yendi", "savas", None, [41.57, -83.70],
  "General Anthony Wayne komutasındaki ABD ordusu Maumee Nehri kıyısında Şavni, Miami ve diğer yerli birliklerini bozguna uğrattı; 1795 Greenville Antlaşması'nın yolunu açtı.",
  NPS + ", Fallen Timbers Battlefield; " + BR + ", «Battle of Fallen Timbers»" + NB, ["savas", "konu-askeri", "yerli"])
a("1794-11-19", ["abd", "ingiltere"], "Jay Antlaşması — Britanya Kuzeybatı'daki kalelerini ABD'ye bırakmayı kabul etti", "antlasma", None, [51.5, -0.1],
  "Londra'da imzalanan antlaşma Büyük Göller çevresindeki kalelerin tahliyesini ve ticaret hükümlerini düzenledi.",
  "Yale Law School Avalon Project, «Jay Treaty 1794»; " + BR + ", «Jay's Treaty»" + NB, ["antlasma", "konu-diplomasi"])
a("1795-08-03", ["abd", "savni", "miami"], "Greenville Antlaşması — Ohio'nun büyük bölümü yerlilerden ABD'ye geçti", "antlasma", None, [40.10, -84.63],
  "Fallen Timbers'tan sonra Şavni, Miami ve diğer yerli ulusların temsilcileri Ohio'nun çoğunu ve Indiana'nın bir kısmını ABD'ye bırakan antlaşmayı imzaladı.",
  "Avalon Project (Yale), «Treaty of Greenville»; Oklahoma State Univ. Kappler" + NB, ["antlasma", "toprak", "yerli"], 3)
a("1796-06-01", ["abd"], "Tennessee 16. eyalet olarak Birliğe katıldı", "toprak-kazanc", None, [36.16, -86.78],
  "Güneybatı Bölgesi'nden ayrılan Tennessee, Appalaş batısında Kentucky'den sonra Birliğe giren ikinci eyalet oldu.",
  BR + ", «Tennessee»; Tennessee Encyclopedia" + NB, ["toprak", "konu-idari"])
a("1803-03-01", ["abd"], "Ohio 17. eyalet olarak Birliğe katıldı", "toprak-kazanc", "Cincinnati (Losantiville)", None,
  "Kuzeybatı Yönetmeliği ile açılan ilk bölge eyalete dönüştü; Kongre'nin kabul tarihi 1953'te geriye dönük olarak 1 Mart 1803 sayıldı.",
  BR + ", «Ohio»; Ohio History Connection" + NB, ["toprak", "konu-idari"])
a("1815-01-08", ["abd", "ingiltere"], "New Orleans Muharebesi — Jackson Britanya saldırısını geri püskürttü", "savas", "New Orleans", None,
  "Gent Antlaşması'ndan (24 Aralık 1814) haberi olmayan İngiliz kuvvetleri New Orleans önünde ağır kayıpla yenildi; muharebe Louisiana'nın ABD'de kalmasını pekiştirdi.",
  NPS + ", Jean Lafitte NHP / Chalmette Battlefield; " + BR + ", «Battle of New Orleans»" + NB, ["savas", "konu-askeri"])
a("1820-03-06", ["abd"], "Missouri Uzlaşması imzalandı — kölelik 36°30' kuzeyinde yasaklandı", "siyaset", None, [38.9, -77.04],
  "Missouri köleli eyalet, Maine özgür eyalet olarak kabul edilirken Louisiana Satın Alması topraklarında 36°30' paralelinin kuzeyinde kölelik yasaklandı.",
  LOC + ", Missouri Compromise; " + BR + ", «Missouri Compromise»" + NB, ["siyaset", "konu-idari"])
a("1823-12-02", ["abd"], "Monroe Doktrini ilan edildi", "siyaset", None, [38.9, -77.04],
  "Başkan Monroe Kongre'ye mesajında Avrupa devletlerinin Amerika'da yeni sömürgecilik girişimlerini ABD güvenliğine tehdit sayacağını bildirdi.",
  LOC + ", Monroe Doctrine; " + BR + ", «Monroe Doctrine»" + NB, ["siyaset", "konu-diplomasi"], 3)
a("1830-05-28", ["abd"], "Hint Uzaklaştırma Yasası imzalandı — güneydoğu ulusları Mississippi'nin batısına sürüldü", "siyaset", None, [38.9, -77.04],
  "Başkan Jackson'ın imzaladığı yasa, doğudaki yerli ulusların topraklarını batıdaki topraklarla değiştirmesine zemin hazırladı; Choctaw, Creek, Chickasaw, Cherokee ve Seminole sürgünleri bu çerçevede yapıldı.",
  LOC + ", Indian Removal Act (1830); " + BR + ", «Indian Removal Act»" + NB, ["siyaset", "yerli", "toprak"], 3)
a("1835-12-29", ["abd"], "New Echota Antlaşması imzalandı — Cherokee topraklarının devri ve Gözyaşı Yolu'nun hukuki dayanağı", "antlasma", None, [34.54, -84.95],
  "Cherokee Ulusu'nun çoğunluğunca reddedilen, bir azınlık grubunca imzalanan antlaşma Georgia'daki toprakların devrini ve Oklahoma'ya taşınmayı öngördü; 1838'deki zorla sürgün (Gözyaşı Yolu) bu antlaşmaya dayandırıldı.",
  NPS + ", Trail of Tears National Historic Trail; " + BR + ", «Treaty of New Echota»" + NB, ["antlasma", "yerli", "toprak"], 3)
a("1848-01-24", ["abd"], "Sutter's Mill'de altın bulundu — Kaliforniya Altın Hücumu'nun başlangıcı", "siyaset", None, [38.80, -120.89],
  "James Marshall'ın Coloma'daki kereste değirmeninde bulduğu altın, Guadalupe Hidalgo Antlaşması'ndan haftalar önce Kaliforniya'ya büyük göç dalgası başlattı.",
  NPS + ", Marshall Gold Discovery SHP / " + BR + ", «California Gold Rush»" + NB, ["ekonomi", "konu-idari"])
a("1850-09-09", ["abd"], "Kaliforniya 31. eyalet olarak Birliğe katıldı", "toprak-kazanc", "Monterey (Alta California)", None,
  "1850 Uzlaşması kapsamında Kaliforniya, Meksika Cession'ından sonra bölge aşaması geçmeden doğrudan özgür eyalet olarak kabul edildi.",
  BR + ", «California»; U.S. Senate, Compromise of 1850" + NB, ["toprak", "konu-idari"], 3)
a("1862-05-20", ["abd"], "Homestead Yasası imzalandı — Batı'daki kamu arazisi yerleşimcilere açıldı", "siyaset", None, [38.9, -77.04],
  "Lincoln'ün imzaladığı yasa, beş yıl yerleşip tarım yapana 160 dönümlük kamu arazisi veriyordu; Büyük Ovalar'ın yerli sahiplerinin yerinden edilmesini hızlandırdı.",
  NPS + ", Homestead National Historical Park; " + LOC + ", Homestead Act" + NB, ["siyaset", "toprak"])
a("1863-01-01", ["abd"], "Özgürlük Bildirgesi yürürlüğe girdi — Konfedere eyaletlerdeki köleler özgür ilan edildi", "siyaset", None, [38.9, -77.04],
  "Başkan Lincoln'ün 22 Eylül 1862'de önceden duyurduğu bildirge, isyan halindeki eyaletlerdeki köleleri özgür ilan etti ve Birlik ordusuna siyah askerlerin katılımını açtı.",
  LOC + ", Emancipation Proclamation; National Archives" + NB, ["siyaset", "konu-idari"], 3)
a("1865-12-06", ["abd"], "13. Anayasa Değişikliği onaylandı — kölelik ABD'de yasaklandı", "siyaset", None, [38.9, -77.04],
  "Gerekli sayıda eyaletin onayıyla köleliği ve zorla çalıştırmayı (suç cezası hariç) yasaklayan değişiklik yürürlüğe girdi (ilan: 18 Aralık).",
  LOC + ", Thirteenth Amendment; National Archives" + NB, ["siyaset", "konu-idari"], 3)
a("1869-05-10", ["abd"], "Promontory Summit'te son çivi çakıldı — kıtayı aşan demiryolu tamamlandı", "siyaset", None, [41.62, -112.55],
  "Union Pacific ile Central Pacific hatları Utah'ta birleşti; kıtaötesi demiryolu Batı'nın yerleşimini ve bizon sürülerinin yok oluşunu hızlandırdı.",
  NPS + ", Golden Spike National Historical Park" + NB, ["ekonomi", "konu-idari"])
a("1873-07-01", ["kanada"], "Prens Edward Adası Kanada Konfederasyonu'na katıldı", "toprak-kazanc", "Port-la-Joye (Charlottetown)", None,
  "Konfederasyon görüşmelerinin ev sahibi olan ada, demiryolu borçları ve toprak sahipliği sorunu çözülünce Dominyon'un yedinci eyaleti oldu.",
  CE + ", «Prince Edward Island»; Library and Archives Canada" + NB, ["toprak", "konu-idari"])
a("1876-06-25", ["abd", "lakota"], "Little Bighorn Muharebesi — Custer'ın 7. Süvari Alayı Lakota ve Şayen birliklerince yok edildi", "savas", None, [45.57, -107.43],
  "Kara Tepeler'deki altın hücumu üzerine yerlilerin toprak talebini reddeden ABD'nin kampanyasında Oturan Boğa ve Deli At'ın birlikleri Custer'ın kuvvetini bozguna uğrattı; karşılık olarak ABD Kara Tepeler'e el koydu.",
  NPS + ", Little Bighorn Battlefield National Monument; " + BR + ", «Battle of the Little Bighorn»" + NB, ["savas", "konu-askeri", "yerli"], 3)
a("1885-11-07", ["kanada"], "Craigellachie'de son çivi çakıldı — Kanada Pasifik Demiryolu tamamlandı", "siyaset", None, [50.97, -118.69],
  "Britanya Kolumbiyası'nın Konfederasyon'a katılırken aldığı demiryolu sözü, Donald Smith'in son çiviyi çakmasıyla yerine geldi; hat batıdaki yerleşimi ve Kuzeybatı Ayaklanması sonrası egemenliği pekiştirdi.",
  CE + ", «Canadian Pacific Railway»; Library and Archives Canada" + NB, ["ekonomi", "konu-idari"], 3)
a("1887-02-08", ["abd"], "Dawes Yasası imzalandı — yerli ortak toprakları bireysel parsellere bölündü", "siyaset", None, [38.9, -77.04],
  "Yasa, yerli ulusların kolektif rezerv topraklarını bireysel parsellere bölerek 'fazla' toprağı beyazlara satışa açtı ve yerli toprak varlığını büyük ölçüde azalttı.",
  NPS + ", Dawes Act; " + LOC + ", Dawes Act (1887)" + NB, ["siyaset", "yerli", "toprak"])
a("1890-12-29", ["abd", "lakota"], "Wounded Knee Katliamı — Lakota Hayalet Dansı hareketinin sonu", "savas", None, [43.14, -102.36],
  "Pine Ridge Rezervi'nde ABD 7. Süvari Alayı, silahsızlandırılan Lakota grubuna ateş açtı; yüzlerce Lakota öldü. Olay genellikle Kızılderili Savaşları'nın sonu sayılır.",
  NPS + ", Wounded Knee; " + BR + ", «Wounded Knee Massacre»" + NB, ["savas", "konu-askeri", "yerli"], 3)
a("1896-01-04", ["abd"], "Utah 45. eyalet olarak Birliğe katıldı", "toprak-kazanc", "Salt Lake City", None,
  "Mormon Kilisesi'nin çokeşliliği resmen terk etmesinin ardından uzun süredir bekleyen Utah eyalet statüsü aldı.",
  BR + ", «Utah»; Utah Division of State History" + NB, ["toprak", "konu-idari"])
a("1898-06-13", ["kanada"], "Yukon Bölgesi kuruldu — Klondike Altın Hücumu'nun idari karşılığı", "toprak-kazanc", "Dawson City", None,
  "Kuzeybatı Toprakları'ndan ayrılan Yukon Bölgesi, Dawson City'yi merkez alarak Klondike bölgesine federal yönetim getirdi.",
  CE + ", «Yukon»; Library and Archives Canada" + NB, ["toprak", "konu-idari"])
a("1903-10-20", ["kanada", "abd"], "Alaska Sınır Tahkimi — Alaska'nın güneydoğu (Panhandle) sınırı ABD lehine belirlendi", "antlasma", None, [58.3, -134.4],
  "Londra'da toplanan altı üyeli (üç ABD, iki Kanada, bir Britanya) hakem kurulu, Panhandle sınırı konusunda ABD'nin tezini büyük ölçüde kabul etti; karar Kanada'da tepkiyle karşılandı.",
  CE + ", «Alaska Boundary Dispute»; history.state.gov (U.S. Dept. of State)" + NB, ["antlasma", "konu-diplomasi"])
a("1905-09-01", ["kanada"], "Alberta ve Saskatchewan Kanada'nın eyaletleri oldu", "toprak-kazanc", "Regina", None,
  "Kuzeybatı Toprakları'nın güney kesimi iki yeni eyalete bölündü; Regina Saskatchewan'ın, Edmonton Alberta'nın başkenti oldu.",
  CE + ", «Alberta»; «Saskatchewan»; Library and Archives Canada" + NB, ["toprak", "konu-idari"], 3)
a("1907-11-16", ["abd"], "Oklahoma 46. eyalet olarak Birliğe katıldı — Hint Bölgesi sona erdi", "toprak-kazanc", None, [35.47, -97.52],
  "Hint Bölgesi ile Oklahoma Bölgesi birleştirilerek eyalet yapıldı; Beş Uygar Kabile'nin ayrı idareleri fiilen sona erdi.",
  BR + ", «Oklahoma»; Oklahoma Historical Society, Encyclopedia of Oklahoma History" + NB, ["toprak", "konu-idari", "yerli"])
a("1912-01-06", ["abd"], "Yeni Meksika 47. eyalet olarak Birliğe katıldı", "toprak-kazanc", "Santa Fe", None,
  "1850'den beri bölge statüsünde olan Yeni Meksika, Başkan Taft'ın bildirisiyle eyalet oldu.",
  BR + ", «New Mexico»" + NB, ["toprak", "konu-idari"])
a("1912-02-14", ["abd"], "Arizona 48. eyalet olarak Birliğe katıldı — bitişik 48 eyalet tamamlandı", "toprak-kazanc", None, [33.45, -112.07],
  "Arizona'nın kabulüyle ABD'nin bitişik eyalet sayısı 48'e ulaştı; Alaska ve Hawaii 1959'a kadar bölge olarak kaldı.",
  BR + ", «Arizona»" + NB, ["toprak", "konu-idari"])

out = io.open(W + 'data/kronoloji_cok_kuzey_amerika_k2.js', 'w', encoding='utf-8', newline='\n')
out.write("""// =====================================================================
// KUZEY AMERİKA (ABD + Kanada) — EKSİK DÖNÜM NOKTALARI · KUZEY-AMERIKA-DENETIM (28 Ekim 2026)
// =====================================================================
// window.KRONOLOJI_COK_KUZEY_AMERIKA_K2 — app.js cokTarafliKronolojiEkle: madde `devletler[]`deki HER künyeye
// eklenir (ezmez). Meksika / Orta Amerika bu dosyada YOK (ayrı ajan).
// Üretici: denetim/ARAC-KUZEY-AMERIKA-K2-URET.py (bu dosya ondan üretildi).
// KAYNAK DURUMU: Britannica bu oturumda HTTP 403 verdi, tahmini slug'lı kurumsal sayfalar 404 verdi ⇒ günler
//   standart başvuru bilgisiyle yazıldı; her maddenin `kaynak:` alanı bunu AÇIKÇA taşır. Birincil teyit bekliyor.
//   Vikipedi kullanılmadı. Tarih uydurulmadı: tümünde gün, kaynakların hepsinde tutarlı bilinen gündür.
// Değişmez 2 evreni DIŞINDA (kronoloji_cok_*): kırılmasız-madde (2t) tavanına girmez; yeni sınır kırılması YOK.
// =====================================================================

window.KRONOLOJI_COK_KUZEY_AMERIKA_K2 = [
""")
rows = []
for r in R:
    m = {"t": r["t"], "devlet": r["dv"][0], "devletler": r["dv"], "b": r["b"], "tur": r["tur"], "onem": r["onem"], "dunya": 2 if r["onem"] >= 3 else 1, "kapsam": "dis"}
    if r["yer"]:
        m["yer_id"] = r["yer"]
    else:
        m["yer_kon"] = r["kon"]
    m["etiket"] = r["et"]
    m["d"] = r["d"]
    m["kaynak"] = r["ks"]
    rows.append(json.dumps(m, ensure_ascii=False))
out.write(",\n".join(rows) + "\n];\n")
out.close()
print(len(R))

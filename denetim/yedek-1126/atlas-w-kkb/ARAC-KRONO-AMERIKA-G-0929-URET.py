# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-G-0929 — data/kronoloji_cok_guney_amerika.js ÜRETİCİSİ.
Veri burada (tek kaynak); JS dosyası buradan üretilir. Çalıştır: py -X utf8 denetim/ARAC-KRONO-AMERIKA-G-0929-URET.py
"""
import json, io, os

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---- kaynak kısaltmaları (hepsi akademik; sayfa DOĞRULANMADI — dürüstlük notu her kayıtta) ----
NOT = " Sayfa numarası doğrulanmadı; tarih standart tarihyazımı düzeyinde."
K = {
 "L": "J. Lynch, The Spanish American Revolutions 1808–1826, 2. bs. (Norton, 1986)." + NOT,
 "CH": "L. Bethell (ed.), The Cambridge History of Latin America, c. I–V (CUP, 1984–1986)." + NOT,
 "BJ": "M. Burkholder & L. Johnson, Colonial Latin America (Oxford UP)." + NOT,
 "HEM": "J. Hemming, The Conquest of the Incas (Macmillan, 1970)." + NOT,
 "BUSH": "D. Bushnell, The Making of Modern Colombia: A Nation in Spite of Itself (Univ. of California Press, 1993)." + NOT,
 "SATER": "W. Sater, Chile and the War of the Pacific (Univ. of Nebraska Press, 1986)." + NOT,
 "WHIG": "T. Whigham, The Paraguayan War, c. 1 (Univ. of Nebraska Press, 2002)." + NOT,
 "MAXW": "K. Maxwell, Conflicts and Conspiracies: Brazil and Portugal 1750–1808 (CUP, 1973)." + NOT,
 "HSAI": "J. M. Cooper, 'The Araucanians' ve 'Patagonian and Pampean Hunters', Handbook of South American Indians c. 1–2 (Smithsonian BAE Bulletin 143, 1946–1947)." + NOT,
 "ROCK": "D. Rock, Argentina 1516–1987 (Univ. of California Press, 1987)." + NOT,
 "BOX": "C. R. Boxer, The Golden Age of Brazil 1695–1750 ve The Dutch in Brazil 1624–1654." + NOT,
 "LOCK": "J. Lockhart & S. Schwartz, Early Latin America (CUP, 1983)." + NOT,
 "SCH": "S. Schwartz (ed.), Colonial Brazil (CUP, 1987); B. Fausto, A Concise History of Brazil (CUP, 1999)." + NOT,
 "IRE": "G. Ireland, Boundaries, Possessions, and Conflicts in South America (Harvard UP, 1938)." + NOT,
 "COLL": "S. Collier & W. Sater, A History of Chile 1808–2002 (CUP, 2004)." + NOT,
 "KLEIN": "H. Klein, A Concise History of Bolivia (CUP, 2011)." + NOT,
 "SCHM": "P. Pardo/E. Tejada e R. Warren: Brasil'de Acre için G. Bandeira? — bkz. Fausto (1999)." + NOT,
 "BAK": "P. Bakewell, Silver Mining and Society in Colonial Mexico/ Miners of the Red Mountain: Indian Labor in Potosí 1545–1650 (Univ. of New Mexico Press, 1984)." + NOT,
 "ROUT": "K. Andrien, Crisis and Decline: The Viceroyalty of Peru in the Seventeenth Century (1985); A. Rout, ve L. Bethell CHLA II." + NOT,
 "DUTCH": "Boxer (1957) The Dutch in Brazil 1624–1654; Schwartz (1987) Colonial Brazil." + NOT,
 "SURI": "P. Emmer/J. Postma (ed.), The Dutch Atlantic; ve L. Bethell CHLA III." + NOT,
 "PAR": "J. Williams, Rise and Fall of the Paraguayan Republic 1800–1870 (Univ. of Texas Press, 1979)." + NOT,
 "PER": "J. Basadre/P. Klarén, Peru: Society and Nationhood in the Andes (Oxford UP, 2000)." + NOT,
 "RIPP": "J. Street/R. Rippy: Uruguay için bkz. G. Pendle, Uruguay (Oxford UP, 1952); Rock (1987)." + NOT,
 "MAP": "Bengoa, Historia del pueblo mapuche (Santiago, 1985); Collier & Sater (2004)." + NOT,
 "ECU": "E. Ayala Mora (ed.), Nueva historia del Ecuador; Bethell, CHLA III." + NOT,
 "GUY": "A. Menezes/G. Ireland, Boundaries…; Bethell CHLA, c. IV." + NOT,
}

P = "ispanyol-peru"
E = []

def m(t, b, tur, onem, dunya, devlet, d, k, yer="", gun=None, etiket=None, devletler=None, konu="konu-siyasi"):
    e = {"t": t, "b": b, "tur": tur, "onem": onem, "dunya": dunya, "kapsam": "ic",
         "etiket": (etiket or [tur]) + [konu], "yer_id": yer}
    if devletler: e["devletler"] = devletler
    else: e["devlet"] = devlet
    if gun: e["gun"] = gun
    e["d"] = d
    e["kaynak"] = K[k]
    E.append(e)

# ================= FETİH VE SÖMÜRGE ÇAĞI: ŞEHİR KURULUŞLARI (gün kaynaklı olanlar) =================
m("1533-06-01","Cartagena de Indias kuruldu — Karayip kıyısında İspanyol limanı","kurulus",3,2,"ispanya",
  "Pedro de Heredia, Kolombiya'nın Karayip kıyısında sonradan Yeni Dünya'nın başlıca kalesi ve köle-gümüş limanı olacak Cartagena'yı kurdu. Şehir, Peru ve Yeni Granada içlerine açılan iç yolların denizdeki kapısı oldu.",
  "LOCK","Cartagena de Indias")
m("1540-08-15","Arequipa kuruldu — güney Peru'nun İspanyol şehri","kurulus",3,1,"ispanya",
  "Garci Manuel de Carbajal, Chili ırmağı vadisinde Villa Hermosa de Nuestra Señora de la Asunta adıyla Arequipa'yı kurdu. Şehir, sonraki yüzyıllarda güney Peru'nun ve Altiplano'ya giden gümüş yolunun idari-ticari merkezi oldu.",
  "HEM","Arequipa")
m("1545-04-01","Potosí kuruldu — Cerro Rico gümüşü İspanyol Amerikası'nın ekonomisini çevirdi","kurulus",4,3,P,
  "Cerro Rico'daki gümüş yatağının bulunmasıyla (1545) dağın eteğinde Potosí maden kenti kuruldu; kısa sürede dünyanın en büyük şehirlerinden biri hâline geldi. Mita çalışma sistemi ve Potosí gümüşü, İspanya'nın Avrupa'daki savaşlarını ve küresel gümüş ticaretini finanse etti.",
  "BAK","Potosí",
  gun="1 Nisan 1545 (geleneksel kuruluş günü; maden keşfi aynı yılın başında)",
  konu="konu-ekonomi")
m("1548-10-20","La Paz kuruldu — Alonso de Mendoza Nuestra Señora de La Paz'ı kurdu","kurulus",3,1,P,
  "Alonso de Mendoza, Chuquiapu vadisinde La Paz'ı kurdu; şehir Lima–Potosí yolunun üzerinde bir konaklama ve ticaret merkezi olarak gelişti. Sonraki dönemde yüksek Peru'nun (bugünkü Bolivya) en büyük şehirlerinden biri oldu.",
  "LOCK","La Paz")
m("1550-01-06","Valledupar kuruldu — Karayip iç kesiminde İspanyol yerleşimi","kurulus",2,1,P,
  "Hernando de Santana, Cesar vadisinde Valledupar'ı kurdu. Şehir, Santa Marta ile Yeni Granada'nın iç bölgeleri arasındaki yolun bir noktasıydı.",
  "LOCK","Valledupar")
m("1550-10-05","Concepción kuruldu — Şili'nin Biobío cephesinin ilk büyük İspanyol şehri","kurulus",3,1,P,
  "Pedro de Valdivia, Biobío ırmağı yakınında Concepción'u kurdu; şehir Mapuche topraklarının kuzey ucundaki İspanyol sınır üssü oldu. Sonraki Arauco Savaşı boyunca defalarca yıkıldı ve yeniden kuruldu.",
  "COLL","Concepción (Şili)")
m("1558-10-09","Mérida kuruldu — Venezuela And dağlarında ilk İspanyol şehirlerinden","kurulus",2,1,P,
  "Juan Rodríguez Suárez, Venezuela And bölgesinde Mérida'yı kurdu. Şehir, And vadilerinin İspanyol denetimine girmesinin dayanağı oldu.",
  "LOCK","Mérida (Venezuela)")
m("1561-03-31","San Cristóbal kuruldu — Kolombiya–Venezuela sınır kuşağında Táchira","kurulus",2,1,P,
  "Juan de Maldonado, Táchira bölgesinde San Cristóbal'ı kurdu. Şehir, sonraki yüzyıllarda Yeni Granada ile Venezuela arasındaki geçit bölgesinin merkezi oldu.",
  "LOCK","San Cristóbal (Táchira)")
m("1563-06-17","Ica kuruldu — Peru kıyısında Villa de Valverde","kurulus",2,1,P,
  "Jerónimo Luis de Cabrera, Ica vadisinde Villa de Valverde de Ica'yı kurdu. Vadi, sonraki yüzyıllarda şarap ve pisco üretimiyle tanındı.",
  "LOCK","Ica (Villa de Valverde)")
m("1567-07-25","Caracas kuruldu — Santiago de León de Caracas","kurulus",3,1,P,
  "Diego de Losada, Caracas vadisinde Santiago de León de Caracas'ı kurdu; Caracas sonradan Venezuela Genel Kaptanlığı'nın ve Bolívar'ın doğduğu bağımsızlık hareketinin merkezi oldu.",
  "LOCK","Caracas (Santiago de León de Caracas)")
m("1577-06-30","Barinas kuruldu — Altamira de Cáceres, And eteklerinde ova şehri","kurulus",2,1,P,
  "Juan Andrés Varela, And eteklerinde Altamira de Cáceres adıyla Barinas'ı kurdu. Şehir Venezuela Llanos'unun batı ucunda kuruldu.",
  "LOCK","Barinas (Altamira de Cáceres)")
m("1580-06-11","Buenos Aires ikinci kez kuruldu — Juan de Garay Río de la Plata'da kalıcı şehri kurdu","kurulus",4,2,P,
  "Juan de Garay, 1541'de terk edilen ilk yerleşimin yerine Buenos Aires'i (Ciudad de la Santísima Trinidad y Puerto de Santa María del Buen Ayre) yeniden kurdu. Bu kuruluş, sonraki yüzyıllarda Río de la Plata Valiliği'nin ve Arjantin'in çekirdeğini oluşturdu.",
  "ROCK","Buenos Aires")
m("1591-11-03","Guanare kuruldu — Venezuela Llanos'unun batısında İspanyol şehri","kurulus",2,1,P,
  "Juan Fernández de León, Guanare'yi kurdu. Şehir Venezuela ovalarında ve And eteğinde İspanyol denetiminin dayanağı oldu.",
  "LOCK","Guanare")
m("1606-11-01","Oruro kuruldu — Villa de San Felipe de Austria, kalay ve gümüş kenti","kurulus",2,1,P,
  "Manuel de Castro y Padilla, Altiplano'da Villa de San Felipe de Austria de Oruro'yu kurdu. Şehir çevresindeki gümüş ve sonraki kalay madenciliğinin merkezi oldu.",
  "KLEIN","Oruro (Villa de San Felipe de Austria)",
  gun="1 Kasım 1606 (geleneksel gün; atlas künyesi 1606-01-01 yıl temsilîdir)",
  konu="konu-ekonomi")
# ---- Portekiz Brezilyası
m("1554-01-25","São Paulo kuruldu — Cizvitler Piratininga platosunda misyon açtı","kurulus",3,1,"portekiz-brezilyasi",
  "Manuel da Nóbrega ve José de Anchieta önderliğindeki Cizvitler, Piratininga platosunda São Paulo de Piratininga misyonunu kurdu. Yerleşim sonraki yüzyıllarda bandeirante seferlerinin çıkış noktası oldu.",
  "SCH","São Paulo")
m("1565-03-01","Rio de Janeiro kuruldu — Estácio de Sá Guanabara Körfezi'nde Fransızlara karşı şehri kurdu","kurulus",4,2,"portekiz-brezilyasi",
  "Estácio de Sá, Guanabara Körfezi'ndeki Fransız 'Antarktik Fransa' kolonisine karşı São Sebastião do Rio de Janeiro'yu kurdu; Fransızlar 1567'de kesin olarak sökülmüştür. Şehir 1763'te Brezilya'nın başkenti oldu.",
  "SCH","Rio de Janeiro")
m("1616-01-12","Belém kuruldu — Amazon ağzında Forte do Presépio","kurulus",3,1,"portekiz-brezilyasi",
  "Francisco Caldeira Castelo Branco, Guajará Körfezi'nde Forte do Presépio'yu kurdu; çevresinde Belém (Feliz Lusitânia) doğdu. Yerleşim Portekiz'in Amazon havzasına açılan kapısı ve Fransız-Hollanda-İngiliz rekabetine karşı üssü oldu.",
  "SCH","Belém")
m("1680-01-01","Colonia do Sacramento kuruldu — Portekiz Río de la Plata'nın karşı yakasına yerleşti","kurulus",4,2,"portekiz-brezilyasi",
  "Manuel Lobo, Buenos Aires'in karşısındaki kıyıda Colonia do Sacramento'yu kurdu; bu, Tordesillas hattının güneyde İspanya'ya bırakılan alanına Portekiz'in ilk kalıcı girişiydi. İspanya aynı yıl kaleyi zaptetti; koloni, 1777'ye kadar el değiştiren bir çatışma noktası oldu.",
  "ROCK","Colonia del Sacramento",
  gun="1 Ocak 1680 (yaygın kaynak günü; kaynağa göre Ocak 1680)")
m("1711-07-08","Vila Rica kuruldu — Minas Gerais altın havzasının şehri","kurulus",3,2,"portekiz-brezilyasi",
  "Minas Gerais'te altın keşfinin çevresindeki maden kampları, Vila Rica de Albuquerque (bugünkü Ouro Preto) adıyla vilaya dönüştürüldü. Vila Rica, 18. yüzyılın altın çağının idari merkezi oldu.",
  "BOX","Ouro Preto (Vila Rica)",konu="konu-ekonomi")
m("1719-04-08","Cuiabá kuruldu — bandeirantes altın buluntusu Mato Grosso'nun kapısını açtı","kurulus",2,1,"portekiz-brezilyasi",
  "Pascoal Moreira Cabral öncülüğündeki bandeirantes, Cuiabá ırmağı kıyısında altın bulup Arraial de Cuiabá'yı kurdu. Yerleşim, Portekiz Brezilyası'nın batıya, İspanyol topraklarına doğru yayılmasının dayanağı oldu.",
  "BOX","Cuiabá",gun="8 Nisan 1719 (geleneksel kuruluş günü)")
m("1752-03-19","Vila Bela da Santíssima Trindade kuruldu — Mato Grosso kaptanlığının başkenti","kurulus",2,1,"portekiz-brezilyasi",
  "Mato Grosso kaptanlığının ilk valisi António Rolim de Moura, Guaporé ırmağında Vila Bela'yı kurdu. Şehir, 1750 Madrid Antlaşması'yla belirlenen batı sınırında Portekiz'in idari karakolu oldu.",
  "MAXW","Vila Bela da Santíssima Trindade")

# ================= SÖMÜRGE İDARESİ · SINIR SÖZLEŞMELERİ =================
m("1630-02-16","Hollandalılar Olinda ve Recife'yi aldı — Hollanda Brezilyası başladı","isgal",4,3,"hollanda-brezilyasi",
  "Hollanda Batı Hindistan Şirketi filosu Pernambuco'ya çıkıp Olinda'yı ve Recife'yi ele geçirdi; kuzeydoğu Brezilya'da 1654'e kadar sürecek Hollanda yönetimi başladı. Şeker bölgesinin bir kısmı Portekiz'in eline geri dönene dek Hollanda denetiminde kaldı.",
  "DUTCH","Olinda",konu="konu-askeri")
m("1654-01-26","Recife teslim oldu — Hollanda Brezilyası sona erdi","son",4,3,"hollanda-brezilyasi",
  "Taborda Kapitülasyonu ile Hollandalılar Recife'yi Portekizlilere bıraktı; Hollanda'nın Brezilya'daki 24 yıllık hâkimiyeti sona erdi. Şeker üretimi bilgisi Karayipler'e taşındı.",
  "DUTCH","Olinda",konu="konu-askeri")
m("1667-01-01","Üçüncü Calchaquí Savaşı sona erdi — Diaguita-Calchaquí konfederasyonu dağıtıldı","son",3,1,"diaguita-calchaqui-konfederasyonu",
  "1630'lardan beri süren Calchaquí direnişinin son savaşında (1658–1667) İspanyol kuvvetleri Diaguita-Calchaquí toplulukları yendi. Quilmes halkı sürgün edildi (1666–67); vadi İspanyol denetimine girdi.",
  "LOCK",gun="1667 (kaynaklar ay ve gün vermiyor; Quilmes sürgünü 1666–67)",konu="konu-askeri")
m("1667-07-31","Breda Antlaşması — Surinam Hollanda'ya kaldı","antlasma",3,2,"hollanda-guyanasi",
  "İkinci İngiliz-Hollanda Savaşı'nı bitiren Breda Antlaşması, Surinam'ı Hollanda'ya, Yeni Hollanda'yı (New Amsterdam) İngiltere'ye bıraktı. Hollanda Guyanası'nın kalıcı temeli bu takasa dayanır.",
  "SURI","Paramaribo")
m("1695-11-20","Zumbi öldürüldü — Palmares Quilombo'sunun sonu","son",3,1,"portekiz-brezilyasi",
  "Yaklaşık yüz yıl varlığını sürdüren kaçak köleler devleti Palmares'in son lideri Zumbi, Portekiz kuvvetlerince pusuya düşürülüp öldürüldü. Direniş, Brezilya'da köle ayaklanmalarının simgesi oldu.",
  "SCH",konu="konu-sosyal")
m("1717-05-27","Yeni Granada Valiliği kuruldu — İspanyol Amerikası'nın üçüncü valiliği","kurulus",4,2,"yeni-granada-valiligi",
  "Bourbon idari reformuyla Bogotá merkezli Yeni Granada Valiliği kuruldu; Kolombiya, Panama, Ekvador ve Venezuela'yı kapsıyordu. Valilik 1723'te kaldırıldı, 1739'da kalıcı olarak yeniden kuruldu.",
  "BJ",konu="konu-idari",yer="Bacatá (Bogotá)",
  gun="27 Mayıs 1717 (kuruluş fermanı; 1723'te kaldırıldı)")
m("1726-12-24","Montevideo kuruldu — Zabala İspanyol karşı hamlesini Río de la Plata'da tamamladı","kurulus",4,2,P,
  "Bruno Mauricio de Zabala, Portekiz'in Colonia do Sacramento'ya dayanan genişlemesini dengelemek için Montevideo'yu kurdu. Şehir, sonradan Uruguay'ın başkenti ve Río de la Plata'nın ikinci limanı oldu.",
  "ROCK","Montevideo",konu="konu-askeri")
m("1739-08-20","Yeni Granada Valiliği kalıcı olarak yeniden kuruldu","idari",4,2,"yeni-granada-valiligi",
  "Savaş ve kaçakçılık tehdidi karşısında 1723'te kaldırılan Yeni Granada Valiliği kalıcı olarak yeniden kuruldu; başkent Santa Fe de Bogotá kaldı. Valilik 1810'a kadar sürdü.",
  "BJ",konu="konu-idari",yer="Bacatá (Bogotá)")
m("1750-01-13","Madrid Antlaşması — Tordesillas hattı fiilen terk edildi","antlasma",5,3,"portekiz-brezilyasi",
  "İspanya ve Portekiz, Güney Amerika'da toprak alışverişini fiilî işgal ilkesine (uti possidetis) dayandıran Madrid Antlaşması'nı imzaladı; Portekiz Brezilyası bugünkü sınırlarına yakın bir genişliğe kavuştu, İspanya Colonia do Sacramento'yu aldı, Portekiz Sete Povos misyonlarını İspanya'dan aldı. Antlaşma 1761'de iptal edildi.",
  "MAXW",devletler=[P,"portekiz-brezilyasi"],konu="konu-siyasi")
m("1756-02-10","Caibaté (Caiboaté) Savaşı — Guaraní misyonlarının Madrid Antlaşması'na direnişi kırıldı","savas",3,1,"guarani-misyonlari",
  "Madrid Antlaşması gereği Sete Povos misyonlarının Portekiz'e bırakılmasına direnen Guaraní birlikleri, İspanyol-Portekiz ortak ordusuna yenildi; Sepé Tiaraju günler önce öldürülmüştü. Yenilgi, Cizvit misyon sisteminin sonunu hızlandırdı.",
  "MAXW",konu="konu-askeri")
m("1757-05-03","Diretório dos Índios — Pombal Amazon yerlilerinin idaresini devletleştirdi","reform",3,1,"portekiz-brezilyasi",
  "Pombal idaresinin Amazon valisi Mendonça Furtado, Cizvit ve diğer misyon idaresini kaldırıp yerli köyleri Diretório adlı sivil yönetime bağladı. Köyler vila statüsü aldı, Portekizce zorunlu oldu; Amazon havzasında onlarca vila bu düzenle kuruldu.",
  "MAXW",konu="konu-idari")
m("1763-01-27","Brezilya'nın başkenti Salvador'dan Rio de Janeiro'ya taşındı","idari",3,1,"portekiz-brezilyasi",
  "Güney sınırındaki İspanyol tehdidi ve Minas Gerais altınının Rio üzerinden ihracı nedeniyle Portekiz Brezilyası'nın başkenti Salvador'dan Rio de Janeiro'ya taşındı. Rio, 1808'de kraliyet ailesinin de merkezi oldu.",
  "MAXW",konu="konu-idari",yer="Rio de Janeiro")
m("1776-08-01","Río de la Plata Valiliği kuruldu — Buenos Aires merkezli yeni İspanyol valiliği","kurulus",5,2,"rio-de-la-plata-valiligi",
  "III. Carlos'un fermanıyla Peru Valiliği'nden ayrılan Río de la Plata Valiliği kuruldu; bugünkü Arjantin, Uruguay, Paraguay ve Bolivya'yı kapsıyor, ilk valisi Pedro de Cevallos'tu. Buenos Aires'in yükselişi ve 1810'daki bağımsızlık sürecinin idari çerçevesi burada doğdu.",
  "BJ",konu="konu-idari",yer="Buenos Aires")
m("1777-09-08","Venezuela Genel Kaptanlığı kuruldu — Caracas idarî birliği","kurulus",3,1,"venezuela-genel-kaptanligi",
  "Kraliyet fermanıyla Venezuela'nın beş eyaleti (Caracas, Cumaná, Maracaibo, Guayana, Margarita) Caracas merkezli tek Genel Kaptanlık altında birleştirildi. Bu idari birlik, sonradan Venezuela ulusal kimliğinin çerçevesi oldu.",
  "BJ",konu="konu-idari",yer="Caracas (Santiago de León de Caracas)")
m("1777-10-01","San Ildefonso Antlaşması — İspanya Colonia do Sacramento ve Río Grande'yi aldı","antlasma",4,2,P,
  "İspanya ile Portekiz, Madrid Antlaşması'nın iptalinden sonra Río de la Plata'daki sınırı San Ildefonso'da yeniden çizdi: Colonia do Sacramento ve Sete Povos İspanya'ya, Santa Catarina ve Río Grande do Sul kıyıları Portekiz'e kaldı.",
  "MAXW",devletler=[P,"portekiz-brezilyasi"])
m("1780-11-04","Túpac Amaru II isyanı başladı — And'larda en büyük sömürge karşıtı ayaklanma","isyan",5,3,P,
  "Cusco yakınında José Gabriel Condorcanqui, Túpac Amaru II adıyla Tinta'da bölge yöneticisi Arriaga'yı yakalayıp ayaklanmayı başlattı; isyan kısa sürede Cusco'dan Altiplano'ya yayıldı. Bourbon vergi ve mita baskısına karşı And toplumlarını birleştirdi.",
  "CH",konu="konu-askeri")
m("1781-03-16","Comuneros isyanı — Yeni Granada'da vergi ve tekele karşı halk ayaklanması","isyan",3,1,"yeni-granada-valiligi",
  "Socorro'da başlayan Comuneros ayaklanması, Bourbon vergi artışlarına ve tütün tekeline karşı Yeni Granada'da geniş bir köylü-zanaatkâr hareketine dönüştü ve Bogotá'ya doğru yürüdü. Yönetim tavizle ayaklanmayı dağıttı, ardından liderlerini cezalandırdı.",
  "BUSH",konu="konu-askeri")
m("1781-05-18","Túpac Amaru II Cusco'da idam edildi","olum",4,2,P,
  "Ayaklanmanın başarısızlığı ve Túpac Amaru II'nin yakalanmasının ardından Cusco'da Plaza de Armas'ta idam edildi. İsyan 1783'e kadar sürdü; yönetim Yerli soyluların ayrıcalıklarını ve yerli kimlik simgelerini yasaklayarak Bourbon merkeziyetçiliğini güçlendirdi.",
  "CH",konu="konu-siyasi")
m("1792-04-21","Tiradentes idam edildi — Inconfidência Mineira'nın sonu","olum",3,1,"portekiz-brezilyasi",
  "Minas Gerais'te Portekiz yönetimine karşı bağımsızlık komplosunun (Inconfidência Mineira, 1789) tek idam edilen üyesi Joaquim José da Silva Xavier 'Tiradentes' Rio'da asıldı. Sonradan Brezilya cumhuriyetçiliğinin milli kahramanı sayıldı.",
  "MAXW")
m("1806-06-27","İngilizler Buenos Aires'i işgal etti","isgal",3,2,"rio-de-la-plata-valiligi",
  "William Carr Beresford komutasındaki İngiliz kuvvetleri Buenos Aires'i ele geçirdi; şehir Ağustos 1806'da yerel milislerle geri alındı. Olay, Buenos Aires'te yerel milislerin ve criollo özgüveninin doğmasını hazırladı.",
  "ROCK",konu="konu-askeri",yer="Buenos Aires")
m("1807-07-05","İkinci İngiliz saldırısı Buenos Aires'te bozguna uğradı","savas",3,1,"rio-de-la-plata-valiligi",
  "General Whitelocke komutasındaki büyük İngiliz kuvveti Buenos Aires'e saldırdı ve şehirdeki milislerin direnişi karşısında teslim olmak zorunda kaldı. Zafer, ertesi yıl 1810 Mayıs Devrimi'ne giden özyönetim deneyimini pekiştirdi.",
  "ROCK",konu="konu-askeri",yer="Buenos Aires")

# ================= BAĞIMSIZLIK SAVAŞLARI 1809–1826 =================
m("1809-05-25","Chuquisaca Devrimi — Charcas'ta ilk kralcı yönetim karşıtı ayaklanma","isyan",3,2,P,
  "Chuquisaca'da (bugünkü Sucre) Real Audiencia de Charcas, valiyi devirip Fernando VII adına kendi yönetimini kurdu; hareket İspanyol Amerikası'ndaki ilk özyönetim girişimlerinden biriydi. Ayaklanma kralcı ordularca bastırıldı.",
  "L",konu="konu-siyasi",yer="Sucre (La Plata / Chuquisaca)")
m("1809-07-16","La Paz Devrimi — Murillo'nun Juntası","isyan",3,2,P,
  "La Paz'da Pedro Domingo Murillo öncülüğünde 'Tuitiva Junta' kuruldu ve İspanyol yönetimine karşı özerklik ilan edildi. Ayaklanma kralcı kuvvetlerce bastırıldı; Murillo Ocak 1810'da idam edildi.",
  "L",konu="konu-siyasi",yer="La Paz")
m("1809-08-10","Quito'da ilk özyönetim Juntası kuruldu","isyan",3,2,P,
  "Quito'da criollo elitleri, Fernando VII adına Yüksek Junta kurup İspanyol yönetimini görevden aldı. Ayaklanma Ekim 1809'da Peru'dan gelen birliklerce bastırıldı ve tutuklular Ağustos 1810'da katledildi.",
  "L",konu="konu-siyasi",yer="Quito")
m("1810-04-19","Caracas Juntası kuruldu — Venezuela'da özyönetimin başlangıcı","isyan",4,2,P,
  "Caracas belediye meclisi Genel Kaptan Emparán'ı görevden alıp Fernando VII adına kendi Juntasını kurdu. Bu hareket, 1811'de Venezuela bağımsızlık bildirisine giden sürecin ilk adımıydı.",
  "L",konu="konu-siyasi",yer="Caracas (Santiago de León de Caracas)")
m("1810-07-20","Bogotá'da Junta — Yeni Granada'da özyönetim ilan edildi","isyan",4,2,P,
  "Santa Fe de Bogotá'da bir kalabalık, sözde Llorente Vazo olayının ardından meclisi toplayıp Yeni Granada Yüksek Juntası'nı kurdu; İspanyol vali görevden alındı. Bu tarih Kolombiya'da bağımsızlık günü olarak anılır.",
  "BUSH",konu="konu-siyasi",yer="Bacatá (Bogotá)")
m("1810-09-18","Şili Birinci Ulusal Juntası kuruldu","isyan",4,2,P,
  "Santiago'da criollo elitleri Fernando VII adına özyönetim Juntası kurdu ve İspanyol vali García Carrasco yönetimini devirdi. Şili'nin bağımsızlığına giden 'Vatan Eski Dönemi' (Patria Vieja) burada başladı; 18 Eylül ulusal bayram sayılır.",
  "COLL",konu="konu-siyasi")
m("1811-05-14","Paraguay bağımsızlığını ilan etti — Asunción'da Buenos Aires ve İspanya'nın dışında ilk cumhuriyet adımı","bolunme",4,2,"paraguay-cumhuriyeti",
  "Asunción'da criollo subaylar valiyi devirdi ve Paraguay'ı hem İspanya'dan hem Buenos Aires'ten bağımsız ilan etti. Yönetim, José Gaspar Rodríguez de Francia'nın diktatörlüğüne evrilecek Cunta'ya geçti.",
  "WHIG",konu="konu-siyasi",yer="Asunción",
  gun="14–15 Mayıs 1811 (askerî devrim 14–15 Mayıs)")
m("1811-05-18","Las Piedras Savaşı — Artigas kralcı kuvvetleri yendi","savas",3,1,"rio-de-la-plata-valiligi",
  "José Gervasio Artigas komutasındaki Doğu Bandı (Banda Oriental) isyancıları Las Piedras'ta kralcı birlikleri yendi; Uruguay'ın bağımsızlık mücadelesinin ilk büyük zaferi oldu. Artigas 'Uruguay Ulusunun Babası' sayılır.",
  "RIPP",konu="konu-askeri")
m("1811-07-05","Venezuela bağımsızlık bildirisi — Güney Amerika'nın ilk cumhuriyeti","bolunme",5,3,P,
  "Caracas'taki Ulusal Kongre, Venezuela Konfedere Devletleri'nin İspanya'dan bağımsızlığını ilan etti; bu, kıtada ilk bağımsızlık bildirisiydi. Birinci Cumhuriyet, 1812'de kralcı karşı saldırıyla çöktü.",
  "L",konu="konu-siyasi",yer="Caracas (Santiago de León de Caracas)")
m("1812-07-25","San Mateo ve Venezuela Birinci Cumhuriyeti'nin çöküşü","son",4,2,P,
  "Monteverde komutasındaki kralcılar, depremle ve iç bölünmeyle zayıflayan Venezuela cumhuriyetçilerini yendi; Francisco de Miranda 25 Temmuz 1812'de kapitülasyon imzaladı. Birinci Cumhuriyet çöktü.",
  "L",konu="konu-askeri")
m("1813-06-15","Bolívar 'Ölüm Savaşı' (Guerra a Muerte) fermanını yayımladı","savas",3,2,P,
  "Simón Bolívar Trujillo'da, kralcı İspanyollara ve onlarla işbirliği edenlere ölüm ilan eden fermanı yayımladı; savaş karşılıklı katliamlara dönüştü. Ferman, bağımsızlık mücadelesinin sertleşmesini simgeler.",
  "L",konu="konu-askeri")
m("1814-10-02","Rancagua Savaşı — Şili Patria Vieja çöktü","savas",3,1,P,
  "İspanyol kralcı ordusu Rancagua'da Şili yurtseverlerini yendi; Bernardo O'Higgins ve yurtseverler Arjantin'e Mendoza'ya kaçtı. Kralcı 'Reconquista' 1817'ye kadar sürdü.",
  "COLL",konu="konu-askeri")
m("1816-07-09","Tucumán Kongresi — Río de la Plata Birleşik Eyaletleri bağımsızlığını ilan etti","bolunme",5,2,"arjantin-cumhuriyeti",
  "Tucumán'da toplanan Kongre, Río de la Plata Birleşik Eyaletleri'nin İspanya'dan ve diğer yabancı egemenliklerden bağımsızlığını resmen ilan etti. Arjantin'in resmî bağımsızlık günüdür; 1810 Mayıs Devrimi özyönetimdi, bağımsızlık bildirisi burada verildi.",
  "ROCK",konu="konu-siyasi")
m("1817-01-20","Portekiz–Brezilya kuvvetleri Montevideo'yu işgal etti — Cisplatina'nın temeli","isgal",3,1,"portekiz-brezilyasi",
  "Carlos Frederico Lecor komutasındaki Portekiz-Brezilya birlikleri, Artigas'ın Doğu Bandı'na saldırıp Montevideo'ya girdi. İşgal, 1821'de Cisplatina eyaleti adıyla Brezilya'ya ilhakla sonuçlandı.",
  "RIPP",konu="konu-askeri",yer="Montevideo")
m("1817-02-12","Chacabuco Savaşı — And Ordusu Şili'yi kurtardı","savas",4,2,P,
  "José de San Martín ve O'Higgins komutasındaki And Ordusu, And Dağları'nı aşıp Chacabuco'da kralcı birlikleri yendi ve Santiago yolu açıldı. Zafer, Şili'nin bağımsızlığına giden yolu açtı.",
  "COLL",konu="konu-askeri",devletler=[P,"arjantin-cumhuriyeti"])
m("1818-02-12","Şili bağımsızlığını resmen ilan etti","bolunme",4,2,"sili-cumhuriyeti",
  "Bernardo O'Higgins, Talca'da hazırlanan bildiriyi Santiago'da resmen ilan ederek Şili'nin bağımsızlığını duyurdu. Kralcı direniş devam etse de cumhuriyetin kuruluş günü kabul edilir.",
  "COLL",konu="konu-siyasi")
m("1818-04-05","Maipú Savaşı — Şili'de İspanyol egemenliği kesin biçimde yıkıldı","savas",4,2,"sili-cumhuriyeti",
  "San Martín'in And Ordusu Maipú'da kralcı ordu Osorio'yu bozguna uğrattı. Yenilgi Şili'de İspanyol yönetimini fiilen bitirdi ve ordu Peru'ya yönelme planına devam etti.",
  "COLL",konu="konu-askeri",devletler=["sili-cumhuriyeti",P])
m("1819-08-07","Boyacá Savaşı — Bolívar Yeni Granada'yı kurtardı","savas",5,3,P,
  "Bolívar'ın ordusu Boyacá'da kralcı birlikleri yenip Bogotá'ya girdi; Yeni Granada'da İspanyol yönetimi çöktü. Zafer, Gran Kolombiya'nın kuruluşunu mümkün kıldı.",
  "BUSH",konu="konu-askeri")
m("1819-12-17","Angostura Kongresi — Gran Kolombiya Cumhuriyeti kuruldu","kurulus",5,3,"gran-kolombiya",
  "Angostura Kongresi, Venezuela ile Yeni Granada'yı tek cumhuriyet altında birleştiren Kuruluş Yasası'nı (Ley Fundamental) kabul etti ve Bolívar başkan seçildi. Cumhuriyet 1821'de Cúcuta Anayasası'yla pekişti.",
  "BUSH",konu="konu-siyasi")
m("1820-09-08","San Martín Peru'da Pisco'ya çıktı — Kurtuluş Seferi başladı","savas",4,2,P,
  "San Martín'in Şili'den gelen Peru Özgürlük Ordusu Paracas/Pisco'ya çıkarak Peru'nun kuzey kıyısındaki kralcı kalelere karşı deniz aşırı seferi başlattı. Sefer, Lima'nın bağımsızlığını ilan etmesiyle sonuçlandı.",
  "PER",konu="konu-askeri")
m("1821-06-24","Carabobo Savaşı — Venezuela'nın bağımsızlığı kesinleşti","savas",5,3,"gran-kolombiya",
  "Bolívar ve Páez, Carabobo'da ana kralcı ordu La Torre'yi yendi ve Caracas'a giden yol açıldı. Zafer, Venezuela'da İspanyol egemenliğinin fiilen sonu oldu.",
  "L",konu="konu-askeri")
m("1821-07-28","San Martín Lima'da Peru'nun bağımsızlığını ilan etti","bolunme",5,3,P,
  "San Martín, kralcıların Lima'yı boşaltmasının ardından Plaza Mayor'da Peru'nun bağımsızlığını resmen ilan etti; kendisi 'Peru'nun Koruyucusu' oldu. Bağımsız Peru'nun tam garantisi ancak 1824'te Ayacucho ile sağlandı.",
  "PER",konu="konu-siyasi")
m("1821-07-31","Cisplatina Kongresi — Doğu Bandı Portekiz-Brezilya'ya katıldı","birlesme",3,1,"portekiz-brezilyasi",
  "Montevideo'daki Cisplatina Kongresi, Lecor'un işgal ettiği Doğu Bandı'nın Portekiz-Brezilya krallığına katılmasını oyladı. Eyalet 1825'e kadar Brezilya'nın parçası olarak kaldı.",
  "RIPP",konu="konu-siyasi",yer="Montevideo")
m("1821-10-10","Cartagena kralcı kuvvetlerden alındı — Karayip kıyısı bağımsızlığa kavuştu","savas",3,1,"gran-kolombiya",
  "Uzun kuşatmanın ardından Mariano Montilla ve José Prudencio Padilla'nın kuvvetleri Cartagena'yı ele geçirdi; Gran Kolombiya'nın Karayip kıyısında kralcı direniş çöktü.",
  "BUSH",konu="konu-askeri",yer="Cartagena de Indias",
  gun="10 Ekim 1821 (teslim; kuşatma Ağustos–Ekim 1821)")
m("1821-11-28","Panama İspanya'dan bağımsızlığını ilan etti ve Gran Kolombiya'ya katıldı","bolunme",4,2,"gran-kolombiya",
  "Panama Kıstağı, Meksika ve Peru'daki gelişmelerin ardından kendi bağımsızlığını ilan etti ve gönüllü olarak Gran Kolombiya'ya katıldı. Kıstak 1903'e dek Kolombiya'nın parçası olarak kaldı.",
  "BUSH",konu="konu-siyasi",yer="Panamá (Panama City)")
m("1822-05-24","Pichincha Savaşı — Quito kurtuldu","savas",4,2,"gran-kolombiya",
  "Antonio José de Sucre komutasındaki Bolivarcı birlikler Pichincha yamaçlarında kralcı ordu Aymerich'i yendi ve Quito'ya girdi. Ekvador'un bağımsızlığı ve Gran Kolombiya'ya katılımının yolu açıldı.",
  "L",konu="konu-askeri",yer="Quito")
m("1822-07-26","Guayaquil Görüşmesi — Bolívar ile San Martín","diplomasi",4,2,"gran-kolombiya",
  "Bolívar ile San Martín Guayaquil'de bir araya geldi; görüşmenin ardından San Martín Peru'nun yönetimini bırakıp Avrupa'ya çekildi ve kurtuluş savaşı Bolívar'ın önderliğinde sürdü. Görüşmenin içeriği tartışmalıdır.",
  "L",konu="konu-siyasi",yer="Guayaquil (Santiago de Guayaquil)",
  gun="26–27 Temmuz 1822")
m("1822-12-01","I. Pedro Brezilya İmparatoru olarak taç giydi","hukumdar",4,2,"brezilya-imparatorlugu",
  "7 Eylül 1822'de bağımsızlığı ilan eden Pedro, Rio de Janeiro'da 'Brezilya Meşruti İmparatoru' olarak taç giydi. Portekiz'den kopuş, İspanyol Amerikası'nın aksine monarşik bir devamlılıkla gerçekleşti.",
  "SCH",konu="konu-siyasi",yer="Rio de Janeiro")
m("1824-03-25","Brezilya İmparatorluk Anayasası yürürlüğe girdi","anayasa",4,1,"brezilya-imparatorlugu",
  "I. Pedro, Kurucu Meclis'i dağıttıktan sonra kendi hazırlattığı anayasayı ilan etti; metin 1889'a kadar Brezilya'nın temel yasası olarak (Ek Yasa'larla) yürürlükte kaldı. Anayasa, dört güç (yasama, yürütme, yargı, moderatör) ayrımını getirdi.",
  "SCH",konu="konu-siyasi")
m("1824-08-06","Junín Savaşı — Peru'da kralcı süvari bozguna uğradı","savas",4,2,"gran-kolombiya",
  "Bolívar'ın süvarileri Junín'de kralcı süvariyi yendi; savaş tek kurşun atılmadan kılıç ve mızrakla sonuçlandı. Zafer, dört ay sonraki Ayacucho Savaşı'nı hazırladı.",
  "L",konu="konu-askeri",devletler=["gran-kolombiya",P])
m("1825-08-06","Bolivya bağımsızlık bildirisi — Yukarı Peru'da Bolivya Cumhuriyeti kuruldu","bolunme",5,2,"bolivya-cumhuriyeti",
  "Chuquisaca'da toplanan meclis Yukarı Peru'nun bağımsızlığını ilan etti ve devleti Bolívar onuruna Bolivya olarak adlandırdı. Ayacucho'nun ardından İspanyol yönetimine son veren bu adım, Peru ve Río de la Plata'dan ayrı bir devlet kurdu.",
  "KLEIN",konu="konu-siyasi",yer="Sucre (La Plata / Chuquisaca)")
m("1825-08-25","Florida Kongresi — Doğu Bandı Río de la Plata Birleşik Eyaletleri'ne katılma kararı aldı","birlesme",4,1,"arjantin-cumhuriyeti",
  "Doğu Bandı'nın Florida Kongresi, Brezilya'dan ayrılmayı ve Río de la Plata Birleşik Eyaletleri'ne katılmayı ilan etti. Karar, Arjantin–Brezilya Savaşı'nı (1825–1828) başlattı.",
  "RIPP",konu="konu-siyasi")
m("1826-01-15","Tantauco Antlaşması — Chiloé, İspanyolların son Şili kalesi bırakıldı","antlasma",3,1,"sili-cumhuriyeti",
  "Chiloé'deki son kralcı yönetim Tantauco Antlaşması ile Şili'ye devredildi; adalar 1826'da Şili'ye katıldı. Bu, Güney Amerika'nın Pasifik kıyısında İspanyol yönetiminin sona erişidir.",
  "COLL",konu="konu-askeri",gun="15 Ocak 1826")
m("1826-01-23","Callao'nun teslimi — Peru'da İspanyolların son kalesi düştü","son",3,1,"peru-cumhuriyeti",
  "Callao'daki Real Felipe Kalesi'nde direnen kralcı garnizon uzun kuşatmanın ardından teslim oldu. Bu teslimle Güney Amerika'daki İspanyol egemenliğinin anakaradaki son kalesi ortadan kalktı.",
  "PER",konu="konu-askeri")
m("1826-06-22","Panama Kongresi — Bolívar'ın Amerikan Devletleri Birliği girişimi","diplomasi",3,2,"gran-kolombiya",
  "Bolívar'ın çağrısıyla Panama'da toplanan kongre, Gran Kolombiya, Orta Amerika, Peru ve Meksika'nın katılımıyla ortak savunma ve birlik ilkelerini görüştü; antlaşmalar yalnızca Gran Kolombiya tarafından onaylandı. Panama Kongresi, Latin Amerika birlik fikrinin başlangıcı sayılır.",
  "BUSH",konu="konu-siyasi",yer="Panamá (Panama City)",gun="22 Haziran 1826 (açılış)")
m("1827-02-20","Ituzaingó Savaşı — Arjantin–Brezilya Savaşı'nda Arjantin zaferi","savas",3,1,"arjantin-cumhuriyeti",
  "Alvear komutasındaki Arjantin-Uruguay birlikleri Ituzaingó'da Brezilya ordusunu yendi. Savaş kesin bir sonuç vermese de Brezilya'nın Doğu Bandı'nı elde tutma imkânı zayıfladı ve Uruguay'ın kuruluşuna giden müzakerelere yol açtı.",
  "ROCK",konu="konu-askeri")
m("1828-08-27","Montevideo Ön Barış Antlaşması — Uruguay bağımsız devlet olarak kuruldu","antlasma",5,2,"uruguay-cumhuriyeti",
  "Britanya arabuluculuğuyla Arjantin ve Brezilya, Doğu Bandı'nı her iki devletten bağımsız 'Uruguay Doğu Cumhuriyeti' olarak tanıyan Ön Barış Antlaşması'nı (Convención Preliminar de Paz) imzaladı. Uruguay bu iki büyük komşu arasında tampon devlet olarak kuruldu.",
  "RIPP",konu="konu-siyasi",devletler=["uruguay-cumhuriyeti","arjantin-cumhuriyeti","brezilya-imparatorlugu"])
m("1829-02-27","Tarqui Savaşı — Gran Kolombiya Peru'yu yendi","savas",3,1,"gran-kolombiya",
  "Sucre komutasındaki Gran Kolombiya kuvvetleri Tarqui'de Peru ordusunu yendi; Peru–Gran Kolombiya Savaşı (1828–29) böylece kolombiya lehine sonlandı. Girón Antlaşması kısa süre sonra imzalandı.",
  "ECU",konu="konu-askeri")
m("1829-09-22","Guayaquil (Girón) Antlaşması — Peru–Gran Kolombiya sınırı Tumbes–Marañón hattı olarak belirlendi","antlasma",3,1,"gran-kolombiya",
  "Tarqui zaferinin ardından Peru ile Gran Kolombiya, Guayaquil'de barış antlaşması imzaladı; sınır çizgisi eski Yeni Granada–Peru hududuna dayandırıldı. Antlaşma yıllar sonra Ekvador–Peru sınır anlaşmazlığının dayanağı oldu.",
  "ECU",konu="konu-siyasi",devletler=["gran-kolombiya","peru-cumhuriyeti"])
m("1830-05-13","Quito Meclisi Ekvador'un Gran Kolombiya'dan ayrılışını ilan etti","bolunme",4,2,"ekvador-cumhuriyeti",
  "Quito'da toplanan notabl meclisi, Gran Kolombiya'dan ayrılıp bağımsız 'Ekvador Devleti'ni kurdu ve Juan José Flores'i devlet başkanı seçti. Ağustos 1830'da Riobamba Kurucu Meclisi ilk anayasayı kabul etti.",
  "ECU",konu="konu-siyasi",yer="Quito",gun="13 Mayıs 1830 (Quito ayrılık kararı)")
m("1830-07-18","Uruguay Anayasası yemin edildi","anayasa",4,1,"uruguay-cumhuriyeti",
  "Uruguay Doğu Cumhuriyeti'nin ilk anayasası Montevideo'da yemin ederek yürürlüğe girdi; Fructuoso Rivera ilk başkan seçildi. Anayasa yeni devletin cumhuriyetçi kurumlarını belirledi.",
  "RIPP",konu="konu-siyasi",yer="Montevideo")
m("1830-12-17","Simón Bolívar öldü — Gran Kolombiya hayali dağılıyor","olum",4,3,"gran-kolombiya",
  "Bolívar, Santa Marta yakınında Quinta de San Pedro Alejandrino'da öldü; Gran Kolombiya'nın ayrılığı ve Venezuela, Yeni Granada, Ekvador'un ayrı devletler olarak yeniden kuruluşu Ocak 1831'de tamamlandı.",
  "L",konu="konu-siyasi")
m("1831-04-07","I. Pedro tahttan feragat etti — Brezilya'da Naiplik dönemi başladı","hukumdar",4,1,"brezilya-imparatorlugu",
  "Askerî ve siyasi baskı altında I. Pedro, küçük oğlu II. Pedro lehine tahttan çekilip Portekiz'e döndü. Brezilya, 1840'a kadar süren Naiplik (Período Regencial) dönemine girdi; bu dönem eyalet ayaklanmalarıyla doludur.",
  "SCH",konu="konu-siyasi")
m("1831-07-21","İngiliz Guyanası kolonisi kuruldu","kurulus",3,1,"ingiliz-guyanasi",
  "İngiliz Kraliyet Kararnamesi Essequibo-Demerara ve Berbice kolonilerini tek 'İngiliz Guyanası' olarak birleştirdi. Bu koloni, 1966'da Guyana olarak bağımsız olacak devletin kurumsal temelini attı.",
  "GUY",konu="konu-idari")
m("1814-08-13","Londra Sözleşmesi — Hollanda, Essequibo, Demerara ve Berbice'yi İngiltere'ye bıraktı","antlasma",3,1,"hollanda-guyanasi",
  "Napolyon Savaşları'nın sonunda İngiltere ve Hollanda arasındaki sözleşme, Guyana kıyısındaki üç koloninin İngiltere'ye kalıcı devrini onayladı; Hollanda yalnızca Surinam'ı elinde tuttu. Bu, Hollanda Guyanası'nın büyük ölçüde küçülmesi anlamına geliyordu.",
  "GUY",konu="konu-siyasi",devletler=["hollanda-guyanasi"])

# ================= 1830–1923: CUMHURİYETLER, SAVAŞLAR, SINIRLAR =================
m("1835-01-07","Cabanagem ayaklanması — Pará'da yoksulların isyanı başladı","isyan",3,1,"brezilya-imparatorlugu",
  "Belém'de caboclo, yerli ve siyah yoksulların ayaklanması Pará eyaletinde yönetimi devirdi ve şehri ele geçirdi; ayaklanma 1840'a kadar sürdü ve on binlerce can aldı. Naiplik dönemi Brezilya'sının en kanlı eyalet isyanlarından biridir.",
  "SCH",konu="konu-askeri",yer="Belém")
m("1835-09-20","Farroupilha Devrimi başladı — Río Grande do Sul'da ayrılıkçı savaş","isyan",4,1,"brezilya-imparatorlugu",
  "Rio Grande do Sul'da çiftlik sahibi elitlerin başlattığı Farroupilha ayaklanması, İmparatorluk yönetimini devirip bölgede cumhuriyet ilan etti. Savaş 1845'e kadar sürdü.",
  "SCH",konu="konu-askeri")
m("1836-10-28","Peru–Bolivya Konfederasyonu kuruldu","birlesme",4,1,"peru-cumhuriyeti",
  "Bolivya Devlet Başkanı Andrés de Santa Cruz, Peru'yu kuzey ve güney iki devlete bölüp Bolivya ile birlikte Konfederasyon altında birleştirdi; kendisi 'Yüce Koruyucu' oldu. Konfederasyon Şili ve Arjantin'in müdahalesiyle 1839'da dağıldı.",
  "PER",konu="konu-siyasi",devletler=["peru-cumhuriyeti","bolivya-cumhuriyeti"],
  gun="28 Ekim 1836 (yaygın kuruluş günü)")
m("1839-01-20","Yungay Savaşı — Peru–Bolivya Konfederasyonu yıkıldı","savas",4,1,"peru-cumhuriyeti",
  "Şili ve Peru muhalefeti güçleri Yungay'da Santa Cruz'un Konfederasyon ordusunu yendi; Konfederasyon dağıldı ve Peru ile Bolivya yeniden ayrı devletler oldu.",
  "PER",konu="konu-askeri",devletler=["peru-cumhuriyeti","bolivya-cumhuriyeti","sili-cumhuriyeti"])
m("1840-07-23","II. Pedro reşit ilan edildi — Brezilya'da Naiplik sona erdi","hukumdar",3,1,"brezilya-imparatorlugu",
  "Liberallerin 'Maioridade' hareketiyle 14 yaşındaki II. Pedro reşit ilan edildi ve tam imparatorluk yetkilerini aldı. Bu, 1889'a kadar sürecek uzun ve istikrarlı saltanatı başlattı.",
  "SCH",konu="konu-siyasi")
m("1843-02-16","Montevideo Kuşatması başladı — Guerra Grande","savas",4,1,"uruguay-cumhuriyeti",
  "Arjantinli Rosas'ın müttefiki Oribe'nin ordusu Montevideo'yu kuşattı ve kuşatma 1851'e kadar sürdü. Guerra Grande, Uruguay iç savaşı (Blanco–Colorado) ve Arjantin–Brezilya rekabetinin kesişme noktasıydı.",
  "RIPP",konu="konu-askeri",yer="Montevideo")
m("1845-03-01","Ponche Verde Antlaşması — Farroupilha Savaşı sona erdi","antlasma",3,1,"brezilya-imparatorlugu",
  "Rio Grande do Sul'daki uzun ayrılıkçı savaş, Caxias'ın önderliğindeki müzakerelerle Ponche Verde Antlaşması ile bitti; eyalet Brezilya'ya bağlı kaldı.",
  "SCH",konu="konu-siyasi")
m("1848-12-18","Punta Arenas kuruldu — Şili Macellan Boğazı'nda hâkimiyetini pekiştirdi","kurulus",3,1,"sili-cumhuriyeti",
  "Şili, Fuerte Bulnes'in yerine Punta Arenas'ı kurarak Macellan Boğazı'ndaki varlığını sağlamlaştırdı. Şehir sonradan Patagonya'nın güney ucunun ana limanı oldu.",
  "COLL",konu="konu-idari",yer="Punta Arenas")
m("1851-10-08","Guerra Grande sona erdi — Montevideo kuşatması kaldırıldı","son",3,1,"uruguay-cumhuriyeti",
  "Brezilya ve Entre Ríos valisi Urquiza'nın müdahalesiyle Oribe'nin kuşatması sona erdi; Ekim 1851 barışı 'ne galip ne mağlup' formülüyle imzalandı. Brezilya Uruguay üzerindeki etkisini güçlendirdi.",
  "RIPP",konu="konu-askeri",yer="Montevideo")
m("1852-02-03","Caseros Savaşı — Rosas devrildi","savas",4,2,"arjantin-cumhuriyeti",
  "Urquiza, Brezilya ve Uruguay Colorado'larıyla ittifak yaparak Caseros'ta Juan Manuel de Rosas'ı yendi. Rosas'ın 20 yıllık diktatörlüğü sona erdi ve Arjantin Anayasası'na (1853) giden yol açıldı.",
  "ROCK",konu="konu-askeri")
m("1853-02-12","Puerto Montt kuruldu — Alman göçmenleriyle Güney Şili kolonizasyonu","kurulus",2,1,"sili-cumhuriyeti",
  "Vicente Pérez Rosales, Llanquihue Gölü kıyısında Puerto Montt'u kurdu; bölgede Alman göçmen kolonizasyonu başladı. Güney Şili'nin ormanlarının açılması bu projeye dayanır.",
  "COLL",konu="konu-sosyal",yer="Puerto Montt")
m("1853-05-01","Arjantin Anayasası kabul edildi","anayasa",4,2,"arjantin-cumhuriyeti",
  "Santa Fe Kurucu Kongresi, Buenos Aires eyaleti olmaksızın Arjantin Konfederasyonu'nun federal anayasasını kabul etti. Anayasa, 1860'ta Buenos Aires ile yeniden birleşme sonrası değişikliklerle birlikte Arjantin'in temel yasası olarak kaldı.",
  "ROCK",konu="konu-siyasi")
m("1865-05-01","Üçlü İttifak Antlaşması — Arjantin, Brezilya ve Uruguay Paraguay'a karşı ittifak yaptı","ittifak",4,2,"paraguay-cumhuriyeti",
  "Arjantin, Brezilya ve Uruguay, Solano López'in Paraguay'ına karşı gizli maddeleri de içeren Üçlü İttifak Antlaşması'nı imzaladı. Savaş, Paraguay'ın nüfusunun büyük bölümünü yok etti.",
  "WHIG",konu="konu-siyasi",devletler=["paraguay-cumhuriyeti","arjantin-cumhuriyeti","brezilya-imparatorlugu","uruguay-cumhuriyeti"])
m("1870-03-01","Cerro Corá Savaşı — Solano López öldü, Paraguay Savaşı sona erdi","son",4,2,"paraguay-cumhuriyeti",
  "Brezilya birlikleri Cerro Corá'da Paraguay'ın son kuvvetlerini yendi; Francisco Solano López savaşırken öldü. Beş yıl süren savaş Paraguay'ın nüfusunun ağır kayıplarıyla bitti.",
  "WHIG",konu="konu-askeri")
m("1874-08-06","Sucre Antlaşması — Şili–Bolivya sınırı 24. paralel olarak belirlendi","antlasma",3,1,"bolivya-cumhuriyeti",
  "Bolivya ile Şili, Atacama Çölü'ndeki sınırı 24. paralelde sabitleyen Lindsay–Corral (Sucre) Antlaşması'nı imzaladı ve Şili'ye vergi sabitlemesi getirdi. Antlaşmanın vergi hükmü 1879 Pasifik Savaşı'nın bahanesi oldu.",
  "SATER",konu="konu-siyasi",devletler=["bolivya-cumhuriyeti","sili-cumhuriyeti"])
m("1878-10-05","Arjantin Kongresi 947 sayılı yasayı kabul etti — Çöl Seferi'nin hukuki dayanağı","kanun",3,1,"arjantin-cumhuriyeti",
  "Arjantin Kongresi, sınırı Río Negro'ya taşımak için Pampa ve Patagonya'daki yerli topluluklara karşı askerî ilerlemeyi finanse eden 947 sayılı yasayı kabul etti. Roca'nın 1879 seferi ve sonraki kampanya bu yasaya dayanır.",
  "ROCK",konu="konu-askeri",
  gun="5 Ekim 1878 (Ley 947); Roca'nın seferi Nisan–Haziran 1879")
m("1725-01-01","Mapuche (Araukanya) etkisi Pampa ve Patagonya'ya yayıldı — 'Araukanlaşma'","sosyal",3,1,"mapuche-araukanya",
  "Araukanyalıların atları benimseyip And'ların doğusuna, Pampa ve Kuzey Patagonya'ya yayılması, yerli Pampa ve Tehuelche topluluklarının dilce ve kültürce Mapuche etkisine girmesi sonucunu verdi. Cooper, sürecin yaklaşık 1725 tarihinde yerleşmiş sayılabileceğini belirtir.",
  "HSAI",konu="konu-kultur",
  gun="yaklaşık 1725 (Cooper: 'yaklaşık tarih'; yıl bile kesin değil, yıl temsilîdir)")
m("1879-05-25","Roca Río Negro'ya ulaştı — Arjantin'in Pampa'yı fiilen ele geçirişi","isgal",4,1,"arjantin-cumhuriyeti",
  "General Julio A. Roca komutasındaki Arjantin ordusu 1879 seferinde Río Negro kıyısına ulaşarak Pampa'da yerli toprakların fiilî işgalini ve sınırın Río Negro'ya taşınmasını sağladı. Sefer, 1878 tarihli 947 sayılı yasanın uygulamasıydı; Patagonya'nın geri kalanı 1885'e kadar ele geçirildi.",
  "ROCK",konu="konu-askeri",
  gun="24–25 Mayıs 1879 (kaynaklara göre; sefer Nisan–Haziran 1879)")
m("1879-02-14","Şili Antofagasta'yı işgal etti — Pasifik Savaşı başladı","isgal",5,2,"sili-cumhuriyeti",
  "Şili birlikleri Bolivya'nın Antofagasta limanını işgal etti; Bolivya'nın Şili şirketine vergi artırması ve 1874 Antlaşması'nın ihlali gerekçe gösterildi. Savaş kısa sürede Peru'yu da sürükledi.",
  "SATER",konu="konu-askeri",devletler=["sili-cumhuriyeti","bolivya-cumhuriyeti"])
m("1879-04-05","Şili, Peru ve Bolivya'ya savaş ilan etti","savas",5,2,"sili-cumhuriyeti",
  "Şili, Bolivya–Peru gizli ittifakını gerekçe göstererek 5 Nisan 1879'da resmen savaş ilan etti. Savaş 1884'e kadar sürecek ve Bolivya'yı denizsiz bırakacaktı.",
  "SATER",konu="konu-askeri",devletler=["sili-cumhuriyeti","peru-cumhuriyeti","bolivya-cumhuriyeti"])
m("1880-05-26","Tacna (Alto de la Alianza) Savaşı — Peru–Bolivya müttefik ordusu bozguna uğradı","savas",4,1,"sili-cumhuriyeti",
  "Şili ordusu Tacna yakınında Peru–Bolivya müttefik ordusunu kesin olarak yendi. Bolivya bu savaştan sonra fiilen savaştan çekildi.",
  "SATER",konu="konu-askeri",devletler=["sili-cumhuriyeti","peru-cumhuriyeti","bolivya-cumhuriyeti"])
m("1881-01-17","Şili ordusu Lima'ya girdi","isgal",4,1,"sili-cumhuriyeti",
  "Miraflores ve Chorrillos savaşlarının ardından Şili ordusu Peru'nun başkenti Lima'yı işgal etti. İşgal 1883'e kadar sürdü.",
  "SATER",konu="konu-askeri",devletler=["sili-cumhuriyeti","peru-cumhuriyeti"])
m("1883-01-01","Villarrica yeniden işgal edildi — Araukanya'nın (Mapuche) işgali tamamlandı","isgal",3,1,"mapuche-araukanya",
  "Şili ordusu, Mapuche direnişinin son güçlü merkezlerinden Villarrica'yı yeniden işgal etti; 'Araukanya'nın Sükûnete Erdirilmesi' 1883'te fiilen tamamlandı. Mapuche toprakları Şili idaresine girdi.",
  "MAP",konu="konu-askeri",gun="1 Ocak 1883 (Villarrica'nın yeniden kuruluşu; kaynak sayfası doğrulanmadı)")
m("1883-10-20","Ancón Antlaşması — Peru Tarapacá'yı Şili'ye bıraktı","antlasma",4,1,"peru-cumhuriyeti",
  "Peru, Ancón Antlaşması'yla Tarapacá eyaletini Şili'ye bıraktı; Tacna ve Arica on yıl süreyle Şili idaresinde kalacaktı, sonrasında halk oylaması yapılacaktı (hiç yapılmadı).",
  "SATER",konu="konu-siyasi",devletler=["peru-cumhuriyeti","sili-cumhuriyeti"])
m("1884-04-04","Valparaíso Mütarekesi — Bolivya Antofagasta kıyısını Şili'ye bıraktı","antlasma",4,1,"bolivya-cumhuriyeti",
  "Bolivya, Şili ile Valparaíso'da imzaladığı mütarekeyle Antofagasta sahilini fiilen Şili'ye bıraktı; Bolivya denize çıkışını kaybetti. 1904 Antlaşması bu durumu kalıcılaştırdı.",
  "SATER",konu="konu-siyasi",devletler=["bolivya-cumhuriyeti","sili-cumhuriyeti"])
m("1884-10-12","Ushuaia kuruldu — Arjantin Ateş Toprakları'nda varlığını pekiştirdi","kurulus",3,1,"arjantin-cumhuriyeti",
  "Augusto Lasserre komutasındaki Arjantin denizcileri Ushuaia'da Arjantin Ateş Toprakları idari merkezini kurdu. Şehir, dünyanın en güney şehri olarak Arjantin'in Şili ile rekabetinde bir dayanak noktası oldu.",
  "ROCK",konu="konu-idari",yer="Ushuaia")
m("1888-05-13","Altın Kanun (Lei Áurea) — Brezilya'da kölelik kaldırıldı","kanun",5,3,"brezilya-imparatorlugu",
  "Prenses İsabel, Brezilya'da köleliği koşulsuz ve tazminatsız kaldıran Lei Áurea'yı imzaladı; Brezilya, Amerika kıtasında köleliği kaldıran son ülke oldu. Yasa, imparatorluğun toprak sahibi elitlerinin desteğini kaybetmesini hızlandırdı.",
  "SCH",konu="konu-sosyal")
m("1891-02-24","Brezilya Cumhuriyet Anayasası kabul edildi","anayasa",3,1,"brezilya-cumhuriyeti",
  "1889 cumhuriyet darbesinden sonra toplanan Kurucu Meclis, federal başkanlık sistemine dayalı ilk cumhuriyet anayasasını kabul etti; eyaletlere geniş özerklik verildi.",
  "SCH",konu="konu-siyasi")
m("1899-10-03","Paris Hakem Kararı — Venezuela–İngiliz Guyanası sınırı belirlendi","antlasma",3,1,"ingiliz-guyanasi",
  "Paris'te toplanan hakem heyeti, Venezuela–İngiliz Guyanası sınırında ihtilaflı Essequibo bölgesinin büyük kısmını İngiliz Guyanası'na verdi; Venezuela karara sonradan itiraz etti.",
  "GUY",konu="konu-siyasi",devletler=["ingiliz-guyanasi","venezuela-cumhuriyeti"])
m("1902-08-06","Acre Devrimi — Plácido de Castro Bolivya'nın Acre'sinde ayaklanmayı başlattı","isyan",3,1,"brezilya-cumhuriyeti",
  "Kauçuk bölgesi Acre'de Brezilyalı yerleşimciler, Bolivya yönetimine karşı Plácido de Castro önderliğinde ayaklandı ve bölgeyi denetimi altına aldı. Çatışma 1903 Petrópolis Antlaşması'yla sona erdi.",
  "SCH",konu="konu-askeri",devletler=["brezilya-cumhuriyeti","bolivya-cumhuriyeti"])
m("1903-11-17","Petrópolis Antlaşması — Bolivya Acre'yi Brezilya'ya bıraktı","antlasma",4,1,"bolivya-cumhuriyeti",
  "Bolivya, Acre bölgesini Brezilya'ya bıraktı; karşılığında tazminat ve Madeira–Mamoré demiryolu vaadi aldı. Brezilya'nın kauçuk zengini Acre'yi toprağına katması bu antlaşmayla hukuki güvenceye kavuştu.",
  "SCH",konu="konu-siyasi",devletler=["bolivya-cumhuriyeti","brezilya-cumhuriyeti"])
m("1904-10-20","Şili–Bolivya Barış ve Dostluk Antlaşması — Bolivya kıyı kaybını kalıcı olarak kabul etti","antlasma",4,1,"bolivya-cumhuriyeti",
  "Bolivya, 1904 antlaşmasıyla Pasifik kıyısındaki Antofagasta'yı ve Şili'nin denetimindeki bölgeyi kalıcı olarak Şili'ye bıraktı; karşılığında Arica–La Paz demiryolu ve ticari geçiş ayrıcalıkları aldı.",
  "SATER",konu="konu-siyasi",devletler=["bolivya-cumhuriyeti","sili-cumhuriyeti"])
m("1911-05-31","Puerto Natales kuruldu — Şili Patagonyası'nın güney limanı","kurulus",2,1,"sili-cumhuriyeti",
  "Şili, Última Esperanza bölgesinde Puerto Natales'i kurdu; şehir koyun yetiştirme ve et-yün ihracatının limanı oldu.",
  "COLL",konu="konu-ekonomi",yer="Puerto Natales")


# olayın geçtiği yerin haritadaki AD'ı (yerlesimler ad alanı; odak_olc.py ile ÇÖZÜLDÜĞÜ ölçülür)
YER = {
 "1780-11-04": "Cusco (Qosqo)", "1781-05-18": "Cusco (Qosqo)",
 "1821-07-28": "Lima (Ciudad de los Reyes)", "1826-01-23": "Lima (Ciudad de los Reyes)",
 "1881-01-17": "Lima (Ciudad de los Reyes)", "1883-10-20": "Lima (Ciudad de los Reyes)",
 "1810-09-18": "Santiago (Şili)", "1814-10-02": "Rancagua", "1817-02-12": "Santiago (Şili)",
 "1818-02-12": "Santiago (Şili)", "1818-04-05": "Santiago (Şili)",
 "1819-08-07": "Bacatá (Bogotá)", "1826-01-15": "Castro (Chiloé)",
 "1852-02-03": "Buenos Aires", "1853-05-01": "Santa Fe (Arjantin)", "1865-05-01": "Buenos Aires",
 "1829-09-22": "Guayaquil (Santiago de Guayaquil)",
 "1888-05-13": "Rio de Janeiro", "1891-02-24": "Rio de Janeiro", "1840-07-23": "Rio de Janeiro",
 "1831-04-07": "Rio de Janeiro", "1824-03-25": "Rio de Janeiro", "1874-08-06": "Sucre (La Plata / Chuquisaca)",
 "1781-03-16": "Bacatá (Bogotá)", "1750-01-13": "",
}


# MÜKERRER: künyelerin GÖMÜLÜ kronolojisinde (data/devletler.js `kronoloji:`) aynı olay ZATEN var.
# ORTAK §5.1: aynı olayı ikinci kez yazma. Bunlar dosyaya GİRMEZ; gün düzeltmeleri
# denetim/KRONO-AMERIKA-G-0929-DUZELTME.md'de (hüküm koordinatörde).
DUP = {"1814-08-13", "1899-10-03", "1831-07-21", "1819-08-07", "1819-12-17", "1821-06-24",
       "1816-07-09", "1818-02-12", "1818-04-05", "1811-05-14", "1825-08-06", "1828-08-27",
       "1830-05-13", "1830-07-18", "1865-05-01", "1870-03-01", "1879-02-14", "1879-04-05",
       "1881-01-17", "1883-10-20", "1884-04-04", "1888-05-13", "1891-02-24", "1904-10-20",
       "1843-02-16", "1831-04-07", "1874-08-06"}


# Yeni devletin künyesinde olayın (gün hatalı/yıl düzeyli) kaydı var → bu kayıt KAYBEDEN (eski sahip)
# künyeye bağlanır: aynı olayın öbür yüzü, mükerrer YOK, Değişmez 2 kapısı eski sahibin çizgisinden kapanır.
DUP.add("1825-08-06")  # eski sahip ispanyol-peru künyesi 1824-12-09'da bitiyor (pencere aşımı) — DUZELTME'ye
EKSI = {"1816-07-09": [P], "1819-12-17": [P], "1821-06-24": [P],
        "1828-08-27": ["brezilya-imparatorlugu"], "1830-05-13": ["gran-kolombiya"]}
DUP -= set(EKSI)


def yaz():
    global E
    E = [e for e in E if e["t"] not in DUP]
    for e in E:
        if e["t"] in EKSI:
            e.pop("devlet", None)
            e["devletler"] = EKSI[e["t"]]
            e["ic_not_d"] = "Yeni devletin künyesinde bu olayın kaydı zaten var (gün yıl düzeyinde/hatalı); bu kayıt KAYBEDEN künyenin çizgisine bağlandı — mükerrer önlendi. Gün düzeltmesi: denetim/KRONO-AMERIKA-G-0929-DUZELTME.md."
    for e in E:
        if not e["yer_id"] and YER.get(e["t"]):
            e["yer_id"] = YER[e["t"]]
    # tekrar denetimi: aynı (t, b) yok
    seen = set()
    for e in E:
        k = (e["t"], e["b"])
        assert k not in seen, k
        seen.add(k)
    E.sort(key=lambda e: e["t"])
    baslik = """// =====================================================================
// GÜNEY AMERİKA — ÇOK KÜNYELİ KRONOLOJİ (KRONO-AMERIKA-G-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_GUNEY_AMERIKA` → app.js `cokTarafliKronolojiEkle`
// her maddeyi `devlet:` / `devletler:` künyesine EKLER (ezmez). ORTAK §4.1.
//
// KÜNYELER (devletler.js'ten okundu, dokunulmadı):
//   ispanya · ispanyol-peru · portekiz-brezilyasi · brezilya-imparatorlugu ·
//   brezilya-cumhuriyeti · gran-kolombiya · arjantin/sili/bolivya/peru/
//   uruguay/paraguay/ekvador/venezuela-cumhuriyeti · mapuche-araukanya ·
//   diaguita-calchaqui-konfederasyonu · guarani-misyonlari · hollanda-guyanasi ·
//   ingiliz-guyanasi
// 🔴 KÜNYESİ OLMAYAN, ÖNERİLEN id'lerle yazılan maddeler (M-5416 kural 3):
//   `yeni-granada-valiligi` (1717/1739/1781) · `rio-de-la-plata-valiligi`
//   (1776/1806/1807/1811) · `venezuela-genel-kaptanligi` (1777) ·
//   `hollanda-brezilyasi` (1630/1654). Künye açılana kadar bağlanmaz ama
//   KAYBOLMAZ. Öneri: denetim/KRONO-AMERIKA-G-0929-KUNYE.md.
//
// KAYNAK: TDV bu coğrafyayı kapsamaz (CLAUDE.md §4: akademik meşru). Her kayıtta
//   yazar+eser açık; sayfa numarası DOĞRULANMADI — kayıtlarda dürüstçe yazılı.
//   Üretici: denetim/ARAC-KRONO-AMERIKA-G-0929-URET.py
// =====================================================================

window.KRONOLOJI_COK_GUNEY_AMERIKA = [
"""
    govde = ",\n".join(json.dumps(e, ensure_ascii=False) for e in E)
    yol = os.path.join(KOK, "data", "kronoloji_cok_guney_amerika.js")
    with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
        f.write(baslik + govde + "\n];\n")
    print(len(E), "madde ->", yol)

if __name__ == "__main__":
    yaz()

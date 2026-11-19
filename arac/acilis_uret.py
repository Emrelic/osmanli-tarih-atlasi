# ACILIS-PERDESI-1117 — açılış perdesinin verisini üretir (Emre, 17 Kasım 2026).
#   py arac/acilis_uret.py            → data/acilis_siluet.js VERİ bloğu + img/acilis/portreler.jpg
#   py arac/acilis_uret.py --galeri <yol.html>   → bütün silüetleri gözle denetim sayfası
# Kurucu kod (data/acilis_siluet.js içindeki IIFE) elle yazılmıştır; bu betik ona DOKUNMAZ.
#
# Kaynaklar (künye: img/acilis/KAYNAK.md):
#   · bugünkü devletler: veri-kaynak/ne_10m_admin_0_countries.geojson (Natural Earth, kamu malı)
#   · tarihî devletler: A. Ourednik, *historical-basemaps* (GPL-3.0),
#     github.com/aourednik/historical-basemaps — yıl dilimleri veri-kaynak/historical-basemaps/
#     altına İNDİRİLİR (depoda taşınmaz, .gitignore). Atlasın KENDİ gövdeleri kullanılmaz:
#     29 Eyl perdesinde atlastan alınan imparatorluklar kırık/eksik çıktı (Emre, 17 Kas).
#   · portreler: Wikimedia Commons (kamu malı + CC BY-SA), veri-kaynak/acilis-portre/ önbelleği.
#   · amblemler: Wikimedia Commons (bayrak/arma/tuğra), veri-kaynak/acilis-amblem/ önbelleği
#     → img/acilis/amblemler.webp (saydam tabaka).
# Silüetler SÜS'tür, ölçü değildir: etiketteki yıl = kullanılan veri diliminin yılı.
import sys, os, json, math, re, time, urllib.request, html
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, Polygon, box
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "acilis_siluet.js")
HB = os.path.join(KOK, "veri-kaynak", "historical-basemaps")
PR = os.path.join(KOK, "veri-kaynak", "acilis-portre")
SPRITE = os.path.join(KOK, "img", "acilis", "portreler.webp")
HB_URL = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_%s.geojson"
UA = {"User-Agent": "tarih-atlasi-acilis/1.0 (egitim amacli statik site)"}

# ── PORTRELER ────────────────────────────────────────────────────────────────
# (anahtar, ekranda ad, Commons dosyası, lisans, eser sahibi (CC için), kırpma)
# kırpma = (yüz merkezi x 0-10 · y 0-10 [görüntü ızgarası], kare kenarı / genişlik)
PORTRE = [
    ("ataturk",   "Atatürk",            "Ataturk1930s.jpg", "Kamu malı", "", (5.5, 2.5, .45)),
    ("fatih",     "Fatih Sultan Mehmed", "Bellini,_Gentile_-_Sultan_Mehmet_II.jpg", "Kamu malı", "Gentile Bellini", (4.5, 3.5, .42)),
    ("kanuni",    "Kanunî Sultan Süleyman", "EmperorSuleiman.jpg", "Kamu malı", "Tiziano çevresi", (4.4, 3.7, .45)),
    ("victoria",  "Kraliçe Victoria",   "Queen_Victoria_by_Bassano.jpg", "Kamu malı", "Alexander Bassano", (5.3, 3.6, .5)),
    ("elizabeth", "I. Elizabeth",       "Darnley_stage_3.jpg", "Kamu malı", "", (4.6, 1.7, .33)),
    ("napolyon",  "Napolyon",           "Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg", "Kamu malı", "Jacques-Louis David", (5.05, 1.6, .22)),
    ("louis14",   "XIV. Louis",         "Louis_XIV_of_France.jpg", "Kamu malı", "Hyacinthe Rigaud", (4.6, 2.65, .16)),
    ("felipe2",   "II. Felipe",         "Portrait_of_Philip_II_of_Spain_by_Sofonisba_Anguissola_-_002b.jpg", "Kamu malı", "Sofonisba Anguissola", (5.2, 2.5, .4)),
    ("isabel",    "I. Isabel",          "IsabellaofCastile03.jpg", "Kamu malı", "", (5.0, 2.8, .45)),
    ("bismarck",  "Bismarck",           "Otto_von_Bismarck_1885_(cropped).jpg", "Kamu malı", "", (4.8, 2.2, .45)),
    ("friedrich", "Büyük Friedrich",    "Friedrich_der_Große_-_Johann_Georg_Ziesenis_-_Google_Cultural_Institute_(cropped_2).jpg", "Kamu malı", "Johann Georg Ziesenis", (5.0, 2.0, .3)),
    ("garibaldi", "Garibaldi",          "Giuseppe_Garibaldi_1861.jpg", "Kamu malı", "", (4.5, 1.7, .35)),
    ("leonardo",  "Leonardo da Vinci",  "Francesco_Melzi_-_Portrait_of_Leonardo_(colour_correction).png", "Kamu malı", "Francesco Melzi", (2.8, 3.3, .6)),
    ("petro",     "I. Petro",           "Inconnu_d'après_J.-M._Nattier,_Portrait_de_Pierre_Ier_(musée_de_l’Ermitage).jpg", "Kamu malı", "J.-M. Nattier ardılı", (5.3, 1.8, .3)),
    ("katerina",  "II. Katerina",       "Catherine_II_after_Roslin,_Rokotov_(1780s,_Kunsthistorisches_Museum).jpg", "Kamu malı", "Roslin ardılı", (5.0, 2.3, .4)),
    ("qin",       "Qin Shi Huang",      "QinShiHuang19century.jpg", "Kamu malı", "", (4.5, 4.4, .5)),
    ("ekber",     "Ekber Şah",          "Govardhan._Akbar_With_Lion_and_Calf_ca._1630,_Metmuseum_(cropped).jpg", "Kamu malı", "Govardhan", (5.0, 1.3, .25)),
    ("gandi",     "Gandi",              "Mahatma-Gandhi,_studio,_1931.jpg", "Kamu malı", "Elliott & Fry", (5.0, 1.5, .4)),
    ("ramses",    "II. Ramses",         "Ramses_II_British_Museum.jpg", "CC BY-SA 3.0", "Pbuergler", (5.0, 3.0, .45)),
    ("kleopatra", "Kleopatra",          "Kleopatra-VII.-Altes-Museum-Berlin1.jpg", "Kamu malı", "Louis le Grand", (6.0, 4.2, .6)),
    ("washington", "Washington",        "Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg", "Kamu malı", "Gilbert Stuart", (4.7, 2.8, .4)),
    ("lincoln",   "Lincoln",            "Abraham_Lincoln_O-77_matte_collodion_print.jpg", "Kamu malı", "Alexander Gardner", (5.0, 2.3, .45)),
    ("juarez",    "Benito Juárez",      "Photograph_of_Benito_Juarez.jpg", "Kamu malı", "", (4.8, 2.3, .45)),
    ("zapata",    "Emiliano Zapata",    "Emiliano_Zapata4.jpg", "Kamu malı", "", (5.0, 2.6, .55)),
    ("ieyasu",    "Tokugawa Ieyasu",    "Tokugawa_Ieyasu2.JPG", "Kamu malı", "", (4.6, 4.2, .25)),
    ("nobunaga",  "Oda Nobunaga",       "Odanobunaga.jpg", "Kamu malı", "Kanō Sōshū", (5.0, 2.2, .25)),
    ("pedro2",    "II. Pedro",          "Pedro_II_of_Brazil_-_Brady-Handy.jpg", "Kamu malı", "", (4.8, 2.2, .4)),
    ("sezar",     "Jül Sezar",          "Retrato_de_Julio_César_(26724093101)_(cropped).jpg", "Kamu malı", "", (5.0, 3.8, .6)),
    ("augustus",  "Augustus",           "Augustus_of_Prima_Porta.jpg", "CC BY-SA 4.0", "Justin Benttinen", (5.6, 1.4, .2)),
    ("traianus",  "Traianus",           "Traianus_Glyptothek_Munich_72.jpg", "Kamu malı", "", (4.8, 2.2, .5)),
    ("hadrianus", "Hadrianus",          "München_SMAEK_2019-03-23n.jpg", "CC BY-SA 4.0", "Djehouty", (4.8, 2.6, .55)),
    ("marcus",    "Marcus Aurelius",    "MSR-ra-61-b-1-DM.jpg", "CC BY-SA 4.0", "Daniel Martin", (5.0, 1.8, .45)),
    ("konstantin", "Büyük Konstantin",  "Statua_di_Costantino_ai_musei_capitolini.jpg", "CC BY-SA 4.0", "Merulana", (5.0, 2.6, .55)),
    ("justinianus", "Justinianus",      "Mosaic_of_Justinianus_I_-_Basilica_San_Vitale_(Ravenna).jpg", "CC BY-SA 4.0", "Petar Milošević", (4.5, 3.2, .5)),
    ("theodora",  "Theodora",           "Theodora_mosaic_-_Basilica_San_Vitale_(Ravenna)_v2.jpg", "CC BY-SA 4.0", "Petar Milošević", (4.5, 2.8, .45)),
    ("iskender",  "Büyük İskender",     "Alexander_Mosaic_detail_of_Alexander_the_Great_(3x4_cropped).jpg", "Kamu malı", "", (4.6, 2.6, .55)),
    ("cengiz",    "Cengiz Han",         "YuanEmperorAlbumGenghisPortrait.jpg", "Kamu malı", "", (4.8, 4.0, .45)),
    ("kubilay",   "Kubilay Han",        "YuanEmperorAlbumKhubilaiPortrait.jpg", "Kamu malı", "", (4.8, 4.3, .45)),
    # Emre, 17 Kas: milletlerden 2-3'er kişi
    ("shakespeare", "Shakespeare",      "Shakespeare.jpg", "Kamu malı", "John Taylor (atf.)", (5.0, 3.4, .55)),
    ("jeanne",    "Jeanne d'Arc",       "Ingres coronation charles vii.jpg", "Kamu malı", "Jean-Auguste-Dominique Ingres", (4.4, 1.6, .2)),
    ("vasco",     "Vasco da Gama",      "Vasco da Gama - 1838.png", "Kamu malı", "António Manuel da Fonseca", (3.9, 1.8, .36)),
    ("henrique",  "Denizci Henrique",   "Henry the Navigator1.jpg", "Kamu malı", "Nuno Gonçalves", (5.0, 5.0, .55)),
    ("kangxi",    "Kangxi",             "Portrait of the Kangxi Emperor in Court Dress.jpg", "Kamu malı", "Qing saray ressamı", (5.0, 1.5, .22)),
    ("abbas",     "I. Şah Abbas",       "Shah abbas I by Bishn Das.jpg", "Kamu malı", "Bişan Das", (4.3, 2.5, .16)),
    ("ismail",    "Şah İsmail",         'Portrait of Shah Ismail I. Inscribed "Ismael Sophy Rex Pers". Painted by Cristofano dell\'Altissimo, dated 1552-1568.jpg', "Kamu malı", "Cristofano dell'Altissimo", (4.2, 5.0, .55)),
    # Emre, 17 Kas: dinî şahsiyetler. Hz. Muhammed tasvir edilmez → adı hat ile (kırpma None = tamamı)
    ("muhammed",  "Hz. Muhammed",       "Muhammad (name).png", "CC BY 3.0", "Morgan Phoenix", None),
    ("isa",       "Hz. İsa",            "Christ Pantocrator Deesis mosaic Hagia Sophia.jpg", "Kamu malı", "Ayasofya Deesis mozaiği", (4.3, 2.0, .3)),
    ("musa",      "Hz. Musa",           "Moses Icon Sinai 13th century detail.jpg", "Kamu malı", "Sina, Ayia Ekaterini ikonu (13. yy)", (5.0, 3.6, .5)),
    ("buda",      "Buda",               "Gandhara Buddha (tnm).jpeg", "Kamu malı", "Gandhara heykeli (Tokyo Ulusal Müzesi)", (4.9, 1.3, .2)),
    ("konfucyus", "Konfüçyüs",          "Confucius Tang Dynasty.jpg", "Kamu malı", "Wu Daozi ardılı taş baskı", (4.5, 1.5, .36)),
    ("luther",    "Martin Luther",      "Lucas Cranach d.Ä. - Martin Luther, 1528 (Veste Coburg).jpg", "Kamu malı", "Lucas Cranach (Yaşlı)", (5.6, 3.4, .55)),
    # Tarih duvarı (Emre, 17 Kas): milletlerin önemli kişileri — Hart, *The 100* yardımcı referans
    ("mariaterezya", "Maria Theresia",  "Kaiserin Maria Theresia (HRR).jpg", "Kamu malı", "Martin van Meytens", (5.7, 2.6, .25)),
    ("aristoteles", "Aristoteles",      "Aristotle Altemps Inv8575.jpg", "Kamu malı", "Lysippos ardılı", (5.0, 4.0, .55)),
    ("kopernik",  "Kopernik",           "Nikolaus Kopernikus.jpg", "Kamu malı", "Toruń portresi", (4.6, 4.0, .5)),
    ("abdulhamid2", "II. Abdülhamid",   "Sultan Abdul Hamid II of the Ottoman Empire.jpg", "Kamu malı", "", (5.0, 1.6, .25)),
    ("osmangazi", "Osman Gazi",         "Osman Gazi2.jpg", "Kamu malı", "Kapıdağlı Konstantin", (5.1, 2.4, .28)),
    ("yavuz",     "Yavuz Sultan Selim", "Yavuz Sultan Selim Han.jpg", "Kamu malı", "Kapıdağlı Konstantin", (4.8, 2.6, .3)),
    ("selahaddin", "Selahaddin Eyyûbî", "Cristofano dell'Altissimo Saladin, Sultan von Aegypten.jpg", "Kamu malı", "Cristofano dell'Altissimo", (5.4, 4.6, .45)),
    ("tutankamon", "Tutankamon maskesi", "CairoEgMuseumTaaMaskMostlyPhotographed.jpg", "Kamu malı", "", (4.9, 2.6, .5)),
    ("nefertiti", "Nefertiti",          "Nofretete Neues Museum.jpg", "CC BY-SA 3.0", "Philip Pikart", (4.7, 3.5, .5)),
    ("platon",    "Platon",             "Plato Silanion Musei Capitolini MC1377 (cropped).jpg", "Kamu malı", "", (4.6, 4.2, .7)),
    ("homeros",   "Homeros",            "Homer British Museum.jpg", "Kamu malı", "", (4.9, 4.1, .7)),
    ("michelangelo", "Michelangelo",    "Michelangelo Daniele da Volterra (dettaglio).jpg", "Kamu malı", "Daniele da Volterra", (5.0, 4.3, .55)),
    ("galileo",   "Galileo",            "Justus Sustermans - Portrait of Galileo Galilei (Uffizi).jpg", "Kamu malı", "Justus Sustermans", (4.5, 3.4, .4)),
    ("kolomb",    "Kristof Kolomb",     "Portrait of a Man, Said to be Christopher Columbus.jpg", "Kamu malı", "Sebastiano del Piombo", (5.0, 2.3, .35)),
    ("newton",    "Isaac Newton",       "Portrait of Sir Isaac Newton, 1689 (brightened).jpg", "Kamu malı", "Godfrey Kneller", (5.0, 2.2, .42)),
    ("darwin",    "Charles Darwin",     "Charles Darwin by Julia Margaret Cameron, c. 1868.jpg", "Kamu malı", "Julia Margaret Cameron", (4.0, 2.0, .4)),
    ("sarlman",   "Şarlman",            "Albrecht Dürer - Emperor Charlemagne.jpg", "Kamu malı", "Albrecht Dürer", (5.0, 2.2, .35)),
    ("pasteur",   "Louis Pasteur",      "Louis Pasteur, foto av Paul Nadar, Crisco edit.jpg", "Kamu malı", "Paul Nadar", (4.9, 2.0, .35)),
    ("voltaire",  "Voltaire",           "Atelier de Nicolas de Largillière, portrait de Voltaire, détail (musée Carnavalet) -002.jpg", "Kamu malı", "Largillière atölyesi", (4.7, 3.6, .5)),
    ("descartes", "Descartes",          "Frans Hals, Portrait of René Descartes.jpg", "Kamu malı", "Frans Hals", (4.6, 3.4, .5)),
    ("gutenberg", "Gutenberg",          "Johannes Gutenberg.jpg", "Kamu malı", "", (5.4, 2.4, .45)),
    ("beethoven", "Beethoven",          "Beethoven.jpg", "Kamu malı", "Joseph Karl Stieler", (4.5, 2.8, .45)),
    ("bach",      "Bach",               "Johann Sebastian Bach.jpg", "Kamu malı", "Elias Gottlob Haussmann", (4.4, 2.4, .42)),
    ("mozart",    "Mozart",             "Barbara Krafft - Porträt Wolfgang Amadeus Mozart (1819).jpg", "Kamu malı", "Barbara Krafft", (5.2, 3.4, .45)),
    ("tolstoy",   "Tolstoy",            "L.N.Tolstoy Prokudin-Gorsky.jpg", "Kamu malı", "Prokudin-Gorski", (5.6, 2.8, .2)),
    ("rembrandt", "Rembrandt",          "Rembrandt van Rijn - Self-Portrait - Google Art Project.jpg", "Kamu malı", "Rembrandt (otoportre)", (4.5, 2.9, .4)),
    ("jefferson", "Jefferson",          "Official Presidential portrait of Thomas Jefferson (by Rembrandt Peale, 1800).jpg", "Kamu malı", "Rembrandt Peale", (5.2, 3.0, .4)),
    ("edison",    "Edison",             "Thomas Edison2.jpg", "Kamu malı", "", (5.0, 1.6, .3)),
    ("meiji",     "İmparator Meiji",    "Mutsuhito-Emperor-Meiji-1873.png", "Kamu malı", "Uchida Kuichi", (5.8, 2.2, .15)),
    ("gustavadolf", "Gustav Adolf",     "Attributed to Jacob Hoefnagel - Gustavus Adolphus, King of Sweden 1611-1632 - Google Art Project.jpg", "Kamu malı", "Jacob Hoefnagel (atf.)", (4.6, 2.8, .45)),
    ("hannibal",  "Hannibal",           "Hannibal Barca bust from Capua photo.jpg", "Kamu malı", "", (5.0, 2.2, .45)),
    ("mansamusa", "Mansa Musa",         "Catalan Atlas BNF Sheet 6 Mansa Musa (cropped).jpg", "Kamu malı", "Katalan Atlası (1375)", (5.8, 2.2, .5)),
    ("kossuth",   "Kossuth Lajos",      "Kossuth Lajos Barabás.jpg", "Kamu malı", "Barabás Miklós", (4.9, 2.8, .45)),
    ("sanmartin", "San Martín",         "José de San Martín (retrato, c.1828).jpg", "Kamu malı", "", (5.6, 2.8, .45)),
    ("bolivar",   "Simón Bolívar",      "José Gil de Castro - Simón Bolívar - Google Art Project.jpg", "Kamu malı", "José Gil de Castro", (5.4, 2.6, .45)),
    ("abdulkadir", "Emir Abdülkadir",   "Abd al-Qadir.jpg", "Kamu malı", "Étienne Carjat", (5.2, 3.0, .45)),
    # 18-19 Kas (Emre: "siyasi liderleri de indir; Timur, Babür Şah, Şah Cihan, Lao Tzu, II. Menelik")
    # — YALNIZ SONA EKLE: --tabaka-koru hücreleri sıra numarasıyla taşır.
    ("hitler",    "Hitler",             "Bundesarchiv Bild 183-S33882, Adolf Hitler retouched.jpg", "CC BY-SA 3.0 de", "Bundesarchiv", (5.6, 1.6, .28)),
    ("stalin",    "Stalin",             "Joseph Stalin, circa 1942 (cropped).jpg", "Kamu malı", "", (5.0, 3.0, .45)),
    ("lenin",     "Lenin",              "Lenin in 1920 (3x4 cropped).jpg", "Kamu malı", "", (5.0, 3.0, .45)),
    ("mao",       "Mao Zedong",         "Mao Zedong 1950 Portrait (3x4 cropped).jpg", "Kamu malı", "", (5.0, 3.0, .45)),
    ("marx",      "Karl Marx",          "Karl Marx by John Jabez Edwin Mayall 1875 - Restored & Adjusted (3x4 cropped b).png", "Kamu malı", "J. J. E. Mayall", (5.0, 3.0, .45)),
    ("timur",     "Timur",              "Timur, 1630 artist, India.jpg", "Kamu malı", "", (4.8, 2.9, .22)),
    ("babur",     "Babür Şah",          "Idealized portrait of Babur (1483-1530), painted in 1605-1615 in India (British Museum 1921,1011,0.3).jpg", "Kamu malı", "", (5.0, 3.0, .45)),
    ("sahcihan",  "Şah Cihan",          "\"Shah Jahan on a Terrace, Holding a Pendant Set With His Portrait\", Folio from the Shah Jahan Album MET DT5167.jpg", "CC0", "Chitarman (MET)", (5.5, 3.75, .11)),
    ("laotzu",    "Lao Tzu",            "Lao Tzu - Project Gutenberg eText 15250.jpg", "Kamu malı", "", (5.7, 2.6, .25)),
    ("menelik",   "II. Menelik",        "Negus of ethiopia menelik ii 1 (1).jpg", "CC0", "", (5.4, 4.3, .30)),
]
# ── MİLLETLER (Emre, 17 Kas 2026: "dünya tarihinde en önemli milletler, devletler; her
# birinin en önemli simge, bayrak, harita, kişileri — bugünkü dünyada en çok ülkeye ve
# nüfusa hitap edecek pragmatik bir liste"). SIRA = ÖNEM. Karo anahtarı:
#   h:<harita>  (BUGUN/TARIH anahtarı; bayrağı/simgesi üstünde)   k:<portre>   s:<amblem>
# Her milletin ilk 3 karosu her açılışta aynı sırada; kalanı açılışta karışır (kurucu).
# Kişi seçiminde yardımcı referans: M. H. Hart, *The 100* (1992) — popüler kitap, yalnız
# "kimler etkili" sorusuna yön verir; atlas verisi değildir.
MILLETLER = [  # (ad, boylam, enlem, karolar)
    ("Türk", 35.0, 39.0, ["h:TUR", "h:osm", "k:ataturk", "k:fatih", "k:kanuni", "s:osmarma", "k:abdulhamid2",
                          "h:sel", "k:osmangazi", "k:yavuz", "h:gok", "h:hun", "t:ayasofya",
                          "t:selcuklukartal", "t:gobeklitepe", "t:hititkursu"]),
    ("Roma · İtalya", 12.5, 41.9, ["h:rom", "h:ITA", "k:sezar", "k:augustus", "k:leonardo", "k:michelangelo",
                                   "k:galileo", "k:traianus", "k:hadrianus", "k:marcus", "k:konstantin", "k:garibaldi", "k:kolomb", "t:kolezyum"]),
    ("Arap · İslâm", 39.6, 24.5, ["k:muhammed", "h:SAU", "h:eme", "h:abb", "k:selahaddin", "t:kabe"]),
    ("İngiliz", -1.5, 52.5, ["h:GBR", "h:ing", "k:elizabeth", "k:shakespeare", "k:newton", "k:victoria", "k:darwin"]),
    ("Fransız", 2.3, 47.0, ["h:FRA", "k:napolyon", "h:fra", "k:louis14", "k:jeanne", "h:krl", "k:sarlman",
                            "k:pasteur", "k:voltaire", "k:descartes"]),
    ("Çin", 116.0, 35.0, ["h:CHN", "k:qin", "k:konfucyus", "h:qng", "h:han", "h:tng", "k:kangxi", "k:laotzu", "k:mao", "t:cinseddi"]),
    ("İran", 53.0, 32.5, ["h:IRN", "h:per", "k:ismail", "h:saf", "k:abbas", "s:faravahar", "h:sas"]),
    ("Alman", 10.4, 51.2, ["h:DEU", "h:alm", "k:friedrich", "k:luther", "k:bismarck", "k:gutenberg",
                           "k:beethoven", "k:bach", "k:marx", "k:hitler"]),
    ("Rus", 37.6, 55.7, ["h:RUS", "h:rus", "k:petro", "k:katerina", "h:kie", "k:tolstoy", "k:lenin", "k:stalin"]),
    ("Hint", 78.0, 22.0, ["h:IND", "k:gandi", "h:mau", "k:buda", "h:bab", "k:ekber", "k:babur", "k:sahcihan", "t:tacmahal"]),
    ("Mısır", 31.2, 27.0, ["h:EGY", "h:mis", "k:ramses", "k:kleopatra", "k:tutankamon", "k:nefertiti", "t:piramit"]),
    ("Yunan", 22.0, 39.0, ["h:GRC", "h:isk", "k:iskender", "k:aristoteles", "k:platon", "k:homeros"]),
    ("Moğol", 105.0, 47.0, ["h:mog", "k:cengiz", "s:MNG", "t:mogol", "k:kubilay", "h:alt", "h:tim"]),
    ("Bizans", 29.0, 41.0, ["h:biz", "k:justinianus", "k:isa", "k:theodora"]),
    ("İspanyol", -3.7, 40.4, ["h:ESP", "h:isp", "k:isabel", "k:felipe2"]),
    ("Amerikan", -98.0, 39.0, ["h:USA", "k:washington", "k:lincoln", "k:jefferson", "k:edison"]),
    ("Japon", 138.0, 36.0, ["h:JPN", "k:ieyasu", "s:krizantem", "k:nobunaga", "k:meiji"]),
    ("İbrânî", 33.97, 28.54, ["k:musa"]),
    ("Portekiz", -8.0, 39.6, ["h:por", "k:henrique", "k:vasco"]),
    ("Hollanda", 5.3, 52.1, ["h:hol", "s:NLD", "k:rembrandt"]),
    ("Avusturya", 16.4, 48.2, ["h:avm", "k:mariaterezya", "k:mozart"]),
    ("Leh", 21.0, 52.2, ["h:leh", "k:kopernik", "s:POL"]),
    ("Macar", 19.0, 47.5, ["s:HUN", "t:honfoglalas", "k:kossuth"]),
    ("İsveç", 18.0, 59.3, ["h:isv", "k:gustavadolf"]),
    ("Meksika", -99.1, 19.4, ["h:MEX", "h:azt", "k:juarez", "k:zapata"]),
    ("Brezilya", -47.9, -15.8, ["h:BRA", "k:pedro2"]),
    ("Arjantin", -58.4, -34.6, ["s:ARG", "k:sanmartin", "t:malon"]),
    ("Venezuela · Kolombiya", -66.9, 10.5, ["k:bolivar", "s:VEN", "s:COL", "t:miranda", "t:boyaca"]),
    ("Peru", -72.0, -13.5, ["h:ink", "s:PER", "t:atahualpa"]),
    ("Kanada", -75.7, 45.4, ["s:CAN", "t:jackpine"]),
    ("Kore", 127.0, 37.5, ["s:KOR", "t:inwang"]),
    ("Cezayir", 3.0, 36.7, ["s:DZA", "k:abdulkadir", "t:cezayirli"]),
    ("Habeş", 38.7, 9.0, ["s:ETH", "t:adwa", "k:menelik"]),
    ("Güney Afrika", 28.0, -26.0, ["s:ZAF", "t:pierneef"]),
    ("Kartaca", 10.3, 36.85, ["h:kar", "k:hannibal"]),
    ("Batı Afrika", -8.0, 13.0, ["k:mansamusa", "h:mal", "h:son"]),
    ("Türk dünyası", 69.0, 41.0, ["k:timur", "s:AZE", "s:KAZ", "s:UZB", "s:TKM", "s:KGZ"]),
    ("Güneydoğu Asya", 106.0, 0.0, ["s:IDN", "h:khm", "s:VNM", "s:PHL"]),
    ("Güney Asya", 75.0, 28.0, ["s:PAK", "s:BGD"]),
    ("Nijerya", 7.5, 9.1, ["s:NGA"]),
]
# Millet → ülke kodları (ISO2): ziyaretçinin komşu/rakip milletleri bu kodlarla seçilir
# (data/acilis_ulke.js KOMSU). Ziyaretçinin kendi milletinin satırları dünya sırasından düşer.
MILLET_KOD = {
    "Türk": "TR",
    "Roma · İtalya": "IT",
    "Arap · İslâm": "SA",
    "İngiliz": "GB",
    "Fransız": "FR",
    "Çin": "CN",
    "İran": "IR",
    "Alman": "DE",
    "Rus": "RU",
    "Hint": "IN",
    "Mısır": "EG",
    "Yunan": "GR",
    "Moğol": "MN",
    "Bizans": "GR TR",
    "İspanyol": "ES",
    "Amerikan": "US",
    "Japon": "JP",
    "İbrânî": "IL",
    "Portekiz": "PT",
    "Hollanda": "NL",
    "Avusturya": "AT",
    "Leh": "PL",
    "Macar": "HU",
    "İsveç": "SE",
    "Meksika": "MX",
    "Brezilya": "BR",
    "Arjantin": "AR",
    "Venezuela · Kolombiya": "VE CO",
    "Peru": "PE",
    "Kanada": "CA",
    "Kore": "KR",
    "Cezayir": "DZ",
    "Habeş": "ET",
    "Güney Afrika": "ZA",
    "Kartaca": "TN",
    "Batı Afrika": "ML SN",
    "Türk dünyası": "UZ KZ TM KG AZ",
    "Güneydoğu Asya": "ID VN PH",
    "Güney Asya": "PK BD",
    "Nijerya": "NG",
}

# ── ÖNCE EN POPÜLERLER (Emre, 18-19 Kas: "animasyon en popüler harita, resim, kişi ve
# sembolleri fırlatarak başlasın; site hızlı açılırsa en popülerler gösterilmiş olur").
# Bu karolar bu sırayla İLK fırlar (~2,5 sn); ardından millet turları kalanlarla sürer.
ONCE = ["h:TUR", "k:ataturk", "k:muhammed", "h:osm", "k:fatih", "k:isa", "h:rom", "k:kanuni",
        "k:napolyon", "k:iskender", "k:cengiz", "k:sezar", "k:leonardo", "k:kleopatra", "h:ing",
        "k:musa", "k:buda", "k:konfucyus", "h:mog", "k:shakespeare", "k:newton", "k:gandi",
        "k:washington", "k:victoria", "k:mozart", "k:selahaddin", "h:biz", "k:ramses", "k:kolomb",
        "k:petro", "t:ayasofya", "t:piramit", "t:cinseddi", "t:tacmahal", "t:kolezyum", "t:kabe"]
HUCRE, SUTUN = 120, 8
HUCRE_Y = 160          # dikey 3:4 portre (Emre, 17 Kas: dört köşe resim, tam sığsın)
GENIS = 1.9            # yüz karesinden baş+omuz penceresine büyütme

# ── AMBLEMLER (Emre, 17 Kas: "amblemler, çeşitli tarihî semboller") ─────────────
# Haritayla birlikte fırlar, haritanın köşesine rozet olur. Bugünkü devlet = bayrak;
# tarihî devlet = devrine ait arma/tuğra/sancak. Sonradan uydurulmuş "tarihî bayraklar"
# (Göktürk kurt başı, Moğol, Emevî, Timurlu, Selçuklu, Babür alem) ALINMADI: Commons'taki
# bu çizimler kaynaksız Vikipedi temsilleri (17 Kas taraması). Sade siyah/beyaz sancak
# (Abbâsî, Emevî) tanıtıcı değil, o da yok.
# (öğe anahtarı, ekranda ad, Commons dosyası, lisans, eser sahibi (CC için))
AMBLEM = [
    ("TUR", "Türk bayrağı", "Flag of Turkey.svg", "Kamu malı", ""),
    ("GBR", "Union Jack", "Flag of the United Kingdom.svg", "Kamu malı", ""),
    ("FRA", "Fransa bayrağı", "Flag of France.svg", "Kamu malı", ""),
    ("ESP", "İspanya bayrağı", "Flag of Spain.svg", "Kamu malı", ""),
    ("DEU", "Almanya bayrağı", "Flag of Germany.svg", "Kamu malı", ""),
    ("ITA", "İtalya bayrağı", "Flag of Italy.svg", "Kamu malı", ""),
    ("RUS", "Rusya bayrağı", "Flag of Russia.svg", "Kamu malı", ""),
    ("CHN", "Çin bayrağı", "Flag of the People's Republic of China.svg", "Kamu malı", ""),
    ("IND", "Hindistan bayrağı", "Flag of India.svg", "Kamu malı", ""),
    ("EGY", "Mısır bayrağı", "Flag of Egypt.svg", "Kamu malı", ""),
    ("USA", "ABD bayrağı", "Flag of the United States.svg", "Kamu malı", ""),
    ("MEX", "Meksika bayrağı", "Flag of Mexico.svg", "Kamu malı", ""),
    ("JPN", "Japonya bayrağı", "Flag of Japan.svg", "Kamu malı", ""),
    ("BRA", "Brezilya bayrağı", "Flag of Brazil.svg", "Kamu malı", ""),
    ("osm", "Kanunî'nin tuğrası", "Tughra of Suleiman I the Magnificent.svg", "?", ""),
    ("rom", "SPQR", "SPQR.svg", "Kamu malı", ""),
    ("isk", "Vergina güneşi", "Vergina sun.svg", "Kamu malı", ""),
    ("biz", "Palaiologos çift başlı kartalı", "Palaiologos-Dynasty-Eagle.svg", "Kamu malı", ""),
    ("ing", "Britanya kraliyet arması", "Royal Coat of Arms of the United Kingdom.svg", "CC BY-SA 3.0", "Sodacan"),
    ("per", "Kiros'un sancağı", "Standard of Cyrus the Great (Achaemenid Empire).svg", "Kamu malı", ""),
    ("rus", "Rus İmparatorluğu arması", "Lesser Coat of Arms of Russian Empire.svg", "Kamu malı", ""),
    ("isp", "Burgonya haçı", "Flag of Cross of Burgundy.svg", "Kamu malı", ""),
    ("fra", "Fransa zambakları", "Blason pays fr FranceAncien.svg", "Kamu malı", ""),
    ("qng", "Qing ejder bayrağı", "Flag of China (1889–1912).svg", "?", ""),
    ("alm", "Reichsadler", "Wappen Deutsches Reich - Reichsadler 1889.svg", "Kamu malı", ""),
    ("avm", "Avusturya-Macaristan arması", "Coat of arms of Austria-Hungary (1914).svg", "?", ""),
    ("mis", "Ankh", "Ankh.svg", "Kamu malı", ""),
    ("kar", "Tanit işareti", "Tanit-Symbol.svg", "Kamu malı", ""),
    ("leh", "Lehistan-Litvanya arması", "Coat of Arms of the Polish-Lithuanian Commonwealth.svg", "CC BY-SA 3.0", "Avalokitesvara"),
    ("isv", "İsveç büyük arması", "Great coat of arms of Sweden.svg", "Kamu malı", ""),
    ("por", "Portekiz bayrağı (1707)", "Flag of Portugal (1707).svg", "Kamu malı", ""),
    ("hol", "VOC damgası", "VOC.svg", "Kamu malı", ""),
    ("mau", "Aşoka aslan başlığı", "Emblem of India.svg", "Kamu malı", ""),
    # Tarih duvarı (Emre, 17 Kas): bugünkü harita bayrakları + tek başına simge karoları
    ("GRC", "Yunanistan bayrağı", "Flag of Greece.svg", "Kamu malı", ""),
    ("IRN", "İran bayrağı", "Flag of Iran.svg", "Kamu malı", ""),
    ("SAU", "Suudi Arabistan bayrağı", "Flag of Saudi Arabia.svg", "Kamu malı", ""),
    ("osmarma", "Osmanlı arması", "Coat of arms of the Ottoman Empire (1882–1922).svg", "Kamu malı", ""),
    ("faravahar", "Faravahar", "Faravahar-Gold.svg", "Kamu malı", ""),
    ("krizantem", "Krizantem mührü", "Imperial Seal of Japan.svg", "Kamu malı", ""),
    ("MNG", "Moğolistan", "Flag of Mongolia.svg", "Kamu malı", ""),
    ("NLD", "Hollanda", "Flag of the Netherlands.svg", "Kamu malı", ""),
    ("POL", "Polonya", "Flag of Poland.svg", "Kamu malı", ""),
    ("HUN", "Macaristan", "Flag of Hungary.svg", "Kamu malı", ""),
    ("ARG", "Arjantin", "Flag of Argentina.svg", "Kamu malı", ""),
    ("VEN", "Venezuela", "Flag of Venezuela.svg", "Kamu malı", ""),
    ("COL", "Kolombiya", "Flag of Colombia.svg", "Kamu malı", ""),
    ("PER", "Peru", "Flag of Peru.svg", "Kamu malı", ""),
    ("CAN", "Kanada", "Flag of Canada (Pantone).svg", "Kamu malı", ""),
    ("KOR", "Kore", "Flag of South Korea.svg", "Kamu malı", ""),
    ("DZA", "Cezayir", "Flag of Algeria.svg", "Kamu malı", ""),
    ("ETH", "Habeşistan", "Flag of Ethiopia.svg", "Kamu malı", ""),
    ("ZAF", "Güney Afrika", "Flag of South Africa.svg", "Kamu malı", ""),
    ("AZE", "Azerbaycan", "Flag of Azerbaijan.svg", "Kamu malı", ""),
    ("KAZ", "Kazakistan", "Flag of Kazakhstan.svg", "Kamu malı", ""),
    ("UZB", "Özbekistan", "Flag of Uzbekistan.svg", "Kamu malı", ""),
    ("TKM", "Türkmenistan", "Flag of Turkmenistan.svg", "Kamu malı", ""),
    ("KGZ", "Kırgızistan", "Flag of Kyrgyzstan.svg", "Kamu malı", ""),
    ("IDN", "Endonezya", "Flag of Indonesia.svg", "Kamu malı", ""),
    ("PAK", "Pakistan", "Flag of Pakistan.svg", "Kamu malı", ""),
    ("BGD", "Bangladeş", "Flag of Bangladesh.svg", "Kamu malı", ""),
    ("NGA", "Nijerya", "Flag of Nigeria.svg", "Kamu malı", ""),
    ("VNM", "Vietnam", "Flag of Vietnam.svg", "Kamu malı", ""),
    ("PHL", "Filipinler", "Flag of the Philippines.svg", "Kamu malı", ""),
]
AM = os.path.join(KOK, "veri-kaynak", "acilis-amblem")
# ── ÜNLÜ TABLOLAR (Emre, 17-18 Kas: "harita değil tablo demek istemiştim" — haritası
# olmayan 11 millete "bayrak + kişi + ünlü tablo"). Hepsi Commons; kamu malı (ressamın
# ölümünden 70+ yıl) ya da tablonun fotoğrafı CC BY-SA. Hücre 4:3, altın çerçeve tabakada.
# (anahtar, eser adı, ressam, Commons dosyası, lisans, fotoğraf sahibi (CC için),
#  kırpma (x0, y0, x1, y1 — 0-1 oran; None = ortadan 4:3))
TABLO = [
    ("honfoglalas", "Honfoglalás", "Munkácsy", "MunkácsyHonfoglalásPM.jpg", "Kamu malı", "", None),
    ("mogol", "Moğol süvarileri", "Câmiu't-tevârîh", "Bataille entre mongols & chinois (1211).jpeg", "Kamu malı", "", None),
    ("inwang", "İnwang Dağı", "Jeong Seon", "Inwangjesaekdo.jpg", "Kamu malı", "", None),
    ("atahualpa", "Atahualpa'nın cenazesi", "Luis Montero", "Luis Montero - The Funerals of Inca Atahualpa - Google Art Project.jpg", "Kamu malı", "", None),
    ("malon", "La vuelta del malón", "Della Valle", "Ángel DELLA Valle - La vuelta del malón - Google Art Project (cropped).jpg", "Kamu malı", "", None),
    ("jackpine", "The Jack Pine", "Tom Thomson", "Tom Thomson - The Jack Pine 1916.jpg", "Kamu malı", "", None),
    ("miranda", "Miranda La Carraca'da", "Michelena", "Miranda en la Carraca by Arturo Michelena.jpg", "Kamu malı", "", None),
    ("boyaca", "Boyacá Muharebesi", "Tovar y Tovar", "Batalla de Boyaca de Martin Tovar y Tovar.jpg", "Kamu malı", "", None),
    ("cezayirli", "Cezayirli Kadınlar", "Delacroix", "Eugène Delacroix - Les Femmes d'Alger dans leur appartement, 1834.jpg", "Kamu malı", "", None),
    ("adwa", "Adwa Muharebesi", "Habeş ressam", "Ethiopian painting, Battle of Adwa, 1896.jpg", "CC BY-SA 4.0", "Commons", (.06, .07, .94, .93)),
    ("pierneef", "Kap'ta bir kasaba", "Pierneef", "JH Pierneef - Sleepy town in the Cape 1929.jpg", "Kamu malı", "", None),
    # SİMGE YAPILAR / ESERLER (Emre, 19 Kas: "yukarıda saydığın sembolleri de indir") — gerçek
    # yapı/eser fotoğrafı; ressam alanı BOŞ ⇒ beyaz kartpostal çerçevesi, altında yalnız ad.
    ("ayasofya", "Ayasofya", "", "Hagia Sophia Mars 2013.jpg", "CC BY-SA 3.0", "Arild Vågen", None),
    ("kabe", "Kâbe", "", "The Kaaba during Hajj - edited.jpg", "CC BY-SA 4.0", "Commons", None),
    ("piramit", "Giza piramitleri", "", "All Gizah Pyramids.jpg", "CC BY-SA 2.0", "Ricardo Liberato", None),
    ("cinseddi", "Çin Seddi", "", "20090529 Great Wall 8185.jpg", "CC BY-SA 3.0", "Severin.stalder", None),
    ("tacmahal", "Tac Mahal", "", "Taj Mahal (Edited).jpeg", "CC BY-SA 4.0", "Commons", None),
    ("kolezyum", "Kolezyum", "", "Colosseum in Rome, Italy - April 2007.jpg", "CC BY-SA 2.5", "Diliff", None),
    ("gobeklitepe", "Göbeklitepe", "", "Göbekli Tepe, Urfa.jpg", "CC BY-SA 3.0", "Teomancimit", None),
    ("selcuklukartal", "Selçuklu çift başlı kartalı", "", "Ince Minare Medrese Museum double headed eagle 2855.jpg", "CC BY-SA 4.0", "Commons", None),
    ("hititkursu", "Hitit güneş kursu", "", "Museum of Anatolian Civilizations025 kopie.jpg", "CC BY 2.5", "Commons", None),
]
# ── YUVARLAK LEVHA (Emre, 18 Kas: "Hz. Muhammed'in ismini hat sanatıyla, Ayasofya'daki örneği
# üzerinden yuvarlak gösterimle"). Ayasofya'nın büyük levhası (Kazasker Mustafa İzzet Efendi,
# 19. yy) fotoğraftan alınır. Fotoğraf levhayı yandan ve hafif eğik görür (elips): dış altın
# kenarın 16 noktasına elips uydurulur (cv2.fitEllipse, 18 Kas), afin dönüşümle elips tam
# DAİREYE çevrilir = cepheden görünüm. Portre tabakasındaki hücrenin ÜST KARESİNE yazılır;
# karo yuvarlak gösterilir.
# anahtar → (Commons dosyası, lisans, fotoğraf sahibi,
#            elips (merkez x, merkez y, yatay eksen, dikey eksen — görüntü GENİŞLİĞİNE oran; açı °))
LEVHA = {
    "muhammed": ("Hagia Sophia - Muhammad, Allah, Abu Bakr.jpg", "CC BY-SA 3.0", "Rabe!",
                 (553.6 / 3840, 1635.1 / 3840, 519.4 / 3840, 699.4 / 3840, 2.53)),
}
TB = os.path.join(KOK, "veri-kaynak", "acilis-tablo")
TSPRITE = os.path.join(KOK, "img", "acilis", "tablolar.webp")
TW, TH = 160, 120
# --tabaka-koru: portre ve amblem tabakaları depodakiyle kalır (önbellek bu makinede yoksa
# Commons'tan ~150 görseli yeniden indirmemek için). PORTRE/AMBLEM sırası değişmediyse güvenli.
KORU = "--tabaka-koru" in sys.argv
PORTRE_DEGISTI = True
# --yenile=a,b: koruma kipinde bu anahtarların hücresi önbellekten yeniden çizilir (kırpma değişince)
YENILE = set(next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--yenile=")), "").split(",")) - {""}
ASPRITE = os.path.join(KOK, "img", "acilis", "amblemler.webp")
AHUCRE = 128          # duvarda vitrin büyütmesi (2,3×) bulanık olmasın
# --indirme-yok: önbellekte olmayan amblem indirilmez, karosu atlanır (Commons 429 verirken
# sınama için; yayın üretiminde KULLANILMAZ — eksikler uyarıyla yazılır)
INDIRME_YOK = "--indirme-yok" in sys.argv
ALTIN = {"osm", "mis", "hol", "mau"}   # siyah tek renk çizim → altın
PARSOMEN = {"alm", "rus"}                     # koyu ama renkli → parşömen yuvarlak üstünde

# ── HARİTALAR ────────────────────────────────────────────────────────────────
# Dalga 1: bugünkü devletler (Natural Earth ADM0_A3). Dalga 2: her milletin en bilinen /
# en parlak devrindeki devlet (Emre, 17 Kas: "en şaşalı dönemine ait birer harita").
# SIRA = ÖNEM SIRASI: perde erken kalkarsa kuyruk kesilir. Kurucu, sırayı küreye göre
# yerel olarak (en çok 6 öğe ileriye) karıştırır: o an öne dönen ülke fırlar.
BUGUN = [  # (anahtar, ADM0_A3, ad, renk, kişiler)
    ("TUR", "TUR", "Türkiye",          "#c0392b", ["ataturk"]),
    ("GBR", "GBR", "Birleşik Krallık", "#7e3d8f", ["elizabeth", "shakespeare"]),
    ("FRA", "FRA", "Fransa",           "#2e5aa8", ["napolyon", "jeanne"]),
    ("ESP", "ESP", "İspanya",          "#d4a017", ["isabel"]),
    ("DEU", "DEU", "Almanya",          "#5d6d7e", ["friedrich"]),
    ("ITA", "ITA", "İtalya",           "#2e8b57", ["garibaldi", "leonardo"]),
    ("RUS", "RUS", "Rusya",            "#4f7d4f", ["katerina"]),
    ("CHN", "CHN", "Çin",              "#c8553d", ["qin"]),
    ("IND", "IND", "Hindistan",        "#e07b24", ["gandi"]),
    ("EGY", "EGY", "Mısır",            "#c2a14d", ["kleopatra"]),
    ("USA", "USA", "ABD",              "#3a64b8", ["washington", "lincoln"]),
    ("MEX", "MEX", "Meksika",          "#1f8a70", ["juarez", "zapata"]),
    ("JPN", "JPN", "Japonya",          "#b03a48", ["ieyasu", "nobunaga"]),
    ("BRA", "BRA", "Brezilya",         "#2e8b57", ["pedro2"]),
    ("GRC", "GRC", "Yunanistan",       "#2e6fb5", []),
    ("IRN", "IRN", "İran",             "#1f8a70", []),
    ("SAU", "SAU", "Suudi Arabistan",  "#2f6b3a", []),
]
# (anahtar, ad, dilimler, eşleşme deseni (NAME/SUBJECTO/PARTOF tam eşleşme regex'i),
#  renk, kişiler, dünya zemini mi, fırlama noktası (boylam, enlem) — dünya öğesinde ana yurt)
# Birden çok dilim verilirse EN GENİŞ olanı seçilir.
TARIH = [
    ("osm", "Osmanlı İmparatorluğu", ["1650", "1700"], r"Ottoman Empire", "#8e0b22", ["fatih", "kanuni"], 0, None),
    ("rom", "Roma İmparatorluğu", ["100", "200"], r"Roman Empire", "#a3263a", ["sezar", "augustus", "traianus", "hadrianus", "marcus", "konstantin"], 0, None),
    ("isk", "İskender İmparatorluğu", ["bc323"], r"Empire of Alexander", "#c9a227", ["iskender"], 0, None),
    ("mog", "Moğol İmparatorluğu", ["1279"], r"Mongol Empire", "#6d4c9f", ["cengiz", "kubilay"], 0, None),
    ("biz", "Bizans İmparatorluğu", ["500", "600"], r"Eastern Roman Empire|Byzantine Empire", "#7b2d8e", ["justinianus", "theodora"], 0, None),
    # 1920 diliminde Britanya'nın Afrika sömürgeleri ayrı özne; 1914 dilimi hepsini UK'ye bağlar.
    # Dominyonlar (Kanada, Avustralya, Y. Zelanda, G. Afrika) imparatorluğun parçası sayılır.
    ("ing", "Britanya İmparatorluğu", ["1914"], r"United Kingdom.*|British .*|Canada|Australia|New Zealand|Union of South Africa", "#c0392b", ["victoria"], 1, (-1.5, 52.5)),
    ("per", "Ahameniş (Pers) İmp.", ["bc500"], r"Achaemenid Empire", "#1f8a70", [], 0, None),
    ("rus", "Rus İmparatorluğu", ["1914"], r"Russian Empire|Russia", "#4f7d4f", ["petro"], 0, None),
    ("isp", "İspanyol İmparatorluğu", ["1783"], r"Spain|.*\(Spain\)|Vice-?[Rr]oyalty of .*", "#d4a017", ["felipe2"], 1, (-3.7, 40.4)),
    # 1920 diliminde Cezayir/Tunus/Fas ayrı özne olarak durur; o yıl Fransız idaresinde.
    ("fra", "Fransız Sömürge İmp.", ["1920"], r"France|.*\(France\)|French .*|Algeria|Tunisia|Morocco", "#2e5aa8", ["louis14"], 1, (2.3, 47.0)),
    ("eme", "Emevîler", ["700"], r"Umayyad Caliphate", "#2f6b3a", [], 0, None),
    ("abb", "Abbâsîler", ["800"], r"Abbasid Caliphate", "#1d1d1d", [], 0, None),
    ("sel", "Büyük Selçuklu", ["1100"], r"Seljuk Empire", "#3e7cb1", [], 0, None),
    ("gok", "Göktürk Kağanlığı", ["600"], r"Göktürks", "#2c8fbf", [], 0, None),
    ("bab", "Babür İmparatorluğu", ["1700"], r"Mughal Empire", "#d4a017", ["ekber"], 0, None),
    ("qng", "Qing İmparatorluğu", ["1783", "1800"], r"Qing Empire", "#c9a227", ["kangxi"], 0, None),
    ("han", "Han Hanedanı", ["100"], r"Han", "#c8553d", [], 0, None),
    ("mis", "Eski Mısır (Yeni Krallık)", ["bc1500"], r"Egypt", "#c2a14d", ["ramses"], 0, None),
    ("alm", "Alman İmparatorluğu", ["1914"], r"German .*", "#262626", ["bismarck"], 1, (10.4, 51.2)),
    ("avm", "Avusturya-Macaristan", ["1900"], r"Austria Hungary", "#a8864a", [], 0, None),
    ("kar", "Kartaca", ["bc300", "bc323"], r"Carthaginian Empire", "#7e3d8f", [], 0, None),
    ("ink", "İnka İmparatorluğu", ["1530", "1500"], r"Inca Empire", "#d35400", [], 0, None),
    ("azt", "Aztek İmparatorluğu", ["1500"], r"Aztec Empire", "#16a085", [], 0, None),
    ("tim", "Timurlular", ["1400"], r"Timurid Empire", "#6d4c9f", [], 0, None),
    ("saf", "Safevîler", ["1600", "1530"], r"Safavid Empire", "#1f8a70", ["ismail", "abbas"], 0, None),
    ("alt", "Altın Orda", ["1300"], r"Khanate of the Golden Horde", "#c9a227", [], 0, None),
    ("hun", "Hun İmparatorluğu (Attila)", ["400"], r"Hunnic Empire", "#8b5a2b", [], 0, None),
    ("krl", "Karolenj İmparatorluğu", ["800"], r"Carolingian Empire", "#2e5aa8", [], 0, None),
    ("sas", "Sâsânîler", ["600", "500"], r"Sasanian Empire", "#a3263a", [], 0, None),
    ("mau", "Maurya İmparatorluğu", ["bc300", "bc200"], r"Mauryan Empire", "#e07b24", [], 0, None),
    ("mal", "Mali İmparatorluğu", ["1300"], r"Mali", "#b5651d", [], 0, None),
    ("leh", "Lehistan-Litvanya", ["1600"], r"Poland-Lithuania", "#b03a48", [], 0, None),
    ("isv", "İsveç İmparatorluğu", ["1650"], r"Sweden", "#2e6fb5", [], 0, None),
    ("por", "Portekiz İmparatorluğu", ["1650"], r"Portug.*|.*\(Portugal\)", "#2e8b57", ["henrique", "vasco"], 1, (-8.0, 39.6)),
    ("hol", "Hollanda Sömürge İmp.", ["1700"], r"Dutch .*|.*\(Dutch\)|Netherlands", "#e67e22", [], 1, (5.3, 52.1)),
    ("kie", "Kiev Rus", ["1100"], r"Kievan Rus", "#4f7d4f", [], 0, None),
    ("khm", "Khmer İmparatorluğu", ["1100"], r"Khmer Empire", "#16a085", [], 0, None),
    ("tng", "Tang Hanedanı", ["800"], r"Tang Empire", "#c0392b", [], 0, None),
    ("son", "Songhay İmparatorluğu", ["1530"], r"Songhai", "#b5651d", [], 0, None),
]
# Antimeridyeni aşan gövdeler silüeti ikiye böler: kırpma kutusu
KIRP = {"RUS": (19, 40, 180, 82), "rus": (19, 35, 180, 82), "USA": (-126, 24, -66, 50),
        "FRA": (-6, 41, 10, 52)}


def hb_dilim(d):
    os.makedirs(HB, exist_ok=True)
    p = os.path.join(HB, "world_%s.geojson" % d)
    if not os.path.exists(p):
        print("indiriliyor:", HB_URL % d)
        urllib.request.urlretrieve(HB_URL % d, p)
    return json.load(open(p, encoding="utf-8"))


def halkalar(g):
    """Polygon / MultiPolygon / iç içe GeometryCollection → düz Polygon listesi.
    (Birleşim ve kesişim koleksiyon döndürebilir; düz okununca Osmanlı 1650 ve
    Britanya 1920 parçalarının çoğu sessizce düşüyordu — galeri ölçümü, 17 Kas.)"""
    if isinstance(g, Polygon):
        return [] if g.is_empty else [g]
    out = []
    for p in getattr(g, "geoms", []):
        out.extend(halkalar(p))
    return out


def yaklasik_alan(g):
    c = math.cos(math.radians(g.centroid.y)) if not g.is_empty else 1
    return g.area * c


def yil_etiket(d):
    return ("MÖ " + d[2:]) if d.startswith("bc") else d


def _yol(g, f):
    return "".join("M" + "L".join("%.1f %.1f" % f(x, y) for x, y in p.exterior.coords) + "Z" for p in halkalar(g))


def yol_uret(g, anakara_esik, zemin=None):
    """100x100 kutuya, küçük adacıklar atılır (ARAYUZ-0077 yöntemi).
    zemin verilirse (tarihî devletler): şekil kare bir çerçevede ORTALANIR ve çerçeveye
    düşen kara sönük zemin olarak ayrıca döner — çok parçalı imparatorluk (Osmanlı,
    Bizans, Roma) yalnız silüetken tanınmıyordu; Akdeniz'i görünce tanınıyor."""
    ps = halkalar(g)
    en = max(p.area for p in ps)
    g = unary_union([p for p in ps if p.area >= en * anakara_esik])
    x0, y0, x1, y1 = g.bounds
    k = math.cos(math.radians((y0 + y1) / 2))
    w, h = (x1 - x0) * k, (y1 - y0)
    tol = max(w, h) * 0.008 / max(k, 0.2)
    if zemin is None:
        s = 96.0 / max(w, h)
        ox, oy = (100 - w * s) / 2, 99 - h * s
        return _yol(g.simplify(tol, preserve_topology=True),
                    lambda x, y: (ox + (x - x0) * k * s, oy + (y1 - y) * s)), ""
    kenar = max(w, h) * 1.18                      # projeksiyonlu birimde kare çerçeve
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    bx0, bx1 = mx - kenar / 2 / k, mx + kenar / 2 / k
    by0, by1 = my - kenar / 2, my + kenar / 2
    s = 100.0 / kenar
    f = lambda x, y: ((x - bx0) * k * s, (by1 - y) * s)
    z = zemin.intersection(box(bx0, by0, bx1, by1)).simplify(tol * 1.5, preserve_topology=True)
    z = unary_union([p for p in halkalar(z) if p.area * k * s * s > 0.6])   # < ~0,6 birim² ada atılır
    return _yol(g.simplify(tol, preserve_topology=True), f), _yol(z, f)


def dunya_yolu(g, esik=0.3):
    """Eşdikdörtgen 360x180 — dünya zemini üstüne biner."""
    g = g.simplify(0.4, preserve_topology=True)
    return "".join("M" + "L".join("%.0f %.0f" % (x + 180, 90 - y) for x, y in p.exterior.coords) + "Z"
                   for p in halkalar(g) if p.area >= esik)


def kure_yolu(g):
    """Küre dokusu: boylam doğrusal, enlem sin(φ) — kürede kutuplar doğal sıkışır."""
    d = []
    for p in halkalar(g):
        if p.area < 4:
            continue
        d.append("M" + "L".join("%.1f %.1f" % (x + 180, 90 - 90 * math.sin(math.radians(y)))
                                for x, y in p.exterior.coords) + "Z")
    return "".join(d)


def tarih_govde(desen, dilimler):
    rx = re.compile(r"^(?:%s)$" % desen)
    en, sec = None, None
    for d in dilimler:
        G = hb_dilim(d)
        ps = []
        for f in G["features"]:
            p = f["properties"]
            if any(p.get(k) and rx.match(str(p[k]).strip()) for k in ("NAME", "SUBJECTO", "PARTOF")):
                if f.get("geometry"):
                    g = shape(f["geometry"]).buffer(0)
                    if not g.is_empty:
                        ps.append(g)
        if not ps:
            print("  !! %s diliminde eşleşme yok: %s" % (d, desen))
            continue
        g = unary_union(ps)
        if en is None or yaklasik_alan(g) > yaklasik_alan(en):
            en, sec = g, d
    if en is None:
        raise SystemExit("gövde bulunamadı: %s %s" % (desen, dilimler))
    return en, sec


def firlama_noktasi(g):
    ps = halkalar(g)
    p = max(ps, key=lambda q: q.area)
    r = p.representative_point()
    return round(r.x, 1), round(r.y, 1)


def portreler():
    """Commons'tan indirir (önbellek), yüzü kırpar, tek JPEG tabakası yazar."""
    from PIL import Image
    import urllib.parse
    os.makedirs(PR, exist_ok=True)
    os.makedirs(os.path.dirname(SPRITE), exist_ok=True)
    n = len(PORTRE)
    tab = Image.new("RGB", (SUTUN * HUCRE, ((n + SUTUN - 1) // SUTUN) * HUCRE_Y), (24, 24, 24))
    # --tabaka-koru: ARTIMLI — depodaki tabakada dolu hücre aynen taşınır (--yenile= ile adı
    # verilen hariç); boş ya da yeni hücre indirilip çizilir. (PORTRE yalnız SONA eklenmeli.)
    eski = Image.open(SPRITE).convert("RGB") if KORU and os.path.exists(SPRITE) else None
    korunan, eksik = 0, set()
    for i, (k, ad, dosya, lis, eser, kirp) in enumerate(PORTRE):
        p = os.path.join(PR, k + ".jpg")
        hx, hy = (i % SUTUN) * HUCRE, (i // SUTUN) * HUCRE_Y
        if eski is not None and k not in YENILE and hy + HUCRE_Y <= eski.height:
            hucre = eski.crop((hx, hy, hx + HUCRE, hy + HUCRE_Y))
            # boş hücre düz (24,24,24); WebP komşudan kırıntı taşır (ölçüldü: en çok 77) —
            # tepe değeri değil ortalama + sapma bakılır
            from PIL import ImageStat
            st = ImageStat.Stat(hucre)
            if max(st.mean) > 40 or max(st.stddev) > 12:
                tab.paste(hucre, (hx, hy))
                korunan += 1
                continue
        if not os.path.exists(p):
            try:
                # yüz küçükse (minyatür) büyük küçük resim iste, yoksa kırpma bulanık
                commons_indir(dosya, p, 500 if (kirp is None or kirp[2] >= .15) else 1280)
            except urllib.error.HTTPError as e:
                # Asıl görsel istenen genişlikten küçükse Commons asılı verir; asıl dosya 429'a
                # takılıyor (Menelik, 19 Kas) — hazır 330 px basamağı iniyor.
                try:
                    commons_indir(dosya, p, 330)
                except urllib.error.HTTPError:   # yine olmazsa: hücre boş, karo atlanır
                    print("UYARI portre inmedi (%s): %s" % (e.code, k))
                    eksik.add(k)
                    continue
            print("portre indirildi:", k)
            time.sleep(2)   # Commons art arda istekte 429 veriyor (17 Kas, ölçüldü)
        im = Image.open(p).convert("RGB")
        W, H = im.size
        if kirp is None:   # hat levhası: tamamı parşömen üstünde, kenar boşluklu
            from PIL import ImageOps
            g = ImageOps.invert(im.convert("L"))
            bb = g.point(lambda v: 255 if v > 40 else 0).getbbox() or (0, 0, W, H)
            yazi = im.crop(bb)
            pay = int(HUCRE * 0.05)
            yazi.thumbnail((HUCRE - 2 * pay, HUCRE_Y - 2 * pay), Image.LANCZOS)
            # mürekkep (koyu) → koyu kahve, kâğıt → parşömen
            m = ImageOps.invert(yazi.convert("L"))
            c = Image.new("RGB", (HUCRE, HUCRE_Y), (236, 224, 196))
            c.paste(Image.new("RGB", yazi.size, (70, 40, 20)), ((HUCRE - yazi.width) // 2, (HUCRE_Y - yazi.height) // 2), m)
            tab.paste(c, ((i % SUTUN) * HUCRE, (i // SUTUN) * HUCRE_Y))
            continue
        cx, cy, s = kirp
        # Emre, 17 Kas: portre çerçeveye TAM sığsın, yarım yüz olmasın. Kırpma verisi yüzün
        # karesidir; pencere BAŞ + OMUZ olacak kadar genişletilir (dikey 3:4), yüz üst
        # üçte birde kalır, pencere resmin dışına taşmaz (kayar; sığmazsa oranı koruyup küçülür).
        x, y = cx / 10 * W, cy / 10 * H
        gw = s * W * GENIS
        gh = gw * HUCRE_Y / HUCRE
        if gw > W:
            gw, gh = W, W * HUCRE_Y / HUCRE
        if gh > H:
            gh, gw = H, H * HUCRE / HUCRE_Y
        x0 = min(max(x - gw / 2, 0), W - gw)
        y0 = min(max(y - gh * 0.40, 0), H - gh)
        c = im.crop((int(x0), int(y0), int(x0 + gw), int(y0 + gh))).resize((HUCRE, HUCRE_Y), Image.LANCZOS)
        tab.paste(c, ((i % SUTUN) * HUCRE, (i // SUTUN) * HUCRE_Y))
    global PORTRE_DEGISTI
    PORTRE_DEGISTI = not (eski is not None and korunan == n - len(eksik) and eski.size == tab.size)
    if not PORTRE_DEGISTI:   # hiçbir hücre değişmedi: yeniden sıkıştırma (kalite kaybı) yok
        print("portre tabakası DEĞİŞMEDİ (%d yüz) — dosyaya dokunulmadı" % korunan)
        return eksik
    tab.save(SPRITE, "WEBP", quality=74, method=6)   # 3:4 · 120×160 (vitrinde 2,3× büyür)
    print("portre tabakası: %d yüz (%d korundu), %d B" % (n - len(eksik), korunan, os.path.getsize(SPRITE)))
    return eksik


def amblemler():
    """Commons'un PNG çizimini indirir (önbellek), kareye ortalar, tek saydam WebP tabakası yazar.
    Lisansı Commons'tan okur ve listedekiyle karşılaştırır ('?' = henüz okunmadı)."""
    from PIL import Image
    import urllib.parse
    n = len(AMBLEM)
    eksik = set()
    os.makedirs(AM, exist_ok=True)
    tab = Image.new("RGBA", (SUTUN * AHUCRE, ((n + SUTUN - 1) // SUTUN) * AHUCRE), (0, 0, 0, 0))
    # --tabaka-koru: ARTIMLI (portreler() gibi) — dolu hücre taşınır, boş/yeni hücre indirilir.
    eski = Image.open(ASPRITE).convert("RGBA") if KORU and os.path.exists(ASPRITE) else None
    korunan = 0
    for i, (k, ad, dosya, lis, eser) in enumerate(AMBLEM):
        # Windows dosya adında büyük/küçük harf ayırmaz: "rus" ile "RUS" aynı dosyaya düşüyordu
        p = os.path.join(AM, k + ("-tarih" if k.islower() else "") + ".png")
        hx, hy = (i % SUTUN) * AHUCRE, (i // SUTUN) * AHUCRE
        if eski is not None and k not in YENILE and hy + AHUCRE <= eski.height:
            hucre = eski.crop((hx, hy, hx + AHUCRE, hy + AHUCRE))
            # komşunun gömülü gölgesi hücreye birkaç soluk piksel taşır (ölçüldü: alfa ≤ 22): boş say
            if hucre.getchannel("A").getextrema()[1] >= 100:
                tab.alpha_composite(hucre, (hx, hy))
                korunan += 1
                continue
        if not os.path.exists(p) and INDIRME_YOK:   # Commons 429 verirken: hücre boş, karo atlanır
            eksik.add(k)
            continue
        if not os.path.exists(p):
            q = urllib.parse.urlencode({"action": "query", "format": "json", "prop": "imageinfo",
                                        "iiprop": "url|extmetadata", "iiurlwidth": 240, "titles": "File:" + dosya})
            for den in range(5):
                try:
                    r = json.load(urllib.request.urlopen(urllib.request.Request(
                        "https://commons.wikimedia.org/w/api.php?" + q, headers=UA), timeout=60))
                    ii = list(r["query"]["pages"].values())[0]["imageinfo"][0]
                    veri = urllib.request.urlopen(urllib.request.Request(ii["thumburl"], headers=UA), timeout=60).read()
                    break
                except urllib.error.HTTPError as e:
                    if e.code != 429:
                        raise
                    time.sleep(15 * (den + 1))
            open(p, "wb").write(veri)
            print("amblem %-4s %s · Commons lisansı: %s" % (k, dosya, ii.get("extmetadata", {}).get("LicenseShortName", {}).get("value")))
            time.sleep(3)
        im = Image.open(p).convert("RGBA")
        bb = im.getbbox()
        if bb:
            im = im.crop(bb)
        # Koyu çizim perdenin koyu zemininde kaybolur (tuğra, ankh, VOC, Reichsadler — 17 Kas
        # önizlemesi): tek renkliyse ALTINA boyanır, renkliyse parşömen yuvarlak üstüne oturur.
        # Liste ELLE: parlaklık eşiği kırmızı bayrakları (Türk, Alman) da yakalıyordu.
        if k in ALTIN or k in PARSOMEN:
            if k in ALTIN:
                altin = Image.new("RGBA", im.size, (232, 197, 106, 255))
                altin.putalpha(im.getchannel("A"))
                im = altin
            else:
                from PIL import ImageDraw
                s = int(max(im.size) * 1.12)
                zem = Image.new("RGBA", (s, s), (0, 0, 0, 0))
                ImageDraw.Draw(zem).ellipse((0, 0, s - 1, s - 1), fill=(236, 224, 196, 255), outline=(201, 162, 39, 255), width=max(2, s // 40))
                zem.alpha_composite(im, ((s - im.width) // 2, (s - im.height) // 2))
                im = zem
        a = AHUCRE - 6
        olc = min(a / im.width, a / im.height)
        im = im.resize((max(1, round(im.width * olc)), max(1, round(im.height * olc))), Image.LANCZOS)
        x0, y0 = (i % SUTUN) * AHUCRE + (AHUCRE - im.width) // 2, (i // SUTUN) * AHUCRE + (AHUCRE - im.height) // 2
        # Gölge tabakaya GÖMÜLÜR: uçan öğede CSS filter her kare yeniden hesaplanıyor (0929 ölçümü)
        from PIL import ImageFilter
        g = Image.new("RGBA", im.size, (0, 0, 0, 0))
        g.putalpha(im.getchannel("A").point(lambda v: v * 0.55))
        gt = Image.new("RGBA", (im.width + 8, im.height + 8), (0, 0, 0, 0))
        gt.alpha_composite(g, (4, 4))
        gt = gt.filter(ImageFilter.GaussianBlur(1.6))
        tab.alpha_composite(gt, (x0 - 3, y0 - 2))
        tab.alpha_composite(im, (x0, y0))
    if eski is not None and korunan == n - len(eksik) and eski.size == tab.size:
        print("amblem tabakası DEĞİŞMEDİ (%d) — dosyaya dokunulmadı" % korunan)
        return eksik
    tab.save(ASPRITE, "WEBP", quality=82, method=6)
    print("amblem tabakası: %d amblem (%d korundu), %d B%s" % (n - len(eksik), korunan, os.path.getsize(ASPRITE),
                                                  (" · EKSİK (atlandı): " + " ".join(sorted(eksik))) if eksik else ""))
    return eksik


def commons_indir(dosya, hedef, genislik):
    """Commons küçük resmini indirir (429'da bekleyip yeniden dener); lisans bilgisini döndürür."""
    import urllib.parse
    q = urllib.parse.urlencode({"action": "query", "format": "json", "prop": "imageinfo",
                                "iiprop": "url|extmetadata", "iiurlwidth": genislik, "titles": "File:" + dosya})
    for den in range(6):
        try:
            r = json.load(urllib.request.urlopen(urllib.request.Request(
                "https://commons.wikimedia.org/w/api.php?" + q, headers=UA), timeout=60))
            ii = list(r["query"]["pages"].values())[0]["imageinfo"][0]
            veri = urllib.request.urlopen(urllib.request.Request(ii.get("thumburl") or ii["url"], headers=UA), timeout=60).read()
            break
        except urllib.error.HTTPError as e:
            if e.code != 429 or den == 5:
                raise
            time.sleep(15 * (den + 1))
    open(hedef, "wb").write(veri)
    em = ii.get("extmetadata", {})
    return em.get("LicenseShortName", {}).get("value"), re.sub("<[^>]+>", "", em.get("Artist", {}).get("value", ""))[:80]


def levhalar():
    """LEVHA'daki kişilerin portre hücresini yuvarlak levhayla yeniden yazar (tabaka yamalanır)."""
    from PIL import Image, ImageDraw
    os.makedirs(PR, exist_ok=True)
    PI = {p[0]: i for i, p in enumerate(PORTRE)}
    tab = Image.open(SPRITE).convert("RGB")
    for k, (dosya, lis, eser, (ex, ey, ea, eb, aci)) in LEVHA.items():
        p = os.path.join(PR, k + "-levha.jpg")
        if not os.path.exists(p):
            l, a = commons_indir(dosya, p, 3840)
            print("levha %s %s · Commons lisansı: %s · %s" % (k, dosya, l, a))
        im = Image.open(p).convert("RGB")
        W = im.width
        S4 = HUCRE * 4   # 4 kat büyük çiz, sonra küçült (kenar yumuşak)
        # çıktı (u, v) → kaynak: elips merkezi + döndürülmüş (eksen/2 · birim daire) — afin
        r, c0 = S4 / 2 - 6, S4 / 2
        ca, sa = math.cos(math.radians(aci)), math.sin(math.radians(aci))
        ax, by = ea * W / 2 / r, eb * W / 2 / r
        A, B, D, E = ca * ax, -sa * by, sa * ax, ca * by
        cx, cy = ex * W, ey * W
        d = im.transform((S4, S4), Image.AFFINE, (A, B, cx - A * c0 - B * c0, D, E, cy - D * c0 - E * c0),
                         resample=Image.BICUBIC)
        m = Image.new("L", (S4, S4), 0)
        ImageDraw.Draw(m).ellipse((6, 6, S4 - 7, S4 - 7), fill=255)
        c = Image.new("RGB", (S4, S4), (24, 24, 24))
        c.paste(d, (0, 0), m)
        c = c.resize((HUCRE, HUCRE), Image.LANCZOS)
        i = PI[k]
        hx, hy = (i % SUTUN) * HUCRE, (i // SUTUN) * HUCRE_Y
        tab.paste(Image.new("RGB", (HUCRE, HUCRE_Y), (24, 24, 24)), (hx, hy))
        tab.paste(c, (hx, hy))
    tab.save(SPRITE, "WEBP", quality=74, method=6)
    print("levha yaması: %s · portre tabakası %d B" % (" ".join(LEVHA), os.path.getsize(SPRITE)))


def tablolar():
    """Ünlü tablolar: 4:3 kırpılır, altın çerçeve tabakaya çizilir, tek WebP."""
    from PIL import Image, ImageDraw
    os.makedirs(TB, exist_ok=True)
    n = len(TABLO)
    tab = Image.new("RGB", (SUTUN * TW, ((n + SUTUN - 1) // SUTUN) * TH), (24, 24, 24))
    eksik = set()
    for i, (k, ad, ressam, dosya, lis, eser, kirp) in enumerate(TABLO):
        p = os.path.join(TB, k + ".jpg")
        if not os.path.exists(p):
            try:
                l, a = commons_indir(dosya, p, 500)   # 500 = Commons'un hazır küçük resim basamağı
            except urllib.error.HTTPError as e:
                print("UYARI tablo/simge inmedi (%s): %s" % (e.code, k))
                eksik.add(k)
                continue
            print("tablo %-11s %s · Commons lisansı: %s · %s" % (k, dosya, l, a))
            time.sleep(3)
        im = Image.open(p).convert("RGB")
        W, H = im.size
        if kirp:
            im = im.crop((int(kirp[0] * W), int(kirp[1] * H), int(kirp[2] * W), int(kirp[3] * H)))
            W, H = im.size
        # ortadan 4:3 (fazlası iki yandan / alt-üstten eşit kesilir)
        if W / H > TW / TH:
            gw = H * TW / TH
            im = im.crop((int((W - gw) / 2), 0, int((W + gw) / 2), H))
        else:
            gh = W * TH / TW
            im = im.crop((0, int((H - gh) / 2), W, int((H + gh) / 2)))
        c = im.resize((TW, TH), Image.LANCZOS)
        d = ImageDraw.Draw(c)   # altın çerçeve: dış koyu, orta altın, iç ince koyu
        if ressam:   # tablo: altın çerçeve
            d.rectangle((0, 0, TW - 1, TH - 1), outline=(92, 66, 18), width=2)
            d.rectangle((2, 2, TW - 3, TH - 3), outline=(212, 172, 76), width=4)
            d.rectangle((6, 6, TW - 7, TH - 7), outline=(120, 88, 30), width=1)
        else:        # yapı/eser fotoğrafı: beyaz kartpostal kenarı
            d.rectangle((0, 0, TW - 1, TH - 1), outline=(243, 238, 226), width=5)
        tab.paste(c, ((i % SUTUN) * TW, (i // SUTUN) * TH))
    tab.save(TSPRITE, "WEBP", quality=78, method=6)
    print("tablo tabakası: %d tablo/simge, %d B" % (n - len(eksik), os.path.getsize(TSPRITE)))
    return eksik


def ozet(yol):
    """Tabaka adresine içerik özeti: düzen değişince (kare → 3:4) eski önbellek yüzleri kaydırmasın."""
    import hashlib
    return hashlib.md5(open(yol, "rb").read()).hexdigest()[:8]


def js(x):
    return json.dumps(x, ensure_ascii=False, separators=(",", ":"))


def main():
    galeri = sys.argv[sys.argv.index("--galeri") + 1] if "--galeri" in sys.argv else None
    PI = {p[0]: i for i, p in enumerate(PORTRE)}
    C = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    NE = {f["properties"]["ADM0_A3"]: f for f in C["features"]}
    L = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    kara_tam = unary_union([shape(f["geometry"]) for f in L["features"]])
    kara_zemin = kara_tam.simplify(0.05, preserve_topology=True)   # tarihî öğe zemini
    kara = kara_tam.simplify(0.9, preserve_topology=True)
    ogeler = []
    for k, iso, ad, renk, kis in BUGUN:
        g = shape(NE[iso]["geometry"])
        if k in KIRP:
            g = g.intersection(box(*KIRP[k]))
        lon, lat = firlama_noktasi(g)
        ogeler.append({"k": k, "ad": ad, "yil": "", "renk": renk, "yol": yol_uret(g, 0.02)[0], "lon": lon, "lat": lat,
                       "dalga": 1, "kisi": [PI[x] for x in kis], "kaynak": "Natural Earth admin_0 " + iso})
    for k, ad, dilim, desen, renk, kis, dunya, nokta in TARIH:
        g, d = tarih_govde(desen, dilim)
        if k in KIRP:
            g = g.intersection(box(*KIRP[k]))
        lon, lat = nokta or firlama_noktasi(g)
        o = {"k": k, "ad": ad, "yil": yil_etiket(d), "renk": renk, "lon": lon, "lat": lat, "dalga": 2,
             "kisi": [PI[x] for x in kis], "kaynak": "historical-basemaps world_%s" % d}
        if dunya:
            o["dunya"] = 1
            o["yol"] = dunya_yolu(g)
        else:
            # Zemin yazılmaz (Emre, 17 Kas: haritalar dörtgen içinde değil); çerçeve oranı
            # (şekil 1,18 kat pay) zeminli üretimle aynı kalsın diye zemin yine hesaplanır.
            o["yol"], zm = yol_uret(g, 0.01, kara_zemin)
            if galeri:
                o["zemin"] = zm
        ogeler.append(o)
        print("%-4s %-28s %-7s %6d B zemin %5d B %s" % (k, ad, o["yil"], len(o["yol"]), len(o.get("zemin", "")), "DÜNYA" if dunya else ""))

    kara_duz = dunya_yolu(kara, 4)       # dünya öğelerinin zemini (eşdikdörtgen)
    kara_kure = kure_yolu(kara)           # küre dokusu (sin φ)
    tur = next(o for o in ogeler if o["k"] == "TUR")
    final = dict(tur, k="final")

    if galeri:
        hucre = []
        for o in ogeler:
            if o.get("dunya"):
                svg = "<svg viewBox='0 0 360 180' width='300'><path d='%s' fill='#3d5163'/><path d='%s' fill='%s' stroke='#fff' stroke-width='.6'/></svg>" % (kara_duz, o["yol"], o["renk"])
            elif o.get("zemin"):
                svg = "<svg viewBox='0 0 100 100' width='170'><rect width='100' height='100' rx='8' fill='#1b3550'/><path d='%s' fill='#3d5163'/><path d='%s' fill='%s' stroke='#fff' stroke-width='.7'/></svg>" % (o["zemin"], o["yol"], o["renk"])
            else:
                svg = "<svg viewBox='0 0 100 100' width='170'><path d='%s' fill='%s' stroke='#fff' stroke-width='1'/></svg>" % (o["yol"], o["renk"])
            hucre.append("<div class=k>%s<b>%s %s</b><br><small>%s</small></div>" % (svg, html.escape(o["ad"]), o["yil"], o["kaynak"]))
        open(galeri, "w", encoding="utf-8").write(
            "<!doctype html><meta charset=utf-8><style>body{background:#14202b;color:#fff;font:11px sans-serif;"
            "display:flex;flex-wrap:wrap;gap:6px;margin:6px}.k{background:#1d2d3b;padding:3px}</style>"
            "<svg viewBox='0 0 360 180' width='600'><rect width='360' height='180' fill='#1d4f7a'/><path d='%s' fill='#8fbf6a'/></svg>" % kara_kure
            + "".join(hucre))
        print("galeri:", galeri)
        return

    eksik_amb = amblemler()
    eksik_p = portreler()
    if PORTRE_DEGISTI:   # levha hücresi yeniden çizilir yalnız tabaka değiştiyse
        levhalar()
    eksik_t = tablolar()
    TI = {t[0]: i for i, t in enumerate(TABLO) if t[0] not in eksik_t}
    PI = {p[0]: i for i, p in enumerate(PORTRE) if p[0] not in eksik_p}
    AI = {a[0]: i for i, a in enumerate(AMBLEM) if a[0] not in eksik_amb}
    for o in ogeler:
        if o["k"] in AI:
            o["amb"] = AI[o["k"]]
    # Tarih duvarı: millet → karolar (h: harita · k: kişi · s: simge)
    H = {o["k"]: o for o in ogeler}
    milletler, kullanilan = [], set()
    yerler = {}   # karo anahtarı → [millet sırası, karo sırası]
    for mad, mlon, mlat, karolar in MILLETLER:
        m = {"ad": mad, "kod": MILLET_KOD[mad].split(), "lon": mlon, "lat": mlat, "o": []}
        for kr in karolar:
            tur, ak = kr.split(":")
            if tur == "h":
                o = H[ak]
                x = {"t": "h", "ad": o["ad"], "yil": o["yil"], "renk": o["renk"], "yol": o["yol"],
                     "lon": round(o["lon"], 2), "lat": round(o["lat"], 2)}
                if o.get("dunya"):
                    x["dunya"] = 1
                if "amb" in o:
                    x["amb"] = o["amb"]
            elif tur == "k":
                if ak not in PI:
                    print("UYARI portresi yok, karo atlandı:", ak)
                    continue
                x = {"t": "k", "i": PI[ak]}
            elif tur == "t":
                if ak not in TI:
                    print("UYARI tablo/simge yok, karo atlandı:", ak)
                    continue
                x = {"t": "t", "i": TI[ak]}
            else:
                if ak not in AI:
                    print("UYARI amblemi yok, karo atlandı:", ak)
                    continue
                x = {"t": "s", "i": AI[ak], "ad": AMBLEM[AI[ak]][1]}
            if kr in kullanilan:
                raise SystemExit("aynı karo iki kez: " + kr)
            kullanilan.add(kr)
            yerler[kr] = [len(milletler), len(m["o"])]
            m["o"].append(x)
        milletler.append(m)
    once = []
    for kr in ONCE:
        if kr in yerler:
            once.append(yerler[kr])
        else:
            print("UYARI ONCE karosu yok (atlandı ya da hiçbir millette değil):", kr)
    bos_k = [p[0] for p in PORTRE if "k:" + p[0] not in kullanilan]
    if bos_k:
        print("UYARI duvarda olmayan portre:", bos_k)
    kisiler = [dict({"ad": p[1]}, **({"yuvarlak": 1} if p[0] in LEVHA else {})) for p in PORTRE]
    blok = ("/* >>> VERI (uretildi: arac/acilis_uret.py) — ELLE DUZENLEME */\n"
            "window.ACILIS_SILUET = {\n"
            "  kure: " + js(kara_kure) + ",\n"
            "  kara: " + js(kara_duz) + ",\n"
            "  portre: " + js({"url": "img/acilis/portreler.webp?v=" + ozet(SPRITE), "hucre": HUCRE, "yuk": HUCRE_Y, "sutun": SUTUN}) + ",\n"
            "  kisiler: " + js(kisiler) + ",\n"
            "  amblem: " + js({"url": "img/acilis/amblemler.webp?v=" + ozet(ASPRITE), "hucre": AHUCRE, "sutun": SUTUN}) + ",\n"
            "  tablo: " + js({"url": "img/acilis/tablolar.webp?v=" + ozet(TSPRITE), "en": TW, "boy": TH, "sutun": SUTUN,
                              "eser": [{"ad": t[1], "ressam": t[2]} for t in TABLO]}) + ",\n"
            "  final: " + js({k: final[k] for k in ("ad", "yil", "renk", "yol")}) + ",\n"
            "  once: " + js(once) + ",\n"
            "  milletler: [\n" + ",\n".join("    " + js(m) for m in milletler) + "\n  ]\n};\n"
            "/* <<< VERI */")
    s = open(CIKTI, encoding="utf-8").read()
    desen = re.compile(r"/\* >>> VERI .*?/\* <<< VERI \*/", re.S)
    if not desen.search(s):
        raise SystemExit("data/acilis_siluet.js'te VERI işaretleri yok")
    s = desen.sub(lambda m: blok, s)
    open(CIKTI, "w", encoding="utf-8", newline="\n").write(s)
    print("%s yazıldı · %d millet · %d karo · %d kişi · %d B" % (CIKTI, len(milletler), sum(len(m["o"]) for m in milletler),
                                                               len(kisiler), len(s.encode("utf-8"))))


if __name__ == "__main__":
    main()

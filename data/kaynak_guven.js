// kaynak_guven.js — KAYNAK GÜVEN SINIFLANDIRMA TABLOSU (TEK DOĞRULUK KAYNAĞI)
//
// KAYNAK-GUVEN-1014 · Emre'nin kuralı (14 Ekim 2026): güvensiz site/kaynaktan
// alınan bilgi güvenli kaynakla teyit edilir; teyit edilemeyen ("güvensiz
// kaynak" damgalı) bilgi SİTEDE KULLANILMAZ.
//
// Okuyanlar: arac/kaynak_guven.py (ölçüm) · js/app.js (sonra, arayüz işi).
// 🔴 index.html'e BU İŞTE EKLENMEDİ — arayüz işi ekler.
//
// BİÇİM: `window.KAYNAK_GUVEN = { … };` arasındaki gövde KATI JSON'dur
// (yorum, sondaki virgül, fonksiyon YOK) — Python `json.loads` ile okur.
// Desenler regex DİZGESİdir; Python `re` ile JS `RegExp` ikisinde de aynı
// anlamı taşıyacak biçimde yazıldı: lookbehind yok, `\b` yalnız ASCII harf
// yanında, Türkçe büyük/küçük harf `[İIi]` gibi açık sınıfla.
// `desen` BÜYÜK/KÜÇÜK HARF DUYARSIZ eşleşir; `desen_duyarli` DUYARLI eşleşir
// (kısaltmalar ve sıradan kelimeyle çakışan yazar adları: "UN", "CUP", "Payne").
//
// SINIFLAMA (parça başına) — arac/kaynak_guven.py `parca_sinifla`:
//   1. Parça, `parcala.ayirici` ile bölünmüş kaynak metninin bir parçasıdır
//      (js/app.js `kaynakcaParcala` ile AYNI bölme).
//   2. Parça `tdv_slug.desen`e TAM uyuyorsa ve slug `tdv_slug.haric`te değilse
//      → TDV (site onu TDV bağına çevirir).
//   3. Aksi hâlde bütün `kaynaklar` desenleri denenir. `genel:true` girdiler
//      (resmî site, üniversite sitesi gibi sınıf kuralları) YALNIZ hiçbir özel
//      girdi tutmadığında sayılır.
//   4. Parçada hem C hem A/B tutarsa parça KARIŞIK'tır ve C sayılır (ör.
//      "Taylor, CUP … (Wikipedia 'Timeline …' üzerinden)" — bilgi Vikipedi'den
//      devşirilmiş, akademik eser teyit edilmemiş). Rapor bunları ayrı sayar.
//   5. Aksi hâlde en iyi kademe: A > B > K > C > Y > N.
//   6. Hiçbiri tutmazsa parça TANINMAYAN'dır.
//
// DAMGA (madde başına) — `damgalar` sırası:
//   kaynak alanı yok/boş → bos · "bulunamadı…" ile başlıyor → bulunamadi ·
//   A var → guvenli · B var → ikincil · tanınmayan ya da K var → taninmayan ·
//   C var → guvensiz (alt neden "C") · yalnız Y/N → guvensiz (alt neden "adsiz").
//   (Emre onayı 14 Ekim 2026: adsız beyan gizlenir, teyide gider.)
//
// TARİH KOŞULU — `yalniz_sonra:"YYYY-MM-DD"` taşıyan girdi, MADDENİN tarihi
//   (`t`) bu günden önceyse ya da tarih okunamıyorsa kendi kademesiyle DEĞİL
//   `once_kademe` ile sayılır. Tarih ISO dizge karşılaştırmasıyla sorulur
//   (yıl 4 haneye tamamlanır; negatif yıl daima "önce"). Örnek: HABER
//   1946-01-01 ve sonrasında B, öncesinde C (Emre onayı 14 Ekim 2026).
window.KAYNAK_GUVEN = {
"surum": "KAYNAK-GUVEN-1014",
"kademeler": {
  "A": {"ad": "Dayanak", "aciklama": "Akademik ansiklopedi, hakemli dergi, üniversite yayını, resmî arşiv, birincil kaynak edisyonu."},
  "B": {"ad": "İkincil saygın", "aciklama": "Ulusal/genel ansiklopediler (Britannica, Larousse…), resmî kurum siteleri, müzeler, saygın derleme başvuru eserleri."},
  "C": {"ad": "Güvensiz", "aciklama": "Vikipedi (bütün dilleri) ve vikiler, forum, blog, içerik çiftliği, popüler tarih, turizm, kişisel derleme siteleri, YZ metni. Teyitsiz C sitede KULLANILMAZ."},
  "K": {"ad": "Kap (içeriğe bağlı)", "aciklama": "Barındırdığı belgeye göre A da C de olabilen depo/arama siteleri (archive.org, researchgate…). Damgada TANINMAYAN sayılır: parça tek tek okunmalı."},
  "Y": {"ad": "Adsız dayanak", "aciklama": "Eser adı vermeyen dayanak beyanı: 'standart akademik kaynak', 'el-kitabi'. Teyit edilebilir bir kaynak göstermez."},
  "N": {"ad": "Not", "aciklama": "Kaynak değil: hassasiyet, doğrulama, gün notu. Damgada yok sayılır."}
},
"damgalar": {
  "guvenli": "En az bir A parçası.",
  "ikincil": "A yok, en az bir B parçası.",
  "taninmayan": "A/B yok; tabloya uymayan (ya da K) parça var — tablo büyütülmeli, parça okunmalı.",
  "guvensiz": "A/B/tanınmayan yok; ya en az bir C parçası (alt neden C) ya da yalnız adsız dayanak/not parçaları (alt neden adsiz). SİTEDE GÖSTERİLMEZ (Emre kuralı 14 Ekim 2026).",
  "bulunamadi": "Kaynak 'bulunamadı…' ile başlıyor (verinin kendi beyanı).",
  "bos": "Kaynak alanı yok ya da boş (VERI-YAPISI: ölçülmemiş, 'kaynaksız' değil)."
},
"parcala": {"ayirici": "\\s+[·+]\\s+|\\s*;\\s+"},
"bulunamadi_desen": "^bulunamad",
"tdv_slug": {"desen": "^([a-z0-9]+(?:-[a-z0-9]+)*(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?)(?:\\s+[—–-]\\s+([\\s\\S]*))?$", "haric": ["el-kitabi"], "url_kalibi": "https://islamansiklopedisi.org.tr/{slug}"},
"kaynaklar": [
  {"kod": "TDV", "ad": "TDV İslâm Ansiklopedisi", "kademe": "A", "desen": ["islamansiklopedisi\\.org\\.tr", "Diyanet Vakf[ıi] [İIi]sl[âa]m Ansiklopedisi", "^[İIi]sl[âa]m Ansiklopedisi", "[^B] [İIi]sl[âa]m Ansiklopedisi"], "desen_duyarli": ["\\bD[İI]A\\b", "\\bTDV\\b"], "url_kalibi": "https://islamansiklopedisi.org.tr/{slug}"},
  {"kod": "MEB-IA", "ad": "MEB İslâm Ansiklopedisi", "kademe": "A", "desen": ["MEB [İIi]sl[âa]m Ansiklopedisi", "[İIi]sl[âa]m Ansiklopedisi \\(MEB\\)"], "desen_duyarli": ["MEB [İI]A\\b"]},
  {"kod": "TTK", "ad": "TTK Belleten ve Türk Tarih Kurumu yayınları", "kademe": "A", "desen": ["belleten\\.gov\\.tr", "\\bBelleten\\b", "T[üu]rk Tarih Kurumu", "ttk\\.gov\\.tr"], "desen_duyarli": ["\\bTTK\\b"]},
  {"kod": "ISAM-OA", "ad": "İSAM / Osmanlı Araştırmaları (Journal of Ottoman Studies)", "kademe": "A", "desen": ["isam\\.org\\.tr", "Osmanl[ıi] Ara[şs]t[ıi]rmalar[ıi]", "Journal of Ottoman Studies"], "desen_duyarli": ["\\b[İI]SAM\\b"]},
  {"kod": "DERGIPARK", "ad": "DergiPark hakemli dergileri", "kademe": "A", "desen": ["dergipark\\.org\\.tr", "DergiPark"]},
  {"kod": "ATATURK-ANS", "ad": "Atatürk Ansiklopedisi", "kademe": "A", "desen": ["ataturkansiklopedisi", "Atat[üu]rk Ansiklopedisi", "atamdergi\\.gov\\.tr", "Atat[üu]rk Ara[şs]t[ıi]rma Merkezi"]},
  {"kod": "DEVLET-ARSIVLERI", "ad": "Devlet Arşivleri yayınları / Osmanlı Arşivi belgeleri", "kademe": "A", "desen": ["devletarsivleri\\.gov\\.tr", "Devlet Ar[şs]ivleri", "Osmanl[ıi] Ar[şs]ivi"], "desen_duyarli": ["\\bBOA\\b"]},
  {"kod": "YOKTEZ", "ad": "YÖK Ulusal Tez Merkezi", "kademe": "B", "desen": ["tez\\.yok\\.gov\\.tr", "Y[ÖO]K (Ulusal )?Tez", "acikbilim\\.yok\\.gov\\.tr"], "not": "Tezler hakemli yayın değildir (Emre'nin listesinde B)."},
  {"kod": "EI", "ad": "Encyclopaedia of Islam (EI1/EI2/EI3, Brill)", "kademe": "A", "desen": ["Encyclop(a|ae|æ)dia of Islam", "\\bEI ?[123]\\b", "\\bEIr?2\\b"], "desen_duyarli": ["\\bEI[²³]"]},
  {"kod": "IRANICA", "ad": "Encyclopaedia Iranica", "kademe": "A", "desen": ["iranicaonline\\.org", "iranica\\.com", "Encyclop(a|ae|æ)dia Iranica", "\\bIranica\\b", "\\bEIr\\b"]},
  {"kod": "BRILL", "ad": "Brill yayınları (referans eserler, monografiler)", "kademe": "A", "desen": ["brill\\.com", "brillonline", "\\bBrill\\b"]},
  {"kod": "CAMBRIDGE", "ad": "Cambridge Histories / Cambridge University Press", "kademe": "A", "desen": ["cambridge\\.org", "Cambridge Histor(y|ies)", "Cambridge \\w+ History", "Cambridge (University|Univ\\.?|U\\.?) ?P(ress|\\.)?", "Cambridge Ancient History", "Cambridge Medieval History", "Cambridge UP"], "desen_duyarli": ["\\bCAH\\b"]},
  {"kod": "OXFORD-ODNB", "ad": "Oxford Dictionary of National Biography", "kademe": "A", "desen": ["oxforddnb", "Oxford Dictionary of National Biography"], "desen_duyarli": ["\\bODNB\\b"]},
  {"kod": "OXFORD-ORE", "ad": "Oxford Research Encyclopedias", "kademe": "A", "desen": ["oxfordre\\.com", "Oxford Research Encyclop(a|ae)dia"]},
  {"kod": "OXFORD-OCD", "ad": "Oxford Classical Dictionary", "kademe": "A", "desen": ["Oxford Classical Dictionary"], "desen_duyarli": ["\\bOCD\\b"]},
  {"kod": "OXFORD-ODB", "ad": "Oxford Dictionary of Byzantium", "kademe": "A", "desen": ["Oxford Dictionary of Byzantium"], "desen_duyarli": ["\\bODB\\b"]},
  {"kod": "OXFORD", "ad": "Oxford University Press yayınları", "kademe": "A", "desen": ["Oxford (University|Univ\\.?|U\\.?) ?P(ress|\\.)?", "academic\\.oup\\.com", "oxfordreference", "oxfordhandbooks", "Oxford Handbook", "Oxford History of", "Oxford UP", "Clarendon( Press)?"]},
  {"kod": "NEW-PAULY", "ad": "Brill's New Pauly / Der Neue Pauly / RE (Pauly-Wissowa)", "kademe": "A", "desen": ["New Pauly", "Neue[rn]? Pauly", "Pauly-Wissowa"]},
  {"kod": "RLA", "ad": "Reallexikon der Assyriologie", "kademe": "A", "desen": ["Reallexikon der Assyriologie", "\\bRlA\\b"]},
  {"kod": "CDLI", "ad": "Cuneiform Digital Library Initiative", "kademe": "A", "desen": ["cdli\\.(ox\\.ac\\.uk|ucla\\.edu|mpiwg-berlin\\.mpg\\.de|earth)"], "desen_duyarli": ["\\bCDLI\\b"]},
  {"kod": "ORACC", "ad": "ORACC (Open Richly Annotated Cuneiform Corpus)", "kademe": "A", "desen": ["oracc"], "desen_duyarli": ["\\bORACC\\b"]},
  {"kod": "PLEIADES", "ad": "Pleiades (antik yer gazetteer'i)", "kademe": "A", "desen": ["pleiades\\.stoa\\.org", "\\bPleiades\\b"]},
  {"kod": "PERSEUS", "ad": "Perseus Digital Library (birincil metin)", "kademe": "A", "desen": ["perseus\\.tufts\\.edu", "\\bPerseus\\b", "perseids\\.org", "scaife\\.perseus"]},
  {"kod": "BOSWORTH", "ad": "C. E. Bosworth, The New Islamic Dynasties", "kademe": "A", "desen": ["Bosworth", "New Islamic Dynasties"], "desen_duyarli": ["\\bNID\\b"]},
  {"kod": "TRUHART", "ad": "Peter Truhart, Regents of Nations", "kademe": "A", "desen": ["Truhart", "Regents of Nations"]},
  {"kod": "SESHAT", "ad": "Seshat: Global History Databank", "kademe": "A", "desen": ["seshat", "\\bSeshat\\b"]},
  {"kod": "BRE", "ad": "Большая российская энциклопедия", "kademe": "B", "desen": ["bigenc\\.ru", "Большая российская энциклопедия", "Bol'?shaya Rossi[iy]skaya", "Great Russian Encyclop(a|ae)dia"], "desen_duyarli": ["\\bBRE\\b"], "not": "Ulusal genel ansiklopedi ⇒ B (Britannica/Larousse ile aynı kural)."},
  {"kod": "BSE", "ad": "Большая советская энциклопедия", "kademe": "B", "desen": ["Большая советская", "Great Soviet Encyclop(a|ae)dia", "\\bБСЭ\\b"], "desen_duyarli": ["\\bBSE\\b"]},
  {"kod": "PSRL", "ad": "Полное собрание русских летописей (ПСРЛ)", "kademe": "A", "desen": ["ПСРЛ", "Полное собрание русских летописей", "Polnoe sobranie russkikh letopisei", "prlib\\.ru"], "desen_duyarli": ["\\bPSRL\\b"], "not": "prlib.ru = Президентская библиотека (dijital birincil belge arşivi)."},
  {"kod": "OBL", "ad": "Österreichisches Biographisches Lexikon", "kademe": "A", "desen": ["biographien\\.ac\\.at", "[ÖO]sterreichisches Biographisches Lexikon"], "desen_duyarli": ["\\b[ÖO]BL\\b"]},
  {"kod": "NDB", "ad": "Neue / Allgemeine Deutsche Biographie", "kademe": "A", "desen": ["deutsche-biographie\\.de", "Neue Deutsche Biographie", "Allgemeine Deutsche Biographie"], "desen_duyarli": ["\\bNDB\\b", "\\bADB\\b"]},
  {"kod": "LEXMA", "ad": "Lexikon des Mittelalters", "kademe": "A", "desen": ["Lexikon des Mittelalters", "\\bLexMA\\b"], "desen_duyarli": ["\\bLMA\\b"]},
  {"kod": "HLS", "ad": "Historisches Lexikon der Schweiz", "kademe": "A", "desen": ["hls-dhs-dss\\.ch", "Historisches Lexikon der Schweiz", "Dictionnaire historique de la Suisse"], "desen_duyarli": ["\\bHLS\\b"]},
  {"kod": "PSB", "ad": "Polski Słownik Biograficzny", "kademe": "A", "desen": ["ipsb\\.nina\\.gov\\.pl", "\\biPSB\\b", "Polski S[łl]ownik Biograficzny"], "desen_duyarli": ["\\bPSB\\b"]},
  {"kod": "PWN", "ad": "Encyklopedia PWN", "kademe": "B", "desen": ["encyklopedia\\.pwn\\.pl", "Encyklopedia PWN"], "desen_duyarli": ["\\bPWN\\b"], "not": "Ulusal genel ansiklopedi ⇒ B."},
  {"kod": "DBI", "ad": "Dizionario Biografico degli Italiani (Treccani)", "kademe": "A", "desen": ["Dizionario[ -]Biografico", "dizionario-biografico"], "desen_duyarli": ["\\bDBI\\b"]},
  {"kod": "TRECCANI", "ad": "Treccani — Enciclopedia Italiana", "kademe": "B", "desen": ["treccani\\.it", "\\bTreccani\\b", "Enciclopedia Italiana"], "not": "Ulusal genel ansiklopedi ⇒ B; aynı sitedeki DBI ayrı girdi (A)."},
  {"kod": "TOUMANOFF", "ad": "Cyril Toumanoff (Kafkas hanedanları)", "kademe": "A", "desen": ["Toumanoff"]},
  {"kod": "HEWSEN", "ad": "Robert H. Hewsen, Armenia: A Historical Atlas", "kademe": "A", "desen": ["Hewsen"]},
  {"kod": "SCHWARTZBERG", "ad": "Schwartzberg, A Historical Atlas of South Asia", "kademe": "A", "desen": ["Schwartzberg", "dsal\\.uchicago\\.edu", "Historical Atlas of South Asia"]},
  {"kod": "CHGIS", "ad": "China Historical GIS", "kademe": "A", "desen": ["China Historical GIS"], "desen_duyarli": ["\\bCHGIS\\b"]},
  {"kod": "KOKUSHI", "ad": "Kokushi Daijiten (国史大辞典)", "kademe": "A", "desen": ["Kokushi Daijiten", "国史大辞典"]},
  {"kod": "EKC", "ad": "Encyclopedia of Korean Culture (AKS)", "kademe": "A", "desen": ["encykorea", "Encyclop(a|ae)dia of Korean Culture", "한국민족문화대백과"]},
  {"kod": "BHO", "ad": "British History Online", "kademe": "A", "desen": ["british-history\\.ac\\.uk", "British History Online"]},
  {"kod": "HBC", "ad": "Handbook of British Chronology", "kademe": "A", "desen": ["Handbook of British Chronology"]},
  {"kod": "PERSEE", "ad": "Persée (hakemli dergi arşivi)", "kademe": "A", "desen": ["persee\\.fr", "\\bPers[ée]e\\b"]},
  {"kod": "CAIRN", "ad": "Cairn.info (hakemli dergiler)", "kademe": "A", "desen": ["cairn\\.info", "\\bCairn\\b"]},
  {"kod": "OPENEDITION", "ad": "OpenEdition (hakemli dergi ve kitaplar)", "kademe": "A", "desen": ["openedition\\.org"]},
  {"kod": "DBE", "ad": "Diccionario Biográfico Español (RAH)", "kademe": "A", "desen": ["dbe\\.rah\\.es", "Diccionario Biogr[áa]fico Espa[ñn]ol", "Real Academia de la Historia"], "desen_duyarli": ["\\bDBE\\b"]},
  {"kod": "HUYGENS", "ad": "Huygens Instituut (KNAW) kaynak yayınları", "kademe": "A", "desen": ["huygens\\.knaw\\.nl", "\\bHuygens\\b"]},
  {"kod": "DBNL", "ad": "DBNL (Digitale Bibliotheek voor de Nederlandse Letteren)", "kademe": "A", "desen": ["dbnl\\.org"], "desen_duyarli": ["\\bDBNL\\b"]},
  {"kod": "UNESCO-GHA", "ad": "UNESCO General History of Africa", "kademe": "A", "desen": ["General History of Africa", "UNESCO[^;]*History of Africa"]},
  {"kod": "HMAI", "ad": "Handbook of Middle American Indians", "kademe": "A", "desen": ["Handbook of Middle American Indians"]},
  {"kod": "HSAI", "ad": "Handbook of South American Indians", "kademe": "A", "desen": ["Handbook of South American Indians"]},
  {"kod": "HNAI", "ad": "Handbook of North American Indians (Smithsonian)", "kademe": "A", "desen": ["Handbook of North American Indians"]},
  {"kod": "JSTOR", "ad": "JSTOR (hakemli dergi arşivi)", "kademe": "A", "desen": ["jstor\\.org"], "desen_duyarli": ["\\bJSTOR\\b"]},
  {"kod": "DEGRUYTER", "ad": "De Gruyter yayınları", "kademe": "A", "desen": ["degruyter", "De Gruyter"]},
  {"kod": "HAKEMLI-DERGI", "ad": "Hakemli dergi platformları (DOI, T&F, MUSE, J-STAGE, Redalyc…)", "kademe": "A", "desen": ["doi\\.org/", "\\bdoi:", "tandfonline\\.com", "muse\\.jhu\\.edu", "Project MUSE", "jstage\\.jst\\.go\\.jp", "cir\\.nii\\.ac\\.jp", "redalyc\\.org", "doaj\\.org", "bazhum\\.muzhp\\.pl", "czasopisma\\.", "ejournals\\.eu", "revistas\\.[a-z.]+", "journals\\.[a-z.]+", "ojs\\.[a-z.]+", "ojs2\\.[a-z.]+", "scielo", "springer\\.com", "link\\.springer", "wiley\\.com", "sagepub", "pmc\\.ncbi\\.nlm\\.nih\\.gov", "nature\\.com", "lituanistika\\.lt", "library\\.oapen\\.org", "escholarship\\.org"]},
  {"kod": "UNIV-YAYIN", "ad": "Üniversite yayınevleri (University Press)", "kademe": "A", "desen": ["University Press", "Univ\\.? Press", "Universit(y|é|à|ät|ad)[^;]{0,40}Press", "Presses [Uu]niversitaires", "Presses de l'Universit", "Universitätsverlag", "Yale (UP|University)", "Princeton (UP|University)", "Harvard (UP|University)", "Stanford (UP|University)", "Columbia (UP|University)", "Edinburgh (UP|University)", "Manchester (UP|University)", "Indiana (UP|University)", "Chicago (UP|University)", "California (UP|University)", "Toronto (UP|University)", "Leiden (UP|University)", "Amsterdam (UP|University)", "Johns Hopkins", "MIT Press", "\\bU\\. ?P\\.", "Ankara [ÜU]niversitesi", "[İI]stanbul [ÜU]niversitesi", "Harrassowitz", "Routledge", "I\\. ?B\\. ?Tauris", "Palgrave", "Bloomsbury Academic", "Peeters", "Franz Steiner", "Otto Harrassowitz", "Böhlau", "Klaus Schwarz", "American Philosophical Society", "Dumbarton Oaks", "Variorum", "Ashgate", "Boydell", "boydellandbrewer\\.com", "press-files\\.anu\\.edu\\.au", "Penn State", "Wisconsin (UP|University)"], "desen_duyarli": ["\\bUP\\)"]},
  {"kod": "UNIV-YAYIN-KISALTMA", "ad": "Üniversite yayınevi kısaltmaları (CUP, OUP, UP)", "kademe": "A", "desen_duyarli": ["\\bCUP\\b", "\\bOUP\\b", "\\b[A-Z][a-z]+ UP\\b", "\\bUP,", "\\bUP [0-9]{4}", "\\bPUF\\b", "\\bUCP\\b"]},
  {"kod": "AKADEMIK-ESER", "ad": "Adıyla anılan standart akademik monografi (veride sık geçen yazarlar)", "kademe": "A", "not": "Yazar adı tek başına yayınevini göstermez; liste yalnız ölçülmüş veride geçen ve alanın standart akademik eseri olan yazarları içerir. Belirsiz adlar (Payne, Parker, Meyer, Oliver…) yanlış pozitif verebilir — Emre kararı bölümüne bkz.", "desen_duyarli": ["\\bRiasanovsky\\b", "Epstein, Genoa", "Kirk, Genoa", "Franklin D\\. Scott", "\\bNordstrom\\b", "J\\. ?H\\. Elliott", "Elliott, (The Old World|Imperial Spain|Empires of the Atlantic)", "Dean, Land and Power", "Slot, Archipelagus", "Graziani, Histoire de G", "C\\. ?H\\. ?Beck", "Michael Roberts", "\\bSetton\\b", "Norman Davies", "God's Playground", "\\bMallia-Milanes\\b", "Coed[èe]s", "Peter Jackson", "P\\. Jackson", "Delhi Sultanate", "John F\\. Richards", "Mughal Empire", "\\bMetcalf\\b", "Marius B\\. Jansen", "\\bSansom\\b", "\\bCrampton\\b", "\\bPetrovich\\b", "\\bFausto\\b", "D\\. Rock", "J\\. Lynch", "\\bLockhart\\b", "S\\. Schwartz", "David J\\. Weber", "Weber, David J", "\\bBournoutian\\b", "\\bKamen\\b", "\\bPayne\\b", "Inalc[ıi]k", "[İI]nalc[ıi]k", "Halil [İI]nalc[ıi]k", "Uzun[çc]ar[şs][ıi]l[ıi]", "\\bImber\\b", "\\bFinkel\\b", "\\bKafadar\\b", "\\bLowry\\b", "\\bOstrogorsky\\b", "\\bNicol\\b", "\\bRunciman\\b", "Fine, The (Late|Early) Medieval Balkans", "John V\\. A\\. Fine", "\\bInalcik\\b", "\\bBarthold\\b", "\\bGrousset\\b", "Golden, An Introduction", "Peter B\\. Golden", "\\bSpuler\\b", "\\bMinorsky\\b", "Woods, The Aqquyunlu", "\\bSümer\\b", "S[üu]mer, Faruk", "Faruk S[üu]mer", "\\bKamei\\b", "Gangmumei Kamei", "\\bCharpin\\b", "Lock, The Franks", "\\bKushch\\b", "\\bHaldon\\b", "\\bTreadgold\\b", "\\bAngold\\b", "\\bKazhdan\\b", "\\bHrushevsky\\b", "\\bMagocsi\\b", "\\bSubtelny\\b", "\\bHalecki\\b", "\\bLukowski\\b", "Frost, The Northern Wars", "Robert I\\. Frost", "\\bHosking\\b", "Martin, Medieval Russia", "Janet Martin", "\\bFennell\\b", "\\bCrummey\\b", "Lynch, Spain", "Israel, The Dutch Republic", "Jonathan Israel", "\\bIngrao\\b", "Evans, The Making of the Habsburg", "\\bMacartney\\b", "P[áa]l Engel", "\\bJelavich\\b", "\\bStavrianos\\b", "\\bHupchick\\b", "\\bHitchins\\b", "\\bCastellan\\b", "Ma[lł]colm", "Noel Malcolm", "\\bVickers\\b", "\\bHoare\\b", "\\bBanac\\b", "\\bGoldstein\\b", "\\bCuthell\\b", "\\bHobsbawm\\b", "\\bTwitchett\\b", "\\bMote\\b", "Wilkinson, Chinese History", "Endymion Wilkinson", "\\bLorge\\b", "\\bAtwood\\b", "\\bAllsen\\b", "Jackson, The Mongols", "Morgan, The Mongols", "\\bBiran\\b", "\\bManz\\b", "\\bSubrahmanyam\\b", "\\bKulke\\b", "\\bThapar\\b", "\\bMajumdar\\b", "\\bSastri\\b", "Nilakanta Sastri", "\\bRicklefs\\b", "\\bTarling\\b", "Reid, Southeast Asia", "\\bLieberman\\b", "\\bWyatt\\b", "\\bChandler\\b", "K\\. W\\. Taylor", "Keith Taylor", "Lee Ki-baik", "Seth, A Concise History of Korea", "\\bTotman\\b", "\\bIliffe\\b", "\\bFage\\b", "\\bAjayi\\b", "Last, The Sokoto", "\\bLevtzion\\b", "\\bHunwick\\b", "\\bPankhurst\\b", "Marcus, A History of Ethiopia", "\\bAbun-Nasr\\b", "\\bHourani\\b", "Kennedy, The Prophet", "Hugh Kennedy", "\\bHumphreys\\b", "Holt, The Age of the Crusades", "\\bRiley-Smith\\b", "\\bTyerman\\b", "\\bBethell\\b", "\\bBurkholder\\b", "\\bKicza\\b", "\\bHemming\\b", "\\bMacLachlan\\b", "\\bBakewell\\b", "\\bBrading\\b", "\\bBushnell\\b", "Halperin Donghi"]},
  {"kod": "HISTORY-STATE", "ad": "U.S. Department of State, Office of the Historian (FRUS, IBS)", "kademe": "A", "desen": ["history\\.state\\.gov", "Office of the Historian", "Foreign Relations of the United States", "International Boundary Study", "\\bIBS No\\.", "ABD D[ıi][şs]i[şs]leri Co[ğg]rafyac[ıi]l[ıi][ğg][ıi]", "state\\.gov/documents", "2009-2017\\.state\\.gov"], "desen_duyarli": ["\\bFRUS\\b"]},
  {"kod": "WW1-ONLINE", "ad": "1914-1918-online. International Encyclopedia of the First World War (FU Berlin)", "kademe": "A", "desen": ["1914-1918-online", "International Encyclop(a|ae)dia of the First World War"]},
  {"kod": "AVALON", "ad": "Avalon Project (Yale Law School — birincil belge)", "kademe": "A", "desen": ["avalon\\.law\\.yale\\.edu", "Avalon Project"]},
  {"kod": "CVCE", "ad": "CVCE.eu (Université du Luxembourg)", "kademe": "A", "desen": ["cvce\\.eu"], "desen_duyarli": ["\\bCVCE\\b"]},
  {"kod": "ENC-UKRAINE", "ad": "Encyclopedia of Ukraine (CIUS)", "kademe": "A", "desen": ["encyclopediaofukraine\\.com", "Encyclop(a|ae)dia of Ukraine", "Internet Encyclop(a|ae)dia of Ukraine"]},
  {"kod": "DIB", "ad": "Dictionary of Irish Biography (Royal Irish Academy)", "kademe": "A", "desen": ["dib\\.ie", "Dictionary of Irish Biography"]},
  {"kod": "DWB", "ad": "Dictionary of Welsh Biography (National Library of Wales)", "kademe": "A", "desen": ["biography\\.wales", "Dictionary of Welsh Biography"]},
  {"kod": "DCB", "ad": "Dictionary of Canadian Biography (Toronto/Laval)", "kademe": "A", "desen": ["biographi\\.ca", "Dictionary of Canadian Biography"]},
  {"kod": "ADB-AU", "ad": "Australian Dictionary of Biography (ANU)", "kademe": "A", "desen": ["adb\\.anu\\.edu\\.au", "Australian Dictionary of Biography"]},
  {"kod": "UCDP", "ad": "Uppsala Conflict Data Program", "kademe": "A", "desen": ["ucdp\\.uu\\.se", "Uppsala Conflict Data"], "desen_duyarli": ["\\bUCDP\\b"]},
  {"kod": "PA-X", "ad": "PA-X Peace Agreements Database (Univ. of Edinburgh)", "kademe": "A", "desen": ["peaceagreements\\.org"], "desen_duyarli": ["\\bPA-X\\b"]},
  {"kod": "QDL", "ad": "Qatar Digital Library (British Library arşiv belgeleri)", "kademe": "A", "desen": ["qdl\\.qa", "Qatar Digital Library"]},
  {"kod": "UN-BELGE", "ad": "BM birincil belgeleri (antlaşma serisi, karar metinleri, hukuk arşivi)", "kademe": "A", "desen": ["treaties\\.un\\.org", "digitallibrary\\.un\\.org", "undocs\\.org", "legal\\.un\\.org", "documents\\.un\\.org", "United Nations Treaty Series", "unscr\\.com"], "desen_duyarli": ["\\bUNTS\\b", "\\bS/RES/", "\\bA/RES/"]},
  {"kod": "MAHKEME-BELGE", "ad": "Uluslararası mahkeme belgeleri (ICJ, ICTY)", "kademe": "A", "desen": ["icj-cij\\.org", "icty\\.org", "irmct\\.org", "worldcourts\\.com"]},
  {"kod": "MEVZUAT", "ad": "Resmî mevzuat ve meclis tutanakları (birincil)", "kademe": "A", "desen": ["legislation\\.gov\\.(uk|au)", "irishstatutebook\\.ie", "eur-lex\\.europa\\.eu", "govinfo\\.gov", "hansard", "api\\.parliament\\.uk", "officielebekendmakingen", "wetten\\.overheid\\.nl", "thegazette\\.co\\.uk", "foundingdocs\\.gov\\.au", "paclii\\.org", "commonlii\\.org", "faolex\\.fao\\.org", "peraturan\\.bpk\\.go\\.id"]},
  {"kod": "ULUSAL-ARSIV", "ad": "Ulusal arşivler ve arşiv kataloğu", "kademe": "A", "desen": ["nationalarchives\\.gov\\.uk", "archives\\.gov\\b", "bar\\.admin\\.ch", "mnl\\.gov\\.hu", "e-archiv\\.li", "landesarchiv", "archives\\.bodleian", "arhiv\\.mk", "arhiv-beograda", "Ulusal Ar[şs]iv", "National Archives", "idp\\.bl\\.uk", "presidency\\.ucsb\\.edu", "trumanlibrary\\.gov", "digitalarchive\\.wilsoncenter\\.org"]},
  {"kod": "BRITANNICA", "ad": "Encyclopædia Britannica", "kademe": "B", "desen": ["britannica\\.com", "Britannica", "Encyclop(a|ae|æ)dia Britannica"], "not": "Emre onayı 14 Ekim 2026: B."},
  {"kod": "LAROUSSE", "ad": "Larousse", "kademe": "B", "desen": ["larousse\\.fr", "\\bLarousse\\b"]},
  {"kod": "UNIVERSALIS", "ad": "Encyclopædia Universalis", "kademe": "B", "desen": ["universalis\\.fr", "Encyclop(a|ae|æ)dia Universalis"]},
  {"kod": "GEC", "ad": "Gran Enciclopèdia Catalana", "kademe": "B", "desen": ["enciclopedia\\.cat", "Gran Enciclop[èe]dia Catalana"]},
  {"kod": "HRV-ENC", "ad": "Hrvatska enciklopedija (Leksikografski zavod Miroslav Krleža)", "kademe": "B", "desen": ["enciklopedija\\.hr", "Hrvatska enciklopedija", "Leksikografski zavod"]},
  {"kod": "SNL", "ad": "Store norske leksikon", "kademe": "B", "desen": ["snl\\.no", "Store norske leksikon"]},
  {"kod": "LEX-DK", "ad": "Lex.dk (Den Store Danske)", "kademe": "B", "desen": ["lex\\.dk", "Den Store Danske"]},
  {"kod": "VLE", "ad": "Visuotinė lietuvių enciklopedija", "kademe": "B", "desen": ["vle\\.lt", "Visuotin[ėe] lietuvi[ųu] enciklopedija"]},
  {"kod": "INFOPEDIA", "ad": "Infopédia (Porto Editora)", "kademe": "B", "desen": ["infopedia\\.pt"]},
  {"kod": "BANGLAPEDIA", "ad": "Banglapedia (Asiatic Society of Bangladesh)", "kademe": "B", "desen": ["banglapedia", "Banglapedia"]},
  {"kod": "TE-ARA", "ad": "Te Ara / NZHistory (Yeni Zelanda hükümeti)", "kademe": "B", "desen": ["teara\\.govt\\.nz", "\\bTe Ara\\b", "nzhistory\\.(govt|net)\\.nz", "paperspast\\.natlib\\.govt\\.nz"]},
  {"kod": "CANADIAN-ENC", "ad": "The Canadian Encyclopedia", "kademe": "B", "desen": ["thecanadianencyclopedia\\.ca", "Canadian Encyclop(a|ae)dia"]},
  {"kod": "SAHO", "ad": "South African History Online", "kademe": "B", "desen": ["sahistory\\.org\\.za", "South African History Online"], "desen_duyarli": ["\\bSAHO\\b"]},
  {"kod": "NEWADVENT", "ad": "Catholic Encyclopedia (1913, New Advent)", "kademe": "B", "desen": ["newadvent\\.org", "Catholic Encyclop(a|ae)dia"]},
  {"kod": "JEWISH-ENC", "ad": "Jewish Encyclopedia (1906)", "kademe": "B", "desen": ["jewishencyclopedia\\.com", "Jewish Encyclop(a|ae)dia"]},
  {"kod": "MET", "ad": "The Met — Heilbrunn Timeline of Art History", "kademe": "B", "desen": ["metmuseum\\.org", "Heilbrunn"]},
  {"kod": "MUZE", "ad": "Müze ve müze yayınları (Louvre, Penn, Smithsonian, IWM, NAM, USHMM…)", "kademe": "B", "desen": ["encyclopedia\\.ushmm\\.org", "ushmm\\.org", "collections\\.louvre\\.fr", "Die Welt der Habsburger", "penn\\.museum", "si\\.edu", "iwm\\.org\\.uk", "nam\\.ac\\.uk", "rmg\\.co\\.uk", "natmus\\.dk", "historiska\\.se", "dhm\\.de", "hdgoe\\.at", "habsburger\\.net", "awm\\.gov\\.au", "nationalww2museum\\.org", "africamuseum\\.be", "floridamuseum\\.ufl\\.edu", "deutschlandmuseum\\.de", "okupacijasmuzejs\\.lv", "muzeumpilsudski\\.pl", "imuseum\\.im", "archnet\\.org"], "desen_duyarli": ["\\bUSHMM\\b"]},
  {"kod": "NAPOLEON", "ad": "Fondation Napoléon (napoleon.org)", "kademe": "B", "desen": ["napoleon\\.org", "Fondation Napol[ée]on"]},
  {"kod": "NPS", "ad": "U.S. National Park Service", "kademe": "B", "desen": ["nps\\.gov", "National Park Service"]},
  {"kod": "CRS", "ad": "Congressional Research Service raporları (everycrsreport)", "kademe": "B", "desen": ["everycrsreport\\.com", "Congressional Research Service", "crsreports\\.congress\\.gov"], "desen_duyarli": ["\\bCRS\\b"]},
  {"kod": "COUNTRYSTUDIES", "ad": "Library of Congress Country Studies", "kademe": "B", "desen": ["countrystudies\\.us", "Country Stud(y|ies)", "Library of Congress", "loc\\.gov"]},
  {"kod": "UN", "ad": "Birleşmiş Milletler kurum sayfaları", "kademe": "B", "desen": ["peacekeeping\\.un\\.org", "\\bun\\.org", "press\\.un\\.org", "news\\.un\\.org", "research\\.un\\.org", "peacemaker\\.un\\.org", "unvienna\\.org", "\\bUN \\(ref\\)", "United Nations", "un-project\\.org", "reliefweb\\.int", "ohchr\\.org"], "desen_duyarli": ["\\bUN\\b", "\\bBM\\b", "\\bUNHCR\\b"]},
  {"kod": "REFWORLD", "ad": "Refworld (BMMYK / UNHCR)", "kademe": "B", "desen": ["refworld\\.org", "Refworld", "ecoi\\.net"]},
  {"kod": "UNESCO-WHC", "ad": "UNESCO Dünya Mirası Merkezi", "kademe": "B", "desen": ["whc\\.unesco\\.org", "UNESCO World Heritage"]},
  {"kod": "ENCYCLOPEDIA-COM", "ad": "Encyclopedia.com (Gale/Oxford/Columbia başvuru eserleri derlemesi)", "kademe": "B", "desen": ["encyclopedia\\.com"], "not": "Derleme platform: içindeki maddeler basılı başvuru eserlerinden (Gale, Columbia Encyclopedia, Oxford sözlükleri) alınır; maddeden maddeye kalite değişir, yazar/künye çoğu kez belirtilir. Platform düzeyinde B — tek tek A'ya çıkarılabilir."},
  {"kod": "EBSCO-RS", "ad": "EBSCO Research Starters (Salem Press ansiklopedi maddeleri)", "kademe": "B", "desen": ["ebsco\\.com/research-starters", "EBSCO Research Starters", "ebsco\\.com"], "desen_duyarli": ["\\bEBSCO\\b"], "not": "ÖLÇÜLDÜ: veride geçen 92 ebsco.com bağının 92'si de /research-starters/ altında. Research Starters, Salem Press'in imzalı ansiklopedi maddeleridir (kaynakçalı) ⇒ B önerisi."},
  {"kod": "LIVIUS", "ad": "Livius.org (Jona Lendering)", "kademe": "B", "desen": ["livius\\.org", "\\bLivius\\b"], "not": "Emre onayı 14 Ekim 2026: B (kişisel site, akademik yazar)."},
  {"kod": "CHINAKNOWLEDGE", "ad": "ChinaKnowledge.de (Ulrich Theobald)", "kademe": "B", "desen": ["chinaknowledge\\.de", "ChinaKnowledge"], "not": "Emre onayı 14 Ekim 2026: B (sinolog yazarın kişisel başvuru sitesi)."},
  {"kod": "ENC-REGIONAL", "ad": "Bölgesel / eyalet ansiklopedileri (Georgia, Virginia, NC, Texas, Oregon, Guam, 64 Parishes…)", "kademe": "B", "desen": ["georgiaencyclopedia\\.org", "georgianencyclopedia", "encyclopediavirginia\\.org", "ncpedia\\.org", "tshaonline\\.org", "oregonhistoryproject\\.org", "okhistory\\.org", "guampedia\\.com", "64parishes\\.org", "historylink\\.org", "wyohistory\\.org", "wisconsinhistory\\.org", "heritage\\.nf\\.ca", "hawaiihistory\\.org", "plainshumanities\\.unl\\.edu", "encyclopaediaafricana\\.com", "rheinische-geschichte\\.lvr\\.de", "memoriachilena\\.gob\\.cl", "e-history\\.kz", "histrf\\.ru", "austria-forum\\.org/af/AEIOU"]},
  {"kod": "SECKIN-KURUM", "ad": "Saygın araştırma kuruluşları, düşünce kuruluşları ve uluslararası örgüt sayfaları", "kademe": "B", "desen": ["cfr\\.org", "adst\\.org", "ascleiden\\.nl", "parlement\\.com", "constitutionnet\\.org", "digitreaties\\.org", "caricom\\.org", "nato\\.int", "osce\\.org", "consilium\\.europa\\.eu", "european-union\\.europa\\.eu", "ecb\\.europa\\.eu", "pace\\.coe\\.int", "ohr\\.int", "oecs\\.int", "cmi\\.no", "africaportal\\.org", "files\\.ethz\\.ch", "hrw\\.org", "casebook\\.icrc\\.org", "electionguide\\.org", "iwpr\\.net", "idsa\\.in", "commonwealthoralhistories\\.org", "portal\\.ehri-project\\.eu", "germanhistorydocs\\.org", "bpb\\.de", "soviethistory\\.msu\\.edu", "origins\\.osu\\.edu", "historians\\.org", "atlasofmutualheritage\\.nl", "newnetherlandinstitute\\.org", "catholic-hierarchy\\.org", "vatican\\.va", "fhw\\.gr", "ime\\.gr", "kaowarsom\\.be"]},
  {"kod": "HABER", "ad": "Haber kuruluşları (ajans ve gazete)", "kademe": "B", "yalniz_sonra": "1946-01-01", "once_kademe": "C", "desen": ["aljazeera", "\\bupi\\.com", "csmonitor", "gulfnews", "rferl\\.org", "eurasianet", "taipeitimes", "monitor\\.co\\.ug", "fijitimes", "theborneopost", "kapitalis", "mg\\.co\\.za", "jamaicaobserver", "dawn\\.com", "swissinfo", "news\\.err\\.ee", "cyprus-mail", "rnz\\.co\\.nz", "thenewhumanitarian", "ipsnews", "thecitizen\\.co\\.tz", "koreatimes", "thenationalnews", "voanews", "cbc\\.ca", "rte\\.ie", "bbc\\.(co\\.uk|com)", "nytimes\\.com", "theguardian\\.com", "reuters\\.com", "apnews\\.com", "lsm\\.lv", "bnr\\.bg", "bnrnews\\.bg", "bta\\.bg", "fr\\.apanews\\.net", "allafrica\\.com", "nation\\.africa", "namibian\\.com\\.na", "lexpress\\.mg", "thedailystar\\.net", "sundaytimes\\.lk", "stabroeknews", "guyanachronicle", "andina\\.pe", "nunatsiaq", "dailyherald\\.com", "guardian\\.co\\.tt", "searchlight\\.vc", "mwnation\\.com", "nashaniva", "detektor\\.ba", "hukumonline", "jatimtimes", "rri\\.co\\.id", "usa\\.inquirer\\.net", "centuryireland\\.rte\\.ie", "timarit\\.is"], "not": "Emre onayı 14 Ekim 2026: olay tarihi 1946-01-01 ve sonrasıysa B, öncesiyse C."},
  {"kod": "RESMI-SITE", "ad": "Resmî kurum siteleri (genel sınıf: .gov/.gob/.govt/.gouv/.mil, meclis, bakanlık)", "kademe": "B", "genel": true, "desen": ["\\.gov\\b", "\\.gov\\.[a-z]{2}\\b", "\\.gob\\.[a-z]{2}\\b", "\\.govt\\.[a-z]{2}\\b", "\\.gouv\\.[a-z]{2}\\b", "\\.gv\\.at\\b", "\\.go\\.(jp|id|ug|kr|th|tz|ke)\\b", "\\.mil\\b", "\\.bund\\.de\\b", "europa\\.eu", "parliament", "parlament", "riksdagen", "stortinget", "saeima", "oireachtas", "tynwald", "congreso\\.es", "regjeringen\\.no", "government\\.(is|fo)", "president\\.ie", "presidentti\\.fi", "royalcourt\\.no", "monarchie\\.be", "consellgeneral\\.ad", "luxembourg\\.public\\.lu", "canada\\.ca", "mfa\\.", "mofa\\.", "defensie\\.nl", "difesa\\.it", "sarawak\\.gov\\.my"], "not": "Sınıf kuralı: yalnız hiçbir özel girdi tutmadığında sayılır."},
  {"kod": "UNIV-SITE", "ad": "Üniversite siteleri (genel sınıf: .edu, .ac.xx, uni-…)", "kademe": "B", "genel": true, "desen": ["\\.edu\\b", "\\.edu\\.[a-z]{2}\\b", "\\.ac\\.[a-z]{2}\\b", "\\buni[a-z]*\\.(de|it|cz|pl|es|at|ch|ro|hu)\\b", "\\buniv-", "\\.univ-", "um\\.edu\\.mt", "uwi\\.edu", "hse\\.ru", "spbu\\.ru", "unite\\.it", "unicatt\\.it", "univ-perp\\.fr", "maynoothuniversity\\.ie", "ethz\\.ch", "unibe\\.ch", "huma-num\\.fr", "inflibnet\\.ac\\.in", "mta\\.hu", "oszk\\.hu"], "not": "Sınıf kuralı: üniversite sitesindeki ders notu/proje sayfası hakemli yayın değildir ⇒ B."},
  {"kod": "WIEN-GW", "ad": "Wien Geschichte Wiki (Wiener Stadt- und Landesarchiv / Wienbibliothek)", "kademe": "B", "desen": ["geschichtewiki\\.wien\\.gv\\.at", "Wien Geschichte Wiki"], "not": "Adında wiki geçse de Viyana şehir arşivinin resmî tarih sözlüğüdür; açık düzenlemeli Vikipedi değil."},
  {"kod": "ARCHIVE-ORG", "ad": "Internet Archive (archive.org)", "kademe": "K", "desen": ["archive\\.org", "web\\.archive"], "not": "İçindeki belgeye göre: taranmış akademik kitap A, arşivlenmiş blog C."},
  {"kod": "RESEARCHGATE", "ad": "ResearchGate / Academia.edu", "kademe": "K", "desen": ["researchgate\\.net", "academia\\.edu"]},
  {"kod": "GOOGLE-BOOKS", "ad": "Google Books", "kademe": "K", "desen": ["books\\.google", "google\\.com/books"]},
  {"kod": "GUTENBERG", "ad": "Project Gutenberg / runeberg / ibiblio (kamu malı metin)", "kademe": "K", "desen": ["gutenberg\\.org", "runeberg\\.org", "ibiblio\\.org", "sourcebooks\\.web\\.fordham\\.edu", "mek\\.oszk\\.hu"]},
  {"kod": "PDF-KAYNAK", "ad": "Adresi verilmemiş PDF / dosya", "kademe": "K", "desen": ["\\.pdf\\b"]},
  {"kod": "VIKIPEDI", "ad": "Vikipedi (bütün dilleri) ve vikiler", "kademe": "C", "desen": ["wikipedia", "vikipedi", "wikip[ée]dia", "wikipedii", "википеди", "wikiwand", "fandom\\.com", "wikisource", "wikidata", "wiki\\.[a-z]+\\.(org|net)", "geneawiki", "fortwiki", "armeniapedia", "irkipedia", "hispanopedia", "liquisearch", "ecured\\.cu"]},
  {"kod": "WORLDHISTORY", "ad": "World History Encyclopedia (worldhistory.org / ancient.eu)", "kademe": "C", "desen": ["worldhistory\\.org", "ancient\\.eu", "World History Encyclop(a|ae)dia", "WorldHistory\\.org", "Ancient History Encyclop(a|ae)dia"]},
  {"kod": "NEWWORLDENC", "ad": "New World Encyclopedia (Vikipedi türevi)", "kademe": "C", "desen": ["newworldencyclopedia", "New World Encyclop(a|ae)dia"]},
  {"kod": "KUREANS", "ad": "Küre Ansiklopedi", "kademe": "C", "desen": ["kureansiklopedi", "K[üu]re Ansiklopedi"]},
  {"kod": "CHINAHIGHLIGHTS", "ad": "China Highlights (turizm)", "kademe": "C", "desen": ["chinahighlights"]},
  {"kod": "AFRICANHISTORYEXTRA", "ad": "African History Extra (blog)", "kademe": "C", "desen": ["africanhistoryextra"]},
  {"kod": "GLOBALSECURITY", "ad": "GlobalSecurity.org", "kademe": "C", "desen": ["globalsecurity"]},
  {"kod": "ROYALARK", "ad": "RoyalArk (kişisel soy derlemesi)", "kademe": "C", "desen": ["royalark", "Royal ?Ark"]},
  {"kod": "WORLDSTATESMEN", "ad": "WorldStatesmen.org (kişisel derleme)", "kademe": "C", "desen": ["worldstatesmen", "World ?Statesmen"]},
  {"kod": "RULERS", "ad": "Rulers.org (kişisel derleme)", "kademe": "C", "desen": ["rulers\\.org"]},
  {"kod": "ARCHONTOLOGY", "ad": "Archontology.org (kişisel derleme)", "kademe": "C", "desen": ["archontology"], "not": "Emre onayı 14 Ekim 2026: C (kişisel derleme)."},
  {"kod": "DCSTAMPS", "ad": "dcstamps.com (pul koleksiyoncusu)", "kademe": "C", "desen": ["dcstamps"]},
  {"kod": "CAMPUSGROUPS", "ad": "campusgroups.rit.edu (öğrenci kulübü sayfası)", "kademe": "C", "desen": ["campusgroups"]},
  {"kod": "OMNIATLAS", "ad": "Omniatlas (amatör tarih atlası)", "kademe": "C", "desen": ["omniatlas"]},
  {"kod": "BRITISHBATTLES", "ad": "BritishBattles.com", "kademe": "C", "desen": ["britishbattles"]},
  {"kod": "FMG", "ad": "Foundation for Medieval Genealogy (MedLands)", "kademe": "C", "desen": ["fmg\\.ac", "Foundation for Medieval Genealogy", "MedLands"], "not": "Emre onayı 14 Ekim 2026: C (amatör soy derlemesi)."},
  {"kod": "POPULER-TARIH", "ad": "Popüler tarih siteleri ve dergileri", "kademe": "C", "desen": ["historyofwar\\.org", "history\\.com", "warhistory\\.org", "historynet", "thecollector", "medievalists\\.net", "herodote\\.net", "historytoday", "historyextra", "worldhistoryedu", "legendsofamerica", "unofficialroyalty", "executedtoday", "samurai-archives", "britishempire\\.co\\.uk", "thebyzantinelegacy", "brewminate", "alphahistory", "warfarehistorynetwork", "britishmilitaryhistory", "awayfromthewesternfront", "thesecondworldwar\\.org", "defensemedianetwork", "ancient-history-sites", "biblicalarchaeology", "biblearchaeologyreport", "historiadomundo", "biografiasyvidas", "historyireland", "lostfootsteps", "iamnotmakingthisup", "german1914\\.com", "hererowars\\.com", "spain then and now", "Spain Then and Now", "polishhistory\\.pl", "nationalgeographic\\.com", "theorangefiles", "esamskriti", "livehistoryindia", "historyofvadodara", "rusmania", "russianlife", "balagan\\.info", "zanzibarhistory", "precolumbia\\.org", "indigenousmexico", "latinamericanstudies\\.org", "klausdierks", "lakdiva", "davidrsear", "attalus\\.org", "heraldica\\.org", "jewishvirtuallibrary", "communistcrimes", "areq\\.net", "everyculture", "worldatlas", "countryreports", "fanack", "worldheritagesite\\.org", "erenow", "freecitysourcebook", "maurinet", "anetoday", "kupi\\.com", "aksioma\\.org", "arak29", "agbu\\.org", "armnumres", "libyanheritagehouse", "moroccanjews", "wildmadagascar", "totallybarbados", "grenadarevo", "samilitaryhistory", "militaryheritagetourism", "nomadicpeoples", "twentytrees", "en\\.nuremberg\\.media", "pdavis\\.nl", "marxists\\.org", "chanrobles", "romeartlover", "castellitoscani", "kuenker\\.de", "flaggenlexikon", "crwflags", "flagspot", "thearchcons", "webfuuta", "qalam\\.global", "pngaa\\.org", "modeldiplomat", "falklandsbiographies", "hebrideanconnections", "bahighco", "ghcaraibe", "billiken\\.lat", "letudiant\\.fr", "gktoday", "vajiramandravi", "clearias", "rajras", "courses\\.lumenlearning", "openstax", "worldhistorycommons", "medieval-princesses"], "not": "Emre'nin C listesi: popüler tarih, blog, içerik çiftliği, kişisel derleme, sınav-hazırlık siteleri."},
  {"kod": "TURIZM", "ad": "Turizm siteleri", "kademe": "C", "desen": ["advantour", "asiaculturaltravel", "timewisetraveller", "isle-of-man\\.com", "greeka\\.com", "travelguide\\.ge", "easterisland\\.travel", "polynesia\\.com", "inyourpocket", "madacamp", "newmexiconomad", "luxembourgofficial", "culture-malta", "hoangthanhthanglong"]},
  {"kod": "YZ-METNI", "ad": "Yapay zekâ metni", "kademe": "C", "desen": ["ChatGPT", "YZ metni", "yapay zek[âa]"], "desen_duyarli": ["\\bGemini\\b", "\\bGLM\\b", "\\bLLM\\b"]},
  {"kod": "EL-KITABI", "ad": "\"el-kitabi\" damgası (TDV dışı standart başvuru eserleri, sayfa çekilmedi)", "kademe": "Y", "desen": ["^el-kitabi$"], "not": "Dosya başı yorumda (kronoloji_bizans/lehistan/cin…) adı geçen eserlere işaret eder, maddede eser adı yok. 🔴 js/app.js `_KC_SLUG` bunu TDV bağına çeviriyor (islamansiklopedisi.org.tr/el-kitabi) — arayüz işi düzeltmeli."},
  {"kod": "ADSIZ", "ad": "Adı verilmemiş dayanak ('standart akademik kaynak' vb.)", "kademe": "Y", "desen": ["^(dayanak: ?)?standart (akademik|ders|tarih|kaynak|el ?kitab)[^()]*$", "^tarih standart tarihyaz[ıi]m[ıi]", "^(dayanak: ?)?akademik (kaynak|konsens[üu]s|literat[üu]r)\\.?$", "^genel kabul", "^ikincil [öo]zetten", "^(dayanak: ?)?standart akademik kaynak\\.?$", "^dayanak: ?akademik\\.?$", "^akademik konsens[üu]s"]},
  {"kod": "NOT", "ad": "Not (kaynak değil)", "kademe": "N", "desen": ["^\\(?(akademik teyit|[öo]l[çc][üu]t|olcut|do[ğg]rudan|hassasiyet|kesinlik|g[üu]n|y[ıi]l|tarih|dikkat|not|teyit|[iİ]kincil|[iİ]kinci kaynak|m[üu]kerrer|sayfa|zay[ıi]f kaynak|yakla[şs][ıi]k|tahmin|do[ğg]rulan|bu oturum|[çc]apraz|[iİ][çc]erik okundu|okundu|bulunamad|kaynak arand|ay(?![A-Za-z0-9_çğıöşüÇĞİÖŞÜâîûÂÎÛ])|ay:|g[öo]vde|uyar[ıi]|bkz|ölçüldü|[öo]l[çc][üu]ld[üu]|kaynak:? ?yok|kaynaks[ıi]z|\\?)", "^[^a-zA-ZçğıöşüÇĞİÖŞÜ]*$"]}
]
};

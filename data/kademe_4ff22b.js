// data/kademe_4ff22b.js — KADEME YAMASI · KADEME-ARAP-IRAN
// Kutu: lat 12-45 / lon 25-70 (Arap dunyasi + Iran + Kafkasya)
// 🤖 URETILMIS DOSYA — arac/…/uret.py. Elle duzenlenmez, uretec duzeltilir.
//
// USUL (M-0270): kademe bir OSMANLI KATEGORISI degil bir AGIRLIKTIR.
// Soru 'bu yer Osmanli hukukunda ne sayilirdi' degil, 'KENDI SIYASI
// YAPISI icinde hangi mertebede'. Kaynagin KENDI TERIMI neden:'e yazildi;
// Osmanli adi UYDURULMADI. Emin olunmayan yerde BIR KADEME ASAGI.
//
// DORT KOVA — ve ucu birbirine KARISTIRILMADI:
//   ① k: YAZILI          kaynak konusuyor, mertebe eslendi
//   ② kademe_uygulanmaz  kaynak susmuyor, SORU YANLIS (col dolgusu / bolge)
//   ③ kaynak_susuyor     TDV maddesi ARANDI ve YOK — denenen sluglar yazili
//   ④ dosyada HIC YOK    daha arastirilmadi — bu bir BORC, gizlenmiyor

window.KADEME_YAMA = [
  // ── ① ARASTIRILMIS KADEME
  {ad:"Isfahan", k:1, kaynak:"isfahan", kd:[{f:"1597-01-01", t:"1722-10-23", k:1, m:null}], neden:"TDV: '1597'de sahlik merkezi olmasi kesinlik kazanan sehir' — Safevi basshehri; 1722 Afgan isgaliyle sona erdi"},
  {ad:"Şiraz", k:1, kaynak:"siraz", kd:[{f:"1353-01-01", t:"1393-01-01", k:1, m:null}, {f:"1766-01-01", t:"1791-01-01", k:1, m:null}], neden:"TDV: 'Kerim Han Zend, Siraz'i 1180'de (1766-67) basshehir haline getirdi' ve 'Sah Suca' doneminde hanedanin merkezi oldu' (Muzafferi, 1353)"},
  {ad:"Tahran", k:1, kaynak:"tahran", kd:[{f:"1618-01-01", t:"1786-01-01", k:1, m:null}, {f:"1786-01-01", t:"1923-10-29", k:1, m:null}], neden:"TDV: '1618 ... beylerbeyinin burada ikamet ettigi' ve 'Tahran, Kacarlar'in basshehri oldu'. 1618 oncesi mertebe icin kaynak SUSUYOR"},
  {ad:"Meşhed", k:1, kaynak:"meshed", neden:"TDV maddesinin tanim cumlesi: 'Iran'da Horasan eyaletinin merkezi olan sehir'"},
  {ad:"Kazvin", k:1, kaynak:"kazvin", kd:[{f:"1555-01-01", t:"1597-01-01", k:1, m:null}], neden:"TDV: 'Tebriz Osmanlilar'ca ele gecirildiginde Sah Tahmasb idare merkezini buraya tasidi (1555)' — Safevi basshehri, 1597'de Isfahan'a gecti"},
  {ad:"Erdebil", k:1, kaynak:"erdebil", neden:"TDV: 'Erdebil yeni devletin dini ve siyasi merkezi haline geldi' (Safevi) ve 'Erdebil bir hanlik merkezi olmus' (18. yy)"},
  {ad:"Maskat", k:1, kaynak:"maskat", kd:[{f:"1784-01-01", t:"1923-10-29", k:1, m:null}], neden:"TDV: 'Uman'in basshehrinin ic kesimlerdeki Rustak'tan Maskat'a tasinmasi (1784)'"},
  {ad:"Hîve", k:1, kaynak:"hive-hanligi", neden:"TDV: '1557-1558'de bir ara Hive hanligin merkezi oldu' ve 'Bu donemde merkezin Hive'ye tasinmasi hanligin Hive Hanligi olarak taninmasina zemin hazirladi'"},
  {ad:"Riyad", k:1, kaynak:"necid", kd:[{f:"1824-06-01", t:"1923-10-29", k:1, m:null}], neden:"TDV: Turki b. Abdullah 1824'te 'Riyad'i merkez edindi'; 1902'de Abdulaziz b. Suud'un alisi 'Necid tarihinde yeni bir donem baslatti'. 1824 oncesi icin kaynak SUSUYOR"},
  {ad:"El-Fâşir", k:1, kaynak:"darfur", neden:"TDV Darfur maddesinin tanim cumlesi: 'Merkezi Fasir sehridir'"},
  {ad:"Buhara", k:1, kaynak:"buhara", neden:"TDV: 'Bu sayede sehir zengin ve buyuk bir devletin merkezi oldu' ve 'buyuk bir idari ve kulturel merkez haline gelecektir'; Buhara Hanligi'nin eponim merkezi"},
  {ad:"Şeki (Nuha)", k:2, kaynak:"seki", kd:[{f:"1578-11-01", t:"1607-01-01", k:2, m:null}, {f:"1743-01-01", t:"1819-01-01", k:1, m:null}], neden:"TDV: 1578'de Osmanlilar aldiktan sonra 'bir Osmanli sancagi haline getirildi'. 1743'ten sonra Seki Hanligi merkezi: 'Hanligin merkezi Seki sehriydi'"},
  {ad:"Merâga", k:2, kaynak:"meraga", neden:"TDV: 1534-1585 Osmanli kayitlarinda 'sancak (liva) olarak gectigi'; Tebriz eyaleti 1593 taksiminde 'Meraga (Seracu, Leylan, Egertu, Kavdul, Miyanduvab...)' bir liva olarak listelenmis"},
  {ad:"Akmescid", k:2, kaynak:"kirim", neden:"TDV: 'Baglariyla meshur Akmescid kalgay sultanlarin oturdugu yerdi' — kalgay hanliğin ikinci mertebesi; Kirim'in merkezi Bahcesaray'di"},
  {ad:"Semerkant", k:2, kaynak:"semerkant", neden:"TDV: 'Ahmed basshehrini Buhara'ya tasidiysa da Semerkant ... bolgedeki merkezi sehir olma konumunu muhafaza etti'. 1281-1923 araligi icin TDV'de acik 'basshehir' cumlesi BULUNAMADI ⇒ M-0270 geregi BIR KADEME ASAGI"},
  {ad:"Kandehar", k:2, kaynak:"kandehar", neden:"TDV: Zunnun Argun 'Kandehar'i kendisine merkez yapti' ve 'Afgan Kralligi'nin merkezi oldu' (1839-42). Durrani basshehirligi icin acik cumle BULUNAMADI ⇒ bir kademe ASAGI (M-0270)"},
  {ad:"Berde (Karabağ)", k:2, kaynak:"karabag", neden:"TDV, 1593 Osmanli kaydi: 'Berda, Hacin, Ahistabad, Dizak, Hakari ve Varand SANCAKLARI yer almaktaydi' — vilayet-i Gence Karabag icinde sancak"},
  {ad:"Ordubad", k:2, kaynak:"nahcivan", neden:"TDV: 'Nahcivan Hanligi, Nahcivan ve Ordubad olmak uzere iki ana idari birime (TUMEN) ayrilmis' — tumen, hanlik ici ikinci mertebe"},
  {ad:"Şüşter", k:1, kaynak:"huzistan", neden:"TDV: 'Hamdullah el-Mustevfi'ye gore Huzistan'in MERKEZI Suster idi' — Mustevfi ~1340, menzil icinde"},
  {ad:"Muhammere", k:2, kaynak:"huzistan", neden:"TDV: 'Ka'b kabilesinin IDARE MERKEZI Muhammere sehri' — bir kabile konfederasyonunun merkezi, eyalet duzeyi degil"},
  {ad:"Ras el-Hayme (Cülfâr)", k:1, kaynak:"uman", neden:"TDV: 'Kavasim'in MERKEZI olan Re'sulhayme 1762'de yapilan bir antlasma ile Imam Ahmed'e baglanmayi kabul etti'"},
  {ad:"Zerenc (Sîstan)", k:2, kaynak:"sistan", neden:"TDV: 'Sistan'in IDARI MERKEZI Zerenc (Zereng)' — ama cumlenin baglami 644 yili, menzil DISI ⇒ bir kademe ASAGI (M-0270)"},
  {ad:"Sârî", k:2, kaynak:"taberistan", neden:"TDV: 'MERKEZI Sariye olan idari bolgenin diger onemli sehirleri Babul, Amul, Kaimsehr ve Tonkabun' — cumle MODERN eyalet paragrafinda ⇒ bir kademe ASAGI"},
  {ad:"Reşt", k:2, kaynak:"gilan", neden:"TDV: 'YONETIM ve ticaret merkezi olan Rest' — cumle modern Gilan eyaleti paragrafinda; tarihi mertebe icin acik cumle yok ⇒ bir kademe ASAGI"},

  // ── ② KADEME KAVRAMI UYGULANMAZ (k: BILEREK yazilmadi)
  {ad:"Maykop (Çerkezya)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Kabartay (Nalçik)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Ağraham burnu", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Terek deltası (Kızlar)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Vladikavkaz", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Abu Dabi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Nefud çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Rub'ul Hâlî kuzeyi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Rub'ul Hâlî doğusu", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Necid içi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Hadramut", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Sina güneyi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Batı çölü (Mısır)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Nûbe çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Ramletü'l-kübrâ (Büyük Kum Denizi)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Gilf el-Kebîr", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Selîme (Nûbe çölü batısı)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Kordofan", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Zagros içi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Tebbes", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Karakum", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Çeleken", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Garabogaz (Bekdaş)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Mangışlak", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Dihistan ovası (Meşhed-i Misriyân)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Uzboy", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Üstyurt platosu (batı)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Üstyurt platosu (doğu)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Dûmetülcendel (Cevf)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Vâdî Sirhân", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Teymâ", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Necid güneybatısı", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Necid güneyi", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Boğaziçi (Rumeli yakası)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Hamâd (Bâdiyetü'ş-Şâm içi)", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Saroz kuzey kıyısı", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"tur:bolge — bir yerlesim degil bir ALAN; idari mertebe sorusu bu kayda sorulmaz"},
  {ad:"Rub'ul Hâlî güneybatısı", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Bîr Natrûn", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Merga vahası", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Lakiye Arbaîn", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Cebel Ûveynât", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Sudan kuzeybatı çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Zolat el-Hammâd", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Kordofan kuzeybatı çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Umman iç çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Vâdî el-Milk", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Bayûda çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},
  {ad:"Atbay çölü", kademe_uygulanmaz:true, kaynak:"proje kurali — CLAUDE.md §3 kasitli bosluk / VERI-YAPISI tur:bolge", neden:"kasitli bosluk — yerlesim DEGIL, col/bozkir dolgusu; kademe kavrami uygulanmaz"},

  // ── ③ KAYNAK SUSUYOR (arandi, TDV maddesi YOK)
  {ad:"Sultâniye", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: sultaniye · sultaniye--iran"},
  {ad:"Kutaisi", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: kutayis · kutaisi"},
  {ad:"Şuşa", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: susa · susa--karabag"},
  {ad:"Lenkeran", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: lenkeran · talis"},
  {ad:"Dâmgan", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: damgan"},
  {ad:"Bistâm", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: bistam"},
  {ad:"Senendec (Sine)", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: senendec · sine · erdelan"},
  {ad:"Sokotra", kaynak:"bulunamadi", neden:"kaynak susuyor — TDV'de madde ARANDI, yok. Denenen sluglar: sokotra · sukutra"},
];

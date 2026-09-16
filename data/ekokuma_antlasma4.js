// ============================================================================
// EK OKUMA — OSMANLI ANTLAŞMALARI, kronolojik (sebep · süreç · hükümler ·
//            sonuçlar · önem)
// ============================================================================
// Yazan: EKO-ANTLASMA (OPUS HAZIR KITA 404) · DALGA-0055 bölüm B · 16 Eylül 2026
// Koordinatör: 1.MURAT · sevk: Emre'nin isteği — "bütün antlaşma maddeleri
// için ek okuma: sebep, görüşme süreci/hikâyesi, hükümler, sonuçlar, önem".
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_ANTLASMA4 tanımlar.
//    YÜKLEYİCİ: js/app.js `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_antlasma4"
//    satırı UI oturumunca eklenecek — bu oturum js/ dosyasına dokunmadı.
//
// ŞEMA: ekokuma_antlasma3.js'teki `tur:"sebep-sonuc"` kartı + iki yeni alan:
//   id · tur · kisa · sebep{b,t} · sonuc{b,t} · bag (= ÖNEMİ) ·
//   surec      (görüşme süreci / hikâyesi — düz metin)
//   hukumler   (hükümler — dizi, her öğe bir madde)
//   metin      (sonuçlar ve bağlam) · kesinlik · zincir:[] · olay · kaynak ·
//   ic_not     (çizilmez — tarih çelişkileri ve kaynak notları)
//
// MÜKERRER KURALI: bir antlaşmanın ekokuma_antlasma2.js'te ayrıca hükümlerini
// anlatan bir `tur:"antlasma"` kartı VARSA burada yeniden yazılmadı
// (Amasya 1555 · Ferhad Paşa 1590 · Zitvatorok 1606 · Kasr-ı Şirin 1639 ·
// Karlofça 1699 …). Yalnız tematik kartı olanlar (kapitülasyon, statü, savaş
// hikâyesi) burada kendi antlaşma kartını aldı.
// OSMANLI TARAF DEĞİLSE yazılmadı (D111): Tata 1426/27 (Sırp despotu–Macaristan).
//
// KAYNAK YÖNTEMİ: TDV İslâm Ansiklopedisi gövdeleri çekildi ve OKUNDU
//   (HTTP 200 + gövde; 302 = ölü slug). Antlaşmaların kendi maddeleri çoğunlukla
//   YOK (§4: TDV bir yer-kişi-kavram ansiklopedisidir) — anlatı yer ve kişi
//   maddelerinden toplandı. Metinler KOPYALANMADI, özetlendi. Hiçbir tarih
//   atlasın verisinden alınmadı (§4 "atlas referans değildir").
//   Ölü sluglar (302): orhan-gazi · cenevizliler · gelibolu-antlasmasi ·
//   edirne-segedin-antlasmasi · segedin-antlasmasi · varna-savasi · kaytbay ·
//   osmanli-memluk-savaslari · ibrahim-pasa-makbul-maktul · ferdinand-i ·
//   preveze-deniz-savasi · serav-antlasmasi · nasuh-pasa-antlasmasi ·
//   istanbul-antlasmasi · hotin-seferi · suleyman-celebi · kayserili-halil-pasa
//   Canlı ama gövdesi alınamayan: emir-suleyman (0 karakter, §4 tuzak ④).
// ============================================================================
window.EKOKUMA_ANTLASMA4 = [

// ═══ PARTİ 1 · 1333 – 1621 ═══════════════════════════════════════════════

// ── 1333 İZMİT ÖNÜNDEKİ ANTLAŞMA ─────────────────────────────────────────────
{ id:"antlasma4-izmit-1333", tur:"sebep-sonuc",
  kisa:"Bizans imparatoru kuşatılmış bir şehri kurtarmak için savaşmak yerine her yıl altın ödemeyi seçti; Osmanlı beyi gözünde bu, Bizans'ın haraçgüzâr olması demekti.",
  sebep:{ b:"Orhan Bey'in büyük bir ordu ve mancınıklarla Nikomedia'yı (İzmit) kuşatması", t:"1333" },
  sonuc:{ b:"İzmit önünde Orhan ile III. Andronikos arasında antlaşma", t:"1333-08" },
  bag:"Önemi: Osmanlı-Bizans ilişkisinde ilk yazılı barış ve Bizans'ın Osmanlı'ya düzenli ödeme yaptığı ilk dönem. TDV'ye göre Bizans bununla Osmanlı emîrinin gözünde haraçgüzâr bir ülke durumuna düştü; ama antlaşma İzmit'i kurtarmadı, şehir dört yıl sonra düştü.",
  surec:"1329 Pelekanon zaferinden sonra Kocaeli kıyıları Üsküdar'a kadar Orhan'ın eline geçmişti. 1333 yazında Chalkidike'den dönen III. Andronikos, İzmit'in kuşatıldığını öğrenince donanmayla yardıma koştu. Filo şehre varmadan Orhan bir elçi heyeti gönderdi: imparator barışa razıysa çekilecek, değilse savaşa hazırdı. İmparator barışı seçti; iki hükümdar hediyeler gönderdi — Orhan atlar, av köpekleri, halı ve panter kürkü, imparator gümüş kaplar, yünlü-ipekli kumaşlar, bir at ve eyer örtüsü.",
  hukumler:[
    "Orhan imparatorun dostu olacak, Bizans'a tâbi şehirlere düşmanca harekete girişmeyecekti.",
    "Orhan İzmit kuşatmasından vazgeçecekti.",
    "Buna karşılık imparator Orhan'a her yıl 12.000 altın (hyperper) ödeyecekti."
  ],
  metin:"Antlaşma Zilhicce 733 / Ağustos 1333 tarihlidir ve Bizans kaynağı Kantakuzenos'a dayanır. Bizans'ın bu ödemesi, daha önce Germiyan beylerine akınları durdurmak için ödediği haraçla aynı işlevi görüyordu; TDV'ye göre bu rolü artık Osmanlı Beyliği üstlenmişti. Barış kalıcı olmadı: 1337'de imparator Arnavutluk'ta âsilerle uğraşırken Orhan İzmit'i yeniden kuşattı; şehrin hanımı kaleyi ahidnâme ile teslim etmek zorunda kaldı ve Süleyman Paşa İzmit'e vali oldu. 1357'deki başka bir antlaşmada imparatorun 'eski borçlarından' söz edilmesi, 1333'te taahhüt edilen yıllık ödemeye işaret eder.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1333-08-01"],
  kaynak:"TDV: orhan (İzmit kuşatması, antlaşma şartları, 12.000 hyperper, Zilhicce 733) · TDV: izmit",
  ic_not:"Madde t:1333-08-01 ay hassasiyetinde (TDV 'Ağustos 1333'); gün kaynakta yok." },

// ── 1352 CENEVİZ İTTİFAKI VE İLK KAPİTÜLASYON ───────────────────────────────
{ id:"antlasma4-ceneviz-1352", tur:"sebep-sonuc",
  kisa:"Boğaz'da Venedik'e karşı savaşan Cenevizliler için Orhan doğal bir müttefikti; karşılığında verilen ilk ticaret imtiyazı, Osmanlı kapitülasyonlarının başlangıcı oldu.",
  sebep:{ b:"1351-1355 Ceneviz-Venedik savaşı: Venedik donanmasının Pera'yı (Galata) kuşatması", t:"1351" },
  sonuc:{ b:"Orhan ile Cenevizliler arasında ittifak ve ilk Osmanlı kapitülasyonu", t:"1352" },
  bag:"Önemi: Osmanlı'nın bir Latin devletine verdiği ilk ticaret imtiyazıdır; metni kayıptır ama 1387 ahidnâmesi onu yeniler. Siyasî önemi daha büyüktür: Ceneviz desteği, Osmanlı kuvvetlerinin Rumeli yakasına geçip yerleşmesini kolaylaştırdı.",
  surec:"Boğaz'ın doğu kıyısı Üsküdar'dan Yoros'a kadar Orhan'ın elindeydi ve Pera'daki Ceneviz kolonisi ancak onunla iş birliği yaparak Venedik-Bizans-Aragon ittifakına dayanabilirdi. Ceneviz kaynakları Kasım 1351'de Orhan'ın elçilerinden söz eder; mektup ve elçi trafiği bir anlaşmanın varlığını gösterir. Orhan Pera'yı savunmak üzere 1000 okçu gönderdi, Ceneviz donanması erzakını Osmanlı limanlarından aldı ve Şubat 1352 Boğaz deniz savaşında Orhan Üsküdar'da kuvvet yığarak Cenevizlileri destekledi.",
  hukumler:[
    "Cenevizlilere Osmanlı topraklarında ticaret imtiyazı tanındı (ilk kapitülasyon — metni günümüze ulaşmadı).",
    "Ceneviz donanması Osmanlı limanlarından serbestçe erzak alabildi.",
    "Fiilî sonuç: Cenevizliler ücret karşılığı Osmanlı kuvvetlerini gemileriyle karşı sahile taşımayı kabul etti."
  ],
  metin:"Venedik-Katalan donanması İstanbul'dan çekilince yalnız kalan Bizans, 6 Mayıs 1352'de Orhan ve Cenevizlilerle barış imzalamak zorunda kaldı. TDV'ye göre Ceneviz-Venedik savaşının yarattığı şartlar olmasaydı Osmanlıların Rumeli yakasında yerleşmesi kolay olmazdı; Gelibolu yarımadasındaki ilk fetihler de bu tarihlere denk gelir. Papa, Cenevizlileri Haçlı ittifakına çekmek için 1355'te Orhan'a verdikleri taahhütlerin hükümsüz olduğunu bildirdi. İmtiyaz geleneği sonraki iki yüzyılda Venedik, Fransa, İngiltere ve Hollanda'ya genişleyecekti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1352-01-01|Ceneviz"],
  kaynak:"TDV: orhan (Boğaz savaşı, ittifak, 'ilk kapitülasyon 1352 başları', 6 Mayıs 1352 barışı) · TDV: imtiyazat (1352 kapitülasyonu, metnin kaybı)",
  ic_not:"TDV imtiyazın tarihini '1352 başları' diye veriyor; madde t:1352-01-01 yıl hassasiyetinde." },

// ── 1387 OSMANLI-CENEVİZ AHİDNÂMESİ ──────────────────────────────────────────
{ id:"antlasma4-ceneviz-1387", tur:"sebep-sonuc",
  kisa:"Metni bugüne ulaşan en eski Osmanlı ahidnâmesi: bir düğün şenliğinin ortasında, otuz beş yıllık Ceneviz dostluğu kâğıda geçirildi.",
  sebep:{ b:"Tenedos (Bozcaada) yüzünden alevlenen Venedik-Ceneviz rekabetinde I. Murad'ın Cenevizlileri desteklemesi", t:"1381" },
  sonuc:{ b:"Pera'dan gelen Ceneviz elçileriyle 1352 ticaret anlaşmasının yenilenmesi", t:"1387-06" },
  bag:"Önemi: TDV'ye göre elde metni bulunan ilk Osmanlı dostluk ve ticaret ahidnâmesidir. Bir beyliğin yabancı bir devletle ilişkisini vergi oranları ve esir muamelesi gibi somut hükümlere bağlaması, sonraki kapitülasyonların şablonunu verdi.",
  surec:"I. Murad Venedik-Ceneviz çekişmesinde donanmasından yararlandığı Ceneviz'i destekliyordu; Cenevizliler Osmanlı limanlarını serbestçe kullanıyordu. 1387 baharında Yenişehir Sarayı'na gelen padişah o yaz büyük bir düğün düzenledi: imparatorun kızlarını kendine ve oğulları Bayezid ile Yâkub'a eş olarak aldı, Bayezid'in üç oğlunu sünnet ettirdi. Pera'dan gelen Ceneviz elçileriyle 1352 anlaşması bu şenlik sırasında yenilendi (Haziran 1387).",
  hukumler:[
    "İki devlet arasında tespit edilen vergiler ödenerek serbest ticaret yapılacaktı.",
    "Esirlere yapılacak muamele belirlendi.",
    "Orhan Gazi ile yapılmış (1352) anlaşma yenilendi."
  ],
  metin:"Anlaşmadan birkaç ay sonra Cenevizliler, Sakız'daki Maona, Rodos şövalyeleri ve Midilli'deki Gattilusiler Osmanlılara karşı bir ittifak içine girdi; yani ahidnâme Ceneviz dünyasının bütününü bağlamadı. TDV, Türklerle Cenevizliler arasında 1385'te gizli bir anlaşma yapıldığı tezini metin bulunmadığı için kabul edilmesi güç sayar ve ilk dostluk-ticaret anlaşması olarak 1387 ahidnâmesini esas alır.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1387-06-08|Ceneviz"],
  kaynak:"TDV: ceneviz (8 Haziran 1387, hükümler, 1385 tezinin reddi) · TDV: imtiyazat (19 Cemâziyelevvel 789) · TDV: murad-i (Yenişehir düğünü sırasında yenilenmesi)",
  ic_not:"🔴 GÜN ÇELİŞKİSİ, hüküm verilmedi: TDV ceneviz '8 Haziran 1387', TDV imtiyazat '19 Cemâziyelevvel 789 (7 Haziran 1387)'. Madde t:1387-06-08. Bir günlük fark muhtemelen hicrî-milâdî çevrimidir; kaynak ayırmıyor." },

// ── 1403 GELİBOLU ANTLAŞMASI ────────────────────────────────────────────────
{ id:"antlasma4-gelibolu-1403", tur:"sebep-sonuc",
  kisa:"Ankara bozgunundan sonra Rumeli'de tutunmak isteyen bir şehzade, tahtın bedelini toprakla ödedi: Selanik ve Karadeniz kıyıları Bizans'a döndü, haraç kalktı.",
  sebep:{ b:"Ankara Savaşı (1402) ve Osmanlı şehzadeleri arasında taht mücadelesi (Fetret devri)", t:"1402-07-28" },
  sonuc:{ b:"Süleyman Çelebi ile Bizans İmparatoru Manuel arasında Gelibolu Antlaşması", t:"1403-02" },
  bag:"Önemi: Fetret devrinin belirleyici belgesi. TDV'ye göre bundan sonra Bizans Anadolu ile Rumeli arasındaki geçişleri kontrol etti ve rakip şehzadelerin hepsinin itimadını koruyarak merkezî bir rol oynadı; Selanik I. Mehmed dönemi boyunca Bizans'ta kaldı.",
  surec:"Ankara'dan kaçan Süleyman Çelebi arşivleri, ailesini, küçük kardeşi Kasım ile kız kardeşi Fatma Sultan'ı alıp Gemlik'ten Güzelcehisar'a (Anadoluhisarı) geçti. İmparator Manuel ile anlaşarak Gelibolu'ya geçti ve antlaşmayı orada imzaladı. Kardeşini ve kız kardeşini rehine olarak İstanbul'da bıraktı, Edirne'ye geçip hükümdarlığını ilân etti. Durumunu güçlendirmek için Haziran 1403'te Venedik ve Cenevizlilerle de ticarî imtiyaz içeren bir anlaşma yaptı.",
  hukumler:[
    "Anadolu yakasında Kartal, Pendik ve Gebze ile bazı adalar Bizans'a bırakıldı.",
    "Misivri'ye kadar Karadeniz kıyıları Bizans'a bırakıldı.",
    "Rumeli'de Selanik ve Tesalya Bizans'a terk edildi.",
    "Bizans'ın o zamana kadar Osmanlılara ödediği vergi kaldırıldı.",
    "(Aynı yıl ayrıca) Venedik, Bizans, Ceneviz ve Rodos şövalyelerinden oluşan ittifak üyelerine önemli ticaret imtiyazları verildi."
  ],
  metin:"Selanik Ankara bozgunundan hemen sonra fiilen Bizans'ın eline geçmişti; antlaşma bunu resmîleştirdi. Osmanlılar antlaşmayı Bizans'ın Boğazlar üzerinden şehzadelerin geçişini denetlemesi olarak yorumladı: Süleyman'ın bıraktığı rehineler ve Orhan Çelebi gibi şehzadeler, Bizans'ın elinde bir koz oldu. II. Murad tahta geçince Selanik'i abluka altına aldı; koruyamadığı şehri Bizans 1423'te Venedik'e sattı ve şehir 1430'da Osmanlılara geçti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1403-06-01|Selanik","1403-06-15|Gelibolu"],
  kaynak:"TDV: fetret-devri (Gelibolu Antlaşması Şubat 1403, hükümler, Haziran 1403 Venedik-Ceneviz anlaşması) · TDV: selanik (Selanik'in 1403'te resmen Bizans'a geçişi) · TDV: imtiyazat (806/1403 antlaşmasında ittifak üyelerine imtiyaz) · TDV: mehmed-i (antlaşmanın Osmanlılarca yorumu)",
  ic_not:"🔴 TARİH FARKI — madde dosyası UYGULA'nın değil, dokunulmadı: TDV fetret-devri Gelibolu Antlaşması'nı ŞUBAT 1403'e koyuyor; Haziran 1403 Venedik ve Cenevizlilerle yapılan ticaret anlaşmasıdır. Çekirdekte İKİ madde var ve ikisi de Haziran'da: olaylar_ek.js 1403-06-01 'Süleyman Çelebi – Bizans antlaşması: Selanik'in iadesi' ve olaylar_ek3.js 1403-06-15 'Gelibolu Antlaşması — Bizans'a tavizler'. Kart ikisine de bağlandı; iki maddenin tek olay olduğu ve gününün Şubat olması gerektiği ayrıca koordinatöre bildirildi. TDV emir-suleyman gövdesi alınamadı (0 karakter)." },

// ── 1415 KARAMANOĞULLARI İLE ANTLAŞMA ───────────────────────────────────────
{ id:"antlasma4-karaman-1415", tur:"sebep-sonuc",
  kisa:"Rumeli'de kardeşiyle savaşırken Bursa'yı yakan komşusuna Çelebi Mehmed, birliği sağlar sağlamaz Konya surlarının önünde cevap verdi.",
  sebep:{ b:"Karaman Beyi Mehmed'in, Çelebi Mehmed Rumeli'de Mûsâ'ya karşı savaşırken Bursa'yı otuz bir gün kuşatıp yakması", t:"1413" },
  sonuc:{ b:"Konya kuşatması ve Karamanoğlu'nun barış istemesi", t:"1415-03" },
  bag:"Önemi: Fetret devrinden çıkan Osmanlı Devleti'nin Anadolu'daki en güçlü rakibine karşı ilk kazancı. TDV'ye göre bununla birlikte Osmanlı idaresi Anadolu ve Rumeli'de bir hükümdarın emri altında yeniden birleşti.",
  surec:"Çelebi Mehmed Karaman seferine çıkmadan önce, Karamanlıların hâmisi sayılan Memlük sultanına pahalı hediyelerle bir elçi gönderdi (İnegöl'den yazdığı mektup Şubat 1415 ortalarına tarihlidir). Candaroğlu İsfendiyar da bağlılık bildirip sefere yardımcı kuvvet göndermeyi vaad etmişti. Mehmed Karamanlıları yendi ve Konya'yı kuşattı (Muharrem 818 / Mart 1415); Karamanoğlu barış istedi.",
  hukumler:[
    "Hamîd-ili (Isparta yöresi) Osmanlı topraklarına katıldı.",
    "Said-ili toprakları Osmanlı ülkesine katıldı."
  ],
  metin:"Barış kalıcı olmadı: 1417'de Karaman'a yeniden sefer düzenlendi (hasta olan padişah yerine Bayezid Paşa kumanda etti) ve Karaman beyi yakalandı. TDV ilk Osmanlı derlemelerinde Karaman'a yapılan çeşitli seferlerin birbirine karıştırıldığını hatırlatır. Karaman meselesi II. Murad döneminde de sürdü; 1423'te tahta çıkmasına yardım edilen İbrâhim Bey Hamîd-ili'ni bırakıp Osmanlı tâbiliğini kabul edecekti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1415-03-01|Karaman"],
  kaynak:"TDV: mehmed-i (Bursa kuşatması, Memlük'e elçi, Konya kuşatması Mart 1415, barış ve toprak kazançları) · TDV: murad-ii (1423 İbrâhim Bey antlaşması)",
  ic_not:"TDV antlaşmanın gününü vermiyor; 'Muharrem 818 / Mart 1415' kuşatmanın tarihidir. Madde t:1415-03-01 ay hassasiyetinde." },

// ── 1424 II. MURAD – BİZANS BARIŞI ─────────────────────────────────────────
{ id:"antlasma4-bizans-1424", tur:"sebep-sonuc",
  kisa:"Selanik'i Venedik'e devreden Bizans, İstanbul'un da aynı yola gideceği korkusunu doğurdu; barış onu yeniden haraç ödemeye bağladı.",
  sebep:{ b:"Venedik'in anlaşmayla Selanik'in idaresini devralması ve Osmanlı'ya karşı ittifak arayışı", t:"1423" },
  sonuc:{ b:"II. Murad ile Bizans imparatoru arasında barış — Bizans yeniden haraç ödemeyi kabul etti", t:"1424-02-22" },
  bag:"Önemi: Fetret devrinde Bizans'a dönen kıyıların büyük kısmı geri alındı ve Bizans yeniden haraçgüzâr oldu. TDV, II. Murad döneminin sonunda Bizans'ı Bosna kralı ve Mora despotlarıyla birlikte haraç ödeyen tâbiler arasında sayar.",
  surec:"Bizans'ın Selanik'i Venedik'e bırakması (1423 yazı) yeni bir bunalım doğurdu. Venedik bir yandan Osmanlıların Selanik işgalini tanıması için yıllık haraç teklif ediyor, bir yandan Loredano komutasındaki donanmasını Gelibolu karşısına gönderiyor, İzmir Beyi Cüneyd, Eflak beyi ve Macar kralıyla genel bir taarruz ittifakı hazırlıyordu. Osmanlılar İstanbul'un da Venediklilere teslim edileceğinden endişe etti. Barış Cenevizlilerin aracılığıyla imzalandı.",
  hukumler:[
    "İmparator yılda 300.000 akçe haraç ödeyecekti.",
    "Silivri ve Terkos hisarları hariç, Marmara, Ege ve Karadeniz kıyılarında 1402'den sonra aldığı yerleri geri verecekti."
  ],
  metin:"Antlaşma 21 Rebîülevvel 827 / 22 Şubat 1424 tarihlidir. Barış Osmanlılara Anadolu'da İzmir Beyi Cüneyd'e karşı ellerini serbest bıraktı. Venedik'le çekişme ise 1430'da Selanik'in Osmanlılarca alınmasıyla bitti; 1430 antlaşmasıyla Selanik'teki Osmanlı hâkimiyeti tanındı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1424-02-22|Bizans"],
  kaynak:"TDV: murad-ii (Selanik bunalımı, Ceneviz aracılığı, 21 Rebîülevvel 827 / 22 Şubat 1424, 300.000 akçe, iade edilen yerler)" },

// ── 1444 EDİRNE-SEGEDİN ANTLAŞMASI ─────────────────────────────────────────
{ id:"antlasma4-edirne-segedin-1444", tur:"sebep-sonuc",
  kisa:"Padişah antlaşmanın gereğini yerine getirdi, Sırp despotu topraklarını geri aldı; ama Macar kralının yemini bozduruldu ve barış dört ay içinde Varna'ya döndü.",
  sebep:{ b:"'Uzun Sefer': Hunyadi Yanko ve Macar kralının Niş ve Sofya'yı alıp Balkan geçitlerine dayanması", t:"1443-10" },
  sonuc:{ b:"Edirne'de Macar, Sırp ve Hunyadi elçileriyle anlaşma", t:"1444-06-12" },
  bag:"Önemi: Osmanlı'nın Sırbistan'ı bir kez daha despotluk olarak iade ettiği antlaşma. Bozulması Varna Haçlı seferine ve 10 Kasım 1444 zaferine yol açtı; Haçlıların Balkanlar'dan Osmanlıları atma umudu orada söndü.",
  surec:"Hunyadi (Yanko) Ekim 1443'te Tuna'yı aşıp Rumeli kuvvetlerini bozdu; II. Murad onu Zlatitsa (İzlâdi) geçidinde 24 Kasım 1443'te durdurdu. Aynı sırada Karamanoğlu Akşehir ve Beyşehir'i işgal etmişti. II. Murad Ocak 1444'te Macarlarla ateşkes için temasa geçti; eşi Mara Sultan (Sırp despotunun kızı) bunda önemli rol oynadı. Kral, Yanko ve despotun elçileri Edirne'de anlaşmayı imzaladı (24 Safer 848 / 12 Haziran 1444). TDV Segedin maddesine göre antlaşma 1444 Temmuz sonlarında Segedin'de (bazılarına göre Nagyvárad'da) kral tarafından tasdik edildi.",
  hukumler:[
    "Sırp Despotluğu, Stefan'ın öldüğü 1427'deki haliyle (Güvercinlik dahil) Vılkoğlu'na (Brankoviç) geri verilecekti.",
    "Taraflar Tuna'yı aşmayacaktı.",
    "Bulgaristan üzerinde padişahın hâkimiyeti tanınacaktı.",
    "Eflak beyi padişaha tâbi kalıp vergi verecek, ancak padişahın yanına gitme görevinden affolunacaktı."
  ],
  metin:"II. Murad despota topraklarını iade etti ve antlaşma maddelerini yerine getirdi. Ancak TDV'ye göre Bizans imparatoru, Venedik, papalık ve Yanko kesin darbeyi vurmanın zamanı geldiğini düşünerek Macar kralına Segedin'de verdiği yemini bozdurdu; kral 4 Ağustos 1444'te Haçlı seferine çıkacağını teyit etti. Bu haber Edirne'de telaşa yol açtı. Sefer 10 Kasım 1444'te Varna'da Osmanlı zaferiyle sona erdi. Semendire'nin Sırbistan'a fiilî iadesi 1444 yazına düşer.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1444-06-12|Edirne-Segedin","1444-08-01|Semendire","1444-11-10|Varna Zaferi"],
  kaynak:"TDV: murad-ii (Uzun Sefer, ateşkes temasları, 24 Safer 848 / 12 Haziran 1444 Edirne anlaşması ve hükümleri, yeminin bozdurulması, 4 Ağustos 1444) · TDV: segedin (Temmuz 1444 sonlarında Segedin'de antlaşma/tasdik)",
  ic_not:"Edirne (12 Haziran) ile Segedin (Temmuz sonu) iki ayrı aşamadır: biri elçilerin imzası, öteki kralın tasdiki/yemini. 'Edirne-Segedin' adı ikisini birleştirir." },

// ── 1479 İSTANBUL ANTLAŞMASI (VENEDİK) ─────────────────────────────────────
{ id:"antlasma4-istanbul-venedik-1479", tur:"sebep-sonuc",
  kisa:"On altı yıllık savaş İşkodra'nın kapısında bitti: Venedik kaleyi boş olarak teslim etti ve Osmanlı ticaretine yeniden girmek için her yıl altın ödemeyi kabul etti.",
  sebep:{ b:"Osmanlı-Venedik savaşı (1463-1479) ve Fâtih'in İşkodra kuşatması", t:"1478" },
  sonuc:{ b:"İstanbul'da Osmanlı-Venedik barış antlaşması", t:"1479-01-25" },
  bag:"Önemi: Osmanlı-Venedik savaşlarının ilki bu antlaşmayla kapandı. Arnavutluk'ta Osmanlı hâkimiyeti yerleşti; Venedik'in İstanbul'da tebaasına hüküm veren bir balyoz bulundurma hakkı, sonraki yüzyılların elçilik düzeninin temeli oldu.",
  surec:"Savaş boyunca Venedik, Karaman ve Akkoyunlu ile ittifak yaptı; Fâtih ise 1465, 1468, 1471 ve 1475'te barış görüşmeleri açıp kesti — haraç talebi görüşmeleri tıkıyordu. 1474'te İşkodra kuşatması başarısız oldu. 1478 baharında Fâtih bizzat Arnavutluk'a gelip İşkodra'yı kuşattı; alamayınca çevredeki Gölbaşı, Leş ve Dırıvas kalelerini aldırdı, Bojana ağzına iki kale yaptırarak İşkodra'yı abluka altında bıraktı. O yılın başında İstanbul'da başlayan görüşmeler seferden sonra yeniden ele alındı.",
  hukumler:[
    "Venedik İşkodra'yı boşaltıp teslim edecekti.",
    "Akçahisar (Kruya), Limni ve Eğriboz adaları ile Maina (Mayna) dağlık bölgesi Osmanlı'da kalacaktı.",
    "Padişah savaş süresince Mora, Arnavutluk ve Dalmaçya'da aldığı öteki yerleri iade edecekti.",
    "Ticaret serbestliği karşılığında Venedik her yıl 10.000 altın ödeyecekti.",
    "Venedik şap iltizamından kalan 100.000 duka borcunu iki yılda ödeyecekti.",
    "Venedik İstanbul'da tebaasının hukuk işlerine bakacak bir balyoz bulunduracaktı."
  ],
  metin:"Antlaşma 2 Zilkade 883 / 25 Ocak 1479 tarihlidir. Antlaşma şartları gereği İşkodra halkı şehri boşaltıp Venedik topraklarına göç etti; Osmanlılar şehri boş olarak teslim aldı ve bu, şehrin yüzyıla yakın bir süre nüfus ve iktisat bakımından yetersiz kalmasına yol açtı. Barış Fâtih'in ellerini serbest bıraktı: aynı yıl Gedik Ahmed Paşa Tocco hânedanının Ayamavra, Kefalonya ve Zanta adalarını aldı, ertesi yıl Rodos kuşatıldı ve Otranto seferi yapıldı. Venedik antlaşmayla Rumeli sahillerinde İnebahtı, Koron ve Modon gibi üslerini korudu; bunlar 1499-1502 savaşının konusu olacaktı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1479-01-25|İstanbul Antlaşması"],
  kaynak:"TDV: mehmed-ii (savaşın seyri, 1478 İşkodra kuşatması, 2 Zilkade 883 / 25 Ocak 1479 antlaşması ve hükümleri) · TDV: iskodra (şehrin antlaşmayla boş teslimi) · TDV: venedik (1463-1479 savaşı, antlaşma listesi)" },

// ── 1491 OSMANLI-MEMLÜK BARIŞI ─────────────────────────────────────────────
{ id:"antlasma4-memluk-1491", tur:"sebep-sonuc",
  kisa:"Altı yıl Çukurova'da el değiştiren kaleler kimseye kesin zafer vermedi; Tunus sultanının aracılığıyla yapılan barış, Adana ve Tarsus'u Mekke-Medine vakfı sayıp Memlüklere bıraktı.",
  sebep:{ b:"Çukurova ve Dulkadıroğulları üzerinde nüfuz yarışı ile Memlüklerin Cem Sultan'ı desteklemesi", t:"1485" },
  sonuc:{ b:"Tunus Hafsî sultanının aracılığıyla Osmanlı-Memlük barışı", t:"1491" },
  bag:"Önemi: İlk Osmanlı-Memlük savaşını bitirdi ve iki devlet arasında çeyrek asırlık bir dengenin başlangıcı oldu; bu denge 1516-17'de Yavuz Sultan Selim'in Mısır seferiyle Memlük Devleti'nin yıkılışıyla sona erdi.",
  surec:"Kayıtbay 1484'te barış teklif etti ama elçileri İstanbul'dan eli boş döndü ve Osmanlı kuvvetleri 1485'te Memlük topraklarına girdi. Savaşlar 1490'a kadar sürdü; Adana ve Tarsus birkaç kez el değiştirdi. Dulkadırlı Alâüddevle'nin Memlüklere katılması onların işini kolaylaştırdı ve Çukurova'daki çarpışmalarda genellikle Memlükler üstün geldi. Buna rağmen askerî ihtiyaçlarını karşılamakta zorlanan Kayıtbay, başta Tunus Hafsî sultanı olmak üzere hükümdarların aracılığına başvurdu.",
  hukumler:[
    "On beş yıl süreli barış.",
    "Adana ve Tarsus kaleleri, Haremeyn (Mekke-Medine) evkafına bağlı oldukları gerekçesiyle Memlüklere bırakıldı."
  ],
  metin:"Barış 896 (1491) yılında imzalandı. Dulkadırlı Alâüddevle bundan sonra iki tarafla da dostane ilişki kurmaya çalıştı. TDV'ye göre Mısır'la savaş, Osmanlıların Karaman ve Dulkadıroğulları üzerindeki politikasının bir parçasıydı; Adana-Tarsus düzenlemesi Memlüklere Çukurova'da bir dayanak bıraktı. Kayıtbay ertesi yıl Endülüs'teki son İslâm devleti Nasrîlerin yardım talepleriyle uğraşıyordu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1491-05-01|Memlük"],
  kaynak:"TDV: bayezid-ii (savaşın sebepleri, Tunus aracılığı, Adana-Tarsus'un Haremeyn vakfı gerekçesiyle bırakılışı) · TDV: kayitbay (1484 barış teklifi, 1485-1490 savaşları, on beş yıllık barış 896/1491)",
  ic_not:"TDV yalnız YIL veriyor (896/1491); madde t:1491-05-01 gün/ay kaynaksız." },

// ── 1502-1503 OSMANLI-VENEDİK BARIŞI ────────────────────────────────────────
{ id:"antlasma4-venedik-1503", tur:"sebep-sonuc",
  kisa:"Modon ve Koron'u kaybeden Venedik, papanın Haçlı çağrısı da boşa çıkınca eski haracına dönmeyi kabul etti; karşılığında ticaret kapısı yeniden açıldı.",
  sebep:{ b:"Venedik'in Türklere karşı Fransa ile ittifakı ve 1499-1502 Osmanlı-Venedik savaşı", t:"1498" },
  sonuc:{ b:"İstanbul'da Grekçe düzenlenen barış antlaşması", t:"1502-12-14" },
  bag:"Önemi: Osmanlı donanmasının ilk büyük deniz savaşını kazançla bitirdiği antlaşma; Mora'nın güneyindeki Venedik üsleri (Modon, Koron) Osmanlı'da kaldı ve Osmanlı Doğu Akdeniz'de deniz gücü olarak kendini kabul ettirdi.",
  surec:"Venedik'in Fransa ile ittifakı üzerine İstanbul'daki Venedikli tüccarlar tutuklanıp mallarına el konuldu ve savaş ilân edildi (1498). Türk donanması 9 Ağustos'ta Modon'u, 15 Ağustos'ta Koron'u aldı; akıncılar Friuli'den Venedik önlerine kadar ilerledi. Venedik papa ve Macar kralıyla ittifak yaptı, 1501 yazında Midilli ve Çeşme'ye saldırdı ama sonuç alamadı. Papanın Haçlı çağrısının etkisiz kaldığını görünce II. Bayezid ile anlaşmaya yöneldi.",
  hukumler:[
    "Venedik eskisi gibi yılda 10.000 duka ödeyecekti.",
    "Venedik, Santa Maura'da (Ayamavra) el koyduğu 34.000 dukayı geri verecekti.",
    "Venedik yeniden ticaret serbestliğine kavuşacaktı.",
    "Venedik'in İstanbul'daki temsilcisi (balyoz) belirli aralıklarla değişecekti."
  ],
  metin:"Antlaşma 14 Aralık 1502'de İstanbul'da Grekçe olarak düzenlendi ve Doç Leonardo Loredano tarafından 20 Mayıs 1503'te onaylandı. Aynı yıl Macaristan ile de, Boğdan ve Eflak'ın ve Ragusa'nın iki tarafa da vergi ödemesini kabul eden ve karşılıklı ticaret serbestliğini tanıyan bir antlaşmaya varıldı (1503). 1503'te İstanbul'a gelen Venedik elçisi Andrea Gritti'nin raporları, II. Bayezid'in son yıllarındaki şehzadeler rekabetinin önemli kaynaklarındandır.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1502-12-14|Venedik"],
  kaynak:"TDV: bayezid-ii (savaşın sebebi, Modon-Koron, antlaşmanın iki tarihi ve hükümleri, 1503 Macar antlaşması) · TDV: venedik (1499-1502 savaşı)",
  ic_not:"Balyozun görev süresine dair hüküm TDV cümlesinde yarım kesiliyor ('üç yılda bi…'); bu yüzden kartta süre verilmedi." },

// ── 1533 İSTANBUL ANTLAŞMASI (HABSBURG) ────────────────────────────────────
{ id:"antlasma4-istanbul-habsburg-1533", tur:"sebep-sonuc",
  kisa:"Viyana ve Alman seferlerinden sonra Kanûnî batıda bir soluk istiyordu; Ferdinand'ın elçisini kabul edip ateşkese razı olunca gözünü doğuya, İran'a çevirdi.",
  sebep:{ b:"Kanûnî'nin Alman seferi (1532) ve Macar tahtı üzerindeki Habsburg-Szapolyai çekişmesi", t:"1532" },
  sonuc:{ b:"Ferdinand'ın elçisi Cornelius'un kabulü ve ateşkes — Habsburglarla ilk barış", t:"1533-01" },
  bag:"Önemi: Osmanlı-Habsburg mücadelesinde ilk barış. TDV'ye göre batı cephesinde bir süre sükûnet sağladı ve Kanûnî'nin 1533'te başlayan Irakeyn seferine yönelmesini mümkün kıldı; sessizlik 1540'ta Szapolyai'nin ölümüne kadar sürdü.",
  surec:"Fransızların da istediği doğrultuda imparatorluğun İspanyol kanadına denizden darbe vurulması planlanırken, ateşkes görüşmeleri için Ferdinand'ın elçisi Cornelius İstanbul'a geldi. Padişah onu Ocak 1533'te kabul etti ve ateşkese rıza gösterdiğini bildirdi.",
  hukumler:[
    "Osmanlı ile Ferdinand arasında ateşkes (TDV hükümlerin ayrıntısını vermiyor)."
  ],
  metin:"Barışın ardından İbrâhim Paşa 21 Ekim 1533'te doğu seferine gönderildi ve Barbaros Hayreddin Paşa donanmanın başına geçmek üzere İstanbul'a çağrıldı. Batıdaki sessizlik, Macar Kralı Szapolyai'nin 20 Temmuz 1540'ta ölümüyle bozuldu: Szapolyai iki yıl önce Ferdinand ile yaptığı gizli anlaşmada vâris bırakmazsa krallığın ona geçmesini kabul etmişti ve bu, Macar meselesini yeniden açtı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1533-01-01|Habsburg"],
  kaynak:"TDV: suleyman-i (Cornelius'un Ocak 1533'te kabulü, ateşkes, 1533-1540 sükûneti, İbrâhim Paşa'nın 21 Ekim 1533'te sefere gönderilişi)",
  ic_not:"TDV antlaşmanın hükümlerini ve imza gününü VERMİYOR (akademik literatürdeki 22 Haziran 1533 günü OKUMADIM, yazılmadı). Madde t:1533-01-01 yıl hassasiyetinde; TDV'deki 'Ocak 1533' elçi kabulünün tarihidir. Hüküm listesi bilerek kısa." },

// ── 1540 OSMANLI-VENEDİK ANTLAŞMASI ────────────────────────────────────────
{ id:"antlasma4-venedik-1540", tur:"sebep-sonuc",
  kisa:"Preveze'den sonra Venedik, Ege adalarını ve Mora'daki son kalelerini bırakarak barış satın aldı; Anabolu uzun bir kuşatmadan sonra teslim edildi.",
  sebep:{ b:"1537-1540 Osmanlı-Venedik savaşı ve Barbaros'un Ege seferleri", t:"1537" },
  sonuc:{ b:"Osmanlı-Venedik antlaşması; Anabolu (Nauplion) Osmanlılara bırakıldı", t:"1540-10-03" },
  bag:"Önemi: Barbaros'un fethettiği Ege adalarının statüsünü belirledi ve Venedik'in Mora'daki varlığını sona erdirdi. Venedik bir otuz yıl daha barışta kaldı; TDV'ye göre bu barışa rağmen Kıbrıs'ta üslenen korsanlara kayıtsız kalması 1570 Kıbrıs seferinin sebeplerinden biri oldu.",
  surec:"Barbaros'un Preveze'de Andrea Doria'yı yendiği haber 1538 Ekim'inde orduya ulaştı. Kanûnî 27 Kasım'da İstanbul'a döndükten sonra Venedik ile çatışmalara son veren antlaşma imzalandı. Nauplion (Napoli di Romania) 1389'dan beri Venedik'in elinde, Venedik-İstanbul yolu üzerinde müstahkem bir ticaret limanıydı; antlaşmayla Osmanlılara bırakılmasına rağmen Mora sancak beyi Güzelce Kasım Paşa şehri ancak uzun bir muhasaradan sonra teslim alabildi.",
  hukumler:[
    "Barbaros tarafından ele geçirilen Ege adalarının statüsü (Osmanlı'da kalması) belirlendi.",
    "Anabolu (Nauplion) şehir ve kalesi Osmanlılara bırakıldı.",
    "(Batı kaynaklarına göre Menekşe/Monemvasia da bırakıldı ve Venedik savaş tazminatı ödedi — TDV'de okunmadı.)"
  ],
  metin:"TDV anabolu maddesi antlaşmanın gününü 3 Ekim 1540 verir. Anabolu'nun teslimiyle halkına dokunulmadı, hatta bazı vergilerden muafiyet tanındı; kaçanların malları satıldı, kalanların emlâkı korundu, kaledeki kilise camiye çevrildi (Fethiye / Sultan Süleyman Camii) ve bir tophane kuruldu. Şehir 1686'da Venedik'e geçti ve 1715'te yeniden Osmanlı idaresine alındı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1540-11-01|Anabolu"],
  kaynak:"TDV: anabolu (3 Ekim 1540 antlaşması, Güzelce Kasım Paşa'nın muhasarası, teslim şartları) · TDV: suleyman-i (Preveze sonrası antlaşma, Ege adalarının statüsü) · TDV: kibris (1540 barışı ve Venedik'in korsanlara kayıtsızlığı)",
  ic_not:"Madde t:1540-11-01 'Anabolu'nun antlaşmayla devralınması' — antlaşmanın kendisi 3 Ekim 1540 (TDV anabolu); teslim günü kaynakta yok. Monemvasia ve tazminat bilgisi TDV'de OKUNMADI, parantez içinde kaynaksız olduğu belirtildi — istenirse kaldırılsın." },

// ── 1547 İSTANBUL ANTLAŞMASI (HABSBURG) ────────────────────────────────────
{ id:"antlasma4-istanbul-habsburg-1547", tur:"sebep-sonuc",
  kisa:"Habsburg imparatoru ve kardeşi, Macaristan'da ellerinde kalan topraklar için Osmanlı'ya her yıl ödeme yapmayı kabul etti; Osmanlı için bu, doğuya dönmeden önce batıyı güvenceye almaktı.",
  sebep:{ b:"Budin'in Osmanlı eyaleti olması (1541) ve V. Karl ile Ferdinand'ın barış arayışı", t:"1545" },
  sonuc:{ b:"Habsburglarla beş yıllık barış antlaşması", t:"1547-06" },
  bag:"Önemi: TDV'ye göre sonraki Osmanlı-Habsburg ilişkilerinin seyrinde belirleyici oldu: Habsburglar Osmanlı baskısından kurtuldu, Osmanlı ise İran seferi için batı sınırından emin oldu. Habsburgların ödediği ve Osmanlıların 'haraç', Habsburgların 'ululama hediyesi' dediği ödemenin çerçevesi bu antlaşmayla kuruldu.",
  surec:"V. Karl ve Ferdinand'ın elçileri Gerhard Veltwyck ile Nicolaus Sicco ile başlayan görüşmeler önce Kasım 1545'te bir mütarekeyle sonuçlandı. Elçiler 29 Rebîülâhir 954 / 18 Haziran 1547'de divana kabul edildi ve Haziran 1547'de beş yıllık antlaşma yapıldı. Aynı günlerde Safevî şehzadesi Elkas Mirza Osmanlılara sığınmıştı (Rüstem Paşa tarafından kabulü 26 Haziran 1547); bu, yeni bir doğu seferinin habercisiydi.",
  hukumler:[
    "Beş yıl süreli barış.",
    "Ferdinand elinde bulundurduğu Macar topraklarına karşılık Osmanlı'ya haraç ödeyecekti."
  ],
  metin:"Batıda sağlanan sükûnet sırasında Kanûnî doğuya yöneldi (1548 İran seferi). Barış Erdel'deki gelişmelerle sarsıldı: János Zsigmond'un vasisi Martinuzzi'nin (Frater György) entrikaları sonucu ilişkiler bozuldu; Osmanlı kuvvetleri Becs, Beçkerek, Çanad ve Lipva'yı alarak sınır boyunda yeni bir harekâta girişti. Avusturya maddesine göre Habsburglar bu ödemeyi uzun süre yapmak zorunda kaldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1547-06-18|Habsburg"],
  kaynak:"TDV: suleyman-i (Veltwyck ve Sicco, Kasım 1545 mütarekesi, 18 Haziran 1547 divan kabulü, beş yıllık antlaşma, haraç hükmü, antlaşmanın önemi, Martinuzzi) · TDV: avusturya ('haraç' / 'munus honoriarium')",
  ic_not:"TDV haraç MİKTARINI vermiyor (literatürdeki yıllık 30.000 duka OKUNMADI, yazılmadı). Madde t:1547-06-18 elçilerin divana kabul günüdür; imza günü TDV'de 'Haziran 1547'." },

// ── 1553 OSMANLI-FRANSIZ İTTİFAKI ──────────────────────────────────────────
{ id:"antlasma4-fransa-1553", tur:"sebep-sonuc",
  kisa:"Bir Katolik kral, Habsburglara karşı bir Müslüman padişahla ittifak yaptı; 1536 ahidnâmesiyle başlayan yakınlaşma 1553'te iki donanmanın ortak harekâtına dönüştü.",
  sebep:{ b:"Fransa'nın V. Karl'a karşı müttefik arayışı ve 1536 ahidnâmesi", t:"1536-02-18" },
  sonuc:{ b:"Fransa'nın Habsburglara karşı Osmanlı Devleti ile yeni ittifakı", t:"1553-02-01" },
  bag:"Önemi: TDV'ye göre I. François'nın V. Karl'a karşı bir İslâm devletiyle yaptığı ittifak, Fransa'nın İslâm ülkeleriyle ilişkilerinin esasını oluşturur. Ama bu yakınlaşmanın ekonomik yüzü — kapitülasyonlar — ileride Osmanlı'nın aleyhine işleyecekti.",
  surec:"Fransa 1535'te Osmanlı'ya ilk dâimî elçisini gönderdi. 18 Şubat 1536'da I. François adına elçi Jean de la Forest ile Kanûnî adına Sadrazam İbrâhim Paşa arasında Fransa'ya ticarî imtiyazlar tanıyan bir anlaşma hazırlandı (TDV'ye göre tasarı uzun süre imzalanmadan sadrazamın yanında kaldı). 1543'te Nice'e karşı ortak bir deniz harekâtı yapıldı; elçi Gabriel d'Aramon'un faaliyetleriyle iş birliği güçlendi. 1547'de tahta çıkan II. Henri önce tereddüt etse de babasının siyasetine döndü; 1551 Trablusgarp fethinden sonra ortak donanma harekâtı hazırlandı.",
  hukumler:[
    "Fransa ile Osmanlı Devleti Habsburglara karşı ittifak yaptı (1 Şubat 1553).",
    "Fransız ve Osmanlı donanmaları Akdeniz'de İspanyollara karşı ortak harekâtta bulunacaktı."
  ],
  metin:"İttifak Akdeniz'de ortak harekâtla uygulandı. İş birliğinin ekonomik temeli 1536 ahidnâmesiydi: Osmanlı sınırları içinde Fransız tüccar, misyoner ve diplomatlara dinî, ticarî ve hukukî alanlarda önemli imtiyazlar tanındı; daha önce İtalyan devletlerine verilenlerden çok daha fazlası. 1569'da II. Selim Kıbrıs seferine hazırlanırken Fransa'nın Venedik'e yardım etmesini önlemek için yeni imtiyazlar içeren bir ferman verdi; nitekim İnebahtı'daki Haçlı donanmasına Fransa katılmadı. Kapitülasyonlar 1604'te yenilendi ve 1740'ta sürekli hâle getirildi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1553-02-01|Fransız"],
  kaynak:"TDV: fransa (1535 ilk dâimî elçi, 18 Şubat 1536 anlaşması, 1543 Nice, 1 Şubat 1553 ittifakı, 1569 fermanı, İnebahtı'ya katılmama, ittifakın Fransız dış siyasetindeki yeri) · TDV: suleyman-i (II. Henri'nin tutumu, 1551 sonrası ortak harekât)",
  ic_not:"1536 ahidnâmesinin imzalanıp imzalanmadığı literatürde tartışmalıdır; TDV 'tasarı uzun süre imzalanmadan sadrazamın yanında kaldı' diyor ve ayrıca '1536 ahidnâmesi' ifadesini kullanıyor — kart ikisini de aktardı, hüküm vermedi." },

// ── 1573 OSMANLI-VENEDİK ANTLAŞMASI (KIBRIS) ───────────────────────────────
{ id:"antlasma4-venedik-kibris-1573", tur:"sebep-sonuc",
  kisa:"Venedik İnebahtı'da kazandı ama savaşı kaybetti: iki yıl sonra Kıbrıs'ı resmen bıraktı ve üstüne tazminat ödedi.",
  sebep:{ b:"Kıbrıs'ın fethi (1570-1571) ve İnebahtı deniz savaşı (1571)", t:"1570-09-09" },
  sonuc:{ b:"Osmanlı-Venedik antlaşması — Kıbrıs'ın hukuken Osmanlı'ya geçişi", t:"1573-03-07" },
  bag:"Önemi: TDV'ye göre adanın hukuken Osmanlı hâkimiyetine girmesi bu antlaşmayla mümkün oldu. İnebahtı'dan sonra Haçlı ittifakının dağıldığını ve Osmanlı donanmasının bir kış içinde yeniden kurulduğunu gösterdi; Venedik, zafer kazandığı bir savaşın sonunda toprak ve para verdi.",
  surec:"Lefkoşe 9 Eylül 1570'te fethedildi, Magosa 1 Ağustos 1571'de teslim oldu. İnebahtı'daki yenilgiye rağmen yeniden kurulan Osmanlı donanması ertesi yazın Haziran'ında Akdeniz'e açıldı; TDV'ye göre bundan sonra müttefikler bir daha toparlanamadı ve Venedik barışa yöneldi. Sadrazam Sokullu Mehmed Paşa, Osmanlıları batıda ve doğuda yeni çatışmalardan uzak tutan siyasetin temsilcisiydi.",
  hukumler:[
    "Venedik Kıbrıs'ı Osmanlılara terk etti.",
    "Venedik 300.000 duka tazminat ödeyecekti."
  ],
  metin:"Antlaşma 3 Zilkade 980 / 7 Mart 1573 tarihlidir. Fethin sebebi, TDV'ye göre, Doğu Akdeniz çevresindeki ülkeler birer birer ele geçirildikten sonra adanın kazandığı stratejik önem ve Venedik'in 1540 barışına rağmen adada üslenen Maltalı ve Venedikli korsanlara kayıtsız kalmasıydı. Barıştan sonra Kıbrıs beylerbeyilik hâline getirildi ve Anadolu'dan Alâiye, Tarsus, İçel, Zülkadriye ve Sîs sancakları ona bağlandı. Venedik'le barış korundu; 1574'te Koca Sinan Paşa ve Kılıç Ali Paşa Tunus'u aldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1573-03-07|Kıbrıs"],
  kaynak:"TDV: kibris (fethin tarihleri, 3 Zilkade 980 / 7 Mart 1573 antlaşması, 300.000 duka, fethin sebepleri, beylerbeyiliğin kuruluşu) · TDV: sokullu-mehmed-pasa (İnebahtı sonrası donanma, Venedik'in barışa yönelmesi)" },

// ── 1580 İNGİLTERE'YE İLK AHİDNÂME ────────────────────────────────────────
{ id:"antlasma4-ingiltere-1580", tur:"sebep-sonuc",
  kisa:"Fransız bayrağı altında ticaret yapmak zorunda kalan İngiliz tüccarı, İstanbul'a gönderdiği tek bir temsilciyle Venedik ve Fransa'nın imtiyazlarına ortak oldu.",
  sebep:{ b:"İngiliz tüccarları Osborne ve Staper'ın temsilcileri William Harborne'ı İstanbul'a göndermesi", t:"1578-10" },
  sonuc:{ b:"III. Murad'ın İngiliz tüccarlarına ahidnâme vermesi", t:"1580" },
  bag:"Önemi: Osmanlı-İngiliz resmî ilişkilerinin başlangıcı. Hemen ardından 1581'de Londra'da Levant Company kuruldu ve İngilizler 1825'e kadar bölgedeki ticaretlerini bu şirket üzerinden yürüttü. İspanya'ya karşı ortak düşman duygusu ilişkiye siyasî bir boyut da kattı.",
  surec:"1553'te Kanûnî Halep'teyken Antony Jenkinson'a vergisiz ticaret izni verilmişti ama Jenkinson bu imtiyazı kullanmadı. Fransa'daki din savaşlarının yarattığı fırsatla Edward Osborne ve Richard Staper, Osmanlı ülkesindeki ticari potansiyeli araştırmak üzere William Harborne'ı Ekim 1578'de İstanbul'a gönderdi. Harborne, İngiltere ile ticaretin yararına inanan Sokullu Mehmed Paşa ve Hoca Sâdeddin Efendi'nin desteğiyle padişahla görüşebildi. Kraliçe I. Elizabeth ile III. Murad arasında mektuplar teati edildi. Fransız ve Venediklilerin itirazlarına rağmen ahidnâme verildi.",
  hukumler:[
    "İngiliz tüccarları, Fransız ve Venediklilere daha önce verilen ticari imtiyazlardan (kapitülasyon) aynı derecede yararlanacaktı."
  ],
  metin:"Harborne 1583'te İngiltere'nin İstanbul'daki dâimî elçisi oldu. Halefi Edward Barton sarayın güvenini kazanıp ahidnâmeyi 1601'de yeniletti; bu ahidnâmeye Hollanda gemilerinin İngiliz bayrağı taşıması ve İngiliz konsolosluklarına bağlı olması da konuldu (1604'te korundu). TDV'ye göre XVII. yüzyılda ilişkiler büyük ölçüde ticaret eksenli gelişti; sürekli yenilenen kapitülasyonlar zamanla iki devlet arasında baskı unsuruna dönüştü. İngiliz elçilerinin arabuluculuk geleneği de buradan doğdu; Lord Paget 1699'da Karlofça'da resmî arabulucu oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1580-01-01|İngiltere"],
  kaynak:"TDV: ingiltere (Jenkinson 1553, Harborne'ın gönderilişi Ekim 1578, Sokullu ve Hoca Sâdeddin'in desteği, 1580 ahidnâmesi ve hükmü, Levant Company 1581, Harborne 1583, Barton 1601, Paget 1699) · TDV: hollanda (1601 ve 1604 ahidnâmelerinde Hollanda gemilerine dair madde)",
  ic_not:"TDV ahidnâmenin gününü vermiyor ('1580 tarihli'); madde t:1580-01-01 yıl hassasiyetinde." },

// ── 1612 HOLLANDA'YA İLK AHİDNÂME ──────────────────────────────────────────
{ id:"antlasma4-hollanda-1612", tur:"sebep-sonuc",
  kisa:"İspanya'ya karşı bağımsızlık savaşı veren bir cumhuriyetin elçisi, Fransız ve İngiliz elçilerinin engellemelerine rağmen padişahın huzuruna çıktı — ve kendi bayrağıyla ticaret hakkını aldı.",
  sebep:{ b:"Hollandalı tüccarların Fransız, sonra İngiliz bayrağı altında ticaret yapmak zorunda kalması", t:"1601-12" },
  sonuc:{ b:"I. Ahmed'in Felemenk Birleşik Cumhuriyeti'ne ilk ahidnâmeyi vermesi", t:"1612-07-06" },
  bag:"Önemi: Osmanlı Devleti, İspanya'ya karşı bağımsızlık mücadelesi veren Felemenk Birleşik Cumhuriyeti'ni resmen tanımış oldu. 1680'de aynen yenilenen bu ahidnâme, kapitülasyonların kaldırıldığı 1923 Lozan Antlaşması'na kadar Akdeniz'deki Hollanda varlığını şekillendirdi.",
  surec:"1536 ahidnâmesiyle Hollandalı tüccarlar Fransız bayrağı altında ticaret yapıyordu; 1601 ve 1604 İngiliz ahidnâmeleri onları İngiliz bayrağına bağladı. Felemenk Genel Meclisi Cornelis Haga başkanlığında bir heyeti İstanbul'a göndermeye karar verdi; Haga 7 Eylül 1611'de yola çıktı ve 17 Mart 1612'de İstanbul'a geldi. Tâlimatında Hollandalı esirlerin serbest bırakılması ve kendi bayrakları altında ticaret hakkı vardı. Fransız ve İngiliz elçileri, İspanya'ya isyan etmiş bir ülkenin temsilcisini kabul etmenin padişahın itibarını sarsacağını söyleyerek kabulünü engelledi. Kaptanıderyâ Halil Paşa'nın yardımıyla Haga 1 Mayıs 1612'de I. Ahmed tarafından kabul edildi; Venedik, Fransa ve İngiltere elçilerinin engellemelerine rağmen ahidnâmeyi aldı.",
  hukumler:[
    "Fransa ve İngiltere'ye verilenlerle aynı imtiyazlar tanındı.",
    "Felemenk Birleşik Cumhuriyeti'ne İstanbul'da elçilik açma hakkı verildi.",
    "Osmanlı iskelelerinde konsolosluk açma hakkı verildi.",
    "Bazı adlî ve ticarî imtiyazlar tanındı; Hollandalı esirlerin serbest bırakılması için hükümler konuldu."
  ],
  metin:"Osmanlı hükümeti yeni müttefikini tanımak için Kaptanıderyâ Halil Paşa'nın adamı Ömer Ağa'yı Hollanda'ya gönderdi; Ömer Ağa önce ahidnâme suretleriyle Tunus ve Cezayir'e gidip Hollandalı esirleri kurtardı. Padişahın isteği üzerine Haga dâimî elçi olarak İstanbul'da kaldı (1612-1639); Leiden Üniversitesi'nde Arap ve Türk dilleri kürsüsünün kurulması da onun gayretleriyle gerçekleşti. TDV'ye göre Osmanlılar Hollanda'ya daha çok İspanya'ya karşı ittifak kurulabilecek bir deniz gücü olarak siyasî açıdan bakıyor, Hollandalılar ise işin ticarî yönüyle ilgileniyordu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1612-07-06|Hollanda"],
  kaynak:"TDV: hollanda (bayrak meselesi, Haga'nın yolculuğu ve kabulü, 6 Temmuz 1612 ahidnâmesi ve hükümleri, Ömer Ağa, 1680 yenilemesi, Lozan'a kadar süren etkisi)" },

// ── 1612 NASUH PAŞA ANTLAŞMASI ─────────────────────────────────────────────
{ id:"antlasma4-nasuh-pasa-1612", tur:"sebep-sonuc",
  kisa:"Şah Abbas'ın kazandıklarını tanıyan bir barış: yeni sadrazam, her yıl 200 yük ipek karşılığında İran'la Kanûnî devrinin sınırlarına döndü.",
  sebep:{ b:"Kuyucu Murad Paşa'nın Tebriz yakınlarına kadar ilerlemesi ve Şah Abbas'ın barış teklifi", t:"1610" },
  sonuc:{ b:"İstanbul'da İran ile barış (Nasuh Paşa Antlaşması)", t:"1612-11-20" },
  bag:"Önemi: 1578'de başlayan Osmanlı-Safevî savaşlarının ilk turunda Ferhad Paşa Antlaşması'yla kazanılan geniş toprakların fiilen elden çıktığının kabulüdür; barış 1555 Amasya sulhunu esas aldı. Ama ipek taahhüdü yerine getirilmeyince savaş kısa sürede yeniden başladı.",
  surec:"1610'da Kuyucu Murad Paşa Tebriz yakınlarındaki Acıçay'a kadar gelince Şah Abbas barış teklif etti ve her yıl 200 yük ipek vermeyi taahhüt etti. Kuyucu'nun Ağustos 1611'de ölümünden sonra sadrazam olan Nasuh Paşa'nın ilk önemli icraatı bu teklifi kabul etmek oldu. Nasuh Paşa kışı serhadde geçirdi, Mayıs 1612'de Diyarbekir'den Halep'e geçip İran elçilerini bekledi. Şah Abbas kazaskerinin yanına İsfahan ve Kazvin kadılarını katarak elçilik heyeti gönderdi; sadrazam heyetle birlikte İstanbul'a geldi.",
  hukumler:[
    "Barış 962 (1555) Amasya sulhu esas alınarak yapıldı.",
    "İran her yıl 200 yük ipek verecekti."
  ],
  metin:"Barış 26 Ramazan 1021 / 20 Kasım 1612'de İstanbul'da yapıldı. TDV'ye göre üç yıl sonra taahhüdünü yerine getirmeyen Şah Abbas'a karşı gönderilen Öküz Mehmed Paşa'nın Revan seferi başarısız oldu; 100 yük ipek şartıyla yapılan bir antlaşma Sultan Ahmed tarafından kabul edilmedi ve savaş 1618 Serav antlaşmasına kadar sürdü. Nasuh Paşa aynı yıl Zitvatorok hükümlerinin Edirne'de yeniden görüşülmesini ve Avusturya barışının teyidini de yürüttü.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1612-11-20|Nasuh"],
  kaynak:"TDV: nasuh-pasa (barış teklifinin kabulü, İran elçilik heyeti, 26 Ramazan 1021 / 20 Kasım 1612, 1555 sulhunun esas alınması, 200 yük ipek) · TDV: abbas-i (Acıçay, taahhüdün yerine getirilmemesi, Revan seferi)" },

// ── 1618 SERAV ANTLAŞMASI ──────────────────────────────────────────────────
{ id:"antlasma4-serav-1618", tur:"sebep-sonuc",
  kisa:"Erdebil önünde yenilen Osmanlı ordusu, intikam yürüyüşüne çıkarken Safevîlerin barış teklifini aldı; ipek haracı yarıya indi, geri kalan her şey Nasuh Paşa'daki gibi kaldı.",
  sebep:{ b:"Nasuh Paşa Antlaşması'nın ipek taahhüdünün yerine getirilmemesi ve 1615-1618 savaşları", t:"1615" },
  sonuc:{ b:"Serav Antlaşması — İran'la barışın yenilenmesi", t:"1618-09" },
  bag:"Önemi: 1612 barışını, ipek miktarını düşürerek yeniden kurdu ve altı yıl (1624'e kadar) yürürlükte kaldı. Bağdat'ın 1624'te Safevîlere geçmesiyle başlayacak yeni savaşların öncesindeki son Osmanlı-Safevî barışıdır.",
  surec:"Sadrazam Kayserili Halil Paşa kışı Diyarbekir'de geçirip Mayıs 1618'de İran'a karşı harekete geçti. Osmanlı ordusu 10 Eylül 1618'de Erdebil yakınlarında yenildi. Halil Paşa yenilginin intikamını almak üzere Erdebil'e yürüme kararı alınca Safevîler barış istedi ve bir anlaşma zemini oluştu. Genç Padişah II. Osman antlaşmayı İstanbul'da tasdik etti ama memnuniyetsizliğini, Halil Paşa'yı 18 Ocak 1619'da sadâretten alarak gösterdi.",
  hukumler:[
    "Daha önceki antlaşmalar (Nasuh Paşa, 1612) esas alındı.",
    "Tek değişiklik: İran'ın yıllık ipek vergisi 100 yüke indirildi."
  ],
  metin:"TDV'ye göre Serav Muahedesi adı verilen antlaşma 29 Eylül 1618'de II. Osman tarafından tasdik edildi ve 1624'e kadar yürürlükte kaldı. II. Osman'ın batıya, Lehistan'a yönelmesi (1621 Hotin seferi) doğu cephesindeki bu barış sayesinde mümkün oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1618-09-26|Serav"],
  kaynak:"TDV: halil-pasa-kayserili (Erdebil yenilgisi 10 Eylül 1618, antlaşmanın hükmü, 29 Eylül 1618 tasdiki, 1624'e kadar yürürlük, azli) · TDV: osman-ii (Safevîlerin sulh istemesi, İstanbul'da tasdik, 18 Ocak 1619 azil) · TDV: abbas-i",
  ic_not:"TDV imza gününü vermiyor; tasdik 29 Eylül 1618. Madde t:1618-09-26 (imza günü olabilir, kaynağı bu oturumda OKUNMADI)." },

// ── 1621 HOTİN ANTLAŞMASI ──────────────────────────────────────────────────
{ id:"antlasma4-hotin-1621", tur:"sebep-sonuc",
  kisa:"Genç padişahın tabyalar önünde tıkanan seferi, Osmanlı lehine bir barışla bitti ve zafer diye ilân edildi — ama ordunun padişaha güveni burada kırıldı.",
  sebep:{ b:"II. Osman'ın Kazak akınları ve Lehistan'la süren savaş hali üzerine Lehistan seferine çıkması", t:"1621" },
  sonuc:{ b:"Hotin önlerinde Osmanlı-Leh antlaşması", t:"1621-10-09" },
  bag:"Önemi: Dinyester'i Osmanlı-Leh sınırı olarak tespit etti. Seferin sonuçsuzluğu, II. Osman ile kapıkulu arasındaki güvensizliği derinleştirdi ve 1622'deki tahttan indirilişine giden yolu açtı.",
  surec:"Avrupa'da Otuzyıl Savaşları'nın karışıklığı ve Habsburglarla barış (27 Şubat 1618 anlaşması) Lehistan seferini kolaylaştırıyordu. II. Osman sefer kararından sonra kardeşi Şehzade Mehmed'i öldürttü (12 Ocak 1621). Chodkiewicz komutasındaki Leh-Litvanya ordusu, Sahajdačnyj idaresindeki Ukrayna Kazaklarının da yardımıyla, küçük ve kullanışsız kalenin yakınında hendek ve tabyalarla güçlü bir savunma hattı kurmuştu. Padişahın bizzat çabasına rağmen hücumlar sonuç vermedi; paşalar arasındaki rekabet ve idarî beceriksizlikler başarısızlığın başlıca âmilleriydi. II. Osman sadrazamı azledip Dilâver Paşa'yı getirdi (17 Eylül 1621). Bu sırada gelen barış teklifi Osmanlılar lehine olduğundan kabul edildi.",
  hukumler:[
    "Dinyester (Turla) nehri sınır sayıldı.",
    "Hotin Kalesi Osmanlı'ya tâbi Boğdan voyvodalarının idaresine bırakıldı."
  ],
  metin:"Antlaşma 9 Ekim 1621'de imzalandı; padişah 23 Zilkade'de (9 Ekim) İstanbul'a dönmek üzere Hotin önlerinden ayrıldı. Sonuç alınamamasına rağmen sefer büyük bir zafer olarak ilân edildi. TDV'ye göre Hotin'de yeterli muhafız ve silah bırakılmadı. II. Osman'ın sefer sırasında askeri tek tek saydırması ve fevrî davranışları kapıkulunu rahatsız etmişti; Karaçelebizâde, padişahın başarısızlık yüzünden askere kırgın olduğunu ve bu duygularla hacca niyet ettiğini yazar — bu niyet 1622'deki isyanın kıvılcımlarından biri oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1621-10-09|Hotin"],
  kaynak:"TDV: hotin (Leh-Kazak tahkimatı, 9 Ekim 1621 antlaşması, Dinyester sınırı, Hotin'in Boğdan voyvodalarına bırakılışı) · TDV: osman-ii (seferin sebepleri, 1618 Habsburg anlaşması, Şehzade Mehmed'in katli, başarısızlık sebepleri, Dilâver Paşa, barış teklifinin kabulü, zafer ilânı, sonraki güvensizlik)" },

];

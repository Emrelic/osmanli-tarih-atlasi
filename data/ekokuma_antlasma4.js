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

// ═══ PARTİ 2 · 1713 – 1830 ═══════════════════════════════════════════════
// Atlananlar (kendi antlaşma kartı zaten var — hükümler ekokuma/_antlasma2'de,
// sebep-sonuç eşinde): Vasvar 1664 · Bucaş 1672 · Karlofça 1699 · İstanbul 1700 ·
// Prut 1711 · Pasarofça 1718 · Belgrad 1739 (Niş/Rusya hükümleri de o kartta) ·
// Küçük Kaynarca 1774 · Yaş 1792 · Bükreş 1812 · Edirne 1829 · Bahçesaray 1681
// (ekokuma_rivayet sebep-sonuç kartı). Gence 1735: Rusya-İran antlaşması, Osmanlı
// taraf değil (D111; TDV iran). ABD 1830: TDV `amerika-birlesik-devletleri`
// antlaşmayı anmıyor, akademik kaynak bu turda OKUNMADI — yazılmadı.

// ── 1713 EDİRNE ANTLAŞMASI (RUSYA) ─────────────────────────────────────────
{ id:"antlasma4-edirne-rusya-1713", tur:"sebep-sonuc",
  kisa:"Prut'ta kuşatılan çar kurtulmak için imza atmıştı; o imzanın gereğini yaptırmak iki yıl, iki savaş ilânı ve yeni bir antlaşma aldı.",
  sebep:{ b:"Rusya'nın Prut Antlaşması (1711) hükümlerini yerine getirmeyi sürüncemede bırakması", t:"1711-07-21" },
  sonuc:{ b:"Edirne'de Rusya ile yeni antlaşma — Azak'ın Osmanlı'da kalması", t:"1713-06-24" },
  bag:"Önemi: Prut zaferinin kâğıt üstündeki kazancını fiilî kazanca çevirdi; Azak ve çevresi Osmanlı'ya döndü ve kuzey cephesi yirmi yıl kadar sustu. TDV'ye göre bundan sonra Osmanlı gözünü Karlofça'da kaybedilen Mora'ya çevirdi.",
  surec:"Prut'taki temessük asıl barışın İstanbul'da yapılacağını söylüyordu ve TDV'ye göre hükümlerin yerine getirilmesi sürüncemede kaldı. Osmanlı Devleti Rusya'ya iki kez daha savaş ilân etti; İsveç Kralı XII. Karl'ın Osmanlı topraklarındaki faaliyetleri de gerginliği besliyordu. 27 Nisan 1713'te sadrazam olan Silâhdar (Şehid) Ali Paşa'nın ilk işi, Prut Antlaşması'nın Rusya ve Lehistan'la ilgili bazı maddelerini açıklığa kavuşturmak ve Rusya'yı şartlara uymaya zorlamak oldu. Çarın imzasının gereği, TDV'nin ifadesiyle ancak yine tehditle, Edirne'de yapılan antlaşmayla sağlandı.",
  hukumler:[
    "Prut Antlaşması'nın Rusya ve Lehistan'la ilgili bazı maddeleri açıklığa kavuşturuldu.",
    "Rusya Prut'ta verdiği taahhütleri yerine getirecekti; Azak ve çevresi Osmanlı'ya bırakıldı.",
    "(Sınır düzenlemesinin ayrıntıları TDV'de okunmadı.)"
  ],
  metin:"Antlaşma 24 Haziran 1713 tarihlidir. Azak 1736'da yeniden Rus eline geçti ve 1739 Belgrad Antlaşması'yla istihkâmları yıkılmak şartıyla Rusya'ya bırakıldı. Silâhdar Ali Paşa, Rus meselesi kapandıktan sonra Venediklilerin Karlofça'ya aykırı davranışlarını gerekçe gösterip 1714'te Venedik'e savaş açtı; Mora kısa sürede geri alındı (1715) ve bu savaş 1718 Pasarofça'ya uzandı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1713-06-24|Edirne Antlaşması"],
  kaynak:"TDV: ahmed-iii (24 Haziran 1713 Edirne antlaşması, Azak'ın geri alınması, Mora hedefi) · TDV: prut-antlasmasi (hükümlerin sürüncemesi, iki savaş ilânı, 1713 Edirne) · TDV: sehid-ali-pasa (27 Nisan 1713 sadâret, Prut maddelerinin açıklığa kavuşturulması) · TDV: azak (1713'te Osmanlı'ya bırakılış, 1736, 1739)",
  ic_not:"TDV sehid-ali-pasa Ali Paşa'nın bu işini 'Temmuz 1713' diye tarihliyor; ahmed-iii ve prut-antlasmasi antlaşmayı 24 Haziran 1713 veriyor. Madde 24 Haziran'da; fark muhtemelen tasdik/uygulama aşamasıdır, hüküm verilmedi. Hüküm listesi bilerek kısa — antlaşmanın madde metni okunmadı." },

// ── 1724 İSTANBUL (İRAN) MUKĀSEMENÂMESİ ────────────────────────────────────
{ id:"antlasma4-iran-mukasemenamesi-1724", tur:"sebep-sonuc",
  kisa:"Çöken Safevî ülkesinin üzerinde iki imparatorluk karşı karşıya geldi; savaşmak yerine Fransız elçisinin aracılığıyla haritayı paylaştılar.",
  sebep:{ b:"Afgan istilâsıyla Safevî Devleti'nin çökmesi ve Rusya'nın Derbend ile Bakü'yü alması", t:"1722" },
  sonuc:{ b:"İstanbul'da Rusya ile İran Mukāsemenâmesi", t:"1724-06-24" },
  bag:"Önemi: Osmanlı ile Rusya'nın bir üçüncü ülkenin toprağını aralarında paylaştığı antlaşma. İki devletin Kafkasya'nın doğusunda çatışmasını önledi ve Osmanlı ordusunun Batı İran'a yayılmasının hukukî zeminini kurdu; ama kalıcı olmadı, çünkü paylaşılan ülke yeniden ayağa kalktı.",
  surec:"İran'daki kargaşada Osmanlı ordusu doğu sınırını güvenceye almak için Batı İran şehirlerine girmek zorunda kaldı; Ruslar ise 1723'te Derbend ve Bakü'yü almıştı. İki devlet Kafkasya'nın doğusunda karşı karşıya geldi. TDV iran maddesine göre Rusya, şahlık iddiasındaki II. Tahmasb ile bir anlaşma yapıp Hazar kıyısındaki vilâyetleri ilhak etmiş, karşılığında ona askerî yardım vaat etmişti; bu Osmanlı sarayını endişelendirdi. Fransız elçisi Marquis de Bonnac'ın aracılığıyla İstanbul'da ahidnâme imzalandı.",
  hukumler:[
    "Osmanlı ve Rus işgalindeki İran ve Kafkasya toprakları iki devlet arasında paylaşıldı; paylaşım resmîleşti.",
    "İki devlet bu yolla aralarındaki gergin duruma son verdi."
  ],
  metin:"Antlaşmadan sonra Osmanlı ordusu Gence, Nahcıvan, Hoy, Revan, Merend, Selmâs, Sîne, Kirmanşah, Nihâvend ve Hemedan'ı aldı (Hemedan 31 Ağustos 1724'te, elli dokuz günlük kuşatmadan sonra). Yenilen II. Tahmasb mukāsemenâmenin şartlarını kabule mecbur oldu; ancak formaliteler tamamlanmadan Afganlı Mîr Üveysoğulları onu tahttan indirdi. Yeni hâkim Eşref Han antlaşmayı tanımadı ve batı şehirlerini istedi; Kasım 1726'da Nihâvend yakınında Osmanlı ordusu yenildi. İsfahan'ı alma teşebbüsü ise sonuçsuz kaldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1724-06-24|Mukāsemenâmesi"],
  kaynak:"TDV: ahmed-iii (Derbend-Bakü meselesi, Bonnac aracılığı, 24 Haziran 1724, sonraki fetihler, Eşref Han) · TDV: iran (Rusya-Tahmasb anlaşması, 1136/1724 ahidnâmesi, paylaşımın resmîleşmesi) · TDV: hemedan (31 Ağustos 1724 fethi)",
  ic_not:"TDV antlaşmanın paylaşım çizgisini ayrıntılı VERMİYOR (hangi vilâyetin kime düştüğü okunmadı); kart bilerek genel kaldı." },

// ── 1727 HEMEDAN ANTLAŞMASI ────────────────────────────────────────────────
{ id:"antlasma4-hemedan-1727", tur:"sebep-sonuc",
  kisa:"Sahada yenilen taraf masada kazandı: Osmanlı'nın yeni bir sefere hazırlandığı haberi, Afgan şahını geniş tavizlere razı etti.",
  sebep:{ b:"Eşref Han'ın 1724 paylaşımını tanımaması ve Nihâvend'deki Osmanlı yenilgisi", t:"1726-11" },
  sonuc:{ b:"Eşref Han ile Hemedan Mukāsemenâmesi", t:"1727-10-04" },
  bag:"Önemi: Osmanlı'nın İran'da ulaştığı en geniş sınırı kâğıda geçirdi. TDV'ye göre bu mesele III. Ahmed'in saltanatı için bir dönüm noktası oldu: doğudaki kanlı savaşlar padişaha ve Sadrazam Nevşehirli İbrâhim Paşa'ya karşı düşmanlığı artırdı ve 1730 Patrona Halil isyanına giden zemini hazırladı.",
  surec:"Afgan Mîr Mahmud'u 1725'te tahttan indiren Eşref Han, İran'ın batı şehirlerinin kendisine bırakılmasını istiyordu. Kasım 1726'da Nihâvend yakınında Osmanlı ordusu İran-Afgan kuvvetlerine yenildi ve Eşref, Irak cephesi kumandanı Bağdat Valisi Ahmed Paşa'yı Hemedan'dan çıkardı. Buna rağmen durumu kötüleşen Eşref barışı tercih etti. TDV'ye göre İran'daki karışıklık ve Osmanlı ordusunun yeni sefer hazırlığı haberinin Hemedan'a ulaşması, antlaşmaya Osmanlı lehine hükümler konmasını sağladı.",
  hukumler:[
    "III. Ahmed bütün Müslümanların halifesi olarak tanındı.",
    "1724 Mukāsemenâmesi'nde adı geçen İran ve Kafkasya toprakları Osmanlı'da kaldı.",
    "Bunlara ek olarak Hûzistan, Zencan, Kazvin, Sultâniye ve Tahran eyaletleri Osmanlı idaresine geçti.",
    "Eşref Han İran Kürdistanı'nı, Azerbaycan'ı, Karabağ'ı ve Gürcistan'ı Osmanlı'ya bıraktı (TDV iran)."
  ],
  metin:"Kazanımlar kısa ömürlü oldu. Safevî hânedanını ihya etmek üzere II. Tahmasb'ın yanında yer alan Afşar aşiretinden Nâdir (Tahmasb Kulı) Afganları yendi; İranlılar Nihâvend'i aldı ve Hemedan 2 Temmuz 1730'da Safevîlere geçti. TDV'ye göre doğudaki kanlı savaşlar padişaha ve sadrazama karşı düşmanlığı artırdı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1727-10-04|Hemedan Antlaşması"],
  kaynak:"TDV: ahmed-iii (Eşref Han, Kasım 1726 Nihâvend, 4 Ekim 1727 Hemedan Mukāsemenâmesi, Osmanlı lehine hükümler, dönüm noktası) · TDV: iran (hilâfetin tanınması, ek eyaletler, bırakılan bölgeler) · TDV: ahmed-pasa (Eşref ile savaş ve antlaşma) · TDV: hemedan (1730'da Safevîlere geçiş)",
  ic_not:"🔴 TDV KENDİ İÇİNDE ÇELİŞİYOR, hüküm verilmedi: ahmed-iii '4 Ekim 1727', ahmed-pasa 'ertesi yıl (1727)'; ama hemedan maddesi Hemedan Barış Antlaşması'nı '17 Safer 1141 (22 Eylül 1728)' diye veriyor — neredeyse bir yıl fark. Madde t:1727-10-04 çoğunluğa uyuyor; ayrıca bildirildi." },

// ── 1732 AHMED PAŞA ANTLAŞMASI ─────────────────────────────────────────────
{ id:"antlasma4-ahmed-pasa-1732", tur:"sebep-sonuc",
  kisa:"Bağdat valisi zaferden sonra barış imzaladı ve Tebriz'i İran'a bıraktı; padişah antlaşmayı tanımadı, barışı yapanları görevden aldı ve savaş yeniden başladı.",
  sebep:{ b:"II. Tahmasb'ın Safevî gücünü toparlayıp Batı İran'daki Osmanlı kazanımlarına saldırması", t:"1730" },
  sonuc:{ b:"Ahmed Paşa ile Muhammed Rızâ Kulı arasında barış antlaşması", t:"1732-01-10" },
  bag:"Önemi: Osmanlı'nın 1724-1727 kazanımlarının bir kısmından vazgeçtiği ilk antlaşma. Tebriz'in bırakılması İstanbul'da kabul görmedi; antlaşma barış getirmek yerine yeni bir savaşın ve Nâdir'in yükselişinin başlangıcı oldu.",
  surec:"Safevîler 1730'da Hemedan'ı geri aldı. Şark seraskerliğine getirilen Bağdat Valisi Ahmed Paşa 15 Eylül 1731'de (TDV hemedan: 16 Eylül, Korican) İranlıları yendi ve Hemedan'a yeniden girdi; Hekimoğlu Ali Paşa da Urmiye ve Tebriz'i aldı. Ardından Ahmed Paşa ile İran tarafından Muhammed Rızâ Kulı arasında barış imzalandı. TDV ahmed-pasa'ya göre Ahmed Paşa bu seferde önce Kirmanşah ve Erdelân'ı almıştı.",
  hukumler:[
    "Tebriz, Erdelân, Kirmanşah, Hemedan, Huveyze ve Luristan İran'a bırakıldı.",
    "Gence, Tiflis, Revan, Şirvan, Şemâhî ve Dağıstan dolayları Osmanlı'da kaldı."
  ],
  metin:"I. Mahmud Tebriz'in İran'a bırakılmasına karşı çıktı; barış taraftarı Sadrazam Topal Osman Paşa ile Şeyhülislâm Paşmakçızâde Abdullah Efendi'yi görevden aldı, Beşir Ağa'nın telkiniyle Hekimoğlu Ali Paşa'yı sadrazam yaptı ve 6 Ekim 1733'te İran'a savaş ilân edildi. Kandehar'dan dönen Nâdir de anlaşmayı tanımadı, II. Tahmasb'ı azledip III. Abbas'ı tahta çıkardı (1732), Kerkük'e saldırıp Bağdat'ı sekiz ay kuşattı; kuşatma Erzurum Valisi Osman Paşa'nın yardımıyla kaldırıldı. Hemedan ise bu antlaşmayla kalıcı olarak İran'da kaldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1732-01-10|Ahmed Paşa"],
  kaynak:"TDV: mahmud-i--osmanli (15 Eylül 1731 zaferi, 12 Receb 1144 / 10 Ocak 1732 antlaşması ve paylaşımı, I. Mahmud'un itirazı, aziller, 6 Ekim 1733 savaş ilânı, Nâdir'in reddi, Bağdat kuşatması) · TDV: hemedan (16 Eylül 1731 Korican, 10 Receb 1144 / 8 Ocak 1732, Hemedan'ın İran'a bırakılışı) · TDV: ahmed-pasa (1732 antlaşmasında kısmî muhafaza) · TDV: iran (III. Abbas'ın tahta çıkarılışı 1732)",
  ic_not:"🔴 GÜN FARKI, TDV içinde: mahmud-i--osmanli '12 Receb 1144 / 10 Ocak 1732', hemedan '10 Receb 1144 / 8 Ocak 1732' (zafer günü de 15/16 Eylül 1731 diye bir gün farklı). Madde t:1732-01-10. Kuşatmayı kaldıran TDV'de 'Erzurum Valisi Osman Paşa'; Topal Osman Paşa ile aynı kişi olup olmadığı bu kartta iddia edilmedi." },

// ── 1736 İSTANBUL ANTLAŞMASI (NÂDİR ŞAH) ────────────────────────────────────
{ id:"antlasma4-istanbul-iran-1736", tur:"sebep-sonuc",
  kisa:"Nâdir Şah tahtını tanıtmak ve Caferîliği beşinci mezhep kabul ettirmek istedi; ikincisi reddedildi, ama Kafkasya'daki Osmanlı kazanımları elden çıktı.",
  sebep:{ b:"Nâdir'in Gence, Tiflis ve Revan'ı geri alması ve Osmanlı-Rus ilişkilerinin bozulması", t:"1735" },
  sonuc:{ b:"Nâdir Şah ile 1639 Kasr-ı Şirin esasına dayanan anlaşma", t:"1736" },
  bag:"Önemi: 1722'den beri süren Osmanlı yayılmasının İran'daki son kazanımlarını da geri verdi ve sınırı 1639 çizgisine döndürdü. Rusya ile savaşın eşiğindeki Osmanlı için doğu cephesini kapatmanın bedeliydi. Mezhep meselesi ise çözülmedi, 1746'ya taşındı.",
  surec:"Nâdir 1733'te Bağdat'ı alamadıysa da Gence, Tiflis ve Revan'ı topraklarına kattı; 1735'te Ruslarla yaptığı Gence Antlaşması'yla Derbend ve Bakü'yü geri aldı. Rusya ile arası açılan Osmanlı, İran'la anlaşma yolları aradı ve 1639 Kasr-ı Şirin şartları zemin oldu. 1736 baharında Mugan kurultayında şah seçilen Nâdir, Abdülbâki Han'ı teklifleriyle İstanbul'a gönderdi: Caferî mezhebinin tanınması, her yıl İran'dan Mekke'ye bir emîr-i hac gönderilmesi, esir mübadelesi ve karşılıklı daimî elçi. Görüşmeler İstanbul'da sonuç vermeyince Mustafa Ağa İran'a gönderildi.",
  hukumler:[
    "Barış 1639 Kasr-ı Şirin Antlaşması esasına göre yapıldı.",
    "Caferîliğin beşinci mezhep olarak kabulü teklifi reddedildi.",
    "Nâdir'in şahlığı tanındı; buna karşılık İran'da Sünnîliğin resmen ilânı şart koşuldu."
  ],
  metin:"TDV antlaşmayı 1149 (1736) yılına koyar. Gence, Tiflis ve Revan 1733-1735'te zaten Nâdir'in eline geçmişti; antlaşmanın bu yerlere dair bir hükmü TDV'de okunmadı. Aynı yıl Ruslar Azak'a saldırdı (Mart 1736) ve Osmanlı 2 Mayıs 1736'da Rusya'ya savaş kararı aldı; Avusturya da savaşa katıldı. Doğudaki barış kısa sürdü: Nâdir 1743'te Kerkük'ü aldı ve Bağdat'ı kuşattı, son Osmanlı-İran savaşı 1746 Kerden Antlaşması'yla bitti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1736-09-01|Güney Kafkasya"],
  kaynak:"TDV: mahmud-i--osmanli (anlaşma zemini, Abdülbâki Han'ın teklifleri, Mustafa Ağa, 1149/1736 anlaşması ve şartları, 1736 Rus savaşı) · TDV: iran (1733-1735 kazanımları, 1735 Gence Antlaşması, 1736 Mugan kurultayı) · TDV: avsarlilar",
  ic_not:"TDV yalnız YIL veriyor (1149/1736); madde t:1736-09-01 ay/gün kaynaksız (maddenin kendi gun alanı da '1736'). 1149 hicrî yılı 1736 Mayıs'ında başlar." },

// ── 1740 FRANSA KAPİTÜLASYONLARI ───────────────────────────────────────────
{ id:"antlasma4-fransa-kapitulasyon-1740", tur:"sebep-sonuc",
  kisa:"Belgrad barışında aracılık eden Fransız elçisi ödülünü aldı: her padişahla yenilenmesi gereken imtiyazlar artık süresiz oldu.",
  sebep:{ b:"Fransız elçisi Villeneuve'ün 1739 Belgrad antlaşmalarındaki aracılığı", t:"1739-09-18" },
  sonuc:{ b:"Fransa kapitülasyonlarının genişletilip sürekli hâle getirilmesi", t:"1740" },
  bag:"Önemi: TDV fransa maddesi bunu yabancı ve azınlık hakları açısından bir dönüm noktası sayar. Bir ahidnâmenin saltanat değişikliğinde yeniden gözden geçirilmesi esası kalktı; dostluk nişanesi olarak verilen imtiyazlar kalıcı bir hukukî yükümlülüğe dönüştü ve XIX. yüzyılda Kutsal Yerler meselesinde koz olarak kullanıldı.",
  surec:"Osmanlılarda kapitülasyon gibi önemli ahidnâmeler saltanat değişikliklerinde yeniden gözden geçirilirdi. 1716-1740 arasında Fransa ile uzlaşma yeniden kuruldu. Marquis de Villeneuve, 1739'da Avusturya ve Rusya ile yapılan Belgrad antlaşmalarında aracı olmuş ve kralının garantisini getirmişti. Bu hizmetin ardından I. Mahmud kapitülasyonları genişletip yeniledi; aynı dönemde İsveç'le bir savunma antlaşması (4 Ocak 1740) ve Fransız elçisinin girişimiyle İspanya ile ticaret antlaşması da yapıldı.",
  hukumler:[
    "Daha önce her padişahın yenilediği kapitülasyonlara devamlılık kazandırıldı; Villeneuve bunları halefleri adına da onaylattı.",
    "Fransa'nın vergi muafiyeti ve hukukî ayrıcalıkları teyit edildi.",
    "Bazı Batılı devletlerin gemilerinin Osmanlı limanlarına Fransız bayrağıyla girmesi hakkı teyit edildi.",
    "Katoliklere tanınan haklar bu metne girdi (TDV fransa, 1848 sonrası anlatıda)."
  ],
  metin:"TDV'ye göre 1739 barışlarıyla Osmanlı Devleti ile Avrupa devletleri arasında bir denge kuruldu ve 1768'e kadar sürecek uzun barış devri başladı. Sonraki yıllarda Fransızlar Levant ticaretinde ve Osmanlı limanları arasındaki taşımacılıkta öne çıktı. 1848'de iktidara gelen III. Napolyon, 1740 kapitülasyonlarıyla Katoliklere verilen hakları resmen talep etti; Rusya'nın Küçük Kaynarca'ya dayanan karşı talebiyle birlikte bu çekişme Kırım Savaşı'na giden yolu açtı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1740-05-30|Kapitülasyon"],
  kaynak:"TDV: fransa (Villeneuve'ün gayretiyle 1740'ta devamlılık, teyit edilen imtiyazlar, dönüm noktası, III. Napolyon'un talebi) · TDV: imtiyazat (yenileme esası, 1716-1740 uzlaşması, halefler adına onay, Levant taşımacılığı) · TDV: mahmud-i--osmanli (Villeneuve, İsveç 4 Ocak 1740, İspanya ticaret antlaşması, 1768'e kadar barış)",
  ic_not:"TDV yalnız YIL veriyor (1740); madde t:1740-05-30 gün kaynaksız. Kartın `sonuc.t` alanı bilerek '1740'." },

// ── 1746 KERDEN ANTLAŞMASI ─────────────────────────────────────────────────
{ id:"antlasma4-kerden-1746", tur:"sebep-sonuc",
  kisa:"Yüz yıldan fazla aralıklarla süren Osmanlı-İran savaşlarının sonuncusu, iki tarafa da toprak kazandırmadan 1639 sınırında bitti.",
  sebep:{ b:"Nâdir Şah'ın Kerkük'ü alıp Bağdat ve Musul'a yönelmesi (1743)", t:"1743-07" },
  sonuc:{ b:"Kerden'de Osmanlı-İran barışı", t:"1746-09-04" },
  bag:"Önemi: Kasr-ı Şirin sınırını ikinci kez teyit etti ve Osmanlı ile İran arasında uzun bir barış dönemi açtı. Nâdir Şah'ın Caferîliği beşinci mezhep kabul ettirme projesi bu antlaşmayla fiilen düştü.",
  surec:"Nâdir Şah'ın Kafkasya girişimleri tepki topladı; Bağdat Valisi Ahmed Paşa'dan Bağdat'ı istemesi, ardından Bağdat ve Kerkük'ü kuşatması ve Temmuz 1743'te Kerkük'ü alması yeni bir savaş açtı. İran orduları 1745 yazında Kars ve Musul yakınlarında Osmanlı birliklerini ağır yenilgiye uğrattı; Çekilen İran ordusunu Revan'da yakalayan Osmanlı seraskerinin çarpışmada ölmesi askerin dağılmasına ve Kars'ın düşmesine yol açtı. Ama Diyarbekir Valisi Abdullah Paşa'nın Hemedan akınları ve ülkesinin ekonomik sıkıntısı Nâdir'i barışa itti. Şah Caferîlik isteğinden vazgeçtiğini bildirdi, ama Musul ve Basra'yı istedi. İstanbul'a gelen Feth Ali Han şahın samimi olduğunu söyleyince anlaşmaya karar verildi; Nazif Mustafa Efendi Osmanlı tekliflerini Kazvin'de şaha iletti.",
  hukumler:[
    "Kasr-ı Şirin Antlaşması'nın (1639) sınırlara dair şartları iki tarafça yeniden tanındı.",
    "İranlılar sahâbeye hürmetkâr olacaktı.",
    "Hacıların ve yolcuların güvenliği sağlanacaktı.",
    "Esirler iade edilecekti."
  ],
  metin:"Antlaşma 17 Şâban 1159 / 4 Eylül 1746'da, TDV iran maddesine göre Tahran yakınlarındaki bir ordugâhta imzalandı. Nâdir Şah'ın dostluk nişanesi olarak gönderdiği Taht-ı Tâvûs ve öteki hediyeler, şahın bir suikastla öldürülmesinin ardından çıkan karışıklıklar yüzünden uzun süre Bağdat'ta kaldı ve ancak III. Mustafa döneminde İstanbul'a getirilebildi. I. Mahmud, İran'daki karışıklık sırasında da barışçı tavrını sürdürdü.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1746-09-04|Kerden"],
  kaynak:"TDV: mahmud-i--osmanli (Nâdir'in 1743 saldırıları, Revan, Abdullah Paşa'nın akınları, Feth Ali Han, Nazif Mustafa Efendi, 17 Şâban 1159 / 4 Eylül 1746, hükümler, Taht-ı Tâvûs) · TDV: iran (1745 yenilgileri, Tahran yakınlarındaki ordugâh, esas madde)",
  ic_not:"TDV mahmud-i Revan'da ölen seraskerin adını bu bölümde vermiyor; kartta da ad yazılmadı. TDV iran imza yerini 'Tahran yakınları', mahmud-i 'Bağdat Valisi Ahmed Paşa nezdinde' diyor; madde 'Kerden, Kazvin yakınları'. Yer hükmü verilmedi." },

// ── 1779 AYNALIKAVAK TENKİHNÂMESİ ──────────────────────────────────────────
{ id:"antlasma4-aynalikavak-1779", tur:"sebep-sonuc",
  kisa:"Küçük Kaynarca'nın 'bağımsız Kırım'ı bir savaşa dönüşmek üzereydi; bir açıklama metni savaşı erteledi ama Kırım'ı Rusya'ya bir adım daha yaklaştırdı.",
  sebep:{ b:"Kırım hanlığına Rusya'nın Şâhin Giray'ı, Osmanlı'nın III. Selim Giray'ı çıkarmak istemesi", t:"1778" },
  sonuc:{ b:"Aynalıkavak Kasrı'nda Tenkihnâme", t:"1779-03-10" },
  bag:"Önemi: TDV'ye göre bu antlaşmayla Ruslar yalnız Kırım'da değil, Balkanlardaki bütün Hıristiyan ve özellikle Ortodoks tebaa üzerindeki hâmi rollerini de güçlendirdiler. Osmanlı'nın Rus adayını han tanıması, dört yıl sonraki ilhakın (1783) önünü açtı.",
  surec:"1774 Küçük Kaynarca Antlaşması Kırım'ı bağımsız ilân etmişti. Ruslar Şâhin Giray'ı hanlığa getirmek istedi; I. Abdülhamid ona hanlık menşuru göndermeyip III. Selim Giray'ı han yapmak istedi. Şâhin Giray, Kefe ve öteki limanları işgal eden Rusların desteğiyle 1777 kışında duruma hâkim oldu ve 1778'de III. Selim Giray'ın teşebbüslerini boşa çıkardı; pek çok Kırımlı Osmanlı topraklarına göç etti. İki devlet savaşın eşiğine gelmişken Fransızlar araya girdi. İki devletin temsilcileri, Küçük Kaynarca'nın bazı maddelerini açıklığa kavuşturmak için İstanbul'da Haliç kıyısındaki Aynalıkavak Kasrı'nda bir araya geldi.",
  hukumler:[
    "Kırım bağımsız kalacaktı.",
    "Ruslar Kırım'dan askerlerini çekecekti.",
    "Osmanlı Devleti Şâhin Giray'ın hanlığını tasdik edecekti.",
    "Eflak ve Boğdan'da Hıristiyanlık serbestçe yaşanacak, yeni kiliseler yapılabilecekti.",
    "İbrâil, Hotin ve Bender kaleleri civarında olup 1739 Belgrad Antlaşması'yla Osmanlı'ya geçen yerler geri verilecekti.",
    "Küçük Kaynarca'dan sonra Mora'da el konulan araziler eski Hıristiyan sahiplerine iade edilecekti."
  ],
  metin:"TDV şâhin-giray maddesine göre tenkihnâme Şâhin Giray için önemli bir başarıydı, çünkü Ruslar da kuvvetlerini çekmişti; ama han halkın desteğini kazanmak yerine reformlarını hızlandırdı. Rusların asıl amacı artık Kırım'da doğrudan hâkimiyetti ve Rusya 1783'te yarımadayı ilhak etti. Osmanlı ise Rus siyasetine karşı Kafkasya'nın güneyini nüfuzu altına almayı düşünerek Doğu Karadeniz'de Soğucak ve Anapa kalelerini tamir ve tahkim etti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1779-03-10|Aynalıkavak"],
  kaynak:"TDV: abdulhamid-i (menşur meselesi, Fransız aracılığı, Aynalıkavak Kasrı, hükümler, Rus hâmiliğinin güçlenmesi, Soğucak-Anapa) · TDV: sahin-giray (1777-1778 olayları, göç, 1779'da hanlığın tanınması, Rus askerinin çekilmesi) · TDV: aynalikavak-sarayi (Küçük Kaynarca maddelerinin açıklığa kavuşturulması için görüşmeler)",
  ic_not:"TDV yalnız YIL veriyor (1779); madde t:1779-03-10 gün kaynaksız. Mora iadesi hükmü TDV'de 'Küçük Kaynarca Antlaşması'yla Mora'da ele geçirilen arazi' diye geçiyor; kartta anlam korunarak özetlendi." },

// ── 1790 OSMANLI-PRUSYA İTTİFAKI ───────────────────────────────────────────
{ id:"antlasma4-prusya-1790", tur:"sebep-sonuc",
  kisa:"Osmanlı diplomatları savaşın ortasında Rusya'ya karşı savaşmayı vaat eden bir müttefik buldu; Berlin ise vaadi hiç yerine getirmedi, ama Avusturya'yı barışa zorladı.",
  sebep:{ b:"1787-1790 iki cepheli savaş ve Prusya'nın Avusturya'nın Osmanlı toprağıyla büyümesinden kaygılanması", t:"1788-02-09" },
  sonuc:{ b:"İstanbul'da Osmanlı-Prusya ittifak antlaşması", t:"1790-01-31" },
  bag:"Önemi: Savaşın ortasında bir Avrupa devletiyle yapılmış saldırı-savunma ittifakı. TDV'ye göre Rusya'ya karşı savaşı öngörmesi Osmanlı devlet adamları için gerçek bir başarıydı; ama asıl sonucu Reichenbach Konvansiyonu ve Ziştovi barışıyla Avusturya cephesinin toprak kaybı olmadan kapanması oldu.",
  surec:"Prusya Başbakanı Hertzberg'in planına göre Osmanlı Kırım'dan vazgeçecek, Besarabya ile Özi'yi Rusya'ya, Eflak ve Boğdan'ı Avusturya'ya bırakacak; Avusturya Galiçya'yı Polonya'ya, Polonya da Danzig, Thorn, Posen ve Kaliç'i Prusya'ya verecekti. Planın uygulamaya konması beklenmedik bir sonuç verdi ve Prusya, savaşın ortasında Osmanlı ile her iki düşmanına karşı bir ittifaka yöneldi. Prusya'nın İstanbul'daki elçisi Friedrich von Diez'di.",
  hukumler:[
    "Saldırı ve savunma amaçlı ittifak; her iki düşmana (Rusya ve Avusturya) karşı.",
    "İlk madde gereğince Prusya Rusya'ya karşı savaşa girmeyi üstlendi."
  ],
  metin:"Antlaşma Berlin'de kabul görmedi. Kral onu tasdik etse de ittifakın öngörülenden fazla sorumluluk getirdiği açıkça söylendi, yalnız Avusturya'yı barışa zorlamak için askerî tedbir alındı ve sorumluluk elçi Diez'e yüklendi; Hertzberg de Diez de görevlerini bırakmak zorunda kaldı. Prusya kralı ordusuyla Avusturya'yı tehdit ederek 27 Temmuz 1790 Reichenbach Konvansiyonu'nu imzalattı ve Avusturya savaş öncesi duruma dönerek barışa razı oldu. Ahmed Azmî Efendi'nin 11 Kasım 1790'da Berlin'e elçi gönderilmesi de Prusya'yı Rusya'ya karşı harekete geçiremedi; Rus savaşı 10 Ocak 1792 Yaş Antlaşması'na kadar sürdü. TDV ziştovi maddesine göre Ziştovi görüşmeleri sırasında 1790 ittifakının yerine bir savunma antlaşması düşünüldü, ama Avrupa'daki hızlı değişim onu da gereksiz kıldı ve 1790 ittifakı hükümsüz kaldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1790-01-31|Prusya"],
  kaynak:"TDV: prusya (Hertzberg planı, 31 Ocak 1790 ittifakı, Berlin'in tepkisi, Diez, Reichenbach, Ahmed Azmî Efendi, Yaş) · TDV: zistovi-antlasmasi (ilk madde, savunma antlaşması tasarısı, ittifakın hükümsüz kalması)",
  ic_not:"Hükümlerin tam madde listesi TDV'de OKUNMADI; yalnız anılan iki husus yazıldı. Hertzberg planının unsurları TDV prusya maddesinde; ziştovi maddesi planı biraz farklı özetliyor (Pasarofça esası), kart prusya'yı esas aldı." },

// ── 1791 ZİŞTOVİ ANTLAŞMASI ────────────────────────────────────────────────
{ id:"antlasma4-zistovi-1791", tur:"sebep-sonuc",
  kisa:"Yedi ay, on sekiz oturum ve 'status quo' kelimesi üzerine uzun bir kavga: Osmanlı ile Avusturya arasındaki son barış, iki devleti rakiplikten yakınlaşmaya taşıdı.",
  sebep:{ b:"Avusturya'nın Rusya'nın müttefiki olarak savaşa katılması (9 Şubat 1788) ve Reichenbach Konvansiyonu", t:"1790-07-27" },
  sonuc:{ b:"Ziştovi'de Osmanlı-Avusturya barışı", t:"1791-08-04" },
  bag:"Önemi: TDV'ye göre yüzyıllarca süren Osmanlı-Habsburg mücadelesine son verdi ve Balkanlara sarkan Rusya karşısında iki devletin birbirine daha yakın durduğu yeni bir dönemin başlangıcı oldu. Avusturya, 1533-1791 arasında Osmanlı ile yaptığı yirmi birinci barışla, üç buçuk yıllık savaştan küçük kazançlarla çıktı.",
  surec:"II. Joseph, Fransız İhtilâli ve ülkesindeki ayaklanma belirtileri yüzünden savaşı bitirmek istiyordu; ardılı II. Leopold de aynı fikirdeydi. Prusya kralı ordusuyla Silezya'ya yürüdü ve 27 Temmuz 1790'da Avusturya'ya Reichenbach Konvansiyonu'nu kabul ettirdi. 18 Eylül 1790'da Yergöğü'nde dokuz aylık, altı maddelik mütareke imzalandı. Görüşme yeri uzun tartışıldı: III. Selim düşman işgalindeki bir yerde görüşmeyi yenilgi sayıyordu ve Tuna kıyısındaki Ziştovi seçildi. Aracılar İngiltere, Hollanda ve Prusya'ydı (Lucchesini); Osmanlı'yı Reîsülküttâb Abdullah Birrî Efendi temsil etti. 30 Aralık 1790'da başlayan görüşmeler 'status quo' teriminin anlamı üzerine yedi oturum tıkandı; Avusturya delegesi Herbert 10 Haziran 1791'de Bükreş'e çekildi. Prusya kralının müdahalesi ve Fransa'daki gelişmelerin Avusturya'yı endişelendirmesiyle heyet 18 Temmuz'da döndü. Osmanlı, Eski Hırsova (Orsova) ve Unna boyundaki bazı taleplere razı oldu.",
  hukumler:[
    "Esas antlaşma (14 madde): Sırbistan, Karadağ, Bosna ve Memleketeyn halkının savaştaki tutumları için genel af.",
    "İki devlet arasındaki bütün eski antlaşmalar geçerli sayıldı.",
    "Avusturya ele geçirdiği bütün yerleri geri verecek; yalnız Hotin'i Rus barışına kadar emaneten tutacaktı.",
    "Bütün savaş esirleri serbest bırakılacaktı.",
    "Sınır bölgelerinde ticaret ve seyahat sürecek; Katolik mezhebi ve hac serbestliği korunacaktı.",
    "Son maddeler elçi değişimi ve tasdik süresini düzenledi.",
    "Ayrı senet (muâhede-i mahsûsa, 7 madde): Çerna suyu yöresi ve Eski Hırsova (Orsova) tahkim edilmemek şartıyla Avusturya'ya bırakıldı; Unna boyundaki sınır Avusturya'nın isteğine uygun düzenlendi."
  ],
  metin:"Antlaşma 4 Zilhicce 1205 / 4 Ağustos 1791'de imzalandı, 12 Ağustos'ta onaylandı ve 23 Ağustos'ta Ziştovi'de törenle değiş tokuş edildi. TDV'ye göre bütün savaş esirlerinin serbest bırakılması o güne kadar pek görülmemiş bir uygulamaydı. Barışın faturası ağırdı: görüşmelerin masrafı 600.000 kuruşa ulaştı ve aracı elçilere verilecek ikramiye nakit ödenemediğinden hazine tezkiresiyle karşılandı. Osmanlı-Rus savaşı ise Yaş Antlaşması'na (10 Ocak 1792) kadar sürdü. TDV, barışın Prusya'nın askerî baskısının eseri olduğunu, ama Avusturya'yı barışa yanaştıran en önemli etkenin Fransa'daki gelişmeler olduğunu da vurgular.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1791-08-04|Ziştovi"],
  kaynak:"TDV: zistovi-antlasmasi (Kemal Beydilli — savaşın seyri, Reichenbach, Yergöğü mütarekesi, yer seçimi, heyetler, status quo tartışması, Herbert'in çekilmesi, 4 Ağustos 1791, esas metin ve ayrı senet, onay ve teati, masraf, önem) · TDV: prusya (Reichenbach, Ziştovi)",
  ic_not:"TDV 'Eski Hırsova' yazıyor; bu Tuna'daki Orsova'dır (Hırsova Dobruca'daki ayrı yer). Kartta kaynak ifadesi korunup parantez içinde 'Orsova' eklendi — bu parantez bir yorumdur." },

// ── 1802 PARİS ANTLAŞMASI (FRANSA) ─────────────────────────────────────────
{ id:"antlasma4-paris-1802", tur:"sebep-sonuc",
  kisa:"Napolyon'un Mısır seferi, üç yüz yıllık 'kadim dost'u düşmana çevirmişti; Mısır boşaltılınca Paris'te dostluk yeniden kuruldu.",
  sebep:{ b:"Napolyon'un Mısır'ı işgali ve Osmanlı'nın İngiltere ve Rusya ile ittifakı", t:"1798-07-01" },
  sonuc:{ b:"Paris'te Osmanlı-Fransız barışı", t:"1802" },
  bag:"Önemi: Osmanlı'nın İngiltere ve Rusya ile birlikte Fransa'ya karşı savaştığı dönemi kapattı ve Fransa ile ilişkileri yeniden kurdu. Fransa'ya yakınlaşma, ileride İngiltere ve Rusya ile ittifaktan çıkış ve 1806-1807 savaşları anlamına gelecekti.",
  surec:"Napolyon Bonapart İtalya'yı aldı, Venedik Cumhuriyeti'nin yıkılıp paylaşılmasıyla (Ekim 1797) Fransa Adriyatik'te Osmanlı'ya komşu oldu ve 1 Temmuz 1798'de Mısır'ı işgal etti. Osmanlı Devleti Rusya'nın da içinde olduğu bir ittifaka katılarak Fransa ile savaştı (TDV selim-iii: Ocak 1799; TDV fransa: işgalden iki ay sonra). İngiliz ve Rus müttefiklerin yardımıyla Fransa Mısır'ı terk etmek zorunda kaldı. Barış, Paris büyükelçisi (Seyyid) Ali Efendi'nin gayretleriyle yapıldı.",
  hukumler:[
    "Osmanlı ile Fransa arasındaki savaş hali sona erdi ve ilişkiler yeniden kuruldu.",
    "(Kapitülasyonların yenilenmesi ve öteki maddeler TDV'de okunmadı.)"
  ],
  metin:"III. Selim için barış bir iç kazanım da getirdi: Mısır'a sevk edilen az sayıdaki nizamlı askerin başarıları Nizâm-ı Cedîd'i haklı çıkarıyor görünüyordu. Aynı yıl Napolyon Avusturya'yı yendi ve İngiltere'yi de anlaşmaya zorladı. Fransa'nın güçlenmesi ve Napolyon'un imparatorluğunun Avrupa'da tanınması Osmanlı'yı da Fransa yanlısı bir siyasete itti; bu, 1806'da İngiltere ve Rusya ile savaş durumu doğurdu ve İngiliz filosu Şubat 1807'de İstanbul önlerine geldi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1802-06-25|Paris"],
  kaynak:"TDV: fransa (Mısır işgali, İngiltere-Rusya ittifakı, 1802'de Ali Efendi'nin gayretiyle barış) · TDV: selim-iii (Venedik'in yıkılışı, Ocak 1799 ittifakı, 1802 barışı ve nizamlı askerin başarısı, 1806 savaşı, Şubat 1807)",
  ic_not:"TDV yalnız YIL veriyor (1802); madde t:1802-06-25 gün kaynaksız. Kart `sonuc.t` '1802'. İttifakın tarihi TDV içinde iki biçimde (Eylül 1798 civarı / Ocak 1799); ikisi de yazıldı." },

// ── 1808 SENED-İ İTTİFAK ───────────────────────────────────────────────────
{ id:"antlasma4-sened-i-ittifak-1808", tur:"sebep-sonuc",
  kisa:"Bir sadrazam, taşranın güçlü âyanlarını İstanbul'a çağırıp padişahla bir sadakat sözleşmesi imzalattı; sözleşmeyi yapan sadrazam altı hafta sonra öldü, sözleşme de onunla gömüldü.",
  sebep:{ b:"Âyanın merkezî otorite aleyhine güçlenmesi ve Alemdar Mustafa Paşa'nın II. Mahmud'u tahta çıkarması", t:"1808-07-28" },
  sonuc:{ b:"Merkez bürokrasisi ile âyan arasında Sened-i İttifak", t:"1808-10-07" },
  bag:"Önemi: TDV'ye göre Osmanlı tarihinde benzeri görülmeyen bir metin. Bazı araştırmacılar onu Magna Carta'ya benzetir; TDV ise ortaya çıkış ve içerik bakımından bazı benzerlikler bulunsa da sonuçları bakımından iki belgenin benzediğini söylemenin güç olduğunu, Sened-i İttifak'ın ileri bir devlet düzeni öngören bir belge olmadığını vurgular.",
  surec:"Kabakçı Mustafa isyanıyla tahttan indirilen III. Selim'i geri getirmek için askerleriyle İstanbul'a gelen Rusçuk âyanı Alemdar Mustafa Paşa, III. Selim öldürülünce 28 Temmuz 1808'de II. Mahmud'u tahta çıkardı ve sadrazam oldu. Düzen için âyanla görüşmek gerektiğini düşünerek onları İstanbul'a davet etti; Tepedelenli Ali Paşa ve uzak yerlerdeki bazı âyan gelmedi. II. Mahmud 29 Eylül 1808'de Kâğıthane'deki Çağlayan Kasrı'nda âyanı kabul etti. Alemdar'ın başkanlığındaki toplantıda şeyhülislâm, devlet ricâli, yeniçeri ağası ve âyan bir araya geldi. Senedi bürokrasinin ileri gelenleriyle Çapanoğlu Süleyman Bey, Sirozlu İsmâil Bey, Karaosmanoğlu Ömer Ağa ve Çirmen mutasarrıfı Mustafa Bey imzaladı. II. Mahmud maddeleri ağır buldu; başçuhadarının 'onayla, sonra kaldır' tavsiyesine uyarak bir hatt-ı hümâyunla tasdik etti.",
  hukumler:[
    "1. Padişahın zatı ve saltanatı devletin esasıdır; imzacılar ve onların hânedanları buna kefildir, her türlü ihanet el birliğiyle önlenecektir.",
    "2. Toplanacak asker devlet askeri olarak yazılacak; Kapıkulu ocakları karşı gelirse el birliğiyle cezalandırılacaktır.",
    "3. Hazine gelirleri tahsil edilecek, hazinenin zararı önlenecek, padişahın emrine karşı gelenler cezalandırılacaktır.",
    "4. Sadrazamın emri padişahın emri sayılacak; herkes kendi yetkisi içinde kalacak; sadrazamın yolsuzluğu da önlenecektir.",
    "5. Âyan ve devlet ricâli birbirine kefil olacak; kurala uyan âyana saldırana el birliğiyle karşı konacak, halka eziyet eden âyanı sadrazam cezalandıracaktır.",
    "6. İstanbul'da isyan çıkarsa âyan izin almadan gelip onu bastırabilecektir.",
    "7. Vergiler halkın ödeyebileceği ölçüde olacak, ağır vergiler vükelâ ile âyanın görüşmesiyle hafifletilecektir.",
    "Sonuç: yeni atanan sadrazam ve şeyhülislâm senedi onaylayarak göreve başlayacaktır."
  ],
  metin:"Onaydan birkaç hafta sonra çıkan bir yeniçeri ayaklanmasında senedin mimarı Alemdar Mustafa Paşa öldü (16 Kasım 1808) ve senet sahipsiz kaldı; hiç uygulanmadı ve sonra kimse onu gündeme getirmedi. TDV'ye göre imzacılar metne sonradan sahip çıkmadı. Senet, padişah değişikliklerinde ne yapılacağını söylemiyordu; padişahın senetle bağlı olup olmadığı tartışılmıştır, ama TDV hatt-ı hümâyundaki ifadenin II. Mahmud'un uygulamayı bizzat üstlendiğini gösterdiğini belirtir.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1808-10-07|Sened-i İttifak"],
  kaynak:"TDV: sened-i-ittifak (arka plan, davet, 29 Eylül 1808 kabul, 7 Ekim 1808 metni, imzacılar, tasdik, yedi madde ve sonuç, 16 Kasım 1808, değerlendirme)",
  ic_not:"Bir devletlerarası antlaşma değil, iç sözleşme; envanterde 'antlaşma' etiketiyle geldiği için dahil edildi. Maddeler TDV'deki uzun anlatımın özetidir, metin kopyalanmadı." },

// ── 1809 KAL'A-İ SULTÂNİYYE ANTLAŞMASI ──────────────────────────────────────
{ id:"antlasma4-kalai-sultaniyye-1809", tur:"sebep-sonuc",
  kisa:"İki yıl önce İstanbul önlerine kadar gelen İngiliz filosunun devleti, Çanakkale'de barış imzaladı ve savaş gemilerinin Boğazlardan geçişini yeniden düzenledi.",
  sebep:{ b:"1806'da İngiltere ve Rusya ile savaş hali ve İngiliz filosunun İstanbul önlerine gelmesi", t:"1807-02" },
  sonuc:{ b:"Çanakkale'de İngiltere ile barış antlaşması", t:"1809-01" },
  bag:"Önemi: İngiltere ile savaşı bitirdi ve Boğazlardan savaş gemisi geçişini düzenleyen bir antlaşma olarak sonraki Boğazlar düzenlemelerinden (1833 Hünkâr İskelesi, 1841 Londra) önce gelen bir halkadır.",
  surec:"Fransa'ya yakınlaşan Osmanlı, İngiltere ve Rusya ile ittifaktan çıktı ve 1806'da savaş durumu doğdu. Rusya Eflak ve Boğdan'ı işgal etti; İngiltere bu işgali destekleyip donanmanın ve Çanakkale istihkâmlarının teslimini istedi. Bâbıâli reddedince İngiliz filosu Şubat 1807'de İstanbul önlerine geldi, ama direniş kararı karşısında bir şey yapamadan çekildi. Mart 1807'de İskenderiye ve Ebûkīr'e yapılan İngiliz çıkarması da Mehmed Ali Paşa'nın kuşatmasıyla sonuçsuz kaldı. II. Mahmud döneminde İngiliz elçisi Robert Adair ile Osmanlı temsilcisi Vâhid Efendi Çanakkale'de antlaşmayı imzaladı.",
  hukumler:[
    "İngiltere ile savaş hali sona erdi.",
    "İstanbul ve Çanakkale boğazlarından savaş gemilerinin geçişi yeniden düzenlendi.",
    "(Ticarî imtiyazlara dair maddeler ve hükümlerin metni TDV'de okunmadı.)"
  ],
  metin:"Antlaşmaya imzalandığı şehrin eski adıyla Kal'a-i Sultâniyye ya da Çanakkale Antlaşması denir. İngiltere ile savaş bitmiş olsa da Rus savaşı 28 Mayıs 1812 Bükreş Antlaşması'na kadar sürdü; Bükreş'le Besarabya kaybedildi ve Sırplara özerklik yolu açıldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1809-01-05|Sultâniyye"],
  kaynak:"TDV: canakkale (5 Ocak 1809, Adair ve Vâhid Efendi, savaş gemilerinin geçişi, antlaşmanın adı) · TDV: mahmud-ii--osmanli (9 Ocak 1809 Kal'a-i Sultâniyye Antlaşması'yla İngiltere savaşının sonu, Bükreş 1812) · TDV: ingiltere (1806-1807 olayları, Şubat 1807, İskenderiye çıkarması) · TDV: selim-iii (1806 savaş durumu)",
  ic_not:"🔴 GÜN FARKI, TDV içinde: canakkale '5 Ocak 1809', mahmud-ii--osmanli '9 Ocak 1809'. Madde t:1809-01-05; kartın `sonuc.t` bilerek ay hassasiyetinde. Maddenin kisiler alanı Osmanlı imzacısını 'Mustafa Reşid' diye veriyor; TDV canakkale 'Vâhid Efendi' diyor — madde dosyası bende değil, bildirildi." },

// ── 1826 AKKİRMAN ANTLAŞMASI ───────────────────────────────────────────────
{ id:"antlasma4-akkirman-1826", tur:"sebep-sonuc",
  kisa:"Yeniçeri Ocağı'nı kaldırdıktan dört ay sonra ordusuz kalan devlet, Rus isteklerini kabul etti; ama Rusya bu kazançlara rağmen bir yıl sonra savaş açtı.",
  sebep:{ b:"1820'lerde şiddetlenen Osmanlı-Rus sürtüşmeleri ve Yeniçeri Ocağı'nın kaldırılması", t:"1826-06-15" },
  sonuc:{ b:"Akkirman'da Osmanlı-Rus antlaşması", t:"1826-10-07" },
  bag:"Önemi: Sırbistan'ın özerkliğine giden yolda bir basamak ve Balkanlarda Rus nüfuzunun Osmanlı tarafından kabulü. TDV'ye göre Rusya bu antlaşmayla iki devlet arasında sürüncemede kalan meseleleri kendi isteği doğrultusunda çözmüş ve önemli haklar elde etmişti.",
  surec:"1812 Bükreş Antlaşması'yla Akkirman Rusya'ya geçmişti. 1820'lerde Yunan isyanı ve Memleketeyn meseleleriyle Osmanlı-Rus sürtüşmeleri yeniden şiddetlendi. Bu sırada II. Mahmud, 15 Haziran 1826'da son yeniçeri isyanını bahane ederek Yeniçeri Ocağı'nı kaldırdı. Antlaşma Rus tarafında M. S. Vorontsov ve Ribeaupierre (TDV'de 'A. I. Ripob'), Osmanlı tarafında Hâdi Paşa ve Köse İbrâhim Paşa tarafından Akkirman'da imzalandı.",
  hukumler:[
    "Sırbistan'ın muhtariyeti kabul edildi; Osmanlı Devleti Sırplara tanınacak hakların genişletileceğini garanti etti.",
    "Balkanlardaki Rus nüfuzu kabul edildi.",
    "(Eflak-Boğdan ve öteki maddeler TDV'de okunmadı.)"
  ],
  metin:"TDV'ye göre Rusya, Akkirman'da önemli haklar elde etmesine rağmen Rum meselesini bahane ederek savaş açtı; bu arada Navarin'de Osmanlı-Mısır donanması yakıldı (20 Ekim 1827). Rus orduları Edirne'ye kadar geldi ve 1829 Edirne Antlaşması'yla Sırplara bir fermanla yeni haklar tanındı; 17 Ekim 1830 imtiyaz fermanıyla Sırbistan muhtar bir prenslik oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1826-10-07|Akkirman"],
  kaynak:"TDV: akkirman (1812, 1820'ler sürtüşmesi, imzacılar, Sırp muhtariyeti ve Rus nüfuzu, 7 Ekim 1826) · TDV: mahmud-ii--osmanli (15 Haziran 1826, Akkirman'ın Rusya'ya kazandırdıkları, sonraki savaş) · TDV: sirbistan (hakların genişletilmesi garantisi, 1829, 17 Ekim 1830)",
  ic_not:"TDV akkirman Rus imzacıyı 'A. I. Ripob' diye yazıyor; madde 'Ribeaupierre'. Aynı kişi olduğu kabul edildi (yazım farkı), ayrıca doğrulanmadı." },

// ── 1827 LONDRA ANTLAŞMASI → 1830 LONDRA PROTOKOLÜ ─────────────────────────
{ id:"antlasma4-londra-yunan-1827-1830", tur:"sebep-sonuc",
  kisa:"Osmanlı'nın imzalamadığı ama sonuçlarına katlandığı iki metin: üç büyük devlet önce Osmanlı'ya bağlı bir Yunan beyliği, sonra bağımsız bir Yunan devleti kararlaştırdı.",
  sebep:{ b:"1821 Yunan isyanı, Sakız olaylarının Avrupa'daki yankısı ve Filhelenizm", t:"1826-04-04" },
  sonuc:{ b:"Londra Protokolü — Yunanistan'ın bağımsızlığı", t:"1830-02-03" },
  bag:"Önemi: TDV mahmud-ii'ye göre Yunan örneği, isyanla başlayıp büyük devletlerin müdahalesiyle bağımsızlığa varan ve ileride izlenecek bir yol olarak ortaya çıktı. TDV'ye göre bu protokollerin Müslümanların Yunan beyliğinden çıkarılmasını öngören maddesi, Balkanlardaki ilk etnik temizlik kararının Batılı büyük güçler tarafından Müslümanlara karşı alındığını gösterir.",
  surec:"Yunan isyancıların Müslümanları katletmesine misilleme olarak Sakız'da Rumlara karşı yapılan katliam Avrupa'da büyük yankı uyandırdı. İngiltere ve Rusya önce Saint Petersburg Protokolü'nü (4 Nisan 1826) imzaladı; ardından İngiltere, Fransa ve Rusya 6 Temmuz 1827'de Londra'da Osmanlı'ya yıllık vergi veren bir Yunan beyliği kurulmasını kararlaştırdı. Osmanlı hükümeti bu kararı reddetti. Müttefik donanma 20 Ekim 1827'de Navarin'de Osmanlı-Mısır donanmasını yaktı (52 gemi, 6000 denizci). 1828'de İbrâhim Paşa Mora'dan çekildi; Rusya savaş açıp Edirne'ye kadar geldi. 1829'da Mora'yı ve Atina'yı içine alan, Attika'dan Tesalya'ya uzanan bir Yunan devleti kuruldu ve Osmanlı Devleti 1830'da onu tanımak zorunda kaldı.",
  hukumler:[
    "1827 Londra: Osmanlı Devleti'ne yıllık vergi veren bir Yunan beyliği kurulacaktı.",
    "1827 Londra (ve 1826 Petersburg): Müslümanlar bu beylikten ve adalardan çıkarılacak, mülklerini Rumlara satacaklardı.",
    "1830 Londra Protokolü: Yunanistan bağımsız bir devlet olarak tanındı (protokolün öteki maddeleri TDV'de okunmadı)."
  ],
  metin:"Karar 1829-1832 arasındaki görüşme ve protokollerle uygulamaya kondu. Yeni devletin merkezi 1833'e kadar Anabolu'ydu, sonra Atina'ya taşındı ve eski Yunanistan'a atıfla Hellas adını aldı. TDV'ye göre bağımsız Yunan devleti, Osmanlı idaresindeki yaklaşık 2 milyonluk Rum nüfusun yarısından azını içeriyordu. Mora'daki Müslümanlar isyanın başında büyük kayıplar vermiş (Tripoliçe), İbrâhim Paşa'nın çekilmesinden sonra geride kalanlar da yok edilmişti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1827-07-06|Londra Antlaşması","1830-02-03|Londra Protokolü"],
  kaynak:"TDV: yunanistan (Sakız yankısı, 4 Nisan 1826 Petersburg, 6 Temmuz 1827 Londra, Müslümanların çıkarılması maddesi ve değerlendirmesi, Navarin, 1828-1830, Anabolu-Atina, nüfus, Tripoliçe) · TDV: navarin (20 Ekim 1827 baskını, kayıplar) · TDV: mahmud-ii--osmanli (Navarin, Rus savaşı)",
  ic_not:"Osmanlı iki metnin de TARAFI DEĞİL (D111 yazılı madde için geçerli; burada var olan iki çekirdek maddeye kart bağlandı, yeni madde yazılmadı). TDV yunanistan 1827 metnine de 'Londra Protokolü' diyor; çekirdek 1827 maddesi 'Londra Antlaşması', 1830 maddesi 'Londra Protokolü'. 1830 protokolünün gününü (3 Şubat) TDV vermiyor; yalnız 'Osmanlı 1830'da tanımak zorunda kaldı'. Kartın `sonuc.t`i maddenin gününü taşıyor — kaynağı madde dosyası." },

// ── 1828 İSKENDERİYE SÖZLEŞMESİ ────────────────────────────────────────────
{ id:"antlasma4-iskenderiye-1828", tur:"sebep-sonuc",
  kisa:"Donanması Navarin'de yakılan Mısır valisi, İstanbul'a sormadan bir İngiliz amiraliyle anlaştı ve oğlunun ordusunu Mora'dan çekti.",
  sebep:{ b:"Navarin baskını ve Avrupa devletlerinin Mehmed Ali Paşa'ya Mora'dan asker çekme ihtarı", t:"1827-10-20" },
  sonuc:{ b:"Mehmed Ali Paşa ile Amiral Codrington arasında İskenderiye anlaşması", t:"1828-08-06" },
  bag:"Önemi: Bir Osmanlı valisinin Bâbıâli'nin izni olmadan bir Avrupa devletiyle askerî bir anlaşma yapması, TDV'nin Mısır'da müstakil bir devlet kurmayı düşlediğini yazdığı Mehmed Ali Paşa'nın merkezden bağımsız hareketinin erken bir örneğidir; birkaç yıl sonra 1832 isyanına ve Kütahya'ya giden yolun habercisi oldu. Mora'nın boşaltılması Yunan devletinin kurulmasını fiilen mümkün kıldı.",
  surec:"İbrâhim Paşa'nın donanması 1825'ten beri Mora'daydı. Bir Yunan devleti kurulmasına karar veren Avrupa devletleri Mehmed Ali Paşa'dan askerini çekmesini istedi; o da ancak Osmanlı donanması imha edilip çekilme yolları kesilirse çekileceğini söyledi. TDV bu cevabı, İbrâhim Paşa'nın donanmayı limandan çıkarması yönündeki uyarılara uymayıp Mora içlerine çekilmesiyle birlikte düşündürücü bulur. Navarin'den (20 Ekim 1827) sonra İbrâhim Paşa kuvvetlerini babasından gelecek emirleri beklemek üzere Modon ve Koron'da topladı. Yunan meselesinin başka bir yolla çözüleceğini gören Mehmed Ali Paşa, İskenderiye'ye gelen İngiliz Amirali Codrington ile görüştü.",
  hukumler:[
    "Mısır kuvvetleri Mora'dan geri çekilecekti.",
    "Çekilme Bâbıâli'nin izni aranmadan kararlaştırıldı."
  ],
  metin:"Mehmed Ali Paşa İbrâhim Paşa'ya Mora'nın boşaltılması emrini gönderdi ve Mısır kuvvetleri 1828'de Mora'dan çekildi (TDV yunanistan). İbrâhim Paşa bundan sonra babasının yardımcısı olarak Mısır'da idarî ve askerî düzenlemelerle uğraştı; 1832'de Suriye'yi işgal edip Kütahya'ya kadar ilerleyecekti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1828-08-06|İskenderiye","1828-10-05|Mora"],
  kaynak:"TDV: ibrahim-pasa-kavalali (Avrupa devletlerinin ihtarı, Mehmed Ali'nin cevabı, Modon-Koron, 6 Ağustos 1828 Codrington anlaşması, Bâbıâli'nin izni olmadan çekilme) · TDV: yunanistan (1828'de İbrâhim Paşa'nın Mora'dan çekilişi) · TDV: navarin",
  ic_not:"Osmanlı merkezi taraf değil; taraf bir Osmanlı valisi. Tahliyenin tamamlanma günü (madde 1828-10-05) TDV'de OKUNMADI; madde dosyasına dayanıyor." },

];

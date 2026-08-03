// ============================================================================
// DERİNLEŞTİRME PARTİSİ 11 — hatalar 13, ANADOLU BLOĞU
// ============================================================================
// Oturum 13. Kullanıcının hatalar 13'te bildirdiği yedi maddenin kronoloji
// karşılığı. Ölçüm ve düzeltme listesi: `oturumlar/OTURUM-13-ANADOLU.md`.
//
// ---------------------------------------------------------------------------
// 🔴 index.html'e SATIR EKLENMELİ — bu dosya bugün tarayıcıya YÜKLENMİYOR
// ---------------------------------------------------------------------------
// `OGRENILENLER.md §15`: `olaylar_ek9.js` tam bu sebeple 13 madde boyunca
// görünmez kaldı — `denetle.py` `data/olaylar*.js` desenini okuyup SAYIYOR ve
// TEMİZ diyor, tarayıcı ise dosyayı hiç yüklemiyor. index.html Oturum 13'ün
// dosyası değildir; satırı sahibi ekleyecek:
//     <script src="data/olaylar_ek11.js?v=rNN"></script>
// (olaylar_ek9.js satırının hemen altına; ?v damgası da yükseltilmeli.)
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — üç maddenin de günü kaynakta YOK
// ---------------------------------------------------------------------------
// Üçü de yıl hassasiyetinde; `CLAUDE.md §4` gereği `YYYY-01-01` yazıldı ve
// gerçek belirsizlik `gun` alanında duruyor. Uydurma gün yazılmadı.
//   1401 — TDV `bagdat` yalnız "803 (1401)" diyor, ay/gün vermiyor.
//   1422 — TDV `aydinogullari` yalnız "(1422)" diyor.
//   1426 — TDV `aydinogullari` "829 (1425-26)", `cuneyd-bey` "1426" diyor.
//          İki madde arasındaki farkın kendisi kayda geçirildi.
//
// ---------------------------------------------------------------------------
// KAYNAK — kullanılan üç slug da `<title>` ile doğrulandı (2026-07-30)
// ---------------------------------------------------------------------------
//   bagdat          → "BAĞDAT - TDV İslâm Ansiklopedisi"          ✓
//   aydinogullari   → "AYDINOĞULLARI - TDV İslâm Ansiklopedisi"   ✓
//   cuneyd-bey      → "CÜNEYD BEY - TDV İslâm Ansiklopedisi"      ✓
// Ölü olduğu ölçülen ve KULLANILMAYAN: `duzmece-mustafa` (arama sayfası).
// Doğrusu `mustafa-celebi` ✓ CANLI.
// ============================================================================

window.OLAYLAR_EK11 = [

// ---------------------------------------------------------------------------
// A) hatalar 13 md.4 — Timur'un Bağdat'ı ikinci işgali
// ---------------------------------------------------------------------------
// Kronolojide 1393-08-29 maddesi zaten vardı (olaylar_ek5.js); 1401'deki
// ikinci ve asıl yıkıcı işgalin maddesi YOKTU.
// ⚠️ Bu madde tek başına haritayı değiştirmez: `yerlesimler.js`'te Bağdat
// 1281-1508 arası TEK bir `iran` dönemi taşıyor ve bu blok Celâyirli,
// Timurlu, Karakoyunlu ve Akkoyunlu devirlerinin dördünü birden siliyor.
// Ölçüm ve önerilen zincir: OTURUM-13-ANADOLU.md §2.

{ t:"1401-01-01", k:"savas", etiket:["yikim"],
  b:"Timur Bağdat'ı ikinci defa işgal etti — şehrin Abbâsî mahalleleri yıkıldı",
  gun:"1401 (803 h.; ay ve gün kaynakta yok)", yer:"Bağdat, Irâk-ı Arab",
  kisiler:"Timur, Ahmed Celâyir",
  d:"Timur Bağdat'ı sekiz yıl arayla iki defa aldı. 1393'teki ilk işgalde şehir fazla zarar görmemişti; 1401'deki ikincisi ise Bağdat'ın kültür hayatına indirilen ikinci ağır darbe sayılır — halk kılıçtan geçirildi, Abbâsî devrinden kalma mahalle ve binaların çoğu tahrip edildi. Celâyirli hükümdarı Ahmed 1405'te şehre dönüp yıkılan surları ve çarşıları onarmaya çalıştıysa da vakit bulamadı; Bağdat 1410'da Karakoyunlu Türkmenleri'nin eline geçti. Bu iki işgal, Ankara Savaşı'na giden yolda Timur'un Osmanlı ve Memlûk sınırlarına ne kadar yaklaştığını gösteren en somut adımlardan biridir.",
  kaynak:"bagdat" },

// ---------------------------------------------------------------------------
// B) hatalar 13 md.9-10 — Aydınoğulları'nın son müstakil devri
// ---------------------------------------------------------------------------
// Kullanıcı haritada Aydınoğulları'nın Düzmece Mustafa ayaklanması sırasında
// Osmanlı idaresinden çıktığını gördü ve "eğer gerçekse kronolojide görünmesi
// lazım" dedi. Ölçüm doğruladı: `yerlesimler.js` sekiz kayıtta `aydin`
// dönemini geri açıyor, ama o kırılmayı açıklayan tek madde "Düzmece Mustafa
// ayaklanması" ve içinde Aydınoğulları HİÇ geçmiyor. İki madde o boşluğu
// kapatır.

{ t:"1422-01-01", k:"kayip", etiket:["toprak-kaybi","siyaset"],
  b:"Cüneyd Bey Aydın-ili'nin başına döndü — Aydınoğulları yeniden müstakil",
  gun:"1422 (ay ve gün kaynakta yok)", yer:"İzmir, Ayasuluk, Tire, Birgi — Aydın-ili",
  kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Mustafa Çelebi (Düzmece Mustafa)",
  d:"Çelebi Mehmed 1414-15'te İzmir'i alıp Cüneyd Bey'i Niğbolu sancak beyliğine göndererek Aydın-ili'ni Osmanlı idaresine bağlamıştı. Cüneyd, Çelebi Mehmed'in ölümünden sonra Bizans'ın taht iddiacısı olarak öne sürdüğü Mustafa Çelebi'nin yanında yeniden sahneye çıktı ve ona vezirlik dahi yaptı. II. Murad, eski beyliğini geri vereceği vaadiyle onu bu ittifaktan ayırdı; Cüneyd de İzmir'e dönüp Ayasuluk'u ele geçirdi ve Aydınoğlu Mustafa Bey'i öldürerek beyliğin başına geçti. Böylece Aydın-ili, Düzmece Mustafa buhranının içinden Osmanlı idaresinden çıkmış olarak doğdu. Yılın ayı ve günü kaynakta bulunmadığı için tarih yıl hassasiyetinde yazılmıştır.",
  kaynak:"aydinogullari" },

{ t:"1426-01-01", k:"fetih", etiket:["toprak-kazanc","siyaset"],
  b:"Cüneyd Bey ve ailesinin idamı — Aydınoğulları Beyliği'nin sonu",
  gun:"1426 (829 h.; TDV iki maddede 1425-26 ve 1426 diyor, gün yok)",
  yer:"İpsili (Sisam karşısı), Aydın-ili", kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Anadolu Beylerbeyi Hamza Bey",
  d:"Aydın-ili'ne yeniden hâkim olan Cüneyd Bey'in Anadolu beylerini kışkırtması ve Venedik ile temas araması üzerine II. Murad, Anadolu Beylerbeyi Hamza Bey'i onun üzerine gönderdi. Oğlu Kurd Hasan Akhisar yakınlarında yenilip esir düşünce Sisam adası karşısındaki İpsili'ye çekilen Cüneyd, Karamanoğlu'ndan beklediği yardım gelmeyince ve Osmanlı ile birlikte hareket eden Cenevizliler onu denizden ablukaya alınca teslim olmak zorunda kaldı; bütün soyuyla birlikte ortadan kaldırıldı. Aydınoğulları toprakları böylece tamamıyla Osmanlı idaresine girdi. ⚠️ Tarihte TDV kendi içinde ayrışıyor: `aydinogullari` maddesi 829 (1425-26), `cuneyd-bey` maddesi 1426 veriyor; haritadaki 1425-06-01 kırılması ikisinden de erkendir (bkz. OTURUM-13-ANADOLU.md §4).",
  kaynak:"cuneyd-bey" },


// ---------------------------------------------------------------------------
// C) hatalar 14 md.4 — AKKOYUNLU'NUN ÇÖZÜLÜŞÜ (1502-1510)
// ---------------------------------------------------------------------------
// Kullanıcı "Akkoyunlu devletinin çözülüşü ve Şah İsmail'in Tebriz'e girişi
// maddesinde buna dair gösterim olmalı haritada" dedi. Ölçüm, sorunun eksik
// gösterim DEĞİL mükerrer madde olduğunu gösterdi: olaylar_ek5.js'teki
// 1501-01-01 maddesi 189 günlük ölü bölgenin ortasında duruyor, haritayı
// kırdıran madde ise olaylar_ek7.js'teki 1501-07-01. Ayrıntı:
// OTURUM-13-ANADOLU.md §14.
//
// Aşağıdaki beş madde, merkezin istediği şeyi karşılıyor: çözülüş TEK BİR GÜN
// değil, 1501'den 1510'a uzanan bir SÜREÇTİR ve her adımının haritada
// karşılığı vardır.
//
// 🔴 YAPISAL BULGU — bu maddelerin var olma sebebi:
// `CLAUDE.md §3` Değişmez 2 komutu `(y.d||[]).concat(y.v||[])` döngüsü kuruyor;
// `y.s` YOK. Yani yabancı devletlerin toprak değişimleri BUGÜNE KADAR HİÇ
// denetlenmedi. Ölçüldü: 543 `s:` kırılmasının 112'sinin ±30 gün içinde maddesi
// yok. Aşağıdaki beş kırılma o 112'nin en kalabalık beşidir (10 + 37 + 28 + 46
// + 24 = 145 kayıt). Ölçüt GEVŞETİLMEDİ; denetim genişletilmeli.
//
// TARİH HASSASİYETİ — beşinin de günü kaynakta yok
// TDV `safeviler` yıl veriyor, gün vermiyor. `CLAUDE.md §4` gereği veride
// hâlihazırda duran kırılma günü kullanıldı ve gerçek belirsizlik `gun`
// alanına yazıldı. Uydurma gün yazılmadı.
//
// KAYNAK — iki slug da doğrulanmış kümede
//   safeviler     → "SAFEVÎLER - TDV İslâm Ansiklopedisi"     ✓ (2026-07-31)
//   akkoyunlular  → mevcut `kaynak:` kümesinde                ✓
// ⚠️ `ismail-i` slug'ı DOĞRULANAMADI (oturum limiti) ve kullanılmadı.

{ t:"1502-01-01", k:"siyaset", etiket:["siyaset","savas"],
  b:"Erzurum ve Van havzası Safevî'ye geçti — Akkoyunlu'nun kuzey kanadı çöktü",
  gun:"1502 (ay ve gün kaynakta yok)", yer:"Erzurum, Van, Erciş, Kemah",
  kisiler:"Şah İsmail, Akkoyunlu Elvend Bey",
  d:"Şerûr'da Elvend Bey'i yenip 1501 yazında Tebriz'e giren Şah İsmâil, ertesi yıl kuzeybatı istikametinde ilerleyerek Erzurum'dan Van gölü havzasına uzanan hattı hâkimiyeti altına aldı. Akkoyunlu Devleti Uzun Hasan'ın ölümünden sonra zaten taht kavgalarıyla ikiye bölünmüştü: Elvend Bey Azerbaycan ve Diyarbekir'i, amcazadesi Murad ise Irâk-ı Acem ve Fars'ı tutuyordu. Bu bölünme Safevî ilerleyişini kolaylaştırdı; bölge on kayıt hâlinde bir yıl içinde el değiştirdi. Erzurum bundan sonra on altı yıl Safevî elinde kaldı ve Osmanlı hâkimiyetine ancak Çaldıran'dan sonra, 1518-19'da girdi.",
  kaynak:"akkoyunlular" },

{ t:"1503-01-01", k:"siyaset", etiket:["siyaset","savas"],
  b:"Murad Bey'in Hemedan yenilgisi: Irâk-ı Acem ve Fars Safevî'ye geçti",
  gun:"1503 (908 h.; ay ve gün kaynakta yok)", yer:"Hemedan, Isfahan, Şîraz, Kâşân — Irâk-ı Acem ve Fars",
  kisiler:"Şah İsmail, Akkoyunlu Sultan Murad",
  d:"Akkoyunlu tahtının ikinci iddiacısı Sultan Murad, Şah İsmâil'e karşı Hemedan yakınlarında yapılan savaşta ağır bir yenilgiye uğradı ve Bağdat'a kaçtı. Bu tek savaşla Irâk-ı Acem, Fars ve Kirman bölgeleri Safevî idaresine girdi; haritada otuz yedi yerleşim aynı anda el değiştirir. Akkoyunlu Devleti'nin çözülüşünün en büyük tek adımı budur — Tebriz'in kaybı hânedanı başkentsiz bırakmıştı, Hemedan yenilgisi ise topraksız bıraktı. ⚠️ Bu kırılma bugüne kadar kronolojide karşılıksızdı: ona en yakın madde on sekiz gün ötedeki Osmanlı-Venedik Savaşı'nın sona ermesiydi, yani kullanıcı İran'ın el değiştirdiğini görürken ekranda Venedik barışını okuyordu.",
  kaynak:"safeviler" },

{ t:"1507-01-01", k:"siyaset", etiket:["siyaset","savas"],
  b:"Şah İsmail'in Diyarbekir seferi: Akkoyunlu'nun son merkezleri düştü",
  gun:"1507 (912-913 h.; ay ve gün kaynakta yok)", yer:"Diyarbekir, Âmid, Mardin, Urfa, Harput, Siverek",
  kisiler:"Şah İsmail, Akkoyunlu hânedanı",
  d:"Azerbaycan ve İran platosunu ele geçiren Şah İsmâil 1507'de batıya, Akkoyunlu hânedanının doğduğu Diyarbekir bölgesine yöneldi. Âmid'den Mardin'e, Urfa'dan Harput'a uzanan hat iki hamlede Safevî idaresine girdi ve Akkoyunlular fiilen ortadan kalktı. Bu sefer aynı zamanda Safevî sınırını ilk defa Osmanlı ve Memlûk sınırlarına dayadı; Çaldıran'a giden gerilimin coğrafî zemini böyle kuruldu. ⚠️ Hânedanın tarihî sonu bu tarih değildir: TDV'ye göre Elvend Bey 1505'te Âmid'de ölmüş, hânedan ise 1514'te Murad'ın ölümüyle sona ermiştir; 1507 toprağın son kaybıdır.",
  kaynak:"safeviler" },

{ t:"1508-01-01", k:"siyaset", etiket:["siyaset","savas"],
  b:"Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi",
  gun:"1508 (914 h.; ay ve gün kaynakta yok)", yer:"Bağdat, Kerbelâ, Necef, Musul — Irâk-ı Arab",
  kisiler:"Şah İsmail",
  d:"Hemedan yenilgisinden sonra Bağdat'a sığınan Akkoyunlu Sultan Murad'ın ardından Şah İsmâil 1508'de Irâk-ı Arab'a girdi ve Bağdat'ı aldı. Kerbelâ ve Necef'teki türbelerin Safevî idaresine geçmesi, hareketin mezhebî iddiası bakımından Tebriz'in alınması kadar önemliydi. Haritada kırk altı yerleşim aynı gün el değiştirir; bu, çözülüşün son ve en geniş coğrafî adımıdır. Bağdat 1534'te Kanûnî'nin Irakeyn Seferi'ne kadar Safevî elinde kaldı.",
  kaynak:"safeviler" },

{ t:"1510-12-02", k:"savas", etiket:["savas","siyaset"],
  b:"Merv Savaşı: Özbekler ağır yenilgiye uğradı, Merv ve Herat alındı",
  gun:"1510 sonu (916 h.; TDV yalnız yılı veriyor, veri 1510-12-02 taşıyor)",
  yer:"Merv, Herat — Horasan", kisiler:"Şah İsmail, Şeybânî Han (Muhammed Şeybânî)",
  d:"Batıda Akkoyunlu mirasını tamamlayan Şah İsmâil doğuya, Horasan'a yürüdü ve Merv önlerinde Özbekler'i ağır bir yenilgiye uğrattı; Şeybânî Han savaş meydanında öldü. Merv ve Herat Safevî hâkimiyetine girdi ve Safevî Devleti Fırat'tan Ceyhun'a uzanan sınırlarına kavuştu. Böylece 1501 yazında Tebriz'e girişle başlayan süreç dokuz yılda tamamlanmış oldu: Akkoyunlu mirası bütünüyle Safevî idaresine geçti ve Osmanlı Devleti doğusunda kendi büyüklüğünde ikinci bir devletle komşu hâle geldi.",
  kaynak:"safeviler" },


// ---------------------------------------------------------------------------
// ÇAPRAZ İBERYA PARTİSİ — Oturum 0, 3 Ağustos 2026
// ---------------------------------------------------------------------------
// ÇAPRAZ İBERYA oturumu Portekiz ve İspanya kaynaklarından çapraz sorgu
// yaptı; aşağıdaki dört madde onun D1·D5·D6 bulgularının kronoloji
// karşılığıdır. Dördü de haritada AÇILAN bir kırılmanın karşılığını verir
// (Değişmez 2 borcu doğurmasınlar diye aynı partide yazıldı).
// ⚠️ İlk üçünde `kaynak:` alanı YOK ve bu bilerekdir: alan TDV linki
//    üretiyor, TDV'de karşılığı olmayan maddeye slug yazmak ÖLÜ LİNK olur.
//    Kaynak metnin içinde adıyla anılıyor.

{ t:"1581-04-16", k:"siyaset", etiket:["siyaset","diplomasi"],
  b:"İberya Birliği: Portekiz tacı İspanya kralına geçti",
  gun:"16 Nisan 1581", yer:"Tomar — Portekiz",
  kisiler:"II. Felipe (Portekiz kralı I. Filipe), Kardinal Kral Henrique",
  d:"Kardinal Kral Henrique'nin vârissiz ölümüyle açılan veraset kavgası Alcântara Muharebesi'nde (25 Ağustos 1580) İspanya lehine kapandı ve Tomar'da toplanan Portekiz Cortes'i 16 Nisan 1581'de II. Felipe'yi Portekiz kralı olarak tanıdı. Tomar şartlarına göre Portekiz kendi kurumlarını, parasını ve dilini koruyacak, yönetime yalnız Portekizliler atanacak, Madrid'de ayrı bir Portekiz konseyi bulunacaktı — yani birleşme kişisel birlikti, ilhak değil. Atlas aynı hukukî durumu Felemenk ve Milano için `ispanya` diye boyadığından anakara Portekiz de altmış yıl boyunca aynı şekilde işlendi; buna karşılık Estado da Índia (Goa, Diu, Malaka, Makao) Portekiz tacı altında kaldığı için `portekiz` bırakıldı. Kaynak: Britannica, History of Portugal — Union of Spain and Portugal, 1580-1640." },

{ t:"1640-12-01", k:"siyaset", etiket:["siyaset","toprak-kayip"],
  b:"Restauração: Portekiz bağımsızlığını geri aldı",
  gun:"1 Aralık 1640", yer:"Lizbon", yer_id:"Lizbon",
  kisiler:"IV. João (Braganza Dükü), Kont-Dük Olivares",
  d:"Katalonya isyanının İspanya'yı meşgul ettiği günlerde Lizbon'da bir grup soylu saraya baskın yaparak İspanyol idaresini devirdi ve Braganza Dükü'nü IV. João adıyla kral ilan etti. Altmış yıllık İberya Birliği böylece sona erdi; ancak Sebte İspanya'da kalmayı seçti ve bu 1668 Lizbon Antlaşması'yla tanındı. Portekiz'in Habsburg savaşlarına eklemlendiği bu pencere Asya'daki kayıplarının da çerçevesidir: Hürmüz 1622'de, Malaka 1641'de, Kolombo 1656'da elden çıktı; Tanca ile Bombay ise bağımsızlığın bedeli olarak İngiltere'ye verildi. Kaynak: Britannica, History of Portugal — Restoration." },

{ t:"1539-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Zebîd'in Osmanlı hâkimiyetine kesin girişi",
  gun:"1539 başı (kesin gün kaynakta yok; üst sınır 10 Mart 1539)",
  yer:"Zebîd — Yemen", kisiler:"Hadım Süleyman Paşa",
  d:"Diu kuşatmasını 5 Kasım 1538'de kaldıran donanma dönüş yolunda Yemen kıyısına uğradı ve Zebîd kesin olarak Osmanlı idaresine bağlandı; Hadım Süleyman Paşa şehirden 10 Mart 1539'da ayrılıp 1 Nisan'da Cidde'ye vardı. Şehir 1517'den beri eski Memlûk beylerinin elinde Osmanlı adına yönetiliyordu; bu tarihle doğrudan idareye geçti. ⚠️ Atlas bu geçişi uzun süre 3 Ağustos 1538'de gösteriyordu, oysa o gün alınan yer Aden'dir. Düzeltmenin kaynağı: Ertuğrul Önalp, \"Hadım Süleyman Paşa'nın 1538 yılındaki Hindistan Seferi\", OTAM (Ankara Üniversitesi Osmanlı Tarihi Araştırma ve Uygulama Merkezi Dergisi) — tam metin okundu." },

{ t:"1662-01-30", k:"antlasma", etiket:["antlasma","diplomasi"],
  b:"Tanca İngiltere'ye devredildi",
  gun:"30 Ocak 1662", yer:"Tanca — Fas",
  kisiler:"II. Charles, Catherine de Braganza, Peterborough Kontu",
  d:"Portekiz'in bağımsızlık savaşında İngiliz desteğini sağlamak için yapılan evlilik antlaşmasının (23 Haziran 1661) ikinci maddesi Tanca'yı Catherine de Braganza'nın çeyizi olarak İngiltere'ye bırakıyordu. Sandwich Kontu'nun filosu 29 Ocak 1662'de demirledi ve ertesi gün Peterborough Kontu'nun töreniyle resmî devir yapıldı. Atlas bu kaydı önce 23 Ocak 1661 olarak taşıyordu — antlaşma günüyle fiilî devir günü arasında bir karışma; Bombay için zaten fiilî devir tarihi (18 Şubat 1665) yazıldığından aynı ölçüt Tanca'ya da uygulandı. İngilizler şehri 1684'te terk edecekti." },



// ---------------------------------------------------------------------------
// IRAN'IN UC HANEDANI — Oturum 0, 3 Agustos 2026
// ---------------------------------------------------------------------------
// RENK olctu: `d:"iran"` tasiyan 130 donemden 123'u `1736-03-08 → 1923-10-29`
// gibi TEK BIR PENCEREDE uc ayri hanedani birlestiriyordu. Asagidaki iki
// madde o pencerenin iki kirilma gununu tasiyor.
// 📌 `1747-06-20` UYDURULMADI: veride 5 kayit onu zaten tasiyordu.
// ⚠️ Aradaki 1747-1796 penceresi bilerek `iran` birakildi — o kirk dokuz
//    yilda Iran gercekten parcaliydi (ayni gun Horasan'da Afsar, Siraz'da
//    Zend, Tahran'da Kacar) ve genel etiketin en mesru oldugu yer orasi.
//    Sehir sehir bolunmesi ayri bir TDV taramasi istiyor, uydurulmayacak.

{ t:"1747-06-20", k:"siyaset", etiket:["siyaset"],
  b:"Nâdir Şah'ın öldürülmesi — Afşar hâkimiyetinin dağılışı",
  gun:"20 Haziran 1747", yer:"Fethâbâd, Horasan",
  kisiler:"Nâdir Şah Afşar",
  d:"Safevî tahtını sona erdirip 1736'da kendi adına saltanat ilân eden, Hindistan seferiyle Delhi'ye kadar giden ve Osmanlı ile üç savaş yapıp 1746 Kerden Antlaşması'yla barışan Nâdir Şah, kendi muhafızları tarafından çadırında öldürüldü. Ardından İran tek elden yönetilemedi: Horasan'da Afşar kalıntısı, güneyde Zend, kuzeyde yükselen Kaçar kırk dokuz yıl boyunca ülkeyi paylaştı. Osmanlı doğu sınırı bu dağınıklık sayesinde uzun süre sakin kaldı." },

{ t:"1796-01-01", k:"siyaset", etiket:["siyaset"],
  b:"Kaçar hânedanının İran'a hâkim oluşu",
  gun:"1796 (gün kaynakta yok; devlet dizini bu tarihi Afşar'ın bitişi olarak taşıyor)",
  yer:"Tahran", yer_id:"Tahran", kisiler:"Ağa Muhammed Şah Kaçar",
  d:"Kaçar aşiretinin reisi Ağa Muhammed Han, Zend hâkimiyetini yıkıp Horasan'daki son Afşar direncini de kırarak İran'ı yeniden tek elde topladı ve Tahran'ı başkent yaptı. Kırk dokuz yıllık parçalanma dönemi böylece kapandı; bundan sonra Osmanlı'nın doğu komşusu 1923'e kadar Kaçar İran'ı olacaktı. ⚠️ Atlas 1747-1796 arasını bilerek genel `İran` etiketiyle gösteriyor: o pencerede ülke gerçekten bölünmüştü ve şehir şehir hangi hânedanın elinde olduğu ayrı bir kaynak taraması gerektiriyor." },


];

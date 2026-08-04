// ============================================================================
// DERİNLEŞTİRME PARTİSİ 9 — OSMANLI AFRİKASI'NIN EKSİK KIRILMA MADDELERİ
// ============================================================================
// Bu parti Oturum 14'ün (Osmanlı Afrikası, 153 nokta) BORCUNU kapatır.
//
// Oturum 14 `olaylar*.js`'e yazma yetkisi olmadan çalıştı. Her `d:`/`v:` dönem
// sınırı Değişmez 2 gereği ±30 gün içinde bir kronoloji maddesi istediği için,
// gerçek tarihi kapsanmayan yedi yerleşimin sınırı mevcut bir kırılmaya
// YUVARLANDI ve dosyada `⚠️` ile işaretlendi. Üç dönem ise (Tabarka'nın
// Ceneviz devri, Kerene'nin Mısır işgali, Tokar'ın Mehdî devri) maddesi
// olmadığı için HİÇ YAZILAMADI.
//
// `OGRENILENLER.md §8`: **bilinmeyen tarih yuvarlanmaz, komşusundan alınır.**
// Bu dosya o kuralı uygular — önce madde yazılır, sonra tarih gerçeğine çekilir.
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — hangi madde gün, hangisi yıl
// ---------------------------------------------------------------------------
// Altı maddenin günü kaynaktan doğrulandı:
//   1741-06-12 Tabarka · 1843-06-12 Sîdî Bel Abbès · 1852-12-04 Ağvât ·
//   1874-11-02 El-Fâşir · 1883-12-23 Slatin'in teslimi · 1884-06-03 Hewett
// Beş maddede yalnız YIL doğrulanabildi ve `CLAUDE.md §4` gereği `YYYY-01-01`
// yazıldı; gerçek ay `gun` alanında duruyor:
//   1840 Kesela · 1841 Muaskar · 1843 Şelif-Tenes (Nisan) · 1844 Nedrûme ·
//   1872 Bogos · 1882 Mîzâb (Kasım) · 1884 Tokar
// Uydurma gün YAZILMADI. Gün bulunduğunda madde ve yerleşim birlikte
// düzeltilmelidir.
//
// ---------------------------------------------------------------------------
// KAYNAK — kullanılan slugların hepsi doğrulandı
// ---------------------------------------------------------------------------
// Zaten doğrulanmış kümeden (data/olaylar*.js `kaynak:` alanları):
//   cezayir · tilimsan · huseyniler · hidiv · sudan · kavalali-mehmed-ali-pasa
// Bu oturumda `<title>` ile YENİ doğrulananlar (CLAUDE.md §4 ölü slug tuzağı):
//   darfur      → "DÂRFÛR - TDV İslâm Ansiklopedisi"      ✓ CANLI
//   habesistan  → "HABEŞİSTAN - TDV İslâm Ansiklopedisi"  ✓ CANLI
//                 (kısa çapraz gönderme maddesi: "bk. ETİYOPYA")
//
// ⚠️ ENTEGRASYON: bu dosya `index.html`'e <script> satırı ve `js/app.js`'in
// 778-785. satırlarındaki concat zincirine EKLENMEDİKÇE yüklenmez. Denetim
// `data/olaylar*.js` deseniyle okuduğu için TEMİZ görünür ama yayın maddeleri
// göstermez — `olaylar_ek8.js` bu yüzden dört commit boyunca 404 verdi
// (`OGRENILENLER.md §4`). `py arac/denetle_yayin.py` ile doğrulanmalı.
// ============================================================================

window.OLAYLAR_EK9 = [

// ---------------------------------------------------------------------------
// A) CEZAYİR — Fransız işgalinin kasaba kasaba tarihleri
// ---------------------------------------------------------------------------
// Oturum 14 bu altı yeri 1844-03-04 (Biskra) ve 1854-12-02 (Tuggurt)
// kırılmalarına yuvarlamıştı. Aşağıdaki maddeler yazıldıktan sonra
// yerlesimler_afrika.js'te gerçek tarihlerine çekildiler.

{ t:"1841-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Muaskar'ın (Mascara) Fransız işgali — Abdülkādir'in başkentinin kaybı",
  gun:"1841", yer:"Muaskar (Mascara), Vehrân eyaleti", kisiler:"Abdülkādir el-Cezâirî, Mareşal Bugeaud",
  d:"Bugeaud'nun 1841'de valiliğe gelmesiyle Fransız stratejisi değişti: kıyıda tutunmak yerine iç şehirleri tek tek işgal etmek. Vehrân, Mostagānim ve Medea'dan çıkan hareketli kollar Abdülkādir'in düzenli devletinin merkezlerini aldı; darphanesi, barut imalâthanesi ve tahıl ambarlarıyla gerçek bir başkent olan Muaskar bunların en önemlisiydi. Emîr bundan sonra sabit bir merkez kurmaktan vazgeçip ordusunu 'smala' denen göçer kampa çevirdi. Günü kaynaklarda kesinleşmediği için burada yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"] },

{ t:"1843-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Şelif vadisi ve Tenes'in işgali — Orléansville'in kurulması",
  gun:"1843 (Nisan)", yer:"Şelif vadisi, Tenes, Dahra", kisiler:"Mareşal Bugeaud",
  d:"Abdülkādir'i takip edebilmek için Fransızlar 1843 Nisanında Şelif vadisinin ortasında Orléansville adlı yeni bir şehir kurdular; aynı yıl kıyıdaki Tenes limanı da işgal edildi. Böylece Cezayir ile Vehrân arasındaki iç koridor Fransız denetimine girdi ve Dahra dağlarındaki direniş kuşatıldı. Aynı yılın 16 Mayısında Abdülkādir'in göçer kampı 'smala' tesadüfen bulunup dağıtıldı. Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"] },

{ t:"1843-06-12", k:"kayip", etiket:["toprak-kaybi"],
  b:"Sîdî Bel Abbès müstahkem kampının kurulması",
  gun:"12 Haziran 1843", yer:"Sîdî Bel Abbès, Vehrân eyaleti", kisiler:"Mareşal Bugeaud, General Bedeau",
  d:"Bugeaud 12 Haziran 1843'te General Bedeau'ya Sîdî Bel Abbès'te hendekli ve surlu bir müstahkem kamp kurma emrini verdi; inşaata 18 Haziranda başlandı ve aynı yılın kasımında Yabancı Lejyon'un bir taburu buraya yerleşti. Kamp, Vehrân ile Tilimsan arasındaki iç ovayı denetleyen kalıcı bir üs oldu. Oturum 14 bu noktayı 1844-03-04'e yuvarlamıştı; gerçek tarih budur.",
  kaynak:"cezayir", duygu:["😔"] },

{ t:"1844-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Nedrûme ve Fas sınır kuşağının Fransız denetimine geçişi",
  gun:"1844", yer:"Nedrûme, Tilimsan çevresi, Fas sınırı", kisiler:"Mareşal Bugeaud, Abdülkādir el-Cezâirî",
  d:"Abdülkādir'in 1843'te Fas'a çekilmesinden sonra Tilimsan'ın kuzeybatısındaki Nedrûme ve Trâra kıyısı Fransız denetimine girdi. 14 Ağustos 1844'teki Isly Muharebesi Fas ordusunu bozguna uğrattı ve iki ülke arasındaki sınır 18 Mart 1845 Lâlla Mağniye Sözleşmesi'yle çizildi; Nedrûme bu çizginin Cezayir tarafında kaldı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"tilimsan", duygu:["😔"] },

{ t:"1852-12-04", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Ağvât'ın (Laghouat) düşüşü — Sahra kapısının açılması",
  gun:"4 Aralık 1852", yer:"Ağvât (Laghouat)", kisiler:"General Pélissier",
  d:"General Pélissier altı bin kişilik bir kuvvetle 21 Kasım 1852'de Ağvât'ı kuşattı ve 4 Aralıkta şehir kanlı bir hücumla düştü. Ağvât, Tell ile Sahra arasındaki geçişi tutan vaha şehriydi; düşmesi Fransız ilerleyişini çöl kervan yollarına açtı ve Mîzâb konfederasyonunun bir yıl içinde vergiye bağlanmasının önünü hazırladı. Oturum 14 bu tarihi 1854-12-02'ye (Tuggurt) yuvarlamak zorunda kalmıştı.",
  kaynak:"cezayir", duygu:["😔"] },

{ t:"1882-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Mîzâb vahalarının (Gardâye) ilhakı",
  gun:"1882 (Kasım)", yer:"Gardâye, Mîzâb vahaları", kisiler:"—",
  d:"Mîzâb'ın İbâzî şehirleri 1852'de Fransa'ya vergi ödemeyi kabul etmiş ama iç idarelerini korumuştu; otuz yıl sonra, 1882'de bölge doğrudan Fransız topraklarına katıldı ve Gardâye askerî idareye bağlandı. Böylece kuzey Sahra'nın son özerk kuşağı da hukuken sona erdi. Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"] },

// ---------------------------------------------------------------------------
// B) DARFUR — sultanlığın Mısır'a ilhakı ve Mehdî'ye geçişi
// ---------------------------------------------------------------------------
// Oturum 14 Darfur'a HİÇ NOKTA KOYMAMIŞTI çünkü `darfur` kimliği renkler.py'de
// yoktu ve `funj` yazmak açık bir hata olurdu (Darfur hiçbir zaman Func'a bağlı
// değildi). Bu iki madde, El-Fâşir'in `v:` sınırlarını kapatır.

{ t:"1874-11-02", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Darfur Sultanlığı'nın Mısır'a ilhakı — Zübeyr Paşa El-Fâşir'e girdi",
  gun:"2 Kasım 1874", yer:"El-Fâşir, Menevâşî, Darfur", kisiler:"Zübeyr Rahmet Paşa, Sultan İbrâhim Muhammed el-Hüseyin",
  d:"Fildişi ve köle ticaretiyle güçlenen Zübeyr Rahmet Paşa, Remington tüfekleriyle donattığı kuvvetlerle 25 Ekim 1874'te Menevâşî'de Fur ordusunu dağıttı; Sultan İbrâhim muharebede öldü. Zübeyr 2 Kasımda El-Fâşir'e çarpışmadan girdi ve 1603'ten beri süren Keyra hânedanının hükümdarlığı fiilen sona erdi. Darfur böylece Kavalalı Mısır'ının Sudan eyaletlerine katıldı; ama Keyra ailesinin dağlardaki direnişi 1891'e kadar sürdü.",
  kaynak:"darfur", duygu:["🎉"] },

{ t:"1883-12-23", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın teslimi",
  gun:"23 Aralık 1883", yer:"Darfur, Dara, El-Fâşir", kisiler:"Rudolf Slatin Paşa, Şeyh Madibbo b. Ali, Muhammed Ahmed el-Mehdî",
  d:"Darfur genel valisi Slatin Paşa, 1882'den beri Rizeykāt kabilesinin Mehdîci ayaklanmasıyla uğraşıyordu; askerlerinin yenilgileri onun hıristiyan oluşuna yüklediğini düşünerek 1883'te açıkça müslüman oldu ve Abdülkādir adını aldı. Hicks Paşa'nın ordusunun kasım 1883'te Kordofan'da yok edilmesinden sonra direnişin anlamı kalmadı ve 23 Aralık 1883'te Emîr Madibbo'ya teslim oldu. Darfur'daki küçük Mısır karakolları da kısa sürede aynı yolu izledi; on yıllık Türk-Mısır idaresi bitti.",
  kaynak:"darfur", duygu:["😔"] },

// ---------------------------------------------------------------------------
// C) TABARKA — iki yüz yıllık Ceneviz devrinin sonu
// ---------------------------------------------------------------------------
// Oturum 14 Tabarka'yı öteki Tunus noktaları gibi 1574'te Osmanlı yazmıştı,
// çünkü 1741 devralması için madde yoktu. Gerçekte ada 1544'ten beri Cenevizli
// Lomellini ailesinin elindeydi ve hiç Osmanlı idaresine girmemişti.

{ t:"1741-06-12", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Tabarka'nın Cenevizlilerden alınması — Lomellini mercan imtiyazının sonu",
  gun:"12 Haziran 1741", yer:"Tabarka adası, Tunus", kisiler:"Ali Paşa (Hüseynî), Lomellini ailesi",
  d:"Şarlken'in 1544'te Tunus beyiyle yaptığı antlaşmadan sonra Cenevizli Lomellini ailesi Tabarka adasına yerleşmiş ve iki yüz yıl boyunca mercan imtiyazını elinde tutmuştu; ada, Osmanlı Tunus'unun ortasında hıristiyan bir ticaret karakolu olarak kaldı. Hüseynî hânedanından Ali Paşa, ailenin adayı elden çıkarma girişimini haber alınca kuvvet gönderdi ve 12 Haziran 1741'de adayı ele geçirdi; bin beş yüz kadar hıristiyan Tunus'a nakledildi. Tabarka bu tarihten sonra Tunus ocaklığının idaresine girdi.",
  kaynak:"huseyniler", duygu:["🎉"] },

// ---------------------------------------------------------------------------
// D) BOGOS (KERENE) — Mısır'ın Habeşistan içine tek kalıcı ilerleyişi
// ---------------------------------------------------------------------------

{ t:"1872-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Bogos (Kerene) bölgesinin Mısır'a ilhakı",
  gun:"1872", yer:"Kerene, Bogos, Bilen ülkesi", kisiler:"Werner Munzinger Paşa, Hidiv İsmâil",
  d:"Hidiv İsmâil'in Kızıldeniz'in batı kıyısında kurduğu 'Doğu Sudan ve Kızıldeniz Sahili' vilâyetinin valisi Werner Munzinger Paşa, 1872'de Bilen halkının yaşadığı Bogos bölgesini ve merkezi Kerene'yi Mısır'a bağladı. Bu, Mısır'ın Habeş yaylasının kenarına yaptığı en kalıcı ilerleyişti ve Habeşistan ile on iki yıl süren bir sınır anlaşmazlığı başlattı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"hidiv", duygu:["🎉"] },

{ t:"1884-06-03", k:"antlasma", etiket:["antlasma","toprak-kaybi","diplomasi"],
  b:"Hewett (Adua) Antlaşması — Bogos'un Habeşistan'a bırakılması",
  gun:"3 Haziran 1884", yer:"Adua, Habeşistan", kisiler:"Amiral William Hewett, Yohannes IV, Hidiv Tevfik",
  d:"Mehdî ayaklanması Sudan'daki Mısır garnizonlarını kuşatınca İngiltere, Habeşistan'ın yardımını almak için 3 Haziran 1884'te Adua'da Yohannes IV ile antlaşma imzaladı. Antlaşmanın ikinci maddesi Bogos'u Habeşistan'a geri veriyor, karşılığında Habeşistan kuşatılmış garnizonların Masavva üzerinden tahliyesine yol açıyordu. Kerene böylece on iki yıllık Mısır idaresinden çıktı; beş yıl sonra bölge İtalyan Eritresi'ne katılacaktı.",
  kaynak:"habesistan", duygu:["🤝"] },

// ---------------------------------------------------------------------------
// E) TOKAR — Doğu Sudan'ın sekiz yıllık Mehdî devri
// ---------------------------------------------------------------------------

{ t:"1884-01-01", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Doğu Sudan'ın Mehdî kuvvetlerine geçişi — Tokar'ın kaybı",
  gun:"1884", yer:"Tokar, Sinkat, Sevâkin ardalanı", kisiler:"Osman Digna, Muhammed Ahmed el-Mehdî",
  d:"Mehdî'nin doğu Sudan'daki halifesi Osman Digna, 1883 sonbaharından itibaren Bece kabilelerini ayaklandırarak Sevâkin'in ardalanını ele geçirdi; Sinkat ve Tokar garnizonları kuşatıldı ve 1884 başında bölge tamamen Mehdî idaresine girdi. Sevâkin limanı İngiliz-Mısır elinde kaldığı için kıyı ile içerisi sekiz yıl boyunca ayrı iki idare altında durdu. Tokar 1891 Şubatında geri alındı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"sudan", duygu:["😔"] },

// ---------------------------------------------------------------------------
// F) KESELA — Taka bölgesinin fethi
// ---------------------------------------------------------------------------
// Oturum 14 Kesela'nın kuruluş gününü bilmediği için 1840-07-15'i SEÇMİŞTİ
// (Londra Antlaşması maddesiyle aynı güne düşsün diye). Bu madde o seçimi
// gereksiz kılar; yerleşim kaydı 1840-01-01'e çekildi.

{ t:"1840-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Taka bölgesinin fethi ve Kesela'nın kurulması",
  gun:"1840", yer:"Kesela, Taka, Atbara-Gaş havzası", kisiler:"Ahmed Paşa Ebû Vidân, Kavalalı Mehmed Ali Paşa",
  d:"Sudan hükümdarı Ahmed Paşa Ebû Vidân, 1840'ta Atbara ile Gaş nehirleri arasındaki Taka bölgesini Mısır idaresine bağladı ve Kesela şehrini askerî karargâh olarak kurdu. Şehir, Sennâr ile Sevâkin arasındaki kervan yolunu ve Habeş sınır kuşağını denetleyen bir mudîriyet merkezi oldu. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"kavalali-mehmed-ali-pasa", duygu:["🎉"] },

// ===========================================================================
// İKİNCİ PARTİ (hatalar 11 · md.18/41/42/43/44/51/56)
// ===========================================================================
// Aşağıdaki on üç madde ÖLÇÜLMÜŞ bir kusuru kapatır. Değişmez 2 "her kırılmanın
// ±30 gün içinde maddesi olsun" der ve denetim 451/451 ile TEMİZ raporluyor —
// ama maddenin DOĞRU madde olduğunu sormuyor. Ölçüldü, üç kırılma alâkasız bir
// maddenin altında beliriyordu:
//
//   Konstantin 1837-10-13  →  "Cebel-i Dürûz ayaklanması"   (+2 gün, SURİYE)
//   Zeyla      1884-01-01  →  "Reji İdaresi kuruldu"        (+0 gün, TÜTÜN)
//   Murzuk     1577-01-01  →  "İstanbul Rasathanesi kuruldu"(+0 gün)
//
// Kullanıcının md.18'de sorduğu "Cezayir'den Fransa'ya geçen parça bu maddeyle
// mi ilgili" sorusunun cevabı budur: HAYIR. Cebel-i Dürûz Suriye'de Havran'da,
// Konstantin Cezayir'in doğusunda; iki gün arayla düştükleri için denetim ikisini
// eşleştirmişti. Bu maddelerden sonra eşleşme +0 güne iner.
//
// TDV slugları — hepsi bu turda <title> ile doğrulandı:
//   urabi-pasa            → "URÂBÎ PAŞA - TDV İslâm Ansiklopedisi"            ✓
//   trablusgarp-savasi    → "TRABLUSGARP SAVAŞI - TDV İslâm Ansiklopedisi"    ✓
//   muhammed-ahmed-el-mehdi → "MUHAMMED AHMED el-MEHDÎ - …"                   ✓
//   aden                  → "ADEN - TDV İslâm Ansiklopedisi"                  ✓
//   tunus                 → "TUNUS - TDV İslâm Ansiklopedisi"                 ✓
//   senusiyye             → "SENÛSİYYE - TDV İslâm Ansiklopedisi"             ✓
//   abdulkadir-el-cezairi → "ABDÜLKĀDİR el-CEZÂİRÎ - …"                       ✓
// ===========================================================================

// ---------------------------------------------------------------------------
// G) KONSTANTİN — md.18'in gerçek sebebi
// ---------------------------------------------------------------------------

{ t:"1837-10-13", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu",
  gun:"13 Ekim 1837", yer:"Konstantin (Kostantîne), doğu Cezayir", kisiler:"Ahmed Bey, Mareşal Valée, General Damrémont",
  d:"Cezayir'in 1830'da düşmesinden sonra doğu beylerbeyliği dağılmadı: son bey Ahmed, Konstantin'de kendi idaresini sürdürdü ve Osmanlı adına hareket ettiğini ilân etti. Fransızların 1836'daki ilk seferi bozgunla bitti; ikinci sefer 6 Ekim 1837'de şehri kuşattı, kumandan Damrémont 12 Ekimde top ateşiyle öldü ve 13 Ekimde surlar aşılarak şehir sokak sokak alındı. Ahmed Bey dağlara çekildi ve ancak 1848'de teslim oldu. Bu tarih, Cezayir'in doğusunda üç yüz yıllık Osmanlı-Türk idaresinin fiilî bitişidir. Denetim bu kırılmayı iki gün sonraki Cebel-i Dürûz ayaklanması maddesiyle eşleştiriyordu — bu madde o eşleşmeyi düzeltir.",
  kaynak:"cezayir", duygu:["😔"] },

// ---------------------------------------------------------------------------
// G1) EMÎR ABDÜLKĀDİR — md.23'ün cevabı
// ---------------------------------------------------------------------------
// Kullanıcının sorusu: "Cezayir işgalinden sonra hâlâ Osmanlı pembesi görünen
// iç bölgeler: bağ kaldı mı?" Cevap HAYIR — ve sebebi ölçüldü: 27 kayıt
// `v:"Cezayir Ocaklığı (dayı idaresi)"` etiketini 1830-07-05'ten SONRA da
// taşıyor (Tuggurt'ta 24 yıl, Biskra'da 14, Konstantin'de 7). Ocaklık 5 Temmuz
// 1830'da lağvedildi; o topraklarda 1830'dan sonra duran şey Osmanlı değil,
// doğuda Ahmed Bey'in beyliği, batıda Emîr Abdülkādir'in devletiydi.
// Bu madde, düzeltmenin ihtiyaç duyduğu kırılmayı önceden açar.

{ t:"1832-11-22", k:"fetih", etiket:["ayaklanma"],
  b:"Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'de direnişin merkezîleşmesi",
  gun:"22 Kasım 1832", yer:"Muaskar, Tagdempt, batı ve orta Cezayir", kisiler:"Abdülkādir el-Cezâirî, Muhyiddin el-Hasenî",
  d:"Cezayir'in düşüşünden sonra dağılan direniş, Kādirî şeyhi Muhyiddin'in oğlu genç Abdülkādir etrafında toplandı; 22 Kasım 1832'de Muaskar yakınlarında kabile reisleri ona 'emîrü'l-mü'minîn' sıfatıyla biat etti. Kurduğu yapı bir kabile ittifakı değil düzenli bir devletti: darphanesi, barut imalâthanesi, vergi düzeni ve Tagdempt'te bir başkenti vardı. Fransa 1837 Tâfnâ Antlaşması'yla hâkimiyetini resmen tanıdı. Abdülkādir Osmanlı'ya değil Fas sultanı Abdurrahman'ın metbûiyetine sığındı; yani bu topraklar 1832'den sonra Osmanlı tâbiiyeti DEĞİLDİR. 23 Aralık 1847'de teslim oldu ve Osmanlı Devleti de aynı yıl Cezayir üzerindeki haklarının sona erdiğini ilân etti.",
  kaynak:"abdulkadir-el-cezairi", duygu:["🎉"] },

// ---------------------------------------------------------------------------
// G2) FİZAN — YAZILDI, SONRA SİLİNDİ (çakışma kaydı)
// ---------------------------------------------------------------------------
// Murzuk'un 1577-01-01 kırılması ölçüldüğünde "İstanbul Rasathanesi kuruldu"
// maddesine +0 gün bağlıydı; Sahra'nın ortasındaki 215.417 km²'lik petek bir
// rasathane maddesinin altında el değiştiriyordu. Buraya bir madde yazdım.
//
// 🔴 BAŞKA BİR OTURUM AYNI ANDA AYNI GÜNE YAZMIŞ: `olaylar_ek8.js`,
// "Fizan'ın Osmanlı tâbiiyetine girmesi — Murzuk", kaynak:"fizan".
// Mükerrer denetimi yakaladı (aynı kişi + AYNI gün). Benimki silindi —
// ek8'inki daha önce yazılmış ve içerik olarak yeterli.
//
// Kalan tek fark rapora taşındı: TDV `fizan` maddesi sancak teşkilâtını
// **1551 Trablus fethine** bağlıyor, 1577'ye ayrı bir hüküm vermiyor.
// Atlastaki 1577 tarihinin kaynağı doğrulanamadı → OTURUM-14-DUZELTMELER.md §4.

// ---------------------------------------------------------------------------
// H) MISIR'IN İNGİLİZ İŞGALİ — md.41 · md.42
// ---------------------------------------------------------------------------
// ⚠️ Bu iki madde işgalin ADIMLARIDIR. İşgalin kendisi için mevcut
// "1882-09 Mısır'ın İngiliz işgali" maddesi duruyor; ama AY hassasiyetinde ve
// CLAUDE.md §8 gün istiyor. Düzeltmesi merkez oturumda (bkz. OTURUM-14-DUZELTMELER.md).

{ t:"1882-07-11", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"İskenderiye'nin bombardımanı ve İngiliz çıkarması",
  gun:"11-12 Temmuz 1882 (bombardıman) · 15 Temmuz (işgal)", yer:"İskenderiye", yer_id:"İskenderiye", kisiler:"Ahmed Urâbî Paşa, Amiral Seymour, Hidiv Tevfik",
  d:"Urâbî Paşa'nın önderliğindeki subay hareketi hidivi denetim altına alınca İngiltere Süveyş yolunun güvenliğini bahane ederek müdahale etti. Amiral Seymour'un filosu 11-12 Temmuz 1882'de İskenderiye'nin sahil tabyalarını bombaladı; şehirde çıkan yangın ve yağmadan sonra 15 Temmuzda İngiliz birlikleri karaya çıktı. Osmanlı Devleti hukuken hükümran olduğu bir vilâyetinde bu harekâta engel olamadı ve müdahaleye katılma çağrısını da cevapsız bıraktı. Böylece otuz iki yıl sürecek işgalin ilk adımı atılmış oldu.",
  kaynak:"urabi-pasa", duygu:["😔"] },

{ t:"1882-09-13", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması",
  gun:"13 Eylül 1882", yer:"Tellülkebîr, Şarkıyye", kisiler:"Ahmed Urâbî Paşa, General Garnet Wolseley",
  d:"Wolseley kuvvetlerini Süveyş Kanalı üzerinden İsmâiliye'ye çıkarıp çölden yürüterek 13 Eylül 1882 şafağında Tel el-Kebîr'deki Mısır siperlerine baskın yaptı; muharebe bir saatte bitti. Urâbî ertesi gün teslim oldu ve İngiliz süvarisi aynı gün Kahire'ye girdi. Bu tarihten sonra Mısır'ın malî, askerî ve dış işleri fiilen İngiliz denetimine geçti; Osmanlı hükümranlığı ise hukuken 1914'e kadar sürdü. Atlasta bu ikilik `isg:` işgal örtüsüyle gösterilir: taban rengi tâbi Mısır, üstündeki tarama İngiliz denetimi.",
  kaynak:"urabi-pasa", duygu:["😔"] },

// ---------------------------------------------------------------------------
// I) TRABLUSGARP SAVAŞI — md.56, İtalyan çıkarmaları adım adım
// ---------------------------------------------------------------------------
// Bugün haritada Libya 1912-10-15'e (Uşi) kadar hiç değişmiyor; oysa İtalyan
// işgali BİR YIL ÖNCE, Ekim 1911'de tamamlandı. Aradaki on iki ay `isg:` örtüsü
// ister — düzeltme listesi merkez oturumda.

{ t:"1911-10-08", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Tobruk'a İtalyan çıkarması — Trablusgarp'ta ilk işgal",
  gun:"8 Ekim 1911", yer:"Tobruk, Berka (Cyrenaica)", kisiler:"—",
  d:"İtalya 29 Eylül 1911'de savaş ilân etti ve donanması 25-26 Eylülde kıyıyı abluka altına aldı. İlk kara harekâtı 8 Ekimde Tobruk'a yapıldı: küçük Osmanlı garnizonu iç bölgeye çekildi ve liman çarpışmasız işgal edildi. Tobruk, Mısır sınırına en yakın Osmanlı limanıydı; düşmesi Berka'nın doğu kanadını açtı ve İtalyan kuvvetlerinin kıyı boyunca batıya yürümesini kolaylaştırdı.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

{ t:"1911-10-09", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Trablus şehrinin İtalyanlara teslim olması",
  gun:"9 Ekim 1911", yer:"Trablus (Tripoli)", kisiler:"Neşet Bey, Amiral Faravelli",
  d:"Trablus üç gün bombardımandan sonra 9 Ekim 1911'de teslim oldu. Osmanlı kuvvetleri şehri savunmak yerine Aziziye ve Garyan'a çekilerek iç bölgede direnişi örgütlemeyi seçtiler; Enver ve Mustafa Kemal beylerin katıldığı bu direniş, İtalyanları savaşın sonuna kadar kıyı şeridine hapsetti. Yani şehir düştüğü hâlde vilâyetin içi Osmanlı denetiminde kaldı — atlasta bu, taban rengi Osmanlı, üstü İtalyan taraması olarak gösterilmelidir.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

{ t:"1911-10-16", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Derne'nin İtalyan çıkarmasıyla elden çıkışı",
  gun:"16 Ekim 1911", yer:"Derne, Berka", kisiler:"—",
  d:"Tobruk'tan sonra sıra Berka'nın ikinci limanı Derne'ye geldi; şehir 16 Ekim 1911'de işgal edildi. Derne çevresindeki yayla, Senûsiyye tarikatının en yoğun olduğu bölgeydi ve Şeyh Ahmed Şerîf'in cihad çağrısıyla toplanan mücahitler İtalyanları liman çevresinde kuşatılmış hâlde tuttu. İşgal şehirle sınırlı kaldı, ardalanına hiç yayılamadı.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

{ t:"1911-10-21", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Bingazi'ye İtalyan çıkarması — Berka sancağının merkezinin kaybı",
  gun:"21 Ekim 1911", yer:"Bingazi", yer_id:"Bingazi", kisiler:"—",
  d:"Berka'nın merkezi Bingazi 21 Ekim 1911'de, kıyıdaki dördüncü ve en önemli çıkarmayla işgal edildi. Böylece İtalya, savaş ilânından üç hafta sonra Trablusgarp vilâyetinin bütün büyük limanlarını (Trablus, Tobruk, Derne, Bingazi) elinde tutuyordu; ama hiçbirinin ardalanına giremedi. Savaşın kalan bir yılı, kıyıdaki bu dört noktadan içeri doğru sonuçsuz hamlelerle geçti.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

{ t:"1911-11-05", k:"kayip", etiket:["toprak-kaybi","diplomasi"],
  b:"İtalya'nın tek taraflı ilhak kararnâmesi",
  gun:"5 Kasım 1911", yer:"Roma · Trablusgarp ve Berka", kisiler:"—",
  d:"İtalya, savaş sürerken 5 Kasım 1911'de bir kararnâme çıkararak Trablusgarp ve Berka'yı ilhak ettiğini ilân etti. Osmanlı Devleti bunu tanımadı ve savaş bir yıl daha sürdü; ilhak ancak 18 Ekim 1912 Uşi Antlaşması'yla hukukî geçerlilik kazandı. Kararnâme bu yüzden haritada TABAN RENGİNİ değiştirmez — de jure sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi işgal örtüsüdür.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

// ---------------------------------------------------------------------------
// J) MEHDÎ DEVLETİ — md.43, ilerleyiş ve geri fetih
// ---------------------------------------------------------------------------
// Bugün veride yalnız 1885-01-26 (Hartum) ve 1899-01-19 (İngiltere) var; yani
// Mehdî devleti tek hamlede doğup tek hamlede yıkılıyor gibi görünüyor.
// Aşağıdaki dört madde arasını doldurur.

{ t:"1883-11-05", k:"kayip", etiket:["toprak-kaybi","savas","ayaklanma"],
  b:"Şeykan bozgunu — Hicks Paşa ordusunun yok edilişi",
  gun:"5 Kasım 1883", yer:"Şeykan, Kordofan", kisiler:"William Hicks Paşa, Muhammed Ahmed el-Mehdî",
  d:"Kahire'den gönderilen ve yaklaşık on bin kişilik Mısır kuvvetine kumanda eden emekli İngiliz subayı Hicks Paşa, Kordofan çölünde susuz ve kılavuzsuz ilerlerken 5 Kasım 1883'te Şeykan'da Mehdî kuvvetlerince kuşatıldı ve ordu neredeyse tamamen imha edildi. Bu bozgun Sudan'daki Mısır idaresinin belkemiğini kırdı: bir ay içinde Darfur ve Bahrülgazâl teslim oldu, Kordofan'ın tamamı Mehdî'ye geçti. Hartum'un düşüşüne giden yol buradan başlar.",
  kaynak:"muhammed-ahmed-el-mehdi", duygu:["😔"] },

{ t:"1896-09-23", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Dongola'nın geri alınışı — Nil boyu seferinin başlaması",
  gun:"23 Eylül 1896", yer:"Dongola, Kerma, Nil'in üçüncü çağlayanı", kisiler:"Herbert Kitchener, Abdullah b. Muhammed et-Teâyişî",
  d:"İtalyanların Adua'da yenilmesinden sonra İngiltere, Mısır ordusunu Kitchener kumandasında Nil boyunca güneye yürüttü. Demiryolu çölde ilerledikçe ikmal sorunu çözüldü ve Dongola vilâyeti 23 Eylül 1896'da geri alındı. On bir yıllık Mehdî idaresi burada sona erdi; sefer iki yıl daha sürerek Ümmüdurman'a ulaşacaktı. Atlasta Dongola'nın Mehdî döneminin bu tarihte bitmesi gerekir — bugün Hartum'la aynı güne (1899) bağlı görünüyor.",
  kaynak:"sudan", duygu:["🎉"] },

{ t:"1898-09-02", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Ümmüdurman Muharebesi — Mehdî devletinin yıkılışı",
  gun:"2 Eylül 1898", yer:"Ümmüdurman (Omdurman), Hartum karşısı", kisiler:"Herbert Kitchener, Abdullah b. Muhammed et-Teâyişî",
  d:"Kitchener'ın topçu ve makineli tüfekle donanmış İngiliz-Mısır ordusu 2 Eylül 1898'de Ümmüdurman önünde Halife Abdullah et-Teâyişî'nin kuvvetlerini birkaç saatte dağıttı. Ertesi gün Hartum'a girildi ve on üç yıl önce Gordon'un öldürüldüğü sarayda bayrak çekildi. Mehdî devletinin başkenti düştü; Halife 1899 sonunda takip harekâtında öldürüldü. Fiilî hâkimiyet bu tarihte el değiştirir — 19 Ocak 1899 ise idarenin hukukî çerçevesini kuran antlaşmadır.",
  kaynak:"sudan", duygu:["🎉","😔"] },

{ t:"1899-01-19", k:"antlasma", etiket:["antlasma","diplomasi"],
  b:"Kondominyum Antlaşması — Sudan'ın İngiliz-Mısır ortak idaresi",
  gun:"19 Ocak 1899", yer:"Kahire · Sudan", kisiler:"Lord Cromer, Butros Gali Paşa",
  d:"Ümmüdurman'dan dört ay sonra Kahire'de imzalanan antlaşma Sudan'ı 'Anglo-Mısır Sudanı' adıyla iki devletin ortak idaresine bağladı: iki bayrak birlikte çekilecek, genel vali hidiv tarafından İngiltere'nin muvafakatiyle atanacaktı. Uygulamada idare tamamen İngilizlerin elindeydi. Osmanlı Devleti, Sudan üzerindeki haklarının Mısır üzerinden kendisine ait olduğunu ileri sürerek antlaşmaya taraf olmadı ve tanımadı; ama fiilen dışarıda kaldı.",
  kaynak:"sudan", duygu:["🤝"] },

// ---------------------------------------------------------------------------
// K) KIZILDENİZ — md.44, Zeyla'nın yanlış maddeye bağlanması
// ---------------------------------------------------------------------------

{ t:"1884-01-01", k:"kayip", etiket:["toprak-kaybi","diplomasi"],
  b:"Zeyla ve Somali sahilinin İngiliz idaresine geçişi",
  gun:"1884", yer:"Zeyla, Berbera, Bulhar, Somali sahili", kisiler:"Hidiv Tevfik, Aden siyasî mukimi",
  d:"Mehdî ayaklanması Mısır'ın Sudan ve Kızıldeniz garnizonlarını çökertince Kahire, Habeş kıyısındaki uzak karakollarını boşaltmak zorunda kaldı. Aden'deki İngiliz idaresi 1884'te Zeyla ve Berbera'ya asker çıkardı; ertesi yıl Somali kabile reisleriyle himaye antlaşmaları imzalanarak İngiliz Somalilandı kuruldu. 1559'dan beri Habeş eyaletine bağlı olan Zeyla böylece elden çıktı. Denetim bu kırılmayı aynı güne düşen 'Reji İdaresi' maddesiyle eşleştiriyordu; bu madde o eşleşmeyi düzeltir. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"aden", duygu:["😔"] },

// ---------------------------------------------------------------------------
// L) TUNUS — md.51, işgalin ikinci adımı
// ---------------------------------------------------------------------------
// ⚠️ md.51'in asıl talebi mevcut "1881-05-12 Tunus'un işgali ve Düyûn-ı
// Umûmiyye" maddesinin AYRILMASIDIR. İki olayın birbiriyle ilgisi yok:
// Düyûn-ı Umûmiyye 20 Aralık 1881 Muharrem Kararnâmesi'yle kuruldu ve TDV'nin
// `duyun-i-umumiyye` maddesi Tunus'tan hiç söz etmiyor. Zaten doğru tarihli
// ayrı bir madde de var (1881-12-20). Birleşik maddenin düzeltilmesi merkez
// oturumda; bu madde işgalin tamamlanışını ekler.

{ t:"1883-06-08", k:"kayip", etiket:["toprak-kaybi","antlasma","diplomasi"],
  b:"Mersâ (La Marsa) Sözleşmesi — Tunus himayesinin tamamlanması",
  gun:"8 Haziran 1883", yer:"Mersâ (La Marsa), Tunus", kisiler:"Ali Bey, Paul Cambon",
  d:"12 Mayıs 1881 tarihli Bardo (Kasrüssaîd) Antlaşması Tunus'un dış işlerini Fransa'ya bırakmış ama iç idareyi beye bırakmıştı; iki yıl sonra 8 Haziran 1883'te imzalanan Mersâ Sözleşmesi malî ve idarî reformları da Fransız denetimine verdi ve himayeyi tamamladı. Osmanlı Devleti Tunus üzerindeki hükümranlık iddiasını sürdürdü ve işgali hiçbir zaman tanımadı, ama fiilî bir karşı adım atamadı. Böylece 1574'ten beri Osmanlı ocaklığı olan Tunus resmen Fransız himayesine girdi.",
  kaynak:"tunus", duygu:["😔"] },

// ---------------------------------------------------------------------------
// N) NAPOLYON'UN MISIR İŞGALİ — md.6
// ---------------------------------------------------------------------------
// Kullanıcı: "Napolyon'un Mısır işgali haritada görünmüyor." Doğru — veride
// 1798-1801 arası HİÇBİR İZ yok; Kahire 1517'den 1805'e kesintisiz `d:`.
// Bu bir İŞGAL, yani `isg:` örtüsü sınıfı: Osmanlı hükümranlığı hukuken sürdü,
// Fransa üç yıl fiilen orada oldu. Örtü önerisi OTURUM-14-DUZELTMELER.md §16.
//
// ⚠️ Oturum 2'nin D-4 kuralı gereği örtünün BAŞI ve SONU maddeli olmak zorunda;
// aşağıdaki 1798-07-01 ve 1801-09-02 maddeleri tam onun için yazıldı.
//
// 🔴 İKİ MADDE YAZILDI, SONRA SİLİNDİ — mükerrer denetimi yakaladı:
//   1798-07-01 "Napolyon'un Mısır'a çıkarması"  ×  olaylar.js    1798-07     (oran 0.60)
//   1801-09-02 "Fransızların Mısır'dan tahliyesi" × olaylar_ek5.js 1801-10-09 (oran 0.60)
// Napolyon devri kronolojide ZATEN vardı (olaylar.js 1798-07 · ek5'te
// 1798-09-03 savaş ilânı · 1799-05-20 Akkâ Savunması · 1801-10-09 tahliye);
// eksik olan HARİTA tarafıydı, kronoloji değil. Yazmadan önce 1798-1801
// aralığını taramamıştım — 1830-1914'ü taramıştım. Aynı hatanın (Fizan) ikinci
// tekrarı: DOSYA ayrı, TARİH UZAYI ORTAK.
// Örtünün iki ucu zaten maddeli olduğu için D-4 kendiliğinden sağlanıyor:
//   başı 1798-07 (+0 gün) · sonu 1801-10-09 (+0 gün)
//
// KALAN İKİ MADDE gerçekten eksikti ve mükerrer değil:
//   1798-07-21 Piramitler — Kahire'nin düşüşü hiçbir yerde yoktu
//   1799-03-18 Akkâ kuşatmasının BAŞLAMASI — ek5'teki 1799-05-20 kuşatmanın
//              PÜSKÜRTÜLMESİ, ayrı olay (63 gün arayla, denetim ayırt etti)
//
// 🔴 KAYNAK DURUMU AÇIKÇA: TDV'nin `kahire` maddesi yalnızca "1798" yılını
// veriyor, gün vermiyor; `aris` maddesi 18 Şubat 1799 (Arîş'in işgali),
// 17 Kasım 1799 (Osmanlıların geri alışı) ve 24 Ocak 1800 (Arîş Antlaşması)
// veriyor ama tahliyeyi "aynı yıl" diye geçiyor — bu tarihen eksiktir, Arîş
// Antlaşması İngiltere'ce reddedildi ve Fransızlar 1801'e kadar kaldı.
// Yalnız Akkâ kuşatmasının günü TDV'de kesin: 18 Mart 1799 (`akka`).
// Piramitler'in günü standart kayıttan alındı ve maddede işaretlendi.

{ t:"1798-07-21", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Piramitler Muharebesi ve Kahire'nin Fransızlarca alınması",
  gun:"21 Temmuz 1798 (gün standart kayıttan)", yer:"Îmbâbe, Giza, Kahire", kisiler:"Napolyon Bonapart, Murad Bey, İbrâhim Bey",
  d:"Napolyon İskenderiye'den Nil boyunca güneye yürüdü ve 21 Temmuz 1798'de Giza karşısındaki Îmbâbe'de Murad Bey'in Kölemen süvarisini karşıladı. Kare düzenindeki Fransız piyadesi süvari hücumlarını kırdı; Kölemen ordusu dağıldı ve Kahire iki gün sonra direnişsiz teslim oldu. Murad Bey Yukarı Mısır'a, İbrâhim Bey Suriye'ye çekildi. Fransızlar Kahire'de bir dîvân kurup idareyi ulemâ eliyle yürütmeye çalıştılar; 1798 Ekiminde ve 1800 Martında iki büyük Kahire ayaklanması çıktı.",
  kaynak:"kahire", duygu:["😔"] },

{ t:"1799-03-18", k:"kayip", etiket:["savas"],
  b:"Napolyon'un Akkâ kuşatması — Suriye seferinin durdurulması",
  gun:"18 Mart 1799", yer:"Akkâ (Acre), Filistin sahili", kisiler:"Napolyon Bonapart, Cezzâr Ahmed Paşa, Sidney Smith",
  d:"Osmanlı'nın Mısır'ı geri almak için hazırladığı kuvvetleri dağıtmak isteyen Napolyon 1799 başında Suriye'ye yürüdü; Arîş'i 18 Şubatta, Yafa'yı martta aldı ve 18 Mart 1799'da Akkâ'yı kuşattı. Cezzâr Ahmed Paşa'nın savunması ve İngiliz amirali Sidney Smith'in denizden desteği kuşatmayı iki ay boyunca kırdı; kuşatma topları denizde ele geçirildiği için surlar aşılamadı. Napolyon mayısta çekildi ve bu yenilgi Fransız işgalinin en uç noktası oldu. Bu tarih atlasta toprak değiştirmez — işgalin sınırını gösterdiği için yazılmıştır.",
  kaynak:"akka", duygu:["😔"] },

// ---------------------------------------------------------------------------
// M) ALÂİYE — Afrika DIŞI, tek istisna
// ---------------------------------------------------------------------------
// ⚠️ Bu madde Anadolu'ya ait; bu dosya Afrika içindir. Petek kilidi sırasında
// merkez oturumun açık bıraktığı Alâiye sorusuna bakıldı ve cevap bir kırılma
// düzeltmesi gerektirdi. Elimdeki tek kronoloji dosyası burası olduğu için
// buraya yazıldı — başka dosyaya taşınması gerekiyorsa taşınabilir.
//
// SORU: Alâiye ayrı bir beylik mi, Karamanoğulları'nın kolu mu?
// CEVAP: ikisi de değil — ÖNCE kol, SONRA Memlük toprağı.
// TDV `alaiye-beyligi` (<title> ✓ CANLI) birebir: "Karaman b. Savcı Bey
// tarafından 1427 yılında 5000 altın karşılığında Memlük Sultanı Barsbay'a
// satıldı." Yani beyliğin son 44 yılı Karamanlı değil MEMLÜK'tür.
//
// Veride bugün `alaiye` dönemi 1471'e kadar sürüyor; 1427'de bitmeli ve araya
// `memluk` girmeli (OTURUM-14-DUZELTMELER.md §14). Bu madde o kırılmayı açar.
//
// ⚠️ 1427-01-01'de ZATEN İKİ MADDE VAR (Tâceddinoğulları'nın ilhakı ·
// Belgrad'ın Macaristan'a bırakılması). Değişmez 2 onlarla +0 gün geçerdi ama
// Alâiye'nin satılışı Niksar'ın ilhakı maddesinin altında belirirdi — §11'deki
// yanlış-eşleşme sınıfı. Mükerrer denetimi bu üçünü ayırt ediyor (ortak kişi ve
// ortak kök yok); yine de uygulamadan önce kontrol edilmeli.

{ t:"1427-01-01", k:"kayip", etiket:["toprak-kaybi","diplomasi"],
  b:"Alâiye'nin Memlük Sultanı Barsbay'a satılması",
  gun:"1427", yer:"Alâiye (Alanya), İçel sahili", kisiler:"Karaman b. Savcı Bey, Memlük Sultanı Barsbay",
  d:"1293'te Karamanoğlu Mecdüddin Mahmud Bey'in ele geçirdiği Alâiye, Karamanoğulları'nın bir kolu tarafından yönetilen ayrı bir beylik hâline gelmişti; İbn Battûta 1333'te idarenin Karamanoğlu Yûsuf Bey'de olduğunu kaydeder. Karaman b. Savcı Bey 1427'de şehri beş bin altın karşılığında Memlük Sultanı Barsbay'a sattı ve Alâiye Memlük idaresine girdi. Akdeniz'in bu kilit limanı böylece Osmanlı'nın güneye açılan yolunda Memlük elinde bir engel oldu; 1471'de Gedik Ahmed Paşa kuşatınca son bey Kılıcarslan şehri teslim etti. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"alaiye-beyligi", duygu:["😔"] },

];

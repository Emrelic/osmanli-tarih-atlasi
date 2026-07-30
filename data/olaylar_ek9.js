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
  kaynak:"cezayir" },

{ t:"1843-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Şelif vadisi ve Tenes'in işgali — Orléansville'in kurulması",
  gun:"1843 (Nisan)", yer:"Şelif vadisi, Tenes, Dahra", kisiler:"Mareşal Bugeaud",
  d:"Abdülkādir'i takip edebilmek için Fransızlar 1843 Nisanında Şelif vadisinin ortasında Orléansville adlı yeni bir şehir kurdular; aynı yıl kıyıdaki Tenes limanı da işgal edildi. Böylece Cezayir ile Vehrân arasındaki iç koridor Fransız denetimine girdi ve Dahra dağlarındaki direniş kuşatıldı. Aynı yılın 16 Mayısında Abdülkādir'in göçer kampı 'smala' tesadüfen bulunup dağıtıldı. Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir" },

{ t:"1843-06-12", k:"kayip", etiket:["toprak-kaybi"],
  b:"Sîdî Bel Abbès müstahkem kampının kurulması",
  gun:"12 Haziran 1843", yer:"Sîdî Bel Abbès, Vehrân eyaleti", kisiler:"Mareşal Bugeaud, General Bedeau",
  d:"Bugeaud 12 Haziran 1843'te General Bedeau'ya Sîdî Bel Abbès'te hendekli ve surlu bir müstahkem kamp kurma emrini verdi; inşaata 18 Haziranda başlandı ve aynı yılın kasımında Yabancı Lejyon'un bir taburu buraya yerleşti. Kamp, Vehrân ile Tilimsan arasındaki iç ovayı denetleyen kalıcı bir üs oldu. Oturum 14 bu noktayı 1844-03-04'e yuvarlamıştı; gerçek tarih budur.",
  kaynak:"cezayir" },

{ t:"1844-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Nedrûme ve Fas sınır kuşağının Fransız denetimine geçişi",
  gun:"1844", yer:"Nedrûme, Tilimsan çevresi, Fas sınırı", kisiler:"Mareşal Bugeaud, Abdülkādir el-Cezâirî",
  d:"Abdülkādir'in 1843'te Fas'a çekilmesinden sonra Tilimsan'ın kuzeybatısındaki Nedrûme ve Trâra kıyısı Fransız denetimine girdi. 14 Ağustos 1844'teki Isly Muharebesi Fas ordusunu bozguna uğrattı ve iki ülke arasındaki sınır 18 Mart 1845 Lâlla Mağniye Sözleşmesi'yle çizildi; Nedrûme bu çizginin Cezayir tarafında kaldı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"tilimsan" },

{ t:"1852-12-04", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Ağvât'ın (Laghouat) düşüşü — Sahra kapısının açılması",
  gun:"4 Aralık 1852", yer:"Ağvât (Laghouat)", kisiler:"General Pélissier",
  d:"General Pélissier altı bin kişilik bir kuvvetle 21 Kasım 1852'de Ağvât'ı kuşattı ve 4 Aralıkta şehir kanlı bir hücumla düştü. Ağvât, Tell ile Sahra arasındaki geçişi tutan vaha şehriydi; düşmesi Fransız ilerleyişini çöl kervan yollarına açtı ve Mîzâb konfederasyonunun bir yıl içinde vergiye bağlanmasının önünü hazırladı. Oturum 14 bu tarihi 1854-12-02'ye (Tuggurt) yuvarlamak zorunda kalmıştı.",
  kaynak:"cezayir" },

{ t:"1882-01-01", k:"kayip", etiket:["toprak-kaybi"],
  b:"Mîzâb vahalarının (Gardâye) ilhakı",
  gun:"1882 (Kasım)", yer:"Gardâye, Mîzâb vahaları", kisiler:"—",
  d:"Mîzâb'ın İbâzî şehirleri 1852'de Fransa'ya vergi ödemeyi kabul etmiş ama iç idarelerini korumuştu; otuz yıl sonra, 1882'de bölge doğrudan Fransız topraklarına katıldı ve Gardâye askerî idareye bağlandı. Böylece kuzey Sahra'nın son özerk kuşağı da hukuken sona erdi. Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir" },

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
  kaynak:"darfur" },

{ t:"1883-12-23", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın teslimi",
  gun:"23 Aralık 1883", yer:"Darfur, Dara, El-Fâşir", kisiler:"Rudolf Slatin Paşa, Şeyh Madibbo b. Ali, Muhammed Ahmed el-Mehdî",
  d:"Darfur genel valisi Slatin Paşa, 1882'den beri Rizeykāt kabilesinin Mehdîci ayaklanmasıyla uğraşıyordu; askerlerinin yenilgileri onun hıristiyan oluşuna yüklediğini düşünerek 1883'te açıkça müslüman oldu ve Abdülkādir adını aldı. Hicks Paşa'nın ordusunun kasım 1883'te Kordofan'da yok edilmesinden sonra direnişin anlamı kalmadı ve 23 Aralık 1883'te Emîr Madibbo'ya teslim oldu. Darfur'daki küçük Mısır karakolları da kısa sürede aynı yolu izledi; on yıllık Türk-Mısır idaresi bitti.",
  kaynak:"darfur" },

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
  kaynak:"huseyniler" },

// ---------------------------------------------------------------------------
// D) BOGOS (KERENE) — Mısır'ın Habeşistan içine tek kalıcı ilerleyişi
// ---------------------------------------------------------------------------

{ t:"1872-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Bogos (Kerene) bölgesinin Mısır'a ilhakı",
  gun:"1872", yer:"Kerene, Bogos, Bilen ülkesi", kisiler:"Werner Munzinger Paşa, Hidiv İsmâil",
  d:"Hidiv İsmâil'in Kızıldeniz'in batı kıyısında kurduğu 'Doğu Sudan ve Kızıldeniz Sahili' vilâyetinin valisi Werner Munzinger Paşa, 1872'de Bilen halkının yaşadığı Bogos bölgesini ve merkezi Kerene'yi Mısır'a bağladı. Bu, Mısır'ın Habeş yaylasının kenarına yaptığı en kalıcı ilerleyişti ve Habeşistan ile on iki yıl süren bir sınır anlaşmazlığı başlattı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"hidiv" },

{ t:"1884-06-03", k:"antlasma", etiket:["antlasma","toprak-kaybi","diplomasi"],
  b:"Hewett (Adua) Antlaşması — Bogos'un Habeşistan'a bırakılması",
  gun:"3 Haziran 1884", yer:"Adua, Habeşistan", kisiler:"Amiral William Hewett, Yohannes IV, Hidiv Tevfik",
  d:"Mehdî ayaklanması Sudan'daki Mısır garnizonlarını kuşatınca İngiltere, Habeşistan'ın yardımını almak için 3 Haziran 1884'te Adua'da Yohannes IV ile antlaşma imzaladı. Antlaşmanın ikinci maddesi Bogos'u Habeşistan'a geri veriyor, karşılığında Habeşistan kuşatılmış garnizonların Masavva üzerinden tahliyesine yol açıyordu. Kerene böylece on iki yıllık Mısır idaresinden çıktı; beş yıl sonra bölge İtalyan Eritresi'ne katılacaktı.",
  kaynak:"habesistan" },

// ---------------------------------------------------------------------------
// E) TOKAR — Doğu Sudan'ın sekiz yıllık Mehdî devri
// ---------------------------------------------------------------------------

{ t:"1884-01-01", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Doğu Sudan'ın Mehdî kuvvetlerine geçişi — Tokar'ın kaybı",
  gun:"1884", yer:"Tokar, Sinkat, Sevâkin ardalanı", kisiler:"Osman Digna, Muhammed Ahmed el-Mehdî",
  d:"Mehdî'nin doğu Sudan'daki halifesi Osman Digna, 1883 sonbaharından itibaren Bece kabilelerini ayaklandırarak Sevâkin'in ardalanını ele geçirdi; Sinkat ve Tokar garnizonları kuşatıldı ve 1884 başında bölge tamamen Mehdî idaresine girdi. Sevâkin limanı İngiliz-Mısır elinde kaldığı için kıyı ile içerisi sekiz yıl boyunca ayrı iki idare altında durdu. Tokar 1891 Şubatında geri alındı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"sudan" },

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
  kaynak:"kavalali-mehmed-ali-pasa" },

];

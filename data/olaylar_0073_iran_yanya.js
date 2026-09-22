// ============================================================================
// KRONOLOJİ — 1821-1823 OSMANLI-İRAN SAVAŞI · TEPEDELENLİ'NİN YANYA KUŞATMASI
// ============================================================================
// Yazan: EKO-BOLGE-0073 · 21 Eylül 2026 · 1.MURAT hükmü M-4835
// Doğuran ölçüm: paket 0073 H-0011 ("1821'de Osmanlı ordusu neredeydi?").
//   Ek okuma kartı yazılırken ölçüldü ki kartın EN GÜÇLÜ iki dayanağının
//   kronolojide KARŞILIĞI YOK: 1821-23 İran savaşı (tarama: 0 madde) ve
//   Tepedelenli'nin Yanya kuşatması (tarama: 0 madde). Bu dosya o boşluğu
//   kapatır.
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.OLAYLAR_0073_IRAN_YANYA
//    tanımlar. app.js `/^OLAYLAR(_[A-Za-z0-9]+)?$/` desenini tarar — ad TEK
//    altçizgiyle başlar ve gerisi harf+rakam, desen TUTAR.
// 🔴 index.html satırı 1.MURAT'ın kalemidir (M-4835). Satır eklenmeden maddeler
//    görünmez. `denetle.py` ise data/olaylar*.js'i glob ile okur — yani bu
//    dosya AÇILDIĞI AN Değişmez 2 evrenine girer, index.html'i beklemez.
//
// KAYNAK — hepsi TDV, gövdeleri 20-21 Eylül 2026'da çekilip OKUNDU
// (denetim/_govde_ekobolge/, çekici denetim/ARAC-EKO-BOLGE-GOVDE-0920.py):
//   `iran` (306K) — 1821-23 savaşının TEK toplu anlatısı
//   `bagdat` (115K) — Kölemen Dâvud Paşa ve Bağdat tarafı
//   `tepedelenli-ali-pasa` (25K, Kemal Beydilli, 2011)
//   `hursid-ahmed-pasa` (15K, Cevdet Küçük, 1998)
//   `abbas-mirza` (6K) · `kars` (21K) · `kerkuk` (18K) · `yanya` (28K)
//
// ⚠️ KAYNAK SESSİZLİĞİ — ÖLÇÜLDÜ, GİZLENMEDİ: 1821-23 işgalini YALNIZ TDV
//    `iran` anlatır. TDV `kars` ve `kerkuk` maddeleri bu yıllar hakkında tek
//    kelime etmez; TDV `bagdat` ise savaşı doğrular ("1821'de başlayan İran
//    savaşları") ama ŞEHRİN İŞGALİNDEN SÖZ ETMEZ — tersine Bağdat valisi
//    Dâvud Paşa'nın "önemli başarılar kazandığını" yazar. İki maddenin bu
//    ayrışması `ic_not_d` alanlarında adıyla duruyor; taraf SEÇİLMEDİ.
//
// ⚠️ SLUG KAZASI (§4 TDV tuzağı ①, HTTP 302): `suleymaniye` · `bayezid` ·
//    `erzurum--sehir` · `babanogullari` · `erzurum-antlasmasi` ·
//    `erzurum-antlasmalari` ölü. Bu yüzden Erzurum Antlaşması'nın GÜNÜ
//    bulunamadı; madde yıl hassasiyetinde bırakıldı (§4 D210).
//
// 🟡 BİLEREK ÖDENEN BORÇ — ÖNCEDEN BEYAN (D: "öngörü ölçümden önce yazılır"):
//    Aşağıdaki iki madde (1821-01-01 gs:10 ve gs:20) toprak değişimi İDDİA
//    EDİYOR, ama atlasta karşılığı YOK. ÖLÇÜLDÜ (21 Eylül 2026, girdi.yukle):
//    Yanya · Erzurum · Kars · Bağdat · Kerkük yerleşimlerinin 1815-1830
//    aralığında HİÇBİR `d:`/`v:`/`s:`/`isg:` kırılması yok (Süleymaniye ve
//    Bayazıt zaten yerleşim listesinde YOK; Doğubayazıt var, kırılmasız).
//    ⇒ Bu iki madde Değişmez 2t'nin ("madde iddia ediyor, harita kıpırdamıyor")
//      gerçek borcudur. 1.MURAT'ın hükmü gereği yerleşim verisine
//      DOKUNULMADI — el değiştirmeyi yazmak Oturum 0'ın kalemi.
//    🔴 AMA DENETİM BUNU BUGÜN GÖREMEZ — ve ÖLÇTÜM Kİ SEBEBİ BİR DEĞİL İKİ:
//      ① YAZIM: `denetle.py:1644 _toprak_iddiasi()` "toprak-kaybi" arıyor;
//        veride o yazım 17 kez, gerçek yazım "toprak-kayip" 292 kez geçiyor.
//        Kayıp sınıfının %94,5'i 2t ölçütünün DIŞINDA. Tahtaya bildirildi
//        (M-4886). Bu dosya verinin GERÇEK yazımını kullanır — 290 maddeyle
//        tutarlı olsun diye, borcu görünmez kılmak için değil.
//      ② YER KÖRLÜĞÜ: ölçüt `d/v/s` havuzunda KIRILMANIN YERİNİ SORMUYOR,
//        yalnız tarihine bakıyor (`kirilmasiz_madde` docstring'i bunu açıkça
//        söyler: "d/v/s havuzu eskisi gibi yersiz kalır"; `isg` havuzuna yer
//        şartı 19 Eylül 2026'da KIRILMASIZ-9 ile eklenmişti).
//    🔵 DÜZELTME — ilk yazımda buraya "ölçüt düzeltilince bu iki madde 2t
//      defterine adıyla düşecektir" yazmıştım. ÖLÇTÜM, YANLIŞMIŞ:
//      `denetim/ARAC-EKO-BOLGE-2T-YAZIM-0921.py` (denetle.py'yi modül olarak
//      koşturur) her iki yazımı da kabul ettirdiğinde 2t 1 → 11 çıkıyor
//      (tavan 42, AŞILMIYOR) — ama bu iki madde o 10'un içinde DEĞİL.
//      Sebep ②: 1821-01-01'in ±30 gün penceresinde üç kırılma var ve HİÇBİRİ
//      bu cephede değil — 1821-01-04 Dongola · Berber · Merevî · Kerma ·
//      Debbe · Ebû Hamed (Mehmed Ali'nin SUDAN seferi) ve 1821-01-01
//      Bolgrad · Westport (Kansas City) · Dera İsmail Han. Yani maddeyi
//      Sudan'daki bir toprak değişimi "kapatıyor".
//      📌 Ve bu, `YYYY-01-01` damgasının kendi yan etkisidir: yıl temsilî
//        maddeler ile yıl temsilî kırılmalar aynı 1 Ocak'ta toplanıp
//        birbirini takvim tesadüfüyle kapatıyor. denetle.py'nin YIL-TEMSİLÎ
//        BORÇ yorumu bunu ters yönde zaten söylüyor ("±30 gün penceresi
//        TAKVİMSEL BİR KURGUDUR"); burada aynı kurgunun madde tarafı.
//      ⇒ Bu iki maddenin harita borcu GERÇEKTİR ve yukarıda sayıyla duruyor;
//        onu gösteren şey bugün denetim değil, BU BEYANDIR.
// ============================================================================

window.OLAYLAR_0073_IRAN_YANYA = [

// ── İRAN CEPHESİ ────────────────────────────────────────────────────────────

{ t:"1821-01-01", gs:10, k:"savas", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Osmanlı-İran savaşı başladı — Kars ve Bayazıt'ın kaybı, Erzurum'un kuşatılması",
  gun:"1821 sonbaharı", yer:"Kars, Bayazıt, Erzurum",
  yer_id:"Erzurum", kisiler:"Veliaht Abbas Mirza, II. Mahmud",
  d:"Yunan isyanının ikinci yılında imparatorluğun doğu sınırı bir savaş bölgesine döndü. Kaçar veliahdı Abbas Mirza, şahın hacca giden hanımının bulunduğu kervanın Osmanlı temsilcilerince aranmasını bahane ederek büyük bir askerî kuvvetle sınırı geçti; Kars ve Bayazıt vilâyetlerini ele geçirdi ve Erzurum'u kuşatma altına aldı. Karşısındaki kuvvet sıradan bir sınır birliği değildi: Abbas Mirza Azerbaycan ordusunu Avrupa usullerine göre eğitmiş, Tebriz'de barut imalâthanesi ve top tezgâhları kurdurmuştu. Osmanlı Devleti ise bu sırada batıda Mora isyanıyla, kuzeybatıda Tepedelenli Ali Paşa'nın Yanya'daki direnişiyle uğraşıyordu ve elinde Avrupa usulünde eğitilmiş bir ordu yoktu; Yeniçeri Ocağı 1826'ya kadar ayakta kalacaktı.",
  ic_not_gun:"TDV `iran` yalnız \"1821 sonbaharında\" diyor; AY ve GÜN kaynakta YOK. `t` bu yüzden yıl temsilî (`YYYY-01-01`) yazıldı (CLAUDE.md §4 · D210) — sonbahar ile Ocak arasındaki fark bilerek göze alındı, çünkü ay uydurmak yasak. Gün bulunursa `t` düzeltilmeli.",
  ic_not_d:"⚠️ KAYNAK SESSİZLİĞİ: Kars'ın 1821-23'te el değiştirmesini TDV `kars` maddesi HİÇ anmıyor (gövde okundu, 20.573 karakter); tek dayanak TDV `iran`. Abbas Mirza'nın ordu ıslahatı TDV `abbas-mirza`dan. 🟡 HARİTA BORCU: Kars · Erzurum · Doğubayazıt yerleşimlerinin 1815-1830 arasında hiç kırılması yok (ölçüldü 21 Eylül 2026) — bu madde kırılmasızdır ve öyle olduğu BEYAN edilmiştir.",
  kaynak:"iran (TDV) · abbas-mirza (TDV) · kars (TDV, bu yıllar hakkında sessiz — teyit için okundu)",
  duygu:["😔"] },

{ t:"1821-01-01", gs:20, k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Süleymaniye ve Bağdat'ın İran işgali — Kerkük muhasarası",
  gun:"1821", yer:"Bağdat, Süleymaniye, Kerkük, Kuzey Irak",
  yer_id:"Bağdat", kisiler:"Kölemen Dâvud Paşa",
  d:"Doğu Anadolu'daki harekâtla eş zamanlı olarak İran kuvvetleri Osmanlı idaresindeki Kuzey Irak ve Bağdat eyaletine geniş çaplı bir saldırı düzenledi. Bağdat'ı o sırada, 1817'den beri valilik yapan Kölemen Dâvud Paşa yönetiyordu; paşa Napolyon'un eski yaverlerinden Deveaux'ya tâlim ettirdiği 10.000 kişilik piyade ve topçu kuvvetine sahipti. İmparatorluğun merkezinde henüz böyle bir ordu yoktu — Avrupa usulünde eğitilmiş birlikler o yıllarda ancak taşradaki güçlü valilerin elindeydi. Savaşı bitiren şey bir Osmanlı zaferi olmadı: Osmanlı direnişi ve Azerbaycan'ı saran salgın hastalık İran kuvvetlerini geri çekilmeye mecbur bıraktı.",
  ic_not_gun:"Kaynak ay/gün vermiyor, yalnız 1821 diyor — yıl temsilî yazıldı (D210).",
  ic_not_d:"⚠️ `kisiler` ALANINDAN ABBAS MİRZA ÇIKARILDI — ve bu bir denetim kaçamağı DEĞİL, kaynak sadakati: TDV `iran` Irak cephesindeki saldırıyı \"İran askerleri tarafından\" diye anlatır, Abbas Mirza'yı BU cephede ANMAZ; onu yalnız Kars-Bayazıt-Erzurum harekâtının başında gösterir. İlk yazımda çıkarımla eklemiştim. Yan etkisi: `denetle.py` mükerrer ölçütü (aynı gün + 3 ortak kişi jetonu) iki maddeyi şüpheli çift saymıştı — ortak jetonlar abbas · mirza · kusati idi; `_kisiler_kumesi` başlığı da kişi havuzuna kattığı için \"kuşatılması\" üçüncü jetonu üretiyordu. Kaynağa uygun düzeltme ölçütü de kendiliğinden temizledi. 🔴 TDV KENDİYLE ÇELİŞİYOR (§4 tuzağı ⑥), TARAF SEÇİLMEDİ: TDV `iran` \"Süleymaniye ve Bağdat işgal edildi, Kerkük kuşatıldı\" der. TDV `bagdat` (114.372 karakter, gövde okundu) ise aynı yılları anlatırken işgalden HİÇ söz etmez, tersine Dâvud Paşa'nın \"1821'de başlayan İran savaşlarında da önemli başarılar kazandığını\" yazar. TDV `kerkuk` (17.658 karakter) 1821-23 hakkında SESSİZ — 1732 ve 1743 İran saldırılarını ayrıntısıyla anlatır, bunu anmaz. Başlık `iran` maddesini izliyor; `d` metni işgalin süresini ve kapsamını İDDİA ETMİYOR, üç maddenin ortak noktası olan 'geniş çaplı saldırı' ve 'İranlıların geri çekilmesi' çerçevesinde kalıyor. Süleymaniye'nin GÜNÜ ve süresi ölçülemedi; TDV `suleymaniye` slug'ı HTTP 302 (ölü). 🟡 HARİTA BORCU: Bağdat ve Kerkük'ün 1815-1830 arasında hiç kırılması yok, Süleymaniye zaten yerleşim listesinde yok (ölçüldü 21 Eylül 2026) — madde kırılmasızdır, BEYAN edildi.",
  kaynak:"iran (TDV) · bagdat (TDV — savaşı doğruluyor, işgali anmıyor) · kerkuk (TDV, bu yıllar hakkında sessiz)",
  duygu:["😔"] },

{ t:"1823-01-01", k:"antlasma", etiket:["antlasma","konu-diplomasi"],
  b:"Erzurum Antlaşması — İran kuvvetlerinin altmış günde çekilmesi",
  gun:"1823", yer:"Erzurum", yer_id:"Erzurum",
  kisiler:"II. Mahmud, Feth Ali Şah",
  d:"İki yıl süren savaş, Erzurum'da imzalanan barış antlaşmasıyla sona erdi. Antlaşma uyarınca İran kuvvetleri altmış gün içinde işgal ettikleri topraklardan çekilecekti. Antlaşma yeni bir sınır çizmedi, savaş öncesi durumu geri getirdi; iki devlet arasındaki sınır anlaşmazlıkları 1833-1842'de yeniden çatışmaya dönüşecek ve ancak 1847'de, yine Erzurum'da imzalanan ikinci bir antlaşmayla düzenlenecekti. Doğu cephesinin kapanması, imparatorluğun bütün ağırlığını Yunan isyanına verebilmesinin ön şartıydı.",
  ic_not_gun:"🔴 GÜN BULUNAMADI. TDV `iran` yalnız \"1823'te Erzurum'da yapılan barış antlaşması\" diyor. Ayrı madde ARANDI: `erzurum-antlasmasi` ve `erzurum-antlasmalari` slug'larının ikisi de HTTP 302 (ölü). Sahte kesinlik yerine yıl bırakıldı (CLAUDE.md §4 · D210). Gün başka bir akademik kaynaktan bulunursa düzeltilmeli.",
  ic_not_d:"2t ÖLÇÜTÜ AÇISINDAN: madde bilerek `toprak-*` etiketi TAŞIMIYOR. Sebebi denetle.py'nin kendi gerekçesidir — statükoyu teyit eden, toprak devretmeyen barışlar (Kasr-ı Şirin, Vasvar, Amasya) o gün sınır oynatmaz ve ölçüt dışıdır. Bu antlaşma da toprak devretmiyor, işgali geri alıyor.",
  kaynak:"iran (TDV)",
  duygu:["🏛"] },

// ── YANYA CEPHESİ ───────────────────────────────────────────────────────────

{ t:"1820-03-01", k:"siyaset", etiket:["siyaset","ayaklanma","konu-siyasi","konu-askeri"],
  b:"Tepedelenli Ali Paşa'nın azli ve Yanya kuşatmasının başlaması",
  gun:"Mart 1820", yer:"Yanya (Epir), Tepedelen", yer_id:"Yanya",
  kisiler:"Tepedelenli Ali Paşa, Hurşid Ahmed Paşa, Hâlet Efendi, II. Mahmud",
  d:"II. Mahmud'un mahallî güçleri tasfiye siyaseti, otuz üç yıldır Yanya'yı yöneten ve Tesalya ile Epir'i fiilen elinde tutan Tepedelenli Ali Paşa'ya ulaştı. Paşa derbendler başbuğluğundan, oğlu Veli de Tırhala paşalığından azledildi; buna uymayacağı beklendiğinden üzerine kuvvet sevkedildi. Bu işle görevlendirilen Hurşid Ahmed Paşa aynı zamanda MORA VALİSİYDİ ve ona Rumeli seraskerliği de verilmişti; bölgedeki bütün mülkî ve askerî yöneticiler Tepedelenli'yi yakalamakla görevlendirildi. Yani Yunan isyanı patladığında Mora'yı yönetmesi gereken kumandan ve emrindeki kuvvetler Yanya Kalesi'ni kuşatıyordu. Ali Paşa 23 Mayıs 1820'de Rumlarla Yanya'da bir toplantı düzenledi, kendi idaresinde bir Rum eyaleti kurmaya tevessül etti ve onlara para ile silâh yardımında bulundu. Karşı tarafta küçümsenecek bir güç yoktu: Ali Paşa'nın 7.000'i dâimî olmak üzere 30-40.000 kişilik bir ordusu ve küçük bir donanması vardı; idaresindeki nüfus 1,5-2 milyon, yıllık geliri 4-5 milyon kuruş tahmin ediliyordu.",
  ic_not_gun:"TDV `tepedelenli-ali-pasa` azli \"Mart 1820\" diye verir; GÜN kaynakta YOK. `t` ayın birine yazıldı ve hassasiyet `gun` alanında açıkça duruyor (D213: `YYYY-MM-01` biçimi tek başına hassasiyeti söyleyemez, açıklayan alandan okunur).",
  ic_not_d:"⚠️ İKİ TDV MADDESİ FARKLI YIL VERİYOR, ikisi de yazıldı sayılmadı: `hursid-ahmed-pasa` (Cevdet Küçük) Hurşid Paşa'nın Mora valiliğine tayinini 1819'a koyar; `tepedelenli-ali-pasa` (Kemal Beydilli) Ali Paşa'nın azlini Mart 1820'ye. Bunlar AYRI olaylar olabilir (tayin önce, azil sonra) — çelişki olarak İDDİA EDİLMEDİ, madde yalnız azli tarihliyor. Sayılar (7.000/30-40.000/1,5-2 milyon/4-5 milyon kuruş) Beydilli'nin maddesinden, o da Holland'a dayandırıyor. 🟡 Yanya'nın 1815-1830 arasında hiç kırılması yok — ama bu madde toprak değişimi İDDİA ETMİYOR: Yanya bir Osmanlı valisinin isyanıydı, egemenlik el değiştirmedi. `toprak-*` etiketi bu yüzden YOK.",
  kaynak:"tepedelenli-ali-pasa (TDV, Kemal Beydilli) · hursid-ahmed-pasa (TDV, Cevdet Küçük) · yunanistan (TDV, Mehmet Hacısalihoğlu)",
  duygu:["🏛"] },

{ t:"1822-02-14", k:"isyan", etiket:["ayaklanma","konu-askeri","konu-isyan","konu-kisiler"],
  b:"Tepedelenli Ali Paşa'nın öldürülmesi — Yanya kuşatmasının sonu",
  gun:"14 Şubat 1822", yer:"Yanya gölü, Pandeleimon Manastırı", yer_id:"Yanya",
  kisiler:"Tepedelenli Ali Paşa, Hurşid Ahmed Paşa, Köse Mehmed Paşa",
  d:"Yanya'daki direniş iki yıla yakın sürdü ve tam bu süre içinde Rum isyanı genel bir yaygınlık kazandı. Hurşid Paşa kaleye casuslar gönderip kaçanlara rütbe ve atıyye dağıtınca Ali Paşa'nın etrafındaki asker sayısı kırk elli kişiye düştü; paşa teslim olması hâlinde canına dokunulmayacağı teminatıyla göl üzerindeki Pandeleimon Manastırı'na çekildi. Bu sırada Hurşid Paşa'nın ailesi Rum isyancıların eline geçmişti; bir an önce Mora'ya dönebilmek için verdiği emannâmeyi yok sayıp düzmece bir idam fermanı hazırlattı. Odasına girildiğinde Ali Paşa silâhla karşılık verdi ve çıkan çatışmada öldürüldü; başı 24 Şubat'ta İstanbul'a getirildi. Kuşatma Osmanlı kumandasının kendi içindeki çatlağı da açığa çıkarmıştı: Mora isyanı Tepedelenli meselesinden tehlikeli hâle gelince Seyyid Ali Paşa müstakil Mora seraskeri tayin edilmiş, bundan hoşlanmayan Hurşid Paşa onun yardım isteklerini geri çevirmiş, hatta onu devlet nazarında başarısız göstermeye çalışmıştı. Ali Paşa'nın ortadan kaldırıldığı yılın sonunda Mora'nın en güçlü kalesi Anabolu düştü.",
  ic_not_gun:"🔴 TDV KENDİYLE ÇELİŞİYOR (§4 tuzağı ⑥) — İKİ FARKLI GÜN, TARAF AÇIKÇA SEÇİLDİ VE SEBEBİ YAZILDI: `tepedelenli-ali-pasa` (Kemal Beydilli, 2011) \"14 Şubat 1822'de odasına girilerek... öldürüldü. Başı 24 Şubat'ta İstanbul'a getirildi\" der. `hursid-ahmed-pasa` (Cevdet Küçük, 1998) aynı olayı anlatır ve \"(24 Ocak 1822)\" yazar. Aradaki fark 21 gündür ve takvim farkıyla açıklanamaz (1822'de Jülyen-Gregoryen farkı 12 gün). `t` kişinin KENDİ maddesini ve daha yeni baskıyı izliyor. Öteki gün SİLİNMEDİ, burada duruyor; ikisini de veren üçüncü bir kaynak bulunursa hüküm değişebilir.",
  ic_not_d:"Kuşatma süresi (\"iki yıla yakın\") ve Rum isyanının bu sırada yayılması TDV `tepedelenli-ali-pasa`dan; emannâmenin bozulması, sahte ferman, Köse Mehmed Paşa ve Seyyid Ali Paşa çekişmesi TDV `hursid-ahmed-pasa`dan. İki madde OLAYIN AKIŞINDA birbirini tamamlıyor, yalnız GÜNDE ayrışıyor. 🟡 Yanya'nın kırılması yok; madde toprak değişimi iddia etmiyor (iç isyan), `toprak-*` etiketi YOK.",
  kaynak:"tepedelenli-ali-pasa (TDV, Kemal Beydilli) · hursid-ahmed-pasa (TDV, Cevdet Küçük)",
  duygu:["😔"] }

];

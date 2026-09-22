// ============================================================================
// EK OKUMA — 1856-1896 DİLİMİ (parti 0076, blok EKOKUMA-0076-A)
// ============================================================================
// Yazan: EKOKUMA-0076-A · 23 Eylül 2026 · maddeler H-0008 H-0011 H-0015 H-0020
// H-0027 H-0028 H-0031 H-0032 H-0033 H-0034 H-0051 H-0063 H-0077 H-0079 H-0090.
//
// 🔴 AD ALANI (CLAUDE.md §7 · tahta M-5024): bu dosya YALNIZ
//    window.EKOKUMA_P76B tanımlar. Kilit kalkınca data/ekokuma_p76b.js olarak
//    kopyalanacak ve js/app.js `_EKOKUMA_DOSYA_ADLARI` listesine
//    "ekokuma_p76b" satırı KOORDİNATÖRCE eklenecek (index.html'e satır YOK —
//    data/ekokuma*.js ana yüke katılmaz, app.js tembel yükler).
//
// 🔴 İKİNCİ YAMA ŞART: H-0008 YENİ BİR TÜR açıyor (`tur:"bu-ulke-neden-var"`).
//    js/app.js `EKOKUMA_TUR` sözlüğüne kayıt eklenmeden bu türdeki dört kart
//    veride durur ama HİÇBİR BUTON ÇIKMAZ (süzgeç tanımadığı `tur`u sessizce
//    geçer — D099 sınıfı). Yaması: denetim/EKOKUMA-0076-A-YAMA-app.js
//
// ŞEMA: data/ekokuma_p75a.js ile BİREBİR — { id, tur, kisa, metin, kesinlik,
// olay, kaynak }. `olay:` günleri kronoloji maddelerinin KENDİ `t:` alanından
// okundu (olaylar_ek.js · olaylar_ek2.js · olaylar_ek5.js · olaylar_ek6.js ·
// olaylar_ek7.js · olaylar_ek9.js · olaylar_ek10.js · olaylar_ek14.js ·
// olaylar_7a4170.js · olaylar_2s_0918.js · kronoloji_balkan.js ·
// kronoloji_ingiltere.js · kronoloji_misir.js · kronoloji_almanya.js);
// atlasın kendi günü DAYANAK yapılmadı, yalnız BAĞ olarak kullanıldı.
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): TDV birincil. Her slug HTTP koduyla tarandı,
// gövdesi çekildi, cümle cümle okundu; metin KOPYALANMADI, özetlendi.
//   TDV 200 (okundu): abdulaziz · midhat-pasa · cevdet-pasa · istanbul-konferansi
//     · abdulhamid-ii · meclis-i-mebusan · kanun-i-esasi · mesrutiyet ·
//     doksanuc-harbi · plevne · gazi-osman-pasa · gazi-ahmed-muhtar-pasa ·
//     ayastefanos-antlasmasi · berlin-antlasmasi · kibris · sark-meselesi ·
//     mehdi · mehdilik · vehhabilik · sudan · sarraflik · duyun-i-umumiyye ·
//     galata · kars · bulgaristan · islahat-fermani · kaime · esham
//   TDV ② TUZAĞI (canlı slug, gövde YÖNLENDİRME): tersane-konferansi →
//     "bk. İSTANBUL KONFERANSI"; asıl gövde istanbul-konferansi'nde okundu.
//     ahmed-cevdet-pasa → kısa künye kalıntısı; asıl gövde cevdet-pasa'da.
//   TDV 302 (ÖLÜ, arama sayfasına düşüyor): banka · bankacilik ·
//     osmanli-bankasi · bank-i-osmani · ziraat-bankasi · para-vakiflari ·
//     93-harbi (canlısı doksanuc-harbi) · osman-pasa (canlısı gazi-osman-pasa)
//     · ahmed-muhtar-pasa (canlısı gazi-ahmed-muhtar-pasa) · muhacir · goc ·
//     ermeniler · ermeni-mes-elesi · tasnaksutyun · hincak · mehdiyye ·
//     mehdi-devleti · sultan-abdulaziz
//   ⇒ TDV'de "Osmanlı Bankası" ve "Ermeni komiteleri" MADDESİ `bulunamadı`;
//     o iki konuda akademik kaynak kullanıldı ve `kaynak:` alanında AÇIKÇA
//     yazıldı (CLAUDE.md §4 "ara bölge" hükmü).
//
// 🔴 ÖLÇÜLEMEYEN, UYDURULMAYAN: II. Abdülhamid döneminde kaybedilen toprağın
//    TOPLAM km² değeri hiçbir akademik kaynakta bulunamadı (TDV vermiyor;
//    dergipark/ttk taraması sonuçsuz). Kart tek bir rakam UYDURMAK yerine
//    kayıpları antlaşma antlaşma sayıyor ve toplamın `bulunamadı` olduğunu
//    okura AÇIKÇA söylüyor. Atlasın kendi yüzölçümü DAYANAK YAPILMADI
//    (CLAUDE.md §4: atlas mamul üründür, referans değildir).
//
// ⚠️ ÜSLUP: kartlarda geliştirici sesi YOK — dosya adı, madde kodu, ders kodu,
//    kişi adı, "bu oturum" geçmez. Kaynak adı geçer (okura yararlı).
// ============================================================================
window.EKOKUMA_P76B = [

// ══════════════════════════════════════════════════════════════════════════
// H-0008 · YENİ KATEGORİ: "Bu ülke neden var?" — dört kurucu kart
// Kapsam kararı: talep otuz küsur ülke sayıyor (San Marino'dan Pakistan'a).
// ORTAK-0076 ④ gereği kapsam KENDİ BAŞIMA AÇILMADI: bu dilimin tarih
// penceresine (1856-1896) düşen ve kronolojide ÇAPASI OLAN dört ülke yazıldı.
// Gerisi `senin-kararin` olarak rapora çıkarıldı.
// ══════════════════════════════════════════════════════════════════════════

{ id:"bunv-romanya-1859", tur:"bu-ulke-neden-var",
  kisa:"Romanya, bir savaşla değil bir seçim hilesiyle doğdu: iki ayrı prensliğin meclisleri aynı adamı seçti ve Avrupa bu oldubittiyi geri alamadı.",
  metin:"■ ÖNCE İKİ AYRI ÜLKE VARDI\n"
    +"Bugünkü Romanya'nın çekirdeği, yüzyıllarca Osmanlı'ya bağlı iki ayrı voyvodalıktı: Eflak (güneyde, Tuna boyunda) ve Boğdan (kuzeydoğuda). İkisi de Osmanlı toprağı sayılıyordu ama doğrudan yönetilmiyordu; kendi voyvodaları, kendi kiliseleri, kendi vergileri vardı ve İstanbul'a yıllık vergi ödüyorlardı. Yani devlet olma alışkanlığı zaten mevcuttu — eksik olan, ikisinin TEK devlet olmasıydı.\n\n"
    +"■ AYIRAN NEYDİ, BİRLEŞTİREN NE OLDU\n"
    +"İki prensliği ayrı tutan şey coğrafya ve büyük devlet dengesiydi. Kırım Savaşı'nı bitiren 1856 Paris Antlaşması iki prensliği Osmanlı'ya bağlı bırakmakla birlikte Rus himayesinden çıkarıp Avrupa'nın ortak garantisi altına aldı. Ortak garanti demek, her birinin ayrı ayrı meclis kurması demekti — ve o meclisler birleşme istedi. Avrupa devletleri birleşmeye sıcak bakmıyordu; iki prensliğin ayrı kalması, hiçbirinin diğerinden fazla kazanmaması anlamına geliyordu.\n\n"
    +"■ HİLE\n"
    +"5 ve 24 Ocak 1859'da Boğdan ve Eflak meclisleri AYNI kişiyi, Albay Aleksandru İoan Cuza'yı prens seçti. Antlaşma metninde \"iki prensliğin aynı kişiyi seçemeyeceği\" yazmıyordu; kimse böyle bir şey düşünmemişti. Hukuken hâlâ iki devlet vardı, fiilen tek. Avrupa bu oldubittiyi tanımak zorunda kaldı. 1862'de birleşik yapı resmen \"Romanya\" adını aldı.\n\n"
    +"■ BAĞIMSIZLIK VE KRALLIK\n"
    +"Osmanlı'ya bağlılık kâğıt üzerinde 1877-1878 savaşına kadar sürdü. Romanya bu savaşta Rusya'nın yanında yer aldı, Plevne kuşatmasına asker verdi ve Berlin Antlaşması ile bağımsızlığı tanındı. Bedeli vardı: Besarabya'yı Rusya'ya bıraktı, karşılığında Dobruca'yı ve Tulça'yı aldı. 26 Mart 1881'de prenslik krallığa dönüştü.\n\n"
    +"■ ÖYLEYSE CEVAP\n"
    +"Romanya, \"Latin kökenli bir halkın Slav ve Macar denizinde ayrı kalma iddiası\" olarak anlatılır; ama devlet olarak var oluşunun somut sebebi, iki ayrı vassal prensliğin kendi meclislerini kullanarak birleşmesi ve bunun büyük devletlerce geri alınamamasıdır. Yani sebep etnik değil kurumsal: ayrı meclisler vardı, o meclisler birleşmeyi seçti.",
  kesinlik:"kesin",
  olay:["1859-01-24","1862-02-21","1881-03-26"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük) · berlin-antlasmasi (Ali İhsan Gencer) · doksanuc-harbi (Mahir Aydın) · sark-meselesi (Kemal Beydilli)" },

{ id:"bunv-lubnan-1861", tur:"bu-ulke-neden-var",
  kisa:"Lübnan'ın sınırını çizen şey dağ değil bir katliamdı: 1860'ın iç savaşından sonra Avrupa'nın dayattığı özel statü, Suriye'den ayrı bir idarî varlık yarattı.",
  metin:"■ SORUYU DOĞRU SORMAK\n"
    +"\"Lübnan neden Suriye'nin parçası değil?\" sorusunun cevabı 20. yüzyılda, Fransız mandasında aranır. Oysa ayrılığın idarî temeli bir yüzyıl önce, Osmanlı döneminde atıldı ve sebebi mezhep coğrafyasıydı.\n\n"
    +"■ DAĞDA İKİ TOPLUM\n"
    +"Cebel-i Lübnan, Mârûnî hıristiyanlarla Dürzîlerin iç içe yaşadığı bir dağ bölgesiydi. Osmanlı burayı doğrudan değil, yerli emîr aileleri üzerinden yönetiyordu. 19. yüzyılda Mısır işgali, ardından Tanzimat düzenlemeleri ve Avrupa devletlerinin cemaatleri himaye yarışı bu dengeyi bozdu: Fransa Mârûnîleri, İngiltere Dürzîleri destekledi.\n\n"
    +"■ 1860\n"
    +"Mayıs 1860'ta dağda Dürzî-Mârûnî iç savaşı patladı, olaylar Şam'a sıçradı ve büyük bir katliamla sonuçlandı. Fransa asker çıkardı. Bu, Avrupa'nın Osmanlı toprağına açıkça müdahale ettiği bir andı ve Bâbıâli için seçenek ikiydi: ya bölgeyi kaybetmek ya da Avrupa'nın kabul edeceği bir düzen kurmak.\n\n"
    +"■ ÇÖZÜM: AYRI STATÜ\n"
    +"9 Haziran 1861'de Cebel-i Lübnan Nizamnâmesi ilân edildi. Bölge Suriye vilâyetinden ayrılıp doğrudan İstanbul'a bağlı, imtiyazlı bir MUTASARRIFLIK oldu. Başında Osmanlı tebaası ama Lübnanlı olmayan bir hıristiyan mutasarrıf bulunacak, yanında mezheplerin nüfusuna göre üye verdiği bir idare meclisi çalışacaktı. Bölge merkezî vergiden ve askerlikten büyük ölçüde muaftı; düzeni kendi jandarması sağlıyordu.\n\n"
    +"■ ÖYLEYSE CEVAP\n"
    +"Lübnan'ın ayrı bir siyasî varlık olarak var olmasının kökü, bir milletin ayrı olduğu iddiası değil, bir iç savaşın ardından kurulan ve altmış yıl kesintisiz işleyen AYRI BİR İDARÎ ÇERÇEVEdir. O çerçeve, sınırları, nüfus sayımına dayalı mezhep kotası ve kendi meclisiyle, daha sonraki Lübnan devletinin hazır kalıbı oldu. Bugün hâlâ tartışılan mezhep kotası sisteminin atası budur.",
  kesinlik:"kesin",
  olay:["1861-06-09","1860-05-30"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük) · islahat-fermani (Ufuk Gülsoy) · sark-meselesi (Kemal Beydilli). ⚠️ Mutasarrıflığın iç işleyişi (kota, meclis) TDV'nin bu maddelerinde ayrıntısız; nizamnâmenin madde metni okunamadı — o ayrıntı `bulunamadı` sayılmalı" },

{ id:"bunv-bulgaristan-1878", tur:"bu-ulke-neden-var",
  kisa:"Bulgaristan'ın kuruluşu iki adımlıdır ve ilk adım kiliseydi: ayrı bir kilise ayrı bir millet tanımı üretti, devlet sekiz yıl sonra geldi.",
  metin:"■ ÖNCE KİLİSE, SONRA DEVLET\n"
    +"19. yüzyılda Osmanlı'daki Ortodoks halklar tek bir çatı altında, İstanbul'daki Rum Patrikhânesi'ne bağlıydı. Bu, kilise dili ve üst din adamları Rum demekti. Bulgar aydınlarının ilk talebi bağımsızlık değil KENDİ KİLİSESİydi: kendi dilinde ibadet, kendi piskoposları. 11 Mart 1870'te Bulgar Eksarhlığı kuruldu ve Bulgar kilisesi Fener'den ayrıldı.\n\n"
    +"■ NİÇİN BU KADAR ÖNEMLİ\n"
    +"Osmanlı düzeninde bir cemaatin sınırı, kilisesinin sınırıydı. Ayrı eksarhlık, \"Bulgar\" diye ayrı bir topluluğun RESMEN tanınması ve hangi kazaların Bulgar sayılacağının tartışılması demekti. Yani kilise ayrılığı, ileride çizilecek devlet sınırının ilk taslağını üretti.\n\n"
    +"■ İKİNCİ ADIM: SAVAŞ VE İKİ ANTLAŞMA\n"
    +"1877-1878 Osmanlı-Rus savaşının sonunda imzalanan Ayastefanos Antlaşması, Ege'ye uzanan çok geniş bir \"Büyük Bulgaristan\" öngördü. Avrupa devletleri bunu Rusya'nın Akdeniz'e inmesi saydı ve kabul etmedi. 13 Temmuz 1878 Berlin Antlaşması tasarıyı üçe böldü: kuzeyde Osmanlı'ya vergi veren özerk bir Bulgaristan Prensliği, güneyde Osmanlı valisi yönetiminde Doğu Rumeli, Makedonya ise doğrudan Osmanlı'da kaldı.\n\n"
    +"■ ÜÇÜNCÜ ADIM: BİRLEŞME\n"
    +"18 Eylül 1885'te Doğu Rumeli, Prensliğe katıldığını ilân etti. Bu, Berlin düzenini fiilen bozan bir oldubittiydi; Sırbistan savaş açtı ve yenildi. Tam bağımsızlık 1908'de ilân edilecekti.\n\n"
    +"■ ÖYLEYSE CEVAP\n"
    +"Bulgaristan, Yunanistan gibi uzun bir bağımsızlık savaşından değil, ÜÇ AYRI DIŞ KARARDAN doğdu: bir padişah fermanıyla tanınan kilise, bir büyük devletler kongresinde çizilen sınır ve bir yerel oldubittiyle yapılan birleşme. Bu yüzden Bulgar millî anlatısında 1878 bir \"kurtuluş\", Berlin ise bir \"haksızlık\" olarak anılır — ikinci duyguyu anlamadan sonraki kırk yılın Balkan siyaseti anlaşılmaz.",
  kesinlik:"kesin",
  olay:["1878-07-13","1885-09-18","1870-03-11"],
  kaynak:"TDV: bulgaristan (Mehmet İpşirli, Nazif Kuyucuklu, Yusuf Halaçoğlu, Semavi Eyice) · berlin-antlasmasi (Ali İhsan Gencer) · ayastefanos-antlasmasi (Ali İhsan Gencer) · abdulaziz (Cevdet Küçük) · doksanuc-harbi (Mahir Aydın)" },

{ id:"bunv-sirbistan-karadag-1878", tur:"bu-ulke-neden-var",
  kisa:"Sırbistan ile Karadağ'ı ayıran şey dil ya da din değil coğrafyadır: biri ovada Osmanlı'nın altında özerkleşti, öteki dağda hiç tam boyun eğmedi — ve ikisi aynı gün bağımsız oldu.",
  metin:"■ İKİ SIRP DEVLETİ NİÇİN İKİ TANE\n"
    +"Sırbistan ve Karadağ aynı dili konuşan, aynı Ortodoks kiliseye bağlı iki topluluktur. Buna rağmen 19. yüzyıla iki ayrı siyasî yapı olarak girdiler. Sebep coğrafyadır: Sırbistan Tuna-Morava ovasında, imparatorluğun ana yolu üzerinde; Karadağ ise ulaşılması zor, tarıma elverişsiz bir karst dağ bloğunda.\n\n"
    +"■ OVADAKİ: PAZARLIKLA ÖZERKLİK\n"
    +"Sırbistan'ın yolu ayaklanma ve müzakere döngüsüyle ilerledi: önce vergi ve yönetim imtiyazları, sonra kendi prensi, sonra kalelerdeki Osmanlı garnizonlarının çekilmesi. Bu son adım 1867'de tamamlandı — Belgrad kalesi teslim edildi ve Osmanlı'nın fiilî varlığı bitti, ama hukuken bağlılık sürdü.\n\n"
    +"■ DAĞDAKİ: HİÇ TAM GİRİLEMEYEN YER\n"
    +"Karadağ'da ise yüzyıllarca vergi toplamak bile düzensizdi; bölge uzun süre piskopos-prensler (vladika) tarafından yönetildi. 1862'de Hersek isyanını desteklediği için Osmanlı ordusu iki koldan girdi ve bölgeyi yenilgiye uğrattı, ancak kalıcı bir idare kuramadı. Karadağ'ın \"bağımsızlığı\" bu yüzden bir kopuş değil, zaten var olan bir fiilî durumun tanınmasıydı.\n\n"
    +"■ AYNI GÜN, AYNI MASA\n"
    +"İkisinin de bağımsızlığı 13 Temmuz 1878 Berlin Antlaşması ile kesinleşti. Sırbistan'a Niş ve Pirot verildi; Karadağ'ın sınırlarında düzenleme yapıldı, Boyana nehrinde ve İşkodra gölünde ticaret hakkı tanındı.\n\n"
    +"■ ÖYLEYSE CEVAP\n"
    +"İki ayrı devlet olmalarının sebebi iki ayrı millet olmaları değil, imparatorluk içinde iki ayrı şekilde var olmalarıdır: biri pazarlıkla kurumsallaşmış bir özerklik, öteki hiçbir zaman tam bastırılamamış bir dağ bölgesi. Aynı antlaşma ikisini birden tanıyınca iki ayrı hânedan, iki ayrı başşehir ve iki ayrı devlet geleneği kalıcılaştı — 20. yüzyılda birleşip 21. yüzyılda yeniden ayrılmalarının zemini de budur.",
  kesinlik:"kesin",
  olay:["1878-07-13"],
  kaynak:"TDV: berlin-antlasmasi (Ali İhsan Gencer) · abdulaziz (Cevdet Küçük) · doksanuc-harbi (Mahir Aydın) · sark-meselesi (Kemal Beydilli). ⚠️ Karadağ'ın iç yönetimi (vladika düzeni) okunan TDV maddelerinde ayrıntılı değil" },

// ══════════════════════════════════════════════════════════════════════════
// H-0011 · Osmanlı'da bankacılık — klasik dönemdeki işlev ve ilk bankalar
// ══════════════════════════════════════════════════════════════════════════

{ id:"banka-klasik-donem-banka-islevi", tur:"teknik-bilimsel",
  kisa:"Banka yokken bankanın işini kim yapıyordu? Cevap tek bir kurum değil, üç ayrı yapı: sarraflar, para vakıfları ve iltizam düzeninin kendisi.",
  metin:"■ SORU\n"
    +"Klasik Osmanlı düzeninde \"banka\" diye bir kurum yoktu. Ama bankanın yaptığı işler — para saklamak, para transfer etmek, kredi vermek, devleti finanse etmek — yapılmak zorundaydı. Bunları kimin yaptığına bakınca üç ayrı yapı çıkar.\n\n"
    +"■ ① SARRAFLAR\n"
    +"Osmanlı'da farklı isim ve ayarda pek çok yerli ve yabancı para dolaşıyordu; aralarındaki fiyat farkından yararlanarak para alıp satmayı meslek edinen aracılar ortaya çıktı. Sarraflık yalnız kambiyo değildi: para nakli ve muhafazası, gayrimenkul alım satımına aracılık, devlet adamlarının mali işlerini yürütmek, onlara borç vermek, para vakıflarının ve yetim mallarını idare eden birimlerin paralarını işletmek ve 1760'lardan itibaren özellikle savaş yıllarında kısa vadeli borçlarla hazineyi finanse etmek de sarrafın işiydi.\n\n"
    +"■ ② İLTİZAM VE MUKĀTAA SARRAFI — GİZLİ BANKA\n"
    +"En kritik işlev buydu. Devlet gelir kalemlerini (mukātaa) doğrudan toplamak yerine ihaleyle veriyordu. Emaneten işletilen her mukātaa için BİR SARRAF TAYİNİ ZORUNLUYDU; tayin, mukātaa emininin teklifi, darphâne nâzırının onayı ve padişah beratıyla yapılırdı. Sarraf, emine ve maden ocaklarındaki ustalara gereken sermayeyi peşin verir, hasattan sonra hesap görülürdü. Bu tam olarak bir işletme kredisidir — adı banka değildir, işi bankacılıktır.\n\n"
    +"■ ③ PARA VAKIFLARI\n"
    +"Nakit sermayeli vakıflar, paralarını işleterek geliriyle hayır hizmeti finanse ediyordu. Bu paraların işletilmesi de çoğu zaman sarraflar eliyle yürüdü.\n\n"
    +"■ KİMDİ BU İNSANLAR\n"
    +"Sarraflıkla ilgili Osmanlı kayıtları 15. yüzyıla kadar iner. 18. ve 19. yüzyıllarda İstanbul'daki sarrafların hemen tamamı gayrimüslimdi ve yaklaşık yüzde 85'i Ermeni'ydi. İş yerleri ve kasaları Galata semtinde toplandığı için \"Galata sarrafı\", 19. yüzyılın ikinci yarısından itibaren de \"Galata bankerleri\" diye anıldılar. Ad değişti; sermaye ve ağ aynı kaldı.\n\n"
    +"■ SONUÇ\n"
    +"Osmanlı'da bankacılığa geçiş sıfırdan bir kurum icadı değil, var olan sarraf ağının şirketleşmesidir. Bankalar taşrada şube açıp kredi işlerini üstlenince taşra sarrafları ve tefecileri bankalara düşmanca bir tavır takındı — çünkü işlerini kaybediyorlardı.",
  kesinlik:"kesin",
  olay:["1863-06-01"],
  kaynak:"TDV: sarraflik (Ali Akyıldız, Nebi Bozkurt) · galata (Semavi Eyice, İlber Ortaylı) · kaime (Ali Akyıldız) · esham (Mehmet Genç)" },

{ id:"banka-ilk-osmanli-bankalari", tur:"teknik-bilimsel",
  kisa:"İlk Osmanlı bankası bir tasarruf kurumu değil, kâğıt paranın değerini tutmak için kurulmuş bir kurtarma aracıydı — ve kurtaramadı.",
  metin:"■ BAŞLANGIÇ: KĀİME KRİZİ\n"
    +"1840'larda devlet kâğıt para (kāime) çıkarmaya başlamıştı. Kāime hızla değer kaybediyor, her düşüş yeni bir mali kriz üretiyordu. İlk banka girişimleri bu yüzden mevduat toplamak için değil, kāimenin kurunu tutmak için doğdu.\n\n"
    +"■ 1849 — DERSAÂDET BANKASI\n"
    +"Bankacılığın kurumsal başlangıcı olarak Dersaâdet Bankası'nın 1849'daki kuruluşu gösterilir. Bunu başka bankalar izledi ve bu süreçte Galata'nın banker aileleri belirleyici rol üstlendi. Yani ilk bankalar, sarraf sermayesinin şirket kılığına girmiş hâliydi.\n\n"
    +"■ KRİZLERİN ZİNCİRİ\n"
    +"Kāimeyi piyasadan çekmek için sırasıyla halktan zorunlu yardım toplandı (1848), 1858'de yüzde 6 faizli 5 milyon sterlinlik borç alındı, 1859'da tekrar İstanbul halkına başvuruldu. Toplananlar başka yerlere harcanınca hepsi boşa gitti — 1860 Şam olaylarının masrafı bunlardan biriydi. Ardından Fransız Mirés ile fahiş şartlı 16 milyon sterlinlik bir anlaşma imzalandı. Hükümetin bir sonraki fikri, bazı Galata bankerlerine bir banka kurdurup kāimeyi o yolla ortadan kaldırmaktı.\n\n"
    +"■ 1861 PANİĞİ\n"
    +"13 Aralık 1861'de İstanbul'da kāimenin fiyatı olağanüstü düştü ve piyasada geçmez oldu. Esnaf ve tüccar dükkânlarını kapattı, parası olanlar birkaç günlük ekmek aldı, camilerde toplanan halka dükkânlarını açmaları telkin edildi, sarrafların faaliyeti durduruldu, memur maaşları ertelendi. 1862 Eylülünde kāimenin tamamen kaldırıldığı resmen ilân edildi.\n\n"
    +"■ 1863 — DEVLET BANKASI\n"
    +"Asıl dönüm noktası 1863 imtiyaz sözleşmesidir: Osmanlı ülkesinde kāime çıkarma yetkisi ve TEKELİ Bank-ı Osmânî-yi Şâhâne'ye devredildi. Bundan sonra devlet kendi kâğıt parasını basmak için bile bankanın onayını almak ve yüzde 1 komisyon ile tazminat ödemek zorundaydı. Bir devletin para basma yetkisini bir bankaya devretmesi, o bankanın gücünü anlatır.\n\n"
    +"■ SONUÇ\n"
    +"1877-1878 savaşında hükümet Almanya'dan alınacak borç karşılığında 15 milyon liralık banknot basmasını istediğinde banka yanaşmadı. Savaşın ardından iç borçların dörtte üçü bu bankaya olan borçtu; 1881 Muharrem Kararnâmesi ile kurulan Düyûn-ı Umûmiyye, alacaklıları temsil eden komisyonun üyeleri arasında bankanın genel müdürünü de saydı. Yani ilk bankalar hikâyesi, bir tasarruf kurumunun değil, devletin mali egemenliğinin el değiştirmesinin hikâyesidir.\n\n"
    +"■ AÇIK KALAN\n"
    +"Bankanın kendi künyesi (kuruluş sermayesi, ortaklık yapısı, şube ağı) için başvurulan ansiklopedi maddesi bulunamadı; yukarıdaki bilgiler kāime, sarraflık ve dış borç maddelerinin içinden derlendi.",
  kesinlik:"kesin",
  olay:["1863-06-01","1881-12-20"],
  kaynak:"TDV: kaime (Ali Akyıldız) · sarraflik (Ali Akyıldız, Nebi Bozkurt) · duyun-i-umumiyye (Cevdet Küçük, Tevfik Ertüzün) · esham (Mehmet Genç). ⚠️ TDV'de müstakil \"Osmanlı Bankası\" maddesi `bulunamadı` (aranan sluglar ölü çıktı)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0015 · Abdülaziz'in 1867 Avrupa seyahati — güzergâh, İngiltere, yankılar
// ⚠️ Talebin "haritada göster" kısmı BU DOSYANIN AİLESİ DEĞİL: güzergâh
//    çizimi sefer/ok katmanı işidir, kart katmanı değil. Rapora çıkarıldı.
// ══════════════════════════════════════════════════════════════════════════

{ id:"seyahat-abdulaziz-1867-guzergah", tur:"sebep-sonuc",
  kisa:"Bir padişah ilk defa savaş için değil ziyaret için ülke dışına çıktı: 21 Haziran 1867'de Sultaniye vapuruyla İstanbul'dan ayrıldı, kırk yedi gün sonra döndü.",
  metin:"■ NİÇİN GİDİLDİ\n"
    +"Davet ikiliydi. Fransa İmparatoru III. Napolyon, Milletlerarası Paris Sanayi Sergisi'nin açılışı vesilesiyle padişahı Fransa'ya çağırdı ve İstanbul'daki elçisi aracılığıyla bu vesileyle genel barışı kuvvetlendirecek fikir alışverişinde bulunulabileceğini de bildirdi. Aynı sırada İngiliz Kraliçesi Victoria da Londra'ya davet edince Abdülaziz iki daveti birden kabul etti. Arka planda Girit, Sırbistan ve Romanya'daki olaylar, yani Fransa ile Rusya'nın desteklediği huzursuzluklar vardı; seyahat bir nezaket ziyareti değil, diplomatik bir hamleydi.\n\n"
    +"■ AYRILIŞ\n"
    +"Padişah 21 Haziran 1867'de İstanbul rıhtımından Sultaniye gemisiyle ayrıldı. Konvoyu, Fransız elçisini taşıyan Forbin korveti ile Fransız donanmasından üç, İngiliz donanmasından iki gemi korudu. Yanında on yaşındaki oğlu Yusuf İzzeddin, yirmi yedi yaşındaki yeğeni Murad ve yirmi beş yaşındaki yeğeni Abdülhamid, Hariciye Nâzırı Fuad Paşa ile Ömer Fâiz Efendi ve üst düzey görevliler bulunuyordu. Yani gelecekteki iki padişah da bu gemideydi.\n\n"
    +"■ FRANSA AYAĞI\n"
    +"Heyet Haziran sonunda Toulon Limanı'na ulaştı; oradan trenle Lyon'a, ardından Paris'e geçti. Padişahı bizzat III. Napolyon karşıladı ve birlikte Elysée Sarayı'na gittiler. 1 Temmuz Pazartesi günü Endüstri Sarayı'nda düzenlenen sergi ödül törenine katıldı; törende Osmanlı eşyalarının başkomiseri Selâhaddin Bey'e Légion d'honneur nişanının subay, Miralay Esad Bey'e şövalye rütbesi verildi. Sergiyi son kez 10 Temmuz'da gezdi, aldığı Sèvres porselen ve kristallerini İstanbul'a gönderdi ve 12 Temmuz 1867'de Londra'ya gitmek üzere Paris'ten ayrıldı.\n\n"
    +"■ DÖNÜŞ\n"
    +"Padişah Fransa ve İngiltere'nin yanı sıra Belçika, Prusya ve Avusturya'ya da uğradı ve 7 Ağustos 1867 günü İstanbul'a döndü.\n\n"
    +"■ AÇIK KALAN\n"
    +"Gemi yolculuğunun ara limanları, Belçika-Prusya-Avusturya ayağındaki şehirler ve o duraklardaki günler, başvurulan ansiklopedi maddesinde ve incelenen iki akademik makalede gün gün verilmiyor; bu ayrıntı için seyahate ayrılmış müstakil bir monografi gerekir. Burada uydurulmuş bir güzergâh YAZILMADI.",
  kesinlik:"kesin",
  olay:["1867-06-21","1867-07-01"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük) · Aziz Tekdemir, “1867 Paris Sergisi ve Sultan Abdülaziz'in Sergiyi Ziyareti”, Trakya Üniversitesi Edebiyat Fakültesi Dergisi 3/6 (Temmuz 2013), s. 1-19 (Ruznamçe-i Cerîde-i Havâdis ve Ahmed Lütfî Efendi Vak'anüvis tarihine dayanarak). Ayrıntılı güzergâh için işaret edilen monografi: Nihat Karaer, Paris, Londra, Viyana: Abdülaziz'in Avrupa Seyahati, Ankara 2007" },

{ id:"seyahat-abdulaziz-1867-ingiltere", tur:"sebep-sonuc",
  kisa:"Londra ayağı dokuz gün sürdü: Dover'a çıktı, Buckingham Sarayı'nda kaldı, Spithead'de kendisi için donanma geçit töreni yapıldı ve Dizbağı nişanı verildi.",
  metin:"■ GİRİŞ: DOVER\n"
    +"Padişah 12 Temmuz 1867 sabahı Dover Limanı'na çıktı. İskelede bekleyen arabalar ve tren, heyeti önce Lord Warden Oteli'ne götürdü; aynı gün Londra'ya geçildi. İngiltere ayağı 12-21 Temmuz arasında sürdü.\n\n"
    +"■ LONDRA\n"
    +"Karşılama töreninde kalabalığın alkışları arasında Mall üzerinden Buckingham Sarayı'na gidildi; padişah sarayda ağırlandı. Ertesi sabah, 13 Temmuz'da Kraliçe Victoria'yı ziyaret için Windsor'a gitti. 14 Temmuz Pazar günü Mısır Hidivi İsmâil Paşa padişahı Buckingham Sarayı'nda ziyaret etti. 15 Temmuz Pazartesi günü sarayda bir kabul resmi düzenlendi; Londra şehri adına Guildhall'da ayrı bir tören yapıldı.\n\n"
    +"■ WOOLWICH VE CRYSTAL PALACE\n"
    +"Program yalnız protokol değildi: padişah Woolwich'teki askerî tesisleri gezdi, ardından Sydenham'daki Crystal Palace'a geçti. Burada kraliyet emriyle, Londra'nın askerî bandolarının, sarayın kendi orkestrasının ve korolarının katıldığı büyük bir müzik şöleni düzenlendi.\n\n"
    +"■ DONANMA GEÇİT TÖRENİ VE DİZBAĞI NİŞANI\n"
    +"17 Temmuz Çarşamba günü, özellikle padişah için hazırlanmış bir donanma geçit töreni Spithead'de yapıldı. Padişah gösteriyi kraliyet yatı Osborne'dan izledi. Aynı tören sırasında kendisine, 1348'de III. Edward tarafından kurulmuş olan Dizbağı Nişanı verildi. Dönüşte Osborne, Portsmouth ve Clarence Yard üzerinden Londra'ya geçildi.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Bu ayrıntılar bir gezi programından ibaret değildir. Bir Osmanlı padişahının İngiliz donanmasının gücünü bizzat, denizin üstünde izlemesi ve İngiltere'nin en eski şövalyelik nişanını alması, Kırım Savaşı'ndan beri sürdürülen İngiliz-Osmanlı yakınlığının en görünür anıydı. On bir yıl sonra aynı İngiltere Kıbrıs'ın idaresini alacaktı.",
  kesinlik:"kesin",
  olay:["1867-07-01","1867-06-21"],
  kaynak:"Emel Demir Görür, “Reception, Accommodation, and Farewell of the Sultan Abdülaziz in Britain”, Tarih Dergisi / Turkish Journal of History 83 (2024/2), s. 111-144, DOI 10.26650/iutd.1446043 (dönemin İngiliz gazetelerine — Illustrated London News, Essex Standard, Punch, Christian Times, Levant Herald — dayanarak) · TDV: abdulaziz (Cevdet Küçük)" },

{ id:"seyahat-abdulaziz-1867-avrupa-basini", tur:"dis-yankilar",
  kisa:"İngiliz basını padişahı beklediğinden farklı buldu — ve bu şaşkınlığın kendisi, Avrupa'nın Türk imgesinin ne kadar çarpık olduğunu gösterir.",
  metin:"■ BEKLENEN GÖRÜNTÜ\n"
    +"Ziyaret üzerine İngiliz gazeteleri okurlarına Osmanlı Devleti'nin durumunu ve padişahın kim olduğunu anlatmaya çalıştı. Bu yazılar incelendiğinde asıl ilginç olan, anlatılan şey değil anlatanın şaşkınlığıdır: Haçlı seferlerinden beri Avrupa zihninde oluşmuş Müslüman imgesi, karşılarına çıkan sakin ve zararsız hükümdarla hiç örtüşmüyordu.\n\n"
    +"■ ÇARPITMANIN ÖLÇÜSÜ\n"
    +"Bir makalenin dönem gazetelerinden derlediğine göre Türk'ün kılığı, tavrı ve alışkanlıkları o kadar abartılıp çarpıtılmıştı ki Batı zihninde efsanevî bir yaratık çağrışımı uyandırıyordu. Yaygın beklenti şuydu: yay kirişi ve pala onun değişmez oyuncaklarıydı; bir şehri aldığında bütün erkekleri öldürmesi, kadın ve çocukları esir alması kaçınılmazdı. Padişah bu belirsiz korkunun başıydı.\n\n"
    +"■ GÖRÜLEN\n"
    +"Gerçek görüntü bambaşkaydı: yanında haremi ve askerî muhafız alayı yoktu, sade giyiniyordu, modern kıyafetiyle Avrupalılardan yalnız kırmızı fesiyle ayrılıyordu. Pek çok yayın onu alçakgönüllü, aklı başında ve gösterişten uzak diye niteledi; iyi bir müzisyen ve besteci olduğu vurgulandı. Alkol almadığını, inancının gereklerine bağlı kaldığını ve şarabı ısrarla reddettiğini yazanlar oldu. Bir dergi, geldiği günün cumaya denk gelmesinden hareketle padişahın dinî günlere aldırmadığı yorumunu yaptı; başka bir gazete ise oruç tuttuğunu ve halkına örnek olabilecek pek çok meziyeti bulunduğunu aktardı. Yani basın kendi içinde de çelişiyordu.\n\n"
    +"■ ÖVGÜNÜN İÇİNDEKİ TEPEDEN BAKIŞ\n"
    +"Christian Times, Osmanlı Devleti'ni İngiltere'nin sadık müttefiki diye niteleyip din, dil ve ırk ayırmadan bütün tebaaya ibadet hürriyeti tanındığını, kimsenin din değiştirmeye zorlanamayacağını ve bu güvencelerin kıta Avrupası'nın pek çok hıristiyan ülkesinde bile bulunmadığını yazdı. Aynı gazete padişahı \"Selâhaddin ya da Hârûnürreşîd değil, daha serbest bir mektepte yetişmiş iyi bir Müslüman\" diye tanımladı ve Hindistan'daki yaklaşık yirmi milyon Müslümanın dinî lideri olduğunu hatırlattı.\n\n"
    +"■ AMA AYNI SAYFALARDA\n"
    +"Aynı yazılar, Türklerin yoksulluğunu tembellik ve kayıtsızlıkla açıklıyor, doğunun sermayedarlarının Ermeniler ve Rumlar olduğunu söylüyor, Türklerin gücünü dinleri yüzünden kaybettiğini öne sürüyor ve Kur'an'ın çağın ruhuna göre değiştirilmesi gerektiğini savunuyordu. Yani ziyaret, önyargıyı bir ölçüde kırdı ama yerine koyduğu şey yine bir vesayet dilidir.\n\n"
    +"■ OKURA NOT\n"
    +"Bu kart bir gazete derlemesidir, bir hüküm değil. Dönemin basınının ne söylediğini gösterir; söylediğinin doğru olup olmadığını değil.",
  kesinlik:"kesin",
  olay:["1867-06-21","1867-07-01"],
  kaynak:"Emel Demir Görür, “Reception, Accommodation, and Farewell of the Sultan Abdülaziz in Britain”, Tarih Dergisi 83 (2024/2), s. 111-144 (Punch, Christian Times, Illustrated London News, Essex Standard, Huddersfield Chronicle, Glasgow Daily Herald, Pall Mall Gazette künyeleriyle)" },

{ id:"seyahat-abdulaziz-1867-onemi", tur:"tartisma",
  kisa:"Seyahat bir başarı mıydı yoksa pahalı bir gösteri mi? İki değerlendirme de aynı yılın içinden çıkarılabilir — ve ikisi de eksiktir.",
  metin:"■ OLUMLU OKUMA\n"
    +"Ziyaretin doğrudan sonuçları vardır. Başvurulan ansiklopedi maddesi, gezinin genel barışın sağlanmasında önemli rol oynadığını ve Avrupa ile ilişkilerin iyi bir duruma girdiğini yazar. Aynı yıl içinde Romanya'da Karol'un prensliği tanındı, Sırbistan kalelerinden Türk ordusunun çekilmesi kabul edildi, Girit'in Yunanistan'a ilhakı reddedildi ve adaya özel bir yönetim getiren nizamnâme çıkarıldı. Yani Balkanlar'daki kriz, toprak kaybı olmadan bir düzenlemeyle kapatıldı.\n\n"
    +"■ SEMBOLİK AĞIRLIK\n"
    +"Abdülaziz, Osmanlı tarihinde yabancı ülkelere seyahate çıkan tek padişah ve hıristiyan dünyasına dost olarak giden ilk halifedir. Bu, kendisinden önceki üç yüzyılın protokol mantığının tersine çevrilmesidir: padişah artık ziyaret edilen değil, ziyaret eden taraftır.\n\n"
    +"■ OLUMSUZ OKUMA\n"
    +"Eleştirinin çekirdeği maliyedir. Seyahat, devletin dış borç ödemelerinin normal gelirlerin yarısına dayandığı bir dönemde yapıldı; on yıl sonra, 1875'te hazine dış borç ödemelerini yarıya indirmek zorunda kalacaktı. Aynı dönemde İstanbul'u Paris'e bağlayacak 2000 kilometrelik demiryolu imtiyazı Baron Hirsch'e verilmişti — yani Avrupa ile yakınlaşma, eşzamanlı olarak Avrupa sermayesine bağlanma anlamına da geliyordu.\n\n"
    +"■ SİYASÎ SONUÇ KALICI OLDU MU\n"
    +"Olmadı. Gezinin sağladığı yakınlık, 1870'te Fransa'nın Almanya karşısında yenilmesiyle dağıldı: Bâbıâli reform programının en büyük destekçisini kaybetti ve Rusya 1871'de Paris Antlaşması'nın kendisini bağlayan hükümlerini tanımadığını ilân etti. Dört yıl sonra Hersek'te başlayan isyan zinciri, seyahatin yatıştırdığı sanılan meseleyi geri getirdi.\n\n"
    +"■ DÜRÜST HÜKÜM\n"
    +"Seyahat bir diplomatik hamle olarak işini gördü; kalıcı olamamasının sebebi gezinin kendisi değil, Avrupa dengesinin 1870'te değişmesidir. Masrafın devleti batırdığı iddiası ise tek başına ölçülebilir değildir: dönemin mali çöküşünün asıl kalemi seyahat değil, 1854'ten beri biriken dış borç servisidir.",
  kesinlik:"tartismali",
  olay:["1867-06-21"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük) · duyun-i-umumiyye (Cevdet Küçük, Tevfik Ertüzün) · Aziz Tekdemir, Trakya Üniversitesi Edebiyat Fakültesi Dergisi 3/6 (2013), s. 1-19" },

// ══════════════════════════════════════════════════════════════════════════
// H-0020 · Midhat Paşa ve Cevdet Paşa — şahsiyet kartları
// ══════════════════════════════════════════════════════════════════════════

{ id:"kimdir-midhat-pasa-sahsiyet", tur:"kimdir",
  kisa:"Taşrada dâhi, merkezde felâket: aynı huy — \"olmaz\" dememek — onu hem büyük bir valilik reformcusu hem de kırk dokuz günlük bir sadrazam yaptı.",
  metin:"■ ŞAHSİYETİN TEK CÜMLESİ\n"
    +"Dönemin bir kaynağı Midhat Paşa'yı şöyle anlatır: fikrince olmaz yoktu, her şey olurdu; giriştiği bütün işlerde ileriyi geriyi düşünmez, özellikle zamanın hükmünü ve çevrenin gereğini hesaba katmaz, her istediğini yapmak ve yaptırmak isterdi. Bu tek cümle hem başarısını hem çöküşünü açıklar.\n\n"
    +"■ AYNI HUYUN İKİ YÜZÜ\n"
    +"Taşrada bu huy bir güçtür: kaynağı kısıtlı bir vilâyette yol, köprü, okul, sanayi mektebi, ziraat sandığı kurmak tam da \"olmaz\" dememeyi gerektirir. Merkezde ise aynı huy zarar verir. Bu yönü hem sarayla hem mesai arkadaşlarıyla uyumlu çalışmasını zorlaştırdı ve genel olarak kendi tavrında ısrarcı, gururlu ve kibirli bir idareci diye nitelenmesine yol açtı. Taşradaki görevlerinde gösterdiği başarıyı nezâretlerde ve sadârette gösterememesinin sebeplerinden biri budur.\n\n"
    +"■ KIRK DOKUZ GÜN\n"
    +"30 Ocak 1877'de, konumuna uygun olmayan bir tarzda sert ve ağır bir dille kaleme aldığı ve muhtevası basına sızdırılan tezkiresini saraya sundu; sonra konağına çekilip padişahın davetlerini cevapsız bıraktı. Sadâretinin kırk dokuzuncu günü olan 5 Şubat 1877'de azledilip yurt dışına sürgüne gönderildi. Anayasayı hazırlayan adamın, anayasayı ilân eden padişaha karşı kullandığı üslûp, onu bir buçuk ayda görevinden etti.\n\n"
    +"■ ONA YÖNELTİLEN ASIL ELEŞTİRİ\n"
    +"Sadece üslûp değildi. Büyük ümitlerle ve ısrarla ilânını sağladığı meşrutiyetin, 1870'lerin kriz ortamını yatıştırmak yerine Balkanlar'daki ayrılıkçı hareketlerin ve bunların önemli destekçisi Rusya'nın işine yaradığı, kendisine yöneltilen ciddi eleştirilerdendir. Bu görüşü güçlendiren iki şey oldu: hazırlık safhasında paşanın da önemli sorumluluğu bulunan 1877-1878 savaşının ağır yenilgiyle bitmesi ve sonraki dönemin katı Osmanlıcılık yerine Müslümanların önceliğine dayalı bir çizgiye kayması.\n\n"
    +"■ BUNA RAĞMEN\n"
    +"Aynı kaynak hükmü şöyle bağlar: bütün bunlarla beraber Midhat Paşa, Türk siyasî hayatında anayasal ve parlamenter rejimin TARİHÎ BİR SİMGESİ sayılır. Şahsiyeti tartışmalıdır; sembol değeri tartışmasızdır.",
  kesinlik:"kesin",
  olay:["1876-12-23","1877-03-19"],
  kaynak:"TDV: midhat-pasa (Tufan Buzpınar, Gökhan Çetinsaya) · kanun-i-esasi (Mehmet Âkif Aydın) · mesrutiyet (Şükrü Hanioğlu) · istanbul-konferansi (Mithat Aydın)" },

{ id:"kimdir-cevdet-pasa-sahsiyet", tur:"kimdir",
  kisa:"Batı'nın bilimini alıp hukukunu almayan adam: Avrupa kanunlarının tercüme edilerek alınmasına karşı çıktı ve alternatifini kendisi yazdı.",
  metin:"■ ZİHNİN ŞEKLİ\n"
    +"Cevdet Paşa, geleneksel Türk-İslâm Doğu kültürü ile yenilikçi Batı arasında bir senteze varmaya çalışmış bir şahsiyettir. Daha genç bir medrese talebesiyken olağanüstü zekâsı, çalışkanlığı ve isabetli tahlilleriyle hocalarının dikkatini çekmiş, zaman zaman onlarla ilmî meselelerde tartışmaya girmiştir. Tanzimat'ın ilân edildiği yıl İstanbul'a gelmiş, ilim çevrelerinde kısa sürede tanınmıştır.\n\n"
    +"■ TEMEL AYRIM: METOT EVET, TAKLİT HAYIR\n"
    +"Düşüncesinin ekseni şudur: Osmanlı kurumları İslâmî esaslara dayanır; Osmanlı Devleti ile Batı devletleri farklı din ve medeniyetlerden doğmuştur; bu yüzden her yönden Batılılaşma hem yanlış hem imkânsızdır. Buna karşılık Batı'nın pozitif bilimler, teknik ve yönetim alanlarındaki üstünlüğünü kabul etmiş, bu alanlardaki Osmanlı kurumlarının Batı tarzında ıslahını savunmuştur. Yani ayrımı \"Doğu-Batı\" değil, \"metot-muhteva\"dır.\n\n"
    +"■ MECELLE BU TAVRIN ÜRÜNÜDÜR\n"
    +"Bir kısım devlet ileri geleni Fransız kanunlarının tercüme edilip alınmasını savunurken Cevdet Paşa buna karşı çıktı ve İslâmî geleneklerin korunması gerektiğini söyledi. Mecelle'nin hazırlanmasında en önemli rolü oynaması bu itirazın doğrudan sonucudur: itiraz etmekle kalmayıp alternatifini üretti.\n\n"
    +"■ DİL MESELESİ\n"
    +"Maarif alanındaki hedeflerinden biri Türkçe'nin bilim dili hâline getirilmesiydi. On iki ciltlik tarihini devrine göre sade bir dille yazması bu tutumun sonucudur. Okullarda okutulmak üzere modern metotlara göre Türkçe ders kitapları hazırladı; Türkçe'nin ilim dili olamayacağını iddia edenlere cevap olmak üzere bir risâle bastırdı. Encümen-i Dâniş'in teşkilinde büyük katkısı oldu, dârülmuallimîn yönetmeliği onun müdürlüğü zamanında düzenlendi, İstanbul'daki ilk idâdî onun Maarif nâzırlığı sırasında açıldı.\n\n"
    +"■ MİLLET VE VATAN ANLAYIŞI\n"
    +"Millet anlayışı, Müslüman milletlerin siyasî birliğini temsil eden Osmanlılık temeline dayanır. Milliyet karşılığında \"kavmiyet\" terimini kullanır ve bunun Fransız İhtilâli'nden sonra bulaşıcı bir hastalık gibi Avrupa'da yayıldığını söyler. Vatan fikrinde de muhafazakârdır: vatan mefhumunun Müslüman halk arasında Avrupa'daki gibi rağbet bulamayacağını, bunun yerine dinin daha tesirli olacağını savunur.\n\n"
    +"■ KENDİ ESERİNİ KENDİNE GÖRE YAZAN ADAM\n"
    +"Şahsiyetini gösteren ince bir ayrıntı vardır: hâtıratının bir bölümü, dönemin padişahının isteği doğrultusunda ve onun mizacına uygun bir dille kaleme alınmıştır; yer yer dedikodulara bile yer vermesiyle öteki eserinden ayrılır. Yani tarihçi, kimin için yazdığını bilerek yazmıştır — bu, onu okurken hesaba katılması gereken bir şeydir.",
  kesinlik:"kesin",
  olay:["1869-04-01","1869-06-01"],
  kaynak:"TDV: cevdet-pasa (Yusuf Halaçoğlu, Mehmet Âkif Aydın; Tarih-i Cevdet ve Tezâkir-Ma'rûzât bölümleriyle)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0027 · Abdülaziz neye direndi, ne yapmadığı için hal'edildi
// H-0028 · Abdülaziz: övgü, yergi, nasıl bilirdiniz
// ══════════════════════════════════════════════════════════════════════════

{ id:"abdulaziz-neye-direndi-hal-1876", tur:"sebep-sonuc",
  kisa:"Hal' fetvası \"mülkü ve milleti tahrip, beytülmâli israf\" dedi; ama padişahı deviren asıl mesele, hükümeti hükümete bırakmayı reddetmesiydi.",
  metin:"■ ÖNCE NEYE DİRENDİĞİNİ AYIRALIM\n"
    +"Abdülaziz'in direnci bir program karşıtlığı değil, bir yetki meselesiydi. Zeki bir insandı ve memleketin tam bir dikta rejimiyle yönetilemeyeceğini biliyordu; kanun hâkimiyetinin esas kılınması ve hükümet işlerinin hükümet adamlarına bırakılması gerektiğine inanıyordu. Ama aynı anda, hükümdarın düşünce ve kararlarında serbest ve bağımsız olmasının saltanatın gereği olduğu fikrinden de kendini alamıyordu. Yani kurumsallaşmayı kabul ediyor, kendi yetkisinin o kurumlarca sınırlanmasını kabul etmiyordu.\n\n"
    +"■ DENGENİN BOZULDUĞU AN\n"
    +"Saltanatının ilk döneminde bu eğilimi Âlî ve Fuad paşalar mümkün olduğunca dizginledi. İkisinin ölümünden sonra sadârete Mahmud Nedim Paşa'nın gelmesi padişahta büyük değişiklik yaptı ve asıl eğilimi açığa çıktı: ilk yıllarında başlattığı tasarruf tedbirlerini terkedip israfa başladı. Ayrıca devlet işleriyle kafa yormak istemeyen, her güçlüğe devlet adamlarının çare bulması gerektiğine inanan bir yapısı vardı — yetkiyi bırakmayan ama yükü de taşımayan bir hükümdar.\n\n"
    +"■ MALÎ ÇÖKÜŞ\n"
    +"Döneminde borçlar 200 milyon altına ulaştı; yıllık borç ve faiz ödemesi on dört milyon altını buldu. Malî politika borcu borçla ödemek ve açığı yeni borçla kapatmaktı; dışarıdan borç bulunamayınca Galata sarraflarından yüksek faizle borçlanılıyordu. 1875 bütçesinde beş milyon altın lira açık vardı ve artık iç-dış borçlanma imkânı kalmamıştı. 6 Ekim 1875'te alınan kararla yıllık on dört milyon liralık ödemenin yarısı beş yıl için kesildi, karşılığında yüzde beş faizli esham verilecekti. Karar Avrupa'da tahvil sahiplerini sokağa döktü, basında ağır yazılar çıktı ve devletin itibarı düştü.\n\n"
    +"■ DEVİRME NASIL KURULDU\n"
    +"Midhat ve Hüseyin Avni paşalar padişahı hem devlet hem kendileri için zararlı görüyordu. İstanbul medreselerindeki talebeler el altından kışkırtıldı; 10 Mayıs 1876'da Fatih, Bayezid ve Süleymaniye medreseleri talebeleri dersleri boykot edip gösteriye başladı. Harekât planı, o sırada görevinden azledilmiş olan Midhat Paşa'nın konağında yapılmıştı; talebelere verilmek üzere para da gönderilmişti. Nümayişçiler sarayın önüne gelip şeyhülislâm ile sadrazamın azlini istediler. Padişah 12 Mayıs'ta istenen tayinleri yaptı — ve kendi devrilme ekibini iş başına getirmiş oldu.\n\n"
    +"■ FETVA\n"
    +"İşe devrin anlayışına göre şer'î bir şekil vermek gerekiyordu. Fetva Emini Kara Halil Efendi, Midhat Paşa'nın konağına davet edildi. Soru şuydu: \"Padişah mülk ve milleti tahrip ve müslüman beytülmâlini israf etti. Halkın hâlini ıslah için tahttan indirilmesi düşünülüyor. Buna şer'an cevaz var mıdır?\" Cevap, gerekçeden çok kararlılığı gösterir: \"Bu hayırlı işe çarşaf kadar fetva veririm.\" Dolmabahçe Sarayı'nın askerle sarılıp veliahdın Serasker Kapısı'na getirilmesi kararlaştırıldı. Tarih önce 31 Mayıs belirlendi, beklenmedik gelişmeler yüzünden 30 Mayıs'a alındı.\n\n"
    +"■ ÖYLEYSE CEVAP\n"
    +"\"Ne yapmadığı için hal'edildi?\" sorusunun dürüst cevabı: mali çöküşü durduramadığı ve yetkiyi paylaşmayı reddettiği için. Ama hal'i yapan güç, bir halk hareketi ya da kurumsal bir denetim değil, sarayın içindeki bir ekipti — ve o ekip, dört ay sonra ikinci bir padişahı daha tahttan indirecekti.",
  kesinlik:"kesin",
  olay:["1876-05-30"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük) · midhat-pasa (Tufan Buzpınar, Gökhan Çetinsaya) · duyun-i-umumiyye (Cevdet Küçük, Tevfik Ertüzün)" },

{ id:"abdulaziz-nasil-bilirdiniz", tur:"tartisma",
  kisa:"Millî kültürün hâmisi mi, imparatorluğu batıran müsrif mi? İki yargı da aynı sayfadan çıkar — çünkü ikisi de doğrudur, farklı yıllara bakarlar.",
  metin:"■ ÖVGÜ TARAFI\n"
    +"Tahta çıkışı, kardeşinin son yıllardaki sefahat ve israfından memnun olmayan yenilik taraftarlarınca bile memnuniyetle karşılandı. İlk yıllarında tasarruf tedbirleri başlattı. Türk mûsikisini çok iyi bilir, mükemmel ney ve lavta çalardı; Osmanlı padişahları arasında bestekâr olarak da yerini almıştır. Hicazkâr ve şehnaz makamlarını sevdiği için döneminin birçok şarkı ve marşı bu makamlarda bestelendi; kendisinden bir hicaz sirto ile iki şarkı günümüze ulaştı. Saraydaki Batı tarzı orkestra ve bandoları kaldırıp yerine Türk mûsikisi saz takımı koyması, pek çok bestekâr ve hânendeyi koruması, opera ve tiyatro yerine orta oyunu seyretmesi, millî kültürü ihya edeceği ümitlerini kuvvetlendirmişti. Ayrıca celî sülüste iyi bir hattattı ve boş vakitlerinde resim yapardı.\n\n"
    +"■ DİNDARLIK VE VAKAR\n"
    +"Alafrangalığı dinsizlik sayan, iyi niyetli, dindar, her sabah Kur'an okuyan ve son derece vakar sahibi bir kimse olarak anlatılır. Ara sıra devrin âlimlerini huzurunda münakaşa ettirir, tartışmalara kendisi de katılırdı.\n\n"
    +"■ YERGİ TARAFI\n"
    +"Aynı kaynak, karakter itibariyle istibdada ve israfa meyyal olduğunu açıkça yazar. Batılı bir yanı hiç yoktu: Fransızca öğrenmemiş, Avrupa ilim ve kültürüyle temas etmemişti. Avrupa'ya gidip geldikten sonra bu yönü de değişti — gördüğü servet ve refahın nasıl elde edildiğine bakmaksızın yalnız dış görünüşün cazibesine kapıldı ve taklide özendi: Avrupa'daki emsallerini aratmayacak saraylar ve köşkler yaptırdı, sarayda tekrar orkestra ve bando kurdurdu, ordu bandolarını çoğalttı. Yani eleştiri \"Batılılaştı\" değil, \"Batı'nın yalnız görüntüsünü aldı\"dır.\n\n"
    +"■ DONANMA MESELESİ\n"
    +"Döneminin en büyük harcama kalemlerinden biri donanmaydı; saltanatı boyunca kendi tahsisatından ve borçlanmalarla düzenlenen bütçeden milyonlarca lirayı bu uğurda harcadı. Bu, iki yönlü okunur: dünyanın sayılı donanmalarından birini kurmuş bir hükümdar ya da ödeyemeyeceği bir orduyu satın almış bir hükümdar. İki okuma da aynı rakama dayanır.\n\n"
    +"■ NASIL BİLİRDİNİZ\n"
    +"Dengeli hüküm şudur: iyi niyetli, kültürlü, sanatkâr ruhlu; ama devlet işlerinin yükünü taşımak istemeyen, yetkisini paylaşmayan ve maliyeyi hiç anlamamış bir padişah. On beş yıllık saltanatının ilk yarısı ikinci yarısını tutmaz; onu \"nasıl bilirsiniz\" sorusunun tek cevabı olmamasının sebebi budur.\n\n"
    +"■ VE ÖLÜMÜ\n"
    +"Hal'inden beş gün sonraki ölümü, intihar mı cinayet mi sorusuyla bugüne kadar geldi. Bu mesele bu kartın konusu değildir; ayrı bir kartta ele alınmıştır.",
  kesinlik:"tartismali",
  olay:["1876-05-30","1876-06-04","1861-06-25"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0031 · Tersane (İstanbul) Konferansı — dayatma ve dağılmanın sonucu
// ══════════════════════════════════════════════════════════════════════════

{ id:"tersane-konferansi-dayatma", tur:"sebep-sonuc",
  kisa:"Büyük devletler masaya hazır bir program getirdi: Bulgaristan ikiye bölünecek, valileri onlar onaylayacak, reformları denetlemek için 5000 Belçikalı asker gelecekti.",
  metin:"■ KONFERANS NİÇİN TOPLANDI\n"
    +"1875'te Hersek ayaklanmasıyla başlayan, bir yıl sonra Bulgar ayaklanması ve Osmanlı-Sırp, Karadağ savaşlarıyla süren Balkan krizini görüşmek için toplandı. Krizin en önemli safhası Bulgar ayaklanmasıydı ve bu mesele konferanstaki dengeleri belirledi: ayaklanmanın bastırılmasına dair haberler İngiltere'de \"Bulgar vahşeti\" propagandasıyla liberaller tarafından siyasî malzeme yapıldı ve Türk karşıtı kampanyalara dönüştü. Bu, Osmanlı'nın toprak bütünlüğünden yana olan İngiliz hükümetini etkisiz bırakırken Rusya'yı harekete geçirdi.\n\n"
    +"■ MASAYA GELİŞ\n"
    +"Osmanlı kuvvetlerinin 29 Ekim 1876'da Morava'da Sırp kuvvetlerini bozguna uğratması üzerine Rusya, sekiz saat içinde cevap istenen bir ültimatomla altı haftalık ya da iki aylık şartsız ateşkes dayattı. Aynı sırada meselenin Osmanlı'nın gıyabında hıristiyan devletler arasında görüşülmesini önerdi. Doğu'daki çıkarlarının tehdit altında olduğunu gören İngiltere 4 Kasım 1876'da meselenin bir konferansta görüşülmesini önerdi ve böylece çözümde önderliği geri aldı. Konferans Kasımpaşa'daki Bahriye Nezâreti binasının üst katında toplandı; ilk oturum 23 Aralık 1876'da yapıldı.\n\n"
    +"■ TOPLARIN ATILDIĞI AN\n"
    +"Delegeler gündemi tartışırken dışarıda top sesleri duyuldu: anayasa ilân ediliyordu. Osmanlı temsilcisi delegelere, bu topların meşrutiyet idaresini ve bu idarenin bütün Osmanlı ülkesindeki Müslüman ve hıristiyanların özgürlüklerinin güvencesi olduğunu ilân ettiğini söyledikten sonra böyle bir toplantıya artık gerek kalmadığını açıkladı. Delegeler şaşkınlıkla dinledi ama sonuç değişmedi; Rus temsilci İgnatyev böyle gösterişlere önem vermeyip gündeme geçmek gerektiğini söyledi ve konferans devam etti.\n\n"
    +"■ DAYATILAN PROGRAM\n"
    +"Görüşülecek konular ve Türk tarafına sunulacak teklifler, aslında aralık başında büyük devlet temsilcilerinin kendi aralarında yaptıkları hazırlık toplantılarında kararlaştırılmıştı; mutabık kalınan kararlar gerçekte Rus temsilci İgnatyev ile İngiliz temsilci Salisbury'nin eseriydi. Program şunları içeriyordu: Bulgaristan doğu ve batı olmak üzere iki vilâyete bölünecek, her biri garantör devletlerin rızasıyla padişahın tayin edeceği hıristiyan bir vali tarafından beş yıllığına yönetilecek; valiye bir vilâyet meclisi yardım edecek; Türk ordusu sınırda ve belli başlı yerlerde toplanacak, vilâyet için millî milis ve jandarma kurulacak; reformları denetlemek üzere milletlerarası bir komisyon kurulacak ve bu komisyonu korumak için 5000 Belçikalı asker gönderilecekti. Bosna-Hersek tek vilâyet olarak birleştirilecek ama milis gücünden yoksun bırakılacaktı. Sırbistan ve Karadağ ile statüko esas alınacak, ancak Sırbistan Küçük İzvornik'i, Karadağ Hersek'teki bazı yerleri alacaktı.\n\n"
    +"■ BU NİÇİN KABUL EDİLEMEZDİ\n"
    +"Osmanlı temsilcileri programı bağımsız bir devlet için kabul edilemez buldular; hatta bazı maddeleri görüşmeye bile yetkili olmadıklarını belirttiler. İtirazın teknik dayanağı anayasaydı: sunulan maddelerin pek çoğu yeni ilân edilen Kānûn-ı Esâsî'ye aykırıydı.",
  kesinlik:"kesin",
  olay:["1876-12-23"],
  kaynak:"TDV: istanbul-konferansi (Mithat Aydın; madde \"Tersane Konferansı\" adıyla da aranır) · kanun-i-esasi (Mehmet Âkif Aydın) · doksanuc-harbi (Mahir Aydın)" },

{ id:"tersane-konferansi-sonuc", tur:"sebep-sonuc",
  kisa:"180 kişilik bir meclis, teklifleri kabul edip onursuz kalmaktansa savaşı seçti — ve daha ağır şartlarla karşılaşma ihtimalini bile bile seçti.",
  metin:"■ SON TEKLİF\n"
    +"Bâbıâli'nin direnmesi ve konferansın çıkmaza girmesi üzerine yabancı temsilciler tekliflerini hafifletmeyi tartışmaya başladı. Özellikle Midhat Paşa'nın gayriresmî temasları ve iki İngiliz devlet adamının etkisiyle, asgari düzeyde tutulan reformlar daha da hafifletilip 15 Ocak'ta sunuldu: Avrupa jandarması teklifi kaldırılıyor, valilerin tayininde devletlerin onayı yalnız ilk beş yıl için geçerli oluyordu. Ama milletlerarası komisyon duruyordu. Teklife ültimatom gibi bir şart bağlandı: reddedilirse 18 Ocak oturumunda konferans bitecek ve temsilciler ülkelerine dönecekti.\n\n"
    +"■ 18 OCAK — MECLİS-İ UMÛMÎ\n"
    +"Osmanlı tarafı cevabın bütün saltanat erkânının oyu alınarak verilmesi gerektiğini bildirdi. 18 Ocak'ta Midhat Paşa'nın başkanlığında Şûrâ-yı Devlet üyeleri, vükelâ, sivil ve askerî erkân ve gayrimüslim ruhanî reislerden oluşan 180 kişilik bir meclis toplandı. Karar şuydu: haksız ve devlete zarar verecek teklifleri kabul edip haysiyeti zedelenen bir duruma katlanmaktansa savaşı kabul etmek devlet ve milletin şanına daha çok yakışırdı. Meclis bunu yaparken savaşın bir fayda sağlamaması hâlinde daha ağır tekliflerle karşılaşma ve daha çok toprak kaybetme tehlikesini AÇIKÇA göze alarak karar verdi. Yani sonuç bilinmiyor değildi; göze alınıyordu.\n\n"
    +"■ KARŞI TEKLİF VE SON OTURUM\n"
    +"Osmanlı tarafı kabul edebileceği esasları da belirledi: eşit sayıda Müslüman ve hıristiyan üyeden oluşan iki komisyon kurulacak, biri Bosna-Hersek, öteki Tuna ve Edirne vilâyetleri için bir yıl görev yapacak; anayasa reformlarının ve alınacak tedbirlerin uygulanmasına nezaret edecek, zarar görmüş ahaliye yardım tedbirleri alacak ve kurulacak jandarma teşkilâtının yardımıyla halkın güvenliğini sağlayacaktı. Bu teklifler 20 Ocak'taki son oturumda ciddi bir müzakere konusu bile edilmedi; büyük devlet temsilcileri reddedip konferansın bittiğini ilân etti ve yerlerine birer maslahatgüzar bırakarak şehri terketti.\n\n"
    +"■ SONUÇ: ÜÇ AY SONRA SAVAŞ\n"
    +"Konferansın dağılmasıyla Osmanlı-Rus savaşının kapısı aralanmış oldu. Rusya 24 Nisan 1877'de savaş ilân etti. Bir yıl sonra imzalanacak antlaşmalar, konferansta reddedilen tekliflerden çok daha ağırdı: Sırbistan, Karadağ ve Romanya bağımsız oldu, Bulgaristan kuruldu, Kars-Ardahan-Batum Rusya'ya, Kıbrıs'ın idaresi İngiltere'ye geçti, Bosna-Hersek Avusturya'nın işgaline bırakıldı. Meclisin göze aldığı ihtimal aynen gerçekleşti.\n\n"
    +"■ BİR YAN SONUÇ\n"
    +"Konferans aynı zamanda İngiltere'nin Doğu politikasında derin bir çatlağı gösterdi: İngiliz baş temsilci Salisbury Rus temsilciyle uyum içinde çalışıyordu ve öteki İngiliz temsilci onu, İngiliz çıkarları için en büyük tehdit olan Rus emellerine hizmet etmekle suçladı. Osmanlı'nın 1878'de İngiltere'ye yaslanma hesabının ne kadar kırılgan olduğu, daha savaş başlamadan bu masada görünmüştü.",
  kesinlik:"kesin",
  olay:["1876-12-23","1877-04-24"],
  kaynak:"TDV: istanbul-konferansi (Mithat Aydın) · doksanuc-harbi (Mahir Aydın) · berlin-antlasmasi (Ali İhsan Gencer) · ayastefanos-antlasmasi (Ali İhsan Gencer)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0032 · II. Abdülhamid — şahsiyet · istibdat tartışması · toprak kaybı ·
//          dönemin yenilikleri (dört kart)
// ══════════════════════════════════════════════════════════════════════════

{ id:"kimdir-abdulhamid-ii-sahsiyet", tur:"kimdir",
  kisa:"Çok dinleyen, az konuşan, bir kere gördüğü yüzü unutmayan bir adam — ve aynı adam, tahttan indirilme korkusunu sabit fikir hâline getirmiş bir vehim sahibi.",
  metin:"■ DIŞ GÖRÜNÜŞ VE TAVIR\n"
    +"İri burunlu, parlak ve iri gözlüydü; yürürken ve otururken biraz öne meylederdi. Titrek fakat kalın bir sesi vardı; çok dinler, az konuşurdu. Kendisiyle konuşanlara saygı telkin eder, herkese nazik davranır, hoşlanmadığı kimselere bile güler yüz gösterip sevmediğini belli etmezdi. Karşısındakinin duygu ve düşüncelerini sezmekte mahirdi.\n\n"
    +"■ ZİHİN\n"
    +"Fevkalâde bir zekâya ve hâfızaya sahipti; bir kere gördüğü veya sesini işittiği kimseyi asla unutmazdı. İradesi kuvvetli, fikir ve kararlarında bağımsız, tehlike karşısında metanetliydi.\n\n"
    +"■ YAŞAYIŞ\n"
    +"Anne ve babasının veremden ölmüş olması onu genç yaşından itibaren temkinli yaşamaya sevketmişti. İçki içmez, her türlü sefahatten uzak durur, sade bir hayat yaşardı; ölünceye kadar her sabah ılık suyla duş yapmayı alışkanlık hâline getirmişti. Jimnastiğe meraklıydı, kılıç ve tabanca kullanmakta mahirdi. Batı müziğinden, opera ve tiyatrodan hoşlanırdı. Çalışmayı sever, düzenli bir program uygulardı; devlet işlerini her şeyin üstünde tutar, önemli haber geldiğinde uykusundan uyandırılmasını isterdi.\n\n"
    +"■ YÖNETİM ÜSLÛBU\n"
    +"Devlet işlerinde değişik karakterdeki kimselerden faydalanmayı bilir, onlara mizaçlarına uygun hizmetler verirdi. Önemli meselelerde karar vermeden önce farklı fikirdeki devlet adamlarının görüşlerini alır, hatta bazen zıt görüşlüleri huzurunda münakaşa ettirir, sonra kesin kararını verirdi. Sorumluluk taşıyan kararlarda konuyu meclise havale eder ve kararın oradan çıkmasını sağlardı — yani sorumluluğu tek başına üstlenmemeye özen gösterirdi.\n\n"
    +"■ VEHİM\n"
    +"Soğukkanlı fakat vehimli bir mizacı vardı ve bu, portrenin merkezidir. Kendisinden önceki iki padişahın tahttan indirilmiş olması, onda kendisinin de indirileceği şüphesini SABİT BİR FİKİR hâline getirmişti. 1878'deki iki ayrı saray baskını girişimi bu şüpheyi büsbütün artırdı. Devlette olup biten her şeyden haberdar olmak için kuvvetli bir hafiye teşkilâtı kurmasının sebebi budur. Kendi ifadesine göre jurnalcilik ayıp ve kötü bir şeydi, ama vazgeçmek de mümkün değildi.\n\n"
    +"■ MALÎ TUTUM\n"
    +"Saltanatı boyunca daima idareli davrandı. Selefi gibi devlet hazinesine el atmadı; aksine kendi kesesinden fedakârlıklarda bulundu ve sarayın masraflarını âzami derecede kıstı. Câriyelerle dolu saray hayatından uzak, sade bir hayat sürdü.\n\n"
    +"■ OKURA NOT\n"
    +"Bu portre, hakkında en çok tartışılan Osmanlı padişahının BİR kaynaktan çıkan görüntüsüdür ve olumlu tarafı ağır basar. Karşı okuma ayrı bir kartta verilmiştir; ikisi birlikte okunmadan hüküm kurulmamalıdır.",
  kesinlik:"kesin",
  olay:["1876-08-31"],
  kaynak:"TDV: abdulhamid-ii (Cevdet Küçük)" },

{ id:"abdulhamid-istibdat-tartismasi", tur:"tartisma",
  kisa:"\"Müstebit miydi?\" sorusunun cevabı kaynağa göre değişmez — hafiye, sansür ve kapatılan meclis herkesin kabul ettiği olgudur; tartışma sebebi ve karşılığı üzerinedir.",
  metin:"■ TARTIŞILMAYAN OLGULAR\n"
    +"Üç şey üzerinde kaynaklar birleşir. ① 23 Aralık 1876'da ilân edilen anayasa yürürlükteyken, padişah 13 Şubat 1878'de Meclis-i Meb'ûsan'ı süresiz olarak tatil etti; meclis otuz yıl toplanmadı. ② Devlette olup biteni öğrenmek için kuvvetli bir hafiye (jurnal) teşkilâtı kuruldu. ③ Avrupa'da yapılan bölücü yayın faaliyetlerine karşı sıkı bir sansür uygulandı. Bunlar taraf tutmadan kaydedilen olgulardır.\n\n"
    +"■ SAVUNMA TARAFININ GEREKÇESİ\n"
    +"Savunma, bu tedbirleri sebebe bağlar. Padişahın yaşadığı olaylar zaten karakterinde var olan şüpheciliği artırmıştı; büyük devletlerin Osmanlı devlet adamlarını çeşitli yollarla elde ederek politikalarını yürütmeleri onu tedbirli olmaya sevketti. Bâbıâli'ye güvenmediği için devlet idaresini yavaş yavaş kendi sarayında topladı. Kendi değerlendirmesine göre pek çok âvâre memur ve subay kimseyi beğenmiyor, devleti yalnız kendilerinin kurtaracağına inanıyor, bunu ispat için ajanlık ve entrikadan, olmazsa padişaha hakaret ve iftiradan çekinmiyordu. İç politikadaki sertliği dış olayların seyrine göre azalıp çoğaldı: yabancı devletlerin içeride olay çıkarmaları padişahı sıkı bir rejime sevketti, çünkü iç çalkantıları kontrol etmeden dağılmakta olan bir imparatorluğu yönetmek mümkün görünmüyordu.\n\n"
    +"■ ELEŞTİRİ TARAFININ GEREKÇESİ\n"
    +"Eleştiri de aynı olgulardan yola çıkar ve sonucu gösterir: anayasa askıya alındıktan sonra otuz yıl boyunca hiçbir seçilmiş kurum hükümeti denetlemedi; jurnal sistemi devlet kadrolarını birbirine karşı silaha dönüştürdü; sansür fikir hayatını daralttı. Nitekim padişahın kendi döneminde bile hafiyelik ve basın üzerindeki baskı, sonraki yönetimlerce devralındı: anayasa yeniden yürürlüğe girdikten sonra da hafiyelik yeni bir şekle büründü ve basının ağzına yine kilit vuruldu. Bu, tek bir kişinin mizacıyla açıklanamayacak yapısal bir sorun olduğunu gösterir.\n\n"
    +"■ SANSÜRÜN İÇİNDEKİ ÇELİŞKİ\n"
    +"Dikkat çeken bir ayrıntı var: koyu bir sansür uygulandığı hâlde, yayın çalışmaları bizzat desteklendiği için kitap, dergi ve gazete sayısında büyük artışlar oldu. Yani rejim yayını bastırmadı, yönlendirdi. Bu ikisini aynı anda görmeden dönem anlaşılmaz.\n\n"
    +"■ SERTLİĞİN SINIRI\n"
    +"Önceki padişahın ölümünden sorumlu tuttuğu devlet adamları sarayda kurulan özel bir mahkemede yargılanıp ölüm cezasına çarptırıldı; padişah bu cezaları müebbet hapse çevirdi. Hüküm veren de, cezayı hafifleten de aynı iradeydi — bu, rejimin niteliğini anlatır: keyfîlik hem sertlik hem merhamet yönünde işler.\n\n"
    +"■ DONANMANIN HALİÇ'TE ÇÜRÜTÜLDÜĞÜ İDDİASI\n"
    +"Döneme yöneltilen en yaygın eleştirilerden biri, selefinin kurduğu donanmanın Haliç'te bağlı tutularak çürümeye terkedildiğidir. Başvurulan ansiklopedi maddesi bu konuda bir şey söylememektedir; iddia burada NE DOĞRULANMIŞ NE ÇÜRÜTÜLMÜŞTÜR — `bulunamadı` olarak kaydedilmiştir. Yalnız şu bağlam verilebilir: 1877-1878 savaşında Karadeniz'deki donanmanın hiçbir varlık gösterememesi, savaşın kaybedilme sebepleri arasında sayılır ve bu, padişahın tahta çıkışından yalnız bir yıl sonrasıdır.",
  kesinlik:"tartismali",
  olay:["1876-08-31","1878-02-13"],
  kaynak:"TDV: abdulhamid-ii (Cevdet Küçük) · meclis-i-mebusan (Ali Akyıldız) · mesrutiyet (Şükrü Hanioğlu) · doksanuc-harbi (Mahir Aydın). ⚠️ \"Donanmanın Haliç'te çürütülmesi\" iddiası okunan maddelerde `bulunamadı`" },

{ id:"abdulhamid-donemi-toprak-kayiplari", tur:"tartisma",
  kisa:"Otuz üç yılda kaybedilen toprağın tek bir km² rakamı yok — ama kaybın nasıl olduğu bellidir: dördü savaşla değil, oldubittiyle gitti.",
  metin:"■ ÖNCE DÜRÜST BİR UYARI\n"
    +"Bu dönemde kaybedilen toprağın TOPLAM yüzölçümü için güvenilir bir rakam bulunamadı: başvurulan ansiklopedi maddeleri böyle bir toplam vermiyor, tarandığı kadarıyla akademik kaynaklarda da tek bir kabul görmüş sayı yok. Bu kart o yüzden bir rakam UYDURMAZ; kaybı kalem kalem sayar ve toplamı `bulunamadı` olarak bırakır.\n\n"
    +"■ ① SAVAŞ KAYBI (1878)\n"
    +"Otuz üç yılın en büyük kaybı, tahta çıkışından iki yıl sonra biten savaşla geldi. Berlin Antlaşması'yla Sırbistan ve Karadağ'ın bağımsızlığı kesinleşti (Sırbistan'a Niş ve Pirot verildi), Romanya bağımsız oldu (Besarabya'yı Rusya'ya verip Tulça ve Dobruca'yı aldı), özerk Bulgaristan Prensliği kuruldu, Yunanistan'a toprak verilmesi kararlaştırıldı. Doğu'da Kars, Ardahan ve Batum harp tazminatının bir kısmına karşılık Rusya'ya bırakıldı; Doğubayazıt ve Eleşkirt vadisi Osmanlı'da kaldı. Savaş ayrıca 802.500.000 franklık bir harp tazminatı bıraktı.\n\n"
    +"■ ② DİPLOMATİK KAYIP (1878)\n"
    +"İki kayıp savaş alanında değil masada oldu. Berlin Kongresi'nde İngiltere'nin desteğini almak için, 4 Haziran 1878'de imzalanan gizli antlaşmayla Kıbrıs'ın yönetimi geçici olarak İngiltere'ye bırakıldı; padişah antlaşmayı ancak hükümranlık haklarına zarar verilmeyeceğine dair belge alarak onayladı. Adanın toprak mülkiyetinin Osmanlı'ya ait olduğu 1 Temmuz 1878 tarihli ek antlaşmayla da tesbit edildi. Yine İngiltere'nin teşvikiyle Bosna-Hersek'in yönetimi Avusturya'ya bırakıldı.\n\n"
    +"■ ③ OLDUBİTTİLER (1881-1885)\n"
    +"Kıbrıs'ın verilmesi öteki devletlerin iştahını artırdı. 1881'de Fransa Tunus'a, ertesi yıl İngiltere Mısır'a bir oldubitti ile el koydu; 1885'te Bulgarlar Doğu Rumeli eyaletini kendilerine kattı. Bu üç kayıpta Osmanlı ordusu savaşmadı — çünkü savaşacak durumda değildi.\n\n"
    +"■ PADİŞAHIN TASARRUFU TARTIŞMASI\n"
    +"\"Bu kayıplarda padişahın yanlış tasarrufu var mıydı?\" sorusunun iki cevabı vardır ve ikisi de aynı olgulara dayanır. Eleştiri: Kıbrıs'ı vermek, karşılığında alınan desteğin gerçek olmadığı ortaya çıkınca bedava bir taviz hâline geldi ve öteki devletlere örnek oldu — bu, doğrudan bir diplomatik tercihti. Savunma: 1878'de devletin savaşacak ordusu, ödeyecek parası ve destekleyecek müttefiki yoktu; padişah devletin toparlanması için zamana ihtiyaç olduğuna inanıyor ve bazı tâvizler pahasına da olsa ağır yük oluşturan savaşlardan kaçınıyordu. Bu bilinçli bir stratejidir, ihmal değil.\n\n"
    +"■ ÖLÇÜLEBİLEN TEK ŞEY\n"
    +"Toprak yüzölçümü ölçülemedi; ama kaybın BİÇİMİ ölçülebilir. Yukarıda sayılan altı büyük kalemden (Berlin düzenlemesi · Kıbrıs · Bosna-Hersek · Tunus · Mısır · Doğu Rumeli) yalnız BİRİ, yani Berlin'e götüren 1877-1878 savaşı, muharebe sonucudur. Kalan beşi antlaşma, işgal ve oldubittiyle gitti ve hiçbirinde Osmanlı ordusu çarpışmadı. Bu, imparatorluğun artık askerî değil diplomatik bir zeminde eridiğini gösterir.",
  kesinlik:"tartismali",
  olay:["1878-07-13","1878-06-04","1885-09-18","1882-09-13","1881-05-12"],
  kaynak:"TDV: abdulhamid-ii (Cevdet Küçük) · berlin-antlasmasi (Ali İhsan Gencer) · doksanuc-harbi (Mahir Aydın) · kibris (Kemal Çiçek vd.). ⚠️ Toplam km² kaybı hiçbir kaynakta `bulunamadı`; atlasın kendi yüzölçümü dayanak yapılmadı" },

{ id:"abdulhamid-donemi-yenilikler", tur:"teknik-bilimsel",
  kisa:"Aynı otuz üç yıl, Osmanlı'nın en yoğun okul, demiryolu ve telgraf yapımı dönemidir — bugün adı bilinen yüksek okulların çoğu bu dönemde açıldı.",
  metin:"■ MALİYEYİ TOPARLAMA\n"
    +"Tahta çıktığında 1854-1874 arasında alınmış dış borçların vadesi dolan yıllık anapara ve faiz ödemeleri devletin normal gelirlerinin yarısını geçiyordu. Dış baskı aracı olan bu yükten kurtulmak öncelikti. 1881 tarihli Muharrem Kararnâmesi ile alacaklı ülkelere belli devlet gelirlerini toplamak üzere Düyûn-ı Umûmiyye'yi kurma imtiyazı tanındı. Sonuç ikili oldu: devlet gelirlerinin yüzde otuzu borç ve faize ayrıldığı hâlde eski borçlar temizlenemedi, ama alınan borçlardan çok daha fazlası ödendi ve borç yükü büyük ölçüde hafifledi. Bedeli ağırdı: yeraltı ve yerüstü kaynaklarının işletme hakları İngiliz, Fransız ve Alman şirket ve bankalarına bırakıldı.\n\n"
    +"■ OKULLAR — DÖNEMİN EN KALICI ESERİ\n"
    +"Kendi gelirleriyle ayakta duramayan medreselerin yeni usullerle eğitim veren okullara dönüştürülmesine hız verildi ve kaliteli uzman-memur yetiştirmek üzere yüksek okullar açıldı. Mekteb-i Mülkiyye, Mekteb-i Hukuk, Sanâyi-i Nefîse Mektebi, Hendese-i Mülkiyye, Dârülmuallimîn-i Âliye, Maliye Mektebi, Ticaret Mektebi, Halkalı Ziraat Mekteb-i Âlîsi, deniz ticareti, orman ve maâdin, lisan, dilsiz ve âmâ mektepleri, Dârülmuallimât ve kız sanayi mektepleri ile fen ve edebiyat fakültelerinden oluşan Dârülfünun bu dönemde açıldı. Bu yüksek okullara öğrenci yetiştirmek için ilk ve orta öğretime de önem verildi: ibtidâî denilen ilk mektepler köylere kadar götürüldü, birçok vilâyette dârülmuallimîn ve hukuk mektebi açıldı.\n\n"
    +"■ DEMİRYOLU VE TELGRAF\n"
    +"Anadolu ve Rumeli demiryollarının büyük bir kısmı tamamlandı; yol bulunmayan Anadolu'da bir şose şebekesi kuruldu. Telgraf hatları Hicaz ve Basra'ya kadar çekildi. Demiryolu imtiyazı mücadelesi Almanya'nın zaferiyle sonuçlandı: Almanya'dan alınan malî destekle 1888'de Haydarpaşa-İzmit hattını Ankara'ya kadar uzatma teşebbüsüne girişildi. Şam'dan Medine'ye uzanan Hicaz demiryolu da bu dönemde inşa edildi.\n\n"
    +"■ FABRİKALAR\n"
    +"Feshâne ve Hereke fabrikaları genişletildi, Yıldız Çini Fabrikası açıldı.\n\n"
    +"■ ÇELİŞKİYİ GÖRMEK\n"
    +"Bu liste, aynı dönemin sansür ve hafiye listesiyle yan yana durur. İkisi birbirini çürütmez: rejim, yetişmiş kadro üreten okulları bizzat açtı ve o okullardan yetişen kadro, otuz yıl sonra rejimi sona erdiren hareketin omurgasını oluşturdu. Dönemin en tutarlı özeti budur — kendi muhalefetini kendi kurduğu kurumlarda yetiştirdi.",
  kesinlik:"kesin",
  olay:["1876-08-31","1888-10-04"],
  kaynak:"TDV: abdulhamid-ii (Cevdet Küçük) · duyun-i-umumiyye (Cevdet Küçük, Tevfik Ertüzün)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0033 · İlk Meclis-i Meb'ûsan — seçim, yapı, yetki, âkıbet
// ══════════════════════════════════════════════════════════════════════════

{ id:"ilk-meclis-mebusan-secim-ve-yapi", tur:"teknik-bilimsel",
  kisa:"İlk Osmanlı meclisinde mebusları halk seçmedi: daha önce halkın seçtiği il ve ilçe meclislerinin üyeleri seçti — ve kontenjan baştan belirlenmişti.",
  metin:"■ İKİ KANATLI PARLAMENTO\n"
    +"23 Aralık 1876'da yürürlüğe giren anayasa, Meclis-i Umûmî adlı bir parlamento öngörüyordu ve bu parlamento iki meclisten oluşuyordu: halkın seçtiği mebuslardan kurulu Meclis-i Meb'ûsan ve padişahın tayin ettiği üyelerden kurulu Meclis-i A'yân. Anayasaya göre meclislerden biri kapalıyken öteki toplanamazdı — yani iki kanat birbirine bağlıydı.\n\n"
    +"■ ANAYASANIN ÖNGÖRDÜĞÜ SEÇİM\n"
    +"Anayasa her 50.000 erkek nüfus için bir mebus seçilmesini; mebusların otuz yaşını doldurmuş, medenî haklarını ve itibarını kaybetmemiş, yabancı devlet imtiyazına sahip olmayan, TÜRKÇE BİLEN Osmanlı uyruklular arasından GİZLİ OYLA belirlenmesini; seçimlerin dört yılda bir yapılmasını ve mebusun seçim bölgesini değil BÜTÜN OSMANLILARI temsil etmesini öngörüyordu.\n\n"
    +"■ UYGULAMADA NE OLDU\n"
    +"Seçim kanunu yetişmediği için taşrada 29 Ekim 1876 tarihli geçici bir tâlimatla seçim yapıldı ve şartlar anayasadan farklılaştı: 50.000 kişiye bir mebus oranı uygulanamadı, otuz yaş şartı yirmi beşe indirildi, cinayetten veya siyasî suçtan mahkûmiyet seçilmeye engel sayıldı ve mebusların memleketlerinde emlâk sahibi olması şartı getirildi. Mebus sayısı sekseni Müslüman, ellisi gayrimüslim olmak üzere toplam 130 olarak belirlenip kontenjanlar vilâyetlere bildirildi.\n\n"
    +"■ KİM SEÇTİ\n"
    +"Mebusları halk DEĞİL, daha önce halkın seçmiş olduğu vilâyet, sancak ve kaza idare meclislerinin üyeleri seçti. Üyeler adayın adını yazdıkları pusulayı kapalı ve mühürlü zarfa koyup kazada kaymakama, sancakta mutasarrıfa, vilâyette valiye teslim ediyor; vali sonra vilâyet ileri gelenlerinden bir meclis kurup seçilenleri belirliyordu. En çok oy alan seçiliyor, eşitlik hâlinde kazanan KURA ile tesbit ediliyordu. İstanbul için ayrı bir beyannâme çıkarıldı ve seçim iki dereceli yapıldı: şehir yirmi seçim bölgesine ayrılıp her daire biri Müslüman biri gayrimüslim iki vekil seçti; vekiller şehremanetinde toplanıp beşi Müslüman beşi gayrimüslim on mebusu belirledi.\n\n"
    +"■ MECLİS NEREDE ÇALIŞTI\n"
    +"Uygun bir çalışma yeri için görevlendirilen komisyon Ayasofya civarındaki eski dârülfünun binasında karar kıldı. Binada padişahın, hükümet üyelerinin ve ziyaretçilerin çalışmaları izleyebilmesi için yerler yapıldı; konuşmaları zaptetmek üzere bir yazı heyeti kuruldu ve stenograflar istihdam edildi.\n\n"
    +"■ AÇILIŞ\n"
    +"Meclis-i Umûmî 19 Mart 1877'de Dolmabahçe Sarayı'nın Muayede Salonu'nda, padişahın, devlet erkânının, ulemânın, ruhanî liderlerin ve yabancı misyon şeflerinin katıldığı bir merasimle açıldı; açılış nutkunu padişah adına Mâbeyn başkâtibi okudu. Ülkenin uzak yörelerinden gelen bazı mebuslar törene yetişemedi. Mebuslar ertesi gün yemin ederek göreve başladı.",
  kesinlik:"kesin",
  olay:["1877-03-19","1876-12-23"],
  kaynak:"TDV: meclis-i-mebusan (Ali Akyıldız) · kanun-i-esasi (Mehmet Âkif Aydın) · mesrutiyet (Şükrü Hanioğlu)" },

{ id:"ilk-meclis-mebusan-yetki-ve-akibet", tur:"sebep-sonuc",
  kisa:"Meclis kanun yapardı ama kanun TEKLİF edemezdi; hükümet ona değil padişaha karşı sorumluydu — ve bir yıl sonra süresiz tatile gönderildi.",
  metin:"■ MECLİSİN ASIL İŞİ\n"
    +"Meclisin esas görevi kanun yapmak ve yıllık bütçe kanununu inceleyip kabul etmekti. Ama kritik bir sınır vardı: yeni kanun teklif etme veya eskilerini değiştirme hakkı HÜKÜMETE aitti; mebusların bu hakkı kullanabilmesi PADİŞAHIN İZNİNE bağlıydı. Yani meclis yasa yapıcı değil, yasa onaylayıcıydı.\n\n"
    +"■ BİR KANUN NASIL ÇIKARDI\n"
    +"Teklif önce Şûrâ-yı Devlet'e havale edilir, işlemler tamamlanınca hükümete ya da mebuslara gönderilirdi. Meclis başkanı ilgili komisyona havale eder, komisyon mazbatasını hazırlar, genel kurulda tasarı iki defa görüşülürdü: birinci görüşmede genel hatlarıyla incelenip maddeleri okunur ve söz almak isteyenler belirlenir, beş gün sonraki ikinci görüşmede maddeler tek tek müzakere edilirdi. Bütçe tasarıları fasıl fasıl tartışılırdı. Kabul edilen tasarı Hey'et-i A'yân'a gider, orada da onaylanınca padişahın tasdikiyle kanunlaşırdı. Reddedilen tasarılar o yıl içinde tekrar gündeme getirilemezdi.\n\n"
    +"■ DENETİM YETKİSİNİN SINIRI\n"
    +"Anayasaya göre hükümet meclise değil PADİŞAHA karşı sorumluydu. Bir mebus bir hükümet üyesinden şikâyetçi olur ve meclisin üçte iki çoğunluğu şikâyeti haklı bulursa o vekil Dîvân-ı Âlî'ye gönderilebilirdi — yani denetim vardı ama eşiği çok yüksekti. Hükümetle meclis arasında anlaşmazlık çıkar ve iki taraf da ısrar ederse padişah yeniden seçim için meclisi feshedebilir veya hükümeti değiştirebilirdi. Meclis kapalıyken hükümet geçici kanun çıkarabilirdi.\n\n"
    +"■ MECLİSİN KENDİ ÇALIŞMA DÜZENİ\n"
    +"Meclis 13 Mayıs 1877'de ayrıntılı bir iç tüzük hazırladı; beş şubeye ve çeşitli encümenlere ayrıldı. Oylama ayağa kalkarak, el kaldırarak, sandıkla pusula toplayarak veya gizli oyla yapılabilirdi. Anayasa değişikliği ya da bir hükümet üyesi hakkındaki soru önergesinin kabulü için üçte iki oy gerekiyordu. Vatandaşlar kimlik ve adres belirtmek şartıyla meclise dilekçe verebilirdi. Oturumlar üç tarzda yapılabilirdi: dinleyiciye açık, dinleyicisiz özel ve yalnız mebuslarla kâtiplerin bulunduğu gizli. Üyeler ileri sürdükleri fikirlerden veya kullandıkları oylardan dolayı suçlanamaz, meclis kararı olmadıkça tutuklanamazdı. Zabıtlar redakte edilip resmî gazeteyle kamuoyuna duyuruluyordu. Farklı dinî grupların temsilcileri bulunduğu için hem cuma hem pazar tatil ilân edilmişti.\n\n"
    +"■ İKİ DEVRE VE SON\n"
    +"Birinci faaliyet devresi 28 Haziran 1877'de sona erdi; bu sürede iç tüzüğünden savaşa ve matbuat nizamnâmesine kadar pek çok konu görüşüldü. Seçim kanunu hâlâ hazır olmadığı için ikinci dönem mebusları da geçici tâlimata göre seçildi ve meclis 13 Aralık 1877'de sade bir törenle açıldı; elli altısı Müslüman, kırkı gayrimüslim, toplam doksan altı üyesi vardı. Savaşın ve iç-dış sorunların gölgesinde çalışan bu meclis birinciye göre hükümete karşı DAHA SERT bir üslûp kullandı. Meclisle hükümet ve saray arasında biriken gerilim, padişahın anayasanın verdiği yetkiye dayanarak 13 Şubat 1878'de meclisi süresiz tatil etmesiyle bitti. Kararı ertesi günkü toplantıda öğrenen mebuslar memleketlerine döndü.\n\n"
    +"■ ÖNEMİ\n"
    +"On bir ay çalışmış, iki devre görmüş ve otuz yıl kapalı kalmış bu meclis, kısa ömrüne rağmen bir şeyi kanıtladı: Osmanlı toplumu seçim yapabiliyor, farklı din ve dilden mebuslar aynı salonda bütçe tartışabiliyordu. 1908'de meclis yeniden açıldığında kullanılan seçim esasları da bu dönemden devralınan iki metne dayandı.",
  kesinlik:"kesin",
  olay:["1877-03-19","1878-02-13"],
  kaynak:"TDV: meclis-i-mebusan (Ali Akyıldız) · kanun-i-esasi (Mehmet Âkif Aydın) · mesrutiyet (Şükrü Hanioğlu) · abdulhamid-ii (Cevdet Küçük)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0034 · 93 Harbi kümesi — Plevne · Gazi Osman Paşa · Gazi Ahmed Muhtar
//          Paşa ve doğu cephesi · Ayastefanos · göç dalgası · Kıbrıs
// ══════════════════════════════════════════════════════════════════════════

{ id:"harp93-plevne-savunmasi", tur:"savas-hikayesi",
  kisa:"Plevne'de bir kolordu, beş ay boyunca bir imparatorluk ordusunu durdurdu — ve kuşatma kırılınca savaşın tamamı beş haftada çöktü.",
  metin:"■ ÖNCESİ — ŞEHİR NİÇİN ÖNEMLİYDİ\n"
    +"Plevne, Sofya'dan Rusçuk üzerinden Bükreş'e ve Karadeniz limanı Varna'ya giden büyük kara ve demiryolunun üstündedir. Tuna'yı geçen bir ordunun Balkan geçitlerine yönelmesi için bu kavşağı kontrol etmesi gerekir. 1877'de burası boş kalırsa Rus ordusunun yan ve gerisi güvende olacaktı.\n\n"
    +"■ AKIŞ — DÖRT MUHAREBE\n"
    +"24 Nisan 1877'de Rusya savaş ilân ettiğinde Osman Paşa, Vidin'deki Garp Ordusu kuvvetleri kumandanıydı. Aldığı emirle 25.000 kişilik kolordusuyla 7 Temmuz 1877'de Plevne'ye ulaştı. Rusların 8 Temmuz'da başlattığı saldırıya karşı koydu; bu kanlı çatışma, savaşın Rumeli cephesinde Rusların yediği ilk darbe oldu. Takviye alan Rus kuvvetleri 18 Temmuz'da ikinci defa taarruz etti; yirmi altı saat süren savaşta gösterilen direniş ve karşı saldırı sonucu bir defa daha yenildiler. Rumenleri de savaşa katan Ruslar 7-11 Eylül'deki üçüncü Plevne muharebesinde de başarı kazanamadı. Birbiri ardınca başarısız olunca 13 Eylül'de şehri KUŞATMA altına aldılar — yani artık zaptetmeyi değil açlıkla teslim almayı seçtiler.\n\n"
    +"■ SON ÇIKIŞ\n"
    +"10 Aralık sabahı Osman Paşa 40.000 neferlik ordusunu ikiye ayırıp kuşatmayı yarmaya girişti. Vid suyunu geçmeye çalışırken Rus-Rumen topçu ateşinden bir şarapnel parçasıyla yaralandı. Erkânıharp zâbitlerinin yapılabilecek başka bir şey kalmadığını belirtmesi üzerine teslim oldu.\n\n"
    +"■ SONUÇ\n"
    +"Plevne düştükten sonra Tuna cephesi çöktü. 31 Ocak 1878'de Edirne Mütarekesi imzalandı, 3 Mart'ta Ayastefanos Antlaşması geldi. Yani beş ay dayanan savunmanın ardından savaşın geri kalanı yedi haftada bitti. Bu, savunmanın ne kadar kritik olduğunu da, tek bir noktada kazanılan zamanın strateji yerine geçemeyeceğini de gösterir.\n\n"
    +"■ TARTIŞMA\n"
    +"Plevne Türk hâfızasında bir kahramanlık destanıdır ve haklı olarak öyledir; ama savaşın kaybedilme sebepleri arasında kuvvetlerin geniş bir alana yayılması, kumandanlar arasındaki irtibatsızlık, harekâtın İstanbul'dan idare edilmesi, malzeme ve mühimmat noksanlığı ve Karadeniz'deki donanmanın hiçbir varlık gösterememesi sayılır. Plevne bu sorunları örtmez, tersine gösterir: bir kolordu beş ay dayanabiliyorsa mesele askerde değil sevk ve idarededir.",
  kesinlik:"kesin",
  olay:["1877-07-19","1877-12-10"],
  kaynak:"TDV: gazi-osman-pasa (Metin Hülagü) · plevne (Machiel Kiel) · doksanuc-harbi (Mahir Aydın)" },

{ id:"kimdir-gazi-osman-pasa", tur:"kimdir",
  kisa:"Teslim olan bir kumandana düşman çarı nişan verdi — ve kendi devleti ona, o güne kadar yalnız üç kişiye verilen unvanı verdi.",
  metin:"■ SAVAŞTAN ÖNCE\n"
    +"Osman Paşa'nın adı 1877'den önce de biliniyordu: Sırp Prensi Milan'ın 2 Temmuz 1876'da savaş ilân etmesi üzerine, Rus generallerinin kumanda ettiği Sırp ordusunu bozguna uğratan kumandan oydu. 1877 Nisanında Rusya savaş ilân ettiğinde Vidin'de Garp Ordusu kuvvetleri kumandanlığında bulunuyordu.\n\n"
    +"■ UNVAN\n"
    +"Plevne'deki direnişi üzerine kendisine GAZİLİK unvanı verildi. Bu unvan o dönemde yalnız üç kişiye lâyık görülmüştür; yani nadir bir payedir ve savaş meydanında kazanılmıştır.\n\n"
    +"■ TESLİM VE ESARET\n"
    +"10 Aralık 1877'de yaralanıp teslim olduktan sonra Bugot, Bükreş, Harkof ve Rusya'da bir süre esaret hayatı yaşadı. Esaretteyken Rus çarı, kahramanlığını takdir amacıyla kendisine çifte kartal nişanı verdi. Bir kumandanın, kendisini esir alan devletin hükümdarından nişan alması, dönemin savaş ahlâkına dair bir şey söyler: yenilgi ile itibarsızlık aynı şey sayılmıyordu.\n\n"
    +"■ SONRASI\n"
    +"Yurda döndükten sonra sarayın en güvendiği isimlerden biri oldu. Dönemin padişahı, Bâbıâli'ye güvenmediği için devlet idaresini yavaş yavaş kendi sarayında toplarken, bunu muhafazakâr ve dürüst saydığı bazı devlet adamlarının desteğiyle yaptı; Gazi Osman Paşa o adların başında sayılır.\n\n"
    +"■ NİÇİN HATIRLANIR\n"
    +"Plevne, kaybedilen bir savaşın içinden çıkan tek büyük gurur kaynağıydı ve bu yüzden Osman Paşa'nın adı bir savunma taktiğinin değil, bir tutumun adı oldu. Yenilginin ağırlığı ne kadar büyükse, o tutumun sembolik değeri de o kadar büyüdü.",
  kesinlik:"kesin",
  olay:["1877-07-19","1877-12-10"],
  kaynak:"TDV: gazi-osman-pasa (Metin Hülagü) · abdulhamid-ii (Cevdet Küçük) · doksanuc-harbi (Mahir Aydın)" },

{ id:"kimdir-gazi-ahmed-muhtar-pasa", tur:"kimdir",
  kisa:"Doğu cephesinde üst üste dört zafer kazandı, sonra iki yenilgiyle geri çekildi ve Erzurum'un önünde halkla birlikte son bir zafer daha kazandı.",
  metin:"■ SAVAŞTAN ÖNCE\n"
    +"Otuz iki yaşında müşir olmuş, Yemen'de vali ve kumandanlık yapmış, Girit valiliğinde ve Erzurum valiliğinde bulunmuş tecrübeli bir askerdi. 8 Şubat 1877'de Dördüncü Ordu müşirliğiyle Anadolu Harp Ordusu başkumandanlığına tayin edildi ve 7 Nisan 1877'de Erzurum'a ulaşarak orduyu düzene koymaya çalıştı.\n\n"
    +"■ AKIŞ — DÖRT ZAFER\n"
    +"24 Nisan 1877 gecesi Rusların sınıra saldırmasıyla savaş doğuda da başladı. Ruslar 17 Mayıs'ta Ardahan'ı aldı. Muhtar Paşa Soğanlı, Eleşkirt ve Erzurum'a ihtiyat yerleştirip ordusunu Köprüköy ve Deveboynu civarında topladı. Rusların Doğubayazıt'ı işgal edip Kars'ı kuşatmaya başlaması üzerine 21 Haziran'da karşı hücuma geçti: Deli Baba'da (Halyas) ve 25-27 Haziran'da Zivin'de Rusları yendi; Rus kuvvetleri Gümrü önlerine kadar çekildi. 25 Ağustos'ta âni bir hücumla Gedikler (Kızıltepe) zaferini kazandı. Takviye alan Rus ordusu 2 Ekim'de 70.000 askerle taarruza geçtiğinde, üç gün süren Yahniler Savaşı'nda 34.000 kişilik kuvvetiyle onları yine yendi — bu muharebe hem istihkâm hem meydan savaşı olarak harp tarihine geçen bir harekât sayılır.\n\n"
    +"■ DÖNÜM: ALACADAĞ VE DEVEBOYNU\n"
    +"9 Ekim'de Alacadağ'a çekilmek zorunda kaldı; 15 Ekim'deki Alacadağ Savaşı'nı Ruslar kazandı ve bir kısım Türk askerini teslim aldı. Muhtar Paşa Kars'a çekilip savunma hazırlıklarını yaptı, şehrin kumandasını bırakıp küçük bir birlikle Köprüköy'e gitti. Erzurum'u savunmak için kurduğu hatta 4 Kasım'da Deveboynu'nda yenildi ve elinde kalan az sayıda askerle Erzurum'a çekilip onları Aziziye tabyalarına yerleştirdi.\n\n"
    +"■ AZİZİYE\n"
    +"8 Kasım'da Ruslar Aziziye tabyalarına hücum etti. Çıkan şiddetli çarpışmada Muhtar Paşa, ERZURUM HALKIYLA BİRLİKTE onları bozguna uğratıp Deveboynu'na kadar geri çekilmeye mecbur bıraktı. Bu zaferle Rus ordusunun Doğu Anadolu'daki ilerlemesi durdu. Ancak 18 Kasım'da Kars'ın düşmesi üzerine paşa Erzurum'da yeni savunma tedbirleri almak zorunda kaldı.\n\n"
    +"■ UNVAN VE SONRASI\n"
    +"Askerî alandaki üstün meziyetleri ona, döneminde yalnız üç kişiye lâyık görülen gazi unvanını kazandırdı. 9 Ocak 1878'de İstanbul'a çağrılınca başkumandanlık görevi sona erdi; aleyhine birtakım dedikodular çıkmasına rağmen 17 Ocak 1878'de Çatalca istihkâmları başkumandanlığına tayin edildi.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Doğu cephesi, Balkanlar'ın gölgesinde kaldığı için az anlatılır. Oysa buradaki hikâye, savaşın genel dersini tek başına özetler: bir ordu taktik olarak üst üste kazanabilir ve yine de sayı, ikmal ve yedek üstünlüğü karşısında geri çekilmek zorunda kalır.",
  kesinlik:"kesin",
  olay:["1877-11-18","1878-01-31"],
  kaynak:"TDV: gazi-ahmed-muhtar-pasa (Rifat Uçarol) · kars (Tufan Gündüz) · doksanuc-harbi (Mahir Aydın)" },

{ id:"harp93-ayastefanos-ne-getirdi", tur:"sebep-sonuc",
  kisa:"Ayastefanos, Rus ordusunun İstanbul'un hemen dışına taşıdığı karargâhta imzalandı ve Ege'ye uzanan bir Bulgaristan kurdu — dört ay yaşadı.",
  metin:"■ NASIL GELİNDİ\n"
    +"Plevne'nin düşmesi ve doğuda Kars'ın kaybıyla cepheler çöktü. 31 Ocak 1878'de imzalanan Edirne Mütarekesi'ne göre Erzurum Ruslara teslim edilecek, İstanbul Konferansı'nda belirtilen sınırlardan küçük olmamak şartıyla özerk bir Bulgaristan Emâreti kurulacak, Sırbistan, Karadağ ve Romanya'nın istiklâlleri tanınacak, savaş tazminatı ödenecek ve Boğazlarda Ruslara bazı imtiyazlar verilecekti. Barış görüşmeleri, Ruslar karargâhlarını Yeşilköy'e (Ayastefanos) taşıdıktan sonra orada sürdü ve 3 Mart 1878'de antlaşma imzalandı.\n\n"
    +"■ YİRMİ DOKUZ MADDE\n"
    +"Antlaşmaya göre Osmanlı Devleti Romanya, Karadağ ve Sırbistan'ın bağımsızlıklarını kabul edecekti. Bulgaristan Osmanlı'ya bağlı özerk bir prensliğe dönüştürülecek ve sınırları TUNA'DAN EGE DENİZİNE, ARNAVUTLUK'TAN KARADENİZ'E kadar uzanacaktı; prens halk tarafından serbestçe seçilecek, Avrupa devletlerinin tasvibi ve Osmanlı'nın tasdikiyle tayin edilecekti. Girit'te 1868 nizamnâmesi uygulanacaktı. Savaş tazminatı 1.410.000.000 ruble olarak belirlendi; bu tazminatın büyük kısmına karşılık Rumeli'deki bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt Rusya'ya bırakılacaktı. Rus askerleri Bulgaristan hariç, antlaşmanın imzasından üç ay sonra Rumeli'yi, altı ay sonra Doğu Anadolu'yu boşaltacaktı.\n\n"
    +"■ NİÇİN YAŞAMADI\n"
    +"Ege'ye inen bir Bulgaristan, Rusya'nın Akdeniz'e açılması demekti ve bunu ne İngiltere ne Avusturya kabul edebilirdi. Bu yüzden antlaşmanın maddeleri 13 Haziran 1878'de toplanan Berlin Kongresi'nde yeniden ele alınıp değiştirildi. Ayastefanos dört ay yürürlükte kaldı.\n\n"
    +"■ AMA İZİ KALDI\n"
    +"Hukuken ölmüş bir antlaşmanın siyasî ömrü çok daha uzun oldu: Ayastefanos'taki geniş sınır, sonraki kırk yıl boyunca Bulgar millî hedefinin haritası olarak yaşadı. 1885'te Doğu Rumeli'nin katılması, 1912-1913 Balkan savaşları ve I. Dünya Savaşı'ndaki tercihler bu haritayla açıklanır. Yani dört ay yaşamış bir metin, dört savaşın sebebi oldu.",
  kesinlik:"kesin",
  olay:["1878-03-03","1878-01-31"],
  kaynak:"TDV: ayastefanos-antlasmasi (Ali İhsan Gencer) · berlin-antlasmasi (Ali İhsan Gencer) · doksanuc-harbi (Mahir Aydın)" },

{ id:"harp93-balkan-goc-dalgasi", tur:"sebep-sonuc",
  kisa:"Savaşın en kalıcı sonucu sınır değil nüfustu: Balkanlar'dan gelen muhacirlerin sayısı İstanbul'da yüz binlerle anılır oldu ve Anadolu'nun yerleşim haritası değişti.",
  metin:"■ NE OLDU\n"
    +"Savaşın sonunda özellikle Bulgaristan'daki Türk ahali, gerek öldürülmek gerekse göçe zorlanmak suretiyle yüzyıllarca vatan bildikleri topraklardan uzaklaştırıldı. Başvurulan kaynak bu hareketi \"tam bir Türk imhası\" diye niteler ve İstanbul'daki muhacirlerin sayısının yüz binlerle ifade edilir hâle geldiğini yazar.\n\n"
    +"■ ŞEHİR NEYE DÖNÜŞTÜ\n"
    +"Bu, bir başşehrin kaldırabileceğinden fazlasıydı. Barınma, yiyecek ve salgın sorunu, savaşı kaybetmiş ve tazminat ödeyecek bir devletin üstüne bindi. Muhacirler Anadolu'nun çeşitli yerlerinde kurulan yerleşmelere iskân edildi; bu iskân, bugün hâlâ adları \"muhacir köyü\" diye anılan yerleşmelerin kökenidir.\n\n"
    +"■ SİYASÎ SONUCU\n"
    +"Göç yalnız bir insanî felâket değil, bir siyasî basınç kaynağıydı. İstanbul'da toplanan Balkan muhacirlerinden bir grubun desteğiyle 20 Mayıs 1878'de saraya karşı bir baskın girişiminde bulunuldu; padişahı tahttan indirip yerine selefini geçirmeyi amaçlayan bu girişim, dönemin şüpheci yönetim tarzını pekiştiren olaylardan biri oldu. Yani göç dalgası, iç siyaseti de doğrudan şekillendirdi.\n\n"
    +"■ BAĞIMSIZLIK SONRASI\n"
    +"Göç 1878'le bitmedi. Yeni kurulan devletlerde bağımsızlığın ardından Müslüman göçü hızlandı ve Balkanlar'daki Müslüman nüfusun oranı onlarca yıl boyunca düşmeye devam etti. Doğuda da benzeri oldu: Kars bölgesi Rus idaresine geçtikten sonra Müslüman nüfus düştü, çünkü çok sayıda insan Anadolu'ya göç etti; aynı yıllarda bölgeye Alman, Osetin, Rum, Malakan, Ermeni ve Polonyalı topluluklar iskân edildi ve 1897 sayımında sancağın nüfusunda anormal bir artış görüldü.\n\n"
    +"■ NİÇİN AYRI BİR KART HAK EDİYOR\n"
    +"Haritada bir sınır çizgisi değişir ve gözle görülür. Nüfusun yer değiştirmesi haritada görünmez ama etkisi daha uzun sürer: sonraki elli yılın siyasî kadroları, göç etmiş ailelerin çocuklarıdır.",
  kesinlik:"kesin",
  olay:["1878-08-01","1878-03-03"],
  kaynak:"TDV: doksanuc-harbi (Mahir Aydın) · kars (Tufan Gündüz) · abdulhamid-ii (Cevdet Küçük) · bulgaristan (Mehmet İpşirli vd.). ⚠️ Toplam muhacir sayısı için rakam verilmemiş; \"yüz binlerle ifade edilir\" ifadesi aynen aktarıldı, sayı UYDURULMADI" },

{ id:"harp93-kibris-ve-ingiltereye-yaslanma", tur:"sebep-sonuc",
  kisa:"Ayastefanos'tan kurtulmanın bedeli bir ada oldu: Kıbrıs'ın idaresi, Berlin'de alınacak destek karşılığında kongreden bir ay önce İngiltere'ye devredildi.",
  metin:"■ HESAP\n"
    +"Ayastefanos Antlaşması Osmanlı için kabul edilemez ağırlıktaydı ve tek kurtuluş yolu, antlaşmayı Avrupa'nın ortak masasına taşıyıp değiştirmekti. Bunu yapabilecek tek devlet, Rusya'nın Akdeniz'e inmesinden en çok rahatsız olan İngiltere'ydi. Ama İngiltere desteğini karşılıksız vermedi.\n\n"
    +"■ GİZLİ ANTLAŞMA\n"
    +"Gizli görüşmeler sonunda, Kıbrıs'ın yönetimini geçici olarak İngiltere'ye bırakan antlaşma 4 Haziran 1878'de imzalandı — Berlin Kongresi'nin toplanmasından dokuz gün önce. Padişah, adada hükümranlık haklarına asla zarar verilmeyeceğine dair İngilizlerden bir belge almak suretiyle antlaşmayı onayladı. 1 Temmuz 1878 tarihli bir ek antlaşmaya, Rusya'nın Doğu Anadolu'da işgal ettiği yerleri iade etmesi hâlinde İngiltere'nin Kıbrıs'tan çekileceği maddesi eklenerek adanın toprak mülkiyetinin Osmanlı'ya ait olduğu tesbit edildi.\n\n"
    +"■ BERLİN'DE NE KAZANILDI\n"
    +"Kazanç gerçekti: Ege'ye inen Bulgaristan üçe bölündü, Doğubayazıt ve Eleşkirt vadisi Osmanlı'da kaldı. Ama bedel de gerçekti — ve bedel kalıcı, kazanç geçiciydi.\n\n"
    +"■ ZİNCİR ETKİSİ\n"
    +"Osmanlı diplomasisi, İngiltere'nin Berlin Kongresi'nde vaad ettiği destek uğruna Kıbrıs'ı elden çıkarmış oldu. Bunun görünmeyen bir sonucu daha vardı: adanın verilmesi öteki devletlerin bu konudaki faaliyetlerini artırdı. İngiltere'nin teşvikiyle Bosna-Hersek'in yönetimi Avusturya'ya bırakıldı; 1881'de Fransa Tunus'a, ertesi yıl İngiltere'nin kendisi Mısır'a bir oldubitti ile el koydu. Yani bir taviz, tavizin fiyatını düşürdü.\n\n"
    +"■ DERS\n"
    +"\"Ruslardan kurtulmak için İngiltere'ye yaslanmak\" bir hata değil, mevcut seçeneklerin en azıydı; hata, ödenen bedelin GEÇİCİ sayılmasıydı. Adanın idaresi \"geçici\" devredildi, hükümranlık hakları belgeyle güvenceye alındı — ve ada bir daha geri gelmedi. Kâğıt üzerindeki güvencenin, onu uygulatacak güç yoksa hiçbir değeri olmadığını gösteren en net örneklerden biridir.",
  kesinlik:"kesin",
  olay:["1878-06-04","1878-07-13"],
  kaynak:"TDV: abdulhamid-ii (Cevdet Küçük) · berlin-antlasmasi (Ali İhsan Gencer) · kibris (Kemal Çiçek vd.) · doksanuc-harbi (Mahir Aydın)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0063 · "Hasta adam" tabiri — nasıl doğdu, ne işe yaradı
// ══════════════════════════════════════════════════════════════════════════

{ id:"hasta-adam-tabiri", tur:"tartisma",
  kisa:"Tabiri bir düşman değil, mirası paylaşmak isteyen bir ortak kullandı: hasta ilân etmek, mirasın vaktinden önce konuşulmasını meşrulaştırıyordu.",
  metin:"■ OLAY NASIL VUKU BULDU\n"
    +"İfade, Rus Çarı I. Nikola'nın Ocak 1853'te Osmanlı Devleti için kullandığı bir benzetmedir. Söylendiği yer bir savaş meydanı ya da resmî bir nota değil, Rusya'daki İngiliz elçisiyle yapılan özel görüşmelerdir. Benzetmenin amacı bir teşhis koymak değil, bir TEKLİF açmaktı: hasta ölmeden önce mirasın nasıl paylaşılacağının konuşulması.\n\n"
    +"■ NİÇİN TAM O YIL\n"
    +"Zamanlama tesadüf değildir. Aynı yıl Rusya, Osmanlı toprakları üzerinde tek başına hâkimiyet kurmayı amaçladığını resmen talep etti ve Kırım Savaşı çıktı. Savaş Rusya'nın yenilgisiyle bitince ortaya çıkan şey şuydu: Osmanlı Devleti tek başına direnemiyordu ama Fransa, İngiltere ve Avusturya desteğiyle Rusya karşısında durabiliyordu. Yani \"hasta adam\" teşhisi doğruydu da, tedavi sürüyordu — ve tedaviyi yapanlar aynı zamanda mirasın adaylarıydı.\n\n"
    +"■ TABİRİN ARKA PLANI: ŞARK MESELESİ\n"
    +"İfade boşlukta doğmadı. Osmanlı topraklarının âkıbeti Avrupa diplomasisinde \"Şark Meselesi\" adıyla anılıyordu. Kavramın tarihsel bir terim olarak 1822'deki Verona görüşmelerinde ortaya çıktığı ileri sürülür; ancak bu, yüzyılın başında zaten belirginleşmiş bir sürecin adının konulmasından başka bir şey değildir. O tarihte kavram ağırlıklı olarak Osmanlı'nın Güneydoğu Avrupa topraklarına işaret ediyordu; Ortadoğu ve Afrika, İngiliz-Fransız nüfuz mücadelesinin alanı hâline gelene kadar kavramın dışında kaldı.\n\n"
    +"■ VE HASTA YALNIZ DEĞİLDİ\n"
    +"En çarpıcı ayrıntı şudur: aynı benzetme bir başka imparatorluk için de kullanıldı. Avusturya, Macaristan kanadıyla yeni bir devlet kurmak zorunda kaldıktan sonra, ulus-devlet olmak isteyen farklı etnik ve dinî halklara sahip olması bakımından Osmanlı ile aynı zafiyeti paylaşmaya başladı ve Şark Meselesi'nin kendisi için de konuşulduğunu gördü. \"Boğaz'daki hasta adam\" ile \"Tuna'daki hasta adam\" neticede aynı illetin kurbanı oldu — ikisi de 1918'de sona erdi.\n\n"
    +"■ NİÇİN BU KADAR TUTTU\n"
    +"Tabirin gücü, bir devletin çöküşünü kaçınılmaz ve tabii bir süreç gibi göstermesindedir. Hasta bir insan için yapılacak şey bellidir: beklemek ve mirası düzenlemek. Böyle bir çerçevede müdahale etmek saldırganlık değil, tedbir sayılır. Bu yüzden ifade, bir gözlem olmaktan çok bir SİYASET ARACIDIR — ve tam olarak paylaşımın hızlandırılması amacına hizmet etmiştir.",
  kesinlik:"tartismali",
  olay:["1856-03-30"],
  kaynak:"TDV: sark-meselesi (Kemal Beydilli) · Tekin Önal, “İşgalden İhtilale Millî Mücadele Hareketinin Diplomatik Boyutu”, Türkiyat Mecmuası 29 (2019), s. 89-125, DOI 10.26650/iuturkiyat.652128. ⚠️ Görüşmenin tarafları ve tam cümlesi TDV'de `bulunamadı`; ay bilgisi (Ocak 1853) akademik makaleden alınmış, gün verilmemiştir — gün UYDURULMADI" },

// ══════════════════════════════════════════════════════════════════════════
// H-0077 (Mehdî yarısı) ve H-0079 · Sudan'da Mehdî hareketi ve Mehdî devleti
// ⚠️ H-0077'nin Vehhâbî yarısı için kart YAZILMADI: aynı konuda dolu bir kart
//    zaten var (tur:"tartisma", Dir'iye 1818 gününe bağlı). Mükerrer kart
//    açmak yerine hüküm `once-cozuldu` olarak rapora yazıldı.
// ══════════════════════════════════════════════════════════════════════════

{ id:"mehdi-hareketi-sudan-1881", tur:"sebep-sonuc",
  kisa:"Sudan'da bir şeyh mehdîliğini ilân etti ve üzerine gönderilen her orduyu yendi — her zafer, taraftarlarının gözünde iddiasının yeni bir delili oldu.",
  metin:"■ MEHDÎ FİKRİ NEDİR\n"
    +"Mehdî inancı İslâm tarihinde yeni değildir ve pek çok siyasî hareket ondan güç almıştır: Kuzey Afrika'da Muvahhidler Devleti'nin kurucusu 1121'de Mağrib'de çıkması beklenen mehdî olduğunu söyleyerek davetini başlatmış, Hindistan'da 16. yüzyıldan sömürge dönemine kadar birçok mehdîlik iddiası ortaya çıkmıştı. Yani hareketin biçimi tanıdıktı; yeni olan, 19. yüzyıl sonunda Afrika'da bu fikrin SÖMÜRGECİLİĞE KARŞI kullanılmasıdır.\n\n"
    +"■ NEREDE, NİÇİN ÇIKTI\n"
    +"1881'de Sudan'da Muhammed Ahmed el-Mehdî liderliğinde başlayan hareket, bölgedeki Osmanlı-Mısır idaresinin vergi baskısı ve yönetim boşluğu ortamında yayıldı. Muhammed Ahmed önce Kordofan ve Cibâlünnûbe'ye seyahate çıkıp güvendiği kimselere davetini açıkladı, sonra merkez edindiği Ebâ adasına döndü ve mektuplarla şeyhlerin ve âlimlerin kendisine tâbi olmasını istedi.\n\n"
    +"■ İLK ÇATIŞMALAR\n"
    +"Sudan genel valisi Mehmed Rauf Paşa'nın mehdîlik iddiasından vazgeçmesi teklifini reddetti ve üzerine gönderilen Osmanlı birliklerini yenilgiye uğrattı. Taraftarlarına \"Ensar\" adını verdi; önce Nûbe dağına, ardından Kadîr dağına çekildi. Fâşûdâ valisi kumandasındaki Osmanlı birliğini de bozguna uğratarak gücünü artırdı. Ve asıl mekanizma burada işledi: bu başarılar mensupları arasında GERÇEK MEHDÎ OLUŞUNUN DELİLİ kabul edildi. Askerî zafer dinî iddianın kanıtı sayılınca hareket kendi kendini besleyen bir döngüye girdi.\n\n"
    +"■ KIRILMA: HICKS ORDUSUNUN İMHASI\n"
    +"Kuvvetler eyalet merkezi Ubeyyid'e doğru ilerlerken Mısır kuvvetlerinin üstün ateş gücü karşısında büyük kayıp verdiler ama mücadeleyi sürdürdüler. Bu sırada Mısır'ı işgal eden İngilizler Ekim 1882'de Hartum'a kuvvet sevketti. William Hicks kumandasındaki İngiliz-Mısır kuvvetlerine karşı büyük bir zafer kazanan Mehdî, 19 Ocak 1883'te Ubeyyid'e girdi. Ardından Dârfûr Aralık 1883'te, Bahrülgazâl Nisan 1884'te teslim oldu.\n\n"
    +"■ HARTUM\n"
    +"26 Ocak 1885'te Hartum'a girdi ve büyük camide kılınan cuma namazında bizzat imamlık yaptı. Bu tek cümle hareketin niteliğini anlatır: şehir askerî olarak alınmış, ama iktidar DİNÎ bir törenle ilân edilmiştir. Böylece Kızıldeniz'den Dârfûr'a, Dongola'dan Bahrülgazâl'e kadar Mısır Sudanı'nın başlıca vilâyetlerine hâkim oldu.\n\n"
    +"■ OSMANLI AÇISINDAN NE ANLAMA GELDİ\n"
    +"Sudan hukuken Osmanlı'ya bağlı Mısır'ın idaresindeydi. Dolayısıyla bu isyan, halife unvanını taşıyan bir padişahın tâbi topraklarında, dinî meşruiyet iddiasıyla ayaklanan bir hareketti — yani yalnız bir sınır kaybı değil, bir MEŞRUİYET SORUNUYDU. İsyanın yan etkileri geniş alana yayıldı: Mısır birlikleri 1883'te isyan sebebiyle Somali kıyılarından çekildi ve Kızıldeniz'in Afrika yakasındaki Osmanlı-Mısır düzeni dağıldı.",
  kesinlik:"kesin",
  olay:["1883-01-19","1885-01-26"],
  kaynak:"TDV: sudan (Ahmet Kavas, Meral Avcı) · mehdilik (Mustafa Öz) · mehdi (Yusuf Şevki Yavuz, Ekrem Sarıkçıoğlu)" },

{ id:"mehdi-devleti-1885-1899", tur:"sebep-sonuc",
  kisa:"Kurucusunun ölümünden sonra da on dört yıl ayakta kaldı: Mehdî devleti, İngiliz-Mısır ordularının büyük harekâtına rağmen 1899'a kadar dayandı.",
  metin:"■ DEVLET NEREDEN NEREYE UZANIYORDU\n"
    +"Hartum'un alınmasıyla kurulan yapı, Kızıldeniz'den Dârfûr'a, Dongola'dan Bahrülgazâl'e kadar Mısır Sudanı'nın başlıca vilâyetlerini kapsıyordu. Bu, Nil'in yukarı havzasının tamamına yakınının Kahire ve İstanbul'un elinden çıkması demekti.\n\n"
    +"■ NE KADAR YAŞADI\n"
    +"Kurduğu devlet, İngiliz-Mısır kuvvetlerinin büyük askerî harekâtına rağmen 1899 yılına kadar ayakta kalmayı başardı. Bu, dinî meşruiyetle kurulan bir hareketin kurumsallaşmayı da başardığını gösterir: kurucusunun ölümü devleti çökertmedi.\n\n"
    +"■ SONA GİDEN YOL\n"
    +"İngiltere Sudan'ı geri almayı 1896'da Dongola'dan başlattı. Nihaî darbe 2 Eylül 1898'deki Ümmüdurman Muharebesi'yle geldi ve Mehdî devleti yıkıldı. 19 Ocak 1899'da Sudan'da yönetimin çerçevesini çizen bir antlaşma imzalandı; böylece Sudan'ın kontrolü fiilen İngiltere'nin eline geçti. Bâbıâli, hâkimiyet hakları ihlâl edildiği için bu antlaşmaya şiddetle karşı çıktıysa da bir netice alamadı — yani Osmanlı'nın itirazı kayda geçti, sonuca etki etmedi.\n\n"
    +"■ ARDINDAN NE KALDI\n"
    +"Devletin ortadan kalkmasının ardından bölgede eski yapılar yeniden belirdi: Dârfûr'un önceki sultanlarından birinin torunu Ali Dînâr, Dârfûr Sultanlığı'nı yeniden kurmayı başardı ve diplomatik olarak İngilizlere tâbi, onlara yıllık vergi ödeyen ama iç işlerinde serbest bir hükümdar olarak hüküm sürdü. Yani imparatorluk çekildiğinde boşluk doğmadı; yerel hânedan geri geldi.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Mehdî devleti, 19. yüzyıl sonunda Afrika'da sömürgeci orduları uzun süre durdurabilmiş sayılı yerli yapılardan biridir. Aynı zamanda hilâfet iddiasının pratikte ne kadar sınırlı olduğunun da kanıtıdır: halife unvanlı bir padişahın tâbi toprağında, dinî bir iddia adına kurulan bir devlet on dört yıl yaşadı ve İstanbul bunu ne engelleyebildi ne de geri alabildi.",
  kesinlik:"kesin",
  olay:["1885-01-26","1898-09-02"],
  kaynak:"TDV: sudan (Ahmet Kavas, Meral Avcı) · mehdilik (Mustafa Öz)" },

// ══════════════════════════════════════════════════════════════════════════
// H-0090 · Ermeni örgütleri — kuruluş sırası ve Taşnaksütyun'un yapısı
// 🔴 DENGE NOTU: TDV'de bu konuda müstakil madde `bulunamadı` (ermeniler ·
//    tasnaksutyun · hincak sluglarının hepsi ölü). Kullanılan kaynak Türk
//    akademik literatürüdür ve taraflıdır; kartlar bunu AÇIKÇA söyler ve
//    karşı anlatıyı da mevcut bir başka karta havale eder.
// ══════════════════════════════════════════════════════════════════════════

{ id:"ermeni-orgutleri-kurulus-sirasi", tur:"tartisma",
  kisa:"Üç örgüt, üç ayrı şehirde, beş yıl içinde kuruldu: Van, Cenevre, Tiflis — ve üçü de Osmanlı toprağının dışında ya da kenarında doğdu.",
  metin:"■ SIRAYI DOĞRU KURMAK\n"
    +"Bu örgütler çoğu zaman tek bir yapı gibi anılır; oysa üç ayrı kuruluş, üç ayrı yer ve üç ayrı fikir dünyası söz konusudur.\n\n"
    +"■ ① ARMENAKAN (1885, Van)\n"
    +"İhtilalci faaliyeti amaç edinen ilk Ermeni siyasî partisi Armenakan'dır ve 1885'te Van'da, Mıgırdiç Portakalyan'ın öğrencileri tarafından kurulmuştur. Portakalyan Van'da kendi açtığı okulda öğretmenlik yapmış ve orada ihtilalci bir gençlik yetiştirmişti; tutuklamalar başlayıp Van'da oturması yasaklanınca bazı taraftarlarıyla Marsilya'ya gitti ve 1885'te orada Armenia adlı bir gazete çıkarmaya başladı. Gazetenin çıkarılış amacını Ermeni tüccarlarla çeşitli ülkeler arasındaki ticarî ilişkilerin geliştirilmesi diye açıklamıştı; ancak kısa sürede içeriği değişti ve gazetenin Osmanlı ülkesine girişi 1885 Ağustosunda yasaklandı. Partinin merkezi Van'dı.\n\n"
    +"■ ② HINÇAK (1887, Cenevre)\n"
    +"Hınçak Komitesi, Batı Avrupa üniversitelerinde okumak üzere gitmiş RUS UYRUKLU Ermeni öğrenciler tarafından, İsviçre'nin Cenevre şehrinde 1887 yılının Ağustos ayında kuruldu. Kurucular önce cemiyetin programını hazırladı; aynı adı taşıyan yayın organının ilk sayısı Kasım 1887'de, ikinci sayısı Ocak 1888'de çıktı ve program 1888'de açıklandı.\n\n"
    +"■ HINÇAK PROGRAMI NE DİYORDU\n"
    +"Program beş bölümdü. Birinci bölüm işçi ve üretici sınıfın durumunu, yani sosyalist çerçeveyi kuruyordu. İkinci bölüm Ermenilerin mutlakıyet idaresi altındaki durumunu ve kurulması düşünülen yapıyı ele alıyordu. Üçüncü bölümde ihtilal alanı olarak Osmanlı ülkesi seçiliyor ve faaliyet biçimleri belirleniyordu. Dördüncü bölüm cemiyetin yakın hedeflerini, beşinci bölüm nihaî amacını tarif ediyordu.\n\n"
    +"■ OSMANLI ÜLKESİNE GİRİŞ\n"
    +"Cemiyet 1890 Ocak ayının ilk günlerinde Osmanlı ülkesinde örgütlenmeye başladı; üyeler Cenevre, Trabzon ve başka merkezlerden geldi. Yedi ay içinde üye sayısının 700 kişiye ulaştığı aktarılır; üyelerin çoğu yabancı konsolosluklarda ve benzeri işlerde çalışan kişilerdi. Cemiyet sonraki yıllarda bölündü: bir kanat kurucusunun çizgisini, öteki kanat reformcu çizgiyi savundu.\n\n"
    +"■ ③ TAŞNAKSÜTYUN (1890, Tiflis)\n"
    +"Rus idaresindeki Tiflis'te pek çok siyasî grup ve organizasyon ortaya çıkmıştı. Bu gruplar 1890 yazında bir araya gelip kurulacak yeni teşkilâtın programını uzun uzun tartıştıktan sonra \"Ermeni İhtilâlcileri Birliği\" adında bir teşkilât kurdular. İlk amacı bütün ihtilalci Ermenileri ve Ermeni siyasî gruplarını tek çatı altında birleştirmekti; Genç Ermenistan, Armenakan ve Hınçak cemiyetlerini bir araya getirmeyi hedefliyordu. Bu birliktelik kalıcı olmadı: Armenakan 1896'da tamamen ayrıldı ve bağımsız hareket etmeye devam etti.\n\n"
    +"■ ORTAK NOKTA\n"
    +"Üçünün de doğduğu yere dikkat: Van bir Osmanlı şehridir ama kurucu kadro oradan sürülmüştür; Cenevre ve Tiflis ise Osmanlı toprağının dışındadır ve kurucuların çoğu Rus uyrukludur. Yani örgütlenme, Osmanlı içinden değil dışından örgütlenip içeri taşınmıştır — dönemin Osmanlı yönetiminin dış kaynaklı komplo algısının olgusal zemini budur; algının abartılıp abartılmadığı ayrı bir tartışmadır.\n\n"
    +"■ OKURA NOT — KAYNAK DENGESİ\n"
    +"Bu kartın dayandığı literatür Türk akademik geleneğine aittir ve bu örgütleri ağırlıkla terör ve ihtilal yöntemleriyle tanımlar. Ermeni tarih yazımı aynı örgütleri millî kurtuluş ve öz savunma çerçevesinde anlatır. İki çerçeveyi karşılaştırmadan hüküm kurmak eksik kalır; karşı anlatı ayrı bir kartta verilmiştir.",
  kesinlik:"tartismali",
  olay:["1896-08-26"],
  kaynak:"Orhan Doğan, “Ermeni Komiteleri Hınçak ve Taşnaksütun (Rus Adalet Bakanı Y. Muravyev'in Ermeni Komitelerine İlişkin Raporu)”, Selçuk Üniversitesi Sosyal Bilimler Enstitüsü Dergisi (Uras, Gürün, Süslü, Koçar ve Oganesyan'a atıflarla). ⚠️ TDV'de bu konuda madde `bulunamadı`: ermeniler · ermeni-mes-elesi · tasnaksutyun · hincak sluglarının hepsi ölü" },

{ id:"ermeni-orgutleri-ne-yaptilar", tur:"tartisma",
  kisa:"Örgütlerin yöntemi, kalabalık bir ayaklanma değil dikkat çeken eylemdi — hedef Osmanlı yönetimini devirmek değil, Avrupa'yı müdahaleye çağırmaktı.",
  metin:"■ YÖNTEMİN MANTIĞI\n"
    +"Bu örgütlerin eylem çizgisi, sayıca çok az oldukları için klasik bir ayaklanma mantığı üzerine kurulamazdı. Programlarını inceleyen literatür, amaçlarına ulaşmak için ihtilal, isyan ve tedhiş yöntemlerini ilke edindiklerini ve bir yandan eylem yaparken bir yandan da Osmanlı ülkesinde yaşayan Ermeni toplumunu toplu ayaklanmalara teşvik etmeye çalıştıklarını belirtir.\n\n"
    +"■ EYLEM ZİNCİRİ\n"
    +"Aynı literatür, 1890'lardaki olayları tek bir zincir hâlinde sayar: Kumkapı gösterisi, Sasun olayları, Bâbıâli gösterisi ve Zeytun ile Van hareketleri. Bu eylemlerin ortak özelliği, askerî bir kazanım değil uluslararası GÖRÜNÜRLÜK hedeflemeleridir: büyük devletlerin dikkatini çekip Berlin Antlaşması'nda yer alan ıslahat hükümlerinin uygulanmasını dayatmalarını sağlamak.\n\n"
    +"■ ZİNCİRİN EN BİLİNEN HALKASI — 26 AĞUSTOS 1896\n"
    +"O gün öğle vakti, başlarında Babken Suni olmak üzere 26 Taşnak üyesi Osmanlı Bankası'na girip binayı ele geçirdi ve içerideki yaklaşık 150 kişiyi rehin aldı. Rus deniz ataşesinin olaydan iki gün sonra yazdığı rapora göre, önce iyi giyimli yirmi kişi birkaç hamal eşliğinde bankaya girmiş, memurlarla tartışmaya başlamış, bağrışmaların ardından önceden hazırlanmış kalabalık bir grup zorla içeri girmiş, bütün kapılar kapatılmış ve memurlara yerlerinde kalmaları emredilmişti. Kapıda bir nöbetçi öldürüldü, bir kavas yaralandı. Aynı anda bütün büyükelçiliklere, büyük devletlerin desteğini isteyen bir bildiri gönderildi; bildiride istekler yerine getirilmezse bankanın içindekilerle birlikte havaya uçurulacağı yazıyordu. Babken Suni bir patlama sonucu öldü ve eylemin idaresini başkaları üstlendi.\n\n"
    +"■ NİÇİN BANKA\n"
    +"Hedef seçimi tesadüf değildir: banka, Avrupa sermayesinin Osmanlı'daki en görünür kurumuydu ve devletin merkez bankası işlevini görüyordu. Nitekim İstanbul'daki büyükelçiler, kendi ülkelerinin bankadaki yatırımlarının âkıbetinden endişe ettikleri için aracılık yapmaya başladılar. Eylem, tam da hesaplandığı gibi Ermeni meselesini dünya gündemine taşıyan en etkili olay oldu.\n\n"
    +"■ SONUÇ NE OLDU\n"
    +"Hesabın tutmayan yanı şudur: eylem Avrupa'nın dikkatini çekti ama müdahalesini getirmedi. Baskın sırasında ve sonrasında yaşananlar, özellikle İstanbul'da Osmanlı toplumunun ayrışmasında etkili oldu ve şehirde geniş çaplı şiddet olayları yaşandı. Yani stratejinin bedeli, büyük ölçüde korumayı amaçladığı topluluğa ödetildi.\n\n"
    +"■ İKİ ANLATI\n"
    +"Bu noktada tarih yazımı ikiye ayrılır ve ayrıldığı yeri göstermek gerekir. Türk akademik literatürü olayları, dış destekli örgütlerin devleti parçalama girişimi ve buna karşı alınan tedbirler olarak anlatır. Ermeni tarih yazımı ise aynı olayları, baskı altındaki bir topluluğun öz savunması ve ardından gelen kitlesel şiddet olarak anlatır. Bu iki çerçeve aynı olayların farklı yorumu değildir yalnızca; hangi olayın \"başlangıç\" sayılacağı konusunda da ayrışırlar — ve tartışmanın sertliği büyük ölçüde buradan gelir.\n\n"
    +"■ OKURA NOT\n"
    +"Bu kart, olayların sırasını ve iki anlatının ayrıldığı noktayı gösterir; hangisinin haklı olduğuna dair bir hüküm vermez. Böyle bir hüküm tek bir kaynak ailesine dayanarak verilemez.",
  kesinlik:"tartismali",
  olay:["1896-08-26"],
  kaynak:"“Rus Arşiv Belgeleri Işığında 1896 Osmanlı Bankası Baskını”, SUTAD — Selçuk Üniversitesi Türkiyat Araştırmaları Dergisi 50 (Aralık 2020), s. 341-355 (Rus deniz ataşesi Teğmen Stepanov'un 28/16 Ağustos 1896 tarihli raporu ve Oganesyan'a dayanarak; aynı makale Edhem Eldem'in 2007 tarihli “26 Ağustos 1896 Banka Vakası ve 1896 Ermeni Olayları” çalışmasına da atıf yapar) · Orhan Doğan, “Ermeni Komiteleri Hınçak ve Taşnaksütun”, Selçuk Üniversitesi Sosyal Bilimler Enstitüsü Dergisi · TDV: abdulhamid-ii (Cevdet Küçük) · berlin-antlasmasi (Ali İhsan Gencer). ⚠️ 1894-1896 şiddet olaylarının kapsamı ve sayıları için kaynaklar keskin biçimde ayrışır; bu kartta SAYI VERİLMEMİŞTİR" },

];

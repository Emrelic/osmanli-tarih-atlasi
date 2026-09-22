// ============================================================================
// EK OKUMA — TANZİMAT SONRASI KURUMLAR, FİKİRLER VE FERMANLAR (p76d)
// ============================================================================
// AD ALANI: bu dosya YALNIZ window.EKOKUMA_P76D tanımlar.
// Uygulanacak yer: data/ekokuma_p76d.js (yükleyici app.js tarafındadır;
// index.html'e satır eklenmez — ek okuma dosyaları tembel yüklenir).
//
// ŞEMA: { id, tur, kisa, metin, kesinlik, olay, kaynak } — data/ekokuma_kurum.js
// ile birebir. `olay:` bağları kronoloji kayıtlarının kendi `t:` alanından
// alındı (data/olaylar.js · olaylar_ek2.js · olaylar_ek5.js · olaylar_ek7.js);
// çapası ölçülmeden hiçbir kart kurulmadı.
//
// KAYNAK YÖNTEMİ: her TDV slug'ı tek tek çekildi, gövdesi okundu, metin
// KOPYALANMADI — özetlendi; alıntı tırnak içinde ve kısa tutuldu.
//   TDV 200 (okundu): islahat-fermani (Ufuk Gülsoy) · arazi-kanunnamesi
//     (Mehmet Âkif Aydın) · darulfunun (Ekmeleddin İhsanoğlu) · eyalet
//     (Halil İnalcık) · yeni-osmanlilar-cemiyeti · sura-yi-devlet
//     (Ali Akyıldız) · galatasaray-mekteb-i-sultanisi (Adnan Şişman) ·
//     bulgaristan (Nazif Kuyucuklu) · kanun-i-esasi · ali-suavi
//     (Abdullah Uçman)
//   TDV YÖNLENDİRME / DAR SLUG: vilayet → gövdesi yok, "bk. EYALET, VALİ";
//     asıl gövde eyalet maddesinde okundu.
//   TDV'de BULUNAMADI (aranıp bulunamadı, "yok" değil): yedi-sekiz-hasan-pasa
//     müstakil madde olarak yok (51 gövde geçişi var, madde yok) ·
//     divan-i-muhasebat müstakil madde olarak açılamadı (29 gövde geçişi).
//     Bu iki başlıkta hüküm verilmedi, kartta da "bulunamadı" yazıldı.
//
// 🔴 TDV KENDİ İÇİNDE ÇELİŞEN YER (taraf seçilmedi, iki değer de kartta):
//   Bulgar Eksarhlığı: bulgaristan "11 Mart 1870 tarihinde de müstakil Bulgar
//   kilisesi kuruldu" ↔ makedonya "28 Şubat 1870'te Bulgar Eksarhlığı'nın
//   kurulmasıyla". İki tarih arasındaki 11 günlük fark Rûmî/Milâdî takvim
//   farkıyla uyumludur, ama maddeler bunu söylemediği için kartta İKİSİ de
//   yazıldı, birleştirilmedi.
// ============================================================================
window.EKOKUMA_P76D = [

// ── H-0001 · Islahat Fermanı ───────────────────────────────────────────────
{ id:"sebep-sonuc-islahat-fermani-1856", tur:"sebep-sonuc",
  kisa:"Bir ferman iki tarafı da kızdırabilir mi? 1856'da tam olarak bu oldu: eşitlik vaadi, eşitlenenleri de eşitliği kaybedenleri de rahatsız etti.",
  metin:"■ FERMAN NE GETİRDİ\n"
    +"18 Şubat 1856'da Bâbıâli'de merasimle okunan ferman, Tanzimat'ın 1839'da verdiğinden çok daha ileri giden bir eşitlik programıydı. Getirdikleri sıralanınca ölçüsü görünür: gayri müslim cemaatlere dinî serbestlik ve cemaat yönetimine ruhban dışından üyelerin katılması; patriklerin kaydıhayat şartıyla tayini ve devlete sadakat yemini; müslümanla gayri müslim arasındaki davalar için karma mahkemeler ve bu mahkemelerde gayri müslim şahitliğinin kabulü; gayri müslimlerin askerlik yükümlülüğü (bedel-i askerî ödeyerek muaf olma seçeneğiyle); cizyenin kaldırılması; yabancılara gayri menkul edinme hakkı; devlet okullarına girişte din farkı gözetilmemesi.\n\n"
    +"■ NİÇİN ŞİMDİ — KIRIM SAVAŞI'NIN FATURASI\n"
    +"Ferman bir iç ihtiyaçtan çok, savaştan çıkan bir masanın şartıydı. Kırım Savaşı'nda Osmanlı'nın yanında savaşan Batılı devletler, barış görüşmelerinde gayri müslimlere eşit hak verilmesinde ısrar ettiler ve ferman Paris Antlaşması'ndan (30 Mart 1856) kırk gün önce ilân edildi. Antlaşmanın 9. maddesi bu fermana atıf yapar. Yani ferman hem bir reform belgesi hem de bir diplomatik teminattır: Avrupa'nın Osmanlı içişlerine karışmasına gerekçe bırakmamak için yapılmış, ama tam da bu yüzden karışmanın yeni bir dayanağı hâline gelmiştir.\n\n"
    +"■ KİM, NİÇİN RAHATSIZ OLDU — İKİ TARAF DA\n"
    +"Beklenenin aksine itiraz yalnız müslümanlardan gelmedi.\n"
    +"• Müslümanlar arasında en çok dile getirilen şikâyet, asırlardır süregelen “hâkim millet” konumunun kaybıydı; bir kısım çevre de fermanın şeriata aykırı olduğunu ileri sürdü.\n"
    +"• Gayri müslimlerin bir bölümü ise eşitliğin kendisine karşı çıktı: eşitlik, cizye karşılığında asırlardır muaf tutuldukları askerlik yükümlülüğünü de getiriyordu. Ayrıca kendi içlerinde tanınmış kilise imtiyazlarının bir ölçüde geri alınması söz konusuydu.\n"
    +"• Cemaat din adamları, cemaat yönetiminde ruhban dışı üyelere yer açılmasından ve yetkilerinin sınırlanmasından şikâyetçi oldu.\n\n"
    +"■ OKURKEN AKILDA TUTULACAK\n"
    +"Bir hukukî eşitlik ilânının, eşitlenen tarafça da direnişle karşılanabileceği buradaki en öğretici nokta: imtiyaz ile eşitlik her zaman aynı şey değildir, ve bir statüyü kaybetmek kadar bir muafiyeti kaybetmek de kayıptır.",
  kesinlik:"kesin",
  olay:["1856-02-18|Islahat"],
  kaynak:"TDV: islahat-fermani (Ufuk Gülsoy)" },

// ── H-0005 · Arazi Kanunnâmesi ─────────────────────────────────────────────
{ id:"teknik-arazi-kanunnamesi-1858", tur:"teknik-bilimsel",
  kisa:"Toprağın kime ait olduğu sorusuna Osmanlı beş ayrı cevap veriyordu — 1858'de bu cevaplar ilk defa tek metinde toplandı.",
  metin:"■ BEŞ TÜRLÜ TOPRAK\n"
    +"6 Haziran 1858 tarihli kanunnâme, Osmanlı toprağını beş sınıfa ayırır: mülk (şahsın tam mülkiyetindeki toprak), mîrî (çıplak mülkiyeti devlette kalan, tasarrufu kişiye verilen toprak), vakıf (gelirini bir vakfa bağlanmış toprak), metrûk (köy mer'ası, yol gibi ortak kullanıma bırakılmış yerler) ve mevât (işlenmemiş, sahipsiz ölü arazi). Bu tasnif kanunnâmenin icadı değildir; asırlardır uygulanan esasları derleyip tek metin hâline getirmesidir — kanunnâmenin kendi gerekçesi de Tanzimat döneminde toprak hukukunun esaslarını bir araya getirmektir.\n\n"
    +"■ ASIL DEĞİŞİKLİK: MÎRÎ TOPRAK MÜLKE YAKLAŞTI\n"
    +"Kanunnâme mîrî arazinin tasarruf hakkını iki yönden genişletti. Mîrî toprağın mirasçıları üç kategoriden sekize çıkarıldı; tapu ile intikal ettirilebilecek hâller ise dokuzdan üçe indirildi. İkisi birlikte okununca sonuç açıktır: mîrî toprak, devredilebilirlik bakımından mülk toprağa belirgin biçimde yaklaştı. Devlet çıplak mülkiyeti elinde tutmayı sürdürdü, ama toprağı elinde tutanın hakkı artık hem daha geniş hem daha belirgindi.\n\n"
    +"■ KİM HAZIRLADI\n"
    +"Metin, başkanlığını Ahmed Cevdet Paşa'nın yaptığı bir komisyon tarafından hazırlandı. Aynı komisyon geleneğinden birkaç yıl sonra Mecelle çıkacaktır.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Toprak kimin sorusu, vergi kimden ve asker nereden sorularının da cevabıdır. Tasarruf hakkının kayıt altına alınması, imparatorluğun son yarım asrında hem tapu düzeninin hem taşra maliyesinin temelini kurmuştur.",
  kesinlik:"kesin",
  olay:["1858-06-06|Arazi"],
  kaynak:"TDV: arazi-kanunnamesi (Mehmet Âkif Aydın)" },

// ── H-0010 · Dârülfünun (① kuruluş denemeleri) ─────────────────────────────
{ id:"teknik-darulfunun-dort-deneme", tur:"teknik-bilimsel",
  kisa:"Bir üniversite kurmak için karar vermek yetmedi: aynı kurum otuz yıl içinde dört kez kuruldu, üç kez kapandı.",
  metin:"■ KARARDAN İLK DERSE: ON YEDİ YIL\n"
    +"Dârülfünun kurulması kararı 1846'da alındı. İlk ders ancak 13 Ocak 1863'te verilebildi: Kimyager Derviş Paşa, İbrâhim Edhem Paşa'nın gözetiminde fizik ve kimya üzerine ders okuttu. Aradaki on yedi yıl bina, hoca ve hazırlıklı öğrenci eksikliğiyle geçti.\n\n"
    +"■ DÖRT DENEME\n"
    +"• 1863 — halka açık ders serileri. Cemâleddîn-i Efgānî'nin nübüvvet hakkındaki sözlerinin yarattığı tepkiler üzerine derslere son verildi.\n"
    +"• 20 Şubat 1870 — Dârülfünûn-ı Osmânî resmen açıldı. Yeterli sayıda nitelikli hoca ve yeterince hazırlıklı öğrenci bulunamadığı için tutunamadı.\n"
    +"• 1874-75 — Dârülfünûn-ı Sultânî öğretime başladı; malî istikrarsızlık yüzünden 1880-81 dolaylarında faaliyeti söndü.\n"
    +"• 31 Ağustos 1900 — Dârülfünûn-ı Şâhâne açıldı. Sürekliliği sağlayan deneme budur.\n\n"
    +"■ BAŞARISIZLIĞIN ORTAK SEBEBİ\n"
    +"Dört denemenin üçü aynı üç sebeple söndü: hoca yok, hazırlıklı öğrenci yok, para yok. Üniversite kurmanın bina ve kararname işi olmadığı, bir öğretim kademesinin kendisinden önceki kademeye dayandığı buradan görülür — nitekim kalıcı dârülfünun, idâdî ve rüşdiye ağının belli bir yoğunluğa ulaşmasından sonra tutunabilmiştir.",
  kesinlik:"kesin",
  olay:["1863-01-13|Dârülfünun"],
  kaynak:"TDV: darulfunun (Ekmeleddin İhsanoğlu)" },

// ── H-0010 · Dârülfünun (② 1453 tartışması) ───────────────────────────────
{ id:"tartisma-universite-kurulus-yili-1453-mi-1863-mu", tur:"tartisma",
  kisa:"Bir üniversitenin kuruluş yılı 1453 olabilir mi? Tartışma aslında tarih tartışması değil, “üniversite neye denir” tartışmasıdır.",
  metin:"■ İDDİA NE DİYOR\n"
    +"İstanbul'daki yüksek öğretimin kesintisiz bir zincir hâlinde fetihten itibaren sürdüğü, dolayısıyla kuruluşun 1453'e kadar götürülebileceği ileri sürülür. Dayanak, fetihten hemen sonra kurulan medreseler ve bunların İstanbul'un yüksek öğretim hayatındaki sürekliliğidir.\n\n"
    +"■ KARŞI TARAFIN ÖLÇÜSÜ\n"
    +"Karşı görüş, kurumun kendi kayıtlarına bakar: dârülfünun kurma kararı 1846'da alınmış, ilk ders 13 Ocak 1863'te verilmiş, kalıcı kuruluş 31 Ağustos 1900'de gerçekleşmiştir. Bu tarihler bir medrese zincirinin değil, Avrupa üniversitesi modelinde yeni bir kurumun tarihidir; nitekim dârülfünun denemeleri medreseye eklenerek değil, onun yanında ayrı bir yapı olarak kurulmuştur.\n\n"
    +"■ TARTIŞMANIN ASIL EKSENİ\n"
    +"İki taraf farklı sorulara cevap veriyor.\n"
    +"• Süreklilik ölçüsü: “Bu şehirde yüksek öğretim ne zamandan beri var?” — cevabı fetihe kadar gider.\n"
    +"• Kurumsal kimlik ölçüsü: “Bugünkü üniversite, tüzel kişiliği ve öğretim düzeniyle ne zaman kuruldu?” — cevabı 19. yüzyıla gelir.\n"
    +"Medrese ile dârülfünun arasında ders programı, öğretim dili, diploma düzeni ve mezuniyet sonrası istihdam bakımından süreklilik değil, ayrım vardır; buna karşılık ikisi de aynı şehirde, kısmen aynı hoca havuzundan beslenmiştir.\n\n"
    +"■ NE ÖLÇÜLEBİLDİ, NE ÖLÇÜLEMEDİ\n"
    +"Dârülfünun'un dört kuruluş denemesi ve tarihleri kaynakta açıkça yazılıdır. Buna karşılık 1453'ü kuruluş yılı sayan resmî gerekçenin kendisi taranan ansiklopedi maddelerinde bulunamadı; iddianın dayandığı belge burada tartılmamıştır. Okurun elinde kesin olan şudur: ilk dârülfünun dersi 1863'tedir, kalıcı kuruluş 1900'dür.",
  kesinlik:"tartismali",
  olay:["1863-01-13|Dârülfünun"],
  kaynak:"TDV: darulfunun (Ekmeleddin İhsanoğlu) — 1453 iddiasının gerekçesi taranan maddede bulunamadı" },

// ── H-0013 · Vilâyet Nizamnâmesi ──────────────────────────────────────────
{ id:"teknik-eyaletten-vilayete-1864", tur:"teknik-bilimsel",
  kisa:"Eyalet gitti, vilâyet geldi — ve valinin masasındaki yetkilerin bir kısmı bir meclise dağıldı.",
  metin:"■ ESKİ DÜZEN: EYALET\n"
    +"Klasik düzende en büyük taşra birimi beylerbeyinin idaresindeki eyaletti. Eyalet sancaklara ayrılır, sancaklar sancak beylerince yönetilir, askerî güç büyük ölçüde tımar sistemiyle karşılanırdı. Tımar dağıtılmayan dokuz eyalette (salyâneli eyaletler) vergi doğrudan hazine için toplanırdı. Beylerbeyi hem askerî hem idarî başkandı; yetki tek elde toplanmıştı.\n\n"
    +"■ TANZİMAT'IN İLK DARBESİ: MALİYE AYRILDI\n"
    +"1839'da Tanzimat'ın ilânıyla eyaletlerdeki malî işler, validen alınıp bağımsız muhassılların sorumluluğuna verildi. Yani vali önce parayı kaybetti.\n\n"
    +"■ YENİ DÜZEN: VİLÂYET\n"
    +"1864'te eyalet sisteminin yerine vilâyetler teşekkül etti. Yeni düzenin iki belirleyici özelliği vardır: valinin sorumluluğunu paylaşan idare meclisleri kurulması ve taşra birimlerinin sınırlarının küçültülmesi. İkisi birlikte, tek elde toplanmış taşra iktidarını hem yatay olarak (meclis) hem coğrafî olarak (küçülen birim) bölmüştür.\n\n"
    +"■ NE KALDIRILDI, NE GELDİ — ÖZET\n"
    +"• Kaldırılan: beylerbeyi-merkezli tek elden idare, geniş eyalet sınırları, askerî-idarî yetkinin aynı makamda toplanması.\n"
    +"• Gelen: daha küçük idarî birim, valinin yanında karar sürecine katılan meclis, malî işlerin ayrı bir kolda yürütülmesi.\n\n"
    +"■ ÖLÇÜLEMEYEN\n"
    +"Yeni düzenin sahada nasıl işlediği — meclislerin gerçekte ne kadar karar ürettiği — bu kartın dayandığı maddede ölçülmemiştir; kart yalnız hukukî çerçevenin değişimini anlatır.",
  kesinlik:"kesin",
  olay:["1864-11-08|Vilâyet"],
  kaynak:"TDV: eyalet (Halil İnalcık) · vilayet maddesi gövdesizdir (bk. EYALET, VALİ)" },

// ── H-0016 · Yeni Osmanlılar ──────────────────────────────────────────────
{ id:"kimdir-yeni-osmanlilar-cemiyeti", tur:"kimdir",
  kisa:"Bir muhalefet hareketi düşünün: üyelerinin kim olduğu, hatta ortak bir fikirlerinin bulunup bulunmadığı bile tartışmalı — ama on yıl sonra anayasa onların diliyle yazıldı.",
  metin:"■ KİMLER\n"
    +"Yeni Osmanlılar, 1865-1876 arasında Osmanlı aydınlarının idareye karşı oluşturduğu muhalif topluluktur. En çok anılan adlar Nâmık Kemal, Ziyâ Bey (Paşa) ve Ali Suâvi'dir. Kaynağın kendi ihtiyat kaydı önemlidir: üyelikleri ileri sürülenler arasında birleşmiş tek bir fikir ve gaye yoktu — yani hareket bir parti değil, gevşek bir çevredir.\n\n"
    +"■ KURULUŞ: TARİH DE TARTIŞMALI\n"
    +"Topluluğun teşekkülü genellikle 1865'e götürülür. Buna karşılık Kaya Bilgegil'in tesbitine göre asıl cemiyet (Genç Türkiye) 30 Ağustos 1867'de Baden-Baden'de, on üç maddelik bir nizamnâme ile kurulmuştur. İki tarih iki ayrı şeyi işaret eder: İstanbul'daki gizli çevrenin doğuşu ile sürgündeki örgütün resmen kuruluşu.\n\n"
    +"■ NE İSTİYORLARDI\n"
    +"Program, Mustafa Fâzıl Paşa'nın Sultan Abdülaziz'e yazdığı açık mektupta çerçevelenmişti: meşrutî idare, halkı temsil eden bir meclis (şûrâ-yı ümmet) ve hürriyet. Yani istedikleri şey saltanatın kaldırılması değil, saltanatın bir metne ve bir meclise bağlanmasıydı.\n\n"
    +"■ SİLAHLARI: GAZETE\n"
    +"Hareketin asıl gücü matbuattı. Muhbir 31 Ağustos 1867'de Londra'da çıkmaya başladı; Hürriyet 1868-1870 arasında Londra ve Cenevre'de yayımlandı. Sürgündeki muhalefetin İstanbul'a ulaşma yolu bu gazetelerdi.\n\n"
    +"■ SONU VE MİRASI\n"
    +"Topluluk nisbeten çabuk dağıldı. Buna rağmen 1876 Kanûn-ı Esâsî'si üzerinde etkili oldu ve kendisinden sonraki Jön Türk hareketine ilham verdi. Adlandırma da buradan gelir: Genç Osmanlılar ile Yeni Osmanlılar aynı topluluğu anlatır; Jön Türkler ise onları takip eden sonraki kuşağın adıdır.",
  kesinlik:"tartismali",
  olay:["1867-08-30|Yeni Osmanlılar"],
  kaynak:"TDV: yeni-osmanlilar-cemiyeti (Kaya Bilgegil'in Baden-Baden tesbiti madde içinde aktarılmaktadır) · ali-suavi (Abdullah Uçman)" },

// ── H-0018 · Şûrâ-yı Devlet ───────────────────────────────────────────────
{ id:"teknik-sura-yi-devlet-1868-idari-yargi", tur:"teknik-bilimsel",
  kisa:"1868'de tek bir meclis ikiye bölündü — ve Osmanlı idaresi ilk defa “idarî iş” ile “yargı işi”ni iki ayrı kapıya gönderdi.",
  metin:"■ BÖLÜNME\n"
    +"5 Mart 1868 tarihli irade ile Meclis-i Ahkâm-ı Adliyye ikiye ayrıldı: idarî tarafı Şûrâ-yı Devlet, yargı tarafı Dîvân-ı Ahkâm-ı Adliyye oldu. Şûrâ-yı Devlet'in başına Midhat Paşa, Dîvân'ın başına Ahmed Cevdet Paşa getirildi. Şûrâ-yı Devlet 10 Mayıs 1868'de açıldı; dahilî nizamnâmesi 1 Nisan 1868'de yürürlüğe girmişti.\n\n"
    +"■ NE İŞ YAPARDI\n"
    +"Başlangıçta beş daireye ayrılan kurul kanun ve nizamnâme tasarılarını hazırlar, idarî işleri inceler, idare ile yargı mensupları arasındaki uyuşmazlıkları çözer, memurlarla ilgili işleri görürdü. Bugünkü dille söylenirse hem bir kanun hazırlama kurulu hem bir idarî yargı merciiydi.\n\n"
    +"■ BUGÜNE UZANAN ÇİZGİ\n"
    +"Kurum 1938'de Devlet Şûrası, 1940'ların başında Danıştay adını aldı. Yani Danıştay'ın kuruluş tarihi olarak 10 Mayıs 1868'in anılması, kurumsal çizginin kesintisiz sayılmasındandır.\n\n"
    +"■ AYNI DÖNEMİN ÖTEKİ KURUMLARI — NEREYE KADAR ÖLÇÜLEBİLDİ\n"
    +"Şûrâ-yı Devlet'in doğduğu bölünme, Dîvân-ı Ahkâm-ı Adliyye'nin de doğum belgesidir: yüksek yargı ile idarenin ayrılması aynı iradeyle olmuştur. Buna karşılık Dîvân-ı Muhâsebât'ın kuruluş tarihi ve yetkileri, taranan ansiklopedi maddeleri arasında müstakil bir madde olarak bulunamadı — bu kartta o kurum hakkında hüküm verilmemiştir. Anayasa mahkemesi türünden bir denetim mercii ise Osmanlı kurumsal düzeninde bu tarihlerde mevcut değildir; Kanûn-ı Esâsî'nin denetim düzeni meclis ve padişah yetkileri üzerinden kurulmuştur.",
  kesinlik:"kesin",
  olay:["1868-05-10|Şûrâ"],
  kaynak:"TDV: sura-yi-devlet (Ali Akyıldız) · divan-i-muhasebat müstakil madde olarak bulunamadı" },

// ── H-0019 · Galatasaray Mekteb-i Sultânîsi ───────────────────────────────
{ id:"teknik-galatasaray-mekteb-i-sultanisi-1868", tur:"teknik-bilimsel",
  kisa:"Fransızca öğretim yapan bir devlet lisesine en sert itiraz ulemâdan değil, Papa'dan ve Rum cemaatinden geldi.",
  metin:"■ AÇILIŞ\n"
    +"Mekteb-i Sultânî 1 Eylül 1868'de törenle öğretime başladı; Beyoğlu'ndaki Galata Sarayı binasına yerleşti. Öğretim büyük ölçüde Fransızca yapılacak, bazı dersler Osmanlı tarafının ısrarıyla Türkçe okutulacaktı.\n\n"
    +"■ FRANSA'NIN ROLÜ\n"
    +"Mektebin kurulmasında Fransa'nın payı belirleyicidir: Fransız Maarif Nâzırı Victor Duruy kurulacak lisenin programını dahi hazırlamış ve İstanbul'a göndermişti.\n\n"
    +"■ İLK YIL: 409 ÖĞRENCİ\n"
    +"Öğretime başlandığı tarihte toplam 409 öğrencinin 172'si müslüman, 237'si gayri müslimdi. Gayri müslim kısmın dağılımı cemaat cemaat verilir: 58 Gregoryen Ermeni, 31 Katolik Ermeni, 26 Katolik Latin, 41 Rum, 47 Yahudi, 34 Bulgar. Mart 1870'e gelindiğinde mevcut 640'a çıkmıştı: 273 müslüman, 367 gayri müslim.\n\n"
    +"■ İTİRAZLAR — BEKLENEN YERDEN GELMEDİ\n"
    +"• Rumlar, Rumca'nın programdan çıkarılmasına itiraz etti.\n"
    +"• Papalık Katolik öğrencilerin mektebe girmesini yasakladı; yasak Fransa'nın araya girmesiyle sonradan kalktı.\n"
    +"• Yahudi cemaati, çocuklarını hıristiyan idaresi altındaki bir mektebe göndermekte tereddüt etti.\n"
    +"• Buna karşılık kaynağın özellikle dikkat çektiği nokta şudur: Osmanlı ulemâsından, müslüman çocuklarının okula verilmesi konusunda herhangi bir muhalefet gelmemiştir.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Mektep, devlet kadrolarına — özellikle Hariciye'ye — Batı dili bilen memur yetiştiren ana kanallardan biri oldu. Osmanlı modernleşmesinde okul, kanun kadar belirleyici bir araçtır: bir nesil sonrasının kadrosu bu sıralarda kurulur.",
  kesinlik:"kesin",
  olay:["1868-09-01|Galatasaray"],
  kaynak:"TDV: galatasaray-mekteb-i-sultanisi (Adnan Şişman)" },

// ── H-0021 · Bulgar Eksarhlığı ────────────────────────────────────────────
{ id:"teknik-bulgar-eksarhligi-1870-kilise-ve-kimlik", tur:"teknik-bilimsel",
  kisa:"Bir kilisenin ayrılması niçin bir devlet meselesi sayıldı? Çünkü Osmanlı düzeninde cemaat, kilisenin çizdiği sınırdı.",
  metin:"■ NE OLDU\n"
    +"11 Mart 1870 tarihinde müstakil Bulgar kilisesi kuruldu. Bu, Bulgarları dinî bakımdan Fener Rum Ortodoks Patrikhânesi'nin idaresinden çıkaran bir düzenlemeydi.\n\n"
    +"■ TARİHTE BİR FARK VAR — İKİSİ DE YAZILIYOR\n"
    +"Aynı olay için iki tarih kaydedilmiştir: bir maddede 11 Mart 1870, başka bir maddede 28 Şubat 1870. Aradaki on bir günlük fark, dönemin Rûmî ve Milâdî takvimleri arasındaki farkla uyumludur; ancak maddeler bunu açıkça söylemediği için burada iki tarih de olduğu gibi bırakılmış, biri ötekinden türetilmemiştir.\n\n"
    +"■ NİÇİN KİLİSE MESELESİ BİR KİMLİK MESELESİDİR\n"
    +"Osmanlı düzeninde gayri müslim tebaa cemaatler hâlinde örgütlenirdi ve cemaatin sınırını mezhep-kilise çizerdi. Ortodoks tebaanın dinî idaresi Fener Patrikhânesi'nde toplandığı için, Bulgar köylüsü resmî düzende Rum patrikhânesine bağlı bir ortodokstu. Ayrı kilise, ayrı okul ve ayrı kilise dili demektir; ayrı okul ve dil ise bir sonraki kuşakta ayrı bir millî kimliğin kurumsal zeminidir. Bu yüzden 1870, Balkan tarihinde bir din olayından çok bir kimlik dönüm noktası sayılır.\n\n"
    +"■ ARKA PLAN\n"
    +"Kaynak, patrikhânenin Bulgarlar üzerindeki tutumunu ayrışmanın sebepleri arasında sayar: XIX. yüzyıla kadar Türk idaresinden şikâyetçi olmayan Bulgarlar arasında isyan komitelerinin kurulmasında bu istismarın payı olduğu belirtilir. Yani ayrışmanın ilk ekseni Osmanlı-Bulgar değil, Rum-Bulgar eksenidir.\n\n"
    +"■ ÖLÇÜLEMEYEN\n"
    +"Patrikhânenin 1872'de Bulgar kilisesini aforoz etmesine dair açık bir cümle taranan maddede bulunamadı; bu kart o adımı anlatmaz.",
  kesinlik:"kesin",
  olay:["1870-03-11|Eksarhlığı"],
  kaynak:"TDV: bulgaristan (Nazif Kuyucuklu) · makedonya maddesi aynı olayı 28 Şubat 1870 diye verir (çelişki kartta bırakıldı)" },

// ── H-0030 · Kanûn-ı Esâsî ────────────────────────────────────────────────
{ id:"teknik-kanun-i-esasi-1876-sistem", tur:"teknik-bilimsel",
  kisa:"Osmanlı'nın ilk anayasası meclisi kurdu, ama padişahın istediğini sürgüne gönderme yetkisini de aynı metne yazdı.",
  metin:"■ NASIL HAZIRLANDI\n"
    +"Metin, Midhat Paşa'nın başkanlığındaki bir mahsus komisyonda — ulemâ, asker ve bürokratlardan kurulu bir heyette — kademe kademe hazırlandı; Batı anayasalarından yararlanıldı. 23 Aralık 1876'da ilân edildi. On iki başlık altında 119 madde taşır.\n\n"
    +"■ SİSTEM NE ÖNGÖRÜYORDU\n"
    +"• Saltanat ve hilâfet, Osmanlı hanedanının en yaşlı erkek üyesine aittir.\n"
    +"• Padişaha geniş yetkiler tanınır: diplomasi ve ordunun başkumandanlığı da bunlar arasındadır.\n"
    +"• Yasama için iki kanatlı bir Meclis-i Umûmî kurulur: seçimle gelen Heyet-i Meb'ûsan ve padişahça tayin edilen Heyet-i Âyân.\n"
    +"Yani sistem parlamenter bir rejim değil, meclisli bir monarşidir: meclis vardır, ama hükûmet meclise değil padişaha karşı sorumludur.\n\n"
    +"■ 113. MADDE\n"
    +"Anayasanın en çok tartışılan hükmü, devlet güvenliği için tehlikeli görülen kişileri sürgüne gönderme yetkisini padişaha veren 113. maddedir. Nâmık Kemal ve Ziyâ Paşa gibi isimler bu maddeyi daha o gün sert biçimde eleştirmiştir. Meşrutiyeti isteyen kadronun sürgün yetkisiyle dağıtılması, bu maddenin nasıl işlediğini gösterir.\n\n"
    +"■ MECLİSİN ÖMRÜ\n"
    +"Meclis 1877 Martında çalışmaya başladı ve 1878'de dağıtıldı; anayasa otuz yıl askıda kaldı. 1908'de II. Meşrutiyet'in ilânıyla yeniden yürürlüğe girdi. Asıl dönüşüm 1909 tadilâtıyla geldi: padişahın yetkileri belirgin biçimde daraltıldı ve hükûmet meclise karşı sorumlu hâle getirildi — yani 1876'da kurulan meclisli monarşi, ancak 1909'da parlamenter sisteme yaklaştı.\n\n"
    +"■ OKURKEN\n"
    +"1876 metnini “anayasa var, demek ki iktidar sınırlı” diye okumak yanıltıcıdır. Sınırlamanın ölçüsü metnin varlığında değil, yürütmeyi kimin denetlediğindedir; bu ölçüyle bakınca 1876 ile 1909 iki ayrı rejimdir.",
  kesinlik:"kesin",
  olay:["1876-12-23|Kanûn"],
  kaynak:"TDV: kanun-i-esasi" },

// ── H-0039 · Ali Suâvi ve Çırağan Baskını ─────────────────────────────────
{ id:"kimdir-ali-suavi-ve-ciragan-baskini", tur:"kimdir",
  kisa:"Gazeteci, hoca, sürgün, mektep müdürü — ve bir sabah iki yüz elli kişiyle saray basan adam. Ali Suâvi'nin sonu, başladığı yerden çok uzaktı.",
  metin:"■ KİMDİ\n"
    +"Ali Suâvi (1839-1878) gazeteci, fikir adamı ve Yeni Osmanlılar Cemiyeti üyesiydi; ilk Türkçülerden sayılır. İstibdat yerine meşveret ve meclis fikrini savundu, İslâm birliğine bağlıydı, Türkçenin sadeleşmesini istedi. Muhbir'de yazdı, Ulûm gazetesini çıkardı. Kendi ifadesiyle dili bozmuş ve memlekete matbuat hürriyetini sokmuştu.\n\n"
    +"■ 20 MAYIS 1878 — ÇIRAĞAN\n"
    +"Ali Suâvi, çoğu Balkan muhaciri olan yaklaşık 250 kişiyle Çırağan Sarayı'nı basmaya kalkıştı. Görünen amacı, tahttan indirilmiş V. Murad'ı yeniden padişah yapmaktı. Baskın, hazırlıksız bir kalabalığın saray muhafızlarıyla karşılaşmasıyla kısa sürede dağıldı.\n\n"
    +"■ NASIL ÖLDÜ\n"
    +"Ali Suâvi, Beşiktaş karakol zâbiti Hasan Ağa'nın sopayla başına vurması sonucu öldürüldü. Halk hafızasında bu kişi “Yedi Sekiz Hasan Paşa” lakabıyla anılır ve hikâye o lakapla anlatılagelir; ancak bu lakabı taşıyan müstakil bir ansiklopedi maddesi bulunamadı — bu kartta anlatılan, kaynakta yazılı olan kısmıdır: öldüren kişi karakol zâbitidir ve öldürme sopayla, baskın sırasında olmuştur.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Çırağan Baskını, meşrutiyet muhalefetinin fikir alanından eylem alanına taştığı ender anlardan biridir ve sonucu ağır olmuştur: hadise, 1878'de meclisin tatil edildiği ve muhalefetin dağıtıldığı ortamda idarenin elini güçlendirmiş, V. Murad'ı tahta döndürme ihtimalini fiilen kapatmıştır.",
  kesinlik:"kesin",
  olay:["1878-05-20|Çırağan"],
  kaynak:"TDV: ali-suavi (Abdullah Uçman) · yeni-osmanlilar-cemiyeti · “Yedi Sekiz Hasan Paşa” müstakil maddesi bulunamadı" },

// ── H-0006 · Kuleli Vak'ası ───────────────────────────────────────────────
{ id:"sebep-sonuc-kuleli-vakasi-1859", tur:"sebep-sonuc",
  kisa:"Osmanlı tarihinde bir padişaha karşı kurulan ilk gizli cemiyet, camide bir baskınla dağıtıldı — ve idam kararları infaz edilmedi.",
  metin:"■ NE OLDU\n"
    +"Abdülmecid'in padişahlığına son vermeyi amaçlayan gizli bir cemiyet, 14 Eylül 1859'da Kılıç Ali Paşa Camii'ndeki toplantısı basılarak yakalandı. İhbarı Mirlivâ Hasan Paşa yapmıştı. Cemiyetin başında Bâb-ı Seraskerî Dâr-ı Şûrâ Reisi Hüseyin Dâim Paşa ve Arnavut Câferdem Paşa gibi askerî ve mülkî görevliler bulunuyordu; şair Şinâsi'nin de üye olduğu belirtilir. Sanıklar Kuleli Kışlası'nda yargılandığı için olay bu adla anılır.\n\n"
    +"■ NİÇİN — ÜÇ AYRI HOŞNUTSUZLUK BİRLEŞTİ\n"
    +"Hareketin arkasında tek bir sebep yoktur; üç ayrı memnuniyetsizlik aynı masada buluşmuştur:\n"
    +"• Tanzimat uygulamalarından duyulan hoşnutsuzluk,\n"
    +"• Kırım Savaşı sonrasının malî sıkıntısı — savaşı kazanan devlet borçlanmış bir devletti,\n"
    +"• 1856 Islahat Fermanı ile gayri müslimlere tanınan haklardan rahatsız olan çevrelerin tepkisi.\n"
    +"Yani ferman ile darbe girişimi arasındaki mesafe üç yıldır: bir reform metninin toplumsal karşılığı, ilân edildiği günde değil birkaç yıl içinde ölçülür.\n\n"
    +"■ CEZALAR\n"
    +"Kurucu üyeler idama mahkûm edildi, ancak cezalar müebbet kalebendliğe çevrildi. Câferdem Paşa intihar etti.\n\n"
    +"■ OSMANLI'DA BAŞARISIZ GİRİŞİMLER NİÇİN ÖNEMLİ\n"
    +"Başarısız bir teşebbüs, başarılı olandan daha çok şey anlatır: kimin rahatsız olduğunu, hangi gerekçenin kalabalık toplayabildiğini ve devletin bu rahatsızlığı nasıl cezalandırmayı seçtiğini gösterir. Buradaki cezanın idamdan kalebendliğe çevrilmesi, Tanzimat devletinin muhalefetle ilişkisinde belirgin bir üslûp farkıdır.",
  kesinlik:"kesin",
  olay:["1859-09-14|Kuleli"],
  kaynak:"TDV: kuleli-vakasi (Zekeriya Türkmen) · islahat-fermani (Ufuk Gülsoy)" },

// ── H-0055 · Kıbrıs'ın İngiliz idaresine bırakılması ──────────────────────
{ id:"tartisma-kibris-1878-beklenen-ingiliz-destegi", tur:"tartisma",
  kisa:"Bir ada, bir ittifak vaadi karşılığında verildi. Vaat tutuldu mu? Cevabı aramak için dört yıl beklemek yeterli.",
  metin:"■ ANLAŞMA NE DİYORDU\n"
    +"4 Haziran 1878 tarihli Kıbrıs Antlaşması'nda İngiltere, Anadolu'ya yönelik muhtemel bir Rus istilâsına karşı Osmanlı Devleti ile savunma ittifakı yapacağı teminatını verdi. Buna karşılık ada İngiliz idaresine bırakıldı. Düzenleme adayı devretmek değil, idaresini vermek biçiminde kuruldu: idarî masraflar çıktıktan sonra gelir fazlası Osmanlı'ya ödenecek, şer'î mahkemeler çalışmaya devam edecek, dinî vakıflar ortak yönetilecekti.\n\n"
    +"■ TARTIŞMANIN İKİ TARAFI\n"
    +"Lehte okuma: 93 Harbi'nin hemen ardından, Rusya'nın Anadolu'ya inmesi somut bir ihtimalken, büyük bir devleti savunma taahhüdüyle bağlamak Osmanlı diplomasisi için elde edilebilecek en iyi şeydi; Berlin masasında Osmanlı'nın yalnız kalmamasında bu yakınlaşmanın payı vardır.\n"
    +"Aleyhte okuma: taahhüt hiçbir zaman fiilen işletilmedi; buna karşılık ada bir daha geri gelmedi. Antlaşmadan dört yıl sonra aynı devlet Mısır'a asker çıkardı, 5 Kasım 1914'te de Kıbrıs'ı resmen ilhak etti. Lozan'da Türkiye adanın İngiliz idaresindeki durumunu kabul etti.\n\n"
    +"■ ÖLÇÜLEBİLEN\n"
    +"Bu tartışmada taraf tutmadan söylenebilecek olan şudur: antlaşmanın Osmanlı'ya vaat ettiği şey bir toprak değil bir GÜVENCEydi, ve güvencenin işlediğine dair bir vaka bu kartın dayandığı maddede gösterilmemiştir. Adanın kaybı ise ölçülebilir ve kesindir. Bir diplomasi hamlesini değerlendirirken sorulacak soru budur: elden çıkan somut, karşılığında alınan şarta bağlıdır.\n\n"
    +"■ ÖLÇÜLEMEYEN\n"
    +"Antlaşmanın Osmanlı'ya beklenen desteği sağlayıp sağlamadığına dair açık bir değerlendirme taranan maddede bulunamadı; yukarıdaki iki okuma, maddedeki tarihlerin karşılaştırılmasıyla kurulmuştur.",
  kesinlik:"tartismali",
  olay:["1878-06-04|Kıbrıs"],
  kaynak:"TDV: kibris (İngiliz İşgali ve İdaresi bölümü, Halil Fikret Alasya) · lozan-antlasmasi (Şerafettin Turan)" },

// ── H-0061 · İskenderiye'nin bombardımanı ve İngiliz çıkarması ────────────
{ id:"sebep-sonuc-iskenderiye-1882-ingiliz-cikarmasi", tur:"sebep-sonuc",
  kisa:"Bir donanmanın limanda tehlikede olduğu gerekçesi, yetmiş yıl sürecek bir işgalin başlangıcı oldu.",
  metin:"■ ARKA PLAN: URÂBÎ HAREKETİ\n"
    +"Mısır'da yerli subaylar, Çerkez-Türk kökenli subayların kendilerine komplo kurduğu inancıyla huzursuzdu; maaş kesintileri ve görevden uzaklaştırmalar bu huzursuzluğu büyüttü. Hareketin başında Ahmed Urâbî (1841-1911) vardı. Mısır'ın yabancı malî denetim altına girdiği bir dönemde, ordu kaynaklı bu hareket ülke yönetiminde ağırlık kazandı.\n\n"
    +"■ GEREKÇE: LİMANDAKİ DONANMA\n"
    +"İngiltere, limandaki donanmanın tehlike altında bulunduğunu bahane ederek 11-12 Temmuz 1882'de İskenderiye istihkâmlarını topa tuttu. Bombardımanı 15 Temmuz'da çıkarma izledi. Yani müdahalenin ilân edilen sebebi bir toprak talebi değil, bir güvenlik gerekçesiydi — işgalin hukukî kılıfı budur.\n\n"
    +"■ OSMANLI NE YAPTI\n"
    +"Osmanlı Devleti önce arabuluculuk yolunu denedi ve Derviş Paşa'yı Mısır'a gönderdi. 6 Eylül 1882'de II. Abdülhamid Urâbî'yi âsi ilân etti. Bir hafta sonra, 13 Eylül'de Mısır ordusu Tellülkebîr mevkiinde İngiliz ordusu karşısında ağır bir yenilgiye uğradı ve ülke fiilen İngiliz işgaline girdi. Sıralama önemlidir: âsi ilânı yenilgiden ÖNCEdir — yani Osmanlı, İngiltere'nin karşısındaki direnişi kendi tebaası saymamayı seçmiştir.\n\n"
    +"■ HUKUKEN NE ZAMAN ÇIKTI\n"
    +"1882'deki işgal, Mısır'ın hukukî bağını hemen koparmadı; ülke uzun süre kâğıt üzerinde Osmanlı'ya bağlı kaldı. Osmanlı/Türkiye'nin Mısır ve Sudan üzerindeki haklarından vazgeçmesi 1923 Lozan Antlaşması'nda düzenlenmiştir (17. madde). Taranan maddelerde bu tanımanın hangi tarihten itibaren geçerli sayıldığı açıkça yazılmadığı için burada gün verilmemiştir.\n\n"
    +"■ OKURKEN\n"
    +"Fiilî hâkimiyet ile hukukî hâkimiyetin ayrı şeyler olduğu buradan görülür: bir ülkenin haritada hangi renge boyanacağı sorusu, oranın kimin askeriyle yönetildiği sorusundan farklıdır — ve ikisi kırk yıl boyunca farklı cevaplar verebilir.",
  kesinlik:"kesin",
  olay:["1882-07-11|İskenderiye"],
  kaynak:"TDV: urabi-pasa (Hilal Görgün) · lozan-antlasmasi (Şerafettin Turan)" },

// ── H-0062 · İngiltere dost muydu düşman mıydı ────────────────────────────
{ id:"tartisma-ingiltere-dost-mu-dusman-mi-1856-1882", tur:"tartisma",
  kisa:"Yirmi altı yılda aynı devlet önce Osmanlı'nın yanında savaştı, sonra bir adasını aldı, sonra bir eyaletine asker çıkardı. Bu üçü çelişki mi, tek bir siyaset mi?",
  metin:"■ ÜÇ TARİH, TEK DEVLET\n"
    +"• 1853-56: Kırım Savaşı'nda İngiltere ve Fransa, Rusya'ya karşı Osmanlı'nın yanında savaşır; savaşın sonunda Osmanlı Paris'te Avrupa devletler sistemine kabul edilir.\n"
    +"• 4 Haziran 1878: Rus tehdidine karşı savunma ittifakı teminatı karşılığında Kıbrıs'ın idaresi İngiltere'ye bırakılır.\n"
    +"• 11-12 Temmuz 1882: İngiltere, limandaki donanmasının tehlikede olduğunu ileri sürerek İskenderiye'yi bombalar; 15 Temmuz'da çıkarma yapar ve Mısır işgal edilir.\n\n"
    +"■ BİRİNCİ OKUMA — ÇELİŞKİ DEĞİL, TUTARLILIK\n"
    +"Bu üç hamle aynı hedefin üç aracı sayılabilir: Rusya'nın Akdeniz'e ve Hindistan yoluna inmesini engellemek. Osmanlı'nın ayakta kalması bu hedefe hizmet ettiği sürece desteklenmiş; ayakta kalamayacağı düşünülen yerlerde ise boşluğun Rusya ya da Fransa yerine İngiltere tarafından doldurulması tercih edilmiştir. Bu okumaya göre İngiltere hiçbir zaman dost ya da düşman değildi; kendi menfaatinin hesabını yapan bir devletti ve hesabı değişince davranışı da değişti.\n\n"
    +"■ İKİNCİ OKUMA — MÜTTEFİKLİK BİR PARAVANDI\n"
    +"Karşı okuma, ittifakın en başından beri bir nüfuz aracı olduğunu söyler: birlikte savaşılan devletin toprağı, savaşın üstünden yirmi yıl geçmeden pazarlık konusu olmuştur. Kıbrıs bir teminat karşılığı alınmış, teminatın işletildiği bir vaka gösterilememiştir; Mısır ise bir bahaneyle işgal edilmiştir — hem de aynı yıllarda.\n\n"
    +"■ OSMANLI NİÇİN SES ÇIKARAMADI\n"
    +"Mısır'da Osmanlı'nın tercihi, İngiltere'ye karşı durmak değil arabuluculuk denemek ve ardından direnen tarafı âsi ilân etmek oldu. Bunun ölçülebilir sebebi vardır: 93 Harbi'nden dört yıl sonraki devlet, iki cephede yenilmiş, Berlin'de toprak kaybetmiş ve ağır borç altındaki bir devlettir. Bir devletin tepkisinin ölçüsü, öfkesi değil ordusu ve hazinesidir.\n\n"
    +"■ AYNI SORUNUN CEVAPLANMAYAN TARAFI\n"
    +"Bu kart, Fransa'nın Cezayir (1830) ve Tunus (1881) üzerindeki hamlelerini ölçmemiştir; oradaki hükmü vermek için o başlıkların kendi kaynakları okunmalıdır. Burada yalnız İngiltere ekseni, kaynağı gösterilebilen üç tarih üzerinden tartılmıştır.",
  kesinlik:"tartismali",
  olay:["1882-07-11|İskenderiye"],
  kaynak:"TDV: urabi-pasa (Hilal Görgün) · kibris (Halil Fikret Alasya) · islahat-fermani (Ufuk Gülsoy) — Cezayir ve Tunus ekseni ÖLÇÜLMEDİ" },

// ── H-0056 · Ayastefanos ile Berlin arasındaki fark ───────────────────────
{ id:"antlasma-ayastefanos-berlin-farki-1878", tur:"antlasma",
  kisa:"Aynı savaşın iki antlaşması var: biri dört ay yaşadı, öteki kırk yıl sürdü. Aradaki fark, Osmanlı'nın kazandığı bir şey değil, Avrupa'nın kabul etmediği bir şeydi.",
  metin:"■ İKİ METİN, DÖRT AY ARA\n"
    +"93 Harbi'ni bitiren ilk metin 3 Mart 1878 tarihli Ayastefanos Antlaşması'dır. Antlaşma yürürlükte kalmadı: büyük devletlerin itirazı üzerine masa yeniden kuruldu ve 13 Temmuz 1878'de Berlin Antlaşması imzalandı. Yürürlükte olan metin Berlin'dir; Ayastefanos, Rusya'nın tek başına dayattığı ve Avrupa'nın kabul etmediği tasarı olarak kalmıştır.\n\n"
    +"■ ASIL FARK: BULGARİSTAN\n"
    +"Ayastefanos'un kurduğu Bulgaristan, Ege'ye uzanan geniş bir devletti. Berlin'de bu topraklar üç bölgeye ayrıldı; Makedonya ıslahat şartıyla Osmanlı'da kaldı. Rusya'nın Balkanlar üzerinden Akdeniz'e açılmasını engelleyen düzenleme budur — yani Berlin, Osmanlı'ya duyulan bir sempatiden değil, Rusya'nın tek başına kazanmasına duyulan itirazdan doğmuştur.\n\n"
    +"■ BERLİN'İN ÖTEKİ HÜKÜMLERİ\n"
    +"• Bosna ve Hersek Avusturya tarafından işgal edilecekti — metin işgal ve idare düzenler, ilhak değil. (İlhak otuz yıl sonra, 1908'de gelecektir.)\n"
    +"• Sırbistan'ın bağımsızlığı tanındı, kendisine Niş ve Pirot verildi.\n"
    +"• Karadağ'ın bağımsızlığı kabul edildi, sınırlarında düzenleme yapıldı.\n"
    +"• Romanya'nın bağımsızlığı kabul edildi.\n"
    +"• Osmanlı Devleti, Kars, Ardahan ve Batum'u harp tazminatının bir kısmına karşılık Rusya'ya bıraktı.\n\n"
    +"■ HARİTADA OKUMANIN DOĞRU YOLU\n"
    +"Bir yerin rengi ile hukukî durumu 1878'den sonra Balkanlarda sık sık ayrışır. Bosna-Hersek 1878'de işgal edilmiş, ama hukuken Osmanlı toprağı sayılmaya devam etmiştir; bağımsızlığı tanınan devletlerin sınırları ise antlaşma metniyle çizilmiştir. Bu yüzden 1878 sonrası bir haritaya bakarken sorulacak soru ikidir: burayı kim yönetiyor, ve burası kimin sayılıyor.\n\n"
    +"■ ÖLÇÜLEMEYEN\n"
    +"Yenipazar sancağı için Berlin'de kararlaştırılan düzenlemeye dair açık bir cümle taranan maddede bulunamadı; bu kart o sancak hakkında hüküm vermez.",
  kesinlik:"kesin",
  olay:["1878-07-13|Berlin"],
  kaynak:"TDV: berlin-antlasmasi (Ali İhsan Gencer)" },

];

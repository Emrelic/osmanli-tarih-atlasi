// ============================================================================
// EK OKUMA — ANTLAŞMA HÜKÜMLERİ + ÖNEM + SEBEP-SONUÇ, dalga 4 (5 kart)
// ============================================================================
// Yazan: P12-EKOKUMA · 14 Eylül 2026 · paket 0045 H-0009 · 0048 H-0015
// Koordinatör: 1.MURAT · rapor: denetim/P12-EKOKUMA-0914.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_ANTLASMA3 tanımlar.
//    YÜKLEYİCİ: `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_antlasma3" satırı
//    koordinatör/arayüz oturumunca eklenecek — bu oturum js/ dosyasına dokunmadı.
//
// KAPSAM: PAKET-EK2-0913 §3 "HİÇ KART YOK — öncelik" listesinden Sevr · Mudanya ·
//   Uşi, "S-S var, hüküm yok" listesinden Lozan. Kasr-ı Şirin YAZILMADI
//   (ekokuma_kasrisirin.js + ekokuma_antlasma2.js'te var).
//
// KAYNAK YÖNTEMİ (14 Eylül 2026, gövdeler çekildi ve OKUNDU):
//   TDV 200: sevr-antlasmasi · mudanya-mutarekesi · lozan-antlasmasi · trablusgarp
//   TDV 302 (ÖLÜ): usi-antlasmasi · brest-litovsk-antlasmasi · kars-antlasmasi ·
//            gumru-antlasmasi · moskova-antlasmasi
//   🔴 CANLI AMA YANLIŞ MADDE (§4②): `usi` → ÛŞÎ (XII. yy kelâm âlimi) ·
//            `londra-antlasmasi` → 1840 Londra mukavelenâmesi (1913 DEĞİL)
// Metinler KOPYALANMADI, özetlendi. Hiçbir tarih atlasın verisinden alınmadı.
//
// ŞEMA: ekokuma_antlasma2.js ile aynı —
//   tur:"antlasma"     id · tur · olay · metin · kesinlik · kaynak
//   tur:"sebep-sonuc"  id · tur · kisa · sebep{b,t} · sonuc{b,t} · bag · metin ·
//                      kesinlik · zincir · olay   (bag = ÖNEMİ)
// `zincir:[]` bilerek boş. `ic_not` çizilmez.
// ============================================================================
window.EKOKUMA_ANTLASMA3 = [

// ── 1912 UŞİ ───────────────────────────────────────────────────────────────
{ id:"sebep-sonuc-usi-1912", tur:"sebep-sonuc",
  kisa:"Afrika'daki son Osmanlı vilâyeti İsviçre'de bir masada bırakıldı; ama savaş orada bitmedi, Ege'deki bedeli ise on bir yıl sonra Lozan'da ödendi.",
  sebep:{ b:"İtalya'nın, Trablusgarp'taki vatandaşlarını koruma gerekçesiyle Osmanlı Devleti'ne savaş açması", t:"1911-09" },
  sonuc:{ b:"Uşi Antlaşması: Osmanlı Devleti Trablusgarp'ı İtalya'ya bıraktığını kabul etti", t:"1912-10-15" },
  bag:"Önemi: Osmanlı Devleti'nin Afrika kıtasındaki son toprağının kaybı. Antlaşmanın yarım kalan ucu Lozan'da kapandı: İtalya'nın Uşi'ye göre boşaltması gereken Rodos ve Oniki Ada onda kaldı, Türkiye de Trablusgarp üzerindeki haklarından resmen vazgeçti.",
  metin:"XIX. yüzyılın ikinci yarısında Afrika'daki sömürgecilik yarışı hızlanınca İtalya'nın Trablusgarp'a ilgisi arttı. TDV'ye göre İtalya, şehirde yaşayan vatandaşlarını Osmanlı hükümetinden koruma bahanesiyle 1911 Eylül'ünde savaş ilân etti ve bu, vilâyetin bir İtalyan kolonisine dönüşmesinin başlangıcı oldu; işgal sırasında şehir nüfusunun önemli bir kısmı yok oldu. 1912'de İsviçre'de, Lozan'daki Uşi'de (Ouchy) imzalanan antlaşmayla Osmanlı Devleti Afrika'daki bu son vilâyetini İtalya'ya terk ettiğini kabul etti; halife ise buradaki Müslüman toplumun dinî önderi sayılmaya devam edecekti. Antlaşma çatışmayı gerçekte bitirmedi: Osmanlı askerleri yerli halkla birlikte direnişi sürdürdü ve 1918 Mondros Mütarekesi'ne kadar ‘Afrika Grupları Komutanlığı’ adıyla İtalya'ya karşı savaştı. Trablusgarp 1943'e kadar İtalyan işgalinde kaldı, ardından İngiliz denetimine girdi ve 1951'de bağımsızlık ilân edildi. Antlaşmanın öteki ucu Ege'deydi: TDV Lozan maddesine göre İtalyanların Uşi Antlaşması ile geri vermeleri gerekirken işgal altında tuttukları Rodos ve Oniki Ada, 1923'te Lozan'ın 15. maddesiyle onlarda bırakıldı; 22. maddeyle de Trablusgarp üzerindeki haklardan vazgeçildi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1911-09","1912-10-15","1912-10-18|Uşi","1918-10-30|Mondros Mütarekesi","1923-07-24|Lozan"],
  kaynak:"TDV: trablusgarp (savaş ilânı, Uşi, halifenin dinî sıfatı, 1918'e kadar direniş) · TDV: lozan-antlasmasi (md. 15 ve 22)",
  ic_not:"🔴 İKİ GÜN ÇELİŞKİSİ, hüküm verilmedi: (a) TDV trablusgarp savaş ilânını '1 Eylül 1911' diye veriyor; kuyrukta kronoloji_italya/kronoloji_kuzeyafrika 1911-09-29 taşıyor, çekirdek olaylar.js '1911-09' — metne yalnız 'Eylül 1911' yazıldı. (b) Uşi imzası: çekirdek olaylar_ek5.js 1912-10-15, kuyruk kronoloji_italya/kuzeyafrika 1912-10-18; TDV trablusgarp yalnız YIL (1912) veriyor ⇒ ölçülemedi. Kart iki güne de bağlandı. TDV `usi` slugu Ûşî adlı kelâmcıya çıkıyor (§4② vakası)." },

// ── 1920 SEVR ──────────────────────────────────────────────────────────────
{ id:"antlasma-sevr-1920", tur:"antlasma",
  olay:["1920-08-10|Sevr"],
  metin:"Sevr Antlaşması 10 Ağustos 1920'de Paris'in banliyösü Sevr'de, Âyan üyesi Hâdi Paşa başkanlığındaki Osmanlı heyeti (Rıza Tevfik ve Bern elçisi Reşad Hâlis beyler) tarafından imzalandı; on iki bölüm ve 433 maddedir. TDV'nin özetlediği başlıca hükümler: ① İstanbul Osmanlı başkenti ve padişahın oturduğu yer olarak kalacaktı; ama azınlık haklarına uyulmazsa müttefikler bu hükmü değiştirme hakkını saklı tuttu ve Osmanlı bunu şimdiden kabul etti (md. 36). ② Istıranca-Çatalca hattının batısındaki bütün haklardan Yunanistan lehine vazgeçildi (md. 84-87). ③ İzmir ile Kırkağaç, Akhisar, Tire, Ödemiş ve Söke kâğıt üzerinde Osmanlı'da kalıp yönetimi Yunanistan'a bırakıldı; Türk egemenliğini bir istihkâma çekilen bayrak temsil edecek, yerel meclise beş yıl sonra Yunanistan'a katılma hakkı tanınacaktı (md. 65-83). ④ Marmara'nın bütün kıyıları — Gelibolu ile Tekirdağ'dan Edremit, Biga, Bursa ve İzmit'e kadar — kâğıt üzerinde Osmanlı'nın kaldı, ama yönetimi uluslararası Boğazlar Komisyonu'na geçti (md. 37-61). ⑤ Kuzey Afrika'da Fas, Tunus ve Libya'dan, ayrıca Mısır, Sudan, Süveyş, Kıbrıs ve öteki Akdeniz adalarından doğan bütün haklardan vazgeçildi (md. 101-122); Hicaz'ın bağımsızlığı (md. 98-100), Irak, Suriye ve Filistin'de manda idaresi (md. 94-97) kabul edildi. ⑥ Güney sınırı Ceyhan'ın denize döküldüğü yerden Osmaniye, Antep, Urfa, Siverek ve Mardin'in kuzeyinden İran sınırına çekildi (md. 27). ⑦ Kürtlerin çoğunlukta olduğu bölge için bir yerel özerklik planı hazırlanacak; bir yıl sonra halkın bağımsızlık istediği kanıtlanır ve Milletler Cemiyeti bunu tavsiye ederse Türkiye uyacaktı (md. 62-64). ⑧ Türkiye Ermenistan'ın bağımsızlığını tanıyacak, sınırın çizilmesini ABD Başkanı Wilson'ın hakemliğine bırakıp onun kararını kabul edecekti (md. 88-93). Bunlara ağır malî, ticarî ve askerî yükümlülükler eklendi: maliyeyi denetleyecek yeni bir komisyon kuruldu, Düyûn-ı Umûmiyye sürdü. TDV'ye göre Ankara hükümeti tanımadığı için antlaşma ‘ölü doğmuş’ bir belge olarak kaldı.",
  kesinlik:"kesin",
  kaynak:"TDV: sevr-antlasmasi (gövde okundu)" },

{ id:"sebep-sonuc-sevr-1920", tur:"sebep-sonuc",
  kisa:"Paylaşım masasında on dokuz ay tartışıldı, İstanbul'a imzalatıldı, hiç uygulanmadı: Sevr'i öldüren şey Anadolu'daki savaştı.",
  sebep:{ b:"Paris Barış Konferansı: galip devletler Osmanlı topraklarının geleceğini tartışmaya başladı", t:"1919-01-18" },
  sonuc:{ b:"Sevr Antlaşması imzalandı — Ankara hükümeti tanımadı ve metin uygulanamadı", t:"1920-08-10" },
  bag:"Önemi: Sevr, Avrupa'nın ‘Şark Meselesi’ne biçtiği çözümün yazılı hâliydi. TDV'ye göre 1923'teki Lozan Antlaşması, Arap mandalarının Sevr'deki dağılımını korurken yeni Türk devletini ilgilendiren bütün meselelerde önemli değişiklikler getirdi.",
  metin:"Konferansın karar organı İngiltere, Fransa, İtalya, ABD ve Japonya'nın başbakan ve dışişleri bakanlarından oluşan Onlar Konseyi'ydi; Osmanlı'dan tamamen ayrılacak bölgeleri — Arabistan, Suriye, Mezopotamya, Filistin, Ermenistan ve İngiliz teklifiyle Kürdistan — belirledi. Müttefikler anlaşamıyordu: Fransa ve İtalya savaş içindeki gizli antlaşmaların uygulanmasını, ABD ise Wilson'ın on ikinci ilkesi uyarınca Türk çoğunluklu bölgelerde Osmanlı'nın sürmesini istiyordu. İngiltere, Fransa ve ABD'nin desteklediği Yunanlılar 15 Mayıs 1919'da İzmir'e çıktı; bu çıkarma Anadolu'daki millî direnişin hızla örgütlenmesine yol açtı. Hint Müslümanlarının halifenin İstanbul'da kalması talebi karşısında İngiliz hükümeti 6 Ocak 1920'de Türkleri Avrupa'dan çıkarma planını reddetti. 16 Mart 1920'de İstanbul resmen işgal edildi; 23 Nisan'da Ankara'da Büyük Millet Meclisi çalışmaya başladı. San Remo'da (18-26 Nisan 1920) metne son şekil verildi ve 11 Mayıs'ta Tevfik Paşa'ya tebliğ edildi; Tevfik Paşa şartları kabul edemeyeceğini bildirdi. Lloyd George Yunan ordusunu 22 Haziran'da harekete geçirdi; Bursa 8 Temmuz'da, Trakya 20 Temmuz'da düşünce padişahın 22 Temmuz'da topladığı saltanat şûrası, İstanbul'un Yunanlılara işgal ettirileceği haberleri üzerine, Topçu Feriki Rızâ Paşa dışında imzadan yana oy verdi. Sonrası çabuk geldi: Sakarya'dan sonra Fransa 20 Ekim 1921'de Ankara hükümetiyle antlaşıp yeni devleti tanıdı, Lloyd George bile 10 Ağustos 1921'de Sevr'in artık yırtıldığını açıkladı. 30 Ağustos 1922 zaferini 11 Ekim'de Mudanya Mütarekesi, 1 Kasım'da saltanatın kaldırılması ve 24 Temmuz 1923'te Lozan Antlaşması izledi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1920-08-10|Sevr","1920-04-23","1921-10-20|Ankara","1922-10-11","1922-11-01","1923-07-24|Lozan"],
  kaynak:"TDV: sevr-antlasmasi (gövde okundu)" },

// ── 1922 MUDANYA ───────────────────────────────────────────────────────────
{ id:"antlasma-mudanya-1922", tur:"antlasma",
  olay:["1922-10-11"],
  metin:"Büyük Taarruz'dan sonra Yunanistan İtilâf devletlerinin arabuluculuğunu istedi; İstanbul'daki yüksek komiserler ilk mütareke teklifini 4 Eylül 1922'de yaptı. Mustafa Kemal Paşa ordunun ilerleyişini durdurmadı ve Çanakkale yönündeki yürüyüş İngiltere ile çatışma tehlikesi doğurdu. Fransa'nın arabuluculuğuyla (General Pelle, Franklin-Bouillon) görüşmeler 3 Ekim'de Mudanya'da başladı: Türk tarafını İsmet Paşa, müttefikleri Generaller Harrington, Charpy ve Monbelli temsil etti; Yunan delegeleri masaya oturmayıp limandaki bir gemide bekledi. 5 Ekim'de kesilen görüşmeler, Curzon'un Paris'te Trakya'nın bir ay içinde teslimine razı olmasıyla 9 Ekim'de yeniden başladı ve mütareke 11 Ekim 1922 sabahı imzalandı. On dört maddenin özü: ① anlaşma üç gün içinde yürürlüğe girecek ve Türk-Yunan çarpışması bitecek; ② Yunan kuvvetleri Meriç'in sol kıyısına çekilecek; ③ barışa kadar Karaağaç dahil Meriç'in sağ kıyısını müttefikler tutacak; ④ Doğu Trakya'nın askerî tahliyesi on beş günde, sivil idarenin devri en çok otuz günde bitecek; ⑤ TBMM hükümeti düzeni sağlamak için en çok 8000 kişilik bir jandarma gönderebilecek; ⑥ Türk ordusu Boğazların yaklaşık 15 km doğusundaki hatta (Çanakkale'de Lapseki çevresi, İzmit yarımadasında Darıca-Gebze-Şile) duracak, müttefikler de bulundukları yerde kalacak; ⑦ TBMM barış onaylanana kadar Doğu Trakya'ya asker geçirmeyecekti. Başta reddeden Yunan hükümeti üç gün sonra mütarekeyi onayladı; devir otuz günde tamamlandı ve Kasım sonuna kadar Doğu Trakya anavatana katıldı. TDV'ye göre Mudanya, TBMM hükümetinin müttefiklerce resmen tanınması ve askerî zaferin siyasî kazanca dönüşmesinin ilk adımıdır; Boğazlar yüzünden doğabilecek bir Türk-İngiliz çatışmasının da önünü almıştır.",
  kesinlik:"kesin",
  kaynak:"TDV: mudanya-mutarekesi (gövde okundu)" },

// ── 1923 LOZAN — HÜKÜMLER ─────────────────────────────────────────────────
{ id:"antlasma-lozan-1923-hukumler", tur:"antlasma",
  olay:["1923-07-24|Lozan"],
  metin:"Lozan tek bir metin değildir: esas antlaşma ile ona ekli on yedi protokol ya da sözleşmeden oluşur. 143 maddelik esas antlaşma dört bölümdür — toprak, tâbiiyet ve azınlıklar (md. 1-45), malî konular (46-63), ekonomik hükümler (64-100), ulaşım ve sağlık (101-143). TDV'nin özetinden başlıca hükümler: SINIRLAR — Trakya'da Türk-Yunan sınırı, Karaağaç Türkiye'de kalmak üzere Meriç'in talvegi oldu. İmroz (Gökçeada), Bozcaada ve Tavşan adaları dışındaki adı sayılan adalar Yunanistan'a bırakıldı; Yunanistan Midilli, Sakız, Sisam ve Nikarya'da deniz üssü ve istihkâm kurmayacaktı. Rodos ve Oniki Ada İtalya'da (md. 15), Kıbrıs İngiltere'de kaldı; Mısır ve Sudan'ın İngiliz egemenliğine geçtiği kabul edildi (md. 17), Trablusgarp üzerindeki haklardan vazgeçildi (md. 22). Suriye sınırı 20 Ekim 1921 Ankara Antlaşması'ndaki çizgi oldu. Musul meselesi Türk-Irak sınırının tespiti olarak ertelendi: dokuz ay içinde Türkiye ile İngiltere arasında belirlenecekti (md. 3). BOĞAZLAR — barışta ve savaşta denizden ve havadan serbest geçiş kabul edildi (md. 23); geçişi bir Türk üyenin başkanlığındaki uluslararası bir komisyon denetleyecek, iki yakada belirli bir şerit silahtan arındırılacak, Türkiye burada en çok 12.000 kişilik kuvvet bulundurabilecekti. KAPİTÜLASYONLAR — 28. maddeyle tamamen kaldırıldı; adliyeyi düzenlemek için birkaç yabancı uzman beş yıl görev yapacak, ama önerileri hükümeti bağlamayacaktı. AZINLIKLAR — gayrimüslim azınlıklara 37-44. maddelerle haklar tanındı; Fener Rum Patrikhanesi'ne siyasî bir görev verilmedi, dinî bir kurum olarak kalması kararlaştırıldı. MÜBADELE — ekli 6 numaralı protokolle Türkiye'deki Rumların ve Yunanistan'daki Türklerin büyük kısmı karşılıklı değiştirilecek; İstanbul, İmroz ve Bozcaada Rumlarıyla Batı Trakya Türkleri bunun dışında kalacaktı. TAZMİNAT — müttefikler işgal masraflarından, Türkiye de Almanya ve Avusturya'nın teslim ettiği Türk altınlarından ve İngiltere'ye sipariş edilen gemiler için ödenen paradan vazgeçti; Yunanistan'dan istenen tazminat Karaağaç istasyonunun Türkiye'ye bırakılmasıyla kapandı. TBMM antlaşmayı ve eklerini 2 Ağustos 1923'te 14'e karşı 213 oyla onayladı; bazı üyeler Musul'un ertelenmesini, Oniki Ada'yı ve tazminatı eleştirdi.",
  kesinlik:"kesin",
  kaynak:"TDV: lozan-antlasmasi (gövde okundu)" }

];

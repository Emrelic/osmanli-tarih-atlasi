// =====================================================================
// P05-ANADOLU — DÖRT YENİ NOKTA (14 Eylül 2026 · DALGA SINIF2 · 1.MURAT sevki)
// Rapor: denetim/P05-ANADOLU-0914.md · öneriler: denetim/YAMA-ANADOLU-0914.json
//
// AD ALANI (§7): data/yerlesimler_anadolu_0914.js → window.YERLESIMLER_ANADOLU_0914
// 🔴 arac/girdi.py GIRDI_DOSYALARI'na BAĞLI DEĞİL — Oturum 0 ekler (D099).
//    Bağlanmadan motor da denetim de bu dosyayı GÖRMEZ.
//
// NİÇİN (§2 NOKTASIZLIK — dört kalem de aynı kökten):
//   0016/H-0002 · 0017/H-0001 · 0030/H-0018  Kayseri–Elbistan arası "üçgen/kama":
//        Kayseri ile Elbistan arasında ~150 km'de nokta YOK → Zamantı (Pınarbaşı)
//   0030/H-0004  Ordu peteğinin sivri ucu: Ordu ile iç kesim (Niksar ·
//        Şebinkarahisar) arasında nokta YOK → Mesudiye (Milas) · Gölköy (Habsamana)
//   0033/H-0018  Yavuz'un 1514 dönüşünde teslim alınan Bayburt'un noktası YOK → Bayburt
//
// ÖN ARAMA (§11 D002/D066 · denetim/ARAC-NORMAL-0903.py norm() ile, 80 girdi
// dosyası / 3818 nokta): dördünün de ad eşleşmesi YOK ("milas" yalnız Muğla
// Milas'ı buldu, 932 km — bu yüzden ad "Mesudiye (Milas)"). 3 km içinde nokta
// YOK; en yakınlar: Bayburt→Aşkale 54,5 km · Zamantı→Kayseri 79 km (castle
// koordinatıyla ~74 km) · Mesudiye→Ordu 57,4 km · Gölköy→Ordu 37,4 km.
//
// KONUM: Bayburt · Mesudiye · Gölköy bugünkü şehir/ilçe merkezi (tarihî kale yeri
// ÖLÇÜLMEDİ). Zamantı: Kültür Envanteri "Zamantı Kalesi — Pınarbaşı'nın
// Pazarören kasabasına bağlı Melikgazi köyünde" 38.733147 / 36.222836 (konum
// için; sahiplik dayanağı DEĞİL).
// =====================================================================

window.YERLESIMLER_ANADOLU_0914 = [

{ ad:"Bayburt", tur:"kale", lat:40.2552, lon:40.2249, g:1, k:3,
  neden:"0033/H-0018 · Yavuz'un Tebriz seferi dönüşünde teslim alınan kalelerden Bayburt'un atlasta noktası YOKTU (ölçüldü: 80 km içinde yalnız Aşkale 54,5 · Kelkit 68,3). Nokta yokken bölge Aşkale/Kelkit peteklerine emiliyordu (§2).",
  not:"ZİNCİR VE HASSASİYETİ: bütün iç kırılmalar YIL hassasiyetindedir (YYYY-01-01) — tek gün hassasiyetli uç 1514-10-23. 🔴 KODLANMAYAN ARALAR (kaynak var, yıl yok): ① Eretna devrinde Erzincan emirlerinin 'zaman zaman' zaptı ve 1362'de Şebinkarahisar hâkimi Pîr Hüseyin'in alışı (TDV akkoyunlular) eretna içinde bırakıldı — o emirler Eretna emîri sıfatındaydı ('Eretna emîrlerinden Mutahharten', TDV erzincan), ayrı künyeleri yok. ② Kadı Burhâneddin'in Akkoyunlu Ahmed Bey'e 'Erzincan'dan Bayburt'a kadar' dirlik vermesi (1389 sonrası, yıl yok) KODLANMADI. ③ Cihan Şah devrinde Bayburt'un Karakoyunlu idaresinde oluşu (bitişi 1462, başı yıl yok; TDV akkoyunlular) KODLANMADI — 1422-1462 arasının bir kısmı akkoyunlu diye FAZLA gösteriliyor, bu bilinen borçtur. ④ 1878 ve 1916 Rus işgalleri (TDV bayburt, gün yok) `isg:` olarak YAZILMADI (Değişmez 2i tavanı 3).",
  kaynak:"TDV `bayburt` (200, gövde okundu): 'Son İlhanlı Hükümdarı Ebû Said … ölümünden sonra (1335) Bayburt Eretnaoğulları'nın eline geçti' · '… uzun süre Akkoyunlular'ın elinde kalan şehir ve yöresi 1501'de Safevîler tarafından alındı' · 'Mustafa Bey ile … Bıyıklı Mehmed Bey … Bayburt'u aldılar (Ekim 1514)'. TDV `akkoyunlular` (200): '(1378) Erzincan ve Bayburt Eretna emîrlerinden Mutahharten'in eline geçti'. TDV `erzincan` (200): 'Mutahharten'den sonra Erzincan 1410 yılında Karakoyunlu hâkimiyetine girdi' · '(1422) Karayülük Osman tarafından alınarak Akkoyunlu topraklarına katıldı' · 'Erzincan, Bayburt ile birlikte 23 Ekim 1514'te Bıyıklı Mehmed Bey'e (Paşa) beylerbeyilik olarak verilmişti'. GÜN/YIL DEVRALMALARI (§4 şartlı komşu/pencere): 1379 = mutahharten künyesinin başı (kaynak 1378 diyor; künye penceresi dışına düşmemek için künye günü devralındı, künye günü de kaynaksız) · 1410 ve 1422 = TDV erzincan yılları, Bayburt için 'gün komşudan: Erzincan · TDV erzincan' (aynı süreç: TDV bayburt 'Kara Yûsuf zaptetti … az sonra Karayülük yeniden ele geçirdi') · 1501-07-01 = safevi künyesinin başı (kaynak '1501' diyor; 1501-01-01 künyeden önceye düşerdi, künye günü kaynaksız) · 1514-10-23 = TDV erzincan'daki beylerbeyilik tevcihinin günü: Bayburt 'Ekim 1514'te alındı ve bu gün Bıyıklı'ya verildi ⇒ bu gün en geç Osmanlı elindedir (ÜST SINIR, alınış günü değil).",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1379-01-01",d:"eretna"},
     {f:"1379-01-01",t:"1410-01-01",d:"mutahharten"},
     {f:"1410-01-01",t:"1422-01-01",d:"karakoyunlu"},
     {f:"1422-01-01",t:"1501-07-01",d:"akkoyunlu"},
     {f:"1501-07-01",t:"1514-10-23",d:"safevi"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1514-10-23",t:"1920-04-23"}] },

{ ad:"Zamantı (Pınarbaşı)", tur:"kale", lat:38.7331, lon:36.2228, g:0, k:4,
  neden:"0016/H-0002 · 0017/H-0001 · 0030/H-0018 · Kayseri–Elbistan arasındaki keskin 'üçgen' (Emre'nin görselleri: 1335-01-01 · 1337-09-09 · 1392-01-01, kutu 38,19-38,97K / 36,17-36,64D). ÖLÇÜLDÜ: kutuda 0 nokta; en yakınlar Kayseri 79 km · Elbistan 90,5 km · Darende 98,3 km — iki komşu petek boşluğa KAMA gibi açılıyordu (§2). Bu nokta üçgenin tam içinde.",
  not:"🔴 KODLANMAYAN: ① 1344-45'te Tohma havzasının Dulkadir'e geçip 1350'lerde Eretna'ya dönmesi — Kaya bunu TOHMA havzası (Darende · Gürün) için söylüyor, Zamantı için değil; yazılmadı. ② 1381 sonrası Kadı Burhâneddin devrinin Zamantı'ya etkisi: Kaya 'Tohma havzası 1381'e kadar Dulkadirli'lerin elinde kaldı' diyor, Zamantı'yı anmıyor — ÖLÇÜLMEDİ, dulkadir kesintisiz yazıldı. ③ 1435-37 Karaman geri alışı TDV'ye göre Kayseri · Ürgüp · Karacahisar · Develi · Uçhisar'ı kapsıyor, Zamantı listede YOK ⇒ kodlanmadı. ④ 1472'de Şehsuvar Bey'in 'sığındığı Zamantı Kalesi' (TDV) hâlâ Dulkadir elindedir.",
  kaynak:"Abdullah KAYA, 'Dulkadirli Beyliği'nin Eratnalılar ile Münasebetleri', Mustafa Kemal Üniv. Sosyal Bilimler Enst. Dergisi 11(25), 2014, s. 81-97 (pypdf ile okundu): s.9 '1339 yılında … Emîr Eratna, çevre illerde sınırlarını genişleterek Tokat, Kayseri ve Samsun yörelerini kendisine bağladı' · s.10 'Eratnalılar'ın elindeki Zamantı (Pınarbaşı), Gürün, Darende, Divriği yaklaşık on yıl sonra tekrar Dulkadirliler'in hâkimiyetine girdi' (1352'den on yıl) · s.12 'Dulkadirli Halil Bey'de sınırlarını Zamantı'ya kadar genişletti (1360)'. TDV `dulkadirogullari` (200, gövde okundu): '1360'ta … Halil Bey de ülkesinin sınırlarını Zamantı'ya kadar genişletti' · 'Osmanlı ordusunu Göksun ile Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü (13 Haziran 1515)'. 1281-1339 ilhanli: Kaya 2014 özeti ve TDV `elbistan` ('İlhanlı idaresinin sarsılması sonucu 1337') — bölge İlhanlı idaresindeydi; Zamantı ADIYLA anılmıyor (bölge hükmü, nokta hükmü DEĞİL). Konum: Kültür Envanteri (kulturenvanteri.com/yer/zamanti-kalesi) — yalnız konum.",
  s:[{f:"1281-01-01",t:"1339-01-01",d:"ilhanli"},
     {f:"1339-01-01",t:"1360-01-01",d:"eretna"},
     {f:"1360-01-01",t:"1515-06-13",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-06-13",t:"1920-04-23",y:"savas"}] },

{ ad:"Mesudiye (Milas)", tur:"kale", lat:40.4633, lon:37.7728, g:0, k:4,
  neden:"0030/H-0004 · 'Ordu peteğinin sivri ucu' (Emre görseli 1335-01-01, 40,19-41,22K / 37,04-38,26D). ÖLÇÜLDÜ (1340 kesiti): Ordu ile iç kesim arasında (40,3-40,9K / 37,2-38,4D) 0 nokta; Ordu'nun peteği Canik dağlarına doğru serbestçe uzuyordu (§2). Milas, TDV'nin Hacıemîroğulları vilâyetini adlandırdığı iki kaleden biri ('vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas').",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı komşu): Ordu (Bayramlı) kaydının 1350 · 1398-06-01 · 1402-07-28 · 1427-06-01 kırılmaları. ⚠️ Ordu'nun günleri kısmen KAYNAKSIZ: TDV '1350 yıllarında' (yıl) · '800 (1398) baharında' (mevsim; 06-01 ay kodudur) · '1427'de ilhak edildi' (yıl; 06-01 ay kodudur). Günler yeni kırılma üretmemek için DEVRALINDI ve kaynaksız oldukları burada BİLDİRİLİR. 🔴 1281-1350 trabzon-rum bir ÇIKARIMDIR: TDV kalenin fetihten önce Rum savunmasında olduğunu söyler ('fetih sırasında savunmada kalan ve sonradan teslim olanlar'), hangi devlete bağlı olduğunu ADIYLA söylemez; Ordu kaydıyla aynı kimlik alındı. Fethin YILI Milas için ayrıca bilinmiyor (TDV bölge için '1270-1380 sürecinde').",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): '… İskefsir (Reşadiye), Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan ve sonradan teslim olanlardan meydana geliyordu' · 'oğlu Hacı Emîr 1350 yıllarında beyliği genişletti' · 'Bayezid 800 (1398) baharında … Ordu yöresi emîri Süleyman da ona tâbi oldu' · 'Hacıemîroğulları Beyliği 1427'de Osmanlılar tarafından ilhak edildi' · '859 (1455) tarihli Tahrir Defteri'nde … vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas' · '1455'te … 360'ı Milas … kalelerinde … hıristiyan-Rum aile'. Dar slug `mesudiye` 302 ÖLÜ (§4 taneciklik; kapsayıcı YER maddesi kullanıldı).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] },

{ ad:"Gölköy (Habsamana)", tur:"kale", lat:40.6878, lon:37.6178, g:0, k:4,
  neden:"0030/H-0004 · Ordu peteğinin sivri ucunun ikinci ayağı: Ordu'nun 37 km güney-güneybatısında, Ordu ile Niksar (57 km) arasındaki boşlukta. Habsamana TDV'de Hacıemîroğulları vilâyetinin Rum kalelerinden biri ve 1455'te ayrı nahiye.",
  not:"ZİNCİR KOMŞUDAN — Mesudiye (Milas) kaydının notu AYNEN geçerli (Ordu'nun günleri kısmen kaynaksız · 1281-1350 trabzon-rum çıkarım · fetih yılı bilinmiyor).",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): 'Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan ve sonradan teslim olanlar' · '(Piraziz) Habsamana kalelerinde … hıristiyan-Rum aile' (1455) · 'Nahiyeler … İskefsir, Milas ve Habsamana' · '1427'de … ilhak edildi'. Dar slug `golkoy`/`habsamana` madde yok (arama: 'Habsamana' yalnız `ordu--sehir`de, 1 eşleşme).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] },

{ ad:"Göksun", tur:"kale", lat:38.0210, lon:36.4973, g:0, k:4,
  neden:"0017/H-0001 · 0016/H-0002 · Kayseri–Elbistan–Maraş arasındaki kama. ÖLÇÜLDÜ (1340-01-01, kutu 37,9-38,4K / 36,2-37,0D): en büyük boşluk 80,2 km (38,0K 36,2D, en yakın Maraş); bu noktayla 45,7 km. Geniş şikâyet kutusunda (37,78-39,23K / 35,29-37,56D, 1337-09-09) en büyük boşluk 100,6 → 82,6 km.",
  not:"ZİNCİR: 1281-1337 İLHANLI ve 1337 günü KOMŞUDAN (§4 şartlı): Elbistan için TDV `elbistan` 'Anadolu'daki Moğol hâkimiyeti' ve 'İlhanlı idaresinin sarsılması sonucu 1337' diyor; Göksun için ayrı gün/yıl YOK; Göksun Elbistan'a 64 km, aynı süreç (Dulkadir beyliğinin kuruluşu). Gün komşudan: Elbistan · TDV elbistan (yıl hassasiyeti, 1337-01-01). 🔴 KODLANMAYAN: Elbistan'ın 1381-1384 Memlük arası TDV'de yalnız 'şehir' için söyleniyor — Göksun'a TAŞINMADI. 1515-06-13 GÜNÜ DOĞRUDAN KAYNAKTAN: Ördekli savaşı 'Göksun ile Andırın arasında'.",
  kaynak:"TDV `dulkadirogullari` (200, gövde okundu): 'Osmanlı ordusunu Göksun ile Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü (13 Haziran 1515)' · 'Memlük kuvvetlerini Göksun'da karşılayan Sevli Bey galip gelerek' (Dulkadir sahası içinde savunma). TDV `elbistan` (200, gövde okundu): 'İlhanlı idaresinin sarsılması sonucu 1337 yılında Taraklı oymağının reisi Halil Bey yöreyi ele geçirdi'. Koordinat: GeoNames 314188 (Göksun ilçe merkezi, tarihî kale yeri ÖLÇÜLMEDİ). Dar slug `goksun` 302 ÖLÜ.",
  s:[{f:"1281-01-01",t:"1337-01-01",d:"ilhanli"},
     {f:"1337-01-01",t:"1515-06-13",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-06-13",t:"1920-04-23",y:"savas"}] },

{ ad:"Gürün", tur:"sehir", lat:38.7223, lon:37.2710, g:0, k:4,
  neden:"0017/H-0001 notunun adıyla istediği dört noktadan biri. Darende–Zamantı–Sivas arasında (38,3-39,2K / 36,2-37,6D, 1340) en büyük boşluk 72,5 → 66,3 km.",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı): Darende (yerlesimler_ok110.js). Şart ③ kaynağın KENDİSİNDEN: Kaya 'Gürün, Darende ile birlikte aynı devlet yahut beyliklerin sınırları içinde yer almıştı'. Gün komşudan: Darende · TDV dulkadirogullari 'Dârende: 1338'de işgal edildi' (yıl). ⚠️ Darende'nin 1335-01-01'i kendi kaydında 'komşu ankrajdan türetildi' diye BEYANLI — bu tek gün kaynaksız devralındı, bildirilir. 🔴 KODLANMAYAN (Darende'de de yok): Kaya'ya göre Tohma havzası 1344-45 Dulkadir, '1350'lerden sonra' Eratna geri aldı, 'yaklaşık on yıl sonra' tekrar Dulkadir; 1381 sonrası ve 1404 Darende'nin 'tekrar zaptı' (Sümer) — yıl/sahip belirsiz, yazılmadı. Kaya: Gürün 'bu dönemlerde bir köy konumundaydı'.",
  kaynak:"Abdullah KAYA, 'Dulkadirli Beyliği'nin Eratnalılar ile Münasebetleri', MKÜ SBE Dergisi 11(25), 2014, s.81-97 (dergipark article-file/183340, pypdf ile okundu): s.89 'Gürün, Darende ile birlikte aynı devlet yahut beyliklerin sınırları içinde' · s.87 'Dârende, Gemerek ve Gürün bu akınlar sonucu Dulkadirliler'in eline geçerken'. TDV `dulkadirogullari`: beylik sahası '… Gemerek ve Gürün'den Hatay'a bağlı Hassa'ya kadar'. Koordinat GeoNames 313314. Dar slug `gurun` 302 ÖLÜ.",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1338-01-01",d:"eretna"},
     {f:"1338-01-01",t:"1515-06-13",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-06-13",t:"1920-04-23"}] },

{ ad:"Reşadiye (İskefsir)", tur:"kale", lat:40.3919, lon:37.3375, g:0, k:4,
  neden:"0030/H-0004 · Ordu peteğinin sivri ucunun batı-iç ayağı: Niksar (40 km) ile Mesudiye (38 km) arasında. Emre kutusunda en büyük boşluk 51,1 → 38,0 km.",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı) — Ordu (Bayramlı) kaydından, Mesudiye/Gölköy ile AYNI dayanak: İskefsir TDV'de Milas ve Habsamana ile AYNI cümlede, aynı süreçte (Hacıemîroğulları fethi) geçiyor. Gün komşudan: Ordu (Bayramlı) · TDV ordu--sehir. ⚠️ Ordu'nun günleri kısmen kaynaksız: '1350 yıllarında' (yıl) · '800 (1398) baharında' (06-01 ay kodu) · '1427'de ilhak' (06-01 ay kodu) — yeni kırılma üretmemek için DEVRALINDI. 🔴 1281-1350 trabzon-rum bir ÇIKARIMDIR (kale fetih sırasında Rum savunmasındaydı; hangi yıldan beri, bilinmiyor). ⚠️ İskefsir Niksar'a (eretna/taceddin) 40 km — iç kesimde Rum hâkimiyetinin Canik beylikleriyle sınırı ÖLÇÜLMEDİ.",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): 'İskefsir (Reşadiye), Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan' · 'Hacıemîroğulları Beyliği 1427'de Osmanlılar tarafından ilhak edildi' · '859 (1455) … vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas' · '954'te (1547) … İskefsir, Bayramlu ve Bazarsuyu kazalarına'. Koordinat GeoNames 740490 (Reşadiye ilçe merkezi; tarihî kale yeri ÖLÇÜLMEDİ).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] }

];

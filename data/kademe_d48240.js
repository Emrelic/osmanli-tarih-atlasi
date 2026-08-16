// KADEME YAMA — KADEME-DUNYA oturumu (Opus hazır kıta 23)
// Kutu: ANADOLU · ARAP-IRAN · ASYA · AVRUPA kutularının DIŞI (KALAN DÜNYA)
// Bu dosya YAMADIR: mevcut data/yerlesimler*.js dosyalarına DOKUNULMAZ,
// yamayı koordinatör işler (KADEME-KD.md §①).
//
// KADEME MERDİVENİ — ada göre değil MERTEBEYE göre (KADEME-ASYA/AVRUPA §düzeltme):
//   k:1  o siyasî yapının BAŞKENTİ / vilâyet düzeyi merkez
//   k:2  ikinci kademe (sancak · duchy · han · provintsiya)
//   k:3  üçüncü kademe (kaza · nahiye · uyezd · parish)
//   k:4  kasaba · köy · kale
// Kaynağın KENDİ terimi neden: alanına aynen yazılır; Osmanlı adı UYDURULMAZ.
//
// 🔴 `k_yok_sebep:` ALANI — M-0472'nin dersi + M-0481'in ORTAK SÖZLÜĞÜ.
// NOKTA AFRİKA İÇ ölçtü: bir hükmü SERBEST METNE gömmek onu makineye
// soruLAMAZ yapıyor (§11'in on birinci kusur sınıfı). Beş damgalı kaydım
// tam bu kusurdaydı — kova yalnız `neden:` metninin içinde duruyordu.
//
// ⚠️ ÖNCE `kaynak_hali:` diye yazmıştım. ÜÇ oturum aynı dersi bağımsız
// uygulayıp ÜÇ FARKLI AD verdi (`kademe_uygulanmaz` · `kaynak_hali` ·
// `k_yok_sebep`). Ölçtüm ve M-0480'de bildirdim: 227 k:'siz kaydın 169'u
// serbest metinde, yapısal olan 58'in dördü de TEKİL ad. Orada söz
// verdim: "hangi ad seçilirse kendiminkini ona çeviririm."
// ⇒ ÇEVİRDİM. `k_yok_sebep` iki dosyada birden kullanılıyor ve M-0481
//   ona KAPALI BİR SÖZLÜK yazdı; benimki tek dosyadaydı. Bicim benim
//   değil projenin meselesi.
//
// ORTAK SÖZLÜK (M-0481, beş değer) — ve BEN ALTINCIYI ÖNERİYORUM:
//   kaynak-susuyor  madde VAR, doğru yeri açıyor, kademeyi YAZMIYOR
//   adres-yanlis    slug canlı ama BAŞKA maddeyi açıyor (tuzak ②)
//   erisilemedi     slug canlı, başlık doğru, GÖVDE gelmedi (tuzak ④)
//   menzil-disi     mertebe beyanı VAR ama cümle 1281-1923 DIŞINDA
//   baska-yer       beyan VAR, idarî, menzil içi — ama BAŞKA BİR YERE ait
//   madde-yok       🔴 BENİM ÖNERİM: hiçbir yazımda madde YOK (hepsi 302)
//                   VE kapsayıcı madde adı hiç ANMIYOR
// 📌 Altıncısı niçin gerekli: `kaynak-susuyor` tanımı "madde VAR" diyor.
//    Ukek ve Beldjamen'de madde YOK — iki yazım da 302 ve Altın Orda
//    başşehir maddesi adlarını hiç geçirmiyor. İkisini aynı kovaya
//    koymak SONRAKİ EYLEMİ bozar: "kaynak-susuyor" TDV'yi bir daha
//    deneme demektir, "madde-yok" doğrudan AKADEMİK kaynağa git demektir.
// 📌 `k:` olan kayıtta bu alan BULUNMAZ — kova yalnız kademesiz kayda ait.
//
// A BLOĞU — PARTİ 1: Altın Orda / hanlık çekirdeği + Rus başkenti
// Hepsinin dayanağı TDV; slug her kayıtta yazılı ve gövdesi OKUNDU.

window.KADEME_YAMA = [

  // ---- k: YAZILANLAR — kaynak mertebeyi AÇIKÇA söylüyor ----

  {ad:"Saray (Selitrennoye)", k:1,
   kaynak:"TDV saray--sehir",
   neden:"TDV: 'Altın Orda Hanlığı'nın başkenti, tarihî bir şehir' · 'gerek Saray-i Batu'nun gerekse Saray-i Berke ve Saray-i Cedid'in Altın Orda'nın basşehri olması' · şehre dönüşümü Berke Han zamanı (1256-1266)"},

  {ad:"Yeni Saray (Tsarev)", k:1,
   kaynak:"TDV saray--sehir",
   neden:"TDV: 'Saray-i Cedid'in yeni bir sehir olup Özbek Han zamanında (1313-1340) kuruldugu' ve onun da 'Altın Orda'nın basşehri' olması. Aynı madde iki Saray'ı da BAŞŞEHİR sayıyor"},

  {ad:"Kazan", k:1,
   kaynak:"TDV kazan-hanligi",
   neden:"TDV: 'Adını Kazan sehrinden alan Kazan Hanlığı' — hanlığın merkezi. 1438-1552"},

  {ad:"Astrahan", k:1,
   kaynak:"TDV astarhan-hanligi",
   neden:"TDV: hanlığın merkezi 'Astarhan (Astırhan, Astrahan, Ejderhan) sehri', Hazar'ın kuzey kıyısında, 1466-1556"},

  {ad:"Tobolsk (İsker)", k:1,
   kaynak:"TDV sibir-hanligi",
   neden:"TDV: 'Muhammed Tayboga'nın bassehrini Sibir (Tatarcası İsker) sehrine tasıması ile hanlık Sibir Hanlığı olarak anılmaya basladı' (~1493). Kayıttaki İsker bu bassehirdir"},

  {ad:"Kasimov", k:1,
   kaynak:"TDV kasim-hanligi",
   neden:"TDV: 'Kasım Hanlığı'nın merkezi olan sehir' — Han-Kirman/Kasım. Hanlık 1445 (ya da 1452-1456) - 1681"},

  {ad:"Temnikov", k:3,
   kaynak:"TDV kasim-hanligi",
   neden:"TDV kaynağın KENDİ terimiyle: hanlığın 'Kasım, Yılatom, Satsk ve Temnik KAZALARINI ihtiva ettigi' — Temnik/Temnikov bir KAZA merkezi, yani üçüncü kademe"},

  {ad:"Moskova", k:1,
   kaynak:"TDV rusya",
   neden:"TDV: 'Rus tarihinin siyasi merkezi bu arada Moskova'da sekil bulmaya basladı' · I. İvan Danilovic döneminde (1325-1341) 'Metropolitligin merkez olarak burayı secmesiyle (1325) Moskova siyasi vechesi yanında dini merkez olma hüviyetini de elde etti'. Basşehir; Petro'dan sonra Petersburg'a alınsa da Moskova vilâyet düzeyi merkez kalmıstır"},

  // ---- kd: ZAMANLI KADEME — mertebesi kaynakla ÖLÇÜLEREK değişen tek kayıt ----
  // TDV ufa maddesinin ORİJİNAL cümlesi (alıntı, parafraz DEĞİL):
  //   "1708-1728 yılları arasında Kazan vilâyeti içerisinde yer alan Ufa
  //    1728'de Ufa nahiyesinin merkezi oldu, 1744'te de Orenburg vilâyetine
  //    dahil edildi. 1802'de ise Ufa vilâyeti olusturuldu."
  // Üç dönemin ÜÇÜ DE kaynakta ayrı ayrı yazılı; 1744 Orenburg'a bağlanma
  // Ufa'nın KENDİ mertebesini değiştirmediği için k: kırılması sayılmadı.
  {ad:"Ufa", k:1,
   kd:[{f:"1574-01-01", t:"1728-01-01", k:4, m:null},
       {f:"1728-01-01", t:"1802-01-01", k:3, m:null},
       {f:"1802-01-01", t:"1923-10-29", k:1, m:null}],
   kaynak:"TDV ufa",
   neden:"1574 İvan IV kale insasına izin verdi (kale=k4) · 1728 'Ufa nahiyesinin merkezi oldu' (nahiye=k3) · 1802 'Ufa vilâyeti olusturuldu' (vilâyet=k1). k:1 alanı kd: okunamazsa geçerli olan en uzun süreli mertebedir"},

  // ---- k: YAZILMAYANLAR — kaynak SUSUYOR ya da mertebeyi vermiyor ----
  // Bunlar BOŞ BIRAKILMADI: aranıp ölçüldü ve sonucu yazıldı (SABLON §④ dört kova).

  // 🔴 BU BESI M-0441'IN EMRIYLE YENIDEN SINANDI (besinci TDV tuzagi:
  // olu slug da govde donduruyor + ad ONE OTEKI YAZIMIYLA aranmali).
  // Sinav: her ad icin ALTERNATIF SLUGLAR denendi ve HTTP KODU olculdu.
  //   302 (olu) : bulgar--sehir · bolgar · bulgar-sehri · idil-bulgar ·
  //               bulgarlar · tetis · tetyusi · cimgi-tura · tura ·
  //               tumen--sehir · sibir · isker · kaslik · ukek · uvek ·
  //               beldjamen · bacman · ejderhan-sehri
  //   200 (canli): tumen  ← VE ACILDI: TUZAK ② cikti, asagiya bak
  // ⇒ Kova SINANDI ve AYAKTA. Ama artik "olctum" diyebiliyorum; once
  //    yalnizca "tek maddeye baktim" diyebiliyordum.

  {ad:"Bulgar (Bolgar)", k_yok_sebep:"kaynak-susuyor",
   kaynak:"TDV bulgar (gövdesi okundu) + 5 alternatif slug 302",
   neden:"kaynak susuyor — TDV maddesi Bulgar'ı 'Bulgar, Biler, Suvar, Osal, Tetis' arasında 'önemli kültür ve ticaret merkezleri' diye anıyor ama İDARÎ MERTEBE vermiyor; basşehir de demiyor. Altın Orda dönemindeki statüsüne hiç değinmiyor. Mustakil sehir maddesi ARANDI: bulgar--sehir · bolgar · bulgar-sehri · idil-bulgar · bulgarlar hepsi 302"},

  {ad:"Tetyuşi", k_yok_sebep:"kaynak-susuyor",
   kaynak:"TDV bulgar (gövdesi okundu) + tetis/tetyusi 302",
   neden:"kaynak susuyor — aynı madde 'Tetis' adını İdil Bulgar merkezleri arasında sayıyor, mertebe VERMİYOR. TDV'nin kendi yazimiyla (tetis) ve veri yazimiyla (tetyusi) mustakil madde ARANDI, ikisi de 302"},

  // 🔴 BU KAYIT UCUNCU KEZ OLCULDU ve ikinci olcumum KISMEN YANLISTI.
  // Ilk iki cekiste "Cimgi-Tura maddede GECMIYOR" cevabi aldim. Ucuncu
  // cekiste ADIN OTEKI YAZIMINI sordum: madde onu "ÇİMGA-TURA" diye
  // yaziyor (i degil A) ve GECIYOR. Yani M-0441'in yazim ekseni tuzagi
  // bana IKINCI KEZ, bu sefer SLUG'DA DEGIL GOVDE ICI ARAMADA carpti.
  // ⇒ Hukum DEGISMEDI, GEREKCE duzeldi: ad geciyor ama BASKENT olarak
  //   degil, "yirmiden fazla sehir"den biri olarak.
  {ad:"Tümen (Çimgi-Tura)", k_yok_sebep:"kaynak-susuyor",
   kaynak:"TDV sibir-hanligi (gövdesi 3 kez okundu) + TDV tumen (gövdesi okundu — BASKA KONU)",
   neden:"kaynak susuyor — madde Cimga-Tura'yi ANIYOR ama mertebe vermiyor: 'Çimga-Tura ve Sibir sehirlerinin yani sira Sibir Hanligi'nda yirmiden fazla sehir mevcuttu'. Yani 20+ sehirden biri; ONCEKI BASSEHIR oldugu SOYLENMIYOR ve madde 'Isker'den onceki merkez' sorusuna acikca cevap VERMIYOR. 🔴 `tumen` slugu canli (200) ama TUZAK ②: askeri/idari TERIM maddesi, Cimga-Tura'yi icermiyor. ⚠️ devletler.js `sibir-hanligi` kunyesi baskent:'Cimgi-Tura → Sibir (Isker)' diyor ve kaynak olarak BU MADDEYI gosteriyor — madde bunu SOYLEMIYOR; celiski koordinatore bildirildi, hukum onun"},

  {ad:"Ukek (Uvek)", k_yok_sebep:"madde-yok",
   kaynak:"TDV saray--sehir (gövdesi okundu) — Ukek adı GEÇMİYOR · ukek/uvek sluglari 302",
   neden:"aradım, bu maddede YOK — Altın Orda basşehir maddesi Ukek'i hiç anmıyor, mustakil maddesi de yok (iki yazim da 302). Mertebesi için AKADEMİK kaynak gerekiyor"},

  {ad:"Beldjamen", k_yok_sebep:"madde-yok",
   kaynak:"TDV saray--sehir (gövdesi okundu) — Beldjamen adı GEÇMİYOR · beldjamen/bacman sluglari 302",
   neden:"aradım, bu maddede YOK, mustakil maddesi de yok. Mertebesi için AKADEMİK kaynak gerekiyor"},

  // ==========================================================================
  // PARTİ 2 — M-0456'nın TÜRETMESİ: devletler.js `baskent:` EŞLEŞTİRMESİ
  // Araştırma DEĞİL, EŞLEŞTİRME. Dayanak projenin KENDİ DİZİNİ; künye
  // `f`/`t` penceresi de oradan geliyor. Kutumun 425 kademesiz noktası
  // taranınca 13 tek-künye + 3 çakışan eşleşme çıktı.
  // NOKTA AFRİKA İÇ'in beş uyarısının beşi de uygulandı; ALTINCISINI ben
  // ekledim ve tahtaya yazdım: kısa tire '-' AYIRAÇ DEĞİLDİR, ad İÇİNDE
  // geçiyor (Van-Erciş · Sankt-Peterburg). Em-dash '—' ile karıştırılırsa
  // adlar parçalanır. Ayıracım: → / , ;   (kısa tire HARİÇ)
  // ⚠️ GEÇİŞ TARİHİ olmayan '→' zincirlerinde pencere BÖLÜNMEDİ (uyarı ②):
  //    künye penceresi yazıldı ve gerekçesi neden: alanına kondu.
  // ⚠️ `tur:"kale"` → k:4 kuralı NOKTA AFRİKA İÇ tarafından ÇÜRÜTÜLDÜ
  //    (183 kale kaydının yalnız %68'i k:4); KULLANILMADI.

  {ad:"Tver", k:1,
   kaynak:"devletler.js künye `tver` (baskent:'Tver', 1246-01-01..1485-09-12)",
   neden:"Tver Knezliği'nin başkenti — künye tek merkez veriyor, çakışma yok. Künye kendi kaynağında 'TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak' diyor; ben o künyeyi DAYANAK alıyorum, TDV'ye ikinci kez sormadım"},

  {ad:"Reykjavík", k:1,
   kaynak:"devletler.js künye `izlanda` (baskent:'Reykjavík', 1918-12-01..1923-10-29)",
   neden:"İzlanda Krallığı'nın başkenti. Künye penceresi atlasın ufkunda yalnız 1918-12-01'de açılıyor, yani bu k:1 son beş yıl için geçerli"},

  {ad:"Bonga (Kaffa)", k:1,
   kaynak:"devletler.js künye `kaffa-kralligi` (baskent:'Bonga', 1390-01-01..1897-09-10)",
   neden:"Kaffa Krallığı'nın başkenti — künye tek merkez veriyor"},

  {ad:"Kabasa", k:1,
   kaynak:"devletler.js künye `ndongo` (baskent:'Kabasa', 1500-01-01..1671-01-01)",
   neden:"Ndongo Krallığı'nın başkenti — künye tek merkez veriyor"},

  {ad:"Musumba", k:1,
   kaynak:"devletler.js künye `lunda-imparatorlugu` (baskent:'Musumba', 1665-01-01..1887-01-01)",
   neden:"Lunda İmparatorluğu'nun başkenti — künye tek merkez veriyor"},

  {ad:"Mbanza-Kongo (São Salvador)", k:1,
   kaynak:"devletler.js künye `kongo-kralligi` (baskent:'Mbanza Kongo (São Salvador)', 1390-01-01..1914-01-01)",
   neden:"Kongo Krallığı'nın başkenti. Künyedeki yazım 'Mbanza Kongo' (boşluklu), veride 'Mbanza-Kongo' (tireli) — eşleştirme SADELEŞTİRİLMİŞ hâlle yapıldı, yamaya VERİNİN yazımı kondu (uyarı ④), yoksa yama sessizce düşerdi"},

  {ad:"Loango (Buali)", k:1,
   kaynak:"devletler.js künye `loango` (baskent:'Buali (Loango)', 1550-01-01..1883-01-01)",
   neden:"Loango Krallığı'nın başkenti Buali. Künye kaynağı: 'TDV'de müstakil maddesi yok (loango slug'ı 302 döndürdü), dayanak: standart akademik kaynak' — yani TDV zaten ÖLÇÜLEREK elenmiş, ikinci kez denemedim"},

  {ad:"Harar", k:1,
   kaynak:"devletler.js künye `adal` (baskent:'Zeyla → Harar', 1415-01-01..1887-01-06) · künye kaynağı TDV harar",
   neden:"Adal Sultanlığı'nın başkenti. 🔴 '→' zinciri: Harar SONRAKİ merkez, Zeyla ilki — ama künye GEÇİŞ TARİHİ VERMİYOR, o yüzden pencere BÖLÜNMEDİ (uyarı ②) ve künye penceresi yazıldı. Gerçek geçiş yılı bilinseydi kd: yazılabilirdi; UYDURMADIM"},

  {ad:"Zanzibar (Zengibar)", k:1,
   kaynak:"devletler.js künye `umman-zengibar` (baskent:'Maskat → Zengibar (Stone Town)', 1698..1923) + künye `svahili-sehirleri`",
   neden:"İKİ künyenin de merkezi — çakışma ama ÇELİŞKİ DEĞİL: ikisi de aynı yeri merkez sayıyor, yani k:1 her iki okumada da doğru. Umman-Zengibar'da 'Stone Town' adıyla açıkça başkent. Geçiş tarihi yok, pencere bölünmedi"},

  {ad:"Fas (Fez)", k:1,
   kaynak:"devletler.js künyeleri `fas` (baskent:'Fas / Marakeş') · `merini` · `sadi`",
   neden:"ÜÇ künyenin de merkezi — çakışma ama ÇELİŞKİ DEĞİL: üçü de ardışık Fas devletleri ve üçünde de Fez başkent. '/' çift merkez biçimi (Fas / Marakeş): ikisi de başkent, mertebe aynı. 🟢 SONRADAN EKLENDİ — TDV `rabat` maddesi bunu BİREBİR doğruluyor: 'Rabat'a özel bir önem veren III. Muhammed, FAS VE MERAKEŞ'TEN SONRA burayı üçüncü başşehir edindi'. Yani Fas · Merakeş · Rabat üçü de başşehir ve üçü de k:1 — kayıtlarım birbiriyle ÇELİŞMİYOR, kaynak üçünü aynı cümlede sayıyor"},

  {ad:"Mombasa", k:1,
   kaynak:"devletler.js künye `svahili-sehirleri` (baskent:'Kilwa, Mombasa, Zengibar (çeşitli merkezler)', 1000..1698)",
   neden:"🟡 EN ZAYIF KAYDIM ve onu böyle işaretliyorum: künye TEK merkez vermiyor, 'çeşitli merkezler' diyor ve üç ad sayıyor. Mombasa bunlardan biri, yani kendi şehir-devletinin merkezi — Svahili şehirleri bağımsız şehir-devletlerdi, o yüzden k:1 yazdım. Ama künyenin kendisi belirsiz konuşuyor; itiraz gelirse tartışmaya AÇIK"},

  // ==========================================================================
  // PARTİ 3 — M-0466'nın BULANIK EŞLEŞTİRME yöntemi, KENDİ kutuma koşuldu.
  // NOKTA AFRİKA İÇ açıkça uyardı: "bu listeyi SİZİN kutunuz için
  // DOĞRULAMADIM" ve "bulanık eşleştirme bir ARAMA aleti, KARAR aleti
  // DEĞİL". ⇒ Listeyi değil YÖNTEMİ aldım, kendi verimde koştum.
  // 10 aday çıktı; hepsini künyenin `bolge:` alanıyla sınadım.
  //   GERÇEK 1  Merakeş ~ Marakeş        nokta kuzey-afrika · künye kuzey-afrika ✓
  //   SAHTE  9  Safi~Iaşi (balkanlar) · Bulhar~Buhara (orta-asya) ·
  //             Cenîne~Cetine (balkanlar) · Avaş/Asâyita~Ava (gdasya) ·
  //             Malakal~Malaka 0,92 (gdasya) · Maridi~Mardin (anadolu) ·
  //             Lâs Hore~Lahor (guney-asya) · Tâtâ~Tatta (guney-asya)
  // 🔴 En yüksek benzerlik (Malakal~Malaka, 0,92) SAHTE çıktı: Güney Sudan
  //    ile Malaka Boğazı. Benzerlik SIRASI doğruluk sırası DEĞİL.

  {ad:"Merakeş", k:1,
   kaynak:"devletler.js künyeleri `sadi` (baskent:'Marakeş', 1549-01-01..1659-01-01) ve `fas` (baskent:'Fas / Marakeş')",
   neden:"Sa'dî Devleti'nin başkenti. Veride 'Merakeş', künyede 'Marakeş' — TAM eşleşme yok, bulanık eşleştirmeyle (0,86) bulundu ve COĞRAFYAYLA doğrulandı: nokta 31,63°K/-7,98°D, künye bolge:'kuzey-afrika' ⇒ ÖRTÜŞÜYOR. Aynı şehrin iki yazımı; yamaya VERİNİN yazımı kondu. 🟢 SONRADAN EKLENDİ — künye eşleştirmesi tek dayanaktı, artık TDV `rabat` maddesinden BİREBİR bir cümle de var: 'III. Muhammed, FAS VE MERAKEŞ'TEN SONRA burayı üçüncü başşehir edindi'. Merakeş'in başşehirliği artık bir eşleştirmeye değil kaynağın kendi cümlesine dayanıyor"},

  // ==========================================================================
  // PARTİ 4 — C BLOĞU (Kuzeybatı Afrika / Sahra), TDV ARAŞTIRMASI
  // 24 slug ölçüldü, 12'si canlı. Bu partide gövdesi OKUNAN ikisi.
  // 🔴 VE BİR TEŞHİS SIRASI BULDUM — M-0441'in tuzak ④'üne ek:
  //   `timbuktu`  200 · başlık DOĞRU ("Mali Cumhuriyeti'nde tarihî bir
  //               şehir") · GÖVDE GELMEDİ  ⇒ tuzak ④ gibi görünüyor
  //   `tinbuktu`  200 · AYNI başlık · GÖVDE DOLU ve idarî cümleyi VERİYOR
  // ⇒ Tuzak ④ hükmü ("çekilemedi") burada YANLIŞ olurdu: gövde
  //   çekilemez değildi, BEN YANLIŞ SLUGDAYDIM. TDV'nin kendi yazımı
  //   "Tinbüktü". ⇒ TEŞHİS SIRASI: `erisilemedi` demeden ÖNCE ADIN
  //   ÖTEKİ YAZIMINI dene. İkisi de 200 dönebiliyor ve yalnız birinde
  //   gövde oluyor.

  {ad:"Timbuktu", k:1,
   kaynak:"TDV tinbuktu (gövdesi okundu — `timbuktu` slug'ı da 200 ama GÖVDESİ BOŞ)",
   neden:"Kaynağın KENDİ terimi: 'Tinbüktü EYALET MERKEZİ yapılarak Tinbüktü Paşalığı kuruldu' — Sa'dî fethi (1591) sonrası, Osmanlı idaresi örnek alınarak kurulan Paşalık. Eyalet merkezi = vilâyet düzeyi ⇒ k:1. ⚠️ kd: YAZMADIM: 1591 ÖNCESİ için kaynak mertebe VERMİYOR (Mali döneminde 'önemli bir İslâm medeniyeti merkezi' diyor — bu idarî mertebe DEĞİL; Songhay döneminde hiç unvan vermiyor). Tek sourced dönem olduğu için düz k: yazıldı"},

  // ==========================================================================
  // PARTİ 7 — DÂRFÛR KUTUSU. TDV `darfur` gövdesi okundu + 15 slug ölçüldü.
  // Slugların 15'i de ÖLÜ: fasir · el-fasir · kutum · kebkabiye · cenine ·
  // nyala · niyala · mellit · zalinci · tine · ummu-keddade · sariyye ·
  // ed-dain · dacu · keyra. ⇒ Bu yerlerin MÜSTAKİL maddesi YOK.
  // Kapsayıcı `darfur` maddesi YALNIZ iki yeri adıyla anıyor: Fâşir ve Nyala.
  // ⚠️ El-Fâşir BENİM KUTUMDA DEĞİL (ARAP-İRAN kutusu, lat 13,63 · lon 25,35)
  //   ve zaten k:1 yazılı — TDV'nin 'Merkezi Fâşir şehridir' cümlesi onu
  //   doğruluyor; sahibine tahtadan bildirdim, kaydına DOKUNMADIM.

  {ad:"Nyala", k_yok_sebep:"menzil-disi",
   kaynak:"TDV darfur (gövdesi okundu)",
   neden:"🔴 MERTEBE BEYANI VAR AMA ATLAS UFKUNUN DIŞINDA. Madde: 'bir müdüriyet haline getirilen Dârfûr, yakın yıllarda Dârfûrü'l-cenûbiyye (MERKEZİ NİYÂLÂ) ve Dârfûrü'ş-şimâliyye (merkezi Fâşir) olmak üzere iki alt idarî birime ayrılmıştır'. Nyala bir alt idarî birimin MERKEZİ — ama bu taksimat Sudan'ın bağımsızlığından (1956) SONRA, yani atlas ufkunun (1281-01-01..1923-10-29) DIŞINDA. Ufuk içindeki mertebesi için kaynak SUSUYOR. M-0481'in `menzil-disi` kovası tam bu hâl için vardı ve ilk kez burada kullanıyorum"},

  {ad:"Kutum", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `kutum` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR — madde yalnız Fâşir ve Nyala'yı adıyla veriyor. Akademik kaynak gerekiyor"},

  {ad:"Kebkâbiye", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `kebkabiye` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR. Akademik kaynak gerekiyor"},

  {ad:"Cenîne", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `cenine` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR. ⚠️ NOT: bu ad M-0466'nın bulanık eşleştirmesinde `Cetine` (zeta künyesi) ile 0,83 benzerlik göstermişti ve SAHTE çıkmıştı (Cenîne Dârfûr'da 13,45°K, Cetinje Karadağ'da) — o hüküm ayakta"},

  {ad:"Zâlincî", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `zalinci` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR. Akademik kaynak gerekiyor"},

  {ad:"Tîne (Dârfûr)", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `tine` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR. Akademik kaynak gerekiyor"},

  {ad:"Ed-Da'în", k_yok_sebep:"madde-yok",
   kaynak:"TDV darfur (gövdesi okundu) + `ed-dain` slug'ı 302",
   neden:"müstakil maddesi YOK ve kapsayıcı `darfur` maddesi bu adı HİÇ ANMIYOR. Akademik kaynak gerekiyor"},

  // C BLOĞU — Fas kıyısı, iki kayıt ve İKİSİ DE FARKLI KOVAYA düştü.
  // 📌 Ve ikisi birlikte "hâkimiyet ≠ mertebe" dersini üçüncü kez gösteriyor:
  //   her iki madde de zengin hâkimiyet zinciri veriyor (Emevî · Murâbıt ·
  //   Muvahhid · Merînî · Portekiz 1415 · İspanya 1668) ve mertebe sorusuna
  //   biri HİÇ, öteki UFUK DIŞI cevap veriyor.

  {ad:"Dârülbeyzâ (Anfa)", k:1,
   kaynak:"TDV darulbeyza (gövdesi okundu)",
   neden:"Kaynağın KENDİ terimi: 'TÂMİSNÂ EYALETİNİN MERKEZİ haline geldi' ve 'bir VALİ ile KADI tarafından yönetilen şehir'. Eyalet merkezi = vilâyet düzeyi merkez ⇒ k:1. Merînîler zamanında (XIII. yüzyıldan itibaren), yani atlas ufkunun (1281) başına denk geliyor ve içinde sürüyor. ⚠️ kd: YAZMADIM: 'XIII. yüzyıldan itibaren' bir YÜZYIL, bir TARİH değil; ufkun başlangıcıyla çakışıyor ve kesin gün uydurmak gerekirdi. Madde ayrıca XV. yy Portekiz işgalini ve XVIII. yy'da Mevlây Muhammed b. Abdullah'ın YENİDEN İNŞASINI anıyor ama bu dönemler için mertebe VERMİYOR"},

  {ad:"Sebte (Ceuta)", k_yok_sebep:"kaynak-susuyor",
   kaynak:"TDV sebte (gövdesi okundu)",
   neden:"kaynak susuyor — madde hâkimiyet zincirini eksiksiz veriyor ('Abdülmü'min'in 543 (1148) yılında Sebte'ye girmesiyle şehir kalıcı bir şekilde Muvahhidler'in hâkimiyetine geçti' · Portekiz işgali 818/1415 · 1668'den İspanya) ama İDARÎ MERTEBEYİ AÇIKÇA VERMİYOR. İkinci kez soruldu, cevap yine 'mertebe verilmiyor'"},

  {ad:"Tanca", k_yok_sebep:"menzil-disi",
   kaynak:"TDV tanca (gövdesi 2 kez okundu, birebir alıntı istenerek)",
   neden:"🔴 MERTEBE BEYANI VAR AMA CÜMLENİN TARİHİ UFUK DIŞI. Birebir alıntı: 'BÖLGENİN İDARÎ MERKEZİ ve Mûsâ b. Nusayr'ın ordularının Atlas Okyanusu ile Cebelitârık sahillerinin temas sahasındaki ilk askerî üssü olan Tanca...'. Bu bir mertebe beyanıdır — ama cümlede anılan tek tarih 89/708 (Emevî fethi), atlas ufkundan (1281-01-01) 573 YIL ÖNCE. ⚠️ Madde ayrıca Mevlây İsmâil döneminde 'Fas'ın diplomatik merkezi' diyor — DİPLOMATİK, idarî DEĞİL; mertebe saymadım. 🟢 VE UFUK İÇİ AYRICA SORULDU (3. çekiş): Merînî (1269-1465), Portekiz (1471-1661) ve İngiliz (1661-1684) dönemleri tek tek soruldu, cevap 'Merînîler döneminde spesifik idarî unvan belirtilmemiştir' · Portekiz için 'daha ziyade boğazın kontrolünü sağlayan ASKERÎ BİR LİMAN olarak kullandı' · sonuç: '1281 SONRASI dönemler için idarî mertebe ifadesi YOKTUR'. Yani kova iki yönden de ölçüldü: beyan ufkun GERİSİNDE, ufuk İÇİ ise SESSİZ"},

  {ad:"Rabat", k:1,
   kaynak:"TDV rabat (gövdesi okundu)",
   neden:"İKİ BİREBİR ALINTI: ① 'Rabat'a özel bir önem veren III. Muhammed, Fas ve Merakeş'ten sonra burayı ÜÇÜNCÜ BAŞŞEHİR edindi' ② 'Fransız Mareşal Lyautey ... YÖNETİM MERKEZİNİ Fas şehrinden Rabat'a nakletti' (1912). Başlangıcı 545/1150'de Abdülmü'min'in ordugâhı. 🟢 VE ①. ALINTI ÜÇ KAYDIMI BİRDEN DOĞRULUYOR: Fas (Fez) · Merakeş · Rabat üçü de k:1 yazılı ve ÇELİŞMİYORLAR — TDV Fas'ın üç başşehri olduğunu AÇIKÇA söylüyor. ⚠️ kd: YİNE YAZMADIM: alıntı III. Muhammed'i adıyla veriyor ama TARİH VERMİYOR, ve 'kd: tarihsiz yazılmaz' (M-0471/M-0435). Hükümdarın saltanat yıllarını kendim koymak, maddenin söylemediği bir tarihi ölçülmüş gibi göstermek olurdu"},

  {ad:"Sicilmâse (Tâfilelt)", k:1,
   kaynak:"TDV sicilmase (gövdesi okundu)",
   neden:"Kaynağın KENDİ terimleri: 763/1362'de 'müstakil emirlik haline gelen Sicilmâse' ve 'Sicilmâse Emirliği'nin tanınması şartıyla' barış yapılmış; Sa'dî/Filâlî döneminde 'Sicilmâse VALİLİĞİNE' tayinler kaydedilmiş. Merdivende k:1 hem BAŞKENTİ hem VİLÂYET DÜZEYİ MERKEZİ kapsıyor; müstakil emirlik merkezi + valilik merkezi ikisi de oraya düşüyor. ⚠️ Madde AÇIKÇA 'hiçbir hânedanın başkenti olmamıştır' diyor — bu k:1 ile ÇELİŞMİYOR, çünkü k:1 'başkent' demek değil 'o siyasî yapının en üst düzey merkezi' demek. Ayrımı yazıyorum ki sonraki oturum çelişki sanmasın"},

  {ad:"Tıtvân (Tetuan)", k_yok_sebep:"kaynak-susuyor",
   kaynak:"TDV titvan (gövdesi okundu)",
   neden:"kaynak susuyor — madde şehrin hâkimiyet dönemlerini sayıyor ('Vattâsîler'in hâkimiyetindeki şehir' 1483-84 · 'Sa'dîler'in hâkimiyetinde' 1542-1600 · '1667'den itibaren Filâlî egemenliğine girdi' · İspanya 1913) ama İDARÎ SINIFLANDIRMA (eyalet · vilâyet · kaza) HİÇ vermiyor. Hâkimiyet bilgisi mertebe bilgisi DEĞİLDİR ve ikisini karıştırmak kolaydı — karıştırmadım"},

  {ad:"Miknâs (Meknes)", k:1,
   kaynak:"TDV miknas (gövdesi okundu)",
   neden:"TDV: 'Eski basşehir Fas'ı bırakıp Miknas'ı kendisine merkez edinen Mevlay İsmail 1090 (1679) yılında burada büyük bir saray yaptırdı' — Alevî (Filâlî) hânedanının başşehri, 1679'dan itibaren. Şehir 'el-Medinetü'l-melekiyye' (kraliyet şehri) diye anılmış. ⚠️ kd: YAZMADIM: 1679 ÖNCESİ Miknâs'ın mertebesi kaynakta YOK (yalnız Fas'ın başkent OLDUĞU söyleniyor, Miknâs'ın ne olduğu değil), ve başkentliğin BİTİŞ tarihi de verilmiyor. İki uçtan biri bile uydurulsaydı kd: yalan söylerdi"},

  // ==========================================================================
  // PARTİ 5 — BOŞLUK KAYITLARI: `kademe_uygulanmaz:true` (46 kayıt)
  //
  // 🟢 M-0438'DE SORDUĞUM SORUYU VERİNİN KENDİSİ CEVAPLADI — ve cevap
  // sunduğum ÜÇ ŞIKKIN HİÇBİRİ değil. Ölçüm:
  //     Murzuk (Fizan)   25,92 · 13,92   k:2      ← sancak MERKEZİ
  //     Fizan güneyi     23,00 · 14,00   k: YOK   ← aynı sancağın ÇÖLÜ
  // Aynı sancak, iki kayıt, biri kademeli biri değil. Proje ayrımı ZATEN
  // yapmış. Ve TDV `fizan` maddesi Murzuk'un k:2'sini DOĞRULUYOR:
  //   'Fizan da bu eyalete bağlı bir SANCAK olarak teşkilâtlandırıldı' (1551)
  //   '1842'de merkezi Merzûk olmak üzere kurulan Fizan KAZASI'
  //   '1860'larda ... Trablusgarp'a bağlı bir SANCAK statüsü kazandı'
  //
  // ⇒ KURAL: `k:` bir MERKEZİN mertebesidir, bir ALANIN değil. Ayırt edici
  //   olan `tur:"bolge"` DEĞİL — kaydın bir OTURMA YERİNİ mi yoksa BOŞLUĞU
  //   mu temsil ettiğidir. Veride kademesi yazılı 12 bölge kaydının 12'si de
  //   bir oturma yeri adı taşıyor (Erdel (Kaloşvar) · Murzuk · Mısır vahaları,
  //   hepsi `m:` ile bir merkeze bağlı).
  //
  // ⚠️ VE BLANKET UYGULAMADIM: 58 bölge kaydımın 12'si BU BLOĞA GİRMEDİ,
  //   çünkü onlar boşluk değil KÜNYESİ KAYITLI OLMAYAN SİYASÎ YAPILAR:
  //   Taino cacicazgoları (Higüey · Jaragua · Camagüey) · Mapuche (Arauco ·
  //   Purén) · Diaguita (Quilmes) · Yakut · Koryak · Çukotka · Evenki ·
  //   Darfur · Ogaden. Onlara 'kademe uygulanmaz' yazmak bir İDDİA olurdu
  //   ve YANLIŞ: soru uygulanır, ben ARAŞTIRMADIM. Onlar 'aramadım'
  //   kovasında ve o bir BORÇ, sonuç değil (SABLON §④).
  // 📌 İlk süzgecim 58/58 TEMİZ demişti; gözle okuyunca yanlış olduğu
  //   görüldü. Süzgeci sıkılaştırdım ve normalleştiricimde bir kusur
  //   buldum: 'ı' harfini siliyordu ('Bozkır' → 'bozkr'), yani kendi
  //   aletim Türkçe bir harfte sessizce yanılıyordu.

  {ad:"Aral kuzeyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Baraba bozkırı", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Bozkır (Deşt-i Kıpçak)", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Büyük Doğu Ergi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Büyük Ovalar (orta kesim)", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Cebel Merre", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Donets bozkırı", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Doğu Grönland", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Emba (Cem)", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Essey", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Fizan güneyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Hoggar", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Kalmuk bozkırı", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Kanada Arktiği / Kuzeyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  // 🔴 DÖRT VAHA — GERİ ÇEKME SONRASI ÜÇÜNCÜ ÖLÇÜM, ve "aramadım" hâli
  // DOĞRULANDI ama VERDİĞİM GEREKÇEDEN BAŞKA bir sebeple.
  //
  // ① TDV ARANDI: kufra · kufre · el-cuf · cuf · tazirbu · rebyane ·
  //    vav-el-kebir · fizan-vahalari · havat · kalansu → HEPSİ 302.
  //    `vav` 200 döndü ama Arap harfi maddesi (tuzak ②), açılmadı sayılır.
  // ② DOĞRU İZ BULUNDU: Kufra Senûsiyye'nin merkeziydi. TDV `senusiyye`
  //    gövdesi okundu: Ahmed Şerîf es-Senûsî "harekâtın ana zâviyesini
  //    tekrar Kufra'ya taşımakla" merkezi oraya kaydırmış (19. yy sonu).
  //    ⚠️ Ama "ana zâviye" DİNÎ bir terim, İDARÎ bir mertebe DEĞİL — ve
  //    kaynağın kendi terimini yükseltmek tam da yasakladığımız şey.
  //    Tâzirbû · Rebyâne · Vâv el-Kebîr maddede HİÇ GEÇMİYOR.
  // ③ KÜNYE TESTİ: `devletler.js`te SENÛSÎ KÜNYESİ YOK. Yani Kufra'nın
  //    "başkenti olduğu" bir siyasî yapı bu modelde mevcut değil.
  // ④ 🔴 VE ASIL AYRIM BURADA — sahiplik ölçüldü:
  //       benim dört vaham   d:0 · s:0 · v:0   HİÇ SAHİBİ YOK
  //       içtihat beş vahası d:2 · s:2 · v:1   hafsi · italya · memlûk
  //    ⇒ Câlû ve Zilla k:4 çünkü VAHA değil, çünkü SAHİPLİ YERLEŞİM.
  //      Benimkiler modelde hiçbir devlete ait değil.
  // ⚠️ AMA BU DA KESİN DEĞİL: `d:[]` "hiç sahibi olmadı" DEMEK OLABİLİR,
  //    "henüz YAZILMADI" da demek olabilir — Kufra tarihen Senûsî ve
  //    sonra İtalyan'dı. İkisini bu veriden AYIRT EDEMİYORUM.
  // ⇒ Bu yüzden "aramadım" (BORÇ) hâli DOĞRU hâldir ve öyle kalıyor.
  //   📌 Sahipsizlik bir NOKTA/VERİ oturumunun işi, benim değil; ölçtüm
  //      ve tahtaya bildirdim.
  {ad:"Kufra (el-Cûf)", k_yok_sebep:"aramadim",
   kaynak:"GERİ ÇEKİLDİ — önceki kaynağım bir ölçüm değil bir varsayımdı",
   neden:"🔴 BU KAYIT GERİ ÇEKİLDİ. Parti 5'te kademe_uygulanmaz:true yazmıştım; süzgecim adın ARAZİ KELİMESİ taşıyıp taşımadığına bakıyordu ve VAHA adları arazi şekli GİBİ durur ama vaha bir YERLEŞİMDİR. Projenin içtihadı açık ve benimkine aykırı: kademesi yazılı 12 bölge kaydının SEKİZİ Mısır/Libya vahası ve hepsi k:4 — Câlû k:4 m:Bingazi · Zilla (Zella) k:4 m:Trablus, ikisi de tur:\"bolge\". Yani `tur` alanı ayırt etmiyor, İÇTİHAT ayırt ediyor. ⚠️ k:4 YAZMIYORUM: içtihat 'vaha k:4 OLABİLİR' diyor, 'BU vaha k:4'tür' demiyor — kaynağı okumadım. İddiayı geri çekip yerine BORÇ koyuyorum."},
  {ad:"Kuzeydoğu Grönland", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Libya iç çölü (Sirte ardı)", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Ma'tan es-Sarra", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Novaya Zemlya güneyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Novaya Zemlya kuzeyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Ramletü Murzuk", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Ramletü Zellâf", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Rebyâne", k_yok_sebep:"aramadim",
   kaynak:"GERİ ÇEKİLDİ — önceki kaynağım bir ölçüm değil bir varsayımdı",
   neden:"🔴 BU KAYIT GERİ ÇEKİLDİ. Parti 5'te kademe_uygulanmaz:true yazmıştım; süzgecim adın ARAZİ KELİMESİ taşıyıp taşımadığına bakıyordu ve VAHA adları arazi şekli GİBİ durur ama vaha bir YERLEŞİMDİR. Projenin içtihadı açık ve benimkine aykırı: kademesi yazılı 12 bölge kaydının SEKİZİ Mısır/Libya vahası ve hepsi k:4 — Câlû k:4 m:Bingazi · Zilla (Zella) k:4 m:Trablus, ikisi de tur:\"bolge\". Yani `tur` alanı ayırt etmiyor, İÇTİHAT ayırt ediyor. ⚠️ k:4 YAZMIYORUM: içtihat 'vaha k:4 OLABİLİR' diyor, 'BU vaha k:4'tür' demiyor — kaynağı okumadım. İddiayı geri çekip yerine BORÇ koyuyorum."},
  {ad:"Rın kumulları (Volga-Yayık arası)", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Sahra batısı", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Serîr", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Serîr Kalanşû", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Severnaya Zemlya", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Sirte iç çölü", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Sloboda bozkırı", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Somali çölü", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Svalbard", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Tibesti", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Tâsîlî n'Accer", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Tâzirbû", k_yok_sebep:"aramadim",
   kaynak:"GERİ ÇEKİLDİ — önceki kaynağım bir ölçüm değil bir varsayımdı",
   neden:"🔴 BU KAYIT GERİ ÇEKİLDİ. Parti 5'te kademe_uygulanmaz:true yazmıştım; süzgecim adın ARAZİ KELİMESİ taşıyıp taşımadığına bakıyordu ve VAHA adları arazi şekli GİBİ durur ama vaha bir YERLEŞİMDİR. Projenin içtihadı açık ve benimkine aykırı: kademesi yazılı 12 bölge kaydının SEKİZİ Mısır/Libya vahası ve hepsi k:4 — Câlû k:4 m:Bingazi · Zilla (Zella) k:4 m:Trablus, ikisi de tur:\"bolge\". Yani `tur` alanı ayırt etmiyor, İÇTİHAT ayırt ediyor. ⚠️ k:4 YAZMIYORUM: içtihat 'vaha k:4 OLABİLİR' diyor, 'BU vaha k:4'tür' demiyor — kaynağı okumadım. İddiayı geri çekip yerine BORÇ koyuyorum."},
  {ad:"Ural eteği", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Vaygaç", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Vâdî Hovâr", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Vâdî Tanezzûft", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Vâv el-Kebîr", k_yok_sebep:"aramadim",
   kaynak:"GERİ ÇEKİLDİ — önceki kaynağım bir ölçüm değil bir varsayımdı",
   neden:"🔴 BU KAYIT GERİ ÇEKİLDİ. Parti 5'te kademe_uygulanmaz:true yazmıştım; süzgecim adın ARAZİ KELİMESİ taşıyıp taşımadığına bakıyordu ve VAHA adları arazi şekli GİBİ durur ama vaha bir YERLEŞİMDİR. Projenin içtihadı açık ve benimkine aykırı: kademesi yazılı 12 bölge kaydının SEKİZİ Mısır/Libya vahası ve hepsi k:4 — Câlû k:4 m:Bingazi · Zilla (Zella) k:4 m:Trablus, ikisi de tur:\"bolge\". Yani `tur` alanı ayırt etmiyor, İÇTİHAT ayırt ediyor. ⚠️ k:4 YAZMIYORUM: içtihat 'vaha k:4 OLABİLİR' diyor, 'BU vaha k:4'tür' demiyor — kaynağı okumadım. İddiayı geri çekip yerine BORÇ koyuyorum."},
  {ad:"Yamal ucu", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Yeni Sibirya Adaları", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"Üstyurt kuzeyi", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"İdehân Murzuk", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},
  {ad:"İdehân Ubârî", kademe_uygulanmaz:true,
   kaynak:"olcum — bu kayit bir OTURMA YERI degil, dolgu ALANI",
   neden:"kademe bir MERKEZIN mertebesidir, bir ALANIN degil. Bu kayit col/bozkir/erg dolgusu; kaynaga 'burasi kaza miydi' diye SORULAMAZ. Ayrimin kaniti veride: Murzuk (Fizan) k:2 (sancak MERKEZI) ile Fizan guneyi (ayni sancagin COLU) ayri kayitlar ve ikincisinin kademesi YOK."},

  // 🔴 DARFUR SONRADAN EKLENDİ — ve eklenme yolu kayda değer.
  // Parti 5'te Darfur'u bloğa ALMAMIŞTIM ("siyasî yapı, araştırmadım").
  // Sonra kendi raporumdaki "ölçmedim" satırını ölçtüm:
  //     El-Fâşir  13,63 · 25,35  k:1   ← Darfur Sultanlığı'nın BAŞKENTİ,
  //                                      veride VAR ve zaten kademeli
  //     Darfur    13,50 · 24,00  k: yok ← aynı sultanlığın ALANI
  // ⇒ Murzuk/Fizan güneyi ile BİREBİR aynı desen; kuralın İKİNCİ bağımsız
  //   doğrulaması. Darfur bir boşluk kaydıdır.
  //
  // ⚠️ VE BU TESTİ ÖTEKİ 11'E UYGULAMADIM — çünkü test YANLIŞ SORUYU
  // ölçüyor. "Yakında kademeli nokta var mı" diye soruyor; sorum ise
  // "bu siyasî yapının KENDİ merkezi kayıtlı mı". Darfur'da tuttu çünkü
  // El-Fâşir'in Darfur'un başkenti olduğunu ADIYLA doğruladım. Ötekilerde
  // yalnız MESAFE bakılsaydı yanlış pozitif verirdi:
  //     Arauco (Mapuche) → Concepción k:3   İSPANYOL sömürge şehri
  //     Higüey (Taino)   → Santo Domingo k:1 İSPANYOL şehri (1496)
  //     Ogaden           → Harar k:1        ADAL'ın başkenti
  // 📌 Mesafe testi tam da KENTSEL MERKEZİ OLMAYAN halklarda yanlış
  //   pozitif veriyor — yani sorunun asıl nüfusunda. Altı kaydı bunun
  //   üzerine yazacaktım; ölçüm doğruydu, ÇIKARIM yanlış olacaktı.
  {ad:"Darfur", kademe_uygulanmaz:true,
   kaynak:"ölçüm — El-Fâşir (13,63·25,35) veride VAR ve zaten k:1",
   neden:"Darfur Sultanlığı'nın BAŞKENTİ El-Fâşir ayrı bir kayıt olarak veride duruyor ve kademesi ZATEN yazılı (k:1). Bu kayıt o sultanlığın MERKEZİ değil ALANI — Murzuk (k:2) ile Fizan güneyi (k: yok) çiftinin birebir aynısı. Merkez kayıtlı olduğu için alan kaydına kademe UYGULANMAZ"},

  {ad:"Franz Josef Toprağı", kademe_uygulanmaz:true,
   kaynak:"ölçüm — ıssız arktik takımada, oturma yeri YOK",
   neden:"süzgecim bunu SINIFLANDIRAMADI (ne arazi kelimesi ne halk adı) ve kararı ELLE verdim: Franz Josef Toprağı ıssız bir takımadadır, hiçbir dönemde yerleşim merkezi olmamıştır. Süzgecin sınıflandıramaması bir kusur değil SINIRDIR; sınıflandıramadığını TEMİZ saymak kusur olurdu."},

];

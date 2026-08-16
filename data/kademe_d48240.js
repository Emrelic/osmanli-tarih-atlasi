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
   neden:"ÜÇ künyenin de merkezi — çakışma ama ÇELİŞKİ DEĞİL: üçü de ardışık Fas devletleri ve üçünde de Fez başkent. k:1 her üç okumada da doğru. '/' çift merkez biçimi (Fas / Marakeş): ikisi de başkent, mertebe aynı"},

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
   neden:"Sa'dî Devleti'nin başkenti. Veride 'Merakeş', künyede 'Marakeş' — TAM eşleşme yok, bulanık eşleştirmeyle (0,86) bulundu ve COĞRAFYAYLA doğrulandı: nokta 31,63°K/-7,98°D, künye bolge:'kuzey-afrika' ⇒ ÖRTÜŞÜYOR. Aynı şehrin iki yazımı. Yamaya VERİNİN yazımı kondu"},

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

  {ad:"Miknâs (Meknes)", k:1,
   kaynak:"TDV miknas (gövdesi okundu)",
   neden:"TDV: 'Eski basşehir Fas'ı bırakıp Miknas'ı kendisine merkez edinen Mevlay İsmail 1090 (1679) yılında burada büyük bir saray yaptırdı' — Alevî (Filâlî) hânedanının başşehri, 1679'dan itibaren. Şehir 'el-Medinetü'l-melekiyye' (kraliyet şehri) diye anılmış. ⚠️ kd: YAZMADIM: 1679 ÖNCESİ Miknâs'ın mertebesi kaynakta YOK (yalnız Fas'ın başkent OLDUĞU söyleniyor, Miknâs'ın ne olduğu değil), ve başkentliğin BİTİŞ tarihi de verilmiyor. İki uçtan biri bile uydurulsaydı kd: yalan söylerdi"},

];

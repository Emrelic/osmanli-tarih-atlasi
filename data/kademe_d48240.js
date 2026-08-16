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

  {ad:"Bulgar (Bolgar)",
   kaynak:"TDV bulgar (gövdesi okundu) + 5 alternatif slug 302",
   neden:"kaynak susuyor — TDV maddesi Bulgar'ı 'Bulgar, Biler, Suvar, Osal, Tetis' arasında 'önemli kültür ve ticaret merkezleri' diye anıyor ama İDARÎ MERTEBE vermiyor; basşehir de demiyor. Altın Orda dönemindeki statüsüne hiç değinmiyor. Mustakil sehir maddesi ARANDI: bulgar--sehir · bolgar · bulgar-sehri · idil-bulgar · bulgarlar hepsi 302"},

  {ad:"Tetyuşi",
   kaynak:"TDV bulgar (gövdesi okundu) + tetis/tetyusi 302",
   neden:"kaynak susuyor — aynı madde 'Tetis' adını İdil Bulgar merkezleri arasında sayıyor, mertebe VERMİYOR. TDV'nin kendi yazimiyla (tetis) ve veri yazimiyla (tetyusi) mustakil madde ARANDI, ikisi de 302"},

  {ad:"Tümen (Çimgi-Tura)",
   kaynak:"TDV sibir-hanligi (gövdesi okundu) + TDV tumen (gövdesi okundu — BASKA KONU)",
   neden:"kaynak susuyor — sibir-hanligi maddesi Cimgi-Tura'yı ÖNCEKİ basşehir olarak DOĞRULAMIYOR, yalnız bassehrin İsker'e TASINDIGINI söylüyor. 🔴 M-0441 sinavinda `tumen` slugu CANLI (200) cikti ve ACILDI: TUZAK ② — madde sehri degil askeri/idari TERIMI anlatiyor ('Ortacag Turk ve Mogol devletlerinde bir askeri birligi ifade eden, idari ve mali teskilatta da kullanilan terim') ve Cimgi-Tura · Sibir Hanligi · Isker adlarini HIC ICERMIYOR. cimgi-tura · tura · tumen--sehir · sibir · isker · kaslik hepsi 302"},

  {ad:"Ukek (Uvek)",
   kaynak:"TDV saray--sehir (gövdesi okundu) — Ukek adı GEÇMİYOR · ukek/uvek sluglari 302",
   neden:"aradım, bu maddede YOK — Altın Orda basşehir maddesi Ukek'i hiç anmıyor, mustakil maddesi de yok (iki yazim da 302). Mertebesi için AKADEMİK kaynak gerekiyor"},

  {ad:"Beldjamen",
   kaynak:"TDV saray--sehir (gövdesi okundu) — Beldjamen adı GEÇMİYOR · beldjamen/bacman sluglari 302",
   neden:"aradım, bu maddede YOK, mustakil maddesi de yok. Mertebesi için AKADEMİK kaynak gerekiyor"},

];

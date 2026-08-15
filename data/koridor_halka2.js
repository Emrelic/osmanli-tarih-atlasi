// KORİDOR AĞI — HALKA 2 · AVUSTURYA KOLU
//
// İŞÇİ oturum: NOKTA MENZİL · 16 Ağustos 2026 · görev tahta M-0099
// 🔴 data/koridor.js'e DOKUNULMADI — o KORİDOR ŞEMA'nın üretimi (M-0099).
//    Bu AYRI bir dosyadır ve yalnız halka 2'yi taşır.
//
// ŞEMA: koridor.js'in şeması BİREBİR izlendi (dugum.boyar · kenar.saat_cinsi
//   "olculdu"/"turetildi" ayrımı dâhil). Ayrıntı: oturumlar/KORIDOR-SEMA-TASLAK.md
// KOORDİNATLAR girdi.yukle()'den alındı, ELLE KOPYALANMADI — koridor.js'in
//   kendi kuralı budur.
//
// ═══════════════ KAYNAK DURUMU — ve niçin ikiye ayrıldı ═══════════════
//
// 🟢 ZAMAN ÇERÇEVESİ — TDV `menzil--osmanli` (HTTP 200, gövdesi okundu):
//    kuruluş "Kanûnî Sultan Süleyman döneminde 946'da (1539) Vezîriâzam
//      Lutfi Paşa menzil sistemini yeni baştan teşkilâtlandırdı"
//    kaldırılış "1839'da posta teşkilâtı kurularak menzil sistemi tamamen
//      yürürlükten kaldırıldı"
//    ⇒ koridor.js'in kullandığı f:1539-01-01 / t:1839-01-01 DOĞRULANDI.
//    aralık "üç saatten yirmi sekiz saate kadar olan mesafelerde"
//    ⇒ 🟢 Aşağıdaki on kenarın türetilmiş saatleri 8,9 ile 22,9 arasında —
//      HEPSİ TDV'nin verdiği aralığın İÇİNDE. Bu bir doğrulama, tasarım değil.
//
// 🔴 GÜZERGÂH — DURAK LİSTESİ TDV'DE YOK, ve bunu gizlemiyorum:
//    `menzil--osmanli` üç ana koldan söz ediyor ama ADLARINI ve
//    DURAKLARINI saymıyor ("Ülkenin her tarafına ulaşan yolların merkezi
//    İstanbul olup Anadolu ve Rumeli yönlerinde üç ana kola ayrılırdı").
//    `budin` maddesi de Belgrad-Budin yolunu ANLATMIYOR (arandı, yok).
//    ⇒ Aşağıdaki duraklar, veride VAR OLAN yerleşimlerden ve Tuna boyu
//      ordu yolunun bilinen hattından seçildi. kesinlik:3 ve
//      kaynak:"bulunamadı" ile damgalandı. UYDURULMUŞ TEK BİR DURAK YOK,
//      ama SEÇİLMİŞ duraklar var ve farkı budur.
//
// 🟢 HABSBURG AYAĞI — KORİDOR ŞEMA'nın ölçümü (tahta M-0070):
//    Schobesberger v.d., "European Postal Networks", BRILL,
//    doi 10.1163/9789004277199_003 — 1490 Innsbruck/Viyana-Brüksel hattı,
//    GÜNDE 150 KM.
//
// ⚠️ VE İKİ HIZI KARIŞTIRMADIM — dosyanın kendi uyarısı bunu emrediyor:
//    Osmanlı ulağı  ~120 km/gün · kalibrasyon 4,25 km-sa (koridor.js)
//    Habsburg posta  150 km/gün (BRILL)
//    Aşağıdaki BÜTÜN `saat` değerleri koridor.js'in KENDİ 4,25 km-sa
//    kalibrasyonuyla türetildi — Habsburg ayağında da. Sebebi: birim
//    tutarlılığı. 150 km/gün AYRI bir ölçüdür ve buraya KARIŞTIRILMADI;
//    farkın sebebi (yol kalitesi mi, at değiştirme sıklığı mı, ölçüm
//    tanımı mı) ÖLÇÜLMEDİ. KORİDOR ŞEMA da ölçmediğini yazmıştı.
//
// TOPLAM: 632,7 km kuş uçuşu · Habsburg ölçüsüyle 4,2 gün · Osmanlı 5,3 gün
// =====================================================================

window.KORIDOR_HALKA2_DUGUM = [

// 🔴 BELGRAD — UÇ DÜĞÜM, koridor.js ile PAYLAŞILAN kimlik.
//   koridor.js'te `rumeli/orta#8` olarak ZATEN var ve orada boyar:true.
//   Burada boyar:FALSE yazıldı — aynı noktayı iki dosyadan birden
//   boyatmamak için. Çift boyama Voronoi'ye aynı noktayı iki kez sokar.
//   ⇒ Bu bir BAĞLANTI düğümüdür, yeni bir düğüm değil.
//   KORİDOR ŞEMA'ya soruldu (tahta M-0100): id'yi aynen kullanmam doğru mu?
//   Cevap gelene kadar aynen kullanıyorum — ağın kopmaması bunu gerektiriyor.
{id:"belgrad",ad:"Belgrad",y:"Belgrad",boyar:false,tip:"baglanti-ucu",lat:44.818,lon:20.457,kol:["halka2/avusturya#0"],kaynak:"koridor.js rumeli/orta#8 ile aynı düğüm"},

// ───── TUNA BOYU · Osmanlı idaresindeki kesim (Belgrad → Estergon) ─────
{id:"h2-varadin",ad:"Varadin (Petrovaradin)",y:"Varadin (Petrovaradin)",boyar:true,tip:"yerlesim",lat:45.248,lon:19.862,kol:["halka2/avusturya#1"],kaynak:"bulunamadı"},
{id:"h2-osek",ad:"Ösek (Osijek)",y:"Ösek (Osijek)",boyar:true,tip:"yerlesim",lat:45.554,lon:18.695,kol:["halka2/avusturya#2"],kaynak:"bulunamadı"},
{id:"h2-mohac",ad:"Mohaç",y:"Mohaç",boyar:true,tip:"yerlesim",lat:45.993,lon:18.692,kol:["halka2/avusturya#3"],kaynak:"bulunamadı"},
{id:"h2-simontorna",ad:"Şimontorna",y:"Şimontorna",boyar:true,tip:"yerlesim",lat:46.75,lon:18.551,kol:["halka2/avusturya#4"],kaynak:"bulunamadı"},
{id:"h2-budin",ad:"Budin",y:"Budin",boyar:true,tip:"yerlesim",lat:47.498,lon:19.04,kol:["halka2/avusturya#5"],kaynak:"bulunamadı"},
{id:"h2-estergon",ad:"Estergon",y:"Estergon",boyar:true,tip:"yerlesim",lat:47.795,lon:18.74,kol:["halka2/avusturya#6"],kaynak:"bulunamadı"},

// ───── HABSBURG KESİMİ (Komárom → Viyana) ─────
// 🔴 SINIR BURADA: Komárom Osmanlı eline HİÇ geçmedi (dün ölçüldü,
//   data/yerlesimler_ek29.js). Yani ağın Osmanlı ayağı Estergon'da biter,
//   Habsburg ayağı Komárom'da başlar. İki sistem BURADA temas eder.
{id:"h2-komarom",ad:"Komárom (Komárno)",y:"Komárom (Komárno)",boyar:true,tip:"yerlesim",lat:47.7625,lon:18.125,kol:["halka2/avusturya#7"],kaynak:"NOKTA MENZİL ek29 — TDV `uyvar` sancak listesi"},
{id:"h2-yanikkale",ad:"Yanıkkale (Győr)",y:"Yanıkkale (Győr)",boyar:true,tip:"yerlesim",lat:47.685,lon:17.635,kol:["halka2/avusturya#8"],kaynak:"bulunamadı"},
{id:"h2-bratislava",ad:"Bratislava",y:"Bratislava",boyar:true,tip:"yerlesim",lat:48.146,lon:17.107,kol:["halka2/avusturya#9"],kaynak:"bulunamadı"},
{id:"h2-viyana",ad:"Viyana",y:"Viyana",boyar:true,tip:"yerlesim",lat:48.208,lon:16.373,kol:["halka2/avusturya#10"],kaynak:"Schobesberger v.d., European Postal Networks, BRILL doi 10.1163/9789004277199_003"},

];

window.KORIDOR_HALKA2_KENAR = [

// ───── OSMANLI KESİMİ · f/t = menzil kurumunun ömrü (TDV doğruladı) ─────
// saat_cinsi "turetildi": kuş uçuşu km / 4,25 km-sa — koridor.js'in KENDİ
//   kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv). Arşivden ÖLÇÜLMÜŞ saat
//   YOK, o yüzden hiçbiri "olculdu" değil.
{u1:"belgrad",u2:"h2-varadin",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:67.0,saat:15.8,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2-varadin",u2:"h2-osek",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:97.4,saat:22.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2-osek",u2:"h2-mohac",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:48.9,saat:11.5,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2-mohac",u2:"h2-simontorna",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:85.0,saat:20.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2-simontorna",u2:"h2-budin",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:91.1,saat:21.4,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2-budin",u2:"h2-estergon",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:40.0,saat:9.4,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},

// ───── TEMAS KENARI · iki sistemin birbirine değdiği yer ─────
// 🔴 Estergon (Osmanlı) ↔ Komárom (Habsburg). Bu kenar bir POSTA HATTI
//   DEĞİL, iki ağın SINIRDA temasıdır — ve tam da bu yüzden ayrı damgalandı.
//   Sınır boyunca haberleşme olduğu bilinir ama bu kenarın kurumsal bir
//   karşılığını BULAMADIM. kesinlik:3, ve `kalinlik:"tali"`.
{u1:"h2-estergon",u2:"h2-komarom",kanat:"halka2",kol:"avusturya",kalinlik:"tali",yon:"cift",km:46.1,saat:10.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı — iki ağın sınır teması, kurumsal karşılığı ölçülmedi"},

// ───── HABSBURG KESİMİ · f = Reichspost'un kuruluşu (BRILL) ─────
// ⚠️ t: ÖLÇÜLMEDİ. Reichspost'un sonu (Thurn und Taxis'in tasfiyesi) için
//   kaynak aramadım; atlasın ufku yazıldı. "1839" YAZMADIM — o Osmanlı
//   menzilinin sonudur, BAŞKA bir kurumun tarihi buraya taşınamaz.
{u1:"h2-komarom",u2:"h2-yanikkale",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:37.7,saat:8.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1490-01-01",t:"1923-10-29",donem_cinsi:"kurum",kesinlik:3,kaynak:"Schobesberger v.d., European Postal Networks, BRILL doi 10.1163/9789004277199_003"},
{u1:"h2-yanikkale",u2:"h2-bratislava",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:64.7,saat:15.2,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1490-01-01",t:"1923-10-29",donem_cinsi:"kurum",kesinlik:3,kaynak:"Schobesberger v.d., European Postal Networks, BRILL doi 10.1163/9789004277199_003"},
{u1:"h2-bratislava",u2:"h2-viyana",kanat:"halka2",kol:"avusturya",kalinlik:"ana",yon:"cift",km:54.9,saat:12.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu",f:"1490-01-01",t:"1923-10-29",donem_cinsi:"kurum",kesinlik:3,kaynak:"Schobesberger v.d., European Postal Networks, BRILL doi 10.1163/9789004277199_003"},

];

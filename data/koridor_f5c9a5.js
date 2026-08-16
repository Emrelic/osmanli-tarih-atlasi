// KORİDOR AĞI — HALKA 2B · İRAN · RUSYA · LEHİSTAN · VENEDİK kolları
//
// İŞÇİ oturum: KORİDOR HALKA2B · 16 Ağustos 2026 · görev tahta M-0233
// 🔴 data/koridor.js ve data/koridor_halka2.js'e DOKUNULMADI — ikisi de
//    BAŞKASININ dosyası. Bu ÜÇÜNCÜ bir dosyadır ve yalnız 2-5. kolları taşır.
//
// ŞEMA: koridor.js şeması izlendi (dugum.boyar · kenar.saat_cinsi ayrımı dâhil),
//   ÜÇ alan EKLENDİ ve gerekçeleri aşağıda: eksik_durak · kopuk_sebep · kalinlik:"kopuk"
// KOORDİNATLAR girdi.yukle()'den alındı, ELLE KOPYALANMADI.
//
// ═══════════════ ZAMAN ÇERÇEVESİ — TDV, ve KENDİM ÖLÇTÜM ═══════════════
//   `menzil--osmanli` (HTTP 200, gövdesi okundu — bkz. ilerleme dosyası):
//     kuruluş 1539 (Lutfi Paşa) · kaldırılış 1839 (posta teşkilâtı)
//     aralık "üç saatten yirmi sekiz saate kadar"
//   ⇒ f:1539-01-01 / t:1839-01-01 · ve BANT 3-28 saat.
//
// ═══════════════ 🔴 EN ÖNEMLİ ALAN: eksik_durak ═══════════════
//   Altı kenarın saati bandın DIŞINA çıkıyordu. Şartname bunu şöyle okur:
//   "ya yanlış duraktır ya EKSİK DURAK vardır". Ölçtüm: altısında da sebep
//   İKİNCİSİ — ara durak yerleşim verisinde YOK.
//   ⇒ Bu altısına saat TÜRETİLMEDİ. Türetmek "40 saatlik TEK konak vardı"
//     demek olurdu ve TDV'nin kendi aralığını çürütürdü. km GERÇEK, saat YOK.
//   ⇒ Ve boşluk serbest metne değil `eksik_durak:true` ALANINA yazıldı:
//     bir `if` ile sorulamayan ders, ders değildir (CLAUDE.md §11, ⑪. sınıf).
//
// ⚠️ İKİ SAYI AYRI DURUR, TEK SATIRDA BİRLEŞTİRİLMEZ:
//     saati ÖLÇÜLMÜŞ kenar: hepsi 3-28 bandının İÇİNDE (ihlal 0)
//     kopuk kenar: 6 — bunlar "bandı ihlal" değil, "ölçülemedi"dir
//   "Ölçülemedi" asla "temiz" diye raporlanmaz (CLAUDE.md §11).
//
// ═══════════════ 🔴 GÜZERGÂH KAYNAKSIZ — ve GİZLEMİYORUM ═══════════════
//   TDV `menzil--osmanli` ana kolları sayıyor ama DURAKLARINI saymıyor.
//   Aşağıdaki durakların HEPSİ veride VAR OLAN yerleşimlerden SEÇİLDİ;
//   tek bir nokta yaratılmadı. kesinlik:3 · kaynak:"bulunamadı".
//   📌 SEÇİLMİŞ durak ile UYDURULMUŞ durak ayrı şeydir: seçilmiş durak
//     veride zaten vardır, uydurulmuş durak yoktur.
//
// ═══════════════ İKİ GÜZERGÂH KARARI — açıkça yazıyorum ═══════════════
//  ① İRAN kolu Van'dan sonra KUZEY (Hoy) yerine GÜNEY (Başkale-Selmâs)
//    hattından geçiriliyor. Sebep ÖLÇÜM: Van-Hoy 135,7 km / 31,9 saat ile
//    bandın DIŞINDA, Van-Başkale-Selmâs-Merend ise 17,4 / 16,1 / 21,6 saat
//    ile TAMAMEN İÇİNDE. Hoy düşürülmedi, Selmâs'tan tâli kol olarak asıldı
//    (42,4 km / 10,0 saat). ⚠️ İkisi de kaynaksız; seçimi yapan TDV'nin
//    KENDİ bandı oldu, benim tercihim değil.
//  ② VENEDİK kolu Draç/Avlonya'da BİTİYOR. Venedik'in kendisi YAZILMADI:
//    Adriyatik'i geçen ayak BAŞKA bir kurumdur (Venedik posta sistemi) ve
//    onu ÖLÇMEDİM. koridor_halka2.js'in "1839'u başka bir kuruma taşımam"
//    kararının aynısı.
// =====================================================================

window.KORIDOR_H2B_DUGUM = [

// ───── ① İRAN KOLU · Diyarbekir → Van → Tebriz (Safevî seferlerinin güney yolu) ─────
// 🔴 koridor.js anadolu/orta#12 ile AYNI düğüm — çift boyamamak için boyar:false
{id:"diyarbakir",ad:"Diyarbakır",y:"Diyarbakır",boyar:false,tip:"baglanti-ucu",lat:37.911,lon:40.237,kol:["halka2b/iran"],kaynak:"koridor.js anadolu/orta#12 ile AYNI düğüm — çift boyamamak için boyar:false"},
// 🔴 koridor.js anadolu/sol-tebriz#2 ile AYNI düğüm — boyar:false
{id:"tebriz",ad:"Tebriz",y:"Tebriz",boyar:false,tip:"baglanti-ucu",lat:38.08,lon:46.292,kol:["halka2b/iran"],kaynak:"koridor.js anadolu/sol-tebriz#2 ile AYNI düğüm — boyar:false"},
{id:"h2b-bitlis",ad:"Bitlis",y:"Bitlis",boyar:true,tip:"yerlesim",lat:38.401,lon:42.108,kol:["halka2b/iran#1"],kaynak:"bulunamadı"},
{id:"h2b-van",ad:"Van",y:"Van",boyar:true,tip:"yerlesim",lat:38.502,lon:43.393,kol:["halka2b/iran#2"],kaynak:"bulunamadı"},
{id:"h2b-baskale",ad:"Başkale",y:"Başkale",boyar:true,tip:"yerlesim",lat:38.045,lon:44.01,kol:["halka2b/iran#3"],kaynak:"bulunamadı"},
{id:"h2b-selmas",ad:"Selmâs",y:"Selmâs (Dilman)",boyar:true,tip:"yerlesim",lat:38.1983,lon:44.7654,kol:["halka2b/iran#4"],kaynak:"bulunamadı"},
{id:"h2b-merend",ad:"Merend",y:"Merend",boyar:true,tip:"yerlesim",lat:38.4328,lon:45.775,kol:["halka2b/iran#5"],kaynak:"bulunamadı"},
{id:"h2b-hoy",ad:"Hoy",y:"Hoy",boyar:true,tip:"yerlesim",lat:38.5503,lon:44.9521,kol:["halka2b/iran-hoy#1"],kaynak:"bulunamadı"},

// ───── ② RUSYA KOLU · Özi → Kırım → Kefe → Azak ─────
// 🔴 koridor.js rumeli/sag#9 ile AYNI düğüm — boyar:false
{id:"ozi",ad:"Özi",y:"Özi",boyar:false,tip:"baglanti-ucu",lat:46.6247,lon:31.5421,kol:["halka2b/rusya"],kaynak:"koridor.js rumeli/sag#9 ile AYNI düğüm — boyar:false"},
// 🔴 koridor.js rumeli/sag#10 (y:Bahçesaray) ile AYNI düğüm — boyar:false
{id:"kirim",ad:"Bahçesaray",y:"Bahçesaray",boyar:false,tip:"baglanti-ucu",lat:44.753,lon:33.861,kol:["halka2b/rusya"],kaynak:"koridor.js rumeli/sag#10 (y:Bahçesaray) ile AYNI düğüm — boyar:false"},
{id:"h2b-orkapi",ad:"Or Kapı",y:"Or Kapı (Ferahkirman)",boyar:true,tip:"yerlesim",lat:46.16,lon:33.69,kol:["halka2b/rusya#1"],kaynak:"bulunamadı"},
{id:"h2b-gozleve",ad:"Gözleve",y:"Gözleve (Kezlev)",boyar:true,tip:"yerlesim",lat:45.1904,lon:33.3669,kol:["halka2b/rusya#2"],kaynak:"bulunamadı"},
{id:"h2b-akmescid",ad:"Akmescid",y:"Akmescid",boyar:true,tip:"yerlesim",lat:44.9521,lon:34.1024,kol:["halka2b/rusya#3"],kaynak:"bulunamadı"},
{id:"h2b-karasubazar",ad:"Karasubazar",y:"Karasubazar",boyar:true,tip:"yerlesim",lat:45.0556,lon:34.6,kol:["halka2b/rusya#5"],kaynak:"bulunamadı"},
{id:"h2b-eskikirim",ad:"Eski Kırım",y:"Eski Kırım (Solhat)",boyar:true,tip:"yerlesim",lat:45.0281,lon:35.1078,kol:["halka2b/rusya#6"],kaynak:"bulunamadı"},
{id:"h2b-kefe",ad:"Kefe",y:"Kefe",boyar:true,tip:"yerlesim",lat:45.032,lon:35.382,kol:["halka2b/rusya#7"],kaynak:"bulunamadı"},
{id:"h2b-kerc",ad:"Kerç",y:"Kerç",boyar:true,tip:"yerlesim",lat:45.356,lon:36.467,kol:["halka2b/rusya#8"],kaynak:"bulunamadı"},
{id:"h2b-taman",ad:"Taman",y:"Taman",boyar:true,tip:"yerlesim",lat:45.2029,lon:36.7172,kol:["halka2b/rusya#9"],kaynak:"bulunamadı"},
{id:"h2b-azak",ad:"Azak",y:"Azak",boyar:true,tip:"yerlesim",lat:47.113,lon:39.423,kol:["halka2b/rusya#10"],kaynak:"bulunamadı"},

// ───── ③ LEHİSTAN KOLU · Akkirman → Boğdan → Hotin/Kamaniçe → Lvov ─────
// 🔴 koridor.js rumeli/sag#8 ile AYNI düğüm — boyar:false
{id:"akkirman",ad:"Akkirman",y:"Akkirman",boyar:false,tip:"baglanti-ucu",lat:46.1968,lon:30.3431,kol:["halka2b/lehistan"],kaynak:"koridor.js rumeli/sag#8 ile AYNI düğüm — boyar:false"},
{id:"h2b-bender",ad:"Bender",y:"Bender",boyar:true,tip:"yerlesim",lat:46.831,lon:29.481,kol:["halka2b/lehistan#1"],kaynak:"bulunamadı"},
{id:"h2b-orhei",ad:"Orhei",y:"Orhei",boyar:true,tip:"yerlesim",lat:47.383,lon:28.823,kol:["halka2b/lehistan#2"],kaynak:"bulunamadı"},
{id:"h2b-yas",ad:"Yaş",y:"Yaş",boyar:true,tip:"yerlesim",lat:47.157,lon:27.601,kol:["halka2b/lehistan#3"],kaynak:"bulunamadı"},
{id:"h2b-sucava",ad:"Suçava",y:"Suçava (Suceava)",boyar:true,tip:"yerlesim",lat:47.633,lon:26.25,kol:["halka2b/lehistan#4"],kaynak:"bulunamadı"},
{id:"h2b-cernovitz",ad:"Çernovitz",y:"Çernovitz (Çernivtsi)",boyar:true,tip:"yerlesim",lat:48.292,lon:25.935,kol:["halka2b/lehistan#5"],kaynak:"bulunamadı"},
{id:"h2b-hotin",ad:"Hotin",y:"Hotin",boyar:true,tip:"yerlesim",lat:48.51,lon:26.492,kol:["halka2b/lehistan#6"],kaynak:"bulunamadı"},
{id:"h2b-kamanice",ad:"Kamaniçe",y:"Kamaniçe",boyar:true,tip:"yerlesim",lat:48.674,lon:26.574,kol:["halka2b/lehistan#7"],kaynak:"bulunamadı"},
{id:"h2b-yazlofca",ad:"Yazlofça",y:"Yazlofça (Yazlovets)",boyar:true,tip:"yerlesim",lat:48.951,lon:25.435,kol:["halka2b/lehistan#8"],kaynak:"bulunamadı"},
{id:"h2b-lvov",ad:"Lvov",y:"Lvov",boyar:true,tip:"yerlesim",lat:49.84,lon:24.03,kol:["halka2b/lehistan#9"],kaynak:"bulunamadı"},

// ───── ④ VENEDİK KOLU · Rumeli sol kol → Via Egnatia → Draç ─────
// 🔴 koridor.js rumeli/sol#8 ile AYNI düğüm — ORADA lat:null. Veride VAR (40,7500/23,0667) ama koridor.js BENİM DEĞİL, doldurmadım; koordinatöre bildirdim (tahta M-0261)
{id:"lanzaka",ad:"Lanzaka",y:"Lanzaka (Lagkadas)",boyar:false,tip:"baglanti-ucu",lat:null,lon:null,kol:["halka2b/venedik"],kaynak:"koridor.js rumeli/sol#8 ile AYNI düğüm — ORADA lat:null. Veride VAR (40,7500/23,0667) ama koridor.js BENİM DEĞİL, doldurmadım; koordinatöre bildirdim (tahta M-0261)"},
{id:"h2b-selanik",ad:"Selanik",y:"Selanik",boyar:true,tip:"yerlesim",lat:40.64,lon:22.944,kol:["halka2b/venedik#1"],kaynak:"bulunamadı"},
{id:"h2b-manastir",ad:"Manastır",y:"Manastır",boyar:true,tip:"yerlesim",lat:41.031,lon:21.335,kol:["halka2b/venedik#2"],kaynak:"bulunamadı"},
{id:"h2b-ohri",ad:"Ohri",y:"Ohri",boyar:true,tip:"yerlesim",lat:41.1194,lon:20.8028,kol:["halka2b/venedik#3"],kaynak:"bulunamadı"},
{id:"h2b-ilbasan",ad:"İlbasan",y:"İlbasan (Elbasan)",boyar:true,tip:"yerlesim",lat:41.113,lon:20.083,kol:["halka2b/venedik#4"],kaynak:"bulunamadı"},
{id:"h2b-drac",ad:"Draç",y:"Draç",boyar:true,tip:"yerlesim",lat:41.323,lon:19.455,kol:["halka2b/venedik#5"],kaynak:"bulunamadı"},
{id:"h2b-berat",ad:"Berat",y:"Berat",boyar:true,tip:"yerlesim",lat:40.705,lon:19.951,kol:["halka2b/venedik-avlonya#1"],kaynak:"bulunamadı"},
{id:"h2b-avlonya",ad:"Avlonya",y:"Avlonya",boyar:true,tip:"yerlesim",lat:40.466,lon:19.489,kol:["halka2b/venedik-avlonya#2"],kaynak:"bulunamadı"},

];

window.KORIDOR_H2B_KENAR = [

// ───── ① İRAN KOLU · Diyarbekir → Van → Tebriz (Safevî seferlerinin güney yolu) ─────
// 🔴 KOPUK — ara duraklar veride YOK — Silvan (Meyyafarikin) · Tatvan · Ahlat · Adilcevaz
{u1:"diyarbakir",u2:"h2b-bitlis",kanat:"halka2b",kol:"iran",kalinlik:"kopuk",yon:"cift",km:172.4,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"ara duraklar veride YOK — Silvan (Meyyafarikin) · Tatvan · Ahlat · Adilcevaz",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-bitlis",u2:"h2b-van",kanat:"halka2b",kol:"iran",kalinlik:"ana",yon:"cift",km:112.5,saat:26.5,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-van",u2:"h2b-baskale",kanat:"halka2b",kol:"iran",kalinlik:"ana",yon:"cift",km:74.0,saat:17.4,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-baskale",u2:"h2b-selmas",kanat:"halka2b",kol:"iran",kalinlik:"ana",yon:"cift",km:68.2,saat:16.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-selmas",u2:"h2b-merend",kanat:"halka2b",kol:"iran",kalinlik:"ana",yon:"cift",km:91.9,saat:21.6,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-merend",u2:"tebriz",kanat:"halka2b",kol:"iran",kalinlik:"ana",yon:"cift",km:59.8,saat:14.1,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-selmas",u2:"h2b-hoy",kanat:"halka2b",kol:"iran-hoy",kalinlik:"tali",yon:"cift",km:42.4,saat:10.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// ───── ② RUSYA KOLU · Özi → Kırım → Kefe → Azak ─────
// 🔴 KOPUK — ara duraklar veride YOK — Kilburun · Yediçkul bozkırının menzil durakları
{u1:"ozi",u2:"h2b-orkapi",kanat:"halka2b",kol:"rusya",kalinlik:"kopuk",yon:"cift",km:172.6,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"ara duraklar veride YOK — Kilburun · Yediçkul bozkırının menzil durakları",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-orkapi",u2:"h2b-gozleve",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:110.7,saat:26.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-gozleve",u2:"h2b-akmescid",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:63.5,saat:14.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-akmescid",u2:"kirim",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:29.2,saat:6.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-akmescid",u2:"h2b-karasubazar",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:40.8,saat:9.6,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-karasubazar",u2:"h2b-eskikirim",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:40.0,saat:9.4,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-eskikirim",u2:"h2b-kefe",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:21.6,saat:5.1,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-kefe",u2:"h2b-kerc",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:92.3,saat:21.7,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-kerc",u2:"h2b-taman",kanat:"halka2b",kol:"rusya",kalinlik:"ana",yon:"cift",km:25.9,saat:6.1,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// 🔴 KOPUK — Azak Denizi'nin doğu kıyısında veride durak YOK; bu bağ büyük ölçüde DENİZ aşırıydı, kara kalibrasyonu (4,25 km-sa) uygulanamaz
{u1:"h2b-taman",u2:"h2b-azak",kanat:"halka2b",kol:"rusya",kalinlik:"kopuk",yon:"cift",km:297.5,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"Azak Denizi'nin doğu kıyısında veride durak YOK; bu bağ büyük ölçüde DENİZ aşırıydı, kara kalibrasyonu (4,25 km-sa) uygulanamaz",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// ───── ③ LEHİSTAN KOLU · Akkirman → Boğdan → Hotin/Kamaniçe → Lvov ─────
{u1:"akkirman",u2:"h2b-bender",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:96.6,saat:22.7,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-bender",u2:"h2b-orhei",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:79.0,saat:18.6,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-orhei",u2:"h2b-yas",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:95.6,saat:22.5,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-yas",u2:"h2b-sucava",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:114.6,saat:27.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-sucava",u2:"h2b-cernovitz",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:76.9,saat:18.1,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-cernovitz",u2:"h2b-hotin",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:47.7,saat:11.2,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-hotin",u2:"h2b-kamanice",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:19.2,saat:4.5,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-kamanice",u2:"h2b-yazlofca",kanat:"halka2b",kol:"lehistan",kalinlik:"ana",yon:"cift",km:88.9,saat:20.9,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// 🔴 KOPUK — ara duraklar veride YOK — Haliç (Halicz) · Rohatin
{u1:"h2b-yazlofca",u2:"h2b-lvov",kanat:"halka2b",kol:"lehistan",kalinlik:"kopuk",yon:"cift",km:141.8,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"ara duraklar veride YOK — Haliç (Halicz) · Rohatin",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// ───── ④ VENEDİK KOLU · Rumeli sol kol → Via Egnatia → Draç ─────
// 🔴 KOPUK — ÖLÇÜLEMEDİ: uç düğüm koridor.js'te lat:null (menzil-eslesmedi). Veride Lanzaka (Lagkadas) 40,7500/23,0667 olarak VAR; koridor.js doldurursa bu kenar 16,0 km / 3,8 saat olur ve bandın İÇİNDEdir
{u1:"lanzaka",u2:"h2b-selanik",kanat:"halka2b",kol:"venedik",kalinlik:"kopuk",yon:"cift",km:null,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"ÖLÇÜLEMEDİ: uç düğüm koridor.js'te lat:null (menzil-eslesmedi). Veride Lanzaka (Lagkadas) 40,7500/23,0667 olarak VAR; koridor.js doldurursa bu kenar 16,0 km / 3,8 saat olur ve bandın İÇİNDEdir",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
// 🔴 KOPUK — ara duraklar veride YOK — Vodina (Edessa) · Ostrovo (Arnissa)
{u1:"h2b-selanik",u2:"h2b-manastir",kanat:"halka2b",kol:"venedik",kalinlik:"kopuk",yon:"cift",km:142.2,saat:null,saat_cinsi:"turetilmedi",saat_kaynak:"TEK konak DEĞİL — saat türetmek TDV'nin 3-28 saat aralığını çürütürdü",eksik_durak:true,kopuk_sebep:"ara duraklar veride YOK — Vodina (Edessa) · Ostrovo (Arnissa)",f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-manastir",u2:"h2b-ohri",kanat:"halka2b",kol:"venedik",kalinlik:"ana",yon:"cift",km:45.7,saat:10.8,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-ohri",u2:"h2b-ilbasan",kanat:"halka2b",kol:"venedik",kalinlik:"ana",yon:"cift",km:60.3,saat:14.2,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-ilbasan",u2:"h2b-drac",kanat:"halka2b",kol:"venedik",kalinlik:"ana",yon:"cift",km:57.5,saat:13.5,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-ilbasan",u2:"h2b-berat",kanat:"halka2b",kol:"venedik-avlonya",kalinlik:"tali",yon:"cift",km:46.7,saat:11.0,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},
{u1:"h2b-berat",u2:"h2b-avlonya",kanat:"halka2b",kol:"venedik-avlonya",kalinlik:"tali",yon:"cift",km:47.2,saat:11.1,saat_cinsi:"turetildi",saat_kaynak:"kuş uçuşu km / 4.25 km-sa — koridor.js kalibrasyonu (Akşehir-İstanbul 85 saat, arşiv)",eksik_durak:false,f:"1539-01-01",t:"1839-01-01",donem_cinsi:"kurum",kesinlik:3,kaynak:"bulunamadı"},

];

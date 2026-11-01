// data/su_gecitleri.js — DENİZ/BOĞAZ GEÇİTLERİ (post-it #151, 2 Kasım 2026)
//
// NİÇİN VAR — Emre (#151): "İnebahtı sürtünmeli yürüyüşle denizi, boğazı, nehri
//   geçerek karşı kıyıyı boyayabilir, ama denizi geçerken suyun derinliği,
//   genişliği ve akıntısı yüzünden epey bedel ödemeli. Kuş uçuşu daha uzak ama
//   kara bağlantısı olan yerleşim bu tip yerleri boyamakta avantajlı olmalı."
//
// Motor (`uret_petek.py`, yalnız MOTOR_SU_GECIS=1 iken) suyu kesen ızgara
// adımına GENİŞLİK sınıfından taban bedel yazar, ETOPO derinliğiyle çarpar.
// Bu dosya o bedelin İKİ düzeltmesini taşır:
//   tur     kale-cifti · feribot — kayıtlı tarihî geçiş: bedel en çok nehir
//           tablosundaki aynı kademe (NEHIR_BEDEL_SAAT) kadar olur
//   akinti  bedel çarpanı (1 = durgun). Kayıt yoksa 1.
//   etki_km adımın orta noktası bu yarıçaptaysa kayıt uygulanır
//
// ⚠️ `akinti` katsayıları EDİTORYALDİR ve KALİBRE EDİLMEDİ: boğazların bilinen
//    yüzey akıntısı sıralamasından (İstanbul ≥ Messina ≥ Çanakkale > Kerç >
//    Rio-Antirrio) türetildi; kaynakla saat ölçüsü BULUNAMADI. Beyandır.
// ⚠️ `f`/`t` gecitler.js'teki gibi OKUNMAZ: geçiş kaleden eskidir; alan veri
//    motordan uzun yaşasın diye doldurulur.
// Motor BU DOSYAYI YALNIZ OKUR; site yüklemez (index.html'de yok).
window.SU_GECITLERI = [
{ ad:"İstanbul Boğazı (Rumeli Hisarı–Anadolu Hisarı)", su:"İstanbul Boğazı",
  lat:41.083, lon:29.061, tur:"kale-cifti", akinti:1.5, etki_km:25,
  f:"1452-08-31", t:"2000-12-31",
  kaynak:"TDV rumeli-hisari (1452 inşası, Boğazkesen) · TDV anadolu-hisari",
  not:"orta nokta iki hisarın arası; f Rumeli Hisarı'nın tamamlanışı — geçiş daha eskidir" },
{ ad:"Çanakkale Boğazı (Kilidbahir–Kale-i Sultaniye)", su:"Çanakkale Boğazı",
  lat:40.148, lon:26.390, tur:"kale-cifti", akinti:1.3, etki_km:25,
  f:"1463-01-01", t:"2000-12-31",
  kaynak:"TDV kilidbahir · TDV canakkale (Fâtih'in 1462-63 kale çifti)",
  not:"orta nokta iki kalenin arası; f yalnız yıl" },
{ ad:"Rio–Antirrio (Kastel-i Mora–Kastel-i Rumeli)", su:"Korint Körfezi ağzı",
  lat:38.320, lon:21.775, tur:"kale-cifti", akinti:1.0, etki_km:15,
  f:"1499-01-01", t:"2000-12-31",
  kaynak:"TDV inebahti (II. Bayezid'in İnebahtı seferi ve boğazın iki yakasındaki kaleler)",
  not:"#151'in boğazı; orta nokta iki kalenin arası; f yalnız yıl" },
{ ad:"Messina Boğazı (Messina–Villa San Giovanni)", su:"Messina Boğazı",
  lat:38.205, lon:15.600, tur:"feribot", akinti:1.4, etki_km:20,
  f:"1281-01-01", t:"2000-12-31",
  kaynak:"bulunamadı — Sicilya-Kalabriya feribot geçişi; tarih ufuk sınırı",
  not:"f 1281 pencere başıdır, geçiş daha eskidir" },
{ ad:"Kerç Boğazı (Yenikale–Taman)", su:"Kerç Boğazı",
  lat:45.350, lon:36.650, tur:"feribot", akinti:1.2, etki_km:25,
  f:"1281-01-01", t:"2000-12-31",
  kaynak:"TDV kirim · TDV yenikale (Kırım-Taman geçişi)",
  not:"f 1281 pencere başıdır, geçiş daha eskidir" },
];

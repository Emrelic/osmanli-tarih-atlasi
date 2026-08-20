// =====================================================================
// FERHAD PAŞA HATTI — Van eyaletinin DOĞU sancakları
// Oturum: FERHAD PAŞA HATTI · kutu 0021 / H-0019 · H-0027 · H-0028
//
// 🔴 BU DOSYA, ŞARTNAMEDE BEKLENEN İŞİ YAPMIYOR — ÇÜNKÜ O İŞ BAŞKA
//    ÇIKTI. Ölçüm (M-0827 · M-0831):
//      H-0028'in saydığı 18 yerin 18'i de veride ZATEN VAR.
//      py arac/nicin_bos.py --lat 38.045 --lon 44.010 --gun 1590-03-21 \
//         --yaricap 300   →   300 km içinde 44 nokta, en yakın 58,0 km
//      ⇒ `CLAUDE.md §2`nin sorusu ("o bölgede nokta var mı?") EVET.
//         Kusur NOKTASIZLIKTA değil, DÖNEM VERİSİNDE — ve o kayıtlar
//         BAŞKA DOSYALARDA (yerlesimler.js · ek26 · kalite4).
//    Bu dosya yalnız GERÇEKTEN EKSİK olan noktaları taşır.
//
// ⚠️ KAPSAM: dördü de Van eyaletinin DOĞU kuşağında, yani H-0019
//    ("Gümrü Başkale Çaldıran neden farklı renkte") ve H-0027 ("Van'ın
//    doğusundaki topraklar alınmamış mı") maddelerinin tam üstünde.
//    Van eyaletinin BATI sancakları (Adilcevaz · Ahlat · Müküs · Hizan)
//    da eksik ölçüldü ama KAPSAM DIŞI — koordinatöre bildirildi,
//    buraya YAZILMADI.
//
// ─────────────────────────────────────────────────────────────────────
// KAYNAK — TDV, HTTP koduyla ve İÇERİK OKUNARAK doğrulandı (`§4`)
//
//   van (200) — Van eyaletine bağlı birimlerin TAM listesi, birebir:
//     "Adilcevaz, Bitlis, Erciş, Muş, BARGİRİ, Hizan, Hakkâri, Müküs,
//      Kârkâr, Şırvi, Kisan, Espayrid, Ağakis, MAHMUDİ ve KOTUR"
//     ve: Van Kalesi'nin fethi 24 Ağustos 1548 → "bölge beylerbeyilik
//     haline getirildi"
//     🔴 Yani Mahmudi (Hoşap) ve Kotur, TDV'nin kendi listesinde OSMANLI
//        idarî birimidir. Bu, `ek26`nın aynı kuşağı `iran` yazmasını
//        doğrudan çürütür (o dosya benim değil — bildirildi, dokunulmadı).
//
//   hakkari (200) — "XVI. yüzyılın başlarında Osmanlı idaresine giren
//     yöre" ... Van fethedilince "kurulan Van eyaletine bağlandı" ve
//     "sahiplerine ait olarak kabul edilen sancaklardan (OCAKLIK) biri
//     haline getirildi". Çölemerik ve Gever (Yüksekova) bu birimde.
//     ⚠️ `colemerik` slug'ı 200 döndürür ama gövdesi TEK SATIR:
//        "bk. HAKKÂRİ" — ÇAPRAZ GÖNDERME STUB'I. O yüzden dayanak
//        `hakkari`ye bağlandı, `colemerik`e değil.
//
//   maku (200) — Kotur için ikinci dayanak, birebir:
//     "1639 yılında IV. Murad ... Kasrışîrin Antlaşması çerçevesinde
//      Safevîler'den bölgede bulunan KOTUR KALESİ'yle birlikte Mâkû
//      Kalesi'nin de yıkılmasını istedi"
//
// ─────────────────────────────────────────────────────────────────────
// KIRILMA GÜNLERİ — HİÇBİRİ YENİ DEĞİL, hepsi ÇEKİRDEKTE maddeli
//   1548-08-25  olaylar*: "Van'ın fethi ve doğu sınırının sabitlenmesi"
//   1639-05-17  olaylar.js:92 Kasr-ı Şîrîn Antlaşması
//   1281/1351/1467/1502 zinciri: Van kaydının (yerlesimler.js:234) kendi
//   günleri — birebir kopyalandı, yeni gün üretilmedi.
//   ⇒ `Değişmez 2` için SIFIR yeni kırılma günü.
//
// 3 KM MÜKERRER SINAVI (`§11`) — ÖLÇÜLDÜ, evren 2580 nokta:
//   Çölemerik 48,5 km (Yüksekova) · Hoşap 30,5 km (Başkale)
//   Bargiri   20,9 km (Çaldıran)  · Kotur 40,2 km (Özalp)
//   ⇒ dördü de GEÇER; en dar pay 20,9 km, eşiğin ~7 katı.
//
// ⚠️ `y:` ALANI BİLEREK YAZILMADI. Van 1548'de kuşatmayla alındı ama
//   TDV bu dört birim için EDİNİM BİÇİMİ söylemiyor. `VERI-YAPISI.md`:
//   "Bilinmiyorsa alanı hiç yazma. Eksik alan yanlış alandan iyidir."
//   İlk taslakta dördüne de `y:"kusatma"` yazmıştım — kaynaksızdı,
//   geri alındı.
// =====================================================================
window.YERLESIMLER_EK_FERHADPASA = [

// ───────── Van'ın GÜNEYDOĞUSU · Hakkâri ocaklığının merkezi ─────────
{ ad:"Çölemerik (Hakkâri)", tur:"sehir", lat:37.5744, lon:43.7408, g:0, k:3, m:"Van",
  // kaynak: hakkari — Van eyaletine bağlı OCAKLIK sancak; zincir Van
  // kaydıyla birebir aynı (aynı fetih, aynı eyalet).
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
     {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
     {f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},
     {f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  d:[{f:"1548-08-25",t:"1923-10-29"}], v:[] },

// ───────── Van'ın DOĞUSU · Mahmudi sancağının kale merkezi ─────────
{ ad:"Hoşap (Mahmudi)", tur:"kale", lat:38.2222, lon:43.7439, g:0, k:3, m:"Van",
  // kaynak: van — "Mahmudi" TDV'nin Van eyaleti birim listesinde ADIYLA
  // geçiyor. Hoşap Kalesi o sancağın merkezidir.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
     {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
     {f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},
     {f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  d:[{f:"1548-08-25",t:"1923-10-29"}], v:[] },

// ───────── Van'ın KUZEYDOĞUSU · Erciş ile Çaldıran arasındaki boşluk ─────────
{ ad:"Bargiri (Muradiye)", tur:"kale", lat:38.9931, lon:43.7669, g:0, k:3, m:"Van",
  // kaynak: van — "Bargiri" TDV'nin Van eyaleti birim listesinde geçiyor.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
     {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
     {f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},
     {f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  d:[{f:"1548-08-25",t:"1923-10-29"}], v:[] },

// ───────── HATTIN EN DOĞUSU · Kotur geçidi ─────────
// 🔴 Bu kayıt H-0027'nin ("Van'ın doğusundaki topraklar alınmamış mı")
//    doğrudan cevabıdır: TDV Kotur'u Van eyaletinin BİRİMİ olarak sayar.
//    Bitişi 1639-05-17 Kasr-ı Şîrîn'e bağlandı, çünkü `maku` maddesi
//    Kotur Kalesi'ni tam o antlaşma çerçevesinde anıyor. 1639 SONRASI
//    için ayrı bir Osmanlı dayanağı BULUNAMADI — o yüzden uzatılmadı.
{ ad:"Kotur", tur:"kale", lat:38.4750, lon:44.3958, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
     {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
     {f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},
     {f:"1502-01-01",t:"1548-08-25",d:"safevi"},
     {f:"1639-05-17",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1923-10-29",d:"kacar"}],
  d:[{f:"1548-08-25",t:"1639-05-17"}], v:[] },

];

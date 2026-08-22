// -*- coding: utf-8 -*-
// EPİR — Parga'nın yuttuğu 3.701 km²'yi bölen noktalar
// ===========================================================================
// EMRE'NİN ŞİKÂYETİ (22 Ağustos 2026):
//   "Parga genellikle Venedik'te görünüyor ama Parga'nın kuzeyindeki
//    topraklar yerleşim yeri olmadığı için büyük oranda Parga hâkimiyeti
//    nedeniyle Parga bölgesine boyanıyor. Hâlbuki bu kadar büyük bir bölge
//    sürekli Venedik bölgesi olmamıştır."
//   ve ölçütü: "haritaya bakan ve konuyu bilen bir adama 'tamam Parga
//    Osmanlı değildi ama bu kadar da büyük toprağı alıp Venedik'e
//    verdirmiş, bu abartı olmuş' dedirtmemeli."
//
// ÖLÇÜM (koordinatör, 22 Ağu 2026):
//   Parga'nın peteği   3.701 km² · kuzeye uzanım 96,9 km (39,29 → 40,16 K)
//   Epir kutusunda     YALNIZ 8 nokta; Parga'nın KUZEYİ tamamen boş
//   en yakın kuzey komşuları: Korfu 55,6 km (VENEDİK) · Yanya 56,6 km
//   ⇒ boşluğu paylaşan iki noktadan biri de Venedik olduğu için TAMPON YOK
//
// `CLAUDE.md §2`nin ders kitabı vakası: noktası olmayan bölge en yakın
// peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.
//
// 🟢 VE PARGA'NIN KENDİ KAYDI DOĞRU — ölçüldü, dokunulmadı:
//   `yerlesimler.js:1227` venedik 1401→1797 · fransa → ingiltere →
//   OSMANLI(antlaşma) 1819→1913. Hatalı olan kayıt değil KOMŞUSUZLUK.
//   ⇒ Bu dosya Parga'yı DÜZELTMİYOR, ÇEVRESİNİ DOLDURUYOR.
//
// ---------------------------------------------------------------------------
// KAYNAK DİSİPLİNİ — `CLAUDE.md §4`
//
// 🔴 Emre bir ChatGPT çıktısı paylaştı (Parga·İgumenitsa·Borsh·Sarandë·
// Ksamil kronolojisi). `§4` yapay zekâ üretimi metni `KULLANILMAZ` kümesine
// koyuyor. O metin bu dosyada DAYANAK OLARAK KULLANILMADI; yalnız "hangi
// TDV maddesine bakayım" sorusunu cevapladı — Vikipedi'nin rolü.
// Aşağıdaki iki kaydın ikisi de TDV GÖVDESİ OKUNARAK yazıldı.
//
// SLUG SINAVI (22 Ağu 2026, HTTP kodu):
//   🟢 CANLI  delvine · aydonat · yanya · arnavutluk · tepedelenli-ali-pasa · narda
//   🔴 ÖLÜ    ayasaranda · sarande · butrint · igumenitsa · sopot · borsh ·
//             margariti · margilic · paramithia · filat · suli · souli · epir
//   (`parga` ve `preveze` de ölü — CLAUDE.md'de zaten kayıtlı)
//
// ⚠️ NİÇİN YALNIZ İKİ NOKTA: Sarandë · Butrint · Borsh · İgumenitsa · Filat
// için TDV'de MADDE YOK ve elimde doğrulanmış akademik kaynak da yok.
// Tarih uydurmaktansa YAZMIYORUM. Onlar `oturumlar/NOKTA-EPIR.md`
// şartnamesiyle bir araştırma oturumuna verildi.
// 📌 `§4`: *"'bulunamadı' demek bir SONUÇTUR; uydurmaktan kat kat değerli."*
// ---------------------------------------------------------------------------
//
// 3 KM KURALI — 2593 noktanın tamamına karşı ölçüldü:
//   Aydonat   → en yakın mevcut nokta Parga ~22 km · Yanya ~37 km   ✓
//   Margiliç  → en yakın mevcut nokta Parga ~29 km · Yanya ~45 km   ✓
//
// KİMLİK: Epir Despotluğu künyesi `devletler.js`te YOK. Bölgedeki bütün
// komşular (Yanya · Arta · Preveze · Vonitsa) fetih öncesi için `bizans`
// kullanıyor; teamüle uyuldu.
//
// TARİH: 1913-03-06 (Yunanistan) — Parga · Yanya kayıtlarındaki tarihin
// aynısı, tutarlılık için.

window.YERLESIMLER_EPIR = [

{ ad:"Aydonat (Paramythia)", tur:"sehir", lat:39.4667, lon:20.5167, g:0, k:3, m:"Yanya",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// kaynak: TDV "aydonat" md. — gövde okundu, 22 Ağu 2026.
//   "Burası Yanya'nın 1430'da ele geçirilmesinin ardından Osmanlı
//    topraklarına katıldı."
//   "Aydonat olarak anılan kasaba Yanya sancağına bağlı bir kaza merkezi oldu."
//   "1531'de Delvine sancağı kurulduğunda Aydonat bu yeni birimin bir parçası oldu."
//   Gün için TDV "yanya" md.: "Yanya 1430'un Ekim ayında 'Türkler'in
//    Beylerbeyi' Sinan Paşa'ya teslim oldu." ⇒ ay biliniyor, gün BİLİNMİYOR;
//    `1430-10-01` yazıldı (`§4`: ay hassasiyeti ayın 1'ine genişler).
// k GEREKÇESİ: kaza merkezi ⇒ k:3 (tavan 280 km).
// ⚠️ ÇÖZÜLMEMİŞ GERİLİM, GİZLENMİYOR: `aydonat` md. Delvine sancağının
//   1531'de kurulduğunu söylüyor, `delvine` md. ise Delvine ŞEHRİNİN
//   1537'ye kadar kesin alınamadığını. İkisi bağdaşabilir (sancak bölge
//   adıyla önce kurulmuş, kasaba sonra düşmüş) ama DOĞRULANMADI.
//   Bu kayıt o gerilimden ETKİLENMİYOR — Aydonat'ın 1430'u iki maddede de
//   aynı. Delvine kaydı bu yüzden YAZILMADI.

{ ad:"Margiliç (Margariti)", tur:"sehir", lat:39.5500, lon:20.4167, g:0, k:4, m:"Yanya",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// kaynak: TDV "aydonat" md. — gövde okundu. Margariti'nin MÜSTAKİL maddesi
//   YOK (slug `margariti` ve `margilic` ikisi de 302 = ölü); ama `aydonat`
//   maddesi "Margariti nahiyesi"ni erken İslâmlaşma merkezi olarak ANIYOR.
//   ⇒ Osmanlı idarî birimi olduğu TDV ile SABİT.
// 🔴 TARİH BİR ÇIKARIMDIR, AÇIKÇA YAZILIYOR: TDV Margariti'nin fetih
//   tarihini VERMİYOR. 1430-10-01, komşusu Aydonat'ın TDV'de belgelenmiş
//   tarihinden ve ikisinin de Yanya sancağına bağlanmasından ÇIKARILDI.
//   Doğrudan alıntı DEĞİLDİR. Araştırma oturumu bunu doğrulasın ya da
//   çürütsün. (Emsal: `yerlesimler_hindistan.js` Asîrgarh kaydı — aynı
//   biçimde işaretlenmiş çıkarım.)
// k GEREKÇESİ: nahiye ⇒ k:4 (tavan 140 km). Aydonat'tan bir kademe küçük.

];

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
//   1548-08-24  olaylar*: "Van'ın fethi ve doğu sınırının sabitlenmesi"
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
{ ad:"Çölemerik (Hakkâri)", kur:"1349-01-01", kesinlik:"onyil", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: 1349'dan önce (el-Ömerî, ö. 749/1349) — TDV HAKKÂRİ (M. Tuncel): İbn Fazlullah el-Ömerî, et-Taʿrîf s. 38; ölüm yılı TDV İBN FAZLULLAH el-ÖMERÎ (A. el-Alevî). Kesinlik onyil. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'hakkari'.",  tur:"sehir", lat:37.5744, lon:43.7408, g:0, k:3, m:"Van",
  // kaynak: hakkari — Van eyaletine bağlı OCAKLIK sancak; zincir Van
  // kaydıyla birebir aynı (aynı fetih, aynı eyalet).
  s:[{f:"1349-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu",kaynak:"1351 DOLAYLI (bölgesel çıkarım, Çölemerik'e adıyla bağlı geçiş günü YOK): TDV hakkari — yöre İlhanlılar'dan sonra Karakoyunlular'ın ve Celâyirliler'in idaresine girdi, sonra Karakoyunlular'ın eline geçti; Timur gelince Çölemerik'te oturan yerel beyler Timur'a bağlılık bildirdi (tarih vermez) · TDV karakoyunlular — 1351 Bayram Hoca, merkez Van-Erciş · 1386'da Celâyirli kaydı bulunamadı · Emre kararı (a), POSTIT #31"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── Van'ın DOĞUSU · Mahmudi sancağının kale merkezi ─────────
{ ad:"Hoşap (Mahmudi)", tur:"kale", lat:38.2222, lon:43.7439, g:0, k:3, m:"Van",
  // kaynak: van — "Mahmudi" TDV'nin Van eyaleti birim listesinde ADIYLA
  // geçiyor. Hoşap Kalesi o sancağın merkezidir.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── Van'ın KUZEYDOĞUSU · Erciş ile Çaldıran arasındaki boşluk ─────────
{ ad:"Bargiri (Muradiye)", tur:"kale", lat:38.9931, lon:43.7669, g:0, k:3, m:"Van",
  // kaynak: van — "Bargiri" TDV'nin Van eyaleti birim listesinde geçiyor.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── HATTIN EN DOĞUSU · Kotur geçidi ─────────
// 🔴 Bu kayıt H-0027'nin ("Van'ın doğusundaki topraklar alınmamış mı")
//    doğrudan cevabıdır: TDV Kotur'u Van eyaletinin BİRİMİ olarak sayar.
//    Bitişi 1639-05-17 Kasr-ı Şîrîn'e bağlandı, çünkü `maku` maddesi
//    Kotur Kalesi'ni tam o antlaşma çerçevesinde anıyor. 1639 SONRASI
//    için ayrı bir Osmanlı dayanağı BULUNAMADI — o yüzden uzatılmadı.
//    Post-it #162 (29 Ekim 2026): 1724-30 ve 1731-32 Osmanlı pencereleri
//    Hoy'dan devralındı (abi merkez) — gerekçe `neden:` alanında.
{ ad:"Kotur", tur:"kale", lat:38.4750, lon:44.3958, g:0, k:3, m:"Van",
  neden:"POST-IT #162 (Emre, 29 Ekim 2026 — abi merkez merdiveni ⑤): 1724-1730 ve 1731-32 Osmanlı pencereleri AÇILDI; zincir Hoy'dan devralındı (BEYANLI YAKLAŞIKLIK). Kotur'u bu yıllar için adıyla anan kaynak hâlâ yok; karar iki bağımsız bağa dayanır ve ikisi aynı sonucu verir: ① ABİ MERKEZ (idarî): Uluerler, Sıtkı, 'Osmanlı-İran Sınır Tespiti Tartışmalarında Kotur'un Yeri (1849-1852)', Turkish Studies 10/5 (2015) s.329-356, DOI 10.7827/TurkishStudies.8080 — s.6: Kotur 'önceden Van Sancağı'na tabi' Mahmudi kazasının nahiyesi (Hurşid Paşa); s.17: Kasr-ı Şîrîn'e (1639) göre 'Osmanlı toprağı olarak kabul edilen Kotur nahiyesi, 1246 (1830-1831) senesine gelinceye kadar' Van sancağına tabi Mahmudi'ye bağlı (Derviş Paşa Lâyihası 1286/1869) · dn.10: Kılıç 2001, Osmanlı Araştırmaları XXI s.193 (Kılıç çekilemedi, atıfla). Van ve Mahmudi 1548'den beri Osmanlı. ② ABİ MERKEZ (iktisadî/coğrafî): aynı makale s.6, Şemseddin Sâmî Kâmûsu'l-A'lâm: Kotur 'Hoy'un 40 km güney batısında', 'Hoy'dan geçip Aras'a dökülen Kotur çayı üzerinde'. Hoy'un kendi zinciri kaynaklı (Bilgili & Beşe 2009, TD 911: 6 Mayıs 1724). Daha dar olan ② seçildi: Osmanlı yalnız iki bağın birlikte Osmanlı dediği yerde. AKSİ KAYIT: 1724-1736 için Kotur'u Safevî gösteren kaynak BULUNAMADI (TDV, Uluerler 2015, Özgüdenli 2013, Şahbaz 2024 tarandı; Iranica 403, çekilemedi). AÇIK ÇELİŞKİ (karar Emre'de, yazılmadı): Derviş Paşa 1639-1830 bütününü Osmanlı sayar; atlas 1639'da TDV maku'ya ('Safevîler'den … Kotur Kalesi'nin yıkılmasını istedi') dayanarak Safevî yazar — Derviş Paşa sınır davasında taraftır. ESKİ BEYAN — KARAR3-1016 (Emre #17, 16 Ekim 2026): 1724-1730/35 Osmanlı penceresi AÇILMADI. Kotur'u bu yıllar için ADIYLA anan kaynak BULUNAMADI: 1728 tahririnde Hoy livasının 9 nahiyesinde Kotur yok (Özgüdenli 2013, BOA TD 895, 901-912, 1066); Şahbaz 2024'te Kotur yalnız akarsu adı ('Kotur Çayı'); TDV urmiye, hoy, ahmed-pasa, van, maku'da yok. Komşu Hoy (1724-) ve Mâku (1724-1735) Osmanlı olduğundan haritada bu nokta Safevî ADACIĞI gibi görünebilir — bilinen, BEYANLI boşluk; bölgeden kaleye hüküm taşınmadı (D208). AYRI KALEM (yazılmadı): Curzon, Persia and the Persian Question I (1892) s.569-570 — 1849'da Türkler Kotur kalesini alıp İran garnizonunu çıkardı, 'over thirty years' kaldı, 1880 protokolünden 'some time later' teslim; bitiş YILI kaynakta yok ⇒ pencere açılmadı · KAYNAK-1015/G2 · KUTU-1016 0082/H-0010",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1639-05-17",t:"1724-05-06",d:"safevi"},{f:"1730-08-12",t:"1731-11-15",d:"safevi"},{f:"1732-01-08",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1925-10-31",d:"kacar"},{f:"1925-10-31",t:"2000-12-31",d:"iran",kaynak:"Encyclopaedia Iranica 'Ahmad Shah Qajar'; Library of Congress Country Studies: Iran"}],
  d:[{f:"1548-08-24",t:"1639-05-17"},{f:"1724-05-06",t:"1730-08-12",kaynak:"ABİ MERKEZ: Hoy — Uluerler 2015 (Turkish Studies 10/5) s.6, Kâmûsu'l-A'lâm: Kotur Hoy'un 40 km GB'sında, Hoy'dan geçen Kotur çayı üzerinde · idarî bağ Van/Mahmudi (aynı makale s.6, s.17) de Osmanlı · BEYANLI YAKLAŞIKLIK, zincir Hoy'dan devralındı (Bilgili & Beşe 2009, TD 911: 6 Mayıs 1724); bitiş Hoy'un 'karar bekliyor' bitişi · post-it #162"},{f:"1731-11-15",t:"1732-01-08",kaynak:"ABİ MERKEZ: Hoy — zincir Hoy'dan devralındı (TDV hoy; uç günler Hoy kaydının Tebriz'den aldığı günler) · BEYANLI YAKLAŞIKLIK · post-it #162"}], v:[] },

];

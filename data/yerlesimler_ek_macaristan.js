// =====================================================================
// NOKTA MACARİSTAN — kutu paketi 0023 · H-0001 · H-0002 · H-0005
// İŞÇİ oturum · 19-20 Ağustos 2026
//
// window.YERLESIMLER_EK_MACARISTAN  (CLAUDE.md §7: dosya adındaki ayırt
// edici parça DEĞİŞKEN adında da var)
//
// 🔴 DOSYA HENÜZ BAĞLANMADI — `arac/girdi.py` GIRDI_DOSYALARI içinde YOK.
//    Bağlamak koordinatörün kararıdır ve AŞAĞIDAKİ DURDURUCU ÖDENMEDEN
//    yapılmamalıdır.
//
// ═════════ 🔴 DURDURUCU — BU DOSYA TEK BAŞINA BAĞLANMAZ ═════════
//
// Bu dosyadaki üç nokta 1682-09-16 → 1685-10-15 arası `v:` (tâbi) taşıyor:
// Tököli İmre'nin ORTA MACAR krallığı. Ama aynı krallığın ÇEKİRDEĞİ olan
// üç nokta BAŞKA bir dosyada duruyor ve bugün 1526'dan 1918'e kesintisiz
// `avusturya`:
//
//     data/yerlesimler_ek.js:94   Kassa (Košice)     ← Tököli'nin BAŞKENTİ
//     data/yerlesimler_ek.js:98   Eperjes (Prešov)
//     data/yerlesimler_ek.js:102  Tokaj
//
// Bu dosya o üçü düzeltilmeden bağlanırsa 1682-1685 arası harita ALACALI
// çıkar: Fülek · Ungvár · Munkács tâbi renkte, tam ortalarındaki Kassa
// Habsburg renginde. Yani DÜZELTME, DÜZELTTİĞİNDEN DAHA KÖTÜ GÖRÜNÜR.
// ⇒ Koordinatöre üç satırlık yama AYRICA bildirildi (rapor).
//
// 📌 Ve o üç kaydın yorumunda bu borç ZATEN yazılıydı — `yerlesimler_ek.js`
//    satır 85-93: "TÖKÖLİ BOŞLUĞU — bilerek YAZILMADI ... şehir şehir
//    denetim tarihi gerekiyor ve bulunamadı."
//    🟢 O ENGEL KALKTI: TDV `tokoli-imre` şehir şehir tarih vermiyor ama
//    TOPLU tarih veriyor — "15 Ekim 1685'te ... Tököli'yi yakalattı ...
//    Esir alındığı haberinin ulaşmasıyla beraber ... Munkács Kalesi'nin
//    DIŞINDA BÜTÜN KALE VE ŞEHİRLER TESLİM OLDU." Şehir şehir tarihe
//    gerek yok; kaynağın kendisi tek güne bağlıyor.
//
// ═════════ ① NİÇİN VARIM — ÖLÇÜM (CLAUDE.md §2, emilme) ═════════
//
// Emre H-0001'de sordu: "orta macaristan denilen ve tökeli imre'nin kralı
// ilan edildiği bölge neresi ... kaç tane macaristan var".
// Haritada ölçüldü — `arac/nicin_bos.py`, gün 1683-01-01, taban 2580 nokta:
//
//   yer                 en yakın nokta            mesafe   O GÜN SAHİBİ
//   Fülek  48,27/19,82  Eğri                       58,0 km  OSMANLI
//   Ungvár 48,62/22,30  Kassa                      76,4 km  avusturya
//   Munkács 48,44/22,72 Tokaj                     103,4 km  avusturya
//   Szatmár 47,79/22,87 Varad                     108,3 km  OSMANLI
//
// ⇒ İKİ AYRI HATA, ve `CLAUDE.md §3.5.1`in dediği gibi İKİ YÖNE DE:
//   Fülek ve Szatmár çevresi noktasız olduğu için OSMANLI peteğine
//   emiliyor — Osmanlı FAZLA görünüyor. Fülek 1593'ten, Szatmár hiçbir
//   zaman Osmanlı olmadı.
//   Ungvár-Munkács şeridi ise 76-103 km öteden Kassa/Tokaj'a emiliyor —
//   sahibi tesadüfen doğru ama sınır KURGUSAL, ve Orta Macar'ı ifade
//   edecek hiçbir nokta yok.
//
// 🔴 VE ASIL BULGU: Orta Macar Krallığı bu atlasta HİÇ YOK.
//   1683 kesitinde Yukarı Macaristan'ın üç noktası da (Kassa · Eperjes ·
//   Tokaj) `avusturya`. TDV `macaristan` ise açıkça yazıyor:
//   "Imre Thököly önderliğiyle Kuzey Macaristan'da bir prenslik
//    (Türkçe'si: Orta Macar) kurulmasına yol açtı (1682). Bununla ülke
//    1685'e kadar DÖRT parçaya bölündü."
//   ⇒ Harita 1682-1685 arası ülkeyi ÜÇE bölüyor, kaynak DÖRDE diyor.
//
// ═════════ ② TARİHLER — HİÇBİRİ UYDURULMADI ═════════
//
// 🟢 1682-09-16 · TDV `tokoli-imre` (müellif SÁNDOR PAPP), gövdesi okundu:
//    "Budin Beylerbeyi İbrâhim Paşa 16 Eylül'de Fülek Kalesi önünde İmre
//     Tököli'ye prenslik alâmetlerini verdi; IV. Mehmed'den de berat
//     alınmıştı. Buna göre Orta Macar adıyla yeni bir devlet kuruluyor,
//     bunun başına Orta Macar hâkimi unvanıyla Tököli getiriliyordu ...
//     vergi miktarı 40.000 kara kuruş olarak belirleniyor"
//    ⇒ Kronolojide TAM GÜN maddesi VAR: olaylar_ek5.js
//      "Tököli İmre'ye Orta Macar krallığı beratının verilmesi".
//      Değişmez 2 AÇILMIYOR.
//
// 🟢 1685-10-15 · aynı madde:
//    "15 Ekim 1685'te Serdar Melek İbrâhim Paşa'nın emriyle Varad Beylerbeyi
//     Ahmed Paşa kendisine yardım için gelen İmre Tököli'yi yakalattı ...
//     Esir alındığı haberinin ulaşmasıyla beraber İmre Tököli'nin eşi
//     Ilona Zrínyi'nin savunduğu Munkács Kalesi'nin DIŞINDA bütün kale ve
//     şehirler teslim oldu."
//    ⇒ En yakın kronoloji maddesi 1685-10-19 "Solnok'un kaybı" — 4 GÜN.
//      Değişmez 2 penceresi (±30) TUTUYOR, yeni kırılma günü doğmuyor.
//    ⚠️ TDV krallığın hukuken bitişini 2 Ocak 1686'ya bağlıyor ("Tököli
//      2 Ocak 1686'da Belgrad'da serbest bırakıldığında Orta Macar
//      Krallığı artık ortadan kalkmıştı"). O GÜN KULLANILMADI ve sebebi
//      ölçüldü: 1686-01-02'nin ±30 gününde madde YOK (en yakın 1685-10-19,
//      75 gün) ⇒ Değişmez 2'yi AÇARDI. Fiilî çöküş günü (15 Ekim) hem
//      kaynaklı hem maddeli; hukukî bitiş günü yalnız kaynaklı.
//      📌 Bu bir SADELEŞTİRMEDİR, ölçüm değil. 1686-01-02'ye bir madde
//         yazılırsa tarih oraya çekilmeli.
//
// ═════════ ③ NE YAZILMADI — ve niçin ═════════
//
// 🔴 FÜLEK'İN OSMANLI SANCAK DÖNEMİ (1554-1593) YAZILMADI.
//    TDV `budin` (HTTP 200, gövdesi okundu) 1568 sancak listesinde
//    **Filek**'i açıkça sayıyor: "Budin, Semendire, İzvornik, Vulçıtrın,
//    Pojega, Peçuy, İstolni Belgrad, Estergon, Segedin, Srem, Hatvan,
//    Şimontorna, Kopan, FİLEK, Seksar, Sigetvar, Seçen, Novigrad, Solnık,
//    Sekçöy". Yani dönem VAR ve TDV kaynaklı.
//    ⚠️ Ama GÜNLERİ yok: TDV ne fethi ne geri alınışı tarihlendiriyor,
//    kronolojide de 1554 ve Kasım 1593 civarında karşılık gelen madde YOK
//    (en yakın 1554-08-22 Şehrizor · 1593-07-01 Uzun Savaş'ın başlaması —
//    ikisi de BAŞKA olay). Uydurulmuş gün Değişmez 2'yi açardı.
//    ⇒ `yerlesimler_ek29.js`in Léva kararının aynısı: dönem yazılmadı,
//      borç KAYDEDİLDİ. İki kronoloji maddesi yazılınca açılmalı.
//    📌 Ve yazılmaması bugünkü hatayı BÜYÜTMÜYOR: 1560 ve 1580 kesitleri
//      ölçüldü, Fülek çevresini bugün `macaristan` (Eğri, 58 km) boyuyor —
//      yani zaten Habsburg tarafı. Kazanç 1593-1682 aralığında: o 89 yılda
//      bugün OSMANLI boyanıyor ve bu nokta onu kesiyor.
//
// 🔴 DEBRECEN YAZILMADI — ölçüldü, karar verilemedi.
//    58,3 km'den Varad'a (OSMANLI) emiliyor. Ama Debrecen Osmanlı tahrir
//    defterlerinde Solnok sancağı içinde geçen, üç tarafa birden vergi
//    veren muhtar bir kasabaydı; "Osmanlı boyanması" açıkça YANLIŞ
//    değil. Doğru statüsünü akademik kaynakta DOĞRULAYAMADIM ⇒ yazmadım.
//    kaynak: bulunamadı — TDV `debrecen`/`debrezin` sluglarının ikisi de
//    HTTP 302 (ölü); TDV `macaristan` Debrecen'i anıyor ama statüsünü
//    tartışmıyor.
//
// 🔴 SÁROSPATAK YAZILMADI — boşluk DEĞİL: Tokaj'a 25,9 km.
//
// ═════════ ④ 3 KM KURALI — ölçüldü ═════════
//    Dördünün de 2580 noktalık tabana en yakın komşusu:
//      Fülek   58,0 km (Eğri)     Ungvár  76,4 km (Kassa)
//      Munkács 103,4 km (Tokaj)   Szatmár 108,3 km (Varad)
//    Birbirlerine en yakın çift: Ungvár ↔ Munkács 36,0 km.
//    Hiçbiri 3 km eşiğine yaklaşmıyor.
//
// ═════════ ⑤ ORTAK ÇİZGİ — kardeş kayıtlardan, kendi seçimim DEĞİL ═════
//    `k:0` · `g:0` · 1526-08-29 (Mohaç) kırılması: dördü de Kassa ·
//    Eperjes · Tokaj · Sopron kayıtlarının çizgisiyle BİREBİR aynı.
//    `m:` YAZILMADI — Gyula (yerlesimler_ek5.js) gerekçesinin aynısı:
//    `k`/`m`'nin zaman boyutu yok (Değişmez 3), hangi merkez yazılsa
//    öbür dönemde çelişki üretirdi.
//    ⚠️ SADELEŞTİRME, ölçüm değil: Yukarı Macaristan 16-17. yüzyılda
//    Bocskai · Bethlen · I. Rákóczi György idaresine de girdi. Mevcut
//    Kassa/Eperjes/Tokaj kayıtları bu ara dönemleri MODELLEMİYOR; bu
//    dosya onlara uydu. Farklı yazsaydım aynı bölge içinde KURGUSAL bir
//    sınır doğardı.
//
// ═════════ ⑥ BAĞLAMADAN KOŞULAN DENETİM — hepsi TEMİZ ═════════
//    taban 2580 nokta · girdi.oku_dosya() ile (kendi ayrıştırıcım DEĞİL)
//      ad çakışması        0
//      3 km ihlali         0   (en yakın taban komşusu 58,1 km;
//                               kardeşler arası en yakın Ungvár↔Munkács 36,6 km)
//      Değişmez 1          boşluk 0 · çakışma 0 (dördünde de)
//      Değişmez 2          6 kırılmanın 6'sı pencerede — 0·3·0·3·0·0 gün
//      kimlik → renk       4/4 VAR (avusturya #bdab3f · macaristan #20d880 ·
//                          cekoslovakya #930c5d · romanya-kralligi #2828d8)
//      harita penceresi    4/4 içeride
//      motor_kara maskesi  4/4 karada
//
// 🔴 VE BİR ŞEYİ AÇIKÇA YAZIYORUM — DENETİM GEÇİYOR AMA SORU YARIM:
//    1682-09-16 ve 1685-10-15 bu atlasın YERLEŞİM katmanında YENİ kırılma
//    günleridir (kronolojide var, veride yoktu). 1682-09-16'nın TAM GÜN
//    maddesi var, sorun yok. Ama 1685-10-15'in en yakın maddesi 3 gün
//    ötedeki "Vânî Mehmed Efendi'nin sürgünde vefatı" — yani TOPRAKLA
//    İLGİSİZ bir madde. Değişmez 2'nin ±30 penceresi TUTUYOR ama
//    değişmezin VAR OLUŞ SEBEBİ tutmuyor (CLAUDE.md §3: "değişim, o güne
//    rastgele denk gelen alakasız bir maddenin altında belirir").
//    ⇒ Koordinatöre istendi: 1685-10-15'e "Tököli İmre'nin Varad'da
//      tutuklanması ve Orta Macar Krallığı'nın çöküşü" maddesi.
//      O madde yazılana kadar bu kayıtlar denetimi geçer ama kullanıcıya
//      YANLIŞ BAŞLIK gösterir.
//
// ═════════ ⑦ KAYNAK DURUMU — HTTP koduyla ölçüldü ═════════
//    🟢 CANLI  macaristan · erdel · budin · uyvar · estergon · egri ·
//              sigetvar · tokoli-imre   (200)
//    🔴 ÖLÜ    fulek · filek · debrecen · debrezin · munkac · munkacs ·
//              ungvar · satmar · sakmar · kalocsa · simontorna   (302)
//    ⇒ Dört noktanın hiçbirinin TDV'de müstakil maddesi YOK. Bu bir
//      COĞRAFÎ boşluk değil TANECİKLİK boşluğudur (CLAUDE.md §4): TDV
//      Macaristan'ı görüyor, kasaba düzeyinde konuşmuyor.
// =====================================================================

window.YERLESIMLER_EK_MACARISTAN = [

// ───────── ① FÜLEK — Orta Macar beratının VERİLDİĞİ yer ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.2701641 / 19.8222938 (Fiľakovo,
//   okres Lučenec, Banskobystrický kraj) — hafızadan yazılmadı.
// tur:"kale" — TDV `tokoli-imre` ondan "Fülek KALESİ" diye söz ediyor.
// kaynak: TDV `tokoli-imre` (200, gövdesi okundu) — 16 Eylül 1682 beratı;
//   TDV `budin` (200, gövdesi okundu) — 1568 sancak listesinde "Filek".
//   Osmanlı döneminin GÜNLERİ için: bulunamadı (bkz. dosya başı ③).
{ ad:"Fülek (Fiľakovo)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"kale", lat:48.2702, lon:19.8223, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},
     {f:"1526-12-17",t:"1682-09-16",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı)"},
     {f:"1685-10-15",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1938-11-02",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1938-11-02",t:"1945-04-04",d:"macaristan-naiplik",kaynak:"KRON-ALMANYA (28 Ekim 2026): F8 — de jure devir hakemlik gününde (2 Kasım 1938, Birinci Viyana Hakemliği; kronoloji_sinir_halef_1923_2000 + COK_1923_1945 maddeleri). Devredilen güney Slovakya bölgesinde olduğu: Slovak Ulusal Hafıza Enstitüsü (ÜPN) 'Vienna Award' https://www.upn.gov.sk/data/files/11-2016-EN-1-w-award.pdf (bölge-şehir listesi bu oturumda satır satır okunmadı) ve Fiľakovo için 1938-1945 Macar idaresi; BEYANLI YAKLAŞIKLIK: fiilî Macar girişi 5-11 Kasım 1938, dönüş günü komşu zincirden (Somorja/Komárom 1945-04-04, GÜN KOMŞUDAN); de jure dönüş Paris Antlaşması (10 Şubat 1947) yazılmadı. Önceki zincir 1939-03-14→1945-04-04 slovakya-cumhuriyeti yazıyordu; kronoloji 1938-11-02 maddesiyle çelişiyordu."},{f:"1945-04-04",t:"1993-01-01",d:"cekoslovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1993-01-01",t:"2000-12-31",d:"slovakya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ② UNGVÁR — Ung sancağı, Kuzeydoğu Macaristan ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.6223731 / 22.3022572 (Ужгород).
// TDV `tokoli-imre` Ungvár'ı ADIYLA ANMIYOR; bölgeyi anıyor:
//   "Kuzeydoğu Macaristan'a bağlı üç nahiyenin Kuruz askerlerinin kışı
//    geçirmeleri için İmre Tököli'ye devredilmesini kabul etti" (1680)
//   ve TDV `macaristan` "Kuzey Macaristan'da bir prenslik".
// ⚠️ ÖLÇMEDİM: Ungvár'ın Tököli'ye HANGİ GÜN geçtiğini bulamadım. `v:`
//   dönemi kaynağın TOPLU tarihine (16 Eylül 1682 kuruluş → 15 Ekim 1685
//   "bütün kale ve şehirler teslim oldu") yaslandı, şehrin kendi gününe
//   DEĞİL. Bu bir bölgesel yaslamadır ve öyle olduğu burada yazılıdır.
// kaynak: TDV `tokoli-imre` + TDV `macaristan` (ikisi de 200, gövdeleri
//   okundu). Şehrin kendi tarihçesi için: bulunamadı — TDV'de madde yok.
{ ad:"Ungvár (Uzhhorod)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"sehir", lat:48.6224, lon:22.3023, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},{f:"1526-12-17",t:"1682-09-16",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı)"},{f:"1685-10-15",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{f:"1918-11-11",t:"1919-09-10",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919) · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},{f:"1919-09-10",t:"1938-11-02",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919)"},{f:"1938-11-02",t:"1945-06-29",d:"macaristan-naiplik",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-06-29",t:"1991-08-24",d:"sovyet-rusya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ③ MUNKÁCS — TDV'nin ADIYLA SAYDIĞI TEK İSTİSNA ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.4421119 / 22.7185408 (Мукачево);
//   GeoNames 48.4424822 / 22.718 ile 40 m fark — ikisi de aynı yer.
//
// 🔴 BU KAYIT ÖTEKİLERDEN AYRI BİR `t:` TAŞIYOR ve sebebi KAYNAKTA:
//   TDV `tokoli-imre`: "İmre Tököli'nin eşi Ilona Zrínyi'nin savunduğu
//   Munkács (Munkacevo, bugünkü Ukrayna) Kalesi'nin DIŞINDA bütün kale ve
//   şehirler teslim oldu."  ⇒ Munkács 15 Ekim 1685'te teslim OLMADI.
//
// ⚠️ VE BURADA BİR SADELEŞTİRME VAR, ÖLÇÜM DEĞİL — açıkça yazıyorum:
//   Kalenin GERÇEK teslim tarihi 17 Ocak 1688'dir. O gün KULLANILMADI,
//   çünkü ±30 gününde kronoloji maddesi YOK: en yakın madde 1687-12-17
//   ("Eğri'nin kaybı") ve arada 31 GÜN var — pencereyi BİR GÜNLE
//   kaçırıyor. Yazsaydım Değişmez 2'yi açardım.
//   ⇒ Dönem 1687-12-17'ye yaslandı. Bu gün Munkács'ın kendi günü DEĞİL;
//     bölgesel bir yaslamadır ve seçilmesinin sebebi yakınlığın yanında
//     nedenselliktir: Eğri'nin düşmesiyle "Osmanlı Devleti'nin
//     Macaristan'daki kuzey kanadı tümüyle tasfiye edildi" (olaylar_ek6.js)
//     ve tamamen yalıtılan Munkács bir ay sonra teslim oldu.
//   🟢 ÇARESİ TEK SATIR: 1688-01-17'ye "Munkács Kalesi'nin teslimi —
//     Ilona Zrínyi'nin üç yıllık savunmasının sonu" maddesi yazılırsa
//     tarih GERÇEĞİNE çekilebilir. Koordinatöre bildirildi.
//
// kaynak: TDV `tokoli-imre` (200, gövdesi okundu) — Munkács istisnası ve
//   Ilona Zrínyi savunması TDV'nin kendi cümlesidir.
//   17 Ocak 1688 günü için: bulunamadı — TDV tarih VERMİYOR; tarih
//   yayımlanmış başvuru eserlerinde geçiyor ama HAKEMLİ akademik kaynakta
//   doğrulayamadım, o yüzden veriye YAZILMADI, yalnız burada kayıtlı.
{ ad:"Munkács (Mukacheve)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1687-12-17 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"kale", lat:48.4421, lon:22.7185, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-12-17",d:"macaristan",kaynak:"BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"},{f:"1526-12-17",t:"1682-09-16",d:"macaristan-habsburg",kaynak:"BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı · ÖNCEKİ: BOSNA-MACAR-0087 (0087/H-0024): kimlik avusturya → macaristan-habsburg — Habsburg'un bu topraktaki sıfatı Macar/Hırvat KRALIDIR, Avusturya arşidükü değil. TDV budin: 'diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup … Ferdinand’ı (17 Aralık 1526) seçmişti' · TDV hirvatistan: 'Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler' · TDV macaristan: 'Macaristan’da Habsburglar’ın elindeki kısım'. Gün DEĞİŞMEDİ (künye macaristan-habsburg f ile hizalı)"},{f:"1688-01-17",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{f:"1918-11-11",t:"1919-09-10",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919) · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},{f:"1919-09-10",t:"1938-11-02",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919)"},{f:"1938-11-02",t:"1945-06-29",d:"macaristan-naiplik",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1945-06-29",t:"1991-08-24",d:"sovyet-rusya",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[],
  v:[{f:"1682-09-16",t:"1688-01-17",k:"Orta Macar Krallığı — Ilona Zrínyi'nin Munkács savunması",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ④ SZATMÁR — `v:` YAZILMADI, ve bu bir HÜKÜM ─────────
//
// Koordinat: OpenStreetMap/Nominatim 47.7891763 / 22.8725598 (Satu Mare).
//
// 🔴 ORTA MACAR DÖNEMİ YAZILMADI. Szatmár coğrafî olarak Kuzeydoğu
//   Macaristan'dadır, yani TDV'nin tarif ettiği bölgenin İÇİNDE. Ama
//   Szatmár KALESİ Habsburg garnizonlu bir sınır kalesiydi ve Tököli'nin
//   eline geçtiğini ne TDV'de ne akademik bir kaynakta DOĞRULAYABİLDİM.
//   ⇒ CLAUDE.md §11: "ATLAS SEFERİ DEĞİL TASARRUFU BOYAR." Bir bölgenin
//     içinde olmak, o kalenin düştüğü anlamına gelmez — `uyvar` sancak
//     listesinde adı geçen Komárom'un yazılmama gerekçesinin aynısı
//     (yerlesimler_ek29.js).
//   Karşı kanıt çıkarsa `v:[{f:"1682-09-16",t:"1685-10-15",...}]` eklenir
//   ve `s:` avusturya dönemi üçe bölünür.
//
// 🟢 YAZILMASININ SEBEBİ AYRI VE ÖLÇÜLDÜ: bugün Szatmár çevresini 108,3 km
//   öteden Varad (OSMANLI) boyuyor. Szatmár hiçbir zaman Osmanlı olmadı;
//   bu nokta o fazlalığı kesiyor. Yani kayıt Orta Macar için değil,
//   §2 EMİLMESİ için var.
//
// ⚠️ SADELEŞTİRME: Szatmár 17. yüzyılda Erdel ile Habsburg arasında
//   birkaç kez el değiştirdi (Partium). Kardeş kayıtların hiçbiri bu ara
//   dönemleri modellemiyor; ben de modellemedim. Eksik, ama YANLIŞ DEĞİL.
// kaynak: bulunamadı — TDV `satmar`/`sakmar` ölü (302); TDV `macaristan`
//   Szatmár'ı yalnız 1711 Szatmár Muahedesi bağlamında anıyor. Çizgi
//   kardeş kayıtlardan (Kassa · Eperjes · Tokaj, hepsi 1526-08-29).
{ ad:"Szatmár (Satu Mare)", tur:"sehir", lat:47.7892, lon:22.8726, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"BALKAN-MACAR-0081: Szapolyai'nin seçimine (TDV suleyman-i 10 Kasım 1526) dek tek krallık"},
     {f:"1551-07-26",t:"1556-03-12",d:"macaristan-habsburg",kaynak:"KUTU-B-1014 (0088/H-0011): İzabella'nın feragati — Kolozsvár diyeti 26 Temmuz 1551 (MTA History of Transylvania (mek.oszk.hu/03400/03407/html/102.html); dönüş Erdel Belgradı ile aynı gün (History of Transylvania I s.102) — Szatmár'a özgü dönüş günü yok, 1557'de Báthory İzabella adına savunuyor"},
     {f:"1561-01-01",t:"1564-01-01",d:"macaristan-habsburg",kesinlik:{f:"yil",t:"yil"},kaynak:"MTA History of Transylvania (mek.oszk.hu/03400/03407/html/104.html): 'Bereg, Ugocsa, Szatmár, and Szabolcs had been controlled by Habsburg supporters ever since 1561' (Balassa'nın taraf değiştirmesi) — YIL · t: 105.html 'in 1564, he led a surprise attack to seize Szatmár and Németi' (Báthory István, sonbahar) — YIL"},
     {f:"1565-02-01",t:"1605-01-21",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"gun"},kaynak:"Bánlaky (MEK 09477) 0013/1049 (Şubat 1565, Schwendi: Tokaj 9 Şubat, Szerencs 4 gün sonra): 'Szatmár úgyszólván ellenállás nélkül került a … császáriak kezébe' — AY · t: MTA History of Transylvania (mek.oszk.hu/03400/03407/html/119.html 'invested it on 21 January' (1605, Bocskai/Gyulaffy) · ⚠️ Bánlaky (MEK 09477) 0014/1201 Aralık 1604 diyor"},
     {f:"1606-12-29",t:"1619-11-01",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"ay"},kaynak:"Viyana barışı (TDV zitvatorok-antlasmasi: 23 Haziran 1606) Szatmár ilini ömür boyu Bocskai'ye verdi, erkek varis yoksa krallığa döner; MTA History of Transylvania (mek.oszk.hu/03400/03407/html/120.html 'He died at Kassa on 29 December 1606' · 1611-14 kaptan kralın adamı Dóczy · t: Bethlen 1619 sonbaharı, Kasım 1619 Szatmár iline mektup — AY"},
     {f:"1630-03-30",t:"1644-02-01",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"ay"},kaynak:"MTA History of Transylvania (mek.oszk.hu/03400/03407/html/188.html 'by 30 March 1630 they could report success' (Bethlen'in yedi ilinin krallığa iadesi) · t: Bánlaky (MEK 09477) 0015/1291 (1644 Şubat-Mart): 'a szatmári német őrség szintén Rákóczyék zsoldjába szegődött' — AY"},
     {f:"1664-08-09",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"MTA History of Transylvania (mek.oszk.hu/03400/03407/html/228.html: Vasvár (TDV uyvar ve atlas maddesi 9 Ağustos 1664; MTA/Bánlaky 10 Ağustos) 'The sultan … ceded Szabolcs and Szatmár counties … to the Habsburg king' (TDV uyvar 9 Ağustos der) · 1659'dan II. Rákóczi György kaleye Alman garnizonu almıştı · Bánlaky (MEK 09477) 0017/1362 Tököli kaleyi hiç alamadı (1682 'német kézben maradt'; 9 Şubat 1684 saldırısı püskürtüldü) · ⚠️ YAZILMADI: 1704-12-25 → 1711-04-29 II. Rákóczi Ferenc (kuruc) dönemi (Bánlaky (MEK 09477) 0018/1577 '1704. december 25.-én Szatmár is megadta magát Forgáchnak'; 0019/1687 Szatmár barışı 29 Nisan 1711) — kuruc devletinin künyesi/boyası yok (TUZ) · TDV macaristan (Géza Dávid) 1867; Trianon (4 Haziran 1920)"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1947-12-30",d:"romanya-kralligi",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"},{f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  isg:[{f:"1919-04-19",t:"1920-06-04",d:"romanya-kralligi",kaynak:"F8 fiilî devir: Muzeul Județean Satu Mare — http://muzeusm.ro/en/100-de-ani-de-la-eliberarea-satmarului-si-instaurarea-administratiei-romanesti/ — 'La 19 aprilie 1919, în sâmbăta de Paște, dr. Ilie Carol Barbul, cu un drapel în mână, a condus delegaţia locală care a întâmpinat Armata Română eliberatoare, contactând pe podul de peste Someş prima patrulă a Diviziei a II-a Cavalerie'"}],
  d:[],
  v:[{f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"KUTU-B-1014: MTA History of Transylvania (mek.oszk.hu/03400/03407/html/104.html — Szatmár 1526-1561 Szapolyai/İzabella tarafında (1536 Ferdinand baskını kalıcı olmadı) · TDV suleyman-i (10 Kasım 1526)"},{f:"1541-08-29",t:"1551-07-26",k:"Erdel Prensliği",statu:"vassal",kid:"erdel"},{f:"1556-03-12",t:"1561-01-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"gun",t:"yil"}},{f:"1564-01-01",t:"1565-02-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"yil",t:"ay"},kaynak:"Báthory István'ın 1564 sonbaharı baskını (MTA HoT 105) — YIL"},{f:"1605-01-21",t:"1606-12-29",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kaynak:"Bocskai (MTA HoT 119-120) — Erdel prensi Bocskai'nin ili"},{f:"1619-11-01",t:"1630-03-30",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"ay",t:"gun"},kaynak:"Bethlen Gábor (MTA HoT 183, 188)"},{f:"1644-02-01",t:"1664-08-09",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"ay",t:"gun"},kaynak:"I. Rákóczi György (Bánlaky (MEK 09477) 0015/1291) · Linz barışı 16 Aralık 1645 (0015/1292): kale Erdel tahtında bir Rákóczi oldukça Rákóczi varislerinde (MTA HoT 195) · t: Vasvár (MTA HoT 228)"}] },

// ── POSTIT-85 (Emre, 1551-07-01 Banat ekslavı): Sokullu'nun 1551 Eylül–Ekim seferinde aldığı Becse, Becskerek,
// Çanad ve Lippa NOKTASIZDI → kronoloji (olaylar_ek5 1551-09-07: "Beçe, Beçkerek, Çanad ve Lippa'yı aldı") haritada
// görünmüyor, aradaki koridor Temeşvar peteğine emiliyordu. Dört nokta açıldı. ──
{ ad:"Becse (Törökbecse / Novi Bečej)", tur:"kale", lat:45.5995, lon:20.1383, g:0, k:0, kaynak:"KONUM: Törökbecse = bugünkü Novi Bečej (GeoNames 45.60 K · 20.14 D); 1551'de Sokullu'nun aldığı Becse kalesi Tisa kıyısındadır · POSTIT-85 · BEYAN: kale dönemleri aşağıda; Becse'nin 1281-1526 Macar sahipliği Bánlaky'nin Becse'yi Macar kalesi anmasına dayanır, yer adıyla belge ayrıca aranmadı",
  s:[{f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"Macar Krallığı içinde Torontál/Csanád çevresi · t: TDV suleyman-i 10 Kasım 1526 (Lugos emsali, BALKAN-MACAR-0081) · ZİNCİR ÇIKARIMI: 1281-1526 arasında Becse'yi adıyla anan belge bu araştırmada okunmadı — bölge Macar Krallığı toprağıydı"},
     {f:"1551-07-01",t:"1551-09-07",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"gun"},kaynak:"Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) 0013/988: Báthory Endre'nin 'július 16-ika körül' Temesvár, Lippa, Solymos, Karánsebes, Lugos, Becse, Becskerek ve Csanád kalelerini Ferdinand adına teslim alması — AY · t: TDV sokullu-mehmed-pasa '6 Ramazan 958’de (7 Eylül 1551) Tuna’yı geçti' — Becse'nin düşüş günü TDV'de yok, seferin başlangıç günü ALT SINIR olarak alındı (BEYANLI YAKLAŞIKLIK; Sırp yerel tarih yazını 15-19 Eylül 1551 der, akademik teyit yok)"},
     {f:"1716-01-01",t:"1918-11-11",d:"macaristan-habsburg",kesinlik:{f:"yil"},kaynak:"TDV timisvar: '1552-1716 yılları arasında durumunu koruyan Tımışvar beylerbeyiliği' (eyaletin sonu, YIL; ABİ MERKEZ: Temeşvar — Becse'nin kendi günü yok) · t: TDV timisvar 'Habsburg … hâkimiyeti I. Dünya Savaşı sonuna kadar (1918) sürdü' · t: 1918-11-11 Banat F8 emsali (Temeşvar/Haram)"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · Haram emsali"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8 (Emre, 5 Eki 2026): Trianon 4 Haziran 1920 · TDV timisvar: 'Barış antlaşmalarına göre Banat bölgesi Romanya ve Sırbistan arasında bölüşüldü' (Becse Batı/Sırp Banatı'nda) · Haram emsali"},
     {f:"1945-11-29",t:"1992-04-27",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},
     {f:"1992-04-27",t:"2000-12-31",d:"yugoslavya-federal-cumhuriyeti",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  v:[{f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"BALKAN-MACAR-0081 H-0026: tâbilik Szapolyai'nin krallığıyla başlar — TDV suleyman-i (seçim 10 Kasım 1526 ALT SINIR) · TDV timisvar: Timiş bölgesi Szapolyai yanlısı Petrovics'in elinde (bölge hükmü, Temeşvar/Lugos emsali)"},
     {f:"1541-08-29",t:"1551-07-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"gun",t:"ay"},kaynak:"TDV timisvar: 'Macar Krallığı’na Osmanlılar tarafından son verilip 1541’de Budin beylerbeyiliği kurulunca … haraçgüzâr statüsünde Erdel Prensliği teşkil edildi' · Banat kaleleri Martinuzzi/Petrovics'te (B 0013/986; Temeşvar/Lugos emsali)"}],
  d:[{f:"1551-09-07",t:"1716-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"f: TDV sokullu-mehmed-pasa: Tuna’yı geçen Sokullu 'Beçe (Bećse), Beçkerek, Çanad ve Lipova gibi birçok kaleyi' aldı; 16 Kasım 1551'de Temeşvar kuşatmasını kaldırdı (Becse'nin düşüş günü yok — 7 Eylül ALT SINIR) · Habsburg bu üç kaleyi 1552'ye dek geri almadı: 1552 Temeşvar'ın düşüşüyle bölgenin tamamı Osmanlı (TDV timisvar) · t: TDV timisvar 1716 (YIL; ABİ MERKEZ: Temeşvar)"}] },

{ ad:"Becskerek (Zrenjanin)", tur:"kale", lat:45.3816, lon:20.3903, g:0, k:0, kaynak:"KONUM: Zrenjanin (eski adı Nagybecskerek / Veliki Bečkerek / Bečkerek) GeoNames 45.38 K · 20.39 D · POSTIT-85",
  s:[{f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"Macar Krallığı içinde Torontál ili · t: TDV suleyman-i 10 Kasım 1526 (Lugos emsali) · ZİNCİR ÇIKARIMI: 1281-1526 arasında Becskerek'i adıyla anan belge bu araştırmada okunmadı"},
     {f:"1551-07-01",t:"1551-09-07",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"gun"},kaynak:"Bánlaky (MEK 09477) 0013/988: Becskerek, Báthory Endre'nin Ferdinand adına teslim aldığı Banat kaleleri arasında (Temmuz 1551 ortası) — AY · t: TDV sokullu-mehmed-pasa Tuna'yı geçiş 7 Eylül 1551 (ALT SINIR, BEYANLI YAKLAŞIKLIK)"},
     {f:"1716-01-01",t:"1918-11-11",d:"macaristan-habsburg",kesinlik:{f:"yil"},kaynak:"TDV timisvar 1716 (eyaletin sonu, YIL; ABİ MERKEZ: Temeşvar) · t: TDV timisvar 'Habsburg … hâkimiyeti I. Dünya Savaşı sonuna kadar (1918)' · t: 1918-11-11 Banat F8 emsali"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): TDV birinci-dunya-savasi '4 Haziran 1920 … Trianon' · Haram emsali"},
     {f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"F8: Trianon 4 Haziran 1920 · TDV timisvar: Banat Romanya ve Sırbistan arasında bölüşüldü (Becskerek Sırp Banatı'nda) · Haram emsali"},
     {f:"1945-11-29",t:"1992-04-27",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992"},
     {f:"1992-04-27",t:"2000-12-31",d:"yugoslavya-federal-cumhuriyeti",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992"}],
  v:[{f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"BALKAN-MACAR-0081 H-0026 / TDV suleyman-i (seçim 10 Kasım 1526 ALT SINIR) · TDV timisvar: Timiş bölgesi Petrovics'te (bölge hükmü)"},
     {f:"1541-08-29",t:"1551-07-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"gun",t:"ay"},kaynak:"TDV timisvar: haraçgüzâr Erdel Prensliği 1541 · Banat kaleleri Martinuzzi/Petrovics'te (B 0013/986; Temeşvar emsali)"}],
  d:[{f:"1551-09-07",t:"1716-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"f: TDV sokullu-mehmed-pasa: 'Beçe (Bećse), Beçkerek, Çanad ve Lipova gibi birçok kaleyi' aldı (düşüş günü yok — 7 Eylül ALT SINIR; Becskerek Sokullu'nun kışlığıydı, Kasım-Aralık 1551'de Osmanlı elindeydi — Sırp yerel yazını, akademik teyit yok) · t: TDV timisvar 1716 (YIL)"}] },

{ ad:"Çanad (Csanád / Cenad)", tur:"kale", lat:46.1739, lon:20.4608, g:0, k:0, kaynak:"KONUM: Cenad (Csanád, Timiș ili) GeoNames 46.17 K · 20.46 D — Csanád piskoposluğu ve ili merkezi; Segedin'in 30 km doğusunda Maros ağzı · POSTIT-85",
  s:[{f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"Macar Krallığı, Csanád ili/piskoposluğu · t: TDV suleyman-i 10 Kasım 1526 · ZİNCİR ÇIKARIMI: 1281-1526 arasında kaleyi adıyla anan belge okunmadı"},
     {f:"1551-07-01",t:"1551-09-07",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"gun"},kaynak:"Bánlaky (MEK 09477) 0013/988: Csanád, Báthory Endre'nin Ferdinand adına teslim aldığı Banat kaleleri arasında — AY · t: TDV sokullu-mehmed-pasa 7 Eylül 1551 (ALT SINIR, BEYANLI YAKLAŞIKLIK)"},
     {f:"1716-01-01",t:"1918-11-11",d:"macaristan-habsburg",kesinlik:{f:"yil"},kaynak:"TDV timisvar 1716 (YIL; ABİ MERKEZ: Temeşvar) · t: TDV timisvar 'Habsburg … 1918'e kadar' · t: 1918-11-11 Banat F8 emsali"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): TDV birinci-dunya-savasi '4 Haziran 1920 … Trianon' · Lugos emsali"},
     {f:"1920-06-04",t:"1947-12-30",d:"romanya-kralligi",kaynak:"F8: Trianon 4 Haziran 1920 · TDV timisvar: Banat'ın doğusu Romanya'ya (Çanad Romanya Banatı'nda, Macar sınırında) · Lugos emsali"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  v:[{f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"BALKAN-MACAR-0081 H-0026 / TDV suleyman-i (seçim 10 Kasım 1526 ALT SINIR) · bölge hükmü (Temeşvar/Lugos emsali)"},
     {f:"1541-08-29",t:"1551-07-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"gun",t:"ay"},kaynak:"TDV timisvar: haraçgüzâr Erdel Prensliği 1541 · Banat kaleleri Martinuzzi/Petrovics'te (B 0013/986)"}],
  d:[{f:"1551-09-07",t:"1716-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"f: TDV sokullu-mehmed-pasa: Sokullu 'Beçe (Bećse), Beçkerek, Çanad ve Lipova gibi birçok kaleyi' aldı (düşüş günü yok — 7 Eylül ALT SINIR) · t: TDV timisvar 1716 (YIL; ABİ MERKEZ: Temeşvar)"}] },

{ ad:"Lippa (Lipova)", tur:"kale", lat:46.0903, lon:21.6925, g:0, k:0, kaynak:"KONUM: Lipova (Romanya, Arad ili) GeoNames 46.09 K · 21.69 D · POSTIT-85 · TDV lipova (1551, 1688, 1695) okundu",
  s:[{f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"Macar Krallığı · t: TDV suleyman-i 10 Kasım 1526 · ZİNCİR ÇIKARIMI: 1281-1526 arasında kaleyi adıyla anan belge okunmadı"},
     {f:"1551-07-01",t:"1551-10-01",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"ay"},kaynak:"Bánlaky (MEK 09477) 0013/988: Lippa,Báthory Endre'nin Ferdinand adına teslim aldığı Banat kaleleri arasında — AY · t: TDV sokullu-mehmed-pasa 7 Eylül 1551 ALT SINIR; TDV lipova ilk Osmanlı fethini 'Ekim 1551' der — Lippa'nın düşüşü 21 Eylül'den sonra (kronoloji maddesi 1551-09-07 ±30 gün)"},
     {f:"1551-11-06",t:"1552-07-27",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"gun"},kaynak:"TDV lipova: Castaldo 4 Kasım 1551'de kuşattı, 'İki gün sonra şehir Avusturyalılar’ın eline geçti' (6 Kasım — şehir); Ulama Paşa kaleyi dokuz gün daha tuttu, 5 Aralık 1551'de (6 Zilhicce 958) anlaşmayla çıktı (kale — 1 aylık fark BEYANLI, şehir günü alındı) · t: TDV lipova: Temeşvar'ın 26 Temmuz 1552 düşüşünden sonra 'başta Lipova olmak üzere yirmi kadar kale Osmanlı idaresi altına girdi' — gün komşudan: Temeşvar 27 Temmuz 1552 (olaylar_ek5 Haram emsali, ALT SINIR)"},
     {f:"1688-06-22",t:"1695-09-08",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"gun"},kaynak:"TDV lipova: Caraffa'nın üç günlük kuşatmasından sonra '12-22 Haziran 1688' teslim — bitiş 22 Haziran (teslim) · t: TDV lipova: 'Osmanlılar 1695'te şehri yeniden kontrol altına aldı' (8 Eylül – 5 Ekim 1695) · ⚠️ BEYAN: TDV Câfer Paşa'nın geri alışını (tarihsiz) ve Veterani'nin 1691 geri alışını anar — ara Osmanlı dönemi YAZILMADI, 1688-1695 Habsburg sürekli sayıldı (BEYANLI YAKLAŞIKLIK; Lugos zinciri B 0017/1474 de 1691 bu bölgede Habsburg harekâtı der)"},
     {f:"1716-01-01",t:"1918-11-11",d:"macaristan-habsburg",kesinlik:{f:"yil"},kaynak:"TDV timisvar 1716 (YIL; ABİ MERKEZ: Temeşvar — TDV lipova 1716 olayı anmıyor, Karlofça'yı anar) · t: TDV timisvar 'Habsburg … 1918'e kadar' · t: 1918-11-11 Banat F8 emsali"},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): TDV birinci-dunya-savasi '4 Haziran 1920 … Trianon' · Lugos emsali"},
     {f:"1920-06-04",t:"1947-12-30",d:"romanya-kralligi",kaynak:"F8: Trianon 4 Haziran 1920 · TDV timisvar: Banat'ın doğusu Romanya'ya · Lugos emsali"},
     {f:"1947-12-30",t:"1989-12-22",d:"romanya-halk",kaynak:"LoC Romania Country Study"},{f:"1989-12-22",t:"2000-12-31",d:"romanya-cumhuriyeti",kaynak:"LoC Romania Country Study"}],
  v:[{f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"BALKAN-MACAR-0081 H-0026 / TDV suleyman-i (seçim 10 Kasım 1526 ALT SINIR) · TDV timisvar: Lipova Petrovics'in sancak bölgesinde (bölge hükmü)"},
     {f:"1541-08-29",t:"1551-07-01",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kesinlik:{f:"gun",t:"ay"},kaynak:"TDV timisvar: haraçgüzâr Erdel Prensliği 1541 · Banat kaleleri Martinuzzi/Petrovics'te (B 0013/986)"}],
  d:[{f:"1551-10-01",t:"1551-11-06",kesinlik:{f:"ay",t:"gun"},kaynak:"f: TDV lipova: ilk Osmanlı fethi 'Ekim 1551', 21 Eylül'den sonra, Sokullu Mehmed Paşa (TDV sokullu-mehmed-pasa 'Lipova' sayar) — AY (Ekim; ayın 1'i yalnız ay işaretidir) · t: TDV lipova Castaldo 6 Kasım"},
     {f:"1552-07-27",t:"1688-06-22",kesinlik:{f:"gun",t:"gun"},kaynak:"f: TDV lipova 26 Temmuz 1552 sonrası; gün komşudan: Temeşvar 27 Temmuz 1552 (ALT SINIR) · Lipova sancak ve kaza merkezi oldu · t: TDV lipova 12-22 Haziran 1688 teslim"},
     {f:"1695-09-08",t:"1716-01-01",kesinlik:{f:"gun",t:"yil"},kaynak:"f: TDV lipova '8 Eylül – 5 Ekim 1695' (başlangıç) · t: TDV timisvar 1716 (YIL; ABİ MERKEZ: Temeşvar)"}] },

];

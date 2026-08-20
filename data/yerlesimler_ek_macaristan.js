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
{ ad:"Fülek (Fiľakovo)", tur:"kale", lat:48.2702, lon:19.8223, g:0, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1685-10-15",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)"}] },

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
{ ad:"Ungvár (Uzhhorod)", tur:"sehir", lat:48.6224, lon:22.3023, g:0, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1685-10-15",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)"}] },

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
{ ad:"Munkács (Mukacheve)", tur:"kale", lat:48.4421, lon:22.7185, g:0, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1687-12-17",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[],
  v:[{f:"1682-09-16",t:"1687-12-17",k:"Orta Macar Krallığı — Ilona Zrínyi'nin Munkács savunması"}] },

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
{ ad:"Szatmár (Satu Mare)", tur:"sehir", lat:47.7892, lon:22.8726, g:0, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[], v:[] },

];

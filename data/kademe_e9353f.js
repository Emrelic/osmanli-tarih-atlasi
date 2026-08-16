// =====================================================================
// KADEME YAMASI — BATI + ORTA AVRUPA
// Görev: oturumlar/KADEME-AVRUPA.md (+ kuralların tamamı KADEME-KD.md)
// Kutu: lat 36..71 / lon -12..32 · tahta M-0314
//
// ⚠️ Bu bir YAMA dosyasıdır. Mevcut data/yerlesimler*.js'e DOKUNMADIM
//   (onlar VERİ ZAMAN'da). Yamayı koordinatör işler.
// ⚠️ Dosya adı M-0166 kuralıyla: scratchpad UUID e9353fca… ⇒ e9353f.
//
// ═══════════ İŞ 0 — ŞARTNAME SAYISI DOĞRULANDI ═══════════
// girdi.yukle() ile, kendi ayrıştırıcım DEĞİL:
//   kutuda 778 nokta · kademeli 385 (k1:4 · k2:26 · k3:115 · k4:240)
//   KADEMESİZ 393  ← şartname 393 diyordu, BİREBİR tuttu
//
// 🔴 AMA BİLEŞİMİ BİR SORUN: 393 kademesizin yalnız 10'u Osmanlı dönemi
//   taşıyor. TDV'nin en güçlü olduğu alan (Osmanlı idarî taksimatı) bu
//   kutunun %2,5'ini kapsıyor; kalan 383 için şartnamenin kendi ölçümü
//   geçerli: "TDV kapsaması Batı Avrupa'da %0".
//
// ═══════════ 🟢 VE ARAŞTIRMAYA BAŞLAMADAN ÖNCE ALTYAPIYA BAKTIM ═══════════
// CLAUDE.md'nin bir günde BEŞ KEZ ısırdığı hata: "istenen şeyin altyapısı
// ZATEN VARDI". Baktım — ve vardı:
//   data/devletler.js'te `baskent:` alanı, 392 künyenin 391'inde DOLU
//   şartnamenin mertebe tablosu: k:1 = "o devletin BAŞKENTİ"
//   ⇒ eşleştirdim: 393 kademesizin 31'i bir künyenin başşehri.
//
// 📌 Bu 31 kaydın dayanağı ARAŞTIRMA DEĞİL, projenin KENDİ DİZİNİ — ve
//   künye her birinin f/t penceresini de veriyor. Yani hem kademe hem
//   ZAMAN bilgisi hazır duruyordu.
//
// ═══════════ 🔴 VE ASIL KARAR BURADA: ÇOĞU `kd:` OLDU, `k:` DEĞİL ═══════════
// İlk düşüncem otuz birine de düz `k:1` yazmaktı. ŞARTNAMENİN KENDİ
// UYARISI beni durdurdu:
//   "Emin olamadığın yerde bir kademe AŞAĞI yaz: FAZLA AĞIRLIK peteği
//    komşusunun toprağına TAŞIRIR, eksik ağırlık yalnız küçültür."
// Ölçtüm: Helsinki · Riga · Tallinn · Kaunas · Dublin yalnız **1918-1923**
// arası başşehir — düz `k:1` yazmak onlara **640 yıl** hak etmedikleri
// ağırlık verirdi. Mantova'nın penceresi 55 yıl, Dublin'inki 10 AY.
//   ⇒ Düz `k:` YALNIZ penceresi 1281-1923'ün tamamına yakınını kaplayanlara.
//   ⇒ Ötekilere `kd:` — kademe ZAMANLI yazıldı.
//
// 🟢 Şartname "kd: yazılı kayıt 0 — alan CANLI, veri SIFIR" diyor.
//   Bu dosya projenin **ilk gerçek `kd:` verisidir** ve dayanağı uydurma
//   değil: künyenin kendi `f`/`t` değerleri.
//
// ⚠️ `kd:` PENCERESİ DIŞINDA KADEME YAZMADIM. Prag 1526-1918 arası
//   Habsburg idaresindeydi ve Bohemya krallığının merkezi olarak bir
//   mertebesi vardı — ama o mertebeyi hiçbir kaynağa SORMADIM, o yüzden
//   YAZMADIM. Boş bırakmak, tahmin etmekten iyidir (KADEME-KD §④.3:
//   "Şehirdir, herhâlde 3. kademedir demek KOLAYDIR ve UYDURMADIR").
//
// ═══════════ `kaynak:` ALANI — ve bildirdiğim kusur ═══════════
// Dayanak bir TDV slug'ı DEĞİL, `data/devletler.js`in kendisi. Alan
// bugün yalnız TDV slug'ı taşıyor (M-0267'de bildirdim, bu ikinci vakası).
// Koordinatör bir biçim söyleyene kadar `devletler.js:<künye-id>` yazdım
// ve her kayıtta hangi künyeden geldiğini `neden:` alanına da koydum.
// =====================================================================

window.KADEME_YAMA = [

// ───────── A. PENCERESİ TAM/TAMA YAKIN — düz k:1 ─────────
// Beşinin de başşehirliği 1281-1923 boyunca kesintisiz ya da kesintiye
// çok yakın. Zaman boyutu bir şey EKLEMEDİĞİ için düz `k:` yazdım.

{ad:"Londra", k:1, kaynak:"devletler.js:ingiltere",
 neden:"ingiltere kunyesinin baskenti; kunye 1066-01-01..1923-10-29, yani atlasin butun zaman araligini kapsiyor"},

{ad:"Lizbon", k:1, kaynak:"devletler.js:portekiz",
 neden:"portekiz kunyesinin baskenti; kunye 1139-07-25..1923-10-29, butun araligi kapsiyor"},

{ad:"Kopenhag", k:1, kaynak:"devletler.js:danimarka",
 neden:"danimarka kunyesinin baskenti; kunye 1281-01-01..1923-10-29, atlasin ilk gununden son gunune"},

{ad:"Paris", k:1, kaynak:"devletler.js:fransa",
 neden:"IKI kunyenin baskenti ve ikisi ARDISIK: fransa 987-01-01..1792-09-22, fransa-cumhuriyet 1792-09-22..1923-10-29. Bosluk YOK, o yuzden kd: gerekmedi; devlet degisti ama baskentlik kesintisiz"},

{ad:"Napoli", k:1, kaynak:"devletler.js:napoli",
 neden:"napoli kunyesinin baskenti; kunye 1282-03-30..1861-02-13. Atlasin baslangicindan 14 ay sonra basliyor ve 62 yil once bitiyor; ikisi de duz k: icin ihmal edilebilir"},

// ───────── B. PENCERESİ SINIRLI — kd: ile ZAMANLI yazildi ─────────
// 🔴 Bunlarin hicbirine duz k: YAZILMADI. Sebep sartnamenin kendi
//   uyarisi: pencere disinda k:1 vermek, o noktaya hak etmedigi agirligi
//   YUZYILLARCA tasitir ve petegi komsusunun toprağına tasirir.

{ad:"Roma", kd:[{f:"1281-01-01", t:"1870-09-20", k:1}], kaynak:"devletler.js:papalik",
 neden:"papalik kunyesinin baskenti, kunye 756-01-01..1870-09-20. 1870 sonrasi (Italya birligi) icin kaynak SUSUYOR, o yuzden o pencereye kademe YAZILMADI"},

{ad:"Madrid", kd:[{f:"1479-01-20", t:"1923-10-29", k:1}], kaynak:"devletler.js:ispanya",
 neden:"ispanya kunyesinin baskenti, kunye 1479-01-20'de basliyor. 1281-1479 arasi Madrid Kastilya'da bir kasabaydi ve o donem icin kaynak SUSUYOR ⇒ kademe yazilmadi. 198 yillik bosluk BILINCLI"},

{ad:"Viyana", kd:[{f:"1526-08-29", t:"1918-11-11", k:1},
                  {f:"1918-11-12", t:"1923-10-29", k:1}], kaynak:"devletler.js:habsburg",
 neden:"IKI kunye: habsburg 1526-08-29..1918-11-11 ve avusturya-cumhuriyet 1918-11-12..1923-10-29. 1526 oncesi icin kaynak susuyor. Iki satir AYRI yazildi cunku aralarinda BIR GUNLUK bosluk var (11 Kasim - 12 Kasim) ve kunyeleri oyle veriyor; birlestirmek kaynagi duzeltmek olurdu"},

{ad:"Prag", kd:[{f:"1281-01-01", t:"1526-08-29", k:1},
                {f:"1918-10-28", t:"1923-10-29", k:1}], kaynak:"devletler.js:bohemya",
 neden:"IKI AYRI DONEM, arasinda 392 YILLIK BOSLUK: bohemya 1198-01-01..1526-08-29, sonra cekoslovakya 1918-10-28..1923-10-29. 1526-1918 arasi Habsburg Viyana'dan yonetti; Prag'in o donemdeki mertebesini HICBIR KAYNAGA SORMADIM, o yuzden YAZMADIM. Bosluk bilgisizlik degil, olculmemislik"},

{ad:"Varşova", kd:[{f:"1569-07-01", t:"1795-10-24", k:1},
                   {f:"1918-11-11", t:"1923-10-29", k:1}], kaynak:"devletler.js:lehistan",
 neden:"IKI AYRI DONEM: lehistan 1569-07-01..1795-10-24, sonra polonya 1918-11-11..1923-10-29. Arasindaki 123 yil (taksimler devri) icin kaynak susuyor ⇒ yazilmadi. 1569 oncesi baskent Krakov'du, ayri kayit"},

{ad:"Krakov", kd:[{f:"1320-01-20", t:"1569-07-01", k:1}], kaynak:"devletler.js:polonya-erken",
 neden:"polonya-erken kunyesinin baskenti, 1320-01-20..1569-07-01. 1569'da baskent Varsova'ya tasindi (lehistan kunyesi tam o gun basliyor) ⇒ iki kaydin pencereleri BIRBIRINE DEGIYOR ve bu bir tutarlilik isaretidir"},

{ad:"Venedik", kd:[{f:"1281-01-01", t:"1797-05-12", k:1}], kaynak:"devletler.js:venedik",
 neden:"venedik kunyesinin baskenti, kunye 697-01-01..1797-05-12. Cumhuriyetin sonundan (1797) sonrasi icin kaynak susuyor"},

{ad:"Cenova", kd:[{f:"1281-01-01", t:"1797-06-14", k:1}], kaynak:"devletler.js:cenova",
 neden:"cenova kunyesinin baskenti, kunye 1005-01-01..1797-06-14. 1797 sonrasi icin kaynak susuyor"},

{ad:"Milano", kd:[{f:"1395-05-11", t:"1859-11-10", k:1}], kaynak:"devletler.js:milano-dukaligi",
 neden:"milano-dukaligi kunyesinin baskenti, 1395-05-11..1859-11-10. Dukaligin kurulusundan onceki Milano (Visconti sinyorlugu) icin kunye YOK ⇒ o pencereye kademe yazilmadi"},

{ad:"Floransa", kd:[{f:"1281-01-01", t:"1532-01-01", k:1},
                    {f:"1532-01-01", t:"1860-03-22", k:1}], kaynak:"devletler.js:floransa",
 neden:"IKI ARDISIK kunye, ikisinin de baskenti: floransa 1115-01-01..1532-01-01, sonra toskana 1532-01-01..1860-03-22. Bosluk YOK — cumhuriyet dukaliga donustu ama sehir baskent KALDI. Iki satir yazdim cunku BAGLI OLDUGU DEVLET degisti; kademe degismedi ama kd: ikisini de tasiyabiliyor"},

{ad:"Siena", kd:[{f:"1281-01-01", t:"1555-04-17", k:1}], kaynak:"devletler.js:siena",
 neden:"siena kunyesinin baskenti, kunye 1125-01-01..1555-04-17. 1555'te Floransa'ya yenildi; sonrasi icin kaynak susuyor"},

// 🔴 AD DÜZELTİLDİ — ve bunu KABUL KAPISI yakaladı, gözüm değil.
//   İlk yazdığım ad `Piza` idi (künye id'si `piza` olduğu için). Veride
//   noktanın adı **`Pisa`**. Yama adla eşleşir; `Piza` yazsaydım kayıt
//   SESSİZCE DÜŞERDİ — ne hata verirdi ne de kimse fark ederdi.
//   📌 Sebebi ölçülebilir: eşleştirme betiğim iki tarafı da sadeleştirip
//     karşılaştırıyordu (aksan/tire/parantez atarak), o yüzden `piza` ile
//     `Pisa` TUTTU — ama yamaya künye tarafının yazımını yazdım.
//     ⇒ Eşleştirme SADELEŞTİRİLMİŞ hâlle yapılır, YAZIM ise verinin
//       kendisinden alınır. İkisini karıştırmak sessiz kayıp üretir.
{ad:"Pisa", kd:[{f:"1281-01-01", t:"1406-10-09", k:1}], kaynak:"devletler.js:piza",
 neden:"piza kunyesinin baskenti, kunye 1000-01-01..1406-10-09. 1406'da Floransa'ya gecti; sonrasi icin kaynak susuyor. NOT: kunye id'si piza, verideki nokta adi Pisa; yamada VERININ yazimi kullanildi"},

{ad:"Parma", kd:[{f:"1545-08-16", t:"1860-03-18", k:1}], kaynak:"devletler.js:parma",
 neden:"parma kunyesinin baskenti, 1545-08-16..1860-03-18. Dukaligin kurulusundan oncesi icin kunye yok"},

{ad:"Mantova", kd:[{f:"1281-01-01", t:"1328-08-16", k:1}], kaynak:"devletler.js:bonacolsi",
 neden:"bonacolsi kunyesinin baskenti, kunye 1273-01-01..1328-08-16. 🔴 PENCERE YALNIZ 47 YIL (atlas icinde) — duz k:1 yazsaydim Mantova 1328'den 1923'e kadar 595 yil hak etmedigi agirlik tasirdi. Gonzaga donemi icin kunye YOK, o pencere BOS"},

{ad:"Torino", kd:[{f:"1720-08-02", t:"1861-03-17", k:1}], kaynak:"devletler.js:sardinya-piyemonte",
 neden:"sardinya-piyemonte kunyesinin baskenti, 1720-08-02..1861-03-17. Savoia dukaligi donemi icin ayri kunye yok ⇒ 1720 oncesi bos"},

{ad:"Dijon", kd:[{f:"1281-01-01", t:"1482-03-27", k:1}], kaynak:"devletler.js:burgonya",
 neden:"burgonya kunyesinin baskenti, kunye 1032-01-01..1482-03-27. 1482'de Fransa'ya katildi; sonrasi icin kaynak susuyor. 🔴 Ve sartname Burgonya'yi TDV'de OLMAYAN besli arasinda ADIYLA sayiyor — yani bu kayit TDV'siz, dizinden geliyor"},

{ad:"Pamplona", kd:[{f:"1281-01-01", t:"1620-10-19", k:1}], kaynak:"devletler.js:navarra",
 neden:"navarra kunyesinin baskenti, kunye 824-01-01..1620-10-19. Sonrasi icin kaynak susuyor"},

{ad:"Novgorod", kd:[{f:"1281-01-01", t:"1478-01-15", k:1}], kaynak:"devletler.js:novgorod",
 neden:"novgorod kunyesinin baskenti, kunye 1136-01-01..1478-01-15. 1478'de Moskova'ya ilhak edildi; sonrasindaki mertebesi olculmedi"},

{ad:"Pskov", kd:[{f:"1348-01-01", t:"1510-01-13", k:1}], kaynak:"devletler.js:pskov",
 neden:"pskov kunyesinin baskenti, 1348-01-01..1510-01-13. Bagimsizlik oncesi (Novgorod'a bagli) ve sonrasi (Moskova) icin kademe yazilmadi"},

{ad:"Vilnius", kd:[{f:"1281-01-01", t:"1569-07-01", k:1}], kaynak:"devletler.js:litvanya-buyuk-dukalik",
 neden:"litvanya-buyuk-dukalik kunyesinin baskenti, kunye 1253-07-06..1569-07-01. 1569'da Lublin Birligi ile Lehistan'a girdi; sonrasi icin kaynak susuyor"},

{ad:"Kaunas", kd:[{f:"1918-02-16", t:"1923-10-29", k:1}], kaynak:"devletler.js:litvanya",
 neden:"litvanya kunyesinin baskenti, 1918-02-16..1923-10-29. 🔴 PENCERE 6 YIL — oncesindeki 637 yil icin kademe YAZILMADI. Duz k:1 yazmak bu noktaya butun ortacag boyunca baskent agirligi verirdi"},

{ad:"Brüksel", kd:[{f:"1830-10-04", t:"1923-10-29", k:1}], kaynak:"devletler.js:belcika",
 neden:"belcika kunyesinin baskenti, 1830-10-04..1923-10-29. 1830 oncesi (Brabant · Burgonya · Ispanyol/Avusturya Hollandasi) icin kaynak susuyor ⇒ 549 yil bos"},

{ad:"Helsinki", kd:[{f:"1917-12-06", t:"1923-10-29", k:1}], kaynak:"devletler.js:finlandiya",
 neden:"finlandiya kunyesinin baskenti, 1917-12-06..1923-10-29. 🔴 PENCERE 6 YIL. Isvec ve Rus donemleri icin kaynak susuyor"},

{ad:"Riga", kd:[{f:"1918-11-18", t:"1923-10-29", k:1}], kaynak:"devletler.js:letonya",
 neden:"letonya kunyesinin baskenti, 1918-11-18..1923-10-29. 🔴 PENCERE 5 YIL. Hansa ve Rus donemleri icin kaynak susuyor"},

{ad:"Tallinn (Reval)", kd:[{f:"1918-02-24", t:"1923-10-29", k:1}], kaynak:"devletler.js:estonya",
 neden:"estonya kunyesinin baskenti, 1918-02-24..1923-10-29. 🔴 PENCERE 6 YIL. Danimarka, Livonya ve Rus donemleri icin kaynak susuyor"},

{ad:"Dublin", kd:[{f:"1922-12-06", t:"1923-10-29", k:1}], kaynak:"devletler.js:irlanda-serbest-devlet",
 neden:"irlanda-serbest-devlet kunyesinin baskenti, 1922-12-06..1923-10-29. 🔴🔴 PENCERE 10 AY — bu dosyanin EN DAR penceresi. Duz k:1 yazsaydim Dublin 1281'den beri baskent gorunurdu, yani 641 yillik bir yalan. Oncesi (Ingiliz idaresi, Dublin Kalesi) icin bir mertebe SORMADIM"},

// ───────── C. OSMANLI KUŞAĞI — kutumun 10 noktası, TDV burada GÜÇLÜ ─────────
// 393 kademesizin 10'u Osmanlı dönemi taşıyor. Şartname "TDV Osmanlı idarî
// taksimatı için ÇOK GÜÇLÜ" diyor ve tuttu: 10'un 5'ine kaynaklı kademe
// yazıldı, 3'ü "kaynak susuyor", 2'sine "kademe UYGULANMAZ".
//
// 🟢 VE İKİSİ DAR SLUG'DAN DEĞİL GENEL MADDEDEN ÇIKTI (§4 kuralı):
//   `knin` ölü (302) → `kirka` maddesi Knin'i sancak MERKEZİ diye verdi
//   `herseknovi` ölü (302) → `hersek` STUB çıktı (bu dosyada §4③'ün
//     ALTINCI vakası: songay · dahomey · zaire · lagos · porto-novo · hersek)
//     → `bosna-hersek` denendi, o da Herceg Novi'yi idarî olarak ANMIYOR

{ad:"Klis", kd:[{f:"1537-03-12", t:"1648-03-31", k:2}], kaynak:"klis",
 neden:"SANCAK MERKEZI — TDV klis maddesi acik: fetihten (1537) hemen sonra 'sancak ve kaza merkezi yapildi'. Osmanli penceremiz 1537-03-12..1648-03-31 ve kaynak tam ona oturuyor. NOT: TDV sancagin 1826'ya kadar surdugunu soyluyor ama KALE 1648'de Venedik'e gecti; sancak baska merkezden devam etmis olabilir, ONU OLCMEDIM, o yuzden kademe yalniz bizim Osmanli penceremize yazildi"},

{ad:"Bihaç (Bihać)", kd:[{f:"1592-06-19", t:"1908-10-05", k:2}], kaynak:"bihac",
 neden:"SANCAK MERKEZI — TDV bihac maddesi 1592 fethinden sonra 'Bihac kaptani' rutbesini ve 17. yuzyilda Bosna icinde bir sancagin merkezi oldugunu veriyor. ⚠️ AMA AYNI MADDE '1865'te YENIDEN sancak merkezi haline getirildi' diyor; 'yeniden' kelimesi arada rutbenin DUSTUGU bir aralik oldugunu ima ediyor ve O ARALIGI OLCMEDIM. k:2'yi butun Osmanli penceresine yazdim ve bu belirsizligi gizlemiyorum"},

{ad:"Knin", kd:[{f:"1580-01-01", t:"1688-09-11", k:2}], kaynak:"kirka",
 neden:"SANCAK MERKEZI — ve bunu DAR SLUG DEGIL GENEL MADDE verdi: knin slug'i OLU (302), ama kirka maddesi acikca 'Merkezi, Kirka cayinin yukari kesiminde bulunan Knin sehriydi' diyor ve Kirka'nin 1580'de yeni bir sancak olarak kuruldugunu yaziyor. ⇒ kademe 1580'den BASLATILDI; 1522-1580 arasi Osmanli donemi icin rutbe bilinmiyor, o pencereye YAZILMADI"},

// 🔴 SONRADAN ÖLÇÜLDÜ — bu iki kaydın dayanağı SANDIĞIMDAN ZAYIF, ve bunu
//   kayıt yazıldıktan SONRA öğrendim. Aşağıda G2'de anlatılan sınav
//   ("tur:kale ⇒ k:4 kuralı tutuyor mu") mevcut veride koşuldu:
//     tur:"kale" olan 183 kademeli noktanın yalnız %68'i k:4
//     52'si k:3 · 7'si k:2 — yani "kale" mertebeyi BELİRLEMİYOR
//   ⇒ Kayıtları GERİ ALMADIM, çünkü hatanın YÖNÜ hâlâ güvenli: k:4 en düşük
//     kademe, yani bu iki nokta fazla ağırlık ALAMAZ, olsa olsa az alır ve
//     şartname §③ tam bunu istiyor. Ama "mertebe tablosunu uyguladım"
//     demek, ölçüm sonrası fazla emin bir cümle — düzeltiyorum.
{ad:"Nadin", k:4, kaynak:"dalmacya",
 neden:"KALE — TDV dalmacya maddesi Nadin'i 1540 antlasmalariyla el degistiren KALELER arasinda aniyor. ⚠️ Bu bir IDARI RUTBE beyani DEGIL, yerin CINSININ tarifi. Mertebe tablosunun 'k:4 = kasaba, koy, KALE' satirini uyguladim AMA sonradan olctum: mevcut veride tur:kale olan noktalarin yalniz %68'i k:4, %32'si k:3 ya da k:2. ⇒ Bu kayit KESIN DEGIL, ALT SINIR. Geri almadim cunku hatanin yonu guvenli (k:4 fazla agirlik veremez), ama kaynakli bir mertebe cikarsa DUZELTILMELI"},

{ad:"Vrana (Urana)", k:4, kaynak:"dalmacya",
 neden:"KALE — Nadin ile ayni kayit, ayni kaynak, ayni ZAYIFLIK: TDV ikisini birlikte 1540 antlasmalariyla el degistiren kaleler olarak aniyor, idari rutbe beyan ETMIYOR. Olculdu: tur:kale mertebeyi %68 belirliyor, yani bu bir ALT SINIR kaydidir, kesin mertebe degil"},

// ───────── C2. KAYNAK SUSUYOR — k: YAZILMADI ─────────
// 📌 KADEME-KD §④.3: "Sehirdir, herhalde 3. kademedir demek KOLAYDIR ve
//   UYDURMADIR." Bu ucunde de kaynak arandi ve rutbe VERMEDI.

// 🟢 `k_yok_sebep` ALANI — M-0475'in kapali sozlugu BENIMSENDI.
//   Sebep: kendi M-0472 uyarimi kendi dosyamda uygulamamistim. "k: nicin
//   yok" bilgim `neden:` serbest metnindeydi, yani bir `if` ile sorulamaz.
//   Sozluk (M-0475'ten aynen): kaynak-susuyor · adres-yanlis · erisilemedi
//   ⚠️ VE BEN BIR DORDUNCUSUNU EKLIYORUM — `sari-tek-dayanak`, cunku
//     Perugia ucune de uymuyor: kaynak SUSMUYOR, bilgi VAR, ama tek
//     dayanak SARI (Britannica, M-0391). Bunu `kaynak-susuyor` saymak
//     yanlis olurdu: susan bir kaynakla, konusan ama kabul edilmeyen bir
//     kaynak ayni sey degil ve ikincisi TEK bir akademik teyitle kapanir.
//   📌 M-0475'in kendi ayrimi: `kademe_uygulanmaz` TASARIM, `k_yok_sebep`
//     BORC. Dordu de borc kovasidir — yani hepsi bir gun kapanabilir.
{ad:"Herseknovi (Herceg Novi)", kaynak:"bosna-hersek", k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — ARANDI. herseknovi slug'i OLU (302); hersek slug'i CANLI ama STUB (bosna-hersek'e atif); bosna-hersek maddesi okundu ve Hersek sancaginin 1470'te kuruldugunu, 1580'de Bosna beylerbeyiligine baglandigini veriyor AMA sancagin MERKEZINI sylemiyor ve Herceg Novi'yi idari taksimat konusunda HIC ANMIYOR. ⇒ k: YAZILMADI"},

// 🟢 KOVASI KESIN — ve kaniti YENI CEKIM GEREKTIRMEDI, kendi onceki
//   olcumumde ZATEN vardi: dalmacya maddesinin govdesini okumustum ve o
//   madde Klis, Nadin, Vrana ve Scardona'yi ADIYLA aniyor, Sinj'i ANMIYOR.
//   ⇒ Kapsayici madde VAR ve bu tanecikte SUSUYOR = kaynak-susuyor.
//   📌 M-0494'te bunu "belirsiz" diye kaydetmistim; belirsiz DEGILMIS,
//     kanit elimdeydi ve ben kendi olcumume bakmamistim.
{ad:"Sin (Sinj)", kaynak:"dalmacya", k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — ARANDI VE KANITI VAR. sinj ve sinj--sehir sluglari OLU (302); kapsayici maddeler dalmacya ve kirka CANLI ve govdeleri OKUNDU. dalmacya maddesi Klis, Nadin, Vrana ve Scardona'yi adiyla aniyor ama Sinj'i HIC anmiyor; kirka maddesi de Knin'i merkez diye veriyor, Sinj'in kademesini vermiyor. ⇒ madde VAR, bu tanecikte SUSUYOR ⇒ kaynak-susuyor, madde-yok DEGIL"},

// 🟢 KOVASI SONRADAN KESINLESTIRILDI — M-0494'te "belirsiz" diye kaydettigim
//   borc kapatildi: kapsayici maddenin (italya) GOVDESI Otranto icin OZEL
//   OLARAK okundu. Sonuc: madde VAR, Otranto'yu ADIYLA aniyor, kademeyi
//   YAZMIYOR ⇒ `madde-yok` DEGIL, kesin `kaynak-susuyor`.
// 🟢 VE BONUS — MADDE VERIYI BAGIMSIZ DOGRULADI: "Fatih Sultan Mehmed'in
//   saltanatinin son yilinda Otranto'nun zaptedilmesi (11 Agustos 1480)" ve
//   "on bir ay Turkler'in elinde kalan Otranto guclukle geri alinabilmisti
//   (10 Eylul 1481)". Veride Osmanli donemi 1480-08-11 → 1481-09-10 yazili,
//   yani GUNU GUNUNE ayni. Kademe icin sustu ama TARIHI teyit etti.
{ad:"Otranto", kaynak:"italya", k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — ARANDI VE KANITI VAR. otranto, otrant, otranto--sehir sluglarinin UCU DE OLU (302); kapsayici madde `italya` CANLI ve govdesi Otranto icin ozel olarak OKUNDU: sehri adiyla aniyor ve iki tarihi veriyor ama IDARI KADEME hakkinda hicbir sey soylemiyor. ⇒ Bu, madde-yok DEGIL kaynak-susuyor: madde var, dogru yeri aniyor, kademeyi yazmiyor. 🟢 Ve ayni okuma veriyi DOGRULADI: maddenin verdigi 11 Agustos 1480 ve 10 Eylul 1481, verideki Osmanli donemiyle GUNU GUNUNE ayni"},

// ───────── C3. KADEME UYGULANMAZ — 🔴 İKİ KAYIT GERİ ÇEKİLDİ ─────────
//
// Burada `Boğaziçi (Rumeli yakası)` ve `Saroz kuzey kıyısı` için iki kayıt
// vardı ve İKİSİ DE GERİ ÇEKİLDİ. Sebep ölçüldü, varsayılmadı:
//
// M-0468'in ③. ölçümü ("kutular kesişiyor mu YANLIŞ soru; doğrusu aynı
// noktaya iki kayıt yazılmış mı — ve o BEKLENMEZ, ÖLÇÜLÜR") kendi
// kutumda koşturuldu: diskteki BEŞ kademe yamasının hepsi node ile okundu,
// 466 tekil nokta, ve ÜÇ ad birden çok dosyada çıktı. İkisi BENİMDİ:
//   Boğaziçi (Rumeli yakası)  → kademe_4ff22b.js + bu dosya
//   Saroz kuzey kıyısı        → kademe_4ff22b.js + bu dosya
//
// 🟢 VE ÖTEKİ KAYIT BENİMKİNDEN İYİYDİ — o yüzden benimki düştü, onunki
//   değil. Fark yapısal: onlar `kademe_uygulanmaz:true` diye AYRI BİR
//   ALAN yazmış; ben aynı hükmü `kaynak:"uygulanmaz"` diye SERBEST METNE
//   gömmüştüm. Bir makine onunkini `if` ile sorabilir, benimkini soramaz.
//   📌 Bu, `§11`in on birinci sınıfı: doğru öğrenilmiş bir dersi makinenin
//     göremeyeceği yere yazmak. Kendi dosyamda üç kez uyguladığım kuralı
//     tam burada ihlal etmişim.
//
// ⚠️ Çakışma da tesadüf değil YAPISAL: benim kutumun doğu kenarı (lon 32'ye
//   kadar) Boğaz'ı ve Saroz'u kapsıyor, ama oralar Anadolu kutusunun konusu.
//   Kutu sınırları coğrafî, konu sınırları tarihî — ikisi çakışmıyor.
//   ⇒ Anadolu kutusuna bıraktım. Yatay mesajla bildirdim.

// ───────── D. EŞLEŞTİRİCİ DÜZELTİLDİ — 13 BAŞKENT DAHA ─────────
//
// 🔴 KUSUR BENİM ALETİMDEYDİ, VERİDE DEĞİL. İlk eşleştiricim `baskent:`
//   alanını YALNIZ VİRGÜLLE bölüyordu. Oysa alan SERBEST METİN ve üç ayrı
//   biçim taşıyor:
//     "Ferrara → Modena (1598 sonrası)"   ← BAŞKENT TAŞINMASI (ok işareti)
//     "Rennes / Nantes"                    ← ÇİFT merkez (eğik çizgi)
//     "— (seçimli) → Berlin"               ← önce YOK, sonra var
//   ⇒ Ayıracı `[,;/]` + ok olarak genişlettim ve 13 kayıt daha çıktı.
//   📌 Bu, ilk parti 31 iken **%42'lik bir kaçak** demek. Aleti düzeltmek
//     yeni kaynak aramaktan ucuzdu — ve kaçağı gösteren şey bir sezgi değil,
//     Ferrara'nın 1500'de veride SAHİP olarak görünüp yamada BULUNMAMASIYDI.
//
// 🟢 VE ALTISI BAŞKENT TAŞINMASI — `kd:`nin ta kendisi:
//   aragon Zaragoza→Barselona · norvec-kralligi Bergen→Oslo ·
//   kastilya Toledo→Valladolid · ferrara Ferrara→Modena ·
//   savoya Chambéry→Torino · almanya (seçimli)→Berlin
//
// 🔴 AMA ALAN GEÇİŞ TARİHİNİ VERMİYOR — biri hariç. Bu yüzden taşınmaları
//   kd: ile BÖLEMEDİM; yalnız `ferrara` alanın kendi içinde "(1598 sonrası)"
//   diyor ve O BÖLÜNDÜ. Ötekilerde iki merkezi de künye penceresine k:1
//   yazdım, çünkü mertebe tablosunun k:1 satırı yalnız "başkent" değil
//   **"başkent / vilâyet düzeyi merkez"** diyor — eski başkent o düzeyin
//   altına düşmüyor. Geçiş gününü UYDURMAKTANSA pencereyi bölmedim.

{ad:"Ferrara", kd:[{f:"1281-01-01", t:"1598-01-01", k:1}], kaynak:"devletler.js:ferrara",
 neden:"ferrara kunyesinin ILK baskenti. 🟢 Bu, alanin GECIS TARIHINI verdigi TEK vaka: baskent alani birebir 'Ferrara → Modena (1598 sonrasi)' yaziyor ⇒ pencere 1598'de bolundu ve Modena ayri kayit oldu. Kunye 1240-01-01..1859-01-01, atlas basi 1281'e kirpildi"},

{ad:"Modena", kd:[{f:"1598-01-01", t:"1859-01-01", k:1}], kaynak:"devletler.js:ferrara",
 neden:"ferrara kunyesinin IKINCI baskenti; alan '(1598 sonrasi)' diyor ⇒ 1598'den kunye sonuna. 1598 oncesi Modena'nin kademesi icin kaynak SUSUYOR, o pencereye yazilmadi"},

{ad:"Barselona", kd:[{f:"1281-01-01", t:"1479-01-20", k:1}], kaynak:"devletler.js:aragon",
 neden:"aragon kunyesinin baskenti; alan 'Zaragoza → Barselona' diyor ama GECIS TARIHI YOK ⇒ pencere BOLUNMEDI, ikisi de kunye penceresine k:1 yazildi. Mertebe tablosunun k:1 satiri 'baskent / vilayet duzeyi merkez' oldugu icin ikisi de o duzeyde"},

{ad:"Zaragoza", kd:[{f:"1281-01-01", t:"1479-01-20", k:1}], kaynak:"devletler.js:aragon",
 neden:"aragon kunyesinin ILK baskenti; Barselona kaydiyla ayni gerekce, gecis tarihi olmadigi icin pencere bolunmedi"},

{ad:"Toledo", kd:[{f:"1281-01-01", t:"1479-01-20", k:1}], kaynak:"devletler.js:kastilya",
 neden:"kastilya kunyesinin baskenti; alan 'Toledo → Valladolid' diyor, gecis tarihi YOK ⇒ pencere bolunmedi. Kunye 1230-09-23..1479-01-20, atlas basi 1281'e kirpildi"},

{ad:"Valladolid", kd:[{f:"1281-01-01", t:"1479-01-20", k:1}], kaynak:"devletler.js:kastilya",
 neden:"kastilya kunyesinin IKINCI baskenti; Toledo kaydiyla ayni gerekce"},

{ad:"Bergen", kd:[{f:"1281-01-01", t:"1537-01-01", k:1}], kaynak:"devletler.js:norvec-kralligi",
 neden:"norvec-kralligi kunyesinin ILK baskenti; alan 'Bergen → Oslo' diyor, gecis tarihi YOK ⇒ pencere bolunmedi. Kunye 1281-01-01..1537-01-01, atlasin ilk gununden basliyor"},

{ad:"Oslo", kd:[{f:"1281-01-01", t:"1537-01-01", k:1}], kaynak:"devletler.js:norvec-kralligi",
 neden:"norvec-kralligi kunyesinin IKINCI baskenti; Bergen kaydiyla ayni gerekce"},

{ad:"Chambéry", kd:[{f:"1281-01-01", t:"1720-08-02", k:1}], kaynak:"devletler.js:savoya",
 neden:"savoya kunyesinin ILK baskenti; alan 'Chambery → Torino' diyor. 🟢 VE BU KAYIT TORINO ILE TUTARLI: Torino'yu sardinya-piyemonte kunyesinden 1720-08-02'de baslatmistim, savoya kunyesi de TAM O GUN bitiyor. Iki ayri kunyeden gelen iki kayit ayni gunde birlesiyor — bu bir tutarlilik isaretidir, ve gecis tarihini UYDURMADAN elde edildi"},

{ad:"Amsterdam", kd:[{f:"1581-07-26", t:"1923-10-29", k:1}], kaynak:"devletler.js:hollanda",
 neden:"hollanda kunyesinin baskenti; alan 'Amsterdam / Lahey' diyor — bu bir TASINMA degil CIFT merkez (anayasal baskent ve hukumet merkezi). Ikisi ayni anda gecerli oldugu icin pencere bolunmedi. Lahey bu yamada YOK cunku o nokta zaten kademeli"},

{ad:"Rennes", kd:[{f:"1281-01-01", t:"1532-08-13", k:1}], kaynak:"devletler.js:bretanya",
 neden:"bretanya kunyesinin baskenti; alan 'Rennes / Nantes' — CIFT merkez, tasinma degil. 🔴 VE BU KAYIT SARTNAMENIN OZEL VAKASI: Bretanya, sartnamenin 'TDV'de gercekten YOK' diye adiyla saydigi bes yerden biri. Yani bu kademe TDV'siz, tamamen projenin kendi dizininden geliyor"},

{ad:"Nantes", kd:[{f:"1281-01-01", t:"1532-08-13", k:1}], kaynak:"devletler.js:bretanya",
 neden:"bretanya kunyesinin ikinci merkezi; Rennes kaydiyla ayni gerekce"},

// ───────── D2. YAZILMAYAN — ve gerekcesi alanin KENDI metninde ─────────

{ad:"Berlin", kaynak:"bulunamadi", k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak belirsiz — YAZILMADI. almanya kunyesinin baskent alani '— (secimli) → Berlin' diyor: yani kunyenin ILK bolumunde SABIT BASKENT YOK (Kutsal Roma, secimli imparatorluk) ve Berlin SONRADAN geliyor. Ama GECIS TARIHI YOK. Kunye 962-02-02..1923-10-29; Berlin'e butun pencereye k:1 yazsaydim 909 YILLIK bir yalan olurdu. ⇒ Alanin kendi metni beni durdurdu: '—' isareti 'baskent yok' demek ve onu gormezden gelmek, kaynagi duzeltmek olurdu"},

// ───────── E. KUTU 1: İTALYA + KORSİKA — ve TDV'nin KURU ÇIKTIĞI YER ─────────
//
// 🔴 ÖNCE ÖLÇÜM: kutuda (lat 36..47 / lon 6..19) 53 kademesiz nokta var.
//   TDV denendi ve KURU: `italya` · `sicilya` · `venedik` CANLI, üçünün de
//   gövdesi okundu, **üçü de idarî kademe VERMİYOR.** Kendi cümleleriyle:
//     sicilya → "idarî hiyerarşi ve 1282 sonrası yönetim ayrıntıları bu
//               içerikte YER ALMIYOR"
//     venedik → Dalmaçya'daki yerlerin "eyalet, rettore ya da provveditore
//               yapıları altında işleyip işlemediğini BELİRTMİYOR"
//   Ve tek tek şehir slugları: palermo · messina · bari · zadar · split ·
//   kotor · sibenik · bolonya · ancona · ravenna · perugia — **ONBİRİ DE
//   ÖLÜ (302).** ⇒ Bu kutuda TDV yolu KAPALI, ölçüldü.
//
// 🟢 AKADEMİK YOL AÇILDI (koordinatör izni M-0218) ve İKİ KAYIT VERDİ.
//   Kaynak: **"Relazioni dei rettori veneti in Terraferma"**, ed. Amelio
//   Tagliaferri, Istituto di Storia Economica, Università di Trieste —
//   Venedik rektörlerinin resmî raporlarının **birincil kaynak neşri.**
//   Koordinatörün 🟢 listesinde "üniversite yayını" ve "birincil kaynak
//   neşri" olarak ADIYLA geçiyor.
//   Serinin cilt başlıkları idarî birimi DOĞRUDAN adlandırıyor:
//     Vol. XI  "Podesteria e capitanato di BRESCIA"
//     Vol. XII "Podesteria e capitanato di BERGAMO"
//
// ⚠️ VE BİR KADEME AŞAĞI YAZDIM, BİLEREK: "podesteria e capitanato" Venedik
//   Terraferma'sının ÜST düzey bölgesidir ve mertebe tablosunun k:1 satırına
//   ("vilâyet düzeyi merkez") de okunabilir. Şartname §③ diyor ki: "Emin
//   olamadığın yerde bir kademe AŞAĞI yaz — fazla ağırlık peteği komşusunun
//   toprağına TAŞIRIR." ⇒ k:2 yazdım. Bu bir tercih değil, kuralın uygulaması.

{ad:"Brescia", k:2, kaynak:"bulunamadi",
 neden:"PODESTERIA E CAPITANATO — Venedik Terraferma'sinin bolge merkezi. Kaynak TDV DEGIL: 'Relazioni dei rettori veneti in Terraferma' Vol. XI, ed. Amelio Tagliaferri, Istituto di Storia Economica, Universita di Trieste (birincil kaynak nesri). Cildin BASLIGI birimi dogrudan adlandiriyor: 'Podesteria e capitanato di Brescia'. ⚠️ k:2 yazildi ama k:1 de okunabilirdi (mertebe tablosunun 'vilayet duzeyi merkez' satiri); §③ geregi BIR KADEME ASAGI yanildim. kaynak alani yalniz TDV slug'i tasidigi icin bulunamadi yazdim, gercek dayanak bu satirda"},

{ad:"Bergamo", k:2, kaynak:"bulunamadi",
 neden:"PODESTERIA E CAPITANATO — Brescia kaydiyla ayni seri ve ayni gerekce: 'Relazioni dei rettori veneti in Terraferma' Vol. XII, 'Podesteria e capitanato di Bergamo'. §③ geregi k:2, bir kademe asagi"},

// ───────── F. PAPALIK LEGASYONU — ve BRITANNICA KURALININ İLK VAKASI ─────────
//
// 🟡 Bu kaydın hikâyesi bir kaynak kuralının doğuşudur ve kayda değer:
//   ① Papalık grubunu (Bolonya · Perugia · Ancona · Ravenna · Rimini)
//     aradım ve BULDUM: Papalık Devleti'nin dört legasyonundan İKİSİ benim
//     kutumda — Bolonya ve Perugia. Yazmaya hazırdı.
//   ② 🔴 AMA KAYNAK BRITANNICA'ydı, ve Britannica koordinatörün 🟢
//     listesinde de 🔴 listesinde de YOKTU — ARADA. Kendi kararımla
//     yazmadım, SORDUM (M-0386).
//   ③ Hüküm geldi (M-0391): **BRITANNICA = SARI, Vikipedi sınıfı.**
//     ⇒ tek dayanak olamaz, ikinci akademik kaynak ŞART.
//   ④ İkinci kaynağı aradım ve BOLONYA İÇİN BULDUM, PERUGIA İÇİN BULAMADIM.
//
// 📌 Ve sonuç ikisini AYIRDI: aynı aramadan gelen iki şehirden biri yazıldı,
//   öteki yazılmadı. Kural, "ikisi de aynı kaynakta geçiyordu" demeyi
//   engelledi — ve engellemesi doğruydu.

{ad:"Bolonya", k:2, kaynak:"bulunamadi",
 neden:"PAPALIK LEGASYONU MERKEZI — kardinal legat oturagi. IKINCI VE ACIKCA AKADEMIK KAYNAK: Bologna Universitesi kurumsal tarihi (unibo.it, universite yayini — koordinatorun yesil listesinde ADIYLA gecen tur). Kendi cumlesi: 'From the sixteenth to the eighteenth centuries, Bologna belonged to the Papal States, governed on the one hand, by a cardinal legate of the pope and, on the other, by the Senate of the city.' Ayrica II. Julius'un 1506'da Bolonya'yi geri alip yetkiyi tamamen papalik legatina devrettigini veriyor. ⚠️ DUZ k alanini yazdim ama zamanli kd alanini YAZMADIM ve sebebi acik: kaynak baslangici tarihliyor (1506) ama BITISI 'onsekizinci yuzyillara kadar' diye ARALIK olarak veriyor, gun ya da yil DEGIL. Yuzyil sinirini 1800-01-01 diye yazmak bir OKUMA olurdu, belgelenmis bir olay degil. ⇒ Pencere bolunmedi. §③ geregi k:1 yerine k:2, bir kademe asagi"},

{ad:"Perugia", kaynak:"bulunamadi", k_yok_sebep:"sari-tek-dayanak",
 neden:"kaynak susuyor — ARANDI VE IKINCI KAYNAK BULUNAMADI. Perugia'nin Papalik'in dort legasyonundan biri (Umbria legasyonu) oldugu bilgisi BRITANNICA'da var, ama M-0391 hukmuyle Britannica SARI (Vikipedi sinifi) ve tek dayanak olamaz. Akademik alan adlariyla ikinci arama yapildi (cambridge, brill, jstor, oup, degruyter, openedition, oxfordre, unibo) ve Bolonya'yi DOGRULADI, Perugia'yi DOGRULAMADI. ⇒ k: YAZILMADI. Bu 'aramadim' degil, 'aradim ve ikinci kaynak yok' — ve BOLONYA ile ayni aramadan gelmesine ragmen ayni muameleyi GORMEDI. Kural boyle isliyor"},

// ───────── G. VENEDİK DALMAÇYASI — tek aramanın en verimli sonucu ─────────
//
// KAYNAK: hrcak.srce.hr (Hırvat bilimsel dergileri portalı, hakemli) ve
//   unizd.hr (Zadar Üniversitesi) — ikisi de üniversite/hakemli yayın.
//   İki ayrı şey veriyorlar ve İKİSİNİN KANIT GÜCÜ FARKLI:
//
//   ① ARALIK BEYANI (güçlü): "Zadar was the administrative centre of
//      Dalmatia during the Venetian administration (1409–1797)", ve
//      provveditore generale'nin sarayı orada.
//   ② TEK AN BEYANI (zayıf): 1789 tarihli bir kadastro belgesi (Provveditor
//      Generale Angelo Memo) Dalmaçya eyaletinin DÖRT çeyreğe bölündüğünü
//      ve çeyrek merkezlerinin Zara · Knin · Sebenico · Spalato olduğunu
//      söylüyor. Bu bir YIL beyanıdır, ARALIK değil.
//
// 🟢 VE ZADAR'DA BAĞIMSIZ BİR DOĞRULAMA ÇIKTI: kaynağın verdiği 1409-1797
//   aralığı, verideki Venedik döneminin BİREBİR AYNISI (1409-01-01 →
//   1797-10-17). İki ayrı yerden gelen iki tarih çakışıyor — bu artık
//   tahmin değil. Öteki üç şehrin veri penceresi FARKLI başlıyor
//   (Şibenik 1412 · Split 1420 · Knin 1688) ve ben kaynağı onlara
//   GENİŞLETMEDİM; her birine KENDİ Venedik penceresini yazdım.

{ad:"Zadar (Zara)", kd:[{f:"1409-01-01", t:"1797-10-17", k:1}], kaynak:"bulunamadi",
 neden:"DALMACYA'NIN IDARI MERKEZI — provveditore generale'nin oturagi. Kaynak TDV DEGIL (zadar slug'i OLU 302): hrcak.srce.hr hakemli portali ve unizd.hr, kendi cumlesiyle 'Zadar was the administrative centre of Dalmatia during the Venetian administration (1409-1797)'. 🟢 VE ARALIK VERIDEKI VENEDIK DONEMININ BIREBIR AYNISI (1409-01-01 → 1797-10-17) — iki bagimsiz kaynak ayni tarihi veriyor. k:1 yazildi ve bu sefer ASAGI YANILMADIM cunku emin degilim DEGIL: kaynak 'eyaletin idari merkezi' diyor ve mertebe tablosunun k:1 satiri 'baskent / vilayet duzeyi merkez'"},

{ad:"Şibenik (Sebenico)", kd:[{f:"1412-10-30", t:"1797-10-17", k:2}], kaynak:"bulunamadi",
 neden:"DALMACYA'NIN DORT CEYREGINDEN BIRININ MERKEZI. ⚠️ VE KANIT GUCUNU ACIKCA YAZIYORUM: kaynak (1789 tarihli Provveditor Generale Angelo Memo kadastro belgesi, hrcak.srce.hr) ceyrek merkezlerini Zara-Knin-Sebenico-Spalato diye sayiyor AMA bu bir TEK YIL beyanidir, aralik degil. Ben pencereyi sehrin KENDI Venedik donemi yaptim (1412-10-30 → 1797-10-17) ⇒ yani 'butun bu sure boyunca ceyrek merkeziydi' KAYNAKLI DEGIL, 1789'da OYLE OLDUGU kaynakli. Bu bir GENISLETMEDIR ve gizlemiyorum; daraltilmak istenirse dayanak yili 1789'dur"},

{ad:"Split (Spalato)", kd:[{f:"1420-01-01", t:"1797-10-17", k:2}], kaynak:"bulunamadi",
 neden:"DALMACYA'NIN DORT CEYREGINDEN BIRININ MERKEZI — Sibenik kaydiyla ayni kaynak ve AYNI KANIT SINIRI: 1789 kadastro belgesi tek yil beyanidir, pencere sehrin kendi Venedik donemidir (1420-01-01 → 1797-10-17) ve bu bir GENISLETMEDIR. Kaynagi 1409'dan baslatmadim: Split'in Venedik donemi veride 1420'de basliyor ve kaynagi veriye UYDURMAK yerine her birine kendi penceresini verdim"},

// ───────── H. İBERYA — ve KUTU SEÇİMİMİN YANLIŞ OLDUĞUNU GÖSTEREN ÖLÇÜM ─────────
//
// 🟢 İtalya kutusunda TDV'nin kuru çıkmasından sonra İberya'yı yokladım ve
//   ORADA CANLI ÇIKTI — ama yalnız **ARAPÇA ADLARLA.** Bu, §4'ün "TÜRKÇE
//   YAZIM EKSENİ" dersinin YER ADI tarafı: kimliği kendi transliterasyonunla
//   aramak, TDV'nin yazdığı künyeyi bulmaz.
//     Almería→meriye · Sevilla→isbiliye · Córdoba→kurtuba · Granada→girnata
//     Toledo→tuleytula · Zaragoza→sarakusta · Valencia→belensiye
//     Málaga→malaka · Badajoz→batalyevs · Murcia→mursiye · Tortosa→tortosa
//   Onaltı slug denendi, ONİKİSİ CANLI. İtalya'da onaltıda ÜÇ canlıydı.
//
// 🔴 AMA İKİNCİ ÖLÇÜM BİRİNCİYİ SINIRLADI, ve asıl bulgu bu:
//   **CANLI SLUG SAYISI, PENCEREYE DÜŞEN BİLGİ DEĞİL.** TDV'nin Endülüs
//   maddeleri şehirlerin İSLÂMÎ dönemini anlatıyor ve o dönem çoğunlukla
//   1281'den ÖNCE bitiyor: Kurtuba 1236'da, Sevilla 1248'de, Belensiye
//   1238'de, Mursiye 1243'te, Sarakusta 1118'de düştü.
//   ⇒ Atlas 1281'de başlıyor. Bu maddeler ZENGİN ama bizim pencereye
//     neredeyse hiç değmiyor.
//   ⇒ İkinci slug partisinde de görüldü: kadis · ceyyan · daniye · meyorka ·
//     kulumriye · runde · velbe · kartacenne · tarrakune · lisbune —
//     ONU DA ÖLÜ (302).
//
// 🟢 TEK İSTİSNA GRANADA, ve o da TAM PENCEREYE DÜŞÜYOR: Nasrî Devleti
//   1238-1492, yani atlasın ilk gününden 1492'ye kadar CANLI.

{ad:"Granada", kd:[{f:"1281-01-01", t:"1492-01-02", k:1}], kaynak:"girnata",
 neden:"NASRI DEVLETI'NIN PAYITAHTI. TDV girnata maddesi (govdesi okundu): 'Muhammed b. Yusuf b. Nasr ... Girnata'yi ele gecirerek Nasri Devleti'ni kurdu (26 Ramazan 635 / 12 Mayis 1238)' ve o tarihten itibaren 'yaklasik 250 yil Nasriler'e payitahtlik yapacagi yeni bir donem basladi'. 🟢 VE VERI ILE BIREBIR UYUSUYOR: Granada'nin veri donemi 1281-01-01 → 1492-01-02, yani atlasin ilk gununden Nasri devletinin sonuna. Iki bagimsiz yerden gelen ayni pencere. ⚠️ 1492 SONRASINA KADEME YAZMADIM: TDV yalniz 'gunumuzde ayni adi tasiyan vilayetin merkezidir' diyor ve bu BUGUNE dair bir cumle, 1492-1923 arasina degil. Bugunku idari bolunmeyi tarihe geri yansitmak, kaynagi genisletmek olurdu"},

// ───────── I. YAKIN-EŞLEŞME — eşleştiricinin ÜÇÜNCÜ kaçağı ─────────
//
// 🔴 `Pisa`/`piza` vakasından sonra şunu düşündüm: aynı sınıftan BAŞKA
//   kaç tane var? Tek tek aramak yerine SİSTEMATİK taradım — künyelerin
//   `baskent:` alanındaki her adı, veri adlarıyla bulanık eşleştirdim
//   (difflib, eşik 0,82) ve TAM eşleşmeyenleri listeledim.
//   ⇒ **34 yakın-ama-tam-değil çift** çıktı. Yaklaşık yarısı GERÇEK aynı
//     yerin iki yazımı, yarısı tesadüfî benzerlik.
//
// 📌 VE ARAÇ TEK BAŞINA KARAR VEREMİYOR — ayıklamayı ben yaptım:
//     🟢 GERÇEK  Edinburgh↔Edinburg · Stockholm↔Stokholm · Sankt-Peterburg↔
//                St. Petersburg · Suceava↔Suçava · Cetine↔Cetinje ·
//                Nanjing↔Nanking · Murshidabad↔Murşidâbâd · Marakeş↔Merakeş
//     🔴 SAHTE   Katsina↔Atina · Erivan↔Merîvan · Sa'da↔Sayda ·
//                Mandla↔Manila · Bahawalpur↔Bhâgalpûr · Sokoto↔Sokota
//                (Sokota Habeşistan'da bir yer — adı benziyor, ilgisi yok)
//   ⇒ Bulanık eşleştirme bir ARAMA aletidir, bir KARAR aleti değil.
//
// Bu ikisi BENİM kutumda; ötekileri ilgili oturumlara yatay mesajla verdim.

{ad:"Edinburg", kd:[{f:"1281-01-01", t:"1707-05-01", k:1}], kaynak:"devletler.js:iskocya",
 neden:"ISKOCYA KRALLIGININ BASKENTI. Kunye iskocya 843-01-01..1707-05-01, baskent alani 'Scone → Edinburgh' — YINE ok isaretli, yani yine TASINMA, ve yine GECIS TARIHI YOK. Pencereyi bolmedim; Scone bu kutuda nokta olarak YOK, o yuzden yalniz Edinburg yazildi. 🔴 VE BU KAYIT ESLESTIRICININ UCUNCU KACAGIYDI: kunye 'Edinburgh' yaziyor, veri 'Edinburg' (h YOK) ⇒ tam eslesme TUTMADI ve nokta 393'un icinde kademesiz duruyordu. 1707 sonrasi (Birlik) icin kademe YAZILMADI: kunye orada bitiyor ve Edinburg'un Britanya icindeki mertebesi icin kaynagim yok"},

{ad:"Stokholm", k:1, kaynak:"devletler.js:isvec",
 neden:"ISVEC'IN BASKENTI, ve KESINTISIZ — bu yuzden duz alan yazildi ve zamanli olan gerekmedi. IKI ARDISIK kunye ayni baskenti veriyor: isvec-birlik-oncesi 1281-01-01..1523-06-06 baskent Stockholm, sonra isvec 1523-06-06..1923-10-29 baskent Stockholm. Bosluk YOK, atlasin ilk gununden son gunune. 🔴 Bu da eslestiricinin kacagiydi: kunye 'Stockholm', veri 'Stokholm' (c YOK)"},

];

// ═══════════ G2. DENENEN VE ÇÜRÜYEN BİR TÜRETME KURALI ═══════════
//
// 🟢 BU BÖLÜM SIFIR KAYIT ÜRETTİ VE YİNE DE YAZILIYOR — çünkü bir sonraki
//   oturumun aynı fikri yeniden denemesini engelliyor.
//
// FİKİR: mertebe tablosu "k:4 = kasaba · köy · KALE" diyor. Veride `tur:`
//   alanı ZATEN var. ⇒ `tur:"kale"` olan noktalara toplu `k:4` yazılabilir
//   mi? Kutumda 26 nokta böyle; tek hamlede kapanacaklardı.
//
// 🔴 YAZMADAN ÖNCE KURALI MEVCUT VERİYLE SINADIM — ve ÇÜRÜDÜ:
//   kutuda ZATEN kademeli 385 nokta var; `tur:"kale"` olan 183'ünün
//     k:4 → 124  (%68)
//     k:3 →  52
//     k:2 →   7
//   ⇒ "kale" mertebeyi BELİRLEMİYOR. Kuralı uygulasaydım 26 noktanın
//     yaklaşık 8'i yanlış olurdu ve hiçbiri fark edilmezdi, çünkü hepsi
//     "kaynaklı" görünecekti.
//
// 📌 Ve çapraz tablo bir şey daha gösterdi: `tur:` ile `k:` arasında
//   HİÇBİR türde temiz eşleme yok — `sehir` k:1'den k:4'e dağılıyor
//   (4/13/37/80), `liman` da öyle (5/14/31). ⇒ `tur:` bir YERLEŞİM CİNSİ
//   alanıdır, bir MERTEBE alanı değil. İkisi ayrı eksen.
//
// ⇒ KURAL UYGULANMADI. 26 nokta açık kaldı ve açık kalması DOĞRU.

// ═══════════ 🔴 KUTU 1'İN ÖLÇÜLMÜŞ HIZI — ve bu bir KARAR verisidir ═══════════
//
// İtalya+Korsika kutusunda 53 nokta vardı. Bu turda kapatılan: 2.
//   TDV taraması      16 slug denendi ·  3 canlı · 3'ü de kademe VERMEDİ
//   akademik arama     1 arama         ·  2 kayıt verdi
// ⇒ Ölçülmüş hız: **bir akademik arama ≈ iki kayıt.**
//
// 📌 Ve bu, bir teslim sayısından daha değerli bir sayıdır: kalan 339 nokta
//   bu hızla **~170 ayrı akademik arama** demek. Tek oturumda olmaz, ve
//   "olmaz"ı sonunda değil ŞİMDİ söylüyorum.
//   ⇒ Koordinatörün kararı: (a) bu hız kabul edilip kutular çok oturuma
//     bölünür, (b) kademe Batı Avrupa'da BİLİNÇLİ olarak eksik bırakılır,
//     (c) başka bir türetme kaynağı aranır. Öneri (a) ama karar bende değil.
//
// ⚠️ Ve bir şeyi ölçmedim, açıkça yazıyorum: "bir arama = iki kayıt" oranı
//   TEK VAKADAN çıktı. İkinci bir arama üç kayıt da verebilir, sıfır da.
//   Bu bir eğilim işareti, bir hız ölçümü DEĞİL.

// ═══════════ YAZILMAYAN 362 — ve niçin ═══════════
//
// Kutuda 393 kademesiz nokta var; bu yama 31'ini kapatıyor. Kalan 362
// ARAŞTIRILMADI ve bunu gizlemiyorum (KADEME-KD: "yarım iş suç değil,
// GİZLENMİŞ yarım iş suç").
//
// Sebebi ölçüldü ve yapısal:
//   383/393 Batı-Orta Avrupa ⇒ şartnamenin kendi ölçümü: TDV kapsaması %0
//   ⇒ her biri için AYRI akademik kaynak gerekiyor, tek tek
//   10/393 Osmanlı dönemi taşıyor ⇒ TDV burada güçlü, SIRADAKİ İŞ BU
//
// 📌 Ve bir sonraki oturuma bırakılan asıl bilgi şu: bu 31 kayıt
//   ARAŞTIRMAYLA değil EŞLEŞTİRMEYLE çıktı. Aynı yöntem (`devletler.js`in
//   `baskent:` alanını nokta adlarıyla eşlemek) öteki kutulara da
//   uygulanabilir — Asya, Arap-İran, Anadolu kutularında da karşılığı
//   olmalı. Ölçmedim, ama eşleme betiği scratchpad'de duruyor ve
//   kutu sınırı tek satır.

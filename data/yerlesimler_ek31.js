// =====================================================================
// NOKTA SİBİRYA 2 — Ural · Batı/Doğu Sibirya · Yakutistan · Kamçatka
// İŞÇİ oturum: NOKTA SİBİRYA 2 · 16 Ağustos 2026 · görev tahta M-0115
// Şartname: oturumlar/NOKTA-SIBIRYA-2.md
//
// ⚠️ Dosyayı girdi.py'ye BEN BAĞLAMIYORUM — koordinatör bağlar (şartname ④).
//
// ═══════════ YAZIM ÖNCESİ ÖLÇÜM (IS 0) ═══════════
// Taban 2527 nokta, girdi.yukle() ile (kendi ayrıştırıcım DEĞİL).
// Sibirya kutusu (50-73°K / 52-180°D): 77 nokta ZATEN VAR.
//   kur: VAR 19 · kur: YOK ama 1281'de SAHİPLİ 10 · sahipsiz 48
//   ve 48 sahipsizin 48'inde de `bos:` bayrağı var (bayraksız 0).
// ⇒ Bölge sanıldığından DOLU. Bu dosya "eksik olanı" yazar, hepsini değil.
//
// 🔴 VE ASIL ÜRÜNÜM BU DOSYA DEĞİL, ÖLÇÜMDÜ — açıkça yazıyorum:
//   `kur:` alanı HİÇ OLMAYAN ama 1281'de toprak boyayan 10 nokta buldum;
//   `Değişmez 5`in iki dalı da (5a `kur:` olmayana bakmıyor, 5b ilk dönemi
//   1381'den sonra olana bakıyor) bu sınıfı GÖRMÜYORDU. Koordinatör bunu
//   `Değişmez 5c` olarak koda çevirdi (tahta M-0119 · M-0121 · M-0122).
//
// ═══════════ TDV NE VERDİ, NE VERMEDİ ═══════════
// 🟢 `sibir-hanligi` (HTTP 200, gövdesi okundu) İKİ BAŞKENTİ adıyla verdi:
//    "Çimga-Tura ve Sibir şehirlerinin yanı sıra Sibir Hanlığı'nda yirmiden
//     fazla şehir mevcuttu (Kızıl-Tura, Karaçin, Taşatkan, Abalak,
//     Tarhankale vb.)"
//    "başşehrini Sibir (Tatarcası İsker 'eski kale') şehrine taşıması ile
//     hanlık Sibir Hanlığı olarak anılmaya başlandı"
//    kuruluş "1420'li yılların sonlarından itibaren" · Hacı Muhammed
//    yıkılış Yermak 1581 → başşehir Sibir düştü · "Sibirya'nın tamamen
//    zaptı ise 1593-1604 yıllarında tamamlandı"
//
// 🟢 Ve bu, veride ZATEN OLAN iki noktayı DOĞRULADI:
//    `Tümen (Çimgi-Tura)` ve `Tobolsk (İsker)` — ikisi de `kur:`sız ve
//    1281'de sahipli. Bu bir kusur DEĞİL: TDV onları Rus fethinden ÖNCE
//    var olan TATAR ŞEHİRLERİ olarak sayıyor. (Kuruluş yıllarını TDV
//    vermiyor, ÖLÇMEDİM.)
//
// 🔴 TDV KOORDİNAT VERMİYOR — ve beş addan yalnız İKİSİNİ yazabildim.
//    "Uydurma koordinat, eksik noktadan KÖTÜDÜR: eksik nokta bir boşluktur,
//     uydurma nokta bir YALANDIR ve denetim onu göremez." (kendi
//     şartnamemin cümlesi, NOKTA MENZİL'den)
//    ⇒ Karaçin · Taşatkan · Tarhankale YAZILMADI. Sebep aşağıda, her biri
//      için ayrı ayrı.
// =====================================================================

window.YERLESIMLER_EK31 = [

// ───────── SİBİR HANLIĞI'NIN ADI GEÇEN ŞEHİRLERİ ─────────

// ABALAK — TDV'nin saydığı beş şehirden biri, ve KONUMU TARTIŞMASIZ.
//   Bugünkü Abalak köyü (Абалак), Tobolsk'un ~20 km doğusunda İrtiş'in sağ
//   kıyısında; 1636'da kurulan Abalak Manastırı aynı yerdedir ve yer adı
//   kesintisiz taşınmıştır.
// ⚠️ KOORDİNAT KAYNAĞI AYRI BİR ŞEYDİR ve bunu gizlemiyorum: TDV yalnız
//   ADI veriyor. Koordinat, tarihî Abalak'ın bugünkü Abalak köyüyle
//   ÖZDEŞLEŞTİRİLMESİNDEN geliyor. Bu bir ÖZDEŞLEŞTİRME, ölçüm değil —
//   ama yer adı sürekli olduğu için düşük riskli.
// 🔴 DÖNEM SINIRLARI KÜNYEDEN ALINDI — ve ilk yazdığım hâli KENDİ
//   DENETİMİM ÇÜRÜTTÜ (yazmadan önce, teslimden önce):
//     yazdığım      1428 → 1598-01-01 → rusya 1923'e kadar
//     künye ömrü    sibir-hanligi 1430-01-01 → 1598-08-20
//                   rusya         1547-01-16 → 1917-03-15
//   ⇒ İKİ HAYALET vardı: hanlık künyesinden 2 yıl ÖNCE başlıyordu, ve
//     `rusya` künyesi 1917'de bittiği hâlde 1923'e kadar boyuyordu.
//   §3.5'in "hayalet devlet" sınıfı — kendi aletim yakaladı.
//
// 🟢 VE KÜNYE BENİM UYDURDUĞUMDAN İYİSİNİ VERDİ: `1598-08-20`.
//   Ben "gün bilinmiyor" diyip 1598-01-01 yazmıştım; künyede KESİN GÜN
//   duruyormuş. ⇒ Uydurulmuş yuvarlak tarih, var olan kesin tarihi
//   ÖRTÜYORDU. (`§11`: yuvarlak tarih yalnız yanlış değil, çelişkiyi de
//   saklar.)
//
// 1917 sonrası zincir de künyeden: rusya → rusya-gecici-hukumet
//   (1917-03-15) → sovyet-rusya (1917-11-07). Üçünün de rengi VAR.
// ⚠️ ÖLÇTÜM ve BİLDİRİYORUM: Sibirya kutusundaki mevcut noktalar bu zinciri
//   KULLANMIYOR — 1900 sonrası tek kayıt var ve o da `cin-cumhuriyeti`.
//   Yani komşularım 1917-1923'ü ya hiç ifade etmiyor ya da `rusya` ile
//   geçiyor. Bu benim dosyamın kusuru DEĞİL ama bir TUTARSIZLIK ve
//   koordinatöre bildirildi.
// ⚠️ 1598-08-20 ve 1917 günlerinin kronolojide karşılığını ÖLÇMEDİM —
//   Değişmez 2 `s:` sınırlarına bakmıyor, ama koordinatör isterse ölçerim.
// kaynak: TDV `sibir-hanligi` (ad ve hanlık çizgisi) — koordinat için
//   özdeşleştirme, kuruluş yılı bulunamadı
{ ad:"Abalak", tur:"kale", lat:58.129, lon:68.594, g:0, k:4,
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},
     {f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},
     {f:"1598-08-20",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[], v:[] },

// KIZIL-TURA — TDV'nin saydığı ikinci şehir.
// 🟡 ÖZDEŞLEŞTİRME DAHA ZAYIF: literatür Kızıl-Tura'yı İrtiş-İşim
//   kavşağındaki Ust-İşim ile özdeşleştirir, ama bunu TDV SÖYLEMİYOR ve
//   ben akademik kaynakta DOĞRULAYAMADIM. Yazıyorum çünkü konum
//   belirsizliği ~onlarca km, yüzlerce km değil — ve bölge bugün
//   noktasız. Ama kesinliği Abalak'tan DÜŞÜK, ve bunu kayda geçiyorum.
// kaynak: TDV `sibir-hanligi` (ad) — özdeşleştirme (Ust-İşim) DOĞRULANAMADI
{ ad:"Kızıl-Tura", tur:"kale", lat:57.700, lon:71.170, g:0, k:4,
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},
     {f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},
     {f:"1598-08-20",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[], v:[] },

// ═════════ 1281 KESİTİ — YAKUTİSTAN ve KAMÇATKA ═════════
//
// 🔴 ÖLÇÜM ÖNCE, NOKTA SONRA. Sorulan soru "kaç nokta var" DEĞİL:
//   "§2 gereği bu alan KİMİN peteğine emiliyor?" Bunun için 1281'de
//   SAHNEDE olan noktalar ayrıldı (kur:'u 1281'den sonra olan nokta o gün
//   sahnede DEĞİLDİR) ve 56-72°K / 112-176°D ızgarası tarandı:
//     1281'de sahnede: 2241 / 2527 nokta
//     500 km'den uzak hücre: 8 · EN KÖTÜSÜ 751 km
//
// 🔴 VE SEBEP TEK BİR ALANDA TOPLANIYOR — KAMÇATKA:
//     56°K 160°D → en yakın 1281 noktası "Koryak toprakları", 751 km
//     56°K 152°D → "Ohotsk", 642 km
//     56°K 168°D → "Koryak toprakları", 678 km
//   Çünkü Petropavlovsk-Kamçatskiy'in `kur:`ı 1740 — yani yarımadanın TEK
//   noktası 1281'de sahnede DEĞİL. Kamçatka o gün BOŞ ve komşusuna emiliyor.
//   📌 Bu, NOKTA SİBİRYA'nın kapattığı "Çukotka 2.106 km öteden emiliyor"
//     kusurunun KARDEŞİ — orada kimlik yanlıştı, burada nokta HİÇ YOK.
//
// ⚠️ BOŞLUĞUN CİNSİ — ve üçünde de aynı hüküm, aynı gerekçeyle:
//   Şartname üç kova veriyor: `kabile` · `devletsiz` · `veri-yok`.
//   Sınav (`§11`, NOKTA SİBİRYA): kaynak AÇIKÇA konuşuyorsa `devletsiz`,
//   SUSUYORSA `veri-yok`.
//   ⇒ TDV bu coğrafyayı KAPSAMIYOR (Sibirya kapsaması %75 ölçülmüştü ama
//     o Sibir Hanlığı/Altın Orda ekseninde; İtelmen · Yukagir · Çuvan
//     halkları için madde YOK). Akademik literatürü ise ARAMADIM.
//   ⇒ Bu yüzden üçü de **`veri-yok`** — ve bu "boş" demek DEĞİL,
//     "BAKILACAK" demek. `devletsiz` deseydim bir daha bakılmazdı ve
//     ölçmediğim bir şeyi ölçmüş gibi göstermiş olurdum.
//   📌 Farkı bir sonraki oturum için yazıyorum: Çukotka'ya bakılmayacak
//     (kaynak konuştu), BURAYA BAKILACAK.

{ ad:"Kamçatka (İtelmen toprakları)", tur:"bolge", lat:55.000, lon:158.500, g:0, k:0,
  bos:true, neden:"veri-yok — 1281'de yarımadada sahnede nokta YOK (Petropavlovsk kur:1740) ve §2 gereği 642-751 km öteden emiliyordu. İtelmen için TDV ARANDI (16 Ağu): madde YOK, yalnız Asya ve samanizm içinde geçiyor. Akademik literatür aranmadı.",
  s:[], d:[], v:[] },

{ ad:"Kolıma havzası (Yukagir toprakları)", tur:"bolge", lat:66.000, lon:152.000, g:0, k:0,
  bos:true, neden:"veri-yok — 64°K/152°D hücresi en yakın 1281 noktasına 555 km. Yukagir için TDV ARANDI (16 Ağu): madde YOK. Akademik literatür aranmadı.",
  s:[], d:[], v:[] },

{ ad:"Doğu Sibirya kıyısı (Çuvan-Yukagir)", tur:"bolge", lat:70.000, lon:161.000, g:0, k:0,
  bos:true, neden:"veri-yok — 68-72°K / 152-168°D hücreleri 507-709 km uzakta; kuzey kıyı şeridi 1281'de noktasızdı. Çuvan/Yukagir için TDV ARANDI: madde YOK.",
  s:[], d:[], v:[] },

// ───── İNCE TARAMANIN KALAN TEK GERÇEK KARA BOŞLUĞU ─────
//
// İlk tarama 4° ızgarayla yapılmıştı ve 54-60°K şeridini örneklemiyordu.
// 3° ızgarayla tekrarlandı; 17 kara hücresi 300 km'yi aşıyor ama yalnız
// ÜÇÜ 450 km'yi geçiyor, ve ikisi (72°K/150°D · 72°K/174°D) Doğu Sibirya
// Denizi'nde — Çukotka'nın kuzey kıyısı ~69-70°K'de biter.
// ⚠️ Bunu KABA bir kara sınıflandırıcıyla ayırdım (elle yazılmış kutular),
//   kara maskesiyle DEĞİL. Yani "deniz" hükmüm ÖLÇÜM değil ÇIKARIM.
//   Kara maskesiyle doğrulanmadı; yanlışsa iki nokta daha gerekir.
//
// ⇒ Geriye tek gerçek kara boşluğu kalıyor: 60°K / 156°D, 576 km.
//   Burası Kamçatka'nın kuzey boyun kısmı (Penjina havzası) — güneyde
//   İtelmen noktam 55°K'de, doğuda Koryak toprakları 62°K/166°D'de;
//   arada ~600 km'lik bir şerit noktasız kalıyordu.
// kaynak: bulunamadı — Penjina/Koryak havzası için TDV'de madde yok,
//   akademik literatür ARANMADI (İtelmen/Yukagir kayıtlarıyla aynı gerekçe)

{ ad:"Penjina havzası (kuzey Koryak)", tur:"bolge", lat:61.000, lon:156.500, g:0, k:0,
  bos:true, neden:"veri-yok — 60°K/156°D hücresi en yakın 1281 noktasına 576 km. Kamçatka boynu ile Koryak yaylası arasındaki şerit noktasızdı. Koryak için TDV ARANDI: madde YOK.",
  s:[], d:[], v:[] },

];

// ═══════════ YAZILMAYANLAR — üçü de gerekçesiyle ═══════════
//
// KARAÇİN     TDV adını veriyor. Literatürde Tobolsk yakınındaki "Karaçin
//             adası" ile ilişkilendirilir ama konumu ONLARCA KM belirsiz ve
//             Tobolsk/Abalak'a 3 km kuralını ihlal etme riski var.
//             ⇒ kaynak: bulunamadı. YAZILMADI.
// TAŞATKAN    TDV adını veriyor, başka hiçbir şey vermiyor. Modern
//             karşılığını bulamadım. ⇒ kaynak: bulunamadı. YAZILMADI.
// TARHANKALE  Aynı durum; "Tarhan kalesi" genel bir ad ve Sibirya'da birden
//             çok yerde geçiyor. ⇒ kaynak: bulunamadı. YAZILMADI.
//
// 📌 Üçü de "araştırılmadı" DEĞİL, "arandı, konumu bulunamadı" —
//    ve bu bir SONUÇTUR. Bir sonraki oturum bunları sıfırdan aramasın;
//    eksik olan tarih değil KOORDİNAT.
//
// ═══════════ TDV `baraba` — ÜÇ AD DAHA, ve BİR DOĞRULAMA ═══════════
// (HTTP 200, gövdesi okundu · 16 Ağustos)
//
// 🟢 ÖNCE BİR DOĞRULAMA — İsker özdeşleştirmem tuttu:
//    "Bek-Kondu Şibanlıları veya Tura Özbek Hanlığı'nın başşehri…
//     İskir veya Esker şehri idi."
//    ⇒ Veride `Tobolsk (İsker)` diye duran nokta, bağımsız bir İKİNCİ
//      TDV maddesinden doğrulandı. `sibir-hanligi` "İsker" diyordu,
//      `baraba` "İskir veya Esker" diyor — aynı yer.
//
// 🔴 ÜÇ YENİ AD, ve üçü de veride YOK:
//      Samar · Şarkel · Kondu-Tura
//    ⚠️ Üçünün de KOORDİNATI TDV'de YOK ve akademik kaynakta
//      arayamadım (elimde arama motoru yok, yalnız doğrudan URL çekebiliyorum).
//    ⚠️ Ve `Şarkel` ADI TEHLİKELİ: Hazarların Don üzerindeki ünlü Sarkel'i
//      ile aynı ad. Karıştırılırsa nokta 3.000 km batıya düşer — `§11`in
//      "Aşkale → Başkale" tuzağının Sibirya sürümü. Konumu bulan, ÖNCE
//      hangi Şarkel olduğunu ayırsın.
//    ⇒ ÜÇÜ DE YAZILMADI. `kaynak: TDV baraba (ad)` — koordinat bulunamadı.
//
// 🟢 VE BİR TARİH: "Baraba 1579'dan itibaren Yermak idaresindeki Rus
//    kazaklarının yağmasına uğradı." ⇒ Bölgenin Rus baskısına açılışı
//    1579; `sibir-hanligi` künyesinin sonu (1598-08-20) ile arasında
//    19 yıllık bir geçiş var. Bu bir ÖLÇÜM değil, bir NOT — dönem
//    yazacak olan bunu bilsin.
//
// 📌 TOPLAM: TDV bu bölge için sekiz yerleşim adı verdi
//    (Kızıl-Tura · Karaçin · Taşatkan · Abalak · Tarhankale · Samar ·
//     Şarkel · Kondu-Tura). İKİSİ yazıldı, ALTISI koordinatsız kaldı.
//    Eksik olan ad değil, KOORDİNAT — ve bu artık ölçülmüş bir borç.

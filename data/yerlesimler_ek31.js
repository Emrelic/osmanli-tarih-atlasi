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

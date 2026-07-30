// ============================================================================
// DERİNLEŞTİRME PARTİSİ 10 — BALKAN EKSENİ (Oturum 11)
// ============================================================================
// Oturum 11'in kronoloji dosyası. Kapsam: `KOORDINASYON.md §4`'te Oturum 11'e
// verilen Balkan bloğu — hatalar 13'ün üç maddesi (A bloğu) ve hatalar 11'in
// 1859-1913 Balkan maddeleri (B bloğu).
//
// ⚠️ BU DOSYA HENÜZ YAYINDA DEĞİL. İki satır Oturum 0'ın (merkez) dosyalarında:
//     index.html : <script src="data/olaylar_ek10.js?v=rNN"></script>
//     js/app.js  : .concat(window.OLAYLAR_EK10 || [])
//   İkisi de eklenmeden bu dosya yüklenir ama HİÇ KULLANILMAZ — `olaylar_ek8.js`
//   bu yüzden dört commit boyunca 404 vermişti (`OGRENILENLER.md §4`).
//   Doğrulama: `py arac/denetle_yayin.py`.
//
// ---------------------------------------------------------------------------
// A BLOĞU — hatalar 13, üç madde
// ---------------------------------------------------------------------------
// md.2  Varna etiketi   → BU DOSYADA MADDE YOK. Sebep ölçüldü ve veri/arayüz
//                          sorunu çıktı; kronoloji maddesi zaten var (1391-01-01
//                          "Karadeniz kıyısında Varna'nın alınışı" + 1444-11
//                          "Varna Zaferi"). Ölçüm `oturumlar/OTURUM-11-BALKAN.md §1`.
// md.14 İyon adaları     → 1479-08-01 maddesi (aşağıda A-1)
// md.15 Karadağ 1482     → 1482-01-01 maddesi (aşağıda A-2)
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — hangi madde gün, hangisi ay/yıl
// ---------------------------------------------------------------------------
// Hiçbir maddeye kaynakta olmayan gün verilmedi (`CLAUDE.md §4`, `OGRENILENLER §8`).
//   1479-08-01 → gerçek hassasiyet AY. TDV yalnız yılı veriyor ("iki yıl sonra",
//                yani 1477 evliliğinden sonra = 1479). Ağustos, harekâtın standart
//                literatürdeki dönemlendirmesinden (Ağustos-Kasım 1479 Kefalonya
//                harekâtı); `gun:` alanında "Ağustos 1479" yazıyor.
//   1482-01-01 → gerçek hassasiyet YIL. `gun:` alanında "1482" yazıyor.
//
// ---------------------------------------------------------------------------
// SLUG DOĞRULAMASI — hepsi `<title>` ile sınandı (2026-07-30)
// ---------------------------------------------------------------------------
//   CANLI : gedik-ahmed-pasa · karadag · ayamavra · varna · varna-savasi · iskodra
//   ÖLÜ   : kefalonya  ← `<title>` = "Arama - TDV İslâm Ansiklopedisi".
//           Kefalonya'nın TDV'de müstakil maddesi YOKTUR; ada yalnız `ayamavra`
//           ve `gedik-ahmed-pasa` maddelerinin içinde geçer. Bu yüzden A-1'in
//           kaynağı `gedik-ahmed-pasa` — dört adayı da tek cümlede sayan madde odur.
//   TDV'de KARŞILIĞI YOK : Crnojeviç. Arama "madde başlıklarında sonuç
//           bulunamadı" diyor; `iskodra` maddesinde de Crnojeviç/Cetinje/Zeta
//           geçmiyor. A-2'nin 1482 yılı bu yüzden TDV'ye DAYANMIYOR — maddenin
//           metninde bu açıkça yazılı. Ayrıntı: `OTURUM-11-BALKAN.md §3`.
// ============================================================================

window.OLAYLAR_EK10 = [

// ---------------------------------------------------------------------------
// A-1) 1479 İYON ADALARI — antlaşma ile fethin ayrılması
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 13 md.14): "1479 arnavutluk ve İşkodra ile birlikte iyonya
// adalarıda ele geçiriliyor galiba bunu madde olarak yazmalısın yada madde
// içinde adaların isimlerini belirtmelisin."
//
// Haklı — ve altında bir tarih hatası var. Veride dört ada da 1479-01-25'te,
// yani İstanbul Antlaşması gününde Osmanlı'ya geçiyor. Antlaşma Venedik'le
// yapıldı ve İşkodra ile Arnavutluk kıyısını konu ediyordu; adalar ise
// VENEDİK'İN DEĞİL, Tocco ailesinin elindeydi ve aynı yılın YAZINDA ayrı bir
// donanma harekâtıyla alındı. İki ayrı olay tek güne bindirilmiş.
// Yerleşim tarihi düzeltmesi `yerlesimler.js`'e ait → `OTURUM-11-BALKAN.md §2`.

{ t:"1479-08-01", k:"fetih", etiket:["toprak-kazanc","denizcilik"],
  b:"İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra, Kefalonya, Zaklise, İthaki",
  gun:"Ağustos 1479", yer:"Ayamavra (Lefkada), Kefalonya, Zaklise (Zakynthos), İthaki — İyon Denizi",
  kisiler:"Fatih Sultan Mehmed, Gedik Ahmed Paşa, Leonardo III Tocco",
  d:"Aynı yılın ocak ayında Venedik'le imzalanan İstanbul Antlaşması İşkodra ve Arnavutluk kıyısını Osmanlı'da bırakmıştı; İyon adaları ise Venedik'in değil, Kefalonya-Zaklise kontluğunu elinde tutan Tocco ailesinin idaresindeydi ve ayrı bir harekâtla alındı. TDV'nin Ayamavra maddesine göre son dük Leonardo Tocco önce Fâtih'in akrabası Milica Brankoviç ile evlenerek sadakatini korumuş, 1464'te eşi ölünce 1477'de Napoli hanedanından Francesca Marzano ile evlenerek padişahı gücendirmişti. İki yıl sonra Avlonya beyi Gedik Ahmed Paşa kumandasındaki donanma Ayamavra'yı güneydeki Kefalonya ile birlikte ele geçirdi; Leonardo ve Francesca İtalya'ya kaçtı. Gedik Ahmed Paşa maddesi aynı harekâtta Zaklise'nin (Zanta) de alındığını kaydeder; Kefalonya kontluğuna bağlı İthaki de bu devirle Osmanlı idaresine girdi. Böylece Adriyatik ağzından Mora'ya uzanan deniz yolu bütünüyle denetim altına alındı. Adalardan Zaklise üç yıl sonra Venedik'e bırakılacak, Kefalonya ile İthaki 1500'de kaybedilecek, yalnız Ayamavra iki yüz yıl Osmanlı'da kalacaktı.",
  kaynak:"gedik-ahmed-pasa" },

// ---------------------------------------------------------------------------
// A-2) 1482 KARADAĞ — haritada beliren ama kronolojide adı geçmeyen kırılma
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 13 md.15): "Zakintos venediğe bırakılır iken karadağda ele
// geçiriliyor galiba ama kronolojide zikredilmiyor gerekirse ayrı madde yapılmalı."
//
// Ölçüldü, kullanıcı haklı ve sebebi tam olarak `CLAUDE.md §3 Değişmez 2`'nin
// tarif ettiği hata: `yerlesimler.js` Cetinje kaydı `kur:"1482-01-01"` ve
// `v:[{f:"1482-01-01", …, k:"Crnojeviç Zetası (Osmanlı tâbii)"}]` taşıyor.
// Yani 1 Ocak 1482'de haritada Karadağ'da yeni bir AÇIK TONLU (tâbi) gövde
// beliriyor. O gün kronolojideki tek madde Zaklise'nin Venedik'e bırakılması —
// değişim alakasız bir maddenin altında görünüyor.

{ t:"1482-01-01", k:"vassal", etiket:["toprak-kazanc","siyaset"],
  b:"Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merkez oluşu",
  gun:"1482", yer:"Cetinje, Lovçen eteği, Karadağ",
  kisiler:"II. Bayezid, İvan Crnojeviç",
  d:"İşkodra'nın 1479'da Osmanlı'da kalmasıyla arka bahçesindeki Zeta dağlık bölgesi de imparatorluğun sınırları içine düştü. Bölgeyi elinde tutan Crnojeviç ailesi, Fâtih'in ölümünden sonra tahta çıkan II. Bayezid'in hükümdarlığını tanıyıp haraca bağlanarak iç işlerinde serbest kaldı; İvan Crnojeviç merkezini ovadan çekip Lovçen dağının eteğindeki Cetinje'ye taşıdı ve şehri kurdu. İki yıl sonra buraya yaptırdığı manastır bölgenin dinî merkezi oldu. Böylece Karadağ, haritada doğrudan Osmanlı toprağı olarak değil, açık tonda bir tâbi bölge olarak belirir. TDV'nin Karadağ maddesi hanedanı ve Cetinje piskoposluğunu anar, hâkimiyetin 1514'te İskender Bey (Crnojeviç soyundan, Osmanlı sarayında yetişmiş) eliyle ayrı bir sancağa dönüştüğünü yazar; 1482 yılı ise TDV'de geçmez, Karadağ tarih yazımının verdiği tarihtir. Coğrafyanın sertliği yüzünden buradaki idare hiçbir zaman ovalardaki gibi sıkı işlemedi.",
  kaynak:"karadag" },

];

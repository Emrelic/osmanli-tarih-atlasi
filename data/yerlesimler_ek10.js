// =====================================================================
// SİBİR HANLIĞI — hanlığın KENDİ coğrafyası  ·  4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026
// =====================================================================
// 🔴 BU DOSYA BAĞLANAMAZ — `sibir-hanligi` kimliği `arac/renkler.py`
//    BOYALAR'da YOK. Bağlanırsa motor uyarı basar ve dört peteğin
//    1430-1598 arası RENKSİZ kalır: yani hanlığı göstermek için yazılan
//    dosya, hanlığın yerinde DELİK açar.
//    ⇒ Engel tek satır: RENK oturumu `sibir-hanligi` renginivermeli.
//
// ── NİÇİN AYRI DOSYA ────────────────────────────────────────────────
// `_ek9`daki on iki nokta bugün bağlanabiliyor çünkü kimlikleri hazır.
// Bu dördü bağlanamıyor. İkisini tek dosyaya koysaydım, hazır olan on iki
// nokta hazır olmayan bir rengi beklerdi. **Dosya = tek bağlama kararı.**
//
// ── 🔴 NİÇİN ÖDÜNÇ VERİLMEDİ ────────────────────────────────────────
// `altinorda` kimliğinin BOYALAR'daki etiketi "Altın Orda **ve ardılları**"
// ve Sibir Hanlığı gerçekten Altın Orda ardılıdır — yani ödünç yazmak
// teknik olarak savunulabilirdi. YAZILMADI, çünkü ödüncün bedeli 168 yıl:
// 1430-1598 arası Batı Sibirya, Kazan ve Kırım kendi renklerindeyken
// Altın Orda renginde görünürdü. `_ek6`da Kalmuk için verilen kararın
// aynısı: kimlik gelene kadar BEKLET, yanlış renkle doldurma.
//
// ── ZİNCİR — TDV `sibir-hanligi` ve `kucum-han` (İKİSİ DE CANLI) ────
//   1281-01-01 → 1430-01-01  altinorda
//   1430-01-01 → 1598-08-20  sibir-hanligi
//   1598-08-20 → 1923-10-29  rusya
//
// ① 1430 — TDV: "Hanlığın kurucusu olarak Şeybânî Hacı Muhammed
//   (1420-1430) ve onun oğlu Mahmutek (Mahmud, 1430-?) kabul edilmektedir."
//   Gün yok, yıl var ⇒ `YYYY-01-01` (ev kuralı).
//
// ② 1598-08-20 — TDV `kucum-han`: "4 Ağustos 1598'de Tara'dan başlayan
//   askerî bir harekâtla Küçüm bugünkü Novasibirsk yakınlarında kuşatıldı.
//   **20 Ağustos'ta** çar birliklerine karşı giriştiği bu son savaşta da
//   mağlûp olan Küçüm… kaçmayı başardı." Ondan sonra kaynaklarda Küçüm'le
//   ilgili bilgi yok.
//   ⚠️ NİÇİN 1581 DEĞİL: Yermak 1581-10-26'da İsker'e girdi ama TDV aynı
//     maddede 1584'te Küçüm'ün Yermak'ı ÖLDÜRDÜĞÜNÜ ve Rus valisinin
//     çekildiğini yazıyor. 1581 yazsaydım hanlığı on yedi yıl erken
//     bitirir, üstelik geri alınmış bir şehri geri alınmamış gösterirdim.
//   ⚠️ NİÇİN 1587 (Tobolsk'un kuruluşu) DEĞİL: TDV yıl veriyor, gün
//     vermiyor; 1598-08-20 ise GÜN olarak yazılı. Gün varken yıla inmek,
//     `CLAUDE.md §8`in "gün yaz" kuralını boşuna gevşetmek olurdu.
//   ✅ Ve 1598-08-20 `sibir-hanligi`→`rusya` geçişi `s:`→`s:` olduğu için
//     KIRILMA ÜRETMİYOR — dört kaydın da Değişmez 2 borcu SIFIR.
//
// ── COĞRAFYA — TDV'nin kendi tarifi, tahmin değil ───────────────────
// `sibir-hanligi`: "Hanlık Tura, Tobul ve İşim nehirleri arasındaki
// toprakların yanı sıra İrtiş nehri civarı ile Baraba bozkırlarını da
// kapsamıştı." Aşağıdaki dört nokta tam bu dört unsuru temsil ediyor:
//   Tümen (Çimgi-Tura) = Tura · Tobolsk (İsker) = Tobol · Tara = İrtiş
//   Baraba bozkırı = Baraba.
// ⇒ Hanlığın peteği bu dörtlünün dışına taşmaz; `_ek8`/`_ek9`daki kuzey
//   ve doğu noktaları onu kendi sınırında tutar. Noktasız bırakılsaydı
//   hanlık ya hiç görünmez ya da bütün Sibirya'yı kaplardı.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 199,5 km (Tümen ↔ Tobolsk)
// renk  altinorda ✓ · rusya ✓ · **sibir-hanligi ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK10 = [

// Çimgi-Tura — hanlığın ilk merkezi, "Tümen Hanlığı" adı buradan gelir.
// TDV `kucum-han`: "Merkezi Tura (bugün Tümen) şehri olan Sibir Hanlığı".
// Ruslar 1586'da bugünkü Tümen'i kurdu (TDV, yıl).
{ ad:"Tümen (Çimgi-Tura)", tur:"sehir", lat:57.1530, lon:65.5343, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// İsker/Sibir — hanlığa adını veren başkent, bugünkü Tobolsk'un yakını.
// TDV: "Muhammed Tayboğa'nın başşehrini Sibir (Tatarcası İsker 'eski kale')
// şehrine taşıması ile hanlık Sibir Hanlığı olarak anılmaya başlandı."
{ ad:"Tobolsk (İsker)", tur:"sehir", lat:58.1990, lon:68.2560, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// İrtiş yukarısı. TDV `kucum-han`: "İlk olarak İrtiş'in yukarısında, yani
// Küçüm'e daha yakın bir yerde Tara şehrini kurdular" (1594).
// 🔴 `Tara` BU DOSYADAN CIKARILDI (7 Agustos 2026, koordinator).
//    Ayni ad `_ek18`de de vardi (0,4 km) ve girdi.py'nin ad benzersizlik
//    kontrolu baglamayi DURDURDU -- sessiz veri kaybi olmadi.
//    _ek18'inki KALDI: Tara 1594'te Rus kalesi olarak KURULDU; buradaki
//    kayit ona 1281'den baslayan 313 yillik bir gecmis veriyordu.
//    Ayrica _ek10'un 1598-08-20'si Kucum Han'in son yenilgisi, yani
//    HANLIGIN sonu -- kalenin kurulusu degil (§3.5.1: devletin yikilisi
//    o yerin fethi DEGILDIR).
//    ⚠️ Sibir Hanligi zinciri Tumen · Tobolsk · Baraba bozkiri'nda
//      duruyor; kaybolan bilgi YOK.
// TDV `kucum-han`: "17 Mart 1595'te Baraba çölüne asker göndererek Küçüm'e
// tâbi o bölgedeki toprakları da işgal ettiler."
// ⚠️ 1595-03-17 GÜN olarak elimde ama KULLANILMADI: o gün Baraba'nın işgali,
//    hanlığın sonu değil. Dört kaydın da tek bir bitiş günü olması (1598-08-20)
//    kasıtlı — bölgesel işgal tarihlerini ayrı ayrı yazsaydım hanlık parça
//    parça erirdi ve her parça ayrı bir kırılma isterdi.
{ ad:"Baraba bozkırı", tur:"bolge", lat:55.2000, lon:78.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

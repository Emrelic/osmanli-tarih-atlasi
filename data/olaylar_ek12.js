// ============================================================================
// DERİNLEŞTİRME PARTİSİ 12 — CERBE 1560 (PETEK/NOKTA oturumu, 3 Ağustos 2026)
// ============================================================================
// ⚠️ HENÜZ YAYINA BAĞLI DEĞİL. Bağlamak için İKİ satır gerekiyor ve ikisi de
//    benim dosyam değil:
//      index.html   <script src="data/olaylar_ek12.js?v=rNN"></script>
//      js/app.js    .concat(window.OLAYLAR_EK12 || [])
//    ⇒ Oturum 0 / ARAYÜZ bağlar. Bağlanmadan madde SAYILMAZ; `olaylar_ek9`
//      vakası (dosya yazıldı, yayına bağlanmadı) bu yüzden yaşandı.
//
// ── NİÇİN VAR ───────────────────────────────────────────────────────────────
// Kendi ölçümümün kapanışı. `yerlesimler.js`teki Cerbe kaydı şöyle:
//     s:[{1281-01-01 → 1560-05-14, hafsi}]   d:[{1560-05-14 → 1705-07-17}]
// İki kusur ölçüldü:
//   ① İSPANYOL DÖNEMİ HİÇ YOK — ada 1560'ta Haçlı donanmasının elindeydi.
//   ② FETİH GÜNÜ YANLIŞ GÜNE BAĞLI — 1560-05-14, TDV'ye göre **deniz
//      zaferinin** günüdür; kale iki ay sonra, **30 Temmuz 1560**'ta düştü.
//
// ②'yi düzeltmek `1560-07-30` kırılması açar ve o güne madde YOKTU: en yakın
// madde 1560-05-14 "Cerbe Deniz Zaferi", **77 gün** uzakta — Değişmez 2 eşiği
// 30 gün. Yani tarihi düzeltmek AÇIK KIRILMA doğururdu.
// ⇒ Bu dosya o borcu ÖNCEDEN kapatıyor: madde önce, tarih sonra.
//    (Mankup'ta da aynı desen kuruldu: `yerlesimler_ek2.js`, 1475-12-01.)
//
// ── 🔴 OTURUM 0'A: CERBE KAYDI `yerlesimler_ek4.js`e YAZILAMAZ ─────────────
// Koordinatör "ya sen yerlesimler_ek4.js'e düzeltilmiş kaydı yazarsın" dedi.
// ÖLÇTÜM: **BU MÜMKÜN DEĞİL.** `arac/girdi.py` `yukle()` aynı adı iki dosyada
// görünce ValueError fırlatıyor:
//     if y["ad"] in nereden: raise ValueError("AD ÇAKIŞMASI: …")
// "Cerbe (Djerba)" zaten `yerlesimler.js`te (bağlı) olduğu için ikinci bir
// kayıt yükleyiciyi ÇÖKERTİR — üretim başlamadan düşer.
// ⇒ Düzeltme YALNIZCA `yerlesimler.js` içinde, yerinde yapılabilir.
//   Önerilen son hâl (madde bağlandıktan SONRA):
//     s:[{1281-01-01 → 1560-03-01, hafsi},
//        {1560-03-01 → 1560-07-30, ispanya},
//        {1881-05-12 → 1923-10-29, fransa}]
//     d:[{1560-07-30 → 1705-07-17, y:"kusatma"}]
//     v:[{1705-07-17 → 1881-05-12, k:"Tunus Ocaklığı (Hüseynîler)"}]
//   ⚠️ `1560-03-01` bir YER TUTUCUDUR (aşağıda A-1'in gerekçesi). s:→s:
//     geçişi olduğu için kırılma üretmez; yanlış olsa bile Değişmez 2'yi
//     etkilemez. `d:` başlangıcı ise TDV'nin verdiği KESİN gündür.
//   ⚠️ `y:"savas"` → `y:"kusatma"` olmalı: TDV "iki ay kadar süren
//     kuşatmadan sonra" diyor, deniz muharebesi ayrı olaydır.
// ============================================================================

window.OLAYLAR_EK12 = [

// ---------------------------------------------------------------------------
// A-1 — Haçlı donanmasının Cerbe'yi işgali
// ---------------------------------------------------------------------------
// ⚠️ GÜN UYDURULMADI. TDV `cerbe` yalnız şunu veriyor: "Fırtınalar ve
// bulaşıcı hastalıklar yüzünden güç belâ **1560 yılı başlarında** Cerbe
// önlerine gelen Haçlı donanması". Ay ve gün kaynakta YOK.
// ⇒ `t:` ev kuralına göre yer tutucu (`YYYY-01-01`), gerçek belirsizlik
//   `gun:` alanında AÇIKÇA yazılı — `olaylar_ek11.js`in Bağdat 1401
//   maddesinde kurulan desenin aynısı.
// 📌 Bu madde Değişmez 2 için GEREKLİ DEĞİL (İspanyol dönemi s:→s: geçişi,
//   kırılma üretmez); kronolojinin kendisi eksik olduğu için yazıldı.
//   Ve 1559-12 / 1560-02 aralığında başka kırılma bulunmadığı ölçüldü,
//   yani bu madde var olan bir boşluğu YANLIŞLIKLA da kapatmıyor.
{ t:"1560-01-01", k:"savas", etiket:["savas"],
  b:"Haçlı donanması Cerbe'yi işgal etti — Turgut Paşa'nın üssü elden çıktı",
  gun:"1560 başları (TDV: ay ve gün kaynakta yok)", yer:"Cerbe (Djerba), Trablusgarp",
  kisiler:"Turgut Paşa, Piyâle Paşa",
  d:"İspanya, Papalık, Malta, Ceneviz ve Floransa gemilerinden kurulu Haçlı donanması, Turgut Reis'in 1551'den beri akın üssü olarak kullandığı Cerbe'yi hedef aldı. Fırtınalar ve salgın yüzünden ada önlerine ancak 1560 yılı başlarında ulaşabildi ve adaya çıkıp bir kale inşa etti. İşgal uzun sürmedi: Piyâle Paşa'nın donanması aynı yılın mayısında geldi ve ada beş ay içinde geri alındı. Bu sefer, Preveze'den sonra Akdeniz'de Osmanlı üstünlüğünü pekiştiren ikinci büyük deniz harekâtının başlangıcıdır.",
  kaynak:"cerbe", duygu:["⚔️","😔"] },

// ---------------------------------------------------------------------------
// A-2 — Cerbe kalesinin düşüşü  🔴 ASIL BORÇ KAPATAN MADDE
// ---------------------------------------------------------------------------
// TDV `cerbe`: deniz muharebesi **14 Mayıs 1560**, kale ise "iki ay kadar
// süren kuşatmadan" sonra **"30 Temmuz 1560 günü"** alındı. İki ayrı olay,
// iki ayrı gün — atlas ikisini tek güne (14 Mayıs) bindirmişti.
// ⇒ Bu madde bağlandıktan sonra Cerbe kaydının `d:` başlangıcı
//   1560-05-14'ten 1560-07-30'a çekilebilir; kırılma bu maddeye basar.
{ t:"1560-07-30", k:"fetih", etiket:["toprak-kazanc"],
  b:"Cerbe kalesinin düşüşü — adanın Osmanlı idaresine geçişi",
  gun:"30 Temmuz 1560", yer:"Cerbe (Djerba)", yer_id:"Cerbe (Djerba)",
  kisiler:"Piyâle Paşa, Turgut Paşa",
  d:"Piyâle Paşa'nın 14 Mayıs 1560'taki deniz zaferinden sonra Haçlı kuvvetleri adada inşa ettikleri kaleye kapandı; Trablusgarp beylerbeyi Turgut Paşa'nın kuvvetleri karadan kuşattı. İki ay süren muhasara 30 Temmuz 1560'ta kalenin düşmesiyle bitti ve ada Trablusgarp beylerbeyiliğine bağlandı. Deniz zaferi ile kalenin fethi arasında yetmiş yedi gün vardır; haritada toprak değişimi ikincisine bağlanmalıdır, çünkü ada 14 Mayıs'ta değil 30 Temmuz'da fiilen el değiştirmiştir.",
  kaynak:"cerbe", duygu:["🎉","😔"] },

];

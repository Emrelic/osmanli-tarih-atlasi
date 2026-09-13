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
//   ⚠️ `1560-03-01` bir YER TUTUCUYDU — 🟢 13 Eylül 2026: TDV `piyale-pasa`
//     GÜNÜ veriyor (12 Mart 1560) ⇒ önerilen değer `1560-03-12` (KITA 14).
//     s:→s: geçişi olduğu için kırılma üretmez; Değişmez 2'yi etkilemez.
//     `d:` başlangıcı ise TDV'nin verdiği KESİN gündür.
//   ⚠️ `y:"savas"` → `y:"kusatma"` olmalı: TDV "iki ay kadar süren
//     kuşatmadan sonra" diyor, deniz muharebesi ayrı olaydır.
// ============================================================================

window.OLAYLAR_EK12 = [

// ---------------------------------------------------------------------------
// A-1 — Haçlı donanmasının Cerbe'yi işgali
// ---------------------------------------------------------------------------
// 🔴 GÜN BULUNDU (KITA 14, 13 Eylül 2026 — KITA 20 savaş pilotu bulgusu):
// TDV `cerbe` yalnız "1560 yılı başlarında" diyor; ama TDV `piyale-pasa`
// GÜNÜ veriyor: "İspanya yönetimindeki müttefik hıristiyan donanması
// 14 Cemâziyelâhir 967'de (12 Mart 1560) Cerbe adasını işgal etti."
// ⇒ `t:` yer tutucu 1560-01-01'den 1560-03-12'ye çekildi. Önceki "ay ve gün
//   kaynakta yok" hükmü tek maddeye (cerbe) bakmıştı.
// 📌 Bu madde Değişmez 2 için GEREKLİ DEĞİL (İspanyol dönemi s:→s: geçişi,
//   kırılma üretmez). 1560-01-01 ve 1560-03-12'nin ±30 gün penceresinde
//   kırılma YOK (ARAC-KITA14-PENCERE-0913.py ile ölçüldü) — taşıma hiçbir
//   kırılmayı açmıyor, yanlışlıkla da kapatmıyor.
{ t:"1560-03-12", k:"savas", etiket:["savas"],
  b:"Haçlı donanması Cerbe'yi işgal etti — Turgut Paşa'nın üssü elden çıktı",
  gun:"12 Mart 1560 (14 Cemâziyelâhir 967)", yer:"Cerbe (Djerba), Trablusgarp", yer_id:"Cerbe (Djerba)",
  kisiler:"Turgut Paşa, Piyâle Paşa",
  d:"İspanya, Papalık, Malta, Ceneviz ve Floransa gemilerinden kurulu Haçlı donanması, Turgut Reis'in 1551'den beri akın üssü olarak kullandığı Cerbe'yi hedef aldı. Fırtınalar ve salgın yüzünden ada önlerine ancak 1560 yılı başlarında ulaşabildi; 12 Mart 1560'ta adayı işgal edip bir kale inşa etti. Haberi alan Piyâle Paşa 28 Mart'ta 120 kadırgalık donanmasıyla İstanbul'dan yola çıktı. İşgal uzun sürmedi: Osmanlı donanması mayısta Cerbe önünde müttefikleri yendi, kale de temmuz sonunda geri alındı. Bu sefer, Preveze'den sonra Akdeniz'de Osmanlı üstünlüğünü pekiştiren ikinci büyük deniz harekâtının başlangıcıdır.",
  kaynak:"cerbe + piyale-pasa — TDV piyale-pasa birebir: 'İspanya yönetimindeki müttefik hıristiyan donanması 14 Cemâziyelâhir 967’de (12 Mart 1560) Cerbe adasını işgal etti. Bunun üzerine Piyâle Paşa, 120 kadırgadan oluşan donanmasıyla 1 Receb 967’de (28 Mart 1560) İstanbul’dan yola çıktı.' · TDV cerbe: '1560 yılı başlarında' (gün vermiyor). · Düzeltme (KITA 14, 13 Eylül 2026): t: 1560-01-01 → 1560-03-12; önceki metindeki 'beş ay içinde' ifadesi çıkarıldı (işgal 12 Mart, kale 30 Temmuz).", duygu:["⚔️","😔"] },

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

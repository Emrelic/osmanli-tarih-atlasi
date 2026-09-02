// =====================================================================
// OLAYLAR SH110 — SONNET HAZIR KITA 110, 2 Eylül 2026 gecesi
// B5 ÖDÜNÇ TARİH TRİYAJI'nın çıkardığı bir madde borcu.
// =====================================================================
// `data/olaylar_ek3.js:31`de "Niş ve Vidin'in kaybı" adlı madde
// t:"1689-09-24" taşıyor. Ölçüldü (TDV `nis` maddesi, birebir alıntı):
//   "24 Eylül 1688'de Niş, Margrave Ludwig von Baden'in birlikleri
//    tarafından ele geçirildi."
// ⇒ Niş'in gerçek düşüş tarihi 1688-09-24 — mevcut madde BİR YIL YANLIŞ
// ve `data/yerlesimler.js`teki Niş kaydı da aynı (yanlış) yılı taşıyor.
//
// Bu madde Niş için AYRI ve DOĞRU tarihli bir kayıt açıyor. Vidin'in
// kendi tarihi (TDV: "1689 Ekiminde... Vidin'i savaşmadan ele geçirdi")
// AYRI bir kusur (yıl doğru, ay yanlış) — o burada YAZILMADI, çünkü
// mevcut 1689-09-24 maddesi Vidin'in yeni tarihine (1689-10-01) hâlâ
// ±30 gün içinde kalıyor (7 gün fark), Değişmez 2'yi bugün İHLAL ETMİYOR.
// Vidin'in dönem düzeltmesi `data/yer_yama_sh110.js`te, YENİ MADDE
// GEREKTİRMEDEN yapıldı.
//
// ⚠️ ESKİ MADDE (olaylar_ek3.js:31) bu yeni maddeyle BİRLİKTE artık
// yalnızca Vidin'i doğru anlatıyor ("Niş" ifadesi orada fazlalık hâline
// geldi) — o dosya benim değil, düzeltmesi/yeniden yazımı KOORDİNATÖRÜN
// ya da kronoloji sahibinin kararı. Ben yalnız YENİ, doğru maddeyi
// ekliyorum; ESKİYİ silmiyorum/değiştirmiyorum.
//
// DEĞİŞMEZ 2 SINAVI: bu maddenin kendisi bir kırılma günü DEĞİL, bir
// kırılmayı (yerlesimler.js Niş kaydının 1688-09-24'e taşınan ucu)
// KARŞILAYAN madde — yani önce bu, sonra dönem (koordinatörün sırası).
// =====================================================================

window.OLAYLAR_SH110 = [

{ t:"1688-09-24", k:"kayip", etiket:["toprak-kayip","savas"],
  b:"Niş'in kaybı — Ludwig von Baden'in ilerleyişi",
  gun:"24 Eylül 1688", yer:"Niş", yer_id:"Niş",
  kisiler:"Ludwig von Baden (Baden Markgrafı)",
  d:"Belgrad'ın Eylül 1688'deki kaybından haftalar sonra Niş de Baden "
   +"Markgrafı Ludwig von Baden'in birlikleri karşısında düştü; "
   +"Habsburg ilerleyişi Sofya yoluna dayandı. Şehir ancak Köprülüzâde "
   +"Fâzıl Mustafa Paşa'nın 1690 seferiyle, üç haftalık bir kuşatmanın "
   +"ardından geri alınabildi.",
  kaynak:"nis", duygu:["😔"] },

];

// =====================================================================
// YER YAMA SH110 — SONNET HAZIR KITA 110, 2 Eylül 2026 gecesi
// B5 ÖDÜNÇ TARİH TRİYAJI — Niş/Vidin kümesinin çözümü (tahta M-2047).
// Uygulayıcı: arac/_sahiplik_uygula.py (koordinatör koşturacak).
// =====================================================================
// Küme "1689-09-24 [avusturya] Niş/Vidin/Kragujevac/Çaçak/Şehirköy" TEK
// bir ödünç tarih DEĞİL, DÖRT AYRI kusurun aynı güne yığılmasıydı —
// ölçüldü, dördü ayrı ayrı ele alınıyor:
//
//   NİŞ        1688-09-24   YIL hatası — TDV birebir alıntı: "24 Eylül
//              1688'de Niş, Margrave Ludwig von Baden'in birlikleri
//              tarafından ele geçirildi." Veride 1689 yazıyordu.
//              Madde borcu data/olaylar_sh110.js'te AÇILDI (bu yamadan
//              ÖNCE uygulanmalı — koordinatörün sırası).
//
//   VİDİN      1689-10-01   yıl DOĞRU, AY yanlıştı (Eylül değil). TDV
//              birebir alıntı: "1689 Ekiminde... Margrave Ludwig von
//              Baden... Vidin'i savaşmadan ele geçirdi." Tam gün TDV'de
//              yok ⇒ kesinlik:"ay" (VERI-YAPISI.md §kesinlik).
//              Madde borcu YOK: mevcut olaylar_ek3.js:31 kırılması
//              (1689-09-24) yeni tarihe (1689-10-01) yalnız 7 gün
//              uzaklıkta — Değişmez 2 toleransı (±30 gün) içinde kalıyor.
//
//   ŞEHİRKÖY   DOKUNULMADI. TDV kendi maddesinde YILI (1689) bağımsız
//              doğruluyor ("1689'da şehir müttefik hıristiyan
//              kuvvetlerince zaptedildi"), gün vermiyor. Mevcut
//              1689-09-24 kaba ama YANLIŞ DEĞİL kanıtlanamadı — ay/gün
//              hâlâ Niş'ten ödünç olabilir ama yılın kendisi doğru.
//              Değiştirmedim; daha iyi kaynak bulununca düzeltilsin.
//
//   KRAGUJEVAC/ÇAÇAK   DOKUNULMADI, ARAŞTIRILMADI (TDV fetch edilmedi,
//              zaman yetmedi) — "arandı, yok" DEĞİL, "araştırılmadı"
//              (CLAUDE.md §11 ayrımı). `sirada` kovasında bırakıldı,
//              HUKUM-SH110.json'da öyle işaretli.
// =====================================================================

window.YER_YAMA_SH110 = [

{ ad:"Niş",
  s:[{f:"1281-01-01",t:"1386-01-01",d:"sirbistan"},
     {f:"1688-09-24",t:"1690-09-09",d:"avusturya"},
     {f:"1878-01-11",t:"1882-03-06",d:"sirbistan-prensligi"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
  d:[{f:"1386-01-01",t:"1402-07-28",y:"kusatma"},
     {f:"1413-07-05",t:"1688-09-24"},
     {f:"1690-09-09",t:"1878-01-11",y:"savas"}],
  isg:[{f:"1737-07-01",t:"1737-10-01",d:"avusturya",kaynak:"nis"}],
  kaynak:"TDV `nis` maddesi, birebir alıntı: \"24 Eylül 1688'de Niş, "
        +"Margrave Ludwig von Baden'in birlikleri tarafından ele "
        +"geçirildi. Fakat Vezîriâzam Köprülüzâde Fâzıl Mustafa "
        +"Paşa'nın karşı saldırısı ile üç hafta süren kuşatmadan sonra "
        +"geri alındı (Zilhicce 1101 / Eylül 1690).\"",
  neden:"Mevcut kayıt 1689-09-24 taşıyordu — TAM BİR YIL yanlış. "
       +"1690-09-09 (geri alınış) DEĞİŞTİRİLMEDİ: TDV yalnız yıl "
       +"(1690) veriyor, gün için ayrı bir küme (\"1690-09-09 Belgrad "
       +"seferi\") zaten HUKUM-SH110.json'da ayrı bir ÖDÜNÇ kaydı "
       +"olarak açık duruyor, bu yamanın kapsamı DEĞİL." },

{ ad:"Vidin",
  s:[{f:"1281-01-01",t:"1396-10-01",d:"bulgaristan"},
     {f:"1689-10-01",t:"1690-09-09",d:"avusturya",kesinlik:"ay"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
  d:[{f:"1396-10-01",t:"1402-07-28",y:"ilhak"},
     {f:"1413-07-05",t:"1689-10-01"},
     {f:"1690-09-09",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}],
  kaynak:"TDV `vidin` maddesi, birebir alıntı: \"1689 Ekiminde "
        +"hıristiyan birliğiyle yapılan savaşlarda Margrave Ludwig von "
        +"Baden, Fethülislâm ve Florentin ile birlikte Vidin'i "
        +"savaşmadan ele geçirdi.\"",
  neden:"Mevcut kayıt 1689-09-24 taşıyordu — yıl (1689) DOĞRUYDU, ay "
       +"(Eylül) YANLIŞTI (gerçeği Ekim). Tam gün TDV'de verilmediği "
       +"için 1689-10-01 + kesinlik:\"ay\" yazıldı (VERI-YAPISI.md "
       +"§kesinlik, henüz planlanan alan — bu koşuda ilk kullanımlardan "
       +"biri, girdi.py uyarı basabilir, beklenen). Madde borcu YOK: "
       +"olaylar_ek3.js:31'deki mevcut kırılma (1689-09-24) yeni tarihe "
       +"7 gün uzaklıkta, ±30 gün toleransı içinde." },

];

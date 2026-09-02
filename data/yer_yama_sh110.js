// =====================================================================
// YER YAMA SH110 — SONNET HAZIR KITA 110
// B5 ÖDÜNÇ TARİH TRİYAJI — Niş/Vidin kümesinin çözümü (tahta M-2047,
// M-2052, M-2055, geri çekme+iade M-2062'ye yanıt).
// Uygulayıcı: arac/_sahiplik_uygula.py (koordinatör koşturacak).
// =====================================================================
// Küme "1689-09-24 [avusturya] Niş/Vidin/Kragujevac/Çaçak/Şehirköy" TEK
// bir ödünç tarih DEĞİLDİ — dört ayrı iddia tek güne yığılmıştı, ve
// ikisi ZIT sonuca çıktı. Aşağıda İKİ KAYIT var, ama biri KOD OLARAK
// YORUMDA — o yüzden `window.YER_YAMA_SH110` yalnız Vidin'i taşıyor.
//
// 🔴 NİŞ — ÇÜRÜDÜ, koda GİRMİYOR (aşağıda yorumda DAMGALI duruyor)
//    PAKET-0037 aynı soruyu ölçtü ve TDV'nin KENDİ İÇİNDE çeliştiğini
//    buldu: `vidin` "1689 Ekimi" · `sehirkoy` "1689" · `belgrad` 1688
//    düşüş · `kopruluzade-fazil-mustafa-pasa` 1690 seferi — DÖRDÜ DE
//    1689'u destekliyor, artı Mirčetić 1994 (Vojna istorija Niša).
//    Çekirdekte zaten 1689-09-24/1690-09-09 vardı, 1688-09-24 HİÇ
//    yoktu. Tek madde (`nis`) TDV'nin kendi maddeleri arasında
//    AZINLIKTA kaldı — kaynağın kendisi hatalıydı, veri değil.
//    ⇒ HÜKÜM: veri DOĞRU, Niş TAŞINMIYOR.
//
// 🟢 VİDİN — DOĞRULANDI, KALDI (koordinatör: "Vidin sende kalıyor")
//    TDV `vidin` birebir alıntı: "1689 Ekiminde... Vidin'i
//    savaşmadan ele geçirdi." Mevcut kayıt 1689-09-24 taşıyordu —
//    yıl (1689) DOĞRUYDU, ay (Eylül) YANLIŞTI (gerçeği Ekim). Bu,
//    Niş'in AZINLIKTA kalan tek maddesinden FARKLI: Vidin'in kendi
//    kaynağı TEK BAŞINA yeterli ve başka hiçbir TDV maddesiyle
//    ÇELİŞMİYOR.
// =====================================================================

/* 🔴 ÇÜRÜDÜ — PAKET-0037'nin ölçümü, 2 Eylül 2026; TDV `nis` maddesi
   kendi kaynağıyla (vidin/sehirkoy/belgrad/kopruluzade-fazil-mustafa-
   pasa + Mirčetić 1994) çelişiyor. UYGULANMADI, sonraki bir oturum
   aynı TDV cümlesini okuyup aynı yola girmesin diye burada duruyor:

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
  kaynak:"TDV `nis` maddesi — YANLIŞ ÇIKTI, bkz. yukarıdaki not.",
  neden:"YANLIŞ ÇIKTI — çekirdek (1689-09-24) DOĞRU, dokunulmadı." },
*/

window.YER_YAMA_SH110 = [

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
       +"§kesinlik). Madde borcu YOK: olaylar_ek3.js:31'deki mevcut "
       +"kırılma (1689-09-24) yeni tarihe 7 gün uzaklıkta, ±30 gün "
       +"toleransı içinde. Niş'ten FARKLI olarak Vidin'in TDV kaynağı "
       +"başka hiçbir maddeyle ÇELİŞMİYOR." },

];

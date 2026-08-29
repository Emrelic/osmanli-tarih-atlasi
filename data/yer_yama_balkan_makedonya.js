// -*- coding: utf-8 -*-
// YER_YAMA_BALKAN_MAKEDONYA — BALKAN MAKEDONYA kolu
// UYGULAMA-0019 · 30 Agustos 2026 · ORHANGAZI sevkiyle (M-1719 devri)
//
// ⚠️ BU KOSUYA GIRMEZ. Kosu 00:32'de basladi, girdi anlik goruntulendi.
//    Kayit KAYBOLMAZ, bir SONRAKI kosuda cizilir. Kusur degil GECIKME.
//
// ═══ DEVIR — "olen oturumun biraktigini olc" (koordinatorun ②. kurali) ═══
// Olctum: ALTI BARDAK bu kolda HICBIR SEY birakmamis.
//     data/yer_yama_balkan_makedonya.js   YOK
//     denetim/BULGU-BALKAN-MAKEDONYA.md   YOK
//     git log --all -- (iki dosya)        BOS
//     tahtadaki iki mesaji (M-1448, M-1450) BASKA bir ise ait ("alti bardak")
// ⇒ Bu bir DEVIR degil ILK ATAMA. Sifirdan basliyorum ama bunu OLCEREK
//   soyluyorum, varsayarak degil.
//
// ═══ TABAN — kol kutusu olculdu ═══
// 🟢 DOGRU yazilmis YEDI kayit (dokunulmadi):
//     Selanik   d: -> 1912-11-08  yunanistan   (kulliyatta gunu VAR:
//                                   "Selanik'in alinmasi")
//     Uskup     d: -> 1912-10-26  sirbistan-kralligi -> yugoslavya 1918-12-01
//     Pristine  d: -> 1912-10-22  sirbistan-kralligi -> yugoslavya
//     Manastir  d: -> 1912-11-19  sirbistan-kralligi -> yugoslavya
//     Ohri      d: -> 1912-11-29  sirbistan-kralligi -> yugoslavya
//     Serez · Kavala · Praviste   d: -> 1913-06-28  yunanistan
// 🔴 YANLIS olan TEK kayit: DRAMA — d: 1413-07-05 -> 1923-10-29, TEK BLOK.
//    Balkan savaslari HIC yazilmamis: 510 yillik kesintisiz Osmanli.
//
// ═══ CARE — sifirdan arastirma DEGIL, HIZALAMA ═══
// Drama'nin en yakin uc komsusu (Kavala 18 km · Praviste 24 km · Serez
// 34 km) UCU DE `d: -> 1913-06-28` + `yunanistan` yaziyor. Drama tam
// ortalarinda ve ayni askeri harekatla (II. Balkan Savasi, Yunan
// ilerleyisi) el degistirdi. TDV `drama`: "Balkan savaslari sirasinda bir
// ara Bulgarlar'in eline gecen Drama, II. BALKAN HARPLERI ESNASINDA
// YENIDEN YUNANLILAR TARAFINDAN ZAPTEDILDI" — tam tarih VERMIYOR
// (sartname bunu onceden olcmustu).
// ⇒ Gun UYDURULMADI: uc komsunun kullandigi gune hizalandi.
//
// ═══ 🔴 KAYITSIZ BIRAKMADIGIM IKI IS ═══
// ① BULGAR ISGALI PENCERESI KOLUN TAMAMINDA EKSIK.
//    TDV Drama icin "bir ara Bulgarlar'in eline gecen" diyor; Kavala ·
//    Serez · Praviste de 1912-13'te Bulgar isgali gordu. UCUNDE DE o
//    donem YOK — yani Drama'nin kusuru (eksik gecis) daha HAFIF bicimde
//    ucunde de var: son sahip dogru, ARADAKI sahip yazilmamis.
//    Bu yama onu KAPATMIYOR cunku gun gerekiyor ve kulliyatta yok.
//    ⚠️ Drama'yi komsulariyla hizalamak bu eksigi BUYUTMUYOR — dordu de
//      ayni eksigi paylasiyor; ayri gun kullansaydim TUTARSIZLIK eklerdim.
// ② KUMANOVA KAYDI YOK.
//    Olctum: veride sifir eslesme. Oysa Kumanova Muharebesi (23-24 Eki
//    1912) I. Balkan Savasi'nin BELIRLEYICI carpismasi ve kulliyatta
//    gunu ADIYLA var: "1912-10-23 Sark Ordusu bozgunu — KUMANOVA ve
//    Selanik'in kaybi". Yani madde var, YERLESIM yok.
//    ⇒ Yeni nokta `yerlesimler*.js` demek = koordinatorun dosyasi.
//      Devrediyorum. (Trakya kolunda CATALCA ile ayni durum.)
//
// ═══ BIR OLCUM NOTU — kolun kendi ici tutarsizligi ═══
// Serez · Kavala · Praviste `1913-06-28` kullaniyor; cekirdek kulliyatta
// o gun YOK, en yakini `1913-06-29` ("Ikinci Balkan Savasi basladi").
// Yani uc kayit, sebebi olan savastan BIR GUN ONCE el degistirmis
// gorunuyor. Degismez 2 acilmiyor (1 gun), ama kucuk bir tutarsizlik.
// Drama'yi da ayni gune hizaladim — TUTARLILIK icin; gunu duzeltmek
// dort kaydi birden ilgilendirir ve koordinator karari gerektirir.

window.YER_YAMA_BALKAN_MAKEDONYA = [

  {
    ad: "Drama",
    d: [{f:"1374-01-01",t:"1383-09-19"},
        {f:"1383-09-19",t:"1402-07-28"},
        {f:"1413-07-05",t:"1913-06-28"}],
    s: [{f:"1281-01-01",t:"1345-01-01",d:"bizans"},
        {f:"1345-01-01",t:"1374-01-01",d:"sirbistan"},
        {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
        {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
        {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
        {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
        {f:"1913-06-28",t:"1923-10-29",d:"yunanistan"}],
    kaynak: "TDV `drama` (200): 'Balkan savaslari sirasinda bir ara " +
            "Bulgarlar'in eline gecen Drama, II. Balkan harpleri esnasinda " +
            "yeniden Yunanlilar tarafindan zaptedildi' — TAM TARIH YOK. " +
            "Gun, en yakin uc komsudan (Kavala 18 km · Praviste 24 km · " +
            "Serez 34 km) alindi; ucu de 1913-06-28 kullaniyor.",
    neden: "Eski kayit `d: 1413-07-05 -> 1923-10-29` idi: 510 yillik TEK " +
           "BLOK, Balkan savaslari HIC yazilmamis. Kolun tek yanlis kaydi " +
           "buydu; oteki yedisi dogru. ⚠️ Bulgar isgali penceresi (1912-13) " +
           "bu yamada EKLENMEDI cunku kulliyatta gunu yok — ve ayni eksik " +
           "Kavala · Serez · Praviste'de DE var, yani hizalama tutarsizlik " +
           "eklemiyor. Ayri kalem olarak koordinatore bildirildi."
  }

];

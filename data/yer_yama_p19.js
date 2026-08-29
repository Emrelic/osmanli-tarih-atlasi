// -*- coding: utf-8 -*-
// YER_YAMA_P19 — UYGULAMA-0019 oturumu · parti-emrelic-0019 · 29 Agustos 2026
//
// 🔴 BICIM NICIN DEGISTI: once `donem_yama_p19.js` diye yazmistim, cunku
//    `arac/yama_uygula.js` "data/yer_yama*.js dosyalarinin HEPSINI okur"
//    diyor ve KRONOLOJI yamasi bekliyor; benim kayitlarim yerlesim donemi.
//    Cakismayi onlemek icin ad ayirmistim.
//    ⇒ AMA OLCUM BUNU CURUTTU: koordinator M-1508'de uyguladigi dort yamayi
//    sayarken (YER_YAMA_ERKEN 13 · UYG2 10 · UYG1 5 · P35 4) BENIMKI
//    LISTEDE YOK. Cunku `yer_yama*` kalibini tariyor. Yani cakismadan
//    kacinirken GORUNMEZ olmusum — ters yonde ayni kusur.
//    📌 Ders: bir ad alanindan kacinmak, o ad alanina bagli GORUNURLUKTEN
//    de kacinmaktir. Ikisini birden olcmek gerekiyordu.
//
// 🟢 VE BICIMI CALISAN YAMALARDAN KOPYALADIM (yer_yama_uyg1.js):
//    `ad:` + TAM donem dizileri (`d:` / `s:` / `v:`) — fark degil, KAYDIN
//    YENI HALI. Kendi `yerlesim:/mevcut:/yeni:` bicimimi BIRAKTIM.
//
// ⚠️ ASKIDA OLAN IKI KAYIT BU DIZIYE KONMADI (kazara uygulanmasin):
//    Mersin (H-0008)  — `kur:` 1671 mi 1836 mi, KOORDINATOR KARARI bekliyor
//    Malatya (H-0043) — iki TDV maddesi CELISIYOR (`malatya` 28 Tem 1516
//                       askeri zapt · `idris-i-bitlisi` Halep'ten SONRA
//                       kesin ilhak). Gerekceleri denetim/BULGU-UYGULAMA-0019.md
//                       ve HUKUM-UYGULAMA-0019.json icinde duruyor.

window.YER_YAMA_P19 = [

  // ===================================================================
  // H-0004 — "fetret ... Rumeli topraklari ... orada IKI PARCA gorunuyor"
  //
  // OLCUM: Fetret'in TAMAMINDA sehzade kimlikleri kullaniliyor
  // (suleyman-celebi 66->123 · isa-celebi 56 · mehmed-celebi 7-8 ·
  // musa-celebi 65) ama UC ISTRANCA NOKTASI duz `d:` OSMANLI kaliyor.
  // Emre'nin gordugu "iki parca" bu.
  //
  // SOZLESME UYDURULMADI — 20-60 km komsulardan BIREBIR alindi:
  // Kirklareli (41,735/27,225) · Derekoy (41,943/27,401) ·
  // Vize (41,571/27,766) ucunde de AYNI dort donem AYNI gunlerle var.
  // 1913 donemlerine DOKUNULMADI (zaten dogru).
  {
    ad: "İğneada",
    d: [
      { f: "1361-01-01", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-03-26" },
      { f: "1913-07-21", t: "1923-10-29" }
    ],
    s: [
      { f: "1281-01-01", t: "1361-01-01", d: "bizans" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-03-26", t: "1913-07-21", d: "bulgaristan-kralligi" }
    ],
    kaynak: "veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari"
  },
  {
    ad: "Rezve (Rezovo)",
    d: [
      { f: "1361-01-01", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-09-29" }
    ],
    s: [
      { f: "1281-01-01", t: "1361-01-01", d: "bizans" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-09-29", t: "1923-10-29", d: "bulgaristan-kralligi" }
    ],
    kaynak: "veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari"
  },
  {
    ad: "Ahtapolu (Ahtopol)",
    d: [
      { f: "1361-01-01", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-09-29" }
    ],
    s: [
      { f: "1281-01-01", t: "1361-01-01", d: "bizans" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-09-29", t: "1923-10-29", d: "bulgaristan-kralligi" }
    ],
    kaynak: "veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari"
  },

  // ===================================================================
  // H-0069 — "Halepce alinmis ama Sehrizor alinmamis gorundugu icin
  //           HALEPCE ENKLAV seklinde kalmis"
  //
  // OLCUM: Halepce d: 1534-12-04 (Bagdat'in fetih gunu) · aradaki
  // Sehrizor d: 1554-08-22 — YIRMI YIL. Sehrizor, Halepce ile Osmanli
  // cekirdegi ARASINDA (48 km kuzeybati) ⇒ Halepce 20 yil ADA.
  //
  // KAYNAK KARAR VERDI — TDV `sehrizor` (200, govdesi okundu):
  //   "Zalm ... ZAPTEDILDI (23 Ramazan 961 / 22 AGUSTOS 1554). BOLGE
  //    SANCAK HALINE GETIRILEREK Murad Bey'e verildi."
  //   "Sehrizor ... SAFEVILER'IN YONETIMINDE KALDI."
  // ⇒ Osmanli idaresine giren BOLGE'dir; Halepce onun icinde.
  // 🟢 YENI GUN UYDURULMADI — veride ZATEN VAR OLAN Sehrizor gunune
  //    hizalandi. Oteki donemlerin hicbirine dokunulmadi.
  // 🔴🔴 BURAYA BIR D2 KILIDI KOYMUSTUM — GERI ALDIM, CUNKU OLCUMUM
  //    YANLISTI. Kayit icin gecmisi siliyorum degil, KAYDEDIYORUM:
  //
  //    Koordinatorun "17 maddesiz gun" uyarisi uzerine yamami sinadim.
  //    ① Ilk tarama: `kronoloji_*.js`i de saydim -> "0 maddesiz" ⇒ SAHTE
  //       GECIS (denetle.py:714 yalniz `olaylar*.js` tariyor).
  //    ② Ikinci tarama: evreni daralttim -> "1554-08-22 82 GUN MADDESIZ"
  //       ⇒ kilidi koydum ve hazir madde metni yazdim.
  //    ③ UYGULAMA-3 itiraz etti: "o madde ZATEN VAR, olaylar_ek8.js".
  //       Olctum — HAKLIYDI. Madde orada duruyor:
  //           "t": "1554-08-22" ... "22 Agustos 1554'te alindi. Boylece
  //            Zagros'un bati yamacindaki Sehrizor havzasi Osmanli
  //            idaresine girdi..."
  //    KUSUR BENIM ALETIMDE: regex'im `t:"..."` ariyordu, o dosya JSON
  //    uslubunda `"t": "1554-08-22"` yaziyor. Suzgec BICIME baglanmisti
  //    ve gormedigi maddeyi YOK saydi.
  //    📌 Bu projenin kayitli sinifi ("suzgec BICIME baglanmisti ve yeni
  //       yamalari SESSIZCE eledi") — ve bu sefer bir DENETIM aletinde.
  //    ⇒ Duzeltilmis olcum: 30 kirilma gununun 30'u TEMIZ, MADDESIZ 0.
  //    ⚠️ VE AYNI KUSUR IKINCI BIR HUKMUMU DE CURUTTU: "yer_yama_ferhatpasa
  //       Kutaisi 1490 maddesiz" demistim ve koordinatorun listesini
  //       "bagimsiz dogruladim" diye yazmistim. Duzeltilmis olcumde o da
  //       TEMIZ (9/9). O dogrulama DEGERSIZDI ve geri aliyorum.
  // 🔴 HALEPCE KAYDI GERI CEKILDI — `yer_yama_uyg3.js` ESAS ALINSIN.
  //    Cakismayi olcumle cozdum ve UC MADDEDE DE ONLARINKI DOGRU CIKTI:
  //
  //    ① "1554-08-22 icin madde SART" kilidim YANLISTI — madde
  //       `olaylar_ek8.js`te ZATEN VAR. Benim regex'im `t:"..."`
  //       ariyordu, o dosya JSON uslubunda `"t": "..."` yaziyor.
  //    ② 1534/1535-1550 ERKEN OSMANLI PENCERESI GERCEK. Canli veride
  //       olctum: Sehrizor `d: 1535-01-01 -> 1550-01-01` tasiyor.
  //       Benim kaydimda o pencere YOKTU — yani benimki DAHA EKSIKTI.
  //       (UYGULAMA-3 ayrica 1550-1554 arasini `s:"safevi"` ile
  //        kapatti; itirazim oydu ve karsiladi.)
  //    ③ IKINCI SAFEVI BLOGUNUN BITISI: ben 1638-12-25 yazmistim,
  //       CANLI Sehrizor `d: 1638-12-24` kullaniyor. Yani senkronu
  //       BOZAN benim kaydimdi — tam da otekini uyardigim sey.
  //
  // 📌 Ders: bir cakismada "benim kaydim daha tam" hukmu, ANCAK
  //    ucunu de olctukten sonra verilir. Ben ucunden birine (s: dizisi)
  //    bakip hukum vermistim; oteki ikisi beni curuttu.
  // ⇒ Halepce icin dogru kayit `yer_yama_uyg3.js`tedir. Bu dosyada
  //    yalniz UC ISTRANCA kaydi kaliyor (H-0004).

];

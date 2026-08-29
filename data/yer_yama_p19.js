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
  // 🔴🔴 BU KAYIT TEK BASINA UYGULANMAZ — DEGISMEZ 2'YI ACAR.
  //    Koordinatorun "17 maddesiz gun" uyarisi uzerine KENDI YAMAMI
  //    sinadim ve ilk taramam SAHTE GECTI: `kronoloji_*.js`i de saymistim,
  //    oysa `arac/denetle.py:714` Degismez 2 icin YALNIZ `olaylar*.js`
  //    tariyor. (CLAUDE.md: "bu gun zaten var YETMIYOR — HANGI KOVADA
  //    oldugu da sorulmali." Cekirdek vs kuyruk.)
  //    DOGRU EVRENDE SONUC:
  //        1638-12-25   en yakin madde  1 gun   ✓  (koordinatorun listesi
  //                     bu gunu isaretlemis ama BENIM yamamda sorun YOK)
  //        1554-08-22   en yakin madde 82 GUN   🔴 MADDESIZ
  //    Oteki 29 kirilma gununun 29'u temiz.
  //
  // ⇒ SECIM (a): O GUNE MADDE YAZILSIN. Olay gercek ve kaynak TAM GUNU
  //    veriyor; kirilmayi baska gune kaydirmak (secenek b) tarihi
  //    bozardi cunku Sehrizor kaydi ZATEN 1554-08-22 kullaniyor.
  //    HAZIR MADDE METNI (data/olaylar*.js BENIM DOSYAM DEGIL, ONERIYORUM):
  //        t: "1554-08-22"
  //        b: "Sehrizor'un fethi — Zalm Kalesi'nin zapti ve sancak kurulusu"
  //        y: "Sehrizor"   yer_id: "Sehrizor"
  //        metin: "Bagdat beylerbeyi Baltaci Mehmed Pasa, Osman Pasa'nin
  //                vefati uzerine Sehrizor bolgesinin merkezi Zalm
  //                (Kal'a-i Zalim) Kalesi'ni zaptetti. Bolge sancak haline
  //                getirilerek Murad Bey'e verildi; boylece Sehrizor ve
  //                cevresi (Halepce dahil) Safevi idaresinden cikip Osmanli
  //                idaresine girdi."
  //        kaynak: "islamansiklopedisi.org.tr/sehrizor"
  //    ⚠️ Madde INMEDEN bu kayit uygulanirsa Degismez 2 BIR YERDEN ACILIR.
  {
    ad: "Halepçe",
    d2_gerek: "1554-08-22 gunu icin kronoloji maddesi SART — yukaridaki " +
              "hazir metin. Madde inmeden UYGULAMA.",
    d: [
      { f: "1554-08-22", t: "1623-11-28" },
      { f: "1638-12-25", t: "1917-03-11" }
    ],
    s: [
      { f: "1281-01-01", t: "1335-12-01", d: "ilhanli" },
      { f: "1335-12-01", t: "1411-01-01", d: "celayirli" },
      { f: "1411-01-01", t: "1469-01-01", d: "karakoyunlu" },
      { f: "1469-01-01", t: "1508-01-01", d: "akkoyunlu" },
      { f: "1508-01-01", t: "1554-08-22", d: "safevi" },
      { f: "1623-11-28", t: "1638-12-25", d: "safevi" },
      { f: "1917-03-11", t: "1923-10-29", d: "ingiltere" }
    ],
    kaynak: "islamansiklopedisi.org.tr/sehrizor (govdesi okundu)"
  }

];

// -*- coding: utf-8 -*-
// YER_YAMA_BALKAN_TRAKYA — BALKAN TRAKYA kolu · UYGULAMA-0019 · 30 Agustos 2026
//
// Emre: "Balkan savaslarindan sonra Meric nehrinin batisinda OSMANLI TOPRAGI
// KALMIS gorunuyor, bu hatali olmali." (1913-11-14 ekran goruntusu)
//
// ═══ OLCUM — Bati Trakya kutusu, 1913-10-01 kesiti ═══
// Koordinatorun kaniti DOGRUYDU ama EKSIKTI; olctum, BES yanlis kayit var
// ve UC AYRI KUSUR CINSI (M-1609 · M-1639):
//     Gumulcine · Iskece · Ferecik   dogru devlet, YANLIS SURE  -> tarih kaydirma
//     Drama                          IKI GECIS BIRDEN EKSIK     -> donem yazma
//     Dimetoka                       dogru gun, YANLIS ARDIL    -> kimlik degistirme
// ⚠️ DRAMA BU KOLDA DEGIL — sartname onu BALKAN MAKEDONYA'ya veriyor
//    (Serez · Drama · Kavala). Olcumu M-1639'da devrettim, yamasi bende degil.
//
// ═══ KAYNAK ═══
// TDV `gumulcine` (200, govdesi okundu) diziliMI veriyor, GUN VERMIYOR:
//   "1371'den 1912'ye kadar KESINTISIZ Osmanli idaresi altinda kalmistir."
//   "I. Balkan Savasi sirasinda Gumulcine BULGARISTAN tarafindan ISGAL EDILDI.
//    II. Balkan Savasi ile I. Dunya Savasi arasinda kurulan ve KISA SUREN
//    Garbi Trakya Hukumet-i Mustakillesi'nin bassehri olan Gumulcine,
//    I. DUNYA SAVASI'NDA YENIDEN BULGARLAR'IN ELINE GECTI."
// ⇒ 1913-1920 arasi OSMANLI DEGIL BULGAR. Bugunku veri tam tersini yaziyor.
//
// ═══ GUN — UYDURULMADI, KOMSUDAN ALINDI ═══
// 🟢 DOGRU SABLON ZATEN VERIDE: **SOFULU** (41,193/26,298), ayni kutuda,
//    ayni olayi yasamis ve DOGRU yazilmis:
//        d: ... -> 1913-05-30                      (Londra Antlasmasi)
//        s: 1913-05-30 -> 1920-05-14 bulgaristan-kralligi
//        s: 1920-05-14 -> 1923-10-29 yunanistan
//    Dedeagac da ayni iki gunu kullaniyor.
// ⇒ Dordunu de Sofulu'ya HIZALADIM. Iki gun de KULLIYATTA MEVCUT
//    (1913-05-30 hazir gun listesinde) ⇒ Degismez 2 acilmaz.
// 📌 Ve bu, kendi kurdugum olcutun uygulanmasi: "komsu kayitlar ayni olayi
//    anlatiyorsa AYNI gunu kullanmali; farkli gun ancak farkli olay varsa."
//    Once uc komsu uc ayri gun kullaniyordu (05-30 · 07-14 · 07-21).
//
// ═══ GARBI TRAKYA — koordinatorun sevk sirasi ═══
// Kunye `garbi-trakya` devletler.js'te YOK (olctum, sifir kullanim).
// Koordinator kunyeyi ACMAYA karar verdi (M-1610) ama SIRA soyle dedi:
// once yedi yillik yanlis blok bulgaristan'a donsun, SONRA iki aylik
// pencere acilsin. ⇒ O iki ay SIMDILIK bulgaristan-kralligi icinde;
// her kaydin `neden:` alaninda yazili, kayitsiz birakilmadi.

window.YER_YAMA_BALKAN_TRAKYA = [

  {
    ad: "Gümülcine",
    d: [{f:"1363-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}],
    s: [{f:"1281-01-01",t:"1363-01-01",d:"bizans"},
        {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
        {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
        {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
        {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
        {f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},
        {f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
    kaynak: "TDV `gumulcine` govdesi: 'I. Balkan Savasi sirasinda Bulgaristan " +
            "tarafindan isgal edildi ... I. Dunya Savasi'nda YENIDEN " +
            "BULGARLAR'IN eline gecti.' Gunler komsu SOFULU kaydindan alindi " +
            "(ayni kutu, ayni olay, dogru yazilmis).",
    neden: "Eski kayit `d: 1913-09-29 -> 1920-05-27` yaziyordu, yani Istanbul " +
           "Antlasmasi'nin Bati Trakya'yi Osmanli'ya GERI VERDIGINI. Antlasma " +
           "EDIRNE'yi verdi; Bati Trakya Bulgaristan'da kaldi. ⚠️ 31 Agu - " +
           "25 Eki 1913 arasi GARBI TRAKYA HUKUMETI donemi bu bulgaristan " +
           "blogunun ICINDE duruyor; `garbi-trakya` kunyesi acilinca o iki ay " +
           "ona donecek (koordinator karari M-1610, sira: once yedi yil)."
  },

  {
    ad: "İskeçe",
    d: [{f:"1373-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}],
    s: [{f:"1281-01-01",t:"1373-01-01",d:"bizans"},
        {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
        {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
        {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
        {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
        {f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},
        {f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
    kaynak: "TDV `iskece` (200) + `gumulcine` govdesi; gunler komsu SOFULU " +
            "kaydindan. Iskece Gumulcine ile ayni idari ve askeri kaderi " +
            "paylasti (Bati Trakya, 27 km ara).",
    neden: "Gumulcine ile AYNI kusur ve ayni care. Garbi Trakya notu ayni."
  },

  {
    ad: "Ferecik (Feres)",
    d: [{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}],
    s: [{f:"1281-01-01",t:"1357-01-01",d:"bizans"},
        {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
        {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
        {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
        {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
        {f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},
        {f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
    kaynak: "Gunler komsu SOFULU ve DEDEAGAC kayitlarindan (Ferecik ikisinin " +
            "arasinda, Meric'in BATI yakasi). TDV'de mustakil madde ARANMADI.",
    neden: "Gumulcine ile AYNI kusur ve ayni care. Garbi Trakya notu ayni."
  },

  {
    ad: "Dimetoka",
    d: [{f:"1361-02-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}],
    s: [{f:"1281-01-01",t:"1361-02-01",d:"bizans"},
        {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
        {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
        {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
        {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
        {f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},
        {f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
    kaynak: "Gunler komsu SOFULU kaydindan (12 km). Dimetoka Meric'in BATI " +
            "yakasinda ve Sofulu ile ayni idari kaderi paylasti.",
    neden: "🔴 AYRI BIR KUSUR CINSI: eski kayit `s: 1913-05-30 -> 1923-10-29 " +
           "YUNANISTAN` diyordu — GUNU DOGRU ama ARDIL DEVLETI YANLIS. " +
           "Dimetoka 1913'te Bulgaristan'a gecti, Yunanistan'a 1920'de. " +
           "Yedi yillik Bulgar donemi tamamen atlanmisti. Gun zaten hizaliydi " +
           "(Sofulu ve Dedeagac ile ayni), degisen yalniz KIMLIK."
  }

];

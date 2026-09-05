// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — `arnavutluk` hayalet/4d üçlüsü
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2783 ⑥ · 5 Eylül 2026
//
// 🔴 SIRA BAĞLAYICI: önce `denetim/YAMA-KUNYE-ARNAVUTLUK-0905.json`
//    (topia · dukagin) inecek, SONRA bu yama uygulanacak.
//    Ters sırada iki dönem `künyesiz` kovasına düşer.
//
// SORUN: üç nokta da `s:"arnavutluk"` dönemini 1281-01-01'de başlatıyor;
// `arnavutluk` harita anahtarının künye birleşimi ise 1443'te başlıyor.
//   Leş    t:1393 < kf:1443 ⇒ kesişim YOK ⇒ HAYALET (yayını durduran kova)
//   Kruja  t:1478 > kf:1443 ⇒ kesişim VAR ⇒ yalnız 4d (tolere edilen kova)
//   Mat    aynı
//
// 🔴 MAT BU YAMADA YOK — ve bu bir eksiklik değil bir SONUÇ:
//    `mat` slug'ı 302, `kruya` gövdesi Mat için hiçbir tarih vermiyor,
//    `arnavutluk` gövdesi Mat'ı hiç anmıyor. ⇒ `bulunamadı`.
//    Mat 4d kovasında KALIYOR. Bu, kendi öngörümü (4d 465) çürütür:
//    beklenen 466. Öngörü dosyasında mazereti ÖNCEDEN yazılmıştı.
//
// ⚠️ HİÇBİR GÜN UYDURULMADI. TDV yıl veriyor ⇒ alanlar `YYYY-01-01`.
//    Mevcut `venedik` · `d:` · `arnavutluk-bagimsiz` dönemlerine
//    DOKUNULMADI — onlar ayrı bir kalem (aşağıdaki AÇIK KALEM notu).
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_ARNAVUTLUK = [

  {
    ad: "Leş (Alessio)",
    // TDV `les`: "Leş XIII. yüzyılda Sırbistan Devleti'ne dâhil oldu" ·
    // "Sırbistan Devleti'nin 1355'te çöküşünden sonra Leş şehri Balšić
    //  ailesinin küçük prensliğinin bir parçası oldu" ·
    // 1387 "Paul ve Lek Dukagjin … Arnavut Dukakin Prensliği'nin merkezi"
    // ⚠️ 1356-01-01 sınırı: TDV "1355'te çöküşünden SONRA" diyor; `zeta`
    //    künyesi de 1356-01-01'de başlıyor. İkisi UYUMLU, ve bu tarih
    //    künyeden değil kaynağın "sonra"sından geliyor.
    s: [
      { f: "1281-01-01", t: "1356-01-01", d: "sirbistan-nemanjic" },
      { f: "1356-01-01", t: "1387-01-01", d: "zeta" },
      { f: "1387-01-01", t: "1393-05-01", d: "dukagin" },
      { f: "1393-05-01", t: "1478-06-15", d: "venedik" },
      { f: "1912-11-28", t: "1923-10-29", d: "arnavutluk-bagimsiz" }
    ],
    kaynak: "les"
  },

  {
    ad: "Akçahisar (Kruja)",
    // TDV `kruya` (slug `akcahisar` bir YÖNLENDİRME KÜTÜĞÜ: "bk. KRUYA"):
    //   "1344'te Sırplar Kruya, Berat ve Avlonya'yı ele geçirdi"
    //   "Charles Thopia Kruya'ya hâkim oldu (1363)" · George 1392'ye kadar
    //   1394 "Sırp Prensi Konstantin Balšić getirildi" (Osmanlı VASALI)
    //   "Nikola Thopia, Kruya'yı … 1415'teki ölümüne kadar elinde tuttu"
    //   1415 "Gjon Kastrioti Osmanlılar'ın vasalı olarak şehrin idaresini
    //         ele geçirdi" · İskender Bey 1468'deki ölümüne kadar
    //   "15 Rebîülevvel 883'te (16 Haziran 1478) fethedildi"
    //
    // ⚠️ ÜÇ BEYAN — hiçbiri kaynaktan DEĞİL, üçü de burada açıkça duruyor:
    //  ① 1281-1344 arası TDV KONUŞMUYOR. `sirbistan-nemanjic` seçildi çünkü
    //     TDV `arnavutluk`: "XII. yüzyılda ise Sırplar kuzeyini ele
    //     geçirmişlerdir" — Kruja kuzeydedir. ÇIKARIM, alıntı değil.
    //  ② 1392-1394 arası (Helena/Barbadigo geçişi) `topia` içinde
    //     BIRAKILDI — iki yıllık boşluk için ayrı kimlik yazmak
    //     uydurma olurdu.
    //  ③ 1415-1443 arası Gjon Kastrioti OSMANLI VASALIYDI ⇒ `v:` alanına
    //     yazıldı, `s:`e değil. Bu bir MODEL kararıdır: atlasta `v:`
    //     Osmanlı tâbiiyetini gösterir ve TDV tam olarak onu söylüyor.
    s: [
      { f: "1281-01-01", t: "1363-01-01", d: "sirbistan-nemanjic" },
      { f: "1363-01-01", t: "1394-01-01", d: "topia" },
      { f: "1394-01-01", t: "1402-01-01", d: "zeta" },
      { f: "1402-01-01", t: "1415-01-01", d: "topia" },
      { f: "1443-01-01", t: "1478-06-15", d: "arnavutluk-iskenderbey" }
    ],
    v: [
      { f: "1415-01-01", t: "1443-01-01" }
    ],
    kaynak: "kruya"
  }

];

// ═══════════════════════════════════════════════════════════════════
// AÇIK KALEMLER — ölçüldü, UYGULANMADI (kapsam dışı ya da kaynaksız)
//
// 🔴 ① GÜN DÜZELTMESİ, KAYNAKLI, AMA BU YAMADA YOK:
//    TDV `kruya`: "15 Rebîülevvel 883'te (16 HAZİRAN 1478) fethedildi"
//    Veri: 1478-06-15. ⇒ BİR GÜN FARK, ve kaynak günü AÇIKÇA veriyor.
//    Uygulanmadı çünkü aynı gün Leş ve Mat'ta da duruyor; tek noktada
//    değiştirmek üç noktayı bir gün ayırır. `§11`: "iki ayrı kusur tek
//    satırda raporlanırsa aynı çare uygulanır" — AYRI kalem olarak
//    bildiriliyor.
//
// 🟡 ② LEŞ'İN VENEDİK BAŞLANGICI (1393-05-01) TDV'DE DESTEKLENMİYOR:
//    TDV `les` Venedik'i "1404-1430 yılları arasında … surlarla
//    çevirdiler" diye anlatıyor. 1393 için dayanak GÖRMEDİM.
//    DOKUNULMADI — çürütmek için gövdeyi yeniden okumak gerekir.
//
// ⚪ ③ MAT (MATİ): `bulunamadı`. Üç TDV gövdesi de (mat 302 · kruya ·
//    arnavutluk) Mat için tarih vermiyor. 4d kovasında KALIYOR.
// ═══════════════════════════════════════════════════════════════════

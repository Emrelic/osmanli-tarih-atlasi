// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Yunan anakarası 1912-13: İŞGAL sonra ATİNA'da devir
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2843 ② · 5 Eylül 2026
//
// 🔴 GÜN DEĞİŞTİ: 1913-05-30 (Londra) DEĞİL **1913-11-14 (ATİNA)**
//    ve dayanak PROJENİN KENDİ ÇEKİRDEK MADDESİ:
//
//    `1913-11-14`  "Atina Antlaşması: Yunanistan ile barış ve
//                   Selanik-Yanya'nın devri"
//    gövdesi: "Osmanlı Devleti ile Yunanistan arasında imzalanan
//    antlaşma, Balkan Savaşı'nda kaybedilen **Selanik, Yanya ve Güney
//    Makedonya'nın Yunanistan'a geçişini RESMEN TANIDI**"
//
//    ⇒ Londra (1913-05-30) Osmanlı'nın Midye-Enez batısını BIRAKTIĞI
//      antlaşmadır; Yunanistan'la devir ATİNA'dadır. İkisi ayrı.
//    ⇒ Ve bu, koordinatörün onayladığı `1913-05-30`u DÜZELTİR.
//
// 🟢 VE EPİR SORUNU DA ÇÖZÜLDÜ: madde başlığı **"Selanik-YANYA'nın
//    devri"** diyor. Yanya grubunun yedi noktası da aynı gün.
//    ⇒ Floransa Protokolü (Aralık 1913) Yunanistan-ARNAVUTLUK sınırını
//      çizdi; Osmanlı'nın Yanya'yı devri ondan AYRI ve Atina'da.
//    ⇒ Tuttuğum 7 nokta AÇILDI, kapsam 10 değil **17**.
//
// 🔴 VE `1913-11-14` ATLASTA HİÇ KULLANILMIYOR (ölçüldü: 0 nokta).
//    Çekirdekte kaydı olan bir antlaşma, haritada hiç görünmüyor.
//
// DESEN (bu gece beş kez kuruldu: Girit · Tunus · Oniki Ada · Ege · burası)
//    teslim/işgal günü → `isg:` başlar (fiilî tasarruf)
//    antlaşma günü     → `s:` başlar (hukukî devir)
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_YUNANANAKARA = [
  {
    ad: "Preveze",
    // işgal/teslim: 1912-10-21 (veriden) → Atina 1913-11-14
    d: [
      { f: "1449-01-01", t: "1684-09-29" },
      { f: "1798-10-23", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1449-01-01", d: "bizans" },
      { f: "1684-09-29", t: "1797-10-17", d: "venedik" },
      { f: "1797-10-17", t: "1798-10-23", d: "fransa-cumhuriyet" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-21", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Vonitsa",
    // işgal/teslim: 1912-10-21 (veriden) → Atina 1913-11-14
    d: [
      { f: "1449-01-01", t: "1684-09-29" },
      { f: "1798-10-23", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1449-01-01", d: "bizans" },
      { f: "1684-09-29", t: "1797-10-17", d: "venedik" },
      { f: "1797-10-17", t: "1798-10-23", d: "fransa-cumhuriyet" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-21", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Aynaroz (Athos)",
    // işgal/teslim: 1912-11-02 (veriden) → Atina 1913-11-14
    d: [
      { f: "1424-01-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1424-01-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-02", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Kesendire (Kassandra)",
    // işgal/teslim: 1912-11-02 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-03-29", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-03-29", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-02", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Karaferye (Veria)",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1387-05-08", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1345-01-01", d: "bizans" },
      { f: "1345-01-01", t: "1387-05-08", d: "sirbistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Kılkış (Avrathisar)",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1383-09-19", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1345-01-01", d: "bizans" },
      { f: "1345-01-01", t: "1383-09-19", d: "sirbistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Lanzaka (Lagkadas)",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1387-04-09", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1387-04-09", d: "bizans" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Selanik",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1387-04-09", t: "1402-07-28" },
      { f: "1430-03-29", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1387-04-09", d: "bizans" },
      { f: "1402-07-28", t: "1403-06-01", d: "suleyman-celebi" },
      { f: "1403-06-01", t: "1423-09-14", d: "bizans" },
      { f: "1423-09-14", t: "1430-03-29", d: "venedik" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Vodina (Edessa)",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1392-01-15", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1345-01-01", d: "bizans" },
      { f: "1345-01-01", t: "1392-01-15", d: "sirbistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Yenice-i Vardar",
    // işgal/teslim: 1912-11-08 (veriden) → Atina 1913-11-14
    d: [
      { f: "1390-01-01", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-11-14" }
    ],
    s: [
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-08", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Aydonat (Paramythia)",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Filat (Filiates)",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Margiliç (Margariti)",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Parga",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1819-05-10", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1401-01-01", d: "bizans" },
      { f: "1401-01-01", t: "1797-10-17", d: "venedik" },
      { f: "1797-10-17", t: "1815-11-05", d: "fransa-cumhuriyet" },
      { f: "1815-11-05", t: "1819-05-10", d: "ingiltere" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Souli (Sûli)",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "Yanya",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-09", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-09", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  },

  {
    ad: "İgumenitsa (Gomenice)",
    // işgal/teslim: 1913-03-06 (veriden) → Atina 1913-11-14
    d: [
      { f: "1430-10-01", t: "1913-11-14" }
    ],
    s: [
      { f: "1281-01-01", t: "1430-10-01", d: "bizans" },
      { f: "1913-11-14", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1913-03-06", t: "1913-11-14", d: "yunanistan" } ],
    kaynak: "atina-antlasmasi"
  }

];

// ═══════════════════════════════════════════════════════════════════
// 🔴 BU ÖLÇÜMÜN ÜÇ YAN SONUCU — ikisi BAŞKA YAMALARI ETKİLİYOR
//
// ① GİRİT: Atina maddesinin gövdesi "**Girit üzerindeki Osmanlı
//    haklarından vazgeçildi**" diyor. Benim Girit yamam `v:`i
//    `1913-05-30`da bitiriyor (TDV `girit` "Londra … ve Bükreş
//    muahedeleriyle" dediği için, ve künye `girit-devleti` t:1913-05-30
//    olduğu için).
//    ⚠️ İKİ DAYANAK ÇATIŞIYOR: TDV+künye → 1913-05-30 · proje çekirdeği
//      → 1913-11-14. **ÖLÇTÜM, DEĞİŞTİRMEDİM** — Girit yaması onaylı ve
//      TDV birincil kaynak. BİLDİRİLDİ.
//
// ② EGE ADALARI: aynı gövde "**Ege adalarının statüsü ise çözümsüz
//    bırakılarak** iki devlet…" diyor ⇒ adaların Lozan'a kadar
//    çözümsüz kaldığı PROJENİN KENDİ ÇEKİRDEĞİYLE doğrulanıyor.
//    🟢 Ege yamamın `1923-07-24`ü DESTEKLENDİ.
//
// ③ BOZCAADA / İMROZ: çekirdekte `1913-11-01` **"Bozcaada ve İmroz'un
//    geri alınışı — Atina Antlaşması"** maddesi VAR.
//    🟢 ⇒ Verinin `1913-11-01`i DAYANAKSIZ DEĞİL; projenin kendi
//      kaydından geliyor. "TDV çelişkisi" diye açtığım kalem
//      KAPANABİLİR — TDV o günü anmıyor ama proje anıyor.
//    ⚠️ Ama TDV "20 Eylül 1923'te kurtarıldı" diyor ve o hâlâ
//      açıklanmadı. Kalem DARALDI, kapanmadı.
// ═══════════════════════════════════════════════════════════════════

// ============================================================================
// YER_YAMA_OK106 — parti-emrelic-0034 / H-0005: Abâdân'ın Osmanlı dönemi
// window.YER_YAMA_OK106   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 106 · 1-2 Eylül 2026 · koordinatör 1.MURAT · şartname M-1903
// ============================================================================
//
// EMRE (0034/H-0005, görsel künyesi 1546-01-01 · 29,40-31,63K / 47,04-49,58D · z7.2,
// madde "Basra'nın ilhakı ve Basra Körfezi'ne çıkış"):
//     "basra alınmış abadan hafiza ahvaz alınamamış mı"
//
// ═══════════ ÜÇ YERİN ÜÇÜ DE AYRI CEVAP ALDI — ölçüldü ═══════════
//   Abâdân  🔴 KUSUR    TDV `abadan`: "Uzun süre Osmanlı hâkimiyetinde kalan
//                       Abadan, 1847 Erzurum Antlaşması ile İran'a geçmiştir."
//                       Veride HİÇ `d:` yok ⇒ 1546-1847 arası Safevî/Afşar/
//                       Zend/Kaçar boyanıyor. BU DOSYA ONU KAPATIYOR.
//   Ahvaz   🟢 DOĞRU    TDV `huzistan`: "Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine
//                       alan Müşa'şa'lar'ın ... bağımsızlıkları, Şah İsmâil'in
//                       1508'de Bağdat seferi sırasında sona erdiyse de Safevîler
//                       bu bölgeyi kendilerine bağlı kalmak şartıyla yine onların
//                       idaresine bıraktılar." ⇒ Safevî tâbiiyeti; veri `safevi`
//                       diyor, DOĞRU. (Müşa'şa' ALT-KİMLİĞİ yok — ama o, Gürcistan
//                       vakasıyla aynı model boşluğu: yabancı tâbiiyet ifade
//                       edilemiyor. Ayrı iş; bkz. denetim/BULGU-GURCISTAN-0034.md)
//   Havîza  🟡 BULUNAMADI  TDV'de müstakil madde YOK — ölçüldü, DÖRT slug 302:
//                       `huveyze` · `havize` · `huveyzeliler` · `musasa`.
//                       `huzistan` maddesi Havîze'yi ADIYLA anmıyor.
//                       ⇒ UYDURMADIM. Kayıt bugünkü hâliyle bırakıldı.
//
// ═══════════ REÇETE BENİM DEĞİL — ve devraldığım rakamı DOĞRULADIM ═══════════
// Öneriyi UYGULAMA-3 devretmişti (M-1466): "Abadan: ~30,35K/48,28D,
// d:[{1546-01-01→1847-01-01}]". Devraldığım her parçayı ayrı ayrı ölçtüm:
//     nokta VAR MI      ✓ `Abâdân` 30,3392 · 48,3042 (öneri ~30,35/48,28 ile uyumlu)
//     TDV cümlesi       ✓ `abadan` 200, gövdesi OKUNDU, cümle birebir doğrulandı
//     1846-01-01 başı   ✓ Basra'nın kendi ilhak günü — TUTARLILIK seçimi,
//                         KAYNAK GÜNÜ DEĞİL (TDV başlangıç vermiyor: "uzun süre")
//     1847-01-01 sonu   🔴 DEĞİŞTİRDİM → 1847-05-31 (aşağıda)
//
// 🔴 VE BİR KUSUR BULDUM: önerideki `1847-01-01` günü, külliyatta KARŞILIĞI
//    OLMAYAN bir gündü. `data/olaylar*.js` (Değişmez 2'nin çekirdek evreni) içinde
//    1847 tarihli MADDE YOKTU — sıfır; en yakınlar 1846-11-29 ve 1848-09-01.
//    Öneri olduğu gibi uygulansaydı Değişmez 2'de AÇIK bir kırılma doğar ve
//    tavanı SIFIR olan o denetim yayını durdururdu.
//    ⇒ Önce madde yazıldı: `data/olaylar_ok106.js` — 1847-05-31, II. Erzurum
//      Antlaşması, kaynak TDV `sattularap` ("1847 Mayısında Erzurum'da imzalanan").
//    ⇒ Gün de 01-01'den 05-31'e çekildi: TDV AY veriyor, ve `data/devletler.js`
//      `kacar` künyesi bu günü ZATEN taşıyor. İki kayıt artık aynı günü söylüyor.
//
// ⚠️ İKİ DOSYA BİRLİKTE BAĞLANIR. Yalnız bu dosya inerse 1847-05-31 maddesiz bir
//    kırılma olur; yalnız öteki inerse kırılmasız bir madde olur. İkisi de
//    denetimde görünür, ikisi de gereksiz.
//
// ═══════════ BAĞLAMIYORUM ═══════════
// `girdi.py` · `index.html` koordinatörde ve koşu sırasında KİLİTLİ.
// Bu dosya YAZILDI, uygulanmadı. — "Anlık görüntü YAZABİLİRSİN der,
// BAĞLAYABİLİRSİN demez."
// ============================================================================

window.YER_YAMA_OK106 = [

  {
    ad: "Abâdân",
    // MEVCUT: `d:` alanı HİÇ YOK · s: ilhanli→…→safevi 1508-01-01→1736-03-08→afsar→
    //         zend→kacar 1796-01-01→1923-10-29 (zincir BÖLÜNMEZ, `d:` üstüne biner)
    // 🟢 UYGULAYICI SINANDI — ve ÖNGÖRÜM ÇÜRÜDÜ, olduğu gibi yazıyorum.
    //    Beklentim: "`_sahiplik_uygula.py` var olan bir `d:[` dizisini değiştirir;
    //    Abâdân'da `d:` alanı HİÇ YOK ⇒ inemez." KURU KOŞU bunu ÇÜRÜTTÜ:
    //        Abâdân   yerlesimler.js   d+kaynak      → İNEN (83) kovasında
    //    Alan yokken de yazabiliyormuş. Ölçmeden yazsaydım koordinatöre
    //    olmayan bir engel bildirmiş olacaktım.
    d: [
      { f: "1546-01-01", t: "1847-05-31" }
    ],
    kaynak: "abadan",
    neden: "BAŞLANGIÇ 1546-01-01 bir KAYNAK GÜNÜ DEĞİL, TUTARLILIK seçimidir ve " +
           "açıkça yazılıyor: TDV yalnız \"uzun süre\" diyor, gün/yıl vermiyor. " +
           "Basra'nın kendi ilhak günü alındı — Abâdân, Basra'nın 13 km " +
           "güneydoğusundaki Şattülarap ağzıdır ve aynı seferin konusudur; başka " +
           "bir gün yazmak limanı eyalet merkezinden koparıp yapay bir pencere " +
           "üretirdi. O gün külliyatta ZATEN var (`olaylar_ek5.js`, \"Basra'nın " +
           "ilhakı ve Basra Körfezi'ne çıkış\", ±0 gün). " +
           "BİTİŞ 1847-05-31 TDV'nin verdiği AY (Mayıs 1847) + projenin kendi " +
           "`devletler.js` kaydıyla uyumlu; maddesi `data/olaylar_ok106.js`te " +
           "birlikte yazıldı. Yeni gün doğurulmadı: iki kırılmanın ikisi de maddeli. " +
           "KAYNAK CÜMLELERİ (gövdeleri okundu): TDV abadan — \"Uzun süre Osmanlı " +
           "hâkimiyetinde kalan Abadan, 1847 Erzurum Antlaşması ile İran'a " +
           "geçmiştir.\" · TDV huzistan — 1847 Erzurum ile \"Şattülarap " +
           "Osmanlılar'da kalmak üzere bu yerler Kaçarlar'a bırakıldı.\" · " +
           "TDV sattularap — \"1847 Mayısında Erzurum'da imzalanan\" antlaşma."
  }

];

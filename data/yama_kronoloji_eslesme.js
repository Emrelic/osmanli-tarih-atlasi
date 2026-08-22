// =====================================================================
// KRONOLOJİ EŞLEŞME YAMASI — 531 görünmez maddenin devlet seçiciye girmesi
// Oturum: KRONOLOJİ EŞLEŞME (eski ad: OPUS HAZIR KITA 54) · 22 Ağustos 2026
// Görevi veren: OSMANGAZİ (koordinatör), tahta M-1059
//
// 🔴 BU DOSYA VERİ DEĞİL, BİR YAMA TARİFİDİR. `index.html`e BAĞLANMAZ.
//    Uygulayıcı: koordinatör (`data/devletler.js` ve `js/app.js` ONUN).
//
// ─────────────────────────────────────────────────────────────────────
// 🔴 AD DEĞİŞTİ — ve sebebi ölçülmüş bir ÇÖKME
//
// Koordinatör bu dosyaya `data/kronoloji_eslesme_yama.js` adını vermişti
// (M-1059). O ad ile dosya, `arac/denetle_kronoloji.py`yi ÇÖKERTTİ:
// araç `data/kronoloji_*.js` KALIBIYLA dosya topluyor ve topladığı her
// dosyanın MADDE DİZİSİ olduğunu varsayıyor (`denetle_kronoloji.py:129`,
// `m.get(a)` → `AttributeError: 'str' object has no attribute 'get'`,
// çıkış kodu 1). Yani `data/kronoloji_*.js` boş bir ad kalıbı değil,
// bir ŞEMA SÖZLEŞMESİDİR — ve bu dosya bir kronoloji değil, bir tariftir.
//
// 🟢 Yakalayan: `İTALYA ŞEHİR DEVLETLERİ KRONOLOJİ` oturumu, tahta M-1077,
//    YATAY bildirimle (`§7.1 ③`in yeni hâli). Önerdiği ad alındı.
//    ⇒ `data/yama_kronoloji_eslesme.js` → `window.YAMA_KRONOLOJI_ESLESME`
//
// 📌 VE AYNI AD İKİ AYRI TÜKETİCİYİ BİRDEN BOZUYORDU — ben yalnız birini
//    ölçmüştüm. Eski ad `KRONOLOJI_` önekiyle başladığı için `app.js:5496`
//    tarayıcısına da takılıyordu; onu dosyayı NESNE yaparak savmıştım
//    (dizinin `.length`i vardır, nesnenin yoktur ⇒ tarayıcı sessizce atlar).
//    O ölçüm doğruydu ama EVRENİ DARDI: tarayıcıyı ölçtüm, DENETİMİ ölçmedim.
//    Yeni ad iki kapıyı birden kapatıyor — hiçbir kalıba uymuyor.
//    ⚠️ Dosya yine de NESNE kalıyor: artık bir savunma değil, olduğu şey.
//    Ve `index.html`e yine BAĞLANMAZ — bu bir tarif, veri değil.
// =====================================================================

window.YAMA_KRONOLOJI_ESLESME = {

  // ═══════════════════════════════════════════════════════════════════
  // ① TABAN — kendi ölçümüm (koordinatörün sayısıyla BİREBİR tuttu)
  // ═══════════════════════════════════════════════════════════════════
  taban: {
    olcum_araci: "node — index.html'deki 112 data dosyası yüklenip app.js:5493 " +
                 "eşleme mantığı birebir tekrarlandı (regex DEĞİL, verinin kendi dili)",
    kunye_toplam: 431,
    kronoloji_dosyasi_bagli: 26,
    eslesen: { dosya: 21, madde: 2473 },
    eslesmeyen: { dosya: 5, madde: 531 },
    eslesmeyenler: {
      "KRONOLOJI_CIN":       { aranan_id: "cin",       madde: 136 },
      "KRONOLOJI_HINDISTAN": { aranan_id: "hindistan", madde: 131 },
      "KRONOLOJI_MISIR":     { aranan_id: "misir",     madde: 120 },
      "KRONOLOJI_OZBEK":     { aranan_id: "ozbek",     madde:  73 },
      "KRONOLOJI_JAPONYA":   { aranan_id: "japonya",   madde:  71 }
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // ② ÜÇ SEÇENEĞİN ÖLÇÜMÜ
  // ═══════════════════════════════════════════════════════════════════
  olcum: {

    // (a) "en temsilî gövdeye eşle"
    // ÖLÇÜT: maddenin tarihi, seçilen gövdenin `f`–`t` ömrünün DIŞINDAysa
    //        o madde kesinlikle yanlış etikete girer.
    // ⚠️ Bu bir ALT SINIRDIR: ömrün İÇİNDE kalan bir madde de başka bir
    //    siyasî yapıya ait olabilir (Edo döneminde geçen bir Ryûkyû olayı
    //    gibi). Yani gerçek zarar ölçülenden BÜYÜKTÜR, küçük değil.
    a_en_temsili_govde: {
      cin:       { govde: "qing-hanedani",       yanlis: 69,  toplam: 136, oran: "%51" },
      japonya:   { govde: "meiji-japonya",       yanlis: 43,  toplam:  71, oran: "%61" },
      hindistan: { govde: "babur-imparatorlugu", yanlis: 39,  toplam: 131, oran: "%30" },
      misir:     { govde: "misir-kavalali",      yanlis: 33,  toplam: 120, oran: "%28" },
      ozbek:     { govde: "buhara",              yanlis:  3,  toplam:  73, oran: "%4"  },
      TOPLAM:    { yanlis: 187, toplam: 531, oran: "EN AZ %35" },
      // 🔴 Koordinatörün şartnamesi "dörtte üçü yanlış etikete girer" (%75)
      //    diyordu. Ölçüm EN AZ %35 diyor. Fark bildirildi (`§7.1 ④`).
      //    İkisi de aynı yöne işaret ediyor; taban benimki olacak.
      koordinator_tahmini: "%75",
      olculen: "en az %35"
    },

    // (c) "dosyaları hanedan hanedan böl"
    // 🔴 İKİ YAPISAL ENGEL — ikisi de ölçüldü, ikisi de (c)'yi imkânsız kılar
    c_hanedan_hanedan_bol: {
      engel_1_BOSLUK: {
        nerede: "KRONOLOJI_MISIR",
        madde: 24,
        aralik: "1517-05-19 → 1915-01-14",
        aciklama:
          "Bu 24 madde HİÇBİR hanedan künyesinin ömrüne düşmüyor, çünkü " +
          "anlattıkları dönemde Mısır bir OSMANLI EYALETİDİR. `memluk` 1517'de " +
          "bitmiş, `misir-kavalali` 1805'te başlamıştır; arada 288 yıl var ve " +
          "o yılların künyesi YOKTUR — olamaz da, çünkü o toprak Osmanlı'dır.",
        ornekler: [
          "1517-05-19  İskenderiye'nin teslimi — Mısır fethinin tamamlanması",
          "1525-01-01  İbrahim Paşa Kanunnâmesi — Mısır'ın ikili idare çerçevesi",
          "1711-01-01  Büyük Fitne — Kāsımiyye-Zülfikāriyye çatışması",
          "1915-01-14  Birinci Kanal Harekâtı"
        ],
        hukum:
          "Bölme, her maddenin bir hanedana ait olduğunu VARSAYAR. Bu 24 madde " +
          "ülkeye aittir, hiçbir hanedana değil. ⇒ (c) bunları KOYACAK YER BULAMAZ."
      },
      engel_2_CAKISMA: {
        nerede: "KRONOLOJI_OZBEK",
        madde: 71,
        toplam: 73,
        aciklama:
          "73 maddenin 71'i BİRDEN ÇOK gövdenin ömrüne düşüyor: Buhara " +
          "(1500-1920) · Hîve (1512-1920) · Hokand (1710-1876) EŞZAMANLIDIR, " +
          "ardışık DEĞİL. Bölme, hanedanların birbirini İZLEDİĞİNİ varsayar; " +
          "bu dosyada üçü aynı anda sahnededir ve maddelerin çoğu " +
          "aralarındaki ilişkiyi anlatır (Buhara-Hîve savaşı hangi dosyaya?).",
        hukum: "⇒ (c) burada bir maddeyi ikiye bölmek zorunda kalır."
      },
      diger_cakismalar: { cin: 23, hindistan: 31, japonya: 8 },
      ek_maliyet:
        "Beş dosya → ~27 dosya; her biri index.html'e ayrı satır. Bu proje " +
        "bağlanmamış veri dosyasını DÖRT KEZ yaşadı (KRONOLOJI-SARTNAME §5)."
    },

    // (b) DEVLETLER'e ülke ölçekli künye ekle — ÖNERİLEN
    b_sentetik_ulke_kunyesi: {
      cakisma_denetimi:
        "Beş id de (cin · japonya · hindistan · misir · ozbek) BUGÜN boşta: " +
        "DEVLETLER'de `id:` olarak YOK · `harita:` değeri olarak YOK · " +
        "yerleşim verisinde `s:{d:...}` olarak 0 dönem ⇒ HİÇBİRİ BOYANMAZ.",
      hayalet_devlet_riski:
        "SIFIR — `§3.5` hayalet devlet, haritada BOYANAN bir gövdeyi anlatır. " +
        "`harita:` alanı YAZILMADIĞI ve veride kullanılmadığı sürece bu " +
        "künyeler harita katmanına hiç girmez, yalnız devlet seçicide görünür.",
      olculen_yan_etki: {
        arac: "arac/renk_fark.py — künye anahtarı = (harita or id)",
        dal: "kunye_var_renk_yok",
        simdi: 30,
        yama_sonrasi_ONGORU: 35,
        kusur_mu:
          "HAYIR. `renk_fark.py:143` bu dalı `False` ile işaretliyor — yani " +
          "'sessiz borç' kovası, kusur kovası değil. Kusur olan iki dal " +
          "('VERİDE kullanılıyor, rengi/künyesi YOK') DEĞİŞMEZ, çünkü bu beş " +
          "künye veride hiç kullanılmıyor.",
        // 🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILDI (`§11`). Yama uygulandıktan sonra
        //    `py -c "import sys;sys.path.insert(0,'arac');import renk_fark"`
        //    ile 35 çıkmalı. ÇIKMAZSA bir varsayımım yanlış demektir.
        ongoru_damgasi: "30 → 35, başka hiçbir dal değişmeyecek"
      },
      emsal: {
        guclu: "OSMANLI_SYNTH — `js/app.js:5548`, `{id,ad,harita}`. Ülke " +
               "ölçekli, kronolojisi ayrı yerden gelen, seçicide sabit duran " +
               "bir künye. Tam olarak bu desen. ⚠️ Ama JS tarafında, " +
               "DEVLETLER'in İÇİNDE değil.",
        zayif: "`izlanda` — `data/devletler.js:4495`, `tur:\"ulke\"`. " +
               "`tur:\"ulke\"` değerinin KABUL EDİLDİĞİNİ gösterir. ⚠️ Ama " +
               "izlanda gerçek bir siyasî yapıdır ve `harita:\"izlanda\"` ile " +
               "BOYANIR ⇒ 'boyanmayan kapsayıcı künye' emsali DEĞİLDİR. " +
               "Bunu zayıf emsal diye işaretliyorum, güçlü diye sunmuyorum."
      },
      niye_bu:
        "Beş dosyanın BEŞİ DE kendi başlığında zaten bunu söylüyor: " +
        "kronoloji_cin.js: 'Üç hanedan TEK dosyada — kullanıcı \"Çin\" " +
        "seçtiğinde üçünü birden görmeli.' · kronoloji_japonya.js: 'TEK dosya, " +
        "kullanıcı \"Japonya\" seçip bütün akışı görmeli.' · " +
        "kronoloji_hindistan.js: aynı cümle. ⇒ (b) yeni bir tasarım DEĞİL, " +
        "verinin yazarlarının zaten varsaydığı tasarımın karşılığını " +
        "DEVLETLER'de kurmaktır. Eksik olan veri değil, KARŞILIĞIYDI."
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // ③ ÖNERİ VE SOMUT YAMA — koordinatör uygular
  // ═══════════════════════════════════════════════════════════════════
  oneri: "b — DEVLETLER'e ülke ölçekli kapsayıcı künye ekle",

  // ---- 3.1 `data/devletler.js`e EKLENECEK BEŞ KAYIT -------------------
  //
  // 🔴 `f` ve `t` KULLANICIYA GÖRÜNÜR — `app.js` `kartCiz()` bu ikisini
  //    kartta "1281 – 1923" diye basıyor. Bu yüzden aralıklar uydurulmadı:
  //    her biri O DOSYANIN KENDİ BAŞLIK BEYANIDIR (dosyanın yazarı ne
  //    dediyse o), ve ölçülen madde aralığıyla karşılaştırıldı.
  //
  // 🔴 `harita:` alanı BİLEREK YOK — yazılırsa künye harita katmanına girer
  //    ve `§3.5` hayalet devlet üretir. YAZMAYIN.
  //
  // 🔴 `tur:"ulke-kapsayici"` BİLEREK app.js'in `DEVLET_TUR_ADI` sözlüğünde
  //    OLMAYAN bir değer: o sözlük 13 tür sayıyor ve dizin penceresi yalnız
  //    onları basıyor ⇒ bu beş kapsayıcı DEVLETLER DİZİNİNDE görünmez,
  //    yalnız devlet seçicide görünür. İstenen tam budur: kapsayıcı bir
  //    "devlet" değildir, bir okuma birimidir.
  //    (Görünsün istenirse sözlüğe tek satır eklemek yeter.)
  //
  // `baskent:` yazılmadı — kapsayıcının tek başkenti yok (Çin'in başkenti
  // Hanbalık→Nanjing→Pekin diye değişti). `kartCiz()` boş başkenti zaten
  // sorunsuz atlıyor.
  kunye_ekle: [
    { id: "cin",
      ad: "Çin (Yuan · Ming · Qing)",
      tur: "ulke-kapsayici",
      bolge: "dogu-asya",
      f: "1281-01-01", t: "1923-10-29",
      _beyan: "kronoloji_cin.js başlığı: 'Kapsam: 1281-1923 (atlas ufku)'",
      _olculen_madde_araligi: "1281-01-01 → 1923-01-26",
      _kapsadigi: ["song", "jin-hanedani", "yuan-hanedani", "ming-hanedani",
                   "guney-ming", "dashun", "qing-hanedani", "taiping",
                   "cin-cumhuriyeti"] },

    { id: "japonya",
      ad: "Japonya (Kamakura → Meiji)",
      tur: "ulke-kapsayici",
      bolge: "dogu-asya",
      f: "1281-01-01", t: "1923-10-29",
      _beyan: "kronoloji_japonya.js başlığı: 'Kamakura'nın sonu → Kenmu → " +
              "Muromachi/Sengoku → Azuchi-Momoyama → Edo/Tokugawa → Meiji, 1281-1923'",
      _olculen_madde_araligi: "1281-08-15 → 1923-09-01",
      _kapsadigi: ["kamakura", "kenmu", "muromachi", "azuchi-momoyama",
                   "edo-bakufu", "meiji-japonya"] },

    { id: "hindistan",
      ad: "Hindistan (Delhi Sultanlığı → Bâbürlü → İngiliz Hindistanı)",
      tur: "ulke-kapsayici",
      bolge: "guney-asya",
      f: "1281-01-01", t: "1923-10-29",
      _beyan: "kronoloji_hindistan.js başlığı: 'Delhi Sultanlığı → Bâbürlü " +
              "İmparatorluğu → bölgesel sultanlıklar/Hindu devletleri → " +
              "İngiliz Hindistanı, 1281-1923'",
      _olculen_madde_araligi: "1290-06-13 → 1849-03-29",
      _kapsadigi: ["delhi-sultanligi", "babur-imparatorlugu", "sur-hanedani",
                   "ingiliz-hindistani"] },

    { id: "misir",
      ad: "Mısır (Osmanlı Eyaleti · Kavalalı Hanedanı)",
      tur: "ulke-kapsayici",
      bolge: "misir-sudan",
      f: "1517-01-22", t: "1922-01-01",
      _beyan: "kronoloji_misir.js başlığı: 'OSMANLI MISIRI ve KAVALALI " +
              "HANEDANI — KRONOLOJİ · 1517-1922'",
      _olculen_madde_araligi: "1517-01-22 → 1915-01-14",
      _uyari: "`t` yılı dosyanın BEYANIDIR; günü BULUNAMADI, `§4` gereği " +
              "YYYY-01-01 yazıldı. Uydurulmuş bir gün değildir.",
      _kapsadigi: ["memluk (son günleri)", "OSMANLI EYALETİ 1517-1798 (künyesi YOK)",
                   "fransiz-misir-seferi", "misir-kavalali"] },

    { id: "ozbek",
      ad: "Mâverâünnehir Özbek Hanlıkları (Buhara · Hîve · Hokand)",
      tur: "ulke-kapsayici",
      bolge: "orta-asya",
      f: "1500-01-01", t: "1920-09-02",
      _beyan: "kronoloji_ozbek.js başlığı: 'MÂVERÂÜNNEHİR ÖZBEK HANLIKLARI " +
              "(Şeybânî/Buhara · Canoğulları · Mangıt · Hîve · Hokand), 1500-1920'",
      _olculen_madde_araligi: "1500-01-01 → 1920-09-02",
      _kapsadigi: ["buhara", "hive", "hokand"] }
  ],

  // ---- 3.2 `js/app.js` — GEREKMİYOR ----------------------------------
  // `KRONOLOJI_ID_OZEL` sözlüğüne HİÇBİR ŞEY eklenmesi gerekmez: eşleme
  // `anahtar.slice(10).toLowerCase()` ile zaten "cin/japonya/hindistan/
  // misir/ozbek" üretiyor. Künye eklendiği an beşi de KENDİLİĞİNDEN
  // bağlanır. Yamanın `app.js`e dokunması GEREKMİYOR — ölçüldü.
  app_js_degisikligi: "GEREKMİYOR",

  // ---- 3.3 UYGULAMA SONRASI DOĞRULAMA — üç ölçüm ---------------------
  dogrulama: [
    "① Tarayıcı konsolunda 'KRONOLOJI_* eşlenemedi' UYARISI HİÇ ÇIKMAMALI " +
    "(bugün 5 satır basıyor).",
    "② Konsolda 'derin kronoloji bindirildi' satırı 21 → 26 kimlik saymalı, " +
    "ve şu beşi içermeli: cin (136) · hindistan (131) · misir (120) · " +
    "ozbek (73) · japonya (71).",
    "③ Devlet seçicide beş yeni satır görünmeli; tıklanınca kart " +
    "'1281 – 1923' tipi aralığı ve liste dolu kronolojiyi göstermeli. " +
    "🔴 BOŞ liste açılıyorsa bindirme olmamıştır — `odakKur` yalnız " +
    "`d.kronoloji && d.kronoloji.length` olanları listeler, yani boş " +
    "görünmesi imkânsızdır; boş görünüyorsa BAŞKA bir kusur vardır."
  ],

  // ═══════════════════════════════════════════════════════════════════
  // ④ YAN BULGULAR — görevin dışında, ölçerek bulundu, düzeltilmedi
  // ═══════════════════════════════════════════════════════════════════
  yan_bulgular: [
    {
      ad: "AYNI KUSURUN SESSİZ YARISI — 550 madde künyesinin ömrü DIŞINDA",
      olcum:
        "Bugün EŞLEŞEN 21 dosyanın 2473 maddesinden 550'si (%22), bağlandığı " +
        "künyenin `f`–`t` aralığının dışında kalıyor.",
      en_agir: {
        "iran":       "107/107 (%100) — künye `iran` = Pehlevî 1925-2026, " +
                      "kronoloji ise 1295-1923. Maddelerin TAMAMI künye " +
                      "doğmadan önce. Kartta kullanıcıya '1925 – 2026' yazıyor.",
        "italya":     "164/192 (%85) — künye 'İtalya Krallığı' 1861'de başlıyor, " +
                      "kronoloji 1240'ta.",
        "macaristan": "83/127 (%65) — künye 1526'da bitiyor ('bağımsız dönem'), " +
                      "kronoloji 1918'e kadar sürüyor.",
        "fransa":     "91/184 (%49) — künye 'Fransa Krallığı' 1792'de bitiyor, " +
                      "kronoloji 1923'e kadar sürüyor.",
        "lehistan":   "63/140 (%45) — künye 1569-1795, kronoloji 1295-1918."
      },
      cikarim:
        "🔴 ÖLÇÜM ile ÇIKARIM ayrı: yukarısı ölçüm. Çıkarımım şu — 531 " +
        "görünmez madde bu kusurun GÜRÜLTÜLÜ yarısıdır; konsol onları " +
        "bağırıyor. 550 madde ise SESSİZ yarısı: hiçbir uyarı vermiyorlar, " +
        "çünkü eşleşme BAŞARILI sayılıyor — yalnız yanlış künyeye. " +
        "Yani seçenek (a), varsayımsal bir zarar değil; bu projede ZATEN " +
        "YAYINDA olan ve 550 maddeyi etkileyen ölçülmüş bir zarardır.",
      benim_isim_degil:
        "Bu beş dosya bana verilmedi ve DOKUNMADIM. Aynı (b) çaresi " +
        "`iran`/`italya`/`macaristan`/`fransa`/`lehistan` için de " +
        "kurulabilir; kararı koordinatörün."
    },
    {
      ad: "DİZİN PENCERESİNDE SESSİZ KAYIP — 5 künye hiç listelenmiyor",
      olcum:
        "`app.js:3486` `DEVLET_TUR_ADI` sözlüğü 13 tür sayıyor; DEVLETLER'de " +
        "16 ayrı `tur:` değeri var. Sözlükte olmayan üç tür: " +
        "`isyan` (3 künye: taiping · dashun · san-fan) · `ulke` (1: izlanda) · " +
        "`emirlik` (1: bahavelpur). Toplam 5 künye dizinde HİÇ GÖRÜNMÜYOR.",
      not:
        "Bu, o satırın hemen üstündeki yorumun anlattığı `sehzadelik` " +
        "vakasının AYNISI ve dördüncü tekrarıdır. Yorum 'bu sözlükte yoktu' " +
        "diyor — ve bugün üç tür daha yok.",
      benim_isim_degil: "`js/app.js` koordinatörün. Rapor edildi, dokunulmadı."
    },
    {
      ad: "`etiket:` alanı GÖVDE KİMLİĞİ TAŞIMIYOR — dördüncü bir seçenek YOK",
      olcum:
        "kronoloji_cin.js başlığı 'Hangi hanedan olduğu `d:` içinde ve " +
        "`etiket:`te belirtiliyor' diyor. Ölçüldü: `d:` alanı 2-4 cümlelik " +
        "ANLATIMDIR (gövde kimliği değil), `etiket:` ise KONU etiketidir " +
        "(askeri · siyaset · bilim…). İstisna KRONOLOJI_OZBEK: orada " +
        "`buhara` (43) · `hive` (21) · `hokand` (17) etiketleri gerçekten " +
        "künye id'sidir.",
      cikarim:
        "Madde başına gövde eşlemesi (dördüncü bir seçenek) BUGÜN yalnız " +
        "1 dosyada mümkün, 4 dosyada değil — çünkü bilgi ANLATIM METNİNİN " +
        "İÇİNDE, yapılandırılmış bir alanda değil. `§11`in on birinci kusur " +
        "sınıfı: 'bir `if` ile sorulamıyorsa kayıt vardır, VERİ YOKTUR.' " +
        "Bu yüzden (b)'yi öneriyorum; madde-başına eşleme ileride " +
        "`devlet:` diye YENİ bir alan yazılırsa mümkün olur."
    }
  ],

  // ═══════════════════════════════════════════════════════════════════
  // ⑤ ÖLÇMEDİKLERİM — açıkça (`§7.1 ④`)
  // ═══════════════════════════════════════════════════════════════════
  olcmediklerim: [
    "Maddelerin İÇERİĞİNİ okumadım. (a)'nın zararını yalnız TARİH ile " +
    "ölçtüm; 'ömrün içinde ama başka gövdeye ait' maddeleri saymadım. " +
    "Bu yüzden %35 bir ALT SINIRDIR, kesin değer değil.",
    "Yamayı UYGULAMADIM — `data/devletler.js` koordinatörün (`§7`). " +
    "`kunye_var_renk_yok` 30 → 35 öngörüsü ÖLÇÜLMEDİ, ÖNGÖRÜDÜR.",
    "Tarayıcıda ÇALIŞTIRMADIM. Eşleme mantığını node'da birebir tekrarladım, " +
    "ama gerçek sayfada devlet seçicinin nasıl göründüğünü GÖRMEDİM.",
    "Beş kapsayıcının `bolge:` değerlerini var olan bölge adlarından aldım; " +
    "bölge katmanının bunları nasıl kullandığını ÖLÇMEDİM."
  ]
};

// ============================================================================
// GÖRSEL MADDE — kronoloji maddelerine bağlı görseller (pilot)
// ============================================================================
// Yazan: KITA 24, 13 Eylül 2026. Şartname: `oturumlar/KITA-24-GORSEL-HATTI-0045.md`
// (paket 0045, H-0004 · H-0005). Şema: `denetim/SEMA-GORSEL-MADDE-0913.md`.
//
// 🔴 BU DOSYA `index.html`in statik yükünde YOK (EKOKUMA/MERAK deseni,
//    app.js:6505) — ayrı bir yükleyici KITA 12'den istendi, henüz KURULMADI.
//    Kayıtlar burada DOĞRU ve DOĞRULANMIŞ ama arayüzde GÖRÜNMÜYOR.
//
// ── BAĞLAMA — EKOKUMA'nın `olay:[...]` deseniyle BİREBİR AYNI ──────────────
// Her kaydın `olay:[...]` alanı, `data/olaylar*.js`teki bir `t:` değeriyle
// BİREBİR eşleşir (app.js:6521 `ekKartBagliMi` ile aynı mantık — birebir
// string eşleşmesi, yoksa buton/görsel hiç çıkmaz). Dört kaydın SEKİZ
// `olay:` tarihi de o maddeler OKUNARAK doğrulandı, uydurulmadı.
//
// ── PİLOT — 5 istenen paşadan 4'ü ═══════════════════════════════════════
// Sokullu Mehmed · Barbaros Hayreddin · Pargalı İbrahim · Merzifonlu Kara
// Mustafa YAZILDI. **Köprülü Mehmed Paşa BULUNAMADI** — tek aday
// (`File:Mehmedpasha.jpg`, Wikimedia Commons) "Unknown author, Unknown
// date, source: wikipédia.hu" taşıyor; ne TDV ne akademik bir kaynakla
// doğrulanabildi. Şartnamenin kendi kırmızı çizgisi ("gerçek dönem
// portresi yoksa bulunamadı") gereği YAZILMADI — kaynağı zayıf bir
// görseli "portre" diye sunmak, uydurmaktan iyi değildir (`§4`).
//
// ── LİSANS — HER DÖRDÜ `denetim/ARAC-GORSEL-LISANS-0913.py` İLE SINANDI ────
//    py denetim/ARAC-GORSEL-LISANS-0913.py <4 gorsel_kaynak URL'si>
//    ⇒ 4/4 KABUL (kategori tabanlı, Commons sayfası CANLI okunarak — bkz.
//      betiğin kendi başlığı, ilk varsayım [Template: bağlantısı] SINANIP
//      ÇÜRÜDÜ, kategori bağlantısına geçildi, D010).
//
// ── KESİNLİK — dürüst beyan, hiçbiri "temsilî" DEĞİL ────────────────────────
//    Sokullu    cagdas               1568-69, o GÖREVDEYKEN yapılmış Osmanlı
//                                    saray minyatürü (Nüzhetü'l-ahbâr)
//    Barbaros   cagdas               yak. 1550, aynı yüzyıl — AMA ressamı
//                                    "Floransa Okulu, anonim"; hayattan mı
//                                    yapıldığı DOĞRULANAMADI (eser alanında
//                                    açık)
//    Pargalı İbrahim  donem-sonrasi-tasvir   1596 Avrupa gravürü, ölümünden
//                                    60 yıl sonra, ressamı onunla hiç
//                                    karşılaşmadı
//    Merzifonlu Kara Mustafa  donem-sonrasi-tasvir  yak. 1696, ölümünden
//                                    13 yıl sonra, Wien Museum'un kendi
//                                    etiketi "Posthumous Portrait"
// 19. yüzyıl hayalî tasviri (H-0005'in yasakladığı sınıf) YOK.
//
// ── GÖRSEL DOSYALARI — yerel, indirildi ve KÜÇÜLTÜLDÜ ───────────────────────
// Kaynak müze taramaları 1-6 MB; `assets/portreler/`in ortalama 66 KB'lık
// konvansiyonuna yaklaştırmak için 700px genişliğe indirgendi (Pillow,
// JPEG q82). 4 dosya toplam 636 KB — ONERI-0907'nin "20 görsel ≈ 1,3 MB"
// tahminiyle aynı büyüklük mertebesinde (ölçüldü, uydurulmadı).

window.GORSEL_MADDE = [
  {
    id:            "1566-09-07-sokullu-mehmed-pasa-portresi",
    tur:           "portre",
    // PAKET-A2 13 Eyl (0027/H-0005 "görsel maddeyle ilgili olsun"): "1566-09-07" ÇIKARILDI.
    //   O gün tek madde "Zigetvar — Kanunî'nin vefatı"; app.js find() ilk eşleşeni aldığı
    //   için bu Sokullu portresi Kanuni albümünü (1520-09-30-suleyman1-albumu) GİZLİYORDU.
    olay:          ["1573-03-07"],
    url:           "assets/gorseller/1566-09-07-sokullu-mehmed-pasa-portresi.jpg",
    baslik:        "Sokullu Mehmed Paşa — taht minyatürü (1568-69)",
    gorsel_alt:    "Sokullu Mehmed Paşa'nın tahtta oturur biçimde betimlendiği, 1568-69 tarihli Nüzhetü'l-ahbâr minyatürü",
    eser:          "Nüzhetü'l-ahbâr der sefer-i Sîgetvâr, fol. 41b (Topkapı Sarayı Müzesi Kütüphanesi, H. 1339)",
    sanatci:       "Nakkaş Osman'a atfedilir (kesin değil)", ic_not_sanatci:"eski sanatci: bulunamadı — bazı kaynaklar Nakkaş Osman'a atfediyor, kesin değil",
    yil:           "1568-1569",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sokollu_Mehmed_Pasha_enthroned_(portrait)._N%C3%BCzhet%C3%BC%E2%80%99l-a%E1%B8%ABb%C4%81r_der_sefer-i_S%C4%ABgetv%C4%81r_1568%E2%80%9369_(Topkap%C4%B1_Palace_Museum_Library_H_1339,_fol._41b).jpg",
    kesinlik:      "cagdas"
  },
  {
    id:            "1538-09-27-barbaros-hayreddin-pasa-portresi",
    tur:           "portre",
    // PAKET-A2 13 Eyl (0027/H-0005): "1538-09" ÇIKARILDI — o gün tek madde "Preveze Deniz
    //   Zaferi"; bu portre olayın kendi tablosunu (1538-09-28-preveze-deniz-zaferi) GİZLİYORDU.
    //   "1538-08-01" (Barbaros'un Kuzey Ege seferi, o günün tek maddesi) kaldı.
    olay:          ["1538-08-01"],
    url:           "assets/gorseller/1538-09-27-barbaros-hayreddin-pasa-portresi.jpg",
    baslik:        "Barbaros Hayreddin Paşa portresi (16. yy)",
    gorsel_alt:    "Barbaros Hayreddin Paşa'yı elinde asa ile yarı boy gösteren, 16. yüzyıl ortasına tarihlenen tuval üzerine yağlıboya portre",
    eser:          "Hayreddin Barbarossa (1466/83-1546), Ottoman admiral — tuval üzerine yağlıboya, 99x76,8 cm",
    sanatci:       "Anonim (Floransa Okulu'na atfen)", ic_not_sanatci:"eski sanatci: Anonim (Floransa Okulu'na atfen) — hayattan mı yapıldığı doğrulanamadı",
    yil:           "yaklaşık 1550",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Hayreddin_Barbarossa.jpg",
    kesinlik:      "cagdas"
  },
  {
    id:            "1523-06-27-pargali-ibrahim-pasa-portresi",
    tur:           "portre",
    olay:          ["1523-06-27", "1536-03-15"],
    url:           "assets/gorseller/1523-06-27-pargali-ibrahim-pasa-portresi.jpg",
    baslik:        "Pargalı İbrahim Paşa — Boissard gravürü (1596)",
    gorsel_alt:    "Pargalı İbrahim Paşa'yı gösteren, Jean-Jacques Boissard'ın 1596 tarihli 'Vitae et Icones Sultanorum Turcicorum' adlı yapıtındaki gravür",
    eser:          "Vitae et Icones Sultanorum Turcicorum (Frankfurt) — gravür",
    sanatci:       "Jean-Jacques Boissard",
    yil:           "1596",
    lisans:        "PD-old-100",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Pargal%C4%B1_Ibrahim_Pasha_(166346097).jpg",
    kesinlik:      "donem-sonrasi-tasvir"
  },
  {
    id:            "1676-11-05-merzifonlu-kara-mustafa-pasa-portresi",
    tur:           "portre",
    olay:          ["1676-11-05", "1683-12-25"],
    url:           "assets/gorseller/1676-11-05-merzifonlu-kara-mustafa-pasa-portresi.jpg",
    baslik:        "Merzifonlu Kara Mustafa Paşa — ölüm sonrası portre (Wien Museum)",
    gorsel_alt:    "Merzifonlu Kara Mustafa Paşa'nın vefatından sonra yapılmış, Wien Museum'da bulunan yarı boy tuval portresi",
    eser:          "Posthumous Portrait of Kara Mustafa Paşa — tuval üzerine yağlıboya, 75x49 cm, Wien Museum",
    sanatci:       "Ressamı bilinmiyor", ic_not_sanatci:"eski sanatci: bulunamadı (kimliği belirsiz ressam)",
    yil:           "yaklaşık 1696",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Kara_Mustafa_Pasha.jpg",
    kesinlik:      "donem-sonrasi-tasvir"
  },

  // ── PİLOT MADDE GÖRSELLERİ — 5 istenenden 4'ü (§④) ────────────────────
  // Tanzimat Fermanı BULUNAMADI: okunuş törenini gösteren dönem/dönem-
  // sonrası bir PD görsel ARANDI, bulunamadı (yalnız modern/telifli
  // tasvirler çıktı). Uydurmadım, yazmadım.
  {
    id:            "1453-05-29-istanbul-fethi-minyaturu",
    tur:           "madde",
    olay:          ["1453-05-29"],
    url:           "assets/gorseller/1453-05-29-istanbul-fethi-minyaturu.jpg",
    baslik:        "İstanbul kuşatması — 1455 sonrası Fransız minyatürü",
    gorsel_alt:    "Konstantinopolis kuşatmasını gösteren, Jean Le Tavernier'in 1455'ten kısa süre sonra yaptığı tam sayfa minyatür",
    eser:          "Le Voyage d'Outremer (Bertrandon de la Broquière, çev. Jean Miélot) — BnF, MS fr. 9087, fol. 207v",
    sanatci:       "Jean Le Tavernier",
    yil:           "1455 sonrası (olaydan 2 yıl kadar sonra)",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Le_si%C3%A8ge_de_Constantinople_(1453)_by_Jean_Le_Tavernier_after_1455.jpg",
    kesinlik:      "cagdas"
  },
  {
    id:            "1538-09-28-preveze-deniz-zaferi",
    tur:           "madde",
    olay:          ["1538-09"],
    url:           "assets/gorseller/1538-09-28-preveze-deniz-zaferi.jpg",
    baslik:        "Preveze Deniz Zaferi — 19. yy Osmanlı tuvali",
    gorsel_alt:    "Preveze Deniz Savaşı'nı gösteren, Osmanlı Deniz Müzesi'nde bulunan 1866 tarihli tablo",
    eser:          "Preveze Deniz Muharebesi tablosu — Deniz Müzesi, İstanbul",
    sanatci:       "Osman Nuri Paşa ve Ohannes (Hovhannes) Umed Behzad",
    yil:           "1866",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Battle_of_Preveza_(1538).jpg",
    kesinlik:      "donem-sonrasi-tasvir"
    // 🔴 D-benzeri tuzak yakalandı: dosya adı "Battle_of_Preveza_(1538)"
    //   olayla AYNI YILI taşıyor ama gövde/meta 1866 diyor — ressamlardan
    //   biri (Behzad) 1874'te öldü, yani tablo olaydan 328 YIL SONRA.
    //   Dosya ADINA değil SAYFA İÇERİĞİNE bakıldı (`ordu`/`saray` tuzağı,
    //   §4② — burada TDV değil Commons, ama aynı ders).
  },
  {
    id:            "1683-09-12-ikinci-viyana-kusatmasi",
    tur:           "madde",
    olay:          ["1683-09-12"],
    url:           "assets/gorseller/1683-09-12-ikinci-viyana-kusatmasi.jpg",
    baslik:        "II. Viyana Kuşatması — 1685 tarihli gravür",
    gorsel_alt:    "Viyana kuşatması ve kurtarılışını, Kara Mustafa ve Sultan IV. Mehmed'in portreleriyle birlikte gösteren 1685 tarihli gravür",
    eser:          "Der Turckische Schau-Platz erofnet — Hamburg, T. von Wiering, 1685 (LOC 2002713351)",
    sanatci:       "Gravürcüsü bilinmiyor", ic_not_sanatci:"eski sanatci: bulunamadı (baskı yayıncısı bilgisi var, gravürcü adı yok)",
    yil:           "1685 (olaydan 2 yıl sonra)",
    lisans:        "PD-old-100",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Siege_and_relief_of_Vienna_in_1683,_with_portraits_of_Ernst_Rudiger_von_Starhemberg,_Emperor_Leopold_I,_Sultan_Mehmed_IV,_Kara_Mustafa,_Count_of_Waldeck,_Elector_of_Saxony,_John_III_LCCN2002713351.jpg",
    kesinlik:      "cagdas"
  },
  {
    id:            "1718-01-01-lale-devri-sultan-ahmed",
    tur:           "madde",
    olay:          ["1718-01-01", "1730-09-25"],
    url:           "assets/gorseller/1718-01-01-lale-devri-sultan-ahmed.jpg",
    baslik:        "Lâle Devri — Levni minyatürü, Surnâme-i Vehbî",
    gorsel_alt:    "III. Ahmed'in şehzadelerin sünnet şenliğinde halka altın para saçtığını gösteren, Levni'nin Surnâme-i Vehbî'sinden bir minyatür",
    eser:          "Surnâme-i Vehbî — Topkapı Sarayı Müzesi Kütüphanesi (1720 şenliği)",
    sanatci:       "Levni (Abdülcelil Çelebi)",
    yil:           "1720-1732 arası (şenlik 1720, albüm birkaç yıl içinde tamamlandı)",
    lisans:        "PD-old",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:The_Sultan_strews_gold_coins.jpg",
    kesinlik:      "cagdas"
  },

  // ── ALBÜM — paket 0046 H-0002, Emre'nin görsel talebi ──────────────────
  // "Bu maddede minyatürleri gösteren bir albüm ek okuma olarak eklenebilir."
  // Şema: SEMA-GORSEL-MADDE-0913.md "ALBÜM" bölümü. Osman Gazi minyatürü
  // ARANDI, tek aday (`Osman I miniature by Nakkaş Osman.jpg`) hem lisans
  // sınavında RED çıktı (CC-BY-SA-4.0) hem de alternatifi
  // (`unitedamericanmuslim.org` kaynaklı, yazar/tarih "Bilinmiyor") zayıf
  // kaynaklıydı — İKİSİ DE KONMADI.
  {
    id:      "1578-01-02-hunername-albumu",
    tur:     "albüm",
    olay:    ["1578-01-02|Hünernâme", "1588-01-01|Hünernâme"],  // PAKET-A2 13 Eyl: ayırıcısız hâli 1578-01-02'de 'Urus Mirza', 1588-01-01'de Galce İncil · Taşkent · Zimba maddelerine de düşüyordu
    baslik:  "Hünernâme minyatür albümü — Nakkaş Osman ve ekibi",
    gorseller: [
      {
        url:           "assets/gorseller/1578-01-02-hunername-murad1.jpg",
        baslik:        "I. Murad — Hünernâme minyatürü",
        gorsel_alt:    "I. Murad'ı bir zafer sonrası dinlenirken gösteren Hünernâme minyatürü",
        eser:          "Hünernâme, TSMK Hazine 1523",
        sanatci:       "Nakkaş Osman ve ekibi",
        yil:           "1584-1588",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Murad_I_Rests_After_a_Triumph._H%C3%BCnername_(1584%E2%80%931588)._TSMK_H.1523.jpg",
        kesinlik:      "cagdas"
      },
      {
        url:           "assets/gorseller/1578-01-02-hunername-bayezid1.jpg",
        baslik:        "I. Bayezid — Hünernâme minyatürü",
        gorsel_alt:    "I. Bayezid'i gösteren, Hünernâme'nin fol. 96b sayfasındaki minyatür",
        eser:          "Hünernâme, TSMK Hazine 1523, fol. 96b",
        sanatci:       "Nakkaş Osman ve ekibi",
        yil:           "1584",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Bayezid_I._H%C3%BCner-n%C4%81me_(1584),_Library_of_the_Topkapi_Palace_Museum,_Hazine_1523,_f._96b.jpg",
        kesinlik:      "cagdas"
      },
      {
        url:           "assets/gorseller/1578-01-02-hunername-murad2.jpg",
        baslik:        "II. Murad — Hünernâme minyatürü",
        gorsel_alt:    "II. Murad'ı gösteren, Hünernâme'nin fol. 143b sayfasındaki minyatür",
        eser:          "Hünernâme, TSMK Hazine 1523, fol. 143b",
        sanatci:       "Nakkaş Osman ve ekibi",
        yil:           "1584-1588",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Murad_II._H%C3%BCnername,_folio_143b._TSMK_Hazine_1523_(created_1584-1588).jpg",
        kesinlik:      "cagdas"
      },
      {
        url:           "assets/gorseller/1578-01-02-hunername-suleyman.jpg",
        baslik:        "Kanûnî Sultan Süleyman — Hünernâme minyatürü (Mohaç)",
        gorsel_alt:    "Kanûnî Sultan Süleyman'ı Mohaç Savaşı sırasında gösteren Hünernâme minyatürü",
        eser:          "Hünernâme, TSMK Hazine 1524",
        sanatci:       "Nakkaş Osman ve ekibi",
        yil:           "1584",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Suleyman_the_Magnificent_(portrait)_at_the_Battle_of_Mohacs_in_1526._Hunername,_1584_(TSMK_H.1524).jpg",
        kesinlik:      "cagdas"
      }
    ]
  },

  // ══ GORSEL-DALGA2 (13 Eylül 2026) · paket 0045 H-0001 — PADİŞAH ALBÜMLERİ ══
  // Taslak: denetim/TASLAK-PADISAH-ALBUM-0913.json (KITA 22). Rapor:
  // denetim/GORSEL-DALGA2-0913.md. Her öğenin lisansı İNDİRMEDEN HEMEN ÖNCE
  // Commons dosya sayfasından yeniden ölçüldü (API extmetadata + kategori;
  // denetim/ARAC-GORSEL-LISANS-0913.py VE düzeltilmiş kopyası 0913b).
  // Her görsel indirildikten sonra AÇILIP GÖZLE GÖRÜLDÜ; gorsel_alt ona
  // göre yazıldı (taslaktaki üç yanlış tarif düzeltildi — rapor §3).
  // `olay:` = padişahın CÜLUS ve VEFAT maddelerinin `t:` değerleri,
  // data/olaylar*.js + kronoloji*.js üzerinde node eval ile BİREBİR ölçüldü.
  // 🔴 ÇAKIŞMA: "1566-09-07" (Kanûnî'nin vefatı) Sokullu portre kaydında da
  //    var; app.js `find()` İLK eşleşeni aldığı için o maddede Sokullu
  //    portresi görünür, bu albüm GÖRÜNMEZ (rapor §4). Sıra değiştirilmedi.
  {
    id:      "1451-02-18-mehmed2-albumu",
    tur:     "albüm",
    kisi_id: "mehmed2",
    olay:    ["1451-02-18", "1481-05"],
    baslik:  "II. Mehmed (Fâtih) albümü — portre, minyatür, tuğra, cami",
    gorseller: [
      {
        url:           "assets/portreler/mehmed2.jpg",
        baslik:        "Gentile Bellini'nin II. Mehmed portresi",
        gorsel_alt:    "Taşlı bir kemerin altında profilden gösterilen, beyaz kavuklu, sakallı, kürk yakalı kırmızı kaftanlı II. Mehmed; kemerin iki yanında üçer taç",
        eser:          "Sultan II. Mehmed portresi",
        sanatci:       "Gentile Bellini",
        yil:           "1480",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Bellini,_Gentile_-_Sultan_Mehmet_II.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(Yorck_Project), PD-old-100-expired"
      },
      {
        url:           "assets/gorseller/1451-02-18-mehmed2-gul-koklayan.jpg",
        baslik:        "Gül koklayan II. Mehmed",
        gorsel_alt:    "Bağdaş kurmuş oturan, beyaz kavuklu, kızıl sakallı II. Mehmed'in sağ elindeki gülü kokladığı, sol elinde mendil tuttuğu minyatür portre",
        eser:          "Topkapı Sarayı Albümleri, Hazine 2153, vr. 10a",
        sanatci:       "Nakkaş Sinan Bey (Commons beyanı)",
        yil:           "15. yüzyıl sonu",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sarayi_Album_10a.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100-expired)"
      },
      {
        url:           "assets/gorseller/1451-02-18-mehmed2-tugra-1468.jpg",
        baslik:        "II. Mehmed'in 1468 tarihli tuğrası",
        gorsel_alt:    "Kâğıt üzerine koyu mürekkeple çekilmiş II. Mehmed tuğrası: üç dikey çizgi ve solda iç içe iki kavis",
        eser:          "Mülkname (1468)",
        sanatci:       "Bilinmeyen nişancı", ic_not_sanatci:"eski sanatci: bulunamadı — Commons 'bilinmeyen nişancı' diyor",
        yil:           "1468",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Mehmed_II_Tughra_1468.png",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD, PD-old, PD-Ottoman"
      },
      {
        url:           "assets/gorseller/1451-02-18-mehmed2-fatih-camii-1880ler.jpg",
        baslik:        "Fâtih Camii, 1880-1893 (1766 depreminden sonraki yapı)",
        gorsel_alt:    "Abdullah Frères'in albüm sayfasındaki Fâtih Camii fotoğrafı: ağaçlı bahçenin ardında merkezî kubbe ve iki minare, sayfanın üstünde Osmanlıca, altında Fransızca başlık",
        eser:          "II. Abdülhamid fotoğraf albümleri (Commons şablonu PD-Abdul Hamid)",
        sanatci:       "Abdullah Frères",
        yil:           "1880-1893",
        lisans:        "PD",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Fatih_Camii_1880-1893_y%C4%B1llar%C4%B1_r1.jpg",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913b) · kategori PD-Abdul_Hamid · asıl alet 0913 RED verdi — önek kusuru, YANLIŞ NEGATİF",
        not:           "Fotoğraf Fâtih'in yaptırdığı ilk yapıyı GÖSTERMEZ: kronolojide 1766-05-01 'Büyük İstanbul depremi ve Fâtih Camii'nin yıkılması' maddesi var; bugünkü yapı depremden sonra yeniden yapılandır (KITA 22 taslağının TDV aktarımı — bu oturum TDV'yi ayrıca OKUMADI)."
      }
    ]
  },
  {
    id:      "1512-04-24-selim1-albumu",
    tur:     "albüm",
    kisi_id: "selim1",
    olay:    ["1512-04-24", "1520-09-21"],
    baslik:  "I. Selim (Yavuz) albümü — portre, Selîmnâme, tuğra, Hünernâme",
    gorseller: [
      {
        url:           "assets/portreler/selim1.jpg",
        baslik:        "I. Selim portresi",
        gorsel_alt:    "Siyah püsküllü büyük beyaz kavuklu, uzun bıyıklı I. Selim'in yeşil kaftan ve kırmızı üstlükle göğüs hizasından portresi",
        eser:          "", ic_not_eser:"eski eser: bulunamadı",
        sanatci:       "Konstantin Kapıdağlı (Commons beyanı)",
        yil:           "", ic_not_yil:"eski yil: bulunamadı — Commons tarih alanı '16. yüzyıl' diyor, sanatçı alanıyla ÇELİŞİYOR",
        lisans:        "PD-old-70",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Yavuz_Sultan_Selim_Han_(cropped).jpg",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-70)"
      },
      {
        url:           "assets/gorseller/1512-04-24-selim1-selimname-mengli-giray.jpg",
        baslik:        "I. Selim ve Kırım Hanı Mengli Giray (Selîmnâme)",
        gorsel_alt:    "Mavi-beyaz desenli bir otağın altında karşılıklı oturan iki hükümdar, önlerinde sürahiler; iki yanda ayakta duran maiyet",
        eser:          "Şükrî-i Bitlisî, Selîmnâme (National Library of Israel, Ms. Yah. Ar. 1116)",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "1524",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Selim_I_with_his_father-in-law_Mengli_Giray_I_(miniature)._Sel%C4%ABm-n%C4%81ma,_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB,_1524_(National_Library_of_Israel,_Ms._Yah._Ar._1116).jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100-expired)"
      },
      {
        url:           "assets/gorseller/1512-04-24-selim1-tugra-1519.jpg",
        baslik:        "I. Selim'in Bosna halkına yazılmış Slavca bir belgedeki tuğrası",
        gorsel_alt:    "Kiril harfli Slavca bir belgenin başında yer alan, altın yaldızlı ve çiçek bezemeli I. Selim tuğrası",
        eser:          "British Library, Add. 8160",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "Nisan 1519",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Tughra,_or_cipher,_of_the_Ottoman_Sultan_Selim_I,_above_Slavonic_text_addressed_to_the_inhabitants_of_Bosnia._Created_in_Constantinople_(modern-day_Istanbul),_dated_April_1519.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100)"
      },
      {
        url:           "assets/gorseller/1512-04-24-selim1-hunername-kaplan-avi.jpg",
        baslik:        "Hünernâme'de I. Selim'in av sahnesi",
        gorsel_alt:    "Tepelik bir arazide kara bir atın üstünde ok ve yayla ilerleyen beyaz kaftanlı hükümdar; solda benekli beyaz bir yırtıcı hayvan, önde ceylanlar, bir av köpeği ve kıvrılan bir dere; üstte Osmanlıca metin",
        eser:          "Hünernâme I, vr. 207b",
        sanatci:       "Nakkaş Osman (Commons: Ustad Osman)",
        yil:           "1584",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Hunername-I-207b.png",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100)",
        not:           "Olaydan ~70 yıl sonra yapılmış saray tasviri."
      },
      {
        url:           "assets/gorseller/1512-04-24-selim1-hunername-timsah.jpg",
        baslik:        "Hünernâme'de I. Selim ve Nil kıyısında öldürülen timsahlar",
        gorsel_alt:    "Nehir kıyısında kırmızı kaftanlı I. Selim ayakta duruyor; önünde öldürülmüş iki timsah, nehirde kırmızı bir sandalda üç kişi, solda maiyet",
        eser:          "Hünernâme",
        sanatci:       "Nakkaş Osman (Commons beyanı)",
        yil:           "", ic_not_yil:"eski yil: bulunamadı — Commons '1500'ler' diyor",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sultan_Selim_Hunts_a_Crocodile_in_Egypt.jpg",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100)",
        not:           "Sahne bir saray tasviridir; olayın kendisi TDV'den DOĞRULANMADI (KITA 22 taslağı)."
      }
    ]
  },
  {
    id:      "1520-09-30-suleyman1-albumu",
    tur:     "albüm",
    kisi_id: "suleyman1",
    olay:    ["1520-09-30", "1566-09-07"],
    baslik:  "I. Süleyman (Kanûnî) albümü — portre, tuğra, minyatürler, Süleymaniye, Atmeydanı alayı",
    gorseller: [
      {
        url:           "assets/portreler/suleyman1.jpg",
        baslik:        "Titian çevresinden I. Süleyman portresi",
        gorsel_alt:    "Profilden gösterilen, çok büyük beyaz kavuklu, bıyıklı I. Süleyman; kırmızı kaftan, siyah üstlük ve elinde bir asa",
        eser:          "", ic_not_eser:"eski eser: bulunamadı",
        sanatci:       "Titian çevresi (Commons beyanı)",
        yil:           "1530'lar",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:EmperorSuleiman.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100-expired)",
        not:           "Avrupalı bir ressamın çağdaş tasviri; padişahı görerek yapıldığı ÖLÇÜLMEDİ."
      },
      {
        url:           "assets/gorseller/1520-09-30-suleyman1-tugra.jpg",
        baslik:        "I. Süleyman'ın tezhipli tuğrası",
        gorsel_alt:    "Mavi ve altın yaldızlı çiçek motifleriyle bezenmiş büyük I. Süleyman tuğrası; altında altın mürekkeple bir satır yazı",
        eser:          "Tuğra (Metropolitan Museum of Art koleksiyonu)",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "yaklaşık 1555-1560",
        lisans:        "PD",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Tughra_Suleiman.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD, PD_Old, CC-Zero"
      },
      {
        url:           "assets/gorseller/1520-09-30-suleyman1-suleymanname-mohac.jpg",
        baslik:        "Süleymannâme'den I. Süleyman (Mohaç sahnesinden ayrıntı)",
        gorsel_alt:    "Siyah sorguçlu büyük beyaz kavuklu, bıyıklı I. Süleyman'ın yakın ayrıntısı; yanında yay ve ok demeti",
        eser:          "Süleymannâme — Mohaç Savaşı çift sayfası (Commons dosyası yalnız padişahı gösteren kesit)",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "1558",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:1526-Sultan_Suleiman_(portrait)_during_the_Battle_of_Mohacs_(double_page)-Suleymanname.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100-expired)"
      },
      {
        url:           "assets/gorseller/1520-09-30-suleyman1-hunername-sunnet.jpg",
        baslik:        "Hünernâme'de şehzadelerin sünnet töreni için Atmeydanı'na geliş",
        gorsel_alt:    "Çift sayfalık minyatür: solda atlı I. Süleyman ve maiyeti saray avlusuna giriyor, sağda atlılar, çalgıcılar ve kalabalık bir alay",
        eser:          "Hünernâme",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "1584-1588",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Suleiman_the_Magnificent%27s_arrival_at_the_palace_in_Atmeydan%C4%B1_for_the_circumcision_ceremony_of_his_princes_Mustafa,_Mehmed,_and_Selim_(H%C3%BCnern%C3%A2me).jpg",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100-expired)",
        not:           "KITA 22 taslağı (TDV mustafa-celebi): sünnet 1530; tasvir ~55 yıl sonra."
      },
      {
        url:           "assets/gorseller/1520-09-30-suleyman1-suleymaniye-1853.jpg",
        baslik:        "Süleymaniye Camii'nin revaklı girişi, yaklaşık 1853",
        gorsel_alt:    "Kemerli, sütunlu bir revak ve geniş basamaklar; basamaklarda oturan ve ayakta duran birkaç kişi — sepya tonlu erken dönem fotoğraf",
        eser:          "Süleymaniye Mosque, Constantinople (tuz baskı)",
        sanatci:       "James Robertson",
        yil:           "yaklaşık 1853",
        lisans:        "PD-old",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:James_Robertson_S%C3%BCleymaniye_Mosque_c1853.jpg",
        kesinlik:      "donem-sonrasi-tasvir",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-old",
        not:           "Gerçek yapının fotoğrafı; caminin HANGİ girişini gösterdiği ÖLÇÜLMEDİ (Commons yalnız 'Süleymaniye Mosque' diyor). KITA 22 taslağındaki 'kubbeler ve minareler' tarifi görüntüyle TUTMUYORDU, düzeltildi."
      },
      {
        url:           "assets/gorseller/1520-09-30-suleyman1-atmeydani-alayi-1553.jpg",
        baslik:        "Atmeydanı'ndan geçen I. Süleyman alayı (1553 tahta baskı)",
        gorsel_alt:    "Tahta baskı friz: atlı I. Süleyman, yaya yeniçeriler ve atlılarla Atmeydanı'ndan geçiyor; arkada dikilitaş, sütunlar, kubbeli yapılar ve şehir silueti",
        eser:          "Ces Moeurs et fachons de faire de Turcz frizi — Metropolitan Museum of Art (DP146524)",
        sanatci:       "Pieter Coecke van Aelst'ten sonra",
        yil:           "1553",
        lisans:        "CC0",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Procession_of_Sultan_S%C3%BCleyman_through_the_Atmeidan,_from_the_frieze_Ces_Moeurs_et_fachons_de_faire_de_Turcz_(Customs_and_Fashions_of_the_Turks)_MET_DP146524.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913b) · kategori CC-Zero · Commons API LicenseShortName 'CC0' · asıl alet 0913 RED verdi — CC-Zero adını tanımıyor, YANLIŞ NEGATİF"
      }
    ]
  },
  {
    id:      "1623-09-10-murad4-albumu",
    tur:     "albüm",
    kisi_id: "murad4",
    olay:    ["1623-09-10", "1640-02-09"],
    baslik:  "IV. Murad albümü — iki dönem minyatürü",
    gorseller: [
      {
        url:           "assets/gorseller/1623-09-10-murad4-bagdat-seferi.jpg",
        baslik:        "IV. Murad — dönem minyatürü",
        gorsel_alt:    "Sorguçlu, tüylü kırmızı kavuklu, siyah sakallı IV. Murad; sarı kaftan, kürklü kırmızı üstlük ve belinde hançerle yarım boy minyatür portre",
        eser:          "Topkapı Sarayı Müzesi, H 2134, vr. 1r (Commons beyanı)",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı",
        yil:           "1623-1640 arası",
        lisans:        "PD-old-100",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:IV_Murat.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-100)",
        not:           "KITA 22 taslağı 'Bağdat seferine giden, zırhlı, ATLI IV. Murad' diyordu; Commons dosyası yarım boy bir kesit — at da zırh da görünmüyor. Tarif düzeltildi, dosya adı taslaktaki gibi kaldı."
      },
      {
        url:           "assets/gorseller/1623-09-10-murad4-sofra.jpg",
        baslik:        "Maiyetiyle tahtta IV. Murad",
        gorsel_alt:    "Tahtta oturan, elinde kadeh tutan IV. Murad; önünde yemek dolu yuvarlak bir sofra ve iki şamdan, çevresinde ayakta duran maiyet ve saz çalan bir çalgıcı",
        eser:          "", ic_not_eser:"eski eser: bulunamadı",
        sanatci:       "Osmanlı minyatür ressamı (adı bilinmiyor)", ic_not_sanatci:"eski sanatci: bulunamadı — Commons 'Osmanlı minyatür ressamı'",
        yil:           "17. yüzyılın ilk yarısı",
        lisans:        "PD-old-70",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Murat_IV_with_dishes.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-70)"
      }
    ]
  },
  {
    id:      "1876-08-31-abdulhamid2-albumu",
    tur:     "albüm",
    kisi_id: "abdulhamid2",
    olay:    ["1876-08-31", "1918-02-10"],
    baslik:  "II. Abdülhamid albümü — portre, tuğra, fotoğraflar",
    gorseller: [
      {
        url:           "assets/portreler/abdulhamid2.jpg",
        baslik:        "II. Abdülhamid portresi",
        gorsel_alt:    "Fesli, gür sakallı II. Abdülhamid'in apoletli gri-mavi askerî ceket ve nişanlarla göğüs hizasından boyalı portresi",
        eser:          "", ic_not_eser:"eski eser: bulunamadı",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı — Commons 'bilinmeyen yazar'",
        yil:           "1899",
        lisans:        "PD-old-70",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sultan_Gazi_Abd%C3%BCl_Hamid_II_-_%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86_%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D9%8A_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%AD%D9%85%D9%8A%D8%AF_%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.png",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Art_(PD-old-70), PD-Ottoman"
      },
      {
        url:           "assets/gorseller/1876-08-31-abdulhamid2-tugra-sami-efendi.jpg",
        baslik:        "Hattat Sami Efendi'nin çektiği II. Abdülhamid tuğrası",
        gorsel_alt:    "Siyah zemin üzerine altınla yazılmış, çerçeveli II. Abdülhamid tuğrası; sağda bir çiçek demeti ve 1298 tarihi, solda hattatın imzası",
        eser:          "", ic_not_eser:"eski eser: bulunamadı",
        sanatci:       "Mehmed Sami Efendi",
        yil:           "1298 / 1881",
        lisans:        "PD",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sami_Efendi_-_Tughra_of_Abdulhamid_II.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD, PD_Old"
      },
      {
        url:           "assets/gorseller/1876-08-31-abdulhamid2-balmoral-1867.jpg",
        baslik:        "Şehzade Abdülhamid, Balmoral Şatosu, 1867",
        gorsel_alt:    "Siyah-beyaz fotoğraf: fesli, bıyıklı genç Abdülhamid'in işlemeli, apoletli ve kuşaklı uniformayla, elinde eldiven ve yanında kılıçla koltukta oturduğu portre",
        eser:          "Abdul Hamid II in Balmoral Castle in 1867 (Commons şablonu PD-Bain — Library of Congress, Bain koleksiyonu)",
        sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı — Commons 'bilinmeyen yazar'",
        yil:           "1867 (Commons beyanı)",
        lisans:        "PD",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Abdul_Hamid_II_in_Balmoral_Castle_in_1867.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913b) · kategori PD-Bain · Commons API 'Public domain' · asıl alet 0913 RED verdi — önek kusuru, YANLIŞ NEGATİF",
        not:           "Cülusundan 9 yıl önce, şehzadeyken (Sultan Abdülaziz'in 1867 Avrupa seyahati). Fotoğrafın Balmoral'da çekildiği Commons başlığının beyanı — ÖLÇÜLMEDİ. Wikimedia hız sınırı yüzünden 500 px standart küçük resim alındı."
      },
      {
        url:           "assets/gorseller/1876-08-31-abdulhamid2-cuma-selamligi.jpg",
        baslik:        "Yıldız (Hamidiye) Camii'nde cuma selamlığı, 1880-1893",
        gorsel_alt:    "Kubbeli, tek minareli Hamidiye Camii'nin önünde sıra sıra askerler, atlılar ve arabalarla cuma selamlığı töreni; ön planda demir parmaklıklı bahçe kapısı",
        eser:          "II. Abdülhamid fotoğraf albümleri (Commons şablonu PD-Abdul Hamid) — 'Cérémonie du Sélamlik', no. 694",
        sanatci:       "Abdullah Frères",
        yil:           "1880-1893",
        lisans:        "PD",
        gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Cuma_selaml%C4%B1%C4%9F%C4%B1_Abd%C3%BCl_Hamid_II_Hamidiye_Mosque_1.jpg",
        kesinlik:      "cagdas",
        lisans_olcum:  "KABUL (0913b) · kategori PD-Abdul_Hamid · asıl alet 0913 RED verdi — önek kusuru, YANLIŞ NEGATİF"
      }
    ]
  },

  // ══ GORSEL-DALGA2 · paket 0045 H-0002 — İMAR MADDELERİNE MİMARİ GÖRSEL ══
  // Taslak: denetim/TASLAK-MIMARI-GORSEL-0913.json (KITA 23; 3 aday) + bu
  // oturumun Commons araması (Sultanahmet · Selimiye · Nuruosmaniye).
  // 🔴 `olay: []` olan iki kayıt BİLEREK BAĞLANMADI: maddelerinin `t:`si
  //    "1566-01-01" ve o gün kronolojide ÜÇ madde var (Mostar Köprüsü ·
  //    Mihrimah Camii · Naksa Dukalığı). app.js `find()` ilk kaydı üç
  //    maddenin ÜÇÜNDE de gösterirdi — Naksa maddesinde Mostar köprüsü.
  //    Hedef gün `bekleyen_olay`da; madde güne çekilince oraya taşınır.
  {
    id:            "1550-06-01-suleymaniye-camii",
    tur:           "mimari",
    olay:          ["1550-06-01", "1557-10-16"],
    url:           "assets/gorseller/1550-06-01-suleymaniye-camii.jpg",
    baslik:        "Süleymaniye Camii — photochrom, yaklaşık 1890-1900",
    gorsel_alt:    "Renklendirilmiş photochrom baskıda Süleymaniye Camii'nin yan cephesi: kademeli kubbeler, revaklı galeriler ve şerefeli uzun minareler",
    eser:          "Photochrom baskı — Library of Congress Prints & Photographs Division",
    sanatci:       "", ic_not_sanatci:"eski sanatci: bulunamadı — Commons fotoğrafçı belirtmiyor",
    yil:           "yaklaşık 1890-1900",
    lisans:        "PD-US",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:S%C3%BCleymaniye_Mosque,_Istanbul.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD, PD_US, PD_US_Government",
    not:           "Commons sayfası ABD dışında kamu malı olmayabileceğini yazıyor; Türkiye telif hukuku ÖLÇÜLMEDİ (KITA 23 taslağı)."
  },
  {
    id:            "1566-01-01-mostar-koprusu-1900",
    tur:           "mimari",
    olay:          ["1566-01-01|Mostar"],
    url:           "assets/gorseller/1566-01-01-mostar-koprusu-1900.jpg",
    baslik:        "Mostar Köprüsü (özgün yapı), 1890-1905",
    gorsel_alt:    "Renkli photochrom baskı: taş döşeli bir sokaktan görülen, Neretva üzerindeki tek kemerli Mostar Köprüsü, kıyıdaki taş evler ve arkada bir dağ",
    eser:          "Photochrom baskı no. 16793 P.Z. — 'Mostar mit der alten Narentabrücke'",
    sanatci:       "Photoglob / Detroit Publishing baskısı", ic_not_sanatci:"eski sanatci: bulunamadı — Photoglob / Detroit Publishing baskısı, fotoğrafçı bilinmiyor",
    yil:           "1890-1905 arası",
    lisans:        "PD",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Mostar_Alte_Narentabruecke_1900.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-Detroit, PD-US, PD_Switzerland_(old-unknown)",
    not:           "1993'te yıkılmadan önceki ÖZGÜN köprüyü gösterir, 2004 yeniden yapımını değil."
  },
  {
    id:            "1566-01-01-mihrimah-sultan-camii-edirnekapi",
    tur:           "mimari",
    olay:          ["1566-01-01|Edirnekapı"],
    url:           "assets/gorseller/1566-01-01-mihrimah-sultan-camii-edirnekapi.jpg",
    baslik:        "Edirnekapı Mihrimah Sultan Camii — kesit ve plan (Gurlitt, 1912)",
    gorsel_alt:    "Mimari rölöve levhası: solda caminin kubbeli kesiti (Querschnitt), sağda avlulu zemin planı (Grundriss); üstte '20,c Moschee der Mihrimah, Edirne Kapu' başlığı",
    eser:          "Cornelius Gurlitt'in Konstantinopolis mimarisi yayınından levha 20c",
    sanatci:       "Cornelius Gurlitt (1850-1938) — levhada ayrıca bir çizer imzası var, OKUNAMADI",
    yil:           "1912",
    lisans:        "PD-old-80",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Mihrimah_Sultan_Mosque_Edirnekapi_Gurlitt_1912.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-old-80-expired",
    not:           "KITA 23 taslağı bunu 'fotoğraf' diye tarif ediyordu — görüntü açılınca bir ÇİZİM (kesit + plan) çıktı. Lisans Gurlitt'in ölümüne göre; levhadaki ikinci imzanın sahibi ve ölüm yılı ÖLÇÜLMEDİ."
  },
  {
    id:            "1575-03-01-selimiye-camii-edirne",
    tur:           "mimari",
    olay:          ["1575-03-01"],
    url:           "assets/gorseller/1575-03-01-selimiye-camii-edirne.jpg",
    baslik:        "Edirne Selimiye Camii, 1920",
    gorsel_alt:    "Cam negatiften siyah-beyaz fotoğraf: dört uzun minaresi ve merkezî kubbesiyle Selimiye Camii, önünde alçak ahşap evler ve sağda kubbeli küçük bir kâgir yapı",
    eser:          "'Andrinople — la célèbre mosquée du sultan Sélim' (Bibliothèque nationale de France, Gallica btv1b9033769g)",
    sanatci:       "Agence de presse Meurisse (Commons beyanı)",
    yil:           "1920",
    lisans:        "PD",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Andrinople_-_la_c%C3%A9l%C3%A8bre_mosqu%C3%A9e_du_sultan_S%C3%A9lim_-_btv1b9033769g.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD, PD-1996, PD_France",
    not:           "Yalnız 1575-03-01'e ('Selimiye Camii tamamlandı') bağlandı; 1568-01-01 ('inşaatın başlaması') kronolojide BEŞ maddeyle paylaşılıyor, oraya bağlamak görseli Hollanda/İsveç/Lehistan maddelerine de taşırdı."
  },
  {
    id:            "1609-08-09-sultanahmet-camii",
    tur:           "mimari",
    olay:          ["1609-08-09", "1616-06-09"],
    url:           "assets/gorseller/1609-08-09-sultanahmet-camii.jpg",
    baslik:        "Sultan Ahmed Camii ve Atmeydanı, yaklaşık 1880",
    gorsel_alt:    "Sepya tonlu fotoğraf: geniş Atmeydanı'nın ardında altı minaresi ve kademeli kubbeleriyle Sultan Ahmed Camii; solda Dikilitaş, sağda kemer kapılı kâgir bir yapı, meydanda birkaç yaya",
    eser:          "'Mosquée du Sultan Ahmed' — Library of Congress (LCCN 2003677072)",
    sanatci:       "Abdullah Frères",
    yil:           "1880 (Commons beyanı)",
    lisans:        "PD-old-100",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Mosque%C3%A9_du_Sultan_Ahmed_-_Abdullah_Fr%C3%A8res._LCCN2003677072.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-old-100-expired"
  },
  {
    id:            "1749-01-19-nuruosmaniye-camii",
    tur:           "mimari",
    olay:          ["1749-01-19", "1755-12-05"],
    url:           "assets/gorseller/1749-01-19-nuruosmaniye-camii.jpg",
    baslik:        "Nuruosmaniye Camii, 1888",
    gorsel_alt:    "Sepya tonlu fotoğraf: Nuruosmaniye Camii'nin büyük kubbesi, kemerli pencereli kasnağı ve iki minaresi; önde kemerli bir revak ve altında duran kalabalık bir grup",
    eser:          "'Mosquée Nouri-Osmanié' — Library of Congress (LCCN 2004666781)",
    sanatci:       "Sébah & Joaillier",
    yil:           "1888 (Commons beyanı)",
    lisans:        "PD-old-100",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Mosqu%C3%A9e_Nouri-Osmani%C3%A9_-_S%C3%A9bah_%26_Joaillier._LCCN2004666781.jpg",
    kesinlik:      "donem-sonrasi-tasvir",
    lisans_olcum:  "KABUL (0913 + 0913b) · kategori PD-old-100-expired"
  },

  // ══ PAKET-A2 (13 Eylül 2026) · 0044/H-0020 Bâkî · 0034/H-0044 Hâfız Osman · 0027/H-0005 ══
  // Rapor: denetim/PAKET-A2-EKOKUMA-0913.md. 9 kayıt · 9 yeni dosya (hepsi ≤ 400 KB, ~2,9 MB).
  // LİSANS: 9/9 KABUL — denetim/ARAC-GORSEL-LISANS-0913b.py İKİ KEZ, birbirinden bağımsız
  // koşuldu (araştıran oturum + birleştiren oturum). BULUNAMADI: Sultânî altını (0032/H-0010 —
  // Commons'taki II. Mehmed sikkeleri CC-BY-SA; tek KABUL aday 178 px ve padişahı belirsiz) ·
  // Otranto 1480 (tek CC0 aday 2024 tarihli bir plaket fotoğrafı, olay görseli değil).
  // 🔴 DOSYA ADI TUZAĞI: "View of the siege of Vienna, 1529.jpg" açılınca alt metni 1532 dedi;
  //    indirilen dosya SİLİNDİ, yerine Beham'ın çağdaş tasviri kondu.
  // Ayırıcısız bağlanan üç kayıt (İnebahtı 5 · Mohaç 3 · Rodos 2 madde) o günün bütün
  // maddelerinde görünür — hepsi aynı olayın kopyası olduğu için BİLEREK.
{
  "id": "1566-09-30-baki-divani-yazmasi-met",
  "tur": "madde",
  "olay": [
    "1566-09-30",
    "1566-09-01"
  ],
  "url": "assets/gorseller/1566-09-30-baki-divani-yazmasi-met.jpg",
  "baslik": "Bâkî Dîvânı'nın resimli bir nüshasından yaprak (16. yy son çeyreği)",
  "gorsel_alt": "Minyatür: surlarla çevrili bir şehrin kapısından giren Osmanlı alayı; önde beyaz sarıklı atlı komutanlar ve tüfekli askerler, kulede boru ve davul çalan müzisyenler, surların ardında renkli evler, bir kubbe ve iki minare; resmin üstünde ve altında ikişer satır Türkçe beyit",
  "eser": "\"Ottoman Army Entering a City\" — Bâkî (Mahmud Abdülbâkî) Dîvânı'nın resimli nüshasından bir yaprak, Metropolitan Museum of Art, 45.174.5 (Bequest of George D. Pratt, 1935)",
  "sanatci": "", "ic_not_sanatci": "eski sanatci: bulunamadı — MET yalnız eserin şairini (Bâkî) anıyor, nakkaş adı yok",
  "yil": "16. yüzyılın son çeyreği (MET beyanı; Bâkî hayattayken)",
  "lisans": "CC0",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:%22Ottoman_Army_Entering_a_City%22,_Folio_from_a_Divan_of_Mahmud_%60Abd_al-Baqi_MET_DP246521.jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori CC-Zero · Commons API LicenseShortName 'CC0' · MET Open Access API isPublicDomain: True (object 450587)",
  "not": "Görsel Bâkî'yi, cülûsiyeyi ya da Kanûnî mersiyesini GÖSTERMEZ: şairin dîvânının resimli bir nüshasındaki başka bir sahnedir. Commons'taki aynı yaprağın bir başka kopyası sahneyi '1590'da Safevî şehzadesi Haydar Mirza'nın İstanbul'a girişi' diye tanımlıyor — MET başlığı bunu söylemiyor, DOĞRULANMADI. Bâkî'nin kendisini gösteren iki aday elendi: 'Bâkî Diwan.jpeg' (BnF Supplément turc 356, 293x600 px; lisans aleti RED — kabul kategorisi yok; yazmanın Bâkî Dîvânı olduğu da BnF kaydından doğrulanamadı) ve 'The poet Bâkî among his fellow poets.jpg' (PD-Art + CC-BY-SA-4.0 çift beyan → RED; kaynağı 1986 tarihli bir kitaptan tarama, yazma adı yok). İki maddeye birlikte bağlandı çünkü ikisi de aynı şairin 1566 şiirleridir."
},

{
  "id": "1695-01-01-hafiz-osman-hilye-1691",
  "tur": "madde",
  "olay": [
    "1679-01-01|Hâfız Osman",
    "1695-01-01|Hâfız Osman"
  ],
  "url": "assets/gorseller/1695-01-01-hafiz-osman-hilye-1691.jpg",
  "baslik": "Hâfız Osman'ın hilye-i şerîfi (1103 / 1691-92)",
  "gorsel_alt": "Yeşil zemin üzerine altın çiçek bezemeli pervaz içinde hilye levhası: üstte büyük harflerle besmele, ortada altın halka içinde Hz. Peygamber'in vasıflarını anlatan satırlar, dört köşede halifelerin adlarını taşıyan bulut biçimli kartuşlar, altta büyük yazıyla bir âyet ve en altta hattatın ketebe satırları; kâğıdın altında müze envanter notları",
  "eser": "Hilye-i şerîf — Chester Beatty Library, Dublin, T 559.4 (440×320 mm; kâğıt üzerine mürekkep, altın ve boya)",
  "sanatci": "Hâfız Osman (1642-1698)",
  "yil": "1103 / 1691-1692 (Commons ve CBL beyanı)",
  "lisans": "PD-Art",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Hilye_by_Hafiz_Osman,_1691-1692._Chester_Beatty_Library_T_559.4.jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-auto-expired), PD-old-100-expired",
  "not": "Hâfız Osman'ın kendi eseri (Commons 'Artwork' kaydı, CBL envanteri). 1679 maddesine de bağlandı ama o yılın ürünü DEĞİLDİR: 12 yıl sonra yazılmış, maddede anlatılan üslûbun olgun bir örneğidir. Her iki günde de başka maddeler olduğu için '|Hâfız Osman' ayırıcısı kullanıldı. Yedek aday: 'Hilye by Hafiz Osman from Sadberk Hanim Museum.jpg' (KABUL, ama Commons tarih alanı 1680, açıklaması 'c. 1670' — çelişkili, seçilmedi)."
},

{
  "id": "1513-01-01-piri-reis-dunya-haritasi",
  "tur": "madde",
  "olay": [
    "1513-01-01|Pîrî Reis"
  ],
  "url": "assets/gorseller/1513-01-01-piri-reis-dunya-haritasi.jpg",
  "baslik": "Pîrî Reis'in 1513 dünya haritası (günümüze ulaşan parça)",
  "gorsel_alt": "Kenarları yırtık, renkli harita parçası: sağda İber yarımadası ve Batı Afrika kıyısı, solda Güney Amerika'nın doğu kıyısı ve Karayip adaları; üzerinde pusula gülleri, kırmızı rüzgâr çizgileri, yelkenli gemiler, hayvan ve tahtta oturan hükümdar figürleri, sol kenar boyunca Osmanlıca açıklama metinleri",
  "eser": "Pîrî Reis dünya haritası — Topkapı Sarayı Müzesi Kütüphanesi, H. 1824 (Commons beyanı)",
  "sanatci": "Pîrî Reis",
  "yil": "919 / 1513",
  "lisans": "PD-Art",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Piri_reis_world_map_01.jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-auto-expired), PD-old-100-expired",
  "not": "Commons kaynağı müze taraması değil: Bilkent Üniversitesi (düşük çözünürlük) ve erisi.com (yüksek çözünürlük) — renkler basılı bir reprodüksiyondan geliyor olabilir, ÖLÇÜLMEDİ. O günde başka maddeler (Kilve · Machiavelli · Rodos · Sin) olduğu için '|Pîrî Reis' ayırıcısı kullanıldı."
},

{
  "id": "1526-01-01-kitab-i-bahriye-kibris",
  "tur": "madde",
  "olay": [
    "1521-01-01|Kitâb-ı Bahriye",
    "1526-01-01|Kitâb-ı Bahriye"
  ],
  "url": "assets/gorseller/1526-01-01-kitab-i-bahriye-kibris.jpg",
  "baslik": "Kitâb-ı Bahriye'den Kıbrıs haritası (17.-18. yy nüshası, Walters)",
  "gorsel_alt": "Altın cetvelli çerçeve içinde Kıbrıs adası haritası: kıyılarda küçük kale resimleri, adanın ortasında tepeler üzerinde surlu bir şehir, renkli dağ sıraları ve akarsular; köşelerde ve solda pusula gülleri, sayfayı kesen rüzgâr çizgileri, zeminde arka sayfanın silik yazısı",
  "eser": "Pîrî Reis, Kitâb-ı Bahriye nüshası — Walters Art Museum, Baltimore, W.658, vr. 334b",
  "sanatci": "Pîrî Reis (eserin yazarı)", "ic_not_sanatci": "eski sanatci: Pîrî Reis (eserin yazarı) — nüshanın müstensih ve ressamı bulunamadı",
  "yil": "17. yüzyıl sonu - 18. yüzyıl başı (Walters beyanı); eserin kendisi 927/1521 ve 932/1526",
  "lisans": "PD-Art",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Piri_Reis_-_Map_of_the_Island_of_Cyprus_-_Walters_W658334B_-_Full_Page.jpg",
  "kesinlik": "donem-sonrasi-tasvir",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-100), PD-author · Commons şablonu 'Walters Art Museum license'",
  "not": "Pîrî Reis'in el yazması değil, ~150-200 yıl sonraki bir KOPYA. Nüshanın 1521 ilk mi yoksa 1526 genişletilmiş versiyonun mu kopyası olduğu ÖLÇÜLMEDİ (Walters sayfasında yazmıyor), bu yüzden iki maddeye de bağlandı. Haritadaki merkez şehrin etiketi 'Lefkoşa' olarak okunur gibi — okuma KESİN DEĞİL, gorsel_alt'a yazılmadı."
},

{
  "id": "1571-10-07-inebahti-nmm-tablosu",
  "tur": "madde",
  "olay": [
    "1571-10-07"
  ],
  "url": "assets/gorseller/1571-10-07-inebahti-nmm-tablosu.jpg",
  "baslik": "İnebahtı Deniz Savaşı — 16. yy sonu tablosu (National Maritime Museum)",
  "gorsel_alt": "Tuval üzerine yağlıboya: bayraklı ve flamalı kadırgaların iç içe geçtiği, top dumanları arasında çarpışan iki donanma; sol önde kayalık bir burun, sağ arka planda kıyıda bir kale ve tepeler, ön planda denizde yüzen enkaz ve bir sandal",
  "eser": "The Battle of Lepanto, 7 October 1571 — tuval üzerine yağlıboya, National Maritime Museum, Greenwich, BHC0261",
  "sanatci": "H. Letter — tabloda 'HLETTER' imzası; ressam hakkında başka bilgi yok (NMM)",
  "yil": "16. yüzyıl sonu",
  "lisans": "PD-Art",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Battle_of_Lepanto_1571.jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-100-expired), PD-old-100-expired",
  "not": "NMM açıklaması (Commons'a aktarılmış): çağdaşa yakın ama 'hayalî bir yorum'; 1572 tarihli bir Venedik gravürüne (Martino Rota) dayandığı düşünülüyor. Tanıklık DEĞİLDİR. O gün kronolojide BEŞ madde var (olaylar.js · kronoloji_ispanya · kronoloji_venedik · kronoloji_rodos_sovalyeleri · kronoloji_italya_sehir) ve beşi de İnebahtı Savaşı — ayırıcısız bağlandı. Yedek aday: Camocio'nun 1574 tarihli gravürü ('The Ottoman and the Venetian fleet during the Battle of Lepanto in 1571 - Camocio Giovanni Francesco - 1574.jpg', KABUL)."
},

{
  "id": "1478-01-01-topkapi-babihumayun-photochrom",
  "tur": "mimari",
  "olay": [
    "1478-01-01|Topkapı"
  ],
  "url": "assets/gorseller/1478-01-01-topkapi-babihumayun-photochrom.jpg",
  "baslik": "Topkapı Sarayı, Bâbıhümâyun — photochrom, 1890-1900",
  "gorsel_alt": "Renkli photochrom baskı: yüksek, mazgallı sur duvarında mermer çerçeveli büyük sivri kemerli kapı; kemerin içinde ve iki yandaki nişlerin üstünde yazı kitabeleri, açık kanatlı ahşap kapıdan çıkan tek bir kişi; önde yapraksız ağaçlar, fenerler ve zincirli babalar",
  "eser": "'Imperial gate, Topkapi Palace, Constantinople, Turkey' — Library of Congress, Photochrom Print Collection, baskı no. 18461 (LCCN 2003653108)",
  "sanatci": "", "ic_not_sanatci": "eski sanatci: bulunamadı — photochrom baskısı, fotoğrafçı adı yok (LOC)",
  "yil": "yaklaşık 1890-1900 (LOC beyanı)",
  "lisans": "PD-old-70-1923",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Imperial_gate,_Topkapi_Palace,_Constantinople,_Turkey_LCCN2003653108.tif",
  "kesinlik": "donem-sonrasi-tasvir",
  "lisans_olcum": "KABUL (0913b) · kategori PD-old-70-expired · aynı fotoğrafın .jpg kopyası (LOC 4211234276, Flickr 'no known copyright restrictions') RED — kabul kategorisi yok; .tif sürümü kullanıldı",
  "not": "Kapının Bâbıhümâyun olduğu LOC başlığına ('Imperial gate') dayanır, ayrıca ÖLÇÜLMEDİ. 1478'deki özgün yapıyı değil kapının 19. yüzyıl sonundaki hâlini gösterir. O gün kronolojide Mengli Giray maddesi de olduğu için '|Topkapı' ayırıcısı kullanıldı."
},

{
  "id": "1522-12-21-rodos-kusatmasi-suleymanname",
  "tur": "madde",
  "olay": [
    "1522-12-21"
  ],
  "url": "assets/gorseller/1522-12-21-rodos-kusatmasi-suleymanname.jpg",
  "baslik": "Rodos kuşatması — Süleymannâme minyatürü",
  "gorsel_alt": "Minyatür: renkli geometrik desenli taş surlarla çevrili kale, mazgallarda miğferli savunucular ve bayraklar; önde tüfekli yeniçeriler kale kapısına yürüyor, sol altta siperlerde yatan askerler, sağda mavi bir tepenin üstünde beyaz büyük kavuklu atlı bir hükümdar figürü ve maiyeti",
  "eser": "Ârifî, Süleymannâme — Topkapı Sarayı Müzesi Kütüphanesi, H. 1517, vr. 149a (Commons beyanı)",
  "sanatci": "Atıf tartışmalı: Nakkaş Osman ya da Ârifî, Matrakçı Nasuh ve saray nakkaşları", "ic_not_sanatci": "eski sanatci: bulunamadı — Commons kopyaları çelişiyor: biri 'Nakkaş Osman', ötekisi 'Ârifî ve/veya Matrakçı Nasuh ve saray nakkaşları' diyor",
  "yil": "1558 (Süleymannâme'nin tarihi, Commons'taki eş kopyanın beyanı)",
  "lisans": "PD-US-expired / PD-old-70",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Istanbul,_Topkapi_Palace_Museum_MS_Hazine_1517_fol._149r_Suleiman_Siege_of_Rhodes_(1522)_uncropped.png",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD, PD_US_expired · eş kopya 'OttomanJanissariesAndDefendingKnightsOfStJohnSiegeOfRhodes1522.jpg' de KABUL (PD-Art_(PD-old-100))",
  "not": "Olaydan 36 yıl sonra ama AYNI padişahın devrinde yapılmış saray tasviri (mevcut Süleymannâme Mohaç kaydıyla aynı kesinlik kararı). Atlı figürün Kanûnî olduğu Commons açıklamasına dayanır. Görüntü basılı bir reprodüksiyondan taranmış görünüyor (eş kopyanın sayfası Toynbee'nin bir kitabından tarandığını yazıyor; iki kopya açılıp karşılaştırıldı, aynı sahne ve aynı renkler) — renkler aslından farklı olabilir. O gün iki madde var (olaylar.js 'Rodos'un fethi' · kronoloji_rodos_sovalyeleri teslim), ikisi de aynı olay — ayırıcısız."
},

{
  "id": "1526-08-29-mohac-bamberg-1526",
  "tur": "madde",
  "olay": [
    "1526-08-29"
  ],
  "url": "assets/gorseller/1526-08-29-mohac-bamberg-1526.jpg",
  "baslik": "Mohaç Meydan Muharebesi — 1526 tarihli Alman haber baskısı",
  "gorsel_alt": "Renkli ağaç baskı: iki kuşak hâlinde çarpışan zırhlı, mızraklı Hıristiyan süvari ve piyadeleri ile kılıçlı, kalkanlı Osmanlı askerleri; sağda çam ağaçları, sağ altta bir top ve kovası, üstte gotik harflerle Almanca başlık, altta dört sütun Almanca manzum metin",
  "eser": "Des Türckischen Keysers Solymon schlacht / so mit dem König von Hungern gethan, Anno XXVI — Staatsbibliothek Bamberg, VI Ba 129 (Commons beyanı)",
  "sanatci": "Anonim", "ic_not_sanatci": "eski sanatci: bulunamadı (anonim)",
  "yil": "1526",
  "lisans": "PD-Art (PD-old-100)",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:A_moh%C3%A1csi_csata_(Des_T%C3%BCrckischen_Keysers_Solymon_schlacht_-_So_mit_dem_K%C3%BCnig_von_Hungern_gethan,_Bamberg,_1526).jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-100), PD-old",
  "not": "Savaşla aynı yıl Almanya'da basılmış bir haber baskısı; sahne ayrıntıları bir TANIKLIK değil, kalıplaşmış bir savaş tasviridir. Commons'un kaynağı Macar Bilimler Akademisi haberi (mta.hu); Bamberg kütüphanesi kaydıyla ayrıca DOĞRULANMADI. O gün üç madde var (olaylar.js · kronoloji_habsburg · kronoloji_macaristan), üçü de Mohaç — ayırıcısız. Süleymannâme Mohaç minyatürü zaten Kanûnî albümünde (1520-09-30'a bağlı) olduğu için tekrar edilmedi."
},

{
  "id": "1529-09-27-viyana-kusatmasi-beham",
  "tur": "madde",
  "olay": [
    "1529-09",
    "1529-09-27"
  ],
  "url": "assets/gorseller/1529-09-27-viyana-kusatmasi-beham.jpg",
  "baslik": "I. Viyana Kuşatması — Barthel Beham'ın çağdaş tasviri",
  "gorsel_alt": "Siyah-beyaz tasvir: arka planda nehir kıyısında surlu Viyana ve yüksek katedral kulesi, orta planda ordugâh çadırları ve atlılar; ön planda Osmanlı ordugâhı — sivri çadırlar, toplar, yüklü develer, çarpışan askerler ve merdivenle saldırılan bir kilise; üst kenarda silik bir başlık, sağ altta ressam imzası",
  "eser": "Erste Wiener Türkenbelagerung — Wien Museum, MMW 097022 (Commons beyanı)",
  "sanatci": "Barthel (Bartholomäus) Beham (1502-1540)",
  "yil": "1529 civarı — Commons 'zeitgenössisch' (çağdaş) diyor, kesin yıl yok",
  "lisans": "PD-Art (PD-old-auto-expired)",
  "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Siegeofvienna1529.jpg",
  "kesinlik": "cagdas",
  "lisans_olcum": "KABUL (0913b) · kategori PD-Art, PD-Art_(PD-old-auto-expired), PD-old, PD-old-100-expired",
  "not": "Tarama basılı bir reprodüksiyondan alınmış (raster/noktalı doku, düşük kalite). 🔴 DOSYA ADI TUZAĞI: ilk seçilen 'View of the siege of Vienna, 1529.jpg' (Newberry Library, Agostino de Musis) indirilip AÇILINCA altındaki metnin 'nel anno MDXXXII del mese di settembre' dediği görüldü — 1529 kuşatmasını değil 1532 seferini gösteriyor; o dosya assets'ten SİLİNDİ, kullanılmadı. Meldeman'ın 1530 tarihli çevre planı ve Beham'ın öteki küçük kopyası lisans aletinde RED (kabul kategorisi yok). İki madde de (olaylar.js '1529-09' · kronoloji_habsburg '1529-09-27') aynı kuşatma."
},

// YAMA-0059-GORSEL (D4-AFRIKA, 17 Eylül 2026) — albüm
{
  "id": "1720-01-01-surname-i-vehbi-albumu",
  "tur": "albüm",
  "olay": [
    "1720-01-01|Levnî"
  ],
  "baslik": "Surnâme-i Vehbî albümü — Levnî'nin 1720 şenlik minyatürleri",
  "gorseller": [
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname_51b.jpg?width=800",
      "baslik": "III. Ahmed çadırda kabul sahnesi",
      "gorsel_alt": "Bir çadırın içinde tahtında oturan III. Ahmed'in çevresini saran vezirler ve danışmanlar; Surnâme-i Vehbî'nin bir sayfası",
      "eser": "Surnâme-i Vehbî, Topkapı Sarayı Müzesi (Inv. 3594, fol. 51b)",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-Art",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname_51b.jpg",
      "kesinlik": "cagdas"
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname_71b.jpg?width=800",
      "baslik": "Esnaf loncalarının alayı — fırıncılar ve çiftçiler",
      "gorsel_alt": "Fırınları ve ekmekleriyle fırıncı loncası, altta buğday demetleriyle çiftçiler — esnaf alayının Atmeydanı'ndan geçişini gösteren minyatür",
      "eser": "Surnâme-i Vehbî, Topkapı Sarayı Müzesi (Inv. 9561, fol. 71b)",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-Art",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname_71b.jpg",
      "kesinlik": "cagdas"
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname_17b.jpg?width=800",
      "baslik": "Kadın çalgıcılar topluluğu",
      "gorsel_alt": "Zurna, tanbur, daire gibi çalgılarla bir kadın çalgıcılar topluluğunu gösteren minyatür",
      "eser": "Surnâme-i Vehbî, Topkapı Sarayı Müzesi (Hazine 2164, fol. 17b)",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-Art",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname_17b.jpg",
      "kesinlik": "cagdas"
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname_22b.jpg?width=800",
      "baslik": "Yeniçerilere safranlı pilav ziyafeti",
      "gorsel_alt": "Padişahın yeniçerilere verdiği safranlı pilav (safranpilav) ziyafetini gösteren minyatür — yeniçerilerin yemeği kabul etmesi padişaha sadakat göstergesiydi",
      "eser": "Surnâme-i Vehbî, Topkapı Sarayı Müzesi (fol. 22b)",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-Art",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname_22b.jpg",
      "kesinlik": "cagdas",
      "not": "Commons açıklaması: yeniçerilerin ziyafeti reddetmesi padişaha hoşnutsuzluk göstergesiydi; bu sahnede kabul ediyorlar."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname_27.jpg?width=800",
      "baslik": "Paşaların III. Ahmed'e hediyeler sunması",
      "gorsel_alt": "Paşaların ve devlet erkânının III. Ahmed'e şenlik vesilesiyle hediyeler sunduğu töreni gösteren minyatür",
      "eser": "Surnâme-i Vehbî, Topkapı Sarayı Müzesi (Inv. A 3593, fol. 27)",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-Art",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname_27.jpg",
      "kesinlik": "cagdas"
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_fireworks.png?width=800",
      "baslik": "Gece havai fişek gösterisi",
      "gorsel_alt": "Çift sayfalık minyatür: solda kıyıda toplanmış halkın önünde su üstünde patlayan beyaz bir havai fişek ve sarı ışık huzmeleri, arka planda gemi silüetleri; sağda kırmızı-beyaz çizgili bir çadırın altında hilal ve yıldızlı gece göğü altında oturan III. Ahmed ve maiyetinin gösteriyi izlemesi",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_fireworks.png",
      "kesinlik": "cagdas",
      "not": "🟢 Ekran görüntüsüyle GÖZLE DOĞRULANDI (bu oturum). Commons kategorisi 'Surname-ı Hümayun *.png' serisinin 7'sinden 6'sı gerçekten Levnî/1720 — 7.si ('celebrations.png', Nakkaş Osman/1583) YANLIŞ kategorize edilmiş ve bu albüme KONMADI (bkz. dosyanın _kritik_bulgu notu)."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_Dragon.png?width=800",
      "baslik": "Gece alayı ve kale önü",
      "gorsel_alt": "Çift sayfalık minyatür: solda hilalli gece göğü altında küçük beyaz kale/köşk yapısına doğru ilerleyen bir alay ve önde büyük beyaz bir kuş (turna/leylek) figürü; sağda kırmızı kubbeli bir seyir köşkünde oturan hükümdar ve maiyeti, altında renkli kalabalık",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_Dragon.png",
      "kesinlik": "cagdas",
      "not": "🟢 Ekran görüntüsüyle GÖZLE DOĞRULANDI (bu oturum) — AMA sahnede net bir 'ejder' (dragon) figürü SEÇİLEMEDİ; Commons dosya adı 'Dragon' olsa da görülen büyük beyaz kuş bir turna/leylek gibi duruyor. Başlık İngilizce dosya adına sadık kalınarak yazılmadı, GÖRÜLEN tarif edildi — dosya adının kendisi YANLIŞ olabilir, doğrulanmadı."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_parade.png?width=800",
      "baslik": "Şenlik alayı geçidi",
      "gorsel_alt": "Şenlik alayının geçişini gösteren bir minyatür (dosya adı 'parade')",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_parade.png",
      "kesinlik": "cagdas",
      "ic_not": "GÖZLE DOĞRULANMADI — ekran görüntüsü zaman aşımına uğradı. gorsel_alt yalnız dosya adından türetildi, sahne ayrıntısı yok. Yayına girmeden önce açılıp gözle görülmeli."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_ships.png?width=800",
      "baslik": "Şenlikte gemiler",
      "gorsel_alt": "Şenlik kutlamalarında gemileri gösteren bir minyatür (dosya adı 'ships')",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_ships.png",
      "kesinlik": "cagdas",
      "not": "🟡 GÖZLE DOĞRULANMADI — bkz. 'parade' kaydındaki uyarı, aynı şart geçerli."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_Tents.png?width=800",
      "baslik": "Şenlik otağları",
      "gorsel_alt": "Şenlik alanındaki otağları/çadırları gösteren bir minyatür (dosya adı 'Tents')",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_Tents.png",
      "kesinlik": "cagdas",
      "not": "🟡 GÖZLE DOĞRULANMADI — bkz. 'parade' kaydındaki uyarı, aynı şart geçerli."
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surname-%C4%B1_H%C3%BCmayun_acrobacy.png?width=800",
      "baslik": "Cambazların gösterisi",
      "gorsel_alt": "Şenlikte cambazların/akrobatların gösterisini anlatan bir minyatür (dosya adı 'acrobacy')",
      "eser": "Surnâme-i Hümâyun (Levnî, 1720) — dijital reprodüksiyon",
      "sanatci": "Levni (Abdülcelil Çelebi)",
      "yil": "1720",
      "lisans": "PD-old-70",
      "gorsel_kaynak": "https://commons.wikimedia.org/wiki/File:Surname-%C4%B1_H%C3%BCmayun_acrobacy.png",
      "kesinlik": "cagdas",
      "not": "🟡 GÖZLE DOĞRULANMADI — bkz. 'parade' kaydındaki uyarı, aynı şart geçerli."
    }
  ]
}

];

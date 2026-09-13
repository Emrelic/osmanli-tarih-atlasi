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
    olay:          ["1566-09-07", "1573-03-07"],
    url:           "assets/gorseller/1566-09-07-sokullu-mehmed-pasa-portresi.jpg",
    baslik:        "Sokullu Mehmed Paşa — taht minyatürü (1568-69)",
    gorsel_alt:    "Sokullu Mehmed Paşa'nın tahtta oturur biçimde betimlendiği, 1568-69 tarihli Nüzhetü'l-ahbâr minyatürü",
    eser:          "Nüzhetü'l-ahbâr der sefer-i Sîgetvâr, fol. 41b (Topkapı Sarayı Müzesi Kütüphanesi, H. 1339)",
    sanatci:       "bulunamadı — bazı kaynaklar Nakkaş Osman'a atfediyor, kesin değil",
    yil:           "1568-1569",
    lisans:        "PD-Art",
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:Sokollu_Mehmed_Pasha_enthroned_(portrait)._N%C3%BCzhet%C3%BC%E2%80%99l-a%E1%B8%ABb%C4%81r_der_sefer-i_S%C4%ABgetv%C4%81r_1568%E2%80%9369_(Topkap%C4%B1_Palace_Museum_Library_H_1339,_fol._41b).jpg",
    kesinlik:      "cagdas"
  },
  {
    id:            "1538-09-27-barbaros-hayreddin-pasa-portresi",
    tur:           "portre",
    olay:          ["1538-09", "1538-08-01"],
    url:           "assets/gorseller/1538-09-27-barbaros-hayreddin-pasa-portresi.jpg",
    baslik:        "Barbaros Hayreddin Paşa portresi (16. yy)",
    gorsel_alt:    "Barbaros Hayreddin Paşa'yı elinde asa ile yarı boy gösteren, 16. yüzyıl ortasına tarihlenen tuval üzerine yağlıboya portre",
    eser:          "Hayreddin Barbarossa (1466/83-1546), Ottoman admiral — tuval üzerine yağlıboya, 99x76,8 cm",
    sanatci:       "Anonim (Floransa Okulu'na atfen) — hayattan mı yapıldığı doğrulanamadı",
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
    sanatci:       "bulunamadı (kimliği belirsiz ressam)",
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
    sanatci:       "bulunamadı (baskı yayıncısı bilgisi var, gravürcü adı yok)",
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
    olay:    ["1578-01-02", "1588-01-01"],
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
  }
];

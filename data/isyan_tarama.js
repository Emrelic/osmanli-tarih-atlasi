// ═══════════════════════════════════════════════════════════════════════════
// İSYAN TARAMASI — Eflak · Boğdan · Erdel, 1594-1606 (Uzun Savaş)
// PAKET-ISYAN · 13 Eylül 2026 · rapor: denetim/PAKET-ISYAN-0913.md
//
// Emre'nin kararı (13 Eylül 2026, bağlayıcı): "Üç voyvodalık için C2 şıkkını
// onaylıyorum, üstüne isyan taraması eklensin." ⇒ Tâbi zemin rengi KORUNUR,
// üstüne AYRI bir tarama çizilir (işgal taraması `isg:` ile karışmaz).
// Seçenek dökümü: denetim/ARASTIRMA-0048-0913.md §H-0002.
//
// ⚠️ BU DOSYA BİR SAHİPLİK KAYDI DEĞİLDİR. `yerlesimler*.js` d/v/s dönemlerine
//    dokunmaz; Değişmez 1/2'nin evreninde değildir. Yalnız ÇİZİM içindir.
// ⚠️ GEOMETRİ: elle çizilmez. `js/suzgec.js` `isyanSecim` o gün `kimlik`e tâbi
//    (v:) görünen atlas yerleşimlerini SEÇER, `js/app.js` motorun kendi peteğini
//    (PETEKLER) tarar. Atlas burada yalnız GEOMETRİ SEÇİCİDİR, tarih kaynağı
//    DEĞİL (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR").
//
// ŞEMA (pencere başına):
//   id        benzersiz
//   kimlik    eflak | bogdan | erdel   (devletler.js id'si)
//   tur       "isyan"    — Osmanlı'ya karşı tarafa geçmiş / Osmanlı denetimi dışı
//             "habsburg" — fiilî Habsburg idaresi (Osmanlı hâkimiyet iddiası sürüyor)
//   f, t      "YYYY-MM-DD", f dahil · t HARİÇ (atlasın dönem kuralıyla aynı)
//   kesinlik_f / kesinlik_t   gun | ay | yil ; `kesinlik` ikisinin kabası
//             ay kesinliği ayın 1'ine kodlanır ve BEYAN edilir (§4 üçüncü eksen)
//   kaynak    [{ ad, slug|sayfa, alinti (kısa, TDV'de kendi sözlerimle), gelenek }]
//   not       iç kırılmalar, çelişki/ayrıştırma notları, bilinen sınırlar
//
// KAYNAKLAR:
//   TDV   İslâm Ansiklopedisi — eflak · bogdan · erdel · zitvatorok-antlasmasi ·
//         yergogu (hepsi HTTP 200, gövdeleri okundu 13 Eylül 2026)
//   HoT   History of Transylvania, Vol. I (From the Beginnings to 1606), ed. Béla
//         Köpeczi, Institute of History of the Hungarian Academy of Sciences —
//         Bölüm IV.3 "Transylvania in the Fifteen Years' War":
//           mek.oszk.hu/03400/03407/html/118.html (Zsigmond Báthori, Michael the
//           Brave, and Giorgio Basta) · 119.html (Bocskai's Insurrection …)
//         Ham metin indirilip okundu; bölüm yazarı sayfada gösterilmiyor.
//         Tarihler Macar tarih yazımının (Gregoryen) tarihleridir.
//   PAKET-ISYAN2 · 14 Eylül 2026 · rapor: denetim/PAKET-ISYAN2-0914.md — Erdel 1599 ve
//   Boğdan 1600 kalemleri kaynak ağırlığına göre yeniden yazıldı (Emre: "ibre hangi
//   tarafa dönükse"). Ek kaynaklar (PDF metin katmanı pypdf ile okundu):
//   Tóth    Tóth Sándor László, "Báthori Zsigmond politikája és harmadik lemondása
//           (1599-1600)", Aetas 26/2 (2011) 85-98
//   Papp    Sándor Papp, Prace Historyczne 148/4 (2021) 687-701,
//           doi:10.4467/20844069PH.21.045.14021 (hakemli)
//   DȚM     Domnii Ţării Moldovei (Chişinău: Civitas, 2005) 150-153 — Moldova Bilimler
//           Akademisi portalı moldova650.asm.md/node/40 (ham HTML okundu)
//   TDV `bogdan` gövdesi yeniden okundu (Mihai'nin 1599 Erdel girişinin gerekçesi).
// ═══════════════════════════════════════════════════════════════════════════
window.ISYAN_TARAMA = {
  surum: "PAKET-ISYAN-0913",
  lejant: {
    isyan:    "İsyan — Osmanlı denetimi dışında (tâbilik iddiası sürüyor)",
    habsburg: "Habsburg idaresi — Osmanlı hâkimiyet iddiası sürüyor"
  },
  // Açılınca kutu gösterecek maddeler (Osmanlı kronolojisi paneli). `t` + başlık
  // öneki birlikte eşleşir; yalnız tarih yetmez (aynı güne başka madde düşebilir).
  maddeler: [
    { t: "1594-08-28", b: "Üç voyvodalığın ayaklanması başlıyor" },   // PAKET-KRON3: madde 1594-10-05 → 1594-08-28, başlık Erdel kopuşuna daraldı
    { t: "1594-11-01", b: "Bükreş ayaklanması" },   // PAKET-KRON3: madde 1594-11-13 → 1594-11-01 kesinlik ay
    { t: "1595-01-01", b: "Cesur Mihail'in Tuna kalelerine akınları" },
    { t: "1595-08-23", b: "Kalûgerân Muharebesi" },
    { t: "1595-10-01", b: "Eflak'tan çekiliş ve Yergöğü baskını" }
  ],
  // KİMLİKSİZ TÂBİ KAYITLAR İÇİN KAYNAKLI ÜYELİK. Seçici önce atlasın kendi
  // kimliğine bakar (v: `kid`, ya da kid'siz v:'nin `k` adı). Aşağıdaki liste
  // YALNIZ o gün aktif v: döneminde NE `kid` NE `k` bulunan kayda uygulanır —
  // atlas kimliği olan bir kaydı ASLA ezmez. Ölçüldü (13 Eylül 2026): atlasın
  // tamamında 1594-1606'ya değen böyle 4 kayıt var — Erdel Belgradı · Brassó ·
  // Segesvár (yerlesimler_ek29.js) · Debrecen (yerlesimler_kdmacar.js).
  // Mesafe/komşuluk kuralı DENENMEDİ: en yakın kimlikli nokta Brassó'yu Eflak'a
  // (Tırgovişte) verirdi (D121: komşuluk kanıt değildir).
  // 🔵 KALICI ÇARE VERİDEDİR: bu üç kaydın v: dönemine k:"Erdel Prensliği"
  //    (yerleşim dosyası sahibinin işi, koşu 10 sonrası) — o inince liste boşa düşer.
  kimliksiz_uye: {
    erdel: {
      adlar: ["Erdel Belgradı (Gyulafehérvár)", "Segesvár (Sighişoara)", "Brassó (Braşov)"],
      kaynak: { ad: "TDV İslâm Ansiklopedisi", slug: "erdel", gelenek: "Türk (TDV)",
                alinti: "Erdel'in belli başlı şehirleri arasında Alba Julia (Gyulafehérvár) ve Sighişoara (Segesvár) sayılır; güneydeki Sekeller ili bölgesinin en önemli şehri Braşov'dur (özet)." },
      not: "Coğrafî üyelik cümlesidir (1594'e özgü siyasî tarih DEĞİL); HoT 118 aynı dönemde Gyulafehérvár'ı prenslik merkezi, Brassó'yu Erdel sınır kapısı olarak anıyor. Debrecen kaynakta Erdel şehri olarak ANILMIYOR ⇒ listeye alınmadı, taranmaz."
    }
  },
  pencereler: [

  { id: "isy-eflak-1594", kimlik: "eflak", tur: "isyan",
    f: "1594-11-01", t: "1600-11-15",
    kesinlik_f: "ay", kesinlik_t: "gun", kesinlik: "ay",
    kaynak: [
      { ad: "TDV İslâm Ansiklopedisi", slug: "eflak", gelenek: "Türk (TDV)",
        alinti: "Cesur Mihai (1593-1601) vergi yüzünden isyan etti; 1601'de Basta'ya yenilip öldürüldü, ardından Eflak eskisi gibi Osmanlı'ya tâbi oldu (özet)." },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"In November, … Michael turned on the Ottomans\" (1594)" },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"On 15 November, Michael suffered another defeat … by the Argeş River\" (1600); boyarlar Türk ve Leh desteğiyle Simion Movilă'yı çağırmıştı (özet)" }
    ],
    not: "f: HoT ay veriyor (Kasım 1594), gün yok ⇒ 1594-11-01, kesinlik ay. (Atlasın 1594-11-13 maddesi dayanak ALINMADI.) " +
         "t: HoT'nin 15 Kasım 1600 Argeş yenilgisi — Mihai bundan sonra Eflak'ı bir daha yönetmedi (12 Ocak 1601'de Prag'a sığındı). " +
         "TDV sınırı 1601 (ölüm) olarak veriyor; ayrıştırma: TDV'nin 'bundan sonra tâbi' cümlesi ölüm SONRASINI anlatıyor, 1600 sonu-1601 arası için ayrı hüküm vermiyor ⇒ çelişki ilan edilmedi, fark raporda. " +
         "İÇ KIRILMALAR (çizilmedi): Ağustos-Ekim 1595 Sinan Paşa Bükreş ve Tırgovişte'yi tuttu (TDV eflak/koca-sinan-pasa; HoT 18 Ekim 1595 Tırgovişte geri alındı) · HoT: 1598'de Osmanlı ile barış ve 9 Haziran 1598 Prag antlaşmasıyla Habsburg vasallığı. " +
         "SONRASI: 1601-1606 Radu Şerban dönemi HoT 118/119'da bulunamadı; TDV'ye göre tâbi ⇒ pencere yok. " +
         "Doğrudan Osmanlı noktaları (İbrail, Yergöğü d: kayıtları) seçiciye girmez." },

  { id: "isy-bogdan-1594", kimlik: "bogdan", tur: "isyan",
    f: "1594-11-01", t: "1595-11-01",
    kesinlik_f: "ay", kesinlik_t: "ay", kesinlik: "ay",
    kaynak: [
      { ad: "TDV İslâm Ansiklopedisi", slug: "bogdan", gelenek: "Türk (TDV)",
        alinti: "Aron 1594'te Kutsal İttifak'a girdi, 1594 sonlarında Yaş ve Bükreş'te Türk ve Rum alacaklılar öldürüldü; yerine geçen Razvan isyanı sürdürdü, Lehliler onu öldürdü (özet)." },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"Aron Tiranul, promptly joined the Transylvanian alliance\" (Kasım 1594 saldırısının hemen ardından)" },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "Razvan Giurgiu savaşından dönünce Leh destekli Ieremia Movilă'nın emriyle öldürüldü, Movilă voyvoda oldu (özet)" }
    ],
    not: "f: TDV 'yıl sonları' diyor, ay yok; HoT Aron'un katılışını Eflak'ın Kasım 1594 saldırısına 'promptly' diye bağlıyor ve TDV iki şehrin katlini TEK cümlede veriyor ⇒ ay aynı süreçten: 1594-11-01, kesinlik ay (§4 şartlı komşu: komşu = Eflak, kaynağı HoT). " +
         "t: Giurgiu (Yergöğü) baskını TDV yergogu'da 'Ekim 1595', HoT'de 18-29 Ekim 1595 arası ⇒ Razvan'ın öldürülmesi en erken Ekim 1595 sonu. Öldürülme ayı BULUNAMADI ⇒ t = 1595-11-01 (hariç): tarama Ekim 1595 sonunda biter. Gerçek devir daha geç olabilir, tarama bu yüzden AZ gösterir, fazla göstermez. " +
         "Movilă: Leh himayesi + Osmanlı haracı (çifte bağlılık); HoT: Polonya Bâbıâli ile olağan ilişkisini koruyordu ⇒ 1595 sonrası tarama yok." },

  { id: "isy-bogdan-1600", kimlik: "bogdan", tur: "isyan",
    f: "1600-05-01", t: "1600-09-01",
    kesinlik_f: "ay", kesinlik_t: "ay", kesinlik: "ay",
    kaynak: [
      { ad: "TDV İslâm Ansiklopedisi", slug: "bogdan", gelenek: "Türk (TDV)",
        alinti: "Mihai 1599'da Erdel'i aldı, 1600'de Hotin'e dek ilerleyip Boğdan'ın da hâkimi oldu; ertesi yıl Basta onu öldürünce üç prenslik yeniden ayrıldı (özet)." },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"Michael launched in May 1600 a surprise attack on Moldavia\"" },
      { ad: "Domnii Ţării Moldovei (Chişinău: Civitas, 2005), s. 150-153 — Moldova Bilimler Akademisi 'Moldova 650' portalında yeniden basım", sayfa: "moldova650.asm.md/node/40", gelenek: "Romen/Moldova akademik",
        alinti: "Mihai Mayıs-Ağustos 1600 Yaş'ta kaldı; Zamoyski 4 Eylül 1600'de Dinyester'i geçti, 6 Eylül'de Suçava önündeydi; Mihai'nin bıraktığı birlik dayanamadı, Movilă yeniden tahta çıktı (özet). Movilă Osmanlılarca korunan, 1598 ahidnamesiyle ömür boyu tanınmış vasal (özet)." },
      { ad: "Tóth Sándor László, \"Báthori Zsigmond politikája és harmadik lemondása (1599-1600)\", Aetas 26/2 (2011), s. 85-98", sayfa: "acta.bibl.u-szeged.hu/30900/1/aetas_2011_002_085-098.pdf", gelenek: "Macar akademik",
        alinti: "Zamoyski ve Zsigmond Ağustos 1600'de büyük orduyla Boğdan'a girip Movilă'yı yeniden tahta oturttular (özet)." }
    ],
    not: "PAKET-ISYAN2 (14 Eylül 2026): t 1601-01-12 (üst sınır) → 1600-09-01. " +
         "f: HoT Mayıs 1600 ⇒ 1600-05-01, kesinlik ay (portal: Mihai'nin Boğdan hükmü 'mai 8 (18)' 1600 — Jülyen (Gregoryen)). " +
         "t: Movilă'nın yeniden tahta çıkış GÜNÜ BULUNAMADI. Portal Mihai'nin Yaş'taki süresini 'Mayıs-Ağustos 1600' veriyor ve Leh ordusunun Dinyester geçişini 4 Eylül 1600'e koyuyor; Tóth seferin Ağustos'ta başladığını yazıyor ⇒ Mihai hâkimiyetinin sonu Ağustos sonu-Eylül başı. §4 'kaba güvenli': ay kesinliği, t = 1600-09-01 (hariç). Tarama Ağustos sonunda biter; gerçek devir birkaç gün geç olabilir (AZ gösterir). " +
         "Tâbiiyet: Movilă Leh himayesinde AMA Osmanlı vasalı (portal: 1595 sonu sultan tanıdı, 1598 ahidname; HoT: Polonya Bâbıâli ile olağan ilişkide) ⇒ dönüşü Osmanlı tâbiiyetine dönüş sayıldı, pencere orada bitti. " +
         "Eski t'nin dayanağı (HoT 12 Ocak 1601 Prag) Boğdan'la ilgili değildi: Mihai o sırada Boğdan'ı 4 aydır kaybetmişti. " +
         "Ayrıştırma: TDV'nin 'ertesi yıl … öldürülünce ayrıldı' cümlesi özet sıralaması, Boğdan için devir tarihi vermiyor ⇒ çelişki ilan edilmedi. " +
         "Okunmadı: Rezachevici, Cronologia critică (2001) — portal ile aynı 'Eylül 1600' ayını verdiği ikincil aramada görüldü, gövde okunmadı." },

  { id: "isy-erdel-1594", kimlik: "erdel", tur: "isyan",
    f: "1594-08-28", t: "1599-03-29",
    kesinlik_f: "gun", kesinlik_t: "gun", kesinlik: "gun",
    kaynak: [
      { ad: "TDV İslâm Ansiklopedisi", slug: "erdel", gelenek: "Türk (TDV)",
        alinti: "Zsigmond Báthory (1581-1598, 1601-1602) Türklere karşı döndü; 1593-1606 savaşlarında Habsburglarla ve bir ara Mihal'le anlaşıp geçici olarak onlara tâbi oldu (özet)." },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"Zsigmond proceeded on 28 August to have the opposition leaders arrested\" (1594; savaşa katılmaya karşı çıkanlar)" },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "Zsigmond'un Osmanlı ile görüşmesi sonuçsuz kalınca Lehistan'a yöneldi; 17 Mart 1599 anlaşmasıyla yetki András Báthori'ye geçti, Erdel Leh nüfuz alanına girdi (özet)" },
      { ad: "Tóth Sándor László, \"Báthori Zsigmond politikája és harmadik lemondása (1599-1600)\", Aetas 26/2 (2011), s. 85-98", sayfa: "acta.bibl.u-szeged.hu/30900/1/aetas_2011_002_085-098.pdf", gelenek: "Macar akademik",
        alinti: "Mart 1599 sonu Medgyes diyetinde yetki András'a devredildi; bir rapora göre devir 29 Mart'ta (özet)." },
      { ad: "Sándor Papp, \"Transylvania's and Poland's Participation in the Struggles between … the Movilăs, and … Radu Şerban\", Prace Historyczne 148/4 (2021), s. 687-701", sayfa: "doi.org/10.4467/20844069PH.21.045.14021", gelenek: "Macar akademik (hakemli)",
        alinti: "1597'den itibaren Erdel prensleri Bâbıâli hâkimiyetine dönmeye çalıştı; 1599 ve 1601'de Osmanlı otoritesini tanıyan antlaşmalar imzalandı (özet)." }
    ],
    not: "PAKET-ISYAN2 (14 Eylül 2026): t 1601-08-03 → 1599-03-29; pencere Emre'nin 'ibre hangi yöne dönükse' hükmüyle BÖLÜNDÜ (devamı `isy-erdel-1599` · `isy-erdel-1600-habsburg`). " +
         "f: HoT gün veriyor (28 Ağustos 1594, savaş karşıtı muhalefetin tutuklanması); 28 Ocak 1595 Prag ittifakı bunu resmîleştirdi. " +
         "t: András Báthori'ye devir. HoT anlaşmayı 17 Mart 1599'a koyuyor (devir hükmü, yetki değişimi değil); Tóth diyetin 21 Mart'a çağrıldığını, devrin 'bir rapora göre' 29 Mart'ta olduğunu yazıyor ⇒ t = 1599-03-29 (gün; tek raporlu, not düşüldü). " +
         "İBRE — 1599: dört kaynak aynı yönde. Papp 2021: András 1599'da Osmanlı otoritesini tanıyan, savaştan çekilen antlaşma imzaladı. Tóth: Zsigmond András'la Türk ile barışı umuyordu, Mustafa ve Hüseyin çavuşlar András'a geldi. TDV bogdan: Mihai 'Báthory'nin Osmanlılarla dostluğa başladığını görünce' Erdel'e girdi. HoT: Krakov ve Movilă András için İstanbul nezdinde aracılık etti; Lehistan Bâbıâli ile olağan ilişkideydi. ⇒ Mart-Ekim 1599 tarama YOK. " +
         "İBRE — 1598: 'hâlâ Habsburg ittifakında' ⇒ BÖLÜNMEDİ. HoT/Tóth: Nisan 1598 diyetinde feragat, imparator komiserleri ve Maria Christierna yönetti; 20 Ağustos 1598 Zsigmond döndü, Tóth'a göre Habsburg müttefiki egemen prens olarak yöneteceğini ilan etti, Osmanlı ile görüşmesi sonuçsuz kaldı (HoT), Osmanlı Varad'ı kuşattı. Nisan-Ağustos 1598 fiilen Habsburg komiser idaresiydi; ayrı `habsburg` türüne çevrilmedi (raporda seçenek). " +
         "Kármán G., 'Báthori András ahdnáméja', Fons 14 (2007) 339-348 ve İngilizce sürümü (Cluj 2013) OKUNMADI — ahidname günü bu yüzden pencereye konmadı." },

  { id: "isy-erdel-1599", kimlik: "erdel", tur: "isyan",
    f: "1599-10-28", t: "1600-09-18",
    kesinlik_f: "gun", kesinlik_t: "gun", kesinlik: "gun",
    kaynak: [
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "28 Ekim 1599 Sellenberk'te Mihai, András'ın kumandanı Kornis'i yendi; 1 Kasım Gyulafehérvár'a girdi; diyet onu imparator valisi tanıdı (özet)" },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"defeated Michael's forces in a battle at Miriszló on 18 September 1600\"" },
      { ad: "Tóth Sándor László, \"Báthori Zsigmond politikája és harmadik lemondása (1599-1600)\", Aetas 26/2 (2011), s. 85-98", sayfa: "acta.bibl.u-szeged.hu/30900/1/aetas_2011_002_085-098.pdf", gelenek: "Macar akademik",
        alinti: "Sellenberk yenilgisinden sonra Mihai vali unvanıyla Erdel'i aldı, adı geçen Rudolf adına (özet)." },
      { ad: "Sándor Papp, Prace Historyczne 148/4 (2021), s. 687-701", sayfa: "doi.org/10.4467/20844069PH.21.045.14021", gelenek: "Macar akademik (hakemli)",
        alinti: "András'ın Osmanlı'ya dönüş girişimi Habsburg sarayı ve müttefiki Mihai'nin askerî müdahalesiyle boşa çıktı (özet)." },
      { ad: "TDV İslâm Ansiklopedisi", slug: "bogdan", gelenek: "Türk (TDV)",
        alinti: "Mihai, Báthory'nin Osmanlılarla dostluğa başladığını görünce Erdel'i işgal etti (1599) (özet)." }
    ],
    not: "PAKET-ISYAN2 (14 Eylül 2026): YENİ pencere. " +
         "f: Sellenberk (HoT ve Tóth ikisi de 28 Ekim 1599) — András rejiminin çöküşü. Alternatifler: 5 Ekim 1599 Mihai'nin yürüyüşü (HoT; Tóth 'Ekim sonunda saldırdı' der) · 1 Kasım Gyulafehérvár girişi. Savaş günü seçildi. " +
         "MİHAİ HABSBURG ADINA MI KENDİ ADINA MI (MTA/HoT): diyet onu 'imparator valisi' tanıdı ve saldırı Rudolf'un rızasıyla yapıldı ⇒ BİÇİMCE Habsburg adına; ama HoT Mihai'nin Erdel'i Prag'ın denetimine bırakmaya niyeti olmadığını, bu anlaşılınca imparator yardımının kesildiğini yazıyor ⇒ FİİLEN kendi hükmü. Tóth: 'névleg' (adı geçen) Rudolf adına. İki durumda da Osmanlı denetimi dışında ⇒ tür `isyan` (fiilî Habsburg idaresi değil). " +
         "t: 18 Eylül 1600 Mirăslău/Miriszló — Mihai Erdel'den çıkarıldı. " +
         "Not: HoT'ye göre Mihai 1598'de Osmanlı ile barış da imzalamıştı; bu, Erdel üzerindeki hükmünü Osmanlı adına yapmaz (Papp: Habsburg müttefiki)." },

  { id: "isy-erdel-1600-habsburg", kimlik: "erdel", tur: "habsburg",
    f: "1600-09-18", t: "1601-02-01",
    kesinlik_f: "gun", kesinlik_t: "ay", kesinlik: "ay",
    kaynak: [
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "Ekim 1600 sonunda Erdel'in üç 'millet'i İmparator Rudolf'a bağlılık yemini etti; Basta Sekel ayrıcalıklarını kaldırdı (özet)" },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/118.html", gelenek: "Macar akademik",
        alinti: "\"in February 1601, Zsigmond reclaimed the princely throne\"" },
      { ad: "Tóth Sándor László, \"Báthori Zsigmond politikája és harmadik lemondása (1599-1600)\", Aetas 26/2 (2011), s. 85-98", sayfa: "acta.bibl.u-szeged.hu/30900/1/aetas_2011_002_085-098.pdf", gelenek: "Macar akademik",
        alinti: "Şubat 1601 başında Leh-Türk destekli Zsigmond prens seçildi, Mart sonunda tahta çıkarıldı; Türk vasallığını kabul etti, III. Mehmed Ağustos 1601'de ahidname gönderdi (özet)." },
      { ad: "Sándor Papp, Prace Historyczne 148/4 (2021), s. 687-701", sayfa: "doi.org/10.4467/20844069PH.21.045.14021", gelenek: "Macar akademik (hakemli)",
        alinti: "1601'de de Erdel prensi Osmanlı otoritesini tanıyan bir antlaşma imzaladı (özet)." }
    ],
    not: "PAKET-ISYAN2 (14 Eylül 2026): YENİ pencere. " +
         "f: Miriszló 18 Eylül 1600 — Basta'nın Habsburg ordusu ve Erdelli asiler Mihai'yi çıkardı; yemin Ekim 1600 sonu (gün yok). Savaştan yemine kadarki ~6 hafta da fiilen Basta'nın elinde sayıldı. " +
         "t: Zsigmond'un dönüşü. HoT 'Şubat 1601', Tóth 'Şubat 1601 başı' (seçim), tahta çıkış Mart sonu ⇒ ay kesinliği 1601-02-01. " +
         "ŞUBAT → 3 AĞUSTOS 1601 TARAMA YOK: Zsigmond Osmanlı vasalı olarak döndü (Tóth: ahidname Ağustos 1601; Papp: 1601 antlaşması; HoT: Basta savaşmadan çekildi). Sevkte bu dilim isyan penceresinin içindeydi; üç kaynak ters yönü söylediği için çıkarıldı (tahta M-3882). " +
         "Sonrası: 3 Ağustos 1601 Goroszló ⇒ `isy-erdel-1601-habsburg`." },

  { id: "isy-erdel-1601-habsburg", kimlik: "erdel", tur: "habsburg",
    f: "1601-08-03", t: "1605-09-14",
    kesinlik_f: "gun", kesinlik_t: "gun", kesinlik: "gun",
    kaynak: [
      { ad: "TDV İslâm Ansiklopedisi", slug: "erdel", gelenek: "Türk (TDV)",
        alinti: "Zsigmond'un dengesiz siyaseti Erdel'in yeniden Habsburg idaresine girmesine yol açtı (1601-1602); Osmanlı yanlısı Mózes Székely'nin girişimi başarısız oldu (özet)." },
      { ad: "TDV İslâm Ansiklopedisi", slug: "zitvatorok-antlasmasi", gelenek: "Türk (TDV)",
        alinti: "Bocskay Osmanlı himayesine dayanarak 1604 Kasımında Habsburglara karşı ayaklandı (özet)." },
      { ad: "History of Transylvania I, IV.3", sayfa: "mek.oszk.hu/03400/03407/html/119.html", gelenek: "Macar akademik",
        alinti: "\"On 14 September, at Medgyes, a diet … acclaimed Bocskai Prince of Transylvania\" (1605)" }
    ],
    not: "f: HoT 3 Ağustos 1601 Goroszló. " +
         "t: HoT 14 Eylül 1605 Medgyes diyeti Bocskai'yi Erdel prensi tanıdı (Sasların teslimi 27 Ağustos 1605). TDV erdel: Bocskay'a 1605'te Osmanlı tacı giydirildi; HoT tacın 11 Kasım 1605'te verildiğini yazıyor. " +
         "AYRIŞTIRMA: TDV'nin '(1601-1602)' parantezi Zsigmond'un ikinci hükümdarlık yıllarıyla aynı; HoT Habsburg otoritesini 2 Temmuz 1602 Tövis ve Basta'nın 1604 başına dek kalışıyla Bocskai'ye kadar uzatıyor ⇒ TDV'yi dar okumak 1602-1605'i Osmanlı'ya verirdi, bunu hiçbir kaynak demiyor. Fark raporda. " +
         "İÇ KIRILMA (çizilmedi): 8 Mayıs-17 Temmuz 1603 Mózes Székely Osmanlı-Tatar yardımıyla prenslik unvanı aldı ve Brassó yakınında öldü (HoT). Bocskai ayaklanması 15 Ekim 1604 Álmosd (HoT) / 'Kasım 1604' (TDV): Partium (Varad, Debrecen) Bocskai'ye Erdel içinden önce geçti — tek kimlik tek sınır, raporda." }

  ]
};

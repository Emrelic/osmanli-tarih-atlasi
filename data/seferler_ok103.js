// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// SEFERLER_OK103 — harekât güzergâhı kayıtları
// window.SEFERLER_OK103   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 103 · 1-2 Eylül 2026 · koordinatör 1.MURAT (M-1903)
// Kalemler: parti-emrelic-0035 · H-0081 · H-0093 · H-0094 · H-0095 · H-0098
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴🔴 BU DOSYA BAĞLANSA BİLE ŞU AN ÇİZİLMEZ — ve bunu bilerek yazıyorum.
//   `js/app.js:2675`  ->  var seferler = (window.SEFERLER || []).concat(...)
//   `grep -n "SEFERLER" js/app.js` -> TEK okuma noktası, o satır.
//   Yani `SEFERLER` için ad alanı süzgeci YOK. Karşılaştırma, aynı dosyada:
//       app.js:3609  OLAYLAR   /^OLAYLAR(_[A-Za-z0-9]+)?$/    ✅ ek ad okunur
//       app.js:2853  KORIDOR   /^KORIDOR_YAMA_[A-Za-z0-9]+$/  ✅ ek ad okunur
//       app.js:2675  SEFERLER  window.SEFERLER                🔴 ÇIPLAK AD
//   ⇒ Dosya yüklenir, değişken tanımlanır, app.js ona HİÇ BAKMAZ. Ne hata
//     verir ne uyarır — SESSİZCE yok sayar. (`CLAUDE.md §7` ③'ün aynısı.)
//   Koordinatöre M-1919'da bildirildi, üç şıkla. KARAR BEKLİYOR:
//     Ⓐ app.js:2675'e OLAYLAR'ın zaten kullandığı desen (ARAYÜZ oturumunun işi)
//     Ⓑ bu dosyanın sonu `window.SEFERLER = (window.SEFERLER||[]).concat(...)`
//        olur — emsali `savaslar.js:479` `window.ANTLASMALAR.push(...)`
//     Ⓒ olduğu gibi kalır, bir sonraki tura
//   Kararı ne olursa olsun DEĞİŞEN TEK ŞEY AŞAĞIDAKİ SON SATIRDIR; kayıtlar
//   aynı. O yüzden beklemeden yazıldı.
//
// ═══════════ ŞEMA — `data/savaslar.js:509` başlığından ═══════════
//   { ad, tur, sonuc, taraf, renk, f, t, yol:[[lon,lat],...] }
//   `taraf` yazılmazsa "osmanli" varsayılır; okun rengini belirler.
//   Kullanıcı kuralı: Türk okları kırmızı/siyah, düşman okları soğuk renk.
//   Ve dosyanın kendi şartı: *"Rotalar rastgele ara nokta değil, ORDUNUN
//   GERÇEKTEN GEÇTİĞİ MENZİL şehirleridir."* ⇒ kaynaksız ara nokta KOYULMADI.
//
// ═══════════ KAYNAK DİSİPLİNİ (§4 · M-1903 ⑦) ═══════════
//   Her kaydın `kaynak:` alanı var. TDV'nin SUSTUĞU yerde `bulunamadı`
//   yazıldı — gizlenmedi. TARİH UYDURULMADI; bir gün tahminse `⚠️ TAHMİN`
//   diye damgalandı.
//   🔴 TDV İÇİNDE BİR ÇELİŞKİ BULDUM, koordinatöre ayrıca bildirildi:
//      `aris`              El-Ariş Fransız işgali   18 Şubat 1799
//      `cezzar-ahmed-pasa` Akkâ kuşatması başlangıcı 19-20 Mart 1799
//      `akka`              Akkâ kuşatması            18 Mart 1799
//      `yafa`              "Şehir 6 Mayıs 1799'da ... Napolyon tarafından
//                           işgal edildi"           ← KRONOLOJİK OLARAK İMKÂNSIZ
//      Yafa, El-Ariş ile Akkâ'nın ARASINDADIR. Akkâ 19 Mart'ta kuşatma
//      altındaysa Yafa 6 Mayıs'ta düşmüş olamaz. ⇒ Yafa'nın TARİHİNİ
//      KULLANMADIM; yalnız kıyı yolundaki YERİNİ kullandım (tartışmasız).
// ═══════════════════════════════════════════════════════════════════════

window.SEFERLER_OK103 = [

  // ══════════════════════════════════════════════════════════════════
  // H-0093 — "napolyonun akka harekatı ile ilgili harekat okları
  //           konulabilir. genel olarak askeri harekat ve seferlerin
  //           hepsine konabilir"
  // ══════════════════════════════════════════════════════════════════
  // Altyapı (9 tür / 9 glif, commit 591a5c6 · 30 Temmuz) ZATEN HAZIRDI;
  // eksik olan yalnız VERİYDİ. ⑥'nın iki ölçümü yapıldı:
  //   ① git log — tipoloji 30 Temmuz'da kurulmuş, ama Akkâ kaydı YOK.
  //   ② şikâyet 26 Ağustos (paket damgası) — commit'ten ~1 ay SONRA,
  //      yani bu K10'un "22 dakikalık bayat şikâyet" vakası DEĞİL.
  { ad: "Napolyon'un Suriye seferi (1799) — Akkâ kuşatması", tur: "sefer",
    sonuc: "yenilgi", taraf: "dusman", renk: "#1f5fa8",
    f: "1799-02-18", t: "1799-03-19",
    yol: [[31.24, 30.05], [32.66, 30.94], [33.80, 31.13], [34.47, 31.50],
          [34.75, 32.05], [34.99, 32.82], [35.07, 32.93]],
    kaynak: "TDV \"ARÎŞ\" — Fransızlar El-Ariş kalesini 18 Şubat 1799'da işgal " +
      "etti (Osmanlılar 17 Kasım 1799'da geri aldı, 24 Ocak 1800'de burada " +
      "antlaşma yapıldı). TDV \"CEZZÂR AHMED PAŞA\" — kuşatma \"19 ve 20 Mart " +
      "1799\"da başladı. Ara duraklar (Katye · Gazze · Yafa · Hayfa) Sina-Filistin " +
      "kıyı yolunun menzilleridir. ⚠️ Yafa'nın TARİHİ kullanılmadı: TDV \"YÂFÂ\" " +
      "\"6 Mayıs 1799\" diyor, bu Akkâ kuşatmasının başlangıcından SONRA ve " +
      "kronolojik olarak imkânsız — çelişki koordinatöre bildirildi." },

  { ad: "Napolyon'un Akkâ'dan çekilişi (1799)", tur: "cekilme",
    sonuc: "yenilgi", taraf: "dusman", renk: "#1f5fa8",
    f: "1799-05-20", t: "1799-06-14",
    yol: [[35.07, 32.93], [34.99, 32.82], [34.75, 32.05], [34.47, 31.50],
          [33.80, 31.13], [32.66, 30.94], [31.24, 30.05]],
    kaynak: "TDV \"CEZZÂR AHMED PAŞA\" — Napolyon \"20 Mayıs'ta kuşatmayı " +
      "kaldırıp geri çekilmeye mecbur oldu\" (1799). ⚠️ Kahire'ye VARIŞ günü " +
      "(14 Haziran 1799) TDV'de bulunamadı — TDV bu taneciği kapsamıyor (§4); " +
      "standart akademik kabul. Güzergâh gidişin aynasıdır." },

  // ══════════════════════════════════════════════════════════════════
  // H-0094 — "vehhabilerin askeri hareketlerini oklar ile gösterelim"
  // ══════════════════════════════════════════════════════════════════
  // Üç ayrı harekât; üçünün de günü TDV'den geldi, hiçbiri uydurulmadı.
  { ad: "Vehhâbîlerin Kerbelâ baskını (1801)", tur: "akin",
    sonuc: "zafer", taraf: "dusman", renk: "#0d7d8a",
    f: "1801-04-01", t: "1801-05-01",
    yol: [[46.57, 24.73], [44.02, 32.62]],
    kaynak: "TDV \"KERBELÂ\" — BİREBİR: \"1801 yılı Nisan ayı başlarında " +
      "Vehhâbîler Kerbelâ'yı yağmalayıp 3000'in üzerinde Şiî'yi öldürdüler; " +
      "bu arada Hz. Hüseyin'in sandukasını tahrip ederek türbedeki kıymetli " +
      "eşya ve hediyeleri alıp götürdüler.\" ⚠️ ARA DURAK KOYULMADI: TDV " +
      "kuvvetin hangi menzillerden geçtiğini yazmıyor, uydurmadım — iki uç " +
      "nokta (Dir'iye · Kerbelâ) kaynaklı, arası boş bırakıldı." },

  { ad: "Vehhâbîlerin Tâif ve Mekke seferi (1803)", tur: "sefer",
    sonuc: "zafer", taraf: "dusman", renk: "#0d7d8a",
    f: "1803-02-01", t: "1803-04-30",
    yol: [[46.57, 24.73], [40.42, 21.27], [39.83, 21.42]],
    kaynak: "TDV \"MEKKE\" — Vehhâbîler Tâif'i \"1803 Şubatında\" ele geçirdi; " +
      "ardından Mekke'ye yönelip \"30 Nisan 1803\" tarihinde şehri işgal etti. " +
      "⚠️ Şubat'ın günü TDV'de yok; ayın 1'i yazıldı (proje kuralı: gün " +
      "bilinmiyorsa uydurma)." },

  { ad: "Vehhâbîlerin Medine'yi alışı (1805)", tur: "kusatma",
    sonuc: "zafer", taraf: "dusman", renk: "#0d7d8a",
    f: "1805-06-01", t: "1805-06-30",
    yol: [[39.83, 21.42], [39.61, 24.47]],
    kaynak: "TDV \"MEDİNE\" — BİREBİR: \"Vehhâbîler şehri kuşattılar; bazı " +
      "küçük çatışmaların ardından işgal edip (Haziran 1805)\". ⚠️ Gün TDV'de " +
      "yok; ay biliniyor, ayın 1'i yazıldı." },

  // ══════════════════════════════════════════════════════════════════
  // H-0095 — "alemdar mustafa paşanın istanbula gelmesi harekâtı gibi
  //           iç harekatları da oklar ile gösterelim haritada"
  // ══════════════════════════════════════════════════════════════════
  // 🔴 EMRE'NİN CÜMLESİNDE BİR VARSAYIM VAR ve TDV onu DÜZELTİYOR:
  //    Alemdar İstanbul'a RUSÇUK'tan değil EDİRNE'den yürüdü. TDV
  //    "ALEMDAR MUSTAFA PAŞA": ateşkes sırasında ordu Edirne'deydi;
  //    "Edirne'den yola çıkıldı" ve Sadrazam Çelebi Mustafa Paşa'nın
  //    maiyetiyle birlikte gidildi. Rusçuk yârânı meselesi ONDAN ÖNCEKİ
  //    aşamadır. ⇒ Ok Edirne'den başlıyor.
  { ad: "Alemdar Mustafa Paşa'nın İstanbul'a yürüyüşü (1808)", tur: "sefer",
    sonuc: "zafer",
    f: "1808-07-01", t: "1808-07-19",
    yol: [[26.56, 41.68], [27.10, 41.43], [27.36, 41.41], [27.80, 41.16],
          [28.25, 41.07], [28.77, 40.99], [28.90, 41.02]],
    kaynak: "TDV \"ALEMDAR MUSTAFA PAŞA\" — ordu ateşkes sırasında Edirne'deydi; " +
      "\"Edirne'den yola çıkıldı\" ve İstanbul'da Dâvud Paşa sahrasına " +
      "\"19 Temmuz 1808\"de varıldı, Sultan IV. Mustafa tarafından karşılandı. " +
      "Ara duraklar Rumeli Sağ Kol (Via Militaris) menzilleridir — Babaeski · " +
      "Lüleburgaz · Çorlu · Silivri · Küçükçekmece; bu kol `data/savaslar.js:511` " +
      "başlığında zaten tarif edilmiştir. " +
      "⚠️⚠️ BAŞLANGIÇ GÜNÜ TAHMİNDİR: Edirne'den çıkış günü TDV'de BULUNAMADI. " +
      "Yalnız VARIŞ günü (19 Temmuz 1808) kesindir. Okun başlangıcı ayın 1'ine " +
      "konuldu; bu bir ÖLÇÜM DEĞİL, çizim için gereken bir tahmindir." },

  // ══════════════════════════════════════════════════════════════════
  // H-0098 — "tosun paşanın hicaz seferi oklar ile harekat okları ile
  //           gösterilmeli"
  // ══════════════════════════════════════════════════════════════════
  { ad: "Tosun Paşa'nın Hicaz seferi (1811-1813)", tur: "sefer",
    sonuc: "zafer",
    f: "1811-03-01", t: "1813-01-23",
    yol: [[31.24, 30.05], [32.53, 29.97], [38.06, 24.09], [39.61, 24.47],
          [39.83, 21.42]],
    kaynak: "TDV \"KAVALALI MEHMED ALİ PAŞA\" — sefer Tosun kumandasında " +
      "başladı, \"Tosun'un şerefine 1 Mart 1811'de düzenlediği büyük davette\". " +
      "TDV \"YENBU'\" — \"Yenbu' tekrar Osmanlı egemenliğine sokuldu (1811)\". " +
      "TDV \"MEDİNE\" — \"iki hafta kadar süren bir kuşatmanın ardından " +
      "3 Aralık 1812'de Medine geri alındı\". TDV \"MEKKE\" — \"23 Ocak 1813\" " +
      "Tosun Paşa, Şerîf Gālib'in yardımıyla Mekke'ye girdi. " +
      "⚠️ SÜVEYŞ ara durağı TDV'de doğrulanamadı (bulunamadı — bu tanecik " +
      "kapsanmıyor); Mısır kuvvetlerinin Kızıldeniz'e Süveyş'ten açıldığı " +
      "standart akademik kabuldür ve okun DENİZDEN gitmesi için gereklidir. " +
      "Karadan çizilseydi güzergâh Nüfûd çölünden geçecekti — açıkça yanlış." },

  // ══════════════════════════════════════════════════════════════════
  // H-0081 — "çeşme baskını konusunda ne bir işaretleme var ne rus
  //           filosunun geçip geldiği kesik kesik çizgiler var"
  // ══════════════════════════════════════════════════════════════════
  // 🔴 EMRE'NİN İSTEDİĞİ UZUN YOLCULUK (Baltık→Akdeniz) YAZILMADI ve
  //    sebebi açıkça buraya yazılıyor: Kronştad-Kopenhag-Hull-Cebelitarık
  //    güzergâhı TDV'de YOK, ve akademik taramada da (Cambridge · JSTOR ·
  //    Brill · T&F · Project MUSE, beş sorgu) BULUNAMADI. Uydurmadım.
  //    Yazılan, TDV'nin gerçekten anlattığı EGE AYAĞIDIR.
  //    ⇒ Baltık ayağı için `bulunamadı` bir SONUÇTUR; kaynak çıkarsa
  //      bu kaydın `yol`u başına eklenerek uzatılır.
  { ad: "Osmanlı donanmasının Mora'dan Çeşme'ye çekilişi (1770)",
    tur: "cekilme", sonuc: "yenilgi",
    f: "1770-06-01", t: "1770-07-05",
    yol: [[22.80, 37.57], [23.47, 37.35], [24.42, 37.39], [24.94, 37.44],
          [25.15, 37.08], [27.02, 37.75], [26.42, 38.42]],
    kaynak: "TDV \"ÇEŞME VAK'ASI\" — Rus donanması Anabolu ve Hydra açıklarında " +
      "çarpıştı, Osmanlı donanması çekildi; çekiliş \"Sisam Boğazı'ndan Termiye, " +
      "Şira ve Paros adaları üzerinden\" oldu ve Çeşme'nin kuzeyindeki Koyun " +
      "Adaları civarında Ruslarla yeniden karşılaşıldı. ⚠️ Başlangıç günü " +
      "TDV'de yok; Rusların Mora'daki kuvvetlerini Haziran başında tahliye " +
      "ettiği akademik kayda dayanılarak ayın 1'i yazıldı (The Mariner's " +
      "Mirror 103/3, 2017, Çeşme muharebesi çözümlemesi)." },

  { ad: "Rus donanmasının takibi ve Çeşme baskını (1770)", tur: "deniz",
    sonuc: "zafer", taraf: "dusman", renk: "#1f5fa8",
    f: "1770-06-01", t: "1770-07-07",
    yol: [[22.80, 37.57], [23.47, 37.35], [24.42, 37.39], [24.94, 37.44],
          [25.15, 37.08], [27.02, 37.75], [26.42, 38.42], [26.30, 38.32]],
    kaynak: "TDV \"ÇEŞME VAK'ASI\" — \"1770 yılı başlarında Mora Rumları'nı " +
      "ayaklandırmak için Rus Amirali Spiridov ve İngiliz Amirali Elphinston " +
      "kumandasındaki Rus donanması İngilizler'in de desteğiyle Akdeniz'e " +
      "açılmış\"; muharebe \"11 Rebîülevfel 1184 (5 Temmuz 1770) tarihinde " +
      "Çeşme Limanı'nın kuzeyi ile Toprak adasının güneydoğusunda\" başladı; " +
      "6 Temmuz'da Ruslar liman ağzını kapatıp ateş gemileri gönderdi ve " +
      "yaklaşık otuz Osmanlı gemisi tutuştu; 7 Temmuz sabahı iş bitmişti. " +
      "⚠️ BALTIK AYAĞI (Kronştad → Cebelitarık → Akdeniz) TDV'de YOK ve " +
      "akademik taramada da bulunamadı — YAZILMADI, uydurulmadı." }

];

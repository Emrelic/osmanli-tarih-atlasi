// ============================================================================
// İTTİFAKLAR — Osmanlı'ya karşı (ya da Osmanlı'nın taraf olduğu) ittifakların
// ÜYELİK verisi. P11-SEFER, 14 Eylül 2026 · maddeler parti-emrelic-0023/H-0003,
// 0027/H-0006 (Kutsal İttifak rozeti + ip), 0021/H-0030 (1594 Erdel katılışı).
// Çizim (rozet · Osmanlı'yı dolanan ip · tek seferlik animasyon) P14'ün işidir;
// bu dosya YALNIZ veri + şema. index.html'e bağlanmadı (koordinatör bağlar).
//
// ŞEMA  window.ITTIFAKLAR = [ ittifak, … ]
//   id        benzersiz kimlik
//   ad        görünen ad
//   hedef     [devletler.js id]  ittifakın karşısındaki devlet(ler)
//   f / t     ittifakın BAŞLANGIÇ / BİTİŞ günü — SEFERLER gibi `t` = BİTİŞ (§11 D190:
//             SAVASLAR'da `t` başlangıçtır; burada DEĞİL). Bilinmiyorsa null + `t_damga`.
//   kesinlik  {f:"gun|ay|yil", t:"…"}  — tarih alanı kaynağın desteklediği en kaba düzey
//             (CLAUDE.md §4); ay ⇒ YYYY-MM-01, yıl ⇒ YYYY-01-01, ayrıntı `kaynak`/`not`ta
//   yer, yer_kon [lat,lon]  kuruluş yeri (varsa)
//   madde     {t, b}  kronolojide ittifakı açan madde (animasyonun tetik adayı; P14 eşler)
//   uyeler    [ {devlet, rol:"uye"|"hami", f, t, kesinlik:{f,t}, kaynak, not} ]
//             f = katılış, t = ayrılış (null = ittifak sonuna dek ya da bulunamadı — `not`)
//   kaynak    ittifak düzeyinde kaynak dizgisi (alıntılar ≤15 kelime)
//   celiski   [dizgi]  kaynaklar arası çelişkiler — SİLİNMEZ, taraf seçilmediyse hüküm yok
//   not
// Kural: yalnız KAYNAKTA ADI GEÇEN üye yazılır; "katkı veren" ama üye diye anılmayan
// (Malta şövalyeleri, Toskana vb.) YAZILMADI. Atlas verisi dayanak DEĞİLDİR (§4).
// ============================================================================
window.ITTIFAKLAR = [

// ---------------------------------------------------------------------------
// 1594 KUTSAL İTTİFAKI (Uzun Savaş) — Papa VIII. Clément himayesi
// ---------------------------------------------------------------------------
{ id:"kutsal-ittifak-1594", ad:"Kutsal İttifak (1594) — Uzun Savaş", hedef:["osmanli"],
  f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
  t_damga:"bulunamadı — ittifakın sona erdiği gün/olay okunan kaynaklarda yok. Zitvatorok (11 Kasım 1606, TDV zitvatorok-antlasmasi) Habsburg-Osmanlı barışıdır; ittifakın bitişi diye BİRLEŞTİRİLMEDİ",
  madde:{t:"1594-08-28", b:"Üç voyvodalığın ayaklanması başlıyor — Erdel Kutsal İttifak'a geçti, Osmanlı yanlısı beyler tutuklandı"},
  uyeler:[
    { devlet:"papalik", rol:"hami", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"bogdan (TDV): \"Papa VIII. Clément'in himayesi altında … kurulan Kutsal İttifak\"" },
    { devlet:"habsburg", rol:"uye", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"bogdan (TDV): \"Avusturya Kralı II. Rudolf ile Erdel Prensi Zsigmond Báthory arasında kurulan Kutsal İttifak\"" },
    { devlet:"erdel", rol:"uye", f:"1594-02-01", t:null, kesinlik:{f:"ay", t:null},
      kaynak:"History of Transylvania I (ed. B. Köpeczi, MTA; MEK html 118, s. 1-746): \"the pact was sealed at Gyulafehérvár in February 1594\" · \"Transylvania, announced Zsigmond, would adhere to the Holy League\" · aynı eser s. 1-748: \"on 28 January 1595, a treaty of alliance was signed between Transylvania and the Habsburg Empire\" (Prag)",
      not:"Katılış AY (Şubat 1594). İç muhalefetin tasfiyesi 28 Ağustos 1594 (HoT) ayrı olaydır; Habsburg ile resmî ittifak antlaşması 28 Ocak 1595 Prag — üye kaydında İKİ AYRI TARİH, birleştirilmedi" },
    { devlet:"bogdan", rol:"uye", f:"1594-08-16", t:null, kesinlik:{f:"gun", t:null},
      kaynak:"A.-M. Crăciun, \"Tratatele lui Sigismund Báthory cu Țara Românească și Moldova (1595): o comparație\", Crisia LIII (2023), s. 127 vd.: \"Moldova lui Aron a intrat oficial de partea creștinilor prin semnarea unui document în data de 16 august 1594\" · bogdan (TDV): \"1594'te … kurulan Kutsal İttifak'a girdi\"",
      not:"Boğdan'ın Báthory'ye tâbiliğini tanıması ayrı antlaşma: HoT \"Moldavia (on July 3)\" 1595 · Crăciun 3 Haziran 1595 (arama özetinden; PDF'te ayrıca SINANMADI) — çelişki" },
    { devlet:"eflak", rol:"uye", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"Crăciun 2023 (yukarıda): \"Țara Românească aderă la Ligă în toamna aceluiași an\" (1594) · HoT s. 1-748: \"Around the middle of 1594, he concluded a secret pact with Zsigmond Báthori\"",
      not:"Kaynak MEVSİM veriyor (sonbahar 1594) ⇒ YIL kodu. Eflak'ın Báthory'ye tâbiliği 20 Mayıs 1595 (HoT \"Wallachia (on May 20)\") ayrı olay" }
  ],
  celiski:[
    "Eflak katılışı: Crăciun 2023 'sonbahar 1594' · HoT 'middle of 1594' Báthory ile GİZLİ pakt (Liga'ya katılış değil) — ikisi farklı şeyi tarihliyor olabilir",
    "Boğdan'ın Báthory tâbiliği: HoT 3 Temmuz 1595 · Crăciun 3 Haziran 1595 (arama özeti, PDF'te okunmadı)"
  ],
  not:"Harita üyelik verisi: üç voyvodalık haritada tâbi renginde kalır (Emre C2), isyan taraması data/isyan_tarama.js. Rozet üyeliği, sahipliği DEĞİŞTİRMEZ." },

// ---------------------------------------------------------------------------
// 1684 KUTSAL İTTİFAKI (Mukaddes İttifak / Liga Sancta) — II. Viyana sonrası
// ---------------------------------------------------------------------------
{ id:"kutsal-ittifak-1684", ad:"Kutsal İttifak (1684) — Mukaddes İttifak", hedef:["osmanli"],
  f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
  yer:"Linz", yer_kon:[48.3069,14.2858],
  madde:{t:"1684-03-05", b:"Kutsal İttifak kuruldu"},
  uyeler:[
    { devlet:"papalik", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Polonya Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan … Kutsal İttifak'a girip\"",
      not:"TDV papalığı ittifakı KURAN taraflar arasında sayıyor; rol 'uye'. Karlofça'da papalık heyeti TDV karlofca'da ANILMIYOR ⇒ t = ittifakın sonu (Karlofça), üye düzeyinde ayrıca kaynaklı DEĞİL" },
    { devlet:"habsburg", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan\" · karlofca (TDV): \"Avusturya, Lehistan, Venedik'in oluşturduğu\" · \"24 Receb 1110 (26 Ocak 1699) tarihinde imzalandığı\"" },
    { devlet:"venedik", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan\" · karlofca (TDV): \"24 Receb 1110'da (26 Ocak 1699) on altı maddelik Vene[dik antlaşması]\"" },
    { devlet:"lehistan", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Polonya Mart 1684'te … Kutsal İttifak'a girip mücadeleyi sürdürdü\" · karlofca (TDV): \"Kutsal İttifak'ın diğer iki üyesi Lehistan ve Rusya\"",
      not:"Karlofça Leh musâlahanâmesinin GÜNÜ TDV karlofca'da ayrıca verilmiyor (görüşme başı 22 Kasım 1698); t = genel imza günü 26 Ocak 1699 — üye düzeyinde çıkarım" },
    { devlet:"rusya", rol:"uye", f:"1686-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"polonya (TDV): \"1686'da Rusya'nın da katıldığı Kutsal İttifak\" · karlofca (TDV): \"Kutsal İttifak'ın diğer iki üyesi Lehistan ve Rusya\" · Encyclopedia of Ukraine, vol. 1 (1984), 'Eternal Peace of 1686': \"Muscovy became an ally in the anti-Turkish coalition known as the Holy League\"",
      not:"Katılış GÜNÜ yazılmadı: Ebedî Barış günü Encyclopedia of Ukraine'de '16 May 1686' (başka yayınlarda 26 Nisan J / 6 Mayıs G — yalnız Vikipedi/popüler, KULLANILMADI) ⇒ YIL. t bulunamadı: Rusya Karlofça'da temsilci gönderdi (TDV karlofca) ama barışın/ayrılışın günü okunan kaynaklarda yok" }
  ],
  kaynak:"polonya (TDV) · karlofca (TDV, Abdülkadir Özcan) · rusya (TDV) · Encyclopedia of Ukraine vol. 1 (1984)",
  celiski:[
    "Kuruluş GÜNÜ: kronoloji maddesi (olaylar_ek3.js) '5 Mart 1684' diyor, kaynak alanı 'ölçülemedi'; TDV polonya yalnız 'Mart 1684' ⇒ veri AY. 5 Mart yalnız Vikipedi'de okundu (kullanılmadı)",
    "Rusya katılış YILI: TDV polonya 1686 · Encyclopedia of Ukraine 1686 · TDV karlofca '1695'te Rusya'nın da katıldığı müttefik kuvvetler' · TDV rusya 'Kutsal İttifak'a dahil olarak katılmıştır (1684)' — üç yıl, iki kaynak 1686 ⇒ 1686 yazıldı; karlofca'nın 1695'i fiilî harekât (Azak) yılı olabilir, rusya'nın 1684'ü muhtemel yanlış — HÜKÜM YOK",
    "Ebedî Barış günü: Encyclopedia of Ukraine '16 May 1686' — Jülyen 26 Nisan / Gregoryen 6 Mayıs ile uyuşmuyor (D110 takvim) — okunmadı, yazılmadı"
  ],
  not:"Malta şövalyeleri ve Toskana Venedik donanmasına katkı verdi ama okunan kaynaklarda ÜYE diye anılmıyor ⇒ yazılmadı (bulunamadı, aranmadı değil: TDV malta gövdesinde 1684/Kutsal İttifak eşleşmesi 0)." }

];

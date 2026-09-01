// -*- coding: utf-8 -*-
// SEFERLER_P0037 — PAKET-0037 oturumu (Fable), 2 Eylül 2026 · p0037/H-0006
//
// 🔴 BU DOSYA index.html'e BAĞLI DEĞİLDİR ve app.js yalnız `window.SEFERLER`i okur (app.js:2675).
//    Aşağıdaki kayıt, data/savaslar.js:743'teki "Abdülaziz'in Avrupa seyahati (1867)" kaydının
//    YERİNE GEÇECEK tam hâlidir (aynı ad · aynı tur · aynı f/t; yalnız `yol` dizisi genişledi).
//    Uygulama koordinatörün (savaslar.js onun): kaydı savaslar.js'te değiştir YA DA app.js:2675'te
//    `(window.SEFERLER || []).concat(window.SEFERLER_P0037 || [])` ile bağla ve eski kaydı düşür.
//    İki yol da olur; ikisi birden OLMAZ (mükerrer ok).
//
// EMRE'NİN İSTEĞİ (H-0006): "önce deniz yolu ile nereye çıktı, sonra nereden nereye kara ile gitti,
// nerede konakladı; adım adım. Ama İstanbul'dan Londra'ya uçmuş gibi olmasın."
// Mevcut kayıt: 5 nokta (İstanbul → Paris → Londra → Viyana → İstanbul), düz hatlar — savaslar.js'in
// kendi yorumu "ara duraklar uydurulmadı" diyordu. Doğru davranış: uydurmak değil KAYNAK bulmak.
//
// KAYNAK (§4 kırmızı çizgi — ikisi de hakemli):
//   [1] "Sultan Aziz'in Avrupa Seyahati Dönüşü Münasebetiyle ...", Osmangazi Üniversitesi Sosyal
//       Bilimler Dergisi, C. 4, S. 1 (Haziran 2003) — dergipark.org.tr/en/download/article-file/112955
//       (PDF indirildi, metni pypdf ile çıkarıldı, 20 sayfa). Günler buradan.
//   [2] Murat Yurtbilir, "Sultan Abdülaziz'in 1867 Avrupa Gezisine Bir ...", Eklektik (İstanbul Gedik
//       Üniversitesi), s. 129-160 — eklektik.gedik.edu.tr/wp-content/uploads/129-160-Murat-Yurtbilir.pdf
//       (PDF indirildi, 32 sayfa). Ara duraklar (Nürnberg · Passau · Novi Sad · Belgrad · Orşova · Vidin)
//       ve Dover/Koblenz ayrıntıları buradan.
//   [3] TDV `abdulaziz` (gövdesi okundu): 21 Haziran çıkış, 7 Ağustos dönüş, Fransa · İngiltere ·
//       Belçika · Prusya · Avusturya; "Paris'in Lyon Garı'nda karşılanış" görsel altyazısı.
//
// GÜZERGÂH — [1] ve [2]'den, gün gün:
//   21 Haz  İstanbul (Ortaköy'de cuma namazı, Sultâniye vapuru)                    DENİZ
//   24 Haz  Mora açıkları · 25 Haz Messina (Sicilya) · 28 Haz Napoli                DENİZ
//   29 Haz  Toulon'a çıkış — kara vapuru (tren) ile Marsilya üzerinden                KARA (tren)
//   30 Haz  Paris, Lyon Garı (Lyon üzerinden) — 10 Tem'a kadar Paris                 KARA (tren)
//   10 Tem  Paris → Boulogne (tren) · Manş'ı gemiyle → Dover · tren → Londra          KARA+DENİZ+KARA
//   12-23 Tem Londra · 23 Tem trenle Dover'a, Manş'ı geçip Belçika-Prusya trenleri     KARA+DENİZ+KARA
//   24 Tem  Brüksel (öğle yemeği) · 24/25 Tem Ren üzerinden Koblenz (I. Wilhelm)        KARA (tren)
//   26 Tem  Koblenz → Nürnberg → Passau → 27/28 Tem Viyana                              KARA (tren)
//   31 Tem  Viyana'dan Tuna vapuruyla → Peşte (31 Tem, Budin'de konaklama)               NEHİR
//    1-3 Ağu Novi Sad · Belgrad · Orşova (Demirkapı) · 3 Ağu akşamı Vidin                 NEHİR
//    4 Ağu  Vidin → Rusçuk (akşam; Âlî Paşa ve Serasker Rüşdü Paşa karşıladı)            NEHİR
//    6 Ağu  Rusçuk → Varna (Rusçuk-Varna demiryolu)                                   KARA (tren)
//    7 Ağu  Varna → İstanbul (gemi)                                                   DENİZ
// Kaynak çelişkisi: [2] bir yerde "28 Haziran ... Dover" yazıyor; [1] Toulon'u 29 Haziran, Londra
// girişini Temmuz ortası veriyor ve [3]'ün Fransa-önce sırasıyla uyuşuyor — [1] esas alındı,
// çelişki gizlenmedi. Dover'dan Belçika'ya hangi limandan geçildiği iki kaynakta da yazmıyor;
// Calais en kısa hat olarak seçildi (COĞRAFÎ VARSAYIM, tek uydurulan ayrıntı budur, işaretli).
//
// Koordinatlar [lon, lat] (savaslar.js `yol` deseni), coğrafî bilgi.

window.SEFERLER_P0037 = [
{ ad:"Abdülaziz'in Avrupa seyahati (1867)", tur:"seyahat", sonuc:"belirsiz",
  f:"1867-06-21", t:"1867-08-07",
  yol:[
    [28.98,41.01],   // İstanbul — 21 Haz, Sultâniye vapuru (deniz)
    [26.41,40.15],   // Çanakkale Boğazı (deniz)
    [22.48,36.40],   // Mora açıkları — 24 Haz (deniz)
    [15.55,38.19],   // Messina — 25 Haz (deniz)
    [14.25,40.84],   // Napoli — 28 Haz (deniz)
    [5.93,43.12],    // Toulon — 29 Haz, KARAYA ÇIKIŞ
    [5.37,43.30],    // Marsilya (tren)
    [4.84,45.76],    // Lyon (tren)
    [2.35,48.86],    // Paris, Lyon Garı — 30 Haz–10 Tem
    [1.61,50.73],    // Boulogne — 10 Tem (tren), Manş'a biniş
    [1.31,51.13],    // Dover — 11 Tem (gemi)
    [-0.13,51.51],   // Londra — 12–23 Tem (tren)
    [1.31,51.13],    // Dover — 23 Tem (tren)
    [1.86,50.95],    // Calais — Manş geçişi (VARSAYIM: liman kaynaklarda yazmıyor)
    [4.35,50.85],    // Brüksel — 24 Tem (tren)
    [7.59,50.36],    // Koblenz — 24/25 Tem (tren, Ren vadisi), I. Wilhelm
    [11.08,49.45],   // Nürnberg — 26 Tem (tren)
    [13.46,48.57],   // Passau — 26/27 Tem (tren)
    [16.37,48.21],   // Viyana — 27/28–31 Tem
    [19.04,47.50],   // Peşte — 31 Tem (Tuna vapuru), Budin'de konaklama
    [19.84,45.25],   // Novi Sad (Tuna)
    [20.46,44.82],   // Belgrad (Tuna)
    [22.40,44.72],   // Orşova / Demirkapı (Tuna)
    [22.87,43.99],   // Vidin — 3 Ağu akşamı (Tuna)
    [25.97,43.86],   // Rusçuk — 4 Ağu (Tuna)
    [27.91,43.21],   // Varna — 6 Ağu (Rusçuk-Varna demiryolu)
    [28.98,41.01]    // İstanbul — 7 Ağu (gemi)
  ] }
];

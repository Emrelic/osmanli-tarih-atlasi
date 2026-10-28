// -*- coding: utf-8 -*-
// SEFERLER_P0037 — PAKET-0037 oturumu (Fable), 2 Eylül 2026 · p0037/H-0006
//
// 🔴 6 Ekim 2026, UMIT-W4-ELLEVERI-1006 — KAYIT data/savaslar.js'e TAŞINDI, bu dizi BOŞ.
//    Eski not "ikisi birden OLMAZ" diyordu; olan tam oydu: dosya index.html'e bağlandı
//    (SEFERLER_* toplayıcısı), savaslar.js'teki 5 noktalı eski kayıt da kaldı ⇒ mükerrer ok.
//    app.js `_mukerrerMi` İLK çizileni (savaslar.js) tuttuğu için bu dosyanın kaynaklı
//    27 noktalı rotası ELENİYORDU. Şimdi rota + `kaynak` alanı savaslar.js kaydında.
//    Dosya SİLİNMEDİ: index.html ve paket künyesi onu yüklüyor; boş dizi toplayıcıda 0/0 sayılır.
//    Aşağıdaki kaynak ve gün gün güzergâh notu BELGE olarak duruyor.
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

window.SEFERLER_P0037 = [];

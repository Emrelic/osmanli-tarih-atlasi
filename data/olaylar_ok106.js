// ============================================================================
// OLAYLAR_OK106 — parti-emrelic-0034 / H-0005'in AÇTIĞI KIRILMA MADDESİ
// window.OLAYLAR_OK106   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 106 · 1-2 Eylül 2026 · koordinatör 1.MURAT · şartname M-1903
// ============================================================================
//
// 🔴 NİÇİN BU DOSYA DOĞDU — bir REÇETE, kendi testini geçmiyordu.
//
// UYGULAMA-3 oturumu 0034/H-0005 için tam hazır bir öneri devretmişti (M-1466):
//     Abâdân  d:[{ f:"1546-01-01", t:"1847-01-01" }]
//     kaynak: TDV `abadan` — "Uzun süre Osmanlı hâkimiyetinde kalan Abadan,
//             1847 Erzurum Antlaşması ile İran'a geçmiştir."
// Öneri DOĞRUYDU ve kaynağı sağlamdı. Ama uygulanınca Değişmez 2'yi KIRARDI:
//
//     1546-01-01  ⇒ kırılma VAR ve maddesi VAR
//                    (`olaylar_ek5.js` — "Basra'nın ilhakı ve Basra Körfezi'ne çıkış")
//     1847-.....  ⇒ kırılma VAR, maddesi YOK
//                    ÖLÇÜLDÜ: `data/olaylar*.js` (denetle.py'nin ÇEKİRDEK evreni,
//                    `denetle.py:902` glob) içinde 1847 tarihli MADDE YOK — sıfır.
//                    En yakınları 1846-11-29 ve 1848-09-01 ⇒ ±30 günün ÇOK dışında.
//
// 🔴 VE BU, "GÜN ZATEN VAR" TUZAĞININ KOVA YÜZÜ (`CLAUDE.md §11`):
//     `grep t:"1847-05-31" data/*.js` → BULUR (data/devletler.js, `kacar` künyesinin
//     kendi kronolojisi). Ama `devletler.js` çekirdek DEĞİL; Değişmez 2 yalnız
//     `olaylar*.js`e bakar. "Bu gün külliyatta var" demek yetmiyor —
//     HANGİ KOVADA olduğu da sorulmalı. Sorulmasaydı yayın kapısı kapanırdı
//     (Değişmez 2'nin AÇIK tavanı SIFIR).
//
// ⇒ Önce MADDE yazılır, sonra dönem. Bu dosya o maddedir.
//
// ═══════════ GÜN SEÇİMİ — ve gününün NEREDEN geldiği ═══════════
//   TDV `sattularap` (200, gövdesi okundu):  "1847 Mayısında Erzurum'da imzalanan"
//                                            ⇒ AY veriyor, GÜN vermiyor
//   TDV `abadan`     (200, gövdesi okundu):  "1847 Erzurum Antlaşması ile İran'a
//                                            geçmiştir" ⇒ YIL
//   TDV `huzistan`   (200, gövdesi okundu):  "Şattülarap Osmanlılar'da kalmak üzere
//                                            bu yerler Kaçarlar'a bırakıldı"
//   TDV `erzurum-antlasmasi` → 302 ÖLÜ · `kacarlar` → 200 ama antlaşmayı ANMIYOR
//                              (ölçtüm; `devletler.js`teki günün kaynağı O DEĞİL)
//
// 🟡 GÜN (31 Mayıs) TDV'DEN GELMİYOR — açıkça yazıyorum. İki dayanağı var:
//    ① projenin KENDİ kaydı: `data/devletler.js` `kacar` künyesi
//       { t:"1847-05-31", tur:"antlasma", b:"II. Erzurum Antlaşması — Şattülarap
//         sınır anlaşmazlığı çözüldü" }  — bugün zaten orada duruyor
//    ② standart akademik tarihleme (II. Erzurum Antlaşması, 31 Mayıs 1847)
//    ve TDV'nin verdiği AY (Mayıs) ikisini de doğruluyor.
//    📌 `1847-01-01` yazmak §4'e daha "uygun" görünürdü ama YANLIŞ olurdu:
//       gün bilinmiyor değil, TDV'nin O MADDESİ vermiyor. Ve 1847-01-01 yazmak
//       projenin kendi kaydıyla ÇELİŞEN İKİNCİ bir gün doğururdu.
//
// ═══════════ DENETİM ETKİSİ — önceden yazıyorum, ÇÜRÜTÜLEBİLİR ═══════════
//   ① Bu dosya TEK BAŞINA bağlanırsa (yama henüz uygulanmadan):
//      `2t` (kırılmasız madde) 32 → 33 olur. Tavan 42 ⇒ ALTINDA, yayın durmaz.
//   ② `data/yer_yama_ok106.js` uygulandıktan SONRA:
//      1847-05-31 bir kırılma günü olur ⇒ `2t` 33 → 32'ye DÖNER,
//      ve Abâdân'ın iki kırılmasının İKİSİ de maddeli olur ⇒ `2` AÇIK = 0 KALIR.
//   🔴 ②'nin tutmaması için mazeret YOK: ikisi birlikte bağlanmalı.
// ============================================================================

window.OLAYLAR_OK106 = [

  { t:"1847-05-31", k:"antlasma", etiket:["antlasma","diplomasi","toprak-kayip"],
    b:"II. Erzurum Antlaşması — Şattülarap sınırı ve Hûzistan kıyısının bırakılması",
    gun:"Mayıs 1847", yer:"Erzurum", yer_id:"Erzurum",
    d:"Yüzyılı aşkın süredir çözülemeyen Osmanlı-İran sınır anlaşmazlığı, İngiliz ve Rus arabuluculuğunda yürütülen uzun görüşmelerin ardından Erzurum'da imzalanan ikinci antlaşmayla düzenlendi. Şattülarap suyolunun tamamı Osmanlı'da kaldı; buna karşılık nehrin doğu yakasındaki yerleşimler -Muhammere limanı ve karşısındaki Abadan adası dâhil- Kaçarlar'a bırakıldı. Böylece Basra'nın 1546'daki ilhakından beri Osmanlı idaresinde sayılan Hûzistan kıyı şeridi üç yüz yıl sonra elden çıktı. Antlaşmanın çizdiği hattı yerinde tesbit etmek üzere kurulan sınır komisyonunun üyesi Mehmed Hurşid Paşa, 1848-1852 arasında bölgeyi dolaşarak Seyâhatnâme-i Hudûd'u kaleme aldı.",
    kaynak:"sattularap", duygu:["🤝","😔"] },

  // ── 1703 · YENİKALE — `data/yerlesimler_ok106.js`in AÇTIĞI KIRILMANIN MADDESİ
  // 🔴 NİÇİN BURADA: Yenikale 1703'te SIFIRDAN kurulan bir kale ve ilk `d:`
  //    döneminin başı bir Osmanlı kırılmasıdır ⇒ Değişmez 2, tavanı SIFIR.
  //    Ölçüldü: `data/olaylar*.js` çekirdeğinde 1703-01-01 tarihli madde YOKTU
  //    (o yılın günleri 1703-03-01 · 05-27 · 07-17 · 08-22 — hiçbiri ±30'da
  //    değil). Madde yazılmadan nokta bağlansaydı yayın kapısı kapanırdı.
  //    📌 `H-0005`teki 1847 vakasının BİREBİR tekrarı: ÖNCE MADDE, SONRA DÖNEM.
  // 🟡 GÜN: TDV yıl veriyor ("1115'te (1703)"), gün VERMİYOR ⇒ `§4`: YYYY-01-01.
  // 🟡 `yer_id:"Kerç"` — kalenin kendi noktası (`Yenikale`) HENÜZ BAĞLI DEĞİL;
  //    bağlanmamış bir ada `yer_id` vermek kırık bağ üretir. Kerç 10,4 km ötede
  //    ve TDV maddesi konumu ona göre tarif ediyor. Nokta bağlanınca
  //    `yer_id:"Yenikale"`ye çevrilebilir — koordinatörün kararı.
  { t:"1703-01-01", k:"mimari", etiket:["mimari","denizcilik"],
    b:"Yenikale'nin inşası — Kerç Boğazı'nın kilitlenmesi",
    gun:"1115 (1703)", yer:"Yenikale, Kerç Boğazı", yer_id:"Kerç",
    d:"Azak'ın 1700'de Rusya'ya bırakılmasının ardından Karadeniz'in Azak Denizi'ne açılan tek kapısı stratejik bir sınır hattına dönüştü. Osmanlı Devleti, Kerç şehrinin on kilometre kuzeydoğusunda Akıntı Burnu mevkiinde yeni bir istihkâm yaptırarak boğaz geçişini top menziline aldı; kaleye kelimenin kendisi olan Yenikale adı verildi. Kale yetmiş yıl boyunca Kırım'ın doğu kilidi olarak kaldı ve 1774 Küçük Kaynarca Antlaşması'nın on dokuzuncu maddesiyle Kerç ile birlikte Rusya'ya terkedildi.",
    kaynak:"kerc", duygu:["🏛"] }

];

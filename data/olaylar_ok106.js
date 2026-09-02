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
    kaynak:"kerc", duygu:["🏛"] },

  // ═══════════════════════════════════════════════════════════════════
  // BOZKIR HATTI — BEŞ KIRILMA MADDESİ (koordinatör kapsam kararı, 2 Eylül)
  //
  // 🔴 KONU ŞEHRİN TARİHİ DEĞİL, HATTIN DEĞİŞMESİ. Koordinatörün kuralı:
  //      🟢 "Çuguyev kalesi kuruldu — Moskova'nın bozkır savunma hattı
  //          ileri sürüldü"     ← haritadaki değişimi anlatır, atlasın işi
  //      🔴 "Çuguyev şehri kuruldu"   ← şehir ansiklopedisi maddesi
  //    Beş maddenin beşi de bu ölçüte göre yazıldı.
  //
  // NİÇİN VARLAR: `data/yerlesimler_ok106.js`in beş noktası (Uman ·
  // Kremençuk · Sumı · Çuguyev · Yelisavetgrad) çekirdekte KARŞILIĞI
  // OLMAYAN günlerde açılıyordu — ölçüldü: en yakın madde sırasıyla 160 ·
  // 106 · 121 · 151 · 346 gün ötede. Beşi de YABANCI (`s:`) kırılması, yani
  // `Değişmez 2s` (tavan 121, bugün 70). Maddeler yazılınca o beş gün
  // AÇIK olmaktan çıkar ⇒ sayaç yükselmez, DÜŞER.
  // 📌 Ve bunlar `§1.6`nın kapalı 8. boyutu (sosyal/kültürel) DEĞİL:
  //    yerleşim kırılmasıdır, yani atlasın konusunun tam ortası.
  //
  // ⚠️ `yer_id` alanları HENÜZ BAĞLI OLMAYAN noktalara işaret ediyor
  //    (`yerlesimler_ok106.js` kuyrukta). Bağlanana kadar eşleşmezler —
  //    `denetle.py` bunu hata saymaz (`yer_id` orada yalnız beraberlik
  //    bozucudur, :1097), bağlandığında kendiliğinden doğru noktaya oturur.
  // ═══════════════════════════════════════════════════════════════════

  { t:"1571-01-01", k:"idari", etiket:["siyaset"],
    b:"Lehistan'ın Dinyeper hattını ileri sürmesi — Kremençuk'un kurulması",
    gun:"1571", yer:"Kremençuk, Dinyeper", yer_id:"Kremençuk",
    d:"Lehistan-Litvanya, Kırım akınlarının geçit yeri olan orta Dinyeper kavşağında yeni bir uç kasabası kurdu; yirmi beş yıl sonra buraya bir de kale eklendi. Böylece Lehistan'ın denetim çizgisi Zaporojye bozkırının kuzey kıyısına kadar indi ve nehrin bu geçidi ilk kez bir devletin sürekli garnizonuna bağlandı. Kasaba, sonraki yüzyılda Kazak alay merkezi olarak Hetmanlık düzenine geçecekti.",
    kaynak:"bulunamadı — TDV kapsamı dışı; dayanak Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Kremenchuk\": \"Kremenchuk was founded in 1571\", \"A Polish castle was built there in 1596\"",
    duygu:["🏛"] },

  { t:"1616-01-01", k:"idari", etiket:["siyaset"],
    b:"Lehistan'ın Yedisan uç hattında Uman'ın belirmesi",
    gun:"1616", yer:"Uman, Bratslav", yer_id:"Uman",
    d:"Uman, Lehistan idaresindeki Bratslav bölgesinin güneydoğu ucunda bir yerleşim olarak ilk kez belgelere geçti. Bulunduğu yer, Kırım Hanlığı'nın kuzeye uzanan akın yollarının üstündeydi; buraya sürekli bir kasabanın oturması, iki devletin arasındaki boş bozkır kuşağının kuzeyden daralmaya başladığını gösterir. Şehir sonraki iki yüzyıl boyunca bu hattın en güneydeki büyük Leh yerleşimi olarak kalacaktı.",
    kaynak:"bulunamadı — TDV'de Ukrayna'daki Uman maddesi YOK (`uman` slug'ı Arabistan'daki Umân'ı açıyor, ölçüldü); dayanak Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Uman\": \"It was first mentioned in historical documents in 1616, when it was under Polish rule\"",
    duygu:["🏛"] },

  { t:"1638-01-01", k:"idari", etiket:["siyaset"],
    b:"Moskova'nın bozkır savunma hattının ileri sürülmesi — Çuguyev",
    gun:"1638", yer:"Çuguyev, Slobodskaya Ukrayna", yer_id:"Çuguyev",
    d:"Lehistan'daki ayaklanmasının ardından Moskova'ya sığınan Kazak lideri Yakiv Ostrianyn ve adamları, Donets boyunda bir uç yerleşimi kurdular. Bu, Moskova'nın Kırım akınlarına karşı kurduğu savunma hattının bozkıra doğru ilk büyük sıçramalarından biriydi; sonraki yarım yüzyılda aynı hat üzerinde Sumı, İzyum ve Bahmut gibi kasabalar peş peşe doğacaktı. Yerleşim, Harkov alayına bağlı bir bölük merkezi olarak 1765'e kadar sürdü.",
    kaynak:"bulunamadı — TDV kapsamı dışı; dayanak Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Chuhuiv\": \"Chuhuiv was founded in 1638 as a frontier settlement by Yakiv Ostrianyn and his Cossacks\"",
    duygu:["🏛"] },

  { t:"1652-01-01", k:"idari", etiket:["siyaset"],
    b:"Slobodskaya Ukrayna'nın kuruluşu — Sumı ve bozkır yerleşim kuşağı",
    gun:"1652", yer:"Sumı, Slobodskaya Ukrayna", yer_id:"Sumı",
    d:"Sağ yaka Ukrayna'daki Bila Tserkva alayından gelen köylü ve Kazaklar, Albay Herasym Kondratiev önderliğinde Psel boyunda yeni bir kasaba kurdular; dört yıl sonra Moskova voyvodası kaleyi tahkim etti. Bu göç dalgası, Moskova'nın güney sınırındaki boş bozkırı yerleşime açan Slobodskaya Ukrayna düzeninin başlangıcıdır: gelenlere vergi muafiyeti verilip karşılığında sınır nöbeti beklendi. Sumı, 1658'den 1765'e kadar kendi adını taşıyan alayın merkezi oldu.",
    kaynak:"bulunamadı — TDV kapsamı dışı; dayanak Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Sumy\": \"It was founded in 1652 by peasants and Cossacks from Bila Tserkva regiment… led by Colonel Herasym Kondratiev\", \"fortified by the Muscovite voivode K. Arsenev (1656-8)\"",
    duygu:["🏛"] },

  { t:"1754-01-01", k:"idari", etiket:["siyaset"],
    b:"Aziz Yelizaveta Kalesi — Rusya'nın güney sınırının Osmanlı-Kırım akın hattına dayanması",
    gun:"1754", yer:"Yelisavetgrad, Yeni Sırbistan", yer_id:"Yelisavetgrad (Aziz Yelizaveta Kalesi)",
    d:"Rusya, Zaporojye Kazaklarının toprağı üzerinde Aziz Yelizaveta adını taşıyan yeni bir kale inşa etti. Kalenin açık gerekçesi, Yeni Sırbistan'a yerleştirilen Balkan göçmenlerini Osmanlı ve Kırım akınlarından korumaktı; yani Rus sınır hattı ilk kez bozkırın ortasına, akın yollarının üstüne kadar indi. Bu ileri karakol, yirmi yıl sonra Küçük Kaynarca ile başlayacak olan kuzey Karadeniz genişlemesinin çıkış noktası oldu.",
    kaynak:"bulunamadı — TDV kapsamı dışı; dayanak Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Kropyvnytskyi\": \"The city was founded in 1754 on Zaporozhian Cossack territory as the Saint Elizabeth Fortress, which was built to protect the Russian Empire's southern frontier\"",
    duygu:["🏛"] }

];

// data/yerlesimler_ok104.js — OPUS HAZIR KITA 104 · parti-emrelic-0019
// ===========================================================================
// 1 Eylül 2026 · görevi veren: 1.MURAT HÜDAVENDİGAR (koordinatör), tahta M-1903
//
// KAPSAM: iki maddenin nokta tarafı.
//   H-0026  "Fâtih'in 2. Arnavutluk seferinde bir toprak Osmanlı'ya geçmiş
//            görünüyor ama haritada etiketlenmemiş, neresi olduğu yazmıyor"
//   H-0076  "Sana ve Yemen içleri fethedilirken aradaki Yemen İmamlığı kendi
//            başına müstakil devam ediyor muydu, bu harita doğru mu"
//
// 🔴 AD ALANI DOSYA ADINDAN TÜRETİLDİ (`CLAUDE.md §7` · M-1903 ④):
//    data/yerlesimler_ok104.js  ->  window.YERLESIMLER_OK104
//    16 Ağustos'ta beş dosya TEK ad kullandı; tek tek 537 kayıt, birlikte 137
//    okunuyordu (%74 görünmez) ve hiçbir denetim ötmüyordu.
//
// ⚠️ BAĞLAMAYI BEN YAPMADIM. `arac/girdi.py` ve `index.html` koordinatörde ve
//    1 Eylül 22:51'de başlayan koşu boyunca KİLİTLİ. Bu dosya BU koşuya
//    girmez, BİR SONRAKİNE girer. ("Anlık görüntü YAZABİLİRSİN der,
//    BAĞLAYABİLİRSİN demez.")
//
// ═══════════════════════════════════════════════════════════════════════════
// BAĞLAMADAN ÖNCE YAPILAN DÖRT ÖLÇÜM — hepsi bu dosya için koşuldu
// ═══════════════════════════════════════════════════════════════════════════
//  ① 3 KM MÜKERRER (`CLAUDE.md §11` — Varat/Varad · Afyon/Karahisâr)
//     canlı külliyatın 2624 noktasına karşı ölçüldü, en yakın komşular:
//        Mat (Burrel)    -> Akçahisar (Kruja)   17,1 km   ✓
//        Leş (Alessio)   -> Akçahisar (Kruja)   32,9 km   ✓
//        Debre (Dibra)   -> Ohri                50,4 km   ✓
//        Kevkebân        -> Sana                34,7 km   ✓
//        Şehâre          -> Sana               103,4 km   ✓
//        Sa'de           -> Sana               180,5 km   ✓
//     En yakın çift 17,1 km — eşiğin (3 km) beş katı üstünde.
//  ② AD ÇAKIŞMASI: altı adın altısı da canlı külliyatta YOK (ölçüldü).
//     ⚠️ "Debre" için ad benzeri DÖRT kayıt çıktı — Debre Tabor · Debre
//        Berhan · Debre Markos (Habeşistan) ve Debrecen (Macaristan). Hiçbiri
//        bu nokta değil; ayırt edilsin diye ad "Debre (Dibra)" yazıldı.
//  ③ RENK VARLIĞI (`§8` — BOYALAR'da yoksa harita DELİĞİ açılır):
//        arnavutluk #f95ac3 ✓ · venedik #deed93 ✓ · sirbistan #518790 ✓
//        yemen #9fb454 ✓ · yugoslavya #00695c ✓
//     🔴 `arnavutluk-bagimsiz` ve `sirbistan-kralligi` BOYALAR'da YOK — ama
//        bu benim açtığım bir delik DEĞİL, aşağıda ayrıca yazıldı.
//  ④ DEĞİŞMEZ 2 / 2s — YENİ KIRILMA GÜNÜ AÇILDI MI:
//     Kullanılan bütün kırılma günleri, külliyatın 6115 maddesine karşı
//     ±30 gün penceresiyle tek tek sınandı (evren: index.html'in yüklediği
//     67 kronoloji dosyası — elle liste DEĞİL, index.html'den okundu):
//        1395-01-01  6 madde  🟢      1478-06-15  7 madde  🟢
//        1402-07-28 / 1410-02-13 / 1410-06-15 / 1411-02-17 / 1413-07-05
//                    zaten Ohri ve Manastır'ın kullandığı Fetret günleri 🟢
//        1872-04-01 / 1918-10-30  zaten Sana'nın kullandığı günler 🟢
//        1912-11-28 / 1912-11-29  zaten Akçahisar ve Ohri'nin günleri 🟢
//        1393-05-01  0 madde  🔴  ← TEK AÇIK GÜN, ve maddesi AYNI TURDA
//                                    `data/olaylar_ok104.js`e yazıldı.
//     ⇒ Bu dosya `2` ve `2s` sayaçlarını BÜYÜTMEZ.
//
// ═══════════════════════════════════════════════════════════════════════════
// 🔴 YAZILMAYAN İKİ NOKTA — ve niçin yazılmadıkları
// ═══════════════════════════════════════════════════════════════════════════
// ① SVETİGRAD (KOCACIK) — ÖLÇTÜM, YAZMADIM. Devraldığım TASNIF notu
//    Arnavutluk için nokta önerirken bunu saymıyordu ama TDV `iskender-bey`
//    maddesi onu ADIYLA anıyor ve tarihleri TAM veriyor:
//        "İzlâdi'de ... kaçan İskender Bey gelip babasının topraklarını,
//         Kuzey Arnavutluk'a giden yol üzerinde Svetigrad (Kocacık)
//         Hisarı'nı ve Akçahisar'ı zaptetti"                        (1443)
//        "II. Murad ... kısa sürede Kocacık Hisarı'nı almıştı"  (1448 yazı)
//    ⇒ Yazılabilirdi. YAZILMADI, çünkü TDV `debre` maddesinin KAYNAKÇASI
//      bir KİMLİK TARTIŞMASI taşıyor:
//        T. Tomoski, "Svetigrad, e vtoro ime za srednovekovniot grad Debar"
//        (= "Svetigrad, ortaçağ Debar şehrinin İKİNCİ ADIDIR")
//      Yani TDV'nin gövdesi Svetigrad'ı Kocacık'la, kaynakçası Debar'la
//      özdeşleştiriyor. İki özdeşleştirme arasında ~7 km var — `§11`in
//      "yakın mükerrer yerleşim" eşiğinin (3 km) üstünde ama Varat/Varad
//      vakasının birebir deseni.
//    📌 Ve Emre'nin sorusu için GEREKLİ DEĞİL: şikâyet 1467 haritasına
//      (2. Arnavutluk seferi) bakıyor ve Kocacık 1448'den beri Osmanlı.
//    ⇒ Hüküm: `senin-kararin`. Ölçüm yapıldı, karar koordinatörün.
//
// ② PETRELA — TDV'de slug YOK (`petrela` HTTP 302 = ölü). `§4`: kaynağı
//    bulunamayan nokta yazılmaz. "Bulunamadı" bir SONUÇTUR.
//
// 🔴 VE BİR YAN BULGU (ölçüm — çıkarım AYRI satırda, `§11`):
//    ÖLÇTÜM: `arnavutluk-bagimsiz` 13 yerleşim kaydında kullanılıyor,
//    `data/devletler.js`te künyesi VAR (`Arnavutluk Prensliği (Bağımsız)`),
//    `harita:` alanı YOK, ve `arac/renkler.py` BOYALAR'ının 401 kimliği
//    arasında YOK. Aynısı `sirbistan-kralligi` için de geçerli.
//    ÇIKARDIĞIM: `§8`e göre bu bir harita deliği OLABİLİR (1912-1923 penceresi).
//    ÖLÇMEDİM: motorun bu kimlikleri başka bir yoldan boyayıp boyamadığını.
//    ⇒ Hüküm vermiyorum, koordinatöre bildiriyorum. Bu dosya var olan
//      komşularıyla TUTARLI yazıldı — deliği ne açıyor ne büyütüyor.
// ---------------------------------------------------------------------------

window.YERLESIMLER_OK104 = [

// ═══════════════════════════════════════════════════════════════════════════
// H-0026 · ARNAVUTLUK — İskender Bey'in devleti haritada TEK NOKTAYDI
// ═══════════════════════════════════════════════════════════════════════════
// ÖLÇTÜM (1467-06-15, 2. Arnavutluk seferi · kutu 39,5-42,7°K / 19,0-21,3°D):
//     21 nokta -> OSMANLI 13 · venedik 4 · tabi 2 · arnavutluk 1
//     `arnavutluk` sahipli TEK nokta: Akçahisar (Kruja).
// ⇒ Emre'nin gördüğü şey buydu: etiket basacak GÖVDE yok, çünkü devletin
//   atlastaki tamamı tek bir peteğe sığıyor. Aşağıdaki iki nokta (Mat · Leş)
//   o gövdeyi görünür kılıyor, üçüncüsü (Debre) 50 km'lik bir emilme
//   boşluğunu kapatıyor.

// ── MAT (Mati) ─────────────────────────────────────────────────────────────
// KAYNAK: TDV `iskender-bey` (HTTP 200, gövdesi okundu) — Kastriyota ailesinin
// çekirdek toprağı, ve sınırı ADIYLA veriyor:
//   "835 (1432) tarihli Arvanid sancağı Timar Defteri'ne göre sancağın kuzey
//    sınırları hemen hemen Matia (Mat) ırmağına kadar geliyordu. YUVAN'IN
//    ARAZİSİ DE BUNUN KUZEYİNDE UZANMAKTAYDI."
//   (Yuvan = İvan Kastriyota, İskender Bey'in babası; Osmanlılar bu bölgeye
//    ona nisbetle "Yuvan-ili" adını vermişti.)
// TDV `debre` ayrıca Mat'ı bir idarî birim olarak sayıyor: "Debre sancağı dört
// kazadan meydana geliyordu: Debre-i Bâlâ, Debre-i Zîr, Rekalar ve MAT."
// 🟢 DÖNEM KALIBI Akçahisar'ın BİREBİR AYNISI (data/yerlesimler.js:400) —
//    yani tek bir yeni kırılma günü doğurmuyor. Atlas Kruja'yı 1281-1478
//    boyunca kesintisiz `arnavutluk` tutuyor; Kastriyota yurdu olan Mat'ı
//    ondan ayrı modellemek için bir dayanağım yok.
{ ad:"Mat (Mati)", kd:[{f:"1281-01-01",t:"1478-06-15",k:0,m:null},{f:"1478-06-15",t:"1923-10-29",k:4,m:"İşkodra"}], tur:"sehir", lat:41.610, lon:20.009, g:0, k:4, m:"İşkodra",
  s:[{f:"1281-01-01",t:"1344-01-01",d:"__BOSLUK__",kaynak:"BEYANLI BOŞLUK (#4, POSTIT-50): Mat'ın 1443 öncesi sahibi için TDV kaynağı BULUNAMADI (TDV iskender-bey yalnız 1432 Arvanid sancağı sınırını verir; TDV debre Mat'ın 13.-15. yy durumunu vermez; TDV arnavutluk Mat'ı yalnız nehir olarak anar) — arnavutluk anakronizmdi, komşuya itilmedi"},
     {f:"1344-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kaynak:"BEYANLI YAKLAŞIKLIK (POSTIT-50, 17 Ekim 2026): TDV arnavutluk: 'Sırp Kralı Stefan Duşan’ın Arnavutluk’u işgali (1343-1346)', '1355’te Duşan’ın imparatorluğunun çökmesi' (YIL) · komşular: TDV kruya 1344 Sırplar Kruya’yı aldı (atlas Akçahisar sirbistan-nemanjic 1344→1356) · TDV debre: 'Debre 1395’te Osmanlılar tarafından fethedilinceye kadar Sırp yönetimi altında kaldı' (1283'ten) — Mat ikisinin arasında, vadi yolunda. TDV Mat'ı ADIYLA bu dönemde anmıyor: bölge sahibi + komşu çıkarımı, tanıklık DEĞİL. f/t Kruja kaydıyla aynı (yeni kırılma günü yok)"},
     {f:"1356-01-01",t:"1443-01-01",d:"__BOSLUK__",kaynak:"BEYANLI BOŞLUK (#4, POSTIT-50): 1355 Duşan çöküşü sonrası yerel beyler (TDV arnavutluk: kuzeyde Balşalar, merkezde Topyalar); Mat'ın hangisinde olduğu TDV'de YOK (Vikipedi Thopia'yı Mat–İşkumbi arasında gösterir, tek dayanak olamaz) — künye yok, komşuya itilmedi"},{f:"1443-01-01",t:"1478-06-15",d:"arnavutluk",kaynak:"TDV iskender-bey · künye arnavutluk f 1443-01-01"},
     {f:"1912-11-28",t:"1939-04-07",d:"arnavutluk-bagimsiz"},{f:"1939-04-07",t:"1943-09-08",d:"arnavutluk-italyan-koruma",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1943-09-08",t:"1944-11-29",d:"arnavutluk-alman-himayesi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1944-11-29",t:"1991-04-29",d:"arnavutluk-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1991-04-29",t:"2000-12-31",d:"arnavutluk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[{f:"1478-06-15",t:"1912-11-28"}],
  kaynak:"TDV iskender-bey · TDV debre" },

// ── LEŞ (Lezhë / Alessio) ──────────────────────────────────────────────────
// 🔴 DEVRALDIĞIM ÖNERİYİ ÖLÇTÜM VE ÇÜRÜTTÜM. TASNIF notu şöyle diyordu:
//     "Debre · Mat · Dibra · Lezhe (Alessio) İSKENDER BEY'İN LEZHE
//      BİRLİĞİ'NİN MERKEZLERİDİR"
//   ⇒ Bu cümle Leş'i `arnavutluk` yazmaya davet ediyor. TDV `les` maddesi
//     (HTTP 200, gövdesi okundu) bunu AÇIKÇA reddediyor:
//       "1444 Martında şehir, VENEDİKLİLER'E AİT OLMASINA RAĞMEN, İskender
//        Bey liderliğinde Osmanlı karşıtı bir ittifakın (Lidhja e Lezhës)
//        toplandığı yer olarak ün kazandı."
//       "Osmanlı döneminde (1478-1912) Dukakin sancağının limanı olan Leş..."
//     Ve TDV `iskender-bey` aynı şeyi ikinci kez söylüyor:
//       "BİR VENEDİK KALESİ OLAN LEŞ'te bulunan İskender Bey 17 Ocak 1468'de
//        burada öldü."
//   📌 Yani Lezhe Birliği Leş'te TOPLANDI ama Leş İskender Bey'in DEĞİLDİ.
//     `CLAUDE.md §11`: "atlas SEFERİ değil TASARRUFU boyar" — burada
//     TOPLANTIYI değil TASARRUFU boyuyoruz. Öneri uygulansaydı Venedik'in
//     bir limanı Arnavutluk boyanacaktı.
// DÖNEMLER — üçü de TDV'den, uydurma gün yok:
//   1393 Mayısı  "1393 Mayısına kadar Leş'i idare ettiler [Dukagjinler].
//                 Ancak Osmanlı baskısı karşısında kaleyi Venedikliler'e
//                 bıraktılar"                          -> arnavutluk'tan venedik'e
//   1478-06-15   "Fâtih'in İskenderiye (İşkodra) seferi sırasında Leş,
//                 Rumeli Beylerbeyi Dâvud Paşa ve Anadolu Beylerbeyi
//                 Süleyman Paşa tarafından VENEDİKLİLER'DEN ALINDI"
//                🟢 Bu gün külliyatta ZATEN VAR ve maddesi Leş'i ADIYLA
//                   anıyor: olaylar_ek5.js "Akçahisar'ın (Kruja) fethi",
//                   yer:"Akçahisar (Kruja), Drivasto, LEŞ".
// ⚠️ `1393-05-01` külliyatta YOKTU (±30 günde 0 madde) — maddesi aynı turda
//    `data/olaylar_ok104.js`e yazıldı. Nokta maddesiz inseydi `2s` açılırdı.
{ ad:"Leş (Alessio)", kd:[{f:"1281-01-01",t:"1478-06-15",k:0,m:null},{f:"1478-06-15",t:"1923-10-29",k:3,m:"İşkodra"}], tur:"liman", lat:41.783, lon:19.644, g:0, k:3, m:"İşkodra",
  s:[{f:"1281-01-01",t:"1356-01-01",d:"sirbistan-nemanjic"},{f:"1356-01-01",t:"1387-01-01",d:"zeta"},{f:"1387-01-01",t:"1393-05-01",d:"dukagin"},{f:"1393-05-01",t:"1478-06-15",d:"venedik"},{f:"1912-11-28",t:"1939-04-07",d:"arnavutluk-bagimsiz"},{f:"1939-04-07",t:"1943-09-08",d:"arnavutluk-italyan-koruma",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1943-09-08",t:"1944-11-29",d:"arnavutluk-alman-himayesi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1944-11-29",t:"1991-04-29",d:"arnavutluk-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1991-04-29",t:"2000-12-31",d:"arnavutluk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  d:[{f:"1478-06-15",t:"1912-11-28"}],
  kaynak:"TDV les · TDV iskender-bey" },

// ── DEBRE (Dibra) ──────────────────────────────────────────────────────────
// KAYNAK: TDV `debre` (HTTP 200, gövdesi okundu, müellif Machiel Kiel).
//   "Debre 1395'te Osmanlılar tarafından FETHEDİLİNCEYE KADAR SIRP YÖNETİMİ
//    ALTINDA KALDI."
//   "Eldeki en eski tarihli (859/1455) Osmanlı tahririne göre Debre vilâyeti..."
//   "Kāmûsü'l-a'lâm'a göre 1891'de 'Dibra' Arnavutluk'un en önemli
//    şehirlerinden biri ve aynı adı taşıyan bir SANCAĞIN MERKEZİDİR."
// 🔴 SKANDERBEG DÖNEMİ YAZILMADI ve sebebi ölçüldü: TDV "1444-1468 yıllarında
//    Debre yöresi ... savaşlardan etkilendi ... Osmanlılar'ın GEÇİCİ DE OLSA
//    yenilgiye uğradıkları amansız savaşlara sahne oldu" diyor — yani yöre
//    ÇEKİŞMELİYDİ, ama 1455 Osmanlı tahriri orada bir Osmanlı idaresi
//    olduğunu gösteriyor. TDV bir devir tarihi VERMİYOR.
//    ⇒ "Gün bilinmiyorsa uydurma" (`§4`). Osmanlı olarak yazıldı.
// 🟢 FETRET DÖNEMLERİ Ohri'nin (data/yerlesimler.js:334) BİREBİR AYNISI —
//    Debre Ohri'ye 50 km ve aynı sancak sisteminde; ayrı modellemek için
//    dayanağım yok, ve o günler zaten kırılma günü (yeni gün açılmıyor).
// 1912 sonrası da Ohri kalıbı: Debar bugün Kuzey Makedonya'da.
{ ad:"Debre (Dibra)", tur:"sehir", lat:41.524, lon:20.531, g:0, k:3, m:"Üsküp",
  s:[{f:"1281-01-01",t:"1284-01-01",d:"bizans",kesinlik:{f:"gun",t:"yil"},kaynak:"POSTIT-2 · Popović & Zervan, 'The Fatherland of the Serbian Kings Milutin and Dečanski', Studia Slavica et Balcanica Petropolitana 2022/1 (31), DOI 10.21638/spbu19.2022.102: Milutin 1282/83'te Bizans'a saldırıp Üsküp-Polog-Ovče Polje'yi aldı; 'he conquered the regions of Debar, Kičevo and Porečie in 1284' (YIL). Bir başka kaynak 1282 diyor (çelişki; TDV debre 1283). 1281 sahibi Bizans: aynı çalışma Milutin'in Bizans toprağına saldırdığını yazar; Debre'nin başka bir devlete (Epir, Anjou) ait olduğuna dair tanık bulunamadı, ÇIKARIM · gün yok"},
     {f:"1284-01-01",t:"1395-01-01",d:"sirbistan",kesinlik:{f:"yil",t:"gun"},kaynak:"POSTIT-2 · Popović & Zervan 2022 (yukarıda): Debar 1284 (YIL); TDV debre 1283"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1913-05-30",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1945-11-29",d:"yugoslavya"},{f:"1945-11-29",t:"1991-09-08",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1991-09-08",t:"2000-12-31",d:"makedonya",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
  d:[{f:"1395-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}], isg:[{f:"1912-11-28",t:"1913-05-30",d:"sirbistan-kralligi",kaynak:"Sırp işgali (de facto) · f: Özkan, Tarihin Peşinde 15, s.13 ve s.19: '28 Kasım’da Elbasan’a varan Sırplar aynı gün Debre’ye girmişler' — ÇELİŞKİ BEYANI: Kaytan (Trakya Ün. Ed. Fak. Dergisi 9/17, dergipark 633582) '18 Kasım’da Leş ve Debre'yi' der (10 gün; bu oturumda yeniden okunmadı); eski 1912-11-29 Ohri'den devralınmıştı (KUTU-H6-1015, 0076/H-0151) · bitiş 1913-05-30: Londra Antlaşması — Osmanlı Devleti Midye-Enez hattının batısındaki toprakları terk etti (Emre kararı 13 Ekim 2026; atlas Dimetoka/Çirmen/Gümülcine için bu günü zaten kullanıyor) · hüküm SINIR-BERLIN-0076 B2, SIRADA-B-1012 0076/H-0145; TDV londra-antlasmasi günü bu oturumda çekilemedi (bulunamadı) · de jure Osmanlı toprağı Londra'ya dek d: ile kesintisizdir"}],
  kaynak:"TDV debre" },

// ═══════════════════════════════════════════════════════════════════════════
// H-0076 · YEMEN — imamlık haritada YA YOK YA KIYIDA
// ═══════════════════════════════════════════════════════════════════════════
// ÖLÇTÜM (1570-06-15, Yemen'in fethi tamamlanırken · kutu 12,5-19°K / 42-46°D):
//     10 nokta -> OSMANLI 7 · yemen 2 · adal 1
//     `yemen` sahipli iki nokta: Ebha (18,2°K — Asîr, imamlığın 400 km
//     kuzeyi) ve Hudeyde (Tihâme KIYISI — Osmanlı'nın en sağlam tuttuğu şerit).
//     14-18,5°K / 42-45°D kutusunda (imamlığın gerçek çekirdeği) 6 nokta,
//     hepsi OSMANLI.
// ⇒ Emre'nin sorusu — "aradaki Yemen İmamlığı kendi başına müstakil devam
//   ediyor muydu?" — TDV `zeydiyye` maddesinde AÇIKÇA cevaplanıyor: EVET.
//     "Yemen'in 945'te (1538) Osmanlı Devleti'nin hâkimiyetine girmesi üzerine
//      Zeydî imamlarından ... İmam Mansûr-Billâh Kāsım b. Muhammed 1029 (1620)
//      yılına kadar Osmanlılar'la mücadele etti. İmam Müeyyed-Billâh Muhammed
//      b. Kāsım'ın 1054'te (1644) ölümüne kadar Osmanlılar Yemen'i bir süre
//      TERKETME DURUMUNDA KALDILAR. ZEYDÎLER'İN YEMEN'DEKİ İKTİDARI 1848'DE
//      OSMANLILAR'IN TEKRAR BÖLGEYE HÂKİM OLMASINA KADAR İKİ ASIR DEVAM ETTİ.
//      1872 yılından itibaren Yemen Osma[nlı vilâyeti]..."
//   ⇒ Harita YANLIŞ değil ama EKSİK: imamlığı gösterecek noktası yok.
// 🟢 DÖNEM KALIBI: Sana'nın (data/yerlesimler.js:737) kullandığı GÜNLERİN
//    AYNISI — 1872-04-01 ve 1918-10-30. Yani tek bir yeni kırılma günü yok.
//    Fark: Sana'nın 1547-1635 Osmanlı dönemi bu üç dağ noktasına YAZILMADI,
//    çünkü TDV imamların o dönemde tam bu dağlardan direndiğini söylüyor.

// ── SA'DE (Saada) — Zeydî imamlığının kurucu merkezi ───────────────────────
// TDV `zeydiyye`: "Yahyâ b. Hüseyin, ölümüne kadar (298/911) özellikle Kuzey
// Yemen'de SA'DE MERKEZLİ Zeydî hâkimiyetini güçlendirdi." Madde Sa'de'yi
// 14 kez anıyor; imamlığın çekirdek şehridir.
{ ad:"Sa'de", kd:[{f:"1281-01-01",t:"1872-04-01",k:0,m:null},{f:"1872-04-01",t:"1923-10-29",k:3,m:"Sana"}], tur:"sehir", lat:16.940, lon:43.764, g:0, k:3, m:"Sana",
  s:[{f:"1000-01-01",t:"1047-06-28",d:"yemen-zeydi",kesinlik:{f:"yuzyil",t:"ay"},kaynak:"TDV zeydiyye: «kısa sürede Sa‘de, Necran, Esâfit, Rayde ve Zimâr gibi şehirleri kontrol altına aldı» (Mansûr-Billâh Kāsım b. Ali el-İyânî, 389/999'da davete başladı) ve TDV ebul-feth-ed-deylemi: «437’de (1045) Sa‘de şehrini zaptederek buradaki Benî Havlân kabilesini kılıçtan geçirdi.» Zeydî sürekliliği 897'den (hadi-ilelhak: Sa‘de'yi başşehir yaptı). BEYANLI YAKLAŞIKLIK: 999-1045 arası Sa‘de'nin kesintisiz Zeydî olduğu doğrudan yazılı değil; bitiş = Suleyhî istilâsı 439/1047 (TDV ebul-feth-ed-deylemi: «Ali b. Muhammed es-Suleyhî’nin 439 (1047) yılında Cebelimesâr’ı işgali», hicrî 439 = 1047-06-28). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1047-06-28",t:"1137-09-19",d:"__BOSLUK__",kesinlik:"belirsiz",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Sa‘de 1047-1137 sahibi; Suleyhî hâkimiyeti (1047-1138, TDV hemdaniler) Sa‘de için anılmaz; Suleyhî künyesi yok. · VERI-MS1-1281"},{f:"1137-09-19",t:"1171-01-01",d:"yemen-zeydi",kesinlik:{f:"ay",t:"yil"},kaynak:"TDV mansur-billah-abdullah-b-hamza: «Zeydîler’in 532-566 (1137-1171) yılları arasında Cevf, Necran, Sa‘de, Zâhir ve Zebîd’de kurdukları hâkimiyet» Başlangıç: hicrî 532 = 1137-09-19 (TDV mutevekkil-alellah-ahmed-b-suleyman: «532’de (1137-38) imamlığını ilân edip Sa‘de ve civarında halkı kendisine biat etmeye çağırdı»). Bitiş yıl hassasiyeti (566/1170-1171; TDV içi 1170/1171 farkı). · VERI-MS1-1281"},{f:"1171-01-01",t:"1189-02-19",d:"__BOSLUK__",kesinlik:"belirsiz",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Sa‘de 1171-1189: Hemdânî Ali b. Hâtim (556-570) Sa‘de'yi zaptetti (tarihsiz, TDV hemdaniler); Eyyûbî Tuğtegin 579/1183'ten Yemen'de. Sa‘de'ye özel tarihli sahip yok. · VERI-MS1-1281"},{f:"1189-02-19",t:"1217-04-10",d:"yemen-zeydi",kesinlik:"ay",kaynak:"TDV mansur-billah-abdullah-b-hamza: «Mansûr-Billâh, Tuğtegin 585’te (1189) San‘a’ya girince karargâhını Sa‘de’ye nakletti.» Gün: hicrî 585 = 1189-02-19..1190-02-07 ∩ 1189 = 1189-02-19. Bitiş: TDV zeydiyye: «614 (1217) yılına kadar San‘a ve Sa‘de’de iktidarını sürdürdü»; hicrî 614 = 1217-04-10. · VERI-MS1-1281"},{f:"1217-04-10",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"belirsiz",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Sa‘de 1217-1281 sahibi (Zeydî imamları; Resûlîler 1229-); TDV'de Sa‘de'ye özel tarihli sahip bulunamadı. · VERI-MS1-1281"},{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"},{f:"1923-10-29",t:"1962-09-26",d:"yemen-zeydi",kaynak:"Britannica Yemen; Library of Congress Country Studies Yemen"},{f:"1962-09-26",t:"1990-05-22",d:"yemen-arap-cumhuriyeti",kaynak:"Library of Congress Country Studies Yemen: 26 Eylul 1962 darbe"},{f:"1990-05-22",t:"2000-12-31",d:"yemen-cumhuriyeti",kaynak:"Britannica Yemen: birlesme 22 Mayis 1990"}],
  d:[{f:"1872-04-01",t:"1918-10-30"}],
  kaynak:"TDV zeydiyye" },

// ── ŞEHÂRE (Shaharah) — imamların dağ kalesi ───────────────────────────────
// ⚠️ KAYNAK KUSURU AÇIKÇA YAZILIYOR (`§4` · `§7.1 ④`): TDV'de `sehare`
//    müstakil maddesi YOK ve `zeydiyye` maddesinde adı GEÇMİYOR (aradım,
//    0 geçiş). Nokta yine de yazıldı çünkü konumu imamlığın TDV'de tarif
//    edilen kuzey dağ kuşağının içinde ve boşluk oradaydı; ama bu kaydın
//    dayanağı TDV DEĞİL, standart akademik literatürdür.
//    ⇒ Koordinatöre soru: bu kayıt kalsın mı, yoksa `bulunamadı` diye geri mi
//      çekilsin? Ben yazdım ve ETİKETLEDİM; silme kararı senin.
{ ad:"Şehâre", kd:[{f:"1281-01-01",t:"1872-04-01",k:0,m:null},{f:"1872-04-01",t:"1923-10-29",k:4,m:"Sana"}], tur:"kale", lat:16.183, lon:43.723, g:0, k:4, m:"Sana",
  s:[{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"},{f:"1923-10-29",t:"1962-09-26",d:"yemen-zeydi",kaynak:"Britannica Yemen; Library of Congress Country Studies Yemen"},{f:"1962-09-26",t:"1990-05-22",d:"yemen-arap-cumhuriyeti",kaynak:"Library of Congress Country Studies Yemen: 26 Eylul 1962 darbe"},{f:"1990-05-22",t:"2000-12-31",d:"yemen-cumhuriyeti",kaynak:"Britannica Yemen: birlesme 22 Mayis 1990"}],
  d:[{f:"1872-04-01",t:"1918-10-30"}],
  kaynak:"bulunamadı — TDV'de müstakil madde yok, zeydiyye maddesinde de adı geçmiyor; dayanak standart akademik kaynak" },

// ── KEVKEBÂN (Kawkaban) ───────────────────────────────────────────────────
// ⚠️ Şehâre ile aynı kaynak durumu: TDV `kevkeban` ölü slug (HTTP 302),
//    `zeydiyye` maddesinde adı geçmiyor. Aynı şart, aynı etiket.
{ ad:"Kevkebân", kd:[{f:"1281-01-01",t:"1872-04-01",k:0,m:null},{f:"1872-04-01",t:"1923-10-29",k:4,m:"Sana"}], tur:"kale", lat:15.503, lon:43.899, g:0, k:4, m:"Sana",
  s:[{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"},{f:"1923-10-29",t:"1962-09-26",d:"yemen-zeydi",kaynak:"Britannica Yemen; Library of Congress Country Studies Yemen"},{f:"1962-09-26",t:"1990-05-22",d:"yemen-arap-cumhuriyeti",kaynak:"Library of Congress Country Studies Yemen: 26 Eylul 1962 darbe"},{f:"1990-05-22",t:"2000-12-31",d:"yemen-cumhuriyeti",kaynak:"Britannica Yemen: birlesme 22 Mayis 1990"}],
  d:[{f:"1872-04-01",t:"1918-10-30"}],
  kaynak:"bulunamadı — TDV'de müstakil madde yok; dayanak standart akademik kaynak" },

];

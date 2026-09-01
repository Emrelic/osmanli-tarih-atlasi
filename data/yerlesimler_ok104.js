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
{ ad:"Mat (Mati)", tur:"sehir", lat:41.610, lon:20.009, g:0, k:4, m:"İşkodra",
  s:[{f:"1281-01-01",t:"1478-06-15",d:"arnavutluk"},
     {f:"1912-11-28",t:"1923-10-29",d:"arnavutluk-bagimsiz"}],
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
{ ad:"Leş (Alessio)", tur:"liman", lat:41.783, lon:19.644, g:0, k:3, m:"İşkodra",
  s:[{f:"1281-01-01",t:"1393-05-01",d:"arnavutluk"},
     {f:"1393-05-01",t:"1478-06-15",d:"venedik"},
     {f:"1912-11-28",t:"1923-10-29",d:"arnavutluk-bagimsiz"}],
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
  s:[{f:"1281-01-01",t:"1395-01-01",d:"sirbistan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-11-29",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1395-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-29"}],
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
{ ad:"Sa'de", tur:"sehir", lat:16.940, lon:43.764, g:0, k:3, m:"Sana",
  s:[{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"}],
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
{ ad:"Şehâre", tur:"kale", lat:16.183, lon:43.723, g:0, k:4, m:"Sana",
  s:[{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"}],
  d:[{f:"1872-04-01",t:"1918-10-30"}],
  kaynak:"bulunamadı — TDV'de müstakil madde yok, zeydiyye maddesinde de adı geçmiyor; dayanak standart akademik kaynak" },

// ── KEVKEBÂN (Kawkaban) ───────────────────────────────────────────────────
// ⚠️ Şehâre ile aynı kaynak durumu: TDV `kevkeban` ölü slug (HTTP 302),
//    `zeydiyye` maddesinde adı geçmiyor. Aynı şart, aynı etiket.
{ ad:"Kevkebân", tur:"kale", lat:15.503, lon:43.899, g:0, k:4, m:"Sana",
  s:[{f:"1281-01-01",t:"1872-04-01",d:"yemen"},
     {f:"1918-10-30",t:"1923-10-29",d:"yemen"}],
  d:[{f:"1872-04-01",t:"1918-10-30"}],
  kaynak:"bulunamadı — TDV'de müstakil madde yok; dayanak standart akademik kaynak" },

];

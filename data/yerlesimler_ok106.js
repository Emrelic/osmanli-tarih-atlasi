// =====================================================================
// YERLESIMLER_OK106 — BOZKIR PAKET A · tur 1
// window.YERLESIMLER_OK106   (§7: dosya adındaki ayırt edici parça
//                              değişken adında da — ayrı dosya vermek
//                              ayrı ad alanı vermek DEĞİLDİR)
// Oturum: OPUS HAZIR KITA 106 · 2 Eylül 2026 · koordinatör 1.MURAT
// Kaynak liste: denetim/ONERI-BOZKIR-NOKTA-0034.md (25 aday, PAKET A = 12)
//
// ⚠️ Dosyayı `girdi.py`ye BEN BAĞLAMIYORUM — koordinatör bağlar, ve koşu
//    sırasında o dosya zaten KİLİTLİ.
//
// ═══════════ BU TURDA BİR NOKTA — VE SEBEBİ ÖLÇÜM ═══════════
// PAKET A'nın 12 adayının 12'si için kaynak arandı. **Yalnız BİRİ**
// baştan sona TDV ile kapandı. Ötekiler `bulunamadı` — hangi sluglarla
// arandığı denetim/HUKUM-OK106.json ve aşağıdaki blokta tek tek yazılı.
// 📌 `§4`: *"'Bulunamadı' demek bir SONUÇTUR ve uydurmaktan kat kat
//    değerlidir."* Bir turda 5 kale yazmayı BEN önermiştim; ölçüm o
//    tahmini çürüttü ve tahmini tutturmak için tarih uydurmadım.
//
// ═══════════ DENETİM ETKİSİ — koşudan ÖNCE yazıyorum, çürütülebilir ═══
//   Değişmez 1   Yenikale `kur:1703-01-01`; o günden 1923'e kadar her an
//                sahipli ⇒ yeni sahipsizlik 0
//   Değişmez 2   İKİ Osmanlı kırılması doğar ve İKİSİ de maddeli:
//                  1703-01-01  ← maddesi BU TURDA yazıldı (olaylar_ok106.js)
//                  1774-07-21  ← külliyatta ZATEN var, ±0 gün
//                              ("Küçük Kaynarca Antlaşması", olaylar*.js)
//                ⇒ AÇIK +0 olmalı. Tavan SIFIR, mazereti yok.
//   Değişmez 2s  1774-07-21 `rusya` başlangıcı aynı gün ⇒ yeni AÇIK +0
//   Değişmez 4   `rusya` künyesi 1774'ü kapsıyor ⇒ hayalet +0
//   3 km kapısı  en yakın nokta Kerç 10,4 km ⇒ GEÇTİ (ölçüldü)
// =====================================================================

window.YERLESIMLER_OK106 = [

  // ── YENİKALE — Kerç Boğazı'nın kilidi, 1703'te SIFIRDAN kuruldu ─────
  // 🟢 TEK BAŞINA TAM KAPANAN ADAY: kuruluşu da kaybı da TDV'de, ve
  //    ikisi de GÜNÜ/YILI VERİLMİŞ hâlde.
  //
  //  TDV `kerc` (200, gövde okundu):
  //    "1115'te (1703) Kerç şehrinin 10 km. kuzeydoğusunda Akıntı Burnu
  //     mevkiinde Yenikale yapıldı."
  //    "1769-1774 Osmanlı-Rus savaşında Osmanlı Devleti'nin yenilmesi
  //     üzerine Kerç ve Yenikale elden çıktı."
  //    "1774'te Küçük Kaynarca Antlaşması hükümlerine göre Yenikale ile
  //     birlikte Rusya'ya terkedilen Kerç…"
  //  TDV `kucuk-kaynarca-antlasmasi` (200, gövde okundu):
  //    "Kılburun Kalesi (md. 18) ve Kerç ile Yenikale (md. 19), Küçük ve
  //     Büyük Kabartaylar (md. 21) Rusya'ya bırakılmaktaydı."
  //
  // 🟡 GÜN SEÇİMİ — ikisi de açıkça yazılıyor:
  //   1703-01-01  TDV YIL veriyor, GÜN vermiyor ⇒ `§4`in "gün bilinmiyorsa
  //               YYYY-01-01" kuralı. UYDURULMADI.
  //   1774-07-21  🔴 TDV maddesi antlaşma için İKİ tarih anıyor: delegeler
  //               **21 Temmuz 1774**'te imzalamış, tasdiknâme mübadelesi
  //               **26 Temmuz**'da olmuş. Külliyatın kendi maddesi
  //               ("Küçük Kaynarca Antlaşması") **1774-07-21**'de duruyor
  //               ⇒ o gün alındı. Bu bir TUTARLILIK seçimi DEĞİL: TDV'nin
  //               verdiği iki günden biri, ve külliyatla aynı olanı.
  //               26'yı yazmak Değişmez 2'yi ±5 günle hâlâ geçerdi ama
  //               aynı olayı iki günde tutan İKİNCİ bir kayıt doğururdu.
  //
  // 🔴 VE BİR ŞEYİ KASTEN YAPMADIM: Kerç'in kendi kaydına DOKUNMADIM.
  //    Kerç `d:[{1475-06-06 → 1774-07-21}]` taşıyor ve doğru; Yenikale
  //    onun İÇİNDEN doğan ayrı bir kale, ayrı bir petek. İkisi 10,4 km
  //    ayrı — 3 km kuralının üstünde, ve Boğaz'ın iki ayrı ucu.
  //
  // `m:"Kefe"` — Kerç'in bağlı olduğu merkezin aynısı (Kefe sancağı).
  // `k:4` — kale kademesi; komşu kaleler Or Kapı · Balaklava · İnkirman
  //   da k:4. Kerç k:3 (şehir), Yenikale ondan küçük bir istihkâm.
  { ad:"Yenikale", tur:"kale", lat:45.3521, lon:36.6004, g:0, k:4, m:"Kefe",
    kur:"1703-01-01",
    d:[{f:"1703-01-01",t:"1774-07-21"}],
    s:[{f:"1774-07-21",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"kerc" },

  // ── UMAN — TDV'nin GÖREMEDİĞİ yerin AKADEMİK kaynakla kapanması ─────
  // 🔴 ÖNCE BİR TUZAK: TDV slug'ı `uman` HTTP 200 döndürüyor ve başlığı da
  //    "UMÂN" — ama açtığı madde **Arabistan'daki Umân ülkesi.** Ukrayna
  //    şehriyle hiçbir ilgisi yok. `§4②`nin (canlı slug, YANLIŞ madde)
  //    altıncı ölçülmüş vakası: `ordu · saray · cin · mogadisu · nis · uman`.
  //    İçeriği okumasaydım bu kayıt "TDV'de var" diye yazılacaktı.
  // ⇒ `§4`ün TANECİKLİK/COĞRAFÎ boşluk hükmü işletildi: standart akademik
  //    kaynak, ve hangi eser olduğu AÇIKÇA yazılıyor.
  //
  //  KAYNAK — Internet Encyclopedia of Ukraine (Canadian Institute of
  //  Ukrainian Studies, University of Alberta; basılı Encyclopedia of
  //  Ukraine'in, University of Toronto Press, çevrimiçi sürümü), madde
  //  "Uman". Gövdesi okundu, birebir:
  //    "It was first mentioned in historical documents in 1616, when it was
  //     under Polish rule."
  //    1648'de "it was liberated from the Poles by Ivan Hanzha, a colonel of
  //     Bohdan Khmelnytsky."
  //    "Under the ownership of the Potocki family of Polish magnates
  //     (1726-1832) the town grew in economic and cultural importance."
  //    "After the partition of Poland in 1793, Uman was annexed by Russia."
  //
  // 🟡 `kur:1616-01-01` — kaynak "ilk kez 1616'da anılıyor" diyor, KURULUŞ
  //    demiyor. İkisi aynı şey değil ve bunu yazıyorum: alan "ilk kayıt"
  //    anlamında kullanıldı. Gün yok ⇒ `§4`: YYYY-01-01.
  // 🔴 VE BU GÜN ÇEKİRDEKTE KARŞILIKSIZ — ölçtüm, gizlemiyorum:
  //    1616-01-01'in en yakın maddesi 160 gün ötede (1616-06-09, Sultan
  //    Ahmed Camii). Bu bir YABANCI (`s:`) kırılması ⇒ `Değişmez 2s`,
  //    tavan 121, bugün 70 ⇒ AÇIK 70 → 71. Tavanın çok altında ama
  //    SESSİZ değil: borç burada yazılı. Kapanması için 1616 civarına bir
  //    Lehistan-Ukrayna maddesi gerekiyor.
  // 🟢 Bitiş günü ise ±0: `1793-01-23` külliyatta "Polonya'nın İkinci
  //    Paylaşımı — Rusya ve Prusya" maddesiyle duruyor ve kaynağın
  //    "after the partition of Poland in 1793" cümlesiyle BİREBİR aynı olay.
  //
  // ⚠️ YAZMADIĞIM İKİ PENCERE — kasıtlı, ve gerekçesi komşu kayıt:
  //    ① 1648-1667 Kazak (Hmelnitski) dönemi
  //    ② 1672-1699 Osmanlı/Bratslav dönemi ihtimali
  //    Komşu `Çehrin (Çigirin)` kaydı ①'i HİÇ modellemiyor (Kazak
  //    Hetmanlığı'nın BAŞKENTİ olduğu hâlde `s:"lehistan"` taşıyor) ve
  //    ②'yi yalnız 1678-07-19→1699-01-26 olarak, kendi kuşatmasıyla
  //    yazıyor. Uman için ikisinin de GÜNÜ elimdeki kaynakta YOK.
  //    ⇒ Uydurmak yerine KAYDETTİM: bu iki pencere açık borçtur.
  { ad:"Uman", tur:"sehir", lat:48.7484, lon:30.2219, g:0, k:3,
    kur:"1616-01-01",
    s:[{f:"1616-01-01",t:"1793-01-23",d:"lehistan"},
       {f:"1793-01-23",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV'de Ukrayna'daki Uman maddesi YOK (`uman` slug'ı Arabistan'daki Umân'ı açıyor, ölçüldü). Dayanak: Internet Encyclopedia of Ukraine (Canadian Institute of Ukrainian Studies, University of Alberta), madde \"Uman\"" },

  // ═══════════════════════════════════════════════════════════════════
  // TUR 3 — PAKET A'nın son kalemi (Kızıkermen) + PAKET B'nin yedisi
  // Hepsinin kaynağı: Internet Encyclopedia of Ukraine (CIUS, University
  // of Alberta). Gövdeler tek tek okundu; alıntılar kayıtların içinde.
  // ═══════════════════════════════════════════════════════════════════

  // ── KIZIKERMEN — atlasta İLK `kesinlik:` YAZIMI ────────────────────
  // 🟢 Koordinatör kararı (2 Eylül): belirsiz uca `kesinlik:"yuzyil"`,
  //    sağlam uçlara YAZILMAZ. Bu kayıt o kuralın ilk uygulaması.
  //  IEU madde "Beryslav" (kalenin yerindeki bugünkü şehir), birebir:
  //    "the Tatars re-took the site and built here the fortress of
  //     Kazi-Kermen"                                     ← MID-15th CENTURY
  //    "in 1526 assumed direct control of the right bank with Kazi-Kermen
  //     as its northern outpost"                          ← 1526, DOĞRUDAN
  //    "Following the Russo-Turkish War of 1768-74, Kazi-Kermen was
  //     incorporated into the Russian Empire"             ← 1774
  //
  // 🟡 BAŞLANGIÇ GÜNÜ — kaynak YÜZYIL veriyor, ve seçimimi yazıyorum:
  //    `1450-01-01` (yüzyıl ortası) yerine **`1441-01-01`** alındı, çünkü
  //    o gün külliyatta ZATEN var ve KONUSU DA DOĞRU: "Kırım Hanlığı'nın
  //    kuruluşu — Hacı Giray'ın Altınorda'dan ayrılışı" (±0 gün).
  //    Kalenin TATAR dönemi hanlıktan önce başlayamaz ⇒ hem kaynakla
  //    uyumlu hem karşılıksız gün doğurmuyor. Yine de gerçek tarih yüzyıl
  //    hassasiyetinde olduğu için `kesinlik:"yuzyil"` konuldu — arayüz
  //    kullanıcıya "1 Ocak 1441" diye KESİN bir gün göstermesin.
  // 🔴 1526-01-01 ±0 gün karşılık buluyor AMA madde ALAKASIZ ("Pîrî Reis'in
  //    Kitâb-ı Bahriye'yi genişletmesi"). Denetimi geçer; bunu KAZANÇ değil
  //    KUSUR sayıyorum ve kaydediyorum — Çuguçak vakasının aynısı.
  // ⚠️ 1670 Kazak baskını ve 1695-1700 Rus işgali YAZILMADI: günleri
  //    kaynakta yok ve IEU kalıcı devri 1774'e tarihliyor. Kayıtlı borç.
  { ad:"Kızıkermen (Gazi Kerman)", tur:"kale", lat:46.8400, lon:33.4200, g:0, k:4,
    kur:"1441-01-01",
    d:[{f:"1526-01-01",t:"1774-07-21"}],
    s:[{f:"1441-01-01",t:"1526-01-01",d:"kirim",kesinlik:"yuzyil"},
       {f:"1774-07-21",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV'de müstakil madde YOK (`kizikermen`·`gazikerman`·`gazi-kerman` 302; kapsayıcı `ozu` maddesi Dinyeper kalelerini anmıyor). Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Beryslav\". BAŞLANGIÇ yüzyıl hassasiyetindedir — `kesinlik:\"yuzyil\"` beyanı kayıtta duruyor" },

  // ── KREMENÇUK ──────────────────────────────────────────────────────
  //  IEU "Kremenchuk": "Kremenchuk was founded in 1571." · "A Polish castle
  //  was built there in 1596." · Kazak Hetmanlığı'nda bölük/alay merkezi
  //  (1648-61, 1661-3, 1667-1765) · "capital of New Russia gubernia in 1765-83".
  // 🟡 Rusya'ya geçiş günü: komşu `Poltava`nın kullandığı `1654-01-18`
  //    (Pereyaslav Radası, külliyatta 1654-01-08 ±10 gün). Bu bir KAYNAK
  //    GÜNÜ DEĞİL, komşu kalıbı — açıkça yazılıyor. IEU 1765'i idarî
  //    kademe olarak veriyor, HÂKİMİYET devri olarak değil.
  // 🔴 `1571-01-01` çekirdekte KARŞILIKSIZ (en yakın madde 106 gün) ⇒
  //    `2s` AÇIK +1 bekleniyor.
  { ad:"Kremençuk", tur:"sehir", lat:49.0700, lon:33.4200, g:0, k:3,
    kur:"1571-01-01",
    s:[{f:"1571-01-01",t:"1654-01-18",d:"lehistan"},
       {f:"1654-01-18",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Kremenchuk\"" },

  // ── LUBNI — atlas ufkundan ESKİ, o yüzden `kur:` YOK ────────────────
  //  IEU "Lubny": "It was founded as a fortified frontier town in 988 by
  //  Grand Prince Volodymyr the Great of Kyiv." · "Rebuilt in the latter
  //  half of the 16th century by the Wiśniowiecki family" · "In the Hetman
  //  state it was a regimental capital (1648, 1658-1781)."
  // ⇒ 1281'de zaten vardı ⇒ `kur:` yazılmaz, zincir 1281'den başlar.
  // 🟡 1281-1654 zinciri komşu `Poltava`dan BİREBİR alındı (altinorda →
  //    lehistan 1362 → rusya 1654-01-18). Bu bir TUTARLILIK seçimidir ve
  //    yazılıyor: IEU Lubnı için o iki günü vermiyor, ama şehir Poltava'nın
  //    55 km kuzeybatısında, aynı alayda ve aynı siyasî çemberde.
  // 🟢 Yeni gün doğurmaz: iki gün de Poltava'da ZATEN kullanılıyor.
  { ad:"Lubnı", tur:"sehir", lat:50.0200, lon:33.0000, g:0, k:3,
    s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},
       {f:"1362-01-01",t:"1654-01-18",d:"lehistan"},
       {f:"1654-01-18",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Lubny\"; 1281-1654 zinciri komşu Poltava kaydının kalıbıdır (tutarlılık seçimi, kaynak günü değil)" },

  // ── SUMI ───────────────────────────────────────────────────────────
  //  IEU "Sumy": "It was founded in 1652 by peasants and Cossacks from Bila
  //  Tserkva regiment in Right-Bank Ukraine led by Colonel Herasym
  //  Kondratiev." · "fortified by the Muscovite voivode K. Arsenev (1656-8)"
  //  · "the center of Sumy regiment (1658-1765)".
  // ⇒ Slobodskaya Ukrayna: kuruluşundan itibaren Moskova/Rusya çemberinde.
  // 🔴 `1652-01-01` çekirdekte KARŞILIKSIZ (121 gün) ⇒ `2s` AÇIK +1.
  { ad:"Sumı", tur:"sehir", lat:50.9100, lon:34.8000, g:0, k:3,
    kur:"1652-01-01",
    s:[{f:"1652-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Sumy\"" },

  // ── ÇUGUYEV ────────────────────────────────────────────────────────
  //  IEU "Chuhuiv": "Chuhuiv was founded in 1638 as a frontier settlement by
  //  Yakiv Ostrianyn and his Cossacks." · "From the middle of the 17th
  //  century to 1765 it was a company town in the Kharkiv regiment."
  // 🔴 `1638-01-01` çekirdekte KARŞILIKSIZ (151 gün) ⇒ `2s` AÇIK +1.
  { ad:"Çuguyev", tur:"sehir", lat:49.8300, lon:36.6800, g:0, k:3,
    kur:"1638-01-01",
    s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Chuhuiv\"" },

  // ── İZYUM ──────────────────────────────────────────────────────────
  //  IEU "Izium": "in 1681 it was fortified by Kharkiv regiment's Col
  //  H. Donets, and the fortress served as an important defense outpost" ·
  //  Izium alayının merkezi (1685-1765).
  // 🟢 `1681-01-01`in ±10 günde karşılığı VAR ve konusu da yakın:
  //    "Bahçesaray Antlaşması — Rusya ile ilk resmî barış" (1681-01-11).
  //    Aynı sınırın aynı yılı ⇒ eşleşme alakasız DEĞİL.
  // ⚠️ 3 km kapısı: en yakın nokta `Sloboda bozkırı` 6,6 km — ama o bir
  //    `k=0` DOLGU noktası, gerçek yerleşim değil. İzyum indikten sonra o
  //    dolgunun hâlâ gerekli olup olmadığı AYRICA ölçülmeli (kayıtlı borç).
  { ad:"İzyum", tur:"sehir", lat:49.2100, lon:37.2900, g:0, k:3,
    kur:"1681-01-01",
    s:[{f:"1681-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Izium\"" },

  // ── BAHMUT ─────────────────────────────────────────────────────────
  //  IEU "Bakhmut": "the leader of the Cossack Izium regiment appealed to
  //  Tsar Peter I for permission to construct the fortress of Bakhmut,
  //  which they built in 1703." · tuzlaları 1707-8 Bulavin isyanından sonra
  //  Rus devlet işletmesi oldu · "in 1783 Bakhmut became a county town in
  //  Katerynoslav gubernia".
  // 🟡 `1703-01-01` ±0 karşılık buluyor — ama o madde BU OTURUMUN yazdığı
  //    "Yenikale'nin inşası". İkisi de 1703 kale kuruluşu, ama AYNI OLAY
  //    DEĞİL. Denetimi geçer; eşleşmenin zayıf olduğunu KAYDEDİYORUM.
  { ad:"Bahmut", tur:"sehir", lat:48.6000, lon:38.0000, g:0, k:3,
    kur:"1703-01-01",
    s:[{f:"1703-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Bakhmut\"" },

  // ── YELİSAVETGRAD (Aziz Yelizaveta Kalesi) ─────────────────────────
  //  IEU "Kropyvnytskyi": "The city was founded in 1754 on Zaporozhian
  //  Cossack territory as the Saint Elizabeth Fortress, which was built to
  //  protect the Russian Empire's southern frontier." — kale, Yeni Sırbistan
  //  bölgesindeki Balkan göçmenlerini Osmanlı ve Kırım akınlarından korumak
  //  için yapıldı.
  // 🔴 `1754-01-01` çekirdekte KARŞILIKSIZ (346 gün) ⇒ `2s` AÇIK +1.
  // 📌 Bu nokta atlasın konusuna DOĞRUDAN değiyor: kalenin kuruluş gerekçesi
  //    Osmanlı-Kırım akın hattıdır; noktasız bırakıldığında o hattın kuzey
  //    yakası en yakın peteğe emiliyor (`§2`).
  { ad:"Yelisavetgrad (Aziz Yelizaveta Kalesi)", tur:"kale", lat:48.5100, lon:32.2600, g:0, k:4,
    kur:"1754-01-01",
    s:[{f:"1754-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Kropyvnytskyi\" (`Yelysavethrad` maddesi ona yönlendiriyor)" }

];

// ═══════════ PAKET A'NIN ÖTEKİ ON BİRİ — hepsi `bulunamadı` ═══════════
// Ve `bulunamadı` demeden önce `§4`ün İKİ basamağı da koşuldu:
//   ① dar slug denendi   ② tutmayınca KAPSAYICI madde denendi
//
//   Kılburun     dar slug `kilburun`·`kinburun` 302 · kapsayıcı `ozu` OKUNDU
//                → Kılburun'u yalnız KONUM olarak anıyor ("Özi'nin karşısı"),
//                  yapılış tarihi YOK. BİTİŞİ biliniyor (1774, Kaynarca md.18)
//                  ama BAŞLANGIÇ kaynaksız ⇒ YAZILMADI.
//                  🔴 Özi'nin 1538 gününü Kılburun'a yazmak cazipti ve
//                     REDDEDİLDİ: koordinatörün bu gece koyduğu kural —
//                     "bir seferin günü bütün bölgeye toptan yazılmasın"
//                     (1578-08-09 vakası). Kılburun 18. yy kalesi olabilir;
//                     1538 yazmak 200 yıl uydurmak olurdu.
//   Kızıkermen   `kizikermen`·`gazikerman`·`gazi-kerman` 302 · `ozu` maddesi
//                Dinyeper kalelerini (Aslan/Mübarek/Şahin Kerman dâhil) HİÇ
//                ANMIYOR — ölçüldü.
//   Arabat       `arabat` 302 · `kirim` ve `kerc` maddeleri ADINI ANMIYOR.
//   Temrük       `temruk` 302 · `sahib-giray` OKUNDU: yalnız Orkapı/Ferah
//                Kerman'ı anıyor, Kuban-Taman kalesi YOK. `karadeniz`
//                OKUNDU: Temrük'ü yalnız 18. yy tersane listesinde anıyor,
//                TARİH YOK.
//   Kopıl        `kopil` 302 · `nogaylar` OKUNDU: "Yedisan, Camboyluk, Bucak
//                ve Kuban Nogayları Kırım Hanlığı'nın hâkimiyeti altındaydı"
//                diyor ama Kopıl ADI GEÇMİYOR.
//   Açuyev       aynı — `nogaylar` ve `karadeniz` ikisi de anmıyor.
//   Sucuk Kale   `sucuk-kalesi` 302 · `karadeniz` anmıyor.
//   Balta        `balta`·`balta--sehir` 302 · kapsayıcı bulunamadı.
//   Dubossary    slug yok · kapsayıcı bulunamadı.
//   Kodak        `kodak` 302 · kapsayıcı bulunamadı.
//   Uman         🔴 `uman` 200 AMA YANLIŞ MADDE — açtığı madde **Umân**
//                (Arabistan'daki ülke). `§4 ②` tuzağının bu turdaki vakası:
//                canlı slug, doğru başlık, TAMAMEN BAŞKA KONU. İçeriği
//                okumasaydım Ukrayna şehrini "TDV'de var" sayacaktım.
//
// ⇒ ON BİRİ DE `§4`ün TANECİKLİK boşluğunda: TDV Kırım'ı ve Karadeniz'i
//   görüyor, ama bu kalelerin TEK TEK tarihlerini vermiyor. Kural gereği
//   standart akademik kaynak meşru — o tur AYRI BİR İŞ olarak duruyor ve
//   `kaynak:` alanına "bulunamadı — TDV bu taneciği kapsamıyor" damgasıyla
//   yazılacak.

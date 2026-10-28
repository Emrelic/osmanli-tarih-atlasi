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
  { ad:"Yenikale", isg:[{f:"1771-07-12",t:"1774-07-21",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1771-07-01 (Kerç, Yenikale, Taman; RBS «Щербатов, Федор Федорович» 'В июле', eski takvim, AY: Jülyen ay başı) = Gregoryen 1771-07-12 · TAKVİM (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.28, kutu 0065): VERI-YAPISI TAKVİM kuralına dönüldü, Jülyen gün ÇEVRİLMEDEN yazıldı — kaynak 'Temmuz' (Jülyen) — ay başı, AY hassasiyeti; eski Gregoryen çevirisi 1771-07-12 geri alındı, aşağıdaki çeviri açıklaması ESKİDİR. ESKİ NOT: RBS «Щербатов, Федор Федорович» — 'В июле того же года он, после некоторого сопротивления, занял Керчь, Еникале и Тамань' · ЭСБЕ «Керчь» ('Русские вновь овладели К. в 1771 г.') · VE «Керчь». İŞGAL, ilhak değil: Küçük Kaynarca ile Rusya'ya bırakıldı. ⚠️ GÜN KAYNAKTA YOK — kaynak yalnız 'Temmuz' (Jülyen) diyor ⇒ Gregoryen 12 Temmuz–11 Ağustos; 1771-07-12 bu aralığın İLK günüdür, bir ALT SINIRDIR, olay günü DEĞİLDİR. YAMA-SEFER1768-0917 Y-2 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], tur:"kale", lat:45.3521, lon:36.6004, g:0, k:4, m:"Kefe",
    kur:"1703-05-17", kesinlik:"yil", neden:"KUTU-H6-1015 (0082/H-0070, K1R4 bulgusu) — HİCRÎ YIL KURALI (CLAUDE.md): TDV kerc '1115’te (1703) Kerç şehrinin 10 km. kuzeydoğusunda Akıntı Burnu mevkiinde Yenikale yapıldı'. Hicrî 1115 = 17 Mayıs 1703 – 5 Mayıs 1704 (tablo takvimi, Gregoryen; 1582 sonrası TDV mîlâdî karşılıkları Gregoryen) ∩ mîlâdî 1703 ⇒ kesişimin ilk günü 1703-05-17. Eski 1703-01-01 hicrî yılın başlamadığı bir güne düşüyordu. Kesinlik YIL (gün kaynakta yok). kur gerçek kuruluştur (TDV 'yapıldı'); öncül/ardıl: Kerç 1475 Osmanlı, çakışma yok.",
    d:[{f:"1703-05-17",t:"1774-07-21",kesinlik:{f:"yil",t:"gun"}}],
    s:[{f:"1774-07-21",t:"1783-04-19",d:"rusya",enklav:true,kaynak:"KUTU-G5-1014 (0080/H-0019) enklav beyanı · TDV kirim: Küçük Kaynarca ile Rusya'ya 'Yenikale ve Kerç, Dinyeper ağzında Kılburun Kalesi' bırakıldı; Kırım hanlığı 'serbest ve tam mânasıyla müstakil' — Rus gövdesinden müstakil Kırım toprağıyla ayrılmış eksklav, ilhaka dek (TDV kirim: 'Kırım çarlığın bir vilâyeti haline getirildi (8 Nisan 1783)'; 1783-04-19 = komşu Kefe/Sudak kayıtlarındaki ilhak günü)"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
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
    s:[{f:"1616-01-01",t:"1674-08-03",d:"lehistan",kesinlik:{f:"yil",t:"ay"}},
       {f:"1699-01-26",t:"1793-01-23",d:"lehistan"},
       {f:"1793-01-23",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    // d: 1674 — TDV `merzifonlu-kara-mustafa-pasa`: "Cemâziyelevvel 1085 (Ağustos 1674) …
    //   Human'ı (Uman) teslim aldı". AY hassasiyeti: §4 gereği YYYY-01-01 (YAMA-0052-UKRAYNA 10).
    d:[{f:"1674-08-03",t:"1699-01-26",y:"fetih",kesinlik:{f:"ay",t:"gun"},kaynak:"TDV merzifonlu-kara-mustafa-pasa: Lehistan'a ait kalelerden Human'ı (Uman) teslim aldı — Ağustos 1674, gün yok · KUTU-P2-1015 (0082/H-0070) — HİCRÎ KURAL (CLAUDE.md): TDV merzifonlu-kara-mustafa-pasa 'Cemâziyelevvel 1085 (Ağustos 1674)'. Cemâziyelevvel 1085 = 3 Ağustos – 31 Ağustos 1674 (tablo takvimi, Gregoryen; ±1 gün) ∩ Ağustos 1674 ⇒ kesişimin ilk günü 1674-08-03. Eski 1674-01-01 fethi yedi ay erkene çekiyordu. Kesinlik AY (gün kaynakta yok). Öncül lehistan ucu aynı güne alındı."}],
    kaynak:"1674-1699: TDV merzifonlu-kara-mustafa-pasa · öteki dönemler: bulunamadı — TDV'de Ukrayna'daki Uman maddesi YOK (`uman` slug'ı Arabistan'daki Umân'ı açıyor, ölçüldü). Dayanak: Internet Encyclopedia of Ukraine (Canadian Institute of Ukrainian Studies, University of Alberta), madde \"Uman\"" },

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
  // 🔴🔴 BAŞLANGIÇ GÜNÜ — `1441-01-01` BİR **ALT SINIRDIR**, KURULUŞ GÜNÜ DEĞİL.
  //    Kaynak "15. yüzyıl ortası" diyor, YIL VERMİYOR. `1441-01-01` Kırım
  //    Hanlığı'nın kuruluşudur (Hacı Giray'ın Altınorda'dan ayrılışı) ve
  //    kalenin TATAR dönemi ondan önce başlayamaz — dayanak budur: tarihî
  //    bir KISIT. `kesinlik:"yuzyil"` kalan belirsizliği taşır.
  //
  // ⚠️⚠️ VE ŞU SATIR ŞART, ÇÜNKÜ YANLIŞ OKUNURSA BİR KUSUR SINIFI ÜRETİR:
  //    Bu günün çekirdekte ±0 karşılığı olması bir **YAN FAYDADIR,
  //    GEREKÇE DEĞİL** — tarih o yüzden seçilmedi. Koordinatör (1.MURAT,
  //    2 Eylül) haklı olarak uyardı: "bir tarihi, orada zaten bir madde
  //    olduğu için seçmek" ÖDÜNÇ TARİH mantığıdır ve bu gece `1578-08-09`
  //    (9 dönem ucu, 417 km) ile `1517-04-13` tam böyle doğmuştu.
  //    ⇒ Bir sonraki oturum bu kaydı okuyup *"karşılıksız günden kaçınmak
  //      için tarih kaydırılabilir"* diye ANLAMAMALI. Kaydırılamaz.
  //      Buradaki gün, kaynağın verdiği yüzyılın İÇİNDE kalan ve tarihî
  //      bir kısıtla belirlenen alt sınırdır; denetim onu ucuza geçiriyor
  //      olması tesadüftür.
  // 🔴 1526-01-01 ±0 gün karşılık buluyor AMA madde ALAKASIZ ("Pîrî Reis'in
  //    Kitâb-ı Bahriye'yi genişletmesi"). Denetimi geçer; bunu KAZANÇ değil
  //    KUSUR sayıyorum ve kaydediyorum — Çuguçak vakasının aynısı.
  // ⚠️ 1670 Kazak baskını ve 1695-1700 Rus işgali YAZILMADI: günleri
  //    kaynakta yok ve IEU kalıcı devri 1774'e tarihliyor. Kayıtlı borç.
  { ad:"Kızıkermen (Gazi Kerman)",not:"POST-IT #117: Kızıkermen 1695-1700 Rus dönemi eklendi.", v:[{f:"1475-06-06",t:"1526-01-01",k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak:"Emre kararı D (13 Eyl 2026, oturumlar/KOSU10-SONRASI.md 0043/H-0003): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE. TDV `kirim`: 'Nogaylar'ın hana tâbiiyeti gevşek olup bunlar hanlık iddiasında bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek…' (denetim/ARASTIRMA-KIRIM-0912.md ③). Pencere = s:kirim ∩ Kırım'ın Osmanlı tâbiliği 1475-06-06 (Kefe fethi, olaylar.js) → 1774-07-21 (Küçük Kaynarca, olaylar.js); dışı s:kirim kaldı."}], neden:"VERI-KIRIM 14 Eyl 2026 ③ (Emre kararı D): s:kirim ∩ 1475-06-06→1774-07-21 → v: gevşek himaye (kid kirim, statu gevsek, himaye:true).", tur:"kale", lat:46.8400, lon:33.4200, g:0, k:4,
    kur:"1441-01-01",
    d:[{f:"1526-01-01",t:"1695-01-01"},{f:"1700-07-14",t:"1774-07-21"}],
    s:[{f:"1441-01-01",t:"1475-06-06",d:"kirim",kesinlik:"yuzyil"},{f:"1695-01-01",t:"1700-07-14",d:"rusya",kaynak:"f: Ignat'yeva, Studia Slavica et Balcanica Petropolitana 2013/1: 1695'te Şeremetev ile Mazepa aldı (yıl; zapt günü bulunamadı) [yalnız yıl teyitli; gün teyitsiz] · t: TDV karlofca: 1700 İstanbul Antlaşması (14 Temmuz 1700) ile Osmanlı'ya döndü. Kızıkermen için TDV maddesi yok.",kesinlik:{f:"yil",t:"gun"}},{f:"1774-07-21",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"bulunamadı — TDV'de müstakil madde YOK (`kizikermen`·`gazikerman`·`gazi-kerman` 302; kapsayıcı `ozu` maddesi Dinyeper kalelerini anmıyor). Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Beryslav\". ⚠️ BAŞLANGIÇ 1441-01-01 bir ALT SINIRDIR, kuruluş günü DEĞİLDİR: kaynak \"15. yüzyıl ortası\" diyor, 1441 Kırım Hanlığı'nın kuruluşudur ve kalenin Tatar dönemi ondan önce başlayamaz. `kesinlik:\"yuzyil\"` bu belirsizliği taşır. Bu günün külliyatta karşılığı olması bir YAN FAYDADIR, GEREKÇE DEĞİL — tarih o yüzden seçilmedi" },

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
       {f:"1654-01-18",t:"1917-03-15",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1654-01-08 (Pereyaslav Radası; ESBE «Переяславская рада» '8 января 1654 г.', eski takvim) = Gregoryen 1654-01-18 · KUTU-P2-1015 (0082/H-0070): Pereyaslav günü 1654-01-18 (Gregoryen karşılık) → 1654-01-08, kaynağın eski takvim günü (ESBE «Переяславская рада»: '8 января 1654 г.'; KARARLAR-1014 m.28); çekirdek madde olaylar_ek16.js 1654-01-08"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
    s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1654-01-18",d:"lehistan"},{f:"1654-01-18",t:"1917-03-15",d:"rusya",kaynak:"TAKVİM-1015 (Emre #10: atlas günleri Gregoryen, Jülyen gün çevrildi): Jülyen 1654-01-08 (Pereyaslav Radası; ESBE «Переяславская рада» '8 января 1654 г.', eski takvim) = Gregoryen 1654-01-18 · KUTU-P2-1015 (0082/H-0070): Pereyaslav günü 1654-01-18 (Gregoryen karşılık) → 1654-01-08, kaynağın eski takvim günü (ESBE «Переяславская рада»: '8 января 1654 г.'; KARARLAR-1014 m.28); çekirdek madde olaylar_ek16.js 1654-01-08"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
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
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Kropyvnytskyi\" (`Yelysavethrad` maddesi ona yönlendiriyor)" },

  // ── KUTU-H6-1015 · 0082/H-0070 (Karadeniz kuzeyi derin paketi, K1R4 bulgusu) ─────
  //  NOVOROSSİYA ŞEHİRLERİ: 1775 sonrası Rus kuruluşları atlasta hiç yoktu; 1783 sonrası
  //  Rus toprağı yalnız bozkır sözde-noktalarının uçlarıyla boyanıyordu. 1900 kategorisi:
  //  Herson ve Yekaterinoslav gubernia merkezi (kat. 2), Mariupol uyezd merkezi (kat. 3),
  //  Novoçerkask Don Ordusu Oblastı merkezi (kat. 2). kur: GERÇEK KURULUŞ (kaynak 'основан' /
  //  'устроена') — yıl hassasiyeti, gün yok ⇒ YYYY-01-01. Mükerrer taraması: 3 km içinde nokta YOK.
  //  Sonrası (1917 → 2000) komşu Yelisavetgrad / Azak zincirinin devlet geçişleriyle aynı.
  { ad:"Herson", tur:"liman", lat:46.6383, lon:32.6158, g:0, k:3,
    kur:"1778-01-01", kesinlik:"yil", neden:"KUTU-H6-1015: kur GERÇEK KURULUŞ — ESBE «Херсон»: 'В 1737 г. … было заложено укрепление Александр-шанц, вскоре разрушенное; в 1778 г. устроена верфь, наименованная Х.' 1737 tahkimatı kısa ömürlü ve yıkık ⇒ şehir 1778'den. Gün kaynakta yok.",
    s:[{f:"1778-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Херсон» (1778 tersane-şehir; 1784 Yekaterinoslav valiliği kazası, 1803 gubernia merkezi) — Dinyeper sağ kıyısı Küçük Kaynarca'dan (1774) beri Rus"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Херсон» (ru.wikisource.org/wiki/ЭСБЕ/Херсон) — TDV'de madde yok (arama 'herson': yalnız künye anışları)" },
  { ad:"Mariupol", tur:"liman", lat:47.0971, lon:37.5434, g:0, k:3,
    kur:"1779-01-01", kesinlik:"yil", neden:"KUTU-H6-1015: kur GERÇEK KURULUŞ — ESBE «Мариуполь»: 'Настоящий г. основан в 1779 г. греками-выходцами из Крыма' (aynı maddede antik Adamakha varsayımı 'некоторые археологи полагают' — tanık değil). Gün kaynakta yok.",
    s:[{f:"1779-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Мариуполь» (1779 kuruluş; 1784 Yekaterinoslav valiliği kazası)"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Мариуполь» (ru.wikisource.org/wiki/ЭСБЕ/Мариуполь)" },
  { ad:"Yekaterinoslav (Dnipro)", tur:"sehir", lat:48.4647, lon:35.0462, g:0, k:2,
    kur:"1783-01-01", kesinlik:"yil", neden:"KUTU-H6-1015: kur bu KONUMDAKİ şehrin kuruluşu — ESBE «Екатеринослав»: 'В 1778 г. Потемкиным был основан уездный город Е., при впадении реки Кильчени в реку Самару … но уже в 1783 г. … Е. был перенесен на настоящее свое место'. 1778 şehri ~25 km kuzeydoğuda, ayrı yer (>3 km kuralı) ⇒ nokta 1783'ten. Aynı yerdeki eski Kodak/Kaydak (1635 Leh kalesi) ve Kazak kışlakları ESBE'de 'разрушение' sonrası — sürekli yerleşim tanığı değil, kur onlardan türetilmedi.",
    s:[{f:"1783-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Екатеринослав» (1783 bugünkü yerine nakil)"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Екатеринослав» (ru.wikisource.org/wiki/ЭСБЕ/Екатеринослав)" },
  { ad:"Novoçerkask", tur:"sehir", lat:47.4114, lon:40.1042, g:0, k:2,
    kur:"1805-01-01", kesinlik:"yil", neden:"KUTU-H6-1015: kur GERÇEK KURULUŞ — ESBE «Новочеркасск»: 'Н. основан в 1805 г. на урочище Бирючий Кут. До того времени административным центром донского войска служил' (eski Çerkask, ayrı yer). Gün kaynakta yok.",
    s:[{f:"1805-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Новочеркасск» (1805; Don Ordusu Oblastı merkezi)"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Новочеркасск» (ru.wikisource.org/wiki/ЭСБЕ/Новочеркасск)" },
  { ad:"Akyar (Sivastopol)", tur:"liman", lat:44.6138, lon:33.5254, g:0, k:3,
    kur:"1784-01-01", kesinlik:"yil", neden:"KUTU-H6-1015 (0082/H-0070): kur LİMAN-ŞEHRİN KURULUŞU — ESBE «Севастополь»: 'деревенька Ахтиар, местность которой была избрана в 1783 г. русскими для устройства военного порта. Последний был основан в следующем году и назван Севастополем' ⇒ 1784 (yıl). Kırım Tatar köyü Ahtiar daha önce vardı (ESBE 'Во время владычества татар'); köyün tarihli tanığı bulunamadı — kur görünme ALT SINIRIDIR, öncesinde toprak İnkirman (6,5 km) peteğindedir. TDV kirim 'eski Kırım Tatar köyü Akyar’ın üzerine kurulan deniz üssü' (arama özeti). 1900 kat. 2 (şehir valiliği).",
    s:[{f:"1784-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Севастополь» (1784 liman-şehir; 1804 Karadeniz donanmasının ana limanı) — Kırım 1783'ten Rus"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kesinlik:"gun",kaynak:"Encyclopedia of Ukraine (CIUS) 'Crimea' (encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm): Kırım 19 Şubat 1954’te RSFSR’den Ukrayna SSC’ye devredildi; Ukrayna 24 Ağustos 1991’de bağımsızlığını ilan etti, 1 Aralık 1991 referandumu doğruladı; Kırım ‘Autonomous Republic of Crimea’ olarak Ukrayna içinde kaldı (1996 Anayasası: ‘inseparable constituent part of Ukraine’); Rusya ilhakı 18 Mart 2014 (atlas ufku 2000-12-31). Eski kayıt (1991-12-26 ‘rusya-federasyonu’) SSCB feshi maddesindeki kendi notuyla işaretli hataydı. · BEYAN: Sivastopol/Karadeniz Filosu üs hakkı ve 1992-95 özerklik çekişmesi ayrı dilimlenmedi, de jure Ukrayna yazıldı · LEHISTAN-KRON 28 Ekim 2026"}],
    kaynak:"ESBE «Севастополь» (ru.wikisource.org/wiki/ЭСБЕ/Севастополь)" },
  { ad:"Berdyansk", tur:"liman", lat:46.7558, lon:36.7885, g:0, k:3,
    kur:"1827-01-01", kesinlik:"yil", neden:"KUTU-H6-1015 (0082/H-0070): kur GERÇEK KURULUŞ — ESBE «Бердянск»: 'Б. возник в 1827 г. стараниями кн. М. С. Воронцова; … в 1835 г. сделан городом, а в 1842 г. назначен уездным'. 1900 kat. 3 (uyezd merkezi). Gün yok.",
    s:[{f:"1827-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Бердянск» (1827)"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Бердянск» (ru.wikisource.org/wiki/ЭСБЕ/Бердянск)" },
  { ad:"Nikolayev (Mikolayiv)", tur:"liman", lat:46.9750, lon:31.9946, g:0, k:2,
    kur:"1784-01-01", kesinlik:"yil", neden:"KUTU-P2-1015 (0082/H-0070): kur GERÇEK KURULUŞ (tahkimat) — ESBE «Николаев, город Херсонской губернии»: 'Основан, в виде укрепления, кн. Потемкиным в 1784 г.'; IEU «Mykolaiv»: 'uninhabited until a fort (1784) and a shipbuilding wharf (1788)'. Gün kaynakta yok. Konum: bilinen şehir merkezi (İngul-Güney Bug kavşağı). Mükerrer taraması: 3 km içinde nokta YOK.",
    s:[{f:"1784-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Николаев, город Херсонской губернии» (1784 tahkimat; 1788 tersane) — Bug'un doğu yakası Küçük Kaynarca'dan (1774) beri Rus"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Николаев, город Херсонской губернии» (ru.wikisource.org/wiki/ЭСБЕ/Николаев,_город_Херсонской_губернии) · IEU «Mykolaiv» (encyclopediaofukraine.com) — TDV'de madde yok" },
  { ad:"Melitopol", tur:"sehir", lat:46.8489, lon:35.3675, g:0, k:3,
    kur:"1784-01-01", kesinlik:"yil", neden:"KUTU-P2-1015 (0082/H-0070): kur İLK YERLEŞİM — IEU «Melitopol»: 'A frontier settlement was established at the site in 1784'; 1816'da Novooleksandrivka adını aldı, ESBE «Мелитополь»: 'В 1841 г. … слобода Ново-Александровская была переименована в город М.' (şehir statüsü 1841). Gün kaynakta yok. Konum: bilinen şehir merkezi (Molochna ırmağı). Mükerrer taraması: 3 km içinde nokta YOK.",
    s:[{f:"1784-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"IEU «Melitopol» (1784 sınır yerleşimi) · ESBE «Мелитополь» (1841 şehir) — Kırım ilhakından (1783) sonra Rus"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-08-24",d:"sovyet-rusya"},{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"IEU «Melitopol» (encyclopediaofukraine.com) · ESBE «Мелитополь» (ru.wikisource.org/wiki/ЭСБЕ/Мелитополь)" },
  { ad:"Stavropol (Kafkas)", tur:"sehir", lat:45.0448, lon:41.9691, g:0, k:2,
    kur:"1777-01-01", kesinlik:"yil", neden:"KUTU-P2-1015 (0082/H-0070): kur GERÇEK KURULUŞ (kale) — ESBE «Ставропольская губерния» (Исторический обзор): 'В 1777 г. сооружено было 10 крепостей, в том числе Ставропольская' (Azak-Mozdok hattı). ESBE «Ставрополь Кавказский» ve МЭСБЕ kuruluş yılı vermiyor. Gün kaynakta yok. 1900 kat. 2 (gubernia merkezi). Konum: bilinen şehir merkezi (Kale tepesi ~0,5 km). Mükerrer taraması: 3 km içinde nokta YOK (Stavropol–Kuma bozkırı bölge noktası ~54 km GD).",
    s:[{f:"1777-01-01",t:"1917-03-15",d:"rusya",kesinlik:{f:"yil",t:"gun"},kaynak:"ESBE «Ставропольская губерния» (1777 Azak-Mozdok hattı kalesi)"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"ESBE «Ставропольская губерния» (ru.wikisource.org/wiki/ЭСБЕ/Ставропольская_губерния) — TDV'de madde yok" },
  // ── OSTROGOJSK — Slobodskaya Ukrayna dalgasının ikinci kasabası ─────
  //  IEU "Ostrohozke": "It was founded by Ukrainian Cossacks and fortified
  //  in 1652." · "In 1662 it became the center of Ostrohozke regiment in
  //  Slobidska Ukraine." · "in 1802 the town became a county center in
  //  Voronezh gubernia".
  // 🟢 `1652-01-01` KARŞILIKSIZ DEĞİL — ve eşleşme bu sefer ALAKALI:
  //    aynı gün bu oturumun yazdığı "Slobodskaya Ukrayna'nın kuruluşu —
  //    Sumı ve bozkır yerleşim kuşağı" maddesi duruyor. Ostrogojsk o
  //    dalganın İKİNCİ kasabası: aynı yıl, aynı olgu, aynı düzen.
  //    ⇒ Bu bir ödünç tarih DEĞİL; iki kayıt gerçekten aynı olayın parçası.
  //    (Karşılaştır: Bahmut'un 1703'ü benim Yenikale maddeme denk geliyor
  //     ve o eşleşme ZAYIF — farkı burada açıkça yazıyorum.)
  { ad:"Ostrogojsk", tur:"sehir", lat:50.8600, lon:39.0700, g:0, k:3,
    kur:"1652-01-01",
    s:[{f:"1652-01-01",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1991-12-26",d:"sovyet-rusya"},{f:"1991-12-26",t:"2000-12-31",d:"rusya-federasyonu",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}],
    kaynak:"bulunamadı — TDV kapsamı dışı. Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Ostrohozke\"" }

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

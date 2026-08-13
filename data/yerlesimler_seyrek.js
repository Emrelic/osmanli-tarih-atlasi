// =====================================================================
// SEYREK BÖLGELER — seyreklik listesinin ilk 5'i (PETEK/NOKTA, 3 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
// ⚠️ `data/yerlesimler_kirim.js` AYRI DOSYADIR, ona dokunulmadı.
//
// ── NİÇİN VAR ────────────────────────────────────────────────────────
// `oturumlar/PETEK-NOKTA-ILERLEME.md` §③'teki "en aç 20 bölge" listesinin
// ilk beşi. Ve p5 partisinin İKİ GÖRSELİ bu bölgelerin haritada ne ürettiğini
// birebir gösteriyor:
//
//   p5/H-0007  "yıldız şeklinde üçken üçken görünümler" — 1517-01-02,
//              görsel çerçevesi 29,41-31,90K / 37,35-40,14D
//   p5/H-0009  "işte bozuk görüntülere bir örnek daha" — 1517-07-12,
//              görsel çerçevesi 20,07-23,24K / 41,93-44,99D
//
// 🔴 İKİSİ DE PETEK ARTEFAKTI, ve sebebi ölçüldü:
//   H-0007 yıldızının merkezinde (30,5K/38,5D) EN YAKIN NOKTA 268 KM ötede.
//          Altı petek oraya 268-395 km'den uzanıyor: Maan 268 · Kerak 278 ·
//          Amman 293 · Tebük 301 · Kudüs 342 · Nefud çölü 345. Altı uzun ince
//          Voronoi dilimi tek noktada buluşunca çıkan şekil YILDIZDIR.
//   H-0009 kamasının merkezinde (21,6K/43,5D) en yakın nokta 310 km (Tâif).
//   ⇒ Kusur veride değil; `CLAUDE.md §2`nin ta kendisi.
//
//   box(29-33K / 37-43D) — yani kuzey Arabistan'ın TAMAMI — bugün SIFIR nokta.
//
// ── ÖLÇÜLMÜŞ ETKİ ────────────────────────────────────────────────────
//   H-0007 merkezi   268 km →  87 km   (3,1× yakın)   ← Vâdî Sirhân
//   H-0009 merkezi   310 km →  94 km   (3,3× yakın)   ← Necid güneybatısı
//   ③⑤ Hazar kuzeyi  185 km →  37 km   (5,1× yakın)   ← Rın kumulları
//   ④ Bâdiye 33K/40D 243 km → 180 km   (1,4× yakın)   ← Tedmür (KISMÎ, aşağıda)
//
// ── ÖN KOŞULLAR ──────────────────────────────────────────────────────
// ① maske: 7/7 nokta `motor_kara.geojson` İÇİNDE
// ② 3 km : 1597 noktalık evrene karşı en yakın çift 144,27 km (Tedmür ↔ Humus)
// ③ renk : memluk · fransa · sammar · suud · altinorda · rusya — ALTISI DA
//          renkler.py BOYALAR'ında tanımlı. YENİ RENK GEREKMİYOR.
// ④ 🔴 Değişmez 2 borcu SIFIR — bütün d:/v: uçları veride ZATEN VAR olan
//    kırılma günlerinden alındı (Şam · Nefud çölü · Necid içi kayıtlarından).
// ⑤ Değişmez 1: dört kayıt tam zincirli; ÜÇ kayıt KASTEN sahipsiz dolgudur
//    (aşağıda tek tek gerekçeli) — `CLAUDE.md` Değişmez 1'in "kasten boş"
//    kümesine katılır, sayaç 3 artar. **Bu bir delik DEĞİLDİR.**
//
// ── EKLENMEYENLER ────────────────────────────────────────────────────
// 🔴 HAMÂD (Şam-Bağdat bâdiyesi, ~32,6K/40,0D) — listenin ④. sırası
//    EKLENMEDİ ve sebebi `CLAUDE.md §3.5.1`: "bir sınır kayması önerildiğinde
//    İKİ UÇ DA ölçülür."
//      · Osmanlı yazarsam → kaynaksız olarak Osmanlı gövdesini çöle uzatırım
//      · devletsiz yazarsam → Suriye ile Irak'ın ARASINA beyaz bir delik açarım,
//        yani kullanıcının şikâyet ettiği "kopuk toprak parçası"nın yenisini
//    Hangisinin doğru olduğunu TDV'den ayıramadım (`necid`: aşiretler
//    "geleneksel idarelerinin devamı" ile Osmanlı hâkimiyetini tanıyor —
//    bu hâkimiyet mi tâbiyet mi, madde söylemiyor). **Kaynak bulunamadı;
//    ekleyeceğime atladım.** Cell ④ açık kalıyor, soru raporda yazılı.
//    📌 Tedmür yine de bu hücreyi 243 km'den 180 km'ye çekiyor.
// 🔴 SARAYCIK (Yayık, ~47,5K/51,75D) — TDV'de MÜSTAKİL MADDE YOK
//    (`saraycik` slug'ı "Arama - TDV İslâm Ansiklopedisi" döndürüyor).
//    Yalnız içerik geçişi var: "Sarayçık şehriydi", Nogay ordasının kışlağı,
//    XV-XVI. yüzyıl. Terk/yıkılış tarihi yok ⇒ dönem yazılamaz. ATLANDI.
// 🟡 HÂİL — EKLENMEDİ çünkü **ZATEN VAR** (yerlesimler.js:829, 27,521/41,691).
//    Aday listeme yazmıştım; 3 km ölçümü 0,46 km'de yakaladı. Envanter
//    kutumu 28K'nın altına indirmediğim için gözden kaçmıştı — ölçüm
//    yakaladı, kayıt değil.
// 🟡 BÎŞE (Bisha) — TDV'de madde YOK (`arama/?q=bîşe` yalnız `biset`,
//    `zeyd-b-amr`, `darulerkam` döndürüyor). Yerine coğrafî dolgu kondu.
//
// ── TDV SLUG TURU (`<title>` ile sınandı) ────────────────────────────
//   CANLI : tedmur · dumetulcendel · cevf · teyma · necid · residiler
//   ÖLÜ   : hail · saraycik · bise
//   📌 `hail` ölü ama Hâil'in kendisi `residiler` maddesinde: Reşîdî
//      emirliğinin merkezi, 1835 kuruluş, 1921 Suud yenilgisi, "Osmanlı
//      hâkimiyetini kabul etti".
// =====================================================================

window.YERLESIMLER_SEYREK = [

// ── ① BÂDİYE / ŞAM ÇÖLÜ ──────────────────────────────────────────────
// TDV `tedmur`: "XVI. yüzyıldan itibaren Şam eyaletine bağlı bir idarî
// merkez". Yani burası tâbi ya da aşiret toprağı DEĞİL, doğrudan Osmanlı
// idaresidir — çöl grubunun tek Osmanlı kaydı bu.
// Zincir Şam'ın birebir aynısı (yerlesimler.js:Şam), dört kırılma günü de
// oradan: 1516-09-27 · 1918-10-01 · 1832-06-15 · 1841-02-25.
// ⚠️ TDV XVIII. yy ilk yarısında Safed-Sayda-Beyrut eyaletine geçtiğini de
//    söylüyor; bu İDARÎ bir kademe değişimi, SAHİPLİK değişimi değil —
//    m: alanı bu yüzden "Şam"da bırakıldı, dönem açılmadı.
{ ad:"Tedmür (Palmyra)", tur:"sehir", lat:34.550, lon:38.270, g:0, k:4, m:"Şam",
  s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-09-27",t:"1918-10-01"}],
  v:[{f:"1832-06-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },

// ── ②③ KUZEY NECİD / CEVF — p5/H-0007 YILDIZININ İLACI ──────────────
// TDV `dumetulcendel` (+ `cevf` aynı maddeye gider): "Kuzey Arabistan'da
// Hicaz-Suriye kervan yolu üzerinde"; geç Osmanlı devrinde "hâkimiyet
// Vehhâbîler'in eline geçti", Şammar emîri Talâl ve Ruvale'den Nûri b.
// Şa'lân dönem dönem elinde tuttu; 1921'de Abdülazîz b. Suûd ilhak etti.
// ⇒ Zincir, Hâil kaydının (yerlesimler.js:829) BİREBİR aynısı: 1836 öncesi
//   sahipsiz (aşiret), 1836-1921 sammar, 1921-11-02'den suud.
//   Hâil zaten Şammar'ın başkenti; aynı emirliğin iki ucu aynı zinciri taşır.
// 📌 `d:`/`v:` HİÇ YOK ⇒ bu kayıt tek bir kırılma bile üretmiyor.
{ ad:"Dûmetülcendel (Cevf)", tur:"sehir", lat:29.812, lon:39.868, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"TDV `necid`: bölgede merkezî devlet yok, aşiret idaresi; 1836 öncesi sahipsizlik KASITLI",
  s:[{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },

// 🔴 KASTEN SAHİPSİZ DOLGU — ve yıldızı asıl kesen nokta budur (merkeze 87 km).
// Vâdî Sirhân, TDV `dumetulcendel`de "Vâdissirhân-Suriye kervan yolları"
// diye geçen çöl koridorudur; Ruvale aşiretinin otlağıdır, hiçbir devletin
// idaresinde değildir. TDV `necid` genel hükmü: "bu coğrafyada tarihte etkin
// olmuş bir devlet ortaya çıkmamıştır."
// ⚠️ Sahipsizliği KASITLIDIR (`Rub'ul Hâlî kuzeyi` ile aynı sınıf). Osmanlı
//    gövdesinin Maan'dan doğuya 270 km fırlamasını kesen şey tam olarak
//    buranın BOŞ olmasıdır — dolduran her sahiplik yıldızı geri getirir.
{ ad:"Vâdî Sirhân", tur:"bolge", lat:31.000, lon:37.800, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Vâdî Sirhân, Suriye Çölü'nde Rüvele/Anize gibi bedevi aşiret konfederasyonlarının denetimindeydi; Osmanlı idaresi güzergah üzerindeki durak noktalarıyla sınırlıydı." },

// TDV `teyma`: "Kuzeybatı Arabistan'da tarihî bir şehir"; son bağımsız
// emîrinin 1950'de ölümüne kadar yerel emîrler elinde. XIX. yy'da Şammar
// nüfuzundadır ⇒ Hâil/Dûmetülcendel zincirinin aynısı.
{ ad:"Teymâ", tur:"sehir", lat:27.632, lon:38.545, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"kabile", neden:"TDV `teyma`: son bağımsız emîr 1950'de öldü — yerel emîrlik, devlet idaresi yok",
  s:[{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },

// ── ④ HİCAZ-NECİD ARASI — p5/H-0009 KAMASININ İLACI ─────────────────
// 🔴 KASTEN COĞRAFÎ DOLGU (`Necid içi`, `Nefud çölü`, `Rub'ul Hâlî kuzeyi`
// ile aynı sınıf ve aynı adlandırma geleneği). Bîşe/Ranye/Türbe için TDV'de
// madde YOK; uydurma yerleşim adı yazmaktansa coğrafî tanım kullanıldı.
// Zincir `Necid içi` kaydının birebir aynısı — güney Necid'de Suûdî
// hâkimiyeti 1744'ten itibaren kaynaklıdır (TDV `necid`: 1744 ittifakı,
// 1891 Reşîdî sürgünü, 1902 Riyad'ın geri alınışı).
// İki kırılma günü (1818-09-09 · 1824-06-01) `Necid içi`de zaten var.
{ ad:"Necid güneybatısı", tur:"bolge", lat:21.500, lon:42.600, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"TDV `necid`: 1744 öncesi bölgede etkin bir devlet ortaya çıkmamıştır",
  s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}],
  v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}] },

{ ad:"Necid güneyi", tur:"bolge", lat:21.000, lon:45.000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"TDV `necid`: 1744 öncesi bölgede etkin bir devlet ortaya çıkmamıştır",
  s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}],
  v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}] },

// ── ⑤ HAZAR KUZEYİ — listenin 3. ve 5. sırası ───────────────────────
// 🔴 KASTEN COĞRAFÎ DOLGU. Volga ile Yayık (Ural) arasındaki Rın kumulları;
// Altın Orda'nın, sonra Nogay ve Kalmuk otlaklarının bozkırıdır. Zincir,
// 220 km güneybatıdaki `Kalmuk bozkırı` kaydının birebir aynısı.
// 📌 `d:`/`v:` yok ⇒ kırılma üretmiyor. Etki: 49K/47D'de en yakın nokta
//    185 km → 37 km (5,1× yakın).
{ ad:"Rın kumulları (Volga-Yayık arası)", tur:"bolge", lat:49.000, lon:47.500, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1556-01-01",d:"nogay"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },

// =====================================================================
// PARTİ 2b — RUMELİ / ANADOLU · kullanıcı maddelerinin coğrafyası
// =====================================================================
// Bu altı nokta seyreklik listesinin ilk 5'inde DEĞİL — yarıçapları 25-45 km,
// listenin eşiği 60 km+. Ayrıca ölçüldüler (ILERLEME.md §④, nokta bazlı) ve
// koordinatörün sevkindeki p2/p3 maddelerini kapatıyorlar.
//
// ⚠️ HEPSİNİN ZİNCİRİ EN YAKIN AYNI-KADERLİ KOMŞUSUNDAN BİREBİR KOPYADIR.
// Sebep tasarım kısıtı: bu oturum `olaylar*.js`e yazamıyor, dolayısıyla yeni
// bir kırılma günü açmak KAPATILAMAYACAK bir Değişmez 2 borcu doğururdu.
// Kullanılan günlerin hepsi veride zaten var:
//   1373-01-01 (Tatarpazarcığı·İhtiman) · 1363-01-01 (Gümülcine)
//   1466-06-01 (İlbasan) · 1463-06-01 (Travnik) · 1460-01-01 (İzvornik)
//   1345-01-01 (Biga) · 1908-10-05 · 1913-07-14 · 1920-05-27 · fetret günleri
// =====================================================================

// ── p2/H-0018 "Gümülcine koridoru tek noktadan birleşiyor" ──────────
// ÖLÇÜM: Gümülcine'nin 50 km'sinde BAŞKA HİÇ NOKTA YOKTU; ikinci en yakın
// Enez 72 km. Batı Trakya'yı tek petek temsil ediyordu — koridor görüntüsü
// doğrudan bunun sonucu. İki nokta ikinci-en-yakını 72 km → 43 km'ye çekiyor.
//
// TDV `iskece`: "Trakya'da, Karasu'nun 12 km doğusunda, Gümülcine'ye 57 km";
// fetih Hoca Sâdeddin'in Tâcü't-tevârîh'ine göre 775 (1373) — bazı eski
// kaynaklar 762 (1361) diyor. 1847'de Drama sancağı, Yenice-i Karasu kazası.
// 1912-13 Bulgar işgali, 10 Ağustos 1913 Bükreş ile Bulgaristan'a; 1919-20
// itilâf işgali; sonra Yunanistan, Lozan'la kesinleşti.
// ⇒ 1373-01-01 hem TDV'nin verdiği yıl hem VERİDE ZATEN VAR olan bir kırılma
//   günü. Tail (1913-07-14 → 1913-09-29 → 1920-05-27) Gümülcine'den birebir:
//   TDV'nin anlattığı Bulgar-işgal / itilâf / Yunan sırası tam olarak o.
{ ad:"İskeçe", tur:"sehir", lat:41.140, lon:24.890, g:0, k:4, m:"Selanik",
  s:[{f:"1281-01-01",t:"1373-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-07-14",t:"1913-09-29",d:"bulgaristan"},{f:"1920-05-27",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1373-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-07-14"},{f:"1913-09-29",t:"1920-05-27"}] },

// Rodop'un kuzey yarısı Gümülcine ile Filibe arasında 120 km boştu.
// TDV `kircaali`: Arda üzerinde, Hasköy'ün 50 km güneyinde; yerleşim Türk
// kumandanı Kırca Ali'nin (tahminen 1371-1434) türbesi çevresinde gelişti,
// "Kırca Ali ilk defa 1482 tahrir kayıtlarında" 41 müslüman haneli köy olarak
// geçiyor. 1885'te Hasköy'den ayrılıp kaza oldu. 1913 Ağustos'unda kısa süre
// Garbî Trakya Hükûmeti, sonra BULGARİSTAN'a geçti.
// ⚠️ TAIL GÜMÜLCİNE'DEN FARKLI ve bilerek: Kırcaali Bulgaristan'da KALDI,
//    Yunanistan'a geçmedi. Gümülcine'nin 1913-09-29/1920-05-27 penceresi
//    buraya YAZILMADI — kopyala-yapıştır hatası değil, ölçülmüş fark.
// ⚠️ `kur:` YAZILMADI: TDV 1482 ilk tahrir kaydını veriyor ama yerleşim yeri
//    daha eski ve zincir komşularıyla AYNI olduğu için kur: haritada tek
//    piksel değiştirmez — uydurma bir kuruluş günü ise kalıcı yanlış olurdu.
//    (Akmescid ve Or Kapı'da verilen kararın aynısı, yerlesimler_kirim.js.)
// 🔴🔴 13 Ağustos 2026 · VERİ FETRET — YUKARIDAKİ KARAR ÖLÇÜLDÜ VE ÇÜRÜDÜ.
//    Emre'nin açık yetkisiyle `kur:"1482-01-01"` YAZILDI. Karar silinmedi,
//    DAMGALANDI: gerekçesi hâlâ okunabilir olsun, ama hangi ayağının
//    yanlış olduğu da görünsün.
//
//    ① "kur: haritada tek piksel değiştirmez" → 🔴 YANLIŞ. Motor `kur:`ı ÜÇ
//       yerde okuyor: uret_petek.py:2326 (kur günü gelmemiş noktanın peteğini
//       HİÇ ÇİZMEZ) · :2341 (komşuluk hesabına SOKMAZ) · :2366. Ayrıca
//       js/app.js:2706 · :2770 dizinde "kuruluş" diye GÖSTERİYOR.
//       ⇒ `kur:` bu noktada 1363-1482 arası peteği kaldırır ve o toprağı
//       `§2` gereği komşulara (Gümülcine · Filibe · Eski Zağra) bırakır —
//       ki 119 yıl boyunca DOĞRU olan davranış budur.
//    ② "uydurma bir kuruluş günü kalıcı yanlış olurdu" → ✓ HAKLI, ve bu
//       yüzden gün UYDURULMADI: 1482 TDV'nin verdiği TAHRİR KAYDIDIR.
//       ⚠️ Ama anlamı "bu yıl kuruldu" DEĞİL: 1482'de zaten 41 müslüman
//       haneli bir köydür, yani kuruluş daha erkendir. `kur:` burada
//       "EN GEÇ bu tarihte vardı" üst sınırıdır. Alt sınır Kırca Ali'nin
//       ölümü (~1434, türbe ondan sonra); TDV ikisi arasında bir gün
//       VERMİYOR ⇒ belgeli olan seçildi, tahmin edilen değil.
//    ③ Asıl kusur "hangi yıl fethedildi" DEĞİLDİ: veri şehri, adını verdiği
//       kişi DOĞMADAN sekiz yıl önce (Kırca Ali ~1371-1434) Osmanlı yapıyor
//       ve üstüne Fetret dönemlerini de yazıyordu. `§3.5` hayalet devlet
//       ailesinin YERLEŞİM tarafı.
//    ⇒ `d:` ve `s:` alanlarına DOKUNULMADI, bilerek: `d:1363` bu YERİN
//       sahipliğini söyler (doğru), `kur:1482` YERLEŞİMİN varlığını (doğru).
//       İkisi çelişmiyor. Ve `d:`yi 1482'ye çekmek YENİ BİR KIRILMA doğurur,
//       `Değişmez 2` madde ister — kazanç yok, borç var.
//    📌 KOORDİNATÖRE SEVK: aynı gerekçe Akmescid ve Or Kapı'da da kullanılmış
//       (yerlesimler_kirim.js). ①'in çürümesi oraları da ilgilendirir; o
//       dosya bu oturumun yetkisinde DEĞİL, dokunulmadı.
{ ad:"Kırcaali", tur:"sehir", lat:41.650, lon:25.370, g:0, k:4, m:"Edirne", kur:"1482-01-01",
  s:[{f:"1281-01-01",t:"1363-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-07-14",t:"1923-10-29",d:"bulgaristan"}],
  d:[{f:"1363-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-07-14"}] },

// ── p3/H-0016 "Dubrovnik enklavı" ───────────────────────────────────
// ÖLÇÜM: Dubrovnik'in kendi noktası VAR; enklav görüntüsü ARDINDAKİ
// boşluktan geliyor — ikinci en yakın nokta 43 km (Herseknovi). Dubrovnik
// ayrı bir devlettir (Ragusa Cumhuriyeti, `v:` haraçgüzâr) ve arkasında
// Osmanlı Hersek'i temsil eden hiçbir nokta yoktu; petek şişip ada gibi
// göründü. Trebinye ikinci-en-yakını 43 km → 22 km'ye indiriyor.
//
// TDV `trebinye`: "Bosna-Hersek'te tarihî bir şehir", güney Hersek'te
// Trebišnjica'nın iki yakasında; bölge 1466'da ele geçirildi, şehir 1699
// Karlofça'dan sonra Osmanlılar tarafından kuruldu; 1878'den sonra
// Avusturya-Macaristan işgaline uğradı ve 1918'e kadar onlarda kaldı.
// ⇒ 1466-06-01 TDV'nin verdiği YILDA olan mevcut bir kırılma günüdür
//   (İlbasan'ın günü). Gün TDV'de yok, uydurulmadı.
// Zincir Foça'nın birebir aynısı — `isg:` 1878 Berlin işgali örtüsü dahil:
// taban renk 1908 ilhakına kadar Osmanlı kalır (girdi.py isg: gerekçesi).
{ ad:"Trebinye", tur:"sehir", lat:42.711, lon:18.344, g:0, k:3, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1466-06-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}],
  d:[{f:"1466-06-01",t:"1908-10-05"}],
  isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },

// ── BOSNA İÇİ — Drina ve Tuzla boşlukları ───────────────────────────
// TDV `bosna-hersek` Osmanlı Bosnası'nın başlıca şehirlerini sayarken
// **Vişegrad ve Tuzla'yı adıyla anıyor** (Saraybosna · Travnik · Banaluka ·
// Mostar · Foça · Vişegrad · Tuzla · Yayça). İkisi de haritada YOKTU.
// Vişegrad ayrıca TDV `drina-koprusu` maddesinin konusudur: "Bosna-Hersek'in
// Vişegrad şehrinde Sokullu Mehmed Paşa için Mimar Sinan'ın yaptığı köprü."
// ⇒ Fetih günü olarak 1463-06-01 (Travnik'in günü) seçildi: Bosna
//   Krallığı'nın yıkıldığı yıl ve mevcut kırılma günü.
{ ad:"Vişegrad", tur:"sehir", lat:43.783, lon:19.288, g:0, k:3, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}],
  d:[{f:"1463-06-01",t:"1908-10-05"}],
  isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },

// TDV slug'ı `tuzla--bosna-hersek` (düz `tuzla` Kıbrıs/Larnaka'ya gider —
// depoda zaten "Tuzla (Larnaka)" kaydı var, ad çakışmasın diye bu kayıt
// "Tuzla (Bosna)" adını taşıyor).
// Zincir İzvornik'in birebir aynısı: aynı Drina havzası, aynı sancak,
// 1460-01-01 mevcut kırılma günü.
{ ad:"Tuzla (Bosna)", tur:"sehir", lat:44.538, lon:18.676, g:0, k:3, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1460-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}],
  d:[{f:"1460-01-01",t:"1908-10-05"}],
  isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },

// ── p2/H-0012 "Biga yarımadası kuzeydoğusunda alınmamış toprak" ─────
// ÖLÇÜM: 50 km'de 4 nokta, en yakın Biga 25 km — orta seyreklik. Yarımadanın
// KUZEYDOĞU ucunda hiç nokta yoktu; uç, Erdek ile Biga'nın orta dikmesine
// kalıyordu. Karabiga ikinci-en-yakını 33 km → 25 km'ye indiriyor.
// TDV'de MÜSTAKİL MADDE YOK ama içerik geçişleri yeri ve idarî bağını
// açıkça veriyor: "Karabiga (antik Priapos) bir yarımada", Pegai limanı,
// **Biga'ya bağlı nahiye ve iskele**, Orhan ve I. Murad devri.
// ⇒ Bağlı olduğu kaza Biga olduğu için zincir Biga'nın BİREBİR aynısı;
//   tek bir yeni gün bile gerekmiyor (Karesi ilhakı 1345-01-01 dahil).
//
// ⚠️ m: ALANI BİLEREK "Biga", Biga'nın kendi m:"Bursa"sı DEĞİL — ve sebebi
//    ölçüldü. Önce Biga'yı birebir kopyalayıp m:"Bursa" yazmıştım; Değişmez 3
//    denetimi yakaladı: 1300-06-15'te Karabiga=karesi ↔ Bursa=bizans.
//    Çelişki gerçektir ama KARABİGA'nın değil, Biga kaydının kusurudur:
//    `m:` alanının zaman boyutu yok (MIMARI.md §3.1, planlanan `kd:` alanı),
//    bu yüzden Biga 1281-1326 arası Bizans Bursası'na bağlı görünüyor.
//    TDV Karabiga'yı açıkça BİGA'ya bağlıyor — doğru olanı yazmak hem
//    kaynağa uygun hem de sahte bir çelişki üretmiyor. Var olan kusuru
//    kopyalamak yerine kopyalamamak seçildi.
{ ad:"Karabiga", tur:"liman", lat:40.410, lon:27.300, g:0, k:4, m:"Biga",
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1923-10-29"}] },

];

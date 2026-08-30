// =====================================================================
// ARKTİK — 64°K'nin KUZEYİ  ·  39 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026 · koordinatörün koşu 9 sevki
// =====================================================================
// 🔴 BU DOSYA KUTU AÇILMADAN BAĞLANAMAZ.
//    39 noktanın 39'u da `lat > 64`. Bugünkü `BOLGE = box(-12,-11,146,64)`
//    ile bağlanırsa peteklerin hepsi BOŞ çıkar ve motorun kapanış satırı
//    ("tüm yerleşimlerin peteği geçerli ✓") DÜŞER.
//    ⇒ Sıra: önce `uret_petek.py:60` → `box(-12,-11,146,82)`, sonra bu dosya.
//    📌 Kutu AÇILMADAN da işe yarayan 12 nokta ayrı dosyada: `_ek9`.
//
// ── NİÇİN VAR — ÖLÇÜM ────────────────────────────────────────────────
// Kuzey 64→82 açılınca giren kara: **4.850.863 km²**. Bugünkü 1623 nokta
// bu karaya ORTALAMA 1.701 km uzakta; en uzak hücre 2.973 km. `§2` emilme
// kuralı yüzünden alıcılar şunlar olurdu:
//     1.877.480 km²  Perm     (58,01°K)
//     1.556.538 km²  Aigun    (50,24°K — MANÇURYA, `qing-hanedani`)
//       253.695 km²  Urga · 129.864 Kobdo · 81.060 Uliastay  (MOĞOLİSTAN)
// Yani kutu noktasız açılsaydı Qing ve Moğol renkleri Kuzey Buz Denizi'ne
// dayanırdı. Bu dosya bağlanınca aynı kara için ortalama **1.701 → 233 km**,
// en uzak **2.973 → 1.000 km**.
//
// ── 🔴 KOORDİNATÖRÜN DÜZELTMESİ UYGULANDI ───────────────────────────
// MOTOR "Arktik'te 1281-1923 arası devlet yok, hepsi kasten sahipsiz olsun"
// demişti; koordinatör bunu ANAKARA için reddetti ve haklıydı. Burada iki
// sınıf AYRI ele alındı:
//   ① ANAKARA  → fetih tarihinden ÖNCE sahipsiz, SONRA devlet.
//   ② YÜKSEK ARKTİK ADALARI → pencerenin tamamında sahipsiz (aşağıda
//      dördü tek tek ONAYLANDI, varsayılmadı).
// Ve Fennoskandiya'nın sahibi Rusya DEĞİL: Lapland üç ayrı zincire
// (Norveç · İsveç · Finlandiya) bağlandı, Kola'ya yalnız Kola takıldı.
//
// ── ZİNCİRLER — hepsi `s:`→`s:` ⇒ DEĞİŞMEZ 2 BORCU YAPISAL OLARAK SIFIR
// NO   norvec 1281-01-01 → 1537-01-01 danimarka → 1814-01-14 isvec
//      → 1905-06-07 norvec → 1923-10-29     [Bergen/Trondheim'den birebir]
// SE   isvec 1281-01-01 → 1923-10-29        [Stokholm'den birebir]
// FI   isvec 1281-01-01 → 1809-09-17 rusya → 1917-12-06 finlandiya
//                                           [Helsinki'den birebir]
// RU   rusya 1281-01-01 → 1923-10-29        [Novgorod/Vologda'dan birebir]
// ⇒ Dördü de CANLI kayıtlardan kopyalandı; TEK BİR YENİ KIRILMA GÜNÜ
//   AÇILMIYOR. Yeni gün yalnız iki yerde var (Petsamo 1920-10-14 ve
//   fetih tarihleri) ve ikisi de `s:`→`s:`, kırılma üretmiyor.
//
// ── 🔴 KAYNAK DÜRÜSTLÜĞÜ — `CLAUDE.md §4` gereği İŞARETLİ ────────────
// TDV'YE BASAN tarihler (`sibir-hanligi` · `kucum-han`, ikisi de CANLI
// `<title>` ile sınandı):
//     1581-10-26  Yermak İsker'e giriyor   1586  Tümen ve Tobolsk kuruluyor
//     1592        Pelym · BEREZOV · SURGUT 1595-03-17  Baraba işgali
//     1598-08-20  Küçüm'ün son yenilgisi   1593-1604  "Sibirya'nın tamamen zaptı"
// TDV'YE BASMAYAN tarihler (standart akademik referans — §4 bunu Doğu
// Asya/Kuzey Avrupa için yeterli sayıyor ama İŞARETLENMESİNİ istiyor):
//     Obdorsk 1595 · Mangazeya 1601 · Turuhansk 1607 · Hatanga 1626 ·
//     Jigansk 1632 · Verhoyansk 1638 · Zaşiversk 1639 · Dudinka 1667 ·
//     Kola ostrogu 1565 · Pustozersk 1499 · Fredrikshamn 1809-09-17 ·
//     Kiel 1814-01-14 · Norveç 1905-06-07 · Tartu (Petsamo) 1920-10-14 ·
//     Svalbard antlaşması 1920-02-09 (yürürlük 1925-08-14)
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske   39/39 içeride. ⚠️ ALTI nokta 10m maskesinin kıyı basitleştirmesi
//         yüzünden ilk denemede DIŞARI düştü (Bodø · Tromsø · Luleå ·
//         Svalbard · Vaygaç · Akureyri) ve karaya çekildi — kaydırma
//         2,2 km, yalnız Vaygaç'ta 11 km. Her biri kendi satırında yazılı.
// 3 km    en yakın çift 91,4 km (Vardø ↔ Petsamo) — eşik 3 km, temiz.
// renk    norvec · danimarka · isvec · finlandiya · rusya — BEŞİ DE BOYALAR'da.
// Değişmez 1  sahipsizlik KASITLI ve gerekçeli (`kasitli_bosluk` + `neden`).
// Değişmez 2  borç SIFIR (yeni `d:`/`v:` dönemi YOK — dosyada hiç yok).
// Değişmez 3  `m:` yazılmadı ⇒ çelişki üretemez.
// =====================================================================

window.YERLESIMLER_EK8 = [

// ── ① NORVEÇ KUZEYİ — Nordland · Troms · Finnmark ───────────────────
// Bugün Trondheim (63,43) atlasın en kuzey Norveç noktası; ondan Nordkapp'a
// 1.100 km boyunca hiç nokta yok. Beş nokta o hattı kuruyor.
{ ad:"Mosjøen", tur:"sehir", lat:65.8370, lon:13.1920, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// ⚠️ Maske: 67,2804/14,4049 (şehir merkezi) yarımadanın ucunda ve 10m
//    maskesi orayı deniz sayıyor; 2,2 km doğuya (Bodø'nün kendi kıstağı)
//    çekildi. Aynı düzeltme Tromsø · Luleå · Svalbard · Vaygaç'ta da var.
{ ad:"Bodø", tur:"sehir", lat:67.2933, lon:14.4446, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// ⚠️ Maske: Tromsø ADA şehridir (Tromsøya); 2,2 km doğuya, karşı kıyıya alındı.
{ ad:"Tromsø", tur:"sehir", lat:69.6527, lon:19.0119, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

{ ad:"Alta", tur:"sehir", lat:69.9689, lon:23.2717, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// 🔴 BU PARTİNİN EN GEREKLİ TEK NOKTASI. Vardøhus kalesi ~1306'dan beri
// Norveç'in kuzeydoğu çıpasıdır ve o çıpa olmadan Kola'nın Rus noktası
// bütün Finnmark'ı emer — yani Rusya, Norveç kıyısında Nordkapp'a kadar
// boyanır. `§3.5.1`in "noktasızlık İKİ YÖNE de hata üretir" vakası.
{ ad:"Vardø", tur:"kale", lat:70.3705, lon:31.1107, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// ── ② İSVEÇ LAPLAND'İ — Norrbotten ve Torne Lappmark ────────────────
// ⚠️ 1809 SINIRI BURADA GEÇİYOR ve üç nokta da BATI yakasında kaldı:
//    Fredrikshamn barışı Torne nehrini sınır yaptı, batısı İsveç'te KALDI.
//    Doğu yakası (Tornio) aşağıda ayrı zincirle yazılı — bu iki komşu
//    noktanın zinciri 1809'dan sonra AYRILIYOR ve ayrılık kasıtlıdır.
// ⚠️ maske: şehir merkezi (65,5842) 10m maskesinde deniz; 2,2 km kuzeye alındı.
{ ad:"Luleå", tur:"sehir", lat:65.6042, lon:22.1547, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },

{ ad:"Jokkmokk", tur:"sehir", lat:66.6069, lon:19.8265, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },

// 🔴 GÖL DÜZELTMESİ (MOTOR buldu, göl-farkındalı tarama genişletti — 4 Ağustos,
//    uygulaması 6 Ağustos'a kaldı çünkü 4'ünde dosya koşu 9'un BAĞLI girdisiydi
//    ve anlık görüntüden sonra yazmak yayını bayat gösterirdi).
//    İlk yazılan 67,8500/20,6600 **Torneträsk gölünün İÇİNDE**ydi (NE 10m
//    poligonu doğrulandı) ve peteği %0,0 (0 / 29.380 km²) çıkıyordu: motorun
//    `KARA`sı gölleri ÇIKARIYOR, ilk denetimimin kullandığı ham kıyı maskesi
//    çıkarmıyordu. Kıyıya göre doğru olan nokta, göle göre yanlıştı.
//    2,2 km kuzeydoğuya, gölün dışına alındı.
// ⚠️ Koordinatörün önerdiği 67,8443/20,6594 de geçiyor ama ham göl kenarına
//    yalnız **36 m** paylı (ölçüm koordinatörün, doğrulandı); seçilen
//    67,8693/20,6737 ise **158 m** paylı. 0,002 kara toleransının bir
//    kıpırtısı 36 m'yi geri içeri alabilir, o yüzden paylı olan seçildi.
//    📌 Benim ilk ifadem "sıfır mesafede" idi ve fazla sertti — gerçek 36 m.
//       Karar aynı kalıyor, gerekçenin rakamı düzeltildi.
{ ad:"Jukkasjärvi", tur:"sehir", lat:67.8693, lon:20.6737, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },

// ── ③ FİNLANDİYA LAPLAND'İ ──────────────────────────────────────────
// Oulu (1605) atlasın kaçırdığı en büyük Fin şehriydi: 64°K'nin 1,2 km
// kuzeyinde kaldığı için kutunun dışındaydı.
{ ad:"Tornio", tur:"sehir", lat:65.8482, lon:24.1436, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

{ ad:"Oulu", tur:"sehir", lat:65.0121, lon:25.4651, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

{ ad:"Rovaniemi", tur:"sehir", lat:66.5039, lon:25.7294, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

{ ad:"Sodankylä", tur:"sehir", lat:67.4167, lon:26.5833, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

// GÖL DÜZELTMESİ — nokta suyun üstündeydi, taşındı.
//    İlk yazılan 68,9058/27,0289 **Inarijärvi'nin İÇİNDE** (NE 10m poligonu
//    doğrulandı) ama yalnız ~20 metre içeride.
//
// 🔴 BU YORUMUN İLK HÂLİ YANLIŞ BİR MEKANİZMA ANLATIYORDU — düzeltiliyor.
//    Şöyle yazmıştım: *"denetle.py gölleri simplify(0.01) ile sadeleştiriyor,
//    MOTOR SADELEŞTİRMİYOR ve peteği SIFIRLIYOR."* **İkinci yarısı yanlış.**
//    Koordinatör ölçtü, ben de doğruladım: `uret_petek.py:317` de
//    `simplify(0.01, preserve_topology=True)` uyguluyor — motor ile denetim
//    **AYNI toleransı** kullanıyor. Yanılmamın sebebi: kodun 255-310
//    arasını okuyup durdum ve 317'yi görmeden hüküm verdim.
//
// ✅ ÖLÇÜLMÜŞ GERÇEK — ayrışma motor↔denetim arasında DEĞİL, ham göl ile
//    sadeleştirilmiş göl arasındaki ince şeritte:
//        ham göl (sadeleştirmesiz)  → 🔴 GÖLDE
//        motor   (simplify 0.01)    → ✓ karada
//        denetle (simplify 0.01)    → ✓ karada
//    ⇒ Motor bu noktayı KARADA görüyordu; **peteği sıfırlanmazdı.**
//      Taşımak yine de doğru (nokta gerçekten suyun üstündeydi), ama
//      gerekçesi "motor sıfırlıyor" değil "kayıt su üstünde".
//
// 📌 Jukkasjärvi bundan AYRI bir vakadır ve karıştırılmamalı: o nokta
//    **her iki ölçütte de** gölün içindeydi, yani motor da onu suda
//    görüyordu — peteği %0,0 çıkan oydu.
// 📌 Koordinatör bu ince şerit için `denetle.py`ye "SINIRDA" uyarısı ekledi
//    (ihlal saymıyor, yalnız bağırıyor) ve yazıldığı gün Eğirdir ile
//    Västerås'ı yakaladı.
{ ad:"İnari", tur:"sehir", lat:68.9257, lon:27.0337, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

// 🔴 PETSAMO — pencerenin İÇİNDE kalan tek Fin toprak kazancı.
// Kola yarımadasının batı ucu, Peçenga manastırının (1533) çevresi;
// Rus toprağıydı ve **14 Ekim 1920 Tartu barışıyla** Finlandiya'ya geçti.
// Atlasın penceresi 1923-10-29'da bittiği için bu üç yıl GÖRÜNÜR.
// ⚠️ Zinciri komşusu İnari'den KOPYALANMADI: İnari 1809'da Rusya'ya geçen
//    İsveç toprağı, Petsamo ise 1920'de Finlandiya'ya geçen Rus toprağı.
//    İkisi ters yönde ilerliyor; kopyalasaydım Petsamo 1809'dan önce İsveç
//    görünecekti ve bu YANLIŞ olurdu.
{ ad:"Petsamo (Peçenga)", tur:"sehir", lat:69.5500, lon:31.2200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1920-10-14",d:"sovyet-rusya"},{f:"1920-10-14",t:"1923-10-29",d:"finlandiya"}] },

// ── ④ KOLA ve RUS KUZEYİ — Novgorod'un kuzey mirası ─────────────────
// ⚠️ Bu altı nokta DÜZ `rusya 1281→1923` taşıyor ve bu bir seçimdir:
//    Terski kıyısı, Dvina, Mezen ve Peçora XIII. yy'da Novgorod
//    Cumhuriyeti'nin haraç toprağıydı, 1478'de Moskova'ya geçti. Atlasta
//    `novgorod` diye ayrı bir kimlik YOK ve canlı `Novgorod` kaydının
//    kendisi de düz `rusya 1281→1923` taşıyor. ⇒ Aynı çözüm burada da
//    uygulandı; tutarlılık kasıtlı. Ayrı kimlik gelirse ALTISI BİRDEN
//    düzeltilir (bir yerde `novgorod` yazıp öbüründe yazmamak, iki ayrı
//    kural gibi görünürdü).
{ ad:"Kola", tur:"kale", lat:68.8815, lon:33.0186, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Kandalakşa", tur:"sehir", lat:67.1550, lon:32.4117, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ponoy", tur:"sehir", lat:67.0833, lon:41.1500, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Arhangelsk", tur:"liman", lat:64.5401, lon:40.5433, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Mezen", tur:"sehir", lat:65.8447, lon:44.2394, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Peçora'nın çıpası. 1499'da kurulan Pustozersk Ural'ın batısındaki ilk
// Rus Arktik kasabasıdır; XX. yy'da terk edildi ama pencerenin tamamında
// yaşıyor, o yüzden `bit:` yazılmadı.
{ ad:"Pustozersk", kur:"1499-01-01", kaynak:"Kanyukova V.P., Forum molodyh uchenyh 2019 (CyberLeninka) — \"osnovan ... osen'yu 1499 goda\"; TDV bu tanecigi kapsamiyor", tur:"kale", lat:67.5200, lon:52.7000, g:0, k:4, d:[],
  s:[{f:"1499-01-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ust-Tsilma", tur:"sehir", lat:65.4392, lon:52.1508, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑤ YAMAL · OB' KUZEYİ — "sahipsiz, SONRA devlet" sınıfı ──────────
// 🔴 BURADAN İTİBAREN ZİNCİR KISALIYOR ve kısalması KASITLI.
// Bu noktaların hiçbirinde fetihten ÖNCE dönem YOK. Sebebi §3.5'in
// aynadaki hâli: var olmayan bir devleti boyamak kadar, olmayan bir
// devleti UYDURMAK da hatadır. TDV `sibir-hanligi` hanlığın coğrafyasını
// açıkça sınırlıyor: "Tura, Tobul ve İşim nehirleri arasındaki toprakların
// yanı sıra İrtiş nehri civarı ile Baraba bozkırları". Yamal, Taymır ve
// Yakutistan BU SINIRIN DIŞINDA — oralar Hantı, Mansi, Nenets ve Yakut
// topraklarıydı ve atlasın tanıdığı anlamda bir devlete bağlı değildi.
// ⇒ Fetihten önce sahipsiz; `kasitli_bosluk:true` + `neden:` ile gerekçeli.
// 📌 Ve bu, Değişmez 1'in sahipsiz tavanını yükseltir: aşağıdaki 17 kayıt
//    1281-fetih arasında sahipsiz görünecek. SAYIYI GİZLEMİYORUM —
//    ILERLEME.md'de tek tek yazılı ve hepsi kasıtlıdır.
{ ad:"Obdorsk (Salehard)", tur:"kale", lat:66.5300, lon:66.6019, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1595 öncesi Yugra/Nenets toprağı — TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, Ob' ağzı bu sınırın DIŞINDA. Devletsiz dönem uydurma devletle doldurulmadı.",
  s:[{f:"1595-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Yamal ucu", tur:"bolge", lat:70.1667, lon:72.5167, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Obdorsk ile aynı gerekçe; yarımadanın kuzey ucu için dolgu noktası — noktasız kalırsa Perm'in peteği 2.100 km uzaktan buraya uzanır.",
  s:[{f:"1595-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Mangazeya, Taz nehrindeki kürk ticaret şehri — 1601'de kuruldu, 1670'lerde
// terk edildi. `bit:` YAZILMADI: yerini Yeni Mangazeya (Turuhansk) aldı ve
// bölge idaresi kesintiye uğramadı; `bit:` yazsam petek komşuya devrolur ve
// aynı toprak iki kez sahiplendirilirdi.
{ ad:"Mangazeya", tur:"kale", lat:66.6900, lon:82.3300, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1601 öncesi Nenets/Selkup toprağı, devletsiz.",
  s:[{f:"1601-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑥ YENİSEY · TAYMIR ──────────────────────────────────────────────
{ ad:"Turuhansk", tur:"kale", lat:65.7972, lon:87.9553, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1607 öncesi Evenk/Ket toprağı, devletsiz.",
  s:[{f:"1607-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Dudinka", tur:"sehir", lat:69.4058, lon:86.1778, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1667 öncesi Nganasan/Enets toprağı, devletsiz.",
  s:[{f:"1667-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Taymır'ın çıpası. Bu nokta olmadan yarımada (1,8 milyon km²) Perm'e
// 2.973 km uzaktan bağlanıyordu — atlasın ölçülmüş EN UZAK emilmesi.
{ ad:"Hatanga", tur:"kale", lat:71.9769, lon:102.4675, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1626 öncesi Nganasan toprağı, devletsiz.",
  s:[{f:"1626-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑦ LENA · YANA · İNDİGİRKA ───────────────────────────────────────
{ ad:"Jigansk", tur:"kale", lat:66.7697, lon:123.3708, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1632 öncesi Evenk/Yakut toprağı, devletsiz.",
  s:[{f:"1632-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Bulun", tur:"sehir", lat:70.6667, lon:127.4000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Lena deltası; 1632 öncesi devletsiz. Tarih Jigansk'la aynı çünkü ikisi de Lena havzasının aynı yılki Rus ilerlemesiyle bağlandı.",
  s:[{f:"1632-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Verhoyansk", tur:"kale", lat:67.5500, lon:133.3833, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1638 öncesi Yakut/Even toprağı, devletsiz.",
  s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ust-Yansk", tur:"sehir", lat:70.9000, lon:136.5500, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Yana ağzı; Verhoyansk ile aynı 1638 ilerlemesi.",
  s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Zaşiversk", tur:"kale", lat:67.2500, lon:142.8500, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"İndigirka; 1639 öncesi Yukagir/Even toprağı, devletsiz.",
  s:[{f:"1639-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑧ YÜKSEK ARKTİK ADALARI — pencerenin TAMAMINDA sahipsiz ─────────
// 🔴 KOORDİNATÖR "ONAYLA, VARSAYMA" DEDİ. Dördü tek tek bakıldı:
//
//  Svalbard          1920-02-09 antlaşmasına kadar terra nullius; antlaşma
//                    **1925-08-14'te** yürürlüğe girdi — yani Norveç
//                    hükümranlığı atlasın penceresi (1923-10-29) BİTTİKTEN
//                    SONRA başlıyor. ⇒ pencerenin tamamında sahipsiz. ✅
//  Franz Josef       1873'te KEŞFEDİLDİ; pencerede hiçbir devletin idaresi
//                    yok (Sovyet talebi 1926). ⇒ sahipsiz. ✅
//  Severnaya Zemlya  1913'te keşfedildi, 1926'da adlandırıldı. Bu dosyadaki
//                    EN SAĞLAM boşluk: pencerenin 632 yılının 632'sinde
//                    kimse burayı BİLMİYORDU bile. ✅
//  Yeni Sibirya Ad.  XVIII. yy'da keşfedildi ve mamut dişi için Rus
//                    ruhsatıyla işletildi, ama idarî bir kademesi olmadı.
//                    ⇒ sahipsiz — ⚠️ dördünün EN ZAYIFI, itiraza açık.
//
// ⚠️ NOVAYA ZEMLYA ve VAYGAÇ AYRI ELE ALINDI ve sahipsiz BIRAKILMADI.
//    Pomor avcılığı XVI. yy'dan beri sürüyor ama kalıcı yerleşim ve fiilî
//    idare **1877'de** (Malıye Karmakulı) başlıyor; Rusya hükümranlığını
//    Norveç faaliyetine karşı 1911'de resmen ilân etti. 1877 seçildi çünkü
//    idarenin BAŞLADIĞI gündür, ilân edildiği değil.
//    🔴 TDV'YE BASMIYOR — §4 gereği işaretli, itiraza açık.
{ ad:"Svalbard", tur:"bolge", lat:78.2300, lon:15.7348, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Terra nullius. Svalbard antlaşması 1920-02-09'da imzalandı ama 1925-08-14'te yürürlüğe girdi — Norveç hükümranlığı atlasın penceresi bittikten SONRA başlıyor. Pencerenin tamamında sahipsiz olması DOĞRUDUR." },
  // ⚠️ maske: Longyearbyen (78,2200/15,6500) fiyortta, 2,2 km içeri alındı.

{ ad:"Franz Josef Toprağı", tur:"bolge", lat:80.3300, lon:52.8000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1873'te keşfedildi; 1281-1923 penceresinde hiçbir devletin idaresi altında değil." },

{ ad:"Severnaya Zemlya", tur:"bolge", lat:79.5000, lon:96.0000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1913'te keşfedildi, 1926'da adlandırıldı. Pencerenin tamamında varlığı BİLİNMİYORDU — dosyadaki en sağlam kasıtlı boşluk." },

{ ad:"Yeni Sibirya Adaları", tur:"bolge", lat:75.2000, lon:140.5000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"XVIII. yy'da keşfedildi, mamut dişi için Rus ruhsatıyla işletildi ama idarî kademesi olmadı. ⚠️ Bu dosyadaki dört boşluğun EN ZAYIFI — kaynak çıkarsa rusya dönemi açılmalı." },

{ ad:"Novaya Zemlya kuzeyi", tur:"bolge", lat:74.5000, lon:57.0000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1877 öncesi kalıcı yerleşim ve fiilî idare yok (Pomor avcılığı idare değildir). 🔴 1877-01-01 TDV'ye BASMIYOR.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Novaya Zemlya güneyi", tur:"bolge", lat:71.5000, lon:53.0000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Novaya Zemlya kuzeyi ile aynı hüküm; 900 km'lik ada tek noktayla temsil edilemezdi.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Vaygaç", tur:"bolge", lat:69.9000, lon:59.3000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Novaya Zemlya ile aynı hüküm. ⚠️ maske: ada merkezi 10m maskesinde deniz görünüyordu, 11 km kuzeye çekildi — dosyadaki EN BÜYÜK kaydırma.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

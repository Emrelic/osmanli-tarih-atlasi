// ═══════════════════════════════════════════════════════════════════════════
// NOKTA EKLEME PARTİSİ — oturumlar/NOKTA-EKLEME.md
// ═══════════════════════════════════════════════════════════════════════════
//
// 🔴 BU DOSYA HENÜZ CANLI DEĞİL. `arac/girdi.py` içindeki GIRDI_DOSYALARI
//    listesinde YOK; motor da denetim de onu OKUMUYOR. Canlıya almak
//    Oturum 0'ın (koordinatör) kararıdır ve AŞAĞIDAKİ BORÇ ÖDENMEDEN
//    yapılmamalıdır.
//
// ── CANLIYA ALMADAN ÖNCE ÖDENECEK BORÇ: TEK KRONOLOJİ MADDESİ ─────────────
//    Değişmez 2 yalnız `d:` ve `v:` kırılmalarını sayar; `s:` geçişleri ve
//    `isg:` örtüsü madde istemez. 15 noktanın 30 kırılması tarandı; ±30 gün
//    içinde maddesi olmayan TEK tarih:
//
//      1592-06-19  Bihaç'ın fethi (Hasan Paşa)   en yakın madde 377 gün
//
//    Bu dosya bugün girdiye eklenirse AÇIK 0'dan 1'e çıkar.
//    ✅ Ve bu borç ÖDENEBİLİR: **günü BİLİNİYOR ve kaynaklı** (10-19 Haziran
//    1592 kuşatması, Lamberg 19 Haziran'da teslim oldu; TDV `bihac` yılı ve
//    fâtihi veriyor, gün TDV dışı kaynaklarda ve TDV ile ÇELİŞMİYOR).
//    ⇒ Madde tam güne yazılır, pencere tutar, borç kapanır.
//
//    📌 Bu liste ilk yazıldığında BEŞ maddeydi. DÖRDÜ bu oturum çalışırken
//    başka oturumlarca yazıldı (`Knin'in fethi` 1522-05-29 · `Klis Kalesi'nin
//    fethi ve Dalmaçya sancağının kurulması` 1537-03-12 · `Klis'in Venedik'e
//    kaybı` 1648-03-31 · Sin'in 1513 fethi); BEŞİNCİSİ (Skradin 1522) kaydın
//    kendisi ÇIKARILARAK kapatıldı — sebebi aşağıda, ③ bölümünün sonunda.
//    ⚠️ Sayı hareketli — canlıya almadan önce doğrulayıcıyı TEKRAR koştur.
//
// ── ÖLÇÜM: NEDEN BU NOKTALAR ──────────────────────────────────────────────
//    CLAUDE.md §2: noktası olmayan bölge en yakın peteğe emilir. Boşluklar
//    ölçüldü (ÇAPRAZ BATI cb8f5a0 · 5aed391, ARAŞTIRMA BALKAN §43-44,
//    ÇAPRAZ AKDENİZ 3fd8fc0 · 252325e).
//    Bu partinin 15 peteğinin ÇIPLAK VORONOİ ile iddia edeceği toprak
//    (0,004° ızgara, kara maskesiyle kesilmiş — bu oturum ölçtü):
//
//      Yukarı Macaristan   54.406,5 km²  (ÇAPRAZ BATI'nın ölçtüğü boşluk 51.178)
//        Eperjes 21.613,1 · Tokaj 15.282,3 · Kassa 9.715,1 · Sopron 7.796,0
//      Dalmaçya + Lika     21.946,8 km²
//        Bihaç 8.872,9 · Knin 4.125,7 · Nadin 1.581,1 · Sin 1.439,0 ·
//        Herseknovi 1.239,0 · Şibenik 1.230,0 · Kotor 1.179,4 · Vrana 741,6 ·
//        Klis 538,5 · Zadar 532,0 · Split 467,7
//      ────────────────────────────────
//      TOPLAM              76.353,3 km²
//
//    📌 İç noktalar KIYININ iddiasını da DÜŞÜRÜYOR — Zadar 2.005,3 → 532,0 ·
//    Split 474,5 → 467,7 · Knin 6.238,9 → 4.125,7. Yani bir nokta yalnız
//    kendi boşluğunu değil, KOMŞUSUNUN KURGUSAL genişliğini de kesiyor.
//    ⇒ Nokta eklemenin faydası tek noktada ölçülemez.
//
// ── GİRİT YOK — ÖLÇÜLDÜ, YAZILMADI ────────────────────────────────────────
//    Suda · Spinalonga · Granbosa bu dosyada YOKTUR ve bu bir eksiklik değil,
//    ölçülmüş bir karardır. Gerekçe raporda; özeti: üçü de ADACIK kalesiydi
//    (~1 km²), normal nokta olarak eklenince petekleri Girit'in 2.163 km²'sini
//    (adanın ~%26'sı) Venedik boyuyor. Mevcut hata ~1 km²'yi Osmanlı boyamak;
//    önerilen düzeltme 2.162 km²'yi Venedik boyamak olurdu.
//    CLAUDE.md §3.5.1: "bir sınır kayması önerildiğinde İKİ UÇ da ölçülür."
//
// ── KOORDİNAT ─────────────────────────────────────────────────────────────
//    Hepsi GeoNames'ten doğrulandı (hafızadan yazılan koordinat YOK).
//    Zadar ve Split GeoNames değeriyle kara maskesinin DIŞINDA kalıyordu
//    (en yakın kara 240 m / 310 m ötede); denetle.py'nin talimatı uyarınca
//    kaydırıldılar — UYGULANAN kaydırma Split 310 m, Zadar 1,09 km. Zadar'da
//    fark var çünkü maske sınırının TAM ÜSTÜ de `covers` testini geçmiyor;
//    kıyıdan 250 m içeri girmek gerekti. GeoNames değeri kaydın yanında yazılı.
//
// ── ZİNCİR KUYRUĞU ────────────────────────────────────────────────────────
//    Dalmaçya kayıtlarının 1797-10-17 (Campo Formio) → avusturya →
//    1918-11-11 → yugoslavya kuyruğu, mevcut dokuz Dalmaçya ADASI kaydının
//    kuyruğuyla BİREBİR aynıdır (Pag, Brakya, Hvar, Korçula, Vis, Mliyet…).
//    Kasten böyle: farklı yazılsa ada ile anakara arasında KURGUSAL bir
//    sınır doğardı. 1806-1814 Fransız/Rus ara dönemi ada kayıtlarında da
//    modellenmemiştir; bu partide de modellenmedi (ÇELİŞKİ DEĞİL, EKSİK).
//
window.YERLESIMLER_EK = [

// ═══ ① YUKARI MACARİSTAN ═══════════════════════════════════════════════════
// ÇAPRAZ BATI ölçtü: 48,0-49,6°K / 18,8-22,6°D kutusunda SIFIR nokta; en yakın
// sahipli komşu Eğri (1596-10-12 → 1687-12-17 Osmanlı) ve bölge 91,2 yıl
// boyunca Osmanlı boyanıyor. Yukarı Macaristan hiçbir zaman Osmanlı eyaleti
// olmadı; Kassa Habsburg'un Yukarı Macaristan Kaptanlığı'nın merkeziydi.
// Dördü de SALT `s:` — hiç Osmanlı dönemi yok, dolayısıyla Değişmez 2 borcu YOK.
// 1526-08-29 Mohaç kırılması mevcut Bratislava kaydının kullandığı emsalin aynısı.
//
// 🟢 TÖKÖLİ BOŞLUĞU KAPANDI — 20 Ağustos 2026. Aşağıdaki paragraf borcun
//    gerekçesiydi; ENGEL KALKTIĞI için üç kayda da `v:` yazıldı.
//    ~~⚠️ TÖKÖLİ BOŞLUĞU — bilerek YAZILMADI, §80 gereği. … üçüne birden
//    yazmak içinse ŞEHİR ŞEHİR denetim tarihi gerekiyor ve BULUNAMADI.~~
//
//    🔴 VE O GEREKÇE YANLIŞ SORUYU SORUYORDU. Bir araştırma oturumu TDV
//    `tokoli-imre` maddesinin GÖVDESİNİ okudu (müellif Sándor Papp) ve
//    kaynağın şehir şehir değil TOPLU konuştuğunu gösterdi:
//      · "Budin Beylerbeyi İbrâhim Paşa 16 Eylül'de Fülek Kalesi önünde…
//         berat" — kuruluş, TAM GÜN
//      · "15 Ekim 1685'te… Varad Beylerbeyi Ahmed Paşa… Tököli'yi
//         yakalattı… MUNKÁCS KALESİ'NİN DIŞINDA BÜTÜN KALE VE ŞEHİRLER
//         TESLİM OLDU" — çözülme, TAM GÜN ve TOPLU
//    ⇒ "Şehir şehir tarih yok" DOĞRUYDU; ama gereken şehir şehir tarih
//    DEĞİLDİ — kaynak üçünü birden, tek cümlede, tek günde teslim ediyor.
//    §80'in "birkaçına yazıp bırakma" endişesi de böylece karşılandı:
//    üçüne de AYNI gün yazılıyor, çünkü kaynak öyle diyor.
//    📌 `CLAUDE.md §11`: "ölçüm doğru, EVREN dar" ailesinin kaynak tarafı —
//    aranan tanecik yanlıştı, kaynak susmuyordu.
//
//    ⚠️ Bu üç kayıt OLMADAN `data/yerlesimler_ek_macaristan.js` bağlanamaz:
//    o dosya Fülek · Ungvár · Munkács'a `v:` yazıyor, bunlar kesintisiz
//    `avusturya` kalsaydı 1682-1685 haritası ALACALI çıkardı — aynı
//    krallığın başkenti Habsburg, kasabaları Osmanlı tâbisi görünürdü.
//    Değişmez 2: iki kırılma günü de çekirdekte maddeli (1682-09-16 → 0 gün,
//    1685-10-15 → 3 gün).
{ ad:"Kassa (Košice)", tur:"sehir", lat:48.714, lon:21.258, g:0, k:0, d:[],
    v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)"}],
    s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
       {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
       {f:"1685-10-15",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}] },
{ ad:"Eperjes (Prešov)", tur:"sehir", lat:48.999, lon:21.236, g:0, k:0, d:[],
    v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)"}],
    s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
       {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
       {f:"1685-10-15",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}] },
{ ad:"Tokaj", tur:"kale", lat:48.117, lon:21.409, g:0, k:0, d:[],
    v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)"}],
    s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
       {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
       {f:"1685-10-15",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"macaristan"}] },
{ ad:"Sopron", tur:"sehir", lat:47.685, lon:16.590, g:0, k:0, d:[],
    s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
       {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"macaristan"}] },

// ═══ ② DALMAÇYA — SALT VENEDİK KIYI ŞEHİRLERİ ═════════════════════════════
// Bu dördü hiç Osmanlı olmadı: Değişmez 2 borcu YOK, tek işleri anakara
// kıyısının peteğini ADALARDAN değil KENDİLERİNDEN almasını sağlamak.
// ÇAPRAZ BATI'nın bulgusu: "Zadar/Split/Şibenik rengi doğru ama peteği
// ADA'dan geliyor — sınır KURGUSAL."
//
// Zadar: Venedik 1202-1358 → Zadar Antlaşması 18 Şubat 1358 ile Macaristan'a
// → 1409'da Napolili Ladislas "Dalmaçya hakları"nı 100.000 dukaya Venedik'e
// sattı (gün belirsiz, §76 gereği YYYY-01-01).
// GeoNames 44.11556 / 15.22500 — maske dışı. Zadar'ın eski şehri Natural
// Earth 10m'de çözülmeyen bir yarımadada; nokta 1,09 km kuzeydoğuya, kıyıdan
// 250 m içeriye kaydırıldı (maske sınırının TAM ÜSTÜ de `covers` testini
// geçmiyor — ölçüldü).
{ ad:"Zadar (Zara)", tur:"liman", lat:44.124, lon:15.232, g:0, k:0,kd:[{f:"1409-01-01",t:"1797-10-17",k:1,m:null}], d:[],
    s:[{f:"1281-01-01",t:"1358-02-18",d:"venedik"},
       {f:"1358-02-18",t:"1409-01-01",d:"macaristan"},
       {f:"1409-01-01",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },
// Şibenik: teslim sözleşmesi 30 Ekim 1412; Venedik 1412-1797.
{ ad:"Şibenik (Sebenico)", tur:"liman", lat:43.734, lon:15.894, g:0, k:0,kd:[{f:"1412-10-30",t:"1797-10-17",k:2,m:null}], d:[],
    s:[{f:"1281-01-01",t:"1412-10-30",d:"macaristan"},
       {f:"1412-10-30",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },
// Split: Venedik 1420 (gün belirsiz). ⚠️ 1327-1357 arasındaki Venedik ara
// dönemi MODELLENMEDİ — kaynak gün vermiyor, uydurmak yerine eksik bırakıldı.
// GeoNames 43.50890 / 16.43920 — maske dışı (310 m), kaydırıldı.
{ ad:"Split (Spalato)", tur:"liman", lat:43.511, lon:16.439, g:0, k:0,kd:[{f:"1420-01-01",t:"1797-10-17",k:2,m:null}], d:[],
    s:[{f:"1281-01-01",t:"1420-01-01",d:"macaristan"},
       {f:"1420-01-01",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },
// Kotor: Venedik himayesi 1420, Campo Formio'ya kadar KESİNTİSİZ.
// 📌 ARAŞTIRMA BALKAN'ın "Venedik Arnavutluğu tamamen yok" bulgusunun
//    doğrudan karşılığı: Cetinje 12,3 km'den bütün Boka Kotorska'yı yutuyordu.
// ⚠️ 1281-1420 zinciri ZAYIF: Nemanjić Sırbistanı 1371'de dağıldıktan sonra
//    Kotor sırayla Macar (1371-84), Bosna (1384-91) ve 1391-1420 arasında
//    fiilen BAĞIMSIZ komün oldu. Şemada "bağımsız" kimliği yok ve Değişmez 1
//    sahipsizliğe izin vermiyor; bu yüzden 1371-1420 tek kalemde `macaristan`
//    yazıldı — Bosna ve bağımsızlık ara dönemleri MODELLENMEDİ.
{ ad:"Kotor (Cattaro)", tur:"liman", lat:42.421, lon:18.768, g:0, k:0, d:[],
    s:[{f:"1281-01-01",t:"1371-01-01",d:"sirbistan"},
       {f:"1371-01-01",t:"1420-01-01",d:"macaristan"},
       {f:"1420-01-01",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },

// ═══ ③ DALMAÇYA — OSMANLI DÖNEMİ OLAN KALELER ═════════════════════════════
// Bu dörtlüden ÜÇÜ artık sıfır borç: Knin (1522-05-29 ve 1688-09-11),
// Klis (1537-03-12 ve 1648-03-31) ve Herseknovi (1482-01-01 ve 1687-09-30)
// kırılmalarının HEPSİNİN maddesi var. **Yalnız Sin'in 1513-01-01 fethi
// açık** — dosya başına bakınız.
//
// TDV `karlofca` (CANLI, 26 Ocak 1699): Venedik'te kalanları adıyla sayıyor —
// "Knin, Signe (Sin), Verlice, Delovar, Zadvar, Vergoriçe ve Çiklit".
// ⚠️ Bu partide yedisinden İKİSİ var (Knin, Sin). Verlice · Delovar · Zadvar ·
//    Vergoriçe · Çiklit YAZILMADI: TDV'de müstakil maddeleri yok, modern
//    karşılıkları (Vrlika · ? · Zadvarje · Vrgorac · Čitluk) ancak Vikipedi
//    üzerinden eşleşiyor ve CLAUDE.md §4 Vikipedi'yi tek dayanak saymıyor.
//    "Delovar" hiçbir modern adla eşleştirilemedi — BULUNAMADI.
//
// Knin: Gazi Hüsrev Bey'in kuşatması; Mihajlo Vojković 28 Mayıs 1522'de teslim
// oldu, Osmanlı ertesi gün şehre girdi. Venedik 11 Eylül 1688'de aldı
// (Girolamo Cornaro, on iki günlük kuşatma).
{ ad:"Knin", tur:"kale", lat:44.041, lon:16.197, g:0, k:0,kd:[{f:"1580-01-01",t:"1688-09-11",k:2,m:null}],
    s:[{f:"1281-01-01",t:"1522-05-29",d:"macaristan"},
       {f:"1688-09-11",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1522-05-29",t:"1688-09-11",y:"kusatma"}] },
// Sin (Sinj): Osmanlı 1513 (gün belirsiz, §76 → YYYY-01-01); Venedik
// 30 Eylül 1686, Poljica milisleriyle.
{ ad:"Sin (Sinj)", tur:"kale", lat:43.704, lon:16.639, g:0, k:0,
    s:[{f:"1281-01-01",t:"1513-01-01",d:"macaristan"},
       {f:"1686-09-30",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1513-01-01",t:"1686-09-30",y:"kusatma"}] },
// Klis: TDV `klis` (CANLI) 1537 fethini Gazi Hüsrev Bey'in kethüdâsı Murad
// Bey'e veriyor; kale 12 Mart 1537'de Petar Kružić'in ölümüyle düştü.
// Venedik 31 Mart 1648'de aldı (Leonardo Foscolo).
// ⚠️ §74 — TDV aynı maddede "Klis 1826'ya kadar Osmanlı SANCAĞI olarak
//    varlığını sürdürdü" diyor. Bu AYNI SORUNUN cevabı değildir: sancak idarî
//    birimdir ve 1648'den sonra merkezi Livno'ya taşınmıştır; KALE 1648'de
//    Venedik'e geçti. Bu kayıt kaleyi yazar, sancağı değil.
{ ad:"Klis", tur:"kale", lat:43.559, lon:16.519, g:0, k:0,kd:[{f:"1537-03-12",t:"1648-03-31",k:2,m:null}],
    s:[{f:"1281-01-01",t:"1537-03-12",d:"macaristan"},
       {f:"1648-03-31",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1537-03-12",t:"1648-03-31",y:"kusatma"}] },
// Herseknovi: 1382'de Bosna kralı I. Tvrtko kurdu (`kur:` bu yüzden var),
// Osmanlı 1482, Venedik 30 Eylül 1687 (Girolamo Cornaro).
// 1538-1539 İspanyol ara işgali `isg:` ile yazıldı — TDV `dalmacya`:
//    "Castelnuovo Kalesi ise aynı yıl **Andrea Doria** tarafından zaptedilmiş,
//    ancak **bir yıl sonra** Barbaros Hayreddin Paşa ve Bosna Beyi Gazi Hüsrev
//    Bey'in gayretiyle geri alınmıştı."
//    ⚠️ Neden `d:` değil `isg:`: girdi.py'nin şema kararı — işgal bir dönem
//    TÜRÜ değil ÖRTÜ katmanıdır, taban rengini değiştirmez. Osmanlı hükümranlığı
//    hukuken sürdü. Yan faydası: `isg:` Değişmez 2 borcu doğurmaz (motor okumaz).
//    ⚠️ Tarihler YIL hassasiyetli — TDV gün vermiyor, §76 gereği uydurulmadı.
//    Karşılaştırma turunda Ekim 1538 / Temmuz-Ağustos 1539 da geçiyor; TDV esas.
{ ad:"Herseknovi (Herceg Novi)", tur:"kale", lat:42.453, lon:18.538, g:0, k:0,
    kur:"1382-01-01",
    s:[{f:"1382-01-01",t:"1482-01-01",d:"bosna"},
       {f:"1687-09-30",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1482-01-01",t:"1687-09-30"}],
    isg:[{f:"1538-01-01",t:"1539-01-01",d:"ispanya",kaynak:"dalmacya"}] },

// ═══ ④ KLİS SANCAĞI — brifingin 1.4'ü ═════════════════════════════════════
// ÇAPRAZ AKDENİZ'in ölçtüğü boşluk (`3fd8fc0`): Dalmaçya iç kesiminde
// (43,3-44,6°K / 15,3-17,5°D) toplam ÜÇ nokta var ve biri ADA. TDV `dalmacya`
// (CANLI) sekiz yeri adıyla sayıyor; bu parti bunlardan BEŞİNİ yazdı
// (Klis · Knin · Sin yukarıda, Vrana · Nadin burada). Skradin yazılmıştı ve
// GERİ ÇEKİLDİ (aşağıda), Ostrovica ile Obrovac hiç yazılmadı.
//
// TDV `dalmacya` verbatim:
//   "1537'de Klis Kalesi'nin fethinden sonra Dalmaçya sınırında YENİ BİR
//    SANCAK tesis edildi."
//   "1538'de Dalmaçya'da taarruza geçen Venedikliler, Osmanlı hâkimiyeti
//    altındaki Ostrovica (Sivrihisar), Obrovac ve Scardona kasabalarını
//    almışlar … buna karşılık Osmanlı kuvvetleri de Nadin, Doubicza ve diğer
//    bazı kaleleri ele geçirmişlerdi."
//   "1540'taki Osmanlı-Venedik antlaşması ile Venedikliler Dalmaçya'daki
//    Nadin ve Urana kalelerini Osmanlılar'a bırakmışlardı."
//
// 🔴 OSTROVICA ve OBROVAC YAZILMADI — koordinatları hazır (GeoNames:
//    Ostrovica 43.9589/15.7936 · Obrovac 44.2006/15.6822) ama **Osmanlı fetih
//    tarihleri bulunamadı.** TDV yalnız 1538'de Venedik'in onları "Osmanlı
//    hâkimiyeti altındaki" kasabalar olarak aldığını söylüyor; ne zaman Osmanlı
//    olduklarını söylemiyor. Knin'in 1522-05-29'unu ödünç almak §76 ihlali
//    olurdu. Kaynak turu kalemi olarak koordinatöre bildirildi.
//
// ⚠️ ÇIKIŞ TARİHİ NEDEN 1699-01-26 (Karlofça) VE 1683 DEĞİL:
//    1683 Ekim'inde Dalmaçya ahalisi ayaklanıp Skradin · Karin · Vrana ·
//    Benkovac · Obrovac'ı aldı; Skradin için "1684'te Venedik'e düştü" diyen
//    kaynak da var (ÇELİŞKİLİ, ve ikisi de TDV dışı). Buna karşılık Karlofça
//    **TDV'de ve KESİN** (26 Ocak 1699), maddesi veride tam gün mevcut.
//    girdi.py'nin şema kararı gereği `d:`/`s:` **DE JURE** sahipliği taşır —
//    fiilî denetim `isg:` katmanının işidir. O yüzden devir Karlofça'ya yazıldı;
//    1683-1699 arasındaki fiilî Venedik denetimi tarihleri gelince `isg:` olarak
//    eklenebilir ve taban rengini değiştirmez.
//
// 🔴 SKRADİN (SCARDONA) ÇIKARILDI — koordinatörün kararı, gerekçesi ölçüm.
//    GeoNames 43.820278 / 15.923611 · Osmanlı 1522 · Venedik'e Karlofça'da.
//    Kayıt hazırdı ama TEK EKSİĞİ fethin GÜNÜYDÜ ve bu, madde yazımını
//    kilitliyordu: `1522-01-01`e madde yazmak MADDEYE uydurma gün taşıtır
//    (§76), gerçek güne yazmak ise ±30 penceresini tutturmaz. Knin'in
//    1522-05-29'unu ödünç almak da §76 ihlali.
//    📌 Çıkarmanın maliyeti ÖLÇÜLDÜ ve düşük: 860,5 km²'si Knin ile Vrana'ya
//    gidiyor, ikisi de o dönemde OSMANLI ⇒ renk doğru kalır, yalnız sınır
//    kabalaşır. Skradin, günü kaynaklanınca döner.
//
// Vrana (Urana) ve Nadin: ikisi de Zadar contado'sundaydı, bu yüzden 1540
// öncesi zinciri Zadar'ın zinciriyle AYNI (1358 Zadar Antlaşması → Macaristan,
// 1409 Ladislas satışı → Venedik). Osmanlı'ya geçişleri TDV'de: 1540
// antlaşması. Antlaşma 2 Ekim 1540'ta imzalandı.
// ✅ İKİSİ DE SIFIR BORÇ: 1540-10-02'nin ±30 gününde madde VAR (Anabolu'nun
//    antlaşmayla devralınması — AYNI antlaşma), 1699-01-26 tam gün.
// ⚠️ Nadin'i Osmanlı kuvvetleri fiilen 1538'de almıştı (TDV); kayıt DE JURE
//    devri (1540) yazar, fiilî alışı değil — §74, ikisi ayrı sorunun cevabı.
{ ad:"Vrana (Urana)", tur:"kale", lat:43.956, lon:15.562, g:0, k:4,
    s:[{f:"1281-01-01",t:"1358-02-18",d:"venedik"},
       {f:"1358-02-18",t:"1409-01-01",d:"macaristan"},
       {f:"1409-01-01",t:"1540-10-02",d:"venedik"},
       {f:"1699-01-26",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1540-10-02",t:"1699-01-26",y:"antlasma"}] },
{ ad:"Nadin", tur:"kale", lat:44.074, lon:15.498, g:0, k:4,
    s:[{f:"1281-01-01",t:"1358-02-18",d:"venedik"},
       {f:"1358-02-18",t:"1409-01-01",d:"macaristan"},
       {f:"1409-01-01",t:"1540-10-02",d:"venedik"},
       {f:"1699-01-26",t:"1797-10-17",d:"venedik"},
       {f:"1797-10-17",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
    d:[{f:"1540-10-02",t:"1699-01-26",y:"antlasma"}] },

// ═══ ⑤ LİKA / BİHAÇ — BU PARTİNİN KENDİ AÇTIĞI HATANIN KAPAĞI ═════════════
// 🔴 Bu nokta bir boşluğu değil, BİZİM ÜRETTİĞİMİZ bir fazlalığı kapatıyor.
//    Knin eklenince peteği 5.424 km² oldu ve kuzeye, LİKA'ya taştı — çünkü
//    `44,2-46,0°K / 14,5-17,5°D` kutusunda Zagreb·Krk·Rab·Pag·Banaluka·Yayça
//    dışında nokta YOK. Knin 1688'den sonra VENEDİK, Lika ise 1689'da
//    HABSBURG oldu ⇒ Knin'in peteği Lika'yı 1688-1797 arası Venedik boyardı.
//    OGRENILENLER §72'nin tarifi: "hayalet yok olmadı, TARAF DEĞİŞTİRDİ."
//    ⇒ Düzeltmeyi yapan taraf, düzeltmenin öbür ucunu da kapatır (§3.5.1).
//
// TDV `bihac` **CANLI** ("BİHAÇ - TDV İslâm Ansiklopedisi", "Bosna'da tarihî
// bir şehir") ve zincirin ÜÇ düğümünü de veriyor:
//   fetih   "Kasım 1591'de Bihaç'ın ön kalesi Ripaç'ı, 1592'de şehri ve
//            kaleyi aldı" (Hasan Paşa) — ardından SANCAK MERKEZİ ve
//            "Bihaç kaptanı"
//   1699    "Karlofça Antlaşması'nın (1699) ardından Bihaç ve çevresi
//            OSMANLILAR'IN ELİNDE KALDI, ancak Bihke sancağı kaldırılarak
//            Bosna sancağına bağlandı"   ⇒ 1699'da RENK DEĞİŞMİYOR, doğrusu bu
//   1878    "18 Eylül 1878'de Avusturya-Macaristan ordusu … Bihaç'ı almayı
//            başardı"
//
// ⚠️ GÜN: TDV fethe YIL veriyor (1592). 10-19 Haziran 1592 kuşatması ve
//    Lamberg'in 19 Haziran'da teslimi TDV DIŞI kaynaklarda, TDV ile
//    ÇELİŞMİYOR — bu yüzden gün yazıldı ve etiketi DESEN. §76 ihlali değil:
//    ödünç alınmış bir gün değil, kendi vakasının kaynaklanmış günü.
// 🔴 1592-06-19'un ±30 gününde madde YOK (en yakın 377 gün) — dosyadaki TEK
//    borç. Ama Skradin'inkinden FARKLI ve ödenebilir: gün BİLİNİYOR, yani
//    madde tam güne yazılır ve pencere tutar.
//
// ⚠️ 1527-01-01 = Cetin sabor'u; Hırvat asilzadeleri Ferdinand'ı kral seçti.
//    Uydurma YYYY-01-01 DEĞİL, olayın gerçek günü. Mohaç (1526-08-29) burada
//    kullanılmadı: Hırvatistan'ın Habsburg'a geçişi ayrı bir olaydır (§74).
// ⚠️ 1878-09-18 `isg:` — komşu Bosna kayıtları 1878-07-29 + kaynak
//    "berlin-antlasmasi" kullanıyor; Bihaç'ın KENDİ tarihi TDV'de var, o
//    yüzden komşununki ÖDÜNÇ ALINMADI (§76).
// ⚠️ 1918 kuyruğu `sirbistan` — Dalmaçya kayıtlarındaki `yugoslavya` DEĞİL.
//    Bihaç Bosna'dadır ve bütün Bosna kayıtları (Saraybosna·Banaluka·Travnik·
//    Yayça·Mostar·İzvornik) `sirbistan` yazıyor. Farklı yazılsa Bosna'nın
//    içinden geçen KURGUSAL bir 1918 sınırı doğardı.
// ⚠️ k:0 / m: yok — Bihaç 1592-1699 sancak MERKEZİ, 1699'dan sonra Bosna
//    sancağına BAĞLI. `k`/`m`'nin zaman boyutu olmadığı için (Değişmez 3)
//    hangisi yazılsa öbür dönemde yanlış olurdu. Eksik alan yanlış alandan iyidir.
{ ad:"Bihaç (Bihać)", tur:"kale", lat:44.817, lon:15.871, g:0, k:0,kd:[{f:"1592-06-19",t:"1908-10-05",k:2,m:null}],
    s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},
       {f:"1527-01-01",t:"1592-06-19",d:"avusturya"},
       {f:"1908-10-05",t:"1918-11-11",d:"avusturya"},
       {f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}],
    d:[{f:"1592-06-19",t:"1908-10-05",y:"kusatma"}],
    isg:[{f:"1878-09-18",t:"1908-10-05",d:"avusturya",kaynak:"bihac"}] },

];

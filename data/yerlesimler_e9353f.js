// =====================================================================
// NOKTA AFRİKA İÇ — Batı Afrika'nın içi (Sahel · Hausa · Bornu · orman kuşağı)
// İŞÇİ oturum: NOKTA AFRİKA İÇ · 16 Ağustos 2026 · görev tahta M-0127 / M-0161
// Şartname: oturumlar/NOKTA-AFRIKA-IC.md
//
// ⚠️ DOSYA ADI M-0166 KURALIYLA ÜRETİLDİ — kimliğe değil, scratchpad
//   yoluna dayanıyor: UUID e9353fca-… ⇒ ilk 6 hane `e9353f`.
//   Dosya önce `yerlesimler_ek32.js` adıyla açılmıştı; M-0166 geldiğinde
//   içeriğe DOKUNMADAN yeniden adlandırıldı ve `window.` değişkeni de
//   birlikte değişti (ikisi ayrı kalırsa dosya yüklenir ama okunmaz).
//
// ⚠️ Dosyayı girdi.py'ye BEN BAĞLAMIYORUM — koordinatör bağlar (şartname ④).
//
// ═══════════ YAZIM ÖNCESİ ÖLÇÜM (İŞ 0) ═══════════
// Taban 2527 nokta, girdi.yukle() ile (kendi ayrıştırıcım DEĞİL).
//   Batı Afrika Sahel/iç (10-20°K / -13..5°D)      1 nokta
//   Batı Afrika orman/kıyı (4-10°K / -13..5°D)     0 nokta
//   Hausa-Bornu-Çad (8-20°K / 5-20°D)              2 nokta
//   Orta Afrika ekvator                           12 · Luba-Lunda-Katanga 6
//   Darfur-Kordofan                               50 nokta — DOLU, dokunmadım
//
// 🔴 VE İLK KUTULARIM BOŞLUK BIRAKMIŞTI — kendi ölçümümü kendim çürüttüm:
//   ilk taramam lat 8-20 / lon 5-30 kuşağını HİÇ görmüyordu; Hausa, Bornu ve
//   Vaday oraya düşüyor. "Ölçüm doğru, evren dar" (CLAUDE.md §11). İkinci
//   tarama bütün Afrika'yı tek süzgeçle geçti; yukarıdaki sayılar ONDAN.
//
// 🔴 ASIL BULGU — VE BU DOSYA DEĞİL, BULGU: ÜÇ NOKTA BOŞ KABUK
//   Timbuktu (16,775 / -3,009) · Agadez (16,973 / 7,991) · Ndjamena
//   (12,107 / 15,045) — üçü de yerlesimler.js'te ve ÜÇÜNÜN DE
//   s:[] d:[] v:[] · kur: YOK · bos: YOK.
//   ⇒ Yani "Batı Afrika'da 3 nokta var" cümlesi yanıltıcı: üçü de SAHİPSİZ.
//   Ölçtüğüm bu. Çıkardığım (ayrı satır, B10): Batı Afrika'da 1281'de
//   sahipli nokta sayısı SIFIR değil, sıfırdan da kötü — çünkü üç sahipsiz
//   nokta petek alıp hiçbir şey boyamıyor.
//   ⚠️ Üçü de VERİ ZAMAN'ın dosyasında. DOKUNMADIM. Ve 3 km kuralı yüzünden
//   kopyalarını da açamam — bu yüzden bu dosyada Timbuktu YOK.
//   TDV'den çıkardığım dönemleri koordinatöre ayrıca bildiriyorum.
//
// ═══════════ TDV NE VERDİ, NE VERMEDİ ═══════════
// 68 slug HTTP koduyla sınandı (§4① — 302 = ölü, 200 = madde var).
//   🟢 CANLI ve GÖVDESİ OKUNDU (9): mali · tinbuktu · gao · cenne · bornu ·
//      kano · sokoto · gana · gane · benin · el-hac-omer
//   🔴 ÖLÜ 302 (14 örnek): songhay · kanem · kanem-bornu · hausa · katsina ·
//      zaria · asante · asanti · oyo · yoruba · kongo · angola · zulu ·
//      monomotapa · agades · agadez · massina · segu · mossi · njimi · kukava
//
// 🔴 VE §4'ÜN ③. TUZAĞI İKİ KEZ ÇIKTI — canlı slug, BOŞ/ÇAPRAZ gövde:
//   `songay`   HTTP 200 · başlık doğru · gövde YOK, `mali` maddesine atıf
//   `dahomey`  HTTP 200 · başlık doğru · gövde YOK, `benin` maddesine atıf
//   ⇒ İkisi de "<title>" testini GEÇER. Songay ve Dahomey tarihini bu iki
//     slugtan DEĞİL, `mali` · `gao` · `cenne` · `benin` maddelerinden aldım.
//
// 🟢 VE §4'ÜN "DAR SLUG TUTMAZSA GENEL MADDEYİ DENE" KURALI TUTTU:
//   `asante`/`asanti` ölü → `gana` maddesi Aşanti'yi, Kumasi'yi, 1874
//   yıkımını ve 1901 İngiliz kontrolünü VERDİ. Tek maddeden üç tarih.
//
// 🔴 İKİ TDV MADDESİ BİRBİRİYLE ÇELİŞİYOR — çözmüyorum, BİLDİRİYORUM:
//   `tinbuktu`  "1894: Fransız işgal ordusu şehri ... ilhak etti"
//   `mali`      "Tinbüktü, Gao, Bourem ve Mopti (1898-1900)"
//   Aynı şehir, dört yıl fark. Timbuktu benim kaydım olmadığı için bu
//   dosyayı etkilemiyor; ama Gao'nun Fransız tarihini `mali` maddesinden
//   aldım ve bunu burada yazıyorum ki bir sonraki oturum çelişkiyi bilsin.
//
// ═══════════ 🔴 KUNYE KATMANI BU BÖLGE İÇİN HAZIR DEĞİL ═══════════
// CLAUDE.md §6 sırayı KİLİTLİYOR: ① dizin → ② yerleşim → ③ pencere.
// Ölçtüm (girdi.oku_devletler() + import renkler — kendi ayrıştırıcım DEĞİL):
//   RENKSİZ ama künyesi VAR (10):
//     mali-imparatorlugu · songhay-imparatorlugu · hausa-sehir-devletleri ·
//     oyo-imparatorlugu · benin-kralligi · dahomey · asanti · sokoto ·
//     kanem-bornu · zulu-kralligi
//   KÜNYESİ HİÇ YOK (9): ife · massina · segu-bambara · mossi · kanem(ayrı) ·
//     vaday · bagirmi · matamba · mutapa-rozvi · tekrur(Toucouleur)
//   PENCERESİ DAR (1): songhay-imparatorlugu f:1464 — oysa TDV `gao` maddesi
//     1324'te bir Songay sultanı (Asibay) olduğunu söylüyor.
//
// ⇒ HÜKMÜM: §3.5 "hayalet devlet" kuralı gereği künye penceresinin DIŞINA
//   dönem YAZMADIM. Bunun bedeli açık ve gizlemiyorum: aşağıdaki bazı
//   noktalarda tarih çizgisinde SAHİPSİZ aralıklar var. Bunlar bilgisizlik
//   değil, DİZİN EKSİĞİ — ve her birini `neden:` alanına yazdım ki makine
//   sorabilsin (§11'in on birinci sınıfı: bir dersi `if` ile sorulamayan
//   yere yazmak, onu yazmamaktır).
//
// 🔴 VE `bos:` SÖZLÜĞÜNÜN ALTINCI KOVAYA İHTİYACI VAR — ölçülmüş vaka:
//   Çukotka/Yakut sınavı "kaynak KONUŞUYOR mu SUSUYOR mu" diye sorar ve
//   ikisi de DEVLETİN YOKLUĞUNU anlatır. Burada üçüncü bir hâl var:
//     kaynak KONUŞUYOR · devlet VAR · ama BİZİM DİZİNİMİZDE künyesi YOK
//   Bu ne `devletsiz` ne `veri-yok`. En yakını olduğu için `veri-yok`
//   yazdım ve `neden:` alanına "kunye-yok" diye AÇIKÇA damgaladım.
//   Koordinatöre ayrı bir kova öneriyorum. Kovayı kendim UYDURMADIM,
//   çünkü sözlüğü ben yazmıyorum.
//
// ═══════════ KOORDİNAT NEREDEN GELİYOR — gizlemiyorum ═══════════
// 🔴 TDV KOORDİNAT VERMİYOR. Aşağıdaki lat/lon değerleri, tarihî yerin
//   bugünkü yerleşimle ÖZDEŞLEŞTİRİLMESİNDEN geliyor. Bu bir ÖZDEŞLEŞTİRME,
//   ölçüm değil. Yer adı kesintisiz taşınan yerlerde (Gao · Cenne · Kano ·
//   Katsina · Zaria · Sokoto · Kumasi · Abomey · Benin Şehri · Mao) risk
//   düşük; harabe olanlarda (Niani · Oyo-İle · Birni N'gazargamu) risk daha
//   yüksek ve her birinin altında AYRICA yazdım.
//   "Uydurma koordinat, eksik noktadan KÖTÜDÜR: eksik nokta bir boşluktur,
//    uydurma nokta bir YALANDIR ve denetim onu göremez." (NOKTA SİBİRYA 2)
//   ⇒ Konumu bulunamayan altı yer YAZILMADI; dosyanın sonunda tek tek.
// =====================================================================

window.YERLESIMLER_E9353F = [

// ═════════════════ NİJER KAVSİ — MALİ / SONGAY KUŞAĞI ═════════════════

// NİANİ — Mali İmparatorluğu'nun başşehri, ve 1281 KESİTİNİN ÇEKİRDEĞİ.
// TDV `mali`: "1235 yılında Susu Kralı Sumaoro Kante'ye karşı Suncata
//   Keita'nın yaptığı ... Kirina savaşı Mali İmparatorluğu'nun asıl kuruluş
//   tarihi olarak kabul edilmektedir." Künye de aynı: f:1235-01-01.
// ⇒ 1281'de Mali AYAKTA ve yükseliş devrinde (Sundiata sonrası, Mansa
//   Musa'dan önce). Bu nokta şartnamenin §① kırmızısını doğrudan kapatıyor.
// ⚠️ KOORDİNAT RİSKİ YÜKSEK: Niani bir HARABEDİR (Sankarani kıyısı, Gine).
//   Arkeologlar Niani'nin başşehir olup olmadığını TARTIŞIYOR. Koordinat
//   bugünkü Niani köyünündür; başşehrin orası olduğu bir ÖZDEŞLEŞTİRMEDİR.
// ⚠️ 1670 SONRASI SAHİPSİZ: mali künyesi t:1670-01-01'de bitiyor, ardılı
//   (Bambara Segu · Kaarta) künyesiz. Fransız tarihi de Niani'ye özel
//   DEĞİL — `mali` maddesi bölge geneli için "Segu ve Sikasso (1898)" diyor.
//   Niani'ye özel bir fetih tarihi BULAMADIM, o yüzden Fransız dönemi
//   YAZMADIM. Sahipsizlik bilinçlidir.
{ ad:"Niani", tur:"sehir", lat:11.383, lon:-8.667, g:1, k:1,
  s:[{f:"1281-01-01", t:"1670-01-01", d:"mali-imparatorlugu", kaynak:"mali"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — 1670 sonrasi sahipsiz: mali-imparatorlugu kunyesi 1670'te bitiyor, ardili (Bambara Segu / Kaarta / Toucouleur) icin devletler.js'te KUNYE YOK. Kaynak SUSMUYOR (TDV mali maddesi bu devletleri sayiyor) ama dizinimiz onlari tanimiyor. Ayrica Niani'ye ozel Fransiz fetih tarihi bulunamadi; TDV mali yalniz bolge geneli veriyor (Segu ve Sikasso 1898)." },

// VALATA (Velâte / Oualata) — Mali'nin kuzey ticaret kapısı, çöl kenarı.
// TDV `mali`: "Tevârikler'in 1430'da Tinbüktü, Velâte, Aravuan ve Gao'yu
//   ele geçirmesi üzerine ortadan kalktı."
// ⇒ Mali dönemi 1281'den 1430'a. 1430 sonrası Tevârik (Tuareg) — künyesiz.
// ⚠️ Pencere sınırına yakın ama İÇERİDE: lon -7,033 > -12. ✓
{ ad:"Valata (Oualata)", tur:"sehir", lat:17.300, lon:-7.033, g:0, k:0,
  s:[{f:"1281-01-01", t:"1430-01-01", d:"mali-imparatorlugu", kaynak:"mali"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — 1430 sonrasi sahipsiz. TDV mali maddesi sehri 1430'da Tevarikler'in (Tuareg) aldigini ACIKCA soyluyor, yani kaynak KONUSUYOR ve bir siyasi guc VAR; ama Tuareg icin devletler.js'te kunye yok. Bu ne devletsiz ne veri-yok: dizin eksigi. Fransiz Moritanya donemi icin de kaynakli tarih bulunamadi." },

// GAO — Songay'ın başşehri; Nijer kavsinin doğu ucu.
// TDV `gao` (HTTP 200, gövdesi okundu) DÖRT kırılmayı birden verdi:
//   kuruluş "Muhtemelen VII. yüzyılın son yıllarında Songaylar'ın Kukia'dan
//     çıkardıkları Sorko-Fârân balıkçıları tarafından kurulan Gao"
//   1324    "Songay Sultanı Asibay mağlûp olduğu Mali Sultanı Gongon
//            Mûsâ'ya biat etti"
//   1473    "Sonni Ali (Ali Ber) Tinbüktü ve Cenne'yi de alarak ülkenin
//            sınırlarını genişletti"
//   1591    "Fas Sultanı Ahmed el-Mansûr ... Tinbüktü ile birlikte Gao'yu
//            ele geçirdi"  ·  "XVIII. yüzyıla kadar Askiyalar Gao'da Faslı
//            paşaların emrinde hüküm sürdüler"
// 🔴 1281-1324 SAHİPSİZ ve sebebi BİLGİSİZLİK DEĞİL: TDV 1324'te bir Songay
//   sultanı (Asibay) olduğunu söylüyor, yani devlet VARDI — ama
//   songhay-imparatorlugu künyesi f:1464'te başlıyor. §3.5 künye dışına
//   dönem yazmayı yasaklıyor (hayalet devlet), o yüzden YAZMADIM.
// 📌 songhay dönemini 1473 yerine 1464'ten başlattım: künyenin kendi f:
//   değeri o, ve TDV 1473'ü "sınırların genişletilmesi" diye anlatıyor —
//   Gao zaten Songay'ın merkeziydi. Künyeyle çelişmemeyi tercih ettim.
{ ad:"Gao", tur:"sehir", lat:16.272, lon:-0.040, g:1, k:1,
  s:[{f:"1324-01-01", t:"1464-01-01", d:"mali-imparatorlugu", kaynak:"gao"},
     {f:"1464-01-01", t:"1591-04-13", d:"songhay-imparatorlugu", kaynak:"gao"},
     {f:"1591-04-13", t:"1700-01-01", d:"fas", kaynak:"gao"},
     {f:"1898-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"mali"}],
  d:[], v:[],
  kasitli_bosluk:true,
  bos:"veri-yok",
  neden:"veri-yok — IKI ARALIK, ikisi de BILEREK bos. ① 1281-1324: TDV gao maddesi 1324'te Songay Sultani Asibay'in Mali'ye biat ettigini yaziyor, yani 1281'de bir Songay devleti VARDI; ama songhay-imparatorlugu kunyesi f:1464. Kunye penceresi DAR, bilgi eksik DEGIL. ② 1700 → 1898 (198 yil): Arma pasaligi ve Tuareg donemi; TDV gao yalniz 'XVIII. yuzyila kadar Askiyalar Gao'da Fasli pasalarin emrinde hukum surduler' diyor, YIL vermiyor ve arma-pasaligi kunyesi de YOK. 🔴 VE BURADA MASSINA'YI YAZMAYI REDDETTIM, gerekcesi kayda gecsin: massina kunyesi indi ve Cenne'ye yazildi, ama kaynak (Cambridge/JAH) Massina'nin hakimiyetini 'the old cities of JENNE and TIMBUKTU' diye sayiyor, GAO'yu SAYMIYOR. Kunye elimdeyken Gao'ya uzatmak kolaydi ve bu, ayni dosyada Split/Sibenik'te bir kez yaptigim GENISLETMENIN tekrari olurdu — orada dayanak bir tarihi belgeydi (1789 kadastro), burada HIC beyan yok. ⇒ Kaynagin sustugu yere devlet yazmak, kaynagin konustugu yere yazmamaktan daha buyuk bir hatadir: ilki gorunmez, ikincisi denetimde oter." },

// CENNE (Djenné) — Nijer iç deltasının ticaret ve ilim merkezi.
// TDV `cenne` (gövdesi okundu):
//   kuruluş "IX. yüzyılda kuzeyden gelen Nono kabilesi Zoboro'da yerleşmiş"
//   İslâm   "halkı müslüman tüccarlar sayesinde İslâmiyet'i VI. (XII.)
//            yüzyılda kabul" etti
//   1473    "Ali Ber Tinbüktü'yü yakıp yıkmasına rağmen Cenne'ye zarar
//            vermemiş"
//   1591/96 "Cenne 1591'den sonra (büyük ihtimalle 1596'da), Fas Sultanı
//            Ahmed el-Mansûr'un Sudan'ın fethine memur ettiği Cüdâr Paşa
//            tarafından ele geçirildi"
//   1830    Ahmedü Lobbo camii yeniden inşa etti (Massina devri)
//   1893    "Fransız kuvvetlerince işgal edilerek Fransız Sudanı
//            topraklarına katıldı"
// 📌 1596 tarihini kaynağın KENDİ tereddüdüyle aldım — TDV "büyük ihtimalle"
//   diyor. Bunu silip kesin 1591 yazmadım; kaynağın tereddüdü de veridir.
// 🟢 IKI DONEM EKLENDI (M-0595/M-0608 onayiyla) — kunyeler indikten SONRA.
//   massina 1818-01-01→1862-01-01 · tekrur 1852-09-01→1893-01-01 künyeleri
//   `devletler.js`e indi (commit 52b1cd6), ve ANCAK ONDAN SONRA yazdim:
//   §3.5 künye penceresi disina dönem yazmayi yasakliyor ve bunu ilk
//   yazimda da uygulamistim — o yüzden bu bosluk BILEREK duruyordu.
// 📌 Yani 193 yillik bosluk bir EKSIK degil, bir SIRA meselesiydi: dizin
//   katmani gelmeden yerlesim katmani yazilamiyordu (CLAUDE.md §6).
{ ad:"Cenne (Djenné)", tur:"sehir", lat:13.906, lon:-4.555, g:1, k:1,
  s:[{f:"1473-01-01", t:"1591-04-13", d:"songhay-imparatorlugu", kaynak:"cenne"},
     {f:"1596-01-01", t:"1700-01-01", d:"fas", kaynak:"cenne"},
     {f:"1818-01-01", t:"1862-01-01", d:"massina", kaynak:"mali"},
     {f:"1862-01-01", t:"1893-01-01", d:"tekrur", kaynak:"el-hac-omer"},
     {f:"1893-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"cenne"}],
  d:[], v:[],
  kasitli_bosluk:true,
  bos:"veri-yok",
  neden:"veri-yok — UC AYRI ARALIK, ucu de BILEREK bos ve ucunun de gerekcesi AYRI. ① 1281-1473: sehir IX. yuzyildan beri var (TDV cenne) ve 1473'e kadar Songay'a gecmedi; bagimsiz bir sehir devletiydi ama Cenne icin kunye YOK. ② 1591-04-13 → 1596-01-01 (4,7 yil): Tondibi ile Cudar Pasa'nin sehri almasi arasi; TDV'nin KENDISI 'buyuk ihtimalle 1596'da' diyerek TEREDDUT ediyor ve o tereddudu doldurmak icin tarih uydurmak, dort yil sekiz aylik bir bosluktan kotudur. ③ 1700 → 1818 (118 yil): Arma pasaligi donemi; TDV gao yalniz 'XVIII. yuzyila kadar Askiyalar Fasli pasalarin emrinde' diyor, YIL vermiyor ve arma-pasaligi kunyesi de YOK. ⇒ Ucunde de kaynak ya susuyor ya kunye eksik; hicbirine tarih UYDURULMADI. 🟢 Buna karsilik 1818-1893 arasi ARTIK DOLU: massina ve tekrur kunyeleri indi ve iki donem yazildi." },

// SEGU (Ségou) — Bambara Krallığı'nın başşehri, sonra Toucouleur merkezi.
// TDV `el-hac-omer` (gövdesi okundu): "1861 başlarında bir başka Bambara
//   Krallığı olan Segu'ya girilerek Segu'nun animist krallığı ortadan
//   kaldırıldı." · TDV `mali`: Fransızlar "Segu ve Sikasso (1898)".
// 🔴 `kur:` YAZDIM ve sebebi ölçülmüş bir risk: Segu'nun 1281'de yerleşim
//   olarak var olup olmadığını okuduğum kaynakların HİÇBİRİ söylemiyor.
//   `kur:` yazmazsam motor noktayı 1281'de sahnede sayar (Değişmez 5,
//   62 hayalet yerleşim vakası). Bambara Krallığı'nın kuruluşu (1712)
//   elimdeki en erken savunulabilir çapa; bunu ŞEHRİN kuruluşu diye DEĞİL,
//   noktanın sahneye giriş anı diye yazıyorum ve farkı burada belirtiyorum.
// ⚠️ 1712-1898 arası sahipsiz: Bambara da Toucouleur da künyesiz.
{ ad:"Segu (Ségou)", tur:"sehir", lat:13.432, lon:-6.216, g:0, k:0,
  kur:"1712-01-01",
  s:[{f:"1898-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"mali"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — 1712-1898 arasi sahipsiz. Kaynak KONUSUYOR ve iki ayri devlet adiyla saydiyor: Bambara Kralligi (TDV el-hac-omer: '1861 baslarinda bir baska Bambara Kralligi olan Segu'ya girilerek Segu'nun animist kralligi ortadan kaldirildi') ve Toucouleur/Tekrur (el-Hac Omer, 1852 cihad, olumu 1864-02-14, devleti 1893-94'te Fransizlarca isgal). IKISININ DE devletler.js'te kunyesi YOK. Ayrica kur:1712 sehrin degil Bambara Kralliginin kurulusudur; sehrin 1281'de var olup olmadigi OLCULEMEDI." },

// ═════════════════ HAUSA ŞEHİR DEVLETLERİ — 1281 KAPANIYOR ═════════════════
// 🟢 Bu üç nokta bu dosyanın EN TEMİZ kısmı, çünkü hausa-sehir-devletleri
//   künyesi f:1000-01-01 · t:1808-01-01 — yani 1281'i SORUNSUZ kapsıyor.
//   Şartnamenin "Batı Afrika'da 1281'de SIFIR" kırmızısını asıl kapatan
//   bunlar ve Benin Şehri.
//
// 📌 KANO ile ÖTEKİ İKİSİ ARASINDAKİ TARİH FARKI KASITLIDIR:
//   Kano için TDV ÖZEL bir yıl veriyor (1807), Katsina ve Zaria için
//   VERMİYOR. Kano'ya kendi kaynaklı yılını, ötekilere künyenin kendi
//   bitiş yılını (1808-01-01) yazdım. Kano'nun tarihini ötekilere
//   KOPYALAMADIM — bir kaynağı olmayan yere, komşusunun kaynagini
//   tasimak uydurmanin sessiz bicimidir.

// KANO — Hausa şehir devletlerinin en büyüğü.
// TDV `kano`: "Efsanelere göre şehrin adı, IX. yüzyılda burayı kuran Gaya
//   kabilesine mensup Kano'dan gelmektedir." · İslâmlaşma "XIV. yüzyılın
//   ortalarında Mali Sultanlığı'ndan gelen Abdurrahman Zeytî başkanlığındaki
//   kırk kişilik bir heyet" · "Osman b. Fûdî'nin liderliğinde başlayan cihad
//   hareketi neticesinde Fûlânîler'in eline geçen (1807) Kano" · İngiliz
//   işgali Emir Aliyu döneminde (1894-1903).
// ⚠️ İngiliz yılı GÜN hassasiyetinde değil — TDV yalnız 1903'ü veriyor.
//   §4'ün "gün bilinmiyorsa YYYY-01-01" kuralıyla yazdım.
{ ad:"Kano", tur:"sehir", lat:12.000, lon:8.517, g:1, k:1,
  s:[{f:"1281-01-01", t:"1807-01-01", d:"hausa-sehir-devletleri", kaynak:"kano"},
     {f:"1807-01-01", t:"1903-01-01", d:"sokoto", kaynak:"kano"},
     {f:"1903-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"kano"}],
  d:[], v:[] },

// KATSİNA — Hausa'nın kuzey ticaret şehri, Sokoto emirliği.
// TDV `sokoto` emirlikler arasında ADIYLA sayıyor: "Kano, Katsina, Zaria,
//   Adamawa, Nupe, and Ilorin". Katsina'nın kendi slug'ı ÖLÜ (302).
// ⚠️ Fûlânî devrine geçiş yılı Katsina için TDV'de YOK. Kano'nun 1807'sini
//   buraya taşımadım; hausa künyesinin kendi bitişini (1808-01-01) kullandım
//   ve bunun bir KAYNAK değil KÜNYE çapası olduğunu burada yazıyorum.
{ ad:"Katsina", tur:"sehir", lat:12.986, lon:7.617, g:0, k:2, m:"Kano",
  s:[{f:"1281-01-01", t:"1808-01-01", d:"hausa-sehir-devletleri", kaynak:"sokoto"},
     {f:"1808-01-01", t:"1903-01-01", d:"sokoto", kaynak:"sokoto"},
     {f:"1903-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"sokoto"}],
  d:[], v:[] },

// ZARİA (Zazzau) — Hausa'nın güney ucu, Sokoto emirliği.
// Katsina ile aynı kaynak ve aynı çapa; slug'ı da aynı şekilde ÖLÜ (302).
{ ad:"Zaria (Zazzau)", tur:"sehir", lat:11.086, lon:7.720, g:0, k:2, m:"Kano",
  s:[{f:"1281-01-01", t:"1808-01-01", d:"hausa-sehir-devletleri", kaynak:"sokoto"},
     {f:"1808-01-01", t:"1903-01-01", d:"sokoto", kaynak:"sokoto"},
     {f:"1903-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"sokoto"}],
  d:[], v:[] },

// SOKOTO — Fûlânî Halifeliği'nin başşehri.
// TDV `sokoto` (gövdesi okundu): cihad 1804 · halifelik 1812 · başkentler
//   "Gudu, Sifawa, and Sokoto (the primary capital from 1812 onward)" ·
//   "On January 15, 1903, British forces defeated the Sokoto army" ·
//   Sultan Muhammed Tâhir 1903-07-27'de öldü.
// 🔴 `kur:` 1812 — ve bu ŞEHRİN kuruluşu DEĞİL, şehrin başşehir olduğu
//   tarihtir. Şehrin kuruluş yılını TDV VERMİYOR; uydurmak yerine kaynaklı
//   olan tek çapayı kullandım ve farkı burada yazıyorum. Sokoto'yu 1281'de
//   sahnede bırakmamak (Değişmez 5) için `kur:` şart.
// 📌 İngiliz devrini 1903-01-15'ten başlattım — TDV'nin verdiği GÜN.
//   sokoto künyesi t:1903-07-27 (sultanın ölümü); ikisi çelişmiyor, biri
//   askerî yenilgi öteki hânedanın sonu. Toprak 15 Ocak'ta el değiştirdi.
{ ad:"Sokoto", tur:"sehir", lat:13.062, lon:5.234, g:1, k:1,
  kur:"1812-01-01",
  s:[{f:"1812-01-01", t:"1903-01-15", d:"sokoto", kaynak:"sokoto"},
     {f:"1903-01-15", t:"1923-10-29", d:"ingiltere", kaynak:"sokoto"}],
  d:[], v:[] },

// ═════════════════ KANEM-BORNU — ÇAD GÖLÜ KUŞAĞI ═════════════════
// 🟢 kanem-bornu künyesi f:800-01-01 · t:1905-01-01 — 1281'i kapsıyor.
//   Yani bu kuşakta künye SORUN DEĞİL; sorun NOKTA yokluğuydu.

// MAO (Kanem) — Kanem'in Çad gölü kuzeydoğusundaki çekirdeği.
// 🔴 VE BU NOKTA BİR ÖZDEŞLEŞTİRMEDİR, ONU AÇIKÇA YAZIYORUM:
//   1281'de Kanem'in başşehri NJİMİ'ydi. Njimi'nin yeri arkeolojik olarak
//   TARTIŞMALI ve onlarca km belirsiz; o yüzden Njimi'yi YAZMADIM (dosya
//   sonunda gerekçesi). Mao, Kanem'in tarihî çekirdeğinde duran ve konumu
//   TARTIŞMASIZ olan bir merkezdir. Yani bu nokta "Njimi buradaydı" DEMİYOR;
//   "Kanem devleti 1281'de bu bölgedeydi" diyor.
// TDV `bornu`: Kanem Sultanlığı Bornu'dan ÖNCE var (Dafur'dan gelen Zegâva);
//   "May Ömer b. İdrîs (1382-1387) taraftarlarıyla birlikte Çad gölünün batı
//   tarafına çekilerek burada merkezi Kafa olan Bornu Devleti'ni kurdu" ·
//   "1902 yılında Bornu Fransa, İngiltere ve Almanya arasında paylaşıldı".
// 📌 Mao bugünkü Çad'dadır ⇒ 1902 paylaşımında Fransa'ya düşen taraf.
{ ad:"Mao (Kanem)", tur:"sehir", lat:13.996, lon:15.313, g:0, k:1,
  s:[{f:"1281-01-01", t:"1902-01-01", d:"kanem-bornu", kaynak:"bornu"},
     {f:"1902-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"bornu"}],
  d:[], v:[] },

// BİRNİ N'GAZARGAMU — Bornu'nun başşehri, 1465'ten itibaren.
// TDV `bornu`: "May Ali (Gaci) b. Dûneme (1465-1497) kuzeyde Birni
//   N'gazargamu şehrini kurdu ve burayı devletin merkezi yaptı."
// 🟢 `kur:` KAYNAKLI ve tam — bu dosyadaki en sağlam `kur:` bu.
// ⚠️ KOORDİNAT RİSKİ: şehir bir HARABEDİR (Yobe nehri kıyısı, Nijerya-Nijer
//   sınır kuşağı). Koordinat harabe alanının yaygın kabul gören yeridir,
//   ±birkaç km belirsizlik taşır. Uydurma değil, ama ölçüm de değil.
// 📌 1902'den sonra İngiltere: TDV Bornu'nun 1902'de üçe bölündüğünü,
//   sonunda "a British emirate within Nigeria" olduğunu söylüyor ve bu
//   harabe Nijerya tarafındadır.
{ ad:"Birni N'gazargamu", tur:"sehir", lat:12.350, lon:10.683, g:0, k:1,
  kur:"1465-01-01",
  s:[{f:"1465-01-01", t:"1902-01-01", d:"kanem-bornu", kaynak:"bornu"},
     {f:"1902-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"bornu"}],
  d:[], v:[] },

// ═════════════════ ORMAN KUŞAĞI — YORUBA · BENİN · AŞANTİ · DAHOMEY ═════════════════

// BENİN ŞEHRİ (Edo) — Benin Krallığı'nın başşehri.
// 🟢 BU DOSYANIN EN TEMİZ KAYDI: benin-kralligi künyesi
//   f:1180-01-01 · t:1897-02-18 — 1281'i kapsıyor VE bitişi GÜN hassas.
//   Tarih çizgisinde tek bir sahipsiz gün yok.
// ⚠️ KAYNAK UYARISI, §4②'nin canlı örneği: TDV'de `benin` slug'ı CANLI (200)
//   ama açtığı madde MODERN BENİN CUMHURİYETİ'dir (eski Dahomey) — Nijerya'
//   daki Benin Krallığı DEĞİL. Maddenin kendisi bunu söylüyor: "Portekizli
//   denizciler Benin kıyılarına geldiklerinde buralarda Fonlar tarafından
//   kurulmuş Allada, Adjatché ve Dahomey adlarında üç krallık bulunuyordu."
//   ⇒ Yani `benin` maddesi bu kaydın kaynağı DEĞİLDİR. Dönem sınırlarını
//     devletler.js künyesinden aldım ve `kaynak:` alanına "bulunamadi"
//     yazdım. Kaynağı olmayan bilgiyi kaynaklı gibi göstermemek için.
{ ad:"Benin Şehri (Edo)", tur:"sehir", lat:6.335, lon:5.604, g:1, k:1,
  s:[{f:"1281-01-01", t:"1897-02-18", d:"benin-kralligi", kaynak:"bulunamadi"},
     {f:"1897-02-18", t:"1923-10-29", d:"ingiltere", kaynak:"bulunamadi"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — donem sinirlari KAYNAKTAN DEGIL devletler.js kunyesinden (benin-kralligi f:1180 t:1897-02-18) alindi. TDV'de Nijerya'daki Benin Kralligi'nin mustakil maddesi BULUNAMADI: `benin` slug'i canli ama modern Benin Cumhuriyeti'ni anlatiyor (CLAUDE.md §4 ikinci tuzak). Sahipsiz aralik YOK; bu bayrak sahipsizligi degil KAYNAK eksigini isaretliyor." },

// İFE (Ile-Ife) — Yoruba'nın kutsal şehri ve orman kuşağının en eski merkezi.
// 🔴 BU NOKTA BİLEREK SAHİPSİZ YAZILDI ve sebebi tek: `ife` künyesi YOK.
//   İfe 1281'de vardı ve bir krallıktı — yani kaynak SUSMUYOR. Ama dizinde
//   karşılığı olmadığı için §3.5 gereği hiçbir kimlik yazamadım.
//   oyo-imparatorlugu'nu (f:1400) buraya yazmak iki kat yanlış olurdu:
//   hem hayalet devlet (1281'de Oyo yok) hem yanlış devlet (İfe ≠ Oyo).
// 📌 Noktayı yine de YAZDIM, çünkü boşluğun KENDİSİ veridir: nokta olmazsa
//   bölge en yakın peteğe emilir ve YANLIŞ bir devletle boyanır (§2).
//   Sahipsiz nokta hiç değilse "burada kimse yok" diyor; noktasızlık
//   "burada komşum var" diye YALAN söylüyor.
{ ad:"İfe (Ile-Ife)", tur:"sehir", lat:7.467, lon:4.567, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — Ife 1281'de mevcut ve Yoruba dunyasinin merkezi bir kralligiydi; kaynak SUSMUYOR. Ama devletler.js'te `ife` kunyesi YOK, o yuzden §3.5 geregi hicbir kimlik yazilmadi. oyo-imparatorlugu (f:1400) buraya yazilamaz: hem 1281'de yok hem baska devlet. KOORDINATORE ISTEK: ife kunyesi." },

// OYO-İLE (Eski Oyo / Katunga) — Oyo İmparatorluğu'nun başşehri.
// oyo-imparatorlugu künyesi f:1400-01-01 · t:1836-01-01.
// 🔴 `kur:` KÜNYEYE BAĞLANDI, kaynağa değil — açıkça yazıyorum: Oyo-İle'nin
//   kuruluş yılını okuduğum hiçbir TDV maddesi vermiyor (`oyo` ve `yoruba`
//   sluglari ÖLÜ, 302). `kur:` yazmazsam nokta 1281'de sahnede kalır ve
//   Değişmez 5 hayaleti olur; künyenin f: değerini çapa olarak kullandım.
// ⚠️ KOORDİNAT RİSKİ YÜKSEK: Eski Oyo bir HARABEDİR (bugünkü Old Oyo Millî
//   Parkı içinde). Koordinat harabe alanının yaygın kabul gören yeridir.
// ⚠️ 1836 sonrası sahipsiz: şehir terk edildi ve künye de orada bitiyor.
//   `bit:` alanı var ama terk yılı için kaynaklı tarihim YOK, o yüzden
//   `bit:` YAZMADIM — sahipsiz bırakmak, uydurma bir terk tarihinden iyidir.
{ ad:"Oyo-İle (Eski Oyo)", tur:"sehir", lat:8.983, lon:4.383, g:0, k:1,
  kur:"1400-01-01",
  s:[{f:"1400-01-01", t:"1836-01-01", d:"oyo-imparatorlugu", kaynak:"bulunamadi"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — kur:1400 ve donem sinirlari KAYNAKTAN DEGIL oyo-imparatorlugu kunyesinden alindi; TDV'de `oyo` ve `yoruba` sluglari OLU (302) ve baska maddede Oyo-Ile'nin kurulus/terk yili BULUNAMADI. 1836 sonrasi sahipsiz: sehir terk edildi ama terk yili icin kaynak yok, o yuzden bit: yazilmadi." },

// KUMASİ — Aşanti Konfederasyonu'nun başşehri.
// 🟢 §4'ÜN "DAR SLUG TUTMAZSA GENEL MADDEYİ DENE" KURALININ MEYVESİ:
//   `asante` ve `asanti` sluglari ÖLÜ (302). TDV'nin GENEL `gana` maddesi
//   üç tarihi birden verdi: "XVII-XVIII. centuries: Akwamu, Denkyira, Akyem
//   states; Ashanti confederation emerges with capital at Kumasi" ·
//   "1874: Gold Coast colony established; Kumasi destroyed" ·
//   "1901: Ashanti territory comes under British control".
// 📌 İngiliz devrini 1874'te DEĞİL 1901'de başlattım: 1874'te şehir yıkıldı
//   ama Aşanti toprağı 1901'de İngiliz kontrolüne girdi. TDV ikisini AYRI
//   cümlelerde ayrı yıllarla veriyor; ikisini birleştirmek kaynağı
//   sadeleştirmek olurdu.
// 🔴 `kur:` künyeye bağlandı (asanti f:1701) — Kumasi'nin kuruluş yılını
//   `gana` maddesi vermiyor, yalnız "XVII-XVIII. yüzyıllar" diyor.
{ ad:"Kumasi", tur:"sehir", lat:6.689, lon:-1.624, g:1, k:1,
  kur:"1701-01-01",
  s:[{f:"1701-01-01", t:"1901-01-01", d:"asanti", kaynak:"gana"},
     {f:"1901-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"gana"}],
  d:[], v:[] },

// ABOMEY — Dahomey Krallığı'nın başşehri.
// TDV `benin` (modern Benin Cumhuriyeti maddesi, gövdesi okundu):
//   "Portekizli denizciler Benin kıyılarına geldiklerinde buralarda Fonlar
//    tarafından kurulmuş Allada, Adjatché ve Dahomey adlarında üç krallık
//    bulunuyordu." · Kral Behanzin'in mücadelesi ve "1893'te Abomey'nin
//    işgali" · "1904 yılında Fransız Batı Afrikası'na" katılım.
// ⚠️ `dahomey` slug'ı CANLI (200) ama GÖVDESİZ — `benin` maddesine çapraz
//   atıf. §4③. Bu yüzden kaynak olarak `benin` yazdım, `dahomey` değil.
// 🔴 `kur:` künyeye bağlandı (dahomey f:1625); TDV kuruluş yılı vermiyor.
{ ad:"Abomey", tur:"sehir", lat:7.186, lon:1.991, g:1, k:1,
  kur:"1625-01-01",
  s:[{f:"1625-01-01", t:"1893-01-01", d:"dahomey", kaynak:"benin"},
     {f:"1893-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"benin"}],
  d:[], v:[] },

// ELMİNA (São Jorge da Mina) — Avrupa'nın Sahra altı Afrika'daki en eski kalesi.
// 🟡 BU KAYIT ÖNCE "YAZILAMAZ" DİYE KUYRUĞA KONDU, SONRA AÇILDI — ve nasıl
//   açıldığı, ne yazdığından daha öğretici olduğu için burada duruyor:
//     ① TDV `elmina` slug'ı ÖLÜ (302)
//     ② genel `gana` maddesi KURULUŞU verdi: "1482: Fort built at Elmina"
//        (§4'ün "dar slug tutmazsa GENEL maddeyi dene" kuralı, ikinci kez)
//     ③ ama DÖNEMİN BİTİŞİ yoktu ⇒ `portekiz`i sona kadar yazmak 390 yıllık
//        bir yalan olurdu ⇒ NOKTA YAZILMADI, `bulunamadı — arandı,
//        ERİŞİLEMEDİ` diye kaydedildi (koordinatörün M-0218'de doğurduğu
//        üçüncü kova; bu onun ilk canlı kullanımıydı)
//     ④ ve o kayıt İŞE YARADI: kova "aradım, yok" demediği için nokta
//        KAPANMADI, ve akademik arama tekrar denenince AÇILDI.
//   📌 İkisini karıştırsaydım — "erişemedim"i "yok" sanıp kapatsaydım —
//      bu nokta bir daha aranmayacaktı. Ayrımın bedeli tam burada görüldü.
//
// 🟢 KAYNAK: Nationaal Archief (Hollanda Ulusal Arşivi) — koordinatörün
//   M-0218'deki 🟢 listesinde "ulusal arşiv-müze kurumsal yayını" olarak
//   ADIYLA geçiyor. Gövdesi okundu, üç tarihi de kendi cümleleriyle veriyor:
//     "Het is in 1482 als handelspost gebouwd door de Portugezen"
//     "In 1637 komt het fort in bezit van de Hollanders"
//     "tot Nederland het fort in 1872 aan Engeland verkoopt"
//
// 🟢 VE İKİ BAĞIMSIZ KAYNAK 1482'DE UYUŞUYOR: TDV `gana` maddesi de
//   "1482: Fort built at Elmina" diyor. İki ayrı kaynak aynı şeyi
//   söylüyorsa o artık tahmin değildir.
// ⚠️ `kaynak:` alanına TDV slug'ı yazamıyorum çünkü kaynak TDV DEĞİL;
//   alanın taşıdığı tek şey slug olduğu için "bulunamadi" yazdım ve gerçek
//   dayanağı BURAYA yazdım. Kaynağı gizlemiyorum, alan onu taşıyamıyor.
{ ad:"Elmina (São Jorge da Mina)", tur:"kale", lat:5.085, lon:-1.349, g:1, k:0,
  kur:"1482-01-01",
  s:[{f:"1482-01-01", t:"1637-01-01", d:"portekiz",  kaynak:"gana"},
     {f:"1637-01-01", t:"1872-01-01", d:"hollanda",  kaynak:"bulunamadi"},
     {f:"1872-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"bulunamadi"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — sahipsiz araligi YOK; bayrak KAYNAK ALANININ YETERSIZLIGINI isaretliyor. 1637 Hollanda ve 1872 Ingiltere tarihleri TDV'den DEGIL, Nationaal Archief'ten (Hollanda Ulusal Arsivi) geliyor ve govdesi okundu: 'In 1637 komt het fort in bezit van de Hollanders' / 'tot Nederland het fort in 1872 aan Engeland verkoopt'. kaynak: alani yalniz TDV slug'i tasidigi icin oraya bulunamadi yazdim, gercek dayanak bu satirdadir. 1482 kurulusu IKI BAGIMSIZ KAYNAKTA birden var (TDV gana + Nationaal Archief)." },

// ═════════════════ ORTA AFRİKA — KONGO HAVZASININ 1281 BOŞLUĞU ═════════════════
//
// 🔴 ÖLÇÜM ÖNCE, HÜKÜM SONRA (B10 — ikisi ayrı satır):
//   ÖLÇTÜM: Kongo havzasında (lat -11..4 / lon 8..30) 1281-06-15'te SAHNEDE
//     olan nokta sayısı **SIFIR**. Bölgedeki 18 noktanın hepsinin `kur:`ı
//     1390 ya da sonrası (Mbanza-Kongo · Matadi · Soyo 1390 · Ndongo/Kabasa
//     1500 · Loango 1550 · Luanda 1575 · Luba/Kabongo 1585 · Kuba/Mushenge
//     1625 · Lunda/Musumba 1665 · Boma · Kisangani 1885).
//   ÇIKARDIM: yani Kongo havzası 1281'de nokta olarak BOŞ değil, **YOK** —
//     ve §2 gereği o toprak en yakın peteğe emilir, yani başka birinin
//     rengiyle boyanır. Bu, boş bırakmaktan KÖTÜDÜR.
//
// ⇒ Aşağıdaki beş kayıt `tur:"bolge"` DOLGU NOKTASIDIR — şehir DEĞİL, ve
//   şehirmiş gibi de yazılmadı. Görevleri tek: 1281'de o toprağın uzaktaki
//   bir komşuya emilmesini engellemek ve boşluğun KENDİSİNİ kayda geçirmek.
//   (CLAUDE.md: Sahra ve Rub'ul Hâlî için aynı device kullanılmış, 34 dolgu
//    noktası tam bu sebeple konmuş.)
//   📌 "Sahipsiz nokta hiç değilse 'burada kimse yok' diyor; noktasızlık
//      'burada komşum var' diye YALAN söylüyor."
//
// 🔴 VE BİR TDV ÇELİŞKİSİ BULDUM — ÇÖZMÜYORUM, BİLDİRİYORUM:
//   TDV `kongo-demokratik-cumhuriyeti` maddesi (gövdesi okundu):
//     "XIII. yüzyılda Atlas Okyanusu sahilinde kurulan Kongo Krallığı"
//   Bizim künyemiz  kongo-kralligi  f:1390-01-01.
//   ⇒ TDV XIII. yüzyıl diyor, künye XIV. yüzyıl sonu diyor. Aradaki fark
//     ~110 yıl ve TAM DA 1281'i kapsıyor. TDV haklıysa Kongo Krallığı
//     1281'de VARDI ve Mbanza-Kongo'nun `kur:1390`ı da geç.
//   ⚠️ Ne künyeye ne Mbanza-Kongo'ya dokunabilirim (ikisi de başka
//     oturumların dosyası). §3.5 gereği künye dışına dönem YAZMADIM.
//     Karar koordinatörde; bu satır o kararın dayanağıdır.
//
// ⚠️ TDV'nin bu bölgedeki kapsaması ÖLÇÜLDÜ ve İNCE: `kongo` · `angola` ·
//   `luba` · `lunda` · `bantu` · `orta-afrika` sluglarının HEPSİ ÖLÜ (302).
//   `zaire` CANLI ama GÖVDESİZ — `kongo-demokratik-cumhuriyeti`ne çapraz
//   atıf (§4③, bu dosyada yakaladığım ÜÇÜNCÜ vaka: songay · dahomey · zaire).
//   Genel madde de sömürge öncesi için neredeyse SUSUYOR: Luba'yı adıyla
//   anıyor ("XVI. yüzyıla kadar hüküm sürdü"), Lunda'yı hiç anmıyor,
//   başkent vermiyor, 13.-14. yüzyıl siyasî yapısını tartışmıyor.
//   ⇒ Çukotka/Yakut sınavı: **kaynak SUSUYOR ⇒ `veri-yok`.** Beşi de o kovada.

// UPEMBA (Kisale) HAVZASI — proto-Luba'nın arkeolojik çekirdeği, Katanga.
{ ad:"Upemba (Kisale) havzası", tur:"bolge", lat:-8.450, lon:26.550, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — TDV'nin okuyabildigim maddeleri (kongo-demokratik-cumhuriyeti, zaire) bu havzanin 1281 civarindaki siyasi orgutlenmesini HIC TARTISMIYOR; Luba'yi yalniz 'XVI. yuzyila kadar hukum surdu' diye aniyor, oncesi icin SUSUYOR. Bizim luba kunyemiz de f:1585. Devletsiz OLDUGU soylenmiyor, bilinmedigi soyleniyor. DOLGU NOKTASIDIR, sehir degil: gorevi 1281'de bu topragin uzak bir komsuya emilmesini engellemek." },

// MALEBO HAVUZU (Stanley Pool) — Kongo nehrinin genişlediği havuz; Teke/Tio
// yaylasının güney kapısı ve havzanın en belirgin coğrafî düğümü.
{ ad:"Malebo Havuzu (Teke)", tur:"bolge", lat:-4.270, lon:15.350, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesi 13.-14. yuzyil siyasi yapisini tartismiyor; Teke/Tio krallığını hic anmiyor. DOLGU NOKTASIDIR. ⚠️ VE BURADA BIR CELISKI VAR ve onu COZMUYORUM — ayni TDV maddesi 'XIII. yuzyilda Atlas Okyanusu sahilinde kurulan Kongo Kralligi' diyor, oysa kongo-kralligi kunyesi f:1390-01-01. TDV hakliysa 1281'de burasi bos DEGIL. Kunyeye dokunmak benim yetkim disinda." },

// KASAİ HAVZASI — Kuba ve Lunda'nın kuzeybatı kuşağı.
{ ad:"Kasai havzası", tur:"bolge", lat:-5.000, lon:22.500, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — kaynak SUSUYOR. Bolgenin bilinen iki devleti kuba (kunye f:1625) ve lunda (f:1665); ikisi de 1281'den ~350 yil SONRA. Oncesi icin TDV'de de kunyede de bilgi YOK. DOLGU NOKTASIDIR." },

// OGOOUÉ havzası — Gabon içi, Loango'nun kuzey kuşağı.
// 🟢 GÖVDE OKUNDU (ikinci turda) ve `veri-yok` hükmümü DOĞRULADI:
//   TDV `gabon` maddesi sömürge öncesi siyasî yapı için **açıkça susuyor** —
//   Ogooué havzasında krallık/şeflik anmıyor, Loango ve Orungu ile ilişkiyi
//   hiç kurmuyor. ⇒ Çukotka/Yakut sınavı: kaynak SUSUYOR ⇒ `veri-yok`. ✓
//   📌 Ve bu bir tahminin doğrulanması değil, **ölçülmesidir**: ilk turda
//     "okumadım" diye işaretlemiştim; okuyunca hüküm değişmedi ama artık
//     dayanağı var.
// 🟢 VE MADDE BİR TARİH VERDİ, boşluk 86 yıl kısaldı:
//   "Fransız himaye idaresi 1837'de başladı" · Fransız Ekvator Afrikası 1910
{ ad:"Ogooué havzası", tur:"bolge", lat:-0.700, lon:12.000, g:0, k:0,
  s:[{f:"1837-01-01", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"gabon"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — 1281-1837 arasi sahipsiz ve gerekcesi OLCULDU: TDV gabon maddesinin govdesi okundu ve somurge oncesi siyasi orgutlenme icin ACIKCA SUSUYOR (Ogooue havzasinda krallik/seflik anmiyor, Orungu'yu hic kurmuyor). Devletsiz OLDUGU soylenmiyor, bilinmedigi soyleniyor. loango kunyesi f:1550, 1281 icin karsiliksiz. DOLGU NOKTASIDIR, sehir degil." },

// UBANGİ-UELE havzası — havzanın kuzey kenarı, Sudan kuşağının güneyi.
{ ad:"Ubangi-Uele havzası", tur:"bolge", lat:3.500, lon:22.000, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesinin bu kusakta verdigi tek sey Mangbetu Kralligi (1815) — yani 1281'den 534 yil sonrasi. DOLGU NOKTASIDIR. Kuzeydeki komsulari (Yambio, Tembura, Maridi) `kabile` kovasinda; ben `veri-yok` yazdim cunku kaynagim bu havza icin KONUSMUYOR, oysa `kabile` diyebilmek icin kaynagin kabile duzeninden SOZ ETMESI gerekirdi." },

// ═════════════════ BUGANDA — ve ŞARTNAMEMLE ÇELİŞTİĞİMİ AÇIKÇA YAZIYORUM ═════════════════
//
// 🔴 Şartnamem diyor ki: "Doğu Afrika iç bölgesi DOLU (94 nokta) — oraya
//   dokunma." ÖLÇTÜM ve o cümle Büyük Göller için TUTMUYOR:
//     Buganda kutusunda (lat -3..4 / lon 29..35) nokta sayısı: **1**
//     ve o da Nimule (3,600 / 32,058), Güney Sudan'da, `bos:devletsiz`.
//   ⇒ 94 noktanın 94'ü Habeşistan · Nûbe · Sudan · Svahili kıyısındaydı.
//     "Doğu Afrika dolu" ölçümü DOĞRU, evreni DAR (CLAUDE.md §11).
//
// 🟢 Ve şartnamemin kendisi Buganda'yı §③.2'de ADIYLA istiyor — yani iki
//   maddesi çelişiyor. Ölçüme uydum, yasağa değil, ve çelişkiyi buraya
//   yazdım ki koordinatör tek kaydı geri almak isterse maliyeti sıfır olsun.
//
// buganda künyesi: f:1300-01-01 · t:1923-10-29 (RENK YOK — renk kuyruğunda).
// 🟢 GÖVDE OKUNDU (ikinci turda) ve İKİ ŞEY BİRDEN ÇIKTI:
//   ① İNGİLİZ TARİHİ KAYNAKLI: "1900 yılında İngilizler'le yapılan
//      antlaşmayla Buganda toprakları resmen sömürgeleştirildi."
//      ⇒ İlk turda `bulunamadi` yazdığım alan artık `uganda`.
//   ② VE İKİNCİ BİR KÜNYE ÇELİŞKİSİ — bu dosyadaki İKİNCİSİ (öteki Kongo):
//      TDV  "İlk kralının XIII. yüzyıl başlarında tahta çıkan Kato Kimera
//            olduğu bilinmektedir"
//      künye buganda f:1300-01-01
//      ⇒ TDV XIII. yüzyıl BAŞI diyor (~1200-1230), künye 1300 diyor.
//        Yani TDV'ye göre Buganda 1281'de VARDI; künyeye göre YOKTU.
//      §3.5 gereği künyeye uydum ve `kur:1300` yazdım — ama bu, TDV'nin
//      1281'i kapsayan ifadesini SİLMEK demektir ve bunu görünür kılmadan
//      geçmiyorum. Karar koordinatörde; künye benim dosyam değil.
// ⚠️ Nokta Mengo/Kampala kuşağına kondu; Kabaka'nın başşehri sık taşındığı
//   için bu bir ÖZDEŞLEŞTİRMEDİR — Buganda'nın çekirdek bölgesidir.
{ ad:"Mengo (Buganda)", tur:"sehir", lat:0.348, lon:32.583, g:0, k:1,
  kur:"1300-01-01",
  s:[{f:"1300-01-01", t:"1900-01-01", d:"buganda", kaynak:"uganda"},
     {f:"1900-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"uganda"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — sahipsiz araligi YOK, bu bayrak bir KUNYE CELISKISINI isaretliyor: TDV uganda maddesi Buganda'nin ilk krali Kato Kimera'nin XIII. yuzyil BASINDA tahta ciktigini soyluyor, yani 1281'de kralik VARDI; ama buganda kunyesi f:1300-01-01. §3.5 geregi kunyeye uydum (kur:1300), boylece TDV'nin 1281'i kapsayan ifadesi veriye INMEDI. Kunye duzeltilirse kur: 1281 oncesine cekilmeli. Ingiliz donemi KAYNAKLI: 1900 antlasmasi." },

// ═════════════════ GÜNEY AFRİKA — HEPSİ PENCERE DIŞI, ve BİLEREK ═════════════════
//
// 🔴 ÖNCE ÖLÇÜM: harita penceresi `box(-12,-11,146,82)` ⇒ **lat -11'in altı
//   KAPSAM DIŞI.** Aşağıdaki altı noktanın ALTISI da orada. Yani bu kayıtlar
//   bugün haritada **hiçbir şey boyamayacak.**
//
// 🟢 Ve yine de yazıldılar — koordinatörün açık talimatıyla (tahta M-0218),
//   gerekçesi Emre'nin kendi sözü:
//     "Korkma, varsın karşın noktası Çin'i boyasın — ki boyayamaz. Ama en
//      azından nerelerde nokta ihtiyacımız olduğu direkt görünür."
//   `denetle.py` pencere dışını zaten AYRI KOVADA sayıyor: *"ihlal DEĞİL,
//   pencere oraya açılana kadar BEKLEYEN veri"* — bugün o kovada 144 nokta
//   var ve `Sofala` onlardan biri. Bunlar ona katılır ve **pencere büyüyünce
//   KENDİLİĞİNDEN canlanır.** Araştırılmış doğru veriyi bekletmek, onu
//   yeniden araştırmaktan pahalıdır.
//
// ⚠️ KÜNYESİZ KİMLİK KULLANDIM ve bu bilinçli: `zimbabve-kralligi` · `mutapa` ·
//   `transvaal` · `oranj` künyeleri `devletler.js`te YOK. Koordinatör
//   "çekinme, `Değişmez 4` onu *künyesiz* diye ayrı kovaya koyuyor — ihlal
//   değil, *ölçülemedi* — künyeyi ben yazacağım" dedi (M-0218).
//   📌 Bölgenin `guney-afrika` künyesi ÖLÇÜLDÜ: **bir tane** var, o da
//     `zulu-kralligi` (1816-01-01 → 1879-07-04) ve **rengi yok.**

// KAP (Cape Town) — bu bloğun EN SAĞLAM kaydı: dört kırılmanın DÖRDÜ de kaynaklı.
// TDV `guney-afrika-cumhuriyeti` (gövdesi okundu):
//   1648  "Güneydoğu Asya'daki kolonilere göçmen götüren bir Hollanda
//          gemisinin fırtınaya yakalanıp Kaap (Cape) yarımadası sahillerinde
//          kayalara bindirmesi" — kuruluşun sebebi
//   1652  Jan van Riebeeck kaleyi kurdu   ⇒ `kur:`
//   1795  İngiliz işgali · 1802 Amiens ile Hollanda'ya İADE ·
//   1806  İngilizler yeniden aldı · 1814 Paris antlaşmasıyla resmen İngiliz
// 📌 1802-1806 arasındaki KISA Hollanda dönemini atlamadım: dört yıllık bir
//   aralık ve kaynağın kendisi onu ayrı bir kırılma olarak veriyor.
//   Sadeleştirmek, kaynağı sadeleştirmek olurdu.
{ ad:"Kap (Cape Town)", tur:"liman", lat:-33.925, lon:18.424, g:1, k:1,
  kur:"1652-01-01",
  s:[{f:"1652-01-01", t:"1795-01-01", d:"hollanda",  kaynak:"guney-afrika-cumhuriyeti"},
     {f:"1795-01-01", t:"1802-01-01", d:"ingiltere", kaynak:"guney-afrika-cumhuriyeti"},
     {f:"1802-01-01", t:"1806-01-01", d:"hollanda",  kaynak:"guney-afrika-cumhuriyeti"},
     {f:"1806-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"guney-afrika-cumhuriyeti"}],
  d:[], v:[] },

// BÜYÜK ZİMBABVE — 1281'de AYAKTA, ve şartnamemin §③.1'inin adıyla istediği yer.
// TDV `zimbabve` (gövdesi okundu):
//   Karanga medeniyeti · "Mwene Mutapa" XV. yüzyılın ikinci yarısında geniş
//   bir imparatorluk kurdu
//   "XVII. yüzyılın sonlarında Portekizliler'in gittikçe artan baskısı ve
//    Çanga liderliğindeki Rozvi hânedanının yükselişiyle ortadan kalktı"
// 🔴 TDV Büyük Zimbabve'nin KENDİ kuruluş ve TERK yılını VERMİYOR — bu
//   yüzden `kur:` yazmadım (yer 1281'de zaten ayakta) ve terk için `bit:`
//   de yazmadım. Uydurma bir terk tarihi, sahipsiz bir aralıktan kötüdür.
// 🔴 1700 SONRASI BİLEREK SAHİPSİZ: TDV Rozvi hânedanını ADIYLA anıyor
//   ("Çanga liderliğindeki Rozvi") ama ne başlangıç ne bitiş yılı veriyor,
//   ve `rozvi` künyesi de yok. İki eksik üst üste ⇒ dönem YAZILMADI.
{ ad:"Büyük Zimbabve", tur:"sehir", lat:-20.267, lon:30.933, g:1, k:1,
  s:[{f:"1281-01-01", t:"1450-01-01", d:"zimbabve-kralligi", kaynak:"zimbabve"},
     {f:"1450-01-01", t:"1700-01-01", d:"mutapa",            kaynak:"zimbabve"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — 1700 sonrasi sahipsiz. Kaynak SUSMUYOR: TDV zimbabve maddesi Mutapa'nin 'XVII. yuzyilin sonlarinda Portekizliler'in gittikce artan baskisi ve Canga liderligindeki Rozvi hanedaninin yukselisiyle ortadan kalkti'gini yaziyor - yani ardil VAR ve ADI belli. Ama ne YIL veriyor ne de rozvi kunyesi mevcut. Ayrica kullandigim iki kimligin (zimbabve-kralligi, mutapa) kunyesi de YOK, koordinator M-0218'de yazacagini soyledi. UYARI: bu nokta PENCERE DISINDA (lat -20,267 < -11), bugun hicbir sey boyamiyor." },

// MAPUNGUBWE — Büyük Zimbabve'nin selefi, Limpopo kıyısı.
// 🔴 TDV SUSUYOR: `zimbabve` maddesinin gövdesini okudum ve Mapungubwe'yi
//   HİÇ anmıyor (Nyanga ve Gokomere yerleşimlerini sayıyor, bunu saymıyor).
//   ⇒ Çukotka/Yakut sınavı: kaynak SUSUYOR ⇒ `veri-yok`, ve `kaynak:` alanına
//     "bulunamadı" değil — koordinatörün M-0218'de doğurduğu ÜÇÜNCÜ kova:
//     *"arandı, erişilemedi"* de değil, gerçekten *"arandı, YOK"*.
// 📌 Nokta yine de yazıldı çünkü 1281'de orası boş değildi ve noktasızlık
//   §2 gereği bölgeyi uzaktaki bir komşuya emdirir.
{ ad:"Mapungubwe", tur:"sehir", lat:-22.194, lon:29.389, g:0, k:0,
  s:[], d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — arandi, YOK. TDV zimbabve maddesinin govdesi okundu ve Mapungubwe'yi HIC anmiyor (Nyanga ve Gokomere yerlesimlerini sayiyor, bunu saymiyor); baska bir TDV maddesi de bulunamadi. Devletsiz OLDUGU soylenmiyor, hic soz edilmiyor. 'Aramadim' DEGIL, 'aradim ve yok' - bu bir SONUCTUR. UYARI: PENCERE DISINDA (lat -22,194)." },

// ULUNDİ (Zululand) — bölgenin künyesi OLAN tek kimliği.
// zulu-kralligi künyesi: f:1816-01-01 · t:1879-07-04 (RENK YOK).
// 🔴 `kur:` KÜNYEYE BAĞLANDI, kaynağa değil ve farkı yazıyorum: 1816 Zulu
//   Krallığı'nın kuruluşudur, ULUNDİ ŞEHRİNİN değil (şehir daha geç kuruldu).
//   TDV `guney-afrika-cumhuriyeti` Zulu direnişini anıyor ama **Shaka'yı da
//   Ulundi savaşını da tartışmıyor** — maddenin kendi eksiği, ölçtüm.
// 📌 Künyenin bitişi 1879-07-04 zaten Ulundi Muharebesi'nin günüdür; İngiliz
//   dönemini oradan başlattım, yani tarih künyenin kendi verisinden geliyor.
{ ad:"Ulundi (Zululand)", tur:"sehir", lat:-28.313, lon:31.416, g:0, k:1,
  kur:"1816-01-01",
  s:[{f:"1816-01-01", t:"1879-07-04", d:"zulu-kralligi", kaynak:"bulunamadi"},
     {f:"1879-07-04", t:"1923-10-29", d:"ingiltere",     kaynak:"guney-afrika-cumhuriyeti"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"veri-yok — sahipsiz araligi YOK; bayrak KAYNAK eksigini isaretliyor. TDV guney-afrika-cumhuriyeti maddesi Zulu direnisini aniyor ama Shaka'yi da Ulundi Muharebesi'ni de TARTISMIYOR (govdesi okundu, olctum). Zulu donemi bu yuzden kaynak:bulunamadi; sinirlari zulu-kralligi kunyesinden (f:1816 t:1879-07-04) alindi. kur:1816 SEHRIN degil KRALLIGIN kurulusudur. UYARI: PENCERE DISINDA (lat -28,313)." },

// TRANSVAAL ve ORANJ — Büyük Göç'ün doğurduğu iki Bur cumhuriyeti.
// TDV `guney-afrika-cumhuriyeti`: "1830'da birçoğu İngiliz yönetiminden
//   ayrılarak kuzeye ve doğuya doğru göç etmeye başladı" ⇒ Natal, Transvaal,
//   Oranj. Bur Savaşları 1899-1902, Bur yenilgisi. 1910'da dördü birleşerek
//   "İngiltere'ye bağlı Güney Afrika Birliği Devleti"ni kurdu.
// 🔴 İKİSİ DE `tur:"bolge"` — Pretoria ve Bloemfontein'in KURULUŞ yıllarını
//   TDV vermiyor, o yüzden şehir olarak yazmadım. Bunlar bölge dolgusudur ve
//   koordinatları ilgili cumhuriyetin merkez kuşağındadır.
// 📌 `kur:1830` kaynaklıdır (Büyük Göç'ün başlangıcı) ama CUMHURİYETİN değil
//   GÖÇÜN yılıdır; noktayı sahneye o an sokmak, 1281'de hayalet bırakmaktan
//   iyidir (Değişmez 5).
// ⚠️ NATAL YAZILMADI: TDV üçünü birlikte sayıyor ama Natal İngiliz idaresine
//   ötekilerden çok daha erken geçti ve o tarihi vermiyor; 1902'ye kadar Bur
//   yazmak yalan olurdu.
{ ad:"Transvaal (Bur cumhuriyeti)", tur:"bolge", lat:-25.746, lon:28.188, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01", t:"1902-01-01", d:"transvaal", kaynak:"guney-afrika-cumhuriyeti"},
     {f:"1902-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"guney-afrika-cumhuriyeti"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — transvaal kunyesi devletler.js'te YOK (koordinator M-0218'de yazacagini soyledi). Sahipsiz araligi yok. kur:1830 Buyuk Goc'un baslangicidir, CUMHURIYETIN kurulus yili DEGIL - TDV cumhuriyetlerin kurulus yillarini vermiyor. tur:bolge cunku Pretoria'nin kurulus yili da yok. UYARI: PENCERE DISINDA (lat -25,746)." },

{ ad:"Oranj (Bur cumhuriyeti)", tur:"bolge", lat:-29.120, lon:26.214, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01", t:"1902-01-01", d:"oranj",     kaynak:"guney-afrika-cumhuriyeti"},
     {f:"1902-01-01", t:"1923-10-29", d:"ingiltere", kaynak:"guney-afrika-cumhuriyeti"}],
  d:[], v:[],
  bos:"veri-yok",
  neden:"kunye-yok — oranj kunyesi devletler.js'te YOK. Transvaal kaydiyla ayni gerekce: kur:1830 Buyuk Goc'un yili ve tur alani bolge, cunku Bloemfontein'in kurulus yili TDV'de yok. UYARI: PENCERE DISINDA (lat -29,120)." },

];

// ═════════════════ YAZILMAYANLAR — ALTISI DA GEREKÇESİYLE ═════════════════
//
// 📌 Bunlar "araştırılmadı" DEĞİL, "arandı ve şu sebeple yazılamadı" —
//    ve bu bir SONUÇTUR. Bir sonraki oturum bunları sıfırdan aramasın.
//
// NJİMİ         Kanem'in 1281'deki BAŞŞEHRİ. Yeri arkeolojik olarak
//               TARTIŞMALI (Tié / Bahrülgazal kuşağında birkaç aday var) ve
//               belirsizlik onlarca km. TDV `njimi` slug'i OLU (302).
//               ⇒ Uydurma koordinat yazmak yerine Kanem'i MAO ile temsil
//                 ettim ve bunun bir ozdeslestirme oldugunu Mao kaydinda
//                 acikca yazdim. kaynak: bulunamadi.
//
// KUKAVA        Bornu'nun 19. yuzyil basşehri (Kanemi). TDV `bornu` maddesi
//               sehri "fiilî başşehir" diye ANIYOR ama KURULUS YILINI
//               VERMIYOR, ve `kukava` slug'i OLU (302).
//               ⇒ `kur:` olmadan yazsaydim nokta 1281'de sahneye cikardi
//                 (Degismez 5, 62 hayalet vakasi). Kurulus yilini
//                 uydurmamak icin YAZILMADI. Bornu'yu Birni N'gazargamu
//                 temsil ediyor ve onun `kur:`i KAYNAKLI (1465).
//
// HAMDULLAHİ    Massina Devleti'nin basşehri. TDV `mali` devleti ADIYLA
//               sayiyor ("Massina Devleti: Ahmedü Lobbo tarafindan
//               kurulmus"), TDV `cenne` 1830 cami insasini veriyor — ama
//               SEHRIN kurulus yili hicbirinde YOK, ve `massina` ·
//               `hamdullahi` sluglari OLU (302).
//               ⇒ Ustelik `massina` kunyesi de YOK; yazilsa sahipsiz bir
//                 nokta olurdu. Iki eksik ust uste geldi. YAZILMADI.
//
// VAGADUGU      Mossi krallıklarının merkezi. `mossi` ve `vagadugu`
//               sluglari OLU (302), kunye de YOK, hicbir tarih bulunamadi.
//               ⇒ Uc eksik ust uste. YAZILMADI. kaynak: bulunamadi.
//
// VİDA (Ouidah) TDV `benin` maddesi sehri ADIYLA aniyor ama Dahomey'in
// ve ALLADA     onlari hangi yil aldigini VERMIYOR; `allada` icin kunye de
//               yok. Uc nokta (Abomey · Vida · Allada) 40 km'lik bir ucgen
//               icinde ve ikisi tarihsiz kalacakti.
//               ⇒ Bolgeyi ABOMEY temsil ediyor (kaynakli, kunyeli).
//                 Otekiler YAZILMADI.
//
// İLORİN        TDV `sokoto` emirlikler arasinda ADIYLA sayiyor ama tarih
//               vermiyor; `ilorin` slug'i OLU (302). Oyo-Ile bolgeyi zaten
//               temsil ediyor. YAZILMADI.
//
// ⚠️ ELMİNA ARTIK BU LISTEDE DEGIL — YAZILDI. Asagidaki kayit onun
//    KAPANMIS halidir ve SILINMEDI, cunku nasil kapandigi bir derstir:
//    "erisemedim" kovasi noktayi KAPATMADI, ve tekrar denenince acildi.
//    Yeni kayit yukarida, Bati Afrika blogunun sonunda.
//
// ELMİNA (KAPANDI)  🟡 UCUNCU KOVA — "ARADIM, ERISEMEDIM" (koordinatorun M-0218'de
//               dogurdugu ayrim; bu onun ILK canli kullanimi).
//               TDV `elmina` slug'i OLU (302) AMA genel `gana` maddesinin
//               govdesi iki tarih VERIYOR ve okudum:
//                 "1471: Portuguese arrive" · "1482: Fort built at Elmina"
//               ⇒ Yani KURULUS kaynakli (kur:1482) ve `portekiz` kunyesi de
//                 rengi de hazir. Nokta YAZILABILIRDI.
//               🔴 YAZILMADI, cunku DONEMIN BITISI yok: kale 1637'de
//                 Hollandalilar'a, 1872'de Ingilizler'e gecti ve bu iki tarih
//                 icin TDV'de hicbir sey yok. `portekiz`i 1874'e kadar
//                 yazmak 237 YILLIK bir yalan olurdu.
//               🟡 Akademik yol DENENDI ve ERISILEMEDI: UNESCO Dunya Mirasi
//                 kaydi (whc.unesco.org/en/list/34, "Forts and Castles...")
//                 IKI KEZ HTTP 403 dondu. Kirmizi cizgi geregi forum/blog/
//                 icerik ciftligine GITMEDIM.
//               ⇒ kaynak: "bulunamadi — arandi, ERISILEMEDI"
//                 Bu "aradim, yok" DEGIL: kaynak VAR ve erisilebilir hale
//                 gelirse nokta TEK OTURUMDA yazilir. Ikisini karistirmak,
//                 erisilebilir bir kaynagi sonsuza kadar kapatirdi.
//
// KUMBİ SALİH   Gane (ortacag Gana) Imparatorlugu'nun basşehri. TDV `gane`
//               maddesi zengin (1054 Awdagust · 1076 Murabitlar Gane
//               sehrini aldi · XIII. yy basi Susu · XIII. yy ortasi Mali)
//               — AMA HEPSI 1281'DEN ONCE. Devlet bizim ufkumuz baslamadan
//               bitmis. ⇒ Atlas 1281-1923 tasiyor; YAZILMADI. Bu bir eksik
//               degil, KAPSAM DISI olmasidir.
//
// ═════════════════ TIMBUKTU — BENIM KAYDIM DEGIL, ama TDV'den CIKARDIGIM ═════════════════
// yerlesimler.js'teki Timbuktu kaydi BOS (s:[] d:[] v:[], kur: yok, bos: yok)
// ve VERI ZAMAN'in dosyasinda. Dokunmadim. Asagidakiler o kaydi dolduracak
// oturum icin, TDV `tinbuktu` maddesinden CIKARILMIS ham veridir:
//   XI. yy sonu  sehrin kurulusu ("XI. yüzyılın sonlarına kadar iner")
//   1329         Mansa Musa'nin ilhaki  ⇒ mali-imparatorlugu
//   1353         Ibn Battuta'nin ziyareti (kirilma degil, teyit)
//   1430         Tevarikler aldi (TDV `mali` de ayni yili veriyor)
//   1468         Sonni Ali aldi        ⇒ songhay-imparatorlugu
//   1591         Tondibi · Ahmed el-Mansur ⇒ fas
//   1750         yerli "arma" idaresi · 1760 ve 1792 Tevarik
//   1894         Fransiz ilhaki
// 🔴 VE BIR CELISKI VAR, COZMUYORUM: TDV `tinbuktu` Fransiz ilhaki icin
//   1894 diyor, TDV `mali` ise "Tinbüktü, Gao, Bourem ve Mopti (1898-1900)"
//   diyor. AYNI SEHIR, DORT YIL FARK. Iki TDV maddesi celisiyor; hangisinin
//   esas alinacagina karar vermek benim yetkim degil (§7.1: kaynaklar
//   celisiyorsa hangisini sececegine sen karar verme).

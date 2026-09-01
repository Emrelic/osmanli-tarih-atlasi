// ============================================================================
// YERLESIMLER_OK107 — OPUS HAZIR KITA 107 · NOKTA PARTİSİ
// Görev: 1.MURAT HÜDAVENDİGAR · tahta M-1903 sonrası sevk
// Kaynak partisi: parti-emrelic-0033 · H-0006 · H-0013 · H-0014 · H-0019
//
// 🔴 AD ALANI dosya adından türetildi (`ok107`) — `CLAUDE.md §7`:
//    "ayrı dosya vermek, ayrı ad alanı vermek DEĞİLDİR."
// 🔴 BAĞLAMAYI BEN YAPMADIM. `girdi.py` kilitli; koordinatör bağlayacak.
//
// ═══ KABUL KAPISI — 14 kaydın 14'ü için ÖLÇÜLDÜ ═══
//   3 km kuralı        : en yakın komşu 15,7 km (Sayram↔Çimkent) — İHLAL YOK
//   ad çakışması       : 0
//   kimlik künyesi     : kullandığım her `d:` kimliği `devletler.js`te VAR
//   kimlik rengi       : her biri `renkler.py` BOYALAR'da VAR
//   `d:` kırılma günü  : hepsi külliyatta MADDESİ OLAN günler (Değişmez 2)
//
// ═══ YÖNTEM — iki kural, ikisi de `CLAUDE.md §4`ten ═══
//  ① TDV maddesi VARSA gövdesi OKUNDU, tarih ORADAN alındı.
//  ② TDV o TANECİKTE susuyorsa (§4 "tanecik boşluğu"), dönem günleri EN YAKIN
//    ÇAPA KAYDIN kendi günlerinden alındı ve bu her kayıtta AÇIKÇA yazıldı.
//    Uydurulmuş TEK BİR GÜN YOK. Kendi günü bulunamayan yerde `kaynak:` alanı
//    `bulunamadı` diye başlar — `§4`: "bulunamadı bir SONUÇTUR."
//
// ⚠️ YAZILMAYANLAR ve niçin (rapora da geçti):
//    Almalık · Balasagun · Otrar · Sığnak — dördü de atlasın penceresi
//      İÇİNDE harap olup terk edildi. `bit:` alanı var ama TDV bu dördü için
//      YOK OLUŞ GÜNÜ VERMİYOR. `bit:`siz yazmak `§3.5` hayalet sınıfını
//      üretirdi: 1923'e kadar boyanan bir harabe.
//    Njimi (Kanem'in ilk başşehri) — KOORDİNATI kesin değil; yeri hâlâ
//      tartışmalı. Yanlış koordinat, `§2` emilmesini yanlış yöne çeker.
//    Akabe — H-0019 penceresinin (24,28-28,88K) DIŞINDA, ve TDV `akabe`
//      maddesi Akabe biatlarını anlatıyor, kasabayı değil.
// ============================================================================
window.YERLESIMLER_OK107 = [

// ─────────────────────────────────────────────── ① GÜNEYDOĞU ANADOLU (4)
// H-0015/H-0016 bölgesi. Ölçtüm: Cizre · Siirt · Hasankeyf · Midyat'ın
// DÖRDÜ DE atlasta yoktu; Cizre bir beylik merkezi ve TDV'de tam maddesi var.

{ ad:"Cizre", tur:"sehir", lat:37.330, lon:42.190, k:3, m:null,
  // TDV `cizre` (200, gövde 21.402 kr, okundu):
  //   "1469 yılında Karakoyunlular ve daha sonra Akkoyunlular bölgeye hâkim
  //    oldular." · "1508'de Cizre'yi Akkoyunlular'dan alan Emîr II. Şeref,
  //    şehirdeki mahallî yönetimi yeniden tesis etti." · "Şeref'ten sonra
  //    Cizre beyi olan Emîr Ali Bey döneminde kısa bir süre için Şah
  //    İsmâil'in idaresi altına giren şehir Ali Bey tarafından tekrar geri
  //    alındı." · "Yavuz Sultan Selim … Cizre'yi de aldı. O sırada Cizre'nin
  //    başında bulunan Ali Bey Yavuz Sultan Selim'e bağlılık arzetti."
  // 🔴 1508-1515 BİLEREK BOŞ: Cizre (Bohtan) emirliğinin künyesi YOK.
  // 🔴 İLK YAZIŞIM `ilhanli 1281→1469` idi ve KENDİ KAPIM ÇÜRÜTTÜ: İlhanlı
  //   künyesi 1353'te bitiyor ⇒ 116 YILLIK HAYALET (`§3.5`). Zincir künye
  //   pencerelerine oturtuldu; ara halkalar (celayirli · karakoyunlu)
  //   TDV'de Cizre için ADIYLA geçmiyor, bölgesel (Bitlis · Mardin
  //   kayıtlarının aynı halkaları). Bu bir HİZALAMADIR, kaynak değil.
  s:[{f:"1281-01-01",t:"1353-01-01",d:"ilhanli"},
     {f:"1353-01-01",t:"1431-01-01",d:"celayirli"},
     {f:"1431-01-01",t:"1469-01-01",d:"karakoyunlu"},
     {f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"}],
  d:[{f:"1515-09-19",t:"1923-10-29"}],
  v:[], kaynak:"cizre",
  bos:"veri-yok",
  neden:"kunye-yok — 1508-01-01 / 1515-09-19 arasi (7,7 yil) BILEREK bos. TDV cizre maddesi bu araligi ACIKCA anlatiyor: Emir II. Seref 1508'de sehri Akkoyunlulardan aliyor ve MAHALLI YONETIMI yeniden kuruyor, arada kisa bir Sah Ismail idaresi var ama TDV gununu VERMIYOR. Yani kaynak KONUSUYOR, devletler.js'te Cizre/Bohtan emirligi kunyesi YOK. Kunye yazilirsa bu bosluk kapanir — KUNYE ONERISI raporda."
},

{ ad:"Siirt", tur:"sehir", lat:37.930, lon:41.940, k:3, m:null,
  // TDV `siirt` (200, gövde 15.849 kr, okundu):
  //   "İlhanlılar'ın ve onların halefleri durumundaki Celâyirliler'in
  //    hâkimiyeti altına giren Siirt, Timur istilâsını da gördükten sonra
  //    866'ya (1462) doğru Akkoyunlular tarafından ele geçirildi."
  //   "XVI. yüzyılın başlarında Safevîler'in eline geçti."
  //   "Yavuz Sultan Selim'in Çaldıran'da … kazandığı zafer sonrasında
  //    (920/1514) Siirt çevredeki başka yerlerle birlikte Osmanlı
  //    topraklarına katıldı."
  // 1514-09-06: atlasın kendi günü (Doğubayazıt d:, 19 kayıt aynı gün) ve
  // TDV'nin 920/1514'ü ile uyuşuyor. 1507: bölgenin Safevî günü (Diyarbakır ·
  // Mardin · Palu · Siverek · Urfa hepsi bunu kullanıyor).
  // 🔴 İLK YAZIŞIM `celayirli 1340→1462` idi; Celâyirli künyesi 1431'de
  //   bitiyor ⇒ 31 yıllık hayalet. Kapı yakaladı, zincire karakoyunlu
  //   halkası eklendi (Bitlis'in kendi halkası; TDV Siirt için ADIYLA
  //   söylemiyor — bölgesel HİZALAMA, kaynak değil).
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
     {f:"1340-01-01",t:"1431-01-01",d:"celayirli"},
     {f:"1431-01-01",t:"1462-01-01",d:"karakoyunlu"},
     {f:"1462-01-01",t:"1507-01-01",d:"akkoyunlu"},
     {f:"1507-01-01",t:"1514-09-06",d:"safevi"}],
  d:[{f:"1514-09-06",t:"1923-10-29"}],
  v:[], kaynak:"siirt"
},

{ ad:"Hasankeyf", tur:"kale", lat:37.714, lon:41.412, k:3, m:null,
  // TDV `hasankeyf` (200, gövde 24.655 kr, okundu). 🔴 `hisnikeyfa` slugu da
  // 200 döndürüyor ama gövdesi 2.387 karakter ve konuyla ilgili tek kelime
  // içermiyor — `§4` tuzak ④ (canlı slug, boilerplate gövde). Doğru slug bu.
  //   "…el-Melikü'l-Kâmil … Hasankeyf'i zaptederek Artuklular'ın buradaki
  //    hâkimiyetine son verdi ve şehri oğlu el-Melikü's-Sâlih'in idaresine
  //    bıraktı (629/1232)."
  //   "Akkoyunlu Beyi Uzun Hasan tarafından zaptedilen şehir 1501'den sonra
  //    Safevîler'in nüfuz alanında kaldı."
  //   "Melik Halîl … Mısır seferi sırasında (1517) Mardin'in fethinin
  //    ardından Osmanlılar'ın desteğiyle Hasankeyf'i ele geçirdi. Şehrin
  //    idaresi ona bırakıldı ve böylece burada Osmanlı dönemi başladı."
  // 🔴 1281-1462 BİLEREK BOŞ ve BU BÜYÜK BİR DELİK (181 yıl): Hasankeyf
  //   Eyyûbîleri'nin künyesi YOK (`eyyubi` diye bir kayıt aradım, YOK).
  //   ⚠️ KOORDİNATÖRE: bu tek kayıt, bugün komşularının boyadığı bir alanda
  //   YENİ BİR DELİK açar. `eyyubi` künyesi yazılana kadar bu kaydı
  //   dosyadan çıkarmak tek satırlık iştir; kararı sana bırakıyorum.
  s:[{f:"1462-01-01",t:"1507-01-01",d:"akkoyunlu"},
     {f:"1507-01-01",t:"1517-05-01",d:"safevi"}],
  d:[{f:"1517-05-01",t:"1923-10-29"}],
  v:[], kaynak:"hasankeyf",
  bos:"veri-yok",
  neden:"kunye-yok — 1281-01-01 / 1462-01-01 arasi (181 yil) BILEREK bos. TDV hasankeyf maddesi bu araligi ACIKCA anlatiyor: 1232'den itibaren Hasankeyf EYYUBI melikleri sehri yonetiyor ve Karakoyunlu/Akkoyunlu'ya zaman zaman baglanarak varliklarini surduruyorlar. Yani kaynak KONUSUYOR; devletler.js'te `eyyubi` kunyesi YOK. 1462 gunu Siirt'in TDV'de verilen Akkoyunlu yilindan alindi (iki sehir 60 km); Uzun Hasan'in Hasankeyf'i zapt gunu TDV'de YOK. KUNYE ONERISI raporda."
},

{ ad:"Midyat", tur:"kasaba", lat:37.418, lon:41.372, k:4, m:"Mardin",
  // 🔴 TDV `midyat` ve `midyat--sehir` sluglarının İKİSİ DE 302 = ÖLÜ.
  // Aradım, yok. Tur Abdin'in merkezi ve Osmanlı'da Mardin sancağının
  // nahiye/kaza merkezi. Dönem günleri MARDİN'in kendi kaydından alındı
  // (40,4 km) — uydurulmuş gün yok, hepsi atlasta ZATEN kullanılan günler.
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},
     {f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},
     {f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},
     {f:"1507-01-01",t:"1517-05-01",d:"safevi"}],
  d:[{f:"1517-05-01",t:"1923-10-29"}],
  v:[], kaynak:"bulunamadı — TDV'de `midyat` maddesi YOK (slug 302 ölçüldü). Dönem günleri Mardin kaydından (40 km) BÖLGESEL HİZALAMA ile alındı; Midyat Osmanlı'da Mardin sancağının nahiyesiydi."
},

// ─────────────────────────────────────────────── ② HİCAZ KORİDORU (4)
// H-0019. Ölçtüm: 24,28-28,88K / 34,91-40,61D kutusunda TOPLAM 3 nokta vardı
// (Tebük · Teymâ · Medine) ve en ıssız yer en yakın yerleşimden 241 km uzakta.
// Emre'nin sorusu "bu arada hiç mi yerleşim yok" idi; cevabı: TARİHTE VAR.
// ⚠️ Dördünün de dönem GÜNLERİ en yakın çapa kayıttan alındı. Sebep: Hicaz'ın
//   1517 · 1805 · 1811-13 · 1841 · 1916-19 kırılmaları BÖLGESELDİR ve atlas
//   onları zaten bu günlerle taşıyor. Kendi günlerini yazmak, kaynaksız bir
//   ENKLAV üretirdi (Hayber Osmanlı iken Medine Suûdî gibi).

{ ad:"Hayber", tur:"kasaba", lat:25.700, lon:39.292, k:4, m:"Medine",
  // TDV `hayber` (200, gövde 20.072 kr, okundu): "Hicaz'da Medine-Suriye
  // yolu üzerinde bulunan eski bir yerleşim yeri" · "Medine'nin yaklaşık
  // 180 km. (kuzeyinde)". Madde ağırlıklı olarak Hayber Gazvesi'ni ve
  // vahanın coğrafyasını anlatıyor; OSMANLI dönemine dair gün VERMİYOR.
  // ⇒ günler MEDİNE'nin kaydından (140,7 km) — Hayber, Medine'nin
  //   hinterlandındaydı ve idarî olarak ona bağlıydı.
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},
     {f:"1805-06-01",t:"1812-12-03",d:"suud"},
     {f:"1919-01-10",t:"1923-10-29",d:"hicaz"}],
  d:[],
  v:[{f:"1517-07-06",t:"1805-06-01",k:"Mekke Şerifliği"},
     {f:"1812-12-03",t:"1841-05-24",k:"Mısır (Kavalalı)"},
     {f:"1841-05-24",t:"1919-01-10",k:"Mekke Şerifliği"}],
  kaynak:"hayber"
},

{ ad:"Ulâ (el-Ulâ)", tur:"kasaba", lat:26.617, lon:37.918, k:4, m:null,
  // 🟢 `§4`in "dar slug tutmazsa KAPSAYICI maddeyi dene" kuralının canlı
  // vakası: `ula` · `el-ula` · `medain-salih` · `hicr` · `dedan` sluglarının
  // BEŞİ DE 302. Ama TDV `vadilkura` maddesi (200, 14.304 kr, okundu) tam
  // olarak burayı anlatıyor:
  //   "…Avâlî'nin (günümüzdeki Ulâ) güneyinde bulunmaktadır."
  //   "(XI.) yüzyılın ikinci yarısından itibaren … Vâdilkurâ da zamanla
  //    önemini yitirdi; yerini … Suriyeli hacılar için önemli duraklardan
  //    birini teşkil eden ULÂ'ya bıraktı."
  // 🔴 VE BU BİR KAYDI KURTARDI, BİR TANESİNİ DE ÖLDÜRDÜ: "Vâdilkurâ" diye
  //   nokta yazacaktım; aynı madde onun XIII. yüzyılda harap olduğunu ve
  //   1877'de adının hâfızalardan silindiğini söylüyor. Yani atlasın
  //   penceresinde (1281+) yaşayan yerleşim VÂDİLKURÂ DEĞİL, ULÂ'dır.
  // günler TEBÜK'ten (Suriye hac yolunun aynı kolu) alındı.
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},
     {f:"1918-01-01",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-07-06",t:"1918-01-01"}],
  v:[], kaynak:"vadilkura"
},

{ ad:"Bedir", tur:"kasaba", lat:23.780, lon:38.790, k:4, m:null,
  // TDV `bedir` (200, gövde 11.394 kr, OKUNDU) — madde BEDİR GAZVESİ'ni
  // anlatıyor; yerleşimin Osmanlı dönemine dair tek kelime yok. `§4`in
  // "TANECİK boşluğu" hâli: TDV bölgeyi görüyor ama bu tanecikte susuyor.
  // günler YENBU'dan (81,6 km, aynı sahil yolu, aynı kaza dairesi) alındı.
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},
     {f:"1805-07-20",t:"1811-11-01",d:"suud"},
     {f:"1916-07-27",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-07-06",t:"1805-07-20"},
     {f:"1841-05-24",t:"1916-07-27"}],
  v:[{f:"1811-11-01",t:"1841-05-24",k:"Mısır (Kavalalı)"}],
  kaynak:"bulunamadı — TDV `bedir` maddesi Bedir Gazvesi'ni anlatıyor, yerleşimin Osmanlı dönemini KAPSAMIYOR (§4 tanecik boşluğu). Dönem günleri Yenbu kaydından (82 km) bölgesel hizalama ile alındı."
},

{ ad:"Râbiğ", tur:"liman", lat:22.799, lon:39.035, k:4, m:null,
  // 🔴 `rabig` ve `rabig--sehir` slugları 302 = ÖLÜ. Aradım, yok.
  // Mekke-Medine sahil yolunun mîkat durağı ve limanı.
  // günler CİDDE'den (140,5 km, aynı sahil kolu) alındı.
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},
     {f:"1916-06-16",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-07-06",t:"1813-01-23"},
     {f:"1841-05-24",t:"1916-06-16"}],
  v:[{f:"1813-01-23",t:"1841-05-24",k:"Mısır (Kavalalı)"}],
  kaynak:"bulunamadı — TDV'de `rabig` maddesi YOK (slug 302 ölçüldü). Dönem günleri Cidde kaydından (141 km) bölgesel hizalama ile alındı."
},

// ─────────────────────────────────────────────── ③ ORTA ASYA (2)
// H-0006/H-0007. Ölçtüğüm yay oranları: Almatı k=4 → tavan 140 km → YAY %100
// (en yakın komşu 365 km). Bu iki nokta o boşluğun İÇİNE düşüyor.
// ⚠️ Altı aday vardı, DÖRDÜNÜ YAZMADIM (Almalık · Balasagun · Otrar ·
//   Sığnak): dördü de atlas penceresi İÇİNDE harap olup terk edildi ve TDV
//   yok oluş GÜNÜ vermiyor. `bit:`siz yazmak 1923'e kadar boyanan bir
//   harabe üretirdi (`§3.5` hayalet sınıfı).

{ ad:"Taraz (Evliya-Ata)", tur:"sehir", lat:42.900, lon:71.367, k:3, m:null,
  // 🔴 `taraz` · `talas` · `evliya-ata` sluglarının ÜÇÜ DE 302. TDV
  // `turkistan` genel maddesi de kasabayı anmıyor (aradım, "Sayram ile
  // Buğda" yalnız GÖL adı olarak geçiyor). ⇒ tanecik boşluğu, beyan edildi.
  // günler ÇİMKENT'in kaydından alındı (159 km, aynı Sırderya-Talas kolu):
  // cagatay → timurlu 1370 → buhara 1500 → kazak 1598 → hokand 1815 → rusya.
  // 🟢 Rus fethi günü ÇİMKENT'inkinden AYRI olmalıydı ve bunu uydurmadım:
  //   Evliya-Ata 1864'te alındı, Çimkent 1864-09-22'de. Aynı seferin iki
  //   ayrı günü; kendi günümü bulamadığım için Çimkent'inkini kullandım.
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},
     {f:"1370-01-01",t:"1500-01-01",d:"timurlu"},
     {f:"1500-01-01",t:"1598-01-01",d:"buhara"},
     {f:"1598-01-01",t:"1815-01-01",d:"kazak-hanligi"},
     {f:"1815-01-01",t:"1864-09-22",d:"hokand"},
     {f:"1864-09-22",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV'de `taraz`/`talas`/`evliya-ata` maddesi YOK (üç slug da 302 ölçüldü); `turkistan` genel maddesi de kasabayı kapsamıyor (§4 tanecik boşluğu). Dönem günleri Çimkent kaydından (159 km) bölgesel hizalama ile alındı."
},

{ ad:"Sayram (İsficâb)", tur:"kasaba", lat:42.303, lon:69.786, k:4, m:null,
  // 🔴 `sayram` · `sayram--sehir` · `isficab` sluglarının ÜÇÜ DE 302.
  // Çimkent'e 15,7 km — 3 km kuralını GEÇİYOR ama yakın; ayrı kayıt olmasının
  // sebebi İsficâb'ın ayrı ve daha eski bir yerleşim olması. Dönem günleri
  // Çimkent'ten alındı; bu mesafede zaten aynı olmaları beklenir.
  s:[{f:"1281-01-01",t:"1370-01-01",d:"cagatay"},
     {f:"1370-01-01",t:"1500-01-01",d:"timurlu"},
     {f:"1500-01-01",t:"1598-01-01",d:"buhara"},
     {f:"1598-01-01",t:"1815-01-01",d:"kazak-hanligi"},
     {f:"1815-01-01",t:"1864-09-22",d:"hokand"},
     {f:"1864-09-22",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV'de `sayram`/`isficab` maddesi YOK (slug 302 ölçüldü). Dönem günleri Çimkent kaydından (16 km) alındı."
},

// ─────────────────────────────────────────────── ④ KANEM-BORNU (4)
// H-0014. Ölçtüm: kanem-bornu'nun atlastaki nokta sayısı İKİYDİ (Mao ·
// Birni N'gazargamu, arası 534 km) ve görselde gövde üç parça görünüyordu.
// Bir imparatorluğu iki nokta temsil edemez; başşehri üç kez taşınmış.
// TDV `bornu` (200, gövde 17.698 kr, okundu) dördünü de adıyla anıyor.

{ ad:"Kukava (Kukawa)", tur:"sehir", lat:12.923, lon:13.561, k:2, m:null,
  kur:"1814-01-01",
  // TDV `bornu`: "Vedây ordusu Şehu Ömer'in babası Kânimî'nin kendine
  //   yönetim merkezi olarak kurduğu FİİLÎ BAŞŞEHİR KUKAVA'yı ele geçirip
  //   tahrip ettikten…" · "Siyasî otorite Kukava'da oturan şehu ile kabile
  //   başkanlarının elinde bulunuyordu." · "1902 yılında Bornu Fransa,
  //   İngiltere ve Almanya arasında paylaşıldı. … KUKAVA ile birlikte
  //   Ngornu ve merkezî Bornu İNGİLİZ … idaresine bağlandı."
  // kur: 1814 — TDV Kânimî'nin 1814'teki tahta müdahalesini o yıl veriyor;
  //   Kukava'nın kuruluşu da bu yıla düşüyor. Gün bilinmiyor ⇒ YYYY-01-01.
  // ⚠️ Râbih ez-Zübeyr'in 1893-1900 hâkimiyetini YAZMADIM: künyesi yok ve
  //   Birni N'gazargamu da yazmıyor — iki kayıt ayrışmasın diye.
  s:[{f:"1814-01-01",t:"1902-01-01",d:"kanem-bornu"},
     {f:"1902-01-01",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[], kaynak:"bornu"
},

{ ad:"Dikva (Dikeo)", tur:"sehir", lat:12.040, lon:13.917, k:3, m:null,
  // TDV `bornu`: "1896'ya kadar ülkenin tamamını ele geçiren ve DİKEO'yu
  //   merkez edinen Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp
  //   edilerek öldürülünce…" · "DİKEO ile güney bölgesi ALMAN sömürge
  //   idarelerine bağlandı." · "Dünya Savaşı'ndan sonra Almanya'nın elindeki
  //   bölge de İngiltere'nin hâkimiyetine geçti."
  // 1919-06-28 (Versailles) seçildi: Almanya'nın sömürge haklarının hukuken
  // sona erdiği gün ve külliyatta zaten kullanılan bir gün. TDV gün vermiyor.
  s:[{f:"1281-01-01",t:"1902-01-01",d:"kanem-bornu"},
     {f:"1902-01-01",t:"1919-06-28",d:"almanya"},
     {f:"1919-06-28",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[], kaynak:"bornu"
},

{ ad:"Bilma", tur:"kasaba", lat:18.686, lon:12.919, k:4, m:null,
  // TDV `bornu`: "Bornu'yu batıdan doğuya doğru geçen eski KANO-KUKAVA-BİLMA
  //   kervan yolu…" — Kavâr vahalarının tuz merkezi, Bornu'nun kuzey ucu.
  //   "Kânim ile Damergu FRANSIZ … idaresine bağlandı" (1902).
  // Bilma bu kuzey kolunda; günler Mao (Kanem) kaydıyla BİREBİR aynı.
  s:[{f:"1281-01-01",t:"1902-01-01",d:"kanem-bornu"},
     {f:"1902-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[], v:[], kaynak:"bornu"
},

{ ad:"Zinder", tur:"sehir", lat:13.803, lon:8.988, k:3, m:null,
  // TDV `bornu`: "ZİNDER civarında yaşayan Fûlânîler…" ve 1902 paylaşımında
  //   "Kânim ile DAMERGU Fransız" — Zinder, Damergu bölgesinin merkezidir.
  // ⚠️ Zinder aslında Damagaram Sultanlığı'nın merkeziydi ve XIX. yüzyılda
  //   Bornu'dan fiilen ayrılmıştı; DAMAGARAM KÜNYESİ YOK, o yüzden komşu
  //   kayıtlarla (Mao · Bilma) hizaladım. KÜNYE ÖNERİSİ raporda.
  s:[{f:"1281-01-01",t:"1902-01-01",d:"kanem-bornu"},
     {f:"1902-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[], v:[], kaynak:"bornu"
}

];

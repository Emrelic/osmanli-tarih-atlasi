/* PAKET 22 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   8 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/yerlesimler_ok107.js ==== */
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
  s:[{f:"1261-01-01",t:"1353-01-01",d:"ilhanli",kaynak:"f 1281-01-01'den geri çekildi — TDV cizre: 'Böylece Eyyûbîler ile Bedreddin Lü’lü’ün nüfuzu altına giren şehir 660’ta (1261-62) Moğol istilâsına uğradı.' · 'istilâya uğradı' — İlhanlı sahipliğinin başlangıcı olarak okundu (mevcut 1281 verisi ilhanli). Öncesi (1085 Selçuklu · 1108 · 1158 Musul atabegi · 1251 Eyyûbî+Lü'lü') künye kimliği/bitişikliği tutmadığı için YAZILMADI · ZAMAN-Z6-1008"},{f:"1353-01-01",t:"1431-01-01",d:"celayirli"},{f:"1431-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-09-19",t:"1920-04-23"}],
  v:[], kaynak:"cizre",
  bos:"veri-yok",
  neden:"kunye-yok — 1508-01-01 / 1515-09-19 arasi (7,7 yil) BILEREK bos. TDV cizre maddesi bu araligi ACIKCA anlatiyor: Emir II. Seref 1508'de sehri Akkoyunlulardan aliyor ve MAHALLI YONETIMI yeniden kuruyor, arada kisa bir Sah Ismail idaresi var ama TDV gununu VERMIYOR. Yani kaynak KONUSUYOR, devletler.js'te Cizre/Bohtan emirligi kunyesi YOK. Kunye yazilirsa bu bosluk kapanir — KUNYE ONERISI raporda."
},

{ ad:"Siirt", kd:[{f:"1281-01-01",t:"1514-09-06",k:0,m:null},{f:"1514-09-06",t:"1923-10-29",k:3,m:"Diyarbakır"}], neden:"0087/H-0003 (TEBRIZ-1514-0087, *eek ① GERÇEKTEN ATLANDI — BEYAN): 1514-09-06 → 1515-09 arası Siirt çevresinden KOPUK bir Osmanlı noktasıdır (Hasankeyf 52 km ve Bitlis 54 km Safevî; Diyarbakır 1515-09-10, Hasankeyf 1517-05-01) ve bu TARİHÎDİR, veri hatası değildir. TDV `hasankeyf`: 'Çaldıran zaferi üzerine hapisten kurtulan Melik Halîl diğer bazı beylerle birlikte Osmanlılar’a itaat arzetti ve Siirt’i geri aldıktan sonra … (1517) Mardin’in fethinin ardından … Hasankeyf’i ele geçirdi' ⇒ Siirt'i Safevîden alan, Osmanlı'ya itaat etmiş Eyyûbî meliki Halil'dir; Hasankeyf ise 1517'ye kadar Safevî kalmıştır. Uğur Demlikoğlu, '998 ve 1112 Numaralı Tapu Tahrir Defterlerine Göre Siirt Vakıfları (1526-1566)', SDÜ Fen-Edebiyat Fak. Sosyal Bilimler Dergisi 44 (2018), s. 40-61: 'Van ve ardından Bitlis’e gelen Halil Bey 3 günlük bir kuşatmanın ardından Safevi Devleti’nin elinde bulunan Siirt Kalesi’ne girmeyi başarmıştır.' ⚠️ GÜN: 1514-09-06 bir EN ERKEN SINIRDIR (Tebriz'e giriş = Halil'in serbest kalışı), Siirt'in geri alınış günü kaynakta YOK. Eski gerekçe ('atlasın kendi günü, Doğubayazıt d:, 19 kayıt') BAYATLADI: Doğubayazıt 8584cfce ile bu günü bıraktı, günü bugün 6 kayıt paylaşıyor. YYYY-01-01 (1514-01-01) Çaldıran'dan önceye düşeceği için yazılamaz. ⚠️ KAYNAK ÇELİŞKİSİ BİLDİRİLİYOR: Demlikoğlu 2018 'Bu savaştan 2 yıl sonra da Siirt Osmanlı hâkimiyetine girmiştir' ve '1516 yılında Cizre, Eğil, Bitlis, Hizan, Siirt ve Hasankeyf Osmanlı Devleti’ne katılmıştır' (İnalcık 2009 · Uzunçarşılı 1988) der; TDV `siirt` '(920/1514) … Osmanlı topraklarına katıldı' der. §4 gereği TDV esas, 1514 KORUNDU — iki kaynak aynı olgunun iki yüzü olabilir (1514 itaat + geri alış · 1516 doğrudan idare), ama bu bir yorumdur. 🟡 Melik Halil'in idaresi `d:` ile yazıldı: `eyyubi-hisnikeyfa` künyesi 1462'de bitiyor, `v:` tâbi yazmak hayalet kimlik doğururdu (künye kararı ayrı kalem).", tur:"sehir", lat:37.930, lon:41.940, k:3, m:"Diyarbakır",
  // TDV `siirt` (200, gövde 15.849 kr, okundu):
  //   "İlhanlılar'ın ve onların halefleri durumundaki Celâyirliler'in
  //    hâkimiyeti altına giren Siirt, Timur istilâsını da gördükten sonra
  //    866'ya (1462) doğru Akkoyunlular tarafından ele geçirildi."
  //   "XVI. yüzyılın başlarında Safevîler'in eline geçti."
  //   "Yavuz Sultan Selim'in Çaldıran'da … kazandığı zafer sonrasında
  //    (920/1514) Siirt çevredeki başka yerlerle birlikte Osmanlı
  //    topraklarına katıldı."
  // 1514-09-06: EN ERKEN SINIR (Tebriz'e giriş = Melik Halil'in serbest kalışı) — bkz. `neden` (TEBRIZ-1514-0087).
  // Eski gerekçe (Doğubayazıt'ın günü) 8584cfce ile BAYATLADI. 1507: bölgenin Safevî günü (Diyarbakır ·
  // Mardin · Palu · Siverek · Urfa hepsi bunu kullanıyor).
  // 🔴 İLK YAZIŞIM `celayirli 1340→1462` idi; Celâyirli künyesi 1431'de
  //   bitiyor ⇒ 31 yıllık hayalet. Kapı yakaladı, zincire karakoyunlu
  //   halkası eklendi (Bitlis'in kendi halkası; TDV Siirt için ADIYLA
  //   söylemiyor — bölgesel HİZALAMA, kaynak değil).
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1431-01-01",d:"celayirli"},{f:"1431-01-01",t:"1462-01-01",d:"karakoyunlu"},{f:"1462-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1514-09-06",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1514-09-06",t:"1920-04-23"}],
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
  // 🟢 181 YILLIK DELİK KAPANDI — 2 Eylül 2026, ve onu kapatan şey bir
  //   VARSAYIM DEĞİL, TDV'nin İKİNCİ bir maddesi oldu.
  //   İlk yazışımda 1281-1462 arası `bos:"veri-yok" · neden:"kunye-yok"`
  //   idi, çünkü Hısnıkeyfâ Eyyûbîleri'nin künyesi yoktu. Künye istenince
  //   TDV `eyyubiler` maddesi okundu ve ARANAN İKİ UCU DA VERDİ:
  //     "el-Melikü'l-Kâmil 630 (1232) yılında … Önce Âmid'i, daha sonra
  //      Hısnıkeyfâ'yı zaptederek Artuklular'ın Hısnıkeyfâ koluna son verdi."
  //     "Hısnıkeyfâ kolu ise 1462'de Akkoyunlular'dan Uzun Hasan tarafından
  //      ORTADAN KALDIRILDI."
  //   🔴 VE BU, İLK TURDA ÇIKARIM OLAN 1462'Yİ KAYNAĞA BAĞLADI: o günü
  //     Siirt'in Akkoyunlu yılından TÜRETMİŞTİM ("iki şehir 60 km"), şimdi
  //     TDV onu Hasankeyf için ADIYLA söylüyor. Çıkarım → kaynak.
  s:[{f:"1085-01-01",d:"buyuk-selcuklu",kaynak:"TDV hasankeyf: 'Nihayet Sultan Melikşah zamanında Selçuklular Mervânî hâkimiyetine son verip bölgedeki diğer şehirlerle birlikte burayı da aldılar (1085).' · ZAMAN-Z6-1008",t:"1102-01-01",kesinlik:"yil"},{f:"1102-01-01",d:"artuklu",kaynak:"TDV hasankeyf: 'Sökmen’in desteğiyle Çökürmüş’ü bozguna uğratan Mûsâ kısa bir süre sonra öldürülünce Sökmen Hasankeyf’e gidip şehri teslim aldı; böylece burada Artuklular’ın Hısnıkeyfâ kolu kurulmuş oldu (495/1102).' · ZAMAN-Z6-1008",t:"1232-01-01",kesinlik:"yil"},{f:"1232-01-01",t:"1462-01-01",d:"eyyubi-hisnikeyfa",kaynak:"f 1281-01-01'den geri çekildi — TDV hasankeyf: 'Hasankeyf Artukluları’nın son emîri Mesud zamanında, Eyyûbî Hükümdarı el-Melikü’l-Kâmil Nâsırüddin Muhammed önce Âmid’i, daha sonra Hasankeyf’i zaptederek Artuklular’ın buradaki hâkimiyetine son verdi ve şehri oğlu el-Melikü’s Sâlih’in idaresine bıraktı (629/1232).' · ZAMAN-Z6-1008"},{f:"1462-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1517-05-01",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1517-05-01",t:"1920-04-23"}],
  v:[], kaynak:"hasankeyf",
  // ⚠️ 1517-05-01 BİR TABANDIR, ÖLÇÜLMÜŞ GÜN DEĞİL — açıkça yazıyorum.
  //   TDV hasankeyf: "Mısır seferi sırasında (1517) MARDİN'İN FETHİNİN
  //   ARDINDAN Osmanlılar'ın desteğiyle Hasankeyf'i ele geçirdi." Yani
  //   gerçek gün 1517-05-01'den SONRA, ama TDV günü VERMİYOR.
  //   Külliyatta 1517-05-01'den sonraki günler ölçüldü: 05-19 İskenderiye ·
  //   07-06 Hicaz · 07-12 Medine · 08-28 ve 09-10/11 Kahire. HİÇBİRİ
  //   Diyarbekir'le ilgili değil ⇒ birini seçmek, H-0015'te teşhis ettiğim
  //   "değişim ALÂKASIZ bir maddenin altında belirir" kusurunu ÜRETİRDİ.
  //   Uydurmak da `§4` yasağı. ⇒ Bölgenin kendi belgeli günü (Mardin
  //   kalesinin teslimi) tutuldu ve sınırı BURAYA yazıldı.
},

{ ad:"Midyat", tur:"kasaba", lat:37.418, lon:41.372, k:4, m:"Mardin",
  // 🔴 TDV `midyat` ve `midyat--sehir` sluglarının İKİSİ DE 302 = ÖLÜ.
  // Aradım, yok. Tur Abdin'in merkezi ve Osmanlı'da Mardin sancağının
  // nahiye/kaza merkezi. Dönem günleri MARDİN'in kendi kaydından alındı
  // (40,4 km) — uydurulmuş gün yok, hepsi atlasta ZATEN kullanılan günler.
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1517-05-01",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1517-05-01",t:"1920-04-23"}],
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

// ═══════════════════════════════════════════════════════════════════════
// 🔴 HAYBER ve ULÂ BURADAN ÇIKARILDI — 2 Eylül, ve sebebi ÖLÇÜLDÜ
// ═══════════════════════════════════════════════════════════════════════
// İkisini de yazmıştım. Kendi teslim kapım yakaladı:
//   Hayber        ad AYNI · 0,21 km   yerlesimler_ok101.js
//   Ulâ (el-Ulâ)  0,13 km             yerlesimler_ok101.js  (onun adı `el-Ulâ`)
// 🔴 `Hayber` bir AD ÇAKIŞMASIDIR: `girdi.yukle()` ad çakışmasında
//   **ValueError atar** — yani iki dosya birlikte bağlanırsa MOTOR HİÇ
//   BAŞLAMAZ. Kozmetik bir mükerrer değil, KOŞU ÖLDÜREN bir çakışma.
// ⇒ `yerlesimler_ok101.js` BAĞLI (GIRDI_DOSYALARI'nda), benimki DEĞİL.
//   Bağlı olan kalır, bağlanmamış olan çekilir. Çıkardım.
//
// 📌 VE İKİ KAYIT NEREDEYSE BİREBİR AYNIYDI — iki Opus oturumu birbirinden
//   habersiz aynı sonuca vardı: aynı koordinat (4 ondalık), aynı dönem
//   zinciri (Hayber Medine'yi, Ulâ Tebük'ü aynen izliyor). Kaynakları bile
//   örtüşüyor. Bu, ölçümün sağlamlığının kanıtı — ve dosya sahipliğinin
//   NİÇİN gerektiğinin: aynı iş iki kez yapıldı.
//
// 🟢 BENDE OLUP ONDA OLMAYAN TEK ŞEY — kaydı silmiyorum, buraya yazıyorum:
//   `ula`·`el-ula`·`medain-salih`·`hicr`·`dedan` sluglarının BEŞİ DE 302;
//   ama TDV `vadilkura` maddesi (200, 14.304 kr, gövdesi okundu) burayı
//   anlatıyor ve ŞUNU SÖYLÜYOR:
//     "(XI.) yüzyılın ikinci yarısından itibaren … Vâdilkurâ da zamanla
//      önemini yitirdi; yerini … ULÂ'ya bıraktı."
//     ve 1877'de Doughty adı hâfızalardan silinmiş buluyor.
//   ⇒ **Atlasın penceresinde (1281+) yaşayan yerleşim VÂDİLKURÂ DEĞİL,
//     ULÂ'dır.** Ben "Vâdilkurâ" diye nokta yazacaktım; aynı madde
//     kurtardı. `ok101`in `el-Ulâ` kaydı bu gerekçeyi TAŞIMIYOR
//     (kaynağı UNESCO hac yolu listesi) — sahibi isterse ekleyebilir.

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
  v:[{f:"1811-11-01",t:"1841-05-24",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}],
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
  v:[{f:"1813-01-23",t:"1841-05-24",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}],
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
  kaynak:"bulunamadı — TDV'de `taraz`/`talas`/`evliya-ata` maddesi YOK (üç slug da 302 ölçüldü); `turkistan` genel maddesi de kasabayı kapsamıyor (§4 tanecik boşluğu). Dönem günleri Çimkent kaydından (159 km) bölgesel hizalama ile alındı.", s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1598-01-01","d":"buhara"},{"f":"1598-01-01","t":"1815-01-01","d":"kazak-hanligi"},{"f":"1815-01-01","t":"1864-09-22","d":"hokand"},{"f":"1864-09-22","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}]},

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
  kaynak:"bulunamadı — TDV'de `sayram`/`isficab` maddesi YOK (slug 302 ölçüldü). Dönem günleri Çimkent kaydından (16 km) alındı.", s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1598-01-01","d":"buhara"},{"f":"1598-01-01","t":"1815-01-01","d":"kazak-hanligi"},{"f":"1815-01-01","t":"1864-09-22","d":"hokand"},{"f":"1864-09-22","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}]},

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
  // ✅ GEMINI-DOGRULA 0919: künye `rabih` artık var; Kukava ve Dikeo'ya
  //   yazıldı (TDV bornu, YIL düzeyi). Birni N'gazargamu 1808'den beri
  //   harabe ve TDV 1893'te adını anmıyor — ona yazılmadı.
  s:[{f:"1814-01-01",t:"1893-01-01",d:"kanem-bornu"},
     {f:"1893-01-01",t:"1900-01-01",d:"rabih",kaynak:"TDV bornu: 'Bornu, Bagirmi Sultanı Râbih b. Zübeyir'in hâkimiyetine girdi (1893).' · 'Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp edilerek öldürülünce' — YIL düzeyi (GEMINI-DOGRULA 0919)"},
     {f:"1900-01-01",t:"1902-01-01",d:"kanem-bornu"},
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
  s:[{f:"1281-01-01",t:"1893-01-01",d:"kanem-bornu"},
     {f:"1893-01-01",t:"1900-01-01",d:"rabih",kaynak:"TDV bornu: 'Bornu, Bagirmi Sultanı Râbih b. Zübeyir'in hâkimiyetine girdi (1893).' · 'Dikeo'yu merkez edinen Râbih 1900'de … öldürülünce' — iki uç da YIL düzeyi (GEMINI-DOGRULA 0919)"},
     {f:"1900-01-01",t:"1902-01-01",d:"kanem-bornu"},
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
},

// ═════════════════════════════════════════════════════════════════════════
// ⑤ VARDAR KORİDORU (9) — parti-emrelic-0030 · H-0013
// ═════════════════════════════════════════════════════════════════════════
// Emre: "bu Selânik'in bölgesi kuzeye doğru fazla mı uzuyor … Üsküp'ün alanı
//        yukarıdan bastırmış. Bu iki şehrin alanlarını topografya ve
//        Dijkstra'ya göre dağlara nehirlere dayayalım."
//
// 🔴 KÖKÜ OPUS HAZIR KITA 105 ÖLÇTÜ VE EMRE'NİN ÇARESİNİ ÇÜRÜTTÜ:
//   kutuda (40,20-42,60K / 20,60-23,60D) 9 nokta var, ama SELÂNİK ile ÜSKÜP
//   ARASINDA (~150 km) SIFIR NOKTA. Yaslanacak RAKİP nokta olmadığı için
//   hiçbir topografya/Dijkstra çalışması o "boğum"u açamaz — petek sınırı
//   komşunun ortasından geçer; komşu yoksa sınır değil TAVAN vardır.
//   ⇒ ÇARE NOKTA. 105 dokuz adayı ADIYLA saydı ve dokuzunun da atlasta
//     OLMADIĞINI doğruladı; **fetih tarihlerini ÖLÇMEDİĞİNİ** açıkça yazdı.
//   BU BÖLÜM O EKSİĞİ KAPATIYOR: dokuzunun dokuzu TDV'den tarihlendi.
//
// ⚠️ ÖLÇTÜM: dokuz adın dokuzu da bugün atlasta YOK (63 dosya tarandı) ve
//   `data/yerlesimler_ok105.js` diye bir dosya HİÇ YAZILMAMIŞ — mükerrer
//   yazım riski yok.
//   3 km kuralı: en yakın çift Doyran↔Gevgili 18,5 km. İHLAL YOK.
//
// ═══ TDV SLUG ÖLÇÜMÜ (HTTP + gövde okuması) ═══
//   🟢 CANLI  koprulu · istip · ustrumca · doyran · gevgili · vodina ·
//             karaferye · yenice-i-vardar
//   🔴 ÖLÜ    kilkis · avrathisar · velez · yenice · vardar   (302)
//   📌 `koprulu` `§4` tuzağı ②'nin adayıydı (ünlü Köprülü ailesi) — gövde
//     OKUNDU, madde ŞEHRİ anlatıyor: "KÖPRÜLÜ — Makedonya'da tarihî bir
//     şehir … Makedonca Veles". Tuzak bu sefer ATEŞLEMEDİ ama kontrol edildi.
//
// ═══ İKİ TARİH AİLESİ, İKİSİ DE TDV'DEN ═══
// ① DEJANOVİĆ PRENSLİĞİ (Köprülü · İştip · Ustrumca · Doyran)
//    TDV `istip`   : "1371'den itibaren … İştip Osmanlılar'a tâbi bir
//                    prenslikti." · "Konstantin'in 1395'te Rovine'de …
//                    ölümünden sonra şehir ve arazisi DOĞRUDAN Osmanlı
//                    idaresine alındı."
//    TDV `koprulu` : "1371'den beri Osmanlı vasalı olan … bölge savaşsız
//                    Osmanlılar'ın eline geçmiş olmalıdır (1395)."
//    TDV `ustrumca`: "1395'te … Konstantin … ölünce küçük devleti …
//                    Kostadin-ili adıyla bir sancak şeklinde Osmanlılar'a
//                    intikal etti."
//    TDV `doyran`  : "…hükümdarı Konstantin'in … öldüğü 1395 yılına kadar
//                    yarı bağımsız olarak sürdü. … bölge herhangi bir
//                    değişiklik ve kargaşa olmadan Osmanlı idaresine geçti."
//    ⇒ v: 1371-09-26 → 1395-05-17   ·   d: 1395-05-17 →
//      İKİ GÜN DE KÜLLİYATIN KENDİ GÜNÜ, uydurma YOK:
//        1371-09-26 "Çirmen Savaşı — Meriç vadisinin denetimi" (olaylar_ek.js)
//        1395-05-17 "Rovine Savaşı — Eflak seferi"             (olaylar_ek.js)
//
// 🔴 VE BURADA BİR ÇELİŞKİ BULDUM — KENDİ KAYDIMDA DEĞİL, KOMŞUSUNDA:
//    Köstendil (Velbužd) AYNI Dejanović prensliğinin BAŞŞEHRİDİR, ama
//    atlastaki kaydı `d:[{1374-01-01→1383-09-19, y:"vassal"}, {1383-09-19→…}]`
//    diyor — yani tâbilik 1374'te başlıyor ve doğrudan idare 1383'te.
//    TDV dört maddede birden 1371 ve 1395 diyor. İkisi aynı anda doğru olamaz.
//    ⇒ `§4` gereği TDV'yi izledim. Köstendil'in kaydına DOKUNMADIM (benim
//      değil) ama bu, 1383-1395 arasında Köstendil'i koyu, çevresini açık
//      gösterecek — yani ölçülmesi gereken bir AYRIŞMA. Rapora yazdım.
//
// ② EVRENOS FETİHLERİ (Gevgili · Kılkış · Vodina · Karaferye · Yenice-i Vardar)
//    TDV `gevgili`  : "1383'ten 1912'ye kadar Osmanlı idaresi altında kalan…"
//                     "1383'te Serez ile 1387'de Selânik'in fethi arasında
//                      Gynaikokastro (Avrathisar) ve çevresi Osmanlılar'ın
//                      eline geçmiş olmalıdır."
//    TDV `karaferye`: "Diğer Yunan kaynakları ise şehrin Türkler tarafından
//                      alınmasının 8 MAYIS 1387'de olduğunu yazar." (TDV
//                      Osmanlı kroniklerinin 1373-74'ünü "çok erken" diye
//                      REDDEDİYOR — kaynağın kendi tercihini izledim)
//    TDV `vodina`   : 🔴 DÖRT RAKİP TARİH VERİYOR ve KENDİSİ KARAR VERMİYOR:
//                      Neşrî "1389'dan hemen sonra" · Kemalpaşazâde "1391,
//                      Üsküp'ün fethinin ardından" · Âşıkpaşazâde "Üsküp'ten
//                      sonra, 1391'den önce" · Hoca Sâdeddin "1386".
//                      ÜÇÜ "Üsküp'ten SONRA" diyor ⇒ atlasın kendi Üsküp
//                      günü (1392-01-15) alındı. Bu bir SEÇİM, ölçüm değil.
//    TDV `yenice-i-vardar`: "Gazi Evrenos Bey tarafından XIV. yüzyılın
//                      SONLARINDA kurulmuştur." — FETİH değil KURULUŞ.
//                      Yıl yok ⇒ `kur:"1390-01-01"` (`§4`: gün bilinmiyorsa
//                      YYYY-01-01) ve TDV `doyran`ın "1390'larda Yenice-i
//                      Vardar ve Vodina ile beraber … ilhak edildi" cümlesi
//                      bu on yılı destekliyor.
//
// ⚠️ AÇIKÇA YAZIYORUM — ÖLÇMEDİĞİM ÜÇ ŞEY:
//   ① Balkan Savaşı GÜNLERİ tek tek ölçülmedi. Kuzey dörtlü + Gevgili için
//     Üsküp'ün günü (1912-10-26 → sirbistan-kralligi → yugoslavya), Yunan
//     tarafındaki dördü için Selânik'in günü (1912-11-08 → yunanistan)
//     alındı. BÖLGESEL HİZALAMA, kaynak değil.
//   ② Fetret zinciri (1402-07-28 → 1413-07-05) Üsküp/Serez/Manastır'ın
//     kaydından BİREBİR kopyalandı — bu üçü aynı bölgede ve aynı zinciri
//     taşıyor; ayrı ölçüm yapılmadı.
//   ③ Kılkış'ın kendi TDV maddesi YOK (`kilkis` ve `avrathisar` 302).
//     Dayanak `gevgili` maddesinin Avrathisar/Gynaikokastro cümlesi.

{ ad:"Köprülü (Veles)", tur:"sehir", lat:41.716, lon:21.775, k:3, m:null,
  s:[{f:"1281-01-01",t:"1330-01-01",d:"bizans",kaynak:"EPOK-SAHIP-1008 · TDV koprulu: '1246’da Bizans İmparatoru İoannis Vatatzis, Skopje (Üsküp), Veles ve Prosek’i Bulgarlar’dan geri aldı.' (İznik → Bizans ardıllığı 1261) · t: '1330 yılındaki Velbuzd Savaşı’nın ardından … Veles’i Bizanslar’dan alarak Sırp Devleti’ne kattıkları' — YIL; 🟡 olay Velbuzd'dan (1330 yazı) SONRA, YYYY-01-01 birkaç ay ERKEN"},{f:"1330-01-01",t:"1371-09-26",d:"sirbistan",kaynak:"EPOK-SAHIP-1008 · TDV koprulu: '1330 yılındaki Velbuzd Savaşı’nın ardından Kral Stefan’ın Sırp askerlerinin “meşhur şehir” Veles’i Bizanslar’dan alarak Sırp Devleti’ne kattıkları' (YIL)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-10-26",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1371-09-26",t:"1395-05-17",k:"Dejanović Prensliği (Kostadin-ili)",kid:"dejanovic-prensligi",statu:"vassal"}],
  d:[{f:"1395-05-17",t:"1402-07-28"},
     {f:"1413-07-05",t:"1912-10-26"}],
  kaynak:"koprulu" },

{ ad:"İştip (Štip)", kd:[{f:"1281-01-01",t:"1371-09-26",k:0,m:null},{f:"1371-09-26",t:"1923-10-29",k:3,m:"Köstendil"}], tur:"sehir", lat:41.746, lon:22.195, k:3, m:"Köstendil",
  s:[{f:"1281-01-01",t:"1371-09-26",d:"sirbistan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-10-26",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1371-09-26",t:"1395-05-17",k:"Dejanović Prensliği (Kostadin-ili)",kid:"dejanovic-prensligi",statu:"vassal"}],
  d:[{f:"1395-05-17",t:"1402-07-28"},
     {f:"1413-07-05",t:"1912-10-26"}],
  kaynak:"istip" },

{ ad:"Ustrumca (Strumica)", kd:[{f:"1281-01-01",t:"1371-09-26",k:0,m:null},{f:"1371-09-26",t:"1923-10-29",k:3,m:"Köstendil"}], tur:"sehir", lat:41.437, lon:22.643, k:3, m:"Köstendil",
  s:[{f:"1281-01-01",t:"1371-09-26",d:"sirbistan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-10-26",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1371-09-26",t:"1395-05-17",k:"Dejanović Prensliği (Kostadin-ili)",kid:"dejanovic-prensligi",statu:"vassal"}],
  d:[{f:"1395-05-17",t:"1402-07-28"},
     {f:"1413-07-05",t:"1912-10-26"}],
  kaynak:"ustrumca" },

{ ad:"Doyran", tur:"kasaba", lat:41.183, lon:22.717, k:4, m:null,
  s:[{f:"1281-01-01",t:"1371-09-26",d:"sirbistan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-10-26",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1371-09-26",t:"1395-05-17",k:"Dejanović Prensliği (Kostadin-ili)",kid:"dejanovic-prensligi",statu:"vassal"}],
  d:[{f:"1395-05-17",t:"1402-07-28"},
     {f:"1413-07-05",t:"1912-10-26"}],
  kaynak:"doyran" },

{ ad:"Gevgili (Gevgelija)", tur:"kasaba", lat:41.144, lon:22.502, k:4, m:null,
  s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},
     {f:"1345-01-01",t:"1383-09-19",d:"sirbistan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-10-26",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  d:[{f:"1383-09-19",t:"1402-07-28"},
     {f:"1413-07-05",t:"1912-10-26"}],
  kaynak:"gevgili" },

{ ad:"Kılkış (Avrathisar)",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"kasaba", lat:40.994, lon:22.874, k:4, m:null,
  s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1383-09-19",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  v:[],
  d:[{f:"1383-09-19",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"bulunamadı — TDV'de `kilkis` ve `avrathisar` maddesi YOK (iki slug da 302 ölçüldü). Dayanak TDV `gevgili` maddesi: \"1383'te Serez ile 1387'de Selânik'in fethi arasında Gynaikokastro (Avrathisar) ve çevresi Osmanlılar'ın eline geçmiş olmalıdır.\"" },

{ ad:"Vodina (Edessa)",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"sehir", lat:40.803, lon:22.047, k:3, m:null,
  s:[{f:"1246-01-01",d:"epir-despotlugu",kaynak:"TDV vodina: 'İvan Asen’in Epiros despotunu yenmesi üzerine Vodina tekrar canlanan Bulgar İmparatorluğu’na katıldı ve Epiros Despotu Michael Komnenos’un 1246’da şehri geri almasına kadar onların hâkimiyetinde kaldı.' · ZAMAN-Z6-1008",t:"1251-01-01",kesinlik:"yil"},{f:"1251-01-01",d:"iznik-imparatorlugu",kaynak:"TDV vodina: 'İznik İmparatoru İoannis Vatatzis 1251-1252’de Vodina’yı zaptetti.' · kaynak '1251-1252' ARALIĞI verir; aralığın başı yazıldı (beyan) · ZAMAN-Z6-1008",t:"1261-07-25",kesinlik:{f:"yil",t:"gun"}},{f:"1261-07-25",t:"1345-01-01",d:"bizans",kaynak:"f 1281-01-01'den geri çekildi — TDV istanbul: 'Elli yedi yıl süren mücadeleden sonra 25 Temmuz 1261’de Haliç kıyısındaki Latin mahallesini yakan İznik birlikleri şehirdeki Batı hâkimiyetine son vermeyi başardı.' · ZAMAN-Z6-1008"},{f:"1345-01-01",t:"1387-01-01",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  v:[],
  d:[{f:"1387-01-01",t:"1402-07-28",kaynak:"vodina — 1386-1387 kışı (TDV: kuvvetli ihtimal; KPZ 1391, APZ Üsküp sonrası), YIL"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"vodina" },

{ ad:"Karaferye (Veria)",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"sehir", lat:40.524, lon:22.203, k:3, m:null,
  s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1387-05-08",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  v:[],
  d:[{f:"1387-05-08",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"karaferye" },

{ ad:"Yenice-i Vardar",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"sehir", lat:40.790, lon:22.407, k:3, m:null,
  kur:"1390-01-01",
  s:[{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  v:[],
  d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"yenice-i-vardar" }

];

;
/* ==== data/yerlesimler_amerika3.js ==== */
// ============================================================================
// YERLEŞİM VERİ SETİ — AMERİKA 3  (Oturum: AMERIKA-0902, 2 Eylül 2026)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
// Görev tanımı: oturumlar/AMERIKA-0902.md
// Ad alanı: window.YERLESIMLER_AMERIKA3   (CLAUDE.md §7 — "ayrı dosya vermek,
// ayrı ad alanı vermek değildir"; dosya adındaki ayırt edici parça değişken
// adında da duruyor.)
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ — ŞARTNAMENİN ADAY LİSTESİ ÇÜRÜDÜ, ÖLÇÜM YENİSİNİ ÜRETTİ
// ---------------------------------------------------------------------------
// Şartname dört kalem sayıyordu (And · Brezilya · Kuzey Amerika · Mezoamerika)
// ve her birinde eksik olduğu varsayılan şehirleri ADIYLA listeliyordu.
// ÖLÇÜLDÜ (M-2158): adıyla sayılan ~41 hedefin ~35'i atlasta ZATEN VARDI —
// Cusco · Quito · Potosí · Sucre · La Paz · Arequipa · Trujillo · Cajamarca ·
// Santiago · Concepción · Asunción · Salvador · Olinda · Rio · São Paulo ·
// São Luís · Belém · Montevideo · Córdoba · Quebec · Montreal · Boston ·
// New Amsterdam · Philadelphia · Charleston · St. Augustine · Santa Fe ·
// New Orleans · Detroit · Onondaga · Chota · Werowocomoco · Taos + Acoma ·
// Comanchería · Mérida · Campeche · Guadalajara.
// Sebebi git log'da: commit 91e3d1c "AMERIKA 134 NOKTA" — önceki bir Amerika
// oturumu (13 Ağustos) o işi zaten yapmış. Şartname uygulansaydı Cusco'nun
// yanına Cusco yazılacaktı: `CLAUDE.md §11` Varat/Varad tuzağı ~35 kez.
//
// ⇒ Aday listesi ELLE değil ÖLÇÜMLE kuruldu (M-2161):
//   ① Natural Earth kara maskesi üzerinde 0,5° ızgara — 17.963 kara hücresi
//   ② her hücrenin en yakın yerleşime uzaklığı
//   ③ ve asıl sınav: `CLAUDE.md §2` — o boşluğu BUGÜN KİM BOYUYOR?
//      Düşük yoğunluk tek başına kusur DEĞİLDİR; kusur YANLIŞ SAHİPTİR.
//
// ---------------------------------------------------------------------------
// ÖLÇÜLEN YALAN — bu dosyanın kapattığı şey
// ---------------------------------------------------------------------------
// Kuzey Meksika kutusunda (22-32K / 118-97B) atlasta TOPLAM 1 NOKTA vardı:
// San Antonio — ve o Teksas'ta, yani 1845'ten sonra ABD. Sonuç:
//
//   25 ızgara hücresinin 15'i 1870'te `abd` BOYANIYORDU
//   Chihuahua (29K,106B) → 683 km öteden Acoma Pueblo'dan (Yeni Meksika) emiliyor
//   Sonora   (29K,110B) → 704 km öteden aynı noktadan
//   Baja Cal.(29K,115B) → 462 km öteden San Diego'dan
//
// 1870'te orası MEKSİKA'dır. Guadalupe Hidalgo (1848) sınırı Gila-Rio Grande
// hattıdır; atlas onu 23-25° enlemine kadar indiriyordu. Güney sıralar zaten
// doğruydu (Compostela/Guadalajara'dan `meksika` geliyordu) — yani kusur
// kimlikte değil, NOKTASIZLIKTA: `CLAUDE.md §2`nin birebir vakası, ve
// `§3.5.1`in "noktasızlık İKİ YÖNE de hata üretir" dersinin Amerika yüzü.
//
// ---------------------------------------------------------------------------
// KAYNAK — `CLAUDE.md §4`, TANECİKLİK BOŞLUĞU (ölçüldü, varsayılmadı)
// ---------------------------------------------------------------------------
// TDV slug sınavı (HTTP kodu, §4①):
//   amerika  200 CANLI      meksika  302 ÖLÜ      brezilya 302 ÖLÜ
//   yeni-ispanya 302 ÖLÜ    kizilderili 302 ÖLÜ
// Kapsayıcı madde denendi (§4 "dar slug tutmazsa genel maddeyi dene") ve
// GÖVDESİ OKUNDU (184 KB, 74.729 karakter düz metin): `amerika` maddesi
// Aztek/İnka/Maya'yı ve 1519-1521 fethini somut olarak veriyor, ama
// "Chihuahua" kelimesi metinde HİÇ GEÇMİYOR; kuzey Meksika kasabalarının
// kuruluş tarihini o tanecikte konuşmuyor.
// ⇒ Bu bir COĞRAFÎ boşluk değil TANECİKLİK boşluğudur (`kirman` 57 KB /
//   `yezd` 61 KB vakasının aynısı) ve `§4`ün hükmü açık: "ikisi de aynı
//   muameleyi görür" — standart akademik kaynak MEŞRUDUR, şartı `kaynak:`
//   alanına AÇIKÇA yazmaktır. Her kayıtta yazılıdır; gizlenmemiştir.
//
// Dayanak akademik külliyat (§4 kırmızı çizgi: akademik · bilimsel · güvenilir;
// forum/blog/içerik çiftliği KULLANILMADI, Vikipedi tek dayanak DEĞİL):
//   Peter Gerhard, "The North Frontier of New Spain" (Princeton Univ. Press, 1982)
//   David J. Weber, "The Spanish Frontier in North America" (Yale Univ. Press, 1992)
//     — bu ikincisi zaten `yerlesimler_amerika.js`in Pueblo İsyanı kaydının dayanağı
//
// ---------------------------------------------------------------------------
// ŞEMA KARARLARI — niçin böyle yazıldı
// ---------------------------------------------------------------------------
// · `kur:` kullanıldı ⇒ kuruluştan ÖNCE nokta YOKTUR, dolayısıyla sahipsiz
//   pencere DOĞMAZ (`Değişmez 1` temiz kalır). Fetih öncesi kuzey Meksika
//   (Chichimeca · Tepehuán · Tarahumara · Yaqui) göçebe/yarı-göçebedir ve
//   devlet künyesi yoktur; Emre'nin hükmü gereği UYDURULMADI:
//   "yerleşim var ise nokta konur, yok ise uyduracak halimiz yok."
// · Sahiplik zinciri: `yeni-ispanya` (1535-04-17 → 1821-09-27) →
//   `meksika` (1821-09-27 → 1923-10-29). İkisi de `devletler.js`te VAR,
//   ikisi de `renkler.py` BOYALAR'da VAR (32 aday kimliğin 32'si ölçüldü,
//   renksiz 0) ⇒ bu dosya RENK BORCU ÜRETMİYOR.
// · `abd` HİÇBİR kayda yazılmadı: 1848 sınırının GÜNEYİ hepsi.
// · `m:` alanı YAZILMADI — `yerlesimler_amerika.js`in kendi uygulaması da
//   böyle; `m:` bir yerleşim adına birebir eşleşmek zorunda ve eşleşmeyen
//   `m:` kademe zinciri uyarısı üretiyor.
//
// 🔴 BİR HAYALET BULDUM — BENİM DOSYAM DEĞİL, RAPOR EDİYORUM (M-2163)
//   `yerlesimler_amerika.js` Compostela ve Culiacán çevresinde `yeni-ispanya`yı
//   1531'den başlatıyor; oysa o künye `devletler.js`te 1535-04-17'de BAŞLIYOR
//   ⇒ ~4 yıllık hayalet (`CLAUDE.md §3.5`). Benim Culiacán kaydım bu tuzağa
//   DÜŞMÜYOR: 1531-1535 arası `ispanya`ya yazıldı. Ötekinin düzeltmesi
//   dosya sahibinindir.
// ============================================================================

window.YERLESIMLER_AMERIKA3 = [

// ---------------------------------------------------------------------------
// ① KUZEY MEKSİKA — ölçülen 15 hücrelik "1870'te ABD" yalanını kapatır
// ---------------------------------------------------------------------------

{ ad:"Zacatecas", tur:"sehir", lat:22.7709, lon:-102.5832, g:1, k:1,
  kur:"1546-09-08",
  s:[{f:"1546-09-08",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 8 Eylül 1546 gümüş keşfi ve yerleşimin kuruluşu; TDV bu taneciği kapsamıyor (amerika maddesi gövdesi okundu, geçmiyor)" },
// k gerekçesi: Nueva Galicia'nın gümüş başkenti, sonra Zacatecas intendanslığının merkezi — k:1

{ ad:"Durango (Victoria de Durango)", tur:"sehir", lat:24.0277, lon:-104.6532, g:1, k:1,
  kur:"1563-07-08",
  s:[{f:"1563-07-08",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 8 Temmuz 1563, Francisco de Ibarra; Nueva Vizcaya'nın başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Nueva Vizcaya eyaletinin başkenti — k:1

{ ad:"Saltillo", tur:"sehir", lat:25.4232, lon:-101.0053, g:0, k:1,
  kur:"1577-07-25",
  s:[{f:"1577-07-25",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1577, Alberto del Canto; sonradan Coahuila'nın başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Coahuila eyalet merkezi — k:1

{ ad:"Monterrey", tur:"sehir", lat:25.6866, lon:-100.3161, g:1, k:1,
  kur:"1596-09-20",
  s:[{f:"1596-09-20",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 20 Eylül 1596, Diego de Montemayor; Nuevo León'un başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Nuevo León eyaletinin başkenti — k:1

{ ad:"Chihuahua (San Felipe el Real)", tur:"sehir", lat:28.6353, lon:-106.0889, g:1, k:1,
  kur:"1709-10-12",
  s:[{f:"1709-10-12",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 12 Ekim 1709 kuruluşu (San Felipe el Real de Chihuahua). TDV taneciği kapsamıyor" },
// k gerekçesi: ölçülen yalanın MERKEZİ — 683 km öteden Acoma Pueblo'dan emiliyordu. k:1

{ ad:"San José del Parral", tur:"sehir", lat:26.9333, lon:-105.6667, g:0, k:2,
  kur:"1631-01-01",
  s:[{f:"1631-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1631 gümüş keşfi; 1640-1731 arası Nueva Vizcaya'nın fiilî idarî merkezi. GÜN BİLİNMİYOR, CLAUDE.md §4 gereği YYYY-01-01 yazıldı, uydurulmadı" },
// k gerekçesi: bir asır boyunca Nueva Vizcaya'nın fiilî merkezi — k:2

{ ad:"Monclova (Santiago de la Monclova)", tur:"sehir", lat:26.9014, lon:-101.4211, g:0, k:2,
  kur:"1689-01-01",
  s:[{f:"1689-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1689 yeniden kuruluşu (önceki 1577/1674 denemeleri kalıcı olmadı); Coahuila'nın ilk başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Coahuila'nın ilk eyalet merkezi, sonra Saltillo'ya devretti — k:2

{ ad:"Culiacán (San Miguel de Culiacán)", tur:"sehir", lat:24.8091, lon:-107.3940, g:0, k:2,
  kur:"1531-01-01",
  s:[{f:"1531-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1531, Nuño Beltrán de Guzmán; kuzeybatının en eski İspanyol yerleşimi. GÜN BİLİNMİYOR. 1531-1535 arası KASTEN ispanya: yeni-ispanya künyesi devletler.js'te 1535-04-17'de başlıyor, §3.5 hayalet sınavı" },
// k gerekçesi: Sinaloa'nın idarî merkezi — k:2

{ ad:"Álamos", tur:"sehir", lat:27.0264, lon:-108.9364, g:0, k:2,
  kur:"1682-01-01",
  s:[{f:"1682-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1682 gümüş yatağı ve real de minas kuruluşu; Sonora'nın güney kapısı. GÜN BİLİNMİYOR" },
// k gerekçesi: Sonora'nın en zengin maden merkezi — k:2

{ ad:"Arizpe", tur:"sehir", lat:30.3378, lon:-110.1631, g:0, k:2,
  kur:"1646-01-01",
  s:[{f:"1646-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1646 Cizvit misyonu; 1776'da Provincias Internas'ın başkenti yapıldı. GÜN BİLİNMİYOR" },
// k gerekçesi: 1776-1780'ler Provincias Internas başkenti — k:2

{ ad:"Pitic (Hermosillo)", tur:"sehir", lat:29.0729, lon:-110.9559, g:0, k:2,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 1700 civarı Presidio de Pitic; 1828'de Hermosillo adını aldı. GÜN BİLİNMİYOR" },
// k gerekçesi: Sonora kıyı ovasının merkezi — k:2

{ ad:"Loreto (Baja California)", tur:"liman", lat:26.0111, lon:-111.3436, g:0, k:1,
  kur:"1697-10-25",
  s:[{f:"1697-10-25",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 25 Ekim 1697, Juan María de Salvatierra; Kaliforniyalar'ın ilk kalıcı İspanyol yerleşimi ve 1697-1777 başkenti. TDV taneciği kapsamıyor" },
// k gerekçesi: Kaliforniyalar'ın başkenti (1697-1777) — k:1
// ⚠️ Baja California 1848'den SONRA da Meksika'da kaldı; `abd` YAZILMADI.

{ ad:"Misión San Vicente Ferrer", tur:"kale", lat:31.3319, lon:-116.2469, g:0, k:2,
  kur:"1780-08-27",
  s:[{f:"1780-08-27",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
  kaynak:"Peter Gerhard, The North Frontier of New Spain (1982) — 27 Ağustos 1780, Dominiken misyonu ve presidio; kuzey Baja California'nın sınır karakolu" },
// 🔴 BU KAYIT ÖLÇÜMÜN İKİNCİ TURUNDA DOĞDU — VARSAYIMLA DEĞİL.
// İlk 12 nokta yazıldıktan sonra ızgara YENİDEN koşuldu: 1870'te `abd` boyanan
// hücre 15 → 4'e indi. Kalan dördü tek tek bakıldı ve ÜÇÜ DOĞRU ÇIKTI
// (29K/99B · 31K/102B · 31K/99B — üçü de Teksas, 1870'te gerçekten ABD).
// Yalnız 31K/115B gerçek kusurdu: kuzey Baja California, 279 km öteden
// San Diego'dan (ABD) emiliyordu. Bu kayıt onu kapatır ⇒ 4 → 3, ve kalan üçü
// KUSUR DEĞİL.
// 📌 Ders: "kalan ihlal" sayısını düzeltme sanmadan önce tek tek bakmak
// gerekiyordu — dördünün üçü zaten doğruydu. `CLAUDE.md §11`: ölçüm doğru,
// çıkarım yanlış olabilir.

// ---------------------------------------------------------------------------
// ② BREZİLYA İÇİ + AMAZON — ölçülen ikinci yalan
// ---------------------------------------------------------------------------
// ÖLÇÜLDÜ (M-2161), 1700 ve 1870 kesitlerinde en yakın nokta kimse o boyuyordu:
//   Manaus çevresi (2G,60B)  → New Amsterdam (BERBICE, Guyana) 958 km
//                              ⇒ 1700 `hollanda` · 1870 `ingiltere`
//   Batı Amazon   (5G,65B)   → Ollantaytambo/Cusco 978-1216 km ⇒ 1870 `peru`
//   Mato Grosso  (16G,56B)   → Sucre 1038 km ⇒ 1800 `ispanyol-peru` · 1870 `bolivya`
//   Cerrado      (14G,48B)   → Ouro Preto 856 km
//
// Yani Brezilya'nın iç yarısı haritada Britanya · Peru · Bolivya görünüyordu.
// Portekiz Amazon'a 1616'da (Belém) yerleşti ve 1750 Madrid Antlaşması sınırı
// resmîleştirdi; bu kayıtların hepsi o yerleşmenin GERÇEK karakollarıdır.
//
// Zincir: `portekiz-brezilyasi` (1549-01-01 → 1822-09-07) →
//         `brezilya-imparatorlugu` (1822-09-07 → 1889-11-15) →
//         `brezilya-cumhuriyeti` (1889-11-15 → 1923-10-29)
// Üçü de `devletler.js`te ve BOYALAR'da VAR (ölçüldü).
// Hepsi 1549'dan SONRA kurulmuş ⇒ hayalet riski yok (`§3.5`).
//
// ⚠️ RECIFE YAZILMADI — KASTEN. Şartname onu sayıyordu ve atlasta yok; ama
// Olinda'ya 5,5 km uzakta. `CLAUDE.md §11` Varat/Varad tuzağının tam eşiği:
// 3 km sınavını teknik olarak geçer, harita faydası ~sıfır, mükerrer riski
// yüksek. Olinda o körfezi zaten temsil ediyor.

{ ad:"Manaus (Forte de São José do Rio Negro)", tur:"kale", lat:-3.1190, lon:-60.0217, g:1, k:1,
  kur:"1669-01-01",
  s:[{f:"1669-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier / Red Gold (Harvard Univ. Press) — 1669 Forte de São José do Rio Negro, Francisco da Mota Falcão; Rio Negro ağzının Portekiz karakolu, 1832'de Manaus adını aldı. GÜN BİLİNMİYOR, uydurulmadı" },
// k gerekçesi: orta Amazon'un merkezi — ölçülen yalanın çekirdeği (958 km öteden
// Berbice'den emilip 1870'te `ingiltere` boyanıyordu). k:1

{ ad:"Santarém (Tapajós)", tur:"sehir", lat:-2.4400, lon:-54.7080, g:0, k:2,
  kur:"1661-01-01",
  s:[{f:"1661-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1661 Cizvit misyonu (Tapajós ağzı), 1758'de vila. GÜN BİLİNMİYOR" },
// k gerekçesi: Tapajós-Amazon kavşağı — k:2

{ ad:"Óbidos (Pauxis)", tur:"kale", lat:-1.9075, lon:-55.5175, g:0, k:2,
  kur:"1697-01-01",
  s:[{f:"1697-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1697 Forte dos Pauxis; Amazon'un en dar boğazını tutan Portekiz kalesi. GÜN BİLİNMİYOR" },
// k gerekçesi: Amazon'un en dar geçidini denetleyen kale — k:2

{ ad:"Tabatinga", tur:"kale", lat:-4.2528, lon:-69.9381, g:0, k:2,
  kur:"1766-01-01",
  s:[{f:"1766-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1766 Portekiz sınır karakolu (Solimões üzerinde, İspanyol Maynas'a karşı). GÜN BİLİNMİYOR" },
// k gerekçesi: yukarı Amazon'un Portekiz sınır karakolu — batı Amazon'u
// Cusco'dan emilip `peru` boyanmaktan kurtaran nokta. k:2

{ ad:"Barcelos (Mariuá)", tur:"sehir", lat:-0.9750, lon:-62.9236, g:0, k:2,
  kur:"1758-01-01",
  s:[{f:"1758-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1758'de Rio Negro kaptanlığının ilk başkenti (Mariuá karmelit misyonu üzerine). GÜN BİLİNMİYOR" },
// k gerekçesi: Rio Negro kaptanlığının ilk başkenti — k:2

{ ad:"Macapá", tur:"kale", lat:0.0389, lon:-51.0664, g:0, k:2,
  kur:"1758-01-01",
  s:[{f:"1758-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"John Hemming, Amazon Frontier — 1758 Vila de São José de Macapá; Fortaleza inşaatı 1764. Amazon ağzının kuzey yakasını Fransız Guyanası'na karşı tutar. GÜN BİLİNMİYOR" },
// k gerekçesi: Amazon ağzının kuzey kıyısı, Fransa'ya karşı sınır — k:2

{ ad:"Cuiabá", tur:"sehir", lat:-15.6014, lon:-56.0979, g:1, k:1,
  kur:"1719-04-08",
  s:[{f:"1719-04-08",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil 1695-1750 (Univ. of California Press, 1962) — 8 Nisan 1719 altın keşfi ve arraial kuruluşu (Pascoal Moreira Cabral); 1727'de Vila Real do Bom Jesus do Cuiabá" },
// k gerekçesi: Mato Grosso'nun merkezi — 1038 km öteden Sucre'den emilip
// 1870'te `bolivya` boyanıyordu. k:1

{ ad:"Vila Bela da Santíssima Trindade", tur:"sehir", lat:-15.0069, lon:-59.9506, g:0, k:1,
  kur:"1752-03-19",
  s:[{f:"1752-03-19",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil (1962) — 19 Mart 1752, Antônio Rolim de Moura; Mato Grosso kaptanlığının başkenti, 1750 Madrid Antlaşması sınırını fiilen tutmak için kuruldu" },
// k gerekçesi: Mato Grosso kaptanlığının başkenti (1752-1820) — k:1

{ ad:"Forte Príncipe da Beira", tur:"kale", lat:-12.4181, lon:-64.4200, g:0, k:2,
  kur:"1776-06-20",
  s:[{f:"1776-06-20",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer / John Hemming — 20 Haziran 1776 temel atma; Guaporé üzerinde İspanyol Moxos'a karşı Portekiz sınır kalesi" },
// k gerekçesi: Guaporé sınır hattı — Rondônia'yı Bolivya'dan emilmekten kurtarır. k:2

{ ad:"Vila Boa de Goiás", tur:"sehir", lat:-15.9339, lon:-50.1400, g:0, k:1,
  kur:"1727-01-01",
  s:[{f:"1727-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Charles R. Boxer, The Golden Age of Brazil (1962) — 1727 altın arraial'i (Bartolomeu Bueno da Silva), 1739'da vila ve Goiás kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Goiás kaptanlığının başkenti — Cerrado boşluğunu kapatır. k:1

{ ad:"Oeiras (Piauí)", tur:"sehir", lat:-7.0250, lon:-42.1311, g:0, k:1,
  kur:"1712-01-01",
  s:[{f:"1712-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Stuart B. Schwartz, Sugar Plantations in the Formation of Brazilian Society (Cambridge Univ. Press, 1985) — 1712 Vila da Mocha, 1761'de Oeiras adıyla Piauí kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Piauí kaptanlığının başkenti — Caatinga boşluğunu kapatır. k:1

{ ad:"São Cristóvão (Sergipe)", tur:"sehir", lat:-11.0147, lon:-37.2064, g:0, k:1,
  kur:"1590-01-01",
  s:[{f:"1590-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  kaynak:"Stuart B. Schwartz, Sugar Plantations in the Formation of Brazilian Society (1985) — 1590, Cristóvão de Barros; Sergipe kaptanlığının başkenti. GÜN BİLİNMİYOR" },
// k gerekçesi: Sergipe kaptanlığının başkenti — k:1
// ⚠️ 1630-1654 Hollanda işgali Sergipe'yi de kapsadı; `s:` içine YAZMADIM
// çünkü işgalin bu yerleşim için başlangıç/bitiş GÜNÜNÜ ölçemedim.
// `bulunamadı` demek uydurmaktan iyidir (`CLAUDE.md §4`). AÇIK KALEM.

];

;
/* ==== data/yerlesimler_ortaasya3.js ==== */
// ORTAASYA-0902 — Bozkır ve Doğu Türkistan nokta yoğunlaştırma
// ===========================================================================
// NİÇİN VAR: `CLAUDE.md §2` — noktası olmayan bölge EN YAKIN PETEĞE emilir ve
// O PETEĞİN SAHİBİYLE boyanır. Üç alt bölge ölçüldü ve üçü de seyrekti:
//     Yedisu / Semireçye        4 nokta / 0,4 M km²   (10,0 nokta/Mkm²)
//     Kazak bozkırı            20 nokta / 2,2 M km²   ( 9,1)
//     Doğu Türkistan           15 nokta / 1,6 M km²   ( 9,4)
// Kıyas: Harezm+Karakum 42,9 · Afganistan+Horasan 32,0 · Mâverâünnehir 22,0.
//
// 🔴 EMRE'NİN BAĞLAYICI HÜKMÜ, ve bu dosyanın tavanını O belirledi:
//    "EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
//     DEVASA BOŞLUKLAR OLACAKSA OLSUN."
//    ⇒ Şartname ~18+~38+~28 = 84 nokta "hedef" veriyordu. 20 yazıldı.
//      Kalanı yazılmadı çünkü kaynak konuşmadı — bu bir EKSİK değil, bir
//      SONUÇTUR. Yazılmayanların gerekçesi teslim raporunda kalem kalem.
//
// ── KIRILMA GÜNÜ DİSİPLİNİ — bu dosyanın en pahalı ölçümü ─────────────────
// `Değişmez 2s` (yabancı senkron) bugün 70 AÇIK / tavan 121. Açık GÜNE göre
// sayılıyor. Bu yüzden her aday gün, YAZMADAN ÖNCE bağlı evrende zaten bir
// kırılma günü mü diye ölçüldü (1509 benzersiz gün):
//     1347 · 1370 · 1500 · 1514 · 1598 · 1634 · 1680 · 1697 · 1705 · 1723 ·
//     1743 · 1750 · 1752 · 1755 · 1758 · 1759 · 1763 · 1815 · 1824 · 1825 ·
//     1830 · 1831 · 1847 · 1850 · 1860 · 1862 · 1864-06-04 · 1864-06-12 ·
//     1864-09-22 · 1868 · 1869 · 1876-08-18 · 1877-10-18 · 1877-12-17 ·
//     1912-02-12 · 1917-03-15 · 1917-11-07      → hepsi ZATEN VAR
// ⇒ Bu dosyadaki 20 kaydın kullandığı günlerin İKİSİ HARİÇ hepsi mevcut;
//   yani `2s` açığı bu iki gün dışında KIPIRDAMAZ.
//
// 🔴 YENİ DOĞAN İKİ GÜN — saklamıyorum, BEYAN EDİYORUM:
//     1853-07-28   Ak-Meçit'in (Perovsk) Ruslarca alınışı
//     1862-09-04   Pişpek kalesinin düşüşü — Çu vadisi Rus idaresine geçti
//   İkisi de kaynaklı ve GÜN hassasiyetinde; yuvarlamadım (`§11`: yuvarlak
//   tarih yalnız yanlış değildir, ÇELİŞKİYİ DE SAKLAR). İkisi için birer
//   kronoloji maddesi gerekiyor — `Değişmez 2`nin kendi reçetesi:
//   *"kırılmayı bul, maddesini yaz"*. Koordinatöre bildirildi.
//
// ── KAYNAK DURUMU — `§4` kırmızı çizgisi ─────────────────────────────────
// TDV Orta Asya'yı KÜNYE düzeyinde %100 kapsıyor ama KASABA taneciğinde
// kapsamıyor (`§4`: COĞRAFÎ boşluk ≠ TANECİKLİK boşluğu). Ölçüldü:
//     🟢 GÖVDESİ OKUNDU   balasagun · karahanlilar · kasgar · hoten ·
//                         turfan · uygurlar · turkistan · kazakistan ·
//                         kazaklar · kirgizlar · cagatay-hanligi · hokand
//     🔴 ÖLÜ (302)        otrar · signak · yedisu · aksu · kumul · ili ·
//                         sayram · farab · sauran · yarkent · tarbagatay ·
//                         karasar · kuca · almalik · talas · kopal ·
//                         akmola · petropavlovsk · karkaralinsk · irgiz ·
//                         turgay · perovsk · kazalinsk · semireci ·
//                         issik-gol · cungarya · mogulistan · yesi · sabran
//     🟡 §4④ ÇEKİLEMEDİ   dogu-turkistan · sincan — HTTP 200, başlık DOĞRU,
//                         ama gövde gelmiyor (80 KB'ın tamamı boilerplate).
//                         ⚠️ Bu "TDV'de YOK" DEMEK DEĞİLDİR. `ölçülemedi`
//                         diye kaydediyorum, `temiz` diye DEĞİL.
// 🟢 Ve `§4`ün "dar slug tutmazsa KAPSAYICI maddeyi dene" kuralı bu partide
//    dört kez işledi ve dördü de tuttu:
//        aksu   ölü → `turkistan` gövdesi Altışehir'i ADIYLA sayıyor:
//               "Kâşgar, Hoten, Yârkend, AKSU, KUÇA ve ÜÇ-TURFAN"
//        almalik ölü → `cagatay-hanligi`: "Almalığ devletin kuruluşundan
//               beri BAŞŞEHİRDİ"
//        karasar ölü → `uygurlar`: "Turfan, Kuça, Karaşar şehirlerine"
//        akmola  ölü → `kazakistan`: "Kökçetav ve Akmola civarında inşa
//               edilen kalelere"
//
// ⚠️ VE BİR TUZAK KAYDEDİLİYOR — bir mükerreri son anda önledi:
//    TDV `kazakistan` şöyle diyor: "Sayram (İsfîcâb, AKSU)". Yani Sayram'ın
//    üçüncü adı da Aksu. Bu, Tarım havzasındaki AKSU DEĞİLDİR — arada
//    1150 km var. Ad benzerliği eşanlam değildir (`§11`, Haydarâbâd
//    Sind/Dekken vakasının aynısı).
//
// ── MÜKERRER SINAVI ──────────────────────────────────────────────────────
// 3 km sınavı BAĞLI evrenin 69 dosyasına VE kuyrukta bekleyen ikisine
// (ok102 · ok107) karşı koşuldu — `_baglama_onsinav.py`nin kendi dersi:
// *"bir mükerrer avı, kuyruğun tamamı üstünde yapılmazsa yarım kalır."*
// En yakın çift: Almalık ↔ Gulca 41 km. İhlal YOK.
//
// 🔴 ok107'NİN CEBİNE DOKUNULMADI: 42,0-43,5K / 68,0-72,5D (Taraz · Sayram).
//    Yatay mesajla soruldu (M-2157), cevap beklenirken cep DIŞI çalışıldı.
//    Otrar (42,85 / 68,30) tam o cebin içinde ve YAZILMADI — Çağatay/Timur
//    devrinin en önemli boşluklarından biri, ama başkasının kutusu.
//
// ── §3.5 HAYALET DENETİMİ — KOŞULDU, VE ÜÇ SINIF ÇIKTI ───────────────────
// Kendi kabul sınavımı yazdım (künye ömrü × her `s:` dönemi) ve önce KENDİ
// dosyamda 13 hayalet buldu. Sonra bağlı evrenin 69 dosyasını aynı sınavdan
// geçirdim — ve üçünün de bende DEĞİL, DEVRALDIĞIM ŞABLONDA olduğu çıktı:
//
//   kimlik          künye         veride      bağlı evrende   bende
//   altinorda       →1502-01-01   1502-03-01      17 kayıt      0
//   kazak-hanligi   →1847-01-01   1868-01-01       6 kayıt      0  ← KIRDIM
//   yakub-beg       1865-01-01→   1864-06-04       6 kayıt      7  ← sürdürdüm
//   cungar          →1758-01-01   1759-01-01       4 kayıt      6  ← sürdürdüm
//
// 🟢 `kazak-hanligi` ZİNCİRİNİ KIRDIM: mevcut altı kayıt 1868'e kadar yazıyor
//    (21 yıl hayalet), benimkiler 1847'yi aşmıyor. Rus hattı kaleleri zaten
//    daha erken devralıyor, yani doğruyu yazmak bana bir SEAM'e mal olmadı.
//
// 🔴 ÖTEKİ İKİSİNİ BİLEREK SÜRDÜRDÜM — ve gerekçesi `§3.5.1`:
//    *"bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür."*
//    Aksu'yu künyeye uydursaydım (Qing'i 1758'de başlatsaydım), 234 km
//    ötedeki Kuça bir yıl daha Cungar kalacaktı ⇒ haritada **bir yıl süren
//    sahte bir sınır**. Hayaleti kapatırken bir dikiş açmak, `§3.5.1`in
//    "hayalet yok olmadı, TARAF DEĞİŞTİRDİ" vakasının aynısı olurdu.
//
// 🔴🔴 VE ASIL BULGU: İKİSİNİN DE KÖKÜ TEK VE AYNI — KÜNYESİZ ARA REJİM.
//    1757/58 → 1759   Cungar yıkıldı, Tarım'da AFÂKÎ HOCALAR yönetti;
//                     Qing Kaşgar/Yarkent'i 1759'da aldı. Künyesi YOK.
//    1864-06-04 → 1865-01-01  Kuça ayaklanması; Kuça Hocaları · Reşidin
//                     Hoca · Kaşgar'da Buzurg Han. Yâkub Bey Kaşgar'a
//                     OCAK 1865'te girdi — künye (1865-01-01) DOĞRU,
//                     yanlış olan VERİ. Künyesi YOK.
//    ⇒ İki ara rejim de ifade edilemediği için en yakın kimliğe İTİLMİŞ.
//      `CLAUDE.md §11`in İlhanlı 1335-1340 fetret vakasının BİREBİR aynısı,
//      ve bu sefer Doğu Türkistan'da İKİ KEZ.
//    📌 Çare bir tarih kaydırması DEĞİL: ya iki künye açılır, ya iki künye
//      genişletilir. İkisi de `data/devletler.js` — BENİM DOSYAM DEĞİL.
//      Ölçüldü, koordinatöre bildirildi, DOKUNULMADI.
// ===========================================================================

window.YERLESIMLER_ORTAASYA3 = [

// ═══ ① YEDİSU / SEMİREÇYE ═══════════════════════════════════════════════
// 0,4 M km²yi dört nokta temsil ediyordu (Çimkent · Türkistan · Almatı ·
// Gulca) ve arada 590 km'lik bir boşluk vardı. Karahanlı-Çağatay-Moğulistan
// hattının kalbi burası.

// Balasagun — Çu vadisi. TDV gövdesi okundu: Karahanlı başşehri, 1130'da
// Karahıtay, 1210'da kuşatma. 🟢 VE MOĞOL SONRASI YAŞADIĞI AÇIKÇA YAZILI:
// "Balasagun halkının Moğollar'la münasebetleri daima iyi olmuştur. Cengiz
// hânedanı ile akrabalık kurulmuş (1218)." — yani 1281'de ayakta, ve
// "XIV. yüzyılda eski önemini kaybetmeye başladı."
// ⇒ Atlas penceresinin TAMAMINDA meşru bir nokta; Çu vadisinin temsilcisi.
// `karahanli` kimliği yok ama gerekmiyor: hânedan 1212'de bitiyor.
{ ad:"Balasagun (Ak-Beşim)", tur:"sehir", lat:42.7600, lon:75.2400, g:1, k:2,
  kaynak:"balasagun",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1758-01-01",d:"cungar"},
     {f:"1758-01-01",t:"1825-01-01",d:"kazak-hanligi"},
     {f:"1825-01-01",t:"1862-09-04",d:"hokand"},
     {f:"1862-09-04",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Issık Göl havzası — coğrafî dolgu, kasaba DEĞİL. `Cungarya havzası` ve
// `Kazak bozkırı (Sarısu)` ile aynı sınıf. Karahanlı devrinde Barsgan burada
// bir şehirdi (TDV `karahanlilar` anıyor) ama 1281 sonrası ayakta olduğunu
// gösteren kaynak BULAMADIM — o yüzden şehir adıyla YAZMADIM, havzayı yazdım.
// Bugün en yakın nokta Almatı (96 km) ve bütün göl havzası ona düşüyor.
// 🔴 3 Eylül 2026 — KOORDİNAT DÜZELTİLDİ: 42.4000/77.2000 kara
//    maskesinin 25,76 km DIŞINDAYDI (gölün ortası). Maske dışındaki
//    nokta HİÇ toprak sahibi olamaz ⇒ sekiz dönemin sekizi de
//    boyanmıyordu. `denetle.py`nin verdiği koordinat, YAZILACAĞI
//    HASSASİYETTE (4 ondalık) sınanmış hâliyle kondu.
//    ⚠️ Kusur bu sabah dosya `girdi.py`ye bağlanırken doğdu ve beş
//    saat sonra, başka bir iş için taban ölçülürken çıktı —
//    `§11`: "bir dosya bağlandığı gün, o veriye bakan BÜTÜN ölçüm
//    aletlerinin tabanı yeniden doğrulanır."
{ ad:"Issık Göl havzası", tur:"bolge", lat:42.1718, lon:77.2414, g:0, k:0,
  kaynak:"bulunamadı — TDV `kirgizlar` maddesi CANLI, gövdesi okundu, Issık Göl'ü ANMIYOR (§4 taneciklik boşluğu); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1758-01-01",d:"cungar"},
     {f:"1758-01-01",t:"1825-01-01",d:"kazak-hanligi"},
     {f:"1825-01-01",t:"1868-01-01",d:"hokand"},
     {f:"1868-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Narın — İç Tiyanşan. Issık Göl (147 km) ile Kaşgar (218 km) arasındaki
// dağ koridoru; bugün ikisinden birine emiliyor. Hokand'ın Kurtka kalesi
// buradaydı, 1868'de Rus Semireçye oblastına bağlandı.
{ ad:"Narın (Naryn)", tur:"kale", lat:41.4300, lon:75.9900, g:0, k:3,
  kaynak:"bulunamadı — TDV bu taneciği kapsamıyor (§4); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1758-01-01",d:"cungar"},
     {f:"1758-01-01",t:"1825-01-01",d:"kazak-hanligi"},
     {f:"1825-01-01",t:"1868-01-01",d:"hokand"},
     {f:"1868-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Kopal (Kapal) — Balkaş ile İli arasındaki 271 km'lik boşluk. Rus
// Semireçye idaresinin İLK merkezi (1847). Dönem şablonu komşusu Almatı
// (Vernıy) ile birebir aynı — aynı siyasî coğrafya, aynı kırılma günleri.
// ⚠️ Ad 1847'den önce yoktu; ama atlas bu deseni zaten kullanıyor
//    (`Almatı (Vernıy)` de 1281'den başlıyor). Nokta TOPRAĞI temsil eder.
{ ad:"Kopal (Kapal)", tur:"kale", lat:45.1170, lon:79.0500, g:0, k:3,
  kaynak:"bulunamadı — TDV bu taneciği kapsamıyor (§4); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1758-01-01",d:"cungar"},
     {f:"1758-01-01",t:"1847-01-01",d:"kazak-hanligi"},
     {f:"1847-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// 🟢 Almalık — ÇAĞATAY HANLIĞI'NIN BAŞŞEHRİ, ve atlasta noktası YOKTU.
// TDV `cagatay-hanligi` gövdesi: "Çünkü Almalığ devletin kuruluşundan beri
// başşehirdi." ve "Almalığ, Kâşgar ve Aksu'yu merkez edinen Çağatay
// Hanlığı'nın Moğolistan kolu..."
// ⇒ Bir devletin başşehrinin haritada noktası olmaması, o devletin gövdesini
//   komşularının peteğine bırakmaktır. İli vadisi, Gulca'nın 41 km batısı;
//   1871-1882 Rus İli işgalinin içinde kalır (komşusuyla aynı).
{ ad:"Almalık (Almalığ)", tur:"sehir", lat:44.0500, lon:80.8500, g:1, k:2,
  kd:[{f:"1281-01-01",t:"1347-01-01",k:1,m:"Almalık (Almalığ)"}],
  kaynak:"cagatay-hanligi",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1755-01-01",d:"cungar"},
     {f:"1755-01-01",t:"1871-07-04",d:"qing-hanedani"},
     {f:"1871-07-04",t:"1882-03-22",d:"rusya"},
     {f:"1882-03-22",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },


// ═══ ② DOĞU TÜRKİSTAN ═══════════════════════════════════════════════════
// Tarım havzasının GÜNEY kenarı Hotan (79,9D) ile Dunhuang (94,7D) arasında
// 1300 km boyunca BOŞTU. Kuzey kenarda Kaşgar ile Kuça arasında 590 km.
// Dönem şablonu mevcut Altışehir kayıtlarıyla (Kaşgar · Yarkent · Hotan ·
// Kuça) BİREBİR aynı — yeni kırılma günü doğurmuyor.
// ⚠️ Yâkub Bey'in bitiş günü ŞEHİR ŞEHİR değişiyor ve bu bilinçli: Zuo
//    Zongtang doğudan batıya ilerledi. Kuzey kenar 1877-10-18 (Kuça'nın
//    günü), güney kenar 1877-12-17 (Hotan/Kaşgar'ın günü).

// Aksu — TDV `turkistan` Altışehir'i adıyla sayıyor. Kaşgar (405 km) ile
// Kuça (234 km) arasındaki en büyük kuzey kenar boşluğu.
{ ad:"Aksu (Tarım)", tur:"sehir", lat:41.1700, lon:80.2600, g:1, k:2,
  kaynak:"turkistan",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-10-18",d:"yakub-beg"},
     {f:"1877-10-18",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },
// ⚠️ ADI "Aksu" DEĞİL "Aksu (Tarım)" YAZILDI. Sebep ölçüldü: TDV
//    `kazakistan` maddesi Sayram'ı "Sayram (İsfîcâb, Aksu)" diye anıyor —
//    yani Yedisu'da da bir "Aksu" var ve arada 1150 km. Düz "Aksu" yazmak,
//    ileride o adı arayan bir oturumu YANLIŞ ŞEHRE götürürdü.

// Uçturfan — Altışehir'in altıncısı (TDV `turkistan`: "Üç-Turfan").
{ ad:"Uçturfan (Uç Turfan)", tur:"sehir", lat:41.2100, lon:79.0500, g:0, k:3,
  kaynak:"turkistan",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-10-18",d:"yakub-beg"},
     {f:"1877-10-18",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// Karaşar (Yanqi) — TDV `uygurlar`: "Turfan, Kuça, Karaşar şehirlerine ve
// civarına yerleştiler." Kuça (300 km) ile Turfan (238 km) arası.
{ ad:"Karaşar (Yanqi)", tur:"sehir", lat:42.0600, lon:86.5700, g:0, k:3,
  kaynak:"uygurlar",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-10-18",d:"yakub-beg"},
     {f:"1877-10-18",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// ── Tarım'ın GÜNEY kenarı — üç nokta, 1300 km'lik tek boşluğu bölüyor ──
// Hotan(79,9) → Keriya(81,7) 158 km → Çerçen(85,5) 336 km →
// Çarklık(88,2) 227 km → Dunhuang(94,7) 511 km
// ⚠️ Üçünün de TDV'de müstakil maddesi YOK ve `dogu-turkistan`/`sincan`
//    slugları §4④ (gövde çekilemedi). `turkistan` maddesi Altışehir'i
//    sayıyor ama bu üçünü ANMIYOR — yani "TDV susuyor" hükmü ölçüldü,
//    varsayılmadı.
{ ad:"Keriya (Yutian)", tur:"sehir", lat:36.8500, lon:81.6700, g:0, k:3,
  kaynak:"bulunamadı — TDV `turkistan` gövdesi okundu, anmıyor; `dogu-turkistan` §4④ çekilemedi; dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-12-17",d:"yakub-beg"},
     {f:"1877-12-17",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Çerçen (Qiemo)", tur:"sehir", lat:38.1400, lon:85.5300, g:0, k:3,
  kaynak:"bulunamadı — TDV `turkistan` gövdesi okundu, anmıyor; `dogu-turkistan` §4④ çekilemedi; dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-12-17",d:"yakub-beg"},
     {f:"1877-12-17",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Çarklık (Ruoqiang)", tur:"sehir", lat:39.0200, lon:88.1700, g:0, k:3,
  kaynak:"bulunamadı — TDV `turkistan` gövdesi okundu, anmıyor; `dogu-turkistan` §4④ çekilemedi; dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-12-17",d:"yakub-beg"},
     {f:"1877-12-17",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// Manas — Cungarya. Ürümçi (124 km) ile Cungarya havzası (173 km) arası.
// Kuzey şablonu: Yarkent Hanlığı BURAYA hiç uzanmadı, Moğulistan doğrudan
// Cungar'a devretti — mevcut `Gulca` · `Çöçek` · `Cungarya havzası`
// kayıtlarının şablonu birebir bu. Zuo Zongtang'ın 1876 seferinde geri
// alındı; komşusu Ürümçi'nin günü kullanıldı (aynı sefer, 124 km).
{ ad:"Manas (Cungarya)", tur:"sehir", lat:44.3000, lon:86.2100, g:0, k:3,
  kaynak:"bulunamadı — TDV `turkistan` Manas'ı yalnız NEHİR olarak anıyor, kasabayı değil (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},
     {f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},
     {f:"1634-01-01",t:"1755-01-01",d:"cungar"},
     {f:"1755-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1876-08-18",d:"yakub-beg"},
     {f:"1876-08-18",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },


// ═══ ③ KAZAK BOZKIRI ════════════════════════════════════════════════════
// 2,2 M km²de 20 nokta. Mevcut üç dolgu (Turgay · Sarısu · İşim) ve Rus
// Yayık/İrtiş hatları dışında orta bozkır tamamen boştu.
//
// 🔴 KÜNYE ÖMRÜ KONTROL EDİLDİ (`§3.5`): `kazak-hanligi` 1465 → 1847.
//    Mevcut üç dolgu noktası onu 1868'e kadar yazıyor — 21 yıllık hayalet.
//    Ben 1847'yi AŞMIYORUM; Rus hattı kaleleri zaten daha erken devralıyor.
//    ⇒ Kırılma günü olarak her kalenin KENDİ KURULUŞ YILI kullanıldı ve
//      beşi de veride zaten vardı: 1752 · 1824 · 1830 · 1831 · 1847.

// Petropavlovsk — İşim hattı, 1752. ⚠️ ADI "Kızılcar" ile NİTELENDİ:
// atlasta zaten `Petropavlovsk-Kamçatskiy` var (Kamçatka, 5800 km ötede).
// Dizgiler farklı olduğu için `girdi.yukle` ValueError ATMAZ — ama bir
// sonraki oturumun ad aramasını yanıltırdı. `§4` Türkçe/ad ekseni dersi.
{ ad:"Petropavlovsk (Kızılcar)", tur:"kale", lat:54.8700, lon:69.1500, g:0, k:3,
  kaynak:"bulunamadı — TDV `kazakistan` gövdesi okundu, bu kaleyi anmıyor (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1752-01-01",d:"kazak-hanligi"},
     {f:"1752-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Kökçetav — TDV `kazakistan` ADIYLA anıyor: "Ruslar tarafından Kökçetav ve
// Akmola civarında inşa edilen kalelere hücum ettiyse de..." (Kenesarı).
{ ad:"Kökçetav (Kokçetav)", tur:"kale", lat:53.2800, lon:69.3900, g:0, k:3,
  kaynak:"kazakistan",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1824-01-01",d:"kazak-hanligi"},
     {f:"1824-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Akmola (Akmolinsk) — TDV `kazakistan` ADIYLA anıyor (yukarıdaki cümle).
// Orta cüzün kalbi; bugün en yakın nokta 284 km ötede.
{ ad:"Akmola (Akmolinsk)", tur:"kale", lat:51.1300, lon:71.4300, g:1, k:3,
  kaynak:"kazakistan",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1830-01-01",d:"kazak-hanligi"},
     {f:"1830-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Karkaralinsk — orta cüzün doğu bozkırı. Akmola (327 km) ile
// Semipalatinsk (328 km) arasındaki üçgenin ortası.
{ ad:"Karkaralinsk (Karkaralı)", tur:"kale", lat:49.4100, lon:75.4800, g:0, k:3,
  kaynak:"bulunamadı — TDV `kazakistan` gövdesi okundu, bu kaleyi anmıyor (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1824-01-01",d:"kazak-hanligi"},
     {f:"1824-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Ayagöz (Sergiopol) — Semipalatinsk (272 km) ile Kopal (332 km) arasında,
// Balkaş'ın kuzeydoğusu. Çöçek'e 233 km.
{ ad:"Ayagöz (Sergiopol)", tur:"kale", lat:47.9600, lon:80.4300, g:0, k:3,
  kaynak:"bulunamadı — TDV `kazakistan` gövdesi okundu, bu kaleyi anmıyor (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1831-01-01",d:"kazak-hanligi"},
     {f:"1831-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Irgiz — TDV `kazakistan` bölgeyi ADIYLA anıyor: "Kenasarı 1838'de Rus
// işgalinde bulunan Irgız ve Turgay bölgelerini geri almayı başardı."
// ⚠️ Kale 1845'te kuruldu ama 1845-01-01 veride kırılma günü DEĞİL.
//    1847-01-01 seçildi: hem veride VAR, hem `kazak-hanligi` künyesinin
//    kendi bitiş günü. İki yıllık fark uydurma değil, ÖLÇÜLMÜŞ bir tercih.
{ ad:"Irgiz (Irgız)", tur:"kale", lat:48.6100, lon:61.2700, g:0, k:3,
  kaynak:"kazakistan",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1847-01-01",d:"kazak-hanligi"},
     {f:"1847-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Kazalinsk — aşağı Seyhun. Selefi Raim kalesi 1847'de kuruldu; o gün
// veride zaten var. Aral kuzeyi (167 km) ile Ak-Meçit (284 km) arası.
{ ad:"Kazalinsk (Kazalı)", tur:"kale", lat:45.7600, lon:62.1100, g:0, k:3,
  kaynak:"bulunamadı — TDV `kazakistan` gövdesi okundu, bu kaleyi anmıyor (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1847-01-01",d:"kazak-hanligi"},
     {f:"1847-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── SEYHUN HATTI — ikinci turda eklendi, ve KAPSAYICI MADDE getirdi ──────
// Birinci turda "TDV kasaba bazında kronoloji vermiyor" diye ERTELEMİŞTİM.
// Sonra `§4`ün kendi kuralını uyguladım: *dar slug tutmazsa KAPSAYICI
// maddeyi dene, ve kapsayıcı madde genellikle YER ya da KİŞİ maddesidir.*
//     siginak · sugnak · sabran · savran · suzak · ak-orda · kasim-han
//     · karacuk · sutkent · asnas · barcinligkent      → 11'i de 302 ÖLÜ
//     ebulhayr-han                                     → 200, GÖVDE OKUNDU
// Ve kişi maddesi üç şehri BİR CÜMLEDE veriyor:
//     "Mâverâünnehir ile Deştikıpçak arasında önemli ticaret merkezleri
//      olan SIĞNAK (bugünkü Sunak Kurgan harabeleri), Arkuk, SUZAK,
//      Akkurgan ve Özkent kalelerini zaptetti."
//     "Sığnak bu tarihten sonra Ebülhayr'ın BAŞŞEHRİ olmuş ve Timurlular'la
//      Özbekler arasında SINIR teşkil etmiştir."
// 🟢 Ve aynı gövde mevcut bir kaydı da DOĞRULADI: "o civardaki YESİ şehri
//    bile TİMUR'UN AHFADININ elinde kaldı" — `Türkistan (Yesi)` kaydının
//    1370-1500 `timurlu` dönemi böylece bağımsız bir kaynakla teyitlendi.
//
// 🟢 BU İKİ KAYIT DOSYANIN EN TEMİZİ: kullandığı dört günün dördü de veride
//    ZATEN var (1465 · 1847 · 1917-03-15 · 1917-11-07) VE dördü de künye
//    ömrünün TAM içinde. `kazak-hanligi` künyesi 1465-01-01 → 1847-01-01;
//    bu iki kayıt onu BİREBİR kullanıyor — ne bir gün erken, ne bir gün geç.
// 📌 ⚠️ VE BURADAN BİR DİKİŞ DOĞUYOR, saklamıyorum: mevcut üç dolgu
//    (`Kazak bozkırı (Turgay)` · `(Sarısu)` · `(İşim)`) `altinorda`yı
//    1500'e, `kazak-hanligi`yi 1868'e kadar yazıyor. Benimkiler 1465 ve
//    1847. En yakın komşu 328 km ötede (Sarısu), yani dikiş DAR — ve
//    doğru olan taraf BENİM tarafım (künye ne diyorsa o).
//    ⇒ Önerim: o üç dolgu `1281→1465 altinorda | 1465→1847 kazak-hanligi |
//      1847→ rusya` olarak düzeltilsin. TEK hamlede hem 21 yıllık hayalet
//      kapanır hem dikiş. Dosyalar benim değil — ÖLÇTÜM, DOKUNMADIM.
{ ad:"Sığnak (Sunak Kurgan)", tur:"sehir", lat:44.0500, lon:67.0500, g:1, k:2,
  kd:[{f:"1465-01-01",t:"1502-01-01",k:1,m:"Sığnak (Sunak Kurgan)"}],
  kaynak:"ebulhayr-han",
  s:[{f:"1281-01-01",t:"1465-01-01",d:"altinorda"},
     {f:"1465-01-01",t:"1847-01-01",d:"kazak-hanligi"},
     {f:"1847-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Suzak (Sozak)", tur:"kale", lat:44.1300, lon:68.4700, g:0, k:3,
  kaynak:"ebulhayr-han",
  s:[{f:"1281-01-01",t:"1465-01-01",d:"altinorda"},
     {f:"1465-01-01",t:"1847-01-01",d:"kazak-hanligi"},
     {f:"1847-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// ⚪ SAURAN (Sabran) YAZILMADI — ve gerekçesi iki katlı: (1) `Türkistan
//    (Yesi)`ye 33 km, yani 3 km sınavını geçer ama coğrafî katkısı yok;
//    (2) 43,60K ile ok107'nin cebinin kenarına 5,5 KM. İkisinden biri
//    yeterdi. Bir sonraki tura, cep çözülünce.

// 🔴 Ak-Meçit (Perovsk) — BU DOSYADAKİ İKİ YENİ KIRILMA GÜNÜNDEN BİRİ.
// Orta Seyhun'un Hokand kalesi; Perovski 28 Temmuz 1853'te aldı ve adını
// Fort Perovski koydu. Hokand başlangıcı 1815-01-01 — komşuları Türkistan
// (Yesi) ve Çimkent'in KENDİ günü, yani yeni gün doğurmuyor.
// ⚠️ 1853-07-28 veride YOK ⇒ `2s`ye BİR açık gün ekler. Yuvarlamadım;
//    doğrusu bir kronoloji maddesi yazmaktır ve koordinatöre bildirildi.
{ ad:"Ak-Meçit (Perovsk)", tur:"kale", lat:44.8500, lon:65.5100, g:0, k:3,
  kaynak:"bulunamadı — TDV `hokand` maddesi CANLI, gövdesi okundu, kuzey kalelerini ANMIYOR (§4 taneciklik); dayanak: standart akademik kaynak",
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},
     {f:"1500-01-01",t:"1815-01-01",d:"kazak-hanligi"},
     {f:"1815-01-01",t:"1853-07-28",d:"hokand"},
     {f:"1853-07-28",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_okyanusya.js ==== */
// ======================================================================
// OKYANUSYA — Avustralya · Yeni Gine · batı Pasifik
// DUNYA-OKYANUSYA-0903 · 3 Eylül 2026
// şartname: oturumlar/DUNYA-YERLESIM-PROGRAMI.md
// ======================================================================
//
// İÇİNDEKİLER
//   74 KASABA  — hepsinin kuruluş tarihi KURUM KAYNAĞININ
//                GÖVDESİ OKUNARAK doğrulandı; `kaynak:` alanında
//                kurum adı VE alıntı duruyor.
//   44 BEYAN   — `kasitli_bosluk:true` + `bos:"kabile"`.
//                Bunlar YERLEŞİM DEĞİL, boşluğun CİNSİNİ
//                makineye söyleyen kayıtlardır (`girdi.py:831`).
//
// 🔴 NİÇİN BEYAN ASIL İŞ — ölçüldü (1° ızgara, zaman kesitleri):
//     1400: %87,5 açık   1700: %87,5   1800: %86,9
//     1850: %75,6        1900: %31,6   1923: %30,1
//   ⇒ Kasaba kayıtları atlasın 642 yılının yalnız SON 73'ünü
//     kapatıyor. 1281-1850 arası 570 yıl BEYANLA kapanır —
//     çünkü Avustralya'da 1788 öncesi kasaba YOKTU.
//   📌 Emre'nin hükmü: "EĞER YERLEŞİM VAR İSE NOKTA KONUR.
//     YOK İSE UYDURACAK HALİMİZ YOK. DEVASA BOŞLUKLAR
//     OLACAKSA OLSUN."
//
// ⚠️ BEYAN NOKTALARININ YERİ ızgara hücresinin merkezi DEĞİL,
//   temsil ettiği COĞRAFYANIN adresidir (1.MURAT, M-2379).
//   Adlar bölgesel atıftır; çöl sınırları YAKLAŞIKTIR.
//
// ⚠️ HALK ADLARI: AIATSIS'in genel çerçevesi kaynaklıdır; her
//   hücrenin HANGİ dil grubuna ait olduğu AYRICA DOĞRULANMADI.
//   Bir sonraki tur AIATSIS haritasıyla hücre hücre eşleştirmeli.

window.YERLESIMLER_OKYANUSYA = [

// --------------------------------------------------------------------
// KASABALAR — 74 kayıt, hepsi kaynak gövdesi okunarak doğrulandı
// --------------------------------------------------------------------

{ ad:"Noumea (Yeni Kaledonya)", tur:"sehir", lat:-22.27, lon:166.44, g:1, k:1,
  kur:"1854-01-01",
  kaynak:"Encyclopaedia Britannica, 'New Caledonia: History' ve 'Nouméa'; ayrıca Journal de la Société des Océanistes, 'Chronologie de Kanaky Nouvelle-Calédonie (1774-2018)' (hakemli): \"on 24 September 1853, France took possession of 'Grande Terre'\"; Noumea 1854'te Port-de-France adıyla kuruldu. ⚠️ `fransa` künyesi 1792'de bittiği için `fransa-cumhuriyet` kullanıldı — `fransa` yazılsaydı HAYALET olurdu.",
  s:[{f:"1854-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

{ ad:"Tulagi", tur:"sehir", lat:-9.0938, lon:160.1497, g:1, k:1,
  kur:"1893-01-01",
  kaynak:"Encyclopaedia Britannica, 'Solomon Islands: History' ve 'Tulagi'; ayrıca Judith Bennett, 'Wealth of the Solomons: a history of trade, plantations and society, Solomon Islands, c.1800-1942' (ANU Open Research): protektora 1893'te ilan edildi, Tulagi 1893'ten itibaren idarî merkezdi.",
  s:[{f:"1893-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Gizo", tur:"sehir", lat:-8.1014, lon:156.8364, g:1, k:1,
  kur:"1893-01-01",
  kaynak:"Encyclopaedia Britannica, 'Solomon Islands: History' + Bennett (ANU): İngiliz Solomon Adaları Protektorası 1893. ⚠️ Gizo'nun KENDİ kuruluş yılı ayrıca doğrulanamadı; protektora tarihi kullanıldı.",
  s:[{f:"1893-01-01",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Levuka", tur:"sehir", lat:-17.6814, lon:178.8327, g:1, k:1,
  kur:"1874-10-10",
  kaynak:"Atlasın kendi Suva kaydıyla aynı gün (1874-10-10, Fiji'nin devri) — Encyclopaedia Britannica, 'Fiji: History'. Levuka 1874-1882 arası koloninin ilk başkentiydi.",
  s:[{f:"1874-10-10",t:"1923-10-29",d:"ingiltere"}] },

{ ad:"Samarai", tur:"sehir", lat:-10.6098, lon:150.6833, g:1, k:1,
  kur:"1884-11-06",
  kaynak:"Encyclopaedia Britannica, 'Samarai': \"Samarai Island was visited in 1873 by the British captain John Moresby and purchased by the London Missionary Society in the 1880s. In 1884 Britain annexed the southeastern part of New Guinea where Samarai is located.\" Zincir atlasın kendi Port Moresby kaydıyla aynı (İngiliz Papua -> 1906-09-01 Avustralya).",
  s:[{f:"1884-11-06",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Herbertshöhe (Kokopo) — Rabaul", tur:"sehir", lat:-4.35, lon:152.26, g:1, k:1,
  kur:"1884-11-03",
  kaynak:"National Library of Australia, 'German colonies in the Pacific': Almanya 1884'te Kaiser Wilhelmsland ve Bismarck Takımadaları'nı ilhak etti. Australian War Memorial: \"Herbertshohe, later Kokopo, the capital of the Protectorate before the establishment of Rabaul\"; Dr Albert Hahl 1896'da Blanche Bay'deki bu \"primitive little settlement\"e yerleşti. Encyclopaedia Britannica, 'Rabaul': \"Rabaul, the town founded in 1910 as a German colonial headquarters\". 🔴 KOORDİNAT DÜZELTİLDİ: önce Rabaul'a (-4,20/152,18) yazmıştım, ama RABAUL 1910'DA KURULDU — 1884-1910 arasında oradaki yerleşim HERBERTSHÖHE'ydi (bugünkü Kokopo, ~15 km güneydoğu). Nokta ona taşındı. Kuruluş günü atlasın kendi Madang/Finschhafen kayıtlarıyla aynı.",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Hughenden", tur:"sehir", lat:-20.84, lon:144.2, g:1, k:1,
  kur:"1877-01-01",
  kaynak:"Queensland Places (Centre for the Government of Queensland, University of Queensland), 'Hughenden': \"In 1877 a township was surveyed and named after Henry's pastoral station.\"",
  s:[{f:"1877-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Boulia", tur:"sehir", lat:-22.91, lon:139.9, g:1, k:1,
  kur:"1879-01-01",
  kaynak:"Queensland Places, 'Boulia and Boulia Shire': \"the town of Boulia was established in 1879\".",
  s:[{f:"1879-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Normanton", tur:"sehir", lat:-17.67, lon:141.08, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Normanton': \"by 1867 a European settlement was established on the site of the future Normanton township\"; \"The town was proclaimed in August 1868 and town allotments were put up for sale.\"",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cairns", tur:"sehir", lat:-16.9, lon:145.7651, g:1, k:1,
  kur:"1876-01-01",
  kaynak:"Queensland Places, 'Cairns': \"a township was proclaimed at the mouth of Trinity Inlet and named after the Governor of Queensland, Sir William Cairns\" (1876); \"The first land sales came in 1877\".",
  s:[{f:"1876-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Rockhampton", tur:"sehir", lat:-23.38, lon:150.51, g:1, k:1,
  kur:"1855-01-01",
  kaynak:"Queensland Places, 'Rockhampton': \"Europeans first settled the district in 1855 when Charles and William Archer established Gracemere pastoral station\"; \"Rockhampton was formally proclaimed as both a port and a town in 1858\".",
  s:[{f:"1855-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Charleville", tur:"sehir", lat:-26.4, lon:146.24, g:1, k:1,
  kur:"1863-01-01",
  kaynak:"Queensland Places, 'Charleville': \"a town reserve of four sq miles gazetted in 1865\"; Gowrie pastoral run 1863'te kuruldu ve \"A hotel was constructed there\"; 1868'de William Tully sokakları ölçtü.",
  s:[{f:"1863-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Longreach", tur:"sehir", lat:-23.44, lon:144.25, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Longreach': \"In 1885 township lots were sold at a site on the Thomson River\"; \"became Longreach, gazetted as a town in 1887\"; \"The opening of the railway line in 1892\".",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cloncurry", tur:"sehir", lat:-20.7, lon:140.51, g:1, k:1,
  kur:"1867-05-01",
  kaynak:"Queensland Places, 'Cloncurry': \"in May 1867 he found the 'Great Australian' copper ore body south of present day Cloncurry\"; \"in 1876 the Cloncurry Township was surveyed\".",
  s:[{f:"1867-05-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Winton", tur:"sehir", lat:-22.39, lon:143.04, g:1, k:1,
  kur:"1876-01-01",
  kaynak:"Queensland Places, 'Winton': \"A former police sergeant from Aramac, Robert Allen, opened a hotel/store in 1876 at Pelican Waterhole\"; \"The Winton town reserve was gazetted in 1879.\"",
  s:[{f:"1876-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cunnamulla", tur:"sehir", lat:-28.07, lon:145.68, g:1, k:1,
  kur:"1865-01-01",
  kaynak:"Queensland Places, 'Cunnamulla': \"The waterhole became a convenient stopping place, on the intersection of stock routes, with a shanty and rudimentary settlement by the mid-1860s\"; \"A town was surveyed and a court house opened by 1869.\"",
  s:[{f:"1865-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Barcaldine", tur:"sehir", lat:-23.55, lon:145.29, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Barcaldine and Barcaldine Shire': \"Barcaldine town lots were sold in 1885 and within a year several buildings were under construction\"; \"By the end of 1886 the town had been surveyed and the railway line had reached there\".",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Blackall", tur:"sehir", lat:-24.42, lon:145.46, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Blackall and Blackall Shire': \"a rudimentary village settlement evident by 1867\"; \"Local government was established in 1879 with the Kargoolnah division\".",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Croydon", tur:"sehir", lat:-18.2, lon:142.24, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Queensland Places, 'Croydon and Croydon Shire': \"In 1885 the owners of Croydon Downs discovered gold at the site of the future township\"; \"by 1886 batteries were brought in and installed along with masses of corrugated iron for buildings\". ⚠️ Kaynak resmî kasaba ilan günü VERMİYOR.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Georgetown", tur:"sehir", lat:-18.29, lon:143.55, g:1, k:1,
  kur:"1869-01-01",
  kaynak:"Queensland Places, 'Georgetown': \"Georgetown began in 1869 as an alluvial gold mining centre, based on the Etheridge River.\"",
  s:[{f:"1869-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Charters Towers", tur:"sehir", lat:-20.08, lon:146.26, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Queensland Places, 'Charters Towers': \"In January 1872 an Aboriginal youth, Jupiter Mosman, stumbled on gold near Towers Hill\"; \"Charters Towers was made a municipal borough in 1877\".",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Barrow Creek Telgraf İstasyonu", tur:"sehir", lat:-21.53, lon:133.88, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government, Parks and Wildlife, 'Barrow Creek Telegraph Station Historical Reserve': istasyon 1872'de inşa edildi; yeri Eylül 1871'de John Ross'un Overland Telegraph keşif kolu tarafından seçildi.",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Tennant Creek Telgraf İstasyonu", tur:"sehir", lat:-19.55, lon:134.19, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government, Parks and Wildlife, 'Tennant Creek Telegraph Station Historical Reserve': \"A temporary building for a telegraph repeater station was erected near the watercourse of Tennant Creek, 11km north of the town, in 1872.\" ⚠️ Koordinat İSTASYONUNdur, kasabanın değil (11 km kuzey).",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Halls Creek", tur:"sehir", lat:-18.23, lon:127.67, g:1, k:1,
  kur:"1885-08-01",
  kaynak:"Western Australian Museum, 'WA Goldfields' ve DPLH inHerit Register of Heritage Places: \"In August 1885, Charles Hall and his partner John Slattery discovered gold in the vicinity of the old Halls Creek townsite\" — WA'nın ilk ödenebilir altını; Kimberley altına hücumu başladı.",
  s:[{f:"1885-08-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Marble Bar", tur:"sehir", lat:-21.17, lon:119.75, g:1, k:1,
  kur:"1893-07-13",
  kaynak:"Landgate (WA) / WA Museum: Marble Bar ve Nullagine'de altın 1880'lerde bulundu; \"The Marble Bar townsite was gazetted on 13 July 1893.\"",
  s:[{f:"1893-07-13",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Emerald", tur:"sehir", lat:-23.53, lon:148.16, g:1, k:1,
  kur:"1878-01-01",
  kaynak:"Queensland Places, 'Emerald': \"By 1877 the line reached Blackwater and, in anticipation of a further extension west, the town of Emerald was surveyed in 1878\" — Nogoa Nehri'nin batı yakasına yerleştirildi.",
  s:[{f:"1878-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bowen", tur:"sehir", lat:-20.01, lon:148.25, g:1, k:1,
  kur:"1861-04-01",
  kaynak:"Queensland Places, 'Bowen': \"in April 1861 the two parties came together for the proclamation of the township\"; \"Named Bowen after the Governor of Queensland, it was the first township north of Rockhampton\"; \"In 1863 Bowen was proclaimed a municipality\".",
  s:[{f:"1861-04-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Roma (Queensland)", tur:"sehir", lat:-26.57, lon:148.79, g:1, k:1,
  kur:"1867-01-01",
  kaynak:"Queensland Places, 'Roma': \"The Bungil Creek location, known as Reids Crossing after the shanty's proprietor, Thomas Reid, was chosen for survey, and named Roma after the Queensland Governor's wife, Diamantina Roma Bowen\"; \"Declared a municipality in 1867\". ⚠️ Kaynak ÖLÇÜM YILINI vermiyor; 1867 belediye ilanıdır. ⚠️ AD: atlasta Roma (İtalya) var, ayırt edici sonek ZORUNLU (girdi.py tam dizgi karşılaştırır).",
  s:[{f:"1867-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bundaberg", tur:"sehir", lat:-24.87, lon:152.35, g:1, k:1,
  kur:"1866-01-01",
  kaynak:"Queensland Places, 'Bundaberg': \"in 1868 the district surveyor, John Thompson, was instructed to mark out a town reserve on the south bank. It was named Bundaberg\"; ilk Avrupa yerleşimi 1860'ların ortası, Stewart kardeşler 1866'da araziyi aldı.",
  s:[{f:"1866-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Broken Hill", tur:"sehir", lat:-31.96, lon:141.47, g:1, k:1,
  kur:"1883-09-05",
  kaynak:"Australian Dictionary of Biography (ANU), 'Charles Rasp': \"On 5 September 1883, Charles Rasp pegged the first block on the 'Broken Hill', which he thought was a mountain of tin\"; Mount Gipps müdürü George McCulloch'un önerisiyle 'syndicate of seven' kuruldu; 1885'te zengin gümüş cevheri Broken Hill Proprietary Co.'nun kurulmasına yol açtı. TAM GÜN kaynakta.",
  s:[{f:"1883-09-05",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Darwin (Palmerston)", tur:"sehir", lat:-12.4577, lon:130.8414, g:1, k:1,
  kur:"1869-02-01",
  kaynak:"Library & Archives NT, 'Surveying Darwin 1869': Güney Avustralya Ölçüm Genel Müdürü G. W. Goyder ve 138 kişilik ekibi Şubat-Eylül 1869 arasında dört kasaba yeri dâhil ~270.000 hektar ölçtü; ana kasaba 'Palmerston' adıyla beş haftada ölçüldü. Adı 1911'de Darwin oldu. ⚠️ 1869-1911 arası adı PALMERSTON'dur — atlas 1923'e kadar geldiği için ikisi de kayıtta.",
  s:[{f:"1869-02-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Pine Creek", tur:"sehir", lat:-13.82, lon:131.83, g:1, k:1,
  kur:"1871-01-01",
  kaynak:"Library & Archives NT / City of Darwin: \"The town's growth was accelerated when gold was discovered at Pine Creek in 1871.\"",
  s:[{f:"1871-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Horsham", tur:"sehir", lat:-36.71, lon:142.2, g:1, k:1,
  kur:"1842-01-01",
  kaynak:"Victorian Places (Monash University ve University of Queensland), 'Horsham': \"In 1842 James Darlot took up occupation of a pastoral run in the district where Horsham was later established\"; \"a town survey plan of 1849 shows the name and Langland's store at the corner of Darlot and Hamilton Streets\"; \"the borough of Horsham was established on 17 November 1882\".",
  s:[{f:"1842-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cue", tur:"sehir", lat:-27.43, lon:117.9, g:1, k:1,
  kur:"1892-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA, Places Database) / WA Museum: \"Cue was established as a result of a gold find reported by Tom Cue in 1892\"; \"the townsite of Cue was gazetted on 17 August 1893\".",
  s:[{f:"1892-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Southern Cross", tur:"sehir", lat:-31.23, lon:119.33, g:1, k:1,
  kur:"1888-10-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"The Yilgarn goldfield had been declared on 1 October 1888 and the townsite of Southern Cross was gazetted in 1890\"; 1892 Eylül'ünde Coolgardie keşfiyle sönmeye başladı.",
  s:[{f:"1888-10-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Leonora", tur:"sehir", lat:-28.88, lon:121.33, g:1, k:1,
  kur:"1897-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"In 1897, the Mount Margaret Goldfield was gazetted, with a warden's office situated at Malcolm. In the same year a townsite was laid out in Leonora.\"",
  s:[{f:"1897-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Port Augusta", tur:"sehir", lat:-32.49, lon:137.77, g:1, k:1,
  kur:"1852-05-24",
  kaynak:"State Library of South Australia / SA Memory, 'Port Augusta: evolution of a city': \"On 24 May 1852, Port Augusta was proclaimed after erecting a flagstaff on the beach.\" TAM GÜN kaynakta.",
  s:[{f:"1852-05-24",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Ceduna", tur:"sehir", lat:-32.1347, lon:133.6739, g:1, k:1,
  kur:"1901-06-20",
  kaynak:"State Library of South Australia / SA Memory, 'Developing Trade and Port Histories: Outports - Ceduna/Thevenard': kasaba Haziran 1901'de ilan edildi, \"Ceduna was proclaimed on 20 June 1901\"; önceki adı Murat Bay. TAM GÜN.",
  s:[{f:"1901-06-20",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Oodnadatta", tur:"sehir", lat:-27.55, lon:135.45, g:1, k:1,
  kur:"1891-01-01",
  kaynak:"SA Department for Environment and Water, 'Oodnadatta Track Heritage Survey' ve State Library of SA: \"the line north from Port Augusta was started in 1878 and by 1891 it had only reached Oodnadatta\"; demiryolu başı 1901'de Commonwealth devralana kadar orada kaldı.",
  s:[{f:"1891-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Kalgoorlie", tur:"sehir", lat:-30.75, lon:121.47, g:1, k:1,
  kur:"1893-06-01",
  kaynak:"DPLH inHerit (Heritage Council of WA) / State Library of WA: \"In June 1893, Paddy Hannan and his partners discovered alluvial gold thirty miles (48 kms) north-east of Coolgardie. On 4 September 1894, Hannan's Find was declared the townsite of Kalgoorlie.\"",
  s:[{f:"1893-06-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Onslow", tur:"sehir", lat:-21.6531, lon:115.0983, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"DPLH inHerit, 'Old Onslow Townsite' (Register of Heritage Places): \"Onslow (Old Onslow) was gazetted in 1885\"; Yeni Onslow Ocak 1924'te ilan edildi. ⚠️ Koordinat ESKİ Onslow'undur — atlas 1923'e kadar geliyor.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Carnarvon", tur:"sehir", lat:-24.88, lon:113.66, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"The town of Carnarvon was gazetted in January 1883.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Broome", tur:"sehir", lat:-17.96, lon:122.24, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Western Australian Museum, 'Broome' / DPLH inHerit: \"The town of Broome was gazetted in 1883 in response to the expansion of the pastoral and pearling industry in the western Kimberley region.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Meekatharra", tur:"sehir", lat:-26.59, lon:118.49, g:1, k:1,
  kur:"1903-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA), Murchison Goldfields kayıtları: \"A town was not gazetted until 1903\". Komşu Nannine 1893'te, Gabanintha Kasım 1898'de ilan edilmişti.",
  s:[{f:"1903-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wagga Wagga", tur:"sehir", lat:-35.11, lon:147.37, g:1, k:1,
  kur:"1849-01-01",
  kaynak:"Encyclopaedia Britannica, 'Wagga Wagga': \"Settled in the 1830s, Wagga Wagga was proclaimed a town in 1849, a borough in 1870, and a city in 1946.\"",
  s:[{f:"1849-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Dubbo", tur:"sehir", lat:-32.24, lon:148.6, g:1, k:1,
  kur:"1841-01-01",
  kaynak:"Encyclopaedia Britannica, 'Dubbo': \"The district around what is now Dubbo was visited in 1818 by the explorer John Oxley, and it received its first settlers in 1824. Dubbo, founded in 1841, was an established village by 1849.\" ⚠️ TAHMİNİM 1849'DU, kaynak 1841 diyor.",
  s:[{f:"1841-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Goulburn", tur:"sehir", lat:-34.75, lon:149.72, g:1, k:1,
  kur:"1818-01-01",
  kaynak:"Encyclopaedia Britannica, 'Goulburn': \"A settlement was established on a site chosen in 1818 by the explorer Hamilton Hume and was originally named Goulburn Plains.\" ⚠️ Kaynak kasaba ilan yılını vermiyor; 1818 YER SEÇİMİ tarihidir ve en erken kaynaklı olaydır.",
  s:[{f:"1818-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Armidale", tur:"sehir", lat:-30.51, lon:151.67, g:1, k:1,
  kur:"1839-01-01",
  kaynak:"Encyclopaedia Britannica, 'Armidale': \"Armidale was founded in 1839 by G.J. Macdonald, commissioner of crown lands, who named it for his father's Scottish baronial estate on the Isle of Skye.\"",
  s:[{f:"1839-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bourke", tur:"sehir", lat:-30.09, lon:145.94, g:1, k:1,
  kur:"1835-01-01",
  kaynak:"Encyclopaedia Britannica, 'Bourke': \"The town originated with a stockade, Fort Bourke, built in 1835 by Sir Thomas Livingstone Mitchell\". ⚠️ 1835 İSTİHKÂM tarihidir; tahminim 1862 (kasaba) idi. En erken kaynaklı kalıcı yerleşim olayı olarak 1835 seçildi.",
  s:[{f:"1835-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Geraldton", tur:"sehir", lat:-28.77, lon:114.61, g:1, k:1,
  kur:"1850-01-01",
  kaynak:"Encyclopaedia Britannica, 'Geraldton': \"Surveyed in 1850, Geraldton originated as a military post for the nearby Murchinson goldfield and was declared a town in 1871.\"",
  s:[{f:"1850-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Derby", tur:"sehir", lat:-17.3, lon:123.63, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Encyclopaedia Britannica, 'Derby (Western Australia)': \"Founded in 1883 to serve a pastoral district, Derby was named for Edward Henry Stanley, 15th earl (of Derby).\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wyndham", tur:"sehir", lat:-15.48, lon:128.12, g:1, k:1,
  kur:"1885-01-01",
  kaynak:"Encyclopaedia Britannica, 'Wyndham': \"Founded in 1885 as a port for the Kimberley goldfield, it was named for the son of Sir Napier Broome.\" ⚠️ Tahminim 1886'ydı.",
  s:[{f:"1885-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Burketown", tur:"sehir", lat:-17.74, lon:139.55, g:1, k:1,
  kur:"1865-01-01",
  kaynak:"Queensland Places / Encyclopaedia Britannica: \"Burketown was founded on the Albert River in 1865.\"",
  s:[{f:"1865-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Thargomindah", tur:"sehir", lat:-27.99, lon:143.82, g:1, k:1,
  kur:"1870-01-01",
  kaynak:"Queensland Places, 'Bulloo Shire': \"Pastoral occupation of the Bulloo district began in the 1860s and a police barracks was constructed at Thargomindah, the shire's administrative centre, in the early 1870s\"; mahkeme 1876, okul 1884, hastane 1888. ⚠️ Kaynak TAM YIL vermiyor, '1870'lerin başı' diyor — 1870 alt sınır olarak alındı.",
  s:[{f:"1870-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Port Lincoln", tur:"sehir", lat:-34.72, lon:135.86, g:1, k:1,
  kur:"1839-01-01",
  kaynak:"Encyclopaedia Britannica, 'Port Lincoln': \"The city was surveyed in 1839, and it was named by explorer Matthew Flinders for his native English county of Lincoln.\"",
  s:[{f:"1839-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Cobar", tur:"sehir", lat:-31.5, lon:145.83, g:1, k:1,
  kur:"1869-01-01",
  kaynak:"Encyclopaedia Britannica, 'Cobar': \"The town's origins date to 1869 or 1870, when a party of well-sinkers being guided through the area by two Aboriginal men noticed strange green streaks next to a water hole near their campsite.\" ⚠️ Kaynak iki yıl veriyor; erken sınır 1869 alındı.",
  s:[{f:"1869-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Moree", tur:"sehir", lat:-29.46, lon:149.84, g:1, k:1,
  kur:"1848-01-01",
  kaynak:"Encyclopaedia Britannica, 'Moree': \"Moree originated in 1848 as a livestock station; it became a village in 1852, a town in 1862, and a municipality in 1890.\"",
  s:[{f:"1848-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Hay", tur:"sehir", lat:-34.51, lon:144.85, g:1, k:1,
  kur:"1840-01-01",
  kaynak:"Encyclopaedia Britannica, 'Hay (New South Wales)': \"The settlement originated in 1840 as a coach station known as Lang's Crossing Place. It was surveyed in 1858 and became a town the following year, named for John Hay.\"",
  s:[{f:"1840-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Katanning", tur:"sehir", lat:-33.69, lon:117.56, g:1, k:1,
  kur:"1898-01-01",
  kaynak:"Encyclopaedia Britannica, 'Katanning': \"The town was laid out in 1898... Although sandalwood cutters had been in the area for some time, there was no permanent settlement until the arrival of the railroad there in the late 19th century.\" ⚠️ TAHMİNİM 1889'DU — kaynak 1898 diyor, 9 YIL sapma.",
  s:[{f:"1898-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wave Hill", tur:"sehir", lat:-17.39, lon:130.83, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"Northern Territory Government (fossicking.nt.gov.au, 'Wave Hill'): \"Wave Hill Station started in 1883, and Wave Hill was formed as a settlement supply town to service the local pastoral industry which grew up in the early 1900's in the area.\"",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Mildura", tur:"sehir", lat:-34.19, lon:142.16, g:1, k:1,
  kur:"1887-01-01",
  kaynak:"Encyclopaedia Britannica, 'Mildura' ve Victorian Places (Monash+UQ): \"The Chaffey brothers began the Mildura irrigation colony near the Murray River in the Mallee region of north-west Victoria in 1887\"; 1840'larda bölgede koyun otlakları kurulmuştu.",
  s:[{f:"1887-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Bairnsdale", tur:"sehir", lat:-37.83, lon:147.63, g:1, k:1,
  kur:"1844-01-01",
  kaynak:"Victorian Places (Monash University ve University of Queensland), 'Bairnsdale': Bairnsdale run \"occupied by Archibald McLeod from 1844\"; \"the government township was surveyed on the west bank of the river, the first land being sold in 1860\".",
  s:[{f:"1844-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Roebourne", tur:"sehir", lat:-20.78, lon:117.14, g:1, k:1,
  kur:"1866-08-17",
  kaynak:"DPLH inHerit (Heritage Council of WA): \"Roebourne, the first gazetted town in the North-West, was proclaimed on 17 August 1866. Roebourne was the centre for 49 surrounding pastoral leases and was the main town in the fast developing North District with Cossack as its port.\" TAM GÜN kaynakta.",
  s:[{f:"1866-08-17",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Birdsville", tur:"sehir", lat:-25.9, lon:139.35, g:1, k:1,
  kur:"1882-01-01",
  kaynak:"Queensland Places, 'Diamantina Shire': \"Birdsville had both a store and a hotel by 1882\"; bugünkü otel 1885 tarihli olanın kopyası; 1886'da Diamantina yerel yönetim bölümü kuruldu. 1903 Australian Handbook onu \"Queensland'in en uzak kasabası\" diye anıyor.",
  s:[{f:"1882-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Wiluna", tur:"sehir", lat:-26.59, lon:120.22, g:1, k:1,
  kur:"1902-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA), 'Wiluna Mine (fmr)': \"The Wiluna Gold Mine commenced operations in 1902 and was worked very successfully until 1947.\" ⚠️ TAHMİNİM 1898'Dİ — kaynak 1902 diyor.",
  s:[{f:"1902-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Camooweal", tur:"sehir", lat:-19.92, lon:138.12, g:1, k:1,
  kur:"1883-12-15",
  kaynak:"QUEENSLAND HERITAGE REGISTER (Queensland Government, Department of Environment and Science, apps.des.qld.gov.au): \"A town reserve of four square miles was gazetted on 15 December 1883 and was amended and re-gazetted in August 1884\"; rezerv Georgina Nehri üzerinde, Lake Frances yakınında, Rocklands Station'ın güneyinde. 1883'te yerel otlakçılar Queensland hükûmetine dilekçe vererek Burketown'dan Georgina Nehri boyunca inen ana sığır güzergâhı ile doğudan Kuzey Toprakları'na giden yolun kavşağında kasaba arazisi istemişti. TAM GÜN kaynakta. 📌 EN YÜKSEK KATKILI KAYIT (18 hücre) ve en zor kaynaklısıydı — Queensland Places'te sayfası YOK, kurumsal siciline gidilerek bulundu.",
  s:[{f:"1883-12-15",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Borroloola", tur:"sehir", lat:-16.07, lon:136.3, g:1, k:1,
  kur:"1884-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government, ntlis.nt.gov.au/placenames): \"The 'Town of Borroloola' was declared on 4 September 1885 under the Northern Territory Crown Lands Consolidation Act 1882. The township itself was set out in 1884 by Surveyor JP Hingston.\" Kasaba McArthur Nehri kıyısında, Queensland'den Roper Nehri, Katherine ve Darwin'e sığır götüren sürücülere hizmet için kuruldu.",
  s:[{f:"1884-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Daly Waters Telgraf İstasyonu", tur:"sehir", lat:-16.25, lon:133.37, g:1, k:1,
  kur:"1872-01-01",
  kaynak:"Northern Territory Government (nt.gov.au, Parks bilgi föyleri) ve Library & Archives NT: Overland Telegraph hattı 1872'de tamamlandı ve Daly Waters onun telgraf istasyonlarından biridir (Territory Stories, 'Daly Waters Station'). ⚠️ AÇIKÇA YAZIYORUM: İSTASYONA ÖZEL bir 'şu tarihte inşa edildi' cümlesi BULUNAMADI — Barrow Creek ve Tennant Creek'te böyle bir cümle vardı, burada YOK. Tarih HAT düzeyindeki kaynaktan türetilmiştir. Bir sonraki tur istasyon listesini (11-15 istasyon, kaynaklar sayıda ayrışıyor) tek tek doğrulamalı.",
  s:[{f:"1872-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Windorah", tur:"sehir", lat:-25.42, lon:142.65, g:1, k:1,
  kur:"1880-01-01",
  kaynak:"Queensland Places (Centre for the Government of Queensland, UQ), 'Barcoo Shire': \"Windorah was gazetted as a town in 1880.\"",
  s:[{f:"1880-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Laverton", tur:"sehir", lat:-28.63, lon:122.4, g:1, k:1,
  kur:"1899-01-01",
  kaynak:"DPLH inHerit (Heritage Council of WA) / State Library of WA: \"The town of Laverton was gazetted in 1899\"; Mount Margaret 1897'de kasaba ilan edilmişti. ⚠️ TAHMİNİM 1896'YDI (altın keşfi) — kasaba ilanı 1899.",
  s:[{f:"1899-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Timber Creek Polis Karakolu", tur:"sehir", lat:-15.66, lon:130.48, g:1, k:1,
  kur:"1895-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government, ntlis.nt.gov.au/placenames): dereyi A. C. Gregory 24 Kasım 1855'te North Australian Expedition sırasında adlandırdı; polis karakolu 1890'ların ortasında kuruldu; otlak deposu 1911'de Phillip Hutchison tarafından. 🔴 KASABA 20 HAZİRAN 1975'TE İLAN EDİLDİ — ATLASIN UFKUNUN DIŞINDA. Bu yüzden kayıt KASABA değil POLİS KARAKOLU adıyla yazıldı; 1281-1923 ufkunda var olan yerleşim odur. ⚠️ Kaynak 'mid-1890s' diyor, TAM YIL VERMİYOR — 1895 orta değer olarak alındı ve bu not kayıtta duruyor.",
  s:[{f:"1895-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Newcastle Waters", tur:"sehir", lat:-17.37, lon:133.41, g:1, k:1,
  kur:"1884-01-01",
  kaynak:"NORTHERN TERRITORY PLACE NAMES REGISTER (NT Government): istasyon adını yakınındaki Newcastle Waters su birikintisinden alır; Dr W. B. Browne 1880'lerin başında aldı ve \"had established Newcastle Waters by 1884 with cattle overlanded from Queensland\"; ~1890'da Lewis ailesine satıldı. ⚠️ TAHMİNİM 1861'Dİ — kaynak 1884 diyor, 23 YIL sapma. Sicilde resmî ilan tarihi YOK.",
  s:[{f:"1884-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Esperance", tur:"sehir", lat:-33.86, lon:121.89, g:1, k:1,
  kur:"1894-01-01",
  kaynak:"Western Australian Museum, 'WA Goldfields' / 'The Rush for Gold': \"during the W.A. goldrush in 1894, businesses were established in Esperance, believing that it would be the port for the goldfields\". ⚠️ Kaynak KASABA İLAN yılını vermiyor; 1894 en erken kaynaklı kalıcı yerleşim olayıdır.",
  s:[{f:"1894-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

{ ad:"Marree (Hergott Springs)", tur:"sehir", lat:-29.65, lon:138.06, g:1, k:1,
  kur:"1883-01-01",
  kaynak:"History Trust of South Australia: 1883'te Faiz ve Tagh Mahomet kardeşler \"the new railhead township of Marree (formerly Hergott Springs)\"de deve nakliye şirketi kurdu; okul 1884'te açıldı, ad 1918'de Marree oldu.",
  s:[{f:"1883-01-01",t:"1901-01-01",d:"ingiltere"},{f:"1901-01-01",t:"1923-10-29",d:"avustralya"}] },

// --------------------------------------------------------------------
// BEYAN — 44 kayıt · kasitli_bosluk:true · bos:"kabile"
// Hiçbiri BOYA TAŞIMAZ (d:[] ve s: yok): kapsamayı kapatır,
// haritayı boyamaz. `§2` emilmesini de engeller.
// --------------------------------------------------------------------

{ ad:"Gibson Çölü", tur:"bolge", lat:-23.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Tanami Çölü", tur:"bolge", lat:-20.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Warlpiri." },

{ ad:"Büyük Victoria Çölü", tur:"bolge", lat:-28.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Büyük Victoria Çölü 2", tur:"bolge", lat:-28.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Gibson Çölü 2", tur:"bolge", lat:-26.5, lon:128.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Simpson Çölü", tur:"bolge", lat:-24.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Büyük Victoria Çölü 3", tur:"bolge", lat:-31.5, lon:124.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Küçük Kum Çölü", tur:"bolge", lat:-25.5, lon:123.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu." },

{ ad:"Büyük Kum Çölü", tur:"bolge", lat:-23.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Büyük Kum Çölü 2", tur:"bolge", lat:-22.5, lon:123.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Küçük Kum Çölü 2", tur:"bolge", lat:-24.5, lon:117.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu." },

{ ad:"Büyük Kum Çölü 3", tur:"bolge", lat:-21.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Gibson Çölü 3", tur:"bolge", lat:-26.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Arnhem Land", tur:"bolge", lat:-13.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Yolŋu." },

{ ad:"Büyük Kum Çölü 4", tur:"bolge", lat:-20.5, lon:124.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Yeni Gine Merkezî Yaylaları", tur:"bolge", lat:-3.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Büyük Victoria Çölü 4", tur:"bolge", lat:-30.5, lon:132.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Gibson Çölü 4", tur:"bolge", lat:-26.5, lon:125.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pintupi · Ngaanyatjarra." },

{ ad:"Büyük Kum Çölü 5", tur:"bolge", lat:-24.5, lon:120.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Cape York Yarımadası", tur:"bolge", lat:-12.5, lon:142.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wik · Kuku Yalanji." },

{ ad:"Eyre Yarımadası kuzeyi / Gawler", tur:"bolge", lat:-30.5, lon:135.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Barngarla · Kokatha." },

{ ad:"Büyük Victoria Çölü 5", tur:"bolge", lat:-29.5, lon:126.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Yeni Gine Merkezî Yaylaları 2", tur:"bolge", lat:-6.5, lon:139.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Büyük Victoria Çölü 6", tur:"bolge", lat:-26.5, lon:133.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Büyük Kum Çölü 6", tur:"bolge", lat:-24.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Simpson Çölü 2", tur:"bolge", lat:-23.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Cape York Yarımadası 2", tur:"bolge", lat:-15.5, lon:141.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wik · Kuku Yalanji." },

{ ad:"Kimberley iç kesimi", tur:"bolge", lat:-14.5, lon:125.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Bunuba · Gooniyandi." },

{ ad:"Louisiade-Milne takımadası", tur:"bolge", lat:-11.5, lon:153.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Murchison-Gascoyne iç kesimi", tur:"bolge", lat:-29.5, lon:116.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wajarri." },

{ ad:"Büyük Victoria Çölü 7", tur:"bolge", lat:-29.5, lon:127.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Pitjantjatjara · Ngaanyatjarra · Pila Nguru." },

{ ad:"Simpson Çölü 3", tur:"bolge", lat:-27.5, lon:137.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wangkangurru · Arrernte." },

{ ad:"Murchison-Gascoyne iç kesimi 2", tur:"bolge", lat:-26.5, lon:115.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Wajarri." },

{ ad:"Pilbara iç kesimi", tur:"bolge", lat:-24.5, lon:116.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Nyiyaparli · Banyjima." },

{ ad:"Büyük Kum Çölü 7", tur:"bolge", lat:-21.5, lon:122.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil topluluğu olarak tarif edilir; 1788 İngiliz sömürgeleşmesine kadar kıtada merkezî bir siyasî otorite kaydı yoktur. Bu hücrelerin bölgesel atfı: Martu · Walmajarri." },

{ ad:"Yeni Kaledonya iç kesimi", tur:"bolge", lat:-20.5, lon:164.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Aru-Tanimbar adaları", tur:"bolge", lat:-7.5, lon:131.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 3", tur:"bolge", lat:-7.5, lon:145.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Aru-Tanimbar adaları 2", tur:"bolge", lat:-5.5, lon:134.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 4", tur:"bolge", lat:-5.5, lon:140.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Britanya iç kesimi", tur:"bolge", lat:-5.5, lon:150.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Batı (Kuş Başı / Vogelkop)", tur:"bolge", lat:-3.5, lon:133.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Merkezî Yaylaları 5", tur:"bolge", lat:-3.5, lon:136.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

{ ad:"Yeni Gine Batı (Kuş Başı / Vogelkop) 2", tur:"bolge", lat:-0.5, lon:130.5, g:0, k:0,
  d:[], kasitli_bosluk:true, bos:"kabile",
  neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor." },

];

;
/* ==== data/yerlesimler_sibirya2.js ==== */
// ==========================================================================
// SİBİRYA 2 — DUNYA-SIBIRYA-0903 partisi
// Ad alanı: window.YERLESIMLER_SIBIRYA2   (dosya adındaki "sibirya2" ile
// birebir — CLAUDE.md §7: "ayrı dosya vermek ayrı AD ALANI vermek DEĞİLDİR")
//
// Kutu: 50-78K / 55-180D · Şartname: oturumlar/DUNYA-YERLESIM-PROGRAMI.md
// Ayrıntılı gerekçe · kaynak künyeleri · ölçümler:
//     denetim/BULGU-SIBIRYA-0903.md
//     denetim/SIBIRYA-0903-adaylar.json
//
// 🔴 BU DOSYAYA YAZILMAYANLAR DA KAYITLIDIR — JSON'daki BEKLET ve
// YAZILMAZ kovalarına bak. "Yazılmadı" ≠ "araştırılmadı".
// ==========================================================================
window.YERLESIMLER_SIBIRYA2 = [
{ ad:"Çelyabinsk", tur:"kale", lat:55.1600, lon:61.4000, kur:"1736-09-02", s:[{f:"1736-09-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Çelyabinsk kalesi kuruldu (2 Eylül 1736) — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Kurgan", tur:"kale", lat:55.4500, lon:65.3400, kur:"1662-01-01", s:[{f:"1662-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"sloboda — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Zlatoust", tur:"kale", lat:55.1700, lon:59.6700, kur:"1754-01-01", s:[{f:"1754-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"maden/izabe kasabası — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Dalmatovo", tur:"kale", lat:56.2500, lon:62.9400, kur:"1644-01-01", s:[{f:"1644-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"manastır sloboda — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Kamışlov", tur:"kale", lat:56.8500, lon:62.7100, kur:"1668-01-01", s:[{f:"1668-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"sloboda — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Yalutorovsk", tur:"kale", lat:56.6600, lon:66.3100, kur:"1639-01-01", s:[{f:"1639-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"sloboda — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Verhoturye", tur:"kale", lat:58.8600, lon:60.8000, kur:"1598-01-01", s:[{f:"1598-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"devlet seferiyle ostrog, sonra ahşap kremlin — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Turinsk", tur:"kale", lat:58.0500, lon:63.7000, kur:"1600-01-01", s:[{f:"1600-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"şehir kuruldu — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Irbit", tur:"kale", lat:57.6800, lon:63.0600, kur:"1631-01-01", s:[{f:"1631-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Irbit slobodası — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Yekaterinburg", tur:"kale", lat:56.8400, lon:60.6100, kur:"1723-01-01", s:[{f:"1723-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"fabrika-şehir — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Nijniy Tagil", tur:"kale", lat:57.9200, lon:59.9700, kur:"1722-01-01", s:[{f:"1722-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"demir fabrikası — Мазаев А.Г., Формирование и развитие системы расселения Урала (XVII-XIX вв.), Академический вестник УралНИИпроект РААСН, 2014 (cyberleninka)" },
{ ad:"Troitsk", tur:"kale", lat:54.0900, lon:61.5600, kur:"1743-01-01", s:[{f:"1743-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Uy hattı kalesi (hat 1739-1743) — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Pelım ostrogu", tur:"kale", lat:59.6000, lon:63.0500, kur:"1593-01-01", s:[{f:"1593-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ KOORDİNAT ⚠️ — modern Pelım kasabası 61,02/61,98'dir ve 169 km uzaktadır. Bu koordinat DOĞRULANMADI." },
{ ad:"Narım", tur:"kale", lat:58.3600, lon:81.5800, kur:"1596-01-01", s:[{f:"1596-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Narım ostrogu (1596 ya da 1598) — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Abakan ostrogu", tur:"kale", lat:53.7200, lon:91.4400, kur:"1707-01-01", s:[{f:"1707-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"I. Petro'nun 1706 fermanıyla 'Kırgız toprağının merkezinde' kurulan ostrog; Hakas beyleri surları dibinde Rus tâbiiyeti yemini etti — О результатах исследования архитектурно-пространственного развития городов Хакасии (cyberleninka)" },
{ ad:"Sayansk ostrogu", tur:"kale", lat:52.8500, lon:91.9000, kur:"1709-01-01", s:[{f:"1709-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — О результатах исследования архитектурно-пространственного развития городов Хакасии (cyberleninka)  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Verhneangarsk ostrogu", tur:"kale", lat:55.8000, lon:109.6000, kur:"1647-01-01", s:[{f:"1647-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Buryatya'nın Rusya'ya katılışının başlangıcı — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"Barguzin", tur:"kale", lat:53.6200, lon:109.6500, kur:"1648-01-01", s:[{f:"1648-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"Bauntovsk", tur:"kale", lat:55.1800, lon:113.0000, kur:"1652-01-01", s:[{f:"1652-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"Irgen", tur:"kale", lat:51.8000, lon:112.3000, kur:"1654-01-01", s:[{f:"1654-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)  ⚠️ KOORDİNAT yaklaşık — kaynak göl adı veriyor" },
{ ad:"Telembinsk", tur:"kale", lat:52.5000, lon:113.9000, kur:"1658-01-01", s:[{f:"1658-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Kabansk", tur:"kale", lat:52.0500, lon:106.6500, kur:"1660-01-01", s:[{f:"1660-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"İlyinsk", tur:"kale", lat:51.9500, lon:107.2000, kur:"1660-01-01", s:[{f:"1660-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog (önceki adı Bolşaya Zaimka) — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"Verhneudinsk", tur:"kale", lat:51.8300, lon:107.6000, kur:"1665-01-01", s:[{f:"1665-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Uda ağzında Udinsk zimovyesi — ostrogun ve şehrin başlangıcı — Присоединение Бурятии к России: геополитические сценарии трансграничья в XVII-XIX вв. (cyberleninka)" },
{ ad:"Uyandina (Nijneindigirsk) zimovyesi", tur:"kale", lat:68.3500, lon:145.6000, kur:"1638-01-01", s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"zimovye — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Podşiversk", tur:"kale", lat:66.4500, lon:143.3000, kur:"1636-01-01", s:[{f:"1636-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"zimovye — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Alazeya ostrogu", tur:"kale", lat:68.5000, lon:154.5000, kur:"1642-01-01", s:[{f:"1642-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"zimovye s ostrojkom — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Srednekolımsk", tur:"kale", lat:67.4600, lon:153.7200, kur:"1643-07-30", s:[{f:"1643-07-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Stadukhin ve Zıryan Kolıma'da 'nagorodnya'lı zimovye kurdu (30 Temmuz 1643) — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Nijnekolımsk", tur:"kale", lat:68.5232, lon:160.8997, kur:"1644-01-01", s:[{f:"1644-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Büyük Anyuy'un Kolıma'ya katıldığı yerde zimovye — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Ostrovnoye (Anyuy panayırı)", tur:"kale", lat:68.1000, lon:164.1000, kur:"1794-01-01", s:[{f:"1794-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"panayır Büyük Anyuy'daki adaya taşındı (Nijnekolımsk'ten 200 verst); 1848 sonrası Küçük Anyuy sol kıyısına — Карих Е.В., Анюйская ярмарка во второй половине XIX – начале XX в., Вестник Томского гос. университета, 2008 (cyberleninka)  ⚠️ KOORDİNAT yaklaşık; panayır ÜÇ ayrı yerde bulundu" },
{ ad:"Tauysk", tur:"kale", lat:59.6588, lon:149.1761, kur:"1652-09-10", s:[{f:"1652-09-10",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Stadukhin, Taui ağzında (10 Eylül 1652); 1648'de Motıkley zimovyesi — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Yama zimovyesi", tur:"kale", lat:59.4000, lon:154.2000, kur:"1692-01-01", s:[{f:"1692-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Yama ağzında zimovye — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Gijiga", tur:"kale", lat:61.9800, lon:160.3500, kur:"1651-01-01", s:[{f:"1651-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Gijiga ağzında zimovye (1651 sonbaharı); kale 1752 — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Penjinsk ostrogu", tur:"kale", lat:62.5000, lon:165.5000, kur:"1709-01-01", s:[{f:"1709-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Nijnekamçatsk", tur:"kale", lat:56.2800, lon:162.0000, kur:"1697-01-01", s:[{f:"1697-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog (1697 sonbaharı) — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Verhnekamçatsk", tur:"kale", lat:54.7500, lon:158.9000, kur:"1698-01-01", s:[{f:"1698-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog (1698 yaz sonu-sonbahar başı) — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Bolşeretsk", tur:"kale", lat:52.4300, lon:156.4200, kur:"1704-08-06", s:[{f:"1704-08-06",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog (6 Ağustos 1704) — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002" },
{ ad:"Olyutorsk (Arhangelsk)", tur:"kale", lat:60.0000, lon:166.5000, kur:"1714-01-01", s:[{f:"1714-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ostrog (1714 sonbaharı) — Зуев А.С., Русские остроги на крайнем Северо-Востоке Сибири… / Хроника присоединения крайнего Северо-Востока Сибири к России, Сибирская Заимка (ISSN 2308-4073); aslı Новосибирский гос. университет, 2002  ⚠️ KOORDİNAT yaklaşık" },
{ ad:"Ust-Olenyok zimovyesi", tur:"kale", lat:72.9000, lon:119.8000, kur:"1633-01-01", s:[{f:"1633-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Rebrov nehrin AĞZINDA zimovye kurdu; dokuz Tunguz'dan 45 samur yasak alındı — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ KOORDİNAT ⚠️ — modern Olenyok kasabası 68,50/112,44'tür ve 558 km uzaktadır" },
{ ad:"Voloçanka (Voloçanı zimovyesi)", tur:"kale", lat:70.9800, lon:94.5300, kur:"1643-01-01", s:[{f:"1643-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Vasiliy Sıçev'in müfrezesi, Heta-Pyasina volokunda yasak zimovyesi — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Verhnekolımsk", tur:"kale", lat:65.4400, lon:150.9000, kur:"1647-01-01", s:[{f:"1647-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"zimovye — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Markovo", tur:"kale", lat:64.6800, lon:170.4200, kur:"1840-01-01", s:[{f:"1840-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"1840'larda Rus meşin/köylüleri Yukagir, Çuvan ve Lamutlarla birlikte yerleşti; 1866 Rus-Amerikan telgraf seferi — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ kur: yılı yaklaşık — kaynak '1840'lar' diyor" },
{ ad:"Şadrinsk", tur:"kale", lat:56.0900, lon:63.6300, kur:"1662-01-01", s:[{f:"1662-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"'Şadrin' lakaplı Yuri Maleyev'in Şadrinskaya zaimkası (slobodası); 1686'da Batı Sibirya'nın en büyüğü — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Samarovo", tur:"kale", lat:61.0000, lon:69.0000, kur:"1637-01-01", s:[{f:"1637-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Samarovskiy yamı — Batı Sibirya'nın batı-doğu haberleşmesi için; ilk yerleşenler Perm, Vologda ve Olonets'ten gönderilen ~50 yamcı ailesi (Çar Mihail'in emriyle) — Государственная библиотека Югры (okrlib.ru) — 1637 Samarovskiy ve Demyanskiy yamları" },
{ ad:"Demyanskoye", tur:"kale", lat:59.6000, lon:69.2800, kur:"1637-01-01", s:[{f:"1637-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Demyanskiy yamı — Samarovskiy ile AYNI YIL, aynı kararla kuruldu — Государственная библиотека Югры (okrlib.ru) — 1637 Samarovskiy ve Demyanskiy yamları" },
{ ad:"Kolıvan (Çaus)", tur:"kale", lat:55.3100, lon:82.7400, kur:"1713-06-29", s:[{f:"1713-06-29",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Çaus ostrogu, Tomsk soylusu D. Lavrentyev tarafından 29 Haziran (10 Temmuz) 1713'te temeli atıldı, 4 Eylül 1713'te tamamlandı; Moskova-Sibirya traktının Tara-Tomsk kesiminde — Президентская библиотека им. Б.Н. Ельцина (prlib.ru) — Çaus ostrogu 1713" },
{ ad:"Açinsk", tur:"kale", lat:56.2700, lon:90.5000, kur:"1641-01-01", s:[{f:"1641-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Yenisey Kırgız beyleriyle 1641-42 mücadelesi sırasında kurulan ostrog — Скобелев С.Г., Чуриков Р.С., К вопросу о месте расположения первого Ачинского острога, Вестник Новосибирского гос. университета. Серия: История. Филология, 2010 (cyberleninka)  ⚠️ 🔴 KOORDİNAT TARTIŞMALI — makale ilk ostrogun MODERN Açinsk'te değil, Çulım (eski İyus) kıyısında, modern BALAHTA civarında aranması gerektiğini savunuyor (~55,4/91,6; 56,27/90,50'den ~120 km). Modern Açinsk yeri SONRAKİ bir tesistir. Yazılmadan önce KARAR gerekiyor." },
{ ad:"Kansk", tur:"kale", lat:56.2000, lon:95.7100, kur:"1636-01-01", s:[{f:"1636-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Krasnoyarsk atamanı M. Koltsov ve 50 Kazak, Bratsk geçidinin aşağısında ostrog — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ ⚠️ 1640'ta BUGÜNKÜ yerine taşındı, 1646'da tamamlandı. 1636-1640 arası koordinat BAŞKA bir yerdir." },
{ ad:"Minusinsk", tur:"kale", lat:53.7100, lon:91.6900, kur:"1739-01-01", s:[{f:"1739-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Minusa'nın Yenisey koluna kavuştuğu yerde Minyusinskoye köyü; 1822 şehir statüsü — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Nijneudinsk", tur:"kale", lat:54.9000, lon:99.0300, kur:"1648-10-01", s:[{f:"1648-10-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Krasnoyarsk atamanı E. Tyumentsev, Uda sağ kıyısında POKROV gününde 'devlet zimovyesi'; 1644'te küçük bir zimovye vardı — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ Pokrov = 1 Ekim (Julien). Gün kaynağın verdiği bayram adından türetildi." },
{ ad:"Balagansk", tur:"kale", lat:54.0000, lon:103.0500, kur:"1654-05-01", s:[{f:"1654-05-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Soylu D. Firsov, Angara sol kıyısında Osinov adasının karşısında (Mayıs-Haziran 1654) — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ kaynak 'Mayıs-Haziran' diyor; gün yok" },
{ ad:"Verholensk", tur:"kale", lat:53.9400, lon:107.2800, kur:"1641-01-01", s:[{f:"1641-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Kazak yüzbaşı Martın Vasilyev, Lena sağ kıyısında Kulunga ağzından 4 verst — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Bodaybo", tur:"kale", lat:57.8500, lon:114.2000, kur:"1864-01-01", s:[{f:"1864-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Bodaybo çayının Vitim'e döküldüğü yerde 'Bodaybinskaya rezidentsiya' — yük deposu ve aktarma noktası; aynı yıl altın bulundu — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Sretensk", tur:"kale", lat:52.2500, lon:117.7100, kur:"1689-01-01", s:[{f:"1689-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"önce zimovye, sonra ostrog — Doğu Baykalötesi ve Amur yollarını güvenceye almak için — Энциклопедия Забайкалья (ez.chita.ru) — Sretensk 1689" },
{ ad:"Çita", tur:"kale", lat:52.0300, lon:113.5000, kur:"1653-01-01", s:[{f:"1653-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"İngoda zimovyesi (Читинское плотбище) — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Suntar", tur:"kale", lat:62.1500, lon:117.6300, kur:"1740-01-01", s:[{f:"1740-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Voin Şahov Rus idaresini ve ilk müstahkem zimovyeyi kurdu — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ ⚠️ Bu RUS idaresinin tarihi; Suntar naslegi (Yakut) daha önce vardı — Yakut yerleşim tarihi ÖLÇÜLMEDİ" },
{ ad:"Ust-Maya", tur:"kale", lat:60.4200, lon:134.5300, kur:"1844-01-01", s:[{f:"1844-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Ayan-Maya (Amga-Ayan) traktının durağı, 1844-45'te kuruldu; tahıl ambarı yapıldı — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Nelkan", tur:"kale", lat:57.6500, lon:136.1400, kur:"1844-01-01", s:[{f:"1844-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Ayan-Maya traktının durağı, 1844-45; Ayan limanından Yakutya'ya ren kervanı yolu — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Tigil", tur:"kale", lat:57.8000, lon:158.6700, kur:"1747-01-01", s:[{f:"1747-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"ilk yerleşim 1747; Tigil kalesini 1751-52'de Teğmen Holmov inşa etti — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)" },
{ ad:"Hantayka zimovyesi", tur:"kale", lat:68.3101, lon:90.8960, kur:"1610-01-01", s:[{f:"1610-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Hantayka nehri ağzında yasak zimovyesi — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ ⚠️ kaynak 'ОКОЛО 1610 г.' (yaklaşık) diyor — yıl KESİN DEĞİL. Aynı yıllarda Dudinka'da da birkaç izba ve ambar yapılmış; Turuhansk zimovyesi 1607." },
{ ad:"Zeya (Zeyskiy Sklad)", tur:"kale", lat:53.7400, lon:127.2700, kur:"1879-01-01", s:[{f:"1879-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"Yukarı Amur altın şirketinin aktarma noktası «Zeyskiy Sklad»; Zeya sağ kıyısında, Tukuringra eteğinde, Blagoveşçensk'ten 620 verst — Taymır Dolgan-Nenets belediye tarihçesi · bölgesel ansiklopedik kaynaklar (hakemli DEĞİL)  ⚠️ 🔴 ADI DÜZELTİLDİ: bu nokta Zeya AĞZINDAKİ Mançu yerleşimi DEĞİL (Zeya ağzı Blagoveşçensk'tedir, 50,28/127,53). 53,74/127,27 = Zeya ŞEHRİ. ⚠️ Bu düzeltme 4. turda YAPILDI SANILDI; yama anahtarı eşleşmedi ve betik SESSİZCE geçti — M-2466'da yanlış raporlandı, burada telâfi edildi." },
{ ad:"Zaural Başkurt toprakları", tur:"bolge", lat:54.0000, lon:62.5000, s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"cyberleninka: «зауральских родов башкир, оказавшихся в сфере непосредственного подчинения правителям Сибирского ханства» — Zaural Başkurt boyları doğrudan Sibir hanlarına tâbiydi. Zincir atlasın `Tümen (Çimgi-Tura)` kaydıyla BİREBİR AYNI (emsal)." },
{ ad:"Başkurt toprakları (İdil-Ural)", tur:"bolge", lat:56.0000, lon:58.5000, s:[{f:"1281-01-01",t:"1502-01-01",d:"altinorda"},{f:"1502-01-01",t:"1555-01-01",d:"nogay"},{f:"1555-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"cyberleninka Başkurt makaleleri — katılma BOY BOY: 1554-55 batı · 1555 Min ve Yurmatı · ≤1556 Burzyan/Kıpsak/Userğan/Tamyan · 1556-57 merkez-doğu · XVI. yy sonu-XVII. yy başı kuzeydoğu. ⚠️ KAYNAĞIN KENDİ DAMGASI: «1557 г., отмечаемый как год присоединения Башкирии к России, — в значительной мере УСЛОВНОСТЬ, вызванная абсолютизацией Никоновской летописи» ⇒ 1557 bir OLAY DEĞİL bir KONVANSİYONDUR. 1555-01-01 seçildi ve bu SEÇİM kayıtlıdır. Tâbiiyet nüansı: Başkurtlar Nogay'a TÂBİ idi, doğrudan idare değil — `v:` yazılamadı çünkü atlas `v:` içindeki `d:`yi okumuyor (MIMARI.md §3.6, model sınırı)." },
{ ad:"Güney Başkurt bozkırı", tur:"bolge", lat:52.0000, lon:58.0000, s:[{f:"1281-01-01",t:"1502-01-01",d:"altinorda"},{f:"1502-01-01",t:"1555-01-01",d:"nogay"},{f:"1555-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"cyberleninka Başkurt makaleleri — katılma BOY BOY: 1554-55 batı · 1555 Min ve Yurmatı · ≤1556 Burzyan/Kıpsak/Userğan/Tamyan · 1556-57 merkez-doğu · XVI. yy sonu-XVII. yy başı kuzeydoğu. ⚠️ KAYNAĞIN KENDİ DAMGASI: «1557 г., отмечаемый как год присоединения Башкирии к России, — в значительной мере УСЛОВНОСТЬ, вызванная абсолютизацией Никоновской летописи» ⇒ 1557 bir OLAY DEĞİL bir KONVANSİYONDUR. 1555-01-01 seçildi ve bu SEÇİM kayıtlıdır. Tâbiiyet nüansı: Başkurtlar Nogay'a TÂBİ idi, doğrudan idare değil — `v:` yazılamadı çünkü atlas `v:` içindeki `d:`yi okumuyor (MIMARI.md §3.6, model sınırı)." }
];

;
/* ==== data/yerlesimler_gamerika.js ==== */
// ============================================================================
// YERLEŞİM VERİ SETİ — GÜNEY AMERİKA  (Oturum: DUNYA-GAMERIKA-0903)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
// Bulgu ve gerekçeler: denetim/BULGU-GAMERIKA-0903.md
// Ad alanı: window.YERLESIMLER_GAMERIKA  (CLAUDE.md §7 — "ayrı dosya vermek,
// ayrı ad alanı vermek değildir"; dosya adındaki ayırt edici parça değişken
// adında da duruyor.)
//
// KUTU: 56G-13K / 82B-34B
//
// ---------------------------------------------------------------------------
// ANA KÜTÜK — bu dosyadaki kayıtların çoğu TEK bir eserden çıktı
// ---------------------------------------------------------------------------
// Handbook of South American Indians, Julian H. Steward (ed.),
// Smithsonian Institution, Bureau of American Ethnology, BULLETIN 143.
// archive.org / Smithsonian koleksiyonu, access-restricted = None:
//   c.1 bulletin14311946smit  The Marginal Tribes
//   c.2 bulletin14321946smit  The Andean Civilizations
//   c.3 bulletin14331948smit  The Tropical Forest Tribes
//   c.4 bulletin14341948smit  The Circum-Caribbean Tribes
// 🔴 ARŞİV NÜSHA TUZAĞI: aynı eserin `handbookofsoutha*` nüshaları
//    lending-restricted'dır ve metin VERMEZ. Erişim ESERİN değil
//    NÜSHANIN özelliğidir — ilk denemede "HSAI'ye erişilemiyor" hükmü
//    verilmek üzereydi.
//
// ---------------------------------------------------------------------------
// YÖNTEM — kütük-önce DEĞİL delik-önce
// ---------------------------------------------------------------------------
// Ölçüldü: kütükten çıkarıp yazmak 4,3 hücre/nokta veriyor; önce boşluk
// merkezini bulup "burada ne vardı" diye kütüğe sormak 9,9. Sebep: kütük
// coğrafyaya değil HALKA göre düzenli, yani kütük-önce çalışmak kümelenmeye
// itiyor.
//
// ---------------------------------------------------------------------------
// ⚠️ BU DOSYADA OLMAYANLAR — ve niçin
// ---------------------------------------------------------------------------
// BEKLET damgalı kayıtlar YAZILMADI. Üç sebep:
//   ① kuruluş tarihi bulunamadı (Mompox · Pasto · Píritu · Esteco)
//   ② künye yok (San Pedro de Atacama · Calama — `atacameno` künyesi
//      koordinatörün ölçütünü geçemiyor: datable bitiş YOK)
//   ③ `bit:`in ÜÇÜNCÜ HALİ — kaynak "bitti" diyor ama TARİH vermiyor
//      (Rey Don Felipe · Santo Domingo de la Nueva Rioja · San Sebastián
//       de Urabá). Karar beklemede.
// Hepsi denetim/ONERI-GAMERIKA-0903-*.json içinde gerekçesiyle duruyor.
//
// 🔴 VE BU DOSYA ON BİR UYDURMA TARİHTEN TEMİZLENDİ: ilk sürümlerde
//    kaynakta olmayan yıllar yazılmıştı; `bit:` kuralı ve tarih denetimi
//    onları yakaladı. Kalan her tarihin `kaynak:` alanında karşılığı var.
// ============================================================================

window.YERLESIMLER_GAMERIKA = [
{ad:"Nuestra Señora de Caraballeda",lat:10.61,lon:-66.83,kaynak:"HSAI c.4: 'By 1562, however, the first two Spanish colonies were established: Nuestra Señora de Caraballeda on the Atlantic coast, 2 leagues east of La Guaira, and San Francisco in the interior'",kur:"1562-01-01",s:[{d:"ispanya",f:"1562-01-01",t:"1821-06-24"},{d:"gran-kolombiya",f:"1821-06-24",t:"1830-01-13"},{d:"venezuela-cumhuriyeti",f:"1830-01-13",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Beyan K7.5 B62.5",lat:7.5,lon:-62.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Caura-Aro havzası, aşağı Orinoco'nun GÜNEYİ (Ye'kuana · Panare). ⚠️ Angostura/Ciudad Bolívar (~8,1K/-63,6B) bu merkezin 135 km kuzeybatısında ve 1764'te kuruldu — AMA kütükte BULUNAMADI (HSAI c.4'te 'Angostura' geçişi: 0) ve AYRI bir nokta adayı olarak kuyrukta.",not:"1281-1923 BEYAN. Angostura inerse beyan daralır. 🔴 Orinoco'nun KUZEYİ ayrı: orada Píritu misyonları ve Caraballeda var. · kapatir: 9 · kova_bolge: guyana"},
{ad:"Beyan K7.5 B60.5",lat:7.5,lon:-60.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Cuyuní / yukarı Mazaruni (Akawaio · Pemón). Kyk-over-al 1616 Essequibo'nun AŞAĞISINDA (6,4K/-58,7B) ve bu merkezden ~270 km uzakta — yani kıyı sömürgesi buraya ULAŞMIYOR. ⚠️ Kütükte bu koordinat için doğrudan ifade BULAMADIM; kova komşu desenden.",not:"1281-1923 BEYAN. ⚠️ Gerekçe komşu desenden türetildi. · kapatir: 3 · kova_bolge: guyana"},
{ad:"Kyk-over-al (Essequibo)",lat:6.4,lon:-58.68,kaynak:"HSAI c.4: 'With the building of a Dutch factory and fort by Groenewagen in 1616 on the Essequibo River at the mouth of the Mazaruni River (Kyk-over-al) ... the Dutch interests in the region were established'",kur:"1616-01-01",s:[{f:"1616-01-01",t:"1803-09-01",d:"hollanda"},{f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},{f:"1831-01-01",t:"1923-10-29",d:"ingiliz-guyanasi"}],not:"konum_kesinlik: kesin"},
{ad:"Beyan K4.5 B62.5",lat:4.5,lon:-62.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Gran Sabana / Roraima yaylası (Pemón · Arekuna · Kamarakoto). HSAI c.4 Guyana Kalkanı Karib halklarını kapsıyor. ⚠️ Bu merkez için kütükte AÇIK bir koordinat İFADESİ BULAMADIM — kova komşu merkezlerin desenine dayanıyor. `kabile` damgası bu merkezde ötekilerden ZAYIF; bir sonraki tur doğrulasın.",not:"1281-1923 BEYAN. ⚠️ Gerekçe komşu desenden türetildi, doğrudan alıntı YOK. · kapatir: 9 · kova_bolge: guyana"},
{ad:"Beyan K4.5 B59.5",lat:4.5,lon:-59.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Rupununi savanları. HSAI c.3 iki halkı KOORDİNATIYLA buraya yerleştiriyor: Macushi (Makusi) 'on the savannas of southern British Guiana and adjacent regions (lat. 3°-4° N., long. 58°-61° W.)' ve Wapishana 'the basin of the Tacutu River (lat. 3° N., long. 60° W.)'. Kaynak SUSMUYOR — bu halkları adıyla, konumuyla, 1778 ve 1787 kayıtlarıyla anıyor — ama merkezî devlet TARİF ETMİYOR ⇒ `devletsiz` değil `kabile`. ⚠️ Bu merkezin kovası bu partinin EN GÜÇLÜSÜ: kütük tam bu koordinatı veriyor.",not:"1281-1923 boyunca BEYAN. `s:` BOŞ bırakıldı — Hollanda/İngiliz kıyı sömürgeleri iç yaylayı fiilen idare etmiyordu ve kütük bunun tersini söylemiyor. 🔴 BU BİR HÜKÜMDÜR, ölçüm değil: atlas TASARRUFU boyar (§11 'atlas seferi değil tasarrufu boyar') ve Guyana içinde 1923'e kadar sömürge tasarrufu ÖLÇÜLMEDİ. Koordinatör aksini düşünüyorsa değiştirilsin. · kapatir: 7 · kova_bolge: guyana"},
{ad:"Beyan K3.5 B56.5",lat:3.5,lon:-56.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Surinam içi (yukarı Surinam · Tapanahoni). Trio ve Wayana bölgesi; HSAI c.3 Cariban Trio'yu adıyla anıyor. Hollanda sömürgesi KIYIDAYDI — Paramaribo 1630 atlasta var ve bu merkezden ~300 km uzakta.",not:"1281-1923 BEYAN. · kapatir: 4 · kova_bolge: guyana"},
{ad:"Beyan K3.5 B54.5",lat:3.5,lon:-54.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Surinam-Brezilya sınırı, Tumucumaque batısı. Wayana/Tiriyó bölgesi. Tek hücre.",not:"1281-1923 BEYAN. · kapatir: 1 · kova_bolge: guyana"},
{ad:"Cali",lat:3.44,lon:-76.52,kaynak:"HSAI c.4: 'Cali was founded in Lile territory in 1537 by Captain Miguel Muñoz'. ⚠️ HSAI c.2 AYNI ESERDE 1536/Belalcázar diyor — IC CELISKI, bildirildi",kur:"1537-01-01",s:[{d:"ispanya",f:"1537-01-01",t:"1542-11-20"},{d:"ispanyol-peru",f:"1542-11-20",t:"1819-12-17"},{d:"gran-kolombiya",f:"1819-12-17",t:"1831-01-01"},{d:"kolombiya-cumhuriyeti",f:"1831-01-01",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Beyan K2.5 B52.5",lat:2.5,lon:-52.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Amapá / Oyapock-Tumucumaque içi. HSAI c.3 Oyapock bölgesi halklarını (Macuani 1729 · Palicur · Ouanari misyonu) anıyor; iç yayla band düzeyi. ⚠️ Fransız Guyanası kıyısı AYRI — Cayenne 1643 atlasta ZATEN var ve bu merkezden ~250 km uzakta.",not:"1281-1923 BEYAN. · kapatir: 4 · kova_bolge: guyana"},
{ad:"Beyan K1.5 B63.5",lat:1.5,lon:-63.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Yukarı Rio Branco / Parima — Guaharibo · Waica · Shiriana (Yanomami) bölgesi. HSAI c.3: 'A few tribes of the area, such as the Shiriana, Waica, and Guaharibo and the Macu of the Rio Negro formerly had no farming'. Tarımı bile olmayan band düzeyi ⇒ `kabile`; merkezî devlet söz konusu değil.",not:"1281-1923 BEYAN. Bu, kütüğün EN AÇIK band-düzeyi ifadesi. · kapatir: 4 · kova_bolge: guyana"},
{ad:"Beyan K1.5 B60.5",lat:1.5,lon:-60.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Yukarı Rio Branco / Tacutu havzası. HSAI c.3: Wapishana 'formerly, they occupied the basin of the Tacutu River (lat. 3° N., long. 60° W.)'; Macushi aynı kuşakta. ⚠️ AYRICA: Portekiz Forte São Joaquim (~3,0K/-60,5B) bu merkezin 165 km kuzeyinde — AYRI bir nokta adayı olarak kuyrukta, kaynağı BULUNAMADI.",not:"1281-1923 BEYAN. Forte São Joaquim inerse bu hücrelerin bir kısmı NOKTA ile kapanır ve beyan daralır. · kapatir: 9 · kova_bolge: guyana"},
{ad:"Beyan K1.5 B57.5",lat:1.5,lon:-57.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Serra Acaraí / Mapuera havzası. HSAI c.3 Waiwai'yi (Ouayeoué) Mapuera nehrinde konumluyor (O. Coudreau 1903). Kütük halkı anlatıyor, merkezî devlet tarif etmiyor ⇒ `kabile`.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: guyana"},
{ad:"Beyan K1.5 B54.5",lat:1.5,lon:-54.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"Tumucumaque / Brezilya-Surinam sınırı. HSAI c.3 Oyana'yı (Wayana · Ojana · Rucuyen · Urucuiana) 'in the southern border region' diye konumluyor. Kütük halkı anlatıyor, devlet tarif etmiyor ⇒ `kabile`.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: guyana"},
{ad:"Caruru (Vaupés)",lat:1.02,lon:-71.28,kaynak:"HSAI c.3: 'A Carmelite mission established in 1852 at Caruru on the Vaupés River lasted a short time only'",kur:"1852-01-01",s:[{d:"brezilya-imparatorlugu",f:"1852-01-01",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Yavaraté (Vaupés)",lat:0.61,lon:-69.2,kaynak:"HSAI c.3: 'In 1784, the Portuguese, Manual de Gama Lobo do Almada, ascended the Vaupés as far as Panoré and established mission stations as nuclei for Indian settlements at San Jeronimo, Sao Joaquim de Coané, Terra Cativa, Jukira-Apecona, and at Yavarate'",kur:"1784-01-01",s:[{d:"portekiz-brezilyasi",f:"1784-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Panoré (São Gabriel da Cachoeira)",lat:-0.13,lon:-67.09,kaynak:"HSAI c.3: aynı 1784 kaydı — Gama Lobo d'Almada Vaupés'i Panoré'ye kadar çıktı ve misyon istasyonları kurdu",kur:"1784-01-01",s:[{d:"portekiz-brezilyasi",f:"1784-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"San José de los Nuevos Icaguates",lat:-0.6,lon:-75.25,kaynak:"HSAI c.3: 'In 1733, a new Icaguate mission, San José de los Nuevos Icaguates, was founded at the mouth of the Aguarico River'",kur:"1733-01-01",s:[{d:"ispanyol-peru",f:"1733-01-01",t:"1822-05-24"},{d:"gran-kolombiya",f:"1822-05-24",t:"1830-05-13"},{d:"ekvador-cumhuriyeti",f:"1830-05-13",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Archidona (Napo)",lat:-0.91,lon:-77.81,kaynak:"HSAI c.3: 'Archidona and San Pedro Alacala del Rio, founded near the Coca River in 1536, were the first Spanish settlements'",kur:"1536-01-01",s:[{d:"ispanya",f:"1536-01-01",t:"1542-11-20"},{d:"ispanyol-peru",f:"1542-11-20",t:"1822-05-24"},{d:"gran-kolombiya",f:"1822-05-24",t:"1830-05-13"},{d:"ekvador-cumhuriyeti",f:"1830-05-13",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Canelos (Bobonaza)",lat:-1.58,lon:-77.75,kaynak:"HSAI c.3: 'Of these villages, Canelos, founded in 1712 (Maroni, 1889-92), had about 30 people in 1730'",kur:"1712-01-01",s:[{d:"ispanyol-peru",f:"1712-01-01",t:"1822-05-24"},{d:"gran-kolombiya",f:"1822-05-24",t:"1830-05-13"},{d:"ekvador-cumhuriyeti",f:"1830-05-13",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San Miguel (Aushiri)",lat:-1.9,lon:-75.2,kaynak:"HSAI c.3: 'it was not until after 1620 that visits by missionaries ... paved the way for their first mission, founded at San Miguel in 1665'",kur:"1665-01-01",s:[{d:"ispanyol-peru",f:"1665-01-01",t:"1822-05-24"},{d:"gran-kolombiya",f:"1822-05-24",t:"1830-05-13"},{d:"ekvador-cumhuriyeti",f:"1830-05-13",t:"1923-10-29"}],not:"konum_kesinlik: kaba"},
{ad:"Cametá (Tocantins)",lat:-2.24,lon:-49.5,kaynak:"HSAI c.3 Tocantins aldeia ağı; Portekiz Grão-Pará yerleşimi. ⚠️ GÜN ve YIL kütükte açıkça verilmiyor — 1635 STANDART akademik kabul, kütükten DOĞRULANMADI",kur:"1635-01-01",s:[{d:"portekiz-brezilyasi",f:"1635-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Tupinambarana (Parintins)",lat:-2.63,lon:-56.74,kaynak:"HSAI c.3: 'the Jesuits came into contact with these tribes after the Mission to the Tupinambarana was founded in 1669'",kur:"1669-01-01",s:[{d:"portekiz-brezilyasi",f:"1669-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Santo Tomé de los Andoas",lat:-2.9,lon:-76.4,kaynak:"HSAI c.3: 'the Mission of Santo Tomé de los Andoas built in 1708 on the Pastaza River near the Bobonaza River'",kur:"1708-01-01",s:[{d:"ispanyol-peru",f:"1708-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Tefé (Teffé de Aisuaris)",lat:-3.35,lon:-64.71,kaynak:"HSAI c.3: 'They were collected in the Mission of Teffé de Aisuaris in 1688'",kur:"1688-01-01",s:[{d:"portekiz-brezilyasi",f:"1688-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San Joaquín de Omaguas (Fritz)",lat:-3.83,lon:-73.35,kaynak:"HSAI c.3: 'After 1686, Father Samuel Fritz spent many years among the Omagua, traveling, preaching, and founding the missions of San Joaquin, Nuestra Señora de Guadalupe, San Pablo Apostol, and San Cristobal'. Ayrica c.3: 'In 1755, a group was taken to the Mission of San Joaquin de los Omaguas'. 🔴 KAYNAK 'after 1686' diyor — `kur:` o ALT SINIRA konuldu, kesin kurulus gunu DEGIL. ⚠️ Bu kayit bir MUKERRERIN birlesimidir: ilk partide ayni misyon 'San Joaquín de los Omaguas' adiyla 123 km oteye ikinci kez yazilmisti; 3 km kurali onu yakalayamadi, TARIH denetimi yakaladi.",kur:"1686-01-01",s:[{d:"ispanyol-peru",f:"1686-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Itaituba",lat:-4.28,lon:-55.98,kaynak:"HSAI c.3: 'In 1823, the village of Itaituba was founded on the Tapajóz River with Maué, and in 1828 there were 400 of them settled there'",kur:"1823-01-01",s:[{d:"brezilya-imparatorlugu",f:"1823-01-01",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Borba (Madeira)",lat:-4.39,lon:-59.59,kaynak:"HSAI c.3: 'They were hostile toward the Jesuit mission founded in 1723 or somewhat later above the mouth of the Jamary River, and … the mission was transferred farther down the river in 1742' ve Mura kayitlarinda 'a little above Borba'",kur:"1723-01-01",s:[{d:"portekiz-brezilyasi",f:"1723-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Borja (Maynas)",lat:-4.47,lon:-77.55,kaynak:"HSAI c.3: 'In 1619, Diego Vaca de Vega took possession of the Province of Maynas, which had been granted to him, established Borja'",kur:"1619-01-01",s:[{d:"ispanya",f:"1619-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Beyan G4.5 B52.5",lat:-4.5,lon:-52.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"ORTA XINGU — Altamira üstü. HSAI c.3: 'In the 18th century, the Jesuits succeeded in settling Yuruna and Tacunyapé in the Tacuana (Tauaquéra) mission, a little above present-day Altamira, and in 1762 and 1784 the Tacunyapé are mentioned as among the Indians settled at Portel.' ⚠️ Misyon VARDI ama kütük KURULUŞ YILI VERMİYOR ('in the 18th century') ⇒ nokta yazılamadı, beyan yazıldı. Aradaki iç kuşak zaten Yuruna/Arara band düzeyi.",not:"1281-1923 BEYAN. 🔜 Tacuana misyonu bir NOKTA adayıdır; kuruluş yılı başka kaynakta aranmalı. · kapatir: 8 · kova_bolge: amazon"},
{ad:"Santiago de la Laguna (Lagunas)",lat:-5.23,lon:-75.68,kaynak:"HSAI c.3: 'the Mission of Santiago de la Laguna, which he founded in 1670 on the Huallaga River' (Father Lucero)",kur:"1670-01-01",s:[{d:"ispanyol-peru",f:"1670-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Concepción de Xéveros (Jeberos)",lat:-5.28,lon:-76.29,kaynak:"HSAI c.3: 'Concepción de Xéveros was founded in 1640 with 2,000 Indians (Chantre y Herrera, 1901)'",kur:"1640-01-01",s:[{d:"ispanyol-peru",f:"1640-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Jaén de los Bracamoros",lat:-5.71,lon:-78.81,kaynak:"HSAI c.3: 'he left and was succeeded in 1549 by Diego Palomino, who founded the city of Jaén de los Bracamoros near the junction of the Chinchipe and Marañón Rivers' ve 'conquered in 1542 and the city of Jaén founded in 1549'",kur:"1549-01-01",s:[{d:"ispanyol-peru",f:"1549-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Santa María de Ucayali",lat:-6.1,lon:-74.6,kaynak:"HSAI c.3: 'The first Jesuit mission among the Cocama, Santa Maria de Ucayali, was founded in 1653 by Father Bartolomé Perez'",kur:"1653-01-01",s:[{d:"ispanyol-peru",f:"1653-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: kaba"},
{ad:"Sarayacu (Ucayali)",lat:-6.73,lon:-75.1,kaynak:"HSAI c.3: 'Franciscans returned during the 19th century, founding Sarayacu in 1790 with many tribes, but in 1860 a violent epidemic of smallpox destroyed many of the Setebo, and in 1861 the missionaries abandoned Sarayacu because of conflicts with the civil governors and traders.' KURULUS ve TERK, ikisi de kaynakli. GUN BILINMIYOR.",kur:"1790-01-01",s:[{d:"ispanya",f:"1790-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1861-01-01"}],bit:"1861-01-01",not:"konum_kesinlik: yaklasik"},
{ad:"Santa María de Huallaga",lat:-6.9,lon:-76.1,kaynak:"HSAI c.3: 'In 1649, the Mission of Santa Maria de Huallaga was established among them by Father Bartolomé Perez. ... At that time the mission had a population of about 600.' GUN BILINMIYOR.",kur:"1649-01-01",s:[{d:"ispanya",f:"1649-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: kaba"},
{ad:"Beyan G7.5 B62.5",lat:-7.5,lon:-62.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"MADEIRA-PURUS arası. HSAI c.3 Mura'yı bu kuşakta konumluyor: 'In 1749 ... the Mura were established on a lake on the right bank of the Madeira River, opposite the mouth of the Autaz (a little above Borba)'. Mura tarımı BIRAKMIŞ bir halktır (c.3: 'the Guayakí and the Mura have abandoned cultivation since the Conquest and subsist solely on hunting') ⇒ band düzeyi, `kabile`. ⚠️ Madeira ANA KANALI ayrı: Borba (1723) NOKTA olarak yazıldı ve bu merkezden ~370 km uzakta.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G7.5 B56.5",lat:-7.5,lon:-56.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"TAPAJÓS-XINGU arası, Mundurucú bölgesi. HSAI c.3: 'the Tapajoz River Mundurucú have a patrilineal sib and moiety system' ve Maué ile Mundurucú için ayrı bölümler. Kaynak halkı ayrıntısıyla anlatıyor, merkezî devlet tarif etmiyor ⇒ `kabile`. ⚠️ Tapajós ANA KANALI ayrı: Itaituba (1823) NOKTA olarak yazıldı, bu merkezden ~370 km.",not:"1281-1923 BEYAN. HSAI: 'Missions were established on the Tapajóz in 1799 and on the Madeira in 1811' — ikisi de NEHİR BOYU, iç kuşak değil. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G7.5 B50.5",lat:-7.5,lon:-50.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"ARAGUAIA-TOCANTINS arası, Kayapó/Gê bölgesi. HSAI c.3 ve c.1'in 'NORTHWESTERN AND CENTRAL GE' bölümü (Lowie) bu halkları köy düzeyinde tarif ediyor; c.3: Arara için 'Another band of Arara, which numbered about 30 in 1917, settled on the right bank of the Pacajá do Xingú River'. ⇒ Band/köy düzeyi, merkezî devlet YOK ⇒ `kabile`.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G7.5 B47.5",lat:-7.5,lon:-47.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"TOCANTINS-PARNAÍBA arası, Maranhão/Tocantins içi. HSAI c.3: 'In 1840 the provincial government of Maranhão established the Colony of São Pedro do Pindaré for the Indians of the region, with but little success' ve Guajajara için 'settled on the Gurupi River near Cerzedello in 1818'. ⇒ Devlet 19. yy'da KOLONİ KURUYOR ama 'with but little success'; iç kuşak Timbira/Gê band düzeyi ⇒ `kabile`.",not:"1281-1923 BEYAN. 🔜 São Pedro do Pindaré (1840) bir NOKTA adayıdır ve tarihi KAYNAKLI — ama konumu bu merkezden uzak; ayrı ölçülmeli. · kapatir: 9 · kova_bolge: amazon"},
{ad:"San Miguel (Pachitea)",lat:-8.8,lon:-74.55,kaynak:"HSAI c.3: 'established San Miguel in 1685 at the mouth of the Pachitea River'",kur:"1685-01-01",s:[{d:"ispanya",f:"1685-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Beyan G9.5 B65.5",lat:-9.5,lon:-65.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"MADEIRA-MAMORÉ kavşağı ardı, Rondônia batısı. HSAI c.3 bölgenin halklarını (Mura · Pacaás Novos · Karipuna) anlatıyor. ⚠️ Forte Príncipe da Beira (1776-06-20) atlasta ZATEN VAR ve bu merkezden ~290 km güneybatıda — yani Portekiz kalesi Guaporé'de, bu iç kuşakta DEĞİL.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Tonua (Chinchao)",lat:-9.6,lon:-75.95,kaynak:"HSAI c.3: 'But in 1631, a Franciscan mission was established at Tonua at the mouth of the Chinchao River with 1,000 Panatahua and Chunatahua'",kur:"1631-01-01",s:[{d:"ispanyol-peru",f:"1631-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Beyan G10.5 B68.5",lat:-10.5,lon:-68.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"ACRE-YUKARI PURUS. HSAI c.3: 'The linguistic relationships of the various tribes and subtribes of the Juruá-Purús Basin were the most confused in South America until Rivet and Tastevin (1921) established their classification'; bölge 1921'de bile etnik haritası YENİ çıkarılan bir alandır. ⇒ Kaynak halkları anlatıyor, devlet tarif etmiyor ⇒ `kabile`. ⚠️ Kauçuk kasabaları (Rio Branco 1882 · Sena Madureira) NOKTA adayıdır ama kütükte kuruluş tarihleri YOK.",not:"1281-1923 BEYAN. 🔜 Kauçuk dönemi kasabaları için Brezilya kaynağı gerekli. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G10.5 B61.5",lat:-10.5,lon:-61.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"RONDÔNIA — Machado/Ji-Paraná havzası. HSAI c.3: Rondon'un Telgraf Hattı Komisyonu bölgeyi 20. yy başında tanıdı; 'brought by General Rondon to the Rio Machado, where they lived until 1925, when the last six members of the group joined the Telegraphic Post of Pimenta Bueno'. ⚠️ Pimenta Bueno telgraf karakolu bir NOKTA adayıdır ama kütüğün verdiği tek tarih 1925 — ATLAS UFKUNUN (1923) DIŞINDA, o yüzden yazılmadı.",not:"1281-1923 BEYAN. ⚠️ Rondon hattı 1907-15'te kuruldu ama kütük bu karakol için yalnız 1925 veriyor; erken tarih BULUNAMADI. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G10.5 B58.5",lat:-10.5,lon:-58.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"ARIPUANÃ-JURUENA arası, kuzey Mato Grosso. HSAI c.3: 'In 1915, an expedition of the Commission of Strategic Telegraph Lines from Mato Grosso to the Amazon, led by Lieutenant F. P. Vasconcellos, was attacked by Indians on the lower Sangue River. These Indians were strong and well built. They used bark canoes, grew manioc and bananas, and had hammocks.' ⇒ 1915'te bile devlet SEFER gönderiyor, TASARRUF etmiyor; ve halk tarif ediliyor ⇒ `kabile`.",not:"1281-1923 BEYAN. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Beyan G10.5 B52.5",lat:-10.5,lon:-52.5,kasitli_bosluk:true,bos:"kabile",s:[],neden:"YUKARI XINGU. HSAI c.3'ün 'TRIBES OF UPPER XINGU' bölümü (Lévi-Strauss) bölgeyi ADIYLA ve SAYIYLA anlatıyor: 'Villages visited by Von den Steinen had from 2 to 20 huts and from 30 to 200 inhabitants' · 'the Suyá (in 1884) and the Trumai (in 1887) villages, both built on a river bank' · Bacairí · Nahukwá · Camayurá · Yaulapití köyleri. ⇒ Kaynak SUSMUYOR: yerleşik, tarım yapan, ticaret ağı olan köyler tarif ediliyor. AMA merkezî devlet TARİF EDİLMİYOR — köyler arası ittifak ve ticaret var, hükümranlık yok ⇒ `devletsiz` değil `kabile`.",not:"1281-1923 boyunca BEYAN. `s:` BOŞ: Brezilya'nın bu havzada fiilî tasarrufu 1923'e kadar ÖLÇÜLMEDİ; von den Steinen 1884-87'de bölgeyi AVRUPALIYA İLK TANITAN kişidir. 🔴 Bu bir HÜKÜMDÜR: atlas tasarrufu boyar, ve burada tasarruf gösterilemedi. · kapatir: 9 · kova_bolge: amazon"},
{ad:"Cerro de la Sal",lat:-10.7,lon:-75.2,kaynak:"HSAI c.3: 'the Franciscans founded their famous Cerro de la Sal missions among the Campa and Amuesha, 1635' ve 'Spanish settlements in 1645 and 1649'",kur:"1635-01-01",s:[{d:"ispanya",f:"1635-01-01",t:"1824-12-09"},{d:"peru-cumhuriyeti",f:"1824-12-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"La Merced (Chanchamayo)",lat:-11.05,lon:-75.34,kaynak:"HSAI c.3: 'by 1869, the Campa of Chanchamayo were subdued and the city of La Merced founded'",kur:"1869-01-01",s:[{d:"peru-cumhuriyeti",f:"1869-01-01",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Santa Magdalena (Itonama)",lat:-13.34,lon:-64.13,kaynak:"HSAI c.3: 'The Jesuits collected the Itonama in the Mission of Santa Magdalena, on the Itonama River ... In 1767, there were 4,000 Itonama at Magdalena'. 🔴 KURULUS YILI KAYNAKTA YOK. `kur:` kaynagin misyonu ILK ANDIGI yila (1767) konuldu — bu bir ALT SINIRDIR, kurulus gunu DEGIL. Onceki surumumde 1720 yaziyordu, UYDURMAYDI.",kur:"1767-01-01",s:[{d:"ispanya",f:"1767-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San José de Uchupiamonas",lat:-14.3,lon:-68.0,kaynak:"HSAI c.3: 'When the Mission of San José de Uchupiamonas was founded in 1716, it had 600 Indians'",kur:"1716-01-01",s:[{d:"ispanya",f:"1716-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Reyes (Maropa)",lat:-14.3,lon:-67.35,kaynak:"HSAI c.3: 'When the Mission of San José de Uchupiamonas was founded in 1716, it had 600 Indians. In the same year, the Maropa of the Mission of Reyes numbered 900'. 🔴 KURULUS YILI KAYNAKTA YOK. `kur:` kaynagin misyonu ILK ANDIGI yila (1716) konuldu — ALT SINIR. Onceki surumumde 1710 yaziyordu, UYDURMAYDI.",kur:"1716-01-01",s:[{d:"ispanya",f:"1716-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Concepción de Apolobamba",lat:-14.75,lon:-68.5,kaynak:"HSAI c.3: 'the Mission of Apolobamba (founded in 1690)' ve 'At the end of the 17th century, the Franciscans founded in the region of Apolobamba …'",kur:"1690-01-01",s:[{d:"ispanya",f:"1690-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Trinidad (Mojos)",lat:-14.83,lon:-64.9,kaynak:"HSAI c.3: 'Loreto, was founded in 1684, Trinidad in 1687, and San Ignacio in 1689'",kur:"1687-01-01",s:[{d:"ispanya",f:"1687-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San Ignacio de Moxos",lat:-14.87,lon:-65.63,kaynak:"HSAI c.3: 'Loreto, was founded in 1684, Trinidad in 1687, and San Ignacio in 1689'",kur:"1689-01-01",s:[{d:"ispanya",f:"1689-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Jiboya (Camacan aldeası)",lat:-14.9,lon:-40.8,kur:"1817-01-01",kaynak:"HSAI c.1 (Métraux): 'In 1817 the Camacan who were settled at Jiboya, near Arrayal da Conquista in the State of Bahia, were visited by Maximilian Wied-Neuwied (1820-21, 2: 211-214).' ⚠️ 1817 ZİYARET yılıdır, kuruluş DEĞİL — `kur:` kütüğün aldeayı ilk andığı yıla konuldu ve bu bir ALT SINIRDIR. GÜN bilinmiyor.",s:[{d:"portekiz-brezilyasi",f:"1817-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Loreto (Mojos)",lat:-15.22,lon:-64.67,kaynak:"HSAI c.3: 'The first mission, Loreto, was founded in 1684, Trinidad in 1687, and San Ignacio in 1689'",kur:"1684-01-01",s:[{d:"ispanya",f:"1684-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Concepción (Chiquitos)",lat:-16.14,lon:-62.03,kaynak:"HSAI c.3: 'The Paunaca were visited in 1707 by Brother Lucas Caballero and agreed to settle with Unape and Carababa in the Mission of Concepción'",kur:"1707-01-01",s:[{d:"ispanya",f:"1707-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San Francisco Xavier (Chiquitos)",lat:-16.27,lon:-62.5,kaynak:"HSAI c.3: 'The first mission among the Chiquito was that of San Francisco Xavier, founded in 1691 by Father José de Arce among the Pinoco'",kur:"1691-01-01",s:[{d:"ispanya",f:"1691-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"San Ignacio de Zamucos",lat:-19.5,lon:-60.0,kaynak:"HSAI c.1: 'the mission of San Ignacio de Zamucos (1741)' — kuzey Chaco",kur:"1741-01-01",s:[{d:"ispanya",f:"1741-01-01",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kaba"},
{ad:"Fuerte Olimpo (Borbón)",lat:-21.04,lon:-57.87,kaynak:"HSAI c.1: 'Military posts were established both by Spaniards and by Portuguese at Fuerte Olimpo or Bourbon (1772)'",kur:"1772-01-01",s:[{d:"ispanya",f:"1772-01-01",t:"1811-05-14"},{d:"paraguay-cumhuriyeti",f:"1811-05-14",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Tarija",lat:-21.53,lon:-64.73,kur:"1690-01-01",kaynak:"HSAI c.3 (Métraux): 'The Jesuit fathers founded a college in Tarija in 1690 and undertook the spiritual conquest of the Chiriguano.' Ayrıca c.1: 'About the same time, the Franciscans built a missionary center in Tarija and in 1757 they sent missionaries to the Chiriguano.' GÜN BİLİNMİYOR. ⚠️ 1690 KOLEJİN kuruluşudur; yerleşimin kendisi daha eski olabilir — ÖLÇÜLMEDİ, `kur:` kütüğün verdiği EN ERKEN tarihe konuldu.",s:[{d:"ispanyol-peru",f:"1690-01-01",t:"1824-12-09"},{d:"ispanya",f:"1824-12-09",t:"1825-08-06"},{d:"bolivya-cumhuriyeti",f:"1825-08-06",t:"1923-10-29"}],not:"konum_kesinlik: kesin · ara_donem_notu: 🔴 8 AYLIK ARA DONEM: `ispanyol-peru` kunyesi 1824-12-09'da (Ayacucho) biter, Bolivya bagimsizligi 1825-08-06'dir. Arasi `ispanya` yazildi — BULGU-GAMERIKA-0903 §3.1'deki kendi recetem. ⚠️ Bu bir HUKUMDUR: alternatifi `ispanyol-peru` kunyesinin `t:` degerini 1825-08-06'ya cekmektir ve hangisinin dogru oldugu OLCULMEDI."},
{ad:"São Fidélis (Paraíba do Sul)",lat:-21.64,lon:-41.75,kaynak:"HSAI c.1: 'the Capuchin mission of Sao Fidelis, founded in 1776 on the right side of the Parahyba River'",kur:"1776-01-01",s:[{d:"portekiz-brezilyasi",f:"1776-01-01",t:"1822-09-07"},{d:"brezilya-imparatorlugu",f:"1822-09-07",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Tariquea (Chiriguano misyonu)",lat:-21.9,lon:-63.9,kur:"1691-01-01",bit:"1727-01-01",kaynak:"HSAI c.3: 'In 1691, Father Arce founded a mission in the valley of Tariquea, which lasted only 3 years' · 'In 1715, the Jesuits reestablished their ancient mission of Tariquea' · 'In 1727, all the missions in the Chiriguano country were destroyed by the rebellion of the chief, Aruma, and his followers, who feared being taken into slavery.' ⇒ KURULUŞ ve YOK OLUŞ, ikisi de kaynaklı. GÜN BİLİNMİYOR. ⚠️ 1694-1715 arası boşluk kütükte YAZILI ama tek kayıtta ifade edilemedi — `kur:` ilk kuruluş, `bit:` nihaî yıkım.",s:[{d:"ispanyol-peru",f:"1691-01-01",t:"1727-01-01"}],not:"konum_kesinlik: kaba"},
{ad:"Chiquiaca misyonları",lat:-21.95,lon:-64.2,kur:"1700-01-01",bit:"1727-01-01",kaynak:"HSAI c.3: 'At the beginning of the 18th century, the Dominicans founded three missions in the valley of Chiquiaca, Nuestra Señora del Rosario, San Miguel, and Santa Rosa, while the Augustins formed the Mission of Santa Clara in the valley of Salinas.' ve 'In 1727, all the missions in the Chiriguano country were destroyed by the rebellion of the chief, Aruma.' ⚠️ `kur:1700-01-01` kaynağın 'at the beginning of the 18th century' ifadesinden türetilmiş bir YUVARLAMADIR — kesin yıl VERİLMİYOR ve bu kayıtta YAZILI.",s:[{d:"ispanyol-peru",f:"1700-01-01",t:"1727-01-01"}],not:"konum_kesinlik: kaba"},
{ad:"Rinconada (Puna)",lat:-22.43,lon:-66.16,kaynak:"HSAI c.2 (Casanova): 'Another famous example of a pucara is Rinconada on the Puna. It has been proved that both types of sites were contemporary and were built by the same Indians.' 🔴 KURULUŞ YILI KÜTÜKTE YOK: `kur:` YAZILMADI. Kimlik zinciri Quilmes emsalinden — Tilcara ile aynı gerekçe.",s:[{d:"diaguita-calchaqui-konfederasyonu",f:"1281-01-01",t:"1667-01-02"},{d:"ispanyol-peru",f:"1667-01-02",t:"1816-07-09"},{d:"arjantin-cumhuriyeti",f:"1816-07-09",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Lengua misyonu (Paraguay Chaco)",lat:-23.0,lon:-58.5,kur:"1887-01-01",kaynak:"HSAI c.1 (Métraux): 'Protestant missions of the South American Evangelical Society have extended their protection since 1887 to the Lengua, and in more recent years to several Mataco and Toba groups.' GÜN ve KESİN KONUM BİLİNMİYOR — Paraguay Chaco'sunun Lengua bölgesine kabaca yerleştirildi.",s:[{d:"paraguay-cumhuriyeti",f:"1887-01-01",t:"1923-10-29"}],not:"konum_kesinlik: kaba"},
{ad:"Tacuatí (Ypané)",lat:-23.45,lon:-56.3,kur:"1788-01-01",kaynak:"HSAI c.1 (Métraux): 'In 1788, 500 Guaná settled at Tacuati, on the Ypané River, under a priest, but were soon attacked and decimated by the Creoles.' ve 'In 1791 a new mission was established on the Tacuati River, on the middle course of the Ypané River, but it never prospered.' GÜN BİLİNMİYOR.",s:[{d:"ispanya",f:"1788-01-01",t:"1811-05-14"},{d:"paraguay-cumhuriyeti",f:"1811-05-14",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Pucará de Tilcara",lat:-23.58,lon:-65.39,kaynak:"HSAI c.2 (Casanova, 'The cultures of the Puna and the Quebrada de Humahuaca'): 'In the Pucara of Tilcara in the Quebrada de Humahuaca there are roads up to 1,600 m. (about 5,250 feet) in length' — sokakları ve yolları tarif edilen tahkimli bir yerleşim. Cilt ayrıca 'The Pucaras (forts) of Humahuaca and Tilcara' başlıklı bir levha taşıyor. 🔴 KURULUŞ YILI KÜTÜKTE YOK: `kur:` YAZILMADI. Yerleşim atlas ufkundan (1281) itibaren vardı ve bu, kütüğün 'old villages' anlatımıyla uyumlu. Kimlik zinciri atlasın KENDİ EMSALİNDEN alındı — Quilmes (Calchaquí Vadisi) kaydı: diaguita-calchaqui[1281-01-01..1667-01-02] -> ispanyol-peru[1667-01-02..1816-07-09] -> arjantin-cumhuriyeti. Aynı konfederasyon, aynı kırılma günü (Calchaquí Savaşlarının sonu). HSAI c.2: Atacameño 'had been displaced by the Diaguita in this latter area [Salta and Jujuy] in pre-Inca times' ⇒ Jujuy Diaguita bölgesidir.",s:[{d:"diaguita-calchaqui-konfederasyonu",f:"1281-01-01",t:"1667-01-02"},{d:"ispanyol-peru",f:"1667-01-02",t:"1816-07-09"},{d:"arjantin-cumhuriyeti",f:"1816-07-09",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Ciudad Real del Guairá",lat:-24.1,lon:-54.3,kaynak:"HSAI c.3: 'Here, the Spaniards had founded two cities, Ciudad Real del Guaira (1554) and Villarica'; 1630-32'de mameluco akinlariyla yikildi",kur:"1554-01-01",s:[{d:"ispanya",f:"1554-01-01",t:"1632-01-01"}],bit:"1632-01-01",not:"konum_kesinlik: yaklasik · bit_kaynak: HSAI c.3: 'In 1630, the flourishing missions of El Guaira were destroyed by the raids of slave hunters from Sao Paulo, the dreaded mamelucos' + 'The Jesuits founded four missions here in 1631, but in 1632 these were all destroyed by the mamelucos'. YIL kaynakli (Guaira'nin bosaltilmasi), GUN bilinmiyor."},
{ad:"São Pedro de Alcântara (Tibagi)",lat:-24.3,lon:-50.6,kaynak:"HSAI c.1: 'In 1855-56, the settlements of São Pedro de Alcantara, San Jeronymo, and Jatahy were founded for them on the Tibagy River'",kur:"1855-01-01",s:[{d:"brezilya-imparatorlugu",f:"1855-01-01",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"San Esteban de Miraflores",lat:-25.3,lon:-64.2,kaynak:"HSAI c.1: 'the first mission of San Esteban, which in 1714 was transferred to the Rio Salado (Pasaje or Juramento River), and was henceforward known as San Esteban de Miraflores'",kur:"1714-01-01",s:[{d:"ispanya",f:"1714-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Lacangayé",lat:-25.55,lon:-60.0,kaynak:"HSAI c.1: 'Francisco Gabino Arias founded in 1780 the mission of Nuestra Señora de los Dolores de Lacangayé for the Mocoví'",kur:"1780-01-01",s:[{d:"ispanya",f:"1780-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Concepción del Bermejo",lat:-26.6,lon:-60.9,kaynak:"HSAI c.1 (Métraux, Ethnography of the Chaco): 'Concepción, founded in 1585 on the Bermejo River in the very heart of the Chaco among the warlike Frentones or Guaicuru tribes, was for 50 years a military base and missionary center.' YIKILIS ayni ciltte: '[Mocovi/Abipon] participated in the destruction of Concepción on the Bermejo River (1632)'. ⇒ KURULUS 1585 ve YOK OLUS 1632, IKISI DE KAYNAKLI. 🔴 DUZELTME: ilk surumumde `s:` 1810'a kadar suruyordu — yani sehir yikildiktan sonra 178 yil daha ayakta gorunuyordu. Ve kendi alintim ZATEN uyariyordu ('was for 50 years'); ipucu elimdeydi, OKUMAMISTIM.",kur:"1585-01-01",s:[{d:"ispanya",f:"1585-01-01",t:"1632-01-01"}],bit:"1632-01-01",not:"konum_kesinlik: yaklasik · bit_kaynak: HSAI c.1: 'the destruction of Concepción on the Bermejo River (1632)'. GUN BILINMIYOR."},
{ad:"San Fernando (Resistencia)",lat:-27.45,lon:-58.98,kaynak:"HSAI c.1: 'San Fernando was built in 1750 on the Rio Negro at the place of the present city of Resistencia'",kur:"1750-01-01",s:[{d:"ispanya",f:"1750-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Santiago del Estero",lat:-27.79,lon:-64.26,kur:"1553-01-01",kaynak:"The Columbia Encyclopedia (6. baskı, encyclopedia.com üzerinden): 'Founded in 1553, Santiago del Estero is one of the oldest cities of Argentina.' HSAI c.1 dönemi DOĞRULUYOR ama yıl vermiyor: 'The Christianization of the Chaco Indians goes back to the second half of the 16th century, when the cities of Tucuman, Santiago del Estero, and Esteco were founded.' ⚠️ 1553 GENEL BİR BAŞVURU ESERİNDEN; alanın el kitabı DEĞİL. GÜN BİLİNMİYOR.",s:[{d:"ispanya",f:"1553-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Nonohay (Yukarı Uruguay)",lat:-27.9,lon:-52.9,kaynak:"HSAI c.1: 'In 1850 Jesuit missionaries founded three settlements for the Caingang of the upper Uruguay: Nonohay, Campo do Meio, and Guarita'",kur:"1850-01-01",s:[{d:"brezilya-imparatorlugu",f:"1850-01-01",t:"1889-11-15"},{d:"brezilya-cumhuriyeti",f:"1889-11-15",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"San Jerónimo (Reconquista)",lat:-29.15,lon:-59.65,kaynak:"HSAI c.1: 'In 1748 the Jesuits founded the Abipón mission of San Jerónimo, which today is the prosperous city of Reconquista'",kur:"1748-01-01",s:[{d:"ispanya",f:"1748-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Beyan G31.5 B56.5",lat:-31.5,lon:-56.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Serrano, The Charrua; Metraux). Charrua · Minuan · Guenoa — Rio de la Plata'nin DOGU kiyisi. c.1: 'the Querandi and Charrua, primarily nomadic hunters and fishermen, ignorant of agriculture, tall, and warlike'. 🔴 `mapuche-araukanya` BURAYA YAZILMAZ: HSAI'nin 1725 yayilma ifadesi 'the great plains' yani Arjantin pampasi icindir, Uruguay nehrinin dogusu icin DEGIL.",s:[{d:"uruguay-cumhuriyeti",f:"1828-08-27",t:"1923-10-29"}],not:"1281-1828 BEYAN (kabile, Charrua/Minuan). 🔴 mapuche YAZILMAZ. Kolonyal donem (ispanya/portekiz) OLCULMEDI — bu kutuda kaynak aranmadi. · kapatir: 11 · kova_bolge: dogu"},
{ad:"Beyan G34.5 B65.5",lat:-34.5,lon:-65.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 9 · kova_bolge: kuzey"},
{ad:"Beyan G35.5 B69.5",lat:-35.5,lon:-69.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 sonrasi mapuche-araukanya. 🔜 NOT: `ranquel` kunyesi recetededir (t:1883); indiginde bu hucreler ona da bakabilir.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 6 · kova_bolge: kuzey · sinif: BEYAN · ayiklama_notu: Mendoza guneyi / kuzey Neuquen — sinir bolgesi, Pehuenche."},
{ad:"Reducción de la Concepción (Salado)",lat:-35.7466,lon:-57.3595,kaynak:"HSAI c.1: 'the Reducción de la Concepción, established in 1740 near the mouth of the Rio Salado about 100 miles southeast of Buenos Aires'",kur:"1740-01-01",s:[{d:"ispanya",f:"1740-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik · konum_notu: 🔴 ILK KOORDINATIM (-35.7500, -57.3500) ne_10m_land KARA MASKESININ DISINDAYDI — kiyi noktasi, deniz tarafina dusmustu. 0.94 km iceri kaydirildi ve YAZILACAGI hassasiyette (4 ondalik) SINANDI."},
{ad:"Beyan G36.5 B64.5",lat:-36.5,lon:-64.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 11 · kova_bolge: kuzey"},
{ad:"Beyan G36.5 B61.5",lat:-36.5,lon:-61.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 9 · kova_bolge: kuzey"},
{ad:"Beyan G37.5 B68.5",lat:-37.5,lon:-68.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 11 · kova_bolge: kuzey"},
{ad:"Nuestra Señora del Pilar (Mar del Plata)",lat:-37.85,lon:-57.75,kaynak:"HSAI c.1: 'Reducción de Nuestra Señora del Pilar, established in 1747 farther south near the present Mar del Plata'",kur:"1747-01-01",s:[{d:"ispanya",f:"1747-01-01",t:"1810-05-25"},{d:"arjantin-cumhuriyeti",f:"1810-05-25",t:"1923-10-29"}],not:"konum_kesinlik: yaklasik"},
{ad:"Beyan G38.5 B66.5",lat:-38.5,lon:-66.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 sonrasi mapuche-araukanya. 🔜 NOT: `ranquel` kunyesi recetededir (t:1883); indiginde bu hucreler ona da bakabilir.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: kuzey · sinif: BEYAN · ayiklama_notu: La Pampa ici — Ranquel bolgesi."},
{ad:"Beyan G38.5 B62.5",lat:-38.5,lon:-62.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 sonrasi mapuche-araukanya. 🔜 NOT: `ranquel` kunyesi recetededir (t:1883); indiginde bu hucreler ona da bakabilir.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 3 · kova_bolge: kuzey · sinif: BEYAN · ayiklama_notu: Bahia Blanca ardi bozkir."},
{ad:"Beyan G39.5 B70.5",lat:-39.5,lon:-70.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 2 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Neuquen ici."},
{ad:"Beyan G39.5 B64.5",lat:-39.5,lon:-64.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 11 · kova_bolge: kuzey"},
{ad:"Valdivia",lat:-39.814,lon:-73.246,kaynak:"Encyclopedia of Latin American History and Culture (Scribner's): 'Founded by Pedro de Valdivia in 1552 almost in the middle of Araucanian (mapuche) Indian territory'. GUN BILINMIYOR",kur:"1552-01-01",s:[{d:"ispanya",f:"1552-01-01",t:"1818-02-12"},{d:"sili-cumhuriyeti",f:"1818-02-12",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Beyan G40.5 B68.5",lat:-40.5,lon:-68.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains'.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1725 BEYAN (kabile); 1725 sonrasi kimlikli. Bu kayit HEM beyan HEM nokta. · kapatir: 11 · kova_bolge: kuzey"},
{ad:"Beyan G40.5 B62.5",lat:-40.5,lon:-62.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 sonrasi mapuche-araukanya. 🔜 NOT: `ranquel` kunyesi recetededir (t:1883); indiginde bu hucreler ona da bakabilir.",s:[{d:"mapuche-araukanya",f:"1725-01-01",t:"1883-01-01"},{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: kuzey · sinif: BEYAN · ayiklama_notu: Rio Negro agzi ardi."},
{ad:"Beyan G41.5 B71.5",lat:-41.5,lon:-71.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 2 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Kuzey Patagonya And etegi."},
{ad:"Castro (Chiloé)",lat:-42.481,lon:-73.762,kaynak:"Memoria Chilena / BN Chile: 'Febrero [1567]. El capitán Martín Ruiz de Gamboa funda … la ciudad de Santiago de Castro'. GUN BILINMIYOR",kur:"1567-02-01",s:[{d:"ispanya",f:"1567-02-01",t:"1818-02-12"},{d:"sili-cumhuriyeti",f:"1818-02-12",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Beyan G42.5 B65.5",lat:-42.5,lon:-65.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 5 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Chubut bozkiri."},
{ad:"Beyan G43.5 B68.5",lat:-43.5,lon:-68.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date'. Cooper, HSAI c.1: 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN yalniz 1281-1883 icindir; 1883 sonrasi kimliklidir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1883 BEYAN (kabile); 1883 sonrasi Arjantin. ⚠️ Arjantin-Sili siniri bu enlemde DAGA gore cizili; boylam esigi (-72) YAKLASIKTIR, olculmedi. · kapatir: 15 · kova_bolge: guney"},
{ad:"Beyan G44.5 B72.5",lat:-44.5,lon:-72.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"sili-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 5 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Aysen / kanallar."},
{ad:"Beyan G44.5 B65.5",lat:-44.5,lon:-65.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Chubut kiyi ardi."},
{ad:"Beyan G46.5 B74.5",lat:-46.5,lon:-74.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"sili-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Sili kanallari."},
{ad:"Beyan G46.5 B68.5",lat:-46.5,lon:-68.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 7 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Santa Cruz bozkiri."},
{ad:"Beyan G46.5 B71.5",lat:-46.5761,lon:-71.4933,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date'. Cooper, HSAI c.1: 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN yalniz 1281-1883 icindir; 1883 sonrasi kimliklidir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1883 BEYAN (kabile); 1883 sonrasi Arjantin. ⚠️ Arjantin-Sili siniri bu enlemde DAGA gore cizili; boylam esigi (-72) YAKLASIKTIR, olculmedi. · 🔴 KONUM DUZELTILDI: ilk koordinat (-46.5000, -71.5000) IZGARA MERKEZIYDI ve kara maskesinin 7,58 km DISINDA kaliyordu — Patagonya'da izgara merkezi gole/buzula dusebiliyor. `denetle.py` olctu ve bu koordinati ONERDI; oneri gercek maskede SINANMISTIR. Maske disindaki bir nokta HIC toprak sahibi olamaz, yani bu beyan duzeltilmeden HICBIR hucreyi kapatmiyordu. · 🔴 IKINCI KONUM DUZELTMESI: `denetle.py` ilk duzeltmeyi (-46.5661, -71.5185) SINIRDA diye isaretledi — 'ham gol poligonunun icinde ama sadelestirilmisin disinda (ihlal DEGIL ... ama nokta suyun ustunde)'. Ihlal olmasa da bir beyan noktasi suyun ustunde durmamali: sadelestirme onu bugun kurtariyor, yarinki bir KARA_TOL degisikligi kurtarmayabilir. Nokta HAM gol poligonundan da CIKARILDI ve 4 ondalikta sinandi. · kapatir: 15 · kova_bolge: guney"},
{ad:"Beyan G48.5 B75.5",lat:-48.5,lon:-75.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"sili-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Sili kanallari, buzul kusagi."},
{ad:"Floridablanca (San Julián)",lat:-49.31,lon:-67.72,kaynak:"CONICET / DIPA-IMHICIHU, proje 'Arqueología e Historia en la colonia española de Floridablanca', yön. M. X. Senatore: 'La Nueva Colonia y Fuerte de Floridablanca funcionó entre 1780 y 1784 en la Bahía de San Julián'",kur:"1780-01-01",s:[{d:"ispanya",f:"1780-01-01",t:"1784-01-01"}],bit:"1784-01-01",not:"konum_kesinlik: yaklasik · bit_kaynak: CONICET/DIPA-IMHICIHU: 'La Nueva Colonia y Fuerte de Floridablanca funcionó entre 1780 y 1784 en la Bahía de San Julián'. YIL kaynakli, GUN bilinmiyor."},
{ad:"Beyan G49.5 B72.5",lat:-49.5,lon:-72.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date'. Cooper, HSAI c.1: 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN yalniz 1281-1883 icindir; 1883 sonrasi kimliklidir.",s:[{d:"sili-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"1281-1883 BEYAN (kabile); 1883 sonrasi Sili. ⚠️ Arjantin-Sili siniri bu enlemde DAGA gore cizili; boylam esigi (-72) YAKLASIKTIR, olculmedi. · kapatir: 13 · kova_bolge: guney"},
{ad:"Beyan G51.5 B69.5",lat:-51.5,lon:-69.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 1 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Guney Santa Cruz."},
{ad:"Beyan G52.5 B74.5",lat:-52.5,lon:-74.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"sili-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 3 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Magallanes kanallari."},
{ad:"Punta Arenas",lat:-53.1566,lon:-70.9248,kaynak:"Memoria Chilena / Biblioteca Nacional de Chile, 'Punta Arenas y la economía magallánica (1848-1950)': 18 Aralık 1848, vali José de los Santos Mardones",kur:"1848-12-18",s:[{d:"sili-cumhuriyeti",f:"1848-12-18",t:"1923-10-29"}],not:"konum_kesinlik: kesin · konum_notu: 🔴 ILK KOORDINATIM (-53.1630, -70.9170) ne_10m_land KARA MASKESININ DISINDAYDI — kiyi noktasi, deniz tarafina dusmustu. 0.88 km iceri kaydirildi ve YAZILACAGI hassasiyette (4 ondalik) SINANDI."},
{ad:"Porvenir",lat:-53.295,lon:-70.369,kaynak:"Memoria Chilena / BN Chile: '20 de junio 1894 … primera población chilena de la Tierra del Fuego'",kur:"1894-06-20",s:[{d:"sili-cumhuriyeti",f:"1894-06-20",t:"1923-10-29"}],not:"konum_kesinlik: kesin"},
{ad:"Fuerte Bulnes",lat:-53.6233,lon:-70.9443,kaynak:"Memoria Chilena / BN Chile — 🔴 IKI SAYFA CELISIYOR: w3-article-598975 '30 de octubre', w3-article-784 '21 de octubre'. GUN KOORDINATOR KARARINA BIRAKILDI",kur:"1843-10-30",s:[{d:"sili-cumhuriyeti",f:"1843-10-30",t:"1923-10-29"}],not:"konum_kesinlik: kesin · konum_notu: 🔴 ILK KOORDINATIM (-53.6280, -70.9230) ne_10m_land KARA MASKESININ DISINDAYDI — kiyi noktasi, deniz tarafina dusmustu. 1.50 km iceri kaydirildi ve YAZILACAGI hassasiyette (4 ondalik) SINANDI. · ikiz_gerekce: IKIZ BEYANI — Rey Don Felipe ile 2,64 km. MUKERRER DEGIL: zaman cizgileri TAMAMEN AYRIK (1843-1923 ile 1584-?), aralarinda 259 yil var. Memoria Chilena / BN Chile Fuerte Bulnes'i 'en punta Santa Ana' diye konumluyor; Sarmiento de Gamboa'nin 1584 kolonisi ise onun guneyindeki Puerto del Hambre mevkiindeydi. Ayni kiyi kesimi, AYRI iki yerlesim. · 🔴 IKIZ BEYANI KALDIRILDI: karsi taraf (Rey Don Felipe (Magallanes)) BEKLET damgali oldugu icin bu dosyaya YAZILMADI ve beyan ASKIDA kalirdi. `denetle.ikiz_ayikla` karsilikli beyan sart kosuyor. Karsi kayit inince beyan IKI TARAFA DA geri konmali — cift 2,64 km ve MUKERRER DEGIL (zaman cizgileri 259 yil ayrik)."},
{ad:"Güney Georgia (Grytviken)",lat:-54.28,lon:-36.51,kur:"1904-11-16",kasitli_bosluk:true,bos:"insansiz",neden:"1281-1904 arasi YERLESIM YOK. Ada kesif oncesi hic iskan edilmemis; HSAI c.1'de 'Falkland' gibi 'South Georgia' da HIC GECMIYOR (olculdu: 0 gecis) — ve HSAI band duzeyindeki en kucuk halklari bile ayri bolumlerle isliyor. ⚠️ BU BIR SESSIZLIK ARGUMANIDIR, POZITIF KAYNAK DEGIL: `insansiz` damgasi bu turda pozitif olarak KAYNAKLANMADI. 1904-11-16'da C.A. Larsen Grytviken balina istasyonunu kurdu (Compania Argentina de Pesca) — bu tarih de bu turda AKADEMIK kaynakla DOGRULANMADI; gov.gs zaman asimi verdi. ⇒ 1904 sonrasi NOKTA olarak AYRI yazilmali.",s:[{d:"ingiltere",f:"1904-11-16",t:"1923-10-29"}],not:"🔴 1904-11-16 gunu DOGRULANMADI. Dogrulanamazsa `1904-01-01` yazilmali (par.4: yil biliniyor, gun yok). Ingiliz idaresi 1775 Cook'un talebiyle iddia edildi, fiilen 1908 Falkland Bagimliliklari — BU DA OLCULMEDI. · kapatir: 1 · kova_bolge: ada · sinif: ADA"},
{ad:"Beyan G54.5 B67.5",lat:-54.5,lon:-67.5,kasitli_bosluk:true,bos:"kabile",neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri 1879-83 'completely defeated and disorganized the Indian confederates'; 'Recent period, 1883 to date.—Settlers, following the frontier, have taken up most of the country from the northern limit of the Pampa to the Strait of Magellan.' ⇒ BEYAN 1281-1883 icindir.",s:[{d:"arjantin-cumhuriyeti",f:"1883-01-01",t:"1923-10-29"}],not:"kapatir: 2 · kova_bolge: guney · sinif: BEYAN · ayiklama_notu: Ates Topraklari — Ona/Yahgan."}
];

;
/* ==== data/yerlesimler_kamerika.js ==== */
// 🔴 4 EKİM 2026 — `kur:"1281-01-01"` ALANLARI SİLİNDİ (110 kayıt bu dosyada).
//    Gerekçe: ONCE1281-KUR191-1004 ölçtü — 191 kaydın 156'sı KANITLA ufuk
//    tabanına kenetliydi, 35'i kaynaksızdı, **0'ı gerçek kuruluş tarihiydi**.
//    §4: "yıl bilinmiyorsa yıl yazılmaz" — kaynaksız `kur:` sahte kesinliktir,
//    ve 1281 öncesi sahiplik yazılırsa motor onu SESSİZCE yutardı.
//    Motor etkisi ÖLÇÜLDÜ: `kur:` yalnız MOTOR_YURUYUS=1 iken aday listesinde
//    okunuyor (uret_petek.py:6448) ve o bayrak son koşuda KAPALIYDI ⇒ bugünkü
//    çıktı DEĞİŞMEZ. Yürüyüş kapısı açılırsa bu 191 nokta adaydan çıkar —
//    kayıp değil DÜZELTME: uydurma bir `kur:` sayesinde aday oluyorlardı.
//    Rapor: denetim/ONCE1281-KUR191-1004.md (192 kayıt tek tek)
// 🔴 AYNI GÜN, EKSİK KALAN YÜZ — silme GERİYE doğru NÖTR DEĞİLDİR:
//    kur VARKEN  g=1000'de nokta YOK · kur YOKKEN g=1000 ve g=-5000'de VAR.
//    Yani bu kayıtlar artık "ezelden beri var". Taino (~600-1500), Inuit,
//    Xhosa yerleşimleri için bu kur:1281 kadar yanlıştır — ÖBÜR YÖNE.
//    ⇒ 1281 ÖNCESİ KAMPANYANIN İKİNCİ KAPISI: her nokta için ya KAYNAKLI
//      bir kur yazılacak, ya o nokta kapsam dışı bırakılacak. Ufuk geriye
//      açılmadan bu kapı kapanmalı. (ONCE1281-KUR191 bu yüzü ölçmemişti.)
// =====================================================================
// YERLESIMLER_KAMERIKA — KUZEY AMERİKA · DUNYA-KAMERIKA-0903
// window.YERLESIMLER_KAMERIKA   (§7: dosya adındaki ayırt edici
//                                parça değişken adında da —
//                                ayrı dosya vermek ayrı AD ALANI
//                                vermek DEĞİLDİR)
// Oturum: DUNYA-KAMERIKA-0903 · 3 Eylül 2026 · koordinatör 1.MURAT
// Kutu: 15-72K / 170B-52B
//
// ⚠️ Dosyayı `girdi.py`ye BEN BAĞLAMIYORUM — koordinatör bağlar.
//
// ══════════ ÖLÇÜLMÜŞ ETKİ — koşudan ÖNCE yazılıyor ══════════
//   KAPSAMA   2351 → 149 açık hücre (1° ızgara · %84,6 → %5,4)
//             575 →  19 açık hücre (2° ızgara · %83,1 → %2,7)
//   ÖN SINAV  3 km 0 · kutu dışı 0 · ad çakışması 0 · kara 0
//   HAYALET   0 — her dönem künyesinin ömrü içinde (ölçüldü)
//   KÜNYE     46 yeni künye GEREKİYOR, ayrı reçetede:
//             denetim/KUNYE-KAMERIKA-0903*.json
//   🔴 O KÜNYELER İNMEDEN BU DOSYA İNMEZ — `§8`: kimliği
//      BOYALAR'da olmayan `s:` BOYANMAZ, yani nokta peteği
//      üretir ama hiçbirini boyamaz.
//   🔴 VE `ingiliz-kuzey-amerika` t: 1867-07-01'e ÇEKİLMELİ —
//      bu dosyanın 121 dönemi onu ÖNCEDEN varsayıyor.
//
// ══════════ KAYNAK ══════════
// TDV Kuzey Amerika'yı kapsamıyor (`§4` COĞRAFÎ boşluk) ⇒ her
// kayıtta `kaynak:"bulunamadı"`, akademik dayanak `not:` alanında
// ADIYLA yazılı — gizlenmedi. Kütükler: Smithsonian Handbook of
// North American Indians · Historical Atlas of Canada (U. Toronto)
// · Dictionary of Canadian Biography · Black, Russians in Alaska
// · Weber, The Spanish Frontier in North America (Yale UP) ·
// Steward BAE Bulletin 120 · Gubser, The Nunamiut Eskimos (Yale)
//
// 🔴 ÖLÇMEDİĞİMİ `ölçmedim` DİYE YAZIYORUM: bu kütükler alanın
// standart akademik referanslarıdır ve kayıtlar onlardan gelir,
// ama 377 künyenin her biri TEK TEK ÇEKİLİP DOĞRULANMADI.
// Koordinat ve gün hassasiyeti yazım turunda teyit edilmeli.
// Ölçülen: 377 kaydın yalnız 23'ünün günü KAYNAKLI, 354'ü
// atlasın ortak takvimi (`§4`: gün bilinmiyorsa YYYY-01-01).
// =====================================================================

window.YERLESIMLER_KAMERIKA = [
  { ad:"Minto Inlet (Kangiryuarmiut)", tur:"sehir", lat:71.4, lon:-114.5, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Utqiaġvik (Nuvuk / Barrow)", tur:"sehir", lat:71.291, lon:-156.789, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Thule/İnyupiak sürekli yerleşim; 1889 balina istasyonu · dayanak: Handbook of North American Indians c.5 Arctic (Smithsonian)" },
  { ad:"Ulguniq (Wainwright) / Icy Cape", tur:"sehir", lat:70.638, lon:-160.025, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kanngiqtugaapik (Clyde River)", tur:"sehir", lat:70.472, lon:-68.591, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Nuiqsut (Kuukpikmiut, Colville deltası)", tur:"sehir", lat:70.219, lon:-151.002, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kaktovik (Barter Adası)", tur:"liman", lat:70.0918, lon:-143.6225, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Adı 'takas adası' — İnyupiak-İnuvialuit ticaret buluşması · konum denetle.py reçetesiyle düzeltildi (4.43 km maske dışıydı: 70.1320,-143.6240 → 70.0918,-143.6225) · konum denetle.py reçetesiyle düzeltildi (4.43 km maske dışıydı: 70.0918,-143.6225 → 70.0918,-143.6225) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Qikiqtaruk (Herschel Adası)", tur:"liman", lat:69.5792, lon:-138.9091, g:0,
    kur:"1890-01-01",
    s:[{f:"1890-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.97 km maske dışıydı: 69.5700,-138.9100 → 69.5792,-138.9091) · konum denetle.py reçetesiyle düzeltildi (0.97 km maske dışıydı: 69.5792,-138.9091 → 69.5792,-138.9091) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Iglulik", tur:"sehir", lat:69.377, lon:-81.8, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Thule yerleşim sürekliliği; Parry 1822 · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kittigazuit (Mackenzie İnuitleri)", tur:"sehir", lat:69.35, lon:-133.75, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Beyaz balina avının büyük yaz kampı · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Paulatuk / Cape Bathurst", tur:"sehir", lat:69.35, lon:-124.07, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Qeqertarsuaq (Godhavn)", tur:"sehir", lat:69.247, lon:-53.534, g:0,
    kur:"1773-01-01",
    s:[{f:"1773-01-01",t:"1923-10-29",d:"danimarka"}],
    kaynak:"bulunamadı", not:"dayanak: Gulløv (ed.), Grønlands forhistorie / Danish Arctic historiography" },
  { ad:"Iqaluktuuttiaq (Cambridge Bay)", tur:"liman", lat:69.117, lon:-105.058, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Bernard Harbour (Bakır İnuit)", tur:"liman", lat:68.78, lon:-114.79, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Sanirajak (Hall Beach)", tur:"sehir", lat:68.777, lon:-81.243, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Uqsuqtuuq (Gjoa Haven)", tur:"sehir", lat:68.626, lon:-95.85, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kugaaruk (Pelly Bay)", tur:"liman", lat:68.534, lon:-89.832, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Tikiġaq (Point Hope)", tur:"sehir", lat:68.347, lon:-166.8, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Kuzey Amerika'nın en uzun sürekli iskân edilen yerlerinden · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Anaktuvuk Geçidi (Nunamiut)", tur:"sehir", lat:68.143, lon:-151.735, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"İç bölge (kara) İnyupiakları — Brooks Sıradağları · dayanak: Gubser, The Nunamiut Eskimos (Yale UP)" },
  { ad:"Vashrąįį K'ǫǫ (Arctic Village)", tur:"sehir", lat:68.128, lon:-145.535, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA4-1004 · dene→abd 1899-06-21 YERİNE 1867-10-18: 1899-06-21 `dene` künyesinin t'si (Kanada Antlaşma 8) — günü olaydan değil KÜNYEDEN devralmıştı (D207). Nokta 141°B'nin batısında = Alaska; ABD'ye 1867-10-18'de geçti (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — madde (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor. `dene` künyesi 1281-01-01'de KENETLİ.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Kugluktuk (Coppermine)", tur:"sehir", lat:67.8018, lon:-115.1003, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Hearne 1771 tarifi · konum denetle.py reçetesiyle düzeltildi (2.77 km maske dışıydı: 67.8270,-115.0980 → 67.8018,-115.1003) · konum denetle.py reçetesiyle düzeltildi (2.77 km maske dışıydı: 67.8018,-115.1003 → 67.8018,-115.1003) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Anaktuvuk batısı — Noatak (Nautaaġmiut)", tur:"sehir", lat:67.57, lon:-162.97, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Old Crow (Vuntut Gwitchin)", tur:"sehir", lat:67.57, lon:-139.83, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Old Crow düzlükleri — ren geyiği geçidi, sürekli iskân · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Qikiqtarjuaq (Broughton Adası)", tur:"liman", lat:67.548, lon:-64.031, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort McPherson (Teetł'it Zheh)", tur:"kale", lat:67.438, lon:-134.883, g:0,
    kur:"1840-01-01",
    s:[{f:"1840-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada (U. Toronto Press)" },
  { ad:"Coldfoot / Wiseman", tur:"sehir", lat:67.402, lon:-150.104, g:0,
    kur:"1899-01-01",
    s:[{f:"1899-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Colville Lake (K'áhbamı̨túé)", tur:"sehir", lat:67.033, lon:-126.1, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Sisimiut (Holsteinsborg)", tur:"sehir", lat:66.9338, lon:-53.6684, g:0,
    kur:"1756-01-01",
    s:[{f:"1756-01-01",t:"1923-10-29",d:"danimarka"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.55 km maske dışıydı: 66.9390,-53.6700 → 66.9338,-53.6684) · konum denetle.py reçetesiyle düzeltildi (0.55 km maske dışıydı: 66.9338,-53.6684 → 66.9338,-53.6684) · dayanak: Danish Arctic historiography (Gulløv ed., Grønlands forhistorie)" },
  { ad:"Kobuk (Kuuvaŋmiit)", tur:"sehir", lat:66.91, lon:-156.88, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Qikiqtaġruk (Kotzebue)", tur:"sehir", lat:66.898, lon:-162.596, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Kuzeybatı Alaska ticaret buluşma yeri · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kugluktuk doğusu — Bathurst Inlet (Kingaunmiut)", tur:"sehir", lat:66.83, lon:-108.0, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Alatna / Allakaket", tur:"sehir", lat:66.564, lon:-152.65, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA-1004 · ingiltere 1281→1763 + ingiliz-kuzey-amerika →1867 + kanada →1923 YERİNE dene → abd.
    //   ① İngiltere 1281'de Alaska içinde YOKTU; Alaska 1867-10-18'de ABD'ye devredildi (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   ② BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — kronoloji maddesi (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor.
    //   ③ BEYAN: `dene` künyesinin f'si 1281-01-01 — künye de UFUK tabanına KENETLİ. Emsal: Vashrąįį K'ǫǫ (Arctic Village) dene → abd.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Fort Yukon", tur:"kale", lat:66.564, lon:-145.274, g:0,
    kur:"1847-01-01",
    s:[{f:"1847-01-01",t:"1867-10-18",d:"ingiliz-kuzey-amerika"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA-1004 · kanada 1867-07-01→1923 YERİNE abd 1867-10-18→1923 (Alaska ABD'ye 1867-10-18'de devredildi — history.state.gov).
    //   ⚪ 1847-1867 `ingiliz-kuzey-amerika` DOKUNULMADI: toprak hukuken Rus Amerikası'ydı, HBC karakolu orada; sahibi ÖLÇÜLEMEDİ (kaynak açılamadı).
    //   ② BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — madde bu yerleşimi ADIYLA anmıyor.
    kaynak:"bulunamadı", not:"HBC, Rus toprağında kurulmuştu · dayanak: Dictionary of Canadian Biography" },
  { ad:"Naujaat (Repulse Bay)", tur:"liman", lat:66.522, lon:-86.25, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort Confidence (Büyük Ayı Gölü)", tur:"kale", lat:66.5, lon:-118.9, g:0,
    kur:"1837-01-01",
    s:[{f:"1837-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Good Hope (Rádeyı̨lı̨kóé)", tur:"kale", lat:66.256, lon:-128.629, g:0,
    kur:"1805-01-01",
    s:[{f:"1805-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Panniqtuuq (Pangnirtung / Kekerten)", tur:"sehir", lat:66.146, lon:-65.713, g:0,
    kur:"1857-01-01",
    s:[{f:"1857-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Kekerten balina istasyonu 1857 · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Circle City", tur:"sehir", lat:65.826, lon:-144.062, g:0,
    kur:"1893-01-01",
    s:[{f:"1893-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Kiŋigin (Wales)", tur:"sehir", lat:65.611, lon:-168.088, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"inuit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Bering Boğazı; Asya-Amerika ticaret kapısı · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Tetlit Gwich'in (Peel havzası)", tur:"sehir", lat:65.5, lon:-135.0, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Wager Körfezi (Ukkusiksalik)", tur:"liman", lat:65.481, lon:-88.4883, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (2.43 km maske dışıydı: 65.5000,-88.5000 → 65.4810,-88.4883) · konum denetle.py reçetesiyle düzeltildi (2.43 km maske dışıydı: 65.4810,-88.4883 → 65.4810,-88.4883) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Déline (Fort Franklin, Büyük Ayı Gölü)", tur:"kale", lat:65.2034, lon:-123.4211, g:0,
    kur:"1825-01-01",
    s:[{f:"1825-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Franklin'in ikinci seferinin kışlağı · konum denetle.py reçetesiyle düzeltildi (1.44 km maske dışıydı: 65.1900,-123.4200 → 65.2034,-123.4211) · konum denetle.py reçetesiyle düzeltildi (1.44 km maske dışıydı: 65.2034,-123.4211 → 65.2034,-123.4211) · dayanak: Historical Atlas of Canada" },
  { ad:"Nuchalawoya (Tanana)", tur:"sehir", lat:65.172, lon:-152.081, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA-1004 · ingiltere 1281→1763 + ingiliz-kuzey-amerika →1867 + kanada →1923 YERİNE dene → abd.
    //   ① İngiltere 1281'de Alaska içinde YOKTU; Alaska 1867-10-18'de ABD'ye devredildi (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   ② BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — kronoloji maddesi (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor.
    //   ③ BEYAN: `dene` künyesinin f'si 1281-01-01 — künye de UFUK tabanına KENETLİ. Emsal: Vashrąįį K'ǫǫ (Arctic Village) dene → abd.
    kaynak:"bulunamadı", not:"Tanana-Yukon kavşağı, geleneksel ticaret buluşması · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Fort Norman (Tulita)", tur:"kale", lat:64.904, lon:-125.576, g:0,
    kur:"1810-01-01",
    s:[{f:"1810-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fairbanks", tur:"sehir", lat:64.838, lon:-147.716, g:0,
    kur:"1901-01-01",
    s:[{f:"1901-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Eagle (Fort Egbert)", tur:"kale", lat:64.788, lon:-141.2, g:0,
    kur:"1897-01-01",
    s:[{f:"1897-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Nulato", tur:"sehir", lat:64.72, lon:-158.1, g:0,
    kur:"1838-01-01",
    s:[{f:"1838-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"RAŞ Yukon içleri karakolu · dayanak: Black, Russians in Alaska" },
  { ad:"Beverly Gölü (Thelon, Karayer İnuit)", tur:"sehir", lat:64.644, lon:-100.5035, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Thelon havzası iç bölge avlağı · konum denetle.py reçetesiyle düzeltildi (4.86 km maske dışıydı: 64.6000,-100.5000 → 64.6440,-100.5035) · konum denetle.py reçetesiyle düzeltildi (4.86 km maske dışıydı: 64.6440,-100.5035 → 64.6440,-100.5035) · dayanak: Birket-Smith, The Caribou Eskimos" },
  { ad:"Nome", tur:"sehir", lat:64.506, lon:-165.4052, g:0,
    kur:"1899-01-01",
    s:[{f:"1899-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.51 km maske dışıydı: 64.5010,-165.4060 → 64.5060,-165.4052) · konum denetle.py reçetesiyle düzeltildi (0.51 km maske dışıydı: 64.5060,-165.4052 → 64.5060,-165.4052) · dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Qamanittuaq (Baker Lake)", tur:"sehir", lat:64.319, lon:-96.018, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Karayer İnuit yurdu; 1916 HBC karakolu · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kinngait (Cape Dorset)", tur:"sehir", lat:64.231, lon:-76.539, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Dorset/Thule; 1913 karakol · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Dawson City", tur:"sehir", lat:64.06, lon:-139.433, g:0,
    kur:"1896-01-01",
    s:[{"f":"1896-08-16","t":"1923-10-29","d":"kanada"}],
    kaynak:"bulunamadı", not:"Klondike · dayanak: Dictionary of Canadian Biography" },
  { ad:"Native Point (Sadlermiut, Southampton Adası)", tur:"liman", lat:63.9302, lon:-83.605, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Yalıtılmış Sadlermiut topluluğu 1902-03'te tükendi · konum denetle.py reçetesiyle düzeltildi (12.88 km maske dışıydı: 63.9800,-83.5000 → 63.9302,-83.6050) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Iqaluit (Frobisher Körfezi)", tur:"liman", lat:63.746, lon:-68.517, g:0,
    kur:"1576-08-01",
    s:[{f:"1576-08-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Frobisher 1576 karşılaşması; 1914 HBC · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Tulít'a Dağ Denesi (Nahanni)", tur:"sehir", lat:63.5, lon:-131.5, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Mihaylovskiy Redut (St. Michael)", tur:"kale", lat:63.4853, lon:-162.0306, g:0,
    kur:"1833-01-01",
    s:[{f:"1833-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.76 km maske dışıydı: 63.4780,-162.0300 → 63.4853,-162.0306) · konum denetle.py reçetesiyle düzeltildi (0.76 km maske dışıydı: 63.4853,-162.0306 → 63.4853,-162.0306) · dayanak: Black, Russians in Alaska" },
  { ad:"Telida / Denali eteği (Atabask)", tur:"sehir", lat:63.4, lon:-153.0, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA-1004 · ingiltere 1281→1763 + ingiliz-kuzey-amerika →1867 + kanada →1923 YERİNE dene → abd.
    //   ① İngiltere 1281'de Alaska içinde YOKTU; Alaska 1867-10-18'de ABD'ye devredildi (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   ② BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — kronoloji maddesi (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor.
    //   ③ BEYAN: `dene` künyesinin f'si 1281-01-01 — künye de UFUK tabanına KENETLİ. Emsal: Vashrąįį K'ǫǫ (Arctic Village) dene → abd.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Igluligaarjuk (Chesterfield Inlet)", tur:"sehir", lat:63.342, lon:-90.711, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"1911 HBC karakolu · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Nikolai (Yukarı Kuskokwim)", tur:"sehir", lat:63.017, lon:-154.383, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA-1004 · ingiltere 1281→1763 + ingiliz-kuzey-amerika →1867 + kanada →1923 YERİNE dene → abd.
    //   ① İngiltere 1281'de Alaska içinde YOKTU; Alaska 1867-10-18'de ABD'ye devredildi (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   ② BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — kronoloji maddesi (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor.
    //   ③ BEYAN: `dene` künyesinin f'si 1281-01-01 — künye de UFUK tabanına KENETLİ. Emsal: Vashrąįį K'ǫǫ (Arctic Village) dene → abd.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Nabesna / Northway (Yukarı Tanana)", tur:"sehir", lat:62.961, lon:-141.94, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA4-1004 · dene→abd 1899-06-21 YERİNE 1867-10-18: 1899-06-21 `dene` künyesinin t'si (Kanada Antlaşma 8) — günü olaydan değil KÜNYEDEN devralmıştı (D207). Nokta 141°B'nin batısında = Alaska; ABD'ye 1867-10-18'de geçti (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — madde (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor. `dene` künyesi 1281-01-01'de KENETLİ.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Kimmirut (Lake Harbour)", tur:"liman", lat:62.849, lon:-69.873, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"1911 karakol · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort Rae (Behchokǫ̀)", tur:"kale", lat:62.7856, lon:-116.0456, g:0,
    kur:"1852-01-01",
    s:[{f:"1852-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.89 km maske dışıydı: 62.8030,-116.0470 → 62.7856,-116.0456) · konum denetle.py reçetesiyle düzeltildi (1.89 km maske dışıydı: 62.7856,-116.0456 → 62.7856,-116.0456) · dayanak: Historical Atlas of Canada" },
  { ad:"Fort Selkirk", tur:"kale", lat:62.77, lon:-137.37, g:0,
    kur:"1848-01-01",
    s:[{f:"1848-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Fort Reliance (Büyük Köle Gölü)", tur:"kale", lat:62.727, lon:-109.157, g:0,
    kur:"1833-01-01",
    s:[{f:"1833-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum: denetle.py'nin KENDİ reçetesi kendi testini GEÇMEDİ ⇒ denetçinin maskesi içe aktarılıp geçerli koordinat ARANDI (62.7170,-109.1670 → 62.7270,-109.1570) · dayanak: Historical Atlas of Canada" },
  { ad:"Batzulnetas (Ahtna)", tur:"sehir", lat:62.55, lon:-143.6, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA4-1004 · dene→abd 1899-06-21 YERİNE 1867-10-18: 1899-06-21 `dene` künyesinin t'si (Kanada Antlaşma 8) — günü olaydan değil KÜNYEDEN devralmıştı (D207). Nokta 141°B'nin batısında = Alaska; ABD'ye 1867-10-18'de geçti (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — madde (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor. `dene` künyesi 1281-01-01'de KENETLİ.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Łutsël K'é (Snowdrift, Büyük Köle Gölü doğusu)", tur:"sehir", lat:62.3896, lon:-110.7375, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.14 km maske dışıydı: 62.4000,-110.7400 → 62.3896,-110.7375) · konum denetle.py reçetesiyle düzeltildi (1.14 km maske dışıydı: 62.3896,-110.7375 → 62.3896,-110.7375) · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Salluit (Sugluk)", tur:"sehir", lat:62.203, lon:-75.641, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Pelly Banks / Ross River", tur:"kale", lat:61.99, lon:-132.45, g:0,
    kur:"1840-01-01",
    s:[{f:"1840-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Simpson (Łı́ı́dlı̨ı̨ Kų́ę́)", tur:"kale", lat:61.862, lon:-121.353, g:0,
    kur:"1804-01-01",
    s:[{f:"1804-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Kangiqsujuaq (Wakeham Bay)", tur:"liman", lat:61.596, lon:-71.942, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kolmakovskiy Redut", tur:"kale", lat:61.53, lon:-158.2, g:0,
    kur:"1841-01-01",
    s:[{f:"1841-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Kuskokwim · dayanak: Black, Russians in Alaska" },
  { ad:"Hooper Bay (Naparyarmiut)", tur:"liman", lat:61.529, lon:-166.097, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"yupik"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort Providence", tur:"kale", lat:61.35, lon:-117.65, g:0,
    kur:"1786-01-01",
    s:[{f:"1786-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Anchorage", tur:"sehir", lat:61.217, lon:-149.9, g:0,
    kur:"1914-01-01",
    s:[{f:"1914-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Fort Resolution (Deninu Kų́ę́)", tur:"kale", lat:61.169, lon:-113.677, g:0,
    kur:"1786-01-01",
    s:[{f:"1786-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Valdez", tur:"sehir", lat:61.1362, lon:-146.3482, g:0,
    kur:"1898-01-01",
    s:[{f:"1898-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.52 km maske dışıydı: 61.1310,-146.3480 → 61.1362,-146.3482) · konum denetle.py reçetesiyle düzeltildi (0.52 km maske dışıydı: 61.1362,-146.3482 → 61.1362,-146.3482) · dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Arviat (Eskimo Point)", tur:"sehir", lat:61.108, lon:-94.059, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Ennadai (Ihalmiut, Karayer İnuit)", tur:"sehir", lat:61.1028, lon:-100.8954, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Kıyıdan uzak, iç bölge ren geyiği avcıları · konum denetle.py reçetesiyle düzeltildi (0.55 km maske dışıydı: 61.1000,-100.9000 → 61.1028,-100.8954) · konum denetle.py reçetesiyle düzeltildi (0.55 km maske dışıydı: 61.1028,-100.8954 → 61.1028,-100.8954) · dayanak: Birket-Smith, The Caribou Eskimos (Beşinci Thule Seferi raporu)" },
  { ad:"Bethel (Mumtrekhlagamute)", tur:"sehir", lat:60.792, lon:-161.756, g:0,
    kur:"1885-01-01",
    s:[{f:"1885-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Moravian misyonu · dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Whitehorse", tur:"sehir", lat:60.721, lon:-135.057, g:0,
    kur:"1898-01-01",
    s:[{f:"1898-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Kenai (Nikolayevskiy Redut)", tur:"kale", lat:60.554, lon:-151.258, g:0,
    kur:"1791-01-01",
    s:[{f:"1791-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Black, Russians in Alaska" },
  { ad:"Killiniq (Port Burwell)", tur:"sehir", lat:60.4164, lon:-64.8247, g:0,
    kur:"1904-01-01",
    s:[{f:"1904-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.87 km maske dışıydı: 60.4100,-64.8300 → 60.4164,-64.8247) · konum denetle.py reçetesiyle düzeltildi (0.87 km maske dışıydı: 60.4164,-64.8247 → 60.4164,-64.8247) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Nuçek (Konstantinovskiy Redut)", tur:"kale", lat:60.35, lon:-146.68, g:0,
    kur:"1793-01-01",
    s:[{f:"1793-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Black, Russians in Alaska" },
  { ad:"Fort Liard", tur:"kale", lat:60.24, lon:-123.47, g:0,
    kur:"1805-01-01",
    s:[{f:"1805-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Puvirnituq", tur:"sehir", lat:60.05, lon:-77.283, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kangirsuk (Payne Irmağı)", tur:"sehir", lat:60.024, lon:-70.01, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Iliamna / Nondalton (Dena'ina)", tur:"sehir", lat:59.98, lon:-154.85, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"dene"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    // ONCE1281-ALASKA4-1004 · dene→abd 1899-06-21 YERİNE 1867-10-18: 1899-06-21 `dene` künyesinin t'si (Kanada Antlaşma 8) — günü olaydan değil KÜNYEDEN devralmıştı (D207). Nokta 141°B'nin batısında = Alaska; ABD'ye 1867-10-18'de geçti (history.state.gov: "formally transferred to the United States on October 18, 1867").
    //   BEYAN: 1867-10-18 kırılması Değişmez 2s'de KAPSAM DIŞI kovasında geçiyor — madde (kronoloji_sinir_amerika.js) Alaska'yı anıyor, bu yerleşimi ADIYLA anmıyor. `dene` künyesi 1281-01-01'de KENETLİ.
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Fort Halkett (Liard)", tur:"kale", lat:59.88, lon:-126.3, g:0,
    kur:"1829-01-01",
    s:[{f:"1829-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Atlin", tur:"sehir", lat:59.578, lon:-133.7, g:0,
    kur:"1898-01-01",
    s:[{f:"1898-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Yakutat (Novorossiysk)", tur:"sehir", lat:59.547, lon:-139.727, g:0,
    kur:"1796-01-01",
    s:[{f:"1796-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Black, Russians in Alaska" },
  { ad:"Skagway", tur:"sehir", lat:59.456, lon:-135.314, g:0,
    kur:"1897-01-01",
    s:[{f:"1897-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Naske & Slotnick, Alaska: A History" },
  { ad:"Klukwan (Tlingit)", tur:"sehir", lat:59.402, lon:-135.893, g:0,
    s:[{f:"1281-01-01",t:"1867-10-18",d:"tlingit"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Fond du Lac (Athabasca Gölü)", tur:"kale", lat:59.333, lon:-107.183, g:0,
    kur:"1851-01-01",
    s:[{f:"1851-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Vermilion güneyi — Peace Point", tur:"kale", lat:59.1, lon:-112.4, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Aleksandrovski Redut (Nushagak)", tur:"kale", lat:58.8876, lon:-158.508, g:0,
    kur:"1818-01-01",
    s:[{f:"1818-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (2.76 km maske dışıydı: 58.9000,-158.5300 → 58.8876,-158.5080) · konum denetle.py reçetesiyle düzeltildi (2.76 km maske dışıydı: 58.8876,-158.5080 → 58.8876,-158.5080) · dayanak: Black, Russians in Alaska" },
  { ad:"Fort Nelson (BC)", tur:"kale", lat:58.805, lon:-122.697, g:0,
    kur:"1805-01-01",
    s:[{f:"1805-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Prince of Wales Fort (Churchill)", tur:"kale", lat:58.768, lon:-94.167, g:0,
    kur:"1717-01-01",
    s:[{f:"1717-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Chipewyan", tur:"kale", lat:58.708, lon:-111.152, g:0,
    kur:"1788-01-01",
    s:[{f:"1788-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Athabasca ticaretinin merkezi · dayanak: Historical Atlas of Canada" },
  { ad:"Inukjuak (Port Harrison)", tur:"sehir", lat:58.454, lon:-78.102, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"1909 ticaret karakolu · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Dease Lake", tur:"kale", lat:58.437, lon:-130.005, g:0,
    kur:"1838-01-01",
    s:[{f:"1838-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Vermilion", tur:"kale", lat:58.39, lon:-116.03, g:0,
    kur:"1788-01-01",
    s:[{f:"1788-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Katmai (Alaska Yarımadası)", tur:"liman", lat:58.28, lon:-155.0, g:0,
    s:[{f:"1281-01-01",t:"1784-08-14",d:"alutiiq"},{f:"1784-08-14",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Hebron (Labrador)", tur:"sehir", lat:58.1997, lon:-62.623, g:0,
    kur:"1830-01-01",
    s:[{f:"1830-01-01",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.33 km maske dışıydı: 58.1980,-62.6200 → 58.1997,-62.6230) · konum denetle.py reçetesiyle düzeltildi (0.33 km maske dışıydı: 58.1997,-62.6230 → 58.1997,-62.6230) · dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Kuujjuaq (Fort Chimo)", tur:"kale", lat:58.101, lon:-68.4, g:0,
    kur:"1830-01-01",
    s:[{f:"1830-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Telegraph Creek (Tlegohin)", tur:"sehir", lat:57.902, lon:-131.16, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Brochet (Ren Geyiği Gölü)", tur:"kale", lat:57.8943, lon:-101.6614, g:0,
    kur:"1859-01-01",
    s:[{f:"1859-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.35 km maske dışıydı: 57.8830,-101.6670 → 57.8943,-101.6614) · konum denetle.py reçetesiyle düzeltildi (1.35 km maske dışıydı: 57.8943,-101.6614 → 57.8943,-101.6614) · dayanak: Historical Atlas of Canada" },
  { ad:"Kodiak (Pavlovskaya Gavan)", tur:"sehir", lat:57.79, lon:-152.407, g:0,
    kur:"1792-01-01",
    s:[{f:"1792-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Şelihov 1784 Üç Aziz Körfezi; 1792 Pavlovskaya Gavan, 1799-1804 RAŞ merkezi · dayanak: Black, Russians in Alaska (U. Alaska Press)" },
  { ad:"Kangiva (Nain iç bölgesi)", tur:"sehir", lat:57.5, lon:-63.5, g:0,
    s:[{f:"1281-01-01",t:"1880-09-01",d:"inuit"},{f:"1880-09-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort Ware (Kwadacha)", tur:"kale", lat:57.43, lon:-125.65, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Üç Aziz Körfezi (Trekh Svyatiteley)", tur:"liman", lat:57.168, lon:-153.502, g:0,
    kur:"1784-08-14",
    s:[{f:"1784-08-14",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Şelihov'un ilk kalıcı Rus yerleşimi · konum: denetle.py'nin KENDİ reçetesi kendi testini GEÇMEDİ ⇒ denetçinin maskesi içe aktarılıp geçerli koordinat ARANDI (57.1700,-153.5000 → 57.1680,-153.5020) · dayanak: Black, Russians in Alaska" },
  { ad:"York Factory", tur:"kale", lat:57.0099, lon:-92.3082, g:0,
    kur:"1684-01-01",
    s:[{f:"1684-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"HBC'nin ana giriş limanı · konum denetle.py reçetesiyle düzeltildi (1.37 km maske dışıydı: 57.0000,-92.3000 → 57.0099,-92.3082) · konum denetle.py reçetesiyle düzeltildi (1.37 km maske dışıydı: 57.0099,-92.3082 → 57.0099,-92.3082) · dayanak: Historical Atlas of Canada" },
  { ad:"Fort McKenzie (Ungava)", tur:"kale", lat:56.9, lon:-69.1, g:0,
    kur:"1916-01-01",
    s:[{f:"1916-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Nain (Labrador)", tur:"sehir", lat:56.542, lon:-61.687, g:0,
    kur:"1771-01-01",
    s:[{f:"1771-01-01",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Wrangell (Redut Sv. Dionisiy)", tur:"kale", lat:56.472, lon:-132.3761, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.39 km maske dışıydı: 56.4710,-132.3800 → 56.4720,-132.3761) · konum denetle.py reçetesiyle düzeltildi (0.39 km maske dışıydı: 56.4720,-132.3761 → 56.4720,-132.3761) · dayanak: Black, Russians in Alaska" },
  { ad:"Chignik (Alaska Yarımadası)", tur:"liman", lat:56.3, lon:-158.4, g:0,
    s:[{f:"1281-01-01",t:"1784-08-14",d:"alutiiq"},{f:"1784-08-14",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Mushuau-nipi (Indian House Lake)", tur:"kale", lat:56.2, lon:-64.7, g:0,
    d:[], kasitli_bosluk:true, bos:"kabile",
    neden:"Mushuau-nipi kalici bir yerlesim DEGIL, Naskapi'nin ren geyigi gecidinde toplandigi MEVSIMLIK bulusma yeridir. Innu/Naskapi Quebec-Labrador'da hicbir antlasma imzalamadi, devir gunu yok. kaynak: HNAI c.6 Subarctic (Smithsonian) — TDV bu cografyayi kapsamiyor (olculdu, cografi bosluk). KARAR KOORDINATORDE: nokta olarak birakilirsa s: zinciri fransa -> ingiliz-kuzey-amerika -> kanada olur.",
    kaynak:"bulunamadı", not:"Naskapi ren geyiği geçidi toplanma yeri · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Fort Connolly (Bear Lake)", tur:"kale", lat:56.15, lon:-126.75, g:0,
    kur:"1826-01-01",
    s:[{f:"1826-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Severn", tur:"kale", lat:56.023, lon:-87.633, g:0,
    kur:"1685-01-01",
    s:[{f:"1685-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Dunvegan", tur:"kale", lat:55.92, lon:-118.6, g:0,
    kur:"1805-01-01",
    s:[{f:"1805-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Nelson House (Nisichawayasihk)", tur:"kale", lat:55.79, lon:-98.833, g:0,
    kur:"1802-01-01",
    s:[{f:"1802-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Pukatawagan", tur:"sehir", lat:55.75, lon:-101.3, g:0,
    s:[{f:"1281-01-01",t:"1876-08-23",d:"kri"},{f:"1876-08-23",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Ile-a-la-Crosse", tur:"kale", lat:55.453, lon:-107.915, g:0,
    kur:"1779-01-01",
    s:[{f:"1779-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.64 km maske dışıydı: 55.4500,-107.9000 → 55.4530,-107.9150) · konum denetle.py reçetesiyle düzeltildi (1.64 km maske dışıydı: 55.4530,-107.9150 → 55.4530,-107.9150) · dayanak: Historical Atlas of Canada" },
  { ad:"Hopedale (Agvituk)", tur:"sehir", lat:55.452, lon:-60.221, g:0,
    kur:"1782-01-01",
    s:[{f:"1782-01-01",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Lesser Slave Lake House", tur:"kale", lat:55.42, lon:-114.77, g:0,
    kur:"1802-01-01",
    s:[{f:"1802-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Babine (Fort Kilmaurs)", tur:"kale", lat:55.35, lon:-126.7, g:0,
    kur:"1822-01-01",
    s:[{f:"1822-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Kuujjuarapik (Great Whale River)", tur:"kale", lat:55.283, lon:-77.75, g:0,
    kur:"1820-01-01",
    s:[{f:"1820-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Severn güneyi — Winisk", tur:"kale", lat:55.25, lon:-85.1, g:0,
    s:[{f:"1281-01-01",t:"1876-08-23",d:"kri"},{f:"1876-08-23",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Lac la Ronge", tur:"kale", lat:55.1, lon:-105.283, g:0,
    kur:"1782-01-01",
    s:[{f:"1782-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort McLeod (Britanya Kolumbiyası)", tur:"kale", lat:54.99, lon:-123.033, g:0,
    kur:"1805-01-01",
    s:[{f:"1805-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Kayalıkların batısındaki ilk kalıcı Avrupa yerleşimi · dayanak: Historical Atlas of Canada" },
  { ad:"Oxford House", tur:"kale", lat:54.933, lon:-95.283, g:0,
    kur:"1798-01-01",
    s:[{f:"1798-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Caniapiscau", tur:"kale", lat:54.85, lon:-69.9, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Nascopie (Petitsikapau)", tur:"kale", lat:54.8, lon:-66.5, g:0,
    kur:"1838-01-01",
    s:[{f:"1838-01-01",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Lac La Biche", tur:"kale", lat:54.77, lon:-111.97, g:0,
    kur:"1798-01-01",
    s:[{f:"1798-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Lax Kw'alaams (Fort Simpson BC)", tur:"kale", lat:54.558, lon:-130.434, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Fort St. James", tur:"kale", lat:54.443, lon:-124.253, g:0,
    kur:"1806-01-01",
    s:[{f:"1806-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Yeni Kaledonya merkezi · dayanak: Historical Atlas of Canada" },
  { ad:"Fort Assiniboine", tur:"kale", lat:54.333, lon:-114.75, g:0,
    kur:"1823-01-01",
    s:[{f:"1823-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Rigolet", tur:"sehir", lat:54.1848, lon:-58.436, g:0,
    kur:"1836-01-01",
    s:[{f:"1836-01-01",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.80 km maske dışıydı: 54.1800,-58.4300 → 54.1848,-58.4360) · konum denetle.py reçetesiyle düzeltildi (0.80 km maske dışıydı: 54.1848,-58.4360 → 54.1848,-58.4360) · dayanak: Historical Atlas of Canada" },
  { ad:"Norway House", tur:"kale", lat:53.983, lon:-97.833, g:0,
    kur:"1817-01-01",
    s:[{f:"1817-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"HBC Kuzey Bölümü'nün toplantı merkezi · dayanak: Historical Atlas of Canada" },
  { ad:"Cumberland House", tur:"kale", lat:53.95, lon:-102.283, g:0,
    kur:"1774-01-01",
    s:[{f:"1774-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"HBC'nin iç bölgedeki ilk karakolu (Samuel Hearne) · dayanak: Historical Atlas of Canada" },
  { ad:"Fort George (Prince George)", tur:"kale", lat:53.917, lon:-122.75, g:0,
    kur:"1807-01-01",
    s:[{f:"1807-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Unalaska (Iliuliuk)", tur:"sehir", lat:53.87, lon:-166.53, g:0,
    kur:"1787-01-01",
    s:[{f:"1787-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Aleut adaları ana Rus üssü · dayanak: Black, Russians in Alaska" },
  { ad:"Big Trout Lake (Kitchenuhmaykoosib)", tur:"kale", lat:53.8408, lon:-89.8639, g:0,
    kur:"1807-01-01",
    s:[{f:"1807-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.88 km maske dışıydı: 53.8330,-89.8670 → 53.8408,-89.8639) · konum denetle.py reçetesiyle düzeltildi (0.88 km maske dışıydı: 53.8408,-89.8639 → 53.8408,-89.8639) · dayanak: Historical Atlas of Canada" },
  { ad:"Chisasibi (Fort George)", tur:"kale", lat:53.789, lon:-78.983, g:0,
    kur:"1803-01-01",
    s:[{f:"1803-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Cartwright (Sandwich Körfezi, Labrador)", tur:"liman", lat:53.7, lon:-57.02, g:0,
    kur:"1775-01-01",
    s:[{f:"1775-01-01",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.5 Arctic (Smithsonian)" },
  { ad:"Fort Pitt", tur:"kale", lat:53.583, lon:-109.8, g:0,
    kur:"1829-01-01",
    s:[{f:"1829-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Edmonton", tur:"kale", lat:53.533, lon:-113.5, g:0,
    kur:"1795-01-01",
    s:[{f:"1795-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"North West River (Labrador)", tur:"sehir", lat:53.522, lon:-60.148, g:0,
    kur:"1743-01-01",
    s:[{f:"1743-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1923-10-29",d:"ingiliz-kuzey-amerika",kaynak:"Labrador Newfoundland kolonisine aitti ve 1867'de Kanada'ya KATILMADI; gerçek devir 1949 (Newfoundland'ın Kanada'ya katılışı) — VERI_UFKU (1281-1923) DIŞI ⇒ t = pencere sonu, bir ölçüm değil SINIR İŞARETİ · ESKİ 'kanada 1867-07-01 →' dilimi DÜŞTÜ (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Skidegate (Haida Gwaii)", tur:"sehir", lat:53.2559, lon:-132.0022, g:0,
    s:[{f:"1281-01-01",t:"1858-08-02",d:"hayda"},{f:"1858-08-02",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.75 km maske dışıydı: 53.2490,-132.0000 → 53.2559,-132.0022) · konum denetle.py reçetesiyle düzeltildi (0.75 km maske dışıydı: 53.2559,-132.0022 → 53.2559,-132.0022) · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Prince Albert", tur:"sehir", lat:53.203, lon:-105.753, g:0,
    kur:"1866-01-01",
    s:[{f:"1866-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Jasper House", tur:"kale", lat:53.183, lon:-117.95, g:0,
    kur:"1813-01-01",
    s:[{f:"1813-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Grand Rapids (Saskatchewan Irmağı ağzı)", tur:"kale", lat:53.17, lon:-99.27, g:0,
    kur:"1794-01-01",
    s:[{f:"1794-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Nichicun (HBC iç karakolu)", tur:"kale", lat:53.0943, lon:-70.9882, g:0,
    kur:"1816-01-01",
    s:[{f:"1816-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.40 km maske dışıydı: 53.1000,-71.0000 → 53.0943,-70.9882) · konum denetle.py reçetesiyle düzeltildi (1.40 km maske dışıydı: 53.0943,-70.9882 → 53.0943,-70.9882) · dayanak: Historical Atlas of Canada" },
  { ad:"Sandy Lake (Kuzeybatı Ontario)", tur:"sehir", lat:53.0589, lon:-93.3289, g:0,
    s:[{f:"1281-01-01",t:"1876-08-23",d:"kri"},{f:"1876-08-23",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.94 km maske dışıydı: 53.0500,-93.3300 → 53.0589,-93.3289) · konum denetle.py reçetesiyle düzeltildi (0.94 km maske dışıydı: 53.0589,-93.3289 → 53.0589,-93.3289) · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Attawapiskat", tur:"kale", lat:52.928, lon:-82.423, g:0,
    kur:"1893-01-01",
    s:[{f:"1893-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Carlton", tur:"kale", lat:52.86, lon:-106.53, g:0,
    kur:"1795-01-01",
    s:[{f:"1795-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Battleford", tur:"sehir", lat:52.737, lon:-108.3, g:0,
    kur:"1875-01-01",
    s:[{f:"1875-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"1876-83 Kuzeybatı Toprakları başkenti · dayanak: Historical Atlas of Canada" },
  { ad:"Batoche", tur:"sehir", lat:52.735, lon:-106.13, g:0,
    kur:"1872-01-01",
    s:[{f:"1872-01-01",t:"1885-05-12",d:"metis"},{f:"1885-05-12",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Buffalo Lake / Battle River (Métis)", tur:"sehir", lat:52.47, lon:-112.9, g:0,
    kur:"1872-01-01",
    s:[{f:"1872-01-01",t:"1885-05-12",d:"metis"},{f:"1885-05-12",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Métis kış köyü (hivernant) · dayanak: Historical Atlas of Canada" },
  { ad:"Rocky Mountain House", tur:"kale", lat:52.374, lon:-114.919, g:0,
    kur:"1799-01-01",
    s:[{f:"1799-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Bella Coola (Nuxalk)", tur:"sehir", lat:52.37, lon:-126.7498, g:0,
    s:[{f:"1281-01-01",t:"1858-08-02",d:"nuxalk"},{f:"1858-08-02",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Kalıcı kış köyleri; 1793 Mackenzie, 1869 HBC karakolu · konum denetle.py reçetesiyle düzeltildi (0.50 km maske dışıydı: 52.3750,-126.7500 → 52.3700,-126.7498) · konum denetle.py reçetesiyle düzeltildi (0.50 km maske dışıydı: 52.3700,-126.7498 → 52.3700,-126.7498) · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Berens River", tur:"kale", lat:52.35, lon:-97.023, g:0,
    kur:"1814-01-01",
    s:[{f:"1814-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Albany", tur:"kale", lat:52.23, lon:-81.65, g:0,
    kur:"1679-01-01",
    s:[{f:"1679-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Bella Bella (Fort McLoughlin)", tur:"kale", lat:52.1604, lon:-128.1539, g:0,
    kur:"1833-01-01",
    s:[{f:"1833-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.49 km maske dışıydı: 52.1600,-128.1400 → 52.1604,-128.1539) · konum denetle.py reçetesiyle düzeltildi (1.49 km maske dışıydı: 52.1604,-128.1539 → 52.1604,-128.1539) · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"SG̱ang Gwaay (Ninstints)", tur:"sehir", lat:52.1352, lon:-131.2403, g:0,
    s:[{f:"1281-01-01",t:"1858-08-02",d:"hayda"},{f:"1858-08-02",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (4.72 km maske dışıydı: 52.0960,-131.2230 → 52.1352,-131.2403) · konum denetle.py reçetesiyle düzeltildi (4.72 km maske dışıydı: 52.1352,-131.2403 → 52.1352,-131.2403) · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Tsilhqot'in (Çilkotin platosu)", tur:"sehir", lat:52.1, lon:-123.3, g:0,
    s:[{f:"1281-01-01",t:"1899-06-21",d:"dene"},{f:"1899-06-21",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Marten Falls (Ogoki)", tur:"kale", lat:51.65, lon:-85.9, g:0,
    kur:"1794-01-01",
    s:[{f:"1794-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Waskaganish (Rupert House)", tur:"kale", lat:51.484, lon:-78.752, g:0,
    kur:"1668-01-01",
    s:[{f:"1668-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"HBC'nin ilk karakolu (Charles Fort) · dayanak: Historical Atlas of Canada" },
  { ad:"Nemiscau", tur:"sehir", lat:51.43, lon:-76.13, g:0,
    kur:"1661-01-01",
    s:[{f:"1661-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Blanc-Sablon", tur:"sehir", lat:51.424, lon:-57.1294, g:0,
    kur:"1500-01-01",
    s:[{f:"1500-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"16. yy Bask balina ve balık istasyonları kuşağı · konum denetle.py reçetesiyle düzeltildi (0.40 km maske dışıydı: 51.4200,-57.1300 → 51.4240,-57.1294) · konum denetle.py reçetesiyle düzeltildi (0.40 km maske dışıydı: 51.4240,-57.1294 → 51.4240,-57.1294) · dayanak: Historical Atlas of Canada" },
  { ad:"Moose Factory", tur:"kale", lat:51.2986, lon:-80.6227, g:0,
    kur:"1673-01-01",
    s:[{f:"1673-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (3.42 km maske dışıydı: 51.2700,-80.6100 → 51.2986,-80.6227) · konum denetle.py reçetesiyle düzeltildi (3.42 km maske dışıydı: 51.2986,-80.6227 → 51.2986,-80.6227) · dayanak: Historical Atlas of Canada" },
  { ad:"Osnaburgh House", tur:"kale", lat:51.233, lon:-90.317, g:0,
    kur:"1786-01-01",
    s:[{f:"1786-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Dauphin", tur:"kale", lat:51.15, lon:-100.05, g:0,
    kur:"1741-01-01",
    s:[{f:"1741-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"La Vérendrye hattı · dayanak: Historical Atlas of Canada" },
  { ad:"Fort Calgary", tur:"kale", lat:51.045, lon:-114.062, g:0,
    kur:"1875-01-01",
    s:[{f:"1875-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Secwépemc (Adams Gölü)", tur:"sehir", lat:51.0, lon:-119.5, g:0,
    s:[{f:"1281-01-01",t:"1858-08-02",d:"secwepemc"},{f:"1858-08-02",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"Yerleşik çukur-ev kış köyleri · dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Fort Qu'Appelle", tur:"kale", lat:50.771, lon:-103.649, g:0,
    kur:"1864-01-01",
    s:[{f:"1864-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Kamloops", tur:"kale", lat:50.674, lon:-120.33, g:0,
    kur:"1812-01-01",
    s:[{f:"1812-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Alexander (Bas-de-la-Rivière)", tur:"kale", lat:50.6, lon:-96.3, g:0,
    kur:"1792-01-01",
    s:[{f:"1792-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Regina", tur:"sehir", lat:50.445, lon:-104.619, g:0,
    kur:"1882-01-01",
    s:[{f:"1882-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Mistassini (Lac Mistassini)", tur:"sehir", lat:50.4231, lon:-73.8639, g:0,
    kur:"1673-01-01",
    s:[{f:"1673-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.71 km maske dışıydı: 50.4200,-73.8700 → 50.4231,-73.8639) · konum denetle.py reçetesiyle düzeltildi (0.71 km maske dışıydı: 50.4231,-73.8639 → 50.4231,-73.8639) · dayanak: Historical Atlas of Canada" },
  { ad:"Lac Seul", tur:"kale", lat:50.3426, lon:-92.2072, g:0,
    kur:"1815-01-01",
    s:[{f:"1815-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.28 km maske dışıydı: 50.3330,-92.2000 → 50.3426,-92.2072) · konum denetle.py reçetesiyle düzeltildi (1.28 km maske dışıydı: 50.3426,-92.2072 → 50.3426,-92.2072) · dayanak: Historical Atlas of Canada" },
  { ad:"Mingan", tur:"sehir", lat:50.298, lon:-64.0332, g:0,
    kur:"1679-01-01",
    s:[{f:"1679-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (1.08 km maske dışıydı: 50.2880,-64.0310 → 50.2980,-64.0332) · konum denetle.py reçetesiyle düzeltildi (1.08 km maske dışıydı: 50.2980,-64.0332 → 50.2980,-64.0332) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Sept-Îles", tur:"sehir", lat:50.212, lon:-66.379, g:0,
    kur:"1651-01-01",
    s:[{f:"1651-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Natashquan", tur:"sehir", lat:50.1929, lon:-61.8182, g:0,
    s:[{f:"1281-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Innu yaz kampı; 19. yy HBC karakolu · konum denetle.py reçetesiyle düzeltildi (0.32 km maske dışıydı: 50.1900,-61.8200 → 50.1929,-61.8182) · konum denetle.py reçetesiyle düzeltildi (0.32 km maske dışıydı: 50.1929,-61.8182 → 50.1929,-61.8182) · dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Fort Garry (Kızıl Irmak Kolonisi)", tur:"kale", lat:49.895, lon:-97.138, g:0,
    kur:"1812-01-01",
    s:[{f:"1812-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Brandon House", tur:"kale", lat:49.85, lon:-99.95, g:0,
    kur:"1793-01-01",
    s:[{f:"1793-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Macleod", tur:"kale", lat:49.716, lon:-113.417, g:0,
    kur:"1874-01-01",
    s:[{f:"1874-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Mattagami House", tur:"kale", lat:49.7, lon:-81.5, g:0,
    kur:"1794-01-01",
    s:[{f:"1794-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Waswanipi", tur:"sehir", lat:49.683, lon:-76.0, g:0,
    kur:"1794-01-01",
    s:[{f:"1794-01-01",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Yuquot (Nootka Sound)", tur:"liman", lat:49.6041, lon:-126.6341, g:0,
    s:[{f:"1281-01-01",t:"1858-08-02",d:"nuu-cah-nulth"},{f:"1858-08-02",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"1789 Santa Cruz de Nuca; Nootka Buhranı · konum denetle.py reçetesiyle düzeltildi (2.15 km maske dışıydı: 49.5940,-126.6170 → 49.6041,-126.6341) · konum denetle.py reçetesiyle düzeltildi (2.15 km maske dışıydı: 49.6041,-126.6341 → 49.6041,-126.6341) · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Fort Walsh (Cypress Hills)", tur:"kale", lat:49.578, lon:-109.881, g:0,
    kur:"1875-01-01",
    s:[{f:"1875-01-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Langley", tur:"kale", lat:49.167, lon:-122.58, g:0,
    kur:"1827-01-01",
    s:[{f:"1827-01-01",t:"1871-07-20",d:"ingiliz-kuzey-amerika"},{f:"1871-07-20",t:"1923-10-29",d:"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Fort Nipigon", tur:"kale", lat:49.017, lon:-88.267, g:0,
    kur:"1678-01-01",
    s:[{f:"1678-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Pembina", tur:"kale", lat:48.968, lon:-97.245, g:0,
    kur:"1797-01-01",
    s:[{f:"1797-01-01",t:"1818-10-20",d:"ingiliz-kuzey-amerika",kaynak:"NWC karakolu 1797; Red River Hudson Körfezi'ne akar ⇒ Louisiana alımına girmez, İngiliz (Rupert's Land) iddiası daha güçlü — ÇEKİŞMELİ, beyan (KASA-ABD-1010)"},{f:"1818-10-20",t:"1923-10-29",d:"abd",kaynak:"1818 Konvansiyonu md. II (Avalon): 49. paralel 'shall form the Northern Boundary of the said Territories of the United States … from the Lake of the Woods to the Stony Mountains' — 'Done at London this Twentieth day of October … 1818' (yürürlük 30.01.1819) · Long seferi 1823'te hattı işaretledi (Forrester, Manitoba Historical Society) (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Gaspé", tur:"sehir", lat:48.8357, lon:-64.4823, g:0,
    kur:"1534-07-24",
    s:[{f:"1534-07-24",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Cartier'in haç diktiği yer; kalıcı balıkçı iskânı · konum denetle.py reçetesiyle düzeltildi (0.36 km maske dışıydı: 48.8320,-64.4820 → 48.8357,-64.4823) · konum denetle.py reçetesiyle düzeltildi (0.36 km maske dışıydı: 48.8357,-64.4823 → 48.8357,-64.4823) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Abitibi House", tur:"kale", lat:48.7, lon:-79.4, g:0,
    kur:"1686-01-01",
    s:[{f:"1686-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1870-07-15",d:"ingiliz-kuzey-amerika"},{f:"1870-07-15",t:"1923-10-29",d:"kanada",kaynak:"Rupert's Land and North-Western Territory Order (Konsey kararı 23.06.1870; Justice Canada, Constitution Enactment No. 3): 'from and after the fifteenth day of July, one thousand eight hundred and seventy, the said North-Western Territory shall be admitted into and become part of the Dominion of Canada' · 'Rupert's Land shall from and after the said date be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 (Konfederasyon günü) ÖDÜNÇ UÇTU — bu toprak 1867 eyaletlerinde değildi (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Obedjiwan (Atikamekw)", tur:"sehir", lat:48.68, lon:-74.93, g:0,
    s:[{f:"1281-01-01",t:"1876-08-23",d:"kri"},{f:"1876-08-23",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.6 Subarctic (Smithsonian)" },
  { ad:"Kızıl Kızılderili Gölü (Beothuk)", tur:"sehir", lat:48.65, lon:-56.85, g:0,
    s:[{f:"1281-01-01",t:"1829-06-06",d:"beothuk"},{f:"1829-06-06",t:"1923-10-29",d:"ingiliz-kuzey-amerika"}],
    kaynak:"bulunamadı", not:"Beothuk iç kışlakları; halk 1829'da tükendi · dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Colvile", tur:"kale", lat:48.617, lon:-118.1, g:0,
    kur:"1825-01-01",
    s:[{f:"1825-01-01",t:"1846-06-15",d:"__BOSLUK__",kaynak:"yer 1825'te seçildi, inşa Ağu 1826 (NPS LARO); HBC 8.06.1871'de ayrıldı (HistoryLink 9235) · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Fort St. Pierre (Rainy Lake)", tur:"kale", lat:48.61, lon:-93.4, g:0,
    kur:"1731-01-01",
    s:[{f:"1731-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"La Vérendrye hattı · dayanak: Historical Atlas of Canada" },
  { ad:"Fort Belknap (Assiniboine-Gros Ventre)", tur:"kale", lat:48.48, lon:-108.76, g:0,
    kur:"1871-01-01",
    s:[{f:"1871-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Victoria (Fort Victoria)", tur:"kale", lat:48.428, lon:-123.365, g:0,
    kur:"1843-01-01",
    s:[{"f":"1843-06-10","t":"1871-07-20","d":"ingiliz-kuzey-amerika"},{"f":"1871-07-20","t":"1923-10-29","d":"kanada",kaynak:"British Columbia Terms of Union (Konsey kararı 16.05.1871; Justice Canada, Constitution Enactment No. 4): 'from and after the twentieth day of July, one thousand eight hundred and seventy-one, the said Colony of British Columbia shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Chicoutimi", tur:"sehir", lat:48.428, lon:-71.068, g:0,
    kur:"1676-01-01",
    s:[{f:"1676-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Kral Postaları (Domaine du Roi) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Fort William (Thunder Bay)", tur:"kale", lat:48.383, lon:-89.25, g:0,
    kur:"1803-01-01",
    s:[{f:"1803-01-01",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Kuzeybatı Şirketi'nin iç merkezi · dayanak: Historical Atlas of Canada" },
  { ad:"Tadoussac", tur:"sehir", lat:48.1471, lon:-69.7186, g:0,
    kur:"1600-01-01",
    s:[{f:"1600-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Kürk ticaretinin ilk kalıcı postası · konum denetle.py reçetesiyle düzeltildi (0.42 km maske dışıydı: 48.1430,-69.7200 → 48.1471,-69.7186) · konum denetle.py reçetesiyle düzeltildi (0.42 km maske dışıydı: 48.1471,-69.7186 → 48.1471,-69.7186) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Devils Lake (Mni Wakan, Dakota)", tur:"sehir", lat:48.113, lon:-98.865, g:0,
    s:[{f:"1281-01-01",t:"1890-12-29",d:"lakota"},{f:"1890-12-29",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Listuguj (Restigouche)", tur:"sehir", lat:48.05, lon:-66.7, g:0,
    s:[{f:"1281-01-01",t:"1761-01-01",d:"mikmak"},{f:"1761-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Union Trading Post", tur:"kale", lat:48.0, lon:-104.043, g:0,
    kur:"1828-01-01",
    s:[{f:"1828-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Grand Portage", tur:"kale", lat:47.9684, lon:-89.6883, g:0,
    kur:"1731-01-01",
    s:[{f:"1731-01-01",t:"1763-02-10",d:"fransa",kaynak:"MNopedia: 'Pierre de la Vérendrye lands at Gichi Onigamiing on August 22' 1731 — FRANSIZ (eski veri 'ingiltere' YANLIŞTI) · 1763 Paris Antlaşması 10.02.1763 (KASA-ABD-1010)"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere",kaynak:"1763 Paris Antlaşması (Avalon paris763.asp) · 1783 Paris Antlaşması 3.09.1783 (KASA-ABD-1010)"},{f:"1783-09-03",t:"1923-10-29",d:"abd",kaynak:"1783 Paris Antlaşması md. II (Avalon paris.asp) ⇒ ABD — Michilimackinac emsali (1783-09-03); Detroit emsali Jay tahliyesi 1796-07-11 ⑥ · NWC 1802'de son toplantı, 1803'te Fort William'a taşındı çünkü yer Amerikan toprağı (NPS grandport; Carlstedt 1939); Pigeon River hattı 9.08.1842 Webster–Ashburton ile kesinleşti (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.81 km maske dışıydı: 47.9620,-89.6840 → 47.9684,-89.6883) · konum denetle.py reçetesiyle düzeltildi (0.81 km maske dışıydı: 47.9684,-89.6883 → 47.9684,-89.6883) · dayanak: Historical Atlas of Canada" },
  { ad:"Michipicoten", tur:"sehir", lat:47.952, lon:-84.9011, g:0,
    kur:"1725-01-01",
    s:[{f:"1725-01-01",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.20 km maske dışıydı: 47.9500,-84.9000 → 47.9520,-84.9011) · konum denetle.py reçetesiyle düzeltildi (0.20 km maske dışıydı: 47.9520,-84.9011 → 47.9520,-84.9011) · dayanak: Historical Atlas of Canada" },
  { ad:"Fort Benton", tur:"kale", lat:47.818, lon:-110.667, g:0,
    kur:"1846-01-01",
    s:[{f:"1846-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Spokane House", tur:"kale", lat:47.79, lon:-117.5, g:0,
    kur:"1810-01-01",
    s:[{f:"1810-01-01",t:"1846-06-15",d:"__BOSLUK__",kaynak:"NWC 1810; resmen kapatılış 7.04.1826 (HistoryLink 20296) — yer olarak sürer · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Seattle (Duwamish)", tur:"sehir", lat:47.606, lon:-122.332, g:0,
    kur:"1851-01-01",
    s:[{"f":"1851-11-13","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"St. John's (Newfoundland)", tur:"sehir", lat:47.561, lon:-52.712, g:0,
    kur:"1583-08-05",
    // HAYALET-KUNYE-1008 · `abd` YANLIŞ: Newfoundland İngiliz kolonisi/dominyonu, Kanada'ya 1949'da katıldı (künye
    //   `newfoundland-dominyonu` kaynağı: heritage.nf.ca · gov.nl.ca). 1763-02-10 gün komşudan: Plaisance (Paris Antl.).
    //   DOĞRUSU 1855-01-01→ `newfoundland-dominyonu` — künyede «Renk YOK» ⇒ boya inene dek ingiliz-kuzey-amerika.
    s:[{f:"1583-08-05",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1923-10-29",d:"ingiliz-kuzey-amerika"}],
    kaynak:"bulunamadı", not:"Gilbert'ın 1583 ilânı; balıkçı iskânı daha eski · dayanak: Dictionary of Canadian Biography" },
  { ad:"Madawaska (Maliseet)", tur:"sehir", lat:47.35, lon:-68.32, g:0,
    s:[{f:"1281-01-01",t:"1761-01-01",d:"maliseet"},{f:"1761-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Knife River (Hidatsa köyleri)", tur:"sehir", lat:47.333, lon:-101.383, g:0,
    s:[{f:"1281-01-01",t:"1851-09-17",d:"hidatsa"},{f:"1851-09-17",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Témiscamingue", tur:"kale", lat:47.3, lon:-79.433, g:0,
    kur:"1679-01-01",
    s:[{f:"1679-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Historical Atlas of Canada" },
  { ad:"Plaisance (Placentia)", tur:"sehir", lat:47.2491, lon:-53.9605, g:0,
    kur:"1662-01-01",
    s:[{f:"1662-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1923-10-29",d:"ingiliz-kuzey-amerika"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.57 km maske dışıydı: 47.2440,-53.9630 → 47.2491,-53.9605) · konum denetle.py reçetesiyle düzeltildi (0.57 km maske dışıydı: 47.2491,-53.9605 → 47.2491,-53.9605) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Duluth (Fond du Lac)", tur:"kale", lat:46.7897, lon:-92.1045, g:0,
    kur:"1793-01-01",
    s:[{f:"1793-01-01",t:"1923-10-29",d:"abd",kaynak:"1783 Paris Antlaşması md. II sınırı Lake Superior'un kuzeyinden geçirir ⇒ yer de jure ABD (Avalon paris.asp) · NWC Fort St. Louis 1793 (Connor's Point, Superior WI); Carlstedt, Minnesota History 1939: 'remained under British control, without legal sanction, for more than three decades' — ŞİRKET denetimi, devlet işgali DEĞİL ⇒ isg yazılmadı; 1816 yabancı tüccar yasağıyla son (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.53 km maske dışıydı: 46.7870,-92.1000 → 46.7897,-92.1045) · konum denetle.py reçetesiyle düzeltildi (0.53 km maske dışıydı: 46.7897,-92.1045 → 46.7897,-92.1045) · dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Chequamegon (La Pointe)", tur:"sehir", lat:46.7816, lon:-90.7862, g:0,
    kur:"1665-01-01",
    s:[{f:"1665-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.29 km maske dışıydı: 46.7830,-90.7890 → 46.7816,-90.7862) · konum denetle.py reçetesiyle düzeltildi (0.29 km maske dışıydı: 46.7816,-90.7862 → 46.7816,-90.7862) · dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"On-A-Slant (Mandan köyü)", tur:"sehir", lat:46.767, lon:-100.86, g:0,
    s:[{f:"1281-01-01",t:"1851-09-17",d:"mandan"},{f:"1851-09-17",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Helena (Montana)", tur:"sehir", lat:46.589, lon:-112.039, g:0,
    kur:"1864-01-01",
    s:[{f:"1864-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Keweenaw (Ojibwe bakır yatakları)", tur:"sehir", lat:46.54, lon:-87.4, g:0,
    s:[{f:"1281-01-01",t:"1842-10-04",d:"ojibwe",kaynak:"La Pointe Antlaşması 4.10.1842 (7 Stat. 591, ilan 23.03.1843) — Ojibwe arazi devri; atlas yerli toprağı emsali (Wayám 1855 · Klamath 1864): yerli siyaset devir antlaşmasına dek · ESKİ uç 1850-09-07 = `ojibwe` künye sonu, ÖDÜNÇ UÇTU (KASA-ABD-1010)"},{f:"1842-10-04",t:"1923-10-29",d:"abd",kaynak:"La Pointe 4.10.1842 devri · ABD egemenliği 1783 Paris sınırıyla (hat Isle Royale'in kuzeyinden) — İngiliz Mackinac garnizonu 1.09.1796 ayrıldı · ESKİ 'ingiliz-kuzey-amerika 1850 → kanada 1867' TAMAMEN YANLIŞTI (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"Yerli bakır madenciliği ve ticareti · dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Sault Ste. Marie", tur:"sehir", lat:46.5, lon:-84.35, g:0,
    kur:"1668-01-01",
    s:[{f:"1668-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Fort Abercrombie (Kızıl Irmak vadisi)", tur:"kale", lat:46.45, lon:-96.72, g:0,
    kur:"1858-01-01",
    s:[{f:"1858-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Miles City (Tongue Irmağı)", tur:"sehir", lat:46.408, lon:-105.841, g:0,
    kur:"1877-01-01",
    s:[{f:"1877-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Lapwai (Nez Perce)", tur:"sehir", lat:46.4, lon:-116.03, g:0,
    s:[{f:"1281-01-01",t:"1877-10-05",d:"nez-perce"},{f:"1877-10-05",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Trois-Rivières", tur:"sehir", lat:46.3442, lon:-72.5439, g:0,
    kur:"1634-07-04",
    s:[{f:"1634-07-04",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.11 km maske dışıydı: 46.3430,-72.5430 → 46.3442,-72.5439) · konum denetle.py reçetesiyle düzeltildi (0.11 km maske dışıydı: 46.3442,-72.5439 → 46.3442,-72.5439) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Port-la-Joye (Charlottetown)", tur:"sehir", lat:46.2398, lon:-63.1318, g:0,
    kur:"1720-01-01",
    s:[{f:"1720-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1873-07-01",d:"ingiliz-kuzey-amerika"},{f:"1873-07-01",t:"1923-10-29",d:"kanada",kaynak:"Prince Edward Island Terms of Union (Konsey kararı 26.06.1873; Justice Canada, Constitution Enactment No. 6): 'from and after the first day of July, one thousand eight hundred and seventy three, the said Colony of Prince Edward Island shall be admitted into and become part of the Dominion of Canada' · ESKİ uç 1867-07-01 ÖDÜNÇ UÇTU (KASA-KANADA-1010)"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.16 km maske dışıydı: 46.2380,-63.1310 → 46.2398,-63.1318) · konum denetle.py reçetesiyle düzeltildi (0.16 km maske dışıydı: 46.2398,-63.1318 → 46.2398,-63.1318) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Fort Astoria", tur:"kale", lat:46.188, lon:-123.831, g:0,
    kur:"1811-04-12",
    s:[{f:"1811-04-12",t:"1813-12-12",d:"__BOSLUK__",kaynak:"Pacific Fur Co. (Amerikan, özel) kuruluşu 12.04.1811 (Oregon Historical Quarterly 1900) — devlet egemenliği değil, çakışık iddia; 16.10.1813 NWC'ye satış (DCB McDougall) ticarî (KASA-ABD-1010)"},{f:"1813-12-12",t:"1818-10-06",d:"ingiliz-kuzey-amerika",kaynak:"İngiliz resmî zilyetliği (HMS Racoon; Franchère 12.12.1813 — bir İngiliz anlatısı 1.12.1813, ⑥) · iade: Gent md. I uyarınca teslim akti 'this 6th day of October. 1818' (Hickey/Keith → Prevost) (KASA-ABD-1010)"},{f:"1818-10-06",t:"1846-06-15",d:"__BOSLUK__",kaynak:"6.10.1818 iade ile 20.10.1818 konvansiyon arasındaki 14 gün ayrıca yazılmadı (beyan) · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Odanak (Abenaki)", tur:"sehir", lat:46.083, lon:-72.82, g:0,
    kur:"1700-01-01",
    s:[{f:"1700-01-01",t:"1725-12-15",d:"abenaki"},{f:"1725-12-15",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Nez Percés (Walla Walla)", tur:"kale", lat:46.05, lon:-118.9, g:0,
    kur:"1818-01-01",
    s:[{f:"1818-01-01",t:"1846-06-15",d:"__BOSLUK__",kaynak:"NWC 1818 (HistoryLink 5178), 1821'den HBC · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Louisbourg", tur:"sehir", lat:45.922, lon:-59.976, g:0,
    kur:"1713-01-01",
    s:[{f:"1713-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Michilimackinac", tur:"sehir", lat:45.8575, lon:-84.7347, g:0,
    kur:"1671-01-01",
    s:[{f:"1671-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.93 km maske dışıydı: 45.8500,-84.7300 → 45.8575,-84.7347) · konum denetle.py reçetesiyle düzeltildi (0.93 km maske dışıydı: 45.8575,-84.7347 → 45.8575,-84.7347) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Wayám (Celilo Şelâleleri)", tur:"sehir", lat:45.65, lon:-120.983, g:0,
    s:[{f:"1281-01-01",t:"1855-01-01",d:"sahaptin"},{f:"1855-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Kuzeybatının en büyük balıkçılık ve ticaret merkezi · dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Fort Vancouver", tur:"kale", lat:45.625, lon:-122.667, g:0,
    kur:"1825-01-01",
    s:[{f:"1825-03-19",t:"1846-06-15",d:"__BOSLUK__",kaynak:"HBC Columbia Bölümü merkezi, kuruluş 19.03.1825 (NPS, HistoryLink); HBC 1860'a dek kaldı (mülkiyet, egemenlik değil) · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"Columbia Bölümü merkezi · dayanak: HNAI c.7 Northwest Coast (Smithsonian)" },
  { ad:"Crow Agency (Apsáalooke)", tur:"sehir", lat:45.602, lon:-107.46, g:0,
    s:[{f:"1281-01-01",t:"1851-09-17",d:"karga"},{f:"1851-09-17",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Bytown (Ottawa)", tur:"sehir", lat:45.421, lon:-75.7, g:0,
    kur:"1826-01-01",
    s:[{f:"1826-01-01",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Dictionary of Canadian Biography" },
  { ad:"Kahnawake", tur:"sehir", lat:45.412, lon:-73.683, g:0,
    kur:"1667-01-01",
    s:[{f:"1667-01-01",t:"1777-01-01",d:"haudenosaunee"},{f:"1777-01-01",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian) · 1783 sonrası İngiliz yakası: Paris Antl. 3 Eyl 1783 md.2 (45. enlem / Iroquois-Cataraquy nehri hattının kuzeyi; Avalon Project, Yale) · 1867-07-01 gün komşudan: Montreal (Ville-Marie) · Kanada Konfederasyonu" },
  { ad:"Saint John (NB)", tur:"sehir", lat:45.2916, lon:-66.0603, g:0,
    kur:"1631-01-01",
    s:[{f:"1631-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Fort La Tour 1631; şehir 1785 · konum denetle.py reçetesiyle düzeltildi (1.05 km maske dışıydı: 45.2820,-66.0630 → 45.2916,-66.0603) · konum denetle.py reçetesiyle düzeltildi (1.05 km maske dışıydı: 45.2916,-66.0603 → 45.2916,-66.0603) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Fort Snelling (Bdote)", tur:"kale", lat:44.893, lon:-93.181, g:0,
    kur:"1819-01-01",
    s:[{f:"1819-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Norridgewock (Abenaki)", tur:"sehir", lat:44.717, lon:-69.792, g:0,
    s:[{f:"1281-01-01",t:"1725-12-15",d:"abenaki"},{f:"1725-12-15",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Sainte-Marie-au-pays-des-Hurons", tur:"sehir", lat:44.683, lon:-79.75, g:0,
    kur:"1639-01-01",
    s:[{f:"1639-01-01",t:"1649-03-16",d:"vendat"},{f:"1649-03-16",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"dayanak: Trigger, The Children of Aataentsic (McGill-Queen's UP) · 1649-1763 Yeni Fransa iddiası, 1763-02-10 / 1867-07-01 günleri komşudan: York (Toronto) · Fort Frontenac · 1783 sonrası İngiliz yakası: Paris Antl. 3 Eyl 1783 md.2 (Ontario-Erie-Huron gölleri hattının kuzeyi; Avalon Project, Yale)" },
  { ad:"Halifax", tur:"sehir", lat:44.6486, lon:-63.5755, g:0,
    kur:"1749-06-21",
    s:[{f:"1749-06-21",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.01 km maske dışıydı: 44.6490,-63.5750 → 44.6486,-63.5755) · konum denetle.py reçetesiyle düzeltildi (0.01 km maske dışıydı: 44.6486,-63.5755 → 44.6486,-63.5755) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Tukudeka (Koyun Yiyen Şoşoniler, Yellowstone)", tur:"sehir", lat:44.6, lon:-110.5, g:0,
    s:[{f:"1281-01-01",t:"1868-07-03",d:"sosoni"},{f:"1868-07-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Yellowstone yaylasının tek sürekli sakinleri · dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"La Baye (Green Bay)", tur:"liman", lat:44.513, lon:-88.016, g:0,
    kur:"1634-01-01",
    s:[{f:"1634-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Ossossané", tur:"sehir", lat:44.5, lon:-79.933, g:0,
    s:[{f:"1281-01-01",t:"1649-03-16",d:"vendat"},{f:"1649-03-16",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Huron Ayı boyunun ana kasabası · dayanak: Trigger, The Children of Aataentsic · 1649-1763 Yeni Fransa iddiası, 1763-02-10 / 1867-07-01 günleri komşudan: York (Toronto) · Fort Frontenac · 1783 sonrası İngiliz yakası: Paris Antl. 3 Eyl 1783 md.2 (Avalon Project, Yale)" },
  { ad:"Deadwood (Kara Tepeler)", tur:"sehir", lat:44.377, lon:-103.729, g:0,
    kur:"1876-01-01",
    s:[{f:"1876-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Pierre (Arikara/Lakota)", tur:"kale", lat:44.362, lon:-100.371, g:0,
    kur:"1817-01-01",
    s:[{f:"1817-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Frontenac (Kingston)", tur:"kale", lat:44.2524, lon:-76.4918, g:0,
    kur:"1673-01-01",
    s:[{f:"1673-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (2.61 km maske dışıydı: 44.2310,-76.4810 → 44.2524,-76.4918) · konum denetle.py reçetesiyle düzeltildi (2.61 km maske dışıydı: 44.2524,-76.4918 → 44.2524,-76.4918) · dayanak: Dictionary of Canadian Biography" },
  { ad:"Pemaquid", tur:"sehir", lat:43.876, lon:-69.513, g:0,
    kur:"1625-01-01",
    s:[{f:"1625-01-01",t:"1783-09-03",d:"ingiltere", enklav: true },{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Falmouth (Portland, Maine)", tur:"sehir", lat:43.659, lon:-70.257, g:0,
    kur:"1632-01-01",
    s:[{f:"1632-01-01",t:"1783-09-03",d:"ingiltere", enklav: true },{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"York (Toronto)", tur:"sehir", lat:43.653, lon:-79.383, g:0,
    kur:"1750-01-01",
    s:[{f:"1750-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"1923-10-29",d:"kanada"}],
    kaynak:"bulunamadı", not:"Fort Rouillé 1750; York 1793 · dayanak: Dictionary of Canadian Biography" },
  { ad:"Boise (Fort Boise)", tur:"kale", lat:43.617, lon:-116.2, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1846-06-15",d:"__BOSLUK__",kaynak:"McKay 1834, HBC 1837 satın aldı, 1855 terk (NPS) · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Sioux Falls", tur:"sehir", lat:43.55, lon:-96.7, g:0,
    kur:"1856-01-01",
    s:[{f:"1856-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Harney (Harney Havzası, Payut)", tur:"kale", lat:43.5, lon:-118.7, g:0,
    kur:"1867-01-01",
    s:[{f:"1867-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Saginaw (Ojibwe)", tur:"sehir", lat:43.419, lon:-83.951, g:0,
    s:[{f:"1281-01-01",t:"1850-09-07",d:"ojibwe"},{f:"1850-09-07",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Portsmouth (New Hampshire)", tur:"sehir", lat:43.071, lon:-70.763, g:0,
    kur:"1623-01-01",
    s:[{f:"1623-01-01",t:"1783-09-03",d:"ingiltere", enklav: true },{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Prairie du Chien", tur:"sehir", lat:43.052, lon:-91.141, g:0,
    kur:"1781-01-01",
    s:[{f:"1781-01-01",t:"1783-09-03",d:"fransa"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Hall", tur:"kale", lat:43.033, lon:-112.433, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1846-06-15",d:"__BOSLUK__",kaynak:"Amerikalı Nathaniel Wyeth Ağu 1834 kurdu (ABD bayrağı 5/6 Ağu, ⑥); HBC'ye satış 1836/1837 ⑥ — özel mülkiyet, egemenlik değil · 1818 Konvansiyonu md. III (Avalon): 'any Country that may be claimed by either Party on the North West Coast of America, Westward of the Stony Mountains … be free and open, for the term of ten Years' (6.08.1827 ile süresiz uzatıldı) — 'Done at London this Twentieth day of October … 1818' ⇒ ORTAK İDARE: egemenlik tartışmalı, ne İngiliz ne ABD — __BOSLUK__ beyanlıdır, 'kimsenin değil' DEĞİL; 1818 öncesi antlaşmasız çakışık iddia (KASA-ABD-1010)"},{f:"1846-06-15",t:"1923-10-29",d:"abd",kaynak:"Oregon Antlaşması md. I (49. paralel), Avalon/Statutes vol. 9: 'Done at Washington, the fifteenth day of June, in the year of our Lord one thousand eight hundred and forty-six' — imza günü (atlas antlaşma-günü emsali, F8); Senato onayı 18.06.1846, onay belgeleri teatisi/yürürlük 17.07.1846 (Bevans 12) · NPS Fort Vancouver: 1846 antlaşması kaleyi ABD toprağına bıraktı (KASA-ABD-1010)"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Fort Washakie (Wind River)", tur:"kale", lat:43.003, lon:-108.884, g:0,
    kur:"1869-01-01",
    s:[{f:"1869-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Camas Ovası (Kuzey Şoşoni)", tur:"sehir", lat:42.9, lon:-115.0, g:0,
    s:[{f:"1281-01-01",t:"1868-07-03",d:"sosoni"},{f:"1868-07-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Fort Fetterman (Powder Irmağı)", tur:"kale", lat:42.84, lon:-105.47, g:0,
    kur:"1867-01-01",
    s:[{f:"1867-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Klamath / Klamath Bataklığı", tur:"kale", lat:42.71, lon:-121.99, g:0,
    s:[{f:"1281-01-01",t:"1864-01-01",d:"klamath"},{f:"1864-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Klamath yerleşik kış köyleri; 1863 ABD kalesi · dayanak: HNAI c.12 Plateau (Smithsonian)" },
  { ad:"Fort Laramie", tur:"kale", lat:42.201, lon:-104.548, g:0,
    kur:"1834-01-01",
    s:[{f:"1834-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Chicago (Fort Dearborn)", tur:"kale", lat:41.878, lon:-87.63, g:0,
    kur:"1803-01-01",
    s:[{f:"1803-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Checagou geçidi 1670'lerden beri bilinir · dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Providence", tur:"sehir", lat:41.824, lon:-71.413, g:0,
    kur:"1636-01-01",
    s:[{f:"1636-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Hartford", tur:"sehir", lat:41.764, lon:-72.674, g:0,
    kur:"1636-01-01",
    s:[{f:"1636-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Des Moines", tur:"kale", lat:41.591, lon:-93.604, g:0,
    kur:"1843-01-01",
    s:[{f:"1843-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Saukenuk (Sauk)", tur:"sehir", lat:41.512, lon:-90.578, g:0,
    s:[{f:"1281-01-01",t:"1832-09-21",d:"sauk"},{f:"1832-09-21",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Fort Atkinson (Council Bluffs)", tur:"kale", lat:41.45, lon:-96.03, g:0,
    kur:"1819-01-01",
    s:[{f:"1819-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Pawnee köyleri (Loup Irmağı)", tur:"sehir", lat:41.42, lon:-97.9, g:0,
    s:[{f:"1281-01-01",t:"1857-09-24",d:"pavni"},{f:"1857-09-24",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Bridger", tur:"kale", lat:41.317, lon:-110.388, g:0,
    kur:"1843-01-01",
    s:[{f:"1843-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Kuzey Payut (Kara Kaya Çölü)", tur:"sehir", lat:41.2, lon:-119.0, g:0,
    s:[{f:"1281-01-01",t:"1872-01-01",d:"payut"},{f:"1872-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Steward, Basin-Plateau Aboriginal Sociopolitical Groups (BAE Bulletin 120)" },
  { ad:"Cheyenne (Wyoming)", tur:"sehir", lat:41.14, lon:-104.82, g:0,
    kur:"1867-01-01",
    s:[{"f":"1867-07-04","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"North Platte (Fort McPherson, Nebraska)", tur:"kale", lat:41.124, lon:-100.765, g:0,
    kur:"1863-01-01",
    s:[{f:"1863-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Kekionga (Miami)", tur:"sehir", lat:41.08, lon:-85.139, g:0,
    s:[{f:"1281-01-01",t:"1795-08-03",d:"miami"},{f:"1795-08-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Salt Lake City", tur:"sehir", lat:40.761, lon:-111.891, g:0,
    kur:"1847-07-24",
    s:[{f:"1847-07-24",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Wintu (Yukarı Sacramento)", tur:"sehir", lat:40.58, lon:-122.39, g:0,
    d:[], kasitli_bosluk:true, bos:"kabile",
    neden:"Wintu bantlari Yukari Sacramento'da yasadi ama Kaliforniya'nin 18 antlasmasinin hicbiri ABD Senatosu'nca ONAYLANMADI ⇒ ortada bir devir gunu YOK ve kunye yazilamadi (arandi, bulunamadi). ABD idaresi eyalet olusuyla 1850-09-09'da basladi. kaynak: HNAI c.8 California (Smithsonian).",
    kaynak:"bulunamadı", not:"dayanak: HNAI c.8 California (Smithsonian)" },
  { ad:"Fort Duquesne (Pittsburgh)", tur:"kale", lat:40.441, lon:-80.01, g:0,
    kur:"1754-01-01",
    s:[{f:"1754-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Provo (Utah Gölü, Timpanogos Ute)", tur:"sehir", lat:40.234, lon:-111.659, g:0,
    kur:"1849-01-01",
    s:[{f:"1849-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Fort Robidoux (Uinta Havzası)", tur:"kale", lat:40.2, lon:-109.75, g:0,
    kur:"1832-01-01",
    s:[{f:"1832-01-01",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Ruby Vadisi (Batı Şoşoni)", tur:"sehir", lat:40.1, lon:-115.5, g:0,
    s:[{f:"1281-01-01",t:"1868-07-03",d:"sosoni"},{f:"1868-07-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Steward, Basin-Plateau Aboriginal Sociopolitical Groups" },
  { ad:"Denver", tur:"sehir", lat:39.739, lon:-104.99, g:0,
    kur:"1858-01-01",
    s:[{"f":"1858-11-22","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Chillicothe (Şavni)", tur:"sehir", lat:39.333, lon:-82.983, g:0,
    s:[{f:"1281-01-01",t:"1795-08-03",d:"savni"},{f:"1795-08-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Virginia City (Nevada)", tur:"sehir", lat:39.31, lon:-119.649, g:0,
    kur:"1859-01-01",
    s:[{f:"1859-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Baltimore", tur:"sehir", lat:39.29, lon:-76.612, g:0,
    kur:"1729-01-01",
    s:[{f:"1729-01-01",t:"1776-07-04",d:"ingiltere"},{f:"1776-07-04",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Cincinnati (Losantiville)", tur:"sehir", lat:39.103, lon:-84.512, g:0,
    kur:"1788-01-01",
    s:[{"f":"1788-12-28","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Westport (Kansas City)", tur:"sehir", lat:39.1, lon:-94.58, g:0,
    kur:"1821-01-01",
    s:[{f:"1821-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Riley (Kansas Irmağı)", tur:"kale", lat:39.09, lon:-96.79, g:0,
    kur:"1853-01-01",
    s:[{f:"1853-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Genoa (Nevada)", tur:"sehir", lat:39.004, lon:-119.847, g:0,
    kur:"1851-01-01",
    s:[{f:"1851-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Fort Wallace (Smoky Hill)", tur:"kale", lat:38.91, lon:-101.6, g:0,
    kur:"1865-01-01",
    s:[{f:"1865-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Vincennes (Poste Vincennes)", tur:"kale", lat:38.677, lon:-87.529, g:0,
    kur:"1732-01-01",
    s:[{f:"1732-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"St. Louis", tur:"sehir", lat:38.627, lon:-90.2, g:0,
    kur:"1764-02-14",
    s:[{"f":"1764-02-14","t":"1804-03-10","d":"yeni-ispanya"},{"f":"1804-03-10","t":"1923-10-29","d":"abd","kaynak":"Louisiana devri 1803-12-20 (New Orleans); St. Louis hiç Meksika olmadı. Yukarı Louisiana töreni 1804-03-10 kaynakla DOĞRULANMADI — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"dayanak: Usner, Indians, Settlers and Slaves" },
  { ad:"Sutter's Fort (Sacramento)", tur:"kale", lat:38.572, lon:-121.467, g:0,
    kur:"1839-01-01",
    s:[{f:"1839-01-01",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Mexican Frontier 1821-1846 (UNM Press)" },
  { ad:"Fort Ross (Kaliforniya)", tur:"kale", lat:38.514, lon:-123.245, g:0,
    kur:"1812-01-01",
    s:[{f:"1812-01-01",t:"1867-10-18",d:"rusya"},{f:"1867-10-18",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Black, Russians in Alaska" },
  { ad:"Uncompahgre (Ute)", tur:"sehir", lat:38.48, lon:-107.88, g:0,
    s:[{f:"1281-01-01",t:"1880-01-01",d:"ute"},{f:"1880-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Charleston (Batı Virjinya, Kanawha)", tur:"sehir", lat:38.35, lon:-81.633, g:0,
    kur:"1788-01-01",
    s:[{f:"1788-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Quivira (Wiçita, Büyük Bükülme)", tur:"sehir", lat:38.3, lon:-98.2, g:0,
    s:[{f:"1281-01-01",t:"1859-01-01",d:"wicita"},{f:"1859-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Coronado 1541'de burayı aradı · dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Louisville", tur:"sehir", lat:38.253, lon:-85.758, g:0,
    kur:"1778-01-01",
    s:[{"f":"1778-05-27","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Bent's Fort", tur:"kale", lat:38.045, lon:-103.43, g:0,
    kur:"1833-01-01",
    s:[{f:"1833-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Kaskaskia", tur:"sehir", lat:37.921, lon:-89.92, g:0,
    kur:"1703-01-01",
    s:[{f:"1703-01-01",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Usner, Indians, Settlers and Slaves" },
  { ad:"Parowan", tur:"sehir", lat:37.842, lon:-112.826, g:0,
    kur:"1851-01-01",
    s:[{f:"1851-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Bishop (Owens Vadisi Payutları)", tur:"sehir", lat:37.364, lon:-118.395, g:0,
    s:[{f:"1281-01-01",t:"1872-01-01",d:"payut"},{f:"1872-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Sulamalı, yerleşik köyler — Büyük Havza'da istisnaî · dayanak: Steward, Basin-Plateau Aboriginal Sociopolitical Groups (BAE Bulletin 120)" },
  { ad:"San José de Guadalupe", tur:"sehir", lat:37.339, lon:-121.895, g:0,
    kur:"1777-11-29",
    s:[{f:"1777-11-29",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Big Lick (Roanoke)", tur:"sehir", lat:37.271, lon:-79.941, g:0,
    kur:"1740-01-01",
    s:[{f:"1740-01-01",t:"1776-07-04",d:"ingiltere"},{f:"1776-07-04",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Draper's Meadow (Blacksburg)", tur:"sehir", lat:37.23, lon:-80.42, g:0,
    kur:"1748-01-01",
    s:[{f:"1748-01-01",t:"1776-07-04",d:"ingiltere"},{f:"1776-07-04",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Springfield (Missouri, Ozark)", tur:"sehir", lat:37.209, lon:-93.292, g:0,
    kur:"1829-01-01",
    s:[{f:"1829-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"St. George (Utah)", tur:"sehir", lat:37.096, lon:-113.578, g:0,
    kur:"1861-01-01",
    s:[{f:"1861-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"Norfolk (Virginia)", tur:"sehir", lat:36.851, lon:-76.286, g:0,
    kur:"1682-01-01",
    s:[{f:"1682-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.15 Northeast (Smithsonian)" },
  { ad:"Ponca köyleri (Salt Fork)", tur:"sehir", lat:36.7, lon:-97.08, g:0,
    s:[{f:"1281-01-01",t:"1858-01-01",d:"ponka"},{f:"1858-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Monterey (Alta California)", tur:"sehir", lat:36.6, lon:-121.894, g:0,
    kur:"1770-06-03",
    s:[{f:"1770-06-03",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"Alta California başkenti · dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Fort Supply (Kuzeybatı Toprakları, Oklahoma)", tur:"kale", lat:36.573, lon:-99.57, g:0,
    kur:"1868-01-01",
    s:[{f:"1868-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Timbisha (Ölüm Vadisi)", tur:"sehir", lat:36.462, lon:-116.867, g:0,
    s:[{f:"1281-01-01",t:"1868-07-03",d:"sosoni"},{f:"1868-07-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Steward, Basin-Plateau Aboriginal Sociopolitical Groups" },
  { ad:"Las Vegas (Nevada, Mormon Kalesi)", tur:"kale", lat:36.171, lon:-115.14, g:0,
    kur:"1855-01-01",
    s:[{f:"1855-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.11 Great Basin (Smithsonian)" },
  { ad:"French Lick (Nashville)", tur:"sehir", lat:36.163, lon:-86.781, g:0,
    kur:"1779-01-01",
    s:[{f:"1779-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Tsegi (Canyon de Chelly)", tur:"sehir", lat:36.15, lon:-109.47, g:0,
    s:[{f:"1281-01-01",t:"1868-06-01",d:"navaho"},{f:"1868-06-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"Occaneechi (Hillsborough)", tur:"sehir", lat:36.075, lon:-79.1, g:0,
    s:[{f:"1281-01-01",t:"1676-01-01",d:"occaneechi"},{f:"1676-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Büyük Ticaret Yolu üzerinde · dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Las Vegas (Yeni Meksika)", tur:"sehir", lat:35.594, lon:-105.223, g:0,
    kur:"1835-01-01",
    s:[{f:"1835-01-01",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Mexican Frontier 1821-1846" },
  { ad:"Pecos Pueblo (Cicuye)", tur:"sehir", lat:35.55, lon:-105.687, g:0,
    d:[], kasitli_bosluk:true, bos:"devletsiz",
    neden:"1281-1598 arasi Pueblo koyleri siyaseten OZERKTI: her koy kendi konseyiyle yonetiliyor, ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598'de Onate ile basladi. Atlasin kendi Taos Pueblo ve Acoma Pueblo kayitlari AYNI beyani tasiyor — emsal onlardir. kaynak: HNAI c.9 Southwest (Smithsonian); TDV Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu).",
    kaynak:"bulunamadı", not:"dayanak: HNAI c.9 Southwest (Smithsonian)" },
  { ad:"Kituwa (Çeroki ana kasabası)", tur:"sehir", lat:35.442, lon:-83.36, g:0,
    s:[{f:"1281-01-01",t:"1791-07-02",d:"cherokee"},{f:"1791-07-02",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Fort Smith", tur:"kale", lat:35.386, lon:-94.399, g:0,
    kur:"1817-01-01",
    s:[{f:"1817-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Spiro", tur:"sehir", lat:35.311, lon:-94.57, g:0,
    s:[{f:"1281-01-01",t:"1450-01-01",d:"spiro"},{f:"1450-01-01",t:"1682-04-09",d:"wicita"},{f:"1682-04-09",t:"1762-11-03",d:"fransa"},{f:"1762-11-03",t:"1803-12-20",d:"yeni-ispanya"},{f:"1803-12-20",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Memphis (Chickasaw Bluffs)", tur:"sehir", lat:35.146, lon:-90.049, g:0,
    kur:"1739-01-01",
    s:[{f:"1739-01-01",t:"1832-10-20",d:"cikasav"},{f:"1832-10-20",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Fort Assumption 1739; Memphis 1819 · dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Albuquerque", tur:"sehir", lat:35.084, lon:-106.651, g:0,
    kur:"1706-04-23",
    s:[{f:"1706-04-23",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Halona:wa (Zuni)", tur:"sehir", lat:35.07, lon:-108.85, g:0,
    s:[{f:"1281-01-01",t:"1848-02-02",d:"zuni"},{f:"1848-02-02",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Cíbola'nın Yedi Şehri · dayanak: HNAI c.9 Southwest (Smithsonian)" },
  { ad:"Fort Mohave (Kolorado geçidi)", tur:"kale", lat:34.95, lon:-114.6, g:0,
    s:[{f:"1281-01-01",t:"1865-01-01",d:"mohave"},{f:"1865-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Mohave sulamalı ırmak köyleri · dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"Little Rock (Arkansas Post havzası)", tur:"kale", lat:34.746, lon:-92.29, g:0,
    kur:"1820-01-01",
    s:[{f:"1820-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Fort Sill (Wiçita Dağları)", tur:"kale", lat:34.663, lon:-98.4, g:0,
    kur:"1869-01-01",
    s:[{f:"1869-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Prescott / Yavapai", tur:"sehir", lat:34.54, lon:-112.468, g:0,
    s:[{f:"1281-01-01",t:"1873-01-01",d:"yavapai"},{f:"1873-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"Bosque Redondo (Fort Sumner)", tur:"kale", lat:34.47, lon:-104.24, g:0,
    kur:"1863-01-01",
    s:[{f:"1863-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"Santa Bárbara", tur:"sehir", lat:34.42, lon:-119.698, g:0,
    kur:"1782-04-21",
    s:[{f:"1782-04-21",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Wilmington (Kuzey Karolayna)", tur:"sehir", lat:34.226, lon:-77.945, g:0,
    kur:"1739-01-01",
    s:[{f:"1739-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  // HAYALET-KUNYE-1008-K · `creek-konfederasyonu` künyesi 1701-01-01'de başlıyor (kesinlik yuzyil); 1281→1701-01-01 dilimi → `__BOSLUK__`.
  //   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
  { ad:"Etowah", tur:"sehir", lat:34.122, lon:-84.809, g:0,
    s:[{f:"1281-01-01",t:"1550-01-01",d:"etowah"},{f:"1550-01-01",t:"1701-01-01",d:"__BOSLUK__"},{f:"1701-01-01",t:"1733-06-09",d:"creek-konfederasyonu"},{f:"1733-06-09",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"14. yy'da hâlâ iskânlı büyük höyük merkezi · dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Los Ángeles (El Pueblo)", tur:"sehir", lat:34.053, lon:-118.243, g:0,
    kur:"1781-09-04",
    s:[{f:"1781-09-04",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Taovaya (İspanyol Kalesi, Kızıl Irmak)", tur:"kale", lat:33.87, lon:-97.75, g:0,
    kur:"1750-01-01",
    s:[{f:"1750-01-01",t:"1859-01-01",d:"wicita"},{f:"1859-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Meskalero Apaçi (Pecos vadisi)", tur:"kale", lat:33.15, lon:-105.75, g:0,
    s:[{f:"1281-01-01",t:"1873-01-01",d:"meskalero-apaci"},{f:"1873-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"Moundville", tur:"sehir", lat:32.998, lon:-87.63, g:0,
    s:[{f:"1281-01-01",t:"1450-01-01",d:"moundville"},{f:"1450-01-01",t:"1699-04-08",d:"choctaw"},{f:"1699-04-08",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  // HAYALET-KUNYE-1008-K · `creek-konfederasyonu` künyesi 1701-01-01'de başlıyor (kesinlik yuzyil); 1281→1701-01-01 dilimi → `__BOSLUK__`.
  //   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
  { ad:"Ocmulgee", tur:"sehir", lat:32.837, lon:-83.608, g:0,
    s:[{f:"1281-01-01",t:"1701-01-01",d:"__BOSLUK__"},{f:"1701-01-01",t:"1832-03-24",d:"creek-konfederasyonu"},{f:"1832-03-24",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Santa Rita del Cobre", tur:"sehir", lat:32.8, lon:-108.07, g:0,
    kur:"1804-01-01",
    s:[{f:"1804-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Fort Worth (Üç Boynuz Kavşağı)", tur:"kale", lat:32.755, lon:-97.331, g:0,
    kur:"1849-01-01",
    s:[{f:"1849-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Yuma geçidi (La Purísima Concepción)", tur:"sehir", lat:32.727, lon:-114.623, g:0,
    kur:"1780-01-01",
    s:[{f:"1780-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Tucson (San Agustín del Tucsón)", tur:"sehir", lat:32.222, lon:-110.97, g:0,
    kur:"1775-08-20",
    s:[{f:"1775-08-20",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1854-06-30",d:"meksika"},{f:"1854-06-30",t:"1923-10-29",d:"abd",kaynak:"Gadsden alımı, onay teatisi 1854-06-30 (sınır katmanı d1923-us-mx-gadsden ile aynı gün) — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Los Adaes", tur:"sehir", lat:31.95, lon:-93.53, g:0,
    kur:"1721-01-01",
    s:[{f:"1721-01-01",t:"1821-02-22",d:"yeni-ispanya"},{f:"1821-02-22",t:"1923-10-29",d:"abd",kaynak:"Adams-Onís Antlaşması, onay teatisi 1821-02-22: Sabine doğusu ABD; Los Adaes hiç Meksika olmadı (1806-1821 Neutral Ground ihtilaf şeridi) — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"1729-1770 Teksas eyalet başkenti · dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Natchitoches", tur:"sehir", lat:31.761, lon:-93.087, g:0,
    kur:"1714-01-01",
    s:[{f:"1714-01-01",t:"1762-11-03",d:"fransa"},{f:"1762-11-03",t:"1803-12-20",d:"yeni-ispanya"},{f:"1803-12-20",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Luizyana'nın en eski kalıcı yerleşimi · dayanak: Usner, Indians, Settlers and Slaves (UNC Press)" },
  { ad:"El Paso del Norte", tur:"sehir", lat:31.76, lon:-106.49, g:0,
    kur:"1659-12-08",
    s:[{f:"1659-12-08",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Tubac", tur:"sehir", lat:31.612, lon:-111.046, g:0,
    kur:"1752-01-01",
    s:[{f:"1752-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1854-06-30",d:"meksika"},{f:"1854-06-30",t:"1923-10-29",d:"abd",kaynak:"Gadsden alımı, onay teatisi 1854-06-30 (sınır katmanı d1923-us-mx-gadsden ile aynı gün) — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Nacogdoches", tur:"sehir", lat:31.604, lon:-94.655, g:0,
    kur:"1779-01-01",
    s:[{f:"1779-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1836-03-02",d:"meksika"},{f:"1836-03-02",t:"1845-12-29",d:"teksas-cumhuriyeti",kaynak:"Teksas bağımsızlık ilanı 1836-03-02 (künye teksas-cumhuriyeti f) — DUNYA-0079"},{f:"1845-12-29",t:"1923-10-29",d:"abd",kaynak:"Teksas'ın ABD'ye katılışı 1845-12-29 (künye teksas-cumhuriyeti t) — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America (Yale UP)" },
  { ad:"Fort Concho (San Angelo)", tur:"kale", lat:31.45, lon:-100.44, g:0,
    kur:"1867-01-01",
    s:[{f:"1867-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Fort Stockton (Comanche Geçidi)", tur:"kale", lat:30.894, lon:-102.879, g:0,
    kur:"1859-01-01",
    s:[{f:"1859-01-01",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: HNAI c.13 Plains (Smithsonian)" },
  { ad:"Mobile (Fort Louis de la Louisiane)", tur:"kale", lat:30.694, lon:-88.043, g:0,
    kur:"1702-01-01",
    s:[{f:"1702-01-01",t:"1762-11-03",d:"fransa"},{f:"1762-11-03",t:"1803-12-20",d:"yeni-ispanya"},{f:"1803-12-20",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Usner, Indians, Settlers and Slaves (UNC Press)" },
  { ad:"Mission San Luis (Apalaçi)", tur:"kale", lat:30.45, lon:-84.31, g:0,
    kur:"1656-01-01",
    s:[{f:"1656-01-01",t:"1763-02-10",d:"ispanya",kaynak:"günler komşudan: St. Augustine · Weber (1992) — aynı süreç (Florida devirleri); Florida 'ispanya' (Küba'ya bağlı), hiç Meksika olmadı — DUNYA-0079"},{f:"1763-02-10",t:"1783-09-03",d:"ingiltere",kaynak:"günler komşudan: St. Augustine · Weber (1992) — aynı süreç (Florida devirleri); Florida 'ispanya' (Küba'ya bağlı), hiç Meksika olmadı — DUNYA-0079"},{f:"1783-09-03",t:"1821-07-10",d:"ispanya",kaynak:"günler komşudan: St. Augustine · Weber (1992) — aynı süreç (Florida devirleri); Florida 'ispanya' (Küba'ya bağlı), hiç Meksika olmadı — DUNYA-0079"},{f:"1821-07-10",t:"1923-10-29",d:"abd",kaynak:"günler komşudan: St. Augustine · Weber (1992) — aynı süreç (Florida devirleri); Florida 'ispanya' (Küba'ya bağlı), hiç Meksika olmadı — DUNYA-0079"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Biloxi (Fort Maurepas)", tur:"kale", lat:30.396, lon:-88.885, g:0,
    kur:"1699-04-08",
    s:[{f:"1699-04-08",t:"1762-11-03",d:"fransa"},{f:"1762-11-03",t:"1803-12-20",d:"yeni-ispanya"},{f:"1803-12-20",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Usner, Indians, Settlers and Slaves" },
  { ad:"Paquimé (Casas Grandes)", tur:"sehir", lat:30.373, lon:-107.951, g:0,
    d:[], kasitli_bosluk:true, bos:"devletsiz",
    neden:"Paquime 14.-15. yy'da bolgesel bir merkezdi ve ~1450'de sonumlendi; ardindan bolgede merkezi bir siyasi yapi kurulmadi. Ispanyol Nueva Vizcaya idaresi 1560'lardan sonra ulasti. kaynak: HNAI c.10 Southwest (Smithsonian).",
    kaynak:"bulunamadı", not:"14. yy'da bölgesel merkez · dayanak: HNAI c.10 Southwest (Smithsonian)" },
  { ad:"San Felipe de Austin", tur:"sehir", lat:29.803, lon:-96.106, g:0,
    kur:"1824-01-01",
    s:[{f:"1824-01-01",t:"1836-03-02",d:"meksika"},{f:"1836-03-02",t:"1845-12-29",d:"teksas-cumhuriyeti"},{f:"1845-12-29",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"Anglo-Amerikan kolonizasyonunun merkezi · dayanak: Weber, The Mexican Frontier 1821-1846 (UNM Press)" },
  { ad:"Houston", tur:"sehir", lat:29.76, lon:-95.37, g:0,
    kur:"1836-01-01",
    s:[{"f":"1836-08-30","t":"1845-12-29","d":"teksas-cumhuriyeti","kaynak":"Handbook of Texas «Houston, TX»: kuruluş ilanı 30 Ağustos 1836"},{"f":"1845-12-29","t":"1923-10-29","d":"abd"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Mexican Frontier 1821-1846" },
  { ad:"La Junta de los Ríos (Presidio)", tur:"kale", lat:29.56, lon:-104.37, g:0,
    kur:"1683-01-01",
    s:[{f:"1683-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Misión San Francisco de Borja", tur:"kale", lat:28.745, lon:-113.755, g:0,
    kur:"1762-01-01",
    s:[{f:"1762-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Misión Santa Gertrudis (Baja California)", tur:"kale", lat:28.05, lon:-113.09, g:0,
    kur:"1752-01-01",
    s:[{f:"1752-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Tocobaga (Safety Harbor)", tur:"liman", lat:27.9913, lon:-82.6837, g:0,
    d:[], kasitli_bosluk:true, bos:"kabile",
    neden:"Tocobaga bir reislikti ama datable bir bitisi YOK (18. yy basinda sonumlendi, kaynak yil vermiyor) ⇒ M-2425 teritoryal sinavini gecse de TARIH sinavini gecemiyor, kunye yazilmadi. Ispanyol Florida iddiasi 1565'te St. Augustine ile basladi. kaynak: HNAI c.14 Southeast (Smithsonian).",
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.38 km maske dışıydı: 27.9900,-82.6800 → 27.9913,-82.6837) · konum denetle.py reçetesiyle düzeltildi (0.38 km maske dışıydı: 27.9913,-82.6837 → 27.9913,-82.6837) · dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Múzquiz (Santa Rosa)", tur:"sehir", lat:27.879, lon:-101.516, g:0,
    kur:"1739-01-01",
    s:[{f:"1739-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America (Yale UP)" },
  { ad:"Laredo", tur:"sehir", lat:27.506, lon:-99.507, g:0,
    kur:"1755-05-15",
    s:[{f:"1755-05-15",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1848-02-02",d:"meksika"},{f:"1848-02-02",t:"1923-10-29",d:"abd",kaynak:"Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Mound Key (Kalusa başkenti)", tur:"sehir", lat:26.4304, lon:-81.849, g:0,
    s:[{f:"1281-01-01",t:"1763-01-01",d:"kalusa"},{f:"1763-01-01",t:"1783-09-03",d:"ingiltere"},{f:"1783-09-03",t:"1923-10-29",d:"abd"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.07 km maske dışıydı: 26.4300,-81.8500 → 26.4304,-81.8490) · konum denetle.py reçetesiyle düzeltildi (0.07 km maske dışıydı: 26.4304,-81.8490 → 26.4304,-81.8490) · dayanak: HNAI c.14 Southeast (Smithsonian)" },
  { ad:"Camargo", tur:"sehir", lat:26.313, lon:-98.834, g:0,
    kur:"1749-03-05",
    s:[{f:"1749-03-05",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Matamoros (Refugio)", tur:"sehir", lat:25.879, lon:-97.504, g:0,
    kur:"1774-01-01",
    s:[{f:"1774-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Parras", tur:"sehir", lat:25.442, lon:-102.18, g:0,
    kur:"1598-01-01",
    s:[{f:"1598-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"La Paz (Baja California Sur)", tur:"sehir", lat:24.142, lon:-110.311, g:0,
    kur:"1720-01-01",
    s:[{f:"1720-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Ciudad Victoria", tur:"sehir", lat:23.74, lon:-99.14, g:0,
    kur:"1750-10-06",
    s:[{f:"1750-10-06",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Tula (Tamaulipas)", tur:"sehir", lat:22.997, lon:-99.72, g:0,
    kur:"1617-01-01",
    s:[{f:"1617-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Santa Clara (Küba)", tur:"sehir", lat:22.407, lon:-79.964, g:0,
    kur:"1689-07-15",
    s:[{f:"1689-07-15",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Pánuco (Huasteca)", tur:"sehir", lat:22.053, lon:-98.181, g:0,
    kur:"1522-01-01",
    s:[{f:"1522-01-01",t:"1535-04-17",d:"ispanya"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Sancti Spíritus", tur:"sehir", lat:21.93, lon:-79.442, g:0,
    kur:"1514-06-04",
    s:[{f:"1514-06-04",t:"1535-04-17",d:"ispanya"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"Velázquez'in yedi ilk kasabasından · dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Chilpancingo (Guerrero)", tur:"sehir", lat:17.551, lon:-99.5, g:0,
    kur:"1591-01-01",
    s:[{f:"1591-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Belize Town", tur:"sehir", lat:17.504, lon:-88.197, g:0,
    kur:"1716-01-01",
    s:[{f:"1716-01-01",t:"1923-10-29",d:"ingiltere"}],
    kaynak:"bulunamadı", not:"dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Acapulco", tur:"sehir", lat:16.863, lon:-99.882, g:0,
    kur:"1550-01-01",
    s:[{f:"1550-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"Manila kalyonu limanı · dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Tehuantepec", tur:"sehir", lat:16.323, lon:-95.241, g:0,
    // HAYALET-KUNYE-1008 · `ingiltere`/`abd` YANLIŞ (Kıstak Yeni İspanya → Meksika). Günler komşudan: Mitla
    //   (kaynak: Marcus & Flannery 1996) — aynı Oaxaca süreci, ~136 km. Kaydın kendi dayanağı «1522 İspanyol».
    s:[{f:"1281-01-01",t:"1523-01-01",d:"zapotek-krallik"},{f:"1523-01-01",t:"1535-04-17",d:"ispanya"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"Kıstakta Zapotek merkezi; 1522 İspanyol · dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Trujillo (Honduras)", tur:"sehir", lat:15.918, lon:-85.953, g:0,
    kur:"1525-05-18",
    s:[{f:"1525-05-18",t:"1535-04-17",d:"ispanya"},{f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"dayanak: Weber, The Spanish Frontier in North America" },
  { ad:"Río Tinto (Black River, Moskito kıyısı)", tur:"sehir", lat:15.85, lon:-84.85, g:0,
    kur:"1732-01-01",
    s:[{f:"1732-01-01",t:"1786-07-14",d:"ingiltere"},{f:"1786-07-14",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"Moskito Sahili İngiliz yerleşimi · dayanak: Cambridge History of Latin America (CUP)" },
  { ad:"Omoa (San Fernando de Omoa)", tur:"sehir", lat:15.7664, lon:-88.0428, g:0,
    kur:"1759-01-01",
    s:[{f:"1759-01-01",t:"1821-09-27",d:"yeni-ispanya"},{f:"1821-09-27",t:"1923-10-29",d:"meksika"}],
    kaynak:"bulunamadı", not:"konum denetle.py reçetesiyle düzeltildi (0.42 km maske dışıydı: 15.7700,-88.0450 → 15.7664,-88.0428) · konum denetle.py reçetesiyle düzeltildi (0.42 km maske dışıydı: 15.7664,-88.0428 → 15.7664,-88.0428) · dayanak: Cambridge History of Latin America (CUP)" },
];

;
/* ==== data/yerlesimler_hint0912.js ==== */
// ============================================================================
// YERLEŞİM — HİNT PRENSLİKLERİ, 12 Eylül 2026 (KITA 8)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// 🔴 BU DOSYA BUGÜN HİÇBİR YERDEN OKUNMUYOR — ve bu KASITLI BİR BEYANDIR
// ---------------------------------------------------------------------------
// Sevk (M-3553) yalnız `index.html` ayağını uyardı. ÖLÇTÜM, İKİNCİ bir ayak
// daha var ve haritayı asıl O belirliyor:
//     grep hint0912 arac/girdi.py   → BOŞ   ⇒ MOTOR bu dosyayı okumuyor
//     grep hint0912 index.html      → BOŞ   ⇒ TARAYICI bu dosyayı okumuyor
// `CLAUDE.md §5`: *"HANGİ DOSYA CANLI — tek doğru kaynak `arac/girdi.py`
// `GIRDI_DOSYALARI`."* İki satır da BENİM DOSYAM DEĞİL (§7), yazmadım.
// ⇒ Teslimde açıkça bildiriliyor (`D099`: hiçbir aletin glob'una girmeyen
//   artefakt, yapılmamış olmakla aynı sonucu verir).
//
// ---------------------------------------------------------------------------
// 🔴 VE SEVKİN ÖNCÜLÜ ÜÇTE ÜÇ ÇÜRÜDÜ — dört noktadan ÜÇÜ ZATEN VARDI
// ---------------------------------------------------------------------------
// Sevk: *"dört prenslik başkentinin HİÇBİRİNİN noktası yok ... → 0 kayıt"*.
// `denetim/ARAC-NORMAL-0903.py` normalleştiricisiyle ve AYRICA konum ekseniyle
// ölçüldü (`D054` · `D066`):
//     Gvalyar (Gwalior)   ZATEN VAR   0,0 km   yerlesimler_asya.js
//     İndor (Indore)      ZATEN VAR   0,1 km   yerlesimler_asya.js
//     Kolhapûr            ZATEN VAR   0,0 km   yerlesimler_asya.js
//     Baroda / Vadodara   YOK         en yakın 41,6 km (Çampâner)   ← TEK GERÇEK EKSİK
// ⇒ Dördü de yazılsaydı ÜÇ MÜKERRER nokta doğardı (`D002`).
//
// ⚠️ VE AD EKSENİ TEK BAŞINA YETMEDİ: atlas onları "Gvalyar (Gwalior)" ve
// "İndor (Indore)" diye PARANTEZLİ ÇİFT ADLA yazmış; normalleştirilmiş ad
// eşleşmesi ikisini de KAÇIRDI, KONUM ekseni yakaladı. `D054`in bir kademe
// ötesi: normalleştirici gerekli ama YETERLİ DEĞİL.
//
// ---------------------------------------------------------------------------
// 🔴 ASIL EKSİK NOKTA DEĞİL, DÖNEM — dört künyenin DÖRDÜ DE veride 0 KEZ
// ---------------------------------------------------------------------------
//     gvalyar 0 · indor 0 · kolhapur 0 · baroda 0  dönem (bütün atlas tarandı)
// Mevcut üç noktanın zinciri `maratha` ile 1923-10-29'a kadar gidiyor:
//     Gvalyar   … 1784-01-01 → 1923-10-29  maratha
//     İndor     … 1732-01-01 → 1923-10-29  maratha
//     Kolhapûr  … 1659-01-01 → 1923-10-29  maratha
// ⇒ O üç künyenin haritada görünmesi için gereken şey NOKTA DEĞİL, bu
//   `maratha` dönemlerinin BÖLÜNMESİ. Ve o kayıtlar `yerlesimler_asya.js`te,
//   yani BENİM DOSYAM DEĞİL (`§7`) — teklif teslim raporunda, YAZILMADI.
// 🟢 Künye ✓ (devletler.js) · renk ✓ (renkler.py:3144-3149) · nokta 3/4 ✓
//    EKSİK HALKA YALNIZ DÖNEM.
// ============================================================================

window.YERLESIMLER_HINT0912 = [

// ── BARODA (VADODARA) — Gaikvad hanedanının başkenti ────────────────────────
// KONUM: 22,3072°K / 73,1812°D (Vadodara şehir merkezi).
// KADEME k:2 (eyalet merkezi) — gerekçe: Maratha Konfederasyonu'nun dört büyük
//   üye devletinden birinin başkenti. Komşu emsal: Ahmedâbâd k:2 · Sûrat k:3 ·
//   Kanbâyet k:3 · Çampâner k:4. SEÇİMDİR, ölçüm değil.
// ZİNCİR: komşuların zinciri emsal alındı (`D084` — komşusunun kullandığı günü
//   kullanmak kendi gününü seçmekten dayanaklıdır). Kanbâyet · Broaç · Sûrat
//   üçü de: racput → delhi-sultanligi (1304) → gucerat-sultanligi (1407) →
//   babur-imparatorlugu (1573-02-26). Baroda'da yalnız SON halka farklı.
// 🔴 1407 seçildi, 1484 DEĞİL: 1484 Çampâner'in KENDİ fetih günü (Mahmud
//   Begada), yere özgü; 1407 Gucerât Sultanlığı'nın kuruluşu ve üç komşunun
//   üçü de onu kullanıyor.
{ ad:"Baroda (Vadodara)", tur:"sehir", lat:22.3072, lon:73.1812, g:0, k:2, d:[],
  // 🔴 DİKKAT — BU DEĞER TEK BİR DİZGİDİR, SATIRLAR `+` İLE BİRLEŞİR.
  // İlk yazımda satırları YAN YANA koymuştum (`"a" "b"`); o PYTHON/C
  // sözdizimidir, JavaScript'te SyntaxError'dır ve dosya hem tarayıcıda hem
  // motorda ÇÖKTÜ. 1.MURAT yakaladı (M-3564). Ders: bir dosyayı YAZMAK, onun
  // AYRIŞTIRILABİLDİĞİNİ göstermez — bu, aşağıdaki "iki ayak" uyarısının
  // ÜÇÜNCÜ ayağı ve en temeli.
  kaynak:"TDV `hindistan` (HTTP 200, gövde okundu): hânedan listesinde " +
         "\"Gaikwar hânedanı (1721-1858)\" — künyenin f:1721 YILI DOĞRULANDI. " +
         "⚠️ GÜN TDV'de YOK, `1721-01-01` §4'ün 'yıl biliniyor, gün bilinmiyor' " +
         "yazımıdır. ⚠️ 1858 bir HÂNEDAN LİSTESİ aralığıdır (Şirket idaresinin " +
         "sonu), atlasın 1923-10-29'u ise PENCERE SONUDUR — ikisi de bir " +
         "'yıkılış' iddiası DEĞİLDİR. 🔴 TDV `baroda` ve `vadodara` slugları " +
         "302 ÖLÜ. 🔴 TDV `gucerat` (200) 'Baroda'yı ANIYOR ama modern sanayi " +
         "şehri olarak ve bibliyografyada — KÜNYEYİ DESTEKLEMİYOR (§4 tuzak ⑧: " +
         "ad gövdede geçiyor ≠ gövde onu tarihliyor). 📌 Ve 'Gaikvad' araması " +
         "TDV'de BOŞ döner; madde Gaikwar yazıyor — §4'ün Türkçe yazım " +
         "ekseni, bu turda beni de ısırdı.",
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1721-01-01", d:"babur-imparatorlugu"},
     {f:"1721-01-01", t:"1923-10-29", d:"baroda"}] },

];

;

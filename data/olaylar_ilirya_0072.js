// =====================================================================
// OLAYLAR_ILIRYA0072 — Napolyon/İlirya dönemi · Değişmez 2s borcu
// ENKLAV-0072 oturumu · 20 Eylül 2026 · görevlendiren 1.MURAT (M-4811)
// =====================================================================
// NİÇİN VAR: Atlasta 1806-1813 arası Fransız/İlirya idaresi 42 Adriyatik
// yerleşiminde HİÇ YOKTU — kesintisiz `avusturya` yazıyordu; aynı kuşakta
// Fransa yazan tek kayıt Dubrovnik'ti (ENKLAV-0072 ölçümü, M-4810).
// 29 kayıtlık düzeltme yazılmadan ÖNCE bu dört madde iner, çünkü
// `denetle.py`de YIL-TEMSİLÎ BORÇ tavanı 151 ve bugünkü değer de TAM 151:
// sıfır pay. Maddesiz yazım tavanı aşar ve İHLAL sayılır.
//
// ⚠️ HENÜZ CANLI DEĞİL — `index.html` satırını 1.MURAT yazacak.
// `denetle.py` `data/olaylar*.js`i glob'la okuduğu için dosya açılır
// açılmaz DENETİM evrenine girer; tarayıcıya ise `index.html` ile girer.
//
// 🔴 YER/TARAF ŞARTI (`denetle.py:1273`, DENETIM-YER-0920, 20 Eylül 2026):
// takvim yakınlığı bir kırılmayı ARTIK KAPATMIYOR. Madde ya kırılan YERİ
// ya da TARAFLARI anmalı. Ölçüldü: dört tarihin ±30 gününde duran MEVCUT
// maddelerin hepsi alâkasız (1806-02-01'e -6g "Böğürdelen'in Kara Yorgi'ye
// teslimi", 1806-01-01'e +0g "Mekke'nin Vehhâbîlere kaybı", 1813-01-01'e
// +22g "Mekke geri alındı"). Bu yüzden her maddenin `yer` alanı o
// kırılmanın BÜTÜN yerleşimlerini tek tek sayar — kısaltma yapılmadı.
//
// 🔴 KAYNAK: TDV'de Boka/Dalmaçya bu tanecikte YOK (arama "Herceg Novi":
// madde başlığı 0; `hersek` → `bosna-hersek`, kapsamıyor). CLAUDE.md §4'ün
// "TDV'nin kapsamadığı coğrafyada akademik kaynak meşrudur" hükmüyle
// Hrvatska enciklopedija (Leksikografski zavod Miroslav Krleža) kullanıldı
// — bu depoda emsali var (Dubrovnik kaydının `kaynak:` alanı). Hâil maddesi
// TDV'dendir. Vikipedi dayanak DEĞİLDİR.
//
// 🔴 HASSASİYET (D210 — tarih uydurma yok):
//   1806-02-01 → kaynağın AY hassasiyeti ("u veljači 1806"), metinde açık.
//   1806-01-01 · 1813-01-01 · 1779-01-01 → kaynağın YIL hassasiyeti.
//   `YYYY-01-01` biçimi UYDURMA DEĞİL BEYANDIR: "yıl biliniyor, gün
//   bilinmiyor" demektir ve `denetle.py` bunları ayrı deftere (YIL-TEMSİLÎ
//   BORÇ) yazar. Gövdede de söylenmiştir.
//
// 🔴 KAYNAK KENDİYLE ÇELİŞİYOR (D211 ⑥ — gizlenmedi, her maddede beyan):
//   ilk Avusturya idaresinin bitişi: "Boka kotorska" 1806 ↔ "Herceg Novi" 1805
//   Schönbrunn günü: "Dalmacija" 14. X. 1809 ↔ "Istra" 18. X. 1809
//   Kvarner adaları: "Krk" İtalya Krallığı 1806→İlirya 1809 ↔ "Cres" Fransa
//     1805-14 ↔ "Rab" "1805'te İlirya Eyaletleri" (SONUNCUSU ANAKRONİK:
//     aynı yayıncının `ilirske-pokrajine` maddesi eyaletleri 1809'da kurar)
//   Hâil: TDV "Reşîdîler" 1835 ↔ TDV "İbnü'r-Reşîd" 1251/1835-36
// =====================================================================

window.OLAYLAR_ILIRYA0072 = [

// ── 1806 Şubat · Dalmaçya Fransız idaresine geçti ────────────────────
{ t:"1806-02-01", k:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Zadar (Zara)",
  b:"Dalmaçya'nın Fransız idaresine geçişi — Pojun (Bratislava) Antlaşması'nın uygulanması",
  gun:"Şubat 1806 (kaynak AY hassasiyetinde; gün vermiyor)",
  yer:"Zadar (Zara), Split (Spalato), Şibenik (Sebenico), Knin, Nadin, Vrana (Urana), Sin (Sinj), Klis, Pag (Pago), Uzunada (Dugi Otok), Brakya (Brač), Hvar (Lesina), Vis (Lissa), Korçula (Kurzola), Mliyet (Mljet), Dalmaçya",
  kisiler:"Napolyon Bonapart, Vicenzo Dandolo",
  etiket:["siyaset","toprak-kayip","konu-siyasi"],
  d:"26 Aralık 1805 Pojun (Bratislava/Pressburg) Antlaşması Avusturya'yı İstriya, Dalmaçya ve bütün Adriyatik adalarından vazgeçmeye zorladı. Fransa idareyi Şubat 1806'da fiilen devraldı; Zadar genel proveditör merkezi olarak kaldı ve 1806-1810 arasında bu görevi Venedikli Vicenzo Dandolo yürüttü. Dalmaçya 1809 Schönbrunn Antlaşması'ndan sonra İlirya Eyaletleri'ne katıldı. 1797'den beri süren ilk Avusturya idaresi böylece sona erdi — atlasta bu dönem bugüne kadar kesintisiz Avusturya görünüyordu.",
  kaynak:"Hrvatska enciklopedija (LZMK) `dalmacija` — AYNEN: \"U veljači 1806. Francuska preuzima vlast u Dalmaciji.\" ve Pojun için \"26. XII. 1805\" · LZMK `zadar` — AYNEN: \"Uspostavom francuske uprave 1806-13. Zadar je ostao sjedištem generalnoga providura.\" · hassasiyet: AY (Şubat 1806) · TDV bu coğrafyayı bu tanecikte KAPSAMIYOR (CLAUDE.md §4)",
  ic_not_d:"15 Dalmaçya kaydının tamamı BÖLGE hükmüyle sınıflandı: kaynağın kendi birimi burada şehir değil bölgedir (\"Dalmacija\", \"svih jadranskih otoka\"). Şehir taneciğinde ayrı tanıklık YALNIZ Zadar'da var." },

// ── 1806 · Kvarner adaları İtalya Krallığı'na, Boka Rus idaresine ────
{ t:"1806-01-01", k:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"Krk (Veglia)",
  b:"Kvarner adalarının Napolyon İtalya Krallığı'na, Boka Kotorska'nın Rus idaresine geçişi",
  gun:"1806 (kaynak YIL hassasiyetinde; gün bilinmiyor — `YYYY-01-01` beyandır, uydurma değil)",
  yer:"Krk (Veglia), Cres (Cherso), Rab (Arbe), Herseknovi (Herceg Novi), Kotor (Cattaro), Boka Kotorska, Kvarner",
  kisiler:"Napolyon Bonapart, Dmitri Senyavin",
  etiket:["siyaset","toprak-kayip","konu-siyasi"],
  d:"Pojun Antlaşması'ndan sonra Kvarner adaları — Dalmaçya'dan FARKLI olarak — doğrudan Fransa'ya değil Napolyon'un İtalya Krallığı'na bağlandı; İlirya Eyaletleri'ne ancak 1809'da girdiler. Boka Kotorska'da ise Avusturya idaresi sona erdi ve 1806-1807 arasında Rus idaresi kuruldu; Boka Fransa'ya ancak 1807'de geçti. Bu iki ayrım atlasın tek bir 'Fransa' penceresiyle karşılanamaz.",
  kaynak:"LZMK `krk-otok` — AYNEN: \"Požunskim mirom 1806. ušao u sastav Napoleonove Kraljevine Italije, a 1809. u sastav Ilirskih pokrajina.\" · LZMK `boka-kotorska` — AYNEN: \"prva austrijska 1797-1806; ruska 1806-07. i francuska 1807-13\" · hassasiyet: YIL",
  ic_not_d:"⚠️ ÇELİŞKİ BEYANI: Cres kendi maddesinde \"francuska (1805-14) uprava\", Rab kendi maddesinde \"1805. bio priključen Napoleonovim Ilirskim pokrajinama\" diyor. Rab'ınki ANAKRONİK — aynı yayıncının `ilirske-pokrajine` maddesi eyaletleri 1809'da kurar. Üç adadan YALNIZ Krk'ın anlatısı kendi içinde ve `ilirske-pokrajine` ile tutarlı; bu yüzden bölgesel model Krk'tan alındı ve fark burada YAZILDI." },

// ── 1813 · Avusturya İlirya'yı ve Dalmaçya'yı geri aldı ──────────────
{ t:"1813-01-01", k:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"Zadar (Zara)",
  b:"Avusturya'nın İlirya Eyaletleri'ni ve Dalmaçya'yı geri alması — Napolyon idaresinin sonu",
  gun:"1813 (kaynaklar YIL hassasiyetinde; \"potkraj 1813\" = 1813 sonu)",
  yer:"Zadar (Zara), Split (Spalato), Şibenik (Sebenico), Knin, Nadin, Vrana (Urana), Sin (Sinj), Klis, Pag (Pago), Uzunada (Dugi Otok), Brakya (Brač), Hvar (Lesina), Vis (Lissa), Korçula (Kurzola), Mliyet (Mljet), Krk (Veglia), Cres (Cherso), Rab (Arbe), Karlovac, Sisak, Gospić, Udbina, Drežnik (Drežnik Grad), Cetin (Cetingrad), Kostayniçe (Kostajnica), Ljubljana, Trieste, İlirya Eyaletleri, Dalmaçya",
  kisiler:"Napolyon Bonapart",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"1813 sonunda Habsburg birlikleri Sava'nın güneyindeki bölgeyi geri aldı ve eski sınır örgütlenmesi yeniden kuruldu; Avusturya ordusu Ekim 1813'te İstriya'ya girdi. Karlovac o tarihten sonra Avusturya İlirya Krallığı'nın parçası oldu. Fransız idaresinin Dalmaçya'daki dönemi de 1813'te kapandı. Bölgenin Avusturya'ya aidiyeti 1814 Paris Barışı ve 1815 Viyana Kongresi kararlarıyla resmen onaylandı.",
  kaynak:"LZMK `vojna-krajina` — AYNEN: \"Potkraj 1813. habsburške su trupe osvojile to područje te je obnovljena stara organizacija pograničja.\" · LZMK `karlovac` — AYNEN: \"Nakon odlaska Francuza, od 1813., bio je u sastavu austrijskoga Kraljevstva Ilirije.\" · LZMK `istra-poluotok` — AYNEN: \"Austrijska vojska u listopadu 1813. ušla je u Istru.\" · LZMK `zadar` — \"francuske uprave 1806-13\" · hassasiyet: YIL",
  ic_not_d:"Boka Kotorska bu maddenin DIŞINDADIR: LZMK `boka-kotorska` ikinci Avusturya idaresini \"od 1814\" diye başlatır, bu yüzden Herseknovi ve Kotor'un dönüş kırılması 1814-01-01'dir. 1813 sonbaharı - 1814 Haziran arasındaki Karadağ/İngiliz ara idaresi HİÇBİR kaynakta bulunamadı, yazılmadı." },

// ── 1779 · Hâil'de İbn Ali emirliği ──────────────────────────────────
{ t:"1779-01-01", k:"fetih", onem:2, dunya:1, kapsam:"dis", yer_id:"Hâil",
  b:"Suûdî-Vehhâbî güçlerinin Hâil emirliğini ele geçirmesi — yönetim Abde aşiretinden İbn Ali ailesindeydi",
  gun:"1779 (kaynak YIL hassasiyetinde; gün bilinmiyor — `YYYY-01-01` beyandır)",
  yer:"Hâil, Cebelişemmer",
  kisiler:"İbn Ali ailesi (Abde aşireti), Abdullah b. Reşîd",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  d:"Birinci Suûdî Devleti'nin güçleri Hâil emirliğini ele geçirdiğinde şehrin yönetimi Şemmer kabilesinin Abde aşiretinden İbn Ali ailesindeydi. Bu aile Hâil'i 1835'te Abdullah b. Reşîd'in emirliği ele geçirmesine kadar yönetti; Reşîdîler hanedanı ancak o tarihte kuruldu. Atlasta Hâil bugüne kadar 1836'ya kadar SAHİPSİZ görünüyordu, oysa kaynak 1820'de şehrin emîrini adıyla veriyor.",
  kaynak:"TDV `residiler` — AYNEN: \"1779'da Suûdî-Vehhâbî güçleri Hâil emirliğini ele geçirdikleri sırada yönetim Abde aşiretinden İbn Ali ailesindeydi.\" ve \"1835'te Abdullah b. Reşîd'in Hâil emirliğini ele geçirmesiyle sonuçlandı.\" · TDV `ibnur-resid` — AYNEN: \"Muhammed b. Abdülmuhsin öldürüldü; yerine kardeşi Sâlih geçti (1820).\" · hassasiyet: YIL",
  ic_not_d:"⚠️ 1779 bir KURULUŞ günü DEĞİLDİR: kaynak 1779'da yönetimin ZATEN İbn Ali ailesinde olduğunu söyler — terminus ante quem. Emirliğin kuruluş yılı BULUNAMADI (D210). ⚠️ ÇELİŞKİ BEYANI: Abdullah b. Reşîd'in Hâil'i alışı `residiler`de 1835, `ibnur-resid`de 1251/1835-36." }

];

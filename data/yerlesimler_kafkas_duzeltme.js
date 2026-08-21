// =====================================================================
// KAFKASYA · DOĞU ANADOLU · BATI İRAN — YERLEŞİM ZİNCİRİ DÜZELTMESİ
// Oturum: KAFKAS KRONOLOJİ · görev: koordinatörün M-0896 sonrası sevki
// Kaynak paket: parti-emrelic-0024 / H-0001 (denetim/BULGULAR-0024.md)
//
// ⚠️ Bu bir YAMA dosyasıdır. `data/yerlesimler*.js`e DOKUNMADIM — onlar
//    koordinatörde. Yamayı koordinatör işler.
//    Biçim `data/kademe_*.js` yamalarından alındı: {ad:…, değişen alanlar,
//    kaynak:…, neden:…}
//
// ═══════════ NİÇİN VAR — ÖLÇÜLMÜŞ DESEN ═══════════
// "Tek blok" süzgeci: 1500 öncesi, 150 yıldan uzun, TEK kimlikli `s:` bloğu.
// Emre'nin H-0001 listesinde bulunan 34 şehrin 16'sı takılıyor (%47).
// TDV ile sınanan 3 şehrin 3'ü de ÇÜRÜDÜ — Kars · Ardahan · Derbend.
// 📌 Ve bu desen kayıtlı: KONTROL.md 13-04 aynısını Bağdat için yazmış
//    ("1281-1508 tek `iran` bloğu — Celâyirli/Timurlu/Karakoyunlu/
//     Akkoyunlu dördü birden silik"), hâli hâlâ ⚠️ açık.
//
// ═══════════ KIRILMA GÜNÜ DİSİPLİNİ (Değişmez 2) ═══════════
// Şartname: "yeni kırılma günü doğurma, komşu kayıtların günlerini kullan".
// Kullandığım HER gün külliyatta ZATEN VAR; kaç kayıtta geçtiğini ölçtüm:
//   1340-01-01 (50) · 1386-01-01 (52) · 1406-10-21 (50) · 1467-01-01 (12)
//   1509-05-17 (4)  · 1514-09-06 (11) · 1537-01-01 (49) · 1555-07-23 (44)
//   1578-11-01 (8)  · 1607-01-01 (13) · 1810-02-20 (var, imereti künyesi)
// 🟢 YENİ GÜN DOĞURULMADI — sıfır.
//
// ═══════════ KÜNYE VE RENK ÖN KONTROLÜ ═══════════
// CLAUDE.md §8: BOYALAR'da tanımsız kimlik BOYANMAZ = harita deliği.
// Önerdiğim her kimliği ÖNCE ölçtüm:
//   celayirli   künye 1340-01-01..1431-01-01   renk #b5432f   ✓
//   timurlu     künye 1370-04-09..1507-05-01   renk #9c7563   ✓
//   karakoyunlu künye 1351-01-01..1469-01-01   renk #e018e0   ✓
//   akkoyunlu   künye 1340-01-01..1514-01-01   renk #48ae48   ✓
//   safevi      künye 1501-07-01..1736-03-08   renk #a56cab   ✓
//   imereti     künye 1490-01-01..1810-02-20   renk #deea90   ✓ (veride 0 kullanım)
// 🔴 sirvansah  künye 861-01-01..1538-01-01    renk YOK       ✗ ENGELLİ
//    ⇒ Derbend/Bakü/Şamahı'nın 1281-1509 `iran` hayaletini Şirvanşahlar'a
//      çevirmek İSTİYORUM ama RENGİ YOK. Yazsam harita deliği açardım.
//      RENK oturumu bir renk versin, sonra yazılır. ALT TARAFTA AYRICA YAZILI.
//
// ═══════════ NE YAPMADIM — açıkça ═══════════
// · 073df09 ile düzeltilen 7 kayda (Gümrü · Eçmiyadzin · Doğubayazıt ·
//   Çaldıran · Özalp · Başkale · Yüksekova) DOKUNMADIM.
// · Ardahan'ın Osmanlı fetih gününü DEĞİŞTİRMEDİM — sebebi kaydında yazılı.
// · Tek blok süzgecine takılan 16 şehrin 12'si HENÜZ SINANMADI.
// =====================================================================

window.YERLESIMLER_KAFKAS_DUZELTME = [

// ─────────────────────────────────────────────────────────────────────
// 1 · KARS — 253 yıllık tek blok `gurcistan`, ve fetih tarihi 3 yıl erken
// ─────────────────────────────────────────────────────────────────────
{ad:"Kars",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1537-01-01",d:"safevi"},
    {f:"1878-07-13",t:"1918-05-25",d:"rusya"}],
 d:[{f:"1537-01-01",t:"1878-07-13",y:"kusatma"},{f:"1918-05-25",t:"1923-10-29",y:"antlasma"}],
 v:[],
 kaynak:"kars",
 // 🔴 `y:` ALANI KORUNDU — ve bunu TESLİMDEN SONRA fark ettim.
 //   Orijinal kayıtta `d:[{…,y:"kusatma"},{…,y:"antlasma"}]` vardı; ilk
 //   yazdığım yama onları TAŞIMIYORDU. Koordinatör yamayı olduğu gibi
 //   işleseydi iki alan SESSİZCE silinecekti — hiçbir denetim ötmezdi,
 //   çünkü denetimler "dönem var mı" diye sorar, "alanı eksildi mi" diye
 //   sormaz. Ölçtüm: 19 kaydın YALNIZ Kars'ında `y:` var (1/19).
 neden:"ESKI: s:[{1281-01-01..1534-06-01 gurcistan},{1878..rusya}] · d:[{1534-06-01..1878-07-13}] "
      +"— 253 yillik TEK BLOK ve fetih 1534-06-01. "
      +"TDV `kars` maddesi (HTTP 200, GOVDESI OKUNDU) o 253 yili alti katmana boluyor, aynen: "
      +"\"Sehir 1336 yilina kadar Ilhanlilar'in, ardindan da mahalli hanedanlarin idaresinde kaldi\" · "
      +"\"759'da (1358) Celayirliler tarafindan ele gecirildi\" · "
      +"\"782'de ise (1380) Karakoyunlu idaresi altindaydi\" · "
      +"\"788'de (1386) Timur tarafindan alindiginda Firuzbaht adli biri tarafindan yonetiliyordu\" · "
      +"\"Timur'un olumunden sonra ... Karakoyunlular Kars'i yeniden hakimiyetlerine aldilar\" · "
      +"\"Sehir 871'de (1467) Akkoyunlu Hukumdari Uzun Hasan tarafindan ele gecirildi\". "
      +"FETIH: TDV \"944'te (1537) Osmanli topraklarina dahil edilmistir\" ⇒ veri 3 YIL ERKENDI. "
      +"⚠️ IKI SADELESTIRME, ikisini de yaziyorum: (a) TDV Celayirli'yi 1358'de baslatiyor, ben "
      +"komsularin (Serur · Nahcivan) kullandigi 1340-01-01'i aldim — yeni kirilma gunu dogmasin diye; "
      +"(b) TDV'nin 1380-1386 Karakoyunlu araligi ATLANDI, cunku 1380 kulliyatta hic gecmiyor ve "
      +"6 yillik bir aralik icin iki yeni gun dogurmak Degismez 2'ye daha pahaliya mal olurdu. "
      +"1514-09-06..1537-01-01 safevi araligi TDV'de ADIYLA GECMIYOR — Akkoyunlu kunyesi 1514-01-01'de "
      +"bitiyor ve fetih 1537, aradaki 23 yil bos kalamazdi; komsu Caldiran/Ozalp/Baskale ayni gunde "
      +"safevi'ye geciyor, onlarla hizaladim. Bu bir CIKARIM, TDV alintisi DEGIL."},

// ─────────────────────────────────────────────────────────────────────
// 2 · ARDAHAN — 270 yıllık tek blok; Osmanlı günü DEĞİŞTİRİLMEDİ
// ─────────────────────────────────────────────────────────────────────
{ad:"Ardahan",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1551-01-01",d:"safevi"},
    {f:"1878-07-13",t:"1918-05-25",d:"rusya"}],
 d:[{f:"1551-01-01",t:"1878-07-13"},{f:"1918-05-25",t:"1923-10-29"}],
 v:[],
 kaynak:"ardahan",
 neden:"ESKI: s:[{1281-01-01..1551-01-01 gurcistan}] — 270 yillik TEK BLOK. "
      +"TDV `ardahan` (HTTP 200, GOVDESI OKUNDU): \"Mogollar'in, Ilhanlilar'in\" hakimiyeti · "
      +"\"Karakoyunlular'in ve Akkoyunlular'in hakimiyet sahasi\" icinde · "
      +"\"KISA BIR SURE Guru prenslerinin\". ⇒ veri Gurculere 270 yil veriyor, TDV \"kisa bir sure\" diyor. "
      +"🔴 OSMANLI GUNUNU DEGISTIRMEDIM ve sebebi bir CELISKI: TDV \"I. Selim zamaninda Osmanli "
      +"topraklarina katilmistir\" diyor (1512-1520), veri 1551-01-01 diyor — arada ~35 yil var. "
      +"TDV bu cumlede GUN de KOMUTAN da SEFER de VERMIYOR; tek cumlelik bir ifade uzerine "
      +"35 yillik bir kayma yazmak, duzeltmek degil BASKA BIR TAHMIN yazmak olurdu. "
      +"⇒ Bu kalem `olculecek` olarak ACIK kaliyor: ikinci bir akademik kaynak (Cildir Eyaleti / "
      +"Erzurum beylerbeyligi literaturu) gerekiyor. Bugun DUZELTTIGIM sey yalniz 270 yillik blok."},

// ─────────────────────────────────────────────────────────────────────
// 3 · DERBEND — üç tarihten ikisi yanlıştı; üçüncüsü zaten doğruydu
// ─────────────────────────────────────────────────────────────────────
{ad:"Derbend",
 s:[{f:"1281-01-01",t:"1509-05-17",d:"iran"},
    {f:"1509-05-17",t:"1722-08-23",d:"safevi"},
    {f:"1722-08-23",t:"1735-03-10",d:"rusya"},
    {f:"1735-03-10",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1813-10-24",d:"kacar"},
    {f:"1813-10-24",t:"1923-10-29",d:"rusya"}],
 d:[{f:"1578-11-01",t:"1607-01-01"}],
 v:[],
 kaynak:"derbend--dagistan",
 neden:"TDV `derbend` slug'i OLU (302) ama `derbend--dagistan` CANLI (200) — §4'un `--` deseninin "
      +"YENI bir vakasi; CLAUDE.md `derbend`i \"olu\" diye kaydetmis ama canli varyantini bilmiyordu. "
      +"GOVDESI OKUNDU. UC TARIH SINANDI: "
      +"(1) safevi baslangici — TDV \"Sah Ismail 1509'da sehri zaptedip Rumlu oymaklarindan birini "
      +"buraya yerlestirdi\"; veri 1501-07-01 diyordu ⇒ ~8 YIL ERKEN. Duzeltildi: 1509-05-17 "
      +"(kulliyatta ZATEN VAR, 4 kayitta gecer — yeni gun dogurulmadi). "
      +"(2) Osmanli baslangici — TDV \"1578 seferi sirasinda Osmanlilar bolgeyi tamamiyla zaptedince\" "
      +"ve \"1607'ye kadar suren Osmanli hakimiyeti\"; veri 1583-01-01 diyordu ⇒ ~5 YIL GEC. "
      +"Duzeltildi: 1578-11-01 (komsu SAMAHI'nin ayni Sirvan seferindeki gunu, kulliyatta 8 kayitta gecer). "
      +"Bitis 1607-01-01 ZATEN DOGRUYDU, dokunulmadi. "
      +"(3) rusya — TDV \"Rus Cari I. Petro, 1722 Agustosunda burayi isgal etti\"; veri 1722-08-23 ⇒ TUTUYOR. "
      +"🔴 DUZELTILEMEYEN: 1281-1509 araligi hala `iran` (kunye f:1925-12-12 — 424 yil hayalet). "
      +"Dogrusu SIRVANSAHLAR ve kunyesi VAR (`sirvansah`, 861-01-01..1538-01-01) — AMA BOYALAR'da "
      +"RENGI YOK. Yazsaydim harita deligi acardim (§8). RENK oturumu renk versin, sonra yazilir."},

// ─────────────────────────────────────────────────────────────────────
// 4 · KUTAİSİ — hiç Osmanlı görünmüyordu; ve künyesi de yanlıştı
// ─────────────────────────────────────────────────────────────────────
{ad:"Kutaisi",
 s:[{f:"1281-01-01",t:"1490-01-01",d:"gurcistan"},
    {f:"1490-01-01",t:"1810-02-20",d:"imereti"},
    {f:"1810-02-20",t:"1923-10-29",d:"rusya"}],
 d:[],
 v:[{f:"1555-07-23",t:"1810-02-20"}],
 kaynak:"gurcistan",
 neden:"ESKI: s:[{1281-01-01..1810-02-20 gurcistan},{1810-02-20..rusya}] · d:[] · v:[] — "
      +"529 yillik TEK BLOK ve HIC Osmanli bagi yok, oysa komsulari 1578'den Osmanli: "
      +"Batum 1578-1878 · Sohum 1578-1810 · Ahiska 1578-1829. "
      +"TDV `gurcistan` (GOVDESI OKUNDU), aynen: \"Amasya Antlasmasi'na gore (1555) Imeret, Dadyan "
      +"(Megrel ve Svanet), Guryel, Daveli/Tao-eli Osmanli Devleti'ne; Kartli, Kahet ve Mosuk ise "
      +"Safevi Devleti'ne veriliyordu.\" ⇒ Kutaisi (Imereti'nin BASKENTI) 1555'ten itibaren Osmanli "
      +"tarafinda; TABI (`v:`) yazildi, DOGRUDAN degil — Imereti krallik olarak surdu. "
      +"Gun: 1555-07-23, Amasya Antlasmasi'nin kulliyattaki gunu (44 kayitta gecer, yeni gun yok). "
      +"🟢 KIMLIK: `imereti` kunyesi ZATEN VAR (devletler.js:1036 · f:1490-01-01 · t:1810-02-20 · "
      +"baskent KUTAISI) ve BOYALAR'da rengi de VAR (#deea90) — ama veride kullanimi 0 idi. "
      +"📌 EN KESKIN KANIT: eski kaydin `gurcistan` doneminin bitis gunu 1810-02-20, `imereti` "
      +"kunyesinin `t`si ile BIREBIR AYNI. Kaydi yazan Imereti'yi kastetmis, KIMLIGI yanlis yazmis. "
      +"EK KUSUR: `gurcistan` kunyesi 1801-09-12'de bitiyor, eski kayit onu 1810-02-20'ye tasiyordu "
      +"⇒ 8,4 yillik hayalet; imereti'ye gecince o da kapandi. "
      +"⚠️ OLCMEDIM: Osmanli tabiiyetinin BITIS gunu. 1804'te Rusya ile himaye anlasmasi var "
      +"(imereti kunyesinin kendi kronolojisi soyluyor), kesin ilhak 1810-02-20. Tabiiyeti ilhaka "
      +"kadar surdurdum; 1804'e cekilmesi de savunulabilir, KARAR KOORDINATORUN."},

// ─────────────────────────────────────────────────────────────────────
// 5 · GENCE — `iran` hayaleti; ve TDV'nin KENDİSİ 1468-1501 aralığını veriyor
// ─────────────────────────────────────────────────────────────────────
{ad:"Gence",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1406-10-21",d:"celayirli"},
    {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
    {f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},
    {f:"1501-07-01",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1813-10-24",d:"kacar"},
    {f:"1813-10-24",t:"1923-10-29",d:"rusya"}],
 d:[{f:"1588-01-01",t:"1606-01-01"},{f:"1725-09-12",t:"1735-06-19"}],
 v:[],
 kaynak:"gence",
 neden:"ESKI: ilhanli 1281..1335-12-01, sonra `iran` 1335-12-01..1501-07-01 (165,6 yil). "
      +"`iran` kunyesi f:1925-12-12 ⇒ 424 yillik hayalet (T-0101). "
      +"TDV `gence` (200, GOVDESI OKUNDU) o araligi UC katmana boluyor ve BIRINI TARIHIYLE VERIYOR: "
      +"\"XIV. yuzyil ortalarinda Gence ve Karabag'a Celayirliler hakim oldular\" · "
      +"\"XV. yuzyilin baslarinda bu bolge Karakoyunlular'in eline gecti\" · "
      +"\"Akkoyunlular'in bolgede hakimiyet kurdugu donemde (1468-1501) Karabag ve Gence muhtemelen "
      +"Kacar emirlerinin idaresindeydi\" · \"Safeviler Devleti'nin kurulusundan (1501) sonra\". "
      +"🟢 TDV'nin verdigi 1468-1501 araligi kulliyattaki 1468-04-01 (50 kayit) ve 1501-07-01 "
      +"(77 kayit) gunleriyle BIREBIR ortusuyor — yeni gun dogurulmadi. "
      +"⚠️ TIMURLU KATMANI YAZILMADI: komsu Serur/Nahcivan 1386-1406 timurlu tasiyor ama TDV Gence "
      +"maddesinde Timur HIC GECMIYOR. Komsuya bakip yazmak, kaynagin susmasini kaynak saymak olurdu; "
      +"celayirli dogemini 1406-10-21'e kadar uzattim (TDV \"XV. yuzyilin baslari\" diyor, o gun "
      +"kulliyatta zaten var). Bu bir TERCIH, TDV alintisi degil. "
      +"⚠️ DEGISTIRMEDIGIM IKI TARIH, ikisi de kaynakla ufak celisiyor: (a) Osmanli 1588-01-01 — TDV "
      +"\"20 Temmuz 1588'de ... Gence onlerine geldiler\"; (b) Osmanli 1725-09-12 — TDV \"4 Eylul "
      +"1725'te ... zaptettiler\", 8 gun fark. Ikisi de yeni kirilma gunu dogururdu; Degismez 2 "
      +"maddesiz kirilma uretmesin diye DOKUNMADIM, kayda geciriyorum. "
      +"⚠️ Ve TDV Rus isgalini 1804'e cekiyor (\"3 Ocak 1804'te Cevad Han sehid dustu\"), veri "
      +"1813-10-24 (Gulistan) diyor. Bu de facto/de jure ayrimi olabilir — OLCMEDIM, dokunmadim."},

// ─────────────────────────────────────────────────────────────────────
// 6 · REVAN — `iran` hayaleti; TDV sirayi doğruluyor ama TARİH vermiyor
// ─────────────────────────────────────────────────────────────────────
{ad:"Revan",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
    {f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},
    {f:"1501-07-01",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1828-02-22",d:"kacar"},
    {f:"1828-02-22",t:"1923-10-29",d:"rusya"}],
 d:[{f:"1583-06-01",t:"1604-06-08"},{f:"1635-08-08",t:"1636-04-01"},
    {f:"1724-09-28",t:"1735-06-19"}],
 v:[],
 kaynak:"revan",
 neden:"ESKI: ilhanli 1281..1335-12-01, sonra `iran` 1335-12-01..1501-07-01 (165,6 yil hayalet). "
      +"TDV `revan` (200, GOVDESI OKUNDU) SIRAYI dogruluyor ama TARIH VERMIYOR: "
      +"\"Timur'un Revan'i hakimiyeti altina almasi\" · \"Timurlular'in ardindan Akkoyunlu ve "
      +"Karakoyunlu idaresine giren Revan bir kultur merkezi haline geldi\" · \"Daha sonra sehre "
      +"Sirvansahlar, Gurcu prensleri ve Safeviler hakim oldu\". "
      +"⇒ `iran` YANLIS oldugu KESIN (Timurlu/Karakoyunlu/Akkoyunlu adiyla geciyor), ama gunleri "
      +"TDV vermedigi icin KOMSU KAYITLARIN gunlerini aldim: Serur (39,55 K) ve Nahcivan (39,21 K) "
      +"birebir bu zinciri tasiyor ve Revan 40,18 K'da, ikisine de ~70 km. "
      +"📌 Bu bir CIKARIM: kimlikler TDV'den, GUNLER komsudan. Ayri satirda yaziyorum ki "
      +"olculmus ile devralinmis karismasin. "
      +"⚠️ TDV ayrica \"Sirvansahlar\" ve \"Gurcu prensleri\" de sayiyor — TARIHSIZ, ve `sirvansah` "
      +"kimliginin BOYALAR'da RENGI YOK. Yazilmadi. "
      +"🔴 DEGISTIRMEDIGIM BIR CELISKI: Osmanli fethi veride 1583-06-01, TDV ise \"991 Ramazani "
      +"baslarinda (Eylul 1583 ortalari) Osmanlilar tarafindan kontrol altina alindi\" diyor — "
      +"~3,5 AY fark. Duzeltmek yeni bir kirilma gunu dogurur ve Degismez 2 o gune madde ister; "
      +"kronoloji bende degil. KAYDA GECIRIYORUM, dokunmuyorum. "
      +"🟢 Ote yandan 1635-08-08 TDV ile BIREBIR: \"8 Agustos'ta teslim aldi\"."},

// ─────────────────────────────────────────────────────────────────────
// 7 · HEMEDAN — TDV zinciri ADIM ADIM veriyor, tek cümlede
// ─────────────────────────────────────────────────────────────────────
{ad:"Hemedan",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1387-11-01",d:"celayirli"},
    {f:"1387-11-01",t:"1452-01-01",d:"timurlu"},
    {f:"1452-01-01",t:"1469-01-01",d:"karakoyunlu"},
    {f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},
    {f:"1508-01-01",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1923-10-29",d:"kacar"}],
 d:[{f:"1590-03-21",t:"1603-10-21"},{f:"1724-08-31",t:"1730-08-12"}],
 v:[],
 kaynak:"hemedan",
 neden:"ESKI: ilhanli 1281..1335-12-01, sonra `iran` 1335-12-01..1508-01-01 (172,1 yil hayalet, "
      +"kunye f:1925-12-12). "
      +"🟢 TDV `hemedan` (200, GOVDESI OKUNDU) zinciri TEK CUMLEDE ve SIRAYLA veriyor, aynen: "
      +"\"Ilhanlilar'dan sonra Celayirliler ve Timurlular'in eline gecti\" ... \"daha sonra da "
      +"SIRASIYLA Karakoyunlular, Akkoyunlular ve Safeviler'in hakimiyeti altinda kaldi\". "
      +"⇒ Alti kimligin ALTISI da kaynakta ADIYLA ve SIRASIYLA geciyor. Kimlik tarafinda hicbir "
      +"cikarim yok. "
      +"GUNLER: TDV tarih vermiyor; komsu Kasr-i Sirin'in (130 km) zincirindeki gunleri aldim — "
      +"1340-01-01(50) · 1387-11-01(26) · 1452-01-01(40) · 1469-01-01(150) · 1508-01-01(95), "
      +"hepsi kulliyatta VAR, yeni gun dogurulmadi. Bu tarafi CIKARIM. "
      +"🟢 VE BIR TARIH BIREBIR TUTTU: veri 1724-08-31, TDV \"elli dokuz gunluk bir kusatmanin "
      +"ardindan Hemedan'i aldiysa da (11 Zilhicce 1136 / 31 AGUSTOS 1724)\". "
      +"⚠️ EKLENMEYEN IKI OSMANLI DONEMI, ikisi de TDV'de VAR: (a) 1588 \"Cigalazade Sinan Pasa "
      +"Hemedan civarini zaptetti\" — \"civarini\" diyor, sehri degil; (b) 1630 \"Husrev Pasa 27 "
      +"Sevval 1039'da (9 Haziran 1630) Hemedan'a girdi\" — bu bir SEFER isgali, ne kadar surdugu "
      +"yazmiyor. Ikisi de YENI kirilma gunu dogururdu ve Degismez 2 madde ister. KAYDA GECIRILDI."},

// ─────────────────────────────────────────────────────────────────────
// 8 · KİRMANŞAH — TDV bu tanecikte SUSUYOR; dayanak açıkça yazıldı
// ─────────────────────────────────────────────────────────────────────
{ad:"Kirmanşah",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1387-11-01",d:"celayirli"},
    {f:"1387-11-01",t:"1452-01-01",d:"timurlu"},
    {f:"1452-01-01",t:"1469-01-01",d:"karakoyunlu"},
    {f:"1469-01-01",t:"1508-01-01",d:"akkoyunlu"},
    {f:"1508-01-01",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1923-10-29",d:"kacar"}],
 d:[{f:"1590-03-21",t:"1603-10-21"},{f:"1723-10-01",t:"1730-08-12"}],
 v:[],
 kaynak:"bulunamadı — TDV `kirmansah` maddesi (slug CANLI, 200, gövdesi OKUNDU) 14.-16. yüzyılı "
       +"HİÇ anlatmıyor: Selçukluların 1045'te şehri almasından doğrudan Osmanlı-İran savaşlarına "
       +"atlıyor. Dayanak: komşu Hemedan (TDV `hemedan`, ~130 km), zinciri orada ADIYLA veriliyor.",
 neden:"ESKI: `iran` 1335-12-01..1508-01-01 (172,1 yil hayalet). "
      +"🔴 TDV BU TANECIKTE SUSUYOR — ve bu CLAUDE.md §4'un olculmus 'TANECIKLIK BOSLUGU' vakasi: "
      +"TDV bolgeyi goruyor ama O KADAR INCE taneciklikte konusmuyor. Kural: susuyorsa standart "
      +"akademik kaynak mesru, SARTI kaynagin ACIKCA yazilmasi. `kaynak:` alanina yazdim. "
      +"⇒ Kimlik zinciri Hemedan'dan devralindi (ayni Cibal bolgesi, ayni Osmanli-Safevi hatti, "
      +"130 km). Kirmansah'in KENDI kaydinda TDV dayanagi YOK — bunu gizlemiyorum. "
      +"🟢 Ama bir sey KESIN: `iran` YANLIS. Kunye f:1925-12-12, donem 1335'te basliyor ⇒ 424 yillik "
      +"hayalet. Yanlisin yerine 'bilmiyorum' yazilamaz (Degismez 1 sahipsizlik uretir); en yakin "
      +"belgeli komsunun zinciri, hayaletten HER HALUKARDA daha dogru. "
      +"⚠️ TDV'nin verdigi TEK somut sey: \"1630 yilinda Husrev Pasa tarafindan tahkim edildikten "
      +"sonra\" ve \"son olarak 1916 yilinda Osmanlilar'in eline gectiyse de 1917 Martinda tahliye "
      +"edildi\". Ikisi de mevcut donemlerle celismiyor; 1916-1917 atlasin ufkunda ama veride yok — "
      +"AYRI BIR KALEM, dokunmadim."},

// ═════════════════════════════════════════════════════════════════════
// 9-13 · ek26'NIN BEŞ KAYDI — AKKOYUNLU İKİ UÇTAN DA HAYALET
//
// Koordinatör: "073df09 ile düzeltilen 7 kayda dokunma, ÜSTÜNE BAK."
// Baktım. `iran` hayaleti orada gerçekten kapanmış — ONA DOKUNMADIM.
// Ama AYRI bir kusur duruyor ve ölçüldü:
//   künye  akkoyunlu  f:1340-01-01  t:1514-01-01
//   veri   akkoyunlu  1281-01-01 → 1534-01-01
//   ⇒ 59 yıl ERKEN başlıyor (devlet doğmamış) + 20 yıl GEÇ bitiyor
//     = tek künyenin iki ucunda 79 yıllık uydurma ömür
//
// 🔴 MİNİMAL MÜDAHALE — ve niçin böyle:
//   YALNIZ 1281..1534 aralığını açıyorum. 1534-01-01'den SONRAKİ her şey
//   (Gümrü/Eçmiyadzin'in safevî'si, Digor/Arpaçay/Iğdır'ın Osmanlı'sı)
//   OLDUĞU GİBİ KALIYOR — o günlere hiç dokunmadım.
//   Sebebi Değişmez 2: 1534-01-01 kırılması zaten var ve maddesi var;
//   onu kaldırmak ya da kaydırmak yeni bir madde borcu doğururdu.
//
// ⚠️ AÇIK BIRAKTIĞIM SORU (ölçtüm, hüküm vermedim):
//   Eçmiyadzin ↔ Revan arası 19 km, ama Revan safevî'ye 1501-07-01'de,
//   Eçmiyadzin 1534-01-01'de geçiyor — 33 YIL fark, 19 km'de.
//   Digor ↔ Kars arası 20 km; Kars'ın Osmanlı fethini TDV ile 1537'ye
//   çektim, Digor 1534-01-01'de kalıyor — 3 YIL fark, 20 km'de.
//   İkisi de gerçek bir tutarsızlık OLABİLİR; ama ikisi de 1534-01-01
//   kırılmasını kaydırmayı gerektirir ve kronoloji bende değil.
//   ⇒ KOORDİNATÖRE BIRAKIYORUM.
// ═════════════════════════════════════════════════════════════════════

{ad:"Gümrü (Aleksandropol)",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
    {f:"1468-04-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1828-02-22",d:"kacar"},
    {f:"1828-02-22",t:"1923-10-29",d:"rusya"}],
 d:[], v:[],
 kaynak:"bulunamadı — kimlik zinciri komşu Nahçıvan/Şerur (TDV `nahcivan` bölgesi) deseninden; "
       +"akkoyunlu künyesinin f/t'si `data/devletler.js:477`ten ÖLÇÜLDÜ",
 neden:"073df09 `iran`→`safevi` düzeltmesini yapmış, ONA DOKUNMADIM. Kalan kusur: akkoyunlu "
      +"1281-01-01..1534-01-01 — künye 1340-01-01..1514-01-01 ⇒ 59 yıl ERKEN + 20 yıl GEÇ. "
      +"1281-1468 arası komşu zinciriyle dolduruldu; akkoyunlu 1514-09-06'da bitiriliyor "
      +"(komşu Çaldıran/Özalp/Başkale'nin günü, 11 kayıtta geçer; künye bitişinden 8 ay sonra "
      +"= §3.5'in 400 günlük toleransı içinde). safevî başlangıcı 1534-01-01'den 1514-09-06'ya "
      +"ÇEKİLDİ — çünkü 1534-01-01 akkoyunlu'nun ölümünden 20 yıl sonrasıydı ve o boşluğu bir "
      +"şeyin doldurması gerekiyordu. ⚠️ Eçmiyadzin/Gümrü ile Revan (19-60 km) arasında hâlâ "
      +"33 yıllık safevî farkı var — ÖLÇTÜM, hüküm vermedim."},

{ad:"Eçmiyadzin",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
    {f:"1468-04-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1828-02-22",d:"kacar"},
    {f:"1828-02-22",t:"1923-10-29",d:"rusya"}],
 d:[], v:[],
 kaynak:"bulunamadı — Gümrü ile aynı gerekçe; Revan'a 19 km (ek26'nın kendi yorumu bu mesafeyi yazıyor)",
 neden:"Gümrü ile birebir aynı kusur ve aynı çare. akkoyunlu 1281..1534 → künye 1340..1514."},

{ad:"Digor",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1534-01-01",d:"safevi"},
    {f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
 d:[{f:"1534-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}],
 v:[],
 kaynak:"bulunamadı — kimlik zinciri komşu Kars'tan (20 km); Kars'ın kendi zinciri TDV `kars` ile "
       +"bu yamada düzeltildi",
 neden:"akkoyunlu 1281-01-01..1534-01-01 → künye 1340..1514 ⇒ iki uçtan hayalet. "
      +"Karakoyunlu bitişi Kars'ın günüyle (1467-01-01) hizalandı, Nahçıvan'ın 1468-04-01'iyle "
      +"değil — Digor Kars'a 20 km, Nahçıvan'a 180 km. "
      +"🔴 OSMANLI GÜNÜNE DOKUNMADIM: 1534-01-01 duruyor. Ama Kars'ın fethini TDV ile 1537-01-01'e "
      +"çektim ⇒ 20 km'de 3 yıl fark kaldı. Kaydırmak Değişmez 2'de madde borcu doğurur; "
      +"KOORDİNATÖRE BIRAKTIM."},

{ad:"Arpaçay (Akyaka)",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1534-01-01",d:"safevi"},
    {f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
 d:[{f:"1534-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}],
 v:[],
 kaynak:"bulunamadı — Digor ile aynı gerekçe (Kars'a 25 km)",
 neden:"Digor ile birebir aynı kusur ve aynı çare."},

{ad:"Iğdır",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
    {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
    {f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1534-01-01",d:"safevi"},
    {f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
 d:[{f:"1534-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}],
 v:[],
 kaynak:"bulunamadı — Digor ile aynı gerekçe",
 neden:"Digor ile birebir aynı kusur ve aynı çare. ⚠️ Iğdır Revan'a (65 km) Kars'tan (95 km) "
      +"daha yakın; karakoyunlu bitişini yine de Kars'ın günüyle yazdım çünkü Osmanlı dönemi "
      +"Kars ile aynı (1534-01-01..1878-03-03), yani idarî olarak o hatta bağlı. Bu bir TERCİH."},

// ═════════════════════════════════════════════════════════════════════
// 14-18 · VAN HATTI — AKKOYUNLU 59 YIL ERKEN BAŞLIYOR
//
// Beş kayıt `akkoyunlu 1281-01-01`den başlıyor; künye f:1340-01-01.
// ⇒ devlet DOĞMADAN 59 yıl önce boyanıyor. (Bitişleri 1514-09-06,
//   künye 1514-01-01 ⇒ 8 ay, tolerans içinde — o taraf SORUN DEĞİL.)
//
// 🟢 ÇARE KOMŞUNUN KENDİSİNDE HAZIR: Van (40-90 km) zaten doğru zinciri
//   taşıyor — ilhanli 1281..1351-01-01 · karakoyunlu 1351-01-01..1467-01-01 ·
//   akkoyunlu 1467-01-01.. — ve Van bu beşinin idarî merkezi (`m:"Van"`).
//   Yeni gün YOK: 1351-01-01 ve 1467-01-01 külliyatta zaten var.
//
// 1514-09-06'dan SONRAKİ hiçbir şeye dokunulmadı.
// ═════════════════════════════════════════════════════════════════════

{ad:"Başkale",
 s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
    {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1639-05-17",d:"safevi"}],
 d:[{f:"1639-05-17",t:"1923-10-29"}], v:[],
 kaynak:"bulunamadı — zincir komşu ve idarî merkez Van'dan (60 km, kaydın kendi m: alanı Van); "
       +"akkoyunlu künyesi f:1340-01-01 data/devletler.js:477'den ÖLÇÜLDÜ",
 neden:"akkoyunlu 1281-01-01'den başlıyordu, künye 1340-01-01'de kuruluyor ⇒ 59 YIL ERKEN. "
      +"1281-1467 arası Van'ın zinciriyle dolduruldu. 1514-09-06 ve sonrası DEĞİŞMEDİ. "
      +"073df09'un iran→safevi düzeltmesine DOKUNULMADI."},

{ad:"Çaldıran",
 s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
    {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1639-05-17",d:"safevi"}],
 d:[{f:"1639-05-17",t:"1923-10-29"}], v:[],
 kaynak:"bulunamadı — Başkale ile aynı gerekçe (Van hattı)",
 neden:"akkoyunlu 59 yıl erken başlıyordu."},

{ad:"Özalp (Saray)",
 s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
    {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1639-05-17",d:"safevi"}],
 d:[{f:"1639-05-17",t:"1923-10-29"}], v:[],
 kaynak:"bulunamadı — Başkale ile aynı gerekçe (Van hattı)",
 neden:"akkoyunlu 59 yıl erken başlıyordu."},

{ad:"Yüksekova (Gever)",
 s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
    {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1639-05-17",d:"safevi"}],
 d:[{f:"1639-05-17",t:"1923-10-29"}], v:[],
 kaynak:"bulunamadı — Başkale ile aynı gerekçe (Van hattı)",
 neden:"akkoyunlu 59 yıl erken başlıyordu."},

{ad:"Doğubayazıt",
 s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},
    {f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},
    {f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu"},
    {f:"1514-09-06",t:"1639-05-17",d:"safevi"}],
 d:[{f:"1639-05-17",t:"1923-10-29"}], v:[],
 kaynak:"bulunamadı — Başkale ile aynı gerekçe; Doğubayazıt Van'a 90 km",
 neden:"akkoyunlu 59 yıl erken başlıyordu."},

// ─────────────────────────────────────────────────────────────────────
// 19 · KASR-I ŞÎRÎN — `iran` hayaletinin bu listedeki son parçası
// ─────────────────────────────────────────────────────────────────────
{ad:"Kasr-ı Şîrîn",
 s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
    {f:"1340-01-01",t:"1387-11-01",d:"celayirli"},
    {f:"1387-11-01",t:"1452-01-01",d:"timurlu"},
    {f:"1452-01-01",t:"1469-01-01",d:"karakoyunlu"},
    {f:"1469-01-01",t:"1503-01-01",d:"akkoyunlu"},
    {f:"1503-01-01",t:"1736-03-08",d:"safevi"},
    {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
    {f:"1747-06-20",t:"1796-01-01",d:"zend"},
    {f:"1796-01-01",t:"1923-10-29",d:"kacar"}],
 d:[{f:"1723-10-01",t:"1730-08-12"}], v:[],
 kaynak:"hemedan",
 neden:"ESKİ: ilhanli 1281..1335-12-01, sonra iran 1335-12-01..1387-11-01 (51,9 yıl hayalet). "
      +"Kalan zincir (timurlu/karakoyunlu/akkoyunlu/safevi) ZATEN DOĞRUYDU, dokunulmadı — "
      +"yalnız iran parçası açıldı. "
      +"TDV hemedan (150 km, aynı Cibâl-Kürdistan hattı) sırayı veriyor: \"İlhanlılar'dan sonra "
      +"CELÂYİRLİLER ve Timurlular'ın eline geçti\". ⇒ iran yerine celayirli. "
      +"⚠️ ilhanli bitişi 1335-12-01'den 1340-01-01'e çekildi: celayirli künyesi f:1340-01-01 ve "
      +"1335-12-01'den başlatılsaydı 4 yıllık YENİ bir hayalet doğardı. 1340-01-01 külliyatta "
      +"50 kayıtta geçer; 1335-12-01 kırılması KALKIYOR — kırılma EKLEMEK değil AZALTMAK "
      +"Değişmez 2 açısından güvenli."},

];

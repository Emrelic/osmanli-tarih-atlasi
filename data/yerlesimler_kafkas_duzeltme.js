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
 d:[{f:"1537-01-01",t:"1878-07-13"},{f:"1918-05-25",t:"1923-10-29"}],
 v:[],
 kaynak:"kars",
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

];

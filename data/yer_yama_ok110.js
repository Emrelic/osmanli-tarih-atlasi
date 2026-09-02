// data/yer_yama_ok110.js — MÜKERRER ALAN KURBANLARI · SAHİPLİK YAMASI
// OPUS HAZIR KITA 110 · 2 Eylül 2026 · 1.MURAT sevkiyle (M-1903, paket triyajı)
// kaynak paket: kutu/giden/parti-emrelic-0031 (H-0007) — ve tarama sırasında
// aynı kusur sınıfından İKİ KAYIT DAHA çıktı (bkz. tahta M-1944).
//
// 🔴 BU DOSYA VERİ DEĞİL YAMADIR. Motor OKUMAZ, index.html'e EKLENMEZ,
//    girdi.py'ye BAĞLANMAZ (bağlanırsa AD ÇAKIŞMASI verir — girdi.py:1030).
//    Uygulayıcı: py arac/_sahiplik_uygula.py
//
// ═══════════════════════════════════════════════════════════════════════
// 🔴🔴 UYGULAYANA — BU YAMAYI UYGULAMAK TEK BAŞINA YETMEZ
// ═══════════════════════════════════════════════════════════════════════
// Üç kaydın da hedef dosyasında `s:` ve/veya `d:` alanı İKİ KEZ yazılı.
// JavaScript nesne sabitinde MÜKERRER ANAHTARDA SONUNCUSU KAZANIR ⇒ önceki
// düzeltme dosyada GÖRÜNÜYOR ama motora HİÇ GİRMİYOR.
//
//   data/yerlesimler_ek27.js      :51    Mersin                {s:2, d:2}
//   data/yerlesimler_ek29.js      :424   Yagodina (Jagodina)   {s:2, d:2}
//   data/yerlesimler_ek_bozkir.js :109   Yedisan bozkırı       {s:2}
//
// ⇒ MÜKERRER SATIRLAR SİLİNMEZSE BU YAMA DA AYNI ŞEKİLDE KAYBOLUR.
//    Nöbetçi: `py _mukerrer110.py` — uygulamadan SONRA koştur, 0 vermeli.
//
// ═══════════════════════════════════════════════════════════════════════
// DEĞİŞMEZ 2 KONTROLÜ — üç kaydın da kırılma günleri ÖLÇÜLDÜ
// ═══════════════════════════════════════════════════════════════════════
//   1516-08-24  ✓ "Mercidâbık Muharebesi — Kansu Gavri'nin ölümü"   (0 gün)
//   1689-09-24  ✓ YENİ GÜN DEĞİL — Kragujevac (28,4 km) zaten kullanıyor
//   1690-09-09  ✓ "Niş, Vidin ve Belgrad geri alındı"               (0 gün)
//   1717-08-18 · 1739-09-18 · 1830-11-08 · 1878-07-13 · 1882-03-06 · 1918-12-01
//               ✓ hepsi mevcut kayıtta ZATEN VAR, yeni kırılma açmıyor
//   1783-04-19  ✓ "II. Katerina'nın manifestosuyla Rusya Kırım'ı … ilhak etti"
//   1792-01-09  ✓ "Yaş Antlaşması — Kırım'ın ilhakı tanındı"
//   1352-01-01  ⚠️ MERSİN'DE KALDIRILIYOR (Osmanlı kırılması olmaktan çıkıyor,
//               kilikya-ermeni → ramazanoglu devri oluyor; Değişmez 2 Osmanlı
//               kırılmasını sorar, bu artık Osmanlı kırılması DEĞİL)
//
// ⚠️ ÜÇÜNÜN DE SÜREKLİLİĞİ TEK TEK SINANDI: 1281-01-01'den 1923-10-29'a
//    kadar boşluk YOK, örtüşme YOK. (Değişmez 1 ve "dönemler çakışmamalı".)

window.YER_YAMA_OK110 = [

// ─────────────────────────────────────────────────────────────────────
// ① MERSİN — 164 YIL HAYALET OSMANLI. Emre'nin şikâyeti 0031/H-0007:
//    "orhan gazinin cenevizlilerle kapitülasyonu maddesinde mersin sanki
//     osmanlıya geçmiş gibi boyanıyor haritada."
//    ŞİKÂYET DOĞRU. Motorda `d:` 1352-01-01'de başlıyor — Orhan Gazi
//    döneminde (1326-1362) Osmanlı Çukurova'ya hiç ulaşmamıştı.
//    KOMŞU DESENİ (25 km Tarsus · 60 km Adana, İKİSİ DE aynı zincir):
//       1281→1352 kilikya-ermeni · 1352→1516-08-24 ramazanoglu · sonra Osmanlı
//    Mersin'de ARADAKİ ramazanoglu dönemi düşmüş, Osmanlı 1516'dan 1352'ye
//    çekilmiş. Düzeltmesi ek27'ye ZATEN yazılmış ama mükerrer alan yüzünden
//    ölü kalmış — bu yama onu diriltiyor.
// ─────────────────────────────────────────────────────────────────────
 {ad:"Mersin",
  s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},
     {f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"},
     {f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}],
  kaynak:"TDV `ramazanogullari`: beylik 753'te (1352) kuruldu, sahası \"başta Adana olmak üzere Çukurova yöresi\" — Tarsus, Sîs, Ayas, Misis dâhil; Osmanlı hâkimiyeti \"Mercidâbık zaferi (25 Receb 922 / 24 Ağustos 1516)\" sonrası kesinleşti. Veri tarafı: Tarsus ve Adana kayıtları bu zinciri zaten taşıyor (birebir aynı günler).",
  neden:"d: 1352-01-01'de başlıyordu — 164 yıllık hayalet Osmanlı. ramazanoglu dönemi (1352 → 1516-08-24) eklendi, d: Mercidâbık'a çekildi. Aynı düzeltme yerlesimler_ek27.js:51'e yazılmış ama MÜKERRER `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve düzeltme motora hiç girmiyordu."},

// ─────────────────────────────────────────────────────────────────────
// ② YAGODİNA — 1689-90 Avusturya ara dönemi motorda YOK.
//    ⚠️ BU KAYITTA HER İKİ SÜRÜM DE EKSİKTİ, ölçtüm:
//       baştaki (ölü)  1689-90 Avusturya VAR   ama `v:` 1830-1878 YOK
//                      → kazansaydı 48 YILLIK SAHİPSİZLİK (Değişmez 1 ihlali)
//       sondaki (canlı) `v:` VAR                ama 1689-90 Avusturya YOK
//    ⇒ İkisinin BİRLEŞİMİ yazılıyor. Zarar bugün YOK — ama kaza eseri yok.
//    ÖLÇÜM (Sırbistan kutusu 42,5-45,0K / 20,0-23,0D, 12 nokta):
//       1688-90 Avusturya ara dönemi OLAN 7:  Belgrad · Kragujevac · Niş ·
//         Semendire · Vidin · Çaçak · Şehirköy
//       OLMAYAN 5: Yagodina · Alacahisar · Priştine · Yenipazar · Turnu Severin
//    Yagodina, Kragujevac (28,4 km) ile Niş arasındaki Morava koridorunda;
//    ikisi de ara dönemi taşıyor. Günler Kragujevac'la BİREBİR aynı seçildi.
// 🔴 KAPSAM DIŞI AMA BİLDİRİYORUM: Alacahisar (Kruševac) aynı koridorda ve
//    onda da ara dönem yok — ölçtüm, DÜZELTMEDİM (paketimde değil).
// ─────────────────────────────────────────────────────────────────────
 {ad:"Yagodina (Jagodina)",
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},
     {f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"},
     {f:"1689-09-24",t:"1690-09-09",d:"avusturya"},
     {f:"1717-08-18",t:"1739-09-18",d:"avusturya"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-01"},
     {f:"1459-06-20",t:"1689-09-24"},
     {f:"1690-09-09",t:"1717-08-18"},
     {f:"1739-09-18",t:"1830-11-08"}],
  v:[{f:"1830-11-08",t:"1878-07-13"}],
  kaynak:"bulunamadı — TDV'de Yagodina/Jagodina müstakil maddesi yok. Dayanak KARDEŞ KAYIT: Kragujevac (28,4 km, aynı Morava koridoru) birebir aynı günleri taşıyor; 1690-09-09 günü külliyatta \"Niş, Vidin ve Belgrad geri alındı\" maddesiyle zaten kayıtlı.",
  neden:"1689-09-24 → 1690-09-09 Avusturya ara dönemi eksikti (Osmanlı 1459-1717 kesintisiz görünüyordu). Ara dönem eklendi VE mevcut `v:` 1830-1878 KORUNDU — yerlesimler_ek29.js:424'teki ölü düzeltme `v:`yi taşımıyordu, uygulansaydı 48 yıllık sahipsizlik açacaktı."},

// ─────────────────────────────────────────────────────────────────────
// ③ YEDİSAN BOZKIRI — 9 YIL BOYUNCA İKİ SAHİP AYNI ANDA.
//    Motordaki hâl:  s: kirim 1502-03-01 → 1792-01-09
//                    d: OSMANLI 1783-04-19 → 1792-01-09
//    ⇒ 1783-04-19 ile 1792-01-09 arası kayıt HEM kirim HEM Osmanlı.
//    Ölü düzeltme kirim'i tam 1783-04-19'da bitiriyordu, yani ÖRTÜŞMEYİ
//    KAPATAN düzeltme oydu ve mükerrer `s:` yüzünden kaybolmuştu.
//    ⚠️ Bu kusuru `denetle.py` GÖRÜYOR ama `i` (BİLGİ) kovasında raporluyor
//       (denetle.py:2866 sd_ortusme, :3389 "i" satırı) — yani ihlal
//       saymıyor ve temiz raporun içinde duruyor.
//    Tarihsel dayanak: Kırım Hanlığı 1783-04-19'da Rusya'ya ilhakla SONA
//    ERDİ (külliyatta madde var); Yedisan'ın Osmanlı idaresi 1792 Yaş
//    Antlaşması'na kadar sürdü. Yani 1783 sonrası "kirim" olamaz.
// ─────────────────────────────────────────────────────────────────────
 {ad:"Yedisan bozkırı",
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},
     {f:"1502-03-01",t:"1783-04-19",d:"kirim"},
     {f:"1792-01-09",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1783-04-19",t:"1792-01-09"}],
  kaynak:"külliyatın kendi maddeleri: \"1783-04-19 II. Katerina'nın manifestosuyla Rusya Kırım'ı, Taman'ı ve Kuban'ı ilhak etti — Kırım Hanlığı sona erdi\" ve \"1792-01-09 Yaş Antlaşması — Kırım'ın ilhakı tanındı, sınır Dinyester'e taştı\". Yeni tarih ARAŞTIRILMADI, yeni gün EKLENMEDİ — yalnız var olan iki gün tutarlı hâle getirildi.",
  neden:"`s:` kirim dönemini 1792-01-09'a kadar sürdürüyordu ama `d:` 1783-04-19'da Osmanlı'yı başlatıyordu ⇒ 8 yıl 9 ay ÇİFT SAHİPLİK. kirim, hanlığın sona erdiği güne (1783-04-19) çekildi. Kırılma günü DEĞİŞMEDİ, yalnız örtüşme kapandı."},

// ═══════════════════════════════════════════════════════════════════════
// BÖLÜM 2 — 0031/H-0014 · AKKOYUNLU HAYALET DÖNEMİ · 18 NOKTA
// ═══════════════════════════════════════════════════════════════════════
// Emre'nin şikâyeti: "bu tarihlerde böyle akkoyunlular karakoyunlular karışık
// bir vaziyette mi dağılıyor toprakları… bu iki devletin hangi topraklara
// sahip olduğunu ve kronolojisini birbirleri ile örtüştürelim."
//
// ÖLÇÜM (künye penceresi × veri penceresi, `devletler.js` f/t ile):
//   akkoyunlu   künye 1340-01-01 → 1514-01-01
//     künyeden ÖNCE başlayan dönem : 17
//     künyeden SONRA biten dönem   : 18
//     ETKİLENEN AYRIK NOKTA        : 18
//   karakoyunlu künye 1351-01-01 → 1469-01-01
//     ÖNCE 0 · SONRA 0  →  🟢 KARAKOYUNLU TAMAMEN TEMİZ
//
// 🔴 ŞİKÂYETİN YARISI ÇÜRÜDÜ: kusur "iki devlet karışık" değil, TEK TARAFLI.
//    Karakoyunlu kayıtlarının hiçbirinde hayalet dönem yok. Emre iki devleti
//    birlikte gördüğü için ikisini de saydı; ölçüm tarafı ayırdı.
//
// KUSURUN İMZASI: 17 nokta `akkoyunlu`yu 1281-01-01'de AÇIYOR — devletin
// kuruluşundan (1340) 59 yıl, Diyarbekir'e hâkim olmasından (~1398) 117 yıl
// önce. Bu bir tarih hatası değil, bir DOLDURMA deseni: sınır dosyaları
// (`ek25` · `ek26` · `sinir_dogu`) zinciri tek parça yazmış.
// 📌 `CLAUDE.md §3.5` HAYALET DEVLET vakası — "yeni bir `s:` dönemi yazarken
//    devletin ömrünü kontrol et."
//
// ÇARE: her nokta KENDİ BÖLGESİNİN ANKRAJ KAYDINA hizalanıyor. Yeni tarih
// ARAŞTIRILMADI, yeni gün İCAT EDİLMEDİ — kullanılan bütün kırılma günleri
// külliyatta ZATEN VAR (ankrajlardan birebir alındı):
//   A · Sürmeli-Aras   ankraj Revan     ilhanli→celayirli→karakoyunlu→akkoyunlu→safevi
//   B · Van-Hakkâri    ankraj Van · Çölemerik (Hakkâri) · Erciş
//   C · Mardin         ankraj Mardin    artuklu→karakoyunlu→akkoyunlu→safevi
//   D · Bitlis         yalnız KUYRUK kusurlu (akkoyunlu 1502'yi aşıyordu)
//
// ⚠️ DEĞİŞMEZ 2 — HİÇBİR `d:` GÜNÜ DEĞİŞMİYOR. 18 kaydın 18'inde de Osmanlı
//    dönemlerinin f/t'sine DOKUNULMADI; yalnız `s:` zinciri açıldı. Yani bu
//    yama tek bir Osmanlı kırılması eklemiyor, silmiyor, kaydırmıyor.
// ⚠️ DEĞİŞMEZ 2s — eklenen yabancı kırılma günlerinin HEPSİ külliyatta
//    kullanımda (1340-01-01 · 1351-01-01 · 1409-01-01 · 1410-01-01 ·
//    1467-01-01 · 1467-11-10 · 1469-01-01 · 1501-07-01 · 1502-01-01 ·
//    1507-01-01). YENİ GÜN YOK ⇒ tavana yeni açık ekleme riski YOK.
//
// KAYNAK (TDV, gövdeleri okundu):
//   `akkoyunlular` : "1340'ta Tur Ali Bey idaresinde ortaya çıktılar" ·
//                    "Karayülük Osman Bey Âmid'i ~1398'de aldı, 1409'da
//                    Mardin'e uzandı, ancak Mardin Kara Yûsuf'un eline geçti" ·
//                    "1501'de Şah İsmâil Elvend'i Nahcıvan yakınında yendi"
//   `artuklular`   : "Ahmed, Mardin'i Akkoyunlular'a karşı müdafaa edemeyeceğini
//                    anlayınca Karakoyunlu Kara Yûsuf ile anlaşarak şehri ona
//                    teslim etti (1409)"
// 🔴 VE BİR KÜNYE ÇELİŞKİSİ BİLDİRİYORUM (benim dosyam DEĞİL, `devletler.js`
//    Oturum 3'ün): künye `akkoyunlu t:1514-01-01` diyor; TDV 1501 diyor,
//    külliyatın kendi ankrajları 1501-07-01 · 1502-01-01 · 1507 · 1508
//    kullanıyor. Künye HER ÜÇÜNDEN DE GEVŞEK. Bu yama künyeye dokunmuyor,
//    ankrajlara hizalanıyor — ama künye düzeltilirse bu 18 kayıt zaten uyumlu olur.

// ── A · SÜRMELİ-ARAS (5) — ankraj: Revan (40,18/44,52) ───────────────
 {ad:"Arpaçay (Akyaka)",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1410-01-01",d:"celayirli"},{f:"1410-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"}],
  kaynak:"ankraj Revan (67 km) — külliyattaki zincirin birebir aynısı; TDV `akkoyunlular` (kuruluş 1340, Elvend'in yenilgisi 1501)",
  neden:"akkoyunlu 1281-01-01'de açılıyordu — devletin kuruluşundan 59 yıl önce. Zincir bölgenin ankrajına açıldı; `d:` günlerine DOKUNULMADI."},

 {ad:"Digor",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1410-01-01",d:"celayirli"},{f:"1410-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"}],
  kaynak:"ankraj Revan — aynı zincir",
  neden:"akkoyunlu 1281'de açılıyordu; bölge ankrajına hizalandı."},

 {ad:"Iğdır",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1410-01-01",d:"celayirli"},{f:"1410-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"}],
  kaynak:"ankraj Revan (46 km) — aynı zincir",
  neden:"CEVAP.json notunun adıyla andığı vaka: \"Iğdır tek blok 1281->1534\". Zincir açıldı; 253 yıllık tek parça akkoyunlu 32 yıla indi."},

 {ad:"Gümrü (Aleksandropol)",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1410-01-01",d:"celayirli"},{f:"1410-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1796-01-01",d:"zend"},{f:"1796-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  kaynak:"ankraj Revan (86 km) — aynı zincir",
  neden:"akkoyunlu 1281-1534 tek blok. ⚠️ Bu kayıtta 1534-01-01 KIRILMASI DÜŞÜYOR: safevi 1501-07-01'den 1736'ya kesintisiz akıyor, çünkü kayıt zaten 1534'ten sonra safevi devam ediyordu — iki safevi dilimi tek dilim oldu, sahip DEĞİŞMEDİ."},

 {ad:"Eçmiyadzin",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1410-01-01",d:"celayirli"},{f:"1410-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1796-01-01",d:"zend"},{f:"1796-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  kaynak:"ankraj Revan (19 km — en yakın ankraj) — aynı zincir",
  neden:"Gümrü ile aynı: iki safevi dilimi birleşti, sahip değişmedi."},

// ── B · VAN-HAKKÂRİ (8) — ankraj: Van · Çölemerik · Erciş ────────────
 {ad:"Doğubayazıt",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1514-09-06",d:"safevi"}],
  kaynak:"ankraj Van (117 km) · Erciş — külliyattaki zincir",
  neden:"akkoyunlu 1281→1514-09-06 tek blok. `d:` 1514-09-06'dan başlıyordu ve BAŞLAMAYA DEVAM EDİYOR — Osmanlı kırılması korundu."},

 {ad:"Çaldıran",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1639-05-17",d:"safevi"}],
  kaynak:"ankraj Van (78 km) — külliyattaki zincir",
  neden:"akkoyunlu tek blok. Mevcut safevi dilimi (1514-09-06→1639-05-17) 1502'ye çekildi — iki dilim tek dilim, sahip DEĞİŞMEDİ. Osmanlı 1639-05-17'de başlamaya devam ediyor."},

 {ad:"Şeyhrumi (Yücelen)",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1639-05-17",d:"safevi"}],
  kaynak:"ankraj Van (70 km) — külliyattaki zincir",
  neden:"Çaldıran ile aynı desen."},

 {ad:"Başkale",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1639-05-17",d:"safevi"}],
  kaynak:"ankraj Van (73 km) · Çölemerik (63 km) — külliyattaki zincir",
  neden:"Çaldıran ile aynı desen."},

 {ad:"Özalp (Saray)",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  kaynak:"ankraj Van (55 km) — külliyattaki zincir; 1548-08-25 Van'ın kendi Osmanlı günü",
  neden:"akkoyunlu tek blok; safevi dilimi 1502'ye çekildi, Osmanlı 1548-08-25'te başlamaya devam ediyor."},

 {ad:"Bacirge (Esendere)",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  kaynak:"ankraj Çölemerik/Hakkâri (76 km) — külliyattaki zincir",
  neden:"Özalp ile aynı desen."},

 {ad:"Yüksekova (Gever)",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  kaynak:"ankraj Çölemerik/Hakkâri (48 km) — külliyattaki zincir",
  neden:"Özalp ile aynı desen."},

 {ad:"Şemdinli (Şemdinni)",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}],
  kaynak:"ankraj Çölemerik/Hakkâri (77 km) — külliyattaki zincir",
  neden:"Özalp ile aynı desen."},

// ── C · MARDİN (4) — ankraj: Mardin ──────────────────────────────────
 // 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// {ad:"Nusaybin",
//   s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-01-01",d:"safevi"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
//   kaynak:"ankraj Mardin (54 km) — külliyattaki zincir; TDV `artuklular`: Mardin kolu 1409'da Kara Yûsuf'a teslim edildi",
//   neden:"akkoyunlu 1281→1515 tek blok. Artuklu Mardin kolu 1409'a kadar hüküm sürdü, sonra Karakoyunlu; Akkoyunlu ancak 1467-11-10'da (Uzun Hasan) geldi."},

 // 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// {ad:"Silopi",
//   s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-01-01",d:"safevi"},{f:"1918-10-30",t:"1921-10-20",d:"ingiltere"}],
//   kaynak:"ankraj Mardin (155 km) — külliyattaki zincir",
//   neden:"Nusaybin ile aynı desen."},

 // 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// {ad:"Malikiye (Derik)",
//   s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-01-01",d:"safevi"},{f:"1918-10-30",t:"1923-10-29",d:"fransa-cumhuriyet"}],
//   kaynak:"ankraj Mardin (125 km) — külliyattaki zincir",
//   neden:"Nusaybin ile aynı desen."},

 {ad:"Ceylanpınar",
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-08-24",d:"safevi"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  kaynak:"ankraj Mardin (75 km) — külliyattaki zincir",
  neden:"Nusaybin ile aynı desen; Osmanlı günü (1516-08-24, Mercidâbık) DEĞİŞMEDİ."},

// ── D · BİTLİS (1) — yalnız KUYRUK kusurlu ───────────────────────────
 {ad:"Bitlis",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1515-09-15",d:"safevi"}],
  kaynak:"ankraj Van (72 km) · Erciş — akkoyunlu'nun bitişi külliyatta 1501-07-01/1502-01-01; TDV `akkoyunlular`: Elvend 1501'de yenildi",
  neden:"BU KAYITTA AÇILIŞ DOĞRUYDU, kusur KUYRUKTAYDI: akkoyunlu 1515-09-15'e kadar sürüyordu, oysa künye 1514-01-01'de, TDV 1501'de bitiriyor. 1502-1515 arası bölge Safevî'nin elindeydi (Van'ın kendi kaydı bunu söylüyor). Osmanlı günü 1515-09-15 DEĞİŞMEDİ."},

];

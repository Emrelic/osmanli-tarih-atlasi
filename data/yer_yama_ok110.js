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

];

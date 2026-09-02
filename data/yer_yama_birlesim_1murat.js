// data/yer_yama_birlesim_1murat.js — 1.MURAT (koordinatör) · 2 Eylül 2026
//
// AD ALANI: window.YER_YAMA_BIRLESIM_1MURAT
//   `CLAUDE.md §7`: dosya adının ayırt edici parçası (`birlesim_1murat`)
//   değişken adında da var. "Ayrı dosya vermek, ayrı ad alanı vermek
//   değildir" dersinin uygulanmış hâli.
//
// ═══════════════════════════════════════════════════════════════════
// NİÇİN VAR — BEŞ ÇATIŞMANIN HÜKMÜ "BİRLEŞTİR" ÇIKTI
// ═══════════════════════════════════════════════════════════════════
// `denetim/YAMA-CAKISMA.md`de 27 yama çatışması karara bağlandı. On
// dokuzunda bir taraf kazandı (kaybeden kayıtlar yoruma çevrildi), ikisi
// `kaynak` dalıyla kendiliğinden çözüldü, ikisi (Bağdat · Halepçe) fetret
// hükmüyle kapandı. **Kalan beşinde iki yama da HAKLIYDI** — farklı
// sorunlara bakıyorlardı ve biri ötekini yiyecekti.
//
// 🔴 VE BU DOSYA BİR SİLME DEĞİL BİR ÜRETİMDİR. İşçi oturum (OPUS HAZIR
//   KITA 109) silmeleri yaptı ama birleştirmelerde DURDU ve gerekçesi
//   doğruydu: *"silme geri alınabilir ve denetlenebilir; birleştirme YENİ
//   BİR YARGIDIR ve onu ya koordinatör ya kaydın sahibi vermeli."*
//   Yargıyı koordinatör verdi (M-2116), dolayısıyla yazması da onda.
//
// 🔴 VE KAYNAK KAYITLAR DEĞİŞTİRİLMEDİ. İki tarafın kaydı da kendi
//   dosyasında YORUMA ÇEVRİLECEK (silinmeyecek); tek yazan bu dosya olacak.
//   Sebep: başkasının kaydını YERİNDE düzenlemek, düzenlemenin kimden
//   geldiğini görünmez kılar. Burada üç şey birden görünür kalıyor —
//   iki özgün kayıt, ve onları birleştiren yargı.
//
// ⚠️ ÖLÇÜLDÜ, VARSAYILMADI: her beş kaydın iki tarafı da `node` ile
//   okundu (regex DEĞİL — `§11`: "veri zaten bir dilde yazılıysa o dilin
//   yorumlayıcısını çağır") ve alanları tek tek karşılaştırıldı.

window.YER_YAMA_BIRLESIM_1MURAT = [

  // ═══════════════════════════════════════════════════════════════
  // ① MARDİN KORİDORU — `ok110`un ERKEN KATMANI + `ok107`nin GÜN DÜZELTMESİ
  // ═══════════════════════════════════════════════════════════════
  // ok107  akkoyunlu'dan başlatıyor (1281'den) · safevi bitişi 1515-09-19
  //        (TDV `nusaybin` gövdesinden, "enklav ve alâkasız-madde kusuru")
  // ok110  önce `artuklu` (1281-1409) ve `karakoyunlu` (1409-1467) ekliyor
  //        (TDV `artuklular`: "Mardin kolu 1409'da Kara Yûsuf'a teslim
  //        edildi") · ama safevi bitişi hâlâ eski `1515-01-01`
  // ⇒ İkisi de gerçek TDV alıntısı taşıyor, FARKLI kısımlar için.
  //   Bu bir ya/ya da değil: erken katman + gün düzeltmesi BİRLİKTE.

  { ad:"Nusaybin",
    s:[{f:"1281-01-01", t:"1409-01-01", d:"artuklu"},
       {f:"1409-01-01", t:"1467-11-10", d:"karakoyunlu"},
       {f:"1467-11-10", t:"1507-01-01", d:"akkoyunlu"},
       {f:"1507-01-01", t:"1515-09-19", d:"safevi"},
       {f:"1918-10-30", t:"1921-10-20", d:"fransa-cumhuriyet"}],
    d:[{f:"1515-09-19", t:"1918-10-30"},
       {f:"1921-10-20", t:"1923-10-29"}],
    kaynak:"nusaybin",
    not:"BİRLEŞİM (1.MURAT, hüküm M-2116): yer_yama_ok110.js'in artuklu/karakoyunlu erken katmanı + yer_yama_ok107.js'in 1515-01-01 → 1515-09-19 gün düzeltmesi. İkisi de TDV kaynaklı, farklı kısımlar için; ayrı ayrı uygulansalar biri ötekini yerdi." },

  { ad:"Silopi",
    s:[{f:"1281-01-01", t:"1409-01-01", d:"artuklu"},
       {f:"1409-01-01", t:"1467-11-10", d:"karakoyunlu"},
       {f:"1467-11-10", t:"1507-01-01", d:"akkoyunlu"},
       {f:"1507-01-01", t:"1515-09-19", d:"safevi"},
       {f:"1918-10-30", t:"1921-10-20", d:"ingiltere"}],
    d:[{f:"1515-09-19", t:"1918-10-30"},
       {f:"1921-10-20", t:"1923-10-29"}],
    kaynak:"cizre",
    not:"BİRLEŞİM (1.MURAT, hüküm M-2116): ok110'un erken katmanı + ok107'nin gün düzeltmesi. ⚠️ TDV `silopi` slug'ı ÖLÜ (302); dayanak TDV `cizre` — Cizre ve çevresi aynı Doğu Anadolu harekâtında alındı, Diyarbekir eyaletine bağlandı." },

  { ad:"Malikiye (Derik)",
    s:[{f:"1281-01-01", t:"1409-01-01", d:"artuklu"},
       {f:"1409-01-01", t:"1467-11-10", d:"karakoyunlu"},
       {f:"1467-11-10", t:"1507-01-01", d:"akkoyunlu"},
       {f:"1507-01-01", t:"1515-09-19", d:"safevi"},
       {f:"1918-10-30", t:"1923-10-29", d:"fransa-cumhuriyet"}],
    d:[{f:"1515-09-19", t:"1918-10-30"}],
    kaynak:"nusaybin",
    not:"BİRLEŞİM (1.MURAT, hüküm M-2116): ok110'un erken katmanı + ok107'nin gün düzeltmesi. ⚠️ TDV `derik` slug'ı ÖLÜ (302); dayanak TDV `nusaybin` — Mardin ovasının aynı kolu, aynı harekât. 1918 sonrası döneme dokunulmadı (ok107'nin kendi notu)." },

  // ═══════════════════════════════════════════════════════════════
  // ② KARS · ARDAHAN — `kafkas`ın ANTİK ZİNCİRİ + `uyg1`in RUSYA GÜNÜ
  // ═══════════════════════════════════════════════════════════════
  // kafkas  antik dönemi açıyor: TEK BLOK `gurcistan` yerine
  //         ilhanli → celayirli → timurlu → karakoyunlu → akkoyunlu →
  //         safevi (TDV `kars` / `ardahan` gövdeleri okundu). AMA 1877/78
  //         Rusya fetih gününe DOKUNMUYOR — eski `1878-07-13` kalıyor.
  // uyg1    TAM TERSİNİ yapıyor: antik dönemi tek blok bırakıyor ama Rusya
  //         fetih gününü AKADEMİK kaynakla düzeltiyor —
  //         Kars 1877-11-18 (TDV `doksanuc-harbi`: "General Lazarov'un
  //         idaresindeki kuvvetler … 18 Kasım'da Kars'ı ele geçirdiler")
  //         Ardahan 1877-05-17 (TDV gün vermiyor; akademik kaynağa çıkıldı)
  // ⇒ İKİSİ DE DOĞRU, FARKLI SORUNLARA BAKIYOR.
  //
  // 🔴 VE BU İKİSİ BİR ALETİ YAKALADI: haritalama aleti Kars'ı başlıkta ad
  //   arayarak "GRUP B — KARS/Revan" bölümüne bağlamıştı ve o bölümün
  //   hükmü "ok110 kazanır" diyordu. Ama Kars o bölümün kapsamında YOK ve
  //   `ok110` bu çatışmada TARAF BİLE DEĞİL. Uygulansaydı `uyg1`in
  //   akademik kaynaklı günü SİLİNECEKTİ. ⇒ *Eşleşme bulmak, doğru şeyi
  //   bulmak değildir.* (`CLAUDE.md §11`)

  { ad:"Kars",
    s:[{f:"1281-01-01", t:"1340-01-01", d:"ilhanli"},
       {f:"1340-01-01", t:"1386-01-01", d:"celayirli"},
       {f:"1386-01-01", t:"1406-10-21", d:"timurlu"},
       {f:"1406-10-21", t:"1467-01-01", d:"karakoyunlu"},
       {f:"1467-01-01", t:"1514-09-06", d:"akkoyunlu"},
       {f:"1514-09-06", t:"1534-06-01", d:"safevi"},
       {f:"1877-11-18", t:"1918-05-25", d:"rusya"}],
    d:[{f:"1534-06-01", t:"1877-11-18", y:"kusatma"},
       {f:"1918-05-25", t:"1923-10-29", y:"antlasma"}],
    kaynak:"kars",
    not:"BİRLEŞİM (1.MURAT, hüküm M-2116): yer_yama_kafkas.js'in antik zinciri (TDV `kars` gövdesi — 253 yıllık TEK BLOK `gurcistan` yerine altı dönem) + yer_yama_uyg1.js'in Rusya fetih günü 1878-07-13 → 1877-11-18 (TDV `doksanuc-harbi` gövdesi: 'General Lazarov'un idaresindeki kuvvetler … 18 Kasım'da Kars'ı ele geçirdiler'). 🟢 Gün ÇEKİRDEKTE ZATEN MADDELİ: 'Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları', 0 gün fark — yeni bir kırılma AÇMIYOR." },

  { ad:"Ardahan",
    s:[{f:"1281-01-01", t:"1340-01-01", d:"ilhanli"},
       {f:"1340-01-01", t:"1386-01-01", d:"celayirli"},
       {f:"1386-01-01", t:"1406-10-21", d:"timurlu"},
       {f:"1406-10-21", t:"1467-01-01", d:"karakoyunlu"},
       {f:"1467-01-01", t:"1514-09-06", d:"akkoyunlu"},
       {f:"1514-09-06", t:"1551-01-01", d:"safevi"},
       {f:"1877-05-17", t:"1918-05-25", d:"rusya"}],
    d:[{f:"1551-01-01", t:"1877-05-17"},
       {f:"1918-05-25", t:"1923-10-29"}],
    kaynak:"ardahan",
    not:"BİRLEŞİM (1.MURAT, hüküm M-2116): kafkas.js'in antik zinciri (TDV `ardahan` gövdesi — 270 yıllık TEK BLOK yerine altı dönem) + uyg1.js'in Rusya fetih günü 1878-07-13 → 1877-05-17. ⚠️ TDV `doksanuc-harbi` Ardahan için GÜN VERMİYOR ('General Melikof'un idare ettiği kuvvetler … Ardahan'a girdiler', tarihsiz); gün akademik kaynaktan alındı ve uyg1.js'in kendi notunda işaretli. 🟢 Değişmez 2: en yakın çekirdek madde 'Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması' (1877-04-24), 23 gün fark — ±30 içinde, yeni madde gerekmiyor. 📌 Ve Ardahan'ı Kars'la BİRLİKTE düzeltmek şart: Kars'ı tek başına 1877'ye çekip Ardahan'ı 1878'de bırakmak SAHTE BİR ENKLAV doğururdu (ORHANGAZİ'nin uyarısı, uyg1.js'in kendi notunda)." },

];

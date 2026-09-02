// -*- coding: utf-8 -*-
// ════════════════════════════════════════════════════════════════════════
// YER_YAMA_OK109_FETRET — 1335-1340 "IRAN FETRETI" BORCU
// window.YER_YAMA_OK109_FETRET
// Oturum: OPUS HAZIR KITA 109 · 2 Eylül 2026 · koordinatör 1.MURAT
// ════════════════════════════════════════════════════════════════════════
//
// 🔴 UYGULANMADI — koordinatörün şarti: "hazırla, UYGULAMA".
//   Ayrıca `d2_gerek` kilidi kondu; uygulayıcı kuru koşuda ATLAR.
//
// ── GÖREV NEİDİ, VE HANGI VARSAYIMLA GELDİ ───────────────────
// Koordinatörün sevki: *"1335-1340 İran fetreti, 34 kayıtta birden —
// kaynagı sor: konuşuyorsa `devletsiz`, susuyorsa `veri-yok`; `__BOSLUK__`
// yamasını hazırla."*
// 🔴 KAYNAK KONUŞTU — VE "FETRET YOKTU" DEDİ. `__BOSLUK__` YAZILMADI.
//
// TDV `ilhanlilar` (HTTP 200, gövde okundu, 38.162 karakter):
//   "İLHANLILAR — İran'da kurulan bir Moğol devleti (1256-1353)."
//   ve İLHAN LİSTESİ 1335 SONRASINI SAYIYOR:
//     Arpa 736 (1335) · Mûsâ 736 (1336) · [Hasan-ı Büzürg'ün tayin
//     ettikleri] Muhammed 736 (1336) · Tuga Timur 738 (1337) · Cihan
//     Timur 739 (1338) · [Hasan-ı Kûçek'in tayin ettikleri] Sâtî Beg
//     Hatun 739 (1339) · Süleyman 740 (1340) · Nûşirevân 745-754 (1344-1353)
// TDV `celayirliler` (HTTP 200, gövde okundu, 10.429 karakter):
//   "CELÂYİRLİLER 1340-1431 yılları arasında İran'ın batısı ile Kuzey
//    Irak'ta hüküm süren Moğol hânedanı." · "… bağımsız bir devlet
//    kurdu (1340)."
//
// ⇒ 1335-1340 arası SAHİPSİZ DEĞİLDİ. İlhanlı devleti hukuken sürdü,
//   tahta ard arda ilhanlar çıktı. Yani veri "fetret" yazmıyor, veri
//   YANLIŞ SINIR GÜNÜ yazıyor.
//   📌 `devletler.js` ZATEN doğruyu söylüyordu: `ilhanli` künyesi
//     1256-01-01 → **1353-01-01**. Veri künyesinden 17 yıl ERKEN kesiyordu.
//
// ── ÇARE ─────────────────────────────────────────────
//   `ilhanli`   t: 1335-12-01 → 1340-01-01   (künyesi 1353'e kadar canlı)
//   `celayirli` f: 1335-12-01 → 1340-01-01   (künyesinin doğum günü)
//   Boşluk DOĞMAZ, kimlik DEĞİŞMEZ, yalnız SİNIR GÜNÜ kayar.
//
// ── BEDELİ ÖLÇÜLDÜ ──────────────────────────────────
//   `Değişmez 4d`  469 → 436  (33 dönem düşer — tavanın +1 aşılması
//                  meselesi de kendiliğinden kapanır)
//   yeni kırılma günü: YOK — 1340-01-01 veride ZATEN 74 kez kırılma
//   `Değişmez 2s`: günün maddesi ZATEN VAR ve İLGİLİ:
//       1340-01-01 · "Celayirli Devleti'nin kuruluşu — İlhanlı sonrası
//                     Azerbaycan"  (0 gün)
//     ⭐ Bu, geçen turda Şırnak için bildirdiğim "alâkasız madde"
//        durumunun TERSİ: bu sefer günün maddesi tam da o olayı anlatıyor.
//
// ── KAPSAM — NEYE DOKUNMADIM ────────────────────────────
//   1335-12-01 gününü BAŞKA kimlikler de kullanıyor:
//       muzafferi 21 · incu 9 · sirvansah 9 · lur-i-buzurg 7 · kert 1
//   🟢 Bunlara DOKUNMADIM: künyeleri o tarihten ÖNCE başlıyor
//     (muzafferi 1318 · incu 1325 · kert 1245) ⇒ `4d` ihlali DEĞİLLER.
//   ⚠️ Ama şunu ÖLÇMEDİM: onların 1335-12-01'de başlaması TARİHEN doğru
//     mu, yoksa aynı toplu yazımın artığı mı? Denetim ötmüyor, ben de
//     kapsamımı genişletmedim — ayrı bir kalem olabilir.
//   🟢 İmâdiye bu yamada YOK: kendi dosyamda (`yerlesimler_ok109.js`)
//     ve orada düzeltildi.
// ════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
// 🟢 KİLİT KALDIRILDI — 2 Eylül 2026, OPUS HAZIR KITA 109
//    Bu dosyanın 32 kaydı `d2_gerek` ile KİLİTLİYDİ; kilidin şartı şuydu:
//        "bu yama 32 kaydın SINIR GÜNÜNÜ 1335-12-01'den 1340-01-01'e
//         taşır; uygulanmadan önce koordinatör onaylamalı."
//    🟢 ŞART GELDİ: 1.MURAT, M-2133 —
//        "HÜKÜM: FETRET SINIR GÜNÜ DÜZELTMESİ KABUL. `ilhanli t:` ve
//         `celayirli f:` → 1340-01-01."
//    Dayanağı: TDV `ilhanlilar` (1256-1353, ilhan listesi 1335 sonrasını
//    sayıyor) + TDV `celayirliler` ("1340-1431… kurdu (1340)").
//    ⇒ `d2_gerek` alanları KALDIRILDI. Kilit sessizce yok olmadı; niçin
//      konduğu ve niçin kalktığı burada yazılı.
//    ⚠️ `kaynak:` ve `neden:` alanlarına DOKUNULMADI.
// ═══════════════════════════════════════════════════════════════════════
window.YER_YAMA_OK109_FETRET = [

  {
    ad: "Akra",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Ammâre",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1546-01-01", "d": "safevi"},
      {"f": "1914-11-22", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Basra",
    s: [
      {"f": "1776-04-16", "t": "1779-04-01", "d": "zend"},
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1546-01-01", "d": "safevi"},
      {"f": "1914-11-22", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Bağdat",
    d: [
      {"f": "1534-12-04", "t": "1623-11-28"},
      {"f": "1638-12-24", "t": "1917-03-11"}
    ],
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1393-01-01", "d": "celayirli"},
      {"f": "1393-01-01", "t": "1394-01-01", "d": "timurlu"},
      {"f": "1394-01-01", "t": "1401-01-01", "d": "celayirli"},
      {"f": "1401-01-01", "t": "1405-01-01", "d": "timurlu"},
      {"f": "1405-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-24", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Duhok",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Dîvâniye",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Erbil",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Fellûce",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Fâv",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1546-01-01", "d": "safevi"},
      {"f": "1914-11-22", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Halepçe",
    d: [
      {"f": "1534-12-04", "t": "1550-01-01"},
      {"f": "1554-08-22", "t": "1623-11-28"},
      {"f": "1638-12-24", "t": "1917-03-11"}
    ],
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1554-08-22", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-24", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Hille",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Hânekîn",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Hît",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kerbelâ",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kerkük",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1918-10-30", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kifri",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kûfe",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kût el-Amâre",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Kürne",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1546-01-01", "d": "safevi"},
      {"f": "1914-11-22", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Meşkinşehr (Hiyav)",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1386-01-01", "d": "celayirli"},
      {"f": "1386-01-01", "t": "1406-10-21", "d": "timurlu"},
      {"f": "1406-10-21", "t": "1468-04-01", "d": "karakoyunlu"},
      {"f": "1468-04-01", "t": "1501-07-01", "d": "akkoyunlu"},
      {"f": "1501-07-01", "t": "1736-03-08", "d": "safevi"},
      {"f": "1736-03-08", "t": "1747-06-20", "d": "afsar"},
      {"f": "1747-06-20", "t": "1796-01-01", "d": "zend"},
      {"f": "1796-01-01", "t": "1923-10-29", "d": "kacar"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Musul",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Necef",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Rewândiz",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Semâve",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1546-01-01", "d": "safevi"},
      {"f": "1914-11-22", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Sincar",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Sâmerrâ",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Tikrit",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Tuz Hurmatu",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Vâsıt",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Zaho",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1516-08-24", "d": "safevi"},
      {"f": "1918-11-08", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Âne",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1534-12-04", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1917-03-11", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  },

  {
    ad: "Şehrizor",
    s: [
      {"f": "1281-01-01", "t": "1340-01-01", "d": "ilhanli"},
      {"f": "1340-01-01", "t": "1411-01-01", "d": "celayirli"},
      {"f": "1411-01-01", "t": "1469-01-01", "d": "karakoyunlu"},
      {"f": "1469-01-01", "t": "1508-01-01", "d": "akkoyunlu"},
      {"f": "1508-01-01", "t": "1554-08-22", "d": "safevi"},
      {"f": "1623-11-28", "t": "1638-12-25", "d": "safevi"},
      {"f": "1918-10-30", "t": "1923-10-29", "d": "ingiltere"}
    ],
    kaynak: "TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.",
    neden: "Kimlik DEGISMIYOR, yalniz SINIR GUNU kayiyor: ilhanli 1340-01-01'e uzuyor (kunyesi 1353'e kadar canli), celayirli kunyesinin dogum gununden basliyor. Bosluk dogmuyor. Degismez 4d 469 -> 436."
  }

];

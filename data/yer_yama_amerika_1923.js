// =====================================================================
// AMERİKA 1923 — `ingiliz-kuzey-amerika` 1867 KESİMİ
// Oturum: AMERİKA-OKYANUSYA · koordinatör 1.MURAT HÜDAVENDİGAR
//
// 🔴🔴 BU DOSYA TEK BAŞINA UYGULANMAZ — İKİSİ BİRLİKTE İNER:
//     ① denetim/yer_yama_amerika_1923.js          (bu dosya · 3 nokta)
//     ② denetim/ONERI-KUNYE-AMERIKA-1923.json     (künye `t:` kesimi)
//   Yalnız NOKTA inerse : `4c` temiz kalır ama künye 56 YIL FAZLA durur.
//   Yalnız KÜNYE inerse : ÜÇ HAYALET doğar (künye 1867'de biter,
//                          noktalar 1923'e kadar onu kullanmaya devam eder).
//
// TEŞHİS: `kanada` künyesi f:1867-07-01 ile indi; `ingiliz-kuzey-amerika`
// t: hâlâ 1923-10-29 ⇒ 1867-1923 arası aynı toprak İKİ kimlikle boyanıyor
// (`kanada` 185 nokta · `ingiliz-kuzey-amerika` 3 nokta — ölçüldü).
//
// 🟢 DEĞİŞMEZ 2 BORCU YOK — ve gerekçe İKİ AYRI ÖLÇÜM:
//    ① GÜN ZATEN KIRILIYOR: 1867-07-01'de canlı veride 254 dönem ucu
//       kırılıyor. Yamanın eklediği 3 uç YENİ BİR GÜN AÇMIYOR.
//    ② KAPSAM DIŞI: `2s` küresi `d:`/`v:` taşıyan 929 nokta; üçünün
//       en yakın Osmanlı noktasına uzaklığı 5406-6000 km (eşik 2014).
//    🔴 İLK YAZIMDA "bu gün çekirdekte ZATEN maddeli" DEMİŞTİM —
//       ÖLÇTÜM, YANLIŞ: ±30 gündeki iki madde de Osmanlı (Abdülaziz'in
//       seyahati · hidiv unvanı); Kanada maddesi çekirdekte YOK.
//       Hafızadan gelen bir cümleyi ölçmeden başlığa yazmıştım.
//       Ölçüm: denetim/ARAC-AMERIKA-1923-KAPSAM.js
// 🟢 BAŞKA BÖLGE ETKİLENMİYOR — ve bu KÜRESEL ölçüldü, 1923'e bakarak DEĞİL:
//    künyeyi kullanan 130 dönemin yalnız BU ÜÇÜ kesim gününü aşıyor;
//    kalan 127 zaten 1867-07-01'de bitiyor. (1923 kesitine bakan bir
//    ölçüm, 1900'de biten bir hayalet dönemi GÖREMEZDİ.)
//    Ölçüm: denetim/ARAC-AMERIKA-1923-KUNYE-SINA.js
// 🔴 GÜN KAYNAKLI: 1867-07-01 British North America Act'in yürürlük günü —
//    künyenin `f:`inden DEVRALINMADI, belgenin kendi günü.
//
// ÜRETİM: denetim/ARAC-AMERIKA-1923-YAMA-URET.js — CANLI veriden,
// elle YAZILMADI. Üretici dönem kaybını · süreksizliği · ters dönemi sınar.
// =====================================================================

window.YER_YAMA_AMERIKA_1923 = [

// ── Quebec ──  (kaynak kayıt: data/yerlesimler_amerika.js)
// eski: fransa 1608-07-03→1763-02-10 · ingiliz-kuzey-amerika 1763-02-10→1923-10-29
{ ad:"Quebec",
  s:[{f:"1608-07-03",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},
     {f:"1867-07-01",t:"1923-10-29",d:"kanada"}] },

// ── Montreal (Ville-Marie) ──  (kaynak kayıt: data/yerlesimler_amerika.js)
// eski: fransa 1642-05-17→1763-02-10 · ingiliz-kuzey-amerika 1763-02-10→1923-10-29
{ ad:"Montreal (Ville-Marie)",
  s:[{f:"1642-05-17",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},
     {f:"1867-07-01",t:"1923-10-29",d:"kanada"}] },

// ── Port Royal (Acadia) ──  (kaynak kayıt: data/yerlesimler_amerika.js)
// eski: fransa 1605-01-01→1713-04-11 · ingiltere 1713-04-11→1763-02-10 · ingiliz-kuzey-amerika 1763-02-10→1923-10-29
{ ad:"Port Royal (Acadia)",
  s:[{f:"1605-01-01",t:"1713-04-11",d:"fransa"},
     {f:"1713-04-11",t:"1763-02-10",d:"ingiltere"},
     {f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},
     {f:"1867-07-01",t:"1923-10-29",d:"kanada"}] },

];

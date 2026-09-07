// -*- coding: utf-8 -*-
// YER_YAMA_KAMERIKA_DEVIR_0907 — KIMLIK-1923-0907 · 7 Eylul 2026
// Sevk: 1.MURAT — "37 nokta modern ABD icinde ama 1923'te meksika/kanada"
// ---------------------------------------------------------------------
// 🔴 37 DEGIL 42 — ve fark §3.5.1'in "IKI UC DA OLCULUR" kuralindan cikti:
//   ABD icinde kanada 19 · ABD icinde meksika 18   (sevkin saydigi 37)
//   Kanada icinde abd  4 · Meksika icinde abd   1  (TERS YON, 5 — yeni)
//   Tek yonlu arama besini kacirir, ve kacirdigi 5 daha AGIR bir sinif:
//   orada eksik bir devir yok, KIMLIK BASTAN YANLIS (Tehuantepec 1523'ten
//   beri "ingiltere" yaziyor; Newfoundland 1783'te ABD olmus gorunuyor).
//
// NE YAPAR: 27 kaydin `s:` zincirine eksik devir donemini yazar.
//   `s:` dizileri TAM DEGISIMDIR (uygulayicinin sozlesmesi) — kayitlarin
//   TAMAMI canli veriden URETILDI, elle yazilmadi.
//
// 🔴 UC SINAV, uc de gecti (arac/denetim/ARAC-KAMERIKA-YAMA-0907.py):
//   (1) KAPSAMA  yeni zincirin ilk `f`si + son `t`si eskisiyle AYNI, ic
//       bosluk yok ⇒ `Degismez 1` ihlal edilemez. Sevkin uyardigi tam
//       bu: "meksika donemini kesmek abd donemi acmiyorsa SAHIPSIZLIK
//       dogar."
//   (2) KUNYE   her yeni donem kimliginin kunye penceresinin ICINDE
//       (§3.5.0: ardil kunyenin VAR olmasi yazilabilir oldugu anlamina
//       gelmez, PENCERESI de tutmali).
//   (3) BICIM   ters/sifir/cakisan donem yok (§8).
//
// 🔴 TARIH KONVANSIYONU SECILMEDI, ATLASTAN OKUNDU:
//   `ingiliz-kuzey-amerika f:1763-02-10` = Paris Antlasmasi IMZASI
//   veride kullanilan `1783-09-03` = Paris 1783 IMZASI
//   ⇒ atlas antlasmalarda IMZA gununu kullaniyor; bu yama ona uyar.
//   TEK ISTISNA: imza ile yururluk arasi BIR YILDAN uzunsa imza gunu
//   tasarrufu yanlis tarihler. Adams-Onis 1819'da imzalandi, Ispanya
//   Florida'yi 1821'e kadar birakmadi ⇒ TASDIK gunu (1821-02-22).
//   §11: "atlas TASARRUFU boyar."
//
// KAYNAKLAR — Avalon Project (Yale Law School), birincil metin nesri:
//   Guadalupe Hidalgo  imza 1848-02-02 · tasdik teatisi 1848-05-30   10 nokta
//   Oregon             imza 1846-06-15 · 49. paralel                  7 nokta
//   Gadsden            imza 1853-12-30 · ilan 1854-06-30 · Gila'nin G  2 nokta
//   Adams-Onis         imza 1819-02-22 · TASDIK 1821-02-22             2 nokta
//   Teksas             1836-03-02 / 1845-12-29 — ATLASIN KENDI kunyesinden,
//                      yeni hassasiyet URETILMEDI                      1 nokta
//   Ters yon (5)       atlasin kendi kunye gunleriyle duzeltildi
//
// 🔴 BU YAMANIN DISINDA BIRAKILAN 15 NOKTA — ve niCIN, adiyla:
//   ALASKA 5 (Alatna · Fort Yukon · Nikolai · Nuchalawoya · Telida)
//     Zincir "ingiliz-kuzey-amerika -> kanada" diyor; Alaska Rus'tu.
//     Parca parca yamak IKI kotu secenekten birini dayatiyor: `kanada`yi
//     1867-10-18'de kesip `abd` acmak 1867-07-01..10-18 arasi 109 GUNLUK
//     SAHIPSIZLIK dogurur; bosluğu `ingiliz-kuzey-amerika` ile kapatmak
//     "Alaska Ingilizdi" yalanini DERINLESTIRIR. Dogru cozum tam zincir
//     yeniden yazimi ve `rus-amerika` KUNYESI YOK (`rusya` 1547-1917 var).
//     ⇒ AYRI KALEM. Yarim yamamak, yamamamaktan kotudur.
//   DOGU SINIRI 7 (Duluth · Fort St. Pierre · Grand Portage · Keweenaw ·
//     Madawaska · Sault Ste. Marie · Pembina)
//     Bunlar bir DEVIR degil bir SINIR TAHDIDI meselesi (Paris 1783 ·
//     1818 Konvansiyonu 49. paralel · Webster-Ashburton 1842). Kaynak
//     ARANDI ama Avalon'da tam metne INILEMEDI (indeks "October 20"
//     diyor, govde gelmedi) ⇒ `olculemedi`, `bulunamadi` DEGIL.
//     Ayrica ucu (Sault Ste. Marie · Madawaska · Grand Portage) sinirin
//     TAM USTUNDE: modern poligon testi orada zayif kanittir.
//   ST. LOUIS 1  Louisiana Purchase (1803) kalemi; kaynak METNINE
//     ULASILAMADI (slug 404). Tarih tahmin edilmedi ⇒ `olculemedi`.
//   EL PASO DEL NORTE 1  "El Paso del Norte" Ciudad Juarez'in TARIHI
//     ADIDIR ve o sehir MEKSIKA'DA KALDI. Nokta (31.760/-106.490) modern
//     ABD poligonuna ~1 km ile dusuyor. Yani veri MUHTEMELEN DOGRU,
//     KOORDINAT supheli. Bir `abd` donemi yazmak burada GERCEGI SILERDI
//     (§11: "ihlali kapatan bir recete gercegi silebilir"). ⇒ DOKUNULMADI.
//   YUMA GECIDI 1  Gila-Colorado kavsagi: 1848 sinirini da 1854 sinirini
//     da savunan okuma var ve ikisi 6 yil ayrisiyor. Iki adayin da 1923
//     kimligi `abd` — yani DUSUK RISK — ama GUNU belirlenemedi. ⇒ AYRI.
//
// ON KOSUL: yok. Kullanilan alti kimligin (abd · kanada ·
//   ingiliz-kuzey-amerika · ingiltere · yeni-ispanya · meksika ·
//   teksas-cumhuriyeti) kunyesi de rengi de MEVCUT.
window.YER_YAMA_KAMERIKA_DEVIR_0907 = [
 {
  "ad": "Albuquerque",
  "s": [
   {
    "f": "1706-04-23",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Boise (Fort Boise)",
  "s": [
   {
    "f": "1834-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Fort Astoria",
  "s": [
   {
    "f": "1811-04-12",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Fort Colvile",
  "s": [
   {
    "f": "1825-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Fort Hall",
  "s": [
   {
    "f": "1834-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Fort Nez Percés (Walla Walla)",
  "s": [
   {
    "f": "1818-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Fort Robidoux (Uinta Havzası)",
  "s": [
   {
    "f": "1832-01-01",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Fort Vancouver",
  "s": [
   {
    "f": "1825-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "Kahnawake",
  "s": [
   {
    "f": "1667-01-01",
    "t": "1777-01-01",
    "d": "haudenosaunee"
   },
   {
    "f": "1777-01-01",
    "t": "1783-09-03",
    "d": "ingiltere"
   },
   {
    "f": "1783-09-03",
    "t": "1867-07-01",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1867-07-01",
    "t": "1923-10-29",
    "d": "kanada"
   }
  ],
  "kaynak": "Bu nokta modern Kanada icinde ve 1783'te ABD'ye GECMEDI. Atlasin kendi kunye gunleri kullanildi: `ingiliz-kuzey-amerika` (f:1763-02-10) ve `kanada` (f:1867-07-01, Konfederasyon)."
 },
 {
  "ad": "La Junta de los Ríos (Presidio)",
  "s": [
   {
    "f": "1683-01-01",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Laredo",
  "s": [
   {
    "f": "1755-05-15",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Las Vegas (Yeni Meksika)",
  "s": [
   {
    "f": "1835-01-01",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Los Adaes",
  "s": [
   {
    "f": "1721-01-01",
    "t": "1821-02-22",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-02-22",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Adams-Onis Antlasmasi, imza 22 Subat 1819, TASDIK VE ILAN 22 Subat 1821 (Avalon Project, Yale). Ispanya 'East and West Florida'yi devreder, bati sinirini Sabine nehrine ceker. TASDIK gunu kullanildi: imza ile yururluk arasi IKI YIL ve Ispanya o sure boyunca tasarrufu birakmadi."
 },
 {
  "ad": "Los Ángeles (El Pueblo)",
  "s": [
   {
    "f": "1781-09-04",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Mission San Luis (Apalaçi)",
  "s": [
   {
    "f": "1656-01-01",
    "t": "1821-02-22",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-02-22",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Adams-Onis Antlasmasi, imza 22 Subat 1819, TASDIK VE ILAN 22 Subat 1821 (Avalon Project, Yale). Ispanya 'East and West Florida'yi devreder, bati sinirini Sabine nehrine ceker. TASDIK gunu kullanildi: imza ile yururluk arasi IKI YIL ve Ispanya o sure boyunca tasarrufu birakmadi."
 },
 {
  "ad": "Monterey (Alta California)",
  "s": [
   {
    "f": "1770-06-03",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Nacogdoches",
  "s": [
   {
    "f": "1779-01-01",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1836-03-02",
    "d": "meksika"
   },
   {
    "f": "1836-03-02",
    "t": "1845-12-29",
    "d": "teksas-cumhuriyeti"
   },
   {
    "f": "1845-12-29",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Teksas: Meksika'dan ayrilma 2 Mart 1836, ABD'ye katilim 29 Aralik 1845. Tarihler atlasin KENDI kunyesinden alindi (devletler.js `teksas-cumhuriyeti` f:1836-03-02 t:1845-12-29) — yeni bir hassasiyet URETILMEDI."
 },
 {
  "ad": "Ossossané",
  "s": [
   {
    "f": "1281-01-01",
    "t": "1649-03-16",
    "d": "vendat"
   },
   {
    "f": "1649-03-16",
    "t": "1783-09-03",
    "d": "ingiltere"
   },
   {
    "f": "1783-09-03",
    "t": "1867-07-01",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1867-07-01",
    "t": "1923-10-29",
    "d": "kanada"
   }
  ],
  "kaynak": "Bu nokta modern Kanada icinde ve 1783'te ABD'ye GECMEDI. Atlasin kendi kunye gunleri kullanildi: `ingiliz-kuzey-amerika` (f:1763-02-10) ve `kanada` (f:1867-07-01, Konfederasyon)."
 },
 {
  "ad": "Sainte-Marie-au-pays-des-Hurons",
  "s": [
   {
    "f": "1639-01-01",
    "t": "1649-03-16",
    "d": "vendat"
   },
   {
    "f": "1649-03-16",
    "t": "1783-09-03",
    "d": "ingiltere"
   },
   {
    "f": "1783-09-03",
    "t": "1867-07-01",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1867-07-01",
    "t": "1923-10-29",
    "d": "kanada"
   }
  ],
  "kaynak": "Bu nokta modern Kanada icinde ve 1783'te ABD'ye GECMEDI. Atlasin kendi kunye gunleri kullanildi: `ingiliz-kuzey-amerika` (f:1763-02-10) ve `kanada` (f:1867-07-01, Konfederasyon)."
 },
 {
  "ad": "San José de Guadalupe",
  "s": [
   {
    "f": "1777-11-29",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Santa Bárbara",
  "s": [
   {
    "f": "1782-04-21",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Santa Rita del Cobre",
  "s": [
   {
    "f": "1804-01-01",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1848-02-02",
    "d": "meksika"
   },
   {
    "f": "1848-02-02",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Guadalupe Hidalgo Antlasmasi, imza 2 Subat 1848 (Avalon Project, Yale Law School: 'concluded at Guadalupe Hidalgo, February 2, 1848'; tasdik teatisi Queretaro 30 Mayis 1848). Meksika'nin kuzey topraklarini ABD'ye devri."
 },
 {
  "ad": "Spokane House",
  "s": [
   {
    "f": "1810-01-01",
    "t": "1846-06-15",
    "d": "ingiliz-kuzey-amerika"
   },
   {
    "f": "1846-06-15",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Oregon Antlasmasi, imza 15 Haziran 1846 (Avalon Project, Yale: 'Done at Washington, the fifteenth day of June ... 1846'). Sinir 'the forty-ninth parallel of north latitude' boyunca Pasifik'e kadar; bu nokta 49. paralelin GUNEYINDE kaliyor."
 },
 {
  "ad": "St. John's (Newfoundland)",
  "s": [
   {
    "f": "1583-08-05",
    "t": "1923-10-29",
    "d": "ingiltere"
   }
  ],
  "kaynak": "Newfoundland 1783'te ABD'ye GECMEDI; atlas ufku boyunca Ingiliz kaldi. Mevcut `ingiltere` donemi 1923-10-29'a uzatildi — yeni bir kimlik ya da yeni bir tarih URETILMEDI."
 },
 {
  "ad": "Tehuantepec",
  "s": [
   {
    "f": "1281-01-01",
    "t": "1523-01-01",
    "d": "zapotek-krallik"
   },
   {
    "f": "1523-01-01",
    "t": "1783-09-03",
    "d": "ingiltere"
   },
   {
    "f": "1783-09-03",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1923-10-29",
    "d": "meksika"
   }
  ],
  "kaynak": "Tehuantepec (Oaxaca) 1783'te ABD'ye GECMEDI. Yeni Ispanya -> Meksika zinciri atlasin KENDI kunye gunuyle kuruldu (`meksika` f:1821-09-27). ⚠️ Bu kaydin 1523-1783 arasi hala `ingiltere` yaziyor ve o AYRI bir kusurdur — bu yama ona DOKUNMUYOR (kaynak aranmadi)."
 },
 {
  "ad": "Tubac",
  "s": [
   {
    "f": "1752-01-01",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1853-12-30",
    "d": "meksika"
   },
   {
    "f": "1853-12-30",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Gadsden Antlasmasi, imza 30 Aralik 1853, ilan 30 Haziran 1854 (Avalon Project, Yale). Devredilen toprak Gila nehrinin GUNEYINDE; bu nokta orada."
 },
 {
  "ad": "Tucson (San Agustín del Tucsón)",
  "s": [
   {
    "f": "1775-08-20",
    "t": "1821-09-27",
    "d": "yeni-ispanya"
   },
   {
    "f": "1821-09-27",
    "t": "1853-12-30",
    "d": "meksika"
   },
   {
    "f": "1853-12-30",
    "t": "1923-10-29",
    "d": "abd"
   }
  ],
  "kaynak": "Gadsden Antlasmasi, imza 30 Aralik 1853, ilan 30 Haziran 1854 (Avalon Project, Yale). Devredilen toprak Gila nehrinin GUNEYINDE; bu nokta orada."
 }
];

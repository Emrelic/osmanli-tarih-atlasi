// =====================================================================
// ÜÇ GUYANA — SÖMÜRGE KİMLİĞİ (âtıl üç künye canlandırılıyor)
// Oturum: AMERİKA-OKYANUSYA · koordinatör 1.MURAT HÜDAVENDİGAR
//
// TEŞHİS: üç künyenin de künyesi VE rengi var, veride SIFIR dönem —
// yani üç sömürge bugün metropol kimliğiyle boyanıyor (`ingiltere` ·
// `hollanda` · `fransa-cumhuriyet`). Bu bir HATA değil bir TANECİK
// eksiği: atlasın konvansiyonu büyük sömürgeye kendi kimliğini verir
// (`ingiliz-hindistani` 70-76 nokta · `ingiliz-kuzey-amerika` 130 dönem).
//
// 🔴 HİÇBİR TARİH ÜRETİLMEDİ. Yama yalnız kimlik değiştiriyor; tek
// bölme 1831-01-01'de ve o gün künyeden DEĞİL TDV'den geliyor.
//
// KAYNAK — her kimlik için AYRI ölçüldü:
//   ingiliz-guyanasi  🟢 TDV `guyana` (16.748 kar., kesilmeden okundu):
//     «1831'de Demerara ve Essequibo Birleşik Kolonisi ile Berbice
//      birleştirilerek İngiliz Guyanası oluşturuldu»  — YIL hassasiyeti,
//      gün VERMİYOR ⇒ künyenin `1831-01-01`i §4'e uygun.
//   hollanda-guyanasi 🟢 TDV `surinam` (18.425 kar.): «Breda Antlaşması'yla
//     (1667) New Amsterdam'a (New York) karşılık Surinam'daki haklarını
//      Hollanda'ya bıraktı» — YIL. Veri günü (1667-07-31) daha kesin.
//   fransiz-guyanasi  🔴 TDV KAPSAMIYOR — ölçüldü: `guyan` · `cayenne` ·
//     `fransiz-guyanasi` · `guyanlar` · `latin-amerika` · `karayipler` ·
//     `antiller` · `guyana--fransiz` = 302. Kapsayıcı `amerika` (75.093
//      kar.) ve `fransa` (122.179 kar.) gövdeleri OKUNDU: `amerika` üç
//      Guyana'yı ANIYOR ama TARİHLEMİYOR (§4'ün ANMA boşluğu), `fransa`
//      Guyana'yı hiç anmıyor. ⇒ §4 COĞRAFÎ boşluk.
//      Bu yama Cayenne'in gününü DEĞİŞTİRMİYOR — 1817-01-01 veride
//      ZATEN var; yalnız kimlik `fransa-cumhuriyet` → `fransiz-guyanasi`.
//
// 🔴 YANLIŞ ATIF ÖNLENDİ — `hollanda-guyanasi` YALNIZ PARAMARIBO'YA:
//   künyenin adı «Hollanda Guyanası (SURİNAM)». Essequibo · Demerara ·
//   Berbice AYRI Hollanda kolonileriydi ve TDV `guyana` onları adıyla
//   ayırıyor. Onların Hollanda dönemlerine bu kimliği yazmak
//   `§3.5.-1` «devlet var, YERİ YANLIŞ» sınıfı olurdu (Fizan'a `hafsi`).
//   ⇒ O dönemler `hollanda` olarak KALIYOR; kendi künyeleri YOK
//     (açık kalem, ONERI dosyasında).
//
// ÜRETİM: denetim/ARAC-GUYANA-YAMA-URET.js — CANLI veriden. Üreteç
// süreksizlik · ters dönem · künye penceresi · künyesiz kimlik sınar;
// biri düşerse yamayı YAZMAZ.
// =====================================================================

window.YER_YAMA_GUYANA = [

// ── Georgetown (Stabroek) ──  [yerlesimler_amerika.js]  1 dönem → ingiliz-guyanasi
// eski: fransa 1781-01-01→1784-01-01 · hollanda 1784-01-01→1796-04-22 · ingiltere 1796-04-22→1802-03-27 · hollanda 1802-03-27→1803-09-01 · ingiltere 1803-09-01→1923-10-29
{ ad:"Georgetown (Stabroek)",
  s:[{f:"1781-01-01",t:"1784-01-01",d:"fransa"},
     {f:"1784-01-01",t:"1796-04-22",d:"hollanda"},
     {f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},
     {f:"1802-03-27",t:"1803-09-01",d:"hollanda"},
     {f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},
     {f:"1831-01-01",t:"1923-10-29",d:"ingiliz-guyanasi"}] },

// ── New Amsterdam (Berbice) ──  [yerlesimler_amerika.js]  1 dönem → ingiliz-guyanasi
// eski: hollanda 1627-01-01→1796-04-22 · ingiltere 1796-04-22→1802-03-27 · hollanda 1802-03-27→1803-09-01 · ingiltere 1803-09-01→1923-10-29
{ ad:"New Amsterdam (Berbice)",
  s:[{f:"1627-01-01",t:"1796-04-22",d:"hollanda"},
     {f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},
     {f:"1802-03-27",t:"1803-09-01",d:"hollanda"},
     {f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},
     {f:"1831-01-01",t:"1923-10-29",d:"ingiliz-guyanasi"}] },

// ── Kyk-over-al (Essequibo) ──  [yerlesimler_gamerika.js]  1 dönem → ingiliz-guyanasi
// eski: hollanda 1616-01-01→1803-09-01 · ingiltere 1803-09-01→1923-10-29
{ ad:"Kyk-over-al (Essequibo)",
  s:[{f:"1616-01-01",t:"1803-09-01",d:"hollanda"},
     {f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},
     {f:"1831-01-01",t:"1923-10-29",d:"ingiliz-guyanasi"}] },

// ── Paramaribo ──  [yerlesimler_amerika.js]  3 dönem → hollanda-guyanasi
// eski: ingiltere 1630-01-01→1667-07-31 · hollanda 1667-07-31→1799-01-01 · ingiltere 1799-01-01→1802-03-27 · hollanda 1802-03-27→1804-01-01 · ingiltere 1804-01-01→1816-01-01 · hollanda 1816-01-01→1923-10-29
{ ad:"Paramaribo",
  s:[{f:"1630-01-01",t:"1667-07-31",d:"ingiltere"},
     {f:"1667-07-31",t:"1799-01-01",d:"hollanda-guyanasi"},
     {f:"1799-01-01",t:"1802-03-27",d:"ingiltere"},
     {f:"1802-03-27",t:"1804-01-01",d:"hollanda-guyanasi"},
     {f:"1804-01-01",t:"1816-01-01",d:"ingiltere"},
     {f:"1816-01-01",t:"1923-10-29",d:"hollanda-guyanasi"}] },

// ── Cayenne ──  [yerlesimler_amerika.js]  1 dönem → fransiz-guyanasi
// eski: fransa 1643-01-01→1792-09-22 · fransa-cumhuriyet 1792-09-22→1809-01-14 · portekiz 1809-01-14→1817-01-01 · fransa-cumhuriyet 1817-01-01→1923-10-29
{ ad:"Cayenne",
  s:[{f:"1643-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1809-01-14",d:"fransa-cumhuriyet"},
     {f:"1809-01-14",t:"1817-01-01",d:"portekiz"},
     {f:"1817-01-01",t:"1923-10-29",d:"fransiz-guyanasi"}] },

];

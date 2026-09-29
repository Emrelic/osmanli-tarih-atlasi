// =====================================================================
// VENEDİK CUMHURİYETİ — ÇOK KÜNYELİ EK KRONOLOJİ (KRONO-ITALYA-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_VENEDIK` → app.js `cokTarafliKronolojiEkle` her maddeyi
// `devlet:"venedik"` künyesine EKLER. `kronoloji_venedik.js` (86 madde) OLDUĞU GİBİ durur
// (KRONOLOJI_VENEDIK → künye `venedik`, bindirici); bu dosya ondan EKSİK olan Venedik-Osmanlı
// maddelerini ekler. ORTAK §4.1.
//
// MÜKERRER DENETİMİ (10.106 madde tarandı; denetim/KRONO-ITALYA-0929.md): 1416 Gelibolu ·
//   1463-79 · 1470 Eğriboz · 1499 İnebahtı teslimi (olaylar_ek10) · 1500 Modon-Koron ·
//   1537-40 · 1570-73 Kıbrıs · 1645-69 Girit · 1684 Kutsal İttifak · 1686 Modon (olaylar_ek6) ·
//   1687 Atina · 1699 · 1714-18 zaten VAR — TEKRARLANMADI.
//
// KAYNAK: TDV `korfu` · `inebahti` · `atina` · `dalmacya` (denetim/KRONO-ITALYA-0929-tdv-
//   onbellek/). TDV bu olaylarda gün vermez → `t:` `YYYY-01-01`/`YYYY-MM-01`, `gun:` alanı açıklar.
// =====================================================================

window.KRONOLOJI_COK_VENEDIK = [

{ t:"1386-01-01", b:"Korfu (Kerkyra) Venedik'e bağlandı", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["toprak-kazanc","konu-siyasi","konu-askeri"],
  yer_id:"Korfu", devlet:"venedik", gun:"1386 (TDV yalnız yıl verir)",
  d:"Epir, Sicilya (1259) ve Napoli (1267) arasında el değiştiren Korfu 1386'da Venedik'e bağlandı ve 1797'ye kadar Venedik'in elinde kaldı.",
  kaynak:"TDV `korfu`: \"Bazan Epir, bazan Sicilya (1259), Napoli (1267) hâkimiyetine giren Korfu daha sonra Venedik'e bağlandı (1386).\"" },

{ t:"1407-01-01", b:"İnebahtı Venedik'in eline geçti", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"ic", etiket:["toprak-kazanc","konu-siyasi","konu-askeri"],
  yer_id:"İnebahtı", devlet:"venedik", gun:"1407 (TDV yalnız yıl verir)",
  d:"İnebahtı, 1294'te kısa bir süre Anjou Frenk Prensliği'nin eline geçtikten sonra Arnavut Shpata Prensliği'nin hâkimiyetinde kalmıştı; 1407'de Venedikliler burayı aldı. Kasaba, Osmanlı'nın 1499'daki fethine kadar bir asra yakın Venedik elinde kaldı ve bu sürede surlarla tahkim edildi.",
  kaynak:"TDV `inebahti`: \"1294'te kısa bir süre Anjou Frenk Prensliği'nin eline geçtiyse de 1407'de Venedikliler tarafından alınmaya kadar Arnavut Shpata Prensliği'nin hâkimiyeti altında kaldı.\"" },

{ t:"1466-01-01", b:"Osmanlı-Venedik Savaşı'nda Venedikliler Osmanlı hâkimiyetindeki Atina'yı yağmaladı", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"Atina", devlet:"venedik", gun:"1466 (TDV yalnız yıl verir)",
  d:"1463-1479 Osmanlı-Venedik Savaşı sırasında Venedikliler 1466'da Osmanlı elindeki Atina'yı yağma ve talana uğrattı. Şehir bundan sonraki iki yüz yılı aşkın sürede Osmanlı barışı altında yeniden toparlandı ve ilk 150 yılda büyük bir gelişme gösterdi.",
  kaynak:"TDV `atina`: \"Şehir bir ara Osmanlı-Venedik savaşları sırasında Venedikliler'in yağma ve talanına uğradı ise de (1466) bundan sonraki 200 yılı aşkın sürede Osmanlı barışı (Pax Ottomanica) altında yeniden toparlandı.\"" },

{ t:"1538-01-01", b:"Venedikliler Dalmaçya'da Ostrovica, Obrovac ve Scardona'yı aldı, Osmanlı da Nadin'i ele geçirdi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri","konu-siyasi"],
  yer_id:"Zadar (Zara)", devlet:"venedik", gun:"1538 (TDV yalnız yıl verir)",
  d:"1537-1540 savaşı sırasında Dalmaçya cephesinde Venedikliler 1538'de Osmanlı hâkimiyetindeki Ostrovica (Sivrihisar), Obrovac ve Scardona kasabalarını aldı; karşılığında Osmanlı kuvvetleri de Nadin, Doubicza ve bazı başka kaleleri ele geçirdi. Nadin ve Urana kaleleri 1540 antlaşmasıyla Osmanlı'ya bırakıldı.",
  kaynak:"TDV `dalmacya`: \"1538'de Dalmaçya'da taarruza geçen Venedikliler, Osmanlı hâkimiyeti altındaki Ostrovica (Sivrihisar), Obrovac ve Scardona kasabalarını almışlar buna karşılık Osmanlı kuvvetleri de Nadin, Doubicza ve diğer bazı kaleleri ele geçirmişlerdi.\"" },

{ t:"1684-01-01", b:"Venedikliler Dalmaçya cephesinde pek çok kaleyi zaptetti", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kazanc","savas","konu-askeri"],
  yer_id:"Zadar (Zara)", devlet:"venedik", gun:"1684 (TDV yalnız yıl verir; adları TDV vermez)",
  d:"Kutsal İttifak savaşına katılan Venedik, Mora seferinin yanında Dalmaçya cephesinde de harekete geçti ve 1684'te pek çok kaleyi zaptetti.",
  kaynak:"TDV `dalmacya`: \"1684'te Venedikliler Dalmaçya cephesinde pek çok kaleyi zaptettiler.\" — kalelerin adları TDV'de yok: bulunamadı." },

{ t:"1715-09-01", b:"Ayamavra (Lefkada) yeniden Osmanlı hâkimiyetine geçti", tur:"toprak-kayip",
  onem:2, dunya:1, kapsam:"dis", etiket:["toprak-kayip","savas","konu-askeri"],
  yer_id:"", odak_yer:"Ayamavra (Lefkada)", devlet:"venedik", gun:"Eylül 1715 (TDV `ayamavra` ay verir, gün vermez)",
  d:"1684'te Venedik donanması Ayamavra'yı topa tutup işgal etmiş, 1699 Karlofça Antlaşması'yla ada tamamen Venedik'e bırakılmıştı. Eylül 1715'te ada yeniden Osmanlı hâkimiyetine geçti ve derhal nüfus ve vergi tespiti yapıldı; 1718'de Pasarofça Antlaşması'yla Venedik'e terk edilerek 1797'ye kadar onların elinde kaldı.",
  kaynak:"TDV `ayamavra`: \"Eylül 1715'te burası yeniden Osmanlı hâkimiyetine geçti ve derhal adanın nüfus ve vergi tesbiti yapıldı. 1718'de Pasarofça Antlaşması ile ada Venedik'e terkedildi ve 1797'ye kadar onların elinde kaldı.\"" },

{ t:"1687-07-01", b:"İnebahtı, komşu kalelerle birlikte Venedik'e teslim oldu", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kayip","savas","konu-askeri"],
  yer_id:"İnebahtı", devlet:"venedik", gun:"Temmuz 1687 (TDV `inebahti` ay verir, gün vermez) — atlasın 1687-08-06 kırılması TDV ile çelişir, bkz. DUZELTME",
  d:"Uzun süre direnen İnebahtı, 1683-1699 savaşları sırasında yanındaki diğer kalelerle birlikte 1687 Temmuzunda düştü. Kasaba, Venedik'in elinde Karlofça Antlaşması'ndan (1699) bir yıl sonrasına kadar kaldı.",
  kaynak:"TDV `inebahti`: \"1683-1699 savaşları sırasında İnebahtı, uzun süre saldırılara direndiyse de sonunda yanındaki diğer kalelerle birlikte 1687 Temmuzunda düştü.\"" }

];

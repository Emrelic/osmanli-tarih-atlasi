// =====================================================================
// SINIR KRONOLOJİSİ — D5-AMERIKA (Kuzey · Orta · Güney Amerika · Karayipler)
// =====================================================================
// window.KRONOLOJI_SINIR_AMERIKA — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_amerika.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği
//   sinir_id  : d_sinirlar_amerika.js kayıt kimliği
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM:
//   G1 (1918-11-11 → 1923-10-29): E/F/D değişikliği YOK ⇒ madde 0.
//     Bu penceredeki iki belge C düzeyinde: Thomson–Urrutia onayı (1 Mar 1922)
//     ve Kolombiya–Venezuela İsviçre kararı (24 Mar 1922). Şartname gereği madde almadı.
//   G2 (1914-07-28 → 1918-11-11): 1 madde (Kolombiya–Ekvador, 26 Oca 1917).
//     Kanal Bölgesi 1914 sözleşmesi (yürürlük 11 Şub 1915) hukuken E ama hattı
//     çizilmedi (kayıt YOK) ⇒ madde almadı. Hollanda–Fransız Guyanası 1915
//     sözleşmesi (Stoelman–Portal adaları) YOK kutusu içinde ⇒ madde almadı.
//
// KAYNAK (§4): TDV bu coğrafyayı kapsamıyor. Gordon Ireland, Boundaries,
// Possessions, and Conflicts in South America (Harvard UP, 1938), s. 183–185
// (archive.org OCR metni bu oturumda okundu) · Cancillería de Colombia.

//   G3 (1878-07-13 → 1914-07-28): 5 madde — Meksika–Guatemala 1882 · Brezilya
//     cumhuriyeti 1889 (iki E hattının tarafı değişti, hat aynı) · Honduras–Nikaragua
//     batısı 1896 · Arjantin–Brezilya 1900. C düzeyindeki belgeler (1899 Paris kararı,
//     1904 İtalya Kralı kararı, 1904 Bolivya–Şili, 1909 Merín Gölü …) madde almadı.
//     Kaynaklar: IBS 159 · IBS 36 · IBS 168 · Ireland 1938 · Library of Congress.

window.KRONOLOJI_SINIR_AMERIKA = [

{ t:"1882-09-27", devlet:"meksika", devletler:["meksika","guatemala"], sinir_id:"d1923-mx-gt",
  b:"Meksika–Guatemala Sınır Antlaşması imzalandı — Guatemala, Chiapas ve Soconusco üzerindeki haklarından vazgeçti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","meksika","guatemala"],
  d:"27 Eylül 1882 tarihli antlaşmanın 1. maddesiyle Guatemala, Chiapas ve Soconusco üzerindeki iddialarından vazgeçti; 3. madde hattı sekiz kesim hâlinde tarif etti. 1883 protokolüyle kurulan sınır komisyonları hattı sütun ve anıtlarla işaretledi ve bu iş Mayıs 1899'da bitti. Salinas (Chixoy) kesimindeki belirsizliği 1 Nisan 1895 sözleşmesi giderdi. Tarih imza günüdür; onay günü bulunamadı.",
  kaynak:"IBS No. 159 Guatemala–Mexico s. 3–5 ('By May 1899, the demarcation of the boundary with pillars or monuments was completed')" },

{ t:"1889-11-15", devlet:"brezilya-cumhuriyeti", devletler:["brezilya-cumhuriyeti","paraguay-cumhuriyeti"], sinir_id:"d1923-br-py",
  b:"Brezilya'da cumhuriyet ilan edildi — 1872 Paraguay sınırı Brezilya Cumhuriyeti'ne geçti", tur:"kurulus", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","brezilya-cumhuriyeti","brezilya-imparatorlugu","paraguay-cumhuriyeti"],
  d:"15 Kasım 1889'daki darbe monarşiyi devirdi ve Brezilya Birleşik Devletleri Cumhuriyeti'ni ilan etti. Paraguay ile sınır değişmedi. Bu hat 1872 Loizaga–Cotegipe Antlaşması'yla çizilmiş ve 1874'te işaretlenmişti; Iguazú ağzından Apa ağzına uzanıyordu. Apa ağzı ile Bahía Negra arasındaki Paraguay nehri kesimi 1927'ye kadar antlaşmayla tanımlanmadı.",
  kaynak:"Library of Congress, Brazil–U.S. Relations: First Republic ('On November 15, 1889, a coup d'état overthrew the monarchy') · Ireland 1938 (Harvard UP) s. 121–123" },

{ t:"1889-11-15", devlet:"brezilya-cumhuriyeti", devletler:["brezilya-cumhuriyeti","peru-cumhuriyeti"], sinir_id:"d1923-br-pe-tabatinga-apaporis",
  b:"Brezilya'da cumhuriyet ilan edildi — Peru ile Tabatinga–Apaporis hattı Brezilya Cumhuriyeti'ne geçti", tur:"kurulus", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","brezilya-cumhuriyeti","brezilya-imparatorlugu","peru-cumhuriyeti"],
  d:"15 Kasım 1889'da monarşinin devrilmesiyle Brezilya'nın Peru ile olan Tabatinga–Apaporis ağzı düz hattı cumhuriyete geçti; hattın yeri değişmedi. Hat 1851 sözleşmesine dayanıyordu (onaylar 18 Ekim 1852'de değiş tokuş edildi) ve 1866–1874 arasında işaretlenmişti. Kolombiya bu hat üzerindeki haklarını saklı tutuyordu. 1928'den sonra hat Brezilya–Kolombiya sınırı oldu.",
  kaynak:"Library of Congress, Brazil–U.S. Relations: First Republic · Ireland 1938 (Harvard UP) s. 125–130 · IBS No. 174 Brazil–Colombia" },

{ t:"1896-12-24", devlet:"honduras-cumhuriyeti", devletler:["honduras-cumhuriyeti","nikaragua-cumhuriyeti"], sinir_id:"d1923-hn-ni-bati",
  b:"Tegucigalpa Sınır Antlaşması yürürlüğe girdi — Honduras–Nikaragua sınırı için karma komisyon", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","honduras-cumhuriyeti","nikaragua-cumhuriyeti"],
  d:"7 Ekim 1894'te imzalanan antlaşmanın onayları 24 Aralık 1896'da San Salvador'da değiş tokuş edildi. Antlaşma bir karma komisyon kurdu ve anlaşmazlık için tahkim öngördü. Komisyon 1900–1904 arasında Pasifik'ten Portillo de Teotecacinte'ye kadar olan batı kesimini işaretledi. Doğu kesimde uzlaşma sağlanamadı; o kesim 1906 İspanya Kralı kararına ve Nikaragua'nın bu karara itirazına kaldı.",
  kaynak:"IBS No. 36 Honduras–Nicaragua s. 5–8 ('From 1900 to 1904, the commission demarcated the western portion of the boundary')" },

{ t:"1900-05-26", devlet:"arjantin-cumhuriyeti", devletler:["arjantin-cumhuriyeti","brezilya-cumhuriyeti"], sinir_id:"d1923-ar-br",
  b:"Arjantin–Brezilya Sınır Antlaşması yürürlüğe girdi — Misiones anlaşmazlığı Cleveland kararıyla kapandı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","arjantin-cumhuriyeti","brezilya-cumhuriyeti"],
  d:"ABD Başkanı Cleveland'ın 5 Şubat 1895 hakem kararı, Misiones'teki tartışmalı bölgede Pepirí-Guazú ve San Antonio nehirlerini sınır olarak belirledi. Bu hat 6 Ekim 1898 antlaşmasıyla bütün sınıra yayıldı; onaylar 26 Mayıs 1900'de değiş tokuş edildi. Karma komisyon sınırı 1900–1904 arasında işaretledi. Quaraí ağzındaki Brasilera Adası kesimi 1927 sözleşmesiyle değişti.",
  kaynak:"IBS No. 168 Argentina–Brazil s. 5–11 ('the demarcation carried out throughout the whole extent of the frontier is accepted')" },

{ t:"1917-01-26", devlet:"kolombiya-cumhuriyeti", devletler:["kolombiya-cumhuriyeti","ekvador-cumhuriyeti"], sinir_id:"d1923-co-ec",
  b:"Muñoz Vernaza–Suárez Antlaşması yürürlüğe girdi — Kolombiya–Ekvador sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Bacatá (Bogotá)",
  etiket:["sinir","antlasma","konu-siyasi","kolombiya-cumhuriyeti","ekvador-cumhuriyeti"],
  d:"15 Temmuz 1916'da Bogotá'da imzalanan antlaşma, sınırı Pasifik'teki Mataje ağzından başlatıp San Miguel ve Putumayo nehirleri boyunca doğuya uzattı. Ekvador 23 Eylül, Kolombiya 6 Aralık 1916'da onayladı; onaylar 26 Ocak 1917'de Bogotá'da değiş tokuş edildi. Karma komisyon 16 Temmuz 1917'de Quito'da toplanıp işaretlemeyi 9 Temmuz 1919'da Cartagena'da bitirdi. Hattın Güepí'nin doğusundaki kısmı, 1928'de yürürlüğe giren Kolombiya–Peru antlaşmasıyla Peru'ya geçti.",
  kaynak:"Ireland 1938 (Harvard UP) s. 183–185 ('ratifications exchanged at Bogota, Jan. 26, 1917') · Cancillería de Colombia, Frontera terrestre Colombia–Ecuador" },

];

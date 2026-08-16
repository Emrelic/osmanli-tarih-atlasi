// ============================================================================
// GÜNEYDOĞU ASYA — yerleşim noktaları
// Sahibi: NOKTA GDASYA oturumu. Şartname: oturumlar/NOKTA-GDASYA.md
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve ÜÇ YERE bağlandı
// (girdi.py · index.html · concat zinciri) — çünkü bağlanmamış dosya
// yazılmamış dosyadır ve oturumun KENDİ mükerrer taraması bile onu
// göremez. Bunu VERİ DEVLET yakaladı, koordinatör atlamıştı.
//
// Ölçülmüş boşluk (8 Ağustos 2026): pencere içindeki EN SEYREK bölge.
//   11 alt kutuda 76 nokta / ~23,3 mn km²  ⇒ yoğunluk 3,3
//   (Anadolu 130,1 · Avrupa 62,1 · Doğu Asya 8,8)
// Hedef 25 ⇒ ~580 nokta. İlk parti 120-150, kıyı ve nehir hatlarından.
//
// Kırılma günleri, mümkün olduğunca `data/devletler.js`teki MEVCUT s: zinciri
// örüntüleriyle (yerlesimler_asya.js'teki Pagan/Toungoo/Konbaung/Hanthawaddy
// noktalarından ölçülen) aynı tarihleri kullanır — sıfır kırılma borcu.
// ============================================================================
window.YERLESIMLER_GDASYA = [

// ---------- BİRMANYA (Irrawaddy koridoru) ----------
{ ad:"Pathein (Bassein)", tur:"liman", lat:16.78, lon:94.73, g:1, k:0,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1755-05-03",d:"hanthawaddy"},{f:"1755-05-03",t:"1852-04-14",d:"konbaung"},{f:"1852-04-14",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Thaton", tur:"sehir", lat:16.92, lon:97.37, g:0, k:0,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1757-05-06",d:"hanthawaddy"},{f:"1757-05-06",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Bhamo", tur:"sehir", lat:24.27, lon:97.23, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Shwebo", tur:"sehir", lat:22.57, lon:95.70, g:1, k:0,
  kur:"1313-01-01",
  s:[{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Taungdwingyi", tur:"sehir", lat:20.01, lon:95.40, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1542-05-19",d:"ava"},{f:"1542-05-19",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Myingyan", tur:"sehir", lat:21.46, lon:95.38, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Yenangyaung", tur:"sehir", lat:20.47, lon:94.87, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Katha", tur:"sehir", lat:24.19, lon:96.33, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Meiktila", tur:"sehir", lat:20.87, lon:95.86, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },

// ---------- SİYAM (Chao Phraya koridoru) ----------
{ ad:"Lopburi", tur:"sehir", lat:14.80, lon:100.62, g:1, k:0,
  s:[{f:"1281-01-01",t:"1351-03-04",d:"sukhothai"},{f:"1351-03-04",t:"1569-08-08",d:"ayutthaya"},{f:"1569-08-08",t:"1584-05-03",d:"toungoo"},{f:"1584-05-03",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phitsanulok", tur:"sehir", lat:16.82, lon:100.26, g:1, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1569-08-08",d:"ayutthaya"},{f:"1569-08-08",t:"1584-05-03",d:"toungoo"},{f:"1584-05-03",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Nakhon Ratchasima", tur:"sehir", lat:14.97, lon:102.10, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Songkhla", tur:"liman", lat:7.2079, lon:100.597, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phuket (Thalang)", tur:"liman", lat:7.89, lon:98.40, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Chiang Rai", tur:"sehir", lat:19.91, lon:99.83, g:0, k:0,
  s:[{f:"1281-01-01",t:"1558-04-02",d:"lan-na"},{f:"1558-04-02",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1774-01-15",d:"konbaung"},{f:"1774-01-15",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Chanthaburi", tur:"liman", lat:12.61, lon:102.10, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Nan", tur:"sehir", lat:18.78, lon:100.77, g:0, k:0,
  s:[{f:"1281-01-01",t:"1558-04-02",d:"lan-na"},{f:"1558-04-02",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1774-01-15",d:"konbaung"},{f:"1774-01-15",t:"1923-10-29",d:"siyam-chakri"}] },

// ---------- KAMBOÇYA-LAOS (Mekong koridoru) ----------
{ ad:"Kratie", tur:"liman", lat:12.49, lon:106.02, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kampot", tur:"liman", lat:10.61, lon:104.18, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Pursat", tur:"sehir", lat:12.53, lon:103.92, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1795-01-01",d:"kamboc-kralligi"},{f:"1795-01-01",t:"1907-03-23",d:"siyam-chakri"},{f:"1907-03-23",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kompong Cham", tur:"liman", lat:12.00, lon:105.46, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Xieng Khouang", tur:"sehir", lat:19.45, lon:103.15, g:0, k:0,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Savannakhet", tur:"liman", lat:16.56, lon:104.75, g:0, k:0,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },

// ---------- VİETNAM (Kızıl Nehir + orta/güney kıyı) ----------
// Kuzey zinciri (tran→ho→ming işgali→le→...) yerlesimler_asya.js'teki
// Hanoi/Cao Bang/Lang Son'dan BİREBİR alındı. ⚠️ Koordinatör düzeltmesi:
// 1281-1428 arası le-hanedani DEĞİL, tran-hanedani+ho-hanedani+ming-hanedani
// (Dördüncü Kuzey Egemenliği, 1407-1428) — bu şablon o düzeltmeyi uyguluyor.
{ ad:"Hai Phong", tur:"liman", lat:20.86, lon:106.68, g:1, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Nam Dinh", tur:"sehir", lat:20.42, lon:106.17, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Thanh Hoa/Vinh: Lê hanedanının çekirdek bölgesi — Mạc gasbı sırasında
// (1527-1592) BU BÖLGE Lê'ye sadık kaldı (Lê Trung Hưng direnişinin üssü),
// bu yüzden zincirde Mạc dönemi YOK, le-hanedani kesintisiz.
{ ad:"Thanh Hoa", tur:"sehir", lat:19.81, lon:105.78, g:1, k:2,kd:[{f:"1400-03-01",t:"1407-06-17",k:1,m:"Thanh Hoa"}],
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Vinh", tur:"sehir", lat:18.67, lon:105.69, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Nha Trang (Kauthara, Champa'nın güney vilayeti) — 1653'te Nguyễn beylerine
// düştü (Po Nraup'un yenilgisi); gün TDV/akademik kaynakta net değil, YIL
// BEYANI (§4). Sonrası Hội An/Đà Nẵng'ın güney zinciriyle aynı.
{ ad:"Nha Trang (Kauthara)", tur:"liman", lat:12.24, lon:109.19, g:0, k:0,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"campa"},{f:"1653-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1802-06-01",d:"tay-son"},{f:"1802-06-01",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },

// ---------- MALAYA (Malaka Boğazı) ----------
{ ad:"Pahang (Pekan)", tur:"sehir", lat:3.50, lon:103.40, g:0, k:0,
  s:[{f:"1281-01-01",t:"1888-01-01",d:"malay-sultanliklari"},{f:"1888-01-01",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Kelantan (Kota Bharu)", tur:"sehir", lat:6.13, lon:102.24, g:0, k:0,
  s:[{f:"1281-01-01",t:"1909-07-10",d:"malay-sultanliklari"},{f:"1909-07-10",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Terengganu (Kuala Terengganu)", tur:"liman", lat:5.33, lon:103.14, g:0, k:0,
  s:[{f:"1281-01-01",t:"1909-07-10",d:"malay-sultanliklari"},{f:"1909-07-10",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Negeri Sembilan (Seremban)", tur:"sehir", lat:2.72, lon:101.94, g:0, k:0,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"malay-sultanliklari"},{f:"1889-01-01",t:"1923-10-29",d:"ingiliz-malaya"}] },

// ---------- SUMATRA (doğu kıyısı) ----------
{ ad:"Lampung", tur:"liman", lat:-5.4489, lon:105.269, g:0, k:0,
  s:[{f:"1281-01-01",t:"1527-06-22",d:"palembang-sultanligi"},{f:"1527-06-22",t:"1808-01-01",d:"banten-sultanligi"},{f:"1808-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Bintan (Riau)", tur:"liman", lat:0.92, lon:104.45, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1923-10-29",d:"cohor-sultanligi"}] },
{ ad:"Barus", tur:"liman", lat:2.06, lon:98.39, g:0, k:0,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- JAVA (kuzey kıyısı + iç kesim) ----------
{ ad:"Cirebon", tur:"liman", lat:-6.71, lon:108.55, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-01-01",d:"sunda-pajajaran"},{f:"1526-01-01",t:"1677-01-01",d:"banten-sultanligi"},{f:"1677-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Malang", tur:"sehir", lat:-7.98, lon:112.63, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Madiun", tur:"sehir", lat:-7.63, lon:111.52, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pasuruan", tur:"liman", lat:-7.65, lon:112.90, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Blitar", tur:"sehir", lat:-8.10, lon:112.17, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- BORNEO ----------
{ ad:"Sambas", tur:"liman", lat:1.37, lon:109.30, g:0, k:0,
  kur:"1631-01-01",
  s:[{f:"1631-01-01",t:"1819-01-01",d:"brunei-sultanligi"},{f:"1819-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Kotawaringin", tur:"sehir", lat:-2.85, lon:111.67, g:0, k:0,
  kur:"1526-01-01",
  s:[{f:"1526-01-01",t:"1830-01-01",d:"banjar-sultanligi"},{f:"1830-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- SULAWESİ ----------
{ ad:"Gorontalo", tur:"liman", lat:0.54, lon:123.06, g:0, k:0,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"ternate-sultanligi"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- FİLİPİNLER ----------
{ ad:"Iloilo", tur:"liman", lat:10.72, lon:122.56, g:0, k:0,
  s:[{f:"1281-01-01",t:"1569-01-01",d:"filipin-racaliklari"},{f:"1569-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Vigan", tur:"sehir", lat:17.57, lon:120.39, g:0, k:0,
  s:[{f:"1281-01-01",t:"1572-01-01",d:"filipin-racaliklari"},{f:"1572-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Zamboanga", tur:"liman", lat:6.91, lon:122.08, g:0, k:0,
  s:[{f:"1281-01-01",t:"1635-01-01",d:"filipin-racaliklari"},{f:"1635-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Butuan", tur:"liman", lat:8.95, lon:125.54, g:0, k:0,
  s:[{f:"1281-01-01",t:"1622-01-01",d:"filipin-racaliklari"},{f:"1622-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },

// ---------- MOLUK - KÜÇÜK SUNDA ----------
{ ad:"Larantuka", tur:"liman", lat:-8.3411, lon:122.99, g:0, k:0,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sumbawa", tur:"sehir", lat:-8.49, lon:117.42, g:0, k:0,
  s:[{f:"1281-01-01",t:"1343-01-01",d:"singhasari"},{f:"1343-01-01",t:"1478-01-01",d:"majapahit"},{f:"1478-01-01",t:"1905-01-01",d:"bali-kralliklari"},{f:"1905-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Seram (Ceram)", tur:"liman", lat:-3.10, lon:129.50, g:0, k:0,
  s:[{f:"1281-01-01",t:"1656-01-01",d:"ternate-sultanligi"},{f:"1656-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- İKİNCİ TUR — mevcut alt bölgelere ek ----------
// Birmanya (iç kesim zinciri devamı)
{ ad:"Minbu", tur:"sehir", lat:20.18, lon:94.88, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Pakokku", tur:"sehir", lat:21.33, lon:95.08, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Myitkyina", tur:"sehir", lat:25.38, lon:97.40, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
// Siyam
{ ad:"Kanchanaburi", tur:"sehir", lat:14.02, lon:99.53, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phetchaburi", tur:"liman", lat:13.11, lon:99.94, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Trang", tur:"liman", lat:7.56, lon:99.61, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
// Vietnam (Kızıl Nehir deltası)
{ ad:"Son Tay", tur:"sehir", lat:21.14, lon:105.50, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Ninh Binh", tur:"sehir", lat:20.25, lon:105.97, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Bac Giang", tur:"sehir", lat:21.27, lon:106.19, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Java (kuzey kıyısı devamı)
{ ad:"Tegal", tur:"liman", lat:-6.87, lon:109.14, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pekalongan", tur:"liman", lat:-6.89, lon:109.68, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Rembang", tur:"liman", lat:-6.713, lon:111.34, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- ÜÇÜNCÜ TUR ----------
{ ad:"Stung Treng", tur:"liman", lat:13.53, lon:105.97, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Sisophon", tur:"sehir", lat:13.59, lon:102.98, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1795-01-01",d:"kamboc-kralligi"},{f:"1795-01-01",t:"1907-03-23",d:"siyam-chakri"},{f:"1907-03-23",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Klang", tur:"liman", lat:3.04, lon:101.45, g:0, k:0,
  s:[{f:"1281-01-01",t:"1874-01-20",d:"malay-sultanliklari"},{f:"1874-01-20",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Meulaboh", tur:"liman", lat:4.14, lon:96.13, g:0, k:0,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Berau", tur:"liman", lat:2.13, lon:117.43, g:0, k:0,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1850-01-01",d:"brunei-sultanligi"},{f:"1850-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Naga (Camarines)", tur:"sehir", lat:13.62, lon:123.18, g:0, k:0,
  s:[{f:"1281-01-01",t:"1573-01-01",d:"filipin-racaliklari"},{f:"1573-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Alor", tur:"liman", lat:-8.22, lon:124.58, g:0, k:0,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"timor-beylikleri"},{f:"1653-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- DÖRDÜNCÜ TUR ----------
{ ad:"Sandoway (Thandwe)", tur:"liman", lat:18.48, lon:94.35, g:0, k:0,
  s:[{f:"1281-01-01",t:"1785-01-02",d:"arakan"},{f:"1785-01-02",t:"1826-02-24",d:"konbaung"},{f:"1826-02-24",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Kamphaeng Phet", tur:"sehir", lat:16.48, lon:99.52, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Uthai Thani", tur:"sehir", lat:15.38, lon:100.02, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Preah Vihear", tur:"sehir", lat:14.39, lon:104.68, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Muang Sing", tur:"sehir", lat:21.18, lon:101.15, g:0, k:0,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Vinh Long", tur:"liman", lat:10.25, lon:105.97, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Can Tho", tur:"liman", lat:10.03, lon:105.79, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Muar", tur:"liman", lat:2.05, lon:102.57, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1923-10-29",d:"cohor-sultanligi"}] },
{ ad:"Sibolga", tur:"liman", lat:1.74, lon:98.78, g:0, k:0,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Jepara", tur:"liman", lat:-6.59, lon:110.67, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tarakan", tur:"liman", lat:3.30, lon:117.63, g:0, k:0,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1850-01-01",d:"brunei-sultanligi"},{f:"1850-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Bantaeng", tur:"liman", lat:-5.53, lon:119.96, g:0, k:0,
  s:[{f:"1281-01-01",t:"1667-11-18",d:"gova-makassar"},{f:"1667-11-18",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Batangas", tur:"liman", lat:13.76, lon:121.06, g:0, k:0,
  s:[{f:"1281-01-01",t:"1571-06-24",d:"filipin-racaliklari"},{f:"1571-06-24",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Ende (Flores)", tur:"liman", lat:-8.84, lon:121.66, g:0, k:0,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- BEŞİNCİ TUR ----------
{ ad:"Pyinmana", tur:"sehir", lat:19.73, lon:96.22, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Henzada (Hinthada)", tur:"sehir", lat:17.64, lon:95.46, g:0, k:0,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1755-05-03",d:"hanthawaddy"},{f:"1755-05-03",t:"1852-04-14",d:"konbaung"},{f:"1852-04-14",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Chumphon", tur:"liman", lat:10.49, lon:99.18, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Surat Thani", tur:"liman", lat:9.14, lon:99.32, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Attapeu", tur:"sehir", lat:14.81, lon:106.83, g:0, k:0,
  kur:"1713-01-01",
  s:[{f:"1713-01-01",t:"1778-01-01",d:"laos-kralliklari"},{f:"1778-01-01",t:"1893-10-03",d:"siyam-chakri"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Quang Tri", tur:"sehir", lat:16.75, lon:107.19, g:0, k:0,
  s:[{f:"1281-01-01",t:"1306-01-01",d:"campa"},{f:"1306-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1558-01-01",d:"le-hanedani"},{f:"1558-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1801-06-15",d:"tay-son"},{f:"1801-06-15",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Quang Ngai", tur:"sehir", lat:15.12, lon:108.80, g:0, k:0,
  s:[{f:"1281-01-01",t:"1471-03-02",d:"campa"},{f:"1471-03-02",t:"1558-01-01",d:"le-hanedani"},{f:"1558-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1802-06-01",d:"tay-son"},{f:"1802-06-01",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Indrapura", tur:"liman", lat:-2.20, lon:101.11, g:0, k:0,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"pagaruyung"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sumenep (Madura)", tur:"sehir", lat:-7.02, lon:113.87, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sukadana", tur:"liman", lat:-1.25, lon:109.95, g:0, k:0,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1786-01-01",d:"brunei-sultanligi"},{f:"1786-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Legazpi", tur:"liman", lat:13.14, lon:123.74, g:0, k:0,
  s:[{f:"1281-01-01",t:"1573-01-01",d:"filipin-racaliklari"},{f:"1573-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Waingapu (Sumba)", tur:"liman", lat:-9.66, lon:120.26, g:0, k:0,
  s:[{f:"1281-01-01",t:"1674-01-01",d:"timor-beylikleri"},{f:"1674-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- ALTINCI TUR ----------
{ ad:"Loikaw", tur:"sehir", lat:19.67, lon:97.21, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"san-devletleri"}] },
{ ad:"Suphan Buri", tur:"sehir", lat:14.47, lon:100.12, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Takeo", tur:"sehir", lat:10.99, lon:104.79, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Tra Vinh", tur:"liman", lat:9.93, lon:106.35, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Ben Tre", tur:"liman", lat:10.24, lon:106.38, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kuala Simpang", tur:"liman", lat:4.31, lon:98.00, g:0, k:0,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Kudus", tur:"sehir", lat:-6.81, lon:110.84, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Purwokerto", tur:"sehir", lat:-7.42, lon:109.23, g:0, k:0,
  s:[{f:"1281-01-01",t:"1526-01-01",d:"sunda-pajajaran"},{f:"1526-01-01",t:"1677-01-01",d:"banten-sultanligi"},{f:"1677-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tuguegarao", tur:"sehir", lat:17.61, lon:121.73, g:0, k:0,
  s:[{f:"1281-01-01",t:"1581-01-01",d:"filipin-racaliklari"},{f:"1581-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Maumere (Flores)", tur:"liman", lat:-8.62, lon:122.21, g:0, k:0,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- YEDİNCİ TUR ----------
{ ad:"Mogok", tur:"sehir", lat:22.92, lon:96.50, g:0, k:0,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Loei", tur:"sehir", lat:17.49, lon:101.72, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Kompong Thom", tur:"sehir", lat:12.71, lon:104.89, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Tay Ninh", tur:"sehir", lat:11.31, lon:106.10, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Painan", tur:"liman", lat:-1.33, lon:100.60, g:0, k:0,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"pagaruyung"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Ponorogo", tur:"sehir", lat:-7.87, lon:111.46, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Dagupan", tur:"liman", lat:16.04, lon:120.33, g:0, k:0,
  s:[{f:"1281-01-01",t:"1571-06-24",d:"filipin-racaliklari"},{f:"1571-06-24",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Bima (Sumbawa)", tur:"liman", lat:-8.47, lon:118.72, g:0, k:0,
  s:[{f:"1281-01-01",t:"1343-01-01",d:"singhasari"},{f:"1343-01-01",t:"1478-01-01",d:"majapahit"},{f:"1478-01-01",t:"1905-01-01",d:"bali-kralliklari"},{f:"1905-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- SEKİZİNCİ TUR ----------
{ ad:"Kalaw", tur:"sehir", lat:20.63, lon:96.57, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"san-devletleri"}] },
{ ad:"Roi Et", tur:"sehir", lat:16.05, lon:103.65, g:0, k:0,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Svay Rieng", tur:"sehir", lat:11.09, lon:105.80, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Rach Gia", tur:"liman", lat:10.01, lon:105.08, g:0, k:0,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Bojonegoro", tur:"sehir", lat:-7.15, lon:111.88, g:0, k:0,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Puerto Princesa (Palawan)", tur:"liman", lat:9.74, lon:118.74, g:0, k:0,
  s:[{f:"1281-01-01",t:"1622-01-01",d:"filipin-racaliklari"},{f:"1622-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Rote", tur:"liman", lat:-10.71, lon:123.13, g:0, k:0,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"timor-beylikleri"},{f:"1653-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- KİLİT AÇILDI — bekleyen 7 nokta + Kutai (renk geldi) ----------
{ ad:"Jambi", tur:"liman", lat:-1.61, lon:103.61, g:1, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1615-01-01",d:"cohor-sultanligi"},{f:"1615-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Siak Sri Indrapura", tur:"liman", lat:0.82, lon:102.03, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1723-01-01",d:"cohor-sultanligi"},{f:"1723-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Medan (Deli)", tur:"liman", lat:3.595, lon:98.672, g:1, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1632-01-01",d:"cohor-sultanligi"},{f:"1632-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Rengat (Indragiri)", tur:"sehir", lat:-0.35, lon:102.55, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1590-01-01",d:"cohor-sultanligi"},{f:"1590-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pontianak", tur:"liman", lat:-0.02, lon:109.33, g:1, k:2,kd:[{f:"1772-01-01",t:"1855-01-01",k:1,m:"Pontianak"}],
  kur:"1772-01-01",
  s:[{f:"1772-01-01",t:"1855-01-01",d:"pontianak"},{f:"1855-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tenggarong (Kutai)", tur:"sehir", lat:0.40, lon:117.01, g:0, k:1,kd:[{f:"1575-01-01",t:"1908-01-01",k:1,m:"Tenggarong (Kutai)"}],
  kur:"1575-01-01",
  s:[{f:"1575-01-01",t:"1908-01-01",d:"kutai"},{f:"1908-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Watampone (Bone)", tur:"sehir", lat:-4.54, lon:120.33, g:1, k:0,
  kur:"1330-01-01",
  s:[{f:"1330-01-01",t:"1905-08-06",d:"bugis-kralliklari"},{f:"1905-08-06",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sengkang (Wajo)", tur:"sehir", lat:-4.13, lon:120.02, g:0, k:0,
  kur:"1330-01-01",
  s:[{f:"1330-01-01",t:"1905-08-06",d:"bugis-kralliklari"},{f:"1905-08-06",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

];

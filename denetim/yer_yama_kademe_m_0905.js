// KADEME YAMASININ `m:` YARISI — (b) YOLU
// ---------------------------------------------------------------
// KURE GORUNUM · sevk M-3024 · 5 Eylul 2026
//
// 🔴 NICIN BU DOSYA VAR: `data/yer_yama_kademe.js` her kayitta IKI
//    teklif tasiyor — `oneri.k` ve `oneri.m`. `_kademe_uygula.py`nin
//    node IZDUSUMU yalniz `.k` aliyor (satir 32-34), yazicisi da
//    yalniz ust duzey `k:` yaziyor. `oneri.m` Python'a HIC ULASMIYOR
//    ve `atlanan`a da DUSMUYOR — iz birakmadan kayboluyor.
//    Olculdu: `oneri.k` 38/38 INMIS · `oneri.m` 0/38.
//    (denetim/OLCUM-ALAN-KAPSAMA-KADEME-0905.md)
//
// 🟢 NICIN `ad:` ANAHTARI: `m` alaninin ZATEN bir sahibi var —
//    `_sahiplik_uygula.py`, sinanmis catisma/skaler makinesiyle.
//    O aletin node suzgeci `r.ad` istiyor; kademe yamasi `yerlesim`
//    tasidigi icin 38'in 38'i suzgecte eleniyordu. Anahtar cevrildi.
//    Ikinci bir alete `m` yazma yetkisi VERILMEDI (iki otorite
//    dogar ve ayrisir — CLAUDE.md §11).
//
// 🔴 KAPSAM: 38 kaydin YALNIZ 24'u. Oteki 14'te `oneri.m` canli
//    degerle AYNI ⇒ dokunulmadi. 24'unde de canli `m` NULL.
//
// ⚠️ DAMGA: bu dosya bir ARASTIRMA URUNU DEGIL, bir TASIMADIR.
//    Her kaydin `m`/`kaynak`/`gerekce`si `yer_yama_kademe.js`ten
//    OLDUGU GIBI devralindi. Onerilerin KAYNAGA UYGUNLUGU bu
//    dosyada DOGRULANMADI — bes ornek ayrica sinandi
//    (denetim/SINAV-KADEME-M-0905.md); geri kalan 19 `DEVRALDIM`.
//
// 🔵 `donem:` alani TASINMADI. Kademe yamasi her kayit icin gecerli
//    pencereleri de veriyor (`kd:[{f,t,k,m}]` bicimi, canlida 192
//    kayit) ama hicbir alet bir yamadan `kd:`ye yazmiyor. ACIK BORC.
// ---------------------------------------------------------------
window.YER_YAMA_KADEME_M_0905 = [
 { ad:"Ahar (Karadağ)", m:"Tebriz",
   kaynak:"TDV tebriz — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: 1593 Tebriz eyaleti livâ listesi ÖLÇÜLDÜ (Tebriz·Suldus·Dizmâr·Merâga·Sarukurgân·Saîdâbâd·Alîk); Ahar bu listede YOK ⇒ livâ altı.",
   neden:"`m:` NULL idi; `oneri.m`=\"Tebriz\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1585-09-25..1603-10-21 · 1725-08-04..1730-08-12 — `kd:` olarak YAZILAMADI, açık borç.  ||  🟢 SINANDI — TDV `tebriz` 1593 listesi BIREBIR dogrulandi (Tebriz·Suldus·Dizmâr·Merâga·Sarukurgân·Saîdâbâd·Alîk) ve `Ahar` govdede 0 kez geciyor (harf duyarli). Gerekce TUTUYOR." },
 { ad:"Buraydâ (Kasîm)", m:"Medine",
   kaynak:"TDV necid + TDV medine — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: TDV necid: \"Necd-i Hicâzî Kasîm, Cebelişemmer, Veşm, Mahmel ve Südeyr\" — Kasîm adlı alt bölge VAR, ama TDV Buraydâ'yı merkez diye ADIYLA yazmıyor. TDV medine: \"İbrâhim Paşa'yı Medine'ye ve Kuzey Arabistan taraflarına gönderdi\" ⇒ seferin idarî çıpası Medine. `burayda` ve `kasim` slugları ÖLÜ (ölçüldü).",
   neden:"`m:` NULL idi; `oneri.m`=\"Medine\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1818-09-09..1824-06-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Burûcird", m:"Hemedan",
   kaynak:"TDV luristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Hürremâbâd, Burûcird ve Şâpûr bölgenin en eski şehirleridir.\" Kademe verilmiyor. `burucird` slugu ÖLÜ.",
   neden:"`m:` NULL idi; `oneri.m`=\"Hemedan\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1590-03-21..1603-10-21 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Cenîne", m:"El-Fâşir",
   kaynak:"TDV darfur — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",
   neden:"`m:` NULL idi; `oneri.m`=\"El-Fâşir\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1874-11-02..1883-12-23 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Eperjes (Prešov)", m:"Kassa (Košice)",
   kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Fülek (Fiľakovo)", m:"Kassa (Košice)",
   kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Herseknovi (Herceg Novi)", m:"Mostar",
   kaynak:"bulunamadı — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Hersek sancağı kalesi; sancak merkezi Mostar. TDV `hersek` slugu CANLI ama gövde 2378 bayt geldi — §4④ BOİLERPLATE, çekilemedi.",
   neden:"`m:` NULL idi; `oneri.m`=\"Mostar\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1482-01-01..1687-09-30 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Kasr-ı Şîrîn", m:"Şehrizor",
   kaynak:"bulunamadı — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Sınır kalesi (1746 antlaşmasının adını taşır). `kasri-sirin` ve `kasr-i-sirin` sluglarının İKİSİ DE ÖLÜ (ölçüldü).",
   neden:"`m:` NULL idi; `oneri.m`=\"Şehrizor\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1723-10-01..1730-08-12 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Kerene", m:"Sevâkin",
   kaynak:"bulunamadı — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Eritre'de kasaba; Mısır idaresi 1872-1884. TDV'de müstakil madde YOK.",
   neden:"`m:` NULL idi; `oneri.m`=\"Sevâkin\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1872-01-01..1884-06-03 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Knin", m:"Klis",
   kaynak:"TDV klis — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: 1580'de Klis sancağı ikiye ayrıldı, kuzeybatısı Kırka adıyla Bosna vilâyetine bağlandı; Knin o kesimde. TDV'de Knin adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Klis\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:3` yarısı ZATEN inmiş (canlı k:3). Geçerli pencereler: 1522-05-29..1688-09-11 — `kd:` olarak YAZILAMADI, açık borç.  ||  🔴 SINANDI — GEREKCE KENDI SONUCUNU ZAYIFLATIYOR. Cumle birebir dogru: \"1580'de Bosna vilâyeti tesis edildiğinde Klis sancağı ikiye ayrıldı ve KUZEYBATISI KIRKA ADIYLA BOSNA VILÂYETINE BAĞLANDI\" — ve gerekcenin kendisi Knin'i O KESIME koyuyor. Yamanin penceresi 1522-1688, yani 1580'i ASIYOR ⇒ 1580 SONRASI icin m:Klis tartismali. `Knin` govdede 0 kez geciyor. KARAR GEREK." },
 { ad:"Kuba", m:"Derbend",
   kaynak:"TDV sirvan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Kuzeyde merkezi Demirkapı/Derbend olan Derbend eyaleti ... Derbend yedi sancağa ayrıldı.\" Kuba o eyaletin kuzey kesiminde.",
   neden:"`m:` NULL idi; `oneri.m`=\"Derbend\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:3` yarısı ZATEN inmiş (canlı k:3). Geçerli pencereler: 1583-01-01..1607-01-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  🟡 SINANDI, KISMEN — cumle DOGRU (\"Kuzeyde merkezi Demirkapı/Derbend olan Derbend eyaleti\") ama KUBA O CUMLEDE YOK ve Osmanli kontrolune giren yerler listesinde de YOK. Govdedeki Kuba gecisleri 1719/1758, yani yamanin penceresinin (1583-1607) DISINDA. Atama bir COGRAFI CIKARIM — kaynak onu adiyla desteklemiyor." },
 { ad:"Miyâne", m:"Tebriz",
   kaynak:"TDV tebriz — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: 1593 livâ listesinde YOK (aynı ölçüm) ⇒ livâ altı.",
   neden:"`m:` NULL idi; `oneri.m`=\"Tebriz\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1585-09-25..1603-10-21 · 1725-08-04..1730-08-12 — `kd:` olarak YAZILAMADI, açık borç.  ||  🟢 SINANDI — Ahar ile AYNI olcum: TDV `tebriz` 1593 listesi dogrulandi, `Miyâne` govdede 0 kez. Gerekce TUTUYOR." },
 { ad:"Munkács (Mukacheve)", m:"Kassa (Košice)",
   kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1687-12-17 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Nihâvend", m:"Hemedan",
   kaynak:"TDV luristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Batıdan Irak ... kuzeyden Hersin ve Nihâvend ... ile sınırlıdır.\" Şehir olarak anılıyor, idarî kademe verilmiyor. `nihavend` slugu ÖLÜ.",
   neden:"`m:` NULL idi; `oneri.m`=\"Hemedan\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1590-03-21..1603-10-21 · 1724-08-31..1730-08-12 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Otranto", m:"Yanya",
   kaynak:"TDV gedik-ahmed-pasa — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Otranto'yu Ağustos 1480'de fetheden Gedik Ahmed Paşa ...\" · TDV italya: \"on bir ay Türkler'in elinde kalan Otranto\". Kademe verilmiyor; 11 aylık köprübaşı kalesi.",
   neden:"`m:` NULL idi; `oneri.m`=\"Yanya\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1480-08-11..1481-09-10 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Salyan", m:"Şamahı",
   kaynak:"TDV sirvan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Osmanlı idaresinde Şirvan iki eyalete ayrıldı ... güneyde merkezi Şemâhî olan Şemâhî eyaleti kuruldu. Şemâhî eyaleti on beş ... sancağa ayrıldı.\" Salyan Osmanlı kontrolüne giren yerler arasında sayılıyor.",
   neden:"`m:` NULL idi; `oneri.m`=\"Şamahı\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:3` yarısı ZATEN inmiş (canlı k:3). Geçerli pencereler: 1578-11-01..1607-01-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  🟢 SINANDI — EN GUCLUSU: TDV `sirvan` hem \"Şemâhî eyaleti on beş, Derbend yedi sancağa ayrıldı\" diyor hem de Salyan'i ADIYLA sayiyor: \"Böylece Şemâhî, Kabala, Bakü, Şâburân, Mahmûdâbâd, SALYAN ve Demirkapı/Derbend Osmanlı kontrolüne girdi.\"" },
 { ad:"Sarâb", m:"Tebriz",
   kaynak:"TDV tebriz — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: 1593 livâ listesinde YOK (aynı ölçüm) ⇒ livâ altı.",
   neden:"`m:` NULL idi; `oneri.m`=\"Tebriz\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1585-09-25..1603-10-21 · 1725-08-04..1730-08-12 — `kd:` olarak YAZILAMADI, açık borç.  ||  🟢 SINANDI — Ahar ile AYNI olcum: 1593 listesi dogrulandi, `Sarâb` govdede 0 kez. Gerekce TUTUYOR." },
 { ad:"Sin (Sinj)", m:"Klis",
   kaynak:"TDV klis — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Klis sancağı içinde kale. TDV'de Sinj adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Klis\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1513-01-01..1686-09-30 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Tarki (Tarku)", m:"Şeki (Nuha)",
   kaynak:"bulunamadı — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Tarku Şamhallığı'nın merkezi (tâbi). `tarki` slugu ÖLÜ; TDV `dagistan` maddesinde Tarki adı ARANDI, GEÇMİYOR.",
   neden:"`m:` NULL idi; `oneri.m`=\"Şeki (Nuha)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:3` yarısı ZATEN inmiş (canlı k:3). Geçerli pencereler: 1578-11-01..1607-01-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Tokaj", m:"Kassa (Košice)",
   kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de yalnız şarap bölgesi olarak geçiyor.",
   neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Uneyze", m:"Medine",
   kaynak:"TDV necid + TDV medine — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: Kasîm'in ikinci kasabası; aynı zincir. `uneyze` ve `unayza` slugları ÖLÜ.",
   neden:"`m:` NULL idi; `oneri.m`=\"Medine\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1818-09-09..1824-06-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Ungvár (Uzhhorod)", m:"Kassa (Košice)",
   kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",
   neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
 { ad:"Zagem (Kaheti)", m:"Tiflis",
   kaynak:"TDV gurcistan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Gürcistan üç krallığa (Kartliya, Kahetya, İmeretiya) ... ayrıldı.\" Tiflis eyaletinin dört sancağı (Gori·Tiflis·Tumanıs·Lori) sayılıyor, Kaheti bunların İÇİNDE DEĞİL ⇒ tâbi krallık merkezi.",
   neden:"`m:` NULL idi; `oneri.m`=\"Tiflis\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:3` yarısı ZATEN inmiş (canlı k:3). Geçerli pencereler: 1578-08-09..1606-01-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  🔴 SINANDI — DOGRU HUKUM, YANLIS GEREKCE. Gerekce \"Kaheti Tiflis eyaletinin dort sancagi ICINDE DEGIL ⇒ tâbi krallik\" diyor; TDV `gurcistan` ise \"KARTLI VE KAHET TIFLIS EYALETI HALINE GETIRILDI\" diyor. Yani m:Tiflis DAHA DA saglam, ama dayanagi CURUK. ⚠️ Ve `k:3` (tâbi krallik merkezi) TAM O CURUYEN yariya dayaniyor — `k` ZATEN INMIS durumda, ayri bir kalem." },
 { ad:"Şakrâ", m:"Medine",
   kaynak:"TDV necid + TDV medine — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: TDV necid alt bölge listesinde \"Veşm\" geçiyor; Şakrâ oradadır. Kademe verilmiyor. `sakra` slugu ÖLÜ.",
   neden:"`m:` NULL idi; `oneri.m`=\"Medine\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1818-09-09..1824-06-01 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı)." },
];

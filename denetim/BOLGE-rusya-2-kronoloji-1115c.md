# BOLGE-rusya · Adım 2 — Kronoloji teyidi (UMIT, 15 Kasım 2026)

Yöntem: `data/olaylar*.js` + `data/kronoloji*.js` node `vm` ile yüklendi; `taraflar:` ya da `yer_id:` Rusya/Doğu Avrupa künye ve yerleşimlerine değen **502 madde** çıktı (0000-1918 aralığı). Hepsi günlük düzeyde tek tek teyit edilmedi (zaman + kaynak sınırı): önce **Jülyen/Gregoryen kuralı** (CLAUDE.md: 1582 öncesi kaynak günü yazılır; sonrası Gregoryen) ve gün çelişkisi şüphesi olanlar aday seçildi, **~12 aday web aramasıyla sınandı**. Okunamayan kaynak "okunmadı" diye yazıldı, sayılmadı. **Hiçbir maddede iki bağımsız akademik kaynakla hakemli karar çıkmadı → veri değişmedi** (aşağıda her aday için neden).

## A. Teyit edilen / uyumlu görünen (kendi bilgi + arama; akademik ikinci kaynak okunmadı)
Saule 1236-09-22, Durbe 1260-07-13, Karuse 1270-02-16, Aizkraukle 1279-03-05, Yaroslav 1245-08-17, Kulm 1233-12-28, Stensby 1238-06-07, Kulikovo 1380-09-08, Toktamış 1382-08-26, Salynas 1398-10-12, Brześć 1435-12-31, Toruń 1466-10-19, Kazan 1552-10-02, 1613-03-03 (21 Şub J → 3 Mar G, uyumlu), 1618-12-11, 1654-10-03, 1682-05-07/05-25, 1689-09-06, 1696-02-08, 1703-01-13, 1721-09-10, 1797-04-16, 1812 (üç tarih), 1896-05-30 (hepsi J→G doğru çevrilmiş görünüyor). Bunlar yalnız tutarlılık kontrolü; "çift teyit" ilan edilmedi.

## B. Gün sorunu ADAYLARI (değiştirilmedi — gerekçe)
| # | Madde (atlas günü) | Şüphe | Bulgu (okundu / okunmadı) | Karar |
|---|---|---|---|---|
| 1 | Buz Savaşı **1242-04-12** (Pskov) | 1582 öncesi kural: Jülyen kaynak günü → **1242-04-05** (Cumartesi) olmalı; 04-12 proleptik Gregoryen | Web araması: "5 Nisan 1242 Jülyen = 12 Nisan proleptik Gregoryen" (Rus Cumhurbaşkanlığı Kütüphanesi prlib.ru özeti — sayfa tarayıcı kontrolüyle **okunmadı**; Rusça özetler). Novgorod 1. Yıllığı (NPL, 1950 neşri) metni **okunmadı** | Yapıl-MADI: birincil/akademik ikinci kaynak yok. **Güçlü aday: 04-12 → 04-05.** Taşınırsa çeviri anahtarı + olay_taraf `1242-04-12|…` birlikte taşınmalı |
| 2 | Roman Mstislaviç ölümü **1205-10-14** | Ukrayna/Polonya kaynakları ayrışıyor | Encyclopedia of Ukraine (**okundu**): "d 14 October 1205 in Zawichost". Scripta Historica 24 (cilt 24, 2018; yazar okunmadı, yalnız arama özeti) arama özeti: "19 czerwca 1205" (PDF **okunmadı**). | **Gerçek çelişki:** 14 Ekim (EoU) vs 19 Haziran (Scripta Historica; Długosz/Rocznik **okunmadı**). Atlas EoU'yla uyumlu; hakem için üçüncü/dördüncü kaynak (Długosz MPH, Hustynski Letopis) gerekir. Değişmedi |
| 3 | Mihail I ölümü/Aleksey cülusu **1645-07-13** | J→G çevrilmemiş olabilir (O.S. 13 Tem = 23 Tem G) | Britannica 23 Tem [13 Tem O.S.] (kanıt sayılmaz); orthodoxwiki/dynastology 12 Tem O.S. | Kaynaklar 12/13 Tem arasında bölünmüş + atlas günü çevrilmemiş görünüyor. Akademik kaynak yok. Değişmedi; **aday 07-23 (ya da 07-22)** |
| 4 | Anna'nın "kondisyonları yırtması" **1730-02-25** | O.S. günü çevrilmemiş (G = **1730-03-08**) | Arama: 25 Şub O.S. tutarlı; G çevirisi benim hesabım | Aday 03-08; akademik tam metin okunmadı. Değişmedi |
| 5 | Moskova Üniversitesi **1755-01-25** | Ferman 12 Oca O.S. = **1755-01-23** G | hist.msu.ru (MSU kendi tarih sayfası, "12 Ocak (23 Ocak N.S.)") özet olarak okundu; New World Enc. 25 Oca, bir ruslarca kaynak 24 Oca (Tatyana günü karışıklığı) | Aday 01-23; MSU kurum sayfası tek başına akademik hakem değil. Değişmedi |
| 6 | Pugaçev idamı **1775-01-10** | O.S. 10 Oca = **1775-01-21** G | Britannica "21 Ocak [10 Ocak O.S.]" | Aday 01-21; akademik kaynak okunmadı. Değişmedi |
| 7 | Moskova'nın kurtuluşu **1612-11-04** | 17. yy. farkı 10 gündür: 22 Eki O.S. = 1 Kas G (Kitay-gorod), Kremlin 26 Eki O.S. = 5 Kas G; "4 Kasım" modern bayram tarihi (13 gün farkıyla) | Kaynak aranmadı (zaman) | **Okunmadı**; aday, açık madde |
| 8 | Vasili III ölümü/IV. İvan cülusu **1533-12-04** | Pek çok Rus kaynağı 3 Aralık 1533 O.S. (=13 Ara G) | Aranmadı | **Okunmadı** |
| 9 | Moskova Uspenski Katedrali **1479-08-15** | Yıllıklar: kutsama 12 Ağustos 1479 (J) | Aranmadı | **Okunmadı** |
| 10 | Moskova ateşkesi **1503-04-02** | Rus kaynakları 25 Mart 1503 (J) der | Aranmadı | **Okunmadı** |
| 11 | Raciąż antlaşması **1404-05-23** | Genelde 31 Mayıs 1404 | Aranmadı | **Okunmadı** |
| 12 | Kültür maddeleri: Kuğu Gölü 1877-02-27, Tretyakov bağışı 1892-08-15, MSAT 1898-11-14 | O.S./N.S. karışıklığı muhtemel (MSAT açılışı 14 Eki O.S. = 26/27 Eki G) | Aranmadı | **Okunmadı**; "dış" kapsamda düşük önem |

## C. Künye-içi çelişki
Moskova künyesi kronolojisi Novgorod 1478-01-14 / Tver 1485-09-08; çekirdek 1478-01-15 / 1485-09-12 (adım 1, madde 2). Çekirdek günler akademik doğrulanmadı ("okunmadı").

## D. Yönteme dair sınır
Web araması Vikipedi aynalarına ve ansiklopedilere takılıyor; Britannica/Wikipedia kanıt değil. Tam metin (archive.org NPL, DergiPark, Dąbrowski) açılmadığı için **0 madde değiştirildi**, 12 aday kuyrukta (`BOLGE-rusya-7-duzeltme-1115c.md`). Sayı: incelenen 502 madde; J/G şüphesi seçilen ~45; web ile sınanan 7; sonuç: 1 güçlü aday (Buz Savaşı), 1 gerçek çelişki (Roman), 5 O.S.-çevrilmemiş adayı, 5 hiç sınanmadı.

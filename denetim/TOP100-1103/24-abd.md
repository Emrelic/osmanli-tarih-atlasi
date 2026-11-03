# 24 · Amerika Birleşik Devletleri — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + kendi s: dökümleri; salt okur)

## Özet
- Künye: 3 ölçüldü (abd, konfedere-devletler; komşu/ilgili: rus-amerikasi, amerikan-filipinleri, puerto-riko, amerikan-samoasi, ryukyu-abd-idaresi, pasifik-adalari-vesayet-toprak, panama-kanali-bolgesi, abd-ordu-askeri-hukumeti-kore, teksas-cumhuriyeti, hawaii-*: ayrı eşleme gerekirse). Ana künye `abd`: f 1776-07-04, t yok (pencere ucu), 259 yerleşim, en geniş 1919 (241).
- Ana künye: 101 kırılma, **91 AÇIK**; konfedere-devletler: 3 kırılma, **2 AÇIK**.
- Evrende ABD toprağı maddeleri var ama ölçer yer şartı yüzünden çoğunu "alakasız" sayıyor: Oregon 1846, Guadalupe 1848, Gadsden 1854, Alaska 1867 maddelerinin `odak_yer`i "Philadelphia/Moskova" — kırılan yerleşimlerle (Tucson, Fort Astoria…) eşleşmiyor. Gerçek eksik maddeler: Paris 1783 (künye içi), Louisiana 1803, Adams-Onís/Florida 1821, Teksas ilhakı 1845, Hawaii 1898, İspanyol-Amerikan Savaşı sonu (Paris 1898), Kuzey Amerika yerli bölge kazanımları.
- En ağır 3 bulgu: (1) **Konfedere toprağı haritada yok:** künye 1861-02-08→1865-05-05 ama yalnız 2 yerleşim (Montgomery, Richmond); Charleston, Savannah, New Orleans… 1861-65'te hâlâ `abd` (s:'da kırılma yok) — Konfedere 11 eyalet için sahiplik iç savaş dönemi boyunca ABD görünüyor; (2) **Tarih tutarsızlıkları:** Oregon madde t=1846-01-01 (Antlaşma 15 Haziran 1846), 1818 Sözleşmesi maddesi t=1818-01-01 (gerçek 20 Ekim 1818 — s: 1818-10-20 ile 292 gün fark), Guadalupe Hidalgo s: 1848-02-02 (imza günü) ama madde 1848-05-30 (onay mübadelesi); (3) 1898 kazanımlarında tek ölçüt yok: Guam 1898-06-21, Honolulu 08-12, Manila 08-13 (işgal/devir törenleri), Küba/Porto Riko 12-10 (antlaşma imzası, 11 Nisan 1899'da yürürlüğe girdi); amerikan-filipinleri künye f=1901-07-04 ama Manila s:'sında `abd` 1898-08-13→1923-10-29 ve ancak sonra künye.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| abd | Amerika Birleşik Devletleri | 1776-07-04 | — | ana; 259 yerleşim; künye ozet'i «Bağımsızlık ilanıyla kurulan» ama kaynak alanı «amerika-birlesik-devletleri» (TDV sluğu; erişimi ölçülmedi) |
| konfedere-devletler | Amerika Konfedere Devletleri | 1861-02-08 | 1865-05-05 | 2 yerleşim; s: t=1865-05-04 (künye t 05-05 ile 1 gün fark) |
| rus-amerikasi | Rus Amerikası | 1799-01-01 | 1867-10-18 | 0 yerleşim (Alaska yerleşimleri `abd` s: 1867-10-18'den başlıyor; önce yok) |
| amerikan-filipinleri | Amerikan Filipinleri | 1901-07-04 | 1935-11-15 | Manila s: 1898-08-13→1923-10-29 `abd`, sonra bu künye (f ile 22 yıl fark) |
| puerto-riko | Porto Riko | 1899-04-11 | — | s:'da San Juan 1898-12-10→1923-10-29 `abd` sonra `puerto-riko`; künye f=1899-04-11 (Paris antlaşması yürürlüğü) ile uyum yok |
| ilgili | amerikan-samoasi, ryukyu-abd-idaresi, pasifik-adalari-vesayet-toprak, panama-kanali-bolgesi, abd-ordu-askeri-hukumeti-kore | — | — | ölçülmedi |
EKSİK: (i) Konfedere topraklarının yerleşim s:'ları (aşağı); (ii) 13 koloni → 1776 ayrımı iyi (Boston/Philadelphia 1776-07-04 `abd`); (iii) Teksas Cumhuriyeti künyesi var (s: 1836-03-02→1845-12-29) — ABD tarafı uyumlu; (iv) Hawaii Cumhuriyeti künyesi var (s: 1893-01-17→1898-08-12); (v) "Kuzeybatı Toprakları/Mississippi'nin doğusu 1783" için ayrı künye yok (yerli konfederasyonlar).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| abd f | 1776-07-04 | künyede madde 1776-07-04 «Bağımsızlık Bildirgesi kabul edildi» (kaynaksız) | (2 bağımsız akademik kaynak okunmadı: NARA 'Declaration of Independence' [A], Library of Congress [A]) | Gün standart; ama künye `kaynak:` alanı sadece slug. Öneri: NARA/LoC kaynağını yaz. 1783 tanınma (Paris 1783-09-03) ile 1776 arası de facto/de jure: haritada 1776-07-04'te 41 yerleşim (13 koloni) – 1783'e kadar İngiliz-işgal altında NYC (1776-1783) hâlâ `abd` mi? Ölçülmedi. |
| Paris 1783 | s: 1783-09-03 (Falmouth, Cayuga…) | NARA milestone/arşiv sayfası (okunamadı; WebFetch 404 başka sayfalarda) | — | Tarih standart (3 Eylül 1783 imza); yürürlük: onay mübadelesi 12 Mayıs 1784 (bilinen, okunmadı). Evrende YOK (künye içi). |
| Louisiana | s: New Orleans 1803-12-20; St. Louis 1804-03-10 | NARA «Louisiana Purchase Treaty» (archives.gov/milestone-documents/louisiana-purchase-treaty) [O]: imza 30 Nisan 1803; Senato onayı 20 Ekim 1803; «formally transferred at New Orleans on December 20, 1803 … celebrated at St. Louis on March 9–10, 1804» | history.state.gov 'louisiana-purchase' [O]: yalnız 1803, tarih yok | 20 Aralık 1803 ve 10 Mart 1804 NARA'yla uyumlu; ikinci bağımsız kaynak yok. **Sorun:** New Orleans s: `1803-04-30→1803-12-20 ispanya` ve `1763-11-03→1803-04-30 ispanya`: iki ardışık parça aynı sahip; hukukî olarak Fransa 30 Kasım 1803'te New Orleans'ta devraldı (bilinen, kaynak okunmadı) — ara dilim `fransa` olmalı mı sorusu. Evrende Louisiana maddesi YOK (Fontainebleau 1762 var, olaylar_kamerika.js:93). |
| Florida | St. Augustine 1821-07-10; Pensacola 1821-07-17 | history.state.gov 'florida' [O]: «ratified in 1821» (tarih yok) | Avalon (Yale) Adams-Onís [O]: «Done at Washington this twenty-second day of February, one thousand eight hundred and nineteen»; onay mübadelesi/ilan 22 Şubat 1821; WebSearch özeti (NPS/FCIT/WUWF): East Florida 10 Temmuz, West Florida 17 Temmuz 1821 | Atlas günleri doğru. Evrende Adams-Onís maddesi YOK. |
| Teksas | s: 1845-12-29 | history.state.gov 'texas-annexation' [O]: ortak karar 1 Mart 1845, «admitted into the United States on December 29» 1845 | — | s: 1845-12-29 doğru (devlet olma günü; Teksas'ın katılma kabulü 4 Temmuz 1845 Teksas Sözleşmesi, 29 Ekim 1845 Teksas'ın kabul onayı — bilinen, okunmadı). Evrende Teksas ilhakı YOK (`1845` maddesi sadece "Oregon" yakını). |
| Oregon | madde 1846-01-01 (sinir_amerika.js:59-60), s: 1846-06-15 (Boise, Astoria…) | WebSearch özeti: imza 15 Haziran 1846, Senato 18 Haziran, ABD onayı 19 Haziran, İngiltere 14 Temmuz, mübadele Londra 17 Temmuz 1846 (kaynak: ABD Statutes at Large; bu oturumda sayfa okunamadı) | — | **Madde t=1846-01-01 YANLIŞ GÜN** (6 ay erken; gün biliniyor ⇒ yıl-başı yazılmaz). Öner: t="1846-06-15" (imza) veya 1846-07-17 (yürürlük) — s: 1846-06-15 ile hizala. |
| 1818 Sözleşme | madde 1818-01-01 (sinir_amerika.js:41); s: Pembina 1818-10-20 | (yok — 1818 Convention 20 Ekim 1818 bilinen; bu oturumda kaynak okunmadı) | — | Madde günü yıl başı; yerleşim 1818-10-20 → madde t "1818-10-20" olmalı [A]. |
| Webster-Ashburton | madde 1842-01-01; s: Keweenaw 1842-10-04 | (kaynak okunmadı; imza 9 Ağustos 1842, onay mübadelesi 13 Ekim 1842 bilinen) | — | Madde günü yıl başı; s: 10-04. Her iki uç da düzeltilmeli [A]. |
| Guadalupe Hidalgo | madde 1848-05-30; s: 1848-02-02 (Santa Fe, San Francisco…) | madde yürürlük 30 Mayıs 1848 (künyeden) | (imza 2 Şubat 1848: bilinen; okunmadı) | **İç çelişki:** harita imza gününde değişiyor, madde onay mübadelesi gününde. Yerleşimlerin sahibi hukuken 30 Mayıs 1848'de ABD olur (mübadele) — s: 1848-05-30'a çekilmeli ya da madde ikiye bölünmeli. |
| Gadsden | madde+s: 1854-06-30 | history.state.gov 'gadsden-purchase' [O]: imza 30 Aralık 1853; Senato 25 Nisan 1854 (düzeltilmiş); Santa Anna 8 Haziran 1854 | WebSearch özeti (Bevans/Miller): onay mübadelesi ve ilan 30 Haziran 1854 | Gün doğru; yalnız madde `odak_yer` Philadelphia → AÇIK. Düzelt: yer_id "Tucson (San Agustín del Tucsón)". |
| Alaska | madde+s: 1867-10-18 | history.state.gov 'alaska-purchase' [O]: 30 Mart 1867 anlaşma, Senato 9 Nisan, Johnson imzası 28 Mayıs, «formally transferred … October 18, 1867» | (NARA/NPS 2. kaynak okunamadı: NPS 'American Flag Raising Site' künyede) | Gün doğru; madde `odak_yer` Moskova → Sitka'ya yerleşimler eşleşmiyor. |
| Hawaii | s: 1898-08-12 | WebSearch özeti: Newlands kararı 7 Temmuz 1898 imza; devir töreni 12 Ağustos 1898 İolani Sarayı (Hawai'i State Archives kaydı) [özet, sayfa okunmadı] | — | Gün doğru; evrende Hawaii Cumhuriyeti 1894-07-04 (ek8.js:305) var ama ilhak maddesi YOK. |
| Paris 1898 | Havana/San Juan s: 1898-12-10; Manila 1898-08-13; Guam 1898-06-21 | history.state.gov 'spanish-american-war' [O]: imza 10 Aralık 1898; Senato onayı 6 Şubat 1899; Porto Riko ve Guam devredildi, Filipinler 20 milyon $ | (yürürlük 11 Nisan 1899: künye puerto-riko f; kaynak okunmadı) | **Ölçüt karışık** (aşağıda d). |
| konfedere f | 1861-02-08 | Avalon Project (künye): Geçici Anayasa kabul günü | NPS (künye) | Çift teyitli (künye ic_not). Not: künye madde «1861-02-04 Montgomery'de örgütlendi» (Britannica Kids) f ile 4 gün farklı. |
| konfedere t | 1865-05-05 | NPS Appomattox 'Surrender Events' (künye): Washington (Georgia) kabine dağılışı | New Georgia Encyclopedia özeti: 4 Mayıs (sayfa açılmadı); Davis 10 Mayıs yakalandı | Çelişki künyede beyanlı; **s: Montgomery/Richmond 1865-05-04 ile künye t 05-05 uyumsuz.** Vikipedi tek dayanak kalmasın: Jefferson Davis yakalanması 10 Mayıs 1865 (NPS) gün da aday. |

## c) Kronoloji
Var olanlar (evren): kronoloji_sinir_amerika.js: 1818 Sözleşmesi (:41, t yıl başı), Webster-Ashburton (:53, yıl başı), Oregon (:59, yıl başı), Guadalupe (:65, 1848-05-30), Gadsden (:77, 1854-06-30), Alaska (:95, 1867-10-18), Kanada Dominyonu (:89, 1867-07-01), Rupert's Land (:101, 1870-07-15), Britanya Kolumbiyası (:113, 1871-07-20); olaylar_ek8.js:299/301/305 Hawaii (1819 kapu, 1840 anayasa, 1894 cumhuriyet); olaylar_kamerika.js:93 Fontainebleau; olaylar_ek5.js:374 Osmanlı-ABD 1830 antlaşması.
Künye içinde var, evrende YOK: Bağımsızlık Bildirgesi 1776-07-04, Paris 1783-09-03, İç Savaş 1861-04-12, İspanya-Amerika 1898-04-25 (aşağıda), I. Dünya Savaşı 1917-04-06, Marshall 1948-04-03, Alaska/Hawaii eyalet 1959, Küba Füze 1962 (ABD künyesi `kronoloji:[]`).
Konfedere künyesi içinde (evrende YOK): 1861-02-04, 1861-02-09, 1861-04-12 Fort Sumter, 1865-04-09 Appomattox.
Eksik madde önerileri ([O]=bu oturumda okundu, [A]=aday):
```
{ t:"1776-07-04", tur:"kurulus", b:"Bağımsızlık Bildirgesi kabul edildi; on üç koloni ABD olarak ayrıldı", yer_id:"Philadelphia", kaynak:"NARA 'Declaration of Independence' [A]; LoC [A]" }
{ t:"1783-09-03", tur:"antlasma", b:"Paris Antlaşması: İngiltere ABD'nin bağımsızlığını ve Mississippi'ye kadar sınırı tanıdı", yer_id:"Paris", kaynak:"NARA/History.state.gov 'Treaty of Paris' [A, okunamadı]" }   // 1783-09-03 AÇIK (Cayuga, Etowah, Falmouth…) — yer_id'ler çoklu: odak_yer:["Paris","Falmouth (Portland, Maine)", ...] 
{ t:"1803-12-20", tur:"toprak-kazanc", b:"Louisiana (New Orleans) resmen ABD'ye devredildi", yer_id:"New Orleans", kaynak:"NARA Louisiana Purchase Treaty [O]: «formally transferred at New Orleans on December 20, 1803»" }
{ t:"1804-03-10", tur:"toprak-kazanc", b:"Üst Louisiana (St. Louis) devri töreni", yer_id:"St. Louis", kaynak:"NARA [O]: «celebrated at St. Louis on March 9–10, 1804»" }
{ t:"1818-10-20", tur:"antlasma", b:"1818 Sözleşmesi: 49. paralel Kayalık Dağlar'a kadar sınır", yer_id:"Pembina", kaynak:"[A] gün okunmadı; mevcut madde (sinir_amerika.js:41) t düzeltilecek" }
{ t:"1821-07-10", tur:"toprak-kazanc", b:"Doğu Florida (St. Augustine) ABD'ye devredildi", yer_id:"St. Augustine", kaynak:"NPS/FCIT/WUWF (WebSearch özeti) [A-özet]; Adams-Onís Avalon [O]: 22 Şubat 1819 imza, 22 Şubat 1821 mübadele" }
{ t:"1821-07-17", tur:"toprak-kazanc", b:"Batı Florida (Pensacola) ABD'ye devredildi", yer_id:"Pensacola", kaynak:"aynı" }
{ t:"1845-12-29", tur:"toprak-kazanc", b:"Teksas ABD'nin 28. eyaleti olarak kabul edildi", yer_id:"San Antonio (Misyon San Antonio de Valero)", kaynak:"history.state.gov 'texas-annexation' [O]: «admitted into the United States on December 29»" }
{ t:"1846-06-15", tur:"antlasma", b:"Oregon Antlaşması imzalandı (49. paralel Pasifik'e)", yer_id:"Fort Astoria", kaynak:"ABD Statutes at Large (WebSearch özeti) [A-özet]: imza 15 Haziran 1846, mübadele 17 Temmuz" }   // mevcut madde (1846-01-01) bunun yerine düzeltilebilir
{ t:"1848-05-30", tur:"toprak-kazanc", b:"Guadalupe Hidalgo: onay mübadelesi, Kaliforniya/Yeni Meksika ABD'ye geçti", yer_id:"Santa Fe", kaynak:"künye sinir_amerika.js:65; imza 2 Şubat 1848 — s: ile hizala [A]" }
{ t:"1898-08-12", tur:"toprak-kazanc", b:"Hawaii ABD'ye ilhak edildi (İolani Sarayı töreni)", yer_id:"Honolulu", kaynak:"Hawai'i State Archives 'Annexation Ceremonies Aug. 12, 1898' (WebSearch özeti) [A-özet]" }
{ t:"1898-12-10", tur:"antlasma", b:"Paris Antlaşması (İspanya-ABD): Küba bağımsız, Porto Riko/Guam ABD'ye devredildi, Filipinler 20 milyon $", yer_id:"San Juan", kaynak:"history.state.gov 'spanish-american-war' [O]: imza 10 Aralık 1898; Senato 6 Şubat 1899" }
{ t:"1861-02-08", tur:"kurulus", b:"Konfedere Devletler Geçici Anayasası kabul edildi (Montgomery)", yer_id:"Montgomery", kaynak:"Avalon Project (künye kaynağı) [künyeden]" }  // künye içinde 02-04 var; f ile tutarlı hale getirilmeli
{ t:"1861-05-08", tur:"siyaset", b:"Konfedere başkenti Richmond'a taşındı", yer_id:"Richmond (Virjinya)", kaynak:"[A] gün: Konfedere Kongresi 20 Mayıs 1861 karar, Davis 29 Mayıs geldi — s: 1861-05-08 kaynaksız; Virjinya ayrılışı 17 Nisan 1861 (referandum 23 Mayıs)" }
{ t:"1865-05-05", tur:"son", b:"Konfedere hükümeti dağıldı", yer_id:"Richmond (Virjinya)", kaynak:"NPS Appomattox (künyeden); NGE 4 Mayıs — çelişki beyanlı" }
```

## d) Harita uyumu
91 AÇIK (101 kırılma). Gruplar:
- **13 koloni/1776-07-04 ve 1783:** 1776-07-04 AÇIK (Baltimore… Boston…): madde var ama yer_id Philadelphia; çözüm yer_id çoğullama (`odak_yer`).
- **Batı genişlemesi, 1778-1900 (≈ 60 AÇIK):** Louisville 1778, French Lick 1779, Cincinnati 1788, Detroit 1796, Natchez 1798, Little Rock 1820, Westport 1821, Fort Laramie 1834, Houston 1845-12-29, Salt Lake City 1847-07-24 (Mormon yerleşimi), Albuquerque 1848-02-02, Tubac/Tucson 1854-06-30, Denver 1858, Seattle 1851-11-13, Alaska 1867-10-18 (Alatna… 15 yerleşim). Çoğu "yerli ulus noktası ABD'ye geçti" tipi; tek tek madde yazmak yerine **antlaşma/eyalet gününe bağlı toplu `odak_yer` listesi** önerilir: Louisiana 1803-12-20, Florida 1821-07, Teksas 1845-12-29, Oregon 1846-06-15 (+ Boise, Astoria, Colvile, Hall), Meksika 1848, Gadsden 1854, Alaska 1867.
- **Yerli konfederasyon merkezlerinin kaybı (kategori sorunu):** Chota/Kituwa 1791-07-02, Nanih Waiya 1830-09-27 (Choctaw; Dancing Rabbit Creek Antlaşması 27 Eylül 1830 bilinen), Coweta/Ocmulgee 1832-03-24 (Creek), Saukenuk 1832-09-21 (Sauk), Memphis/Chickasaw 1832-10-20, Comanchería 1875-01-01, Deadwood/Kara Tepeler 1876-01-01 vb. — bu geçişlerin çoğu antlaşma tarihlerine bağlı; tarih/yıl hassasiyeti ve yerli künye (`choctaw`, `creek-konfederasyonu`) bitişi ile tutarlılık ayrıca ölçülmeli (choctaw/creek t=1907-11-16!). **Çelişki:** Choctaw/Creek künyeleri 1907'ye kadar sürerken harita noktaları 1830/1832'de ABD'ye geçiyor.
- **1898-1902:** Guam 06-21, Honolulu/Hilo/Lahaina 08-12, Manila/Cebu/Dagupan 08-13 (AÇIK), Küba/Porto Riko 12-10, Küba 1902-05-20 (kayıp: bağımsızlık; AÇIK), Colo (Jolo) 1915-03-22 (Kiram Anlaşması?), 1923-10-29 (Batangas, Butuan, Cebu → amerikan-filipinleri).
- **1945-09-02 / 1947-07-18:** Ogasawara/Iwo Jima ve Tinian (TTPI) — AÇIK; evrende Japonya genel teslim 1945-09-02 maddesi var (Osmanlı kaynaklı, yer eşleşmesi yok).
Konfedere sorunu (AÇIK): 1861-02-08 Montgomery, 1861-05-08 Richmond. Sayı 2 yerleşim; **eyalet toprağı boyaması yok.** Ölçülen: Charleston (Charles Town) s: ingiltere→abd 1776-07-04→2000; Savannah aynı; New Orleans `abd` 1803-12-20→2000 — **iç savaş boyunca ABD.** Beyan öner: "Konfedere toprak boyası: ABD (petek yerleşim yok) — yalnız 2 nokta"; ya da 11 eyaletin başlıca şehirleri (Charleston, Savannah, Atlanta, New Orleans, Houston, Mobile, Jackson, Little Rock, Raleigh, Columbia, Tallahassee, Nashville) için 1861-ayrılış gününden (SC 1860-12-20; MS 01-09; FL 01-10; AL 01-11; GA 01-19; LA 01-26; TX 02-01; VA 04-17; AR 05-06; NC 05-20; TN 06-08 — bilinen, okunmadı) 1865-05-05'e kadar `konfedere-devletler` s: dönemi açılsın. Kaynak: Avalon 'Confederate States' ve Britannica [A].
Sahiplik uyumu: 1919 en geniş yıl: 241 yerleşim. Alaska yerleşimleri 1867-10-18'den; Anchorage 1915; Rus Amerikası künyesinde 0 yerleşim (Sitka ve diğerleri `abd` s: 1867'den başlıyor, öncesi nasıl boyalı sorusu: Rus Amerikası 1799-1867 için yerleşim yok → "haritada görünmüyor", Sitka s: kontrol önerilir).
1923 sonrası: ABD ufuktaki özel bölgeleri `puerto-riko`, `amerikan-filipinleri`, `panama-kanali-bolgesi`, `ryukyu-abd-idaresi` künyelerine taşıyor; 1923-10-29 yapay kırılma (4 AÇIK kayıp).

## Önerilen düzeltmeler (KASA için)
1. `data/kronoloji_sinir_amerika.js`: 1818 maddesi t "1818-01-01" → "1818-10-20" [A]; Webster-Ashburton t "1842-01-01" → 1842-08-09/10-13 [A, kaynak okunmadı]; Oregon t "1846-01-01" → "1846-06-15" (imza) — kaynak: ABD Statutes at Large. Her birine `yer_id`/`odak_yer`ı kırılan yerleşim adlarıyla genişlet (Gadsden→Tucson, Alaska→Sitka vb.; Değişmez 2'nin yer şartı).
2. `data/yerlesimler*.js` Guadalupe Hidalgo: Santa Fe, San Francisco… s: 1848-02-02 → 1848-05-30 (mübadele), ya da madde ikiye böl; New Orleans 1803-04-30→1803-12-20 ara dilimi `fransa` yapılıp 1803-11-30 ayrımı (kaynak aranmalı).
3. `data/devletler.js` abd künyesi: `kaynak:` slug'ı yerine NARA/LoC kaynağı; konfedere-devletler t'sini s: ile hizala (1865-05-05 ya da s: 05-04).
4. Konfedere topraklarının yerleşim dönemleri (eyalet başkentleri + büyük şehirler) — HAVVA koşusu gerekir; önce veri yazılır.
5. 1898-1899 ölçütü: tüm yeni edinimler için tek tarih seç (ör. devir/ilhak töreni: Guam 1899-… , Manila 1898-08-13 işgal, Küba/Porto Riko 1899-04-11 yürürlük) ve künyeler (puerto-riko f=1899-04-11, amerikan-filipinleri 1901-07-04) ile tutarlı yap; Manila s: `abd` 1898-08-13→1923-10-29 ile künye f çelişkisi.
6. Evrene eklenecek maddeler: c) bölümü (1776, 1783, 1803-12-20, 1804-03-10, 1821-07-10/17, 1845-12-29, 1846-06-15, 1898-08-12, 1898-12-10, Konfedere seti).
7. Choctaw/Creek künye t=1907 ve 1830-32 harita geçişi arasındaki uyumsuzluk için ayrı denetim.

## Erişilemeyen kaynaklar
- NARA 'Treaty of Paris (1783)' veya history.state.gov 'treaty-of-paris-1783': soru: imza günü 3 Eylül 1783 ve yürürlük 12 Mayıs 1784.
- history.state.gov 'oregon-boundary' / 'guadalupe-hidalgo' / 'hawaii' sayfaları 404 verdi (URL'ler yanlış olabilir): sorular: Oregon imza/mübadele 15 Haziran/17 Temmuz 1846; Guadalupe imza 2 Şubat, mübadele 30 Mayıs 1848; Hawaii devir 12 Ağustos 1898.
- Avalon Yale 'gadsden', 'br1846' sayfaları 404; Gadsden 30 Haziran 1854 mübadelesi için Bevans c.9 s.812 (dheller.org PDF listelendi, açılmadı).
- NPS 'jeff' Üst Louisiana devri sayfası 404: soru: Fransa'nın New Orleans'ı 30 Kasım 1803'te İspanya'dan devralışı.
- Jefferson National Expansion Memorial / Library of Congress 'Louisiana Purchase': ikinci bağımsız kaynak.
- Britannica 'Confederate States of America' (403): Konfedere eyaletlerin ayrılış günleri; JSTOR: McPherson, *Battle Cry of Freedom* (1988) — Konfedere kuruluşu/son toplantı günü.
- Cambridge History of the US vol.2 (Cambridge Univ. Press): 1783 Paris ve batı genişlemesi için akademik tarih.

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Oxford Reference «Confederate States of America»: okunamadı (yalnız özet; gün yok). Konfedere kuruluş/çözülme günleri ikinci kaynak bekliyor.

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- 1818 Anglo-Amerikan Sözleşmesi: W. E. Lass, «How the Forty-Ninth Parallel Became the International
  Boundary», *Minnesota History* 44/6 (1975), s. 218 dn. 47: Gallatin ve Rush'ın raporu «October 20, 1818»
  (ASP FR 4:381) ⇒ madde 1818-01-01 → **1818-10-20** (dolaylı teyit: imza günü yazılan rapor).
- Oregon 15 Haziran 1846 (Lass s. 214) okunmadı; Paris 1783 (3 Eylül 1783 / 12 Mayıs 1784) JSTOR'da bulunamadı.

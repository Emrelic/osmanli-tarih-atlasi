# F2-B — Kuzey Amerika, ABD Batı + Alaska (17 Kasım 2026)

Dal: `sehir-kuzeyamerika-f2-1117-b` · Çıktı: `data/sehir_tarihce_kuzey_amerika_3.js` (`window.SEHIR_TARIHCE_KUZEY_AMERIKA_3`)
Denetçi: `py arac/sehir_tarihce.py denetle data/sehir_tarihce_kuzey_amerika_3.js` → çıkış 0 · 20 şehir · 22 sahiplik dönemi · 93 olay · ihlal 0 · uyarı 11 (hepsi bilerek, aşağıda).

## ① Yazılan şehirler (20/20)
austin, salem, lincoln, bismarck, pierre, denver, sacramento, monterey, san-diego, helena, boise, salt-lake-city, sitka, cheyenne, fort-vancouver, spiro, pueblo-bonito, los-adaes, washington-on-the-brazos, san-felipe-de-austin (hepsi `-us`).
Seçim: kat artan, kron_say azalan; Santa Fe, St. Louis zaten yazılı. Independence (kat 3) kat 2'deki San Felipe de Austin'e yer açmak için dışarıda kaldı.
- Olay: 93, hepsi kaynak + `tanik` taşır (100 %). Sahiplik dönemi: 22, hepsi kaynaklı; ama bir kısmı DOLAYLI çıkarım (ABD/Meksika egemenliği "territory/capital" ifadesinden) ve kendi `ic_not`unda öyle beyanlıdır.
- Kaynak: Britannica şehir maddeleri tarayıcıda tam gövde okundu (13 şehir). Handbook of Texas, NPS Chaco, NPS Sitka, Oklahoma Historical Society: WebFetch ile okundu — **alıntılar aracın sayfadan çıkarımıdır, tam gövde değil**; kaynak alanında beyan edildi (Austin, Los Adaes, Washington, San Felipe, Chaco, Spiro, Sitka'nın 1804 maddesi).
- Çift kaynaklı şehir: yalnız Austin (Britannica + Handbook of Texas). Sitka'da NPS yalnız 1804 Muharebe maddesini destekler. Geri kalan **18 şehir "tek kaynak"** (Fort Vancouver, Pueblo Bonito, Spiro dahil; Washington ve San Felipe aynı yayıncının iki maddesi = tek kaynak ailesi).
- Açılamayan: Oregon Encyclopedia (403), Colorado Encyclopedia (403), HistoryLink (aranan sayfa değil), California State Parks (bağlantı reddi), NPS Fort Vancouver (tarih yok), NPS Cabrillo (yıl yok), NPS Monterey/Sutter's Fort/Chaco-history (404), utah.gov (404). Bunlar uydurma yok, "okunamadı".
- Britannica "Fort Vancouver" sayfası AI özeti olduğundan kullanılmadı; "Vancouver (Washington)" maddesi kullanıldı.
- Yerli merkezler: Spiro ve Pueblo Bonito `arkeolojik`; yazılı anılış yok, `ic_not`ta "arkeolojik başlangıç ≠ yazılı ilk anılış" yazıldı. Cahokia/Natchez bölgem dışı.

## ② Denetle çıkışı
0 (ihlal 0). Uyarılar: 3 × "künye bekliyor texas-cumhuriyeti" (Austin, Washington, San Felipe), 7 × "atlas başlangıcı düzeltilmeli/zincir boş" (Pierre, Sacramento, San Diego, Helena, Boise, Sitka, Pueblo Bonito — ilk.t atlas gününden sonra ya da aynı), 1 × Salt Lake City dikiş beyanı.

## ③ Atlas düzeltme önerileri (şehir | atlas | kaynaklı | kaynak)
- Helena | 1864-01-01 abd | kuruluş 30 Ekim 1864 (altın Temmuz 1864) | Britannica «Helena»
- Sitka | 1799-07-01 rusya (Novoarkhangelsk) | 1799 = Old Sitka/Fort St. Michael; bugünkü Novo-Arkhangelsk 1804 | Britannica «Sitka»
- Boise | 1834-01-01 __BOSLUK__ (Fort Boise) | modern Boise'nin Fort Boise'si 4 Temmuz 1863 | Britannica «Boise» (1834 tanığı okunmadı)
- Pierre | 1817-01-01 abd (Fort Pierre) | 1817 karakolu batı yakada; Pierre 1880 | Britannica «Pierre» (mesafe ölçülmedi)
- Salt Lake City | 1847-07-24 abd | Utah ABD egemenliğine 1848 Guadalupe Hidalgo sonrası geçti; 24 Temmuz günü okunan kaynakta yok | Britannica «Salt Lake City»
- Spiro | 1281-01-01 | OHS: yapılar 850-1450 | OHS «Spiro Mounds» (künye 0850-1450 ile uyumlu, atlas dönem başı değil)
- Fort Vancouver | 1825-03-19 __BOSLUK__ | kuruluş 1824 | Britannica «Vancouver (Washington)»
- Austin (atlas noktası yok): Teksas devri Britannica 1845 / HoT 19 Şubat 1846 çelişkisi `ic_not`ta.
- San Diego: atlas noktası "Misyon" adlı; presidio ile modern merkez mesafesi ölçülmedi (>3 km olabilir; 3 km kuralı).
- Atlas noktası olmayan: Austin, Salem, Lincoln, Bismarck, Los Adaes, Washington-on-the-Brazos, San Felipe de Austin — nokta/başlangıç önerileri kayıtlarda.
- `texas-cumhuriyeti` ve Mormon Deseret için künye açılması önerilir (3 kayıt kunye_yok bekliyor).

## ④ Yazamadıklarım / sınırlar
- 3300-4500 karakterle kesilen Britannica sayfalarında (San Diego, Sacramento, Salt Lake City) tail kısmı okunmadı; San Diego'nun 1821/1846-48 devirleri yazılamadı.
- Meksika dönemi geçişleri (Monterey, San Diego, Sacramento 1821-22), 1861-65 Konfederasyon (Austin), Oregon Country ortak işgali (Salem), 1846 Oregon Antlaşması (Fort Vancouver) kaynaksız → yazılmadı.
- Yerli adlar (Tlingit Sheetʼká, Kumeyaay Kosa, Lenape vb.) iki kaynakta doğrulanmadığı için `adlar`a alınmadı.
- Independence, San Gabriel (Ohkay Owingeh), Juneau, Phoenix, Prescott, Olympia vb. bu turda dışarıda.
- Jülyen/Gregoryen: Sitka 1867 öncesi Rus günleri kaynakta takvimsiz; Britannica'nın 18 Ekim 1867'si ABD günü; beyan yazıldı, çevrilmedi.

## ⑤ F3 önerisi
1. Bu 18 tek-kaynaklı şehre ikinci bağımsız kaynak: eyalet tarih kurumları (Oregon, Colorado, Montana, Idaho, Utah, Nebraska, ND/SD) tarayıcıda (WebFetch 403/404 verenler); alıntıları tam gövdeden almak.
2. Pierre/Fort Pierre, Sitka/Old Sitka, San Diego/presidio, Boise/HBC Fort Boise noktaları için mesafe ölçümü (yer ayrımı).
3. Salt Lake City 1847-07-24 ve Utah egemenliği; Texas devir günü (29 Aralık 1845 / 19 Şubat 1846) için üçüncü kaynak (hakemli karar).
4. Kalan: Independence (kron_say 180), Juneau, Phoenix, Prescott, Olympia, Little Rock, Des Moines, Topeka, Baton Rouge, Jefferson City, Carson City, Guthrie, San Gabriel/Ohkay Owingeh, Benicia, Vallejo.

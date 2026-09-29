# YERLESIM-BIRLESTIR-0930 — 16 yerleşim öneri dosyasının birleştirilmiş, süzgeçten geçmiş listesi

30 Eylül 2026 · `data/yerlesimler*.js`e DOKUNULMADI · makine çıktısı: `denetim/YERLESIM-BIRLESTIR-0930.json`

## Ölçüm özeti

- 16 dosyadan **170 kalem** çıkarıldı (kalem = paketin bir satırı/grubu; bir kalem 1-35 yerleşime dokunur). Koordinatörün **344** sayısını yeniden üretemedim — neyi saydığını bilmiyorum (`bulunamadı`); kalem sayısı buradadır.
- 🔴 **Önerilerin neredeyse tamamı YENİ NOKTA DEĞİL, MEVCUT yerleşimin pencere düzeltmesi.** Yeni nokta önerisi yalnız KRONO-AMERIKA-G'de (11). Şartnamedeki `{ad,lat,lon,s}` şeması bu yüzden yetmedi: kabul edilenler için JSON'da `yerlesim_son` var — **125 yerleşimin uygulanmış tam `s/d/v/isg` dizisi**, doğrudan yerine konur.
- **kabul 48** kalem → **125 yerleşim** · **şüphe 61** · **karar 16** (Emre/koordinatör sorusu, çoğu künye açılmasını bekliyor) · **red 36** · **koordinat kaynaksız 9**
- Her kabul op'u MEVCUT pencereyle eşleşti (0 eşleşmeme, 0 çözülmeyen ad); yeni çakışma 0 · yeni sahipsiz boşluk 0 · sıfır/ters pencere 0.
- ⚠️ **ÖLÇÜLMEDİ:** `denetle.py` kaynak darboğazı yüzünden koşturulmadı ⇒ Değişmez 2 (±30 gün) ve 8a/8b etkisi bilinmiyor. Bir pencere günü madde gününden uzaklaştıysa kırılma açılabilir. Uygulamadan sonra kapı sorar.

## Süzgeçlerin yakaladıkları (düzeltildi ya da koşula bağlandı)

1. **② hayalet — ASU-5 (Timur'un 18 şehri):** `cagatay` künyesi t 1370-01-01; pencereyi 04-09'a çekmek 98 günlük hayalet açar. Bugün aynı 98 gün `timurlu` tarafında hayalet. ⇒ kabul, **KOŞUL: `cagatay` t → 1370-04-09.**
2. **③ boya — TUN-3 (Erdel 1551-56):** paket `d:"macaristan-habsburg"` yazmıştı; o bir BOYALAR anahtarı değil (künyenin `harita:` değeri `macaristan`). Yazılsaydı delik açılırdı. ⇒ `d:"macaristan"` yazıldı.
3. **② hayalet — TUN-1 (İbrail · Yergöğü):** paket `kid:"eflak"`i 1878'e dek önerdi; `eflak` künyesi 1859-01-24'te ölüyor. ⇒ 1859'da bölündü (`kid:romanya`). Aynı kusur 15 Memleketeyn noktasında zaten var (TUN-1b, kabul).
4. **⑤ kaynak — ATA-20 (Melîle):** paket "kaynak o maddede" diyordu; madde (Gozalbes Cravioto) 17 Eylül'ün 18. yy yaklaşımı olduğunu, çağdaş kaynağın yalnız "eylül" dediğini yazıyor. ⇒ şüpheye.
5. **④ kara — AMG-1/2 (Antofagasta, Iquique):** motorun karası dışında. ⇒ red.
6. **① mükerrer:** Tanca (ATLANTIK-B Y-3 = MAGRIB Y4-p) ve Kielce/Radom (KUZEY 1.2 = ORTA-AVRUPA Y5) iki pakette yazılmış — birleştirildi. Yeni noktalarda ≤3 km çift yok (Callao–Lima 8,5 km · Recife–Olinda 5,3 km).
7. **Ters yön (§3.5) — TUN-6b:** 1918-12-01 Gyulafehérvár bir BEYAN; Romen ordusu Varad/Szatmár'a Nisan 1919'da girdi. Tek gün yedi yerleşime taşınmamalı → şüphe. **KUZ-11:** Yakutsk 1632-09-25 JÜLYEN verilmiş (Gregoryen 1632-10-05).

## KABUL — uygulanmaya hazır

| id | yerleşim | değişiklik | kaynak | koşul / not |
|---|---|---|---|---|
| AMK-A1 | Antigua Guatemala (Santiago de los Caballeros) | pencere günü 1543-01-01 → 1543-03-10 (madde günü) | kronoloji_cok_orta_amerika.js: Britannica, «Antigua Guatemala» — britannica.com/place/Antigua-Guatemala · gün: ikincil web taramasında tutarlı, birincil belge sayfası açılmadı |    |
| AMK-A2 | Louisville | pencere günü 1778-01-01 → 1778-05-27 (madde günü) | kronoloji_cok_kuzey_amerika.js: Kleber, John E. (ed.), The Kentucky Encyclopedia (University Press of Kentucky, 1992), «Louisville» · gün: ikincil web taramasında tutarlı, birincil |    |
| AMK-A3 | Cincinnati (Losantiville) | pencere günü 1788-01-01 → 1788-12-28 (madde günü) | kronoloji_cok_kuzey_amerika.js: Cincinnati Museum Center Library, «Cincinnati FAQs» — library.cincymuseum.org/cincifaq.htm |    |
| AMK-A4 | Fort Vancouver | pencere günü 1825-01-01 → 1825-03-19 (madde günü) | kronoloji_cok_kuzey_amerika.js: HistoryLink.org, «Hudson's Bay Company opens Fort Vancouver on March 19, 1825» — historylink.org/file/5251 |    |
| AMK-A5 | Victoria (Fort Victoria) | pencere günü 1843-01-01 → 1843-06-10 (madde günü) | kronoloji_cok_kuzey_amerika.js: Legislative Assembly of British Columbia, «1843 - Fort Victoria is Established» — leg.bc.ca · The Canadian Encyclopedia, «Fort Victoria» — thecanadi |    |
| AMK-A6 | Seattle (Duwamish) | pencere günü 1851-01-01 → 1851-11-13 (madde günü) | kronoloji_cok_kuzey_amerika.js: HistoryLink.org, «Denny Party lands at Alki Point near future Seattle on November 13, 1851» — historylink.org/file/5392 |    |
| AMK-A7 | Denver | pencere günü 1858-01-01 → 1858-11-22 (madde günü) | kronoloji_cok_kuzey_amerika.js: Colorado Encyclopedia, «Auraria (West Denver)» — coloradoencyclopedia.org/article/auraria-west-denver |    |
| AMK-A8 | Cheyenne (Wyoming) | pencere günü 1867-01-01 → 1867-07-04 (madde günü) | kronoloji_cok_kuzey_amerika.js: Wyoming State Historical Society, WyoHistory.org, «Cheyenne, Magic City of the Plains» — wyohistory.org |    |
| AMK-A9 | Dawson City | pencere günü 1896-01-01 → 1896-08-16 (madde günü) | kronoloji_cok_kuzey_amerika.js: The Canadian Encyclopedia, «Klondike Gold Rush» — thecanadianencyclopedia.ca/en/article/klondike-gold-rush · gün: ikincil web taramasında tutarlı, b |    |
| AMK-A10 | St. Louis | pencere günü 1803-12-20 → 1804-03-10 (madde günü) | kronoloji_cok_kuzey_amerika.js: Missouri Encyclopedia, «Louisiana Purchase and Missouri» — missouriencyclopedia.org/events/louisiana-purchase-and-missouri · ABD Millî Park Servisi, |    |
| AMK-B1 | Houston | abd 1836-01-01 → teksas-cumhuriyeti 1836-08-30→1845-12-29 + abd 1845-12-29→ | Handbook of Texas «Houston, TX» (Texas State Historical Association) |    |
| ASU-3 | Hazârasp, Hîve, Köhne Ürgenç (Gürgenç), Küngrat | timurlu→buhara 1502-01-01 → 1505-01-01 | Britannica «Muḥammad Shaybani»: 1505'te Harezm'i aldı · madde kronoloji_cok_orta_asya2 1505 |    |
| ASU-5 | Andican, Belh, Buhara, Cizzah … (+14) | cagatay→timurlu 1370-01-01 → 1370-04-09 (18 yerleşim) | TDV timur · künye timurlu f 1370-04-09 | künye `cagatay` t 1370-01-01 → 1370-04-09 BİRLİKTE (yoksa 98 günlük hayalet; bugün aynı 98 gün `timurlu` tarafında hayalet — künye timurlu f 1370-04-09)   |
| ASU-8 | Baram (bölge), Niah kıyısı (bölge) | brunei→sarawak 1882-06-13 → 1882-01-01 (gün kaynaksız, yıl kaynaklı) | Runciman 1960; Tarling 1971 — YIL |    |
| ATA-4 | Batna | konstantin-beyligi→fransa 1844-03-04 → 1844-02-12 | ANOM geo 'Batna (Algérie)': camp militaire fondé le 12 février 1844 |    |
| ATA-10 | Beyrut | memluk… Osmanlı→fransa 1918-10-08 → 1918-10-07 | TDV beyrut: '7 Ekim 1918'de Fransız kuvvetlerinin …' |    |
| ATA-13 | Mersin | Osmanlı→fransa 1918-10-30 → 1918-12-17 | TDV mersin: '17 Aralık 1918'de Fransız askerleri denizden Mersin'e çıkarma yapmaya başladı' |    |
| ATA-17 | Kalyari (Cagliari) | ceneviz 1281→1324-01-01 → piza …→1324-06-19, aragon 1324-06-19→ | Gran Enciclopèdia Catalana 'conquesta de Sardenya' |    |
| ATB-4 | Tanca | ingiltere→fas 1684-02-05 → 1684-01-01 (TDV yalnız yıl) | TDV tanca: '(1095/1684)' — YIL; gün yok |   MÜKERRER öneri: iki paket aynı kalemi yazmış — birleştirildi |
| BLB-1 | Kragujevac, Yagodina (Jagodina), Çaçak | d t / v f 1830-11-08 → 1830-10-17 | TDV sirbistan: '17 Ekim 1830'da verilen bir imtiyaz fermanıyla' | çekirdek madde olaylar_ek.js:73 aynı güne  çekirdek madde olaylar_ek.js:73 BİRLİKTE düzeltilmeli |
| BLB-2 | Serez | bizans→sirbistan 1345-01-01 → 1345-09-25 | TDV serez (yıl) + Fine, The Late Medieval Balkans 1987 (gün) |    |
| BLB-3 | Akçahisar (Kruja) | 1478-06-15 → 1478-06-16 | TDV kruya: '15 Rebîülevvel 883'te (16 Haziran 1478)' | çekirdek olaylar_ek5.js:131 aynı güne MEVCUT hayalet (dokunulmayan uç): arnavutluk künyesi f 1443, pencere 1281'den Leş ve Mat'a DOKUNULMAZ; çekirdek olaylar_ek5.js:131 birlikte |
| BLD-1 | Limni | isg yunanistan f 1912-10-08 (Jülyen) → 1912-10-21 + kaynak | TDV limni: 'Limni 21 Ekim 1912'de Yunanlılar tarafından işgal edildi' |   mevcut kaynak:'oniki-ada' YANLIŞ, değiştirildi |
| BLD-2 | Taşoz | isg yunanistan f 1912-10-18 (Jülyen) → 1912-10-30 + kaynak | TDV tasoz: '30 Ekim 1912'de Yunanistan Taşoz'u … işgal etti' |   mevcut kaynak:'oniki-ada' YANLIŞ, değiştirildi |
| BLD-3 | Semadirek | isg yunanistan f 1912-10-19 (Jülyen) → 1912-11-01 + kaynak | TDV semadirek: '1 Kasım 1912'de Yunanistan tarafından işgal edildi' |   mevcut kaynak:'oniki-ada' YANLIŞ, değiştirildi · TDV Taşoz maddesiyle iç çelişki (30 Ekim) — adanın kendi maddesi esas |
| BLD-6 | Vidin | 1365-1369 macaristan penceresi (yıl) | TDV vidin (M. Kiel 2013): 1365 Macar, 1369 geri — YIL |  MEVCUT hayalet: bulgaristan künyesi t 1396-01-01, pencere 1396-10-01'e dek (öneri bunu değiştirmiyor) paket: düşük öncelik, istenmezse düşür |
| DOI-3 | Divriği | Osmanlı 1399-09-01→1402-07-28 → 1398→1401 (yıl), memluk 1401→ | TDV divrigi: '1398'de … Osmanlı topraklarına kattı … 1401'de tekrar Memlükler'e verildi' — YIL |    |
| ITA-1 | İzmir | sovalye→aydin 1402-07-28 → 1402-12-01 (AY hassasiyeti) | TDV izmir: 'Timur'un Aralık 1402'deki zaptına kadar' — AY, gün yok |   YYYY-MM-01 'ay biliniyor' anlamında (D213): kaynak alanına 'TDV: Aralık 1402 — gün yok' yazılmalı |
| KAF-1 | Tiflis, Zagem (Kaheti) | sovyet-rusya 1917-11-07→ → transkafkasya / GDC 1918-05-26→1921-02-25 / sovyet | TDV tiflis + TDV acara (günlü) |    |
| KAF-6 | Tiflis | Osmanlı d t 1735-06-19 → 1735-08-12 | TDV tiflis: '12 Ağustos 1735'te Tiflis'i yeniden ele geçiren İran birlikleri' |    |
| KAF-7 | Revan | isg rusya 1827-10-13→1828-02-22 ekle | TDV revan: 'ikinci saldırıda kaleyi ele geçirdiler (13 Ekim 1827)' |    |
| MAG-Y2 | Benzert (Bizerte), Bin Gerdân, Bâce (Béja), Cendûbe … (+31) | v: kid YOK → kid tunus-ocagi …→1881-05-12 + kid tunus-beyligi-fransiz 1881-05-12→ | TDV huseyniler, tunus ('eyâlet-i mümtâze') |   MAG-Y4b'den SONRA uygulanır; boyamayı değiştirmez (v: kid dizin bağıdır) |
| MAG-Y4a | Halkulvâdî, Tunus | hafsi→Osmanlı 1574-08-25 → Tunus 1574-09-12 · Halkulvâdî 1574-08-24 | TDV tunus: '12 Eylül 1574'te Tunus'u geri aldı' · '(24 Ağustos 1574) … ele geçirildi' |   Tunus kutusundaki öteki 32 yerleşimin 1574-08-25'i için gün önerilmedi |
| MAG-Y4b | Benzert (Bizerte), Bin Gerdân, Bâce (Béja), Cendûbe … (+31) | 1705-07-17 → 1705-07-12 | TDV huseyin-pasa-tunus-beyi: '20 Rebîülevvel 1117 (12 Temmuz 1705)' |    |
| MAG-Y4e | Mersa'l-Kebîr, Oran | ispanya→Osmanlı 1792-02-12 → 1792-09-12 | TDV vehran: '12 Eylül 1792 tarihinde … Vehrân'ı İspanyollar'dan geri almayı başardı' | çekirdek madde olaylar_ek5.js 1792-02-12 aynı güne  çekirdek madde olaylar_ek5.js 1792-02-12 de aynı kaymada — birlikte |
| MAG-Y4f | Muaskar | abdulkadir→fransa 1841-01-01 → 1841-05-30 | TDV muasker: '30 Mayıs 1841'de Fransızlar Muasker'i yeniden işgal ettiler' |    |
| MAG-Y4g | Annaba | zeyyani→hafsi; 1535-1540 ispanya garnizonu | TDV bune: 'Hafsîler'in eline geçti' · 'beş yıllık bir direnişten (1535-1540) sonra İspanyollar kaleyi boşaltmak zorunda kaldılar' — YIL |    |
| MAG-Y4h | Konstantin | 1526-1527 hafsi arası (yıl) | TDV kostantine: 'Hafsîler'in 1526'da geri aldığı şehir bir yıl sonra tekrar Osmanlılar'ın eline geçti' — YIL |    |
| MAG-Y4i | Azemmûr, Safi (Asfi) | portekiz→merini 1541 → sadi 1541 | TDV sadiler: '1541'de … Portekizliler'i Safî ve Azemmûr'u terketmeye' (özne Sâdî) — YIL |    |
| MAG-Y4j | Tıtvân (Tetuan) | isg ispanya 1860-02-05 → 1862 (yıl) | TDV sebte: '5 Şubat 1860'ta Tıtvân'ı (Tetuan) işgal eden İspanya' · titvan: '1862 yılında … boşalttılar' |    |
| MAG-Y4l | Benzert (Bizerte) | hafsi→Osmanlı 1574-08-25 → 1557 (yıl) | TDV benzert: '1557'de Kaptanıderyâ Piyâle Paşa tarafından tekrar Osmanlı hâkimiyetine dahil edilmiştir' — YIL |    |
| ORA-Y1 | Broumov (Braunau), Hradec Králové, Prag, Třeboň (Wittingau) … (+1) | almanya→avusturya 1526-08-29 → 1526-10-22 (Ferdinand'ın seçimi) | Wien Geschichte Wiki 'Ferdinand I.': 'König von Böhmen (Wahl 22. Oktober 1526 …)' |   almanya penceresi 54 gün uzar (sahipsizlik açılmaz) |
| OSC-2 | Karahisâr-ı Sâhib (Afyon) | sahibata→germiyan 1327-01-01 → 1341-01-01 (EN ERKEN sınır) | TDV sahib-ataogullari: ilhak '742'den (1341) sonra' — YIL |    |
| TUN-1 | Yergöğü (Giurgiu), İbrail | s eflak/romanya 1829-1878 → v: kid eflak (→1859) / kid romanya (→1878) + s romanya 1878-07-13→1881-03-26 | TDV edirne-antlasmasi/ibrail/yergogu: 'Eflak prensliğine bırakıldı' · TDV romanya: 'Berlin Kongresi'ne kadar (1878) Osmanlılar'a bağlı' |   paket kid:eflak'ı 1878'e dek önerdi; eflak künyesi 1859-01-24'te biter → hayalet olmasın diye 1859'da bölündü (paketin kendi 2. sorusuyla tutarlı) |
| TUN-1b | Birlad (Bârlad), Buzău, Bükreş, Kalas (Galatz) … (+11) | v: 1859-01-24'te böl, 2. parça kid romanya | künye eflak/bogdan t 1859-01-24 · romanya f 1859-01-24 |   yalnız dizin bağı, boyama değişmez; mevcut HAYALET TÂBİ kusurunu kapatır |
| TUN-2 | Kili | rusya 1812→1917 → 1856-03-30→1878-07-13 v: (Kahul ile aynı) | TDV kili: 'Paris Antlaşması ile (1856) … Kili dahil … Boğdan beyliğine terketti' · gün TDV paris-antlasmasi 30 Mart 1856 |    |
| TUN-3 | Brassó (Braşov), Erdel (Kaloşvar), Erdel Belgradı (Gyulafehérvár), Segesvár (Sighişoara) | v 1541-1687 içine s macaristan-habsburg 1551-07-26→1556-03-12 | History of Transylvania I (ed. Köpeczi, MTA) s.102: 26 Temmuz 1551 Kolozsvár diyeti · 12 Mart 1556 Szászsebes diyeti |    |
| TUN-8 | Kili | 1448-1465 Eflak (yıl) | TDV kili: 'Kili Kalesi 1448'den sonra tekrar Eflak Voyvodalığı'na geçti'; Stefan 24 Ocak 1465'te aldı |   paket: düşük öncelik |

## ŞÜPHE — koordinatör 30 sn'de karar verir (önerilen değer var, kaynağı zayıf ya da koşulu var)

| id | yerleşim | öneri | kaynak | neden şüpheli |
|---|---|---|---|---|
| AFR-A1 | Hamdullahi | kur+s f 1820-01-01 → 1815-01-01 (massina) | TDV fulaniler — YIL | KOŞUL: massina künyesi f 1818-01-01 → 1810-01-01 inmeden künye penceresini aşar (hayalet) |
| AMK-B2 | Salt Lake City | abd 1847-07-24 → meksika 1847-07-24→1848-02-02 + abd | künye meksika maddesi (Guadalupe Hidalgo) — yer-özel kaynak yok |  |
| AMK-B3 | Biloxi, Mobile | İngiliz Batı Florida evresi atlanmış; abd başlangıcı 1812-13 olmalı — ÖNERİ DEĞERİ YOK | MDAH timeline + haber (arama özeti) | kuşku YÜKSEK — kaynak oturumuna havale |
| ASU-1 | Herat | afganistan 1826 → 1863; 1826-1863 herat-emirligi (künye YOK) ya da bos: | Britannica «Afghanistan — Dōst Moḥammad» | künye yok → önce KUNYE; afgan-durrani t 1823 hayalet riski |
| ASU-2 | Belh | buhara→afganistan 1841 → 1859 (başka özet 1850) | Britannica; kaynaklar arası 9 yıl |  |
| ASU-4 | Taşkent | 1503 eski sahip mogulistan; 1503-1809 buhara şüpheli | Britannica; EI² — kısmen hafıza |  |
| ASU-6 | Raipur, Ratanpur | 1853-01-01 → 1853-12-11 (III. Raghuji'nin ölümü; ilhak 1854) + nagpur-bhonsle (künye YOK) | Metcalf & Metcalf 2006; Britannica | ölüm günü ≠ ilhak günü; künye yok |
| ASU-8b | Limbang | f 1890-01-01 → 1890-03-17 | web özeti |  |
| ATA-1 | Butrint | 1798-10-23 → 1798-10-25 | Moschonas/Fleming Vikipedi dipnotundan |  |
| ATA-3 | Krk, Cres, Rab | 1809-01-01 → 1809-10-14 (Schönbrunn) | Hrvatska enciklopedija — adaları sayan dekret görülmedi (çıkarım, orta) |  |
| ATA-5 | Dellîs | 1844-03-04 → 1844 (yıl) | ANOM — yalnız yıl |  |
| ATA-6 | Bû Sa'âde | 1844-03-04 → 1849 | ANOM | abdulkadir künyesi 1847-12-23'te biter → 1848-1849 hayalet; ara sahip gerekli |
| ATA-7 | Sûk Ahrâs, Tebesse | 1844-03-04 → 1852 / 1851 | ANOM | ara dönem sahibi belirsiz → Değişmez 1 riski |
| ATA-8 | Gardâye | 1852-12-04 → 1882 (öncesi v: tâbi?) | ANOM + TDV mizab |  |
| ATA-11 | Sayda | Ekim 1918 başı İNGİLİZ; Fransız OETA West 23 Ekim (doğrulanmadı) | TDV sayda |  |
| ATA-12 | Trablusşam | 1918-10-13 gün kaynaksız; TDV yalnız 'Ekim 1918' | TDV trablussam |  |
| ATA-14 | Rakka, Deyrizor | 1918 fransa YANLIŞ → İngiliz/suriye-arap-kralligi, Fransa 1921 — günler eksik | TDV rakka, deyrizor (TDV iç çelişki 1920/1921) | yön kesin; günler kaynakla doldurulmalı — YÜKSEK ETKİ |
| ATA-16 | Ba'lebek | 1918 fransa şüpheli (Bekaa OETA East) | bulunamadı |  |
| ATA-18 | Sasari (Sassari) | 1324-01-01 → 1323-07-04 (orta güven) | Soddu; GEC |  |
| ATA-20 | Melîle (Melilla) | merini→ispanya 1497-01-01 → 1497-09-17 | madde:1497-09-17 |  |
| ATB-1 | Erbil, Halepçe | ingiltere f 1917-03-11 → 1918-10-30 (öncesi Osmanlı d:) | TDV kerkuk + iç tutarlılık (Halepçe m:Şehrizor 1918-10-30) | mevcut gün KESİN YANLIŞ; önerilen gün çıkarım (bayrak kuralı dışı). Hazır ops: d t 1917-03-11→1918-10-30, s f aynı |
| ATB-2 | Kifri, Tuz Hurmatu | f ≤ 1918-10-30 — gün bulunamadı |  |  |
| BLD-5 | Mora (Tripoliçe) | yunanistan 1821-03-25 → şehrin düşüş günü (bulunamadı) | TDV tripolice 'Ekim 1822'? |  |
| DOI-1 | Lahsa, Katîf, Cübeyl, Ukayr | safevi 1524-1550 SİL, cebri Osmanlı'ya dek, Osmanlı 1547 | TDV lahsa (1547) | KOŞUL: cebri künyesi t 1524 → uzatılmalı |
| DOI-2 | Kemah | mutahharten 1402-07-28→1410; sonrası ölçülemedi | TDV kemah |  |
| DOI-5 | Gence | celayirli→timurlu 1386 | komşu (atlas) + TDV timur genel | atlas komşusu dayanak değil |
| DOI-6 | Ardahan | akkoyunlu→safevi 1514-09-06 → 1502-01-01 | komşu (atlas) + TDV safeviler |  |
| DOI-12 | Belh | 1514-08-23 kaynak notu 'gün komşudan: Çaldıran' | TDV belh (yıl) | yalnız not; §4 komşu günü şartı (aynı olay) tutuyor mu koordinatör bakar |
| DOI-13 | Zebîd | 1517-07-06 → 1517 (yıl) | TDV zebid |  |
| ITA-3 | İnebahtı | venedik f 1687-08-06 → Temmuz 1687; bitiş 1700/1715 ölçülemedi | TDV inebahti |  |
| KAF-2 | Kars | 1919-04-12 İngiliz işgali + Ermeni idaresi → 1920-10-30 TBMM (devir günü bulunamadı; sade seçenek: tek isg ermenistan) | TDV kars (uçlar günlü) | YÜKSEK ETKİ; seçim koordinatörde. Sarıkamış/Kağızman/Arpaçay/Digor/Iğdır ölçülmedi |
| KAF-3 | Batum, Murvaneti | İngiliz isg 1918-12-24→1920-07-01, GDC, 1921-03-11→28 Türk | TDV batum, acara | Osmanlı'nın 12-01→12-24 uzatılması ve 1921 d:/tbmm seçimi koordinatörde |
| KAF-4 | Ahıska, Ahılkelek | 1918 Osmanlı + 1919-04-13 Gürcü; bir uç ay, gün komşudan | TDV ahiska |  |
| KAF-5 | Tiflis | d t 1606-01-01 → 1603-01-01 | TDV tiflis + gurcistan (yıl) | Zagem v: kaheti-kralligi ve künye 1606'ya bağlı; 1603-01-01 Tebriz'in düşüşünden önce |
| KAF-8 | Sohum | Osmanlı d 1854-05→1856-07-10 · 1877-05-02→1877-08-12 | TDV sohum (başlangıçlar ay/bombardıman) |  |
| KAF-11 | Ahıska, Zazalo, Ts'q'altbila | 1578-08-01 → 1578-08-09 (Çıldır'dan sonra) | TDV ahiska, cildir-eyaleti |  |
| KUZ-1 | Varşova, Kielce, Radom, Częstochowa, Łódź, Lublin, Chełm | 1915-1918 Alman/Avusturya işgali (günler + işgal bölgesi sınırı bulunamadı) | TDV polonya |  |
| KUZ-2 | Kielce, Radom | prusya 1795-1806 → avusturya 1795-10-24→1809-10-14 | iç tutarlılık (Lublin/Chełm) — kaynak okunmadı | MÜKERRER: iki paket aynı şüpheyi yazmış — birleştirildi |
| KUZ-4 | Kaunas, Šiauliai, Narva, Pärnu, Tartu | isg almanya 1915/1918-02-25 → 1918-11 | EBSCO + Britannica [özet] |  |
| KUZ-5 | Tartu, Pärnu, Cēsis | 1621-09-15 → 1625 / 1617 | EBSCO özet + Vikipedi |  |
| KUZ-7 | Bryansk | 1500-08-01 → 1500 ilkbahar | RF Savunma Bak. Ansiklopedisi [özet] |  |
| KUZ-8 | Balasagun | 1862-09-04 karışım (1860-09-04 / 1862-10-24) | bishkek.gov.kg [özet] |  |
| KUZ-10 | Ufa, Narım, Kansk, Yalutorovsk, Albazin, Blagoveşçensk, Verhneudinsk, Ayan, Sretensk, Sayansk ostrogu, Unalaska, Ostrovn | ilk s: yılı kaynak yılına (BRE/Britannica/IES) | KRONO-KUZEY-0929-SIBIRYA-KAYNAK.md — iki ajan, ARAMA ÖZETİ |  |
| KUZ-11 | Yakutsk, Olyokminsk, Ohotsk, Perm, Yekaterinburg, Karkaralı, Kökçetav, Kazakeviçevo | ilk gün → kaynak günü | BRE [özet] | 🔴 Yakutsk 1632-09-25 JÜLYEN diye verilmiş → Gregoryen 1632-10-05; öteki 17-18. yy günleri de takvim beyanı ister |
| KUZ-12 | Srednekolımsk, Balagansk, Bolşeretsk, Üç Aziz Körfezi, Sitka, Nijneudinsk | atlas günü kaynaksız → yıl/ay |  |  |
| MAG-Y4c | Tilimsan, Muaskar (1552 grubu) | 1552 → 1553 | TDV tilimsan (TDV iç çelişkisi 1550/1552/1553) |  |
| MAG-Y4d | Tilimsan | 1830-1833 v: → 1833 abdulkadir → 1842 fransa (yıl) | TDV tilimsan |  |
| MAG-Y4k | Kayrevan, Sfaks, Sûse, Munastır, Mehdiye | 1551 → Osmanlı (Sfaks 1549) | TDV tunus, sefakus — Kayrevan 1586 iç çelişki |  |
| MAG-Y4m | Gât | Osmanlı 1577 → 1875; öncesi sahip belirsiz | TDV libya, fizan | kanem-bornu 1875'e dek mi — ters yön ölçülmeli |
| MAG-Y4o | Sellûm | Kasım 1915 → 1916-03-24 Osmanlı-Senûsî isg | TDV senusi-ahmed-serif (başlangıç ay) |  |
| MAG-Y4rs | Tıtvân kuruluş, Cezayir 1519 grubu | 1484/1483 · 1519-09-01 → Ekim 1519 | TDV titvan, cezayir |  |
| ORA-Y1b | Brno, Olomouc, Breslau, Liegnitz, Oppeln, Gleiwitz, Kattowitz, Jeseník, Glatz | 1526-10-22 savunulabilir ama gün kaynaksız |  |  |
| ORA-Y3 | Brassó, Erdel Belgradı, Segesvár | v→s avusturya 1687-08-12 → 1687-10-27 (garnizon) ya da 1688-05-09 (egemenlik) | Magyar Katolikus Lexikon 'Apafi' | iki gün arasında seçim |
| OSC-1 | Antalya, Elmalı, Finike, Kaş | hamid 1300 → 1312 sonrası (yıl yok) | TDV hamidogullari |  |
| OSC-3 | Adana, Tarsus | kilikya→memluk→ramazanoglu 1378 | TDV adana (Memlûk fethi yılı yok) |  |
| OSC-4 | Bolu | 1461 candar değil; Osmanlı dönüşü Çelebi Mehmed (yıl yok) | TDV bolu |  |
| OSC-5 | Hâil, Dûmetülcendel, Teymâ, Nefud çölü | →sammar 1836 → 1835 | TDV residiler (1835) | KOŞUL: hail-ibn-ali künyesi t 1836 → 1835 birlikte |
| OSC-6 | Seyûn | 1700 temsilî — 'yıl bulunamadı' notu | TDV hadramut |  |
| TUN-4 | Çehrin | 1669-05-01 v: zaporojye → 1676-09-19 rusya | EoU «Doroshenko»; TDV cehrin-seferi | 1669 ↔ 1672 seçimi koordinatörde |
| TUN-6a | Akkirman, Bender, Bolgrad, Hotin, İsmail, Kahul, Kili, Orhei, Soroka | romanya-kralligi 1918-01-01 → 1918-03-27 | EoU «Bessarabia» | takvim: 27 Mart (Jülyen) = 9 Nisan; kronoloji 1918-04-08 diyor — hüküm önce |
| TUN-6b | Erdel (Kaloşvar), Erdel Belgradı, Brassó, Segesvár, Szatmár, Varad, Yanova | romanya-kralligi 1918-11-11 → 1918-12-01 (Gyulafehérvár) | TDV romanya | 🔴 TERS YÖN: 1 Aralık bir BEYAN; Varad/Szatmár'a Romen ordusu Nisan 1919'da girdi — tek gün hepsine taşınmamalı |

## KARAR — soru (Emre/koordinatör); çoğu önce KÜNYE ister

- **AMK-C** (KRONO-AMERIKA-K-0929) 134 yerleşim / 104 grup (nokta doğumu) — yerleşim önerisi DEĞİL: 'nokta doğumu' kovası + denetle.py muafiyeti (paket önerisi b) 
- **ASU-10** (KRONO-ASYA-UZAK-0929) Timor beylikleri (9) — 1769 sonrası 9 yerleşim boş — künye (KUNYE K9) 
- **ATA-19** (KRONO-ATLANTIK-A-0929) Menorka, Perpignan — 1281'den aragon değil Mayorka Krallığı (künye YOK) · önce künye + renk
- **ATB-3** (KRONO-ATLANTIK-B-0929) Amsterdam, Rotterdam, Utrecht, Groningen, Leeuwarden, Middelburg, Nijmegen, Maastricht — 1795-1813 batav-cumhuriyeti + fransa ilhakı · künye batav-cumhuriyeti YOK → önce künye+renk
- **DOI-7** (KRONO-DOGU-ISLAM-0929) Cizre, Cibri — 1508-1515 SAHİPSİZ (7 yıl Değişmez 1 deliği) — safevi mi __BOSLUK__ mu · denetim DELİK diyor ama §1.5 'beklenen sahipsiz' içinde mi — ölçülmeli
- **DOI-9** (KRONO-DOGU-ISLAM-0929) Sârî, Âmül, Bârfurûş, Eşref — 1504 (tâbilik) ↔ 1596 (ilhak) 
- **DOI-10** (KRONO-DOGU-ISLAM-0929) Şuşa — zend 1752 → Karabağ Hanlığı 1748-1750 (künye YOK) 
- **DOI-14** (KRONO-DOGU-ISLAM-0929) Serbedârî Horasan'ı (17) — 1381 ilhak değil tâbilik (1386'ya dek) 
- **ITA-4** (KRONO-ITALYA-0929) Santorini, Sifnos, Kimolos, Koçbaba, Termiye, Murted, Namfi, Folegandros — venedik→naksa-dukaligi; 1566 ↔ 1537-1540 
- **KAF-9** (KRONO-KAFKAS-0929) Batum, Hulo (Acara) — 1479 / 1535 / 1578 
- **KUZ-3** (KRONO-KUZEY-0929) Varşova, Łódź, Częstochowa — 1806-11-28→1807-07-22 hayalet varsova-dukaligi 
- **MAG-Y1** (KRONO-MAGRIB-0929) Cezayir · Tunus · Trablusgarp ocakları — tâbi eşiği 1659/1631 mi 1671/1705 mi — SORU (Emre) 
- **MAG-Y3** (KRONO-MAGRIB-0929) Fas 32 yerleşim — 1912-03-30 isg fransa? İspanyol bölgesi günü TDV'de yok 
- **MAG-Y4n** (KRONO-MAGRIB-0929) Murzuk (Fizan grubu) — 1912 italya değil; Senûsî sahip künyesi 
- **ORA-Y2** (KRONO-ORTA-AVRUPA-0929) Linz, Freistadt, Gmünd, Maribor, Innsbruck, Landeck, Klagenfurt, Feldkirch, Bregenz, Lienz — veraset ülkeleri 1282/1363'ten avusturya mı (TASARIM KARARI) 
- **TUN-5** (KRONO-TUNA-0929) Poltava, Çernigov, Baturin, Kiev, Çehrin — Hetmanlık 1648-1667 ayrı renk mi (SORU); takvim ikiliği 

## KOORDİNAT KAYNAKSIZ — yeni nokta adayları (KRONO-AMERIKA-G)

Paket: *"gerçek noktasızlık artefaktı iddiası YOK — odak adayı"*; koordinat ±0.02°, kaynaksız; `s:` günlerinin çoğu yok. Kara ✓, ≤3 km çift yok.

| id | ad | lat, lon | en yakın (25 km) | s: önerisi |
|---|---|---|---|---|
| AMG-3 | Tacna | -18.01, -70.25 | [] | peru-cumhuriyeti (Şili işgali 1880-1929) |
| AMG-4 | Arica | -18.48, -70.31 | [] | peru-cumhuriyeti (Şili işgali) |
| AMG-5 | Valparaíso | -33.05, -71.61 | [] | sili-cumhuriyeti |
| AMG-6 | Callao | -12.06, -77.12 | [[8.5, 'Lima (Ciudad de los Reyes)']] | ispanyol-peru → 1826-01-23 peru-cumhuriyeti |
| AMG-7 | Ancud | -41.87, -73.83 | [] | paket: Castro (Chiloé) yeterli olabilir |
| AMG-8 | Recife | -8.05, -34.88 | [[5.3, 'Olinda']] | portekiz-brezilyasi / hollanda-brezilyasi 1630-1654 |
| AMG-9 | Villarrica | -39.29, -72.23 | [] | mapuche-araukanya → 1883 sili-cumhuriyeti |
| AMG-10 | San Miguel de Tucumán | -26.81, -65.22 | [] | arjantin-cumhuriyeti |
| AMG-11 | Pisco | -13.71, -76.2 | [] | ispanyol-peru → 1821-07-28 peru-cumhuriyeti |

## RED

| id | yerleşim | niye |
|---|---|---|
| AFR-B1 | Transvaal, Oranj | paketin kendi önerisi (B): dokunma, kırılma beyanlı kalsın  |
| AFR-C1 | İlorin | ölçülemedi: olay yılı yok  |
| AFR-C2 | Bida | ölçülemedi: 1859 bulunamadı  |
| AFR-C3 | Kukava | ölçülemedi: kuruluş yılı yok  |
| AFR-C4 | Antsirabe | ölçülemedi: bulunamadı  |
| AFR-C5 | Büyük Zimbabve | ölçülemedi: yer-özel kaynak yok (kasıtlı beyanlı boşluk)  |
| AFR-C6 | Kilva Kivince · Ujiji · Kasongo · Nyangwe · Karonga | ölçülemedi: iç bölge egemenliği bulunamadı  |
| AFR-C7 | Mankhamba | ölçülemedi: dayanaksız  |
| AFR-D | Nkhotakota | paket: DOKUNMA (yıl doğrulandı)  |
| AMG-1 | Antofagasta | ④ KARA MASKESİ: nokta motor_kara.geojson DIŞINDA (denizde; ±2 km'de de kara yok) — koordinat da kaynaksız · paket: 'gerçek noktasızlık artefaktı iddiası YOK' — odak adayı |
| AMG-2 | Iquique | ④ KARA MASKESİ: nokta motor_kara.geojson DIŞINDA (denizde; ±2 km'de de kara yok) — koordinat da kaynaksız · paket: 'gerçek noktasızlık artefaktı iddiası YOK' — odak adayı |
| AMK-B4 | Los Adaes | 1821-02-22 olay yok; öneri değeri yok, kaynak taranmadı  |
| ASU-7 | Sambalpur | paket: hiçbir şey  |
| ASU-9 | Feyzâbâd | 1657 ölçülemedi  |
| ASU-11 | Brunei 5 · Banjar | paket: yerleşim penceresine dokunma, künye f sorgulansın  |
| ASU-12 | Asîrgarh, Burhânpûr | ölçülemedi · MEVCUT HAYALET: babur-imparatorlugu t 1857-09-21, pencere 1860-01-01'e dek |
| ATA-2 | Vonitsa | paket: gerek yok (±30 içinde)  |
| ATA-9 | Mesîle, Ayn Temûşent, Hanşele, Aynı Beydâ, Cilfe | ölçülemedi  |
| ATA-15 | Malikiye, Arlon | ölçülemedi  |
| BLB-4 | Tuzla, Trebinye, Herseknovi, Kragujevac/Yagodina/Çaçak 1439, Lendava, Murska Sobota | öneri çıkarılamadı (kaynak bulunamadı / zaten kapandı)  |
| BLD-4 | Bozbaba (Ay Strati), Bozcaada | gün bulunamadı · Bozcaada 1912-10-07 savaştan önce — KESİN YANLIŞ ama değer yok |
| BLD-7 | Atina, Bulgaristan üç hâl | paket: öneri gerekmiyor  |
| DOI-4 | Arapkir, Behisni, Hısn-ı Mansûr, Kâhta | ölçülemedi  |
| DOI-8 | Aşkale, Erzurum, Palu, Çemişgezek, Tebbes, Burûcird, Nihâvend, Kelkit, Bistâm, Dâmgan, Simnân, Zencan, Musul çevresi | ölçülemedi · MEVCUT HAYALET borçları: ilhanli (1353) · eretna (1381) · artuklu (1409) · serbedariler (1386) |
| DOI-11 | Ağraham burnu | iran 1281-1501 ANAKRONİK — öneri değeri yok  |
| ITA-2 | Çeşme | ölçülemedi  |
| ITA-5 | Herseknovi, Nikarya, Butrint 1386, Parga, Bodrum, Zadar/Nadin/Vrana, Şibenik, Split/Kotor, Fornoz, Sin, Elafonisos, Dama | kaynak bulunamadı  |
| KAF-10 | Kutaisi, Revan 1751, Revan zend 1747 | gözlem, öneri değil  |
| KUZ-6 | Iğdır, Hopa, Sarp, Pinsk, Rivne | ölçülemedi  |
| KUZ-9 | Taraz, Sayram, Almalık, Horog, Gunt, Rûşan, İşkâşim | ölçülemedi  |
| KUZ-13 | Kurgan, Essey, Kirensk, Volochanka, 19 bulunamadı, 14 zayıf | kaynak bulunamadı / zayıf  |
| MAG-B | Mustaganem, Cicel, Vargla, Sûvayra, Mazagan, Şefşâven, … | bulunamadı  |
| ORA-Y46 | Kassa, Alman sömürgeleri, Sion, Martigny, Brixen, Eisenstadt | öneri yok / kapsam dışı  |
| OSC-7 | Sivrihisar, Çankırı, Masira, Nizva, Salala, Buraydâ…(8), Maan, Medâin-i Sâlih, Tebük, el-Ulâ, el-Vech | ölçülemedi  |
| TUN-7 | Yaş, Bükreş | 1769-1774 isg — gün bulunamadı  |
| TUN-9 | Yergöğü 1450, Silistre, Hotin, İbrail 1538, Lugos, Orsova, Temeşvar | dokunulmasın / ölçülmedi  |

📌 Red'deki "MEVCUT HAYALET" notları (ASU-12 babur-imparatorlugu 1857→1860 · DOI-8 ilhanli/eretna/artuklu/serbedariler) öneri değil, bugünkü veride duran borçtur.

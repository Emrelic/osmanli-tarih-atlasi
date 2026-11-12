# LEHİSTAN DENETİMİ — 11/12 Kasım 2026

**Kapsam:** Polonya zinciri 1281 → bugün (`polonya-erken` → `lehistan` → `varsova-dukaligi` / `krakow-serbest-sehri` →
`kongre-polonyasi` → `polonya-naiplik-kralligi` → `polonya` → `polonya-genel-hukumeti` → `polonya-halk` →
`polonya-iii-cumhuriyet`), Litvanya kolu (`litvanya-buyuk-dukalik`, `orta-litvanya`, `litvanya`) ve bağlı/vassal yapılar
(`kraliyet-prusyasi`, `prusya-dukaligi`, `kurland-dukaligi`, `mazovya-dukaligi`, `danzig-serbest-sehri(-1807)`, `teuton-devleti`,
`galicya-volhinya`, `silezya-piast`).

**Makine / kip:** UMIT (CPU %100). Emre bu oturumda "UMIT'te hafif yap" dedi. Bu yüzden `denetle.py`'nin tamamı, `donemler` çözümü,
üretilmiş harita ölçümü ve push kapısı **koşturulmadı**. Yerleşim kırılmaları `girdi.yukle()` ile okundu. Değişmez 2s, `denetle.degismez2(…, ("s",),
yer_sarti=True)` yalnız zincire değen 82 yerleşime uygulanarak ölçüldü. Ağaç `origin/main` ile eşitti (HEAD 7a3659d54, geride 0).

**Kaynak notu:** Encyklopedia PWN bu oturumda **çekilemedi** ("Serwis Nieaktywny"), Britannica 403 verdi. Polonya tarafında IPN
(ipn.gov.pl, przystanekhistoria.pl) ve Muzeum Historii Polski portalı dzieje.pl kullanıldı. Ayrıca VLE (vle.lt), TDV ve
Encyclopedia of Ukraine (CIUS) kullanıldı. "Doğrulanamadı" yazan yerler ölçülmedi, temiz sayılmaz.

**Kardeş rapor çakışması:** Białystok 1939–45 ve Brest/Grodno/Pinsk 1915–21 bulguları `RUSYA-DENETIM-1917-1945-1111.md`
(H1, H2, H6, K7–K9) ile **aynı kayıtlardır**. Kremençuk 1654 ve Andrusovo bulguları da `RUSYA-DENETIM-1613-1725-1111.md` (madde 7 ve 175. satır civarı) ile aynıdır. Düzeltme tek elden dağıtılmalı.

Sınıflar: TARİH-HATA · TAKVİM · SESSİZ-DEĞİŞİM · EKSİK-MADDE · EKSİK-DEVLET · SINIR · KAYNAKSIZ · ÇELİŞKİ · HAYALET

---

## A. Haritada sahiplik (yerleşim `s:` dönemleri)

**A1 [ÇELİŞKİ · SINIR] PKWN 1944 Temmuz: madde Chełm/Lublin diyor, harita Generalgouvernement gösteriyor.**
- Kayıtlar: `Chełm (Kholm)` p0037:79, `Lublin` p0037:73, `Zamość` p0037:85; künye `polonya-halk` (devletler.js:15810, f=1944-07-22).
- Atlasta: bu üç şehir `polonya-genel-hukumeti` dönemindedir ve `polonya-halk`a ancak 1945-01-17'de geçer. Yani künyenin ilk 6 ayında künyenin kendisi haritada hiçbir yerde görünmez.
- Kaynak: dzieje.pl/node/122924 — Kızıl Ordu "22 lipca zajęły Chełm, a 24 lipca zajęły Lublin". Zamość: Almanlar 25 Temmuz 1944'te çekildi, PKWN 4 Ağustos'ta yönetimi aldı (Akademia Zamojska makalesi, yalnız arama özeti, okunmadı).
- Öneri: Chełm `polonya-halk` 1944-07-22 · Lublin 1944-07-24 · Zamość 1944-07-25. Her biri için ayrı `kronoloji_sinir` maddesi yazılmalı.

**A2 [TARİH-HATA] 1945 Ocak devirleri tek güne (01-17) toplanmış.**
- Atlasta 01-17'de geçenler: `Kattowitz` yerlesimler.js:1269, `Krakov` :1162, `Kielce` :1254, `Radom` :1255, `Częstochowa` :1253 ve `Białystok`.
- Kaynak: dzieje.pl/kalendarz-dat/1945 — "18.01 Armia Czerwona zajęła Kraków"; "27.01 Armia Czerwona zajęła Katowice".
- Öneri: Krakov 1945-01-18, Kattowitz 1945-01-27. Kielce (01-15), Radom (01-16) ve Częstochowa (01-17) günleri bu turda kaynakla okunmadı; yine de ayrı ayrı doğrulanmalı. Varşova 01-17 ve Łódź 01-19 doğru.

**A3 [HAYALET · SINIR] Lviv ve Yazlofça 1918-11-12 → 1919-09-10: Habsburg künyesi ölmüş, şehir hâlâ ona boyalı.**
- Kayıtlar: `Lvov` yerlesimler.js:1166 ve `Yazlofça` :1593 1919-09-10'a kadar `s:avusturya`dadır. Ardından 1923-03-15'e kadar `itilaf-emaneti`ne geçer (Lviv'de ayrıca `isg: polonya` 1918-11-22).
- Habsburg künyesi (`harita:"avusturya"`) t=1918-11-12. Aynı hatta Haliç ve Bucaş 1918-11-12'de `bati-ukrayna-halk-cumhuriyeti`ne geçiyor; yani komşu şehirlerle de tutarsız.
- Kaynak: Encyclopedia of Ukraine 'Lviv' — "On 21 November the Poles captured Lviv" (Leh literatüründe 22 Kasım). Encyclopedia of Ukraine 'Conference of Ambassadors' — "On 15 March 1923 the conference approved Poland's annexation of Galicia".
- Seçenek (siyasî hassas, Emre seçer):
  - (a) Fiilî: Lviv 1918-11-01'den 1918-11-22'ye ZUNR, ardından `polonya`. Yazlofça Temmuz 1919'a kadar ZUNR, ardından `polonya`.
  - (b) Hukukî: 1918-11-12'den 1923-03-15'e kadar `itilaf-emaneti` + beyan (künyenin f 1919-09-10'u o zaman geriye çekilmeli).
  - Her iki seçenekte de `avusturya` 1918-11-12'de bitmeli.

**A4 [TARİH-HATA] Białystok zinciri** (`Białystok` p0037:91). RUSYA-1917-1945 H2/H6/K7–K9 ile aynı kayıt.

| Atlas | Kaynak | Öneri |
|---|---|---|
| 1917-11-07 → 1918-11-11 `sovyet-rusya`, sonra `polonya` | Şehir 1915-08 → 1919-02 Alman işgalindeydi | 1915-08 → 1919-02-19 `almanya` (gün okunmadı) |
| 1939-09-01 → `sovyet-rusya` | IPN (przystanekhistoria.pl/pa2/teksty/34969) — "22 września 1939 roku" devir; Almanlar birkaç gün önce girdi | Almanlar kısa süre (Eylül ortası, gün okunmadı), 1939-09-22 `sovyet-rusya` |
| 1941-06-01 → `almanya` | 27 Haziran 1941 (gün yalnız arama özetinde; USHMM ay veriyor) | 1941-06-27 [gün teyitsiz] |
| 1944-07-01 → `sovyet-rusya` | IPN (Autuchiewicz) — "27 lipca 1944 r. sowieckie oddziały zajęły Białystok" | 1944-07-27 |
| 1945-01-17 → `polonya-halk` | Ağustos 1944'te PKWN idaresi (aday 1944-08-21/28; okunmadı) | 1944-08 [gün teyitsiz]; tek gün bulununca yazılmalı |

- `kronoloji_sinir_lehistan_ukrayna_1028.js`teki üç madde (1939-09-01, 1941-06-01, 1944-07-01) aynı yanlış günlerle duruyor. Ay-başı yer tutucusu kullanılmış; bu, CLAUDE.md'deki `"1526-08"` kuralının ihlalidir.

**A5 [SINIR] Doğu sınırı 1915–1921 tutarsız (yerlesimler_p0037.js).**
- Atlasta: `Brest-Litovsk` :97, `Grodno` :107, `Pinsk` :102, `Kovel` :112 ve `Rivne` :127, 1917-11-07 → 1921-03-18 kesintisiz `sovyet-rusya`.
- Oysa: 1915–1918/19 Alman işgali vardı (Brest-Litovsk antlaşması Alman karargâhında imzalandı). 1919'da Polonya bu şehirleri aldı; 1920 yazında Sovyetler geri aldı; Eylül 1920'de Polonya yeniden aldı.
- Aynı dosyada `Lutsk` 1919-05-01, `Volodymyr-Volynskyi` 1919-01-01 ve `Vilnius` 1919-04-19'da `polonya`ya geçiyor. Yani **fiilî** ölçüt bir şehirde, **Riga (hukukî)** ölçütü komşusunda kullanılmış.
- Öneri: tek ölçüt seçilmeli. Fiilî seçilirse 1919 Polonya alımları ve 1920 Temmuz–Eylül Sovyet arası yazılmalı. Hukukî seçilirse Lutsk ve Volodymyr de 1921-03-18'e çekilmeli. (RUSYA H1 ile birlikte.)
- `Volodymyr-Volynskyi` 1919-01-01 gününün kaynağı yok. Değişmez 2s bunu açık bırakıyor: ±30 günde bu yeri anan madde yok (`Lutsk` 1919-05-01 maddesi kapsamıyor).

**A6 [TARİH-HATA] Katowice 1922.**
- Atlasta: `Kattowitz` yerlesimler.js:1269, `polonya` f=1922-06-03.
- Kaynak: IPN — "Wojsko Polskie uroczyście wkroczyło 20 czerwca 1922 r. do Katowic" (ipn.gov.pl/pl/historia-z-ipn/220362). Atlasın kendi maddesi de 1922-06-20 (kronoloji_cok_lehistan.js).
- Öneri: 1922-06-20.

**A7 [TARİH-HATA] Łódź 1939.**
- Atlasta: `Łódź` 1939-10-06 → `almanya`.
- Kaynak: dzieje.pl/node/161265 — "9 listopada Łódź została oficjalnie wcielona do III Rzeszy"; Ekim 1939'da Generalgouvernement'a bağlanması yalnız seçenek olarak düşünüldü.
- Ek not: Poznań ve Toruń'un Reich'a katılması 8 Ekim 1939 kararnamesiyle 26 Ekim'de yürürlüğe girdi (bu turda kaynakla okunmadı). 1939-10-06 Polonya künyesinin bitişi, ilhak günü değil.
- Öneri: Łódź 1939-10-06 → 1939-11-09 askerî işgal (`almanya` isg ya da GG), 1939-11-09'dan `almanya`. Poznań ve Toruń için 1939-10-26 değerlendirilmeli.

**A8 [SINIR · EKSİK-MADDE] Kızıl Rutenya 1340–1387.**
- Atlasta (`Lvov`, `Haliç` ms1_1281_yeni:136, `Bucaş`, `Yazlofça`): 1340-1349 `litvanya-buyuk-dukalik`, 1349'dan kesintisiz `polonya-erken`. `Chełm` 1340'tan `polonya-erken`.
- Kaynak: Encyclopedia of Ukraine 'Galicia' — Władysław Opolczyk 1372'den, "Hungarian vicegerents from 1378", "The struggle lasted until 1387". 'Kholm region' — "held by Lithuania (1340–77) and Hungary (1377–87)". 'Belz' — "In 1388 it was captured by the Poles".
- Öneri:
  - Lviv, Haliç ve öteki Galiçya şehirleri: 1370'lerden 1387'ye Macar idaresi (`macaristan` künyesi 1527'ye kadar yaşıyor).
  - Chełm: 1340-1377 `litvanya-buyuk-dukalik`, 1377-1387 `macaristan`, 1387'den `polonya-erken`.
  - 1340-1349 Galiçya: Dedko boyar yönetimi ve Altın Orda nüfuzu. "Litvanya" tek kaynaklı değil; beyan gerekir.
  - Gün bulunamadı → `1387-01-01` + "[yalnız yıl]".
  - `kronoloji_sinir_lehistan_ukrayna_1028.js`teki 1340 maddesinde yer alan "Chełm Polonya'ya" ifadesi de düzeltilmeli.
  - PWN okunamadığı için Leh kaynağıyla teyit edilmedi.

**A9 [TARİH-HATA] Vilnius 1920** (yerlesimler.js:1285).
- Atlasta: 1920-07-12 `polonya` → `litvanya` (Moskova antlaşmasının imza günü).
- Kaynak: VLE 'Vilniaus klausimas' — "1920 07 14 Sovietų Rusijos kariuomenei išstūmus iš Vilniaus Lenkijos kariuomenę … 08 27 į Vilnių įžengė Lietuvos kariuomenė".
- Öneri: 1920-07-14 `sovyet-rusya`, 1920-08-27 `litvanya`. Mevcut madde (1920-07-12, antlaşma) kalır. Yeni iki madde yazılmalı.

**A10 [TARİH-HATA] Gdańsk 1308** (yerlesimler.js:1280).
- Atlasta: `teuton-devleti` f=1308-01-01; iki madde aynı günde.
- Arama özetleri "12/13 Kasım gecesi" (rzeź Gdańska) veriyor. Akademik sayfa çekilemedi; **gün doğrulanamadı**.
- Öneri: Leh kaynağı (Gedanopedia 'Rzeź Gdańska') okunana kadar 1308-01-01 + beyan kalsın. Okununca 1308-11-13.

**A11 [TARİH-HATA · TAKVİM] Livonya şehirleri.**
- `Tartu` ek11:63: 1582-01-01 → `lehistan`. Atlasın kendi maddesi Jam Zapolski 1582-01-15 (VLE). → **1582-01-15**.
- `Tartu` 1625-01-01 → `isvec`. Arama özetinde "16. 8. 1625" ve "27. aug. 1625" geçiyor (Jülyen/Gregoryen çifti olabilir; okunmadı). → 1625-08-27 (Gregoryen) aday, teyitsiz.
- `Riga` :1278: 1621-09-15 → `isvec`. Gün yalnız Vikipedi'de görüldü. 15 Eylül Jülyen ise Gregoryen karşılığı 25 Eylül; Lehistan Gregoryen kullanıyordu. **TAKVİM** şüphesi var: kaynakla çevrilmeli.
- `Pärnu` ek11:66 ve `Cēsis` ek7:138, Riga ile aynı günde (1621-09-15) İsveç'e geçiyor. Bu şehirlerin İsveç'e geçişi ayrı olaylardır (Pärnu 1617; Livonya'nın hukukî devri Altmark ile 1629-09-26 — VLE "sudaryta 1629 09 26 … Altmarke").
- **SESSİZ-DEĞİŞİM:** Değişmez 2s bu kırılmayı açık buluyor. En yakın madde "Hotin Seferi" ve ilgisiz; Riga'nın 1621 alınışı için madde yok. → **EKSİK-MADDE**.
- `Riga` 1581-01-01 → `lehistan`: Drohiczyn 14 Ocak 1581 yalnız Vikipedi türevlerinde görüldü; doğrulanamadı.

**A12 [SINIR] Kremençuk 1649–1654** (`Kremençuk` ok106:187).
- Atlasta: Zboriv (1649-08-18) sonrasında öteki Hetmanlık şehirleri `kazak-hetmanligi`ne geçiyor, Kremençuk `lehistan`da kalıyor. 1654-01-18'de de doğrudan `rusya`ya gidiyor.
- Öneri: Kremençuk sol yakadadır; Poltava/Lubnı zinciriyle aynı olmalı: 1649-08-18 `kazak-hetmanligi`. (RUSYA-1613-1725 ile aynı bulgu.)

**A13 [HAYALET · SINIR] Silezya ve Pomeranya 1281'de "almanya".**
- `Kattowitz` 1281 → 1526-12-05 `almanya`. Oysa komşu `Gleiwitz` ve `Oppeln` aynı yıllarda `silezya-piast` → `bohemya`dır. Bölge Bytom/Opole Piast dükalığıydı, 1327'den Bohemya tâbiiydi.
- `Stettin` avrupa:434 1281 → 1648 `almanya`. Oysa `pomeranya-dukaligi` künyesi (1121-1637) var ve kullanılmıyor.
- `almanya` künyesi Kutsal Roma'yı da kapsadığı için (f=962) teknik olarak hayalet değil. Yine de komşularla tutarsız boyama var.
- Öneri: Kattowitz 1281-1327 `silezya-piast`, 1327-1526 `bohemya`. Stettin 1281-1637 `pomeranya-dukaligi`, 1637-1648 için kaynak bakılmalı (İsveç işgali).

**A14 [TARİH-HATA · ÇELİŞKİ] 1945 batıya kayma günü.**
- Atlasta: `Breslau` :1264, `Liegnitz`, `Oppeln`, `Gleiwitz`, `Glatz`, `Elbing`, `Stettin` hepsi 1945-06-05'te (Berlin Deklarasyonu; `almanya` künyesinin t'si) `polonya-halk`a geçiyor.
- Bu gün ne fiilî Polonya idaresinin kuruluşudur (Mayıs 1945; Stettin 5 Temmuz 1945) ne hukukî devirdir (Potsdam 1945-08-02).
- Bu turda kaynakla okunmadı. Seçenek Emre'nin: (a) künye ucu olarak 06-05 + beyan, (b) Potsdam 1945-08-02, (c) şehir şehir fiilî gün.
- Hangisi seçilirse seçilsin `kronoloji_sinir`e bir madde gerekir. Bugün 06-05'i anan Polonya maddesi yok.

**A15 [TARİH-HATA] Lviv/Haliç/Bucaş 1941.**
- Atlasta: 1941-06-30 → `polonya-genel-hukumeti`.
- Künye `polonya-genel-hukumeti`nin kendi maddesine göre Galizien Bölgesi GG'ye 1941-08-01'de eklendi.
- Öneri: 1941-06-30 `almanya` (askerî), 1941-08-01 GG. Değişmez 2s Bucaş 1941-06-30'u açık buluyor.

**A16 [SINIR] Karviná (Zaolzie).** `Karviná` 1919-09-10'a kadar `avusturya`: A3 ile aynı hayalet. Polonya'nın 1938-10-08 ilhak günü bu turda okunmadı (Polonya ordusu 2–11 Ekim arasında bölge bölge girdi).

**A17 [EKSİK yerleşim — haritayı dolaylı bozar].**
- Polonya çekirdeğinde 1281 sonrası **nokta yok**: Płock, Gniezno, Malbork, Chełmno (bunların kaydı yalnız 1281 öncesi `bos:"veri-yok"` olarak var), Kalisz, Bydgoszcz, Olsztyn, Rzeszów, Przemyśl, Tarnów, Sandomierz, Koszalin, Słupsk, Zielona Góra.
- Petek motoru bu toprakları en yakın noktaya verir. Kaba hesap (ölçülmedi, motor çıktısı okunmadı): **Przemyśl bölgesi 1945 sonrası Lviv peteğine, yani Ukrayna'ya düşer.** Mazurya'nın doğusu Grodno (Belarus) ile Białystok arasında kalır.
- Öneri: en az Przemyśl, Rzeszów, Olsztyn, Płock, Bydgoszcz, Kalisz, Gniezno yerleşim olarak eklenmeli. Doğrulama HAVVA koşusundan sonra yapılır.

## B. Künyeler ve kronoloji maddeleri

**B1 [TARİH-HATA · KAYNAKSIZ] Krewo/Jagiełło.**
- `polonya-erken` (devletler.js:786) ve `litvanya-buyuk-dukalik` (:805): "1386-01-01 kişisel birlik" maddesi var, kaynağı yok.
- Kaynak: VLE 'Krėvos sutartis' — "sudaryta 1385 08 14". VLE 'Jogaila' — "1386 02 15 pakrikštytas …, 02 18 vedė Jadvygą ir 03 04 karūnuotas".
- Atlasın kendi `kronoloji_cok_lehistan.js`inde 1385-08-14 ve 1386-03-04 maddeleri var.
- Öneri: 1386-02-18 (evlilik) + VLE kaynağı.
- Not: Vaftiz günü iki VLE maddesinde farklı (14 / 15 Şubat). Vaftiz yazılacaksa beyan edilmeli.

**B2 [TARİH-HATA] Naiplik Konseyi** (`polonya-naiplik-kralligi` :2980). Atlasta madde 1917-10-01 ("gün kaynaklanmadı").
- IPN (Suleja, ipn.gov.pl/pl/historia-z-ipn/153508): kuruluş patenti 12 Eylül 1917; yemin "27 października 1917 r.".
- dzieje.pl/node/10807: atama 15 Ekim 1917.
- Öneri: madde 1917-10-27 (göreve başlama).

**B3 [TARİH-HATA] Krakov Serbest Şehri sonu** (`krakow-serbest-sehri` :10081). Atlasta t=1846-11-11 (Hertslet No. 202 — imparator ilanı) ve 1846-03-04 maddesi.
- dzieje.pl/kalendarz-dat/1846: "3 marca … do miasta wkroczyły oddziały austriackie"; "16 listopada … zaanektowane przez Austrię".
- Hertslet'in 11 Kasım'ı ilanın imza günüyse 16 Kasım yürürlüktür. İkisi bir arada beyan edilmeli. 11 Kasım patenti bu turda okunmadı.
- Öneri: t ve kırılma 1846-11-16. Ya da 11 Kasım kalır + `ic_not` iki günle. Madde 1846-03-04 → **1846-03-03**.

**B4 [ÇELİŞKİ — TDV esas] Zuravno.** Atlasta `kronoloji_lehistan.js` 1676-10-27, kaynak `polonya`.
- TDV 'Polonya' "27 Ekim 1676 … Zuravno (İzvança) Antlaşması" der. Yaygın Batı/Leh günü 17 Ekim 1676; bu gün yalnız Vikipedi ve arama özetinde görüldü, PWN okunamadı.
- 1676'da Lehistan Gregoryen kullanıyordu; on günlük fark takvimle açıklanmaz.
- Öneri: TDV kuralı gereği 1676-10-27 kalsın + `ic_not`: "Leh/Batı kaynakları 17 Ekim 1676 verir (PWN teyidi bekliyor)".

**B5 [TAKVİM · ÇELİŞKİ] Andrusovo — aynı olay iki günle.**
- `kronoloji_lehistan.js` 1667-01-30. `kronoloji_sinir_lehistan_ukrayna_1028.js` ve harita kırılmaları (Bila Tserkva, Uman, Vinnitsa…) 1667-02-09.
- Britannica (yalnız arama özeti): "Jan. 30 [Feb. 9, New Style], 1667". Encyclopedia of Ukraine: "13 January 1667".
- RUSYA-1613-1725 madde 7: yeni BRE "20(30).1.1667" diyor ve 30 Ocak'ın Gregoryen olduğunu düşünüyor.
- İki kardeş rapor çelişiyor; Emre/koordinatör tek gün seçmeli. Seçilen gün madde ile kırılmada **birlikte** taşınmalı.

**B6 [ÇELİŞKİ] Aynı olay iki dosyada farklı günle.**

| Olay | Dosya A | Dosya B | Öneri |
|---|---|---|---|
| Ocak Ayaklanması | cok_lehistan 1863-01-01 | `kongre-polonyasi` 1863-01-22 | 1863-01-22 |
| Prusya biatı | cok_lehistan 1525-01-01 | `prusya-dukaligi` 1525-04-10 | 1525-04-10 |
| Kalisz Barışı | cok_lehistan 1343-01-01 | `teuton-devleti` 1343-07-08 | 1343-07-08 (Treccani/Wikipedia; Leh kaynağıyla teyit edilmeli) |
| Varşova Düklüğü | cok_lehistan 1807-07-07 (Fransa-Rusya Tilsit) | künye/harita 1807-07-09 (Fransa-Prusya Tilsit) | Düklüğü kuran Prusya antlaşmasıdır → 07-09 |
| Prusya katılma fermanı | cok_lehistan 1454-01-01 | `prusya` vb. | 1454-03-06 (Kraków inkorporasyon aktı; Leh kaynağıyla okunmadı) |
| Mazovya katılımı | `mazovya-dukaligi` madde 1526-01-01 | künye t ve harita 1526-03-10 | 1526-03-10 |
| Kraliyet Prusyası I. Bölüşüm | madde 1772-01-01 | künye t 1772-09-13; harita (Elbing) 1772-08-05 | Üç gün var; madde ile kırılma birleştirilmeli |

**B7 [TARİH-HATA · yer tutucu] Gün bilinen olaylar 01-01'de duruyor.**
- Hepsi standart ve tek günlü olaylar, ama bu turda kaynakla teyit edilmedi; teyit kampanyasına alınmalı:
  - `kronoloji_lehistan.js`: II. Jan Kazimierz seçimi 1648-01-01 (20 Kasım 1648; Hmelnitski maddesinden **önce** dizildiği için yanıltıcı) · Jasna Góra 1655-01-01 (savunma 18 Kasım – 27 Aralık 1655) · III. Zygmunt seçimi 1587-01-01 (19 Ağustos 1587) · Kutsal İttifak 1684-01-01 (5 Mart 1684) · II. August'un taç giymesi 1697-01-01 (15 Eylül 1697).
  - `kronoloji_cok_lehistan.js`: Koszyce 1374 · Horodło 1413 · Melno 1422 · Jedlnia 1430 · Nihil novi 1505 · Orsza 1514 · Ebedî barış 1533.

**B8 [KAYNAKSIZ] Künye kronolojisinde kaynak alanı boş: 133 maddenin 32'si.**
- `lehistan` (:816): 12 maddenin 11'i (1569, 1573, 1620, 1672, 1683, 1699, 1764, 1772, 1791, 1793, 1795).
- `litvanya-buyuk-dukalik`: 4/4. `litvanya` (:5077): 4/4. `polonya` (:5024): 4/7 (1918, 1919, 1920, 1921). `polonya-erken`: 3/12. `varsova-dukaligi` ve `kongre-polonyasi`: 3'er.
- `el-kitabi` damgası (kaynak_guven Y kademesi, eser adı yok): `kronoloji_lehistan.js`te 12, `kronoloji_cok_lehistan.js`te 4 madde.
- Yalnız Vikipedi'ye dayanan madde: 6 (`prusya-dukaligi` 4, `mazovya-dukaligi` 1, `polonya-genel-hukumeti` 1).

**B9 [TARİH-HATA] Ufak gün sorunları.**
- `lehistan` 1620-09-01 "Hotin/Ţuţora savaşları başladı": Cecora muharebesi 1620-09-17'den 10-07'ye sürdü; atlasın kendi kronoloji_lehistan maddesi 1620-10-07. Madde ya kaldırılmalı ya da 09-17'ye alınmalı.
- `kurland-dukaligi`: Biron'un seçimi 1737-01-01 (kaynak "Ferdinand'ın ölümünden yaklaşık bir ay sonra", ölüm 1737-05-04 → Haziran 1737). Ay biliniyor; madde Ferdinand'ın ölümünden **önce** diziliyor. Peter Biron 1769-01-01 (Kasım 1769; okunmadı).
- `polonya-genel-hukumeti` f=1939-10-06: Hitler kararnamesi 12 Ekim, yürürlük 26 Ekim 1939. Künye boşluk kapatmak için öne çekilmiş ve beyanlı. RUSYA D20 ile aynı bulgu; kabul edilebilir.

**B10 [EKSİK-DEVLET / bağ] Vassallık ilişkileri haritada ve künyede yok.**
- `prusya-dukaligi` (:10093) 1525-04-08 → 1657-09-19 Polonya tâbiidir (Wehlau maddesi var). Künyede `tabi:` alanı yok.
- `kurland-dukaligi` (:17301) 1561-11-28 → 1795 Litvanya, sonra Rzeczpospolita vassalıdır; `tabi:` yok.
- Öneri:
  - `prusya-dukaligi`: `tabi:[{f:"1525-04-08", t:"1569-07-01", ust:"polonya-erken"}, {f:"1569-07-01", t:"1657-09-19", ust:"lehistan"}]`
  - `kurland-dukaligi`: `tabi:[{f:"1561-11-28", t:"1569-07-01", ust:"litvanya-buyuk-dukalik"}, {f:"1569-07-01", t:"1795-03-28", ust:"lehistan"}]`

**B11 [EKSİK — haritası olmayan künyeler].**
- `kraliyet-prusyasi` (:17280) ve `polonya-naiplik-kralligi` hiçbir yerleşimde `s:` sahibi değil. Gdańsk, Toruń ve Elbing 1466-1772'de doğrudan `polonya-erken`/`lehistan`dır. Varşova 1915-1918'de `almanya`dır.
- Tasarım tercihi olabilir; ancak künye var, harita göstermiyor. Emre karar vermeli.
- `kongre-polonyasi` t=1915-08-05 ile `polonya-naiplik-kralligi` f=1916-11-05 arasında 15 ay boyunca Polonya künyesi yok. Bu tarihsel olarak doğru (Alman ve Avusturya işgal genel valilikleri), beyan edilmeli.

**B12 [ÇELİŞKİ] `litvanya-buyuk-dukalik` künyesi f=1236.** `yer_yama_litvanya.js` başlığı künyeyi "1253-07-06" diye anıyor (Mindaugas'ın taç giymesi). Yama yorumu güncel değil; veri değil, yalnız yorum.

## C. Değişmez 2s (sessiz toprak değişimi)

Zincire değen 82 yerleşimde 417 kırılma satırı var. 2s açık olan kırılma günü 21; bunların **11'inde bir taraf zincirden**.

| Gün | Yer(ler) | Durum |
|---|---|---|
| 1320-01-01 | Jitomir → Litvanya | Madde yok (en yakın: ilgisiz "Orhan Bey") |
| 1400-01-01 | Braslav ilk anılış | Madde yok |
| 1441-01-01 | Hacıbey → Litvanya | Eşleşen madde Kırım Hanlığı'nın kuruluşu; yer anılmıyor |
| 1545-01-01 | Berdiçev ilk anılış | Madde yok |
| 1571-01-01 | Kostantinov | Madde yalnız Kremençuk'u anıyor |
| 1621-09-15 | Riga, Pärnu, Cēsis → İsveç | **Madde yok** (A11) |
| 1699-01-26 | Uman, Vinnitsa | Karlofça maddesi var ama yeri anmıyor; Sağ Yaka şehir adları eklenmeli |
| 1919-01-01 | Volodymyr-Volynskyi | Kaynaksız gün (A5) |
| 1941-06-30 | Bucaş | A15 |
| 1000 / 1004 | Krakov, Liegnitz… | 1281 öncesi; kapsam dışı |

Kırılmaların geri kalanı (bölüşümler 1772/1793/1795, 1807/1809/1815, Toruń 1466, Lublin 1569, Deulino 1618-12-11, Smolensk 1611-06-13/1654-10-03, Zboriv 1649-08-18, Kamaniçe 1672-08-27/1699-09-22, Çehrin 1678-08-21, Kraków 1815-05-03, Danzig 1807/1814/1920/1939, 1918-11-11, Toruń 1920-01-18, Orta Litvanya 1920-10-12/1922-03-24, 1939-09-17/22, Gdańsk 1945-03-30, Poznań 1945-02-23) ±30 günde maddeli. Günleri de bilinen kaynaklarla uyumlu.

## D. Kontrol edilip doğru bulunanlar (örnek)

- Krakov taç giymeleri: 1320-01-20 (Łokietek), 1333-04-25.
- Antlaşmalar: Trentschin 1335-08-24 · II. Toruń 1466-10-19 · Krakov Barışı 1525-04-08 · Lublin 1569-07-01 · Wehlau 1657-09-19 · Oliva 1660-05-03 · Bucaş 1672-10-18 · Karlofça 1699-01-26.
- Kamaniçe'nin iadesi 1699-09-22. Kurland Pacta Subjectionis 1561-11-28.
- Bölüşümler: 1772-08-05, 1793-01-23, 1795-10-24.
- Tilsit 1807-07-09, Schönbrunn 1809-10-14, Viyana 1815-06-09.
- Danzig 1920-11-15 ve 1939-09-01. Riga 1921-03-18. Toruń 1920-01-18.
- Orta Litvanya 1920-10-12 → 1922-03-24.
- Litvanya'ya Vilnius devri 1939-10-28. Lviv 1939-09-22 ve 1944-07-27.
- PRL 1944-07-22 → 1989-12-31 (Dz.U. 1989 nr 75 poz. 444).
- III. Cumhuriyet maddeleri: 1990-12-22, 1997-04-02, 1999-03-12, 2004-05-01.

## Sayılar

- **Künye:** 19 zincir künyesi + 4 komşu künye (teuton, galicya-volhinya, silezya-piast, pomeranya) denetlendi. Komşu ömürleri 20 künyede ölçüldü (hayalet: Habsburg 1918-11-12 sonrası, A3/A16).
- **Madde:** künye kronolojisinde 133; `kronoloji_cok_lehistan.js` 69 · `kronoloji_lehistan.js` 78 · `kronoloji_sinir_lehistan_ukrayna_1028.js` 85 · `kronoloji_sinir_polonya_1915.js` 15. Toplam **380 madde** tarandı; ~120'si gün düzeyinde karşılaştırıldı.
- **Yerleşim:** zincire değen **82 yerleşim**, **417 kırılma**. 30 yerleşimin tam zinciri ayrıca okundu.
- **Bulgu:** A1–A17 + B1–B12 = **29 bulgu başlığı**. Bunlar ~70 yerleşim dönemine ve ~45 maddeye dokunuyor. 2s açık: zincir tarafında 11 gün.
- **Ölçülemeyen:**
  - `denetle.py`'nin tamamı ve Değişmez 1, 3 ve 8 (hafif kip, UMIT).
  - Üretilmiş harita: A17'deki petek emilmesi yalnız hesap, ölçüm değil.
  - Encyklopedia PWN (servis kapalı) ve Britannica (403): Leh ulusal ansiklopedisinden **hiçbir** gün teyit edilmedi.
  - Kwartalnik Historyczny, PSB ve Volumina Legum açılmadı.
- **Doğrulanamayan günler:** Gdańsk 1308 · Białystok 1941-06-27 ve PKWN devri · Zamość'a Kızıl Ordu girişi · Riga 1581/1621 · Tartu 1625 · Andrusovo'nun Leh günü · Zuravno 17 Ekim · Kraków 11 Kasım patenti · Kızıl Rutenya 1387 günü · 1945 batı şehirleri.

## Emre'ye seçenekler (taraf tutulmadı)

1. **Doğu Galiçya 1918–1923 (A3):** fiilî (ZUNR, sonra Polonya) mı, hukukî (İtilaf emaneti 1918-11-12'den) mi?
2. **Doğu sınırı 1919–1921 (A5):** fiilî ölçüt mü, Riga (1921-03-18) ölçütü mü? Bugün ikisi karışık kullanılıyor.
3. **1945 batı toprakları (A14):** 06-05 künye ucu mu, Potsdam 08-02 mi, şehir şehir fiilî gün mü?
4. **Andrusovo (B5):** 30 Ocak mı, 9 Şubat mı? Rusya raporuyla tek karar verilmeli.

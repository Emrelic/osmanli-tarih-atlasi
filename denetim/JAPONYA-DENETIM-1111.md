# JAPONYA DENETİMİ — 11/12 Kasım 2026

**Kapsam:** Japonya künye zinciri 1281–bugün (Kamakura → Kenmu → Muromachi [+ Güney Saray] →
Azuchi-Momoyama → Edo → Meiji → Japonya Devleti) ve bağlı/komşu yapılar (Ryukyu zinciri, Ezo
Cumhuriyeti, Japon Kore'si, Japon Tayvanı, Mançukuo, Ryukyu ABD idaresi, Güney Denizler,
Sahalin-Kuril, 1937–45 işgalleri).
**Makine / kip:** UMIT, HAFİF KİP (yönetici oturum mesajı, Emre onaylı): `denetle*.py`,
`paketle`, `push_kapisi` KOŞTURULMADI. Değişmez 2 yalnız kaba eşdeğerle ölçüldü (aşağıda §7).
**Taban:** dal `claude/optimistic-einstein-dd5f80`, `7a3659d54` (origin/main ile aynı başlangıç).
**Veri dosyalarına dokunulmadı.** Bu dosya yalnız bulgu ve önerilen değerdir.

Güven etiketi: **[O]** sayfa okundu · **[Ö]** arama özeti (sayfa açılmadı) · **[H]** hesap
(NAOJ ay-güneş çevirisi, alt ajan) · **[V]** atlas verisinden ölçüldü.

---

## 0. En önemli 5 bulgu

1. **1937–45 Çin işgali ve Hong Kong / Çinhindi / Guam / Nauru / Gilbert / Rabaul işgalleri
   haritada YOK** [V]. Pekin, Tiencin, Şanghay, Nanking, Wuhan, Kanton, Hong Kong, Hanoi, Saygon,
   Hagåtña, Nauru, Tarawa, Rabaul kayıtlarında ne `s:` ne `isg:` Japon dönemi var; kronolojide
   ise bu olayların maddeleri var (ör. `devletler.js:15484` Hong Kong 1941-12-25,
   `kronoloji_cok_1923_1945.js:2954` 1937-07-07, `:4365` Çinhindi 1940-09-24). Değişmez 2'nin
   **tersi**: madde var, harita değişmiyor. Ayrıca **Mançukuo yalnız tek noktada** (Hsinking,
   `yerlesimler_nokta2.js`); Mukden, Cilin, Harbin, Qiqihar 1932–45 boyunca `cin-cumhuriyeti`
   → Mançukuo haritada bir petek kadar. `nanjing-wang-jingwei` ve `mengjiang` künyelerinin hiç
   yerleşimi yok (haritada görünmeyen künye).
2. **Okinawa (Şuri/Naha) 1945–1972 ABD idaresi haritada yok** [V]: `yerlesimler_asya.js` Şuri
   `1879-03-27→1947-05-03 meiji-japonya ; 1947-05-03→ japonya-devleti`. `ryukyu-abd-idaresi`
   künyesi (f 1945-04-01, t 1972-05-15) yalnız Ishigaki ve Hirara'da (`…halef_1946.js`) kullanılıyor.
   Ana ada ve Amami (yerleşimi yok; 1953-12-25 iadesi künyede madde) Japon görünüyor.
3. **Güney Denizler (Saipan, Pohnpei, Jaluit, Koror) `meiji-japonya` dönemi künye ömrünü aşıyor
   (HAYALET)** [V]: dönemler `→1947-07-18`, `meiji-japonya` t = `1947-05-03` (76 gün aşım).
   Ayrıca 1944–45 ABD fethi (Saipan 1944-07-09) `isg:` olarak yok; giriş günü dört adada da
   `1914-10-01/03` yaklaşık (kaynaklar Jaluit 29 Eyl/3 Eki, Ponape 7 Eki, Palau 8 Eki, Saipan
   14 Eki 1914 verir) ve 1920-12-17 C-tipi manda maddesi yok.
4. **Güney Saray (Nanbokuchō) ve Muromachi uçlarında takvim/yıl-temsili hataları** — §1:
   `guney-saray-nanbokucho` f `1336-01-01` (Go-Daigo'nun Yoshino'ya kaçışı Kenmu 3/Engen 1,
   12. ay 21 = Batı takviminde 1337 Ocak'ına düşer), t `1392-01-01` (birleşme Meitoku 3 ara-10.
   ay 5; aynı olay `kronoloji_japonya.js:99`da `1392-11-19`) → **aynı olay iki yerde iki gün**.
   Muromachi kronolojisinde 1338/1368/1449/1477 maddeleri yıl-temsili.
5. **Kuril, Sahalin, Ryukyu-Satsuma, Ezo (Ainu toprağı), Tayvan 1895, Kwantung, Sibirya**
   sınır/kronoloji eksikleri — §3–§5: Satsuma vassallığı (1609–1872) `v:` yok; Hokkaido iç
   kesimi (Ainu yurdu, Ezochi) noktasız olduğu için 1869'dan önce Japon peteğine emiliyor;
   Tayvan'da 1895-04-17→05-23 `meiji-japonya` dönemi kâğıt üstü (fiilî devir 1895-06-02);
   Lüşun'da 1894–95 Japon işgali ve 1945–55 Sovyet üssü yok; Sibirya Müdahalesi (Vladivostok
   1918–22) ve Kuzey Sahalin işgali (1920–25) haritada yok; Kuril/Sahalin 1945 günleri ve
   1946-02-02 Sovyet ilhak kararnamesi maddesi yok (tartışmalı ada — iki taraf §4'te).

---

## 1. Takvim ve gün bulguları (künye + kronoloji)

Yöntem (alt ajan, 12 Kasım 2026): NAOJ 暦計算室 日本の暦日データベース
(`eco.mtk.nao.ac.jp/cgi-bin/koyomi/caldb_en.cgi`, jg=2: 1582-10-15 öncesi Jülyen, sonrası
Gregoryen) ile 31 çeviri; olay günleri kotobank'taki Japonca sözlüklerden okundu (17 madde
[O]; 7 adres 404). 国史大辞典 (JapanKnowledge, abonelik) açılamadı. **[N]** = gün yalnız
geleneksel nengō günüdür, sözlükte teyit edilmedi (yalnız ay ya da yıl okundu).

| # | Kimlik (dosya:satır) | Atlasta | Nengō | Batı günü (NAOJ) | Kaynak | Sınıf | Önerilen |
|---|---|---|---|---|---|---|---|
| C1 | `kronoloji_japonya.js:77` ikinci Moğol istilası | 1281-08-15 | Kōan 4/7/30 gecesi fırtına, 閏7/1 filonun çöküşü | 7/30 = **1281-08-15**, 閏7/1 = **1281-08-16** (Jülyen) | 山川日本史小辞典 「弘安の役」 «閏7月1日元軍はほぼ壊滅» kotobank.jp/word/弘安の役-493954 [O] | TAKVİM (ince) | b "dağıldı" diyor ⇒ `1281-08-16` + ic_not_takvim (7/30 gecesi başlangıç = 08-15). İkisi de savunulabilir; `ic_not_takvim` yok — eklenmeli |
| C2 | `devletler.js:21490` `guney-saray-nanbokucho` f + kuruluş maddesi `:21491` | **1336-01-01** | Engen 1/Kenmu 3, 12/21 (Go-Daigo Yoshino'ya) | **1337-01-23** (Jülyen); 12. ayın tamamı 1337-01-03…01-31 | ニッポニカ 「後醍醐天皇」 «1336年12月吉野に逃れ» kotobank.jp/word/後醍醐天皇-65042 [O, ay]; gün [N] | **TAKVİM — Batı yılı yanlış** | Ay hassasiyetiyle `1337-01-03` + beyan («延元元年12月; 21. gün geleneksel, 国史大辞典 teyidi bekliyor»); teyit gelirse `1337-01-23`. Künye f birlikte; Yoshino yerleşimi yoksa Nara dönemini kontrol et |
| C3 | `devletler.js:21490` t, `:21495` birleşme; `devletler.js:5694` muromachi 1392 maddesi | **1392-01-01** (üç yerde) | Meitoku 3 閏10/5 (神器 devri); 閏10/2 Kyoto'ya dönüş | 閏10/5 = **1392-11-19**, 閏10/2 = 1392-11-16 | 山川 「後亀山天皇」 «同年閏10月入京» [O, ay]; ニッポニカ aynı [O]; gün [N] | **ÇELİŞKİ** (`kronoloji_japonya.js:99` aynı olayı 1392-11-19 yazıyor) · TAKVİM | Üç kayıt da `1392-11-19`, ic_not_takvim «明徳3年閏10月5日 (NAOJ); gün geleneksel» — `kronoloji_japonya.js:99`daki `[gün teyitsiz]` notu da bu çeviriyle güncellenir |
| C4 | `devletler.js:21492` Go-Daigo ölümü / Go-Murakami | 1339-01-01 | Engen 4/Ryakuō 2, 8/16 | **1339-09-19** | 日本人名大辞典+Plus; ブリタニカ «[没]延元4＝暦応2(1339).8.16» [O, çift sözlük] | TAKVİM | `1339-09-19` (çift teyit) |
| C5 | `devletler.js:21493` Chōkei | 1368-01-01 | Shōhei 23/3/11 | **1368-03-29** | 山川 「長慶天皇」 başlık «在位1368.3.11～» [O, tek sözlük]; 世界大百科 «3月…践祚» [O, ay] | TAKVİM | `1368-03-29` + «tek sözlük» beyanı |
| C6 | `devletler.js:21494` Go-Kameyama | 1383-01-01 | Kōwa 3 «頃» | gün bilinmiyor | 山川 «1383年頃に践祚» [O] | (doğru) | Kalsın: yalnız yıl; `[yalnız yıl teyitli]` notu eklensin |
| C7 | `devletler.js:5691` Takauji şogun | 1338-01-01 | Kenmu 5/Engen 3, 8/11 (Ryakuō 8/28'de başlar) | **1338-09-24** | 精選版 «建武五年（一三三八）八月征夷大将軍» kotobank.jp/word/足利尊氏-14539 [O, ay]; gün [N] | TAKVİM | Ay hassasiyeti `1338-09-14` (8/1) + beyan; gün teyidiyle 09-24 |
| C8 | `devletler.js:5692` Yoshimitsu şogun | 1368-01-01 | Ōan 1/12/30 | **1369-02-07** — 12. ayın tamamı 1369'a düşer | 世界大百科 «1368年(正平23∥応安1)征夷大将軍» [O, yıl] | **TAKVİM — "1368" nengō yılı, Batı yılı 1369** | `1369-01-09` (ayın 1'i) + beyan ya da gün teyidiyle 1369-02-07. Madde metnindeki «1368/1369 ayrışır» açıklaması bu çeviriyle çözülür |
| C9 | `devletler.js:5696` Yoshimasa şogun | 1449-01-01 | Bun'an 6 (Hōtoku 7/28'de başlar), 4/29 | **1449-05-21** | ニッポニカ 「足利義政」 «4月29日征夷大将軍を宣下» [O] | TAKVİM | `1449-05-21` |
| C10 | `devletler.js:5698` Ōnin sonu | 1477-01-01 | Bunmei 9/11/11 | **1477-12-16** (11. ay 12-06…1478-01-04) | ブリタニカ «同9年11月，…陣を解く»; ニッポニカ [O, ay]; gün [N] | TAKVİM | `1477-12-06` + beyan; gün teyidiyle 12-16 |
| C11 | `devletler.js:5697` Ōnin başlangıcı (muromachi kronolojisi) | **1467-01-01** | Ōnin 1/5/26 | 1467-06-27 | `kronoloji_japonya.js:114` zaten 1467-06-27 (ic_not_takvim'li) | **ÇELİŞKİ** (aynı olay iki günle) | Künye maddesi `1467-06-27` |
| C12 | `devletler.js:5682`, `kronoloji_japonya.js:87` Kamakura'nın düşüşü | 1333-07-04 | Genkō 3/Shōkei 2, 5/22 | **1333-07-04** | ニッポニカ 「北条高時」; 日本人名大辞典+Plus [O, çift] | doğru | Yalnız `ic_not_takvim` eklensin ("çift teyit") |
| C13 | `kronoloji_japonya.js:82` Einin Tokusei | 1297-01-01 | Einin 5/3/6 | 1297-03-30 (3. ay 03-25'ten) | 山川, ニッポニカ, ブリタニカ «1297年(永仁5)3月» [O, ay]; gün [N] | TAKVİM | `1297-03-25` + beyan |
| C14 | `kronoloji_japonya.js:218` Dejima | 1641-06-25 | Kan'ei 18/5/17 | **1641-06-25** | 長崎市 «1641年6月25日（寛永18年5月17日）» (Le Maire günlüğüne dayanır) city.nagasaki.lg.jp/nagazine/dejima/1107_dejima1 [O] | doğru · KAYNAKSIZ | `kaynak:` olarak Nagasaki şehri sayfası + ic_not_takvim |
| C15 | Kunashiri, Etorofu `s:` (`yerlesimler_asya.js`) | 1799-01-01 | Kansei 11/1/16 東蝦夷地仮上知 | 1799-02-20 (Kansei 11 = 1799-02-05'ten başlar) | ブリタニカ 「松前藩」 «寛政11 (99) 年…東蝦夷地…仮収公»; ニッポニカ [O, yıl]; gün [N] | **TAKVİM — 01-01 bu nengō yılına hiç düşmez** | `1799-02-05` (yıl başı) + beyan; gün teyidiyle 02-20. Kronolojiye madde |
| C16 | `kronoloji_japonya.js:305` Gakusei | 1872-09-05 | ic_not «Meiji 5/8/2 = 1872-09-05» | 8/2 = 1872-09-04 (被仰出書), **8/3 = 1872-09-05** (学制 ilanı) | ブリタニカ «翌3日 (太陽暦9月5日)»; ニッポニカ; 世界大百科 [O, üçlü] | ic_not HATASI (gün doğru) | ic_not_takvim: «学制 Meiji 5/8/3 = 1872-09-05; 被仰出書 8/2 = 09-04» |
| C17 | `ryukyu` (Amami) | madde yok | Keichō 16/9 仕置 (Amami Satsuma'nın doğrudan toprağı) | 1611-10-06…11-04; geleneksel 9/19 = 1611-10-24 [N] | 世界大百科 「琉球征服」 «11年9月…奄美諸島は同氏の直轄地» kotobank.jp/word/琉球征服-1215861 [O, ay] | EKSİK-MADDE | `ryukyu` kronolojisine `1611-10-06` `toprak-kayip` + beyan; Amami noktası (§3-H9) |

**Doğru bulunan (ay-güneş çevrilmiş) günler — `kronoloji_japonya.js` (NAOJ bağımsız hesap, alt ajan
değil; bilinen nengō günlerinden):** 1543-09-23, 1568-10-16, 1571-09-30, 1575-06-29, 1582-06-21
(Tenshō 10/6/2, Jülyen), 1588-08-29, 1592-05-23, 1597-02-05, 1598-09-18, 1600-10-21,
1603-03-24, 1614-01-28, 1615-06-04, 1635-08-03, 1639-08-04, 1657-03-02, 1689-05-16, 1703-03-20,
1837-03-25, 1853-07-08, 1858-07-29, 1860-03-24, 1866-03-07, 1867-11-09, 1868-01-03, 1868-04-06,
1871-08-29, 1871-12-23, 1872-10-14, 1872-11-04 — **gün doğru, ama yarısında `ic_not_takvim` yok**
(1582-06-21, 1588-08-29, 1592-05-23, 1597-02-05, 1598-09-18, 1600-10-21, 1603-03-24, 1615-06-04,
1657-03-02, 1689-05-16, 1703-03-20, 1853-07-08, 1858-07-29, 1860-03-24, 1866-03-07, 1867-11-09,
1868-01-03, 1868-04-06, 1871-08-29, 1871-12-23, 1872-10-14). [H — bu oturumda NAOJ'a tek tek
sorulmadı; alt ajanın NAOJ sorgularıyla aynı yönteme sokulması önerilir.]
**Kaynak sınıfı:** `kronoloji_japonya.js`'in 61 maddesinin ~45'i "bulunamadı — TDV'de müstakil maddesi
yok, dayanak: Sansom / Totman / Jansen / Beasley" (kitap, sayfa yok); "japonya (TDV)" yazan
maddeler (1333, 1336, 1467, 1600, 1603, 1615, 1639, 1868, 1894, 1895, 1904, 1905, 1910) TDV
«Japonya» maddesinin olayı tarihlediğine dair alıntı taşımıyor (TDV yer-kişi ansiklopedisi;
`denetim/GLM1-TDV-ONBELLEK/japonya.txt` önbelleği var). Kaynak sırasına göre ilk başvuru 国史大辞典
+ kotobank sözlükleri olmalı.

---

## 2. Künye zinciri — uçlar, çelişkiler, kaynaksızlık

| # | Kimlik | Atlasta | Sorun | Sınıf | Önerilen |
|---|---|---|---|---|---|
| K1 | `meiji-japonya` kronoloji `devletler.js:5725` | `tur:"son"` 1945-09-02 | Künye t = 1947-05-03 (ic_not_t "pencere ucu"); "son" maddesi künye ucundan 20 ay önce. Ayrıca madde kaynağı yalnız Wikipedia | ÇELİŞKİ · KAYNAKSIZ | Ya maddeyi `tur:"isgal"` yap ("Müttefik işgali başladı"; kaynak: Instrument of Surrender, NARA/JACAR) ya da künye t'yi 1945-09-02'ye çekip 1945-09-02→1947-05-03 için ayrı "Müttefik işgali altındaki Japonya" (SCAP) künyesi aç. Emre'nin seçimi. |
| K2 | `meiji-japonya` 1946-11-03 maddesi | kaynak history.com | Popüler site, dayanak olamaz. Gün doğru (anayasa ilanı 3 Kasım 1946, yürürlük 3 Mayıs 1947) | KAYNAKSIZ | Kaynak: 国立国会図書館 「日本国憲法の誕生」 (ndl.go.jp/constitution) |
| K3 | `japonya-devleti` 1947-05-03 / 1951-09-08 / 1952-04-28 | history.com, thecollector.com, Senato ifadesi | Popüler site / tek dolaylı kaynak | KAYNAKSIZ | San Francisco Antlaşması metni (外務省 / worldjpn.net "Treaty of Peace with Japan", 1951-09-08; yürürlük 1952-04-28) |
| K4 | `japonya-devleti` kronolojisi | Ogasawara iadesi YOK | Chichijima/Iwo Jima `abd→japonya-devleti` 1968-06-26 kırılmasının Japonya tarafında maddesi yok (başka dosyada ±30 gün içinde bir madde bulunduğu için kaba ölçüm "VAR" dedi; Japonya künyesinde yok) | EKSİK-MADDE | `{t:"1968-06-26", tur:"toprak-kazanc", b:"Ogasawara (Bonin) ve Volkan adaları ABD idaresinden Japonya'ya iade edildi"}` — kaynak: 外務省 / 内閣府 領土・主権展示館 [Ö] |
| K5 | `japonya-devleti` | 1956-10-19, 1965-06-22 Japonya tarafında yok | Sovyet-Japon Ortak Bildirisi (savaş hâlinin sonu; Habomai-Şikotan maddesi) Kuril sorununun ana belgesi | EKSİK-MADDE | 1956-10-19 maddesi (外務省 「日ソ共同宣言」) |
| K6 | `edo-bakufu` kaynak | "bulunamadı — standart akademik kaynak" | Künye kaynak alanı boş; kronoloji maddelerinin hiçbirinde `kaynak:` yok; Sekigahara (1600-10-21 = Keichō 5/9/15) ve kuruluş (1603-03-24 = Keichō 8/2/12) günleri DOĞRU ama `ic_not_takvim` beyanı yok | KAYNAKSIZ | 国史大辞典 「江戸幕府」「関ヶ原の戦」; ic_not_takvim: "Keichō 5/9/15 = Greg. 1600-10-21 (NAOJ)", "Keichō 8/2/12 = Greg. 1603-03-24 (NAOJ)" |
| K7 | `azuchi-momoyama` ↔ `edo-bakufu` | f 1568-10-16, t 1615-06-04 / Edo f 1603-03-24 | Künye ömürleri 12 yıl çakışıyor; yerleşimlerde (Osaka hariç) 1603-03-24'te Edo'ya geçiliyor — tutarlı. Osaka 1615-06-04'e kadar azuchi-momoyama: Toyotomi Osaka'sı için savunulabilir | (bilgi) | Değişiklik önerilmez; ic_not ile beyan yeterli |
| K8 | `muromachi` ↔ `azuchi-momoyama` | Muromachi t 1573-08-15, Azuchi f 1568-10-16 | 1568–1573 çakışma; yerleşimler 1573-08-15'te geçiyor. Nagazaki `1571→1580 azuchi-momoyama` (Ōmura daimyosu toprağı, Nobunaga'nın değil) | SINIR (hafif) | Nagazaki 1571–1573 muromachi (Sengoku daimyosu) |
| K9 | `kamakura` 1192-01-01 maddesi | yıl-temsili | Yoritomo'nun seii taishōgun atanması Kenkyū 3/7/12 = Jülyen 1192-08-21 [H — bu turda NAOJ'a sorulmadı, teyit gerekir]; 1281 öncesi, yalnız zincirin ilk halkası | TAKVİM | 1192-08-21 + ic_not_takvim |
| K10 | `ryukyu` kaynak | "bulunamadı" | Künye kaynaksız; kronolojide Wikipedia çoğunlukta | KAYNAKSIZ | 沖縄大百科事典 / Kerr 1958 / Smits 2019; 1879 için 太政官 琉球処分 (JACAR) |
| K11 | `ryukyu` 1854-07-11 ve 1875-07-10 | "alt ajan: okunmadı", "kotobank özetinden, okunmadı" | Beyanlı ama teyitsiz | KAYNAKSIZ (beyanlı) | Kalsın; teyit kuyruğuna |
| K12 | `ezo-cumhuriyeti` kronoloji `devletler.js:18491` | `t:"1869-01-01"`, b: "Mayıs 1869'da Hakodate Körfezi deniz savaşı" | Metin ile gün çelişiyor; yıl-temsili yanlış güne düşüyor. Hakodate Körfezi deniz savaşı Meiji 2/5/11 = Greg. 1869-06-20 (aynı gün Hijikata'nın ölümü, aynı künyede 1869-06-20 maddesi var) | TARİH-HATA | t `1869-06-20` (ic_not_takvim: Meiji 2/5/11, NAOJ); ya da Miyako Körfezi baskını kastediliyorsa Meiji 2/3/25 = 1869-05-06 |
| K13 | `ezo-cumhuriyeti` 1868-12-18 Matsumae | künye f 1869-01-27'den önce | Madde künye kuruluşundan önce (Matsumae Meiji 1/11/5 = Greg. 1868-12-18 — gün doğru) ama künye f sonra; Hakodate/Goryōkaku zaten Meiji 1/10/26 = 1868-12-09'da Enomoto'nun elinde | ÇELİŞKİ (hafif) | Seçenek: f'yi fiilî kontrol 1868-12-09'a çekmek, ya da madde `taraflar` meiji-japonya kalır. Emre'ye |
| K14 | `japon-kore` künye `harita:"meiji-japonya"` | Kore 1910–45 Japonya rengi | Tutarlı; ancak 1905-11-17 Eulsa himaye antlaşması ve 1907 Kore İmparatorluğu'nun fiilî bağlılığı `v:` olarak yok | EKSİK (v:) | Kore yerleşimlerine `v:[{f:"1905-11-17", t:"1910-08-29", d:"meiji-japonya", himaye:true}]` (kaynak: 한국민족문화대백과사전 «을사조약») |
| K15 | `joseon` 1592-05-23 ve 1897-10-12 | kaynak yok | Gün doğru (Tenshō 20/4/13 = Greg. 1592-05-23; Gojong imparatorluk ilanı 1897-10-12) | KAYNAKSIZ | 조선왕조실록 / 한국민족문화대백과사전 |
| K16 | `japon-tayvani` f 1895-04-17 | imza günü | Egemenlik devri: onay mübadelesi 1895-05-08, fiilî devir 1895-06-02 (Kabayama–Li Jingfang, Keelung açığı, JACAR [Ö]), Taihoku'da yönetim başlangıcı (始政式) 1895-06-17 | ÇELİŞKİ (seçenek) | Künye ic_not zaten beyan ediyor. Yerleşim düzeyinde bkz. §3-T1 |
| K17 | `mancukuo` f 1932-03-09 | Puyi'nin göreve başlaması | Devletin ilanı (建国宣言) 1932-03-01 (中国時報 2016, JACAR sözlüğü 執政 maddesi [Ö]); künye ozeti "ilan günü ölçülemedi" diyor — artık ölçülebilir | TARİH (beyanlı) | f 1932-03-01 ya da 03-09'da kalıp 03-01 maddesi; Hsinking s: f birlikte |

---

## 3. Harita (yerleşim `s:`/`v:`/`isg:`) bulguları

Ölçüm: `girdi.oku_dosya` ile 8 Asya/Okyanusya yerleşim dosyası + 64 adlı yer taraması
(`GIRDI_DOSYALARI`'ndaki bütün yerleşim dosyaları). Japon zincirine giren/çıkan **207 yerleşim**
ve 59 kırılma grubu ölçüldü [V].

### 3a. Japon adaları ve kuzey
| # | Yerleşim | Atlasta | Sorun / kaynak | Sınıf | Önerilen |
|---|---|---|---|---|---|
| H1 | Matsumae, Hakodate (`yerlesimler_asya.js`) | `1550→ muromachi` | Hokkaido'da başka nokta yok (Sapporo 1869'dan). Petek kuralıyla **bütün Ezochi (Ainu yurdu) 1550'den, öncesinde de en yakın Honshu peteğiyle Japon boyanıyor.** Matsumae hanının doğrudan toprağı yalnız güneybatı ucu (和人地); iç ve doğu Ezo Ainu yurdu, Bakufu doğrudan idaresi Doğu Ezo 1799 (寛政11), Batı Ezo 1807 | SINIR | Sahalin'deki emsal gibi `bos:"devletsiz"`/`__BOSLUK__` tanık noktaları (ör. Shiraoi, Akkeshi, Sōya, Shari): 1281→1799 (doğu) / 1807 (batı) boşluk, sonra `edo-bakufu`; kaynak 国史大辞典 「蝦夷地」 |
| H2 | Kunashiri, Etorofu | `1799-01-01 → edo-bakufu` | Yıl-temsili; Doğu Ezo'nun geçici doğrudan idaresi 寛政11年1月16日 (alt ajan §1-10) | TAKVİM | §1 sonucuna göre gün |
| H3 | Paramushir | `1711-01-01→1875-05-07 rusya` | 1711 Kozırevski seferi yasak toplama; kesin egemenlik değil. Şimoda (1855-02-07) Urup ve kuzeyini Rusya'ya bırakır — 1855 öncesi `rusya` beyansız | SINIR (beyan) | 1711→1855-02-07 `__BOSLUK__`/beyanlı yaklaşıklık, 1855-02-07→1875-05-07 `rusya` |
| H4 | Kuril ve Güney Sahalin (Toyohara, Maoka, Shikuka, Ochiai, Shiritoru, Korsakov, kıyı bölgeleri, Kunashiri, Etorofu, Paramushir) | `→1945-09-02 meiji-japonya ; 1945-09-02→ sovyet-rusya` | Sovyet harekâtı: Sahalin 11–25 Ağustos 1945; Şumşu çıkarması 18 Ağustos; Etorofu 28 Ağustos, Kunashiri/Şikotan 1 Eylül, Habomai 3 Eylül, en geç 5 Eylül (内閣府 北方対策本部 2023 broşürü, 外務省 [Ö]); Sovyet ilhakı: SSCB Yüksek Sovyet Prezidyumu kararnamesi 1946-02-02 (Güney Sahalin ve Kurillerde Yujno-Sahalinsk oblastı) [Ö]. **TARTIŞMALI (Güney Kuriller / Kuzey Toprakları):** Japonya hükûmeti dört adanın 1945-08-28/09-05 arasında "yasadışı işgal" edildiğini, egemenliğin Japonya'da olduğunu savunur (外務省 北方領土); Rusya Yalta (1945-02-11) ve 1946-02-02 kararnamesiyle egemenliğin SSCB'ye/Rusya'ya geçtiğini savunur | SINIR · EKSİK-MADDE | Taraf tutmadan iki seçenek: (A) bugünkü gibi `s: sovyet-rusya` + `ic_not` iki tarafın beyanı; (B) Etorofu/Kunashiri/Şikotan/Habomai için 1945-08-28/09-05'ten `isg: sovyet-rusya`, `s:` Japonya (Japon görüşü) — **Emre karar verir.** Her durumda: Sahalin/Kuzey Kuriller için `isg` 1945-08-11/25 → 1946-02-02, `s:` 1946-02-02'den; kronolojiye 1945-08-18, 1945-08-28, 1946-02-02 maddeleri |
| H5 | Chichijima | `1876-01-01 → meiji-japonya` | 1875-11 dört bakanlık heyeti ilan; 1876'da Terajima dışişleri bakanı devletlere bildirdi (国立公文書館 デジタルアーカイブ [Ö]; SPF Island Studies [Ö]); gün yok | TAKVİM (yıl) | Kalsın; beyan `[yalnız yıl teyitli]`; ay (1876-10) kaynakla bulunursa |
| H6 | Iwo Jima | `1891-01-01` | Volkan adaları 1891 ilhakı (内閣府 領土・主権展示館 kronolojisi «硫黄島など(1891)» [Ö]); 9 Eylül 1891 kararnamesi bu turda okunamadı | TAKVİM (yıl) | `1891-09-09` ancak 官報 teyidiyle |
| H7 | Iwo Jima | `1891→1945-09-02 meiji-japonya ; 1945-09-02→1968 abd` | ABD fethi 1945-02-19/03-26; `isg` yok | SINIR (hafif) | `isg:[{f:"1945-03-26", t:"1945-09-02", d:"abd"}]` |
| H8 | Şuri (Naha) | `1879-03-27→1947-05-03 meiji-japonya ; →japonya-devleti` | **1945-04-01→1972-05-15 ABD idaresi yok** (bulgu 2). Ayrıca **1609–1872 Satsuma vassallığı `v:` yok** (Ryukyu 1611 yeminleriyle Satsuma'nın tâbisi; Smits, Cambridge Core [Ö]); 1872-10-16 Ryukyu Hanlığı (Japon iç idaresi) dönemi yok | SINIR · EKSİK (v:) | `s:` 1945-04-01→1972-05-15 `ryukyu-abd-idaresi`; `v:[{f:"1609-05-04", t:"1872-10-16", d:"edo-bakufu"/satsuma}]` (Satsuma künyesi yoksa edo-bakufu); 1872-10-16→1879-03-27 `meiji-japonya` mi `ryukyu` mu — Emre |
| H9 | Amami | yerleşim YOK | Amami 1611'den Satsuma'nın doğrudan toprağı (bugün Kagoshima); 1946-02-02 SCAPIN ile ABD idaresine, 1953-12-25 iade (künyede madde var). Noktasız ⇒ Amami, Okinawa ya da Kyushu peteğine emiliyor | EKSİK (nokta) | Naze (28.38, 129.49) noktası: `→1611 ryukyu` (1447'den), `1611→1868 edo-bakufu`, `→1946-02-02 meiji-japonya`, `→1953-12-25 ryukyu-abd-idaresi`, sonra `japonya-devleti` |
| H10 | Ishigaki, Hirara | `1945-04-01→1972 ryukyu-abd-idaresi` | 1945 öncesi dönemleri yok (yalnız 1945'ten). Sakishima'ya ABD çıkmadı, Eylül 1945'te teslim; 1500 Oyake Akahachi'den Ryukyu, 1879'dan Japonya | EKSİK (dönem) · TARİH | 1500→1879 `ryukyu`, 1879→1945 `meiji-japonya`; ABD idaresi f 1945-09-07 (Ryukyu teslim belgesi, Kadena) ya da 1946-01-29 (SCAPIN-677) — kaynakla |

### 3b. Kore, Tayvan, Kwantung, Çin
| # | Yerleşim | Atlasta | Sorun / kaynak | Sınıf | Önerilen |
|---|---|---|---|---|---|
| T1 | Taipei, Tainan, Kaohsiung, Taichung | `1895-04-17→1895-05-23 meiji-japonya` | 17 Nisan imza; Qing yönetimi ve sonra Formosa Cumhuriyeti sürüyor; fiilî devir 1895-06-02, Taipei'ye giriş 06-07, 始政式 06-17 (JACAR [Ö]). 5 haftalık Japon boyası olmayan bir kontrolü gösteriyor; Tainan/Kaohsiung/Taichung Ekim 1895'e kadar Formosa'da | SINIR | `qing-hanedani` 1895-05-23'e kadar (ya da onay mübadelesi 1895-05-08'e kadar qing, sonra `isg`'siz boşluk yok) — Formosa Cum. 05-23; Japonya Taipei 06-07, güney 10-21 (zaten var) |
| T2 | Penghu | `1895-04-17 → japon-tayvani` | Japonya Peskadorlar'ı 1895-03-23/26'da işgal etti (Şimonoseki'den önce) | EKSİK (isg) | `isg:[{f:"1895-03-26", t:"1895-04-17", d:"meiji-japonya"}]` (kaynak: JACAR 日清戦争 [Ö]) |
| T3 | Tayvan, Penghu | `1945-10-25 → cin-cumhuriyeti` | **TARTIŞMALI statü:** ÇC/ÇHC görüşü: Kahire–Potsdam ve 1945-10-25 Taipei teslimiyle Tayvan Çin'e döndü; ABD/İngiltere ve bir kısım hukukçu görüşü: SF Antlaşması (1951) Japonya'nın feragatini yazar, devralanı belirtmez | (bilgi) | Değişiklik önerilmez; ic_not'a iki görüş |
| T4 | Kore 38. paralel kuzeyi | `1945-08-26 → kuzey-kore-sovyet-idaresi` | Sovyet kuvvetleri Pyongyang'a 24 Ağustos'ta girdi, 26'sında 25. Ordu komutanlığı kuruldu — makul | (ok) | — |
| T5 | Lüşun (Port Arthur) | `1898-03-27 rusya ; 1905-09-05 meiji ; 1945-09-02 cin-cumhuriyeti` | (a) Japonya 1894-11-21'de aldı, Üçlü Müdahale sonrası 1895-11-08 iade sözleşmesi, Aralık 1895 tahliye — `isg` yok; (b) Ocak 1905'te Rus teslimi (1905-01-02) — `isg` yok; (c) 1945-08-22 Sovyet indirmesi, Port Arthur Sovyet deniz üssü 1955-05-26'ya dek (1945 Çin-Sovyet Antlaşması) — `cin-cumhuriyeti` 1945-09-02'den sade gösteriliyor | EKSİK (isg) · SINIR | `isg` 1894-11-21→1895-12; `isg` 1905-01-02→09-05 (meiji); 1945-08-22→1955-05-26 `isg: sovyet-rusya` (ya da `v:`) |
| T6 | Dalian (Dairen) | yerleşim YOK | Kwantung kira bölgesinin asıl şehri; yalnız Lüşun var | EKSİK (nokta) | Dalian (38.91, 121.60): 1898 rusya (Dalny), 1904-05-30 Japon işgali, 1905-09-05 meiji, 1945-08-22 Sovyet, 1950/51 ÇHC |
| T7 | Mukden, Cilin, Harbin, Qiqihar | `1912→1949 cin-cumhuriyeti` | 1931-09-19 (Mukden), 1932-02-05 (Harbin) Japon işgali; 1932-03-01→1945-08-17 Mançukuo — haritada YOK (bulgu 1) | SINIR · EKSİK-DEVLET (haritada) | `isg meiji-japonya` 1931-09-19/1932-02-05 → 1932-03-01, `s: mancukuo` 1932-03-01 → 1945-08-17/19, ardından Sovyet `isg` 1945-08-19 → 1946-05-03 (Sovyet çekilmesi) |
| T8 | Pekin, Tiencin, Şanghay, Nanking, Wuhan, Kanton, Hong Kong | Japon dönemi yok | İşgal günleri (Britannica "Second Sino-Japanese War" / Cambridge History of China c.13 [Ö]): Pekin 1937-08-08 (Japon ordusunun girişi), Tiencin 1937-07-30, Şanghay 1937-11-12, Nanking 1937-12-13, Kanton 1938-10-21, Wuhan 1938-10-25/27, Hong Kong 1941-12-25→1945-08-30 (künye maddesi var: `devletler.js:15484`, `:15485`) | SINIR · EKSİK (isg) | Hepsine `isg:` (d: meiji-japonya; 1940-03-30'dan Nanking/Şanghay/Wuhan için `nanjing-wang-jingwei` `s:` ya da `v:` tartışılır — kukla devlet, Emre). Bitiş 1945-08-15/09-09 (Nanking teslimi 1945-09-09) |
| T9 | Hanoi, Saygon | `fransiz-cinhindi` kesintisiz | Japon girişi Kuzey 1940-09-22/24, Güney 1941-07-28; 1945-03-09 darbesi ve `vietnam-imparatorlugu-1945` künyesi (f 1945-03-01?) haritada yok | SINIR · EKSİK | 1940-09-24/1941-07-28 `v:` ya da `isg` (Vichy egemenliği sürüyor — `v:` daha doğru); 1945-03-09→08-25 `s: vietnam-imparatorlugu-1945` (künye f'si 03-01 değil 03-11 ilan; kontrol) |
| T10 | Hagåtña (Guam) | `1898-06-21→ abd` kesintisiz | Japon işgali 1941-12-10 → ABD geri alışı 1944-08-10 | EKSİK (isg) | `isg:[{f:"1941-12-10", t:"1944-08-10", d:"meiji-japonya"}]` |
| T11 | Nauru, Tarawa, Rabaul (Kokopo) | kesintisiz | Nauru 1942-08-26→1945-09-13; Tarawa 1941-12-10→1943-11-23 (`devletler.js:15669` maddesi var); Rabaul 1942-01-23→1945-09-06 (`kronoloji_cok_1923_1945.js:5303` maddesi var) | EKSİK (isg) | Üçüne `isg` |
| T12 | Qingdao | `1914-11-07→1922-12-10 meiji` | Doğru (Qingdao teslimi 1914-11-07; Şantung iadesi 1922-12-10). 1938-01-10 ikinci Japon işgali (→1945) yok | EKSİK (isg) | `isg 1938-01-10→1945-08-15` |
| T13 | Vladivostok; Kuzey Sahalin (Aleksandrovsk) | Japon dönemi yok | Sibirya Müdahalesi: Japon birlikleri Vladivostok 1918-08-12 → 1922-10-25 (madde `devletler.js:18097` var, harita yok); Kuzey Sahalin işgali 1920-07 → 1925-05-15 (Pekin Sovyet-Japon Temel Sözleşmesi 1925-01-20); Aleksandrovsk noktası bu turda bulunamadı | EKSİK (isg · nokta) | Vladivostok `isg` (çok uluslu müdahale — `isg` d: meiji-japonya ya da beyanlı); Kuzey Sahalin noktası + `isg` |

### 3c. Güneydoğu Asya / Pasifik 1941–45 (genel kural bulgusu)
| # | Kapsam | Atlasta | Sorun | Sınıf | Önerilen |
|---|---|---|---|---|---|
| G1 | 100+ yerleşim (Malaya, Endonezya, Filipinler, Burma, Timor, Borneo) | `s: meiji-japonya` | Tahrir ölçütüne (VERI-YAPISI, Emre 24 Eylül 2026) göre eski sahibin iddiası süren askerî işgal `isg:` olmalı. Ancak Japonya 1943-05-31 御前会議 «大東亜政略指導大綱» ile Malaya, Sumatra, Java, Borneo, Celebes'i "imparatorluk toprağı" saymaya karar verdi ⇒ bu bölgeler için `s:` savunulabilir; Burma (1943-08-01 "Burma Devleti") ve Filipinler (1943-10-14 İkinci Cumhuriyet) için kukla devlet künyeleri yok | SINIR · EKSİK-DEVLET | Emre'ye seçenek: (A) bugünkü `s:` + beyan; (B) `isg:` + 1943 kukla devlet künyeleri (`burma-devleti-1943`, `filipin-ikinci-cumhuriyet`) |
| G2 | Aynı bölge — giriş günleri | hepsi başkentin düşüş günü (Malaya 1942-02-15, Endonezya 1942-03-09, Filipinler 1942-01-02, Burma 1942-03-08) | Taşra çok daha erken düştü: Kota Bharu 1941-12-08, Labuan 1942-01-03, Tarakan 1942-01-11, Manado 1942-01-11, Ambon 1942-02-03, Palembang 1942-02-14, Bali 1942-02-19, Moulmein 1942-01-31, Tavoy 1942-01-19, Mergui 1942-01-23; Hollandia 1942-04 [Ö — Britannica "Pacific War", tek tek teyit edilmedi] | TARİH (yaklaşıklık beyansız) | Ya tek tek gün, ya `kaynak:`a "BEYANLI YAKLAŞIKLIK: başkentin düşüş günü" |
| G3 | Aynı bölge — çıkış günleri | hepsi 1945-09-02 | Manila 1945-03-03, Rangun 1945-05-03, Labuan 1945-06-10, Tarakan 1945-05; Saipan 1944-07-09, Guam 1944-08-10 | TARİH (yaklaşıklık beyansız) | Aynı öneri. (Komşu denetimlerle — Hollanda, İngiltere, ABD oturumları — çakışır; koordinatöre) |

---

## 4. Tartışmalı adalar — taraf tutulmadan

| Ada | Atlasta | Japonya'nın görüşü (kaynak) | Karşı tarafın görüşü (kaynak) | Öneri |
|---|---|---|---|---|
| Güney Kuriller / 北方領土 (Etorofu, Kunashiri, Şikotan, Habomai) | Kunashiri, Etorofu `1945-09-02→ sovyet-rusya`; Şikotan/Habomai noktası yok | 1855 Şimoda'dan beri Japon; 1945-08-28/09-05 yasadışı işgal; SF'de feragat edilen "Kuril Adaları" bu dördünü kapsamaz (外務省 北方領土問題, 内閣府 北方対策本部 broşürü 2023 [Ö]) | Yalta (1945-02-11) ve 1946-02-02 Prezidyum kararnamesiyle SSCB toprağı; II. Dünya Savaşı sonuçları (Rusya Dışişleri; Kommersant 2021 [Ö]) | §3-H4: A/B seçeneği Emre'ye. Şikotan/Habomai için nokta yok — eklenirse aynı iki seçenek |
| Takeshima / 독도 (Dokdo) | yerleşim yok (taramada çıkmadı) | 1905-02-22 Shimane vilayet ilanı 40 ile ilhak (外務省 竹島) | Kore: 512'den beri Kore toprağı (Usan), 1900 İmparatorluk Kararnamesi 41; 1905 ilhakı sömürge sürecinin parçası (동북아역사재단) | Nokta eklenmesi önerilmez; eklenirse iki görüş `ic_not`a |
| Senkaku / 釣魚台 (Diaoyu) | yerleşim yok | 1895-01-14 kabine kararıyla "terra nullius" ilhakı (外務省 尖閣諸島) | ÇHC ve ÇC: Ming'den beri Çin toprağı, 1895'te Tayvan'la birlikte alındı, 1945'te dönmeli | Aynı |

---

## 5. Eksik / haritada görünmeyen devletler

| # | Yapı | Durum | Öneri |
|---|---|---|---|
| E1 | Mançukuo | Künye var, 1 nokta | §3-T7 |
| E2 | Wang Jingwei Nanking hükûmeti (`nanjing-wang-jingwei`), `mengjiang` | Künye var, **0 yerleşim** | Nanking/Şanghay/Wuhan (Wang), Kalgan/Hohhot (Mengjiang) noktaları |
| E3 | `vietnam-imparatorlugu-1945` | Künye var, 0 yerleşim (taramada) | Huế/Hanoi 1945-03-11→08-25 |
| E4 | Güney Denizler Mandası (南洋庁) | Künye yok; `meiji-japonya` ile boyalı. 03a82fb68 commit'i `nanyo-mandasi` adayını kaydetmiş | Ya künye (`nanyo-mandasi`, f 1920-12-17 / 1922-04-01 南洋庁, t 1947-07-18) ya da mevcut düzen + ic_not |
| E5 | Kwantung Kira Bölgesi, Karafuto Vilayeti | `meiji-japonya` ile boyalı | Künye gerekmez (doğrudan Japon idaresi); kronoloji maddeleri eksik: 1905 Temmuz Sahalin harekâtı (1905-07-07 çıkarma, 07-31 Rus teslimi), 1907-04-01 樺太庁 |
| E6 | Ryukyu Hanlığı 1872–79 | Künye yok | Seçenek (§3-H8) |
| E7 | Satsuma Hanı | Künye yok | `v:` için gerekiyorsa ya da `edo-bakufu` ile |
| E8 | Burma Devleti 1943, İkinci Filipin Cumhuriyeti 1943, Azad Hind | Künye yok (taramada) | §3-G1 seçenek B |
| E9 | SCAP işgali altındaki Japonya 1945–52 | Künye yok; `meiji-japonya` t 1947 pencere ucu | §2-K1 |

---

## 6. Kronoloji eksikleri (Japonya için, harita kırılmasıyla eşlenecek)

1855-02-07 Şimoda (Rusya tarafında var, Japonya'da yok) · 1875-05-07 St. Petersburg (aynı) ·
1876 Ogasawara · 1879-04-04 Okinawa vilayeti · 1891 Volkan adaları · 1894-11-21 Port Arthur ·
1895-03-26 Penghu · 1895-06-02 Tayvan devri · 1905-07-31 Sahalin teslimi · 1905-11-17 Eulsa ·
1914-10 Mikronezya (Jaluit 09-29/10-03, Ponape 10-07, Palau 10-08, Saipan 10-14 — tek tek
kaynakla) · 1918-08 Sibirya Müdahalesi (Japonya tarafı) · 1920-07 Kuzey Sahalin · 1920-12-17
Nanyo C-manda · 1925-05-15 Kuzey Sahalin tahliyesi · 1931-09-18 (yalnız `devletler.js:7857`,
Japonya kronolojisinde yok) · 1932-03-01 Mançukuo ilanı · 1937-12-13 Nanking · 1944-07-09 Saipan ·
1945-08-18/28 Kuril · 1946-01-29 SCAPIN-677 · 1946-02-02 Sovyet kararnamesi · 1956-10-19 ·
1968-06-26 Ogasawara.
`kronoloji_japonya.js` 1923'te bitiyor (dosya başlığı "1281-1923"); 1923–bugün Japonya
kronolojisi yalnız künye `kronoloji:` maddelerinde ve `kronoloji_cok_1923_1945.js`te.

---

## 6b. Bu turda kullanılan dış kaynak adresleri
- NAOJ 暦日データベース: https://eco.mtk.nao.ac.jp/cgi-bin/koyomi/caldb_en.cgi [O]
- kotobank: 弘安の役-493954, 後醍醐天皇-65042, 後亀山天皇-63592, 長慶天皇-18952, 足利尊氏-14539,
  足利義満-14307, 足利義政-14305, 応仁の乱-38826, 北条高時-132155, 永仁の徳政令-35975, 松前藩-136741,
  学制-43681, 琉球征服-1215861 (https://kotobank.jp/word/<ad>) [O]
- 長崎市 出島: https://www.city.nagasaki.lg.jp/nagazine/dejima/1107_dejima1/index.html [O]
- 内閣府 北方対策本部: https://www8.cao.go.jp/hoppo/pamphlet/2023pdf/2023p5-8mondai.pdf ;
  外務省 北方領土: https://www.mofa.go.jp/mofaj/area/hoppo/ [Ö]
- Kommersant 2021 (1946-02-02 kararnamesi): https://www.kommersant.ru/doc/4889272 [Ö]
- 国立公文書館 小笠原: https://www.digital.archives.go.jp/DAS/pickup/view/print/printArchives/0000000782 ;
  内閣府 領土・主権展示館: https://www.cas.go.jp/jp/ryodo/tenjikan/pdf/kikaku_230124_2.pdf [Ö]
- JACAR 台湾授受: https://www.jacar.go.jp/english/jacarbl-fsjwar-e/about/p005.html [Ö];
  JACAR 執政/満洲国: https://jacar.go.jp/english/glossary_en/term2/0050-0030-0040-0010.html [Ö]
- JACAR 南洋群島: https://jacar.go.jp/glossary/term2/0050-0050-0010.html [Ö];
  1914-1918-online "Micronesia": https://encyclopedia.1914-1918-online.net/article/micronesia/ [Ö]
- Smits, "Examining the Myth of Ryukyuan Pacifism", Cambridge Core [Ö]
- **Ulaşılamayan / açılmayan:** 国史大辞典 (JapanKnowledge, abonelik). Hiçbir sitede 403 alınmadı.

## 7. Ölçüm — sayılar ve ölçülemeyenler

- **Künye:** 24 denetlendi (kamakura, kenmu, muromachi, guney-saray-nanbokucho,
  azuchi-momoyama, edo-bakufu, meiji-japonya, japonya-devleti, ryukyu-shunten-eiso, sanzan,
  ryukyu, ryukyu-abd-idaresi, ezo-cumhuriyeti, joseon, japon-kore, kore-gecici-hukumeti,
  abd-ordu-askeri-hukumeti-kore, japon-tayvani, mancukuo, nanjing-wang-jingwei, mengjiang,
  vietnam-imparatorlugu-1945, heian-japonya [yalnız 1185 ucu], yamato/nara [kapsam dışı, bakılmadı]).
- **Kronoloji maddesi:** `kronoloji_japonya.js` 61 madde + künye kronolojileri ~95 madde = ~156;
  ayrıca 46 ortak olay günü 220+ kronoloji/olay dosyasında arandı (82 isabet).
- **Yerleşim:** 207 Japon zinciri yerleşimi + 26 adlı kontrol noktası; 59 kırılma grubu.
- **Değişmez 2 (kaba eşdeğer, `denetle.py` DEĞİL):** 59 kırılma grubundan yalnız 1'inin ±30
  gününde hiçbir dosyada madde yok (Nagazaki 1587-07-24 `portekiz→azuchi-momoyama`, Hideyoshi'nin
  Bateren fermanı Tenshō 15/6/19 = Greg. 1587-07-24 — madde eklenmeli; Nagazaki'nin asıl
  müsaderesi 1588). Taraf eşleşmesi aranmadığı için "VAR" sonuçları iyimserdir.
- **Bulgu sayısı:** §1: 17 (2'si "doğru", 15 düzeltme/çelişki) + 21 maddede `ic_not_takvim` eksiği · §2: 17 · §3: 26 · §4: 3 · §5: 9 · §6: 23 madde
  eksiği.
- **Ölçülemedi:** `denetle.py` (Değişmez 1/2/3/8) — UMIT hafif kip yasağı; üretilmiş harita
  (peteklerin gerçekte nereyi boyadığı) — Hokkaido ve Amami emilmesi petek kuralından çıkarım,
  çizimden değil; Kokushi Daijiten (JapanKnowledge, abonelik) açılamadı; 1891-09-09 Volkan
  adaları kararnamesi, Mikronezya ada ada günleri ve 1937–45 Çin şehir günleri tek tek
  akademik kaynakla okunmadı ([Ö]).

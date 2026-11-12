# PAPALIK DEVLETİ DENETİMİ — kronoloji × harita × kaynak (1281 → 1870 → 1929)

- **Tarih:** 12 Kasım 2026 · **Makine:** UMIT · **Ağaç:** worktree `keen-cartwright-cecf57`, taban `79dfdefd1` (`origin/main` ile fark 0, ölçüm anında)
- **Yöntem:** Yalnız okuma. `denetle.py`, `coz-c`, `paketle`, `push_kapisi` **koşturulmadı** (makine kısıtı).
  Yerleşim zincirleri ve kronoloji maddeleri scratchpad'deki iki küçük regex betiğiyle `data/yerlesimler*.js`,
  `data/olaylar*.js`, `data/kronoloji*.js`, `data/devletler.js` üzerinden okundu; her harita kırılması için
  ±30 gün içinde metninde yerleşim adı ya da sahip kimliği geçen madde arandı (Değişmez 2'nin elle yaklaşığı —
  `denetle`nin kendisi değildir).
- **Veriye dokunulmadı.** Aşağıdaki "Düzeltme" satırları öneridir.
- Kaynak: Treccani (Dizionario Biografico degli Italiani = DBI, Enciclopedia dei Papi = EdP, Enciclopedia
  Italiana = EI, Dizionario di Storia = DdS, Enciclopedia machiavelliana = EM). Annuario Pontificio ve Vatikan Apostolik Arşivi neşirlerine bu
  oturumda erişilmedi (ölçülemedi). Osmanlı'ya değen 3 madde (Niğbolu, İnebahtı, Kutsal İttifak) TDV künyesine
  dayanıyor; yeniden açılmadı.

## 0. Envanter (ölçüldü)

| Ne | Sayı | Yer |
|---|---|---|
| Papalık künyeleri | 5 | `papalik` (devletler.js:866), `vatikan` (:15952), `avignon-venaissin` (:17654), `roma-cumhuriyeti-1798` (:16938), `roma-cumhuriyeti-1849` (:16948); ayrıca `benevento-papalik` (:16836, 1000–1053, kapsam dışı) |
| `papalik` künyesinin kendi kronolojisi | 6 madde | devletler.js:871–877 — **hiçbiri toprak maddesi değil** (2 savaş, 2 ittifak, 1809 ilhak, 1870 son) |
| Sahibi Papalık olan yerleşim (1281 sonrası) | **15** | Roma, Aricia, Avignon, Carpentras, Parma, Piacenza, Ferrara, Bolonya, Ravenna, Rimini, Ancona, Perugia, Benevento, San Marino (1739–40), Vatikan |
| Papalık ↔ başka sahip harita kırılması (1270 sonrası) | **48** | 44'ü betikle, 4'ü (Benevento 1861, San Marino ×2, Vatikan 1929) elle |
| — ±30 günde yerleşimi/sahibi anan madde var | 44 | |
| — hiç uygun madde yok (SESSİZ) | **3** | Perugia 1860-09-14, Ancona 1860-09-29, Ancona 1814-04-16 (yalnız Mantova mütarekesi, Ancona'yı anmıyor) |
| Papalık toprağında olup atlasta **hiç yerleşimi olmayan** şehir (20 ad tarandı) | **19 / 20** | Urbino, Pesaro, Viterbo, Orvieto, Macerata, Fermo, Ascoli, Forlì, Faenza, Imola, Benevento hariç: Pontecorvo, Castro, Civitavecchia, Terracina, Senigallia, Foligno, Rieti, Terni, Cesena, Comacchio, Gubbio, Città di Castello, Velletri, Frosinone, Camerino (Spoleto var ama zinciri 1198'de biter) |

**Ana hüküm:** Kronoloji, haritanın gösterdiği 48 kırılmanın 45'ini karşılıyor; ama **harita Papalık'ı çok
kaba çiziyor**. 1281–1870 arası Papalık devleti haritada 11 noktayla (Roma, Aricia, Romagna'da 4, Marche'de 1,
Umbria'da 1, Emilia'da 3) temsil ediliyor; Marche ve Umbria'nın tamamı Ancona ve Perugia'nın iki peteğine
emilmiş durumda. Bu yüzden Urbino 1631, Castro 1649, Ravenna/Rimini'nin Venedik dönemi, Cumhuriyetlerin (1798,
1849) taşra kapsamı ve 1859 Romagna kopuşu **haritada görünemiyor**: kronoloji–harita uyumu "sessiz değişim yok"
ölçütünü geçiyor, çünkü harita değişmiyor.

---

## ① KRONOLOJİ — doğru mu, yeterli mi?

### 1a. Hatalı gün (TARİH-HATA · ÇELİŞKİ) — 8 bulgu

| # | Kimlik | Atlasta | Kaynak | Sınıf | Düzeltme |
|---|---|---|---|---|---|
| K1 | devletler.js:6858 (`ferrara` künyesi) · kronoloji_italya.js:794 | Ferrara'nın Papalık'a geçişi `1598-01-01` | Haritanın kendi günü `1598-01-29` (yerlesimler_avrupa.js:506, kaynak Chiappini 1997: son Este 28 Ocak'ta çıktı; legato 29 Ocak) | TARİH-HATA | İki maddeyi `1598-01-29`a taşı; `ic_not`: "Este 28 Ocak'ta çıktı, papalık girişi 29 Ocak (Chiappini 1997)". |
| K2 | olaylar_napolyon_italya_1028.js:23 · devletler.js:24469/24476 (`perugia-komunu` t) · yerlesimler_avrupa.js:515 | Perugia Papalık'a `1540-01-01` | DBI «Baglioni, Rodolfo»: teslim **4 Haziran 1540**; DBI «Pier Luigi Farnese» ve DBI «Sangallo il Giovane»: Farnese'nin şehre girişi **5 Haziran 1540** | TARİH-HATA | Kırılma, madde ve künye `t`si `1540-06-05` (fiilî giriş); `ic_not`ta iki DBI günü beyan edilsin (çift teyit değil, 1 gün farklı). Şu hâliyle harita Perugia'yı 5 ay erken Papalık'a veriyor. |
| K3 | olaylar_napolyon_italya_1028.js:22 · devletler.js:24391/24398 (`ancona-cumhuriyeti` t) · yerlesimler_avrupa.js:514 | Ancona Papalık'a `1532-01-01` | DdS «Ancona»: yalnız yıl (1532). DBI «Accolti, Benedetto il Giovane»: Accolti'ye 8 Temmuz 1532'de verilen Marche legasyonundan **Ancona "hâlâ özgür" olduğu için hariç tutuldu**; DBI «Freducci»: VII. Clemens Aralık 1532'de Ancona'daydı | TARİH-HATA | `YYYY-01-01` kuralı burada **kaynakla çelişen** bir durum üretiyor (8 Temmuz'da hâlâ özgür). Gün merdivenin ②–⑥ basamaklarında (Ancona tarihi monografileri) aranmalı; bulunamazsa en az `1532-07-08` sonrası beyanla. |
| K4 | devletler.js:17745 (`urbino-dukaligi`) | Kuruluş maddesi `1443-01-01` | Künyenin kendi `f`si `1443-04-25` | ÇELİŞKİ | Maddeyi `1443-04-25`e eşitle. |
| K5 | devletler.js:17755 (`urbino-dukaligi`) | Son maddesi `1631-01-01` | DBI «Francesco Maria II Della Rovere»: ölüm **28 Nisan 1631** (künye `t` ile aynı); DBI «Vittoria Della Rovere»: 23 Nisan; VIII. Urbanus ilhakı 12 Mayıs'ta ilan etti (DBI arama özeti, gün tekrar okunmalı) | TARİH-HATA | `1631-04-28`; `ic_not`: 23/28 Nisan çelişkisi, devir senedi 20 Aralık 1624. Kaynak alanındaki italyonthisday ve romeartlover silinip DBI yazılmalı. |
| K6 | devletler.js:875 (`papalik`, 1809) | `odak_yer:["Bolonya"]` | Bolonya 1809'da zaten Napolyon'un İtalya Krallığı'ndaydı (harita da öyle diyor); ilhak Roma ve Umbria'yı kapsıyor (DBI «Pio VII») | ÇELİŞKİ | `odak_yer:["Roma"]`. |
| K7 | devletler.js:877 (`papalik`, 1870) | `odak_yer:["Bolonya"]` | Bolonya 1860'tan beri Sardinya/İtalya'nın | ÇELİŞKİ | `odak_yer:["Roma"]`. |
| K8 | `vatikan`: devletler.js:15952 (f `1929-02-11`) · :15953 kuruluş maddesi `1929-06-07` · kronoloji_sinir_nokta3.js:25 (`t:1929-02-11`, ama metni "onay belgelerinin değişimiyle doğdu", `gun:"7 Haziran 1929"`) | Künye imza gününde doğuyor, kuruluş maddesi yürürlük gününde | Laterano: imza 11 Şubat, yürürlük 7 Haziran 1929 (künyenin kendi ic_not'u) | ÇELİŞKİ | Gün kararı EMRELİC'in (gece-112); karar korunacaksa yalnız **metinler** düzelsin: nokta3:25 metni "imzalandı" demeli, :15953 `tur` kuruluş değil "yürürlük" olmalı. Kuruluş tek madde, tek günde olsun. |

### 1b. Kaynakta olup atlasta olmayan maddeler (EKSİK-MADDE) — 22

Değişmez 2 evreninde (olaylar* / kronoloji_sinir* / künye kronolojisi) **maddesi olmayan** olaylar. Harita
değişikliği gerektirenler ② bölümündeki SINIR bulgularıyla eşleşir (H-numarası).

| # | Gün | Olay | Kaynak | Not |
|---|---|---|---|---|
| E1 | 1377-01-17 | XI. Gregorius Roma'ya döner, Avignon dönemi biter | ölçülemedi (bu oturumda okunmadı) | Avignon 1309 yalnız öteki evrende (kronoloji_fransa.js:97, `1309-01-01`, yıl) |
| E2 | 1378-09-20 | Fondi seçimi: Büyük Ayrılık başlar | ölçülemedi | Ayrılık için tek madde Konstanz 1414-11-05 (kronoloji_macaristan.js:208, öteki evren) |
| E3 | 1417-11-11 | V. Martinus seçimi: Ayrılık biter | ölçülemedi | |
| E4 | 1441-11-20 | Cremona barışı: Ravenna Venedik'e (Polenta sonu) | DBI «Manfredi, Guido Antonio»; DBI «Polenta, Ostasio» | → H5 |
| E5 | 1503 | Pandolfo Malatesta Rimini'yi Venedik'e bırakır | EM «Rimini»; Treccani «Malatesta, Pandolfo V» | gün yok → H6 |
| E6 | 1509 (Agnadello sonrası) | Venedik Romagna'yı (Ravenna, Rimini, Faenza, Cervia) II. Julius'a iade eder | Treccani «Ravenna», EM «Rimini» (Agnadello 14 Mayıs 1509 — bir Treccani maddesi 6 Mayıs diyor: ÇELİŞKİ) | → H5, H6 |
| E7 | 1515-10-13 | Viterbo antlaşması: Parma ve Piacenza Fransız Milano'suna | EdP «Leone X»; DBI «Leone X» (bir Treccani maddesi "Bologna barışı" der) | → H7 |
| E8 | 1521-11 (gün yok) | Parma ve Piacenza Papalık'a döner | EdP «Leone X» | → H7 |
| E9 | 1631-04-28 | Urbino'nun devri | DBI | yalnız künye maddesi var (K5), toprak etkisi yok → H12 |
| E10 | 1649-09-02 | Castro teslim olur, yıkılır; Castro-Ronciglione Papalık'a | EdP «Innocenzo X»; EI «Castro, ducato di» | → H12, EKSİK-DEVLET D1 |
| E11 | 1663-07-26 | Provence parlamentosu Avignon'un ilhakını ilan eder | Treccani «Avignone» (EI) | → H8 |
| E12 | 1688 | Avignon'un ikinci Fransız işgali | Treccani «Luigi XIV» (1687-88) ↔ EI «Avignone» (1668): **ÇELİŞKİ** | → H8 |
| E13 | 1768-06 → 1774-04-25 | XV. Louis'nin Avignon-Comtat işgali ve iadesi | EI «Avignone»: ilhak kararı 9 Haziran 1768, iade 25 Nisan 1774 | → H8 |
| E14 | 1797-11 | Ancona Cumhuriyeti (Repubblica Anconitana) | DdS «Marche»; EI «Ancona» | → H2, D3 |
| E15 | 1798-11/12 | Napoli'nin Roma'yı kısa işgali; Championnet 14 Aralık'ta cumhuriyeti yeniden kurar | DdS «Roma» | |
| E16 | 1800-07-03 | VII. Pius Roma'ya girer | ölçülemedi (DBI «Pio VII»de aranmalı) | → H2 |
| E17 | 1806-06-03 / 06-06 | Benevento (Talleyrand) ve Pontecorvo (Bernadotte) prenslikleri | EI «Talleyrand» (3 Haz 1806–4 Haz 1815); EI «Pontecorvo» (6 Haz 1806) | → H9, D6/D7 |
| E18 | 1808-02-02 | Miollis Roma'yı işgal eder | DBI «Pio VII» | Papalık'ın fiilî sonu; harita 1809'a kadar papalık diyebilir ama madde şart |
| E19 | 1815-05-05 / 1815-06-09 | Rancia (Tolentino) yenilgisi; Viyana: Marche, Legasyonlar, Benevento, Pontecorvo papaya | EdP «Pio VII»; DBI «Murat» | Marche'nin iadesi → H10 |
| E20 | 1859-06-12 | Avusturya Bolonya'dan çekilir, Geçici Hükûmet Cuntası; Romagna'da papalık yönetimi düşer | DBI «Casarini, Camillo»; DBI «Malvezzi de' Medici»; EI «Romagna» | → H4 |
| E21 | 1860-09-14 / 09-18 / 09-29 | Perugia'nın alınması; Castelfidardo; Ancona'nın teslimi | Treccani «Ancona» (EI); DBI «Cialdini»; Treccani «Risorgimento» | → H1 (sessiz değişim) |
| E22 | 1860-11-04/05 · 1870-10-02 · 1870-10-09 | Marche-Umbria plebisiti; Roma plebisiti; Roma'nın ilhak kararnamesi | Treccani «I plebisciti e le elezioni» (1860); 1870 günleri ölçülemedi | |

### 1c. Tek maddeye sıkıştırılmış olaylar — 2

- **S1** kronoloji_sinir_avrupa_bati.js:521 — `1512-06-24` Valtellina maddesi (`devletler:["graubunden","milano-dukaligi"]`);
  Parma ve Piacenza'nın Papalık'a geçişi yalnız `d:` metninde "aynı günlerde" diye geçiyor. Harita iki yerleşimi
  bu günde Papalık'a veriyor (yerlesimler_avrupa.js:502/504). **Düzeltme:** ayrı madde
  `{t:"1512-06-24", devletler:["papalik","milano-dukaligi"], yer_id:"Parma"}`; gün kaynağı Treccani «Piacenza»dan okunmalı
  (bu oturumda gün teyit edilmedi).
- **S2** kronoloji_sinir_avrupa_bati.js:594 — `1860-03-22`: Toskana (kararname 22 Mart) ile Emilia (sonuçlar 18 Mart'ta
  krala sunuldu — maddenin kendi metni) tek maddede; harita Bolonya/Ferrara/Ravenna/Rimini'yi 18 Mart'ta kırıyor.
  ±30 günde olduğu için ölçüt geçiyor, ama madde 4 gün kayık. **Düzeltme:** Emilia/Romagna için ayrı `1860-03-18` maddesi.

---

## ② HARİTA UYUMU

### 2a. Sessiz değişim — 3 kırılma (ölçüldü, elle)

| # | Kimlik | Kırılma | Durum | Düzeltme |
|---|---|---|---|---|
| H1a | yerlesimler_avrupa.js:515 Perugia | `1860-09-14` papalik → sardinya-piyemonte | ±30 günde Perugia'yı ya da bu iki devleti anan madde yok (tek eşleşme Benevento maddesi, nokta2:62) | E21 maddesini kronoloji_sinir'e ekle (Treccani: Della Rocca'nın kolordusu 14 Eylül'de Perugia'yı aldı). |
| H1b | yerlesimler_avrupa.js:514 Ancona | `1860-09-29` papalik → sardinya-piyemonte | Aynı | E21 (Treccani «Ancona»: 29 Eylül 1860). |
| H1c | yerlesimler_avrupa.js:514 Ancona | `1814-04-16` italya-napolyon → papalik | Tek madde Mantova mütarekesi (olaylar_napolyon_italya_1028.js:49), Ancona'yı anmıyor; olgu da yanlış (H10) | H10'la birlikte düzelt. |

> Uyarı: Bu 3 kırılma `denetle` Değişmez 2'den geçiyor olabilir (ölçüt metin aramıyor olabilir). Elle bakışım
> "maddenin yerleşimi ya da sahibini anması" şartını kullandı. Asıl sonucu `denetle` vermeli — **ölçülemedi**.

### 2b. Haritanın tarihe uymadığı yerler (SINIR · HAYALET) — 11 bulgu

| # | Kimlik | Atlasta | Kaynak | Sınıf | Düzeltme |
|---|---|---|---|---|---|
| H2 | yerlesimler_avrupa.js:514 Ancona, :515 Perugia · yerlesimler.js:1186 Roma · sahne1108.js:198 Aricia | 1798-02-15 → 1799-09-30 arası **yalnız Roma ve Aricia** Roma Cumhuriyeti'nde; Ancona ve Perugia `papalik` kalıyor | DdS «Marche»: Ancona 1797'de cumhuriyet, ertesi yıl Roma Cumhuriyeti'ne katıldı (Metauro departmanı); DdS «Umbria»: Roma Cumhuriyeti'nin parçası, 1800'de Papalık'a iade | HAYALET (devletin başı yokken toprağı Papalık boyalı) | Ancona: `1797-11-?` ancona cumhuriyeti → `1798-03-?` roma-cumhuriyeti-1798; Perugia: roma-cumhuriyeti-1798 (`1798-02-15`'ten). Dönüş günleri ölçülemedi. Ayrıca Roma/Aricia `1799-09-30 → 1800-07-03` arası Napoli işgali (E16) — şu an `papalik` başlıyor. |
| H3 | Aynı 4 yerleşim + Bolonya, Ferrara, Ravenna, Rimini | 1849-02-09 → 07-03 arası yalnız Roma ve Aricia `roma-cumhuriyeti-1849` | Treccani «Romana, Repubblica» (EI): cumhuriyet bütün Papalık devletinde ilan edildi; Legasyonlar Avusturya işgaliyle (Mayıs 1849) erken düştü | SINIR | Perugia ve Ancona roma-cumhuriyeti-1849; Bolonya/Ferrara/Ravenna/Rimini cumhuriyet → Avusturya işgali. **Bolonya ve Ancona'nın düşüş günleri bu oturumda okunmadı (ölçülemedi).** |
| H4 | yerlesimler_avrupa.js:510/506/512/513 (Bolonya, Ferrara, Ravenna, Rimini) | `papalik` 1860-03-18'e kadar | EI «Romagna»: Avusturya 12 Haziran 1859'da çekildi, papalık yönetimi düştü, yerini geçici hükûmetler aldı; DBI «Casarini»: Bolonya Cuntası 12 Haziran 1859, Eylül 1859'da Romagna Meclisi papalık yönetiminin düştüğünü oyladı | SINIR | 1859-06-12 → 1860-03-18 arası yeni künye (D8); madde E20. |
| H5 | yerlesimler_avrupa.js:512 Ravenna | `papalik` 1281 → 1797 kesintisiz | DBI «Manfredi, G.A.»: Ravenna 20 Kasım 1441 Cremona barışıyla Venedik'e; Treccani «Ravenna»: Venedik doğrudan yönetimi 1449–1509 (1441/1449 farkı Treccani içinde ÇELİŞKİ), 1509'da Papalık'a | SINIR | `venedik` 1441-11-20 → 1509 (gün E6'dan); Polenta dönemi (1281–1441) papalık vikerliği olarak kalabilir, `kaynak:`a beyan. |
| H6 | yerlesimler_avrupa.js:513 Rimini | `papalik` 1281 → 1797 kesintisiz | EM «Rimini»: Malatesta senyörlüğü, Borgia 1500, **Venedik 1503–1509**, 1509 doğrudan papalık; Malatesta 1522–23 ve 1527–28 kısa dönüşler | SINIR | `venedik` 1503 → 1509 (gün ölçülemedi; yıl hassasiyeti beyanla). Malatesta için D2'ye bak. |
| H7 | yerlesimler_avrupa.js:502 Parma, :504 Piacenza | `papalik` 1512-06-24 → 1545-08-16 kesintisiz | EdP «Leone X»: Viterbo (13 Ekim 1515) ile Milano'ya (Fransız); Kasım 1521'de Papalık'a dönüş | SINIR | Araya `fransa` (ya da `milano-dukaligi` Fransız elinde — karar: Milano 1515–21 atlasta kimde, kontrol edilmeli) 1515-10-13 → 1521-11-? dönemi + E7/E8. |
| H8 | yerlesimler_avrupa.js:234 Avignon, :239 Carpentras | `papalik` 1348 (Carpentras 1281) → 1791 kesintisiz | EI «Avignone»: 1663 (26 Temmuz ilhak ilanı), 1688 (ya da 1668 — ÇELİŞKİ), 1768–1774 Fransız işgalleri; Comtat aynı akıbeti paylaştı | SINIR | Üç `fransa` dönemi + E11–E13. 1663 ve 1688 dönemlerinin bitiş günleri ölçülemedi. |
| H9 | yerlesimler_nokta2.js:51 Benevento | `papalik` 1051-07-05 → **1861-03-17** | (a) EI «Talleyrand»: Benevento prensliği 3 Haz 1806 – 4 Haz 1815; (b) atlasın **kendi** maddesi kronoloji_sinir_nokta2.js:62: Benevento 3 Eylül 1860'ta geçici hükûmete geçti | SINIR + ÇELİŞKİ | (a) 1806-06-03 → 1815-06-04 yeni künye (D6); (b) papalık dönemini 1860-09-03'te kapat; 1860-09-03 → 1861-03-17 sardinya-piyemonte (ya da geçici hükûmet). Şu hâliyle madde var, harita 6,5 ay geç kırılıyor. |
| H10 | yerlesimler_avrupa.js:514 Ancona | `papalik` 1814-04-16'dan | DBI «Murat»: Murat Ancona'yı 1813 sonu/1814'te tuttu; DdS/EI «Marche»: Avusturya zaferinden sonra (Rancia 5 Mayıs 1815) Marche papaya döndü; EdP «Pio VII»: Viyana 9 Haziran 1815 Marche'yi iade etti | SINIR | 1814-04-16 → 1815-06-09 `napoli`; papalık 1815-06-09'dan. Başlangıç günü ölçülemedi. |
| H11 | yerlesimler.js:1186 Roma | `fransa-cumhuriyet` 1814-05-24'e kadar | DBI «Canova»: Ocak 1814'te Murat kuvvetleri Roma'ya girdi, Miollis Castel Sant'Angelo'ya kapandı | SINIR (küçük) | Ocak–Mayıs 1814 `napoli`; gün ölçülemedi — düşük öncelik. |
| H12 | Urbino, Pesaro, Castro, Pontecorvo ve 15 şehir (§0 tablosu) | Yerleşim yok | — | SINIR (çözünürlük) | Papalık taşra merkezleri olarak en az: **Urbino** (urbino-dukaligi 1443–1631, papalik 1631–), **Pesaro**, **Viterbo** (Patrimonium), **Spoleto** (zincir 1198'de bitiyor; sonrası papalık), **Macerata** (Marca merkezi), **Forlì**, **Faenza**, **Castro** (castro-dukaligi 1537–1649), **Benevento'nun karşılığı Pontecorvo**. `urbino-dukaligi` künyesinin **hiç yerleşimi yok** — kronolojisindeki `odak_yer:"Rimini"` hiç Urbino'nun olmamış bir şehri gösteriyor (ÇELİŞKİ). |

### 2c. Doğru bulunan kırılmalar (kısaca)

Avignon 1348-06-09 (satış), Carpentras/Avignon 1791-09-14, Bolonya 1506-11-11, Parma-Piacenza 1545-08-16,
Ferrara/Bolonya 1796-06-23 (Bologna mütarekesi), Ravenna/Rimini 1797-02-19 (Tolentino), Roma 1798-02-15,
Ancona 1808-04-02, Roma/Perugia 1809-05-17 (DBI «Pio VII»: Viyana kararnamesi 17 Mayıs 1809), Roma 1814-05-24,
Legasyonlar 1815-06-09, Roma 1849-02-09 / 07-03, Roma 1870-09-20, San Marino 1739-10-17 / 1740-02-05 — madde ve
harita aynı gün. Not: 1809 için bayrağın Quirinal'de indirilişi 10 Haziran 1809 (DBI «Pio VII»); kararname günü
korunabilir.

---

## ③ ÇEVREDEKİ DEVLETLER

### 3a. UYDURMA-DEVLET — 0

`bolge:"italya"` taşıyan 119 satırın (grep sayımı) içinden Papalık'a komşu olanları (venedik, napoli, toskana/floransa, milano-dukaligi,
ferrara, modena, parma, urbino-dukaligi, siena, san-marino, bologna-komunu, ancona-cumhuriyeti, perugia-komunu,
roma-cumhuriyeti-1798/1849, italya-napolyon, sardinya-piyemonte, italya) gerçek yapılar. Uydurma bulunmadı.
`roma`-komünü (1143–1155) künyesinin ic_not'u zaten "ayrı polity sayılması tartışmalı" beyanını taşıyor.

### 3b. f/t günleri — 4 bulgu

| # | Kimlik | Atlasta | Kaynak | Sınıf | Düzeltme |
|---|---|---|---|---|---|
| F1 | devletler.js:24464 `perugia-komunu` t | `1540-01-01` | 1540-06-04/05 (K2) | TARİH-HATA | `1540-06-05` |
| F2 | devletler.js:24386 `ancona-cumhuriyeti` t | `1532-01-01` | 8 Temmuz 1532'de hâlâ özgür (K3) | TARİH-HATA | gün aranmalı |
| F3 | devletler.js:16836 `benevento-papalik` | t `1053-01-01`; yerleşim kırılması `1051-07-05`; künye maddesi :16837 "Temmuz 1051'de fiilen devralır" | — | ÇELİŞKİ (1281 öncesi, kapsam dışı) | t ile kırılmayı eşitle; ayrıca ad "Benevento Prensliği" ama kimlik `benevento-papalik` — yanıltıcı. |
| F4 | `papalik` t `1870-09-20` | fiilî son | hukukî ilhak 9 Ekim 1870 (ölçülemedi) | — | doğru; E22 maddesi eklenebilir. |

`roma-cumhuriyeti-1798` (f 1798-02-15, t 1799-09-30), `roma-cumhuriyeti-1849` (f 02-09, t 07-03),
`urbino-dukaligi` (f 1443-04-25, t 1631-04-28 — DBI), `italya-napolyon` (t 1814-04-16) kaynakla uyumlu.

### 3c. EKSİK-DEVLET — 9

| # | Devlet | Süre | Kaynak | Harita etkisi |
|---|---|---|---|---|
| D1 | Castro Dükalığı (Farnese) | 1537 → 1649-09-02 | EI «Castro, ducato di»; EdP «Innocenzo X» | Castro/Ronciglione yerleşimi gerekir (H12) |
| D2 | Rimini Malatesta senyörlüğü | ~1295 → 1500 (1522–23, 1527–28 kısa) | Treccani «Malatesta»; EM «Rimini» | Papalık vikerliği; künye mi beyan mı — Emre kararı |
| D3 | Ancona Cumhuriyeti 1797 (Repubblica Anconitana) | 1797-11 → 1798-03 | DdS «Marche» | Ancona H2 |
| D4 | Cispadan Cumhuriyeti | 1796-12-27 → 1797-07-09 | maddesi var (olaylar_napolyon_italya_1028.js:10), **künyesi yok**; harita Bolonya/Ferrara'yı bu sürede `fransa-cumhuriyet` boyuyor | SINIR |
| D5 | Tiberina Cumhuriyeti (Perugia) | 1798 | ölçülemedi (yalnız genel bilgi) | düşük öncelik |
| D6 | Benevento Prensliği (Talleyrand) | 1806-06-03 → 1815-06-04 | EI «Talleyrand» | H9 |
| D7 | Pontecorvo Prensliği (Bernadotte) | 1806-06-06 → 1810 | EI «Pontecorvo» | yerleşim yok |
| D8 | Romagna Geçici Hükûmeti / Orta İtalya Birleşik Eyaletleri | 1859-06-12 → 1860-03-18 | EI «Romagna»; DBI «Casarini»; EI «Cipriani» | H4 |
| D9 | Polenta senyörlüğü (Ravenna) | 1275/1297 → 1441 | DBI «Polenta» maddeleri | vikerlik — D2 ile aynı karar |

### 3d. Kaynak zayıflığı (KAYNAKSIZ) — 4

- devletler.js:17744–17755 `urbino-dukaligi`: 10 maddenin 9'u Vikipedi, romeartlover.it, coingallery.de,
  italyonthisday.com'a dayanıyor (yasak/zayıf). DBI «Montefeltro», «Della Rovere» maddeleriyle değiştirilmeli.
- devletler.js:17655, :17657–17659 `avignon-venaissin`: 1274 ve 1790–91 maddeleri Vikipedi tek dayanak;
  EI «Avignone» yeter.
- yerlesimler_nokta2.js:52 San Marino 1739–40: "Wikipedia 'History of San Marino' ve arama özetleri" — kendi
  beyanı "ikinci kaynak aranıyor".
- devletler.js:873 `papalik` 1571-05-25 Kutsal İttifak: kaynak alanı yok (Kutsal Birlik'in ilanı Roma'da 25 Mayıs
  1571 — TDV «İnebahtı» ile teyit edilmeli; bu oturumda açılmadı).

### 3e. Ek gözlem

- `avignon-venaissin` künyesi ve BOYALAR kaydı (renkler.py:636) var, ama Avignon ve Carpentras haritada
  `papalik` boyanıyor; künye harita karşılığı olmadan duruyor. İkisinden biri seçilmeli (öneri: haritada
  `papalik` kalsın, künye Papalık'ın alt başlığı olarak beyan edilsin) — ÇELİŞKİ, düşük öncelik.

---

## SAYILAR

| Ölçüt | Sayı |
|---|---|
| Papalık sahipli yerleşim | 15 |
| Harita kırılması (Papalık ↔ başka) | 48 |
| Sessiz kırılma (elle, ±30 gün, ad/kimlik eşleşmesi) | 3 |
| TARİH-HATA / ÇELİŞKİ (kronoloji) | 8 (K1–K8) |
| EKSİK-MADDE | 22 (E1–E22) |
| Sıkıştırılmış madde | 2 (S1–S2) |
| SINIR / HAYALET (harita) | 11 (H2–H12) |
| UYDURMA-DEVLET | 0 |
| f/t bulgusu | 4 (F1–F4; F1–F2 K2–K3 ile aynı olgu) |
| EKSİK-DEVLET | 9 (D1–D9) |
| KAYNAKSIZ | 4 |
| Papalık toprağında yerleşimi olmayan şehir (taranan 20'den) | 19 |
| **Toplam bulgu** | **63** (aynı olgunun tekrarı olan F1–F2 sayılmadan) |

## ÖLÇEMEDİKLERİM

1. `denetle.py` (Değişmez 1/2/3/8) koşturulmadı — makine kısıtı. 3 sessiz kırılma `denetle` ölçütüyle doğrulanmadı.
2. Annuario Pontificio, Vatikan Apostolik Arşivi, Archivio di Stato di Roma neşirleri açılmadı; bütün teyitler
   Treccani maddelerinin arama özetlerinden. Tam metinler (`GET`) okunmadı; gün rakamları özetteki cümleden.
3. Şu günler bulunamadı: Ancona 1532 devri, Rimini 1503/1509, Parma-Piacenza 1521 dönüşü, Avignon 1663/1688
   işgallerinin bitişi, Ancona'nın Murat'a geçişi (1813/14), Bolonya ve Ancona'nın 1849 düşüşü, Pius VII'nin
   1800 dönüşü, 1870 Roma plebisiti ve ilhak kararnamesi, Clemens V'in Avignon'a girişi (1309), 1377/1378/1417.
4. Komşu künyelerin (`venedik`, `napoli`, `toskana`, `milano-dukaligi`, `modena`, `parma`) f/t'leri bu raporda
   denetlenmedi; yalnız Papalık sınırına değen kırılmalar okundu (İtalya/Venedik oturumları ayrı).
5. Üretilmiş harita (motor çıktısı) ölçülmedi; Marche/Umbria'nın hangi petek tarafından boyandığı varsayımla
   (Ancona ve Perugia peteği) yazıldı.

## İSTEDİKLERİM (öneri sırası)

1. **Hemen, küçük veri işi:** K1, K2, K4–K7 (gün/odak düzeltmeleri), H1a–b için E21 maddesi, H9b Benevento
   1860-09-03 kırılması. Hepsi tek dosya grubuna dokunuyor (devletler.js + yerlesimler_avrupa.js + nokta2.js).
2. **Orta iş:** H2–H4 (1798, 1849, 1859 cumhuriyet/geçici hükûmet kapsamı) — D3, D4, D8 künyeleri gerektirir;
   Değişmez 2 için E14, E20 maddeleri birlikte yazılmalı.
3. **Büyük iş (Emre kararı):** H12 — Papalık taşrasına 8–10 yerleşim (Urbino, Pesaro, Viterbo, Spoleto,
   Macerata, Forlì, Faenza, Castro, Pontecorvo). Bunsuz Urbino 1631 ve Castro 1649 haritada hiç görünmez.
   Vikerlik senyörlükleri (Malatesta, Polenta, Ordelaffi, Manfredi) künye mi yoksa beyanlı papalık mı — karar Emre'nin.

# ALMANYA DENETİMİ — 11/12 Kasım 2026

**Kip:** HAFİF (UMIT makinesi; yönetici oturumun talimatı). `denetle.py`, `coz-c`, paketleme ve
geniş alt ajan yasaktı. Ölçümler `data/` kaynak dosyalarının node ile **salt okunmasıyla** yapıldı
(üretilmiş harita ölçülmedi). Ağaç: `claude/relaxed-zhukovsky-2a7732`, taban `7a3659d54`
(`origin/main` ile 0 fark, 11 Kasım ölçümü). Veri dosyalarına dokunulmadı.

**Kaynak notu:** Bu turda web erişimi tek alt ajanla sınırlıydı; dış kaynak olarak yalnız TDV
*Prusya* maddesi (https://islamansiklopedisi.org.tr/prusya) okundu. Öteki "kaynak ne diyor"
satırları uzman bilgisine dayanır ve **teyit gerektirir** — her birine önerilen birincil adres
yazıldı (NDB/Deutsche Biographie, LeMO, documentArchiv.de vb.). Sınıf etiketinin yanındaki
**[T]** = kaynakla teyit edildi; **[Ö]** = öneri, kaynakla teyit edilecek.

---

## 0. Ölçülen zincir

`data/devletler.js`te Alman zinciri ve ilişkili **62 künye** tarandı (id/ad/harita deseniyle).
Ana halkalar:

| künye | f | t | not |
|---|---|---|---|
| `almanya` (harita `almanya`) | 0962-02-02 | 1945-06-05 | Kutsal Roma + 1871 Reich + Weimar + Nazi tek künye (§3.5 ② kararı) |
| `brandenburg-markgrafligi` → `brandenburg-prusya` → `prusya` | 1157 / 1415-01-01 / 1701-01-18 | 1871-01-18 | |
| `teuton-devleti` → `prusya-dukaligi` | 1230 / 1525-04-08 | 1701-01-18 | |
| `ren-konfederasyonu`, `westfalya-krallik`, `berg-buyuk-dukaligi` | 1806–1813 | | **haritada hiç yerleşimi yok** (bkz. B1) |
| `alman-konfederasyonu` | 1815-06-08 | 1866-08-24 | çatı yapı |
| — Kuzey Alman Konfederasyonu | — | — | **künye yok** (bkz. C1) |
| `elsass-lothringen` | 1871-05-10 | 1918-11-11 | **hiçbir yerleşimde kullanılmıyor** |
| `saar-havzasi-mandasi` / `saar-protektorati` | 1920-01-10 / 1947-12-15 | 1935-03-01 / 1957-01-01 | |
| `danzig-serbest-sehri(-1807)`, `memel-bolgesi`, `bohemya-moravya-protektorasi` | | | |
| `almanya-muttefik-isgali` → `almanya-federal-cumhuriyeti-bati` / `almanya-demokratik-cumhuriyeti` → `almanya-birlesik` | 1945-06-05 → 1949-05-23 / 1949-10-07 → 1990-10-03 | | |

Kronoloji: `data/kronoloji_almanya.js` **133 madde** (1281 sonrası 127; dosya `index.html`e
bağlı) + 23 künyenin `kronoloji:` maddeleri (**~190 madde**) tarandı.
Yerleşim: 127 `yerlesimler*.js` dosyasındaki 5.630 yerleşimden zincir id'lerine giren/çıkan
**691 kırılma** döküldü (1281 sonrası ~560). 1806–1871 hayalet taraması ve 35 anahtar şehrin
tam zinciri ayrıca okundu.

---

## A. Kronoloji maddeleri — tarih/takvim

| # | kimlik | atlasta | kaynak ne diyor | sınıf | önerilen düzeltme |
|---|---|---|---|---|---|
| A1 | `kronoloji_almanya.js` "II. Wilhelm'in İstanbul ziyareti" + `devletler.js` `almanya` kronoloji (aynı olay) | `1889-01-01` (yer tutucu gün) | II. Wilhelm 2 Kasım 1889'da İstanbul'a geldi (ilk ziyaret, 2–6 Kasım 1889). TDV *Prusya* maddesi ziyaret gününü vermiyor; TDV *II. Abdülhamid*'e bakılmalı | TARİH-HATA [Ö] | `1889-11-02`; iki dosyada birlikte |
| A2 | `kronoloji_almanya.js` "Luther'in Worms Diyeti'nde tezlerini geri almayı reddetmesi" | `1521-04-17` | 17 Nisan'da diyete çıktı ve süre istedi; reddi ("Hier stehe ich") **18 Nisan 1521** (LeMO / Deutsche Reichstagsakten J.R. II) | TARİH-HATA [Ö] | `1521-04-18` |
| A3 | `kronoloji_almanya.js` + `brandenburg-prusya` kronoloji "Potsdam Fermanı" | `1685-10-29` | Brandenburg 1700'e dek Jülyen takvimdeydi: ferman 29 Ekim 1685 (eski üslup) = **8 Kasım 1685** (Gregoryen) (documentArchiv / Brandenburgische Landesgeschichte) | TAKVİM [Ö] | `1685-11-08` + `ic_not` "Jülyen 29.10.1685" |
| A4 | `kronoloji_almanya.js` "Sakson Elektörü'nün Katolikliğe geçip Lehistan Kralı seçilmesi" | `1697-06-15` | Din değiştirme 1/2 Haziran 1697, seçim **27 Haziran 1697**, taç giyme 15 Eylül 1697. `saksonya` künyesi taç giyme gününü (`1697-09-15`) kullanıyor | ÇELİŞKİ + TARİH-HATA [Ö] | `1697-06-27` (seçim); başlık "Lehistan Kralı seçildi" |
| A5 | `hannover` kronoloji "Georg Ludwig ... Büyük Britanya tahtı" | `1714-01-01` | 1 Ağustos 1714 (eski üslup) = 12 Ağustos 1714; `kronoloji_almanya.js` doğru olarak `1714-08-12` diyor | ÇELİŞKİ [Ö] | `1714-08-12` |
| A6 | `hannover` kronoloji "Fransız birlikleri Hannover'i ..." | `1803-01-01` | Sulingen Konvansiyonu 3 Haziran 1803; Mortier 5 Haziran 1803'te Hannover'e girdi | TARİH-HATA [Ö] | `1803-06-03` |
| A7 | `brandenburg-prusya` kronoloji "Xanten Antlaşması" | `1614-01-01` | Xanten Antlaşması 12 Kasım 1614 | TARİH-HATA [Ö] | `1614-11-12` (Jülyen/Gregoryen ayrımı beyan edilmeli) |
| A8 | `prusya-dukaligi` kronoloji "Albrecht'in ölümü" | `1568-01-01` | Dük Albrecht 20 Mart 1568'de öldü (NDB) | TARİH-HATA [Ö] | `1568-03-20` |
| A9 | `alman-konfederasyonu` kronoloji "Frankfurt Prensler Kongresi" | `1863-01-01` | Fürstentag 16 Ağustos – 1 Eylül 1863 | TARİH-HATA [Ö] | `1863-08-16` |
| A10 | `elsass-lothringen` kronoloji "Zabern olayı" | `1913-01-01` | Zabern olayı Ekim sonu – Kasım 1913 (patlak verdiği gün 6 Kasım 1913) | TARİH-HATA [Ö] | `1913-11-06` |
| A11 | `hamburg-sehri` kronoloji (5 madde) | `1618-01-01`, `1768-01-01`, `1806-01-01`, `1814-01-01`, `1815-01-01` | Gottorp Antlaşması 27 Mayıs 1768 · Fransız işgali 19 Kasım 1806 · Davout garnizonu Mayıs 1814 sonunda çekildi · Bundesakte 8 Haziran 1815 | TARİH-HATA [Ö] | 1768-05-27 · 1806-11-19 · 1814-05-30 civarı (teyit) · 1815-06-08; 1618 için yalnız yıl beyanı |
| A12 | `kraliyet-prusyasi` kronoloji "I. Bölüşüm'de Prusya ... aldı" | `1772-01-01` | Bölüşüm antlaşması 5 Ağustos 1772; Prusya ilhak patenti 13 Eylül 1772. Künye `t:1772-09-13`, Elbing kırılması `1772-08-05` | TARİH-HATA + ÇELİŞKİ [Ö] | Madde `1772-08-05`; künye `t` ile yerleşim kırılması aynı güne çekilmeli (ya ikisi de 08-05 ya da ikisi de 09-13 + beyan) |
| A13 | `memel-bolgesi` kronoloji "Müttefikler Konferansı bölgeyi ... devretti" | `1923-02-17` | Büyükelçiler Konferansı kararı 16 Şubat 1923; Klaipėda yerleşim kırılması `1923-02-16` | ÇELİŞKİ [Ö] | `1923-02-16` |
| A14 | `brandenburg-prusya` künye `f` + Berlin kırılması | `1415-01-01` | Konstanz'da 30 Nisan 1415 tevcidi; `kronoloji_almanya.js` doğru olarak `1415-04-30` diyor | ÇELİŞKİ [Ö] | künye `f`, Berlin kırılması ve künye maddesi `1415-04-30` |
| A15 | `kronoloji_almanya.js` "Gutenberg Mainz'da hareketli harf..." | `1440-01-01` | 1440 civarı Strazburg denemeleri; Mainz'da matbaa ~1450, İncil 1454/55. Yer ile yıl uyumsuz | ÇELİŞKİ [Ö] | Ya "Strazburg, ~1440" ya da `1450-01-01` + yalnız yıl beyanı |
| A16 | `kronoloji_almanya.js` "Weimar Anayasası'nın kabulü" | `1919-08-11` | Meclis kabulü 31 Temmuz, imza 11 Ağustos, yürürlük 14 Ağustos 1919 | TARİH-HATA (başlık) [Ö] | başlık "imzalanması" ya da gün `1919-07-31` |
| A17 | `kronoloji_almanya.js` "Friedrich V'in Bohemya tacını kabulü" | `1619-08-26` | 26 Ağustos 1619 Bohemya zümrelerince **seçilmesi**; kabul Eylül sonu | TARİH-HATA (başlık) [Ö] | başlık "seçilmesi" |
| A18 | `prusya` künyesinin 6 kronoloji maddesi | kaynak alanı yok | — | KAYNAKSIZ | Paylaşım maddelerine kaynak eklenmeli (Lehistan oturumunun kaynaklarıyla ortak) |
| A19 | `kronoloji_almanya.js` 1656, 1672, 1840 Osmanlı ilişkisi maddeleri | `-01-01` | TDV *Prusya* bu üç olayın gününü vermiyor; 1840 ticaret antlaşması TDV'de yok | KAYNAKSIZ / yalnız yıl | Gün aranmalı (İSAM, Beydilli); bulunamazsa "[yalnız yıl]" beyanı |

**Teyit edilenler (bulgu değil):** 1761-03-22 Osmanlı-Prusya dostluk ve ticaret antlaşması ile
1790-01-31 ittifakı TDV *Prusya* ile birebir uyuşuyor [T]. 1281–1923 arasındaki öteki ~100
maddenin günü uzman bilgisiyle tutarlı görüldü; ayrıca kaynakla tek tek teyit edilmedi.

---

## B. Harita — yerleşim kırılmaları

### B1 · HAYALET: Kutsal Roma künyesi (`almanya`) 1806–1871 arasında 34 yerleşimde sürüyor
`almanya` künyesinin adı "Kutsal Roma 962-1806"dır. Buna karşın 6 Ağustos 1806 ile 18 Ocak 1871
arasında, ortada bir Alman devleti yokken, **34 yerleşim** `d:"almanya"` ile boyanıyor. Haritada
1806–1871 Almanyası tek renk görünüyor; Ren Konfederasyonu, Westfalya ve Berg künyeleri ise
**hiçbir yerleşime bağlı değil**. Bunlar Napolyon döneminin ana devletleri.

| yerleşim | atlas (1806–1871 içi) | kaynakta olması gereken (özet) |
|---|---|---|
| Hamburg, Bremen, Lübeck | 1281–1945 `almanya` | kendi künyeleri (`hamburg-sehri`, `bremen-sehri`, `lubeck-sehri` var, kullanılmıyor); 1811–1813/14 Fransız İmparatorluğu |
| Frankfurt | 1281–1945 `almanya` | `frankfurt-serbest-sehri` 1815–1866 (künye var, kullanılmıyor) → Prusya 1866 |
| Kassel | 1281–1945 `almanya` | Hessen-Kassel → **Westfalya Krallığı başkenti 1807–1813** → Kurhessen → Prusya 1866 |
| Düsseldorf, Dortmund, Münster | 1281–1815 `almanya` | Berg Büyük Dükalığı 1806–1813 (Münster ve Dortmund kısmen Fransa 1810–13) → Prusya 1815 |
| Erfurt | 1281–1815 `almanya` | Prusya 1802 → Fransız domeni 1806–1814 → Prusya 1815 |
| Mainz | 1281–1945 `almanya` | **Fransa 1797/1801–1814** (Lunéville 1801-02-09), Hessen-Darmstadt 1816 |
| Saarbrücken | 1281–1920 `almanya` | **Fransa 1797–1815**, Prusya 1815/16 (Aachen ve Köln için atlas bunu doğru yapıyor) |
| Nürnberg, Augsburg, Regensburg, Würzburg | 1281–1945 `almanya` | Bavyera (Augsburg 1806, Nürnberg 1806-09-15, Regensburg 1810, Würzburg 1814) — `bavyera` künyesi var |
| Ulm | 1281–1945 `almanya` | Bavyera 1802/03 → Württemberg 1810 |
| Freiburg, Konstanz | 1805-12-26 → 1945 `almanya` | Baden 1805/06–1918 (`baden` künyesi var) |
| İnnsbruck, Bregenz, Feldkirch, Landeck, Lienz, Brixen | 1805-12-26..1814-06-03 `almanya` | Pressburg ile **Bavyera'ya** geçtiler |
| Salzburg | 1809-10-14..1816-04-14 `almanya` | Bavyera 1810–1816 |
| Rostock | 1281–1945 `almanya` | Mecklenburg(-Schwerin) (künyeler var) |
| Osnabrück | 1281..1866-06-17 `almanya` | Prens-piskoposluk → Hannover 1803 → Westfalya/Fransa 1807–13 → Hannover 1815–1866 |
| Stralsund | 1815-06-09 → 1871 `almanya` | Prusya (devir 23 Ekim 1815) |
| Kiel, Flensburg, Aabenraa, Sønderborg, Haderslev, Tønder | 1864-10-30 → `almanya` | 1864–1866 Prusya-Avusturya ortak idaresi (Gastein 1865-08-14: Schleswig Prusya, Holstein Avusturya) → Prusya (ilhak 1866-12-24 yasası / 1867-01-12) |

Sınıf: **HAYALET + SINIR** [Ö]. Önerilen düzeltme: her şehre ara dönemleri kendi künyesiyle
yazmak (künyeler zaten var). Gereken yeni kronoloji maddeleri: Gastein 1865-08-14, Schleswig-Holstein
ilhakı 1866/67, Berg/Westfalya kuruluşu ve dağılışı (künye maddeleri var), 1810-12-13 Hanse
şehirlerinin Fransa'ya katılması. Bu iş **koşu gerektirir** ve Değişmez 2 yükü doğurur, bu yüzden
tek elden yapılmalı (aynı dosya: `yerlesimler.js` / `yerlesimler_avrupa.js` / `yerlesimler_zincir64.js`).

### B2 · Künye adı ile içeriği çelişiyor
`almanya` künyesinin adı "Kutsal Roma 962-1806"; künye ise 1945'e kadar sürüyor ve 1871–1945
Reich'ını boyuyor. Kullanıcı 1871–1945 arasında bu adı görüyorsa yanıltıcıdır
(`ad_not`: Emre kararı 14 Ekim). **ÇELİŞKİ** — bkz. Karar gereken K1.

### B3 · Kullanılmayan künyeler (haritada yok)
`elsass-lothringen` (Strazburg, Metz, Colmar ve Mulhouse 1871'de doğrudan `almanya` oluyor),
`ren-konfederasyonu`, `westfalya-krallik`, `berg-buyuk-dukaligi`, `frankfurt-serbest-sehri`,
`hamburg-sehri`, `bremen-sehri` ve `lubeck-sehri` hiçbir yerleşimin `s:` dizisinde yok
(kırılma dökümünde sıfır). Künye ve kronolojileri var ama harita göstermiyor. **EKSİK (harita)** [ölçüldü].

### B4 · 1949 öncesi boş geçmiş
Schwerin, Cottbus, Karl-Marx-Stadt (Chemnitz) ve Frankfurt (Oder) yerleşimlerinin `s:` dizisi
**1949-10-07'de başlıyor**; daha önceki bütün tarihleri yok (bu şehirler yüzyıllardır var).
1949 öncesinde bu peteklerin toprağı komşulara emiliyor. Sınıf **EKSİK (yerleşim geçmişi)**
[ölçüldü]. Öneri: Mecklenburg/Brandenburg/Saksonya/Prusya zincirleri yazılmalı.

### B5 · Değişmez 2 — kırılmalar ve maddeleri (±30 gün, hafif ölçüm)
Taranan kırılma günlerinin büyük çoğunluğunda madde var: 1742-06-11 Silezya
(`kronoloji_sinir_avrupa_orta`), paylaşımlar 1772/1793/1795, 1815-06-09, 1864-10-30, 1866-06-17 ve
1866-10-01 (`hannover` künyesi), 1871-01-18, 1871-05-10, 1920-01-10, 1920-06-15 (07-05 maddesi),
1922-06-03 (06-20), 1923-02-16, 1935-03-01, 1938-03-13, 1938-10-01, 1939-03-16/22, 1939-09-01,
1939-10-06 (10-08), 1945-06-05, 1945-08-02, 1947-12-15 (künye f), 1949, 1957-01-01, 1990-10-03.
**Madde bulunamayan / uzak kalan adaylar** (yalnız tarih deseniyle arandı; `denetle.py`
koşturulamadığı için **ölçülemedi**, kesin değil):
- **1940-08-02** Alsas-Loren'in fiilî ilhakı (Strazburg, Metz, Colmar, Mulhouse): en yakın madde 1940-06-22 mütarekesi (41 gün). → EKSİK-MADDE adayı: "Wagner ve Bürckel sivil idare şefi; Alsas-Loren fiilen Reich'a bağlandı" (gün teyit: 2 Ağustos 1940 atama kararnamesi).
- **1945-04-27** Avusturya'nın ayrılışı (16 yerleşim): madde Avusturya dosyalarında olabilir; Alman tarafında yok.
- **1918-12-27** Poznań (Büyük Polonya Ayaklanması) ve **1920-01-18** Toruń: Polonya dosyalarında aranmalı.
- **1805-12-26 / 1814-06-03 / 1816-04-14** Tirol ve Salzburg: B1 düzeltmesiyle birlikte ele alınmalı.

### B6 · Tarih yaklaşıklıkları (beyan önerisi)
- Poznań `1918-12-27`: ayaklanmanın başlangıcı; şehir Ocak 1919 başında Polonyalıların eline geçti, hukuken 1920-01-10'da devredildi → `ic_not` beyanı.
- Gdańsk `1793-01-23` (II. Paylaşım antlaşması); Prusya birlikleri 4 Nisan 1793'te girdi → beyan.
- Stettin `1945-06-05` → Polonya: Polonya idaresi Temmuz 1945 (Sovyet devri 5 Temmuz) → beyan ya da gün.
- Königsberg `1945-08-02` (Potsdam, hukukî); şehir 9 Nisan 1945'te düştü → beyan var mı kontrol.
- 1939-10-06 Łódź: Warthegau'ya katılış Kasım 1939 (9 Kasım) → beyan.

---

## C. Öteki yapılar

| # | konu | sınıf | öneri |
|---|---|---|---|
| C1 | **Kuzey Alman Konfederasyonu** (1866-08-18 Ağustos İttifakı; anayasa 1867-04-16, yürürlük 1867-07-01 → 1871-01-01) için künye yok; yalnız `kronoloji_almanya` 1867-04-16 maddesi var | EKSİK-DEVLET [Ö] | Künye açılmalı (ya da `prusya` künyesine §3.5 beyanı); kaynak: documentArchiv.de "Verfassung des Norddeutschen Bundes" |
| C2 | Heligoland (Britanya 1814 → Almanya 1890-07-01 Heligoland-Zanzibar Antlaşması) için yerleşim noktası ve madde yok | EKSİK-MADDE [Ö] | Nokta ve madde (1890-08-10 devir) |
| C3 | Berlin Duvarı (1961-08-13) yalnız `almanya-demokratik-cumhuriyeti` künye kronolojisinde var; `berlin-bati` künyesi var | — | uyumlu |
| C4 | Weimar ve Nazi dönemleri ayrı künye değil (§3.5 ②, `almanya` `ic_not_t`) | — | karar verilmiş; dokunulmadı |

---

## Karar gereken (Emre)
- **K1 · `almanya` künyesinin adı:** "Almanya (Kutsal Roma 962-1806)" adı 1871–1945'te görünüyor.
  *Önerim:* künyeyi bölmeden ada yalnız dönem ekle, örn. "Almanya (Kutsal Roma 962-1806 · Alman
  Reich'ı 1871-1945)". Ya da 1806–1871 boşluğunu B1'deki gibi kapatıp 1871'de `alman-imparatorlugu`
  künyesine geç (daha temiz, ama büyük iş).
- **K2 · B1 kapsamı:** 34 yerleşimin 1806–1871 zinciri tek elden ve koşudan önce yazılmalı.
  *Önerim:* KASA'da tek oturum; Avusturya oturumuyla (Tirol, Salzburg) ve Danimarka/İskandinavya
  oturumuyla (Schleswig) önceden konuşulmalı.
- **K3 · Oder-Neisse ve Kaliningrad gösterimi:** atlas Polonya için 1945-06-05'i (fiilî idare),
  Kaliningrad için 1945-08-02'yi (Potsdam) kullanıyor. İki ayrı ölçüt var. Hukukî kesinleşme
  1990-11-14 (Alman-Polonya Sınır Antlaşması). *Önerim:* mevcut günler kalsın, ikisine aynı tip
  `ic_not` beyanı eklensin ("fiilî idare / Potsdam; hukukî kesinleşme 1990-11-14"). Taraf tutan
  gün değişikliği önermiyorum.

## Sayılar
- Künye: 62 tarandı · 23'ünün kronolojisi okundu (~190 madde)
- `kronoloji_almanya.js`: 133 madde (1281 sonrası 127) tarandı
- Yerleşim: 5.630 içinden 691 Alman zinciri kırılması döküldü · 35 anahtar şehrin zinciri tam okundu
- **Bulgu:** A 19 · B 6 başlık (B1 = 34 yerleşim) · C 2 → **27 bulgu**
- Kaynakla teyit [T]: 2 madde (TDV *Prusya*) · öneri [Ö]: geri kalanı
- **Ölçülemedi:** `denetle.py` (Değişmez 1/2/3/8 çıktısı) — hafif kip; üretilmiş harita
  (`devletler_harita.js`/`donemler.js` çözülmedi); Alman akademik kaynaklarının (NDB, LeMO,
  documentArchiv, HLB) birebir okunması — web erişimi tek ajanla sınırlıydı. B5 adayları
  desen aramasıdır, Değişmez 2 ölçümü değildir.

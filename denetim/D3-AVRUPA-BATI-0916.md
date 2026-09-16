# D3-AVRUPA-BATI — 29 Ekim 1923 kara sınırları · KAYNAK ENVANTERİ (aşama ①) · 16 Eylül 2026

Şartname: `oturumlar/D-1923-0916.md` (DÜNYA KADROSU, D3-AVRUPA-BATI satırı) · şema `denetim/SEMA-D-0916.md`.
Kapsam: Britanya/İrlanda · Fransa · Benelüks · İberya · İtalya · İsviçre · İskandinavya · İzlanda +
"alfabetik ilk bölge" kuralı gereği ORTA ile ortak parçalar (Almanya · Avusturya · SHS · Finlandiya).

**Yöntem.** Üç paralel kaynak taraması. Dayanaklar: birincil antlaşma metinleri (Avalon/Yale,
LNTS, fedlex, gesetze.li, legislation.gov.uk, irishstatutebook.ie, Tractatenblad, Légifrance),
ABD Dışişleri *International Boundary Study* (IBS, FSU arşivi), akademik başvuru eserleri
(HLS, HLFL, SNL, Kramsch 2015). **Vikipedi hiçbir satırda dayanak değildir.** Yalnız Vikipedi'de
bulunan bilgi "bulunamadı" kovasına düştü. Alıntılar 15 kelimeyi geçmez.
Etiketler: [B] birincil · [A] akademik/IBS. **Atlas hiçbir satırda referans alınmadı.**

`bugünle aynı mı` sütunu 29.10.1923 → bugün değişimini gösterir: "HAYIR" = hat değişti (`true`);
"EVET/AYNI" yalnız bir kaynak bunu söylüyorsa (`false`); değişiklik belgesi arandığı hâlde
bulunamadıysa **"bulunamadı → `null`"** (şema: `false` DEĞİL).

## 0. ÖZET (sayım bu dosyanın satırlarından, elle)

```
kara sınırı parçası          44   (bölüm 1: 15 · bölüm 2: 5 · bölüm 3: 24)
  D                          28   (ikisi ÖNERİM, koordinatör kararı: 1.1 Alsas-Loren · 2.1 İrlanda)
  karışık (D + C alt kesim)   6   (1.5 · 1.6 · 1.11 · 1.13 · 3.5 · 3.6)
  C / fiili                  10   (1.14 · 3.7-3.10 · 3.18 · 3.19 · 3.21-3.23)
kayıt YAZILMAYACAK notlar     6   (2.5 NO–SSCB yok · 2.7 Svalbard terra nullius · 2.8 Åland ·
                                  2.9 İzlanda · 2.10 Faroe/Grönland · 3.11 Vatikan yok)
künyesi YOK diye YAZILAMAZ    9   (1.2 Saar · 1.13-1.14 Lihtenştayn · 3.8-3.9 Fiume ·
                                  3.10 San Marino · 3.12 Monako · 3.18-3.19 Andorra)
bugünle: DEĞİŞTİ (true) 20 · AYNI (false) 10 · BİLİNMİYOR (null) 14
IBS okunan                    9   (4 · 7 · 11 · 12 · 24 · 31 · 58 · 74 · 81)
```
⚠️ `değişti` satır başına tek değer: "hat aynı, taraf değişti" (2.4) `true`; "hâlâ çizilmemiş/tartışmalı"
(3.21 · 3.23) `false` (1923 hâli sürüyor); değişiklik belgesi bulunamayanlar `null`.

---

## 1. Fransa · Benelüks · İsviçre · Lihtenştayn · Danimarka (Almanya/Avusturya ile ortak parçalar dahil)

| # | parça | taraflar (devletler.js) | 29.10.1923 dayanağı | delimitasyon / protokol | kategori | bugünle aynı mı | kaynak |
|---|---|---|---|---|---|---|---|
| 1.1 | Alsas-Loren | fransa-cumhuriyet – almanya | Versailles md. 27/3 ("18 Temmuz 1870 sınırı") · md. 51 (1871 öncesi sınır antlaşmaları yeniden yürürlükte, 11.11.1918'den geçerli) | ayrıntılı delimitasyon antlaşması **14.08.1925** (1923'ten SONRA) | **D (önerim)** — hat md. 27/51 ile hukuken belliydi; ayrıntılı işaretleme sonra. `tahdit.t:"1925-08-14"`. **Koordinatör onayı gerekiyor** | HAYIR, küçük: 1925 Ren talvegi · 1956 (Basel–Kembs orta hat) · 13.04.2000 (düzenlenmiş Ren'de sabit orta hat) · Mundat ormanı (1949 Fransız yönetimi; 1962 antlaşması onaylanmadı; 1984-86 çözümü **bulunamadı** — yalnız ikincil) | [B] Avalon Versailles partii/partiii · [B] Senat rap. l01-276 · [A] JSTOR 24240873 (yalnız başlık) |
| 1.2 | Fransa–Saar | fransa-cumhuriyet – **Saar Havzası (MC idaresi) — KÜNYE YOK** | Versailles md. 45–50 + Ek; md. 48: güney hattı "frontier of France as fixed by the present Treaty" | md. 48 komisyonunun protokolü **21.12.1921** | **D** | hat bugün FR–DE sınırı (Saarland kesimi); sonraki değişiklik **bulunamadı** → `null` | [B] Avalon partiii · [B] BnF kaydı cb33903988s |
| 1.3 | Eupen-Malmedy + Moresnet | belcika – almanya | Versailles md. 32–35; md. 35 komisyonu (7 üye) bağlayıcı | Belçika-Alman Sınır Komisyonu raporu, Aachen **06.11.1922** (Moniteur 07.03.1925). Vennbahn yatağı Belçika'ya → Alman eksklavları (**adlar/sayı bulunamadı** — yalnız ikincil) | **D** | HAYIR: 10.05.1935 takası (~1,7 km²) · 1949 geçici devirler · **24.09.1956 antlaşması** (yürürlük 10.09.1958) | [A] IBS 7 · [B] Avalon partiii |
| 1.4 | Hollanda–Almanya | hollanda – almanya | Versailles değiştirmedi. Viyana 31.05.1815 · Aachen 26.06.1816 · Meppen 02.07.1824 · Aachen 11.12.1868 | 1816/1824 ayrıntılı delimitasyon | **kara D** · Ems-Dollart haliç hattı ihtilaflı (deniz — kapsam dışı) | HAYIR: 1949 geçici devirler (Elten, Selfkant) · **08.04.1960 antlaşması** (yürürlük 10.06.1963, 43 düzeltme) · 30.10.1980 düzeltmeleri | [A] IBS 31 |
| 1.5 | Lüksemburg–Almanya | luksemburg – almanya | Versailles md. 27/2 ("3 Ağustos 1914 sınırı") · Aachen 26.06.1816 · Kleve 07.10.1816; Mosel-Sauer-Our ortak sular | 1816 antlaşması | **çizgi D · ortak su kesimi C** (kondominyum yorumu ihtilaflı) | HAYIR, küçük: 19.12.1984 antlaşması (kondominyum teyidi; 3,96 ha ↔ 4,69 ha). 1949 yönetimi/1959 iadesi **bulunamadı** (yalnız Vikipedi) | [B] BT Drs. 11/477 · [B] ACT Lüksemburg |
| 1.6 | Belçika–Hollanda | belcika – hollanda | Londra 19.04.1839 · Maastricht Sınır Sözleşmesi 08.08.1843 | 1843 tasvirî tutanak + harita | **D · Baarle'nin iki parseli C** (belgeler arası çelişki) | HAYIR: UAD 20.06.1959 (iki parsel Belçika'ya) · 28.11.2016 Maas antlaşması (yürürlük 01.01.2018) | [A/B] UAD dava 38 · [B] Trb. 2016/196 |
| 1.7 | Belçika–Fransa | belcika – fransa-cumhuriyet | Kortrijk Sınır Antlaşması 28.03.1820 | antlaşmanın kendisi | **D** | değişiklik belgesi **bulunamadı** → `null` | [B] ACT Lüksemburg (aynı antlaşmayı anıyor); BE–FR birincil metni **açılmadı** |
| 1.8 | Belçika–Lüksemburg | belcika – luksemburg | Londra 1839 · Maastricht 07.08.1843 | tutanaklar antlaşmanın parçası | **D** | değişiklik **bulunamadı** → `null` | [B] ACT Lüksemburg |
| 1.9 | Fransa–Lüksemburg | fransa-cumhuriyet – luksemburg | Kortrijk 28.03.1820 (1853 komisyonu) | 1820 | **D** | HAYIR, küçük: 1963 · 1989 · 15.03.2000 · 20.01.2006 Belval takası | [B] ACT · [B] Senat rap. l06-232 · [B] Légifrance 2002-1188 |
| 1.10 | Fransa–İsviçre | fransa-cumhuriyet – isvicre | Paris 1814 · Viyana 20.03.1815 · Bern 09.07.1818 · Neuchâtel 04.11.1824 · Dappes 08.12.1862 · Turin 16.03.1816 | 1818 · 1824 | **D** | HAYIR, küçük: 25.02.1953 (yürürlük 1957; 14 düzeltme + Leman) · 18.09.1996 iki sözleşme · Senat: 1959-2002 arası 7 değişiklik. Basel-Mulhouse havalimanı egemenliği değiştirmedi | [A] IBS 11 · [A] HLS "Savoyen" · [B] Légifrance 2000-227/228 |
| 1.11 | İsviçre–Almanya | isvicre – almanya | Versailles md. 27/4 ("the present frontier") · Untersee/Konstanz: 1854 · 1878 · 24.06.1879 | yukarıdakiler; kara kesimlerinin 19. yy temel antlaşma listesi **bulunamadı** | **kara + Untersee D · Bodensee Obersee C** (hiç çizilmedi) | HAYIR: **23.11.1964 antlaşması** (yürürlük 04.10.1967; eşit alan takası 529.912 m²; Verenahof). Büsingen hâlâ eksklav | [B] fedlex SR 0.132.136.3 · [A] Kramsch 2015 |
| 1.12 | İsviçre–Avusturya | isvicre – avusturya-cumhuriyet | Ren düzenlemesi antlaşması 30.12.1892 (Eski Ren ortası) | ölçülmedi | **D** (Diepoldsau kanalına uyarlama sonra) | HAYIR: 1924 · 1954 Ren antlaşmaları · **20.07.1970 sınır antlaşması** (yürürlük 1972). Diepoldsau 9,7 ha **bulunamadı** (yalnız Vikipedi) | [B] BMEIA antlaşma listesi |
| 1.13 | Lihtenştayn–İsviçre | **Lihtenştayn — KÜNYE YOK** – isvicre | Ren kesimi: 31.08.1847 (orta hat); güney (Balzers/Luziensteig) dayanaksız | yok | **Ren D · Ren–Würznerhorn C/fiili** (1948 önsözü dayanak eksikliğini kendisi söylüyor) | HAYIR: 23.12.1948 (yürürlük 1949; Ellhorn İsviçre'ye) · 1955 | [B] LGBl 1949 Nr. 19 · [A] HLFL "Grenzen" |
| 1.14 | Lihtenştayn–Avusturya | **Lihtenştayn — KÜNYE YOK** – avusturya-cumhuriyet | 1960 öncesi bütünlüklü antlaşma **bulunamadı** | yok | **fiili** (Sareis Alp belirsiz) | HAYIR: 17.03.1960 (BGBl 228/1960; metin okunamadı — RIS 503) | [A] HLFL "Grenzen" |
| 1.15 | Danimarka–Almanya | danimarka – almanya | Versailles md. 109–114 · halk oylamaları 10.02 / 14.03.1920 · Paris Schleswig antlaşması 05.07.1920 | md. 111 komisyonu (7 üye); tasvir Paris **03.09.1921**; 1:5.000, 18 pafta | **D** | kara hattı AYNI (IBS 81 anlaşmazlık kaydetmiyor) → `false`, kaynak IBS 81 | [A] IBS 81 · [B] Avalon partiii |

## 2. Britanya/İrlanda · İskandinavya · İzlanda (Finlandiya ile ortak parçalar dahil)

| # | parça | taraflar | 29.10.1923 dayanağı | delimitasyon / protokol | kategori | bugünle aynı mı | kaynak |
|---|---|---|---|---|---|---|---|
| 2.1 | İrlanda iç sınırı | irlanda-serbest-devlet – ingiltere | Government of Ireland Act 1920 s.1(2) (altı kontluk + iki ilçe) · İngiliz-İrlanda Antlaşması 06.12.1921 md. 11–12 | ayrı delimitasyon yok (kontluk sınırları). Md. 12 komisyonu 29.10.1923'te **KURULMAMIŞTI** (ilk toplantı 06.11.1924); 03.12.1925 anlaşması komisyonu kaldırıp hattı s.1(2) olarak sabitledi | **D (önerim)**, `not`: "md. 12 revizyonu askıda (1923-25), hiç uygulanmadı" — şartname md. 4'e göre **C/fiili de savunulabilir → koordinatör kararı** | EVET (kara); açık meseleler yalnız denizde (Foyle, Carlingford) → `false` | [B] legislation.gov.uk ukpga/1920/67 s.1 · [B] irishstatutebook 1922/act/1 · [B] irishstatutebook 1925/act/40 · History Ireland (Moore; ikincil, yalnız komisyon kronolojisi) |
| 2.2 | Norveç–İsveç | norvec – isvec | Strömstad antlaşması 02.10.1751 + Lapp ek maddesi; Karlstad 26.10.1905 (tarafsız bölge, hat değişmedi) | işaretleme 1752-66; 25 yılda bir ortak denetim | **D** | EVET (SNL: antlaşma hâlâ geçerli) → `false` | [A] SNL "riksgrensen" · [B] UNISPAL 1905 (yalnız başlık) |
| 2.3 | Norveç–Finlandiya, batı (Treriksröset → Mutkavaara) | norvec – finlandiya | Strömstad 1751 (Finlandiya → 1809 Rusya → 1917 Finlandiya) · 1826 sözleşmesi | Treriksröset 1897 | **D** | EVET → `false` | [A] SNL · [B] MML stateboundaries · [B] Finlex 2026/471 |
| 2.4 | Norveç–Finlandiya, Petsamo (Mutkavaara → Jakobselv, ~196 km) | norvec – finlandiya | Tartu barışı 14.10.1920 md. 4 (hat = "the former frontier between Russia and Norway", yani 1826 hattı + 1896 işaretlemesi) | ikili Norveç–Finlandiya sözleşmesi 28.04.1924 (SONRA; md. I 1896 işaretlemesini korur); harita 15.10.1925 | **D** | **HAT evet, TARAF hayır**: 1944/1947 Petsamo SSCB'ye → Norveç–SSCB; 1947 protokolü (yürürlük 1949), talveg farkı. `degisti:true` (taraf değişti), geometri vekili kullanılabilir ama ülke çifti NO–RU | [A] IBS 24 · [A] IBS 74 · [B] LNTS c.3 No. 91 · [B] LNTS c.30 No. 758 |
| 2.5 | Norveç–SSCB | — | **29.10.1923'te ORTAK KARA SINIRI YOK** | — | — (kayıt yazılmaz) | 1944'ten beri var | [A] IBS 24 |
| 2.6 | İsveç–Finlandiya | isvec – finlandiya | Fredrikshamn 17.09.1809 md. V (Torne–Muonio) · 1810 sözleşmesi · 1821/1823 · 1888 · 1892 · 1901 (onay 1907) | aynı belgeler | **D** | kara/ırmak hattı EVET; küçük: 1926-29 takımada düz çizgileri · 1985 Märket · 2006 denetimi (yürürlük 2010). Irmak adaları talvegle kayabilir → `false` + `not` | [B] MML "Suomen–Ruotsin rajankäynti 2006" §2.1-2.2 · [A] IBS 24 |
| 2.7 | Svalbard | — | **terra nullius** — Paris antlaşması 09.02.1920 imzalı, **yürürlük 14.08.1925** | — | kara sınırı yok; harita için **boş** (Norveç boyanmaz) — HARITA-VERI'ye not | 1925'ten beri Norveç | [B] Stortinget "The Svalbard Treaty" |
| 2.8 | Åland | finlandiya | MC Konseyi 24.06.1921 · sözleşme 20.10.1921 (LNTS c.9 No. 255) | — | statü notu, kara sınırı yok | aynı | [B] LNTS kaydı (açılmadı — arama sonucu) |
| 2.9 | İzlanda | izlanda | Birlik Yasası, yürürlük 01.12.1918 | — | kara sınırı yok | 1944 cumhuriyet | Britannica (ikincil); birincil **okunmadı** |
| 2.10 | Faroe · Grönland | danimarka | Danimarka egemenliği; Doğu Grönland anlaşmazlığı 1931'de başlar | — | 1923 için ilgisiz | aynı | UDAD A/B No. 53 (**açılmadı**) |

## 3. İtalya · İberya · mikro devletler

| # | parça | taraflar | 29.10.1923 dayanağı | delimitasyon / protokol | kategori | bugünle aynı mı | kaynak |
|---|---|---|---|---|---|---|---|
| 3.1 | Alpler, Mont Dolent → Akdeniz | italya – fransa-cumhuriyet | Torino Antl. 24.03.1860 · Torino sınır sözl. 07.03.1861 | 1861; 1874 Mont-Cenis düzeltmesi | **D** | HAYIR: 1930 küçük düzeltme · **1947 Paris md. 2**: 5 alan Fransa'ya, toplam 693,2 km² (Tende-Brigue 543,6 · Mont Cenis 82,4 · P. St-Bernard 31 · Chaberton 17,1 · Thabor) · 1948 ~200 m | [A] IBS 4 · [B] UK TS 1948/50 |
| 3.2 | Dolent → Cima Garibaldi (eski kesim) | italya – isvicre | Varese 02.08.1752 · Lugano 05.10.1861 · 27.08.1863 · Bern 25.11.1895 · Roma 1903/04/06 | 1863-68 · 1891-95 demarkasyonları | **D** (üç su-bölümü anlaşmazlığı 1929 Bildirisi'ne kadar açık — `not`) | HAYIR, küçük: 22.03.1929 · 24.07.1941 · Val di Lei 1949/52 (~1 km²) · 1951 · 1952 | [A] IBS 12 |
| 3.3 | Cima Garibaldi → Piz Lad (yeni kesim, 53,5 km) | italya – isvicre | Saint-Germain 10.09.1919 (eski AT–CH hattı devralındı) | yeniden demarkasyon 1920-27; notalar 03.10.1927 · 22.08.1928 | **D** · `tahdit.t:"1927"` | EVET → `false` | [A] IBS 12 |
| 3.4 | Campione d'Italia anklavı | italya – isvicre | Varese 1752 sistemi | 1920-27 | **D** | değişiklik **bulunamadı** → `null` | [A] IBS 12 |
| 3.5 | Brenner/Resia/Karn Alpleri (Tarvisio dahil) | italya – avusturya-cumhuriyet | Saint-Germain md. 27(2) | Büyükelçiler Konf. 22.07.1920; üçlü nokta procès-verbal 22.06.1922; **demarkasyon 1924'te bitti** | **su-bölümü kesimleri D · metinde "to be fixed on the ground" denen 3 alt kesim C** (Reschen–Nauders · Winnbach–Arnbach · Gailitz/Thörl) | EVET (1947 md. 1 ve 1955 Devlet Antl. md. 5 teyit) → `false` | [A] IBS 58 |
| 3.6 | Peč → Castua (Rapallo hattı) | italya – yugoslavya | Rapallo 12.11.1920 md. 1, 5 (LNTS 18) | karma komisyon 1921-26; Planina–Rakek–Javorniki 1924'te kesinleşti | **su-bölümü (Jalovec–Triglav–Možic) D · kalanı C** (yerde işaretlenmemiş) | HAYIR, neredeyse tamamı kalktı (1947 md. 3, 1975 Osimo). Yalnız kuzey ucu (Peč → Udine/Gorizia kavşağı) duruyor, uzunluğu **ölçülmedi** | [B] Rapallo metni (forost) · [B] UK TS 1948/50 · komisyon tarihleri yalnız müze sayfasında (akademik **değil**) |
| 3.7 | Zara anklavı | italya – yugoslavya | Rapallo md. 2, 5 | Roma Anl. 23.10.1922 Bölüm I (LNTS 18) | **C** (demarkasyon tarihi **bulunamadı**) | HAYIR — 1947 md. 11, sınır kalktı | [B] 1922 metni (forost) |
| 3.8 | Fiume batısı (Mattuglie–Preluca) | italya – **Fiume Serbest Devleti — KÜNYE YOK** | Rapallo md. 4(b) "to be fixed on the ground" | md. 5 komisyonu | **C/fiili** — 1924 anlaşmasının girişi devletin kurulamadığını kaydediyor; 1923'te İtalyan askerî yönetimi (Giardino valiliği günü **bulunamadı** — yalnız Vikipedi) | HAYIR — Roma 27.01.1924 ile İtalya'ya katıldı | [B] Rapallo · [B] Roma 1924 (LNTS 24) |
| 3.9 | Fiume–Sušak / Castua | **Fiume — KÜNYE YOK** – yugoslavya | Rapallo md. 4 · Roma 23.10.1922 Bölüm II (Abbazia komisyonu, 1 ay) | komisyonun 1923'e kadarki sonucu **bulunamadı** | **C/fiili** (Port Baross + Delta tartışmalı) | HAYIR — 1924 md. 1/3/7; 1947'de kalktı | [B] 1922 · 1924 metinleri |
| 3.10 | San Marino çevresi | italya – **San Marino — KÜNYE YOK** | tarihî: Fossombrone 1463 | modern delimitasyon **bulunamadı** | **C/fiili (önerim)** — anlaşmazlık kaydı yok ama akademik dayanak **bulunamadı**; D demek için belge yok | değişiklik bulunamadı → `null` | geçerli kaynak **bulunamadı** (yalnız encyclopedia.com) |
| 3.11 | Vatikan | — | **1923'te devlet YOK** — Lateran 11.02.1929 md. 3 | — | kayıt yazılmaz | 1929 | [B] vatican.va Lateran metni |
| 3.12 | Monako çevresi | fransa-cumhuriyet – **Monako — KÜNYE YOK** | Paris Antl. 02.02.1861 md. 1 (karma komisyon çizecek) | komisyon sonucu **bulunamadı**; batı kesimi 1760 (yalnız Vikipedi — doğrulanmadı) | **D (antlaşma) · demarkasyon ölçülemedi** → `kesinlik_not` | kara için değişiklik bulunamadı → `null` | [B] Legimonaco 1861 |
| 3.13 | Pireneler: Bidasoa → Navarra | fransa-cumhuriyet – ispanya | Bayonne 02.12.1856 + ek 28.12.1858 | ekler | **D** | değişiklik belgesi **bulunamadı** → `null` | [B] UNTS 1142 No. 838 |
| 3.14 | Sülün Adası ortak egemenliği | fransa-cumhuriyet – ispanya | Bayonne 1856 md. 27 ("par indivis"), md. 9 talveg | — | **D** (kondominyum — `not`) | değişiklik bulunamadı → `null` | [B] UNTS 1142 |
| 3.15 | Navarra doğusu → Andorra | fransa-cumhuriyet – ispanya | Bayonne 14.04.1862 | taş dikme tutanağı 27.02.1863 | **D** | bulunamadı → `null` | BFSP c.52 s.156 (UNTS 1288 dipnotundan; **açılmadı**) |
| 3.16 | Andorra → Akdeniz | fransa-cumhuriyet – ispanya | Bayonne 26.05.1866 + ek · Nihaî Akit 11.07.1868 | 1868 akdi | **D** | bulunamadı → `null` | [B] UNTS 1288 No. 907 |
| 3.17 | Llívia anklavı | fransa-cumhuriyet – ispanya | Bayonne 1866 md. XVI · Llívia 1660 | aynı | **D** | bulunamadı → `null` | [B] UNTS 1288 No. 907 |
| 3.18 | Andorra kuzeyi | **Andorra — KÜNYE YOK** – fransa-cumhuriyet | antlaşma YOK (örf, 18. yy Fransız mahkeme kararları) | yok | **C/fiili** (örfî) | HAYIR: 12.09.2000 takası (2 × 15.595 m²) · delimitasyon 06.03.2012 · demarkasyon 16.06.2022 | [B] Senat rap. l00-328 · [B] Légifrance JORFTEXT000031249368 · [B] AN rap. 5L16B1858 |
| 3.19 | Andorra güneyi | **Andorra — KÜNYE YOK** – ispanya | antlaşma **bulunamadı** | yok | **C/fiili** | bulunamadı → `null` | [B] AN raporu (Fransız dışişleri de bilmiyor) |
| 3.20 | Minho ağzı → Caia/Guadiana | ispanya – portekiz | Lizbon Antl. 29.09.1864 (md. XXIII Caia'da biter) + Ekler 04.11.1866; Couto Misto İspanya'ya (md. VII) | 1866 ekleri + talimat 07.07.1866 | **D** | bulunamadı → `null` | [B] UNTS 1288 No. 906 (AMN kopyası) · [B] Portekiz Dışişleri |
| 3.21 | Caia → Cuncos (Olivenza) | ispanya – portekiz | antlaşma YOK — Portekiz hattı yalnız Caia'ya kadar kabul etti | yok | **C/fiili** (tartışmalı) | hâlâ çizilmemiş | [A] Santos Sánchez, *BAGE* 104 (2025) · [B] Portekiz Dışişleri |
| 3.22 | Cuncos → Guadiana ağzı | ispanya – portekiz | **1923'te antlaşma YOK** | Lizbon 29.06.1926 (onay 1927) — SONRA | **C/fiili** | 1926'dan beri o hat → `true` | [A] BAGE · [B] Portekiz Dışişleri |
| 3.23 | Cebelitarık kıstağı | ispanya – ingiltere (Cebelitarık — ayrı künye YOK) | Utrecht 13.07.1713 md. X yalnız kent-kale-liman; kıstak devredilmedi | yok | **C/fiili** | hâlâ tartışmalı | [B] İspanya Dışişleri (taraf beyanı) · md. X birincil metni **doğrulanmadı** |
| 3.24 | Melilla çevresi | ispanya – fas (1912'den İspanyol koruma bölgesi; egemen Sultan — koruma bölgesinin ayrı künyesi yok) | Tetuan 24.08.1859 · Wad-Ras 26.04.1860 · Madrid 30.10.1861 | Tanca akdi 21.06.1862 · 14.11.1863 · 01.05.1891 · Merakeş 05.03.1894 | **D** (1921-23 Rif Savaşı art bölgeyi fiilen etkiliyor — `not`) | EVET (İspanya hükümeti bugünkü sınırı bu belgelere dayandırıyor) → `false` | [B] İspanya hükümeti meclis cevabı 18.11.2022 |
| 3.25 | Ceuta çevresi | ispanya – fas | Wad-Ras 26.04.1860 | Ceuta'ya özgü demarkasyon akdi **bulunamadı** | **D (antlaşma) · demarkasyon ölçülemedi** | bulunamadı → `null` | aynı meclis cevabı |

⚠️ **3.24-3.25 sahipliği:** D-1923 kuralı ("ortak sınır alfabetik ilk bölgenin") gereği
`D3-AVRUPA-BATI < D4-ORTADOGU` → bende. D4-ORTADOGU'ya tahtadan bildirilecek.

---

## 4. KAYNAK ÇELİŞKİLERİ (taraf seçilmedi)

1. **Tartu barışının yürürlüğe girişi:** IBS 74 → 14.02.1921 Helsinki · LNTS c.3 → 31.12.1920 Moskova.
2. **1924 Norveç–Finlandiya sözleşmesinin yeri:** IBS 24 "LNTS 49:62" · gerçek yer LNTS c.30 No. 758 s.49-62.
3. **IBS 24 "Finlandiya–Norveç 1918-1944":** Petsamo hukuken 1920 sonunda devredildi; 1918-20 arası Rusya–Norveç.
4. **IBS 11 kendi içinde:** Paris Antlaşması "30 Mayıs 1814" / "20 Mayıs 1814".
5. **IBS 7:** "1946 treaty" (bağlama göre 1956).
6. **1949 Paris belgesi:** IBS 31 "Protocol 22.03.1949" · IBS 7 "Communique 29.03.1949".
7. **Ems antlaşması:** IBS 31 içinde 08.04.1960 / 08.08.1960.
8. **Belval takası:** gouvernement.lu 8,96 ha · Senat 8 ha 76 a 79 ca.
9. **LU–DE nehir sınırı:** 127,929 km / 127,979 km.
10. **Dappes:** IBS 746,5 ha · HLS "7 km²" (yuvarlama).
11. **Svalbard Storting onayı "24 Temmuz 1924":** yalnız özetleyicinin çıktısı, doğrulanmadı.
12. **Ara özetleyici hatası:** Versailles md. 111 komisyonu 7 üyeli (özetleyici "5" dedi; 5 üyeli olan md. 109).
13. **Andorra takas alanı:** Senat 15.595 m² (iki yerde) · bir arama özeti 15.925 m² (kaynak metni değil).
14. **Andorra delimitasyon tarihi:** AN raporunun bir paragrafı "Mart 2022" · aynı rapor başka yerde ve Légifrance 06.03.2012.
15. **AN raportörü:** "Andorra'yı İspanya tarafında sınırlayan en yeni metin 26.05.1866" diyor; o metin FR–ES antlaşması.
16. **Melilla demarkasyon akdi:** hükümet 21.06.1862 · basın 26.06.1862.
17. **Melilla yeniden aplikasyon akdi:** hükümet 01.05.1891 · bir özet 29.04.1891.
18. **Peč üçlü noktası:** IBS 58 "nokta 1509" · Rapallo md. 1 "nokta 1511".
19. **IBS 4 alan toplamı:** toplam 693,2 km², sayılan dört alan 674,1 km²; farkın (~19 km²) Thabor'a düştüğü bir TÜRETMEDİR, kaynak Thabor alanı vermiyor.
20. **Lizbon 1864:** Vikipedi kaynaklı "1868 Santiago / 05.11.1868" iddiası · UNTS ekler için 04.11.1866 (Vikipedi iddiası doğrulanmadı).

## 5. BULUNAMADI (kaynak arandı, yok ya da okunamadı)

- BE–FR ve BE–LU'nun 1923 sonrası değişiklik belgesi · FR–Saar'ın 1921 sonrası değişikliği
- CH–DE kara kesimlerinin 19. yy temel antlaşma listesi · LI–AT'nin 1960 öncesi yazılı dayanağı
- Diepoldsau 9,7 ha · Mundat 1984-86 çözümü · LU–DE 1949/1959 · Vennbahn eksklav adları · MC'nin Eupen-Malmedy kararı (20.09.1920) · NL–BE 2016 hektarları — **hepsi yalnız Vikipedi/haber/blog'da**
- Norveç–İsveç güney ucunun 1658 sonrası protokolü · 1905 tarafsız bölge maddesi ve kaldırılışı
- Kuzey İrlanda çekilme dilekçesinin günü (7/8 Aralık 1922) · İrlanda Serbest Devleti kuruluş günü birincil kaynaktan
- Rapallo'nun yürürlük günü · İtalya–SHS komisyonunun 1921-26 tarihleri için akademik kaynak (sistory.si 403) · Giardino'nun Fiume valiliği (17.09.1923, yalnız Vikipedi) · 1922 Fiume komisyonunun 1923'e kadarki işi
- Monako 1861 komisyonunun sonucu · 1760 Turbie birincil metni · San Marino'nun akademik dayanağı · İspanya–Andorra için herhangi bir belge
- FR–ES ve ES–PT'nin 1923 sonrası değişiklikleri · Ceuta'nın 1860 sonrası demarkasyonu · Cebelitarık çiti (1909) birincil kaynağı · AT–IT demarkasyonunun Büyükelçiler Konf. onay günü
- **Okunamadı (yok DEĞİL):** AustLII Saint-Germain (403) · Britannica · USNI · Cairn · sistory.si · UK Commons Library (403) · Dialnet (bağlantı yok) · Pyrénées-Atlantiques valiliği 1856 PDF'i (000) · Kartverket (zaman aşımı) · RIS BGBl 228/1960 (503)
- IBS'de şu çiftlerin çalışması YOK: FR–ES · ES–PT · IT–YU · Monako · Andorra · San Marino · Cebelitarık · Ceuta/Melilla · FR–DE · LU–(BE,FR,DE) · LI–(CH,AT) · CH–DE · CH–AT · BE–NL · BE–FR · IE–UK · SE–FI · NO–SE · FI–NO

## 6. ÇALIŞAN IBS ADRESLERİ (HTTP 200, içerik pypdf ile okundu)

Liste: https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/numericalibs.html
```
IBS  4  France–Italy                …/LimitsinSeas/pdf/ibs004.pdf
IBS  7  Belgium–Germany (1961)      …/LimitsinSeas/pdf/ibs007.pdf
IBS 11  France–Switzerland (1961)   …/LimitsinSeas/pdf/ibs011.pdf
IBS 12  Italy–Switzerland           …/LimitsinSeas/pdf/ibs012.pdf
IBS 24  Norway–USSR (rev. 1978)     …/LimitsinSeas/pdf/ibs024.pdf
IBS 31  Germany–Netherlands (1964)  …/LimitsinSeas/pdf/ibs031.pdf
IBS 58  Austria–Italy (rev.)        …/LimitsinSeas/pdf/ibs058.pdf
IBS 74  Finland–USSR (1967)         …/LimitsinSeas/pdf/ibs074.pdf
IBS 81  Denmark–Germany (1968)      …/LimitsinSeas/pdf/ibs081.pdf
önek: https://library.law.fsu.edu/Digital-Collections
```
⚠️ Eski FSU adresi (`law.fsu.edu/library/collection/LimitsinSeas/IBSnnn.pdf`) 301 → 404.

## 7. KÜNYE EKSİKLERİ (D-KUNYE'ye tahtadan bildirildi, M-4059)

`devletler.js`te 1923 sınır tarafı olup künyesi bulunamayanlar: Monako · San Marino · Andorra ·
Lihtenştayn · Saar Havzası Bölgesi (1920-35) · Fiume Serbest Devleti (1920-24) · Cebelitarik (UK).
`harita:` anahtarı boş olanlar: `fransa-cumhuriyet` · `avusturya-cumhuriyet` · `irlanda-serbest-devlet`.
⇒ Künyesi olmayan taraflı parçalar **veri aşamasında yazılamaz** (şema: `taraflar` künye id'si ZORUNLU).

## 8. ŞEMA NOTU

`SEMA-D-0916.md` D3 için `data/d_sinirlar_avrupa.js` → `window.D_SINIRLAR_AVRUPA` diyor; DÜNYA KADROSU
tablosu D3'ü ikiye bölüp bana `data/d_sinirlar_avrupa_bati.js` veriyor. Kadroyu esas alıyorum:
**`data/d_sinirlar_avrupa_bati.js` → `window.D_SINIRLAR_AVRUPA_BATI`** (§7 ad alanı kuralı). D-KATMAN'a bildirilecek.

# DİZİN EKSİKSİZLİK DENETİMİ — 22 Kasım 2026 (LAB 21 KASIM)

Yalnız ölçüm; veri yazılmadı. Ağaç: `origin/main` (worktree `lab-dizin`). Ölçüm aracı: `arac/dizin_denetim.js` (+ `dizin_olc.js`); `index.html`deki `<script src="data/…">` dosyalarını bir `vm` içinde yükler (tarayıcıdaki gibi: `YERLESIMLER_*` dizileri `window.YERLESIMLER`e katılır). Yeniden üret: `py arac/kodla.py coz-c data data/devletler_harita.js` · `node arac/dizin_denetim.js > cikti.json` · `node arac/dizin_rapor.js cikti.json`.

## 0. Evren
| Küme | Sayı |
|---|---|
| OLAYLAR* maddeleri (158 dizi) | 5193 |
| KRONOLOJI* maddeleri (167 dizi) | 13683 |
| KISILER / PADISAHLAR | 288 / 41 |
| SAVASLAR / ANTLASMALAR / SERILER | 168 / 42 / 16 |
| SEHIRLER / DEVLETLER | 79 / 2315 |
| YERLESIMLER (birleşik) | 5648 |

> **Madde evreni iki kısımdır.** `olaylar` (app.js) yalnız `OLAYLAR*`i okur; `KRONOLOJI*` ayrı dosyalardır (devlet/dünya kronolojileri). Aşağıda bağlantı sayımı ikisini BİRLİKTE (`M = OLAYLAR* ∪ KRONOLOJI*`) tarar; Kartvizit bağı yalnız `OLAYLAR*`ten (app'in `VEFAT_INDEX`i ile aynı).

## 1. Özet tablosu
| # | Ölçüt | Sonuç |
|---|---|---|
| 1a | Maddelerde `kisiler:` alanı olan madde / parça (virgülle bölünmüş ad) | 4955 / 8188 |
| 1a | … dizinde TAM ad eşleşen / sözcük-kümesi / kısmi | 1130 / 225 / 199 |
| 1a | … dizinde **YOK** (parça · benzersiz ad) | 6634 · 4000 |
| 1a | `vefat_id`/`kisi_id` → dizinde olmayan kimlik | 0 (referans 38) |
| 1b | Savaş: dizinde olup hiçbir maddeyle (±5 gün + ad) eşleşmeyen | 23 / 168 |
| 1b | Antlaşma: dizinde olup hiçbir maddeyle eşleşmeyen | 2 / 42 |
| 1b | `antlasma_id` → ANTLASMA_MADDELERI'nde olmayan | 0 (referans 40) |
| 1b | `sefer_id` → SEFERLER'de olmayan benzersiz kimlik | 0 (referans 292; SEFERLER 302, id'li 236) |
| 1c | Devlet kimliği referansı: benzersiz / **DEVLETLER'de olmayan** | 2050 / 33 |
| 1c | `taraflar:` serbest metin olan madde (kimlik değil → dizinle bağlanamaz) | 434 |
| 1d | `yer_id`/`odak_yer` referansı / dizinde olmayan benzersiz | 21651 / 1 |
| 2 | Yetim KISILER (hiçbir maddeye bağlı değil) | 93 / 288 (yabanci-hukumdar:89, sadrazam:1, denizci:1, alim:1, siyasi:1) |
| 2 | Yetim SAVASLAR / ANTLASMALAR | 23 / 2 |
| 2 | Yetim DEVLETLER (hiçbir madde/veri referansı yok) | 299 / 2315 |
| 2 | Yetim YERLESIMLER (hiçbir madde `yer_id`/`odak_yer` anmıyor) | 2825 / 5648 |
| 2 | Yetim SEHIRLER (79'luk sekme) | 3 / 79 |
| 3 | DEVLETLER: `tur` alanı YOK · DEVLET_TUR_ADI dışı tür (başlığı ham slug) | 41 · 678 kayıt / 154 farklı tür |
| 3 | DEVLETLER: `f` eksik · `t` eksik · ikisi de eksik | 0 · 233 · 0 (f>t: 12) |
| 3 | DEVLETLER: `baskent` boş (alan yok 88 + "bulunamadı" metni 11) | 99 |
| 3 | DEVLETLER: `kronoloji` alanı boş | 2 |
| 5 | Mükerrer/yakın ad: KISILER · SAVASLAR · ANTLASMALAR · DEVLETLER (tam-aynı-ad grubu) | 1 · 9 · 2 · 49 |
| 5 | Yakın yazım (Levenshtein ≤1, ≥7 harf): KISILER · SAVASLAR · DEVLETLER | 1 · 0 · 12 |

## 2. (1) Maddede geçen / bağlanan kimlikler dizinde VAR mı?
### 2a Kişi
`kisiler:` serbest metindir (`kisi_id` yalnız 5 maddede, `vefat_id` 38). Parçalar `,` `;` `/` ve ` ve ` ile bölündü; ad KISILER/PADISAHLAR adı, lakabı, parantezsiz adı ya da sözcük kümesiyle (unvanlar atılarak, ≥2 sözcük) eşlendi. **Eşleşmeyen 6634 parçanın** bir kısmı kişi değil (yer adı, "—": aşağıda) — kişi/yer ayrımı alanda yok. Dizin 288+41 kayıt, maddelerde ~4000 benzersiz ad var: **kişiler dizini maddelerde geçen kişilerin küçük bir kesitidir.**
En sık dizinde olmayan 20 ad (sayı = madde sayısı):
- Hz. Muhammed — 22
- — — 21
- Amr b. Âs — 19
- Kuteybe b. Müslim — 19
- Kristof Kolomb — 17
- II. Friedrich — 15
- James Cook — 15
- Meyyâfârikīn — 15
- Harran — 15
- Herakleios — 15
- Me'mûn — 15
- Koca Yûsuf Paşa — 14
- II. Roger — 14
- Ahlat — 14
- I. Friedrich Barbarossa — 13
- Misis — 13
- Selâhaddîn-i Eyyûbî — 13
- Emîr Süleyman Çelebi — 12
- Tutuş — 11
- Nûreddin Mahmud Zengî — 11

### 2b Savaş / Antlaşma / Sefer / Seri
- SAVASLAR kaydında madde kimliği alanı YOK; eşleme ±5 gün + ad sözcüğü (heuristik). Eşleşmeyen 23/168.
- ANTLASMALAR'da id YOK (ANTLASMA_MADDELERI'nde var: 54 kayıt); `antlasma_id` referanslarının 0 tanesi dizinde yok. ANTLASMALAR ↔ ANTLASMA_MADDELERI bağı yalnız ad/tarih eşlemesiyle.
- SERILER: savaşı olmayan seri 0; seri alanı dizinde olmayan savaş 0; **serisiz savaş 15/168**.
- `sefer_id` dizinde olmayan: 0 benzersiz (örn. ).
Serisiz savaşlar (ilk 10):
- 1386-06-01 | Frenkyazısı Savaşı
- 1414-06-01 | Konya kuşatması (1414)
- 1415-03-01 | Konya kuşatması (1415)
- 1475-01-10 | Racova (Vaslui) bozgunu
- 1476-07-26 | Akdere (Valea Albă) zaferi
- 1692-01-01 | Granbosa Kalesi'nin fethi
- 1798-10-23 | Preveze (Nikopolis) Muharebesi
- 1799-05-20 | Akkâ Savunması
- 1400-08-26 | Sivas kuşatması
- 1385-09-18 | Savra (Saurian) Ovası

### 2c Devlet
Madde (`devlet`, `devlet_id`, `taraflar` dizisi, `odak_kimlik`), SAVASLAR.taraf, ANTLASMALAR.taraf, KISILER.devlet, YERLESIMLER.s/isg ve SEFERLER'den 2050 benzersiz devlet kimliği toplandı; **33 tanesi DEVLETLER'de yok** (=dizinde görünmez, ya da yazım/kimlik hatası). İlk 20:
- avusturya ← madde.taraflar+madde.devlet+YERLESIMLER.s+YERLESIMLER.isg
- __BOSLUK__ ← madde.devlet+madde.taraflar+YERLESIMLER.s
- sonraki-zhao ← madde.devlet+madde.taraflar
- hansa ← madde.devlet
- dini-elektorlukler ← madde.devlet
- salyan-sultanligi ← madde.taraflar
- birlesik-krallik ← madde.taraflar
- japonya ← madde.taraflar
- misir ← madde.taraflar
- sovyetler-birligi ← madde.taraflar
- etiyopya ← madde.taraflar
- kuzey-vietnam ← madde.taraflar
- almanya-demokratik-cumhuriyeti-dogu ← madde.taraflar
- trablus-cumhuriyeti ← madde.taraflar
- kunduz-hanligi ← madde.taraflar
- britanya-imp ← madde.taraflar
- yemen ← YERLESIMLER.s
- sirbistan ← YERLESIMLER.s
- isa-celebi ← YERLESIMLER.s
- mehmed-celebi ← YERLESIMLER.s

### 2d Yerleşim
`yer_id`/`odak_yer` 21651 referansın dizinde bulunamayanı benzersiz 1:  (1910) (yazım ve parantez farkı normalleştirilerek: `ı/i, â/a, ş/s…`, parantezli ad, SEHIRLER ∪ YERLESIMLER). **Yer kimliği sağlam; yazım hatası yok denecek kadar az.** Not: SEHIRLER'de YERLESIMLER karşılığı olmayan: 2 (Tripoliçe, Kûtülamâre).

## 3. (2) Yetimler (dizinde var, hiçbir maddeye bağlanmıyor)
### Kişi (ilk 20 / 93)
- mutercim-rusdu-pasa | Mütercim Rüşdü Paşa | sadrazam
- burak-reis | Burak Reis | denizci
- janos-zapolya | János Zápolya | yabanci-hukumdar
- abbas2 | Şah II. Abbas | yabanci-hukumdar
- sultan-huseyin | Şah Sultan Hüseyin | yabanci-hukumdar
- yakub-bey | Yakub Bey (Akkoyunlu) | yabanci-hukumdar
- zahir-berkuk | Zâhir Berkuk | yabanci-hukumdar
- barsbay | Sultan Barsbay | yabanci-hukumdar
- matyas-corvinus | Mátyás Corvinus | yabanci-hukumdar
- michal-korybut-wisniowiecki | Michał Korybut Wiśniowiecki | yabanci-hukumdar
- vladislav2 | II. Vladislav (Jagellon) | yabanci-hukumdar
- kucum-han | Küçüm Han | yabanci-hukumdar
- edigu | Edigü | yabanci-hukumdar
- george5 | V. George | yabanci-hukumdar
- pius5 | Papa V. Pius | yabanci-hukumdar
- stefan-lazarevic | Stefan Lazarević | yabanci-hukumdar
- tvrtko1 | Tvrtko I | yabanci-hukumdar
- basarab1 | Basarab I | yabanci-hukumdar
- bogdan1 | Bogdan I | yabanci-hukumdar
- muhammed-sah-kacar | Muhammed Şah Kaçar | yabanci-hukumdar

PADISAHLAR yetimi: fetret, hilafet
### Savaş (ilk 20 / 23)
- 1414-06-01 | Konya kuşatması (1414)
- 1913-01-23 | Bâb-ı Âli Baskını
- 1400-08-26 | Sivas kuşatması
- 1364-07-01 | Sırpsındığı
- 1620-09-17 | Cecora (Ţuţora)
- 1788-12-17 | Özi savunması
- 1877-04-24 | 93 Harbi (Plevne)
- 1913-07-21 | II. Balkan Savaşı (Edirne)
- 1440-04-28 | Belgrad kuşatması
- 1456-07-04 | Belgrad kuşatması
- 1621-09-02 | Hotin kuşatması
- 1521-06-25 | Belgrad kuşatması
- 1570-07-25 | Lefkoşa kuşatması
- 1638-11-15 | Bağdat kuşatması
- 1416-05-01 | Börklüce Mustafa
- 1416-09-01 | Torlak Kemal
- 1511-03-01 | Şahkulu (Teke)
- 1600-09-23 | Kayseri ovası (Karayazıcı)
- 1601-08-12 | Sepetli (Elbistan) — Karayazıcı'nın bozgunu
- 1603-01-01 | Deli Hasan
### Antlaşma (2)
- 1792-01-10 | Yaş
- 1912-10-18 | Uşi
### Devlet (ilk 20 / 299)
- kibris-ingiliz | Kıbrıs'ın İngiliz İdaresi
- sarki-rumeli | Şarkî Rumeli Vilayeti (Özerk)
- sidamo-kralliklari | Sidamo Krallıkları
- vollayta-kralligi | Vollayta (Wolaita) Krallığı
- fetret-isa | İsa Çelebi Saltanatı (Bursa)
- polonya-naiplik-kralligi | Polonya Naiplik Krallığı (Regency Kingdom, Alman-Avusturya himayesi)
- arua | Aruã (Marajó)
- aleut | Aleut (Unangax̂)
- xi-liang-li-gao | Batı Liang (Li Gao, 西涼)
- hou-liang-lu-guang | Sonraki Liang (Lü Guang, 後涼)
- ammarogullari | Ammâroğulları (Trablusgarp)
- konstantin-beyligi | Konstantin Beyliği (Ahmed Bey)
- sani-emirligi | Âl-i Sânî Emirliği (Katar)
- sabah-emirligi | Sabah Emirliği (Kuveyt)
- crnojevic-zetasi | Crnojević Zetası
- dejanovic-prensligi | Dejanović Prensliği (Kostadin-ili)
- lubnan-emirligi | Lübnan Emirliği (Ma'noğulları · Şihaboğulları)
- cebel-i-lubnan-mutasarrifligi | Cebel-i Lübnan Mutasarrıflığı
- harfusogullari | Harfûşoğulları (Baalbek Emirliği)
- ingiliz-nyasaland | Nyasaland Protektorası (İngiliz Orta Afrikası)
### Yerleşim (ilk 20 / 2825)
- Nakijin Gusuku (Hokuzan merkezi)
- Dzaoudzi (Mayotte)
- Dubay (Dubai)
- Acman (Ajman)
- Ummu'l-Kuveyn (Umm al-Quwain)
- Lahic (el-Havta)
- Igbo-Ukwu
- Garth Celyn (Abergwyngregyn)
- Saint Helier (Jersey)
- Saint Peter Port (Guernsey)
- Mahébourg (Mahebourg, Mauritius)
- Port Mathurin (Rodrigues)
- Punakha
- Thimphu
- Yuksom (Yuksam)
- Astorga (Asturica)
- Andorra la Vella
- Montgomery
- Ngāruawāhia
- Saint-Pierre (Martinik)

SEHIRLER yetimi: Tripoliçe, Kûtülamâre, Belen. Dönemsiz (d/v/s/isg hepsi boş) yerleşim: 418.

## 4. (3) DEVLETLER dizin kalitesi
- `tur` YOK: **41** (başlık "Tür Belirtilmemiş" altında). İlk 20:
- irak-kralligi | Irak Krallığı (Faysal I, İngiliz Mandası)
- suriye-lubnan-mandasi | Fransız Suriye-Lübnan Manda İdaresi
- filistin-mandasi | İngiliz Filistin Mandası
- urdun-emirligi | Şarkî Ürdün Emirliği (Abdullah bin Hüseyin)
- misir-sultanligi | Mısır Sultanlığı (İngiliz Himayesi)
- misir-kralligi | Mısır Krallığı (I. Fuad)
- tannu-tuva | Tannu Tuva Halk Cumhuriyeti
- rif-cumhuriyeti | Rif Cumhuriyeti (Abdülkerim el-Hattâbî)
- agadez-sultanligi | Agadez (Aïr) Sultanlığı — Tuareg
- kesiri-sultanligi | Kesîrî Sultanlığı (Hadramut iç kesimi)
- kuayti-sultanligi | Kuaytî Sultanlığı (Şihr-Mükellâ, Hadramut kıyısı)
- orta-macar-kralligi | Orta Macar Krallığı (Tököli İmre)
- arvanid-sancagi | Arvanid Sancağı (Arnavut-ili)
- mekke-serifligi | Mekke Şerifliği
- konstantin-beyligi | Konstantin Beyliği (Ahmed Bey)
- sani-emirligi | Âl-i Sânî Emirliği (Katar)
- sabah-emirligi | Sabah Emirliği (Kuveyt)
- kumuk-samhalligi | Kumuk Şamhallığı (Tarki)
- kaheti-kralligi | Kaheti Krallığı
- crnojevic-zetasi | Crnojević Zetası
- `DEVLET_TUR_ADI`nda tanımlı 13 türün dışında 154 farklı `tur` değeri var (başlık ham slug, ilk harf büyük: ör. `somurge` 78, `emirlik` 61, `kultur` 59, `sehir-devleti` 42, `konfederasyon` 27). İlk 20: somurge:78, emirlik:61, kultur:59, sehir-devleti:42, konfederasyon:27, kontluk:25, isgal-idaresi:16, hanedan:16, kaganlik:14, federasyon:13, bagimlilik:13, knezlik:12, taifa-emirligi:12, himaye:11, taninmamis-devlet:11, gecici-hukumet:10, eyalet:9, vesayet:9, han-devleti:9, atabeglik:8
- `t` eksik 233 (ör. hâlâ yaşayanlar: iran, ingiltere, isvec…) — dizin bu satırlarda "f → undefined" benzeri yazı üretir (`isoDizgi(undefined)` davranışı ölçülmedi). İlk 20:
- iran (f 1925-10-31)
- fransa-cumhuriyet (f 1792-09-22)
- ingiltere (f 0927-01-01)
- isvec (f 1523-06-06)
- fas (f 1549-01-01)
- ispanya (f 1479-01-19)
- portekiz (f 1097-01-01)
- hollanda (f 1581-07-26)
- danimarka (f 0950-01-01)
- umman (f 1624-01-01)
- liberya (f 1822-01-01)
- kanada (f 1867-07-01)
- finlandiya (f 1917-12-06)
- norvec (f 1905-06-07)
- kuveyt (f 1752-01-01)
- bahreyn (f 1783-01-01)
- katar (f 1868-01-01)
- siyam-chakri (f 1782-04-06)
- kamboc-kralligi (f 1431-01-01)
- brunei-sultanligi (f 1405-01-01)
- `baskent` boş: 99. İlk 20:
- shs-devleti | Slovenler, Hırvatlar ve Sırplar Devleti (Država SHS)
- itilaf-emaneti | Başlıca Müttefik ve Ortak Devletler emaneti (Saint-Germain md. 91)
- irak-kralligi | Irak Krallığı (Faysal I, İngiliz Mandası)
- suriye-lubnan-mandasi | Fransız Suriye-Lübnan Manda İdaresi
- filistin-mandasi | İngiliz Filistin Mandası
- urdun-emirligi | Şarkî Ürdün Emirliği (Abdullah bin Hüseyin)
- misir-sultanligi | Mısır Sultanlığı (İngiliz Himayesi)
- misir-kralligi | Mısır Krallığı (I. Fuad)
- tannu-tuva | Tannu Tuva Halk Cumhuriyeti
- harezm-halk-cumhuriyeti | Harezm Halk Sovyet Cumhuriyeti
- buhara-halk-cumhuriyeti | Buhara Halk Sovyet Cumhuriyeti
- rif-cumhuriyeti | Rif Cumhuriyeti (Abdülkerim el-Hattâbî)
- ingiliz-guyanasi | İngiliz Guyanası
- hollanda-guyanasi | Hollanda Guyanası (Surinam)
- fransiz-guyanasi | Fransız Guyanası
- agadez-sultanligi | Agadez (Aïr) Sultanlığı — Tuareg
- kesiri-sultanligi | Kesîrî Sultanlığı (Hadramut iç kesimi)
- kuayti-sultanligi | Kuaytî Sultanlığı (Şihr-Mükellâ, Hadramut kıyısı)
- arma | Arma Paşalığı (Tinbüktü)
- topia | Topia (Thopia) Beyliği
- `f > t` (ters aralık): 12: arsakuni-ermenistan, sakalar-bati-satraplar, kusan, dogu-han, funan, moche, tikal-mutul, natufiyen, aseramik-kuzey-levant-anadolu, guney-xiongnu, gaya-konfederasyonu, halin

## 5. (4) Dizin satırına tıklayınca ne oluyor? (`js/app.js` `dizinDoldur`, satır ~11205-11510)
| Sekme | Tıklama | Durum |
|---|---|---|
| Kişiler | satir(k.ad,k.donem,k.not) — tik YOK | **İŞLEVSİZ** |
| Savaşlar | tarihAyarla(gunIdx(s.t)) — tarihe gider, haritada savaş yerine uçmaz (lat/lon dizin kaydında var) | **kısmi** |
| Antlaşmalar | tarihAyarla(gunIdx(a.t)) — yalnız tarih | **kısmi** |
| Savaş Serileri | satir(s.aralik,…) — tik YOK | **İŞLEVSİZ** |
| Şehirler ve Kaleler | tarihAyarla(ilk.f) + dizindenUc(lat,lon) | **tam** |
| Yerleşim Kronolojileri | liste → detay → dönem satırı tarihAyarla(p.f)+dizindenUc | **tam** |
| Devletler | tarihAyarla(gunIdx(d.f)) — harita devlete odaklanmaz, f'si yoksa/negatifse gunIdx davranışı ölçülmedi | **kısmi** |
| Kartvizitler | VEFAT_INDEX[k.id] varsa tarihAyarla+obGoster, yoksa tik YOK ('henüz kronolojiye bağlanmadı') | **bağlıysa tam / bağlı değilse İŞLEVSİZ** |

Kartvizitler: K2–K5 56 kişiden `vefat_id` ile bağlı **1**, bağlı olmayan **55** ("henüz kronolojiye bağlanmadı", tıklanmaz). K1 padişah 39, bağlı 39. Bağsız ilk 20:
- candarli-hayreddin-pasa | sadrazam
- candarli-halil-pasa | sadrazam
- mahmud-pasa | sadrazam
- atik-ali-pasa | sadrazam
- pargali-ibrahim-pasa | sadrazam
- sokullu-mehmed-pasa | sadrazam
- damad-ibrahim-pasa-1601 | sadrazam
- koprulu-mehmed-pasa | sadrazam
- kopruluzade-fazil-ahmed-pasa | sadrazam
- merzifonlu-kara-mustafa-pasa | sadrazam
- amcazade-huseyin-pasa | sadrazam
- baltaci-mehmed-pasa | sadrazam
- nevsehirli-damad-ibrahim-pasa | sadrazam
- damad-ali-pasa | sadrazam
- ivazzade-halil-pasa | sadrazam
- alemdar-mustafa-pasa | sadrazam
- mustafa-resid-pasa | sadrazam
- ali-pasa | sadrazam
- midhat-pasa | sadrazam
- huseyin-avni-pasa | sadrazam
Yerleşim Kronolojileri: ciz() bulunan.slice(0,300): arama yokken ilk 300 satır gösterilir, 5348 yerleşim yalnız aramayla ulaşılır.

## 6. (5) Mükerrer / farklı yazılmış adlar
- **KISILER:** tam-aynı-ad grubu 1 — yakub bey ← yakub-bey | yakub-bey-kasgar; yakın yazım: sah i abbas ~ sah ii abbas (bu ikinci çift gerçek farklı kişi: I./II. Abbas). KISILER∩PADISAHLAR aynı ad: 0. `id` tekrarı: 0.
- **SAVASLAR:** aynı ad (parantezsiz) 9 grup; çoğu farklı tarihte farklı kuşatma (Konya, Rodos, Belgrad, İstanbul, Korfu) — **dizinde ayırt edici yıl/ek yok**, ama iki GERÇEK ÇİFT KAYIT: Preveze 1538-09-28 (`Preveze (deniz)` ↔ `Preveze`) ve İnebahtı 1571-10-07 (`İnebahtı (deniz)` ↔ `İnebahtı (Lepanto)`) — aynı gün, aynı muharebe iki satır. Aynı gün+yer çifti: 0.
- konya kusatmasi ← 1414-06-01 Konya kuşatması (1414) | 1415-03-01 Konya kuşatması (1415)
- yenisehir muharebesi ← 1481-06-22 Yenişehir Muharebesi (1481) | 1513-04-01 Yenişehir Muharebesi (1513)
- korfu kusatmasi ← 1716-08-20 Korfu kuşatması | 1537-08-25 Korfu kuşatması
- preveze ← 1538-09-28 Preveze (deniz) | 1538-09-28 Preveze
- inebahti ← 1571-10-07 İnebahtı (deniz) | 1571-10-07 İnebahtı (Lepanto)
- istanbul kusatmasi ← 1422-06-10 İstanbul kuşatması | 1453-04-06 İstanbul kuşatması
- belgrad kusatmasi ← 1440-04-28 Belgrad kuşatması | 1456-07-04 Belgrad kuşatması | 1521-06-25 Belgrad kuşatması
- rodos kusatmasi ← 1480-05-23 Rodos kuşatması | 1522-06-26 Rodos kuşatması
- sahkulu ← 1511-03-01 Şahkulu (Teke) | 1511-07-02 Şahkulu (Sivas)
- **ANTLASMALAR:** istanbul ← 1479-01-25 İstanbul (Venedik) | 1913-09-29 İstanbul (Bulgaristan, 1913); londra ← 1840-07-15 Londra (Mısır) | 1913-05-30 Londra — adı yalnız şehir ("İstanbul (Venedik)", "Londra") olan kayıtlar. Aynı tarihli çift: 0.
- **DEVLETLER:** parantezsiz aynı ad grubu 49 (çoğu devletin farklı dönemleri: macaristan/macaristan-habsburg…; sorun, dizinde aynı başlığın birden çok satırı), yakın yazım çifti 12 (gerçek çift çoğu değil: Qin/Qing, Hammâdîler/Hammûdîler gibi farklı devletler; kontrol edilecek: Mogulistan~Mogolistan, Akrotiri~Dekelya yazımı). Liste:
- macaristan kralligi ← macaristan | macaristan-habsburg
- isvec kralligi ← isvec-birlik-oncesi | isvec
- sirbistan kralligi ← sirbistan-nemanjic | sirbistan-kralligi
- arnavutluk ← arnavutluk-iskenderbey | arnavutluk-halk-cumhuriyeti | arnavutluk-italyan-koruma | arnavutluk-alman-himayesi
- romanya ← romanya | romanya-cumhuriyeti
- italya kralligi ← italya | karolenj-italya
- nebhaniler ← nebhani | nebhani-umman
- burundi kralligi ← burundi | burundi-krallik
- polonya cumhuriyeti ← polonya | polonya-iii-cumhuriyet
- letonya cumhuriyeti ← letonya | letonya-cumhuriyeti-yeniden
- litvanya cumhuriyeti ← litvanya | litvanya-cumhuriyeti-yeniden
- estonya cumhuriyeti ← estonya | estonya-cumhuriyeti-yeniden
- norvec kralligi ← norvec-kralligi | norvec | norvec-isvec-birligi | norvec-1814
- avusturya cumhuriyeti ← avusturya-cumhuriyet | avusturya-ikinci-cumhuriyet
- macaristan ← macaristan-naiplik | macaristan-halk
- sonraki liang ← hou-liang-lu-guang | sonraki-liang-5hanedan
- tibet ← tibet-ganden-phodrang | tibet
- irlanda ← irlanda | irlanda-cumhuriyeti
- luksemburg buyuk dukaligi ← luksemburg | luksemburg-hollanda-birligi
- izlanda ← izlanda | izlanda-norvec-danimarka
- hammadiler ~ hammudiler
- ispanya i cumhuriyeti ~ ispanya ii cumhuriyeti
- kazan hanligi ~ kazak hanligi
- champa kralligi ~ chamba kralligi
- sonraki jin ~ sonraki qin
- mogulistan ~ mogolistan
- qing hanedani ~ qin hanedani
- ziyariler ~ ziyadiler
- akrotiri ve dekelya egemen us bolgeleri ~ akrotiri ve dikelya egemen us bolgeleri
- frigya kralligi ~ frizya kralligi
- tebai 11 hanedan ~ tebai 17 hanedan
- taberistan zeydileri i donem ~ taberistan zeydileri ii donem
- Madde `kisiler:` yazımı ile dizin adı **farklı** olup yalnız kısmi eşleşen parça: 199 (ör. "Kanûnî Sultan Süleyman" ↔ "Kanunî", "Kanûnî"/"Kanunî", "Yavuz Sultan Selim" ↔ "I. Selim (Yavuz)"): maddelerde aynı kişi için birden çok yazım var; kimlik alanı olmadığı için bağlantı yazıma bağlı.

## 7. Sınırlar (ne ölçülmedi / yöntem zayıflığı)
- Kişi eşleşmesi serbest metin üzerindedir; "dizinde YOK" sayıları üst sınırdır (yer adı, unvan, çok-kişili alan parçaları dahil). Kesin kişi sayısı için `kisi_id` alanı gerekir (yalnız 5 maddede var).
- Savaş/Antlaşma yetimi, madde ±gün + ad sözcüğü heuristiğidir; `savas_id`/`antlasma_id` alanı yoksa kesin sayı verilemez.
- Tıklama ölçümü statik okumadır (app.js); tarayıcıda canlı tıklama denenmedi.
- Devlet referansı sayımı `devlet`, `devlet_id`, `taraflar`(dizi), `odak_kimlik` alanlarına dayanır; `taraflar` serbest metin olan maddeler (434) dahil değildir.
- `KRONOLOJI*` yetim hesabına dahildir (dizin→madde bağı için geniş evren); yalnız `OLAYLAR*` ile hesaplanırsa yetimler artar.

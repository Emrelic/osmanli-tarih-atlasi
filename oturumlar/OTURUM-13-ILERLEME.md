# Oturum 13 — Hindistan, Çin, Japonya, Kore ve Güneydoğu Asya · ilerleme raporu

**Durum:** iş bitti, birleştirmeye hazır. **Commit atılmadı.**
**Yazılan tek dosya:** `data/yerlesimler_asya.js` (yeni, 344 yerleşim, ~208 KB).
**Dokunulmayan:** `data/yerlesimler.js`, diğer `yerlesimler_*.js`, `arac/` altındaki
her şey, `devletler.js`, `kisiler.js`, `savaslar.js`, `olaylar*.js`, `index.html`,
`js/app.js`, kök `*.md`. `arac/uret_petek.py` **çalıştırılmadı.**

---

## ⚠️ Önce bu: bu veri bugün haritada GÖRÜNMÜYOR

`uret_petek.py` penceresi `box(-12, 1.5, 62, 62)`; doğu sınırı **62°D**.
344 noktanın **tamamı** bu kutunun dışındadır — en batıdaki nokta Kandehar
(65.710°D), en doğudaki Sapporo (141.354°D). Görev tanımının kabul ettirdiği
bilinçli sıra budur (`CLAUDE.md` §6): kutu, aradaki coğrafyada nokta yoğunluğu
sağlanmadan doğuya açılamaz.

**Kutu açılmadan önce kapatılması gereken boşluk:** 62-65°D arası, yani Herat,
Sîstan, Belûcistan ve Mekran. Bu şerit **hiçbir oturumun elinde değil**:
Oturum 4 (İran) Herat'ı kutunun 0,2° dışında kaldığı için kasten bırakmış,
bu oturum da onun kararını bozmadı. Kutu bu şerit doldurulmadan açılırsa
Kandehar'ın peteği batıya, Meşhed'inki doğuya taşar.

---

## Sayılar

| Ölçüm | Sonuç |
|---|---|
| Yerleşim | **344** (hedef 250-350) |
| Tür dağılımı | 192 şehir · 97 liman · 55 kale · 0 dolgu |
| `kur:` taşıyan | 62 |
| `bit:` taşıyan | 4 (Gaur 1575 · Vijayanagara 1565 · Karakurum 1380 · Ayutthaya 1767) |
| Kullanılan devlet kimliği | **147** |
| Boylam aralığı | 65.710°D – 141.354°D |

### Bölge dağılımı — görev tanımındaki hedefe karşı

| Bölge | Bu dosya | Hedef | Not |
|---|---|---|---|
| Kuzey Hindistan (Pencap, Sind, Racputâne, Gucerât, Mâlvâ, Ganj, Bengal, Assam) | 82 | 50-70 | Hedefin üstünde; Gucerât-Mâlvâ-Racputâne ve Afgan köprüsü buraya yazıldı |
| Dekken ve Güney Hindistan (+ Seylan 3) | 46 | 40-60 | ✓ |
| Çin — kuzey ve orta | 46 | 60-80 | **hedefin altında**, aşağıda not var |
| Çin — güney ve kıyı (+ Tayvan 3) | 17 | 30-40 | **hedefin altında**, aşağıda not var |
| Mançurya, Moğolistan, Doğu Türkistan, Tibet | 32 | 10-15 (Tibet+Moğolistan) | Sincan ve Mançurya da buraya girdi |
| Japonya | 34 | 25-35 | ✓ |
| Kore | 16 | 12-18 | ✓ |
| Güneydoğu Asya | 71 | 40-55 | Hedefin üstünde; ada dünyası tek tek noktalanmadan emilmeye açık kalıyordu |

**Çin neden hedefin altında kaldı — bunu kabul edip bildiriyorum.** Çin'de siyasî
kırılma haritası, nokta sayısına Hindistan ve Güneydoğu Asya kadar duyarlı değil:
imparatorluk 1281-1923 arasında büyük ölçüde **tek gövde** olarak el değiştiriyor,
yani ek nokta koymak yeni bir sınır üretmiyor. Buna karşılık aynı bütçe, Hint
sultanlıklarında ve Malay-Endonez takımadalarında **gerçek yeni sınır** üretiyor.
Toplam hedef aralığı (250-350) tutturulduğu için bütçe oraya kaydırıldı.
Yine de Çin'in iç kesimlerinde `MIMARI.md` §5'in "seyrek bölge 300 km" ölçütünü
tutturmak için sekiz yoğunluk noktası ayrıca eklendi (§5e bölümü).
**Öneri:** kutu doğuya açılmadan önce Çin'e 25-30 nokta daha eklenmeli — özellikle
Yunnan-Guizhou, Gansu-Qinghai ve Guangxi hâlâ seyrek.

---

## Kendi kendini denetleme — ölçülmüş sonuçlar

`arac/denetle.py` bu coğrafyayı görmüyor (yalnız `data/yerlesimler.js` okuyor),
bu yüzden üç denetim ayrı bir betikle koşturuldu. Betik geçicidir.

**1. Nokta karada mı** — `veri-kaynak/ne_10m_land.geojson` **küreseldir**
(lon -180..180, lat -90..83.6). Görev tanımının "kapsamıyor olabilir" uyarısı bu
dosya için geçersiz: maske bütün Asya'yı kapsıyor.
Sonuç: **344/344 karada, 0 nokta göl içinde.**

⚠️ **On iki nokta maske yüzünden kaydırıldı.** Hepsi haliç, delta ya da küçük ada
limanıdır ve 10 m çözünürlükte kıyı çizgisinin deniz tarafına düşüyordu. Her biri
en yakın kara noktasına çekildi:

| Nokta | Kaydırma |
|---|---|
| Bengkulu | 0.8 km |
| Bombay | 0.9 km |
| Swatow | 1.0 km |
| Broaç · Zeytun | 1.1 km |
| Amoy | 1.2 km |
| Mergui | 1.3 km |
| Koçin | 1.5 km |
| Ternate | 1.8 km |
| Moulmein | 2.2 km |
| Banda Neira · Wuchang | 2.4 km |

Wuchang maskede Yangtze/göl poligonunun içine düşüyordu. **Kutu açılıp daha
yüksek çözünürlüklü maske kullanılırsa bu on iki nokta gerçek mevkiine geri
alınmalıdır** — aynı not dosyanın başlığında da var.

**2. Mükerrer (3 km kuralı)** — ölçüm yalnız bu dosyanın içinde değil,
`yerlesimler.js` + `yerlesimler_iran.js` + `yerlesimler_ortaasya.js` ile **çapraz**
yapıldı. Sonuç: **3 km altında 0 çift.** En sıkı çift Hûglî–Çandernagor 5.16 km
(iki ayrı devletin toprağı, bilerek tutuldu), ikincisi Ternate–Tidore 11.2 km.
3 km'nin altına düştüğü için elenen adaylar dosyanın "EKLENMEYENLER" başlığındadır
(Sagaing–Ava 2.6 km).

**3. Sahipsizlik** — `kur:` taşıyan 62 kaydın kuruluş sonrası, kalan 282 kaydın
1281-01-01 → 1923-10-29 aralığının tamamı kesintisiz sahiplidir.
Sonuç: **0 boşluk, 0 çakışma, 0 ters aralık, 0 sıfır uzunluk.**

**4. `py arac/denetle.py`** — ana dosyanın bozulmadığı doğrulandı:
```
Değişmez 1  ✓  740 yerleşim, 35 sahipsiz (beklenen 35)
Değişmez 2  ✓  427 kırılma, 0 açık (beklenen 0)
Değişmez 3  ✓  381 çelişki (beklenen ≤383)
SONUÇ: temiz
```

**Değişmez 2 bu dosya için tetiklenmiyor:** hiçbir kaydın `d:` veya `v:` dönemi
yoktur, hepsi yabancı sahipliktir (`s:`). **Tek bir yeni kronoloji maddesi
gerekmiyor.**

**Değişmez 1 için `BEKLENEN_SAHIPSIZ` DEĞİŞMEMELİDİR.** Bu dosyada kasten sahipsiz
dolgu noktası **yoktur**; `kur:` öncesi boşluklar sahipsizlik değil yokluktur.

---

## ⚠️ ASIL ÇIKTI — eklenmesi istenen devlet kimlikleri

`arac/renkler.py` renkleri komşuluk çizgesine göre DSATUR ile dağıtıyor; bu dosya
renk tablosuna **yazmadı**, yalnız bildiriyor. Sıralama entegrasyon oturumunun
işidir.

### A. Zaten tanımlı, doğrudan kullanıldı (12) — yapılacak bir şey yok
`ingiltere` · `fransa` · `portekiz` · `ispanya` · `hollanda` · `danimarka` ·
`almanya` · `rusya` · `timurlu` · `cagatay` · `safevi` · `iran`

> `iran`, Oturum 4'ün kurduğu geleneğe uyar: Hotakî Afgan ve Afşar dönemleri ayrı
> kimlik almadı. `almanya` yalnız Qingdao'nun 1898-1914 kirası için kullanıldı.

### B. `devletler.js`'te VAR, `renkler.py`'de YOK (37) — sadece renk gerekiyor
Görev tanımının "Kolaylık" maddesi gereği dizin id'leri **birebir** kullanıldı;
dizin ile harita baştan aynı kimliği taşıyor. Ad, aralık ve merkez zaten
`devletler.js`'tedir, burada tekrarlanmadı.

`abd` · `ace-sultanligi` · `ayutthaya` · `babur-imparatorlugu` · `behmeni` ·
`brunei-sultanligi` · `cungar` · `delhi-sultanligi` · `edo-bakufu` · `goryeo` ·
`hollanda-dogu-hint` · `ingiliz-hindistani` · `ingiliz-malaya` · `joseon` ·
`kamakura` · `kamboc-kralligi` · `konbaung` · `le-hanedani` · `majapahit` ·
`malaka-sultanligi` · `maratha` · `mataram-sultanligi` · `meiji-japonya` ·
`meysur` · `ming-hanedani` · `muromachi` · `nguyen-hanedani` · `qing-hanedani` ·
`ryukyu` · `sih-imparatorlugu` · `siyam-chakri` · `sulu-sultanligi` ·
`tibet-ganden-phodrang` · `toungoo` · `vijayanagara` · `yakub-beg` ·
`yuan-hanedani`

⚠️ Üç kimliğin **kullanım aralığı `devletler.js`'tekinden geniştir** ve bu bilinçli:

| id | devletler.js | bu dosya | Gerekçe |
|---|---|---|---|
| `sih-imparatorlugu` | 1801-1849 | 1765-1849 | 1765-1799 misl konfederasyonu aynı gövdenin erken evresi |
| `meysur` | 1761-1799 | 1565-1923 | Vodeyar krallığının tamamı; boyanan toprak aynı |
| `yakub-beg` | 1865-1878 | 1864-1877 | 1864-65 Kuça-Dungan evresi ayrı kimlik almadı |

### C. YENİ ÖNERİ (98) — `renkler.py` ve `devletler.js`'te yok

Parantez içindeki sayı, dosyada kaç sahiplik penceresinde kullanıldığıdır
(renk önceliği için).

#### C1. Hint alt kıtası — Delhi ardılları ve bölgesel sultanlıklar

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `sur-hanedani` (32) | Sûr Hanedanı | 1540-1556 | Delhi / Sasaram | TDV BÂBÜRLÜLER, ŞÎR ŞAH SÛRÎ |
| `bengal-sultanligi` (22) | Bengal Sultanlığı | 1338-1576 | Lakhnautî → Gaur | TDV BENGAL |
| `gucerat-sultanligi` (11) | Gucerât Sultanlığı | 1407-1573 | Ahmedâbâd | TDV GUCERÂT |
| `cavnpur-sultanligi` (8) | Cavnpur (Şarkî) Sultanlığı | 1394-1479 | Cavnpur | TDV CAVNPUR |
| `malva-sultanligi` (3) | Mâlvâ Sultanlığı | 1392-1562 | Mândû | TDV MÂLVÂ |
| `multan-langah` (1) | Multan Langah Sultanlığı | 1445-1528 | Multan | TDV MULTAN |
| `kesmir` (2) | Keşmir (Lohara + Şah Mîr) | 1281-1586 | Srinagar | TDV KEŞMİR |
| `sind` (7) | Sind (Sûmra/Samma/Erguni/Kalhora/Talpur) | 1281-1843 | Tatta → Haydarâbâd | TDV SİND |
| `bengal-nevabligi` (13) | Bengal Nevâblığı | 1717-1757 | Murşidâbâd | TDV BENGAL |
| `avad` (9) | Avad (Oudh) Nevâblığı | 1722-1856 | Feyzâbâd → Leknev | Cambridge History of India |

#### C2. Hint alt kıtası — Hindu ve racput devletleri

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `racput` (22) | Racput devletleri (Mevar, Mârvâr, Amber, Bikaner, Caysalmer, Kutch) | 1281-1923 | Çitor/Udeypûr · Codhpûr · Caypûr | Cambridge History of India |
| `yadava` (12) | Yâdava (Seuna) Krallığı | 1281-1318 | Devagiri | Cambridge History of India |
| `kakatiya` (8) | Kâkatiya Krallığı | 1281-1323 | Varangal | a.g.e. |
| `pandya` (8) | Pândya Krallığı | 1281-1311 | Madurai | a.g.e. |
| `hoysala` (3) | Hoysala Krallığı | 1281-1343 | Dvârasamudra | a.g.e. |
| `orissa` (3) | Orissa (Doğu Ganga + Gacapati) | 1281-1568 | Kattak | a.g.e. |
| `nayak-devletleri` (7) | Nâyak beylikleri (Musunuri, Madurai, Tancûr, Cinci, Keladi) | 1336-1736 | — | a.g.e. |
| `travankur` (2) | Venâd → Travankur Krallığı | 1281-1923 | Padmanabhapuram → Trivandrum | a.g.e. |
| `kalikut` (2) | Kalikut Zamorin'liği | 1281-1766 | Kalikut | TDV KALİKUT |
| `kocin` (1) | Koçin Krallığı | 1281-1503 | Koçin | a.g.e. |
| `ahom` (2) | Ahom Krallığı (Assam) | 1281-1826 | Çaraideo → Rangpûr | Cambridge History of India |
| `manipur` (2) | Manipûr Krallığı | 1281-1923 | İmphâl | a.g.e. |
| `gond-kralliklari` (2) | Gond krallıkları (Garha-Mandla, Deogarh) | 1281-1781 | Mandla | a.g.e. |
| `bharatpur-cat` (1) | Bharatpûr Câtları | 1733-1923 | Bharatpûr | a.g.e. |
| `nepal` (1) | Nepal (Malla → Gorkha/Şah) | 1281-1923 | Katmandu | a.g.e. |
| `ladak` (1) | Ladakh (Namgyal) Krallığı | 1281-1834 | Leh | a.g.e. |

#### C3. Dekken — Behmenî'nin beş halefi ve Nizamlık

Beşi de **aynı anda sahnede ve birbirine sınırdaş** (1490-1687); tek renge
toplanırlarsa Dekken'in yüz yıllık parçalanmışlığı haritadan silinir.

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `bicapur` (16) | Âdilşâhî Sultanlığı | 1490-1686 | Bîcâpur | TDV ÂDİLŞÂHÎLER |
| `ahmednagar` (8) | Nizâmşâhî Sultanlığı | 1490-1636 | Ahmednagar | TDV NİZAMŞÂHÎLER |
| `golkonda` (6) | Kutubşâhî Sultanlığı | 1512-1687 | Golkonda → Haydarâbâd | TDV KUTUBŞÂHÎLER |
| `bidar` (2) | Barîdşâhî Sultanlığı | 1489-1619 | Bîdar | TDV BEHMENÎLER |
| `berar` (1) | İmâdşâhî Sultanlığı (Berâr) | 1490-1574 | Elicpûr | TDV BEHMENÎLER |
| `haydarabad-nizam` (15) | Haydarâbâd Nizamlığı (Âsafcâhîler) | 1724-1923 | Haydarâbâd | TDV ÂSAFCÂHÎLER |
| `madurai-sultanligi` (5) | Ma'ber (Madurai) Sultanlığı | 1335-1378 | Madurai | TDV MA'BER |
| `karnatik` (4) | Karnâtik (Arkot) Nevâblığı | 1690-1801 | Arkot | Cambridge History of India |

#### C4. Prens devletleri (1923'e kadar tahtı süren, doğrudan İngiliz idaresi değil)

| id | Tam ad | Aralık | Merkez |
|---|---|---|---|
| `cammu-kesmir` (3) | Cammû ve Keşmir (Dogra) | 1846-1923 | Srinagar / Cammû |
| `bhopal` (1) | Bhopâl Nevâblığı | 1707-1923 | Bhopâl |
| `bahavelpur` (1) | Bahâvelpûr Emirliği | 1748-1923 | Bahâvelpûr |
| `cunagadh` (1) | Cûnâgadh Nevâblığı | 1748-1923 | Cûnâgadh |

> **Dosya kuralı:** "İngiliz hâkimiyeti" ile "İngiliz Hindistanı" aynı şey
> değildir. Yerli hânedanın tahtta kaldığı yerler (Racputâne, Haydarâbâd,
> Meysûr, Cammû-Keşmir, Travankur, Bhopâl, Gvalyar, Nepal, Şan devletleri,
> Yogyakarta, Tidore, Brunei…) 1923'e kadar **kendi** kimliğini taşır.
> `ingiliz-hindistani` yalnız doğrudan idare edilen toprakta kullanıldı.
> Gerekçe: harita "burayı kim yönetiyor" sorusuna cevap veriyor; himâye
> (paramountcy) ayrı bir katmandır ve bu projede henüz gösterimi yok.
> **Bu, ileride `v:` benzeri bir "himâye" alanı geldiğinde yeniden ele
> alınması gereken bir karardır.**

#### C5. Afganistan köprüsü

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `afgan-durrani` (15) | Dürrânî (Ebdâlî) İmparatorluğu | 1747-1826 | Kandehar → Kâbil | TDV DÜRRÂNÎLER |
| `afganistan` (6) | Afganistan Emirliği (Bârekzâî) | 1826-1923 | Kâbil | TDV AFGANİSTAN |

#### C6. Çin ve İç Asya

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `cin-cumhuriyeti` (85) | Çin Cumhuriyeti | 1912-1923 | Pekin | Cambridge History of China |
| `guney-ming` (35) | Güney Ming (Hongguang, Longwu, Yongli sarayları) | 1644-1662 | Nanking → Fuzhou → Kunming | a.g.e. |
| `san-fan` (13) | Üç Feodal (Sanfan) İsyanı | 1673-1681 | Kunming (Wu Sangui) | a.g.e. |
| `dashun` (12) | Şun Hanedanı (Li Zicheng) | 1643-1645 | Xi'an → Pekin | a.g.e. |
| `kuzey-yuan` (8) | Kuzey Yuan (Moğol Hanlığı) | 1368-1635 | Karakurum → değişken | a.g.e. |
| `taiping` (7) | Taiping Göksel Krallığı | 1851-1864 | Nanking ("Göksel Başkent") | a.g.e. |
| `mogolistan` (7) | Bogd Han Moğolistanı | 1911-1923 | Urga | a.g.e. |
| `mogulistan` (7) | Moğulistan (Doğu Çağatay Hanlığı) | 1347-1514 | Almalık → Turfan | TDV MOĞULİSTAN |
| `yarkent-hanligi` (4) | Yarkent (Sa'îdiyye) Hanlığı | 1514-1705 | Yarkent | TDV YARKENT |
| `tibet` (4) | Tibet (Phagmodrupa, Rinpungpa, Tsangpa) | 1354-1642 | Nêdong → Şigatse | Cambridge History of Inner Asia |
| `tungning` (3) | Tungning Krallığı (Zheng / Koxinga) | 1650-1683 | Amoy → Tainan | Cambridge History of China |
| `hosut` (1) | Hoşut (Kokonor) Hanlığı | 1636-1724 | Kokonor | a.g.e. |
| `pingnan` (1) | Pingnan Sultanlığı (Yünnan Panthay) | 1856-1873 | Dali | a.g.e. |

> `dashun` (12) penceresinin ikisi aslında Zhang Xianzhong'un **Daxi** devletidir
> (Çengdu, Çongqing 1644-1647). Ayrı kimlik açılmadı; gerekçe ilgili kayıtların
> yorumunda yazılı. İstenirse `daxi` ayrılabilir.
>
> Nurhaci'nin **Sonraki Jin**'i (1616-1636) ayrı kimlik ALMADI, `qing-hanedani`
> kullanıldı — Qing kendi kuruluşunu 1616'ya dayandırıyor.
> ⚠️ `devletler.js`'teki `jin-hanedani` (1115-1234 Jurchen Jin) **başka bir
> devlettir**, karıştırılmamalıdır.

#### C7. Japonya ve Kore

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `azuchi-momoyama` (33) | Azuchi-Momoyama (Oda Nobunaga – Toyotomi Hideyoshi) | 1573-1603 | Azuchi → Osaka | Cambridge History of Japan |
| `kenmu` (25) | Kenmu Restorasyonu (Go-Daigo) | 1333-1336 | Kyoto | a.g.e. |
| `ainu` (2) | Ainu Mosir (Ezo) | 1281-1550 | — (merkezî devlet yok) | a.g.e. |

> Kore için yeni kimlik gerekmedi (`goryeo` ve `joseon` dizinde var).
> 1897-1910 "Kore İmparatorluğu" aynı hânedan ve aynı devlet olduğu için ayrı
> kimlik açılmadı.

#### C8. Birmanya, Siyam, Laos, Kamboçya

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `pagan` (8) | Pagan Krallığı | 1281-1313 | Pagan | Lieberman, *Strange Parallels* |
| `ava` (4) | Yukarı Birmanya (Pinya, Sagaing, Ava) | 1313-1555 | Ava | a.g.e. |
| `hanthawaddy` (8) | Hanthawaddy (Mon) Krallığı | 1287-1552, 1740-1757 | Pegu | a.g.e. |
| `arakan` (2) | Arakan (Mrauk U) Krallığı | 1281-1785 | Mrauk U | a.g.e. |
| `san-devletleri` (1) | Şan beylikleri (sawbwa'lıklar) | 1281-1923 | Kengtung, Hsipaw… | a.g.e. |
| `sukhothai` (2) | Sukhothai Krallığı | 1281-1438 | Sukhothai | a.g.e. |
| `lan-na` (1) | Lan Na Krallığı | 1296-1558 | Chiang Mai | a.g.e. |
| `tonburi` (4) | Tonburi Krallığı (Taksin) | 1767-1782 | Tonburi | a.g.e. |
| `lan-xang` (3) | Lan Xang Krallığı | 1281-1707 | Luang Prabang → Vientiane | a.g.e. |
| `laos-kralliklari` (3) | Laos krallıkları (Luang Prabang, Vientiane, Champasak) | 1707-1893 | üç merkez | a.g.e. |
| `angkor-kmer` (3) | Kmer (Angkor) İmparatorluğu | 1281-1431 | Angkor | a.g.e. |
| `fransiz-cinhindi` (16) | Fransız Çinhindi | 1859-1923 | Saygon → Hanoi | a.g.e. |

#### C9. Vietnam ve Champa

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `tran-hanedani` (4) | Trần Hanedanı (Đại Việt) | 1281-1400 | Thăng Long | Cambridge History of SE Asia |
| `ho-hanedani` (4) | Hồ Hanedanı | 1400-1407 | Tây Đô | a.g.e. |
| `mac-hanedani` (3) | Mạc Hanedanı | 1527-1677 | Thăng Long → Cao Bằng | a.g.e. |
| `nguyen-beyligi` (6) | Nguyễn beyleri (Đàng Trong) | 1558-1777 | Phú Xuân | a.g.e. |
| `tay-son` (8) | Tây Sơn Hanedanı | 1773-1802 | Quy Nhơn → Phú Xuân | a.g.e. |
| `campa` (5) | Champa Krallığı | 1281-1832 | Vijaya → Panduranga | a.g.e. |

> ⚠️ Trịnh-Nguyễn bölünmesi (1600-1774) haritada **görünür**: kuzey noktaları
> `le-hanedani`, Huế ve güneyi `nguyen-beyligi` taşır. İki devlet Gianh
> ırmağında sınırdaştır — **renk seçerken bu ikisi birbirine yakın ton
> OLMAMALIDIR.** Aynı uyarı `mac-hanedani` ↔ `le-hanedani` için de geçerli
> (1527-1592 ve Cao Bằng'da 1592-1677 sınırdaşlar).

#### C10. Takımadalar ve Malay dünyası

| id | Tam ad | Aralık | Merkez | Kaynak |
|---|---|---|---|---|
| `malay-sultanliklari` (6) | Malay sultanlıkları (Kedah, Patani, Perak, Selangor, Trengganu, Pahang) | 1281-1909 | — | Cambridge History of SE Asia |
| `cohor-sultanligi` (1) | Johor Sultanlığı | 1528-1923 | Johor Lama → Johor Bahru | a.g.e. |
| `samudra-pasai` (1) | Samudra Pasai Sultanlığı | 1267-1521 | Pasai | TDV SAMUDRA PASAİ |
| `pagaruyung` (2) | Pagaruyung (Minangkabau) Krallığı | 1281-1685 | Pagaruyung | Ricklefs |
| `palembang-sultanligi` (1) | Palembang (Srivijaya kalıntısı → Sultanlık) | 1281-1825 | Palembang | a.g.e. |
| `singhasari` (6) | Singhasari Krallığı | 1281-1292 | Kutaraja (Singhasari) | a.g.e. |
| `sunda-pajajaran` (1) | Sunda (Pajajaran) Krallığı | 1281-1579 | Pakuan Pajajaran | a.g.e. |
| `demak` (4) | Demak Sultanlığı | 1478-1587 | Demak | a.g.e. |
| `banten-sultanligi` (1) | Banten Sultanlığı | 1527-1813 | Banten | a.g.e. |
| `yogyakarta` (2) | Yogyakarta Sultanlığı | 1755-1923 | Yogyakarta | a.g.e. |
| `surakarta` (1) | Surakarta Susuhunanlığı | 1745-1923 | Surakarta | a.g.e. |
| `bali-kralliklari` (2) | Bali krallıkları (Gelgel, Klungkung, Karangasem) | 1478-1908 | Klungkung | a.g.e. |
| `banjar-sultanligi` (1) | Bancar Sultanlığı | 1526-1860 | Bancarmasin | a.g.e. |
| `sarawak-brooke` (1) | Sarawak (Brooke racalığı) | 1841-1923 | Kuching | a.g.e. |
| `gova-makassar` (1) | Gova (Makassar) Sultanlığı | 1281-1667 | Makassar | a.g.e. |
| `ternate-sultanligi` (4) | Ternate Sultanlığı | 1281-1663 | Ternate | TDV MOLUK ADALARI |
| `tidore-sultanligi` (1) | Tidore Sultanlığı | 1281-1923 | Tidore | a.g.e. |
| `banda-adalari` (1) | Banda adaları (orang kaya meclisleri) | 1281-1621 | Banda Neira | Ricklefs |
| `timor-beylikleri` (2) | Timor beylikleri (liurai'lar) | 1281-1769 | — | a.g.e. |
| `filipin-racaliklari` (2) | Filipin racalıkları (Tondo, Maynila, Cebu, Butuan) | 1281-1571 | — | TDV FİLİPİNLER |
| `magindanao-sultanligi` (1) | Magindanao Sultanlığı | 1281-1888 | Kotabato | a.g.e. |
| `seylan-sinhala` (2) | Seylan Sinhala krallıkları (Gampola, Kotte) | 1281-1518 | Kotte | Cambridge History of India |
| `kandy` (1) | Kandy Krallığı | 1469-1815 | Kandy | a.g.e. |
| `yafna` (1) | Yafna (Jaffna) Krallığı | 1281-1619 | Nallur | a.g.e. |

---

## Renk tablosuna eklerken dikkat — sınırdaş çiftler

DSATUR'a girdi olacak en kritik komşuluklar (aynı anda sahnede ve **doğrudan
sınırdaş**; yakın ton verilirse bilgi kaybolur):

1. **Dekken beşlisi** 1490-1687: `bicapur` · `ahmednagar` · `golkonda` · `bidar` ·
   `berar` — beşi de birbirine sınırdaş, aralarına `vijayanagara` da giriyor.
   **Bu altılı, dosyanın en zor renk kümesidir.**
2. **Vietnam bölünmesi** 1600-1774: `le-hanedani` ↔ `nguyen-beyligi`;
   1527-1677: `le-hanedani` ↔ `mac-hanedani`.
3. **Çin iç savaşları**: `qing-hanedani` ↔ `guney-ming` (1644-1662),
   `qing-hanedani` ↔ `san-fan` (1673-1681), `qing-hanedani` ↔ `taiping`
   (1851-1864), `qing-hanedani` ↔ `tungning` (1662-1683). Dördü de Qing ile
   sınırdaş, birbirleriyle değil — dördü aynı rengi paylaşabilir.
4. **Hint kuzeybatısı** 1752-1849: `afgan-durrani` ↔ `sih-imparatorlugu` ↔
   `babur-imparatorlugu`.
5. **Moluk** 1281-1663: `ternate-sultanligi` ↔ `tidore-sultanligi` — 11 km
   arayla iki ayrı sultanlık; ton farkı belirgin olmalı.
6. **Cava** 1755-1923: `yogyakarta` ↔ `surakarta` — 52 km arayla, bölünmenin
   kendisi bilgi.

Kırmızı tonları Osmanlı ailesine ayrılmıştır (`VERI-YAPISI.md`); bu dosyadaki
hiçbir devlete kırmızı verilmemeli.

---

## Birleştirme adımları (entegrasyon oturumu için)

1. `data/yerlesimler_asya.js` → `YERLESIMLER` dizisine kat, **ya da**
   `MIMARI.md` §3.3'teki `data/yerlesimler_*.js` desenini `uret_petek.py`'ye
   ekle (tercih edilen; bu dosya zaten o deseni bekliyor).
2. `index.html`'e `<script src="data/yerlesimler_asya.js?v=rNN">` satırı ekle
   (`VERI-YAPISI.md`: dosya eklenip satır eklenmezse yüklenmez).
3. C bölümündeki 98 + B bölümündeki 37 kimliği `arac/renkler.py`'ye ekle.
   **Kimlik eklenmeden üretim koşturulursa bu 344 nokta boyasız kalır.**
4. `arac/denetle.py`'deki `BEKLENEN_SAHIPSIZ` **değişmemeli** (35 kalacak).
5. `BOLGE = box(...)` kutusunu **açma** — önce 62-65°D şeridi doldurulmalı.

---

## Bu oturumun kasten yapmadıkları

- **`kur:` öncesi boşluklar kapatılmadı.** 62 kaydın kuruluş öncesi sahipsizdir;
  Oturum 11'in Krasnovodsk deseni. Motor `kur:`i okumadığı için bugün bu noktalar
  "delik" gibi görünür — ama kutu dışında oldukları için kimse görmüyor.
  Zaman dilimli Voronoi (`MIMARI.md` §3.1) yapıldığında doğru davranışa döner.
- **`k`/`m` (idari kademe) alanları boş bırakıldı** (`k:0`, `m` yok). Bölge
  katmanı bugün yalnız Osmanlı dönemlerinde çiziliyor (`MIMARI.md` §3.4) ve
  yabancı devletlerin idari kademesi haritada yok. Bu coğrafyanın kademelerini
  (Bâbürlü sûbeleri, Qing eyaletleri, Japon hanları) yazmak, `k`/`m` zamanlı hâle
  gelmeden anlamsız — 311'lik çelişki sayısını yüzlerce artırırdı.
- **8. boyut (askerî/sosyal/bilim/kültür/din) hiç açılmadı** — `CLAUDE.md` §1.6.
- **Sınır kutusu açılmadı, üretim koşturulmadı, commit atılmadı.**

## Sonraki oturumlara öneri

1. **62-65°D şeridi** (Herat, Sîstan, Belûcistan, Mekran) — kutunun doğuya
   açılmasının ön şartı. Sahipsiz: ne Oturum 4 ne bu oturum aldı.
2. **Çin'e 25-30 nokta daha** — Yunnan-Guizhou, Gansu-Qinghai, Guangxi seyrek.
3. **Orta Asya'nın 62°D doğusu** — Buhara, Semerkant, Taşkent, Hokand, Çârcûy.
   Oturum 11 bunları kutu yüzünden bırakmıştı; artık bu dosyanın Kaşgar-Yarkent
   ekseniyle birleşecek komşuları var.
4. **Sibirya ve Rus doğu genişlemesi** — Harbin/Aigun/Lüşun zinciri kuzeyde
   boşluğa bakıyor.

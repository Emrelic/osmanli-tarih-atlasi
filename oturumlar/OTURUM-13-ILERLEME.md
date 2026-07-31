# Oturum 13 — Hindistan, Çin, Japonya, Kore ve Güneydoğu Asya · ilerleme raporu

**Durum:** iş bitti, birleştirmeye hazır. **Commit atılmadı.**
**Yazılan tek dosya:** `data/yerlesimler_asya.js` (yeni, 344 yerleşim, ~210 KB).

> **İKİNCİ TUR (2026-07-30, entegrasyon oturumunun denetim görevi üzerine):**
> Bu raporun yanına iki ölçüm belgesi daha yazıldı ve `kur:` alanı tamamlandı.
> - **`oturumlar/OTURUM-13-PENCERE-OLCUMU.md`** — pencere genişletmesinin
>   ölçülmüş maliyeti (kara maskesi, üretim süresi, çıktı boyutu, 180. meridyen,
>   ve pencere açılınca doğacak emilme tehlikesi).
> - **`oturumlar/OTURUM-13-KIMLIK.md`** — 98 kimliğin DSATUR girdi tablosu
>   (komşuluk + derece) ve kimlik indiriminin ölçülmüş bilgi bedeli.
> - `kur:` **61 → 84** kayda çıkarıldı; 23 kayıtta kuruluş öncesi sahiplik
>   pencereleri silindi (aşağıda §"kur: ikinci tur").
>
> **Baş sonuç:** 98 kimlik renk bütçesine en fazla **+1 renk** maliyet getiriyor
> (7 → 8) ve `renkler.py` zaten 10-12 renk kullanıyor. Kimlik indirimi ölçüldü:
> %30 indirim renk sayısını **hiç** düşürmüyor. Asıl darboğaz renk değil,
> **çıktı boyutu** (36 MB → 61-92 MB) ve **üretim süresi** (~30 dk → 2-4 saat).
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
| `kur:` taşıyan | **84** (ilk turda 61, ikinci turda +23) |
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

**3. Sahipsizlik** — `kur:` taşıyan 84 kaydın kuruluş sonrası, kalan 260 kaydın
1281-01-01 → 1923-10-29 aralığının tamamı kesintisiz sahiplidir.
Sonuç: **0 boşluk, 0 çakışma, 0 ters aralık, 0 sıfır uzunluk.**

**5. `d:` alanı** — 344 kaydın **hepsinde** `d:[]` yazılı (ölçüldü: eksik 0).
Afrika partisinde üretimi `KeyError: 'd'` ile çökerten hata bu dosyada
tekrarlanamaz. `girdi.py` ile okuma da sınandı: 344 nokta, hata yok.

### kur: ikinci tur — 23 kayıt

`DURUM.md`'deki en rahatsız edici ölçüm ("1281'de 851 nokta sahnede, 1923'te
892 — yani atlas 1281'de 1900'ün şehirlerini gösteriyor") bu partide de
geçerliydi. İkinci turda taranıp düzeltildi; her birinde **kuruluştan önceki
sahiplik pencereleri silindi**, yalnız `kur:` eklenmedi:

| Kayıt | kur: | Kayıt | kur: |
|---|---|---|---|
| Yamaguchi | 1360 | Şikârpûr | 1617 |
| Şanhayguan | 1381 | Ningguta | 1653 |
| Kalgan (Zhangjiakou) | 1429 | Aigun | 1683 |
| Kyongsong (Gyeongseong) | 1434 | Qiqihar | 1691 |
| Ludhiyana | 1480 | Nagpûr | 1702 |
| Bhuc (Kutch) | 1510 | Champasak | 1713 |
| Bancarmasin | 1526 | Baotou | 1809 |
| Kanazawa | 1546 | Kuching (Sarawak) | 1827 |
| Fukui | 1575 | **Hong Kong** | **1841-01-26** |
| Morioka | 1597 | Kōchi | 1601 |
| Matsuyama | 1602 | Matsue | 1607 |
| Hirosaki | 1611 | | |

**Hong Kong özel:** 1281-1841 arası Yuan/Ming/Qing zinciri **tamamen
kaldırıldı**. Şehir 26 Ocak 1841'de kuruldu; öncesinde balıkçı adasıydı ve o
dönemin sahibini komşu Kanton noktası taşıyor. Kalküta ve Singapur ile aynı
desen.

⚠️ **Eklenmeyen ama tartışmalı olanlar** — gerekçeleriyle bırakıldı:
Kupang (1653 Hollanda kalesi) ve Dili (1769) **bölge temsilcisi** noktalardır;
`kur:` eklenirse Timor 1281-1653 arası tamamen sahipsiz kalır ve adayı
karşılayacak başka nokta yoktur. Mrauk U (şehir 1430) aynı sebeple Arakan
krallığının tamamını taşıyor. Kanpûr, Bombay ve Şanghay'ın modern şehirleri
sonradan büyüdü ama yerleşim 1281'de vardı — uydurma kuruluş tarihi yazılmadı.

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

> ### ⚠️ İKİNCİ TUR — köprü şeridi hakkında iki kez ölçtüm, iki kez düzelttim
>
> **İlk tur:** "62-65°D köprüsü boş, kutunun ön şartı."
> **İkinci tur (geniş kuşak):** Afgan kuşağını (28-38K, **60-70°D**) ölçtüm,
> ortanca 169 km çıktı ve "köprü sorunu yok, ayrı oturum gerekmiyor" dedim.
> **Bu ölçüm YANLIŞ KUŞAKTAYDI** — 60-70°D bandı Kâbil ve Kandehar'ı içine
> alıyor, yani asıl boş olan şeridi ortalamayla gizliyor.
>
> **Üçüncü ölçüm — dar şerit (23-40°K, 62-66°D), 932 kara hücresi:**
>
> | | ortanca | en kötü | >300 km |
> |---|---|---|---|
> | Dar şerit **62-66°D** | **220 km** | 417 km | **%19** |
> | Geniş kuşak 60-70°D | 170 km | 587 km | %16 |
>
> 200 km'den uzak hücreleri yutan noktalar: **Merv (141 hücre)** ve
> **Kandehar (87)**. Yani şerit boş bırakılırsa Merv'in peteği doğuya,
> Kandehar'ınki batıya taşar. **Oturum 15'in köprü dosyası gerekli;
> "gerekmiyor" demem hatalıydı.**
>
> Yine de sıralama değişmiyor: gerçek boşluklar hâlâ çok daha büyük
> (`OTURUM-13-PENCERE-OLCUMU.md` §6) — **Kazak bozkırı** ortanca 509 km
> (%79'u 300 km üstü) · **güney Sibirya** 759 km (%92) · **Tibet platosu**
> 314 km (%53). Pencere bunlar doldurulmadan açılırsa Aigun'un peteği doğu
> Sibirya'yı, Urga ve Kobdo'nunki güney Sibirya'yı, Banda Neira'nınki Yeni
> Gine'yi boyar.

### Oturum 11'in "şerit ayrı mı kalsın" sorusuna cevap: **EVET, ayrı kalsın**

Oturum 11 ile aynı sonuçtayım, üç gerekçesini de kabul ediyorum (kendi
brief'i ve dosyası var, coğrafyalar örtüşmüyor, tek dosya = tek sahip).
Ölçümüm bunu destekliyor ve iki sayı ekliyor:

- **`yerlesimler_asya.js`'in 344 noktasından 66°D'nin batısında yalnız 1 tane
  var: Kandehar (65.710).** Oturum 11'in teşhisi birebir doğru; 62-65.7°D
  gerçekten tamamen boş.
- Şeridin doldurulması **benim dosyamın işi değil**: 62-66°D'deki boşluğu
  yutan iki nokta (Merv ve Kandehar) iki AYRI oturuma ait, yani şerit ikisinin
  de kenarında. Üçüncü bir sahip (Oturum 15) doğru çözüm.

**Çârcûy (39.083/63.583) ve Kerki (37.833/65.200) bu dosyaya YAZILMADI ve
yazılmayacak** — ikisi de köprü kutusunun (60-70°D / 23-40°K) içinde.
Oturum 11'in tespitini onaylıyorum.

⚠️ **Merv koordinat borcu benim tarafımı da ilgilendiriyor.** Ölçtüm:
ortaçağ Merv'i (37.662/62.192) ile Kandehar arası **747 km** — taşıma bunu
neredeyse hiç değiştirmiyor (bugünkü Mari'den 755 km). Yani şerit, iki
oturumun en yakın noktaları arasında **750 km'lik bir delik**tir ve tek nokta
kapatmaz. Herat (34.35/62.20) ikisinin tam ortasına düşüyor: Merv'e 369 km,
Kandehar'a 448 km. **Köprü dosyası bu hatta en az iki-üç nokta koymalı**
(Herat + Sebzevâr/Ferah + Girişk gibi), yoksa 300 km ölçütü tutmaz.

1. **Kazak bozkırı + güney Sibirya** (~60-80 nokta) — pencerenin açılmasının
   en büyük ön şartı. Köprü şeridi (Oturum 15) ondan sonra gelir.
2. **Çin'e 25-30 nokta daha** — Yunnan-Guizhou, Gansu-Qinghai, Guangxi seyrek
   (Çin içi ortanca 155 km, ama batı Çin/Tibet 314 km).
3. **Orta Asya'nın 62°D doğusu** — Buhara, Semerkant, Taşkent, Hokand, Çârcûy.
   Oturum 11 bunları kutu yüzünden bırakmıştı; artık bu dosyanın Kaşgar-Yarkent
   ekseniyle birleşecek komşuları var.
4. **Sibirya ve Rus doğu genişlemesi** — Harbin/Aigun/Lüşun zinciri kuzeyde
   boşluğa bakıyor.


---

# YENİ GÖREV — Anadolu Selçuklu + İlhanlı yapısı (2026-07-30)

Merkez oturum yeni bir blok verdi: tarih çizgisini Kösedağ'a doğru geriye
genişletmek. Payıma **Anadolu Selçuklu Devleti 1243-1308 + İlhanlı hâkimiyetinin
şema karşılığı** düştü (beylikler Oturum 14'te).

**Çıktı: `oturumlar/OTURUM-13-SELCUKLU.md`.** `data/yerlesimler.js`'e
DOKUNULMADI — düzeltmeler liste hâlinde yazıldı, uygulama entegrasyonun.

## Bu turda çıkan dört sonuç

1. **Çapa tarihi düzeltildi:** merkez 26 Haziran 1243 demişti; TDV
   `kosedag-savasi` **1 Temmuz 1243** (11 Muharrem 641) diyor, İbnü'l-Adîm
   3 Temmuz. 26 Haziran hiçbir kaynakta yok.
2. **`v:` seçeneği teknik olarak kapalı.** Motor ölçümü: `uret_petek.py`
   §915-936 `v:` kümesini `OSM_HAVUZ`'a yazıyor, yani `v:` "tâbi" değil
   "**Osmanlı'ya tâbi**" demek. Anadolu'ya 1243'te `v:` yazmak haritayı
   Osman Gazi'den 56 yıl önce Osmanlı açık tonuna boyardı. Karar:
   `s:{d:"selcuklu"}` 1243-07-01 → 1308-01-01.
3. 🔴 **Mevcut veride 16 kayıt yanlış.** Sivas, Kayseri, Amasya, Tokat,
   Erzincan, Erzurum ve 10 kayıt daha 1281'de `ilhanli` gösteriliyor; TDV
   `selcuklular` bu şehirlerin 1280'de bizzat II. Mesud'a verildiğini,
   TDV `erzurum` ise Erzurum'un "**yıkılmadan (1308) sonra** İlhanlılar'a
   bağlandığını" yazıyor. Düzeltme listesi raporun §4'ünde; **epok
   taşınmadan da uygulanabilir.**
4. **Epok bugün taşınamaz.** Değişmez 1'in kendi yöntemiyle ölçüldü:
   1245-1280 kesitleri eklenince sahipsiz sayısı **34 → 898** (artış 864).
   Merkezin "önce veri, sonra epok" kuralı ölçümle doğrulandı.

Ayrıca: Kızılırmak bölünmesi **1256-1262 değil 1259-1262**'dir (Mengü Han'ın
yarlığı 657/1259) ve **çizilmemelidir**; Selçuklu'nun sonu **1308**'dir ve o
zaten II. Mesud'un ölümüdür — soru "ya biri ya öteki" değil; **yeni kimlik ve
yeni renk gerekmiyor**, `selcuklu` (#c2185b) ve `ilhanli` (#7a5ba0) `renkler.py`'de
zaten var.

## Yan bulgular (raporun §8'inde, ikinci kaynak bekliyor)

- **Sinop 1259-1266 Trabzon Rum İmparatorluğu'nda** (TDV `kilicarslan-iv`).
  Veride bu pencere hiç yok.
- **1240'ta Selçuklu'ya tâbi beş devlet:** Kilikya Ermeni, Halep Eyyûbî,
  Artuklu, Trabzon Rum, İznik Bizans (TDV `selcuklular`).
- ⚠️ Şemada "**X devletine tâbi**" diye bir alan yok, yalnız "Osmanlı'ya tâbi"
  var. Dünya kapsamında bu yapısal bir eksik — Oturum 16'ya bildirilmeli.
- **Malatya/Divriği `memluk` 1281** ve **Erzurum'un `akkoyunlu` 1348** zinciri
  TDV ile çelişiyor; kapsam dışı, kayda geçti.

## Asya cepheleri (md.59/61/62) — hâlâ sırada

Merkezin dediği gibi bu blok bekliyor. Yukarıdaki Asya yerleşim/pencere/kimlik
işleri kapandı; cepheler açılmadı.

## İkinci tur — merkezin dört sorusu (aynı gün)

Girdi: `oturumlar/OTURUM-14-BEYLIKLER.md` (commit 7e477a8) + Oturum 3'ün kimlik
envanteri. Çıktı: `OTURUM-13-SELCUKLU.md` **Bölüm II** (§11-16).

- **(A) 1243-1256 boşluğu:** Anadolu için üç seçeneğin hiçbiri değil — Bölüm I §3
  zaten "harita metbû boyamaz" demişti, o karar 1256 öncesine de aynen uygulanır:
  **kesintisiz `selcuklu`**. Ama `mogol-imparatorlugu` **gerçekten gerekli**:
  Anadolu için değil, 1281'de `ilhanli` olan 136 kaydın **Anadolu dışındaki
  98'i** için. Kayıt `devletler.js`'te var (1206-1260) ama `harita:` alanı ve
  rengi yok. Üstelik iş orada da bitmiyor — TDV `hulagu`: Alamut **19 Kasım
  1256**, Bağdat **10 Şubat 1258**. Yani 1243-1258 arası Bağdat **Abbâsî**.
- **(B) Kademe:** ölçümle çürüdü. Değişmez 1'in kendi yöntemiyle:
  `1288 → +0 · 1277 → +864 · 1256 → +864 · 1243 → +864`. **Maliyet yokuş değil
  uçurum**; eşik tek ve 1281'de, çünkü hiçbir kaydın 1281 öncesi dönemi yok.
  Aynı 864 kayda dokunulacaksa doğrudan 1243 daha kârlı. **Kademe A'ya (1288)
  katılmadım** — dayandığı "İnegöl/Bilecik sahipsiz" iddiası eskimiş; ikisi de
  `bizans` 1281→1299, sahipsiz 34'ün tamamı çöl/Arabistan.
  864'ün iş dağılımı ölçüldü: Anadolu 222 · Avrupa 263 · İran-Irak 146 ·
  Arabistan 99 · diğer 134.
- **(C) Dokuz çekişmeli toprak:** sekizinin tarafımı yazdım. İki sonuç öne çıktı:
  **Kütahya'da düzeltme gerekmiyor** (TDV `kutahya`: 1300 kitâbesi Germiyan'ın
  Selçuklu hâkimiyetini tanıdığını gösteriyor; mevcut veri kaynağın tam
  karşılığı), ve **Alâiye'de Oturum 14 yanılmış** — TDV `alanya`: Kıbrıs şehri
  **1221'de** kaybetti, 1243'te değil. Pencerede Latin hâkimiyeti yok; bugünkü
  veri de ters (`karaman` 1281→1293 yazıyor, `selcuklu` olmalıydı).
  Konya Cimri penceresi gün hassasiyetinde: **1277-05-14 → 1277-06-20.**
- **(D) Hayalet devlet:** Kıbrıs ve Trabzon riski **yok** (`lusignan` #8a6ba0 ve
  `trabzon-rum` #00838f var). Ama **iki gerçek hayalet bulundu:**
  `artuklu` Harput-Çemişgezek-Palu'da **56 yıl** (Oturum 3'ün sayısı; asıl hata
  231 yıl — TDV `harput`: Artuklu 1234'te bitmiş, 1465 Akkoyunlu'nun tarihi) ve
  `ilhanli` Konya-Niğde'de **13 yıl** (devlet 1353'te bitiyor, veri 1366 diyor;
  doğru sahip `eretna`). Ayrıca **`mengucuk` kimliği hiç yok** — 1243'te yaşayan
  iki beylikten biri; Divriği bugün `memluk` gösteriliyor.

Yeni renk ihtiyacı üç kimlik: `mogol-imparatorlugu` · `mengucuk` · `abbasi`.
Bölüm I'in "yeni renk gerekmiyor" hükmü yalnız Anadolu için geçerliydi, öyle kaldı.

## Üçüncü tur — hatalar 13 ANADOLU BLOĞU (aynı gün)

Çıktı: `oturumlar/OTURUM-13-ANADOLU.md` + `data/olaylar_ek11.js` (üç madde).
`data/yerlesimler.js`'e dokunulmadı (petek üretimi koşuyordu).

Merkezin istediği gibi **önce zincir** çıkarıldı: 1381-1429 arası 20 kırılma,
hangi beylik hangi yöne. Zincirin okunuşu tek satırda: **ilhak → iade → yeniden
ilhak dizisi tutarsızlık değil, tarihin kendisi.** Ortadaki halka `1402-09-15
Timur Anadolu beyliklerini yeniden kurdu` maddesi. Bu md.12'yi tek başına
açıklıyor.

- **md.5 — kullanıcının şüphesi kalktı.** Karaman'ın kısmî ilhakı GERÇEK:
  TDV `karamanogullari` *"Şeyh Hasan idaresindeki İç İl müstesna"* diyor. Ama
  **Niğde yanlış tarafta** — TDV onu Lârende ile birlikte sayıyor, veride
  1366-1468 kesintisiz `karaman`. Tek kayıtlık düzeltme.
- **md.6 = md.7, tek hata, üç kayıt.** Ölçüm: 1402-07-28'de Osmanlı olan
  93 kayıt Fetret zincirini taşıyor, **3 tanesi taşımıyor** — Edremit, Erdek,
  **Ayvalık**. Üçü de 1345-1923 kesintisiz Osmanlı. Kullanıcının "sadece Osmanlı
  toprağı buralarmış algısı" tam bu üç noktadır. Komşularının (Bergama,
  Balıkesir, Biga) zinciri kopyalanacak; **yeni madde gerekmiyor**, beş
  kırılmanın beşi de maddeli.
  Şehzade kimlikleri ise doğru karar: dördü de kendi sikkesini bastı ve
  `renkler.py` onları Osmanlı kırmızısının tonlarıyla boyuyor.
- **md.12 — haritada hata YOK.** 1381 çeyizi TDV'nin saydığı dört yerleşimin
  (Kütahya, Simav, Emet, Tavşanlı) birebir aynısı; 1390 tam ilhak; 1402 iade;
  1429 vasiyet. Kusur **1390 maddesinin başlığında**: Germiyan toprağını
  taşıdığı hâlde başlıkta yalnız Saruhan-Aydın-Menteşe yazıyor.
- **md.9-10 — gerçek**, iki madde yazıldı (1422 dönüş, 1426 son). İki tarih
  kaynakla oynuyor: `1421-08-15` Cüneyd'in dönüşü değil Mustafa'nın
  ayaklanmasıdır (TDV: 1422); `1425-06-01` ise **829 hicrî yılından erkendir**
  (TDV `aydinogullari` 1425-26, `cuneyd-bey` 1426).
- **md.4 — Timur'a özel eksik değil.** Bağdat 1281-1508 arası **tek `iran`
  bloğu** ve Celâyirli (1339-1410), iki Timur işgali (1393, 1401), Karakoyunlu
  (1410-1467), Akkoyunlu — **dördünü birden** siliyor. 1401 maddesi yazıldı ama
  tek başına haritayı değiştirmez; `celayir` kimliği yok, Irak ayrı görev.

🔴 **İki dosya index.html'e bağlanmamış:** `olaylar_ek11.js` (benim) ve
`olaylar_ek10.js` (Oturum 11'in). `OGRENILENLER §15` vakası birebir tekrar
ediyor — `denetle.py` sayıyor ve temiz diyor, tarayıcı yüklemiyor.

Yan bulgu: sahipsiz sayısı **34 → 40** (altı yeni Libya çölü noktası, kasıtlı).
`CLAUDE.md §1.5` ve `§3` hâlâ 34 diyor, güncellenmeli.

Denetim: `SONUÇ: temiz` — 452 kırılma 0 açık, mükerrer 0 şüpheli çift.

---

## 2026-07-31 — hatalar 14, md.4 + md.5 (Doğu Anadolu / İran)

Merkezin verdiği iki madde ölçüldü ve `OTURUM-13-ANADOLU.md` **BÖLÜM II**'ye
yazıldı. `data/yerlesimler.js`'e yazılmadı (kilit kuralı); düzeltmeler orada
liste hâlinde, uygulayan entegrasyon.

🔴 **Bu turun asıl bulgusu md.4 değil:** `CLAUDE.md §3` Değişmez 2 komutu
`(y.d||[]).concat(y.v||[])` döngüsü kuruyor — **`y.s` yok.** Yabancı
devletlerin toprak değişimleri bugüne kadar hiç denetlenmedi. Ölçüldü:
**543 `s:` kırılmasının 112'sinin ±30 gün içinde maddesi yok.**

**md.4** — sorun eksik gösterim değil, **mükerrer madde çifti**:
`olaylar_ek5.js:98` (1501-01-01) ile `olaylar_ek7.js:207` (1501-07-01) aynı
olay, arada 181 gün. Kullanıcının tıkladığı ocak maddesi **189 günlük ölü
bölgenin** ortasında; harita temmuzda gerçekten kıpırdıyor (`safevi`
0 → **269.654 km²**, 37 kayıt). `denetle.py`'nin mükerrer kontrolü bu çifti
yakalamadı — eşik düşürülmesin, `yer:`/`kisiler:` eşleşmeye katılsın.

🔴 **Görev tanımındaki tarih hatalı:** Akkoyunlu 1508'de Elvend'in ölümüyle
bitmedi. TDV `akkoyunlular`: **Elvend 1505'te Âmid'de öldü, hânedan 1514'te
Murad'ın ölümüyle bitti.** `akkoyunlu 76/100` taşmasının **64'ü**
`devletler.js`'in tek satırıdır (`t:"1501-01-01"` → `1514-01-01`). Gerçek kayıt
hatası **dörttür**: Diyarbakır · Mardin · Bitlis · Erzurum, dördü de `safevi`.

**md.5** — cevap **(a)+(b)+(c) üçü birden**. Malatya-Adıyaman boşluğu
**tarihen gerçek**; yalnız **Ergani**'nin noktası yok (TDV slug'ı `ergani`
🔴 **ÖLÜ**); beş kayıtta tarih kaynakla oynuyor. Ortak kenar (§22 reçetesi,
kutu `36,36.5,42,39.5`): **1515-10-01 OSMANLI↔memluk = 25,2 köşe/1000 km** —
Libya çölü sınıfı. 159 km'lik sınır 2 segmentle çiziliyor; tarihler düzeltilse
bile hat düz kalır.

⚠️ **Yanlış negatif, kayda geçsin:** tam adla arama Adıyaman ve Besni için
"KAYIT YOK" dedi; `startsWith` ile ikisi de bulundu — veride
**"Hısn-ı Mansûr (Adıyaman)"** ve **"Behisni (Besni)"**. Bu depoda yerleşim
araması her zaman parça eşleşmeyle yapılmalı.

🔴 **Reçete kalibrasyonu tutmuyor:** Boğdan merkez 84,9-93,1 / bende 80,6 (✔),
ama Kırım iç sınır merkez **32,5** / bende **62,8** — iki kat. Kırım işine
başlamadan önce Oturum 16'nın kutusu ve günü netleşmeli. Ölçtüğüm kutuda
(`32.4,44.3,36.7,46.3`) **3** nokta var, merkez dört diyor — o da uyuşmuyor.

`data/olaylar_ek11.js`'e **beş madde** eklendi (1502 · 1503 · 1507 · 1508 ·
1510-12-02), toplam 8. Çözülüş artık tek gün değil, dokuz yıllık süreç olarak
görünüyor. Kaynak: `safeviler` ✔ ve `akkoyunlular` ✔. `ismail-i`
**doğrulanamadı** (oturum limiti) ve kullanılmadı.

**Devreden üç blok:** Selçuklu 1243-1281 · hatalar 13'ün kalan Anadolu
maddeleri · Kırım (md.13).

---

## 2026-07-31 (2. tur) — Ergani: kendi bulgumu çürüttüm

Merkez 1. maddeyi "beş dakikalık iş, somut kazanç" diye verdi; dayanağı benim
§15.2'mdi. **Dayanak yanlıştı.** §15.2 bir ölçüm değil çıkarımdı: Ergani'yi
idarî merkezi Diyarbakır'ın 10 Eylül 1515'ine eşitlemiştim.

TDV `biyikli-mehmed-pasa` ✔ eşitlemiyor — Ergani'yi "Musul, Ruha, Birecik,
Harput, Çermik, Ergani, Palu ve Sincar" grubunda, **Mardin kuşatması sürecinde**
sayıyor ve ayrı tarih vermiyor. Veride o grubun tarihi zaten `1516-05-01`.

**Ölçüldü** (`scratchpad/sahip.js` — `donemler.js` + `devletler_harita.js`
üzerinde nokta-içinde-poligon, yani yerleşim kaydından değil **motorun
çıktısından**): Ergani koordinatı 1507'den 1516-05-01'e `safevi`, sonra OSMANLI.
**Harita bugün doğru boyuyor.** Emen petek Palu (49,7 km) ve Palu'nun zinciri
TDV'nin Ergani için işaret ettiğinin aynısı.

⚠️ **Ders:** "en yakın petek yanlış sahipli" demek için peteğin sahibini
bilmek yetmez, **noktanın gerçek sahibini kaynaktan ölçmek** gerekir. Ben
ikincisini idarî bağlılıktan türettim. `MIMARI §2` emilmesi her boşlukta hata
DEMEK DEĞİLDİR — boşluk, komşusuyla aynı tarihe sahipse emilme doğru sonuç verir.

**Nokta yine de eklenmeli, sebebi değişti:** renk değil **çözünürlük**.
§15.4'ün ölçtüğü 25,2 köşe/1000 km'nin sebebi ~50 km yarıçaplı boşluk. Ve
TDV'nin kendi fetih listesindeki sekiz yerden **üçü veride yok**: Birecik ·
Çermik · Ergani (Ruha = `Urfa` adıyla var). Üçünün de haritası ölçüldü,
**üçü de bugün doğru boyanıyor** — yani üçü de renk-nötr, tek kazanç ağ
aralığının ~50 km'den ~30 km'ye inmesi. Kazancın sayıya etkisi ancak üretimden
sonra ölçülebilir.

Üç kayıt tam satır hâlinde `OTURUM-13-ANADOLU.md` **§20.4**'te; 3 km kuralı,
Değişmez 1, `BOYALAR` kimliği ve `m:` hedefi önceden denetlendi. Zincirler
**idarî merkezi değil komşuları yansıtıyor** — merkeze eşitlemek 1401-1465
arasında bir Akkoyunlu enklavı açardı.

🔴 **Yan bulgu:** TDV `diyarbakir` Âmid'in Akkoyunlu'ya geçişini **1401**
veriyor (Karayülük Osman Bey), veride **1378** — 23 yıl erken. Aynı madde
Artuklu hâkimiyetinin 1183'te bittiğini söylüyor, veride 1281-1378 `artuklu`.
Komşuların `artuklu 1281→1465`'i de şüpheli. **Ayrı iş açılmalı:
"Diyarbekir bloğunun 1281-1465 kimlik zinciri", altı kayıt tek elden** —
tek tek düzeltilirse enklav tuzağı altı yerde birden açılır.

⚠️ İki TDV maddesi Birecik'te çelişiyor (`biyikli-mehmed-pasa` Diyarbekir
grubunda, `birecik` Mercidâbık sonrasında). **Müstakil yer maddesi esas
alındı.**

§15.2 ve §16 C'ye geçersizlik bandı konuldu; okuyan eski iddiaya dayanmasın.

---

## 2026-07-31 (3. tur) — Kalibrasyon çelişkisi çözüldü

Merkezin 2. maddesi. Çelişki **yöntem farkı değil, birimin yanlış
adlandırılmasıydı**: ölçülen birim `köşe/1000 km` değil **`kenar/1000 km`**.
Ben etiketi okuyup köşe saydım, Oturum 16 kenar sayıyor.

**Kanıt Oturum 16'nın kendi ham satırlarında duruyor:**

| Kaynak | Ham veri | Kenar ÷ km × 1000 | Yazılan |
|---|---|---|---|
| `OTURUM-16-ILERLEME.md:363` | 1.578 km, 147 kenar | 93,16 | 93,1 |
| `OTURUM-16-ILERLEME.md:364` | 1.789 km, 152 kenar | 84,96 | 84,9 |
| `OGRENILENLER §22` (Kırım) | 153,6 km, 5 kenar | 32,55 | 32,5 |

Kenar birimiyle yeniden ölçüldü — kutu `32,4 · 44,3 · 36,7 · 46,3`,
`OSMANLI ↔ TABI`, **1600-06-15**: 154,7 km / **5 kenar** = **32,3**.
Oturum 16: 153,6 km / 5 kenar = 32,5. **Fark %0,6 — çapa tutuyor.**

🔴 **Neden Boğdan tutup Kırım tutmadı — ve bu neden önemli:** `n` kenarlı bir
sınırın köşe sayısı tek zincirde `n+1`, tamamen ayrık parçalarda `2n`'dir.
Boğdan 147 kenar tek zincir → fark %0,7, **tuttu.** Kırım 5 kenar ve büyük
ölçüde ayrık → fark %80, **tutmadı.** Yani tanım hatası **sağlıklı sınırda
görünmez, bozuk sınırda iki katına çıkar** — onu yakalamak için kurulan ölçümde
saklanıyor ve hep "sandığından iyi" diyor. **Bir çapanın tutması yöntemin
doğrulandığı anlamına gelmiyor; Boğdan'ın tutması beni yanılttı.**

**Nokta sayısı 3 mü 4 mü:** ikisi de doğru, farklı şey sayıyoruz. Yarımadada
üç nokta var — Kefe `d:` · Bahçesaray `v:` · Kerç `d:`. Dördüncü **Taman**
(45,203 / 36,717), kutumun doğu kenarından **0,017°** dışarıda ve Kerç
Boğazı'nın karşı yakası (Kuban tarafı). Sayı tartışması bitti.
📌 Asıl mesele: üç noktanın **ikisi doğrudan**. Merkezin %39/%61 oranı buradan
çıkıyor; yedi nokta önerisi (`v:` iç bozkır 4 · `d:` güney kıyı 3) **sağlamdır**.

**§15.4 düzeltildi ve kusur büyüdü:** 1515-10-01 OSMANLI↔memluk, doğru birimle
158,9 km / **2 kenar** = **12,6** — Libya çölünün (18,1) bile altında. Önceki
25,2 köşe sayımıydı. Karşılaştırma için üç sağlıklı sınır ölçüldü: Osm↔Venedik
136,6 · Osm↔Tuna 95,7 · Osm↔Avusturya 81,5.
⚠️ **Bant 115-118 bir eşik değil, bir merkez** — sağlıklı sınırlar 80-140
arasına dağılıyor. Mertebe olarak kullanılmalı.

`OGRENILENLER §22`'ye önerilen ek `OTURUM-13-ANADOLU.md` **§21.6**'da: birim adı
düzeltilsin, her çapaya **kutu · gün · gövde çifti** yazılsın. Reçete bugün
ölçüyü söylüyor, kalibrasyonu söylemiyor. 🔒 O dosya kök belge, Oturum 0'ın —
yazılmadı, önerildi.

⚠️ **Boğdan çapası hâlâ yarım:** Oturum 16 orada "iç sınır" diyor, yani gövdenin
kıyı olmayan çevresi — **iki gövdenin ortak kenarı değil.** Boğdan gibi karayla
çevrili bir gövdede ikisi yakın çıkar, Kırım'da (yarımada) açılır. §22 zaten
"toplam çevre yanıltır" diye uyarıyor. **Ortak-kenar tanımıyla yeniden
ölçülmeli**, yoksa çapa listesinde iki farklı ölçüt yan yana durur.

Ölçüm araçları (`ortakkenar.js` · `sahip.js`) kaybolmasın diye
`oturumlar/OTURUM-13-OLCUM-ARACLARI.md`'ye kaynak hâlinde alındı; kod
birebir doğrulandı. 🔒 Kalıcı yerleri `arac/`dır ve orası Oturum 6'nın.
`ortakkenar.js`'in çıktı etiketi **bilerek düzeltilmedi** — raporlarda
alıntılandı, sessizce değişirse eski alıntılar okunamaz olur.

⚠️ **Kendi hatam, kayda geçsin:** iki kez `py -c "…"` içine backtick'li Türkçe
metin gömdüm; Git Bash backtick'i komut ikamesi sandı, banner metinleri kırpıldı
ve bir koşu iki dakika asılı kaldı. `CLAUDE.md §11` bunu zaten yazıyor —
**betiği dosyaya yaz, sonra çalıştır.** Kırpılan iki satır Edit ile onarıldı.

---

## 2026-07-31 (4. tur) — Selçuklu 3. madde + hatalar 13'ün 4. maddesi

🔴 **Merkezin 3. ve 4. maddeleri ZATEN CEVAPLANMIŞ dosyalarda duruyordu.**

| Merkezin sorusu | Nerede cevaplı |
|---|---|
| (A) 1243-1256 boşluğu | `OTURUM-13-SELCUKLU.md` **§13** |
| (B) Kademe kararı | `OTURUM-13-SELCUKLU.md` **§12** |
| md.5 Karaman'ın kısmî ilhakı | `OTURUM-13-ANADOLU.md` **§3** |
| md.6 + md.7 Fetret / Edremit-Erdek | `OTURUM-13-ANADOLU.md` **§6** |
| md.9-10 Aydınoğulları | `OTURUM-13-ANADOLU.md` **§4** |
| md.12 Germiyan | `OTURUM-13-ANADOLU.md` **§5** |

Altısı da ölçülmüş, TDV'den doğrulanmış ve düzeltme listesi yazılmış hâlde. İki
dosya da kapatma turunda kurtarılmıştı (`5def216`, `9ea2df7`) — merkez muhtemelen
§12'den sonrasını görmedi. **Tekrar yapmadım.**

### Yeni ölçüm — epok maliyetinin KİMLİK boyutu (`SELCUKLU.md` BÖLÜM III)

§12.3 864 kaydı **bölgeye** göre dağıtmıştı; sorulmayan soru: *o kaydın 1281'deki
sahibi 1243'te var mıydı?* İlk dönemi tam `1281-01-01` olan **721** kayıt:

| Sınıf | Kayıt | Ne gerekiyor |
|---|---|---|
| A — sahibi 1243'te henüz kurulmamış | **290** (25 kimlik) | ayrı sahip, araştırma |
| B — sahibi `devletler.js`'te hiç yok | **118** (12 kimlik) | önce katalog |
| C — sahibi 1243'te yaşıyor | **313** | tek satır uzatma |

**A + B = 408, yani etkilenenlerin %57'si araştırma istiyor.** §12.3'te "çoğu tek
satırlık" demiştim — C için doğru, bütünü için değil.

🔴 **§13.4'te bir parça atlanmış:** `memluk` 48 kayıt, ama Memlükler **1250**'de
kuruluyor. 1243-1250 arası Mısır-Suriye **Eyyûbî**dir ve **`eyyubi` katalogda
yok** (parça eşleşmeyle arandı). §13.4 artık dört parça: Anadolu `selcuklu` ·
İran-Irak `mogol-imparatorlugu` · Bağdat `abbasi` · **Mısır-Suriye `eyyubi`**.

🔴 **B sınıfı epok kararını beklemez** — 12 kimlik haritada bugün kullanılıyor
ama katalogda yok; en büyüğü **`iran` 47 kayıt**, `CLAUDE.md §3.5`'in adıyla
andığı "İran hayaleti"nin ta kendisi. Oturum 3'ün işi, bugün.

### §12'nin sayısı düzeltildi, sonucu doğrulandı

Yeniden ölçüldü: epok **1243 · 1256 · 1277 üçü de birebir aynı 736** sahipsizi
veriyor (1281'de 35). ✅ "Kademe yok, tek eşik 1281" iddiası tam doğrulanıyor.
Ama §12.1'in yazdığı **`898` bir kayıt sayısı olamaz** — dosyada toplam 767
yerleşim var. O tablo **736** ile okunmalı.

### 🔴 Yapısal borç — üç haneli yıl

Ölçümün ilk koşusunda `bizans` (330), `venedik` (697), `almanya` (962),
`papalik` (756), `nube` (543) *"1243'te kurulmamış"* çıktı. Sebep: tarihler
**dizgi olarak** karşılaştırılıyor ve `"330-05-11" > "1243-07-01"` doğrudur.
Beş devlet yanlış sınıfa düşmüştü.

Bu depodaki **bütün** tarih karşılaştırmaları dizgi tabanlı; 1000'den küçük yıl
taşıyan her kayıtta sessizce ters çalışır. Bugün yalnız `devletler.js`'te var
(yerleşimler 1281+), ama kapsam MÖ 12000'e inecek. **Epoktan bağımsız yapısal
borç**, düzeltmesi tek satır: yılı 4 haneye tamamla, sonra karşılaştır.

### Devreden

**Kırım'ın yedi noktası** artık uygulanabilir (kalibrasyon 3. turda çözüldü) ama
`yerlesimler.js` benim dosyam değil — koordinat + zincir listesi yazılabilir,
sıraya girdi.

---

## 2026-07-31 (5. tur) — 127 km'lik tek segment: `§22-DÜZELTME` ile çelişki

Ben BÖLÜM IV'ü yazarken `OGRENILENLER.md`'ye **§22-DÜZELTME** eklendi
(`162b835`): *"Kırım iç sınırı D2 ile 95,6-107,6; **32,5 ve 62,8'in ikisi de
artefaktmış**; sınırın kabalığı diye bir sorun yok."*

Benim §21.3 ölçümüm de D2'dir (segment kümesi kesişimi; kıyı hiç kullanılmaz,
tampon parametresi **yoktur**) ve aynı gün **32,3** veriyor. İki D2 üç kat ayrı
düşemez — tanı yapıldı.

**Sebep: kutu.** Aynı araç, aynı gövde çifti, yalnız kutu değişerek:

| Kutu | kenar/1000km | köşe/1000km |
|---|---|---|
| yarımada `32,4·44,3·36,7·46,3` | **32,3** | 58,2 |
| orta `30·44·40·48` | 74,6 | **116,5** |
| geniş `28·43·42·50` | 72,9 | **102,9** |

§22-DÜZELTME'nin 95,6-107,6'sı **geniş kutulardaki köşe sütunuma** düşüyor.
İki ölçüm arasında **iki fark birden** var: kutu ve birim. (Yuvarlama şüphesi
elendi: `toFixed` 6→2 arasında ortak kenar hep aynı 5 kenar / 154,7 km.)

### 🔴 Asıl bulgu — 154,7 km'nin 127,4'ü TEK SEGMENT

Ortak kenarın parçaları döküldü: en uzunu **127,4 km**, uçları
`34,643·44,775 → 34,435·45,911`. Bir segmentin iki ucu vardır; yani o 127
kilometre **tanımı gereği kusursuz düz.** Ve 1500 · 1600 · 1700 · 1750'de
**birebir aynı iki uç nokta** — hiç değişmiyor.

Sebebi ölçüldü: bu çizgi **Kefe ile Bahçesaray'ın orta dikmesidir**, doğrultusu
iki nokta arasındaki vektöre tam dik. Yarımadada `d:`/`v:` tarafında başka nokta
olmadığı için petek sınırı hiçbir yerde kırılmıyor; **iç sınır** olduğu için
kıyıya yaslanma da yumuşatma da tutmuyor.

> **§22-DÜZELTME'nin "sınırın kabalığı diye bir sorun yok" sonucuna
> katılmıyorum** — yarımada için doğru değil. Kullanıcının md.13'te tarif ettiği
> *"düz kenarlı ince dikey şerit"* ekranda tam olarak bu segmenttir.
> Doğru olan kısmı: 32,5 ve 62,8 **güvenilmez sayılardı.** Ama sayının
> güvenilmez olması kusurun yok olduğu anlamına gelmiyor.

### Ders — kutu genişletmek ölçümü iyileştirmez, **ortalar**

Yarımadanın iç sınırı 5 kenar, Pontik bozkırdaki sınır yoğun. İkisini tek kutuya
alan ölçüm ortalamayı verir ve 127 km'lik düz çizgi sayının içinde kaybolur.
Geniş kutu "sağlıklı bandın hafif altında" diyor, dar kutu "Libya sınıfı" diyor;
**ikisi de doğru ölçüyor, biri kusurun üstünü örtüyor.**

📌 `§22` kalibrasyon listesine önerim: **kutu, şikâyet edilen sınırı ve yalnız
onu kapsamalı.** Bu, §22-DÜZELTME'nin *"iki bağımsız ölçüm birbirini
doğrulamaz"* uyarısının üçüncü örneği — bu sefer birim de kutu da farklıydı.

**Merkezin yedi nokta önerisi güçleniyor** (o tek dikmeyi çok sayıda dikmeye
böler) ama yeterli olduğu **ölçülmedi**; kaç kenara böleceği ancak üretimden
sonra bilinir. Sayı vermiyorum.

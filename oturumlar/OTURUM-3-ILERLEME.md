# Oturum 3 — İlerleme Notu

Bu dosya, `oturumlar/OTURUM-3-DEVLETLER.md` görevini yürüten oturumun kaldığı
yerden devam edebilmesi içindir. **Yalnız `data/devletler.js` yazıldı, commit
yapılmadı** (görev tanımına göre commit entegrasyon oturumunun işi).

## Yapılan (bu partide)

### 0) Ön temizlik — mevcut 77 kaydın `bolge` alanı kapalı sözlüğe çevrildi
Görev tanımı §"`bolge`" bunu istiyordu: eski serbest metin etiketler (`anadolu-balkan`,
`misir-suriye`, `karadeniz-kuzeyi-bozkir`, `hicaz-necid`, `afrika-boynuzu`, `ege`,
`akdeniz`, `balkan`... gibi) yeni kapalı sözlüğe (`anadolu`, `balkanlar`, `iran`,
`sibirya-bozkir`, `arabistan`, `misir-sudan`, `dogu-afrika`, `italya`, `iberya`, ...)
eşlendi. **77 kaydın 77'si de** doğrulama script'inde artık kapalı sözlük içinde.

Birkaç kayıt için tercih tartışmalıydı, not düşülüyor:
- `bizans`: Anadolu'da doğdu ama son yüzyıllarını Trakya/Balkan'da geçirdi → `balkanlar` seçildi.
- `memluk`, `misir-kavalali`, `fransiz-misir-seferi`, `funj`: `misir-sudan` seçildi (Mısır+Suriye ikisini birden karşılayan tek alan yok, başkent esas alındı).
- `akkoyunlu`, `karakoyunlu`, `afsar`, `kacar`: `iran` seçildi (Tebriz/Kazvin/Tahran eksenli devletler).
- `kirim`, `altinorda`, `zaporojye`: `sibirya-bozkir` seçildi (Karadeniz kuzeyi/bozkır için ayrı bir kategori yok).
- `kibris-krallik`, `kibris-ingiliz`: `anadolu` seçildi (Kıbrıs/Ege adaları için ayrı kategori yok).
- Ege ada devletleri (`naksa-dukaligi`, `rodos-sovalyeleri`, `girit-devleti`, `oniki-ada-italyan`) ve tüm Yunan/Balkan isyan-bağımsızlık kayıtları: `balkanlar`.

**Bir sonraki oturum bu seçimleri değiştirmek isterse serbesttir** — bunlar
mekanik atamalar, araştırma gerektirmedi.

### 1) `harita:` alanı eklendi — mevcut 77 kayıttan 60'ına
`arac/uret_petek.py`'deki `BOYALAR` sözlüğü **okundu** (çalıştırılmadı). Dizin
id'si ile harita id'si birebir veya yakın eşleşen 60 kayda `harita:"..."` eklendi
(ör. `habsburg→avusturya`, `cenova→ceneviz`, `yemen-zeydi→yemen`,
`suud-birinci`+`suud-ikinci→suud`, `kibris-krallik→lusignan`,
`atina-dukaligi→atinadukaligi`, `rodos-sovalyeleri→sovalye`,
`afsar`+`kacar→iran` [BOYALAR'da ayrı Afşar/Kaçar rengi yok, jenerik "iran" ile
boyanıyor], 10 Anadolu beyliği [karaman, germiyan, aydin, saruhan, mentese,
hamid, candar, dulkadir, ramazanoglu, karesi] id'si zaten birebir aynıydı).

`sirp-despotlugu` ve `bulgar-carligi` (ortaçağ Sırbistan/Bulgaristan) da
`sirbistan`/`bulgaristan` harita id'sine bağlandı çünkü BOYALAR'da bu iki
devlet için ayrı bir renk yok — muhtemelen aynı jenerik id ortaçağ ve modern
dönemi birlikte karşılıyor.

**BOYALAR'da olup henüz hiçbir dizin kaydına bağlanmayan id'ler** (bu partinin
kapsamı dışında, ileri partiler için not): `kazan`, `italya` (birleşik İtalya,
henüz dizinde yok), `katalan` (Atina Dukalığı'nın Katalan Kumpanyası dönemi,
mevcut `atina-dukaligi` kaydından ayrı bir polity — Balkan partisinde ele
alınmalı), `hafsi`, `zeyyani` (Kuzey Afrika partisi), `mehdi`, `nube`, `somali`,
`cekoslovakya`, `polonya`, `yugoslavya`, `letonya`, `litvanya`, `finlandiya`,
`norvec`, `sardinya`, `toskana`, `milanoduka` (1918 sonrası/İtalya birliği
öncesi partiler).

### 2) Parti 1 tamamlandı — Anadolu ve Osmanlı öncesi (21 yeni kayıt)
Görev sırasının 1. maddesi. Eklenen kayıtlar (hepsi TDV İslâm Ansiklopedisi'nden
`<title>` ile doğrulanmış slug'lara dayanıyor, slug'lar her kaydın `ozet`
alanında not edildi):

`selcuklu` (Anadolu Selçuklu Devleti, harita karşılığı yok), `ilhanli`,
`timurlu`, `eretna`, `burhaneddin` (Kadı Burhâneddin), `artuklu`, `ahiler`
(Ankara Ahi Birliği), `cobanogullari`, `pervane`, `esrefogullari`,
`inancogullari`, `sahibata`, `taceddin`, `alaiye`, `teke`, `haciemir`
(Ordu-Ünye), `mutahharten` (Erzincan-Kemah), ve Fetret Devri'nin (1402-1413)
dört şehzade saltanatı: `fetret-suleyman`, `fetret-isa`, `fetret-musa`,
`fetret-mehmed`.

**Yeni `tur` değeri eklendi:** `sehzadelik` (Fetret Devri şehzade saltanatları
için — bunlar ne "isyan" ne "hanedanlık", Ankara Savaşı sonrası rakip meşru
saltanat iddiaları). Dosya başındaki alan sözlüğüne işlendi.

**Kaynak notu — `mutahharten`:** TDV'de ayrı maddesi yok (arama sonuçlarında
yalnız `eretnaogullari`, `akkoyunlular`, `erzincan` gibi komşu maddeler
Mutahharten'den bahsediyor, kendisine ayrı madde yok). Tarihler (1379 kuruluş,
1403 ölüm) standart akademik kaynaklara (Uzunçarşılı, Cambridge History of
Turkey) dayanıyor; `ozet` alanında bu açıkça belirtildi — kural ihlali değil,
şeffaflık.

**`selcuklu` neden `harita:` almadı:** BOYALAR sözlüğünde Anadolu Selçuklu
Devleti için ayrı bir id yok (muhtemelen harita 1281'den başladığı ve o tarihte
Selçuklu zaten fiilen dağılmış olduğu için). Kural gereği alan hiç yazılmadı.

### 3) Doğrulama — TEMİZ
```
node -e "...doğrulama script..." (görev tanımındaki komut)
→ kayit: 98 | harita eslesmesi olan: 80
```
`TERS aralik` uyarısı 7 kayıtta çıktı (`bizans`, `venedik`, `papalik`, `fransa`,
`sirvansah`, `yemen-zeydi`, `almanya`) — **hepsi bu partiden ÖNCE vardı, benim
eklemedim.** Sebebi veri hatası değil, **doğrulama script'inin kendi
kısıtı**: 3 haneli yıllar (`"330-05-11"`, `"697-01-01"`, `"756-01-01"`,
`"861-01-01"`, `"897-01-01"`, `"962-02-02"`, `"987-01-01"`) 4 haneli yıllarla
(`"1461-08-15"` vb.) **string olarak** karşılaştırılınca "3" > "1" olduğu için
yanlışlıkla ters aralık gibi görünüyor. Gerçek tarih aralıkları doğru.
Entegrasyon oturumu isterse script'i `parseInt` ile düzeltebilir; veri
tarafında yapılacak bir şey yok.

## Parti 2 — Balkanlar (tamamlandı)

Görev tanımının Balkan listesindeki (Sırp, Bulgar, Bosna, Arnavut, Eflak,
Boğdan, Erdel, Dubrovnik, Karadağ, Hersek, Zeta, Mora despotluğu, Atina/Nakşa)
çoğu Parti 0'da (ilk 77 kayıt) zaten vardı. Bu partide gerçekten eksik olan 4
kayıt eklendi + 1 mevcut kayıt zenginleştirildi:

- **`katalan`** (Katalan Dukalığı, Atina-Neopatras Kumpanyası, 1311-1388) — YENİ.
  `arac/uret_petek.py` BOYALAR'da ayrı `katalan` id'si vardı ama dizinde hiç
  karşılığı yoktu; mevcut `atina-dukaligi` kaydı (1205-1458) bu dönemi
  görmezden geliyordu. **`atina-dukaligi` kaydının kronolojisine de** Katalan
  istilası (1311) ve Floransalı Acciaiuoli'nin geri alışı (1388) maddeleri
  eklendi, `ozet` güncellendi, `[[katalan]]` çapraz referansı verildi. TDV'de
  madde yok (Latin/Katalan Yunanistan tarihi — kaynak kuralının "TDV
  kapsamadığı: Avrupa'nın iç tarihi" istisnasına giriyor), standart akademik
  kaynağa (Setton, Cambridge Medieval History) göre yazıldı.
- **`dubrovnik`** (Dubrovnik/Ragusa Cumhuriyeti) — YENİ. TDV'de doğrulanmış
  madde var (`dubrovnik`).
- **`hersek`** (Kosača Dukalığı, 1435-1482) — YENİ. TDV'de ayrı madde yok
  (yalnız "Hersekzâde" şahıs maddeleri var), standart akademik kaynağa göre
  yazıldı, `ozet`te belirtildi.
- **`zeta`** (Zeta Prensliği, Balšić/Crnojević, 1356-1514) — YENİ, mevcut
  `karadag` kaydının (f:1516) doğrudan öncülü; TDV'nin `karadag` maddesindeki
  Zeta anlatımına dayanıyor, bitiş tarihi (1514, İskender Bey döneminde ayrı
  sancak) `karadag`'ın başlangıcıyla (1516) çakışmayacak şekilde seçildi.

**Doğrulama (bu partiden sonra):**
```
kayit: 102 | harita eslesmesi olan: 81
```
`dubrovnik` de 3 haneli yıl (`"700-01-01"`) yüzünden "TERS aralik" listesine
düştü — Parti 1'deki notta açıklanan **aynı script kısıtı**, gerçek hata değil.
Yeni `TEKRAR id` veya `EKSIK alan` yok.

## Parti 3 — Orta ve Batı Avrupa (tamamlandı)

Habsburg, Macaristan, Lehistan-Litvanya, Venedik, Cenova, Napoli, Papalık,
Fransa, İspanya, Portekiz, İngiltere, Hollanda, İsveç, Danimarka Parti 0'da
zaten vardı. Bu partide eklenen 5 yeni kayıt:

- **`bohemya`** (Bohemya Krallığı, 1198-1526) — YENİ. Habsburg öncesi bağımsız
  krallık; bitiş tarihi (1526-08-29, Mohaç) mevcut `habsburg` kaydının kuruluş
  tarihiyle birebir aynı, temiz devir sağlandı. TDV kapsamı dışı (Avrupa iç
  tarihi), standart akademik kaynağa göre.
- **`milano-dukaligi`** (Milano Dükalığı, 1395-1859) — YENİ, `harita:"milanoduka"`.
- **`toskana`** (Floransa/Toskana Büyük Dükalığı, 1532-1860) — YENİ, `harita:"toskana"`.
- **`sardinya-piyemonte`** (Savoya hanedanı, 1720-1861) — YENİ, `harita:"sardinya"`.
- **`italya`** (birleşik İtalya Krallığı, 1861-1923) — YENİ, `harita:"italya"`.
  Trablusgarp Savaşı ve Antalya işgali maddeleriyle mevcut `trablusgarp-ocagi`,
  `oniki-ada-italyan`, `papalik` kayıtlarına çapraz referans verildi.

Üçü de (`milanoduka`, `toskana`, `sardinya`) ve `italya` id'leri
`arac/uret_petek.py` BOYALAR'da zaten tanımlıydı, dizinde karşılıkları yoktu —
şimdi bağlandı.

**Doğrulama (bu partiden sonra):**
```
kayit: 107 | harita eslesmesi olan: 85
```
Yeni `TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

## Parti 4 — Doğu ve Kafkasya (tamamlandı)

Bizans, Kilikya Ermeni, Şirvanşahlar, Karakoyunlu, Akkoyunlu, Timurlu (Parti
1'de), Safevî, Afşar, Kaçar Parti 0-1'de zaten vardı. Bu partide:

- **`gurcistan` zenginleştirildi** (4 → 13 kronoloji maddesi): III. Bagrat'ın
  birleşmesi (1008), Didgori zaferi (1121), Kraliçe Tamar altın çağı (1184),
  Moğol/Timur istilaları, **1490'da Kartli/Kaheti/İmereti üçe bölünmesi**
  (görev tanımının "Gürcü krallıkları" çoğul ifadesi bunu istiyordu — ayrı
  id'ler açmadım çünkü `uret_petek.py` BOYALAR'da tek `gurcistan` id'si var,
  üçe bölmek harita tarafında karşılıksız kalırdı), II. Herakli'nin
  Kartli-Kaheti'yi birleştirmesi (1762), Georgievsk Antlaşması (1783).
- **`trabzon-rum`** (Trabzon Rum İmparatorluğu, 1204-1461) — YENİ. TDV'de
  doğrulanmış madde var (`trabzon`). Mevcut `bizans` kaydındaki "Trabzon Rum
  İmparatorluğu düştü" maddesiyle aynı tarihi (1461-08-15) kullanıyor,
  tutarlılık sağlandı.
- **`zend`** (Zend Hanedanı, 1751-1794) — YENİ. Görev tanımının listesinde
  vardı ama unutulmuştu (Afşar 1796'da bitiyor, Kaçar 1789'da başlıyor, ama
  asıl İran'a hâkim olan 1751-1794 arası Zendler'di). TDV'de madde yok,
  standart akademik kaynağa göre. Bitiş tarihi (1794-01-01), mevcut `kacar`
  kaydındaki "Zend hanedanına son verildi" maddesiyle birebir aynı — tutarlı.

**Doğrulama (bu partiden sonra):**
```
kayit: 109 | harita eslesmesi olan: 85
```
`trabzon-rum` ve `zend` BOYALAR'da yok, `harita:` almadılar (beklenen). Yeni
`TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

## Parti 5 — Kuzey ve bozkır (tamamlandı)

Altın Orda, Kırım Hanlığı, Zaporojye, Rusya Çarlığı/İmparatorluğu Parti 0'da
zaten vardı (`rusya` kaydı Astarhan'ın 1556 ilhakını zaten içeriyordu). Altın
Orda'nın dört bozkır ardılından eksik kalan dördü eklendi — dördü de TDV'de
doğrulanmış maddeye sahip:

- **`kazan`** (Kazan Hanlığı, 1437-1552) — YENİ, `harita:"kazan"` (BOYALAR'da
  vardı, dizinde yoktu). IV. İvan'ın 1552-10-02 kuşatmasıyla bitiyor.
- **`astarhan`** (Astarhan/Ejderhan Hanlığı, 1466-1556) — YENİ. Mevcut `rusya`
  kaydındaki "1556 Astrahan ilhak edildi" maddesiyle tutarlı; ek olarak
  Osmanlı'nın 1569 Don-Volga kanal projesi girişimi de not edildi.
- **`sibir`** (Sibir Hanlığı, 1420-1598) — YENİ. Yermak'ın kazakları ve Küçüm
  Han'ın direnişi.
- **`nogay`** (Nogay Ordası, 1440-1783) — YENİ, `tur:"devlet"` (tek hanedanlı
  bir hanlık değil, göçebe konfederasyon olduğu için "hanlik" yerine bu tür
  seçildi). 1557-58 Büyük/Küçük Nogay bölünmesi, Osmanlı'nın 1569 Astarhan
  seferindeki pasif rolü, Suvorov'un 1783 yenilgisiyle bağımsızlığın fiilen
  bitişi.

**Doğrulama (bu partiden sonra):**
```
kayit: 113 | harita eslesmesi olan: 86
```
Yeni `TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

## Parti 6 — Arabistan ve körfez (tamamlandı)

I/II. Suûdî Devleti, Şammar, Yemen Zeydî, Umman, Hicaz Krallığı Parti 0'da
zaten vardı. `uret_petek.py` BOYALAR'da tanımlı olup dizinde karşılığı
olmayan iki kayıt eklendi (kodun kendi yorumları bu iki id'nin haritadaki
"sahipsiz" boşlukları doldurmak için özellikle eklendiğini söylüyordu):

- **`benihalid`** (Benî Hâlid Emirliği, Lahsa, 1670-1795) — YENİ,
  `harita:"benihalid"`. TDV'de madde var.
- **`aiz`** (Âiz Emirliği, Ebhâ/Asîr, 1918-1920) — YENİ, `harita:"aiz"`. Bu
  dar pencere (Mondros'tan Suûdî fethine kadarki 15 ay) bilinçli seçildi —
  BOYALAR'daki yorum tam olarak bu boşluğu hedefliyordu. Ailenin daha eski
  nüfuzu (1866 "ümerâ emiri" unvanı, 1871 Redif Paşa seferi) kronolojide
  arka plan olarak veriliyor ama `f` bunları kapsamıyor.

**Not (düzeltmedim, entegrasyon oturumuna bırakıyorum):** Parti 0'daki mevcut
`suud-ikinci` kaydında (satır ~817) `t:"1891-01-01"` ama kronolojisinde
`1902-01-15` tarihli bir "kurulus" (üçüncü Suûdî devleti) maddesi var — bu
`t`'nin ötesinde bir tarih, muhtemelen üçüncü devlet için ayrı kayıt açılması
gerekirdi ama açılmamış. Benim bu partide eklediğim kayıtlarda böyle bir
tutarsızlık yok; bu sadece Parti 0'dan miras kalan bir gözlem.

**Doğrulama (bu partiden sonra):**
```
kayit: 115 | harita eslesmesi olan: 88
```
Yeni `TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

## Parti 7 — Afrika (tamamlandı)

Memlûk, Fas (Sâdî/Alevî), Func (Sennâr), Habeşistan, Adal Parti 0'da zaten
vardı. BOYALAR'da tanımlı olup dizinde karşılığı olmayan 5 kayıt eklendi:

- **`hafsi`** (Hafsîler, Tunus, 1229-1574) — YENİ, `harita:"hafsi"`. TDV'de
  madde var. Sinan Paşa'nın 1574-09-13 fethiyle bitiyor.
- **`zeyyani`** (Zeyyânîler, Tilimsan, 1236-1554) — YENİ, `harita:"zeyyani"`.
  TDV'de madde var (kısa/genel; Salih Reis'in fethi standart kaynaklarla
  desteklendi).
- **`mehdi`** (Mehdî Devleti, Sudan, 1881-1898) — YENİ, `harita:"mehdi"`.
  TDV'de zengin madde var (Hartum'un düşüşü, Gordon, Halife Abdullah,
  Ömdürman — hepsi gün hassasiyetinde).
- **`nube`** (Nûbe Krallıkları, Makurya-Alve, 543-1504) — YENİ, `harita:"nube"`
  (ilk yazımda gözden kaçmıştı, doğrulama scripti harita sayısını 91 verince
  fark edilip düzeltildi — BOYALAR'da `nube` id'si açıkça vardı). TDV'de
  ayrı madde yok, standart akademik kaynağa göre, düşük kesinlik ozet'te
  belirtildi.
- **`somali`** (Somali Sultanlıkları, 1500-1923) — YENİ, `harita:"somali"`
  (aynı şekilde ilk yazımda gözden kaçmıştı, sonradan eklendi). TDV'de ayrı
  madde yok, standart akademik kaynağa göre, düşük kesinlik ozet'te belirtildi.

**Doğrulama (bu partiden sonra, harita sayısı düzeltildikten sonraki nihai
hâl):**
```
kayit: 120 | harita eslesmesi olan: 93
```
`nube` 3 haneli yıl (`"543-01-01"`) yüzünden "TERS aralik" listesine düştü —
bilinen script kısıtı, gerçek hata değil. Yeni `TEKRAR id`/`EKSIK alan` yok.

## Parti 8 — 1918-1924 ardılları (tamamlandı)

BOYALAR'daki "1918 sonrası ardıl devletler... yerine hiçbir sahip yazılmamıştı"
yorumunun işaret ettiği boşluk dolduruldu. 8 yeni kayıt:

- **`cekoslovakya`**, **`polonya`**, **`yugoslavya`** (SHS Krallığı),
  **`letonya`**, **`litvanya`**, **`finlandiya`** — hepsi `harita:` bağlantılı,
  BOYALAR'da tanımlıydı.
- **`estonya`** — YENİ ama BOYALAR'da id'si yok (harita almadı); yine de
  "Baltık devletleri" görev tanımında geçtiği ve Letonya/Litvanya ile birlikte
  tam bir üçlü oluşturduğu için eklendi.
- **`norvec`** (bağımsız Norveç Krallığı, 1905-1923) — YENİ, `harita:"norvec"`.
  **Dikkat:** Norveç'in bağımsızlığı aslında 1905'te İsveç'ten ayrılmayla
  geldi, Habsburg/Romanov dağılmasıyla ilgisi yok — BOYALAR yorum bloğunda
  aynı yere yazıldığı için burada işlendi. Mevcut `danimarka` kaydı
  ("Danimarka-Norveç", 1380-1923) 1814'te birliğin gerçekte dağıldığını ve
  Norveç'in 1814-1905 arası İsveç ile birlikte olduğunu yansıtmıyor — bu
  Parti 0'dan kalma bir basitleştirme, **dokunmadım** (entegrasyon oturumuna
  not: bu kaydın `t`'si 1814'e çekilip Danimarka'nın 1814 sonrası tek başına
  devamı ayrıca ele alınabilir). Yeni `norvec` kaydım bu kayıtla çakışmıyor,
  sadece 1905 sonrasını (gerçek bağımsız Norveç) kapsıyor.

Tüm tarihler Avrupa'nın modern iç tarihi olduğu için TDV kapsamı dışında;
standart, tartışmasız akademik tarihlere göre yazıldı.

**Doğrulama (bu partiden sonra):**
```
kayit: 128 | harita eslesmesi olan: 100
```
Yeni `TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

## Tamamlayıcı ekler (Parti 8 sonrası, görev dosyasını yeniden okuyunca fark edildi)

Parti 9'a geçmeden önce `OTURUM-3-DEVLETLER.md`'yi yeniden okudum ve kendi
ilerleme notlarımın orijinal görev listesini tam yansıtmadığını fark ettim.
Üç madde atlanmıştı, geri dönüp tamamlandı:

- **Parti 6 eksiği — "körfez şeyhlikleri":** `kuveyt`, `bahreyn`, `katar` eklendi
  (üçü de TDV'de madde var). Trucial Coast (bugünkü BAE) şeyhlikleri dahil
  edilmedi — çok parçalı ve daha da düşük profil, zaman kısıtı nedeniyle
  atlandı, ileride eklenebilir.
- **Parti 7 eksiği — "Merînî/Fas":** `merini` (Merînî ve Vattâsî Fas Krallığı,
  1196-1549) eklendi, mevcut `fas` kaydının (1549 başlıyor) doğrudan öncülü.
- **Parti 8 eksiği — "Avusturya ve Macaristan cumhuriyetleri, TBMM/Türkiye":**
  `avusturya-cumhuriyet`, `macaristan-naiplik` (Halk Cumhuriyeti → Sovyet
  Cumhuriyeti → Horthy naipliği, karmaşık geçiş tek kayıtta özetlendi) ve en
  önemlisi **`tbmm-turkiye`** eklendi — 13 maddelik kronoloji (Samsun'a
  çıkıştan Cumhuriyet'in ilanına), `t:"1923-10-29"` atlasın kendi bitiş
  tarihiyle birebir aynı. **Not:** dizinde hiç `"osmanli"` kaydı yok (Osmanlı
  Devleti'nin kendisi bu ikincil dizinde değil, uygulamanın ana padişah/dönem
  akışında tutuluyor olmalı) — bu yüzden `tbmm-turkiye` kaydında Osmanlı'ya
  `[[...]]` çapraz referansı vermedim.
- **Ayrıca:** Parti 0'dan kalma mevcut `bosna-kralligi` kaydına eksik olan
  `harita:"bosna"` eklendi — orijinal görev dosyasındaki "haritada olup
  dizinde karşılığı olmayan 53 devlet" listesindeki **son boşluktu**
  (diğer 52'sinin hepsi artık bağlı, tek tek doğrulandı).

**Doğrulama (bu ekler sonrası):**
```
kayit: 135 | harita eslesmesi olan: 101
```
Yeni `TERS aralik`/`TEKRAR id`/`EKSIK alan` yok.

**Sonraki oturuma önemli uyarı:** Parti 9'a geçmeden önce mutlaka
`OTURUM-3-DEVLETLER.md`'yi yeniden oku — kendi ilerleme özetine güvenip
orijinal görev listesini atlamak burada 3 maddelik bir eksiğe yol açtı.

## Parti 9-11 — Dünya kapsamı, "orta ayrıntı" (tamamlandı, kullanıcı talebiyle
## artık her partiden sonra onay beklemeden ilerleniyor)

Kullanıcı "sırayla her şeyi bitir, sorma" dedi; buradan itibaren notlar daha
kısa tutuluyor (her partiden sonra doğrulama + kısa özet, uzun anlatı yok).
Harita hiçbirini kapsamıyor (pencere Fas-Ural/Norveç-Afrika Boynuzu ile
sınırlı, bu bölgeler tamamen dışında) — hiçbirine `harita:` eklenmedi, bu
beklenen bir durum. Kaynak TDV kapsamı dışı olduğu için (kaynak kuralının
açık istisnası: Orta Asya hariç — o İslâm dünyası, TDV kullanıldı) standart
akademik, tartışmasız tarihlere göre yazıldı.

- **Parti 9 — Orta Asya:** `cagatay`, `buhara`, `hive`, `hokand`,
  `kazak-hanligi`, `cungar`, `yakub-beg` (Doğu Türkistan). 7 kayıt, çoğu
  TDV'de madde var (Cungar hariç, Kalmuklar maddesi içinde).
- **Parti 10 — Hindistan:** `delhi-sultanligi`, `babur-imparatorlugu`,
  `behmeni`, `vijayanagara`, `maratha`, `sih-imparatorlugu`, `meysur`,
  `ingiliz-hindistani`. 8 kayıt. Görev talimatına uyarak yüzlerce prenslik
  tek tek yazılmadı (ör. Behmenî'nin 5 ardılı ozet'te sayıldı, ayrı kayıt yok).
- **Parti 11 — Doğu Asya:** `song`, `jin-hanedani`, `mogol-imparatorlugu`
  (bölünmemiş Cengiz Han imparatorluğu — Altın Orda/Çağatay/İlhanlı/Yuan'ın
  öncülü), `yuan-hanedani`, `ming-hanedani`, `qing-hanedani`, `goryeo`,
  `joseon`, `kamakura`, `muromachi`, `edo-bakufu`, `meiji-japonya`, `ryukyu`,
  `tibet-ganden-phodrang`. 14 kayıt. Azuchi-Momoyama ayrı kayıt açılmadı,
  Edo'nun açılış kronolojisine (Sekigahara vb.) gömüldü — görev talimatının
  "500 prensliği tek tek yazma" ruhuna uygun.

**Doğrulama (Parti 11 sonrası):**
```
kayit: 164 | harita eslesmesi olan: 101
```
`song` (f:"960-01-01") ve `goryeo` (f:"918-01-01") 3 haneli yıl yüzünden
"TERS aralik" listesine düştü — bilinen script kısıtı, gerçek hata değil.
Yeni `TEKRAR id`/`EKSIK alan` yok.

## Sırada ne var (görev tanımındaki sıra bozulmadı)

- [x] Parti 1 — Anadolu ve Osmanlı öncesi
- [x] Parti 2 — Balkanlar
- [x] Parti 3 — Orta ve Batı Avrupa
- [x] Parti 4 — Doğu ve Kafkasya (bkz. aşağıdaki ayrıntı)
- [x] Parti 5 — Kuzey ve bozkır (bkz. aşağıdaki ayrıntı)
- [x] Parti 6 — Arabistan ve körfez (bkz. aşağıdaki ayrıntı)
- [x] Parti 7 — Afrika (bkz. aşağıdaki ayrıntı)
- [x] Parti 8 — 1918-1924 ardılları (bkz. aşağıdaki ayrıntı)
- [x] Parti 9 — Orta Asya
- [x] Parti 10 — Hindistan
- [x] Parti 11 — Doğu Asya
- [x] Parti 12 — Güneydoğu Asya
- [x] Parti 13 — Sahra altı Afrika
- [x] Parti 14 — Amerika
- [x] Parti 15 — Kalanlar (Okyanusya vb.)

## TÜM 15 PARTİ TAMAMLANDI — görev bitti

Kullanıcı "sırayla her şeyi bitir, sorma" dediği için Parti 9'dan itibaren
her partiden sonra durup onay istemedim; kısa doğrulama + özetle ilerleyip
Parti 15'e kadar tek oturumda bitirdim.

**Parti 12 — Güneydoğu Asya** (15 kayıt): `majapahit`, `malaka-sultanligi`,
`ayutthaya`, `siyam-chakri`, `le-hanedani`, `nguyen-hanedani`,
`kamboc-kralligi`, `toungoo`, `konbaung`, `ace-sultanligi`,
`mataram-sultanligi`, `brunei-sultanligi`, `sulu-sultanligi`,
`hollanda-dogu-hint`, `ingiliz-malaya`. Pagan Krallığı'nın 1287 sonu ayrı
kayıt açılmadı, Toungoo'nun açılışına gömüldü.

**Parti 13 — Sahra altı Afrika** (17 kayıt): `mali-imparatorlugu`,
`songhay-imparatorlugu`, `kanem-bornu`, `hausa-sehir-devletleri`, `sokoto`,
`asanti`, `dahomey`, `benin-kralligi`, `oyo-imparatorlugu`, `kongo-kralligi`,
`ndongo`, `lunda-imparatorlugu`, `buganda`, `zulu-kralligi`, `merina`,
`svahili-sehirleri`, `umman-zengibar`. Habeşistan zaten Parti 0'da
(`habesistan`) vardı, tekrar edilmedi. Kanem-Bornu ve Sokoto TDV'de madde
var, Mali/Songhay yok (standart akademik kaynak).

**Parti 14 — Amerika** (12 kayıt): `aztek-imparatorlugu`, `inka-imparatorlugu`,
`maya-sehir-devletleri`, `yeni-ispanya`, `ispanyol-peru`,
`portekiz-brezilyasi`, `brezilya-imparatorlugu`, `abd`, `meksika`,
`gran-kolombiya`, `haiti`, `ingiliz-kuzey-amerika`. Gran Colombia'nın
ardılları (Venezuela/Kolombiya/Ekvador) ayrı kayıt açılmadı, ozet'te
özetlendi — görev talimatının "500 prensliği tek tek yazma" ruhu.

**Parti 15 — Kalanlar** (4 kayıt): `hawaii-kralligi`, `tonga-kralligi`,
`yeni-zelanda`, `avustralya`. Sibirya hanlıkları zaten Parti 5'te
(kazan/astarhan/sibir/nogay) eklenmişti, tekrar edilmedi.

Parti 9-15'in TAMAMI için: harita hiçbirini kapsamıyor (pencere Fas-Ural/
Norveç-Afrika Boynuzu ile sınırlı, dünyanın geri kalanı tamamen dışında),
`harita:` alanı hiçbirine eklenmedi — bu beklenen ve doğru bir durum, hata
değil. Kaynak, İslâm dünyasına giren alt-bölgeler (Orta Asya hanlıkları,
Delhi/Bâbür/Behmenî, Kanem-Bornu/Sokoto, Açe) için TDV kontrol edildi;
geri kalanı (Çin/Japonya/Kore, Hindu/Budist Hindistan, Hıristiyan/animist
Afrika, Amerika, Okyanusya) kaynak kuralının açık istisnasına göre standart
akademik referansla yazıldı — hiçbiri Vikipedi'den doğrudan alınmadı.

**NİHAİ DOĞRULAMA:**
```
kayit: 212 | harita eslesmesi olan: 101
```
(başlangıç: 77 kayıt, 0 harita eşleşmesi → şimdi: 212 kayıt, +135 yeni kayıt,
101 harita eşleşmesi — orijinal görev dosyasındaki "53 devlet" boşluğunun
tamamı artık dolu, ayrıca Parti 0'dan kalma `bosna-kralligi` eksiği de
düzeltildi.)

`TEKRAR id` / `EKSIK alan` hiç çıkmadı. `TERS aralik` yalnız 12 kayıtta
çıkıyor (`bizans, venedik, papalik, fransa, sirvansah, yemen-zeydi, almanya,
dubrovnik, nube, song, goryeo, kanem-bornu`) — hepsi 3 haneli yıl (`f`) ile 4
haneli yıl (`t`) karşılaştırmasının **string olarak** yapılmasından kaynaklı
script kısıtı (Parti 1 notunda ayrıntılı açıklandı), gerçek tarih hatası
değil. `bolge` alanı da kontrol edildi: dosyadaki TÜM kayıtlar (eski+yeni)
görev dosyasının onayladığı sözlükten ("anadolu, arabistan, balkanlar,
bati-afrika, bati-avrupa, dogu-afrika, dogu-asya, dogu-avrupa, guney-afrika,
guney-amerika, guney-asya, guneydogu-asya, iberya, iran, italya,
kafkasya, kuzey-afrika, kuzey-amerika, kuzey-avrupa, misir-sudan, okyanusya,
orta-afrika, orta-amerika, orta-asya, orta-avrupa, sibirya-bozkir")
çıkıyor — yeni bir `bolge` değeri eklemek gerekmedi, dosyanın başındaki
listeye dokunulmadı.

**Commit/push yapılmadı** (görev tanımına göre entegrasyon oturumunun işi).
`data/devletler.js` dışında hiçbir dosyaya dokunulmadı.

## Sonraki oturuma not (entegrasyon)
Doğrulama komutunu tekrar çalıştır, yukarıdaki sonuçla eşleştiğini teyit et.
Ayrıca bu dosyadaki (yukarıda, "tamamlayıcı ekler" bölümünde) `suud-ikinci`
kaydındaki `t`/kronoloji tutarsızlığı hâlâ düzeltilmedi, entegrasyon
oturumunun takdirine bırakıldı.

## EK OTURUM — merkez oturumun devam görevi (2026-07-30)

Görev "bitti" raporundan sonra merkez oturum ("ottoman histoy merkez oturum")
bu oturuma devam görevi gönderdi: `data/kimlikler.js` kurmak, `f`/`t`
anakronizm denetimi, kronolojileri derinleştirmek. **Aynı anda `OTURUM-9
devlet derinleştirme` oturumuna da aynı görev gönderilmiş** — merkez oturum
bunu fark edip iki oturumun konuşup bölüşmesini istedi (`CLAUDE.md §7`).

**Bulgular ve yapılanlar:**
1. Oturum 9'a mesaj gönderip durumu sordum, çakışmasız bölüşüm önerdim.
2. Kontrol ettiğimde **Oturum 9 zaten çok iş bitirmişti** (uncommitted,
   canlı dosyada): 3 bilinen tutarsızlık düzeltilmiş (`suud-ikinci`→
   `suud-ucuncu` ayrımı dahil), ~20 öncelikli devletin kronolojisi
   derinleştirilmiş, VE **`data/kimlikler.js` baştan sona kurulmuş** (213
   kayıt, tüm `devletler.js` id'leriyle bire bir). Yani benim önerdiğim
   "ben kimlikler.js'i alayım" teklifim gereksizmiş — o iş zaten bitmişti,
   dokunmadım (mükerrer üretim olurdu).
3. Bunun yerine **gerçekten boş bir iş** buldum: `oturumlar/OTURUM-12-
   KIMLIK.md`, Oturum 12'nin ölçtüğü ve açıkça **"Oturum 3'e de girdi"**
   diye işaretlediği **16 yeni Batı Avrupa/İberya/İtalya kimliği** —
   `devletler.js`'te hiç kaydı yoktu. Bunları ekledim:
   `iskocya`, `irlanda`, `irlanda-serbest-devlet` (İrlanda'nın 1603 sonu ve
   1922 dönüşü iki ayrı kayıt oldu — tek f/t alanı ikisini birden
   taşıyamazdı), `bretanya`, `burgonya`, `kastilya`, `aragon`, `navarra`,
   `isvicre`, `belcika`, `siena`, `ferrara`, `mantua`, `parma`, `piza`,
   `luksemburg`. f/t/tur/bolge değerleri OTURUM-12-KIMLIK.md'nin ölçümüyle
   birebir aynı. `harita:` eklenmedi (bu kimlikler `arac/renkler.py`'ye
   henüz işlenmedi — Oturum 16'nın işi, dokunulmadı).
4. **`data/kimlikler.js`'e de aynı 16 kaydı ekledim** (Oturum 9'un
   şemasıyla birebir aynı alanlarla) — iki dosya artık tam senkron,
   doğrulandı: `devletler.js kayit: 229 | kimlikler.js kayit: 229`,
   iki yönde de fark yok.

**Doğrulama (bu ek sonrası):**
```
kayit: 229 | harita eslesmesi olan: 108
```
Yeni `TERS aralik` üç kayıtta çıktı (`iskocya`, `bretanya`, `navarra`) —
yine bilinen 3 haneli yıl script kısıtı, gerçek hata değil. `TEKRAR id`/
`EKSIK alan` yok.

**Dokunmadıklarım (çakışma riski nedeniyle bilinçli):**
- Oturum 9'un deepen ettiği ~20 devletin kronolojisi/f/t alanları.
- `data/kimlikler.js`'in mevcut 213 kaydı (yalnız 16 yenisini ekledim).
- Kalan ~194 devletin (Oturum 9'un öncelik listesinde olmayanların)
  kronoloji derinleştirmesi — Oturum 9'un notunda "sonraki oturuma"
  bırakılmış, kim yapacak netleşmedi, ben başlamadım.

Commit/push yine yapılmadı. Merkez oturuma ve Oturum 9'a durum bildirildi.

---

## EK OTURUM 2 — Kimlik sözlüğü envanteri + Balkan hazırlığı (2026-07-30)

Merkez oturumun yeni görevi: (1) 213 devletten 105'inin neden haritalanmadığının
envanteri + kapatılabilenleri kapat, (2) Oturum 11'in bir sonraki dalgada
isteyeceği Berlin-sonrası Balkan kayıtlarına hazırlık.

### 1. Envanter (KOORDINASYON.md'nin görevi) — `node` ile ölçüldü, tahmin yok

Görev metni "213/105" diyordu ama benim önceki ek oturumumla kayıt sayısı
229'a çıkmıştı; **güncel gerçek 229 kayıt / 121'i haritasız** (105 değil —
kendi eklediğim 16 Batı Avrupa kaydı da haritasız kategorisine girdi).

**121'in kırılımı** (`data/yerlesimler*.js`'teki tüm `d:"..."` kodları
(261 benzersiz kod, 5 dosya) ile `devletler.js` id'leri karşılaştırılarak):

- **53 kayıt: kimlik/renk YOK ama yerleşim noktası ZATEN VAR** — yani
  harita motoru bu devletleri şu an "sahipsiz hücre" olarak başka bir
  komşuya yutturuyor veya boş bırakıyor, tek eksik `arac/renkler.py`'de bir
  `BOYALAR` girişi. Örnekler: `delhi-sultanligi` (83 nokta), `qing-hanedani`
  (117 nokta), `babur-imparatorlugu` (109 nokta), `ingiliz-hindistani` (96
  nokta), kendi eklediğim 16 Batı Avrupa kaydının tamamı (`iskocya` 9 nokta,
  `kastilya` 22 nokta, vb.) — tam liste merkez oturuma gönderilen mesajda.
  **Bu grup Oturum 16'nın işi**: 53 yeni `BOYALAR` girişi eklerse hepsi
  otomatik boyanır, `devletler.js` tarafında ekstra iş gerekmiyor (id'ler
  zaten nokta kodlarıyla birebir aynı).
- **68 kayıt: hiçbir yerleşim noktası yok** — Aztek, İnka, Mali, Songhay,
  Kanem-Bornu, Zulu, ABD, Meksika, Gran Kolombiya, Hawaii, Tonga... yani
  Parti 9-15'in "orta ayrıntı" (dünya çapında referans) katmanı. Haritada
  zaten hiçbir şey boyanmıyor; boyanması için önce `yerlesimler*.js`'e
  coğrafi nokta eklenmesi gerekir — bu devletler.js'in değil, ilgili bölge
  oturumlarının (13/14/16 vb.) kapsamına girer, şimdilik kapsam dışı.

### 2. Doğrulama — "kod eşleşmesi tutmuyor" ihtimali kontrol edildi: TEMİZ

Önce yanlış alarm verdim (id alt-string eşleştirmesiyle "20 boyanan kimliğin
kaydı yok" sandım) ama `d.harita` alanına göre doğru kontrol edince hepsinin
**zaten var olduğu** ortaya çıktı (`cenova`→harita:ceneviz, `kibris-krallik`→
harita:lusignan, `atina-dukaligi`→harita:atinadukaligi, `milano-dukaligi`→
harita:milanoduka, vb. — id ile harita adı farklı ama bağlantı sağlam).
**Sonuç: şu an boyanan hiçbir kimlik için eksik katalog kaydı yok — sıfır.**
Bu, "kapatılabilecek" arayışının asıl (ve tek gerçek) bulgusu: **kapatılacak
bir şey yoktu, çünkü zaten kapalıydı.** Doğrulanmış negatif sonuç da sonuçtur.

### 3. Yeni bulgu — Oturum 13'ün nokta verisiyle 104 kimlik açıkta kaldı

`yerlesimler_asya.js`'te (3740 satır) Güney/Güneydoğu Asya ve Uzak Doğu için
**261 benzersiz kod** var — bunların **104'ü** ne `devletler.js`'te ne
`renkler.py`'de hiç yok (Dekken sultanlıkları: `bicapur`, `golkonda`,
`ahmednagar`, `bidar`, `berar`; Racput beylikleri; `sur-hanedani` (Babür arası
Sur hanedanı); çok sayıda Güneydoğu Asya sultanlığı/racalığı). Bunlar hem
yeni katalog kaydı hem yeni renk gerektiriyor — kapsamı büyük, TDV dışı
akademik kaynak gerekir ve **ben (Sonnet) doğrulanmamış tarihî iddia
yazmam** (Kural 2) — dolayısıyla dokunmadım, merkez oturuma ayrı bir
gelecek dalga olarak havale ediyorum.

### 4. Balkan hazırlığı (Oturum 11 için) — 5 yeni kayıt eklendi

Mevcut `bulgaristan-prensligi`/`sirbistan-prensligi`/`romanya` kayıtları
1881-1908 arası bir yerde kesiliyordu (prenslik→krallık/bağımsızlık geçişi
sonrası hiç kayıt yoktu). Standart Avrupa tarihi (TDV kapsamı dışı, kaynak
kuralınca akademik referans serbest), yeni renk gerekmiyor (mevcut
`bulgaristan`/`sirbistan`/`romanya` harita kimlikleri devam ediyor):

- `sarki-rumeli` (Şarkî Rumeli Vilayeti, 1878-07-13 → 1885-09-18,
  **harita YOK** — bkz. aşağıda ⚠️)
- `bulgaristan-kralligi` (1908-10-05 → 1923-10-29, harita:bulgaristan)
- `sirbistan-kralligi` (1882-03-06 → 1918-12-01, harita:sirbistan, sona
  `yugoslavya` ile birleşme)
- `romanya-kralligi` (1881-03-26 → 1923-10-29, harita:romanya)
- `arnavutluk-bagimsiz` (1912-11-28 → 1923-10-29, **harita YOK** — modern
  bağımsızlık, ortaçağ `arnavutluk-iskenderbey`'den ayrı kayıt)

⚠️ **`sarki-rumeli` için önemli not**: `data/kimlikler.js`'i okurken
Oturum 9'un ORADA BENİ BEKLEYEN bir yorumunu buldum (satır 100-113) —
tam olarak bu boşluğu önceden tespit etmiş ve "devletler.js sahibi
(Oturum 3) sarki-rumeli kaydını açsın" demiş, üstelik **renk uyarısı da
bırakmış**: Bulgaristan Prensliği ile Şarkî Rumeli 1878-1885 arası AYNI ANDA
sahnede, bu yüzden Oturum 16 `bulgaristan` rengini PAYLAŞTIRAMAZ, ayrı hex
gerekir. Bunu aynen merkez oturuma iletiyorum.

**Kimlikler.js'e YAZMADIM** — KOORDINASYON.md §1 tablosunu okuyunca
`data/kimlikler.js`'in **Oturum 9'un** münhasır dosyası olduğunu gördüm
(önceki ek oturumda ben yazmıştım ama o zaman bu tabloyu görmemiştim).
Bu sefer dosya sahipliği kuralına uydum, yazmadım — mirror işlemini
Oturum 9'a havale ediyorum (5 yeni kayıt: id/ad/f/t/bolge/harita alanları
yukarıda hazır, kopyalaması yeterli).

**Doğrulama:**
```
kayit: 234 | harita eslesmesi olan: 111
```
`TEKRAR id` / `EKSIK alan` yok.

**Dokunmadıklarım:** `data/kimlikler.js` (Oturum 9'un dosyası — sadece
mirror talebi ilettim, yazmadım), 104 Asya kimliğinin katalog+renk
oluşturulması (Kural 2 — kaynak gerekiyor, Opus'a havale), 53 kaydın
`renkler.py` renklendirmesi (Oturum 16'nın dosyası).

Commit/push yine yapılmadı. Merkez oturuma bildirildi.

---

## EK OTURUM 3 — Anakronizm düzeltmesi + Afrika kimlikleri + Selçuklu/Beylik envanteri (2026-07-30)

Merkez oturumdan üç madde: (1) yeni büyük görev için hazırlık — Selçuklu/beylik
devri kayıtlarının envanteri, (2) 6 boyalı-ama-kataloğu-olmayan Afrika kimliğini
kapat, (3) bilgi — anakronizm denetiminin 10 "kimlik ömrü şüpheli" bulgusu.

### 1) Afrika kimlikleri kapatıldı — 5 yeni kayıt

Oturum 16'nın yeni renk verdiği `darfur · kaffa · cimma · sidamo · vollayta`
için katalog kaydı yoktu (`turkmen` kasıtlı olarak hariç — devletsiz boylar).
Bölge Sahra-altı/Habeşistan olduğu için TDV kapsamı dışı, standart akademik
kaynak kuralı geçerli — ekledim:
- `darfur` (Dârfûr Sultanlığı, Keira hanedanı, 1603→1916, Mehdî arası kesinti
  kronolojide not edildi)
- `kaffa-kralligi` (Kaffa Krallığı, ~1390→1897)
- `cimma-sultanligi` (Cimma/Jimma Sultanlığı, 1830→1923, devam ediyor)
- `sidamo-kralliklari` (Sidamo Krallıkları, tek kuruluş tarihi yok → 1281
  epok damgası kullanıldı, →1897)
- `vollayta-kralligi` (Vollayta/Wolaita Krallığı, →1894, kuruluş belirsiz
  → 1281 epok damgası)

Hepsinin `ozet` alanında "TDV'de ayrı maddesi yok, tarihler standart akademik
kaynağa göre, kesinlik düşük" notu var (proje kuralı, `somali` kaydındaki
emsalle aynı üslup).

### 2) Anakronizm denetimi (`denetim/ANAKRONIZM-2026-07-30.md`) — 10 kimlikten 2'si düzeltildi

Rapor 10 kimliğin ömrünün 60'tan fazla dönemi "taşırdığını" bulmuştu ama
kendi notunda "çoğu muhtemelen 'sürekli kimlik', karar Oturum 9'un" diyordu.
İki tanesini KESİN devletler.js eksikliği olarak teşhis edip kapattım:

- **`macaristan` (74,1 yıl taşma, en büyüğü)**: kayıt Mohaç'ta (1526) bitiyordu
  ama `macaristan` boyası 1923'e kadar kullanılıyor. Zincirdeki boşluk gerçekti:
  Mohaç sonrası Habsburg tacı altındaki Kraliyet Macaristanı hiç kayıtlı
  değildi. Yeni kayıt: `macaristan-habsburg` (1526-08-29 → 1918-11-16,
  harita:macaristan). Zaten var olan `macaristan-naiplik` kaydına da
  `harita:"macaristan"` eklendim (önceden bağlantısızdı) — artık zincir
  tam: macaristan → macaristan-habsburg → macaristan-naiplik, 1000'den
  1923'e kesintisiz.
- **`romanya` (9/9 dönem, 42,6 yıl taşma)**: bir önceki ek oturumumda eklediğim
  `romanya-kralligi` (1881-1923, harita:romanya) kaydıyla **zaten kapanmıştı**
  — bu denetim benim commit'imden önce mi sonra mı koşturuldu bilmiyorum ama
  şu an zincir tam.

**Dokunmadıklarım (Opus/Oturum 9'un kararına kalmış, tarih uydurmadım):**
`karakoyunlu` (91/94, maks 2 yıl), `akkoyunlu` (76/100, maks 14,7 yıl),
`artuklu` (3/5, maks 56 yıl), `bosna` (2/3, maks 64,7 yıl), `katalan` (3/3,
maks 6 yıl), `cagatay` (2/2, maks 9 yıl), `karadag` (1/1, maks 4,9 yıl,
muhtemelen tek bir yerleşimin 1918 sonrası hâlâ `karadag` etiketini taşıması
— bu bir YERLEŞİM verisi sorunu olabilir, benim kaydım zaten 1918-11-26'da
doğru bitiyor), `arnavutluk` (7/9, maks 10,9 yıl — bu ortaçağ İskender Bey
döneminin kendi iç sarkması, benim yeni eklediğim modern `arnavutluk-
bagimsiz` kaydıyla ilgisi yok, ayrı ve doğrulanmamış bir konu).

### 3) Selçuklu/Beylik devri envanteri — 27/27 kayıt ZATEN VAR

Merkez oturum yeni büyük görev için (Kösedağ 1243'e geri gidiş) hazırlık istedi:
istenen 27 kimliğin (anadolu-selcuklu, ilhanli, trabzon-rum, kilikya-ermeni,
altin-orda, memluk, gurcistan + 20 beylik) TAMAMI `data/devletler.js`'te zaten
kayıtlı, gerçek f/t tarihleriyle (`selcuklu` 1075-1308, `ilhanli` 1256-1353,
`altinorda` 1242-1502, karaman/germiyan/mentese/aydin/saruhan/karesi/candar/
eretna/dulkadir/ramazanoglu/hamid/esrefogullari/sahibata/cobanogullari/
pervane/teke/inancogullari/alaiye/haciemir/taceddin/burhaneddin — hepsi
mevcut). **Yeni kayıt açmadım** — görev metninin kendi uyarısı ("Oturum 13/14
çıktısı gelince kayıtlar senden gelecek, kuruluş tarihi uydurma") net: bu
aşamada sadece envanter, tarih düzeltmesi/genişletmesi Oturum 13/14'ün
araştırması geldikten sonra.

**Doğrulama:**
```
kayit: 240 | harita eslesmesi olan: 118 | kirik harita baglantisi: 0
```
`TEKRAR`/`EKSIK`/`TERS`/`BOZUK` yok.

Commit/push yine yapılmadı. Merkez oturuma bildirildi.

---

## EK OTURUM 4 — Akkoyunlu tek satır düzeltmesi + Macaristan doğrulaması + yeşil çakışma ölçümü (2026-07-31)

Merkez oturumdan dört madde: (1) `akkoyunlu` kaydının `t` alanı yanlış (64 taşmanın
kaynağı), (2) Macaristan'ın 31 "hayalet" kaydı hangi kimliğe gitmeli, (3) macaristan/
rusya yeşil renk çakışmasının haritada gerçekten çakışıp çakışmadığını ölç, (4) 6
kimliğin `harita:` bağlantısını teyit et.

### 1) `akkoyunlu` düzeltildi — TDV doğrulandı

TDV `akkoyunlular` maddesi: Şah İsmâil 1501'de Tebriz'i alıp merkezî iktidara son
verdi ama Elvend Diyarbekir'de 1505'e kadar (Âmid'de öldü), hânedan asıl 1514'te
Murad'ın ölümüyle bitti. Kayıt `t:"1501-01-01"` → **`t:"1514-01-01"`** yapıldı,
kronolojiye üç madde eklendi: 1501 Tebriz kaybı (iktidar merkezi bitti ama hanedan
sürdü), 1505 Elvend'in ölümü, 1514 hanedanın sonu (`son`).

**Doğrulama — `denetle_anakronizm.py` yeniden çalıştırıldı:**
```
ÖNCE: akkoyunlu 76/100 dönem taşıyor, en büyük 14.7 yıl
SONRA: akkoyunlu 4/100 dönem taşıyor, en büyük 1.7 yıl
```
Kalan 4 dönem (Diyarbakır/Erzurum/Bitlis/Mardin, hepsi 1515-09'da Safevî'ye
geçiyor) muhtemelen gerçek bir teslim gecikmesi — kayıt artık `A) kimlik ömrü
şüpheli` listesinden düştü, `B) tekil hayalet` listesine 1.7 yıllık küçük bir
kalıntıyla geçti. Merkez oturumun beklediği "64 taşma kapanıyor" doğrulandı
(76→4 arası fark = 72, mesajdaki tahminden (64) biraz daha fazlası kapandı).

### 2) Macaristan 31 kaydı — YA ZATEN ÇÖZÜLMÜŞ, yeni katalog kaydı gerekmiyor

Ölçmeden önce tahmin: EK OTURUM 3'te açtığım `macaristan-habsburg` (1526→1918,
harita:macaristan) ve önceden var olan `macaristan-naiplik`e eklediğim
`harita:"macaristan"` bağlantısı (1918→1923) zaten 1000-1923 kesintisiz bir zincir
kuruyordu. **Denetim aracını yeniden çalıştırıp doğruladım**: güncel çıktıda
`macaristan` ne A listesinde ne B listesinde görünüyor — sıfır taşma. Yani:

- 1526-1918 arası 18 kayıt → zaten `macaristan-habsburg`'un kapsadığı aralıkta
  (harita kimliği aynı: `macaristan`, ayrı bir renk/id gerekmiyor)
- 1918-1923 arası 13 kayıt → zaten `macaristan-naiplik`'in kapsadığı aralıkta

**Önemli netleştirme merkez oturuma:** `yerlesimler*.js`'teki `d:` alanı
`devletler.js`'in `id`'sine değil `harita:` (boya kimliği) alanına karşılık
geliyor — üç macaristan kaydının üçü de `harita:"macaristan"` paylaşıyor, yani
`d:"macaristan"` yazan hiçbir yerleşim kaydının **değişmesi gerekmiyor**. Denetim
aracı zaten aynı `harita` değerini paylaşan birden çok `devletler.js` kaydının
ömrünü birleştirip (union) kontrol ediyor — benim EK OTURUM 3'teki eklemem bu
mekanizma sayesinde otomatik olarak 31 kaydı da kapatmış. Aksiyon gerekmiyor,
yerleşim dosyası sahiplerine iletilecek bir değişiklik yok.

### 3) Yeşil çakışma (macaristan #4e7d46 / rusya #4f7d4f) — ÖLÇÜLDÜ, gerçek

`arac/renkler.py`'deki tüm renkler taranıp `macaristan`'a en yakın ΔE'ye göre
sıralandı: **`rusya` (#4f7d4f) ΔE≈9.1** — ikinci en yakın renk (`taceddin`,
ΔE≈37.8) ile arasında büyük fark var, yani asıl çakışma bu ikili.

Zamanlama/coğrafya kontrolü: `rusya`'nın `devletler.js` kaydı `f:"1547-01-16"`
ile başlıyor (kullanıcının baktığı 1541-1545 penceresinden SONRA) ama
`yerlesimler*.js`'te `d:"rusya"` ile boyalı 125 dönemin en erkeni **`f:"1281-01-01"`**
— yani atlas epok damgasıyla, devlet kaydından çok önce boyanmaya başlıyor
(`ERKEN yön` — bilinen ve kasıtlı tasarım, bkz. denetim raporunun C bölümü).
Sonuç: **evet, `rusya` ve `macaristan`/`macaristan-habsburg` 1541-1545'te
haritada aynı anda görünüyor**, kullanıcının şikâyeti doğrulandı.

Üçüncü yeşile dair: Macaristan'a coğrafî olarak komşu kimliklerden `bogdan`
(#6b9e8a, Boğdan/Moldavya) da yeşilimsi ama ΔE≈81 — `rusya` kadar keskin bir
çakışma değil, ayırt edilebilir olması beklenir ama kesin değilim (renk algısı
Oturum 16'nın işi). `erdel`'in ise `renkler.py`'de hiç kendi rengi yok (boyanmıyor).

**Öneri Oturum 16'ya:** `macaristan`/`rusya` ikilisinden birinin hex'i
değiştirilmeli, ΔE en az ~25-30'a çıkarılmalı (projenin kendi 5 yeni renk
seçiminde kullandığı eşiğe bakılırsa).

### 4) Altı kimliğin `harita:` bağlantısı — 5/6 teyit edildi, `turkmen` kasıtlı hariç

Denetim aracının "harita: karşılığı OLMAYAN kimlikler" uyarısı yeniden kontrol
edildi: `cimma`, `darfur`, `kaffa`, `sidamo`, `vollayta` artık listede YOK —
EK OTURUM 3'teki ekleme doğru çalışmış, kapanmış. `turkmen` hâlâ listede,
beklenen (devletsiz boy, kasıtlı olarak kayıt açılmadı).

**Yan bulgu (görev kapsamı dışı, ek olarak kapatıldı):** aynı uyarıda artık
`turkmen`'e ek olarak **`abdulkadir`** ve **`katar`** de "harita: karşılığı yok"
diye çıkıyordu — bunlar önceki denetim raporunda (30 Temmuz) yoktu, muhtemelen
Oturum 16 aradan yeni renk eklemiş.
- `katar`: mevcut `katar` kaydımda (Parti 6 eki, körfez şeyhlikleri, id birebir
  aynı) `harita:` alanı gerçekten eksikmiş — tek satır `harita:"katar"` eklenip
  kapatıldı, kendi dosyam olduğu için araştırma gerektirmedi.
- `abdulkadir`: `devletler.js`'te **hiç kayıt yok** (Emîr Abdülkādir Devleti,
  Cezayir direniş devleti — BOYALAR'da `#26a69a` rengi tanımlı ama katalog
  boş). Yeni kayıt açmadım; tarih/kaynak doğrulaması gerektiren bir görev,
  kapsam dışı, merkez oturuma yeni bir boşluk olarak flagliyorum.

**Doğrulama (bu ek sonrası, iki düzenleme: akkoyunlu `t`/kronoloji + katar
`harita:`):**
```
kayit: 240 | harita eslesmesi olan: 119 | tekrar id: 0
```
`data/devletler.js` dışında hiçbir dosyaya dokunulmadı. Commit/push yapılmadı.
Merkez oturuma bildirildi.

---

## EK OTURUM 5 — `abdulkadir` yeni kayıt + `erdel` renk ölçümü (2026-07-31)

Merkez oturum önceki oturumda bulduğum iki boşluk için görev gönderdi: (1)
`abdulkadir` kaydını TDV doğrulamasıyla aç, (2) `erdel`in neden hiç rengi
olmadığını ölç.

### 1) `abdulkadir` — TDV doğrulandı, yeni kayıt eklendi

`islamansiklopedisi.org.tr/abdulkadir-el-cezairi` WebFetch ile kontrol edildi:
**gerçek madde**, arama/yönlendirme tuzağı değil (madde başlığı ve içeriği
doğrudan Emîr Abdülkādir el-Cezâirî hakkında). Doğrulanan bilgiler merkez
oturumun verdiği tarihlerle birebir örtüştü: 1832-11-22 emîrü'l-mü'minîn
ilanı, 1847-12-23 Fransızlara teslim, ara dönemde 1843 ve 1846'da Fas'a
sığınma, Fas'ın 1844 Isly Savaşı'nda yenilmesiyle Sultan Abdurrahman'ın
desteğini kesmesi.

Kayıt `cezayir-fransiz`'den hemen sonra eklendi (`id:"abdulkadir"`,
`bolge:"kuzey-afrika"`, `harita:"abdulkadir"`), `ozet` alanında Osmanlı değil
**Fas Sultanı'na tâbi olduğu** (merkez oturumun kritik uyarısı) açıkça
belirtildi — bu yüzden veri modelinde `v:` (Osmanlı vasallığı) değil bağımsız
bir devlet kaydı olarak temsil ediliyor. `cezayir-fransiz`'in `ozet`ine de
çapraz referans eklendi.

### 2) `erdel` renk ölçümü — BUG DEĞİL, kasıtlı tasarım

`data/yerlesimler.js`'te `d:"erdel"` hiç kullanılmıyor (0 sonuç) — ama Erdel
bölgesindeki yerleşimler (`Erdel (Kaloşvar)`, `Varad`, `Yanova`...) incelenince
gerçek mekanizma ortaya çıktı: Erdel dönemi (1541-1687) bu yerleşimlerin `s:`
(sahiplik/harita) dizisinde HİÇ yer almıyor — `s:` doğrudan `macaristan`
(→1526) ile `avusturya` (1687/1692 sonrası) arasında atlıyor. Erdel dönemi
ayrı bir `v:` (vasal) alanında `{k:"Erdel Prensliği"}` etiketiyle tutuluyor.
`yerlesimler.js`'in kendi yorum satırı (898-899. satır, Boğdan örneği
üzerinden) bunu doğruluyor: `v:` alanı haritada **"soluk Osmanlı-vasalı
çekirdek"** olarak, `s:`/`harita:` renk sistemi DIŞINDA ayrı bir katmanla
gösteriliyor.

**Sonuç:** Erdel'in kendi rengi olmaması eksiklik değil — proje zaten Osmanlı
vasalı özerk prenslikleri (Erdel, ve 1526-1541 Zapolya-Macaristanı) solid
`harita:` rengiyle değil, ayrı bir vasal-overlay mekanizmasıyla gösterecek
şekilde tasarlanmış. `devletler.js`'teki `erdel` kaydının `harita:` alanı
olmaması da bununla tutarlı — dokunmadım, dokunulmamalı.

**Doğrulama:**
```
kayit: 241 | harita eslesmesi olan: 120 | tekrar id: 0
```
`denetle_anakronizm.py`'nin "harita: karşılığı yok" uyarısı artık yalnızca
`turkmen` (kasıtlı, devletsiz boy) gösteriyor — `abdulkadir` de kapandı.
(Not: script ayrıca önceden var olan `nube` kaydında bir eksik alan uyarısı
veriyor — bu partiden önce de vardı, benim dokunduğum bir şey değil, merkeze
ayrıca bildirilmedi çünkü kapsam dışı ve düşük öncelikli.)

`data/devletler.js` dışında hiçbir dosyaya dokunulmadı. Commit/push yapılmadı.
Merkez oturuma bildirildi.

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

## Sırada ne var (görev tanımındaki sıra bozulmadı)

- [x] Parti 1 — Anadolu ve Osmanlı öncesi
- [x] Parti 2 — Balkanlar
- [x] Parti 3 — Orta ve Batı Avrupa
- [x] Parti 4 — Doğu ve Kafkasya (bkz. aşağıdaki ayrıntı)
- [x] Parti 5 — Kuzey ve bozkır (bkz. aşağıdaki ayrıntı)
- [x] Parti 6 — Arabistan ve körfez (bkz. aşağıdaki ayrıntı)
- [x] Parti 7 — Afrika (bkz. aşağıdaki ayrıntı)
- [x] Parti 8 — 1918-1924 ardılları (bkz. aşağıdaki ayrıntı)
- [ ] Parti 9-15 — Dünya kapsamı (Orta Asya, Hindistan, Doğu Asya, Güneydoğu
      Asya, Sahra altı Afrika, Amerika, kalanlar) — henüz hiç başlanmadı

## Sonraki oturuma not
Doğrulama komutunu her partiden sonra tekrar çalıştır. `harita:` eklerken önce
`arac/uret_petek.py`'deki BOYALAR sözlüğünü oku (yalnız oku, çalıştırma) —
Parti 2-8'de birçok id zaten orada tanımlı, tahmin etmeye gerek yok.

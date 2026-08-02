# Oturum 9 — İlerleme Notu

`oturumlar/OTURUM-9-DEVLET-DERINLESTIRME.md` görevi yürütüldü. Yalnız
`data/devletler.js` yazıldı, **commit yapılmadı** (görev tanımına göre
entegrasyon oturumunun işi).

## Görev 1 — Bilinen üç tutarsızlık

1. **`suud-ikinci`/1902 çelişkisi — düzeltildi.** `suud-ikinci`'nin `t`'si
   `1891-01-24`'e (Müleyde yenilgisi, gün hassasiyetinde) çekildi, kronolojisindeki
   1902 maddesi çıkarıldı. Yeni kayıt **`suud-ucuncu`** açıldı
   (f:"1902-01-15", t:"1923-10-29", `harita:"suud"`), 1902 kuruluş maddesi ve
   Şammar'ın 1921-11-02 teslimiyeti oraya taşındı. Üç kayıt (`suud-birinci`,
   `suud-ikinci`, `suud-ucuncu`) artık birbirini `[[...]]` ile çapraz referanslıyor.

2. **`danimarka`/1814 birlik dağılması — düzeltildi.** Kronolojide 1814 bölünme
   maddesi zaten vardı (önceki bir partide eklenmiş), asıl sorun `ad` alanının
   "Danimarka-Norveç" olarak 1923'e kadar sürmesiydi. `ad` → "Danimarka Krallığı
   (1814'e kadar Danimarka-Norveç)" yapıldı, `ozet` 1814 sonrası Norveç'in önce
   İsveç'le birlik (bkz. `norvec`), sonra 1905'te bağımsızlığını anlatacak şekilde
   güncellendi.

3. **Ters aralık script kısıtı — teyit edildi, veri tarafında düzeltme
   gerekmedi.** Görev tanımının verdiği sayısal (`parseInt`) karşılaştırmalı
   son doğrulama komutu çalıştırıldı: **`ters: yok`**. 3 haneli yıllı kayıtlar
   (`bizans`, `venedik`, `papalik`, vb.) artık hiç ters aralık vermiyor —
   önceki oturumların notu doğrulandı.

## Görev 3 — Beylik tarihleri hizalandı

`b383984` commit'indeki (harita/`yerlesimler.js` düzeltmesi) TDV kaynaklı kesin
tarihler `git show` ile okunup dizine birebir işlendi:

| Kayıt | Değişiklik |
|---|---|
| `karaman` | f 1250→**1256** (Ermenek'te başlangıç), Konya fethi **1366** maddesi eklendi, 1277 Türkçe'nin resmî dil ilanı ve 1424 İbrâhim Bey, 1471 Kasım Bey isyanı eklendi. `baskent`: Ermenek→Konya(1366-67)/Larende |
| `karakoyunlu` | f 1375→**1351**, kurucu **Bayram Hoca** (Kara Mehmed artık 1380 hükümdar maddesi), `baskent`: Van-Erciş→Tebriz |
| `akkoyunlu` | f 1378→**1340**, kurucu **Tur Ali Bey** (Kara Yülük Osman Bey 1378 hükümdar maddesine çevrildi) |
| `hamid` | f 1300→**1297**, ilk merkez **Uluborlu** eklendi |
| `haciemir` | f 1330→**1350** (Ordu-Bayramlı'ya genişleme tarihi asıl kuruluş sayıldı), `baskent`: Eskipazar→Ordu(Bayramlı) |
| `aydin` | İzmir'in fethi (**1329**, Umur Bey) maddesi eklendi, `baskent` güncellendi |
| `germiyan` | 1390 Yıldırım ilhakı ve 1402 Ankara Savaşı sonrası yeniden kuruluş maddeleri eklendi |
| `candar` | ilk merkez **Eflani** ve 1309 Çobanoğulları'nı yenme maddesi eklendi |
| `karesi`, `dulkadir` | `baskent` notları güncellendi (tarihler zaten TDV ile uyumluydu, değişmedi) |

Haritaya bu turda eklenen üç devlet dizine `harita:` ile bağlandı:
`selcuklu`, `trabzon-rum`, `kilikya-ermeni` (üçünün de kaydı zaten Oturum 3'ten
vardı, yalnız `harita:` alanı eksikti — `arac/renkler.py`'deki `BOYALAR`
sözlüğünde id'ler birebir aynıydı).

## Görev 2 — Kronolojiler derinleştirildi

Öncelik sırasındaki devletlerin madde sayıları (hedef: yakın temas 10-20,
uzak 5-8):

| Devlet | Önce | Sonra |
|---|---|---|
| bizans | 15 | 15 (zaten hedefte) |
| venedik | 11 | 11 (zaten hedefte) |
| macaristan | 4 | **12** |
| habsburg | 14 | 14 (zaten hedefte) |
| safevi | 11 | 11 (zaten hedefte) |
| memluk | 8 | **10** |
| rusya | 15 | 15 (zaten hedefte) |
| lehistan | 6 | **12** |
| cenova | 6 | **10** |
| karaman | 6 | **10** |
| kirim | 8 | **10** |
| sirp-despotlugu | 3 | **5** |
| bulgar-carligi | 3 | **6** |
| bosna-kralligi | 2 | **6** |
| eflak | 5 | 5 (zaten hedefte) |
| bogdan | 4 | **6** |
| erdel | 3 | **7** |
| gurcistan | 13 | 13 (zaten hedefte) |
| sirvansah | 1 | **6** |
| karadag | 1 | **8** |

**`karadag` ayrıca bir gerçek hata düzeltildi:** kaydın `t`'si 1923-10-29'du
ama Karadağ 1918'de Sırbistan'la birleşip bağımsızlığını kaybetti (I. Dünya
Savaşı sonu, Podgorica Meclisi). `t` → 1918-11-26 çekildi, 1878 maddesinin
`tur`'u yanlışlıkla "son" idi (devlet o tarihte bitmiyordu, bağımsızlığı
tanınıyordu) → "toprak-kazanc" yapıldı, arada 1910 krallık ilanı ve 1912'de
Osmanlı'ya savaş ilan eden ilk Balkan devleti olması maddeleri eklendi.

**`memluk`'ta da küçük bir düzeltme:** 1517-01-22 maddesi hem Ridaniye
savaşını hem Tomanbay'ın idamını tek maddede karıştırıyordu ("yenildi ve
asıldı" aynı gün). İkisi ayrıldı: 1517-01-22 savaş (Ridaniye), 1517-04-13 son
(Tomanbay'ın idamı, gerçek tarihi).

## Nihai doğrulama

```
kayit: 213 | kronoloji: 906 | ortalama: 4.3 | harita: 105 | ters: yok
```

`TEKRAR id` / `EKSIK alan` hiç çıkmadı. Kayıt sayısı 212→213 (`suud-ucuncu`
yeni). Harita eşleşmesi 101→105 (+4: `selcuklu`, `trabzon-rum`,
`kilikya-ermeni`, `suud-ucuncu`).

## Dokunulmayan dosyalar
Görev tanımına uyarak yalnız `data/devletler.js` ve bu ilerleme dosyası
yazıldı. `id`'ler değiştirilmedi. Commit/push yapılmadı, üretim betiği
çalıştırılmadı.

## Sonraki oturuma not
- Kalan ~194 kayıt hâlâ ortalama 4 maddede; bu oturum yalnız görev tanımının
  öncelik sırasındaki ~20 devleti derinleştirdi. Bir sonraki K-2 partisi
  Balkan'ın geri kalanı (Arnavutluk zaten iyi, Mora despotluğu kontrol
  edilebilir) ve dünya kapsamının "orta ayrıntı" kayıtlarına (Parti 9-15)
  odaklanabilir.
- `cenova` kaydındaki 1455 tarihli "Sakız Adası Maona şirketi idaresine
  geçti" maddesi şüpheli görünüyor (Maona'nın Sakız'ı alışı standart
  kaynaklarda 1346 / Giustiniani yeniden örgütlenmesi 1362 olarak geçer,
  1455 değil) — ben dokunmadım çünkü görev tanımının bildirdiği üç
  tutarsızlığın dışındaydı ve doğrulama Oturum 2/6'nın işi; oraya bırakıyorum.

---

## EK — Merkez oturumun "DENETİM + DEVAM GÖREVİ" isteği üzerine 2. tur

Yukarıdaki iş bittikten sonra merkez oturumdan (session-to-session mesaj)
`DURUM.md`/`ETIKETLEME.md`/`OGRENILENLER.md`'ye dayanan bir devam görevi
geldi: kimlik sözlüğü, anakronizm hazırlığı, derinleştirmeye devam. Üç
dosyayı okuyup içeriği doğruladım (213 kayıt, 105 harita, "habsburg/avusturya"
vakası — hepsi gerçek ve ölçülmüş), sonra:

### Öncelik 1 — `data/kimlikler.js` + 4-kümeli ölçüm
Ayrıntılı ölçüm ve tasarım gerekçesi: **`oturumlar/OTURUM-9-KIMLIK-BIRLESIK.md`**.
Özet: `DEVLETLER.harita → renkler.py` linklerinin **hepsi sağlamdı**; yalnız
**`buhara`, `cagatay`, `hive`** kayıtlarında `harita:` alanı unutulmuştu (aynı
id'yle zaten `renkler.py`'de tanımlıydı) — bu 3'ü `data/devletler.js`'te
düzeltildi. Canlı `data/yerlesimler.js`'in `d:` kimlikleri **%100** `renkler.py`
ile örtüşüyor — sıfır kırık boya referansı. `ANTLASMALAR.taraf` da **yalnız**
kasıtlı olarak dizinde bulunmayan `osmanli` dışında hep `DEVLETLER.id` ile
örtüşüyor. `data/kimlikler.js` yazıldı: 213 kaydın hepsi `KIMLIKLER.devlet`
altında, kanonik anahtar `DEVLETLER.id` (gerekçe: harita kimliği bazen birden
fazla dönemi paylaşıyor, `f`/`t` donarsa anakronizm denetimi bozulurdu — bu,
ETIKETLEME §5 örneğinden **bilinçli bir sapma**, gerekçesi belgede).

### Öncelik 2 — f/t hassasiyeti ölçümü (yalnız ölçüm, yeniden yazım yapılmadı)
```
f alanı gün/ay hassasiyetinde: 68  | f alanı yıl (01-01) varsayılanında: 145
t alanı gün/ay hassasiyetinde: 149 | t alanı yıl (01-01) varsayılanında: 64
ozet alanında kaynak/TDV notu geçen kayıt: 69 / 213
```
213 kaydın **hepsi** biçim olarak geçerli (bozuk tarih yok, `ters: yok`).
"Yıl varsayılanı" çoğunlukla **doğru** bir yazım (gün gerçekten bilinmiyor,
proje kuralı `YYYY-01-01` yazmayı zaten öngörüyor) — hata değil, ama 213
kaydın her birine tek tek kaynak/hassasiyet notu düşmek (VERI-YAPISI.md'nin
planlı `kesinlik` alanı) bu partinin süresini aşan ayrı bir araştırma turu
gerektiriyor; **yapmadım, ölçüp bıraktım.** Sonraki oturum bunu devralabilir.

### Öncelik 3 — kalan derinleştirme
Merkez oturumun listesindeki hâlâ sığ kayıtlar derinleştirildi:

| Kayıt | Önce | Sonra |
|---|---|---|
| akkoyunlu | 6 | **10** |
| karakoyunlu | 4 | **10** |
| timurlu | 7 | **10** |
| fas | 1 | **7** |
| habesistan | 4 | **9** |
| germiyan/aydin/saruhan/mentese/hamid/candar/karesi/dulkadir | 3-6 | 4-6 (hafif iyileşme) |
| ramazanoglu | 3 | 3 (değişmedi — güvenilir ek kaynak bulamadım, uydurmadım) |

Genel toplam: **213 kayıt, 939 kronoloji maddesi, ortalama 4.41, harita 108.**

### Öncelik 4 — Oturum 12/13 ile birleşik kimlik listesi
`oturumlar/OTURUM-9-KIMLIK-BIRLESIK.md`'de: Oturum 12'nin 15 (9+6), Oturum
13'ün 37+98 bekleyen kimliği kendi ölçümümle çapraz doğrulandı (üçüncü
bağımsız ölçüm — tam örtüşüyor). **Çakışma yok** — coğrafyalar ayrık
(Avrupa/Asya), "Kastilya" gibi örnekler bugün gerçekleşmiş bir çakışma değil
(ne benim ne başka bir dosyada `kastilya` diye bir DEVLETLER kaydı var).

### Dokunulan/dokunulmayan dosyalar (2. tur)
Yazılan: `data/devletler.js` (buhara/cagatay/hive harita + derinleştirme),
`data/kimlikler.js` (yeni), `oturumlar/OTURUM-9-KIMLIK-BIRLESIK.md` (yeni),
bu dosya. **Dokunulmayan** (mesajın da yasakladığı): `arac/renkler.py`,
`data/olaylar*.js`, `data/yerlesimler*.js`, `index.html`, `js/app.js`.
Commit/push yapılmadı, üretim betiği çalıştırılmadı.

### Nihai doğrulama (2. tur sonrası)
```
kayit: 213 | kronoloji: 939 | ortalama: 4.41 | harita: 108 | ters: yok
```

---

## EK-2 — KOORDINASYON.md sonrası 3. tur (14 paralel oturum düzeni)

Merkez oturum bu turda `KOORDINASYON.md`'yi işaret etti: artık 14 oturum var,
benim yazma yetkim **yalnız `data/kimlikler.js`**. Üç madde geldi.

### 1 — Oturum 15'in beklediği `nogay`/`kazak` kimlikleri

Ölçtüm: her ikisi de zaten `data/devletler.js`'te tam kayıt olarak vardı
(`nogay`, `kazak-hanligi`) ve `kimlikler.js`'te karşılıkları da vardı — eksik
olan yalnız `harita:` alanıydı. `data/yerlesimler_ortaasya2.js`'in kendi
başlığını okudum: Oturum 15 (o dosyada hâlâ "Oturum 11" imzalı, sonradan
devraldı) **kısa-id geleneğine uyarak** `d:"nogay"` ve `d:"kazak"` yazmış
(uzun `kazak-hanligi` değil — `kazan`/`kirim`/`altinorda`/`hive`/`buhara`
örnekleriyle tutarlı, kendi dosyasında bunu açıkça not etmiş). Buna göre:

```
nogay:         harita:null → harita:"nogay"
kazak-hanligi: harita:null → harita:"kazak", esad:["kazak"] eklendi
```

⚠️ Bu yalnız **kimlik sözlüğü tarafı**. `arac/renkler.py`'nin `BOYALAR`
sözlüğünde `nogay` ve `kazak` hâlâ **tanımsız** (`grep` ile doğrulandı, sıfır
eşleşme) — o dosya benim yetkim dışında (Oturum 16). Oturum 15'in noktaları
tanımsız kimlikle boyanamaz (`uret_petek.py:174` uyarısı), Değişmez 1 bozulmaz
ama harita o pencerelerde boş kalır. **Oturum 16'ya iletilmesi gereken iki
satır:** `"nogay": ("Nogay Ordası", "<hex>")`, `"kazak": ("Kazak Hanlığı", "<hex>")`.

### 2 — hatalar-11 md.47: Berlin sonrası Bulgaristan

Ölçtüm: `bulgaristan-prensligi` kaydı zaten doğru kapsamda —
`f:"1878-07-13"` (Berlin), `t:"1908-10-05"` (bağımsızlık ilanı), adı zaten
"Prensliği" diyerek Osmanlı'ya bağlı/vergi mükellefi statüyü işaretliyor.
Bu kayıtta düzeltilecek bir hata **yok**.

Gerçek eksik başka yerde: **Şarkî Rumeli (Doğu Rumeli)**, Berlin'de
Bulgaristan Prensliği'nden **ayrı** kurulan, kendi Hıristiyan valisiyle
yönetilen bir başka özerk Osmanlı vilayetiydi (1878-07-13 → 1885-09-18
birleşme). Ne `data/devletler.js`'te ne `kimlikler.js`'te bu kimliğin kaydı
var — `devletler.js`'teki "Doğu Rumeli'yi ilhak etti" (1885-09-18) maddesi
bunu zımnen doğruluyor ama ayrı bir devlet kaydı açmıyor.

**Yapmadım:** `kimlikler.js`'e `sarki-rumeli` diye bir anahtar **açmadım** —
tasarımım gereği (dosya başı) buradaki anahtar her zaman `DEVLETLER.id`'dir;
karşılığı olmayan bir anahtar açmak kendi kuralımı çiğnerdi. Bunun yerine
`bulgaristan-prensligi` kaydının üstüne bulguyu belgeleyen bir yorum ekledim
ve **Oturum 3'e (devletler.js sahibi) öneri bıraktım**: `sarki-rumeli` kaydı
açılsın (f:1878-07-13, t:1885-09-18), açıldığında ben `kimlikler.js`'e
işlerim. ⚠️ Renk notu: bu iki devlet **1878-1885 arası aynı anda sahnede** —
"bulgaristan" rengini paylaşamazlar (bkz. madde 3'teki kural), ayrı hex gerekir.

### 3 — Renk paylaşımı ölçümü (Oturum 12'den devredildi, yarım kaldı)

Kural: yalnız **hiç aynı anda var olmamış** kimlikler aynı rengi
paylaşabilir. Bunu `kimlikler.js`'in kendi `f`/`t` verisinden ölçtüm —
coğrafi komşuluk gerekmiyor, çünkü zamanda hiç kesişmeyen iki devlet zaten
haritada aynı anda göremez.

⚠️ İlk denemede 3 haneli/4 haneli yıl **string karşılaştırması** yanlış sonuç
verdi (`"962-02-02" < "1887-01-06"` string olarak YANLIŞ çıkıyor — CLAUDE.md'nin
uyardığı tuzağın aynısı). `parseInt` ile sayısal karşılaştırmaya geçince
düzeldi (doğrulama: `adal`(1415-1887) artık `almanya`(962-1923) ile
kesişiyor görünüyor, ilk yanlış çıktıda görünmüyordu).

```
Komut: node ile kimlikler.js'in her `harita` değerini grupla (aynı harita id'sini
       paylaşan birden fazla DEVLETLER kaydı varsa min(f)/max(t) birleştir),
       sonra tüm ikili kombinasyonları sayısal f/t ile karşılaştır.
Girdi: data/kimlikler.js, 229 kayıt, 103 benzersiz harita id'si
Ölçüm: toplam aday çift (hiç kesişmeyen)        : 2156 / 5253 olası çift
       aynı bölgede + hiç kesişmeyen (alt küme) : 153
```

**Yarım kalan kısım:** mesajın istediği "her aday için DSATUR renk sayısını
önce/sonra ölç" adımı **yapılmadı**. Bunun için coğrafi komşuluk çizgesi
gerekiyor (hangi kimlikler haritada gerçekten komşu) — bu, `yerlesimler*.js` +
petek motorunun ürettiği bir grafik, benim elimde yok ve `kimlikler.js`'in
f/t verisinden türetilemez. Uydurmadım, eksik bıraktım. 153'lük aynı-bölge
alt kümesi bu hesaplama için **girdi** olarak kullanılabilir (tam liste bu
bölümün sonunda) ama gerçek DSATUR farkını yalnız komşuluk çizgesine sahip
oturum (muhtemelen Oturum 16 ya da motoru çalıştırabilen biri) ölçebilir.

**Aynı bölge + hiç kesişmeyen 153 çift** (bölge | id₁ aralığı || id₂ aralığı):
bkz. ek çıktı — özet: çoğu Anadolu beylikleri arası (fetret şehzadelikleri,
Selçuklu/Eretna/Karesi/Pervâne/Sâhib-Ata gibi art arda gelen art-arda-değil-
aynı-anda-var-olmayan kayıtlar), birkaçı İtalya (Venedik/Napoli/Milano/
Sardinya → İtalya Krallığı), birkaçı Balkan (Bizans/Atina Dukalığı/Bosna →
Yunanistan/Yugoslavya gibi 1918 sonrası ardıllar). Ham liste yeniden
üretilebilir (yukarıdaki komutla); burada yer kaplamaması için tekrarlanmadı.

### ⚠️ Dosya sahipliği uyarısı — kendi kendime buldum

`data/kimlikler.js`'i bu turda okurken kayıt sayısının **213 değil 229**
olduğunu gördüm. Fark, dosyanın içindeki kendi yorumuyla imzalı: *"Oturum
3'ün eklediği 16 yeni kayıt (girdi: oturumlar/OTURUM-12-KIMLIK.md)"* —
İskoçya/İrlanda/Bretanya/Burgonya/Kastilya/Aragon/Navarra/İsviçre/Belçika/
Siena/Ferrara/Mantua/Parma/Piza/Lüksemburg + İrlanda Serbest Devleti.
`KOORDINASYON.md`'nin yazma-yetkisi tablosunda `data/kimlikler.js` **yalnız
Oturum 9**'a ait — yani bu 16 kayıt, tablonun kurduğu sınırın dışında,
başka bir oturum tarafından doğrudan bu dosyaya yazılmış. İçerik kendi
başına makul görünüyor (Oturum 12/13'ün bildirdiği bekleyen kimlik
listeleriyle örtüşüyor, `OTURUM-9-KIMLIK-BIRLESIK.md`'de zaten
"çakışma yok" diye doğrulanmıştı) ve benim bu turki düzenlemelerimle
çakışmıyor, o yüzden **geri almadım/dokunmadım** — silmek başka bir
oturumun işini yok etmek olurdu. Ama merkez oturuma bildiriyorum: bu bir
dosya-sahipliği ihlali örneği, sebebi muhtemelen benim ilk turdaki
`OTURUM-9-KIMLIK-BIRLESIK.md`'yi okuyan Oturum 3'ün mesajıydı (bu oturumun
transkriptinde daha önce geçti) — onlara "kimlikler.js zaten var" dedim ama
"sen değil ben yazacağım" demedim, karışıklık oradan çıkmış olabilir.

### Dokunulan/dokunulmayan dosyalar (3. tur)
Yazılan: yalnız `data/kimlikler.js` (nogay/kazak harita + esad, bulgaristan
notu) ve bu ilerleme dosyası. Dokunulmayan: `arac/renkler.py`,
`data/devletler.js`, `data/yerlesimler*.js`, her şeyin geri kalanı.
Commit/push yapılmadı.

### Nihai doğrulama (3. tur sonrası)
```
node -e ile doğrulandı: kimlikler.js hâlâ geçerli JS, 229 kayıt,
nogay.harita="nogay", kazak-hanligi.harita="kazak"+esad=["kazak"],
bulgaristan-prensligi değişmedi (yorumla belgelendi, veri aynı).
```

---

## EK-3 — Oturum 3'ün 5 yeni Balkan kaydını aynalama

Merkez oturum bildirdi: Oturum 3, `data/devletler.js`'e 5 yeni kayıt ekledi
(kendi dosyasına, kurala uyarak `kimlikler.js`'e dokunmadı) ve benden bunları
aynalamamı istedi. `data/devletler.js`'ten `grep` ile birebir okundu, hiçbir
tarih/ad uydurulmadı — devletler.js zaten ne yazıyorsa o kopyalandı:

| id | ad | f | t | harita | esad |
|---|---|---|---|---|---|
| `sarki-rumeli` | Şarkî Rumeli Vilayeti (Özerk) | 1878-07-13 | 1885-09-18 | **null** (bkz. altta) | — |
| `bulgaristan-kralligi` | Bulgaristan Krallığı (Çarlık) | 1908-10-05 | 1923-10-29 | bulgaristan | [bulgaristan] |
| `sirbistan-kralligi` | Sırbistan Krallığı | 1882-03-06 | 1918-12-01 | sirbistan | [sirbistan] |
| `romanya-kralligi` | Romanya Krallığı | 1881-03-26 | 1923-10-29 | romanya | [romanya] |
| `arnavutluk-bagimsiz` | Arnavutluk Prensliği (Bağımsız) | 1912-11-28 | 1923-10-29 | **null** | — |

**`sarki-rumeli` bilerek `harita:null` bırakıldı** — merkez oturumun kısıtını
uyguladım: `sarki-rumeli` (1878-1885) ile `bulgaristan-prensligi` (1878-1908)
**aynı anda sahnede**, gün bazında da kesişiyor (ikisi de 1878-07-13'te
başlıyor). Renk paylaşımı kuralının (hiç aynı anda var olmamış kimlikler
paylaşabilir) **kapsamı dışında** — "bulgaristan" rengi paylaştırılamaz, ayrı
hex şart. Bu notu kayda yorum olarak da işledim.

**`arnavutluk-bagimsiz` da `harita:null`** (Oturum 3'ün devletler.js'te de
eklemediği alanla tutarlı) ama burada durum FARKLI: bu kayıt ortaçağ
`arnavutluk-iskenderbey` (1443-1479) ile **hiç kesişmiyor** (433 yıl arayla) —
renk paylaşımı kuralına göre "arnavutluk" rengini güvenle devralabilir.
Bunu bir yorumla işaretledim ama **kararı vermedim** — renk ataması
`renkler.py` sahibinin (Oturum 16) işi.

### Ölçüm tazelendi (gün bazlı kesişim, doğrulandı)
```
Renkli (harita bağlantılı) benzersiz kimlik sayısı : 105 (103→105, +bulgaristan-
                                                       kralligi/sirbistan-kralligi
                                                       zaten var olan harita id'lerine
                                                       eklendi, yeni id açmadı)
Toplam aday çift (hiç kesişmeyen, gün bazlı)         : 2218 (önceki 2156'dan +62 —
                                                       yeni eklenen kayıtların
                                                       genişlettiği aralıklar yüzünden
                                                       hem yeni aday hem bazı eski
                                                       adaylar elendi, net +62)
Aynı bölge + hiç kesişmeyen alt küme                 : 152 (önceki 153'ten -1 —
                                                       bulgaristan/yugoslavya ve
                                                       romanya/yugoslavya çiftleri artık
                                                       ÇAKIŞIYOR: bulgaristan-kralligi ve
                                                       romanya-kralligi 1923'e kadar
                                                       sürüyor, 1918 sonrası ardıllarla
                                                       gün bazında kesişiyor — elendi)
```
`sarki-rumeli`/`bulgaristan-prensligi` çifti bu ölçüme hiç girmedi çünkü
`sarki-rumeli`'nin `harita` alanı `null` — script yalnız `harita` dolu
kayıtları gruplayıp karşılaştırıyor. Yani script'in kendisi bu tehlikeli
çifti zaten otomatik olarak "aday" listesine **hiç almıyor** (ne doğru ne
yanlış bir şekilde dahil ediyor — basitçe girdi dışı kalıyor), bu yüzden
merkez oturumun işaret ettiği hata benim ölçümümde hiç görünmedi; onu ancak
`sarki-rumeli`'ye gelecekte bir `harita` atanırsa yeniden koşup teyit etmek
gerekir.

### Dokunulan dosyalar (bu ek)
Yalnız `data/kimlikler.js` ve bu ilerleme dosyası. `data/devletler.js`
okundu (grep), yazılmadı. Commit: `d89f79c` (yalnız `data/kimlikler.js`,
merkez oturumun "takipsiz dosya" uyarısı üzerine — `git add data/kimlikler.js`
tek başına, `git add .` KULLANILMADI). Push yapılmadı.

---

## EK-4 — Ölçüm düzeltmesi: renk paylaşımı (Oturum 16'nın buluşu üzerine)

Merkez oturum, Oturum 16'nın bağımsız ölçümünü iletti: benim EK-2/EK-3'teki
"zamanda hiç kesişmeme" ölçümüm **yanlış vekil** üzerinden yapılmıştı.
Gerçek kısıt coğrafi komşuluktur (Voronoi hücreleri birbirine değiyor mu),
benim kullandığım "aynı bölge etiketi" ve "zamanda kesişme" ikisi de bunun
**yaklaşık** bir vekiliydi. Oturum 16'nın ölçtüğü:

- 400 km yakınlık vekili → 14 renk gerektiriyor gibi görünüyor (YANLIŞ —
  değmeyen hücreleri komşu sayıp sahte kenar üretiyor)
- Gerçek Voronoi komşuluğu → **8 renk yetiyor**
- **261 kimliğin hepsi eklense bile 8 renk yetiyor** — yani renk KITLIĞI diye
  bir sorun yok, `renkler.py`'nin şu anki 10-12 renk bütçesi zaten bol.

**Sonuç: EK-2/EK-3'teki 2218/152'lik "aday çift" ölçümü artık gereksiz —
çözülecek bir kıtlık yokken hangi çiftlerin paylaşabileceğini saymanın pratik
değeri yok.** Ölçümü burada **çürütülmüş/gereksiz** olarak işaretliyorum,
silmedim (yeniden üretilebilir kalsın, ama kimse bunun üzerine renk kararı
inşa etmesin).

**Şarkî Rumeli/Bulgaristan Prensliği renk kısıtı geçerliliğini koruyor**
(gün bazlı gerçek çakışma, vekile bağlı değil) ama **bugün uygulanamaz**:
`grep` ile doğrulandı, `sarki-rumeli` hiçbir `yerlesimler*.js` dosyasında
0 nokta-dönemle geçiyor. Kimlik canlı veriye girdiği gün (hangi oturum
noktaları eklerse) ayrı hex ataması gerekecek; bu not `renkler.py`'ye
Oturum 16 tarafından zaten düşüldü.

### Merkez oturuma rapor (durum sorusu üzerine, özet)
1. nogay/kazak harita crosswalk'ı: **tamam**, commit'te.
2. Oturum 3'ün 5 Balkan kaydı: **tamam**, commit'te.
3. md.47 Bulgaristan: kayıt zaten doğruydu, eksik olan Şarkî Rumeli artık var.
4. Renk paylaşımı ölçümü: yapıldı ama **yanlış vekil** kullanıldığı öğrenildi,
   Oturum 16'nın gerçek Voronoi ölçümü (8 renk, kıtlık yok) esas alınmalı;
   benimki bu notla birlikte okunmalı.

---

## EK-5 — Dört renk hesabı: zeta · bahreyn · idrisi · macaristan-habsburg

Merkez oturum bu dört kimliğin renksiz kaldığını bildirdi (dört paket bekliyor)
ve sınırdaş listelerini verdi. **`arac/renkler.py` `BOYALAR`'a yazma yetkim
YOK** (`KOORDINASYON.md §1`: dosya yalnız Oturum 16'nın). Bu yüzden burada
yalnız **hesabı** yaptım; uygulamayı Oturum 16 yapmalı — sonucu merkez
oturuma chat'te bildirdim.

### ⚠️ Yan bulgu: `renkler.py`'nin "%30 saydamlık" notu güncel değil
Dosya başlığı ΔE'nin "BİNDİRİLMİŞ (%30 saydamlıkla altlığa binmiş) renk"
üzerinden ölçülmesini istiyor. `js/app.js:547` okundu: yabancı devlet dolgusu
(`devlet-dolgu`, `["get","renk"]` — yani `BOYALAR` hex'lerinin fiilen çizildiği
katman) **`fill-opacity: 0.44`**, %30 değil. (`osmanli-dolgu` 0.68, `vassal-dolgu`
0.60 — bu ikisi zaten doğru biliniyordu.) Altlık `#e8dfc8` (g-kara) doğruydu.
**Yön önemli:** 0.44 > 0.30 olduğu için gerçek opaklıkta renkler DAHA AZ
karışıyor, yani %30 varsayımıyla hesaplanmış geçmiş ΔE'ler **iyimser değil,
kötümserdi** — geçen her ölçüm gerçekte daha rahat geçiyor olmalı. Yine de
dosyanın kendi notu düzeltilmeli; ben yazamadığım için burada bırakıyorum,
Oturum 16'ya bildirdim.

### Yöntem
- ΔE76 (Lab öklid mesafesi), BİNDİRİLMİŞ renk üzerinden (gerçek opaklık: 0.44
  yabancı / 0.68 Osmanlı doğrudan / 0.60 Osmanlı tâbi, altlık `#e8dfc8`)
- Komşu listesi **aynen merkez oturumun verdiği** — gerçek Voronoi komşuluğunu
  kendim üretemedim (motor/geometri erişimim yok, bu Oturum 16'nın işi); yani
  komşuluk verisi doğrulanmadan, olduğu gibi kullanıldı. Bu bir varsayımdır,
  gizlemiyorum.
- Kırmızı aile (Osmanlı, hue ~345-15°) aday havuzundan çıkarıldı
- S/L, paletin genel dağılımına yakın tutuldu (S 35-65, L 38-58) — H 80,
  L 50 gibi "ekran birincil rengi" adaylar iyi ΔE veriyordu ama palet
  üslubuna aykırıydı (bkz. betik çıktısı, ilk tur), o yüzden ikinci turda
  daraltıldı.

### Sonuç (eşik referansı: dosyanın kendi notu ΔE ≥ 12 "yeni kimliğe" uygulanıyor)

| Kimlik | Hex | En yakın komşu (bindirilmiş ΔE) |
|---|---|---|
| `zeta` | `#30a661` (koyu zümrüt yeşil) | venedik 19,9 |
| `bahreyn` | `#b234a7` (mor-eflatun) | portekiz 29,5 |
| `idrisi` | `#303aa6` (çivit mavisi) | OSMANLI-tâbi 37,5 |
| `macaristan-habsburg` | `#773399` (mürdüm) | OSMANLI-tâbi 26,7 |

Dördü de 12 eşiğinin belirgin üstünde. `zeta` için en zor komşu venedik'ti
(üçü de mavi-gri-kahve ailesindeydi uyarısı doğruydu, bu yüzden yeşile
çekildi — yeşil ailede bölgede sınırdaş yok). `idrisi` bilerek mavi seçildi
ki `suud`/`hicaz`'ın sarı-yeşil/toprak ailesine üçüncü bir yakın ton
eklenmesin (merkez oturumun uyarısı). `macaristan-habsburg` mor seçildi;
1541-45 kutusundaki "üç yeşil leke" vakasının tekrarını önlemek için yeşil
aileden bilerek kaçınıldı, mavi (`macaristan`) ve altın (`avusturya`) ile de
belirgin ayrık.

**Dörtlünün kendi aralarında** (zorunlu değil, hiçbiri birbirine sınırdaş
değil — Balkan/Körfez/Asîr/Orta Avrupa dört ayrı coğrafya): en yakın çift
`bahreyn`↔`macaristan-habsburg` ΔE 10,4. İkisi tarih ve coğrafya olarak hiç
kesişmiyor, dosyanın kendi kuralına göre bu **ihlal değil** (paylaşım/yakınlık
sorun değil, komşuluk sorun); yalnız bilgi amaçlı not düşüyorum.

### Oturum 16'ya teslim edilecek satırlar (taslak — ad alanları öneridir, kendisi düzeltebilir)
```python
"zeta":                ("Zeta (Karadağ öncesi)",   "#30a661"),
"bahreyn":              ("Bahreyn (Âl Halîfe)",     "#b234a7"),
"idrisi":               ("İdrîsî Emirliği (Asîr)",  "#303aa6"),
"macaristan-habsburg":  ("Habsburg Macaristanı",    "#773399"),
```

### Dokunulan dosyalar (bu ek)
Yalnız bu ilerleme dosyası. `arac/renkler.py` OKUNDU, YAZILMADI (dosya
Oturum 16'nın). `js/app.js` OKUNDU (opaklık/altlık değerleri için), YAZILMADI.
Hesap betiği scratchpad'te kaldı, repoya girmedi.

---

## EK-6 — Beşinci kimlik: `hersek` — ⚠️ sınırdaş listesi DOĞRULANMADI

Merkez oturum `hersek`i (Hersek sancağı, Bosna'dan ayrı fetih — Mostar 1483,
Saraybosna 1463, TDV `foca`: "1470'te Hersek sancağının merkezi oldu")
bugün ekledi ama **sınırdaş listesi vermedi**. Kural gereği ("ölçemediğini
'ölçülemedi' diye işaretle, tahmin yazma") bunu açıkça ayırıyorum:

- **Kesin olan tek şey:** `bosna` (#8f7d5b) — merkez oturumun kendi
  gerekçesi, aynı bölgenin BÖLÜNMÜŞ hâli, yani ikisi kesinlikle bir arada
  görünecek.
- **Coğrafi çıkarımla eklediklerim (DOĞRULANMADI):** `zeta` (Karadağ sınırı
  bitişik), `venedik` (Adriyatik kıyısı, Raguza/Dubrovnik hattı), OSMANLI
  doğrudan/tâbi (1463-1483 fetih dönemi). Bunlar benim coğrafya bilgime
  dayanıyor, Oturum 16'nın gerçek Voronoi ölçümüyle **doğrulanmadı**.

Bu varsayımsal kümeyle hesaplanan sonuç:

| Kimlik | Hex | En yakın komşu (varsayımsal kümede) |
|---|---|---|
| `hersek` | `#2c498c` (lacivert) | venedik ΔE 18,5 |

Diğer dört yeni renkle çapraz (zorunlu değil, hiçbiri coğrafi/zamansal
sınırdaş değil — bilgi amaçlı): zeta 37,7 · bahreyn 28,1 · idrisi 10,8
(en yakını) · macaristan-habsburg 18,1.

**Bunu "ölçülemedi" değil "doğrulanmamış varsayımla ölçüldü" olarak
teslim ediyorum** — merkez oturumun "sessiz kalma, üretemiyorsan yaz"
talebi net; tamamen boş bırakmak yerine, hangi girdinin doğrulanmadığını
işaretleyerek veriyorum. Oturum 16 gerçek komşuluğu ölçtüğünde `venedik`
yerine farklı bir komşu çıkarsa bu hex yeniden sınanmalı.

---

## EK-7 — "151 renksiz kimlik" bildirimi: bir önerme düzeltmesi + 10 Avrupa rengi

### 🔴 Önerme düzeltmesi: 98'i (Asya) rengi olsa da haritada GÖRÜNMEZ

Merkez oturum "151 rengi ürettiğin gün harita Pekin'den Lizbon'a boyanır" dedi.
Bu **kısmen yanlış**. `arac/girdi.py` başlığını okudum (yazma yetkim yok,
salt okundu):

> `data/yerlesimler_asya.js`  344 nokta — 98 devlet kimliği renkler.py'de YOK,
> **tamamı 62°D'nin doğusunda, harita penceresi dışı**

"151 renksiz" listesindeki Çin/Hindistan/Japonya/Kore/Vietnam/Orta Asya
kimlikleri (qing-hanedani, babur-imparatorlugu, ingiliz-hindistani,
cin-cumhuriyeti, delhi-sultanligi, yuan-hanedani, ming-hanedani,
meiji-japonya, sur-hanedani, edo-bakufu, maratha, azuchi-momoyama, racput,
bengal-sultanligi, muromachi, kazak, cungar, yarkent-hanligi, yakub-beg…) bu
98'in içinde. `girdi.py`'nin kendi notu: bu dosya **motorun bugünkü
`BOLGE = box(-12, 1.5, 62, 62)` penceresinin dışında**, yani `CLAUDE.md §6`'nın
kademe kuralı henüz açmadı. Bunlara renk vermek onları haritada GÖSTERMEZ —
geometri, boyanmadan önce pencere dışı bırakılıp kırpılıyor. Bu bir renk
sorunu değil, **§6'nın "harita penceresi" kademe kararı**, sahibi Oturum 16.
Rengi hazır olsa bile o kademe açılmadan Pekin/Delhi görünmez.

**`kastilya`nın da dahil olduğu Avrupa 15-16'lık kısım bunun DIŞINDA** —
`yerlesimler_avrupa.js` zaten pencere içinde (`-12, 1.5, 62, 62` Avrupa'yı
kapsıyor), yalnız merge bekliyor ve rengi eksik. **Gerçek darboğaz bu 15-16,
Asya'nın 98'i değil.**

### 10 Avrupa kimliği — ilk tur (gerçek f/t verim var, coğrafyası iyi bilinen)

`data/kimlikler.js`'te zaten kayıtlı olan (Oturum 3'ün eklediği) 16 Batı
Avrupa/İtalya kaydından, coğrafi komşuluğu **iyi belgelenmiş** (İskoçya-
İngiltere, Kastilya-Aragon-Navarra gibi ders kitabı düzeyinde bilinen
sınırlar) 10 tanesini hesapladım — gerçek `f`/`t` tarihleriyle çakıştıklarını
doğruladım, komşuluk ise standart Batı Avrupa coğrafyası (motorla
doğrulanmadı, ama İskoçya'nın İngiltere'ye komşu olduğu gibi önermeler
tartışmalı değil):

| Kimlik | Hex | Komşu kümesi |
|---|---|---|
| `kastilya` | `#a63aa6` | portekiz, granada, aragon, navarra |
| `aragon` | `#358d35` | kastilya, fransa, navarra |
| `navarra` | `#a16b36` | kastilya, aragon, fransa |
| `iskocya` | `#3ea33e` | ingiltere, irlanda |
| `irlanda` | `#b87a3d` | ingiltere, iskocya |
| `bretanya` | `#46b946` | fransa |
| `burgonya` | `#307e30` | fransa, almanya, isvicre |
| `isvicre` | `#8f328f` | fransa, almanya, italya, avusturya, milanoduka, burgonya |
| `belcika` | `#64c464` | hollanda, fransa, almanya, luksemburg |
| `luksemburg` | `#bf4abf` | belcika, fransa, almanya |

Tüm çiftler (yeni↔mevcut VE yeni↔yeni) bindirilmiş ΔE ≥ 12 eşiğini geçiyor,
programatik olarak doğrulandı (script scratchpad'te).

### 🔴 5 İtalyan şehir devleti BİLEREK HESAPLANMADI: `siena` · `ferrara` · `mantua` · `parma` · `piza`

Bunlar 8 mevcut İtalya-bölgesi rengiyle (venedik, ceneviz, napoli, papalik,
toskana, milanoduka, sardinya, italya) VE birbirleriyle sık sık aynı anda
sahnede — orta çağ İtalyası'nın şehir devletleri çoğu zaman gerçekten komşu.
Bu tam olarak dosyanın kendi uyarısının verdiği örnek: **`ferrara`/`mantua`/
`parma` DSATUR'u 4'ten 5'e çıkarmıştı** (kimlik birleştirme yasağının
gerekçesi). Yoğun, çok-taraflı bir küme elle/varsayımla güvenle çözülemez —
motorun gerçek komşuluk verisi olmadan burada yanlış karar riski yüksek.
**Bilerek boş bırakıyorum, Oturum 16'ya havale ediyorum** — bu da "ölçülemedi,
tahmin yazma" ilkesinin ta kendisi.

### Öneri: kalan ~135'i (Asya + henüz değinilmeyen küçük Avrupa/diğer) TEK TEK ÜRETME

`renkler.py`'nin kendi bulgusu hatırlanmalı: **261 kimliğin TAMAMI eklense
bile gerçek Voronoi grafiğinde 8 renk yetiyor.** Yani asıl iş 151 YENİ hex
TASARLAMAK değil, **hangi kimliğin hangi mevcut kimlikle HİÇ komşu olmadığını
bulup mevcut paletten pay etmek** — mekanik bir atama, motor + gerçek
komşuluk grafiği gerektiriyor (Oturum 16). Örnek: `qing-hanedani` ile
`ispanya` hiçbir zaman komşu olamaz (iki kıta) — mevcut `ispanya` #c98f4a'yı
doğrudan paylaşabilir, yeni hex gerekmez. Bunu tek tek elle yapmak hem
gereksiz iş hem (benim yapmam durumunda) doğrulanamayan coğrafi varsayım
demek. **135'in büyük kısmı bu şekilde ÜCRETSİZ kapanır** — yeni tasarım
gereken küme, muhtemelen tahmin ettiğimden çok daha küçük.

### Dokunulan dosyalar (bu ek)
Yalnız bu ilerleme dosyası. `arac/girdi.py` OKUNDU (pencere/dosya durumu
için), YAZILMADI. `data/kimlikler.js` OKUNDU (mevcut 16 Avrupa kaydının f/t'si
için, zaten benim dosyam). `arac/renkler.py` YAZILMADI.

---

## EK-8 — `buyuk-orda` (Oturum 15/Orta Asya'nın ihtiyacı) + durum netleştirmesi

### `buyuk-orda`
⚠️ **Düşük güven — bozkır kimlikleri için sezgisel komşuluk daha önce
yanılmıştı.** `renkler.py`'nin kendi kaydı: `nogay`'ın GERÇEK ölçülmüş
komşuları `timurlu`/`rusya`/`hive` çıkmıştı, benim önce tahmin edeceğim
"kırım/kazan/lehistan" değil. Bu yüzden `buyuk-orda` için hem sezgisel hem
`nogay`/`kazak-hanligi`'nin gerçek ölçümünde çıkan komşuların BİRLEŞİMİYLE
geniş bir küme kullandım (kırım, kazan, nogay, rusya, lehistan, altinorda,
timurlu, kazak-hanligi):

| Kimlik | Hex | En yakın komşu (geniş varsayımsal kümede) |
|---|---|---|
| `buyuk-orda` | `#3b7791` (çelik mavisi-teal) | altinorda ΔE 15,9 |

Diğer üçüyle (kırım/kazan/nogay) ΔE payı daha da geniş; en dar olan
`altinorda`. **Bu da doğrulanmadı, motor ölçümüyle sınanmalı.**

### Netleştirme — üç nokta
1. **`arac/renkler.py`'ye yazma yetkim yok** (`KOORDINASYON.md §1`, satır 16).
   Ne kadar hesap yaparsam yapayım, uygulama adımı benden geçmez — Oturum
   16'nın dosyasıdır. "Tamamı sende" ifadesi bu adım için teknik olarak
   mümkün değil; ben yalnız hesabı üretebilirim.
2. **Bugüne kadar teslim edilen 16 kimlik** (zeta, bahreyn, idrisi,
   macaristan-habsburg, hersek, buyuk-orda + 10 Avrupa) uygulamaya hazır,
   EK-5/6/7/8'de toplu.
3. **151'in 98'i (Asya) hâlâ harita penceresi dışı** (`girdi.py`, EK-7) —
   bu düzeltme merkez oturumun son mesajında tekrarlanmadı; mesajın
   ulaşmadığından şüpheleniyorum (önceki "durum sorusu" tekrarlarıyla aynı
   desen). Kısa yanıtta tekrar ettim.

---

## EK-9 — `astarhan` (ACİL, 54 yıllık taşmayı kapatıyor) + kontrast metriği açıklığı

### `astarhan`
`data/devletler.js:1482` ve kendi dosyam `data/kimlikler.js:170`'te zaten
kayıtlı (`f:"1466-01-01", t:"1556-01-01", bolge:"sibirya-bozkir"`), yalnız
`harita:null`. Komşu kümesi: aynı bölgedeki diğer bozkır kimlikleri +
zamanda gerçekten çakışanlar (`buyuk-orda` 1466-1502 örtüşüyor):

| Kimlik | Hex | En yakın komşu |
|---|---|---|
| `astarhan` | `#3838a8` (çivit/lacivert) | altinorda ΔE 23,1 |

`nogay`/`kazan`/`kirim`/`kazak-hanligi`/`rusya`/`buyuk-orda`'ya ΔE payı daha
geniş. Komşu kümesi yine doğrulanmadı (bozkır — aynı düşük güven notu EK-8
ile geçerli), ama ΔE payı bu yedisinde de rahat.

⚠️ `harita:"astarhan"` alanının `devletler.js`'e yazılması gerekiyor — o
dosya benim değil, Oturum 3'ün. Renk + kimlik hazır, satır Oturum 3/16
arasında tamamlanmalı.

### "Kontrast" metriği — benim ölçtüğüm ΔE ile AYNI ŞEY DEĞİL, formülünü bilmiyorum
Merkez oturum iki farklı sayı bildirdi (`akkoyunlu` için önce "kontrast 15",
sonra "kontrast 10,3") — muhtemelen ARAYÜZ/MOTOR tarafında ayrı bir ölçüm,
belki parlaklık/luminans karşıtlığı (WCAG tarzı), ΔE76 değil. Bu formülü
`renkler.py`'de veya `js/app.js`'te bulamadım; ölçen oturumun (ARAYÜZ mü,
MOTOR mü?) formülü paylaşması lazım — yoksa ben kendi ΔE'mi "kontrast" diye
sunmuş olurum ve bu iki farklı ölçütü karıştırır. **Kendi payıma düşen:**
teslim ettiğim 17 rengin (16 + astarhan) hepsi dosyanın kendi ΔE ≥ 12
eşiğini raporlanan margin'lerle geçiyor; "kontrast" ayrı bir denetim ise
onu ölçen taraf uygulamalı.

### Plan — "kaç renk / ne kadar sürede"
- **Astarhan**: teslim edildi (yukarıda).
- **5 eski borç + buyuk-orda**: teslim edildi (EK-5/6/7/8).
- **`cerkez`/`adige`**: `devletler.js`'te kayıt yok, tarih/bölge bilmeden
  ΔE hesaplanamaz — TDV araştırması ilgili bölge oturumunun işi
  (`KOORDINASYON.md §0 Kural 2`: kaynak gerektiren maddede Sonnet durur).
  Kayıt geldiği gün (muhtemelen aynı oturum içinde, birkaç dakika) rengi
  hazırlarım.
- **İtalyan 5'lisi** (siena/ferrara/mantua/parma/piza): motor komşuluğu
  olmadan üretmiyorum (EK-7), Oturum 16'ya havale.
- **151'lik liste (Asya)**: siz de doğruladınız — pencere kapalı, üretmenin
  bugün görünür karşılığı yok. Pencere açılana kadar bu listeye
  dokunmuyorum; sıra geldiğinde aynı yöntemle (gerçek komşuluk + ΔE ≥ 12)
  ilerlerim, tek tek elle değil toplu/reuse mantığıyla (EK-7'nin önerisi).

---

## EK-10 — "Sırbistan dörtlüsü" yanlış alarm + `macaristan-naiplik` ücretsiz kapandı + iki soru

### Sırbistan ailesi: MOTOR'un Çelebi-şehzade duvarına ÇARPMIYORUZ
Merkez oturum, MOTOR'un bulduğu "aynı aile içinde ΔE≥12 + tutarlı ton aynı
opaklıkta çelişiyor" duvarının (Çelebi şehzadeleri, L* genişliği 28,7)
`sirbistan`/`sirp-despotlugu`/`sirbistan-prensligi`/`sirbistan-kralligi`
dörtlüsünde de çıkacağını söyledi. **Kendi dosyamı kontrol ettim, çıkmıyor:**

```
sirp-despotlugu       harita:"sirbistan"   (kimlikler.js:71)
sirbistan-prensligi   harita:"sirbistan"   (kimlikler.js:101)
sirbistan-kralligi    harita:"sirbistan"   (kimlikler.js:102)
```

Üçü de **zaten** `sirbistan`'ın kendi hex'ini (#6a8fa0) paylaşıyor — bu
tesadüf değil, EK-3'te (ilk turda) bilerek böyle kurulmuştu: aynı ulusun
sürekliliği tek renkle, aşama farkı etiketle gösteriliyor. Yani dört-tonlu
bir "aile" ürettirilmiyor, MOTOR'un ölçtüğü duvara hiç girmiyoruz. Bu
karışıklık muhtemelen Çelebi vakasıyla bu vakayı benzer sanmaktan geliyor —
ikisi yüzeyde benziyor ama biri (Çelebi) gerçekten 4 EŞ ZAMANLI ayrı ton
istiyor, diğeri (Sırbistan) 1 renk + 3 etiket istiyor.

### `macaristan-naiplik` ÜCRETSİZ kapandı — `renkler.py`'ye hiç dokunulmadı
`devletler.js:410` kendi notu: `macaristan` **tam** 1918-11-16'da bitiyor
("cumhuriyet ilan edildi, bkz. macaristan-naiplik") — sıfır zamansal
örtüşme. `data/kimlikler.js`'i (benim dosyam) düzenledim:
`esad:["macaristan"], harita:"macaristan"` — mevcut #1e88e5'i güvenle
paylaşıyor. **Yeni hex gerekmedi, renkler.py'de iş yok.** `bulgar-carligi`
de zaten aynı şekilde `harita:"bulgaristan"` ile çözülüydü (kontrol ettim).

### İki açık soru — tahmin etmek yerine soruyorum
1. **`nemanjic-sirbistan` / `arnavutluk-1912`**: "harita çiziyor, katalog
   bilmiyor" ifadesi şunu düşündürdü — bu noktalar ŞİMDİDEN var olan bir
   kimlikle (muhtemelen `sirbistan` / `arnavutluk`) mı boyanıyor, yoksa
   BOYASIZ mı duruyor? Birincisiyse bu **renk sorunu değil, yalnız
   `devletler.js` katalog eksiği** (Oturum 3'ün işi, benim değil) — hersek
   gibi "renk yok → boyanmıyor" değil. İkincisiyse gerçekten yeni hex
   gerekiyor ama tarih/coğrafya için `devletler.js` kaydını bekliyorum
   (kaynaksız tarih uydurmam, `KOORDINASYON.md §3`). Hangisi, netleşince
   hemen hesaplarım.
2. Önceki EK-9'daki "kontrast" formülü sorusu hâlâ açık.

---

## EK-11 — dosya sahipliği itirazı + dört yeni tespit + iki açık soru

### `oturumlar/OTURUM-16-KUZEY-DOGU-AVRUPA.md` benim değil
Merkez oturum "dosya senin" dedi ve o dosyadaki E.6 blokaj notunu güncellememi
istedi. **`KOORDINASYON.md §1` satır 16'yı tekrar okudum: bu dosya Oturum
16'nın satırında.** Benim satırım (9) yalnız `data/kimlikler.js`. Dosyaya
dokunmadım — Kural 1 ("görev DOSYAYA göre dağıtılır") gereği bu iş
gerçek sahibine (Oturum 16 ya da o notu yazan kim ise) gitmeli.

### Önceki teslimler hâlâ "🔴 renk yok" diye raporlanıyor — mesaj kaybı doğrulandı
`astarhan` · `buyuk-orda` · `hersek` · `zeta` · `bahreyn` · `idrisi` ·
`macaristan-habsburg` — hepsi önceki EK'lerde teslim edildi, biri (astarhan)
**bir mesaj önce** verildi. Son mesajda yedisi de yeniden "bekliyor" diye
listelendi. Bu, "durum sorusu" turlarındaki desenin devamı; mesajlarımın
düzenli ulaşmadığından artık eminim. Bu EK'te tekrar etmiyorum, tablo EK-5/
6/8/9'da duruyor.

### Dört yeni tespit — ikisi ücretsiz kapandı, ikisi gerçek yeni renk
Kendi dosyamı (`data/kimlikler.js`) kontrol ederek çözdüm, hiçbiri
`renkler.py`'ye dokunmadı:

| Kimlik | Durum | Uygulanan |
|---|---|---|
| `sirbistan-nemanjic` | devletler.js:496'da GERÇEKTEN var (f:1217,t:1402), kimlikler.js'te eksikti | `harita:"sirbistan"` (sıfır örtüşme, sirp-despotlugu tam 1402'de başlıyor) |
| `zend` | harita:null idi, gerçek gap | `harita:"safevi"` (ÇAPRAZ DOĞU'nun kendi validated tier tasarımı: safevi 1736 biter, zend 1751 başlar, sıfır örtüşme) |
| `arnavutluk-bagimsiz` | harita:null idi, "7 pencere boyanmıyor" | `harita:"arnavutluk"` (arnavutluk-iskenderbey zaten aynı mantıkla paylaşıyordu) |
| `macaristan-naiplik` | (önceki EK-10'da yapıldı) | `harita:"macaristan"` |

**Dördü de `data/kimlikler.js`'te commit edilmeyi bekliyor** (dosyam,
yazdım). Toplam kayıt: 235.

### `afsar` — mevcut çözüm muhtemelen YANLIŞ, ama düzeltmedim (risk: çalışan bir şeyi bozmak)
Şu an `harita:"iran"` diyor ve ÇALIŞIYOR (boyanıyor). Ama ÇAPRAZ DOĞU'nun
tier tasarımı afsar'ı TEK BAŞINA 3. basamağa koyuyor — safevi/zend'den VE
"iran"dan ayrı bir ton istediklerini gösteriyor. Gerçek örtüşme de var:
afsar 1736-1796, zend 1751-1794 (kesişiyor, aynı safevi/zend rengini
paylaşamaz — zaten paylaşmıyor) ve Kaçar/İran 1789'da başlıyor, afsar
1796'ya kadar sürüyor (7 yıl örtüşme, "iran" bu dönemde kullanılıyorsa
sorun). **Kimlikler.js'i DEĞİŞTİRMEDİM** çünkü şu an çalışan bir kurulumu
doğrulanmamış bir varsayımla bozmak istemedim. Hazır aday:

| Kimlik | Aday hex | En yakın komşu |
|---|---|---|
| `afsar` (öneri, henüz uygulanmadı) | `#38749f` (çelik mavisi) | zend/safevi ΔE 15,7 |

Karar (uygula/uygulama) Oturum 16'ya veya İran bölgesini bilen oturuma ait.

### `zaporojye` — gerçek gap, hazır
harita:null, "Çehrin/Poltava 1648-1654 hâlâ Lehistan boyalı" bildirildi.
Komşular: lehistan, rusya, kirim.

| Kimlik | Hex | En yakın komşu |
|---|---|---|
| `zaporojye` | `#a68e30` (hardal/altın sarısı) | kirim ΔE 14,6 |

Bunu da kimlikler.js'e UYGULAMADIM — `harita:"zaporojye"` yazmak için önce
bu hex'in `renkler.py` `BOYALAR`'a girmesi gerekiyor (id `renkler.py`'de yoksa
motor "kimliksiz nokta" uyarısı basar). Astarhan'da da aynı sıra izlendi:
ben hesaplıyorum, Oturum 16 `BOYALAR`'a ekliyor, ondan SONRA ben `harita:`
alanını yazıyorum.

### İki açık soru
1. **`kafkas-hanliklari`**: "kullanıcı kararı verildi" dendi ama tarih/bölge/
   nokta listesi bende yok. `devletler.js`'de kaydı da yok (grep ettim).
   Tarih olmadan ΔE hesaplayamam (kaynaksız uydurmam). Kaydı kim yazacak,
   ne zaman — bilgi gelince hemen hesaplarım.
2. **"15 tanımsız kimlik"** (228 noktalık partinin "ikinci kapısı") — liste
   bende yok. Hangi 15 kimlik olduğunu paylaşırsanız hepsini aynı yöntemle
   (gerçek/verilen komşuluk + bindirilmiş ΔE ≥ 12) tek turda hesaplarım.

---

## EK-12 — `dehlek` (Öncelik 1, tek başına teslim)

Merkez oturumun "sırayla git, her birinden sonra haber ver" isteğine uyarak
bu EK yalnız `dehlek`i içeriyor; 2/3 zaten önceki EK-11'de bitmişti.

Komşu kümesi: memluk (aynı sahnede geniş çevre), habesistan, funj, adal,
yemen (Kızıldeniz karşı kıyısı) — hepsi kahve/toprak/zeytin ailesinden
(`CLAUDE.md`'nin kendi notu: "bu köşenin komşuları kahve/tan ailesinden").

| Kimlik | Hex | En yakın komşu |
|---|---|---|
| `dehlek` | `#a838a8` (mürdüm/eflatun) | habesistan ΔE 36,2 |

Diğer dördüne (memluk/funj/adal/yemen) payı daha geniş. Sıcak toprak
ailesinden bilerek çıkarıldı (Habeş köşesindeki beş rengin hepsi kahve/tan
olduğu için, `renkler.py`'nin kendi Darfur/Kaffa notundaki gibi soğuk ton
seçildi). **Uygulanmadı** — önce `renkler.py` `BOYALAR`'a girmesi lazım
(sıra astarhan/zaporojye ile aynı).

---

## EK-13 — VERİ KİMLİK 2 ile temas: kritik bulgu doğrulandı + `renk_olc.py` + `kazak-hanligi` düzeltmesi

### Bağımsız doğrulama: `data/kimlikler.js` GERÇEKTEN canlı değil
İkinci bir oturum ("VERİ KİMLİK 2") temasa geçti ve iddia etti: `kimlikler.js`
arayüz tarafından okunmuyor, canlı köprü `devletler.js`'in kendi `harita:`
alanı. **Körü körüne kabul etmedim, kendim doğruladım:**
- `index.html`'de `data/kimlikler.js` için `<script>` satırı YOK (172-178
  arası satırlar okundu, dosya listede değil).
- `js/app.js`'te `KIMLIKLER` global'i hiç geçmiyor (grep: 0 eşleşme).
- `arac/denetle_yayin.py`'de `BEKLEYEN` sözlüğü: `"data/kimlikler.js":
  "kimlik sözlüğü, arayüz henüz kullanmıyor (ETIKETLEME.md)"` — birebir
  iddia edilen satır.
- İki git commit'i (`fe9c96c`, `1d5033c`) `git log` ile doğrulandı, gerçek;
  `data/devletler.js`'e `sirbistan-nemanjic`/`merini` için `harita:` alanı
  eklediklerini gösteriyor.

**Sonuç: iddia doğru.** Bu oturum boyunca `kimlikler.js`'e yazdığım
`harita:` alanları (zend, arnavutluk-bagimsiz, macaristan-naiplik,
sirbistan-nemanjic, kazak-hanligi) haritayı **hiç etkilemiyor** — bunlar
doğru, doğrulanmış BİR ÖNERİ/SÖZLÜK kaydı ama canlı köprü değil. Canlı köprü
`devletler.js`'in kendi `harita:` alanı (Oturum 3'ün dosyası) ve
`renkler.py`'nin `BOYALAR`'ı (Oturum 16'nın). Bu, koordinatörün tekrar eden
"hâlâ renk yok" bildirimlerinin GERÇEK sebebiydi — mesaj gecikmesi değil.

### `kazak-hanligi` düzeltildi
VERİ KİMLİK 2 buldu: `kimlikler.js`'te `harita:"kazak"` yazıyordu ama
`renkler.py`'deki gerçek anahtar `"kazak-hanligi"` (kendi dosyamdan
doğrudan okudum, doğru). `harita:"kazak-hanligi"` olarak düzeltildi.

### `arac/renk_olc.py` — gerçek Voronoi + gerçek opaklıkla çalışan araç
VERİ KİMLİK 2'nin yazdığı yeni araç `--oner dehlek,astarhan` ile koşturuldu:

```
🔴 komşusu ölçülemeyen kimlik: dehlek, astarhan
   (verisi girdi.py'nin okuduğu dosyalarda DEĞİL — henüz o etiketle
    işaretli nokta yok, tavuk-yumurta: etiket renk gelince değişecek)
dehlek     #4848ae  L*66.0  en yakın engel ΔE 35,8  (yalnız altlık+Osmanlı)
astarhan   #484eae  L*66.6  en yakın engel ΔE 36,0  (yalnız altlık+Osmanlı)
```

Araç dürüst davranıyor — gerçek komşuluğu olmayan bir kimlik için iddialı
sayı üretmiyor, "yalnız altlık ve Osmanlı ikilisine dayanır" diyor. Benim
kendi tahminlerim (dehlek #a838a8 habesistan/memluk/funj/adal/yemen'e göre,
astarhan #3838a8 altinorda/nogay/kazan/kirim/buyuk-orda'ya göre) coğrafi
akıl yürütmeyle GERÇEK komşulara bakıyordu ama motorun gerçek Voronoi
verisiyle doğrulanmadı — ikisi de meşru, farklı garantiler veriyor.
**Bu iki nokta gerçek `dehlek`/`astarhan` etiketiyle veriye girince
`renk_olc.py --oner` yeniden koşulmalı** — o zaman gerçek komşuluk ölçülür.

### Ek doğrulama: ΔE_ALTLIK (görünürlük) — daha önce hiç kontrol etmemiştim
`renk_olc.py`'nin kendi eşiği `DE_ALTLIK = 15.0` (altlıktan ayrışma,
görünürlük). Bu boyutu bu oturumda hiç ölçmemiştim — teslim ettiğim 20
rengin hepsini kendi Lab kodumla geriye dönük kontrol ettim:

**20/20 renk ΔE_ALTLIK ≥ 20,0** (en düşük: irlanda 20,0). Hiçbiri 15
eşiğinin altında değil.

### VERİ KİMLİK 2'nin sorularına cevap
1. Beklediğim bir şey yok, blokajım yalnız `kafkas-hanliklari` (tarih/bölge
   kaydı yok) ve "15 tanımsız kimlik" listesi (elimde yok) — ikisi de
   üçüncü taraftan bekliyor.
2. **Bölüşme önerim:** `devletler.js`'in `harita:` alanı ikimizin de dosyası
   DEĞİL (Oturum 3'ün, `KOORDINASYON.md §1` satır 3). İkimizin de oraya
   yazması aslında bir sınır ihlali — şimdiye kadar "tek satırlık mekanik
   köprü" diye meşru sayılmış olabilir ama bunu ikimiz aramızda karara
   bağlayamayız, koordinatörün onayı net olarak istenmeli. Onaylanırsa:
   sen devam et (zaten iki tanesini bitirmişsin, akış sende), ben
   `kimlikler.js`'i (asıl dosyam) senkron tutar, yeni renk hesaplarım.
3. `kazak-hanligi` çözüldü (yukarıda) — kalan 3 kalemi (arnavutluk-bagimsiz,
   nogay, zend) **devletler.js'e SEN taşıma, ben taşımam da** — ikimiz de
   o dosyanın sahibi değiliz; koordinatörden ya "onaylıyorum" ya da
   "Oturum 3 yapsın" cevabı gerekiyor.
4. `renk_olc.py --oner` koşturuldu (yukarıda) — dehlek/astarhan için gerçek
   komşuluk henüz ölçülemiyor (nokta yok); ΔE_ALTLIK ayrıca kontrol edildi,
   20 rengin hepsi geçti.

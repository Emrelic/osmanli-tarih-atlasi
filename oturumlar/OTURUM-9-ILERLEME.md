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

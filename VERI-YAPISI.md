# Veri Yapısı — alan sözlüğü ve şemalar

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
`YAPILACAKLAR.md` (sıradaki işler) · `MIMARI.md` (motor) · **bu belge** (şemalar).

Bütün veri dosyaları `window.X = [ … ];` biçimindedir ve `index.html`'den `<script>`
ile yüklenir. **Yeni bir veri dosyası eklersen `index.html`'e satır eklemen ve
`js/app.js`'te birleştirme noktasına katman şart** — yoksa dosya yüklenir ama
kullanılmaz.

---

## `__BOSLUK__` — "kimsenin değil" DEYİMİ, ve niçin bir kimlik gibi yazılır

> `s:[{f:"1281-01-01", t:"1417-01-01", d:"__BOSLUK__"}]`

**Anlamı:** *hiçbir künyenin kapsamadığı dilim.* Bu bir devlet kimliği
değil, bir **BEYAN**dır: "burası bu tarihlerde kimsenin değildi, ve biz
onu en yakın komşuya İTMİYORUZ."

### Niçin var — `§3.5.1`e verilmiş kasıtlı cevap
`CLAUDE.md §3.5.1` şunu ölçtü: bir hayaleti kapatırken toprak boşta
kalırsa `Değişmez 1` onu **en yakın kimliğe iter** ve *"hayalet yok
olmadı, taraf değiştirdi."* `__BOSLUK__` o itmeyi reddetmenin yoludur.
📌 Doğuran vaka: Berat, 1281-1417. Önceden `arnavutluk` yazıyordu ve
ekranda *"Arnavutluk (Kastriota Direnişi)"* görünüyordu — İskender
Bey'den **26 yıl önce.**

### 🔴 NASIL ÇALIŞIYOR — ve bu, tasarım DEĞİL YAN ETKİ
```
motorda `__BOSLUK__` dalı        arac/*.py → 0 eşleşme
arayüzde                         js/*.js   → 0 eşleşme
```
Boyanmaması özel bir koddan gelmiyor; **"bilinmeyen kimlik → `BOYALAR`da
yok → çizilmez"** yolundan geliyor.
⚠️ **Yani biri `renkler.py`ye `"__BOSLUK__"` rengi yazarsa niyet SESSİZCE
bozulur** ve boşluk bir renge boyanır. Hiçbir denetim ötmez.
⇒ Bu yüzden `durum_tablosu.py` onu **ayrı bir kovada SAYIYOR**
(`🟡 Kasıtlı boşluk kimliği`) — eleyip görünmez yapmıyor.

### Kullanım kuralı
```
🟢 KULLAN   kaynak "burası kimsenindi" demiyor VE komşuya itmek yanlış olur
🔴 KULLANMA "araştırmadım" yerine — o `bos:"veri-yok"`tur
🔴 KULLANMA yalnız bir noktanın tamamı sahipsizse — o `bos:`/`neden:`tir
```
`__BOSLUK__` bir **dönem** içindir (nokta var, o aralıkta sahibi yok);
`bos:` bir **nokta** içindir. İkisi ayrı mekanizma, karıştırılmaz.

### ⚠️ Ve DESEN SÜZGECİ KULLANILMAZ — ölçülmüş gerekçe
Denetim `__.*__` deseniyle süzmez, **tanınan kümeyle** süzer
(`KASITLI_BOSLUK = {"__BOSLUK__"}`). Sebebi: desen süzgeci `__BOSLK__`
gibi bir **yazım hatasını** *"kasıtlı"* diye etiketler ve görünmez kılar.
📌 `§11`: *"ölçemediğini eleyen bir süzgeç, onu TEMİZ sayar."*
⇒ Deyime BENZEYEN ama tanınmayan her şey kırmızı kalır.

---

## 🔴 TAKVİM — bütün tarih alanlarını bağlar, ve BUGÜNE KADAR YAZILI DEĞİLDİ

> **Bu atlasın tarihleri JÜLYEN'dir. ÇEVİRME YAPILMAZ.**

Bu kural 2 Eylül 2026'da **ölçülerek** kondu. Ondan önce hiçbir belgede
yoktu — ve yokluğu iki oturumu *"veri ile TDV çelişiyor"* sanmaya
götürdü. Çelişki yoktu; **ölçüt yazılı değildi.**

### Nasıl ölçüldü — tek cümlelik kanıt
TDV `tiflis` maddesi olayı *"**29 Ağustos Cuma** günü"* diye veriyor.
```
29 Ağustos 1578  Jülyen'de   CUMA    ✓ TDV'nin dediği gün
29 Ağustos 1578  Gregoryen'de SALI    ✗
```
⇒ **TDV bu dönem için JÜLYEN veriyor.** Kaynağın kendi haftagünü, hangi
takvimi kullandığını ele veriyor — tarihin kendisi vermiyor.

### Ve atlasın kendi geleneği de Jülyen
```
İstanbul'un fethi   29 Mayıs 1453   ← Jülyen. Veride böyle yazılı.
```
İki taraf uyuşuyor, yani **dönüştürme gereksiz ve ZARARLI**: bir kaydı
Gregoryen'e çevirmek onu komşularından 10-13 gün ayırır ve `Değişmez 2`
senkronunu bozar.

### 🔴 KURAL
```
TDV'den gelen tarih          OLDUĞU GİBİ yazılır
Batı kaynağından gelen tarih kaynağın hangi takvimde olduğu ÖLÇÜLÜR
                             (haftagünü · kaynağın kendi beyanı)
Hicrî tarih                  karşılığı verilmişse o alınır, kendin ÇEVİRME
çevirme                      YAPILMAZ — ve yapıldıysa `kaynak:`ta YAZILIR
```

### ⚠️ VE BİR VARYANT ÇATIŞMASI ÇEVİRİYLE ÇÖZÜLMEZ, NOTLA ÇÖZÜLÜR
Ölçülmüş vaka — Özi: veri `1737-07-13`, TDV `11 Temmuz`. İki gün fark
takvim varyantından geliyor (Rus eski takvimi ↔ Hicrî kayıt). **Doğrusu
tarihi değiştirmek değil**, `kaynak:` alanına varyantı **not düşmek** —
çünkü hangisinin doğru olduğu değil, **hangi kaydın hangi takvimde
tutulduğu** bilinmiyor.

📌 Ve bunun tersi de ölçüldü, karıştırılmasın: **Tiflis'te sorun takvim
DEĞİLDİ.** `1578-08-09` Tiflis'in fethi değil **Çıldır Savaşı'nın günü**;
o gün beş yerleşime ve dokuz dönem ucuna toptan yazılmış. ⇒ *"İki tarih
çelişiyor"* gördüğünde **önce takvimi, sonra OLAYIN KENDİSİNİ** ölç —
ikisi farklı kusur sınıfıdır ve çareleri terstir.

---

## `data/yerlesimler.js` — coğrafi çekirdek 🔑

Haritanın **tek elle yazılan kaynağı**. Bütün geometri buradan üretilir.

```js
{ ad:"Preveze", tur:"liman", lat:38.958, lon:20.751, g:1, k:4, m:"Yanya",
  s:[{f:"1281-01-01", t:"1449-01-01", d:"bizans"}],
  d:[{f:"1449-01-01", t:"1684-09-29"},
     {f:"1798-10-23", t:"1912-10-21", y:"savas"}],
  v:[{f:"1832-06-15", t:"1833-06-30", k:"Mısır ordusu (işgal)"}],
  kur:"1716-01-01" },
```

| Alan | Anlamı |
|---|---|
| `ad` | Benzersiz ad. Parantezli modern karşılık yazılabilir: `"Ünye"`, `"Girne (Kyrenia)"` |
| `tur` | `sehir` \| `kale` \| `liman` \| `bolge` (dolgu noktası) |
| `lat` / `lon` | Ondalık derece |
| `g` | Görünürlük kademesi 0-2 — etiket hangi yakınlaştırmada çıkar |
| `k` | İdari kademe 0-4. `0` = kademesiz (yabancı şehir, dolgu), `1-2` = eyalet/sancak merkezi, `3-4` = alt kademe |
| `m` | Bağlı olduğu k1/k2 merkezinin **adı** — bir yerleşim adına birebir eşleşmeli |
| `s` | Yabancı sahip dönemleri. `d:` alanı devlet kimliği |
| `d` | Doğrudan Osmanlı dönemleri |
| `v` | Tâbi / dolaylı idare / işgal dönemleri. `k:` alanı serbest metin etiket |
| `kur` | Kuruluş tarihi. Öncesinde yerleşim yoktur |
| `y` | Kazanım biçimi: `kusatma` \| `savas` \| `antlasma` \| `vassal` \| `ilhak` \| `miras` |

🔴 **`y:` sözlüğü 31 Temmuz'da ölçülerek düzeltildi — belge geride kalmıştı.**
Eski satır dört değer sayıyordu (`vassal` ve `ilhak` yoktu); veri ve `js/app.js`
altısını da kullanıyordu. Sayılar: kusatma 85 · savas 77 · antlasma 67 ·
**vassal 13** · **ilhak 11** · miras 2.
- **`vassal` = tâbiyet/itaat yoluyla edinim.** `v:` KADEMESİYLE karıştırılmasın:
  `d:` içinde `y:"vassal"` çelişki DEĞİLDİR — yer doğrudan idareye geçmiştir ama
  edinimi savaşla değil itaatle olmuştur (Basra'da şehrin anahtarlarının teslimi).
  Adı yanıltıcı olduğu için burada tanımlandı; bir kez "geçersiz" sanılıp
  silinmesine ramak kaldı.
- **Bilinmiyorsa alanı hiç yazma.** Eksik alan yanlış alandan iyidir.
⚠️ Bu alanın üç otoritesi var — bu belge, veri ve `js/app.js:769` `YONTEM_SIMGE`.
Üçünü birden güncellemeden değer ekleme/çıkarma: `app.js`'te `|| ""` olduğu için
tanımsız yöntem **hata vermez, sessizce simgesiz çizer.**

### Kurallar
- `s` içindeki her devlet kimliği **`uret_petek.py` içindeki `BOYALAR` sözlüğünde
  tanımlı olmalı**; yoksa üretim uyarı verir ve bölge boyanmaz.
- `d` ve `v` çakışırsa **tâbi kazanır** (açık ton).
- **Dönemler çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı.** Sıfır uzunluk
  gerçek bir hata olarak yaşandı: Tebriz `{f:"1514-09-06",t:"1514-09-06"}` yüzünden
  Çaldıran'dan sonra hiç Osmanlı görünmedi.
- Bir yerleşim, var olduğu her tarihte `s`/`d`/`v`'den **birine** sahip olmalı
  (Değişmez 1). Kasten boş bırakılanlar dolgu noktalarıdır.
- **3 km içinde ikinci bir nokta açma.** Yaşanmış: Varat/Varad 1 km arayla iki kayıt;
  Afyon ve Karahisâr-ı Sâhib 100 m arayla **çelişen** zaman çizgileriyle duruyordu.

### 🔜 Planlanan alanlar (henüz yok)
```js
bit:"1258-02-13",              // yok oluş / terk; sonrasında peteği kalkar
bos:"devletsiz" | "veri-yok",  // sahipsizliğin cinsi (MIMARI.md §6)
kd:[{f:"1281-01-01", t:"1427-06-01", k:2, m:null},     // zamanlı idari kademe
    {f:"1427-06-01", t:"1920-01-01", k:4, m:"Trabzon"},
    {f:"1920-01-01", t:"1923-10-29", k:4, m:"Ordu"}]   // k/m'nin yerini alacak
```
Gerekçeler: `MIMARI.md` §3.1 ve §3.4.

### 🔜 `kesinlik` — tarih hassasiyeti (zaman ekseni genişlerken şart)
Bugün gün bilinmediğinde `YYYY-01-01` yazılıyor. Bu doğru bir yazım ama **kullanıcı
1 Ocak gördüğünde gerçekten 1 Ocak sanıyor.** Zaman ekseni geriye açıldıkça çoğu
tarih yıl, on yıl, hatta yüzyıl hassasiyetinde olacak.

```js
{ f:"-0550-01-01", kesinlik:"onyil" }   // arayüzde: "~MÖ 550"
{ f:"1427-06-01",  kesinlik:"yil" }     // arayüzde: "1427 civarı"
{ f:"1453-05-29",  kesinlik:"gun" }     // arayüzde: "29 Mayıs 1453"
```
Değerler: `gun` · `ay` · `yil` · `onyil` · `yuzyil` · `belirsiz`.
Alan yoksa `gun` varsayılır (mevcut verinin tamamı böyle sayılır).
Uydurma gün yazmama kuralına, **uydurma kesinlik yazmama** kuralı eklenir.

---

## `data/olaylar*.js` — kronoloji

`olaylar.js` ana kronoloji; `olaylar_ek.js` … `olaylar_ek6.js` derinleştirme
partileri. Toplam 799 madde. Hepsi `js/app.js`'te tek listede birleştirilir.

```js
{ t:"1427-06-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye",
  gun:"1427", yer:"Ordu (Bayramlı), Ünye, Canik", kisiler:"II. Murad",
  d:"2-4 cümlelik anlatım.", kaynak:"ordu--sehir" },
```

| Alan | Anlamı |
|---|---|
| `t` | Tarih. **Gün yaz.** Ay hassasiyetli (`"1526-08"`) yazarsan ayın 1'ine genişler ve gün hassasiyetli yerleşim değişimlerinden *önce* sıralanır — senkron bozulur |
| `k` | Kategori — **25 değer**, tam liste aşağıda. `css/style.css`'te hem `.olay.k-*` hem `.ob-kat.k-*` sınıfı olmalı |
| `etiket` | `toprak-kazanc` \| `toprak-kaybi` \| `savas` \| `antlasma` \| `diplomasi` \| `siyaset` \| `ayaklanma` \| `kultur-sanat` |
| `b` | Başlık — tek satır |
| `gun` | İnsan okunur tarih: `"29 Mayıs 1453"`, `"1427"`, `"680 (1281-82)"` |
| `yer`, `kisiler` | Serbest metin, virgülle |
| `d` | Detay paragrafı, 2-4 cümle |
| `kaynak` | TDV slug'ı — `CLAUDE.md` §4'e göre `<title>` ile **doğrulanmış** olmalı |

### `k:` — tam sözlük (31 Temmuz ölçümü, 985 madde)

```
fetih 229 · siyaset 157 · savas 151 · kayip 143 · antlasma 75 · diger 45
ayaklanma 32 · kultur 23 · bilim 20 · diplomasi 13 · taht 12 · isyan 12
ekonomi 10 · kusatma 9 · idari 9 · sefer 9 · darbe 9 · kesif 7 · reform 6
vassal 4 · kanun 3 · kurulus 2 · evlilik 2 · sadrazam 2 · ittifak 1
```

🔴 **Bu satır eskiden DOKUZ değer sayıyordu, veride 25 vardı.** Yani belge
"ihlal" gösteriyordu, gerçekte **belge geriydi.** Buna dayanarak "sözlük dışı
`k:`" denetimi yazılsaydı **110 yanlış pozitif** verirdi.

`k:` iki yerde birden kullanılır (`js/app.js:1235` ve `:1603`): hem CSS sınıf
adı hem kullanıcıya gösterilen kategori metni. Tanımsız değer **hata vermez**,
nötr renge düşer — 237 madde (%24) liste renginden, 261 madde (%26,5) rozet
renginden bu yolla mahrumdu. Düzeltildi.

⚠️ İki bilinçli karar:
- **`diger` (45) BİLEREK renksiz** — gerçek kategori değil, karışık torba.
  Nötr kenar onun için doğru gösterim.
- **`ayaklanma` (32) ile `isyan` (12) aynı kavramın iki yazımı.** Şimdilik aynı
  rengi paylaşıyorlar; veri tarafındaki birleştirme `YAPILACAKLAR.md`'de.
  📌 CSS eskiden yalnız `isyan`ı tanıyordu — yani **arayüz azınlıkta olan yazımı
  biliyordu.** Veriyle arayüzün ayrı zamanlarda ayrı sözlüklerle büyüdüğünün
  en keskin delili buydu.

**Değişmez 2:** haritadaki her kırılmanın ±30 gün içinde bir maddesi olmalı.

---

## `data/devletler.js` — devletler dizini

```js
{ id:"bizans", ad:"Bizans (Doğu Roma) İmparatorluğu", tur:"imparatorluk",
  bolge:"anadolu-balkan", f:"330-05-11", t:"1461-08-15",
  baskent:"Konstantinopolis", ozet:"1-2 cümlelik tanım.",
  kronoloji:[
    { t:"1204-04-13", tur:"bolunme", b:"IV. Haçlı Seferi İstanbul'u yağmaladı" },
    { t:"1453-05-29", tur:"son",     b:"İstanbul'un fethi; imparatorluk sona erdi" }
  ] },
```

| Alan | Anlamı |
|---|---|
| `id` | Benzersiz anahtar, küçük harf + tire. **Değiştirilmez** — bağlantıları kırar |
| `tur` | `imparatorluk` \| `krallik` \| `prenslik` \| `dukalik` \| `cumhuriyet` \| `hanlik` \| `beylik` \| `devlet` \| `sultanlik` \| `ocaklik` \| `hanedanlik` \| `isyan` \| `gecici-isgal` |
| `bolge` | Kapalı sözlük — `anadolu`, `balkanlar`, `orta-avrupa`, `bati-avrupa`, `kuzey-avrupa`, `dogu-avrupa`, `italya`, `iberya`, `kafkasya`, `iran`, `mezopotamya`, `suriye-filistin`, `arabistan`, `kuzey-afrika`, `misir-sudan`, `dogu-afrika`, `bati-afrika`, `orta-afrika`, `guney-afrika`, `orta-asya`, `guney-asya`, `dogu-asya`, `guneydogu-asya`, `sibirya-bozkir`, `kuzey-amerika`, `orta-amerika`, `guney-amerika`, `okyanusya` |
| `f` / `t` | Varlık aralığı. Gün bilinmiyorsa `YYYY-01-01`. 1923 sonrası süren devletlerde `t:"1923-10-29"` ve `ozet`te not |
| `kronoloji[].tur` | `kurulus` \| `hukumdar` \| `toprak-kazanc` \| `toprak-kayip` \| `savas` \| `antlasma` \| `bolunme` \| `birlesme` \| `ittifak` \| `isyan` \| `isgal` \| `son` |
| `kronoloji[].b` | **Kısa başlık, tek satır.** Burası bir dizindir, `olaylar*.js` değil |

### 🔜 Planlanan alan
```js
harita:"avusturya",   // uret_petek.py BOYALAR karşılığı; yoksa alan hiç yazılmaz
```

---

## `arac/uret_petek.py` içindeki `BOYALAR` — devlet renkleri

```python
"venedik": ("Venedik", "#4a8a8f"),
#  id       görünen ad   hex renk
```

- `id`, `yerlesimler.js`'in `s:[{d:"..."}]` alanında kullanılan kimliktir
- Renk seçerken **komşularının rengine bakılır** — aynı sahnede yan yana duracak iki
  devlet birbirine yakın tonda olmamalı. Yorumlarda gerekçeler yazılıdır
- Kırmızı tonları **Osmanlı ailesine ayrılmıştır** (Fetret şehzade payları dahil);
  yabancı devlete kırmızı verilmez

---

## Diğer dosyalar

| Dosya | Dizi | İçerik |
|---|---|---|
| `data/padisahlar.js` | `PADISAHLAR` | 41 kayıt — 36 padişah + Fetret + ara dönemler; portre yolu |
| `data/kisiler.js` | `KISILER` | 247 kişi — bkz. `DURUM.md §e` (240'ı hükümdar/komutan, 5. boyut eksik) |
| `data/savaslar.js` | `SAVASLAR` (169), `ANTLASMALAR` (33), `SERILER` (16), `SEFERLER` (50) | Sefer güzergâhları menzil yollarına oturtulmuştur |
| `data/sehirler.js` | `SEHIRLER` | 62 şehir/kale kartı (yerleşim verisi 917 — index gerçeğin %7'si) |
| `data/devirler.js` | `DEVIRLER` | 🤖 üretilmiş — 11 antlaşmanın taralı devir alanı (`arac/uret_devirler.py`) |
| `data/kimlikler.js` | `KIMLIKLER` | Kimlik sözlüğü (`ETIKETLEME.md §5`) — arayüz henüz kullanmıyor |

### `SEFERLER` — hareket tipolojisi 🆕

Kullanıcının genel kuralı: *"sefer, geri çekilme, tahliye, kuşatma, bozgun,
muharebe… farklı emojiler üretebiliriz … aynı tarzda olmasın farklılıkları
olsun. kazançlı sefer ile bozgun sonuçlu seferin ayrı gösterimleri olsun."*

**İki AYRI eksen**, çünkü iki ayrı soru:

| Alan | Ne söyler | Görsel karşılığı |
|---|---|---|
| `tur` | hareketin **cinsi** | ok başı glifi + çizgi deseni + kalınlık |
| `sonuc` | hareketin **sonucu** | rozet: ▲ zafer (yeşil) · ▼ yenilgi (kırmızı) |

Böylece *kazançlı sefer* ile *bozgunla biten sefer* **aynı glifi** taşır ama
farklı okunur; *geri çekilme* ile *taarruz* ise **glif düzeyinde** ayrılır.

| `tur` | glif | çizgi | ne zaman |
|---|---|---|---|
| `sefer` *(varsayılan)* | ➤ | `[1.5,1.5]` | taarruz, ilerleyiş, klasik sefer |
| `cekilme` | ⇤ | `[5,4]` | geri çekilme, ricat |
| `tahliye` | ⇥ | `[5,4]` | kale/şehir boşaltma, garnizon çekilmesi |
| `akin` | ⇢ | `[1,2]` | akın, baskın — kalıcı işgal değil |
| `kusatma` | ⊗ | `[0.5,2]` | kuşatma (yön değil YER bildirir) |
| `deniz` | ⚓ | `[4,3]` | deniz harekâtı, donanma hareketi |
| `teslim` | ⇲ | `[2,3]` | idarî devir, donanma/kale teslimi |
| `seyahat` | ❖ | `[1,3]` | siyasî seyahat, ziyaret |
| `isyan` | ✹ | `[0.5,1.5]` | iç isyan — yön yok, yerinde |

```js
{ ad:"Belgrad garnizonunun çekilmesi", tur:"tahliye", sonuc:"yenilgi",
  taraf:"osmanli", f:"1867-04-06", t:"1867-04-06", yol:[[20.45,44.82],[22.5,43.3]] }
```

⚠️ **Geriye dönük uyumlu:** `tur`/`sonuc` yoksa eski davranış (dolu ok, kesikli
çizgi, rozetsiz) aynen sürer — mevcut 50 kaydın hiçbiri bozulmaz.

⚠️ **`tur` başına AYRI KATMAN gerekiyor** ve sebebi teknik: MapLibre'de
`line-dasharray` veriyle sürülemeyen bir boya özelliği, yani tek katmanda
özellik başına farklı kesik deseni verilemez. `js/app.js` dokuz katmanı
`HAREKET` tablosundan döngüyle kuruyor; yeni tür eklemek **tek satır**.

## Üretilmiş dosyalar — 🤖 ELLE DÜZENLEME

| Dosya | Dizi | İçerik |
|---|---|---|
| `data/donemler.js` | `DONEMLER` | 424 dönem; delta kodlu, Osmanlı doğrudan + tâbi gövdeleri |
| `data/devletler_harita.js` | — | 97 devletin dönem gövdeleri |
| `data/bolgeler.js` | `BOLGELER` | 61 idari bölge sınırı |

Bunlar `py arac/uret_petek.py` ile üretilir. Elle yapılan değişiklik ilk üretimde
kaybolur.

---

## Kaynak seti

- **Donald Edgar Pitcher, _An Historical Geography of the Ottoman Empire_** — sınır
  çizimlerinin ana akademik referansı
- **İsmail Hâmi Danişmend, _İzahlı Osmanlı Tarihi Kronolojisi_** — olay akışının omurgası
- **TDV İslâm Ansiklopedisi** — olay detay metinleri ve İslâm dünyası için birincil kaynak
- Halil İnalcık külliyatı, Cambridge History of Turkey, Colin Imber — çapraz doğrulama
- **Elenenler:** blog, forum, ideolojik popüler tarih siteleri. Vikipedi yalnızca
  kaynağa ulaşma aracıdır, tek dayanak değildir.

## 🔴 `d:` ile `v:` ÇAKIŞABİLİR — ve çakışmada **`v:` KAZANIR**

```python
uret_petek.py:2681
    tabi     = v: dönemini kapsayanlar
    dogrudan = d: dönemini kapsayanlar  −  tabi      ← ÇIKARMA
```
Yani `d:` uzun Osmanlı hükümranlığını, `v:` onun **içine yuvalanmış** vasal
aralığı tutabilir. Bu bir kusur **değil**, kasıtlı bir konvansiyondur
(Şam · Trablusşam · Adana · Tarsus · Girit hepsi böyle).

⚠️ **VE İKİ YAZIM DA GEÇERLİ — aynı adada ikisi birden var:**
```
A biçimi   d: KESİLİYOR, araya v: giriyor      Hanya · Sfakia · Sitia
B biçimi   d: SÜREKLİ, v: içine YUVALANIYOR    Kandiye · Resmo
```
İkisi de motorda **aynı** sonucu verir (`− tabi`). Ama:

🔴 **`d:`yi `v:`den ÖNCE okuyan her alet B biçimini YANLIŞ ölçer.**
Ölçülmüş vaka (10 Ağustos 2026): bir oturum Girit'i ölçtü, kendi `sahip()`
işlevi `d:`yi önce okuduğu için Kandiye ve Resmo'yu *"OSMANLI"* saydı ve
**"ada ikiye bölünmüş"** diye raporladı. Koordinatör düzeltme kararı verdi.
Oturum kendi ölçümünü **üçüncü kez** koşturup çürüttü ve **DUR** dedi.
⇒ Düzeltme uygulansaydı **bozuk olmayan beş kayıt bozulacaktı** — ve
`denetle.py` temiz kalacağı için bir daha da anlaşılmayacaktı.
📌 `§11`in *"pencere dışı noktayı düzeltmek ihlali kapatır, GERÇEĞİ SİLER"*
vakasının aynısı.

⚠️ Ve `§8`in *"dönemler çakışmamalı"* kuralı **bu çifti kapsamaz** —
o kural **kategori içi** çakışmayı yasaklar (`d:` ile `d:`, `s:` ile `s:`).
`denetle.py` de böyle ölçüyor (*"0 kategori-içi çakışma"*) ve `d×v`
örtüşmesini ayrı bir bilgi satırında sayıyor.

🟢 **Bir alet yazarken kural:** sahiplik sorusu **her zaman** `v:` → `d:` →
`s:` sırasıyla sorulur. Ters sıra makul bir sayı üretir ve **sessizce
yanlıştır** — bu sınıfın en pahalı yanı budur.


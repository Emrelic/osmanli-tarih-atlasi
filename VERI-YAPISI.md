# Veri Yapısı — alan sözlüğü ve şemalar

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
`YAPILACAKLAR.md` (sıradaki işler) · `MIMARI.md` (motor) · **bu belge** (şemalar).

Bütün veri dosyaları `window.X = [ … ];` biçimindedir ve `index.html`'den `<script>`
ile yüklenir. **Yeni bir veri dosyası eklersen `index.html`'e satır eklemen ve
`js/app.js`'te birleştirme noktasına katman şart** — yoksa dosya yüklenir ama
kullanılmaz.

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
| `y` | Kazanım biçimi: `savas` \| `kusatma` \| `antlasma` \| `miras` |

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
| `k` | Kategori: `fetih` \| `kayip` \| `savas` \| `antlasma` \| `siyaset` \| `ayaklanma` \| `bilim` \| `kultur` \| `diger` |
| `etiket` | `toprak-kazanc` \| `toprak-kaybi` \| `savas` \| `antlasma` \| `diplomasi` \| `siyaset` \| `ayaklanma` \| `kultur-sanat` |
| `b` | Başlık — tek satır |
| `gun` | İnsan okunur tarih: `"29 Mayıs 1453"`, `"1427"`, `"680 (1281-82)"` |
| `yer`, `kisiler` | Serbest metin, virgülle |
| `d` | Detay paragrafı, 2-4 cümle |
| `kaynak` | TDV slug'ı — `CLAUDE.md` §4'e göre `<title>` ile **doğrulanmış** olmalı |

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

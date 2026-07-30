# Oturum 11 — Balkan ekseni

Yazma yetkim: `data/olaylar_ek10.js` · bu dosya. Başka hiçbir dosyaya yazmadım.
`yerlesimler.js`, `js/app.js`, `index.html`, `savaslar.js` düzeltmeleri **liste**
hâlinde aşağıda; uygulaması merkez oturuma ait (`KOORDINASYON.md §1`).

**Durum:**
- **A bloğu** — hatalar 13 md.2 · md.14 · md.15 → **bitti** (§1, §2, §3).
- **hatalar 14** — md.2 Kili/Akkirman boşluğu · md.3 İnebahtı → **bitti** (§5, §6).
- **B bloğu** — hatalar 11, 1859-1913 → başlamadı (§8).

**Üretim durumu.** A bloğunu yazarken koşu sürüyordu ve tarayıcıda ölçüm
yapamamıştım. **Koşu 23:16:51'de bitti** (`donemler.js` damgası; motor onu koşunun
sonunda yazar — `CLAUDE.md §10`). hatalar 14'ün iki maddesi bu yüzden **üretilmiş
geometri üzerinden, doğrudan ölçüldü** — tarayıcı gerekmedi, `donemler.js` ve
`devletler_harita.js` shapely ile okundu. §5'teki bütün sayılar 23:16 geometrisine
aittir.

---

## 1. md.2 — "Varna alınıyor Varna etiketi yok haritada"

> Kullanıcı, hatalar 13: *"Genel kural olarak bir yerin fethinden bahsediliyor ise
> kronolojide haritada gösterimde o yerin gösterilmesi lazım o şehirlerin
> gösterilmesi lazım ve konu bitince o etiketin ortadan kalkması lazım. Varna
> alınıyor varna etiketi yok haritada."*

### Kayıt VAR — bu bir eksik veri hatası değil

`data/yerlesimler.js:275`:

```js
{ ad:"Varna", tur:"liman", lat:43.214, lon:27.915, g:0, k:3, m:"Silistre",
  s:[…], d:[{f:"1391-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}] }
```

Kronoloji maddesi de var, iki tane: `olaylar_ek5.js` 1391-01-01 *"Karadeniz
kıyısında Varna'nın alınışı"* ve `olaylar.js` 1444-11 *"Varna Zaferi"*.
`data/savaslar.js`'te muharebe kaydı da var (`lat:43.22, lon:27.90`), yani
1444'te haritada **"⚔ Varna" işareti çıkıyor** — çıkmayan, şehrin kendi adı.

### Sebep — kod yolu izlendi, satır satır

| Adım | Yer | Ne oluyor |
|---|---|---|
| 1 | `js/app.js:602` | `gecici: y.g === 0` → **Varna `g:0` olduğu için "geçici" işaret** |
| 2 | `js/app.js:638` | `YONTEM_SURE = 550` gün |
| 3 | `js/app.js:649` | `if (aktif && m.gecici && t >= aktif.fi + YONTEM_SURE) aktif = null;` |
| 4 | `js/app.js:605` | `d: Math.max(y.g, 1)` → görünürlük katmanı **1** |
| 5 | `js/app.js:673` + `508-513` | katman `1` yalnız **zoom ≥ 5.2**'de çizilir |

**1444 için 3. adım tek başına kesin:** Varna'nın son `d:` dönemi
**1413-07-05**'te başlıyor, penceresi **1415-01-06**'da kapanıyor. Varna
Zaferi'nin günü 1444-11-10, yani pencerenin kapanmasından **10.900 gün** sonra.
Hangi yakınlaştırmada olursa olsun şehrin adı o gün ekrana **gelemez**.

**1391 için 5. adım şüpheli ama ÖLÇÜLMEDİ.** 1391-01-01'de pencere açık
(`fi == t`), dolayısıyla ad görünmeliydi; görünmüyorsa sebep zoom eşiğidir.
`js/app.js:1002` her dönem değişiminde `fitBounds` ile bütün imparatorluğu
ekrana sığdırıyor, yani devlet büyüdükçe zoom düşüyor. Eşiğin 1391'de gerçekten
ısırıp ısırmadığı **canlı `harita.getZoom()` okumasıyla** doğrulanmalı; üretim
koştuğu için bunu ben yapamadım.

### Bu Varna'ya özel değil — 138 kayıt

`yerlesimler.js`'in tamamı tarandı (939 kayıt, `g` × `k` dağılımı):

```
        g0    g1    g2    g3
  k0   268    11     0     0
  k1     0     0     0     4
  k2    15    27    15     1
  k3   123    26     1     0
  k4   251    19     3     0
```

**Osmanlı dönemi (`d:`) olan ve idarî kademesi k1-k3 olduğu hâlde `g:0` taşıyan
kayıt: 138.** İçlerinde Varna'nın kendi eyalet merkezi **Silistre** de var;
ayrıca İşkodra, Temeşvar, Kamaniçe, Yaş, Maraş, Şehrizor, Trablusşam, Bahçesaray,
Erdel (Kaloşvar), Draç, Avlonya, Eğriboz, Hanya, Girit (Resmo), Akkirman, Bender,
Azak, Gence, Kerkük, Cidde, Gazze, Beyrut, Antakya…

### Öneri — iki parça, ikisi de merkezin dosyasında

**(a) Veri — `data/yerlesimler.js`, tek satır:**

| Kayıt | Mevcut | Önerilen | Gerekçe |
|---|---|---|---|
| Varna | `g:0` | **`g:2`** | Karadeniz'in batı kıyısındaki en büyük Osmanlı iskelesi, Silistre eyaletinin sancak merkezi (`k:3`) ve 1444 zaferinin sahnesi. `g:2` ⇒ `gecici` biter, ad kalıcı olur; katman 2 ⇒ zoom ≥ 4.0'da görünür. |

`g:3` ÖNERMİYORUM — o katman `js/app.js:678`'de `baskent` sınıfını da açıyor ve
bugün yalnız dört kayıtta (k1) var.

**(b) Toplu düzeltme YAPILMAMALI — ölçüldü, ters teper.** 138 kaydı topluca
`g≥1`'e çekmek bütün adları kalıcı yapar ve haritayı kilitler; bu tam olarak
kullanıcının hatalar 11 md.20'de şikâyet ettiği durumdur (*"sene 1800 olmuş hâlâ
Söğüt Domaniç Karacahisar filan gibi yerleşimlerin haritada görünmesine gerek
yok"*). `g:0` mekanizması kullanıcının kuralının **ikinci yarısını** ("konu bitince
etiket kalksın") zaten doğru uyguluyor.

Kalan risk yalnız birinci yarıda: *fetih anlatılırken* şehrin görünmemesi. Bu da
ancak 5. adım (zoom eşiği) 550 günlük pencerenin içinde ısırıyorsa olur. Öneri
şu — **ama önce (a)'daki ölçüm alınsın, körlemesine uygulanmasın:**

```js
// js/app.js ~673 — ediliş penceresi içindeyken zoom eşiği uygulanmaz:
// fetih anlatılırken şehir imparatorluk ölçeğinde de görünsün.
var pencerede = t < aktif.fi + YONTEM_SURE;
if (!pencerede && d < zoomEsigi()) { … }
```

Zoom eşiği pencerenin içinde ısırmıyorsa bu değişiklik gereksizdir; ölçüm
alınmadan uygulanmamalı.

---

## 2. md.14 — 1479'da İyon adaları

> *"1479 arnavutluk ve İşkodra ile birlikte iyonya adalarıda ele geçiriliyor
> galiba bunu madde olarak yazmalısın yada madde içinde adaların isimlerini
> belirtmelisin."*

Kullanıcı haklı, **ve altında bir tarih hatası var.**

### Bulgu: iki ayrı olay tek güne bindirilmiş

Veride dört ada da **1479-01-25**'te Osmanlı'ya geçiyor — İstanbul Antlaşması'nın
günü. Ama:

- **25 Ocak 1479 İstanbul Antlaşması** Venedik'le yapıldı, 16 yıllık savaşı
  bitirdi ve **İşkodra ile Arnavutluk kıyısını** konu ediyordu (`olaylar_ek.js`).
- **İyon adaları Venedik'in değildi.** TDV `ayamavra` maddesi: ada Tocco
  düklüğünün elindeydi. Son dük Leonardo Tocco 1477'de Napoli hanedanından
  Francesca Marzano ile evlenerek Fâtih'i gücendirdi; *"İki yıl sonra Avlonya
  beyi Gedik Ahmed Paşa idaresindeki Osmanlı donanması, güneydeki Kefalonya
  adasıyla birlikte burayı da ele geçirdi; Leonardo ve Francesca İtalya'ya kaçtı."*
- TDV `gedik-ahmed-pasa` maddesi aynı harekâtta **Kefalonya, Zanta (Zaklise) ve
  Ayamavra**'nın alındığını tek cümlede sayıyor.
- Harekâtın dönemlendirmesi standart literatürde **Ağustos-Kasım 1479**
  (Kefalonya harekâtı). TDV ay vermiyor — bu yüzden madde `t:"1479-08-01"`,
  `gun:"Ağustos 1479"` yazıldı, gün hassasiyeti iddia edilmedi.

**Madde yazıldı:** `data/olaylar_ek10.js` A-1, dört adanın da adı geçiyor.

### Düzeltme listesi — `data/yerlesimler.js`

⚠️ **`1479-01-25` her kayıtta İKİ KEZ geçiyor** (`s:` bitişi + `d:` başlangıcı).
`CLAUDE.md §11`'deki `replace(eski, yeni, 1)` tuzağı tam burada: yalnız ilkini
değiştirmek İbrail/Özi'de olduğu gibi **sahipsiz pencere** açar. Dört kayıtta
toplam **8 eşleşmenin hepsi** değişmeli, sonra Değişmez 1 koşturulmalı.

| Kayıt | Alan | Mevcut | Önerilen | Kaynak |
|---|---|---|---|---|
| Ayamavra (Lefkada) | `s:` bitiş + `d:` başlangıç | `1479-01-25` | **`1479-08-01`** | TDV `ayamavra`, `gedik-ahmed-pasa` |
| Kefalonya | `s:` bitiş + `d:` başlangıç | `1479-01-25` | **`1479-08-01`** | aynı |
| İthaki | `s:` bitiş + `d:` başlangıç | `1479-01-25` | **`1479-08-01`** | Kefalonya kontluğuna bağlı; TDV ayrıca adlandırmıyor |
| Zaklise (Zakynthos) | `s:` bitiş + `d:` başlangıç | `1479-01-25` | **`1479-08-01`** | TDV `gedik-ahmed-pasa` ("Zanta") |

**Değişmez 2 üzerindeki beklenen etki:** 1479-01-25 kırılması İşkodra, Limni ve
Sisam ile ayakta kalır, maddesi (`olaylar_ek.js`, İstanbul Antlaşması) yerinde.
Yeni 1479-08-01 kırılmasının maddesi A-1 ile **aynı gün**. Yani açık sayısı
değişmemeli — ama uygulamadan **sonra ölçülmeli**, tahmin edilmemeli
(`OGRENILENLER §10`).

### Aynı kayıtlarda bulunan üç ayrı hata (md.14'ün dışında, ölçüldü)

1. 🔴 **Ayamavra'nın 1479 öncesi sahibi yanlış.** Veride
   `s:[{f:"1281-01-01", t:"1479-01-25", d:"venedik"}]`. TDV `ayamavra`: ada 1479'a
   kadar **Tocco**'nun. Kardeş üç ada (Kefalonya, İthaki, Zaklise) aynı aile için
   `napoli` kimliğini kullanıyor — tutarlılık `napoli` diyor.
   ⚠️ 1362 öncesi sahibi doğrulamadım; kimlik değişmeden önce sorulmalı.
2. 🔴 **1502-1503 Venedik işgali veride hiç yok.** TDV `ayamavra`: Venedik şehri
   kısa süre işgal etti, savaşı bitiren antlaşma Osmanlı'ya geri verdi.
3. 🔴 **Eylül 1715 Osmanlı geri alışı veride hiç yok.** Veride Ayamavra
   1684-08-06'dan 1923'e kesintisiz `venedik`. TDV `ayamavra`: 1699 Karlofça ile
   Venedik'e bırakıldı, **Eylül 1715'te Osmanlılar geri aldı**, 1718 Pasarofça ile
   yine Venedik'e döndü. Yani **üç yıllık bir Osmanlı dönemi eksik.**

2 ve 3 yeni kırılma açacağı için önce kronoloji maddesi gerekir (`OGRENILENLER §8`
sırası: önce madde, sonra tarih). Maddeler bende — **istenirse yazarım**, A
bloğunun kapsamını aşmamak için şimdi yazmadım.

### Ek: yayına çıkmadan önce düzeltilecek bir metin

`olaylar_ek.js`, 1479-01-25 İstanbul Antlaşması maddesinin sonundaki üretilmiş
cümle: *"Aynı tarihte haritaya katılan diğer yerleşimler: Limni, Sisam, Ayamavra
(Lefkada)."* Tarih düzeltilirse **Ayamavra bu listeden çıkmalı**. (Limni ve Sisam
antlaşmayla geldiği için kalır.)

---

## 3. md.15 — Zaklise Venedik'e giderken Karadağ'da ne oluyor

> *"Zakintos venediğe bırakılır iken karadağda ele geçiriliyor galiba ama
> kronolojide zikredilmiyor gerekirse ayrı madde yapılmalı."*

Kullanıcı haklı ve gördüğü şey gerçek. `yerlesimler.js:804`:

```js
{ ad:"Cetinje", …, kur:"1482-01-01",
  s:[{f:"1697-01-01", t:"1923-10-29", d:"karadag"}],
  d:[{f:"1499-01-01", t:"1697-01-01"}],
  v:[{f:"1482-01-01", t:"1499-01-01", k:"Crnojeviç Zetası (Osmanlı tâbii)"}] }
```

**1 Ocak 1482'de haritada Karadağ'da yeni bir açık tonlu (tâbi) gövde beliriyor.**
O günün kronolojisindeki tek madde Zaklise'nin Venedik'e bırakılması. Bu,
`CLAUDE.md §3 Değişmez 2`'nin tarif ettiği hatanın tam kendisi: kırılmanın ±30 gün
içinde *bir* maddesi var, ama **o madde bu değişimi anlatmıyor.**

⚠️ Denetim bunu göremez: `denetle.py` "bu kırılmanın yakınında madde var mı" diye
sorar, "**o madde bu kırılmayı mı anlatıyor**" diye sormaz. Aynı gün alakasız
maddeye yapışan kırılmalar denetimin kör noktasıdır — `denetle.py` Oturum 2'nin
dosyası, oraya bildirilmeli.

**Madde yazıldı:** `data/olaylar_ek10.js` A-2, `t:"1482-01-01"`, `k:"vassal"`.

### 🔴 KAYNAK UYARISI — 1482 TDV'ye dayanmıyor

`KOORDINASYON.md §3`: *"Kaynak yoksa uydurulmaz — 'kaynak yok' işaretlenir ve
bana bildirilir."* İşaretliyorum:

- `islamansiklopedisi.org.tr/arama/?q=Crnojeviç` → **"Crnojeviç için madde
  başlıklarında sonuç bulunamadı"** (madde başlıkları 0, madde içerikleri 0).
- `iskodra` maddesinde Crnojeviç, Cetinje, Zeta **geçmiyor**. Buna rağmen mevcut
  1499 maddesi (`olaylar_ek6.js`, *"Karadağ'ın Osmanlı idaresine bağlanması"*)
  ve 1697 maddesi `kaynak:"iskodra"` gösteriyor — **iki maddenin de kaynağı
  içeriğini desteklemiyor**, gözden geçirilmeli.
- `karadag` maddesi (CANLI) hanedanı ve Cetinje piskoposluğunu anıyor; hâkimiyetin
  **1514**'te İskender Bey eliyle ayrı sancağa dönüştüğünü yazıyor. **1482 ve 1499
  yıllarını vermiyor.**

Yani `yerlesimler.js`'teki 1482 / 1499 / 1697 zincirinin tamamı bugün TDV dışı bir
kaynağa dayanıyor ve o kaynak veride yazılı değil. A-2 maddesi bunu gizlemiyor;
metninde *"1482 yılı ise TDV'de geçmez, Karadağ tarih yazımının verdiği tarihtir"*
cümlesi var. **Zinciri değiştirmedim** — kaynağı bilinmeyen bir tarihi başka bir
kaynaksız tarihle değiştirmek iyileşme olmaz.

**Merkez oturuma soru:** bu zincirin kaynağı hangi oturumdan geldi? Bulunamazsa
TDV dışı akademik referansla yeniden kurulması gerekir.

---

## 4. Merkez oturuma düzeltme listesi — özet

| # | Dosya | Sahibi | İş | Ölçüldü mü |
|---|---|---|---|---|
| 1 | `index.html` | merkez | ~~script satırı~~ **YAPILDI** | — |
| 2 | `js/app.js:1046` | merkez | ~~`.concat(window.OLAYLAR_EK10)`~~ **YAPILDI** | — |
| 3 | `data/yerlesimler.js` | merkez | Varna `g:0` → `g:2` | ✔ §1 |
| 4 | `data/yerlesimler.js` | merkez | 4 ada, **8 eşleşme**: `1479-01-25` → `1479-08-01` | ✔ §2 |
| 5 | `data/yerlesimler.js` | merkez | Ayamavra `s:` kimliği `venedik` → `napoli` (önce sor) | ✔ §2 |
| 6 | `olaylar_ek.js` | ? | 1479-01-25 maddesinden "Ayamavra (Lefkada)" çıkar | ✔ §2 |
| 7 | `js/app.js` | merkez | ediliş penceresinde zoom eşiği muafiyeti — **önce ölç** | ✖ §1 |
| 8 | `arac/denetle.py` | Oturum 2 | "kırılma o maddenin konusu mu" kör noktası | ✔ §3 |
| 9 | — | merkez | Cetinje 1482/1499/1697 zincirinin kaynağı nedir | ✔ §3 |
| 10 | `yerlesimler.js` + `ek10` | merkez + ben | Ayamavra 1502-1503 ve 1715-1718 eksik dönemleri | ✔ §2 |
| ~~11~~ | `data/yerlesimler.js` | merkez | ~~**Bender**: `s:"bogdan"` 1281→1538 ikiye bölünsün~~ **YAPILDI** (`cc714ac`) | ✔ §5 |
| ~~12~~ | `data/yerlesimler.js` | merkez | ~~**Hotin**: aynısı, 1456-06-01 → 1713-06-24 arası `v:`~~ **YAPILDI** (`cc714ac`) | ✔ §5 |
| **13** | `data/yerlesimler.js` | merkez | **Kili** `1484-08-03` → **`1484-07-15`** (2 eşleşme: `s:` bitişi + `d:` başı) | ✔ §5 |
| **14** | `data/yerlesimler.js` | merkez | **Akkirman** `1484-08-03` → **`1484-08-04`** (2 eşleşme) | ✔ §5 |
| **15** | `data/yerlesimler.js` | merkez | **Kili + Akkirman** `m:"Yaş"` → `m:"Silistre"` — sancak Rumeli/Özü'ye bağlıydı, voyvodalık merkezine değil | ✔ §5 |
| **16** | `data/yerlesimler.js` | merkez | **İnebahtı** `1499-08-28` → **`1499-08-26`** (2 eşleşme) ve `g:0` → `g:2` | ✔ §6 |
| **17** | `olaylar*.js` | ? | `1484-08-03` ve `1499-08-28` maddeleri **birleşik**; ayrıştırıldı, eskiler emekliye | ✔ §5·§6 |
| **18** | 🔴 **üretim** | Oturum 0 | **YENİ ÜRETİM ŞART.** `yerlesimler.js` 31 Tem 01:07'de değişti, `donemler.js` 30 Tem 23:16'da üretildi. #11-#12 düzeltmesi **geometride yok**; yayındaki harita hâlâ yeşil Boğdan kamasını gösteriyor — kullanıcının hatalar 15 md.9'da şikâyet ettiği şey tam olarak bu | ✔ §9 |
| **19** | `data/yerlesimler.js` | merkez | **18 kayıtta `s:"macaristan"` 1526-08-29'dan sonra sürüyor** (Kanije **74,1 yıl**, Eğri 70,1, Yanıkkale 68,1, Zigetvar 40,0, Solnok 26,0, Temeşvar 25,9, Peçuy/Estergon/İstolni Belgrad/Segedin 16,9, Şimontorna/Hatvan/Vaç 18,0, Kalocsa 15,0). Doğrusu **`macaristan-habsburg`** | ✔ §11 |
| **20** | `data/yerlesimler.js` | merkez | Ayrı sınıf: **13 kayıtta `s:"macaristan"` 1918-11-11 → 1923-10-29**. Doğrusu **`macaristan-naiplik`** (devletler.js'te var) | ✔ §11 |
| **21** | `arac/renkler.py` | Oturum 16 | `macaristan` **#4e7d46** ile `rusya` **#4f7d4f** neredeyse aynı yeşil; ayrıca `eflak` #4db34d ve `bogdan` #6b9e8a ile birlikte **dört yeşil**. Kullanıcı md.5'te ve md.9'da "yeşil" derken iki ayrı devletten bahsediyor | ✔ §11 |
| **22** | `data/yerlesimler.js` | merkez | 🔴 **EFLAK'TA TEK NOKTA VAR (Bükreş).** 14 test noktasının **8'i doğrudan Osmanlı** boyanıyor — Oltenya'nın tamamı (Krayova, Turnu Severin, Kalafat, Slatina) ve Piteşti dâhil. Kullanıcının md.10'daki "üçte biri açık kırmızı" ölçümü doğru. Çözüm nokta eklemek | ✔ §12 |
| **23** | `data/yerlesimler.js` | merkez | Eflak'a eklenecek asgari küme — `v:` **Krayova · Târgovişte · Piteşti · Rimnik · Kımpulung · Buzău · Fokşani · Turnu Severin**; `d:` **Yergöğü · Turnu · Zimniçe** (TDV `yergogu`: "Yergöğü kazası Niğbolu sancak beyliğine bağlı idi") | ✔ §12 |
| **24** | `data/yerlesimler.js` | merkez | **Rimnik 1687'den 1923'e Habsburg boyanıyor** — Erdel noktası `avusturya` olunca kuzey Eflak onun peteğine emiliyor. Avusturya Oltenya'yı yalnız **1718-1739** arası tuttu | ✔ §12 |
| **25** | 🔴 **motor** | Oturum 0 | **Solnok kaybı 13 ay boyunca haritada görünmüyor.** 1685-11-15 · 1686-01-15 · 1686-06-15'te nokta **hem** doğrudan Osmanlı gövdesinin **hem** Avusturya gövdesinin içinde; ancak Budin düşünce (1686-09-02) temizleniyor. Eğri/Kanije/Temeşvar'da böyle bir örtüşme YOK — kusur "çevrili tek hücrenin kaybı" hâline özgü | ✔ §13 |
| **26** | `olaylar*.js` | ? | **Yanova'nın kaybı `1693-01-01` yazılı; TDV `yanova`: "27 Mayıs 1693'te Habsburg askerleri burayı aldı."** Hem madde tarihi hem `yerlesimler.js`'teki `d:` bitişi + `s:"avusturya"` başı düzeltilmeli (2 eşleşme) | ✔ §10 |
| **27** | `olaylar*.js` | ? | **Yanova'nın fethi `1658-08-27` yazılı; TDV `yanova` orduyu Yanova ovasına 30 Ağustos 1658'de vardırıyor** ("1 Zilhicce 1068"), teslim ondan sonra. Verideki gün fethin **önüne** düşüyor — kaynağa göre gözden geçirilmeli | ✔ §10 |
| **28** | `data/devletler.js` | Oturum 3 | `erdel` dizinde **1570-01-01** başlıyor (Speyer), `yerlesimler.js` ise `v:"Erdel Prensliği"`yi **1541-08-29**'dan sayıyor. İki dizin çelişiyor | ✔ §11 |
| **29** | `data/yerlesimler.js` | merkez | **Hotin'de iki Rus işgali eksik**: TDV `hotin` "1788 Eylülünde" Avusturya-Rusya ortak işgali (1792'ye kadar) ve "son olarak 1806'da Ruslar'ın işgali" (1812'ye kadar). Veride 1774→1812 kesintisiz Osmanlı | ✔ §9 |
| **30** | — | merkez | **KARAR GEREKİYOR**: 1594-1595 üçlü isyanının toprak karşılığı veriye işlensin mi? Üç voyvodalık ayaklanma yıllarında haritada hâlâ tâbi renkte. İşlenirse hem başlangıç hem bitiş için madde şart (Oturum 2 D-4 kuralı); C-1…C-4 maddeleri başlangıcı zaten karşılıyor | ✔ §9 |

3, 4 ve 5 uygulandıktan sonra **`py arac/denetle.py`** koşturulmalı; benim
koşumdaki taban: `939 yerleşim · 971 madde · Değişmez 1 = 40 sahipsiz ·
Değişmez 2 = 452 kırılma / 0 açık · Değişmez 3 = 381 · SONUÇ: temiz`.

⚠️ **13-14-16 tarih düzeltmelerinde `CLAUDE.md §11` tuzağı:** her tarih kayıtta
**İKİ KEZ** geçiyor (`s:` döneminin bitişi ve `d:` döneminin başı). `replace(…, 1)`
yalnız ilkini değiştirir; İbrail ve Özi'de sekiz aylık sahipsiz pencere böyle açıldı.
Üçü de toplu düzeltmeden sonra Değişmez 1 koşturulmalı.

---

## 5. hatalar 14 md.2 — "Kili ve Akkerman fethedilince arada boşluk mu kalıyor"

> Kullanıcı: *"Kili ve Akkerman fethedilince ortada böyle bir boşluk mu kalıyor,
> Boğdan ile Akkerman arasında boş bölge — enklavdan bahsediyorum, araştıralım
> teyit edelim."*

### Cevap: geometrik boşluk YOK — ama kullanıcı yine de gerçek bir şey görüyor

Üretilmiş geometri (`donemler.js` + `devletler_harita.js`, 23:16:51 damgası)
1490-06-15 için shapely ile okundu. **Bütün gövdeler birbirine değiyor:**

```
dogrudan <-> tabi     : 0.00 km   kesişiyor: True
dogrudan <-> bogdan   : 0.00 km   kesişiyor: True
tabi     <-> bogdan   : 0.00 km   kesişiyor: True
dogrudan <-> kirim    : 0.00 km   kesişiyor: True
```

Yani "boşluk" bir kopukluk değil. Kullanıcının gördüğü şey **üçüncü bir renk**.

### Asıl bulgu: Boğdan haritada İKİ AYRI RENKTE çiziliyor

Aynı ölçümün nokta testi:

| Nokta | Koordinat | Hangi gövdenin içinde |
|---|---|---|
| Yaş | 27.601, 47.157 | OSMANLI-**tâbi** (açık ton) |
| Suçava | 26.250, 47.633 | OSMANLI-**tâbi** |
| Birlad | 27.667, 46.230 | OSMANLI-**tâbi** |
| Kalas | 28.008, 45.435 | OSMANLI-**tâbi** |
| **Bender** | 29.481, 46.831 | **`bogdan`** — yabancı devlet rengi |
| **Hotin** | 26.492, 48.510 | **`bogdan`** |
| Akkirman | 30.343, 46.197 | OSMANLI-**doğrudan** (koyu) |
| Kili | 29.271, 45.451 | OSMANLI-**doğrudan** |
| İsmail | 28.836, 45.351 | OSMANLI-**doğrudan** |
| Bucak ortası | 29.2, 46.3 | **`bogdan`** |
| Bucak kuzeyi | 29.0, 46.9 | **`bogdan`** |
| Dinyester ortası | 29.8, 46.6 | **`bogdan`** |

Moldavya kutusunda `bogdan` gövdesi **3,807 derece kare** yer kaplıyor — Bender ile
Hotin'in petekleri. Ve o petekler tam olarak **açık tonlu Boğdan ile koyu tonlu
Akkirman'ın arasına giriyor.** Kullanıcının "arada boş bölge" dediği kama budur:
boş değil, `#6b9e8a` renginde ayrı bir devlet gibi duruyor.

**Kök sebep veride.** Boğdan'ın çekirdeği `v:` taşıyor (tâbi), Bender ile Hotin ise
`s:[{d:"bogdan"}]` taşıyor (bağımsız devlet):

```js
Yaş     : v:[{f:"1456-06-01", t:"1878-07-13", k:"Boğdan Voyvodalığı"}]
Bender  : s:[{f:"1281-01-01", t:"1538-09-01", d:"bogdan"}]   ← 1456'dan sonrası YANLIŞ
Hotin   : s:[{f:"1281-01-01", t:"1713-06-24", d:"bogdan"}]   ← 1456'dan sonrası YANLIŞ
```

`renkler.py:205` `"bogdan": ("Boğdan Voyvodalığı", "#6b9e8a")`. Yani ekranda **aynı
isim iki ayrı renkte**: bir tarafta açık tonlu "Boğdan Voyvodalığı" tâbi toprağı,
öbür tarafta yeşil "Boğdan Voyvodalığı" bağımsız devleti.

> Bu, `CLAUDE.md §3.5`'te anlatılan **"İran / Safevî İran hayaleti"** vakasının
> birebir aynısı, Moldavya'ya taşınmış hâli. Denetim göremiyor çünkü üç değişmez de
> "sahibi var mı" diye soruyor, "sahibi doğru kademede mi" diye sormuyor.

TDV `bogdan` maddesi kararı veriyor: *"Voyvoda Petru Aron 1455 Eylülünden itibaren
Osmanlılar'a yılda 2000 altın vermek suretiyle varlığını koruyabilmiştir."* Boğdan
1455/56'dan itibaren **bütünüyle** tâbidir; içindeki Bender ve Hotin de öyle.
Aynı madde Bender/Bucak'ın Kanûnî devrinde (1538) doğrudan katıldığını yazar —
bu tarih veride zaten doğru. TDV `hotin`: *"1711'den sonra"* doğrudan idareye
sokuldu; veri 1713-06-24 diyor, kabul edilebilir.

**Düzeltme (liste #11, #12):**

```js
Bender  : s:[{f:"1281-01-01", t:"1456-06-01", d:"bogdan"}, …]
          v:[{f:"1456-06-01", t:"1538-09-01", k:"Boğdan Voyvodalığı"}]
          d:[{f:"1538-09-01", …}]                       // değişmiyor
Hotin   : s:[{f:"1281-01-01", t:"1456-06-01", d:"bogdan"}, …]
          v:[{f:"1456-06-01", t:"1713-06-24", k:"Boğdan Voyvodalığı"}]
          d:[{f:"1713-06-24", …}]                       // değişmiyor
```

⚠️ İkisinin de `v:` alanı **yok**, yeni açılacak. Ve yeni kırılma **1456-06-01'de**
doğuyor — o günün maddesi zaten var (`Boğdan'ın haraca bağlanışı`), yani Değişmez 2
kendiliğinden sağlanıyor, yeni madde gerekmiyor. Bu yüzden `olaylar_ek10.js`'e
1456 maddesi **yazmadım**.

### Yan bulgu: iki fetih tarihi de yanlış, üstelik ikisi tek güne bindirilmiş

Veride Kili, Akkirman ve İsmail'in üçü de `1484-08-03`. TDV iki ayrı gün veriyor:

| Yer | Veride | TDV | Fark |
|---|---|---|---|
| **Kili** | 1484-08-03 | **15 Temmuz 1484** (20 Cemâziyelâhir 889) | **19 gün** |
| **Akkirman** | 1484-08-03 | **4 Ağustos 1484** | 1 gün |

Kronolojide de tek madde var: `1484-08-03 | Kili ve Akkirman'ın fethi`. Yirmi gün
arayla iki ayrı kuşatma tek maddeye ve tek güne sıkışmış.

> **Üçüncü kez aynı desen.** §2'de 1479 İyon adaları (antlaşma günü + fetih günü),
> §6'da 1499 Sapienza + İnebahtı, burada 1484 Kili + Akkirman. Üçünde de iki ayrı
> olay tek tarihe bindirilmiş ve kullanıcı üçünü de ayrı ayrı fark etti. Bu bir
> tesadüf değil, **veri girişinde tekrar eden bir alışkanlık**.

`olaylar_ek10.js`'e ikisi ayrı madde olarak yazıldı (**B-1**, **B-2**), eski birleşik
madde emekliye ayrılmak üzere listeye kondu (#17).

### Yan bulgu 2: `m:"Yaş"` — Değişmez 3 borcunun somut hâli

Kili ve Akkirman'ın `m:` alanı `"Yaş"`, yani bağlı oldukları merkez **Boğdan
voyvodalığının başkenti**. Tarihen yanlış: TDV `akkirman` *"Fetihten sonra Rumeli
beylerbeyiliğine bağlı bir sancak haline getirilen Akkirman, 1593 yılında yeni
kurulan Özü eyaletine ilhak edildi"*; TDV `kili` *"Kili sancak beyliği haline
getirildi"*, sonra *"Rumeli beylerbeyiliğine tâbi Akkirman sancağına bağlandı"*.
Doğrudan sancak, tâbi voyvodalığın merkezine bağlanamaz. Komşuları İsmail zaten
`m:"Silistre"` taşıyor; ikisi de ona çekilmeli (#15).

### Bucak/Dobruca 34,46 km boşluğu — bu vaka DEĞİL

Merkez `denetim/BITISIKLIK-2026-07-30.md`'deki 34,46 km'lik %100 kara boşluğunu
sordu. Rapor okundu: o kayıt **1456→1461** dönemine ait, yani Kili/Akkirman'dan
**28 yıl önce**. Boğdan 1456'da tâbi olunca voyvodalık gövdesi haritaya giriyor ama
ana gövdeye Tuna deltasından bağlanamıyor — çünkü aradaki Bucak Bender'e ait ve
Bender o tarihte `bogdan` (yabancı) sayılıyor. **Yani 1456 boşluğunun sebebi de
#11'deki aynı kusur.** Düzeltme uygulanınca o boşluğun kapanması beklenir; üretimden
sonra `py arac/denetle_bitisiklik.py` ile ölçülmeli.

---

## 6. hatalar 14 md.3 — "Sapienza'dan önce İnebahtı'da Venedik yazıyor"

> Kullanıcı: *"Sapienza deniz zaferinden önce İnebahtı bölgesinde arka planda
> Venedik yazıyor, bu hata mı? İnebahtı o anda Osmanlı'da değil ise o zaman
> haritada neden görünmüyor?"*

İki soru var, ikisinin cevabı ayrı.

### (a) Venedik etiketi — HATA DEĞİL, doğru

`data/yerlesimler.js:301`:

```js
{ ad:"İnebahtı", tur:"kale", lat:38.399, lon:21.827, g:0, k:3, m:"Mora (Tripoliçe)",
  s:[{f:"1281-01-01",t:"1499-08-28",d:"venedik"}, …],
  d:[{f:"1499-08-28",t:"1687-08-06",y:"kusatma"}, …] }
```

TDV `inebahti` doğruluyor: şehir **1407'de Venedik'e geçti ve 1499'a kadar onların
elinde kaldı.** Yani 1499 yazından önce arka planda "VENEDİK" yazması doğrudur.

Tek düzeltme günde: TDV *"kaledeki Venedikliler **26 Ağustos**'ta kasabayı
Osmanlılar'a teslim ettiler"* diyor; veri `1499-08-28` taşıyor (#16, 2 gün).
28 Ağustos, kronolojideki **Sapienza deniz zaferinin** tarihi — kale teslimi oraya
yapıştırılmış. §5'teki desenin aynısı.

### (b) "Haritada neden görünmüyor" — Varna ile aynı sınıf, ama daha geniş

Etiket devlet gövdesinden geliyor (`devletler_harita.js`), **şehir işareti** ise
`ISARET_KAYNAK`'tan. İkisi ayrı boru hattı ve ikincisi İnebahtı'yı 1499'dan önce
hiç çizmiyor. Kod yolu:

| Adım | Yer | Ne oluyor |
|---|---|---|
| 1 | `js/app.js:600` | Kaynak **yalnız `y.d && y.d.length` olan kayıtlar** — Osmanlı dönemi olmayan yerleşim listeye hiç girmez |
| 2 | `js/app.js:602` | `gecici: y.g === 0` → İnebahtı `g:0`, geçici |
| 3 | `js/app.js:644-647` | O anda **aktif bir `d:` dönemi** aranır; 1499 öncesi yok |
| 4 | `js/app.js:650-653` | `aktif` yoksa işaret **haritadan kaldırılır** |
| 5 | `js/app.js:649` | Aktif olsa bile `g:0` ise fetihten **550 gün** sonra yine kaldırılır |

Yani İnebahtı 1499-08-26'da beliriyor, ~1501 başında kayboluyor, 188 yıllık Osmanlı
sancak merkezi olduğu sürenin geri kalanında **hiç görünmüyor**.

### Ölçüm — bu tek şehrin sorunu değil

`data/yerlesimler.js`, 764 kayıt üzerinde:

| Sınıf | Adet | Sonuç |
|---|---|---|
| **Hiç Osmanlı dönemi (`d:`) olmayan** | **285** | İşaret kaynağına **hiç girmiyor** — ömrü boyunca adı yazılmıyor |
| bunlardan tâbi (`v:`) olanlar | 28 | Gövdesi çiziliyor ama tek şehir adı yok |
| `d:` var ama `g:0` | 386 | Yalnız 550 günlük pencerede görünüyor |
| bunlardan `k ≤ 3` (sancak/eyalet çapında) | **140** | Varna, İnebahtı, Silistre, İşkodra, Temeşvar, Kamaniçe, Yaş, Draç, Avlonya, Akkirman, Bender… |

**Kural olarak:** harita bugün yalnız *Osmanlı'nın elinde olduğu anda* şehir adı
gösteriyor. Venedik'in, Macaristan'ın, Boğdan'ın gövdesi boyanıyor ve adı yazılıyor
ama içinde **tek bir şehir adı yok**. Kullanıcının sorduğu tam olarak budur ve dünya
kapsamı açılınca sorun 285'ten çok daha büyüyecek.

**Önerilen düzeltme — iki kademe:**

1. **Şimdi, ucuz (#16):** İnebahtı `g:0` → `g:2`. (Varna için de aynısı önerildi, #3.)
   `g:3` **değil** — 3. katman `baskent` sınıfını tetikliyor (`js/app.js:678`).
2. **Sonra, ölçülerek (#7'nin genişlemiş hâli):** `ISARET_KAYNAK` filtresi `y.d`
   yerine "kaydın herhangi bir dönemi aktifse" olmalı ve işaret sahibinin rengini
   almalı. Bu **merkezin/Oturum 1'in kararı** — 285 + 386 kayıt birden ekrana gelir,
   önce zoom katmanlarıyla birlikte ölçülmeli. **Ben ölçmedim**, çünkü `js/app.js`
   benim dosyam değil ve tarayıcı ölçümü zoom eşiklerine bağlı.

`olaylar_ek10.js`'e teslim maddesi ayrı yazıldı (**B-3**, 1499-08-26).

---

## 7. Doğrulanmış slug kümesi (2026-07-30, `<title>` ile)

| Slug | Durum |
|---|---|
| `gedik-ahmed-pasa` | ✅ CANLI — "GEDİK AHMED PAŞA - TDV İslâm Ansiklopedisi" |
| `karadag` | ✅ CANLI — "KARADAĞ - TDV İslâm Ansiklopedisi" |
| `ayamavra` | ✅ CANLI — "AYAMAVRA - TDV İslâm Ansiklopedisi" |
| `kili` | ✅ CANLI — "KİLİ - TDV İslâm Ansiklopedisi" |
| `akkirman` | ✅ CANLI — "AKKİRMAN - TDV İslâm Ansiklopedisi" |
| `inebahti` | ✅ CANLI — "İNEBAHTI - TDV İslâm Ansiklopedisi" |
| `bogdan` | ✅ CANLI — "BOĞDAN - TDV İslâm Ansiklopedisi" |
| `hotin` | ✅ CANLI — "HOTİN - TDV İslâm Ansiklopedisi" |
| **`kefalonya`** | 🔴 **ÖLÜ** — "Arama - TDV İslâm Ansiklopedisi". Müstakil madde YOK. |
| **Crnojeviç** | 🔴 **KARŞILIĞI YOK** — arama 0 sonuç döndürüyor |

---

## 9. hatalar 15 md.9·16·20 — Hotin zinciri

Kullanıcı Hotin'i **üç ayrı ekran görüntüsünde üç ayrı şikâyetle** sordu; üçünün de
cevabı aynı zincirden çıkıyor.

| Şikâyet | Cevap |
|---|---|
| md.9 "Boğdan alındıktan sonra Hotin YEŞİL kalmış" | 🔴 **Gerçek hata — hayalet bölünme.** Hotin ve Bender `v:` kaydında Boğdan voyvodalığı adını taşımıyordu, ayrı bir devlet gibi boyanıyordu. Veride düzeltildi (satır #11·#12, merkez uyguladı), **geometride henüz yok** — bkz. aşağıdaki bayat geometri notu |
| md.16 "Hotin hep TEK BAŞINA görünüyor" | 🟢 **Gösterim doğru.** 1713'ten sonra Hotin tâbi Boğdan'ın ortasında **doğrudan Osmanlı sancağıdır**; ada gibi durması idarî gerçeğin karşılığıdır |
| md.20 "Ruslarla Edirne Antlaşması sonrası KIRMIZI oldu, kronolojide metin yok" | 🟡 **Renk doğru, madde eksikti.** Söz konusu antlaşma 1829 Edirne'si değil **1713 Edirne Antlaşması**'dır. Madde yazıldı: `olaylar_ek10.js` **C-5** (1713-06-24) |

**Hotin'in tam zinciri** (veride kurulu olan):

| Dönem | Sahip | Not |
|---|---|---|
| 1359 → 1621 | Boğdan voyvodalığı (`v:`) | Prut-Dinyester arası voyvodalık toprağı |
| 1621 → 1713 | Lehistan baskısı ve Boğdan arasında gidip gelme | Hotin Muharebesi 1621 |
| **1713-06-24 → 1812** | **doğrudan Osmanlı (`d:`)** | Boğdan'dan koparıldı, önce nahiye sonra sancak. **Kullanıcının gördüğü kırmızı budur ve doğrudur** |
| 1812-05-28 → | Rusya | Bükreş Antlaşması, Besarabya |

🔴 **Veride eksik iki Rus işgali** — merkeze düzeltme listesinde (#29):
1788-09 → 1792 (Yaş Antlaşması'na kadar) ve 1806 → 1812. İkisi de haritada
görünmüyor; Hotin bu iki pencerede hâlâ Osmanlı boyanıyor.

⚠️ **Bayat geometri.** Hotin/Bender düzeltmesi `yerlesimler.js`'e girdi ama
`donemler.js` ve `devletler_harita.js` o düzeltmeden ÖNCE üretilmişti. Ölçüldü:
1600 ve 1700 kesitlerinde Hotin noktası hâlâ `dvl:bogdan`'a çözülüyor. **Yeni
üretim koşulmadan kullanıcı düzelmeyi göremez** (satır #18).

---

## 10. hatalar 15 md.12 — Yanova ve Varad kimden alındı

**Cevap: EVET — ikisi de VASAL ERDEL'DEN alındı.** Kullanıcının sezgisi doğru.
Veri bunu zaten doğru modelliyor; haritada `v:` → `d:` geçişi olarak görünüyor.

| Kayıt | Erdel vasal dönemi (`v:`) | Doğrudan Osmanlı (`d:`) | Kayıp |
|---|---|---|---|
| **Yanova** (Ineu) | 1541-08-29 → 1658-08-27 | 1658-08-27 → 1693-01-01 | Habsburg |
| **Varad** (Oradea) | 1541-08-29 → 1660-08-27 | 1660-08-27 → 1692-06-05 | Habsburg |

Sebep de kayıtlı: II. Rákóczi György'nin izinsiz Lehistan seferi (1657). Ceza
seferleri Erdel'in **kendi toprağından** iki kaleyi kopardı — yani Osmanlı burada
Habsburg'dan değil, kendi vasalından toprak aldı. Mevcut kronoloji maddeleri
Rákóczi'yi zaten adıyla anıyor; **yeni madde gerekmedi.**

Bunun yerine iki **tarih kusuru** çıktı (merkez listesinde #26·#27):

- **#26 Yanova'nın kaybı `1693-01-01` yazılı** — yuvarlanmış tarih. TDV `yanova`:
  *"27 Mayıs 1693'te Habsburg askerleri burayı aldı."* → `1693-05-27` olmalı.
- **#27 Yanova'nın fethi `1658-08-27` yazılı** — TDV'ye göre ordu Yanova ovasına
  **30 Ağustos 1658**'de vardı, teslim ondan sonradır. Veri olayın **önüne**
  geçiyor. Doğru gün TDV'den netleşirse düzeltilmeli.

---

## 11. hatalar 15 md.1·md.5 — Macaristan'ın üç katmanı

### Yapı doğru mu?
🟢 **Evet, üç katman haritada var ve doğru:**
doğrudan sancak (Budin beylerbeyliği, `d:`) · vasal prenslik (Erdel, `v:`) ·
Habsburg tarafı (Kraliyet Macaristanı).

Kilit tarih kullanıcının sandığı gibi 1526 Mohaç değil, **1541 Budin'in alınıp
beylerbeyliğe çevrilmesidir**. 1526-1541 arası Zápolya dönemi veride `v:` olarak
duruyor — bu da doğru.

### md.5 — üç yeşil leke gerçekten fethedilmemiş miydi?
1545 kesitinde `macaristan` gövdesinin **tam üç parçası** var ve üçü kullanıcının
tarifiyle birebir örtüşüyor:

| Parça | Alan | Merkez | Neresi | Ne zaman fethedildi |
|---|---|---|---|---|
| #878 | 32.449 km² | 20,76D / 48,43K | kuzeydoğu — Eğri-Solnok | Solnok 1552-09-04, Eğri 1596-10-12 |
| #879 | 28.886 km² | 17,49D / 46,69K | **batı Macaristan** — Kanije-Zigetvar | Zigetvar 1566-09-07, Yanıkkale 1594-09-27, Kanije 1600-10-20 |
| #877 | 13.579 km² | 21,69D / 45,57K | güneydoğu — Temeşvar | Temeşvar 1552-07-27 |

🟢 **Üçü de 1545'te gerçekten fethedilmemişti.** "Enklav", "içeri girinti" ve
"batı Macaristan'daki parça" veri eksiği değil, **tarihî gerçektir.**

### 🔴 Ama kimliği yanlış — hayalet devlet (CLAUDE.md §3.5)
Bu üç parça **bağımsız Macaristan Krallığı** rengiyle boyanıyor. Oysa
`devletler.js` o devleti **1526-08-29'da bitiriyor**. Yani harita, kendi dizinine
göre 1526'da yıkılmış bir devleti 1600'e kadar boyuyor.

- **18 kayıt** `s:"macaristan"` dönemini 1526-08-29'un ötesine taşıyor;
  en uzunu **Kanije, 74,1 yıl** (satır #19). Doğrusu `macaristan-habsburg`.
- **13 kayıt** `s:"macaristan"` ile 1918-11-11 → 1923-10-29 arasını dolduruyor;
  doğrusu `macaristan-naiplik` (satır #20).

### 🟡 İkincil: dört yeşil sorunu (satır #21)
`macaristan #4e7d46` · `rusya #4f7d4f` — neredeyse aynı yeşil. Yanlarına
`eflak #4db34d` ve `bogdan #6b9e8a` eklenince kullanıcının "yeşil" dediği şey
md.5'te Habsburg/Macaristan, md.9'da Boğdan oluyor. **Oturum 16'nın işi.**

### 🟡 `erdel` kaydı 1570'te başlıyor (satır #28)
`devletler.js`'te `erdel` **1570-01-01** → 1711-04-30. Ama yerleşimlerin `v:`
dönemleri Erdel Prensliği'ni **1541-08-29**'dan başlatıyor (Yanova, Varad).
Speyer Antlaşması (1570) prensliğin hukukî adını koyar; fiilî varlık 1541'dir.
İkisi çelişiyor — dizinin başlangıcı 1541'e çekilmeli ya da fark not düşülmeli.

---

## 12. hatalar 15 md.7·md.10 — Eflak'ın sınırları

Kullanıcı haklı: **Eflak'ın üçte biri açık kırmızı (vasal), gerisi Osmanlı
kırmızısı.** Voyvodalığın içine 14 test noktası konup her biri hangi gövdeye
düştüğü ölçüldü:

| Nokta | Çözüldüğü katman |
|---|---|
| Bükreş | 🟠 vasal Eflak |
| **Krayova** (Oltenya) | 🔴 doğrudan Osmanlı |
| **Turnu Severin** | 🔴 doğrudan Osmanlı |
| **Kalafat** | 🔴 doğrudan Osmanlı |
| **Slatina** | 🔴 doğrudan Osmanlı |
| **Piteşti** | 🔴 doğrudan Osmanlı |
| Yergöğü · Turnu · İbrail | 🔴 doğrudan Osmanlı |
| Ploieşti · Buzău · Tırgovişte · Câmpulung · Focşani | 🟠 vasal Eflak |

**14 noktanın 8'i doğrudan Osmanlı çıkıyor.**

### Ne doğru, ne yanlış
🟢 **İkili renk ilkesi DOĞRU.** Tuna boyu kazaları gerçekten doğrudan Osmanlı
idaresindeydi — TDV `yergogu`: *"Yergöğü kazası Niğbolu sancak beyliğine bağlı
idi."* İbrail 1538'den beri doğrudan devlete bağlıdır.

🔴 **Oran YANLIŞ, sebebi de klasik.** Krayova, Piteşti, Turnu Severin ve Yergöğü
**aynı poligona (#1234)** düşüyor. Sebep CLAUDE.md §2'nin ders kitabı vakası:
**Eflak'ın içinde tek bir yerleşim noktası var — Bükreş.** Geri kalan her yer
çevredeki doğrudan Osmanlı noktalarına (Vidin, Niğbolu, Rusçuk, Silistre, İbrail)
emiliyor. Oltenya'nın tamamı bu yüzden kırmızı.

**Çözüm nokta eklemektir** (satır #23) — asgarî küme: Krayova · Tırgu Jiu ·
Râmnicu Vâlcea · Piteşti · Tırgovişte · Slatina · Buzău · Focşani.

🔴 **Ek bulgu (satır #24): Rimnik 1700 ve 1800 kesitlerinde `dvl:avusturya`'ya
çözülüyor** — Erdel'deki Avusturya noktasından emiliyor. Avusturya Oltenya'yı
yalnız **1718-1739** arasında tuttu; 1687-1923 boyunca Habsburg boyanması hatadır.

---

## 13. hatalar 15 md.15 — Solnok'un kaybı görünmüyor

Kullanıcı haklı. Ne kronoloji ne veri eksik; **geometri geç tepki veriyor.**

- Kronoloji maddesi var ve iyi: `1685-10-19 Solnok'un kaybı — Tisa hattının çözülmesi`
- Veride `d:` dönemi doğru bitiyor: `{f:"1552-09-04", t:"1685-10-19"}`
- 🔴 **Ama nokta hâlâ Osmanlı gövdesinin içinde:**

| Kesit | Solnok noktası |
|---|---|
| 1685-11-15 | `DOGRUDAN#1370` + `dvl:avusturya` (çakışma) |
| 1686-01-15 | aynı |
| 1686-06-15 | aynı |
| 1686-11-15 | temiz Avusturya — **Budin düştükten sonra** |

**~13 ay boyunca iki gövde üst üste biniyor.** Eğri, Kanije ve Temeşvar aynı
sınamada temiz geçiş yapıyor; kusur **etrafı sarılıyken tek bir iç hücreyi
kaybetmeye** özgü (satır #25). Delik-farkındalıklı nokta testiyle doğrulandı —
poligon deliği yanılsaması değil, gerçek örtüşme.

---

## 14. Sırada

**B bloğu (hatalar 11, 1859-1913):** md.3 Belgrad · md.28·29·30 Eflak-Boğdan
birleşmesi ve Cuza · md.38·39 93 Harbi · md.46-49 Ayastefanos→Berlin · md.54 Bosna
işgali (`isg:` dizisi) · md.57·58 Balkan savaşları. Ayrıca merkezin havale ettiği
**md.29 nehir noktaları** (Soroka, Orhei, Reni) — koordinat + dönem zincirleri bu
dosyaya yazılacak.

**Devreden:** Kili/Akkirman tarih düzeltmeleri (§5) · İnebahtı bulguları (§6) ·
Ayamavra 1502-1503 ve 1715-1718 boşluklarına madde önerisi.

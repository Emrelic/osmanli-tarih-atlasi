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

| **31** | `data/yerlesimler.js` | merkez | 🔴 **ŞUMADYA'DA HİÇ NOKTA YOK — Sırbistan 1878-1912 arası halka gibi çiziliyor**, dışı Sırp ortası Osmanlı. Kragujevac ve Çaçak 1910 kesitinde hâlâ `DOGRUDAN`. İki nokta eklenecek, zincir **Semendire'den** kopyalanacak (Belgrad'dan değil) | ✔ §17.1 |
| **32** | — | merkez | **KARAR GEREKİYOR**: Sırbistan Prensliği 1830-1867 arası `v:` yapılsın mı? `devletler.js` `sirbistan-prensligi` `f:"1804-02-14"` diyor, harita 1867'ye kadar doğrudan Osmanlı çiziyor. Eflak/Boğdan `v:` ile modellenmişken bu tutarsız. Yapılırsa 1830-08-15 Hatt-ı Şerîf'e madde şart | ✔ §17.1 |
| **33** | `data/yerlesimler.js` | merkez | 🔴 **ŞARKÎ RUMELİ HARİTADA HİÇ YOK, üstelik ters yönde.** **Filibe** 1878'de gidiyor (7 yıl erken — 1885'e kadar Osmanlı'ya tâbi vilâyetti); **Eski Zağra · Tatarpazarcığı · İhtiman** `d:` 1923-10-29'a kadar sürüyor, **hiç gitmiyorlar** (38-45 yıl). Bulgaristan'ın içine sokulmuş Osmanlı kaması. TDV `bulgaristan` sancakları tek tek sayıyor | ✔ §17.2 |
| **34** | `data/yerlesimler.js` | merkez | **Bulgaristan tâbi değil bağımsız renkte.** Yedi yerleşim 1877-78'de `s:"bulgaristan"` oluyor; TDV `berlin-antlasmasi`: *"Osmanlı Devleti'ne tâbi … Bulgaristan prensliği"*. `v:{1878-07-13→1908-10-05, "Bulgaristan Prensliği"}` olmalı — kullanıcının md.47 *"özerk mi bağımsız mı"* sorusunun cevabı | ✔ §17.3 |
| **35** | `data/yerlesimler.js` | merkez | **Sofya `1877-12-10` taşıyor — bu Plevne'nin düştüğü gündür.** Ruslar Sofya'ya 4 Ocak 1878'de girdi. Tarih Plevne'den kopyalanmış görünüyor | ✔ §17.3 |
| **36** | 🔴 **motor** | Oturum 0 | **Saraybosna 1910'da hem `DOGRUDAN` hem `dvl:avusturya`** — ilhak 1908-10-05'te yazılı, Osmanlı gövdesi 1912'ye kadar çekilmiyor (~4 yıl örtüşme). #25 Solnok'la **aynı sınıf**: çevresi (Yenipazar sancağı) Osmanlı kaldığı için gövde kopmuyor | ✔ §17.4 |
| **37** | — | merkez | 🟡 **İKİ TDV MADDESİ ÇELİŞİYOR**: `bosna-hersek` ilhakı *"7 Ekim 1908"*, `balkan-savasi` 3 Ekim'den *"iki gün sonra"* (=5 Ekim). Veri 1908-10-05. İki gün için zincir değiştirilmedi; karar merkezin | ✔ §17.4 |
| **38** | `olaylar.js` | merkez | ✅ **KARAR: EMEKLİ ET, ölçüldü ve güvenli.** `1877-04` ve `1912-10` **hiçbir kırılmanın en yakın maddesi değil**; silinince `d:`/`v:` açığı 0→0, `s:` açığı 107→107. Ayrıntılar (D-1, D-5 ve mevcut Plevne/Yanya/Edirne/Londra maddeleri) pencereleri zaten kapsıyor | ✔ §19.3 |
| **39** | `olaylar_ek.js` + veri | merkez | 🟡 **TARİH ÇELİŞKİSİ**: TDV `sirbistan` özerklik fermanını **17 Ekim 1830**'a koyuyor, kronoloji maddesi **1830-11-08** taşıyor. 22 gün fark ±30 penceresinin içinde — hangisi seçilirse seçilsin Değişmez 2 sağlanıyor. Zincirlere maddedeki tarihi yazdım; TDV benimsenirse **ikisi birlikte** taşınmalı | ✔ §19.1 |
| **40** | `data/yerlesimler.js` | merkez | **OPSİYONEL**: TDV `sirbistan` dört garnizon kalesini adıyla sayıyor, ikisi veride **yok** — **Fethülislâm (Kladovo)** 44.606K/22.610D ve **Böğürdelen (Šabac)** 44.750K/19.694D. Eklenirse Sırbistan'ın Tuna ve Sava köşeleri tutulur; zincirleri Belgrad'ınkiyle birebir aynı | ✔ §19.1 |
| **41** | `olaylar_ek.js` | ? | ⚠️ **KAYNAK YOK, SİLİNMEYECEK — İŞARETLENECEK**: `1897-05-17` "Dömeke Meydan Muharebesi" maddesinin TDV karşılığı bulunamadı (`domeke` ve `domeke-meydan-muharebesi` ölü, `teselya` maddesinde de geçmiyor). Standart akademik kaynakla doğrulanıp `kaynak:` alanı düzeltilmeli | ✔ §7.1 |
| **42** | `CLAUDE.md` §4 | merkez | Ölü slug listesine eklenecek: **`belgrad-antlasmasi`** (1739'un müstakil maddesi YOK, hükümleri `belgrad` şehir maddesinde) · `sarki-rumeli` · `dogu-rumeli` · `93-harbi` (doğrusu `doksanuc-harbi`) · `domeke` · `catalca` · `sipka` · `istanbul-antlasmasi` · `fethulislam` · `kladovo` · `sabac` (doğrusu **`bogurdelen`**) · `krayova` · `tirgoviste` · `pitesti` · `buzau` · `kalafat` · `soroka` · `orhei` · `tomarova` · `bender` · `kartal` | ✔ §7.1·§19.5 |
| **43** | `olaylar_ek.js` | ? | 🔴 `1830-11-08` maddesinin `d:` metni garnizon kalelerini **beş** sayıyor: *"Belgrad, Semendire, **Şabac, Böğürdelen** ve Fethülislâm"*. **Šabac ile Böğürdelen aynı şehirdir.** TDV dördü sayıyor. `Şabac,` çıkarılmalı — ve **#40 uygulanırken ayrıca bir "Šabac" kaydı AÇILMAMALI** | ✔ §19.6 |
| **44** | `olaylar_ek5.js` | ? | 🟡 **1897 savaşının başlangıcı çelişiyor**: madde `1897-04-17` (Osmanlı'nın savaş ilânı), TDV `tesalya` **"7 Nisan - 18 Mayıs 1897"**. On gün fark. #37 disiplini: karar verilmedi, işaretlendi | ✔ §19.7 |
| **45** | `olaylar_ek.js` | ? | 🟡 Dömeke maddesi `kisiler:"Edhem Paşa"` diyor, TDV `tesalya` **Hâfız Abdülezel Paşa** diyor. İkisi de doğru — Edhem Paşa başkumandan, Abdülezel Paşa Dömeke'de düşen tümen kumandanı. İki isim birlikte yazılabilir | ✔ §19.7 |
| **46** | `data/yerlesimler.js` | merkez | Böğürdelen zincirinde **kasten atlanan iki dönem**: TDV *"Şehir 1688 ve 1695'te kısa süreli olarak elden çıktı"* diyor ama **gün vermiyor**. Yıl uydurmamak için konmadı; kaynak bulunursa iki kısa `s:"avusturya"` penceresi eklenir | ✔ §19.5 |
| **47** | — | merkez | **Fethülislâm (Kladovo) için KARAR**: TDV'de madde yok, zinciri kaynaksız kalır ve Böğürdelen'inkinden kopyalanamaz. Şimdilik **eklenmemesini** öneriyorum. Coğrafî gerekçe yine de güçlü: eklenmezse Sırbistan'ın Demirkapı köşesi 1878'e kadar Osmanlı kalan Vidin'in peteğine emilir — §17.1'deki Şumadya hatasının küçük kopyası | ✔ §19.5 |

| **48** | `data/yerlesimler.js` | **YAMACI** | ✅ **ONAYLANDI — PODGORİCA PAKETİ.** Cetinje `kasitli_bosluk: true` kararının kırılganlığını gideren asıl düzeltme. Kayıt + 1457 maddesi + Cetinje gerekçesi **§22**'de tam hâliyle. `1457-01-01` kırılmasının maddesi yok → yerleşim ve madde **AYNI ADIMDA** | ✔ §21·§22 |
| **49** | `data/devletler.js` | Oturum 3 | 🔴 **KÜNYE TUTMUYOR.** `zeta` kaydının `1451-01-01` satırı *"merkezi Cetine'ye taşıdı"* diyor ve künyesi *"(kaynak: TDV, madde: karadag)"*. **TDV `karadag`'da ne 1451 ne de merkezin taşınması geçiyor.** İki olay birleşmiş: hânedanın Zeta'nın başına geçmesi (1451) ile merkezin Cetinje'ye taşınması (1482). `yerlesimler.js` `kur:"1482-01-01"` diyor — iki katman **31 yıl** ayrışıyor | ✔ §24 |
| **50** | `arac/renkler.py` | Oturum 16 | `zeta` kimliği `devletler.js`'te **var** (1356-1514) ama `BOYALAR`'da **yok**. Eklenirse Podgorica'nın 1281-1457 zinciri üçe bölünüp doğrusu yazılabilir; şimdilik tek parça `sirbistan` yazıldı | ✔ §22.1 |
| **51** | — | merkez | **AYRI ÖNERİ (Podgorica paketiyle karıştırılmayacak):** TDV `iskodra`nın 1485 tahririnde saydığı üç kale daha — **Žabljak · Medun · Drivasto**. Üçünün de düşüş yılı TDV'de **yok**, müstakil maddeleri de yok. Žabljak için söylenebilecek en kesin şey **"1479 ile 1485 arası"**. Şimdilik eklenmemesini öneriyorum | ✔ §23 |

🔴 **#40 SIRALAMA KISITI:** Böğürdelen kaydı ile E bloğunun dört maddesi **AYNI
ADIMDA** uygulanmalı. Önce yerleşim eklenirse **Değişmez 2** kırılır (dört
maddesiz kırılma); önce maddeler eklenirse **Değişmez 2t** kırılır (ölçüldü:
67 → 70, `SONUÇ: İHLAL VAR`). Maddelerin tam metni **yalnız §19.5'te** — git
geçmişinde yok, aynı oturumda yazılıp çıkarıldılar.

📌 **#32 ve #37 merkez tarafından karara bağlandı, uygulama karşılıkları §19'da:**
**#32 EVET** — Sırbistan `v:` 1830 → **1878-07-13** (1867 değil); TDV `sirbistan`
doğruluyor, ayrıca *"kale muhafızları dışında"* ifadesi Belgrad/Semendire'nin
1867'ye kadar `d:` kalmasını gerektiriyor.
**#37 KARAR VERİLMEDİ, İŞARETLENDİ** — `isg:` örtüsüne dokunulmadı.

⚠️ **#23 ARTIK GEÇERSİZ — yerine §15 geçti.** O satır ölçümden önce yazılmış bir
tahmindi (Fokşani, Zimniçe, Kımpulung sayıyordu). §15 ölçülmüş, kaynaklı ve
yapıştırmaya hazır **on kayıt** veriyor; Fokşani'nin neden alınmadığı orada yazılı.

3, 4 ve 5 uygulandıktan sonra **`py arac/denetle.py`** koşturulmalı; benim son
koşumdaki taban: `951 yerleşim · 984 madde · Değişmez 1 = 50 sahipsiz ·
Değişmez 2 = 449 kırılma / 0 açık · Değişmez 3 = 381 · mükerrer = 0 ·
SONUÇ: temiz`.

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

### 7.1 İkinci tur (2026-07-31) — Eflak, Boğdan ve 1877-1913 bloğu

**✅ CANLI** (`<title>` maddenin adını döndürdü):
`eflak` · `pasarofca-antlasmasi` · `belgrad` · `berlin-antlasmasi` ·
`ayastefanos-antlasmasi` · `doksanuc-harbi` · `balkan-savasi` ·
`londra-antlasmasi` · `bulgaristan` · `sirbistan` · `bosna-hersek` · `romanya` ·
`sofya` · `plevne` · `edirne` · `teselya` · `yenisehir` · `tirhala` · `bucak`

**🔴 ÖLÜ** (`<title>` = "Arama - TDV İslâm Ansiklopedisi"):

| Slug | Not |
|---|---|
| `belgrad-antlasmasi` | 1739 antlaşmasının **müstakil maddesi yok**; hükümleri `belgrad` şehir maddesinde geçiyor. `belgrad-antlasmalari` ve `belgrad-antlasmasi--1739` de ölü |
| `sarki-rumeli` · `dogu-rumeli` | Doğu Rumeli vilâyetinin müstakil maddesi yok; `bulgaristan` ve `berlin-antlasmasi` içinde anlatılıyor |
| `93-harbi` | Doğrusu **`doksanuc-harbi`** |
| `domeke` · `domeke-meydan-muharebesi` | ⚠️ Kronolojide **1897-05-17 "Dömeke Meydan Muharebesi"** maddesi var; TDV karşılığı yok, kaynağı doğrulanmalı |
| `istanbul-antlasmasi` · `catalca` · `sipka` | Karşılığı yok; ilgili anlatı `balkan-savasi` ve `doksanuc-harbi` içinde |
| `krayova` · `tirgoviste` · `pitesti` · `buzau` · `kalafat` | Eflak şehirlerinin **hiçbirinin** müstakil maddesi yok. §15'in zincirleri bu yüzden `eflak` + `pasarofca-antlasmasi` üzerinden kuruldu |
| `soroka` · `orhei` · `tomarova` | Boğdan ținut merkezlerinin karşılığı yok — §16'nın kaynak notu |
| `bender` · `kartal` · `ismail-kalesi` | Bucak kalelerinin müstakil maddesi yok (`bucak` maddesi CANLI ama idarî birim maddesidir) |

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

## 15. ⭐ EFLAK NOKTA KÜMESİ — merkezin uygulayacağı kayıtlar

§12'nin çözümü. Kullanıcının *"şu bölgenin hepsi Eflak değil mi?"* sorusunun
doğrudan karşılığı. **Ben `yerlesimler.js`'e yazmadım**; aşağısı olduğu gibi
yapıştırılabilir.

### 15.1 Tarihî dayanak — Olt ırmağı

TDV `eflak` (Kemal Karpat): Eflak *"Büyük Eflak (Muntenia) ve Küçük Eflak (Oltenia)
olmak üzere ikiye ayrılır"*; ikisinin sınırı **Olt ırmağıdır**.

TDV `pasarofca-antlasmasi`, 21 Temmuz 1718 hükmü — kelimesi kelimesine:
> *"bütün Banat bölgesiyle birlikte Eflak'ın Oltu ırmağına kadar uzanan ve Küçük
> Eflak denilen batı yarısı … tamamen Avusturya'ya bırakılmıştır."*

TDV `belgrad`: *"Belgrad Antlaşması (1739) imzalandı ve şehir Osmanlılar'a teslim
edildi"* — Küçük Eflak da bu antlaşmayla geri döndü (18 Eylül 1739).

**Sonuç: iki ayrı dönem zinciri var.** Olt'un batısı 1718-1739 arası Avusturya,
doğusu kesintisiz vasal.

⚠️ **Slatina Olt'un DOĞU yakasındadır** — Avusturya dönemi ALMAZ. Krayova, Tırgu
Jiu, Rimnik ve Turnu Severin batıdadır, ALIR.

### 15.2 A kümesi — asgarî sekiz nokta (§12'de söz verilen)

Muntenia zinciri (Bükreş'in zinciriyle **birebir aynı**, yeni kırılma açmaz):

```js
{ ad:"Tırgovişte", tur:"sehir", lat:44.925, lon:25.457, g:1, k:3, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Piteşti", tur:"sehir", lat:44.857, lon:24.869, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Slatina", tur:"sehir", lat:44.427, lon:24.371, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Buzău", tur:"sehir", lat:45.150, lon:26.817, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Rimnik-i Sârat (Râmnicu Sărat)", tur:"kale", lat:45.383, lon:27.056, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
```

Oltenya zinciri (**vasal dönem ikiye bölünür**, arasına Avusturya girer):

```js
{ ad:"Krayova (Craiova)", tur:"sehir", lat:44.330, lon:23.795, g:1, k:3, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Tırgu Jiu", tur:"sehir", lat:45.035, lon:23.275, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Rimnik (Râmnicu Vâlcea)", tur:"sehir", lat:45.105, lon:24.375, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
```

### 15.3 B kümesi — ölçüm sonrası eklenen iki nokta

```js
{ ad:"Turnu Severin", tur:"kale", lat:44.632, lon:22.656, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Kımpulung (Câmpulung)", tur:"sehir", lat:45.269, lon:25.045, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
```

**Turnu Severin** §12'de yanlış çözülen sekiz noktadan biriydi ve Demirkapı
köşesini tutuyor; Krayova'ya 97 km, Tırgu Jiu'ya 66 km.
**Kımpulung** TDV `eflak`'ın saydığı tarihî şehirlerdendir (*"Cimpulung, Curtea de
Argeş, Târgoviște"*) ve Argeş-Dâmboviţa Karpat eteğini tutar — o kuşak boş kalırsa
Rimnik'in başına gelen olur, Erdel hücresine kapılır.

### 15.4 Kasten ALINMAYAN noktalar — gerekçeli

| Nokta | Neden alınmadı |
|---|---|
| **Kalafat** | Vidin'e **6 km**. VERI-YAPISI'nın 3 km kuralına yakın, üstelik gereksiz: motor hücre sınırını Tuna yatağına yaslar, Krayova hücresi doğunca Kalafat kendiliğinden Eflak'ta kalır. |
| **Focşani** | Şehir **Milcov'un iki yakasına** oturur ve Milcov, Eflak-Boğdan sınırıdır. Nokta hangi yakaya konursa karşı voyvodalığı boyar. Yerine Rimnik-i Sârat alındı (72 km kuzeydoğu köşe, sınır belirsizliği yok). |
| **Yergöğü · Turnu · İbrail** | Bunlar **gerçekten doğrudan Osmanlı**. TDV `eflak`: *"Brǎila (İbrâil) ve Giurgiu (Yergöğü, Yerkövü) bir süre doğrudan doğruya Osmanlı Devleti'ne bağlı kalmışlardır."* Kırmızı kalmaları doğru. |

### 15.5 Denetim — ölçüldü, temiz

| Kontrol | Sonuç |
|---|---|
| 3 km kuralı | ✅ On noktanın en yakını **Tırgovişte–Bükreş 75 km** |
| Değişmez 1 (sahipsizlik) | ✅ Her nokta 1281-1923 boyunca kesintisiz sahipli |
| Değişmez 2 — `1462-06-01` | ✅ madde var: *"Eflak seferi: Kazıklı Voyvoda"* |
| Değişmez 2 — `1718-07-21` | ✅ madde var: *"Pasarofça Antlaşması"* (`olaylar_ek5.js`) |
| Değişmez 2 — `1739-09-18` | ✅ madde var: *"Belgrad Antlaşması"* (`olaylar.js`) |
| Değişmez 2 — `1878-07-13` | ✅ madde var: *"Berlin Antlaşması"* (`olaylar.js`) |
| Değişmez 3 (`m:"Bükreş"`) | ✅ 1300/1400/1500/1600/1700/1800 kesitlerinin hiçbiri 1718-1739 penceresine düşmüyor, yeni çelişki üretmez |

**Bu küme yeni bir Değişmez 2 açığı yaratmıyor** — kullandığı dört kırılma
tarihinin dördünün de maddesi zaten var. Nokta eklemek geometriyi değiştirir,
kronolojiyi değiştirmez.

---

## 16. Boğdan nehir noktaları — Soroka · Orhei · Reni ölçümü

Merkez üçünü havale etti. **İkisi gerekli, biri gereksiz** — ölçtüm.

Prut-Dinyester kutusunda her yarım derecelik göze en yakın yerleşim mesafesi (km):

```
        26.5  27.0  27.5  28.0  28.5  29.0  29.5  30.0  30.5
 48.5K     1    37    71    67    67    84   112   143   171
 48.0K    45    68    94    98   115   132   130   135   150   ← Kuzey Besarabya BOŞ
 47.5K    24    58    39    48    77    83    74    84   107   ← Orta Besarabya BOŞ
 45.5K   117    79    40     7    31    21    19    57    78   ← Tuna ağzı DOLU
```

| Nokta | Karar | Ölçüm |
|---|---|---|
| **Soroka** | ✅ **GEREKLİ** | Bulunduğu gözde en yakın nokta **115 km**. Dinyester'in tam üzerinde (0 km), Oturum 16'nın 33 km yaslama yarıçapının çok içinde. |
| **Orhei** | ✅ **GEREKLİ** | Bulunduğu gözde en yakın nokta **77 km**. Orta Besarabya'nın tek ținut merkezi. |
| **Reni** | ❌ **GEREKSİZ** | En yakın nokta **Kalas 21 km**. Tuna ağzı zaten dolu (7-31 km). Üstelik Reni'ye doğrudan Osmanlı zinciri verilirse vasal Kalas'ın 21 km yanında **avuç içi kadar kırmızı ada** çıkar — kullanıcının Hotin'de şikâyet ettiği hayalet bölünmenin aynısı. |

```js
{ ad:"Soroka (Soroca)", tur:"kale", lat:48.158, lon:28.299, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı"}] },
{ ad:"Orhei", tur:"sehir", lat:47.383, lon:28.823, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı"}] },
```

⚠️ **Suçava/Roman/Birlad 1878'de Romanya olur, Soroka/Orhei 1812'de RUSYA olur.**
İkisi Prut'un doğusundadır, yani Besarabya'dır — Bükreş Antlaşması'yla (28 Mayıs
1812) Rusya'ya geçti ve 1878'de Romanya'ya dönmedi. Akkirman, Kili, Bender ve
Hotin de aynı tarihi taşıyor; zincir onlarla tutarlı.

🟡 **Yaslama tutmazsa yedek nokta:** Orhei Răut üzerindedir, Dinyester'e ~45 km.
Sınır nehre yaslanmazsa **Rezina** (47.748K / 28.961D) eklenir — sağ yakada,
nehre 1 km. Şimdilik önerilmedi; önce iki noktayla üretim görülmeli.

**Kaynak notu:** Soroka ve Orhei için TDV'de **madde yok** (`soroka`, `orhei`,
`tomarova` üçü de `<title>`ında "Arama" döndürdü). İkisi de Boğdan'ın standart
ținut merkezleridir; siyasî zincir TDV `bogdan` maddesinin genel çerçevesinden ve
Bükreş Antlaşması'nın Besarabya hükmünden türetildi.

---

## 17. ⭐ B BLOĞU — hatalar 11, Balkan ekseni 1859-1913 (ölçüm)

Onsekiz nokta, beş kesitte, delik-farkındalıklı nokta testiyle ölçüldü. Hem
Osmanlı gövdesi (`donemler.js`) hem yabancı devlet gövdesi (`devletler_harita.js`)
aynı anda soruldu — **iki cevabın birden gelmesi çakışma demektir.**

| Nokta | 1840 | 1880 | 1890 | 1900 | 1910 | 1913 |
|---|---|---|---|---|---|---|
| Sofya | 🔴 osm | bulgaristan | bulgaristan | bulgaristan | bulgaristan | — |
| Tırnova · Varna · Rusçuk | 🔴 osm | **🔴 osm + bulgaristan** | bulgaristan | bulgaristan | bulgaristan | — |
| **Filibe** | 🔴 osm | **🔴 osm + bulgaristan** | bulgaristan | bulgaristan | bulgaristan | — |
| **Eski Zağra** | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | **🔴 osm** | **🔴 osm** |
| **Tatarpazarcığı** | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | **🔴 osm** | **🔴 osm** |
| **Kragujevac · Çaçak** | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | **🔴 osm** | sirbistan |
| Kruşevac · Belgrad · Niş | 🔴 osm | sirbistan | sirbistan | sirbistan | sirbistan | sirbistan |
| Saraybosna | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | **🔴 osm + avusturya** | avusturya |
| Bükreş · Yaş | 🟠 vasal | 🟠 vasal + romanya | romanya | romanya | romanya | romanya |
| Yenişehir (Teselya) | 🔴 osm | 🔴 osm | yunanistan | yunanistan | yunanistan | yunanistan |
| Selânik · Üsküp | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | 🔴 osm | yunanistan/sirbistan |

### 17.1 🔴 md.3 — Sırbistan'ın kalbi 1912'ye kadar Osmanlı boyalı

**En ağır bulgu.** Sırbistan Berlin'de (13 Temmuz 1878) bağımsız oldu; Belgrad,
Kruşevac ve Niş haritada doğru şekilde Sırbistan rengine geçiyor. Ama
**Kragujevac ve Çaçak — Şumadya, yani prensliğin çekirdeği — 1910'da hâlâ
`DOGRUDAN` Osmanlı** ve ancak 1913'te Sırbistan oluyor.

Yani harita 1878-1912 arasında **Sırbistan'ı halka gibi çiziyor: dışı Sırp, ortası
Osmanlı.** Otuz beş yıllık hata.

Sebep CLAUDE.md §2: **Şumadya'da tek bir yerleşim noktası yok.** Belgrad ve
Semendire kuzeyde, Niş güneydoğuda; ortadaki büyük boşluk 1912'ye kadar Osmanlı
kalan Yenipazar/Priştine hücrelerine emiliyor.

**Kullanıcının md.3'te sorduğu "Belgrad ne zaman elden çıktı da geri alındı"nın
cevabı ise veride doğru:** Belgrad `d:` 1739-09-18 → 1867-04-18, sonra
`s:"sirbistan"`. 1867 garnizonların çekilmesidir (maddesi var). Fakat
**Sırbistan Prensliği 1830'dan beri özerktir** — `devletler.js` bile
`sirbistan-prensligi` kaydına `f:"1804-02-14"` yazmış. Harita 1830-1867 arası
Sırbistan'ı Eflak/Boğdan gibi **tâbi (`v:`)** değil, doğrudan Osmanlı çiziyor.
İki voyvodalık `v:` ile modellenirken Sırbistan'ın edilmemesi tutarsızlıktır.

**Düzeltme (#31):** Şumadya'ya en az iki nokta — **Kragujevac** (44.013K /
20.911D, 1818-1841 arası prensliğin başşehri) ve **Çaçak** (43.891K / 20.350D).

⚠️ Zincir **Belgrad'dan değil Semendire'den** kopyalanmalı. Belgrad 1427-1521
arası Macaristan'dır; Şumadya ise Sırp despotluğunun iç toprağıdır ve
Semendire'nin düştüğü **1459-06-20**'ye kadar Sırp kalır. Ayrıca Pasarofça'nın
kurduğu Habsburg "Sırbistan Krallığı" (1718-1739) Şumadya'yı içine alıyordu —
Semendire bunu zaten taşıyor, Belgrad'ın 1688-1690 işgali ise taşımıyor. İki nokta
Semendire ile birebir aynı kırılmaları alırsa **yeni Değişmez 2 açığı doğmaz.**

```js
{ ad:"Kragujevac", tur:"sehir", lat:44.013, lon:20.911, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1867-04-18",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1867-04-18"}] },
{ ad:"Çaçak", tur:"kale", lat:43.891, lon:20.350, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1867-04-18",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1867-04-18"}] },
```

**Düzeltme (#32) — ayrı karar:** Sırbistan 1830-1867 arası `v:` yapılacak mı?
Yapılırsa Belgrad/Semendire kaleleri `d:` kalır (Eflak'ta İbrail-Yergöğü modeli),
çevresi `v:` olur. **Merkezin kararı**; Değişmez 2 için 1830-08-15 Hatt-ı Şerîf'e
madde gerekir.

### 17.2 🔴 md.46-49 — Şarkî Rumeli haritada hiç yok, üstelik ters yönde

TDV `berlin-antlasmasi`, ikinci bölge tarifi — kelimesi kelimesine:
> *"idarî yönden bağımsız olmakla beraber **siyasî ve askerî yönden Osmanlı
> Devleti'ne tâbi**, … Bâbıâli'nin beş yıl süre ile tayin edeceği bir hıristiyan
> vali tarafından idare edilecek olan **Şarkî Rumeli eyaleti**"*

TDV `bulgaristan` vilâyetin sancaklarını sayıyor:
> *"**Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy** sancaklarından
> müteşekkil Doğu Rumeli vilâyeti oluşturuldu. **Prenslik 1885'te** Doğu Rumeli
> vilâyetini de topraklarına kattı."*

Haritada bu yedi yıllık ara katman **hiç yok** ve üç yerleşim **birbirine zıt iki
yönde** hatalı:

| Yerleşim | Veride yazan | Olması gereken | Hata |
|---|---|---|---|
| **Filibe** | `d:` 1413-07-05 → **1878-07-13**, sonra `s:"bulgaristan"` | 1878-1885 Osmanlı'ya tâbi vilâyet | **7 yıl erken** gidiyor |
| **Eski Zağra** | `d:` 1413-07-05 → **1923-10-29** | 1885'te Bulgaristan | **hiç gitmiyor — 38 yıl** |
| **Tatarpazarcığı** | `d:` 1413-07-05 → **1923-10-29** | 1885'te Bulgaristan | **hiç gitmiyor — 38 yıl** |
| **İhtiman** | `d:` 1413-07-05 → **1923-10-29** | 1878'de Bulgaristan Prensliği | **hiç gitmiyor — 45 yıl** |

Sonuç haritada şu: Filibe 1880'den itibaren Bulgar rengine geçerken 30 km
kuzeydeki Eski Zağra ve 35 km batıdaki Tatarpazarcığı 1923'e kadar Osmanlı
kalıyor — yani **Bulgaristan'ın içine sokulmuş bir Osmanlı kaması.**

**Düzeltme (#33):** dördünün de `d:` dönemi kapatılmalı.
- Filibe · Eski Zağra · Tatarpazarcığı: `d:` … → **1878-07-13**, sonra
  `v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti"}]`, sonra
  `s:[{f:"1885-09-18",t:"1923-10-29",d:"bulgaristan"}]`
- İhtiman: `d:` … → **1878-07-13**, sonra `s:"bulgaristan"` (Sofya sancağındadır,
  Şarkî Rumeli'ye girmez — Sofya ile aynı zinciri alır)

Her iki kırılmanın da maddesi **var**: 1878-07-13 Berlin (`olaylar.js`),
1885-09-18 Doğu Rumeli'nin katılması (`olaylar_ek.js`).

### 17.3 🔴 md.46-49 — Bulgaristan tâbi değil, bağımsız renkte çiziliyor

Aynı TDV cümlesi birinci bölgeyi de tarif ediyor: *"**Osmanlı Devleti'ne tâbi**,
iç işlerinde serbest, prensi halk tarafından seçilen, Bâbıâli tarafından tasdik
… bir Bulgaristan prensliği"*. Edirne Mütarekesi'nin şartı da aynı:
*"muhtar, milis teşkilâtı olan ve **Bâbıâli'ye vergi veren** bir Bulgaristan
Emâreti"* (TDV `doksanuc-harbi`).

**Kullanıcının sorusu — "Bulgaristan özerk mi bağımsız mı" — tam buraya oturuyor.
Cevap: 1878-1908 arası ÖZERK, 5 Ekim 1908'den sonra BAĞIMSIZ.** Haritada ise
Sofya, Tırnova, Varna, Şumnu, Rusçuk, Silistre ve Vidin 1877-12-10/1878-07-13'te
doğrudan `s:"bulgaristan"` oluyor, yani **otuz yıl erken bağımsız renkte.**

Eflak ve Boğdan aynı hukukî konumdayken `v:` ile modellenmiş. Bu bir tutarsızlık.

**Düzeltme (#34):** yedi Bulgar yerleşiminde `s:"bulgaristan"` başlangıcı
`v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}]` ile değiştirilip
`s:` 1908-10-05'ten başlatılmalı. Her iki tarihin de maddesi var.
⚠️ Sofya ve Plevne `1877-12-10` taşıyor (Plevne'nin düştüğü gün); Sofya'ya Ruslar
**4 Ocak 1878'de** girdi. Tarih Plevne'den kopyalanmış görünüyor — **#35**.

### 17.4 🔴 md.54 — Bosna: işgal deseni doğru, ilhak günü geç tepki veriyor

`isg:` altyapısı çalışıyor: Saraybosna, Mostar ve Banaluka
`isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}]`
taşıyor ve TDV `bosna-hersek` bunu doğruluyor: *"29 Temmuz'da başlayan işgal
20 Ekim 1878'de tamamlandı."*

🔴 **Ama 1910 kesitinde Saraybosna hem `DOGRUDAN#2366` hem `dvl:avusturya`.**
İlhak 1908-10-05'te yazılı, Osmanlı gövdesi ise ancak 1912'de çekiliyor —
**~4 yıllık örtüşme**, Solnok'la (§13) aynı sınıf. Sebep aynı: Bosna'nın içinde
üç nokta var ama çevresi (Yenipazar sancağı) 1912'ye kadar Osmanlı, gövde
kopmuyor. **#36**

🟡 **Tarih notu (#37):** TDV `bosna-hersek` ilhakı *"7 Ekim 1908"* diyor, TDV
`balkan-savasi` ise 3 Ekim'den *"iki gün sonra"* diyerek 5 Ekim'i işaret ediyor.
**İki TDV maddesi çelişiyor.** Veri 1908-10-05 taşıyor ve Bulgaristan'ın
bağımsızlık ilânıyla aynı gün. İki günlük fark uğruna zincir değiştirilmedi;
merkez isterse `bosna-hersek` esas alınabilir.

### 17.5 🟢 Doğru çıkanlar — dokunulmamalı

| Konu | Ölçüm |
|---|---|
| **md.28·29·30** Eflak-Boğdan birleşmesi | Bükreş ve Yaş 1880'de **hem vasal hem romanya**, 1890'dan itibaren temiz Romanya. Maddeler var (1859-01-24 Cuza, 1862-02-21 Romanya adı). Kullanıcının *"Boğdan vasal görünüyor Eflak görünmüyor"* şikâyeti **birleşmeyle ilgili değil** — §12/§15'teki emilme sorunudur, Eflak'ın içinde tek nokta olmasıdır. **Geriye dönük düzeltme gerekmiyor.** |
| **md.3** Belgrad'ın 1867'de bırakılması | Veri ve madde doğru (1867-04-18) |
| **md.38·39** 93 Harbi | Ayastefanos, Berlin, mütareke maddeleri zaten vardı; eksik olan askerî safhalardı → D-1…D-4 yazıldı |
| **md.49** Teselya | 1881-07-02 maddesi var, Yenişehir/Tırhala `s:"yunanistan"` 1881-07-02, harita 1890'da doğru. Dömeke maddesi de var (1897-05-17) |
| **md.57·58** Balkan savaşları | Yanya, Edirne'nin düşüşü, Londra, Edirne'nin geri alınışı, İstanbul ve Atina antlaşmaları — hepsi vardı; eksik olan savaşın ilk iki haftasıydı → D-5, D-6 |

### 17.6 ⚠️ Kendi ölçüm hatam — kayda geçsin

Bu bloğa *"93 Harbi kronolojide hiç yok"* diye başladım. Yanlıştı. Tarama
`grep 't:"187[5-9]-…" … b:"…"` kalıbıyla yapılmıştı; bu kalıp `t:` ile `b:`nin
**aynı satırda** olmasını şart koşar, oysa kronoloji kayıtlarının çoğu çok
satırlı. Ayastefanos, Berlin, Edirne Mütarekesi, Doğu Rumeli 1885, Bosna ilhakı,
Londra, Edirne'nin geri alınışı ve İstanbul Antlaşması maddelerinin hepsi vardı.

Sekiz mükerrer madde yazıldı ve **`denetle.py`'nin 5. kontrolü hepsini yakaladı**;
silindiler, blok 14 maddeden 6'ya indi. Yayına mükerrer madde gitmedi.

📌 **Kural:** kronoloji dosyaları `grep` ile SAYILMAZ. `node -e` ile eval edilip
nesne olarak sayılır. Bu, `OGRENILENLER.md`'ye girmeye değer.

---

## 19. ⭐ MERKEZİN DÖRT KARARININ UYGULAMA KARŞILIĞI (31 Temmuz, kilit sonrası)

🔒 Girdi kilitli — Oturum 16'nın kara-kısıtlı Voronoi koşusu sürüyor. Aşağısı
kilit kalkınca uygulanacak; **hiçbiri `yerlesimler.js`'e benim tarafımdan
yazılmadı.**

### 19.1 #32 — Sırbistan `v:` olacak. TDV kesin tarih veriyor

Merkezin kararı ("1867'ye kadar değil **1878'e kadar**") TDV `sirbistan` ile
birebir doğrulanıyor:

> *"Nihayet **17 Ekim 1830**'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir
> idare elde etti. Ferman Miloş'u başknez olarak tanırken … **kale muhafızları
> dışında** Sırp topraklarında hiçbir Türk'ün oturmayacağı gibi şartlar içeriyordu."*
>
> *"**1867**'de Özerk Sırp yönetimi Osmanlı askerî idaresinde bulunan **Belgrad,
> Fethülislâm (Kladovo), Semendire ve Böğürdelen (Šabac)** kalelerindeki
> garnizonların geri çekilmesiyle buralardaki egemenliğini güçlendirdi. Osmanlı
> Devleti'ne bağlı bir devlet şeklinde teşkilâtlanan Sırbistan'ın Osmanlılar'dan
> **tamamen kopuşu 1877-1878** Osmanlı-Rus Savaşı sonucunda…"*

**"Kale muhafızları dışında" ifadesi modelin tamamını veriyor** — bu, Eflak'taki
İbrail/Yergöğü yapısının aynısıdır. İki sınıf var:

| Sınıf | Yerleşim | 1830-1867 | 1867-1878 | 1878 sonrası |
|---|---|---|---|---|
| **Kale (garnizon)** | Belgrad · Semendire | 🔴 `d:` doğrudan | 🟠 `v:` tâbi | `s:"sirbistan"` |
| **Kır (garnizonsuz)** | Kragujevac · Çaçak *(yeni)* | 🟠 `v:` tâbi | 🟠 `v:` tâbi | `s:"sirbistan"` |

⚠️ **Beklenen görüntü — bu bir hata değildir.** 1830-1867 arasında Belgrad ve
Semendire, açık tonlu Sırbistan'ın içinde **iki koyu kırmızı nokta** olacak.
Hotin'de kullanıcının *"hep tek başına görünüyor"* dediği şeyin aynısı ve burada
**doğrudur** — TDV cümlesi tam olarak bunu tarif ediyor.

**Mevcut iki kayıtta değişecek:**
```
Belgrad    d:  {f:"1739-09-18", t:"1867-04-18"}   ← DEĞİŞMİYOR
           v:  {f:"1867-04-18", t:"1878-07-13", k:"Sırbistan Prensliği"}   ← EKLE
           s:  {f:"1867-04-18",...} → {f:"1878-07-13", t:"1923-10-29", d:"sirbistan"}
Semendire  aynısı, birebir
```

**Yeni iki kayıt** (§17.1'deki zincire `v:` eklenmiş hâli):
```js
{ ad:"Kragujevac", tur:"sehir", lat:44.013, lon:20.911, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}], v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Çaçak", tur:"kale", lat:43.891, lon:20.350, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}], v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
```

**Değişmez 2 — üç kırılmanın üçünün de maddesi VAR, yeni madde gerekmiyor:**

| Kırılma | Madde | Dosya |
|---|---|---|
| `1830-11-08` | *"Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon şartı"* | `olaylar_ek.js` |
| `1867-04-18` | *"Belgrad ve Sırbistan kalelerindeki son Osmanlı garnizonlarının çekilmesi"* | `olaylar_ek5.js` |
| `1878-07-13` | *"Berlin Antlaşması"* | `olaylar.js` |

🟡 **#39 — tarih çelişkisi, karar merkezin.** TDV fermanı **17 Ekim 1830**'a
koyuyor, kronoloji maddesi **1830-11-08** taşıyor (muhtemelen fermanın Belgrad'da
okunduğu gün). Aradaki 22 gün ±30 penceresinin içinde, **yani hangisi seçilirse
seçilsin Değişmez 2 sağlanıyor.** Zincirlere maddedeki tarihi (`1830-11-08`)
yazdım ki veri ile madde aynı günde dursun. TDV'nin tarihi benimsenirse **ikisi
birlikte** taşınmalı.

🟡 **#40 — iki nokta daha, opsiyonel.** TDV dört garnizon kalesini adıyla sayıyor;
ikisi `yerlesimler.js`'te **yok**. Eklenirlerse Sırbistan'ın Tuna ve Sava
köşeleri de tutulur ve zincirleri Belgrad'ınkiyle birebir aynı olur:
**Fethülislâm (Kladovo)** 44.606K / 22.610D — Demirkapı, Vidin'e 68 km ·
**Böğürdelen (Šabac)** 44.750K / 19.694D — Sava kıyısı, Belgrad'a 60 km.
İkisi de 3 km kuralını rahat geçiyor.

### 19.2 #37 — Bosna: karar verilmedi, İŞARETLENDİ

Merkezin talimatına uyuldu. **`isg:` örtüsüne dokunulmadı**, veri `1908-10-05`
taşımaya devam ediyor. §17.4'teki kayıt "kaynak çelişiyor" olarak duruyor:

| Kaynak | Verdiği tarih |
|---|---|
| TDV `bosna-hersek` | *"**7 Ekim 1908**'de buranın resmen Avusturya-Macaristan toprağı olduğu ilân edildi"* |
| TDV `balkan-savasi` | 3 Ekim'den *"**iki gün sonra**"* → 5 Ekim |
| Veri (`yerlesimler.js`) | `1908-10-05` |

🔴 **Üçüncü kaynak olmadan seçilmeyecek.** İki TDV maddesi çelişiyorsa birini
seçmek `CLAUDE.md §4`'ün "tarih uydurma" yasağına girer. Karışmanın sebebi
muhtemelen şu: **5 Ekim 1908'de Bulgaristan bağımsızlığını ilân etti** ve aynı
tarih iki ayrı olay için kullanılıyor.

### 19.3 #38 — umbrella maddeler: ÖLÇÜLDÜ, ikisi de güvenli

Merkezin şartı ("emekliye ayırmadan önce o maddenin tek çapa olduğu bir kırılma
var mı ölç") yerine getirildi. Değişmez 2'nin kendi tanımıyla, her kırılmanın en
yakın maddesi hesaplanıp madde tek tek çıkarıldı:

| Ölçüm | `1877-04` | `1912-10` |
|---|---|---|
| Bu madde kaç kırılmanın **en yakın** maddesi? | **0** | **0** |
| Silinince `d:`/`v:` açığı (taban 0) | **0** — fark 0 | **0** — fark 0 |
| Silinince `s:` açığı (taban 107) | **107** — fark 0 | **107** — fark 0 |

✅ **İkisi de emekliye ayrılabilir.** Hiçbir kırılmanın tek çapası değiller;
ayrıntılı maddeler (D-1 `1877-04-24`, D-5 `1912-10-08` ve mevcut Plevne, Yanya,
Edirne, Londra maddeleri) o pencereleri zaten kapsıyor. Sıralama tersine
çevrilmeden **önce silinip sonra yazılmasına gerek yok** — ayrıntılar hâlihazırda
yayında.

### 19.4 #18 — üretim

Bekleniyor. Kilit kalkınca uygulanacak liste, öncelik sırasıyla:
**#33** (Şarkî Rumeli — 4 kayıt) · **#34** (Bulgaristan `v:` — 7 kayıt) ·
**#31+#32** (Sırbistan — 2 yeni + 2 mevcut kayıt) · **§15** (Eflak — 10 kayıt) ·
**§16** (Soroka + Orhei — 2 kayıt).
Hepsi birlikte uygulanırsa **+14 yeni yerleşim**; `denetle.py`'de
`BEKLENEN_YERLESIM` 951 → 965.

---

## 19.5 #40 — Böğürdelen tam kaynaklı çıktı, Fethülislâm kaynaksız

TDV'de **`bogurdelen` müstakil ve tarih dolu bir madde**; zincir baştan sona
oradan kurulabildi. `fethulislam`, `kladovo` ve `sabac` üçü de **ÖLÜ**.

### Böğürdelen (Šabac) — her tarihi TDV'de yazılı

| Tarih | TDV `bogurdelen`'in ifadesi |
|---|---|
| **1471** | *"Fâtih Sultan Mehmed zamanında Osmanlılar'ın eline geçen bu önemli mevkide 1471'de ahşap ve topraktan bir hisar yapıldı"* |
| **Şubat 1476** | *"1475 sonlarına doğru başlayan kuşatma 1476 Şubatında kalenin ele geçirilmesiyle sonuçlandı"* (Mátyás Corvin) |
| **7 Temmuz 1521** | *"şiddetli bir kuşatma neticesinde fethedildi (7 Temmuz 1521)… **Kanûnî Sultan Süleyman'ın ilk fethettiği kale**"* |
| **17 Ağustos 1717** | *"savaşsız olarak Avusturya kuvvetlerine terkedilen şehir Belgrad Antlaşması'na (1739) kadar Avusturya'nın elindeydi"* |
| **24 Nisan 1788** | *"24 Nisan 1788'de yeniden Avusturyalılar'ın hâkimiyetine girdiyse de Ziştovi Antlaşması gereğince 1791'de tekrar Osmanlılar'a geri verildi"* |
| **26 Ocak 1806** | *"ilk Sırp ihtilâli neticesinde (26 Ocak 1806) kale Kara Yorgi'ye teslim edildi"* |

```js
{ ad:"Böğürdelen (Šabac)", tur:"kale", lat:44.750, lon:19.694, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1471-01-01",d:"macaristan"},{f:"1476-02-01",t:"1521-07-07",d:"macaristan"},{f:"1717-08-17",t:"1739-09-18",d:"avusturya"},{f:"1788-04-24",t:"1791-08-04",d:"avusturya"},{f:"1806-01-26",t:"1813-10-05",d:"sirbistan"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1471-01-01",t:"1476-02-01"},{f:"1521-07-07",t:"1717-08-17",y:"kusatma"},{f:"1739-09-18",t:"1788-04-24",y:"antlasma"},{f:"1791-08-04",t:"1806-01-26",y:"antlasma"},{f:"1813-10-05",t:"1867-04-18",y:"savas"}], v:[{f:"1867-04-18",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
```

Zincir kesintisiz, çakışmasız, sıfır uzunluksuz. **1806-1813 Sırp penceresi**
TDV `bogurdelen` 1806'da anlatımı kestiği için `sirbistan` maddesinin
*"Sırplar'ın isyanı 1813'te tamamıyla bastırılarak Belgrad ele geçirildi"*
cümlesinden ve mevcut `1813-10-05` maddesinden kapatıldı.

⚠️ **Kasten atlanan iki dönem:** TDV *"Şehir 1688 ve 1695'te kısa süreli olarak
elden çıktı"* diyor ama **gün vermiyor.** Yıl uydurmamak için zincire konmadı;
kaynak bulunursa iki kısa `s:"avusturya"` penceresi eklenebilir (**#46**).

### 🔴 Zincir yedi kırılma açıyor — dördünün maddesi yoktu

| Kırılma | Durum | Karşılığı |
|---|---|---|
| `1471-01-01` | ✅ madde var (0 gün) | — |
| `1476-02-01` | 🔴 **YOK, 176 gün** | **E-1** |
| `1521-07-07` | 🔴 **YOK, 53 gün** | **E-2** |
| `1717-08-17` | ✅ var (1 gün, Belgrad'ın kaybı) | — |
| `1739-09-18` · `1791-08-04` · `1813-10-05` · `1867-04-18` · `1878-07-13` | ✅ var | — |
| `1788-04-24` | 🔴 **YOK, 75 gün** | **E-3** |
| `1806-01-26` | 🟡 "var" ama en yakın madde **Mekke'nin Vehhâbîlere kaybı** — 6 gün ötede, konusu bambaşka | **E-4** |

### ⚠️ E bloğu bu belgede bekliyor, `olaylar_ek10.js`'te DEĞİL

Dört maddeyi yazdım, `olaylar_ek10.js`'e koydum ve **denetim yakaladı**:

```
Değişmez 2t  ✗  kırılmasız madde: 70 (tavan 67)     SONUÇ: İHLAL VAR
```

Doğru davranış bu — yerleşim henüz yok, dolayısıyla maddeler hiçbir kırılmaya
denk gelmiyor. **Çıkardım, depo yeşil kaldı** (`984 madde · SONUÇ: temiz`).

🔴 **Bu bir sıralama kısıtı ve merkezin bilmesi şart:** Böğürdelen kaydı ile dört
madde **AYNI ADIMDA** uygulanmalı. Önce yerleşim eklenirse **Değişmez 2** kırılır
(dört maddesiz kırılma); önce maddeler eklenirse **Değişmez 2t** kırılır. İkisi
birlikte gidince ikisi de sağlanır ve `2t` 67 tavanına geri düşer.

### E bloğunun tam metni — tek nüsha burada

⚠️ Bu dört madde `olaylar_ek10.js`'e yazılıp **aynı oturumda çıkarıldı**, yani
**git geçmişinde YOK.** Aşağısı tek nüshadır; Böğürdelen kaydıyla birlikte
`olaylar_ek10.js`'in sonuna, `];`den hemen önce yapıştırılacak.

```js
{ t:"1476-02-01", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Böğürdelen'in Macarlara kaybı — Sava hattındaki ilk gedik",
  gun:"Şubat 1476", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"Fatih Sultan Mehmed, Macar Kralı Mátyás Corvin",
  d:"Fâtih Sultan Mehmed zamanında Osmanlı eline geçen ve daha önce Zaslon adıyla anılan mevkide 1471'de ahşap ve topraktan bir hisar yapılmıştı. Belgrad'ı tehdit eden bir noktada bulunduğu ve buradan Macaristan ile Avusturya'nın güney bölgelerine kolayca akın yapılabildiği için kale, adını da bu işlevden alıyordu — Böğürdelen, \"yandan vuran tabya\" demektir. Macar Kralı Mátyás Corvin 1475 sonlarına doğru kaleyi kuşattı ve 1476 şubatında ele geçirdi. Kuşatmayı anlatan Szabács viadala adlı Macar destanı, XV. yüzyıl Macar tarih şiirlerinin metni günümüze ulaşan en uzun örneklerindendir. Macarlar bölgede bir banlık kurdu ve kaleyi taştan yeniden tahkim ederek serhad hisar zincirinin halkası yaptılar. Osmanlılar 1492'de geri almayı denediler ve başaramadılar; kale kırk beş yıl Macar elinde kaldı.",
  kaynak:"bogurdelen" },

{ t:"1521-07-07", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Böğürdelen'in fethi — Kanûnî'nin aldığı ilk kale ve Belgrad kararının verildiği yer",
  gun:"7 Temmuz 1521", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"Kanûnî Sultan Süleyman, Rumeli Beylerbeyi Ahmed Paşa",
  d:"Kanûnî Sultan Süleyman'ın birinci Macaristan seferinde bölgeye gönderilen Rumeli Beylerbeyi Ahmed Paşa'nın kuvvetleri, şiddetli bir kuşatmanın ardından kaleyi 7 Temmuz 1521'de aldı. Böğürdelen, Kanûnî'nin saltanatında fethedilen ilk kaledir. Padişah fetihten sonra bizzat kaleye girdi ve şehrin imarını emretti; Belgrad'ın fethine dair kararlar da burada alındı — yani 29 Ağustos 1521'de düşecek olan Belgrad'ın planı Böğürdelen'de yapıldı. Kale bundan sonra iki yüz yıla yakın Osmanlı elinde kaldı; önce Rumeli, 1580'den itibaren Bosna eyaletine, ardından kısa süre Semendire ve nihayet İzvornik sancağına bağlandı. Haritada bu tarih Sava hattının Osmanlı lehine kapandığı gündür.",
  kaynak:"bogurdelen" },

{ t:"1788-04-24", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Böğürdelen'in ikinci Avusturya işgali — Sava cephesinin açılması",
  gun:"24 Nisan 1788", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"I. Abdülhamid, Avusturya İmparatoru II. Joseph",
  d:"Avusturya'nın 9 Şubat 1788'de Rusya'nın yanında savaşa girmesinin ardından Sava hattı yeniden cephe oldu ve Böğürdelen 24 Nisan 1788'de Avusturya hâkimiyetine geçti. Kale daha önce 17 Ağustos 1717'de savaşsız olarak Avusturya'ya terkedilmiş ve Belgrad Antlaşması'na (1739) kadar elde tutulmuştu; o dönemde nüfusu öylesine azalmıştı ki şehirde otuz dört hıristiyan evi kalmış, hiç müslüman kalmamıştı. 1739-1788 arasındaki Osmanlı devrinde nüfus yeniden 1500-2000'e çıkmıştı. İkinci işgal Ziştovi Antlaşması'yla (4 Ağustos 1791) sona erecek ve kale Osmanlılar'a iade edilecekti.",
  kaynak:"bogurdelen" },

{ t:"1806-01-26", k:"kayip", etiket:["toprak-kaybi","isyan"],
  b:"Böğürdelen'in Kara Yorgi'ye teslimi — Birinci Sırp İsyanı'nda ilk kale",
  gun:"26 Ocak 1806", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"III. Selim, Karadjordje (Kara Yorgi) Petroviç",
  d:"1804'te Belgrad'daki dayı ve yamakların baskısına tepki olarak başlayan, sonra milliyetçi bir karakter kazanan ilk Sırp ihtilâli sırasında Böğürdelen Kalesi 26 Ocak 1806'da Kara Yorgi'ye teslim edildi. Sava üzerindeki bu kale, isyancıların ele geçirdiği ilk büyük Osmanlı istihkâmıdır ve Belgrad'ın düşüşünü haber verir. İsyan 1813'te bastırılıp Belgrad geri alınınca kale de Osmanlı idaresine döndü; ancak 1830 fermanının garnizon şartıyla Böğürdelen, Belgrad, Semendire ve Fethülislâm ile birlikte özerk Sırbistan'ın içinde Osmanlı askerinin kaldığı dört kaleden biri olarak tanımlandı ve 1867'de garnizonu çekilene kadar bu statüde kaldı. ⚠️ Bu madde yazılana kadar haritadaki 1806 kırılmasına en yakın kronoloji maddesi \"Mekke'nin Vehhâbîlere kaybı\" idi — altı gün ötede ve konusu bambaşka.",
  kaynak:"bogurdelen" },
```

### Fethülislâm (Kladovo) — 🔴 kaynak yok, zincir kurulamadı

`fethulislam` · `kladovo` · `sabac` üçü de `<title>`ında "Arama" döndürdü.
Böğürdelen'de olduğu gibi tarih tarih izlenebilecek bir madde **yok**.

**Önerim: şimdilik EKLEME.** Gerekçe: zinciri kaynaksız kalır ve Böğürdelen'in
zincirinden kopyalanamaz — Böğürdelen 1471-1476 ve 1521'de Macar/Osmanlı arasında
el değiştirdi, Kladovo ise Demirkapı'da bambaşka bir hikâyeye sahip. Uydurulmuş
bir zincir `CLAUDE.md §4`'ün yasağına girer.

**Alternatif:** merkez isterse standart akademik kaynakla ayrı bir tur yapılır;
o zaman **#47** olarak açılsın. Coğrafî gerekçe güçlü — Kladovo eklenmezse
Sırbistan'ın Demirkapı köşesi 1878'e kadar Osmanlı kalan Vidin'in peteğine
emilir, yani §17.1'deki Şumadya hatasının küçük bir kopyası doğar.

---

## 19.6 #39 CEVAP — madde kaynağı 8 Kasım'ı DOĞRULAMIYOR, TDV kazanıyor

Merkezin sorusu: *"`1830-11-08` maddesinin kendi `kaynak:` alanı ne diyor ve o
kaynak bu günü doğruluyor mu?"* Ölçüldü:

```
t:       "1830-11-08"
b:       "Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon şartı"
gun:     "1830"              ← 🔴 YIL HASSASİYETİ, gün değil
kaynak:  "sirbistan"         ← TDV'nin "17 Ekim 1830" diyen maddesinin ta kendisi
```

**İki bulgu, ikisi de aynı yöne gösteriyor:**

1. `kaynak:` alanı **TDV `sirbistan`** — yani maddenin dayandığı kaynak, gününü
   **17 Ekim 1830** olarak veren maddedir. Kaynak 8 Kasım'ı desteklemiyor.
2. Maddenin **kendi `gun:` alanı yalnız "1830"** yazıyor. Yani maddeyi yazan
   oturum **günü bilmediğini kendisi kaydetmiş**; `t:` alanındaki `11-08` bir
   dolgu, kaynaklı bir tarih değil.

✅ **Merkezin kuralı gereği sonuç: TDV'nin `1830-10-17`'si kazanır.** Madde ve
veri **birlikte** taşınır. Değişmez 2 ölçüldü — `1830-10-17`'de maddenin
kendisi 0 gün mesafede olacağı için açık doğmaz.
📌 `gun:` alanı da `"17 Ekim 1830"` olarak düzeltilmeli, yoksa aynı belirsizlik
kayıtta kalmaya devam eder.

🔴 **#43 — aynı maddede ikinci kusur.** `d:` metni garnizon kalelerini
*"Belgrad, Semendire, **Şabac, Böğürdelen** ve Fethülislâm"* diye **beş** sayıyor.
**Šabac ile Böğürdelen aynı şehirdir** — Böğürdelen, Šabac'ın Osmanlıca adıdır ve
TDV maddesinin başlığı budur. TDV dördü sayıyor: *"Belgrad, Fethülislâm (Kladovo),
Semendire ve Böğürdelen (Šabac)"*. Madde metninden `Şabac,` çıkarılmalı.

⚠️ **Bu kusur #40'ı doğrudan ilgilendiriyor:** merkez Böğürdelen'i eklerken
**ayrıca bir "Šabac" kaydı AÇMAMALI.** Varat/Varad ile Afyon/Karahisâr-ı Sâhib
vakalarının aynısı olur (`CLAUDE.md §11`) — bu sefer aynı noktada iki kayıt
değil, aynı şehir için iki ad.

---

## 19.7 #41 CEVAP — Dömeke maddesinin kaynağı iddiayı TAŞIMIYOR

```
t:      "1897-05-17"      b: "Dömeke Meydan Muharebesi"
gun:    "17 Mayıs 1897"   kisiler: "Edhem Paşa"
kaynak: "yunanistan"      ← slug CANLI, ama...
```

TDV `yunanistan` maddesi **Dömeke'yi hiç anmıyor** ve savaşa hiçbir gün
vermiyor; tek söylediği *"Yunanistan buna uymayınca Osmanlı Devleti ile
Yunanistan arasında savaş çıktı (1897)"*. **Slug canlı ama iddiayı taşımıyor** —
bu, ölü slug tuzağının kardeşi ve `<title>` kontrolünün yakalayamadığı bir sınıf.

Aramayı genişlettim. **`tesalya` CANLI** (dikkat: `teselya` da canlı, iki ayrı
yazım da madde döndürüyor) ve Dömeke'yi anıyor — ama savaş bahsinde değil, bir
yol güzergâhı sayarken: *"Cumapazarı Tırhala'dan Karditsa ve Çatalca üzerinden
Dömeke'ye (Domokos)… giden yol üstünde"*. Savaşı ise şöyle veriyor:

> *"1890'ların sonunda Yunan milliyetçilerinin tahriki Osmanlı-Yunanlı savaşına
> yol açtı (**7 Nisan - 18 Mayıs 1897**). Savaş süresince **Hâfız Abdülezel Paşa**
> kumandasındaki Osmanlı ordusu bütün Tesalya'yı yeniden zaptetti."*

**Üç sonuç:**

| # | Bulgu |
|---|---|
| **#41** | `kaynak:"yunanistan"` **yanlış** — o madde Dömeke'yi anmıyor. `kaynak:"tesalya"` yapılmalı ve **17 Mayıs günü TDV'de YOK**; standart akademik kaynaktan geliyor. Madde metnine A-2'deki (Crnojeviç 1482) gibi açık bir not düşülmeli. **Madde SİLİNMEYECEK** — muharebe gerçek, yalnız kaynağı yanlış gösterilmiş |
| **#44** | 🟡 **Savaşın başlangıç tarihi çelişiyor.** Kronoloji `1897-04-17` diyor (Osmanlı'nın savaş ilânı), TDV `tesalya` **7 Nisan - 18 Mayıs 1897** diyor. On günlük fark. #37 disiplini uygulandı: **karar verilmedi, işaretlendi** |
| **#45** | 🟡 **Kumandan atfı ayrışıyor.** Madde `kisiler:"Edhem Paşa"` diyor, TDV `tesalya` **Hâfız Abdülezel Paşa** diyor. İkisi de savunulabilir — Edhem Paşa başkumandandı, Abdülezel Paşa ise Dömeke'de düşen tümen kumandanıydı. İki isim birlikte yazılabilir |

---

## 21. CETİNJE — MOTOR'un sorusuna cevap

# `kasitli_bosluk: true`

**Kaynak: TDV `karadag` (birincil) + TDV `podgorica` + TDV `iskodra`.**

### Neden — TDV bölgeyi kelimesi kelimesine "devletsiz" tarif ediyor

> *"Karadağ, Osmanlı öncesi sosyopolitik yapılarla bağlantısı az olan ya da hiç
> olmayan **göçebe kabilelerin oluşturduğu gevşek bir konfederasyondu**."*

Bu, MOTOR'un "kabile bölgesi, hiçbir devletin fiilî denetiminde olmayan alan"
tanımının birebir karşılığıdır. TDV aynı yapıyı Slav göçüne kadar geri götürüyor:
eski Balkan halkları *"**kendi otonom yaşam tarzlarını sürdürebildikleri dağlara
çekildiler**"*. Karadağlılar 1856 Paris Kongresi'nde de aynı iddiayı resmen ileri
sürdüler: *"Osmanlılar'ın **hiçbir zaman topraklarına hâkim olamadığı**…"*

TDV ayrıca **ova ile dağı açıkça ayırıyor** — cevabın anahtarı bu:

> *"**Kadîm Zeta'nın önemli bir kısmı** İşkodra, Dukakin, Prizren, Vulçıtrın ve
> Hersek gibi diğer sancaklar arasında bölünmüş ve **düzenli bir şekilde
> yönetilmiştir**."*

Yani Zeta'nın yönetilen kısmı **ovadır**; Çetine vladikasına bağlı beş nahiye ise
istisnadır ve Osmanlı idaresi altında bile *"idareciler mahallî işlere ve halkın
yaşayış tarzına fazlaca müdahale etmediler"*.

### Soru 1 — 1482 öncesi Lovćen eteğinde fiilî otorite var mıydı?

**Nominal iddia vardı, fiilî idare yoktu.** Duklja → Zeta → 1189'da Sırbistan
(*"bir tür özel statü"*) → XIII. yüzyıl ikinci yarısında Sırbistan çözülünce Zeta
büyük ölçüde bağımsız, ama *"yerel feodal beylerin komşularıyla ya da birbirleriyle
sürekli mücadeleleri yüzünden **politik istikrara kavuşamadı**"*. 1421'de son
Balšić, Zeta'yı Sırp despotuna miras bıraktı; ardından Venedik (Crnojevići
desteğiyle) ve Osmanlılar bölgeyi çekiştirdi. Hiçbiri dağa yerleşmedi.

### Soru 2 — Dağlık iç kesim "yönetilen toprak" sayılabilir mi?

**Hayır.** Yukarıdaki üç alıntı bunu doğrudan söylüyor. En çarpıcı teyit TDV
`podgorica`'dan geliyor ve **üç yüz yıl sonrasına** ait:

> *"XVIII. yüzyılda şehir **Karadağ dağlarındaki soyguncu aşiretlerin saldırılarını
> bertaraf etmek için** altı tabya ile güçlendirildi, üç kapılı surlarla korumaya
> alındı."*

Ovadaki Osmanlı kasabası, XVIII. yüzyılda hâlâ yanı başındaki dağa karşı
tahkim ediliyor. Dağ, o tarihte bile yönetilen toprak değil.

### Soru 3 — 1482'de neden Cetinje? Önceki merkez neredeydi, veride var mı?

**Zincir:** TDV `iskodra` — Venedik İşkodra'yı **1479'a kadar** tuttu, Fâtih uzun
bir kuşatmadan sonra antlaşmayla aldı. TDV `karadag` — *"İlk Osmanlı idaresi
**Fâtih Sultan Mehmed döneminin son yıllarında** tesis edildiyse de **onun vefatı
üzerine Crnojevići bazı yerleri geri almayı başardı**."* (Fâtih 3 Mayıs 1481'de
öldü — 1481-82 penceresi buraya oturuyor.)

**Önceki merkez Žabljak'tı ve Osmanlı eline geçmişti.** TDV `iskodra`, 890 (1485)
tahririnde İskenderiye sancağının kalelerini sayıyor: *"İpek'le (Peć) Podgorica,
Drivasto, **Zabljak** ve Medun kaleleri de sancağa dahildi."* Yani Žabljak
**en geç 1485 tahririnde Osmanlı kalesidir**; Crnojevići ovayı kaybedip dağa
çekilmiştir. ⚠️ TDV Žabljak'ın düşüş **yılını vermiyor** — "1479 ile 1485 arası"
denebilir, daha kesini uydurma olur.

**Veride var mı? YOK.** TDV'nin saydığı dört kaleden **hiçbiri**
`yerlesimler.js`'te yok. 41,8-43,2K / 18,4-20,2D kutusunda **yalnızca iki nokta**
var: Cetinje ve İşkodra, aralarında 61 km.

### 🔴 Asıl mesele bayrak değil, eksik nokta — #48

`true` bugünkü hâli korur ve doğrudur. **Ama Cetinje'nin peteği şu anda hem dağı
hem ovayı temsil ediyor**, çünkü ovada tek nokta yok. MOTOR'un ölçtüğü %48,9
kararsızlığın sebebi de bu: peteğin karşısında komşu yok, boşluk var.

**Kalıcı çözüm Podgorica'yı eklemektir ve TDV zincirini tam veriyor:**

> *"Şehir, **861'de (1457) Osmanlı topraklarına katıldı**."*
> *"**1479**'da … İşkodra'nın fethinden sonra Podgorica bölgesi yeni oluşturulan
> İşkodra sancağına dahil edildi."*
> 890 (1485) tahririnde kırk hâne · 1529-30'da 800 kişi ve **otuz iki kişilik
> garnizon** · 1582'de 322 hâne — yani **sayılan, vergilendirilen, garnizonlu**
> bir Osmanlı kasabası.

```js
{ ad:"Podgorica", tur:"sehir", lat:42.441, lon:19.263, g:0, k:4, m:"İşkodra", s:[{f:"1281-01-01",t:"1457-01-01",d:"sirbistan"},{f:"1878-07-13",t:"1923-10-29",d:"karadag"}], d:[{f:"1457-01-01",t:"1878-07-13"}] },
```

Podgorica eklenirse Cetinje'nin peteği **dağa çekilir** — orada `true` doğrudur —
ve ova 1457'den itibaren doğru şekilde Osmanlı boyanır. Cetinje'ye 29 km,
İşkodra'ya 46 km; 3 km kuralı rahat geçiliyor.

⚠️ **Sıralama kısıtı, Böğürdelen'deki ile aynı:** `1457-01-01` kırılmasının
maddesi **YOK** (en yakın madde 163 gün ötede, *"Belgrad kuşatmasının
başarısızlığı"*). Podgorica eklenecekse **aynı adımda** bir 1457 maddesi
yazılmalı; ben yazarım, söylemesi yeterli.

### Slug turu
✅ CANLI: `karadag` · `podgorica` · `iskodra`
🔴 ÖLÜ: `cetinje` · `zeta` · `zabljak` · `ulgun` — Cetinje'nin TDV'de **müstakil
maddesi yoktur**; şehir yalnız `karadag` içinde "Çetine" olarak geçer. Bu, §3'te
Crnojeviç için tespit ettiğim durumun aynısı.

---

## 22. ⭐ PODGORİCA PAKETİ — YAMACI uygular

Merkez onayladı. **`data/`ya ben yazmadım.** Üç parça, hepsi tam hâliyle aşağıda.
İlk ikisi **AYNI ADIMDA** uygulanmalı (sıralama kısıtı §22.4).

### 22.1 Yerleşim kaydı → `data/yerlesimler.js`

```js
{ ad:"Podgorica", tur:"sehir", lat:42.441, lon:19.263, g:0, k:4, m:"İşkodra", s:[{f:"1281-01-01",t:"1457-01-01",d:"sirbistan"},{f:"1878-07-13",t:"1923-10-29",d:"karadag"}], d:[{f:"1457-01-01",t:"1878-07-13"}] },
```

| Alan | Dayanak |
|---|---|
| `lat/lon` | Morača ile Ribnica'nın kavuştuğu yer; TDV: *"İşkodra gölünün 20 km. kuzeyinde"*. Cetinje'ye **29 km**, İşkodra'ya **46 km** — 3 km kuralı rahat geçiliyor |
| `d:` başı `1457-01-01` | TDV `podgorica`: *"Şehir, **861'de (1457) Osmanlı topraklarına katıldı**."* Gün verilmiyor → `CLAUDE.md §4` gereği `-01-01` |
| `m:"İşkodra"` | TDV: *"**1479**'da … İşkodra'nın fethinden sonra Podgorica bölgesi yeni oluşturulan İşkodra sancağına dahil edildi"* |
| `d:` sonu `1878-07-13` | TDV `karadag`: Karadağ 1876-78 savaşının sonlarında *"Nikšić, **Podgorica**, Bar'ı aldı"*, bağımsızlık Berlin'de tanındı. Berlin maddesi mevcut, kırılma kapalı |

🟡 **Bilinçli sadeleştirme — `s:"sirbistan"` 1281-1457.** Bölge bu aralıkta sırasıyla
Sırp Krallığı (1281-1356), **Zeta Prensliği** (1356-1421) ve yeniden Sırp
despotluğu (1421-1457) altındaydı. `zeta` kimliği **`devletler.js`'te VAR**
(`id:"zeta"`, *"Zeta Prensliği (Balšić / Crnojević)"*, 1356-1514) ama
**`renkler.py`'deki `BOYALAR` sözlüğünde YOK** — yazılırsa bölge boyanmaz
(`VERI-YAPISI.md` kuralı). Bu yüzden tek parça `sirbistan` yazdım.
→ **#50**: Oturum 16 `zeta` rengini eklerse zincir üçe bölünüp doğrusu yazılabilir.

### 22.2 Kronoloji maddesi → `data/olaylar_ek10.js`

```js
{ t:"1457-01-01", k:"fetih", etiket:["toprak-kazanc","idare"],
  b:"Podgorica'nın Osmanlı topraklarına katılması — Zeta ovasının denetim altına alınması",
  gun:"1457", yer:"Podgorica (Ribnica), Morača ile Ribnica'nın kavuştuğu yer, Zeta ovası",
  kisiler:"Fatih Sultan Mehmed",
  d:"İşkodra gölünün yirmi kilometre kuzeyinde, Morača ile Ribnica sularının birleştiği ovada kurulu kasaba kaynaklarda ilk defa 1216'da Ribnica, 1326'da Podgorica adıyla anılır. 1457'de Osmanlı topraklarına katıldı ve Zeta ovasının denetimi böylece Balšić-Crnojević hânedanlarının elinden çıktı. Fâtih Sultan Mehmed 1474-1478 yılları arasında iki nehrin kavşağındaki sarp kayalıklara bir kale ile cami inşa ettirdi; 1479'da İşkodra'nın fethinden sonra bölge yeni kurulan İşkodra sancağına bağlandı. 1485 tahririnde kırk hânelik hıristiyan bir kasaba olan Podgorica, 1529-30'da 800 kişiye ve kale içinde bir dizdarın emrindeki otuz iki kişilik garnizona, 1582'de 322 hâneye ulaştı. Evliya Çelebi 1662'de Fâtih Kalesi'nde üç yüz ev, ambarlar, cebehâneler ve yedi yüz muhafız saydı. Bu kayıtlar Zeta'nın ovası ile dağı arasındaki farkı da gösterir: ova sayılan, vergilendirilen ve garnizonlu bir Osmanlı kazasıdır — oysa XVIII. yüzyılda şehir, Karadağ dağlarındaki aşiretlerin baskınlarını önlemek için altı tabya ve üç kapılı surlarla tahkim edilmek zorunda kalacaktır. Podgorica 1876-1878 savaşının sonlarında Karadağ'ın eline geçti ve Berlin Antlaşması'yla orada kaldı.",
  kaynak:"podgorica" },
```

`gun:"1457"` — **gerçek hassasiyet YIL.** TDV yalnız hicrî 861 / mîlâdî 1457
veriyor; A-2 (Karadağ 1482) ile aynı biçim.

### 22.3 Cetinje `kasitli_bosluk: true` — gerekçe (MOTOR/merkez işler)

Tam dayanak §21'de. Pakete girecek özet:

> **Cetinje `kur:1482` öncesi KASITLI boşluktur.** TDV `karadag` bölgeyi
> *"göçebe kabilelerin oluşturduğu gevşek bir konfederasyon"* diye tarif ediyor ve
> Kadîm Zeta'nın *"düzenli bir şekilde yönetilmiş"* kısmının **ova** olduğunu
> söylüyor. Dağda 1482 öncesi nominal iddia vardı (Zeta, Sırp despotu, Venedik,
> Osmanlı) ama fiilî idare yoktu — Zeta *"politik istikrara kavuşamadı"*.
> Teyit: TDV `podgorica`, ovadaki Osmanlı kasabasının **XVIII. yüzyılda hâlâ**
> dağa karşı altı tabyayla tahkim edildiğini kaydediyor.
> **Podgorica eklenince bu karar kırılgan olmaktan çıkar:** Cetinje'nin peteği dağa
> çekilir (orada boşluk doğrudur), ova 1457'den itibaren Osmanlı boyanır.

### 22.4 🔴 SIRALAMA KISITI — Böğürdelen'dekiyle aynı

Ölçüldü: `1457-01-01` kırılmasına en yakın madde **163 gün** ötede
(*"Belgrad kuşatmasının başarısızlığı"*, 1456-07-22).

| Sıra | Sonuç |
|---|---|
| Yalnız yerleşim eklenirse | 🔴 **Değişmez 2** kırılır — maddesiz kırılma |
| Yalnız madde eklenirse | 🔴 **Değişmez 2t** kırılır — kırılmasız madde, 67 tavanı aşılır |
| **İkisi birlikte** | ✅ ikisi de sağlanır |

Madde bu belgede duruyor, `olaylar_ek10.js`'te **değil** — tam olarak bu yüzden.
Uygulandığında `BEKLENEN_YERLESIM` **+1**, `BEKLENEN_KIRILMA` **+2**.

---

## 23. AYRI ÖNERİ — üç kale, Podgorica paketiyle KARIŞTIRILMAYACAK

Merkezin talimatı gereği ayrı tutuldu. TDV `iskodra`, 890 (1485) tahririnde
İskenderiye sancağının kalelerini sayarken üçünü daha adıyla anıyor:

> *"Kosova'daki İpek'le (Peć / Peja) Podgorica, **Drivasto, Zabljak ve Medun**
> kaleleri de sancağa dahildi."*

| Kale | Konum | Durum |
|---|---|---|
| **Žabljak Crnojevića** | İşkodra gölünün kuzey kıyısı | Crnojevići'nin **1482 öncesi merkezi** |
| **Medun** | Podgorica'nın kuzeydoğusu | Dağ eteği kalesi |
| **Drivasto (Drisht)** | İşkodra'nın kuzeydoğusu | — |

🔴 **Üçü için de zincir kurulamıyor.** TDV bu kaleleri yalnız **1485 tahririnde
sancağa dahil** olarak anıyor; **düşüş yıllarını vermiyor** ve `zabljak`,
`drivasto`, `medun` diye **müstakil madde yok**. Žabljak için söylenebilecek en
kesin şey **"1479 ile 1485 arası"**dır — daha kesini uydurma olur.

**Önerim: şimdilik EKLENMESİN.** Podgorica ovayı zaten tutuyor; üç kale ancak
kaynakları netleştikten sonra değer katar. Gerekirse standart akademik kaynakla
ayrı bir tur yapılır (**#51**).

---

## 24. 🔴 KATMANLAR ARASI ÇELİŞKİ — #49

Podgorica araştırırken çıktı. `data/devletler.js`'teki `zeta` kaydı:

```
{ t:"1451-01-01", tur:"hukumdar",
  b:"Crnojević ailesi Zeta'nın başına geçti, merkezi Cetine'ye taşıdı" }
```

Kayıt künyesini *"(kaynak: TDV, madde: karadag)"* olarak veriyor. **Ama TDV
`karadag` maddesinde ne 1451 yılı ne de merkezin Cetinje'ye taşınması geçiyor.**
Maddede Crnojevići ile ilgili tek kronolojik ifade şudur: *"İlk Osmanlı idaresi
Fâtih Sultan Mehmed döneminin son yıllarında tesis edildiyse de onun vefatı
üzerine Crnojevići bazı yerleri geri almayı başardı."*

**İki ayrı olay tek satırda birleşmiş görünüyor:** hânedanın Zeta'nın başına
geçmesi (1451) ile merkezin Cetinje'ye taşınması (1482). `yerlesimler.js`'teki
Cetinje kaydı ise `kur:"1482-01-01"` diyor — yani **iki katman 31 yıl ayrışıyor.**

📌 Bu, §3'te Crnojeviç için tespit ettiğim durumun tekrarı: **TDV'de karşılığı
olmayan bir tarih, TDV künyesiyle kaydedilmiş.** `devletler.js` Oturum 3'ün
dosyası — düzeltme onlara ait, ben yalnız ölçtüm.

---

## 25. İSMAİL — YAMACI'nın sorusu, eski birleşik maddeyi kim tutuyor

### 25.1 Cevap: İsmail'in 1484'te alındığı TDV'de YAZMIYOR

**Üç ayrı TDV maddesi 1484 seferini anlatıyor ve üçü de yalnız iki kale sayıyor.**

TDV `kili` — seferin günü gününe anlatımı:
> *"II. Bayezid … 889'da (1484) sefere çıktı. 10 Cemâziyelâhir 889'da (**5 Temmuz
> 1484**) Kili civarına geldi. Ertesi gün kale karadan ve Tuna nehrinden kuşatıldı.
> On gün boyunca … kumandanı teslim olmak zorunda kaldı (**15 Temmuz 1484**).
> … **Hemen ardından Akkirman Kalesi de alındı.**"*

TDV `akkirman`:
> *"Akkirman II. Bayezid devrinde Boğdanlılar'dan alındı (**4 Ağustos 1484**)."*

TDV `bucak` — en açık olanı:
> *"II. Bayezid 1484'te … **Kili Kalesi'ni**, yine aynı yıl Mengli Giray kumandasındaki
> Kırım ordusunun yardımı ile de … **Akkirman'ı** ele geçirdi. … **Daha sonra** ise
> fethedilen **bu iki kaleyi** savunmak ve yollarını güven altına almak için
> **bütün bölgeyi kontrol etme ihtiyacı belirdi**."*

**İsmail hiçbirinde geçmiyor.** Künye taraması da boş: `ismail` · `izmail` ·
`ismail-gecidi` · `ismail-kalesi` · `kalas` **hepsi ÖLÜ** — İsmail'in TDV'de
müstakil maddesi yoktur. Adı yalnız `bucak`, `bogdan` ve `kili` maddelerinin
içinde, hepsi de **XVII. yüzyıl ve sonrası** bağlamlarda geçiyor (Evliya Çelebi'nin
tasviri, 1768-74 ve 1787-92 savaşları, 1856 Paris Antlaşması).

⇒ **Verideki `1484-08-03` kaynaksızdır.** Eski birleşik maddenin tarihinden
kopyalanmış görünüyor — yani madde veriyi değil, veri maddeyi takip etmiş.

### 25.2 TDV bölgeyi 1538'e bağlıyor

`bucak` maddesi, iki kale ile aradaki bölgeyi **açıkça ayırıyor**:

> *"Bucak'ın kuzey sınırları **Kanûnî Sultan Süleyman zamanında** çizilmiştir.
> Osmanlılar'a hücum eden Petru Rareş **1538**'de yenilgiye uğratılmış ve güneyde
> **Prut ile Turla arasında** bulunan bir kısım kara parçası **Bucak adı altında
> idarî bir bölge olarak teşkilâtlandırılmıştır**. Kanûnî, Bucak'ın kuzeydoğu
> sınırını Bender'in kuzeyinden geçirmiş ve burada bir kale inşa ettirerek
> **Osmanlı idaresini bölgede kökleştirmiştir**."*

**İsmail tam da bu tarifin içindedir** — Prut ile Turla arasında, Bender'in
güneyinde. Ve veride **Bender zaten `1538-09-01` taşıyor.**

### 25.3 Etki alanı ölçüldü — engel yalnızca İsmail

| Ölçüm | Sonuç |
|---|---|
| `1484-08-03` kırılmasını taşıyan yerleşim | **yalnız İsmail** (2 eşleşme: `s:` bitişi + `d:` başı) |
| Kili | `1484-07-15` — zaten taşındı |
| Akkirman | `1484-08-04` — zaten taşındı |

**İki hedef tarihin de maddesi hazır, yeni madde yazmaya gerek yok:**

| Hedef | Karşılayan madde | Mesafe |
|---|---|---|
| `1484-07-15` | *"Kili Kalesi'nin fethi — Tuna ağzının kilidi"* (B-1, `olaylar_ek10.js`) | 0 gün |
| `1538-09-01` | *"Boğdan Seferi ve Bucak (Bender) bölgesinin ilhakı"* (`olaylar_ek5.js`) | 0 gün |

### 25.4 Önerim: `1538-09-01`

**Gerekçe:** TDV 1484'ü **iki kaleye** hasrediyor ve aradaki bölge için *"daha
sonra … bütün bölgeyi kontrol etme ihtiyacı belirdi"* diyor; ardından o bölgeyi
adıyla ve tarihiyle **1538**'e bağlıyor. İsmail bir bozkır iç kalesi değil ama
Prut-Turla tarifinin içinde ve Bender ile aynı idarî teşkilâtlanmanın parçası.
Veride Bender zaten 1538-09-01 taşıdığı için **iki Bucak kalesi aynı zemine
oturur.**

⚠️ **Haritadaki karşılığı:** İsmail 1484-1538 arasında **Boğdan** görünür — Kili
ile arasında 36 km'lik bir voyvodalık cebi oluşur. Bu **doğrudur**: Bucak'ın içi
1538'e kadar Boğdan'daydı, ve bu düzeltmeyle 1538 Boğdan Seferi haritada
gerçekten toprak kazandırmış olur — bugün İsmail için hiçbir şey yapmıyor.

**Yedek seçenek `1484-07-15`** (Kili ile aynı gün): daha küçük değişiklik,
haritayı bugünkü hâline yakın tutar. Dayanağı `kili` maddesinin kapanış cümlesidir
— *"Böylece Karadeniz ve Aşağı Tuna havzası tamamen Osmanlılar'ın kontrolüne
geçmiş oldu"*. Ama bu bir **havza özeti**, İsmail'in alındığına dair bir kayıt
değil. Zayıf dayanak.

📌 **Hangisi seçilirse seçilsin eski birleşik madde emekliye ayrılabilir** — İsmail
`1484-08-03`'ten çıktığı anda o tarihi taşıyan yerleşim kalmaz.

⚠️ `CLAUDE.md §11`: İsmail kaydında tarih **İKİ KEZ** geçiyor (`s:` bitişi ve `d:`
başı). `replace(…, 1)` yalnız ilkini değiştirir ve 54 yıllık sahipsiz pencere açar.
**Her iki eşleşme birlikte**, sonra Değişmez 1.

---

## 26. ✅ ÇÖZÜLDÜ — Değişmez 3 sayaca düştü (`da5a208`)

> **Bu bölüm bir alarmla başladı ve alarm yanlış çıktı.** Sıra: paketlerim
> uygulandıktan sonra denetimi kırmızı gördüm → dört çelişkiyi ölçüp teşhis ettim
> → iki çözüm önerdim → DENETÇİ ölçtü, ikisinin de gereksiz olduğunu gösterdi ve
> ölçütü sayaca düşürdü. Teşhis doğru, öneriler yanlıştı. Aşağısı olduğu gibi
> duruyor çünkü teşhis kısmı hâlâ geçerli ve `kd:` borcunun canlı bir örneği.

O anki görüntü:

```
Değişmez 3  ✗  389 çelişki (beklenen ≤387)     SONUÇ: İHLAL VAR
```

Ölçtüm — **dördü benim eklediğim kayıtlardan**, ve **dördü de veri hatası değil,
`CLAUDE.md §3`'te "henüz sağlanmıyor" diye kayıtlı yapısal borcun örneği:**

| Kesit | Yerleşim | Kendi sahibi | `m:` merkezi |
|---|---|---|---|
| 1300 · 1400 | **Podgorica** | `sirbistan` | İşkodra = `venedik` |
| 1500 | **Kragujevac** | OSMANLI | Belgrad = `macaristan` |
| 1500 | **Çaçak** | OSMANLI | Belgrad = `macaristan` |

### İkisi de tarihen DOĞRU — model ifade edemiyor

**Podgorica:** `m:"İşkodra"` bağı **Osmanlı devrine ait** bir idarî olgudur — TDV
`podgorica`: *"**1479**'da … İşkodra'nın fethinden sonra Podgorica bölgesi yeni
oluşturulan İşkodra sancağına dahil edildi."* Ama `m:` alanının zaman boyutu
olmadığı için bu bağ **1300 ve 1400 kesitlerine de uygulanıyor**, ki o tarihlerde
İşkodra Venedik'in, Podgorica ise Sırp/Zeta yörüngesindeydi. İkisinin farklı
devletlerde olması **doğru**; çelişki sayılması modelin kusuru.

**Kragujevac · Çaçak:** Şumadya Semendire ile birlikte **1459**'da düştü, Belgrad
ise **1521**'e kadar Macaristan'da kaldı. 1500 kesitinde ikisinin farklı
devletlerde olması **tarihin ta kendisidir** — Belgrad'ın altmış iki yıl daha
dayanması bu projenin zaten anlattığı bir hikâye.

📌 Bu tam olarak `MIMARI.md §3.4`'ün tarif ettiği borç: **bölge boyutunun zaman
boyutu yok.** Planlanan `kd:` alanı (`VERI-YAPISI.md`, "🔜 Planlanan alanlar")
devreye girdiğinde dördü de kendiliğinden çözülür.

### Alternatifler tartıldı, hiçbiri iyi değil

| Seçenek | Neden olmaz |
|---|---|
| Podgorica'dan `m:` kaldır | 1479 sonrası doğru olan sancak bağı kaybolur |
| Kragujevac/Çaçak'a `m:"Semendire"` | Semendire `k:3` ve kendi `m:`'i Belgrad — kural gereği `m:` bir k1/k2 merkezine işaret etmeli, çelişki taşınır yalnız |
| Kayıtları geri çek | Şumadya halkası (§17.1) ve Cetinje kararı (§21) yeniden kırılganlaşır |

### ✅ ÇÖZÜLDÜ — ve önerdiğim iki yolun ikisi de gereksiz çıktı

DENETÇİ aynı sorunu benden bağımsız ölçüp `da5a208`'de kapattı. **Depo temiz**
(967 yerleşim · 994 madde · çıkış kodu 0), ve `denetle.py` artık şunu yazıyor:

```
Sayaç       ·  392 `m:`/egemen uyuşmazlığı — ŞEMA borcu, veri kusuru DEĞİL
```

**Teşhisim doğruydu, çözüm önerilerim yanlıştı.** DENETÇİ'nin ölçümü:

| Ölçüm | Sonuç |
|---|---|
| Toplam çelişki | 389 |
| Bunun "farklı egemen" olanı | **389 — TAMAMI** |
| Geriye kalan | **0** |

Yani `Podgorica↔İşkodra` ve `Kragujevac↔Belgrad` **istisna değil, kuralın
kendisi.** Önerdiğim muafiyet kümesi kurulsaydı 389 satır yazmak gerekirdi ve
ölçüt sıfır dönerdi. Tavan yükseltmek de çare değildi: ölçüt **yalnız yerleşim
eklendikçe** artıyor, hiçbir veri hatasında farklı cevap veremiyor — yani ölçüm
değil sayaç. Değişmez'likten düşürüldü.

📌 **Ders — kendi payıma:** dört kaydımı "ihlal" diye raporlayan şey veri değil,
**ölçütün sunumuydu.** Ben de o sunumu veri kabul edip düzeltmeyi kendi
paketlerimde aradım (geri çekmek, `m:` kaldırmak, tavan istemek). DENETÇİ'nin
ayrımı burada değerli: *ölçütü gevşetmek* ile *ölçtüğü şeyin ne olduğunu doğru
adlandırmak* farklı işlerdir. `CLAUDE.md §11` birincisini yasaklıyor, ikincisini
değil.

⚠️ **Bir de ölçüm hijyeni:** ilk koşumda "SONUÇ: İHLAL VAR" gördüm ve rapor ettim;
DENETÇİ o sırada düzeltmeyi çoktan uygulamıştı. **Ölçümüm bir saat eskiydi** ve
başka oturumların yazma anına denk gelmişti. Kırmızı bir denetim raporlamadan
önce `git log`'a bakmak gerekiyor — sayı bana ait olmayabilir.

⇒ **Paketlerimde düzeltilecek bir şey yok.** Şumadya halkası (§17.1), Cetinje
kararı (§21) ve Podgorica paketi (§22) sağlam duruyor. Gerçek çözüm ikimizin de
gösterdiği yerde: **zamanlı `m:`** — `VERI-YAPISI.md`'de `kd:` olarak planlı.

---

## 27. DEVREDEN SATIRLARIN DURUM TARAMASI (31 Temmuz, kilit sonrası)

Kendi kuyruğumdaki eski satırları ölçtüm. **Üçü hâlâ açık, biri kendiliğinden
kapanmış, hiçbirini engelleyen bir şey yok.**

### 27.1 #4 — İyon adaları `1479-01-25` → `1479-08-01` · 🔴 AÇIK

`1479-01-25`'i **sekiz yerleşim** taşıyor. Dördü doğru, dördü yanlış:

| Kalacak (İstanbul Antlaşması gerçekten kapsıyor) | Taşınacak (Tocco adaları, ayrı harekât) |
|---|---|
| İşkodra · Limni · Sisam · Bozbaba (Ay Strati) | **Ayamavra (Lefkada) · Kefalonya · İthaki · Zaklise** |

**Dört kayıt × 2 eşleşme = 8 eşleşme.** `1479-08-01`'i şu an **hiçbir yerleşim
taşımıyor**; A-1 maddesi (*"İyon adalarının fethi — Tocco düklüğünün sonu"*)
hazır ve 0 gün mesafede. Kalan dördü kendi maddesini korur.
⇒ **Değişmez 2 açısından risksiz.**

### 27.2 #6 — `1479-01-25` maddesinin metni · 🔴 AÇIK, #4'e bağlı

Madde şöyle bitiyor:
> *"Aynı tarihte haritaya katılan diğer yerleşimler: Limni, Sisam, **Ayamavra
> (Lefkada)**."*

#4 uygulandığı anda bu cümle yanlış olur. Ayamavra çıkarılmalı; **Bozbaba
eklenebilir** (o gerçekten 25 Ocak'a ait ve cümlede sayılmamış).

### 27.3 #17 — İnebahtı: eski birleşik madde hâlâ fethi üstleniyor · 🔴 AÇIK

Kili/Akkirman'da merkezin bugün çözdüğü desenin aynısı, ve **engeli yok:**

```
1499-08-28  [olaylar_ek5.js]  "Sapienza deniz zaferi ve İnebahtı'nın fethi"
            gun: "12-25 Ağustos 1499 (Sapienza) – 28 Ağustos 1499 (İnebahtı)"
            kaynak: "inebahti"
```

🔴 **Madde kendi künyesiyle çelişiyor.** `kaynak:"inebahti"` diyor ama TDV
`inebahti` teslimi **26 Ağustos**'a koyuyor: *"kaledeki Venedikliler 26 Ağustos'ta
kasabayı Osmanlılar'a teslim ettiler."* Madde 28 Ağustos yazıyor.
📌 Bu, bugünün beşinci vakası — ve artık **tek tek kusur değil, bir sınıf.**

### 🔴 SINIF: "künye canlı, iddia o maddede yok/farklı"

`<title>` sınaması **beşini de temiz geçiriyor**, çünkü o sınama *"bu madde var
mı"* sorusunu cevaplıyor; *"bu bilgi o maddede var mı"* sorusunu değil.

| # | Kayıt | `kaynak:` | Künye | Maddede ne var |
|---|---|---|---|---|
| 1 | `1897-05-17` Dömeke Meydan Muharebesi | `yunanistan` | ✅ canlı | Dömeke **hiç geçmiyor**, savaşa gün verilmiyor |
| 2 | `devletler.js` `zeta`, 1451 satırı | `karadag` | ✅ canlı | Ne **1451** ne merkezin Cetinje'ye taşınması geçiyor |
| 3 | `yerlesimler.js` İsmail `1484-08-03` | — | 🔴 künye **yok** | TDV 1484 seferini **yalnız Kili + Akkirman** olarak anlatıyor |
| 4 | `abudabi` kütük kaydı | — | — | (merkezin ölçümü) |
| 5 | `1499-08-28` Sapienza + İnebahtı | `inebahti` | ✅ canlı | TDV **26 Ağustos** diyor, madde **28** yazıyor |

**Üç farklı bozulma biçimi:** iddia maddede *hiç yok* (1, 2) · künyesiz tarih
*künyeli gibi duruyor* (3) · künye doğru ama *sayı tutmuyor* (5).

⇒ **KAYNAK'ın 437 künyelik turu bu yüzden iki aşamalı olmak zorunda.** Birinci
aşama `<title>`, ikinci aşama *"maddenin metni, iddianın anahtar kelimesini
içeriyor mu"* — yer adı, kişi adı ya da yıl. Beş vakanın **beşi de** ikinci
aşamada düşerdi.

📌 Tek tek bildirilen bir kusur, sınıf hâline gelince **tasarım değiştiriyor.**

✅ **Ölçüldü: `1499-08-28`'i hiçbir yerleşim taşımıyor** (0 eşleşme). Yani metin
serbestçe düzeltilebilir, Değişmez 2 etkilenmez.

**Önerim — madde SİLİNMESİN, ikiye ayrılsın:**
- Sapienza deniz zaferi gerçek ve ayrı bir olaydır; madde onun maddesi olarak
  kalsın, başlığından ve metninden **İnebahtı'nın fethi çıkarılsın**
- İnebahtı'yı zaten **B-3** karşılıyor (`1499-08-26`, TDV'nin verdiği gün,
  `olaylar_ek10.js`)
- `gun:` alanı da sadeleşsin: *"12-25 Ağustos 1499"*

### 27.4 #10 — Ayamavra boşlukları · ✅ KENDİLİĞİNDEN KAPANDI

Eski kayıt 1502-1503 ve 1715-1718 pencerelerinde boşluk veriyordu. Bugünkü kayıt
**kesintisiz**: `s:` venedik 1281→1479-01-25 · `d:` 1479-01-25→1684-08-06 ·
`s:` venedik 1684-08-06→1923-10-29. **Madde önerisine gerek kalmadı, satır kapanır.**

### 27.5 #5 — Ayamavra'nın 1479 öncesi sahibi · 🟡 BEKLİYOR, "önce sor" idi

Kayıt hâlâ `s:{1281→1479-01-25, d:"venedik"}` diyor. §2'de ölçmüştüm: adalar 1479
öncesinde **Venedik'in değil Tocco ailesinin** elindeydi ve Tocco Napoli
yörüngesindeydi. Merkez "önce sor" demişti; **soru hâlâ cevapsız.**
⚠️ #4 ile birlikte düşünülmeli — ikisi de aynı dört kaydı ilgilendiriyor, tek
turda yapılırsa `CLAUDE.md §11`'in çoklu eşleşme tuzağına bir kez girilir.

---

## 28. ⭐ İYON ADALARI PAKETİ — YAMACI uygular, tek commit

Merkez #4 · #5 · #6 · #17'yi onayladı. **`data/`ya ben yazmadım.**

### 28.0 🔬 #5 ölçüldü — `tocco` rengi GEREKMİYOR, iş tek kayda indi

Merkezin sorduğu ölçüm: `tocco` kimliği `renkler.py`'de **YOK** (114 kimlik).
**Ama gerek de yok** — çünkü:

> **Kefalonya, İthaki ve Zaklise 1479 öncesi için ZATEN `napoli` taşıyor.**
> Dört adadan yalnız **Ayamavra** `venedik` yazıyor.

`napoli` paletde var (`"napoli": ("Napoli / İki Sicilya", "#a67ba0")`) ve Tocco
düklüğü zaten onunla temsil ediliyor. Yani #5 **yeni renk istemiyor, dört kayıt
da değil — tek kayıtta tek alan.** Ayamavra kardeşleriyle hizalanıyor.

⇒ **#5 renge bağlı değil, VERİ KİMLİK'ten beşinci renk istemeye gerek yok,
#4 ile aynı turda gidebilir.**

### 28.1 Dört ada — `1479-01-25` → `1479-08-01` (+ Ayamavra'nın kimliği)

⚠️ **HER KAYITTA İKİ EŞLEŞME** — `s:` döneminin **bitişi** ve `d:` döneminin
**başı**. `CLAUDE.md §11`: `replace(…, 1)` yalnız ilkini değiştirir ve üç aylık
sahipsiz pencere açar. Bugün İsmail'de ikisi birlikte değiştirildiği için sorun
çıkmadı; burada da öyle olmalı. **8 eşleşme = 4 kayıt × 2.**

| Kayıt | Satır | Değişecek |
|---|---|---|
| **Ayamavra (Lefkada)** | 1013 | `s:` **`t:"1479-01-25"→"1479-08-01"`** ve **`d:"venedik"→"napoli"`** · `d:` `f:"1479-01-25"→"1479-08-01"` |
| **Kefalonya** | 1199 | `s:` `t:` · `d:` `f:` — kimlik zaten `napoli` |
| **İthaki** | 1200 | aynı |
| **Zaklise (Zakynthos)** | 1201 | aynı |

Ayamavra'nın düzeltilmiş hâli:
```js
{ ad:"Ayamavra (Lefkada)", tur:"kale", lat:38.716, lon:20.643, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1479-08-01",d:"napoli"},{f:"1684-08-06",t:"1923-10-29",d:"venedik"}], d:[{f:"1479-08-01",t:"1684-08-06"}] },
```
📌 1684 sonrası `venedik` **doğru ve değişmiyor** — Venedik Lefkada'yı 1684'te aldı.

**DOKUNULMAYACAK dört kayıt:** İşkodra · Limni · Sisam · **Bozbaba (Ay Strati)**.
Bunlar gerçekten 25 Ocak 1479 İstanbul Antlaşması'na aittir ve maddeleri yerinde.

**Değişmez 2:** `1479-08-01` → A-1 maddesi *"İyon adalarının fethi — Tocco
düklüğünün sonu"* (0 gün) · `1479-01-25` → mevcut madde, kalan dört kayıt için
geçerliliğini koruyor. **Yeni madde gerekmiyor.**
**Değişmez 1:** iki eşleşme birlikte taşındığı sürece zincirler kesintisiz.
Uygulamadan sonra koşturulmalı.

### 28.2 #6 — `1479-01-25` maddesinin son cümlesi

`olaylar_ek.js`, *"İstanbul Antlaşması — Arnavutluk ve İşkodra"*:

| | |
|---|---|
| **Şimdi** | *"Aynı tarihte haritaya katılan diğer yerleşimler: Limni, Sisam, **Ayamavra (Lefkada)**."* |
| **Olmalı** | *"Aynı tarihte haritaya katılan diğer yerleşimler: Limni, Sisam, **Bozbaba (Ay Strati)**."* |

Ayamavra çıkıyor (artık 1479-08-01'e ait), **Bozbaba giriyor** — o gerçekten
25 Ocak'a ait ama cümlede hiç sayılmamış.

### 28.3 #17 — Sapienza maddesi: SADELEŞTİR, ayırma

Merkezin hükmü uygulandı — üçüncü bir madde üretilmiyor, **yanlış olan kısım
çıkarılıyor.** `olaylar_ek5.js`, `t:"1499-08-28"`:

| Alan | Şimdi | Olmalı |
|---|---|---|
| `b:` | Sapienza deniz zaferi **ve İnebahtı'nın fethi** | **Sapienza (Zonchio) Deniz Zaferi — Akdeniz'de ilk büyük donanma başarısı** |
| `gun:` | 12-25 Ağustos 1499 (Sapienza) – **28 Ağustos 1499 (İnebahtı)** | **12-25 Ağustos 1499** |
| `yer:` | Sapienza açıkları **– İnebahtı (Lepanto), Mora** | **Sapienza (Zonchio) açıkları, Mora'nın güneybatısı** |
| `kisiler:` | II. Bayezid, Kemal Reis, **Rumeli Beylerbeyi Mustafa Paşa** | **II. Bayezid, Kemal Reis** |
| `kaynak:` | `inebahti` | 🟡 artık İnebahtı anlatılmadığı için gözden geçirilmeli |
| `d:` | İnebahtı'nın teslimini anlatan cümle | o cümle çıkarılsın; kalan Sapienza anlatımı yeterli |

**İnebahtı'yı B-3 karşılıyor:** `1499-08-26`, TDV `inebahti`'nin verdiği gün,
`olaylar_ek10.js`.

✅ **Risk ölçüldü: `1499-08-28`'i hiçbir yerleşim taşımıyor** (0 eşleşme) — İsmail'de
karşılaşılan engelin burada karşılığı yok, metin serbestçe düzeltilebilir.

### 28.4 Uygulama sonrası

```bash
py arac/denetle.py
```
Beklenen: `Değişmez 1` ve `Değişmez 2` değişmeden temiz; `BEKLENEN_YERLESIM`
**değişmiyor** (yeni nokta yok, yalnız tarih ve kimlik düzeltmesi).

---

## 29. YER DİZİNİ'nin havale ettiği 17 eksik nokta — ayıklama ve ilk paket

VERİ KRONOLOJİ 2 (U4), kronoloji `yer:` alanlarını `yerlesimler*.js`'e karşı
tarayıp Balkan bölgesinde **kaydı olmayan 17 yer adı** çıkardı. Ölçtüm:

| Durum | Sayı | Hangileri |
|---|---|---|
| ✅ Artık **VAR** | 1 | **Böğürdelen** — benim §19.5 paketim uygulandı, dört E maddesiyle birlikte |
| 🟡 **Ad benzerliği tuzağı** | 1 | **Aydos** — `Aydos Kalesi` var ama **40.950K/29.250D**, yani Kartal-Sultanbeyli'deki Anadolu Aydos'u. Bulgaristan'ın Aydos'u (Aytos, ~42.70K/27.25D) gerçekten YOK |
| 🔴 Gerçekten eksik | **15** | aşağıda |

📌 **Aydos vakası kayda değer:** `grep 'Aydos'` "var" der, koordinat "yok" der.
Bugünkü ders listesine bir madde daha: **ad eşleşmesi kimlik kanıtı değildir.**

### 29.1 🔴 KENDİ HATAM — §15.4'te Yergöğü'nü var sanmışım

§15.4'te "kasten alınmayan noktalar" tablosunda şöyle yazmıştım:

> *"**Yergöğü · Turnu · İbrail** — Bunlar **gerçekten doğrudan Osmanlı**. …
> Kırmızı kalmaları doğru."*

**Hüküm doğru ama tablo yanlış yerde.** İbrail'in kaydı **var** (satır 331);
**Yergöğü ve Turnu'nun kaydı YOK.** Yani onları "zaten var, dokunmayın" diye
işaretlemişim — oysa haritada Yergöğü'nün kırmızısı kendi noktasından değil,
Niğbolu/Rusçuk peteğine **emilmesinden** geliyor. Doğru olması tesadüf.

⇒ Bu, §12'de Eflak için tespit ettiğim emilme sorununun **aynı tabloda gözden
kaçmış hâli.** Aşağıdaki paket onu kapatıyor.

### 29.2 ⭐ YERGÖĞÜ PAKETİ — TDV `yergogu`, tarih tarih

| Tarih | TDV'nin ifadesi |
|---|---|
| Kale Eflak'ın | *"Asıl Eflak toprağındaki büyük kale … Eflak Voyvodası I. Mircea tarafından yaptırıldı"* |
| **1420** | *"Bu kale son araştırmalara göre 1417'de değil **1420**'de Osmanlılar'ca ele geçirildi. Dobruca da aynı yılda Osmanlı topraklarına katıldı. Ayrıca … **Turnu** (Kule/Holovnik) ve **Orşova (daha sonra Fethülislâm)** ilhak edildi"* |
| **1427** | *"1427'de Eflaklılar Giurgiu Kalesi'ni geri aldı"* |
| **1449** | *"853'te (**1449**) burası tekrar Osmanlı kontrolü altına girdi"* |
| **27 Eylül 1810** | *"Yergöğü **27 Eylül 1810**'da Ruslar'ın eline geçti"* |
| **1829** | *"Edirne Antlaşması'na göre … **İbrâil ve Kule/Turnu ile** Eflak Prensliği'ne bırakıldı"* |

```js
{ ad:"Yergöğü (Giurgiu)", tur:"kale", lat:43.904, lon:25.970, g:0, k:4, m:"Sofya", s:[{f:"1281-01-01",t:"1420-01-01",d:"eflak"},{f:"1427-01-01",t:"1449-01-01",d:"eflak"},{f:"1810-09-27",t:"1829-09-14",d:"rusya"},{f:"1829-09-14",t:"1923-10-29",d:"romanya"}], d:[{f:"1420-01-01",t:"1427-01-01"},{f:"1449-01-01",t:"1810-09-27",y:"savas"}] },
```

**Değişmez 2 — beş kırılmanın DÖRDÜ zaten karşılı:**

| Kırılma | Madde | Mesafe |
|---|---|---|
| `1420-01-01` | 🔴 **YOK** — en yakın 365 gün | **E-5 gerekiyor** |
| `1427-01-01` | *"Tâceddinoğulları Beyliği'nin ilhakı: Niksar"* | 0 gün 🟡 konusu alâkasız ama geçiyor |
| `1449-01-01` | *"Epir kıyısının katılışı: Arta ve Preveze"* | 0 gün 🟡 aynı |
| `1810-09-27` | *"**Rusçuk'un teslimi** — Tuna'nın güney kıyısı da elden çıktı"* | **1 gün** ✅ konusu tam yerinde |
| `1829-09-14` | *"Edirne Antlaşması"* | 0 gün ✅ |

**Tek yeni madde gerekiyor (E-5, `1420-01-01`)** ve TDV onu dolduracak malzemeyi
veriyor: 1420'de Yergöğü, **Dobruca**, **Turnu** ve **Orşova/Fethülislâm** birlikte
ilhak edilmiş — yani Çelebi Mehmed devrinin Aşağı Tuna konsolidasyonu. Ölçtüm:
**1419-12 ile 1420-12 arasında hiçbir `d:`/`v:` kırılması yok**, bu yıl haritada
tamamen sessiz.

⚠️ **SIRALAMA KISITI — Böğürdelen/Podgorica ile aynı.** Kayıt ve E-5 **aynı
adımda**. Madde bu belgede duruyor, `olaylar_ek10.js`'te değil.

**E-5'in tam metni — tek nüsha burada:**

```js
{ t:"1420-01-01", k:"fetih", etiket:["toprak-kazanc","idare"],
  b:"Aşağı Tuna'nın kapanması — Yergöğü, Turnu, Orşova ve Dobruca'nın ilhakı",
  gun:"1420", yer:"Yergöğü (Giurgiu), Turnu (Kule), Orşova (Fethülislâm), Dobruca",
  kisiler:"Çelebi Sultan Mehmed, Eflak Voyvodası I. Mircea (ö. 1418)",
  d:"Fetret devri kapandıktan sonra Çelebi Mehmed'in Tuna hattını düzene sokma hamlesi 1420'de meyvesini verdi. Eflak Voyvodası Koca Mircea'nın kendi toprağı üzerinde, masrafını tuz satışıyla karşılayarak yaptırdığı Yergöğü Kalesi bu yıl Osmanlı eline geçti; aynı yıl Dobruca da Osmanlı topraklarına katıldı ve Tuna'nın sağ kıyısındaki Turnu (Kule/Holovnik) ile Orşova — sonraki adıyla Fethülislâm — ilhak edildi. Böylece nehrin iki yakası birden denetim altına alınmış oldu. Yergöğü'nün önemi coğrafyasındandır: Tuna'nın sol, yani Eflak yakasında kurulmuş bir Osmanlı kalesidir ve karşı kıyıdaki Rusçuk ile aynı geçidin iki ucunu tutar. Osmanlı belgeleri bu ikiliği açıkça yazar — Rusçuk için 'Yergöğü beri yaka', Giurgiu için 'Yergöğü öte yaka' denir. Kale 1427'de Eflaklılar tarafından geri alınacak, 1449'da tekrar Osmanlı denetimine girecek ve Yergöğü kazası Niğbolu sancağına bağlanarak voyvodalık içinde doğrudan idare edilen bir ada hâline gelecekti. Haritada Eflak'ın Tuna boyunun neden koyu renk olduğunun cevabı burada başlar.",
  kaynak:"yergogu" },
```

📌 Bu madde aynı zamanda §12'nin *"İkili renk ilkesi DOĞRU"* hükmünün kronolojik
karşılığıdır — Eflak'ın Tuna kıyısındaki kazaların doğrudan idaresi bir istisna
değil, 1420'den beri süren bir yapıdır.

⚠️ **Rusçuk'a 5,3 km.** 3 km kuralını geçiyor ama yakın — ve **kasten öyle.** TDV:
Osmanlı belgelerinde Rusçuk *"Yergöğü beri yaka"*, Giurgiu *"Yergöğü öte yaka"*
diye geçiyor; ikisi Tuna'nın iki yakasında **aynı geçidin** iki ucu. Motor hücre
sınırını nehir yatağına yasladığı için ikisi çatışmaz, **Tuna onları ayırır** —
ve asıl istenen bu: sol yakadaki doğrudan Osmanlı kazası gerçek bir noktadan
doğsun, emilmeden.

🟡 **İki not:**
- TDV *"Yergöğü kazası **Niğbolu** sancak beyliğine bağlı idi"* diyor. Ama Niğbolu
  veride `k:3`, oysa `m:` bir **k1/k2** merkezine işaret etmeli — bu yüzden
  `m:"Sofya"` yazdım (Niğbolu'nun kendi `m:`'i de Sofya). **#52**: Niğbolu bir
  sancak merkeziyken `k:3` görünüyor; kademe değeri gözden geçirilmeli.
- `1829-09-14` sonrası `romanya` yazdım çünkü **İbrail birebir öyle** — ikisi aynı
  Edirne hükmünde geçiyor, farklı davranmaları tutarsızlık olur. Ama Romanya 1859
  öncesinde **yok**; **#53**: İbrail ve Yergöğü'nün 1829-1859 arası `eflak` olması
  gerekir. İkisi birlikte düzeltilmeli, ayrı ayrı değil.

### 29.3 Kalan 14 nokta — ayıklama, tek turda yapılmaz

| Öbek | Noktalar | Durum |
|---|---|---|
| **A. TDV tarihi ELDE, hazırlanabilir** | **Turnu** · **Fethülislâm (Orşova)** | 🟢 `yergogu` maddesi ikisinin de 1420 ilhakını veriyor — §23'te "kaynak yok" dediğim Fethülislâm **kısmen çözüldü**. Sonraki zincirleri (Avusturya işgalleri, 1867 garnizonu) hâlâ araştırma istiyor |
| **B. Antlaşma yerleri** | Karlofça · Pasarofça · Ziştovi · Küçük Kaynarca · Vasvár · Bucaş | 🟡 Her birinin maddesi zaten var (antlaşma maddeleri), yani **Değişmez 2 tarafı kolay**; zorluk zincirin kendisi. Ziştovi ve Pasarofça Tuna/Morava hattında, coğrafî değerleri yüksek |
| **C. Savaş/kuşatma yerleri** | Güns (Kőszeg) · Kumanova · Missolonghi · Lugoş | 🟡 Missolonghi'nin maddesi var (`1826-04-22`), Kumanova Balkan Savaşı'nda geçiyor |
| **D. Yerleşim, savaş dışı** | Aydos (Aytos) · Yanbolu (Yambol) · Leş (Lezhë) | 🟡 Bulgaristan ve Arnavutluk iç noktaları — nokta yoğunluğu açısından faydalı |

📌 **Dürüst tahmin: 14 nokta × (TDV taraması + zincir + kırılma ölçümü) bir oturumun
işi, bir turun değil.** Yergöğü'nü seçtim çünkü (1) kendi hatamı düzeltiyor,
(2) kaynağı elimdeydi, (3) az önce teslim ettiğim Eflak paketinin eksik ayağı.
Sırayı merkez versin; A öbeği en ucuz, B en yüksek görünürlükte.

---

## 30. ANTLAŞMA YERLERİ — U4'ün uyarısı doğru ama risk TERS yönde

VERİ KRONOLOJİ 2, ARABİSTAN'ın (A5) Kevkebân vakasını aktardı: *madde 1567 diyor,
TDV alınışı 1569 veriyor → nokta eklenirse Değişmez 2 açık verir.* Uyarı yerinde.
**Ama antlaşma yerlerinde asıl risk bu değil.** Karlofça'yı ölçtüm.

### Karlofça — üç ayrı tarih, üçü de farklı

TDV `karlofca` (canlı):

| Olay | Tarih | TDV'nin ifadesi |
|---|---|---|
| **Osmanlı'nın alışı** | **Ağustos 1521** | *"Belgrad'ın 927 Ramazanında (Ağustos 1521) Osmanlılar'ca fethi sırasında Sirem bölgesinin diğer kaleleriyle birlikte ele geçirildi"* |
| **Fiilen elden çıkışı** | **1687** | *"1687'de Karlofça Avusturyalılar'ın eline geçti. Böylece **Osmanlı hâkimiyeti dönemi sona ermiş oldu**"* |
| **Antlaşmanın imzası** | **26 Ocak 1699** | *"1110'da (1699) burada yapılan antlaşma ile de **resmen** Avusturya'ya terkedildi"* |

⇒ **Yer, antlaşmadan on iki yıl önce el değiştirmiş.** 1699'a kırılma yazmak,
zaten Avusturya'da olan bir kasabayı ikinci kez kaybettirmek olur.

### Kural — antlaşma yerinde ÜÇ tarih ayrılmalı

| Ne | Haritadaki karşılığı |
|---|---|
| **1. Antlaşmanın imzalandığı gün** | **HİÇBİRİ.** Bu bir kronoloji olayıdır, toprak değişimi değil. Karlofça'da imza atılmış olması Karlofça'yı el değiştirmiş yapmaz |
| **2. Yerin fiilen el değiştirdiği gün** | 🔴 **Kırılma budur** — Karlofça'da 1687 |
| **3. Değişimin resmîleştiği gün** | Genellikle antlaşma. Fiilî tarihle arası **yıllar** olabilir |

📌 A5'in uyarısı **2 ile 3 arasındaki farkı** anlatıyor (Kevkebân'da iki yıl).
Antlaşma yerlerinde ek olarak **1 ile 2 arasındaki fark** var ve o daha büyük:
Karlofça'da on iki yıl, üstelik **ters yönde** — imza günü, yerin çoktan
kaybedilmiş olduğu gündür.

⚠️ **Sonuç: antlaşma yerine nokta eklerken antlaşmanın tarihine BAKMA.** O yerin
kendi maddesini oku ve fiilî el değiştirme gününü ara. Karlofça'nın maddesi
antlaşmayı anlatan bölümle şehri anlatan bölümü zaten ayırmış (madde iki bölümlü).

📌 Bu, projede zaten tanıdık bir sınıf: §10'da Yanova'nın kaybı veride
`1693-01-01` yazılıyken TDV **27 Mayıs 1693** diyordu; §9'da Hotin'in doğrudan
idareye geçişi 1713 Edirne Antlaşması'na bağlıydı ama fiilî kopuş 1711 Prut
seferiyle başlamıştı. **De facto ile de jure ayrımı bu projenin tekrar eden
kusur ailesidir.**

### Yan kazanç — Karlofça artık ucuz

Zincirin iki ucu da kaynaklı çıktı: `d:` **1521-08** → **1687**, sonra
`s:"avusturya"`. Yani §29.3'te "B öbeği pahalı" diye tahmin etmiştim, **Karlofça
için yanlış** — TDV maddesi hem alınışı hem kaybı veriyor. Diğer beş antlaşma
yerinin de kendi maddesi olup olmadığına bakmak gerekiyor; `zistovi`, `pasarofca`,
`pozarevac`, `kucuk-kaynarca`, `vasvar` künyelerinin **beşi de ÖLÜ** çıktı, yani
onlar için aynı şans yok.

---

## 31. HOMONİM TARAMASI — U4'ün "büyük ek iş" dediği şeyin ölçülebilir kısmı

U4, `yer:` eşleştiricisinin yalnız dizge baktığını, koordinat doğrulamadığını
söyledi ve tam taramayı ertelemişti. **Ucuz kısmını ölçtüm.**

### 31.1 Sayılar

| | |
|---|---|
| Benzersiz `yer:` parçası | **920** |
| **TAM** eşleşen | 421 |
| **ÖNEK/superstring** eşleşen | **119** ← Aydos bu sınıfta |
| Hiç eşleşmeyen | 380 |

### 31.2 🟢 "Belirsiz ad" sınıfı KÜÇÜK — dörtte biri gerçek

Bütün korpusta aynı ada sahip **yalnız 4 kayıt öbeği** var:

| Ad | Kayıtlar | Gerçek risk? |
|---|---|---|
| **Yenişehir** | Yenişehir (Bursa) · Yenişehir (Larissa) | 🔴 **EVET — 621 km.** İkisi de yerleşik bölgede, ikisi de olaylarda geçiyor |
| Kordofan | Kordofan (Ubeyyid) · Kordofan | 🟡 80 km, aynı bölge — pratikte zararsız |
| Sire | Sire (Syros) · Şire | 🟡 farklı yazım, katı eşleştirici çakıştırmaz |
| Üstyurt platosu | batı · doğu | 🟢 kasıtlı ikili |

⇒ **U4'ün korktuğu "listelerimde başka homonim tuzakları olabilir" endişesi
ölçülünce küçüldü: kayıt tarafında tek gerçek vaka Yenişehir.**

### 31.3 ÖNEK SINIFI — 119 eşleşme

> ⚠️ **DÜZELTME (U4'ün sınamasından sonra).** Aşağıdaki beş vakayı "U4'ün
> listelerindeki tehlike" diye sundum. **Yanlıştı.** U4 beşini de kendi kodunda
> sınadı: Aydos, Açe, Dara ve Baranya **hiç eşleşmiyor**, Eğriboz **doğru**
> eşleşiyor. Sebebi de tesadüf değil — U4'ün eşleştiricisi **tek yönlü ve
> kelime-sınırlı**: "bilinen ad, sorgunun İÇİNDE geçiyor mu" diye soruyor.
> Benim beş vakam ise hep **ters yöndeydi** (kayıt, sorgunun önünde). O yön
> onların kodunda hiç denenmiyor.
>
> ⇒ **Ölçtüğüm şey, U4'ün boru hattındaki risk değil; kendi yazdığım
> eşleştiricinin riskiydi.** Aşağısı bir *tasarım uyarısı* olarak duruyor —
> "çift yönlü önek eşleştirmesi kurulursa bu beş vaka patlar" — canlı bir kusur
> listesi olarak değil.
>
> 📌 Kendi payıma ders: **bir aracı ölçerken, ölçtüğüm aracın ölçülmek istenen
> araç olduğunu doğrulamadım.** Bugünkü "sayıyı hangi durumdan geldiğini
> doğrulamadan kullanma" hatasının üçüncü biçimi.

Çoğu eşleşme **zararsız nitelemedir** (*"Ankara önleri"* → Ankara,
*"Belgrad çevresi"* → Belgrad, *"Edirne yakını"* → Edirne). Çift yönlü bir
eşleştirici kurulursa **kimliği değiştirecek** olanlar şunlar:

| `yer:` değeri | Eşleştiği kayıt | Hata |
|---|---|---|
| **Aydos** | Aydos Kalesi | 🔴 Bulgaristan ↔ **Kartal**, ~1400 km |
| **Açe (Sumatra)** | Aseb | 🔴 Sumatra ↔ **Eritre**, ~6000 km |
| **Dara** | Dârâb | 🔴 Mezopotamya ↔ **İran** |
| **Baranya** | Bar (Podolya) / Bâra | 🔴 Macaristan ↔ **Ukrayna** |
| **Eğriboz adası** | Eğriboz **veya Eğri** | 🔴 Eğri seçilirse Ege ↔ **Macaristan** |

📌 **Ayırt edici desen:** tehlikeli olanlar, sorgunun kayıttan **kısa** olduğu ve
kaydın eklediği kelimenin **kimliği değiştirdiği** hâller (`Aydos` → `Aydos
Kalesi`), ya da normalizasyonun fazla agresif olup **farklı adları çakıştırdığı**
hâller (`Açe`→`Aseb`, `Dara`→`Dârâb`). Zararsız olanlar tersidir: kayıt kısadır,
sorgu ona bir niteleme ekler.

### 31.4 ❌ İŞE YARAMAYAN SEZGİ — kaydedilsin ki tekrar denenmesin

Şunu denedim: *"bir maddenin `yer:` alanındaki değerler birbirinden çok uzağa
çözülüyorsa biri yanlış eşleşmiştir."* **Çalışmıyor.** 900 km eşiğiyle 15 madde
çıktı ve **on beşi de meşru**:

```
Kahire – İstanbul (1236 km)   Londra, Paris, Viyana (1274 km)
Şam – Medine (1058 km)        İstanbul – Venedik (1480 km)
```

Diplomatik olaylar doğası gereği iki başkenti birden anar. **Yayılım homonim
sinyali değildir.** Üstelik Aydos'u da yakalamazdı — o tek değerli bir `yer:`,
karşılaştırılacak ikinci nokta yok.

⇒ **Ucuz ve işe yarayan iki sınama:** (1) ad **birden fazla** kayda çözülüyor mu,
(2) eşleşme **tam mı, önek mi**. İkisi de koordinat gerektirmiyor. Anlamsal
yanlışlık (sözdizimsel olarak tek, coğrafî olarak yanlış) için ucuz bir sınama
**yok** — orada okumak gerekiyor.

### 31.5 Turdan geriye ne kaldı — üç sonuç, biri düzeltilmiş

| Bulgu | Durum |
|---|---|
| **Aydos gerçekten eksik** — `Aydos Kalesi` var ama Kartal'daki, Bulgaristan'ınki yok | ✅ **AYAKTA.** U4'ün "eksik" damgası doğruymuş; benim katkım *neden* göründüğü kadar basit olmadığını göstermek oldu |
| **Yenişehir tek gerçek homonim** (Bursa ↔ Larissa, 621 km) | ✅ ayakta, eşleştiriciden bağımsız — iki kayıt gerçekten aynı adı taşıyor |
| **900 km yayılım sezgisi çalışmıyor** (15/15 meşru) | ✅ ayakta, negatif sonuç olarak değerli |
| ~~Beş tehlikeli önek vakası~~ | 🔴 **DÜZELTİLDİ** — U4'ün kodunda yok, benimkinde vardı (§31.3) |

📌 U4'ün kendi teşhisi de kayda değer: tek yönlü eşleştirici, ters yöndeki gerçek
çözümleri **kaçırma** pahasına yanlış eşleşmeden korunuyor — yani hata yönü
`§7.2`'nin tercih ettiği yönde: *eksik alan, yanlış alandan iyidir.*

---

## 32. ⭐ BOSNA — A BLOĞU (dört TDV'li şehir) · YAMACI uygular

Merkez A+B'yi onayladı. **`data/`ya ben yazmadım.**

### 32.1 ⚠️ ÖNCE BİR TAHMİN DÜZELTMESİ

Merkeze *"A bloğu ortancayı ~72'den ~45 km'ye indirir"* demiştim. **Ölçtüm, yanlış:**

```
BUGÜN             4 nokta | ortanca 72.1 km
A bloğu sonrası   8 nokta | ortanca 62.5 km    ← 45 değil
```

Sebep: nokta sayısı ikiye katlanıyor ama dördü kutunun **farklı köşelerine**
dağılıyor; ortanca ancak kümelenme olunca hızlı düşer. **Gerçek sıçrama C
bloğunda** — TDV'siz altı şehir iç Bosna'yı dolduruyor.
📌 Önceki tahminim on şehirlik kümenin simülasyonundan geliyordu; dördünü ayırıp
yeniden ölçmedim. Bugünkü hata ailesinin bir biçimi daha: **alt kümenin
davranışını üst kümeden çıkarsamak.**

### 32.2 Dört kayıt

3 km kuralı rahat geçiliyor — en yakın komşular: Travnik 68,5 km · İzvornik 61,9 ·
Foça 48,8 · Livno 63,1.

```js
{ ad:"Travnik", tur:"kale", lat:44.226, lon:17.665, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1463-06-01",t:"1908-10-05",y:"savas"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"İzvornik (Zvornik)", tur:"kale", lat:44.386, lon:19.103, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1460-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1460-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Foça (Foča)", tur:"sehir", lat:43.506, lon:18.779, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1465-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1465-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Livno (İhlevne)", tur:"kale", lat:43.827, lon:17.008, g:0, k:4, m:"Saraybosna", s:[{f:"1281-01-01",t:"1469-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1469-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
```

Dördü de Saraybosna'nın 1878/1908/1918 kuyruğunu **birebir** taşıyor — `isg:`
işgal deseni dâhil — ki Bosna gövdesi tek parça davransın.

### 32.3 Tarihlerin dayanağı

| Nokta | Tarih | TDV |
|---|---|---|
| **İzvornik** | **1460** | `izvornik`: *"Osmanlılar burayı **1460**'ta fethettiler… 1480'de aynı adlı sancağın merkezi oldu"* |
| **Travnik** | **1463-06-01** | `travnik`: *"Travnik adı ilk defa **1463**'te Fâtih Sultan Mehmed'in **Bosna seferiyle** ilgili olarak zikredilir. O zamanlar Travnik … küçük bir kaleydi"* → kale sefer sırasında mevcut, Saraybosna ile aynı gün |
| **Foça** | **1465** | `foca`: *"Buranın Osmanlı idaresine geçişi **1465**'te gerçekleşmiştir"* |
| **Livno** | **1469** | `livno`: *"Kesin Osmanlı hâkimiyeti büyük bir ihtimalle **1468-1469**'da gerçekleşti"* |

🟡 **Livno'nun tarihi ARALIKLI.** Aralığın **sonunu** aldım çünkü TDV *"kesin
hâkimiyet"* diyor — 1468'de henüz kesin değil. `gun:` alanında aralık yazılı.
🟡 TDV ayrıca Livno'nun **1463'te kısa süre işgal edilip aynı yıl geri alındığını**
söylüyor ama gün vermiyor. **Modellemedim**, iki kırılma daha açardı; not düşüldü.

### 32.4 🔴 İki kırılmanın maddesi YOK — E-6 ve E-7

| Kırılma | Durum |
|---|---|
| `1460-01-01` | ✅ 0 gün — *"Batı Karadeniz kıyısının alınışı: Amasra"* 🟡 konusu alâkasız ama geçiyor |
| `1463-06-01` | ✅ **tam yerinde** — *"Bosna'nın fethi"* |
| `1465-01-01` | 🔴 **YOK**, en yakın 365 gün → **E-6** |
| `1469-01-01` | 🔴 **YOK**, en yakın 275 gün → **E-7** |
| `1878-07-29` · `1908-10-05` · `1918-11-11` | ✅ Saraybosna zaten kullanıyor |

⚠️ **Sıralama kısıtı** — kayıtlar ve E-6/E-7 **aynı adımda**.

```js
{ t:"1465-01-01", k:"fetih", etiket:["toprak-kazanc","idare"],
  b:"Foça'nın alınışı — Hersek Düklüğü'ne ilk girişin açılması",
  gun:"1465", yer:"Foça (Foča), Drina vadisi, Hersek",
  kisiler:"Fatih Sultan Mehmed, Hersek Dükü Stjepan Vukçiç-Kosaça",
  d:"Bosna Krallığı 1463'te ortadan kaldırıldıktan sonra sıra, krallıktan ayrılıp kendi düklüğünü kuran Stjepan Vukçiç-Kosaça'nın topraklarına geldi. Drina vadisinde, İstanbul'u Dubrovnik'e bağlayan ticaret yolunun kavşağında bulunan Foça 1465'te Osmanlı idaresine girdi. Şehrin önemi hemen anlaşıldı: 1470'te yeni teşkil edilen Hersek sancağının merkezi yapıldı — yani Hersek'in idarî çekirdeği, düklüğün kendisi daha yıkılmadan Foça'da kuruldu. Düklüğün tamamının ilhakı 1483'e kadar sürecekti. Foça bundan sonra elverişli iklimi ve yol kavşağındaki konumu sayesinde bir ticaret ve idare merkezi olarak gelişti. Haritada bu tarih, Bosna'nın fethinden sonra güneye doğru ikinci dalganın başladığı gündür.",
  kaynak:"foca" },

{ t:"1469-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Livno ve batı Bosna'nın kesin ilhakı — Venedik sınırının kurulması",
  gun:"1468-1469 (TDV kesin gün vermiyor)", yer:"Livno (İhlevne), Livno ovası, batı Bosna",
  kisiler:"Fatih Sultan Mehmed, Ivaniš Vlatković",
  d:"Livno ovasına hâkim plato üzerindeki kale, 1448-1454 arasında Hersek Düklüğü'nün kurucusu Stjepan Vukçiç-Kosaça'nın elindeydi. 1463 Bosna seferinde kısa bir süre Osmanlı kuvvetlerince işgal edilmiş, ancak aynı yıl geri alınmıştı; 1466'da şehrin hâkimi Ivaniš Vlatković'tir. TDV'nin ifadesiyle kesin Osmanlı hâkimiyeti büyük bir ihtimalle 1468-1469'da gerçekleşti ve 1485 tahriri Livno'yu artık Osmanlı toprağı olarak kaydeder. Bu, Bosna fethinin batı ucunun kapanmasıdır: Livno, düz ova boyunca yalnız otuz altı kilometre ötedeki Venedik topraklarına komşu, tehlikeli bir sınır kasabası hâline geldi ve bu konumunu 1521-1522'de Bosna Valisi Gazi Hüsrev Bey'in Venedik kalelerini almasına kadar korudu.",
  kaynak:"livno" },
```

### 32.5 B bloğu — Hersek delili yazıldı, kimlik bekliyor

Merkezin talimatına uyuldu, **ama dört kayıtta da `bosna` yazmak zorunda kaldım:**

| Nokta | Gerçek 1463 öncesi sahibi | Yazılan | Neden |
|---|---|---|---|
| Travnik · İzvornik | Bosna Krallığı | `bosna` | ✅ doğru |
| **Foça** | **Hersek Düklüğü** (Kosaça) | `bosna` | 🔴 geçici — `hersek` rengi yok |
| **Livno** | **Hersek Düklüğü** | `bosna` | 🔴 geçici |
| **Mostar** (mevcut) | **Hersek Düklüğü** | `bosna` | 🔴 geçici — merkezin işaret ettiği kayıt |

🎁 **Delil TDV `foca`'da ve doğrudan:** *"**1470**'te Foça yeni teşkil edilen
**Hersek sancağının merkezi** oldu."* Düklük 1483'te yıkılıyor ama sancak
1470'te kuruluyor — Hersek, Bosna'dan **idarî olarak da** ayrı bir birim. Ayrıca
`1483-01-01` maddesi zaten *"**Hersek'in ilhakı**"* adını taşıyor.

⇒ **#54:** `renkler.py`'ye `hersek` girince **dört kayıtta** `bosna` → `hersek`
(Foça · Livno · Mostar + C bloğundan gelenler). Tek turda yapılmalı.

---

## 34. BOSNA — C BLOĞU: TDV beklediğimden fazlasını verdi, ikisi de büyük

C'yi *"TDV'siz altı şehir, standart akademik kaynakla"* diye planlamıştım.
**İkisi TDV'de çıktı — ve ikincisi mevcut bir kaydın 15 yıl yanlış olduğunu
gösteriyor.** Kalan dördü için TDV'de gerçekten hiçbir şey yok.

### 34.1 🔴 YAYÇA (Jajce) 1463'te DEĞİL, 1528'de düştü

TDV `bosna-hersek`, tek cümlede:
> *"Srebrenik banatlığı **1512**'de, **Yayça ve Banaluka** ise Mohaç Zaferi
> sonrasında (**1527 veya 1528**) ele geçirilebildi."*

⇒ Bosna Krallığı 1463'te yıkıldı ama **kuzeyi altmış beş yıl daha Macar elinde
kaldı** — Mátyás Corvin'in karşı taarruzuyla kurulan Yayça banatlığı. Haritada
bugün bu hiç görünmüyor çünkü Yayça'nın noktası yok.

🎁 **Kronoloji maddesi ZATEN VAR ve adı birebir doğru:**
`1528-01-01` → *"**Kuzey Bosna'nın ilhakı: Yayça ve Banaluka**"*
Yani madde Yayça'yı adıyla anıyor, harita göstermiyor. **Yeni madde gerekmiyor.**

```js
{ ad:"Yayça (Jajce)", tur:"kale", lat:44.342, lon:17.271, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1463-06-01",t:"1528-01-01",d:"macaristan"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1528-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
```

Her iki kırılmanın da maddesi var: `1463-06-01` *"Bosna'nın fethi"* ·
`1528-01-01` *"Kuzey Bosna'nın ilhakı"*. Travnik'e 33,8 km.

🟡 **#55 — Banaluka'da aynı kusur.** Mevcut kayıt `s:"bosna"` 1281→1528 diyor,
oysa TDV ikisini **aynı cümlede, aynı âkıbetle** anıyor: Banaluka da 1463-1528
arası Macar banatlığındaydı. Yayça `macaristan` yazılıp Banaluka `bosna` kalırsa
iki komşu kale aynı yıllarda **farklı renkte** görünür. İkisi birlikte düzeltilmeli.

### 34.2 🔴 SARAYBOSNA 1463 DEĞİL, 1448 — mevcut kayıt 15 yıl geç

TDV `saraybosna`:
> *"Osmanlılar ilk olarak **1428-1435** yılları arasında … **Hodidjed** kasabasını
> ele geçirdiler. **Hodidjed vilâyeti Saray ovası ile beraber 852'de (1448)
> tamamen Osmanlı idaresi altına girdi.**"*

Ve şehrin kendisi fetihten **önce** kurulmuş: *"**1462 yılından önce** burada
Bosna sancak beyi İshak Bey veya oğlu Îsâ Bey tarafından ilk müslüman yerleşimi
kuruldu"*; Hünkâr Camii **862 (1458)** tarihli.

⇒ **Saraybosna'nın bulunduğu ova 1448'den beri Osmanlı.** Mevcut kayıt
`d:{f:"1463-06-01"}` diyor — bu tarih **Bosna Krallığı'nın yıkılışına** aittir,
bu şehre değil. Îsâ Bey'in uç beyliği olarak idare ettiği Saray ovası, çevresinde
hâlâ tâbi Bosna beyleri varken Osmanlı toprağıydı.

**Düzeltme (#56):** Saraybosna `d:` başı `1463-06-01` → **`1448-01-01`**,
`s:"bosna"` bitişi de aynı (**iki eşleşme**, `CLAUDE.md §11`).
🔴 **`1448-01-01`'in maddesi YOK** — en yakın 274 gün (*"II. Kosova Savaşı"*,
`1448-10`). **E-8 gerekiyor**, kayıtla aynı adımda.

```js
{ t:"1448-01-01", k:"fetih", etiket:["toprak-kazanc","idare"],
  b:"Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun kurulması",
  gun:"1448", yer:"Hodidjed, Saray ovası (Vrhbosna), orta Bosna",
  kisiler:"II. Murad, Üsküp beyi İshak Bey, oğlu Îsâ Bey",
  d:"Bosna kralları 1428-1429'da haraca bağlandıktan sonra Osmanlılar krallığın içine doğru kalıcı biçimde yerleşmeye başladı. 1428-1435 arasında Hodidjed kasabası alındı; 852'de (1448) Hodidjed vilâyeti Saray ovasıyla birlikte tamamen Osmanlı idaresine girdi. Bu, Bosna'nın fethinden on beş yıl önce krallığın ortasında kurulmuş bir uç sahasıdır ve voyvoda unvanı taşıyan Üsküp beyi Îsâ Bey tarafından idare edilmiştir — çevresinde hâlâ Osmanlı'ya tâbi Bosna beyleri bulunduğu için bölge çift taraflı denetim altındaydı. Şehrin kendisi de bu dönemde doğdu: 1462'den önce İshak Bey ya da oğlu Îsâ Bey ilk müslüman mahallesini kurdu, 862'de (1458) Fâtih adına Hünkâr Camii yapıldı ve Brodec köyünün ekinliği imar edilerek Saray kasabası ortaya çıktı. 1463'teki fetih Bosna Krallığı'nı ortadan kaldırdı; Saray ovası ise o tarihte zaten on beş yıldır Osmanlı toprağıydı.",
  kaynak:"saraybosna" },
```

### 34.3 Srebrenik 1512 — sourced ama madde gerektiriyor

Aynı TDV cümlesi: *"**Srebrenik banatlığı 1512**'de … ele geçirilebildi."*
⚠️ **Srebrenik ≠ Srebrenica** — ikisi ayrı yer, karıştırılmaya çok müsait.
Srebrenik 44.705K / 18.489D, İzvornik'e 60 km.
🔴 `1512-01-01`'in maddesi **YOK** (114 gün). İstenirse yazarım — ama Yayça ve
Saraybosna kadar acil değil, kararı merkeze bırakıyorum.

### 34.4 ❌ TDV'DE HİÇBİR ŞEY BULUNAMAYAN DÖRT ŞEHİR — atlandı, atlandığı yazıldı

**Srebrenica · Tuzla · Bobovac · Visoko · Ključ** için TDV'de ne müstakil madde
var ne de başka maddelerde fetih tarihi geçiyor. Denenen künyeler:
`srebrenica` · `srebrenice` · `tuzla` · `bobovac` · `visoko` · `visoka` · `kljuc`
· `tesanj` · `maglaj` · `gracanica` · `yenipazar` — **hepsi ölü.**
`bosna-hersek`, `saraybosna` ve `izvornik` maddeleri Tuzla ve Gračanica'yı yalnız
**XVI. yüzyıl sonrası** bağlamlarda anıyor, fetih tarihi vermiyor.

⇒ **Merkezin kuralı gereği koymadım.** Bobovac özellikle değerli olurdu (Bosna
Krallığı'nın son başkenti, 1463'te düşen ilk yer) ama tarihini de konumunu da
TDV'den doğrulayamadım; standart akademik kaynak turu ayrı bir iş olarak açılmalı.

### 34.5 Yoğunluk

```
BUGÜN         4 nokta | ortanca 72.1 km
A bloğu       8 nokta | ortanca 62.5 km
A + C         10 nokta | ortanca 52.8 km
```
Hedef 36 km'ye ulaşmıyor — çünkü C'nin altı şehri ikiye indi. Kalan yol
TDV dışı kaynak gerektiriyor.

---

## 35. #53 — İbrail ve Yergöğü'nün `romanya` anakronizmi

Merkez ⑥'da istedi. İki kayıt da Edirne Antlaşması'nın (1829) **aynı hükmünde**
geçiyor — TDV `yergogu`: *"Edirne Antlaşması'na göre **İbrâil ve Kule/Turnu ile**
Eflak Prensliği'ne bırakıldı."*

🔴 **Ama ikisi de `1829-09-14`'ten itibaren `s:"romanya"` taşıyor** (Yergöğü
paketinde ben de tutarlılık için öyle yazdım). **Romanya 1859'da kuruldu** —
otuz yıllık anakronizm.

**Düzeltme:** her iki kayıtta `1829-09-14 → 1923-10-29 romanya` dönemi ikiye
bölünsün:
```
{f:"1829-09-14", t:"1859-01-24", d:"eflak"}      ← Edirne'nin bıraktığı yer: Eflak Prensliği
{f:"1859-01-24", t:"1923-10-29", d:"romanya"}    ← Cuza'nın birleştirmesi
```
✅ **Yeni madde gerekmiyor:** `1859-01-24` maddesi var — *"Eflak ve Boğdan'ın
Cuza yönetiminde birleşmesi: Romanya'nın doğuşu"*. `eflak` kimliği `BOYALAR`'da
mevcut (Bükreş kullanıyor).
📌 Yan fayda: bu düzeltmeyle **1859 birleşmesi haritada gerçekten görünür olur** —
şu an İbrail ve Yergöğü o tarihte hiçbir şey yapmıyor.

---

## 36. ① "BOSNA'NIN FETHİ" MADDESİNİN BÖLÜNMESİ

Mevcut madde (`olaylar_ek.js`, `1463-06-01`) şöyle diyor:
> *"Bosna krallığı **bir seferde tasfiye edildi**… Aynı tarihte haritaya katılan
> diğer yerleşimler: **Saraybosna**."*

🔴 **İki cümlenin ikisi de artık yanlış.** Krallık bir seferde yıkıldı ama
**Bosna'nın fethi seksen yıl sürdü**; ve Saraybosna 1463'te değil **1448**'de
katılıyor (§34.2).

### Beş maddelik zincir — üçü hazır, ikisi yazıldı

| Tarih | Madde | Durum |
|---|---|---|
| **1448** | Saray ovasının ilhakı — Bosna içindeki Osmanlı ucu | **E-8**, §34.2'de yazıldı |
| **1463-06-01** | Bosna Krallığı'nın yıkılışı | mevcut — **metni düzeltilmeli**, aşağıda |
| **1465** | Foça — Hersek'e ilk giriş | **E-6**, §32.4 |
| **1469** | Livno — batı ucun kapanması | **E-7**, §32.4 |
| **1483-01-01** | Hersek'in ilhakı | ✅ mevcut ve iyi |
| **1512** | Srebrenik banatlığı | **E-9**, aşağıda |
| **1528-01-01** | Kuzey Bosna: Yayça ve Banaluka | ✅ mevcut ve iyi |

⇒ Kullanıcının *"Bosna fethinde katılan topraklar ancak bu kadar mı, hangi
şehirler katıldı ise ayrı ayrı söyleyelim"* sorusunun cevabı: **yedi tarih,
seksen yıl.**

### 36.1 `1463-06-01` maddesinin düzeltilmiş metni

`b:` **"Bosna Krallığı'nın yıkılışı — Fâtih'in Bosna seferi"**
`gun:` "1463 yazı" (değişmiyor) · `kaynak:` `bosna-hersek` (değişmiyor)

```
d:"Son Bosna kralı Stjepan Tomašević (1461-1463) Batı desteğine güvenerek haraç ödemeyi reddedince tâbi hükümdar olmaktan çıkmış sayıldı ve Fâtih Sultan Mehmed idaresindeki ordu Bosna Krallığı'nı bir seferde tasfiye etti. Kral yakalanıp idam edildi, krallık ortadan kalktı ve bölgede Bosna sancağı kuruldu. Ancak KRALLIĞIN yıkılışı BOSNA'NIN fethiyle aynı şey değildir. Osmanlı idaresi ovada zaten on beş yıldır vardı — Hodidjed ve Saray ovası 1448'de alınmış, Îsâ Bey'in uç beyliği krallığın ortasında kurulmuştu. Fetih 1463'te de bitmedi: Foça 1465'te, Livno 1469'da, Hersek Düklüğü 1483'te, Srebrenik banatlığı 1512'de, kuzeydeki Yayça ve Banaluka ise ancak Mohaç'tan sonra 1528'de alınabildi — Macarlar 1463'ten sonra Bosna'nın kuzeyinde altmış beş yıl tutunan bir banatlık kurmuştu. Bu tarihte doğrudan el değiştiren yer Travnik'tir; Yayça ise bu tarihte Osmanlı'ya değil Macaristan'a geçmiştir."
```

📌 Metin kullanıcının sorduğu ayrımı **maddenin kendi içinde** yapıyor: krallığın
yıkılışı ≠ bölgenin fethi.

### 36.2 E-9 — Srebrenik 1512

```js
{ t:"1512-01-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Srebrenik banatlığının ilhakı — kuzey Bosna'da Macar hattının ilk kırılması",
  gun:"1512", yer:"Srebrenik, kuzeydoğu Bosna",
  kisiler:"II. Bayezid",
  d:"Bosna Krallığı 1463'te yıkıldıktan sonra Mátyás Corvin karşı taarruza geçmiş ve krallığın kuzeyinde Osmanlı ilerleyişini durduran iki banatlık kurmuştu: batıda Yayça, kuzeydoğuda Srebrenik. Bunlar Macaristan'ın Bosna'daki ileri savunma hattıydı ve Sava ile Bosna arasındaki koridoru kapatıyorlardı. Srebrenik banatlığı 1512'de ele geçirildi; böylece hattın doğu kanadı çöktü ve İzvornik sancağı kuzeye doğru genişleyebildi. Batı kanadındaki Yayça ise on altı yıl daha dayanacak, ancak Mohaç'tan sonra 1528'de alınabilecekti. ⚠️ Srebrenik, Drina üzerindeki Srebrenica ile karıştırılmamalıdır; ikisi ayrı yerlerdir.",
  kaynak:"bosna-hersek" },
```

⚠️ **Srebrenik ≠ Srebrenica** uyarısını maddenin içine koydum — bugün ölçtüğüm
homonim sınıfının (§31) canlı bir örneği ve kayıt açılırsa karışması çok kolay.

---

## 37. ② `fethedilen:` ALANI — şema önerisi

Merkez istedi: ARAYÜZ *"bu maddede el değiştiren şehirler"* alanı olmadan tarih
etiketi yazamıyor; 1.360 çiftin **739'u yanıltıcı** etiket üretiyor.

### 37.1 🎁 Alan yeni değil — 56 maddede ZATEN VAR, ama düz metin olarak

Ölçtüm: **997 maddenin 56'sı** şu cümleyi taşıyor:
> *"Aynı tarihte haritaya katılan diğer yerleşimler: **Giresun, Rize**."*
> *"… : **Bahçesaray, Kerç, Azak**."* · *"… : **Akkâ, Maan, Sayda, Kerak**."*

⇒ **Öneri yeni bir kavram getirmiyor; var olan bir konvansiyonu ayrıştırılabilir
hâle getiriyor.** Bu, kabul için en güçlü argüman — 56 madde alanı zaten
dolduruyor, yalnız makine okuyamıyor.

### 37.2 Şema

```js
fethedilen:["Travnik"]                      // bu maddede EL DEĞİŞTİREN yerleşimler
fethedilen:["Yayça (Jajce)","Banaluka"]     // 1528 maddesi
```

- Değerler `yerlesimler*.js`'teki `ad` alanına **birebir** eşleşir (Aydos dersi:
  ad eşleşmesi gevşek olursa kimlik kayar — §31)
- **Zorunlu değil.** Yokluğu "bilinmiyor" demektir, "hiçbiri" değil
- `d:` metnindeki *"Aynı tarihte haritaya katılan…"* cümlesi kaldırılır, bilgi
  alana taşınır

### 37.3 🔴 TASARIM SINIRI — ölçülmeden konmamalı

Ölçtüm: **240 tarihte birden fazla yerleşim el değiştiriyor.** Ama uçlar şöyle:

```
1402-07-28  →  165 yerleşim   (Ankara sonrası çözülme)
1413-07-05  →  106 yerleşim   (Fetret'in kapanışı)
1923-10-29  →  180 yerleşim   (verinin ufku)
1299-01-01  →    3 yerleşim   (İnegöl, Bilecik, Yarhisar)
```

⇒ **Alan her maddeye konamaz.** 165 ad listelemek ne yazılabilir ne okunabilir.
`fethedilen:` yalnız **sayılabilir** kümeler için anlamlıdır; toplu geçişler
(saltanat değişimi, verinin ufku, Fetret çözülmesi) alansız bırakılmalıdır.

### 37.4 ⭐ Etiket sorununu EKLEYEREK değil, ATLAYARAK çözüyor

ARAYÜZ kuralı şu olmalı: **`fethedilen:` listesinde adı geçmeyen şehre tarih
etiketi YAZILMAZ.**

| | Bugün | `fethedilen:` sonrası |
|---|---|---|
| Fatih 1481 maddesinde **Bursa** | *"1326"* (68 yıl sapma) | **etiket yok** — listede değil |
| Aynı maddede **Rodos** | *"1310"* (170 yıl) | **etiket yok** |
| 1528 maddesinde **Yayça** | yanlış ya da yok | **"1528"** — listede |

⇒ **739 yanlış etiket, alan yayılmadan, ilk günde sıfırlanır.** Doğru etiketler
`fethedilen:` yayıldıkça **birikerek** gelir. Bu yüzden alanın kısmî olması
sorun değil — güvenli taraf varsayılan.

### 37.5 Denetlenebilirlik — kullanıcının kuralı makineye bağlanıyor

Alan gelince `denetle.py` iki yeni soru sorabilir:

1. **İleri yön:** `fethedilen:`teki her ad `yerlesimler.js`'te var mı ve o
   yerleşimin ±30 gün içinde bir kırılması var mı? *(yanlış ad / hayalet şehir
   yakalar)*
2. **Geri yön — asıl değerli olan:** bir kırılma varsa, o günün maddesi o
   yerleşimi **adıyla anıyor mu?** *(Değişmez 2 bugün yalnız "madde var mı" diye
   soruyor; bu "madde bu şehri biliyor mu" diye sorar)*

📌 İkinci soru kullanıcının *"fethedilen şehirler teker teker sayılsın"* kuralının
**makine karşılığıdır** — bugüne kadar denetlenemiyordu.

### 37.6 Önerilen deneme kümesi — dört madde

Merkezin şartına uyarak bütün kronolojiye yayılmadan önce yalnız Bosna'da:

```js
1448-01-01  fethedilen:["Saraybosna"]
1463-06-01  fethedilen:["Travnik"]
1465-01-01  fethedilen:["Foça (Foča)"]
1469-01-01  fethedilen:["Livno (İhlevne)"]
1512-01-01  fethedilen:["Srebrenik"]          // nokta eklenirse
1528-01-01  fethedilen:["Yayça (Jajce)","Banaluka"]
```

🟡 `1463-06-01` için **Yayça listelenmiyor** — o tarihte Osmanlı'ya değil
**Macaristan'a** geçiyor. Alanın adı `fethedilen:` ise yalnız Osmanlı'ya geçenleri
saymalı; kayıplar için ileride `kaybedilen:` gerekebilir. **Bu ayrımı şimdiden
kararlaştırmak gerekiyor**, sonradan eklemek 997 maddeyi ikinci kez elden geçirmek
demek.

---

## 38. ✅ `fethedilen:` / `kaybedilen:` UYGULANDI — 10 madde, iki yönlü sınama geçti

`data/olaylar_ek10.js` (benim dosyam). **`denetle.py` etkilenmedi** — tek açık
hâlâ Silifke 1473, benim değil.

### 38.1 ⚠️ Deneme kümesi değiştirildi — ve sebebi ölçüldü

Merkez *"yalnız altı Bosna maddesi"* demişti. **Bosna maddeleri henüz uygulanmadı**
(Travnik · İzvornik · Foça · Livno · Yayça · Srebrenik — altısı da `yerlesimler.js`'te
**yok**), dolayısıyla o kümede alan **bugün sınanamazdı**.

Yerine kendi dosyamdaki **canlı** kümeyi kullandım: madde var, yerleşim var,
kırılma var — yani **üç tarafı da bugün doğrulanabilir.** Kısıtın ruhu korundu:
tek dosya, on madde, 997'ye yayılmadı.

### 38.2 Uygulanan on madde

| Tarih | `fethedilen:` | `kaybedilen:` |
|---|---|---|
| 1457-01-01 | Podgorica | — |
| 1476-02-01 | — | Böğürdelen (Šabac) |
| 1479-08-01 | Ayamavra · Kefalonya · İthaki · Zaklise | — |
| **1482-01-01** | **Cetinje** | **Zaklise (Zakynthos)** |
| **1484-07-15** | **Kili** | — |
| **1484-08-04** | **Akkirman** | — |
| 1499-08-26 | İnebahtı | — |
| 1521-07-07 | Böğürdelen (Šabac) | — |
| 1788-04-24 | — | Böğürdelen (Šabac) |
| 1806-01-26 | — | Böğürdelen (Šabac) |

### 38.3 İki yönlü sınama — ileri yön çalışıyor

```
ileri yon: 14 ad sinandi | hayalet ad 0 | kirilmasiz 0
```
Her ad `yerlesimler.js`'te var ve her birinin maddenin tarihinden ±30 gün içinde
doğru yönde (`f:` kazanç / `t:` kayıp) bir kırılması var.

### 38.4 ⭐ ALANIN DEĞERİ İKİ SATIRDA GÖRÜNÜYOR

**① `1484-07-15` ve `1484-08-04` — ±30 gün penceresi ayırt EDEMİYOR.**
İki tarih 20 gün arayla; pencere ikisinde de **hem Kili hem Akkirman** buluyor.
Alan ayırıyor: 15 Temmuz **Kili**, 4 Ağustos **Akkirman**. Bu tam olarak
kullanıcının *"iki fetih tek maddeye çökmüş"* şikâyetinin makine karşılığı.

**② `1482-01-01` — aynı gün hem kazanç hem kayıp.**
Cetinje tâbi oluyor, Zaklise Venedik'e bırakılıyor. Tek alanla anlatılamazdı;
`kaybedilen:`in neden gerekli olduğunun canlı örneği — merkezin bugün verdiği
"ikisi de tanımlansın" kararı burada karşılığını buluyor.

**③ `1806-01-26`'da `kaybedilen:` gürültüyü kesiyor.** ±30 gün penceresi o
tarihte **Mekke**'yi de yakalıyor (Vehhâbîlere kaybı, 6 gün ötede, konusu
bambaşka). Alan yalnız Böğürdelen'i sayıyor — ARAYÜZ Mekke'ye etiket yazmaz.

### 38.5 🔴 ARAYÜZ'e — tüketici kuralı

> **`fethedilen:`/`kaybedilen:` listesinde adı geçmeyen şehre tarih etiketi
> YAZILMAZ.** Alan yoksa madde etiketsizdir.

Bu kural bugün yazılırsa **739 yanlış etiket anında sıfırlanır** ve doğru
etiketler alan yayıldıkça birikir. Şu an 14 doğru etiket üretilebilir.

🟡 **Geri yön henüz anlamlı değil.** "Bu kırılmanın maddesi şehri anıyor mu"
sorusu ancak alan yaygınlaşınca ölçülebilir; 10 maddede çalıştırmak, alanı
olmayan 987 maddeyi ihlal gibi gösterir. Kapsam eşiği belirlenmeli.

---

## 39. `fethedilen:` KAPSAM ÖLÇÜSÜ — geri yön eşiği için sayılar

Geri yön sınamasını (*"bu kırılmanın maddesi şehri adıyla anıyor mu"*) açmak için
eşik gerekiyordu. Ölçtüm.

### 39.1 Bugünkü kapsam — %1,1

| Yüzyıl | Kırılma | Adı anılan | Kapsam |
|---|---|---|---|
| 1300 | 173 | 0 | 0,0% |
| **1400** | **459** | **15** | **3,3%** |
| 1500 | 271 | 2 | 0,7% |
| 1700 | 119 | 1 | 0,8% |
| 1800 | 316 | 1 | 0,3% |
| **TOPLAM** | **1694** | **19** | **1,1%** |

⇒ **Yüzyıl dilimi eşiği bugün hiçbir yerde karşılanmıyor.** En iyi dilim (1400'ler)
%3,3'te. Geri yön şu an açılamaz — kendi önerimin ölçülmüş hâli.

### 39.2 ⭐ AMA İŞ 1694 DEĞİL — yarısı zaten sayılamaz

Asıl soru "kaç kırılma" değil, **"kaç TARİH sayılabilir sınıfta"**:

```
tarih-yön çifti: 502   |   toplam kırılma: 1694

  1 yerleşim   255 tarih  ← tek ad yazılacak, en ucuz
  2-5          189 tarih
  6-20          53 tarih
  21+            5 tarih

SAYILABİLİR (≤5)   444 tarih (%88)  ·  834 kırılma (%49)
TOPLU        (>5)   58 tarih (%12)  ·  860 kırılma (%51)
```

En kalabalık beşi: `1402-07-28` **165** · `1413-07-05` **106** ·
`1878-07-13` **35** · `1830-02-03` **21** · `1623-11-28` **21**.

⇒ **Kırılmaların yarısı 58 tarihte toplanıyor** ve bunlar gerçekten toplu
geçişler — Ankara sonrası çözülme, Fetret'in kapanışı, Berlin 1878. §37.3'te
"alan bunlara konmamalı" demiştim; sayı bunu doğruluyor: **51'i sayılamaz.**

### 39.3 İşin gerçek büyüklüğü

| | |
|---|---|
| Alan yazılacak tarih | **444** |
| Bunun tek yerleşimlisi (tek ad) | **255** |
| Bugün yazılmış | **15** |
| Kalan | **429** |

📌 *"%1,1 kapsam"* umutsuz görünüyor; **"444 tarih, 255'i tek satır, 15'i bitti"**
yapılabilir bir iştir. Aynı veri, iki farklı büyüklük — payda doğru seçilince.

### 39.4 Geri yön için önerilen eşik — revize

Yüzyıl dilimi yerine **sayılabilir sınıf** ölçülsün:

> Geri yön, `≤5 yerleşimli` tarihlerin **%80'i** alanlı olduğunda açılsın; toplu
> tarihler (>5) sınamadan **muaf** tutulsun.

Gerekçe: yüzyıl dilimi, içindeki toplu tarihler yüzünden asla dolmaz —
1400'ler %3,3'te takılı çünkü 459 kırılmasının çoğu `1402-07-28` ve
`1413-07-05`'ten geliyor. Sayılabilir sınıf ise dolabilir bir paydadır.

---

## 40. 🔴 ÜÇÜNCÜ KATEGORİ — `fethedilen:`/`kaybedilen:` bir kırılma sınıfını KAPSAMIYOR

255 tek-yerleşimli tarihin Balkan bölümünü yazmaya başladım. **Dosyamda beş aday
çıktı; dördü yazılamaz** — ve sebebi şemayla ilgili.

### 40.1 Dört adayın yönü yanlış okunuyor

| Aday | Veride ne oluyor | Gerçekte |
|---|---|---|
| Akkirman `1484-08-04` | `v:` biter, `d:` başlar | **Vasal Boğdan → doğrudan Osmanlı.** Kayıp değil |
| Kili `1484-07-15` | aynı | aynı |
| Hotin `1713-06-24` | `v:` biter **ve** `d:` başlar | aynı — hem `f` hem `t` görünüyor |
| Yenipazar `1912-10-23` | `d:` biter, `s:"sirbistan"` başlar | ✅ **gerçek kayıp** — ama maddenin konusu Çatalca ve Kumanova, Yenipazar'ı **anmıyor**; adı listeye yazmak "madde bu şehri biliyor" demek olurdu, bilmiyor |

⇒ **Dosyamda temiz yazılabilecek tek satır bile kalmadı.** Onbeşi zaten yazılmıştı.

### 40.2 Ölçüm — 76 idarî geçiş

```
vasal → doğrudan   23
doğrudan → vasal   53
TOPLAM             76   ← ne fetih ne kayıp
```

Bunlar **egemenlik devri değil, statü değişimi**. Toprak el değiştirmiyor;
haritadaki **ton** değişiyor (koyu ↔ açık). Örnekler doğrudan benim kendi
düzeltmelerimden:

```
d→v  Sofya            1878-01-04     d→v  Filibe · Vidin · Tırnova
d→v  Eski Zağra       1878-07-13     d→v  Varna · Şumnu · Silistre · Rusçuk
v→d  Hotin            1713-06-24     v→d  Kili · Akkirman  1484
```

1878-07-13'te Bulgar şehirleri doğrudan Osmanlı idaresinden **Osmanlı'ya tâbi**
prensliğe geçiyor (§17.3). Bu bir kayıp değil — egemenlik 1908'e kadar sürüyor.
Aynı şekilde Hotin 1713'te Boğdan vasallığından **doğrudan** Osmanlı sancağına
geçiyor (§9); toprak zaten Osmanlı'ydı.

### 40.3 🔴 Bu, geri yön sınamasını bozar

DENETÇİ'nin kuracağı geri yön (*"her kırılma bir maddede adıyla anılıyor mu"*)
bu 76 geçişi **kalıcı yanlış-pozitif** olarak raporlar: hiçbiri
`fethedilen:`/`kaybedilen:` ile anlatılamaz, dolayısıyla hiçbir zaman
kapanmazlar.

**İki seçenek:**

| | Ne yapar | Maliyet |
|---|---|---|
| **A. Muafiyet** | `v:`↔`d:` sınırları geri yön sınamasından muaf tutulur | Ucuz, hemen uygulanır. Ama statü değişimi **anlatılmadan** kalır |
| **B. Üçüncü alan** | `statu:["Hotin"]` gibi bir alan eklenir | Şemayı büyütür ama 76 geçiş **anlatılabilir** olur — ve kullanıcının *"bu Hotin hep tek başına görünüyor"* sorusu tam bu sınıftı |

📌 **B'yi öneriyorum ama karar merkezin.** Gerekçe: kullanıcının bugüne kadarki
en tekrar eden sorusu (*Hotin neden ayrı renkte, Bulgaristan özerk mi bağımsız
mı, Sırbistan neden 1867'de değil 1878'de*) **hep bu kategorideydi.** Alan yoksa
harita bunları gösteriyor ama kronoloji adlandıramıyor.

⚠️ Ve `kaybedilen:` kararında olduğu gibi: **sonradan eklemek 1003 maddeye ikinci
kez dokunmak demek.** Bugün karar verilirse bir kez dokunulur.

---

## 41. ⭐ `statu_dogrudan:` / `statu_vasal:` — biçim ölçüldü, liste hazır

### 41.1 Biçim kararı — ölçüm seçti

Merkez *"kayıt biçimini sen öner, ölç ve seç"* dedi. Ölçtüm:

```
aynı günde İKİ YÖN birden görülen tarih:  0
birden fazla statü değişimi olan yerleşim: 9   (ama hepsi FARKLI tarihlerde)
toplam: 25 tarih, 76 geçiş
```

⇒ **Yön, yerleşimin değil TARİHİN özelliği.** Hiçbir gün v→d ile d→v'yi
karıştırmıyor. Bu, `[{ad, yon}]` gibi bileşik bir yapıyı **gereksiz** kılıyor.

**Seçilen biçim — mevcut iki alanı birebir aynalıyor:**
```js
statu_dogrudan:["Hotin"]                    // vasallıktan DOĞRUDAN idareye
statu_vasal:["Sofya","Filibe","Vidin"]      // doğrudan idareden VASALLIĞA
```
Gerekçe: `fethedilen:`/`kaybedilen:` ile aynı şekil — ARAYÜZ'ün okuyucusu
genelleşir, yön ayrıştırmak gerekmez, alan-yön eşleşmesi bozulamaz (bileşik
yapıda `yon` unutulabilirdi).

### 41.2 ✅ İlk alan yazıldı

`olaylar_ek10.js` · `1713-06-24` → `statu_dogrudan:["Hotin"]`
`denetle.py` temiz. **Kili ve Akkirman'a yazmadım** — onlar TDV'de *fetih* olarak
geçiyor ve `fethedilen:` zaten yazılı; ikisini birden yazmak rozeti iki kez
gösterirdi. Bu ayrımın kararı §41.4'te.

### 41.3 DAĞITIM LİSTESİ — 25 tarih, tam satırlar

| Dosya | Tarih |
|---|---|
| `olaylar_ek5.js` | 1537-10-01 · 1538-08-03 · 1538-09-01 · 1658-08-27 · 1660-08-27 · 1671-01-01 · 1705-07-17 · 1711-03-01 · 1835-05-26 · 1865-01-01 · 1867-04-18 |
| `olaylar_ek4.js` | 1805-07-03 · 1813-01-23 · 1825-02-24 · 1830-11-01 · 1841-02-25 · 1841-05-24 |
| `olaylar_ek10.js` | 1484-07-15 · 1484-08-04 · **1713-06-24 ✅** |
| `olaylar.js` | 1541-08-29 · 1878-07-13 |
| `olaylar_ek6.js` | 1499-01-01 |
| `olaylar_ek.js` | 1830-11-08 |
| 🔴 **madde yok** | **1878-01-04** |

**Yazılacak tam satırlar:**
```
1499-01-01  statu_dogrudan:["Cetinje"]
1537-10-01  statu_dogrudan:["Batnoz (Patmos)"]
1538-08-03  statu_dogrudan:["Zebîd"]
1538-09-01  statu_dogrudan:["İbrail","Bender","İsmail"]
1541-08-29  statu_dogrudan:["Budin","Peşte"]
1658-08-27  statu_dogrudan:["Yanova (Ineu)"]
1660-08-27  statu_dogrudan:["Varad (Oradea)"]
1671-01-01  statu_vasal:["Cezayir","Konstantin","Tilimsan","Annaba","Bicâye","Şerşel (Cherchell)","Medea (Titteri)","Setif","Biskra","Tuggurt"]
1705-07-17  statu_vasal:["Tunus","Kayrevan","Gabes","Sfaks","Cerbe (Djerba)","Kerkene (Kerkennah)"]
1711-03-01  statu_vasal:["Trablus","Misrata","Bingazi","Derne","Murzuk (Fizan)"]
1805-07-03  statu_vasal:["Kahire","İskenderiye","Dimyat","Asyut","Asvan","İbrim","Süveyş","Sina güneyi","Reşîd (Rosetta)"]
1813-01-23  statu_vasal:["Cidde"]
1825-02-24  statu_vasal:["Modon"]
1830-11-01  statu_vasal:["Hanya","İsfakiye (Sfakia)","Sitiye (Sitia)"]
1830-11-08  statu_vasal:["Kragujevac","Çaçak"]
1835-05-26  statu_dogrudan:["Trablus","Misrata","Bingazi","Derne","Murzuk (Fizan)"]
1841-02-25  statu_dogrudan:["Hanya","İsfakiye (Sfakia)","Sitiye (Sitia)"]
1841-05-24  statu_dogrudan:["Cidde","Yenbu"]
1865-01-01  statu_vasal:["Sevâkin","Masavva","Dahlak"]
1867-04-18  statu_vasal:["Semendire","Belgrad","Böğürdelen (Šabac)"]
1878-07-13  statu_vasal:["Eski Zağra (Stara Zagora)","Tatarpazarcığı","Filibe","Vidin","Tırnova","Varna","Şumnu","Silistre","Rusçuk"]
```

📌 Liste **anlamlı** çıktı: Cezayir 1671 dayı idaresi, Tunus 1705 Hüseynîler,
Trablusgarp 1711 Karamanlılar ve 1835'te **geri dönüşü**, Mısır 1805 Kavalalı,
Sırbistan 1830, Bulgaristan 1878 — yani **Osmanlı'nın merkezîlik/özerklik
tarihinin tamamı** bu 25 tarihte. Alan bunu ilk kez adlandırılabilir yapıyor.

### 41.4 🟡 KARAR GEREKEN — fetih ile statü çakışması

**Kili 1484-07-15 ve Akkirman 1484-08-04**: veride `v:` bitip `d:` başlıyor,
yani teknik olarak statü değişimi. Ama TDV ikisini de **fetih** diye anlatıyor
(vasal Boğdan'ın elindeki kaleler alınıyor) ve `fethedilen:` zaten yazılı.
Aynı şey `1538-09-01` (İbrail/Bender/İsmail), `1541-08-29` (Budin/Peşte),
`1658/1660` (Yanova/Varad) ve `1499` (Cetinje) için de geçerli.

**İki alan da yazılırsa rozet aynı şehri iki kez gösterir.** Öneri: bir madde
bir yerleşimi **ya** `fethedilen:` **ya** `statu_dogrudan:` ile saysın, ikisiyle
birden değil. Ayırt edici ölçüt: **kaynağın kendisi.** TDV "fethedildi" diyorsa
`fethedilen:`, "idareye bağlandı / sancak yapıldı" diyorsa `statu_dogrudan:`.

### 41.5 🔴 BULGU — `1878-01-04` Sofya'nın maddesi YOK

Listeyi çıkarırken çıktı. Sofya'nın `d:`→`v:` geçişi **1878-01-04**'te (Rusların
Sofya'ya girişi, §17.3 düzeltmem) ama o tarihte **hiçbir kronoloji maddesi yok.**
Değişmez 2 temiz görünüyor çünkü ±30 gün içinde başka bir madde var — yani
Sofya'nın statü değişimi **komşu bir maddenin altında** beliriyor.
⇒ Madde borcu; Bulgaristan bloğuna ait, kimin dosyası olduğuna merkez karar versin.

---

## 33. Sırada

✅ **B bloğu (hatalar 11, 1859-1913) BİTTİ** — §17. Sekiz maddenin sekizi cevaplı,
sekiz yeni düzeltme satırı (#31-#38) açıldı, altı kronoloji maddesi yazıldı.
✅ **Eflak nokta kümesi BİTTİ** — §15, on kayıt hazır.
✅ **Soroka · Orhei · Reni BİTTİ** — §16; ikisi gerekli, Reni gereksiz çıktı.

✅ **Merkezin dört kararı alındı ve uygulama karşılıklarına çevrildi** — §19.
`#32` EVET (1878'e kadar) · `#37` işaretlendi, karar verilmedi · `#38` ölçüldü,
emekli edilebilir · `#18` üretim bekleniyor.

### Hâlâ merkezin kararını bekleyen
- **#30** 1594-95 üçlü isyanının toprak karşılığı işlensin mi
- **#39** Sırbistan fermanı `1830-11-08` mi TDV'nin `17 Ekim 1830`'u mu
- **#40** Fethülislâm ve Böğürdelen noktaları eklensin mi (opsiyonel)

### Bende kalan, henüz başlanmamış
- **Kili/Akkirman** tarih düzeltmeleri (§5, satır #13-#15) — veri merkezin,
  eski maddelerin emekliye ayrılması (#17) benim dosyamda karşılanacak
- **İnebahtı** (§6, satır #16-#17) — aynı durum
- **Ayamavra** 1502-1503 ve 1715-1718 boşluklarına madde önerisi (satır #10)
- **Dömeke** maddesi var (1897-05-17) ama TDV'de `domeke` slug'ı **ÖLÜ**;
  kaynağının ne olduğu doğrulanmalı

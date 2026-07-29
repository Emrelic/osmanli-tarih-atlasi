# Mimari — motor nasıl çalışıyor, nerede tıkanıyor

Belge seti: `CLAUDE.md` (nasıl çalışılır) · `YOL-HARITASI.md` (nereye gidiyoruz) ·
`YAPILACAKLAR.md` (sıradaki işler) · `VERI-YAPISI.md` (alan sözlüğü) · **bu belge**
(motor ve teknik borç).

---

## 1. Teknoloji kararları

| Karar | Gerekçe |
|---|---|
| **Statik site** — sunucu, veritabanı, derleme adımı yok | Barındırma kalıcı olarak ücretsiz; veri git'te versiyonlu; her push yayınlanır |
| **MapLibre GL JS 4.7.1** | Açık kaynak, API anahtarı gerektirmez, vektör katman denetimi tamamen bizde |
| **Etiketsiz fiziki altlık** (Esri World Physical) | Modern siyasi sınır ve etiket içermez — tarihî sınırla çakışmaz |
| **Google Earth / Google Maps API kullanılmadı** | Programlanabilir API yok; Maps API faturalı ve modern sınırlar gömülü |
| **Veri düz JS dosyaları** (`data/*.js`, `window.X = [...]`) | Derleme yok, `<script>` ile yüklenir, git diff okunabilir |
| **Python + Shapely üretim betiği** | Geometri işi tarayıcıda değil, üretim anında bir kez yapılır |
| **Girdi verisi depoda** (`veri-kaynak/`, 27 MB) | Natural Earth kara maskesi, göller, nehirler, dağ sırtları. Bir dönem geçici klasördeydi; temp temizlense motor tamamen çalışmaz hâle gelirdi. 27 MB, motorun çalışabilirliğinin bedelidir |

---

## 2. Petek (Voronoi) motoru

`arac/uret_petek.py` — projenin **tek** üretim betiği.

Her yerleşim, çevresindeki toprağı temsil eden bir **petek** sahibidir. Üretim adımları:

1. **Kara maskesi** — Natural Earth 10m; 117 büyük göl çıkarılır
2. **Voronoi** — yerleşim koordinatlarından hücreler
3. **Doğal hatlara yaslama** — 25 adlı akarsu (Tuna, Fırat, Dinyeper, Nil…), 61 dağ
   sırası; petek sınırı yakınındaki doğal hatta çekilir
4. **Chaikin yumuşatma** — cetvel köşeleri kırılır
5. **Kara maskesiyle kesme** — sınırlar kıyı çizgisine oturur
6. **Dönem üretimi** — her yerleşimin hâkimiyet zincirinden gün gün kırılma çıkarılır;
   aynı sahibe ait petekler birleştirilir (`union`)
7. **Bölge sınırları** — `k`/`m` alanlarından k1/k2 merkezlerinin toplu sınırı

Böylece **cetvelle çizilmiş köşeli sınır, yapay enklav ve yarım kalmış bölge** sorunu
ortadan kalkar; sınırlar nehir, sırt ve kıyı gibi gerçek coğrafi hatlara oturur.

### Motorun ürettikleri
| Dosya | İçerik | Boyut |
|---|---|---|
| `data/donemler.js` | 424 dönem — Osmanlı doğrudan + tâbi gövdeleri | 12.4 MB |
| `data/devletler_harita.js` | 97 devletin dönem gövdeleri | 14.0 MB |
| `data/bolgeler.js` | 61 idari bölge sınırı | 72 KB |

### ⚠️ Motorun tek zayıf noktası
**Noktası olmayan bölge, en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.**

Bu projedeki görsel hataların çoğunun tek sebebi budur. Gerçekleşmiş örnekler:
Sardinya 1533'te Osmanlı göründü (Annaba'nın peteğine düşüyordu); Kefalonya 1684'e
kadar Osmanlı kaldı (Ayamavra'dan); Brač, Hvar, Korčula 1483'ten itibaren Osmanlı
oldu (Mostar'dan); Ordu-Ünye kıyısında nokta olmadığı için Hacıemîroğulları haritada
hiç görünmedi.

> Bir "harita yanlış" raporu geldiğinde **ilk sorulacak soru budur:
> o bölgede yerleşim noktası var mı?** Cevap hayırsa hata orada, kodda değil.

---

## 3. Çözülmemiş BEŞ yapısal sorun

İlk dördü **coğrafi kapsam genişlemeden önce** çözülmeli. Nokta kümesi büyüdükçe
bu dönüşümler kat kat pahalılaşır — bugün 764 kayıt, hedef 4000-6000.

Beşincisi (§3.5) ötekilerden farklıdır: o bir borç değil, **sessiz bir hata.**
İlk dördünün etkisi ölçülmüş ve biliniyor; §3.5 ise denetim temiz raporlarken
haritayı yanlış çizdiriyor, yani ne zaman vurduğu ancak kullanıcı ekranda görüp
bildirince anlaşılıyor.

### 3.1 Voronoi bütün tarih için bir kez hesaplanıyor ⚠️ EN ÖNEMLİ

Diyagram tek seferlik. Yani 1869'da açılan Port Said'in peteği **1300 yılının
haritasında da yer kaplıyor** ve komşularının hücresini küçültüyor.

`kur:` alanı veride var ama **motor onu hiç kullanmıyor** — yalnız denetim betikleri
okuyor. Osmanlı kutusunda sorun küçüktü çünkü yerleşimlerin çoğu bütün dönem boyunca
vardı. Dünya ölçeğinde katlanılamaz: Amerika'nın sömürge şehirleri, Sibirya'nın Rus
kaleleri, Avustralya'nın limanları 1300 haritasında hayalet hücreler açar.

**Yapılacak:**
- Voronoi, **o tarihte var olan yerleşimlerle** hesaplansın
- Yerleşim kümesi her değiştiğinde yeni bir **epok** başlasın; geometri epok başına üretilsin
- `kur:` (kuruluş) yanına **`bit:` (yok oluş)** alanı eklensin

**Yan kazanç:** "tarih ilerledikçe eski yerleşimlerin bölgeleri bölünsün" davranışı
bunun doğal sonucudur. Bir bölgeye yeni nokta eklendiğinde o tarihten itibaren komşu
petekler küçülür. Ayrı mekanizma gerekmez — **bu yapılırsa kendiliğinden gelir.**

### 3.2 Çıktı boyutu ölçeklenmiyor ⚠️

Bugün 567 nokta / 424 dönem → **27 MB**. Dünya ölçeğinde yerleşim ~8 kat, kırılma ~5
kat artar; mevcut mimariyle çıktı **yüzlerce MB** olur, tarayıcıda açılmaz.

**Sebep:** her dönem için aynı sahibin peteklerinin birleştirilmiş gövdesi ayrı ayrı
yazılıyor; aynı poligon yüzlerce kez tekrarlanıyor.

**Çözüm:**
- Petek geometrisi **epok başına bir kez** yazılır
- Sahiplik ayrı, çok küçük bir tabloda: `yerleşim × dönem → sahip`
- Tarayıcı union yapmaz; her peteği sahibinin rengiyle **boyar**. Bitişik aynı renkli
  peteklerin arasına çizgi çizilmediği sürece göz onları tek gövde olarak görür.

Çıktı tahminen **10-15 kat** küçülür, union maliyeti tamamen kalkar ve "bu petek
hangi yerleşimin?" sorusu tarayıcıda cevaplanabilir hâle gelir (tıklanınca yerleşim
kartı). **Bedeli:** `js/app.js` boyama mantığı yeniden yazılır.

### 3.3 Girdi tek dosya — paralel çalışmayı engelliyor

`yerlesimler.js` tek dosya ve tek sahibi var; yerleşim araştırması yapan oturum kendi
dosyasına yazamıyor. Motor **`data/yerlesimler_*.js` desenindeki bütün dosyaları**
okumalı:

```
data/yerlesimler.js          Osmanlı çekirdeği
data/yerlesimler_avrupa.js   Faz B
data/yerlesimler_asya.js     Faz C-D
```

### 3.4 Bölge boyutunun zaman boyutu yok

`m` alanı (bağlı olduğu merkez) **zamansızdır** — bir yerleşim bütün tarih boyunca tek
merkeze bağlı. Gerçekte idari bağlılık sürekli değişir.

Bugünkü sonuçları, betiğin bölge çizim mantığında:
- **Üyelik statik**: `_uyeler` sözlüğü bir kez kurulur, tarihe göre değişmez
- **Yalnız Osmanlı için çalışır**: `if not (y["d"] or y["v"])` satırı, Osmanlı dönemi
  olmayan yerleşimi bölge katmanının dışında bırakır → **hiçbir yabancı devletin
  idari kademesi haritada yok**
- **Aralık min/max ile hesaplanır**: bölgenin görünürlüğü merkezin ilk ve son Osmanlı
  tarihidir; aradaki kopukluklar (Fetret gibi) yok sayılır

Ölçüm: **311 yerleşim-tarih çiftinde** yerleşim ile merkezi farklı devletlerin
elinde (1300'de Söğüt Osmanlı ama `m:"Bursa"` ve Bursa Bizans; Manisa Saruhanoğulları
ama `m:"İzmir"` ve İzmir Aydınoğulları). Bugün görsel hataya dönüşmüyor çünkü bölge
katmanı zaten yalnız Osmanlı dönemlerinde çiziliyor — **dünya kapsamında çöker.**

**Yapılacak:** `k`/`m` zamanlı hâle gelsin (bkz. `VERI-YAPISI.md`), `_uyeler` dönem
başına kurulsun, Osmanlı filtresi yerine "merkez ile üye aynı devlette mi?" kontrolü.

### 3.5 Kenar yaslama bir peteği tamamen yok edebiliyor ⚠️ SESSİZ

*Bulunuş: hatalar 7.docx madde 2-3, 2026-07-30.*

Kullanıcı "Estergon'un kaybı haritada görülmüyor", "Solnok'un kaybı haritada
görünmüyor" dedi. Zincirin her halkası ayrı ayrı doğru çıktı:

| Halka | Durum |
|---|---|
| Veri | ✓ Estergon `d:` 1683-10-09'da, Solnok 1685-10-19'da bitiyor |
| Kronoloji | ✓ ikisi de kendi maddesine **0 gün** farkla eşleşiyor |
| Motor mantığı | ✓ dönem kaydında petek 163 ve 491 `c:[...]` ile Osmanlı kümesinden çıkıyor |
| **Boyanan alan** | ✗ **hiç değişmiyor** |

Gerçek poligon alanı ölçüldü:

```
1683-10-09  Kayıp: Estergon    Δ      8 km²
1685-10-19  Kayıp: Solnok      Δ      0 km²
1685-08-19  Kayıp: Uyvar       Δ 16.329 km²   ← normal
```

**Estergon'un peteği 8 km², Solnok'un 0 km².** Bu iki yerleşim haritada toprak
sahibi değil; kaç kez el değiştirse görünmez.

**Nehir hipotezi test edildi ve çürüdü.** İkisi de nehir kıyısında (Estergon
0.99 km, Solnok 0.68 km) ama **Segedin 0.166 km** — daha yakın — ve peteği
sağlam 9.000 km². Yakınlık sebep değil.

**Mekanizma:** üretim logundaki `"32 yetim yüz sahipli komşulara katıldı"`
satırı. Motor peteği kurduktan sonra ortak kenarları doğal hatlara (nehir
yatağı, dağ sırtı, kıyı) yaslıyor; yaslama bir peteğin sınırını **kendi tohum
noktasının ötesine** itebiliyor. O zaman polygonize sonrası yüz sahipsiz kalıyor,
"yetim" sayılıp komşuya katılıyor ve yerleşim hiç toprak almıyor. Solnok'un en
yakın komşusu 68 km uzakta — normalde 10.000+ km² peteği olmalıydı.

Bu, `§3.1`-`§3.4`ten farklı bir sınıf: onlar bilinen ve ölçülmüş borçlar, bu ise
**sessiz.** Denetim temiz raporlar, harita yanlış çizer. Kullanıcının bundan
sonra bildireceği "şu şehrin fethi görünmüyor" raporlarının arkasında bu olabilir.

**Yapılacak (iki adım):**
1. Üretimde **32 yetim yüzün hangi yerleşimlere ait olduğu loglansın** — o liste
   sınıfın tam envanteri.
2. `denetle.py`'ye **yedinci denetim**: her peteğin alanı, `BEKLENEN_SIFIR_PETEK = 0`.
   ⚠️ Ölçüm `o + v + z` katmanlarının TOPLAMI üzerinden yapılmalı. Yalnız `o`
   sayılırsa `v:` (tâbi) ya da `z:` (şehzade) katmanına geçen petekler yanlış
   sıfır verir — ilk denememde Bursa bile 0 km² çıktı.

---

## 4. Dört boyut ve senkron değişmezi

Verinin dört boyutu vardır ve dördü **aynı anda** tutarlı olmak zorundadır:

| Boyut | Nedir | Nerede |
|---|---|---|
| **Tarih** | 1288-1923, gün hassasiyeti | dönemlerin `f`/`t` alanları |
| **Yerleşim** | şehir, kale, liman, dolgu noktası | `yerlesimler*.js` |
| **Petek** | yerleşimin temsil ettiği alan | üretilir |
| **Bölge** | idari kademe: yerleşim → sancak → eyalet | `k` ve `m` |

**Senkron değişmezi:** *Herhangi bir tarihte, herhangi bir bölgede, hangi yerleşimlerin
var olduğu ve bunların hangi devlete ait olduğu tek bir tutarlı cevaba sahip olmalıdır.*
Dört boyuttan biri diğerleriyle çelişiyorsa harita yalan söylüyor demektir.

Bu, `CLAUDE.md`'deki **Değişmez 3**'tür ve §3.4 yüzünden bugün **sağlanmıyor**.

**Yapılacak araç:** `arac/sorgu.py` — verilen tarih ve bölge için yerleşim, sahip,
idari kademe ve petek alanını tablo hâlinde döker; çelişkili satırları uyarır.

```
py arac/sorgu.py 1453-05-29 --bolge rumeli
# Yerleşim   Sahip    Kademe  Bağlı olduğu  Petek km²
# Edirne     OSMANLI  k2      —                12 400
# Dimetoka   OSMANLI  k4      Edirne            3 100
# Selanik    bizans   k3      —                 5 900
```

---

## 5. Yerleşim yoğunluğu ölçütü

"Ne kadar nokta yeter?" sorusunun ölçülebilir cevabı olmalı, yoksa her faz
"yeterince eklendi mi?" tartışmasında takılır.

**Ölçüt:** kapsanan kutu içinde karadaki hiçbir nokta, en yakın yerleşime şundan
uzak olmamalı:

| Bölge tipi | Azami uzaklık |
|---|---|
| Yoğun tarihî coğrafya (Anadolu, Rumeli, İtalya, Nil vadisi) | **60 km** |
| Normal (Avrupa içi, İran, Kuzey Afrika kıyısı) | **120 km** |
| Seyrek (bozkır, Sahra, Sibirya, iç Arabistan) | **300 km** |

Seyrek bölgelerde nokta gerçek şehir olmak zorunda değil; `tur:"bolge"` tipinde bir
**dolgu noktası** olabilir. Dolgu noktası sahipsiz kalır ve `bos:` alanıyla
etiketlenir (bkz. §6).

**Yapılacak araç:** `arac/denetle_kapsama.py` — kara maskesini ızgaraya böler, her
hücrenin en yakın yerleşime uzaklığını ölçer, eşiği aşan bölgeleri liste ve görüntü
olarak verir. Bu araç olmadan bir fazın "yoğunluk kabulü" adımı ölçülemez.

---

## 6. Bilinmeyeni bilinmiyor diye göstermek

Uydurma devlet, uydurma sınır yok. Boş bırakılacak. Ama **iki farklı boşluk** vardır
ve karıştırılmamalıdır:

- **`bos:"devletsiz"`** — orada devlet **yoktu** (Rub'ul Hâlî, Sahra iç çölü, Karakum)
- **`bos:"veri-yok"`** — devlet olabilir ama **bilmiyoruz** (1288 iç Afrika, Amazon)

İkisi haritada farklı gösterilir (düz nötr / taramalı) ve lejantta ayrı satır olur.
"Burada kimse yoktu" ile "burasını bilmiyoruz" tarihsel olarak çok farklı iki iddiadır.

Bugün mekanizmanın yarısı var: sahipsiz yerleşim boş görünüyor ve 29 nokta kasten
böyle duruyor. `bos:` alanı ve ayrı gösterim henüz yok.

---

## 6.5 Devlet merkezli yükleme — ölçek sorununun asıl çözümü

Kullanıcı önerisi: harita **belirli bir devlet merkezli** açılsın; yalnız o devletin
ve ilgi alanının verisi yüklensin. Türkiye'ye bakılırsa Türkiye ve çevresi;
Almanya'ya bakılırsa Almanya ve çevresi; İngiltere'ye bakılırsa Kanada, Hindistan,
Avustralya, Hong Kong, Kıbrıs — ama Moğolistan, Peru, Meksika değil.

**Bu fikir doğrudur ve §3.2'deki ölçek sorununun asıl çözümüdür.** §3.2'nin geometri
tekrarını kaldırması veriyi ~10 kat küçültür; bu öneri ise kalanı **talep üzerine**
böler. İkisi birlikte dünya kapsamını mümkün kılar.

### ⚠️ Ama devlet başına paket yapılmaz — veri tekrarı doğar
İngiltere paketi ile Osmanlı paketi ikisi de Kıbrıs'ı taşır; Fransa ile İngiltere
ikisi de Kuzey Amerika'yı taşır. Devlet sayısı arttıkça toplam çıktı, tek dosyalı
hâlinden **büyük** olur.

**Doğru yapı: veri parçaları ortak, yükleme listesi devlete özel.**

- Veri **bölge × çağ** parçalarına bölünür (ör. `kuzey-amerika_1500-1700.js`)
- Her devlet için bir **manifest** üretilir: hangi parçalara ihtiyacı var
- Bir devlete odaklanınca tarayıcı yalnız o manifestteki parçaları çeker
- Parçalar paylaşılır: Osmanlı ve İngiltere aynı `dogu-akdeniz_1800-1923` parçasını
  kullanır, veri bir kez indirilir ve önbellekte kalır

### İlgi bağları elle yazılmaz — veriden türetilir
"İngiltere'nin ilgi alanı" listesini elle tutmak hem yorucu hem hataya açıktır
(bir sömürge eklenir, listeye yazılmaz, harita eksik yüklenir). Bunun yerine
**üretim anında türetilir**:

| Bağ | Nasıl türetilir |
|---|---|
| **Sahiplik ayak izi** | `s`/`d`/`v` alanlarında o devleti anan **her** yerleşim. İngiltere için Kıbrıs, Hindistan, Kanada buradan otomatik gelir |
| **Komşuluk** | Voronoi komşuluğu: o devletin peteklerine bitişik petekler hangi devletlerinse |
| **Çatışma ve antlaşma** | `savaslar.js` ve `olaylar*.js`'te birlikte anılan devletler |
| **Elle eklenen bağ** | Hanedan bağı, ticaret ağı gibi coğrafyadan türemeyen ilişkiler — istisna, kural değil |

Türetilmiş olduğu için **kendiliğinden güncel kalır**: bir yerleşimin sahibine
İngiltere yazıldığı anda o bölge İngiltere'nin manifestine girer.

### Arayüz tarafı
- Açılışta bir **odak devleti** seçilir (varsayılan: Osmanlı)
- Harita o devletin ayak izine göre çerçevelenir, kronoloji ona göre süzülür
- Yan panelde **"ilgi bağları"** listesi: o devletin ilişkili olduğu devletler,
  bağ cinsiyle birlikte (sahiplik / komşuluk / savaş / antlaşma) — tıklanınca odak
  değişir ve gereken parçalar yüklenir

### Yapılacaklar
- `arac/uret_petek.py` çıktıyı bölge × çağ parçaları hâlinde yazsın
- Üretim, her devlet için manifest çıkarsın → `data/manifest.js`
- `js/app.js` odak devletine göre parça yüklesin (tembel yükleme + önbellek)
- Odak seçici ve ilgi bağları paneli eklensin

**Ön koşul:** §3.2 (geometri bir kez + sahiplik tablosu). Parçalama, tekrar eden
geometri üzerine kurulursa kazanç küçük kalır.

---

## 6.7 Beş index ve çağ dilimlemesi — verinin çalışma yapısı

`YOL-HARITASI.md`'deki **yedi boyut** projenin neyi büyüteceğini söyler; burada
anlatılan **beş index** ise verinin *nasıl* örgütleneceğini söyler. Boyutlar
büyüme yönü, index'ler çalışma yapısıdır.

| Index | İçerik | Anahtar |
|---|---|---|
| **1. Tarih** | Çağ omurgası — bütün diğer index'ler buna göre dilimlenir | çağ kimliği |
| **2. Coğrafi bölge** | Bölge ağacı: kıta → bölge → alt bölge | bölge kimliği |
| **3. Devletler** | Kim vardı, ne zaman, hangi türde | devlet kimliği |
| **4. Olaylar** | Kronolojik olay akışı; savaş ve antlaşmalar dahil | tarih |
| **5. Yerleşimler ve bölgeleri** | Nokta + peteği + sahibi — **zaman boyutuyla** | çağ × yerleşim |

Kişiler ve devlet kronolojileri ayrı index değildir; 3 ve 4'e bağlanırlar.

### Zaman ufku çağ çağ genişler
Tarih index'i, zaman çizgisini **çağlara** böler. Bütün diğer index'ler bu çağlara
göre dilimlenir; bir çağ tamamlandığında bir sonraki açılır. Böylece hem üretim hem
yükleme parça parça yapılabilir.

⚠️ **Ama dilim uzunluğu sabit yüzyıl olmamalı.** MÖ 12000 – MÖ 600 aralığı 114
yüzyıldır ve neredeyse hiç veri taşımaz; 1900-2000 tek yüzyıldır ve veriden geçilmez.
Sabit yüzyıl, bir uçta 114 boş dosya, öbür uçta tek dev dosya üretir.

**Doğrusu: değişken uzunlukta çağ, yoğunluğa göre.**

| Aralık | Dilim | Dilim sayısı |
|---|---|---|
| MÖ 12000 – MÖ 600 | binyıl | ~11 |
| MÖ 600 – MS 1000 | 200 yıl | 8 |
| 1000 – 1500 | yüzyıl | 5 |
| 1500 – 1800 | yarım yüzyıl | 6 |
| 1800 – 2026 | çeyrek yüzyıl | 9 |

Bugünkü odak (1288-1923) bu bölmede **~15 çağa** düşer. Ölçüt basit: bir dilim,
kabaca eşit miktarda veri taşımalı.

### Index 5 zamanlıdır — asıl mesele burada
**Bir yerleşim, tarih sahnesine çıktığı andan itibaren index'e girer ve bölgesi
o andan itibaren atanır.** Öncesinde ne index'te vardır ne peteği vardır.

- **İstanbul** MÖ 600'den 2026'ya kadar her çağın index'inde bulunur
- **Port Said** 1859'da açıldı; 1600 çağının index'inde **yoktur**, dolayısıyla o
  çağda **peteği de yoktur** ve kapladığı alan komşularına aittir
- Terk edilen ya da yıkılan yerleşim (`bit:`) o tarihten sonra index'ten düşer

Bu, `MIMARI.md` §3.1'de anlatılan **zaman dilimli Voronoi**'nin veri tarafındaki
karşılığıdır. Bugün motor bunu yapmıyor: diyagram bütün tarih için bir kez
hesaplandığı için Port Said'in hücresi 1300 haritasında da yer kaplıyor.

```js
// Çağ index'i — üretim çıktısı, elle yazılmaz
{ cag:"1500-1550",
  yerlesim:["İstanbul","Edirne","Bursa","Kahire", …],   // o çağda var olanlar
  petek:{ "İstanbul":[[…halkalar…]], … },               // o çağa ait geometri
  bolge:{ "İstanbul":"rumeli", "Kahire":"misir", … } }  // o çağdaki idari bağ
```

### Zincirin tamamı
```
Tarih index'i (çağlar)
   └─> her çağ için: o çağda var olan yerleşimler  (index 5, kur/bit süzgeci)
          └─> o kümeden Voronoi                     (petekler o çağa özel)
                 └─> her peteğe o çağdaki sahip     (index 3'ten)
                        └─> her yerleşime o çağdaki idari bağ  (index 2)
                               └─> kırılmalara olay bağı        (index 4)
```

Bu zincir kurulduğunda `CLAUDE.md`'deki **Değişmez 3** (dört boyut çelişmez)
kendiliğinden sağlanır: her çağın index'i kendi içinde tutarlı üretilir, çelişki
üretim anında yakalanır.

### Yükleme ile ilişkisi
Çağ dilimlemesi, §6.5'teki devlet merkezli yüklemenin diğer yarısıdır: veri parçası
= **çağ × bölge**. Bir devlete odaklanınca manifest, o devletin var olduğu çağların
ve ilgi alanındaki bölgelerin kesişimini verir. Osmanlı'ya bakan biri MÖ 600 çağını
hiç indirmez.

---

## 7. Bilinen sapmalar (kabul edilmiş)

- **Petek sınırı idari sınır değildir.** Nüfusun seyrek olduğu yerde bir yerleşimin
  temsil ettiği alan, gerçek sancak sınırından geniş çıkabilir.
- **Bazı kırılma tarihleri yıl hassasiyetindedir** (`f:"1693-01-01"`). Kaynakta gün
  verilmediği için kasten yıl başına yaslanmıştır; uydurma gün yazılmaz.
- **1918-1923 Avrupa ardıl devletleri** (Çekoslovakya, Polonya, Yugoslavya…) yalnız
  haritada delik kalmasın diye eklendi; sınırları temsilîdir, atlasın konusu değildir.
- **Askerî bölme petek sınırına girmiyor.** Kale hatları, geçitler ve menzil yolları
  yalnız sefer güzergâhlarında (`savaslar.js` SEFERLER) temsil ediliyor.

---

## 8. Tarihçe — terk edilmiş yaklaşımlar

**historical-basemaps dönemi (kapandı).** Sınırlar bir süre bu açık veri setinin 13
yıl kesitinden türetiliyordu. Bırakılma sebepleri: kesitler arası değişimin adım adım
olması (1571-1650 tek kesit), vasal toprakların doğrudan görünmesi, Kuruluş/Fetret/
Mütareke dönemlerinin elle çizili kaba halkalar kalması. Eski sapmaların tamamı
(Rodos 1517, Selanik 1403-1430, Mora 1700, Kıbrıs 1530) petek motoruna geçişle
ortadan kalktı.

`arac/uret_donemler.py` o dönemin betiğidir — **kullanılmıyor**, referans için duruyor.

# Oturum 14 — Kızıldeniz'in Avrupalı sahilleri (`KONTROL.md` 11-48 · 11-49)

**Araştırma oturumu — `data/` altına HİÇBİR ŞEY YAZILMADI.** Aşağıdaki maddeler
ve nokta önerileri uygulanmak üzere Merkez'e teslim edilir.

---

## 0. Yöntem ve slug denetimi

Her slug `<title>` ile sınandı. **Dört tuzak vakası çıktı, üçü yeni:**

| Slug | `<title>` | Durum |
|---|---|---|
| `cibuti` | CİBUTİ - TDV İslâm Ansiklopedisi | ✅ **CANLI** — Fransa bloğunun ana kaynağı |
| `eritre` | ERİTRE - … | ✅ CANLI |
| `masavva` | MASAVVA' - … | ✅ CANLI |
| `somali` | SOMALİ - … | ✅ CANLI ama ⚠️ bkz. §1d |
| `makdisu` | MAKDİŞU - … | ✅ CANLI — Benâdir'in ana kaynağı |
| `zeyla` | ZEYLA' - … | ✅ CANLI |
| `berbera` | BERBERÂ - … | ✅ CANLI |
| `etiyopya` | ETİYOPYA - … | ✅ CANLI |
| **`aseb`** | *arama sayfası* | 🔴 **MADDE YOK** |
| **`obok`** | *arama sayfası* | 🔴 **MADDE YOK** |
| **`tacura`** | *arama sayfası* (Libya sonuçları) | 🔴 **MADDE YOK** |
| **`habesistan`** | HABEŞİSTAN - … | 🟡 **AYNA TUZAĞI** — canlı ama yalnız *"bk. ETİYOPYA"* yönlendirmesi |

🔴 **`habesistan` `OGRENILENLER §20`'nin ikinci vakası.** Slug canlı, `<title>`
kontrolü geçiyor, ama madde gövdesi yok — yalnız yönlendirme kütüğü. İlk fetch
"İtalyan genişlemesi hakkında hiçbir tarih yok" döndürdü; **`<title>` sınaması
bu sınıfı YAKALAMIYOR.** Gerçek madde `etiyopya` ve içinde iki gün-kesin tarih
var. Alâiye'de (`alaiye` → "bk. ALANYA") aynı şey olmuştu.

> **Sınama artık iki aşamalı olmalı:** (1) `<title>` "Arama - …" mı?
> (2) gövde *"bk. XXX"*ten ibaret mi? İkincisi `renkler.py` gibi bir sabit
> listeye değil, her fetch'te gövdeye bakmayı gerektiriyor.

⚠️ Ayrıca `aseb`, `obok` ve `tacura` **maddesi olmayan üç yer** — yani bu
turun en çok konuşulan üç noktasının TDV'de müstakil maddesi yok. Üçü de
ülke maddelerinden (`eritre`, `cibuti`) beslenmek zorunda.

### 0a. 🔴 TDV bu konuda GÜN VERMİYOR — raporun şeklini bu belirledi

Sekiz maddeden çıkan **gün-kesin** tarihlerin tamamı:

| Gün | Olay | Madde |
|---|---|---|
| **11 Mart 1862** | Ubûk'un (Obok) 52.000 frank karşılığı Fransa'ya bırakılması | `cibuti` |
| **5 Şubat 1885** | İtalyanların Masavva'ya girişi | `masavva` **ve** `etiyopya` |
| **2 Mayıs 1889** | Wichale (Uccialli) Antlaşması | `etiyopya` |
| **2 Mart 1891** | İngiliz-İtalyan anlaşması; Berâve ve Merkâ İtalya'da kalır | `somali` |
| **13 Mayıs 1885** | Harar, Berberâ ve Zeyla'nın boşaltılması | `zeyla` |
| **26 Ekim 1896** | Adisababa Antlaşması — Wichale'nin feshi | `etiyopya` |

**Kullanıcının sorduğu altı dalganın HİÇBİRİ bu listede yok.** Hepsi TDV'de
yıl hassasiyetinde. Sonuç: aşağıdaki maddelerin çoğu `YYYY-01-01` biçiminde
ve `"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır."` cümlesini
taşıyor — projede yerleşmiş biçim.

### 0b. Çakışma taraması yapıldı (kendi kuralım)

984 maddenin tamamı çok satırlı desenle tarandı. Önerilen altı günün **hiçbiri
dolu değil.** En yakın komşular: 1882-03-10 → 68 gün (Mîzâb vahaları) ·
1889-01-01 → 99 gün (Haydarpaşa demiryolu) — **TAKİPÇİ'nin ölçümüyle birebir
aynı**, iki bağımsız tarama aynı sayıyı verdi.

---

# 1. FRANSA — `KONTROL.md` 11-49 (öncelikli)

Kullanıcı haklı ve **iki katmanlı haklı**: hem madde yok, hem nokta yok.

## 1a. Tâcûre 1884-01-01 — MADDE (mevcut kırılmayı kapatır)

TDV `cibuti`: *"bölgeyi kendi himayesine aldı (1884)"* — **yıl, gün yok.**
Verideki `1884-01-01` zaten doğru biçimde; **tarih değişmiyor, madde ekleniyor.**

```js
{ t:"1884-01-01", k:"kayip", etiket:["toprak-kaybi","somurgecilik"],
  b:"Tâcûre körfezinin Fransız himayesine girmesi — Fransız Somalisi'nin doğuşu",
  gun:"1884", yer:"Tâcûre (Tadjoura), Aden körfezinin batı ucu",
  kisiler:"❓ TDV ad vermiyor",
  d:"Fransa 1859'da Tâcûre körfezinin kuzeyindeki Ubûk'ta bir iskele kurmuş, 11 Mart 1862 tarihli dostluk anlaşmasıyla burayı 52.000 frank karşılığında mülk edinmişti. Süveyş Kanalı'nın açılmasıyla Aden'deki İngiliz üssünü dengeleyecek bir kömür istasyonuna duyulan ihtiyaç artınca Fransa 1884'te körfezin güney kıyısını da himayesine aldı ve iki yaka birleşerek Fransız Somalisi'nin çekirdeğini oluşturdu. Zeyla ve Berberâ'nın aynı yıl İngiliz idaresine geçmesiyle Kızıldeniz'in Afrika ağzı iki Avrupa devleti arasında paylaşılmış oldu. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cibuti" },
```

⚠️ **Aynı gün üç madde olacak:** *Reji İdaresi* (alâkasız, önceden vardı),
*Zeyla ve Somali sahili* (benim ek9 maddem) ve bu. Mükerrer denetimini
uyguladıktan sonra koşturun — ikisi de Kızıldeniz ağzını anlattığı için
oranın eşiğe (0.34) yaklaşması mümkün. **Birleştirmeyin:** kullanıcının
şikâyeti tam olarak "Fransa hiç anılmıyor" olduğu için ayrı madde gerekiyor;
mevcut Zeyla maddesi İngiliz tarafını anlatıyor ve doğru.

## 1b. 🟢 OBOK — yeni nokta + madde, **gün-kesin TDV tarihiyle**

Bu turun **tek gün-kesin** kazancı. TDV `cibuti` birebir:

> *"11 Mart 1862 tarihli bir dostluk ve yardım anlaşması ile 52.000 frank
> karşılığında Ubûk'u Fransızlar'a bırakmayı kabul etmesinden sonra"*

**Nokta (Merkez uygular):**
```js
{ ad:"Ubûk (Obok)", tur:"liman", lat:11.965, lon:43.288, g:0, k:4, m:"Tâcûre",
  s:[{f:"1281-01-01",t:"1862-03-11",d:"adal"},{f:"1862-03-11",t:"1923-10-29",d:"fransa"}],
  d:[], v:[] },
```
`s:` başlangıcı Tâcûre'nin desenini izliyor (`adal`). **Ölçülmüş yakınlık:**
Tâcûre **48,4 km** · Zeyla 70,8 km · Aseb 130,7 km — 3 km kuralı 16 kat
sağlanıyor.

**Madde:**
```js
{ t:"1862-03-11", k:"kayip", etiket:["toprak-kaybi","somurgecilik","antlasma"],
  b:"Ubûk'un (Obok) Fransa'ya bırakılması — Fransa'nın Kızıldeniz'e ilk yerleşmesi",
  gun:"11 Mart 1862", yer:"Ubûk (Obok), Tâcûre körfezinin kuzey kıyısı",
  kisiler:"❓ TDV ad vermiyor",
  d:"Fransa, İngiltere'nin Aden'deki üstünlüğünü dengeleyecek bir mevki arayışıyla 1859'da Tâcûre körfezinin kuzeyindeki Ubûk'ta bir iskele kurmuştu. 11 Mart 1862 tarihli dostluk ve yardım anlaşmasıyla mahallî idareci burayı 52.000 frank karşılığında Fransızlara bıraktı. Bu, Fransa'nın Kızıldeniz kıyısındaki ilk kalıcı mülküdür; Süveyş Kanalı'nın 1869'da açılmasından sonra bütün Fransız Somalisi bu noktadan büyüdü. İdare merkezi 1888'de yeni kurulan Cibuti şehrine taşındı.",
  kaynak:"cibuti" },
```

## 1c. 🟡 CİBUTİ ŞEHRİ — yeni nokta, `kur:` ister

TDV `cibuti`: idare 1888'de Ubûk'tan Cibuti'ye taşındı, **1892**'de resmî
başşehir ilân edildi. İkisi de **yıl hassasiyetinde.**

```js
{ ad:"Cibuti", tur:"liman", lat:11.588, lon:43.145, g:1, k:3, m:"Tâcûre",
  kur:"1888-01-01",
  s:[{f:"1888-01-01",t:"1923-10-29",d:"fransa"}], d:[], v:[] },
```

🔴 **Karar sizde, iki gerekçeyle:**
1. Şehir **kurulduğunda zaten Fransız'dı** — yani `s:` dönemi `kur:` ile aynı
   gün başlıyor. Bu yeni bir **yabancı kırılması** (`Değişmez 2s`) doğurur ve
   o denetimin tavanı bugün 115'te dolu. Tavanı 116'ya çıkarmak mı, yoksa
   maddeyi yazıp açığı kapatmak mı — **maddesini aşağıda veriyorum**, tercih
   sizin.
2. **Ölçülmüş yakınlık:** Cibuti → Tâcûre **36,3 km** · Zeyla **44,1 km** ·
   Obok **44,7 km**. Üçü birlikte körfezi sarıyor; şu an Tâcûre'nin peteği
   tek başına bütün körfezi boyuyor (TAKİPÇİ'nin tespiti). 3 km kuralı en dar
   noktada 12 kat sağlanıyor — ama bu **havzanın en sık üçlüsü** olacak,
   Obok ile Cibuti arası 44,7 km. Petek etkisi üretimde ölçülmeli.

```js
{ t:"1888-01-01", k:"kayip", etiket:["somurgecilik"],
  b:"Cibuti şehrinin kurulması ve Fransız Somalisi'nin merkezi olması",
  gun:"1888", yer:"Cibuti, Tâcûre körfezinin güney ağzı",
  kisiler:"❓ TDV ad vermiyor",
  d:"Ubûk iskelesi büyük gemilere elverişsiz kalınca Fransa 1888'de körfezin güney ağzında Cibuti'yi kurdu ve sömürge idaresini oraya taşıdı; şehir 1892'de resmî başşehir ilân edildi. Aynı yıl Fransa ile İngiltere arasında imzalanan bir antlaşmayla Fransız ve İngiliz Somalisi'nin sınırları belirlendi ve Kızıldeniz'in Afrika ağzındaki paylaşım kesinleşti. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cibuti" },
```

## 1d. 🔴 TDV KENDİ İÇİNDE ÇELİŞİYOR — Tâcûre kime gitti?

Bunu **karar vermeden** bildiriyorum, çünkü iki madde birbirini yalanlıyor:

| Madde | Ne diyor |
|---|---|
| `cibuti` (**müstakil**) | Fransa *"bölgeyi kendi himayesine aldı (1884)"* |
| `somali` (ülke maddesi) | *"Zeyla', Berberâ ve **Tâcûre** aynı yıl **İngilizler** tarafından Somaliland adıyla sömürgeleştirildi"* |
| `berbera` | İngiltere 1884'te **Zeyla ve Berberâ'yı** işgal etti — **Tâcûre'yi ANMIYOR** |

**Önerim `cibuti`** ve gerekçesi sizin kendi kuralınız: *"`kaynak:` alanına
olayı anlatan maddeyi yaz, bölgeyi değil."* `cibuti` Tâcûre körfezinin
müstakil maddesi, `somali` ise Tâcûre'yi geçerken anan ülke maddesi.
Üçüncü madde (`berbera`) İngiliz işgalini sayarken Tâcûre'yi listeye
almayarak dolaylı olarak `cibuti`'yi destekliyor. **2'ye 1.**

📌 Verideki `Tacûra → fransa` da bu okumayla uyumlu, yani **veri değişmiyor.**
Ama çelişkiyi kayda geçiyorum: bir gün biri `somali` maddesini okuyup
"Tâcûre İngiliz'di" derse, tartışma burada çözülmüş olacak.

---

# 2. İTALYA — `KONTROL.md` 11-48

## 2a. 🟢 ASMARA + KERENE 1889-01-01 — **temiz, tereddütsüz**

Üç dalganın **tek pürüzsüz olanı.** TDV `eritre`: *"1889'da Asmara ve Keren'i
ele geçiren İtalyanlar"* — yıl hassasiyetinde, ve **verideki `1889-01-01`
zaten tam olarak bunun doğru yazımı.** Tarih değişmiyor.

Kapsadığı 2 kayıt: **Asmara** (`yerlesimler.js` — çekirdek dosya) ·
**Kerene** (`yerlesimler_afrika.js`). İkisi de `habesistan` → `italya`.

```js
{ t:"1889-01-01", k:"kayip", etiket:["toprak-kaybi","somurgecilik"],
  b:"Asmara ve Kerene'nin İtalyan işgali — Eritre yaylasının kaybı",
  gun:"1889", yer:"Asmara, Kerene (Bogos), Eritre yaylası",
  kisiler:"❓ TDV ad vermiyor",
  d:"Masavva'yı 5 Şubat 1885'te alan İtalyanlar dört yıl boyunca kıyı şeridinde kaldılar; Habeş imparatoru Yohannes'in 1889 Martında Mehdî kuvvetleriyle çarpışırken ölmesi üzerine yayla savunmasız kalınca Asmara ve Kerene'yi ele geçirdiler. Böylece Kızıldeniz kıyısındaki İtalyan varlığı ilk defa liman şeridinden çıkıp iç yaylaya yerleşti ve 1890'da bu topraklara 'Eritre sömürgesi' adı verildi. 1872'de Mısır'a bağlanan, 1884 Hewett Antlaşmasıyla Habeşistan'a bırakılan Bogos bölgesi böylece üçüncü kez el değiştirmiş oldu. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"eritre" },
```

⚠️ **Asmara çekirdek dosyada.** Kullanıcının gördüğü tablo bugün şu:
harita 1889'da İtalya'ya doğru büyüyor, yandaki listede *"Haydarpaşa-Ankara
demiryolu imtiyazı"* okunuyor (99 gün ötede). Bu madde onu kapatır.

### 2a-ek. İsteğe bağlı — Wichale Antlaşması (gün-kesin)

Kırılma üretmez, **ama günü TDV'de kesin** ve yukarıdaki maddenin sebebini
tamamlar. İstemezseniz atlayın:

```js
{ t:"1889-05-02", k:"antlasma", etiket:["diplomasi"],
  b:"Wichale (Uccialli) Antlaşması — İtalya'nın Habeşistan üzerindeki himaye iddiası",
  gun:"2 Mayıs 1889", yer:"Wichale (Uccialli), Habeşistan",
  kisiler:"II. Menelik",
  d:"İtalya, Eritre kıyısındaki kazanımlarını tanıtmak üzere 2 Mayıs 1889'da II. Menelik ile Wichale Antlaşması'nı imzaladı. Antlaşmanın İtalyanca ve Amharca metinleri arasındaki fark İtalya'nın Habeşistan üzerinde himaye iddia etmesine yol açtı; anlaşmazlık 1896'da Adua bozgunuyla sonuçlandı ve antlaşma 26 Ekim 1896'da Adisababa Antlaşması'yla feshedildi.",
  kaynak:"etiyopya" },
```

## 2b. ❓ ASEB 1882-03-10 — **günün kaynağını bulamadım**

| | |
|---|---|
| Veride | `Aseb: adal → italya`, **1882-03-10** |
| TDV `eritre` | *"Assab'ın 1882 yılında sömürge haline getirilmesi"* — **yıl** |
| `aseb` slug'ı | 🔴 **MADDE YOK** |

TDV yılı doğruluyor, **günü doğrulamıyor** ve Assab'ın müstakil maddesi yok.
`10 Mart` sayısı nereden geldiğini bulamadım.

🔴 **Tahmin yazmıyorum** (kuralınız). İki yol var, seçim sizin:

**(A) Tarihi `1882-01-01`'e çek** — TDV'ye birebir uyar, madde
`kaynak:"eritre"` ile tam dayanaklı olur. ⚠️ Ama o zaman aynı güne düşen
`1882-01-01 Mîzâb vahalarının (Gardâye) ilhakı` maddesiyle **mükerrer riski**
doğar (ikisi de Afrika, ikisi de sömürge — oran ölçülmeli).

**(B) `1882-03-10` kalsın**, madde yazılsın ve günün TDV dışı olduğu metinde
işaretlensin. Napolyon maddelerinde kullandığım biçim
(`OTURUM-14-DUZELTMELER §16c`). Madde metni (B) için:

```js
{ t:"1882-03-10", k:"kayip", etiket:["toprak-kaybi","somurgecilik"],
  b:"Aseb'in İtalyan sömürgesi ilân edilmesi — İtalya'nın Kızıldeniz'e yerleşmesi",
  gun:"10 Mart 1882 (gün TDV dışı kaynaktan)", yer:"Aseb (Assab), güney Eritre kıyısı",
  kisiler:"Giuseppe Sapeto",
  d:"Assab, 1869'da misyoner Giuseppe Sapeto tarafından Rubattino buharlı gemi şirketi adına satın alınmış ve şirketin kömür ikmal merkezi olarak işletilmişti. 1882'de İtalyan devleti limanı doğrudan devralarak sömürge hâline getirdi; TDV'ye göre bölgenin İtalyan hâkimiyeti altına girmesi süreci bununla başladı. Üç yıl sonra Masavva'nın alınmasıyla İtalya Kızıldeniz'in batı kıyısında kalıcı bir güç oldu. TDV yalnız yılı vermektedir; gün başka bir kayıttan alınmıştır.",
  kaynak:"eritre" },
```

**Tercihim (B)** — çünkü (A) mevcut bir kırılma tarihini oynatır, yani veri
değişikliği; (B) yalnız madde ekler ve belirsizliği görünür kılar.

## 2c. Somali kıyısı — **üç dalganın üçü de aynı değil**

### 2c-i. 🟢 1905-01-01 — temiz (4-5 kayıt: Mogadişu, Merka, Beledveyne, Baydoa…)

TDV `makdisu` birebir: *"Seyyid Ali b. Hamûd 1905'te Makdişu'yu, 1906'da
Somali sahilinde Zengibar'a ait bulunan bütün toprakları İtalya'ya sattı"*
— yıl hassasiyetinde, **veri doğru biçimde.**

```js
{ t:"1905-01-01", k:"kayip", etiket:["toprak-kaybi","somurgecilik"],
  b:"Makdişu ve Benâdir sahilinin İtalya'ya satılması",
  gun:"1905", yer:"Makdişu, Merkâ, Berâve, Benâdir sahili",
  kisiler:"Zengibar Sultanı Seyyid Ali b. Hamûd",
  d:"Makdişu 1871'den beri Zengibar sultanlarının doğrudan idaresindeydi; liman 1889'da, şehir ise 1892'de 160.000 rupi karşılığında İtalya'ya kiralanmıştı. Zengibar Sultanlığı İtalya'nın Benâdir bölgesindeki hâkimiyetini 1902'de tanıdı ve Sultan Seyyid Ali b. Hamûd 1905'te Makdişu'yu, ertesi yıl da Somali sahilindeki bütün Zengibar topraklarını İtalya'ya sattı. Böylece kira ilişkisi mülkiyete dönüştü; İtalya 1911'de Somali'yi sömürge ilân ederek Makdişu'yu başşehir yaptı. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"makdisu" },
```
⚠️ Makdişu da **çekirdek dosyada** — bu madde kullanıcının gördüğü en büyük
boşluklardan birini kapatır (en yakın madde bugün 201 gün ötede).

### 2c-ii. ❓ 1889-04-07 — yıl doğru, gün doğrulanamadı (5 kayıt)

Garove · Ayl · Bender Kāsım · Alula · Hafun. TDV `makdisu`: *"1889'da …
limanı İtalya'ya kiraya verildi"* — **yıl var, gün yok.** `7 Nisan`
sayısının kaynağını bulamadım. Aseb'le aynı sınıf; aynı iki yol geçerli
(`1889-01-01`'e çekmek ya da günü işaretleyerek bırakmak).

⚠️ **`1889-01-01`'e çekilirse Asmara/Kerene dalgasıyla aynı güne düşer** ve
tek madde iki dalgayı birden kapatamaz (biri Eritre yaylası, öbürü Somali
burnu). O yüzden **bu dalgada (B) yolunu, yani günü korumayı öneriyorum.**

### 2c-iii. 🔴 1888-12-01 — **TDV bu tarihi DESTEKLEMİYOR** (2 kayıt: Obbiya, Galkayo)

En ciddi bulgu. TDV `somali` şunu diyor:

> *"Ülkenin iç kısımlarında hüküm süren **Mâcerteyn ve Obbia** emirliklerine
> ait topraklar ise **1927'de** İtalyanlar tarafından işgal edildi"*

Yani TDV bu iki emirliğin işgalini **1927'ye**, atlasın ufkunun (1923) dört
yıl ötesine koyuyor. Veri ise 1888-12-01'den itibaren İtalyan boyuyor —
**39 yıl fark.**

📌 **Bunun bir uzlaşması var ve bence doğrusu o:** 1889 antlaşmaları bu iki
emirliği *kâğıt üzerinde* himayeye aldı, *fiilî* işgal 1925-27'de oldu.
Yani bu tam olarak **`isg:` şemasının tersi** bir durum — de jure bağ var,
de facto denetim yok. Proje bunu ayırt edebilecek tek alana zaten sahip:

- **`s:"italya"` doğru değil** — İtalya orayı yönetmiyordu;
- doğru olan, emirliklerin kendi kimliğini 1923'e kadar sürdürmesi ve
  İtalyan himayesinin `v:` (tâbi) olarak gösterilmesi.

🔴 **Bu bir veri kararıdır, benim yetkim dışında** ve `renkler.py`'de
`mecerteyn` / `obbiya` kimliği gerektirir. Merkez'e ve Oturum 3'e iletiyorum.
Karar verilene kadar **1888-12-01 için madde yazmıyorum** — çünkü yazacağım
madde "İtalya burayı aldı" diyecek ve TDV'ye göre bu 1927'de oldu.

---

# 3. Özet — ne teslim edildi

| Dalga | Kayıt | Tarih durumu | Teslim |
|---|---|---|---|
| Tâcûre 1884-01-01 | 1 | ✅ TDV yıl, veri doğru | **madde hazır** |
| Obok 1862-03-11 | *yeni* | ✅ **TDV gün-kesin** | **nokta + madde hazır** |
| Cibuti 1888 | *yeni* | ✅ TDV yıl | **nokta + madde hazır**, `kur:` kararı sizde |
| Asmara + Kerene 1889-01-01 | 2 | ✅ TDV yıl, veri doğru | **madde hazır** |
| Wichale 1889-05-02 | — | ✅ TDV gün-kesin | madde hazır *(isteğe bağlı)* |
| Benâdir 1905-01-01 | 4-5 | ✅ TDV yıl, veri doğru | **madde hazır** |
| Aseb 1882-03-10 | 1 | ❓ yıl ✅ / gün ✗ | madde hazır, **(A)/(B) kararı sizde** |
| Mecerteyn 1889-04-07 | 5 | ❓ yıl ✅ / gün ✗ | (B) önerildi, madde metni istenirse |
| Obbiya 1888-12-01 | 2 | 🔴 **TDV 1927 diyor** | **madde YAZILMADI** — §2c-iii |

**Yedi madde + iki nokta hazır. Bir dalga bilerek açık bırakıldı.**

## 3a. Yazmadıklarım ve sebepleri

- **1888-12-01 maddesi** — TDV bu tarihi desteklemiyor (§2c-iii). Yazsaydım
  ölçülebilir biçimde yanlış olacaktı.
- **`kisiler:` alanları** — sekiz maddenin beşinde `❓` bıraktım. TDV bu
  olaylarda ad vermiyor; Lagarde, Filonardi, Antonelli gibi adlar standart
  kayıttan gelirdi ve **uydurma sayılırdı.** Sapeto (Aseb) ve Menelik
  (Wichale) TDV'de geçtiği için yazıldı.
- **`1889-04-07` maddesi** — (B) yolunu önerdim ama metni yazmadım; önce
  Aseb'de (A) mı (B) mi seçildiğini bilmem gerek, ikisi aynı sınıf ve
  **ayrı yollara gitmemeliler.**

## 3b. Denetime etkisi (ölçülmedi — veriye yazmadım)

Hepsi uygulanırsa beklenen:
- **Değişmez 2s açığı 115 → ~108** (yedi dalga maddelenirse). Tavan
  düşürülebilir; bu, tavanı yükselten değil **düşüren** ilk parti olur.
- **Yerleşim 951 → 953** (Obok + Cibuti), `BEKLENEN_SAHIPSIZ` **değişmez** —
  ikisi de sahipli.
- Cibuti'nin `kur:`ı yeni bir yabancı kırılması doğurur; maddesi yazıldığı
  için açık üretmez.

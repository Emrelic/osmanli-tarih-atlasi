# Yol Haritası — dünya kapsamına geçiş

Bu belge, atlası Osmanlı merkezli bir çalışmadan **1200-1924 arası bütün dünyayı**
kapsayan bir tarihî coğrafya motoruna dönüştürme planıdır. Günlük çalışma kuralları
için `CLAUDE.md`, mimari özet için `PLAN.md`.

**Temel karar:** dünya tek hamlede eklenmez. Kapsam, Osmanlı çekirdeğinden dışarı
doğru **bölge bölge** açılır; her bölge kendi içinde tamamlanmadan bir sonrakine
geçilmez. Yarım kalmış bir bölge, hiç eklenmemiş bir bölgeden **daha kötüdür** —
çünkü §2'deki emilme davranışı yüzünden yanlış bilgi üretir.

---

## 1. Altı katman

Atlas altı ayrı veri katmanından oluşur. Her katmanın kendi olgunluk seviyesi,
kendi sahibi ve kendi genişleme takvimi vardır.

| # | Katman | Dosya | Bugün | Hedef |
|---|---|---|---|---|
| 1 | **Yerleşimler ve bölgeleri** | `yerlesimler.js` | 567 nokta, Osmanlı kutusu | dünya, ~4000-6000 nokta |
| 2 | **Devletler listesi** | `devletler.js` | 77 kayıt | dünya, ~600-900 kayıt |
| 3 | **Devlet kronolojileri** | `devletler.js` içinde | 77 kaydın kronolojisi | başlık düzeyinde dünya |
| 4 | **Kronoloji içeriklerinin doldurulması** | `devletler.js` + `olaylar*.js` | Osmanlı tam, diğerleri yok | ileri faz |
| 5 | **Olaylar / savaşlar / antlaşmalar** | `olaylar*.js`, `savaslar.js` | 799 madde, 108+30 kayıt | dünya olayları |
| 6 | **Kişiler** | `kisiler.js` | 90 kişi | dünya hükümdarları ve figürleri |

**Katmanlar arası bağımlılık:** 1 → 2 → 3 → (4, 5, 6). Yerleşim yoksa harita yoktur;
devlet listesi yoksa yerleşime sahip yazılamaz. 4, 5 ve 6 birbirinden bağımsızdır ve
paralel oturumlarda yürütülebilir.

---

## 2. Motor bugün ne yapıyor

İstenen "yerleşim merkezli bölgelere ayırma motoru" **zaten var**:
`arac/uret_petek.py`. Yapılacak iş yeni bir motor yazmak değil, mevcut motoru dünya
ölçeğine hazırlamaktır.

Motor bugün şunları yapıyor:
- Her yerleşim için bir **petek** (Voronoi hücresi) üretir
- Petek sınırlarını **nehir yataklarına, dağ sırtlarına ve gerçek kıyı çizgisine**
  yaslar (25 adlı akarsu, 61 dağ sırası, Natural Earth 10m kara maskesi, 117 göl)
- Chaikin ile yumuşatır, göl ve denizleri çıkarır
- Yerleşimin hâkimiyet zincirinden gün gün dönem geometrisi üretir
- İdari kademeye (`k`) göre bölge sınırları çizer (`bolgeler.js`)

Yani **coğrafi + topografik** bölme çalışıyor. **İdari** bölme `k`/`m` alanlarıyla
kısmen çalışıyor. **Askerî** bölme (kale hatları, geçitler, menzil yolları) yalnızca
sefer güzergâhlarında (`savaslar.js` SEFERLER) var, petek sınırına girmiyor.

---

## 3. Dünya ölçeğine geçmeden çözülmesi gereken yapısal sorunlar

Dördü de **Faz B'ye başlamadan önce** çözülmeli; dördüncüsü §6.5'te anlatılıyor.
Aksi hâlde her bölge eklemesi sorunu büyütür.

### 3.1 Voronoi tek seferlik hesaplanıyor — zaman dilimli olmalı ⚠️ EN ÖNEMLİ

Motor bugün Voronoi diyagramını **bütün tarih için bir kez** hesaplıyor. Yani
1869'da açılan Port Said'in peteği, 1300 yılının haritasında da yer kaplıyor ve
komşularının hücresini küçültüyor.

Osmanlı kutusunda bu sorun küçüktü çünkü yerleşimlerin çoğu bütün dönem boyunca
vardı. **Dünya ölçeğinde katlanılamaz:** Amerika'nın sömürge şehirleri, Sibirya'nın
Rus kaleleri, Avustralya'nın limanları 1300 haritasında hayalet hücreler açar.

`kur:` alanı veride var ama **motor onu hiç kullanmıyor** — yalnız denetim
betikleri okuyor. Yapılacak:
- Voronoi'yi **o tarihte var olan yerleşimlerle** yeniden hesapla
- Yerleşim kümesi değiştiğinde yeni bir **epok** başlat; geometri epok başına üretilsin
- `kur:` (kuruluş) alanına ek olarak **`bit:` (yok oluş)** alanı eklensin —
  terk edilmiş ya da yıkılmış şehirler için

### 3.2 Çıktı boyutu ölçeklenmiyor ⚠️

Bugün 567 yerleşim ve 424 dönem şu çıktıyı veriyor:

| Dosya | Boyut |
|---|---|
| `donemler.js` | 12.4 MB |
| `devletler_harita.js` | 14.0 MB |
| **toplam** | **~27 MB** |

Bu zaten ağır. Dünya ölçeğinde yerleşim ~8 kat, kırılma sayısı ~5 kat artar;
mevcut mimariyle çıktı **yüzlerce MB** olur. Tarayıcıda açılmaz.

**Sebep:** her dönem için, aynı sahibe ait peteklerin birleştirilmiş (union)
gövdesi ayrı ayrı yazılıyor. Aynı poligon yüzlerce kez tekrarlanıyor.

**Çözüm — mimari değişikliği:**
- **Petek geometrisi epok başına bir kez** yazılır (poligon başına tek kayıt)
- Sahiplik ayrı, **çok küçük** bir tabloda tutulur: `yerleşim × dönem → sahip`
- Tarayıcı union yapmaz; her peteği sahibinin rengiyle **boyar**. Aynı renkli komşu
  peteklerin arasına çizgi çizilmediği sürece göz onları tek gövde olarak görür.

Bu değişiklik çıktıyı tahminen **10-15 kat** küçültür ve union maliyetini tamamen
kaldırır. Ayrıca "bu petek hangi yerleşimin?" sorusu tarayıcıda cevaplanabilir hâle
gelir — tıklanınca yerleşim kartı açmak mümkün olur.

**Bedeli:** `js/app.js`'in boyama mantığı yeniden yazılır (Oturum 1 ile ortak iş).

### 3.3 Girdi tek dosya — paralel çalışmayı engelliyor

`yerlesimler.js` tek dosya ve tek sahibi var; bu yüzden yerleşim araştırması yapan
oturum kendi dosyasına yazamıyor. Motor **`data/yerlesimler_*.js` desenindeki bütün
dosyaları okuyacak** şekilde değiştirilmeli. Böylece:

```
data/yerlesimler.js          Osmanlı çekirdeği (Oturum 0)
data/yerlesimler_avrupa.js   Faz B (Oturum 4)
data/yerlesimler_asya.js     Faz C-D
...
```

Her dosyanın tek sahibi olur, çakışma biter.

---

## 4. Coğrafi genişleme fazları

Sıra, kullanıcının belirlediği ilgi alanından dışarı doğrudur.

### Faz A — Osmanlı çekirdeği ✅ TAMAM
Anadolu, Rumeli, Ege, Suriye-Irak, Hicaz-Yemen, Mısır, Kuzey Afrika, Macaristan,
Kafkasya, Karadeniz kuzeyi. 567 yerleşim, 424 dönem, 97 devlet.

### Faz B — İlgi alanı (öncelikli) 🔜 SIRADAKİ
Kullanıcının tanımladığı asıl çalışma alanı:
- **Avrupa'nın tamamı** (Batı, Orta, Kuzey, İber, İtalya, Britanya, İskandinavya)
- **Kuzey Afrika ve Sahra üstü** (Fas'tan Mısır'a, Sahra vahaları dahil)
- **Doğu Afrika** — Habeşistan, Somali, Svahili kıyısı, Zengibar
- **Ortadoğu'nun tamamı**, İran, Kafkasya
- **Karadeniz kuzeyi ve Doğu Avrupa** — Rusya, Lehistan-Litvanya, bozkır hanlıkları

`BOLGE` kutusu hedefi: yaklaşık `box(-20, -12, 75, 72)`

### Faz C — Orta Asya ve Hindistan
Buhara, Hîve, Hokand, Kazak bozkırı, Doğu Türkistan; Delhi sultanlıkları, Dekken,
Vijayanagara, Babür, Maratha, Sih, İngiliz Hindistanı.

### Faz D — Doğu ve Güneydoğu Asya
Çin, Kore, Japonya, Tibet, Moğolistan; Majapahit, Malakka, Ayutthaya, Đại Việt,
Birmanya, Açe, Filipinler.
*Kullanıcının notu doğru:* Çin, Japonya ve Hindistan için 1288'de bile **zengin ve
güvenilir veri vardır**; bu faz kayıt yoğunluğu bakımından Faz B'ye yakındır.

### Faz E — Sahra altı Afrika
Mali, Songhay, Kanem-Bornu, Hausa, Sokoto, Aşanti, Dahomey, Benin, Oyo, Kongo,
Lunda, Buganda, Büyük Zimbabve, Zulu, Merina.
*1288 için veri seyrektir;* §5'teki "veri yok" kuralı en çok burada işler.

### Faz F — Amerika, Sibirya, Okyanusya
Aztek, İnka, Maya; sömürge idareleri, bağımsızlık sonrası cumhuriyetler; Sibirya
hanlıkları ve Rus ilerleyişi; Hawaii, Tonga, Maori, Avustralya.
*1288'de bu coğrafyaların çoğu için tarihî yerleşim verisi ya yoktur ya çok azdır.*

---

## 5. Bilinmeyeni bilinmiyor diye göstermek

Kullanıcının kendi tespiti: 1200 civarında Sahra altı Afrika, Avustralya, Amerika ve
Asya'nın kuzey-iç kesimleri için veri azdır. **Bu boşluğu doldurmak yerine boş
göstereceğiz.** Uydurma devlet, uydurma sınır yok.

Bugün zaten bir mekanizma var: sahibi olmayan yerleşim haritada boş görünür ve
29 nokta **kasten** böyle duruyor (çöller, 1744 öncesi Necid). Bunu formelleştir:

- Dolgu noktalarına yeni bir alan: **`bos:"devletsiz"`** veya **`bos:"veri-yok"`**
  - `devletsiz` — orada devlet **yoktu** (Rub'ul Hâlî, Sahra iç çölü, Karakum)
  - `veri-yok` — devlet olabilir ama **bilmiyoruz** (1288 iç Afrika, Amazon)
- İkisi haritada **farklı** gösterilir: `devletsiz` düz nötr, `veri-yok` taramalı
- Lejantta ikisi de ayrı satır olur

Bu ayrım dürüstlük meselesidir: "burada kimse yoktu" ile "burasını bilmiyoruz"
tarihsel olarak çok farklı iki iddiadır ve atlas ikisini karıştırmamalıdır.

---

## 6. Zamanla sahneye giren yerler

Kullanıcının istediği "tarih ilerledikçe yeni yerler ve bölgeler sahneye çıkacak"
davranışı, §3.1'deki zaman dilimli Voronoi ile sağlanır:

| Alan | Anlamı | Motor davranışı |
|---|---|---|
| `kur:"1703-05-27"` | yerleşim bu tarihte kuruldu | öncesinde **peteği hiç oluşmaz**, alanı komşulara gider |
| `bit:"1258-02-13"` | yerleşim yok oldu / terk edildi | sonrasında peteği kalkar |
| sahip yok + `bos:` | devletsiz ya da veri yok | peteği vardır, boyanmaz |

Böylece 1300 haritasında Petersburg, Yeni Amsterdam, Port Said yoktur; 1750'de
belirirler ve çevredeki peteklerden yer alırlar. Bir kıtanın "sahneye girmesi" de
aynı mekanizmadır: o kıtanın noktaları eklenir, kutusu açılır.

---

## 6.5 Dört boyut ve senkron değişmezi

Atlasın verisi dört boyutludur ve dördü **aynı anda** tutarlı olmak zorundadır:

| Boyut | Nedir | Nerede tutulur |
|---|---|---|
| **Tarih** | 1200-1924, gün hassasiyeti | her dönemin `f`/`t` alanları |
| **Yerleşim** | şehir, kale, liman, dolgu noktası | `yerlesimler*.js` kayıtları |
| **Petek** | yerleşimin temsil ettiği alan | üretilir; yerleşim kümesinden türer |
| **Bölge** | idari kademe: yerleşim → sancak → eyalet | `k` ve `m` alanları |

**Senkron değişmezi:** *Herhangi bir tarihte, herhangi bir bölgede, hangi
yerleşimlerin var olduğu ve bunların hangi devlete ait olduğu tek bir tutarlı
cevaba sahip olmalıdır.* Dört boyuttan biri diğerleriyle çelişiyorsa harita yalan
söylüyor demektir.

### Petek bölünmesi — istenen davranış zaten §3.1'den doğuyor
Kullanıcının tarif ettiği "tarih ilerledikçe eski yerleşimlerin bölgeleri
bölünecek" davranışı, zaman dilimli Voronoi'nin doğal sonucudur: bir bölgeye yeni
yerleşim eklendiğinde o tarihten itibaren komşu petekler küçülür ve alan yeni
noktaya geçer. Ayrı bir mekanizma gerekmez — **§3.1 yapılırsa bu kendiliğinden
gelir.** Yapılmazsa hiç gelmez; bugün yeni nokta 1288'in haritasını da değiştirir.

### ⚠️ Bölge boyutunun zaman boyutu yok — çözülmesi gereken dördüncü sorun

`m` alanı (bağlı olduğu merkez) **zamansızdır**. Bir yerleşim bütün tarih boyunca
tek bir merkeze bağlıdır. Gerçekte idari bağlılık sürekli değişir: Ünye 1920'de
Ordu sancağına eklenmiştir, öncesinde başka yerlere bağlıydı.

Bunun bugünkü sonuçları, `uret_petek.py`'nin bölge çizim mantığında görülüyor:
- **Üyelik statik**: `_uyeler` sözlüğü bir kez kurulur, tarihe göre değişmez
- **Yalnız Osmanlı için çalışır**: `if not (y["d"] or y["v"])` satırı, Osmanlı
  dönemi olmayan yerleşimi bölge katmanının tamamen dışında bırakır. Yani
  **hiçbir yabancı devletin idari kademesi haritada yok.**
- **Aralık min/max ile hesaplanır**: bölgenin görünürlük aralığı merkezin ilk ve
  son Osmanlı tarihidir; aradaki kopukluklar (ör. Fetret) yok sayılır.

Ölçtüm: **311 yerleşim-tarih çiftinde** yerleşim ile bağlı olduğu merkez farklı
devletlerin elindedir. Örnekler: 1300'de Söğüt Osmanlı ama `m:"Bursa"` ve Bursa
Bizans; Manisa Saruhanoğulları ama `m:"İzmir"` ve İzmir Aydınoğulları. Bugün bu
görsel hataya dönüşmüyor çünkü bölge katmanı zaten yalnız Osmanlı dönemlerinde
çiziliyor — ama dünya kapsamında **her devletin idari kademesi gerekecek** ve o
zaman bu model çöker.

**Yapılacak — `m`/`k` alanları zamanlı hâle gelmeli:**
```js
// bugün:
k:4, m:"Trabzon"

// hedef:
kd:[{f:"1281-01-01", t:"1427-06-01", k:2, m:null},          // bağımsız beylik merkezi
    {f:"1427-06-01", t:"1920-01-01", k:4, m:"Trabzon"},     // Osmanlı sancağı
    {f:"1920-01-01", t:"1923-10-29", k:4, m:"Ordu"}]
```
Motor tarafında: `_uyeler` sözlüğü **dönem başına** kurulur, bölge geometrisi o
dönemin üyelerinden üretilir, ve `if not (y["d"] or y["v"])` filtresi kaldırılıp
yerine "merkez ile üye aynı devlete ait mi?" kontrolü konur.

### Sorgulanabilir index — dört boyutun buluştuğu yer

Kullanıcının istediği "belli bir tarihte belli bir bölgede hangi yerleşimler var
ve kime ait" sorusu, bir araçla cevaplanabilir olmalı. **Yapılacak araç:**
`arac/sorgu.py` — verilen tarih ve bölge için yerleşim, sahip, idari kademe ve
petek alanını tablo hâlinde döker.

```
py arac/sorgu.py 1453-05-29 --bolge rumeli
# Yerleşim        Sahip      Kademe  Bağlı olduğu   Petek km²
# Edirne          OSMANLI    k2      —              12 400
# Dimetoka        OSMANLI    k4      Edirne          3 100
# Selanik         bizans     k3      —               5 900
```

Bu araç aynı zamanda senkron değişmezinin denetim aracıdır: çelişkili satır
varsa (yerleşim ile merkezi farklı devlette, ya da merkez o tarihte henüz
kurulmamış) uyarı basar.

---

## 7. Bir fazın iş akışı (her faz için aynen tekrarlanır)

1. **Devlet listesi** — o bölgenin devletleri `devletler.js`'e girer *(Oturum 3)*
2. **Yerleşim listesi** — `yerlesimler_<bolge>.js` yazılır: ad, koordinat, `tur`,
   idari kademe (`k`/`m`), hâkimiyet zinciri (`s`/`d`/`v`), `kur`/`bit` *(Oturum 4)*
3. **Yoğunluk kabulü** — §8'deki kapsama testi geçilir
4. **Kutu açılır** — `uret_petek.py` içindeki `BOLGE` o bölgeyi kapsayacak şekilde
   genişletilir ve üretim koşulur *(Oturum 0)*
5. **İki değişmez** — `CLAUDE.md` §3'teki iki denetim temiz çıkmalı
6. **Görsel doğrulama** — kullanıcı haritaya bakar; bulduğu hatalar bir sonraki
   turun girdisidir
7. **Kronoloji** — o bölgenin devlet kronolojileri başlık düzeyinde yazılır

**Adım 4, adım 3 geçilmeden yapılmaz.** Kutuyu erken açmak, mevcut peteklerin
boş coğrafyaya yayılması demektir.

---

## 8. Yerleşim yoğunluğu ölçütü ve kabul testi

"Ne kadar nokta yeter?" sorusunun ölçülebilir cevabı olmalı, yoksa her faz
"yeterince eklendi mi?" tartışmasında takılır.

**Ölçüt:** kapsanan kutu içinde, karadaki hiçbir nokta en yakın yerleşime
şundan uzak olmamalı:

| Bölge tipi | Azami uzaklık |
|---|---|
| Yoğun tarihî coğrafya (Anadolu, Rumeli, İtalya, Nil vadisi) | **60 km** |
| Normal (Avrupa içi, İran, Kuzey Afrika kıyısı) | **120 km** |
| Seyrek (bozkır, Sahra, Sibirya, iç Arabistan) | **300 km** |

Seyrek bölgelerde nokta, gerçek bir şehir olmak zorunda değil; `tur:"bolge"` tipinde
bir **dolgu noktası** olabilir (Rub'ul Hâlî kuzeyi, Karakum gibi). Dolgu noktası
sahipsiz kalır ve §5'teki `bos:` alanıyla etiketlenir.

**Yapılacak araç:** `arac/denetle_kapsama.py` — kara maskesini ızgaraya böler, her
hücrenin en yakın yerleşime uzaklığını ölçer, eşiği aşan bölgeleri liste ve
görüntü olarak verir. Bu araç yazılmadan Faz B'nin 3. adımı ölçülemez.

---

## 9. Kronoloji içeriklerinin doldurulması (ileri faz)

Kullanıcının kararı: **önce başlık, sonra içerik.** Kapsam derinliğe tercih edilir.

- **Aşama 1 (şimdi):** her devlet için başlık düzeyinde kronoloji — kuruluş, birkaç
  dönüm noktası, son. Tek satırlık maddeler.
- **Aşama 2 (sonra):** başlıkların içi doldurulur — `olaylar*.js`'teki gibi gün/yer/
  kişiler alanları ve 2-4 cümlelik anlatım, doğrulanmış kaynak bağlantısı.
- **Aşama 3:** olaylar, savaşlar, antlaşmalar ve kişiler katmanları dünya ölçeğine
  taşınır; her savaşa taraf devletler ve her antlaşmaya imzacılar bağlanır.

Aşama 2'ye, Aşama 1 bir bölge için **tamamlanmadan** geçilmez.

---

## 10. Oturum dağılımı ve öncelik

`CLAUDE.md` §7'deki tabloya ek olarak, dünya kapsamı için:

| Sıra | İş | Oturum | Ön koşul |
|---|---|---|---|
| 1 | **Görsel doğrulama turu** | kullanıcı + 0 | — |
| 2 | Motor: çok dosyalı girdi (§3.3) | 0 | — |
| 3 | Motor: zaman dilimli Voronoi + `bit:` (§3.1) | 0 | — |
| 4 | Motor: `k`/`m` alanlarının zamanlı hâle gelmesi (§6.5) | 0 | 3 |
| 5 | Mimari: petek geometrisi + sahiplik ayrımı (§3.2) | 0 + 1 | — |
| 6 | `arac/denetle_kapsama.py` (§8) | 0 veya 6 | 2 |
| 7 | `arac/sorgu.py` — dört boyutlu sorgu ve senkron denetimi (§6.5) | 0 veya 6 | 4 |
| 8 | Devletler dizini — dünya, başlık düzeyinde | 3 | — |
| 9 | Faz B yerleşim katmanı | 4 | 2, 6 |
| 10 | Faz B kutu açılışı ve doğrulama | 0 | 9 |
| 11 | Faz C, D, E, F — aynı döngü | 4 + 0 | sırayla |

**2, 3, 4 ve 5 numaralı motor işleri Faz B'den önce bitmeli.** Bunlar yapılmadan
eklenen her yerleşim, sonradan yeniden ele alınması gereken borç üretir: nokta
kümesi büyüdükçe zaman dilimli Voronoi'ye geçiş ve `k`/`m` alanlarının zamanlı
hâle getirilmesi kat kat pahalılaşır.

---

## 11. Bilinen riskler

- **Çıktı boyutu** (§3.2) — çözülmezse dünya kapsamı teknik olarak imkânsız.
- **Üretim süresi** — bugün ~15 dakika. Zaman dilimli Voronoi ve 8 kat yerleşim
  bunu saatlere çıkarabilir; epok bazlı önbellek gerekebilir.
- **Kaynak dengesizliği** — Avrupa ve İslâm dünyası için gün hassasiyetli veri var;
  Sahra altı Afrika ve Amerika için çoğu zaman on yıl hassasiyeti bile zor. Farklı
  hassasiyetleri aynı zaman çubuğunda göstermek yanıltıcı olabilir; `YYYY-01-01`
  yazımı bunu kısmen çözer ama arayüzde de belirtilmesi düşünülmeli.
- **Kapsam kayması** — atlas "Osmanlı Tarih Atlası" adıyla yayında. Dünya kapsamı
  olgunlaştıkça ad, ana sayfa metni ve varsayılan görünüm yeniden düşünülmeli.
- **Yarım bölge** — bir bölgeye başlayıp bitirmemek, hiç başlamamaktan kötüdür (§0).

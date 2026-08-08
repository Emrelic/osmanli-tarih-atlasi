# ALTYAPI — sürtünme motoru · 1281 tabanı · ağırlıklı yerleşim sınıfı

> Bu belge **8 Ağustos 2026'da Emre'nin tarif ettiği üç işin** tasarımıdır.
> `MIMARI.md` bugünkü motoru anlatır; bu belge **yerine geçecek olanı** anlatır.
> Kararlar alınmıştır ve gerekçeleri yazılıdır — bir sonraki oturum bunları
> yeniden tartışmaz, **uygular.**

---

## 0. Üç iş

| # | iş | bugün | hedef |
|---|---|---|---|
| **1** | Coğrafî yapılar katman olarak oturur; engel yaratanlar petek sınırını **sürtünme** ile belirler | kıyı/nehir/sırt yalnız **yaslama** için kullanılıyor | **maliyet-mesafe** (cost-distance) motoru |
| **2** | **1281**'de sahnedeki bütün dünya yerleşimleri | 2261 nokta, ağırlık Osmanlı küresinde | ~4.000 nokta, dünya |
| **3** | Yerleşimin **sınıfı ve bölgesi zamanla değişir**; her yerleşimin kendi kronolojisi | `m:` alanının zaman boyutu **yok** (`Değişmez 3`, ölçülmüş 359 çift) | ağırlıklı sınıf + `ad_tarihce:` + arayüz |

🔴 **Üçü sıralı değil.** `§4`'e bak — 1'in *kurulması* 2'yi beklemez ama
*faydası* 2'nin fonksiyonudur.

---

## 1. KARAR — sınıf bir KAPI değil bir AĞIRLIKTIR

**Emre, 8 Ağustos 2026.** Gerekçe: anlatılan şey bir **süreklilik**ti —
*"Söğüt zamanla 3. hatta 4. sınıfa düştü"*, *"Efes'in bölgesi bir zaman
sonra İzmir'e geçer"*. Kapı sistemi *"geçer"*i ifade edemez; ancak *"bir gün
açık bir gün kapalı"* diyebilir, ve o gün Efes'in bütün bölgesi **tek karede**
İzmir'e sıçrar.

### 1.1 🔴 BU BÖLÜM BİR KEZ YANLIŞ YAZILDI — ÖLÇÜM ÇÜRÜTTÜ

**İlk hâli şunu diyordu** ve kullanıcıya da böyle bildirildi:

> *"Kapı, ağırlığın özel hâlidir: `w = 0 ⇒ maliyet ÷ 0 = ∞ ⇒ hiçbir hücreyi
> kazanamaz.` Yani **4. sınıf = ağırlığı sıfır olan yerleşim.**"*

Matematik doğruydu. **Veriye uygulanınca çöktü** — ve çökmesinin sebebi,
tasarım yazılırken **var olan alanın ölçülmemiş olmasıydı.**

```
🔴 `k:` alanı ZATEN VAR — ve `kd:` (zamanlı hâli) ZATEN TASARLANMIŞ
   (VERI-YAPISI.md §"Planlanan alanlar", gerekçe MIMARI.md §3.1 ve §3.4)

ölçülen dağılım (2261 nokta)
   k:1     4   Söğüt · Bursa · Edirne · İstanbul          ← yalnız BAŞKENTLER
   k:2    58   Ankara · Konya · Sivas · Trabzon · Sofya   ← eyalet merkezi
   k:3   188   İznik · İzmit · Manisa · Aydın · Karaman   ← sancak merkezi
   k:4   473   İnegöl · Geyve · Kestel · Aydos Kalesi     ← kaza / kasaba
   k:0  1538   Otranto · Brindisi · Soçi · Tarki          ← kademesiz (yabancı)
```

⇒ **`k:4` boş bir kova değil, 473 gerçek yerleşim.** Ağırlıkları sıfırlansa
**473 petek bir gecede silinirdi** — ve o peteklerin çoğu **doğru.** İnegöl
1300'de bir kasabadır ama 40 km çevresinde başka nokta yoktur; toprağı
tutması gerekir.

### 1.1b ⇒ DOĞRU CEVAP: ağırlık **sıfırlanmaz, KÜÇÜLTÜLÜR** — ve kapıya hiç gerek yok

Kullanıcının koyduğu kural **mutlak değil GÖRELİDİR**: *"Yeşilköy koca
İstanbul'dan bölge çalmasın."* Bu bir *"Yeşilköy'ün bölgesi olmasın"* değil,
bir ***"Yeşilköy'ün bölgesi İstanbul'unkinin yanında ihmal edilebilir
olsun"*** cümlesidir. Ve ağırlık sistemi bunu **kendiliğinden** yapar:

```
Yeşilköy (w düşük) ↔ İstanbul (w yüksek)   → Yeşilköy'e kıl payı hücre. DOĞRU.
İnegöl   (w düşük) ↔ 40 km'de kimse yok    → İnegöl toprağı TUTAR.  DOĞRU.
```

**Aynı ağırlık, iki farklı sonuç** — çünkü sonucu belirleyen ağırlığın
kendisi değil, **komşusuyla ORANI.** Sıfır ağırlık bu ayrımı yok eder:
Yeşilköy'ü doğru çözerken İnegöl'ü yanlış çözer.

📌 Ve bu, `§3.2`de ölçülen `banda-adalari` vakasının aynısıdır tersinden:
orada küçük bir kimlik **komşusu olmadığı için** dev bir alan boyuyordu.
**Petek büyüklüğünü belirleyen şey noktanın kendisi değil, çevresidir.**

### 1.2 Şema — YENİ ALAN YOK, `kd:` HAYATA GEÇİRİLİR

`VERI-YAPISI.md` bunu zaten tasarlamış ve *"k/m'nin yerini alacak"* diye
işaretlemiş. Yeni bir `sinif:` alanı **açılmayacak**:

```js
{ ad:"Söğüt", lat:…, lon:…,
  kd:[{ f:"1281-01-01", t:"1326-04-06", k:1, m:null      },  // beylik merkezi
      { f:"1326-04-06", t:"1402-07-28", k:3, m:"Bursa"   },  // Bursa merkez oldu
      { f:"1402-07-28", t:"1923-10-29", k:4, m:"Bilecik" }] }
```

🟢 **`kd:`nin `sinif:`ten üstünlüğü:** kademeyi **ve** bağlı olduğu merkezi
**birlikte** zamanlı yapıyor. `Değişmez 3`ün ölçülmüş 359 çifti tam olarak
`m:`nin zamansızlığından doğuyor — ayrı bir `sinif:` alanı kademeyi
çözer, `m:`yi çözmezdi.

### 1.2b 🔴 AĞIRLIK TABLOSU UYDURULMUŞTU — ÖLÇÜLDÜ VE DEĞİŞTİ

İlk hâli `1,00 / 0,70 / 0,45 / 0,00` diyordu ve **bu sayılar hiçbir şeye
dayanmıyordu.** 8 Ağustos 2026'da Osmanlı çekirdeğinde (36-45°K, 20-45°D)
kademe başına **en yakın komşu mesafesi** ölçüldü:

```
k:4  kaza      29 km      (215 nokta)
k:3  sancak    46 km      (69 nokta)
k:2  eyalet    67 km      (28 nokta)
k:1  başkent   19 km      (4 nokta — YOĞUN bölgede, ölçüm ANLAMSIZ)
```
⇒ **29 : 46 : 67 ≈ 1 : 1,6 : 2,3** — temiz bir hiyerarşi, ve **veri kendi
oranını söylüyor.** Voronoi sınırı tam ortadan geçtiği için yarıçap bunun
yarısıdır.

| kademe | ne | ölçülen aralık | **ağırlık `w`** |
|---|---|---|---|
| **1** | başkent | (ölçülemedi, 4 nokta) | **1,50** ⚠️ tahmin |
| **2** | eyalet merkezi | 67 km | **1,00** |
| **3** | sancak merkezi | 46 km | **0,69** |
| **4** | kaza / kasaba | 29 km | **0,43** |
| **0** | kademesiz (yabancı) | — | **0,69** ← nötr, k:3 ile aynı |

⚠️ **`k:1` ölçülemedi ve bu AÇIKÇA yazılıyor:** yalnız dört nokta var
(Söğüt · Bursa · Edirne · İstanbul) ve dördü de Marmara'nın en yoğun
bölgesinde, yani komşu mesafeleri **kademelerini değil çevrelerinin
kalabalığını** ölçüyor. `1,50` bir tahmindir ve öyle damgalanmıştır.

### 1.3 🔴 YARIÇAP TAVANI — "petek gittiği yere kadar gider" YANLIŞ

**Emre, 8 Ağustos 2026:**
> *"Bir yerleşim yerinin idarî, askerî, sosyal, siyasal olarak hükmedeceği
> alan bellidir… uçsuz bucaksız toprağa, çöle, bozkıra, ormana ancak X
> kilometre kadar hâkim olabilir."*

**Doğru, ve bugünkü motorda bu tavan YOK** — Voronoi hücresi komşu
bulamayınca sonsuza kadar büyür. `banda-adalari`nın 573.188 km² boyaması
(kendi yüzölçümünün 3.200 katı) bunun ölçülmüş sonucudur.

🔴 **Ve X bir kilometre DEĞİL, bir GÜN sayısıdır.** Ölçüldü: yoğun ve
gerçekçi modellenmiş bölgelerde komşu mesafesi
```
Batı Anadolu  ova+tepe   17 km   ≈ YARIM günlük yürüyüş
Trakya        ova        33 km   ≈ BİR günlük yürüyüş
Mısır/Nil     vadi       34 km   ≈ BİR günlük yürüyüş
```
**Veriye bu konmadı, ölçünce çıktı.** Kilometre araziye göre değişir
(ovada 35 km/gün, ormanda 12, dağda 10); **gün değişmez.**

⇒ **Ağırlık `w`, gün bütçesinin ta kendisidir.** İki ayrı parametre değil:

```
sahip(hücre) = argmin  maliyet(yerleşim → hücre) ÷ w
     ve       maliyet > w × GÜN_BİRİMİ  ⇒  SAHİPSİZ
```

| kademe | gün bütçesi | ova/kıyı | bozkır | çöl | orman |
|---|---|---|---|---|---|
| k:1 | 10 gün | ~350 km | ~300 km | ~150 km | ~120 km |
| k:2 | 6 gün | ~210 km | ~180 km | ~120 km | ~70 km |
| k:3 | 4 gün | ~140 km | ~120 km | ~100 km | ~50 km |
| k:4 | 2 gün | ~70 km | ~60 km | ~50 km | ~25 km |

🔴 **Çölde bağlayıcı kısıt mesafe değil SUDUR.** Susuz geçilebilecek süre
~3 gündür; bir garnizon son kuyunun ötesinde beslenemez. Bu yüzden çöl
sütunu ötekilerden orantısız düşüktür — ve Sahra için cevap **~150 km**,
200 değil.

### 1.4 VE ÇÖLDE HÂKİMİYET ALAN DEĞİL ÇİZGİDİR

Emre'nin ikinci sorusu: *"500 km arayla iki yerleşim varsa arası boyanır
mı? Ya 1000 km? Ya 2000?"*

```
aralarında kervan yolu + kuyu VAR   → KORİDOR boyanır (şerit, daire değil)
hiçbir şey YOK                       → BOYANMAZ — orası gerçekten kimsenin değildi
```
⇒ Doğru ilkel şekil bir daire değil, **yol boyunca bir tampon şerit.**
Roma'nın Sahra'daki hâkimiyeti de böyleydi: vaha zinciri, alan değil.

⚠️ Ve çöl/bozkır içini **göçebeler** tutuyordu (Tuareg · Kazak · Moğol);
onların toprağı **sabit yerleşim peteğiyle temsil edilemez.** Karşılığı
`YAPILACAKLAR`daki **benekli nüfuz alanı** katmanıdır. O gelene kadar çöl
içi **boş kalmalı** — yanlış boyamaktan iyidir.

### 1.5 🟢 BEDAVA KAZANÇ: TAVAN, DOLGU NOKTASI HİLESİNİ KALDIRIR

172 sahipsizin bir kısmı (Sahra · Rub'ul Hâlî · 1744 öncesi Necid) **sırf
emilmeyi engellemek için** konmuş dolgu noktalarıdır — yani bir **hile**.
Yarıçap tavanı geldiğinde o iş **yapısal olarak** çözülür ve dolgu
noktaları emekli edilebilir.
⇒ Tavan yalnız doğruluk getirmiyor, **bir hileyi de kaldırıyor.**

### 1.6 Literatür — dördü doğrudan işimize yarıyor

**Güvenilir:**
- **Site catchment analysis** (Vita-Finzi & Higgs, 1970) — tarım için
  1 saat/5 km, avcılık için 2 saat/10 km yürüme yarıçapı.
- **Merkezî yer kuramı** (Christaller, 1933) — pazar menzili ile **idarî
  menzil** ayrımı; idarî menzil daha geniştir. `k:` kademelerinin kuramı.
- **Tobler'in yürüyüş fonksiyonu** (1993) — eğime göre hız; motorda
  zaten kullanılacak.
- **James C. Scott, *The Art of Not Being Governed*** (2009) — arazi
  sürtünmesi, "devlet alanı" ile "devlet-dışı alan". Devletler vadileri
  tutar, yaylaları tutamaz.
- **Donald Engels, *Alexander the Great and the Logistics of the
  Macedonian Army*** (1978) — kendi erzakını taşıyan ordunun üssünden
  uzaklaşma mesafesinin **fizikî** tavanı vardır: hayvanlar taşıdıkları
  yemi yer. Çöl tavanının asıl dayanağı.

**⚠️ HATIRLANDI, DOĞRULANMADI** (`§11`: *ölçmediğini "ölçmedim" diye yaz*):
- **Colin Renfrew, "Early State Module"** (1975) — erken devlet
  merkezlerinin ~20 km aralıkla, toprakların ~1.500 km² civarında
  kümelendiği. Bizim Batı Anadolu ölçümümüz (**17 km**) buna çok yakın
  ama sayı **ezberden** verildi.
- **Osmanlı menzil sistemi** — konaklar ~25-35 km. Kavram sağlam, kesin
  rakam TDV `menzil` maddesinden **doğrulanmalı.**
- **Mattingly, Roma-Sahra** — vaha zinciri boyunca hâkimiyet, alan değil.

⇒ Bu üçü bir araştırma oturumuna verilecek; özellikle **Renfrew ve menzil**,
çünkü ikisi de doğrudan tavanı kalibre ediyor.


### 1.3 Ölçüt — sınıf tarihsel büyüklük değil, İDARÎ-ASKERÎ AĞIRLIKTIR

Emre'nin verdiği üç sınav vakası, üçü de bu ölçütle çözülür:

```
Yeşilköy (Ayastefanos)   1878'de kayıtta geçer ama İstanbul'un banliyösü
                         ⇒ HER ZAMAN sınıf 4 · w=0 · bölge YOK
Çatalca                  normalde 4; ama Balkan Savaşı'nda cephe hattı
                         ⇒ o pencerede 3'e ÇIKAR, sonra 4'e döner
Söğüt                    1281'de 1, Bursa'dan sonra 3, Fetret'ten sonra 4
```

📌 Ölçüt **şehrin kendi büyüklüğü değil**, o tarihte çevresindeki toprağı
idarî-askerî olarak temsil edip etmediğidir. Bir metropolün banliyösü,
metropolden büyük olsa bile bölge almaz.

---

## 2. KARAR — taban yılı **1281**, 1288 değil

**Emre, 8 Ağustos 2026.** Atlasın zaman çizgisi 1281'de başlıyor; taban da o
gün olursa **haritanın açılış karesi ile yerleşim tabanı birebir aynı an**
olur ve arada 7 yıllık ifade edilmemiş bir aralık kalmaz.

⚠️ 1288 yine de ölçülür — **kontrol kesiti** olarak, taban olarak değil.

---

## 3. MOTOR — tek formül, iki kademe

```
sahip(hücre) = argmin over i of   maliyet( yerleşim_i → hücre )  ÷  w_i
```

| kademe | `maliyet(...)` | ne verir | maliyet |
|---|---|---|---|
| **A** | öklid mesafe | **ağırlıklı Voronoi** (Apollonius) | ucuz, bugünkü altyapıyla |
| **B** | sürtünmeli yürüme mesafesi | **maliyet-mesafe peteği** | pahalı, ızgara gerekir |

🔴 **Formül İKİSİNDE DE AYNI.** Kademe A bugün gönderilebilir; B geldiğinde
`maliyet()`in gövdesi değişir, **çağrı yeri değişmez.** Bu, göçün tek
adımda değil iki adımda yapılmasını sağlar ve **her adım tek başına
yayınlanabilir.**

### 3.1 Sürtünme — değerler tarihten değil FİZİKTEN gelir

Bu ayrım önemlidir çünkü **1'i 2'den bağımsız kılan şey budur:**

```
eğim            Tobler yürüme fonksiyonu — yamaç dikleştikçe hız düşer
arazi örtüsü    bozkır/ova ucuz · orman pahalı · bataklık çok pahalı · çöl çok pahalı
su              nehir GEÇİŞ maliyeti (geçitte ucuz, geçitsiz çok pahalı)
                deniz: kıyı boyu ucuz (kabotaj), açık deniz kapalı
dağ sırtı       geçit dışında neredeyse kapalı
```

⇒ Sürtünme değerleri **kalibrasyon istemez**, literatürden gelir. Ama
**doğrulama** ister: modelin ürettiği sınır, bilinen tarihî sınıra benziyor
mu? Doğrulama **yoğun ve iyi belgelenmiş bir bölgede** yapılır.

### 3.2 🔴 NİÇİN 1 İLE 2 EŞZAMANLI YÜRÜR

> Kongo havzasında **sıfır nokta** var. İki nokta arası 1.500 km ise,
> aralarındaki sürtünmeyi ne kadar iyi modellersen modelle **sınır yine
> yanlış yerden geçer.** Hiçbir sürtünme modeli olmayan noktayı icat edemez.

**Ölçüldü (8 Ağustos):** noktasız ve >60.000 km² olan 101 hücre,
**19,6 milyon km²**. Bunların bugün kimin adına boyandığı:

| sahip | km² | doğru mu |
|---|---|---|
| `banda-adalari` | **573.188** | 🔴 kendisi ~180 km² — Yeni Gine'yi emiyor, yüzölçümünün **3.200 katı** |
| `somali` | **628.526** | 🔴 beş tarihte de **aynı sayı** — Tanzanya. *Sabit sayı, sabit hatanın imzasıdır* |
| `ingiltere` 1900 | **3.150.758** | 🔴 Kongo havzası — orası Kongo Hür Devleti'ydi |
| `rusya` 1900 | 6.173.473 | 🟢 Sibirya — emilme var ama **sonuç doğru** |
| sahipsiz (1300) | **14.844.787** | harita **deliği** |

📌 **Ve ilk ölçüt yanlıştı:** önce ham *seyreklik* ölçüldü (232 hücre, 46
milyon km²) ve işe yaramadı — **çöl ve tundra meşru boştur.** Ölçüt
`§2`'nin kendi sorusuna çevrilince (*"noktasız hücreyi kim boyuyor"*) tablo
tamamen değişti.

---

## 4. KİMLİK — koordinat anahtar DEĞİLDİR

Emre sordu: *"acaba şehir adları yerine koordinat sistemi mi kullansak?"*
**Teşhis doğru** — Byzantion = Konstantiniyye = İstanbul; şehir bir **yer**dir,
bir isim değildir. **Ama koordinat kötü bir anahtardır**, ve kanıtı aynı gün
gerçekleşti:

```
8 Ağustos 2026: dört noktanın koordinatı DEĞİŞTİ
  Lampung enlem işareti tersti (+5,45 → -5,45), 215 km denizdeydi
  Larantuka · Rembang · Songkhla kıl payı maske dışındaydı
```
⇒ Koordinat anahtar olsaydı bu dört düzeltme, o noktalara yapılmış **her
atfı öksüz bırakırdı.**

**Doğrusu:** değişmez bir kimlik + isim tarihçesi **veri** olarak.
```js
{ id:"y0421", ad:"İstanbul",
  ad_tarihce:[{ t:"-0660", ad:"Byzantion" },
              { t:"0330-05-11", ad:"Nova Roma / Konstantinopolis" },
              { t:"1453-05-29", ad:"Konstantiniyye" },
              { t:"1930-03-28", ad:"İstanbul" }] }
```
Koordinat böylece bir **özellik** olur, kimlik değil — ve **düzeltilebilir.**

---

## 5. YERLEŞİM KRONOLOJİSİ — büyük kısmı ZATEN VAR

Emre: *"kullanıcı Belgrad hangi tarihte kimdeymiş görebilmeli."*

🟢 **Bu veri mevcut.** Her yerleşimin `d:` / `v:` / `s:` / `isg:` dönemleri
o kronolojinin ta kendisidir — **2261 yerleşimin 2261'inde var.** Eksik olan
iki şey ve ikisi de küçük:

```
① ARAYÜZ    dizin penceresine "yerleşimler" sekmesi; bir yerleşime tıklayınca
            dönem listesi + sınıf değişimleri + isim tarihçesi
② ad_tarihce  §4'teki alan
```
⇒ **3'ün kronoloji ayağı bir veri işi değil, bir ARAYÜZ işidir** — ucuz, ve
nokta partileriyle **paralel** yürür. Bunu bilmeden 3'ü büyük sanıp sona
bırakmak yanlış olurdu.

---

## 6. `Değişmez 3` — 3. iş yeni kapsam değil, ÖLÇÜLMÜŞ BİR HASTALIĞIN İLACI

`BOYUTLAR.md`de yazılı, ölçülmüş: **359 yerleşim-tarih çiftinde yerleşim ile
bağlı olduğu merkez farklı devletlerin elinde.** Sebep tam Emre'nin
anlattığı şey — `m:` alanının **zaman boyutu yok.**

Ve teşhis de yazılı: `m:` bir **idarî merkez** tutuyor (siyasî bir şey) ama
**coğrafî** gruplama için kullanılıyor. Doğrusu:

```
m:      COĞRAFÎ alan olur      (Bitinya · Trakya · Doğu Anadolu) — zamansız
sinif:  SİYASÎ bağ olur        ZAMAN BOYUTLU (§1.2)
```

⇒ 3. iş, kapsam genişlemesi değil **`Değişmez 3`ün kapatılmasıdır.** Bugün
görsel hataya dönüşmüyor çünkü bölge katmanı yalnız Osmanlı dönemlerinde
çiziliyor — ama **dünya kapsamında çöker**, ve tam oraya gidiyoruz.

---

## 7. ÖLÇEK — tahmin değil, 8 Ağustos ölçümünden

```
boş hücreler                          19,6 milyon km²
GD Asya'da kabul edilen yoğunluk       8,76 nokta / 100.000 km²
                                      ──────────────────────────
yalnız BU boşluklar için gereken       ~1.700 nokta
bir oturum-günü (GD Asya, ölçüldü)        128 nokta
                                      ──────────────────────────
                                        ~13 oturum-günü
```

⚠️ Ve bu **yalnız mevcut pencerenin içi.** Amerika, Pasifik ve Sahra altının
güneyi pencerenin **dışında** — bu 13'e dâhil değil.

🟢 İyi haber: artık **nereye** gidileceği tahmin edilmiyor. `§3.2`'deki
emilme haritası hangi hücrenin hangi yanlış sahibi ürettiğini söylüyor ⇒
**hiçbir oturum-günü haritayı değiştirmeyen bir bölgeye harcanmayacak.**

---

## 8. Kabul ölçütü — *"%75-80 bile mükemmel"* ÖLÇÜLEBİLİR hâle getirilir

Emre bu işin mükemmel yapılamayacağını baştan söyledi ve haklı. Ama *"%80"*
paydası olmadan bir denetim ölçütü değildir. Payda şu olur:

```
① 1281 tabanı        sınıf 1-3 yerleşimlerin kaçında `sinif:` yazılı
② sınıf zamanlaması  sınıfı DEĞİŞMİŞ olması gereken kaç yerleşimde değişiyor
③ emilme             §3.2 tablosundaki yanlış sahip km²'si ne kadar düştü
```
⇒ Üçü de sayıdır, üçü de her koşuda ölçülür, ve **%80 bir his değil bir
eşik** olur.

---

## 9. Sıra

```
ŞİMDİ    ② nokta partileri — Yeni Gine · Doğu Afrika · Kongo (emilme haritasından)
ŞİMDİ    ① kademe A: ağırlıklı Voronoi (formül yerine oturur, davranış DEĞİŞMEZ)
ŞİMDİ    ③ arayüz: yerleşim kronolojisi sekmesi (veri zaten var)
SONRA    ① kademe B: sürtünme ızgarası — ÖNCE yoğun bir bölgede DOĞRULANIR
SONRA    ③ sinif: alanının doldurulması — Anadolu'dan başlayarak
```

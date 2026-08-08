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

### 1.1 🟢 Ve kapı, ağırlığın ÖZEL HÂLİDİR — ikisini birden almıyoruz

Karar alınırken *"ucuz olanı kaybediyor muyuz"* diye soruldu. **Hayır:**

```
w = 0  ⇒  maliyet ÷ 0 = ∞  ⇒  o yerleşim HİÇBİR hücreyi kazanamaz
```

Yani **4. sınıf = ağırlığı sıfır olan yerleşim.** Kapı, ağırlık sisteminin
içinde zaten var. Ayrı bir mekanizma yazılmayacak, ayrı bir denetim
gerekmeyecek. ⇒ *"Önce kapı sonra ağırlık"* üçüncü seçeneği **gereksiz.**

### 1.2 Şema

```js
{ ad:"Söğüt", lat:…, lon:…,
  sinif:[{ f:"1281-01-01", t:"1326-04-06", s:1 },   // beylik merkezi
         { f:"1326-04-06", t:"1402-07-28", s:3 },   // Bursa merkez oldu
         { f:"1402-07-28", t:"1923-10-29", s:4 }] } // kasaba
```

| sınıf | ne | ağırlık `w` |
|---|---|---|
| **1** | başkent, imparatorluk merkezi | **1,00** |
| **2** | büyük şehir, eyalet merkezi | **0,70** |
| **3** | il/sancak merkezi | **0,45** |
| **4** | kayıtlarda geçer ama bölge atfedilmez | **0,00** |

⚠️ **`sinif:` alanı YOKSA varsayılan 3'tür.** Bu kasıtlı: bugünkü 2261
noktanın hepsi 3 sayılır, **ağırlıklar eşit olur**, ve eşit ağırlıklı
Apollonius diyagramı **düz Voronoi'nin ta kendisidir.**
⇒ **Göç güvenlidir: kimse bir sınıf yazana kadar harita ZERRE değişmez.**

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

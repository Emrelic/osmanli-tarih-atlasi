# KORİDOR ŞEMASI — taslak · `data/koridor.js`

**13 Ağustos 2026 · KORİDOR ŞEMA oturumu · İŞ 2 teslimi**

Bu dosya **şemanın gerekçesidir.** Veri `data/koridor.js`te, üreteç
scratchpad'te. Sayılar aşağıda ölçülmüştür, tahmin değildir.

```
DÜĞÜM  65   (boyayan 39 · boyamayan 26)
KENAR  64   (ölçülmüş saat 4 · türetilmiş 21 · ölçülemedi 39)
kırık uç 0 · f/t dolu 64/64 · kaynak boş 0
```

---

## ① DÜĞÜM ŞEMASI

```js
{ id, ad, y, boyar, tip, lat, lon, kol[], kaynak }
```

| alan | ne | niçin |
|---|---|---|
| `id` | sadeleştirilmiş ad | **ad değişir, kimlik değişmez** (şartname §İŞ 2) |
| `ad` | Türkçe tam ad | insan içindir |
| `y` | `yerlesimler*.js`teki ad ya da **`null`** | ağ ile yerleşim katmanı arasındaki TEK bağ |
| **`boyar`** | `true` / `false` | 🔴 **BOĞUM DÜĞÜMÜNÜN TANIMI BU** |
| `tip` | `yerlesim` · `menzil-eslesmedi` | genişletilecek |
| `lat`/`lon` | yerleşimden gelir, yoksa `null` | **elle kopyalanmaz** |
| `kol[]` | `"anadolu/sag#4"` gibi | bir düğüm birden çok kolda olabilir |
| `kaynak` | zorunlu | `§4` |

### 🔴 `boyar` — niçin ayrı bir alan, niçin `tip`in içine gömülmedi
Şartname boğum düğümünü şöyle tarif ediyor: *"koridoru DENETLER, ALAN
BOYAMAZ."* Bu bir **davranış**, bir isim değil. Motorun soracağı soru
tek: *bu düğüm Voronoi'ye girsin mi?*

```js
if (!dugum.boyar) { /* petek üretimine GİRMEZ */ }
```

📌 `CLAUDE.md §11`in **on birinci kusur sınıfı**: *"bu bilgiyi bir `if`
ile sorabiliyor muyum? Sorulamıyorsa kayıt vardır, veri yoktur."*
`tip:"kavsak"` yazsaydım motor **string karşılaştırması** yapardı ve her
yeni tip eklendiğinde o karşılaştırma bayatlardı. `boyar` bayatlamaz.

⚠️ **Bugün `boyar:false` olan 26 düğümün hepsi "eşleşmedi" cinsinden** —
yani henüz gerçek bir *kavşak/derbend/köprü* düğümü yok. Alan **ileriyi**
karşılamak için var; bugün ölçtüğü şey *"bu durağın yerleşim kaydı yok"*.
Bunu böyle yazıyorum ki kimse `boyar:false`u *"boğum düğümü ekledik"*
diye okumasın.

---

## ② VIABUNDUS TİPOLOJİSİ — neyi aldık, neyi almadık

| Viabundus | bizde | karar |
|---|---|---|
| settlement · town | `tur:"sehir"·"kasaba"·"koy"` | 🟢 **zaten var**, yeniden yazma |
| harbour | `tur:"liman"` (523) | 🟢 **zaten var** |
| — | `tur:"kale"` (434) | 🟡 **BİZE ÖZGÜ** — Viabundus'ta yok, korunur |
| toll | derbend | 🔴 yok — eklenecek |
| bridge · ferry | köprü · geçit | 🔴 yok — eklenecek |
| staple · fair · lock | — | ⚪ **ALINMAYACAK** — ticaret hukuku ekseni, bu atlasın konusu değil (`§1.6`: 8. boyut kapalı) |
| *öznitelik-siz = kavşak* | `boyar:false` | 🟢 **alındı, ama farklı yoldan** |

🔴 **Ve bir uyarı:** `tur:` alanının tipolojisi **kirli** — `bolge` (122
kayıt) bir **alan**, ötekiler **nokta**. Boğum tiplerini `tur:`e eklemek
kirliliği büyütür. **Önerim:** boğum tipleri `koridor.js`te kalsın,
`yerlesimler*.js`e sızmasın. (Karar koordinatörün.)

---

## ③ KENAR ŞEMASI — ve ağırlık biriminin GEREKÇESİ

```js
{ u1, u2, kanat, kol, kalinlik, yon,
  km, saat, saat_cinsi, saat_kaynak,
  f, t, donem_cinsi, kesinlik, kaynak }
```

### 🔴 AĞIRLIK BİRİMİ: **SAAT** — ve `km` yanında DURUR, yerine geçmez

Şartname *"birimi SEN SEÇ ve GEREKÇELENDİR"* dedi. Seçim ve gerekçe:

```
km      koordinattan HER ZAMAN yeniden hesaplanabilir  ⇒ saklamak ucuz ama
        bilgi TAŞIMAZ
konak   bir günlük menzil — çok kaba, 6 saat ile 24 saat aynı kovaya düşer
saat    🟢 KAYNAĞIN KENDİ BİRİMİ, ve ARIZAYI ZATEN İÇİNDE TAŞIR
```
Aynı kilometre dağda daha çok saat eder. Viabundus **metre** tutup süreyi
hız tablosundan **türetiyor** ve dokümantasyonunda açıkça yazıyor:
> *"Slope and elevation of the road … has not been taken into account."*

Bizim kaynağımız süreyi **ölçülmüş** veriyor. ⇒ Türetmek, elimizdeki daha
iyi bilgiyi atıp yerine model koymak olur.

### 🔴 `saat_cinsi` — ölçülmüş ile türetilmiş AYNI ALANDA DURAMAZ
```
"olculdu"     arşiv belgesinden geldi        4 kenar
"turetildi"   km'den hesaplandı             21 kenar
"olculemedi"  bir ucun koordinatı yok       39 kenar
```
📌 `§7.1 ④`in veri tarafı: *"ölçmediğini `ölçmedim` diye yaz."* Tek bir
`saat` alanı olsaydı, 21 türetilmiş değer 4 ölçülmüş değerden **ayırt
edilemezdi** — ve bir sonraki oturum hepsini ölçüm sanardı.
⚠️ `"olculemedi"` **asla `0` ya da tahmin yazılmaz.** `null` durur.

### 🔴🔴 KALİBRASYON — VE İKİ ÇAPA BİRBİRİNİ ÇÜRÜTTÜ
Türetim hızını **varsaymadım**, ölçülmüş çiftten kalibre ettim:
```
Akşehir → İstanbul   361 km (kuş uçuşu) / 85 saat  =  4,25 km/sa   ← kullanıldı
Akşehir → Beyşehir    80 km (kuş uçuşu) / 12 saat  =  6,70 km/sa
kitap değeri (Ohler 1998 · ORBIS · Viabundus)      =  6,00 km/sa
```
🔴 **İki çapa %58 ayrışıyor.** Sebebi muhtemelen **yolun kıvrımı**:
uzun güzergâhta kıvrım birikir, kuş uçuşu km gerçek yolu giderek daha çok
küçümser. Kısa kenarda kıvrım az, oran kitap değerine yaklaşıyor.

**ÖLÇTÜĞÜM:** iki oran, 4,25 ve 6,70.
**ÇIKARDIĞIM:** *tek bir küresel hız sabiti yanlıştır* — ve bu, türetilmiş
21 kenarın **zayıf** olduğunun kanıtı.
⚠️ İki çapa hüküm için **az**. Üçüncüsünü aramadım — **ölçmedim.**
⇒ Bu yüzden türetilmiş değerler `saat_cinsi` ile damgalı: **şema, kendi
zayıflığını söyleyebiliyor.**

### 🔴 ZAMAN AYAĞI — Viabundus'un KUSURUNU KOPYALAMIYORUZ
Viabundus dokümantasyonu (s. ~24):
> *"Information about seasonality or temporal use of a road may
> occasionally be found in the **Comment field**."*

`"from year"` araması: **0 geçiş.** Yani zaman **serbest metne gömülü**,
makine soramıyor. Bizde:
```
f · t          zorunlu, yapılandırılmış     64/64 dolu
donem_cinsi    "kurum"  ⇒ bu pencere MENZİL TEŞKİLATININ (1539-1839),
                          YOLUN DEĞİL. Yol daha eski (Via Egnatia Roma).
```
📌 `donem_cinsi` olmasaydı `f:"1539"` *"yol 1539'da açıldı"* diye
okunurdu — **yanlış bir kesinlik.** Alan, tarihin **neyin** tarihi
olduğunu söylüyor.

### ÖTEKİ ALANLAR
```
kalinlik   "ana" / "tali"   — Viabundus `Zoomlevel` 1-4 ama rota hesabında
                              YOK SAYIYOR. Bizde de görüntüleme içindir;
                              ağırlığa KARIŞMAZ. (Aynı kararı verdik ama
                              GEREKÇESİNİ yazıyoruz.)
yon        "cift" / "tek"   — bugün hepsi "cift". Alan VAR çünkü surre
                              alayı gidiş 54, dönüş 59 konak; ve trimodal
                              akademik küme kenarları YÖNLÜ tutuyor.
                              ⚠️ Asimetriyi ÖLÇMEDİM, alanı AÇTIM.
kesinlik   1-3              — 1: iki uç da koordinatlı · 3: bir uç eşleşmedi
kaynak     zorunlu          — boş 0/64
```

---

## ④ NE YAPILMADI — açıkça

```
· 26 boyamayan düğümün gerçek koordinatı YOK (nokta araştırması gerek,
  yerleşim dosyaları benim değil)
· gerçek BOĞUM tipi (derbend · köprü · geçit · kavşak) hiç yazılmadı —
  yalnız alan açıldı
· üçüncü kalibrasyon çapası aranmadı
· `yon` asimetrisi ölçülmedi
· motorun bu dosyayı OKUMASI ayrı ve sonraki iş (MOTOR MALİYET'in alanı)
· `index.html` ve `girdi.py` bağlaması KOORDİNATÖRÜN — dosya HAZIR
```

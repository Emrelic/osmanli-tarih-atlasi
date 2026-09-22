# HARITA-0076 — "bozuk harita" kümesinin teşhisi

**Oturum:** `HARITA-0076` (Opus 5, efor high) · **Koordinatör:** `YILDIRIM BAYEZIT`
**Tarih:** 23 Eylül 2026 · **Paket:** `parti-emrelic-0076`
**Kümem:** 19 madde (`SEVK-0076.md` sayımı; şartnamedeki 20'li listeden
`H-0149` `SINIR-CIZGI-0076`'ya geçti — M-5019)

```
H-0022 H-0023 H-0038 H-0064 H-0065 H-0068 H-0069 H-0071 H-0072 H-0073
H-0075 H-0093 H-0095 H-0096 H-0121 H-0136 H-0139 H-0147 H-0148
```

---

## 0. ÖNGÖRÜ SINAVI — sonuç: **ÖNGÖRÜ DOĞRU**

Şartnamede ölçümden önce yazılan öngörü:

> Bu maddelerin çoğu **AYNI TEK KUSURUN** farklı tarihlerdeki yüzüdür.
> **Sınav:** kök sebep sayısı ≤ 5 ise öngörü DOĞRU, > 10 ise ÇÜRÜK.

**Ölçüm: 4 kök sebep.** 19 maddenin tamamı dördünden birine düşüyor, artan yok.

| kova | kök sebep | madde | sayı |
|---|---|---|---|
| **A** | C çizim katmanı `kapsama.kutu`yu **opak dikdörtgen** olarak boyuyor | H-0096 H-0139 H-0147 H-0148 | 4 |
| **B** | **gövde çakışması** — aynı alanı iki devlet gövdesi birden boyuyor | H-0069 H-0072 H-0073 | 3 |
| **C** | **petek kenarı sivri köşe / ince şerit** (komşu nokta seyrekliği) | H-0022 H-0071 H-0075 H-0093 | 4 |
| **D** | **yerleşim sahiplik penceresi + noktasızlık** (`yerlesimler.js`) | H-0023 H-0038 H-0064 H-0065 H-0068 H-0095 H-0121 H-0136 | 8 |

Öngörünün tek eksiği vardı: "aynı TEK kusur" değil, **dördü**. Ama en görünür
şikâyet ailesi (`"karesel bozukluk"`, `"bozuk harita"`, `"hâlâ devam ediyor"`)
gerçekten **tek** kusura, A'ya çıkıyor ve **tek satırla** kapanıyor.

Bu rapor hüküm vermeden önce ÖLÇTÜ; her satırın arkasında tekrar koşan bir
alet var. `bulunamadı`/`ölçülemedi` ayrıca işaretlendi.

**Aletler** (hepsi tekrar koşar, hiçbiri `arac/` ya da `data/`ya dokunmaz):
```
denetim/HARITA-0076-olc.py            gövde havuzlarında dikdörtgen/dejenere halka taraması
denetim/HARITA-0076-sivri.py          Polsby-Popper tıkızlık taraması (SONUÇ: bu soruyu sormuyor — §3)
denetim/HARITA-0076-sahip.py          tek pencere · "orada nokta var mı, o gün kimin?"
denetim/HARITA-0076-sahip-toplu.py    sekiz pencereyi TEK yüklemede ölçer
```
Ayrıca canlı motorda ölçüm: `py -m http.server 8777` + tarayıcı; ölçüm
fonksiyonları raporun §2'sinde birebir duruyor.

---

## 1. KOVA A — C çizim katmanı opak dikdörtgen boyuyor  ⭐ en yüksek getirili

### Ne ölçtüm

`js/app.js:1873` `hukuki-sinir-dolgu` katmanı `fill-opacity: 1` ile
kuruluyor ve `_cKapsamaPoligonu` (`js/app.js:7346`) `kapsama.kutu`yu
**eksen hizalı bir dikdörtgene** çeviriyor. Dikdörtgen antlaşma hattıyla
ikiye kesiliyor, iki parça iki tarafın rengiyle **tam opak** basılıyor.
Sonuç ekranda: haritanın ortasında, kenarları coğrafyayla hiç ilgisi
olmayan, köşegeninden iki renge bölünmüş bir kutu.

Canlı motorda birebir üretildi (1913-05-30, H-0139'un tarihi ve maddesi):

```
kayit: midye-enez-1913  renk #2d6c0c (Bulgaristan)  n=5  bbox 25.500,40.465..29.500,42.500
kayit: midye-enez-1913  renk #8e0b22 (Osmanlı)      n=5  bbox 25.500,40.000..29.500,42.268
```
`kapsama.kutu` = `{lat_min:40, lat_max:42.5, lon_min:25.5, lon_max:29.5}` —
iki parçanın birleşimi **kutunun kendisi**. Ekran görüntüsü H-0139 ile
birebir aynı çıktı (aynı gün, aynı madde, aynı kutu, aynı köşegen).

`data/hukuki_sinirlar.js` 9 kayıt taşıyor; **3'ü** opak dikdörtgen boyuyor:

| kayıt | pencere | kutu (lon · lat) | hangi madde |
|---|---|---|---|
| `midye-enez-1913` | 1913-05-30 → 1913-06-29 | 25.5–29.5 · 40.0–42.5 | **H-0139** |
| `ii-erzurum-sattularap-1847` | 1847-05-31 → 1923-10-29 | 46.5–49.0 · 28.5–31.5 | **H-0096 · H-0147** |
| `misir-sudan-22-paralel-1899` | 1899-01-19 → 1914-12-18 | 24.0–37.0 · 20.0–24.0 | **H-0148** |

Ekran görüntülerinin kendi damgasındaki pencereler bu kutuların içine
birebir oturuyor (H-0147: `46.64–50.68E · 27.03–31.71N`, H-0096 aynısı;
H-0148: `21.65–38.32E · 17.77–24.83N`).

### Emre'nin "hâlâ devam ediyor"u niçin doğru

H-0096: *"BU BOZUK HARİTA GÖSTERİMİ HATASI HÂLÂ BU SENE OLMUŞ DEVAM EDİYOR,
UZUN SÜRE HARİTADA BOZUK OLARAK GÖSTERİLİYOR."*

`ii-erzurum-sattularap-1847` penceresi **1847-05-31 → 1923-10-29**:
**27 910 gün ≈ 76 yıl**. Yani H-0096 (1900) ile H-0147 (1913) **aynı
kutunun** on üç yıl arayla çekilmiş iki fotoğrafı. Üç kaydın toplamı
**33 753 gün** — atlasın 1281–1923 aralığının **%14,4'ü**.

### Niçin veri tarafında değil

`denetim/HARITA-0076-olc.py` üretilmiş gövde havuzlarının tamamını taradı:

```
DEVLET_PARCALAR  71557 halka · çok noktalı dikdörtgen: yok
PARCALAR          6082 halka · "dikdörtgen" işaretli 58 halka, en büyüğünün köşegeni 0.19°
SERBEST            620 halka · 15 halka, en büyüğü 0.19°
bowtie (kendini kesen seyrek halka): 0
```
Ekrandaki kutunun köşegeni **4.7°** (midye-enez). Veride böyle bir gövde
**yok** ⇒ kusur üretimde değil, **çizimde**. (Bu, "ölçüm doğru çıkarım
yanlış" tuzağına düşmemek için kasten iki yönden soruldu.)

### Ne istiyorum — üç seçenek, hüküm koordinatörün

**① BU GECE · 3 satır · sıfır risk — önerim bu.**
`data/hukuki_sinirlar.js`'te üç kaydın `kapsama`sına `"dolgu": false`
eklenir. Kod bunu zaten destekliyor (`js/app.js:7400` — *"`kapsama.dolgu:false`
→ YALNIZ HAT, dolgu yok"*) ve emsali var: `karlofca-bosna-sava-1699` kaydı
bugün bu bayrakla duruyor. Dikdörtgen kaybolur, kesikli antlaşma hattı
kalır, dört madde birden kapanır.
**Bedeli açıkça:** hattın hangi tarafının kimde olduğu bilgisi haritadan
düşer; altta petek rengi (yer yer yanlış) görünür. Yani **bozuk görünüm**
gider, **eksik bilgi** kalır.

**② ORTA · kutu yerine poligon.**
`kapsama.tur:"poligon"` + `nokta_dizisi` — kod dalı hazır
(`js/app.js:7353`). Kutunun kenarları kıyıya / mevcut devlet sınırına
oturtulursa yapay düz kenar hiç doğmaz. Bedeli: üç kayıt için kaynak
dayanaklı poligon çizmek.

**③ ASIL ÇÖZÜM · hattı motora işlemek.**
`js/app.js:1864`'ün kendi itirafı: *"Motor (`uret_petek.py`) tarafı bu
sınırı petek geometrisine henüz işlemiyor (§8.3, tasarlandı/sınanmadı);
bu yüzden ... RENK ÜSTÜNE BOYAMAYLA (client-side) sağlanıyor."*
C katmanı zaten bir YAMA; kalıcı çözüm motorda. **Koşu ister → Oturum 0.**

⚠️ **Aksaklık:** ① ve ② `data/hukuki_sinirlar.js`e, ötesi `js/app.js`e
dokunur. `js/app.js` `SEVK-0076.md`de `SINIR-CIZGI-0076`'nın dosya
ailesidir. M-5023'ün yeni kuralı ("numara senindir, dosya ailesi değil")
gereği yamayı ben hazırladım, ama **uygulama sırası** koordinatörde:
aynı dosyaya iki yama gelirse çakışır.

---

## 2. KOVA B — gövde çakışması: aynı alanı iki gövde boyuyor

### Ne ölçtüm

Canlı motorda, `osmanli` · `vassal` · `himaye` · `devlet` kaynaklarının
gövdeleri ızgara örneklemesiyle üst üste bindirildi (nokta-poligon içi
sınaması, delik halkaları düşülerek). Ölçüt: bir hücreyi **iki ya da
daha çok gövde** kaplıyorsa çakışma.

| pencere | gün | boyalı hücre | çakışan | oran | başı çeken çift |
|---|---|---|---|---|---|
| Hadramut 41–60E · 8–24N (0.1°) | 1884-01-01 | 10 768 | **314** | **%2.92** | `kesiri-sultanligi \|\| kuayti-sultanligi` — 301 (çakışmanın %96'sı) |
| Bulgaristan 21.4–25.5E · 41.9–44.6N (0.02°) | 1884-01-01 | 27 768 | **1 382** | **%4.98** | `bulgaristan \|\| vassal` 658 · `sirbistan \|\| vassal` 434 |
| Trakya 25.5–29.5E · 40–42.5N (0.02°) | 1913-03-06 | 15 931 | **364** | **%2.28** | `bulgaristan \|\| osmanli` 364 (tamamı) |
| Dünya −15..60E · 10..60N (0.25°) | 1884-01-01 | 36 072 | **515** | **%1.43** | `mossi-vagadugu \|\| yatenga` 74 · `kenedugu \|\| mossi-vagadugu` 70 · `adar \|\| sokoto` 69 |
| Dünya −15..60E · 10..60N (0.25°) | 1878-01-04 | 36 070 | **475** | **%1.32** | aynı Batı Afrika çiftleri |

### Çıkarım

- **H-0072 · H-0073** (*"çok silik, neredeyse deniz renginde"* · *"deniz
  tarafından yutulmuş gibi"*): Hadramut'ta `kesiri-sultanligi` ile
  `kuayti-sultanligi` gövdeleri **birbirinin üstünde** duruyor. İki yarı
  saydam dolgu üst üste binince ne alttaki ne üstteki kendi rengini
  veriyor; kıyı çizgisi de iki gövdenin ortak kenarı altında kayboluyor.
  Emre'nin gördüğü "silik/denize karışmış" görünüm **bu**.
- **H-0069** (*"üst üste binmiş renk yapıları... ne üst üste binmeli ne de
  arada boşluk kalmalı"*): Bulgaristan'da baskın çift
  `devlet:bulgaristan || vassal` (658 hücre) ve `devlet:sirbistan || vassal`
  (434). Yani **aynı polity iki kere çiziliyor** — bir kez yabancı devlet
  gövdesi (`s:`), bir kez Osmanlı tâbisi (`v:`). Ekrandaki kahverengi
  kamalar bu ikinci boyamanın kendisi.
- Kusur **bu maddelere özgü değil**: dünya ölçeğinde boyalı alanın
  %1,3–1,4'ü iki kere boyanıyor ve en büyük kaynağı **Batı Afrika**
  künyeleri (mossi/yatenga, kenedugu, adar/sokoto, liptako/zerma,
  futa-callon/tekrur). Emre'nin fotoğrafladığı üç yer, sınıfın yalnız
  görünen ucu.

CLAUDE.md §3'ün uyarısı burada **birebir** geçerli ve teyit edildi:
bu kusur `kd:` ile DÜŞMEZ ve koşu istemez — gövdeler `donemler.js` +
`devletler_harita.js` içindedir.

### Ne istiyorum
Hüküm `sirada`. Düzeltme kalemi bende değil (üretilmiş gövdeler Oturum 0).
Önerim: çakışma ölçümü **`denetle.py`ye yedinci değişmez olarak** girsin —
bugün hiçbir denetim bu soruyu sormuyor, bu yüzden %1,4 sessizce duruyor.
Ölçüm fonksiyonu hazır ve tekrar koşar (§5, `__ol`).

---

## 3. KOVA C — petek kenarında sivri köşe ve ince şerit

### Önce çürüyen ölçüm (kayda geçiyor)

İlk aletim (`denetim/HARITA-0076-sivri.py`) halka düzeyinde
Polsby-Popper tıkızlığı ölçtü: `PARCALAR`da 428 (%7.04),
`DEVLET_PARCALAR`da 2664 (%3.72) "ince" halka buldu. **Bu sayı bu soruyu
ölçmüyor** — bildirilen pencerelerde çıkan halkaların hepsi imparatorluğun
bütün gövdesiydi (bbox'ı her yerle kesişiyor). Sivrilikler **ayrı halka
değil, gövdenin çıkıntısı**. Alet dosyada duruyor ama hükmü bu sayı
taşımıyor; yerine köşe açısı ölçüldü.

### Ne ölçtüm

Çizilen gövdenin ardışık köşe üçlüsünde iç açı; iki kenar da ≥ 0.05°
(≈5 km) ve açı < 45° ise **sivri köşe**.

| madde | gün · pencere | bulunan | en sivri |
|---|---|---|---|
| **H-0075** Doğubayazıt | 1884-01-01 · 42.83–44.68E 39.36–40.03N | 1 | `osmanli` **25.5°**, kenar 0.068° @ 43.100E 39.800N |
| **H-0022** Asîr | 1871-01-01 · 40.46–45.05E 18.27–21.14N | 1 | `osmanli` **3.7°**, kenar 0.161° @ 44.731E 20.733N |
| **H-0071** Doğu Sudan | 1884-01-01 · 41.68–46.90E 18.72–21.27N | 1 | `vassal` **3.2°**, kenar 0.179° @ 45.257E 20.926N |
| **H-0093** Skiathos | 1897-05-17 · 23.0–23.6E 39.0–39.65N | 2 | `osmanli` **27.8°** @ 23.299E 39.259N · `yunanistan` **30.5°** @ 23.073E 39.042N |

3.2°–3.7°'lik bir köşe, kenarı ~18 km olan bir **iğne**dir: H-0022 ve
H-0071'in ekran görüntülerindeki uzun ince çıkıntılar bunlar. H-0093'ün
"ince kırmızı şerit"i 0.031–0.043°'lik (3–5 km) kenarlarla aynı sınıfın
küçük ölçekli hâli.

H-0075 canlı motorda **birebir yeniden üretildi** (1884-01-01, aynı
pencere): gövdenin kuzey kenarı testere dişi. Sivriliklerin kaynağı
`uret_petek.py`nin "sürtünmeli yürüyüş" hesabı değil — **komşu nokta
seyrekliği**: petek kenarı iki uzak nokta arasında uzun düz parçalarla
gidiyor ve keskin açılarla birleşiyor (CLAUDE.md §2).

> **H-0075'in sorusuna doğrudan cevap:** *"motor hesaplaması bu şekilde mi,
> sürtünmeli yürüyüş hesaplaması mı bu haritayı böyle çıkarmış?"* —
> İkisi de değil. Sivrilik **Voronoi kenarının kendisi**; o bölgede
> yeni nokta konmadıkça hesap ne yapılırsa yapılsın bu köşe kalır.

### Ne istiyorum
Hüküm `kosu-bekliyor`: düzeltme = dört pencereye kaynaklı yerleşim
noktası eklemek, sonra koşu. Noktaların koordinat + kaynağı bende
**yok** (`bulunamadı`) — bu, kaynak araştırması gerektiren ayrı bir
kalem. `yerlesimler.js` Oturum 0'ın.

---

## 4. KOVA D — yerleşim sahiplik penceresi ve noktasızlık

`denetim/HARITA-0076-sahip-toplu.py` sekiz pencerenin hepsini tek
yüklemede ölçtü. **Şema sınavı:** aletin ilk sürümü Kudüs'ü 1882'de
`SAHİPSİZ` gösterdi — `y['d']`(Osmanlı) ile `y['s'][].d`(yabancı kimlik)
ayrımını atlamıştı. Sınav yakaladı, düzeltildi, Kudüs 1882 → `OSMANLI`.
**Aşağıdaki sayılar düzeltilmiş aletindir.**

| madde | gün · pencere | nokta | ÖLÇÜM — suçlu tam olarak bu |
|---|---|---|---|
| **H-0023** | 1871-04-20 · Katar yarımadası | **5** | `Doha (Katar)` ve `Katar Yarımadası (iç, dolgu)` **SAHİPSİZ**; `Katîf` ve `Ukayr` OSMANLI. Yarımada tam ortadan ikiye bölünmesinin sebebi bu — batı yarısı Ukayr'ın peteği (kırmızı), doğu yarısı Doha'nın peteği (sahipsiz). Emre'nin *"Katar kenti dâhil değil"*i **birebir doğru**. Maddenin kendisi Midhat Paşa'nın 1871 Necid seferi ⇒ Doha'nın `d:`/`s:` penceresi eksik. |
| **H-0038** | 1878-01-04 · Tuna–Balkan | 58 | `Sofya` = `tâbi: bulgaristan-prensligi` — oysa prenslik 1878 Temmuz'unda kuruldu; 4 Ocak'ta şehir **Rus işgalinde**. `Plevne · Niğbolu · Kili · Bender · Orhei` = `rusya`. `Eflak`(11) ve `Boğdan`(4+3) hâlâ **tâbi** ⇒ haritada Osmanlı rengi. Emre'nin dört şıkkının dördü de ölçümle tutuyor; doğru gösterim **işgal taraması** — ve ölçüldü: o gün o pencerede **`isg:` kaydı olan nokta 0 / 58**. Aynı boşluk Kars cephesinde de var (0 / 34, §5.5) ⇒ **H-0036 ile tek kök sebep**: 93 Harbi boyunca işgal katmanı hiç kullanılmamış, sahiplik alanı işgal yerine kullanılıyor. |
| **H-0064** | 1882-09-13 · Mısır | 54 | 51 nokta tâbi (Mısır), **`Cağbûb` tek başına OSMANLI doğrudan** → Emre'nin gördüğü "ufak tefek Osmanlı renginde yer" onun peteği. `Gilf el-Kebîr` SAHİPSİZ. Ayrıca **4 kayıtta tâbilik kimliği `kid` yok, serbest metin**: `Süveyş · Sefâce · Tûr (Sînâ)` → `"Kavalalı hanedanı"`, `Sina güneyi` → `"Mısır Hidivliği"`; `Sîva (Siwa)` → `kid` **bulunamadı**. Kimliksiz tâbi boyanamaz. |
| **H-0065** | 1883-01-19 · Darfur | **4** | `Darfur` noktası kendi kimliğinde (`darfur`), çevresindeki `Kebkâbiye · Cebel Merre · Zâlincî` `tâbi: misir-kavalali`. Emre'nin sorduğu **"merkezdeki mavi enklav" = Darfur noktasının kendi peteği**. Kusur değil, **eksik kapsam**: Darfur Sultanlığı'nın alanı tek noktaya sıkışmış. |
| **H-0068** | 1883-12-23 · Darfur–Kordofan | 17 | 15 nokta `mehdi`, `Darfur` hâlâ `darfur`, **`Nühûd` hâlâ `tâbi: misir-kavalali`**. Emre'nin iki gözlemi de **ölçümle doğrulandı**; hangisinin ne zaman düştüğü **kaynak işi** (TDV), bende `bulunamadı`. |
| **H-0095** | 1899-11-27 · Bosna (Bihaç) | 12 | **6 nokta 1899'da hâlâ OSMANLI doğrudan**: `Banaluka · Bihaç · Bosna Dubiçası · Bosna Novi'si · Bosna Brod'u · Krupa`. Karşı kıyıdaki 6 nokta `avusturya`. Emre haklı; onun önerdiği ikinci şık (**işgal taraması**) atlasın kendi diline de uygun: mülkiyet 1908'e kadar Osmanlı, idare 1878'den beri Avusturya. |
| **H-0121** | 1911-10-08 · Sina | **2** | Bütün Sina yarımadası **iki noktadan** boyanıyor (`Tûr (Sînâ)`, `Sina güneyi`) ve ikisinin de tâbilik kimliği `kid` değil serbest metin. Emre'nin *"bu yapı sanıyorum hatadır"ı*: yapı bir hüküm değil, **iki noktanın peteği**. |
| **H-0136** | 1913-03-06 · Trakya | **2** | `Çorlu` OSMANLI, **`Tekirdağ` = `bulgaristan-kralligi`**. Emre'nin itirazı ölçümle doğru: Edirne 26 Mart 1913'te düştü, Tekirdağ 6 Mart'ta Bulgar gösterilemez. İki nokta arasındaki petek sınırı bütün bölgeyi ikiye bölüyor ⇒ ekrandaki dev yeşil kama. |

### Ortak yapı
Sekiz maddenin sekizinde de kusur **tek bir yerde**: bir yerleşimin o
günkü sahibi (ya da hiç nokta olmaması). Yani D **tek kök sebep**, sekiz
yüzü var. Dördünde pencerede **5 ya da daha az nokta** var (H-0023: 5,
H-0065: 4, H-0121: 2, H-0136: 2) — CLAUDE.md §2'nin *"harita yanlış
raporunda ilk soru: o bölgede yerleşim noktası var mı?"* sorusu dört
maddeyi tek hamlede açıklıyor.

### Ne istiyorum
`yerlesimler.js` Oturum 0'ın; düzeltmeyi ben uygulamıyorum. Her madde için
**hangi kaydın hangi alanı** düzeltilecek yukarıda adıyla yazılı. Tarih
hükmü **kaynak ister** (§4) ve bende `bulunamadı` — tarih uydurmadım.
İki kalem kaynak beklemeden kapanabilir, çünkü kusur tarih değil **şema**:
- `kid` taşımayan 5 tâbilik kaydı (`Süveyş · Sefâce · Tûr (Sînâ) ·
  Sina güneyi · Sîva`) — serbest metin kimlik boyanamaz.
- `Doha (Katar)` ve `Katar Yarımadası (iç, dolgu)`nun 1871'de hiçbir
  sahiplik penceresi olmaması.

---

## 5. Ölçüm fonksiyonları (canlı motorda tekrar koşar)

Statik site olduğu için ölçüm yerel sunucuda yapıldı:
`py -m http.server 8777` → `http://127.0.0.1:8777/index.html`.
Tarih `tarihAyarla(gunIdx("YYYY-MM-DD"))`, gövdeler
`harita.getSource(id).serialize().data` ile okunur.

- `__ol(gun, lon0, lon1, lat0, lat1, adim)` — çakışma ölçümü (§2).
- `__aci(gun, lon0, lon1, lat0, lat1, aciEsik, kenarEsik)` — sivri köşe (§3).

İkisinin de tam gövdesi `denetim/HARITA-0076-YAMA-olcum.js` dosyasındadır;
konsola yapıştırılıp koşar, sayfaya hiçbir şey yazmaz.

---

## 5.5 EK — H-0036 (Kars) · hüküm bende, numara `KRONO-0076-A`da

`KRONO-0076-A` M-5033 ile Kars ölçümünü yatay gönderdi; koordinatör
M-5025 (b) ile **hükmü bana** verdi. Numara onda kaldığı için
`CEVAP.json`a **ben yazmadım** (M-5023 ②) — hüküm ona yazıldı.

**Onun ölçümü** (`denetim/KRONO-0076-A-yatay-olc.py`): kutu lat 39.5–41.8 ·
lon 41.0–45.0 → 34 yerleşim. 1877-11-17 → 1877-11-19 arasında sahibi
değişen **1/34** (yalnız Kars, OSMANLI → rusya, 1877-11-18). 1877-04-24 →
1878-03-03 arasında değişen 17/34. Ardahan zaten 1877-05-17'de Rusya.

**Benim bağımsız ölçümüm** (`denetim/HARITA-0076-sahip.py`, 1878-01-01,
aynı kutu) onun bulgusunu doğruluyor ve bir ayrıntıyı düzeltiyor:

```
34 nokta · OSMANLI 21 · rusya 13
Kars (43.095, 40.602) = rusya
  en yakın komşuları:  Arpaçay 33 km OSMANLI · Digor 36 km OSMANLI
                       Küçükperveli 44 km OSMANLI · Sarıkamış 50 km OSMANLI
  en yakın RUS noktası: Kliçatak 55 km · Gümrü 66 km · Ardahan 68 km
```
Yani Kars "tek Rus noktası" değil (kutuda 13 Rus nokta var, savaş
öncesi Rus sınırı dahil) ama **Rus bloğundan kopuk**: Küçükperveli
(Osmanlı) tam Kars ile Gümrü/Kliçatak arasında durduğu için Kars'ın
peteği her yönden Osmanlı peteğiyle çevriliyor. **Eksklav görüntüsü
gerçek ve 105 gün sürüyor** (1877-11-18 → 1878-03-03).

### 🔴 Asıl bulgu — ölçtüm, kimse sormamış

```
1878-01-01 · Kars kutusu (34 nokta) : ISGAL kaydı olan  0 / 34
1878-01-04 · Tuna kutusu (58 nokta) : ISGAL kaydı olan  0 / 58
```
**93 Harbi'nin iki cephesinde de işgal katmanı HİÇ kullanılmamış.**
Mekanizma var ve başka yerlerde çalışıyor (`isg:` alanı
`yerlesimler.js`te, Değişmez 2i bugün 129 işgal kırılması sayıyor) —
ama bu savaşta sıfır. Sonuç: **fiilî düşüş ile hukukî devir aynı
alanda (`d:`/`s:`) karışıyor** ve hangi ölçütün kullanıldığı yerleşimden
yerleşime değişiyor:

| | ölçüt | tarih |
|---|---|---|
| Kars | kalenin **fiilî** düşüşü (TDV, 93 Harbi) | 1877-11-18 |
| Arpaçay · Digor · Sarıkamış · Küçükperveli … | **antlaşma** günü | 1878-03-03 |
| Sofya (H-0038) | prensliğin kuruluşu **öncesine** çekilmiş tâbilik | 1878-01-04'te `bulgaristan-prensligi` |
| Plevne · Niğbolu (H-0038) | Rus **sahipliği** | 1878-01-04 |

⇒ **H-0036 ve H-0038 aynı kök sebebin iki cephesidir.** D kovasının
ikinci alt sınıfı budur: *savaş yılı boyunca işgal katmanı yok, sahiplik
alanı işgal yerine kullanılıyor.*

### Hükmüm: `sirada` · çare belli, kaynak eksik

**① Komşu noktaların `d:`/`s:` tarihlerine DOKUNULMAZ.** `D206` ters yön
sınavı: çevreyi 1877'ye çekmek, Ayastefanos'a kadar gerçekten Osmanlı
kalan yerleri erken kaybettirir — düzeltme hatayı öbür tarafa taşır.
`KRONO-0076-A`nın uyarısı yerinde ve aynen benimsendi.

**② Çare `isg:` kaydı eklemektir**, sahiplik devri değil. Kars'ın çevresi
Rus işgali taramasıyla gösterilince Kars eksklav olmaktan çıkar, mülkiyet
Ayastefanos'a kadar Osmanlı kalır, iki uç da doğru olur.

**③ Eksik olan:** hangi yerleşimin hangi gün işgale girdiği. Bu **kaynak
işidir** (TDV `doksanuc-harbi` ve yer maddeleri) ve bende **bulunamadı**;
tarih uydurmadım (§4, `D210`). Kars'ın 1877-11-18'i kaynaklı ve
**değişmez**.

**④ Sefer oku talebi** bu maddenin içindeydi ama ayrı kalemdir —
`SEFER-OK` ailesinin işi, burada kapatılmadı.

---

## 6. Kümem dışına taşan iki not

- **H-0149** (Katar'dan feragat, 1913-07-29) bana şartnameyle geldi ama
  `SEVK-0076.md`de `SINIR-CIZGI-0076`'nın listesinde. Hüküm vermedim;
  ölçümü ona **yatay** yazdım (yarımadanın kuzey ucu `KATAR (ÂL SÂNÎ)`
  gövdesinin dışında kalıyor — H-0023'le aynı nokta havuzu).
- Batı Afrika çakışmaları (§2) hiçbir maddede bildirilmedi ama en büyük
  çakışma kaynağı orası. Kimsenin numarasına dokunmadım; koordinatöre
  bilgi olarak bırakıyorum.

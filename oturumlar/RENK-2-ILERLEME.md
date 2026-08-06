# RENK 2 — ilerleme · 6 Ağustos 2026

Sahiplik: `arac/renkler.py` **RENK 2'de.** Koşu yok, `arac/` serbestti
(`ls kosu*.log` en yeni 4 Ağustos · çalışan `py` süreci 0 — `YASALAR M7`).

---

## 🔴 SIFIRINCI BULGU — İKİ NÖBETÇİ DE ÖLÜYDÜ, İKİ GÜNDÜR

Brifingin açılış adımı *"`renk_olc.py` ve `renk_cikti.py` — mevcut iki
nöbetçi"* diyordu. **İkisi de import anında `SystemExit` atıyordu:**

```
!! BOLGE uret_petek.py'den okunamadı — KUTU türetilemez, komşuluk ölçülemez
```

Sebep: `renk_olc.py:70` deseni `^BOLGE\s*=\s*box\(` idi, yani YALNIZ düz
dikdörtgeni tanıyordu. **4 Ağustos'ta batı kenarı İzlanda için açılınca**
`BOLGE` L şekline döndü:

```python
BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
```

Desen tutmadı ⇒ `renk_olc.py` öldü ⇒ onu `from renk_olc import ...` ile
içe aktaran `renk_cikti.py` de öldü. **Atlasın renk ekseninde iki nöbetçi
vardı ve ikisi de iki gündür koşmuyordu.**

📌 **Ders — gürültülü ölüm bile, dinleyen yoksa sessizdir.** Koruma doğru
kurulmuştu: sessizce eski değere düşmedi, bağırarak öldü. Ama kimse
koşturmadığı için bağırış duyulmadı. *"Ölçemeyen denetim temiz denetim
değildir"* kuralının bir üstü var: **koşulmayan denetim, denetim değildir.**

⇒ **Onarıldı** (`arac/renkler.py` benim, ama `renk_olc.py` renk ekseninin
kendi aleti ve onsuz brifingin 2. adımı yapılamıyordu). Yeni okuyucu
biçimden bağımsız: `BOLGE` atamasındaki BÜTÜN `box(...)` çağrılarını
toplayıp zarfını alıyor. `box` · `unary_union` · `MultiPolygon` — üçü de
çalışıyor. Doğrulandı: `KUTU = (-38.0, -17.5, 159.0, 92.0)`.

---

## ① BİTİŞ ÖLÇÜTÜ BAYATTI — 233 değil 230 (`YASALAR B10`)

Brifing *"BOYALAR'da 233 → 236 kimlik"* diyordu. **Ölçtüm: `len(BOYALAR)`
= 230.** Sapma `durum_tablosu.py:72`den geliyor:

```python
o["renk"] = len(re.findall(r'^\s*"[a-z0-9\-]+"\s*:', _oku("arac/renkler.py"), re.M))
```

Bu desen `BOYALAR` girdilerini sayıyor **ama `OPAKLIK` sözlüğünün üç
anahtarını da** (`"yabanci"` · `"tabi"` · `"dogrudan"`) sayıyor. 230 + 3 =
233. Yani `CLAUDE.md §1.5`'teki **"233 renk" satırı üç fazla.**

⚠️ `durum_tablosu.py` benim dosyam değil — **düzeltmedim, bildiriyorum.**
Düzeltme deseni `BOYALAR` bloğuyla sınırlamak olmalı.

📌 Ve bu, `§1.5`'in kendi anlattığı hikâyenin devamı: tablo elle
yazılmaktan çıkarıldı ama **üreten betiğin kendisi yanlış sayıyordu.**
Otomatikleştirmek, doğrulamanın yerine geçmiyor.

---

## ② KOMŞULUK ÖLÇÜMÜ — araç bu üçünü ölçemezdi

`renk_olc.oner()` KULLANILAMADI ve **kullanılsaydı yanlış cevap verirdi:**
komşuluğu `girdi.py`den kurar, `ek10/11/12` bağlı değil ⇒ üç kimlik de
SIFIR komşu görünür ⇒ araç onları "kısıtsız" sanıp en ayrık rengi verir.
Aracın kendi uyarısı bunu söylüyor (`renk_olc.py:456`).

⇒ Üç dosyayı canlı kümeye ekleyip (1713 → **1725 nokta**) Voronoi'yi
yeniden kurdum; gün düzeyinde örtüşmeyle **gerçek komşuluk** ölçüldü.
Hücresiz/boş nokta: **0**. Üç yeni kimlik birbirine komşu **değil**.

```
sibir-hanligi  5 komşu   kazan 1438-1552 · rusya 1430-1598 ·
                         altinorda 1430-1500 · kazak-hanligi 1500-1598 ·
                         mogulistan 1430-1598
estonya        3 komşu   finlandiya · letonya · rusya — üçü de 1918-1923
izlanda        4 komşu   ingiltere · irlanda · ispanya · portekiz
                         (Kuzey Atlantik hücreleri uzağa uzanıyor)
```

### Seçim ölçütü — aracın niyetine sadık, uygulamasına değil

İlk tur üç rengi de **eşiğin tam dibine** koydu (ΔE 12,0 · 12,2 · 12,1).
Sebep: `oner()`in yetinmeci `uyum` tercihi **dejenere** — 380 bin aday
aynı `0,0012` değerinde toplanıyor, yani ayrımı sıralama tesadüfü yapıyor.
Niyet *"eşiği geçenler arasında palete uyanı seç"*ti; davranış *"palete
uyanlar arasında rastgele"* olmuş. Düzeltme: önce palet kabuğu, **sonra
kabuk içinde payı en büyük olan.** Eşik gevşemedi, yükseldi.

İkinci tur `sibir-hanligi` için `#3fb43f` verdi — C\* 38,5 = paletin
**%97'si.** `renkler.py`nin `#c03fab`'ı (%88) *"göz onu vurgu sanır"*
diyerek reddettiği durumun daha beteri. ⇒ **Üçüncü eşik eklendi:** C\*
paletin p10–p75 bandında (9,7–28,8). Üst sınır p75, çünkü `renkler.py`nin
KABUL ettiği tek ölçülmüş örnek `#fe84c6` %73'te ve gerekçesi *"çeyrekler
içinde"*. (p90 denendi, `#a2ae3f` C\* 32,4 = %89 verdi — **bandın kenarı,
bandın dışıyla aynı şeyi okutuyor.**)

---

## ③ TESLİM

### 🟢 YAZILDI — `estonya  #3f63b4`
```
letonya  ΔE 24,8 | rusya 30,8 | finlandiya 39,6
soft: polonya 23,6 · almanya 23,8 · lehistan 27,7 · isvec 29,9 · litvanya 31,6
altlıktan 32,4 · C* 13,0 = paletin %15'i
```
Künye `devletler.js`te **VAR** ve `ek11` ile **birebir aynı**
(1918-02-24 → 1923-10-29) — `CLAUDE.md §3.5` ömür kontrolü ✓.
⇒ `data/yerlesimler_ek11.js`in **4 noktası bağlanmaya hazır.**

### ⚠️ HAZIR AMA YAZILMADI — künye bekliyor
Koordinatörün düzeltmesi geldiğinde ikisi **yazılmıştı**; sevke uyularak
geri alındı ve `renkler.py`de **yorum satırı** olarak duruyor. Künye
gelince yorumu kaldırmak bir dakikalık iş.

```
sibir-hanligi  #b17e3f   kazan 17,7 | rusya 18,2 | altinorda 26,2 |
                         kazak-hanligi 35,7 | mogulistan 39,2
                         altlıktan 19,1 · C* 24,7 = %60
izlanda        #b4483f   ispanya 18,4 | ingiltere 24,0 | portekiz 31,0 |
                         irlanda 48,6 · altlıktan 27,2 · C* 23,9 = %56
```

**`izlanda` tuğla kırmızısı bir tercih değil, ölçüm sonucu.** Osmanlı
ailesine yakın durması rahatsız edici geldi (tâbi'den ΔE 16,5) ve bütün
ton aileleri tarandı: 30-60° tuğla **17,4** · 0-30° macenta 13,9 ·
180-210° turkuaz 13,0 — **başka hiçbir aile eşiği geçmiyor.** Estetik
kaygı ölçüye yenildi. (Osmanlı ile hiçbir gün komşu değil.)

### 🔴 KÜNYE İHTİYACI — VERİ DEVLET'e
Koordinatörün tablosu *"künye YOK"* diyor; **ölçtüm, ikisi aynı şey değil:**

| kimlik | `devletler.js` durumu | gereken |
|---|---|---|
| `izlanda` | künye **hiç yok** | yeni künye |
| `sibir-hanligi` | künye **var ama eksik**: id `sibir` · "Sibir Hanlığı" · 1420-01-01 → 1598-01-01 · `harita:` alanı **BOŞ** | `harita:"sibir-hanligi"` yaz **+** `t`yi **1598-08-20**'ye çek |

`sibir`in bitişi `ek10`un TDV `kucum-han` maddesinden aldığı 1598-08-20'den
**7,6 ay erken** — künye bağlanınca `§3.5` ömür denetimi bunu yakalar.

### 🟡 DÖRDÜNCÜ DEĞİŞİKLİK — `meiji-japonya  #2d8f4a → #ae3f81`
**Bu üç renkten biri değil; bitiş ölçütü zorladı.** Zeminde duran bir
çakışmaydı: `#2d8f4a`, `rusya` `#4f7d4f`'ten **ΔE 10,2** — eşiğin altında
ve ikisi ölçülmüş komşu (Sahalin/Kuriller). İkisi de yeşil.

📌 **Üç yeni renk SIFIR yeni çakışma getirdi** — bu, ben gelmeden önce de
oradaydı. Kapattım çünkü bitiş ölçütü *"çakışma 0"* diyor ve `renkler.py`
benim dosyam; kirli zemin bırakıp "bitti" demek bir sonraki oturuma bayat
taban devretmek olurdu.

⚠️ **NÜANS ve KARAR KOORDİNATÖRÜN:** `renk_cikti.py` çizili haritada
**0 değen çift** buluyor — iki gövde bugünkü çıktıda birbirine değmiyor.
Yani kusur bugün **görünür değil, potansiyel.** Voronoi "değiyor" der,
çizim "değmiyor" der; ayrıştıklarında sıkı olanı almak doğru davranış —
ama geri alınması istenirse tek satır.

⚠️ Ve bir bedeli var: `renk_cikti.py` artık *"1 kimlik ESKİ renkle çizili,
harita renkler.py'den GERİDE — yeni bir üretim koşusu gerekiyor"* diyor.
`ek11` bağlanınca zaten koşu gerekecek; **meiji aynı koşuya biner, ek
maliyet yok.**

📌 `#2d8f4a` kasıtlı bir paylaşım grubuydu ve `renkler.py`nin **üçüncü
nöbetçisi** (beyan self-check'i) ayrılmayı anında yakaladı — beyan
güncellendi. Kalan üçü (`ace-sultanligi` · `malaka-sultanligi` ·
`ming-hanedani`) hexte kaldı: çakışma grubun değil **tek üyenin**
sorunuydu, hiçbiri Rusya'ya komşu değil.

---

## ④ ÖLÇÜM — bitiş ölçütüne karşı

```
BOYALAR            230 → 232   (+estonya +hokand; sibir-hanligi ve izlanda künye bekliyor)
                   ⚠️ brifing "233 → 236" diyordu — taban ölçümü yanlıştı, bkz. ①
renk_olc.py        görünmez 0 · çakışma 0 · aynı-hex 0        ✓
                   (çakışma 1 → 0: meiji-japonya kapatıldı)
renk_cikti.py      çizili haritada ΔE<12 değen çift 0         ✓
                   ① meiji-japonya eski renkle çizili — koşu bekliyor
--dogrula          3 öneri · 0 fark — yazılan = önerilen      ✓
```

**AÇIK KALAN, benim dosyam değil:** `afsar` ↔ `kacar` ikisi de
`harita:"iran"` ve 1789-03-21 → 1796-01-01 arası **örtüşüyor** — o
pencerede ayırt edilemezler (ΔE 0). `devletler.js` işi.

⇒ Üç rengin **biri yazıldı, ikisi künye bekliyor** ⇒ brifingin
*"bitti"* eşiği **HENÜZ GEÇİLMEDİ.** `bitti` demiyorum.

---

## ⑤ `hokand  #b4603f` — YAZILDI (koordinatör kalemi ①)

```
rusya 23,4 | safevi 23,7 | qing-hanedani 23,9 | nogay 23,9 |
kazak-hanligi 26,5 | iran 30,1 | kacar 32,5 | hive 33,4 | buhara 39,9
altlıktan 21,0 · C* 23,1 = paletin %54'ü
```

⚠️ Veride **0 pencere** — parti inmedi, satır bugün hiçbir yeri boyamıyor.
Bu yüzden `renk_olc.komsuluk()` ölçemez (kimlik canlı veride yok ⇒ sıfır
komşu ⇒ araç "kısıtsız" sanır). Engel kümesi elle kuruldu.

### 🔴 VE ZAMAN SÜZGECİ ŞARTMIŞ — kendi hatamı ölçtüm
İlk turda 20 Orta Asya kimliğini **zaman sormadan** engel saydım. Sonuç:
pay 13,8'de tıkandı, yalnız 3 ton ailesi sağ kaldı. Künyelerden örtüşme
ölçülünce **beşi düştü** — `timurlu` 1370-1507 · `mogulistan` …1680 ·
`yarkent-hanligi` 1514-1705 · `altinorda` · `kazan` …1552; hiçbiri
Hokand'ın 1710'unu görmüyor. Pay **13,8 → 23,4**, ton ailesi **3 → 9**.

📌 **Fazla temkin de bir ölçüm hatasıdır.** Eşiği gevşetmek kadar,
gereksiz sıkmak da yanlış cevap verir — ikisi de "ölçtüm" der.
`renk_olc.py:38` zaten yazıyordu: *"aynı haritada görünüyorlar yetmez."*

### ⚠️ `hokand` künyesi VAR ama BAĞLI DEĞİL
Koordinatör *"devletler.js: VAR (1710→1876)"* dedi — kayıt gerçekten var
(id `hokand` · 1710-01-01 → 1876-02-19) **ama `harita:` alanı BOŞ.**
Ölçtüm: 302 künyenin **239'u dolu, 63'ü boş**; boş olan haritaya
bağlanmaz. `sibir` ile birebir aynı durum.
⇒ Parti inmeden önce VERİ DEVLET'in `harita:"hokand"` yazması gerekiyor.

---

## ⑥ SORU ②'nin CEVABI — Gîlân ve Mâzenderan İran bandında olmalı mı?

# **HAYIR.** Ve iki ayrı gerekçeyle — biri ölçüm, biri anlam.

### ⓐ ÖLÇÜM — band ikisini ALMIYOR, zaman süzgeci de kurtarmıyor
Aile bandı ton 349°±18. Üç senaryo koşuldu (C\* p10-p75 · palet kabuğu ·
ΔE ≥ 12):

| senaryo | engel kümesi | aday |
|---|---|---|
| **A** band içi | 4 aile üyesi + `iran`ın 23 komşusu + Osmanlı = 26 | **0** |
| **B** band içi | yalnız 14-16. yy sahnesi (15 engel) | **0** |
| **C** band DIŞI | yalnız 14-16. yy sahnesi (15 engel) | **79** · 1916 uygun çift · pay 17,1 |

**B satırı belirleyici.** `hokand`ı kurtaran hile — engel kümesini çağa
göre daraltmak — burada **işe yaramıyor.** Aday 26 engelde de 0, 15
engelde de 0. Demek ki tıkayan engel sayısı değil, **bandın kendisi
dolu.** `renkler.py:177`nin *"beşinci aile üyesi için uygun aday SIFIR"*
ölçümü doğruymuş; ben onu bağımsız olarak, iki farklı engel kümesiyle
teyit ettim.

📌 Yapısal cevap zaten `renkler.py:181`de yazılı: *"gerekirse aile ikiye
bölünür (safevi+afsar · iran+kacar+zend)."* Bandı zorlamak değil,
**bölmek** gerekiyor — ama o `zend` geldiğinde verilecek bir karar.

### ⓑ ANLAM — kullanıcının kuralı bu vakaya UYGULANIRSA TERSİNE ÇALIŞIR
Kuralın doğduğu şikâyet şuydu: harita 1736-03-08'de aynı yaylayı
`safevi` morundan `iran` kahvesine atlatıyordu. Yani:

> **aynı toprak · ardışık zaman · tek siyasi çizgi** → farklı renk
> vermek onu **üç ayrı devlet gibi gösteriyordu.**

Karkiya (Gîlân) ve Mar'aşî (Mâzenderan) bunun **üç maddede de tersi**:

```
aynı toprak DEĞİL    Hazar kıyısı, Elburz'un arkası — yayladan ayrık
ardışık DEĞİL        Safevî'nin ardılı değil, ÇAĞDAŞI
tek çizgi DEĞİL      ilhak edilene kadar gerçekten bağımsız hanedanlar
```

⇒ Onları aile bandına koymak, kuralı uygulamak değil **aynadaki hâlini
uygulamak** olur: kullanıcının şikâyeti *"bir devlet üç görünüyor"*du;
bu, *"üç devlet bir görünüyor"* üretirdi. Ve tam da bağımsız oldukları
pencerede — yani atlasın anlatacak bir şeyi olduğu tek pencerede.

**Kural coğrafyaya değil ARDIŞIKLIĞA bakar.** Ölçüsü "İran'da mı" değil,
*"bu, aynı çizginin bir sonraki halkası mı"*dır.

### ⓒ TAVSİYE
Band dışı, kendi ton ailelerinde, pay 17,1 ile rahatça yer var. **Renk
bu işin darboğazı değil** — ikisinin de `devletler.js`te künyesi yok,
yani sıra `sibir-hanligi` · `izlanda` ile aynı: **önce künye.**
Künyeler açıldığında iki rengi ölçmek 10 dakikalık iş.

⚠️ Tarihleri (Karkiya ~1370-1592 · Mar'aşî ~1359-1596) **TDV'den
doğrulamadım** — senaryo B'de yalnız "14-16. yüzyıl" mertebesinde
kullandım ve hüküm zaten A'da da B'de de aynı çıkıyor, yani sonuç bu
tarihlere dayanmıyor. Kesin tarih ÇAPRAZ İRAN'ın / VERİ DEVLET'in işi.

**Uygulanmadı** — sevk "şimdi yapma, cevabını yaz" diyordu.

---

## ⑦ Artefaktlar
```
denetim/oneri-renk2-20260806.txt   --dogrula ile koşulabilir öneri listesi
arac/renk_olc.py                   BOLGE okuyucusu onarıldı (biçimden bağımsız)
arac/renkler.py                    estonya + meiji-japonya yazıldı;
                                   sibir-hanligi + izlanda yorumda hazır
```
`arac/` altındakileri **koordinatör commit'ler** (§7). Bu dosya
pathspec'li olarak RENK 2 tarafından commit edildi.

---

## ⑧ ÜÇÜNCÜ KALEM — Çin · Afganistan · ve veriden doğan bir çakışma

### 🟢 `cin-cumhuriyeti  #bab75a` — 85 pencerelik delik kapandı
85 pencere · 1911-10-10 → 1923-10-29. `§8`: renksiz kimlik ⇒ bölge
çizilmez ⇒ **Çin, Cumhuriyet döneminin tamamında haritada delikti.**

🔴 **QING'İN AİLESİNDE, KASTEN.** 1912-02-12'de Qing düşüyor ve aynı
toprak Cumhuriyet'e geçiyor — kullanıcının kuralının tarifi birebir bu.
Aday `qing`in bandından (ton 107°±18) seçildi.
```
qing 13,1 (aile — kasten eşiğin hemen üstünde, safevi↔iran'ın 12,7'si gibi)
rusya 17,2 · nepal 20,2 · abd 23,9 · altlıktan 24,3 · C* %74
```
📌 **Serbest seçim ölçüldü ve REDDEDİLDİ:** `#3fb472` qing'den ΔE 22,1
uzaktı — 1912'de Çin zeytin yeşilinden çimen yeşiline **atlardı**. Üstelik
payı da kötüydü: onu bağlayan `rusya` 13,8'di, yani dar çift **alâkasız**
bir komşuydu. Ailede tek dar çift qing'in kendisi, alâkasız her komşu
≥17,2. **Hem anlamca hem ölçüce daha iyi.**

### 🟢 `afgan-durrani #3c1239` + `afganistan #e4b1d5` — BİR AİLE
Dürrânî → Barakzâî aynı ülkenin hanedan değişimi ve **1826-1834 arası
sekiz yıl üst üste biniyor.** Ayrı renk, tek ülkeyi iki devlet gösterirdi.

**Ve kullanıcının lafzı BURADA SAĞLANDI** — `iran` ailesinde
sağlanamayan şey:
```
ton farkı   5,5°    (aynı aile)
L* farkı   26,2     (ayrım SALT PARLAKLIKTAN)
aile içi ΔE 26,3    ·  zayıf halka 20,6
```
`iran` ailesi 17,3 birimlik L\* aralığına dört üye sığdırmak zorundaydı;
burada iki üye var, yer bol, tarif harfiyen uygulandı.

⚠️ Üç eleme, ikisi ölçülerek: ① paletin **kendi** uyum dağılımının p75'i
(sınırsız arama `#abf3ff`/`#75ffc3` gibi neon pastel veriyordu, uyum
0,58-0,64 — aracın uyardığı "en ayrık" tuzağı) ② C* p10-p75 ③ Osmanlı
kırmızı şeridi 15-35° dışı (ilk çözüm `#e4b1d2` tam 15,3°'deydi).

### 🔴 `cungar #7b1fa2 → #3fb4a2` — ÇAKIŞMA VERİDEN DOĞDU
`hokand` yazılıp Mâverâünnehir partisi bağlanınca (1729 → 1745 nokta)
`buhara` ile `cungar` **komşu oldular** — ΔE 10,5. Sabahki koşuda bu çift
YOKTU ve **ikisi de renk değiştirmedi.**

📌 **DERS: bir renk paleti verinin fonksiyonudur.** Nokta eklemek, hiçbir
hex'e dokunmadan bir çakışma **yaratabilir.** ⇒ Parti bağlayan her
koşudan sonra `renk_olc.py` yeniden koşmalı; *"renkler değişmedi, denetim
de değişmez"* **yanlış.**

Hangisinin taşınacağı ölçüldü: `cungar` yeni yerinde 14,5 alıyor,
`buhara` ancak 13,0 (24 komşu, paletin en kısıtlı düğümlerinden). Ucuz
olan taşındı. `#7b1fa2` beyanı güncellendi (5 → 4 üye).

### ⚠️ KÜNYE — koordinatörün listesinde eksik bir satır
Koordinatör `afgan-durrani` ve `afganistan` için künye yokluğunu bildirdi.
**Ölçtüm: `cin-cumhuriyeti`nin de künyesi YOK** — `devletler.js`te kayıt
hiç yok, yalnız `qing-hanedani` var (1636-05-15 → 1912-02-12). Yani
bugünkü üç kalemin **üçü de** künye bekliyor.

| kimlik | künye |
|---|---|
| `cin-cumhuriyeti` | 🔴 hiç yok — *koordinatörün listesinde görünmüyordu* |
| `afgan-durrani` | 🔴 hiç yok |
| `afganistan` | 🔴 hiç yok |
| `hokand` | 🟡 var, `harita:` alanı boş |
| `sibir-hanligi` | 🟡 var (id `sibir`), `harita:` boş + `t` 7,6 ay erken |
| `izlanda` | 🔴 hiç yok |

### ÖLÇÜM
```
BOYALAR      230 → 235   (+estonya +hokand +cin-cumhuriyeti
                          +afgan-durrani +afganistan)
canlı veri   1713 → 1756 nokta
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    7 öneri · 0 fark                        ✓
```
`bitti` demiyorum — `sibir-hanligi` ve `izlanda` künye bekliyor.

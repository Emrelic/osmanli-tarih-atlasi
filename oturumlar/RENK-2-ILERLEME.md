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

---

## ⑨ DÖRDÜNCÜ KALEM — `mogolistan  #1ba5e4`

7 pencere · künye ✓ 1911-12-29 → 1923-10-29. `_ek19`un 6 noktası bunu
bekliyordu.
```
joseon 21,0 | mogulistan 21,1 | rusya 29,0 | cin-cumhuriyeti 42,0
altlıktan 31,6 · C* 19,5 = paletin %42'si
```

### 🔴 Çin'in ailesine KONMADI — ve bu bilinçli bir ters karar
`cin-cumhuriyeti`yi qing ailesine koydum; bunu koymuyorum. **Kural
ardışıklığa bakar:** Qing → Cumhuriyet aynı devletin devamıdır, renk
atlamamalı. Bogd Hanlık ise Çin'den **ayrılmak için** kuruldu — haritanın
anlatacağı şey tam olarak o ayrılık. Aynı aileye koymak, atlasın söylemesi
gereken tek şeyi silerdi. ⇒ `cin-cumhuriyeti`den ΔE **42,0**, kasten uzak.

### ⚠️ İki engel ölçümle değil MUHAKEMEYLE eklendi — ikisi de tuttu

**① `meiji-japonya`** — komşu değil, ama ikisi de 1911-1923 Doğu Asya.
İlk seçim `#b43fae` idi ve meiji'den **ΔE 10,6** çıktı: **hiçbir denetim
ateşlemezdi** (komşu değiller) ama kullanıcı iki macenta lekeyi ayırt
edemezdi. `estonya`da reddettiğim okuma hatasının aynısı. Şimdi 39,9.

**② `mogulistan`** — ve bu ters yönde:

# 🔴 İKİ SLUG TEK HARF FARKLI
```
mogUlistan   Moğulistan (Doğu Çağatay Hanlığı)   1347-1680   #4254ae
mogOlistan   Moğolistan (Bogd Hanlık)            1911-1923   #1ba5e4
```
İkisi **hiç eşzamanlı değil** (1680 vs 1911), yani ΔE kuralı onları
bağlamıyor. Yine de engel saydım: benzer renk verseydim
`yerlesimler.js`teki bir **yazım hatası hiçbir denetimden geçmezdi** —
ikisi de geçerli kimlik, ikisi de boyanır, fark yalnız gözle görülür.
Ayrık renk yazım hatasını **görünür** kılıyor (bugün 21,1).

📌 **Bu bir renk çözümü değil, renkle alınmış bir SİGORTA.** Asıl çözüm
sluglardan birini yeniden adlandırmaktır — `renkler.py`nin işi değil,
koordinatöre bildirildi.

### ⚠️ Palet kabuğu fazla darmış — ölçüt düzeltildi
`uyum ≤ en_iyi + 0,01` kabuğu bu kalemde `#3f8ab4` verdi: C* 10,2 =
paletin **%11'i**, pay 16,2. Paletin **kendi** uyum dağılımının p75'i ile
bakınca `#1ba5e4` çıktı: C* %42, pay **21,0**. ⇒ Bundan sonra sınır
paletin kendi p75'i; "en iyi adaya göre kabuk" tek bir adayın tesadüfüne
bağlıydı, "paletin dağılımına göre" bağlı değil.

### ⚠️ Ve bu dosya bir kez BOŞALDI — kendi hatam
Eki yazan betik `io.open(p,"w")` ile dosyayı önce **kesti**, sonra
`UnicodeEncodeError` ile patladı (kaçış dizilerinde vekil çifti kullanmıştım).
Dosya boş kaldı ve o hâliyle commit oldu (`6445572`, 377 silme).
`da7842d`'den geri yüklendi. 📌 Ders: **kesen ve yazan tek adım, yarıda
kalırsa veri kaybıdır.** Doğrusu tam metni ayrı yazıp sonra taşımaktır —
`CLAUDE.md §11`'in `replace(...,1)` dersinin kardeşi.

### ÖLÇÜM
```
BOYALAR      230 → 236        canlı veri 1713 → 1772 nokta
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
renk_cikti   çizili haritada değen çift 0            ✓
--dogrula    8 öneri · 0 fark                        ✓
```
`bitti` demiyorum — `sibir-hanligi` ve `izlanda` künye bekliyor.

---

## ⑩ KOŞU SÜRERKEN — yazım ertelendi, ölçüm sürdü

Koşu haberi geldi ve **doğrulandı** (`YASALAR M7` devraldığını doğrula der):
```
kosu_r772.log   05:23'te canlı · py/python süreçleri koşuyor
renkler.py      son değişiklik 05:15:02  ←  anlık görüntüden (05:20:03) ÖNCE
```
📌 Yani bugünkü **altı rengin hepsi bu koşuda var** — `mogolistan` dâhil.
Sınırın doğru tarafında kalmışız; yazımı 5 dakika geciktirseydim
`mogolistan` bu koşuya girmez, Gobi bir sürüm daha boyasız kalırdı.

⇒ `arac/renkler.py`ye **dokunulmadı.** Ölçüm salt-okunur yapıldı, sonuç
`denetim/hazir-renk2-kosu-sonrasi.txt`e yazıldı; koşu bitince
`--dogrula` ile uygulanabilir.

## ⑪ `ryazan  #cce787` — ÖLÇÜLDÜ, yazılmadı

Ryazan Knezliği ~1301-1521; Moskova 1521'de ilhak etti. Canlı veride
`Ryazan` noktası **var** ama `s: rusya 1281-1923` taşıyor — PETEK/NOKTA'nın
ödünç aldığı Tula deseni.

**Kimliğin 0 penceresi olduğu için `renk_olc.komsuluk()` ölçemez.** Bunun
yerine **Ryazan noktasının kendi peteği** ölçüldü ve 1301-1521 penceresinde
çevresindeki kimlikler bulundu:
```
altinorda   Tambov · Voronej            kirim   Tambov · Voronej
rusya       Moskova · Tula · Nijniy Novgorod · Vologda
en yakın komşu Tula 145,5 km · Moskova 184,3 km
```

### Rusya'nın ailesinde seçildi — ve ayrım PARLAKLIKTAN
İkisi de Rus knezliği ve biri ötekini yutuyor: akrabalık doğru, **ama
ayrım şart** — 220 yıl eşzamanlı ve sınırdaşlar.
```
rusya   L* 71,3          ryazan  L* 88,4          fark 17,0
ton 126,8°               ton 113,1°               ΔE 20,3
rusya 20,3 | litvanya 22,6 | don-kazak 22,9 | nogay 22,9
altlıktan 30,6 · C* 28,5 = paletin %75'i
```
⇒ **1521 ilhakı haritada görünür kalıyor: renk atlamıyor, KOYULAŞIYOR.**
Bir knezliğin yutulması tam olarak böyle okunmalı.

📌 Band dışı serbest seçim ölçüldü (`#1b54e4`, pay 34,3) ve **reddedildi**:
`rusya`dan ΔE 46,3 — Ryazan'ı Rus dünyasının dışından bir devlet gibi
gösterirdi. Pay zaten 20,3 ile fazlasıyla yeterli; 34,3'ü almak için
anlamı bozmaya değmez.

### ⚠️ Ama `ryazan` RENKLE AÇILMAZ — `hokand`dan farkı bu
`hokand` · `cin-cumhuriyeti` · `mogolistan`da veri kimliği **zaten
taşıyordu**, eksik olan yalnız renkti; renk gelince dosya açıldı.
Burada `Ryazan` noktası hâlâ `rusya` taşıyor. **Renk tek başına hiçbir
şey boyamaz.** Gereken sıra:
```
künye (koordinatör) → nokta dönemleri (PETEK/NOKTA) → renk (RENK 2)
```
Koordinatörün *"dosya açmıyor, yalnız bir ödüncü gerçeğe çeviriyor"*
teşhisi doğru — ve o dönüşümün ilk adımı renk değil.

## ⑫ 🔴 `sibir-hanligi` ve `izlanda` — ENGEL HÂLÂ KÜNYE, ve o bende değil

Koordinatör ikisini sıradaki kalemim olarak verdi. **Ölçtüm:**
```
künye toplam 306   (302 → 306: afgan-durrani · afganistan ·
                    cin-cumhuriyeti · mogolistan yazıldı)
sibir-hanligi   künye YOK   (yalnız id `sibir`, harita: alanı boş)
izlanda         künye YOK
```
⇒ Dörtlü künye partisinde **bu ikisi atlanmış.** Renkleri bu sabahtan beri
ölçülü ve `renkler.py`de yorum satırı olarak hazır; yorumu kaldırmak bir
dakikalık iş. **Sıra bende değil.**

⚠️ Ve bir tutarlılık sorusu koordinatöre: `hokand`ı `harita:` alanı boşken,
`cin-cumhuriyeti`yi künyesi HİÇ YOKKEN yazdım ve ikisi de dosya açtı —
yani pratikte renk tek başına deliği kapatıyor, künye yalnız dizin
penceresini etkiliyor. Eğer ölçüt buysa `sibir-hanligi` ve `izlanda` da
bugün yazılabilir. Eğer ölçüt ilk turdaki *"künyesiz kimliğe renk yazmak
yarım iştir"* ise, o zaman `hokand` ve `cin-cumhuriyeti` de yarım kaldı ve
künyeleri sonradan geldi. **İki uygulama arasında fark var; hangisi
geçerli, koordinatörün kararı.** Ben ikisini de yapabilirim.

### ÖLÇÜM
```
BOYALAR      236   (koordinatörün ölçtüğü 239 — aradaki 3 hâlâ
                    durum_tablosu.py:72'nin OPAKLIK'i sayması)
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓ (05:15 hâliyle)
hazır        sibir-hanligi · izlanda · ryazan — üçü de ölçülü, yazılmadı
```

---

## ⑬ SON İKİ RENK YAZILDI — ve koşudan ÖNCE bir çökme bulundu

### Önce: koşu çelişkisi ölçüldü
Bir önceki sevk *"koşu sürüyor, dokunma"*, bu sevk *"şimdi yaz"* diyordu.
İkisi birden doğru olamaz ve yanlış olanı seçmek 72 dakika demek. **Ölçtüm:**
```
kosu_r772.log   son yazım 06:32:03      python süreci: YOK
data/donemler.js 06:32:02               şimdi: 14:31
```
⇒ Koşu sekiz saat önce **bitmiş.** `arac/` serbest, yazım güvenli.
📌 İki sevk arasında çelişki varsa aradaki fark **zaman**dır; sevki değil
**saati** ölç.

### 🟢 `sibir-hanligi #b17e3f` · `izlanda #b4483f`
Renkler sabah ölçülmüştü; akşam **güncel veriyle (1800 nokta) yeniden
sınandı** — devralmadım, yeniden ölçtüm (`YASALAR B10`).

```
sibir-hanligi   kazan 17,7 · rusya 18,2 · altinorda 26,2 · kazak-hanligi 35,7
izlanda         ispanya 18,4 · ingiltere 24,0 · portekiz 31,0 · irlanda 48,6
```

**İkisinde de koordinatörün komşu listesi ölçümle uyuşmadı:**

| kimlik | sevkte yazan | ölçülen |
|---|---|---|
| `sibir-hanligi` | altinorda · rusya · kazak-hanligi · **buhara** | altinorda · rusya · kazak-hanligi · **kazan** |
| `izlanda` | **norvec · danimarka** | **ingiltere · irlanda · ispanya · portekiz** |

Renk ikisinde de listedeki adlardan da ayrık (buhara ✓ · danimarka 29,7 ·
norvec 31,9), yani **karar değişmiyor** — ama sayı devralınmadı.

📌 `izlanda` farkı öğretici: Kuzey Atlantik'te İzlanda'nın peteği
İskandinavya'ya değil **güneye** uzanıyor. Nokta yoğunluğu düşük olan
yerde petek sezgiye aykırı gider — `CLAUDE.md §2`nin tam olarak
uyardığı davranış, burada zararsız bir örneği.

Ayrıca sabahki ölçümde komşu görünen `mogulistan` akşam **düştü**: aradaki
partiler Sibirya çevresine nokta koydu ve komşuluk daraldı. Palet verinin
fonksiyonudur — `cungar` dersinin ikinci teyidi.

---

## ⑭ 🔴 `_ek10` BAĞLANIRSA ÇÖKER — `Tara` ad çakışması

Renk ölçümü sırasında `girdi.yukle()` uyarısı düştü:
```
!! AD ÇAKIŞMASI: Tara — yerlesimler_ek10.js
```

`girdi.yukle()` ad çakışmasında **`ValueError` atar** (girdi.py:528).
Yani `_ek10` bugünkü hâliyle `GIRDI_DOSYALARI`na eklenirse **motor
açılışta çöker** — üretim koşusu değil, ilk okuma.

### Ölçüm
```
canlı (yerlesimler_ek18.js)   Tara  56.9021 / 74.3714  kale
                              s: rusya 1594-01-01 → 1923-10-29
_ek10                         Tara  56.8980 / 74.3720  kale
                              s: altinorda      1281 → 1430
                              s: sibir-hanligi  1430 → 1598-08-20
                              s: rusya          1598-08-20 → 1923
aralarındaki mesafe: 0 km  (46 m)
```

**İkisi aynı yer.** `_ek10` renk beklerken park edilmişti; bu arada
`_ek18` aynı noktayı bağımsız olarak ekledi. `CLAUDE.md §11`in *"yakın
mükerrer yerleşim"* tuzağının gerçekleşmiş hâli — ve bu kez 3 km değil
**46 m.**

### ⚠️ VE DOĞRU ÇÖZÜM `_ek10`U ATMAK DEĞİL
Canlı `Tara`nın `kur` alanı **yok** ve zinciri 1594'te başlıyor ⇒
**1281-1594 arası SAHİPSİZ.** Ölçtüm:
```
1450 → sahipsiz    1550 → sahipsiz    1593 → sahipsiz    1600 → rusya
```
`_ek10`un kaydı bu boşluğu **dolduruyor** (altinorda → sibir-hanligi →
rusya). Yani daha eksiksiz olan `_ek10`unki.

⚠️ Ama tarih de gözetilmeli: Tara 1594'te **Ruslar tarafından** kuruldu —
`_ek10`un kendi başlığı TDV `kucum-han`dan alıntılıyor: *"1598'de
**Tara'dan** başlayan askerî bir harekât"*, yani Rus üssü. Kale 1430'da
yoktu; 1430-1594 arası orada olan şey **toprağın sahibi**, kalenin
kendisi değil.

⇒ Üç seçenek var ve karar **benim değil** (`data/` PETEK/NOKTA'nın):
```
① _ek18'in kaydını sil, _ek10'unkini kullan   — boşluk kapanır,
   ama kale 1430'dan beri varmış gibi görünür
② _ek10'un kaydını sil, _ek18'inkine kur:"1594-01-01" ekle
   — tarihen doğru; ama 1430-1594 toprağı en yakın peteğe emilir (§2)
③ _ek10'un zincirini koru + kur:"1594-01-01" ekle
   — toprak sahipli, kale anakronik değil. ÖNERİM BU.
```

📌 **Bu bulgu renk işinin yan ürünü.** Ölçmek için `_ek10`u canlı kümeye
eklemek zorundaydım ve çakışma orada düştü. Renk yazıp geçseydim,
çökmeyi koordinatör bağlama anında bulacaktı — koşunun başında değil,
**ilk okumada**, yani en ucuz yerde. Yine de: bağlamadan önce bilinmesi
iyi.

### ÖLÇÜM
```
BOYALAR      238        künye 308 (sibir-hanligi ✓ · izlanda ✓ geldi)
canlı veri   1793 nokta
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    2 öneri · 0 fark                        ✓
```

## ⑮ KUYRUKTA KALAN
```
🟡 ryazan             #cce787 ÖLÇÜLÜ, yazılmadı — renkle AÇILMAZ,
                      önce künye + nokta dönemleri gerek
   bengal-sultanligi  22 pencere · kenmu 17 · fransiz-cinhindi 16 · …
```

---

## ⑯ `zend  #691569` — DARBOĞAZ AÇILDI · 7 Ağustos 2026

Kullanıcının hükmü (*"diğer iranları hanedanı ile anmak olabilir. kaçarlar
zend safeviler afşarlar gibi"*) `iran`ın en büyük tek penceresini
`zend`e taşıyor. **Ölçtüm: o pencerede (1747-06-20 → 1796-01-01)
`iran` taşıyan 126 nokta var.**

### 🔴 `renkler.py`nin kendi "YER YOK" hükmü ÇÜRÜTÜLDÜ — ve sebebi zaman
Dosya `§zend` bloğunda yazıyordu: *"bu kutuda beşinci aile üyesi için
uygun aday **SIFIR**"*. **217 aday çıktı.**

Fark tek bir şeyden geliyor: eski ölçüm `iran`ın **bütün çizgideki 23
komşusunu** engel sayıyordu. Ama `zend` bütün çizgide yaşamıyor —
**1751-1794.** O pencerede gerçekten sınırdaş olanları ölçtüm (126
noktanın Voronoi komşularının o penceredeki kimlikleri):
```
OSMANLI · umman · buhara · turkmen · benihalid · afgan-durrani ·
gurcistan · rusya · suud · sind · hive  + aile   =  16 engel
```
23 engelde kutu doluydu, 16 engelde dolu değil.

📌 **"Yer yok" hükmü, yanlış pencereyle ölçülmüş bir hükümdü** — ve bu
`hokand` dersinin **ikinci vakası**: fazla temkin de bir ölçüm hatasıdır.
İkisi de "ölçtüm" der, ikisi de yanlış cevap verir.

### 🟢 Ve kullanıcının tarifi bu sefer LAFZEN işledi
`iran` bloğu *"tarifin RUHU sağlanıyor, LAFZI sağlanamıyor"* diye not
düşmüştü. Beşinci üye geldi ve **beş basamaklı parlaklık merdiveni** doğdu:
```
afsar   L* 80,7        safevi  L* 73,5        kacar  L* 70,3
iran    L* 65,6        zend    L* 60,6   ← en alt basamak
```
`zend` ton 341,8° · hanedan ailesinin merkezi 342,0° — **tam ortasında.**
```
afgan-durrani 13,2 | buhara 13,2 | kacar 13,4 | safevi 14,8 |
iran 18,4 | afsar 21,4 · altlıktan 26,7 · C* 21,1 = paletin %47'si
```
⚠️ 13,2 ince — ama ailenin **kendi** iç mesafeleri zaten 12,0-16,5. Bu,
aileye katılmanın bedeli; bir gevşeme değil.

📌 **İlk aday `#8d24bd` REDDEDİLDİ.** Payı daha iyiydi (14,4) ama
`L* 65,1` ile `iran`ın 65,6 basamağına **oturuyordu** — merdiveni bozar,
ayrımı ton ve kromaya yıkardı. Üstelik C* 35,3 = paletin **%95'i**, yani
`#c03fab`ın (%88) reddedildiği "vurgu" bölgesi. **Yarım birim pay için
modelin kendisi feda edilmez.**

⇒ Aileyi ikiye bölmeye (`safevi+afsar` · `iran+kacar+zend`) **gerek kalmadı.**

---

## ⑰ 🔴 VE `_ek12` BİR ÇAKIŞMA DOĞURDU — `norvec ↔ portekiz`

`zend` yazıldıktan sonraki denetimde **yeni** bir çift düştü:
```
7,4   norvec #5c6bc0  ↔  portekiz #6b8ac9
```
`zend`den değil. **`_ek12` (İzlanda) bağlanmasından.**

📌 **VE BU ÖNGÖRÜLMÜŞTÜ.** `izlanda`yı yazarken ölçüp bildirmiştim:
*"Kuzey Atlantik'te İzlanda'nın peteği İskandinavya'ya değil GÜNEYE
uzanıyor; komşuları Britanya adaları ve İber yarımadası."* O petek
Norveç ile Portekiz arasındaki koridoru **açtı** ve iki gövde komşu oldu.

⇒ Hangisinin taşınacağı ölçüldü, cevap tartışmasız:
```
portekiz   49 komşu  ← paletin EN KISITLI düğümü (dünya çapındaki
           ticaret üsleri her kıtaya komşu) · en iyi pay 15,1 · 732 aday
norvec     12 komşu  · en iyi pay 17,6 · 19.101 aday
```
`norvec → #e76690`. ingiltere 17,6 · hollanda 18,2 · danimarka 20,1 ·
portekiz 27,6 · C* 24,2 = %66. Osmanlı şeridi (15-35°) dışlandı — şeritsiz
ilk aday `#e799b1` ton 25,2 ile tam içine düşüyordu.
`#5c6bc0` beyanı **kaldırıldı**: geriye yalnız `vollayta` kaldı, ortada
paylaşım yok.

### 📌 ÜÇÜNCÜ KEZ AYNI DERS
```
cungar ↔ buhara      Mâverâünnehir partisi bağlanınca doğdu
norvec ↔ portekiz    _ek12 bağlanınca doğdu
```
**Palet verinin fonksiyonudur.** Hiçbir hex'e dokunmadan, yalnız nokta
ekleyerek çakışma yaratılabilir. ⇒ **Parti bağlayan her koşudan sonra
`renk_olc.py` koşulmalı.**

---

## ⑱ BAĞLANTI — Emre'nin hükmü, aylardır açık duran kusuru da çözüyor

`renk_olc.py` her koşuda şunu bildiriyor ve kimse kapatamıyordu:
```
AYNI ANAHTARI PAYLAŞIP TARİHİ ÖRTÜŞEN — 1 çift (ΔE 0!)
  iran   afsar (1736→1796) ↔ kacar (1789→1923)
         örtüşme 1789-03-21 → 1796-01-01 — AYIRT EDİLEMEZLER
```
Kökü ölçüldü:
```
safevi   harita='safevi'    ✓
afsar    harita='iran'      ← ikisi de `iran`a bakıyor
kacar    harita='iran'      ←
zend     harita=None
```
İki hanedan künyesi aynı harita anahtarına bakıyor, o yüzden 1789-1796
arası **aynı renge** boyanıyorlar — ΔE 0, mümkün olan en kötü hâl.

🟢 **Emre'nin hükmü tam olarak bunu çözüyor.** *"Diğer iranları hanedanı
ile anmak"* demek, künyelerin `harita:` alanının da hanedana bakması
demek:
```
afsar  harita='afsar'      renk #f488fc  ZATEN VAR
kacar  harita='kacar'      renk #c840a8  ZATEN VAR
zend   harita='zend'       renk #691569  BUGÜN YAZILDI
```
⇒ Üç rengin **üçü de hazır**; eksik olan yalnız künyelerin `harita:`
alanı — ve o `devletler.js`, benim dosyam değil.
📌 Yani `zend`in taşınması yalnız 126 noktayı serbest bırakmıyor, **aylardır
açık duran ΔE 0 kusurunu da kapatıyor.** Aynı iş.

### ÖLÇÜM
```
BOYALAR      239        canlı veri 1800 nokta · künye 308
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    2 öneri · 0 fark                        ✓
açık kalan   afsar↔kacar aynı-anahtar (devletler.js işi, yukarıda)
```

### ⚠️ COMMIT UYARISI
`arac/renkler.py` (+290 satır) ve `arac/renk_olc.py` (+36) **hâlâ
commit'siz** — `git status` ikisini de `M` gösteriyor. Bugünkü on üç
rengin tamamı bu iki dosyada ve **tek bir `git checkout --` hepsini
siler.** Commit koordinatörün (`§7`); hatırlatıyorum.

---

## ⑲ `galzay  #72c978` — 7 Ağustos

TDV `kandehar`: Galzaylar 1709'da Kandehar'ı aldı, 1738'de Nâdir Şah geri
aldı. Canlı `Kandehar` kaydı bugün **`s: iran 1709-04-21 → 1747-06-20`**,
yani 38 yıl tek parça. Bölme noktası veride zaten hazır.

Komşuluk `Kandehar` peteğinin 1709-1738 penceresinden ölçüldü (`zend` ve
`ryazan` ile aynı yöntem — kimliğin 0 penceresi var, araç ölçemez):
```
safevi · afsar (Herat · Hâş · Zerenc) · sind (Şikârpûr) ·
babur-imparatorlugu (Gazne) · buhara (Belh)
```

### 🔴 Afgan ailesine KONMADI — iki gerekçe aynı yöne bastı
**Tarihî:** Galzay (Hotakî/Gilzay) ile Dürrânî (Abdâlî) **ardıl değil
RAKİP** Peştun konfederasyonlarıydı. Nâdir Şah Hotakîleri ezdi; Dürrânî
devleti dokuz yıl **sonra**, araya `afsar` girerek doğdu. Bu,
`afgan-durrani → afganistan` (doğrudan hanedan devri, aile doğruydu) ile
aynı şey değil — burada aile **yanlış** olurdu.

**Ölçüm:** aile bandında (ton 8,8°±18, L\* 66-76 basamağı) **aday SIFIR.**

⇒ `afgan-durrani`den ΔE **>25** · `afsar`dan **>25**: hem Dürrânî ayrımı
hem 1738 Galzay→Afşar geçişi haritada net.

### ⚠️ İki aday ölçülüp elendi — ikisi de "okuma hatası" sınıfı
```
① #3fb193  pay 25,3 (en iyisi) ama cungar #3fb4a2'den ΔE 2,9
           komşu değiller, hiçbir denetim ateşlemezdi — ama ikisi
           1709-1738'de EŞZAMANLI ve aynı geniş coğrafyada
② #3f5db1  estonya #3f63b4'e yakın. Ne çağdaş ne bölgesel (1709
           Kandehar / 1918 Baltık), yani kural ihlali YOK; yine de
           palette iki neredeyse-aynı mavi tutmamak için elendi
```

📌 **Ve buradan bir kural çıktı:** son turda **bu oturumda yazdığım on iki
rengin hepsi engel sayıldı** (27 engel). Bir oturum kendi ürettiklerini de
engel saymalı — yoksa her renk tek tek temiz çıkar, palet toplu hâlde
bulanıklaşır. Denetim çiftler üzerinden bakar; **birikme** göremez.

ÖLÇÜM: yarkent-hanligi 15,2 · sind 15,4 · cungar 15,4 ·
cin-cumhuriyeti 15,5 · umman 16,5 · qing-hanedani 19,2 ·
altlıktan 24,4 · C* 28,5 = paletin %75'i

⚠️ Künye yok — koordinatör yazacak.

### ÖLÇÜM
```
BOYALAR      240        canlı 1800 nokta · künye 314
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    3 öneri · 0 fark                        ✓
```

---

## ⑳ ALTI RENK BİRDEN — `ryazan` + beş İlhanlı sonrası hanedan · 7 Ağustos

⚠️ Önce bir düzeltme: koordinatör *"`zend` · `galzay` · **`turkmen`** yazdın"*
dedi. **`turkmen`i yazmadım** — `#00acc1`, oturum başından beri aynı.
Yazdıklarım `zend` ve `galzay`. (`YASALAR B10` övgü için de geçerli.)

### 🟢 `ryazan  #cce787`
Künye geldi (1129-01-01 → 1521-01-01) ama `harita:` alanı hâlâ boş.
Renk 6 Ağustos'ta ölçülmüştü; **güncel palete karşı yeniden sınandı** ve
geçerli çıktı: rusya 20,3 · lur-i-buzurg 21,5 · litvanya 22,6 · kirim 28,6.
⚠️ Hatırlatma: bu renk **tek başına hiçbir şey boyamaz** — canlı `Ryazan`
noktası hâlâ `s: rusya 1281-1923` taşıyor. Sıra: künye → **nokta dönemleri**
→ renk. Ortadaki adım PETEK/NOKTA'da.

### 🟢 Beş hanedan — BİRLİKTE çözüldü
Hiçbirinin veride penceresi yok ⇒ araç beşini de ölçemez. Her biri için
coğrafî çekirdeğine en yakın noktanın peteği alınıp **o kimliğin kendi
penceresindeki** komşuları ölçüldü:
```
lur-i-buzurg [Zagros içi]  ilhanli · iran · timurlu
lur-i-kucek  [Luristan]    ilhanli · safevi · iran · karakoyunlu ·
                           akkoyunlu · timurlu · celayirli · OSMANLI
kutlughanli  [Kirman]      ilhanli
incu         [Şiraz]       ilhanli · iran
muzafferi    [Şiraz]       ilhanli · iran
```

**Mor aileye konmadılar.** Aile `safevi→afsar→zend→kacar` **ardışık**
çizgisidir; bu beşi birbirinin ardılı değil **çağdaşı**. `karkiya`/`marasi`
hükmünün aynısı: kural ardışıklığa bakar, coğrafyaya değil.

Dağılım **120 permütasyon** denenerek en dar payı en büyük yapan seçildi:
```
kimlik         renk      kendi ölçülen komşularından ΔE
lur-i-buzurg   #456627   17,3        lur-i-kucek  #246f90   19,6
kutlughanli    #513921   28,5        incu         #75c0db   27,9
muzafferi      #2154db   20,1
kardeşler arası: en dar 13,0 (lur-i-kucek↔incu) · en geniş 48,0
```

### 🔴 VE BİR TUZAK ÖLÇÜLEREK BULUNDU — yeni kural
İlk turda `kutlughanli` (…1306) ile `muzafferi` (1318…) **zaman
örtüşmediği** için birbirinin engeli sayılmadı. Sonuç:
```
kutlughanli #513321        muzafferi #513921        ← neredeyse aynı kahve
```
İkisi de **Kirman bölgesi** ve arada yalnız **12 yıl** var. Kullanıcı zamanı
kaydırınca hanedan değişimini **hiç göremezdi** — ve **denetim de göremezdi**,
çünkü eşzamanlı olmadıkları için ortada çift kurulmuyor.

📌 **KURAL: aynı coğrafyada ARDIŞIK olanlar da ayrışmalı.** Eşzamanlılık
ölçütü *komşuluk* için doğru, **okunabilirlik** için yetersiz. Bu, bugünkü
üçüncü "denetimin göremediği" sınıf:
```
estonya ↔ meiji     aynı çağ, farklı kıta   → komşu değil, denetim kör
mogolistan ↔ meiji  aynı çağ, aynı bölge    → komşu değil, denetim kör
kutlughanli ↔ muzafferi  aynı bölge, ardışık → EŞZAMANLI DEĞİL, denetim kör
```
Üçü de `renk_olc` için görünmez; üçü de kullanıcı için görünür.

### ÖLÇÜM
```
BOYALAR      240 → 246       canlı 1800 nokta · künye 317
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    6 öneri · 0 fark                        ✓
```

### KALAN
```
🟡 ryazan     renk hazır ama NOKTA DÖNEMLERİ bekliyor (PETEK/NOKTA)
   40 renksiz kimlik — bengal-sultanligi 22 · kenmu 17 · fransiz-cinhindi 16
```

---

## ㉑ KİLİT SÜRESİNCE — kalan 40 kimlik ölçüldü, YAZILMADI

🔒 `arac/renkler.py` **17:03'ten beri kilitli** (koşu sürüyor). Son yazımım
16:54:23, koşu ondan sonra başladı — dosya donmuş, dokunmadım. Ölçüm
salt-okunur yapıldı; öneri `denetim/oneri-renk2-kirk-kilitte.txt`e bırakıldı.

```
renksiz kimlik 40 · toplam 238 pencere · hiçbirinin künyesi yok
çözülen 40/40 · en dar pay 19,1 · mevcut paletle çakışma 0
```
Bunların veride penceresi **var**, yani `komsuluk()` doğrudan ölçüyor —
önceki partilerin "0 pencere" zorluğu burada yok.

### 🔴 VE BU PARTİ, KENDİ KURALIMI İKİ KEZ SINADI

**① tur — yalnız komşular engel sayıldı. Kendi kuralımın ihlali çıktı:**
```
bengal-sultanligi #e4a8d2  ↔  bengal-nevabligi #deaed2   AYNI PEMBE
   aynı bölge · ARDIŞIK (1338-1592 → 1717-1764) · eşzamanlı DEĞİL
ve yedi ayrı kimlik #1e7xe4 civarında AYNI MAVİ
```
Tam olarak bir önceki kalemde (`kutlughanli ↔ muzafferi`) bulduğum tuzak —
ve onu bulan oturum, aynı gün tekrar düştü. 📌 **Bir dersi YAZMAK, onu
uygulamak değildir.** Kural `renkler.py`ye girmişti ama ölçüm betiğine
girmemişti.

**② tur — kırkını TAM KARŞILIKLI ayırdım. Bu da yanlıştı, ölçüldü:**
```
çözülen 29/40 · onbiri ÇÖZÜLEMEDİ
```
Ve yalnız pratik olarak değil, **tasarım olarak** yanlış. `renkler.py`
başlığı: *"bir rengi birden çok devletin paylaşması sorun değildir — yeter
ki o devletler tarih boyunca hiç komşu olmasın."* Tam ayırma, paletin
kendi paylaşım ilkesini iptal ediyordu.

**③ tur — DOĞRU ÖLÇÜT: COĞRAFÎ YAKINLIK.** Ve projenin **kendi eşiği**
zaten var: `renk_olc.AYNI_HEX_ESIK_KM = 600` (türetimi orada yazılı —
ateşlemesi gereken çift 312 km'de, susması gereken en yakın meşru çift
1.232 km'de, geometrik orta ≈620).
```
780 ikili ölçüldü · 94'ü 600 km'den yakın → karşılıklı engel
686'sı uzak → renk paylaşabilirler, ekranda yan yana gelmezler
sonuç: 40/40 · 94 yakın çiftin ESİĞİN ALTINDA olanı: 0
bengal çifti artık ΔE 35,0
```

📌 **Üç turun dersi tek cümle:** eşzamanlılık *komşuluk* için doğru ölçüt,
**okunabilirlik** için yakınlık gerekiyor — ve "hepsini ayır" da bir ölçüt
değil, ölçütten kaçış. Aracın içinde doğru eşik zaten duruyordu; onu
`ayni_hex()`ten alıp seçime taşımak yetti.

### UYGULAMA — kilit kalkınca
```bash
# renkler.py'ye 40 satır, sonra:
py arac/renk_olc.py --dogrula denetim/oneri-renk2-kirk-kilitte.txt
```
⚠️ Kırkının da **künyesi yok** — renk deliği kapatır ama dizin penceresinde
karşılığı olmaz. Künyeler VERİ DEVLET'te.

### En yüklü on kalem
```
bengal-sultanligi 22 · kenmu 17 · fransiz-cinhindi 16 · haydarabad-nizam 15
bengal-nevabligi 13 · san-fan 13 · yadava 12 · dashun 12 · avad 9 ·
cavnpur-sultanligi 8
```

---

## ㉒ AFRİKA BOYNUZU / SUDAN — dört kimlik ölçüldü, YAZILMADI

🔓 Kilit kalktı, `r890` canlıda. Ama bu dört kalem **yazılmadı** ve sebebi
koordinatörün kendi sevki: *"künye yazılmadan renk yazma."* Ölçtüm —
**dördünün de künyesi yok** (317 künye tarandı).

```
evfat              #2ad8ba      dacu       #4b21ab
tunciler           #b4963f      makdisu-s. #cf69a8
```
Hazır dosya: `denetim/hazir-renk2-kunye-bekleyen.txt`

### Ölçüm — dördünün de veride 0 penceresi var
Her biri için coğrafî çekirdeğine en yakın noktanın peteği alınıp o
kimliğin **kendi penceresindeki** komşuları ölçüldü:
```
evfat     [Ankober]   1285-1415   habesistan · sidamo · adal
dacu      [Darfur]    1200-1400   darfur
tunciler  [Darfur]    1400-1603   darfur
makdisu   [Mogadişu]  1250-1600   somali · portekiz · travankur
```

### 🔴 600 KM EŞİĞİ BU KÜMEDE YETMEDİ — koordinatör haklıydı
Sevk *"DSATUR dengesini o küme içinde ölç"* diyordu. Ölçtüm ve **niçin
gerektiğini gördüm**: `evfat` ile `makdisu` arası **1035 km**, yani
projenin 600 km eşiğinin dışında ⇒ kural onları bağlamıyordu. İlk tur
ikisine de turkuaz verdi:
```
evfat #21decf      makdisu #2ad5b7      ← ikisi de Afrika Boynuzu
```
Kümeyi bütün olarak engel sayınca düzeldi: **küme içi en dar çift 25,1.**

📌 Ve bu, 600 km eşiğinin bir sınırı: eşik `ayni_hex()` için türetilmişti
(*"arada başka devletin şeridi vardır, aynı ekranda bitişik görünmezler"*).
Ama **aynı ekranın aynı köşesinde** duran iki gövde için 600 km az
kalabiliyor — Afrika Boynuzu dar bir kuşak. ⇒ Eşik iyi bir taban, **küme
bilgisi onu ezebilir.**

### 🔴 DARFUR ZİNCİRİ — üç ardışık hanedan, aynı toprak
`dacu` → `tunciler` → `darfur`. Tam olarak `kutlughanli ↔ muzafferi`
vakasının üç üyelisi.
```
dacu ↔ tunciler   55,8        dacu ↔ darfur      33,3
tunciler ↔ darfur 45,4        evfat ↔ adal       35,6
```
⇒ Hanedan değişimleri haritada **görünür**; kullanıcı zamanı kaydırınca
Darfur'un üç devrini üç ayrı renkte görecek.

---

## ㉓ 🔴 DARBOĞAZ ARTIK RENK DEĞİL — KÜNYE

Bugünkü ölçümün en önemli bulgusu bu:
```
kimlik                          renk        künye     bekleyen
40 renksiz kimlik (238 pencere)  ✓ hazır    🔴 YOK    238 pencere
evfat · dacu · tunciler · makdisu ✓ hazır   🔴 YOK      4 kimlik
muzafferi · incu · kutlughanli   ✓ YAZILI   ✓ VAR     İran 1335-1501
                                                       (Emre erteledi)
ryazan                           ✓ YAZILI   ✓ VAR     nokta dönemleri
                                                       (PETEK/NOKTA)
```
⇒ **Renk ekseninde bekleyen iş kalmadı.** 44 kimliğin rengi ölçülü ve
uygulamaya hazır; hiçbiri renk yüzünden beklemiyor. **238 pencerelik
harita deliği bugün künye darboğazında duruyor.**

📌 Oturumun başında darboğaz *"üç kimlik renksiz"*ti. Bugün kırk dört
kimliğin rengi hazır ve darboğaz **bir sonraki halkaya geçti**. Bu, işin
bittiği anlamına gelmiyor — **nerede olduğunun değiştiği** anlamına
geliyor, ve koordinatörün sırayı ona göre kurması gerekiyor.

---

## ㉔ DÖRT RENK YAZILDI — künye geldi, küme çözüldü

```
evfat #2ad8ba · dacu #4b21ab · tunciler #b4963f · makdisu-sultanligi #cf69a8
BOYALAR 246 → 250 · denetim temiz · --dogrula 4 öneri · 0 fark
```

⚠️ **Pencereler devralınmadı, künyeden ölçüldü** (`B10`) — ve ikisi benim
hazırlık ölçümümden farklı çıktı:
```
tunciler   hazırlıkta 1400-1603   künyede 1400-1695   (+92 yıl)
makdisu    hazırlıkta 1250-1600   künyede 1281-1500   (dar)
```
Komşu kümeleri yeniden ölçüldü; tek fark `makdisu`nun `portekiz`i
kaybetmesi — **Portekizliler 1500'den sonra geliyor**, yani dar pencere
daha doğrusunu veriyor. Renkler geçerli kaldı.

📌 ~~Ve `tunciler` 1400-1695 ile `darfur` 1603-1916 ÖRTÜŞÜYOR~~ —
**DÜZELTME (7 Ağustos, aynı gün):** koordinatör `darfur`un başlangıcını
1603 → **1695**'e çekti; zincir artık **kesintisiz ve örtüşmesiz**:
`dacu 1200-1400 → tunciler 1400-1695 → darfur 1695-1916`.
Ayrışma yine de şart (aynı toprak, ardışık) ve ölçüm 45,4 veriyor —
yani renk kararı değişmiyor, yalnız GEREKÇESİ değişiyor: eşzamanlılık
değil ardışıklık.
📌 Ders: bir ölçüm doğru olabilir ve yine de BAYATLAYABİLİR. Devraldığın
sayıyı doğrulamak yetmiyor (`B10`), KENDİ ölçtüğün sayının hâlâ geçerli
olup olmadığına da bakmak gerekiyor.

### 🔴 600 km eşiği bu kümede yetmedi — sevk haklıydı
`evfat` ↔ `makdisu` **1035 km**, yani `AYNI_HEX_ESIK_KM = 600`in dışında
⇒ kural onları bağlamıyordu ve ilk tur **ikisine de turkuaz** verdi
(`#21decf` / `#2ad5b7`). Dördü küme olarak engel sayılınca düzeldi:
**küme içi en dar çift 25,1.**
📌 Eşik `ayni_hex()` için türetilmişti (*"arada başka devletin şeridi
vardır"*). **Aynı ekranın aynı köşesinde** duran iki gövde için az
kalabiliyor. Eşik iyi bir taban; **küme bilgisi onu ezer.**

### Darfur zinciri
```
dacu ↔ tunciler   55,8      dacu ↔ darfur      33,3
tunciler ↔ darfur 45,4      evfat ↔ adal       35,6
```

⚠️ **Dördünün de künyesinde `harita:` alanı BOŞ** (328 künye tarandı).
Oturum boyunca dördüncü kez: `hokand` · `sibir` · `ryazan` · şimdi bu dört.
Renk harita deliğini kapatıyor, **dizin penceresi açık kalıyor.**

---

## ㉕ 📌 VE BİR DERS KENDİNİ KANITLADI

Bu kalemi yazarken **aynı vekil-çift (surrogate) hatasına tekrar düştüm** —
`\\ud83d\\udccc` gibi kaçışlar Python kaynağında bölünmüş vekil oluyor ve
`UnicodeEncodeError` atıyor. 6 Ağustos'ta bu hata ilerleme dosyasını
**bir commit boyunca boşaltmıştı**.

**Bu sefer boşalmadı.** Sebebi o gün yazdığım kural:
```
önce .tmp'ye TAM metni yaz  →  sonra os.replace ile atomik taşı
```
İstisna `.tmp`ye yazarken patladı, `os.replace` **hiç çalışmadı**, asıl
dosya 1055 satırıyla el değmeden kaldı.

📌 **Bir dersi yazmak onu uygulamak değildi** (kırk partisinde öyle oldu) —
ama **alete gömülen ders, unutulsa bile çalışıyor.** Fark şu: kırk
partisinde ders bir *kurala* yazılmıştı ve ben onu hatırlamak zorundaydım;
burada bir *yordama* yazılmıştı ve hatırlamama gerek kalmadı.
⇒ Kuralı yazmak yetmiyor; **kuralı imkânsız-ihlal-edilir hâle getirmek**
gerekiyor. `renk_olc.py`nin `--dogrula`sı da bu cinsten bir alettir.

---

## ㉖ KIRK RENK YAZILDI — 238 pencerelik delik kapandı

Koordinatör **GEVŞEK** dedi; kırkını künye beklemeden yazdım.
```
BOYALAR 250 → 290 · denetim temiz · --dogrula 41 öneri · 0 fark
```

### ⚠️ Önce bir düzeltme: noktalar kuyrukta DEĞİL, CANLI
Koordinatörün gerekçesi *"kırkının da noktaları KUYRUK dosyalarında"*
diyordu. Ölçtüm:
```
238 pencerenin 238'i  yerlesimler_asya.js
ve o dosya GIRDI_DOSYALARI'nda → CANLI
```
⇒ Delik kuyrukta değil, **`r890`'ın kendisinde**. Gerekçe yanlıştı ama
**karar doğruydu ve daha da haklıydı**: bugün yayında görünen bir kusur.
📌 `CLAUDE.md:442` `yerlesimler_asya.js`i hâlâ *"HENÜZ BAĞLANMAMIŞ, merge
bekleyen"* gösteriyor — bayat satır, bildirildi. (`§5`in kendi anlattığı
`yerlesimler_afrika.js` vakasının aynısı.)

### 🔴 VE BU PARTİ ÖLÇÜTÜ OLGUNLAŞTIRDI — v1 çürütüldü
Kilit sırasında hazırladığım v1 yalnız **ölçülen Voronoi komşularını**
engel sayıyordu. Yazmadan önce bağımsız doğrulama koştum ve **12 ihlal**
buldu — komşu ÇIKMAYAN ama 600 km içinde olan kimliklerle:
```
tran-hanedani ↔ le-hanedani       0 km · ΔE  8,8   (ikisi de Vietnam)
kakatiya      ↔ bidar             0 km · ΔE  5,3
pandya        ↔ delhi-sultanligi  0 km · ΔE  7,1
singhasari    ↔ mataram           0 km · ΔE  8,6
surakarta     ↔ banten          544 km · ΔE  7,7
```
📌 **Voronoi komşuluğu "hücreler değiyor mu" der; 600 km "aynı ekran
köşesinde mi" der.** Okunabilirlik için doğru ölçüt ikincisidir — hücre
değmiyor olabilir ama iki gövde ekranda yan yana durur.

⇒ v2'nin engel kümesi: ölçülen komşular + **600 km içindeki HER palet
kimliği** + 600 km içindeki daha önce seçilmiş yeniler. Kimlik başına
ortalama **14,7 yakın palet kimliği**, 30-39 engel.
```
40/40 çözüldü · en dar pay 14,1 · bağımsız denetimde 0 ihlal
```

⚠️ **Ve v1'i YAZMADAN ÖNCE denetlediğim için yakalandı.** Kilitte
hazırlanmış, "hazır" diye işaretlenmiş bir artefakttı; doğrulamasaydım
kırk rengin on ikisi kusurlu girecekti. **Hazır demek doğru demek
değildir** — `--dogrula`nın var oluş sebebi bu.

---

## ㉗ 🔴 ÜÇÜNCÜ KEZ: PALET VERİNİN FONKSİYONUDUR

Kırkı yazınca **yeni** bir çakışma düştü:
```
10,5   cohor-sultanligi #7e723c  ↔  kamboc-kralligi #8d6e63
```
İkisi de benim rengim **değil** ve ikisi de bugün **değişmedi** —
`git diff` ikisine de dokunmadığımı gösteriyor. Ölçtüm: çift `HEAD`'de de
ΔE 10,5 ve komşu. Ama sabahki denetimlerim **temizdi**.

⇒ Aradaki tek fark **veri**: gün içinde başka oturumlar dönemleri
değiştirdi ve iki gövde eşzamanlı komşu oldu.
```
cungar ↔ buhara     Mâverâünnehir partisi bağlanınca      10,5
norvec ↔ portekiz   _ek12 (İzlanda) bağlanınca             7,4
cohor  ↔ kamboc     gün içi dönem değişiklikleriyle       10,5
```
📌 **Hiçbir hex'e dokunmadan çakışma doğabilir.** Veriye dokunan her
koşudan sonra `renk_olc.py` koşmalı; *"renkler değişmedi, denetim de
değişmez"* üç kez yanlış çıktı.

Taşınacak olan ölçüldü: `cohor` 18 engel · pay 20,0 · `kamboc` 26 engel ·
ancak 15,9 (ve `#8d6e63` paylaşımını da bozardı). Ucuz olan taşındı:
`cohor-sultanligi → #eab463`.

### ÖLÇÜM
```
BOYALAR      250 → 290        canlı 1800 nokta · künye 328
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0     ✓
--dogrula    41 öneri · 0 fark                       ✓
renk_cikti   ① cohor eski renkle çizili → koşu bekliyor
```
⚠️ Kırkının da künyesinde karşılık yok — koordinatörün kararıyla (GEVŞEK)
bilerek böyle. Renk deliği kapatır, dizin penceresi açık kalır.

---

## ㉘ SON PARTİ — dokuz kimlik yazıldı, koşunun önü açıldı

```
BOYALAR 290 → 299 · denetim temiz · --dogrula 9 öneri · 0 fark
savoya #12129f · floransa #deabd8 · bonacolsi #421542 · imereti #deea90
gurcistan-demokratik-cumhuriyeti #90eab1 · poni #1ee7ea · sanzan #1884e7
astarhan #482d15 · irlanda-serbest-devlet #ea8751
```

### Ardıl çiftleri — koordinatörün asıl kaygısı, hepsi ölçüldü
```
savoya ↔ sardinya          42,0            floransa ↔ toskana   16,4  (0 km!)
bonacolsi ↔ mantua         25,3  (0 km)    imereti ↔ gurcistan  47,2  (0 km)
gurcistan-dem-cum ↔ gurcistan 38,6         sanzan ↔ ryukyu      33,1
poni ↔ brunei              58,8            irlanda-hür ↔ irlanda 51,5
astarhan ↔ altinorda       18,4
```
En dar ardıl çifti `floransa ↔ toskana` (16,4) ve ikisi **aynı noktada** —
yani Floransa Cumhuriyeti'nin 1532'de Toskana Dükalığı'na dönüşmesi haritada
görünür kalıyor.

### 🔴 VE ÖLÇÜT BİR KEZ DAHA SIKILAŞTI — ters yönde
Kırk partisinde *"tam karşılıklı ayırma yanlış, 600 km doğru ölçüt"*
demiştim. Bu partide **tersi çıktı** ve ikisi çelişmiyor:
```
600 km kuralı savoya(Torino) ↔ imereti(Kutaisi) 3000 km'yi BAĞLAMIYORDU
⇒ ilk tur ikisine de aynı laciverti verdi (#12129f / #1221ae)
⇒ bonacolsi / gurcistan-dem-cum'a da aynı açık yeşili
```
Dokuzu karşılıklı engel yapınca düzeldi ve **bedeli sıfır oldu** — havuz
156k, 9/9 çözüldü, en dar pay 14,6.

📌 **Fark parti büyüklüğünde:** kırk kimlikte tam ayırma çözülemiyordu
(29/40) çünkü palet o kadar ayrı renk taşımıyor; dokuzda taşıyor.
⇒ Kural şu: **600 km bir TABAN, tam ayırma bir TAVAN.** Parti küçükse tavana
çık (bedeli yok), büyükse tabana in (tavan çözülmez). İkisinin arasında
seçim yapmak ölçümün işi, kuralın değil.

### 🟢 VE BİR EŞİK GEÇİLDİ
```
veride penceresi olan RENKSİZ kimlik:  0
```
Oturum açılışında bu sayı 3'tü (`sibir-hanligi` · `estonya` · `izlanda`),
gün içinde 40'a çıktı (bağlanan partilerle), şimdi **sıfır.**
Haritada renk yüzünden boyanmayan tek bir pencere kalmadı.

⚠️ Sıradaki iki kimlik şimdiden görünüyor: `ermenistan` ve `azerbaycan`
palette yok. Bugün veride 0 pencereleri var, ama `gurcistan-demokratik-
cumhuriyeti`nin verisi indiğinde Kafkasya'nın 1918-1921 üçlüsü tamamlanacak
ve o ikisi gerekecek. Koordinatöre bildirildi.

---

## ㉙ KİLİT — taban alındı, Kafkas üçlüsü hazırlandı

🔒 `renkler.py` donmuş; son yazım koşudan önce. Kilit boyunca yalnız
`denetim/` ve `oturumlar/`a yazıldı.

### ⚠️ ÖNCE BİR AYRIM — koşu hangi nöbetçiyi vuracak
Koordinatör *"bu koşu senin 'palet verinin fonksiyonudur' kuralının en
büyük sınavı olacak"* dedi. Doğru, **ama sınav `renk_olc`'de değil
`renk_cikti`'de:**
```
renk_olc    komşuluğu NOKTALARDAN kurar (Voronoi + dönem örtüşmesi)
            ⇒ 157 nehir · 163 engel poligonu bunu ETKİLEMEZ.
            Nokta kümesi değişmedikçe sonucu da değişmez.
renk_cikti  ÇİZİLİ gövdelerin birbirine değmesine bakar
            ⇒ nehirler ve engeller gövde şeklini DEĞİŞTİRİR
            ⇒ yeni değen çift buradan çıkar.
```
📌 Bugünkü üç çakışma (`cungar↔buhara` · `norvec↔portekiz` · `cohor↔kamboc`)
**nokta/dönem** değişiminden doğmuştu, yani `renk_olc`de göründü. Bu koşu
**geometri** değiştiriyor — beklenen kusur sınıfı farklı.
⇒ Koşudan sonra **ikisini de** koşacağım ve farkı ayrı ayrı bildireceğim.

### Taban kaydedildi (koşu öncesi)
```
canlı 1800 nokta · 299 kimlik · renkli komşu çifti 1579
renk_olc: görünmez 0 · çakışma 0 · aynı-hex 0
```
Koşudan sonra bu sayılarla karşılaştırılacak — *"0 çakışma"* demek yetmez,
**hangi çiftlerin doğduğunu** görmek gerekir.

### 🟡 KAFKAS ÜÇLÜSÜ — ölçüldü, yazılmadı
`denetim/hazir-renk2-kafkas-uclusu.txt`
```
gurcistan-demokratik-cumhuriyeti  #90eab1   (YAZILI)
ermenistan                        #1221ae   pay 20,5
azerbaycan                        #eacf75   pay 20,7
ermenistan ↔ azerbaycan 61,5 · ↔ GDC 57,0 / 21,1
```
Üçü **birlikte** ölçüldü: GDC verisi tek başına inerse komşuları `rusya`
görünür ve 1918-1921 Kafkasyası yanlış boyanır.

📌 Ve burada **TAVAN kuralı** uygulandı (küçük parti ⇒ tam karşılıklı
ayırma): üç kimlik için havuz bol, bedeli yok.

⚠️ İkisinin de künyesi yok; künye gelince **pencereler künyeden yeniden
ölçülmeli** — yukarıdaki tarihler standart akademik referanstan, künyeden
değil. (`darfur` 1603→1695 vakası: kendi ölçtüğün sayı da bayatlar.)

---

## ㉚ `arac/renk_fark.py` DOĞDU — "0 çakışma" demek niçin yetmiyor

Kilit sürerken bir alet yazıldı. Sebebi bugünün üç vakası:
```
cungar ↔ buhara     Mâverâünnehir bağlanınca      10,5
norvec ↔ portekiz   _ek12 bağlanınca               7,4
cohor  ↔ kamboc     gün içi dönem değişimiyle     10,5
```
Üçünde de denetim **önce temizdi**, hiçbir hex değişmedi, ve çift **veri
yüzünden** doğdu.

🔴 **Ve `renk_olc.py`nin "0 çakışma" satırı bunu göremeyebilir:** sayı sabit
kalıp **içerik** değişebilir. İki çift kapanıp iki yeni çift açılırsa toplam
yine `0` görünür. ⇒ Yeni alet **sayıya değil KÜMEYE** bakıyor:
```
py arac/renk_fark.py --taban     koşudan ÖNCE durumu kaydet
py arac/renk_fark.py             koşudan SONRA farkı bas
```
Raporladığı dört şey: **doğan** komşuluk çiftleri (ve hangileri eşiğin
altında) · var olan çiftlerden **eşiğin altına düşenler** · hex'i değişen
kimlikler · yeni kimlikler.

### Taban alındı
```
1800 nokta · 299 kimlik · 1579 komşu çifti · 0 çakışma
denetim/renk-taban.json
```

### 🔴 VE ALETİ İKİ YÖNDE DE SINADIM — biri eksik kalıyordu
`renkler.py`nin kendi uyarısı var: *"Ateşleme yolunu sınadım, geçme yolunu
değil."* Ben tersini yaptım ve **yakaladım:**
```
① geçme yolu   değişiklik yokken "TEMİZ" dedi           ✓
② ateşleme     sahte tabanla: doğan çift · hex değişimi ·
                yeni kimlik · nokta farkı — hepsi göründü ✓
                ama "eşiğin ALTINA DÜŞEN" hiç ateşlemedi 🔴
```
Sebep testimdi: bugün eşiğin altında çift **yok**, yani o kod yolu gerçek
veriyle hiç koşulamıyor. Eşiği geçici 25,0'a çekip zorladım — **132 düşen
çift** buldu, çıkış kodu **1**.

📌 **Ders: "alet çalışıyor" demek, aletin HER YOLUNU koşturmak demektir.**
Bir dalı hiç ateşlenmemiş bir denetim, o dal için denetimsizdir — ve bugün
tam o dal, koşudan sonra beklenen kusur sınıfını yakalayacak olan daldı.

⚠️ Sınav sırasında `denetim/renk-taban.json` bozuldu ve **yedeğinden geri
yüklendi**; taban şu an doğru (1800 · 299 · 1579 · 0).

### Koşudan sonraki sıram
```
① py arac/renk_fark.py       — komşuluk (nokta tabanlı) farkı
② py arac/renk_cikti.py      — ÇİZİLİ gövde farkı  ← asıl sınav burada
③ çıkan kusuru ölç ve kapat
④ künye gelmişse Kafkas üçlüsünü yaz
```
📌 Koordinatörün ilk ölçümü öngörüyü destekliyor: nehir 43 → **187**
(beklenen 157'ydi), dağ 126 → 163. Ren · Volga · Ganj · Yangtze · Nijer ilk
kez haritada — **Avrupa · Sibirya · Hindistan · Çin · Hindiçin · Batı
Afrika** gövdeleri doğal hatta yaslanacak. `renk_cikti`nin ilk kez kusur
göstermesi için en olası yer tam orası.

---

## ㉛ 🔴 `renk_cikti.py` ② BÖLÜMÜ SESSİZ BİR HİÇLİKTİ

Çıktı ekseninin tabanını alırken yakalandı — koşunun "büyük sınavı" olacak
nöbetçi **ölçmüyordu.**
```
öncesi:  toplam DEĞEN kimlik çifti: 0
         ✓ ÇİZİLİ HARİTADA ΔE<12 DEĞEN ÇİFT YOK / Ölçülen 0, çizilen 0'dır.
sonrası: toplam DEĞEN kimlik çifti: 653
```
Denetim *"baktım, bulamadım"* demiyordu — **hiç bakmıyordu**, ve tam da bunu
reddeden cümleyi basıyordu.

### Sebep — çıktı biçimi değişmiş, okuyucu izlememiş
```
_govde() varsayımı : parca[i] = poligonun HALKA LİSTESİ (ilk halka dış)
bugünkü gerçek     : DEVLET_PARCALAR[i]    = TEK halka [[lat,lon],…]
                     DEVLET_PARCA_HALKA[j] = halka İNDİS listesi
                     dnm[].g               = HALKA dizisini indeksliyor
```
Eski kod `len(halka[0]) < 4` diye eliyordu; yeni biçimde `halka[0]` tek bir
`[lat, lon]` çifti (uzunluk **2**) ⇒ her parça elendi ⇒ `aktif` her kesitte
boş ⇒ `continue` ⇒ sıfır.

### 📌 VE BU, SIFIRINCI BULGUNUN KARDEŞİ — ama daha kötüsü
Oturumun ilk saatinde `renk_olc.py`yi diriltmiştim: `BOLGE` L şekline dönünce
`^BOLGE\s*=\s*box\(` deseni tutmamış, araç ölmüştü. **Aynı sınıf:** okuyucu
kaynağın *tek bir biçimine* bağlanmış, kaynak değişince koruma korumayı
bırakmış.

**Fark ve asıl ders:**
```
renk_olc     BAĞIRARAK öldü  (SystemExit) → iki gün fark edilmedi
renk_cikti   SESSİZCE öldü   ("temiz")    → kim bilir kaç gün
```
Sabah *"gürültülü ölüm bile, dinleyen yoksa sessizdir"* yazmıştım. Bugünün
sonunda tersi de doğrulandı: **sessiz ölüm, dinleyen olsa bile duyulmaz.**
Gürültülü ölüm en azından koşturulduğu an belli eder; sessiz ölüm
koşturulunca da *"temiz"* der.

⚠️ **Tek işareti ÇIKTININ OLMAYAN KISMIYDI**: her kesit için
`"1500-06-15: NNN gövde çizili …"` basılmalıydı ve hiç basılmıyordu.
Sessizliği görmek için raporun **yok olan satırlarına** bakmak gerekti.
📌 Bu, `CLAUDE.md §11`in onuncu kusur sınıfının (*"aletin gösterdiği ≠
dosyada yazan"*) on birincisi: **aletin BASMADIĞI ≠ ölçtüğü.**

### Onarıldı — ve hüküm doğruymuş, ama tesadüfen
```
1300: 115 gövde · 1400: 121 · 1500: 113 · 1550: 112
1600: 102 · 1700:  90 · 1800:  77 · 1900:  53
toplam DEĞEN çift 653   ·   ΔE<12 olan: 0
```
🟢 Çizili haritada eşik altı çift **gerçekten yok**. Ama bugüne kadar bu,
ölçen bir denetimin değil **ölçmeyen** bir denetimin çıktısıydı.

### 🟡 Ve hiç görülmemiş 10 uyarı doğdu — "SINIRDA" tablosu ilk kez doldu
```
isvec         ↔ rusya      ΔE 12,3 · 123,21° sınır   ← en büyük maruziyet
ming-hanedani ↔ tibet      ΔE 14,2 ·  65,41°
funj          ↔ habesistan ΔE 12,2 ·  40,35°
adal          ↔ somali     ΔE 12,0 ·  27,95°
cungar        ↔ rusya      ΔE 14,5 ·  22,85°
fas ↔ ispanya 12,8 · buhara ↔ mogulistan 12,4 · habesistan ↔ somali 12,2
memluk ↔ nube 12,1 · gucerat-sultanligi ↔ racput 12,4
```
Aracın kendi kütüğü diyordu ki *"aynı ΔE tek noktada zararsız, sınır boyunca
ciddi"*. `isvec ↔ rusya` **123° sınır boyunca 12,3** — o kuralın en büyük
vakası ve bugüne kadar görünmüyordu. Hiçbiri ihlal değil, ama
**kullanıcının "ayırt edemiyorum" diyeceği en olası yerler bunlar.**

### TABAN ARTIK GERÇEK
`denetim/renk-cikti-taban.txt` → 653 çift · 0 ihlal · 10 sınırda.
Koşudan sonraki karşılaştırma **ilk kez anlamlı olacak**, çünkü taban ilk kez
gerçek bir ölçüm.

---

## ㉜ HAZIRLIĞIMDAKİ SLUGLAR YANLIŞMIŞ — ve `--dogrula` bunu yakalayamazdı

Koordinatör künyeleri yazdı (339 kayıt) ve id'ler benim hazırlığımdakinden
**farklı** çıktı. Ölçtüm:
```
hazırlığımda      künyede
ermenistan   →    ermenistan-demokratik-cumhuriyeti   1918-05-28 → 1920-12-02
azerbaycan   →    azerbaycan-demokratik-cumhuriyeti   1918-05-28 → 1920-04-27
                  gurcistan-demokratik-cumhuriyeti    1918-05-26 → 1921-03-16 ✓
`ermenistan` ve `azerbaycan` künyede HİÇ YOK.
```
Slugları **standart akademik addan türetmiştim** — künyeden değil. Kendi
kuralımın vakası: *"kendi ölçtüğün sayı da bayatlar"*, ve burada sayı bile
değil **ad** bayattı.

### 🔴 VE ASIL BULGU: `--dogrula` BUNU YAKALAYAMAZDI
Hazırlığı körü körüne uygulasaydım `ermenistan` ve `azerbaycan` adlarını
`BOYALAR`a **yazmış** olurdum. `--dogrula` da onları orada bulup **"0 fark"**
derdi — çünkü aktarım denetimi *yazılanı öneriyle* karşılaştırır,
**önerinin kendisini künyeyle karşılaştırmaz.**

Sapma ancak şöyle görünürdü: gerçek sluglar (`…-demokratik-cumhuriyeti`)
renksiz kalır, harita 1918-1921 Kafkasyasında **delik** verir, ve palette
hiçbir zaman boyanmayacak **iki ölü kimlik** birikir.

📌 **Ders: slug künyeden alınır, addan türetilmez.** Ve daha genel olarak:
```
--dogrula     yazdığımı ÖNERİMLE karşılaştırır      (aktarım doğru mu)
YAKALAMAZ     önerimin KÜNYEYLE uyumunu             (öneri doğru mu)
```
Bu, bugünün *"'hazır' demek 'doğru' demek değildir"* dersinin ikinci hâli —
kırk partisinde öneri **ölçüt** bakımından çürüktü, burada **kimlik**
bakımından. İkisinde de artefakt "hazır" görünüyordu.

⇒ `denetim/hazir-renk2-kafkas-uclusu.txt` v2 olarak düzeltildi; renkler aynı
(ölçüm coğrafyaya bağlı, ada değil), yalnız anahtarlar künyeden alındı.
Bir de tarih: azerbaycan bitişi **1920-04-27** (v1'de 04-28) — TDV
cumhuriyetin sonunu ardılı SSC'nin kuruluşundan ayırıyor.

---

## ㉝ SINIRDA LİSTESİ DOSYAYA ALINDI

`denetim/sinirda-renk2-kosu-oncesi.txt` — koşu öncesi ölçümle, ikiye ayrılmış:
```
ÖNE ALINAN   isvec ↔ rusya  12,3 · 123,21°     ming ↔ tibet  14,2 · 65,41°
BEKLEYEN     funj↔habesistan 40,35° · adal↔somali 27,95° · cungar↔rusya 22,85°
             fas↔ispanya · buhara↔mogulistan · habesistan↔somali ·
             memluk↔nube · gucerat↔racput
```
⚠️ Sayılar **koşu öncesi geometriye ait**; koşu sonrası yeniden ölçülecek.
Koordinatör kararı ve kendi kuralım aynı yönde: **önce ölç, sonra düzelt.**

📌 Ve listede bir desen var: **`habesistan` üç kez geçiyor** (funj · somali ·
adal üzerinden). Afrika Boynuzu paletin sıkışık bölgelerinden biri — `evfat`
ve `makdisu` partisinde de 600 km eşiği **yetmemiş**, kümeyi bütün olarak
ölçmek gerekmişti. Aynı coğrafya, aynı sıkışıklık.
⇒ Sıra gelirse o dörtlüyü (`habesistan` · `funj` · `somali` · `adal`) **tek
küme** olarak çözmek, tek tek uğraşmaktan doğru olur — `B15`in tavan tarafı.

---

## ㉞ KOŞU SONRASI — dört ölçüm, iki düzeltme, iki yeni renk

### ① `renk_fark.py` — ÖNGÖRÜ BİREBİR TUTTU
```
nokta 1800 → 1800 · kimlik 299 → 299 · komşu çifti 1579 → 1579
doğan 0 · ölen 0 · eşiğin altına düşen 0
```
187 nehir ve 163 engel poligonu **nokta eksenine hiç dokunmadı** — tek bir
komşuluk çifti bile değişmedi. Kilit sırasındaki ayrım doğruydu:
*"sınav `renk_olc`de değil `renk_cikti`de."*

### ② `renk_cikti.py` — ASIL SINAV, ve ilk kez anlamlı
```
değen kimlik çifti   653 → 759   (+106)
gövde/kesit          115-53      →  127-63
gövdesiz kimlik       61 → 21
ΔE < 12 değen çift     0 →  0    ← YENİ İHLAL YOK
```
Geometri gerçekten değişti (+106 çift) ama **hiçbir çift eşiğin altına
düşmedi.** İki tarafın da tabanı ilk kez gerçek ölçümdü.

**SINIRDA maruziyetleri BÜYÜDÜ — koşudan sonra yeniden ölçüldü:**
```
isvec ↔ rusya        123,21 → 128,20   +4,99
fas   ↔ ispanya       19,83 →  24,21   +4,38
ming  ↔ tibet         65,41 →  66,20   +0,79
funj  ↔ habesistan    40,35 →  40,60
```
📌 Koordinatörün *"önce yeniden ölç, sonra düzelt"* kararı isabetliydi:
düzeltmeyi koşudan önce yapsaydım **bayat sayıya** göre yapmış olurdum.

### ③ İKİ TEPE ÇİFT KAPATILDI
```
isvec  #63bda2 → #48eac3   rusya'dan  12,3 → 22,4
tibet  #3cc048 → #e1aed2   ming'den   14,2 → 36,7
```
**İkisi de İHLAL DEĞİLDİ** (12,3 ve 14,2, eşiğin üstünde). Taşınma gerekçesi
**maruziyet**: 128,20° atlasın kuzey yarısındaki en uzun tek çizgi, 66,20°
ikincisi; kalan sekizin en uzunu 40,60°, yani başka bir kefede.

Hangisinin taşınacağı ölçüldü — ikisinde de **ucuz olan**:
```
rusya          ÇÖZÜLEMEDİ (paletin en kısıtlı düğümü, aday YOK) → isvec taşındı
ming-hanedani  49 engel · en iyi pay 12,4                        → tibet taşındı
tibet          20 engel · en iyi pay 19,6
```
`cungar` · `cohor` · `norvec` vakalarındaki aynı ölçüt, dördüncü kez.

⇒ Güncel palete karşı ölçüm: **ikisi de SINIRDA listesinden düştü.** Kalan en
uzun maruziyet artık 40,60° (`funj ↔ habesistan`).

📌 **VE BİR ŞEY GÖRÜNÜR OLDU:** iki çift listeden düşünce alttan iki yeni
girdi çıktı — `ahom ↔ yuan-hanedani` (13,69°) ve `joseon ↔ ming-hanedani`
(17,37°). Bunlar hep oradaydı, ilk ondan taşmışlardı. **Liste bir kuyruk
değil, pencere**: tepesi temizlenince altı görünüyor.

### ④ KAFKAS ÜÇLÜSÜ YAZILDI — künye sluglarıyla
```
ermenistan-demokratik-cumhuriyeti  #1221ae
azerbaycan-demokratik-cumhuriyeti  #eacf75
gurcistan-demokratik-cumhuriyeti   #90eab1  (daha önce yazılıydı)
aralarında 61,5 / 57,0 / 21,1
```
Hazırlığımdaki `ermenistan`/`azerbaycan` adları künyede **yoktu**; künyeden
alındı.

### ÖLÇÜM
```
BOYALAR      299 → 301        canlı 1800 nokta · künye 339
renk_olc     görünmez 0 · çakışma 0 · aynı-hex 0          ✓
renk_fark    doğan 0 · düşen 0 · hex değişen 2 · yeni 2   ✓
renk_cikti   759 değen çift · ΔE<12 olan 0                ✓
--dogrula    4 öneri · 0 fark                             ✓
```
⚠️ `renk_cikti` ① uyarıyor: `isvec` ve `tibet` çizili haritada **eski
renkle** — bir sonraki üretim koşusunu bekliyorlar.

Her iki taban da güncellendi (`renk-taban.json` · `renk-cikti-taban.txt`).

---

## ㉟ AFRİKA BOYNUZU KÜMESİ — dört değil **27**, ve içinde beş gizli ihlal

Koordinatör *"`habesistan · funj · somali · adal` dörtlüsünü tek küme olarak
çöz"* dedi ve *"küme büyümüş olabilir"* diye uyardı. **Ölçtüm: küme 27
kimlik.** Çekirdeğin 600 km'si taranınca Kızıldeniz'in iki yakası, Nûbe,
Uman ve sömürge gövdeleri de içeri giriyor.

### 🔴 VE İÇİNDE BEŞ EŞİK ALTI ÇİFT VARDI — `renk_olc` BEŞİNİ DE GÖREMİYOR
```
kaffa     ↔ sidamo     ΔE  2,8  (202 km)  İKİSİ DE 1390-1897 SAHNEDE
mehdi     ↔ tunciler   ΔE 10,7  (123 km)
mehdi     ↔ memluk     ΔE 10,3  (  0 km)
ingiltere ↔ nebhani    ΔE 10,4  (  0 km)  eşzamanlı 1281-1515
fransa    ↔ portekiz   ΔE  9,6  (5,2 km)  Çandernagor ↔ Hûglî
```
Hiçbiri Voronoi komşusu **değil** ⇒ `komsuluk()` çifti hiç kurmuyor ⇒ denetim
*"0 çakışma"* diyor. Ölçüt *"hücreler değiyor mu"*; oysa **iki gövde değmeden
de aynı ekranda yan yana durur.**

📌 `kaffa ↔ sidamo` bu körlüğün en saf hâli: **ΔE 2,8**, yani neredeyse aynı
renk, ve **beş yüzyıl boyunca ikisi de sahnede.** Bugüne kadar hiçbir denetim
bunu bildirmedi.

⇒ Bu, bugünün üçüncü **yapısal körlük** bulgusu:
```
renk_cikti ② hiç ölçmüyordu           → onarıldı, 0 yerine 653 çift
--dogrula  öneriyi künyeyle sormuyor  → slug hatası ancak elle yakalandı
renk_olc   komşu OLMAYAN yakın çifti  → bu beş ihlal
           hiç kurmuyor
```
Üçü de aynı cümlenin farklı yüzü: **denetim VAR demek, o soruyu SORUYOR
demek değildir.**

### Beşi de kapatıldı — her ihlalin UCUZ tarafı taşındı
```
kaffa    #8e24aa → #d2ea8d   (sidamo #7b1fa2 paylaşımlı grup, o oynatılamaz)
nebhani  #a0326b → #60121b   (ingiltere çözülemez düğüm)
mehdi    #e19c69 → #eaa8ea   TEK taşımayla İKİ ihlal (memluk + tunciler)
somali   #847245 → #1248d5   TEK taşımayla İKİ maruziyet (adal + habesistan)
funj     #a28184 → #ed5a96
portekiz #6b8ac9 → #34fcfc
```
```
kaffa↔sidamo      2,8 → 60,9      ingiltere↔nebhani  10,4 → 19,6
mehdi↔memluk     10,3 → 18,8      mehdi↔tunciler     10,7 → 35,9
adal↔somali      12,0 → 58,1      habesistan↔somali  12,2 → 37,2
funj↔habesistan  12,2 → 28,9      fransa↔portekiz     9,6 → 36,5
```

### 🔴 `fransa ↔ portekiz` — çözüm ÖLÇÜT GEVŞETMEDEN bulundu
Önce ikisi de "çözülemedi" çıktı. **Hangi kısıtın bağladığını ölçtüm:**
```
tam band (C* p10-p75 + uyum p75 + Osmanlı şeridi)  → en iyi 11,5  🔴
yalnız C* bandı                                    → en iyi 13,2  ✓
yalnız görünürlük                                  → 40,1 (#00fc00 neon)
```
Bağlayan şey ΔE **değil**, `uyum` **tercihiydi**. Ve `renk_olc.py:132` bunu
zaten söylüyor: *"uyum ölçüt değil TERCİH; eşiği geçen adaylar arasında ayrım
yapar, EŞİĞİ DEĞİŞTİRMEZ."*
⇒ Tercihten çıkıldı, **eşiklerin hiçbirine dokunulmadı.** `#34fcfc` uyum
0,4383 — paletin p75'i (0,3132) üstünde ama **paletin kendi maksimumunun
(0,5494) altında**, yani gözlenen aralık içinde.

📌 **Ders: "çözülemedi" demeden önce HANGİ kısıtın bağladığını ölç.** Üç
kısıt üst üste bindiğinde hangisinin gerçek eşik, hangisinin tercih olduğu
görünmez olur — ve tercih yüzünden bir ihlal açık bırakılır.

### ÖLÇÜM
```
KÜME 27 kimlik · eşik altı çift 0        (5 → 0)
BOYALAR 301 · renk_olc temiz · renk_fark: hex değişen 6 · doğan 0 · düşen 0
renk_cikti 759 değen çift · ΔE<12 olan 0
```
⚠️ Ve SINIRDA penceresi yine doldu — beklendiği gibi:
```
somali ↔ vollayta 39,74°  ← YENİ (somali taşındığı için)
granada ↔ kastilya · bicapur ↔ vijayanagara · ahom ↔ yuan  ← alttan çıkanlar
```
**Liste bir pencere**, dördüncü kez doğrulandı.

---

## ㊱ RUS OVASI KÜMESİ — beş değil YEDİ, üçü yazıldı

Sebep 266 yıllık bir hayalet: `devletler.js`te `rusya` **1547-01-16**'da
başlıyor ama `yerlesimler.js` Moskova · Novgorod · Ryazan · Tula · Vologda ·
Pustozersk'i **1281'den** `rusya` boyuyor.

### Üç düzeltme — sevkteki liste ölçümle uyuşmadı
```
ryazan                   sevkte "renk YOK"  →  ÖLÇÜM: #cce787 VAR
                         (bu oturumda kalem 9'da yazılmıştı)
litvanya-buyuk-dukalik   sevkte komşu diye anılıyor → KENDİSİ RENKSİZ, künyeli
sovyet-rusya             sevkte hiç yok → künyeli-renksiz, 1917-1923
```
⇒ Küme **yedi**: moskova · novgorod · pskov · tver · litvanya-buyuk-dukalik ·
sovyet-rusya + (renkli) ryazan.

### Yedisi birlikte çözüldü — `B15` TAVAN
Küçük parti, havuz 160.690 aday ⇒ tam karşılıklı ayırmanın bedeli sıfır.
```
moskova #12a2ed · novgorod #42151e · pskov #840f75 · tver #9f6ced
litvanya-buyuk-dukalik #120f9c · sovyet-rusya #33eddb
küme içi en dar çift: 18,5 (pskov ↔ tver)
```
**`rusya`dan uzaklık** — beşi de onun selefi, geçiş görünür kalmalı:
```
litvanya-bd 49,1 · pskov 45,7 · tver 44,7 · moskova 31,6 ·
sovyet-rusya 25,4 · novgorod 24,4 · ryazan 20,3
```
📌 `rusya` **oynatılmadı, çevresi oynatıldı.** Bugün `isvec` vakasında
ölçülmüştü: `rusya` için ΔE ≥ 12 sağlayan aday **yok** — paletin çözülemeyen
düğümü. **Kısıtlı düğüm oynatılmaz.**

### Yazılan üç, bekleyen üç
```
YAZILDI    moskova · litvanya-buyuk-dukalik · sovyet-rusya   (künyeleri var)
BEKLİYOR   novgorod · pskov · tver — künyesiz, VERİ DEVLET yazıyor
           renkleri ölçülü: denetim/hazir-renk2-rus-ovasi.txt
```

---

## ㊲ KOORDİNATÖRÜN SORDUĞU SAYI — ve tersi

*"Künyesi olup rengi olmayan kaç kimlik var?"*
```
KÜNYESİ VAR, RENGİ YOK          65 kimlik
   bunlardan veride KULLANILAN   0   ← hiçbiri bugün harita deliği DEĞİL
   veride 0 kullanım            65   ← "sessiz bekleyen"

TERSİ: RENGİ VAR, KÜNYESİ YOK   41 kimlik
```

📌 **İki sayı iki ayrı boşluğu ölçüyor ve ikisi de bugün sessiz:**
```
65  künye yazıldı → renk atlandı → veri hiç gelmedi
    zincirin ORTASI boş; kimse fark etmiyor çünkü hiçbir denetim
    "künye var ama renk yok" diye SORMUYOR
41  renk yazıldı → künye atlandı
    bunların çoğu BUGÜN benim yazdıklarım (kırk partisi + Afrika Boynuzu),
    yani deliği kapatmak için kasten gevşek gidilenler
```
⚠️ Ve **65'in hiçbiri harita deliği değil** — bu iyi haber ama aldatıcı:
delik olmamasının sebebi renklerinin olması değil, **verilerinin hiç
gelmemesi.** Veri geldiği gün 65'i birden delik olur.

⇒ Koordinatörün `Ö` önerisi doğru: bu üç adımlı zincirin
```
künye → renk → veri
```
**hiçbir adımı öteki ikisini sormuyor.** Bugün beş kez `harita:` alanının
atlandığını, bir kez de `moskova`nın rengi atlanarak yazıldığını bildirdim;
ikisi de aynı boşluğun yüzü. Denetim şöyle sormalı:
*"her künyenin rengi var mı · her rengin künyesi var mı · veride kullanılan
her kimliğin ikisi de var mı"* — üçüncüsü bugün 0, ilk ikisi 65 ve 41.

---

## ㊳ DÖRDÜNCÜ KONTROL YAZILDI — ve İLK KOŞUSUNDA GERÇEK BİR KUSUR BULDU

`renk_fark.py`ye `zincir()` eklendi: **künye → renk → veri** halkalarının
birbirini tutup tutmadığını sorar. Dört dal:
```
künyesi var, rengi yok                 66      BORÇ (sessiz)
rengi var, künyesi yok                 41      BORÇ (sessiz)
VERİDE kullanılıyor, rengi YOK          0      KUSUR
VERİDE kullanılıyor, künyesi YOK       40  🔴  KUSUR
```

### 🔴 VE DÖRDÜNCÜ DAL İLK KOŞUDA ÖTTÜ — 40 kimlik
Bunlar **bugün "gevşek" kararıyla yazdığım kırk renk.** Veride kullanılıyorlar,
haritada boyanıyorlar, ama **künyeleri yok** ⇒ `denetle_yayin` onları
"dizinsiz harita kimliği" sayacak.

📌 Karar bilinçliydi (delik kapatmak künye beklemekten önemliydi) ve
koordinatör onaylamıştı — **ama o güne kadar bunu ölçen bir şey yoktu.**
Şimdi var, ve sayı ekranda. Borcun bilinçli olması onu görünmez olmaktan
kurtarmıyordu.

### Tasarım kararı: BORÇ ile İHLAL ayrıldı
```
çıkış kodu YALNIZ "veride kullanılan" iki dala bağlı
66 ve 41 birer BORÇ — hata sayılsalardı araç her koşuda kırmızı yanar
ve gerçek kusuru boğardı
⇒ sayıları TABANA yazılır, fark() BÜYÜMEYİ bildirir: 66 → 70 görünür olur
```
Bu, bugün öğrendiğim *"liste bir pencere, tavan değil"* ayrımının kod hâli.

### 🔴 `C13` SINAVI — beş dal, ayrı ayrı, üçü ZORLANARAK
```
① geçme yolu     dört dal da boş → kusur 0                    ✓
② zorlama        veride_renk_yok sahte girdiyle → 🔴 kusur 42  ✓
③ zorlama        yalnız veride_kunye_yok → 🔴 kusur 1          ✓
④ büyüme dalı    taban 60 → şimdi 66 → "(+6)" bastı            ✓
⑤ borç ihlal mi  66 ve 41 varken kusur 0                       ✓
```
⚠️ **②'yi zorlamak şarttı**: `veride_renk_yok` bugün **0** ve gerçek veriyle
hiç koşulamıyor. `C13`ün kendi cümlesi: *"zorlanamayan dal, denetimsiz
daldır."* — ve o dal, tam olarak **65 borcun deliğe döndüğü gün** ötecek olan
daldır.

📌 Ve ⑤ ayrı bir sınav: bir denetimin **ötmemesi gereken yerde ötmediğini**
de sınamak gerekiyor. 66 ve 41 varken kusur 0 vermeseydi araç kullanılamaz
olurdu — `C5`in (geçme yolu) borç boyutu.

### ÖLÇÜM
```
taban güncellendi · zincir sayıları da tabanda:
   kunye_var_renk_yok 66 · renk_var_kunye_yok 41
   veride_renk_yok     0 · veride_kunye_yok   40
çıkış kodu 1 (40 zincir kusuru) — doğru davranış
```

---

## ㊴ RUS OVASI TAMAMLANDI (8 kimlik) + KIRKIN LİSTESİ

Künyeler geldi (343); dördü de ölçüldü ve yazıldı.
```
novgorod #42151e · pskov #840f75 · tver #9f6ced
rusya-gecici-hukumet #12397e
```
Zincir tam: `rusya` → `rusya-gecici-hukumet` → `sovyet-rusya`; ve
`moskova` · `novgorod` · `pskov` · `tver` · `ryazan` ·
`litvanya-buyuk-dukalik` hepsi ayrı. **BOYALAR 304 → 308.**

### Pencereler künyeden okundu — ve bir fark çıktı
`tver` hazırlıkta 1281'den başlıyordu, künyede **1246** — 35 yıl erken.
Komşu kümesi değişmediği için renkler aynı kaldı, ama **sayı
devralınmadı.** Bugün bu tuzağa iki kez düşmüştüm (`darfur` 1603→1695 ve
`ermenistan` slug'ı); üçüncüsünde önce ölçtüm.

### Kırkın listesi çıkarıldı — ve ölçünce İKİYE ayrıldı
`denetim/kunye-bekleyen-40.txt`
```
A) KÜNYE KAYDI VAR ama harita: başka anahtarda    2 kimlik · 257 pencere
   afsar (harita=iran) · kacar (harita=iran)
B) KÜNYE KAYDI HİÇ YOK                           38 kimlik · 235 pencere
```

🔴 **A grubu bir bonus:** `renk_olc`nin **her koşuda** bildirdiği
aynı-anahtar örtüşmesinin **kökü bu**. `afsar ↔ kacar` ΔE 0, 1789-1796 —
ikisinin de künyesi `harita:"iran"`e bakıyor. O iki satır düzeltilince
aylardır açık duran uyarı da kapanır. **Kırkın listesi, ilgisiz görünen bir
kusuru da çözüyor.**

---

## ㊵ ⚠️ VE BU BÖLÜM BİR KEZ BOZULDU — dördüncü kez aynı tuzak

Yukarıdaki metin ilk yazımda **bash'ten geçirildi** ve backtick'lerin içi
silindi: kod blokları ve satır içi `...` kapsamları yok oldu, dosya o hâliyle
commit edildi (`d1a642c`).

📌 `CLAUDE.md §11` bunu açıkça yazıyor: *"`sed` ile Türkçe karakterli /
kesme işaretli düzeltme yapma"* ve altındaki kırmızı not *"BU KURAL
`heredoc`U DA KAPSAR — 6 Ağustos'ta DÖRT KEZ ısırdı"*. Bugün bana **üç kez**
ısırdı (iki betik + bu metin) ve **üçünde de kuralı biliyordum.**

⚠️ Fark şu: önceki ikisinde betik **patladı**, yani hata görünürdü. Burada
**patlamadı** — bash backtick'i sessizce çalıştırıp boş dize koydu, metin
eksik ama geçerli hâlde yazıldı ve commit oldu. **Sessiz bozulma, gürültülü
bozulmadan pahalı** — bugün `renk_cikti` vakasında öğrendiğim şeyin metin
tarafı.

⇒ Düzeltme: `Write` aracıyla scratchpad'e betik, sonra `py <yol>`. İstisna
yok — ve bu satır, kuralı **bilmenin** yetmediğinin kaydı.

---

## ㊶ `arac/kunye_olc.py` DOĞDU — ve adı kapsamını söylüyor

Koordinatör bu sayacı `renk_fark.py`ye eklemeyi önerdi, **reddettim** ve
ayrı alet yazdım. Gerekçe bugünün üç vakası:
```
renk_cikti ②   çizim biçimini VARSAYDI          → hiç ölçmedi (0 vs 653)
renk_olc       komşuluğu "değme" diye TANIMLADI → 5 yakın çifti kurmadı
--dogrula      yazılanı öneriyle KARŞILAŞTIRDI  → künyeyi hiç sormadı
```
Üçü de **kapsam** kusuru. Alâkasız bir kontrolü eklemek dördüncü ve daha
sinsi hâli olurdu: orada araç **kendi kapsamını** yanlış tanımlıyordu,
burada **ADI** yanlış tanımlayacaktı.

### 🔴 EŞİĞİ KURAL DEĞİL DAĞILIM VERDİ
Koordinatörün gözlemi *"120 karakterden kısa 46 künye"* idi. **120 keyfî.**
Ölçtüm:
```
min 28 · p10 108 · p25 162 · MEDYAN 199 · p75 254 · p90 349 · maks 873
```
⇒ Eşik **medyanın yarısı** (bugün 99,5): *"tipik künyenin yarısından kısa."*
Dağılımdan türer, elle yazılmaz, **külliyat büyüyünce kendiliğinden kayar.**
Bugün **29** künye altında (120 ile 46 olurdu).
📌 Sayının nereden geldiği, sayının kendisi kadar önemli — `B15`in aynı
mantığı, kendi işime uygulanmış hâli.

### 🔴 VE ASIL BULGU DAĞILIMDA DEĞİL, KÜMELENMEDE
```
anadolu / beylik       8   %28   ← tek başına borcun çeyreğinden fazlası
balkanlar / prenslik   7   %24
kalan 14 künye         çeşitli bölgeler, 1-2'şer
```
📌 Bu **dağınık bir borç değil, EKSİK YAZILMIŞ BİR PARTİ işareti.** Alete
bunu söyleyen bir eşik koydum (%20): kısalık bir kümede toplanıyorsa
"yavaş büyüyen külliyat" değil, "o parti eksik yazılmış" demektir.
`saruhan` 28 · `mentese` 37 · `candar` 56 · `karesi` 67 · `aydin` 82 —
beşi de Anadolu beyliği.

### BORÇ ile İHLAL ayrıldı (aynı günün öteki dersi)
```
BOŞ özet   → İHLAL, çıkış kodu 1     (bugün 0)
KISA özet  → BORÇ, ekranda durur     (bugün 29), çıkış kodunu ETKİLEMEZ
```

### 🔴 `C13` SINAVI — altı dal, üçü ZORLANARAK
```
① geçme yolu    tek tip 200 karakter → boş 0 · kısa 0            ✓
② ZORLAMA       boş özet dalı sahte külliyatla → 2 yakalandı     ✓
                ve "   " (yalnız boşluk) da BOŞ sayıldı          ✓
③ ZORLAMA       eşik dağılımdan kayıyor mu?                      ✓
④ ZORLAMA       kümelenme uyarısı → %100'de ateşledi             ✓
⑤ sessiz sıfır  boş külliyat → SystemExit                        ✓
⑥ gerçek veri   boş 0 · kısa 29 → çıkış kodu 0                   ✓
```

⚠️ **VE ③'ÜN İLK HÂLİ ZAYIFTI — kendi sınavımı çürüttüm.** 90 karakterlik
özetle sınamıştım; o, medyan 200'de de 400'de de kısa çıkıyordu, yani
**kaymayı kanıtlamıyordu.** 120 karakterle yeniden koştum:
```
külliyat medyanı 200 → eşik 100 → 120 karakter: kısa DEĞİL
külliyat medyanı 400 → eşik 200 → 120 karakter: KISA
```
Aynı özet, külliyat uzayınca borç oldu. **Şimdi kanıtlanmış.**
📌 Bir sınavın *"geçti"* demesi, doğru şeyi sınadığı anlamına gelmiyor —
`C13`ün kendi ruhu bu, ve bugün ona kendi testimde düştüm.

### ÖLÇÜM
```
denetim/kunye-taban.json → n 343 · medyan 199 · eşik 99,5 · boş 0 · kısa 29
çıkış kodu 0 (boş özet yok) — doğru davranış
```

---

## ㊷ İKİ RENK YAZILDI, BİRİ MÜKERRER ÇIKTI — ve veri iki çakışma doğurdu

### 🔴 `sibir` YAZILMADI — MÜKERRER
Sevk *"`sibir` renk YOK, künye VAR"* diyordu. Ölçtüm:
```
sibir           künye 1420-01-01 → 1598-01-01   harita: BOŞ   renk YOK   veride 0
sibir-hanligi   künye 1430-01-01 → 1598-08-20   harita: ✓     #b17e3f    veride 3
```
**Aynı devletin iki künyesi.** `sibir-hanligi` bu oturumda yazıldı, bağlı ve
çalışıyor. `sibir`e renk vermek **ikinci bir kimlik** üretirdi — VERİ
DEVLET'in daha önce yakaladığı `astarhan` / `irlanda-hur-devleti` mükerrer
deseninin aynısı. ⇒ Yazılmadı; künyenin silinmesi ya da birleştirilmesi
gerekiyor (`devletler.js`, koordinatörün işi).

### 🟢 Yazılanlar
```
fransa-cumhuriyet  #45edcc   fransa'dan ΔE 39,6   🔓 140 dönemlik göçü açar
merini             #0f24b1   fas'tan    ΔE 42,0   🔓 Fas'ın 1196-1549 katmanı
```
📌 `NOKTA HALKA-2 3`ün talimatı uygulamaması **doğruydu**: renk olmadan 23
dönem boyanmayan toprak olurdu. Görünmez bir künye uyuşmazlığını **görünür
bir beyaz lekeyle** takas etmek olurdu.

⚠️ `sadi` yazılmadı (künyesi yok). Geldiğinde **üçü birlikte** ölçülmeli
(`merini` · `sadi` · `fas` aynı toprakta ardışık) — ve o gün `sadi`
(1549-1659) ile `fas` (1549-1923) künyelerinin **örtüşmesi** de sorulmalı;
bugün ikisi aynı pencereyi paylaşır görünüyor.

---

## ㊸ 🔴 VERİ İKİ ÇAKIŞMA DOĞURDU — DÖRDÜNCÜ VE BEŞİNCİ VAKA

Veri 1800 → **2133 nokta** (333 yeni). Hiçbir hex'e dokunulmadı ve:
```
renk_fark:  doğan komşuluk çifti 38 · ölen 13 · YENİ ÇAKIŞMA 2
   almanya   ↔ moskova    ΔE  8,08
   altinorda ↔ novgorod   ΔE 11,99
```
İkisi de **benim Rus kümemden** — birkaç saat önce yazdığım renkler, o
zamanki veriyle temizdi.
```
cungar ↔ buhara     Mâverâünnehir bağlanınca
norvec ↔ portekiz   _ek12 bağlanınca
cohor  ↔ kamboc     gün içi dönem değişikliğiyle
almanya ↔ moskova   333 nokta girince        ← bugün
altinorda ↔ novgorod  aynı                    ← bugün
```
📌 **Palet verinin fonksiyonudur** — beşinci teyit.

⚠️ **Ve bu çifti yalnız `renk_fark.py` doğru okuyabilirdi:** `renk_olc` de
bildirdi ama *"kaç çakışma var"* der; **hangisinin YENİ doğduğunu** söyleyen
taban karşılaştırmasıydı. Aletin var oluş sebebi tam bu sabah yazılmıştı,
akşam işe yaradı.

⇒ Taşınan yine ucuz taraf: `moskova` → `#0f0f9c` (23 engel, pay 19,1) ·
`novgorod` → `#84c9cf` (19 engel, pay 17,7). `almanya` ve `altinorda`
paletin kalabalık düğümleri.

---

## ㊹ 🟢 İKİ ESKİ BORÇ KAPANDI — aletler onu da gösterdi

### `afsar ↔ kacar` aynı-anahtar örtüşmesi: **KAPANDI**
```
öncesi: AYNI ANAHTARI PAYLAŞIP TARİHİ ÖRTÜŞEN — 1 çift (ΔE 0!)
şimdi : 0 çift
```
Sabah bildirdiğim kök (`harita:"iran"`) düzeltilmiş. **Aylardır açık duran
uyarı**, kırkın listesini çıkarırken yan ürün olarak teşhis edilmişti.

### Zincir borcu — dramatik düşüş
```
                              sabah   şimdi
künyesi var, rengi yok          66  →   62
rengi var, künyesi yok          41  →    3     ← 38 künye yazılmış
VERİDE kullanılıyor, künyesi YOK 40  →    1     ← yalnız `ainu` kaldı
```
📌 Dördüncü kontrol sabah yazıldı, akşam **borcun eridiğini** gösterdi.
Ölçülemeyen borç eritilemez; ölçülen borç eriyor.

### `kunye_olc` — eşik kendiliğinden kaydı
```
külliyat 343 → 381 künye · medyan 199 → 208 · eşik 99,5 → 104
kısa özet 29 → 33  (+4)
```
📌 **Eşiği dağılımdan türetmenin karşılığı bu:** külliyat büyüdü, eşik
kendiliğinden yükseldi. Elle yazılmış 120 olsaydı bugün de 120 olurdu ve
sayı, külliyatın değişimini değil yalnız kendi keyfîliğini yansıtırdı.

---

## ㊺ `sadi` YAZILDI · GÖÇ ÖLÇÜLDÜ · VE ALETİMDE BİR KUSUR ARANDI — başka bir şey bulundu

### 🟢 `sadi #1290ed` — Fas'ın üçüncü katmanı
```
merini 1196-1549 → sadi 1549-1659 → fas 1549-1923
merini↔sadi 24,8 · sadi↔fas 37,2 · merini↔fas 42,0
pay 23,9 · C* 21,6 = paletin %45'i
```
⚠️ Örtüşme (sadi 1549-1659 vs fas 1549-1923) **kasıtlı değil, çözülmemiş** —
VERİ DEVLET `fas`ın kendi kronolojisi (1666) ile TDV (1659) arasında 7 yıl
fark buldu ve dokunmadı. Renk bunu beklemiyor: iki gövde zaten yan yana
çizilecek ve **37,2 ile ayrışıyorlar.**

### Fransa göçünün ölçülmüş etkisi
```
fransa-cumhuriyet   veride 0 → 180 pencere
renk_fark: doğan komşuluk çifti 33 · ölen 18 · yeni çakışma 0
```
180 dönem yeni bir gövde doğurdu, 33 yeni komşuluk kurdu ve **hiçbiri eşiğin
altında değil.** `#45edcc` Kuzey Afrika · Batı Afrika · metropolde aynı anda
sahnede ve `ingiltere` · `ispanya` · `italya` · `fas` · `merini` ile komşu.

---

## ㊻ 🔴 KOORDİNATÖRÜN BİLDİRDİĞİ KUSUR — ÖLÇTÜM, ÜREMEDİ

Sevk: *"`kaffa` · `cimma` · `vollayta` · `sidamo` senin listende künyesiz
görünüyordu, ama dördü de dizinde vardı; aletlerini `id:` ∪ `harita:`
okuyacak şekilde düzelt."*

**Ölçüm:**
```
kimlik      veride   benim kümemde   id∪harita'da   künye kaydı
kaffa          2         VAR             VAR        ('kaffa-kralligi','kaffa')
cimma          1         VAR             VAR        ('cimma-sultanligi','cimma')
vollayta       1         VAR             VAR        ('vollayta-kralligi','vollayta')
sidamo         1         VAR             VAR        ('sidamo-kralliklari','sidamo')

VERİDE kullanılıp künyesiz — benim ölçümle 1 (ainu) · id∪harita ile 1 (ainu)
```
⇒ **Dördü de benim kümemde zaten VAR** ve iki yöntem **aynı** sonucu
veriyor. Kusur üremedi. Muhtemel sebep: koordinatör **saatler önce
ürettiğim `kunye-bekleyen-40.txt` artefaktına** bakmış; o dosya VERİ DEVLET
künyeleri yazmadan önce üretilmişti.
📌 Bugün üçüncü kez: **bayat artefakt, canlı ölçüm gibi okunuyor.** Aynı
tuzağa sabah ben düştüm (`§1.5` tablosu), sonra koordinatör düştü
(`ryazan` "renk YOK"), şimdi bu.

### 🔴 AMA ÖNERİSİ İKİ DALDA DOĞRU, BİRİNDE YANLIŞ OLURDU — ölçüldü
```
                              harita-or-id (benim)   id ∪ harita
künyesi var, rengi yok               63  ✓                96  🔴 +33 yanlış
rengi var, künyesi yok                3                    2  ✓
```
`id ∪ harita`nın 33 fazlası: `bosna-kralligi` (harita=`bosna`) ·
`bulgar-carligi` (harita=`bulgaristan`) · `arnavutluk-iskenderbey`
(harita=`arnavutluk`)… **Bunların `harita:` alanı başka anahtara bakıyor,
yani KENDİ renklerine ihtiyaçları yok.** Birleşim onları "rengi eksik"
sayardı.

⇒ **Doğru çözüm birleşim değil, AYRI BİR DAL.** Aletе beşincisi eklendi:
```
⑤ künye var ama harita: BAŞKA anahtarda
```
Ve **ilk koşusunda gerçek bir bulgu verdi:**
```
merini (harita=fas)   ← birkaç saat önce RENK YAZDIĞIM kimlik
```
`merini`nin künyesi var ama haritaya `fas` diye bağlanmış — yani yazdığım
`#0f24b1` **hiçbir zaman boyanmayacaktı.** Bu, sabah `afsar`/`kacar`da
bulduğum sınıfın aynısı ve **kendi işimde** çıktı.

📌 Ders: *"aletini şöyle düzelt"* denince önce **kusurun üreyip üremediğini**
ölç. Bu vakada kusur üremedi ama **düzeltme önerisi başka bir kusuru
gösterdi** — ve o kusur, öneriden farklı bir çözüm istiyordu.

### `C13` — beşinci dal iki yönde de sınandı
```
① geçme yolu   dal boş → kusur 0                      ✓
② ateşleme     sahte iki kayıtla → kusur 2            ✓
③ gerçek veri  merini (harita=fas) → 🔴               ✓
```

### ÖLÇÜM
```
BOYALAR 310 → 311 · nokta 2133 · künye 381
renk_olc   0 görünmez · 0 çakışma · 0 aynı-anahtar · 0 aynı-hex
renk_fark  doğan 33 · ölen 18 · doğan kusur 0 · düşen 0
zincir     61 · 2 · 0 · 1 (ainu) · 1 (merini harita=fas)
kunye_olc  381 künye · medyan 208 · eşik 104 · kısa 33 · boş 0
```

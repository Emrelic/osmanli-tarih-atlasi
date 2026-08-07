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

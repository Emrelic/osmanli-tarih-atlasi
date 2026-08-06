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
BOYALAR            230 → 231   (+estonya; sibir-hanligi ve izlanda künye bekliyor)
                   ⚠️ brifing "233 → 236" diyordu — taban ölçümü yanlıştı, bkz. ①
renk_olc.py        görünmez 0 · çakışma 0 · aynı-hex 0        ✓
                   (çakışma 1 → 0: meiji-japonya kapatıldı)
renk_cikti.py      çizili haritada ΔE<12 değen çift 0         ✓
                   ① meiji-japonya eski renkle çizili — koşu bekliyor
--dogrula          2 öneri · 0 fark — yazılan = önerilen      ✓
```

**AÇIK KALAN, benim dosyam değil:** `afsar` ↔ `kacar` ikisi de
`harita:"iran"` ve 1789-03-21 → 1796-01-01 arası **örtüşüyor** — o
pencerede ayırt edilemezler (ΔE 0). `devletler.js` işi.

⇒ Üç rengin **biri yazıldı, ikisi künye bekliyor** ⇒ brifingin
*"bitti"* eşiği **HENÜZ GEÇİLMEDİ.** `bitti` demiyorum.

---

## ⑤ Artefaktlar
```
denetim/oneri-renk2-20260806.txt   --dogrula ile koşulabilir öneri listesi
arac/renk_olc.py                   BOLGE okuyucusu onarıldı (biçimden bağımsız)
arac/renkler.py                    estonya + meiji-japonya yazıldı;
                                   sibir-hanligi + izlanda yorumda hazır
```
`arac/` altındakileri **koordinatör commit'ler** (§7). Bu dosya
pathspec'li olarak RENK 2 tarafından commit edildi.

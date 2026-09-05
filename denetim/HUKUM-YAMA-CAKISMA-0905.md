# SEKİZ YAMA ÇAKIŞMASI — TASNİF ve HÜKÜM

> Ölçüm: 5 Eylül 2026, 14:10 · `1.MURAT HÜDAVENDİGAR` (koordinatör)
> Araç: `py arac/_sahiplik_uygula.py` **kuru koşu** — hiçbir dosya yazılmadı.
> İçerik dökümü **regex ile değil**, `node` + `vm` ile (JS'in kendi
> yorumlayıcısı — `§11`in altı kez öğrendiği ders).

```
TABAN     3819 benzersiz ad · 77 girdi dosyası
uygulandı 113
ÇAKIŞMA     8        ← sabah 27'ydi; 19'u gün içinde karara bağlandı
```

---

## ⓪ ÖNCE İKİ ÖLÇÜM — ikisi de hükümden ÖNCE gerekliydi

### ① Sekiz yama dosyasının hiçbiri MOTOR GİRDİSİ DEĞİL

```
py -c "import girdi; ..." → GIRDI_DOSYALARI 77
yer_yama_p0035 · ok110 · ok109_fetret · uyg3 · erken · kafkas ·
ferhatpasa · romanya            → SEKİZİ DE "girdi DEĞİL (yama)"
```
⇒ Koşu sürerken `data/*.js` donması **yayının bayatlamasını** önlemek
içindir (`denetle_yayin` girdi dosyalarının sha256 izini karşılaştırır).
Bu sekizi girdi olmadığı için **düzenlenmeleri koşuyu etkilemez.**

⚠️ **Yine de bu turda DÜZENLENMEDİ.** Gerekçe kolaylık değil tutarlılık:
dört işçi oturuma blanket `data/*.js YASAK` kuralı verildi, ve
koordinatörün aynı kuralı bir teknik ayrımla kendine gevşetmesi kuralı
zayıflatır. Kazanç da yok — merge zaten koşu sonrasına kuyruklu.
📌 Ama ölçüm **kayda değer**: donma kuralının blanket yazımı *imprecise*.
Gerekçesi girdi dosyalarıdır; yama dosyaları o gerekçenin dışında.

### ② `d:` ile `s:` ÇAKIŞIRSA NE OLUR — üç yerde ölçüldü

```
denetle.py:1472 `degismez3.durum()`   d: → v: → s:  (İLK EŞLEŞEN kazanır)
js/app.js:863   katman sırası          9 devlet-dolgu … 16 osmanli-dolgu
                                       ⇒ Osmanlı ÜSTTE çizilir
uret_petek.py   yabancı gövde `s:`ten kurulur — çakışan gün DIŞLANMAZ
```
⇒ **Görsel olarak ve denetimde Osmanlı kazanır**, ama yabancı gövde o
günü **kendi alanına saymaya devam eder.**
🔴 ⇒ Bir `d:`/`s:` çakışması *"hata vermez ve görünmez"* — ama lejanttaki
**≈km² yüzölçümünü şişirir.** ⇒ Tamamlayıcı iki yamayı birleştirirken
çakışan pencere **kasıtlı mı** diye sorulmalı; kasıtlı değilse `s:`
kısaltılır.

---

## TASNİF — 4 MEKANİK · 4 ESASA İLİŞKİN

### 🟢 MEKANİK (koordinatör hükmü, kaynak gerekmez)

| yer | çift | durum | HÜKÜM |
|---|---|---|---|
| **Bağdat** | `erken` vs `ok109_fetret` | `d:` **birebir aynı**; ok109 ayrıca tam `s:` zinciri taşıyor | **ok109_fetret** (üst küme). `erken`in `kaynak:` metni korunur — `SKALER_KORUNAN` zaten ezmez |
| **Halepçe** | `ok109_fetret` vs `uyg3` | aynı desen: `d:` birebir aynı, ok109 ayrıca `s:` | **ok109_fetret** (üst küme) |
| **Kutaisi** | `ferhatpasa` vs `kafkas` | `s:` ve `v:` **birebir aynı**; kafkas'ta fazladan **boş** `d:[]` | **ferhatpasa** — `d:[]` anlamsız alan, içerik farkı YOK |
| **Şehrizor** | `ok109_fetret` vs `uyg3` | **tamamlayıcı**: ok109 yalnız `s:`, uyg3 yalnız `d:` | **BİRLEŞTİR** ⚠️ ama önce ②: uyg3'ün `d:1535→1550`i ok109'un `safevi 1508→1554`ünün İÇİNDE — çakışma. `s:`i 1535'te kesip 1550'de yeniden başlatmak mı, yoksa çakışma kasıtlı mı? **ÖLÇÜLMELİ** |

### 🔴 ESASA İLİŞKİN — kaynak gerekir, işçiye sevk edilecek

| yer | çift | ÇATIŞAN İDDİA |
|---|---|---|
| **Başkale** | `ok110` vs `p0035` | safevî **1639-05-17**'ye kadar mı, yoksa **1548-08-25**'te Osmanlı mı? |
| **Çaldıran** | `ok110` vs `p0035` | **aynı soru** |
| **Kasr-ı Şîrîn** | `kafkas` vs `p0035` | p0035 fazladan `d:1590-03-21→1603-10-21` (Ferhad Paşa dönemi) iddia ediyor; kafkas'ta yok ve `s:safevi 1503→1736` o pencereyi kapsıyor |
| **Yergöğü** | `p0035` vs `romanya` | 1810 Rus varlığı **egemenlik** mi (`s:rusya` 1810→1829) yoksa **işgal** mi (`isg:rusya` 1810→**1812**)? |

---

## 🔴 BAŞKALE ve ÇALDIRAN — TEK SORU, ve bir taraf KENDİ ÇAPASIYLA ÇELİŞİYOR

```
ok110  s:[… safevi 1502-01-01 → 1639-05-17]
       kaynak: "ankraj Van (78 km) — külliyattaki zincir"   ← KONVANSİYON
p0035  s:[… safevi 1502-01-01 → 1548-08-25]  +  d:[1548-08-25 → 1923-10-29]
       neden: "kaydın kendi kaynak: alanı 'ankraj Van — külliyattaki zincir'…"
```
🔴 **ok110'un dayanağı bir kaynak değil bir konvansiyondur** ve çapası
**Van**. p0035 tam da o çapayı işaret ediyor.
⇒ Sınav tek ve ucuz: ***atlasta Van hangi gün Osmanlı oluyor?*** Van
1548-08-25 ise ok110 kendi çapasıyla çelişir ve p0035 kazanır. Van
1639-05-17 ise tersi.
📌 Bu, aynı gün öğrenilen *"komşusunun kullandığı günü kullanmak, kendi
gününü seçmekten dayanaklıdır"* dersinin **denetim** yüzü: bir konvansiyon
çapasını **kendi çapasına karşı** sınamak.

---

## SIRA

```
🟢 dört MEKANİK hüküm      merge'de uygulanır — kaybeden kayıt KENDİ
                           dosyasından DÜŞÜRÜLÜR (`§11`: "bir hüküm,
                           veriye inmedikçe hüküm değil bir metindir";
                           uygulayıcı bu belgeyi OKUMAZ)
🔴 dört ESASA İLİŞKİN      ilk boşalan işçiye sevk — Van sınavı önce
⚠️ Şehrizor'un çakışan penceresi ②'ye göre ayrıca ölçülür
```

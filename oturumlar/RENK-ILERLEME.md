# RENK — İLERLEME DEFTERİ

> Oturum: 2 Ağustos 2026, **Opus 5**. Görev: `oturumlar/RENK-GOREV.md` (B5).
> Yazma yetkisi: `arac/renkler.py` · `data/devletler.js` (yalnız `harita:`) ·
> bu dosya.

---

## 0. ZEMİN — kendi tabanım, tabloya güvenmedim

```
py arac/renk_olc.py   (iş başlangıcı)
  998 nokta · 114 kimlik · altlık #e8dfc8 · opaklık 0.44
  14 görünmez · 71 çakışma · 1 aynı-anahtar örtüşmesi
```

🔴 Zemin **zaten kırmızı**. Bu yüzden *"denetle temiz"* kabul ölçütü OLAMAZ
(NOKTA EKLEME oturumunun 1 Ağustos'taki tespiti; aynı gerekçe bugün de geçerli).

**Kendi ölçütüm:** ① yeni ihlal üretmemek ② yazdığım her sayıyı ölçmüş olmak
③ aktarımı da denetlemek.

---

## 1. PARTİ 1 — İRAN ZİNCİRİ · 🔴 YAZILMADI, premis çöktü

### Ölçüm

```
d:"iran"    320 dönem kaydı        d:"afsar"   0
d:"safevi"  198 dönem kaydı        d:"zend"    0
                                   d:"kacar"   0
```
(`girdi.yukle` ile — ortak okuyucu, regex değil.)

Ve motor `harita:` alanını **üretimde hiç okumuyor**:
```
uret_petek.py:272   if sp["d"] not in BOYALAR        ← boyayan bu
uret_petek.py       grep "oku_devletler|devletler.js" → SIFIR eşleşme
```
`harita:` yalnız denetim köprüsü (`denetle_anakronizm.py` + `renk_olc.ayni_anahtar`).

1791-06-15'te İran kutusunda (lon 44-64, lat 25-40) sahnede olanlar:
```
iran 111 nokta · OSMANLI 22 · benihalid 5 · suud 2 · umman 2 · turkmen 1 · buhara 1
```

### Hüküm

**afsar/zend/kacar'a üç mor vermek SIFIR nokta boyar.** Brifingin *"o pencerede
haritada ayırt edilemiyorlar"* satırı yanlış: ayırt edilecek iki gövde yok,
**ayrım hiç çizilmemiş.** Tek gövde var.

🔴 Ve yazsaydım **zarar** verirdim: `devletler.js`'te `harita:"afsar"`/`"kacar"`
ayrılınca `ayni_anahtar()` **susar** — gerçek soruna işaret eden tek dedektör
kapanır, harita bir piksel değişmez.

📌 Brifingin ikinci satırı da ölçümle düştü:
```
iran    320 dönem · 1281-01-01 → 1923-10-29     ← 642 yıl, bütün çizgi
safevi  198 dönem · 1501-07-01 → 1736-03-08
iran ↔ safevi  EŞZAMANLI SINIRDAŞ
```
Brifing *"safevi × afsar örtüşme yok, safevi taban"* diyordu. `iran` bir hanedan
anahtarı değil, 642 yıllık genel anahtar ve safevi ile hem eşzamanlı hem komşu.

⇒ Parti 1'in görünür karşılığı bir **VERİ** işi: `yerlesimler.js`'in 320 `iran`
dönemini afsar/zend/kacar'a bölmek. O dosya bu oturumun değil. Renk o bölmeden
**sonra** anlamlı.

### Beklemede olan tek soru

`iran`ı safevi ailesine (mor) çekmek — 1736-03-08'de yaylanın safevi
**morundan** iran **kahvesine** atlaması görünür kusur. Ölçtüm: ton ±18° +
altlıktan ayrık + 23 engelin hepsinden ΔE≥12 → **36.845 aday**; palete en uygunu
`#c03fab` (L* 69,9 · ton 343,0° · en yakın engel ΔE 12,5 · safevi'den ΔE 20,8).
**Yazılmadı** — 320 dönemi ve 642 yılı yeniden boyar, kullanıcının ilkesinden
çıkardığım bir sonuç, söylediği bir şey değil. Onay bekliyor.

---

## 2. PARTİ 2 — 15 AVRUPA KİMLİĞİ · ✅ YAZILDI VE DOĞRULANDI

### Engel ve çözümü

15 kimliğin 15'i de `yerlesimler_avrupa.js`'te; **canlıda 0 kayıt**. `girdi.py`
o dosyayı okumuyor ⇒ `renk_olc.py --oner` on beşine de *"komşusu ölçülemeyen
kimlik"* der ve öneriyi yalnız altlık + Osmanlı ikilisine dayandırır — yani
**dayanaksız** (aracın kendi uyarısı, `renk_olc.py:269`).

⇒ Komşuluk **merge sonrası dünya** için kuruldu: canlı 998 + avrupa 237 =
**1235 nokta**, gerçek Voronoi + **gün düzeyinde** dönem örtüşmesi.
`arac/*.py` değiştirilmedi, yalnız import edildi. Ad çakışması: **0**.

### 🔴 İlk çözümüm çöpe gitti — komşuluk kısıtı tek başına yetmiyor

Yalnız *"komşudan ΔE ≥ 12"* uygulanınca komşu **olmayan** kimliklere hiçbir
kısıt kalmıyor ve yetinmeci tercih hepsini aynı köşeye çöktürüyor:
```
luksemburg #4baf5a ↔ isvicre #4baf4b   ΔE 3,5   ← pratikte AYNI RENK
altı mavi 182-218° bandında · dört yeşil 133-150° bandında
```
Brifingin uyarısı tam buydu. **Voronoi komşuluğu görsel karışmanın tamamını
yakalamıyor:** aynı ekranda duran iki gövde komşu olmasa da karışır.
⇒ Ek kısıt: 15'i **birbirinden** ΔE ≥ T, komşuluktan bağımsız.

### Eşik VERİLMEDİ, ÖLÇÜLDÜ

Koordinatör dolaşımdaki *"en dar aralık 13,6"* rakamını doğrulamadığı için
aktarmamıştı — doğru davranış. Ölçtüm, **13,6 çıkmadı**:

| kısıt | karşılıklı ΔE tavanı |
|---|---|
| kısıtsız (matematik) | **23** — ama çözüm uçlara kaçıyor |
| palet kutusu + kırmızı yasağı | **17** ← uygulanan |

Kısıtsız 23'ün verdiği çözüm: `#e808f8` macenta · `#28d428` saf yeşil ·
`#f01058` ve `#e43c1c` **kırmızı** (dosyanın kendi kuralını çiğniyor) ·
`#182840` L*59 bej altlıkta neredeyse siyah. `renk_olc.py:324` bu tuzağı zaten
kaydetmiş: *"en ayrık'ı seçmek uçlara kaçıyor."*

### ⚠️ Kırmızı yasağını İKİ KEZ yanlış kurdum

Önce 20°±22, sonra 20°±30. İkisi de çözümü **kendi sınırına oturttu**
(`isvicre` 43,0° · `iskocya` 50,6° — hâlâ tuğla kırmızısı). Yasağı genişletmek
sorunu çözmedi, **taşıdı.** Hata genişlikte değil **yerdeydi.** Paletin 0-70°
bandı ölçülünce:
```
19,3 / 21,5   OSMANLI doğrudan / tâbi
30,0-30,3     süleyman·musa·mehmed·isa çelebi   ← Fetret payları, Osmanlı ailesi
——————————— 32°-63° BOŞ ———————————
63,8-69,7     fas · kirim · haciemir · sardinya  ← meşru yabancı kahveleri
```
ve 350-15° bandında **yedi yabancı devlet zaten var**: lehistan 359,3 ·
esrefogullari 0,2 · kazak-hanligi 5,2 · selcuklu 7,1 · napoli 8,8 ·
altinorda 13,2 · arnavutluk 14,4.

⇒ Kural kırmızının **tamamını** değil, Osmanlı ailesinin oturduğu **15-35°**
şeridini ayırıyor. ±22 yasağı bu yedi meşru rengi de dışlıyor, aday havuzunu
yanlış yerden kırpıyordu. Uygulanan: **25°±10**.

### Yazılan

```python
"aragon"     #c639b1    "belcika"    #4b9cae    "bretanya"   #36693f
"burgonya"   #ab9ccf    "ferrara"    #ae7e4b    "irlanda"    #06b1fc
"iskocya"    #3633d5    "isvicre"    #754bae    "kastilya"   #4bae4e
"luksemburg" #4b3f51    "mantua"     #2a6fd5    "navarra"    #c94530
"parma"      #ae4b75    "piza"       #2ac9a8    "siena"      #636f03
```

### Doğrulama

```
① AKTARIM       15/15 birebir ✓
② KISIT
   15 yeni arasında en dar ΔE  17,0  (navarra ↔ parma)     ✓ eşik 17
   komşu engelinden en dar ΔE  12,0  (kastilya)            ✓ eşik 12
   altlıktan en dar ΔE         17,5  (ferrara)             ✓ eşik 15
   hex çarpışması 0 ✓ · farklı hex 15/15 ✓ · kırmızı şeride düşen 0 ✓
   küme içi en dar: İtalya 17,4 · İber 33,1 · Kuzeybatı 19,3 · Adalar 37,0
③ CANLI DENETİM (py arac/renk_olc.py)
   114 → 129 kimlik · 14 görünmez · 71 çakışma · 1 örtüşme
   ⇒ zeminle BİREBİR AYNI, yeni ihlal SIFIR
```

📌 **Aktarım denetimi boşuna değildi:** öneri `piza #2ac9a8` idi, dosyaya bir
önceki turun `#305d84`'ü yazılmıştı. Elle aktarma sessizce bozuluyor; ölçümü
doğrulamak yetmiyor, **aktarımı da** doğrulamak gerekiyor.

### Sonraki adım — bende değil

Renk girdi, sıra `girdi.py`'nin izin listesinde (`yerlesimler_avrupa.js`). O
dosya MOTOR 2'nin. **235 nokta BOLGE kutusuna dokunmadan çizilir.**

---

## 3. ÇÜRÜK DÜZELTMELERİ — `renkler.py`

| yer | neydi | ölçüm |
|---|---|---|
| ~352 | *"ortaasya2 hâlâ `d:"kazak"` yazıyor"* | **çürük.** `d:"kazak"` **0**; `d:"kazak-hanligi"` 3 kayıt. 9 kimliğin 9'u tanımlı. Uyarı geçmişte doğruydu. |
| ~355+ | bayat ΔE bloğu, *"dolgu %30"* | **silindi, yenisi yazılmadı.** Ölçmeden yeni sayı yazmak aynı hatanın tekrarı olurdu. Blok ayrıca *"ΔE fonksiyonu yok, koştur-doğrula mümkün değil"* diyordu — `renk_olc.py` (ef4a018) o boşluğu kapattı; artık elle taşınan sayıya gerek yok. |

---

## 4. PARTİ 3 — ASYA'NIN 135'İ · başlanmadı

Yöntem hazır ve Parti 2'de sınandı: merge sonrası komşuluk + karşılıklı eşik
ölçümü + palet kutusu. 135 kimlik için tavanın 17'nin **altına** ineceğini
bekliyorum (daha çok kimlik, aynı kutu) — ama **ölçmeden yazmayacağım.**

⚠️ Bugün görünür karşılığı yok (`BOLGE` lon 62'de bitiyor, Asya 65,7'den
başlıyor). Kutunun önündeki iki engelden biri; öteki adacık kuralı
(`oturumlar/KARAR-BOLGE-KUTUSU.md`).

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

## 2b. İKİNCİ DALGA — `iran` moru + `zaporojye` · ✅ YAZILDI

### `iran` — kahveden mor aileye (koordinatör onayı + kullanıcı kuralı)

Koordinatör `#c03fab`'ı **şartlı** onayladı: paletin doygunluk profiline uyuyor
mu? Ölçtüm — **uymuyordu:**

| | C\* (bindirilmiş) | yüzdelik | ham HSV S | yüzdelik |
|---|---|---|---|---|
| palet medyanı (113 renk) | 18,6 | — | 0,48 | — |
| `#c03fab` (ilk aday) | **29,7** | **%88** | 0,67 | %73 |
| `#fe84c6` (yazılan) | 23,6 | %73 | **0,48** | %49 |

`#c03fab` p90'a (30,0) dayanıyordu ⇒ göz onu **vurgu** sanardı; 642 yıl ve 111
nokta için istenmeyen okuma. `#fe84c6` çeyrekler içinde (p75 = 23,7), ham
doygunluğu **tam medyan**, ve ayrışması da daha iyi: en yakın engel **17,1**
(`#c03fab`'ta 12,5).

```
safevi #6b4a7d   L* 66,8 · C*  9,2 · ton 345,1°
iran   #fe84c6   L* 80,1 · C* 23,6 · ton   0,3°     ΔE 20,0
⇒ ton farkı 15,2° (AİLE) · parlaklık farkı 13,3 (AYRIM)
```
⚠️ L\* 80 bir tercih değil **sonuç**: aynı tonda kalıp `safevi`den ΔE≥12
ayrışmanın tek yolu parlaklık/kroma — kullanıcının istediği "farklı parlaklık"
kısıtının doğrudan çıktısı.

### `zaporojye` — kullanıcının "kazaklar karışmasın" kararı

Kayıt tamdı (`devletler.js:1115`), eksik olan renk + `harita:`. Yeni slug
**açılmadı** (aynı kuruma iki kimlik = "iki otorite" sınıfı).
`harita:"zaporojye"` yazıldı — yetkimdeki tek alan.

🔴 **① EKSİK, GÖVDE BEKLENMİYOR.** `d:"zaporojye"` hiçbir yerleşim dosyasında
yok (ölçüldü: **0**). Zincir: ① yerleşim `d:`/`v:`/`s:` (VERİ işi) → ② `BOYALAR`
(bende) → ③ `harita:` (yalnız denetim). ② ve ③ yapıldı, ① yapılmadı.
**Üretimden sonra gövde çıkmaz; hata değil.**

Komşular **varsayılmadı, ölçüldü** — Dinyeper aşağısı (lon 30-38, lat 46-50,5),
1552-1775: `OSMANLI` 5 dönem · `rusya` 4 · `lehistan` 4 · `kirim` 1.

⚠️ **Kısıt sıralamasını önce yanlış kurdum.** 15 Avrupa renginden ΔE≥17
dayattım; tek aday kaldı ve bedeli `kazak-hanligi`'ndan ayrışmanın **22,3'e
düşmesiydi** — oysa kullanıcının istediği tam olarak o ayrım. Öncelik
düzeltildi: `kazak`tan ayrışma azamileştirildi, ötekilere proje kuralı (12).
📌 Ve 17 zaten **ulaşılamazdı**: 15 renk kutuyu karşılıklı 17 ile doldurunca
16. kimlik için tavan **15,0**'a düştü. **Tavan kimlik sayısıyla düşer.**

```
zaporojye #8c92fe   C* 18,6 = paletin MEDYANI (%47) · S 0,45
  kazak-hanligi #ad1457'den ΔE 33,0   ← kullanıcının istediği ayrım
  komşulardan 18,9 · 15 Avrupa'dan 12,1 · altlıktan 32,5
```
Kızıl-magenta `kazak-hanligi` ↔ menekşe-mavi `zaporojye`: tonca da karışmaz.

### Doğrulama — CANLI, Avrupa MERGE EDİLMİŞ hâlde

MOTOR 2 bu arada `yerlesimler_avrupa.js`'i izin listesine aldı; denetim artık
**1235 nokta** okuyor, yani 15 rengim **varsayılan değil ölçülmüş** komşuluğa
karşı sınandı.

```
① AKTARIM                              17/17 birebir ✓
② CANLI KOMŞULUK (1235 nokta)          17 kimliğin 17'si OK · ihlal 0
     en dar komşu ΔE  12,0  (kastilya)      en dar altlık ΔE 17,5 (ferrara)
③ py arac/renk_olc.py
     130 kimlik · 14 görünmez · 69 çakışma · 1 aynı-anahtar örtüşmesi
     🔴 16 yeni kimliğin HİÇBİRİ çakışma listesinde YOK
     🔴 `iran` da artık listede YOK — önce 3 çiftteydi
        (iran↔memluk 6,6 · iran↔timurlu 9,4 · iran↔suud 11,6 → üçü de kapandı)
④ 16 yeni arasında en dar ΔE  12,1  (mantua ↔ zaporojye — komşu değiller)
```
⚠️ Çakışma 71→69: nokta kümesi de 998→1235 değiştiği için bu **saf
karşılaştırma değil.** Saf ölçüt şu ve sağlandı: *benim kimliklerim listede yok.*

📌 Yeni denetim (MOTOR 2, aynı-hex) `kavalali ↔ turkmen #00acc1` çiftini
bildiriyor — **benim değil**, `renkler.py`'de kasten paylaşımlı olduğu yazılı.

---

## 3. ÇÜRÜK DÜZELTMELERİ — `renkler.py`

| yer | neydi | ölçüm |
|---|---|---|
| ~352 | *"ortaasya2 hâlâ `d:"kazak"` yazıyor"* | **çürük.** `d:"kazak"` **0**; `d:"kazak-hanligi"` 3 kayıt. 9 kimliğin 9'u tanımlı. Uyarı geçmişte doğruydu. |
| ~355+ | bayat ΔE bloğu, *"dolgu %30"* | **silindi, yenisi yazılmadı.** Ölçmeden yeni sayı yazmak aynı hatanın tekrarı olurdu. Blok ayrıca *"ΔE fonksiyonu yok, koştur-doğrula mümkün değil"* diyordu — `renk_olc.py` (ef4a018) o boşluğu kapattı; artık elle taşınan sayıya gerek yok. |

---

## 2c. ÜÇÜNCÜ DALGA — üç çakışma · ✅ YAZILDI

| çift | önce | sonra | değişen | gerekçe |
|---|---|---|---|---|
| `hollanda` ↔ `ispanya` | **4,7** | 19,3 | `hollanda` `#7e332a` | komşu · 9 vs 26 kısıt |
| `almanya` ↔ `papalik` | 9,3 | 19,1 | `papalik` `#2a4b1e` | komşu · 15 vs 24 kısıt |
| `trabzon-rum` ↔ `dulkadir` | **0,0** | 12,0 | `trabzon-rum` `#63bdc0` | komşu DEĞİL, 312 km |

### 🔴 `hollanda ↔ ispanya`: hiçbir renk değişmedi, VERİ değişti

Bu çakışmayı bir renk kararı üretmedi. `yerlesimler_avrupa.js` merge edilince
(998→1235 nokta) iki renk **ilk kez petek komşusu oldu.** İkisi yıllardır
aynıydı; onları yan yana getiren veriydi.

📌 **Ders: renk kararı verinin bir FONKSİYONU, sabit değil.** Bugün temiz olan
bir palet, yarın merge edilen bir partiyle kirlenir ve kimse rengi
değiştirmemiş olur. ⇒ Palet, her merge'den sonra yeniden denetlenmeli.

### `papalik`: tek değişiklik İKİ kusuru kapattı

Eski `#c9c1a3` altlıktan **ΔE 5,1** — paletin **en görünmez** rengiydi;
Papalık haritada boşluk gibi okunuyordu. Yeni hâl 27,1 (**5,3 kat**).
⚠️ Altın/krem kimliği **korunamadı**, ölçüldü: ton ±25° penceresinde ΔE≥12
sağlayan aday yalnız 118-120° (yeşil) ucunda; 95° civarı İtalya'nın kalabalık
komşuluğunda dolu. Kimlik sürekliliğini istedim, veri izin vermedi —
*"yanlış renk boşluktan kötüdür"* gereği görünürlük tercih edildi.

### `trabzon-rum`: kural "meşru" diyordu, yine de değiştirdim

Ölçtüm: **petek komşusu değiller.** Dosya başındaki kural (*"paylaşım sorun
değildir, yeter ki komşu olmasınlar"*) bu paylaşımı meşru sayıyor ve zaten
meşru diye listelemişti. Yine de değiştirildi: 312 km, ikisi de Anadolu'da,
1337-1350 örtüşmesi ⇒ 1340 kesitinde **aynı ekranda iki özdeş turkuaz gövde.**
📌 ①. dersin doğrudan uygulaması: **kural komşuluğa bakıyor, ölçüt daha geniş
olmalı.**

### 🔴 `almanya` — DOKUNULMADI, ölçülmüş gerekçeyle

`almanya` **beş** çakışmada birden (`litvanya` 5,3 · `letonya` 5,4 ·
`danimarka` 9,0 · `isvec` 10,7 · `venedik` 11,4) **ve** altlıktan 12,2
(görünmez). Paletin en sorunlu düğümü.

**Neden bırakıldı:** 24 komşu — paletin en kısıtlı kimliği. Ton ±30° / C\*
12-24 penceresinde ΔE≥12 sağlayan aday var ama **en iyi pay 12,0-12,6**, yani
eşiğin tam üstünde; ve hepsi C\* %62+ yüzdelikte. Beş çakışmayı kapatmak
`almanya`yı tek başına düzeltmekle olmuyor — **palet düzeyinde bir karar**
gerekiyor (kutu genişletme ya da komşularından bazılarının taşınması).
⇒ Ayrı iş olarak bildirildi. *"Ölçtüm, bırakıyorum"* — sebebi rakamlı.

### Doğrulama

```
① aktarım                3/3 birebir ✓
② hedeflenen çiftler      3/3 çözüldü ✓
③ değişenlerin kendisi    3/3 temiz (en dar pay 12,0 · en dar altlık 18,6) ✓
④ py arac/renk_olc.py     1235 nokta · 130 kimlik
     görünmez            14 → 13
     komşu çakışması     72 → 66     (iran 3 · bu dalga 3)
     aynı-hex çakışması   1 →  0
     aynı-anahtar          1 (afsar↔kacar — VERİ işi, bende değil)
     🔴 20 kimliğimin HİÇBİRİ çakışma listesinde YOK
```

---

## 4. PARTİ 3 — ASYA · zaman ekseni ÖLÇÜLDÜ, komşuluk BLOKE

🔴 **N1 engeli doğrulandı ve tahminden büyük:** `renk_olc.py:56`
`KUTU = box(-25,-5,75,72)`. Asya `lon 65,71 .. 141,35` ⇒ **344 noktanın 302'si
(%88) zarfın dışında.** Komşuluk ölçümü sessizce eksik çıkar. MOTOR 2 düzeltiyor.

### Zarftan bağımsız olan: EŞZAMANLILIK

```
yerlesimler_asya.js   344 nokta · 147 kimlik · renkler.py'de tanımsız 135
eşzamanlılık çizgesi  6.640 kenar · en yüksek derece 146 (travankur)
                      ortanca derece 87 · eşzamanlısı olmayan 0
🔴 AYNI ANDA SAHNEDE EN ÇOK: 69 kimlik (1514 civarı)
   ⇒ 69 boyutunda KLİK var ⇒ eşzamanlılık çizgesinin kromatik sayısı = 69
   DSATUR de 69 verdi (alt sınır = üst sınır, çizge o noktada tam)
```

### Bunun anlamı — "135 kimlik ≠ 135 renk" sorusunun cevabı

**Tavan 135 değil 69.** Ve 69 da yalnız ZAMAN ekseninin tavanı; komşuluk
eklenince gerçek ihtiyaç bunun **altına** iner, çünkü eşzamanlı olup **komşu
olmayan** çiftler renk paylaşabilir.

📌 Ve dosya başındaki ölçüm bu beklentiyi destekliyor: 1515 nokta / 261 kimlik
üzerinde **gerçek Voronoi komşuluğuyla DSATUR 8 renk** vermişti. Yeni kimlikler
grafiği yoğunlaştırmıyor, **genişletiyor.**

⚠️ **Ve kendi ①. dersimin sınırı burada:** 15 Batı Avrupa devletine uyguladığım
*"hepsi birbirinden ΔE ≥ 17"* kısıtı 135'e **taşınamaz** ve taşınmamalı. O
kısıt meşruydu çünkü 15'i tek bir dar coğrafyada, aynı ekranda duruyordu.
Asya'nın 135'i bütün kıtaya yayılmış — Travankur ile Kamçatka'ya karşılıklı
eşik dayatmak anlamsız. ⇒ **Doğru kısıt bölgesel:** her coğrafi küme kendi
içinde karşılıklı, kümeler arası yalnız komşuluk. Kümeleri zarf düzelince
ölçeceğim.

### 🔴 ZARF "DÜZELTİLDİ" AMA DEĞER DEĞİŞMEDİ — doğrulandı

Koordinatör *"zarf düzeldi, Asya'ya dönebilirsin"* dedi. **Ölçtüm, düzelmemiş:**

```
renk_olc.py:76   KUTU = box(_b[0]-13, _b[1]-6.5, _b[2]+13, _b[3]+10)
uret_petek.py    BOLGE = box(-12, 1.5, 62, 62)
⇒ KUTU.bounds = (-25.0, -5.0, 75.0, 72.0)
⇒ ESKİ ELLE YAZILMIŞ DEĞERİN BİREBİR AYNISI
```
MOTOR 2'nin işi **yapısal olarak doğru** — elle kopya silindi, kutu açılınca
otomatik izleyecek. Ama **sayı değişmedi**; Asya lon 141,35'e gidiyor.

📌 **Ders: "düzeltildi" bir DURUM bildirimi, DEĞER bir ÖLÇÜMDÜR.** İkisi ayrı
şey ve ikincisi doğrulanmadan birincisine güvenilmez — §B10'un araç sürümü.
⚠️ Sonuç: `renk_olc.denetle()` Asya çakışmalarını **BOLGE açılana kadar
göremez**, ve BOLGE açılması bu renklere bağlı ⇒ **tavuk-yumurta.** Kabul
ölçütü buna göre kurulmalı: aracın "temiz" demesi Asya için delil değil.

### Ölçüm — kendi zarfımla (`box(-25,-10,155,75)`), `arac/*.py`'ye dokunmadan

```
canlı 1235 + asya 344 = 1579 nokta · ad çakışması 0
komşuluk (renksiz 135 arasında)   672 kenar
  en yüksek derece 41 (babur-imparatorlugu) · ortanca 8 · komşusuz 0
  renkli komşusu olan 80/135 · en çok renkli komşu 10

🔴 KROMATİK SAYI (DSATUR) : 7
```

**135 kimlik için gereken ayrı renk: YEDİ.**
Eşzamanlılık tavanı 69'du; komşuluk ekseni **62 düşürdü**
(6.640 eşzamanlılık kenarının yalnız **672**'si gerçek komşuluk).
Dosya başındaki eski ölçümle tutarlı: 261 kimlik → 8 renk.

⇒ **Parti 3'ün şekli değişti:** bu "135 hex üret" işi değil, "7 renk sınıfı
ata, 80 kimliğin renkli komşu kısıtlarına uy" işi.

### Ve `trabzon-rum` testi 135 kimliğe uygulandı

Aynı renk sınıfına düşen çiftler komşu **değil** — ama yakın olabilirler.
Ölçtüm (eşzamanlı + 600 km, MOTOR 2'nin dedektör eşiği):

```
56 çift riskli — 7'si 0 km (aynı yerleşimi paylaşıyorlar):
  afgan-durrani ↔ ingiliz-hindistani · babur-imparatorlugu ↔ delhi-sultanligi
  behmeni ↔ berar · delhi-sultanligi ↔ pandya · hanthawaddy ↔ ingiliz-hindistani
  karnatik ↔ nayak-devletleri · nguyen-beyligi ↔ nguyen-hanedani

⇒ 600 km kuralı KENAR sayılıp yeniden boyandı: YİNE 7 RENK
```
✅ **Sonuç sağlam:** görsel yakınlık kuralı eklense bile 7 yetiyor. Yani
`trabzon-rum` sınıfı risk Asya'da renk sayısını artırmıyor, yalnız **hangi
kimliğin hangi sınıfa gireceğini** değiştiriyor.

⚠️ Ölçümün gevşekliğini kaydediyorum: `eşzamanlı` ve `yakın` bağımsız
kontrol ediliyor (A'nın P noktası ile B'nin Q noktası yakın **ve** A'nın bir
dönemi B'nin bir dönemiyle örtüşüyor — ama aynı nokta-dönem çifti olmak
zorunda değil). Yani 56 sayısı **fazla saymadır**; ve fazla saymayla bile 7
tutuyor ⇒ hüküm güçleniyor, zayıflamıyor.

### ✅ YAZILDI — 37/135, SIFIR YENİ HEX

Liste boyama koştu: her kimliğe kendi renkli komşularından ΔE≥12 olan mevcut
palet renkleri aday, çatışma çizgesi (komşuluk ∪ 600 km yakınlık) kısıt.

```
135/135 atandı · çözülemeyen 0 · ΔE<12 ihlali 0
kullanılan farklı palet rengi: 11
🔴 PALET BÜYÜMESİ: 0 yeni hex — 167 kimlik, 125 farklı hex
```

**Ama yalnız 37'si yazıldı.** Sebep: `BOYALAR` girdisi `(ad, hex)` çifti ister
ve 135'in **yalnız 37'sinin `devletler.js`'te kaydı var.** Kalan 98 için ad
üretmek slug düzeltmek demekti — *"Bengal Sultanligi"*, *"Cin Cumhuriyeti"* —
bozuk Türkçe, üstelik **haritanın lejantında** görünecek. **Ad uydurulmadı.**
⇒ 98'lik kalan bir `devletler.js` KAYIT işi; bu oturumun yetkisi yalnız
`harita:` alanı. Renkleri ölçülmüş ve hazır, kayıtlar gelince tek adımda girer.

### 🔴 VE DENETİM BENİ YAKALADI — süzgeç eksikti

İlk yazımda `görünmez` 13 → **14** çıktı. Sebep bendeydi: aday süzgecim
*"renkli komşulardan ΔE≥12"* uyguluyordu ama **altlıktan görünürlüğü (≥15)
şart koşmuyordu.** `babur-imparatorlugu` — Bâbürlü İmparatorluğu, Asya'nın en
büyük gövdelerinden biri — `yemen`'in sınırdaki rengini (`#b5a05b`, altlıktan
tam 15,0) miras aldı.

Düzeltildi: `#0288d1` (`darfur` ile paylaşımlı), altlıktan **34,6**.
⚠️ Kırmızı aile adayları (`mehmed-celebi` · `musa-celebi`) elendi — Fetret
payları Osmanlı ailesindendir.

📌 **Ders: liste boyamada aday süzgeci, tekil rengin BÜTÜN kabul ölçütlerini
taşımalı.** Komşudan ayrışma yetmiyor; görünürlük de kabul ölçütü ve onu
süzgece koymadığım için ihlal ancak denetimde çıktı.

### Nihai durum

```
py arac/renk_olc.py   →  1235 nokta · 167 kimlik
  görünmez             13   (Asya öncesiyle AYNI)
  komşu çakışması      66   (Asya öncesiyle AYNI)
  aynı-hex çakışması    0
  aynı-anahtar          1   (afsar↔kacar — VERİ işi)
  aktarım 37/37 birebir · çatışma çizgesinde ihlal 0
```
📌 Çıktıdaki çok sayıda `ÖLÇÜLEMEDİ` satırı **ihlal değil**: aynı-hex
dedektörü, canlı veride dönemi olmayan kimlikler için doğru biçimde
*"ölçülemedi ≠ temiz"* diyor. Asya girdiye alınınca ölçülebilir hâle gelecek.

---

## 4b. BALTIK/İSKANDİNAV KÜMESİ — `almanya` çözüldü · ✅ YAZILDI

### Teşhis: sorun `almanya` değil, KÖŞE

`almanya` beş çakışmadaydı ve tek tek bakınca çözülemiyordu (24 komşu,
paletin **en kısıtlı** düğümü). Ölçünce kök sebep göründü — köşede **altı
yakın-nötr renk** yan yana:

```
almanya #9a9a9a gri · letonya #78909c mavi-gri · litvanya #a1887f sıcak gri
finlandiya #90a4ae mavi-gri · isvec #7bb5c9 soluk mavi · danimarka #8f8fb5 soluk mor
⇒ aralarında DOKUZ çakışma, en kötüsü finlandiya↔letonya 3,4
```
📌 Kullanıcının *"1541-45 Macaristan'da üç yeşil leke, hangisi ne belli
değil"* şikâyetinin aynısı — Baltık'ta ve **altı** renkle.

### Çözüm: koordinatör yönü — "onu değil KOMŞUSUNU oynat"

`almanya` **sabit** tutuldu, beş komşusu **birlikte** çözüldü. Tek tek
çözülemezdi: beşi birbiriyle de çakışıyordu.

| kimlik | eski | yeni | ton kayması |
|---|---|---|---|
| `letonya` | `#78909c` | `#c96990` | 122,5° |
| `litvanya` | `#a1887f` | `#a87b57` | 1,2° |
| `isvec` | `#7bb5c9` | `#63bda2` | 30,0° |
| `finlandiya` | `#90a4ae` | `#99a857` | 17,7° |
| `danimarka` | `#8f8fb5` | `#b484e7` | 10,9° |

`letonya` en uzağa taşındı çünkü köşenin **en kalabalık düğümüydü** (4
çakışma); uzağa gitmesi dördünü birden kapattı. Yeni tonu 13,9°, paletin
meşru bandında (`altinorda` 13,2 · `arnavutluk` 14,4 zaten orada; Osmanlı
şeridi 15-35°, dışında).

### ⚠️ TAVAN ÖLÇÜLDÜ AMA KASTEN KULLANILMADI

Beşinin karşılıklı tavanı **ΔE 26**. O çözüm uçlara kaçıyordu:
`finlandiya #0387fc` (S 0,99, ton kayması 126°) · `letonya #096612` (S 0,91).

⇒ Amaç **çakışmayı kapatmak** ve bunun için 12 yeterli; **15** uygulandı.
**Eşiği yükseltmek kapanmaya bir şey KATMAZ, yalnız paletin donuk kimliğini
bozar.** Beşinin de ham doygunluğu **S 0,48 = paletin medyanı**.

📌 Bu, bu oturumda üçüncü kez öğrenilen şey: *tavanı ölçmek ile tavanı
kullanmak ayrı kararlardır.* (Avrupa'da 23→17, burada 26→15.)

### Doğrulama

```
aktarım 5/5 birebir ✓ · dokuz hedef çakışmanın DOKUZU kapandı ✓
  almanya↔danimarka  9,0→24,4    almanya↔isvec     10,7→16,0
  almanya↔letonya    5,4→19,0    almanya↔litvanya   5,3→12,5
  danimarka↔isvec   10,9→37,3    finlandiya↔isvec   6,6→17,6
  finlandiya↔letonya 3,4→33,3    isvec↔letonya      7,4→35,0
  letonya↔litvanya   9,7→19,0

py arac/renk_olc.py  →  1235 nokta · 167 kimlik
  görünmez         13 → 11   (letonya ve finlandiya de görünür oldu)
  komşu çakışması  66 → 57
  aynı-hex          0 · aynı-anahtar 1 (afsar↔kacar, VERİ işi)
```
### 4b-2. `almanya`nın kendi rengi — griden maviye ✅

Koordinatör kararı: görünür yap. **Şartı önce yerine getirdim** — grinin
kasıtlı olduğuna dair gerekçe arandı, **bulunamadı:**
```
· satırın yanında gerekçe yorumu YOK
· git log -S'"almanya"' -- arac/renkler.py → tek commit (6cb69b1,
  Oturum 3'ün 77→212 kayıtlık TOPLU işi) — tasarım kararı değil
· belgelerde "gri kimliktir" diyen bir kural YOK
```
⇒ Gri bir **varsayılandı.** Ve mesele yalnız görünürlük değil: bu atlasta
**gri "veri yok" rengidir.** Kutsal Roma 1281-1806 arası Avrupa'nın en büyük
gövdelerinden biri ve "bilmiyoruz" rengiyle çiziliyordu — görünmezlik değil,
**yanlış bir mesaj.**

**Ton seçimi ölçümle:** 24 komşunun tonları çemberin neredeyse tamamını
kaplıyor (14·51·54·70·71·76·80·97·120·126·127·152·165·185·249·283·289·290·
318·321·330·333·336·359) — **tek boşluk 185-249 arası.** Almanya oraya kondu.

```
#9a9a9a → #16c6fe   ton 213,5° (en yakın komşu tonundan ~28° uzak)
  altlıktan  12,2 → 32,6      pay (24 komşu + Osmanlı) ΔE 15,4
  C* 23,5 = %68 yüzdelik      tavan 17,4 idi — ZORLANMADI
```
⚠️ Ham doygunluk S 0,91 = %83 yüzdelik, paletin üst çeyreğinde. Kabul edildi
ve sebebi ölçüldü: L\* 80 civarında kromatik bir MAVİ üretmenin RGB'de başka
yolu yok. Algısal ölçü C\* ve o %68'de — aykırı değil.

🟢 **Yan fayda:** `almanya ↔ venedik` 11,4 → 19,8. Almanya'nın kalan tek
çakışmasıydı; bu hamle onu da kapattı. **`almanya` artık tamamen temiz** —
ne çakışmada ne görünmezler listesinde.

```
py arac/renk_olc.py  →  1235 nokta · 167 kimlik
  görünmez         11 → 10
  komşu çakışması  57 → 56
```

---

## 5. ESKİ §4 — PARTİ 3 notu (aşıldı)

Yöntem hazır ve Parti 2'de sınandı: merge sonrası komşuluk + karşılıklı eşik
ölçümü + palet kutusu. 135 kimlik için tavanın 17'nin **altına** ineceğini
bekliyorum (daha çok kimlik, aynı kutu) — ama **ölçmeden yazmayacağım.**

⚠️ Bugün görünür karşılığı yok (`BOLGE` lon 62'de bitiyor, Asya 65,7'den
başlıyor). Kutunun önündeki iki engelden biri; öteki adacık kuralı
(`oturumlar/KARAR-BOLGE-KUTUSU.md`).

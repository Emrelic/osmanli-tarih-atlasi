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

## 4c. 🔴 KENDİ ZARFIM DA KUSURLUYDU — kendi uyarıma kendim düştüm

MOTOR 2 kilitli kutu zarfını verdi: `box(-25, -17.5, 159, 74)`. Benimki
`box(-25, -10, 155, 75)` idi — **güneyde dar.** Karşılaştırdım:

```
Asya lat aralığı  -10,18 .. 50,24
KUPANG (Timor)    lat -10,18  ⇒ BENİM ZARFIMIN DIŞINDA, hücresi boşalmış
kaybolan komşuluk: 4 çift
  bali-kralliklari↔yogyakarta · banten-sultanligi↔yogyakarta
  italya↔travankur · seylan-sinhala↔somali
```

📌 **Bu, koordinatörü uyardığım hatanın aynısı.** "Zarf lon>75'i kesiyor"
diye N1'i durdurmuştum; kendi zarfım da lat<−10'u kesiyormuş.

### Etkisi ÖLÇÜLDÜ — sıfır

Kilitli kutu zarfıyla, **yalnız yazdığım 37 kimlik için** yeniden koştum:
```
İHLAL 0
```
Kaybolan dört çiftin hiçbiri bu 37'yi ilgilendirmiyor. **Kusur sonucu
değiştirmedi** — ama bu ancak *ölçüldükten sonra* söylenebilir, ve ölçülmeden
söylenseydi tahmin olurdu.

⚠️ İlk teyit koşum **yanlış alarm** verdi: betiğim "Asya verisinde geçen ve
rengi olan" **49** kimliği aldı, benim **37**'mi değil. Rapor ettiği altı
"ihlal" (`safevi↔altinorda` 9,2 · `fransa↔toskana` 9,3 · `timurlu↔altinorda`
10,8 · `safevi↔gurcistan` 11,3 · `timurlu↔karakoyunlu` 11,5 ·
`ispanya↔ceneviz` 11,7) **zeminde zaten vardı** — hepsi ilk gün ölçtüğüm 71
çakışmanın içinde. Ölçütü daralttım, ihlal 0 çıktı.
📌 Ders: *denetimin kapsamı da bir ölçüdür.* Yanlış kümeye bakan bir denetim,
yanlış cevabı kendinden emin verir.

### Bonus — kalan 98 için renk ihtiyacı

Doğru zarfla, renksiz kalan **98** kimliğin alt çizgesi üzerinde:
```
kromatik sayı: 4
```
⇒ 98 kayıt geldiğinde **dört renk** yetiyor. Yine sıfır yeni hex beklenebilir.

📌 **Ders (kendi payıma): zarfı veriye göre değil, ÜRETİMİN KULLANACAĞI zarfa
göre kur.** "Yeterince geniş" bir tahmindir; kilitli kutu bir ölçüdür.
`renkler.py`'deki 10 grup başlığı ve blok kütüğü buna göre düzeltildi
(`grep "ASYA · ① EKSİK"` → 10 satır, hepsi `zarf(-25,-17.5,159,74) teyitli`).

---

## 4d. ✅ ERTELENMİŞ DOĞRULAMA KOŞTU VE GEÇTİ

Kabul ölçütü şöyle kurulmuştu:
```
ŞİMDİ    geçici zarfla doğrulandı — scratchpad
SONRA    🔴 KUTU AÇILDIKTAN SONRA renk_olc.py ile YENİDEN doğrulanacak
```
**Koştu.** `BOLGE` açıldı, `KUTU` onu izledi:

```
renk_olc.KUTU  = (-25.0, -17.5, 159.0, 74.0)   ← teyit ettiğim kilitli kutunun AYNISI
canlı veri     = 1615 nokta · lon -9,70..141,35 · lat -10,18..63,43
ZARF DIŞINDA   = 0 nokta                        ← Kupang dahil, artık içeride
```

### Sonuç — gerçek araçla, gerçek zarfla, tam veriyle

| küme | kimlik | komşuluğu ölçülen | çakışma | görünmez |
|---|---|---|---|---|
| 37 Asya | 37 | **37** | **0** | **0** |
| 26 öteki (15 Avrupa + `zaporojye` + 10 düzeltilen) | 26 | 25 | **0** | **0** |

`zaporojye`nin komşuluğu hâlâ ölçülemiyor — beklenen: `d:"zaporojye"` 0 kayıt,
zaten *"① eksik, gövde beklenmiyor"* diye işaretlenmişti.

📌 **Geçici zarfla yapılan ölçüm doğrulandı.** Kupang kusuru sonucu
değiştirmemişti — bunu o gün ölçmüştüm, bugün gerçek araç onayladı.
📌 Ve `ÖLÇÜLEMEDİ` sayısı **113 → 4**: Asya canlıya alınınca 37 kimlik
ölçülebilir hâle geldi ve hepsi temiz çıktı.

## 4e. YENİ 59 KİMLİK (VERİ KİMLİK 3) — ölçüldü, İŞ YOK

🔒 Üretim koşusu sırasında istendi; `arac/renkler.py` KİLİTLİ olduğu için
yalnız ÖLÇÜLDÜ, yazılmadı.

```
BOYALAR 167 → 226 kimlik · 125 → 184 farklı hex   ⇒ 59 yeni kimlik, 59 YENİ HEX
  altlıktan ayrışmayan (<15) : 0
  komşusuyla çakışan  (<12) : 0
  hex çarpışması            : 0
  komşusu ölçülemeyen       : 0/59
```
⇒ **Kilit kalkınca uygulanacak düzeltme YOK.** Beklenen çakışma tablosu boş.

📌 Not: bu 59 kimlik her birine **yeni hex** almış (palet 125→184). Benim
53 kimliğim **sıfır yeni hex** ile girmişti. İki yaklaşım da meşru — ama
palet 184 hex'e çıktığı için kutu daraldı; bundan sonraki partilerde
karşılıklı eşik tavanının düşeceğini beklemek gerekir (*tavan kimlik
sayısıyla düşer* — §2b'de ölçülmüştü).

### Ve merge YENİ çakışma doğurmadı

Veri 1235 → 1615 noktaya çıktı. Kendi dersim bunu sormayı gerektiriyordu
(*renk kararı verinin bir fonksiyonudur; `hollanda↔ispanya` hiçbir renk
değişmeden doğmuştu*). Ölçüldü:
```
görünmez 10 → 10 · çakışma 56 → 56 · aynı-hex 0 → 0
```
Bu sefer merge sessiz bir çakışma üretmedi.

---

## 6. RENK DUVARI — ölçüldü, ve beklediğim yerde DEĞİLDİ

🔒 Üretim koşusu sırasında, `arac/` kilitliyken yalnız **ölçüldü.**

### ① Duvar iki ayrı şey — karıştırılmamalı

```
A) PAKETLEME ARZI — kabul bölgesine karşılıklı ΔE≥12 kaç renk sığar?
     palet kutusu içinde (L* 63,5-80,8 · C* 4,9-33)      38 renk
     tam gamut (yalnız altlık≥15 + kırmızı yasağı)       73 renk
     kırmızı yasağı da kalksa                            74 renk

B) KROMATİK TALEP — bugünkü komşuluk çizgesi kaç AYRI renk istiyor?
     226 kimlik · 1.222 kenar · en yüksek derece 69 (ingiltere)
     DSATUR: 7   ·   en büyük klik: 7      ⇒ 7 KESİN (alt sınır = üst sınır)
```

⇒ **Kullanılan kapasite: %18,4** (kutu) · **%9,6** (tam gamut).

### 🔴 Görünürdeki çelişki ve çözümü

Paketleme duvarı **38** diyor ama palet **184 hex** kullanıyor. Çelişki değil:
**184 hex birbirinden ≥12 DEĞİL.** Yalnız *komşu oldukları yerde* ayrışıyorlar.
Dosya başındaki kural zaten bunu söylüyordu — *"hex tekrarı hata değil,
KOMŞULUK hatadır"* — ama sayı bunu ilk kez görünür yaptı: palet, 38 kapasiteli
bir kutuda 184 renk taşıyor ve bu **ancak paylaşım sayesinde** mümkün.

### 🔴 ASIL DUVAR: UYUYAN ÇATIŞMALAR

```
226 kimlik · 25.425 olası çift · 1.222'si gerçekten komşu (yoğunluk %4,81)
ΔE < 12 olan çift            : 2.682   (%10,5)
  bunlardan KOMŞU olan       :    55   ← bugün görünen borç
  bunlardan komşu OLMAYAN    : 2.627   ← UYUYAN
```

⇒ **Yeni bir komşuluk doğduğunda çakışma olasılığı ≈ %10,5.**
Bugün gözlenen oran %4,5 (55/1.222) — coğrafya lehimize çalışıyor, ama
palet yoğunlaştıkça %10,5 yükselir.

📌 **`hollanda↔ispanya` bu 2.627'den biriydi.** Hiçbir renk değişmedi; merge
onu uyandırdı. Duvar "renk biter" değil, **"her merge uyuyan bir çatışmayı
uyandırabilir"**.

### ⚠️ VE BU, KENDİ UYARIMI KISMEN GERİ ALIYOR

Koordinatöre *"palet 184 hex'e çıktı, kutu daraldı, tavan düşecek"* demiştim.
Ölçüm bunu **kısmen çürüttü:**
- Doğru olan kısım: bir PARTİ içinde karşılıklı eşik tavanı kimlik sayısıyla
  düşüyor (Avrupa 15 kimlikte 17 · 16'da 15) — bu ölçülmüştü ve geçerli.
- **Yanlış olan kısım:** bunu genel büyüme sınırı gibi sundum. Değil.
  Genel talep **klik büyüklüğüyle** belirleniyor ve klik 7'de duruyor —
  114 kimlikte de, 226 kimlikte de. Yeni kimlikler grafiği **yoğunlaştırmıyor,
  genişletiyor** (dosya başındaki 2026-07-30 ölçümü de aynısını demişti).

⇒ Düzeltilmiş hüküm: **renk arzı darboğaz DEĞİL** (%18 kullanımda). Darboğaz,
uyuyan çatışmaların oranı — ve onu düşürmenin yolu palet büyütmek değil,
mevcut 2.682 yakın çifti seyreltmek.

### Nokta duvarıyla yan yana

MOTOR 3 nokta tarafını **~5.000** diye ölçtü. Renk tarafında talep 7, arz 38+.
⇒ **Atlasın büyüme sınırı renk değil, NOKTA.**

---

## 7. BİLİNEN BORÇ — adlarıyla (koordinatör istedi)

### 10 GÖRÜNMEZ — altlıktan ΔE < 15

| ΔE | kimlik | hex | ad |
|---|---|---|---|
| 9,7 | `sovalye` | `#b0a08a` | St. Jean Şövalyeleri |
| 12,2 | `atinadukaligi` | `#8a9e8a` | Atina Dukalığı |
| 12,4 | `somali` | `#b5a06b` | Somali sultanlıkları |
| 13,1 | `karadag` | `#9e8f6b` | Karadağ |
| 13,8 | `romanya` | `#c9b56b` | Romanya |
| 14,5 | `kazan` | `#c98f6b` | Kazan Hanlığı |
| 14,6 | `adal` | `#a08f5b` | Adal / Harar |
| 14,7 | `hicaz` | `#9e8a5b` | Hicaz Krallığı |
| 14,8 | `sammar` | `#a0885b` | Şammar (Hâil) |
| 15,0 | `yemen` | `#b5a05b` | Yemen İmamlığı |

📌 Onunun da tonu **toprak/tan ailesinde** — bej altlığa en yakın aile. Bu
tesadüf değil, **yapısal**: altlık `#e8dfc8` ve bu on renk onun komşuluğunda.

### 55 ÇAKIŞMA — ΔE < 12, komşu çiftler

En çok çakışmada olanlar (kimi oynatmak en çok kapatır):
`altinorda` 6 · `adal` 5 · `habesistan` 5 · `memluk` 5 · `bizans` 5 ·
`somali` 4 · `yemen` 4 · `ilhanli` 4

| # | ΔE | a | b |
|---|---|---|---|
| 1 | 0,8 | `hicaz` | `sammar` |
| 2 | 2,9 | `adal` | `somali` |
| 3 | 3,3 | `karaman` | `kilikya-ermeni` |
| 4 | 3,5 | `memluk` | `yemen` |
| 5 | 3,6 | `funj` | `habesistan` |
| 6 | 3,7 | `somali` | `yemen` |
| 7 | 4,4 | `benihalid` | `suud` |
| 8 | 4,7 | `adal` | `yemen` |
| 9 | 4,7 | `bizans` | `ilhanli` |
| 10 | 4,9 | `avusturya` | `romanya` |
| 11 | 5,2 | `arnavutluk` | `napoli` |
| 12 | 5,6 | `sirbistan` | `venedik` |
| 13 | 5,7 | `habesistan` | `nube` |
| 14 | 5,7 | `ceneviz` | `sardinya` |
| 15 | 6,6 | `suud` | `yemen` |
| 16 | 6,8 | `sirbistan` | `yunanistan` |
| 17 | 6,9 | `adal` | `memluk` |
| 18 | 7,1 | `bizans` | `candar` |
| 19 | 7,3 | `memluk` | `teke` |
| 20 | 7,4 | `gurcistan` | `karakoyunlu` |
| 21 | 7,6 | `hamid` | `memluk` |
| 22 | 7,6 | `artuklu` | `karakoyunlu` |
| 23 | 7,7 | `hicaz` | `suud` |
| 24 | 8,1 | `bizans` | `napoli` |
| 25 | 8,2 | `altinorda` | `bizans` |
| 26 | 8,2 | `bogdan` | `bulgaristan` |
| 27 | 8,4 | `altinorda` | `lehistan` |
| 28 | 8,5 | `eretna` | `taceddin` |
| 29 | 8,6 | `sammar` | `suud` |
| 30 | 8,6 | `milanoduka` | `toskana` |
| 31 | 8,7 | `candar` | `germiyan` |
| 32 | 8,7 | `altinorda` | `gurcistan` |
| 33 | 8,7 | `hamid` | `teke` |
| 34 | 8,9 | `candar` | `ilhanli` |
| 35 | 9,0 | `ceneviz` | `kirim` |
| 36 | 9,1 | `ceneviz` | `sovalye` |
| 37 | 9,1 | `adal` | `habesistan` |
| 38 | 9,2 | `habesistan` | `mehdi` |
| 39 | 9,2 | `altinorda` | `safevi` |
| 40 | 9,3 | `fransa` | `toskana` |
| 41 | 10,1 | `altinorda` | `ilhanli` |
| 42 | 10,1 | `atinadukaligi` | `venedik` |
| 43 | 10,3 | `arnavutluk` | `bizans` |
| 44 | 10,5 | `burhaneddin` | `candar` |
| 45 | 10,8 | `adal` | `italya` |
| 46 | 10,8 | `altinorda` | `timurlu` |
| 47 | 11,3 | `gurcistan` | `safevi` |
| 48 | 11,5 | `habesistan` | `somali` |
| 49 | 11,5 | `karakoyunlu` | `timurlu` |
| 50 | 11,6 | `aydin` | `germiyan` |
| 51 | 11,6 | `italya` | `somali` |
| 52 | 11,7 | `ceneviz` | `ispanya` |
| 53 | 11,8 | `esrefogullari` | `ilhanli` |
| 54 | 11,9 | `hafsi` | `memluk` |
| 55 | 11,9 | `eretna` | `ramazanoglu` |

📌 **Desen: borcun ağırlığı iki kümede toplanıyor.**
① **Kızıldeniz/Habeş/Arabistan toprak tonları** — `hicaz`·`sammar`·`suud`·
`yemen`·`adal`·`somali`·`habesistan`·`memluk`·`funj`·`nube`·`benihalid`.
Baltık'ta çözdüğüm sorunun aynısı, daha büyüğü: **bir köşede on bir
yakın-nötr renk.** Baltık'ta beş komşuyu birlikte oynatmak dokuz çakışma
kapatmıştı; burada aynı yöntem uygulanabilir.
② **Anadolu beylikleri** — `candar`·`germiyan`·`hamid`·`teke`·`eretna`·
`aydin`·`karaman`·`bizans`·`ilhanli`. Küçük ve bitişik gövdeler.

---

## 8. 🔒 HAZIR PAKET — KIZILDENİZ/HABEŞ/ARABİSTAN (yazılmadı, kilit bekliyor)

Üretim koşusu sürerken `arac/renkler.py` KİLİTLİ; bu paket **yalnız ölçüldü.**
Kilit kalkınca tek partide uygulanacak.

### Kapsam ve köprü kararı

**Oynayan 11:** `hicaz` `sammar` `suud` `yemen` `adal` `somali` `habesistan`
`funj` `nube` `benihalid` `mehdi`

🔴 **`memluk` ve `italya` SABİT** — koordinatör uyarısı: iki kümeyi
birleştirme. `memluk` 26 komşuyla Anadolu'ya (`teke`·`hamid`) ve Tunus'a
(`hafsi`) köprü; `italya` Avrupa'ya. Onların o çakışmaları **② Anadolu
kümesinin** işi ve bu partide ELLENMİYOR.

### 🔴 ÜÇ TUR — ve "toprak kimliği gidiyor" HÜKMÜM YANLIŞ ÇIKTI

Koordinatör ilk paketi onaylamadı ve gerekçesi **benim kendi cümlemdi:**
*"kimliği savurmak da bir maliyet"* yazıp ton cezasını **0,05** (en düşük)
koymuşum, üstelik eşiği 12 yerine **15** tutmuşum. Üç puanlık pay ve ton
sürekliliği, karşılığında hiçbir şey alınmadan harcanıyordu.

**Eğri tarandı** (T × ton cezası ağırlığı w). Sonuç:

| | tur 1 (benim) | tur 2 | tur 3 (SEÇİLEN) |
|---|---|---|---|
| eşik T | 15 | 12 | **12** |
| ton cezası | 0,05 | 2,0 | **2,0** |
| doygunluk | yumuşak ceza | yumuşak ceza | **SERT SINIR 0,20-0,90** |
| kapanan | 17/17 | 17/17 | **17/17** |
| altlıktan en dar | 17,7 | 15,6 | **15,4** |
| **ortalama ton kayması** | **62,5°** | 8,1° | **11,4°** |
| ton ≤45° kalan | **6/11** | 11/11 | **11/11** |
| doygunluk aykırısı | — | 3 | **0** |

🔴 **Yani "bölgenin toprak kimliği korunamaz" hükmüm YANLIŞTI.** Korunabiliyor:
on birin on biri kendi ton ailesinde kalıyor (ortalama kayma 11,4°) **ve**
on yedi çakışmanın on yedisi kapanıyor **ve** beşi görünür oluyor.
📌 Hükmü ölçmeden vermiştim. "Başka çare yoktu" demek için önce çareyi
aramak gerekiyormuş.

### SEÇİLEN PAKET

| kimlik | eski | yeni | ton kayması | pay | altlık | S |
|---|---|---|---|---|---|---|
| `hicaz` | `#9e8a5b` | `#78360c` | 22,5° | 14,3 | 28,1 | 0,90 |
| `sammar` | `#a0885b` | `#ba6f15` | 11,0° | 14,3 | 26,4 | 0,89 |
| `suud` | `#8f9e5b` | `#304b0f` | 5,6° | 14,0 | 27,8 | 0,80 |
| `yemen` | `#b5a05b` | `#9fb454` | 16,9° | 12,0 | 19,5 | 0,53 |
| `adal` | `#a08f5b` | `#786c0c` | 5,2° | 12,0 | 25,9 | 0,90 |
| `somali` | `#b5a06b` | `#847245` | **0,1°** | 12,0 | 18,2 | 0,48 |
| `habesistan` | `#7d5b3a` | `#4e3f39` | 0,6° | 12,2 | 25,6 | 0,27 |
| `funj` | `#7d6b4a` | `#a28184` | 30,4° | 12,2 | 15,4 | 0,20 |
| `nube` | `#6d4c41` | `#cf5d33` | 14,2° | 16,6 | 26,5 | 0,75 |
| `benihalid` | `#8a9440` | `#729f6f` | 18,8° | 14,0 | 16,3 | 0,30 |
| `mehdi` | `#4e342e` | `#e19c69` | **0,1°** | 20,2 | 15,6 | 0,53 |

🟢 **Nil-Sudan gökkuşağı sorunu YOK OLDU.** Koordinatörün işaret ettiği üç
renk sıcak/toprak ailesine döndü:
`nube` `#f084ff` macenta → `#cf5d33` **terrakota** ·
`mehdi` `#8172db` menekşe → `#e19c69` **kum** ·
`adal` `#d275b1` pembe → `#786c0c` **zeytin**

### 📌 DERS — yumuşak ceza, sert kısıtın yerini tutmuyor

Ton cezasını yükseltince doygunluk **denetimden çıktı**: `hicaz` S 0,08-0,10
ile **griye** düştü (üç saat önce `almanya` için *"gri = veri yok"* kuralını
yazmıştım) ya da S 1,00'e fırladı. Sebep: `|S − 0,48|` yumuşak bir terimdi ve
ton terimi onu eziyordu.
⇒ Doygunluk **sert sınıra** çevrildi (`0,20 ≤ S ≤ 0,90`) ve aykırılık **0**'a
düştü.
🔴 **Bu, `babur-imparatorlugu` dersinin üçüncü tekrarı:** *her zaman geçerli
olması gereken ölçüt, CEZA değil SÜZGEÇ olmalı.* Ceza pazarlık eder, süzgeç
etmez.

---

## 9. 🔒 ② ANADOLU BEYLİKLERİ — ÖN ÖLÇÜM (yazılmadı)

⚠️ **Bu bir ÖN ÖLÇÜMDÜR.** ① Kızıldeniz paketi henüz yazılmadı; yazılınca
palet değişir ve bu **yeniden koşulmalıdır** — kendi dersim: *renk kararı
verinin (ve paletin) bir fonksiyonudur.* Buradaki amaç fizibilite, nihai hex
değil.

**Oynayan 14:** `candar` `germiyan` `hamid` `teke` `eretna` `aydin` `karaman`
`bizans` `ilhanli` `kilikya-ermeni` `burhaneddin` `esrefogullari`
`ramazanoglu` `taceddin`
**Sabit köprü 5:** `memluk` (Kızıldeniz+Tunus) · `altinorda` (bozkır/Kafkas) ·
`napoli` · `arnavutluk` (Avrupa) · `timurlu` (Orta Asya)

### Sonuç — sarsıntı neredeyse SIFIR

```
17 hedef çakışmanın 17'si KAPANIYOR
ortalama ton kayması 1,6°   ·   14/14 kimlik ±20° içinde
altlıktan en dar 18,9 (hepsi zaten görünürdü, öyle kalıyor)
```

| kimlik | eski | yeni | ton kayması |
|---|---|---|---|
| `candar` | `#5b6b9e` | `#7896ff` | 0,3° |
| `germiyan` | `#3d748f` | `#3cc3db` | 0,2° |
| `hamid` | `#8f7d3a` | `#6f8448` | 17,8° |
| `teke` | `#b58f2d` | `#574212` | 0,0° |
| `eretna` | `#3f8f6b` | `#5dc38a` | 0,2° |
| `aydin` | `#4a8f7d` | `#488d7b` | 0,0° |
| `karaman` | `#4527a0` | `#5133ab` | 0,1° |
| `bizans` | `#8877b8` | `#4e3c81` | 1,6° |
| `ilhanli` | `#7a5ba0` | `#9f66c3` | 0,4° |
| `kilikya-ermeni` | `#5e35b1` | `#a26fff` | 0,3° |
| `burhaneddin` | `#455a64` | `#155412` | 0,6° |
| `esrefogullari` | `#b5548f` | `#e184bd` | 0,3° |
| `ramazanoglu` | `#33691e` | `#2d483c` | 0,4° |
| `taceddin` | `#2d8f4a` | `#1b8d36` | 0,3° |

📌 **Neden bu kadar kolay:** bu kümenin hiçbiri görünmez değildi. Yalnız
**birbirlerinden** ayrılmaları gerekiyordu ve bu, tonu hiç değiştirmeden
parlaklık/kroma ile çözülüyor. Kızıldeniz'de zor olan şey, beşinin **aynı
zamanda görünmez** olmasıydı — orada tonu değiştirmek zorunluydu.
⇒ Genelleme: **görünmezlik tonu zorlar, çakışma zorlamaz.**

### Toplam tablo

```
bugün       55 çakışma · 10 görünmez
① sonrası   -17 çakışma · -5 görünmez
② sonrası   -17 çakışma
kalan       ~21 çakışma · 5 görünmez
```
Kalanların çoğu üçüncü bir kümede: `altinorda`↔`lehistan`/`gurcistan`/
`safevi`/`timurlu` (bozkır-Kafkas) ve dağınık Avrupa çiftleri
(`ceneviz`↔`sardinya`/`kirim`/`sovalye`/`ispanya` · `sirbistan`↔`venedik`/
`yunanistan` · `milanoduka`↔`toskana` · `fransa`↔`toskana`).

---

## 10. 🔒 ③ KALAN BORÇ — ön ölçüm · **55'ten 0'a yol var**

### B) Kalan beş görünmez — AYRI SINIF YOK

Altlık `#e8dfc8` → L\* 89,0 · C\* 12,4 · **ton 93,4°**

| kimlik | ton | altlıktan ton farkı |
|---|---|---|
| `karadag` | 92,1° | **1,3°** |
| `romanya` | 95,1° | **1,7°** |
| `sovalye` | 87,7° | 5,6° |
| `atinadukaligi` | 116,2° | 22,8° |
| `kazan` | 70,4° | 23,0° |

⇒ **Beşinin beşi de altlığın ton ailesinde (±30°).** Yani ① yönteminin
tekrarı yeter, ayrı bir sınıf yok. 📌 Ve sebep artık tam net: on görünmezin
onu da altlığın ±30°'sinde — **görünmezlik bir renk kusuru değil, ALTLIĞA
YAKINLIK.**

### A) Kalan 21 çakışma — 8 BAĞIMSIZ küme, hepsi çözülüyor

```
KÜME 1  altinorda·artuklu·gurcistan·karakoyunlu·lehistan·safevi·timurlu   8 çakışma
KÜME 2  ceneviz·ispanya·kirim·sardinya·sovalye                            4
KÜME 3  atinadukaligi·sirbistan·venedik·yunanistan                        3
KÜME 4  fransa·milanoduka·toskana                                         2
KÜME 5  arnavutluk·napoli          KÜME 6  avusturya·romanya
KÜME 7  bogdan·bulgaristan         KÜME 8  hafsi·memluk                   1+1+1+1
                                                          TOPLAM 21/21 ✓
```
Ortalama ton kayması kümelerin çoğunda **1°'nin altında** — ② gibi, çünkü bu
kümelerde de görünmezlik sorunu yok (istisna `sovalye` 27,6° ve `memluk`
24,4°, ikisi de tan ailesinden çıkmak zorunda).

### 🔴 AMA ÜÇ PARTİ BAĞIMSIZ DEĞİL — kendi çözümümün kusuru

Ölçtüm: ③'ün oynatmayı önerdiği küme **①·②'nin SABİT tuttuğu beş köprüyü**
içeriyor, ve iki paylaşılan hex bağımlılığına dokunuyor:

```
KÖPRÜ İHLALİ (①/②'de sabit, ③'te oynuyor)
  memluk · altinorda · napoli · arnavutluk · timurlu

PAYLAŞILAN HEX BAĞIMLILIĞI
  safevi  #6b4a7d ← le-hanedani (Asya) de kullanıyor
  timurlu #8d6e63 ← kamboc-kralligi + vijayanagara (Asya) de kullanıyor
```

⇒ **Üç parti ardışık çalıştırılmalı ve her birinden sonra YENİDEN ÖLÇÜLMELİ.**
③'ün 21/21'i bir **fizibilite kanıtıdır**, uygulanacak hex listesi değil.
📌 Bu, `hollanda↔ispanya` dersinin üçüncü katı: orada VERİ değişince renk
kararı kaymıştı; burada **kendi partilerimiz** birbirinin zeminini kaydırıyor.
⚠️ Ve paylaşılan hex gizli bir bağ kuruyor: `timurlu` oynarsa Asya'daki iki
kimlik onu izlemez, paylaşım sessizce bozulur. İhlal değil ama
`renkler.py`'deki gerekçe kütüğü bayatlar.

### Yol haritası — 55'ten 0'a

```
bugün        55 çakışma · 10 görünmez
①  Kızıldeniz  -17 · -5     (ölçüldü, ONAYLI, yazılmayı bekliyor)
②  Anadolu     -17          (ölçüldü, ONAYLI, ①'den sonra yeniden ölçülecek)
③  kalan 8 küme -21 · -5    (fizibilite kanıtlandı, ②'den sonra ölçülecek)
                 ────────────
                  0 çakışma · 0 görünmez
```
🟢 **Atlasın renk borcunun sonu ölçülmüş durumda.** Üçü de tek tek
uygulanabilir; hiçbiri "çözülemez" değil.

---

## 11. 🔒 PAYLAŞILAN HEX'LER — 13/13 KASITLI, 0 tesadüf (ölçüm, yazılmadı)

```
palet 226 kimlik · 184 farklı hex · PAYLAŞILAN 13 hex (55 kimlik)
KASITLI 13  ·  BELGESİZ 0
```

Kasıtlılık dosyanın **kendi kütüğünden** kanıtlandı — üç bağımsız iz:
① girdinin üstündeki yorumda "paylaş" geçiyor · ② öteki üyeyi **adıyla** anıyor
· ③ dosya başındaki 2026-07-30 `PAYLAŞILAN HEX DENETİMİ` listesinde.

| hex | kimlik | kaynak |
|---|---|---|
| `#6ba0a0` | 8 | Asya partisi (`zeyyani`) |
| `#00695c` | 7 | 2026-07-30 (`yugoslavya`/`hive`) + Asya |
| `#7b1fa2` | 6 | Asya (`sidamo`) |
| `#636f03` | 6 | Asya (`siena`) |
| `#00acc1` | 5 | `kavalali`↔`turkmen` (Oturum 16) + Asya |
| `#b34da5` | 5 | Asya (`saruhan`) |
| `#2d8f4a` | 5 | Asya (`taceddin`) |
| `#8d6e63` | 3 | Asya (`timurlu`) |
| `#6b4a7d` `#0288d1` | 2+2 | Asya (`safevi`, `darfur`) |
| `#8f7d5b` `#5c6bc0` `#4527a0` | 2+2+2 | 2026-07-30 denetimi |

### 🔴 AMA KASIT YALNIZ DÜZ YAZIDA — ve bu yeterli değil

Hiçbir denetim *"bu kimlikler aynı hex'i **bilerek** paylaşıyor"* bilgisini
**makine okunur** tutmuyor. Sonuç: biri oynatılınca ötekiler **izlemiyor**,
paylaşım sessizce bozuluyor, gerekçe kütüğü bayatlıyor.
📌 Canlı vaka: ③ partisi `timurlu`yu oynatacaktı; `#8d6e63`'ü paylaşan
`kamboc-kralligi` ve `vijayanagara` onu izlemeyecekti ve **kimse fark
etmeyecekti.**

### Önerilen çözüm — `_opaklik_dogrula()` deseninin aynısı

`renkler.py`'ye **beyan sözlüğü** (`PAYLASIM`) + **import anında self-check**.
Şemayı değiştirmiyor: `uret_petek.py:1562` `BOYALAR.items()` diye okuyor, ayrı
bir sözlük onu etkilemez. Blok hazır (scratchpad), **üç senaryoda sınandı:**

```
① bugünkü palete karşı        → SESSİZ (13/13 beyan gerçekle uyuşuyor) ✓
② `timurlu` oynatılırsa       → "BEYAN EDILEN PAYLASIM BOZULDU #8d6e63" ✓
③ beyansız yeni paylaşım doğsa → "BEYAN EDILMEMIS PAYLASIM #7aa06a" ✓
```

⇒ *Sessiz kayıp* sınıfı bu alanda kapanır: paylaşım artık **beyan edilen ve
denetlenen** bir bağ olur, düz yazıda kalan bir niyet değil.

---

## 5. ESKİ §4 — PARTİ 3 notu (aşıldı)

Yöntem hazır ve Parti 2'de sınandı: merge sonrası komşuluk + karşılıklı eşik
ölçümü + palet kutusu. 135 kimlik için tavanın 17'nin **altına** ineceğini
bekliyorum (daha çok kimlik, aynı kutu) — ama **ölçmeden yazmayacağım.**

⚠️ Bugün görünür karşılığı yok (`BOLGE` lon 62'de bitiyor, Asya 65,7'den
başlıyor). Kutunun önündeki iki engelden biri; öteki adacık kuralı
(`oturumlar/KARAR-BOLGE-KUTUSU.md`).

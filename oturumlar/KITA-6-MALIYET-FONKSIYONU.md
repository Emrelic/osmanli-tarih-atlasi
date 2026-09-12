# KITA 6 — Ⓐ MALİYET FONKSİYONU (Tobler + yön + hücre içi geçit)

| alan | değer |
|---|---|
| **AD** | KITA 6 — MALİYET FONKSİYONU |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **DOSYALARIN** | `denetim/ARAC-MALIYET-*-0912.py` · `denetim/OLCUM-MALIYET-0912.md` · `denetim/KITA6-*.png` |
| 🔴 **YAZMAYACAĞIN** | `arac/uret_petek.py` — **PROTOTİP ÜRETİRSİN, MOTORA İNMEZ.** Motor tek elde (1.MURAT), çünkü Ⓑ ve Ⓒ de aynı dosyaya bakıyor |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. EMRE'NİN SORUSU — işin buradan doğdu

> *"Bir yayanın ovada yürümesi 1 günde 40 km gidiyor ise dağda 4 km gidecek gibi…
> 100 metrelik tepeyi aşmak ile 1000 metrelik dağı aşmak aynı şey değil.
> Ayrıca 100 metrelik tepe 100 metre yatay mesafe geçilerek aşılması ile
> 1000 metre mesafe yürünerek aşılması yada 50 metre mesafe ile tırmanarak
> geçilmesi aynı şey olmasa gerek. Bizim sistem bunları hesap edemiyor değil mi?"*

**Cevap: edemiyor, ve ölçüldü.** Bugünkü model (`uret_petek.py:2205`):
```
sürtünme = 1 + 0,005 × |∇z|          |∇z| birimi: METRE / HÜCRE
hücre    = KV_ADIM 0,05° = 5.566 m
```

```
eğim (H/X)          🟢 hesaplanıyor — |∇z| tam olarak bu
mutlak yükseklik    🔴 YOK — deniz seviyesinde 100 m ile 4000 m'de 100 m AYNI
doğrusal olmama     🔴 YOK — 10 kat dik = 10 kat pahalı sanıyor
iniş ≠ çıkış        🔴 YOK — hypot() mutlak değer, yön bilgisi atılıyor
```

**Ve doğrusal modelin sapması ölçüldü** (Tobler yürüme hızına karşı,
hücre 5.566 m):
```
∇z m/hücre   eğim     BİZİM    GERÇEK    fark
    100      1,0°     1,50×    1,06×    +41%
    500      5,1°     3,50×    1,37×   +156%
   1000     10,2°     6,00×    1,88×   +220%
   3000     28,3°    16,00×    6,60×   +143%
```
⇒ Dağı **2-3 kat fazla** pahalı sayıyoruz.

🔴 **VE ASIL SORUN FORMÜL DEĞİL, ÇÖZÜNÜRLÜK.** Emre'nin üç örneğinin
yatay mesafesi 100 m · 1000 m · 50 m — **üçü de 5.566 m'lik hücrenin
altında.** Izgara onları göremez. Üstelik DEM 30 yay-saniye (~926 m) ve
`Resampling.average` ile 5,6 km'ye **ortalanıyor** — bu işlem hem zirveyi
hem **GEÇİDİ** siliyor. Tarihte sınırı belirleyen şey çoğu zaman geçittir.

## 1. İŞİN — dört parça, ÜÇÜ kod BİRİ ölçüm

### Ⓐ1 TOBLER YÜRÜME FONKSİYONU
```
W = 6 · exp(−3,5 · |S + 0,05|)     km/saat
S = işaretli eğim (dh/dx) — YOKUŞ POZİTİF
```
Düz arazide W = 5,04 km/saat ⇒ 8 saatte **40 km** — Emre'nin sezgisiyle birebir.

🟢 **VE BU BİR SABİTİ ORTADAN KALDIRIYOR:** `EGIM_CARPANI = 0,005`
kalibrasyonla bulunmuş bir sayıydı (`arac/egim_olc.py`). Tobler'da kalibre
edilecek bir şey yok — formül literatürden geliyor. ⇒ Bir **serbest
parametre eksiliyor**, bu iyi haber. Bunu raporunda ayrıca söyle.

🔴 **BİRİM DEĞİŞİYOR ve bu SESSİZ BİR TUZAK.** `uret_petek.py:2264` zaten
uyarıyor: *"o sayı artık km değildir."* Tobler'dan sonra **SAAT** olacak.
`_kvuzak`ı mesafe diye okuyan HER YERİ tara ve raporla — biri kalırsa
sessizce yanlış sonuç verir (`D124`: aynı kelime iki ayrı şey).

### Ⓐ2 YÖN DUYARLILIĞI (anizotropi)
Bugün `hypot(gx,gy)` mutlak değer alıyor — yön atılıyor. Dijkstra bunu
**zaten destekliyor**: `a → b` geçişinin maliyeti `z[b] − z[a]`'ya baksın.
İnmek çıkmaktan ucuzdur (ama çok dik iniş de yavaştır — Tobler'ın
`+0,05` kayması tam bunu modelliyor, o yüzden `S` İŞARETLİ kalmalı).
⚠️ Maliyet artık **simetrik değil** — `uzak[b] = uzak[a] + c(a,b)` ve
`c(a,b) ≠ c(b,a)`. Dijkstra bunu kaldırır, ama bir yerde simetri
varsayılıyorsa **kırılır.** Ara ve raporla.

### Ⓐ3 🔑 HÜCRE İÇİ GEÇİT — ASIL ÇARE, ve ızgarayı BÜYÜTMEDEN
Izgarayı 0,025°ye indirmek hücreyi 20,9 M → 83 M yapar (dört kat bellek,
bu makinede sığmaz). Gerek de yok:

```
her 5,6 km'lik hücre için HAM 30s DEM'den (≈926 m, ~36 alt-hücre) çıkar:
    z_min   ·   z_max   ·   z_ort   ·   EN ALÇAK GEÇİŞ KOTU
```
3.000 m'lik sırt + 1.200 m'lik geçit ≠ 3.000 m'lik duvar. Bugün
`Resampling.average` tam bu farkı siliyor.
⚠️ "En alçak geçiş kotu"nun tanımını **SEN yaz ve gerekçelendir** —
basit `z_min` yetmeyebilir (bir vadi tabanı geçit değildir eğer iki ucu
kapalıysa). Tanımı ölç, tek bir cümleyle savun, ve **alternatifini de
söyle.**

### Ⓐ4 ÖLÇÜM — karşılaştırma, ve eski modelin yanında
```
AYNI iki coğrafya: Toros (eğim medyanı 119) + Mezopotamya (15)
   (KITA 8'in serisiyle karşılaştırılabilir olsun — M-3563'te üçüncüsü de geliyor)
HER model için: kaç petek sınırı sırta kilitlendi · ortalama kayma km ·
   değişen km² · VE "bütün sınır" ile "yalnız kayan" AYRI (KITA 8'in dersi)
PNG: eski model ↔ yeni model YAN YANA, aynı bölge
```

## 2. 🔴 KURALLAR

```
① D022 ÖNGÖRÜNÜ ÖLÇMEDEN ÖNCE YAZ ve commit'le
② `arac/uret_petek.py`ye YAZMA — oku, import et, kesitte koştur
③ UZUN KOŞUYU BAŞLATMADAN ÖNCE TAHTAYA YAZ, 60 sn bekle (§7)
④ EŞİĞİ SEÇME — Emre seçecek. Sen TABLO ve ARALIK üretirsin.
⑤ YENİ DOSYA açacaksan ÖNCE: git log --oneline -1 -- <dosya>  BOŞ mu?
   ve yazdıktan sonra: py <dosya> ya da node -e eval ile AYRIŞTIRILABİLİR mi
   (bu gece bir dosya tam bu yüzden çöktü)
⑥ COMMIT: yalnız `denetim/` altındaki KENDİ dosyaların, ADIYLA, hem `add`
   hem `commit` pathspec'iyle. Dizin pathspec'i YASAK.
```

🔴 **VE BİR SIRALAMA UYARISI — işin başkalarını bekletiyor:** Emre'nin
seçmek üzere olduğu engel eşiği (200-300 m/hücre) **senin çıktına bağlı.**
Maliyet fonksiyonu değişince o band geçersizleşir (`D129`: bir eşik
ölçüldüğü tabanla taşınır). ⇒ Ⓐ1 ve Ⓐ2'nin ölçümü çıkar çıkmaz **hemen
bildir**, Ⓐ3'ü bekletme.

## 3. TESLİM — TAHTAYA (`M-3550`), kısa özet + dosya yolu
```
① dört parçanın hangisi bitti, hangisi ölçülemedi (D107)
② eski ↔ yeni karşılaştırma tablosu + PNG yolları
③ `_kvuzak`ı mesafe diye okuyan yerlerin LİSTESİ (birim değişikliği)
④ simetri varsayan yerlerin LİSTESİ (anizotropi)
⑤ ÖNGÖRÜN TUTTU MU
⑥ motora inecek yamanın TASLAĞI (diff olarak, `denetim/` altında)
```

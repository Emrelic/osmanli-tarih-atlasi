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

### Ⓐ5 YÖN SAYISI 8 → 16 — Emre'nin açık isteği
Bugün **8 yön** (`uret_petek.py:2290`):
`((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1))`

Emre: *"16 ok ile 22,5 derecelik açılar ile çeşitli yönlere ilerleme."*
Ölçüldü: sekizgen sapması **%8,24 → %2,75** (üç kat yuvarlak).
```
16 yön = 8 komşu + 8 "atlama" komşu  (±1,±2) ve (±2,±1)
⚠️ ATLAMA KOMŞUNUN TUZAĞI: (1,2) adımı ARADAKİ hücrenin üstünden geçer.
   O hücre DENİZ ya da çok pahalıysa, atlama onu BEDAVA AŞAR.
   ⇒ Ara hücrelerin maliyeti de hesaba katılmalı, yoksa 16 yön bir
     iyileştirme değil bir KAÇAK olur. Bunu ölç ve nasıl çözdüğünü yaz.
```

### Ⓐ6 NEHİR GEÇİŞ BEDELİ — 🔴 MOTORDA HİÇ YOK
Ölçtüm: `_kv_dijkstra` içinde nehir **geçmiyor** (0 eşleşme). Nehir yalnız
`dogal_hatta_yasla` (`:1221`) içinde var — o da sınır çizildikten **SONRA**
onu yatağa çeken bir yaslama. KITA 8'in 67 km'lik nehir cezası yalnız
**prototipte.** ⇒ Bugün nehir yürüyüşü **yavaşlatmıyor.**

Emre'nin biçimi doğru: bedel *"kaç km'ye tekabül eden zaman"* cinsinden.
🔴 **Ama sayıyı SEN uydurmayacaksın** — `KITA 10` (`R2`) bunu araştırıyor
(`oturumlar/YURUME-BILIMI-PROGRAMI.md`). Sen **mekanizmayı** kur, sayıyı
onun `denetim/VERI-NEHIR-0912.json` çıktısından al. Gelmemişse
parametrik bırak ve **bekleyen** diye bildir.
⚠️ Ve nehir bir DUVAR değil, **üzerinde geçitler olan** bir duvar —
`R2②` bunu araştırıyor. Mekanizman geçit kavramını **ifade edebilir**
olmalı (tek bir küresel ceza yetmez).

### Ⓐ7 🟢 KALİBRASYON = EMRE'NİN DÖRT SAYISI
Uydurulmuş sabit yerine **ölçüt kümesi.** Bütçe: 5 gün × 8 saat = 40 saat.
```
                    HEDEF        bugünkü Tobler + ortalanmış DEM
güney  düz ova      200 km       200 km   ✓
batı   nehirli      ~100 km      100 km   ✓ (bedel ELLE konarak)
doğu   rampa        ~100 km      151 km   🟡 fazla cömert
kuzey  dağ          40-50 km      70 km   🔴 DAĞ CEZASI ZAYIF
```
⇒ Modeli bu dörde oturt. **Dört ölçüt, üç bilinmeyen — fazlasıyla
belirlenmiş**, yani kalibrasyon SINANABİLİR. Tutmayan yönü **bildir,
zorlamayla uydurma** (`D022`: bir öngörünün çürümesi bilgidir).

### Ⓐ8 🔴 TAVAN ZAMAN BÜTÇESİNE ÇEVRİLİYOR — EMRE'NİN KARARI
```
BUGÜN   TAVAN_KM = {1:200, 2:200, 3:200, 4:200, 0:200}   HER YÖNDE AYNI
```
**Sorun:** taşma yönlere göre farklı menzil hesapladıktan **sonra**,
200 km'lik sert bir yarıçap tavanı hepsini **daireye geri kırpıyor.**
Motor Emre'nin istediği ayrımı yapıyor, sonra üstünden siliyor.

> **Emre, 12 Eylül 2026: "tavanı zaman bütçesine çevirelim."**

```
YENİ   tavan = YÜRÜYÜŞ SAATİ  (ör. 5 gün × 8 saat = 40 saat)
       düz ovada  ~200 km'ye denk gelir  ← bugünkü davranışı KORUR
       dağda      kendiliğinden 40-70 km'de durur
       nehirde    geçiş bedeli bütçeden düşer
⇒ Tavan artık bir KIRPMA değil, taşmanın KENDİ durma koşulu olur.
```
🔴 **DİKKAT — üç şey ölçülecek:**
```
① 200 km'yi kaç saate çevirmeli? Düz arazi hızından türet (5,04 km/saat
   ⇒ 39,7 saat ≈ 5 gün). Bu, bugünkü davranışı düz arazide KORUMAK
   demektir — geriye dönük uyum.
② `TAVAN_KM` kaç yerde okunuyor? HEPSİNİ tara ve listele. Bir yerde
   km diye kalırsa sessizce yanlış kırpar (`D124`).
   📌 `uret_petek.py:141` ve `:178` eski tavan yorumlarını taşıyor —
     onlar da bayat olacak, işaretle.
③ A1 YARIÇAP TAVANI (`:807`) ayrı bir mekanizma mı, aynısı mı? ÖLÇ.
   `motor_kara.geojson` ölçümü *"hiçbir petek noktasından ~200 km öteye
   uzanmıyor"* diyor — yani tavan GERÇEKTEN kesiyor, âtıl değil.
```
⚠️ Ve kademe ayrımı: bugün k1-k4 hepsi 200. Zaman bütçesinde de aynı mı
kalacak, yoksa bir başkent bir köyden daha uzağa mı erişir? **Emre 27
Ağustos'ta kademe ayrımını KASTEN kaldırdı** — bunu değiştirmeyi
önermeden ona sor.

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

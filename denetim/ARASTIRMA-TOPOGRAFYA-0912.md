# R3 — TOPOĞRAFYA ZENGİNLEŞTİRME · KITA 11 · 12 Eylül 2026

> Emre: *"dağ tepe katman katman irili ufaklı **yumurta kartonu gibi** dağ tepe
> arkasında dağ tepe — dağı etrafından dolaşmak ya da geçitten geçmek ya da
> tırmanmak."*

**Alet** `denetim/ARAC-TRI-0912.py` — 7 birim sınavı, 7'si geçiyor
**Veri** `denetim/VERI-TOPOGRAFYA-0912.json` (makine okunur · KITA 6'nın girdisi)
**Öngörü** `denetim/ONGORU-TOPOGRAFYA-0912.md` — ölçümden **önce** yazıldı ve
commit'lendi (`528c530`); hüküm: **TUTTU 6 · ÇÜRÜDÜ 6 · ÖLÇÜLEMEDİ 3**

---

## 0. 🔴🔴 ÖNCE BU: MOTORUN EĞİM YÜZEYİ ~77 KM KUZEYE KAYMIŞ

İşin kendisinden önce çıktı, `§7.1⑥` gereği beklemeden bildirildi (tahta
**M-3578**). `arac/uret_petek.py`ye **dokunulmadı** — dosya 1.MURAT'ta.

```
uret_petek.py:2233   pencere ister   (-180, -60, 180,  85)   17400 satır
etopo2022_30s_dunya  gerçekte biter                    84.0   17280 satır
                                                    ⇒ 120 satır DIŞARI TAŞAR
rasterio pencereyi KIRPAR, kalan 144°'yi out_shape=(2900,7200)'e örnekler
                                    ⇒ 144° VERİ, 145° IZGARAYA GERİLİR
```

**Ölçüm — motorun kendi çağrısı birebir tekrarlandı, altı bağımsız zirve:**

| zirve | gerçek enlem | motorun ızgarasında | kayma |
|---|---|---|---|
| Everest | 27,988 | 28,625 | **+0,637°** |
| Mont Blanc | 45,833 | 46,575 | **+0,742°** |
| Elbruz | 43,355 | 44,075 | **+0,720°** |
| K2 | 35,880 | 36,425 | +0,545° |
| Kilimanjaro | −3,067 | −2,675 | +0,392° |
| Aconcagua | −32,653 | −31,775 | +0,878° |

**Kontrol (`D132`)** — pencere DEM'in kendi üst ucuna (84,0) kırpılıp çıktı
2880 satıra ayarlanınca kayma **çöküyor**: Everest −0,013 · Elbruz −0,030 ·
Kilimanjaro −0,008 · Mont Blanc +0,092 (hepsi bir hücre içinde).
⇒ **Sebep kesin:** pencerenin 1°'lik taşması. Anadolu için öngörü **+0,688° =
~77 km kuzey.**

**Anlamı:** `surt = 1 + 0,005·|∇z|` yanlış enlemde uygulanıyor. Toros'un cezası
Toros'un 77 km kuzeyine, Pontusların cezası Karadeniz'e düşüyor. Dijkstra'nın
bütün kara maliyetleri bundan etkileniyor.

### 📌 Ve motorun KENDİ TANIĞI bunu yakalayamazdı
`uret_petek.py:2218-2221` şöyle diyor: *"doğruluğu bağımsız tanıkla sınandı…
en pahalı hücreler 84,1°D/28,5°K (**Annapurna**)"*. Annapurna 83,82°D /
**28,60°K**. Kayma geri alınınca o hücre **27,9°K**'ye iniyor — yani Annapurna
değil. ⇒ ***O tanık 145°'lik bir ters çevirmeyi yakalar, 0,7°'lik bir GERİLMEYİ
yakalamaz — ve yakalayamadığı hâlde "sınandı" diye kayıtlıdır.***
(`D048`: hayatta kalan kod hakkındaki bir iddia, güven verdiği için ölçülmez.)

---

## 1. KAYNAKLAR — ve TRI'nin özgün makalesinde bulunan çelişki

### TRI · Riley, DeGloria & Elliot (1999) — **ÖZGÜN MAKALE OKUNDU**
*Intermountain Journal of Sciences* 5(1-4):23-27. Taranmış PDF; metin katmanı
**yok** (`pypdf` 6 sayfadan 5 karakter çıkardı), sayfa görüntüleri okundu.
```
s.24 yazılı formül   TRI = [ Σ(x_ij − x_00)² ]^(1/2)
s.24 ızgara          "a square grid network with 1 km² grid cells"
s.24 sınıf tablosu   düz 0-80 · neredeyse düz 81-116 · hafif 117-161 ·
                     orta 162-239 · epey 240-497 · çok 498-958 · aşırı 959-4367 m
```

🔴 **VE MAKALE KENDİ İÇİNDE ÇELİŞİYOR — ölçüldü, iki bağımsız kanıtla:**
```
Şekil 3'ün kendi ızgaraları ve makalenin bastığı sayılar:  700 · 700 · 100
   MUTLAK toplam  Σ|Δz|      →  700 · 700 · 100     ✓ birebir
   KÖK formülü    √Σ(Δz)²    →  250 · 250 · 41,83   ✗ tutmuyor
Sınıf tablosunun üst ucu (4367 m) ne gerektirir?
   MUTLAK → komşu başına 546 m/km   (Himalaya'da makul)
   KÖK    → komşu başına 1544 m/km  (yeryüzünde YOK)
```
⇒ Makalenin **şekli** ve **sınıf tablosu** MUTLAK biçimi gösteriyor, **yazılı
formülü** kök biçimini. GDAL 3.3+ varsayılan olarak *"Riley"* adıyla **kök**
biçimini uyguluyor — yani yaygın uygulama, makalenin kendi sayılarını
üretmiyor.
🟢 **Alet ikisini de hesaplar ve birini seçmez**; raporun her yerinde
`tri_mutlak` kullanıldı, çünkü Riley'nin **sınıf tablosu** ancak onunla
anlamlı. (`§4⑥`: kaynak kendiyle çelişiyorsa çelişkiyi BİLDİRMEK, taraf
seçmekten değerlidir.)

📌 Ve bizim için şanslı bir denk geliş: **Riley 1 km² hücrede çalıştı; bizim
alt-hücremiz 927,7 m.** Sınıf tablosu **ölçek dönüşümü olmadan** uygulanabilir.

### VRM · Sappington, Longshore & Thompson (2007) — **OKUNAMADI**
*J. Wildlife Management* 71(5):1419-1426. `D107` gereği bu **"bulunamadı"
değil, OKUNAMADI** — üç deneme, üçü de başarısız:
```
Wiley  wildlife.onlinelibrary.wiley.com/doi/10.2193/2005-723   HTTP 403
USGS   werc.usgs.gov  Sappington et al JWM 2007.pdf            HTTP 522
Semantic Scholar  openAccessPdf                                CLOSED
```
🟢 Formül, **özgün makaleyi adıyla anan resmî bir uygulamanın kaynak
kodundan** alındı — OSGeo `grass-addons/r.vector.ruggedness.py`:
```
x = sin(bakı)·sin(eğim) · y = cos(bakı)·sin(eğim) · z = cos(eğim)
VRM = 1 − √((Σx)² + (Σy)² + (Σz)²) / n
```
⚠️ SAGA (`ta_morphometry_17`) ve R `spatialEco::vrm` aynı makaleyi anıyor ama
formülü **basmıyor** ⇒ eşleşme **tek** uygulamadan, üçünden değil. Bu sınır
raporlanıyor, gizlenmiyor.

### Bulunamayan: geçit rakımları
TDV geçidi **görüyor** ama rakım **vermiyor** (`belen` → 200, madde gerçek,
gövdede rakım yok) — `§4`ün **TANECİKLİK boşluğu**, `kirman`/`yezd`
vakasının aynısı. Britannica (Brenner · Hayber) **403**. ⇒ Ö3 `ÖLÇÜLEMEDİ`
damgalandı ve yerine **çözünürlük merdiveni** kondu (§5).

---

## 2. ① HÜCRE İÇİ İSTATİSTİK — ölçüldü, ızgara BÜYÜTÜLMEDİ

Her 0,05° hücre 6×6 = 36 alt-hücre içeriyor. Ölçülenler: `z_min · z_max ·
z_ort · z_std · tri_mutlak · tri_kok · vrm · geçit kotu · toplam salınım`.

**Küresel** (128.077 kara hücresi örneklendi, her 7. hücre):
```
hücre içi kabartma (z_max−z_min)   ortanca  56 m   ·  ortalama 157,9 m
TRI (mutlak)                        ortanca  78 m   ·  y90 659 m
motorun bugünkü eğimi |∇z|          ortanca  23 m/hücre
🔑 Ö1c  ort(kabartma) / ort(|∇z|)  =  2,489        ⇒ ÖNGÖRÜ TUTTU (≥2,0)
```

**Bölge bölge** (`--ornek --minimax`):

| bölge | kabartma ort. | TRI m | VRM | **yerel eğim** | motorun eğimi | **kat** |
|---|---|---|---|---|---|---|
| ALPLER | 813 | 1214 | 0,0124 | **%15,86** | %3,68 | **4,32** |
| HİMALAYA | 892 | 1273 | 0,0113 | %15,09 | %5,87 | 2,57 |
| KARADENİZ | 672 | 963 | 0,0074 | %12,17 | %4,95 | 2,46 |
| ZAGROS | 394 | 500 | 0,0021 | %6,08 | %2,68 | 2,27 |
| TUNA | 82 | 120 | 0,00015 | %1,56 | %0,56 | 2,77 |
| KONYA | 42,5 | 51,6 | 0,00002 | %0,64 | %0,45 | 1,44 |
| SAHRA | 41 | 52,7 | 0,00002 | %0,61 | %0,30 | 2,06 |

> **yerel eğim** = (TRI/8) / ortalama komşu uzaklığı — motorun eğimiyle **aynı
> birimde** (boyutsuz), o yüzden doğrudan bölünebiliyor.

🔑 **Emre'nin şikâyetinin sayısı burada:** Alpler'de motor **%3,68** eğim
görüyor, arazi **%15,86** sunuyor. Ve düzeltme **düzgün bir ölçekleme değil** —
dağda 2,3-4,3 kat, ovada 1,4-2,1 kat. ⇒ *Dağı ovadan ayıran şey tam olarak
motorun kaybettiği şey.*

### ⚠️ Enlem tuzağı — TRI'yi eğime çevirirken
30 yay-sn hücre **kare değil**: kuzey-güney 927,7 m, doğu-batı 927,7·cos(enlem).
60°K'de hücre 464 × 928 m. TRI bir **metre toplamıdır**; bu uzaklığa
bölünmeden eğime çevrilirse kuzeyde eğim **sistematik olarak şişer**. Alet
`ortalama_komsu_uzakligi_m(enlem)` ile düzeltiyor.
🟢 Doğrulandı: toplam salınım mesafeye bölününce iki eksen **%3-6 içinde
örtüşüyor** (Alpler 0,124 / 0,120 · Konya 0,0054 / 0,0050) — yani eksenler
arası fark **arazi değil hücre biçimi**.

---

## 3. ② TRI mi VRM mi — **ÖNGÖRÜM ÇÜRÜDÜ, VRM ÖNERİLMİYOR**

Öngörüm ikisini birden taşımaktı: *TRI büyüklük, VRM cins.* Öngörünün kendi
çürüme şartı **ateşledi**.

**Sentetik sınavda VRM gerçekten ayırıyor** (birim sınavı `vrm-rampa-vs-karton`):
```
                      VRM        TRI (mutlak)
düz                   0,0            0 m
%30 düzgün rampa      7,7e-8      1670 m
%100 düzgün rampa     3,2e-8      5566 m
yumurta kartonu       0,0045       791 m
⇒ VRM ayırma oranı  5,8×10⁴ kat
⇒ TRI TERS SIRALIYOR: düzgün rampaya 1670, yumurta kartonuna 791 m
```

**Ama gerçek arazide bu üstünlük GERÇEKLEŞMİYOR** (128.077 kara hücresi):
```
küresel Spearman  ρ(TRI, VRM)              0,9654
sıra farkı > 20 yüzdelik puan               %2,49
sıra farkı > 40 yüzdelik puan               %0,40
"rampa benzeri" hücre (TRI üst %25, VRM alt %25)   %0,04   ← 2500'de 1
```
⇒ **926 m örneklemede, 5,6 km boyunca düzgün kalan dik rampa yeryüzünde
pratikte yok.** VRM'in teorik üstünlüğü gerçek veride 42-84 MB'ı hak etmiyor.
**Öneri: TRI tek başına.**

### 🔴 VE BU SAYIYI İLK TURDA YANLIŞ ÖLÇTÜM — kusur kendi aletimde
İlk tam koşuda VRM `int16 × 10⁴` ile paketlenmişti. Tipik kara değeri
2e-5…1,2e-2; adım 1e-4. Sonuç: **kara hücrelerinin yarısından çoğu 0'a
yuvarlandı** (küresel ortanca 0,0000) ve Spearman **bağlarla dolu** bir
değişkenle hesaplandı:
```
BOZUK  ρ = 0,8801 · sıra farkı >20 puan %25,48 · rampa benzeri %0,281
        ⇒ öngörüm (0,50-0,90) TUTMUŞ GİBİ göründü
DÜZGÜN ρ = 0,9654 · sıra farkı >20 puan  %2,49 · rampa benzeri %0,040   (float32)
        ⇒ öngörüm ÇÜRÜDÜ
```
📌 **Ders: kaba bir nicemleme, iki değişken arasında SAHTE BAĞIMSIZLIK
üretir — ve bağımsızlık "yeni bilgi" gibi okunduğu için, hatalı ölçüm hatalı
öneriyi DOĞRULAR.** Yakalayan şey bir denetim değil, `vrm_ortanca = 0,0`
satırının anlamsızlığıydı.

---

## 4. ③ GEÇİT BULMA — çalışıyor, ve kazancı ölçüldü

Hücre içinde batı→doğu geçişin **en alçak tepe kotu** (`min_satır max_sütun z`)
ve köşegenlere de izin veren **gerçek minimax darboğaz**.

**Birim sınavı** (`gecit-centik`): 2000 m'lik sırtta 900 m'lik tek hücrelik
çentik → düz geçiş **900 m**, minimax **900 m**, zirve 2000 m.
Bugünkü ortalama alma bu hücreyi ~333 m'lik bir tümsek gibi gösterirdi —
**ne zirveyi ne çentiği**.

```
zirve − geçit kotu (ortalama)      düz geçiş − minimax
HİMALAYA   532 m                   39,6 m
ALPLER     435 m                   36,5 m
KARADENİZ  389 m                   31,1 m
ZAGROS     287 m                   15,4 m
KONYA       77 m                    2,0 m
```
⇒ Alpler'de bir geçit, hücre başına ortalama **435 m tırmanış** kazandırıyor.
⇒ Köşegen serbestliği yalnız **31-40 m** daha kazandırıyor (%8-9) ⇒ **ucuz düz
geçiş ölçüsü yeterli**, pahalı minimax gerekmiyor.

---

## 5. ④ DAHA İYİ DEM GEREKİR Mİ — çözünürlük merdiveni

Doğrudan cevaplanamaz (30 m'lik veri yok). Ölçülebilen: **aynı DEM
kabalaştırılınca ne kaybediyoruz** — kaybın hızı, ince tarafın değerini
gösterir.

| alt-ızgara | piksel | ALPLER kabartma | KARADENİZ | ZAGROS | TUNA | KONYA |
|---|---|---|---|---|---|---|
| 6×6 | 928 m | **813 m** | **672** | **394** | **82** | **42,5** |
| 3×3 | 1855 m | 556 | 474 | 270 | 55 | 31 |
| 2×2 | 2783 m | 337 | 307 | 178 | 34 | 20 |
| 1×1 | 5566 m | **0** | **0** | **0** | **0** | **0** |

🔑 **Son satır motorun bugünkü hâli.** Bugün hücre içi kabartma tanım gereği
**sıfır**.

```
1 örnek → 36 örnek   Alpler'de  0 → 813 m      BEDAVA, bugünkü veriyle
 4 örnek → 36 örnek              337 → 813 m   (×2,4)
 9 örnek → 36 örnek              556 → 813 m   (×1,46)
```
⇒ Eğri **926 m'de hâlâ doymamış**: daha ince veri daha fazlasını gösterirdi.
⚠️ **Ama sınırı önceden yazılmıştı ve tekrar ediliyor:** bu ölçüm 30 m'lik bir
DEM'in ne göstereceğini **söylemez**; kabalaştırarak inceyi kestirmek bir
ekstrapolasyondur ve kabartma fiziksel olarak **doymak zorundadır**.
🟢 **HÜKÜM: hayır, yeni DEM gerekmiyor** — çünkü en büyük kazanç (0 → 813 m)
elimizdeki veriyle, **indirme yapmadan** alınıyor. İnce DEM ikinci mertebe bir
iyileştirme; öncelik listesinde bugün yeri yok.

---

## 6. ⑤ BELLEK BÜTÇESİ — ölçüldü

```
ızgara 7200 × 2900 = 20.880.000 hücre
  int16 dizi   41,8 MB        float32 dizi   83,5 MB
ÖLÇÜM koşusu   8 dizi (int16 ×7 + float32 ×1) = 334 MB dosyada
  tam pencere süresi   368 s / 338 s  (iki koşu)
  TEPE BELLEK          979 MB / 1112 MB      tavan 1500 MB (ÖNCEDEN yazıldı)
  DEM dışında kalan    20 satır (84-85°K) — orada DEM YOK
```

🟢 **ÖNERİ: ÜRETİMDE TEK DİZİ — `tri_mutlak`, int16, 41,8 MB.** Gerekçe:
```
TV (toplam salınım)  = 0,49 × TRI     ölçülen aralık 0,456-0,534, 8 bölge
yerel eğim           = (TRI/8) / ortalama_komşu_uzaklığı(enlem)
yön ayrımı           tırmanış(yön) = (TV + net yükselti(yön)) / 2
                     net yükselti motorun MEVCUT alanından gelir
```
⇒ İkinci bir dizi taşımaya gerek yok: yön bilgisi TV ile mevcut yükseklik
alanının **birleşiminden** çıkıyor.

---

## 7. NE YAPMADIM — açıkça

```
· arac/uret_petek.py'ye DOKUNMADIM (§7 · 1.MURAT'ta) — kayma bulgusu RAPOR
· maliyet fonksiyonunu ÖNERMEDİM (§3① · KITA 6'nın işi) — veri ve katsayı verdim
· hangi yürüme eğrisi (Tobler/Naismith/Munter) kullanılacağını SEÇMEDİM (R1/KITA 9)
· tam pencere dizilerini DEPOYA YAZMADIM — 334 MB'lık artefakt; `--dizi-yaz`
  ile istendiğinde 6 dakikada üretilir, tarif JSON'da
· geçit rakımlarını UYDURMADIM — kaynak kapalı, `ölçülemedi` yazıldı
```

## 8. AÇIK KALEMLER
```
🔴 KAYMA — 1.MURAT'ın kararı. Düzeltilirse eğim yüzeyi değişir, koşu 8/9
   çıktısı bundan etkilenmiş olabilir.
🟡 TRI'nin ANİZOTROPİ düzeltmesi alette var ama motora girerse orada da
   gerekecek: enlem başına bir katsayı, sabit değil.
🟡 Riley sınıf tablosu 1 km'lik KARE ızgara için; bizim hücre 60°K'de
   464×928 m. 45°K'nin kuzeyinde sınıf sınırları yeniden türetilmeli.
⚪ Geçit rakımı dış doğrulaması — akademik/resmî bir kaynak açıldığında
   `--bolge` ile tek komutta sınanabilir.
```

<!-- DURUM: ASAMA 2 BITTI ¦ 2026-08-30 ¦ MALIYET-MESAFE -->
# BULGU — MALİYET-MESAFE · AŞAMA 1 ve 2

**Oturum:** MALİYET-MESAFE · **Tarih:** 30 Ağustos 2026
**Öngörü:** `denetim/MALIYET-ASAMA2-ONGORU.md` (ölçümden **önce** damgalandı)

---

## 0. ÖLÇÜM TABLOSU — dört kutu, aynı gün, aynı alet

```
kutu                 kara h.  ayrışan        ULAŞILAMAZ  Voronoi  Maliyet  >400km
Doğu Anadolu (dağ)    16251   1696 (%10,4)        0        143      166     0/19
Sahra (düz)           30263   2660 (%8,8)         3       1114      984     8/35
Sardinya (deniz)       7680    467 (%6,1)        24        112      112     0/33
Kefalonya (deniz)      2585    258 (%10,0)       19        138      138     0/13
```
*(erişim = noktanın sahiplendiği EN UZAK hücreye kuş uçuşu km — `TAVAN_KM`in
tam olarak kırptığı büyüklük)*

---

## 1. ÖNGÖRÜLERİN HÜKMÜ — ikisi çürüdü

### 🟢 ① DENİZ SINAVI — TUTTU (mazeretsizdi)
Maliyet-mesafe, Voronoi'nin karşı kıyıdan boyadığı hücreleri **reddediyor**:
Sardinya kutusunda **24**, Kefalonya kutusunda **19** hücre "ulaşılamaz".
Kefalonya'da ortanca erişim **43 → 26 km**'ye düşüyor — yöntem ada
coğrafyasında belirgin biçimde daha muhafazakâr.

### 🔴 ② SAHRA %3 — ÇÜRÜDÜ. Mazeretsiz ilan etmiştim.
```
öngörü  düz çölde ayrışma < %3
ölçüm   %8,8   — neredeyse ÜÇ KATI
```
**Gerekçem yanlıştı, veri değil.** *"Eğim ≈ 0 ⇒ sürtünme ≈ 1 ⇒ maliyet =
Voronoi"* demiştim. Ölçüm: Sahra kutusunun **eğim medyanı 19,3 m** — sıfır
değil. `0,005 × 19,3 ≈ %10` sürtünme yayılımı, ve bu %8,8 hücreyi
oynatmaya yetiyor.

📌 **Ders: "düz" arazi HÜCRE ÖLÇEĞİNDE düz değil.** Sahra'yı düz sanmak bir
harita klişesi; içinde Hoggar ve Tibesti kütleleri var ve 11 km'lik
hücrelerde bunlar görünüyor.

### 🟡 ③ SAHİPSİZ = 0 — LAFZI yanlıştı, ruhu doğru
Öngörü *"bağlı kara kutularında"* diyordu. **Tek gerçek bağlı-kara kutusu
Doğu Anadolu'ydu ve orada 0 çıktı ✓.** Öteki üç kutu deniz içeriyor, yani
öngörüyü **sınamıyorlar**; oradaki 3 · 24 · 19 hücre maliyet-mesafenin
*açtığı* delik değil, **bulduğu kopukluk** (ada/enklav).
⚠️ Yine de öngörüyü *"tuttu"* diye yazmıyorum: **kutu seçimim öngörümü
sınayacak biçimde kurulmamıştı.** Bu bir ölçüm kusuru, bir başarı değil.

### 🔴 ④ OSMANLI TOPLAMI — ÖLÇMEDİM
Kutu aleti sahip başına toplam üretmiyor. Dört kesit × dört kutu = 16 koşu
gerekirdi, ve **kutu ölçümü zaten bir vekil** — anlamlı cevap üretim
koşusundan gelir. *"Temiz"* demiyorum, **ölçmedim** diyorum.

### 🟢🔴 ⑤ AŞIRI ERİŞİM — TUTTU, VE HİPOTEZİ ÇÜRÜTTÜ
```
Sahra · MALİYET      EN UZAK 984 km · 400 km'yi aşan nokta 8/35
                     (Reggân 984 · Murzuk 907 · Hoggar 673)
öteki üç kutu        EN UZAK 112-166 km · 400 km'yi aşan 0
```
Şartnamedeki hipotez şuydu: *"arazi zaten pahalıysa petek oraya
uzanamaz ⇒ tavan gereksizleşir."*

🔴 **ÇÜRÜDÜ.** Çölde maliyet-mesafe erişimi 1114 → 984 km'ye indiriyor
(yalnız **−%12**) ve hâlâ kaldırılan tavanın **2,5 katı**.
⇒ **Maliyet-mesafe `TAVAN_KM`in yerini ALMAZ. Emniyet kemeri zorunludur.**

---

## 2. 🔴 EMNİYET KEMERİ YARIÇAP TAVANI OLMAMALI — ölçümden çıkan öneri

Tavan geri konacaksa **eski biçimiyle konmamalı**, çünkü onu 28 Ağustos'ta
çürüten mekanizma aynen geri gelir:

> *"Tavan komşu ortasında KESMİYOR, peteğin YARIÇAPINI mutlak kırpıyor …
> aradaki toprak SAHİPSİZ kalıyor — sınır kaymıyor, **haritada delik
> açılıyor**."*

Maliyet-mesafe altında da aynen böyle olur: erişimi kırparsan kırpılan
hücreler **sahipsiz** kalır. Yani `TAVAN_KM`i geri koymak, maliyet-mesafenin
kazandırdığı *"delik açmama"* özelliğini geri verir.

🟢 **Ölçüm başka bir kapı gösteriyor: aşırı erişim ÇÖLE ÖZGÜ.**
```
çöl kutusu      984 km   8/35 nokta 400 km üstü
dağ kutusu      166 km   0/19
deniz kutuları  112-138  0/33 · 0/13
```
⇒ Frene **her yerde** ihtiyaç yok; **yalnız çölde** var. Ve çöle özgü
mekanizma **zaten mevcut ve çalışıyor**: `COL_PUAN_ESIK` (27 Ağustos
koşusunda 14.468 petek-gün çölde takıldı).

**ÖNERİ:** emniyet kemeri = **çöl freni**, yarıçap tavanı değil.
Çöl ceza katsayısı erişimi doğal olarak kısar ve **delik açmaz**, çünkü
hücre yine bir sahibe atanır — sadece daha pahalıya.

⚠️ **Bu bir ÖNERİ, ölçüm değil.** Çöl freninin 984 km'yi kaça indirdiğini
**ölçmedim**; `COL_PUAN_ESIK` prototipe bağlı değil.

---

## 3. AŞAMA 1 ÖZETİ — üç bulgu

**① Şartname yanlıştı:** iş *"ağırlığı 0'dan çıkar"* değil, *"kabloyu
bağla"*. `EGIM_CARPANI = 0.005` zaten yazılı ve kalibreydi; `surtunme_dem()`
hiçbir üretim yolundan çağrılmıyordu. Çare `surtunme_sec()` **seçicisi** —
değiştirme değil seçenek, çünkü Aşama 2 yan yana ölçüm istiyor.

**② Göl kusuru:** `kara = z > 0` Van Gölü'nü (1640 m) **kara** sayıyordu.
```
poligon  kara 16246 · göl 4 parça çıkarılmış
DEM      kara 16700 · %100,0        ← göl YOK
düzeltme kara 16251 — poligonla 5 hücre farkla uyuşuyor (öncesi 454)
```
Nehir katmanı da sessizce sıfırlanıyordu. **İkisi de düzeltildi.**
📌 Kusur Gelibolu kutusunda **görünmezdi** (orada göl yok, %96,8 uyum).
`§11`: *"temiz çıkan bir örneklem, örneklemin dışını temiz ilan etmez."*

**③ Eğimin payı ilk kez ölçüldü — ve kalibrasyonla çelişiyor:**
```
EGIM 0.000  ayrışan 1092 (%6,7)   ← poligon yolu 1091 veriyor
EGIM 0.005  ayrışan 1696 (%10,4)
EGIM 0.020  ayrışan 3065 (%18,9)
```
`EGIM-CARPANI-OLCUM.md` *"0,005-0,02 ayırt edilemiyor"* diyor (sefer
sapması 71,9 ↔ 73,9 km). Harita çıktısı aynı aralığı **2,8 kat** ayırt
ediyor. ⇒ **Duyarsız bir kalibrasyon ölçütü, duyarlı bir sonucu gizler.**
Çarpanın *ölçülmüş* olması yetmiyor; **doğru eksende** ölçülmüş olmalı.

---

## 4. ÖLÇTÜĞÜM ≠ ÇIKARDIĞIM

```
ÖLÇTÜM     §0'daki dört kutunun bütün sayıları · üç çarpan · iki sürtünme
           kaynağı · geçme yolunun birebir korunduğu

ÇIKARDIM   "aşırı erişim ÇÖLE ÖZGÜ"        → DÖRT kutudan genelleme
           "emniyet kemeri çöl freni olmalı" → ÖNERİ, çöl freni ölçülmedi
           "kalibrasyon yanlış eksende"      → TEK kutudan (Doğu Anadolu)

ÖLÇMEDİM   Değişmez 1/1b (üretim koşusu gerekir, motor KİLİTLİ)
           atlas geneli km² · Osmanlı toplamları (öngörü ④)
           çöl freninin erişime etkisi
           hız bedeli (AŞAMA 3) · nehir geçiş bedelinin payı
           41 iç-bölge kara ayrışmasının sebebi
```

---

## 5. DEVİR NOTU — bağlamda kalan her şey buraya indi

> Bu bölüm **bayrak devri için** yazıldı: bir sonraki oturum bu dosyadan
> devam edebilsin, benim bağlamıma ihtiyaç duymasın diye.

### 5.1 Ölçümlerin TAM tekrar komutları
```bash
py arac/maliyet.py sinav                 # poligon — eski sayılar (geçme yolu)
py arac/maliyet.py sinav --dem           # DEM + eğim
py arac/maliyet.py kara-fark             # iki kara tanımının ayrışması

py arac/maliyet.py kutu --b 39.0,37.5,44.0,40.5  --adim 0.03 --dem                     # DAĞ
py arac/maliyet.py kutu --b -2.0,18.0,20.0,32.0  --adim 0.10 --gun 1600-06-15 --dem    # ÇÖL
py arac/maliyet.py kutu --b 6.0,35.0,11.0,41.5   --adim 0.04 --gun 1533-06-15 --dem    # SARDİNYA
py arac/maliyet.py kutu --b 19.0,37.0,22.0,39.5  --adim 0.03 --gun 1600-06-15 --dem    # KEFALONYA
```
⚠️ Kutu **koordinatları** §0 tablosunda yoktu, yalnız adları vardı. Adım
ve gün de sonucu değiştirir — bu satırlar olmadan tablo **tekrarlanamazdı.**

### 5.2 Tek değişkenli sınav — yöntem, dosya değil
Çarpanın payını ayırmak için `maliyet` modülü **içe aktarılıp**
`EGIM_CARPANI` çalışma anında değiştirildi; dosya düzenlenmedi:
```python
import maliyet as M
M.EGIM_CARPANI = 0.0        # ya da 0.005 / 0.020
M.EGIM_OLCULDU = True       # uyarı basmasın, KASTEN sıfırlıyoruz
M.kutu_kos((39.0, 37.5, 44.0, 40.5), 0.03, dem=True)
```
📌 Betikler scratchpad'deydi ve **kaybolacaklar**; kalması gereken şey
dosya değil bu **üç satırlık yöntem.**

### 5.3 🔴 AÇIK UÇLAR — yapılmadı, unutulmasın
```
① agirlik_sinavi()  hâlâ surtunme() çağırıyor — --dem'e ÇEVRİLMEDİ.
   sinav() ve kutu_kos() çevrildi, üçüncüsü ATLANDI. Bilerek değil.
② COL_PUAN_ESIK     prototipe BAĞLI DEĞİL. "Emniyet kemeri çöl freni
   olmalı" önerisi bu yüzden ÖLÇÜLMEMİŞ bir öneridir.
③ 41 iç-bölge ayrışması  `kara-fark` "🔴 İNCELE" diyor; göl/baraj/deniz
   seviyesi altı ayrımı YAPILMADI. Göl düzeltmesinden SONRA yeniden
   ölçülmeli — sayı düşmüş olabilir.
④ 'sinir' alanı     `yerlesimler_sinir_dogu.js` girdi.py'nin tanımadığı
   bir alan yazıyor (6 kayıt). Her koşuda uyarı basıyor. BENİM DOSYAM
   DEĞİL, sahibine bildirildi.
```

### 5.4 Bir sonraki oturuma: AŞAMA 3'ün ilk sorusu
Hız bedeli **ölçülmedi** ve şartname onu *"kararın en belirleyici sayısı
olabilir"* diye işaretliyor. Ölçülecek şey:
```
bugünkü koşu ~2 saat (Voronoi)
Dijkstra ızgarası bunu KAÇ KAT büyütür?
   → prototipte hücre sayısı ↔ süre eğrisi çıkarılır, atlas penceresine
     (unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])) ölçeklenir
```
⚠️ Ve şu tuzak baştan bilinsin: prototip **saf Python Dijkstra**.
`MALIYET-ONGORU.md ⑤` zaten yazıyor: *"yavaşsa çözüm çözünürlük düşürmek
DEĞİL, numpy'a taşımaktır."* Yani ölçülen süre **yöntemin** değil **bu
uygulamanın** süresidir; ikisi karıştırılırsa yöntem haksız yere reddedilir.

---

# AŞAMA 3 — HIZ BEDELİ

## 6.1 🔴 ÖNCE BİR DOĞRULUK KUSURU — hız ölçülemeden önce çıktı

Ⓑ'yi *tahmin* bırakmamak için aynı maliyet modelini saf numpy ile yazdım
(`maliyet_mesafe_np`) ve kendi kapımı koydum: *"sahiplik uyuşmuyorsa hız
ölçümü anlamsızdır."* **Kapıdan geçemedim** — iki çözücü ayrıştı, ve
ayrışan hücrede **numpy DAHA UCUZ yol buluyordu**, yani Dijkstra en kısa
yolu kaçırıyordu.

Tek değişkenli sınav (bütün ağırlıklar `1.0`):
```
adım    ağırlık                UYUŞMAZ   np DAHA UCUZ
0.080   gerçek (k: kademesi)        1          2
0.080   HEPSİ 1.0 (sınav)           0          0
0.060   gerçek (k: kademesi)        1          4
0.060   HEPSİ 1.0 (sınav)           0          0
```

**Sebep:** `maliyet_mesafe()` her hücrede **tek** bir skor tutup yeni
geleni onunla buduyor:
```python
yeni = s + bedel / nk[n]["agirlik"]
```
Ama gelecekteki artışlar **sahibin ağırlığına** bağlı. Ağırlığı büyük bir
sahip şu an daha pahalı olsa bile **adım başına daha ucuz** ilerler ve
sonra öne geçebilir. Tek skor dizisiyle budamak bunu engelliyor ⇒
**Dijkstra erken buduyor ve en kısa yolu kaçırıyor.**

⚠️ **Kusur gerçek veride ETKİN**: ağırlık `k:` kademesinden geliyor ve
kademe farkı olan her yerde çalışıyor. Bugün etkisi küçük (4038 hücrede
1), ama `ALTYAPI` kademe ağırlıklarını **ayırmayı** hedefliyor — ağırlıklar
yayıldıkça kusur büyür.
📌 Ve bu kusur **hız sorusunun yan ürünü** olarak çıktı: kimse *"Dijkstra
doğru mu"* diye sormamıştı, çünkü Dijkstra'nın doğruluğu varsayılırdı.

## 6.2 Ⓐ ve Ⓑ — ve Ⓑ hipotezim ÇÜRÜDÜ

Büyük ızgarada (Sahra kutusu, 21k → 192k hücre):
```
adım    hücre     Ⓐ Dijkstra   Ⓑ numpy gevşetme   tur
0.120   21.411      0,14 sn        0,22 sn         73
0.080   48.125      0,72 sn        1,13 sn        109
0.060   85.511      0,63 sn        2,18 sn        146
0.040  192.500      1,53 sn       15,86 sn        217
ölçekleme üssü:    Ⓐ n^1,09      Ⓑ n^1,95
```
🔴 **Ⓑ hipotezim çürüdü.** *"numpy'a taşımak hızlandırır"* beklentisi
yanlış: gevşetme **tur sayısı ızgara çapıyla büyüdüğü** için asimptotik
olarak kötü. Dijkstra `n log n`; gevşetme pratikte `n²`ye yakın.
⇒ **Ⓑ (vektörleştirme) bu iş için YANLIŞ KAPI.** Gerçek Ⓑ derlenmiş bir
Dijkstra olurdu (`scipy.csgraph` / `skimage.graph`) — **ikisi de bu
ortamda YOK** (ölçüldü). Ama gerek de kalmadı: **Ⓐ zaten yetiyor.**

## 6.3 ASIL ÇARPAN — ve devraldığım sayı yanlıştı

Tek koşunun süresi anlamsız; motor bölümlemeyi **nokta kümesi ya da
ağırlık değişince** yeniden kurar.
```
farklı kur: tarihi                262
farklı bit: tarihi                 13
kur/bit birleşimi                 272
kd: (ZAMANLI kademe) 190 kayıt    239 tarih — 186'sı YENİ
──────────────────────────────────────────────
GERÇEK ÇARPAN                     458
```
🔴 İlk ölçümüm **272** demişti; `kd:`yi hesaba katmamıştım. Zamanlı
kademe ağırlığı değiştirir, ağırlık bölümlemeyi değiştirir ⇒ çarpan
**%68 daha büyük.**

## 6.4 ATLAS PENCERESİ — kara oranıyla düzeltilmiş

Pencerenin çoğu deniz ve deniz hücresi Dijkstra'ya **hiç girmez**:
```
ana kutu    235.104 hücre · kara 133.069 (%56,6)
kuzeybatı     4.576 hücre · kara   1.344 (%29,4)
TOPLAM kara oranı %56,1
```

**Ⓐ · atlas · çarpan 458 · kara düzeltmeli:**
```
adım        ~km    tek koşu    TOPLAM     bugünkü 2 saate göre
0,10°     11 km      7,7 sn     59 dk     0,5×   🟢 BUGÜNKÜNDEN HIZLI
0,05°    5,5 km     34,1 sn    4,3 saat   2,2×   🟢 EŞİĞİN ALTINDA
0,02°    2,2 km      253 sn     32 saat    16×   🔴 RED
0,01°    1,1 km     1076 sn    137 saat    68×   🔴 RED
```

### 🟢 HÜKÜM: YÖNTEM YAŞAR — ama çözünürlük **0,05°'de tavanlanır**

Koordinatörün eşiği *"Ⓑ ≤ 3× yaşar"*. Ⓐ **0,05°'de 2,2×** ⇒ eşiği
**Ⓑ'ye hiç ihtiyaç duymadan** geçiyor.

⚠️ **VE BURADA BİR ŞART VAR, ÖLÇMEDİM:** bugünkü motor kıyıyı **1,3 km**'ye
sadeleştiriyor. 5,5 km'lik bir ızgara bundan **kabaca dört kat kaba**.
Yani hız sorusu çözüldü ama yerine **kalite sorusu** geçti: *0,05°'de
çizilen sınır yeterince iyi mi?* **Ölçmedim** — ve bu, yayın kararı
verilmeden önce ölçülmeli.

📌 Ve bir mühendislik kolu duruyor: çarpan 458, her değişimde **bütün
pencereyi** yeniden hesaplamayı varsayıyor. Bir nokta eklendiğinde
yalnız **etkilenen bölge** yeniden hesaplansa çarpan çok küçülür. Bunu
**ölçmedim**, ama 0,02°'yi erişilebilir kılacak tek kol bu.

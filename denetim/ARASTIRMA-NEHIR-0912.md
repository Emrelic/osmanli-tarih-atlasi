# KITA 10 · NEHİR GEÇİŞİNİN BEDELİ — ARAŞTIRMA RAPORU

```
PROGRAM   oturumlar/YURUME-BILIMI-PROGRAMI.md · R2
ÖNGÖRÜ    denetim/NEHIR-ONGORU-0912.md · commit 7c61e0f · 14:33:30
          (tek kaynak okunmadan, tek sayı ölçülmeden yazıldı)
VERİ      denetim/VERI-NEHIR-0912.json   ← KITA 6'nın girdisi
ALETLER   ARAC-NEHIR-{KAPI,PDF,FM,VIABUNDUS,VB2,VB3,HERZOG}-0912
🔴 arac/ ve data/ altına YAZILMADI.
```

# ⓪ TEK CÜMLEYLE

**Nehir geçişinin tek bir bedeli yoktur.** Ölçüm üç ayrı özne için
**üç ayrı mertebe** verdi (0,4 km · 40 km · 200 km) ve aradaki fark
**500 kattır.** Emre'nin "100 km"i **ordu** öznesi için doğru,
tek yürüyücü için 50-250 kat fazladır.

---

# ① SEVKİN ÖNCÜLLERİ — üçü de doğru, ve bir dördüncüsü var

```
① `_kv_dijkstra` (2268-2302) içinde nehir/ford/köprü → 0 EŞLEŞME     ✓
② `dogal_hatta_yasla` (1221) sınırı çizildikten SONRA yaslıyor       ✓
③ satır 629 `_sr > NEHIR_ONEM_ESIGI` (=5.0)                          ✓
```

## 🔴 ④ SEVKTE OLMAYAN — ve tasarımı bağlayan bulgu

```python
nd = d + math.hypot(dx*di, _KVDY*dj) * (surt[k] if surt else 1.0)
```
Maliyet **HÜCREYE** ait bir sürtünme çarpanı. Nehir geçişi ise doğası
gereği **KENARA** ait bir bedeldir. İki somut sonucu:

```
🔴 (a) nehir BOYUNCA yürümek ile nehri GEÇMEK aynı bedeli öder.
       Tarihte nehir boyu bir YOLDUR; geçmek bir engeldir.
🔴 (b) hücre 5.566 m, nehir ≤ 1 km ⇒ %80-95'i kara olan alan cezalanır.
```

🟢 **Ve literatür bunu bağımsız olarak söylüyor** — Herzog (CAA 2010):
> *"Cost functions are expected to be continuous… An exception is the
> crossing of streams: whereas small creeks can often be traversed easily
> by jumping to the other side, with increasing breadth, a point is
> reached where jumping is no longer possible."*

Ve izotropik maliyetleri sayarken açıkça: *"barriers like large rivers
**without fords**"* — yani **geçidi olan** nehir izotropik bir engel
değildir.

## 🔴 VE BİR BEŞİNCİ: NEHİR KAPISI FİİLEN ÇALIŞMIYOR

`ARAC-NEHIR-KAPI-0912` ölçtü:
```
parça 1455 · geçen 1371 (%94,2) · elenen 84 (%5,8)
   ADI olduğu için geçen        1107
   scalerank sayesinde geçen       4
```
⇒ `NEHIR_ONEM_ESIGI = 5.0` **neredeyse hiçbir şey elemiyor**; kapıyı
belirleyen `_ad is None` koşulu. Bir bedel bu kapıya bağlanacaksa
**kapı önce düzeltilmeli.**

---

# ② BEDEL — "KİM GEÇİYOR" cevaplanmadan sayı verilemez

| Özne | km eşdeğeri | Aralık | Dayanak |
|---|---|---|---|
| tek yürüyücü, **geçitte** | **0,4** | 0,2–2 | Herzog 2010, çarpan 5 |
| tek yürüyücü, **geçit yok** | **1,9** | 1–4 | Herzog 2010, çarpan 20 |
| ordu, **hazır** köprü | **40** | 8–80 | 1 günlük menzil · *türetildi* |
| ordu, **köprü kurarak** | **200** | 120–400 | Drava 1526 · **5 gün** |

**Emre'nin "100 km"i:** ordu kademesinin (40–200) **tam ortasında**.
⇒ 🟢 **DOĞRULANDI — ama yalnız ORDU öznesi için.**

📌 Ve bu, `R1①`in cevaplanmasını zorunlu kılıyor: atlas **tasarruf**
boyuyorsa (`D030`) özne **ordu**dur, gezgin değil.

---

# ③ GEÇİT — duvardaki delikler

## Taşınabilir olan ORAN, çarpan DEĞİL

Herzog aynı çalışmada iki çarpan kullanıyor: nehir tamponuna **20**,
köprü/geçit bulunan yerlere **5**.
```
🟢 TAŞINABİLİR   geçitsiz : geçitli = 4 : 1
🔴 TAŞINAMAZ     çarpanın KENDİSİ
```

### 🔴 Ve burada kendi öngörümü çürüttüm

Öngörüde şunu türetmiştim: *"Emre'nin 100 km'i tek hücreye konursa
f = 1 + 100/5,566 ≈ **19,0**"* — ve Herzog'un **20**'siyle çakışması bir
doğrulama gibi görünüyordu.

**Ölçtüm, çakışma tesadüf:**
```
Herzog     DEM 50 m · tampon yarıçapı 50 m   ⇒ 20× ≈ 1,9 km eşdeğer
bu atlas   hücre 5.566 m                     ⇒ 20× ≈ 105,8 km eşdeğer
                                    aradaki fark 111 KAT
```
⇒ ***Aynı sayı, iki modelde iki ayrı şey demek.*** Bir sürtünme çarpanı
**ölçüldüğü hücre boyutuyla birlikte taşınır** (`D129`). Çakışmayı
"doğrulama" diye yazsaydım, `D123`ün tam tarifi olurdu: iç tutarlılık
doğrulama değildir.

## Geçilebilirlik ölçütleri — FM 90-13 (askerî talimname, §4 kabul kümesi)

```
akıntı hızı      < 1,5 m/s          "Fording is possible for stream
                                     velocity less than 1.5 m/s"
yatak            sağlam, iri kayasız, düzgün
kıyı uzunluğu    ≥ 300 m giriş noktasında
yamaç eğimi      tekerlekli ≤ %33 · paletli ≤ %60 (kuru sert zemin)
                 ⚠️ MODERN ARAÇ için — 16. yy arabası/topu için yön göstergesi
```
⚪ **Derinlik tablosu ölçülemedi:** FM'de bir `Draft (meters)` tablosu
var (Ford: Personnel 0,10 · Wheeled 0,75 · Tracked 1,20) ama PDF sütun
hizası bozuk ve bu sayıların **azamî geçilebilir derinlik** mi yoksa
aracın gerektirdiği **asgarî su derinliği** mi olduğu ayırt edilemedi.
Uydurmuyorum; birincil nüshadan doğrulanmalı.

📌 **`§4⑦` bu raporu doğrudan kurtardı:** WebFetch iki akademik PDF için
de *"metin çıkarılamıyor / JBIG2"* dedi. `pypdf` ikisini de okudu —
Herzog **33.921** karakter, FM 90-13 **312.024** karakter. Birinci
çıkarıcıya güvenseydim bu raporun **çekirdek sayısı** (20 / 5) hiç
bulunmayacaktı.

---

# ④ GEÇİT VERİSİ NEREDEN — ve deponun içinde duran cevap

**Natural Earth'te geçit katmanı YOK** (alanlar ölçüldü: `dissolve ·
scalerank · featurecla · name · name_alt · rivernum · note · min_zoom ·
name_en · min_label` — genişlik yok, debi yok, geçit yok).

🟢 **Ama `veri-kaynak/viabundus/` altında tam gereken şema duruyor:**
```
Nodes.csv  →  Is_Bridge  + Bridge_From / Bridge_To / Bridge_Description
              Is_Ferry   + Ferry_From  / Ferry_To  / Ferry_Description
ölçüldü:      450 köprü · 460 feribot = 910 geçit düğümü
              ZAMAN ARALIĞI: 450/450 ve 460/460 DOLU
Edges.csv  →  Type = ferry : 149 kenar (medyan uzunluk 1.001 m)
hakemli · CC-BY 4.0 · DOI 10.5281/zenodo.10828107 · kapsam 1350-1650
```
🔴 **Zaman aralığı taşıması kritik:** atlas gün hassasiyetinde çalışıyor
ve 1450'de kurulan bir köprü 1400'de yardım etmez. Viabundus bunu
**şemasında** taşıyor.

🔴 **AMA KAPSAMI TUTMUYOR — ölçüldü:**
```
Viabundus geçit kapsamı   lon 3,0 – 31,0   lat 49,7 – 61,4
Osmanlı çekirdeğinde (26-45D / 36-42K)      0 / 910
Tuna havzasında     (18-30D / 43-48K)       0 / 910
```
⇒ **ŞEMA KANITLANDI, VERİ YETMİYOR.** Viabundus bir **şablon** olarak
kullanılır (alan adlarına kadar), bir **kaynak** olarak kullanılamaz.
Osmanlı coğrafyasının geçit verisi ayrı bir iştir (menzilnâmeler,
köprü kayıtları).

---

# ⑤ SCALERANK — bedel türetilemez, ve bu ölçüldü

```
genişlik alanı  YOK        debi alanı  YOK
13 nehir · 72 karşılaştırılabilir çift · 27'sinde sıra TERS = %38
(rastgele sıralamada ~%50 beklenir; mükemmel uyumda %0)
```
En keskin örnek: **Sava scalerank 7**, **Fırat scalerank 3** — Sava'nın
debisi yaklaşık **dört kat** büyük, sıralaması **dört kademe kötü**.
⇒ 🟢 **Ö2 tuttu:** scalerank bir kartografik gösterim sırasıdır;
ondan genişlik ya da debi **türetilemez**.

⚠️ Kıyasta kullanılan debi değerleri **referans** değerlerdir, birincil
hidroloji kurumundan doğrulanmadı. Hüküm onlara duyarlı değil: Sava/Fırat
tersliği hiçbir makul belirsizlikle kapanmaz.

---

# ⑥ MEVSİM — önerim ve gerekçesi

**SEFER MEVSİMİ (ilkbahar-sonbahar) değeri kullanılsın.** Yıllık ortalama
da en kötü hâl de kullanılmasın.

```
GEREKÇE   Atlas TASARRUF boyar (D030) ve tasarruf yıl boyu sürer.
          Ama tasarrufun KURULDUĞU an sefer mevsimidir.
          İlkbahar kar erimesi taşkını bu pencerenin İÇİNDEDİR
          ⇒ bu seçim bedeli DÜŞÜRMEZ, YÜKSELTİR.
```
**Gün hassasiyetinde mevsimlik çarpan yazılabilir mi?** Teknik olarak
evet — ama **tavsiye etmiyorum**: petek geometrisi her gün yeniden
üretiliyor, ve mevsimlik bir bedel aynı sınırın **yıl içinde
salınmasına** yol açar. Atlas bunu çizer ve kullanıcı *"sınır oynuyor"*
diye görür. Tek bir sefer-mevsimi değeri.

---

# ⑦ TARİHÎ ÇAPRAZ KONTROL ⭐

**Drava / Osijek, 1526 — Mohaç seferi**
```
14 Ağustos 1526   ordu Osijek'e vardı
                  İbrahim Paşa gemi köprüsünü BEŞ GÜNDE kurdu (300 m)
16 Ağustos 1526   Osijek-Darda köprüsü başlandı — Mimar Sinan tasarımı,
                  ~7 km uzunluk, 6 m genişlik
                  geçişten sonra köprü YIKILDI (geri dönüşü düşünmemek için)
29 Ağustos 1526   Mohaç
```
⇒ **5 gün, ve bu bir "geçit arama" değil "geçit İMAL ETME" vakası** —
en pahalı kademe. 5 gün × 40 km/gün = **200 km eşdeğeri.**

📌 Osmanlı askerî köprücülüğüne dair en erken **resmî** belgeler
Szigetvár seferine (1566) ait; 15. yy ikinci yarısından itibaren
imparatorluğun iki ucunda ponton köprüler kuruluyor.

---

# ⑧ ÖNGÖRÜ KARNESİ

| | Öngörü | Sonuç |
|---|---|---|
| **Ö1** | bedel iki tepeli, "100 km" tek sayı olarak çürür | 🟢 **TUTTU** — Herzog 20/5 |
| **Ö2** | scalerank→genişlik eşlemesi yapılamaz | 🟢 **TUTTU** — alan yok, %38 ters |
| **Ö3** | sefer mevsimi önerilecek | ⚪ öneri, sınanabilir değil |
| **Ö4** | ordu için gün mertebesi (2-10) | 🟢 **TUTTU** — Drava 5 gün |
| **Ö5** | literatürde hazır katsayı bulunur | 🟢 **TUTTU** — üçü de bulundu |
| 🔴 | *"f≈19 ≈ Herzog 20"* çakışması | **KENDİM ÇÜRÜTTÜM** — ölçek tesadüfü |

---

# ⑨ KITA 6'YA BEŞ ÖNERİ

```
1  Nehir bedelini HÜCRE sürtünmesine yazma — model onu ifade edemez.
   En az kötü yaklaşım: yalnız nehrin GEÇTİĞİ hücreye çarpan, ve
   nehre PARALEL kenarları muaf tutmak (kenar-yönü bilgisi gerekir).
2  TEK sayı yazma. Özneyi seç (R1①) ve §② kademesini kullan.
   Atlas tasarruf boyuyorsa özne ORDU'dur.
3  Geçit verisi OLMADAN nehir bedeli koymak, sınırları nehirlere
   YAPIŞTIRIR ve gerçek geçitlerden geçen tarihî yayılmaları BOZAR.
   Geçit verisi yoksa bedeli DÜŞÜK tut.
4  `NEHIR_ONEM_ESIGI=5.0` fiilen çalışmıyor. Bedel bu kapıya
   bağlanacaksa kapı ÖNCE düzeltilmeli.
5  Taşınabilir tek sayı 1:4 ORANIDIR. Mutlak değer bu atlasın kendi
   ölçeğinde KALİBRE EDİLMELİ — ve Emre'nin dört sayısı o sınavdır.
```

# ⑩ AÇIKÇA ÖLÇEMEDİKLERİM (`D107`)
```
⚪ ölçülemedi  FM derinlik tablosu (sütun hizası bozuk, azamî mi asgarî mi)
⚪ ölçülemedi  Herzog çarpanının 5.566 m hücredeki karşılığı (kalibrasyon şart)
⚪ ölçülemedi  nehrin YOL olarak değeri — Herzog ıslak vadilerden kaçınıldığını
              ama su ihtiyacı yüzünden kaynağa yakın geçildiğini yazıyor;
              iki yönlü etki, bu iş kapsamında ölçülmedi
🔴 bulunamadı  ordunun HAZIR köprüden geçiş süresi (birincil kayıt)
🔴 bulunamadı  Osmanlı coğrafyasında geçit/köprü verisi (Viabundus kapsamıyor)
⚪ gerek yok   geçit yoğunluğu SABİTİ — geçitler veriye konursa dolanma
              bedelini modelin kendisi hesaplar
```

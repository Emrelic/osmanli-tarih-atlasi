# ALTI BARDAK — doluluk ölçümü

**Oturum:** ALTI BARDAK (Opus) · **Ölçüm günü:** 28 Ağustos 2026
**Şartname:** `oturumlar/ALTI-BARDAK.md` + `oturumlar/ORTAK-PAKET-KURALLARI.md`
+ `ONCELIK.md` · koordinatör **ORHANGAZİ**
**Yetki:** YALNIZ ÖLÇÜM. `data/` `arac/` `js/` `index.html` ve kök `*.md`
dosyalarına **yazılmadı**; koşu (`kosu2_28agu.log`) sürerken hiçbir
`arac/*.py` değiştirilmedi.

**Ölçüm tabanları — hepsi bugün, hepsi kendi dilinde ayrıştırıldı:**
```
yerleşim   girdi.yukle()  → 2609 nokta / 57 dosya   (girdi.GIRDI_DOSYALARI)
kronoloji  node + eval    → olaylar*.js 1257 · kronoloji_*.js 4838
devletler  node + eval    → devletler.js 431 künye
renkler    import renkler → BOYALAR 396   (regex ile de 396 — iki yol aynı)
kara/alan  shapely        → ne_10m_land ∩ uret_petek.py:105 BOLGE
topoğrafya kosu2_28agu.log satırları (17:52-17:53 aşamaları)
```

---

# 0. TABLO — Emre'nin sorusunun doğrudan cevabı

| # | bardak | doluluk | paydası ne | hedef | darboğaz mı | sıradaki iş |
|---|---|---|---|---|---|---|
| ① | **dünya kronolojisi** | **genişlik %91 · derinlik %20** | 392/431 künyenin kronolojisi var · medyan **4** madde/künye (hedefim 20) | her künyede ≥1 madde ✓, komşularda 20+ | 🔴 **EVET** | **2230 madde yazılı ama BAĞLANMIYOR** — 146'sı 3 satırla açılır |
| ② | **topoğrafya** | **kapsam %39,5 · kalite ~%40** | dünya karasının %39,5'i harita penceresinde · 187 nehir + 163 "sırt" | pencere %100 · sırt = ZİRVE hattı | 🔴 **EVET** | pencere kararı — ②③④⑤'in ortak tavanı |
| ③ | **yerleşim** | **h1 %100 · dünya %6** | Anadolu 29,5 nokta/100k km² = referans; dünya ort. 1,0 | halkaya göre kademeli | 🟡 kısmen | h7 (0,2) ve h4 Orta Asya (0,7) — ama halka sırası h2-h3'ü önce ister |
| ④ | **bölge + yaslanma** | **%7** | zamanlı kademe `kd:` 190/2609 | `kd:` tüm noktalarda | 🔴 **EVET** | `Değişmez 3` **448** çelişen çift — %65'i 1300-1400'de |
| ⑤ | **devletler** | **künye %100 · harita %58 · veri %91** | 431 künye / 248'inde `harita:` / 392'sinde veri dönemi | dünya künyesi ~500 | 🟡 kısmen | 39 künye veride hiç kullanılmıyor; 12 renk hayalet |
| ⑥ | **madde içeriği** | **çekirdek %93-100 · dünya ekseni %2,3** | Osmanlı 1257 maddede `d:` %100 · `kaynak:` %99 · `yer_id:` %93,2 · `dunya:` **%2,3** | tümünde `dunya:`/`kapsam:` | 🟡 kısmen | 1228 Osmanlı maddesine `dunya:`/`kapsam:` |

⚠️ **"Hedef" sütunu ÖLÇÜM DEĞİL, benim tarifim.** Emre'nin ya da
koordinatörün onayından geçmedi; ölçüm satırları ondan bağımsız geçerlidir.

---

# 1. 🔴 ÖNCELİK — `FAYDA ÷ EMEK` sırasıyla

`ONCELIK.md`: *sıralama ölçütü `HEDEF − DOLULUK` değil, `FAYDA ÷ EMEK`.*

```
① BAĞLANMAYAN 146 MADDE          emek: ÜÇ SATIR   fayda: 146 madde ekranda
   `KRONOLOJI_ID_OZEL`a üç eşleme. Kodun kendi yorumu bu istisnayı
   öngörmüş. Bugün ölçülen en yüksek fayda/emek oranı.

② OSMANLI MADDELERİNE `dunya:`   emek: 1228 madde  fayda: HAZIR ARAYÜZ AÇILIR
   Eşik seçicisi, iç/dış süzgeci ve kod ZATEN VAR (index.html:230-239,
   js/app.js:7269). Veri gelince çalışır. Kuralla verilip elle düzeltilebilir.

③ 2084 MADDELİK ÇOKLU-DEVLET DOSYALARI   emek: ORTA  fayda: %46 → %100
   Maddeye `devlet:` alanı ya da dosya bölünmesi. Yapısal ama tek seferlik.

④ `Değişmez 3` — 448 ÇELİŞEN ÇİFT        emek: BÜYÜK  fayda: ④ bardağı açılır
   Ama kırılım bir kısayol veriyor: 290'ı (%65) 1300 ve 1400 kesitinde.
   Erken dönemi düzeltmek yükün üçte ikisini alır.

⑤ HARİTA PENCERESİ                        emek: KOŞU + NOKTA  fayda: ②③④⑤ tavanı
   🔴 BU BİR KUSUR DEĞİL, BİR KARAR. `CLAUDE.md §6` sırayı kilitliyor:
   "nokta yoğunluğu sağlanmadan BOLGE kutusunu açma." Karar Emre'nin.
```

⚠️ **`ONCELIK.md §3`in itiraz görevi gereği:** ③ bardağının en boş yeri
halka 7 (0,2 nokta/100k km²) ama **halka 7 sıranın sonunda.** Halka kuralı
*"bir halka öncekinin değişmezleri temiz olmadan açılmaz"* diyor. Bugün en
boş yer ile **sıradaki yer aynı değil** — ve sıra kazanır.

---

# 2. ① DÜNYA KRONOLOJİSİ — genişlik %91 · derinlik %20

**Ölçtüğüm:**
```
Osmanlı çekirdeği  data/olaylar*.js        1257 madde / 21 dosya
Devlet künyesi içi data/devletler.js       1636 madde
Derin kronoloji    data/kronoloji_*.js     4838 madde / 42 dosya
   42/42 dosya index.html'e BAĞLI ✓
```
🔴 **Ama bindirme (js/app.js:7044) hepsini almıyor.** app.js'in kendi
mantığını node'da aynen taklit ettim:
```
KRONOLOJI_* değişkeni        42     4838 madde
   BİNDİRİLEN                24     2608 madde
   EŞLEŞMEYEN                18     2230 madde   (%46)
bindirme SONRASI toplam            4036 madde
```
İki cinse ayrılıyor:
```
🟢 3 değişken · 146 madde — ALT TİRE ↔ TİRE
   KRONOLOJI_RODOS_SOVALYELERI 96 → id "rodos-sovalyeleri" VAR
   KRONOLOJI_ATINA_DUKALIGI    25 → id "atina-dukaligi"    VAR
   KRONOLOJI_NAKSA_DUKALIGI    25 → id "naksa-dukaligi"    VAR

🔴 15 değişken · 2084 madde — ÇOKLU-DEVLET DOSYASI, id eşlemesi ÇÖZMEZ
   anadolu 281 · dogu_afrika 218 · orta_asya 205 · italya_sehir 186 ·
   balkan 177 · iran_ardillari 155 · guney_asya 153 · cin 136 ·
   hindistan 131 · misir 120 · kuzeyafrika 83 · ozbek 73 · japonya 71 ·
   arabistan 60 · sirbistan 35
```
Üçünü tek tek ölçtüm: `japonya` → künye **`meiji-japonya`** · `sirbistan` →
**dört** künye (`sirbistan-nemanjic` · `sirp-despotlugu` ·
`sirbistan-prensligi` · `sirbistan-kralligi`) · `ozbek` → `buhara` · `hive` ·
`hokand`. Yani bunlar tek künyeye bağlanamaz.

**Derinlik dağılımı** (bindirme sonrası, 431 künye):
```
0 madde      39      1-5 madde   333      6-20   36      21+   23
medyan 4 · %25 3 · %75 5 · en fazla 270 (ingiltere)
```
⇒ **Künyelerin %77'si beş maddeden az.** Genişlik iyi (392/431 = %91),
derinlik zayıf.

**Osmanlı çekirdeğinin zaman dağılımı** (50 yıllık dilimler):
```
1250-99    7   ▏         1600-49   78   ████████████████
1300-49   41   ████████  1650-99   92   ██████████████████
1350-99   72   ██████████████       1700-49   90   ██████████████████
1400-49   80   ████████████████     1750-99   66   █████████████
1450-99   87   █████████████████    1800-49  163   █████████████████████████████
1500-49  144   █████████████████████████████   1850-99  128   ██████████████████████████
1550-99  114   ███████████████████████         1900-23   95   ███████████████████
```
⇒ En seyrek dilim **kuruluş devri** (1250-1299: 7 madde) ve **1750-1799**
(66). En yoğun 1800-1849 (163).

**Bulamadığım:** kronoloji maddelerinin **coğrafî** dağılımını ölçemedim —
`olaylar*.js` maddelerinde bölge alanı yok, `yer_id` üzerinden bağlamak
ayrı bir geçiş ister. **ölçemedim.**

---

# 3. ② TOPOĞRAFYA — kapsam %39,5 · kalite tartışmalı

**Ölçtüğüm (koşu logu, 28 Ağustos 17:52-17:53):**
```
eğim DEM      etopo2022_30s_dunya.tif · 43200×17280 · 30 arcsec · DÜNYA ✓
göller        305 büyük göl kara maskesinden çıkarıldı (+1 tarihî: Aral)
nehir         187 parça · 143 adlı akarsu
dağ sırtı     163 dağ sırası
kara maskesi  Natural Earth 10m · tolerans 0,002 (≈220 m)
```
🔴 **`CLAUDE.md §2` "89 göl" diyor — BAYAT. Bugün 305.**

## 🔴 KAPSAM — asıl sayı bu
`uret_petek.py:105` penceresini shapely ile gerçek karaya kestim:
```
GERÇEK dünya karası      249.542.431 km²
PENCERE İÇİNDE            98.485.921 km²        ⇒  %39,5
```
Bölge bölge:
```
Amerika               %0        Sibirya            %85
Okyanusya            %13        Batı Afrika        %91
Sahra altı Afrika    %44        öteki her yer   %95-100
```
Pencere dışında kalan nokta: **179 / 2609 (%6,9)** — Amerika 140 · güney
yarımküre (lat < −11) 29 · Pasifik (lon > 146) 10.
🟢 Bu sayı `CLAUDE.md §1.5` ile **birebir** tuttu (179). O satır bayat değil.

## 🟡 KALİTE — "sırt" zirve hattı değil
`arac/uret_petek.py:593-594` (bugün okudum):
```python
cekirdek = g.buffer(-0.12)
SIRTLAR.append(cekirdek.boundary if not cekirdek.is_empty else g.boundary)
```
⇒ "Sırt", dağ poligonunun **dış hattının 0,12° ≈ 13,3 km içeri çekilmiş
hâlinin SINIRIDIR** — yani zirve çizgisi değil, **iki etek çizgisi.** Geniş
bir sıradağda (Kafkasya, Zagros) sınır yanlış tarafa yaslanabilir.
⚠️ Bunun haritaya inen etkisini **ölçemedim** — geometri ölçümü ister.

**Nehir beyaz listesi:** `CLAUDE.md`nin anlattığı 43→157 vakasının bugünkü
hâli **187**. Sırtlarda benzer bir süzgeç arandı: `SIRTLAR` döngüsünde ad
bazlı beyaz liste **yok** (163 sıranın hepsi alınıyor). ⇒ Nehirdeki kusur
sırtlarda **yok**.

---

# 4. ③ YERLEŞİM — halka 1 dolu, dünya boş

**Payda açıkça:** Anadolu'nun bugünkü yoğunluğu **29,5 nokta / 100.000 km²
kara**; "dolu" bunun neresi olduğuna göre okunur.

```
bölge                    nokta   boş   GERÇEK km²    nokta/100k   pencere%
h1 Anadolu                 297     0    1.005.138       29,5        100%
h1 Rumeli-Balkan           250     1    1.314.270       19,0        100%
h3 Fransa-Batı Avr.         96     0    1.049.218        9,1        100%
h3 Britanya-İrlanda         25     0      326.535        7,7        100%
h1 Kırım-Kafkas             55     1      920.919        6,0        100%
h3 İberya                   42     0      730.018        5,8        100%
h4 Kuzey Avrupa             84     3    1.912.496        4,4        100%
h1 Suriye-Irak-Arabistan   254    23    6.038.755        4,2        100%
h6 Güneydoğu Asya          165     2    4.601.391        3,6        100%
h2 Orta Avrupa              53     0    1.512.386        3,5        100%
h1 Mısır-Sudan             164    49    4.799.414        3,4        100%
h2 Rusya-Ukrayna           152     1    4.970.991        3,1        100%
h1 Kuzey Afrika            195    16    6.522.705        3,0         95%
h3 İtalya                   16     0      598.789        2,7        100%
h5 Hindistan-G.Asya        129     0    6.785.599        1,9        100%
h2 Doğu Afrika              88     6    4.711.646        1,9         98%
h5 Çin-Japonya-D.Asya      198    13   12.277.465        1,6        100%
h2 İran                     32     2    2.595.547        1,2        100%
h4 Orta Asya                51    11    7.652.611        0,7        100%
h3 Batı Afrika              20     9    5.336.488        0,4         91%
h7 Sibirya                  43    37   11.852.564        0,4         85%
h7 Okyanusya                25    16    9.604.080        0,3         13%
h7 Sahra altı Afrika        25    16   11.086.866        0,2         44%
h7 Amerika                 140    17   63.041.109        0,2          0%
```
**Halka toplamı:**
```
halka   nokta   boş     GERÇEK km²     nokta/100k    Anadolu'nun kaçta biri
  h1     1215    90     20.601.200         5,9              1/5
  h2      325     9     13.790.570         2,4              1/12
  h3      199     9      8.041.048         2,5              1/12
  h4      135    14      9.565.107         1,4              1/21
  h5      327    13     19.063.064         1,7              1/17
  h6      165     2      4.601.391         3,6              1/8
  h7      233    86     95.584.619         0,2             1/125
```

🔴 **Üç şaşırtıcı satır:**
```
h2 İRAN            1,2 — h3 Fransa'nın (9,1) SEKİZDE BİRİ.
                   Halka 2, yani komşu. Halka 3'ten daha boş.
h3 İTALYA           16 nokta — Venedik ve Ceneviz'in anayurdu.
                   Britanya (25) ve İberya (42) daha dolu.
h6 GÜNEYDOĞU ASYA  3,6 — h2'den (2,4) ve h3'ten (2,5) DAHA DOLU.
                   Sıra ile doluluk BURADA TERS DÜŞMÜŞ.
```
⇒ **Doluluk halka sırasını izlemiyor.** `ONCELIK.md §4` *"bir halka
öncekinin değişmezleri temiz olmadan açılmaz"* diyor; ölçüm halka 6'nın
halka 2'den önde olduğunu gösteriyor.
⚠️ **ÇIKARIM DEĞİL, ÖLÇÜM:** niçin böyle olduğunu ölçmedim (halka 6'da
ada-devlet çokluğu doğal bir yoğunluk üretiyor olabilir).

**Kutu uyarısı:** halka kutularını **ben çizdim**, siyasî halkayı coğrafî
kutuyla temsil ediyorlar. 10 nokta hiçbir kutuya girmedi (Menorka · Baf ·
Kobdo · Franz Josef · Novaya Zemlya ×2 · Dârfûr ×3 · Ubangi) — %0,4.

---

# 5. ④ BÖLGE + TOPOĞRAFYAYA YASLANMA — %7, en boş bardak

**Ölçtüğüm:**
```
kademe k: dağılımı   k0 236 · k1 258 · k2 207 · k3 1236 · k4 672
m: gerçekten dolu    747 / 2609   (%28,6 — 1862'sinde "—")
m: zinciri k1/k2'ye kapanmayan     2   (koşu logu 65 UYARI basıyor;
                                       fark: log HER kesitte sayıyor)
🔴 zamanlı kademe kd:  190 / 2609  (%7,3)
bolgeler.js          348.303 bayt · ~74 kayıt (kaba sayım, doğrulanmadı)
```

## 🔴 `Değişmez 3` — 448 çelişen çift, ve kırılım bir kısayol veriyor
`CLAUDE.md §3.5`'teki ölçüm komutu **yalnız `data/yerlesimler.js`'i** okuyor
(790 nokta = tabanın %30'u) ve **359** diyor. Aynı ölçümü **tam tabanda**
(2609 nokta) yaptım:
```
1300-06-15   146          1600-06-15    27
1400-06-15   144          1700-06-15    29
1500-06-15    76          1800-06-15    26
                                TOPLAM  448
```
⇒ **%65'i (290) ilk iki kesitte.** Bölge ekseni geç dönemde neredeyse
tutarlı; kırılan yer **kuruluş ve beylikler devri.**
📌 Ve bu, `CLAUDE.md §3.5`in "359" satırının bugünkü hâli: sayı büyümüş
(359 → 448) ama **evren de büyümüş** — ikisi doğrudan karşılaştırılamaz.
İki ölçümün farkı bir bozulma değil, **taban farkı.**

## Niçin bu bardak %7
`VERI-YAPISI.md` zamanlı hâli (`kd:[{f,t,k,m}]`) tasarlamış ve
`CLAUDE.md §3` bunun `Değişmez 3`ü çözeceğini yazıyor. Uygulama **190
noktada** (%7,3). Kalan %92,7'de bölge bağı hâlâ **zamansız** — yani
1300'deki Söğüt ile 1800'deki Söğüt aynı merkeze bağlı.

---

# 6. ⑤ DEVLETLER — üç sayı ve aralarındaki fark

**Ölçtüğüm — üçü ayrı ayrı:**
```
① künye        data/devletler.js               431
② renk         arac/renkler.py BOYALAR         396   (import ile; regex de 396)
③ veride `s:` dönemi olan kimlik               393
   `harita:` alanı olan künye                  248   (%57,5)
```
**Farklar — bardağın gerçek boşluğu:**
```
VERİDE var, RENGİ YOK          9   __BOSLUK__ · arnavutluk-bagimsiz ·
                                   bulgaristan-kralligi/prensligi ·
                                   sirbistan-kralligi/prensligi ·
                                   sirp-despotlugu · suud-ikinci/ucuncu
VERİDE var, KÜNYESİ YOK        2   __BOSLUK__ · panama-cumhuriyeti
KÜNYESİ var, VERİDE DÖNEMİ YOK 39  (%9,0)
RENGİ var, VERİDE DÖNEMİ YOK   12  (%3,0 — hayalet renk adayı)
```

## 🔴 39'un içinde GERÇEK DELİK var — dördünü tek tek ölçtüm
39'un hepsi kusur değil (bazısı atlas ufkundan önce biter: `song` 1279,
`jin` 1234, `mogol-imparatorlugu` 1260; bazısı Osmanlı sistemi içinde
`d:`/`v:` ile çizilir: `cezayir-ocagi` · `tunus-ocagi` · `erdel`). Ama
noktaları arayınca **kimliğin yerine bir komşu kimliğin geçtiği** vakalar
çıktı:
```
Floransa (43,769/11,256)  s: 1281 → 1861  toskana
   ⇒ `floransa` künyesi (cumhuriyet, 1115-1532) HİÇ kullanılmıyor.
     Toskana Grandüklüğü 1569'da kuruldu — 1281-1569 arası ANAKRONİK.
Prag    (50,088/14,421)  s: 1281 → 1526  almanya
   ⇒ `bohemya` künyesi (krallık, 1198-1526) HİÇ kullanılmıyor.
Dubrovnik(42,650/18,094) s: venedik → macaristan → OSMANLI-tâbi
   ⇒ `dubrovnik` künyesi (cumhuriyet, 700-1808) HİÇ kullanılmıyor.
Kuveyt  (29,376/47,977)  s: 1716 → 1795  benihalid → tâbi
   ⇒ `kuveyt` künyesi (1752+) HİÇ kullanılmıyor.
```
⇒ Bu, `CLAUDE.md §3.5`in **hayalet devlet** dersinin tersi: orada var
olmayan devlet boyanıyordu, burada **var olan devlet boyanmıyor** ve yerini
bir komşu/ardıl kimlik dolduruyor.
⚠️ Dördünü ölçtüm; kalan 35'i **tek tek ölçmedim.**

**Bölge bölge en boş** (künyesi var, veride dönemi yok):
```
kafkasya      3/6  (%50)      balkanlar   9/32 (%28)
kuzey-afrika  4/10 (%40)      dogu-afrika 3/13 (%23)
orta-avrupa   3/10 (%30)      misir-sudan 2/9  (%22)
```
🔴 **Ve bu sıralama halka sırasının TERSİ:** en boş bölgeler halka 1-2'de,
halka 4-7 %97-100 dolu. ⇒ Çekirdek coğrafyada künye ile veri arasındaki
kopukluk, uzak coğrafyadakinden **büyük.**

**Künyesi olup kronolojisi olmayan 39** (bindirme sonrası): güney-amerika
16 · kuzey-amerika 9 · orta-amerika-karayip 7 · güney-afrika 4 ·
batı-afrika 2 · okyanusya 1 — **hepsi halka 7.**

🟡 **Yan bulgu — sözlük ihlali:** `bolge:` kapalı sözlüğünde
`orta-amerika` (5 künye) ve `orta-amerika-karayip` (7 künye) **iki ayrı
değer** olarak duruyor. `devletler.js` başlığındaki sözlükte yalnız
`orta-amerika` yazılı.

---

# 7. ⑥ MADDE İÇERİĞİ — çekirdek dolu, dünya ekseni boş

**Osmanlı çekirdeği (1257 madde) — alan kaplaması:**
```
t          %100,0      kisiler    %97,5
b          %100,0      yer_id     %93,2
d          %100,0      yer_kon     %4,5
etiket      %99,8      tur         %2,5
kaynak      %99,0      onem        %2,3
yer         %97,9      dunya       %2,3
duygu       %97,7      kapsam      %2,3
gun         %97,5      vefat_id    %2,1
```
**Anlatım kalitesi:**
```
`d:` olan madde        1257/1257 (%100)
uzunluk medyan 381 karakter · en kısa 43 · en uzun 1702
cümle sayısı  ≤1: 133  ·  2-4: 1004  ·  ≥5: 120
   ⇒ hedeflenen "2-4 cümle" bandı: %79,9
```
**Derin kronoloji (kronoloji_*.js, 4838 madde):**
```
dunya:  %100    kapsam:  %100    d:  %100    kaynak:  %100
dunya dağılımı  1:1452 · 2:1807 · 3:967 · 4:472 · 5:140
```

🔴 **Tek boşluk, ama büyük:** dünya ekseni (`dunya:` + `kapsam:`) derin
kronolojide **%100**, Osmanlı çekirdeğinde **%2,3 (29/1257)**.
Ve arayüz bunu **bekliyor**: `index.html:230` `<select id="ek-dunya-esik">`,
`index.html:239` `<input id="ek-yalniz-dis">`, `js/app.js:7269-7271` eşiği
uyguluyor. `js/app.js:7094` sınırı kendi kaydetmiş:
> *"Osmanlı EK olarak sunulmuyor — ölçülmüş bir sınır, kapatılmadı … 0/821"*

⇒ **Bu bardağın en yüksek fayda/emek kalemi:** 1228 maddeye `dunya:` +
`kapsam:` yazmak, **hazır bir arayüzü açar.** Kod işi yok.

---

# 8. 🔴 ÖLÇEMEDİKLERİM — `ölçemedim` diye yazıyorum

```
② sırt kalitesinin HARİTAYA İNEN etkisi   geometri ölçümü ister
② "163 dağ sırası" yeterli mi              karşılaştırma tabanı yok
① kronoloji maddelerinin COĞRAFÎ dağılımı  olaylar*.js'te bölge alanı yok;
                                           yer_id üzerinden ayrı geçiş ister
③ nokta yoğunluğu hedefinin ne olması gerektiği — `MIMARI.md §5`i açmadım
④ bolgeler.js kayıt sayısı                 KABA (regex). 74 rakamı doğrulanmadı.
⑤ 39 künyenin 35'i                         dördünü tek tek ölçtüm, kalanı hayır
⑤ 12 "hayalet renk"in gerçekten çizilip çizilmediği — koşu çıktısına bakmadım
⑥ `kaynak:` alanlarının GEÇERLİ olup olmadığı — TDV slug'ı açmadım
   (`denetim/BULGU-KAYNAK-DESTEK.md` bunu ayrıca ölçmüş)
kronoloji_*.js'te dosyalar arası MÜKERRER madde — ölçmedim
```

# 9. 🟡 BAYAT ÇIKAN İKİ SATIR

```
CLAUDE.md §2    "89 göl çıkarılır"        → bugün 305   (+1 tarihî düzeltme)
CLAUDE.md §3.5  "Değişmez 3: 359 çift"    → tam tabanda 448
                 (bozulma DEĞİL: o ölçüm 790 noktalık dar tabanda yapılmış)
data/kronoloji_fransa.js başlığı
   "HENÜZ CANLI DEĞİL. index.html'e ve arac/girdi.py'ye bağlanmadı"
                                          → 42/42 dosya index.html'e BAĞLI
```

# 10. 🟢 DOĞRU ÇIKAN SATIR

```
CLAUDE.md §1.5  "179 nokta PENCERE DIŞINDA"  → bugün de tam 179. ✓
```

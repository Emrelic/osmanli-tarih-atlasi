# UFUK BANTLARI — 7 ve 10 günlük sürtünmeli yürüme: neden veri yok, ve yapı

**27 Eylül 2026 · istişare · YILDIRIM BAYEZIT** · paket maddeleri
`H-0002` · `H-0020` · `H-0021` (parti-emrelic-0080)

Emre: *"ufuk 7 gün ve 10 gün ayarında veri henüz üretilmedi deniliyor…
en son neye karar kılmış idik."* · *"bu 7 ve 10 gün için birer ek koşu mu
koşturmalıyız."*

---

## ① CEVAP — mekanizma VAR, karar VERİLMİŞ, bayrak KAPALI

Sıra dışı bir şey olmamış: **istediğin yapı 16 Eylül'de senin kararınla
kurulmuş, 21 Eylül'de motora yazılmış, sınanmış — ve varsayılan olarak
KAPALI bırakılmış.**

```
arac/uret_petek.py:2092   Ⓑ UFUK BANTLARI — Emre'nin kararı: üç bant 5 / 7 / 10 gün
arac/uret_petek.py:2103   🔴 VARSAYILAN KAPALI: `MOTOR_UFUK_BANT` verilmezse bu
                          blok hiç çalışmaz ve çıktı bugünküyle birebir aynı kalır
arac/uret_petek.py:7854   _byol = os.path.join(KOK, "data", "ufuk_bantlari.js")
js/app.js:648             "Ⓑ ufuk: data/ufuk_bantlari.js YOK (üretilmemiş) — A'da kalınıyor"
```

Ekranda gördüğün *"veri henüz üretilmedi"* cümlesi bir arıza değil, o
tasarımın **kendi ihbarıdır**: arayüz bant dosyasını tembel yükler,
bulamazsa 5 güne (A görünümü) düşer ve bunu söyler.

🔴 **Ve niçin üretilmedi, dolambaçsız: koşu 16'yı ben `MOTOR_UFUK_BANT`
vermeden başlattım.** Yalnız `MOTOR_PARALEL_KAPALI`yı temizledim. Bayrağı
unutan benim; motorun ya da kararın eksiği değil.

---

## ② "EK KOŞU MU GEREKİR?" — hayır, ve sebebi yapısal

**Bant, yeni bir yürüyüş DEĞİL; aynı bedel alanının başka bir kontur
seviyesidir.** Dijkstra bir kez koşar, ondan sonra 5 / 7 / 10 gün aynı
alanın üç eş yükselti çizgisidir.

```
arac/uret_petek.py:2096   ⇒ Bant, AYNI bedel alanının farklı kontur seviyesidir;
                            yeni Dijkstra GEREKMEZ
```

Ölçülmüş bedel (Sahra kutusu, `denetim/B-GORUNUM-0072-BANT.md §1`):

| aşama | süre | bant başına mı? |
|---|---|---|
| Kara-kısıtlı Dijkstra | 8 sn | ❌ hayır — ufuktan bağımsız |
| Petekler (Voronoi) | 2dk 26sn | ❌ hayır |
| **bütçe bölgesi (kontur)** | **3 sn** | ✅ evet |
| **kıyı kesimi (`_yr_kes`)** | **1 sn** | ✅ evet |

⇒ **kutuda bant başına 4 sn, iki bant 8 sn — koşunun %2'si.**

⚠️ **DÜNYA ÖLÇEĞİ İÇİN BU SAYI ÖLÇÜLMEDİ, ve tahminimi ölçüm gibi
yazmıyorum.** Kutu koşusu 3dk 17sn, koşu 16 ise 6s 20dk — kabaca 116 kat.
Bant kesimi petek başına koştuğu için dünya ölçeğinde bandın maliyeti
`Kıyı kesimi` aşamasıyla aynı mertebeye çıkar (koşu 16'da 4dk 07sn), buna
bant ada kuralı (taban 1dk 12sn) ve bant tavanı eklenir.
**TAHMİNİM: iki bant için +15…30 dk, yani 6s 20dk'lık koşunun %4-8'i.**
Bu bir tahmindir; ölçümü ancak bantlı bir koşu verir.

📌 Sonuç: **ayrı koşu gerekmez, ama bir TAM KOŞU gerekir** — bant dosyası
bugünkü koşunun çıktısından türetilemez, çünkü kontur motorun bellekteki
bedel alanından kesilir, `donemler.js`ten geri hesaplanamaz.

---

## ③ SENİN ÖNERDİĞİN YAPI — aynı fikir, ve neden AYRIKLAŞTIRILDI

Önerin: *"her noktanın hangi yerleşime en yakın olduğu ve bu yakınlığın
rakamsal değeri yazılsın; biz ayardan 5/7/10/15 seçelim, üstündekiler
sahipsiz kalsın."*

**Fikir birebir doğru ve motor zaten öyle çalışıyor.** Ayrılan tek şey,
o rakamın NEREDE durduğu: sürekli bir alan olarak mı, yoksa önceden
kesilmiş kontur poligonları olarak mı.

### Sürekli alanı yayınlamanın bedeli — ölçüldü

```
KOŞU 16 (kosu16.log:441)
  ızgara 0.05°  ·  7200 × 2900 = 20.880.000 hücre  ·  KARA 6.095.287 hücre
  tohum 4293 yerleşim
```

Hücre başına iki sayı gerekir: **hangi yerleşim** (4293 tohum ⇒ 13 bit,
pratikte 2 bayt) + **sürtünmeli uzaklık** (2 bayt) = **4 bayt**.

```
tek zaman kesiti           6.095.287 × 4 bayt  ≈  24 MB  (ham)
```

🔴 **Ama alan ZAMANLA DEĞİŞİR ve bunu sen de söyledin** (*"her senenin
verisi farklı olabilir, yeni yerleşim yerleri peydah olunca…"*). Motor bunu
zaten biliyor; `kur:`/`bit:` alanlarını **varlık epokları** aşamasında
okuyor:

```
kosu16.log:3654  ▶ Varlık epokları (kur:/bit:) — 15dk 03sn
kosu16.log:3662  kuşatılmışlık devri: 30.752 epok-vaka, 215 yerleşim
çapraz sayaç     varlık devri (petek_epok): 290 çağrı
```

⇒ **290 ayrı epok.** Sürekli alanı yayınlamak demek:

```
290 epok × 24 MB  ≈  6,9 GB  ham   (sıkıştırmayla belki 1,5-2 GB)
```

Bugünkü yayının tamamı, en büyük dosyası 85 MB olmak üzere ~160 MB
mertebesinde. **6,9 GB, sunucusuz statik bir site için yapılamaz** —
ve yapılsa bile tarayıcı o rasteri devlet renklerine boyamak için yine
poligona çevirmek zorundadır. Yani sürekli alan, istemcide **her ayar
değişiminde 6 milyon hücreyi poligonlaştırmak** demektir.

### ⇒ Kontur, bir taviz değil TESLİM EDİLEBİLİR TEK BİÇİM

Bir eşikte kesilmiş alan **zaten poligondur** — haritanın konuştuğu dil.
16 Eylül'deki kararın tam bu:

```
"Motor çıktısı devlet başına iç içe OLMAYAN ARTIŞ bantları verir;
 arayüz seçilen ufka kadarki bantları BİRLEŞTİREREK çizer."
```

Yani arayüzde ayar yine senin dediğin gibi çalışır (5 → 7 → 10 seç,
harita büyür); yalnız ara değerler serbest değil, **önceden seçilmiş
seviyelerdir.** 15 günü de eklemek serbest: `MOTOR_UFUK_BANT` virgüllü
liste alır, tek satır değişikliğiyle dördüncü bant üretilir.

### Sağlamlık sınavı yapılmış, varsayılmamış
```
bant_b = kesim(b) − kesim(b−1)   ancak  kesim(40) ⊆ kesim(56) ⊆ kesim(80)
ise "iç içe olmayan artış bandı" anlamına gelir.
ÖLÇÜM: iki kutuda da 0 petek / 0 km² ihlal ✓
```
Tutmasaydı bir toprak iki banda birden yazılır ve arayüz onu iki kez
çizerdi.

---

## ④ 🔴 VE İSTEDİĞİN İKİ ŞEY BİRBİRİNİ YİYOR — ölçüldü, 21 Eylül

Bu, bu belgenin en önemli maddesi ve söylemezsem işi yanlış yaparım.

**7/10 günü istemenin sebebi** (H-0002'de kendi sözlerin): devletler arası
sahipsiz boşluklar, kopuk eksklavlar, derin koridor boşlukları, bölüşülmemiş
alanlar kapansın.

**Ama aynı düğme, 21 Eylül'de senin "bölüşülmesin" dediğin yeri de
doldurur** — *"nasıl Atlantik'i Akdeniz'i iki ülke arasında bölüştürmüyor
isek kum denizini dağ denizini ve orman denizini de bölüştürmemeliyiz."*

Sahra kutusunda ölçüldü (`B-GORUNUM-0072-BANT.md §3`):

| çölün ufku | sahipsiz kalan kara | ufkun kazandırdığı | kazancın payı |
|---|---|---|---|
| 5 gün (bugünkü taban) | 950.218 km² | — | — |
| 5 gün (kelepçeli) | 933.409 km² | 16.809 km² | %1,8 |
| **7 gün** | **208.844 km²** | 741.374 km² | **%79,4** |
| 10 gün (kelepçe YOK) | 16.608 km² | 933.610 km² | **%100** |

🔴 **Kelepçesiz 10 günlük ufuk, Sahra'da sahipsiz karanın %98'ini yok
ediyor.** Ve bu tesadüf değil yapısal: ufkun kazancı neredeyse tamamen
TENHA bölgede doğuyor, tenha bölge de zaten çöl.

Anadolu kutusu kontrol grubu: kelepçeli/kelepçesiz fark **tam 0 km²** —
yani kelepçe çölün olmadığı yerde hiçbir şey yapmıyor. (Sıfır çıkmasaydı
ölçüm hatası arardım.)

### Motorda çare ZATEN AYRI İKİ DÜĞME
```
MOTOR_UFUK_BANT       bantların seviyeleri (saat)         → 40,56,80
MOTOR_COL_UFUK_SAAT   ÇÖL hücrelerinde ufuk burada kalır  → çöl kelepçesi
MOTOR_BOS_TOPRAK      "<pay_km>,<esik_km>" — iki tohum arası açıklık
                      eşikten genişse arası DENİZ sayılır, bölüşülmez
MOTOR_BOS_TOPRAK_COL  aynısının çöle özel hâli
```
📌 Ve motorun kendi ölçtüğü ince nokta: çölde asıl belirleyici `esik`
değil **`pay`** — çöle doğru yerleşimin NE KADAR ilerlediği. Sahra
koridorunun en boş noktası herhangi bir yerleşimden 261 km uzak, yani
açıklık ~522 km; o açıklıkta `esik`i indirmek zaten açık bir kapıyı bir
kez daha açar. Sahipsiz şeridin genişliği **`açıklık − 2×pay`**dır.

---

## ⑤ 🔴 SENDEN TEK KARAR — koşudan ÖNCE verilmeli

`B-GORUNUM-0072-BANT.md §4` bunu zaten şart koşmuş: *"ÇÖL KELEPÇESİ KARARI
KOŞUDAN ÖNCE VERİLMELİ — çünkü kelepçe ufkun ürününü belirliyor, sonradan
eklenecek bir süs değil."*

```
(a) ÇÖL 5 GÜNDE KALIR       kum denizi korunur · ufkun kazancının %98,2'si
                            geri alınır · koridor/eksklav kazancı yalnız
                            YERLEŞİK bölgelerde görünür
(b) ÇÖL 7 GÜN              kazancın %79,4'ü korunur · çöl genel ufkun
    (ölçülmüş üçüncü yol)   3 gün gerisinde kalır · harita boş kalmaz
(c) KELEPÇE YOK            10 günde Sahra tamamen bölüşülür — 21 Eylül'deki
                            "kum denizi bölüşülmez" kararın FİİLEN kalkar
```

Benim tavsiyem **(b)**: senin iki isteğinin ikisini de ölçülebilir ölçüde
karşılayan tek şık o — ve tavsiyemi hacimle değil bu tabloyla
gerekçelendiriyorum.

⚠️ İkinci karar: **15 gün bandı eklenecek mi?** Mekanizma alır; bedeli
dosya boyutudur (aşağıda) ve çölde (c)'ye yakın davranır.

---

## ⑥ DOSYA BOYUTU — ölçülmüş aralık, ve yeni bir kısıt

`B-GORUNUM-0072-BANT.md §2`, iki kutuda ölçüm:

| | tenha kutu | yoğun kutu |
|---|---|---|
| taban ≤5 gün | 354,0 KB | 320,7 KB |
| bant 5–7 | 12,4 KB | 161,0 KB |
| bant 7–10 | 0,0 KB | 45,3 KB |
| **bant / taban** | **%3,5** | **%64,3** |

⇒ dünya ölçeğinde ek **+5 MB ile +87 MB arası** (aralık geniş; dünya
oranı ancak dünya koşusuyla bilinir). Ayrı dosya + tembel yükleme
**zaten uygulanmış** (`data/ufuk_bantlari.js`), yani 5 gün seçili
kullanıcı tek bayt fazla indirmiyor.

🔴 **AMA 21 Eylül'de olmayan bir kısıt bugün doğdu:** koşu 16'dan sonra
`data/devletler_harita.js` **85,33 MB**'a çıktı (65 MB'dan). GitHub'ın
tek dosya sınırı **100 MB** ve push bugün uyarı bastı. Bantlar AYRI
dosyaya gittiği için bu sınırı doğrudan zorlamıyorlar; ama deponun
büyümesi artık izlenmesi gereken bir sayıdır. Bunu bir sonraki tam
inşanın ön şartlarına yazıyorum.

---

## ⑦ SIRA — ne olursa üretilir

```
① EMRE: çöl kelepçesi kararı (a/b/c) + 15 gün bandı evet/hayır
② KOORDİNATÖR: MOTOR_UFUK_BANT + MOTOR_COL_UFUK_SAAT ile TAM KOŞU
   (~6,5-7 sa · bant eki tahminen %4-8)
③ py denetim/ARAC-B-GORUNUM-UFUK-0072.py  → TEKDÜZELİK SINAVI (0 ihlal şart)
④ data/ufuk_bantlari.js yayına iner; arayüzde 7 ve 10 gün AÇILIR
```

📌 Ve bu koşu, bekleyen öteki motor kalemleriyle **birleştirilmelidir**
(§9.1 ②: biriken yamalar tek seferde girer, tuz bir kez değişir):
`H-0039` üç Rusya rengi (`renkler.py`) ve `YUK-BOLME-0925` (K=24 yeniden
ölçülecek) aynı koşuyu bekliyor.

---

## ⑧ EMRE'NİN KARARI — 28 Eylül 2026

```
15 GÜN BANDI     ✗ EKLENMEYECEK
7 ve 10 GÜN      ✓ EKLENECEK            ⇒ MOTOR_UFUK_BANT="40,56,80"
ÇÖL KELEPÇESİ    ⏳ istişare — "ayar olarak eklenebilir belki"
                   soru: "kelepçeden kastın çöl tavanı mı?"
```

---

## ⑨ "KELEPÇE" = "ÇÖL TAVANI" MI? — hayır, ve karıştırmak pahalı

Motorda **üç ayrı** çöl mekanizması var; ikisi bugün kapalı, biri her koşuda
çalışıyor. Aynı cümlede anılırlarsa bir oturum yanlış düğmeyi çevirir.

| # | ad | ne ölçer | bugün | nerede |
|---|---|---|---|---|
| 1 | **ÇÖL TAVANI** | peteğin noktasından **km** uzaklığı | 🟢 **AÇIK, her koşuda** | `COL_TAVAN_KM = 300.0` (`:4099`) |
| 2 | **ÇÖL KELEPÇESİ** | o hücredeki **yürüyüş ufku (saat)** | 🔴 kapalı | `MOTOR_COL_UFUK_SAAT` (`:1844`) |
| 3 | **BOŞ TOPRAK BÖLÜŞÜMÜ** | iki tohum arasındaki **açıklık** | 🔴 kapalı | `MOTOR_BOS_TOPRAK` (`:1937`) |

**① Çöl tavanı** geometrik bir disktir: *"bir yerleşimin peteği, ÇÖL içinde
kalan kısmında, noktasından 300 km'den uzağa uzanamaz"* — enleme göre
ölçekli elips, çünkü derece ≠ kilometre. Yalnız ÇIKARIR, hiç eklemez
(`petek_son ⊆ petek_voronoi`), o yüzden Değişmez 1 ve 2'yi etkilemez.
Doğuran şikâyet: Timbuktu'nun peteği Sahra'yı **1.475 km** kesiyordu.

**② Kelepçe** bambaşka bir şey ölçer: o hücrede yürüyüşün kaç saatte
durduğunu. Yani tavan *"noktadan ne kadar uzağa"*, kelepçe *"kaç günlük
yürüyüşe"* diyor.

### 🔴 Ve ikisi ÜST ÜSTE BİNİYOR — hesabı yaptım, motor doğruladı

```
YURUYUS_SAAT = 40          (:1163)     NEHIR_KM_SAAT = 5.04      (:1451)
_YR_BUTCE = YURUYUS_SAAT × NEHIR_KM_SAAT                          (:1806)

 5 gün = 40 sa  →  201,6 km-eşdeğeri      ÇÖL TAVANI = 300 km
 7 gün = 56 sa  →  282,2 km-eşdeğeri      ⇒ 300, 7 ile 10 gün ARASINDA
10 gün = 80 sa  →  403,2 km-eşdeğeri
```

⇒ **Çöl tavanı, 10 günlük bandı çölde kendiliğinden kesiyor** (403 > 300);
5 ve 7 günde neredeyse hiç değmiyor (201 ve 282 < 300).

Ve bu benim çıkarımım değil — motorun kendi ölçümü aynısını söylüyor
(`:4268`, `B-GORUNUM-0072-BANT.md §5.4`):

```
bant ham kesimi bu aşamadan geçmediğinde 10 GÜNLÜK ufukta 66.686 km²
(%1,317) fazla çöl taşıyordu. 5 ve 7 GÜNDE fark %0,005.
```

📌 Yani sayının 10 günde 263 kat büyümesi, yukarıdaki aritmetiğin
bağımsız teyidi. **Bantlara tavan ZATEN uygulanıyor** (`Ⓑ bant tavanı`
aşaması) — yani 7/10 günü açtığımızda çöl tavanı işini yapmaya devam eder,
ayrıca bir şey yapmamız gerekmez.

### ⚠️ AMA TAVAN, KUM DENİZİNİ BOŞ TUTMAYA YETMEZ — ve bunu abartmıyorum

Bir an *"demek ki tavan zaten kelepçedir"* diye yazacaktım; hesap
çürüttü, o yüzden yazmıyorum:

```
Sahra kutusunda çöl        4.959.429 km²
Sahra'da yerleşim              ~120
300 km'lik disklerin alanı  120 × π × 300²  ≈  33.900.000 km²   (çölün 6,8 KATI)
```

⇒ 300 km diskler Sahra'yı **fazlasıyla** örtebilir. Tavan, Timbuktu'nun
1.475 km'lik iddiasını kesiyor ama *"kum denizi bölüşülmesin"* kararını
**sağlamıyor**. Ölçülen sonuç da bunu söylüyor: kelepçesiz 10 günde
sahipsiz kara 950.218 → **16.608 km²**.

⇒ **Kelepçe (②) ve/veya boş toprak bölüşümü (③) ayrı bir karardır.** Ve
③ kavramsal olarak "kum denizi"nin TAM karşılığıdır: bir noktadan uzaklığı
değil, **iki yerleşim arasındaki açıklığı** ölçer — Emre'nin cümlesi de
öyleydi (*"Atlantik'i iki ülke arasında bölüştürmüyoruz"*).

---

## ⑩ "AYAR OLARAK EKLENEBİLİR Mİ?" — evet, ve ucuz yolu var

Emre: *"kelepçe de olacaksa ayar olarak eklenebilir belki."*

**Ham yol (pahalı):** kelepçeli ve kelepçesiz bant kümelerinin İKİSİNİ de
üretmek. Bunlar farklı kontur kümeleridir, yani bant kaydı **ikiye katlanır**
— ölçülmüş +5…87 MB, +10…174 MB olur. `devletler_harita.js` bugün 85,33 MB
ve GitHub sınırı 100 MB iken bu yön yanlış.

**🔴 ÖNERİM — ÇÖL EKİ BANDI, ve zaten onaylanmış desenin aynısı:**

Kelepçenin etkisi **yalnız çöl maskesinde** doğar (Anadolu kontrol grubunda
fark tam **0 km²** — ölçüldü). O hâlde kelepçeli/kelepçesiz farkı bir
*duplikasyon* değil, **artış bandı** olarak yazılabilir:

```
bant 1   ≤5 gün                                 (taban, bugünkü harita)
bant 2   5-7 gün                                 } genel ufuk
bant 3   7-10 gün                                }
bant 4   ÇÖL EKİ = kelepçesiz − kelepçeli        ← yalnız çöl hücrelerinde
```

Arayüzde iki bağımsız düğme olur: **ufuk (5/7/10)** ve **çölü doldur
(kapalı/açık)**. Kapalıyken bant 4 hiç indirilmez (tembel yükleme zaten
kurulu). Ve bu, 16 Eylül'de onayladığın *"iç içe OLMAYAN artış bantları"*
kuralının birebir aynısı — yeni bir mekanizma değil, dördüncü bir seviye.

⚠️ **İki dürüst çekince:**
1. **Tekdüzelik sınavı bant 4 için YENİDEN koşmalı.** Bugünkü sınav
   (`ARAC-B-GORUNUM-UFUK-0072.py`) `kesim(40) ⊆ kesim(56) ⊆ kesim(80)`
   iç içeliğini doğruluyor. Çöl eki bu zincire dik bir eksende duruyor;
   iç içelik varsayılamaz, **ölçülmelidir**. Sınav 0 ihlal vermezse bant 4
   yazılmaz.
2. **Bu bir MOTOR DEĞİŞİKLİĞİDİR** (`_BANT_HAM`e dördüncü bir kova + yazım),
   yani §9.1'e göre tam inşa koşusuna girer ve tuzu değiştirir. Aynı koşuda
   girmesi gerekir; sonradan eklenmesi ikinci bir 6,5 saat demektir.

📌 **Karar üç şıklı ve ikisini birlikte seçebilirsin:**
```
(A) ŞİMDİ SADE KOŞ    7 ve 10 günü aç, çöl tavanı (300 km) işini yapar,
                      kelepçe KAPALI. Sahra 10 günde büyük ölçüde dolar.
                      ⇒ bugün koşulabilir, ek motor işi YOK.
(B) ÇÖL EKİ BANDI     yukarıdaki bant 4. Arayüzde ayar olur. Motor işi +
                      tekdüzelik sınavı gerekir ⇒ koşu 1-2 gün gecikir.
(C) KELEPÇE SABİT     çöl ufku 7 günde sabitlenir (ölçülmüş üçüncü yol:
                      kazancın %79,4'ü korunur, çöl genel ufkun 3 gün
                      gerisinde kalır). Ayar YOK, ek motor işi YOK.
                      ⇒ (A) kadar hızlı, Sahra dolmaz.
```
**Tavsiyem: (C) ile şimdi koş, (B)'yi bir sonraki tam inşaya yaz.** Gerekçe:
(C) senin iki isteğini de ölçülebilir ölçüde karşılıyor ve bugün koşulabilir;
(B) doğru nihaî yapı ama onu beklemek 7/10 günü bir koşu daha geciktirir.

# BANT + ÇÖL KELEPÇESİ ÖLÇÜMÜ — koşunun iki kapısı

Oturum: B-GORUNUM-0072 (Opus 5) · 21 Eylül 2026 · istek: 1.MURAT, M-4852
Emre'nin kararı: **üç bant — 5 / 7 / 10 gün = 40 / 56 / 80 saat**.
Öngörü (ölçümden ÖNCE): `denetim/B-GORUNUM-0072-BANT-ONGORU.md`
Alet: `denetim/ARAC-B-GORUNUM-UFUK-0072.py --bant` · ham: `…-UFUK.json`

> **Yöntem:** bant = aynı bedel alanının farklı kontur seviyesi ⇒
> `bant_b = PETEK_D(bütçe_b) − PETEK_D(bütçe_{b−1})`. Üç kutu koşusu
> (40/56/80) bu farkı doğrudan verir; **motora dokunmadan** ölçüldü, çünkü
> sayılar kabul edilmeyebilir ve ölçümden önce kod değiştirmek yanlış olurdu.
> Her bütçe **ayrı süreçte** koşar — ilk denemede üçü aynı süreçte koşuldu ve
> ikincisi `I/O operation on closed file` ile düştü (motor stdout'u kendi log
> çatalına sarıyor); yalıtım hız için değil **doğruluk** için.

---

## 1 · BANT BAŞINA SÜRE — **4 sn** (doğrudan ölçüm)

Önceki teslimde "bir kontur < ~5 sn" demiş ve bunun **doğrudan ölçüm
olmadığını** yazmıştım. 1.MURAT haklı olarak doğrudan ölçüm istedi.
Motorun kendi aşama sayaçlarından (Sahra kutusu, 80 saat, toplam 3dk 17sn):

| aşama | süre | ufka bağlı mı? |
|---|---|---|
| Kara-kısıtlı sahiplik: Dijkstra | 8 sn | ❌ hayır |
| **YÜRÜYÜŞ: bütçe bölgesi (eşyükselti kontur)** | **3 sn** | ✅ **bant başına** |
| Petekler üretiliyor (Voronoi) | 2 dk 26 sn | ❌ hayır |
| YÜRÜYÜŞ: petekler ızgaradan | 11 sn | ❌ hayır |
| **Kıyı kesimi + A1 tavanı (`_yr_kes`)** | **1 sn** | ✅ **bant başına** |

⇒ **Bant başına ek süre = 3 + 1 = 4 sn** (kutuda; koşunun **%2**'si).
İki ek bant = **8 sn**. Pahalı olan Voronoi ve Dijkstra ufuktan bağımsız.

🔴 **Öngörüm ÇÜRÜDÜ ve yanlış yöne çürüdü:** Ö-BANT-1'de "8–25 sn" demiş,
yani kendi eski üst sınırımı YUKARI revize etmiştim. Ölçüm eski sınırı
doğruladı (3 sn). Revizyon gereksizdi.

---

## 2 · BANT BAŞINA DOSYA BOYUTU — kutuya göre **%3,5 ↔ %64,3**

`donemler.js` ile **aynı iki kademeli havuz** şemasıyla kodlanmış boyut
(halka havuzu + parça havuzu + kayıt listesi), yoksa ölçülen şey bantların
değil biçimin farkı olurdu.

| | Anadolu (yoğun) | Sahra (tenha) |
|---|---|---|
| taban ≤5 gün | 354,0 KB · 425 kayıt · 18.894 köşe | 320,7 KB · 180 kayıt · 17.541 köşe |
| bant 5–7 gün | **12,4 KB** · 22 kayıt · 13.198 km² | **161,0 KB** · 88 kayıt · 731.926 km² |
| bant 7–10 gün | **0,0 KB** · 0 kayıt · 0 km² | **45,3 KB** · 37 kayıt · 200.737 km² |
| **iki bant / taban** | **%3,5** | **%64,3** |

🔴 **ÖNGÖRÜ TUTTU** (Ö-BANT-2: %30–80 demiştim, tenha kutuda %64,3).
🔴 **VE ASIL BULGU ASİMETRİ:** bant yoğun bölgede neredeyse bedava, tenha
bölgede pahalı. Anadolu'da 7–10 bandı **tamamen boş** (doygunluk ≤7 gün,
önceki ölçümle tutarlı).

### Dünya tahmini ve hükmü
Dünya oranı ancak dünya koşusuyla bilinir; iki kutu %3,5 ile %64,3 arasını
veriyor. Bugünkü A geometrisi `donemler.js` 61 MB + `devletler_harita.js`
75 MB ⇒ bantların eki kabaca **+5 MB ile +87 MB** arası.
⇒ 🔴 **BANTLAR `index.html`E KOŞULSUZ YÜKLENEMEZ.** Site bugün zaten
261 dosya / 157,6 MB ham indiriyor. **Ayrı dosya + tembel yükleme şart** —
bu bir tercih değil, ölçümün dayattığı şey. (Zaten doğru mimari: A açılışta
gelir, B anahtarı açılınca bantlar indirilir; geçiş yine de yeni koşu
gerektirmez.)

---

## 3 · ÇÖL KELEPÇESİ — 🔴 **EMRE'NİN İKİ İSTEĞİ GERÇEKTEN BİRBİRİNİ YİYOR**

Kelepçe = "çöl hücrelerinde ufuk 5 günde kalır". Ölçüm: çöl DIŞINDA ufuk
her hâlde 10 gün; çölün kendi ufku merdiven hâlinde denendi.
`kelepçeli_i = (PETEK_D₈₀ᵢ − ÇÖL) ∪ (PETEK_D_çöl_ufkuᵢ ∩ ÇÖL)`

### Sahra kutusu (ÇÖL 4.959.429 km², 12 poligon)

| çölün ufku | sahipsiz kara | kazanılan | kazancın payı |
|---|---|---|---|
| — (ufuk 5 gün, bugünkü taban) | 950.218 km² | — | — |
| **40 sa = 5 gün** (Eylül kararı) | **933.409 km²** | 16.809 km² | **%1,8** |
| **56 sa = 7 gün** | **208.844 km²** | 741.374 km² | **%79,4** |
| 80 sa = 10 gün (kelepçe YOK) | 16.608 km² | 933.610 km² | %100 |

🔴 **Eylül'ün kelepçesi ufkun kazancının %98,2'sini geri alıyor.** Ve bu
tesadüf değil, yapısal: ufkun ölçülen kazancı neredeyse tamamen tenha
bölgede doğuyor, tenha bölge de zaten çöl. Kelepçe, kazancın doğduğu yerde
ufku kapatıyor.
🔴 Öngörüm (Ö-BANT-3: 400.000–900.000 km²) **yönü doğru, büyüklüğü hafif
düşük** — ölçülen 933.409, üst sınırımın biraz üstünde.

### Anadolu kutusu — KONTROL GRUBU

| | değer |
|---|---|
| ÇÖL | 1 poligon · 1.175 km² |
| sahipsiz 40 sa | 13.232 km² |
| sahipsiz 80 sa (kelepçesiz) | 0 km² |
| sahipsiz 80 sa (**kelepçeli**) | **0 km²** |

✅ **Ö-BANT-4 TUTTU: fark tam sıfır.** Bu bir kontrol grubudur ve maskeyi
doğruluyor: kelepçe çölün olmadığı yerde hiçbir şey yapmıyor. Sıfır
çıkmasaydı ölçüm hatası arardım, çölün bedelini değil.

### ÜÇÜNCÜ YOL — ölçülmüş, uydurulmamış
Kelepçe ikili olmak zorunda değil. **Çölün ufku 7 gün** yapılırsa kazancın
**%79,4'ü** korunur ve çöl yine genel ufkun 3 gün gerisinde kalır —
yani "Sahra'da yerleşimler çölden fazla alan alır" çekincesi büsbütün
yok olmaz ama harita da boş kalmaz. Karar Emre'nin; sayı burada.

---

## 4 · KOŞUYA HAZIR MI?

**İki kapının ikisi de ölçüldü:**
1. ✅ **Süre kapısı GEÇTİ** — bant başına 4 sn, iki bant 8 sn, koşunun %2'si.
2. 🟡 **Boyut kapısı ŞARTLI GEÇTİ** — bantlar ayrı dosyaya alınır ve tembel
   yüklenirse. Koşulsuz yüklenirse GEÇMEZ (+5…+87 MB).
3. 🔴 **ÇÖL KELEPÇESİ KARARI KOŞUDAN ÖNCE VERİLMELİ** — çünkü kelepçe ufkun
   ürününü belirliyor, sonradan eklenecek bir süs değil. Üç seçenek ve
   sayıları §3'te. Kelepçe hâlâ **motorda YAZILI DEĞİL**; yazılması gereken
   tek şey `_YR_BUTCE`nin hücre başına değişebilmesi.

### Ölçülemeyenler (açıkça)
- Dünya ölçeğinde bant boyutu — yalnız iki kutu ölçüldü, aralık geniş.
- `km2` burada motorun `_ham_km2`'sinden yeniden kuruldu (kesit o işlevi
  dışarıda bırakıyor); mutlak değerlerde ~%0,6 sapma var (950.218 ↔ 944.361),
  oranlar etkilenmiyor.

---

## 5 · UYGULAMA (21 Eylül, M-4892 hükmünden sonra)

### 5.1 · Tekdüzelik — bant hesabının dayanağı, VARSAYILMADI ÖLÇÜLDÜ
`bant_b = kesim(b) − kesim(b−1)` ancak `kesim(40) ⊆ kesim(56) ⊆ kesim(80)`
ise "iç içe OLMAYAN artış bandı" anlamına gelir. Tutmasaydı bir toprak iki
banda birden yazılır ve arayüz onu iki kez çizerdi.
**Ölçüm: iki kutuda da 0 petek / 0 km² ihlal.** ✓

### 5.2 · Çöl kelepçesi PARAMETRE oldu — `MOTOR_COL_UFUK_SAAT`
`_YR_BUTCE` tek küresel sayıydı; artık hücre başına eşik (`_YR_ESIK`) var.
Kelepçe açıkken bedel alanı kendi eşiğine bölünüp kontur 1.0'dan geçiyor
("bedel > eşik" ile "bedel/eşik > 1" aynı sorudur).

🔴 **Varsayılan bugünkü davranış — ve bu temenni değil YAPISAL:** parametre
verilmezse normalleştirme bloğu **hiç çalışmaz**, kontur eskisi gibi skaler
`_YR_BUTCE` seviyesinden geçer. Bölme kayan noktada birebir aynı olmayacağı
için kapıyı tamamen atlamak, bit bit aynılığı *sormadan* garanti eder.

**SINAV (`denetim/ARAC-B-GORUNUM-KELEPCE-0072.py`), iki yönde:**

| yön | ölçülen | sonuç |
|---|---|---|
| ① aynılık: kelepçe kapalı ↔ kelepçe kodundan ÖNCEKİ sürüm | sha256 `1c8640677e92c6df…` ↔ `1c8640677e92c6df…` | ✅ **BİREBİR AYNI** |
| ② duyarlılık: kelepçe açık (çöl ufku 5 gün) | 3.921 peteğin **90'ı** değişti | ✅ **DEĞİŞTİ** |

②'siz ① bir şey ispatlamazdı: sınav farkı görebildiği için "AYNI" hükmü
anlamlı.

### 5.3 · Üç bant — `MOTOR_UFUK_BANT=40,56,80`, AYRI DOSYA
Kontur döngüsü `_yr_kontur(seviye)` işlevine alındı (kopyala-yapıştır ikinci
gövde yazmak yerine — iki kopya ayrışırsa bantlar tabandan farklı kural
uygular ve bunu hiçbir denetim sormaz). `_yr_kes(geo, i, bant=…)` artık bant
bütçesiyle de kesebiliyor. Çıktı: **`data/ufuk_bantlari.js`**, `index.html`
YÜKLEMEZ (Ⓑ anahtarı açılınca `fetch`).

**ÖLÇÜLEN EK MALİYET (Sahra kutusu):** iki ek kontur **0,2 sn**; bütçe
bölgesi aşaması 3 sn → 4 sn. Yani §1'de verdiğim "bant başına 4 sn" bile
YÜKSEK bir tahmindi — artımlı kontur ~0,1 sn.
**GERİLEME SINAVI:** `MOTOR_UFUK_BANT` açıkken taban `PETEK_D`
sha256 `1c8640677e92c6df…` — bantsız koşuyla **BİREBİR AYNI**. ✓

### 5.5 · (b) DEVLET BANDI MALİYETİ — **0,7–0,8 kat** (1'in ALTINDA)

1.MURAT'ın istediği tek sayı: bant geometrisini dönem dönem DEVLET
gövdesine birleştirmek, petek başına bırakmaya göre kaç kat pahalı?

Alet: `denetim/ARAC-B-GORUNUM-BANTSINAV-0072.py` · Sahra kutusu, 3 tarih.
Ölçülen: aynı tarihte (i) taban peteklerini devlet gövdesine birleştirme
süresi ↔ (ii) İKİ artış bandını devlet gövdesine birleştirme süresi.

| gün | taban | iki bant | kat |
|---|---|---|---|
| 1520-06-15 | 10 devlet · 0,12 sn | 16 devlet · 0,13 sn | 1,09 |
| 1683-06-15 | 8 devlet · 0,14 sn | 15 devlet · 0,10 sn | 0,66 |
| 1800-06-15 | 8 devlet · 0,14 sn | 15 devlet · 0,10 sn | 0,68 |
| **ortalama** | | | **0,81** |

(Sığ kesimli ilk koşuda 0,73 çıkmıştı; ikisi de 1'in altında, fark makine
gürültüsü.) ⇒ **İki bandın devlet gövdesine çıkarılması, TABAN gövde
geçişinden daha UCUZ.** Sebebi geometrik: bant parçaları ince ve az köşeli.
⚠️ Ölçülen şey `unary_union` maliyetidir; dönem makinesinin tamamı
(önbellek, halka havuzu, seyreltme) DEĞİL. Büyüklük sırası için yeterli,
tam koşu tahmini için değil.

### 5.4 · (c) AŞAMA FARKI — 🔴 ÖNCE YANLIŞ ÖLÇTÜM, DÜZELTİYORUM

Artış bantları kıyı kesiminden sonraki aşamalardan geçmiyor. Fark ne kadar?

🔴 **İLK ÖLÇÜMÜM SAKATTI ve sebebi ölçümün EVRENİYDİ:** kutu kesiti
`ÇÖL TAVANI`ndan ÖNCE duruyor, yani karşılaştırdığım "tam boru hattı" da
çöl tavanından geçmemişti. Sahra kutusunda en çok fark yaratması beklenen
aşama TAM DA ODUR. Kesimi derinleştirip (`--kesim col-sonrasi`) yeniden
ölçtüm:

| bütçe | kesim `col` (SAKAT) | kesim `col-sonrasi` (DOĞRU) |
|---|---|---|
| 40 sa (5 gün) | %0,005 | **%0,005** (1 petek, 108 km² fazla) |
| 56 sa (7 gün) | %0,004 | **%0,004** (1 petek, 108 km² fazla) |
| 80 sa (10 gün) | %0,031 | 🔴 **%1,317** — **11 petek, 66.686 km² FAZLA** |

⇒ **Hüküm: bantlar ÇÖL TAVANINDAN DA GEÇİRİLMELİ.** 5 ve 7 günde fark
ihmal edilebilir; 10 günde ham bant, boru hattının KESECEĞİ 66.686 km²
çölü taşıyor — ekranda yanlış boyanmış çöl demektir, yani Emre'nin
çekincesinin ta kendisi. Ve fark ufukla BÜYÜYOR (%0,005 → %0,004 → %1,317),
çünkü ufuk büyüdükçe ham kesim daha çok çöle uzanıyor.
📌 Ada kuralı + kara-kısıtlı devir farkı ise küçük kalıyor (3 petek,
805 km² eksik — her üç bütçede de aynı).

### 5.6 · 🔴 AÇIK KALAN — ölçülmeden yayına alınmamalı
1. ✅ **ÇÖZÜLDÜ (§5.5):** devlet bandının maliyeti ölçüldü — **0,8 kat**,
   yani taban gövde geçişinin ALTINDA. "Bant ucuzdur" hükmü artık yalnız
   kontur için değil, devlet bandı için de geçerli. ⇒ Veri şekli
   DEVLET BAŞINA olmalı ve maliyeti buna engel değil; arayüz kodu bu şekle
   göre yazılabilir.
2. ✅ **ÖLÇÜLDÜ (§5.4), ve hüküm ÇIKTI:** bantlar **çöl tavanından da
   geçirilmeli** — 10 günlük ufukta ham bant 66.686 km² (%1,317) fazla çöl
   taşıyor. 5 ve 7 günde fark ihmal edilebilir (%0,005).
3. ⚪ Epok onarımının yerel Dijkstra tavanı kelepçeye uymuyor (skaler
   kalıyor); kesim sonradan fazlalığı aldığı için çıktıya değil yalnız ara
   hesabın menziline bakıyor — kodda yazılı, ölçülmedi.

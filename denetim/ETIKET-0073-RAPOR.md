# ETIKET-0073 — çakışan şehir yazıları (H-0010) · 20 Eylül 2026

Emre'nin cümlesi: *"Riyad ve Dir'iye şehirlerinin yazıları üst üste biniyor. Birini sağa
yanaşık, birini sola yanaşık yapalım… şehirlerden biri noktanın soluna, diğeri noktanın
sağına yazılacak: `yazı ve nokta` / `nokta ve yazı`."*

---

## ① Bugünkü etiket yerleşimi nasıl kuruluyor — ölçüm

**Şehir etiketleri MapLibre symbol katmanı DEĞİL, DOM `maplibregl.Marker`ıdır.**
Ölçüm: `js/app.js` içinde `text-anchor` · `text-offset` · `text-allow-overlap` ·
`symbol-sort-key` · `text-variable-anchor` geçen satır sayısı **0**. Bütün depoda
`text-anchor` yalnız `js/antlasma_harita.js:196`da var, o da ayrı bir katman.

Şehir etiketi `js/app.js:2917` civarında kuruluyor:
`new maplibregl.Marker({ element: dis, anchor: "left", offset: [-5, 0] })` — tek yönlü,
`nokta ve yazı`. İç düzen `.sehir { display:flex; gap:4px }` (nokta · yöntem simgesi ·
ad · fetih rozeti).

Çakışma yönetimi ZATEN VARDI ama **tek çaresi ELEMEK**: `sehirGuncelle`nin ikinci geçişi
gerçek `getBoundingClientRect` kutularıyla çarpışanı DOM'dan siliyordu. Yani Emre'nin
gördüğü tabloda ikinci etiket ya eleniyor ya da hiç elemeye girmiyordu.

**Riyad ↔ Dir'iye gerçek mesafe: 10,35 km** (Riyad 24,713N/46,675E · Dir'iye 24,733N/46,575E).
Emre'nin görselindeki yakınlaştırma z8; orada bu mesafe ekranda ~50 px'e karşılık geliyor.

---

## ② Evren — bu bir çift değil bir SINIF

Ölçüm: `denetim/ETIKET-0073-OLC.py` → `denetim/ETIKET-0073-CIFTLER.json`
(evren: `girdi.py`nin okuduğu **3921** yerleşimin tamamı, haversine).

| eşik | çift | kaç ayrı yerleşim | öngörüm (ölçümden önce yazıldı) |
|---|---|---|---|
| ≤ 1 km | 0 | 0 | — |
| ≤ 3 km | **3** | 6 | 20–40 ✗ |
| ≤ 5 km | **16** | 31 | 40–70 ✗ |
| ≤10 km | **69** | 109 | 90–160 ✗ |
| ≤15 km | **153** | 213 | 200–300 ✗ |

**Öngörüm dört eşikte de yüksek çıktı, sebebi ölçüldü:** veri zaten bu kurala göre
temizlenmiş — `girdi.py:787` `YAKINLIK_ESIK_KM = 3.0` ve CLAUDE.md §11 "3 km içinde ikinci
nokta açma". Yani yakın çiftler kural dışı kalıntılar; sınıf beklediğimden küçük.
Riyad ↔ Dir'iye öngörüsü (8–12 km) tuttu: 10,35 km.

**Eşik neden 15 km:** çakışma km'nin değil PİKSELİN işidir ve piksel yakınlaştırmaya
bağlıdır. z8'de 15 km ≈ 70 px, yani tipik bir etiket genişliği (40–120 px) kadar — bu
eşiğin altındaki her çift z8 ve daha uzağında binme adayıdır. Daha geniş bir eşik "her
çift uzakta çakışır" tautolojisine gider, daha darı Emre'nin kendi vakasını (10,35 km)
dışarıda bırakırdı.

En yakın on çift: Anadolu Hisarı↔Rumeli Hisarı 1,54 · Budin↔Peşte 1,57 · Dakar↔Gore 2,96 ·
İstanbul↔Üsküdar 3,39 · Seşeke↔Katima Mulilo 3,89 · Payas↔Sincan 4,04 · Bacirge↔Sero 4,09 ·
Çanakkale↔Kilitbahir 4,18 · Ceylanpınar↔Qaţţīnah 4,28 · Cerablus↔Mercihamis 4,32.

---

## ③ 🔴 ASIL BULGU — Emre'nin gördüğü çakışan yazı İKİNCİ BİR ŞEHİR DEĞİLDİ

İlk sınav koşusunda ölçüm "çakışma 0" dedi ama ekran görüntüsünde Riyad'ın üstünde
italik bir yazı duruyordu. O yazı `.sehir` değil **`.bosluk-kutu`** — "devletsiz yerleşim"
halkasının ad etiketi (`js/app.js:2224`, `boslukKur`). Yani ekranda **"Dir'iye (Necid)"
İKİ KEZ** yazılıydı: biri şehir etiketi, biri halka etiketi, ve çakışan o ikincisiydi.

Ölçüm (`denetim/ETIKET-0073-BOSLUK-OLC.py` → `ETIKET-0073-BOSLUK.json`):
**226 `bos_alanlar` kaydından 92'si adlı halka; 92'sinin 92'si de aynı adlı bir yerleşimle
0,00 km'de örtüşüyor.** Mükerrerlik istisna değil, kuralın kendisi.

Sebebi kodun kendi notunda zaten yazılı: halka katmanının **zaman boyutu yok**, 1281–1923
boyunca her tarihte çiziliyor; `.sehir` katmanı ise artık üç statünün üçünü de (`d`/`v`/`s`)
çizdiği için Emre'nin 21 Ağustos'taki *"devletsiz şehirlerin isimlerini de yazalım"* isteği
bugün ORADAN karşılanıyor — halkadaki ad ikinci nüsha kalmış.

⇒ **"Ölçüm doğru, sorulan soru dar."** Ölçümüm yalnız `.sehir` evrenini tarıyordu ve o
evrende gerçekten temizdi. Sınav iki katmanı birlikte ölçecek şekilde düzeltildi.

---

## ④ Çare — neden deterministik kural, ölçüt neden BOYLAM

**MapLibre'nin kendi çözücüsü (`text-variable-anchor` + `text-radial-offset`) bu katmanda
kullanılamaz** — ölçülmüş sebep, tercih değil: etiketler symbol katmanında değil. Symbol
katmanına taşımak `.sehir`in altı ayrı CSS kuralını (d1/d2/d3 puntoları · `uzak`/`cok-uzak`
sınıfları · `baskent` `::after` yıldızı), emojileri, fetih rozetini ve tıklama davranışını
yeniden yazmak demek. Üstelik variable-anchor etiketi her yakınlaştırmada başka bir yöne
koyar; Emre sabit bir düzen istiyor.

**Ölçüt: çiftin BATIDAKİ üyesi sola yaslanır (boylam).** Gerekçe:
- Boylam her noktada tanımlı, pratikte eşitlik yok — karar her zaman verilebilir.
- İki etiketi EN ÇOK uzaklaştıran yön budur: batıdaki nokta zaten solda durur, adı da sola
  giderse aradaki boşluk açılır. Doğudakini sola almak binmeyi artırırdı.
- Elenen ölçütler: **kademe (`g`)** — yakın çiftlerin çoğu g=0/g=0, yani berabere, tie-break
  gerekirdi; **ad sırası** — geometriyle ilgisiz, ayrılmayı garanti etmez; **nüfus** — veride yok.

Uygulama `sehirGuncelle`nin ikinci geçişine eklendi: çakışan etiket **önce aynalanır, ancak
kurtulamazsa elenir** (eski davranış). Aynalama CSS'te tek kural:
`.sehir.sol { flex-direction: row-reverse; transform: translateX(-100%) translateX(10px); }`
— `+10px` süs değil, noktayı gerçek konumunda tutan telafi (ölçüldü: onsuz nokta ~9 px
batıya kayardı).

Halka adları için ayrı, daha muhafazakâr çare: **silme yok, susma var** —
`.bosluk-kutu.sade .bosluk-ad { display:none }`. Halka glifi, hover'daki ad ve tıklanınca
açılan balon aynen kalır; ad yalnız başka bir etiketin üstüne biniyorsa gizlenir. Yerleşim
etiketi o tarihte çizilmiyorsa halka adı GÖRÜNÜR kalır, yani bilgi kaybolmaz. Kararı veri
değil ÇAKIŞMA verir.

---

## ⑤ Sınav — headless Chrome + CDP, üç sahne × üç yakınlaştırma × iki kip

`denetim/ARAC-ETIKET-0073-SINAV.js` (emsal: `ARAC-OK-0071-SINAV.js`). A/B kıyası
`window.ETIKET_AYNALA` bayrağıyla: `false` yamadan önceki davranışı birebir geri getirir.
Ekran görüntüleri: `denetim/ETIKET-0073-<sahne>-z<N>.png`.

### Koşu sırasında bulunan ve onarılan İKİ KUSUR (ikisi de ölçümle bulundu, tahminle değil)

1. **Sayfa kilitlendi.** İlk sürüm her çakışmada DOM yazması ile DOM okumasını iç içe
   geçiriyordu (layout thrashing); headless sınavda sayfanın JS iş parçacığı yanıt veremez
   hâle geldi. Çare: eleme (`mk.remove`) döngü sonuna ertelendi, aynalama denemesine
   **ölçülmüş tavan** kondu (`AYNALA_TAVAN = 20`; deneme başına ~12 ms yeniden yerleşim).
   Süre: z6'da 2993 ms → 388 ms.
2. **Aynalama artık çakışma üretiyordu.** Zaten aynalanmış bir etiket ikinci bir çakışmada
   yeniden denenip başarısız olunca eski yerine dönüyor, ama kayıtlı kutusu aynalı kalıyordu
   — hem kaydı yalan oluyor hem ilk turda kurtardığının üstüne geri biniyordu. Gözlenen dört
   artık çakışma (Pelekanon↔İzmit, Pelekanon↔Akyazı, Bursa↔Dimbos, Ferecik↔Keşan) tam
   buradan geliyordu. Çare: `!o.aynali` — **karar bir kez verilir**, o turda değişmez.

### Sonuç (son koşu · evren: EKRANDA OKUNAN yazılar)

Çakışma ölçüsü, ad elemanlarının kendi kutularıyla ve yalnız pano içinde hesaplanıyor.
(Ara koşuda "28 çakışma" gibi sayılar çıkmıştı; hepsi pano DIŞINDA sıkışan işaretlerdi —
Acoma Pueblo ↔ Oraibi, ikisi de Arizona'da, sahne ise Riyad'daydı. Görülmeyen çakışma
kusur değildir.)

| sahne | z | A görünen şehir | B görünen şehir | B aynalı | çakışan yazı (A / B) |
|---|---|---|---|---|---|
| riyad-diriye | 6 | 33 | **36** | 5 | 0 / **0** |
| riyad-diriye | 8 | 2 | **3** | 1 | 0 / **0** |
| riyad-diriye | 10 | 2 | **3** | 1 | 0 / **0** |
| budin-peste | 6 | 86 | **89** | 11 | 0 / **0** |
| budin-peste | 8 · 10 | 14 | 14 | 0 | 0 / **0** |
| hisarlar | 6 | 128 | **130** | 8 | 0 / **0** |
| hisarlar | 8 · 10 | 34 | **42** | 12 | 0 / **0** |

Riyad/Dir'iye sahnesi, z6 · z8 · z10 — **üçünde de Emre'nin tarif ettiği düzen**:

    Dir'iye (Necid) ●          ● Riyad
    ← yazı ve nokta            nokta ve yazı →

- Yamasız kipte (A) `.sehir` "Dir'iye (Necid)" etiketi hiç görünmüyordu — **eleniyordu**.
  Yamalı kipte (B) görünüyor, sola yaslı, Riyad ile arasında ~26 px boşluk var.
- İtalik mükerrer halka adları (Dir'iye ve Riyad) `sade` oldu, ekrandan kalktı.
- Hisarlar z8/z10: görünen şehir etiketi 34 → 42 (**+8**), 12'si aynalı; ekran
  görüntüsünde Boğaziçi (Rumeli yakası) ve Samandıra sola yaslı, hepsi okunur.
- `sehirGuncelle` süresi: A 48–158 ms, B 32–412 ms (en kötü hâl z6/hisarlar). Bu fonksiyon
  yamadan önce de 318–716 ms ölçülmüştü, yani yama onu bütçenin dışına taşımıyor.

---

## ⑥ Sınır şartı (Emre'nin 0071 kuralı) — oklar · işgal taraması · savaş simgeleri

**Kendiliğinden sağlanıyor ve bu ölçüldü, varsayılmadı:** savaş işaretlerinin eleme geçişi
(`js/app.js`, `savasGuncelle`) şehir kutularını `sehirler[si].ic.getBoundingClientRect()`
ile okur ve `getBoundingClientRect` **transform'u hesaba katar** — yani aynalanmış bir şehir
etiketi savaş işaretine olduğu YENİ yerinde görünür; çakışırsa savaş işareti eskisi gibi
`sv-sade`ye iner. Aynalama için ayrı bir model tutulmuyor (§35: aynı sayıyı iki yerde tutma).
Harekât okları ve işgal taraması MapLibre canvas katmanlarıdır, DOM etiketleri zaten her
zaman üstlerinde çizilir — aynalama bu ilişkiyi değiştirmez. Hisarlar z8 ekran görüntüsünde
Rumeli Hisarı'nın savaş simgesi ile etiketi ayrı duruyor.

---

## ⑦ Ölçülen ama ÇÖZÜLMEYEN — açık kalemler

1. **Fetih rozetine tarih değil PARAGRAF yazılmış.** Budin'in etiket kutusu **467 px**
   (tipik etiket 40–120 px). Ekran görüntüsünde sebebi görünüyor: `.s-fetih` içinde
   *"→ Ağustos-Eylül 1541 (26 Ağustos'ta ordu Budin önüne vardı, 2 Eylül'de padişah şehre
   gi…"* — `white-space: nowrap` ile tek satıra yayılıyor. **Budin ↔ Peşte çiftinin
   ayrılamamasının sebebi budur**, aynalama değil: 467 px'lik bir etiket 1,57 km ötedeki
   komşusunu her yakınlaştırmada örter. Veri kalemi, bende değil.
2. **Aynalamanın geometrik sınırı.** Noktalar arası ekran mesafesi ~20 px'in altına düşen
   çiftler aynalamayla ayrılamaz (iki nokta + iki boşluk zaten o kadar yer kaplar); onlar
   eskisi gibi elenmeye devam eder. Anadolu Hisarı ↔ Rumeli Hisarı (1,54 km) z8'de bu
   sınıfta — z10'da bile Budin örneğindeki rozet yüzünden ayrılamadı.
3. **Uzak yakınlaştırmada (z < 5,2) aynalama kapalı.** Orada onlarca etiket birbirine girer
   (bu dosyanın kendi eski ölçümü: z6'da 101 DOM → 21 görünür, 80 elendi); 60 px sola
   kaydırmak o çakışmaların hemen hiçbirini ayırmaz, kalabalığın çaresi elemedir. Emre
   uzakta da ayırma isterse ayrı bir karar gerekir.
4. **Halka katmanının zaman boyutu yok** (kodun kendi notu bunu zaten "anakronizm" diye
   işaretlemiş). `sade` çaresi mükerrer ADI susturur ama halka glifi 1281'de de çizilmeye
   devam eder. Gerçek çözüm halka kayıtlarına pencere vermektir — veri kalemi.

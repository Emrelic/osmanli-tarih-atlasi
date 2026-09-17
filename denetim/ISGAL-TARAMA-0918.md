# ISGAL-TARAMA — ölçüm (18 Eylül 2026)

Görev: DALGA-0068.md B tablosu, ISGAL-TARAMA satırı. H-0001 (genel kural) + H-0023 · H-0017 ·
H-0015 · H-0016 görsel şikâyetleri. `js/app.js` BAGLAMA'da olduğu için bu tur yalnız ÖLÇÜM —
hiçbir kod dosyasına dokunulmadı. Tahtaya soruldu (M-4464), devir bekleniyor.

## Sonuç özeti — DÖRT GÖRÜNÜM, ÜÇ AYRI KÖK SEBEP

| Madde | Kök sebep | Dosya | Sınıf |
|---|---|---|---|
| H-0001 (genel kural) | `isgalDesenleriKur()`'daki şerit oranı TERS | `js/app.js` | KOD |
| H-0023 (Mısır) | ISGALLER'de aynı pencere için İKİ mükerrer kayıt | `data/devirler.js` | VERİ |
| H-0017 (Zend→Kaçar) | `maddeFarkiGoster`/suzgec.js kümeleme kuralı ülke-çapını kırpıyor | `js/app.js` + `js/suzgec.js` | KOD |
| H-0015 (Fransa Cumhuriyeti) | AYNI kök sebep, H-0017 ile birebir | `js/app.js` + `js/suzgec.js` | KOD |
| H-0016 (Lehistan 2. paylaşım) | Muhtemelen AYNI kök sebep (aşağıda "ölçülemedi" notu) | `js/app.js` + `js/suzgec.js` | KOD (varsayım) |

## ① H-0001 — şerit oranı TERS (`isgalDesenleriKur`, `js/app.js:3613-3636`)

```js
var isgalci = ((x - y + K) % K) < 3;   // K=8 → işgalci 3/8 = %37,5, sahip 5/8 = %62,5
```
Kod YORUMU bunu KASITLI diyor ("işgalci şeridi 8'de 3 — daha ince, çünkü işgal hukuken
geçici; düz mülkiyet gibi ağır okunmamalı") ama bu, Emre'nin DALGA-0068 H-0001 kararının
TAM TERSİ: *"işgal eden devletin rengi baskın olacak, işgal edilen devletin rengi yalnız
ince çizgilerle taranacak."* Lejant metni de (satır 3668) aynı oranı miras alıyor:
`linear-gradient(-45deg,#8e0b22 0 62%,renk 62% 100%)` — sahip rengi %62 baskın.

**Çare:** eşitsizliği ters çevirmek (`< 3` → `< 5`, ya da isgalci/sahip değişkenlerini
takas etmek) + lejant gradyanındaki yüzdeleri (satır 3668-3669) buna göre güncellemek.
Tek satırlık kod değişikliği ama TÜM `ISGALLER` kayıtlarını (48 kayıt) etkiler — görsel
regresyon riski yok, çünkü zaten "yanlış" olan davranış düzeliyor.

## ② H-0023 — Mısır işgalinde mükerrer kayıt (`data/devirler.js`, `window.ISGALLER`)

`ISGALLER` dizisinde AYNI pencere için İKİ ayrı kayıt var:
```
[6] id:"fransa-cumhuriyet"  renk:#00297c (lacivert)  1798-07-01 → 1801-10-09
[7] id:"fransa"             renk:#c0d028 (sarı-yeşil) 1798-07-01 → 1801-10-09
```
İkisi de `isgal-<id>` deseni ürettiği için (satır 3616: `"isgal-" + ig.id`) İKİ AYRI
desen resmi oluşuyor ve haritada aynı bölgede iki farklı tarama biçimi görünüyor —
kullanıcının şikâyeti tam bunu tarif ediyor. Geometri (`parca`) uzunlukları da farklı
(5 vs 2) — muhtemelen ikisi de Mısır'ın FARKLI parçalarını kapsıyor ama AYNI olayı
(Napolyon işgali) iki farklı kimlikle (`fransa-cumhuriyet` vs `fransa`) etiketlemiş.

**Çare:** tek kimliğe indirmek — künye `devletler.js`de bu dönem için hangi id doğruysa
(1798'de Fransa hâlâ resmen "Fransız Cumhuriyeti" olduğuna göre muhtemelen
`fransa-cumhuriyet` doğru, `fransa` id'li kayıt YANLIŞ/eski) o kalır, geometriler
BİRLEŞTİRİLİR (`parca` dizileri concat), öteki kayıt silinir. Bu veri düzeltmesi
`arac/uret_devirler.py`nin ürettiği `data/devirler.js`'e dokunuyor — MOTOR-YURUYUS'un
koşu 13 kilidi altında mı kontrol edilmeli (KOŞU 13 SÜRÜYOR, DALGA-0068 A tablosu notu).
SEFER-1768/SEFER-1787 oturumları da Napolyon seferini işliyor olabilir — çakışma riski
tahtadan sorulacak.

## ③ H-0017 + H-0015 (+ muhtemelen H-0016) — AYNI kök: `maddeFarkiGoster` kümeleme kuralı

Bu üç şikâyetin görünüşte üç ayrı veri kusuru gibi durması YANILTICI: veri katmanı
ÖLÇÜLDÜ ve ÜÇÜNDE DE TEMİZ ÇIKTI.

- **İran (Zend→Kaçar):** `data/yerlesimler.js`'te İran'ın TAMAMI (Tebriz, İsfahan, Şiraz,
  Kazvin, Hemedan, Kum, Meşhed, Zencan, Kirman, Yezd, Bakü, Şamahı, Derbend, Gence, Reşt…
  — 25+ kayıt tarandı) `t:"1794-01-01",d:"zend"` → `f:"1794-01-01",d:"kacar"` ile TEK GÜNDE,
  TUTARLI şekilde geçiş yapıyor. Sahiplik verisi bozuk DEĞİL.
- **Fransa (Cumhuriyet ilanı):** Paris, Lyon, Marsilya, Bordo, Bastia, Ayacyo, Rennes,
  Nantes, Brest, Quimper, Vannes, Saint-Malo, Rouen (13+ kayıt, ülkenin dört bir yanı)
  hepsi `t:"1792-09-22",d:"fransa"` → `f:"1792-09-22",d:"fransa-cumhuriyet"` ile TEK GÜNDE
  geçiyor. Sahiplik verisi bozuk DEĞİL.
- **Lehistan (2. paylaşım, 1793-01-23):** Rus payı (Minsk, Vinnitsa, Jitomir, Berdiçev…)
  VE Prusya payı (Gdansk, Toruń) HER İKİSİ DE `t:"1793-01-23"` ile veride MEVCUT.
  Sahiplik verisi bu üçte de bozuk değil — 🟡 bu satır ÖLÇÜLEMEDİ diye işaretli aşağıda,
  çünkü kümeleme kodunun kendisi (app.js kilitli) henüz okunamadı; yalnız veri deseni
  H-0015/H-0017 ile BİREBİR aynı olduğu için aynı sınıfa aday.

Üçünde de veri "bütün ülke aynı gün değişiyor" diyor ama ekranda yalnız BİR KÜÇÜK KÜME
(Paris çevresi 5-6 bölge, İran'da 2 leke) yanıyor. Bunun sebebi veri değil, **hangi
petek'in hangi kronoloji maddesine ait sayılacağını seçen kod**:

`js/app.js:8436-8462` (`maddeFarkiGoster`) yorumu kendi kuralını AYNEN şöyle tarif
ediyor (satır 8443-8445):
> "madde GÜNÜNDE (±0) sahibi değişen yerleşimler ∩ [yer_id · yer · başlıkta ad ·
>  **aynı el değiştirmeyle ≤150 km komşu**]"

Bu kural, AYNI GÜN farklı yerlerde olan BAĞIMSIZ olayları birbirinden ayırmak için
var (örnek yorumdaki gerekçe: "1521-01-01'de harita 10 yerleşimi değiştiriyor, 3 madde
var … kullanıcı hangisinin hangisi olduğunu ayırt edemiyordu"). Ama bir kronoloji
maddesi GERÇEKTEN ülke çapında bir olayı (hanedan değişimi, cumhuriyet ilanı, toprak
paylaşımı) anlatıyorsa, "≤150 km komşu" ölçütü haritanın öbür ucundaki (Lyon,
Marsilya, Tebriz, Şiraz, Gdansk…) DOĞRU değişimleri kardeş grubun DIŞINDA bırakıyor —
yalnız maddenin `yer`/`yer_id`sine coğrafî olarak yakın kalan bir avuç petek kalıyor.
Kullanıcının gördüğü "5-6 bölge" / "iki leke" tam olarak bu kırpılmış kümedir.

📌 Bu proje `D216`/`D206` ailesinin bir üyesi olabilir: **bir ölçüt (150 km), tek bir
sınıf olayı (yerel çarpışma) ayırt etmek için doğruyken, başka bir sınıfı (ülke çapında
siyasî olay) yanlış kırpabilir.** Kesin teşhis için `js/suzgec.js`'teki
`SG.maddeDegisimleri` fonksiyonunun TAM KODU okunmalı — bu dosya BAGLAMA'nın
kilidinde DEĞİL (yalnız `js/app.js` + `css/style.css` kilitli göründü, DALGA-0068
A tablosu), ama app.js'in doğrudan çağırdığı bir fonksiyon olduğu için app.js
devredilmeden bağımsız düzeltmek çakışma riski taşıyor — bu yüzden BEKLETİLDİ.

**Aday çare (kod OKUNMADAN kesinleştirilemez):** kümeleme ölçütüne bir üçüncü şart
eklemek — madde ("kurulus"/"antlasma"/"siyaset"/"bolunme" gibi devlet-düzeyi bir `tur`
taşıyorsa VE değişim `once==d1, sonra==d2` her petek için AYNI ikiliyse) o gün AYNI
`(once,sonra)` çiftini taşıyan **BÜTÜN** petek'leri (150 km sınırı olmadan) kardeş
gruba alması; yalnız FARKLI (once,sonra) çiftleri ayrı maddelere düşsün. Bu, "aynı
günde 3 farklı olay" senaryosunu (farklı çiftler) hâlâ ayırt eder ama "tek olay, ülke
çapında aynı geçiş" senaryosunda (tek çift, çok petek) kırpma yapmaz.

## Yapılmayanlar / ölçülemedi

- H-0016'nın kod tarafı KESİNLEŞTİRİLMEDİ — yalnız veri temiz olduğu ölçüldü, kümeleme
  hipotezi H-0015/H-0017'den ANALOJİ; `suzgec.js` kodu okunmadan kesin denemez.
- `js/suzgec.js`nin tam içeriği bu turda okunmadı (app.js'e bağımlı akış nedeniyle
  ölçüm app.js'in KENDİ yorum satırlarından yapıldı, kaynağın kendisinden değil) —
  D144 gereği bu bir varsayımdır, kanıt değil; BAGLAMA devrettikten hemen sonra
  doğrulanacak ilk iş budur.
- `data/devirler.js`nin `arac/uret_devirler.py` tarafından mı üretildiği yoksa elle mi
  düzenlendiği (§5 "ÜRETİLMİŞ — ELLE DÜZENLEME" listesinde adı geçmiyor) DOĞRULANMADI —
  ② için düzeltmeyi hangi dosyaya (üretici script mi, çıktı mı) yazacağım bu yüzden
  netleşmedi; muhtemelen `data/devirler.js` motor çıktısı DEĞİL, `js/app.js`in içine
  gömülü `window.DEVIRLER`/`window.ISGALLER` — ayrı bir kaynak dosyası (KOŞU 13'ün
  girdi kilidinde DEĞİL), bu yüzden devir beklemeden düzeltilebilir olabilir; ama
  MOTOR-YURUYUS/SEFER-1768 ile çakışma ihtimali tahtadan sorulacak.

## İstenen

1. BAGLAMA'nın `js/app.js`i ne zaman devredeceği (M-4464, cevap bekleniyor).
2. `data/devirler.js`ye SEFER-1768/MOTOR-YURUYUS'tan biri aynı anda yazıyor mu — sorulacak.
3. Devir gelince: ① şerit oranını çevir ② Mısır mükerrer kaydını birleştir ③ suzgec.js'in
   gerçek kodunu okuyup kümeleme kuralını (once,sonra) eşleşmesine genişlet, üçünü
   `py arac/denetle.py` + tarayıcıda görsel doğrulamayla teslim et.

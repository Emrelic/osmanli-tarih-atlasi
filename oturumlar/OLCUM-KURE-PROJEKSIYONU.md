# ÖLÇÜM — küre projeksiyonu

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · **Uygulama YAPILMADI, karar kullanıcının**

> Kullanıcının gözlemi: *"ekvatordan uzaklaştıkça ülkelerin gösterimi çarpıcı
> şekilde büyüyor."* Doğrulandı — `js/app.js`'te hiçbir `projection` ayarı yok,
> yani MapLibre varsayılanı **Web Mercator**.

---

## 1. 🔴 DESTEK — belirleyici sonuç: **4.7.1'DE YOK**

```
kullandığımız  : maplibre-gl 4.7.1   (index.html:7 ve :126, unpkg CDN)
yayın tarihi   : 2024-09-23
```

Paketi indirip içine baktım (803 KB):

```
"globe" geçişi        : 1 kez
"projection" geçişi   : 2 kez
tek geçiş şurada      : {type:{type:"enum",default:"mercator",
                         values:{mercator:{},globe:{}}}}
```

⇒ Bu **yalnızca stil şeması (style-spec) enum'u** — yani dosya "globe diye bir
değer var" diyor, ama **çizen kod yok.** Gerçek bir küre uygulamasında yüzlerce
geçiş olurdu (küre dönüşümü, matrisler, gölgelendiriciler). **Tek geçiş =
şemada tanımlı, motorda uygulanmamış.**

```
5.0.0 yayın : 2024-12-31      ← küre bu hatta geldi
en son kararlı : 6.1.0 (2026-07-30)
```

> **Sonuç: küre, MapLibre'yi 4.7.1'den en az 5.x'e yükseltmeden mümkün değil.**
> Yükseltme ayrı ve daha büyük bir karardır (kırıcı değişiklikler, bütün
> arayüzün yeniden sınanması). Bu ölçüm onu kapsamıyor.

📌 Ve kullanıcı üçüncü bir yol beklemesin: **eşit alanlı klasik projeksiyonlar
(Mollweide, Eckert, Winkel) MapLibre'de yok.** Seçenek Mercator ile küre
arasında.

---

## 2. BOZULMA — sayılarımız değil, RESİM

Mercator'ün alan şişmesi `1/cos²φ`:

| enlem | şişme | bizdeki karşılığı |
|---|---|---|
| 1,5°K | 1,0× | pencerenin güney kenarı |
| 30°K | 1,3× | Mısır |
| 41°K | 1,8× | İstanbul |
| 50°K | 2,4× | Budin |
| 59°K | 3,8× | pencerenin kuzey kenarı |

⇒ **Rumeli, Mısır'a kıyasla gerçekte olduğundan ~1,4 kat geniş görünüyor.**
Bir tarih atlasında bu doğrudan *"toprak kazandı/kaybetti"* hissini bozuyor.

✅ **Sayılar etkilenmiyor:** motor km²'yi enlem düzeltmesiyle hesaplıyor
(`app.js:189` derece² notu, `sehirOncelikKur` km² dönüşümü). Lejanttaki
yüzölçümü doğru; bozulan yalnız gösterim.

---

## 3. 🔴 NE BOZULUR — en kritik başlık, ve BÜYÜK KISMI ÖLÇÜLEMEDİ

**Bütün etiketlerimiz DOM marker** — `maplibregl.Marker`, 7 ayrı yerde:

| satır | ne |
|---|---|
| 339 | devlet adları |
| 398 | bölge adları |
| 910 | savaş işaretleri |
| 997 | şehir işaretleri |
| 1300 | şehzade payları |
| 1555 | sefer okları (döndürmeli) |
| 1561 | sefer ad etiketleri |

Ve iki yerde ekran koordinatı hesaplıyoruz (`harita.project()`, satır 309 ve
379), bir yerde de gerçek DOM kutusu okuyoruz (`getBoundingClientRect`).

⚠️ **ÖLÇÜLEMEDİ** (bu oturumun tarayıcı paneli gizli; `visibilityState:
"hidden"` iken `requestAnimationFrame` hiç ateşlemiyor, MapLibre stili
yüklemiyor — sayfa bozuk hâliyle birebir aynı görünüyor):

1. Kürenin **arka yüzündeki** markerlar gizleniyor mu, yoksa öne mi taşıyor?
   🔴 Gizlenmiyorsa **Atlas'ın öbür yüzündeki etiketler üzerimize düşer** ve
   bugün kapattığımız çakışma kusurundan beteri olur.
2. `harita.project()` küre üzerinde arka yüz için ne döndürüyor?
3. `getBoundingClientRect` ile kurduğumuz çakışma elemesi hâlâ doğru mu?
4. Bugün ölçülen kademelenme (sabit kutuda 2→3→5→5) korunuyor mu?
5. Esri raster kiremitleri küreye sarılıyor mu?
6. 61 sefer oku (314 ara nokta) düz çizgi; kürede kırılıyor mu, büyük çember mi
   gerekiyor?

**Tahmin yazmıyorum.** Altısı da tarayıcı gerektiriyor ve §5'teki sınavla
ölçülür.

---

## 4. MALİYET

| kalem | ölçü |
|---|---|
| projeksiyon ayarının kendisi | **1 satır** (`projection: {type:"globe"}`) |
| MapLibre yükseltmesi | 4.7.1 → 5.x/6.x, **iki satır** (`index.html:7`, `:126`) |
| ⚠️ ama yükseltmenin sınanması | **bütün arayüz** — 7 marker ailesi, 30+ katman |
| geri dönüş | ayar tek satır, **yükseltme değil** |

🔴 **Karar "bir satır" değil.** Bir satır olan yalnız projeksiyon; onu mümkün
kılan yükseltme, bugüne kadar üstüne kurduğumuz her şeyin yeniden sınanması
demek — ve bu oturumun sınama kabiliyeti yok.

---

## 5. SINAVLIK — kullanıcının kendi tarayıcısında, tek paragraf

> Şu adresi aç: `https://maplibre.org/maplibre-gl-js/docs/examples/globe/`
> (MapLibre'nin kendi küre örneği, 5.x ile çalışıyor). Küreyi döndür ve **şuna
> bak:** kürenin arka yüzüne gelen şehir adları/işaretler **kayboluyor mu**,
> yoksa öne mi vuruyor? Bir de kuzey ülkelerinin (İskandinavya, Rusya)
> boyutunu Mercator haritasıyla kıyasla — küçülmeleri gerekiyor.

📌 Bu sınav bizim sayfamızda **koşturulamaz**, çünkü küre 4.7.1'de yok. Amacı
kararın **görsel karşılığını** kullanıcıya göstermek: kazanç (doğru oran) ve
risk (arka yüz etiketleri) yan yana.

---

## 6. ÖZET — üç cümle

1. **Kazanç gerçek:** Mercator, Rumeli'yi Mısır'a göre ~1,4 kat şişiriyor ve bu
   bir tarih atlasında toprak algısını bozuyor.
2. **Bedel bir satır değil:** küre 4.7.1'de yok; MapLibre'yi en az 5.x'e
   yükseltmek ve 7 marker ailesini yeniden sınamak gerekiyor.
3. **En büyük bilinmeyen ölçülemedi:** kürenin arka yüzündeki DOM markerların
   ne yaptığı. Cevap "öne vuruyor" ise iş tek satırlık bir ayar olmaktan çıkıp
   etiket katmanının yeniden yazılmasına döner.

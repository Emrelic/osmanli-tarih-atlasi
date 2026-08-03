# ARAYÜZ 4 — HARİTAYI OLAYA GÖTÜR (uçuş kipi)

> Emre'nin isteği, 4 Ağustos 2026. Koordinatör ölçtü ve şartnameye çevirdi.
> ⚠️ Bu dosya **şartnamedir, kod değildir.** ARAYÜZ 2 yazacak.

---

## ① İSTENEN — Emre'nin kendi tarifiyle

Kronoloji başlığında bir **onay kutusu**: *"haritayı kronolojik olaya götür"*.
Kronolojide sıradaki olaya geçildiğinde harita **kendiliğinden** o olayın
geçtiği yeri ortalar.

**İKİ KİP:**

```
KİP A — ANİ ("tak diye")
   animasyon YOK. Belgrad ortalanır, sonra Tebriz'e TAK diye geçilir.

KİP B — UÇUŞ ("havalanıp inmek")
   önce ZOOM OUT (havalanma)
   iki olayın ORTA NOKTASINA doğru x-y ekseninde kayma
   tepe noktasında en yüksek irtifa
   sonra ZOOM IN (iniş) ve olay mahallini ortalama
   ⇒ Emre'nin tarifi: EĞİK ATIŞ problemi. Tepe yüksekliği ayarlanır,
     tepe iki olayın orta noktasına denk gelir.
```

## ② ÜÇ AYAR — ayarlar sekmesine

```
1. İRTİFA     ne kadar havalanılacak (tepe noktasının yüksekliği)
2. YAKINLIK   olay mahalline ne kadar inilecek (nihaî zoom)
3. HIZ        yavaş mı hızlı mı gidecek
```
📌 Onay kutusu ve kip seçimi **kronoloji başlığında** (tepede) durur;
   üç ayar **ayarlar sekmesinde**. Emre böyle istedi.

---

## 🟢 ③ İYİ HABER — MapLibre BUNU ZATEN YAPIYOR

`map.flyTo()` tam olarak bu eğik atışı uygular ve **üç parametresi Emre'nin
üç ayarına birebir oturuyor**:

```js
map.flyTo({
  center: [lon, lat],
  zoom:   YAKINLIK,   // ayar 2 — olay mahalline ne kadar inilecek
  curve:  IRTIFA,     // ayar 1 — yayın tepe yüksekliği (varsayılan 1.42)
  speed:  HIZ         // ayar 3 — 1.2 varsayılan; küçük = yavaş
});
```

⚠️ **Elle eğik atış hesabı YAZMA.** `flyTo`nun eğrisi (van Wijk & Nuij
"smooth and efficient zooming and panning") tam olarak Emre'nin tarif ettiği
şeydir: iki nokta arasındaki mesafeye göre otomatik olarak yükselir, orta
noktada tepe yapar, iner. Kendi parabolümüzü yazmak hem daha kötü hem
bakımı pahalı olur.

**KİP A** için: `map.jumpTo({center, zoom})` — animasyonsuz, tak diye.

📌 `curve` ve `speed`in gerçek aralığını ÖLÇ ve ayar sürgüsünün uçlarını
   ona göre koy. Tahmin etme; iki üç değerle dene ve gözle bak.

---

## 🔴 ④ ASIL SORUN BURADA — OLAYLARIN KOORDİNATI YOK

**Ölçüldü (4 Ağustos):**
```
1008 maddenin 1008'inde  yer: alanı VAR   (metin)
1008 maddenin      0'ında  lat/lon VAR
```
⇒ Harita nereye uçacağını **bilmiyor.** Özelliğin tek gerçek maliyeti bu.

### `yer:` değerleri yerleşim adlarıyla ne kadar tutuyor — ÖLÇÜLDÜ
```
1045 `yer:` değeri
  TAM eşleşme         348   %33,3    "Bursa" · "İznik"
  İLK PARÇA eşleşme   333   %31,9    "Söğüt / Bilecik" → Söğüt
  EŞLEŞMEYEN          364   %34,8
```
Eşleşmeyenlerin deseni belli — **savaş meydanları ve "X yakını"**:
```
Kosova Ovası · Çubuk Ovası, Ankara · Çamurlu, Sofya yakını ·
Otlukbeli, Erzincan yakını · Mercidabık, Halep'in kuzeyi ·
Ridaniye, Kahire önü · Çaldıran Ovası, Van'ın kuzeydoğusu
```
📌 Bunların **hepsinin yanında bir yerleşim var** ("Halep'in kuzeyi" → Halep).
   Üçüncü bir geçiş (son parça / "X yakını" → X) oranı %85'e çıkarabilir.

### 🔴 AMA BULANIK EŞLEŞME YAPILMAYACAK — bugünün en pahalı dersi
Bugün **beş kez** ad eşleşmesi yanlış sonuç verdi:
```
kisiBul()      "Şeyh Ahmed Han" → "I. Ahmed"          (300 yıl fark)
K1 sayımı      "IV. Murad" → "I. Murad'ın şehadeti"   ("V." dizesi "IV." içinde)
MOTOR 3        "Cebelitarık" bulunamadı               (gerçek ad parantezli)
Kösem          1623 maddesi var ama OĞLUNUN cülûsu
III. Ahmed     ölüm sanılan madde HAL' maddesiydi
```
⇒ **ÇÖZÜM `vefat_id:` DESENİNİN AYNISI** — ARAYÜZ 2'nin kendi kararı:

```js
{ t:"1521-08-29", yer:"Belgrad", yer_id:"Belgrad", … }
{ t:"1526-08-29", yer:"Mohaç Ovası", yer_id:"Mohaç", … }
{ t:"1514-08-23", yer:"Çaldıran Ovası", yer_kon:[39.05, 44.30], … }
```
```
yer_id:   bir YERLEŞİM ADI — birebir eşleşir, bulanık arama YOK
yer_kon:  [lat, lon] — yerleşimi olmayan savaş meydanları için
```
⚠️ İkisi de YOKSA: kart **uçmaz**, olay yine listede görünür ve
   *"bu olayın haritada yeri işaretlenmemiş"* der. **Sessizce atlamaz.**
   (Bugünün kuralı: boş alan yok, "niçin boş" var.)

---

## ⑤ İŞ BÖLÜMÜ — kim neyi yapar

```
ARAYÜZ 2   onay kutusu · iki kip · üç ayar · flyTo/jumpTo · "yeri yok" hâli
           + `yer_id`/`yer_kon` OKUYAN taraf
           ⇒ ÖNCE BUNU YAZ. Elde 348 tam eşleşme zaten var, özellik
             o günden itibaren ÇALIŞIR ve geri kalanı doldurdukça büyür.

KOORDİNATÖR  `yer_id:` alanını `olaylar*.js`e işlemek (BENİM dosyalarım)
             ⇒ ilk parti: TAM eşleşen 348 madde — mekanik, risksiz
             ⇒ ikinci parti: ilk-parça eşleşen 333 — her biri GÖZLE onaylanır
             ⇒ üçüncü parti: 364 eşleşmeyen — savaş meydanları, `yer_kon:`
               ya da yeni nokta gerektirir, PETEK/NOKTA ile birlikte
```

📌 **ÖNEMLİ:** ARAYÜZ 2 veriyi beklemesin. 348 madde (%33) bugün hazır ve
   bu, özelliğin ilk gününde çalışması için fazlasıyla yeter. Kalanı
   doldurmak ayrı bir kuyruk ve o kuyruk **koordinatörde**.

---

## ⑥ SINAMA ÖLÇÜTÜ

```
① Kip A: Belgrad → Tebriz geçişi ANİ mi (animasyon sızmıyor mu)
② Kip B: aynı geçişte harita GERÇEKTEN yükselip iniyor mu
③ üç ayar da SÜRGÜYÜ oynatınca gözle görülür fark üretiyor mu
④ `yer_id`i olmayan bir olayda kart NE DİYOR (sessiz kalmamalı)
⑤ çok yakın iki olay (Bursa → İznik, 60 km) uçuş kipinde
   gereksiz yere havalanıyor mu — `flyTo` bunu kendi hallediyor mu, ÖLÇ
⑥ kronoloji hızlı ilerletilirse (⏭ üst üste) animasyonlar KUYRUĞA
   giriyor mu yoksa birbirini kesiyor mu — kesmeli
```

⚠️ ⑥ özellikle: Emre kronolojide hızlı gezerken her olay için tam bir uçuş
   beklerse arayüz kilitlenmiş gibi hissettirir. Yeni istek geldiğinde
   öncekinin iptal edilmesi gerekir.

---

# ⑦ ÜÇÜNCÜ KİP: BÖLGESEL OLMAYAN OLAY — ve BEDAVA ÇIKTI

> Emre, 4 Ağustos: *"eğer belli bir bölgeye ait bir gelişme değilse Osmanlı
> haritası ekrana sığdırılacak kadar yukarı çıkılıp harita ortalanır."*

## 🟢 ÖLÇÜLDÜ: VERİ ZATEN VAR, YENİ ALAN GEREKMİYOR

`donemler.js`in **495 döneminin 495'i** kendi sınır kutusunu taşıyor:
```
DONEMLER[i].b = [lonMin, latMin, lonMax, latMax]

1281-01-01   [29.32, 39.58, 30.54, 40.22]    Söğüt-Domaniç, bir avuç yer
1570-07-23   [-2.88, 10.30, 50.91, 49.51]    Atlantik'ten Hazar'a, tepe
1922-09-09   [21.93, 36.03, 44.14, 43.06]    Anadolu + Trakya
```
⇒ **`map.fitBounds(DONEMLER[i].b, {padding})` tam olarak Emre'nin istediğidir**
ve üstelik SABİT bir kutu değil: **o TARİHTEKİ imparatorluğun kendi sınırı.**
1281'de Söğüt'ü, 1570'te Akdeniz'in tamamını gösterir.

## Üç kip birleşti
```
① NOKTA olayı        yer_id / yer_kon var   →  flyTo(nokta)
② GENEL olay         ikisi de yok           →  fitBounds(DONEMLER[i].b)
③ (ileride) BÖLGE    Rumeli · Anadolu · Mağrib gibi
```
📌 Ve ② **varsayılan davranış** olur: koordinatı olmayan 364+ madde
   "yeri işaretlenmemiş" diye sessiz kalmak yerine **imparatorluğun o günkü
   hâlini** gösterir. Yani eksik veri bile anlamlı bir görüntü üretiyor.
⚠️ Ama kart yine de söyler: *"bu olayın haritada nokta yeri yok, imparatorluk
   görünümüne geçildi"* — kullanıcı niçin uzaklaştığını bilsin.

## Dördüncü ayar
```
4. KENAR PAYI   imparatorluk görünümünde çevrede ne kadar boşluk kalsın
                (fitBounds padding — piksel ya da oran)
```
⇒ Ayar sekmesinde artık DÖRT sürgü: irtifa · yakınlık · hız · kenar payı.

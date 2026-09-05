# BULGU — `Marker.setOpacity` niçin %12 tepki verdi

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2801` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM turu — *hiçbir kod değiştirilmedi.*
> `js/app.js` · `index.html` · `css/style.css` **DEĞİŞTİRİLMEDİ.**
> `data/*.js` ve motor dosyalarına dokunulmadı (koşu 5b canlı).

---

## 0. ÖZET — ve cevap beklediğimden ağır

```
🔴 "%12 tepki" ÖLÇÜM ARTEFAKTIYDI. Kütüphane %100 çalışıyor.
🔴 Sebep yine `visibilityState`: maplibre örtülmeyi 200 ms'lik bir
   `element.animate()` geçişiyle uyguluyor, ve kare üretmeyen bir
   sekmede o animasyon HİÇ BAŞLAMIYOR — `fill: backwards` ilk kareyi
   (opacity 1) tutuyor. Satır içi stil DOĞRU yazılmış, animasyon eziyor.
🟢 Kare zorlanınca: arka yüz 199 · `covered` sınıfı 199/199 · opaklık
   düşen 199/199.
🟢 VE DOĞRULUĞU BENİMKİYLE AYNI: dört zoom seviyesinde eşikler ~1°
   içinde örtüşüyor, kütüphane hiçbir şeyi erken gizlemiyor (0).
⇒ `js/app.js`teki ~90 satırlık el yapımı çözüm GEREKSİZ.
```

---

## 1. SORU ① — o %12 hangi 25'ti, ortak özellikleri ne?

**Cevap: ortak bir özellikleri YOK.** Zoom değil, enlem değil, işaretçi
türü değil. Ortak olan şey işaretçide değil **kare saatinde**.

Ölçüm zinciri:
```
setOpacity ÇAĞRILMADAN     `covered` sınıfı  0 / 227     (hiç)
setOpacity('1','0.15')     `covered` sınıfı 207 / 210    (%98,6)
   ⤷ ama opaklık düşen      25 / 210        (%12)  ← eski ölçümüm
kare ZORLANDIKTAN sonra    `covered` 199/199 · opaklık düşen 199/199
```
⇒ Sınıf zaten doğru geliyordu; **düşmeyen şey opaklıktı.**

## 2. SORU ② — `opacityWhenCovered` hangi koşulda devreye giriyor?

**İki koşul, ikisi de ölçüldü:**

**(a) `setOpacity` ÇAĞRILMIŞ olmalı.** Varsayılan hâlde `covered` sınıfı
hiçbir işaretçiye gelmiyor (0/227) — kütüphane, iki değer de varsayılansa
örtülme hesabını atlıyor görünüyor. Çağrılınca 207/210 geliyor.

**(b) Sayfa KARE ÜRETİYOR olmalı.** Kök sebep burada, ve elemandan
okundu:
```
inline_opacity   "0.15"      ← kütüphane DOĞRU yazmış
computed_opacity "1"         ← ama hesaplanan bu
rakip CSS kuralı  YOK
çalışan animasyon: keyframes 1 → 0.15 · duration 200 ms
                   fill "backwards" · iterations 1
                   playState "running" · startTime NULL · currentTime 0
```
`startTime: null` = animasyon **beklemede**; ilk kareyi bekliyor ve o kare
gelmiyor. `fill: backwards` ilk kareyi (opacity **1**) tutuyor.
⇒ **Animasyonlar CSS art alanında satır içi stilden ÜSTÜNDÜR** — bu yüzden
`0.15` yazılı olduğu hâlde hesaplanan `1`.

📌 Ve animasyonu kuran **bizim kodumuz değil**: `js/app.js`te `.animate(`
geçmiyor, `css/style.css`te `.bosluk-*` için animasyon yok. Kuran
maplibre'nin kendisi (`animationName: none` ⇒ CSS değil, JS ile
`element.animate()`).

### 🔴 BU, `visibilityState` TUZAĞININ BEŞİNCİ YÜZÜ
```
① ölçüm      isStyleLoaded / getStyle / getLayer → undefined
② sayfa      MapLibre ilk çizimi yapmıyor, `load` ateşlemiyor
③ zamanlayıcı requestAnimationFrame duruyor (kare hızı ölçülemedi)
④ ekran      screenshot zaman aşımı
⑤ 🆕 ANİMASYON — `element.animate()` başlamıyor, `fill` ilk kareyi
   dondurup KÜTÜPHANENİN DOĞRU HESABINI GÖRÜNMEZ KILIYOR
```
⚠️ Beşincisi en sinsisi: ötekilerde bir şey *çalışmıyor*; burada her şey
çalışıyor, yalnız **sonucu görünmüyor** — ve ben ondan "API yetersiz"
hükmü çıkarmıştım.

## 3. SORU ③ — 90 satır gerekli mi? **HAYIR**

Kütüphanenin eşiği ile benim oracle ile kalibre ettiğim ufuk yan yana
ölçüldü. Her ölçümden önce **bütün** işaretçilere `setOpacity` uygulandı
(yenileri dâhil — aşağıdaki uyarıya bak):

| zoom | işaretçi | benim ufkum | kütüphane: en büyük AÇIK | kütüphane: en küçük COVERED | kütüphane erken gizledi |
|---|---:|---:|---:|---:|---:|
| 1,0 | 711 | 81,2° | 80,6° | 81,9° | **0** |
| 1,5 | 909 | 78,2° | 77,9° | 79,0° | **0** |
| 2,5 | 1.433 | 70,0° | 69,6° | 69,9° | **0** |
| 4,0 | 1.511 | 53,7° | 52,5° | 53,4° | **0** |

⇒ İki yöntem **~1° içinde** aynı; kütüphane hiçbir görünür işaretçiyi
erken gizlemiyor. **El yapımı çözüm bir şey eklemiyor.**

### 🔴 AMA KALDIRILIRSA ÜÇ ŞART VAR — ölçüldü
```
① setOpacity HER İŞARETÇİYE, SONRADAN YARATILANLARA DA uygulanmalı.
   Ölçüldü: zoom değişince işaretçi 371 → 1.511'e çıktı ve YENİLER
   sınıf ALMADI (148° uzaklıktaki bir işaretçi "açık" göründü).
   🟢 Bunun kancası ZATEN VAR: `ISARETCI_KUTUK` (Marker.addTo sarmalaması).
② KÜTÜPHANE GİZLEMİYOR, SOLDURUYOR. `opacityWhenCovered` 0,15'te arka
   yüz hâlâ hayalet gibi görünür. Tam gizleme isteniyorsa değer **0**.
   ⚠️ 0,15 mi 0 mı — bu bir TASARIM kararı (bağlam mı, temizlik mi),
   ölçümle çözülmez. Emre'nin.
③ Kip kapanınca `setOpacity` GERİ ALINMALI, yoksa mercator'da da
   soldurma sürer. (Bizim çözümde `KURE_ACIK` bayrağı bunu yapıyor.)
```

## 4. DAMGALAR

```
🟢 ÖLÇTÜM     setOpacity'siz 0/227 · çağrılınca 207/210 sınıf ·
              kare zorlanınca 199/199 sınıf VE 199/199 opaklık ·
              animasyon 1→0,15 · 200 ms · startTime null ·
              dört zoomda eşik farkı ~1° · erken gizleme 0/4 ölçümde
🔴 ÇÜRÜDÜ     kendi "%12 ⇒ API yetersiz" hükmüm — artefaktmış
⚪ ÖLÇMEDİM   kütüphane yolunun BEDELİ (benimki 1,589 ms / 1.168 işaretçi;
              kütüphaneninki ölçülmedi — kendi kare döngüsünde koşuyor)
⚪ ÖLÇMEDİM   gerçek bir kullanıcı tarayıcısında davranış; bütün ölçümler
              bu makinede, koşu 5b CPU'yu %96 kullanırken alındı
⚪ ÖLÇÜLEMEDİ `opacityWhenCovered`in VARSAYILAN değeri — belgede yazmıyor,
              kaynak koda BAKMADIM
🔵 OKUMADIM   maplibre kaynağında `_updateOpacity`in tam koşulu
              (davranışı ölçtüm, kodunu okumadım)
```

## 5. NE İSTİYORUM — tek cümle

**`js/app.js`teki ~90 satırlık arka yüz çözümü kaldırılıp yerine
işaretçi başına tek bir `setOpacity` çağrısı konabilir; ama önce Emre
`opacityWhenCovered` değerine karar vermeli (0,15 soluk hayalet mi, 0 tam
gizleme mi) — ve bu bir ölçüm değil tasarım kararıdır.**

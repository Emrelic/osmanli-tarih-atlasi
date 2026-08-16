# KOŞU 4 — ÖNGÖRÜ (koşudan ÖNCE yazıldı)

**Yazılma anı:** 16 Ağustos 2026, bağlama sonrası, koşu **başlamadan**.
**Yazan:** KOORDİNATÖR
**Taban commit:** `3b9bebc`

> 🔴 **Niçin önce yazılıyor:** sonradan yazılan beklenti, ölçümü gördükten
> sonra farkında olmadan ona göre şekillenir ve **hiçbir zaman yanlış
> çıkmaz** — yani hiçbir şey öğretmez. Önce yazılan beklenti yanlış
> çıkabilir, ve ancak yanlış çıkabilen bir şey bilgi taşır.

---

## 0. BU KOŞU KAÇ DEĞİŞKEN TAŞIYOR — dürüst sayım

```
① 4 yeni girdi dosyası      +62 nokta   (2527 → 2589)
② motor kıstırma düzeltmesi  pencere dışı tohum ızgaraya HİÇ alınmıyor
③ 245 `k:` + 187 `kd:`       kademe ağırlıkları ilk kez YÜKLÜ
④ 37 yeni künye              (392 → 429)
⑤ 44+ yeni renk              (327 → 389)
```

⚠️ **Beş değişken, ve bu tek değişken kuralının ihlalidir.** Bilerek
kabul ediyorum, sebebi: ①·④·⑤ **birbirinin şartı** (nokta gelmeden künye
yazılmaz, künye olmadan renk anlamsız), ③ bir ay süren bir borcun kapanışı,
② ise ①'i **güvenli kılan** düzeltme. Ayırmak, beş koşu demekti (~7 saat).

🟢 **Bedeli ayırt edilebilirlikle ödüyorum:** her değişkenin ayrı bir
öngörü kalemi var (aşağıda) ve tutmadığında hangisinin sorumlu olduğu
**önceden** yazılı.

---

## 1. ÖNGÖRÜLER — ve MAZERETİ OLAN/OLMAYAN ayrımı

### 🔴 MAZERETİ OLMAYANLAR — tutmazsa harita değil, KOD/VERİ düzeltilir

**① Güney Afrika lat −11 kuşağında yabancı gövde: 0**
Kıstırma düzeltmesinin doğrudan sınavı. Kap · Oranj · Ulundi · Transvaal ·
Mapungubwe · Büyük Zimbabve tohumları artık ızgaraya **hiç girmiyor.**
Tutmazsa: düzeltme çalışmıyor **ya da** yetim yüz mantığı onu geri alıyor
(A1 tavanı koşu 4b'nin birebir tekrarı).

**② Osmanlı yüzölçümü: 9 kesitin 9'unda DEĞİŞMEMELİ**
Bu koşuda Osmanlı coğrafyasına **tek nokta** girmedi; giren 62 noktanın
hepsi Okyanusya · Amerika · güney Afrika · Sibirya.
⚠️ Kademe ağırlıkları (③) Osmanlı peteklerinin **birbirine göre**
büyüklüğünü değiştirebilir — ama **toplam** değişmemeli.
Tutmazsa: `k:` ağırlık tablosu toplamı koruyan bir dönüşüm değil demektir,
ve o **kod kusurudur.**

**③ Yeni delik (renksiz/künyesiz kimlik): 0**
Bugün ölçüldü: renksiz 0, künyesiz 1 (`panama-cumhuriyeti`, koşudan önce
kapanacak). Koşudan sonra **artmamalı.**
Tutmazsa: bir kimlik veriye koşu sırasında girmiş demektir — girdi kilidi
ihlali.

### 🟡 MAZERETİ OLABİLECEKLER — ve mazereti ŞİMDİ yazıyorum

**④ Toplam kara alanı: ARTMALI, ama %8'i geçmemeli**
Mazeret: 62 noktanın 36'sı pencere dışında; pencere dışı nokta petek
üretmez. Yani artışın kaynağı yalnız **pencere içi 26 nokta**, ve onlar
zaten emilmiş toprağı **paylaşacak**, yeni toprak yaratmayacak.
⇒ Beklenen artış **küçük**; %8'i geçerse mazeret DÜŞER ve sebep aranır.

**⑤ `donemler.js` gün sayısı: 513 → 520-560**
Mazeret: her yeni `s:`/`d:` dönemi bir kırılma günü ekler; 62 nokta
getirdiği kırılma kadar büyütür. `Değişmez 2` 511 kırılma diyor.
⇒ 560'ı aşarsa mazeret düşer: bir dosyada beklenmedik yoğunlukta dönem var.

**⑥ Koşu süresi: 80-110 dk**
Mazeret: nokta %2,5 arttı ama Voronoi O(n log n), maliyet ızgarası
sabit. ⇒ 110 dk'yı aşarsa kademe ağırlıkları maliyet aşamasını
yavaşlatıyor demektir — kusur değil, **ölçülecek** bir şey.

---

## 2. KOŞU ÖNCESİ KAPANMASI ŞART OLAN ÜÇ KALEM

```
🔴 Değişmez 1c   belgesiz 8 (tavan 7)  — Lapaha, ek30'da
🔴 Değişmez 1b   pencere arası boşluk 3 — Gao + Djenné ×2, e9353f'te
🔴 künyesiz 1    panama-cumhuriyeti, 0ee15e'de
```
⚠️ **Üçü kapanmadan koşu BAŞLAMAZ.** Sebebi süre: 80 dakikalık bir koşuyu
bilinen üç kusurla başlatmak, ikinci bir 80 dakika demektir.

---

## 3. KOŞU SIRASINDA KİLİTLİ

```
arac/girdi.py · arac/renkler.py · arac/uret_petek.py   → parmak izli, YAZILMAZ
data/*.js                                              → kopyalanıyor, güvenli
```
📌 Bu ayrım ölçülmüştü: `renkler.py` bir **sözlük taşır** ama `arac/`
altında bir `.py`dir. **Ne taşıdığı değil, nerede durduğu belirliyor.**

---

## 4. KOŞUDAN SONRA — sırayla

```
① py arac/denetle.py              altı değişmez
② py arac/renk_olc.py             🔴 VERİ DEĞİŞTİ ⇒ ŞART
                                  (renge dokunulmasa bile çakışma doğar)
③ py arac/uret_devirler.py        devirler.js
④ bu dosyaya ÖLÇÜMLERİ yaz        öngörünün yanına, tek tek
⑤ py arac/denetle_yayin.py        yayın kapısı
⑥ py arac/surum_damgala.py        ?v=rNN
⑦ push
```

⚠️ ④ atlanırsa bu dosyanın hiçbir değeri kalmaz: öngörü, **karşılığı
yazılmadıkça** bir tahmin olarak kalır ve tahmin çürütülemez.

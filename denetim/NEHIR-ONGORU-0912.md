# KITA 10 · NEHİR GEÇİŞİ — **ÖNGÖRÜ** (araştırmadan ÖNCE)

```
🔴 BU DOSYA TEK BİR KAYNAK OKUNMADAN YAZILDI VE COMMIT'LENDİ.
   Yazıldığı an: hiçbir arama yapılmadı, hiçbir sayı ölçülmedi.
   (D022 — sonra yazılan beklenti AYARLANABİLİR, önce yazılan ÇÜRÜTÜLEBİLİR)
```

## ⓪ SEVKİN ÜÇ ÖNCÜLÜ — ÖLÇTÜM, ÜÇÜ DE DOĞRU

```
① `_kv_dijkstra` (satır 2268-2302, 35 satır) içinde
   nehir/river/akarsu/geçit/ford/köprü → 0 EŞLEŞME              ✓ DOĞRU
② `dogal_hatta_yasla` satır 1221'de, ve sınır çizildikten SONRA
   onu yatağa çekiyor — bir MALİYET değil bir YASLAMA            ✓ DOĞRU
③ satır 629 `_sr > NEHIR_ONEM_ESIGI` (=5.0, satır 590) ile eliyor ✓ DOĞRU
   ⚠️ ek: `_ad is None and _sr > ...` — ADI OLAN nehir scalerank'ten
      BAĞIMSIZ geçiyor. Yani kapı scalerank'e değil ADA da bakıyor.
```

## ① 🔴 VE SEVKTE OLMAYAN DÖRDÜNCÜ BULGU — ve tasarımı bağlıyor

`_kv_dijkstra`'nın maliyet satırı:
```python
nd = d + math.hypot(dx*di, _KVDY*dj) * (surt[k] if surt else 1.0)
```
⇒ Maliyet **HÜCREYE** ait bir sürtünme çarpanı. Ama bir nehir geçişi
doğası gereği **KENARA** ait bir bedeldir: çizgiyi geçerken ödenir.

**Bunun iki somut sonucu var ve ikisi de öngörüye giriyor:**
```
🔴 A) Nehir boyunca YÜRÜMEK ile nehri GEÇMEK aynı bedeli öder.
      Oysa tarihte nehir boyu bir YOLDUR (hatta bir taşıma hattı),
      geçmek ise bir engeldir. Hücre-sürtünmesi ikisini AYIRT EDEMEZ.
🔴 B) Hücre 0,05° ≈ 5.566 m. Bir nehir en fazla ~1 km geniştir.
      Bütün hücreyi pahalılaştırmak, %80-95'i kara olan bir alanı
      cezalandırır ⇒ SİSTEMATİK FAZLA CEZA.
```
🟢 **Ve bedelin BİRİMİ buradan çıkıyor, ölçülebilir biçimde:** sürtünme
mesafeyi çarptığı için, `f` çarpanlı tek bir hücre `(f−1) × 5,566 km`
ek bedel üretir. Emre'nin "100 km"i tek hücreye konursa:
```
f = 1 + 100/5,566 ≈ 19,0
```
Bu sayı raporda **sınanacak**: 19 makul mü, yoksa modelin ifade
sınırını mı gösteriyor?

## ② ÖNGÖRÜLER — hepsi çürütülebilir, hiçbiri "duruma göre" değil

### Ö1 · Emre'nin "100 km"i — **TEK SAYI OLARAK ÇÜRÜYECEK**
Bedelin **iki tepeli (bimodal)** çıkacağını öngörüyorum:
```
GEÇİT/KÖPRÜ VARSA      5–20 km eşdeğeri
GEÇİT YOKSA            bedel geçişin kendisinden değil, EN YAKIN GEÇİDE
                       DOLANMADAN gelir ⇒ 50–250 km, ve nehre göre değişir
```
⇒ "100 km" bir **ortalama** olarak yaklaşık doğru çıkacak ama
**yapısı yanlış**: sabit bir duvar bedeli değil, *geçit yoğunluğunun*
fonksiyonu.

### Ö2 · `scalerank` → genişlik/debi eşlemesi — **YAPILAMAYACAK**
Natural Earth `scalerank` bir **kartografik gösterim ölçeği** sırasıdır
(hangi harita ölçeğinde çizilmeye değer). Debi ya da genişlik değildir.
⇒ Öngörü: sıralı (ordinal) bir korelasyon **bulunacak** ama bedel
türetmeye yetecek bir eşleme **bulunamayacak**; ek bir öznitelik
(ör. `dissolve`/`rivernum`/havza alanı) ya da dış veri gerekecek.
🔴 Mazeret yok: NE'nin kendi belgesinde bir genişlik/debi alanı
**varsa** bu öngörü çürür ve öyle yazılır.

### Ö3 · MEVSİM — **ORTALAMA DEĞİL, "SEFER MEVSİMİ" ÖNERECEĞİM**
Atlas `tasarruf` boyar (`D030`) ve tasarruf yıl boyu sürer; ama
tasarrufun KURULDUĞU an sefer mevsimidir. ⇒ Öngörü: yıllık ortalama da
en kötü hâl de yanlış; doğru olan **ilkbahar-sonbahar (sefer mevsimi)
değeri**. Taşkın dönemi (ilkbahar kar erimesi) bunun İÇİNDE kalıyor —
yani bu seçim bedeli düşürmez, **yükseltir**.

### Ö4 · TARİHÎ ÇAPRAZ KONTROL — **ORDU İÇİN GÜN MERTEBESİ**
Büyük bir ordunun Tuna/Fırat gibi bir nehri köprüyle geçmesi
**2–10 gün** çıkacak. Tek bir yürüyücü için aynı geçiş **saatler**.
⇒ İki mertebe fark. Bu, `R1①`in cevaplanmadığı sürece **bedelin
sayısının verilemeyeceği** anlamına gelir: *kim geçiyor?*

### Ö5 · KAYNAK BULUNABİLİRLİĞİ
Hakemli **en-az-maliyet yolu (LCP) arkeolojisi** literatüründe nehir
geçiş bedeli için hazır bir katsayı **bulunacak** (bu alan tam olarak
bunu tartışıyor). Askerî köprücülük talimnamelerinde geçiş **hızı**
(birlik/saat) bulunacak. Tarihî Osmanlı Tuna geçişleri için somut gün
sayısı **bulunacak**.

## ③ MAZERETİ OLMAYAN YÖN (`D019`)
Ö1 iki tepeli diyor. Ölçüm **tek tepeli** çıkarsa — yani geçidin varlığı
bedeli kayda değer ölçüde değiştirmiyorsa — öngörü **çürümüştür** ve
"geçit yine de önemli" diye kurtarılmayacak.
Ö2 "yapılamaz" diyor. NE belgesinde bir genişlik alanı çıkarsa
**çürümüştür.**

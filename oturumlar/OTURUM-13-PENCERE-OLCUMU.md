# Pencere genişletmesinin maliyeti — ölçüm raporu

**Ölçüm tarihi:** 2026-07-30 · **Ölçen:** Oturum 13 (Asya)
**Ölçüm anındaki girdi:** `yerlesimler.js` 927 + `yerlesimler_afrika.js` (canlı toplam
927) · `yerlesimler_asya.js` 344 · `yerlesimler_avrupa.js` 237.

> ⚠️ Bu sayılar `DURUM.md`'deki 917 ile birebir tutmuyor çünkü ölçüm sırasında
> başka bir oturum `yerlesimler.js`'e yazıyordu. Oranlar etkilenmez; mutlak
> sayılar ±%1'dir. Bütün ölçümler `veri-kaynak/` altındaki gerçek maske ve
> gerçek yerleşim verisiyle, motorun kullandığı kütüphaneyle (shapely/GEOS)
> yapıldı — tahmin yoktur.

---

## 0. Üç cümlelik özet

1. **Pencereyi doğuya açmak yetmez; GÜNEYE de açmak zorunlu.** Bugünkü kutunun
   güney sınırı **1.5°K** ve Asya partisinin **24 noktası** bunun altında —
   Cava'nın tamamı, Bali, Timor, Sumatra'nın güneyi, Makassar, Ambon, Banda.
   Doğu sınırını 150°D yapıp güneyi bırakmak, Endonezya'yı haritadan siler.
2. **Darboğaz nokta sayısı DEĞİL, kara maskesinin parça sayısıdır.** Ölçüldü:
   nokta %19 artınca süre %17 arttı; kara parçası 3.2 kat artınca süre **8 kat**
   arttı. Yani 344 Asya noktası pahalı değil, **Endonezya-Filipin takımadası**
   pahalı.
3. **`MIMARI §3.2` (petek geometrisi epok başına bir kez + ayrı sahiplik
   tablosu) pencere açılmadan ÖNCE yapılmalıdır.** Ölçülen çıktı büyümesi
   36 MB → **61-92 MB**; §3.2 yapılmazsa tarayıcı sınırı bugün zaten sıkıntılı
   olan yerde kesin aşılır.

---

## 1. Hangi kutu gerekiyor — ölçülmüş sınırlar

Depodaki bütün yerleşim partilerinin gerçek sınırları:

| Dosya | Nokta | Boylam | Enlem |
|---|---|---|---|
| `yerlesimler.js` | 764 | −9.598 … 61.861 | 2.037 … 60.170 |
| `yerlesimler_afrika.js` | 153 | −1.747 … 51.259 | 1.716 … 37.276 |
| `yerlesimler_avrupa.js` | 228 | −9.700 … 28.733 | 36.140 … **63.431** |
| `yerlesimler_asya.js` | 344 | 65.710 … **141.354** | **−10.178** … 50.243 |
| **TOPLAM** | **1489** | **−9.700 … 141.354** | **−10.178 … 63.431** |

Bugünkü kutu: `box(-12, 1.5, 62, 62)`.
Gereken kutu: **`box(-12, -12, 150, 66)`**.

- Doğu 62 → **150**: Sapporo 141.354°D en doğudaki nokta; 150 rahat pay bırakır.
- Güney 1.5 → **−12**: Kupang −10.178 en güneydeki nokta.
- Kuzey 62 → **66**: Avrupa partisinde 63.431 var (`yerlesimler_avrupa.js`).
- Batı −12 değişmiyor.

### ⚠️ 180. meridyen — sorun YOK, doğrulandı
Asya partisinde **150°D'nin doğusunda tek nokta yok** (ölçüldü: 0). Japonya
141.354°D'de bitiyor. Dolayısıyla `box(-12, -12, 150, 66)` antimeridyeni
kesmiyor ve shapely'de sarma (wrap) sorunu çıkmıyor.

**Amerika eklenirse de sorun çıkmıyor** ama sebebi ince: Amerika −170…−35
boylamlarında, yani kutu `box(-170, -56, 150, 72)` olurdu ve bu kutu 320°
boylam kaplar ama **±180'i kesmez** — kesilmeyen boşluk Pasifik'e denk gelir.
Yani antimeridyen bu projenin sorunu değil; sorun o kutunun **boyutu** (§2).

---

## 2. Kara maskesinin maliyeti — ölçüldü

`land ∩ kutu − lakes ∩ kutu` (motorun kullandığı geometri):

| Kutu | Parça | Bunun < 0.01°² adacık | Köşe (vertex) | Kat |
|---|---|---|---|---|
| **MEVCUT** `(-12, 1.5, 62, 62)` | 1 104 | 951 | 90 822 | ×1.00 |
| doğu aç `(-12, 1.5, 150, 62)` | 2 566 | 2 249 | 170 632 | ×1.88 |
| **GEREKEN** `(-12, -12, 150, 66)` | **3 484** | **2 993** | **221 932** | **×2.44** |
| Amerika dahil `(-170, -56, 150, 72)` | 6 109 | 4 866 | 518 615 | ×5.71 |
| tam dünya `(-180, -60, 180, 84)` | 6 890 | — | 584 006 | ×6.43 |

**Okunması gereken satır:** gereken kutuda kara **parça** sayısı 1 104 → 3 484,
yani **×3.16**; bunun +2 042'si Endonezya-Filipin takımadasının adacıklarıdır.
Köşe sayısı yalnız ×2.44 arttı — yani eklenen şey büyük kıtalar değil, **çok
sayıda küçük ada**. Maliyetin nereden geldiğini bu ayrım açıklıyor (§3).

Güneyi açmanın tek başına bedeli: 2 566 → 3 484 parça, **+918 parça.**

---

## 3. Üretim süresi — ölçüldü

Motorun yaptığı işin çekirdeği: `voronoi_diagram(...)` + her hücreyi kara
maskesine kırpma (STRtree ile). İkisi ayrı ayrı ölçüldü:

| Girdi | Nokta | Kara parçası | Voronoi | **Kırpma** | Toplam | Kat |
|---|---|---|---|---|---|---|
| MEVCUT | 917 | 1 104 | 0.01 sn | 66.7 sn | 66.7 sn | ×1.00 |
| +ASYA | 1 261 | 3 484 | 0.01 sn | **532.3 sn** | 532.3 sn | **×7.98** |
| +ASYA+AVRUPA | 1 498 | 3 484 | 0.01 sn | 623.3 sn | 623.4 sn | ×9.34 |

### Bu tablodan çıkan üç sonuç

**a) Voronoi'nin kendisi bedava.** 0.01 saniye, üç durumda da. Görev
tanımındaki *"Voronoi 917 → 1261 noktayla kaç kat yavaşlar"* sorusunun cevabı:
**hiç yavaşlamıyor.** Yavaşlayan şey kırpmadır.

**b) Nokta sayısı ucuz, maske karmaşıklığı pahalı.** Kanıt üçüncü satırda:
1 261 → 1 498 nokta (**+%19**) aynı maskeyle 532 → 623 sn (**+%17**), yani
doğrusal. Buna karşılık 917 → 1 261 nokta (+%38) ile maske 1 104 → 3 484 parça
olunca süre **×8**. Yani maliyet ≈ *hücre sayısı × hücre başına düşen kara
parçası* ve ikinci çarpan patlıyor.

> **Doğrudan işe yarar sonuç:** Asya partisini canlıya almanın bedeli "344
> nokta" değil, "Endonezya takımadası". Endonezya-Filipinler ertelenip pencere
> `box(-12, 1.5, 150, 62)` yapılsaydı kara parçası 3 484 yerine 2 566 olurdu —
> ama o zaman Cava, Bali, Timor ve Makassar çizilemez. **Bu bir ödünleşmedir ve
> kararı entegrasyon oturumu vermelidir.**

**c) Tam üretim tahmini.** Bugün tam üretim ~30 dk ve bunun ~67 sn'si kırpma;
geri kalanı dönem başına `union`, yaslama, Chaikin ve yazma. Kırpma ölçülerek
**×8** çıktı; dönem başına union ise kırılma (×1.68) ve gövde (×2.24) sayısıyla
büyür, yani en az **×3.8**. İkisi birleşince:

> **~30 dk → tahmini 2-4 saat.** Kırpma kısmı ölçüldü (×8), gerisi projeksiyondur.

---

## 4. Çıktı boyutu — ölçülmüş girdiler, hesaplanmış çıktı

| | MEVCUT | +ASYA | +ASYA+AVRUPA |
|---|---|---|---|
| Nokta | 927 | 1 271 | 1 508 |
| Dönem (s+d+v) | 4 192 | 5 903 | 6 438 |
| **Farklı kırılma tarihi** | **626** | **1 053** (×1.68) | 1 144 (×1.83) |
| **Boyanan devlet** | **109** | **244** (×2.24) | 259 (×2.38) |

Bugünkü üretilmiş çıktı: `donemler.js` **24.6 MB** + `devletler_harita.js`
**11.8 MB** = **36.4 MB**.

`devletler_harita.js` her devletin her dönemi için birleştirilmiş gövdeyi ayrı
ayrı yazdığından boyut ≈ kırılma × gövde ile büyür. İki uçtan tahmin:

| | alt sınır (yalnız kırılma) | üst sınır (kırılma × √gövde) |
|---|---|---|
| +ASYA | **61 MB** | **92 MB** |
| +ASYA+AVRUPA | 67 MB | 103 MB |

`MIMARI §3.2` çıktı boyutunun **bugün zaten sıkıntılı** olduğunu yazıyor.
36 MB → 61-92 MB, tarayıcıda ilk yükleme süresini ve bellek tepe noktasını
2-3 katına çıkarır.

---

## 5. Görev tanımının asıl sorusu: §3.2 önce mi yapılmalı?

**Cevap: EVET, ve ölçüm bunu iki ayrı yoldan söylüyor.**

1. **Boyut yolu (§4).** 61-92 MB tek dosya olarak sunulamaz. §3.2'nin önerdiği
   yapı (petek geometrisi **epok başına bir kez**, sahiplik ayrı ve çok küçük
   bir tabloda) tam olarak §4'teki çarpanı öldürür: geometri artık kırılma
   sayısıyla değil **epok** sayısıyla çoğalır ve aynı poligon yüzlerce kez
   tekrarlanmaz. Beklenen kazanç `MIMARI`'nin kendi tahminiyle 10-15 kat, yani
   61-92 MB → 5-9 MB.
2. **Süre yolu (§3).** §3.2 ayrıca **dönem başına union'ı tamamen kaldırıyor**
   (tarayıcı union yapmıyor, her peteği sahibinin rengiyle boyuyor). Üretimdeki
   ×3.8'lik ikinci çarpan böylece düşer; geriye yalnız ölçülen kırpma maliyeti
   (×8) kalır ve 30 dk → ~1 saat mertebesine iner.

**Sıralama önerisi:** §3.2 → sonra pencere. Tersi sırada pencere açılırsa
üretim 2-4 saate çıkar ve çıktı tarayıcıda açılmaz; yani pencere açılmış ama
harita çalışmıyor olur.

---

## 6. ⚠️ Pencere açılınca ortaya çıkacak YENİ hata sınıfı — ölçüldü

Bu, görev tanımında sorulmamıştı ama ölçüm sırasında çıktı ve **pencereyi
açmanın en büyük riski budur.**

`box(-12, -12, 150, 66)` içinde 1°'lik kara hücrelerinin **%37'si** (7 550
hücrenin 2 770'i) en yakın yerleşimden **400 km'den uzaktır**. `MIMARI §2`
gereği bu hücreler en yakın peteğe emilir ve **o peteğin sahibiyle boyanır.**

Hangi yerleşimin peteği kaç hücreyi yutar (ilk 10):

| Yutan yerleşim | Hücre | Ne boyanır |
|---|---|---|
| **Aigun** | 422 | Doğu Sibirya'nın tamamı **Qing/Çin** olur |
| Perm | 263 | Batı Sibirya Rusya olur (bu doğru olabilir ama tarihi yanlış: 1281'de değil) |
| Ndjamena | 224 | Orta Afrika |
| **Kobdo (Hovd)** | 216 | Altay ve güney Sibirya **Moğolistan** olur |
| Timbuktu | 194 | Batı Sahra altı |
| **Urga** | 191 | Baykal çevresi Moğolistan olur |
| Bonga (Kaffa) | 157 | Orta Afrika |
| Nyala | 123 | Sudan içi |
| Gulca (Yining) | 91 | Kazak bozkırı Cungar/Qing olur |
| **Banda Neira** | 73 | **Yeni Gine** Hollanda Doğu Hint'i olur |

Bunların üçü doğrudan **benim** noktalarım (Aigun, Kobdo, Urga, Banda Neira) ve
üretim koşarsa **yanlış bilgi üretirler.** Sardinya'nın 1533'te Osmanlı
görünmesiyle aynı hata sınıfıdır, yalnız ölçeği kıtasaldır.

### Bölge bölge boşluk (en yakın yerleşime uzaklık)

| Bölge | Ortanca | En kötü | >300 km hücre |
|---|---|---|---|
| Çin içi (22-35K, 100-115D) | 155 km | 397 km | %6 |
| Belûcistan-Mekran (24-30K, 58-68D) | 154 km | 358 km | %9 |
| Afgan **geniş kuşağı** (28-38K, 60-70D) | 169 km | 587 km | %16 |
| **Köprü şeridi (23-40K, 62-66D)** | **220 km** | 417 km | **%19** |
| Batı Çin / Tibet platosu (30-40K, 75-95D) | 314 km | 732 km | %53 |
| **Sır Derya – Kazak bozkırı (40-48K, 60-75D)** | **509 km** | **967 km** | **%79** |
| **Güney Sibirya (48-58K, 60-100D)** | **759 km** | **1 354 km** | **%92** |

⚠️ **İlk yazdığım sonucu düzeltiyorum.** Önce yalnız geniş kuşağı (60-70°D)
ölçüp "köprü sorunu yoktur" demiştim. O kuşak Kâbil ve Kandehar'ı içine
aldığı için asıl boş şeridi ortalamayla gizliyor. **Dar şerit (62-66°D) ayrı
ölçüldüğünde ortanca 220 km ve %19'u 300 km üstünde** — yani köprü sorunu
gerçektir, yalnız sanıldığı kadar büyük değildir.

Şeritteki boşluğu yutan iki nokta: **Merv (141 hücre)** ve **Kandehar (87)**.
Aralarındaki mesafe **747 km** (ortaçağ Merv'i 37.662/62.192 ile ölçüldü).
Herat tam ortaya düşüyor: Merv'e 369 km, Kandehar'a 448 km. Yani şeridi tek
nokta kapatmaz, **en az iki-üç nokta gerekir** — bu, Oturum 15'in köprü
dosyasının işidir.

**Ama öncelik sırası değişmiyor:** gerçek boşluklar hâlâ **Kazak bozkırı ve
güney Sibirya**. Köprü şeridi 220 km ortancayla onların yanında küçük kalır.

---

## 7. Karar için sıralama önerisi

1. **`MIMARI §3.2`** — petek geometrisi epok başına, sahiplik ayrı tablo.
   (Boyut ve süre çarpanlarının ikisini de öldürür.)
2. **`MIMARI §3.1`** — zaman dilimli Voronoi (`kur:`/`bit:` okunsun). Asya
   partisinde 84 kayıt `kur:` taşıyor; bu alan okunmadan pencere açılırsa
   1300 haritasında Singapur, Kalküta, Batavia, Hong Kong görünür.
3. **Kazak bozkırı + güney Sibirya** için yerleşim partisi (~60-80 nokta).
   Bu olmadan §6'daki emilme kesin gerçekleşir.
4. **Sonra** `BOLGE = box(-12, -12, 150, 66)`.
5. Amerika ayrı bir karardır: kutu `box(-170, -56, 150, 72)` demek, kara
   parçası ×5.5 ve köşe ×5.7 demek — yani bu raporun bütün çarpanları bir kez
   daha katlanır. §3.2 olmadan düşünülemez.

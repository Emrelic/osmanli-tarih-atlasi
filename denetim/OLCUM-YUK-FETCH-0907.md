# ÖLÇÜM — GEOMETRİ `<script>` → `fetch`+JSON · YUK-FETCH-0907

> **OPUS HAZIR KITA 124 · 7 Eylül 2026.** Ölçüm ve ARAÇ; **dönüşüm
> yapılmadı**, `data/` ve `arac/` donuk (koşu 8).
> Yazdıklarım: `js/app.js` (bir kapı) · `denetim/ARAC-JSON-URET-0907.py` ·
> `denetim/SINAV-FETCH-0907.html` · `denetim/SINAV-GEOMETRI-KAPISI-0907.html`

---

## ⓪ ÖZET — üç sayı

```
Ⓐ bugünkü <script> yolu   14.105 / 12.032 ms   (iki koşu)
Ⓑ fetch + JSON.parse       6.920 /  5.868 ms
                          ────────────────────
                          ~%51 DÜŞÜŞ · ~6,6 sn
```
🟢 Kontrol grubu var: **aynı üç dosya, aynı tarayıcı, aynı koşullar,
ayrı sayfa yüklemeleri.**
🔴 Ve bu **teslim edilmiş bir hızlanma DEĞİL** — uygulanması `index.html`
gerektiriyor ve o dosya bende değil (§②).

---

## ① TABAN — devralmadım, ölçtüm

```
domHazır             26.263 ms      (sevkin verdiği: 20.546 ms)
load                 26.362 ms
kaynak               207 · toplam 103,75 MB
devletler_harita.js  54.710 KB · 18.754 ms
donemler.js          31.741 KB · 16.505 ms
altlik.js            10.788 KB · 14.245 ms
katman               39  ✓
```

⚠️ **26.263 > 20.546 ve bunu GERİLEME SAYMIYORUM:** koşu 8 (7 Eylül
11:17:46, ~16 saat) CPU'yu paylaşıyor. Mutlak sayılar şişik; **kıyas
ancak aynı koşulda ÖNCE/SONRA olarak** yapılabilir ve öyle yapıldı.

⚠️ **GÖRÜNÜRLÜK — kural gereği damgalıyorum.** `document.visibilityState`
bütün ölçümlerde `"hidden"` kaldı; paneli öne almayı denedim, olmadı.
🟢 Ama ölçüm **artefakt değil** ve bunu sayıyla gösteriyorum: ilk yüklemede
**katman 39**. Projenin düştüğü tuzakta bu sayı **2** oluyor (yalnız
başlangıç stili). ⇒ MapLibre katmanlarını KURDU; gizlilik yalnız **çizime
bağlı** ölçümleri vuruyor.
🔴 O yüzden `harita.loaded()` ve ekran görüntüsü **ölçüm sayılmadı** —
aşağıda `ölçülemedi` diye duruyor.

---

## ② 🔴 İŞİN ÇEKİRDEĞİ BENİM DOSYAMDA DEĞİL

Şartname bana `js/app.js` · `css/` · `denetim/` verdi. **`index.html`
listede yok** ve `CLAUDE.md §7` onu Oturum 1'e veriyor.

```
index.html:1078  <script src="data/devletler_harita.js">
index.html:1080  <script src="data/donemler.js">
index.html:1081  <script src="data/altlik.js">
index.html:1198  <script src="js/app.js">          ← EN SON
```

⇒ `js/app.js` çalıştığında **104 MB zaten ayrıştırılmıştır.** app.js'te
yapılacak hiçbir değişiklik o ayrıştırmayı kaldıramaz. Kazanç o üç satırın
kalkmasını gerektiriyor.

🔴 **Ve app.js'i async'e çevirmek DOĞRU ÇARE DEĞİL:** `donemler`,
`devletler2` gibi değişkenler dosyanın **tepe seviyesinde** kuruluyor
(app.js:194, :271) ve 7000+ satır onlara bağlı. Yükleyiciyi app.js'e
taşımak, açılış yolunu baştan yazmak demektir — şartnamenin *"kırılırsa
SİTE AÇILMAZ"* uyarısının tam hedefi. **Yapmadım.**
🟢 Doğru yer `index.html` (ya da app.js'ten ÖNCE yüklenen ayrı bir dosya).

**Aksaklık M-3104 ile bekletmeden bildirildi.**

---

## ③ ÖLÇÜM — Ⓐ ve Ⓑ, kontrol gruplu

Alet: `denetim/SINAV-FETCH-0907.html` · `?mod=a` ↔ `?mod=b`.
🔴 **Her yol AYRI sayfa yüklemesinde** — aynı sayfada ikisi ısınmış
bellekle ölçülür ve kontrol grubu bozulur.

### Ⓐ `<script>` (bugünkü yol)

| dosya | koşu 1 | koşu 2 |
|---|---|---|
| devletler_harita | 8.191 ms | 5.320 ms |
| donemler | 4.669 ms | 5.335 ms |
| altlik | 1.243 ms | 1.376 ms |
| **TOPLAM** | **14.105 ms** | **12.032 ms** |

### Ⓑ `fetch` + `JSON.parse`

| dosya | indirme | JSON.parse | toplam (k1) | toplam (k2) |
|---|---|---|---|---|
| devletler_harita | 682 / 875 | 1.941 / 2.243 | 2.623 | 3.118 |
| donemler | 269 / 325 | 2.317 / 1.435 | 2.585 | 1.760 |
| altlik | 1.363 / 504 | 347 / 485 | 1.710 | 990 |
| **TOPLAM** | | | **6.920 ms** | **5.868 ms** |

### 🟡 VE BİR TERSLİK ÖLÇÜLDÜ, SONRA KAPANDI

Koşu 1'de `altlik` Ⓑ'de **daha yavaştı** (1.710 ↔ Ⓐ 1.243). Tek ölçümle
*"fetch bazı dosyalarda kötü"* diye yazılabilirdi. Koşu 2 çürüttü: **990
ms**, Ⓐ'nın altında. Fark **indirme değişkenliğiydi** (1.363 → 504 ms).
📌 *Tek ölçüm ölçüm değildir* — ve bu, aynı gün üçüncü kez işe yaradı.

### Neden hızlanıyor

```
<script>  tarayıcı 95 MB'ı JAVASCRIPT KAYNAK KODU olarak ayrıştırır
          — ana iş parçacığında, bloke ederek
fetch     JSON.parse YEREL koddur; ve indirme asenkrondur
```
Node'da da ölçüldü (`ARAC-JSON-URET-0907.py` çıktısı): `devletler_harita`
**7.621 ms**, `donemler` **4.106 ms**, `altlik` **519 ms** saf ayrıştırma.

---

## ④ DÖNÜŞTÜRÜCÜ — `denetim/ARAC-JSON-URET-0907.py`

```
py denetim/ARAC-JSON-URET-0907.py            # KURU KOŞU (varsayılan)
py denetim/ARAC-JSON-URET-0907.py --yaz      # 🔴 data/ altına — KOŞU BİTİNCE
```
🟢 `--yaz` **`.petek.kilit` varsa REDDEDİYOR** — `§7`nin donukluk kuralı
araca gömülü, bir uyarı satırına değil.
🔴 Ayrıştırıcı yazmadım: dosyalar JavaScript, `node` + `vm` okuyor, **her
dosya izole bağlamda** (tek bağlamda `eval` sessiz ezme üretir, `§7`).
🟢 Globalleri **keşfediyor**, listelemiyorum — `Object.keys(ctx.window)`.

Çıktı ölçüldü:
```
devletler_harita  53,43 MB → 53,41 MB   anahtar: DEVLET_PARCALAR ·
                                        DEVLET_PARCA_HALKA · DEVLET_HARITA · URETIM_IZI
donemler          31,00 MB → 30,97 MB   anahtar: SERBEST · SERBEST_U · PETEKLER ·
                                        PARCALAR · PARCA_HALKA · DONEMLER · … (9)
altlik            10,54 MB → 10,53 MB   anahtar: ALTLIK · URETIM_IZI
TOPLAM            94,96 MB → 94,92 MB   (−0,04 MB)
```
⚠️ **Boyut kazanç DEĞİL** (−%0,04). Kazanç yalnız ayrıştırmada.

### 🔴 ŞARTNAME DÜZELTMESİ — `petek_govde.js`

Şartname üç dosya sayıyor: `devletler_harita` · `donemler` ·
`petek_govde`. **`petek_govde.js` tarayıcıya HİÇ İNMİYOR** — dosyanın
kendi başlığı *"index.html BU DOSYAYI YÜKLEMEZ. Yalnız üretim betikleri
okur"* diyor, ve 207 kaynağın listesinde geçmiyor.
🟢 Onun yerine **`altlik.js` (10,54 MB)** üçüncü ağır dosya. Hedef listesi
ona göre kuruldu.

---

## ⑤ `js/app.js` — GEOMETRİ KAPISI (yaptığım tek değişiklik)

Yükleyiciyi taşımadım (②). Yaptığım şey **geri düşüşün güvenliği**:

```
BUGÜN   geometri eksikse app.js:194 `window.DONEMLER.map` TypeError atar
        ⇒ site BOMBOŞ açılır, konsolda yalnız
          "Cannot read properties of undefined"
        ⇒ SEBEP (hangi dosya inmedi) HİÇBİR YERDE GÖRÜNMEZ
ŞİMDİ   kapı eksik globali ADIYLA söyler, ekrana kırmızı kutu koyar,
        ve `throw` eder — yarım harita, hiç haritadan kötüdür
```
🔴 Niçin şimdi gerekli: geçiş turunda yükleme yolu **iki hâlde birden**
bulunacak (`.js` VE `.json`). O turda bir dosya eksik kalırsa arıza
**adıyla** görünmeli.

### `C13` — İKİ DAL DA ZORLANDI

| dal | nasıl | sonuç |
|---|---|---|
| 🟢 GEÇME | sitenin kendisi (`/`) | `donemler` **524** çözüldü · kutu **ÇIKMADI** · konsol hatası **0** · `DEVLET_HARITA` 552 |
| 🟢 ATEŞLEME | `SINAV-GEOMETRI-KAPISI-0907.html` — app.js geometri `<script>`leri **OLMADAN** yüklendi | `throw` **ATTI**, mesaj eksik globali adıyla verdi, kırmızı kutu **DOM'da** |

Ateşleme mesajı birebir:
```
GEOMETRİ YÜKLENMEDİ — eksik: DONEMLER. Beklenen kaynak: data/donemler.js
(<script>) ya da data/donemler.json (fetch). index.html'deki satır duruyor mu?
```

### 🔴 VE SINAV ALETİM İLK KOŞUDA YANLIŞ RAPORLADI

Sınav `pre[style*="3a0d12"]` ile arıyordu ve **kutu YOK** dedi. Kutu
**vardı** — tarayıcı `style` özniteliğini yeniden yazıyor
(`background:#3a0d12` → `background: rgb(58, 13, 18)`).
⇒ Kusur ölçülen şeyde değil **ölçen alette**. Seçici içeriğe göre
düzeltildi, ikinci koşuda `kutu_var: true`.
📌 `§11`: *"eşleşme bulmak, doğru şeyi bulmak değildir"* — bugün bu
oturumda dördüncü vakam.

---

## ⑥ UYGULANACAK SATIRLAR — belgeliyorum, UYGULAMIYORUM

### Ⓐ `arac/uret_petek.py` (Oturum 0 · koşu bitince)
`devletler_harita.js` ve `donemler.js` yazıldığı yerde **aynı içeriği bir
de `.json` olarak** yazsın. Biçim `ARAC-JSON-URET-0907.py`nin ürettiğiyle
birebir: tek nesne, anahtarları `window.` adları.
🔴 **`.js` KALSIN** — geri düşüş yolu odur.
🟢 Ara çözüm: `--yaz` ile araç koşturulur, motor değişikliği sonraya kalır.

### Ⓑ `index.html` (sahibi kim ise)
```diff
-<script src="data/devletler_harita.js?v=rNN"></script>
-<script src="data/donemler.js?v=rNN"></script>
-<script src="data/altlik.js?v=rNN"></script>
+<script>
+// .json varsa fetch ile, yoksa <script> ile — GERİ DÜŞÜŞ ŞART
+(function () {
+  var H = ["devletler_harita", "donemler", "altlik"], v = "?v=rNN";
+  window.__GEO = Promise.all(H.map(function (a) {
+    return fetch("data/" + a + ".json" + v).then(function (r) {
+      if (!r.ok) throw 0;
+      return r.json();
+    }).then(function (o) {
+      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) window[k] = o[k];
+    }).catch(function () {              // 🔴 GERİ DÜŞÜŞ
+      return new Promise(function (c, h) {
+        var s = document.createElement("script");
+        s.src = "data/" + a + ".js" + v; s.onload = c; s.onerror = h;
+        document.head.appendChild(s);
+      });
+    });
+  }));
+})();
+</script>
```
ve `js/app.js` satırı `window.__GEO.then(...)` içine alınmalı (dinamik
enjeksiyon), yoksa app.js veriden önce koşar.
⚠️ **Bu diff'i BEN ÖLÇMEDİM** — `index.html`e dokunmadığım için
koşturulmadı. `SINAV-FETCH-0907.html` yalnız **yükleme yolunu** ölçtü,
bu bootstrap'ı değil. Damgası: **`ölçülemedi`**.

---

## ⑦ ÖLÇEMEDİKLERİM — açıkça

```
🔴 ÖLÇÜLEMEDİ  ⑥Ⓑ'deki index.html bootstrap'ı — dosya bende değil
🔴 ÖLÇÜLEMEDİ  gerçek sayfada domHazır'ın Ⓑ ile ne olacağı — aynı sebep.
               14,1→6,9 ms üç dosyanın YÜKLENMESİ; domHazır'a etkisi
               bundan KÜÇÜK de olabilir BÜYÜK de (asenkronluk kazancı)
🔴 ÖLÇÜLEMEDİ  görsel doğrulama — panel `hidden` kaldı, ekran görüntüsü
               zaman aşımına uğradı. app.js'in KOŞTUĞU başka türlü
               doğrulandı (`donemler` 524, konsol hatası 0), ama
               ÇİZİMİ görmedim
⚪ ÖLÇMEDİM    gzip etkisi · ikinci kademe (geometriyi tarihe göre bölme)
⚪ ÖLÇMEDİM    `bolgeler.js` · `sehirler.js` · `koridor*.js` — 1 MB altı
```

⚠️ **Ve tek bir sayı vaat etmiyorum:** *"domHazır 26,3 sn → X"* diyemem,
çünkü ölçtüğüm şey üç dosyanın yüklenme süresi, açılışın tamamı değil.
Şartname zaten hedef koymamıştı — *"düşüşün büyüklüğünü ÖLÇÜM belirler"*.
Ölçtüğüm düşüş: **bu üç dosyada %51.**

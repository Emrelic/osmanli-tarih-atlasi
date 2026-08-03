# YÜK — ÖNCESİ ÖLÇÜSÜ (A/B/C/D optimizasyonundan ÖNCE)

> ARAYÜZ 2, 4 Ağustos 2026. `YUK-SARTNAME.md` §④'teki beş ölçütün taban
> değerleri. **Bu dosya bir kıyas TABANIdır** — MOTOR 3'ün C/D/A işi bitince
> aynı beş ölçüt aynı yöntemle tekrar ölçülüp buraya "SONRASI" bölümü olarak
> eklenmeli, yoksa kazanç gösterilemez.

## Ortam — sayılar buna göre okunmalı

```
Tarayıcı     Chrome 148.0.7778.280 (Electron 42.7.0 / Claude Code Browser pane)
İşletim      Windows 10.0 (Win32)
CPU          navigator.hardwareConcurrency = 8
Bellek       navigator.deviceMemory = 8 GB (tarayıcının bildirdiği, GERÇEK RAM değil)
Sunucu       py -m http.server benzeri YEREL statik sunucu, http://localhost:8000
             ⚠️ GERÇEK AĞ DEĞİL — indirme süresi burada anlamsız, tele-baytı
             ayrı ölçtüm (aşağıda ①). Süre ölçütleri (②/④) yalnız PARSE+ÇALIŞTIRMA
             maliyetini yansıtıyor, GitHub Pages'teki gerçek ağ gecikmesini değil.
Damga        r750
```

⚠️ **Kritik sınırlama, bu oturumun BAŞINDAN BERİ var**: Browser pane bu ortamda
`document.hidden = true` ile açılıyor, yani sayfa hiç compositing/paint
yapmıyor (`performance.getEntriesByType("paint")` her zaman `[]`). **② "ilk
boyalı harita" GERÇEK anlamda ölçülemedi** — yerine `domContentLoaded`/
`loadEvent` (JS'in tamamının çalışıp DOM'un hazır olduğu an) proxy olarak
kullanıldı. Bu, gerçek ilk-boya süresinden muhtemelen biraz KISA (MapLibre'nin
kendi çizim/tile işi ayrıca sürer) ama parse+veri-kurma maliyetinin tamamını
kapsıyor — bugünkü darboğazın kaynağı zaten o.

---

## ① Açılışta inen toplam bayt — ÖLÇÜLDÜ (disk üzerinden, ham + gzip)

`index.html`'in yüklediği 42 yerel dosya (CDN'deki maplibre-gl.js hariç —
o değişmiyor, A/B/C/D onu etkilemez) tek tek diskten okunup Python
`gzip.compress(seviye=6)` ile sıkıştırıldı:

```
data/devletler_harita.js     39,76 MB ham    9,00 MB gzip
data/donemler.js             26,82 MB ham    7,48 MB gzip
data/altlik.js                 4,41 MB ham   1,63 MB gzip
kalan 39 dosya                  2,65 MB ham   0,79 MB gzip
──────────────────────────────────────────────────────────
TOPLAM (42 dosya)             73,64 MB ham   18,90 MB gzip
```

📌 Şartnamedeki 70,2 MB'tan biraz yüksek — beklenen: bu ölçümle şartnamenin
ölçümü arasında `olaylar_ek14.js` gibi yeni dosyalar eklendi, veri büyüdü.
**İki havuz (`DEVLET_PARCALAR` + `PARCALAR`) hâlâ toplamın ~%90'ı** —
şartnamenin teşhisi hâlâ geçerli, sayı kaymış olsa da oran aynı.

## ② İlk "hazır" an — domContentLoaded/loadEvent (paint YOK, bkz. ortam notu)

Önbellek DURUMUNA göre iki ayrı sayı — bu araçla gerçek "önbellek kapalı"
zorlanamadı (devtools seviyesi cache-disable erişimim yok), o yüzden İKİSİ
DE yazılıyor, tek sayı yanıltıcı olurdu:

```
SOĞUK (bu oturumun ilk yüklemesi, dosya/derleme önbelleği ısınmamış)
  1 ölçüm:  13.031 ms

ILIK (aynı sürüm damgası — tarayıcı HTTP önbelleği devrede, 3 tekrar)
  3695 ms · 3903 ms · 3501 ms   →  ORTANCA 3695 ms
```

⚠️ Gerçek kullanıcının İLK ziyareti SOĞUK'a yakındır (13 s bandı); bir SONRAKİ
ziyaret (aynı `?v=` damgası) ILIK'a yakındır. GitHub Pages'te ayrıca gerçek ağ
gecikmesi (~18,9 MB gzip indirme) BUNUN ÜSTÜNE eklenir — yerel sunucuda o
gecikme yok, yani üretimdeki gerçek süre muhtemelen SOĞUK sayısından da yüksek.

## ③ Heap — ÖLÇÜLDÜ (`performance.memory`, gerçek boya olmadan da çalışır)

```
usedJSHeapSize   452,4 MB · 453,8 MB · 452,4 MB · 453,9 MB  (4 ayrı taze yükleme)
totalJSHeapSize  453,5 MB
jsHeapSizeLimit  2.248,1 MB  (Chrome'un bu sekmeye izin verdiği tavan)
```

📌 Şartnamenin "~350 MB" tahmininden yüksek çıktı — tahmin yalnız 4,1 milyon
koordinat çiftini saymıştı; gerçek heap ayrıca DOM/MapLibre/uygulama durumunu
taşıyor. **~450 MB istikrarlı** (4 ölçümde ±1,5 MB), yani gürültü değil.

## ④ Dönem değiştirme gecikmesi — BUGÜN (gecikmeli yükleme YOK, hepsi bellekte)

`tarihAyarla(gi)` beş ayrı, birbirinden uzak döneme (1350/1550/1750/1900/1400)
art arda çağrılıp `performance.now()` farkı alındı:

```
157,3 ms  (ilk çağrı — JIT ısınmamış)
 41,0 ms
 41,3 ms
 43,2 ms
100,9 ms  (~500 yıl geri sıçrama, daha büyük yeniden hesap)
```

📌 Bu sayı **A'nın (gecikmeli yükleme) kıyaslanacağı taban**: bugün veri zaten
bellekte olduğu için maliyet yalnız YENİDEN ÇİZİM/HESAP (~40-160 ms). A
uygulandığında önbelleksiz bir döneme sıçrarken FETCH gecikmesi bu sayının
ÜSTÜNE binecek — SONRASI ölçümünde ayrı ayrı raporlanmalı (önbellekli sıçrama
vs önbelleksiz sıçrama), yoksa "yavaşladı" yanlış sonucu çıkabilir.

## ⑤ `denetle_yayin.py` durumu — taban (A/B/C/D'den ÖNCE, referans)

```
SONUÇ: İHLAL VAR — çıkış kodu 1
```

Ama bulgular **A/B/C/D ile İLGİSİZ**, hepsi bilinen/başka oturumların işi:
```
✗ yetim veri dosyası: olaylar_ek14.js (yeni parti, henüz bağlanmamış)
i yerlesimler_ek7.js — "bilerek bekliyor" (İskandinavya, yayın sonrası)
✗ üretim izi: data/altlik.js BAYAT (uret_petek.py değişmiş)
⚠ ÜRETİLİYOR AMA ÇİZİLMİYOR: URETIM_OLCU (metaveri, muaf olmalı) ·
  OLAYLAR_EK14 · YERLESIMLER_EK7 (ikisi de yukarıdaki "henüz bağlanmamış"ın
  aynısı)
```
⇒ **SONRASI ölçümünde bu liste BÜYÜMEMELİ** (küçülmesi bu oturumun işi değil,
büyümemesi A/B/C/D'nin bir yan etki açmadığının kanıtı).

---

## Özet tablo — SONRASI buraya eklenecek

| ölçüt | ÖNCESİ | SONRASI |
|---|---|---|
| ① toplam bayt (ham / gzip) | 73,64 MB / 18,90 MB | — |
| ② domContentLoaded (soğuk / ılık ortanca) | 13.031 ms / 3.695 ms | — |
| ③ heap (usedJSHeapSize) | ~453 MB | — |
| ④ dönem değiştirme (JIT sonrası ortalama) | ~42 ms (bellekte, önbellek kavramı yok) | — |
| ⑤ denetle_yayin.py | İHLAL VAR (A/B/C/D dışı 4 kalem) | — |

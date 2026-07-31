# YAMA — açılış rastere bağlı olmasın (ikinci deneme)

**Dosya:** `js/app.js` · **Taban:** r307 (`e85b9cf`) · **Uygulayan:** KOORDİNATÖR
**Sınav:** taze yüklemede `haritaHazir` true ve `.sehir` > 0

> ⚠️ İki yerde değişiklik var. İkisi de **tam metin eşleşmesi**; başka yere
> dokunulmuyor. Uygulanacak sıra önemli değil.

---

## DEĞİŞİKLİK 1 — satır 541

### ESKİ (aynen)
```js
harita.on("load", function () {
  altlikKur();
```

### YENİ (aynen)
```js
// ⚠️ İKİNCİ DENEME. Birincisi (r298) `styledata` kullanıyordu ve yayını boş
// haritaya düşürdü; sebebi HÂLÂ AÇIKLANAMADI (stil hiç yüklenmiyordu, tek
// kiremit isteği yoktu). Bu yüzden bu sürüm olay akışını DEĞİŞTİRMİYOR:
// `load` yolu aynen duruyor, yeni yol yalnız o hiç gelmezse devreye giriyor.
var kurulumYapildi = false;
function haritaKurulum() {
  if (kurulumYapildi) return;
  kurulumYapildi = true;
  altlikKur();
```

---

## DEĞİŞİKLİK 2 — satır 859-863 (dosyadaki `});` ile biten blok)

### ESKİ (aynen)
```js
  harita.on("zoom", zoomSinifi);
  window.zoomEsigi = zoomEsigi;
  zoomSinifi();
  guncelle();
});
```

### YENİ (aynen)
```js
  harita.on("zoom", zoomSinifi);
  window.zoomEsigi = zoomEsigi;
  zoomSinifi();
  guncelle();
}
harita.on("load", haritaKurulum);
// EMNİYET SUBABI — normal yol bu değil. `load`, stilin VE kaynaklarının hazır
// olmasını bekler; kaynaklardan biri dış bir raster (Esri). Bugün hızlı, ama
// yavaşladığı/engellendiği/kullanıcı çevrimdışı olduğu gün atlas hiçbir sınır
// ve etiket çizmez — hata da vermez. `PLAN-KATMANLAR` Esri'yi varsayılan
// kapalı yapıyor; kapatılabilen bir katman açılışın ön şartı olamaz.
// ⚠️ Ve subap SESSİZ OLMAYACAK: sessizce devreye giren bir yedek, asıl yolun
// bozulduğunu gizler — bugün tam bu sınıftan dört kusur görüldü.
setTimeout(function () {
  if (kurulumYapildi) return;
  if (!harita.isStyleLoaded()) return;      // stil yoksa addLayer patlar
  console.warn("Atlas: kurulum EMNİYET SUBABIYLA koştu — `load` gelmedi. " +
               "Altlık kiremitleri ulaşılamıyor olabilir.");
  haritaKurulum();
}, 4000);
```

---

## r298'den farkı — ve neden bu sefer daha güvenli

| | r298 (bozuk) | bu yama |
|---|---|---|
| `load` yolu | korunuyordu ama **ikinci bir olay** eklendi (`styledata`) | **tek olay**, aynen duruyor |
| yeni yolun tetiği | `styledata` — **ne zaman ateşlediği varsayımdı** | `setTimeout` — varsayım gerekmiyor |
| normal durumda davranış | olay akışı değişiyordu | **birebir aynı** |
| yedek devreye girerse | sessiz | **konsola uyarı** |

🔴 Açıkça söylüyorum: **r298'in neden çöktüğünü hâlâ bilmiyorum.** Bu yama onu
açıklamıyor, *tekrarlamamak* üzere kurulmuş. `styledata` hiç kullanılmıyor.

---

## Sınav

```js
// taze yükleme, 6 sn bekle
JSON.stringify({haritaHazir: haritaHazir, kurulumYapildi: kurulumYapildi,
                styleLoaded: harita.isStyleLoaded(),
                sehir: document.querySelectorAll('.sehir').length,
                devlet: document.querySelectorAll('.devlet-etiket').length})
```
**Geçme ölçütü:** `haritaHazir true` · `.sehir > 0` · konsolda subap uyarısı **YOK**
(yani normal `load` yolu koşmuş; uyarı çıkarsa yedek devreye girmiş demektir ve
o da bilgi — ama normal durumda çıkmamalı).

**İkinci sınav (asıl amaç):** Esri'yi erişilemez yap, sert yenile.
Beklenen: sınırlar ve etiketler **yine geliyor**, konsolda subap uyarısı **var**,
yalnız arka plan fotoğrafı yok.

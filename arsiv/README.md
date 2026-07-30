# arsiv/ — işi bitmiş, artık okunmaması gereken dosyalar

Buradaki dosyalar **tarihî kayıt** olarak duruyor. `data/` altında olsalar
`arac/girdi.py`'nin izin listesine yanlışlıkla eklenebilirlerdi ve bu sessiz
veri bozulması demekti. Bu yüzden taşındılar.

## `yerlesimler_iran.BIRLESTIRILDI.js` — 126 nokta

Oturum 4'ün çıktısı. **126 noktanın 126'sı `data/yerlesimler.js` içinde zaten
var** (ölçüldü, 2026-07-30). Yani merge tamamlanmış, dosya artık yalnız kopya.

## `yerlesimler_ortaasya.BIRLESTIRILDI.js` — 16 nokta

Oturum 11'in çıktısı. **16 noktanın 16'sı `data/yerlesimler.js` içinde zaten
var.** Aynı durum.

## Neden silinmedi de taşındı

İkisinin de başında oturumların kaynak notları, `kur:`/`bit:` gerekçeleri ve
TDV atıfları var. Merge sırasında bu yorumların bir kısmı ana dosyaya taşınmadı;
bir kayda "bu tarih nereden geliyor" diye sorulursa cevap burada olabilir.

## ⚠️ Buradaki hiçbir dosya `data/` altına geri konmamalı

Geri konursa `girdi.py`'nin ad çakışması kontrolü `ValueError` atar ve üretim
başlamaz — yani zarar görmez ama zaman kaybettirir. Doğru davranış: buradaki
dosyaları yalnız **okumak.**

## Hâlâ AKTİF OLMAYAN ama arşiv OLMAYAN partiler

Bunlar `data/` altında kalmaya devam ediyor çünkü işleri bitmedi:

| Dosya | Nokta | Neden aktif değil |
|---|---|---|
| `data/yerlesimler_avrupa.js` | 228 | 15 devlet kimliği `renkler.py`'de tanımsız |
| `data/yerlesimler_asya.js` | 344 | 98 kimlik tanımsız + harita penceresi 62°D'de bitiyor |

Aktifleştirme sırası: `renkler.py`'ye DSATUR ile kimlik → merge provası →
`girdi.py` izin listesi → üretim.

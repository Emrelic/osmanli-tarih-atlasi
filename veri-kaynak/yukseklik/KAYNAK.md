# YÜKSEKLİK VERİSİ — kaynak künyesi

| alan | değer |
|---|---|
| veri seti | **ETOPO 2022 v1**, 30 arc-saniye, yüzey yüksekliği (ice surface) |
| kurum | NOAA · National Centers for Environmental Information (NCEI) |
| lisans | **kamu malı** — ABD devlet eseri, kısıtsız kullanım |
| DOI | 10.25921/fd45-gt74 |
| indirme | https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO2022/data/30s/30s_surface_elev_gtif/ETOPO_2022_v1_30s_N90W180_surface.tif |
| indirilme | 2026-08-15 17:13 |
| kırpma | atlas penceresi bbox: lon -25…146 · lat -11…82 |
| dönüşüm | float32 → **int16** (metre), deflate + predictor 2 |
| yerel dosya | `etopo2022_30s_atlas.tif` · 597.1 MB |

## Niçin bu veri

`ALTYAPI ①` yükseklik/eğim istiyor; depoda hiç yoktu ve `maliyet.py`
sürtünme motoru eğimsiz çalışıyordu. Üç aday ölçüldü:

- **ETOPO 2022 30"** 🟢 seçildi — tek dosya, `/vsicurl/` ile kırpılabilir
- GMTED2010 30" — eşdeğer kalite, ama 30 ayrı karo + birleştirme adımı
- SRTM 90 m — 🔴 **elendi**: yalnız 60°K'ye kadar, atlas 82°K'ye çıkıyor

## Ne YAPILMADI

- Deniz altı değerleri **silinmedi**. Maskeleme motorun işi; veriyi
  kırpmak geri alınamaz, maskelemek alınabilir.
- Eğim çarpanı **uydurulmadı** — bilinen güzergâh üzerinde ölçülerek
  ayarlanacak (`ALTYAPI §1.2b`nin dersi: ağırlık tablosu bir kez
  uydurulmuştu, ölçüm onu değiştirdi).

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
| yerel dosya | `etopo2022_30s_dunya.tif` · 597,1 MB · 43200×17280 · sha256 `7bb4779f…ed13` |
| ikinci dosya | `etopo2022_30s_atlas.tif` · 183,4 MB · 20520×11160 · sha256 `4d660c82…1121` |

🔴 **DÜZELTME (4 Ekim 2026, UMIT ölçtü):** bu satır *"yerel dosya:
`etopo2022_30s_atlas.tif` · 597.1 MB"* diyordu — **iki dosyayı karıştırmış.** 597 MB olan
**`dunya.tif`**; `atlas.tif` **183 MB**. Teşhis: indirildiği gün tek dosya vardı ve adı
`atlas.tif`ti, sonra `dunya`/`atlas` olarak ayrıldı; belge ayrılmayı takip etmedi.
⚠️ **İki makinede bağımsız doğrulandı** (UMIT + EMRELIC), hash'ler birebir eşit; EMRELIC'in
kopyası 4 Ekim koşusunda başarıyla kullanıldı ⇒ **bilinen-iyi referans**.
📌 Dosyalar `.gitignore:64` gereği commitlenmez; her makineye **ağ içinde kopyalanır** ya da
`py arac/yukseklik_indir.py` ile indirilir. Kopyadan sonra **hash doğrulanır** —
*"kopyalandı"* bir kanıt değildir.

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

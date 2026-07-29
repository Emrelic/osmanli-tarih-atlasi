# veri-kaynak/ — harita motorunun girdi verisi

`arac/uret_petek.py` bu klasörden okur. **Bu dosyalar olmadan harita üretilemez.**

| Dosya | Ne için |
|---|---|
| `ne_10m_land.geojson` | Kara maskesi — bütün petekler buna kırpılır, sınırlar kıyıya oturur |
| `ne_10m_lakes.geojson` | 117 büyük göl; kara maskesinden çıkarılır |
| `ne_10m_rivers.geojson` | 25 adlı akarsu; petek sınırları nehir yataklarına yaslanır |
| `ne_10m_geography_regions_polys.geojson` | 61 dağ sırası; petek sınırları sırtlara yaslanır |

Kaynak: **Natural Earth** (naturalearthdata.com) — kamu malı, 10m çözünürlük.
Orijinal lisans ve açıklama: `KAYNAK-LICENSE.md`, `KAYNAK-README.md`.

## Neden depoda duruyor

Bu dosyalar bir dönem geçici bir klasörde (`%TEMP%\claude\…\scratchpad\basemaps`)
tutuluyordu. Temp temizlense ya da o oturum kapansa **harita motoru tamamen
çalışmaz hâle gelecekti**: 567 yerleşimlik veri elde kalır ama haritaya
dönüştürülemezdi. 27 MB'lık bu klasör, motorun çalışabilirliğinin bedelidir;
depoda tutulması bilinçli bir karardır.

## Burada OLMAYAN dosyalar

Eski `arac/uret_donemler.py` (☠️ kullanılmıyor) ayrıca **historical-basemaps**
yıl kesitlerini (`world_1300.geojson` … `world_1930.geojson`, ~28 MB) ve
`ne_10m_countries.geojson` dosyasını okuyordu. O motor terk edildiği için bu
dosyalar depoya alınmadı. Gerekirse:
github.com/aourednik/historical-basemaps

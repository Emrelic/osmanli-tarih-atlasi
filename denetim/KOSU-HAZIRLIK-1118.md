# KOŞU HAZIRLIK — 18 Kasım 2026 (KASA 17 ölçümü)

**Koşu bilgisi:** 🔴 **KOŞU YALNIZ EMRE'NİN AÇIK EMRİYLE başlar** (Emre emri, 18 Kasım 2026; EMRELİC 17 ilettiyse aktarıldı).
Kimse — HAVVA, KASA, başka oturum — Emre söylemeden koşuyu ya da koşu zincirini tetiklemez; kapı/denetle/yayın işleri sürer.
Emre emri verirse: `main` (en güncel) · **Temp dışında** bir klasörden · **HAVVA'da** (`py arac/uret_petek.py`, 7-8 saat; önce `KOSU-YAYIN.md`).
Tarih kısıtı (21 Kasım 19:00) artık kendi başına koşu izni DEĞİLDİR.

## Ölçümler (kendi ağacımda `origin/main` 7bcbf15a; makine KASA)
| Kalem | Sonuç |
|---|---|
| Motor/tuz dosyaları main'de | `arac/uret_petek.py` (seyrelt `_halka_sade` düzeltmesi, kapı 13) · `arac/dolgu.py` (`kosudan(ufuk_gun=)`) · `arac/renkler.py` (BOYALAR +3 künye, kapı 16/17). `girdi.py`/`motor_onbellek.py` değişmedi. Tuz değişti ⇒ **tam yeniden inşa** (önbellek geçersiz) — zaten planlı |
| `data/altlik.js` | kapı 13'te `uret_altlik.py` ile yenilendi (11,63 MB); koşudan sonra `denetle_yayin` "GERÇEK BAYAT" verirse tekrar `py arac/uret_altlik.py` |
| `paketle yenile` / `surum_damgala` | kapı 19 sonrası temiz (yeni değişiklik yok); veri değişirse HAVVA kendisi koşturur |
| Denetim | `denetle.py` 0 · `denetle_yayin.py` 0 (kapı 19) · D1 sahipsiz tavanı 296 · çeviri tavanı: arayüz 79, devlet 27 |
| Disk | `D:` 110 GB, 48 GB dolu, **63 GB boş** (KASA). HAVVA'nın boş yerini koşudan önce ölç |
| Repo boyutu | `.git` size-pack **2,22 GiB** (limit 5 GiB → %44) · tek dosya sınırı 95 MiB: en büyük izlenen `data/ufuk_bant_parcalar*.js` 45 MB |
| `.git` çöpü | `objects/pack/` içinde **11 adet `tmp_pack_*`**, toplam **427 MB** + 3 `tmp_obj_*` + `worktrees/kasa-17-kasim-654cf1/refs` — **yalnız raporlandı, silinmedi** (yarım kalmış push/fetch artığı olabilir; silme kararı Emre/KASA 16) |

## Dikkat (HAVVA notları)
- Koşuyu **Temp dışında** başlat: Defender `data/yerlesimler_hint_adalar.js`'i Temp kopyasında karantinaya alıyor.
- DEM koşu klasörüne ayrıca kopyalanmalı (HAVVA notu, `UFUK-BANT-DAL-NOTU-1117.md`).
- B dolgu döngüsü dala UYGULANMADI (`MOTOR_B_DOLGU` KAPALI); yalnız `seyrelt` düzeltmesi + `ufuk_gun` parametresi var.
- Leman Gölü 121 km² beyanlı borç (Cenevre 1536, 40→56 saat bant geçişi).
- Motor çıktısı (devletler_harita.js, donemler.js, petek_govde_parca.js…) main'de olmayan **üretilmiş** dosyadır; koşu sonrası iniş `KOSU-YAYIN.md` zinciri.

## Site yükleme kontrolü (ufuk bant dosyaları)
- `index.html`'de `ufuk_bant*` için `<script src>` **yok** (yalnız bir yorum satırı): dosyalar `js/app.js` `UFUK_DOSYALAR` ile **tembel** yüklenir (`ufukYukle`, 7/10 gün seçilince; `ufuk_bant_parcalar_2.js … _N.js` aynı sırayla ardından).
- Tembel dosyalar: `ufuk_bantlari_ust.js` 15,4 MB + `ufuk_bant_parcalar.js` 45,0 + `_2` 45,0 + `_3` 12,6 = **~118 MB ham**; yalnız ufuk bandı istendiğinde inecek (GitHub Pages sıkıştırır, ham sayı üst sınır).
- Açılışta yüklenen (index.html `<script src>`): **157 dosya, 43,0 MB ham** (en büyükleri `paket_05` 6,3 · `devlet_harita_ust` 5,6 · `paket_09` 3,6 · `paket_31` 3,3 · `bolge_pencere` 2,8 MB). Ufuk bantları açılışa eklenmiyor.
- Ölçülmedi: tarayıcıda gerçek ağ aktarımı (sıkıştırılmış bayt) ve tembel yükün ilk kullanım gecikmesi.

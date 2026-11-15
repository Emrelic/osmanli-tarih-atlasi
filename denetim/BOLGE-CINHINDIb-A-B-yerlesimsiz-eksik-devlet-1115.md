# BOLGE-CINHINDIb-A/B-1115 — yerleşimsiz künye ve eksik devlet (Çinhindi, 2. dalga)

Dal `umit-1115b-cinhindi`. Sonuç: **A ve B'de veri YAZILMADI** — gerekçe aşağıda; yalnız C belgesindeki 11 kaynaklı madde yazıldı (`BOLGE-CINHINDIb-C-seyrek-1115.md`).

## Neden yazılmadı (ölçülmüş engeller)
1. **Koordinat kaynağı yok.** Yeni yerleşim noktası için "kaynaklı/standart coğrafî" koordinat şart; bu oturumda okunan tam metinler (Harvey 1925, Hall 1981, JSS 93) koordinat vermez, standart gazetteer (GeoNames/Natural Earth) ayrıca açılıp yerleşim başına doğrulanmadı. Tahminle koordinat yazılmadı (Lovek, Launggyet, Luang Prabang-Vientiane dışı Champasak vb.).
2. **Pencere kaynağı gün düzeyinde yok.** Hall/Harvey yalnız yıl/ay verir; yeni yerleşimin `s:` f/t kırılması için Değişmez 2 ±30 gün kuralı, yıl hassasiyetli madde ile yalnız `YYYY-01-01` pencereleriyle karşılanır; bu pencereler komşu devletle (D1) çakışma riskini artırdığı için denetle (sıra kilidi `denetle-umit`, bu oturumda 5/5 sırada bekledi) ölçülemeden yazılmadı.
3. **Yeni dosya = tuz.** Yeni `data/yerlesimler_cinhindi_1115b.js` `arac/girdi.py` GIRDI_DOSYALARI'na girmeden okunmaz; girdi.py tuz dosyasıdır (dokunulmadı). Mevcut ek dosyalara ekleme seçeneği (yerlesimler_ek*.js) kaynaklı koordinat yokken anlamsızdı.

## Künye bazında durum (birinci dalga listesine göre)
| aday | durum | not |
|---|---|---|
| Arakan (madde 0) | 4 madde yazıldı (C belgesi) | Mrauk U 1430/1433 çelişkisi beyanlı; `arakan.f`/Launggyet çakışması KASA kararı (birinci dalga önerisi: `arakan.f` 1430'a ya da Launggyet'e katla) |
| Đinh, Hậu Trần, Lê Trung Hưng/Trịnh | yazılmadı | Toàn thư/Taylor okunamadı; `__BOSLUK__` Hanoi 968-980 için ayrı kaynak şart |
| Pinya/Sagaing/Myinsaing | yazılmadı | Harvey'de Pinya/Sagaing anlatımı var (okunmadı: ilgili bölüm taranmadı) |
| Luang Prabang/Vientiane/Champasak ayrı künye | yazılmadı | Hall 1707 ve 1713 yılını verir (C belgesi 1707 maddesi); ayrı künye ve pencere atamaları KASA kararı |
| Lan Xang (Nokéo Koumane 1591-92 birleşme) | madde yazıldı | künye-içi |
| Panduranga 1832, Tây Sơn→Nguyễn 1802, Chakri/Thonburi günleri, 1767 boşluğu, Ayutthaya 1569/1584 | yazılmadı | tam metin yok (birinci dalga ile aynı engel) |
| Kawila Lan Na restorasyonu | yazılmadı | Kirigaya JSS 102 PDF'i adı bulundu, okunmadı |

## Öneri
Koordinat ve gün için gazetteer + Toàn thư çevirisi (Taylor 2013 / Cushman) okunabilen bir makinede (EMRELİC) bu kalemler yeniden açılmalı; yerleşim dosyası seçimi KASA'dan (girdi.py kuralı).

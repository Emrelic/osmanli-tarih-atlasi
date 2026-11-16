# BOLGE-ISKANDINAV — Adım 5: Renk (1115c)

Ölçüm: `py arac/renk_olc.py` (bu dal, çıktısı scratchpad `isk-renk.txt`; çıkış 0). `renkler.py`'a dokunulmadı; öneri ayrıca `denetim/RENK-ONERI-1115c-iskandinav.md`.

## Bölge künyeleri ve BOYALAR
Kontrol edilen 19 bölge künyesinin (norvec-kralligi … itilaf-emaneti, grep ile) hepsi `BOYALAR`da tanımlı (0 eksik); diğer künyeler kontrol edilmedi. Künyede `harita:` alanı olan: isvec, danimarka, norvec, finlandiya, estonya, letonya, litvanya, lehistan, prusya; `harita:` alanı olmayan ama `BOYALAR`'da anahtarı bulunan: norvec-kralligi, isvec-birlik-oncesi, livonya-tarikati, teuton-devleti, riga-*, kurland-dukaligi, finlandiya-buyuk-dukaligi, schleswig-holstein, litvanya-buyuk-dukalik (bunlar `boya_gerekli:true` ile id'den boyanır).

## Renk ölçüm bulguları (bölgeyle ilgili satırlar)
- **`finlandiya-buyuk-dukaligi` #828705 — `northumbria`, `soissons-devleti` ile 'BEYAN EDILMEMIS PAYLASIM'**: üçü de zamanda/uzayda ayrık (1809-1917 Fin / 7.-10. y.y. İngiltere / Frank) → zararsız, ama `PAYLASIM` beyanı eksik. Öneri: PAYLASIM'a yaz.
- **`schleswig-holstein-1848` #a36675 — `palenque-baak` ile paylaşımlı**: künyede yerleşim yok, boyanmaz → zararsız.
- **`kraliyet-prusyasi` #f04766 — 11 künyeyle paylaşımlı**, yerleşim yok → zararsız (K9).
- **`norvec-kralligi` #0b1650→#202460**: L* düzeltmesi listesinde (L*=56.7 satırı) — koyu lacivert, komşu `isvec-birlik-oncesi` / `danimarka` ile ΔE kontrolü: renk_olc 'komşu ΔE' tablosunda bu üçlü AYIRT EDİLEMEZ listesinde **çıkmadı** (ölçüm çıktısında yalnız Hint/Çin/İngiltere/Laos/Papalık satırları 'AYIRT EDİLEMEZ' diyor).
- 'AYNI HEX'İ PAYLAŞIP EŞZAMANLI VE 600 KM'DEN YAKIN: **0 çift**.

## Öneri (yalnız yazı)
1. `finlandiya-buyuk-dukaligi` hex paylaşımını `PAYLASIM`'a ekle (zararsız ama uyarıyı susturur).
2. Başka renk değişikliği önerilmiyor.

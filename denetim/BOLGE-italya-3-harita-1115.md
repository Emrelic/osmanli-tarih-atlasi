# BOLGE italya — Adım 3: harita uyumu (15 Kasım 2026)

Ölçüm: worktree `umit-1115-bolge-italya` (origin/main 8fb10bdf1 + adım 7 düzeltmeleri); `py arac/odak_olc.py` ve `py arac/denetle.py` (tam koşu, UMIT). Denetle **bölge-süzgeçli değildir**: sayılar bütün dünya içindir; bölgeye özgü satır çıkarımı aşağıda belirtilmiştir.

## 1. Odak çözümü (yer_id/odak_yer → atlas yerleşim adı)
`odak_olc.py`: **ÇÖZÜLMEYEN ODAK ATFI = 0 kayıt** (düzeltmelerden sonra; yeni `odak_yer:["Modena"]` ×2 ve Ferrara/Modena maddesi çözülüyor). Künye-içi kronolojide odaksız 8 madde (`odak_yer`/`yer_id` boş) adım 2'de sayıldı; harita kamera odağı yalnız onlara yok.

Sorunlu odak: `urbino-dukaligi` maddeleri `odak_yer:["Rimini","Roma"]`/`["Rimini"]` — Urbino adlı yerleşim yok (adım 4); kamera Rimini'ye gidiyor (≈ 60 km). Hata değil, yer ikamesi; Urbino yerleşimi gelince değişmeli.

## 2. Kırılma uyumu (Değişmez 2 / 2s / 2i / 2t) — bütün atlas
- **Değişmez 2: 760 kırılma, 0 açık** (✓).
- **2i (işgal): 349 kırılma, 0 açık** (✓).
- **2s (yabancı): 3698 kırılma, 154 AÇIK (tavan inf), 871 kapsam dışı** — İtalya içi 1000-1550 kırılmalarının çoğu "KAPSAM DIŞI" (Osmanlı küresine >2014 km) sayılır. İtalya'ya özgü AÇIK sayısı denetle çıktısından süzülmedi (**ölçülmedi**; `--ayrinti` ile liste).
- **2sk: tavan aşıldı (5927 > 5892)**: "yer düzeyinde doğrulanmamış kapanış arttı". Bu oturumun değişiklikleri yalnız `devletler.js` künye-içi kronolojisidir (D2 evreni `olaylar*.js`/`kronoloji_sinir*.js`); `origin/main`de zaten aşım olup olmadığı AYRI worktree'de ölçülmedi — **aşımın kaynağı bu oturum değil** (D2 evrenine bir satır yazılmadı), ama kanıt olarak baseline ölçümü yapılmadı.
- **2t: 167 kırılmasız madde**, tavan inf; İtalya'ya özgü satır süzülmedi.

## 3. Eksik / fazla kırılma (İtalya, adım 4 kaynaklı)
**Eksik kırılma** (künye var, pencerede kırılma yok → haritada değişim görünmüyor):
1. Verona 1164..1277 `__BOSLUK__` içinde verona-komunu→ezzelino→della-scala kırılmaları yok.
2. Capua 0900-1135, Aquileia 1077-1281, Pavia 1100-1359, Trento 1027-1803, Torino 0940-1091: künye var, pencere yok.
3. Korsika 1755-1769 ve 1794-1796 siyasî pencereleri yok.

**Fazla/çakışan kırılma:** `padova-carrara` (1318) / `carrara` (1345) ikizi: Padova penceresi 1318-07-25 komün sonunda BOŞLUK açar, 1345'te `carrara` başlar; ikiz künye 1318'de başlıyor → kırılma 27 yıl geç.

## 4. D4 ailesi (künye aşımı) — bütün atlas
Değişmez 4: 0 hayalet dönem · 4c: 0 dönem devletin ölümünü aşıyor · 4d: 0 · 5: 0 çelişki. **İtalya künyelerinde D4c ihlali yok.**
`modena` künye t'si penceredeki 1859-06-11 ile uyumlu; `ferrara` t=1859-01-01'e rağmen Ferrara/Modena pencereleri `ferrara` kimliğini yalnız 1598-01-29'a dek kullanıyor (aşım yok).

## 5. Değişmez 8 / 3 / 7
D8: ana checkout'ta ölçülemez (bilgi). D7 sorgusuz enklav 2505 (beklenen 731): bütün atlas; İtalya payı ölçülmedi.

# BOLGE-almanya · Adım 3 — Harita uyumu (UMIT, 15 Kasım 2026)

Ölçüm: `py arac/odak_olc.py` (worktree, origin/main 8fb10bdf1): **ÇÖZÜLMEYEN ODAK ATFI 0**. `--yay-dogrula` kapalı (geometri boş doğrulaması koşulmadı). `denetle.py` (Değişmez 2/3/8) bu oturumda **KOŞULMADI → ölçülmedi** (bölge sonu planı; ayrı worktree'de coz-c gerekir ve veri değişikliği yapılmadığından yeni ihlal oluşamaz).

## Madde ↔ yer bağı (406 madde)
- yer_id/odak_yer taşıyan: 382; taşımayan: 24 (çoğu yerleşimi atlasta olmayan Hohenstaufen/Prag benzeri yer_kon maddeleri).
- Künye-içi (devletler.js `kronoloji`) 175 madde yer_id taşımaz; haritada kamera `baskent`e düşer.
- Maddesi olup yerleşimi atlasta olmayan: Worms (Luther 1521 + Worms Diyeti 1495 maddelerinin yer'i; yerleşim kaydı `s:[]`, bit:1281), Speyer, Bamberg, Passau, Paderborn, Danzig/Gdańsk (yalnız yer_kon).

## Eksik kırılma (Değişmez 2'ye bakan, yazılmış sınır olan ama haritada kırılması olmayan)
1. **Mainz 1797-1814**: kronolojide Ren sol yakası Fransa'ya (Campo Formio 17 Ekim 1797 / Lunéville 9 Şubat 1801) ve Mainz 1798-1814 Fransız dönemi var; Mainz yerleşimi 1281-1945 kesintisiz `almanya`. Aachen/Trier/Köln'de 1801-1815 `fransa-cumhuriyet` penceresi VAR — Mainz, Koblenz-Bingen çevresi tutarsız. (Kuyruk dosyasına.)
2. **Hamburg 1510, Lübeck 1226, Bremen 1646** künye/f günleri ile yerleşim `s:` kırılması yok: hâlâ `almanya` boyalı; künye kronolojisi madde taşıyor ama haritada karşılığı yok. Değişmez 2'ye göre kırılma yokken madde sorun değil; ama Emre'nin ilkesi (madde okununca harita değişmeli) ihlal.
3. Brandenburg-Prusya 1415: Berlin penceresi 1415'te `brandenburg-prusya`'ya geçiyor (var). Magdeburg 1680 (var).
4. Konstanz 1548 `avusturya` penceresi var; kronolojide 1548 madde adlanmış mı? — ölçülmedi.

## Fazla kırılma
Ölçülmedi (denetle çıktısı yok). Not: Strazburg 1681-09-30 (Fransa), Stralsund 1648 (İsveç), Basel 1501 (İsviçre) pencereleri var; her birinin ±30 gün madde eşleşmesi denetle'ye bırakıldı.

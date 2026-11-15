# BOLGE italya — Adım 5: renk (15 Kasım 2026) — `renkler.py`'ya DOKUNULMADI

Ölçüm: `arac/renkler.py` BOYALAR (2246 kimlik) × 119 italya künyesinin `harita:` anahtarı (yoksa `id`). `py arac/renk_olc.py` bu oturumda koşturulmadı (veri paleti değişmedi; yalnız künye-içi kronoloji/kaynak alanı değişti).

## 1. Anahtar/renk eksikliği
- Anahtarı BOYALAR'da olmayan italya künyesi: **0** (`saluzzo-markizligi` → `harita:"saluzzo"`, `italya-cumhuriyeti` → `harita:"italya"` çözülüyor; kimlikle arandığında "yok" görünür, bu sahte alarmdır).

## 2. Aynı rengi paylaşan çiftler/üçlüler (BOYALAR içinde)
`renkler.py` yükleme çıktısı **"BEYAN EDİLMEMİŞ PAYLAŞIM"** uyarısı veriyor; İtalya künyelerinden olanlar:

| Renk | Kimlikler | Hüküm |
|---|---|---|
| #006042 | milano-dukaligi, visconti | Aynı polity/harita anahtarı (`milanoduka`) — kasıtlı |
| #b484f3 | floransa, toskana | aynı harita anahtarı `toskana` — kasıtlı |
| #24de24 | savoya, sardinya-piyemonte | aynı `sardinya` — kasıtlı |
| #74a074 | italya, italya-cumhuriyeti | aynı `italya` — kasıtlı |
| #7a005c | ferrara, modena | iki künye, harita anahtarları farklı (`ferrara`,`modena`) ama aynı polity (Este); renk-açıklık geçişinde mantua ile ΔE=19,6 (renkler.py log) |
| **#4d82a8** | montferrat-markizligi, roma-cumhuriyeti-1798, korsika-cumhuriyeti, megara-hyblaia | **Çakışır:** zaman/yer olarak ayrışır (Montferrat 1000-1708 Piyemonte; Roma 1798-99; Korsika 1755-69; Megara Hyblaia antik) — ortak sınır yok, pratikte sorun yok ama `PAYLASIM`a yazılmamış |
| **#05eba2** | trento-piskoposlugu, ravenna-eksarhligi, sybaris, (ve ~18 başka kimlik) | zamansal ayrışma (Ravenna 584-751, Trento 1027-1803 pencerede kullanılmıyor) |
| #b0ac42 | arborea, visconti-signoria | ikiz künye; Sardinya/Milano farklı yer |
| #8fe878 | padova-carrara, himera | zamanca ayrık |
| #d4adf9 | malta-ingiliz, malta-fransiz, zankle-messana | Malta işgal/himaye aynı ada, ardışık — kasıtlı olabilir |
| #f14a71 | anglo-korsika-krallik, lombardiya-venedik, bruttii-birligi | zamanca ayrık |
| #52e8f6 | sardinya-aragon, roma-cumhuriyeti-1849 | zamanca ayrık |
| #9364b8 | malta-kolonisi, etrusk-tarquinia | zamanca ayrık |
| #48ce8d | insubres-kabile-devleti, kyme-cumae | zamanca ayrık |

## 3. Komşuluk riski (aynı anda, yan yana, benzer renk)
`renkler.py` ölçümü (log): `ferrara`/`modena` #7a005c ile `mantua` ΔE=19,6 — Po vadisinde 1598-1708 arası üç Este/Gonzaga petek yan yana; ΔE<20 düşük ayırt edilebilirlik. Öneri: `mantua` veya `ferrara/modena` tonu kaydırılmalı (**tuz dosyası, KASA kararı**). `renk_olc.py` koşturulmadı → diğer İtalya komşu çiftleri ölçülmedi.

## 4. Ölü/kullanılmayan renk
24 künye pencerede hiç kullanılmadığı için BOYALAR kaydı **ölü renktir** (adım 1a listesi); `visconti-signoria`, `verona-scaliger`, `padova-carrara`, `sardinya-aragon` ikizdir — ikiz birleştirilirse renk anahtarı da birleşir.

## 5. Öneri (yalnız yazı)
1. `PAYLASIM` beyanı: Montferrat/Roma-1798/Korsika/Megara paylaşımı zamansal-ayrık; beyan edilebilir.
2. `mantua`–`ferrara/modena` ΔE iyileştirmesi (tuz).

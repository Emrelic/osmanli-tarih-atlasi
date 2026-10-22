# RENK PAKETİ MS1 (22 Ekim 2026) — 230 künye, **GEÇİCİ** — DALDA (`boya-paketi-k3`), İTİLMEDİ

İstek: VERI-MS1-1281 (`claude/gracious-elion-fa847a`, `da547c1c3`) — 178 yeni künye (`boya_gerekli:true`) + zincirlerde `__BOSLUK__` bırakan boyasız 47 mevcut künyenin boyasızları.
Tarama: `boya_gerekli:true` 361 künyede; `BOYALAR`'da olmayan **230** (178 yeni + 52 mevcut). Dosya: `denetim/RENK-PAKETI-MS1-GECICI-1022.tsv` (kimlik · renk · en yakın ΔE · karşılaştırılan sayısı).

## Neden "geçici"
* **178 yeni künyenin `bolge:` alanı YOK** ve henüz hiçbir yerleşim `s:` ile kullanmıyor ⇒ komşuları bilinemez. Bunlara altın-oran aralıklı, L*≥59,8 / altlık ΔE≥16 renkler verildi (ΔE sıfır → `0.0 / 0`). Hiçbir komşuluk ölçütü uygulanmadı.
* **52 bölgeli künye** (mevcut künyeler): bölge + zaman örtüşmesine göre seçildi ama **en yakın ΔE medyan 7,6 (min 6,4), 47'si <12.** Sebep ölçüldü: 600+ mevcut renk aynı bölge-zaman penceresinde; palet o bölgelerde (Balkan, Anadolu, Arabistan, Avrupa) doygun. Bölge+zaman GERÇEK komşuluğun kaba üst kümesi — gerçek komşular çevrede ~10 devlettir.
* ⇒ Bu renkler **delik kapatmak için** (BOYALAR'da yoksa bölge boyanmaz) ve **ΔE iddiası taşımaz.** Kesin renk: yerleşim `s:` zincirleri yazılınca `py arac/renk_olc.py --oner a,b,c,…` (gerçek Voronoi komşuluğu + gün düzeyinde örtüşme, N kimliği BİRLİKTE çözer) — **koşu bitince** (ağır komut).

## Uyarı
* Bu 230 kimliğin 178'i `origin/main`'deki `devletler.js`te henüz YOK (VERİ-MS1'in dalında). `BOYALAR`'da olup künyesi olmayan kimlik `durum_tablosu`'nda "renk VAR, künye YOK" kovasına düşer. ⇒ **Bu paket ancak künyeler main'e girdikten SONRA (ya da onlarla birlikte) itilir.**
* 33 k3 boyası (`2a7ed0d55`) + bu paket = aynı dal; tek tuz değişikliği olarak, koşu sonrası `uret_altlik.py` ile aynı commit'te.

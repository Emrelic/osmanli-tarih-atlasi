# KRONO-KUZEY-0929 — şartname (Rusya · Lehistan · İsveç)

> 🔴 OKU: `CLAUDE.md` → `oturumlar/KRONO-DUNYA-0929-ORTAK.md` (§1 ve §4.1) →
> `oturumlar/KRONO-DALGA2-0929-ORTAK.md` → bu dosya. Başkasını açma.
> Dalga 2 · model Opus

## Kapsam ve ölçülmüş yük

| Dosya | Madde | Künye anılması |
|---|---|---|
| `kronoloji_rusya.js` | 173 | 1613 — **bütün listenin en yükseği** |
| `kronoloji_lehistan.js` | 140 | 116 |
| `kronoloji_isvec.js` | 101 | — |

**Senkron defteri — `paket["KRONO-KUZEY-0929"]`:**
```
toplam_kirilma 1132 · ayri_gun 158 · net_olay_adayi 134
   kova: acik 19 · kapsam_disi 86 · yil_temsili 29
   kuyruk_kunye_kapali_yer 507  ← yarısından çoğu ZATEN KAPALI, dokunma
```
📌 1132 kırılma ama **134 net aday** — bu fark tam olarak `SENKRON-DEFTER`in
neden yazıldığıdır. Ham sayıya bakıp 1132 madde yazmaya kalkma.

## 🔴 Dosya sahipliği

| Dosya | Durum |
|---|---|
| `data/kronoloji_cok_rusya.js` · `_lehistan.js` · `_isvec.js` | YENİ maddeler — `window.KRONOLOJI_COK_<AD>` |
| `data/kronoloji_rusya.js` · `_lehistan.js` · `_isvec.js` | **DÜZELTME için senin** — madde EKLEME (BAGLAMA taşıyor) |
| `denetim/KRONO-KUZEY-0929.md` · `-DUZELTME.md` · `-YERLESIM-ONERI.md` · `-KUNYE.md` | senin |

## Sana özel

**🔴 ① TAKVİM — bu paketin EN BÜYÜK RİSKİ.** Rusya **1918'e kadar Jülyen**
kullandı; Lehistan 1582'de Gregoryen'e geçti; İsveç 1700-1712 arasında
**ikisine de uymayan** kendi takvimindeydi. `VERI-YAPISI.md §59`: atlas geleneği
Jülyen. ⇒ Aynı olayın Rus ve Leh kaynağında 10-13 gün farkı OLAĞANDIR ve bu
**gerçek bir senkron hatası** üretir. Her maddede `gun:` alanına hangi takvim
olduğunu yaz. Şüphedeysen `d:` içinde iki tarihi de an.

**② Rusya 1613 anılma ile listenin en çok atıf alan devleti** — yani Rus
olaylarının büyük kısmı başka dosyalarda yazılı. Yeni madde yazmadan önce tara:
`kronoloji_kirim.js` (91) · `kronoloji_altinorda.js` (44) · `kronoloji_ozbek.js`
(73) · `kronoloji_orta_asya.js` (205) · `kronoloji_sinir_*` dosyaları ·
`olaylar*.js` (1736 — Osmanlı-Rus savaşları BURADA).
⚠️ `KRONO-TUNA-0929` (Ukrayna/Kazak Hetmanlığı) ve `KRONO-KAFKAS-0929`
(1801 Kartli-Kaheti, 1828 Türkmençay) ile kesişirsin — **yatay mesaj serbest.**

**③ Lehistan 140 madde ama yalnız 116 anılma** — listenin tek "içeride çok,
dışarıda az" vakası. Yani Leh kronolojisi büyük ölçüde **kendi içine kapalı**
yazılmış; Osmanlı ile kesişimi (1620 Hotin · 1672 Bucaş/Kamaniçe · 1676 Zorawno ·
1699 Karlofça · 1768 Bar Konfederasyonu) muhtemelen eksik. Oraya bak.

**④ Künye zinciri parçalı, M-5416 kuralı (3) burada çok işleyecek:**
Moskova Knezliği → Rus Çarlığı (1547) → İmparatorluk (1721) → 1917;
Lehistan Krallığı → Lehistan-Litvanya (1569 Lublin) → 1772/1793/1795 üç
paylaşım → Varşova Dukalığı → Kongre Krallığı → 1918.
🔴 Paylaşımlardan sonra "Lehistan" yoktur; o dönem maddeleri Rusya/Prusya/
Habsburg künyelerine ya da önerilen bir künyeye gider — **ardıl künyeye geriye
dönük bağlama YASAK.** `denetim/KUNYE-DUNYA-0929.json`u aç, `devletler.js`e dokunma.

**⑤ İsveç şartnamende kasıtlı var:** 1709 Poltava sonrası XII. Karl'ın Bender'de
Osmanlı misafirliği (1709-1714) ve 1711 Prut, Osmanlı kronolojisinin de parçası.
Ama `kronoloji_isvec.js` 101 maddeyle zaten dolu — önce ① DENETİM yap.

## Teslim
`DALGA2-ORTAK §5`. Sonuna: **"bekçimi öldüreyim mi?"**

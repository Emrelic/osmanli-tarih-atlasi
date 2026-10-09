# D8-ONCE-OLCUM-1009 — Değişmez 8 + konum + H-0011/H-0003 piksel: koşu ÖNCESİ ayağı

Oturum: D8-ONCE-OLCUM-1009 (EMRELIC) · görevi veren YILDIRIM BAYEZIT · 10 Ekim 2026
Ağaç: `C:\atlas-d8once` = `origin/main` **`3429ead99fafdf3502fe2e70df735f4b9b381782`** (detached;
`git rev-list --count HEAD..origin/main` = 0, `ls-remote` ile de aynı sha).

## 0. ZEMİN — hangi harita ölçüldü
🔴 `C:\atlas\data\devletler_harita.js` (93.694.456 bayt, 4 Ekim 19:17, sha256 `66222e47…`)
**KULLANILMADI** — git'te yok, yerel bir çözüm, bayat (koordinatörün ACİL düzeltmesi).
Zemin, taze ağaçta takipli kodlanmış dosyalardan çözüldü:
```
py arac/kodla.py coz-c data data/devletler_harita.js          → 181.080.905 bayt · sha256 82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c
py arac/kodla.py coz-c data data/donemler.js donem            →  61.296.467 bayt · sha256 5469235ff7b52b6335b962c206550aedd3ce2163ce01d140af4b6eb661ec49e7
py arac/kodla.py coz-c data data/petek_govde.js govde         →  11,06 MB        · sha256 311ec0475946…
py arac/kodla.py kapi data                                    → 4/4 ✓ (devlet · donem · govde · ufuk_bant)
```
Kaynak: `data/devlet_harita_ust.js` 3.148.869 bayt (takipli, `index.html:1759`) + `data/devlet_parcalar.js`.
⇒ Aşağıdaki her sayı **YAYINDAKİ haritanın** (KOŞU 21 gövdesi, 7 Ekim) ölçümüdür, bugünkü
`yerlesimler*.js` verisinin DEĞİL. Veri o koşudan sonra değişti; harita değişmedi.
(Not: yerel 4 Ekim kopyası ile yayındaki gövde **farklı sha** — ikisi karıştırılmamalı.)

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (10 Ekim, ölçüm koşulmadan)
**①  `denetle.py` çıkış kodu:** gövde damgası (`_d8_govde_kimlik`) bu ağaçta TUTACAK (çözülen sha
= `__DP_SHA` / `__PR_SHA`) ⇒ D8 bu kez `OLCULEMEDI_KOVA`ya "dosya yok/uyuşmuyor" sebebiyle DÜŞMEYECEK.
Kova: boş ya da yalnız bağımlılık dışı bir kalem. Çıkış: **1** (olasılık ~%55) — sebep: `BEKLENEN_D8A=1508`
4 Ekim 11:37 gövdesinde ölçüldü, yayındaki gövde KOŞU 21 ⇒ sayı oynar; yukarı oynarsa ihlal. Aksi hâlde 0.
**②  8a ∈ [1400, 1700], nokta tahmin 1520 · 8b ∈ [70, 100], nokta tahmin 84 · konum (kara maskesi dışı) = 0.**
**③  H-0011 (Tokat–Sivas, 1405-01-01, z8):** motor 7 Ekim'den beri değişmedi ⇒ dişler DURUYOR; renk
sınırı sayımında Tokat/Sivas sahipleri arasında birden çok bağlı bileşen (parmak) görünür.
**H-0003 (Iğdır/Doğubayazıt, 1400-01-01, z8):** Karakoyunlu'nun kuzeye uzanan iki dar dili DURUYOR.
(Piksel ölçütünün sayısal öngörüsü yok — ölçüt bu oturumda tanımlandı, önceki sayı yok; ⇒ yalnız nitel öngörü.)

<!-- ÖLÇÜM BÖLÜMLERİ AŞAĞIYA ölçümden sonra eklenir -->

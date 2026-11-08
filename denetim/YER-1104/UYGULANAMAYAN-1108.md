# UYGULANAMAYAN-1108 — zincir_hazir.json'dan uygulanmayanlar

ZINCIR-64 oturumu · 8 Kasım 2026. Uygulayıcı: `zincir64_uygula.py` (çıktı `data/yerlesimler_zincir64.js`, 63 nokta).

| Nokta / dilim | Sebep | Çare |
|---|---|---|
| **Novigrad** (bütün nokta) | `d:` kırılmaları 1594-01-01 (kayıp) ve 1685-01-01 (kayıp) ±30 günde kronoloji maddesi taşımıyor (Değişmez 2: en yakın madde 166 ve 59 gün; ikisi de yıl-temsilî uç). Maddesiz kırılma uygulanmaz. | Önce iki gerçek gün kaynaklanmalı (1594 Nógrád'ın Habsburg'a geçişi; 1685 Nógrád'ın düşüşü — Ersekújvár 1685-08-19 komşusu) ve maddeleri yazılmalı; sonra `ATLA` kümesinden çıkarılır. |
| **Selâ** — yalnız 2 `isg:` dönemi (Fransız işgali 1911-07-19 → 1912-03-30) | Değişmez 2i: iki ucun ±30 gününde madde yok (en yakın 72 ve 35 gün). Selâ'nın `s:` zinciri (muvahhidler → … → fas-fransiz-himayesi 1912-03-30) uygulandı; yalnız işgal örtüsü yok. | 19 Temmuz 1911 Rabat–Selâ işgali (TDV rabat) ve 30 Mart 1912 Fes Antlaşması maddeleri yazılınca `ISG_ATLA`dan çıkarılır. |

## Uygulananlarda özel kararlar
- **Oskol:** `kur:"1593-01-01"` (`kesinlik:"yil"`, neden: ilk yazılı tanık, alt sınır — kuruluş değil). Aksi hâlde 1281-1593 sahipsiz delik (Değişmez 1c yeni delik).
- **Menfûha:** kayıt düzeyinde `bos:"devletsiz"` + `neden` (1281-1744; ABİ MERKEZ Riyad ile aynı proje kararı). `BEKLENEN_SAHIPSIZ` 311 → 312 (tavan, sonradan raporlanır).
- **6 beyanlı künye aralığı** (Tepedelen, Drivasto, Tellülkebîr, Cezîretülhadrâ, Somnât, Misilmeri): dönem uçları kaynağın günüdür, künye f/t'sine DOKUNULMADI (başka kayıtları etkilerdi); kaydın `kaynak:` alanında "BEYANLI YAKLAŞIKLIK (KÜNYE ARALIĞI)" yazılı. 4c/4d sayıları değişmedi (61 / 233).

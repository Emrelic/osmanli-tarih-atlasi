# UYGULANAMAYAN-1108 — zincir_hazir.json'dan uygulanmayanlar

ZINCIR-64 oturumu · 8 Kasım 2026. Uygulayıcı: `zincir64_uygula.py` (çıktı `data/yerlesimler_zincir64.js`, 63 nokta).

| Nokta / dilim | Sebep | Çare |
|---|---|---|
| **Novigrad** (bütün nokta) | `d:` kırılmaları 1594-01-01 (kayıp) ve 1685-01-01 (kayıp) ±30 günde kronoloji maddesi taşımıyor (Değişmez 2: en yakın madde 166 ve 59 gün; ikisi de yıl-temsilî uç). Maddesiz kırılma uygulanmaz. | Önce iki gerçek gün kaynaklanmalı (1594 Nógrád'ın Habsburg'a geçişi; 1685 Nógrád'ın düşüşü — Ersekújvár 1685-08-19 komşusu) ve maddeleri yazılmalı; sonra `ATLA` kümesinden çıkarılır. **ÇÖZÜLDÜ 11 Kasım 2026:** Pálmány 1986 PDF okundu; 1685-08-19 (gün) + 1594 ve 1663 (yıl, beyanlı) maddeleri yazıldı, Novigrad uygulandı. |
| ~~**Selâ** — 2 `isg:` dönemi~~ | **ÇÖZÜLDÜ 9 Kasım 2026:** `kronoloji_sinir_afrika.js`e 1911-07-19 (TDV rabat) ve 1912-03-30 (Britannica «Treaty of Fès» + encyclopedia.com, çift teyit) maddeleri yazıldı; `ISG_ATLA` boşaltıldı, isg dönemleri veride. | — |
| **Novigrad** gün araması (9 Kasım) | 1594 Nógrád'ın Habsburg'a geçişi: Pálffy 7 Mart 1594'te kale önüne geldi (hungarianottomanwars.com, ikincil, alınış günü okunamadı); 1663 ve 1685 için yalnız yıl/mevsim bulundu (Pálmány 1986 PDF'i indirilemedi, "stream aborted"). Gün uydurulmaz. | Pálmány Béla, *Nógrád megyei évkönyv* 1986 (real-j.mtak.hu/29019) elle okunmalı; 3 günü bulununca madde + `ATLA`dan çıkar. **ÇÖZÜLDÜ 11 Kasım 2026:** Pálmány 1986 PDF okundu; 1685-08-19 (gün) + 1594 ve 1663 (yıl, beyanlı) maddeleri yazıldı, Novigrad uygulandı. |

## Uygulananlarda özel kararlar
- **Oskol:** `kur:"1593-01-01"` (`kesinlik:"yil"`, neden: ilk yazılı tanık, alt sınır — kuruluş değil). Aksi hâlde 1281-1593 sahipsiz delik (Değişmez 1c yeni delik).
- **Menfûha:** kayıt düzeyinde `bos:"devletsiz"` + `neden` (1281-1744; ABİ MERKEZ Riyad ile aynı proje kararı). `BEKLENEN_SAHIPSIZ` 311 → 312 (tavan, sonradan raporlanır).
- **6 beyanlı künye aralığı** (Tepedelen, Drivasto, Tellülkebîr, Cezîretülhadrâ, Somnât, Misilmeri): dönem uçları kaynağın günüdür, künye f/t'sine DOKUNULMADI (başka kayıtları etkilerdi); kaydın `kaynak:` alanında "BEYANLI YAKLAŞIKLIK (KÜNYE ARALIĞI)" yazılı. 4c/4d sayıları değişmedi (61 / 233).

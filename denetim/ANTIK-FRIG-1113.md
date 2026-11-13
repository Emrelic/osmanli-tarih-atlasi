# ANTIK-FRIG-1113 — Frigya: kronoloji × harita × kaynak (13 Kasım 2026)

Dal: `emrelic-1113-antik-frig`. Ağır araç (denetle/renk_olc/denetle_yayin/ceviri) KOŞMADI; yalnız `node --check`, `paketle yenile|ekle|sina`, `surum_damgala`.

## Ölçüm (önce)
| Kalem | Bulgu |
|---|---|
| `frigya` künyesi | VAR, f=-0737 t=-0675, başkent Gordion; BOYALAR'da tanımlı (`#d82aba`). Yalnız Gordion `s:` dönemi kullanıyor (yerlesimler_mo_zincir.js). |
| t=-0675 | TDV Anadolu (Kimmerler MÖ 676) + Treccani (680-670): kaynaklı. Çelişki (Eusebius Midas ölümü 696/695; Gordion'da Kimmer yıkımı kanıtı yok, yanık tabaka MÖ ~800) künyede beyanlı. |
| f=-0737 | Kaynaksız ("Midas c.738 teyit edilemedi", künyede itiraf). |
| Gordion `s:` kırılmaları | -0737, -0675, -0624, -0545. `kronoloji_cok_antik_frigya.js` Değişmez 2 evreninde DEĞİL ⇒ -0675 ve -0545 maddeleri kırılmaları kapatmıyordu; -0737 ±30 gün madde yok; -0624 madde yok. |
| Delikler | Gordion MÖ 1199-737 `__BOSLUK__` (beyanlı), -675..-624 `__BOSLUK__` (beyanlı). Kelainai/Midas Şehri/Ankara'da Frig-çağı `s:` yok (ölçülmedi: yalnız Gordion araştırıldı). |
| Frig maddeleri | 9 (cok_antik_frigya) + d2 arkeoloji Tümülüs MM (-0739). |

## Yapılan
1. `devletler.js` frigya: f -0737 → **-0739** (Tümülüs MM dendro MÖ ~740: Darbyshire Expedition 57/3 2015; DeVries/Kuniholm/Sams/Voigt Antiquity 77/296 2003). Gerekçe ve Kealhofer 2019 uyarısı `ic_not`ta. Gordion `s:` iki ucu birlikte kaydırıldı; -0739 kırılması mevcut `olaylar_arkeoloji_d2-anadolu-ege.js` (odak Gordion, -0739-01-01) ile kapanır.
2. Yeni `data/kronoloji_sinir_antik_frig.js` (`KRONOLOJI_SINIR_ANTIK_FRIG`, paket_09): -0675 Kimmer/TDV maddesi (odak Gordion) ve -0545 Kyros/Treccani maddesi (odak Sart+Gordion) `cok_antik_frigya`dan TAŞINDI (metin aynı; çift madde olmasın). Böylece -0675 ve -0545 kırılmaları Değişmez 2 evreninde kapanır. `cok_antik_frigya` 9 → 7 madde.
3. `paketle yenile` + `surum_damgala` koşuldu; `sina` TAZE.

## Yapılmayan / ölçülemeyen
- **-0624 (Lidya Gordion'da)**: tek dayanak worldhistory.org; akademik kaynak yok (METU Kerkenes: "Lydian takeover of Gordion" için tarih vermez; Treccani yalnız Frigya'yı Lidya'nın doğu komşusu sayar). Madde YAZILMADI, dönem DEĞİŞTİRİLMEDİ ⇒ Değişmez 2 bu kırılmada açık kalabilir.
- Gordion MÖ 9. yy başı doğuş (Kealhofer vd. 2019, yüzyıl hassasiyeti): künye f gerçekte ~1 yüzyıl erken olabilir; yazılmadı (gün/yıl yok).
- Değişmez 2/2s gerçek sonucu, Kelainai/Ankyra Frig-çağı `s:`, ceviri eşitliği (taşınan maddelerin çevirileri b metni aynı olduğundan sürmeli, ölçülmedi) — ölçülmedi.
- Midas'ın Mita ile özdeşliği, Asur 717/709 maddeleri zaten `cok_antik_frigya`da; Değişmez 2 evreni dışı, `s:` kırılması olmadığı için gerekmiyor.

## Karar soruları (Emre)
1. Lidya -0624..-0545 Gordion dilimi: akademik kaynaksız → `__BOSLUK__`a çevrilsin mi (beyanlı boşluk) yoksa worldhistory beyanıyla kalsın mı?
2. Frigya f: Kealhofer 2019'a göre MÖ 9. yy başı mı (yüksek kron.) yoksa -0739 (ilk dendro tanık) mı kalsın?

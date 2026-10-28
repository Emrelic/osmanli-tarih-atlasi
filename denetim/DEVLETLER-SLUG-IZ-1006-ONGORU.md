# DEVLETLER-SLUG-IZ-1006 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazan: UMIT-W51-DEVLETLER-SLUG-IZ-1006 · 6 Ekim 2026 · ağaç `C:\atlas-w51` = origin/main `0f08fcae`
Evren: `data/devletler.js` → `window.DEVLETLER[].kronoloji[]` (künye içi madde, disk katmanı).
Kova tanımı: `kisi_kova` (fa1dd9af) — `tdv` = "TDV:" ile BAŞLAR.

Bu ana kadar okunan tek ölçüm: W38 raporu (`KUNYE-KRONO-KAYNAK-1006.md`) — 254 / 114 / 89 / 40.
Satır biçimine 5 örnekte baktım (552, 553, 889, 951, 1110); 1110 "alıntılanmadı … beklenir" diyor.

## ⑤ biçim normalleşmesi (`kaynak` "TDV" ile başlıyor, "TDV:" ile değil)
- Evren (bugün yeniden sayım): **254 ± 3** (W38 `7afbe86f`ta ölçtü; arada devletler.js değişmiş olabilir).
- Çekincesiz biçim (`TDV <slug>: <alıntı/tarih>`): **%80-90** · çekinceli/olumsuz ("alıntılanmadı",
  "beklenir", "yok", "302", "bulunamadı", "ölü"): **10-40 madde** → bunlar ÇEVRİLMEZ.
- Slug canlılığı (HTTP, bütün tekil slug'lar): ölü (302) **%3-10** · canlı-yanlış-madde **≤ 5**.
- Örneklem (≥ 20 rastgele, gövde okunarak): tutma **≥ 17/20**.
- Çevrilen: **190-230**.

## ④ iz taşıması (kaynak dışı alanda TDV izi)
- Evren: **114 ± 3** madde, kaynaksız **89 ± 3**, **40** künye.
- `ic_not_b` izlerinin çoğu "eski b: … (TDV …)" arşiv notu; TDV'yi DAYANAK gösteren cümle
  bir kısmı, "TDV'de yok/çelişiyor" notu bir kısmı.
- Taşınabilir (izin cümlesi O maddeyi tarihliyor + slug canlı): **30-55 / 89**.
- Zaten kaynaklı 25 maddeye dokunulmaz (yalnız kaynaksızlar taşınır).

## Kapı
- `denetle.py` çıkış kodu önce/sonra: **aynı** (künye `kronoloji.kaynak` kapısız — W38 ⑤).
- `durum_tablosu.py` kişi/künye kaynak satırı: künye kronolojisi satırı YOK ⇒ değişmez.

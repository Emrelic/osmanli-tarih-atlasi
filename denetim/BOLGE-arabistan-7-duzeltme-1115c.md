# ARABİSTAN — adım 7 düzeltme + ölçüm (UMIT 1115c, 15 Kasım 2026)

## Uygulananlar (dal `umit-1115c-arabistan`, yalnız `data/devletler.js` + belgeler)
1. `hurmuz-sultanligi` kronoloji `odak_yer`: 1296, 1300, 1507-10-10, 1508-02-01, 1514 → `Hürmüz Adası`; 1320 → `Kiş (Kish)` (eski: `Albuquerque` = New Mexico şehri, `Kişm (Qeshm)` = yanlış ada). Madde metni/tarihi DEĞİŞMEDİ → çeviri anahtarı etkilenmedi.
2. `kacar-esterabad` kronoloji 0 → 5 madde (TDV `kacarlar`; 1747-06-20 [yıl], 1749 [yıl], 1750 [yıl], 1756 [yıl], 1759-02-13 [gün]). Yeni madde = yeni arayüz metni DEĞİL, ama künye-içi madde çevirisi yoksa `ceviri_*_devlet` eksik sayısı +5 olabilir (çeviri KASA'nın; tavan açma yok).

## Ölçüm (çıkış kodları sayısal)
- `py arac/denetle.py` (kilit denetle-umit, kim arabistan-1115c): **ÇIKIŞ 0 «SONUÇ: temiz»** (worktree, coz-c sonrası). Gözlem: D2s 154 açık (taban 154, değişmedi), D2t 166 (taban 167), 1c 2 (tavan 2). **D2sk 5938 > tavan 5927 — «TAVAN AŞILDI» uyarısı, çıkış 0; D2sk tavanı KASA'nındır (brif), bu dalın değişikliklerinden (yalnız devletler.js künye maddesi + odak_yer) kaynaklanmaz: taban dal `kasa-1115-umit-birlesim` zaten bu durumda (taban commit mesajı: «D2sk 5927 (önceki partide açıldı)»); bu oturum tavanı açmadı.** (Taban dalda yalın denetle koşulmadı → «bu dalın etkisi yok» ÖLÇÜLMEDİ; yalnız değişikliğin alanı gereği çıkarım.)
- `py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI **0**. (Önce/sonra karşılaştırması yapılmadı; yer_id 0 sorunu yok.)
- `node --check data/devletler.js`: OK.

## Açık kararlar (Emre/KASA) — ayrıntı `YERLESIMLER-JS-KUYRUK-1115c-arabistan.md`
1. **Hürmüz Adası 1622-04-23 → 1622-05-03** (Gregoryen): TDV + Naki 2022; ikinci bağımsız teyit okunamadı → kuyruk Q3.
2. Kişm düşüşü Şubat 1622 (tek kaynak Naki) Q3b; Kişm 1515-1622 Portekiz mü Q3c; Hürmüz künye t 1514 mü 1515 mi / sultanlık Portekiz himayesinde sürdü mü (Iranica özeti) — künye genişletme kararı.
3. Muş + 6 yerleşim: 1467-01-01 → 1467-11-10 (hazır, Q6). Irak-ı Arab 1469-01-01 → 1469-12-19 (Q7). Irak-ı Acem 1469-01-01 kaynaksız (Q8).
4. Buraydâ/Uneyze Kasîm zinciri (Q5).
5. Başka bölgelerin `odak_yer:["Albuquerque"]` hataları (devletler.js 5953, 7825, 10224, 18535, 18536).

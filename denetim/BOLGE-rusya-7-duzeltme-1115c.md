# BOLGE-rusya · Adım 7 — Düzeltme (UMIT, 15 Kasım 2026)

**Yazılan düzeltme: 0.** Veri dosyası değişmedi; yalnız `denetim/BOLGE-rusya-*-1115c.md` + `denetim/YERLESIMLER-JS-KUYRUK-1115c-rusya.md` + `denetim/RENK-ONERI-1115c-rusya.md`.

Neden: hakem kuralı (≥2 bağımsız akademik kaynak) sağlanamadı; web aramasında akademik tam metne ulaşılamadı (prlib.ru tarayıcı kontrolü, NPL/DergiPark açılmadı). Hafıza/ansiklopedi ile gün yazmak "tarih uydurma"dır.

## Öncelikli aday düzeltmeler (ikinci akademik kaynak bulunursa tek satır)
1. Buz Savaşı `olaylar_ortacag_italya_dogu_avrupa.js`?/ilgili dosya: 1242-04-12 → **1242-04-05** (Jülyen, kural gereği). Anahtar taşıma: `ceviri_*_olay_*.js` `…:1242-04-12:idx` + `olay_taraf.js` `1242-04-12|…`.
2. O.S./N.S. çevrilmemiş (1582 sonrası atlas Gregoryen): 1645-07-13→07-23, 1730-02-25→03-08, 1755-01-25→01-23, 1775-01-10→01-21, 1612-11-04 (açık), 1533-12-04 (açık).
3. Roman Mstislaviç 1205-10-14 vs 06-19: hakem için Długosz/Hustynski.
4. Altın Orda yıkılışı 1502-03-01 → 1502-01-01 + "[yalnız yıl teyitli]" (TDV yıl verir).
5. Künye-içi moskova satırları 1478-01-14→15, 1485-09-08→12.

## Ölçüm
- `py arac/odak_olc.py`: veri değişmedi → ÖNCE = SONRA (bkz. rapor; yeni dosya yok).
- `py arac/denetle.py`: **koşturulmadı** (veri değişmedi, ölçülmedi ≠ temiz; mevcut taban denetle sonucu KASA birleşim commit mesajında: D1 306, D2 0, D4c 0, D2s 154, D2t 167, D8a 283).
- Çeviri hash bayatlığı: yok (metin değişmedi).

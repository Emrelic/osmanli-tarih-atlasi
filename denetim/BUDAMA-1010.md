# BUDAMA-1010 — CLAUDE.md budaması (hiçbir kural silinmeden)

Sevk: YILDIRIM BAYEZIT, 10 Ekim 2026 (Emre'nin token kararı) · oturum `CLAUDE-BUDAMA-1010`
· ölçüm ağacı `C:\atlas-nokta-sumer` = `origin/main` `197455c8` (ana checkout `HEAD..origin/main` = 0)
· çıktı: `denetim/BUDAMA-1010.diff` — `CLAUDE.md` koordinatörün dosyası, UYGULAMA ONUN.

## §0 TABAN ve ÖNGÖRÜ — kesmeden ÖNCE yazıldı, sonradan DOKUNULMAZ

**Taban (`197455c8:CLAUDE.md`):** 1347 satır · **96.053 bayt** · ~27.444 token (bayt/3,5).
(Sevk mesajındaki ~25.119 token 09:00 ölçümüydü; dosya o saatten beri +8.136 bayt büyüdü.)

**Eski sınav tabanı** (`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`): eski satır 2126 ·
**eksik 14** (hepsi `§1.5` tablosunun 17 Eylül hâli — tablo `durum_tablosu --yaz` ile her gün
yeniden yazılıyor, BEKLENEN) · kırık bağlantı 0 · boyut ✗ (96.053 > 25.000) · çıkış 2.
⚠️ O sınavın evreni `d2228e6` (17 Eylül ÖNCESİ) satırlarıdır ⇒ bu gecenin eklemelerini
GÖRMEZ. Bu iş için ikinci bir sınav yazılacak (`denetim/BUDAMA-1010-SINAV.py`): taban
`197455c8`in BOŞ OLMAYAN HER SATIRI `yeni CLAUDE.md ∪ dersler/*.md` içinde birebir bulunmalı.

**Yöntem:** sıkıştırılan her bölümün ÖZGÜN METNİ birebir yeni bir `dersler/D2xx-*.md`'ye
taşınır (17 Eylül emsali); CLAUDE.md'de kural/slogan kısa satır + `[Dxxx]` atfı kalır.
Dokunulmayacak çapalar: `## 1.5` başlığı + hemen altındaki tablo (`durum_tablosu.py --yaz`
regex'i) · `§9.1` "**TUZU** … Biri değişirse" cümlesi (`ARAC-TUZ-DORT-DOSYA-SINAV-1010` okur).

| bölüm | taban B | öngörü B |
|---|---|---|
| başlık + Belge seti | 2.916 | 2.000 |
| §1 · §1.5 · §1.6 · §2 | 4.732 | 4.732 (dokunulmaz) |
| §3 | 6.750 | 2.800 |
| §3.4 | 5.372 | 2.300 |
| §3.5 | 3.614 | 2.000 |
| §4 | 12.076 | 4.500 |
| §5 | 6.714 | 1.900 |
| §6 · §8 · §10 | 1.752 | 1.752 (dokunulmaz) |
| §7 | 7.124 | 3.000 |
| §7.1 | 7.155 | 2.800 |
| §7.3 | 5.326 | 2.000 |
| §7.2 | 9.417 | 3.800 |
| §9 | 9.753 | 3.200 |
| §9.1 | 3.700 | 1.700 |
| §11 | 9.573 | 2.700 |
| **TOPLAM** | **96.053** | **~41.200 B ≈ 11.800 token** |

Öngörü: yeni `dersler/` dosyası **13 ± 2** · eski sınav **eksik 14 → 14** (değişmez; evreni
bu gecenin satırlarını içermiyor) · yeni sınav **eksik 0** · kırık bağlantı 0.

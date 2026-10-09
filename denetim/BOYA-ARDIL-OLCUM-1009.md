# BOYA-ARDIL-OLCUM-1009 — BOYA-BORC-1009-v2 renkleri, yeni ARDIL kuralında (UMIT)

10 Ekim 2026 · makine UMIT · taban `origin/main` **3429ead9** (fetch edildi) · geçici worktree `C:\atlas-umit-boyaardil`
(iş sonunda kaldırıldı). **Commit/push YOK, `C:\atlas`a yazılmadı, `renkler.py` önerisi YOK.**
Bütün koşular `PYTHONHASHSEED=0 py arac/renk_olc.py --ayrinti` (çıkış 0; araç düz koşuda zaten hep 0 veriyor).

## SONUÇ
**BOYA v2 ardıl kuralında TEMİZ** — 16 rengin 17 ardıl çiftinin hepsi ΔE ≥ 15.8 (ne ihlal ne sınırda), üç ölçümde de
`--dogrula` "(ardıl)" dahil 0 eşik altı engel. Ölçüm 3'te çıkan **2 yeni ihlal + 1 sınırda BOYA'dan DEĞİL, Z6 yamasının verisinden**
(aşağıda §3).

## 0. Uygulama — ⚠️ ZAMAN-PAKET ile RENK-ARDIL `renk_olc.py`de METİN ÇAKIŞIYOR
- `RENK-ARDIL-1009.diff` (v2) temiz uygulandı: `git diff --stat HEAD` → `arac/renk_olc.py | 257 (+253/−4)` + yeni
  `denetim/ARAC-RENK-ARDIL-SINAV-1009.py`. ✓
- `BOYA-BORC-1009-v2.diff` üstüne temiz: `arac/renkler.py | 24 ++`. ✓
- `ZAMAN-PAKET-1009-v2.diff` `git apply -C1` → **REDDEDİLDİ**: `error: patch failed: arac/renk_olc.py:1016` (atomik,
  hiçbir şey uygulanmadı). Sebep: ZAMAN'ın tek satırı (`engel_kumesi`: `pen.get(kim, ("1281-01-01","1923-10-29"))` →
  `pen.get(kim, girdi.UFUK)`) RENK-ARDIL'ın aynı yere eklediği `out |= {… ardil()…}` satırlarının hemen altında; bağlam tutmuyor.
  - Ölçüm için: ZAMAN `--exclude=arac/renk_olc.py` ile uygulandı (18 dosya, 1314+/121−) ve o tek satır `sed` ile elle yansıtıldı
    (yamalı dosyada satır 1262). Yalnız geçici worktree'de.
  - 🔴 **Koordinatöre:** iki diff bu gece birlikte inecekse sırası/birleştirmesi elle yapılmalı — biri ötekinin `git apply`ını kırıyor.
    Ters sıra (önce ZAMAN, sonra ARDIL) DENENMEDİ.
- Z6: `py arac/_sahiplik_uygula.py --yama-glob '^yer_yama_once1281_z6\.js$' --taban 0c4b383c` kuru koşu **çıkış 0**, TABAN KAPISI
  "TAZE", GERİ ALMA KAPISI "80 değişim TAZE" → `--yaz` çıkış 0, 11 dosya, diskten geri okuma 80/80 ✓.
  `s:`te B grubu: abbasi 1 · antakya-prinkipsligi 2 · eyyubi 1 · mogol-imparatorlugu 16 dönem.

## 1. Üç ölçüm

| sayaç | Ö1 taban (ARDIL) | Ö2 + BOYA v2 | Ö3 + ZAMAN v2 + Z6 |
|---|---|---|---|
| **ARDIL ihlali ΔE<12** | **8** | **8** (aynı liste) | **10** (+delhi-sultanligi↔gurlu, +artuklu↔buyuk-selcuklu) |
| ARDIL beyanlı (PAYLASIM) | 2 | 2 | 2 |
| ARDIL SINIRDA 12–15 | 51 | 51 (aynı liste) | 52 (+lusignan↔selcuklu 12.09) |
| ARDIL ÖLÇÜLEMEDİ | 8 | **0** | 0 |
| toplam ardıl çifti | — | 1042 | 1071 |
| komşu çakışması | 7 | 7 | 8 (+artuklu↔buyuk-selcuklu 11.2) |
| aynı-anahtar | 70 | 70 | 70 |
| aynı-hex | 0 | 0 | 0 |
| yakın-ama-değmeyen | 14 | 14 | 15 (+muvahhidler↔zeyyani 4.71, 516 km, 1236–1269) |
| yakın SINIRDA | 131 | 135 | 136 (+mengucuklu↔saltuklu 13.81) |
| yakın ÖLÇÜLEMEDİ | 7425 | 8227 | 7433 |
| `--dogrula` (16 renk) | — | 0 fark · eşik altı 0 · "(ardıl)" yok | 0 fark · eşik altı 0 · "(ardıl)" yok |

Ö1, `RENK-ARDIL-1009.md` §4 ile **birebir**: 8/2/51/8, aynı adlar, aynı ΔE.
Ö2 SINIRDA 131→135, BOYA-BORC-1009.md §3 ile aynı. Ö2 yakın ÖLÇÜLEMEDİ 8227 ≠ BOYA md'nin 8275'i
(taban farkı: BOYA 0c4b383c'de ölçmüştü; bu fark araştırılmadı).

## 2. Ö1→Ö2: ÖLÇÜLEMEDİ'den çıkan 8 çiftin her biri nereye düştü
Hepsi ΔE ≥ 15 ⇒ ne ihlal ne sınırda (ekranda görünmüyorlar; değerler `ardil()` + `dE` ile doğrudan okundu):

| çift | ΔE | geçiş · örnek |
|---|---|---|
| resuli ↔ tahiri | 92.5 | 2 · Zebîd 1454-01-01 (Aden, Zebîd) |
| tahiri ↔ yemen | 69.7 | 1 · Aden 1517-01-01 |
| napoli ↔ sicilya-kralligi | 67.1 | 3 · Draç 1282-03-30 (Draç, Korfu, Malta) |
| kudus-kralligi ↔ memluk | 47.5 | 3 · Beyrut 1291-05-18 (Akkâ, Beyrut, Sayda) |
| memluk ↔ tahiri | 46.6 | 1 · Zebîd 1516-06-20 |
| memluk ↔ trablus-kontlugu | 46.3 | 1 · Trablusşam 1289-01-01 |
| akkoyunlu ↔ gozleroglu | 34.8 | 1 · Şebinkarahisar 1418-01-01 |
| eyyubi-hama ↔ memluk | 28.5 | 1 · Hama 1299-01-01 |

Ö2'de B (4) ve C (5) grubunun ardılı **0** (veride `s:` yok).

## 3. Ö3: B grubu `s:`te — BOYA'nın tahmini vs gerçek ölçüm

| çift | BOYA tahmini | ölçüm | geçiş · örnek |
|---|---|---|---|
| abbasi ↔ ilhanli | 22.7 | **22.7** ✓ | 1 · Şehrizor 1258-01-01 |
| eyyubi ↔ mogol-imparatorlugu | 57.4 | **57.4** ✓ | 1 · Bitlis 1231-01-01 |
| mogol ↔ ilhanli | 39.3 | **39.3** ✓ | 9 · Kars 1256-01-01 (Gence, Herat, Isfahan, Kars, Merv, Merâga …) |
| mogol ↔ altinorda | 18.7 | **18.7** ✓ | 1 · Derbend 1242-01-01 |
| mogol ↔ cagatay | 25.1 | **25.1** ✓ | 5 · Kaşgar 1227-01-01 (Belh, Hucend, Kaşgar, Semerkant, Taşkent) |
| mogol ↔ selcuklu | 19.2 | **19.2** ✓ | 1 · Bitlis 1232-01-01 |
| mogol ↔ harizmsah | 66.0 | **66.0** ✓ | 3 · Serahs 1221-01-01 (Belh, Herat, Serahs) |
| antakya ↔ selcuklu | 27.5 | **27.5** ✓ | 1 · Antakya 1098-06-03 |
| antakya ↔ memluk | 15.8 | **15.8** ✓ | 2 · Antakya 1268-05-18 (Antakya, İskenderun) |

**9/9 birebir.** En düşük: antakya↔memluk 15.8 (SINIRDA bandının 0.8 üstü). A grubunun 8 çifti Ö2 ile aynı.
B grubunun ardıl sayıları: antakya 2 · eyyubi 1 · abbasi 1 · mogol 6. C grubu hâlâ 0.

### Ö3'teki YENİ ihlaller — BOYA'dan değil, Z6 verisinden (renkler Z6'dan ÖNCE de vardı)
| çift | ΔE | hex | yerleşim · gün (yön) | kaynak |
|---|---|---|---|---|
| delhi-sultanligi ↔ gurlu | **3.48** | #20d820 / #36d824 | Delhi · Koil (Aligarh) · Lahor · Ecmîr (Ajmer) — hepsi 1206-01-01 (gurlu→delhi-sultanligi) | 4 yerleşim de Z6 yamasında |
| artuklu ↔ buyuk-selcuklu | **11.25** | #18cca2 / #24d87e | Mardin 1103-01-01 · Hasankeyf 1102-01-01 (buyuk-selcuklu→artuklu) · Voronoi komşusu da (komşu çakışması da +1) | Mardin, Hasankeyf Z6'da |
| (SINIRDA) lusignan ↔ selcuklu | 12.09 | #8a6ba0 / #d878a8 | Antalya 1212-01-01 (selcuklu→lusignan) · 1216-01-22 (lusignan→selcuklu) | Antalya Z6'da |

Eşzamanlı ölçütte de Z6 kaynaklı +1 yakın-ama-değmeyen (muvahhidler↔zeyyani 4.71, 516 km, 1236–1269) ve +1 sınırda
(mengucuklu↔saltuklu 13.81). Bunlar ardıl kuralının değil eski ölçütlerin bulgusu; BOYA ile ilgisi yok.

### `--oner` — YALNIZ BİLGİ (Ö3 ortamı, ardıl engelli, tek kimlik): hüküm/öneri DEĞİL
| kimlik | öneri | en yakın engel ΔE | engel |
|---|---|---|---|
| gurlu | #d85a24 | 12.4 | 1 komşu, 26 renkli engel |
| delhi-sultanligi | #cc249c | 12.0 | 36 komşu, 82 engel |
| artuklu | #60f00c | 12.0 | 17 komşu, 95 engel |
| buyuk-selcuklu | #d82a24 | 12.2 | 1 komşu, 34 engel |

## Ölçtüm · bulamadım · istiyorum
**Ölçtüm.** Taban 8/2/51/8 raporla aynı. BOYA v2 ardıl ölçülemedi 8→0, sekizinin hepsi ΔE 28.5–92.5; ihlal/sınırda değişmedi.
Z6 inince BOYA'nın 9 tahmini birebir tuttu (en düşük 15.8). `--dogrula` iki ortamda temiz. Z6 ardıl ihlalini 8→10 yapıyor
(delhi↔gurlu 3.48, artuklu↔büyük-selçuklu 11.25), ikisi de eski renkler.
**Bulamadım.** Ters uygulama sırası (ZAMAN→ARDIL) denenmedi. 8227 vs BOYA md 8275 farkının kaynağı ölçülmedi.
**İstiyorum.** ① ZAMAN-PAKET-v2 ile RENK-ARDIL-v2 `renk_olc.py`de çakışıyor — birleştirme koordinatörün. ② Ardıl kapıya
bağlanacaksa Z6 sonrası tavan 8 değil 10 olur (§3.4: tavan yazıldığı anda ölçülür). ③ delhi/gurlu (3.48) belirgin; renk hükmü koordinatörün.

YENİ DOSYALAR: denetim/BOYA-ARDIL-OLCUM-1009.md

# UMIT-W10-BEKCI-1006b — eski damga hükmü (D266) × `--temizle`

Ağaç `C:\atlas-w10c` (detached) = `origin/main` **e051335c** + `KIMLIK-BEKCI-1006.diff` uygulanmış.
Kilit: `arac/bekci_olc.py` (+ sınavı). `--temizle` işlevinin KODUNA dokunulmadı.

## 1. Koordinatör hükmü ve kodun durumu
Hüküm: eski damga (`baslangic` yok) + sahip canlı → **OLCULEMEDI**, BITMIS DEĞİL; `--temizle` OLCULEMEDI'yi SİLMEZ.
- **Davranış KIMLIK-BEKCI-1006'da zaten buydu** (o gün "öneri" olarak uygulanmıştı). `_surec_var`
  `baslangic is None` dalında `None` döner → `oku()` OLCULEMEDI yazar; `temizle()` yalnız
  `hal == "BITMIS"` siler. ⇒ Davranış değişikliği YOK.
- `bekci_olc.py`deki tek değişiklik yorum: "ÖNERİ … Hüküm koordinatörde" → "HÜKÜM (koordinatör, D266,
  6 Ekim 2026)" + neden BITMIS olmadığı (`--temizle` siler) + sınav referansı.
- Hükmü KİLİTLEYEN sınavdır (§2): bir gün biri bu dalı BITMIS'e çevirirse T1 düşer.

## 2. Sınav — 14/14 ✓ (`denetim/KIMLIK-BEKCI-CIKTI-1006.txt`, tazelendi)
Eski 11 kontrol aynen geçti. Yeni üçü:
```
✓ T1 eski damga + CANLI sahip (gerçek alt süreç) → OLCULEMEDI · temizle() sonrası dosya YERİNDE
✓ T2 aynı turda eski damga + ÖLÜ sahip           → BITMIS     · temizle() sonrası SİLİNDİ
✓ T3 TERS YÖN: _surec_var mutasyonla "BITMIS" dönerse aynı canlı-sahip damgası SİLİNİR
```
- **İki yön:** T2, `temizle()`in o turda gerçekten sildiğini kanıtlar; yani T1'in "yerinde"si
  "temizle hiçbir şey yapmadı" demek değildir. T3 de T1 kontrolünün dişli olduğunu gösterir: hüküm BITMIS'e
  kayarsa dosya silinir ve T1 bunu yakalar. Boş küme doğrulaması değil.
- `temizle()` modülün `DIZIN` küresini kullandığı için geçici dizine yönlendirmek yetti. Gerçek
  `oturumlar\bekci` önce = sonra (bu makinede yok).

## 3. Diff — `C:\atlas-umit\denetim\KIMLIK-BEKCI-1006b.diff`
CR 0 · 118 satır · zincir: `origin/main e051335c` → `KIMLIK-BEKCI-1006.diff` (0) → bu diff **ileri ✓ (0) · -R ✗ (1)**.
Dosyalar: `arac/bekci_olc.py` (yorum) · `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py` (T1-T3 + docstring) ·
`denetim/KIMLIK-BEKCI-CIKTI-1006.txt`.

## 4. Temizlik
- `C:\atlas-umit\denetim\BEKCI-KIMLIK-1006.diff` SİLİNDİ. Önce commitli `KIMLIK-BEKCI-1006.diff` ile bayt bayt
  aynı olduğu doğrulandı (`cmp`). İzlenmiyordu: `makine/umit` dalının `.gitignore`u hâlâ eski
  `denetim/BEKCI-*` desenini taşıyor (e051335c daraltması o dala henüz inmemiş).
- Bu raporun ve diff'in adları (`UMIT-W10-BEKCI-1006b.md`, `KIMLIK-BEKCI-1006b.diff`) iki `.gitignore` sürümünde
  de yok sayılmıyor (ölçüldü).
- `C:\atlas-w10c`: temizlendi ve KALDIRILDI. İçerik: main'deki `KIMLIK-BEKCI-1006.diff` + bu diff.

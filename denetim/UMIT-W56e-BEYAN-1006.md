# UMIT-W56e — MUTLAK-KOK-BEYAN-1006 (diff, UYGULANMADI)

Temel `origin/makine/umit` = `cdc1ccea`. ALT-1006-1/2 henüz inmemişti ⇒ worktree'nin KENDİ index'ine
`git apply --index` ile kondu (stash YOK), beyanlar onun üstüne eklendi; `git diff` = yalnız beyanlar.
`denetim/MUTLAK-KOK-BEYAN-1006.diff`: 8 dosya × +1 satır · CR 0 · 8 dosya `py_compile` temiz.

`git apply --check --cached`: ① ALT-1/2 üstüne ✓ · ② ALT'sız yalın `cdc1ccea` ✓ · ③ ALT-1+2+BEYAN tek seferde ✓ ·
④ W56b + W56c(4) + ALT(2) + BEYAN hepsi birlikte ✓.

Yer: 1. satır `coding` bildirimiyse 2. satır, değilse 1. satır (docstring'den önce yorum — docstring modül
docstring'i olarak kalır). Metin: `# 🔴 BEYAN (UMIT-W56e, 6 Eki 2026): <ne yapar>, bu makinede koşamaz: <yol>`.

| dosya | satır | ne yapar (kod okunarak) |
|---|---|---|
| ARAC-B-ENKLAV-CIZ-0912 | 2 | okur (LOG) |
| ARAC-TEKRAR-OLCULECEK-0930-CIZ | 1 | okur + **YAZAR** — `govde` modülünü oradan ithal, PNG'yi oraya `savefig` |
| ARAC-TEKRAR-OLCULECEK-0930-GOVDE | 1 | okur + **YAZAR** — `.ofs` önbelleğini oraya `pickle.dump` |
| ARAC-TEKRAR-OLCULECEK-0930-TOPLU | 1 | okur — `govde` modülünü oradan ithal (kendi çıktısı argv yoluna) |
| SINIR-CIZGI-0076-geri-oku | 2 | okur (teslim.txt) |
| SINIR-D-ORTADOGU-0077-komsu-devir | 1 | **YAZAR** (yeni_kayitlar.json) |
| HARITA-0076-cevap-yaz | 2 | okur + **YAZAR** (CEVAP.json — sonda `open[w]` da gördü) |
| SINIR-CIZGI-0076-supurge | 2 | okur (PARTI.md) |
⚠️ Görev "YAZAR" kelimesini yalnız komsu-devir için istedi; kod okununca üç dosya daha yazıyor
(TEKRAR-CIZ, TEKRAR-GOVDE, cevap-yaz) — onlara da kondu, çünkü beyan doğru olmalı.

## Beyan DIŞI — kardeş ağaç (bilerek yazılmış, liste)
| dosya:satır | yol |
|---|---|
| BOGAZ-OLCUM-0081:22 · BOGAZ-OLCUM-0081-sinif:13 | `C:/atlas-kosu16` (koşu 16'nın kendi `girdi` kopyası) |
| ARAC-LEGO-0925-say:11 · ARAC-LEGO-sayim:6 | `C:\atlas-onbellek\motor_onbellek.sqlite` |

Beyanlı atlas-dışı toplam: W56d'nin 2'si + bu 8 = **10 dosya**.

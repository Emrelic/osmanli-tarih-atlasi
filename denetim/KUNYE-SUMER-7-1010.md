# KUNYE-SUMER-7-1010 — 7 künyenin `data/devletler.js` diff'i (MÖ 539 → MS 226)

Görev: YILDIRIM BAYEZIT (cross-session mesajı, 10 Ekim 2026) · işçi: KUNYE-SUMER-7-1010 (EMRELIC, Opus) ·
`data/` + `arac/` DONUK — çıktı yalnız `denetim/` altında diff.
Taban: `origin/main` = `1f08064861cb5e1cda2620d16747e8a50406bbec` (ayrı worktree, `git rev-list HEAD..origin/main` = 0).
Girdi: KASA `makine/kasa` — `43981345` (KASA-SUMER-SAHIPLIK-1010) · `5a7f2e27` (…-2-1010) · KASA-KUNYE-AHAMENI-PART-1010 ·
hüküm `oturumlar/HUKUM-KASA-1010.md §9.6`.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı; sonradan DOKUNULMADI)
- **Künye sayısı:** istenen 7 = 6 yeni + 1 değişiklik (`sasani` f). Öngörüm **6 kalem iner**: `karakene`
  YAZILMAZ — `f` ucu akademik (Olmstead 1937, Babil −126-06-01) ama `t` ucu yalnız livius (Lendering "defeated
  in 222 CE") + Hansman "221-22 … revolt" yılsız ⇒ koordinatörün "tek kaynaklı künye kararı bende" şartı (%75).
- **Alan sayısı:** yeni künye başına 12 ± 1 alan (`id ad tur bolge f t kesinlik baskent ic_not_f ic_not_t ozet
  kaynak kronoloji[2]`); toplam ~60. `sasani`de 3 alan değişir (`f` · `ic_not_f` · `kronoloji[0]`).
- **Tereddüt beklediğim alanlar (5):**
  ① `makedon.f` — Sippar'da İskender emri **−330-10-18** (ADART) koordinatörün −330-10-22'sinden 4 gün ÖNCE ⇒
     §9.6 zarf ilkesine göre f ≤ −330-10-18 olmalı.
  ② `makedon.t` — BCHP 3 "[Year 8] of Alexander … Borsippa" (309/8 = −308) −311'in SONRASI ⇒ zarf aşımı.
  ③ `selefki.t` — ara dilim −129-06-01 (VII. Antiokhos, Babil) künye t'si −140-07-03 ise zarfın DIŞINDA.
  ④ `ahameni.f` — TDV `iran` devlet başı MÖ 559 (−558); koordinatör −538 (Mezopotamya ucu) diyor ⇒ hangisi zarf.
  ⑤ `ahameni.baskent` — KASA: `bulunamadı`.
- **`renkler.py` BOYALAR:** 7 kimliğin **0**'ında boya var (`sasani` `boya_gerekli:true` taşıdığı için onda da yok) — %80.
- **`denetle.py`:** veride bugün 0 negatif yıl (`pad()` docstring'i). Negatif `f:` girince en az bir denetimin
  ÇÖKMESİ ya da ÖLÇÜLEMEDİ'ye düşmesi — %60. `node --check` temiz — %95.

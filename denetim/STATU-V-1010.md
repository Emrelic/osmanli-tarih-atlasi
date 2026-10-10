# STATU-V-1010 — hükümet sancaklar `d:` → `v:` + Cizre künyesi

Görev: YILDIRIM BAYEZIT (10 Ekim 2026) · işçi EMRELIC, Opus · diff üretir, UYGULAMAZ.
Taban `origin/main` `95967da3` (`rev-list HEAD..origin/main` = 0) · ayrı worktree'ler (önce `wt` / sonra `wt2`).
Girdi: KASA-HUKUMET-SANCAK-1010 (`makine/kasa`) · TDV KÜRTLER (Özcoşar) iki hükümet sancak listesi.

## 0. ÖNGÖRÜ (ölçümden ÖNCE; sonradan DOKUNULMADI)
Evren: 6 kayıt — Cizre (ok107) · İmâdiye (Amêdî) (ok109) · Çölemerik (Hakkâri) + Hoşap (Mahmudi) (ek_ferhadpasa) ·
Bitlis + Palu (yerlesimler.js). Bugün 6/6 `d:`, `v:` boş (ölçüldü, `girdi.yukle`).
Uygulayacağım dönüşüm (hükmün harfi):
- 5 kayıtta `d:` dilimi AYNI uçlarla `v:` olur. Bitlis'in ÜÇÜNCÜ `d:` dilimi (1916-08-08 → 1920-04-23, Rus işgali
  SONRASI) `d:` KALIR — hükümet statüsü o tarihte yok (Tanzimat); uç değil, dilim seçimi.
- İmâdiye: `v` 1516-08-24 → **1839-01-01** (TDV MUSUL, yıl) + `d` 1839-01-01 → 1918-11-08 (`y:"antlasma"` bu dilimde kalır).
- Cizre: `v` 1515-09-19 → 1920-04-23 AYNI uçlar, **`kid` YOK** (künye 1508-1627; kid yazılsa `v` künyenin 293 yıl
  DIŞINA taşar = 4c/4d). 1627 bitişi ve 1821/30-1847 ikinci aralık `ic_not`ta beyan.
- `devletler.js`: +1 künye `cezire-hukumeti` (1508-01-01 → 1627-01-01, yil, `boya_gerekli:true`).
Beklenen fark (denetle ÖNCE ↔ SONRA):
- **Değişmez 2 (Osmanlı senkronu):** kırılma +1 (İmâdiye 1839-01-01 `v→d`), **AÇIK 0 → 1** — 1839'da İmâdiye
  maddesi yok (grep: 0) — %70. Öteki 5 kaydın kırılma GÜNLERİ değişmiyor ⇒ başka açık yok.
- Değişmez 1 / 1b / 2s / 2i / 2t: **0 değişim** — %80.
- künye 897 → 898; boya borcu kovası beyanlı 5 → 6 (künye haritada kullanılmıyor) — %60.
- `v:` kullanan sayımlar (tâbi dönem sayısı vb.) +7 dilim (5 kayıt × 1 + Bitlis 2 − … : Cizre 1 · İmâdiye 1 · Hakkâri 1 ·
  Hoşap 1 · Palu 1 · Bitlis 2 = **7**) — %70.
- `renk_olc.py`: değişmez (yeni boya yok, künye çizilmiyor) — %70.
- Açık sayısı ARTARSA (öngörüm: +1) şartname gereği DURURUM ve koordinatöre yazarım (tavan + sabit hükmü onun).

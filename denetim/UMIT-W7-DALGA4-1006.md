# UMIT-W7-DALGA4-1006 — DURUM-TABLOSU-SAYIM-1006b ("boş yer_id: N")

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Bugün basılan N: **4**. SONRA satırı: `**1768** madde · 1418 duygu etiketli · 1629 `yer_id` (boş yer_id: 4) · 27 `vefat_id``.
- 1006 uygulanmış ağaçta 1006b --check: **RED**.

**Öngörü ↔ ölçüm:** N = 4 ✓ · SONRA satırı birebir ✓ · 1006 uygulanmış indekste 1006b RED ✓.

Temel: worktree `C:\atlas-w7` = origin/main **3d89e4c4b6726722435a52dd5306203e7abc44b4**.
⚠️ Ağaç `git -C C:\atlas-umit worktree add` ile kuruldu, talimattaki `-C C:\atlas` ile DEĞİL: önceki dalgalarda "C:\atlas'a dokunma" kuralı vardı ve `worktree add` o deponun `.git`ine yazar. Sonuç aynı (origin/main, --detach).
`--yaz` koşturulmadı, commit yok, motor tuzu dosyalarına 0 dokunuş (diff'te geçmiyor), ağaç sonunda TEMİZ (`status --porcelain` boş).

## 1. Değişiklik (1006'nın üstüne)
- `durum_tablosu.kronoloji_satiri()`: `… %d \`yer_id\` (boş yer_id: %d) · …` — N = `kronoloji_say.js`in `yer_id_bos`u (sabit yazılmadı).
- `durum_tablosu.kronoloji_say()`: node çıktısında `madde/duygu/yer_id/yer_id_bos/vefat_id` tamsayı değilse → ÖLÇÜLEMEDİ (eksik alan `KeyError` ile çökmek yerine).
- ÖLÇÜLEMEDİ hücresi sayı ve "boş yer_id" İÇERMEZ.
- `--yaz` aynı `t = tablo(o)` dizgisini yazar (`durum_tablosu.py:689` print · `:710` §1.5'e yazım) — ayrı yol yok. Bellekte taklit edildi (CLAUDE.md YAZILMADI): §1.5'e düşecek satır
  `| Kronoloji | **1768** madde · 1418 duygu etiketli · 1629 \`yer_id\` (boş yer_id: 4) · 27 \`vefat_id\` |`

## 2. ÖNCE / SONRA (`py arac/durum_tablosu.py`, --yaz'sız, üçü de çıkış 0)
```
origin/main   | Kronoloji | **1774** madde · 1398 duygu etiketli · 1641 `yer_id` · 28 `vefat_id` |
+1006         | Kronoloji | **1768** madde · 1418 duygu etiketli · 1629 `yer_id` · 27 `vefat_id` |
+1006b        | Kronoloji | **1768** madde · 1418 duygu etiketli · 1629 `yer_id` (boş yer_id: 4) · 27 `vefat_id` |
```
Her iki karşılaştırmada `diff` yalnız bu satırı gösteriyor. `--sina` 9/9.
Boş 4: p0063 1734-05-31 · p0917taraf 1886-01-01, 1892-01-01, 1906-10-01.

## 3. Sınav — `denetim/ARAC-KRONO-SAY-SINAV-1006.py` → **63/63** (57 + 6)
- 57 eski üye aynen geçiyor; YÖN 3'ün 8 üyesine "satırda `boş yer_id` YOK" koşulu eklendi (aynı üyeler, sertleşti).
- YENİ: ① sentetik `yer_id_bos = 1` (YÖN1) · ② **N sabit değil:** 0 / 3 / 5 boş `yer_id`li üç dosya → satır sırasıyla `(boş yer_id: 0)` · `(… 3)` · `(… 5)` (3 üye) · ③ YÖN3 "alan eksik (yer_id_bos yok)" → ÖLÇÜLEMEDİ, satırda "boş yer_id" yok · ④ gerçek veri: satırda `(boş yer_id: 4)` = sayacın `yer_id_bos`u.
- Sınav diff'ten uygulanmış ağaçta koşuldu (dosya kümesinin diff'te tam olduğunun kanıtı).

## 4. Diff — `DURUM-TABLOSU-SAYIM-1006b.diff`
- 3 dosya (`arac/durum_tablosu.py` · YENİ `arac/kronoloji_say.js` · YENİ `denetim/ARAC-KRONO-SAY-SINAV-1006.py`), 297+/10−, 343 satır.
- **LF, CR bayt 0** (python ile bayt sayıldı; bu kabukta `grep -c $'\r'` güvenilmez çıktı — her satırı saydı).
- origin/main 3d89e4c4: İLERİ ✓ · GERİ ✗ · uygulanmış ağaçta GERİ ✓ / İLERİ ✗.
- **1006 uygulanmış indekste (`apply --index`) 1006b: ✗** (`durum_tablosu.py:402`, hem çalışma ağacı hem `--cached`) ⇒ yerine geçer, ikisi birlikte inmez.

## 5. Bulunamayan
- 4 boş `yer_id`nin bilinçli "konum yok" beyanı mı, eksik veri mi olduğu: ölçülmedi (kapsam dışı).
- Ölçüm sırasında `girdi.py` bir UYARI bastı (`'dogrulanmadi' BILINEN_ALANLAR'da yok — yerlesimler_ek29.js: Deyrülkamer`) — bu işle ilgisiz, yalnız not; `girdi.py` motor tuzu dosyası, dokunulmadı.

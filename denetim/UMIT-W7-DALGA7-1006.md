# UMIT-W7-DALGA7-1006 — 1886/1892 boş yer_id beyanı + KRONO-SAY sınavının kalan sabitleri

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- YERID-IMZA-1006 p0917taraf'ın 1886/1892 satırlarına DOKUNMUŞ olabilir (imza alanı) → diff onun üstünde kurulur, main'e tek başına RED olabilir.
- Kalan 13 sabitten bugün bayat olan: **0**; kuyruktaki diff'lerin dokunduğu sabit dosyası: **en çok 1** (olaylar.js).

**Öngörü ↔ ölçüm:** IMZA 1886/1892 satırlarına dokunmuş ✗ (dokunmamış — diff main'e tek başına da ✓, anlamca IMZA üstüne kuruldu) · bayat sabit 0 ✓ · kuyruktan sabit dosyasına dokunan diff "en çok 1" ✗ → **3** (ama hiçbiri sabiti değiştirmiyor).

Temel: worktree `C:\atlas-w7` = origin/main **1381bf76**. Commit yok, motor tuzuna 0 dokunuş, ağaç sonunda TEMİZ.

## 1. `BOS-YERID-1886-1892-1006.diff` (YERID-IMZA-1006 uygulanmış hâl üstüne)
- `data/olaylar_p0917taraf.js` :45 (1886) ve :51 (1892): `yer_id:""` kalır, yanına (BOS-YERID-1734 ile aynı biçim)
  `ic_not_yer:"yer_id bilerek BOŞ — bulunamadı: sınır çizgisi olayı; uç noktalar kaynakta (IBS 121) yok. Ölçüm: denetim/KRONO-YER-0075.json (K2_BOLGESEL)"`.
- Refah (:57, 1906) DOKUNULMADI. Dosyanın CRLF çalışma kopyası korunarak düzenlendi; diff LF, **CR 0**, 2+/2−.
- `--check`: main+IMZA ileri ✓ / -R ✗ · uygulanmış ağaçta -R ✓ · main'e tek başına da ✓ (IMZA bu iki satıra dokunmuyor) · zincir main → IMZA → BOS-YERID-1734 → BOS-YERID-1886-1892 ✓.
- Node ile yüklendi: iki madde `ic_not_yer` taşıyor, `yer_id` boş kaldı ⇒ `kronoloji_say` `yer_id_bos` 4 olarak kalır (beyan sayıyı değiştirmez, gerekçeyi kayda indirir).

## 2. KRONO-SAY sınavının KALAN 13 sabiti — aynı riske karşı ölçüm
Taban: main 1381bf76 + 1006b + SAGLAM. Sınav o tabanda ve main+IMZA+1734+1886-1892 zincirinde **67/67**.
`C:\atlas-umit\denetim\*.diff` içinde bu sabitlerin dosyalarına dokunan ve main'e HÂLÂ uygulanabilen (inmemiş) her diff tek tek uygulanıp node ile yeniden sayıldı (betik scratchpad `sabit_olc.sh`):

| Bekleyen diff | Dokunduğu sabit dosyaları | Bayatlayan sabit |
|---|---|---|
| JASENOVAC-BROD-1536-1006 | olaylar_ek5.js | **yok** (ek5 artık ölçülüyor — SAGLAM) |
| OSMAN1-YIL-1006 | olaylar_ek5.js (+ padisahlar.js) | **yok** |
| YERID-IMZA-1006 | olaylar.js · ek5 · ek8 · kamerika · ok106 | **yok** (yer_id DEĞERİNİ değiştiriyor, sayıyı değil) |

Sabitlerin dosyalarının son 30 gündeki değişim sıklığı (`git log --since=2026-09-05`):
| Dosya | Sabitler | 30 g commit | Son |
|---|---|---|---|
| olaylar.js | madde 81 · yer_id 73 | **19** | 10-01 |
| olaylar_ek8.js | madde 35 · duygu 8 · yer_id 16 | **15** | 10-01 |
| olaylar_ek22.js | duygu 1 | 7 | 09-14 |
| olaylar_ek21.js | duygu 4 | 5 | 09-19 |
| olaylar_kamerika.js | madde/duygu/yer_id 11 | 3 | 09-13 |
| olaylar_sh110.js | madde 0 · duygu 0 | 0 | 09-02 |
| olaylar_sk105.js | madde 0 | 0 | 09-03 |

⇒ **Bugün bayat sabit: 0/13. Kuyrukta bayatlatan diff: 0.** Ama risk eşit değil: **olaylar.js (5 sabitin 2'si) ve ek8 (3'ü) yüksek riskli** — ayda 15-19 commit alıyorlar; ek5'i bayatlatan sınıf (madde eklenmesi) bu ikisinde her an tekrar eder. sh110/sk105 (blok yorumlu ölü dosyalar) fiilen donuk; kamerika/ek21/ek22 düşük.
**Öneri (uygulanmadı):** yüksek riskli 5 sabit SAGLAM'ın yöntemiyle ölçüme çevrilsin — olaylar.js için "eski regex − alt_kronoloji adımı", ek8 için "eski regex + `{` ayrı satırlı nesne sayısı" kusur sınıfını dosyadan ölçen kurallar; düşük riskliler sabit kalabilir.

## 3. git status
- `C:\atlas-w7` HEAD 1381bf76 — porcelain BOŞ.
- `C:\atlas-umit` HEAD 807b111b — bu dalganın dosyaları: `?? denetim/BOS-YERID-1886-1892-1006.diff` · `?? denetim/UMIT-W7-DALGA7-1006.md`.

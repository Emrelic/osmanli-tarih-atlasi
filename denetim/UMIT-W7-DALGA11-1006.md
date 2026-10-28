# UMIT-W7-DALGA11-1006 — §1.5 "Kişi kaynağı" satırı (dört kova, ÖLÇÜM)

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-06)
- Ham main: 20 · 2 · 0 · 266 (UMIT'in verdiği) · main + EDIGU → 01 → 02 → 03: 257 · 2 · 29 · 0.
- W16'nın `kova()`'sı `denetim/ARAC-KISI-ORNEKLEM-1006.py`'de (adı tireli, `denetim/`de) ⇒ `arac/` aracı onu import ETMEZ; tanım `durum_tablosu.py`ye taşınır ve sınav iki tanımı gerçek veride + W16'nın 9 örneğinde ÜYE ÜYE eşit sınar.
- Mutasyonlar ("başlar"→"içerir", kova silme, büyük/küçük harf) sınavda ÖLÜR (sağ kalan 0).
- Bu diff 1006b ile AYNI dosyaya (durum_tablosu.py) dokunur; 1006b main'e inmediyse ikisi ARDIŞIK uygulanabilir olmalı — sıra zinciri ayrıca sınanır.

**Öngörü ↔ ölçüm:** dördü de ✓ — ham main 20/2/0/266, zincirde 257/2/29/0 · tanım taşındı, iki tanım üye üye eşit · 5 mutasyonun 5'i öldü · 1006b ile her iki sırada uygulanabilir.

Temel: worktree `C:\atlas-w7` = origin/main **35f455a6**; ölçüm zinciri EDIGU → KISI-KAYNAK-01 → 02 → 03 (+ W16'nın KISI-SAYIM-AYRI-1006 ve -1006b, sınavın çapraz tanımı için). Commit yok · `--yaz` YOK · CLAUDE.md'ye dokunulmadı · motor tuzu 0 · ağaç sonunda TEMİZ.

## 1. `DURUM-TABLOSU-KISI-KAYNAK-1006.diff` (LF · CR 0 · +248/−0 · `arac/durum_tablosu.py` + YENİ `denetim/ARAC-KISI-KAYNAK-SINAV-1006.py`)
- `kisi_kova(k)` — W16'nın `kova()`'sıyla BİREBİR (başlangıç ölçütü: "TDV:" ile başlayan = tdv · küçük harfe çevrilip "bulunamadı" ile başlayan = beyan · öteki dolu = başka · boş/yok = kaynaksız).
  **Neden çağrılmadı, taşındı:** W16'nınki `denetim/ARAC-KISI-ORNEKLEM-1006.py` — `denetim/`de, adı tireli (normal import edilemez), ve `arac/` aracının bir denetim betiğine bağımlı olması ters yön. ⇒ Tanım `arac/`de, eşitlik SINAVLA zorlanıyor (aşağıda ②).
- `kisi_kaynak_say()` — `data/kisiler.js`'i node ile tarayıcı gibi yükler (`new Function("window", …)`); KISILER dizi değilse / node yoksa / çıktı kesikse / sayım patlarsa `{"hata"}`.
- `kisi_kaynak_satiri()` → `TDV N · başka N · bulunamadı BEYANI N · kaynaksız N`; hata → `🔴 **ÖLÇÜLEMEDİ** — … (sebep)`, rakam yok.
- `olc()`'a `o["kisi_kaynak"]`, `tablo()`'ya "Padişah · kartvizit" satırının ALTINA `| Kişi kaynağı | … |`. (Yer bilinçli: 1006b ve KAYNAK-ZAYIF-SAYIM'ın dokunduğu satırlardan uzak.)
- **ÖNCE/SONRA** (`--yaz`'sız, çıkış 0/0), zincirde: `diff` yalnız yeni satır →
  `| Kişi kaynağı | TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0 |`
  Ham main'de aynı kod: `TDV 20 · başka 2 · bulunamadı BEYANI 0 · kaynaksız 266` (sabit değil, ölçüm).
  `--yaz` bu `t = tablo(o)` dizgisini aynen §1.5'e yazar (ayrı yol yok).

## 2. Sınav `ARAC-KISI-KAYNAK-SINAV-1006.py` — **30/30**
- ① 12 fikstür ADIYLA (W16'nın a–l'si; j/k napolyon-bonapart ve francesco-morosini'nin veride BİREBİR kaynak metni, l "Britannica · TDV: napolyon …" — üçü TDV'yi İÇERİR, onunla BAŞLAMAZ ⇒ başka).
- ② TEK TANIM: `durum_tablosu.kisi_kova` ↔ W16 `kova` fikstürde ve gerçek veride (288 kişi) kayıt kayıt eşit.
- ③ gerçek "başka" kovası ADIYLA = {napolyon-bonapart, francesco-morosini}; tdv/başka/beyan sınıfları var. ③b `kisi_kaynak_say` = W16 `say` · satır biçimi.
  ⚠️ "kaynaksız" sınıfı gerçek veride bugün 0 (kampanyanın hedefi) ⇒ onun "sınıf hâlâ var" sorusu SORULMAZ; o kovayı fikstür e/f/g ve yapay kayıt sınar.
- ④ İKİ YÖNLÜ YAPAY: kisiler.js'in geçici kopyasına dört kovadan birer kayıt (başka olan l-biçimli) → her kova tam +1, iki tanım yine eşit.
- ⑤ ÖLÇÜLEMEDİ: dosya yok · bozuk JS · KISILER dizi değil → sebep var, rakam YOK.
- ⑥ MUTASYON — beşi de ÖLDÜ:
  | Mutant | Öttüren soru sayısı | Kim öldürdü |
  |---|---|---|
  | `"TDV" in s` | 8 | i, j, k fikstürü + gerçek veride napolyon/morosini ("TDV'de") |
  | `"TDV:" in s` | 2 | **yalnız l** fikstürü (+ ② fikstür eşitliği) — W16'nın dediği tam doğru: gerçek veri "TDV'de" der, "TDV:" demez; bu mutantı veri YAKALAYAMAZ |
  | `"bulunamadı" in s` | 4 | b, i fikstürü (+ ②) |
  | başka→TDV | 9 | h, i, j, k, l + ③ + gerçek eşitlik |
  | başka→kaynaksız | 9 | aynı |
- Bağımlılık: sınavın ② çapraz tanımı W16'nın 4 kovalı `kova()`'sını ister ⇒ **KISI-SAYIM-AYRI-1006 (+1006b) ÖNCE inmeli**; ham main'deki eski ARAC-KISI-ORNEKLEM 2 kovalıdır.

## 3. `--check` ve sıra
- main 35f455a6: İLERİ ✓ / -R ✗ · uygulanmışta -R ✓.
- 1006b zinciriyle İKİ SIRADA da temiz: main → 1006b → KAYNAK-ZAYIF-SAYIM → **bu** ✓ · main → **bu** → 1006b → KAYNAK-ZAYIF-SAYIM ✓.
- Tam zincir (EDIGU · 01 · 02 · 03 · AYRI · AYRI-1006b · 1006b · KZ-SAYIM · bu): KİŞİ-KAYNAK 30/30 · `--sina` 9/9 · KRONO-SAY 63/63 · KAYNAK-ZAYIF 12/12; satır `TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0`.

## 4. git status
- `C:\atlas-w7` HEAD 35f455a6 — porcelain BOŞ (kalıyor).
- `C:\atlas-umit`: `?? denetim/DURUM-TABLOSU-KISI-KAYNAK-1006.diff` · `?? denetim/UMIT-W7-DALGA11-1006.md`.

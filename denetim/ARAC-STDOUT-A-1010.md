# ARAC-STDOUT-A-1010 — A sınıfı 15 aracın stdout satırı (DENETLE-STDOUT-1010'un aynısı)

Yazıcı: UMIT · 10 Ekim 2026 · taban `origin/main` `65b8965d` (iş burada yapıldı); teslimden önce
`git fetch` → `68bcd6c0`. Aradaki 3 commit `arac/`ta yalnız `paketle.py` + `_bagli_mi.py`ye dokunuyor;
iki diff `68bcd6c0`da da temiz uygulanıyor ve sınav orada yeniden geçti (aşağıda).

## Kusur ve çare
15 dosyada modül düzeyinde, `denetle.py:32`nin 65b8965d'den önceki hâlinin TIPATIP aynısı:
```python
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
```
`redirect_stdout(io.StringIO())` altında `encoding` None ⇒ `AttributeError`, içe aktarım düşer.
Çare, dosya başına aynı (2 satır koşul + 5 satır yorum, `denetle.py` 65b8965d deseni):
```python
if ((getattr(sys.stdout, "encoding", None) or "").lower() not in ("utf-8", "utf8")
        and hasattr(sys.stdout, "buffer")):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
```
Yama `sed`/`replace(…,1)` ile değil, dosya başına ölçülü betikle: her dosyada eski blok **tam 1 kez**
bulunması assert edildi, CRLF korundu. Satırlar `65b8965d`de doğrulandı — envanterle birebir:
`denetle_yayin:48` · `denetle_anakronizm:32` · `_bitisiklik:37` · `_bosluk:60` · `_eslesme:44` ·
`_gorunur:44` · `_gorunurluk:41` · `_olcek:40` · `_statu:49` · `_tabiyet:52` · `_tutarlilik:41` ·
`_defter_sinav_ok102:38` · `_odenmis_sinav_ok102:31` · `_odunc_capraz_sh110:49` · `_yer_eslesme_ok102:58`.

## Sınav — `denetim/ARAC-STDOUT-A-SINAV-1010.py` (dosya adlarını parametre alır; `--hepsi` = 15)
Her soru TAZE alt süreçte. **Yamasız metin diske HİÇ inmez**: yamalı dosyadaki blok bellekte eski iki
satıra çevrilir ve alt sürecin **stdin**'ine verilir, gerçek yolun `__file__`ı ile derlenir
(DENETLE-STDOUT sınavı geçici dosyaya yazıyordu; bu sınav onu da yapmaz). Blok bulunamazsa o dosya
ÖLÇÜLEMEDİ (çıkış 2) — ör. yalnız YAYIN diff'i inmişken `--hepsi` 14 ölçülemedi + çıkış 2 verir (ölçüldü:
`denetle_olcek` → "yama bloğu 0 kez", çıkış 2).
- (a) yamasız StringIO altında içe aktarım **düşmeli** · (b) yamalı **geçmeli** (`sys.stdout is tampon`,
  Türkçe tamponda) · (d) `PYTHONIOENCODING=cp1254` akışında Türkçe UTF-8 baytlarıyla, yamalı = yamasız bayt
  bayt · (c) yalnız `--cli <ad>`: gerçek CLI `PYTHONHASHSEED=0 py arac/<ad>.py > dosya` (yamalı) +
  çalıştırıcıda yamalı/yamasız `__main__` — çıkış kodu üçünde aynı, yamalı = yamasız bayt bayt, CLI = yamalı.

### 1) YAYIN — `denetle_yayin.py:48`, İLK ve TEK BAŞINA (diğer 14'e dokunulmadan önce)
```
✓ (a) yamasız StringIO: rc=7 DUSTU AttributeError: 'NoneType' object has no attribute 'lower'
✓ (b) yamalı  StringIO: rc=0 ICE-AKTARILDI yakalama=True
✓ (d) cp1254: rc 0/0 · bayt-eşit=True · UTF-8 Türkçe=True
✓ (c) CLI: çıkış CLI=1 yamalı=1 yamasız=1 · yamalı/yamasız bayt-eşit=True (35575 bayt) · CLI/yamalı bayt-eşit=True
SONUÇ: 1 dosya · 4 soru · 0 kaldı · 0 ölçülemedi   (çıkış 0, 8 dk 44 sn — üç tam kapı koşusu)
```
(c) TAM koşu yapıldı (hafif kipe inilmedi): tek `denetle_yayin` koşusu ~3 dk. Çıkış **1** bu ayrık
worktree'de normaldir ve üç koşuda AYNIDIR: üretilmiş/gitignore'daki dosyalar (`data/bolgeler.js`,
`donemler_ust.js` …) worktree'de yok ⇒ "kapı alanı YOK … ÖLÇÜLEMEDİ" + İHLAL. Yama öncesi ayrı bir
koşu da aynı 35.575 baytı vermişti. Yani yama kapının hükmünü ve çıktısını değiştirmiyor.

### 2) A — kalan 14 (YAYIN'ın üstüne)
`--hepsi` (15 dosya, YAYIN dahil): **SONUÇ: 15 dosya · 45 soru · 0 kaldı · 0 ölçülemedi**, çıkış 0, 10 sn.
14'ün her biri için (a) `DUSTU AttributeError` ✓ · (b) `ICE-AKTARILDI yakalama=True` ✓ · (d) bayt-eşit ✓.
14 için (c) CLI karşılaştırması **koşulmadı** (görev yalnız YAYIN için istedi); sınav `--cli <ad>` ile
her biri için koşturulabilir.

## Diff'ler (origin/main'e karşı, Python ile yazıldı: LF, BOM yok, CR 0)
| dosya | içerik | bayt | `git apply --check` |
|---|---|---|---|
| `ARAC-STDOUT-A-1010-YAYIN.diff` | `arac/denetle_yayin.py` + **yeni** `denetim/ARAC-STDOUT-A-SINAV-1010.py` | 11.283 | ✓ tek başına |
| `ARAC-STDOUT-A-1010.diff` | 14 `arac/` dosyası (sınav YOK — YAYIN'dan gelir, çakışma olmasın diye) | 14.708 | ✓ tek başına · ✓ YAYIN'dan SONRA |

Temiz `origin/main` (`68bcd6c0`) ağacında: YAYIN `--check` ✓ · A `--check` ✓ · YAYIN uygula → A `--check`
✓ → A uygula ✓ → `py denetim/ARAC-STDOUT-A-SINAV-1010.py --hepsi` **45/45, çıkış 0**;
`git diff --stat`: 15 dosya, +105 −15. ⚠️ A diff'i YAYIN'sız inerse sınav dosyası olmaz — sıra YAYIN → A.

Tuz: 15 dosyanın hiçbiri tuz dosyası (`uret_petek · renkler · girdi · motor_onbellek · gun · yukseklik`)
değil ⇒ KOŞU 22 sürerken inebilir, motor parmak izini değiştirmez.

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** 15/15 dosyada kusur gerçek (a) ve çare gideriyor (b); cp1254 davranışı aynı (d);
  `denetle_yayin` CLI çıktısı yamalı = yamasız = CLI **bayt bayt** (35.575), çıkış 1=1=1. Ön ölçüm
  (`ARAC-STDOUT-ZINCIR-1010.md`): A'nın yalnız `denetle_yayin`ı kapı zincirinde; öteki 14'ün 10'u 🟡, 4'ü ⚪
  (`_defter_sinav_ok102` · `_odenmis_sinav_ok102` · `denetle_tabiyet` · `denetle_tutarlilik`).
- **Bulamadım:** 14 dosya için CLI bayt karşılaştırması yapılmadı (istenmedi). `denetle_yayin`ın gerçek
  `C:\atlas` ağacında (üretilmiş dosyalar mevcutken) çıkış-0 hâli bu worktree'de ölçülemedi — aynı kod yolu.
- **İstiyorum:** ① YAYIN diff'inin inişi (bekleyen yayından önce/bağımsız; tuzda değil) ② sonra A diff'i
  ③ B/C için `_utf8.py` kararı — ön ölçüm `ARAC-STDOUT-ZINCIR-1010.md`de ("önce 10" + BEYANLI_ISTISNA notu).

YENİ DOSYALAR: `denetim/ARAC-STDOUT-A-1010-YAYIN.diff` · `denetim/ARAC-STDOUT-A-1010.diff` ·
`denetim/ARAC-STDOUT-A-1010.md` · `denetim/ARAC-STDOUT-ZINCIR-1010.md` ·
`denetim/ARAC-STDOUT-A-SINAV-1010.py` (YAYIN diff'i içinde)
DEĞİŞEN (diff'lerde): `arac/denetle_yayin.py` + 14 A dosyası

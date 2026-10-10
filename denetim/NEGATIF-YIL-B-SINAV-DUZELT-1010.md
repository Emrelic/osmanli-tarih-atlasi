# NEGATIF-YIL-B-SINAV-DUZELT-1010 — NEG-B sınavının bayat varsayımı

Oturum: KRONO-NEG-1010 (UMIT) · 10 Ekim 2026 · **Taban `origin/main` `ba636eee`** · worktree `C:\atlas-kroneg` (kaldırıldı).
Teslim: `denetim/NEGATIF-YIL-B-SINAV-DUZELT-1010.diff` (yalnız `denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py`,
+41/−7, sha256 `3e50965e19988534…`) · bu md. Taban sürüm = main `397c00c6` (blob 15.196 B LF; diskte CRLF 15.486 B —
partinin "15.486 B"si ile aynı dosya). NEG-B uygulaması: `NEGATIF-YIL-1010-B-v2.diff` (sha `d298c46f…`)
`--exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py`; `ba636eee`de `apply --check` TEMİZ ⇒ :3188 hunk'ını düşürmek
GEREKMEDİ (D5 main'de yok).
Önbellek izolasyonu ölçüldü: `MOTOR_ONBELLEK_DIZIN` süreç/User/Machine BOŞ ⇒ öntanımlı `C:\atlas-kroneg\_motor_onbellek`
(yok, yerel sabit disk C:); sınav `uret_petek`/`motor_onbellek`i ithal ETMİYOR (yalnız `gun`, `girdi`, `denetle`).

## Düşen iki soru — adıyla, ve neden
Bölüm **⓪ GERİYE UYUMLULUK**:
1. `sorted(Tarih) == sorted(düz dizgi) — N ayrık tarih`
2. `200.000 rastgele çift: Tarih kıyası == sözlük kıyası (bugünkü veri)`

İkisi de "Tarih sırası == sözlük sırası" der. Bu yalnız veride negatif yıl YOKKEN doğrudur. İki negatif tarih
arasında sözlük sırası TERS (`"-0329" < "-0549"`), `Tarih` ise doğru olarak gün sırasını verir ⇒ veriye ilk
MÖ tarih girdiği an (partinin amacı: KÜNYE `-0538…`, ANA `kur:/bit:`) sınav **DOĞRU davranışı kusur sayar.**

## Düzeltme — veriden bağımsız; ölçüt gevşemedi
- Soru 1 → `sorted(Tarih) == GÜN sırası` (anahtar `(gun.gun, dizgi)` — `class Tarih` sözleşmesi: önce gün, eşitse
  dizgi) **VE** negatif olmayan altkümede `sorted(Tarih) == sorted(düz dizgi)`.
- Soru 2 → 200.000 çift, bütün veride `Tarih kıyası == GÜN kıyası` **VE** negatif olmayan altkümede `== sözlük`.
- Negatif tarihin VARLIĞI kabul edilir, sayısı basılır (`veride negatif (MÖ) tarih: N`), geçme koşulu değildir.
- Soru sayısı AYNI (67), adlar korunarak genişletildi (SINAV-ISIRMA eşleşmesi için).
- **Neden doğru:** negatifsiz veride yeni soru eski soruyla BİREBİR aynı şeyi sorar (gün sırası = sözlük sırası,
  altküme = bütün küme); negatifli veride sözlükten DAHA SIKIDIR — doğru sırayı ister. Mutasyon ölçüldü:
  `Tarih` yerine düz `str` (sözlük) konunca 42 negatifli veride soru 1 **False**, soru 2 **21 fark** ⇒ yakalar.
- **utf-8:** `for _akis in (sys.stdout, sys.stderr): if hasattr(_akis, "reconfigure"): _akis.reconfigure(...)`.
  Koşulsuz değil (`DURUM-TABLOSU-SESSIZ-YUTMA-1009`: StringIO'da AttributeError sayımı yutar). Ölçüldü: main sürümü
  dosyaya yönlendirmede `UnicodeEncodeError: 'charmap' … '\u2462'` ile ilk satırda çöküyor; düzeltilmiş sürüm
  `PYTHONIOENCODING` olmadan yönlendirmede temiz.

## Ölçüm — iki ağaç × iki veri
| ağaç | veri | main sürümü | düzeltilmiş |
|---|---|---|---|
| NEG-B uygulanmış | bugünkü (negatif 0, 3.462 tarih) | 67/67 (yalnız `PYTHONIOENCODING=utf-8` ile; onsuz çöker) | **67/67**, çıkış 0 |
| NEG-B uygulanmış | + sentetik künye (`f:-0549` `t:-0329` + 40 MÖ kronoloji, 42 negatif) | **65/67** — iki soru ✗ (29 fark) = partinin bulgusu | **67/67**, çıkış 0 |
| NEG-B'siz (main) | bugünkü | çıkış 1 `ImportError: cannot import name 'Tarih'` | çıkış 1, aynı ImportError (:88) — **ısırma korunuyor** · `--envanter .` → 6 site, çıkış 1 |
Sentetik künye yalnız tek kullanımlık worktree'de, ölçümden sonra `git checkout` ile geri alındı.

## ÜÇLÜ KURAL
**① Ölçtüm:** düşen iki soru ⓪'daki sözlük-eşitliği soruları; sentetik negatifle main sürümü 65/67, düzeltilmiş 67/67;
NEG-B'siz ağaçta ikisi de çıkış 1; mutasyon (Tarih→str) yakalanıyor.
**② Bulamadım:** partinin gerçek Sümer verisiyle (C:\atlas-parti) koşturmadım — o ağaç bende yok; sentetikle aynı sınıf.
**③ İstiyorum:** diff'in main'e inişi (sınav dosyası tek; tuz dışı).

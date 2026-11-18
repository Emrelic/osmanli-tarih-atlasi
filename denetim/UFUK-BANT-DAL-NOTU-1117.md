# UFUK-BANT dalı notu — `ufuk-bant-sinav-1117` (HAVVA ölçümü, 18 Kasım 2026)

Makine: HAVVA (worktree agent-af10b91440acd2278). Tam inşa YOK, `main`e push YOK, push kapısı yalnız `--kuru`.
Dal ucu (merge öncesi) `48f91b2bb`; `origin/main` (358db4c7a) dala merge edildi (çatışmasız).

## 1. Dalın `ufuk-bant-1117`'ye farkı (`git diff --stat origin/ufuk-bant-1117...HEAD`, merge öncesi)

4 dosya, +316/−25: `arac/uret_petek.py` (+8/−2: yalnız `seyrelt._halka_sade` düzeltmesi, `[:-1]` kaldırıldı),
`arac/dolgu.py` (+9/−3, `kosudan(..., ufuk_gun=)`), `denetim/ARAC-UFUK-BANT-GOVDE-SINAV-1117.py` (harness),
`denetim/UFUK-B-DOLGU-BUTCE-ONERI-1117.md`.

- **Dolgu parametresi:** `dolgu.py kosudan(ufuk_gun=)` — dalda VAR; `None` ⇒ eski davranış (10 gün, 201,6 km).
- 🔴 **Commit mesajı (48f91b2bb) yanlış söylüyor:** "uret_petek B dolgu bloğu `MOTOR_DOLGU_BANT_GUN` ile
  `data/dolgu_5g.js`, `dolgu_7g.js` üretir" yazıyor, ama `grep MOTOR_DOLGU_BANT_GUN|ufuk_gun arac/uret_petek.py`
  **boş**; `uret_petek.py` farkı yalnızca seyrelt düzeltmesi. Yani B dolgu döngüsü dala UYGULANMADI (öneri
  taslağı §4b ile tutarlı). `MOTOR_B_DOLGU` varsayılan **KAPALI** (`uret_petek.py:10157`, "dolgu: KAPALI" satırı 10185).
- **Leman Gölü: 121 km² beyanlı borç** — bkz. §3 (Cenevre/İsviçre 40→56 saat bant geçişinde 121 km² parça kaybı,
  bbox 6.11–6.28 E, 46.31–46.48 N). Çözülmedi, beyan.

## 2. `_halka_sade` düzeltmesi — ÖNCE/SONRA (HAVVA'da yeniden ölçüldü)

Yöntem: `ARAC-UFUK-BANT-GOVDE-SINAV-1117.py` (bölüm ① ve ⑥), motor kesiti, tam dünya devlet seti, kutu+aralık aşağıda.
ÖNCE = `arac/uret_petek.py` `origin/ufuk-bant-1117` hâli (`[:-1]` var); SONRA = dal hâli. İkisi aynı kutu/aralıkta koşuldu.
Ham çıktılar scratchpad'de (repoda değil). Kutular: **İberya** `--kutu=-10,35,5,44.5 --aralik=0800-01-01,1300-01-01`
(1142 devlet-dönem); **Alp** `--kutu=5,43,17,49 --aralik=0800-01-01,1300-01-01` (1431 devlet-dönem).
**Not:** önceki raporun kutu/aralığı elimde yoktu; bu yüzden mutlak sayılar aynı çıkmaz.

| Ölçü | ÖNCE | SONRA |
|---|---|---|
| Zeyyani 1281 (seyrelt öncesi 91.974) | **71.924** (−%21,8; seyrelt −20.050) | **92.109** (+%0,15) — yayın 71.924→92.109 |
| Zeyyani 1509 | 89.694→69.625 (−%22,4) | 89.827 (+%0,15) |
| Empuries 0819 (öncesi 3.079) | 2.870 (−%6,8) | 3.029 (−%1,6) |
| Provence 1000 (öncesi 3.251) | 3.286 (+%1,1) | 3.242 (−%0,3) |
| İspanya 1479 (öncesi 461.748) | 461.623 (seyrelt −125) | 461.648 (−99) |
| İspanya 1492 (öncesi 486.679) | 486.512 (−167) | 486.534 (−145) |
| Almanya 1235 | 2.169 (değişmez) | 2.169 |
| İberya kutusu: >%5 sapmalı dönem | **17** | **0** |
| İberya kutusu: >%1 sapmalı dönem | **117** | **61** |
| Alp kutusu: >%5 | **75** | **9** (Venedik 1281 −%7,3 / 1322-27 −%5,1..5,3; Çekoslovakya 1920-45 −%6,4: bunlar 3-6 bin km², düzeltmeyle ilgisiz) |
| Alp kutusu: >%1 | **293** | **58** |
| hat eşitliği ihlali (bant ↔ seyrelt-öncesi) | İberya 0 · Alp 3 | İberya 0 · Alp 3 (Liechtenstein 1719 −3, Sırp Krajina 1995 −4, Urbino 1443 −2 km²: yuvarlama, düzeltmeyle ilgisiz) |

**Önceki rapordaki şu sayılar BURADA yeniden üretilemedi:** Zeyyani 71.839→92.042 (burada 71.924→92.109, aynı yön,
%0,1 fark), Provence 1000 −%28,8 (burada +%1,1 → −%0,3; −%28,8 bu kutuda yok), Empuries 819 −%7,4 (burada −%6,8 → −%1,6),
Almanya ~−%5,5 ve İspanya −%9,9 (burada Almanya değişmez, İspanya <%0,1), "İberya >%5 8→0 / >%1 45→24" ve
"Alp >%5 125→0 / >%1 172→0" (burada 17→0 / 117→61 ve 75→9 / 293→58). Sebep: kutu/aralık/devlet kümesi farklı;
**ölçülmedi: önceki kutu/aralıkla birebir tekrar.** Yön (iyileşme, İberya >%5 sıfır) doğrulandı; Alp >%5 sıfıra inmedi (9 kaldı).

## 3. Monotonluk (5 ≤ 7 ≤ 10) — düzeltme SONRASI

- **Roma / Massalia / Kartaca, −0200..−0100** (`--kutu=3,40,16,46 --aralik=-0200-01-01,-0100-01-01 --devlet=roma-cumhuriyeti,massalia,kartaca`,
  süzgeç yüzünden komşu etkisi sınırlı): **GERÇEK ihlal 0**, komşu-genişledi 0; 43 devlet-dönem. Örnek gün −0150-06-15:
  Massalia ≤5/≤7/≤10 = 25.611/36.933/51.715 (taban 51.628), Roma-Cumhuriyeti 124.491/135.005/138.587 (taban 139.075).
  Hat eşitliği ihlali 0; seyrelt etkisi >%0,5: 11 dönem (hepsi +110..+577 km², Roma ~%0,2). Seyrelt taraması: >%5: 0, >%1: 2.
- **İsviçre 1795–1805:** süzgeçli koşu (`--devlet=isvicre,helvetik-cumhuriyeti`, komşusuz) 8 "GERÇEK-İHLAL" verdi
  (714 km², bbox 5.96–6.49 E 46.43–46.85 N, 40→56). Aynı dönemler tam dünya setiyle (Alp koşusu) **KOMŞU-GENİŞLEDİ
  (örtüşme %70-79)** olarak sınıflandı ⇒ gerçek ihlal değil; süzgeçli koşudaki sonuç komşu yokluğu artefaktı.
  Alp koşusunun tek **GERÇEK-İHLAL**'i: `cenevre-cumhuriyeti` 1536-05-21, 5.308/5.187/5.187, kayıp parça 121 km²
  (6.11–6.28 E, 46.31–46.48 N, komşu örtüşmesi %25) = **Leman Gölü, beyanlı borç**.
- İberya koşusu: GERÇEK ihlal 0; komşu-genişledi 1 (`ispanya-milliyetci` 1936-07-18, örtüşme %100).
- Roma sınavı (ayrı alet) bu notta koşturulmadı; yukarıdaki Roma satırları `ARAC-UFUK-BANT-GOVDE-SINAV-1117.py` çıktısıdır.

## 4. KOSU-YAYIN.md koşu-öncesi ön liste — bu dala karşı

| Kalem | Durum |
|---|---|
| Motor dondurma (§D): tuz dosyası değişti mi | **Değişti**: `arac/uret_petek.py` farkı `origin/main`e göre +203/−46 (renkler/girdi/motor_onbellek dokunulmamış). Tam inşa koşusunda bu biriken yama zaten girer; ama HAVVA'da başka koşu sürüyorsa `main`e girmez. **Koşu başlamadan bu dal `main`e girmemeli ya da koşu bu dalın tuzuyla başlamalı.** |
| Tuz ⇒ aynı commit'te `uret_altlik.py` + `data/altlik.js` | ❌ **KARŞILANMADI**: dalda `data/altlik.js` değişmemiş; `denetle_yayin` "GERÇEK BAYAT" verip herkesin push'unu durdurabilir (KOSU-YAYIN §C MÖ notu). Tuz-onaylı iniş öncesi `py arac/uret_altlik.py` + dosya eklenmeli. |
| DEM (781 MB `veri-kaynak/yukseklik/*.tif`) | ❌ taze worktree'de YOK (yalnız `KAYNAK.md`); bu ölçüm için `C:\atlas-kosu39`'dan kopyalandı (gitignored). Koşu klasörüne ayrıca kopya gerekir. |
| Disk | ✓ 87 GB boş (C:, %82 dolu) |
| 100 MiB eşiği | ✓ `devlet_parcalar.js` 76,5 MB (pay %26 — KOSU-YAYIN'in %10 şartının üstünde), `ufuk_bant_parcalar*.js` 47,2+47,2+13,2 MB (45 MiB bölmeli, güvenli) |
| Kilit | ✓ `__MAIN_PUSH__` kapıda alındı/bırakıldı; `js/app.js` kilidi `oturum-c96fc2` bayat (alındı 8,9 sa), bu ölçümde dosya yazılmadı |
| Koşu bayrakları | ✓ `MOTOR_UFUK_BANT=40,56,80` (80 şart) · bu dal yeni bayrak İSTEMİYOR; `MOTOR_B_DOLGU` kapalı kalmalı (açılırsa +%144 dolgu süresi, §UFUK-B-DOLGU) |
| Bekleyen yamalar (KUR-DEVIR, KUSATMA-BILESEN, TOHUM-YAKA, KISTAK-KOPRU, YAKA-KILIDI) | ✓ kodları `uret_petek.py`'de mevcut (bayrak kontrolleri 513-5724. satırlar); bayrakların koşu komutuna girip girmediği bu notun işi değil — **ölçülmedi** |
| Üretilmiş dosyalar (`devletler_harita.js`, `donemler.js` ham) | worktree'de yok; denetle öncesi `coz-c` ×2 koşuldu (çıkış 0) |
| Kesilen koşu `*.pkl` bozuk dosya kontrolü | uygulanmaz (devam eden koşu yok) |
| `main` gerisi | ✓ merge edildi (358db4c7a); dal 86 commit gerideydi |
| Defender tuzağı | ⚠️ `data/yerlesimler_hint_adalar.js` bu worktree'de ve `%TEMP%\petek_girdi_*` kopyasında Defender tarafından karantinaya alındı (harness 3 kez Errno 22/ENOENT ile düştü). Ölçüm süresince dosya geçici olarak boş `window.YERLESIMLER_HINT_ADALAR = [];` yapıldı, sonra `git checkout` ile geri alındı (commit'e girmedi). HAVVA koşu klasöründe aynı karantina tekrarlanabilir — koşuyu `C:\atlas*` altında, Temp dışında başlat. |

## 5. `push_kapisi.py --kim "HAVVA" --kuru` (itmeden)

Çıkış **1**, kapı ②/③ aşamasında durdu:

```
③ 7 commit · 8 dosya (arac/dolgu.py, arac/uret_petek.py, denetim/..., index.html, js/app.js)
🔴 REDDEDİLDİ: TUZ dosyası itiliyor: arac/uret_petek.py — koşu HAVVA'da sürüyor olabilir ve bu makine GÖREMEZ.
   HAVVA'da koşu yoksa: --tuz-onay "<nasıl doğruladın>"
   --kuru: rebase GERİ ALINDI — HEAD 7f0afe50a → 121fc2a40 (kurudan önceki hâl).
```

- **`--tuz-onay` GEREKİR** (uret_petek.py). **`--uretilen-onay` gerekmez** (dalda `data/*parca*.js` / `*_ust.js` değişikliği yok).
- Denetim/denetle_yayin aşamasına ulaşılmadı (kapı tuz reddinde durdu); bu yüzden "kapı geçti" DEĞİL, **ölçülmedi**.
- Bu makinede main push yasak; iniş KASA'dan `--tuz-onay "<gerekçe>"` ile yapılmalı.

## 6. `py arac/denetle.py` (coz-c ile, merge sonrası dal ucu)

`py arac/kodla.py coz-c data data/devletler_harita.js` (çıkış 0) + `coz-c ... data/donemler.js donem` (çıkış 0), sonra
`py arac/denetle.py` → **çıkış 0, "SONUÇ: temiz"**. Değişmez 8a ✓ (283, tavan 283), 8b ✓ (0), 8k ✓, 8m ✓.
Uyarı (ihlal değil): YIL-TEMSİLÎ BORÇ tavanı aşıldı (438 > 436).
**Sınırlama:** `denetle` COMMIT'Lİ veriyi/gövdeyi ölçer; `_halka_sade` düzeltmesi ancak HAVVA tam inşasından sonra gövdeye
yansır, yani bu 0 düzeltmenin etkisini ölçmez (8a'nın "gövde 2026-11-18 05:30" damgası eski koşuya aittir).

# ARAC-CIKIS-KODU-DUZELT-1010-Y — üç YALAN-0 aracının çıkış kodu

Taban: `origin/main` `f0b6fd50` (ayrı worktree `C:\atlas-umit-cikY`, detached; iş sonunda kaldırıldı).
Dayanak: `denetim/LAB-KAPI-CIKIS-KODU-1009.md` §2.2 (b6131aed) — satır 4, 10, 17.
Çıkış sözleşmesi: `CLAUDE.md §3` — 0 temiz · 1 ihlal · 2 ölçülemedi.
Diff: `denetim/ARAC-CIKIS-KODU-DUZELT-1010-Y.diff` (3 dosya, +32/−3, LF, BOM yok, CR 0, temiz index'te `git apply --check` ✓).

## 1. SINAV-DONEM-KAYNAK-0907 — yan etki hükmü

**Ölçüm (Python audit hook: her write-mode `open`, `mkdir`, `remove`, `rmtree`, `Popen`):** 9 olay.
Hepsi `%TEMP%\sinav_donem_*` altında: `mkdir` ×2 → `open-w data\yer_yama_SINAV.js` → `node -e <JS>` → `rmtree`.
Bunlara `tempfile`ın kendi yazılabilirlik yoklaması (`os.remove %TEMP%\<rastgele>`) da dahil.
Koşudan sonra **`git status` boş**, `%TEMP%`te `sinav_donem_*` kalmadı.
- `exec` yalnız `ast` ile çıkarılan `js_yaz` FunctionDef'ini derliyor, modül gövdesini değil. `js_yaz` saf bir işlev (dize üretiyor, G/Ç yok).
- `node -e` metni (`_sahiplik_uygula.py` `JS`) yalnız `readdirSync`/`readFileSync` + `stdout` kullanıyor, yazma yok (koddan okundu; audit hook node'un içini görmez).
- ⚠️ `KOK = os.getcwd()`: araç depo kökünden koşturulmalı.

**HÜKÜM: iki kaynak da kendi evreninde haklı, ama iki cümle aynı soruyu sormuyor.**
- **Envanter haklı:** araç repoya hiçbir şey yazmıyor, `git status` temiz kalıyor.
- **LAB-1009 da doğru ölçmüş:** statik AST, L75-76'daki `open('w')`yı yakalamış. Ama o yazım OS geçici dizinindedir ve `finally` içinde silinir. LAB'ın "dosya yazar ⇒ koşulmadı" sınıfı bu aracı fazladan dışarıda bırakmış.
- **Önerilen dil:** "yalnız `%TEMP%`e yazar, siler; repo yan etkisi YOK".

| Yol | Önce | Sonra |
|---|---|---|
| bugün (her şey 🟢) | 0 | **0** |
| `js_yaz` `kaynak:`ı düşürüyor → "🔴 KUSUR VAR" | **0 (YALAN)** | **1** |
| node süzgeci `kaynak:`ı düşürüyor → "🔴 HAYIR" | **0 (YALAN, üstelik 🟢 hüküm basıyordu)** | **1** |
| node bulunamıyor | 1 (yakalanmamış istisna, ihlal kılığında) | **2** |

📌 LAB'ın görmediği **ikinci YALAN-0 yolu**: ② node süzgecinin sonucu (🔴 HAYIR / node hatası) hükme hiç girmiyordu. Araç 🔴 basıp ardından "🟢 YAZILABİLİR" diyordu. Ölçüm mantığı değişmedi, yalnız ②'nin sonucu hükme bağlandı.

## 2. ARAC-UYGULA4-ONSINAV-0918

| Yol | Önce | Sonra |
|---|---|---|
| **bugün** — "3 km eşiği: 🔴 İHLAL" (en yakın 0,0 km = `Kuban deltası bozkırı`, noktanın kendisi) | **0 (YALAN)** | **2 ÖLÇÜLEMEDİ** |
| uzak yeni nokta (46,00/36,50) | 0 | **0** |
| Anapa'ya <3 km yeni nokta | **0 (YALAN)** | **1** |
| ±30 günde maddesiz hedef (`0500-06-15`) | **0 (YALAN)** | **1** |

⚠️ **Bugünkü 🔴 gerçek ihlal değil.** UYGULA-4 18 Eylül'de indi, ön sınavın "yeni" noktası artık veride ve kendisiyle eşleşiyor. Sorulan soru bayatlamış.
- Düz bir `exit 1` bugün **yalan-1** verirdi. Bu yüzden şu kural eklendi: aynı normalleştirilmiş ad ve <0,05 km ⇒ "nokta zaten veride" ⇒ **2**.
- ② Belgrad bölümü bilgi amaçlı, hükme girmiyor (öncesi gibi).
- ③ Bugün üç hedefin üçü de ≤30 gün içinde (0 · 0 · 0 gün).

## 3. ARAC-HARITA-DURUM-0074-KABARTMA-SINAV

Harita çıktısı OKUMUYOR: yalnız `arac/renk_olc.py` (`BOYALAR`, `KABARTMA_TON`, kaynak metni) okunuyor. `devletler_harita.js` konusu bu araca uygulanmıyor.

| Yol | Önce | Sonra |
|---|---|---|
| bugün — HEPSİ GEÇTİ | 0 | **0** |
| B = `#f2f1c1` (yanlış alarm) → "SINAV KALDI" | **0 (YALAN)** | **1** |
| A2 = `#101070` (yakalayamaz) → "SINAV KALDI" | **0 (YALAN)** | **1** |

⚠️ **Yan etki:** her koşuda **izlenen** `denetim/HARITA-DURUM-0074-KABARTMA-SINAV.json` dosyasını yeniden yazıyor. Bugün tek satır değişti (fark: `renkler.py` paleti). Değişiklik worktree'de geri alındı.
- Çıkış kodu json yazıldıktan SONRA veriliyor (sıra korundu).
- Sınav C'nin "DONUS metni kaynakta yok" hâli de 1 veriyor; aslında ölçülemedi (2) sayılabilir. Mantığa dokunulmadı, not olarak bırakıldı.

## Sınav — 11/11 tuttu

Bugünkü veri ve yapay düşüşler, geçici kopyalarda koşturuldu:
- DONEM-KAYNAK'ın düşüşleri `%TEMP%`te sahte bir kök kullandı (`_sahiplik_uygula.py` kopyası değiştirildi). Node yokluğu `PATH` daraltılarak sağlandı.
- UYGULA4 ve KABARTMA düşüşleri `denetim/_cikY_*.py` kopyalarıyla koştu, kopyalar `finally` içinde silindi.
- Koşu sonrası `git status` = yalnız 3 araç.

## ölçtüm · bulamadım · istiyorum

**ölçtüm:**
- 3 araçta 7 YALAN-0 yolu vardı: DONEM 2 · UYGULA4 3 · KABARTMA 2. Hepsi kapandı.
- Bir yalan-1 yolu (node yokluğu) 2'ye çevrildi.
- UYGULA4'ün bugünkü 🔴'si bayat soru, ihlal değil ⇒ 2.
- SINAV-DONEM-KAYNAK repoya yazmıyor; yalnız `%TEMP%` (audit hook ile ölçüldü).

**bulamadım:**
- Envanterin "yan etkisiz" cümlesinin geçtiği dosyayı aramadım. `denetim/*.md` içinde `DONEM-KAYNAK-0907` + "yan etki" araması boş döndü. Hüküm, iki cümlenin metnine göre değil ölçüme göre verildi.
- `_sahiplik_uygula.py`deki `SyntaxWarning: invalid escape sequence '\.'` (L14, `ast.parse` sırasında) zararsız. Dokunmadım.

**istiyorum:**
1. Diff'in koordinatör tarafından indirilmesi.
2. LAB envanterinde SINAV-DONEM-KAYNAK'ın "dosya yazar (koşulmadı)" sınıfından "yalnız %TEMP%" sınıfına alınması. Statik AST, geçici dizine yazımı repo yazımından ayırmıyor; aynı kusur başka araçları da gereksiz yere dışarıda bırakıyor olabilir.
3. UYGULA4 ön sınavı: soru bayatladığı için "tarihî" işaretlenip kapı/toplu koşu listelerinden çıkarılması önerilir (kalıcı sonucu 2).

YENİ DOSYALAR:
- `C:\atlas-umit\denetim\ARAC-CIKIS-KODU-DUZELT-1010-Y.diff`
- `C:\atlas-umit\denetim\ARAC-CIKIS-KODU-DUZELT-1010-Y.md`

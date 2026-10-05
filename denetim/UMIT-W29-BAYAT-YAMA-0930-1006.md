# UMIT-W29 · BAYAT YAMA? — ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi.diff (6 Ekim 2026)

Taban: `origin/main` **57f81abe** (geçici ağaç `C:\atlas-w29`, iş bitince kaldırıldı).
Öngörü ölçümden önce mühürlendi: `denetim/UMIT-W29-ONGORU-1006.txt` ("main'de `dom_sozlesmesi` YOK →
yama bayat değil, yeniden üretilir"). **Öngörü tuttu.**

## ① Yamanın düzelttiği kusur, sayıyla
Yayın kapısı (`denetle_yayin.py`) **JS→HTML DOM sözleşmesini sormuyor**: js'nin `getElementById` ile
aldığı id'den `.options/.value/.checked/.selectedIndex` okunuyorsa index.html'de o id'nin etiketi
(select/input/…) uyuyor mu? Vaka 30 Eylül: 2ddede3d yeni index.html'i, eşi app.js olmadan commitledi;
`#ufuk-sec` `<span>` olmuştu, JS `.options` okuyup açılış perdesini kilitledi.
Ölçüm (yeni yamanın `dom_sozlesmesi()` işleviyle, salt `git show`):

| rev | js | id beklentisi | UYUMSUZ |
|---|---|---|---|
| çalışma ağacı (57f81abe) | 9 | 11 | **0** |
| HEAD 57f81abe | 9 | 11 | **0** |
| 2ddede3d (kırık) | 9 | 13 | **2** `#ufuk-sec <span>` · `.options` + `.value` |
| 9a956026 (kırık) | 9 | 13 | **2** (aynı) |
| 17cd2f98 (sağlam) | 9 | 13 | **0** |

İki yönlü sınav 5/5 (0930 raporuyla birebir aynı).

## ② Kusur bugün main'de hâlâ VAR MI? — EVET (kapı açığı olarak)
- `git log -S dom_sozlesmesi --all -- arac/` → **0 commit**. `git log -S getElementById -- arac/denetle_yayin.py` → **0 commit**.
- main `denetle_yayin.py` (1704 satır) içinde `getElementById` / `.options` / DOM etiket sorusu: **0 eşleşme**.
- ⇒ Soruyu başka bir commit getirmemiş. Bugünkü ağaçta canlı uyumsuzluk 0 (kırık yayın geri alınmıştı),
  ama aynı yarım commit yarın yeniden olursa kapı **ötmez**. Kusur = soru yok; düzeltilmemiş.
- Eski yamanın uymama sebebi: yalnız 3. parça (son `if` koşulu). Hunk 1-2 temiz uydu; son koşulda
  `bayat` → `bayat_durdurucu` (6dbc954c, F7) ve yorum blokları girmiş — salt bağlam kayması.
  `-R` reddi beklenen (yama hiç inmemiş).

## ③ Yeniden üretim
`denetim/ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi-1006.diff` — 1 dosya, +92/−1 (eskisiyle aynı içerik;
son koşula `or _dom_ihlali` yeni bağlamda eklendi). `py_compile` ✓.
- main'e ileri `--check` **0** · uygulanmışken `-R --check` **0** · uygulanmamış main'e `-R` 1 (beklenen).

### Zincir — KAYNAK-DURUM-SINAMA-1006.diff ile
🔴 **KAYNAK-SINAMA main'e tek başına UYMAZ** (`kaynak_durum.py:75`). Kendi önkoşulları var:
`KAPI_KODLARI/KAPI_BETIK` → **KAYNAK-DURUM-ENV-KAPI-1006.diff**; `kosu_damgasi_yaz` →
**KAYNAK-DURUM-ATLAMA-DAMGA-1006.diff**. (ENV-KAPI'nin `C:\atlas` ve `C:\atlas-umit` kopyaları aynı.)

| sıra | sonuç |
|---|---|
| ENV-KAPI → K-SINAMA | ✗ (`kaynak_durum.py:260`, ATLAMA-DAMGA eksik) |
| ENV-KAPI → ATLAMA-DAMGA → K-SINAMA | ✓ |
| ENV-KAPI → ATLAMA-DAMGA → K-SINAMA → **DOM-1006** | ✓ · py_compile ✓ · uçta DOM `-R` ✓ |
| **DOM-1006** → ENV-KAPI → ATLAMA-DAMGA → K-SINAMA | ✓ |

⇒ DOM-1006, KAYNAK zincirinden **bağımsız**; iki sırada da iner. Önerilen sıra:
**DOM-1006 önce** (önkoşulsuz, tek dosya), sonra ENV-KAPI → ATLAMA-DAMGA → K-SINAMA.
K-SINAMA'nın başındaki koordinatör KISITI (B yaması/URETIM_IZI.kapi) bu ölçümün dışında.

## Bulunamayan
- Yamalı tam `denetle_yayin.py` koşusu yapılmadı (odak/paket alt kapılarını tetikler, bu işin sorusu değil);
  ölçüm yalnız `dom_sozlesmesi()` işlevi üstünde.
- `querySelector`, dinamik id, fonksiyonlar arası akış ölçülmez (0930 raporundaki sınır aynen geçerli).

## Öneri
BAYAT DEĞİL. Kuyrukta eski `…kapi-dom-sozlesmesi.diff` yerine **`…-1006.diff`** kalsın; eski dosya emekli.

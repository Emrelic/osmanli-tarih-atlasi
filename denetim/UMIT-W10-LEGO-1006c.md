# UMIT-W10-LEGO-1006c — `ARAC-LEGO-zincir.py` düzeltmesi + iki yönlü sınav + tuz yaması METNİ

Ağaç `C:\atlas-w10` = `origin/main` **ae2e6bbd** (detached). Motor tuzu dosyalarına (`uret_petek.py`,
`renkler.py`, `girdi.py`, `motor_onbellek.py`) ve sqlite'a DOKUNULMADI. Kilit: `denetim/ARAC-LEGO-zincir.py`.

## 1. Teslim edilen — `C:\atlas-umit\denetim\LEGO-ZINCIR-1006.diff`
| dosya | ne |
|---|---|
| `denetim/ARAC-LEGO-zincir.py` (değişti) | ① import adları evrende (`ust_duzey` → Import/ImportFrom) ② sb kökleri `bos_bolge` · `_onb_ozet` ③ `--kok` argümanı (varsayılan `C:\atlas`) + `--dosya` ④ ek sınav betiğin içinde: YASAK AD evreni = `renkler`/`girdi`den ithal her ad + modül adları + `_HARITA_ALT`; dinamik erişim listesi ⑤ ÇIKIŞ KODU: 0 temiz · 1 yasak ad zincirde · 2 kök eksik/ayrıştırılamadı ⑥ commit geçmişi taraması artık `--gecmis` ile (eskiden varsayılandı) |
| `denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py` (yeni) | iki yönlü sınav, 6 vaka |
| `denetim/LEGO-ZINCIR-CIKTI-1006.txt` (yeni) | bugünkü main çıktısı + sınav çıktısı (kanıt) |

Diff ölçümü: **CR 0** · 356 satır · geçici indekste `origin/main` (ae2e6bbd) karşısında **ileri ✓ (0) · -R ✗ (1)**.

## 2. Bugünkü main — `LEGO-ZINCIR-CIKTI-1006.txt`
- `① geo zinciri: 32 işlev · okunan modül düzeyi ad 116 · kökler 5/5`
- `② yasak ad evreni (3): BOYALAR@269, _HARITA_ALT, girdi@271`
- `③ dinamik erişim: petek_epok:5278 getattr()`. Voronoi geometrisinin `.geoms`'u, modül adı okumuyor.
- **`✓ TEMİZ` · çıkış 0.** ⇒ `uret_petek.py:601-603`ün koyduğu şart sağlandı.
- `--gecmis`: 18 Eyl'den beri 9 commit; geo zincirine değenler 27b76088 (23) · c0bd752c (7) · 7d66e312 (6) ·
  d30358b3 (5) · 76351781 (6) · 55dfa2b5 (1: `_heapq`). Sayılar 25 Eyl çıktısından büyük, çünkü artık ithal
  adlar (`_Aff`, `_ndi`, `_rfe`…) da sayılıyor.

## 3. İki yönlü sınav — 6/6 ✓
```
✓ K1  govde zinciri yardımcı üzerinden BOYALAR okur → yeni çıkış 1, YASAK basıldı · ESKİ betik: kör
✓ K2  YALNIZ sb kökü (bos_bolge) girdi.X okur     → yeni çıkış 1                · ESKİ betik: kör
✓ K3  zincir _HARITA_ALT okur                      → yeni çıkış 1                · ESKİ betik: GÖRÜR, ötmez
✓ T1  aynı yapay modül, yasak ad yalnız ithal      → yeni çıkış 0
✓ E1  bir kök eksik                                → yeni çıkış 2 (eksik tarama "temiz" sayılmaz)
✓ T2  bugünkü motor                                → yeni çıkış 0
```
- ESKİ betik `git show 8717fe3a:` ile alınıp geçici dizinde koşturulur. Yapay modüller `tempfile`'da;
  depoya bir şey yazılmaz.
- 📌 **Öngörüm bir vakada YANLIŞ çıktı:** "K3'te eski betik de kör" demiştim, sınav düştü. `_HARITA_ALT`
  bir atama olduğu için eski evrende vardı; eski betik onu "okunan adlar"da LİSTELER ama yasak kavramı
  olmadığından ötmez. Beklenti vaka başına düzeltildi (`eski_bek`), ölçüm değiştirilmedi. Kör nokta
  yalnız **ithal adlar** içindir.

## 4. ③2 + ③3 — tuz yaması (B kuyruğu, tam inşa) — DİFF ÜRETİLMEDİ, METİN
Yer: `arac/uret_petek.py:571-582` (ae2e6bbd). Bugünkü hâl:
```python
_ONB_ISLETIM = {"MOTOR_SUREC_ISCI", ..., "MOTOR_ONBELLEK_BUDA_GUN"}      # :571-575
_ONB_TUZ = json.dumps({ ...
    "ortam": sorted((k, v) for k, v in os.environ.items()                # :581
                    if k.startswith("MOTOR_") and k not in _ONB_ISLETIM),  # :582
```
Önerilen değişim (metin):
```python
# ③2 — sonucu değiştirir ama HİÇBİR önbellekli katmana ulaşmaz (1006b ölçümü):
#      UFUK_BANT taban yolu birebir (:2161, :2322) · `ak` önbellek okumasından SONRA (:6837);
#      Ⓑ dolgu bloğu (:7962) son önbellek çağrısından (:7627) sonra.
_ONB_CIKTI_DISI = {"MOTOR_UFUK_BANT", "MOTOR_B_DOLGU", "MOTOR_DOLGU_KESIT",
                   "MOTOR_KILIT_KAPALI",                # kosu_kilit.py:96 — işletim
                   # dolgu.py'nin kendi ayarları — yalnız data/dolgu.js (Ⓑ):
                   "MOTOR_DOLGU_YARICAP_KM", "MOTOR_DOLGU_ESIK_KM2", "MOTOR_DOLGU_KABA",
                   "MOTOR_DOLGU_SADE", "MOTOR_DOLGU_PAYLASIM_ADIM_KM", "MOTOR_DOLGU_NOKTA_TAVAN",
                   "MOTOR_BDOLGU_YOL", "MOTOR_DOLGU_ONBELLEK", "MOTOR_DOLGU_SINA_KAYDIR",
                   "MOTOR_DOLGU_CIKTI"}
# ③3 — tuz yalnız KODDA OKUNAN sonuç değişkenlerini alır; bilinmeyen MOTOR_* UYARI basar, tuza GİRMEZ.
_ONB_SONUC = {"MOTOR_YURUYUS", "MOTOR_YURUYUS_SAAT", "MOTOR_YURUYUS_16", "MOTOR_COL_UFUK_SAAT",
              "MOTOR_EGIMSIZ", "MOTOR_EGIM_AB_KAPALI", "MOTOR_NEHIR_OZNE", "MOTOR_NEHIR_KAPALI",
              "MOTOR_NEHIR_AB_KAPALI", "MOTOR_BOGAZ_KAPALI", "MOTOR_BOS_TOPRAK",
              "MOTOR_BOS_TOPRAK_COL", "MOTOR_B23_KAPALI", "MOTOR_PUAN_KAPALI",
              "MOTOR_DOLGU_KAPALI", "MOTOR_DOLGU_YOL"}   # DOLGU_YOL: bit denkliği yalnız AVX2'de ölçüldü
_onb_bilinmeyen = sorted(k for k in os.environ if k.startswith("MOTOR_")
                         and k not in _ONB_SONUC | _ONB_ISLETIM | _ONB_CIKTI_DISI)
if _onb_bilinmeyen:
    print(f"  ⚠️ ÖNBELLEK: tanınmayan MOTOR_* (tuza GİRMEDİ, yazım hatası mı?): {', '.join(_onb_bilinmeyen)}")
...
    "ortam": sorted((k, v) for k, v in os.environ.items() if k in _ONB_SONUC),
```
⚠️ Yamanın kendi bedeli ve riskleri:
- **Tuzun biçimi değiştiği için bir kez TAM yeniden inşa** gerekir (zaten B kuyruğunda, tam inşada iner).
- **③3 yeni bir unutma riski açar:** `uret_petek.py`ye yeni bir sonuç değişkeni eklenip `_ONB_SONUC`a
  yazılmazsa, değişken tuzdan sessizce düşer ve bayat önbellek doğru sanılır. Bu, bugünkü durumdan
  (fazla geçersizleşme, yalnız yavaşlık) DAHA TEHLİKELİDİR. ⇒ Yamayla birlikte bir kapı ŞART: AST ile
  `os.environ.get("MOTOR_…")` okumalarını toplayıp üç kümenin birleşimine eşit mi diye soran bir sınav
  (`ARAC-LEGO-zincir.py`ye bir ⑤ bölümü olarak eklenebilir; bugün YAZILMADI, motor tuzuyla birlikte iner).
  Bunu sağlayamıyorsanız ③3'ü alma, yalnız ③2'yi al.
- `MOTOR_DOLGU_*` (dolgu.py) bugün `uret_petek.py` tuzunda: Ⓑ dolgu denemesi geo önbelleğini öldürüyor.
  dolgu.py'nin KENDİ önbellek tuzunun (`dolgu.py:160-168`) bu değişkenleri içerip içermediği ÖLÇÜLMEDİ.
  İçermiyorsa ③2'den ayrı bir kusurdur.
- `MOTOR_KILIT_KAPALI` (`kosu_kilit.py:96`) işletim değişkeni ama `_ONB_ISLETIM`te yok ⇒ bugün tuzda (yeni bulgu).

## 5. Bulunamadı / ölçülmedi
- dolgu.py önbellek tuzunun içeriği (yukarıda).
- Yeni betik yalnız "yasak ad zincirde mi" sorar; renk verisinin YERLER kayıtlarına öznitelik olarak
  taşınması (veri yolu) görülmez. O yol anahtar içeriğinden geçer, tuzun konusu değildir (betik
  docstring'inde yazılı).

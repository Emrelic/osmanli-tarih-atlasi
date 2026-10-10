# KOSU-YAYIN-KAPI-1010 — yayın zincirlerinin kapıları ve kilidi

**Taban:** `origin/main` `ba636eee` (ölçüm) · `git apply --check` `183594f8` (teslim anındaki
origin/main, 3 commit ileride; iki dosya arada DEĞİŞMEDİ) üstünde **TEMİZ**.
**Diff:** `KOSU-YAYIN-KAPI-1010.diff` (sha256 `dd33fb7e…0cdd`, +278/−34 satır, 2 dosya:
`arac/kosu_yayin.py`, `arac/kos_ve_yayinla.py`).
**Sınav:** `ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py` — yamalı **23/23**, yamasız **7/23**.
Gerçek depoya, gerçek git'e, yayına, tahtaya, `uret_petek`e dokunulmadı.

## 1. Okunan akış (ölçüm anı `ba636eee`)

### `arac/kosu_yayin.py`
① uret_petek (zorunlu) → ② uret_devirler (zorunlu değil) → ③ denetle (zorunlu) →
④ renk_olc · ⑤ surum_damgala (zorunlu değil) → ⑥ denetle_yayin (`uyari_kodu=True`) →
⑥b denetle_kronoloji · ⑥c denetle_arayuz (`uyari_kodu=True`) → ⑦ `git add/commit -- <liste>` → ⑧ push → 9 bip, `return 0`.

| Kusur | Ölçüm |
|---|---|
| ⑥ HER sıfır-dışı kodu (1, 2, çökme) "çıkış 1 verdi — BİLİNEN BORÇ" sayıp sürüyor | sınav K3 yamasız: ⑥=1 ⇒ **commit +1, push çağrıldı, çıkış 0** |
| Belgenin andığı `--yayin-kapisi-uyari` bayrağı YOK | K4/K5/K6 yamasız: argparse **çıkış 2** |
| ③ çıkış 2'de ölçülemeyen sorular ADIYLA basılmıyor (yalnız son 12 satır) | K2 yamasız ✗ |
| commit düşerse yine `return 0` + 9 bip | K9 yamasız: commit 0, **çıkış 0** |
| push düşerse yine `return 0` | K8 yamasız: **çıkış 0** |

🔴 **Görev metnindeki bir hüküm ölçümle TUTMADI:** "③ çıkış 1 ⇒ commit yamasızda ATILIYOR"
**yanlış.** `kosu_yayin.py`de ③ `zorunlu=True, uyari_kodu=False` ile çağrılıyor ⇒ 1 de 2 de
zinciri zaten durduruyordu (K1 yamasızda da ✓; `sinav_isirma` onu TESADÜF/SÜREKLİLİK
kovasına koydu). Delik **yalnız ⑥**'daydı. Bugünkü D8a 1517 > 1508 (③=1) ⇒ zincir ③'te
dururdu; ama ⑥ düşseydi yayınlardı.

### `arac/kos_ve_yayinla.py`
kilit → uret_petek → uret_devirler → (altlık, bekleyenler, renk: ölümcül değil) →
**denetle (olumcul)** → surum_damgala → **denetle_yayin (olumcul)** → adres_nobetci →
`git add -A -- data index.html` → commit → pull --rebase (ölümcül değil) → push.

- İki kapı ZATEN tavizsizdi (Z1, Z3 yamasızda da ✓ — SÜREKLİLİK). Eksik: çıkış 2 ile 1
  ayırt edilmiyor, ölçülemeyen sorular adıyla basılmıyordu (Z2, Z4 yamasız ✗).
- **Kilit:** `yas < 240` dk YAŞ VEKİLİ (ölçüm anında `:174`; görevdeki `:161` fonksiyonun
  başı). Tam inşa 7-8 saat ⇒ 4. saatten sonra CANLI zincirin kilidi devralınıyordu
  (L1 yamasız: canlı PID + 5 saatlik kilit ⇒ **devraldı, commit +1, push**). Tersi de
  bozuk: ölü PID + taze kilit ⇒ reddediyordu (L2 yamasız çıkış 2). Dosyanın kendi
  yorumu (`:241`) bu kusuru "aynı gece düzeltildi" diye anıyordu — **düzeltilmemişti**.

## 2. Çare (diff)

**`kosu_yayin.py`**
- `_calistir()` (koşturur, karar vermez) + `kos()` (kapı olmayan adımlar, eski anlam) +
  yeni `kapi()` (③ ve ⑥):
  - 0 geçer · 1 DUR — yalnız `bir_uyari=True` ise uyarıya iner · **2 HER ZAMAN DUR**,
    ölçülemeyen sorular `ÖLÇÜLEMEYEN SORU` bloğundan ADIYLA günlüğe basılır (blok
    bulunamazsa bunu SÖYLER) · başka kod DUR.
- ③ `kapi(...)` bayraksız çağrılır — bayrak ③'e ulaşamaz.
- ⑥ `kapi(..., bir_uyari=a.yayin_kapisi_uyari)`; düşerse `return 1`, commit/push yok.
- `--yayin-kapisi-uyari` argparse'a GERÇEKTEN eklendi, `help` ve docstring'de belgelendi;
  commit mesajına bayrağın durumu yazılır.
- ⑥b/⑥c bilerek uyarı kipinde kaldı; mesaj artık GERÇEK kodu yazar ("çıkış 1" sabiti gitti).
- commit düşerse `return 1` (push yok), push düşerse `return 1`.
- Docstring kodla birebir: kod tablosu, bayrak, çıkış kodları.

**`kos_ve_yayinla.py`**
- `_kapi_hukmu()`: iki kapı `olumcul=False` + `tum=` (tam çıktı) ile koşar, hüküm burada:
  0 geçer · 1 DUR · 2 DUR + ölçülemeyenler ADIYLA · None (zaman aşımı) DUR · başka DUR.
  Bu zincirde bayrak YOK (görev istemedi; kapı zaten tavizsizdi).
- **Kilit = SÜREÇ DAMGASI.** Damga: `pid=<N> | bas=<zaman> | makine=<COMPUTERNAME> | argv=…`,
  `O_EXCL` ile atomik yazılır.
  | Hâl | Karar | `zincir()` çıkışı |
  |---|---|---|
  | kilit yok | alır | — |
  | PID CANLI (psutil; yoksa `tasklist /FI "PID eq N" /FO CSV`, PID alanı TAM eşitlik) | BAŞLATMAZ | **3** |
  | PID ÖLÜ, aynı makine | kaydı basar, siler, devralır | — |
  | damga bozuk / `pid=` yok / eski biçim (yalnız zaman) | BAŞLATMAZ, ÖLÇÜLEMEDİ | **2** |
  | `makine=` başka makine | BAŞLATMAZ, ÖLÇÜLEMEDİ | **2** |
  | canlılık sorgusu ölçülemedi (tasklist hata) | BAŞLATMAZ, ÖLÇÜLEMEDİ | **2** |
  | yarış: iki zincir aynı anda boş kilit | ikincisi `FileExistsError` ⇒ BAŞLATMAZ | 3 |
  Yaş yalnız "bilgi: kilit yaşı N dk" olarak basılır, karara girmez.
  `_kilit_birak` yalnız damgadaki PID kendisiyse siler. **Hiçbir süreç öldürülmez.**
  ⚠️ Bilinen sınır: PID yeniden kullanımı (ölü zincirin PID'ini başka süreç aldıysa)
  CANLI okunur ⇒ güvenli yön (başlatmaz); kayıt basılır, insan karar verir.
  ⚠️ Geçiş: diskteki ESKİ biçimli bir `.zincir.kilit` (yalnız zaman) yamadan sonra
  ÖLÇÜLEMEDİ verir ve elle silinmesi gerekir — bilerek; "ölçülemedi ≠ ölü".

## 3. Sınav — iki yön (`sinav_isirma.py`, `SINAV-ISIRMA-1010.diff`'ten çıkarılan araç, `--taban origin/main`)

Yöntem: her soru taze `git init` geçici deposunda; alt betiklerin hepsi çıkış kodu
ortamdan gelen sahte betik; `_sarmal.py` `subprocess.run/Popen`u sarar — push/pull,
powershell, schtasks, taskkill ASLA gerçek koşmaz; depo dışına giden git çağrısı 97 alır
(K0b bunu ayrıca ısırtır). L1/L6'da öldürülen tek süreç sınavın KENDİ `sleep` çocuğu.

```
B (yamalı)   çıkış 0 · 23/23 · 48 sn       A (yamasız) 7/23
ISIRIYOR 16    K2 K3 K4 K5 K6 K8 K9 Z2 Z4 L1 L2 L3 L4 L5 L6 L7
TESADÜF 7      K1 Z1 Z3   — SÜREKLİLİK: ③ (iki betik) ve ⑥ (kos_ve_yayinla) zaten duruyordu
               K7 Z5      — pozitif kontrol (hepsi 0 ⇒ commit + push)
               K0 K0b     — sınav koşumunun kendi güvenliği
GERİLEME 0 · EŞLEŞMEDİ 0 · worktree'ler kaldırıldı
```
K5/K6'nın yamasız ✗'i bayrağın YOKLUĞUNDAN (argparse 2) gelir — doğru sebeple düşüyor
ama "kapı mantığını" değil "bayrak var mı"yı ısırıyor.

## 4. Bulamadıklarım / kapsam dışı (düzeltilmedi, bildiriliyor)
- 🔴 **`kosu_yayin.py`nin commit listesi bayat ve yayını kırıyor:** liste
  `data/devletler_harita.js` ve `data/petek_govde.js`'i içeriyor — ikisi de **`.gitignore`'da**
  (`.gitignore:28`, `:56`). Diskte varsa `git add` ve `git commit -- <liste>` düşer ⇒ HİÇBİR
  şey commitlenmez (K9 bunu üretir; yamadan önce zincir bunu çıkış 0 ile örtüyordu).
  Ve yayındaki gerçek harita dosyası `data/devlet_harita_ust.js` (CLAUDE.md §5) listede **YOK**.
  Doğru liste motorun bugünkü çıktı kümesinden ölçülmeli — bu işin evreni değil.
- `kosu_yayin.py`nin kendi çift-koşu kilidi YOK (uret_petek'in `kosu_kilit.py`'si yalnız ①'i korur).
- `kos_ve_yayinla.py`deki `--kuru` PLAN metni ve `kosu_kilit.py`'nin "ölçülemedi ⇒ 1440 dk
  yaş tavanı" geri düşüşü değiştirilmedi (`kosu_kilit.py` motorun kilidi; dokunulmadı).
- `denetle_yayin.py` bugün 2 VERMİYOR (SESSIZ-YUTMA-TARAMA-1010); iki zincir 2'yi şimdiden
  doğru ele alıyor (K5, Z4 sahte 2 ile sınandı), gerçek 2 geldiğinde ayrıca ölçülmeli.

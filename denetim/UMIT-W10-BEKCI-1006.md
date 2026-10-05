# UMIT-W10-BEKCI-1006 — bekçi süreç kimliği = PID + BAŞLANGIÇ ZAMANI (D266)

Ağaç `C:\atlas-w10b` (yeni, detached; `C:\atlas-w11` başkasınındı, dokunulmadı) · temel `1381bf76`.
`origin/main` şimdi **78c74b80**. Kilit: `arac/tahta_bekci.py` + `arac/bekci_olc.py`. `--temizle` işlevine DOKUNULMADI.

## 0. 🔴 ÖNCE BU — istenen dosya adı GİTIGNORE'DA
`.gitignore:181` `denetim/BEKCI-*` ⇒ istenen `denetim/BEKCI-KIMLIK-1006.diff` **commit edilemez**
(`git check-ignore -v` ölçüldü, C:\atlas-umit). İki kopya bıraktım (bayt bayt aynı):
- `C:\atlas-umit\denetim\BEKCI-KIMLIK-1006.diff` — istenen ad, `git add -f` ister
- `C:\atlas-umit\denetim\KIMLIK-BEKCI-1006.diff` — yok sayılmayan ad
Kanıt çıktısı da aynı sebeple `KIMLIK-BEKCI-CIKTI-1006.txt` adını aldı. Bu rapor (`UMIT-…`) yok sayılmıyor.

## 1. Teslim — diff (CR 0 · 402 satır · origin/main 78c74b80'e ileri ✓ (0) · -R ✗ (1))
| dosya | ne |
|---|---|
| `arac/tahta_bekci.py` | `_surec_baslangic()` (kendi süreci, `GetCurrentProcess` + `GetProcessTimes`, bir kez hesaplanır, ASLA istisna fırlatmaz) · damgaya `"baslangic"` alanı |
| `arac/bekci_olc.py` | `_surec_kimlik(pid)` (OpenProcess + GetExitCodeProcess + GetProcessTimes) · `_surec_var(pid, baslangic)` → (True/False/None, açıklama) · kayda `surec` + `baslangic` · tabloda açıklama · `tasklist` ve `subprocess` kaldırıldı |
| `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py` (yeni) | 11 kontrol, gerçek alt süreçlerle |
| `denetim/KIMLIK-BEKCI-CIKTI-1006.txt` (yeni) | sınav çıktısı + okuma yolu ölçümü |

## 2. ① Başlangıç zamanı Python'dan nasıl okunur — ÖLÇÜLDÜ (aynı PID, iki süreçte)
| yol | süre | değer | not |
|---|---|---|---|
| kernel32 `GetProcessTimes` (ctypes) | **0,1-0,3 ms** | 134357052009835783 | bağımlılık yok |
| PowerShell `(Get-Process).StartTime.ToFileTimeUtc()` | 397-533 ms | **AYNI** | alt süreç, yavaş |
| `wmic … CreationDate` | — | **wmic YOK** | Windows 11'de kaldırılıyor |
| `psutil.create_time()` | 30-124 ms | aynı an (float sn) | kurulu ama ek bağımlılık |
⇒ **ctypes seçildi.** Değer FILETIME (1601'den 100 ns, UTC). Yazan da okuyan da AYNI API'yi kullanıyor;
karşılaştırma birebir tamsayı eşitliği (yuvarlama, saat dilimi, yerelleştirilmiş tarih biçimi yok).
Hata ayrımı ölçüldü: olmayan PID → `OpenProcess` hata **87** (→ YOK) · System/PID 4 → hata **5** erişim reddi
(→ ÖLÇÜLEMEDİ). Bitmiş ama tutamağı kalmış süreç için `GetExitCodeProcess ≠ 259` → YOK.
⚠️ `os.kill(pid, 0)` Windows'ta süreci ÖLDÜRÜR (`tahta_sunucu.py:122` aynı uyarıyı yazmış) — kullanılmadı.

## 3. ② Hüküm tablosu (nabız eskiyse; taze nabız her zaman CANLI)
| PID'in şu anki sahibi | damgada `baslangic` | hal |
|---|---|---|
| yok (87 / bitmiş) | var ya da yok | **BITMIS** |
| var, başlangıç AYNI | var | **ASILI** (tek gerçek alarm) |
| var, başlangıç FARKLI | var | **BITMIS** — "PID n YENİDEN KULLANILMIŞ" |
| var | **yok (eski damga)** | **OLCULEMEDI** (öneri, §4) |
| sorgulanamadı (5 / arıza) | — | **OLCULEMEDI** |

## 4. ③ Eski biçimli damgalar — ölçüm ve öneri
- **Bu makinede (UMIT) ölçülen: 0 damga.** Hiçbir `C:\atlas*` ağacında `oturumlar\bekci\` dizini yok
  (`Get-ChildItem C:\atlas*`). Vakanın damgası (`pid 20764`) başka bir makinede. ⇒ Sayı orada ölçülmeli: `bulunamadı`.
- **Yapısal sayı:** bugün var olan HER damga eski biçimdedir; `baslangic` alanını yazan kod henüz yok.
  Bekçi kodu belleğe başta yüklenir, bu yüzden **yeniden kurulana kadar** her bekçi eski biçimde yazmaya
  devam eder. Eski biçim, bekçiler yeniden kuruldukça kendiliğinden söner.
- **Öneri (uygulanan): eski + PID'in sahibi VAR → OLCULEMEDI · eski + sahip YOK → BITMIS.**
  - Sahip yoksa kimlik sorusu doğmaz: süreç yok, damga hangi süreçten gelmiş olursa olsun ölü.
  - Sahip varsa iki hüküm de yanlış olabilir: ASILI, D266'nın yanlış alarmını sürdürür; BITMIS ise gerçek
    bir asılı bekçiyi susturur (ve `--temizle` siler). OLCULEMEDI dürüst olandır.
  - Bedel: OLCULEMEDI çıkış kodunu 1 yapar (bugünkü ASILI gibi). Geçiş süresince eski bekçiler alarm
    sütununda "ölçülemedi, eski damga" açıklamasıyla görünür, ASILI olarak DEĞİL.
  - Hüküm koordinatörde. Değişecekse tek satır: `bekci_olc.py` `_surec_var` içinde `if baslangic is None:`.
- `--temizle` kodu DEĞİŞMEDİ, ama `oku()`dan geldiği için davranışı genişledi: artık **PID'i yeniden
  kullanılmış** damgaları da (BITMIS) siler. Bu doğru, çünkü süreçleri yok. Eski biçimli ve sahibi canlı
  damgalar (OLCULEMEDI) silinmez.

## 5. Sınav — 11/11 ✓ (`KIMLIK-BEKCI-CIKTI-1006.txt`)
```
✓ K0  tahta_bekci._nabiz_yaz `baslangic` yazar; bekci_olc AYNI değeri okur (134357053712605301)
✓ A1  canlı + eski nabız + başlangıç uyuşuyor        → ASILI     (yazıcının KENDİ damgası)
✓ A2  canlı + eski nabız + başlangıç uyuşmuyor        → BITMIS    ("PID … YENİDEN KULLANILMIŞ")
✓ A2b PID bizim, başlangıç başka sürecin              → BITMIS
✓ E1  ESKİ kod (1381bf76) A2 damgasında               → ASILI     ← D266 kusurunun yeniden üretimi
✓ A3  alt süreç öldürüldü                             → BITMIS
✓ A4  kimlik okunamıyor (sorgu arızası)               → OLCULEMEDI
✓ A5  eski damga: canlı PID → OLCULEMEDI · ölü PID → BITMIS
✓ A6  taze nabız + uyuşmayan başlangıç                → CANLI     (yaş önce gelir)
✓ GERÇEK oturumlar\bekci dokunulmadı (önce YOK · sonra YOK)
(bilgi) PID 4 gerçek sorgu → (None, "OpenProcess hata 5")
```
Gerçek damgaların korunması: modüller ayrı adla ithal edilir, `TAHTA`/`DIZIN` geçici yola çevrilir, assert
edilir, sonda gerçek dizinin parmak izi öncesiyle karşılaştırılır. A2'deki "yeniden kullanım" GERÇEK canlı bir
alt sürece başka başlangıç yazarak üretiliyor; işletim sisteminin PID'i gerçekten yeniden vermesini beklemek
sınanamaz.
Duman testi: `py arac/bekci_olc.py` (dizin yok → OLCULEMEDI mesajı) · `py arac/tahta_bekci.py` argümansız → 2.

## 6. `origin/makine/tahta-web` kusuru DEVRALIYOR mu — ölçüldü (20c5cea7, main'den 8 commit önde)
- **`bekci_olc.py`: D266'yı devralmıyor, ama DAHA ESKİ bir kusuru taşıyor.** Daldaki sürüm PID'e hiç bakmıyor.
  Tek "OLU" hâli var (:76) ve yalnız nabız yaşına bakıyor: main'in `424b7363` ("tek OLU hali ÜÇE bölündü —
  alarm sütununun TAMAMI yanlış olmuştu"), `deffc2c9` ve `f918e978` commit'leri dalda YOK. Dal bu dosyada
  main'den GERİDE (+16/−146).
- **`tahta_bekci.py`: damga yalnız `pid` yazıyor (:334), `baslangic` yok.** Dal main'den +66/−15 ayrışmış.
  ⚠️ Birleştirmede bu dosya çatışırsa ve dalın hâli seçilirse `baslangic` alanı SESSİZCE kaybolur. Bütün
  damgalar eski biçime döner, bekci_olc canlı olanları OLCULEMEDI'de tutar. Birleştiren, iki dosyada da
  main'in (bu yamanın) hâlini korumalı.
- **`tahta_sunucu.py` (yalnız dalda) `_pid_canli` (:121-143) aynı sınıftan: yalnız PID soruyor.** Ama kilit
  kararı `_pid_canli(pid) AND nabız taze` (:173). Kodun kendi yorumu da yeniden kullanımı biliyor
  ("yeniden açılıştan sonra PID başka bir sürece verilmiş olabilir"). Nabız eskiyse PID'e bakılmaz ⇒ D266
  burada **yalnız nabız tazeyken** etkili olur, o durumda da süreç zaten canlıdır. Pratik risk düşük; kusur
  değil, sınırlı bir varsayım. Aynı başlangıç zamanı alanı oraya da eklenebilir (ayrı iş, dal sahibinin).

## 7. Bulunamadı / ölçülmedi
- Vaka makinesindeki gerçek eski damga sayısı (bu makinede damga yok).
- Windows dışı: `_surec_kimlik` (None, "Windows dışı") döner ⇒ nabız eskiyse OLCULEMEDI. Projede Windows
  dışı makine olup olmadığı ölçülmedi.

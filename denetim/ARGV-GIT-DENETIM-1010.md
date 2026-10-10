# ARGV-GIT-DENETIM-1010 — araçların içindeki git çağrıları için statik denetim

**Taban:** `origin/main` `486b15b2`. `git apply --check` temiz geçiyor. Diff yalnız iki yeni dosya
ekliyor, KAPI/LISTE/ADD diff'lerinden bağımsız.
**Diff:** `ARGV-GIT-DENETIM-1010.diff` (sha256 `188698e6…7abf`, +788 satır):
- `denetim/ARAC-ARGV-GIT-DENETIM-1010.py` (araç, 607 satır)
- `denetim/ARAC-ARGV-GIT-DENETIM-SINAV-1010.py` (sınav, 181 satır)

`arac/`'a, `denetle.py`'ye ve `kabuk_nobetci.py`'ye dokunulmadı. Kapı ya da kanca değil.

## 1. Ne yapar
- **Taranan dosyalar:** `arac/**/*.py` (`--dizin` ile değiştirilebilir), AST ile okunuyor.
- **Çözülen çağrılar:**
  - `subprocess.run/call/Popen/check_output/check_call/getoutput/getstatusoutput` — `import subprocess as X` ve `from subprocess import run as Y` biçimleri dahil.
  - `os.system` ve `os.popen` (kabuk metni).
  - **Dosyanın kendi sarmalayıcıları:** bir işlevin parametresi ya da `*args`'ı bir subprocess argv'sine akıyorsa (`kos()`, `_calistir()`, `git(*a)`, `_git(dizin, *a)` …). Sarmalayıcıyı çağıran her satır parametreler bağlanarak çözülüyor. Varsayılan değerler, varargs ve sarmalayıcıyı çağıran sarmalayıcı (3 tura kadar) da çözülüyor.
  - **Ad çözümü:** çağrıdan önceki `X = [...]`, `+=`, `.append`, `.extend`. Ayrıca `for X in <sabit dizi>` döngü bağları kartezyen olarak açılıyor (`donanim.py:341`, `olcut.py` `_islemek`). `sys.executable` "python" sayılıyor.
- **Sınıflar:**
  - `ADD-HEPSI` — adı `arac/kabuk_nobetci.py` `DALLAR`'ından AST ile **okunuyor**. DALLAR'da yoksa araç uydurmuyor, çıkış 2 veriyor (U5).
  - `COMMIT-HEPSI`
  - `COMMIT-PATHSPECSIZ` (yeni sınıf)
  - `STASH` (`list`/`show` hariç)
  - `PUSH-ZORLA` (`--force*`, `-f`, `+refspec`)
  - Not: kabuk_nobetci'nin öteki dalları (BACKTICK, PY-C, HEREDOC, COMMIT-M) kabuk tırnaklama kusurları; argv listesinde anlamları yok, taşınmadı.
- **ÖLÇÜLEMEDİ (adıyla):**
  - ayrıştırılamayan dosya;
  - program çözülemedi;
  - git alt komutu çözülemedi;
  - çözülemeyen bir **dizi**, kararı değiştirebiliyor (ör. `commit -F m` + bilinmeyen dizi — içinde `--` olabilir);
  - başka dosyadan ithal edilen, güvensiz bir sarmalayıcı çağrısı (**DOSYALAR ARASI**).

  Bir sarmalayıcının "güvenli" sayılması şu sınavla belirleniyor: bütün parametreleri bilinmeyen dizi verildiğinde bile ihlalsiz ve ölçülebilir kalıyorsa güvenli. Güvenli sarmalayıcı başka dosyadan çağrılınca ÖLÇÜLEMEDİ üretmiyor.
- 📌 **Yaklaşım:** tek bir `BILINMEZ` öğe (bir yol değişkeni, `-F` dosyası) bir değer sayılıyor; `--`, `-A` ya da `.` olduğu varsayılmıyor. Belirsiz sayılan yalnız bilinmeyen **uzunluktaki** dizi. Ad çözümü denetim akışını yok sayıyor (dallardaki atamalar sırayla okunuyor).
- **Çıkış:** 0 temiz · 1 İHLAL · 2 ÖLÇÜLEMEDİ. İhlal olsa da ölçülemeyenler basılıyor (U3). `--ayrinti` çözülen her git çağrısını ve güvensiz sarmalayıcıları listeliyor; "boş geçti" ile "temiz" böylece ayırt ediliyor.

## 2. Gerçek ağaçlarda (174/175 dosya, hepsi ayrıştırıldı)
| | ÖNCE: origin/main `486b15b2` | SONRA: + KAPI + LISTE + ADD |
|---|---|---|
| ADD-HEPSI | **1** — `arac/kos_ve_yayinla.py:350` `git add -A -- data index.html` | 0 |
| COMMIT-PATHSPECSIZ | **1** — `arac/kos_ve_yayinla.py:352` `git commit -F <MESAJ>` | 0 |
| COMMIT-HEPSI · STASH · PUSH-ZORLA | 0 · 0 · 0 | 0 · 0 · 0 |
| çözülen git çağrısı | 78 | 82 |
| ÖLÇÜLEMEDİ | 0 | 0 |
| çıkış | **1** | **0** |

**Öteki araçlarda pathspec'siz commit yok.** `arac/` altındaki bütün commit çağrıları `--` taşıyor:
- `donanim.py:341` (döngü),
- `olcut.py:1002` → `_islemek` → `_git` (döngü, 2 sarmalayıcı derinliği),
- `tahta.py:648` (`g` sarmalayıcısı),
- `kosu_yayin.py:199`.

Güvensiz sarmalayıcı 10 tane: `_bayat_yama_kapi._git`, `_kapanma_hizi.komut`, `_nobet.kabuk`, `_yayin_zinciri.kos`, `denetle_yayin._git`, `donanim._komut_surumu`, `kos_ve_yayinla.kos`, `olcut._git`, `tahta.g`, `tahta_kaynak._git`. Bunların hiçbiri başka dosyadan ithal edilmiyor; ithal edilen tek sarmalayıcı `_bayat_yama_kapi.tara`, o da güvenli.

**Bilgi (değerlendirilmedi):** `--dizin denetim` taramasında 1220 dosyada 29 ihlal çıktı: ADD-HEPSI 3 · COMMIT-HEPSI 3 · COMMIT-PATHSPECSIZ 23. Bunların büyük kısmı büyük olasılıkla geçici `git init` depolarında koşan sınavların `commit -m taban` satırları, yani meşru. Tek tek ayrılmadı; istenirse ayrı iş.

## 3. Sınav — iki yön, sentetik `arac/*.py` (hiçbir git komutu çalıştırılmadı)
`sinav_isirma` (taban origin/main): A (araç yok) 0/18 · B 18/18 · ISIRIYOR 18 · GERİLEME 0. Yamasız ağaçta araç olmadığı için bu ısırma kendiliğinden geliyor. Asıl iki yön sınavın içinde: her sınıf ateşliyor, temiz çağrılar ateşlemiyor.

| Soru | Ölçtüğü |
|---|---|
| A1–A5 | ADD-HEPSI: düz argv · os.system kabuk metni · kendi `kos()` sarmalayıcısı · döngü bağı · `-C kok add -A -- data` (eski kos_ve_yayinla satırı) |
| C1 | COMMIT-HEPSI `-am` |
| C2, C3 | COMMIT-PATHSPECSIZ: değişken `-F` · `git(*a)` sarmalayıcısı |
| S1 | STASH (`import subprocess as sp`) |
| P1 | PUSH-ZORLA (`-f` ve `+main`, `from subprocess import run as R`) |
| T1 | **TEMİZ:** pathspec'li add/commit, döngülü pathspec'li commit, `stash list`, push, python ⇒ 0 ihlal, 0 ölçülemedi, çıkış 0 |
| T2 | temiz dosyada 7 git çağrısı GERÇEKTEN çözüldü (boş geçmedi) |
| U1 | `run(sys.argv[1:])` ⇒ ÖLÇÜLEMEDİ, çıkış 2 |
| U2 | ayrıştırılamayan dosya ⇒ ÖLÇÜLEMEDİ, çıkış 2 |
| U3 | ihlal + ölçülemedi ⇒ çıkış 1, ölçülemedi yine basılı |
| U4 | dosyalar arası sarmalayıcı ⇒ ÖLÇÜLEMEDİ |
| U5 | DALLAR'da ADD-HEPSI yok ⇒ çıkış 2 |
| U6 | `commit -F m` + bilinmeyen dizi ⇒ ÖLÇÜLEMEDİ, ihlal değil |

## 4. Bulunamayan / sınırlar
- Dosyalar arası sarmalayıcı çözülmüyor; yalnız ÖLÇÜLEMEDİ olarak bildiriliyor (bugün 0).
- `getattr`, `eval`, `importlib` ile yapılan çağrılar ve git'i bir kabuk betiği (.sh/.ps1) üzerinden çağırma bu aracın evreninde değil.
- Denetim akışına duyarsız ad çözümü, bir dalda atanıp başka dalda kullanılan argv'de yanlış sonuç verebilir. Bugünkü 82 çağrının listesi `--ayrinti`'de; elle bakıldı, yanlış eşleşme görülmedi.

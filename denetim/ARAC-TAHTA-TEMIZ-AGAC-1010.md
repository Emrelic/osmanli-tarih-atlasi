# ARAC-TAHTA-TEMIZ-AGAC-1010 — tahta.py kirli çalışma ağacında da yazsın

UMIT · yazıcı işçi · 10 Ekim 2026 · taban `origin/main` = `f0b6fd50` (fetch ağ yok diye düştü; yerel origin/main zaten f0b6fd50'ydi)
Commit/push YOK. Gerçek tahtaya karşı HİÇBİR şey koşmadı; bütün ölçümler geçici `git init` + bare uzak + iki klonda.

## 1. Kusurun satırları (origin/main `arac/tahta.py`)
- `_tazele()` satır **494**: `subprocess.run(["git", "-C", KOK, "pull", "--rebase"], **_kod)`
- `_git()` satır **634**: `_pr = subprocess.run(["git", "-C", KOK, "pull", "--rebase"], **_kod)`

İkisi de izlenen herhangi bir dosyada unstaged değişiklik varsa git tarafından reddedilir:
`error: cannot pull with rebase: You have unstaged changes.`

### "Uyarıyı basıp DURUYOR" — ölçüldü, tam olarak öyle değil
`_tazele()` (497-506) uyarıyı basıyor ve DURMUYOR: `yaz` devam ediyor, numara veriliyor, `commit -- <yol>`
pathspec'li olduğu için kirli ağaçta da **başarılı** (commit 128 ÜRETİLEMEDİ, bkz. §6). Asıl düşüş
sonra geliyor:
1. `_tazele` düştü ⇒ numara **bayat** dosyadan (`len(kayit)+1`) ⇒ yamasız ölçümde A, B'nin M-0003'ünün aynısını yazdı.
2. `_git` içindeki ikinci `pull --rebase` de aynı sebeple düşer ⇒ `push` **non-fast-forward reddedilir** ⇒ `_ulasti_mi` = ULASMADI, `yaz` çıkış **1**.
3. Yerel dal artık **ayrışık**; ağaç kirli kaldıkça sonraki HER yazım aynı şekilde düşer (yamasız T5: ikinci yazım da çıkış 1).

Önemli ayrım (ölçüldü): uzak ilerlemediyse yamasız araç kirli ağaçta da yazıyor (T2 iki yönde OK).
Kusur **uzak bir kez ilerlediği an** tetikleniyor ve o andan sonra kalıcı.

## 2. Seçilen çare ve neden
Yeni yardımcı `_cek(_kod)` (+42 satır), iki çağrı yeri ona yönlendirildi (2 satır değişti). Başka hiçbir şeye dokunulmadı
(numaralama, `_Kilit`, `_ulasti_mi`, kapılar aynen — ARAC-TAHTA-NUMARA-1010 ile çakışma yüzeyi bu iki satır + yeni işlev).

- **Ağaç TEMİZSE** (`status --porcelain --untracked-files=no` boş): eski yol AYNEN, `pull --rebase`. ⇒ Temiz-ağaç davranışı bit bit aynı; mevcut sınavlar bu yüzden gerilemiyor.
- **Ağaç KİRLİYSE:** `fetch` → `@{u}` çözülür →
  - uzak zaten içimizdeyse hiçbir şey yapma (push ff olur);
  - gerideysek `merge --ff-only @{u}`;
  - ayrışıksak `merge --no-edit @{u}`; çakışırsa yalnız KENDİ merge'ümüz `merge --abort` ile geri alınır (`MERGE_HEAD` git dizininden ölçülür).
  Git'in bu iki işlemi kirli dosyaya dokunmayan güncellemeye izin verir; dokunması gerekirse hiçbir şey yapmadan reddeder ⇒ başkasının yarım dosyası **asla** değişmez.

Reddedilen adaylar:
- **`pull --rebase --autostash`**: başkasının dosyasını (defter.json) geçici olarak geri alır (o arada `defter.py` yazarsa kayıp) ve geri basma çakışırsa ortak `refs/stash`e düşer — stash yasağı + 24 Eylül `rebase-merge/autostash` kabuğu tam bu sınıftı.
- **"Uzak sürümü al, kendi kaydını yeniden ekle"** (aday 1'in birleştirme kısmı): yeniden numaralama gerektirir ⇒ ARAC-TAHTA-NUMARA-1010'un alanı; burada yapılmadı.
- **Yalnız fetch + pathspec push (HEAD'i ilerletmeden)**: paylaşılan ağacın `main`i geride kalır, tahta dosyaları HEAD'e göre kirli görünür ve `_ulasti_mi` ① kuralı yanlış ULASMADI verir — yapısal değişiklik, küçük değil.
- **defter.json'u gitignore'a almak**: görevde reddedilmiş.

Bedeli: ayrışık + kirli durumda tarih çizgisine bir **merge commit** girer (rebase yerine). Temiz ağaçta hiç olmaz.
Koordinatör doğrusal tarih istiyorsa alternatif `reset --keep @{u}` + `cherry-pick` (el ile, kirliliğe toleranslı rebase) — daha çok satır, daha çok risk; önermiyorum.

## 3. Sınav — `denetim/ARAC-TAHTA-TEMIZ-AGAC-SINAV-1010.py`, iki yönde
tahta.py geçici klonlara kopyalanır (KOK = klon, `arac/` `info/exclude`da) ve `yaz` ALT SÜREÇTE koşar. Doğru, araçtan bağımsız
olarak bare deponun `main` ucundaki `tahta.json`dan okunur.

| | Senaryo | YAMALI | YAMASIZ |
|---|---|---|---|
| T1 | temiz ağaç | OK çıkış 0, uzakta M-0001 | OK |
| T2 | KİRLİ (defter.json), uzak aynı | OK çıkış 0, tahta.json'dan geri okundu M-0002, uzakta | OK (uzak ilerlemediği için) |
| T3 | kirli dosya commit'e karışmaz | OK defter.json'a dokunan uzak commit yalnız `kurulus`; içerik aynen; status `M oturumlar/defter.json` | OK |
| T4 | KİRLİ + uzak ilerlemiş (B yazdı) | **OK** B M-0003 · A M-0004, 4 kayıt / 4 benzersiz no | **HATA** A çıkış 1, A'nın mesajı uzakta YOK, A bayat M-0003 yazdı |
| T5 | KİRLİ + AYRIŞIK (A'da itilmemiş ilgisiz commit) | **OK** ikisi de uzakta, ilgisiz commit uzakta, yarım işlem yok, kirli içerik korundu | **HATA** A çıkış 1, ilgisiz commit de uzakta yok |
| T6 | SINIR: kirli dosyayı uzak da değiştirmiş | OK = güvenli bozulma: çıkış 1, yarım işlem YOK, kirli içerik korundu, mesaj yerel tahta.json'da | OK (aynı) |

Sonuç: yamalı `SONUC: temiz (0 hata)` çıkış 0 · yamasız (`git show origin/main:arac/tahta.py`) `SONUC: KUSUR (2 hata)` çıkış 1.

## 4. Gerileme — mevcut tahta sınavları (yamalı ağaçta koştu; hepsi geçici depoda/salt okuma, gerçek tahtaya yazan YOK)
- `ARAC-TAHTA-CGNAT-SINAV-1009.py` — 0, 15/15
- `ARAC-TAHTA-GIT-YARIM-SINAV-1006.py` — 0, temiz
- `ARAC-TAHTA-KAPI-SINAV-1003.py` — 0, temiz (worktree'nin kendi git dizinine taklit dosya koyar/siler)
- `ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py` — 0, 24/24
- `ARAC-TAHTA-ULASTI-SINAV-1006.py` — 0, temiz · hata 0 · ölçülemedi 0
- `ARAC-TAHTA-ORIGIN-SINAV-1006.py` — **1, 5 HATA — ama YAMASIZ tabanda da birebir aynı 5 HATA** (ayrı temiz worktree'de koşturuldu, OK/HATA satırları `diff` ile AYNI). Sebep tahta.py değil: commitli `oturumlar/KAYNAK-DURUM.json` `bekci_yasak:true, kod KOSU` ⇒ sınavın koşturduğu `tahta_bekci.py` çıkış 3 veriyor. Gerileme DEĞİL, önceden var olan kırmızı.
- Koşturulmadı (gerçek tahta): yok — listedeki altı sınavın hiçbiri gerçek tahtaya yazmıyor.

## 5. Ölçtüm · bulamadım · istiyorum
**Ölçtüm:** kusur iki satırda (494, 634); yamasız araç uzak ilerlediği an kirli ağaçta mesajı ulaştıramıyor (T4/T5, iki yönde) ve bayat numara üretiyor; yamalı araç 6/6.
Diff: 3 hunk tahta.py (+42/−2 net) + yeni sınav 222 satır; LF, BOM yok, CR 0; temiz `origin/main` worktree'de `git apply --check` ✓.

**Bulamadım:**
- Vakadaki **"commit 128"** üretilemedi: pathspec'li `commit -F … -- <yol>` kirli ağaçta başarılı. 128'in olası kaynakları (ölçülmedi, hipotez): `index.lock` yarışı ya da yarım bir merge/rebase sırasında kısmi commit ("cannot do a partial commit during a merge"). EMRELIC'in o anki git dizini ölçülmedi.
- T6 sınıfı (kirli dosyayı uzak da değiştirmiş) bu yamayla ÇÖZÜLMEDİ, yalnız güvenli bozuluyor (yarım işlem yok, kirli içerik korunuyor, çıkış 1 ile söyleniyor).

**İstiyorum:**
1. Koordinatör diff'i (ya da NUMARA-1010 ile birlikte) uygulasın; iki iş `_tazele`/`_git` çevresinde komşu — önce bu (2 satır + yeni işlev), sonra NUMARA yeniden numaralamayı `_cek` sonrasına koysun öneririm.
2. T6 için karar: (a) kabul (şimdiki hâl), ya da (b) NUMARA-1010'un "uzak tahtayı al + kaydı yeniden ekle" birleştirmesi T6'yı da kapatsın.
3. Merge commit kabul edilmiyorsa söyleyin; `reset --keep` + `cherry-pick` sürümünü yazarım.
4. ORIGIN sınavının KAYNAK-DURUM'a bağımlılığı ayrı bir kalem (sınav gerçek `oturumlar/KAYNAK-DURUM.json`u okuyor) — bu işin dışı.

YENİ DOSYALAR: `denetim/ARAC-TAHTA-TEMIZ-AGAC-1010.diff` · `denetim/ARAC-TAHTA-TEMIZ-AGAC-1010.md` (diff içinde: `arac/tahta.py` değişikliği + yeni `denetim/ARAC-TAHTA-TEMIZ-AGAC-SINAV-1010.py`)

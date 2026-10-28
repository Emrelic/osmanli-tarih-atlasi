# ARAC-TAHTA-NUMARA-1010 — tahta numarası dallar arası çakışıyor

UMIT · yazıcı · 10 Ekim 2026 · zemin `origin/main` **f0b6fd50** (worktree `C:\atlas-umit-tahtaN`, kaldırıldı).
Teslim edilen diff, teslim anındaki `origin/main` **616f7066**'ya da `git apply --check` ile temiz uyuyor.
Gerçek tahtaya karşı `tahta.py` koşturulmadı. Commit ya da push yapılmadı.

## 1. Çakışma ölçümü (adlarıyla)

Merge-base `9d76de1e`. `git log origin/makine/kasa -- oturumlar/tahta.json`: `7fd50283 TAHTA M-5892 — KASA`, `4b093c43 TAHTA M-5891 — KASA`.
`origin/main` tarafında: `6df8c2cd TAHTA M-5892 — DENETIM-OLU-ETIKET-1009`, `d97d0f2e TAHTA M-5891 — DENETIM-OLU-ETIKET-1009`.
İki dalda da 5892 kayıt var ve son numara `M-5892`.

| no | origin/main | origin/makine/kasa |
|---|---|---|
| M-5891 | 2026-10-10 00:19 · DENETIM-OLU-ETIKET-1009 → YB · "TESLIM · DENETIM-OLU-ETIKET-1009 …" · ACIK | 2026-10-09 23:16 · KASA → YB · "KASA-MO-DIZIN-1009 TESLİM (Görev A)" · CEVAPLANDI, `cevap → M-5892` |
| M-5892 | 2026-10-10 00:20 · DENETIM-OLU-ETIKET-1009 · "AKSAKLIK (M-5891 eki) …", metinde M-5891'e atıf var | 2026-10-09 23:26 · KASA · "KASA-KALEMLER-1009 TESLİM (Görev B)" · `yanit_no M-5891` |

Geçici worktree'de `git merge --no-commit --no-ff origin/makine/kasa` denendi:
- Çakışan dosyalar `oturumlar/tahta.json` ve `oturumlar/TAHTA.md`.
- tahta.json'da **3 blok** var (satır 173891, 173919, 173936). Hepsinde `"no"` satırı ortak olduğu için git onu tek bırakıyor. Çakışan satırlar zaman/kimden/mesaj/hal/cevap ile `yanit_no` (`""` ↔ `"M-5891"`).
- TAHTA.md'de 1 blok var (5902–5908).
- Sonra `git merge --abort` yapıldı.
- Kayıp ya da yanlış atıf iki yoldan doğuyor:
  - Bloklar "ours/theirs" diye çözülürse iki mesaj sessizce kaybolur.
  - İki kayıt da tutulursa aynı numaranın iki sahibi olur. `teyit/tamam/kapat/--yanit` tam eşitlikle **ilk eşleşmeyi** bulduğu için ikinci kayıt adreslenemez. KASA'nın `→ M-5892` / `↩ M-5891` atıfları ve DENETIM'in "M-5891 eki" atfı belirsizleşir.

## 2. Numara nasıl üretiliyor, kim okuyor

`yaz()` numarayı iki yerde üretiyor:
- `no = "M-%04d" % (len(kayit) + 1)` (kilitten önce, satır 882). Bu değer kilit altında üzerine yazılıyor.
- Aynı ifade `_Kilit` altında, satır 1058'de de var.

`_tazele()` (`pull --rebase`) yalnız kendi upstream'ini çeker. Dal makinesi main'i hiç görmez, bu yüzden yerel `len+1` kaçınılmaz olarak çakışıyor. `_Kilit` de yalnız aynı dosyayı koruyor.

| Tüketici | Numarayı nasıl kullanıyor |
|---|---|
| `tahta.py` `--yanit`, `teyit`, `tamam`, `kapat` | `x["no"] == no` tam eşitlik (`teyit`/`tamam`/`kapat` `.upper()` yapıyor) |
| `tahta.py` "`<no>` yazıldı" satırı | `duyur.py` yalnız `"yazıldı"` alt dizgisini arıyor. `tahta_sunucu.py:530` ise `r"(M-\d+) yazıldı"` regex'iyle okuyor |
| `tahta_bekci.py` | anahtar `tahta_kaynak.anahtar = (no, kimden, zaman)`. Yeniden kurulurken kesim `_no` = `int(no.split("-")[-1])` |
| `tahta_sunucu.py` `_no_sayi` | `int(split("-")[-1])` ile `son_no` ve delta okuma |
| `tahta_yeni.py:66` · `_nobet.py:69` | dizgi karşılaştırması `no > seviye` |
| `_koordinator_bekcisi.py` · `isal.py` | `no`'yu küme üyesi ya da etiket olarak kullanıyor (biçimden bağımsız) |
| TAHTA.md · commit başlığı `TAHTA M-…` | yalnız gösterim |
| `ic_not_duzelt.py` | `M-\d{3,4}` iç-not işareti. Yeni biçimi tanımaz, etkisi kozmetik (dokunulmadı) |

## 3. Aday karşılaştırması

| Aday | Çakışmayı yapısal olarak kapatır mı | Bozduğu tüketiciler | Değerlendirme |
|---|---|---|---|
| **A. Makine öneki + sürüp giden sayı** `M-UMIT-5893` | Evet, (makine, n) tekil. Makine içinde kilit, makineler arasında önek ayırıyor | bekçi `_no` ve sunucu `_no_sayi` bozulmuyor (son parça sayı). Düzeltme gereken üç yer: sunucu regex'i; `tahta_yeni` ve `_nobet` dizgi karşılaştırması (alfabetik önek sırası, ayrıca M-10000'de zaten kırılacaktı) | **Seçildi.** Okunur, sıra yaklaşık korunuyor, eski numaraya dokunmuyor |
| B. İçerik özeti `M-5893-a1b2` / `M-a1b2c3` | Evet (olasılıksal) | `_no`/`_no_sayi` son parça olarak hash'i okur ve 0 döner, bu yüzden bekçi kesimi ve sunucu deltası kırılır. Sıra kaybolur ve insan okuyamaz | Ret |
| C. Makineye özel monoton blok (UMIT 1.000.000+, KASA 2.000.000+ …) | Evet, ama blok kaydı (yeni otorite dosyası) gerekiyor | int okuyanlar çalışır. Ancak `tahta_yeni`/`_nobet` dizgi karşılaştırması genişlik değişince kırılır, zaman sırası bozulur (KASA'nın her mesajı UMIT'inkinden "yeni" görünür), insan makineyi göremez | Ret |
| D. Merkezî numara (`tahta_sunucu.py` zaten "numarayı SUNUCU verir") | Yalnız ağ varken. Çevrimdışı dal yazımında kapatmaz | — | Tamamlayıcı olur, yapısal çözüm değil |

**Birleştirmede kayıpsızlık (yalnız öneri, kök `.gitattributes` koordinatörün):** Sınavda ölçüldü, geçici depoda `.git/info/attributes` ile denendi.
- `merge=union` pretty-JSON tahtada **geçerli JSON üretip mesaj kaybediyor**: 5 kayıt bekleniyordu, 4 kaldı. Yalnız "B tek" kaldı. İki kaydın alanları tek nesneye karıştı; yinelenen anahtarda `json.load` sonuncuyu alıyor. Bu sessiz bir kayıp ve çakışmadan kötü.
- ⇒ **tahta.json'a `merge=union` ÖNERİLMEZ.**
- TAHTA.md üretilmiş bir dosya. Onun için `merge=union` zararsız, ama çözümden sonra `_gorunum_yaz` ile yeniden üretilmesi yine şart.
- Doğru yol, `no` anahtarlı birleşim (sınavdaki `birlesim_no`). Aynı `no` aynı mesajsa `teyit`/`okuyan` birleşir, `hal` ileri olan alınır.
- Bu birleşim ancak bu yamayla kayıpsız oluyor: yamasız kolda 2 mesaj kayboldu, yamalı kolda 0.
- Sonraki adım olarak önerim:
  - `tahta.py birlestir` alt komutu ya da `merge=tahta` sürücüsü. Sürücünün `git config`'i makine başına kurulmalı.
  - Alternatif olarak satır-başına-kayıt (JSONL) biçimi. Bu bütün tüketicilere dokunur, bu işte yapılmadı.

## 4. Uygulanan şema ve geçiş

- **Yeni numara biçimi:** `M-<MAKINE>-<n>`.
  - `n = max(len(kayit), en büyük sayı kısmı) + 1`, yani eski dizinin devamı.
  - `_NO_DESEN = ^M-(?:([A-Z][A-Z0-9]*)-)?(\d+)$` hem eski hem yeni biçimi okuyor.
- **Önek kaynağı, sırayla:**
  1. `ATLAS_MAKINE` ortam değişkeni
  2. `git config atlas.makine` (klona özel)
  3. dal adı `makine/<ad>`
  4. `socket.gethostname()`

  Değer büyük harfe çevrilip alfanümerik karakterlere süzülüyor ve 16 karakterle sınırlanıyor.
- **Eski numaralar değişmedi.** `M-0001…M-5892` aynen okunuyor. `--yanit`, `teyit`, `tamam`, `kapat` eski ve yeni numarayla çalışıyor (sınavda ölçüldü).
- **Diff (5 dosya, +468/−5):**
  - `arac/tahta.py`: `_no_sira`, `_makine_onek` ve `_yeni_no` eklendi. Kilit altındaki tek satır değişti. Satır 882'deki kilit öncesi `len+1`'e dokunulmadı; değeri kilit altında eziliyor ve paralel diff'le bağlam çakışmasın diye bırakıldı.
  - `arac/tahta_sunucu.py`: "yazıldı" regex'i yeni biçimi tanıyor.
  - `arac/tahta_yeni.py` ve `arac/_nobet.py`: dizgi karşılaştırması yerine sayı kısmı karşılaştırılıyor. Eşit sayılı ama seviyeden farklı numara "yeni" sayılıyor (aşağı bırakma ilkesi).
  - Sınav dosyası.
- ⚠️ **Kalan risk, adıyla:**
  - Aynı makinede iki klon ayrı dallara yazarsa, üçüncü ve dördüncü kaynak ikisine aynı öneki verebilir. Örnek: UMIT'te `C:\atlas` (main) ile `C:\atlas-umit` (makine/umit); ikisi de hostname'den ya da daldan "UMIT" alır. Çare: o klonda `git config atlas.makine <ayrı ad>`. `makine/umit-tahtaweb` dalı zaten `UMITTAHTAWEB` alıyor.
  - Önek ilan edilmemiş bir makine kurmak koordinatörün işi.

## 5. Sınav — `denetim/ARAC-TAHTA-NUMARA-SINAV-1010.py`

**25/25 soru tuttu** (zemin f0b6fd50, ~2 dk).

**Kurulum:**
- Geçici `git init --bare` "origin" ve üç klon: A (`makine/a`, önek daldan), B (`makine/b`, önek `atlas.makine KASA`'dan), M (main, `KOORD`).
- `tahta.py` her klona kopyalandı. `KOK = arac/..` olduğu için tahta dosyası o klonun kendi `oturumlar/tahta.json`'u. Gerçek tahtaya dokunulmadı.

**Senaryo:** iki thread'le **eşzamanlı** yazım yapıldı, sonra A'da `--yanit M-0002` ile B'de ikinci mesaj ve `teyit M-0001`. Ardından M, `a`'yı ve `b`'yi birleştirdi.

| | YAMASIZ (tek satır `len+1`'e geri alındı) | YAMALI |
|---|---|---|
| A'nın numaraları / B'nin numaraları | M-0004, M-0005 / **M-0004, M-0005** | M-A-0004, M-A-0005 / M-KASA-0004, M-KASA-0005 |
| git merge b | kod 1, tahta.json'da 3 blok | kod 1, tahta.json'da 3 blok (metin çakışmasını numara kapatmıyor, bkz. §3) |
| numara çakışması | **['M-0004', 'M-0005']** | 0 |
| `no` anahtarlı birleşimde kayıp | **['B birinci teslim', 'B ikinci']** | 0 (7/7 mesaj) |
| eski numarayla `teyit M-0002`, `tamam M-0001`, `kapat M-0003` | ✓ | ✓ |
| yeni biçimle `--yanit M-KASA-0004`, `teyit M-A-0004` | — | ✓ (yeni numara `M-KOORD-0008`, en büyük sayıdan büyük) |
| `tahta_yeni` seviye `M-KASA-0004` iken | — | eşit sayılı `M-A-0004` görünüyor, eski dizgi karşılaştırması onu kaçırırdı |

Birim testleri:
- Git olmayan dizinde önek hostname'den geliyor (`UMIT`).
- `ATLAS_MAKINE=lab-1` verilince önek `LAB1` oluyor.
- `_no_sira` dört biçimi doğru okuyor.
- `_yeni_no` en büyük sayı + 1 veriyor.

Union ölçümü: §3'te.

**Paralel diff ile uyum (ARAC-TAHTA-TEMIZ-AGAC-1010.diff, 01:22'de hazırdı):** Temiz f0b6fd50 üzerinde iki sırada da `--check` ✓. Ben→O ✓ ve O→Ben ✓. Birleşik `tahta.py`'nin AST'si ✓. **BİRLEŞİK** (iki diff birlikte uygulanmış f0b6fd50 üzerinde) sınav: **25/25**, çıkış 0.

## Ölçtüm · bulamadım · istiyorum

- **Ölçtüm:**
  - Gerçek çakışma: M-5891/5892, 2 numara, 4 mesaj, tahta.json'da 3 blok, TAHTA.md'de 1 blok.
  - Numara çakışmasını 9 tüketici üzerinden izledim; 3'ü düzeltildi.
  - Sınav 25/25. Yamasız kolda çakışma 2, kayıp 2; yamalı kolda 0 ve 0.
  - `merge=union` sessizce kayıp veriyor (5 yerine 4 kayıt).
- **Bulamadım:**
  - KASA, HAVVA, EMRELIC ve LAB'ın gerçek hostname'leri ölçülmedi. Dal tabanlı önek (`makine/kasa` → KASA) bunu dert olmaktan çıkarıyor, ama main'deki EMRELIC hostname'e düşüyor.
  - Bekçinin yeniden kurulma kesimi (`_no(g) <= son`) birleştirmeyle sonradan gelen ve sayısı küçük bir mesajı "görülmüş" sayabilir. Bu kusur eski şemada da var ve yeni şema onu kapatmıyor; ayrı kusur olarak bildiriyorum. Çaresi kesimi sayı yerine görülen anahtar kümesiyle tutmak.
- **İstiyorum:**
  1. Diff'in uygulanması.
  2. Koordinatörün makine öneklerini ilan etmesi (öneri: her makinede `git config atlas.makine <AD>` ya da `ATLAS_MAKINE`). Aynı makinedeki ikinci klona ayrı ad verilmeli.
  3. Mevcut M-5891/5892 çakışmasının elle `no` anahtarlı çözümü: iki tarafın da dört kaydı korunmalı. Eski numaralar değiştirilmeyeceği için ikiz numaralar tahtada kalır; en az bir taraf açıklamalı bir not mesajıyla anılmalı. Koordinatörün kararı.
  4. `tahta.py birlestir` ya da `merge=tahta` sürücüsünün ayrı bir iş olarak açılması.
  5. bekçi kesim kusuru için ayrı bir iş.

YENİ DOSYALAR: `C:\atlas-umit\denetim\ARAC-TAHTA-NUMARA-1010.diff` · `C:\atlas-umit\denetim\ARAC-TAHTA-NUMARA-1010.md` · (diff içinde) `denetim/ARAC-TAHTA-NUMARA-SINAV-1010.py`

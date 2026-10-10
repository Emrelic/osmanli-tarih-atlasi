# KOS-VE-YAYINLA-ADD-1010 — `kos_ve_yayinla.py` yalnız yayın listesini commitliyor

**Taban:** `origin/main` `1d5e2dfd` + KOSU-YAYIN-KAPI-1010.diff + KOSU-YAYIN-LISTE-1010.diff.
Bu diff o ikisinin ÜSTÜNE `git apply --check` ile temiz geçiyor; üçü sırayla uygulanınca
geliştirme ağacıyla birebir aynı dosya çıkıyor.
**Diff:** `KOS-VE-YAYINLA-ADD-1010.diff` (sha256 `f2476a5c…f294`) — yalnız `arac/kos_ve_yayinla.py`, +78/−4.
**Sınav:** `ARAC-KOS-VE-YAYINLA-ADD-SINAV-1010.py` (sha256 `edc3db7b…`) — yamalıda **11/11**, yamasızda
**3/11**. `sinav_isirma` (taban origin/main, üç diff) sonucu: ISIRIYOR 8 · TESADÜF 3 (D1, D5 pozitif kontrol; D0 güvenlik) ·
GERİLEME 0 · EŞLEŞMEDİ 0.
🔴 KOŞU 22b sürüyor; gerçek zincir hiçbir kipte koşturulmadı. Her şey geçici `git init` deposunda, sahte adımlarla sınandı.

## 1. Ölçülen kusur (yamasız)
`kos_ve_yayinla.py` commit bölümünde iki delik vardı:
```
kos("git add", ["git", "add", "-A", "--", "data", "index.html"], olumcul=False)
kos("git commit", ["git", "commit", "-F", MESAJ])          ← pathspec YOK
```
- `add -A -- data`: data/ altındaki her şeyi alıyordu, izlenmeyen yeni dosyalar dahil.
- Pathspec'siz `commit -F`: indekste başka bir oturumun hazırladığı her şeyi de taşıyordu.
- Sınavda yamasız koşunun commit'i şunları taşıdı: **data/yerlesimler_x.js (yarım) ·
  data/yarim_yeni.js (izlenmeyen) · data/olaylar_y.js (başkasının indekslediği) ·
  data/yorumda.js (yayında olmayan motor çıktısı)** ve listedekiler. Çıkış 0, push çağrıldı.
- D10: yayın listesi BAYAT TÜREV verse bile yamasız zincir commitleyip pushluyordu.
- Taramanın sonucu: `kos_ve_yayinla.py`de başka `add -A` / `add .` / `commit -a` **yok**; delik yalnız bu
  iki satırdı. `kosu_yayin.py` zaten pathspec kullanıyordu (LISTE diff'iyle listesi de türetiliyor).

📌 Bu kusur neden yakalanmadı: `arac/kabuk_nobetci.py` (`:165`, ADD-HEPSI) **kabuk komutundaki**
`git add -A`'yı yakalıyor. Bir aracın `subprocess` argv listesindeki `["git","add","-A",…]`
o nöbetçinin evreninde değil. Kural vardı, ama nöbetçi araçların içine bakmıyordu.

## 2. Çare
- Liste `yayin_listesi.turet(KOK)` ile türetiliyor; LISTE diff'iyle gelen kural aynen geçerli. Satır satır basılıyor.
- data/ altında listede **olmayan** değişmiş ya da izlenmeyen her dosya ADIYLA basılıyor (`git status --porcelain --untracked-files=all -- data`, salt okur):
  `· listede DEĞİL, commite GİRMEZ: data/yarim_yeni.js (izlenmiyor)`
- `git add -- <liste>` ölümcül bir adım oldu. `git commit -F <mesaj> -- <liste>` AYNI pathspec'le atılıyor. Pathspec commit indeksteki başka içeriği taşımıyor; D4 bunu ölçtü.
- Commit `git show --name-only --format= HEAD` ile geri okunuyor:
  - liste dışı bir dosya varsa push **yapılmıyor**, çıkış 1;
  - commit okunamazsa da push yok, çıkış 1;
  - geri alma yapılmıyor (yıkıcı işlem yok), insan karar veriyor.
- Liste DURDURUCU ya da ÖLÇÜLEMEDİ verirse commit atılmıyor, çıkış 1. Bu `kosu_yayin` ile aynı davranış.
  Koordinatör hükmü gereği BAYAT TÜREV'de durmak doğru davranış; kodla ve paketle adımları EKLENMEDİ.
- `--yayinlama` kipinde liste ve liste dışı kirli dosyalar yalnız bilgi olarak basılıyor; commit yok (eskisi gibi).
- Docstring ve `--kuru` PLAN metni güncellendi.

## 3. Sınav
| Soru | Yamalı | Yamasız |
|---|---|---|
| D1 zincir tamam, commit +1, push | ✓ | ✓ (pozitif kontrol) |
| D2 yarım yerlesimler_x.js commite girmedi | ✓ | ✗ girdi |
| D3 izlenmeyen yarim_yeni.js girmedi | ✓ | ✗ girdi |
| D4 başkasının indekslediği olaylar_y.js girmedi | ✓ | ✗ girdi |
| D5 listedekiler girdi (index.html, bolgeler, devirler) | ✓ | ✓ |
| D6 liste dışı dosyalar ADIYLA basıldı | ✓ | ✗ |
| D7 commit geri okundu | ✓ | ✗ |
| D8 yarım dosyalara dokunulmadı (status: ` M` · `??` · `M ` korunuyor) | ✓ | ✗ (hepsi commitlendi) |
| D9 argv'de add -A / add . / commit -a yok, add ve commit `--` pathspec'li | ✓ | ✗ `add -A`, pathspec'siz commit |
| D10 liste BAYAT TÜREV ⇒ commit yok, çıkış 1 | ✓ | ✗ commit +1, çıkış 0 |
| D0 depo dışı git yok | ✓ | ✓ |

## 4. Kapsam dışı
- `git pull --rebase` (ölümcül değil) kirli bir çalışma ağacında reddedilir ya da yarıda kalabilir. Bu davranış önceden de vardı, dokunulmadı.
- `kabuk_nobetci.py`'nin evrenine araç argv'lerinin de girmesi (ADD-HEPSI'nin `arac/*.py` içindeki
  `subprocess` listelerini taraması) ayrı bir iş. Bugün `arac/*.py` taramasında başka bir eşleşme yok.

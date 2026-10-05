# UMIT-W39-TOPLU-SINAV-1006 — toplu sınav koşucusu (kapıya BAĞLANMADAN)

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı)
Evren: W34 raporunun 3 teyitli betiği (LEGO `arac` · SEFER-OK-0075 dump+sınav · DEGISMEZ-0086 `--yapay`).
- Gerçek liste (3 betik) → **çıkış 0**, üçü GECTI. Toplam süre **~10 sn** (W34: 0,37 + ~6 + 1,9).
- `git status` farkı: **0 betikte** YAN ETKİ. LEGO'nun `%TEMP%\lego_sinav_*` artığı depo dışında olduğu için
  git ile **görünmez** (W34'ün bildirdiği artık bu ölçümle yakalanmaz).
- Listeye yapay öten betik → **1**. Olmayan betik → **2** (ATLANDI). İkisi birlikte → **1**, ama ATLANDI yine adıyla basılır.
- Zaman aşımına uğrayan betik → HATA → **2**. Boş liste → **2**.

Mühür: sha256 `2f007e52…13e4` (yalnız §0), 2026-10-06T01:44:32+03:00, ölçümden önce.

## 1. Ortam
- Ağaç: `git -C C:\atlas worktree add --detach C:\atlas-w39 origin/main` → **d0877829**. Dubious ownership çıkmadı. Teslimden önce ağaç kaldırıldı.
- Motorun 4 tuz dosyasına dokunulmadı. `denetle_yayin.py`ye dokunulmadı, bağlanmadı. Commit yok.

## 2. Teslim: `TOPLU-SINAV-1006.diff` (+287, iki yeni dosya)
`git apply --check` temiz: d0877829 (origin/main) ve atlas-umit HEAD b0cda1ce.
- `denetim/TOPLU-SINAV-LISTE.txt`: `AD | adım1 | adım2 …`. Adım = betik (depo köküne göre) + sabit argümanlar. `.py` → çalışan py, `.js` → node. `{GECICI}` = koşucunun açıp sildiği geçici dizin. **Son adım hükümdür**, öncekiler hazırlıktır. Bugün 3 satır var: LEGO-ALET (`arac`) · SEFER-OK-0075 (dump `{GECICI}/seferler.json` → sınav) · DEGISMEZ-0086 (`--yapay`).
- `denetim/TOPLU-SINAV.py`: sınavları sırayla koşar, adım başına zaman aşımı verir (`--zaman`, varsayılan 300 sn). Her biri için GECTI/OTTU/HATA/ATLANDI + süre basar; geçmeyenin son 15 satırını basar.
  - GECTI = son adım 0 · OTTU = son adım 1.
  - HATA = zaman aşımı · node yok · hazırlık adımı ≠0 · son adım 0/1 dışı.
  - ATLANDI = betik yok.
  - Çıkış: öten varsa **1** · yoksa HATA/ATLANDI/boş liste/bozuk liste/git ölçülemedi varsa **2** · hepsi geçtiyse **0**. 1 olduğunda ölçülemeyenler yine ADIYLA basılır.
- YAN ETKİ: her sınavdan önce ve sonra `git status --porcelain -z --untracked-files=all` alınır, listelenen dosyaların sha1'i de eklenir (zaten kirli bir dosyanın yeniden değişmesi de görünür). Fark varsa adıyla basılır. **Çıkış kodunu DEĞİŞTİRMEZ**; bilgi olsun diye öyle bıraktım, karar sizin.
- `--oz-sinav`: koşucunun kendi iki yönlü sınavı (10 durum).

## 3. Ölçüm
Gerçek liste: **çıkış 0**, toplam 20,7 sn.

| sınav | sonuç | süre | yan etki |
|---|---|---|---|
| LEGO-ALET | GECTI | 0,32 sn | 0 |
| SEFER-OK-0075 | GECTI | 17,63 sn | 0 |
| DEGISMEZ-0086 | GECTI | 2,15 sn | 0 |

Öz-sınav **10/10 tuttu**:

| # | durum | çıkış |
|---|---|---|
| 1 | gerçek liste | 0 |
| 2 | + yapay öten | 1 |
| 3 | + olmayan betik | 2 |
| 4 | öten + olmayan (ATLANDI basıldı) | 1 |
| 5 | boş liste | 2 |
| 6 | zaman aşımı (`--zaman 2`, 10 sn uyuyan betik) | 2 |
| 7 | betik çıkış 2 | 2 |
| 8 | hazırlık adımı 1 verirse OTTU değil HATA | 2 |
| 9 | depoya dosya yazan betik: YAN ETKİ basıldı | 0 |
| 10 | bozuk satır | 2 |

## 4. Öngörü karşılaştırması
- Çıkış 0, üçü GECTI → **TUTTU**.
- Süre ~10 sn → **YANLIŞ**: 20,7 sn ölçüldü. SEFER 17,6 sn sürdü, W34 dump + ~6 sn demişti. Fark makine yükü olabilir, ölçülmedi.
- Yan etki 0 → **TUTTU**. LEGO'nun `%TEMP%\lego_sinav_*` artığı git ile görünmez → **TUTTU**: ölçüm öncesi 0, koşudan sonra 1 artık vardı, LEGO her koşuda 1 dizin bırakıyor. Bu oturumun bıraktığı 4 artığı sildim.
- Öten → 1 · olmayan → 2 · öten + olmayan → 1 · zaman aşımı → 2 · boş → 2: **hepsi TUTTU**.

## 5. Bulunamadı / öneri
- Depo DIŞI yan etki (%TEMP%) ölçülmüyor. Başka süreçler de TEMP'e yazdığı için sahte pozitif riski var; bilerek eklemedim.
- Öneri: LEGO sınavına `shutil.rmtree(tmp)` eklenirse TEMP artığı kapanır. Bu ayrı bir iş, dokunmadım.
- Yan etki çıkışı etkilesin mi (ör. 1 ya da 2), kararı koordinatörde.

## 6. git status
atlas-umit: `?? denetim/TOPLU-SINAV-1006.diff` · `?? denetim/UMIT-W39-TOPLU-SINAV-1006.md`. Ağaç kaldırıldı.

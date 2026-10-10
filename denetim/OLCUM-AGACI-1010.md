# OLCUM-AGACI-1010: `arac/olcum_agaci.py` aracı

UMIT · 10 Ekim 2026 · model Opus · yama tabanı `origin/main` `ba636eee` (yama yalnız
yeni dosya ekliyor; `git apply --check` bu tabanda temiz, uygulanınca bayt bayt aynı)

## Teslim
| dosya | ne |
|---|---|
| `denetim/OLCUM-AGACI-1010.diff` | iki YENİ dosya: `arac/olcum_agaci.py` · `denetim/ARAC-OLCUM-AGACI-SINAV-1010.py` (585 satır, sha256 `e8ec4dfa…`) |
| `denetim/ARAC-OLCUM-AGACI-SINAV-1010.py` | sınavın kendisi (diff'tekiyle aynı) |
| `denetim/OLCUM-AGACI-1010.md` | bu rapor |

Commit, push ve stash yapılmadı. `C:\atlas`a yazılmadı. Motor tuzu dosyalarına dokunulmadı.

## Araç
```
py arac/olcum_agaci.py hazirla [--yol P] [--json J] [--hedef devlet,donem] [--kok K] [--uzak origin]
py arac/olcum_agaci.py coz     <yol> [--hedef ...] [--json J]   # var olan ağaçta yeniden çöz + doğrula
py arac/olcum_agaci.py kaldir  <yol>
çıkış: 0 hazır · 2 kullanım · 3 ÖLÇÜLEMEDİ
```
1. Önce fetch yapar, ardından `worktree add <yol> origin/main --detach` ile ağacı kurar.
   `--yol` verilmezse yol `<tmp>/olcum_agaci/agac-<damga>` olur. Sonra `HEAD == origin/main`
   ve `HEAD..origin/main == 0` olduğu doğrulanır. Ana checkout'un geride olup olmadığı da
   bilgi olarak basılır.
2. Çözücü olarak ağacın KENDİ `kodla.py coz-c data data/<kaynak> <hedef>` komutu kullanılır.
   Arayüz okunarak kuruldu, varsayılmadı. Araç `kodla.HEDEFLER`e de sorar; ad tablosu
   ayrışırsa çıkış 3 verir.
3. **İki hedef birden çözülür:** `devlet` ve `donem`. D8 ikisini de okur
   (`denetle.py _D8_GOVDE_DAMGA`). Görev yalnız `devletler_harita.js`i anıyordu, ama tek
   başına o çözülürse D8 yine ölçülemez.
4. 🔴 **Doğruluk kapısı:** `kodla.py coz_c` damgayı okuyup atıyor (`onek, havuz_b, sonek, _sha`)
   ve "çözdüm"ü doğrulamıyor. Araç çözülen dosyanın sha256'sını parça dosyasındaki
   `__DP_SHA`/`__PR_SHA` damgasıyla karşılaştırır. Eşleşmezse çıkış 3.
5. Rapor ekrana basılır ve JSON'a yazılır. İçeriği: taban SHA · geride · her dosya için bayt,
   sha256, damga ve süre · sitenin yükleyicisi. Uyarı satırı da her zaman basılır:
   *"Çözülen dosyalar YEREL bir ÇÖZÜMdür, yayındaki harita DEĞİLDİR."*
6. `kaldir` YALNIZ aracın kurduğu ağacı kaldırır. Araç kurduğu ağacın özel gitdir'ine
   (`.git/worktrees/<ad>/olcum_agaci`) bir işaret bırakır. İşaret yoksa çıkış 2 verir;
   böylece `C:\atlas-parti` gibi başka ağaçlar korunur.

## Ölçümler
**Taban `37770b31` (ilk koşu):**
```
data/devletler_harita.js  181.080.905 bayt  172,69 MB  sha256 82cc12240c46abf9…a95af01c = damga  47,4 sn
data/donemler.js           61.296.467 bayt   58,46 MB  sha256 5469235ff7b52b63…661ec49e7 = damga  11,3 sn
disk 231,15 MB · toplam 78 sn (fetch + worktree + iki çözme)
site yükler: devlet_harita_ust.js ← index.html:1768 · devlet_parcalar.js ← js/geo_coz.js:195 (dinamik)
             donemler_ust.js ← index.html:1813 · donem_parcalar.js ← index.html:1814
             devletler_harita.js / donemler.js yükleniyor mu: HAYIR
```
Sınav koşularında (`a51430cc`, `14bb94b9`) aynı iki sha256 çıktı. Çözme süresi
38–58 sn + 10–24 sn.

⚠️ **"93 MB bekleniyor" tutmadı: 172,69 MB.** 93 MB, `CLAUDE.md §5`'in andığı takipsiz yerel
kopyaydı, ve §5 o kopyanın yanlış olduğunu zaten söylüyor. Yayındaki damganın çözümü
181.080.905 bayttır. Damga satırı (`__DP_SHA=82cc…`) bunu kanıtlıyor.

**D8 iki yönde, aynı taban (`37770b31`), TAM `py arac/denetle.py` ile:**
| ağaç | çıkış | süre | D8 satırı |
|---|---|---|---|
| çıplak worktree | **2** | 122 sn | `Değişmez 8  !  ÖLÇÜLEMEDİ — RuntimeError: devletler_harita.js YOK …` (kovadaki TEK kalem buydu) |
| `olcum_agaci hazirla` | **1** | 209 sn | `8a ✗ 1517 birim (tavan 1508)` · `8b ✓ 82 (tavan 82)` · `8k ✗ 78 TAM KÖR · 22 yarım · 178 (hat,gün)` · `8m ✓ 450 hat` |

🔴 **YAN BULGU: taze `origin/main`de D8 KIRMIZI.** Bu durum şimdiye kadar çıkış 2'nin
arkasında saklıydı. Ayrıntı:
- **8a:** 1517 birim, tavan 1508, yani +9. YENİ KAPSAM: 2 hatta 4 birim, örnekler `d1829-osm-rus-1` Hanak/Posof,
  `d1913-osm-ir-1` Şeyhrumi, `d1918-fr-de-isgal` Saarbrücken, `d1919-at-cs-fiili-1` Budweis.
- **8k:** defterde olmayan 18 (hat, gün) körleşti, 11 hatta. Örnekler `d1918-kenya-almanya-dogu-afrika`,
  `d1919-hu-cs-fiili-2/3`, `d1919-pl-ro-fiili`, `d1923-pl-ro…`. Bu kalem ÖLÇÜLEMEYEN kovasına
  da düşüyor.

İki sınav koşusunda (`a51430cc`, `14bb94b9`) aynı 8a sayısı çıktı: 1517/1508. Bu bir ölçüm
arızası değil, gövde ile defter/tavan arasındaki gerçek bir farktır. Hükmü ben vermedim;
koordinatöre aittir (`§3.4` tavanı koordinatör yazar).

## Sınav: `denetim/ARAC-OLCUM-AGACI-SINAV-1010.py [--tam]`, **17/17 GEÇTİ** (388 sn, `--tam`)
- **S1–S4 kullanım (2):** argümansız · bilinmeyen hedef (ağaç KURULMAZ) · araç-yapımı olmayan
  ağacı kaldırma (ağaç YERİNDE kalır) · yol zaten var.
- **S5 fetch başarısızlığı:** `--uzak olcum-agaci-yok-uzak` ile **3**. Ağaç kurulmaz, worktree
  listesine de girmez.
- **S6–S9 GERÇEK hazırlık:** çıkış 0 · varsayılan JSON · taban = origin/main · geride 0 · iki sha256 = damga
  · boyut diskte birebir · uyarı basılıyor · kaynak dosyalar sitede yüklenmiyor.
- **S10/S11:** denetle.py'nin GERÇEK D8 kapısı (`_d8_govde_kimlik`) iki yönde sınandı.
  Çıplak ağaçta RAISE, hazır ağaçta GEÇTİ.
- **S12/S13:** `__PR_SHA` bozulunca `coz` 3 verdi. Onarılınca damgayla eşleşti (ters yön).
- **S14/S15 (`--tam`):** tam denetle çıplak ağaçta 2 + D8 ÖLÇÜLEMEDİ verdi. Hazır ağaçta D8
  ÖLÇÜLDÜ (çıkış 1, yukarıdaki 8a/8k).
- **S16/S17:** `kaldir` 0 verdi; dizin ve listedeki kayıt silindi. İkinci kaldırma 2 verdi.

### Geliştirirken bulunan ve düzeltilen iki kusur (ikisi de ölçüldü)
1. **İlk koşuda S13 kaldı:** sınav 10 dk sürdü ve o arada `origin/main` ilerledi
   (`a51430cc` → …). `coz` doğru olarak 3 verdi ("gerisinde"). Kapı doğru çalıştı, ama sınavın
   sorusu karışıktı. S13 artık çözümü ölçüyor; "geride ⇒ 3" durumunu doğru sayıp adıyla basıyor.
   📌 Ders: aynı makinede `origin/main` dakikalar içinde hareket ediyor. "Ağaç geride değil"
   bilgisi yalnız ÖLÇÜM ANINDA doğrudur, JSON'daki `geride` de o anın fotoğrafıdır.
2. **Varsayılan JSON yolu ağacın YANINA yazılıyordu.** `C:/atlas-olcumB` için bu yol `C:/`
   köküne düşüyordu ve PermissionError ile **yakalanmamış traceback, çıkış 1** veriyordu, yani
   sessiz olmayan ama yanlış bir koddu. JSON artık `<tmp>/olcum_agaci/<ad>.olcum.json` altına
   yazılıyor; OSError da 3'e düşüyor.

## Bulamadıklarım
- `kodla.py coz-c`'nin neden kendi damgasını doğrulamadığını bulamadım. Bunu bilerek yapılmış
  bir tercih olarak gösteren bir yorum yok. Araç kapıyı kendi tarafında kurdu; `kodla.py`ye
  dokunulmadı.
- D8a'daki +9'un ve 8k'deki 18 yeni körlüğün hangi commit'le geldiğini ölçmedim, çünkü
  görevin dışında.

## Öneriler (koordinatörün kararı)
1. `CLAUDE.md §5` tarifinin yerine tek satır konabilir:
   `py arac/olcum_agaci.py hazirla` → ölçüm → `py arac/olcum_agaci.py kaldir <yol>`.
   Taban, boyut ve sha256 böylece otomatik olarak rapora girer.
2. Taze `origin/main`de D8'in kırmızı olduğu (8a 1517 > 1508 · 8k 18 yeni körlük) bir
   kıtaya ölçtürülmeli. Bu durum şimdiye kadar çıkış 2'nin arkasındaydı.
3. Disk bütçesi: hazır bir ağaç ≈ 231 MB çözüm + checkout tutuyor. İş bitince `kaldir`
   kullanılmalı; sınav kendi ağaçlarını `finally` içinde kaldırıyor.

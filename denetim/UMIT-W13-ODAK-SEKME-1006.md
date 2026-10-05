# UMIT-W13-ODAK-SEKME-1006 — O1 · O2 · O3 (odak nöbetçisinin sekme körlüğü)

Ağaç: `C:\atlas-w13`, `git worktree add --detach` ile **origin/main `3e4b3a98`** üzerine kuruldu.
`fetch` + `worktree add` "dubious ownership" VERMEDİ, `safe.directory` kullanılmadı.
Ürün: `denetim/ODAK-SEKME-1006.diff` (uygulanmadı, commit yok).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi, sonra ölçüldü
| öngörü | ölçüm | hüküm |
|---|---|---|
| O1 SEKME_OKUNMAYAN ≈ 1103 (424+662+17) | **1103** (424 · 662 · 17) | ✓ |
| O1 NOKTA 3987 · KUTU 14 · GÖVDE ≈ 372 · KIPIRDAMAZ ≈ 4699 | 3987 · 14 · 355 (+17 okunmayan) · 3613 (+424+662 okunmayan) | ✓ (OKUNMAYAN öteki dalları ezer) |
| O2 havuz farkı ≈ 152 ad, Ogaden kırık sayılmaktan çıkar | **152**, Ogaden çözülüyor, kırık atıf 1 → **0** | ✓ |
| O3 BEYANLI→yabancı ≈ 355 | **355** | ✓ |
| O3 ODAKSIZ ≈ 3350 | **3631** | ✗: tabanı CLAUDE.md §9'daki 485'ten aldım. O sayı bayat; gerçek toplam 769'du. 769 + 2975 − 113 = 3631, tam tutuyor |
| O3 tuzağı: veri paketten okunursa ODAK-KAPI-SINAV ③ ÖTMEZ | paket değil KAYNAK dosya koşturuldu, ③ **ötüyor** | ✓ önlendi |

## 1. Ne değişti (diff: 3 dosya)
- **`arac/odak_cozum.js`**
  - **O3 (evren):** app.js'ten önce index.html'deki betikler aynı sırayla koşar, satır içi olanlar dâhil. Paketler `paket_coz.py` künyesiyle KAYNAK dosyalara açılır; bu haritayı Python verir, JS'te regex yok. Ardından app.js'ten metinle 7 parça kesilir: `gunIdx/idxTarih`, `_cDevletIx`, `_khGunStr`, `ISARET_KAYNAK+AD_KONUM+adKonumBul`, `olayKonumu`, `maddeOdakKutusu` ve iki bağlama IIFE'si. `olaylar` deseni de app.js metninden okunur. Kesim işareti, etiket haritası, kaynak dosya ya da kritik veri betiği eksikse **çıkış 2 + `ÖLÇÜLEMEDİ`**. Evrenin üç kovası var:
    - OLAYLAR: (b) yolu
    - SEKME: `DEVLETLER[].kronoloji`, `maddeAc` yolu
    - AÇILAMAZ: sınıf ve tavan sayımına girmez, ama kırık atıf orada da sorulur
  - **O2 (havuz):** `SEHIR` kaldırıldı. `yer_id` ve `odak_yer` app.js'in gerçek `adKonumBul`'uyla çözülür. Eski havuzla fark yalnız raporda basılır.
  - **O1 (sekme dalı):** `siniflandir`a dokunulmadı. Yanına `sekmeDali` eklendi; `maddeAc` kararını kesilmiş gerçek `olayKonumu` ve `maddeOdakKutusu` ile yürütür, `maddeOdakKutusu`na ham `m` verir (gi kusuru birebir). Dallar: NOKTA / KIPIRDAMAZ / KUTU / GÖVDE ve hepsini ezen **OKUNMAYAN**. Okunmayanın alt sınıfları: `kipirdamaz_odak` · `kipirdamaz_yer_kon` · `govde_odak_kurulmadi` · `govde_yer_kon`.
  - Sınav kancaları: `G.sor` (madde başına cevap) ve `G.app_js` (app.js'e dokunmadan bozuk kesim sınamak için).
- **`arac/odak_olc.py`**
  - Evren tarayıcı oldu: `etiket_kaynak()` → `paket_coz`. `girdi.yukle` artık çağrılmıyor; yerleşimler tarayıcının `YERLESIMLER`i: 4299, girdi 4296.
  - `→yabancı` sütunu dosya adından değil yoldan sayılıyor: SEKME'deki BEYANLI.
  - Çıktıya üç blok eklendi: evren başlığı, DEVLET SEKMESİ tablosu, AÇILAMAZ listesi.
  - Kapıya `sekme_okunmayan` tavanı eklendi. Alan tavanda **yoksa ötmez, `ⓘ` basar** (dondurma kararı D). Varsa yalnız gerileme öter.
  - `--tavan-yaz` de alanı yazıyor; `--dosya` evreni değil yalnız çıktıyı süzüyor.
- **`denetim/ARAC-ODAK-SEKME-SINAV-1006.py`:** kendi sınavım, iki yönde. Sonuç: **13 geçti / 0 başarısız**, `data/` temiz geri alındı.
  - Ötmesi gerekenler: Ö1 Delyan · Ö2 Mercidâbık · Ö3 sentetik `odak_kimlik` (OKUNMAYAN, `siniflandir` ise KUTULU = eski yanlış temiz) · Ö4 tavan 1103→1104 GERİLEDİ · Ö5 bozuk kesim → çıkış 2 · Ö6 eksik etiket → kapı ihlal.
  - Ötmemesi gerekenler: N1 93 Harbi KUTU · N2 Palermo NOKTA · N3 Ogaden kusursuz · N4 tavan eşit · N5 iki tutarlılık.

## 2. ÖNCE / SONRA
| | ÖNCE (disk evreni, SEHIR) | SONRA (tarayıcı, AD_KONUM) |
|---|---|---|
| madde (sayılan) | 10026 | 10728 = OLAYLAR 1656 + SEKME 9072 |
| AÇILAMAZ (sayılmaz) | — (içerde sayılıyordu) | 2171 = 16 künyesiz KRONOLOJI_* (2059) + 7 iki parçalı OLAYLAR_* (112) |
| KONUMLU · KUTULU · BEYANLI | 8113 · 477 · 667 | 6259 · 469 · 369 |
| BEYANLI→yabancı | 653 | **355** |
| ODAKSIZ toplam | 769 | **3631** (2975'i `devletler.js` künye-içi) |
| ODAKSIZ, kapının evreninde (152 dosya) | 438 (tavan 438) | **325** |
| YENİ KAPSAM (tavana katılmaz) | — | 9 dosya · 3306 (devletler.js 2975 + once1281/gd_asya) |
| kırık atıf | 1 (Ogaden, beyanlı) | **0** ("beyanlı borç KAPANDI: 1") |
| SEKME: NOKTA · KUTU · GÖVDE · KIPIRDAMAZ · **OKUNMAYAN** | ölçülmüyordu | 3987 · 14 · 355 · 3613 · **1103** |
| süre | ~11 sn | ~11 sn |

**`ODAK-KAPI-SINAV.py`:**
- **ÖNCE:** 5/0.
- **SONRA, bugünkü tavanla:** 3/2.
  - ① tavan−1 artık ötmüyor, çünkü 325 < 437.
  - ② `bilinen_kusur` boşaltılınca ihlal bekliyor, ama Ogaden artık kusur değil.
  - İkisi de yeni tabanın yazılmamasından; alet kusuru değil.
- **SONRA, önerilen tavanla** (geçici yazıldı, geri alındı): **5/0**. ③ `kronoloji_misir.js` kırık atfı ötüyor; bu evren AÇILAMAZ olduğu hâlde ötüyor, çünkü kırık atıf orada da soruluyor.

**Kapı (`kapi_olcumu`), bugünkü tavanla:** ihlal **YOK**.
- İki "İYİLEŞME, tavan indirilmeli" satırı çıkıyor: ODAKSIZ 325/438, BEYANLI 355/655.
- `ⓘ SEKME_OKUNMAYAN 1103 — tavanda YOK` satırı çıkıyor.
- ⇒ Diff tek başına inse yayını bloke etmez, ama tavan gevşek kalır.

## 3. D KARARLARI — yalnız öneri, hiçbirini yazmadım
1. **`ODAK-TAVAN.json`:**
   - `odaksiz` 438 → **325**
   - `beyanli_yabanci` 655 → **355**
   - yeni alan `sekme_okunmayan`: **1103**
   - `bilinen_kusur`: Ogaden düşer → `[]`
   - `evren` (152 dosya) DEĞİŞMEZ. 2975 künye-içi odaksız YENİ KAPSAM'da kalır; onu evrene almak ayrı karar.
   - 🔴 `--tavan-yaz` KULLANILMAMALI: evreni bütün dosyalara genişletir ve 3306'yı affeder. Bu, `tavan_notu_1001`deki bilinen alet kusuru. Dört alan elle yazılmalı.
2. **Sıralı iniş:** diff ile tavan AYNI commit'te inmeli. Diff tek başına inerse `ODAK-KAPI-SINAV.py` ① ve ② kırmızı olur (yukarıdaki 3/2).
3. **O8:** "BEYANLI→yabancı — kamera OSMANLI kutusuna uçar" satırını DEĞİŞTİRMEDİM. Bu satır CLAUDE.md §9 ile birlikte iner. Doğru mekanizmayı artık DEVLET SEKMESİ tablosu gösteriyor: 355 GÖVDE, 14 KUTU.

## 4. Yan bulgular (bulunamadı / dokunulmadı)
- `data/acilis_siluet.js` node kabuğunda `Element is not defined` veriyor. Kronoloji değil, kritik listede değil; uyarı olarak basılıyor, gizlenmedi.
- `ODAK-KAPI-SINAV.py` tavanı LF yazıp geri koyuyor. `autocrlf=true` ağaçta (UMIT/EMRELIC) içerik aynı olduğu hâlde `M` kalıyor; `git checkout --` ile temizledim.
- CLAUDE.md §9'daki "ODAKSIZ 485 · BEYANLI 669" bayat (tavan 438/655). Benim ODAKSIZ öngörüm tam bu yüzden çürüdü.
- NOKTA dalında `odak_kimlik` yazılı madde: 0. Raporun 129 gizli vakası hepsi OKUNMAYAN içinde.
- `app.js`'e, motor tuzuna (`uret_petek` · `renkler` · `girdi` · `motor_onbellek`) ve `ODAK-TAVAN.json`a dokunulmadı.
  - `girdi.py`yi okumayı bıraktım; dosyaya yazmadım.

## 5. Diff denetimi
- Satır sonu LF, CR **0**.
- Geçici indeksle (`GIT_INDEX_FILE`) `origin/main`e karşı ölçüldü: `git apply --check --cached` ileri **✓**, `-R` **✗**.
- Diffteki dosyalar: `arac/odak_cozum.js` · `arac/odak_olc.py` · `denetim/ARAC-ODAK-SEKME-SINAV-1006.py`.

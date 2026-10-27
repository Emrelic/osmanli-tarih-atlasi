# KOŞU 29 — ÖN KONTROL (MO-MOTOR, 21 Ekim 2026)

Koşu emrini **Emre verir**. Bu belge "KOŞU HAZIR" demenin dayanağıdır; emir gelmeden hiçbir şey başlatılmaz
(`denetim/KOSU-29-BASLAT.ps1` yalnız `-Kuru` ile denendi).

## 1. Ne değişti (motor tuzu — önbellek isabeti OLMAYACAK, tam inşa)
KOŞU 28 tabanı `4b663e8e2`. Tuz dosyalarına (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`) dokunan commit'ler:
| commit | ne |
|---|---|
| `10484a1e9` | UFUK MÖ 12000'e açıldı (`girdi.py`) |
| `aae897c1c` | Saluzzo boyası |
| `81b50d84d` | MO katmanı: 10 gün tavan · MÖ sahnesi · k≥4 kuralı (yalnız `mo`) · puan kapısı MÖ'de atlanır · `KULTUR_DESEN` |
| `5f55ba4c3` | `MOTOR_MO_SINIR=1281-01-01` · dünya ölçeği epok düzeltmesi (`searchsorted` dtype + pencere) · **KISTAK KÖPRÜSÜ yaması uygulandı** (Emre #80) · 66 MÖ boyası |
Veri tarafı: 351 kırılma günü 1281 öncesinde (114 MÖ + 237 MS), 298 nokta 1281 öncesi sahnede; `devletler.js` 1.110 devlet (KOŞU 28: 1.043).

## 2. Bayraklar (koşucu betiği: `denetim/KOSU-29-BASLAT.ps1`)
KOŞU 28'in listesi **aynen** + `MOTOR_KISTAK_KOPRU=1`:
`MOTOR_SUREC_ISCI=2 · MOTOR_ONBELLEK_DIZIN=C:\atlas-onbellek · MOTOR_YURUYUS=1 · MOTOR_YURUYUS_SAAT=40 · MOTOR_DEVAM=1 · MOTOR_COL_UFUK_SAAT=0 ·
MOTOR_UFUK_BANT=40,56,80 · MOTOR_SINIR_KISIT=1 · MOTOR_COL_GIRINTI_KAPALI=1 · MOTOR_KOMSU_KUR_BOL=1 · MOTOR_YAKA_KILIDI=1 · MOTOR_KISTAK_KOPRU=1`
MÖ katmanı **bayrak gerektirmez** (varsayılanlar: `MOTOR_MO_YURUYUS_GUN=10` · `MOTOR_MO_SINIR=1281-01-01` · `MOTOR_TARIH_BASI_MERKEZ=mo` · `MOTOR_MERKEZ_K0=1` · `MOTOR_MO_PUAN_KAPISI=0`).
**`MOTOR_B_DOLGU` TANIMLANMAZ** ⇒ B dolgusu bu koşuya dahil değil (logda `Ⓑ dolgu: KAPALI` satırı beklenir). `MOTOR_UFUK_BANT` **80'i içermek zorunda** (yoksa koşu SystemExit ile durur).

## 3. Süre ve RAM (ÖLÇÜLDÜ, makine HAVVA)
* **KOŞU 28 (referans):** 7 s 19 dk (ISCI=2). Aşamalar: epok ön geçişi 9 dk 52 sn · yabancı gövdeler 3 s 29 dk · dönemler 1 s 55 dk · bantlar 52 dk.
* **Dünya ölçeği MÖ epoku** (tüm 4.764 yerleşim, tek süreç, `denetim/ARAC-MO-MOTOR-KUTU-1020.py kos --dunya-olc`):
  | tarih | petek | `petek_epok` | RSS sonrası |
  |---|---:|---:|---:|
  | MÖ 9500 | 25 | 2,8 sn | 2,3 GB |
  | MÖ 3000 | 26 | 4,6 sn | 2,4 GB |
  | MS 500 | 12 | 2,7 sn | 2,4 GB |
  | MS 1100 | 106 | 20,0 sn | 2,4 GB |
  | 1500 (CE, referans) | 4.669 | 2,5 sn | 2,4 GB |
  🔴 **Düzeltilmeden önce** aynı MÖ epok: **540 sn, +8 GB** (`np.searchsorted` int32 diziye Python int ile aranırken 20,9 M öğeyi int64'e kopyalıyordu; cProfile ile bulundu). Düzeltme sonucu DEĞİŞTİRMİYOR (hücre düzeyinde fark 0).
* **Süreç zirve RAM'i 13,2 GB** (tek süreç, ISCI=1 ölçümü) ve bu zirve **epok aşamasından ÖNCE** (çöl tavanı/ada kuralı) oluşuyor; epok aşaması RSS'e ~0 ekliyor. KOŞU 28'in RAM'i kayıtlı değil — karşılaştırma yok. HAVVA toplam 23,7 GB; ISCI=2'de işçi süreç payı ayrıca (KOŞU 28 çalıştı).
* **Tahmin:** 351 kırılma günü × (2–20 sn) = **+10–120 dk** (en kötü senaryo: hepsi MS 1100 gibi 20 sn). **Toplam ≈ 8–9,5 saat.** Eşik aşılırsa log `varlık devri (petek_epok)` satırından okunur.
* **B-GORUNUM'un "çekişme" bellek patlaması (1281 tam kesitte 10,7 GB):** `dolgu.py` (B hattı) içinde; A motorunda DEĞİL. A hattındaki ekleyici kapı (`_dolgu_kumesi`) MÖ günlerinde 0,0 sn/0 devlet, MS 1100'de 0,0, 1500'de 0,1 sn ölçüldü. B kapalı olduğundan bu koşuda risk yok.
* Disk: HAVVA C: 203 GB boş (KOŞU ≈ 60 GB gerekir).

## 4. Ne DEĞİŞMEDİ (kanıt)
* 1281 ve sonrası: `petek_epok` + `devir_kumesi` 16 CE gününde eski ↔ yeni **bit bit aynı**; tam hat çıktısı (677 devlet-dönem + 1.388 Osmanlı kaydı) **fark 0** (bayraksız, KISTAK/YAKA kapalı). Bayraklı kısım KISTAK (39 tohum taşınır) ve YAKA KİLİDİ'dir — bilinen/onaylı değişiklikler.
* k≥4 kuralı 1281 sonrasına **AÇIK DEĞİL** (Emre).
* Tam hat MÖ sınavı (küçük pencere, sentetik nokta): 15 MÖ dönemi, çakışma 0, sıfır uzunluk 0, negatif tarih biçimi doğru.
* **Gerçek MÖ verisiyle tam hat** (`2c61b8be3` bağlanmış veri; kutu 20–75°D · 25–48°K; 1.110 devlet; **çıkış 0, 6.706 sn** — başka koşuyla çekişirken):
  MÖ 11000 354 bin km² (natufiyen, aseramik-kuzey-levant) · MÖ 9500 593 bin · MÖ 8000 943 bin (4 kültür) · MÖ 6000 529 bin · MÖ 4000 195 bin (yahya) · MÖ 3000 733 bin (erken-harappa, hissar, yahya) ·
  MÖ 2000 808 bin (elam-simaşki, eski-asur, harappa) · MÖ 1000 348 bin (elam-yeni, yahya) · MS 500 121 bin (bizans). Hepsi tavan içinde; kalan toprak sahipsiz = veri yok. Logda `boş gövde (yazılmadı) 0`, Traceback yok,
  `🌉 KISTAK KÖPRÜSÜ` kutuda 5 tohum (dünyada 39 beklenir), `🔒 YAKA KİLİDİ` 40 nokta.

## 5. DEĞİŞECEK (uyarı)
* **1000–1281 haritası değişecek** (MO_SINIR=1281): 10 günlük tavan, yoğunluk kapısı yok, sahne kuralı. Mevcut yayındaki T5 1000–1281 dilimi genişleyebilir/delik açabilir. Koşu sonrası `denetle` (özellikle Değişmez 1/8) ve `renk_olc` çıkış kodu okunur; gerileme çıkarsa `MOTOR_MO_SINIR=1000-01-01` ile yeniden değil, ayrıca karar.
* Yeni kimlikler: `devletler.js` + 66 MÖ boyası; `renk_olc` çıkış 0 (12 çakışma — değişmedi); kabartma raporu +2 (yalnız rapor).
* MÖ yerleşimleri `girdi_listesi.py`ye **bağlanmış olmalı** (veri-mo-arkeo: `py denetim/arkeoloji_girdi_cikar_1020.py ekle`). Bağlı değilse koşu MÖ'yü görmez.

## 6. Koşu öncesi kontrol listesi (sırayla; hepsi okunur, çıkış kodu yazılır)
1. `git fetch origin && git rev-list --count HEAD..origin/main` → 0 (taban = origin/main ucu).
2. Veri bağlandı mı: `grep yerlesimler_mo_ arac/girdi_listesi.py index.html`.
3. `py arac/denetle.py` ana ağaçta ölçülemez (D8) — **kapı**: `py arac/push_kapisi.py --kuru` ya da ayrı worktree'de `coz-c` ×2 + `denetle` çıkış 0.
4. `py arac/renk_olc.py` çıkış 0 · `py arac/odak_olc.py` · `py arac/paketle.py yenile` + `surum_damgala.py` temiz (veri değiştiyse).
5. HAVVA'da koşu yok: `Get-CimInstance Win32_Process | ? CommandLine -match 'uret_petek|_sinav_kesit'` → boş. `C:\atlas-onbellek` yazılabilir (6,8 GB).
6. `powershell -File denetim\KOSU-29-BASLAT.ps1 -Taban <hash> -Kuru` → "KURU … TAMAM" (disk, RAM, DEM, taban ⊇ origin/main).
7. Emre'nin emri → `powershell -NoProfile -File denetim\KOSU-29-BASLAT.ps1 -Taban <hash>`.
8. Koşu başlayınca doğrulanacak log satırları (ilk 10 dk): `🏺 MÖ katmanı: sınır 1281-01-01 · tavan 10 gün` · `🌉 KISTAK KÖPRÜSÜ: 39 tohum` · `🔒 YAKA KİLİDİ` · `Ⓑ dolgu: KAPALI` · önbellek "tuz FARKLI ⇒ isabet yok" (beklenen) · ilk aşama `▶ YÜRÜYÜŞ`.
9. İniş: `KOSU-YAYIN.md §C` zinciri (`kodla yay` ×4 → `coz-c` ×2 → `uret_bolge_pencere` → `denetle` → `renk_olc` → `paketle` → `surum_damgala` → `denetle_yayin` → `push_kapisi --tuz-onay --uretilen-onay`). **`yay` çıkış 0 vermeden `coz-c` koşturulmaz.**
10. Kabul: AŞAMA BİLANÇOSU KOŞU 28 ile kıyaslanır; 1281+ Osmanlı alan kesitleri (`OLCU_KESIT`) kıyaslanır; denetle 8a/8b tavanları.

## 7. Açık riskler
* 1000–1281 dilimi (yukarıda). · MÖ gerçek verinin boya/lejant görünümü arayüzde henüz yok ("veri yok" etiketi, desen raster'ı — B/arayüz oturumu).
* Dönem hattı MÖ gerçek veriyle kutuda çalıştı (§4); dünya ölçeğinde dönem aşaması süresi ölçülmedi (yukarıdaki +10–120 dk tahmini epok kalemi içindir, dönem kalemi KOŞU 28'in 1 s 55 dk'sı + MÖ devletleri).
* `MOTOR_DEVAM=1`: koşu ölürse aynı girdi+kodla yeniden başlatılabilir; kodu/ortamı değiştirmek devam dizinini boşa çıkarır.

**Durum: KOŞU HAZIR** (taban = push sonrası `origin/main` ucu; hash raporda). Koşulları: §6 madde 1–6 koşu günü yeniden okunur (ağaç gerideyse güncelle); Emre'nin emri.

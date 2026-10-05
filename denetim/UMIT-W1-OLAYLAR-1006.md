# UMIT-W1-OLAYLAR-1006 — O7: iki parçalı `OLAYLAR_*` soneki

Görevi veren: UMIT İRTİBAT (dalga 2) · 5 Ekim 2026 · temel `origin/main` =
`fc3809758ae0b56e6b6ea19dd81cf98f5c71bbdf` · worktree `C:\atlas-w1` (detached; düzenleme
geri alındı, `git status` boş). Yama UYGULANMADI, commit YOK, tavan YAZILMADI.

## 0 · Öngörü — 21:10'da mühürlendi (ölçümden önce), ölçümle yan yana

| öngörü | ölçüm | |
|---|---|---|
| **SAYI** ekrana düşecek madde 112 · `olaylar.length` +112 | 1655 → **1767** (+112) · kayıp 0 | ✓ |
| **SAYI** mükerrer +3 (aralık 0..10) | denetle.py 112 → 112 · tarayıcı tam-eşit (t+b) 0 → 0 | ✗ (fazla) |
| **SAYI** denetle.py hiçbir sayı oynamaz | çıktı satır satır AYNI | ✓ |
| **SAYI** odak_olc: tarayıcı evrenini okuyorsa artar, okumuyorsa 0 | çıktı AYNI (0) | ✓ (ikinci dal) |
| **SAYI** cizilmiyor_mu: 7 değişken düşer | **14 satır** düştü: 151 → 137 | ✗ sayı · ✓ üyelik |
| **MEKANİZMA** Python kapıları dosyayı kendisi okur; desen yalnız tarayıcıyı belirler | doğrulandı (denetle.py `olaylar*.js` glob · odak_olc disk listesi) | ✓ |
| **MEKANİZMA** etkilenen kapı: denetle_yayin §40 (+ odak, eğer app.js evrenini kullanıyorsa) | yalnız §40 oynadı; odak disk evreni kullanıyor | ✓ |

14'ün açıklaması: yedi değişkenin her biri İKİ dosyada tanımlı (kendi `olaylar_*.js`'i +
`paket_04/12/25/26`) ve §40 dosya başına satır basar.

## 1 · Düzeltme — `OLAYLAR-SONEK-1006.diff` (3 hunk · CR 0)
1. `js/app.js:7035` süzgeç: `/^OLAYLAR(_[A-Za-z0-9]+)?$/` → `/^OLAYLAR(_[A-Za-z0-9_]+)?$/`
   (SEFERLER emsali, `seferKayitlariniTopla`).
2. `:7012-7014` yorumu kodla uyumlu: "OLAYLAR ile başlayan her global" → "çıplak `OLAYLAR`
   ve `OLAYLAR_<sonek>` (harf · rakam · altçizgi)"; cümlenin 16 Ağustos'tan beri yanlış
   olduğu ve O7 vakası yazıldı.
3. `:5192` SEFERLER karşılaştırma tablosu eski OLAYLAR desenini "✅" diye gösteriyordu —
   altına tek altçizgi kusuru notu düşüldü (tablodaki desen metni değiştirilmedi:
   `denetle_yayin` app.js'teki `/^…/` sabitlerini söküyor, yorumdakiler de dâhil — eski
   desen orada kalırsa zararsız, çünkü yeni desen onun üst kümesi).
Sıralama: yeni yedi anahtar `olaylarAnahtarSiraNo` = 999, aralarında ada göre — mevcut
davranış; yeni maddelerden **4'ü** eski bir maddeyle aynı `t`'yi paylaşıyor (aynı gün
sırası `gs`/dosya sırasıyla belirlenir; hepsi `-01-01` yıl tarihli).

## 2 · Kapı ölçümü — ÖNCE / SONRA (aynı ağaç, yalnız app.js farkı)

| kapı | önce | sonra |
|---|---|---|
| `denetle.py` | çıkış 2 (yalnız Değişmez 8 ÖLÇÜLEMEDİ: `devletler_harita.js` yok — taze ağaç) | **birebir aynı** |
| ↳ Değişmez 2 · 2s · 2i · 2t | 623/0 · 1720/187 açık (tavan 189) · 171/1 · 13 | aynı |
| ↳ mükerrer | 112 şüpheli çift (≤113) | 112 |
| `odak_olc.py` | ODAKSIZ 769 · BEYANLI→yabancı 653 · çıkış 0 | **birebir aynı** |
| ↳ yedi dosya | 112/112 **KONUMLU** (ODAKSIZ 0) | aynı |
| `denetle_yayin.py` | çıkış 1 · §40 ÇİZİLMİYOR **151** | çıkış 1 · §40 **137** |
| ↳ odak kapısı (yayın içi) | ODAKSIZ 438 (tavan 438) · yeni çözülmeyen 0 | aynı |
| ↳ yeni ✗ | — | "ÇALIŞMA AĞACI: js/app.js değişmiş, damga r11374" — commit edilmemiş ağacın yapaylığı; commit'te `surum_damgala.py` şart |
| tarayıcı `olaylar.length` (node, index.html'in 70 betiği + app.js'ten SÖKÜLEN desen) | 1655 (ham 1656; 7 değişken elenmiş) | **1767** (ham 1768; elenen 0) |
| tarayıcı mükerrer (t+b tam eşit · aynı nesne) | 0 · 0 | 0 · 0 |

§40'tan düşen 14 satır (üyelik): OLAYLAR_0073_IRAN_YANYA · _2S_0918 · _2S_0919 ·
_CUKUROVA_0907 · _ORTADOGU_0919 · _SENKRON_0930 · _SENUSI_0919 (kendi dosyaları) +
paket_04 (SENKRON) · paket_12 (2S_0918 · ORTADOGU · 2S_0919 · SENUSI) · paket_25 (CUKUROVA)
· paket_26 (IRAN_YANYA). Eklenen satır 0.
📌 `odak_olc` evreni 1768 = yeni tarayıcı hamı 1768 — §3c'deki 112'lik fark KAPANDI.

## 3 · Öngörülmeyen bulgu — "ekrana düşer" ≠ "görünür"
112'nin 94'ü `kapsam:"dis"` (2S dosyaları). Osmanlı listesinin dış önem süzgeci
(`DIS_ESIK_VARSAYILAN = "4"`, `SUZGEC.disOnemGizliMi`) bunları varsayılan ayarda gizler:

| eşik | gizli | görünür |
|---|---|---|
| 0 | 94 | 18 |
| 5 | 93 | 19 |
| **4 (varsayılan)** | **87** | **25** |
| hepsi | 0 | 112 |

İstisna (`DIS_ISTISNA_ACIK`) yalnız **Osmanlı** kırılmalarını (`donemler[].fi`) kurtarır —
bu ağaçta `donemler.js` yok, istisna sayısı **ölçülemedi**. 2s (yabancı) kırılmasını
destekleyen dış madde istisnadan YARARLANMAZ ⇒ varsayılan ekranda 2s kapısı ile ekran
yine ayrışır (bu yama o ayrışmayı 112'den ~87'ye indirir, sıfırlamaz).

## 4 · Sınav
| sınav | sonuç |
|---|---|
| OLAYLAR-SONEK tek: indeks fwd · rev / worktree fwd · rev | 0 · 1 / 0 · 1 |
| APP-VEFAT-ODAK · ARAYUZ-BANT-TAM-1006 · MOTOR-BANT-1005 bugünkü main'e (fc380975) tek | 0 · 0 · 0 |
| üç app.js diff'i, **6 sıranın 6'sında** ardışık `--check` | hepsi 0 |
| 6 sıranın son app.js'i | **tek** md5 (hepsi aynı) |
| OLAYLAR-SONEK sonra MOTOR-BANT | 0 |
| `node --check` (yamalı · üçü birlikte) | OK |
| tarayıcıda gözle | **yapılmadı** |

## 5 · Tavan önerisi (YAZILMADI)
- `ODAK-TAVAN.json`: değişiklik gerekmiyor (odak evreni disk; 112 madde zaten sayılıyor, hepsi KONUMLU).
- `BEKLENEN_MUKERRER = 113`: bu yama oynatmıyor (112 → 112). İndirme önerisi bu kalemin işi değil.
- `CIZILMEYEN_MUAF`: ekleme GEREKMİYOR; yedi değişken muafiyetle değil düzeltmeyle düştü.
- §40 ÇİZİLMİYOR sayısı tavan değil (⚠️ satırı): 151 → 137.

## 6 · Bulunamayan / ölçülemeyen
- Dış istisna sayısı (donemler.js yok) — ölçülemedi.
- Değişmez 8 — bu ağaçta ölçülemedi (önce/sonra aynı sebep; yamayla ilgisiz).

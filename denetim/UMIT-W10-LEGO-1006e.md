# UMIT-W10-LEGO-1006e — `kaynak_durum.py kapat --kod KOSU` → MOTOR ortam kapısı

Ağaç `C:\atlas-w10` = `origin/main` **7bb6b62c** + `denetim/MOTOR-ENV-KAPI-1006.diff` UYGULANMIŞ
(`git apply`, çalışma kopyası). Kilit: `arac/kaynak_durum.py`. Motor tuzu dosyalarına DOKUNULMADI.

## 1. Teslim — `C:\atlas-umit\denetim\KAYNAK-DURUM-ENV-KAPI-1006.diff`
| dosya | ne |
|---|---|
| `arac/kaynak_durum.py` (değişti) | `KAPI_KODLARI = {"KOSU"}` · `KAPI_BETIK` · `kosu_kapisi(kok)` · `kapat`ta kapı · `--kapi-kok` · `--kapi-atla "<gerekçe>"` · ilan kaydına `kapi` alanı · `durum` onu da basar |
| `denetim/ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py` (yeni) | iki yönlü sınav, 9 vaka + gerçek dosya bütünlüğü |
| `denetim/KAYNAK-DURUM-KAPI-CIKTI-1006.txt` (yeni) | sınav çıktısı (kanıt) |

Ölçüm: **CR 0** · 262 satır. Zincir (geçici indeks): `read-tree origin/main` → `apply --cached MOTOR-ENV-KAPI-1006.diff` (0)
→ bu diff **ileri ✓ (0) · -R ✗ (1)**.
🔴 **SIRA ŞART:** bu diff yalnız main'e de temiz uygulanıyor (dosya çakışması yok, ölçüldü: 0). Ama ENV-KAPI
diff'i inmeden inerse kapı betiği yok demektir: `kapat --kod KOSU` **çıkış 5 ile REDDEDİLİR** ve HAVVA'nın
bir sonraki koşu ilanı kilitlenir. ⇒ Önce MOTOR-ENV-KAPI-1006, sonra bu.

## 2. Davranış
- `kapat --kod KOSU`: kapı ayrı süreçte koşar (`sys.executable`, 300 sn tavan; ithal edilmez, arızası ilan
  aracını düşürmez).
  - kapı **0** (TEMİZ ya da KAPSAYICI) → ilan yazılır, `kapi: {durum: "GECTI", kok, ozet}`
  - kapı **1** (öttü) → **çıkış 4**, sebep + kapı çıktısı basılır, **KAYNAK-DURUM.json YAZILMAZ**.
    `--kapi-atla` burada İŞLEMEZ.
  - kapı **yok / zaman aşımı / başlatılamadı / 1 dışı çıkış (ör. 2 = ayrıştırma)** → **çıkış 5**, YAZILMAZ.
- Öteki kodlar (RAM-DARBOGAZI · ISLEMCI-DARBOGAZ · DISK-DARBOGAZ) kapıya BAKMAZ. Darboğaz ilanı acildir.
- `--kapi-kok <ağaç>`: koşu ayrı worktree'de koşar (§7). Kapı **koşunun ağacını** ölçmeli, `kaynak_durum.py`nin
  bulunduğu ağacı değil. Verilmezse `KOK`. ⚠️ HAVVA `C:\atlas`tan `kapat` derken koşu `C:\atlas-kosu`daysa
  `--kapi-kok C:\atlas-kosu` YAZILMALI, yoksa kapı başka bir `uret_petek.py`yi ölçer. Koşu şartnamesine/
  `KOSU-DEVIR-CEVRIMI.md`ye bu satır eklenmeli (benim dosyam değil).

## 3. Tartışma — kapı KOŞAMAZSA reddedilsin mi?
**Öneri ve uygulanan: RED (çıkış 5) + gerekçeli tek kaçış `--kapi-atla "<gerekçe>"`.**
- Niçin RED: "ölçülemedi" temiz sayılmaz (CLAUDE.md §11). Kapının koşamaması iki şeyi gizleyebilir: betik
  silinmiş/bozulmuş ya da motor ayrıştırılamıyor (S9: sözdizimi hatalı motor → kapı çıkış 2 → RED). İkincisi
  zaten koşuyu öldürecek bir kusur; ilanı durdurmak 40 dakikalık boş koşudan ucuzdur.
- Niçin kaçış var: kapının kendi arızası (ör. betik dosyası eksik) koşuyu SÜRESİZ kilitlememeli. Koşucunun
  önünde ya beklemek ya da `kaynak_durum.py`yi elle düzenlemek kalır; ikincisi denetimsiz kaçıştır.
  Gerekçeli bayrak hem kaçışı açar hem İZ bırakır: `kapi.durum = "ATLANDI"` + `atlama_gerekce` ilana yazılır,
  `durum` komutu basar.
- Sınır: kaçış yalnız **KOŞAMADI** için. **ÖTTÜ** (bilinen sınıfsız ad) atlanamaz (S2). Çare koşudan önce
  `_ONB_*` kümesine bir satır eklemektir. ⚠️ Bu motor tuzudur ⇒ tam inşa demektir. Koordinatör "öten kapıda
  da atlama olsun" derse tek satırlık değişiklik; ben önermiyorum: öten kapıyı atlamak, tam olarak kapının
  önlediği bayat önbellek koşusudur.
- Gerekçesiz `--kapi-atla` → çıkış 2 (S8).

## 4. İki yönlü sınav — 10/10 ✓ (`KAYNAK-DURUM-KAPI-CIKTI-1006.txt`)
```
RED    S1 yapay motor, sınıfsız MOTOR_YENI          → 4, yazılmadı (çıktıda MOTOR_YENI)
       S2 aynı + --kapi-atla "deneme"               → 4, yazılmadı (öten kapı atlanamaz)
       S6 kapı betiği yok                           → 5, yazılmadı
       S8 --kapi-atla gerekçesiz                    → 2, yazılmadı
       S9 motor sözdizimi hatalı (kapı çıkış 2)     → 5, yazılmadı
GEÇER  S3 yapay motor, her ad sınıflı               → 0, yazıldı, kapi=GECTI
       S4 GERÇEK motor (bugün KAPSAYICI)            → 0, yazıldı, kapi=GECTI
       S7 kapı yok + --kapi-atla "<gerekçe>"         → 0, yazıldı, kapi=ATLANDI + gerekçe
KAPSAM S5 RAM-DARBOGAZI, kapı yerine İZ bırakan sahte betik → 0, yazıldı, iz YOK, `kapi` alanı yok
✓ GERÇEK oturumlar\KAYNAK-DURUM.json DOKUNULMADI: önce d9a96bbf121c · sonra d9a96bbf121c
```
- Gerçek dosya koruması üç katlı: ① modül ayrı ad altında ithal edilir, `DOSYA` geçici yola çevrilir
  ② her vakadan önce `kd.DOSYA != gerçek yol` assert ③ sonda gerçek dosyanın sha256'sı öncesiyle karşılaştırılır.
  Yapay motorlar `tempfile`'da.
- Duman testi: `tahta_bekci.py`nin yolu (`import kaynak_durum` + `bekci_yasak_mi`) ve `durum` komutu
  değişiklikten sonra çalışıyor.
- Yolda yakalanan: `al()` son argümanda değer yoksa `IndexError` atıyor (`argv[index+1]`). `--kapi-atla` için
  korumalı okuma yazdım; `al()`nin kendisine dokunmadım (öteki bayraklarda da aynı düşüş var: `kapat --kod`
  son argüman olursa çöker; ayrı küçük kusur).

## 5. Bulunamadı / ölçülmedi / bilinmesi gereken
- Bugün kapı **KAPSAYICI** modda: `_ONB_SONUC` yok ⇒ her koşu ilanı geçer. Kapı ③3 (B kuyruğu) inince sertleşir.
  ⇒ Bu bağlama bugün bir şeyi DURDURMAZ, yalnız yeri hazırlar ve ilana `kapi` kaydını düşer.
- Sınavın "eski kod ötmez" yönü koşturulmadı: main'deki `kaynak_durum.py`de `KAPI_BETIK` yok, sınav
  AttributeError ile düşer. Eskiden kapı yoktu, yani bu zaten tanım gereği doğru.
- `KOSU-DEVIR-CEVRIMI.md:264-275`: `kaynak_durum.py kapat/ac` commit+push etmiyor ("makineler arası yalan").
  Bu iş o kalemi ÇÖZMEZ.

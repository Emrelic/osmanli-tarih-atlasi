# KUTU TUR 3 GÖREVİ (15 Ekim gece)

Ortak kurallar: önce `SCRATCH\cozum-gorevi.md`, sonra `SCRATCH\tur2-gorevi.md` (kaynak kuralı,
TUZ yasağı, commit biçimi, push kapısı, çatışma çözümü). Bu dosya farkları söyler.

## 🔴 MAKİNE KURALI (UMIT eczaneyle ortak)
- Dün paralel ağır ölçüm eczanenin bilgisayarını dondurdu. Şimdi eczane KAPALI ama:
- Ağır komuttan (`kodla.py coz-c`, `denetle.py`, `paketle.py`, `renk_olc.py`, `odak_olc.py`,
  `push_kapisi.py`) ÖNCE boş RAM'i ölç:
  `powershell -c "(Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory/1MB"` — **3 GB altıysa
  başlatma**, 5 dk bekleyip yeniden ölç.
- Aynı anda kendi tarafında EN FAZLA BİR ağır komut. Arka planda unutulmuş süreç bırakma.
- **08:00'de dur:** yeni ağır komut başlatma; elindekini commit'le, push sıradaysa bitir, değilse
  yerelde bırak ve raporla. Eczane sabah açılıyor.
- HAVVA'da KOŞU 25 sürüyor: `uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`'ye
  DOKUNMA (renk gereken kimliği `tuz_onerisi`ne yaz).

## Push
Kendin it: `py arac/push_kapisi.py --kim "KUTU-<AJAN>-1015"` (kapı sırayı kendisi tutar).
Küçük partiler. Commit başlığı `KUTU-<AJAN>-1015: ...`.

## Çıktı
`SCRATCH\tur3-<AJAN>.json` — tur2 biçimi (anahtar, hukum, not, commit, kaynak). Kutu anahtarı
olmayan iş (yan bulgu düzeltmesi) için anahtar `"YAN/<kısa ad>"` yaz.
Son mesaj: hüküm sayıları, push edilen commit'ler, kalan iş (sayıyla).

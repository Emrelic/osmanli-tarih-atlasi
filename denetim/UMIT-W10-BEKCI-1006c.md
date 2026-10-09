# UMIT-W10-BEKCI-1006c — D266 ikinci ve üçüncü vaka (msedge · remoting): eski damgada "sahip son nabızdan sonra başladı ⇒ BITMIS"

Ağaç `C:\atlas-w10d` = `origin/main 6d23f5ac` + `KIMLIK-BEKCI-1006` + `1006b`. Kilit: `arac/bekci_olc.py` + sınavı.

## 1. Önce ölçüm — mevcut kod GERÇEK fikstüre ne diyor (kural yazılmadan)
Fikstür: damga `{"pid":22632,"zaman":"2026-10-05 18:55:36","ara":60.0}`, `baslangic` yok. PID'in bugünkü sahibi
msedge, StartTime 23:55:33 (fark 17.997 sn).
| kod | hüküm |
|---|---|
| yamasız main (tasklist "var") | **ASILI** (koordinatörün gördüğü "ASILI 1") |
| KIMLIK-BEKCI-1006b | **OLCULEMEDI** (eski damga kolu) |
⇒ **Çelişki ölçüldü:** "yama inince BITMIS'e düşer" beklentisi 1006b'de TUTMUYORDU, yama OLCULEMEDI veriyordu.
Damga `--temizle` ile de silinemiyordu (sınav F6).

## 2. Kural — koordinatörün onayladığı üç kol
```
eski damga (baslangic yok), PID'in sahibi VAR:
  sahip başlangıcı > son nabız (+2 sn pay)  → BITMIS      (o süreç bu nabzı YAZAMAZDI — kesin)
  sahip başlangıcı ≤ son nabız              → OLCULEMEDI  (belirsiz kol korunur)
yeni damga (baslangic var):
  başlangıç UYUŞUYOR                        → ASILI       (gerçek alarm; uyuşan sahip nabızdan sonra başlamış olamaz)
  başlangıç uyuşmuyor                       → BITMIS      (1006)
```
- Son nabız = damganın `damga` alanı (epoch, UTC). Sahibin başlangıcı FILETIME → `_ft_epoch` ile aynı eksene
  çevrilir; saat dilimi ya da `zaman` dizgisi ayrıştırılmaz. `damga` yoksa kural uygulanmaz → OLCULEMEDI.
- **Pay 2 sn (`NABIZ_PAY_SN`):** `damga` alanı `int(time.time())`, yani saniyeye kesik. Bekçi ilk nabzını
  açıldığı saniyede yazarsa başlangıç damgadan <1 sn sonra görünür. Pay olmasa yeni açılmış gerçek bir
  bekçi BITMIS sayılırdı. F3 bunu sınar.
- `_surec_var(pid, baslangic, son_nabiz)`; `oku()` `d.get("damga")`yı geçirir. `--temizle` KODU değişmedi.
  BITMIS'e düşen damga artık silinebilir (F7), OLCULEMEDI kalan silinmez (F8, T1).

## 3. Sınav — 23/23 ✓ (`KIMLIK-BEKCI-CIKTI-1006.txt`)
```
GERÇEK kollar (yan yana):
✓ F1-msedge     pid 22632 · son nabız 18:55:36 · sahip msedge 23:55:33              → BITMIS (17.997 sn sonra)
✓ F1b-remoting  pid 20764 · son nabız 18:32:28 (HAZIR KITA 2909 1610, ilk D266 damgası) ·
                sahip remoting_native_messaging_host 2026-10-06 00:05:30          → BITMIS (19.982 sn sonra)
Ters / sınır:
✓ F2-ters  sahip 18:50:00 (nabızdan ÖNCE)                  → OLCULEMEDI
✓ F3-pay   sahip 18:55:37 (1 sn sonra, pay içinde)         → OLCULEMEDI
Çelişkinin ölçümü:
✓ F4-1006b  son nabız bakılmadan (1006b) msedge            → OLCULEMEDI
✓ F5-main   yamasız main, iki gerçek fikstür               → msedge ASILI · remoting ASILI
--temizle:
✓ F6  1006b davranışıyla: msedge + remoting damgaları YERİNDE (silinemiyordu)
✓ F7  1006c ile: ikisi de SİLİNDİ (BITMIS)
✓ F8  aynı turda ayrı PID'li ters kol (sahip nabızdan önce) YERİNDE
+ önceki 14 kontrol (K0 · A1 · A2 · A2b · A3 · A4 · A5 ×2 · A6 · E1 · T1-T3 · GERÇEK dizin) aynen geçti
```
**Üç kol × iki yön:** BITMIS F1/F1b ↔ F2/F3 · ASILI A1 ↔ A2 · OLCULEMEDI F2/A5c/T1 ↔ F1/F1b.
Fikstürlerde sahip sorgusu (`_surec_kimlik`) ölçülen başlangıcı döndürecek şekilde sabitlendi; o süreçler
bu makinede yok. Zamanlar yerel saatten epoch'a aynı yoldan çevrildi.

📌 **Sınavın kendi kusuru, kural yakaladı:** A5-canlı ve T1 eski damgayı "şimdi − 3600" ile yazıp yeni açılmış
bir alt süreci sahip gösteriyordu. Yeni kural onları doğru olarak BITMIS saydı ve iki vaka düştü (öngörülmüştü).
Gerçekçi kuruldular: damga sahibin başlangıcından SONRA yazılır (`ara=1`), eskiyene kadar 6 sn beklenir.
Ayrıca F8 ilk denemede düştü: ters kol msedge ile aynı PID'i taşıyordu ve o PID'in sahibi msedge'e sabitliydi.
Ayrı PID (22633) ile kuruldu.

## 4. Şartname cümlesi (koordinatör) — kodun yorumuna da yazıldı (`bekci_olc.py`, eski damga kolu)
> PID yeniden kullanımı koordinasyon trafiğiyle (Remote Control köprü süreçleri) ve bellek boşaltmayla
> (Edge kapat/aç) artar; bu kusur en yoğun gecede öter, yani alarm kanalı tam ihtiyaç duyulduğu anda en gürültülüdür.

## 5. Diff — `C:\atlas-umit\denetim\KIMLIK-BEKCI-1006c.diff`
CR 0 · 264 satır · zincir: `origin/main 4487df9a` → KIMLIK-BEKCI-1006 (0) → 1006b (0) → bu diff **ileri ✓ (0) · -R ✗ (1)**.
Dosyalar: `arac/bekci_olc.py` · `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py` · `denetim/KIMLIK-BEKCI-CIKTI-1006.txt`.

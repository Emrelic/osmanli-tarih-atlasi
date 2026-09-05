# HÜKÜM — `yer_yama_misir_himaye.js` ↔ `yer_yama_ok101.js` çakışması (M-2997)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

🔴 **HÜKÜM VERİLDİ, VERİ YAZILMADI** — uygulama merge'de koordinatörde (§7).

## ⓪ ARACIN KENDİ ÇIKTISI BU 5'İ GÖSTERMEDİ — ve sebebi ölçüldü

`_sahiplik_uygula.py` kuru koşusu bu 5 kaydı ÇAKIŞMA olarak **basmadı**
(yalnız 8 farklı kayıt gösterdi, bu 5'i içermiyor). Sebebi: aracın JS
girdi süzgeci yalnız `fs.readdirSync('data')` içindeki `yer_yama*.js`
dosyalarını okuyor — `denetim/yer_yama_misir_himaye.js` bu taramaya
**hiç girmiyor** (`YAMA-1923-DUZELTME-0905.json`nin yaşadığı "yanlış
katman" sorununun AYNISI, bu kez `.js` uzantılı ama yanlış KLASÖRDE).
⇒ Bu 5 çakışma `KURE GORUNUM`ün AYRI bir taramasıyla (denetim/+data/
birlikte) bulundu; `_sahiplik_uygula.py`nin bugünkü çıktısı bunları
GÖRMEZ, ARACIN kendisi de bu turda genişletilmedi (yalnız hüküm istendi).

## ① BEŞ KAYDIN TAM KARŞILAŞTIRMASI

| ad | alan | `ok101` (2026-09-02) | `misir_himaye` (2026-09-05) | durum |
|---|---|---|---|---|
| Süveyş | `d:` | `[{1517-02-15→1805-07-03}]` | (yok, dokunulmadı) | 🟢 TAMAMLAYICI |
| Süveyş | `s:` 1281-1517 | `memluk` | `memluk` (BİREBİR aynı gün) | 🟢 aynı |
| Süveyş | `s:` 1914+ | `ingiltere` (tek parça) | `misir-sultanligi`+`misir-kralligi` | 🔴 ESASA İLİŞKİN |
| Süveyş | `isg:` | (yok) | 3 dönem (fransa-cumhuriyet+ingiltere×2) | 🟢 TAMAMLAYICI |
| Tûr (Sînâ) | aynı desen | aynı | aynı | aynı 3 satır |
| Sina güneyi | aynı desen | aynı | aynı | aynı 3 satır |
| Kusayr | `s:` 1281-1517 | `memluk`, **t:1517-04-13** | `memluk`, **t:1517-04-13** | 🟢 BİREBİR aynı |
| Sefâce | `s:` 1281-1517 | `memluk`, **t:1517-04-13** | `memluk`, **t:1517-04-13** | 🟢 BİREBİR aynı |

🟢 **Önemli doğrulama:** Kusayr/Sefâce'nin memluk bitiş günü (1517-04-13,
Tomanbay'ın idamı — diğer üçünden FARKLI, onlar 1517-02-15) benim
dosyamda da BİREBİR doğru — kendi üretici betiğim (`ARAC-MISIR-HIMAYE-
URET-0905.py`) canlı veriyi `girdi.yukle()` ile okuyup HER noktanın
KENDİ memluk bitiş gününü koruduğu için (Çaçak tuzağı önlemi) bu ayrım
kazayla değil TASARIMLA korunmuş.

## ② ÜÇ KOVA

```
🟢 TAMAMLAYICI  d:  — yalnız ok101 dokunuyor, ben hiç dokunmadım
🟢 TAMAMLAYICI  isg: — yalnız ben dokunuyorum, ok101 hiç dokunmadı
🟢 AYNI         s: 1281-1517 (memluk) — beş kaydın beşinde de BİREBİR eşleşiyor
🔴 ESASA İLİŞKİN s: 1914-1923 (post-1914 kuyruk) — GERÇEK içerik farkı
```

## ③ ZAMAN ÖLÇÜLDÜ — VARSAYILMADI

```
git log --diff-filter=A -- data/yer_yama_ok101.js
  → 2026-09-02 00:35:32  (İşçi teslimleri, PAKET-0035)

git log --diff-filter=A -- denetim/yer_yama_misir_himaye.js
  → 2026-09-05 12:42:08  (M-2919, himaye kalıbı — Kuveyt/Katar/Bahreyn
    emsalinin M-2784'te onaylanmasından SONRA yazıldı)
```
**Benimki 3 gün daha yeni** ve AÇIKÇA bu geceki himaye-kalıbı kararından
(M-2784) SONRA, o kararı UYGULAMAK için yazıldı. `ok101` o karardan ÖNCE,
eski "doğrudan ingiltere" modeliyle yazılmış.

## ④ HÜKÜM

```
d:            ok101'İNKİ KORUNUR (ben hiç dokunmadım, çakışma yok)
s: 1281-1517  HERHANGİ BİRİ (birebir aynı) — mekanik
s: 1914-1923  BENİMKİ KAZANIR — TDV kaynaklı (18 Aralık 1914 · 15 Mart
              1922, GÜN hassasiyetinde, M-2937'de bağımsız doğrulandı),
              M-2784/M-2919/M-2930'ın onayladığı himaye kalıbını
              uyguluyor. ok101'in "ingiltere direkt" modeli bu kararın
              ÖNCESİNE ait, ARTIK GEÇERSİZ.
isg:          BENİMKİ KORUNUR (ok101 hiç dokunmadı, çakışma yok)
```

**PRATİK SONUÇ:** Bu 5 nokta için nihai kayıt = ok101'in `d:` alanı +
benim `s:`/`isg:` alanlarım — **iki dosyanın BİRLEŞİMİ**, biri ötekini
SİLMİYOR. `_sahiplik_uygula.py`nin field-bazlı uygulama mantığı
(`ALAN_RX` her alanı ayrı işler) bu birleşimi zaten DOĞRU yapar —
YETER Kİ ARAÇ HER İKİ DOSYAYI DA OKUSUN (bkz. ⓪'daki açık sorun).

## ⑤ AÇIK KALEM

Bu hüküm veriyi DEĞİŞTİRMEDİ. Uygulama için ÖN ŞART: `_sahiplik_uygula.py`
ya `denetim/*.js`yi de taramalı, ya da bu dosya merge öncesi `data/`ye
taşınmalı (M-2919/M-2930'da zaten "KÜNYE+RENK BEKLİYOR" damgasıyla
kuyrukta olduğu belirtilmişti — bu YENİ bir kısıt değil, var olanın bir
BOYUTU daha).

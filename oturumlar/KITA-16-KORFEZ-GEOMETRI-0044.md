# KITA 16 — KÖRFEZ + GÖRÜNTÜ BOZULMALARI · paket 0044

AD: KITA 16 · DİZİN: proje kökü · ClaudEmre: evet
**Önce oku:** `oturumlar/ORTAK-KOSU10-KURALLARI.md`

**Dosyaların:** `denetim/` (ölçüm + `YAMA-KITA16-*-0913.json`). Yerleşimler ve
`devletler.js` DONUK. `data/`ya yazma.
⚠️ Dünkü kartli/kaheti yaman bekliyor (devletler.js artık commit'li ama
DONUK) — yayından sonra inecek. Kaybolmadı.

## ① H-0013 · LAHSA VE KATİF'İN İLHAKI — KATAR VE BAHREYN
Emre: *"bu dönemde Doha/Katar ve Manama/Bahreyn ele geçirilmemiş mi? Katar
kime aitmiş?"* (görsel yok — maddeyi kronolojide bul, tarihini al)
- Lahsa/Katif ilhakı maddesinin günü (1550 mi, 1871 mi? — ölç, iki ilhak var)
- O gün Doha · Manama · Katif · Lahsa · (Kuveyt · Uceyr) atlasta kimin?
- TDV `lahsa` · `katar` · `bahreyn` · `katif` — gövdeleri oku
**Çıktı:** tablo — `ad · atlas sahibi · TDV ne diyor (alıntı+slug) · hüküm ·
YAMA satırı`. ⚠️ Körfez şeyhlikleri bu belgede KASTEN sahipsiz dolgu olabilir
(§3 Değişmez 1: "körfez şeyhlikleri") — "sahipsiz" görmek kusur demek değil;
`bos:`/`neden:` alanını oku.

## ② H-0011 · "BU GÖRÜNTÜ BOZULMALARININ SEBEBİ NE, NASIL ENGELLERİZ"
Görseller `H-0011-1.png` · `H-0011-2.png` — METİN YETMİYOR, aç.
Dünkü paketin H-0017'si aynı cinstendi ve kök sebep İKİ AYRI şey çıktı:
```
Libya iç bandı  kutuda 0 nokta · en yakın 169 km · TDV ad vermiyor
                -> boşluk DOĞRU, ışınsal çıkıntı YARIÇAP TAVANI kırpması
Mısır B. Çölü   6 nokta VAR -> noktasızlık DEĞİL, geometri artefaktı
```
Yöntem: görselden kutu ve tarihi çıkar → `girdi.yukle()` ile o kutudaki
noktaları **`lat`/`lon`** alanlarıyla say (🔴 `y`/`x` DEĞİL — koordinatör dün
tam bu hatayla her kutuyu boş ölçtü) → kutu MERKEZİNE en yakın nokta mesafesi
→ sınıfla: **noktasızlık / geometri artefaktı / renk / başka**.
Çare önerisi yaz; nokta yazma (donuk + kaynak ister). Kök sebep motor
koşusu gerektiriyorsa `ölçülemedi` de, KORELASYONU ölç.

## ③ (vakit kalırsa) CİZRE/BOHTAN KÜNYE TASLAĞI
0043 H-0015: Cizre'nin 1508-1515 boşluğu beyanlı (`bos:"veri-yok"`); TDV
`cizre` Emîr II. Şeref'in mahallî yönetimini anlatıyor, künye YOK. Kartli/
kaheti yamanla aynı üslupta taslak: `denetim/YAMA-CIZRE-BOHTAN-0913.json`.
Pencere sınavı şart.

TESLİM TAHTAYA: ① ve ② ayrı.

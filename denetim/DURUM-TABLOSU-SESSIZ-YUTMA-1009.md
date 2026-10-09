# DURUM-TABLOSU-SESSIZ-YUTMA-1009 — `durum_tablosu.olc()` hatayı sessizce yutuyor

Bulan: BOYA-BORC-1009 alt ajanı (UMIT), 9 Ekim 2026. Koordinatör kaydı istedi.
Durum: AÇIK KALEM. Düzeltme yazılmadı, yalnız ölçüm kaydı.

## Ölçüm
- `arac/durum_tablosu.py`'nin `olc()` işlevi Python içinden `contextlib.redirect_stdout` altında
  çağrılınca, `paketle.kaynaklar()` içinde oluşan hata **sessizce yutuluyor**.
- Sonuç olarak katman evreni yanlış sayılıyor:
  - doğrusu (komut satırı): `index.html`in yüklediği 13 sınır · 184 kronoloji/olay · 2 savaş · 1 kişi dosyası
  - yönlendirilmiş stdout altında: 0 · 22 · 0 · 0
- Bunun sonucu "Renksiz künye — 🟡 hiçbir yerde" (sessiz borç) **11 yerine 51** görünüyor (4,6 kat).
- Komut satırından (`py arac/durum_tablosu.py`) koşunca sayı DOĞRU. Koordinatörün 9 Ekim §1.5
  tazelemesi (809a8975) komut satırından üretildi; 11 yazıyor, tutarlı.

## Neden tehlikeli
Sayıyı şişiriyor ve hiçbir uyarı basmıyor. `CLAUDE.md §3`ün "ölçülemeyen soru temiz değildir"
ilkesinin tersi: burada ölçülemeyen soru **yanlış bir sayı** olarak dönüyor. `olc()`yi içe
aktarıp çağıran her betik (denetim sınavları, alt ajan ölçümleri) bu tuzağa düşer. Bir ajan bu
gece bir kez düştü.

## Ölçülmeyen
- Yutulan hatanın tam türü ve neden yalnız `redirect_stdout` altında oluştuğu ölçülmedi.
  Muhtemel aday: `paketle.kaynaklar()` stdout'a ya da `sys.stdout.encoding`e dayanıyor.
  Bu bir hipotez, doğrulanmadı.

## Önerilen çare (yazılmadı)
1. `paketle.kaynaklar()` çağrısını saran `try/except` hatayı yutmasın. Katman evreni ölçülemezse
   `olc()` bunu `OLCULEMEDI` olarak döndürsün ya da hata fırlatsın, 0 saymasın.
2. Sınav iki yönde olsun: komut satırı ve `redirect_stdout` altında aynı sayılar çıkmalı. Kusurlu
   kolda fark görünmeli.

YENİ DOSYALAR: denetim/DURUM-TABLOSU-SESSIZ-YUTMA-1009.md

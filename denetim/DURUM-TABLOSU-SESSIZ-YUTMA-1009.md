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

## § çare (DURUM-TABLOSU-YUTMA-1009, 9 Ekim 2026)

### Teşhis — ölçüldü
- Yutulan hata: **`AttributeError: '_io.StringIO' object has no attribute 'reconfigure'`**.
  Kaynağı `arac/paketle.py:57`: modül düzeyinde koşulsuz `sys.stdout.reconfigure(...)`.
  Hipotez (stdout'a dayanma) DOĞRU çıktı. Encoding'le ilgisi yok.
- Yutan yer `durum_tablosu.py` değil, **`arac/_bagli_mi.py` `index_dosyalari()`**:
  `except Exception: pass` ⇒ paketler açılmıyor, `index.html`deki çıplak
  `<script src="data/...">` etiketleri kalıyor ⇒ `katman_evreni()` 0/22/0/0.
- **Neden yalnız redirect altında:** hata `paketle` İLK KEZ içe aktarılırken doğuyor.
  Komut satırında stdout gerçek akış (`reconfigure` var); `durum_tablosu` kendi
  `renkler` yönlendirmesini katman ölçümünden ayrı yaptığı için orada da doğmuyor.
  Dışarıdan `redirect_stdout(StringIO)` altında `olc()` çağrılınca doğuyor.
  ⚠️ Aynı süreçte `paketle` önceden düz içe aktarıldıysa modül önbellekte olduğu için
  kusur GİZLENİR — sınav bu yüzden her soruyu taze alt süreçte koşar.
- Yeniden üretim (yamasız ağaç): düz `{sinir 13, kronoloji 184, savas 2, kisi 1}` ·
  redirect `{0, 22, 0, 0}` — rapordaki sayının birebiri.

### Çare — iki dosya, 23+/11−
1. **Yutma kaldırıldı** (`_bagli_mi.index_dosyalari`): `try/except: pass` yok; `paketle`
   içe aktarımı ya da `kaynaklar()` düşerse hata yukarı çıkar ⇒ `olc()` 0 SAYMAZ, hata verir.
   Ek olarak ikinci sessiz yol kapatıldı: `index.html` `paket_*.js` yüklüyorken
   `kaynaklar()` BOŞ dönerse (künye yok/bozuk) `RuntimeError(... ÖLÇÜLEMEDİ)`.
   Paketsiz eski düzen (index'te `paket_` yok + liste boş) meşru kalır.
2. **Kök** (`paketle.py`): `reconfigure` yalnız `hasattr(sys.stdout, "reconfigure")` ise.
   ⇒ `paketle.py` DEĞİŞTİ (görev "söyle" diyordu — söylüyorum). Motor tuzunda DEĞİL
   (tuz: `uret_petek`·`renkler`·`girdi`·`motor_onbellek`).

### Sınav — `denetim/ARAC-DURUM-TABLOSU-YUTMA-SINAV-1009.py` (8 soru, iki yön)
- Yamalı ağaç: **8/8** · yamasız ağaç: **4/8** (S2·S5·S7·S8 kalır — sınav ısırıyor).
- S4 kusurun kanıtı (yamasız redirect 0/22/0/0) · S5/S8 enjekte hata yukarı çıkar ·
  S6 yamasız kolda aynı enjeksiyon YUTULUYOR · S7 boş kaynak = ÖLÇÜLEMEDİ.

### Görülen ama dokunulmayan
- `durum_tablosu.py:20` modül düzeyinde koşulsuz `sys.stdout = TextIOWrapper(sys.stdout.buffer…)`:
  `durum_tablosu`yu redirect ALTINDA içe aktarmak `AttributeError: buffer` ile düşer.
  Bu YÜKSEK SESLİ bir hata (yutulmuyor), kapsam dışı bırakıldı.
- `denetle_yayin.py:1041` ve `:1859` de `paketle`yi içe aktarıyor; kök çare onları da korur,
  kendi `except`lerine bakılmadı.

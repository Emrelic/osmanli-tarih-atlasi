# UMIT-W53-1DUNYA-A-MUKERRER-1006 — 1DUNYA-A mükerrer maddeleri

Taban: `origin/makine/umit` = `b0829580` (worktree `C:\atlas-w53`). Diff:
`denetim/UMIT-W53-1DUNYA-A-MUKERRER-1006.diff` — **UYGULANMADI**. `git apply --check`
hem `b0829580`e hem `C:\atlas-umit` HEAD `cac68699`a temiz.

## ① Ölçtüm

**"4 mükerrer" nereden geliyor:** `node denetim/ARAC-1DUNYA-A-SINA-0917.js` 4 tane
`MÜKERRER ŞÜPHESİ` basıyor. Bunlar 2 ayrı olaydır, çünkü sınav her taraf için ayrı satır basıyor.
Görevde adı geçen Polonya 1918-11-11 çifti ise sınavın dışında kalıyor: iki kopya da
1DUNYA-A'da değil. Toplam **3 olay** var:

| # | Olay | Kopyalar | Hangi panelde görünüyor |
|---|---|---|---|
| A | 1915-08-05 Alman ordusu Varşova'ya girdi | `cok_1dunya_A` (1914-1918-online «Poland» + TDV) · `sinir_polonya_1915` (Jarosławski 2022 + IPN, `sinif:"D"`, **Değişmez 2 evreni**) | almanya · rusya · kongre-polonyasi (3 tarafta da ikisi birden) |
| B | 1918-02-09 Ekmek Barışı (Brest-Litovsk/Ukrayna) | `cok_1dunya_A` (1914-1918-online TL+AHO) · `cok_ukrayna` (Encyclopedia of Ukraine + TDV) | yalnız ukrayna-halk-cumhuriyeti |
| C | 1918-11-11 Polonya bağımsızlığı | `cok_lehistan` (`kaynak:"el-kitabi"`) · `cok_senkron_0930` (Davies, *God's Playground* II — "sayfa açılmadı") | polonya |

Bunun mükerrer olduğu `app.js:14401` `cokTarafliKronolojiEkle`de görülüyor. Bu işlev bütün
`KRONOLOJI_(SINIR|COK)_*` maddelerini taraf künyelerine ekliyor. Aynı maddeyi yalnız `t`+`b`
**birebir** aynıysa eliyor. Burada başlıklar farklı olduğu için iki kopya da ekranda görünüyor.

**1918-11-11 ±3 gün taraması** (bütün `olaylar*.js` + `kronoloji*.js`): Polonya olayı yalnız
C'deki iki kopyada var. Çekirdekte (`olaylar*`) yok. Bu W33'ün ölçümüyle aynı. Pencerede
başka olaylar da var ama hepsi farklı: Compiègne (fransa/ingiltere/1dunya_A), II. Wilhelm
(11-09), I. Karl (habsburg), Avusturya Cumhuriyeti (11-12), Belgrad/İstanbul (11-13). Hiçbiri
Polonya maddesi değil.

**`hat:` taraması:** `app.js` 8342-8525 ve `antlasma_harita.js:75` `hat`ı yalnız SINIR
KAYDI nesnesinde (`kayit.hat`) okuyor. Kronoloji maddesinde okuyan yok. Altı kopyanın
hiçbirinde `hat:` / `sinir_id` alanı yok. Bağlı alan yalnız `yer_id` (hepsinde Varşova veya
Brest-Litovsk) ve A'daki sınır kopyasında `sinif:"D"`.

## Karar (diff'te)
- **A — 1dunya_A kopyası silindi.** Üç tarafın üçünde de sınır kopyası duruyor. Sınır
  kopyası Değişmez 2 evreninde (`sinif D`), silinmesi kırılmayı açar. Üretici kuralı da bunu
  söylüyor ("o künyenin etkin kronolojisinde varsa taraftan çıkar"). Üç taraf da çıkınca
  maddeden geriye bir şey kalmıyor. Sınır kopyasının `ic_not_gun`u ("koordinatör birini
  seçer") güncellendi.
- **B — yalnız `ukrayna-halk-cumhuriyeti` tarafı çıkarıldı.** `taraflar`, `devletler` ve
  `etiket` alanlarından çıktı. Almanya, habsburg ve bulgaristan tarafları kaldı, çünkü
  onların panelinde bu olay başka bir kopyada yok. `d`'deki parantez notu da düzeltildi: not
  "künyesi YOK" diyordu, oysa künye artık var (`devletler.js:8315`). Yeni not öteki
  maddelerin kalıbında yazıldı.
- **C — `cok_lehistan` kopyası silindi, `cok_senkron_0930` kaldı.** Lehistan kopyasının
  kaynağı `el-kitabi`: bu bir atıf değil, §4'e göre adı olmayan kaynak sayılır. Senkron
  kopyası en azından eser adını veriyor ve içeriği (Naiplik Konseyi, Piłsudski) W33'ün müze
  kaynağıyla örtüşüyor.
- **Üretici (`denetim/ARAC-1DUNYA-A-URET-0917.py`) aynı kararla güncellendi.** Böylece
  yeniden üretimde A geri gelmez, B'nin tarafı geri eklenmez.

## ③ Denetle — önce ve sonra
```
çıkış 2 → 2 (taban: D8 ÖLÇÜLEMEDİ, devletler_harita.js yok — beklenen)
Değişmez 2   623 kırılma, 0 açık                  = aynı
Değişmez 2s  1720 · 187 AÇIK (tavan 189) · 792 · 165   = aynı
Değişmez 2sk 3236 = 1571 + 1665 (tavan 1665)      = aynı
Değişmez 2i  171, 1 açık (tavan 1)                = aynı
Değişmez 2t  13 (tavan 13)                        = aynı
```
Çıktının **tamamı** da aynı. Tek fark bir eşitlikteki sıralama takası (`katalan 1 dönem`
satırı bir satır kaydı); bu bir değer farkı değil.
1DUNYA-A sınavı: **mükerrer şüphesi 4 → 0** · madde 97 → 96 · taraf bağı 224 → 220 · hata 0.
`KRONOLOJI_COK_LEHISTAN` 65 → 64 madde.

## W33-1006c ile ilişki — çelişmiyor, ama bir not bayatlıyor
W33 aynı olayın **çekirdek** karşılığını öneriyor (`olaylar_ok109.js`, Piłsudski Müzesi).
Benim silmem ondan bağımsız. Çekirdek madde Osmanlı kronolojisinde (`kapsam:"dis"`) duruyor;
KUYRUK'taki C kopyası ise polonya künyesinin panelinde. İkisi aynı panelde birleşmiyor.
⚠️ **Ama** W33'ün `ic_not_d`'si "KARDEŞLERİ VAR, ikisi de KUYRUK'ta" diyor ve iki dosyayı da
adıyla sayıyor. Bu diff uygulanırsa `cok_lehistan` kardeşi ortadan kalkar ve not bayatlar.
**Çare (W33 diff'ine, uygulama sırasında):** `data/kronoloji_cok_lehistan.js 1918-11-11 …
(kaynak: el-kitabi) · ` kesimi düşürülür, "ikisi de" → "kardeşi". Bu W33'ün dosyası olduğu
için ben yazmadım.

## ② Bulamadım / dokunmadım
- **Üretici zaten bayattı (benden önce):** `ARAC-1DUNYA-A-URET-0917.py` yeniden koşulunca
  **25 maddede** fark çıkıyor. Sebebi şu: `kayit()` her maddeye `yer_id:""` yazıyor; veri
  dosyasındaki `yer_id`ler ise sonradan ODAK-KAPAT (`575be146`) ile elle girilmiş. ⇒ Üretici
  bugün koşturulursa 25 odak SİLİNİR. Bu yüzden veri dosyasını üretici ile değil, doğrudan
  düzelttim. Üreticiye yalnız aynı silme ve taraf kararı yazıldı. Yer_id'leri üreticiye
  taşımak ayrı bir iş.
- **Paket:** `index.html` bu dosyaları `data/paket_09.js` (1dunya_A) ve `data/paket_30.js`
  (lehistan) üzerinden yüklüyor. Diff paketlere dokunmuyor, çünkü paketler üretilmiş dosya:
  birleştirilmez, yeniden üretilir. ⇒ **Uygulamadan sonra `py arac/paketle.py yenile` ŞART**,
  yoksa site eski maddeleri göstermeye devam eder. Not: taban `paketle.py sina` zaten
  **çıkış 1 BAYAT** (`makine/umit`te 9 paket). Yani bu ihtiyaç bu diff'ten bağımsız olarak var.
- `denetim/KUNYE-KRONO-KAYNAK-1006.tsv` maddeleri **sıra numarasıyla** anıyor
  (`1DUNYA_A 27`, `LEHISTAN 51`). Silmeden sonra bu numaralar kayıyor. Dosya bir ölçüm
  fotoğrafı, düzeltmedim. Onu okuyan araç varsa yeniden ölçmesi gerekir.
- Görevde "4 madde" deniyordu. 4 sayısı sınavın satır sayısı (2 olay × taraf). Görevdeki
  Polonya çifti sınavın dışında. Üçünü de kapsadım.

## İstiyorum
1. Diff'in uygulanması, ardından `py arac/paketle.py yenile`.
2. W33-1006c `ic_not_d`'sindeki lehistan kardeşi kesiminin uygulama sırasında düşürülmesi.
3. (Ayrı iş) 1DUNYA-A üreticisine `yer_id`lerin taşınması. Aksi hâlde bir sonraki üretim
   25 odağı siler.

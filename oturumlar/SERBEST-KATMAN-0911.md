# SERBEST KATMAN — "serbest" topraklar haritada hiç çizilmiyor

```
AD      SERBEST KATMAN
MODEL   Sonnet
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SENİN DOSYAN   js/app.js  (+ gerekirse css/style.css)
🔒 KOŞU 9 CANLI — `data/*.js` ve `arac/*.py` DONUK, İKİSİNE DE YAZMA.
   `js/` ve `css/` SERBEST, senin işin orada.
   ⚠️ Makine meşgul (motor 1 çekirdek yiyor). Ağır bir şey koşturma;
   tarayıcı önizlemesi TEK sekme, fazlası değil.
```

## ① İŞ

`TESPIH.md` madde 6: `serbest-hale` ve `serbest-cekirdek` katmanları
**veride VAR** (`61f6f60` ile düzeltildi, katman 39) ama **haritada hiç
çizilmiyor** — MapLibre ifade hatası, konsolda **4 hata** basıyor.

Yani veri doğru, künye doğru, renk doğru; **çizim katmanı kırık.**

## ② KABUL ÖLÇÜTÜ — nesnel, tartışmasız

```
① tarayıcı konsolunda MapLibre hatası:      4  →  0
② `serbest-hale` ve `serbest-cekirdek` katmanları HARİTADA GÖRÜNÜYOR
③ EKRAN GÖRÜNTÜSÜ ile kanıtla — sayı "çizildi" demez, GÖZ der
④ ÖTEKİ 37 katman BOZULMADI — önce/sonra ekran görüntüsü aynı bölge
```

🔴 ④ atlanamaz: bir ifade hatasını düzeltirken komşu katmanı bozmak bu
projede yaşandı. **İki yönde de bak** (`D010`).

## ③ NASIL

1. Önizlemeyi aç, konsolu oku, **4 hatanın tam metnini** kaydet.
2. `js/app.js` içinde `serbest-hale` / `serbest-cekirdek` katman
   tanımlarını bul. Hata büyük ihtimalle bir `[' case', ...]` /
   `['match', ...]` ifadesinin tip uyumsuzluğu.
3. Düzelt, yeniden yükle, konsolu tekrar oku.
4. Ekran görüntüsü al (serbest toprak görünen bir tarih seç — hangi
   tarihte görünür olduğunu `data/`yi OKUYARAK bul, YAZMA).

## ④ NE YAPMA
```
🔴 `data/*.js` ve `arac/*.py`ye DOKUNMA — koşuyu öldürür/çıktıyı bayatlatır
🔴 Katman ekleme, renk değiştirme, tasarım "iyileştirme" YAPMA. Bu bir
   ONARIM işi; kapsamı 4 konsol hatası ve 2 katman.
🔴 `surum_damgala.py` KOŞTURMA — yayın koşu bitince, zincirden.
```

## ⑤ TESLİM
Tahtaya: `py arac/tahta.py yaz --kim "SERBEST KATMAN" --kime "1.MURAT"`
— dört kabul ölçütünün dördüne ayrı cevap, SAYIYLA. Hatanın **kök
sebebini** bir cümleyle yaz; "düzelttim" yetmez, "şu ifade şu tipi
bekliyordu" gerekir.
Commit: `git add -- js/app.js` + `git commit -F <dosya> -- js/app.js`,
sonra `git show --name-only` ile doğrula. DİZİN PATHSPEC'İ YASAK.

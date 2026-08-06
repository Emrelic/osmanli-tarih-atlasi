# RENK 2 — üç kimlik, ve arkasında 12 nokta bekliyor

> Açılış brifingi · 6 Ağustos 2026 · **model: Opus**
> ⚠️ `claudemre-basla` ÇALIŞTIRMA — o yalnız koordinatör oturumunda çalışır.

## AÇILIŞ — sırayla
```
1. bu dosyayı oku
2. CLAUDE.md §7 (dosya sahipliği) · §8 (veri biçimleri)
3. arac/renkler.py dosya başındaki DSATUR ve ΔE notları
4. arac/renk_olc.py ve arac/renk_cikti.py — mevcut iki nöbetçi
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

```
üç kimlik RENKSİZ ve arkalarında BAĞLANMAMIŞ dosyalar duruyor:
   sibir-hanligi   →  data/yerlesimler_ek10.js   4 nokta
   estonya         →  data/yerlesimler_ek11.js   4 nokta
   izlanda         →  data/yerlesimler_ek12.js   4 nokta
```
Üç dosya da `arac/girdi.py`de **bağlı değil** ve `denetle_yayin.py`de
**geçici muafiyetle** duruyor (`BEKLEYEN` sözlüğü). Muafiyetin gerekçesi
tek kelime: **renk yok.**

⇒ Sen üç rengi yazdığın gün dosyalar bağlanır, 12 nokta haritaya girer ve
üç muafiyet satırı **silinir**. Atlasın bugünkü tek darboğazı bu.

📌 Ve PETEK/NOKTA ödünç renk **vermedi**, gerekçesi ölçülmüş:
> *estonya'yı 1923'e kadar Rus boyamak, harita 1919'da Letonya ve
> Finlandiya'yı bağımsız gösterirken aradaki Estonya'yı Rus gösterirdi.*
> **Ödüncün ölçüsü SÜRE değil, komşusuyla çelişip çelişmediğidir.**

## ② İŞİN — sırayla

**1. Üç rengi yaz** (`arac/renkler.py` → `BOYALAR`)
```
sibir-hanligi   Sibir Hanlığı · 1468-1598 · Altın Orda ardılı
                ⚠️ `altinorda`ya ödünç VERİLMEDİ: bedeli 168 yıl
estonya         1918-02-24 → 1923-10-29 · komşuları letonya · finlandiya
izlanda         1918-12-01 → · pencerede 4 yıl 11 ay
                atlas 1918 devletlerini tutarlı modelliyor (polonya ·
                cekoslovakya · yugoslavya · finlandiya · letonya · litvanya
                hepsi BOYALAR'da) — izlanda bu desendeki tek boşluk
```
⚠️ Renk seçerken **iki eşik**: altlıktan (`#e8dfc8`) ΔE ≥ 15, **aynı anda
sahnede olan** komşulardan ΔE ≥ 12. `estonya` için kritik komşular
`letonya` · `litvanya` · `finlandiya` · `rusya`.

**2. Kendi ölçünü koştur** — `py arac/renk_olc.py` ve `py arac/renk_cikti.py`
Görünmez renk 0 · çakışma 0 · aynı-hex 0 olmalı.

**3. Bana haber ver.** Bağlamayı ben yapacağım (girdi.py + index.html +
denetle_yayin muafiyetlerinin silinmesi — üçü de benim dosyam).

## ③ YAZMA YETKİSİ
```
🟢 SENİN      arac/renkler.py
              oturumlar/RENK-2-ILERLEME.md
🔴 DEĞİL      arac/girdi.py · arac/uret_petek.py · arac/denetle_yayin.py
              data/ altındaki hiçbir şey · index.html · js/app.js
```
⚠️ **`arac/renkler.py` üretim koşusunda PARMAK İZLİDİR.** Yazmadan önce
koşu var mı diye BAK (`ls -la kosu*.log`, çalışan `py` süreci var mı).
Koşu sürerken yazarsan koşu ölür — 3 Ağustos'ta tam bu yüzden 67 dakika
gitti (`YASALAR M7`).

## ④ SENİ BAĞLAYAN YASALAR
```
M1   model seçimi hata maliyetine göre — sen Opus'sun çünkü renk çakışması
     yayına girerse geri alma maliyeti bulma maliyetinin katbekat üstünde
M7   koşu sürerken arac/ işi YOK · arac/'ye yazan koşu durumunu ÖLÇER
B10  devraldığın hiçbir rakamı doğrulamadan aktarma
CLAUDE.md §3.5   yeni bir devlet kimliği yazarken ÖMRÜNÜ kontrol et
                 (data/devletler.js `f`/`t` aralığı)
```

## ⑤ HABERLEŞME
```
· üç rengin üçünü birden bekleme — biri bitince haber ver
· commit YALNIZ kendi oturumlar/RENK-2-ILERLEME.md dosyan, pathspec'li:
      git commit -F - -- oturumlar/RENK-2-ILERLEME.md
  arac/renkler.py'yi BEN commit'lerim
· bulamadığını `bulunamadı` diye yaz — negatif sonuç da sonuçtur
```

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
BOYALAR'da 233 → 236 kimlik
renk_olc.py       görünmez 0 · çakışma 0 · aynı-hex 0
renk_cikti.py     çıktı ekseninde de temiz
```
Bunları görünce "bitti" de. Öncesinde deme.


---

# 🔴 DÜZELTME — 6 Ağustos, brifing yazıldıktan SONRA ölçüldü

Yukarıda *"üç rengi yaz"* diyordum. **Ölçüm iki şeyi düzeltti:**

```
kimlik                    KÜNYE   RENK    veride pencere
estonya                   VAR     YOK     4     🟢 SEN YAZABİLİRSİN
sibir-hanligi             🔴YOK   YOK     4     ⚠️ ÖNCE KÜNYE LAZIM
izlanda                   🔴YOK   YOK     2     ⚠️ ÖNCE KÜNYE LAZIM
```

⚠️ **`sibir-hanligi` ve `izlanda`nın `data/devletler.js`te künyesi YOK.**
Künyesiz bir kimliğe renk yazmak yarım iştir: harita boyar ama dizin
penceresinde karşılığı olmaz, `denetle_yayin` *"dizinsiz harita kimliği"*
der. Ve `devletler.js` **senin dosyan değil** (`§7`).

⇒ **Sıran değişti:**
```
1. estonya rengini YAZ  — künyesi hazır, hemen yapılabilir
2. sibir-hanligi + izlanda için rengi HAZIRLA ama yazma;
   bana künye ihtiyacını bildir, VERİ DEVLET'e açtırayım
```
📌 Rengi hazırla derken: ΔE ölçümünü yap, adayı seç, gerekçesini yaz.
Künye gelince yazmak bir dakikalık iş olsun.

## Ve VERİ KİMLİK 3'ün sana bıraktığı liste BAYAT — ölçtüm
Tahtada *"estonya + kalmuk + don-kazak + astarhan + irlanda-serbest-devlet
beşi de renksiz"* yazıyor. Bugünkü ölçüm:
```
don-kazak                 renk VAR (#4ac4aa)      ← liste yanılıyor
kalmuk                    künye YOK · veride 0 pencere   ← acil değil
astarhan                  künye VAR · veride 0 pencere   ← acil değil
irlanda-serbest-devlet    künye VAR · veride 0 pencere   ← acil değil
```
⇒ **Veride 0 pencere = haritada hiç boyanmıyor.** Renksiz olmaları bugün
kimseyi engellemiyor; `estonya`nınki engelliyor çünkü 4 nokta bekliyor.
⚠️ Devraldığın hiçbir listeyi doğrulamadan kullanma (`YASALAR B10`) —
ben de bu brifingi doğrulamadan yazmıştım, düzeltiyorum.

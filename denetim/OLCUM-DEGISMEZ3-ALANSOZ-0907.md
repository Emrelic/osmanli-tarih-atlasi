# `savaslar.js` ALAN SÖZLEŞMESİ — ve ÖLÇÜT NİHAYET İKİ KATMANDA SINANDI
`DEGISMEZ3-0907`

## 🟢 BAŞLIK: ÖLÇÜT `SEFERLER`E ÖZGÜ DEĞİLMİŞ — 4/4 KANITLI
```
SEFERLER  `[f, t]`      aralığı → 18/18 kapandı (16'sı ad eşleşmeli)
SAVASLAR  `[t, bitis]`  aralığı →  4/4 KANITLI kapandı
   Rodos kuşatması   66 gün → "Rodos kuşatmasının başarısızlığı"  [rodos]
   Hotin kuşatması   37 gün → "Hotin Seferi ve Hotin Antlaşması"  [hotin]
   Bağdat kuşatması  39 gün → "Bağdat'ın geri fethi"              [bagdat]
   Çanakkale zaferi  37 gün → "Çanakkale zaferi ve Bozcaada…"     [canakk, zaferi]
```
⇒ Koordinatörün şartı (*"bir çapa ancak çapalamadığı bir yerde
sınanabilir"*) **KARŞILANDI.**

---

## 🔴 İKİ KENDİ-DÜZELTMEM — ikisi de bu turda
### ① *"`SAVASLAR`da aralık YOK, ölçüt SINANAMAZ"* → **YANLIŞ**
Aralık **var**, adı `bitis`. Ben `savas_basi` ve `f` aradım; `SAVASLAR`
kendi adını kullanıyor.
```
8 açığın `bitis` taşıyanı : 4  → 4/4 KANITLI kapandı
taşımayanı                : 4  → MAZUR (Sırpsındığı · Cecora ·
                                  II. Viyana · Şahkulu)
```
### ② *"`sure` sayısal ⇒ türetme mümkün"* → **YANLIŞ**
`js/app.js:2345`:
```js
if (o.sure === undefined) o.sure = sonrakiOlayaKadar(o.gi);
```
`sure` bir **GÖRÜNÜRLÜK SÜRESİ** — olayın haritada kaç gün kalacağı.
Zaman aralığı **değil**. Rodos: `t`→`bitis` = 66 gün ama `sure:300`.
⇒ Ondan başlangıç **türetilemez**, ve türetmeye kalkmak sahte bir aralık
üretirdi.

---

## 🔴 `bitis` — ALAN VAR, DOLU, GEÇERLİ, VE KİMSE OKUMUYOR
```
`grep bitis js/app.js` → tek sonuç bir YORUM satırı (:347)
alan sözleşmesi ölçümü → "okuma kalıbı bulunamayan 5"ten biri
```
⇒ *"Alan var, okuyan yok"* ailesinin **beşinci** üyesi (`kid` · `statu` ·
`kd:` damgası · `kd:` bölge katmanında · **`bitis`**).
🟢 Ve bu vaka ötekilerden farklı: alan **işe yarıyor** — onunla ölçüt
sınandı ve 4 açık kapandı. Kullanılmayan bir alan **değersiz değil,
sadece bağlanmamış.**

---

## ① AYNI KAVRAM, DÖRT AYRI SÖZLEŞME
```
kavram: SAVAŞIN/OLAYIN ZAMAN ARALIĞI
  SEFERLER      `f` … `t`            61/61
  SAVASLAR      `t` … `bitis`         5/171   ← yalnız 5 kayıtta
  ANTLASMALAR   `savas_basi` … `t`   28/31
  SERILER       `aralik` (SERBEST METİN)  16/16
```
🔴 **Dört küme, dört ad, ve biri serbest metin.** Ve `SAVASLAR`da başlangıç
`t`, ötekilerde `t` **bitiş** — yani aynı alan adı **ters anlamda**.

## ② KÜMEDE VAR, KARDEŞİNDE YOK
```
bütün alanlar        : 20
DÖRDÜNDE DE olan     : yalnız `ad`      ← `t` bile SERILER'de YOK
yalnız SAVASLAR      : bitis · galip · seri · sure
yalnız ANTLASMALAR   : savas_basi · topraklar
yalnız SEFERLER      : f · renk · yol
yalnız SERILER       : aralik · id
```

## ③ OKUMA KALIBI BULUNAMAYAN 5 ALAN
```
bitis · galip · seri     (SAVASLAR)
taraf_metin              (SAVASLAR + ANTLASMALAR)
topraklar                (ANTLASMALAR)
```
⚠️ **Damga `okuma kalıbı BULUNAMADI`, `okunmuyor` DEĞİL** — kalıp tabanlı
arama `for a in r` gibi dolaylı okumaları görmez. Kesin hüküm için kod tek
tek okunmalı; ben yalnız `bitis`i okudum (`app.js`te gerçekten yok).

## 🟡 PAYDA SINAVI — ve iyi haber
`ANTLASMALAR`ı `oku_pencere` **31**, node **41** okuyor. İki okuyucunun
**ALAN KÜMESİ karşılaştırıldı: AYNI.**
⇒ Görünmeyen 10 kayıt **yeni bir alan getirmiyor**; eksiklik alan
sözleşmesini değiştirmiyor. (Sıklıklar yine de 31 üzerinden — payda
damgası duruyor.)

---

## 🟢 ÖNERİ — denetim YAZILMADI, ama artık DAYANAKLI
Ölçüt **iki katmanda** kanıtlandı, yani `SEFERLER`e özgü değil:
```
ölçüt : [aralık başı − 30, aralık sonu + 30] içinde madde VAR MI
        + AD BENZERLİĞİ (durak kökler ölçülerek elenmiş)
aralık: SEFERLER    [f, t]
        SAVASLAR    [t, bitis]        ← `bitis` varsa
        ANTLASMALAR [savas_basi, t]
        SERILER     KAPSAM DIŞI (aralık serbest metin)
mazur : aralık alanı olmayan kayıt → Ⓐ'da kalır
```
⚠️ Ve ad benzerliği **şart**: `SEFERLER`de aralık tek başına 2 yanlış
pozitif üretmişti (22 aylık aralığa rastgele madde düşüyor).

## ÖLÇMEDİKLERİM
- Okuma kalıbı bulunamayan 5 alandan yalnız **`bitis`i** kod okuyarak
  doğruladım; `galip · seri · taraf_metin · topraklar` için **kalıp
  sonucuna güvendim**.
- `SAVASLAR`ın `bitis` taşıyan **5** kaydından 4'ü açıktı; beşincisi
  (1522 Rodos) zaten senkron — onun aralığını **ölçmedim**.
- Dört ayrı ad sözleşmesinin **niçin** böyle olduğu (tarihsel mi, kaza
  mı) — `git log` ile bakmadım.

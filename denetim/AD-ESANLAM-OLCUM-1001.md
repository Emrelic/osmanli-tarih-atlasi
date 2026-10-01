# `ad_esanlam.js` öksüz DEĞİL — bağlamanın kazancı ÖLÇÜLDÜ: 0

**Hüküm: bu bir kalem değil. Listeden ÇIKARILDI.**

Bu dosyayı dört ayrı turda *"öksüz, bağlanmalı"* diye bekleyen kalem listesine
yazdım. Hiçbirinde **ne kazandıracağını ölçmedim** — yalnız kapının bir uyarı
satırını tekrarladım. Ölçünce kalem olmadığı çıktı.

---

## ① NEYİ YANLIŞ OKUDUM

Yayın kapısı her koşuda şunu basıyor:
```
⚠️ ÜRETİLİYOR AMA ÇİZİLMİYOR: 150  (32 kasıtlı muaf hariç)
   AD_ESANLAM  data/ad_esanlam.js  app.js OKUMUYOR · index.html YÜKLEMİYOR
```
Ben bunu *"bağlanması gereken bir dosya"* diye okudum. Oysa:

🔴 **Dosya zaten BEYANLI.** `arac/denetle_yayin.py:993`, `BEKLEYEN` sözlüğünde:
> `"data/ad_esanlam.js": "eşanlamlı ad sözlüğü — ARAÇ girdisi (Budin↔Buda,
> Üsküp↔Skopje); tarayıcıya gitmez"`

Yani *"tarayıcıya gitmiyor"* bir **kusur değil TASARIM**. Ve `⚠️` satırı 150
kalemlik toplu bir bilgi kovası — ✗ değil.

📌 `D204` ailesinin bir yüzü: **bir uyarıyı okumak, onun ne dediğini anlamak
değildir.** Uyarı *"app.js okumuyor"* diyor; *"okumalı"* demiyor.

## ② BAĞLASAYDIK NE KAZANIRDIK — ölçüldü, SIFIR

```
havuz                      5.480 ad (d/v/s süzgeci + parantezsiz kök)
sözlük                        39 anahtar · 65 tek yönlü çift
havuzda TEK tarafı olan      53 çift   ← POTANSİYEL kazanç bunlardı
odaksız madde                692
🔴 sözlük bağlansa KAPANACAK odaksız madde:   0 / 692
```
Yani sözlüğün çevirebileceği 53 ad çiftinin **hiçbiri** odaksız bir maddenin
metninde geçmiyor.

İkinci kullanım da ölçüldü — **kırık atıf** (yazılmış ama çözülmeyen `yer_id`):
```
bugünkü kırık atıf        0  (beyanlı bilinen borç: 1 — `Ogaden`)
sözlükte `Ogaden`         YOK
```
⇒ İki kullanımın ikisinde de kazanç **sıfır**.

## ③ VE DOSYA ZATEN KULLANILIYOR — yalnız tarayıcıda değil

```
arac/ad_esanlam.py       sözlüğün TEK OTORİTESİ (yukle · coz · sadelestir ·
                         ters_dizin · belirsiz_dizin)
arac/_bk_nobetci.py:37   `import ad_esanlam as AE` — gerçek tüketici
arac/denetle_yayin.py    BEKLEYEN'de gerekçesiyle beyanlı
```
Dosya ölü değil; **araç katmanında canlı, tarayıcı katmanında bilerek yok.**

## ④ DEĞERİ NE ZAMAN DOĞAR

Sözlüğün değeri **önleyicidir**, düzeltici değil: ileride biri `yer_id:"Diyarbekir"`
yazarsa (havuzda `Diyarbakır` var) sözlük onu kurtarır. Bugün öyle bir kayıt
**yok** — çünkü yazanlar zaten atlasın adını kullanıyor.

⇒ Bağlamak bugün yalnızca **kod ekler ve yeni bir hata yolu açar.** Kazanç
sıfırken bu kötü bir takas.

## ⑤ NE ZAMAN YENİDEN BAKILIR

Şu iki ölçümden biri değişirse:
```
kırık atıf > 1 OLUR  ve  kırılan ad sözlükte VARSA
odaksız maddenin metninde sözlükteki bir ad GEÇMEYE BAŞLARSA
```
Ölçüm betiği basit: havuz ∪ sözlük çiftleri ∩ odaksız metinleri. Bu belge o
ölçümün bugünkü fotoğrafıdır (1 Ekim 2026).

---

📌 **Asıl ders bende:** dört tur boyunca bir kalemi listede taşıdım ve her
seferinde Emre'ye *"bekleyen iş"* diye sundum. Ölçmek **tek bir betik**
sürdü. `CLAUDE.md §11`: *"ölçüm doğru, çıkarım yanlış"* — burada ölçüm bile
yoktu, yalnız bir uyarının tekrarı vardı.

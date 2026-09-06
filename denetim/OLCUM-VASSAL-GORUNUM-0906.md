# ÖLÇÜM — VASSAL GÖSTERİMİ (Emre'nin tarifi)

**Oturum:** KURE GORUNUM · 1.MURAT sevki, kalem ① · 6 Eylül 2026
**Cins:** ÖLÇÜM + yama önerisi — `js/app.js`e **inmedi** (Oturum 1),
veri yazılmadı, koşu 6 sürüyor.

> Emre: *"vassal devletlerin rengini Osmanlı rengine boyayalım fakat
> isimlerini kırmızı üstünde beyaz bir şekilde yazalım ve parantez içinde
> vassal özerk himaye gibi terimler yazalım. devlet tek renk olsun."*

---

## SONUÇ — İSTEK İKİYE AYRILIYOR, VE YARISI BUGÜN YAPILABİLİR

```
🟢 RENK YARISI     tek satır · bugün yapılabilir · yama hazır
🔴 ETİKET YARISI   BLOKE — "parantez içindeki terim"in KAYNAĞI YOK,
                   ve parantez slotu ZATEN BAŞKA BİR ŞEYLE DOLU
```

## ① (a) `v:` BUGÜN NASIL ÇİZİLİYOR — ölçüldü

Katman sırası (canlı stilden okundu, 1683-07-14):
```
 8  devlet-dolgu       fill  ["get","renk"]                yabancı devletler
11  imparatorluk-hale  line  #6d0d1c  w3.5  op0.95         ← DOLGULARIN ALTINDA
12  vassal-dolgu       fill  #b2384a  op1                  ← SABİT HEX
13  himaye-dolgu       fill  coalesce(renk, #b2384a) op1
14  himaye-cizgi       line  #8e0b22  w2
15  osmanli-dolgu      fill  #8e0b22  op1
16  osmanli-cizgi      line  #4d0713  w1.8                 ← EN ÜSTTE
```
🔴 **Vassal rengi türetilmiş bir açık ton DEĞİL, sabit bir hex.**
`#b2384a` ↔ `#8e0b22`: RGB uzaklığı **70,1**, lüminans **0,128 ↔ 0,061**
(vassal iki kattan fazla açık).

📌 Ve bu renk **zaten bir kez Emre'nin isteğiyle yakınlaştırılmış**
(`app.js:1008` yorumu): *"vassal devletlerin kırmızısı sadece bir ton
açık renk olmalı, burada kırmızı ve pembe olacak şekilde fark büyük"*
⇒ `#d4707d` → `#b2384a`. **Bugünkü istek aynı yörüngenin son adımı.**
Ve `imparatorluk-hale` de aynı gerekçeyle (hatalar 10 md.1) zaten var:
Osmanlı + tâbi **birlikte** tek bir dış çerçeveyle sarılıyor.

## ② (b) "TEK RENK" — 🔴 SINIRI SİLMİYOR, ve sebebi KATMAN SIRASI

`osmanli-cizgi` (sıra **16**) `vassal-dolgu`nun (sıra **12**)
**ÜSTÜNDE**. Yani vassal dolgusu Osmanlı rengine çevrilse bile, iki
gövdenin arasındaki hat **1,8 px `#4d0713` koyu çizgiyle çizilmeye
devam eder.**

🟢 **Bu bir tahmin değil — canlı sayfada ölçüldü** (1683-07-14, vassal
gövdesinin çevresinde 160 px yarıçapta 11.449 nokta yoklandı):
```
osmanli-cizgi RENDER EDİLEN nokta: 260 / 11.449
⇒ hat GERÇEKTEN çiziliyor
```

⇒ **KARAR NOKTASI (senin/Emre'nin):**
```
YORUM 1  "tek renk" = aynı DOLGU, iç hat KALIR
         → tek satır, bugün yapılabilir. İç bölünme hâlâ görünür.
YORUM 2  "tek renk" = DİKİŞSİZ tek gövde, iç hat da YOK
         → 🔴 tarayıcıda YAPILAMAZ. `app.js:993` zaten yazıyor:
           "gerçek birleşim (union) tarayıcıda hesaplanamaz — geometri
            kütüphanesi yok". HALE tekniği tam bunun için icat edilmiş.
           Hattı seçmeli olarak kaldırmak, hangi kenarın tâbiye baktığını
           bilmeyi gerektirir — o da union demektir.
```
🔵 Ben seçmiyorum. Ama şunu söyleyebilirim: **YORUM 1 zaten Emre'nin
hatalar 10'daki isteğini karşılıyor** (*"vassalların ayrı devlet olduğu
algısını yıkmak"*) — dış çerçeve birleşik, iç renk aynı, kalan tek şey
ince bir idarî hat. YORUM 2 bir motor işi, arayüz işi değil.

**Ölçek:** `v:` **429 dönem · 367 nokta** (3805'in %9,6'sı).
⚪ Viewport sayıları (1683-07-14, o andaki görüntü): osmanli 1 · vassal 2
· imparatorluk 3 gövde. `querySourceFeatures` yalnız yüklü döşemeyi
sayar ⇒ bunlar TOPLAM DEĞİL.

## ③ (c) 🔴 TERİM — KAYNAĞI YOK, VE PARANTEZ SLOTU DOLU

`v:` dönemlerinin `k` alanı ölçüldü: **429 dönem · 41 ayrı etiket.**

```
🔴 ETİKETSİZ (boş `k`)                      56 dönem   (%13)
🔴 bilinen bir TERİM sözcüğü taşımayan      29 / 41 etiket
   parantez İÇEREN                          24 / 41 etiket
```

🔴 **VE ASIL ENGEL: parantez ZATEN KULLANILIYOR — ama terim için
değil.** İçindekiler hanedan, kişi ya da nitelik:
```
Mısır (Kavalalı)                 74 dönem   ← hanedan
Cezayir Ocaklığı (dayı idaresi)  41         ← idare biçimi
Trablusgarp Ocaklığı (Karamanlılar) 39      ← hanedan
Mısır (İbrâhim Paşa)             30         ← kişi
Orta Macar Krallığı (Tököli İmre) 5         ← kişi
Macaristan (Zapolya vasal krallığı) 5       ← karma
```
Terim taşıyan parantezler **azınlık**: `(tâbi)` · `(Osmanlı tâbii)` ·
`(Osmanlı himayesinde)` · `(haraçgüzâr)` — toplam bir avuç dönem.

⇒ Emre'nin *"parantez içinde vassal özerk himaye gibi terimler
yazalım"* isteği bugünkü içerikle **çakışıyor**: `Mısır (Kavalalı)`
ya `Mısır (Kavalalı) (tâbi)` olur, ya da var olan parantez **ezilir.**

### 🔴 VE TERİMİ METİNDEN ÇIKARMAK — BU PROJENİN ÜÇ KEZ YANILDIĞI YOL
`VERI-YAPISI.md:399-401` aynen şunu diyor:
> *"MOTOR VE ARAYÜZ `baskent:` DİZGİSİNİ ASLA AYRIŞTIRMAZ… Ok işaretli
> dizgiyi bölmek, dersi serbest metinden geri kazanmaya çalışmaktır —
> ve bu proje onu ÜÇ KEZ denedi."*

41 etiketin 29'u terim sözcüğü taşımıyor; ayrıştırma denense **%70'i
için uyduracak** bir şey yok. ⇒ **Çıkarma YOLU KAPALI.**

### 🟢 ÖNERİ — kapalı sözlüklü YENİ BİR DÖNEM ALANI
```
v:[{ f, t, k:"Eflak Voyvodalığı", vt:"vassal" }]
                                  ^^^^^^^^^^^^
vt: kapali sozluk — vassal · ozerk · himaye · haracguzar · ocaklik
```
```
🔴 girdi.py `BILINEN_DONEM_ALANLARI` bugün 7 alan (d·enklav·f·k·kaynak·t·y)
   ⇒ `vt` KAYDEDİLMEDEN yazılırsa her yüklemede UYARI basar
   (bu gece `s.kesinlik` vakasının aynısı — iki kütük, biri tanımıyor)
🔴 girdi.py KOŞU 6 BOYUNCA DONUK ⇒ alan bugün kaydedilemez
🟡 429 dönemin `vt`si ELLE doldurulacak — 41 etiketin çoğu tek tek
   eşlenebilir ama 56 boş dönem için KAYNAK ARAMASI gerekir
```
⇒ **Etiket yarısı bugün inmez.** Ön koşulu bir veri kararı, bir arayüz
işi değil.

## ④ YAMA — `denetim/YAMA-VASSAL-TEKRENK-0906.js`
Yalnız **renk yarısı**. Tek satır, geri alınabilir, sabit olarak açıkta.
Etiket yarısı için yamada **yer tutucu YOK** — çünkü kaynağı yok, ve
yer tutucu koymak *"altyapı hazır"* diye okunurdu.

## ÖLÇMEDİM
```
⚪ Tek renkten SONRAKİ görsel sonucu — ekran görüntüsü bu oturumda
   üç kez zaman aşımına uğradı; ölçüm queryRenderedFeatures ile YAPILDI
   ama "gözüme nasıl görünüyor" DEĞİL
⚪ Vassal gövdelerinin ALAN payını — yalnız nokta/dönem sayısı (367/429)
⚪ Etiketlerin bugün NEREDE ve NASIL çizildiğini — `k` alanının ekrana
   hangi yoldan gittiğini izlemedim; renk yarısı buna bağlı değil,
   ETİKET yarısı bağlı ve o zaten bloke
⚪ 56 boş `k` dönemi için terimin ne olması gerektiğini — kaynak işi
```

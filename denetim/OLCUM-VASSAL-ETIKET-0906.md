# ÖLÇÜM — VASSAL ETİKET KATMANI (`statu:`ye karşı)

**Oturum:** KURE GORUNUM · 1.MURAT sevki · 6 Eylül 2026
**Cins:** ÖLÇÜM + yama — `js/app.js`e **inmedi**, veri yazılmadı.

---

## 🔴🔴 ÖNCE: `statu:` TEK BAŞINA YETMİYOR — ZİNCİR ÜÇ YERDEN KOPUK

Sevk *"alan koşu 6 bitince inecek, sen ona karşı yaz"* diyor. Ölçtüm:
**alan inse bile haritaya ULAŞMAZ.** Tâbi gövdenin bugün hiçbir metni
yok, ve sebebi üç ayrı yerde:

```
① MOTOR    donemler.js'te `d.v` TEK BİR GEOMETRİ — o dönemin BÜTÜN tâbi
           dünyası tek gövde. Eflak · Boğdan · Kırım · Erdel AYRI DEĞİL.
           ⇒ Asacak yer YOK: bir polity'ye ad/statü verilemez.
② ARAYÜZ   `tekVeri(geo)` → `properties: {}` — SABİT KODLU.
           Ölçüldü: `querySourceFeatures('vassal')` → özellik kümesi BOŞ.
③ ETİKET   `etiketAdaylari` YALNIZ `devletler2`den (yabancı devletler)
           kuruluyor. `d.v` bu yoldan HİÇ GEÇMİYOR.
```
🟢 **Ölçüldü:** 1683-07-14'te ekranda 107 `devlet-etiket` var, 3'ü tâbi
gövdenin üstünde — ama üçü de **yabancı devlet etiketi**, coğrafî
olarak denk gelmişler. Tâbi gövdenin **kendi etiketi sıfır.**

### 🟢 VE EMSAL AYNI DOSYADA: `d.h` ZATEN DOĞRU BİÇİMDE
```js
// himaye — LİSTE, ve her öğe kendi özniteliğini taşıyor (app.js:5062)
(d.h || []).map(hb => ({ properties: { renk: hb.renk }, geometry: hb.g }))
// vassal — TEK geometri, öznitelik YOK (app.js:5057)
d.v ? tekVeri(d.v) : bosVeri()
```
⇒ `d.v`nin ihtiyacı olan biçim **zaten projede var ve çalışıyor.**
Yapılacak şey icat değil, **`d.h`nin biçimini `d.v`ye taşımak** —
ama bu bir **MOTOR** işi (`uret_petek.py`, koşu 6 boyunca donuk) ve
koşu 6 şu anda `donemler.js`i **eski biçimle** üretiyor.

🔴 ⇒ **`statu:` `yerlesimler.js`e inse bile bu koşunun çıktısı onu
taşımaz.** Etiket katmanı ancak `d.v` biçimi değiştikten SONRA
görünür olur.

## ① (a) TÂBİ GÖVDE ETİKETİ — biçim
```
kırmızı zemin (#8e0b22) + beyaz yazı + " (statu)"
```
🔴 **VE MEVCUT HALO ÇAKIŞIYOR.** `.devlet-etiket` bugün beyaz halo
taşıyor (`text-shadow: rgb(255,255,255) 0 0 3.6px` ×3 — küre işinde
ölçüldü). Beyaz yazıya beyaz halo eklenirse **yazı bulanık bir beyaz
lekeye** döner. ⇒ Yeni sınıf halosu **KOYU** olmalı ya da hiç olmamalı;
zemin zaten karşıtlığı sağlıyor (beyaz üstü `#8e0b22`: karşıtlık
**8,6:1**, WCAG AA'nın çok üstünde).

## ② (b) `statu` YOKSA NE YAZILACAK — kararım: **`(tâbi)`**
```
🟢 SEÇİM: boş bırakmak DEĞİL, `(tâbi)` yazmak
GEREKÇE: `v:` katmanının TANIMI zaten tâbiiyet — senin `statu:` için
   yazdığın gerekçenin aynısı ("her dönem en azından vassal'dır").
   ⇒ `(tâbi)` bir TAHMİN değil, katmanın ANLAMI.
🔴 Boş bırakmak niçin YANLIŞ: parantezsiz bir ad, yabancı devlet
   etiketinden ayırt edilemez — ve Emre'nin bütün isteği tam olarak o
   karışıklığı gidermek. Statüsüz etiket, ayrımı kaldırıp yerine bir
   şey koymamak olur.
⚪ `vassal` yerine `tâbi` seçtim çünkü lejant ve `_yerlesimSerit`
   (app.js:4621) zaten "tâbi" diyor — üçüncü bir sözcük getirmedim.
```

## ③ (c) 🔴 OKUNURLUK — KIRMIZI ZEMİN ÇOĞU GÖVDEYE SIĞMIYOR

Üç tarih × iki zoom'da tâbi gövde parçalarının **ekran** ölçüleri:

| tarih | zoom | parça | en küçük | ortanca | en büyük |
|---|---|---|---|---|---|
| 1683-07-14 | z2 | 11 | 1×1 px | **16×17** | 62×49 |
| 1683-07-14 | z4 | 11 | 2×5 | **63×67** | 249×196 |
| 1541-08-29 | z2 | 7 | 1×1 | **3×4** | 50×45 |
| 1541-08-29 | z4 | 7 | 3×4 | **10×18** | 201×178 |
| 1878-07-13 | z2 | 14 | 1×1 | **10×19** | 90×143 |
| 1878-07-13 | z4 | 14 | 3×3 | **41×75** | 360×572 |

Mevcut etiket genişlikleri: `Rusya` 34 px · `İtalya` 37 px ·
`Fransa Cumhuriyeti` 182 px · `Kutsal Roma / Almanya` 231 px (10-16 px
punto). *"Eflak Voyvodalığı (tâbi)"* ≈ **110-130 px** @10px.

⇒ **z2'de ortanca gövde 16 px — etiket sığmaz. z4'te bile ortanca
63 px, gereken ~110 px.** Yalnız **en büyük parça** taşıyabiliyor.

🔴 **VE PILL, DÜZ METİNDEN FARKLI:** bugünkü `devlet-etiket` taşarsa
yalnız yazı taşar (halolu, altındaki harita **görünmeye devam eder**).
**Opak bir kırmızı kutu taşarsa altındaki haritayı KAPATIR** — 16 px'lik
bir gövde için 110 px'lik bir kutu, komşu toprağın 94 px'ini örter.
⇒ Bu bir ayar değil bir **tasarım kısıtı**: pill yalnız kutuyu
taşıyabilen gövdelerde çizilmeli.
🟢 Altyapı hazır: `devlet-etiket` yerleştirmesi **zaten çarpışma
sınaması yapıyor** (`app.js:493-497`) ve sığmayanı atlıyor. Yeni katman
aynı sınamayı kullanır, **artı** bir "gövdeye sığıyor mu" şartı.

## ④ (d) LEJANT — renk birleşince o satır YALAN SÖYLER
```
BUGÜN  <i #8e0b22> Doğrudan idare
       <i #b2384a> Bağlı / tâbi topraklar      ← renk birleşince YALAN
ÖNERİ  <i #8e0b22> Doğrudan idare ve bağlı topraklar (tek renk)
       <i kırmızı pill: "ad (tâbi)"> Bağlı toprak — adı ve statüsüyle
       (İşgal · İmparatorluk sınırı satırları DEĞİŞMEZ)
```

## ⑤ 🔴 RENK: DÖRT DEĞİL **BEŞ** YER — biri sevkte yok
```
 188  yorum                                    → metin güncellenmeli
1013  vassal-dolgu                             → #8e0b22   (sevkte var)
1031  himaye-dolgu YEDEĞİ                      → (aşağıya bak)
1385  LEJANT swatch                            → (yukarıda)
4621  🔴 _yerlesimSerit — PANEL ŞERİDİ         → SEVKTE YOK
```
⚪ **4621 AYRI BİR KARAR ve ben DEĞİŞTİRMEDİM.** O harita değil,
yerleşim panelindeki **zaman şeridi**: `{ ad:"Osmanlı", cins:"tâbi",
renk:"#b2384a" }`. Şeritte doğrudan/tâbi ayrımını **renk taşıyor** ve
orada etiket yok ⇒ birleştirilirse şeritte ayrım **tamamen kaybolur**.
Haritada ayrımı etiket devralıyor, şeritte devralacak bir şey yok.
🔵 Önerim: **4621 DEĞİŞMESİN** — ama bu bir karar, ben vermiyorum.
🔵 1031 (`himaye-dolgu` yedeği): yalnız `renk` alanı BOŞ olduğunda
devreye giriyor. Birleşme sonrası `#b2384a` hiçbir katmanla eşleşmez
⇒ yedek olarak **anlamını yitirir**. Yamada `#8e0b22`ye çevirdim, ama
himaye AYRI bir siyasî durum olduğu için bu da sorgulanabilir.

## ÖLÇMEDİM
```
⚪ Pill'in GÖRSEL sonucunu — ekran görüntüsü bu oturumda dört kez
   zaman aşımına uğradı; bütün ölçümler sayısal
⚪ `d.v`nin motor tarafında polity'lere BÖLÜNEBİLİR olup olmadığını —
   `uret_petek.py` donuk, ve `_gt_ham` bugün `unary_union(tabi)` ile
   TEK gövde üretiyor; bölmek bir motor tasarım kararı
⚪ Kaç dönemde tâbi gövdenin EN BÜYÜK parçası pill'i taşıyabilir —
   üç tarih ölçtüm, 537 dönemin tamamını değil
⚪ `statu:` sözlüğünün son hâlini — sevk `vassal` diyor, ben `(tâbi)`
   önerdim; ikisi AYNI ŞEY DEĞİL ve sözlüğü sen kuruyorsun
```

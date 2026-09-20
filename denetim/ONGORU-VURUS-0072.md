# ÖNGÖRÜ — ele geçirme sahnesinin ara vuruşu (ölçümden ÖNCE yazıldı)

Oturum SEFER-OK-0070 · 20 Eylül 2026 · koordinatör sevki (Emre'nin birebir sırası).
Soru: bugünkü dizideki `hal:"yok"` anında ekranda **hangi sahip** görünüyor?

## Bugünkü dizi (app.js `eleGecirmeDizisi()`)

`koyu(420) → yok(180) → koyu(420) → yok(180) → sonra(620) → yok`

`_antlasmaHal("yok")` yalnız `antlasma-fark-dolgu` katmanının `fill-opacity`sini
0 yapar; örtü kalkar ve altından **haritanın kendi çizimi** çıkar.

## ÖNGÖRÜM

1. **`yok` anında ekranda YENİ sahip görünür** (eski değil). Gerekçe: sahne bir
   kronoloji maddesine geçilince koşuyor ve o geçişte `tarihAyarla(olay.gi)` ile
   zaman çubuğu OLAY GÜNÜNE ilerliyor; petek motorunun o gün için çizdiği
   sahiplik zaten yeni sahibinkidir. Örtü, haritanın üstüne konan ikinci bir
   katman; kalkınca altta yeni durum kalır.
   ⇒ Yani Emre'nin "sönsün" dediği ara, istediği "eski durum" DEĞİL, **yeni
   durumun kendisi**: sahne iki kez aynı şeyi gösteriyor (koyu vuruş → yeni
   sahip → koyu vuruş → yeni sahip → yeni sahip).
2. **`_antlasmaHal("once")` bu sahnede olduğu gibi kullanılabilir.** Gerekçe:
   hâl değeri yalnız `fill-color` anahtarını değiştiriyor (`["get", hal]`) ve
   `once` rengi her petek özelliğinde `_farkKutusuCiz` tarafından zaten
   hesaplanıyor — "◀ Öncesi" düğmesi bunu kullanıyor. Ek maliyet: **sıfır** (yeni
   katman, yeni kaynak, yeni zamanlayıcı gerekmez).
3. Yeni dizi `once → koyu → once → koyu → once → sonra → yok` olduğunda vuruş
   sayısı (`vurus: 2`) DEĞİŞMEZ; yalnız dizinin uzunluğu 6 → 7 adım olur.
4. Sahne süresi 420+180+420+180+620 = 1820 ms iken, başa eklenen "eski durum"
   adımıyla **+300 ms** artar (yaklaşık 2120 ms). Tavan `FAZ_TAVAN_MS` (2400)
   altında kalmalı — aşarsa sıralayıcı fazı zorla kapatır ve son vuruş yarıda
   kalır.

## Tuzaklar (öngörü tutmazsa ilk bakılacak yer)

* `once` rengi bazı peteklerde **tanımsız** olabilir (yeni kurulan devlet, önceki
  sahibi olmayan toprak). O hâlde `["get","once"]` null döner ve MapLibre
  katmanı çizmez — ara vuruş "boşluk" gibi görünür. Ölçüm bunu ayrıca sormalı:
  kaç petekte `once` var?
* `prefers-reduced-motion` dalı ayrı: orada tek durak var, bu sıra oraya
  uygulanmaz (erişilebilirlik kararı, dokunulmuyor).

# OYNATMA BLOKLANMASI — `ölçülemedi` DAMGASI KALDIRILDI

> `OLCUM-OYNATMA-TAKILMA-0907.md §③e` kalan **%54,1**'i *"bu yöntemle
> atfedilemiyor"* diye damgalamıştı ve doğru damgaydı: **yöntem** yetersizdi,
> bulgu değil. Yöntem değişti, sayı kapandı.

## ① NİÇİN BİRİNCİ YÖNTEM GÖREMEDİ

Birinci yöntem `window` üzerindeki **adlandırılmış fonksiyonları** sardı
(`guncelle` · `tarihAyarla` · `olayaGit` · `haritayiOlayaGotur` …).
Oynatmanın işi ise **zamanlayıcı geri çağrılarında** yapılıyor ve o
çağrılar `window`da bir ad taşımıyor.

🟢 **ÇARE:** fonksiyonları değil **`setTimeout` / `setInterval` /
`requestAnimationFrame`'i** sar; geri çağrıyı **kayıt anında** yakala ve
kayıt yığınından adlandır.

## ② ÖLÇÜM — 57,8 saniyelik oynatma, tek pencere

```
pencere            57.820 ms
uzun görev             65  ·  toplam 12.898 ms   ⇒ pencerenin %22,3'ü BLOKLU
──────────────────────────────────────────────────────────────────
JS_KAPLI            7.290 ms   %56,5   ← sarılabilen JS
    sI:adimla       3.414 ms           oynatma sayacı (adım + `guncelle`)
    sT:calistir     2.191 ms           `_haritaSakinlesince` 450 ms gecikmesi
    sT:(anonim)     1.685 ms           kırpma (app.js:7542) → `tarihAyarla` ×4
JS_DIŞI             5.608 ms   %43,5   ← JS DEĞİL
```

🔴 **`JS_DIŞI` bir eksik ölçüm değil, BİR CEVAP.** Uzun görevin içinde
JS bittikten sonra tarayıcı **aynı görevde** stil hesabı, yerleşim ve
boyama yapar. Hiçbir JS sarmalayıcı onu göremez — ve görmesi de gerekmez:
o süre `setData` sonrası MapLibre'nin ve tarayıcının kendi işidir.
⇒ *"Kalan %54 nerede"* sorusunun cevabı: **yarısı üç adlı geri çağrıda,
yarısı çizimde.**

## ③ KONTROL GRUBU — ve temiz çıktı

```
OYNARKEN  57,8 sn · 65 uzun görev · 12.898 ms
BOŞTA      8,0 sn ·  0 uzun görev ·      0 ms
```
⇒ Bloklanmanın **tamamı** oynatmadan doğuyor; sayfa yükü ya da bellek
değil. `§11`: *"bir ölçümü doğrulayan şey ikinci bir ölçüm değil,
ölçümün YOKLUĞUNDA ne olduğunu gösteren KONTROLDÜR."*

## ④ 🔴 VE ÜÇ ÖLÇÜM ARTEFAKTI ÇIKTI — üçü de SESSİZ

```
① SIRA      `__P2` kuruldu, sonra `__P.kapat()` küreselleri ÖZGÜN hâline
            döndürüp `__P2`nin sarmalayıcılarını da SÖKTÜ.
            Sonuç: `JS_KAPLI 0` — bir ölçüm değil SESSİZ SIFIR.
② KAYIT ANI `__P3` oynatma SÜRERKEN kuruldu; oynatmanın `setInterval`i
            zaten kayıtlıydı ⇒ sarılmadı. 67 yerine 6 geri çağrı,
            ve JS oranı %11,5 çıktı — üç kat düşük.
③ PANEL     Ölçümden önce Browser paneli GİZLİYDİ. `visibilityState`
            "hidden" iken MapLibre çizmez ⇒ bütün sayılar artefakt olurdu.
            Ölçümden ÖNCE panel öne alındı ve `visible` doğrulandı.
```
📌 Üçü de **hata vermedi, temiz bir sayı üretti.** ①'in çaresi sıra,
②'nin çaresi *durdur → kur → başlat*, ③'ünkü bu belgede zaten yazılı bir
ders (`§11`, gizli sekme vakası) ve bu sefer ÖNCEDEN uygulandı.
🟢 Ve ②'yi ele veren şey sayı değil **`geriCagri: 6`** oldu — bir
sağlamlık alanı. Yalnız orana bakılsaydı %11,5 bulgu sanılırdı.

## ⑤ 🟢 VE "DÜZELTİLECEK İSRAF" ARANDI — BULUNAMADI

Üç kaynağın üçü de **kasıtlı ve ölçülmüş tasarım**:
```
sI:adimla              oynatmanın KENDİSİ — her adımda `guncelle()`
sT:calistir            `_haritaSakinlesince`, ve tavanı ZATEN ölçülerek
                       1500 → 450 ms indirilmiş (app.js:3908 yorumu)
sT:(anonim) kırpma     Emre'nin kendi ayarı: 900 ms, 4 hâl. `tarihAyarla`yı
                       dört kez çağırması BİR KUSUR DEĞİL — kırpmanın
                       gösterdiği şey ÖNCEKİ ve SONRAKİ harita hâli
```
⇒ **Kaldırılacak bir israf yok; maliyet işin kendisi.** Kırpmayı
`tarihAyarla`sız yapmak onu kırpma olmaktan çıkarır.

🔜 **Gerçek kaldıraç mimarî ve zaten kuyrukta:** her adım bir tam
`guncelle()` → `setData` → yeniden çizim yapıyor, ve bloklanmanın
**%43,5'i o çizim.** Onu küçültmenin yolu JS'i hızlandırmak değil,
**gönderilen geometriyi küçültmek** — brifingin ④ maddesi
(geometri `<script>`ten çıkıp `fetch()`+JSON, ve delta `setData`).

## ⑥ ÖLÇMEDİKLERİM
```
⚪ Farklı hız kademeleri — yalnız varsayılan hızda ölçüldü
⚪ Geç dönemler (1600+, yüzlerce gövde sahnede) — 1327-1374 aralığı ölçüldü,
   gövde sayısı arttıkça blok ARTABİLİR
⚪ Yayındaki (GitHub Pages) hâli — ölçüm YEREL sunucuda
⚪ `JS_DIŞI`nın stil / yerleşim / boyama ayrımı — tarayıcının kendi
   profilleyicisi gerekiyor; bu oturumdan sürülemedi
```

# `KISILER.id` üretim kuralı

`data/kisiler.js`'teki her kayıt artık benzersiz bir `id` taşıyor (bkz.
`ETIKETLEME.md §5-6` — kişi ekseni bu kimlik olmadan kurulamazdı). Bu belge,
kuralı yazıyor ki başka oturumlar yeni kayıt eklerken aynı kalıbı kullansın ve
kimlikler çatışmasın.

`data/padisahlar.js`'teki mevcut `id` alanı (`osman1`, vb.) zaten aynı kalıbı
kullanıyordu — bu kural o örnekten genelleştirildi, icat edilmedi.

## Algoritma

1. **Baştaki sıra sayısını bul.** `ad` alanı `"II. Mehmed"` ya da `"5. Dalai
   Lama"` gibi Romen rakamı/rakam + nokta ile başlıyorsa, sayıyı ayır ve
   kimliğin **sonuna eklenecek basamak** olarak sakla (`mehmed` + `2` →
   `mehmed2`). Romen rakamı `IV`, `XI`, `XVI` gibi olabilir — normal sayıya
   çevrilir.
2. **Baştaki unvanı at.** Kalan metnin ilk kelimesi şu listedeyse silinir:
   `Kral, Kraliçe, Çar, Şah, Sultan, Papa, Prens, General, Amiral, Commodore,
   Lord, İmam, Halife`. Unvan atıldıktan SONRA yine 1. adımdaki gibi bir sıra
   sayısı çıkabilir (`"Kral II. Layoş"` → unvan atılır → `"II. Layoş"` → sıra
   sayısı ayrılır → `layos2`). **Unvan yalnız BAŞTAYSA atılır** — sonda ya da
   ortada geçen aynı kelime (`"Tipu Sultan"`, `"Cihan Şah"`) dokunulmaz kalır.
3. **Sondaki bağımsız Romen rakamını da sıra sayısı say.** `"Tvrtko I"`,
   `"Bogdan I"`, `"Kamehameha I"` gibi sonda ayrı bir kelime olarak duran
   Romen rakamı da aynı şekilde kimliğin sonuna eklenir (`tvrtko1`).
4. **Parantez içini at.** `"Mahmud Paşa (Velî)"` → `"Mahmud Paşa"`. Parantez
   içi, aynı temel adın ikinci bir kaydıyla çakışırsa çakışma çözümünde
   ayırt edici olarak kullanılabilir (bkz. §Çakışma).
5. **Türkçe/yabancı harfleri sadeleştir**: ı/İ→i, ş/Ş→s, ğ/Ğ→g, ü/Ü→u, ö/Ö→o,
   ç/Ç→c, â/Â→a, î/Î→i, û/Û→u; ayrıca Balkan/Slav/Vietnam vb. dillerin yaygın
   aksanlı harfleri de (ć,č,š,ž,đ,ł,ś,ą,ę,ń,é,á,í,ó,ú,ñ,ê,ơ,ô… ve büyük
   karşılıkları) düz Latin harfe indirgenir.
6. **Küçük harfe çevir, boşluk ve noktalama yerine tire koy**, art arda
   gelen tireleri teke indir, baş/sondaki tireyi kırp.
7. **Çakışma varsa** (iki farklı kişi aynı temel kimliğe düşerse): önce §4'te
   ayrılan parantez ipucunu (varsa) tireyle ekle (`yakub-bey-akkoyunlu` /
   `yakub-bey-kasgar`); ipucu yoksa `devlet` alanının kimliğini ekle; o da
   yoksa artan bir sayı ekle (`-2`, `-3`…).

## Örnekler (gerçek dosyadan)

```
Sokullu Mehmed Paşa                    → sokullu-mehmed-pasa
IV. İvan (Korkunç)                     → ivan4
Kral II. Layoş                         → layos2
Çar I. Petro                           → petro1
Tvrtko I                               → tvrtko1
Mahmud Paşa (Velî)                     → mahmud-pasa
Yakub Bey (Akkoyunlu)                  → yakub-bey-akkoyunlu   (çakışma: bkz. altı)
Yâkub Bey (Kaşgar)                     → yakub-bey-kasgar      (çakışma çözüldü)
Michał Korybut Wiśniowiecki            → michal-korybut-wisniowiecki
5. Dalai Lama                          → dalai-lama5
Şah I. Abbas                           → abbas1   (unvan "Şah" atıldı, sıra sonda)
Tipu Sultan                            → tipu-sultan   ("Sultan" sonda, atılmadı)
```

## Üretim aracı

Bu kural `data/kisiler.js`'in mevcut 247 kaydına toplu olarak, script ile
uygulandı (elle tek tek yazılmadı — 247 kayıt için elle üretim hem yavaş hem
hataya açık olurdu). Script geçici bir betikti (proje kuralı gereği kalıcı
`arac/` altına konmadı, çünkü tek seferlik bir göç işiydi); yeni kayıt eklerken
bu belgedeki algoritma elle veya benzer bir betikle uygulanabilir.

**Doğrulama:** `data/kisiler.js` üzerinde çakışma yok — 247 kayıt, 247 benzersiz
`id`. Doğrulama komutu:
```bash
node -e "global.window={};eval(require('fs').readFileSync('data/kisiler.js','utf8'));const K=window.KISILER;const ids=new Set();let dup=0;for(const k of K){if(!k.id)console.log('EKSIK ID:',k.ad);if(ids.has(k.id)){dup++;console.log('TEKRAR ID:',k.id,k.ad);}ids.add(k.id);}console.log('kisi:',K.length,'| tekil id:',ids.size,'| tekrar:',dup);"
```

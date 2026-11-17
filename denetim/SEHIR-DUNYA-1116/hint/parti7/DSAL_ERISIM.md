# DSAL Imperial Gazetteer of India — erişim notu (17 Kasım 2026, parti 7)

Sonuç: **METİN OKUNUYOR** (arama sonucunda OCR parçaları). **Sayfa görüntüsü** ayrıca var ama bu ortamda görüntü okunamadı (ekran görüntüsü 5 sn zaman aşımı); tam sayfa metni YOK.

## URL kalıpları (hepsi aynı kökten: https://dsal.uchicago.edu)
- Ana sayfa: `/reference/gazetteer/` (cilt 1-24 bağlantıları + Atlas 1909/1931).
- **Arama (OCR parçası döner):** `/cgi-bin/reference/gazetteer/query.py?keyword=<kelime>`
  - Sonuç satırı: `N) Volume V, page P. See page image` + ~300 karakterlik OCR parçası (anahtar kelimenin sayfadaki İLK geçişi çevresi, ~150 karakter önce/sonra).
  - Çok kelimeli sorgu **VEYA** gibi davranır (ya da tam öbek değil); parça her sayfa için yalnız bir kez döner.
  - 'Sialkot' 82, 'Hooghly' 233, 'Thana' 158, 'founded' 1006, 'capital' 1714 sonuç (üst sınır yok).
- **Sayfa (yalnız görüntü):** `/cgi-bin/reference/gazetteer/query.py?object=<N>&bookid=DS405.1.I34_V<VV>&display_type=page_display`
  - `object = basılı sayfa + ofset` (V22'de +6: basılı s.330 = object 336). Görüntü: `/reference/gazetteer/images/DS405.1.I34_V22_336.gif` (640×1124 gif). Sayfada metin YOK (alt/innerText yalnız "Volume 22: p. 330").
- Cilt sayfası: `...query.py?display_type=volume_display&volume=<1-24>`.

## Çalışan yöntem (karakter sayısı ~300/parça)
Aynı-köken `fetch` (sayfa DSAL'da açıkken tarayıcı konsolunda) ile `Q(kelime)` → parçaları ayrıştır:
```js
const r=await fetch('/cgi-bin/reference/gazetteer/query.py?keyword='+encodeURIComponent(k));
const d=new DOMParser().parseFromString(await r.text(),'text/html');
d.body.innerText.split(/\n\s*(?=\d+\) Volume)/)   // her eleman: "N) Volume V, page P. ...parça..."
```
- Şehir adı araması aday sayfaları verir; **tarihçe cümlesi** için o maddede geçen NADİR kelimeyi ara (örn. Sialkot Town'da `790` ya da `Salivahan`; Hooghly Town'da yok) — parça anahtar kelimenin çevresindedir.
- Toplu tarama: ~50 tarihsel kelime (`founded`, `captured`, `sacked`, `Portuguese`, `Akbar`…) × ~2 sn; sonuçları (cilt/sayfa/parça) bellekte indeksle, şehir adı + yıl regex'iyle süz. Bu yöntem parti 7'de 28 şehrin 18'inde yıl+ad cümlesi buldu.
- Madde başlığı (örn. `Thana Town.-Head-quarters of…`) parçada görünürse ilgili sayfa o şehrin giriş sayfasıdır; sayfa numarasına bakarak giriş sınırı çıkarılır.

## Dikkat
- **OCR hatası:** rakamlar bozulur ('1177' = 1774, '11318' = 1318, 'io88' = 1088, '"481' = 1481, 'A. n. 790'); yıl değeri başka bir pasajla ya da tarihsel makullükle doğrulanmadan tek başına güvenme; kaynakta OCR olduğu `ic_not`ta beyan edilir.
- Başlık/sayfa yer değiştirmesi: sütun düzeni karışır (Tranquebar c.2 s.464 'The settlement of Tranquebar was Company, founded in 1620').
- Bölge/hanedan maddesindeki şehir adı + yıl cümlesi (Hoshiarpur District'te 'fall of Jullundur in 1088') şehrin kendi olgusuysa kullanılabilir; ama 'Vaghelas of Dholka' gibi hanedan tanımlayıcıları kural 4 gereği hayır.
- Britannica slug'ları çoğunlukla 404; Hugli-Chinsurah da 404.

# EKO-UI-0073 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 20 Eylül 2026)

Maddeler: 0073/H-0002 (kart satırında kategori etiketi) · 0073/H-0020 (sağ tık kopyala).
Sınav: headless Chrome + CDP, emsal `denetim/ARAC-OK-0071-SINAV.js`.

## Ö1 — H-0020 ZATEN YAZILMIŞ olabilir
`js/app.js:9938` satırında `sat.addEventListener("contextmenu", …)` + `ekKopyaMenusuAc`
(yorum: "UI-ETKILESIM · DALGA-0063 madde ③") duruyor. ⇒ Tarayıcı sınavı ek okuma satırına
sağ tıkladığında **`.kopya-menu` açılacak ve içinde tam olarak "Başlığı kopyala" +
"Maddeyi kopyala" düğmeleri bulunacak**; yeni kod yazmak gerekmeyecek.
Eğer menü ÇIKMAZSA öngörü çürür ve H-0020 gerçek iştir.

## Ö2 — sayfanın geri kalanında tarayıcı menüsü
Öngörü: satırdaki `contextmenu` olayında `defaultPrevented === true`, `#harita` üzerinde
`defaultPrevented === false`. `#olay-bilgi` panelinin KENDİ (daha eski, ayrı özellik)
işleyicisi olduğu için panelin boş yerinde de `true` çıkacak — bu H-0020'nin değil
DALGA-0063'ün kapsamı.

## Ö3 — bugünkü satır yüksekliği
`.ek-ak-baslik`: `font-size:12px · padding:4px 9px · border:1px · margin-top:5px`,
en uzun çocuk `.ek-ak-simge` (14px/line-height 1). ⇒ ölçülen `offsetHeight` **24–27 px**
aralığında çıkacak.

## Ö4 — etiket eklendikten sonraki büyüme
Tasarım: simge bir KOLONA alınır, üstüne 7px büyük harf kategori yazısı konur; karşılığında
düşey iç boşluk 4px→2px'e, simge 14px→12px'e iner. ⇒ satır yüksekliği **en çok +4 px**
büyüyecek (hedef ≤ +2). Daha fazlası çıkarsa tasarım Emre'nin "satır yüksekliğini fazla
büyütmeyelim" kısıtını ihlal eder ve kolon ölçüsü küçültülür.

## Ö5 — Emre'nin saydığı adlar ile kodun adları
Emre 8 ad saydı (ek okuma · sebeb sonuç · kişi kartları · nasıl bilirdiniz · magazin ·
tartışma · teknik bilimsel · kültür sanat). Kodda satır türü sayısı **18**
(`EKOKUMA_TUR` 14 + `AKORDEON_EK_TUR` 4). Öngörü: **6'sı birebir tutacak**, "ek okuma"
bir tür DEĞİL aile adı çıkacak, **"kültür sanat"ın kodda karşılığı BULUNAMAYACAK**
(en yakını `edebiyat` = "🖋️ Edebiyat").

## Ö6 — Türkçe büyük harf
`"Nasıl bilirdiniz".toUpperCase()` → "NASIL BILIRDINIZ" (noktasız I) olacak;
`toLocaleUpperCase("tr")` → "NASIL BİLİRDİNİZ". CLAUDE.md D215. Kodda ikincisi kullanılacak.

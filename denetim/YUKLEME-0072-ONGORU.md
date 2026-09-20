# YUKLEME-0072 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Sınav anı: 20 Eylül 2026, ölçüm başlamadan. Evren: yayındaki
https://emrelic.github.io/osmanli-tarih-atlasi/ + `index.html`in yüklediği yerel dosyalar.
Aşağıdaki her satır bir BAHİS; ölçüm doğrulayacak ya da çürütecek.

| # | Öngörü | Nasıl yanlışlanır |
|---|---|---|
| Ö1 | Pages `Content-Encoding: gzip` veriyor; tel üstü toplam 35–45 MB | yanıt başlığında gzip yoksa ya da toplam bu aralık dışındaysa |
| Ö2 | Duvar saati darboğazı İNDİRME değil, JS AYRIŞTIRMA+ÇALIŞTIRMA olacak: `donemler.js` + `devletler_harita.js` dev nesne/dizi sabitleridir, V8 tembel ayrıştıramaz; ikisinin ayrıştırma+çalıştırması ≥ 5 sn | ayrıştırma < 5 sn ölçülürse |
| Ö3 | 261 script etiketi İNDİRMEDE paralel (HTTP/2 + ön-tarayıcı), ÇALIŞTIRMADA sıralıdır ⇒ (c) kaldıracının kazancı koordinatörün beklediğinden AZ olacak | indirmeler seri ölçülürse (birinin başlangıcı öbürünün bitişini bekliyorsa) |
| Ö4 | Pages `Cache-Control: max-age=600` (10 dk) verir; `?v=rNNNN` damgası TEK BAŞINA uzun önbellek sağlamaz — 10 dk sonrası ziyaret 261 koşullu istek (304) üretir ⇒ "tekrar ziyaret bedava" YANLIŞ | max-age >= 1 gün ölçülürse ya da 304 turu olmazsa |
| Ö5 | İlk boyama (FCP) hızlı (< 1,5 sn), harita KULLANILABİLİR an çok geç (> 8 sn) — kullanıcının "uzun sürüyor" dediği şey ikincisi | aradaki fark < 3 sn çıkarsa |
| Ö6 | (a) Douglas–Peucker: 3 ondalık (≈110 m) koordinatta gerçek yağ düğüm SAYISINDADIR, basamakta değil; ≈500 m toleransla `donemler.js` >= %50 küçülür ve sapma < 1 km kalır | örnek dosyada küçülme < %30 çıkarsa |
| Ö7 | (b) Devre göre parçalama en büyük tek kazançtır: tek bir gün için gereken geometri toplamın %5'inden azdır | görünen dilim toplamın %20'sinden büyükse |

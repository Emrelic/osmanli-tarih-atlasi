# Üç skala puanları — hangi madde notlandı, hangisi notlanmadı (10 Kasım 2026)

Emre (10 Kasım): "hangi maddeleri notladığımızı hangilerini notlamadığımızın skalasını da tutalım; yeni hafta başlayınca önceki notlananları da gözden geçirmek gerekir."

## Ayrım (veride)
- **`puan_s:"v2"` VAR** (2.921 madde): `bolge_onem` + o gün boş olan `onem`/`dunya` üç-skala rubriğiyle (`RUBRIK-3-SKALA.md`) yazıldı. İki bağımsız Sonnet puanlayıcı; ayrılıkta üçüncü puanlayıcının medyanı. Ölçüm: tam uyum onem %76-86, bolge_onem %71-86, dunya %84-94 (partiye göre); ±1 uyum %100.
- **`puan_s` YOK** (15.375 madde): `onem`/`dunya` ESKİ ölçekle (dosya başına farklı), `bolge_onem` yok.

Sayım (10 Kasım, origin/main + bu dal): 18.296 madde · v2 2.921 · v2 dağılımı onem 1:101 2:628 3:1326 4:737 5:129 · bolge_onem 1:339 2:958 3:1056 4:472 5:96 · dunya 1:1822 2:858 3:212 4:25 5:4.

## Gelecek hafta yapılacak gözden geçirme (öneri)
1. **v2'nin kendisi:** ±1 ayrılan 1.154 madde medyanla yazıldı; en çok 4/5 ve 2/3 sınırında. Önce `onem=5` (129 madde) ve `bolge_onem=5` (96 madde) elle/ikinci kez gözden geçir.
2. **Eski ölçek:** dosya başına eski `onem`/`dunya` ortalamasını v2 ortalamasıyla karşılaştır (`puan_s` yok maddelerde); sapması büyük dosyalara yeniden puan (v2) ver; yeniden puanlanan maddeye `puan_s:"v2"` yazılır.
3. **`bolge_onem` kapsamı:** 15.375 maddede yok. Önce `kapsam:"ic"` ve `bolge≥3` olanlar (siteyi en çok etkileyen) için.
4. **Rubrik sürümü değişirse** `puan_s` değeri `v3` olur; eski v2 maddeleri hangi rubrikle yazıldığı bellidir.

## Listeleme (tek satır)
`puan_s` olmayan maddeleri bulmak için `data/olaylar*.js` ve `data/kronoloji*.js` içinde `puan_s:"v2"` taşımayanlar; araç: `denetim/KRON-ALAN-1108/` altındaki sayım betiği yok, `node` ile `window.*` dizilerini yükleyip `m.puan_s` süzmek yeter (örnek: `scratchpad` dışında kalıcı betik gerekirse `arac/` altına eklenir).

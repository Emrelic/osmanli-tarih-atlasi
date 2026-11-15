# YERLESIMLER.JS + EŞLİ KAYITLAR KUYRUĞU — IBERYA 1115c (KASA uygular; hepsi BİR PAKET, ayrı uygulanırsa Değişmez 2 kırılır)

## K1 — Sevilla 1248: Muvahhid→Kastilya 1248-01-01 → 1248-11-23 (hakemli, bkz. BOLGE-IBERYA-2-kronoloji-1115c.md)
Kaynak: García Sanjuán, *Hispania* 77/255 (2017) 11-41, doi 10.3989/hispania.2017.001 — Estoria de España cap. 1123 + İbnü'l-Abbâr (Tekmile) «5 Şa'bân 646» = 23 Kasım 1248; giriş 22 Aralık 1248 (Estoria cap. 1125), anahtar/tahliye 13 Ocak 1249 (İbn İzârî/İbn Haldûn, 27 Ramazan 646) alternatif; TDV `isbiliye` yalnız 646/1248.

1. `data/yerlesimler.js` satır 1218 (Sevilla): `{f:"1148-01-01",t:"1248-01-01",d:"muvahhidler"` → `t:"1248-11-23"`; `{f:"1248-01-01",t:"1281-01-01",d:"kastilya"` → `f:"1248-11-23"`; `kesinlik:{t:"gun"}` / `{f:"gun"}` yaz; kaynak: «García Sanjuán 2017, Hispania 77/255, 11-41: alcázar teslimi 23.XI.1248 (Estoria de España cap. 1123; İbnü'l-Abbâr 5 Şa'bân 646)».
2. `data/olaylar_ortacag_bekleyen_acik.js` satır 170 ("III. Fernando İşbîliye'yi ..."): `"t": "1248-04-26", "kesinlik": "yil"` → `"t": "1248-11-23", "kesinlik": "gun"`; `ic_not_d`'ye hakem kaydı (kaynaklar, 22 Aralık / 13 Ocak alternatifleri, gerekçe).
3. `data/olay_taraf.js` satır 1727: anahtar `"1248-04-26|III. Fernando İşbîliye'yi on sekiz aylık kuşatmadan sonra aldı"` → `"1248-11-23|..."`.
4. Çeviri anahtarları `<DIZI>:1248-04-26:<idx>` (yalnız bu maddenin idx'i; Merînî Fas maddesinin 1248-04-26 anahtarına DOKUNMA): `ceviri_{ar,de,en,es}_olay_*.js` (grep'te ar_06, de_05, en_04, es_05; fr/pt/ru dosyalarında bu tarih yok) → `1248-11-23`. Madde metni (b) DEĞİŞMİYOR, hash bayatlamaz.
5. Değişmez 2: pencere kırılması (1248-11-23) ile olay (1248-11-23) aynı gün; eski 1248-01-01 kırılmasını destekleyen madde (devletler.js muvahhidler 1248-01-01 Ömer el-Murtazâ / Merînî maddeleri) başka yerleşimleri kapsar, etkilenmez — yine de uygularken `denetle` D2 ölç.
6. Aynı sınırda Sevilla ile aynı sahiplik zincirini kullanan komşu yerleşim yoksa başka pencere değişmez.

## K2 — Kurtuba 1236 (İŞLEM YOK, bilgi)
Akademik gün kaynağı bulunamadı; atlas 1236-01-01 kalır. Sonraki tur: Julio González (Repartimiento de Córdoba) / Manzano Moreno / DBE-RAH «Fernando III» ile gün aranabilir. Yaygın popüler gün 29.VI.1236 yazılmaz.

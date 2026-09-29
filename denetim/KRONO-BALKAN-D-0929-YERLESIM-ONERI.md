# KRONO-BALKAN-D-0929 — yerleşim penceresi önerileri (ORTAK §1 (b))

> `data/yerlesimler*.js`e DOKUNULMADI. Satırlar `girdi.yukle()` çıktısından birebir alındı (29 Eylül 2026).
> Hepsi petek koşusu ister. Öncelik: 🔴 kaynakla ölçülmüş gün farkı · 🟡 kaynak yalnız yıl/ay veriyor.

## 🔴 ① Limni — işgal penceresi Jülyen günüyle açılıyor
`data/yerlesimler.js` · `Limni`
```
mevcut : isg [{"f": "1912-10-08", "t": "1923-07-24", "d": "yunanistan", "kaynak": "oniki-ada"}]
öneri  : isg [{"f": "1912-10-21", "t": "1923-07-24", "d": "yunanistan", "kaynak": "TDV limni (F. Emecen 2003): 'Limni 21 Ekim 1912'de Yunanlılar tarafından işgal edildi'"}]
```
Gerekçe: 8 Ekim 1912 Jülyen = 21 Ekim Gregoryen; atlas Gregoryen kullanır. 8 Ekim ayrıca
Karadağ'ın savaş ilanının günüdür (TDV Bulgaristan) — savaş o gün yeni başlıyordu.
`kaynak:"oniki-ada"` da yanlış: Limni Onikiada değildir.
Kronoloji maddesi hazır: `kronoloji_cok_yunanistan.js` 1912-10-21 (harita 13 gün farkla da ±30 içinde).

## 🔴 ② Taşoz
`data/yerlesimler.js` · `Taşoz`
```
mevcut : isg [{"f": "1912-10-18", "t": "1923-07-24", "d": "yunanistan", "kaynak": "oniki-ada"}]
öneri  : isg [{"f": "1912-10-30", "t": "1923-07-24", "d": "yunanistan", "kaynak": "TDV tasoz (S. Kızıltoprak 2011): 'Balkan Savaşı'nın başında 30 Ekim 1912'de Yunanistan Taşoz'u Semadirek ile birlikte işgal etti'"}]
```
18 Ekim Jülyen = 31 Ekim Gregoryen; TDV 30 Ekim diyor (1 gün). TDV esas alındı.

## 🔴 ③ Semadirek
`data/yerlesimler.js` · `Semadirek`
```
mevcut : isg [{"f": "1912-10-19", "t": "1923-07-24", "d": "yunanistan", "kaynak": "oniki-ada"}]
öneri  : isg [{"f": "1912-11-01", "t": "1923-07-24", "d": "yunanistan", "kaynak": "TDV semadirek (İ. Şahin 2009): '1 Kasım 1912'de Yunanistan tarafından işgal edildi'"}]
```
19 Ekim Jülyen = 1 Kasım Gregoryen. ⚠️ TDV kendi içinde çelişir: Taşoz maddesi Semadirek'i de
30 Ekim'de sayar. Adanın kendi maddesi (Semadirek) esas alındı.

## 🟡 ④ Bozbaba (Ay Strati) · Bozcaada — kaynaklı gün BULUNAMADI
- `Bozbaba (Ay Strati)` isg `f:"1912-10-08"` — Limni ile aynı Jülyen günü. TDV'de ayrı maddesi
  yok; Limni ile birlikte düzeltilmesi TUTARLI olur ama kaynağı yok → `bulunamadı`.
- `Bozcaada` s `{"f":"1912-10-07","t":"1913-11-01","d":"yunanistan"}` — TDV «Bozcaada» yalnız
  "1912'de Rumlar'ın eline geçti" der. 7 Ekim, savaşın başladığı 8 Ekim'den (TDV Semadirek)
  ÖNCE — bu gün kesin yanlış. Ayrıca bu bir işgaldi ve 1913'te geri döndü: `s:` değil `isg:`
  olmalı mı? Hüküm sende; kaynaklı gün `bulunamadı`.

## 🟡 ⑤ Mora (Tripoliçe) — Yunan penceresi şehrin düşüşünden önce açılıyor
`data/yerlesimler.js` · `Mora (Tripoliçe)`
```
mevcut : s  ... {"f": "1821-03-25", "t": "1923-10-29", "d": "yunanistan"}
         v  [{"f": "1825-06-22", "t": "1828-10-05", "kid": "misir-kavalali", ...}]
```
1821-03-25 isyanın başlangıcıdır; şehir o gün hâlâ Osmanlı elindeydi. TDV «Tripoliçe» ve «Mora»
isyancıların şehri "Ekim 1822"de aldığını yazar (yaygın anlatım 1821 sonbaharı — DUZELTME D).
Gün: `bulunamadı`. Öneri yalnız yön: `yunanistan` penceresinin başı şehrin düşüş gününe
çekilmeli; 1825-06-22 Mısır `v:` penceresinin günü de kaynağında yok (TDV "1825 Haziranında").

## 🟡 ⑥ Vidin — 1365-1369 Macar idaresi haritada yok (düşük öncelik)
`data/yerlesimler.js` · `Vidin`
```
mevcut : s [{"f": "1281-01-01", "t": "1396-10-01", "d": "bulgaristan"}, ...]
öneri  : s [{"f": "1281-01-01", "t": "1365-01-01", "d": "bulgaristan"},
            {"f": "1365-01-01", "t": "1369-01-01", "d": "macaristan", "kaynak": "TDV vidin (M. Kiel 2013): 1365'te Macarlar Vidin'i aldı, Macar vilayeti (Banat) yaptı; 1369'da geri alındı — TDV YIL verir"},
            {"f": "1369-01-01", "t": "1396-10-01", "d": "bulgaristan"}, ...]
```
⚠️ İki uç da yıl-temsilî (`01-01`). Kronoloji maddeleri hazır (`kronoloji_cok_bulgaristan.js`
1365, 1369). `macaristan` boya anahtarı `arac/renkler.py:587`de VAR (ölçüldü).
Yıl hassasiyetinde pencere istemiyorsan bu öneriyi düşür; kronoloji maddeleri tek başına durur.

## Ölçülüp ÖNERİLMEYENLER
- **Atina**: `s yunanistan 1821-03-25→` üstüne `d 1827-06-05→1833-03-31` Osmanlı penceresi biniyor
  (Osmanlı kazanır) — TDV «Atina» ile kabaca uyumlu. Dokunulmadı.
- **Bulgaristan'ın üç hukukî hâli** (şartname ②) haritada AYRI görünüyor, ölçüldü:
  `bulgaristan-prensligi` `v:` 1878-07-13 (Vidin, Tırnova, Varna, Şumnu, Silistre, Rusçuk) ·
  `sarki-rumeli` `v:` 1878-07-13→1885-09-18 (Eski Zağra, Tatarpazarcığı, Filibe) ·
  `bulgaristan-kralligi` `s:` 1908-10-05. Öneri GEREKMİYOR.
  ⚠️ Yalnız bir gözlem: 1878'de prenslik bölgesindeki bazı yerleşimler `v:` (tâbi), bazıları
  (İhtiman, Niğbolu, Plevne) `s:` ile boyanıyor — aynı hukukî hâl iki farklı katmanda. Kasıtlı
  olabilir; ölçülmedi.

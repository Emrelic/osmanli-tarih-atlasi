# KRONO-ATLANTIK-A-0929 — KÜNYE önerileri ve kusurları

`data/devletler.js`e DOKUNULMADI. M-5416 kural (3): madde önerilen id ile yazıldı; künye inince kendiliğinden bağlanır.

## 1. Önerilen yeni künyeler (maddesi YAZILDI, id bekliyor)

| önerilen id | ad | f | t | sınıf (D205) | kullanan madde | kaynak |
|---|---|---|---|---|---|---|
| `mayorka` | Mayorka Krallığı (Jaume I'in vasiyetiyle ayrılan taç: Mayorka, Menorka [1287'den], İbiza, Rusiyon, Cerdanya, Montpellier) | 1276-07-27 (I. Jaume'nin ölümü — **doğrulanmadı**, gün için kaynak aranmalı) | 1343-05-25 (IV. Pedro'nun ilhakı) — son kral 1349-10-25 Llucmajor'da öldü | ③ ardıl değil, AYRI polity; bugün toprağı `aragon` boyuyor | `kronoloji_cok_ispanya.js` 1343-05-25 · 1349-10-25 (`devletler:["aragon","mayorka"]`) | Gran Enciclopèdia Catalana, 'Jaume III de Mallorca' · 'regne de Mallorca' |
| `arborea` | Arborea Yargıçlığı (Sardinya) | ~1100 (yıl bile belirsiz — **yazılmamalı**, künye `f` için kaynak aranmalı) | 1420-08-17 (V. Alfonso'ya satış — **doğrulanmadı**) | ayrı polity | `kronoloji_cok_ispanya.js` 1409-06-26 Sanluri | GEC 'batalla de Sanluri' |

⚠️ İki künyenin `f`/`t` günlerinden yalnız 1343-05-25 kaynakla ölçüldü; ötekileri öneri, CLAUDE.md §4 gereği
kaynaksız gün künyeye yazılmamalı.

## 2. Mevcut künyelerde kusur

| künye | kusur | kanıt | öneri |
|---|---|---|---|
| `burgonya` (t 1482-03-27) | Son künye maddesi `1482-03-27 "Arras Antlaşması ile miras … bölündü"` — 27 Mart 1482 Burgonyalı Marie'nin ölümüdür, Arras 23 Aralık 1482'dir (`kronoloji_sinir_avrupa_bati.js` öyle yazar ve künye penceresinin DIŞINDA kalır) | ajan raporu; Marie'nin ölüm günü **doğrulanmadı** | başlık düzeltilmeli ya da `t` Arras'a genişletilmeli (D205 ②) — sahibi karar verir |
| `aragon` | künyenin kendi `1282-01-01` Sicilya maddesi yer tutucu | GEC: III. Pedro'nun Trapani çıkarması 1282-08-30 | gün 1282-08-30 |
| `fransa` / `fransa-cumhuriyet` | `KRONOLOJI_FRANSA`'nın 92 maddesi yanlış künyede | `-DUZELTME.md §3` | COK'a taşıma |
| `ispanya` | `KRONOLOJI_ISPANYA`'nın 7 maddesi 1479 öncesi | `-DUZELTME.md §3` | kastilya/aragon/portekiz |
| (yok) `osmanli` | Osmanlı çekirdek katmandır, künyesi yok → Osmanlı ile ilişki maddeleri (1396 Niğbolu hazırlığı, 1454 Sülün Ziyafeti, 1487 Boabdil'in II. Bayezid'e mektubu) yalnız karşı tarafın künyesine bağlandı | — | bilgi; ek iş yok |
| `navarra` | haritada o günlerde **tek** yerleşim (Pamplona) → `odak_kimlik:["navarra"]` kutusu kurulamıyor (odak_olc: "≥2 şart") | `odak_olc.py` | yerleşim yoğunluğu (bilgi) — maddeler `yer_id:"Pamplona"` ile odaklandı |
| (araç) `KUNYE-DUNYA-0929` | KUNYE-DUNYA'nın `dosya_pencere_disi` tablosu `kronoloji_fransa.js`i 0 gösteriyor, gerçek 92 — muhtemel sebep üç haneli yıl (`987-01-01`) dizgi karşılaştırması (pad yok) | `ARAC-KRONO-ATLANTIK-A-0929-DENETLE.js` pad'siz 184/184, pad'li 92 | KUNYE-DUNYA aracına `pad()` (CLAUDE.md §3.5) |

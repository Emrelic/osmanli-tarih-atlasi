# GLM-2 · MUKERRER-NOKTA — yakın mükerrer yerleşim taraması

- Betik: `glm/mukerrer.py` · JSON: `glm/MUKERRER-NOKTA.json`
- Evren: `arac/girdi.py` `yukle()` → **3921** nokta · 87 girdi dosyası
- Mesafe: resmi `girdi.km` · eşik `d < 3 km` (aynı/benzer ad) ve `d < 1 km` (farklı ad)
- Doğrulama: benim taramam 3 çift = resmi `yakin_ciftler(Y,3.0)` 3 çift → **tutar ✓**

## Özet

| ölçüm | değer |
|---|---|
| küme 1 — aynı/benzer ad < 3 km | **0** |
| küme 2 — farklı ad < 1 km | **0** |
| küme 1 ad sınıfı | {} |
| küme 1 öneri | {} |
| küme 2 öneri | {} |
| küme 1 s-çatışması | {} |
| küme 1 de jure çatışma | {} |
| küme 2 s-çatışması | {} |
| küme 2 de jure çatışma | {} |
| küme 1 dosya ilişkisi | {} |
| küme 2 dosya ilişkisi | {} |
| `ikiz` beyanı taşıyan nokta | 4 |
| benzerlik sınıfı selftest | 5/5 geçti ✓ |

## Küme kapılarından geçemeyen yakın çiftler (< 3 km, 3 çift)

| mesafe km | A (ad · dosya) | B (ad · dosya) | ad sınıfı | ikiz beyanı | kapsam dışı sebebi |
|---|---|---|---|---|---|
| 1,539 | Anadolu Hisarı · yerlesimler.js | Rumeli Hisarı · yerlesimler.js | FARKLI | karsilikli-kaynakli | farklı ad + 1.539 km: küme2 eşiği 1 km'nin üzerinde |
| 1,569 | Budin · yerlesimler.js | Peşte · yerlesimler.js | FARKLI | karsilikli-kaynakli | farklı ad + 1.569 km: küme2 eşiği 1 km'nin üzerinde |
| 2,96 | Dakar · yerlesimler_afrika2.js | Gore (Gorée) · yerlesimler_afrika2.js | FARKLI | yok | farklı ad + 2.960 km: küme2 eşiği 1 km'nin üzerinde |

## Ad-uzayı bağlamı (herhangi mesafede)

- norm'u tam eşit çift: **1** (en yakın 9272,451 km; 3 km altı: 0)
- parantez-çekirdeği eşit (tam ad farklı) çift: **44** (en yakın 80,5 km; 3 km altı: 0)
- Bu iki sayı 3 km altında 0 olduğundan küme 1 boş: aynı adı taşıyan noktalar hep 3 km'den uzak ayrı yerleşimler; tam listeler JSON'da (`ad_uzayi_baglami`).

## Küme 1 — aynı/benzer ad, < 3 km (0 çift)

| mesafe km | A (ad · dosya) | B (ad · dosya) | ad sınıfı | öneri | s-çatışma | de jure | not |
|---|---|---|---|---|---|---|---|

## Küme 2 — farklı ad, < 1 km (0 çift)

| mesafe km | A (ad · dosya) | B (ad · dosya) | ad sınıfı | öneri | s-çatışma | de jure | not |
|---|---|---|---|---|---|---|---|


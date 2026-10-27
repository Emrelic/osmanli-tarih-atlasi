# GLM-B · EK OKUMA BİÇİM DENETİMİ — data/*ekokuma*.js

*Ölçüm: `glm/glmb_ekokuma.py` (node vm yükleyici `glm/_glmb_yukle.js`) · 2026-09-29 12:01:01 · ham: `glm/GLMB-EKOKUMA-0929.json`.*
*Koordinatör ön ölçümü 72 dosya / 728 kart demişti; ölçülen **72 dosya / 777 kart** — fark beyan.*

## Özet

| ölçüm | değer |
|---|---|
| dosya | 72 |
| kart | **777** |
| tanımlanan global | 70 · global'siz dosya: `data/ekokuma_bag_oneri.js`, `data/ekokuma_baslik_oneri.js` · aynı globali tanımlayan: 0 |
| kesinlik farklı değeri | **10** (+ eksik 4) |
| tür farklı değeri | **15** (+ eksik 0) |
| tek kullanımlık kesinlik/tür | 2 / 2 |
| gorsel dolu + gorsel_kaynak YOK | **0** |
| mükerrer id | **1** |

## ① kesinlik alanı — değerler

| değer | adet | dosya sayısı | öneri |
|---|---|---|---|
| `kesin` | 540 | 63 |  |
| `tartismali` | 196 | 47 | birleştirme adayı ↔ `tartışmalı` |
| `rivayet` | 14 | 4 |  |
| `tartışmalı` | 10 | 2 | birleştirme adayı ↔ `tartismali` |
| `kaynakli` | 5 | 1 |  |
| `iddia` | 2 | 1 |  |
| `supheli` | 2 | 1 |  |
| `yorum` | 2 | 1 |  |
| `fail_belirsiz` | 1 | 1 | TEK KULLANIMLIK — sözlük kayması adayı |
| `sirevrensel_belirsiz` | 1 | 1 | TEK KULLANIMLIK — sözlük kayması adayı |

*kesinlik ALANI OLMAYAN 4 kart:* yunan-1821-sebepler (data/ekokuma_yunan.js); yunan-1821-destekciler (data/ekokuma_yunan.js); filhelenizm-bati-yunan-sevgisi (data/ekokuma_yunan.js); yunan-milli-anlati-1821 (data/ekokuma_yunan.js)

## ② tür alanı — değerler

| değer | adet | dosya sayısı | öneri |
|---|---|---|---|
| `sebep-sonuc` | 211 | 38 |  |
| `tartisma` | 203 | 42 |  |
| `teknik-bilimsel` | 103 | 17 |  |
| `kimdir` | 61 | 19 |  |
| `magazin` | 57 | 8 |  |
| `savas-hikayesi` | 51 | 13 |  |
| `karsi-anlati` | 34 | 7 |  |
| `antlasma` | 26 | 5 |  |
| `dis-yankilar` | 14 | 7 |  |
| `edebiyat` | 7 | 1 |  |
| `bu-ulke-neden-var` | 4 | 1 |  |
| `kahramanlik` | 2 | 2 |  |
| `menkibeler` | 2 | 2 |  |
| `diplomasi` | 1 | 1 | TEK KULLANIMLIK — sözlük kayması adayı |
| `sok-haberler` | 1 | 1 | TEK KULLANIMLIK — sözlük kayması adayı |

### ②b `tur` ↔ app.js `EKOKUMA_TUR` kayıtlı evren çaprazı

*app.js:10731: yükleyici tanımadığı `tur`u SESSİZCE geçer → kayıt dışı tür = GÖRÜNMEZ kart.*

- Kayıtlı evren: 15 tür · ölçülen: 15 değer
- 🔴 **KAYIT DIŞI:** `diplomasi` (1 kart — örnek `p76g-bagimsizlik-1908-osmanli-tepkisi`, data/ekokuma_p76g.js) → bu kartlar hiç görünmez
- Kayıtlı ama ekokuma dosyalarında kartı yok: `merak` (kaynağı `_merakHavuz()` olabilir — hüküm koordinatörün)

## ④ gorsel dolu ama gorsel_kaynak yok/boş

· 0 kart.

## ⑤ Zorunlu alan eksikleri (id · tur · kesinlik · kaynak · metin)

| alan | eksik kart | örnekler |
|---|---|---|
| `id` | **0** |  |
| `tur` | **0** |  |
| `kesinlik` | **4** | yunan-1821-sebepler (data/ekokuma_yunan.js); yunan-1821-destekciler (data/ekokuma_yunan.js); filhelenizm-bati-yunan-sevgisi (data/ekokuma_yunan.js); yunan-milli-anlati-1821 (data/ekokuma_yunan.js) |
| `kaynak` | **0** |  |
| `metin` | **46** | savas-bursa-1326 (data/ekokuma_dalga2.js); savas-trabzon-1461 (data/ekokuma_dalga2.js); savas-otlukbeli-1473 (data/ekokuma_dalga2.js); savas-rodos-1522 (data/ekokuma_dalga2.js); deniz-ebukir-1798 (data/ekokuma_deniz.js); savas-canakkale-bozgunu-1656 (data/ekokuma_dunya.js) … |

## ⑥ Mükerrer id

- `kimdir-kuyucu-murad-pasa` → `data/ekokuma_celali.js`, `data/ekokuma_vezir.js`

## Yan ölçüm — alan envanteri (hangi alan kaç kartta)

| alan | kart |
|---|---|
| `id` | 777 |
| `tur` | 777 |
| `olay` | 777 |
| `kaynak` | 777 |
| `kesinlik` | 773 |
| `metin` | 731 |
| `kisa` | 687 |
| `baslik` | 351 |
| `ic_not` | 288 |
| `bag` | 267 |
| `sonuc` | 214 |
| `zincir` | 200 |
| `sebep` | 168 |
| `not` | 168 |
| `ad` | 138 |
| `gorsel` | 84 |
| `gorsel_kaynak` | 83 |
| `surec` | 78 |
| `hukumler` | 76 |
| `tarih_metin` | 46 |
| `yer` | 46 |
| `taraflar` | 46 |
| `oncesi` | 46 |
| `akis` | 46 |
| `tartisma` | 46 |
| `ic_not_kaynak` | 45 |
| `t` | 42 |
| `kisi` | 41 |
| `soru` | 41 |
| `ic_not_metin` | 13 |
| `ic_not_not` | 7 |
| `eser` | 7 |
| `sanatci` | 7 |
| `alinti` | 7 |
| `ozet` | 6 |
| `ic_not_tartisma` | 5 |
| `ic_not_bag` | 4 |
| `satirlar` | 3 |
| `ic_not_akis` | 2 |
| `diplomatlar` | 1 |

## Yöntem

- Kartlar node `vm` bağlamında dosyaları GERÇEKTEN koşturarak alındı (dizgi çözümlemesi yok); ham dump `glm/_glmb_kartlar.json`.
- 🔴 Hangi yazımın doğru olduğu KARARA BAĞLANMADI; `birleştirme adayı` işareti `denetim/ARAC-NORMAL-0903.py norm()` eşitliğine dayanır (ör. `tartismali` ↔ `tartışmalı`).
- `metin` alanı 731 kartta var, 46 kartta yok — bu kartlar `kisa`/`soru` biçimli olabilir; zorunluluk hükmü koordinatörün.
# VERI-MS1-1281 · A dilimi — ölçüm (20 Ekim 2026)

*origin/main `d42f05169`, ayrı worktree, salt okunur. Araç: `py` ile `girdi.yukle()` + `girdi.oku_devletler()` + `renkler.BOYALAR` (çıktı bu belgede; betik denetim/ARAC-VERI-MS1-A-OLCUM-1020.py). Bir önceki fotoğraf: `denetim/ONCE1281-ENVANTER-1018.md` (18 Ekim; yerleşim kaynak sınıfı bölge×yüzyıl matrisleri orada).*

🔴 **DURUM.md "1281 öncesi hiç yok" cümlesi BAYAT.** Ölçülen: 1281 öncesi kronoloji maddesi 1000–1280: **1504**, MS 1–999: **1350**, MÖ: 0 (olaylar*/kronoloji* dosyaları, `t` yılı). Yerleşim zincirleri kısmen uzamış (aşağıda). Hâlâ doğru olan: 1281-öncesi yerleşim **zincirleri** ince ve motor çıktısı HAVVA koşusuna kadar haritada görünmez.

## Yerleşim (girdi.yukle, 98 dosya)
| Ölçü | Sayı |
|---|---|
| Kayıt (tüm) | 4706 |
| `tur:bolge` dışı (gerçek nokta) | 4473 |
| 1281'de var (`kur`/`bit` penceresi, tur≠bolge) | **2715** |
| … zincir başı (`min f` of `s/d/v`) tam **1281** (hiç uzamamış) | **2458** (%90,5) |
| … zincir başı **1001–1280** (kaynaklı kısmen uzamış) | **158** |
| … zincir başı **≤1000** (1000'e / öncesine uzamış; `f=1000-01-01` UFUK işareti dahil) | **69** |
| … hiç `s/d/v` yok (dolgu/ada) | 30 |
| `kur:` 1281 öncesi | 31 |

Bölgeye göre (1281'de var → zinciri 1281 öncesine uzayan): anadolu 88→34 · balkanlar 254→30 · orta-avrupa 224→23 · italya 128→16 · misir-sudan 186→16 · kuzey-afrika 140→14 · orta-asya 61→14 · dogu-asya 148→13 · bati-avrupa 116→13 · iberya 62→13 · iran 183→12 · mezopotamya 8→8 · kafkasya 28→4 · guneydogu-asya 184→4 · suriye-filistin 6→3 · arabistan 46→3 · guney-asya 96→2 · kuzey-avrupa 86→2 · bati-afrika 44→2 · okyanusya 4→1 · **sıfır:** dogu-afrika 164 · sibirya-bozkir 124 · kuzey-amerika 121 · dogu-avrupa 91 · guney-amerika 37 · orta-afrika 26 · orta-amerika 11+11 · guney-afrika 8.

**Kaynaklı geriye uzatma havuzu** (`ONCE1281-ENVANTER-1018`, kronoloji maddesi ≤15 km / ad eşleşmesi): güçlü 249 + zayıf 247 + tdv-aday 45 = **541** nokta; kalan ~1996 nokta (`yok`) için sıfırdan kaynak araştırması gerekir. Bunlardan ONCE1281-GERIYE (18 Ekim) 23'ünü uzattı.

## Devlet künyesi (`devletler.js`)
| Ölçü | Sayı |
|---|---|
| Künye (tüm) | 1829 |
| f < 1281 | 715 |
| 1000–1281 arası yaşayan (f<1281 ∧ t>1000) | **403** — bunlardan `BOYALAR`'da (kendisi ya da `harita:`) tanımlı **279** (%69) |
| 1000'e uzanan (f ≤ 1000 ∧ t > 1000) | 168 |
| MS 1–1000 arası yaşayan (f<1000 ∧ t>1) | **304** — `BOYALAR`'da tanımlı yalnız **75** (%25) |
| f ∈ [1000,1281) | 281 |
| f = 1281-01-01 (epok damgalı, gerçek doğuşu öncesi olabilir) | 113 |
| f ≤ 0 ∧ t > 0 (MS 1'i kesen) | 36 |

⇒ 1000–1281 için künye zeminin %69'u boyalı; **124 künyenin boyası yok** — bu künyelerle yazılan `s:` dönemi haritada delik açar. MS 1–1000 için boyasız 229 künye var (C dilimi öncesi `renkler.py` işi; `renkler.py` motor-dondurma listesinde → bu oturum dokunmaz, MÖ-MOTOR/HAVVA kararı).

## Kronoloji (olaylar* + kronoloji*)
12466 madde (t yılı okunan). 1281 öncesi 2854: 1000–1280 **1504** · 1–999 **1350** · MÖ 0. Dosya dağılımı 1000–1280 (başlıca): `kronoloji_cok_once1281_avrupa` 272 · `_anadolu` 175 · `_iran` 170 · `_ortadogu` 171 · `_avrupa2` 113 · `_dogu_asya` 72 · `olaylar_t5_1000a/b` 119 · `kronoloji_anadolu` 134. (MÖ dosyaları farklı önek; ONCE1281-ENVANTER-1018 MÖ'yi ayrıca 819 sayıyor.)

## Okuma
1. 1281 öncesi evrenin darboğazı **yerleşim zinciridir**, kronoloji değil (1504 madde / 158+69 uzamış zincir).
2. En büyük sıfır bölgeler: doğu-afrika, sibirya-bozkır, kuzey-amerika, doğu-avrupa (toplam ~500 nokta); kaynak sınıfı `yok`.
3. 1000–1281 künye boyası eksikliği (124) yeni zincir yazımının önündeki ikinci engel.

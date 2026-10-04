# LAB-ISG-DENETIM-1004 — `isg:` partisinin YAZIM ÖNCESİ denetimi

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (Emre `isg:` partisini onayladı; satırlar
> `denetim/KASA-ISG-1920-1004.md`den). Denetleyici: LAB IRTIBAT.
> **Yalnız ölçüm.** Veriye yazılmadı, öneri yok. Ölçüm ortamı `main` = `fb11565f`,
> `girdi.yukle()` (93 girdi dosyası, 4298 yerleşim), `renkler.BOYALAR` (608 anahtar),
> `girdi.oku_devletler()` (895 künye). Betik: oturum karalama alanında `isg_ist.py`.

Dört soru (koordinatörün):
① o kayıtta o aralıkta ZATEN `isg:`/`s:`/`d:` var mı · ② aralık komşu dönemlerle ÇAKIŞIYOR mu
· ③ ±30 gün kronoloji maddesi VAR mı (Değişmez 2) · ④ `isg:` kimliği BOYALAR'da mı

---

## Satır 1 — İstanbul · İtilaf · 1918-11-13 → 1923-10-02

**Kayıt:** `data/yerlesimler.js:333`, `ad:"İstanbul"` (adıyla tek kayıt), 41.008 / 28.980:
```
s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}]
d:[{f:"1453-05-29",t:"1920-04-23",y:"kusatma"}]
isg: YOK
```

| soru | ölçüm | sonuç |
|---|---|---|
| ① mevcut dönem | `isg:` **yok** · aralıkla kesişen 2 dönem: `d:` Osmanlı 1453-05-29→**1920-04-23** · `s:tbmm-turkiye` **1920-04-23**→1923-10-29 | `isg:` mükerreri **YOK** |
| ② çakışma | `isg:` katmanında başka dönem yok ⇒ kategori-içi çakışma/ters/sıfır uzunluk **0**. `isg:` alttaki `d:`/`s:` ile kesişir — katmanın tanımı bu (örnek: `yerlesimler.js:1631` İstanbulya `isg:italya` 1912-05-12→1923-07-24, alttaki `d:` 1537→1923-07-24 ile örtüşüyor) | çakışma **YOK**. ⚠️ İşgal, `d:`→`s:tbmm-turkiye` kırılmasını (1920-04-23) **içine alıyor** |
| ③ ±30 gün madde | **başlangıç 1918-11-13:** `olaylar_ek5.js:450` t:"1918-11-13" (**+0 g**) "İtilâf donanmasının İstanbul önlerine gelişi ve şehrin fiilî işgali", `yer_id:"İstanbul"`, `kaynak:"milli-mucadele"` — Değişmez 2 evreninde ✓. Kuyrukta ek: `kronoloji_cok_senkron_0930.js:70` 1918-10-30 Mondros (−14 g, kuyruk, evren dışı). **bitiş 1923-10-02:** ±30 günde `olaylar*`+`kronoloji*` içinde 5 madde var, **hiçbiri İstanbul/işgal/tahliye değil** (Etiyopya MC 09-28 · Nepal 10-29 · İran 10-28 · Primo de Rivera 09-13 · Tannu Tuva `olaylar_ek8.js:341` 10-12) | başlangıç **VAR** · bitiş **YOK** |
| ④ BOYALAR | `itilaf` · `itilaf-devletleri` **YOK**; BOYALAR'da `itilaf` içeren anahtar **0**; `devletler.js`'te `itilaf` içeren `id` **0**. Var olanlar (bilgi): `ingiltere` · `fransa` · `fransa-cumhuriyet` · `italya` | "İtilaf" kimliği **YOK** ⇒ bu hâliyle yazılırsa boyanmaz (§8) |

**Kaynak notu (ölçüm, hüküm değil):** başlangıç günü KASA tablosunda "(madde)" işaretli —
günün geldiği yer atlasın kendi maddesi (`olaylar_ek5.js:450`). O maddenin `kaynak:` alanı
`milli-mucadele`; KASA aynı külliyattan "13 Kasım 1918" alıntılıyor. TDV `istanbul` ise
"13 **Ekim** 1918" diyor (KASA bunu dizgi hatası olarak bildirmiş, `D211 ⑥`). §4 "atlas
dayanak olamaz" kuralı açısından: gün atlas maddesinden değil `milli-mucadele` cümlesinden
okunmalı — KASA'nın raporunda o cümle var.

**Çevre ölçümü (bilgi — sorulmadı, petek etkisi için):** ≤ 15 km'de üç nokta, üçünde de
`isg:` YOK ve aynı `d:`→`s:tbmm-turkiye` 1920-04-23 kırılması var:
```
 3.4 km  Üsküdar         d: OSM 1413-07-05→1920-04-23 | s:tbmm-turkiye 1920-04-23→1923-10-29
10.7 km  Rumeli Hisarı   d: OSM 1452-08-31→1920-04-23 | s:tbmm-turkiye …
10.9 km  Anadolu Hisarı  d: OSM 1413-07-05→1920-04-23 | s:tbmm-turkiye …
```
Yalnız `İstanbul` kaydına `isg:` yazılırsa bu üç petek işgalsiz kalır (ölçüm; işgalin
kapsamı kaynak sorusudur, LAB'ın değil).

### Satır 1 özeti
```
① mükerrer      YOK
② çakışma       YOK   (isg katmanı boş)
③ ±30 madde     başlangıç VAR (olaylar_ek5:450, +0 g) · bitiş YOK (1923-10-02 ±30'da İstanbul maddesi 0)
④ BOYALAR       "itilaf" kimliği YOK (BOYALAR 0 · devletler.js 0)
```

---

## 🔴 DÜZELTME — Satır 1 ③ için kapının GERÇEK ölçütü (ikinci tur, 4 Ekim)

Birinci turda ③'ü "İstanbul/işgal maddesi var mı" diye ölçtüm ve "bitiş YOK" dedim;
koordinatör bunu "yazılsa Değişmez 2 ihlali açılır" diye okudu. **Kapı bunu sormuyor.**
`denetle.py:5024` → `degismez2(Y_cekirdek, O, ("isg",))`, `yer_sarti` varsayılanı **False**
(`denetle.py:1475-1481`: "`d:`/`v:` ve `isg:` kollarının davranışı BİREBİR aynı kaldı";
yer/taraf şartı yalnız `2s`de). ⇒ `isg:` kırılmasının ±30 gününde `olaylar*` evreninde
**herhangi bir** madde varsa kapı geçer.
```
1923-10-02 ±30, olaylar* evreni: 1 madde — olaylar_ek8.js:341 1923-10-12 (+10 g)
                                 "Tannu Tuva'nın ilk Büyük Kurultayı toplandı"
⇒ Değişmez 2i bu ucu GEÇİRİR — alakasız bir maddeyle. İhlal AÇILMAZ; açılan şey
  §1'in amacının ihlalidir (kronoloji ile harita birbirini doğrulamıyor), kapının değil.
```
Aşağıdaki satırlarda ③ bu yüzden **iki sütunla** ölçüldü: **kapı** (olaylar* ±30, yer
şartsız — `denetle.py` ne der) · **alâka** (o uçtaki olayı/yeri anan madde var mı).

---

## Satır 2-8 — ikinci tur (koordinatörün listesi, 4 Ekim)

**Ortam:** `main` = `0e22a060` · `girdi.yukle()` 4298 yerleşim · BOYALAR 608 · künye 895.
Betik: oturum karalama alanında `isg_7.py` + kapı sayımı. AY hassasiyetli uçta ③ penceresi
ayın 1'inden −30 / ayın son gününden +30 (alâka); kapı sütunu `YYYY-MM-01` ±30 (motorun
okuyacağı değer). ④ künye penceresi `devletler.js` `f`/`t`.

### ④ ortak — işgalci kimlikleri
| işgalci | kimlik | BOYALAR | künye penceresi | `isg:`de kullanım |
|---|---|---|---|---|
| Rus (2 · 4 · 5 · 6) | `rusya` | ✓ | 1547-01-16 → 1917-03-15 ✓ (1827–1879 içinde) | 68 |
| **Osmanlı (3)** | 🔴 **yok** | `osman` içeren anahtar **0** | `osman` içeren künye yalnız `arnavutluk-osmanli` (1537–1912) | Osmanlı'nın `isg:` örneği **0** |
| İtalya (7) | `italya` | ✓ | 1861-03-17 → 1945-09-02 ✓ | 18 |
| Japon (8) | `meiji-japonya` | ✓ | 1868-01-03 → 1945-09-02 ✓ (adı Meiji, pencere 1945'e uzanıyor) | 0 |

🔴 **Satır 3 yapısal:** Osmanlı atlasta `d:` katmanıdır (kimlik değil, katman); `isg:`
bir `d:` kimliği taşır ve Osmanlı'nın işgalci olduğu **hiçbir `isg:` kaydı yok**. Bu
satır için BOYALAR'da/künyede boyanacak kimlik **bulunamadı** — yazım biçimi (`isg:` mi,
`d:` dönemi mi) koordinatör/şema sorusu.

### Satır satır
| # | kayıt (dosya:satır yok — `girdi.yukle` adıyla) | ① kesişen dönem · `isg:` mükerrer | ② aralık içi kırılma · çakışma | ③ kapı f / t (olaylar* ±30) | ③ alâka f / t | 🔴 komşu ≤15 km |
|---|---|---|---|---|---|---|
| **2** Tebriz · Rus · 1827-10 [AY] → 1828-02 [AY] | tek kayıt · `s:kacar` 1794→1923 · `isg:` YOK | kırılma 0 · çakışma YOK | f **1** (Navarin 1827-10-20, alâkasız) · t **1** (Türkmençay 1828-02-22 `olaylar_ek7:211`) | f **0** · t Türkmençay ✓ (madde Revan/Talış'ı anıyor, Tebriz'i ANMIYOR) | **0** |
| **3** Tebriz · Osmanlı · 1918-09-02 → 1918-10 [AY] | aynı kayıt · `s:kacar` · `isg:` YOK | kırılma 0 · çakışma YOK | f **2** (Bakü 09-15 · Şam 10-01, alâkasız) · t **7** | f **0** · t **0** (olaylar*'da 1918 Tebriz maddesi yok) | **0** |
| **4** Edirne · Rus · 1878-01-20 → 1879-03-13 | tek kayıt · `d:` OSM 1413→1913 · `isg:` var: `yunanistan` 1920-07-26→1922-11-10 (aralık DIŞI) ⇒ mükerrer YOK | kırılma 0 · çakışma YOK | f **3** (Edirne Mütarekesi 1878-01-31 +11 g) · t 🔴 **0** | f ✓ `olaylar_ek5:408` · t **0** | **1**: Stérna 14,9 km · `d:` OSM 1413→1913-05-30 · `isg:` YOK |
| **5** Erzurum · Rus · 1829-07-08 → 1829-09-14 | tek kayıt · `d:` OSM 1518→1916 · `isg:` YOK | kırılma 0 · çakışma YOK | f **1** (Silistre teslimi 06-30, alâkasız) · t **2** | f **0** · t ✓ Edirne Antlaşması `olaylar_ek:76` (+0) | **0** |
| **6** Erzurum · Rus · 1878-01-31 → 1878-07-13 | aynı kayıt · `d:` OSM · `isg:` YOK | kırılma 0 · çakışma YOK | f **3** · t **2** | f ✓ Edirne Mütarekesi `olaylar_ek5:408` (+0) · t ✓ Berlin `olaylar.js:174` (+0) — KASA notu: Berlin günü fiilî boşaltma DEĞİL | **0** |
| **7** Tobruk · İtalya · 1911-10-08 → 1912-10-18 | tek kayıt · `d:` OSM 1835→**1912-10-18** · `s:italya` **1912-10-18**→ · `isg:` YOK | kırılma **1912-10-18** = `isg:` bitişi ile `d:`→`s:italya` AYNI gün · çakışma YOK | f **6** · t **6** | f ✓ "Tobruk'a İtalyan çıkarması" `olaylar_ek9:258` (+0) · t ✓ Uşi `olaylar_ek5:434` (+0) | **0** |

📌 Satır 7 bilgi: `isg:italya` 1912-10-18'de biterken aynı gün `s:italya` başlıyor ⇒
bitişte renk DEĞİŞMEZ (işgalci = yeni sahip); görünür kırılma yalnız 1911-10-08'de.

### Ayrı kova — AÇIK UÇLU İŞGAL (Satır 8)
| # | kayıt | ① | ② | ③ kapı / alâka | ④ | komşu |
|---|---|---|---|---|---|---|
| **8** Kuzey Sahalin · Japon · 1920-07 [AY] → UFUK DIŞI | 🔴 **iki** kuzey kaydı: `Aleksandrovsk (Kuzey Sahalin)` 50.9/142.16 ve `Kuzey Sahalin (bölge)` 52.9/142.9 — ikisi de `s:sovyet-rusya` 1917-11-07→1923-10-29, `isg:` YOK. (Üçüncü aday `Korsakov (Güney Sahalin)` `s:meiji-japonya` 1905→ — işgal DIŞI) | aralık içi tek "kırılma" 1923-10-29 = **pencere ucu** (`D210`: ölçüm değil sınır işareti) · çakışma YOK | f kapı **7** (Han Meyselûn · Filistin manda — alâkasız) · alâka **0** (`olaylar*`'da Sahalin/Karafuto maddesi **hiç yok**) · t UFUK DIŞI, aranmadı | `meiji-japonya` ✓ | ≤15 km **0** (iki kuzey kaydı birbirinden ~225 km) |

⚠️ Açık uçlu sınıf: `isg:` `t:` alanı ancak `1923-10-29` (pencere ucu) olabilir; kaynaktaki
bitiş (≤ 1925-05-15) atlasın dışında. ⇒ bitişte ③ sorulamaz, **ölçülemedi** (yok değil).

### Satır 2-8 özeti
```
           ① mükerrer  ② çakışma  ③ kapı f/t   ③ alâka f/t   ④ kimlik            komşu
2 Tebriz     YOK         YOK       ✓ / ✓        ✗ / ~(Revan)   rusya ✓              0
3 Tebriz     YOK         YOK       ✓ / ✓        ✗ / ✗          🔴 OSMANLI YOK       0
4 Edirne     YOK         YOK       ✓ / 🔴✗       ✓ / ✗          rusya ✓              1 (Stérna)
5 Erzurum    YOK         YOK       ✓ / ✓        ✗ / ✓          rusya ✓              0
6 Erzurum    YOK         YOK       ✓ / ✓        ✓ / ✓          rusya ✓              0
7 Tobruk     YOK         YOK       ✓ / ✓        ✓ / ✓          italya ✓             0
8 Sahalin    YOK         YOK       ✓ / UFUK     ✗ / UFUK       meiji-japonya ✓      0 · İKİ kayıt
1 İstanbul   YOK         YOK       ✓ / ✓(Tuva)  ✓ / ✗          🔴 itilaf YOK        3
```
- **Kapıyı (Değişmez 2i) DÜŞÜRECEK uç: yalnız 1** — Satır 4 bitişi 1879-03-13 (olaylar* ±30'da 0 madde).
- **Kapıyı alâkasız maddeyle geçen uç: 6** — 1t · 2f · 3f · 3t · 5f · 8f (+ 2t yarı alâkalı: olay doğru, yer anılmıyor).
- **Dört soruda da temiz ve iki ucu alâkalı: Satır 6 ve 7.**
- Komşu sorusu yalnız 1 (3 nokta) ve 4'te (1 nokta) bir şey buldu; 2/3/5/6/7/8'de ≤15 km nokta yok.

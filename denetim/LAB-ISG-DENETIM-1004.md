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

## Kalan 7 satır

Görev mesajında yalnız Satır 1 verildi. KASA raporunda "İKİ UÇ" kovası **11** satır
(koordinatör "8 yazılabilir" diyor) — hangi 8'inin parti olduğu bana **bildirilmedi** ⇒
kalan satırlar ölçülmedi. Listeyi alınca aynı dört soruyla ölçerim.

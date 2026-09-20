# SINIR-DIS-0070 — sınır boyundaki ışınsal dişler (H-0003 · H-0004)

**Oturum:** SINIR-DIS-0070 (Opus) · **tarih:** 20 Eylül 2026 · **sevk:** DALGA-0070 §1
**Alet:** `denetim/ARAC-SINIR-DIS-0070.py` · **ham ölçüm:** `denetim/OLCUM-SINIR-DIS-0070.json`
**Ölçülen sürüm:** `data/donemler.js` (koşu 14 · yayın r9454) · tarih **1798-07-21**
(Emre'nin iki görüntüsünün künyesindeki gün — "Piramitler Muharebesi ve Kahire'nin
Fransızlarca alınması").

```bash
py denetim/ARAC-SINIR-DIS-0070.py --havuz --care --uyarlamali --dolgu --json denetim/OLCUM-SINIR-DIS-0070.json
```

---

## 0. HÜKÜM (tek cümle)

> **Dişler motorun değil, ÇİZİMİN kusuru: `serbest-hale` + `serbest-cekirdek`
> katmanları, kendi segmentleri 0,07–6 km olan bir hattı 60–80 piksel
> kalınlığında çiziyor (medyan 19×, %85,7'si ≥8×, en kötüsü 1334×). Bu
> kalınlıktaki bir hat, her keskin köşede bisektör boyunca dışarı fırlayan bir
> lob üretir — ekranda güneş ışını. Gövde geometrisinde mızrak YOK (ölçüldü: 0),
> yani "harita yanlış çizilmiş" değil, "doğru geometri yanlış kalemle çizilmiş".**

Bu, 19 Ağustos 2026'da `denetim/BULGULAR-UCGEN-19AGU.md` §5.5'te teşhis edilen
kusurun **kalan yarısıdır**. O oturum çareyi (80 px tavanı) uygulayabildi ama şunu
açıkça yazdı: *"segment/köşe düzeyindeki asıl oransızlığı TAM ÇÖZMÜYOR — o çözüm
`uret_petek.py` tarafında geometri sadeleştirmesi gerektiriyor ve bu oturumun dosyası
DEĞİL."* Emre'nin bugünkü iki görüntüsü tam o kalan artığı gösteriyor. Ve o oturumun
yapamadığı iki ölçüm (**katmanı açıp kapatarak görsel teyit** ve **sadeleştirmenin
denenmesi**) bu oturumda YAPILDI.

---

## 1. Hangi aşama? — dört adayın elemesi

Şartname dört aday sayıyor: çöl tavanı · "noktasız bölge en yakın peteğe emilir" ·
yürüyüş ızgarası · sadeleştirme. **Dördü de dişin kaynağı DEĞİL**, çünkü dişler
gövde geometrisinde yok:

| Ölçüm | Sonuç |
|---|---|
| **① Dolgu geometrisinde mızrak** (PARCALAR, uç açı ≤20°, boy ≥5 km) | K-A: 26 parça → **0 mızrak** · K-B: 21 parça → **0 mızrak** |
| **② Katman söndürme** (tarayıcıda, z6,2, 1798-07-21) | `serbest-hale`+`serbest-cekirdek` KAPALI → **dişler tamamen kayboldu**, kenar sert bir dolgu kenarı oldu |
| **③ Hattı sadeleştirip katmanı AÇIK bırakma** (DP tol 5 km, tarayıcıda) | **dişler kayboldu, sönen hâle YERİNDE kaldı** (1083 köşe → 122) |

②+③ birlikte tek bir şeyi söylüyor: kusur ne veride, ne petek motorunda, ne çöl
tavanında — **hat çiziminde**. ①, gövde dolgusunun temiz olduğunu bağımsız olarak
doğruluyor (dişin "gerçek toprak çıkıntısı" olma ihtimali kapandı).

**Dişin doğduğu yer, kodda:** `arac/uret_petek.py:4419 serbest_kenar()` —
serbest hat `gövde.boundary ∩ boş_bölge` kesişimidir, yani **gövde sınırının
İNCE ölçekli ayrıntısını (kıyıya/nehre yaslanma, Chaikin) aynen devralır**;
buna karşılık `js/app.js:1690-1705` o hattı **KABA ölçekli bir belirsizlikle**
(`u` = 22–187 km) kalınlaştırır. İki ölçek arasında 1–3 mertebe fark var ve
tasarım gereği var. Diş, bu ölçek uyuşmazlığının ekrandaki adı.

---

## 2. Diş sayımı — Emre'nin iki kutusu

Ölçüt (koşudan ÖNCE yazıldı, alette sabit): bir köşe **diş** sayılır ⇔
`dönüş ≥ 25°` **ve** `hâle genişliği / komşu en kısa segment ≥ 8×`.

| Kutu | Görsel | zoom | kutuya düşen hat | **DİŞ** |
|---|---|---|---|---|
| K-A Bağdat–Şam çölü (24,93–34,90N · 36,19–47,06E) | H-0003-1.png | z5,4 | 9 | **171** |
| K-B Mısır–Sina (16,44–23,37N · 30,72–36,80E) | H-0004-1.png | z5,2 | 2 | **50** |

En keskin örnekler (hepsi ham ölçüm JSON'unda):

```
hat   u (km)  hâle    köşe konumu          dönüş   kısa segment  ORAN      LOB
sb 85  110,0  68,5 px (38,413 · 33,000)    29,5°   0,06 px       1142×     35 px = 55 km
sb318  105,9  66,0 px (37,193 · 29,791)    65,0°   0,06 px       1100×     39 px = 63 km
sb 60  133,0  72,1 px (32,813 · 21,781)    55,0°   0,05 px       1381×     41 px = 80 km
sb166  117,3  63,6 px (35,478 · 21,307)   107,8°   0,50 px        127×     54 px = 107 km
sb319  156,7  80,0 px (40,851 · 26,033)    94,7°   0,85 px         95×     59 px = 98 km
```

📌 `sb 60` en saf vaka: **50 metrelik bir segmentin üzerine 72 piksel kalınlık
biniyor** ve köşeden 80 km dışarı fırlıyor.

## 3. Havuzun tamamı — kusur marjinal değil

```
SERBEST havuzu     480 hat · 25 590 segment
segment uzunluğu   min 0,072 km · Q1 2,26 · MEDYAN 4,28 · Q3 6,08 km
                   1 km altı 2 495 segment · 500 m altı 1 312 segment
genişlik/segment   medyan 19,3× · Q3 32,2× · MAX 1333,6×  (z5,4)
                   segmentlerin %85,7'si kendi uzunluğunun ≥8 katı kalınlıkta çiziliyor
yaygınlık (z5,0)   diş üreten DÖNEM 469/579 · diş üreten HAT 436/480 · dişli köşe 8 665
belirsizlik (u)    medyan 57,5 km · max 187,2 km
```

⇒ Bu iki kutuya özgü bir arıza değil: **atlasın 579 döneminin 469'unda** aynı desen
üretiliyor. Emre iki yerde gördü çünkü çölde `u` büyük; ama Anadolu'da da (u≈23 km,
hâle ≈14 px) aynı mekanizma daha küçük dişler üretiyor.

---

## 4. ÇARE ÖNERİLERİ — hepsi ÖLÇÜLDÜ (uygulama ayrı sevk)

`uret_petek.py` DEĞİŞTİRİLMEDİ, motor koşusu YAPILMADI (şartname gereği).

### A — hattı çizmeden önce sadeleştir, `js/app.js` içinde (ÖNERİLEN)
`serbest` kaynağına veri verilirken (app.js:7439 `setData`) hat Douglas–Peucker ile
sadeleştirilir. **Veri değişmez, motor koşusu GEREKMEZ, yayın aynı gün iner.**

| tolerans | K-A diş | K-B diş | en büyük sapma | havuz köşe |
|---|---|---|---|---|
| 1 km | 145 | 41 | ≤1,00 km | 26 070 → 12 259 (−%53) |
| 2 km | 73 | 10 | ≤1,95 km | → 7 775 (−%70) |
| **5 km** | **2** | **0** | **≤4,84 km** | → 3 204 (−%87,7) |
| 10 km | 0 | 0 | ≤9,55 km | → 2 265 (−%91,3) |
| kıskaç(u/10, 1..5 km) | 4 | 0 | ≤4,84 km | → 3 629 (−%86,1) |

**Maliyet:** 26 bin köşelik DP, dönem değişiminde yalnız o dönemin hatlarına
uygulanırsa 1798-07-21'de **1 083 köşe** demek — milisaniye mertebesi (tarayıcıda
denendi, gözle fark edilir gecikme yok). **Bilgi kaybı:** sapma ≤4,84 km, o hattın
kendi belirsizliği 106–157 km iken **%3–5**. Yani hâlenin ANLATTIĞI şeyin altında
kalan bir ayrıntı atılıyor — hâle zaten o ayrıntıyı görünmez kılıyordu.
⚠️ `kıskaç(u/10, 1..5 km)` kuralı dar belirsizlikli hatlarda (Anadolu, u≈23 km)
ayrıntıyı korur; iki kutuda sabit 5 km ile pratik olarak aynı sonucu veriyor.
**Tarayıcıda görsel teyit yapıldı** (z6,2, 1798-07-21): diş gitti, sönen hâle kaldı.

### B — aynı sadeleştirme MOTORDA (`uret_petek.py` `hat_havuza`)
Aynı görsel sonuç + **kalıcı**: `window.SERBEST` havuzu 26 070 → 3 204 köşe
(−%87,7), `data/donemler.js`in SERBEST satırı **406 KB → ~55 KB**.
**Maliyet:** yeni tam koşu (yalnız 1.MURAT başlatır; koşu 14 ölçüsüyle saatler) —
başka bir motor işiyle BİRLİKTE koşulmalı, tek başına bu iş için koşu açmak pahalı.
**Not:** A ve B aynı kuralı uygular; A koşuyu beklemeden bugün çözer, B ileride
dosyayı da küçültür. İkisi çakışmaz (A, B'den sonra zararsız biçimde etkisiz kalır).

### C — piksel tavanını düşürmek (`TAVAN_PX 80` → daha küçük) · ÖNERİLMEZ
| tavan | K-A diş | K-B diş | hâlenin daralması (medyan) |
|---|---|---|---|
| 80 px (bugün) | 171 | 50 | — |
| 48 px | 171 | 50 | K-B −31 km |
| 32 px | 169 | 50 | K-A −5 · K-B −63 km |
| 24 px | 142 | 49 | K-A −18 · K-B −79 km |
| 16 px | 98 | 31 | K-A −31 · K-B −95 km |

⇒ Tavanı yarıya indirmek dişlerin **%17'sini** siliyor ama hâlenin anlattığı
belirsizliğin **79 km'sini** siliyor. Bedel büyük, kazanç küçük — 19 Ağustos
oturumunun "A'nın tam çözmediği" bulgusunun sayısal teyidi.

### D — `line-join`/`line-cap` ile oynamak · ÖLÇÜLMEDİ, ÖNERİLMEZ
Bugün `bevel`+`round` kullanılıyor. `bevel` zaten zarf dışına taşmayan seçenek;
dişin kaynağı köşe TİPİ değil, genişlik/segment ORANI. (Ölçmedim — aşağıda.)

---

## 5. ÖNERİLEN SIRA
1. **A'yı uygula** (`js/app.js`, `setData` öncesi DP, tol = kıskaç(u/10, 1..5 km)) —
   bir oturumluk iş, motor koşusu yok, dosya sahibi app.js olan oturum.
2. Sonraki motor koşusunda **B**'yi de ekle (dosya boyutu kazancı için).
3. C'ye DOKUNMA (tavan 80 px kalsın) — A uygulandıktan sonra tavanı düşürmenin
   gerekçesi kalmıyor.

---

## 6. ÖLÇMEDİKLERİM (açıkça)
```
· MapLibre'nin lob geometrisinin matematiği (miter/bevel/round'un tam silueti)
  → ölçmedim; dişin VARLIĞINI ve kaynağını katman söndürmeyle ÖLÇTÜM, siluetin
    hangi köşe tipinden doğduğunu değil.
· A'nın bütün dönemlerdeki etkisi → yalnız 1798-07-21 dönemi ve iki kutu ölçüldü;
  havuz geneli için yalnız köşe azalması (−%86..88) ölçüldü, diş sayısı DEĞİL.
· A'nın tarayıcı maliyeti sayıyla → "gözle gecikme yok" gözlemdir, profil ölçümü
  yapılmadı.
· Dişin z2–z4 (uzak) ve z7–z8 (yakın) görünümü → yalnız z5,2 · z5,4 · z6,2 ölçüldü.
· `SERBEST_TOL = 0.02` tamponunun (≈2 km) kısa segmentlere katkısı → ölçülmedi.
```

## 7. Dokunduğum dosyalar
```
denetim/ARAC-SINIR-DIS-0070.py     YENİ — ölçüm aleti (yalnız okur)
denetim/OLCUM-SINIR-DIS-0070.json  YENİ — ham ölçüm
denetim/SINIR-DIS-0070.md          YENİ — bu rapor
```
`data/`, `js/`, `arac/`, `index.html` **DEĞİŞTİRİLMEDİ**. Tarayıcıdaki katman
söndürme/sadeleştirme denemeleri yalnız sayfa belleğinde yapıldı, geri alındı.

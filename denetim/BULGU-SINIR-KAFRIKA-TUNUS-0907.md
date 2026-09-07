# KALEM Ⓑ — adsız `v:` dönemleri · **SINIF TUNUS'TAN BÜYÜK**

**Oturum:** SINIR-KAFRIKA-0907 · **Sevk:** 1.MURAT M-3243 kalem Ⓑ
**Öngörü:** `denetim/ONGORU-SINIR-KAFRIKA-TUNUS-0907.json` (ölçümden ÖNCE)
**Aletler:** `ARAC-SINIR-KAFRIKA-TUNUS-0907.py` · `...-TUNUSB-0907.py`
**AN:** `(disk)` — bekleyen yamalar uygulanmadı
**Yama:** **YOK.** Sevk *"ölç ve yaz, düzelt değil"* diyor; ayrıca `kid`
yazmak `KIMLIK-KID-0907`in kalemi ve `data/` donuk.

---

## 🔴 SEVKİN ÇERÇEVESİ DARDI — 36 değil **56**, Tunus'a özgü değil

Sevk *"Tunus — 36 noktada `kid` VE `k` ikisi de null"* diyordu. Doğru,
ama sınıfın **tamamı değil**:

```
`v:` dönemi TOPLAM        429
   kid VAR                291
   kid yok ama k VAR       82
   NE k NE kid (ADSIZ)     56    ← sınıfın tamamı
      Tunus                36
      Tunus DIŞINDA        20
```

Ve dışarıdaki 20 rastgele değil — **hepsi aynı cins: adı konmamış Osmanlı
tâbii.**

| polity kümesi | dönem | f → t | dosya |
|---|---|---|---|
| Tunus (Hüseynî beyliği) | **36** | 1705-07-17 → 1923-10-29 | 3 dosya |
| Erdel Prensliği | 6 | 1526-09-01 → 1687-08-12 | ek29 |
| Girit (Mısır idaresi) | 5 | 1830-11-01 → 1841-02-25 | yerlesimler.js |
| Girit Devleti | 5 | 1898-12-01 → 1913-05-30 | yerlesimler.js |
| Sisam Prensliği | 1 | 1832-12-10 → 1912-03-13 | yerlesimler.js |
| Bulgaristan Prensliği | 1 | 1878-07-13 → 1908-10-05 | ek29 |
| Sırbistan Prensliği | 1 | 1830-11-08 → 1878-07-13 | ek29 |
| Debrecen (Erdel/Hayduk) | 1 | 1526-08-29 → 1660-08-27 | kdmacar |

📌 **Sekizinin sekizi de tanınmış tarihî varlık.** Bu bir "veri
boşluğu" değil, **bir adlandırma katmanının hiç doldurulmamış olması.**

---

## §3.5.0 SINAVI — künye VAR MI, **ve PENCERESİ TUTUYOR MU?**

> *"Ardıl künyenin VAR OLMASI, YAZILABİLİR olduğu anlamına gelmez —
> penceresi de tutmalı."*

```
🟢 HEMEN YAZILABİLİR — künye var VE kapsıyor          3 küme ·  7 dönem
   Girit (Mısır idaresi)  → `misir-kavalali`  1805-07-03 → 1914-12-18
   Bulgaristan Prensliği  → `bulgaristan-prensligi` 1878-07-13 → 1908-10-05
   Sırbistan Prensliği    → `sirbistan-prensligi`   1804-02-14 → 1882-03-06

🟡 KÜNYE VAR, PENCERE TUTMUYOR                        3 küme · 43 dönem
   Tunus         `tunus-ocagi` 1574-01-01 → **1881-05-12**
                 ⇒ 42 yıl ERKEN bitiyor (dönem 1923-10-29'a kadar)
                 🟢 BEKLEYEN YAMA VAR: 1.MURAT 1881→1923 genişletmesini
                    bildirdi; **diskte henüz yok.** İndiğinde tam oturur.
   Erdel         `erdel` **1570-01-01** → 1711-04-30
                 ⇒ 44 yıl GEÇ başlıyor (dönem 1526-09-01'den)
   Girit Devleti `girit-devleti` **1898-12-22** → 1913-05-30
                 ⇒ 21 gün GEÇ başlıyor (veri 1898-12-01)

🔴 HİÇBİR KÜNYE YOK                                   1 küme ·  1 dönem
   Sisam Prensliği — `sisam` ve `sisam-prensligi` ikisi de YOK
```

⚠️ **Üç 🟡'nin üçü aynı cins DEĞİL** ve çareleri farklı:
- **Tunus** — yama zaten yolda, iş yok, **beklemek** yeter.
- **Erdel** — 44 yıllık gerçek bir boşluk. 1526-1570 arası Zápolya /
  Doğu Macaristan Krallığı dönemi; `erdel` künyesi onu kapsamıyor.
  ⚠️ `KIMLIK-KID-0907` Zapolya'yı M-3159'da zaten bildirmişti — **aynı
  boşluğa ikinci koldan varıyorum.**
- **Girit Devleti** — 21 gün. Bu bir pencere kusuru değil bir **tarih
  sorusu** (`§4`): veri 1 Aralık, künye 22 Aralık. Hangisi doğru,
  kaynağa sorulmalı; ikisi de ölçülmedi.

---

## ÖNGÖRÜ SINAVI — 2 birebir tuttu · 2 çürüdü · 2 kısmî

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ① | 56 küresel · 36 Tunus · 20 dışarıda | **429/291/82/56 · 36 · 20** | 🟢 BİREBİR |
| ⑤ | 36'sında `isg: fransa-cumhuriyet` | **36/36, tek kimlik** | 🟢 BİREBİR |
| ② | 36'sı TEK dosyada | **3 dosya** | 🔴 ÇÜRÜDÜ |
| ③ | `kd:` hiç doldurulmamış | **tanımlı · okuyucusu var · 10+ dosyada dolu** | 🔴 ÇÜRÜDÜ |
| ④ | `m:` dolu | **45/56** (11'i boş) | 🟡 kısmî |
| ⑥ | kusur | kusur — **ama sınıf çok daha geniş** | 🟡 kısmî |

### ③ — ve projenin kendi dersini az kalsın tekrarlıyordum

`kd:`i *"tasarlanmış ama hiç doldurulmamış"* sandım. Ölçüm:
```
girdi.py:858   BILINEN_ALANLAR'da TANIMLI, açıklamasıyla
girdi.py:1240  `kd_oku(y)` — okuyucu fonksiyonu VAR
data/          10+ dosyada dolu · yerlesimler.js'te 37 kayıt
adsız 56'da    0 — yalnız BURADA yok
```
📌 `§11`in *"bir alan tasarlamadan önce zaten var olup olmadığını ÖLÇ"*
dersi (`sinif:` ↔ `kd:` vakası) bu projede **zaten kayıtlı**, ve ben onun
**aynasına** düşüyordum: var olan bir alanı yok sanmak.
🔴 **VE `kd:` BU İŞİN ÇARESİ DEĞİL:** taşıdığı şey `{f, t, k, m}` —
kademe ve merkez. **Tâbi polity'nin kimliğini taşımıyor.** Karıştırmak,
doğru alete yanlış iş vermek olurdu.

### ② — 36 üç dosyaya dağılmış
`yerlesimler_afrika.js` 21 · `yerlesimler_h2_kuzeyafrika.js` 9 ·
`yerlesimler.js` 6. ⇒ Tek bir yazarın tek oturumda yazdığı bir blok
değil; **en az üç ayrı turda, aynı boşlukla** yazılmış.

---

## BEYAN ARANDI — Ⓐ'nın dersi uygulandı

Ⓐ'da `9999`u nadir olduğu için kusur sanmıştım; tasarım yapan şey
**beyandı**. Bu kez önce beyan arandı:
```
56 kaydın beyan alanı (`neden:`/`bos:`/`not:`) DOLU olan:  1
   ve o da Yagodina, ve içeriği BU KONUYLA İLGİSİZ
   (1689-1690 Avusturya ara dönemi hakkında)
denetle.py'de `tunus`      1 geçiş, İLGİSİZ
denetle.py'de `__KIDSIZ__` 0 geçiş
BEKLENEN_* tavanlarında Tunus/adsız-v bileşeni: YOK
```
⇒ **Beyan YOK, tavan YOK, denetim sormuyor.** Ⓐ'dan farklı: bu
gerçekten açık bir kusur.

---

## KİME GİDER

**`KIMLIK-KID-0907`** — `kid` doldurmak onun kalemi. Bu dosya ona
üç şey veriyor:
1. sınıfın **gerçek büyüklüğü** (36 değil 56, 8 polity),
2. her küme için **künye penceresi sınavının sonucu**,
3. **hemen yazılabilir 7 dönem** (3 küme) — künye var ve kapsıyor.

⚠️ Ve sıra kilidi duruyor: **Tunus'un 36'sı için önce `tunus-ocagi`
yaması inmeli**, yoksa `kid`in kendi tanımı (`girdi.py:932` — künye
penceresi dönemi kapsamalı) **36 kayıtta birden** ihlal edilir.

# Coğrafya hiyerarşisi için NE envanteri — U4 YER DİZİNİ'ne girdi

**Yazan:** COĞRAFYA (G) · **Tarih:** 31 Temmuz 2026
**Alıcı:** U4 YER DİZİNİ (`oturumlar/OTURUM-YERDIZINI.md`)
**Durum:** istenmeden yazıldı — sonuç Faz 2'nin tasarımını **önceden**
etkilediği için beklemedim.

---

## 1. ÖZET — NE bölge katmanı hiyerarşinin OMURGASI OLAMAZ

`ne_10m_geography_regions_polys` bir **döşeme değil**: poligonlar üst üste
biner ve büyük boşluklar bırakır. 951 yerleşimin kaç tanesinin o sınıfta bir
ebeveyni var:

| Sınıf | Poligon | **0 ebeveyn (boşluk)** | 1 ebeveyn | 2+ (çakışma) |
|---|---|---|---|---|
| **Continent** | 3 | **%9** | **%91** | %0 |
| Range/mtn | 61 | %83 | %15 | %2 |
| Geoarea | 12 | **%82** | %18 | %0 |
| Pen/cape | 7 | **%86** | %14 | %0 |
| Desert | 31 | %87 | %6 | **%6** |
| Island group | 10 | **%97** | %3 | %0 |
| Plateau | 18 | **%99** | %1 | %0 |

> 🔴 **`Continent` dışında hiçbir sınıf yerleşimlerin %20'sinden fazlasını
> kapsamıyor.** `Continent` de yalnız **3 kova** demek (AFRICA · EUROPE · ASIA)
> ve onun bile %9'u boşta (adalar ve pencere kenarları).

**Sonuç: hiyerarşinin orta kademeleri (alt bölge → ülke) NE'den gelemez.**
Projenin kendi verisinden gelmeli — `yerlesimler.js`'teki `m:` merkez alanı,
`data/bolgeler.js` (61 idari bölge), `data/devletler.js`.

---

## 2. AMA ETİKET OLARAK KULLANILABİLİR — ve doğru kullanım bu

`COGRAFYA-YASLAMA.md`'de `Geoarea` ve `Pen/cape`'i **yaslama hedefi** olarak
elemiştim: ANATOLIA · Mesopotamia · ARABIAN PENINSULA · BALKAN PEN. haritacının
isim yazmak için çizdiği lekelerdir, sınır değildir.

> **Hiyerarşi için bu bir kusur değil, uygunluktur:**
> *"ANATOLIA" bir sınır değildir ama bir **süzme başlığıdır.**

Yalnız ölçek doğru bilinmeli: `Geoarea` bir başlık olarak **171 yerleşime**
uygulanabiliyor (951'in %18'i), `Pen/cape` **129'una** (%14). Yani bunlar
**kapsayıcı bir eksen değil, seçmeli etiketlerdir** — "Anadolu'daki olaylar"
süzmesi 171 yerleşimi getirir, Anadolu'nun tamamını değil.

⚠️ Bir süzme ekseni **tam kapsamalı** olmalıysa NE bunu veremez. Kısmî etiket
kabul ediliyorsa verir.

---

## 3. TEK GERÇEK HİYERARŞİ SİNYALİ: `Desert` iç içe geçiyor

`Desert` sınıfında çakışma **%6** ve bu bir kusur değil — poligonlar gerçekten
iç içe:

```
Asyut    → SAHARA + WESTERN DESERT
Asvan    → SAHARA + Eastern Desert
Dongola  → SAHARA + NUBIAN DESERT
```

SAHARA, WESTERN/Eastern/NUBIAN DESERT'i **kapsıyor**. Yani `Desert` sınıfı
kendi içinde iki kademeli bir ağaç taşıyor (büyük çöl → alt çöl) ve çöl içinde
kalan 120 yerleşimin **yarısı** iki kademeye birden düşüyor.

`Range/mtn`'de de aynı desen var ama zayıf (%2):
`Oran → ATLAS MOUNTAINS + Atlas Tellien` · `Tanca → ATLAS MOUNTAINS + Er Rif`

⇒ **İç içelik ayrıştırılabilir**: iki poligondan biri diğerini kapsıyorsa
büyük olan üst kademe, küçük olan alt kademedir. U4 isterse bu ilişkiyi
ölçerim; alan karşılaştırması yeterli.

---

## 4. HAZIR ENVANTER — pencere içi (`box(-12, 1.5, 62, 62)`, alan ≥ 0,05)

```
Range/mtn 61 · Desert 31 · Island 19 · Plateau 18 · Geoarea 12
Island group 10 · Plain 10 · Coast 7 · Pen/cape 7 · Delta 4
Continent 3 · Valley 2 · Lowland 2 · Depression 2 · Basin 1
```

Dünya geneli sayılar bunun 2-5 katı; **pencere dışı poligonlar bizim
coğrafyamızı ilgilendirmiyor.** (`COGRAFYA-YASLAMA.md §6` — koordinatörün ilk
verdiği "222 Range · 72 Plateau · 58 Desert" rakamları dünya geneliydi.)

Ad listeleri ve alanlar `COGRAFYA-YASLAMA.md §6.7` ve §6.9'da; istenirse
sınıf sınıf tam döküm çıkarılabilir.

---

## 5. U4'E ÜÇ SORU

1. Süzme ekseni **tam kapsamalı** mı olmalı? Öyleyse NE orta kademeler için
   kullanılamaz; `m:` + `bolgeler.js` + `devletler.js` üzerinden kurulmalı.
2. **Kısmî etiket** kabul ediliyorsa `Geoarea` (171) ve `Pen/cape` (129)
   doğrudan kullanılabilir — ad listesi hazır.
3. `Desert` ve `Range/mtn`'deki **iç içelik** ayrıştırılsın mı? Ölçerim.

📌 Ben ölçüyorum, katalog kurmuyorum (`ORGANIZASYON §1`). Bu dosya girdi;
hiyerarşinin kendisi U4'ün.

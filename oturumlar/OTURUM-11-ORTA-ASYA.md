# Oturum 11 — Hazar doğusu ve Orta Asya yerleşim katmanı

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-11-ORTA-ASYA.md dosyasını oku ve içindeki görevi yap

Model: **Opus** — gerekçe en altta.

---

## Önce oku
`CLAUDE.md` (kurallar, üç değişmez, **§4 TDV ölü slug tuzağı**) ·
`VERI-YAPISI.md` (`yerlesimler.js` şeması) · `MIMARI.md` §2 ve §5.

## Bu işin sebebi — ölçülmüş, görünür bir hata

Kullanıcı şunu gördü: **"Osmanlı Bakü'yü ele geçirince Hazar'ın doğusu da
Osmanlı'ya katılmış gibi renkleniyor."**

Ölçüldü ve doğrulandı:

| Yer | En yakın yerleşim |
|---|---|
| Türkmenbaşı (Krasnovodsk) | **Bakü, 269 km — denizin öbür yakasında** |
| Hazar doğu kıyısı ortası | Bakü, 330 km |
| Mangışlak | Derbend, 328 km |
| Uzboy çölü | Karakum (dolgu noktası), 214 km |
| Merv / Mari | Meşhed, 245 km |
| Hîve | Karakum, 262 km |

Hazar **kara maskesinin dışında**, yani su olarak doğru işleniyor. Sorun o değil:
Voronoi noktalar üzerinden hesaplanıp **sonra** karaya kırpıldığı için, Bakü'nün
hücresi denizi aşıp **öbür kıyıda yeniden ortaya çıkıyor**. Osmanlı Şirvan'ı
aldığında (1578-1607) Hazar'ın doğu kıyısı da Osmanlı boyanıyor.

Bu, `MIMARI.md` §2'deki emilme davranışının en görünür örneği. Çözümü tek:
**o kıyıya nokta koymak.**

## ⚠️ 62° doğu boylamı sınırı

`arac/uret_petek.py` haritayı `box(-12, 1.5, 62, 62)` kutusunda çiziyor.

| Yer | Boylam | Durum |
|---|---|---|
| **Türkmenbaşı, Mangışlak, Uzboy** | 51-56°D | ✅ **kutu içi — ÖNCELİK** |
| **Hîve, Ürgenç, Merv, Nesâ, Serahs** | 58-62°D | ✅ **kutu içi** |
| Buhara, Semerkant, Taşkent, Hokand | 64-70°D | ❌ **kutu dışı — EKLEME** |

Kutu içindekiler **hemen işe yarar**. Buhara ve doğusu için kutunun açılması
gerekiyor; o da yoğunluk sağlanmadan yapılamaz (`MIMARI.md` §2). Buhara'yı
şimdi eklersen **çizilmez**, boşuna emek olur.

**Öncelik sırası — üstteki en acil:**
1. **Hazar doğu kıyısı** (51-56°D): Türkmenbaşı, Mangışlak, Cheleken, Uzboy —
   görünür hatayı doğrudan kapatır
2. **Harezm ve Horasan kuzeyi** (58-62°D): Hîve, Ürgenç, Merv, Nesâ, Serahs,
   Ebîverd, Dihistan
3. Aral güneyi ve Karakum kenarları — çoğu çöl; `tur:"bolge"` dolgu noktası
   yeterli, sahipsiz bırakılabilir (bkz. `MIMARI.md` §6)

## Yazabileceğin tek dosya

**`data/yerlesimler_ortaasya.js`** — sen oluşturacaksın:

```js
// Aynı şema, aynı alanlar. Entegrasyon oturumu yerlesimler.js ile birleştirecek;
// ayrı dosya yalnız çakışmayı önlemek için.
window.YERLESIMLER_ORTAASYA = [
{ ad:"Ürgenç", tur:"sehir", lat:41.550, lon:60.633, g:0, k:3, m:"…",
    s:[{f:"1281-01-01",t:"…",d:"…"}, …], d:[], kur:"…", bit:"…" },
];
```

**Dokunma:** `data/yerlesimler.js` (oku, örnek al, **yazma** — entegrasyon
oturumunun) · `data/yerlesimler_iran.js` (başka oturumun) · `arac/` altındaki
her şey · `data/devletler.js`, `kisiler.js`, `savaslar.js`, `olaylar*.js` ·
`index.html`, `js/app.js` · kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma** — üretim ~2,5 saat sürüyor.

## ⚠️ Devlet kimlikleri — çoğu HENÜZ YOK

`arac/renkler.py`'de tanımlı olmayan kimlik yazarsan o bölge **boyanmaz**.
Bu coğrafya için mevcut olanlar **çok az**:

```
VAR :  timurlu · altinorda · kazan · rusya · iran · safevi
YOK :  cagatay · hive · buhara · hokand · harezm · ozbek · sibir ·
       nogay · astarhan · kazak · afsar · kacar · zend
```

**Eksik devletleri EKLEME.** Renk tablosu entegrasyon oturumunun ve renkler
komşuluk çizgesine göre dağıtılıyor (91 devlet, DSATUR ile 7 renk yetiyor);
rastgele eklenen renk o dengeyi bozar.

**Yapman gereken:** ihtiyaç duyduğun her devlet için `oturumlar/OTURUM-11-ILERLEME.md`
dosyasına şunu yaz — kimlik önerisi, tam ad, varlık aralığı, merkez, TDV
maddesi. Entegrasyon oturumu ekleyip sana haber verecek. O zamana kadar
**geçici olarak en yakın üst devleti kullan** (ör. Çağatay yerine `timurlu`
değil — yanlış olur; onun yerine o dönemi **boş bırak** ve notta belirt).

## Tarihî katman — 1288'den 1923'e

1288'de bu coğrafya **İlhanlı ile Çağatay Hanlığı arasında** bölünmüştür;
Harezm Altın Orda'nın güney ucudur. Kabaca zincir:

Çağatay Hanlığı (1227-1370) → Timurlu (1370-1507) → Şeybânî/Özbek hanlıkları →
Buhara, Hîve ve Hokand hanlıkları (16-19. yy) → Rus fethi (1865-1885) →
Rus Türkistanı (1885-1917) → Sovyet dönemi.

Hazar doğu kıyısı ayrı: **Türkmen boyları** çoğu zaman devletsizdir; Hîve ve
İran arasında el değiştirir; Rus varlığı Krasnovodsk'un kuruluşuyla (1869)
başlar. **Devletsiz olduğu dönemleri boş bırak** — uydurma devlet yazma
(`MIMARI.md` §6: "burada kimse yoktu" ile "burasını bilmiyoruz" farklı iddialar).

## Sahneye çıkan ve silinen yerleşimler

Bu coğrafyada `kur:` ve `bit:` en çok işleyecek alanlar:
- **Ürgenç** 1221'de Moğollarca yıkıldı, Köhne Ürgenç terk edildi, Yeni Ürgenç
  başka yerde kuruldu
- **Merv** 1221'de yerle bir edildi
- **Krasnovodsk** 1869'da kuruldu
- Amuderya'nın yatak değiştirmesi birkaç yerleşimi terk ettirdi

> ⚠️ **Dürüst uyarı:** motor bugün `kur:` alanını **okumuyor** (bilinen borç,
> `MIMARI.md` §3.1, denetim raporunda B-5). Yazdığın kuruluş tarihleri haritada
> **henüz** karşılık bulmayacak. Yine de **yaz** — zaman dilimli Voronoi
> yapıldığında veri hazır olacak; yazmazsan sonradan tek tek araştırmak gerekir.

## Kendi kendini denetle
```bash
# Kapsama — çölde 300 km ölçütü (MIMARI §5)
py arac/denetle_kapsama.py --esik 300
# Üç değişmez (senin dosyan henüz birleştirilmedi, yine de bozmadığını gör)
py arac/denetle.py
```
Ayrıca kendi betiğinle: nokta karada mı, 3 km içinde mükerrer var mı.

## Neden Opus
İşin mekanik yarısı denetlenebilir (koordinat, mükerrer, kapsama). **Denetlenemeyen
yarısı asıl iş**: bir şehrin 1288'deki sahibi, Moğol istilasından sonra yeniden
kurulup kurulmadığı, hangi eski adla anıldığı (Ürgenç/Gürgenç/Köhne Ürgenç).
Bu hatalar sessiz geçer — harita geçerli görünür, üç değişmez temiz çıkar.
Bu projede iki örneği aylarca fark edilmedi: Kilitbahir 19 km yanlış yerdeydi,
18 beyliğin hepsi yanlış tarihte başlıyordu.

## Bitirdiğinde
Kaç nokta eklediğini, Hazar doğu kıyısının kapsandığını gösteren ölçümü ve
**eklenmesini istediğin devlet kimliklerinin listesini** entegrasyon oturumuna
bildir. **Commit etme.**

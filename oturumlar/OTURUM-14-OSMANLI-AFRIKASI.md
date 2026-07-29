# Oturum 14 — Osmanlı Afrikası yerleşim katmanı

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-14-OSMANLI-AFRIKASI.md dosyasını oku ve içindeki görevi yap

Model: **Opus** — gerekçe en altta.

---

## Bu işin sebebi — ölçüldü

Kutu içindeki bölgelerin nokta yoğunluğu sayıldı:

| Bölge | Nokta | Alan (10 bin km²) |
|---|---|---|
| Anadolu *(kıyas)* | 200 | 109 |
| Balkanlar *(kıyas)* | 198 | 153 |
| **Mısır (Nil vadisi)** | **12** | 121 |
| **Tunus-Trablus kıyısı** | **8** | 100 |
| **Habeşistan** | **5** | 93 |
| **Somali-Zeyla** | **6** | 141 |
| Fas-Cezayir kıyısı | 16 | 151 |
| Sudan-Nûbe | 11 | 343 |

**İmparatorluğun en zengin eyaleti olan Mısır, 12 noktayla temsil ediliyor.**
Kuzey Afrika ocaklarının merkezi Tunus-Trablus kıyısı 8 nokta. Habeş Eyaleti
5 nokta. Bunlar Osmanlı tarihinin ana sahneleri; Anadolu'yla aynı çözünürlükte
olmasalar da bu kadar seyrek olamazlar.

Hepsi `box(-12, 1.5, 62, 62)` kutusunun **içinde** — eklenen her nokta
**anında haritada görünür.**

## Senin işin

**Hedef 150-200 nokta:**

| Bölge | Bugün | Hedef | Örnek merkezler |
|---|---|---|---|
| Mısır — Nil vadisi ve Delta | 12 | 45-60 | Menûfiye, Garbiye, Şarkiye, Behnesâ, Feyyûm, Minye, Girga, Kına, Esna, Kus, Ahmim |
| Tunus-Trablus kıyısı ve iç | 8 | 30-40 | Bizerte, Sûse, Munastır, Mehdiye, Kef, Beca, Nefta, Tozeur, Zilten, Hums, Zâviye, Yefren |
| Cezayir iç ve batı | 16 | 25-35 | Blida, Miliana, Maskara, Tlemcen çevresi, Laghouat, Ghardaia, Biskra çevresi |
| Habeşistan ve Kızıldeniz batısı | 5 | 20-25 | Aksum, Adua, Debre Berhan, Ankober, Harar çevresi, Arkiko, Dahlak |
| Somali kıyısı | 6 | 12-18 | Mogadişu, Merka, Brava, Bosaso, Hafun |
| Sudan-Nûbe | 11 | 15-20 | Şendi, Berber, Ebû Hamed, Dongola çevresi, Kesela, Sinkat |

**Sahra içine yeni nokta EKLEME** — 8 dolgu noktası zaten var ve çöl için
300 km ölçütü yeterli (`MIMARI.md` §5). Sahel ve Batı Afrika da bu görevin
dışında.

## Yazabileceğin tek dosya

**`data/yerlesimler_afrika.js`** — sen oluşturacaksın:

```js
window.YERLESIMLER_AFRIKA = [
{ ad:"Menûfiye", tur:"sehir", lat:30.560, lon:30.990, g:0, k:4, m:"Kahire",
    s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"}],
    d:[{f:"1517-01-22",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Mısır (Kavalalı)"}] },
];
```

**Dokunma:** `data/yerlesimler.js` ve diğer `yerlesimler_*.js` dosyaları ·
`arac/` altındaki her şey · `data/devletler.js`, `kisiler.js`, `savaslar.js`,
`olaylar*.js` · `index.html`, `js/app.js` · kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma** — üretim ~2,5 saat sürüyor.

## Tarihî katman — dikkat edilecek üç geçiş

**1. Mısır.** Memlûk (→1517-01-22 Ridâniye) → doğrudan Osmanlı eyaleti
(1517-1805) → Kavalalı hanedanı (1805'ten sonra **tâbi**, `v:` alanı) →
İngiliz himayesi (1914-11-05). Mevcut Kahire kaydını örnek al; aynı zinciri
kullan ki senkron bozulmasın.

**2. Kuzey Afrika ocakları.** Başlangıçta eyalet (doğrudan), sonra fiilen
özerk ocaklık. Kabaca kabul gören dönüm noktaları:
- Cezayir 1519-1671 eyalet → 1671-1830 dayı idaresi
- Tunus 1574-1705 eyalet → 1705-1881 Hüseynî hanedanı
- Trablus 1551-1711 eyalet → 1711-1835 Karamanlı → **1835-1912 yeniden doğrudan**

> ⚠️ Mevcut veride bu ayrım **henüz yok** — Tunus, Cezayir ve Trablus
> 1519/1551/1574'ten sonuna kadar doğrudan Osmanlı yazılı. Entegrasyon oturumu
> bunu tâbi katmanına taşıyacak. **Sen yeni noktalarını doğrudan (`d:`) yaz**,
> merkezleriyle tutarlı olsun; ayrım hepsine birlikte uygulanacak.

**3. Habeş Eyaleti.** 1557'de kuruldu (Masavva, Sevâkin, Arkiko); iç
Habeşistan hiçbir zaman Osmanlı olmadı — orası **Habeşistan İmparatorluğu**
(`habesistan`). Kıyı ile içeriyi karıştırma. 1885'te Masavva İtalya'ya,
Sevâkin İngiltere'ye geçti.

## Devlet kimlikleri

Mevcut olanlar: `memluk` · `hafsi` · `zeyyani` · `fas` · `funj` · `nube` ·
`habesistan` · `adal` · `somali` · `mehdi` · `ingiltere` · `fransa` · `italya` ·
`ispanya` · `portekiz` · `sovalye` · `kilikya-ermeni` yok — bu coğrafya için
gerekmez.

**Eksik gördüğünü EKLEME, BİLDİR** — `oturumlar/OTURUM-14-ILERLEME.md`'ye
kimlik önerisi, tam ad, aralık, merkez, kaynak yaz. Muhtemelen gerekecekler:
Merînîler, Sa'dîler, Vattâsîler (Fas hanedanları), Darfur Sultanlığı,
Ajuran (Somali), Warsangali, İdrîsîler.

⚠️ Renkler komşuluk çizgesine göre dağıtılıyor; rastgele renk dengeyi bozar.

## Kaynak kuralı
Bu coğrafya **TDV'nin en güçlü olduğu alanlardan** — Mısır, Kahire, Trablusgarp,
Tunus, Cezayir, Habeş Eyaleti, Sevâkin, Masavva, Zeyla, Harar, Func, Darfur
maddelerinin hepsi var. **TDV birincil.**

⚠️ **Ölü slug tuzağı:** olmayan slug için de HTTP 200 döner; `<title>`
"Arama - TDV İslâm Ansiklopedisi" ise madde **YOKTUR**. Arama:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`
Doğrulanmış küme:
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```

**Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`.
**Ad yazımı:** Osmanlı belgelerindeki karşılığı varsa onu kullan (Trablusgarp,
Sevâkin, Masavva, Zeyla, Cerbe, Bicâye, Vehrân), parantezle modern adı ver.

## Kendi kendini denetle
```bash
py arac/denetle_kapsama.py --esik 120     # kıyı ve vadi
py arac/denetle_kapsama.py --esik 300     # çöl
py arac/denetle.py
```
Ayrıca: nokta karada mı, 3 km içinde mükerrer var mı.

## Neden Opus
Mekanik yarısı denetlenebilir (koordinat, mükerrer, kapsama — araçları var).
**Denetlenemeyen yarısı asıl iş**: bir kasabanın 1600'deki idari bağı, ocaklık
geçişinin tarihi, Osmanlı belgelerindeki adı. Bu hatalar sessiz geçer — harita
geçerli görünür, üç değişmez temiz çıkar. Bu projede iki örneği aylarca fark
edilmedi: Kilitbahir 19 km yanlış yerdeydi, 18 beyliğin hepsi yanlış tarihte
başlıyordu.

## Bitirdiğinde
Kaç nokta eklediğini, bölge dağılımını, kapsama ölçümünün önce-sonra değerini
ve **eklenmesini istediğin devlet kimliklerini** entegrasyon oturumuna bildir.
**Commit etme.**

<!-- DURUM: BEKLIYOR ¦ 2026-08-16 ¦ KOSUDAN ÖNCE yazıldı, damgalı -->
# VARLIK EPOKU PAYLAŞTIRMASI — KOŞU ÖNGÖRÜSÜ · `İŞ 2`

**Yazan** Opus hazır kıta 4 · dosyam `arac/uret_petek.py`
**Damga** koşu başlamadan; `git log`da bu dosyanın commit'i koşununkinden ÖNCEDİR.
**Taban** koordinatörün M-0221'de bağladığı sayı: **1281'de 52 petek · 538.419 km²**
(şartnamedeki `86 / 1.862.994` **bayattı ve geçersiz** — 14 Ağustos logundan alınmıştı).

---

## ⓪ NE DEĞİŞTİ

`petek_epok()` doğmamış noktanın peteğini **bütünüyle tek komşuya** veriyordu
(`agac.nearest`). Artık **bitişik ölü hücreler gruplanıp**, o gruba clip'lenmiş
bir **mini-Voronoi** ile hayatta olan komşulara **paylaştırılıyor.**

Eski davranış iki hâlde sürüyor ve **ikisi de doğru**: tek canlı komşu varsa
(bölünecek bir şey yok) ve hiç canlı komşu yoksa (yerel onarım kurulamaz).

**C13 · altı dal, hepsi ZORLANARAK ateşlendi: 6/6**
```
① paylaştırma · ② tek komşu · ③ komşusuz (100 birim uzağa sahte hücre) ·
④ bileşen (iki bitişik ölü) · ⑥ geçme yolu (devir boş) ·
⑦ voronoi PATLARSA geri çekilme (voronoi_diagram zorla patlatıldı)
```
🔴 ③ ve ⑦ gerçek veride ateşlenmiyor; **sahte girdiyle zorlandı.** C13'ün
kendi kuralı: *zorlanamayan dal, denetimsiz daldır.*

---

## ① MOTOR ÖLMEZ, PAYLAŞTIRMA SATIRINI BASAR
```
beklenen:  ② PAYLAŞTIRMA (1281-01-01): N peteğin X'i PAYLAŞTIRILDI (A alıcıya),
           Y'si tek komşu (bölünecek şey yok), Z'si komşusuz (eski yol)
```
🔴 **MAZERET YOK.** C13 6/6 geçti; satır basılmıyorsa `_VARLIK_PAY` bağlanmamış demektir.

## ② 🔴 ALAN KORUNUMU — TOPLAM DEĞİŞMEZ
```
beklenen:  1281-01-01 devredilen toplam alan, eski koşudakiyle AYNI
           (taban 538.419 km², veri değişmediyse)
           ve "artık" satırı YA HİÇ BASILMAZ ya da < 1.000 km²
```
🔴 **MAZERET YOK — bu kalemin mazereti OLAMAZ.** Paylaştırma **aynı toprağı
başka biçimde dağıtır**; toplamı değiştiremez. Toplam değişirse toprak ya
kayboldu ya iki kez sayıldı, ve ikisi de yayını durdurur.
📌 Motorun kendi kuralı: *"birleşim korunur: kaybolan ya da iki kez sayılan
toprak olamaz"* — ve *"garanti EDİLDİĞİNİ VARSAYMAK yerine ölçülür."*

## ③ PAYLAŞTIRILAN PAY — çoğunluk
```
beklenen:  paylaştırılan ≥ 45 / 52   (%85+)
           tek komşu     ≤ 5
           komşusuz      ≤ 2
```
**Gerekçe:** Delaunay komşuluğu ortalama **6,0** (ölçtüm; şartnamenin 5,9'u
tuttu). Bir Voronoi hücresinin normalde 3'ten az komşusu olmaz; "tek komşu"
ancak öteki komşuların da ölü olduğu kümelerde çıkar ve bileşen gruplaması
onu zaten azaltır.
🟡 **MAZERET VAR:** komşuluğu `PETEK_D` hücrelerinin **değmesi** üzerinden
sorguluyorum (`buffer(0.02)`), Delaunay üzerinden değil. Çöl gibi seyrek
yerlerde hücreler büyük ve komşu sayısı düşük olabilir. ⇒ %85'in altına
düşerse sebebi **seyreklik** olabilir; ama **%50'nin altına düşerse mazeret
yok**, komşu bulma ölçütüm yanlış demektir.

## ④ TOPLAM KOVA SAYISI — 52 civarı
```
beklenen:  üç kovanın toplamı 45–60
```
🟡 **MAZERET VAR:** taban kayması. 52, 04:20 koşusunun sayısıydı; o gün
`VERİ ZAMAN` ve nokta oturumları yazmaya devam etti. Sayı kayarsa sebebi
**benim değişikliğim değil veridir** — ve bunu önceden yazıyorum ki koşudan
sonra bana yıkılmasın.

## ⑤ `Değişmez 1` — İŞ 2 ekseninde DEĞİŞMEZ
🔴 **MAZERET YOK (İŞ 2 ekseninde).** Sahipsizlik **veriden** ölçülüyor,
geometriden değil. Paylaştırma toprağın kime gittiğini değiştirir, bir
noktanın sahibi olup olmadığını **değiştiremez.**
🟡 Sayı 196'dan kayarsa sebebi `data/`ye yazan oturumlardır.

## ⑥ A1 TUZAĞI — sonraki aşama geri alıyor mu
```
beklenen:  kara-kısıtlı sahiplik sonrası boşalan petek: 0 ✓
```
🔴 **MAZERET YOK.** Paylaştırma o aşamadan **sonra** çalışıyor ve `PETEK_D`ye
değil **kopyasına** yazıyor (`hucre = list(PETEK_D)`). Taban geometriye
dokunmuyor ⇒ önceki aşamaların hiçbirini bozamaz.
⚠️ Ve `_PETEK_MUHUR` bunu zaten sınıyor: `PETEK_D` değişirse koşu ÖLÜR.

## ⑦ SÜRE — +1 ila +5 dakika
```
taban:     varlık devri (petek_epok) 103 çağrı · 8 sn
beklenen:  103 çağrı · 1–5 dk
```
🟡 **MAZERET VAR:** maliyeti belirleyen şey bileşen sayısı ve her bileşenin
komşu sayısı; ikisini de ölçmedim (`PETEK_D` koşuda doğuyor). 5 dakikayı
aşarsa bileşenler beklediğimden büyük demektir — bu bir **bulgu** olur,
mazeret değil.

## ⑧ HARİTA ETKİSİ — ölçülecek, ÖNGÖRMÜYORUM
```
ÖNGÖRMÜYORUM:  kesit alanlarının nasıl değişeceği
```
🔴 **Bunu bilerek boş bırakıyorum.** 52 peteğin toprağı **aynı kalıyor**, yalnız
**kime gittiği** değişiyor. Etkisi hangi devlete ne kadar gideceğine bağlı ve
**ölçmedim.** Sayı uydurup sonradan "tuttu" demektense **"ölçmedim" yazmayı**
tercih ediyorum — `§7.1 ④`ün ters yüzü: *ölçmediğini `ölçmedim` diye yaz.*

---

## 🔴 KOŞUDAN SONRA — kaç kalem TUTTU, kaç kalem ÇÜRÜDÜ

| # | kalem | mazeret | öngörü | ölçüm | sonuç |
|---|---|---|---|---|---|
| ① | paylaştırma satırı basılır | 🔴 yok | basar | | |
| ② | **alan korunumu** | 🔴 yok | toplam AYNI · artık <1.000 km² | | |
| ③ | paylaştırılan pay | 🟡 seyreklik | ≥45/52 · tek≤5 · komşusuz≤2 | | |
| ④ | toplam kova | 🟡 taban | 45–60 | | |
| ⑤ | Değişmez 1 (İŞ 2 ekseni) | 🔴 yok | değişmez | | |
| ⑥ | boşalan petek | 🔴 yok | 0 | | |
| ⑦ | süre | 🟡 bileşen | +1–5 dk | | |
| ⑧ | harita etkisi | — | **ÖNGÖRMÜYORUM** | | |

📌 `§11`: *"beş öngörülük bir kümede bilgiyi yalnız YANLIŞ OLAN taşıdı."*
İŞ 1'de dokuz kalemin ikisi çürüdü ve **ikisi de bir şey öğretti**; tutan
yedisi hiçbir şey öğretmedi. Buradan da aynısını bekliyorum.

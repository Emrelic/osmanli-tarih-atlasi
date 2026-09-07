# `SAVASLAR` 8 AÇIK — Ⓒ + AD BENZERLİĞİ · `DEGISMEZ3-0907`

> Amaç: `SEFERLER`de kurulan ölçütü **çapalamadığı yerde** sınamak
> (`§11`: *"tek vakada test edilen bir ölçüt test edilmiş sayılmaz"*).

## 🔴 ÖNGÖRÜM ÇÜRÜDÜ — ve mazeret şartım devreye girdi
```
ÖNGÖRÜ (ölçümden ÖNCE, betiğin docstring'inde):
  "8 açığın ÇOĞU `savas_basi` TAŞIYOR · Ⓒ+ad ile kanıtlı kapanan ≥ 4"
ÖLÇÜM:
  `savas_basi` taşıyan  0 / 8        ← ÇÜRÜDÜ
  kanıtlı kapanan       0
```
**Mazeretimi de önceden yazmıştım:** *"`savas_basi` taşımayan kayıtlarda
aralık YOKTUR ⇒ Ⓒ uygulanamaz, onlar Ⓐ'da kalır ve bu MAZUR."*
⇒ Sekizinin sekizi de o kovaya düştü.

🔴 **Yani ölçüt `SAVASLAR`da ÇÜRÜMEDİ — SINANAMADI.**
Bu bir çürütme değil bir **`ÖLÇÜLEMEDİ`**: çapa oraya **uygulanamıyor**,
çünkü uygulanacağı veri (aralık) yok. Ölçüt hâlâ tek katmanda
(`SEFERLER`) kanıtlı, ve **denetim yazmamak için ikinci sebep budur.**

## ① 8 AÇIĞIN TAMAMI
```
1364-07-01  Sırpsındığı            -547g
1480-05-23  Rodos kuşatması         +66g
1511-03-01  Şahkulu (Teke)          +31g
1620-09-17  Cecora (Ţuţora)        +387g
1621-09-02  Hotin kuşatması         +37g
1638-11-15  Bağdat kuşatması        +39g
1657-07-19  Çanakkale zaferi        +37g
1683-07-14  II. Viyana kuşatması    +60g
```
📌 **Beşi KUŞATMA** — yani doğası gereği uzun süreli, ve `savas_basi`
alanı tam da **onlarda yok.** Alan 28 kayıtta var; açıkların hiçbirinde
değil.

🟢 **VE BU ANLAMLI BİR DESEN, tesadüf değil:** `savas_basi` yazan kişi
kuşatmanın başlangıcını biliyor demektir — ve büyük ihtimalle kronoloji
maddesini de o yazmış. ⇒ **Aralık bilgisi olan kayıtlar zaten senkron.**

## ② ÖNERİ — denetim değil, VERİ
```
8 açık kayda `savas_basi` YAZILIRSA Ⓒ ölçütü uygulanabilir hâle gelir
ve (SEFERLER'deki desene göre) çoğu kapanır.
```
⚠️ Ama bu bir **tarih iddiasıdır** ve `§4`e göre kaynak ister — mekanik
türetilemez. Ölçüt uyumsuzluğunu veri yazarak çözmek, `SEFERLER`de
olduğu gibi bedava değil.

## 🔴 ③ KENDİ ALETİMİN KUSURU — 9 saydım, gerçek 8
```
denetle.savas_senkronu → ayk: 8 kayıt
benim işlediğim              : 9
```
**Sebep:** açıkları `ad` ile eşleştirdim, ve `ad` **benzersiz bir anahtar
değil**:
```
İstanbul kuşatması  ×3     Belgrad kuşatması ×3
Rodos kuşatması     ×2     Korfu kuşatması   ×2
```
`Rodos kuşatması` **1480** açık; benim ad bazlı seçimim **1522**'yi de
aldı — o kayıt aslında **senkron**.
📌 `§11`in *"eşleşme bulmak, doğru şeyi bulmak değildir"* dersinin
**anahtar** yüzü. Doğru anahtar `(t, ad)`.
🟢 **Hükmü değiştirmiyor** (9'un 9'u da `savas_basi` taşımıyordu, 8'in
8'i de) — ama sayı yanlıştı ve düzeltiyorum.

## 🟢 ④ DURAK KÖKLER ELLE YAZILMADI, ÖLÇÜLDÜ
Şart buydu: *"«ortak kelime» nasıl sayılıyor? Ekler ortak çıkarsa ölçüt
HER ŞEYİ eşleştirir."*
```
ölçüt: bir kök kronoloji maddelerinin >%2'sinde geçiyorsa AYIRT EDİCİ DEĞİL
sonuç: 26 durak kök
en sık: fethi · osmanl · antlas · kaybi · alinis · istanb · seferi ·
        savasi · geri · sultan · sonu · mehmed · pasani · isgali · baslam
```
📌 Elle yazsaydım `savasi`/`seferi`/`kusatm`ı listeler, ama `fethi` ·
`alinis` · `ilhaki` · `baslam`ı **kaçırırdım** — ve onlar da ayırt edici
değil. Eşik ölçülebilir, liste değil.
⚠️ Bu turda **kullanılamadı** (0 kayıt Ⓒ'ye girdi); `SEFERLER`de ve
ileride kullanılmak üzere kayıtta.

## ÖLÇMEDİKLERİM
- 8 açığın **gerçekten maddesiz olup olmadığı**: Ⓒ uygulanamadığı için
  `Ⓐ`nın verdiği *"±30 gün içinde yok"*tan öteye **gidemedim**. Bir
  kuşatmanın maddesi başlangıcında olabilir ama başlangıcı veride yok.
- `savas_basi` taşıyan 28 kaydın **hepsinin** senkron olduğunu
  varsaydım (açıklarda 0 tane olmasından); **ayrıca saymadım**.
- Mükerrer adların (`İstanbul kuşatması` ×3 …) başka bir ölçümü bozup
  bozmadığı — yalnız kendi aletimde ölçtüm.

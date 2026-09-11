# BULGU — KORİDOR AĞZI: kural ile kod ayrışıyor mu

> **Oturum:** KORİDOR AĞZI (önceki adlar: B KORİDOR II → YAYIN HAZIRLIK →
> KÜNYE ÖNCESİ → ...) · **Sevk:** koordinatör, 11 Eylül 2026
> `arac/` DONUK — bütün ölçüm shapely ile AYRI bir scratch script'te
> yapıldı (`arac/uret_petek.py`ye dokunulmadı), kod tam olarak SAHTE
> ETMEDEN (aynı formüller) test geometrileri üzerinde çalıştırıldı.

## 0. D022 ÖNGÖRÜ — ölçümden ÖNCE

```
Onceki turda (~75-100 benzersiz isim) tahmin edilmisti. Bu turda soru
FARKLI: kacinda "huni etkisi" var? TAHMIN: yarisindan azinda (~%20-30) —
cunku cogu gercek koridor DAR ve UZUN (tek tip genislik), huni/ters-huni
sekli COGRAFI olarak daha nadir bir alt-sinif olmali.
```
Sonuç: **ÇÜRÜDÜ — YÖNDEN.** Bu tur gerçek veri üzerinde SIKLIK ölçmedi
(§3 — henüz mümkün değildi), yalnız matematiksel bir SINIF sordu. Ama
matematik gösterdi ki soru *"kaçında huni etkisi var"* değil, **"hangi
YÖNDE huni etkisi mümkün"** — ve cevap TEK YÖNLÜ çıktı (aşağıda §2).
Bu, öngörünün kendisinin YANLIŞ ÇERÇEVELENMİŞ olduğunu gösteriyor —
`§11`: bir ölçüm bazen soruyu YENİDEN ŞEKİLLENDİRİR.

---

## 1. İKİ TANIM, MATEMATİKSEL OLARAK AYRIŞTIRILDI

```
KOD:     w_der = 2 * alan(c) / çevre(c)         — GÖVDENİN ORTALAMASI
EMRE:    koridorun karaya bağlandığı yerdeki genişlik — AĞZIN KENDİSİ
```
`shapely` ile "dogbone" (kemik biçimi — dar/geniş iki segment art arda)
test şekilleri kuruldu, kodun BİREBİR AYNI formülleriyle (`2*area/length`,
`hausdorff_distance`) ölçüldü. Tam script: bu görevin scratch dizininde,
sonuçlar aşağıda tekrarlanabilir sayılarla.

### 1.1 HUNİ (ağız DAR, gövde GENİŞ) — 3 örnek, ÜÇÜ DE AYNI YÖNDE

```
mouth=2  body=20  derinlik=20   w_der=5.50   d_der=21.93  gerçek_ağız=2.0
mouth=2  body=20  derinlik=40   w_der=7.33   d_der=41.00  gerçek_ağız=2.0
mouth=2  body=50  derinlik=10   w_der=4.33   d_der=26.00  gerçek_ağız=2.0
```
Üçünde de **KOD ve GERÇEK AYNI KARARA varıyor: DOLDURULUR.** `w_der`
ortalamayı şişirse bile, `d_der` (ağızdan en uzak nokta) her zaman ondan
daha hızlı büyüyor — çünkü `d_der` tüm derinliği kat ederken `w_der`
yalnız ENİNE ortalamayı yansıtıyor. **Bu şekil ailesinde huni yönünde
AYRIŞMA BULAMADIM** — aşırı oranlarla (mouth=1, body=300) bile denendi.

### 1.2 🔴 TERS HUNİ (ağız GENİŞ, gövde DAR) — AYRIŞMA BULUNDU, ÜÇ ÖRNEK

```
mouth=20 len=5  body=2 len=5   w_der=3.67  d_der=10.00  gerçek_ağız=20
  KOD: DOLDURULUR (10.00 > 3.67)     GERÇEK: SIĞ/BIRAKILIR (10.00 < 20)
mouth=30 len=5  body=3 len=5   w_der=4.12  d_der=10.00  gerçek_ağız=30
  KOD: DOLDURULUR                    GERÇEK: SIĞ/BIRAKILIR
mouth=20 len=3  body=2 len=3   w_der=2.54  d_der=6.00   gerçek_ağız=20
  KOD: DOLDURULUR                    GERÇEK: SIĞ/BIRAKILIR
```
**Üçünde de KOD ile GERÇEK ÇELİŞİYOR.** Kodun ortalaması dar kuyruk
tarafından aşağı çekiliyor, gerçek (geniş) ağız görmezden geliniyor.

---

## 2. 🔴 HANGİ YÖN — ve NİÇİN TEK YÖNLÜ ÇIKTI

```
① ağız DAR, ortalama GENİŞ  → BULUNAMADI (bu şekil ailesinde) — d_der
   her zaman w_der'i geçiyor çünkü Hausdorff mesafesi TÜM yolu ölçüyor,
   ortalama genişlik onu YAKALAYAMIYOR
② ağız GENİŞ, ortalama DAR  → BULUNDU, ÜÇ örnekte de — kodun ortalaması
   dar kuyruktan çekiliyor, gerçek geniş ağız KAYBOLUYOR
```
⇒ **Matematiksel olarak, en azından "dogbone" (iki-segmentli) şekil
ailesinde, hata TEK YÖNLÜDÜR: ② (ağız geniş → yanlışlıkla DOLDURULUR).**
Sebep yapısal: `d_der` (Hausdorff, en uzak nokta) monoton biçimde tüm
derinliği yansıtırken, `w_der` (alan/çevre ortalaması) şeklin EN DAR
kısmından etkilenip aşağı çekilebiliyor — ama en GENİŞ kısımdan aynı
kolaylıkla YUKARI çekilmiyor çünkü çevre (payda) da onunla birlikte
büyüyor. Bu **asimetri** ①'i olanaksız, ②'yi mümkün kılıyor.

⚠️ **BU BİR KANIT DEĞİL BİR GÖZLEM** — yalnız "dogbone" ailesinde
denendi (iki düz segment). Gerçek coğrafi koridorlar eğri/düzensiz
olabilir; ①'in HİÇBİR gerçek şekilde imkânsız olduğu İDDİA EDİLMİYOR,
yalnız test edilen aile bunu göstermedi.

📌 **SONUÇ — ② SESSİZ, ① (bulunsaydı bile) GÖRÜNÜR OLURDU:**
① bulunsaydı sonucu bir "uzun ince şerit haritada KALIR" olurdu —
kullanıcı gözle görür, şikayet gelir (tam da Emre'nin B3'ü açtığı sebep).
② ise TERSİNE: bir alanın su/boşluk kalması gereken GENİŞ AĞIZLI bir
kısmı sessizce KARAYA döner — kullanıcı bunu ancak dikkatli bakarsa,
ya da "burada neden su/boşluk yok" diye SORARSA fark eder. **Sessiz
hata her zaman görünenden PAHALIDIR** (`§11` ailesi) çünkü kimse aramaz.

---

## 3. AĞZI GERÇEKTEN ÖLÇMEK NE KADAR PAHALI — VE UCUZ BİR YÖNTEM BULUNDU

```
🟢 ÖNERİ: agiz.length / 2.0
```
Kod zaten `agiz = temiz(c.intersection(disari_kenar))`u hesaplıyor
(satır 1652) — EK bir geometrik işlem GEREKMİYOR. `disari_kenar` ince bir
şerit (0,01° tampon) olduğu için `agiz` de ince bir dikdörtgene yakın
şekildedir; **ince bir dikdörtgenin çevresi ≈ 2×(uzun kenar)**, yani
`agiz.length / 2` uzun kenarı, yani **AĞZIN GENİŞLİĞİNİ** verir.

**Doğrulandı (aynı test şekilleriyle, gerçek `disari` sınırıyla):**
```
gerçek_ağız=2   → agiz.length=4.02   → /2 = 2.01   (fark +0.5%)
gerçek_ağız=20  → agiz.length=40.02  → /2 = 20.01  (fark +0.05%)
gerçek_ağız=30  → agiz.length=60.02  → /2 = 30.01  (fark +0.03%)
```
⚠️ **İlk denemem YANLIŞ ÇIKTI ve kendim düzelttim**: önce `2*agiz.area/
agiz.length` (w_der ile AYNI formül, ama agiz'e uygulanmış) önerdim —
bu SIFIRA yakın bir sayı verdi (0,01) çünkü ince bir şeritte bu formül
UZUN kenarı değil KISA kenarı (tamponun kendi kalınlığını) ölçüyor. Basit
`agiz.length/2` doğru çıktı. **Bir formülü başka bir geometriye taşımak,
aynı ismi taşısa bile aynı şeyi ölçmez** — `§11` adayı.

**Maliyet:** SIFIRA yakın — `agiz` zaten bellekte, yalnız `.length`
okunuyor. `hausdorff_distance` gibi pahalı bir işlem YOK. **"Pahalı,
uygulanamaz" DEĞİL — ucuz ve uygulanabilir**, bu görevin olumlu sonucu.

⚠️ **Sınırı:** yalnız `agiz` TEK PARÇA ve şerit-benzeri (ince, düz) iken
güvenilir. `agiz` birden fazla parçaya bölünmüşse (koridor birden fazla
noktada dışarı değiyorsa) ya da çok köşeli/düzensizse formül BOZULABİLİR
— gerçek üretim verisiyle (koşu 10) SINANMALI, burada yalnız sentetik
şekillerle doğrulandı.

---

## 4. YAMA GENİŞLETİLDİ

`denetim/YAMA-B3-LOG-0911.py`e dördüncü bir parça eklendi (Parça D):
her "kalan ihlal" kaydında **İKİ genişlik de** (`w_der` VE `agiz_genislik
= agiz.length/2`) tutuluyor — koşu 10'da ayrışmanın GERÇEK sıklığı
(kaç kayıtta `w_der` ile `agiz_genislik` arasında anlamlı fark var,
kaçında bu fark KARARI değiştiriyor) ölçülebilecek.

---

## 5. ÖLÇMEDİKLERİM

```
① GERÇEK veri üzerinde huni/ters-huni sıklığı — bu görev SENTETİK
   şekillerle sınırlı, koşu 10'un logu gelmeden ölçülemez
② `agiz.length/2`nin GERÇEK, çok parçalı/düzensiz ağızlarda ne kadar
   sağlam kaldığı — yalnız sentetik, tek-parça, düz kenarlı örneklerle
   sınandı
③ Bu ayrışmanın bugüne kadar üretilen HARİTAYI ne kadar etkilediği —
   yön (sessiz/karaya çevirme) belirlendi, BÜYÜKLÜK belirlenmedi
```

# B-GORUNUM-0072 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazılma anı: 2026-09-20, "arac/dolgu.py" HİÇ KOŞMADAN ÖNCE.
Evren: "data/donemler.js" (Osmanlı dönemleri) + "data/devletler_harita.js"
(yabancı devlet dönemleri) — motorun EN SON yazdığı hâl (r9255 / c14c7e5).
Sınav dilimi: ilk 20 dolgu kesiti (tarih sırasına göre), MOTOR_DOLGU_KESIT=20.

## Ö-1 · Kesit başına ek süre
Tahmin: **0,8 – 3,0 sn/kesit** (tek çekirdek). Gerekçe: kesit başına iş
= devlet sayısı kadar buffer(+r).buffer(-r) + bir unary_union + bir
difference. Kesitte ortalama ~40 canlı gövde varsayıyorum.
🔴 3 sn/kesit üstü çıkarsa tam koşuya (~2000 kesit) **1,5 saatten fazla**
eklenir ⇒ o hâlde kapanış yarıçapı düşürülmeli ya da dolgu önbelleğe alınmalı.

## Ö-2 · data/dolgu.js toplam boyutu
Tahmin: **250 KB – 1,2 MB** (20 kesitten tam koşuya doğrusal ölçekleme ile).
Gerekçe: dolgu parçaları A gövdelerinden küçük ve azdır; halka havuzu +
parça havuzu (A ile aynı iki kademeli şema) kullanıldığı için tekrar eden
halkalar bir kez yazılır.
🔴 2 MB üstü çıkarsa index.html'e koşulsuz yüklenmemeli (tembel yükleme).

## Ö-3 · A çıktısının değişmesi
Tahmin: **HİÇ DEĞİŞMEZ — sha256 birebir aynı.** Gerekçe tahmin değil, YAPISAL:
arac/dolgu.py A boru hattına hiç dokunmuyor; A yazıldıktan SONRA, yazılmış
çıktıyı OKUYARAK çalışıyor ve yalnız yeni bir dosya üretiyor.
🔴 Bu sayı 0 çıkmazsa tasarım yanlış demektir, ayar değil.

## Ö-4 · Kaç parça, hangi cins (20 kesit)
Tahmin: kesit başına **5 – 40 parça**; cins dağılımı
bosluk > koridor > paylasim > enklav-bag.
Gerekçe: motorda B2 (enklav köprüsü, ≤250 km) ve B3 (koridor kırpma) ZATEN
A'nın içinde koşuyor — yani kolay enklavlar ve sığ koridorlar A'da çözülmüş
durumda. Dolguya kalan artık ağırlıkla ① B2/B3'ün "başkasının toprağı var"
diye REDDETTİĞİ yerler ② 250 km'den uzak parçalar ③ puanlama kapısının
kestiği alanlardır.
🔴 enklav-bag SIFIR çıkarsa bu bir kusur DEĞİL, B2'nin işini yaptığının
kanıtıdır — ama sıfırın sebebi ayrıca doğrulanmalı (boş küme her öngörüyü
doğrular).

## Ö-5 · "Gerçek enklav" (incelenecek) raporu
Tahmin: **kesit başına 0 – 3 vaka.** Bunlar dolgunun başka devletin A
toprağına çarpıp DURDUĞU yerlerdir; örtmez, raporlanır.

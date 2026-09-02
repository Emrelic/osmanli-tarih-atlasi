# KUTAİSİ ÇAKIŞMASI — karar dosyası

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname M-1903 (0034 devam turu)
> 🔒 Koşu canlı · `arac/` üçlüsü okundu, YAZILMADI. Bu dosya bir RAPORDUR, yama değildir.

---

## 0. NİÇİN BU DOSYA — ve niçin ÜÇÜNCÜ BİR YAMA YAZMADIM

`arac/_sahiplik_uygula.py` kuru koşusu şunu diyor:
```
Kutaisi   ÇAKIŞMA: yer_yama_ferhatpasa.js vs yer_yama_kafkas.js — içerik farklı, KARAR GEREK
```
Paketimin `H-0011`/`H-0017`/`H-0023` kalemleri tam bu kaydın üstünde duruyor ve
koordinatör *"yama mekanizması açıldı, altı kalemi yeniden değerlendir"* dedi.

🔴 **Ama ilk yaptığım şey yama yazmak DEĞİL, ORTAMI ÖLÇMEK oldu — ve iyi ki:**
```
① yazacağım düzeltmeyi (1555-07-23 → 1555-05-29) BAŞKA BİR OTURUM ZATEN YAPMIŞ
   (HAZIR KITA OPUS 85, 30 Ağustos, `yer_yama_kafkas.js` içinde, notuyla birlikte)
② Kutaisi'de ZATEN ÜÇ yama dosyası var: kafkas · ferhatpasa · kademe2
③ Sohum · Batum'da da bekleyen yamalar var (yer_yama.js · ferhatpasa · hayalet)
```
⇒ Üçüncü bir yama yazsaydım **çakışmayı çözmez, büyütürdüm.** Eksik olan şey
bir yama değil, **bir KARAR** — ve kararı verdirecek ölçüm bu dosyadadır.

📌 `CLAUDE.md §11`: *"yakın mükerrer"* tuzağının yama tarafı. Bir kaydı düzeltmek
isteyen üçüncü oturum, o kaydın **kaç kişi tarafından zaten tutulduğunu** ölçmeli.

---

## 1. ÇAKIŞMA NEDİR — iki dosya, tek alan, iki gün

```
yer_yama_kafkas.js       v:[{ f:"1555-05-29", t:"1810-02-20" }]
yer_yama_ferhatpasa.js   v:[{ f:"1578-08-09", t:"1810-02-20", k:"İmereti krallığı (tâbi)" }]
                              ▲ bugün VERİDE olan bu
```
İkisi de aynı şeyi söylüyor (İmereti Osmanlı **tâbii**, `d:` değil `v:`), aynı günde
bitiyor. **Ayrıştıkları tek şey BAŞLANGIÇ GÜNÜ** — ve aradaki fark **23 yıl 2 ay**.

---

## 2. İKİ GEREKÇE — ve cinsleri FARKLI

```
1555-05-29  KAYNAK gerekçesi
            TDV `gurcistan` (gövde okundu, birebir):
            "Amasya Antlaşması'na göre (1555) İmeret, Dadyan (Megrel ve Svanet),
             Güryel, Daveli/Tao-eli Osmanlı Devleti'ne; Kartli, Kahet ve Mosuk ise
             Safevî Devleti'ne veriliyordu."
            ⇒ İmeret'i Osmanlı tarafına GEÇİREN olayın kendisi bu antlaşmadır.

1578-08-09  TUTARLILIK gerekçesi
            "Batum · Sohum · Tiflis · Zagem dördü de 1578-08-09 kullanıyor;
             Zagem BİREBİR aynı biçimi taşıyor: v:[{f:1578-08-09, k:'Kaheti
             krallığı (tâbi)'}]"
            ⇒ Kaynak DEĞİL, KOMŞU hizası.
```
🔴 **İkisi aynı ağırlıkta değildir.** Bu projede tutarlılık seçimi meşrudur ama
**kaynak günü varken tutarlılığa düşülmez** — `yer_yama_iran.js` Mîyandoab
kaydında bu ayrım zaten yazılı: *"Bu bir KAYNAK GÜNÜ DEĞİL, TUTARLILIK
seçimidir ve açıkça yazılıyor."* Burada kaynak günü **var.**

---

## 3. İKİ GÜN DE DEĞİŞMEZ 2'DEN GEÇİYOR — ölçtüm

`v:` bir **Osmanlı** kırılmasıdır ⇒ Değişmez 2, ve tavanı **SIFIR**.
Çekirdek evren (`data/olaylar*.js`, `denetle.py:902`) tarandı:
```
1555-05-29   ±0 gün   olaylar.js       "Amasya Antlaşması"                    ✓
1578-08-09   ±0 gün   olaylar_ek2.js   "Çıldır Zaferi — doğu savaşı başladı"  ✓
```
⇒ **Denetim ikisini de kabul eder.** Karar teknik değil, **tarihî.**

🟡 **VE ÜÇÜNCÜ BİR GÜN ÇÜRÜTÜLDÜ — bu turda yeniden ölçtüm:**
```
1555-07-23   en yakın madde 52 GÜN uzakta (1555-06-01)  🔴 ±30'un DIŞINDA
```
Bu, devredilen ilk yamanın günüydü. HAZIR KITA OPUS 85 onu 30 Ağustos'ta
çürütüp düzeltmiş; **bağımsız olarak aynı sonucu ölçtüm.** İki ayrı oturumun
aynı sayıya varması, o düzeltmeyi tek bir oturumun hükmü olmaktan çıkarıyor.
📌 Ve ilk yamanın notu *"1555-07-23, Amasya Antlaşması'nın külliyattaki günü"*
diyordu — **külliyat** doğru kelimeydi ama **kova** yanlıştı: o gün
`olaylar*.js` çekirdeğinde YOK.

---

## 4. HÜKÜM — ve YAN ETKİSİ, ikisi ayrı satırda

**ÖNERİM: `1555-05-29` (yer_yama_kafkas.js kazanır).**
Gerekçe: kaynak günü tutarlılık günü yener; TDV o antlaşmayı İmeret'in el
değiştirme sebebi olarak **adıyla** gösteriyor; ve gün Değişmez 2'den geçiyor.

🔴 **AMA YAN ETKİSİ VAR VE ÖNCEDEN YAZIYORUM — mazeret sonradan bulunmasın:**
TDV'nin o **tek cümlesi** İmeret'le birlikte **Dadyan (Megrel-Svanet)** ve
**Güryel**'i de Osmanlı'ya veriyor. Veride onların noktaları şöyle:
```
Sohum   (Megrel/Abhaz)  d: 1578-08-09 → 1810-07-11     1555-1578 arası `gurcistan`
Batum   (Güryel)        d: 1578-08-09 → 1878-07-13     1555-1578 arası `gurcistan`
Hulo    (Acara/Güryel)  d: 1578-08-09 → 1878-03-03     1555-1578 arası `gurcistan`
```
⇒ Yalnız Kutaisi 1555'e çekilirse, **1555-1578 arası 23 yıl boyunca** İmereti'nin
BAŞKENTİ Osmanlı tâbii (açık kırmızı), kıyısı ise BAĞIMSIZ Gürcistan (pembe)
görünür. Bu, `H-0011`de Emre'nin şikâyet ettiği **parçalanmayı azaltmaz,
ARTIRIR.**

**Tutarlı olan çözüm** aynı TDV cümlesini üç yere birden uygulamaktır:
```
Sohum · Batum · Hulo (Acara)   v:[{ f:"1555-05-29", t:"1578-08-09" }]   EKLENİR
                                mevcut `d:` 1578-08-09'dan itibaren AYNEN KALIR
```
İki kırılma doğar, ikisi de maddeli (1555-05-29 ±0 · 1578-08-09 ±0).
Model bunu **ifade edebiliyor** — Osmanlı tâbiiyeti `v:`nin tam olarak
tanımlandığı hâl (Gürcistan'ın DOĞU yarısındaki Safevî tâbiiyetinin aksine,
ki o ifade edilemiyor — bkz. `BULGU-GURCISTAN-0034.md §6.3`).

🔴 **YAZMADIM, ve sebebi bir sayı:** Sohum ve Batum'da **zaten üç ayrı yama
dosyası** var (`yer_yama.js` · `yer_yama_ferhatpasa.js` · `yer_yama_hayalet.js`).
Dördüncüsünü yazmak, çözdüğümden fazla çakışma üretirdi. **Karar verilsin, sonra
TEK dosyada, TEK turda yazarım.**

---

## 5. KOORDİNATÖRE — üç şıklı tek soru

```
(A) 1555-05-29 · YALNIZ Kutaisi     → kaynak doğru, GÖRÜNTÜ bozulur (23 yıl bölünme)
(B) 1555-05-29 · Kutaisi + Sohum + Batum + Hulo   → kaynak doğru VE görüntü tutarlı
                                                     ⇒ ÖNERİM BU
(C) 1578-08-09 · hepsi (bugünkü hâl)  → görüntü tutarlı, ama TDV'nin adıyla
                                        gösterdiği kırılma haritada HİÇ görünmez
```
(B) seçilirse: `yer_yama_kafkas.js` Kutaisi kaydı geçerli sayılır,
`yer_yama_ferhatpasa.js`inki düşer, ve üç yeni `v:` kaydını ben yazarım.

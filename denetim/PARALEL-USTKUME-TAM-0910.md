# PARALEL — ÜST KÜME ORANI, TAM GİRDİDE · **SONUÇ**

```
ÖNGÖRÜ  denetim/PARALEL-USTKUME-ONGORU-0910.md · commit 03bee4a · 19:23:14
        (alet yazılmadan önce commit'lendi)
ALET    denetim/ARAC-PARALEL-USTKUME-0910.py
VERİ    denetim/PARALEL-USTKUME-TAM-0910.json
GİRDİ İZİ  99c2178e3a55f1b0a9236e93ac31280f…  (3808 nokta · 579 künye)
🔴 arac/ SALT OKUNDU — hiçbir şey yazılmadı. Geometri KOŞTURULMADI.
```

# 🔴 ÖNGÖRÜ ÇÜRÜDÜ

```
ÖNGÖRÜ   "tam girdide oran DAHA YÜKSEK çıkacak · bant %12–30"
ÖLÇÜM    %7,5                      ← ALT KÜMENİN (%11,1) DE ALTINDA
```

**Kurtarma girişimi yok.** Öngörüde açıkça şöyle yazmıştım: *"ölçüm
%11,1'in altında çıkarsa öngörü ÇÜRÜMÜŞTÜR ve öyle yazılacak; 'Anadolu
istisnaymış' diye kurtarılmayacak."* Çürüdü.

## 🟢 VE ÇÜRÜTEN ŞEY, ÖNGÖRÜNÜN KENDİ KARŞI ARGÜMANIYDI

Öngörüde bir karşı argüman yazıp **reddetmiştim**:
> *"Anadolu'da Osmanlı `d:`/`v:` sınırları çok yoğun (yerler tek tek
> alınmış), yani ② ve ③ orada da bol. Bu, alt küme oranını şişirmiş
> olabilir ve tam girdide oran DÜŞEBİLİR. ⇒ Yine de 'yüksek' diyorum."*

**Doğru olan oydu.** Anadolu kutusu, Osmanlı fetih kronolojisinin en
yoğun olduğu yer — yani `aktif`i değiştirmeyen kesim noktası orada
**ortalamanın üstünde.**

📌 Ders, ve bu oturumun üçüncü öz-çürütmesi: ***bir öngörünün içine
yazılmış karşı argüman, reddedilmiş olsa bile bir ÖLÇÜMdür — ve
reddedilme gerekçesi ölçülmemişse öngörü zaten yarı çürüktür.***
Ben "kat kat büyük" dedim ve **o oranı hiç ölçmedim.**

## ① MEKANİZMA YÖNÜ DOĞRUYDU, AĞIRLIĞI YANLIŞ

Öngörünün mekanizması (*roster/eşzamanlı oranı büyük devletler daha çok
boşa harcar*) **veriye uyuyor** — ama toplamı belirlemiyor:
```
avusturya   ust  116 · gerçek   62 · boşa 54  (%87)   ← mekanizma BURADA
ceneviz     ust   27 · gerçek   16 · boşa 11  (%69)
timurlu     ust   46 · gerçek   29 · boşa 17  (%59)
sirbistan   ust   23 · gerçek   16 · boşa  7  (%44)
ingiltere   ust  331 · gerçek  280 · boşa 51  (%18)   ← EN BÜYÜK MUTLAK
rusya       ust  235 · gerçek  204 · boşa 31  (%15)
ispanya     ust  178 · gerçek  167 · boşa 11  (%7)    ← ve ÇOĞU BÖYLE
```
⇒ Yüksek oranlı devletler **az dönem** taşıyor; dönemlerin çoğu düşük
oranlı devletlerde. **Ağırlıklı toplam %7,5.**
📌 `D049` ailesi — *ölçüm doğru, çıkarım yanlış*'ın bir alt yüzü:
**mekanizma doğru teşhis edildi, AĞIRLIĞI hiç sorulmadı.**

## ② KALİBRASYON — sapma SIFIR

Yaklaşım (motorun ETA bloğunun mantığı: `devir_kumesi` ve
`_dolgu_kumesi` çağrılmıyor) aynı Anadolu kutusunda koşturuldu:
```
yaklaşım  üst 329 · gerçek 296 · %11,1
SINAVDAN  üst 329 · gerçek 296 · %11,1     (canlı motorun kendi çıktısı)
sapma     üst +0  · gerçek +0   · fark 0,0 puan     → KALİBRE ✓
```
⇒ Bu kova için yaklaşım **birebir**; tam girdideki %7,5 güvenilir.
⚠️ Kalibrasyon **bu iki sayı için** geçerlidir, `aktif` kümelerinin
kendisi için değil — `devir_kumesi`/`_dolgu_kumesi` `aktif`i daraltıp
genişletiyor, ama **birleştirme kararını** (ardışık eşitlik) bu örneklemde
değiştirmemiş.

## ③ DÜZELTİLMİŞ KAZANÇ TABLOSU

```
TAM GİRDİ   üst küme 4012 · gerçek 3731 · boşa 281 · %7,5
            toplam ağırlık 233.563 hücre-birleşimi
```
FAZ 1 **üst kümeyi** koşar, FAZ 2 **gerçeği** kullanır — hızlanma bu
asimetriyle hesaplandı (payda üst kümenin LPT makespan'i):

| N | aşama (üst kümeli) | aşama (ideal) | KOŞU | süre |
|---|---|---|---|---|
| 4 | 3,73× | 4,00× | 2,51× | **8,0 saat** |
| 8 | 7,46× | 8,00× | 3,46× | **5,8 saat** |
| 12 | 11,20× | 12,00× | 3,96× | **5,1 saat** |
| **16** | **14,93×** | 16,00× | **4,27×** | **4,7 saat** |
| 24 | 22,39× | 24,00× | 4,64× | 4,3 saat |
| 32 | 29,85× | 32,00× | 4,84× | 4,1 saat |

*(aşama payı %82,1 · koşu 8 = 1205,5 dk = 20s 05dk)*

🟢 **HÜKÜM: üst küme maliyeti kararı DEĞİŞTİRMİYOR.** 16 çekirdekte
ideal 16,00× yerine 14,93× — koşu 4,34× yerine **4,27×**, yani
4,6 saat yerine **4,7 saat**. Fark **6 dakika.**

🔴 **VE ASIL SINIR AMDAHL'DIR, PARALELLİK DEĞİL:** aşama %82,1
olduğu için 32 çekirdek bile koşuyu 4,84×'in üstüne çıkaramıyor.
⇒ 16'dan sonrası **hızla doyuyor** (16→24 yalnız 24 dakika, 24→32 yalnız
12 dakika). Bir sonraki kazanç eşiği paralellikte değil, **aşama dışı
%17,9'da** (Dönemler %8,6 · Çöl tavanı %4,4 · Varlık epokları %2,7).

## ④ AÇIKÇA ÖLÇÜLMEYEN
```
⚪ `aktif`in TAM hâli (devir_kumesi + _dolgu_kumesi ile) — geometri
   hattı gerektiriyor; kalibrasyon bu kova için sıfır sapma verdi ama
   BAŞKA bir kova için vermeyebilir
⚪ 3731 vs önceki ölçümün 3730'u — girdi arada değişti (izler farklı),
   1 dönemlik fark ondan; ikisi de kendi tabanında doğru
⚪ gerçek 16 çekirdekli makinede ölçüm (bu makine 4 fiziksel)
```

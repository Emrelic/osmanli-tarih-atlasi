# SIZMA DERİNLİĞİ ÖLÇÜMÜ — KITA 11 · 12 Eylül 2026

> Emre: *"sızmayı ölçtür."* · sevk: tahta **M-3584** ·
> karar: `oturumlar/MENZIL-KARARLARI-0912.md` (bütçe **40 saat TEK YÖN**,
> özne **rutin idare**)

**Alet** `denetim/ARAC-SIZMA-0912.py` — 3 birim sınavı, 3'ü de geçiyor
**Veri** `denetim/OLCUM-SIZMA-0912.json` · **Harita** `denetim/KITA11-SIZMA-*.png`
**Öngörü** `denetim/ONGORU-SIZMA-0912.md`, ölçümden **önce** commit'lendi
(`d1bbc9f`) — hüküm: **TUTTU 4 · ÇÜRÜDÜ 5**

🔴 **CEZA EKLENMEDİ** (`M-3584 ④`). Üç kademe de aynı Tobler eğrisini kullanır;
aralarındaki tek fark **eğimin nereden okunduğudur**.

---

## 0. ⑥ DEM HİZASI — YAMA TUTMUŞ

Taze koddaki (`7803a87`) mantık birebir tekrarlandı:
```
Everest −0,013 · Mont Blanc −0,008 · Elbruz −0,030 · Kilimanjaro −0,008
Ağrı Dağı +0,023 · K2 −0,055        ⇒ en büyük kayma 0,055° = BİR HÜCRE
```
Önceki hâl +0,39° … +0,88°'di. **Gerilme kesilmiş.**
⚠️ Aconcagua **kullanılmadı** — koordinatörün uyarısı (komşu Cerro Mercedario
ortalanmış hücrede onu geçiyor, sınav yanlış zirveyi bulur).

---

## 1. YÖNTEM — ve hangi seçim kimin

```
ızgara      0,05° (motorunkiyle aynı) · 8 komşulu Dijkstra · sürtünme HEDEF
            hücreden okunur (motorun kendi kuralı, uret_petek.py:2320)
kara        ne_10m_land − göller (motorun kendi kaynakları; İsviçre'de 5,
            Kafkasya'da 2 göl parçası çıkarıldı)
bütçe       40 saat, TEK YÖN                       ← EMRE KARARI
hız         Tobler v = 6·exp(−3,5·|S+0,05|)        ← R1/KITA 9'un alanı,
            BEN SEÇMEDİM; koordinatörün M-3584'teki hesabıyla aynı olsun diye
tohumlar    ATLASIN KENDİ yerleşimleri (arac/girdi.py ile okundu)
```

### Üç eğim kademesi — yalnız bu değişir
```
(a) MOTOR   S = |∇z_ort| / 5566 m          bugünkü hâl
(b) TRI     S = (TRI/8) / d_ort(enlem)     R3'ün hücre içi yerel eğimi
(c) GEÇİT   S = 2·(geçit − z_min) / 5566   eyerden geçip inmek
```

### 🔑 VE BİR AYRIM ÖLÇÜM SIRASINDA EKLENDİ: SINIRLAYAN NE?
İlk turda Kutaisi'de **üç kademe de aynı 88,1 km** verdi. Sebep eğim değil
**Karadeniz kıyısıydı**. Artık her sektörde uç hücrede harcanan saat
raporlanıyor: bütçenin %90'ından fazlası harcanmışsa **BÜTÇE**, değilse
**KIYI/ENGEL** sınırlıyor. Aşağıdaki bütün sayılar **bütçe sınırlı**
sektörlerdendir.
📌 Bu ayrım olmasaydı Kutaisi *"dağ 88 km'ye kadar sızdırıyor"* diye
raporlanacaktı; gerçek sayı **108 km** ve 88 km deniz.

---

## 2. SONUÇ — EN KÖTÜ (bütçe sınırlı) SEKTÖRDE DÜZ ÇİZGİ SIZMASI

| tohum | (a) motor | (b) TRI | (c) geçit | **926 m ince ızgara** |
|---|---|---|---|---|
| Luzern | 156 | **93** | 102 | **103** |
| Bern | 160 | **104** | 112 | **104** |
| Lozan | 144 | **100** | 106 | **101** |
| Vladikavkaz | 160 | **103** | 117 | **114** |
| Tiflis | 160 | **115** | 121 | **121** |
| Kutaisi | 159 | **105** | 113 | **108** |

🟢 **EN DEĞERLİ SATIR SONUNCUSU:** 0,05°'lik **TRI kademesi**, 36 kat daha
ince (926 m) ızgaranın cevabını **%3-8 içinde** yeniden üretiyor.
⇒ *Izgarayı inceltmeye gerek yok; TRI katmanı o işi görüyor.*
🔴 Motorun bugünkü eğimi (a) ince referanstan **%40-55 daha cömert.**

### Kıvrım katı — asıl bulgu
```
yürünen / düz çizgi     kaba ızgara 1,02 – 1,28     ince ızgara 1,11 – 1,26
ortanca                 ≈ 1,10                      ≈ 1,11
```
**Emre'nin 20 km'i için gereken kıvrım: 5,8.** Ölçülen: **1,1.**

### Ulaşılan alan (bütçe içi)
```
(a) motor  90.777 – 95.689 km²      (b) TRI  52.425 – 71.184 km²
```

---

## 3. 🔑 KONTROL DENEYİ — IZGARAYI 6 KAT İNCELTTİM, KIVRIM DEĞİŞMEDİ

Öngörüde Ö6'yı **dolaylı** kanıtla bırakacağımı yazmıştım. Doğrudan
sınanabildi: aynı pencere, aynı bütçe, hücre **5566 m yerine 927 m**
(İsviçre 1.032×732 = 755.424 hücre · Kafkasya 1.152×846 = 974.592).
```
                   kaba (0,05°)        ince (30 yay-sn)
kıvrım katı        1,02 – 1,28         1,11 – 1,26
sızma (b/ince)     93 – 115 km         101 – 121 km
```
⇒ **Ö6 ÇÜRÜDÜ.** Eksik olan şey ızgaranın çözünürlüğü **değil**: altı kat
inceltmek kıvrımı 1,1'den kıpırdatmadı.
⚠️ Sınırı: 926 m elimizdeki **en ince** veri. Bu bir **alt sınır** ölçümüdür;
daha ince bir DEM'in ne göstereceğini söylemez.

---

## 4. 🔴 EMRE'NİN 20 km'İ ÇIKMIYOR — VE EKSİĞİN BÜYÜKLÜĞÜ ÖLÇÜLDÜ

Hiçbir kademe 20 km'e yaklaşmıyor; en cimri sonuç **93 km**.

**Ters çözüm — 20 km ölçülen yüzeyde hangi bütçeye denk geliyor?**
(ince ızgara, en kötü sektör)
```
Luzern 6,4 sa · Bern 5,2 sa · Lozan 9,3 sa*
Vladikavkaz 6,4 sa · Tiflis 5,7 sa · Kutaisi 5,4 sa
                                        ⇒ ORTANCA ≈ 6 SAAT
```
*Lozan'ın eğrisi tek düze değil (5·5·5·5·29·14 km) — küçük bütçelerde en
kötü sektörü Cenevre gölü kesiyor, bütçe büyüdükçe yeni sektörler açılıp
yeni asgari oluyor. Bu sayı **güvenilmez**, ötekiler tek düze.

⇒ **Emre'nin 20 km'i, ölçülen yüzeyde 40 saatlik değil ≈6 SAATLİK bir
yarıçaptır.** Aradaki fark **6-7 kat**.

**Farkın nereden gelemeyeceği — ölçüldü:**
```
motor → TRI            1,55 kat kapatıyor   (156 → 100 km)
TRI → geçit kotu       0,92 kat (ters yönde, geçit AZ DA OLSA cömertleşiyor)
ızgarayı 6× inceltmek  1,00 kat — HİÇ
⇒ elimizdeki BÜTÜN topoğrafya verisi toplamda ~1,6 kat kapatıyor.
   Kalan ~4,7 kat topoğrafyada DEĞİL.
```
Aynı şey hız cinsinden: 20 km'i 40 saatte yürümek, ölçülen kıvrımla
(1,14) **0,57 km/saat** demektir; Tobler bunu ancak **sürekli %32 eğimde**
verir. Ölçülen eğim: İsviçre ortanca %3,54 · y90 %29,86.
⇒ **y90 hücreler bile o hızı vermiyor**, ve bir güzergâhın tamamının y90
hücrelerden geçmesi gerekirdi.

### 🔴 YORUMLAMIYORUM — adayları SAYIYORUM (`M-3584 ④`)
Kalan ~4,7 katın nerede olabileceği, **hangisi benim alanım değil** diye:
```
① hız eğrisinin kendisi        → R1 / KITA 9'un alanı (Tobler zinde bir
                                 yürüyücüyü ölçer; 16. yy vergi memurunu değil)
② DEM'de olmayan sürtünme      → orman · kar · yol yokluğu · mevsimlik kapanma
                                 (hiçbiri bu veride YOK)
③ öznenin/bütçenin tanımı      → Emre kararı
④ 20 km'in bir yürüyüş yarıçapı
   OLMAMASI ihtimali           → Emre'ye sorulacak bir şey, bana değil
```

---

## 5. İKİ COĞRAFYA AYNI MI? — ① sorusunun cevabı: BENZER, ve bu şaşırtıcı

```
                        İSVİÇRE          KAFKASYA
TRI ortanca              218 m            175 m
z_ort ortanca            450 m            417 m
eğim ortanca (ince)      %3,54            %2,51
eğim y90 (ince)          %29,86           %23,77
sızma (b/TRI)            93 – 104 km      103 – 115 km
kıvrım (ince)            1,11 – 1,26      1,13 – 1,14
```
⇒ **Kafkasya, İsviçre'den DAHA AZ değil DAHA ÇOK sızdırıyor** (%110).
Öngörüm tersini diyordu (Ö4a: %60-90) ve **çürüdü**. Sebebi ölçümde
görünüyor: pencerede Kafkas duvarı dışında geniş düzlükler var (Kür ovası,
Terek ovası) ve bütçe oralara akıyor; İsviçre'nin penceresi baştan sona
engebeli.
⚠️ Yani bu bir *"Kafkasya daha kolay"* bulgusu **değil**, bir **pencere
kompozisyonu** bulgusu. İkisini ayırmak yeni bir ölçüm ister.

---

## 6. ÖNGÖRÜ HÜKMÜ

| öngörü | hüküm | ölçülen |
|---|---|---|
| Ö1 İsviçre sızma 50-85 km | 🔴 ÇÜRÜDÜ | 93-104 km — fazla karamsardım |
| Ö2a kıvrım 1,3-1,9 | 🔴 ÇÜRÜDÜ | 1,02-1,28 |
| **Ö2b kıvrım 5,8'in çok altında** | 🟢 **TUTTU** | 1,1 — beşte biri |
| Ö3a sıralama a > c > b | 🟢 TUTTU | 6 tohumun 6'sında |
| Ö3b a/b oranı 1,4-1,7 | 🟢 TUTTU | 1,39-1,68 (Tiflis 1,39, sınırda) |
| Ö4a Kafkasya İsviçre'nin %60-90'ı | 🔴 ÇÜRÜDÜ | **%110** |
| Ö4b Kafkasya kıvrımı daha büyük | 🔴 ÇÜRÜDÜ | daha küçük |
| Ö5 üç kademe de ≥ 40 km | 🟢 TUTTU | en cimri 93 km |
| Ö6 eksik olan ızgara çözünürlüğü | 🔴 ÇÜRÜDÜ | 6× inceltme kıvrımı DEĞİŞTİRMEDİ |

🟢 **Ö6'yı öngörüde "doğrudan ölçemem" diye yazmıştım; ölçtüm ve kendi
öngörümü çürüttüm.** Dolaylı kanıtla yetinseydim yanlış sonuca *daha
ikna edici* biçimde varacaktım.

---

## 7. NE YAPMADIM
```
· CEZA EKLEMEDİM (M-3584 ④)
· arac/ ve data/ altına hiçbir şey yazmadım
· Tobler'ı seçmedim, savunmuyorum — R1/KITA 9'un alanı
· "Ceza gerekiyor/gerekmiyor" hükmünü VERMEDİM: 20 km çıkmadı, eksiğin
  BÜYÜKLÜĞÜNÜ (≈4,7 kat) ve NEREDE OLMADIĞINI (topoğrafyada) ölçtüm
```

## 8. KITA 6'YA DOĞRUDAN GEÇEN İKİ SAYI
```
① TRI kademesi, 926 m'lik ince ızgaranın cevabını %3-8 içinde veriyor
   ⇒ maliyet fonksiyonu TRI ile kurulabilir, ızgara inceltmeye gerek yok
② Motorun bugünkü eğimi ince referanstan %40-55 CÖMERT
   ⇒ TAVAN_KM saat'e çevrilirken bu fark kendiliğinden kapanır
```

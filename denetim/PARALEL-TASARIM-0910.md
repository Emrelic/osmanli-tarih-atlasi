# PARALEL — ADIM 2 · TASARIM ve ÖLÇÜLMÜŞ MALİYET

```
OTURUM  PARALEL TASARIM · 10 Eylül 2026
SORU    Emre: "16 çekirdekli makine öder mi · ve paralelleştirme işin
        SAĞLIĞINI DOĞRULUĞUNU etkiler mi?"
🔴 arac/** ve data/** DEĞİŞTİRİLMEDİ.
```

## ⓪ CEVAP, TEK SATIRDA

```
DOĞRULUK   🟢 ETKİLEMİYOR — sha256 birebir aynı (ADIM 3, negatif çapa ötüyor)
HIZ        🟡 ÖDER — AMA YALNIZ DOĞRU YERDEN BÖLÜNÜRSE
           devlet başına bölme  →  8 çekirdekten SONRASI BEDAVA DEĞİL, BOŞ
           dönem başına bölme   →  16 çekirdek 32'ye kadar doğrusal
```

## ① TABAN — koşu 8'in KENDİ logundan (benzetim değil)

```
koşu 8 toplam                          1205,5 dk  (20s 05dk)
  Yabancı devlet gövdeleri             16s 28dk 16sn   %82,1   ← hedef
  çapraz: yabancı gövde geometrisi   3629 çağrı 15s 35dk  %77,7
  çapraz: kuşatılmışlık (_kusatilmis) 1833 çağrı  1s 01dk  % 5,1
  çapraz: varlık devri (petek_epok)    209 çağrı     3dk   % 0,3
```
📌 `_kusatilmis` ve `petek_epok` sayaçları **ISKA maliyetidir** (önbellek
kontrolünden SONRA başlıyor) — yani 1833 ve 209, o önbelleklerin
**benzersiz anahtar sayısıdır.**

## ② MAKİNE — ölçüldü, varsayılmadı

```
fiziksel çekirdek   4          mantıksal   8
RAM                 12,8 GB    ölçüm anında boş  1,1 GB
başlatma yöntemi    yalnız `spawn`  (Windows'ta `fork` YOK)
shapely 2.1.2 · numpy 2.2.6 · Python 3.13.8
```

## ③ SPAWN ve BELLEK — `ARAC-PARALEL-SPAWN-0910`

```
yük (vekil: motor_kara 5390 parça / 275.706 köşe + ne_10m_land 6837 parça)
   pickle 12,5 MB · yazma 0,65 sn · çözme 0,33 sn
spawn + aktarım    N=2 1,66 sn · N=4 2,27 sn · N=8 5,52 sn
işçi başına RSS    77 MB   →  N=8 toplam 616 MB
STRtree PICKLE EDİLEBİLİYOR   (2000 parça = 3,4 MB)
STRtree yeniden kurma          0,002 sn   ⇒ aktarmaya bile gerek yok
```
🟢 **HÜKÜM: `spawn` ENGEL DEĞİL.** 5,52 sn / 16,5 saatlik aşama = **%0,009**.
⚠️ RSS bir **ALT SINIRDIR**: vekil, PETEK_D'nin *birleşimi*; gerçek
PETEK_D 3805 AYRI hücredir, ortak kenarlar iki kez yazılır.
🔴 Ve bu makinede boş RAM 1,1 GB — 8 işçi bugün **sığmayabilir**.
Yeni makinede sorun değil; **bugün** ölçmek isteyen bunu bilsin.

## ④ 🔴 ASIL ENGEL SPAWN DEĞİL, **YÜK DENGESİ** — `ARAC-PARALEL-DENGE-0910`

Motorun kendi ETA ağırlığıyla (hücre-birleşimi; motorun ölçümü R²=0,96)
**579 künyenin 559'u** çalışıyor, toplam 233.560 birim:

```
rusya                51.798   %22,2     ← TEK BAŞINA
ingiltere            39.325   %16,8
ispanya              15.173   %6,5
fransa-cumhuriyet    13.437   %5,8
safevi               10.731   %4,6
```

**DEVLET BAŞINA bölmenin tavanı (LPT, mükemmel çizelgeleme):**
```
N=2  2,00x    N=4  4,00x    N=8  4,51x
N=12 4,51x    N=16 4,51x    N=32 4,51x     ← ARTMIYOR
```
🔴 ***Sonsuz çekirdekle bile 4,51× — çünkü `rusya` tek bir iştir ve
bölünemez.*** 16 çekirdekli makine, bu tasarımla 8 çekirdekliden
**hiçbir şey fazla vermez.**

**DÖNEM BAŞINA bölme** — aynı devletin dönemleri de birbirinden bağımsız
(`g = unary_union([petek_epok(a)[j] for j in aktif])` yalnız `(a, aktif)`
çiftine bakar):
```
iş sayısı 3730 · en ağır iş %0,19
N=4 4,00x · N=8 8,00x · N=16 16,00x · N=32 32,00x   (tavan 519x)
```

**BÜTÜN KOŞUYA ETKİSİ** (Amdahl, aşama payı %82,1):
```
devlet  N=8   aşama 4,51x → koşu 2,77x → 435 dk  (7,3 saat)
devlet  N=16  aşama 4,51x → koşu 2,77x → 435 dk  (7,3 saat)  ← AYNI
dönem   N=8   aşama 8,00x → koşu 3,55x → 339 dk  (5,7 saat)
dönem   N=16  aşama 16,0x → koşu 4,34x → 277 dk  (4,6 saat)
```

🔴 **VE DÖNEM BAŞINA BÖLME, KODUN "DENENDİ VE BIRAKILDI" DEDİĞİ YERE
DOKUNUYOR** (`:4443` yorumu): dönem birleştirme ölçütü
`aktif == onceki and dnm`, yani **geometri sonucuna** bağlı.
🟢 Ama ölçüldü ve **engel görünenden dar**: `dnm` boşken birleştirme
olmaz, geometri yeniden hesaplanır ve **yine boş çıkar** (aynı `aktif`,
aynı `a`) ⇒ kayıt eklenmez. Yani *"ardışık eşit `aktif` koşularını bir
kez hesapla"* önceden yapılabilir ve **çıktı değişmez**; motorun ETA
bloğu (`:4477`) bu elemeyi **zaten yapıyor** — 3730 iş tam o elemeden
sonra kalan sayıdır.
⚠️ Bu bir **iddiadır**; ADIM 3 onu **devlet başına** sınadı, dönem
başına SINAMADI. Uygulanırsa aynı sınav dönem başına da koşturulmalı.

## ⑤ HANGİ YOL: SÜREÇ mi, İŞ PARÇACIĞI mı — ölçüldü, ikisi de

`ARAC-PARALEL-GIL-0910` + `ARAC-PARALEL-KIYAS-0910` (aynı iş, adil kıyas):
```
                     N=2     N=4     N=8
iş parçacığı        1,39x   1,42x   1,59x     sonuç aynı ✓
süreç (kurulumsuz)  1,15x   1,33x   1,44x     sonuç aynı ✓
KONTROL (saf Python) 0,42x  0,36x   0,39x     ← düzeneği DOĞRULUYOR
```
🟢 Shapely 2.1 GIL'i **bırakıyor** (kontrol deneyi 1,0'ın altında kalıyor,
yani ölçüm sahte hızlanma üretmiyor).
⚠️ **BU SAYILAR BİR TAVAN DEĞİL:** 4 fiziksel çekirdekte, ve kıyas
işlerinin maliyeti **çarpık** (motor_kara'nın dev parçası tek işi
şişiriyor) — yani ölçülen şey kısmen `§④`teki dengesizliğin ta kendisi.
⇒ **Gerçek tavan `§④`teki LPT ölçümüdür**; buradaki sayılar yalnız
*"GIL kapalı değil"* ve *"süreç sihirli değil"* der.

🔴 **VE SÜREÇ YOLUNUN ÖLÇÜLMÜŞ BİR ÖN KOŞULU VAR:** Windows'ta `spawn`
işçiyi `__main__`i **yeniden import ederek** kurar — 5305 satırlık betik
baştan koşar. ⇒ ***Süreç paralelliği, önce motorun bir MODÜLE
bölünmesini gerektirir.*** İş parçacığı bunu gerektirmez ve **7 saf
önbelleği de paylaşır** (`§ADIM 1 C` — süreçte o isabet kaybolurdu:
`_kusatilmis` ıskası koşu 8'de 1s 01dk).

## ⑥ ÖNERİLEN TASARIM

```
① dönem listesi ÖNCEDEN kurulur  (ETA bloğunun yaptığı iş — zaten var)
② FAZ 1 PARALEL : her (devlet, dönem) için geometri → ham halka listesi
                  yan etkisiz · havuza() ÇAĞRILMAZ
③ FAZ 2 SIRALI  : ÖZGÜN sırayla havuza() — aynı çağrı dizisi, aynı sıra
④ sayaçlar      : `_PUAN_KESILEN` gibi float toplamlar FAZ 2'de,
                  özgün sırayla eklenir (float toplama BİRLEŞMELİ DEĞİL)
```
**İlk adım iş parçacığı olsun** (motoru bölmeden, bugün uygulanabilir);
süreç yolu ancak motor modüle bölündükten sonra ve **dönem başına**
bölmeyle 16 çekirdeği hak eder.

## ⑦ AÇIKÇA ÖLÇÜLMEYENLER (`D107`)
```
⚪ ölçülemedi   gerçek PETEK_D'nin pickle boyutu (vekil kullanıldı)
⚪ ölçülemedi   dönem başına bölmenin BİT DENKLİĞİ (devlet başına sınandı)
⚪ ölçülemedi   16 çekirdekli gerçek makinede ölçüm (bu makine 4 fiziksel)
⚪ ölçülemedi   SÜREÇLER ARASI geometri belirlenimciliği (sınav iş
                parçacığıyla koştu — aynı GEOS durumu)
```

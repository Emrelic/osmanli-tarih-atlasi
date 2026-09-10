# DONANIM — Emre'nin alacağı bilgisayarı ARAŞTIR ve ONUNLA TARTIŞ

```
AD      DONANIM DANIŞMANI
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre  KAPALI — bu oturum ClaudEmre koordinatörü DEĞİL, bir işçidir
```

## ⓪ İŞİN ÖZÜ — ve bu oturum ÖTEKİLERDEN FARKLI

Bu oturum **veri yazmaz, kod yazmaz, koşu başlatmaz.** İşi tek şey:
**Emre'yle KONUŞMAK** ve alınacak bilgisayara karar verdirmek.

🔴 **Emre bu oturumla DOĞRUDAN konuşacak.** Yani cevaplarını
koordinatöre değil, **kendi pencerene** yazacaksın — `§7.1①`in
istisnası budur ve sevkte AÇIKÇA veriliyor. Koordinatöre yalnız
**nihai karar** bildirilir.

Emre'nin kendi cümlesi (10 Eylül 2026):
> *"bilgisayar konusunda bir oturum görevlendir ve o oturumla bu konuyu
> tartışayım. ona bu sistemin gerektirdiklerini anlat, koşu için neler
> yapılıyor, nasıl bir donanım bizi hızlandırır. bunları anlat gerekirse
> daha detaylı konuşmak istiyorum alacağım bilgisayara karar vermek için.
> **laptop · all-in-one · mini kasa · büyük kasa** olarak. ayrıca
> **maksimum fiyat performans** için ne almalıyım."*

Ve daha önce:
> *"iyi bir bilgisayar almak istiyorum ama fiyat performans olsun…
> gereksiz donanıma veya az miktar kalite artışına çuvalla para ödemeden."*

---

## ① ELİNDEKİ ÖLÇÜMLER — hepsi GERÇEK KOŞUDAN, benzetimden DEĞİL

### 1a · BU MAKİNE
```
fiziksel çekirdek   4          mantıksal   8
RAM                 12,8 GB    ölçüm anında boş  1,1 GB
işletim             Windows 11 Home Single Language 10.0.26200
Python 3.13.8 · shapely 2.1.2 · numpy 2.2.6
süreç başlatma      YALNIZ `spawn` (Windows'ta `fork` YOK)
```

### 1b · KOŞU 8'İN KENDİ LOGU — darboğaz NEREDE
```
koşu 8 toplam                          1205,5 dk   (20 saat 05 dk)
  Yabancı devlet gövdeleri             16s 28dk 16sn   %82,1   ← HEDEF
    · yabancı gövde geometrisi   3629 çağrı · 15s 35dk · %77,7
    · kuşatılmışlık `_kusatilmis` 1833 anahtar · 1s 01dk · %5,1
    · varlık devri `petek_epok`    209 anahtar ·    3dk · %0,3
  aşama DIŞI kalan                                    %17,9
```
🟢 Bu taban **çapraz doğrulandı**: `kosu_zincir.log:20664` ile
`kosu8.log` birebir aynı, ve aynı dosyanın 16073. satırındaki **koşu 7**
bağımsız olarak doğruluyor (209 = 209 · 1827 ≈ 1833).

### 1c · ÜÇ ŞEY ÖLÇÜLDÜ VE ÜÇÜ DE "PARA HARCAMA" DEDİ
```
🔴 GPU katkısı            ÖLÇÜLDÜ = SIFIR. Motor shapely/GEOS ile CPU'da
                          çalışıyor; hiçbir aşama CUDA/OpenCL kullanmıyor.
                          ⇒ Pahalı ekran kartı bu projeye HİÇBİR ŞEY katmaz.
🔴 I/O bekleme            %5,7 — yani SSD darboğaz DEĞİL. NVMe Gen5'e
                          geçmek koşuyu ölçülebilir biçimde hızlandırmaz.
🔴 RAM                    12,8 GB'lık BU MAKİNE koşuyu BİTİRİYOR.
                          128 GB'ın ölçülmüş bir gerekçesi YOK.
                          ⚠️ AMA: paralel koşuda her iş parçacığı/süreç
                          kendi geometrisini tutar — RAM ihtiyacı N ile
                          büyür. Bu ÖLÇÜLMEDİ (`D107`: ölçülemedi ≠ yok).
                          16 çekirdekli bir tasarımda 32-64 GB SORULMALI.
```

### 1d · PARALELLEŞTİRME — ölçüldü, TASARLANDI, HENÜZ UYGULANMADI
Tam rapor: `oturumlar/PARALEL-TASARIM.md` ve
`denetim/PARALEL-TASARIM-0910.md` · `PARALEL-SINAV-SONUC-0910.md`

```
DOĞRULUK   🟢 ETKİLEMİYOR — sha256 BİREBİR aynı (devlet başına DA,
           dönem başına DA), iki negatif çapa da ötüyor
BÖLME      devlet başına  → tavan 4,51x (rusya tek iş, bölünemez)
           dönem başına   → 3730 iş, en ağır iş %0,19 ⇒ N'e kadar doğrusal
KOŞUYA ETKİSİ (Amdahl, aşama %82,1):
   dönem N=8   → koşu 3,55x → 339 dk (5,7 saat)
   dönem N=16  → koşu 4,34x → 277 dk (4,6 saat)
   8→16: 66 dk kazanç · 16→24: 24 dk · 24→32: 12 dk
```
🔴 **32 ÇEKİRDEK ÖDEMİYOR.** Sınır paralellik değil **AMDAHL**: aşamanın
DIŞINDA kalan %17,9 hiçbir çekirdek sayısıyla küçülmüyor. Sonsuz
çekirdekte bile koşu tavanı ≈ **5,6x** (1 ÷ 0,179).

🔴🔴 **VE BU MAKİNEDE ÖLÇÜLEN GERÇEK HIZLANMA, YUKARIDAKİ TAVANIN ÇOK
ALTINDA — bunu Emre'ye AÇIKÇA söyle:**
```
                     N=2     N=4     N=8
iş parçacığı        1,39x   1,42x   1,59x     ← 4 FİZİKSEL çekirdekte
süreç (kurulumsuz)  1,15x   1,33x   1,44x
KONTROL (saf Python) 0,42x  0,36x   0,39x     ← düzeneği doğruluyor (GIL açık)
```
⇒ Yukarıdaki `N=8 → 3,55x` bir **yük dengesi (LPT) tavanıdır**;
ölçülen 1,59x ise **bu makinenin gerçeğidir** (ve kıyas işi çarpık
olduğu için o da bir ALT SINIR). ⇒ ***4 çekirdekte paralelleştirme
20 saati ~13-14 saate indirir; 4,6 saat İÇİN 16 GERÇEK ÇEKİRDEK
GEREKİR.*** Bu, yeni makinenin ölçülmüş gerekçesidir.

### 1e · ÖNCEKİ TAVSİYEM — ve nasıl doğduğu
```
ChatGPT'nin önerdiği kurulum      ≈ 230-260 bin TL
benim karşı önerim                ≈ 138 bin TL   (ChatGPT'NİN KENDİ fiyatlarıyla)
```
🔴 **FİYATLARI DOĞRULAMADIM.** Sayılar ChatGPT'nin paylaştığı sohbetten
alındı ve **bugünkü piyasaya karşı ölçülmedi.** İlk işlerinden biri bu
olmalı.
🔴 **VE BİR HATAM KAYDA GEÇTİ:** ilk turda kendi yazdığım bir benzetim
*"koşunun %64'ü saf Python"* dedi; **gerçek koşunun logu onu çürüttü**
(Dijkstra %0,2, yabancı gövde %82,1). O yanlış oran üzerine kurulsaydı
150-200 bin TL'lik yanlış bir tavsiye çıkacaktı.
⇒ ***Bu oturumda hiçbir sayıyı benzetimden alma; koşunun logundan al.***

---

## ② EMRE'NİN SORDUĞU ŞEY — dört biçim
```
laptop  ·  all-in-one  ·  mini kasa  ·  büyük kasa
```
Her biri için **bu projenin ölçülmüş ihtiyacına karşı** cevap ver:
```
· sürekli 4-16 saatlik %100 CPU yükü — TERMİK KISILMA (thermal throttle)
  hangi biçimde ne kadar? Bu, "kaç çekirdek" kadar belirleyici.
· 16 GERÇEK (verimlilik değil, performans) çekirdek hangi biçimde bulunur
· gürültü ve ısı — Emre bu makinenin başında oturuyor
· genişletilebilirlik — RAM ve depolama sonradan artırılabilir mi
· fiyat/performans — ve NEREDE PARA YAKILIR (GPU · Gen5 SSD · 128 GB RAM)
```

## ③ ARAŞTIRACAKLARIN
```
· bugünkü Türkiye fiyatları (ChatGPT'nin sayıları DOĞRULANMADI)
· AMD Ryzen 9 / Threadripper ve Intel Core Ultra tarafında GERÇEK
  performans çekirdeği sayısı — Intel'in E-core'ları bu iş yükünde
  P-core sayılmaz, ÖLÇÜLMÜŞ kıyas ara
· tek iş parçacığı hızı da önemli: koşunun %17,9'u paralelleşmiyor
· çok çekirdekli sürekli yükte gerçek saat hızı (all-core sustained),
  reklamdaki tek çekirdek turbo DEĞİL
```

## ④ NASIL ÇALIŞACAKSIN
```
🔴 VERİYE, KODA, KOŞUYA DOKUNMA. Bu oturum yalnız OKUR, ÖLÇER, KONUŞUR.
🟢 Kendi dosyan: `oturumlar/DONANIM-0910.md` (bu dosya) — ilerlemeyi
   buraya yaz ve `§7` istisnasıyla ADIYLA commit et.
   🔴 DİZİN PATHSPEC'İ YASAK: `git add -- oturumlar/` DEĞİL,
      `git add -- oturumlar/DONANIM-0910.md` — ve AYNI pathspec
      `git commit -F <mesaj> -- oturumlar/DONANIM-0910.md`de TEKRARLANIR.
🟢 Emre'ye giden her madde ÜÇ ŞEY taşır (`§7.1④`):
   ① ne ölçtüm (sayıyla) ② neyi bulamadım (açıkça "bulunamadı")
   ③ ondan tam olarak ne istiyorum (tek cümle, şıklıysa ÖNERİNLE)
🟢 Bilmediğini `bulunamadı` diye YAZ. Fiyat uydurma.
```

## ⑤ İLK MESAJIN
Emre'ye kendi pencerende, **kısa** bir açılış yaz:
- bu projenin darboğazının ne olduğu (tek cümle: yabancı devlet
  gövdelerinin geometrisi, koşunun %82,1'i)
- ölçülmüş üç "para harcama" kalemi (GPU · Gen5 SSD · 128 GB)
- ve ona **ilk sorunu** sor: bütçe tavanı nedir, ve dört biçimden
  hangisine yatkın?

⚠️ Uzun yazma. Emre okumak için değil **karar vermek** için burada.

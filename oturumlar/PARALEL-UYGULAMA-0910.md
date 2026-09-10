# PARALEL UYGULAMA — tasarımı MOTORA indir, sonra TAM GİRDİDE sına

```
AD      PARALEL UYGULAMA
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
DOSYAN  arac/uret_petek.py  (YALNIZ BU) + oturumlar/PARALEL-UYGULAMA-0910.md
        + denetim/ARAC-PARALEL-*-0910.py (kendi ürettiklerin)
```

## ⓪ DURUM — koşu 9 SENİ BEKLİYOR

🔴 **Bütün proje bu işin bitmesini bekliyor.** Koşu 9'un verisi hazır ve
commit'li (mükerrer anahtar 6→0 · ENKLAV 661→650 · renk çakışması 1→0 ·
dört tavan sıkılaştırıldı). Koşu **başlatılmadı** çünkü paralelleştirme
önce inecek — Emre'nin kararı.

```
sıralı koşu    ~20 saat  (koşu 8: 1205,5 dk)
paralel koşu   8-14 saat (bu makinede; 16 çekirdekli makinede 4,7 saat)
```

## ① TASARIM ZATEN BİTTİ — SEN YENİDEN TASARLAMIYORSUN
`PARALEL TASARIM` oturumu üç adımı bitirdi ve **kapandı**. Oku:
```
denetim/PARALEL-TASARIM-0910.md        ← ADIM 2 · ÖNERİLEN TASARIM §⑥
denetim/PARALEL-BAGIMLILIK-0910.md     ← ADIM 1 · 123 ad sınıflandırıldı
denetim/PARALEL-SINAV-SONUC-0910.md    ← ADIM 3 · bit denkliği
denetim/ARAC-PARALEL-SINAV-0910.py     ← 🔴 SINAV ALETİ — BUNU KULLAN
oturumlar/PARALEL-TASARIM.md           ⚠️ "AÇIK KALEMLER" bölümü BAYAT
```
⚠️ **Son satır bir tuzak ve koordinatörü bugün yanılttı:** o listedeki
*"dönem başına bit denkliği sınanmadı"* **artık doğru değil** — sınandı
(tahta M-3283, commit `4a23d53`). Liste güncellenmedi. `D034`.

### Uygulanacak tasarım — `PARALEL-TASARIM-0910.md §⑥`
```
① dönem listesi ÖNCEDEN kurulur   (ETA bloğunun yaptığı iş — ZATEN VAR)
② FAZ 1 PARALEL : her (devlet, dönem) için geometri → ham halka listesi
                  yan etkisiz · `havuza()` ÇAĞRILMAZ
③ FAZ 2 SIRALI  : ÖZGÜN sırayla `havuza()` — aynı çağrı dizisi, aynı sıra
④ sayaçlar      : `_PUAN_KESILEN` gibi float toplamlar FAZ 2'de, ÖZGÜN
                  sırayla eklenir (float toplama BİRLEŞMELİ DEĞİLDİR)
```
🔴 **İŞ PARÇACIĞI (`ThreadPoolExecutor`), SÜREÇ DEĞİL.** Gerekçesi
ölçüldü, tasarımın `§⑤`inde: Windows'ta `spawn` işçiyi `__main__`i
yeniden import ederek kurar (5305 satırlık betik baştan koşar), ve
süreç yolu 7 saf önbelleği de kaybettirir — `_kusatilmis` ıskası tek
başına koşu 8'de **1 saat 01 dakika**. Shapely 2.1 GIL'i bırakıyor
(kontrol deneyiyle doğrulandı).

## ② KABUL ÖLÇÜTÜ — üçü de ZORUNLU

```
🔴 ① BİT DENKLİĞİ, TAM GİRDİDE
     Mevcut sınav KÜÇÜLTÜLMÜŞ girdide (Anadolu kutusu) koştu. Sen TAM
     girdide sınayacaksın. Bu iki tam koşu demek olabilir — o pahalıysa
     KOORDİNATÖRE SOR, tek başına karar verme.
     ⚠️ Ve `D072`: kırpılmış çıktı bir ölçüm DEĞİLDİR. `| head` KULLANMA.
🔴 ② NEGATİF ÇAPA ÖTMELİ
     Kasten bozulmuş bir kip (`paralel-boz`) AYRIŞMALI. Ötmezse sınavın
     hiçbir şey ölçmüyordur — bu, tasarım oturumunda BİR KEZ oldu:
     etiket kusuru doğru bir kipi HÜKÜMSÜZ ilan etti (`§③`).
🔴 ③ `py arac/denetle.py` → SONUÇ: temiz  ·  ve çıktı `denetle_yayin.py`
     kapısını geçmeli.
```

## ③ SINIR — bu iş AÇIK UÇLU DEĞİL

```
🔴 Uygulama + sınav MAKUL SÜREYİ aşarsa ya da bit denkliği DENK ÇIKMAZSA:
   DUR, koordinatöre bildir. Paralelleştirme koşu 10'a bırakılır ve
   koşu 9 SIRALI başlatılır. Koşu 9'un içeriği bundan ETKİLENMEZ.
🔴 "Neredeyse denk" diye bir şey YOKTUR. sha256 ya birebir aynıdır ya
   değildir.
🔴 TASARIMI GENİŞLETME. Süreç yolu · motoru modüle bölme · başka aşamaları
   paralelleştirme — HEPSİ AYRI İŞ. Bu turda YALNIZ `§⑥` uygulanır.
```

## ④ TUZAKLAR — hepsi bu depoda ÖLÇÜLDÜ, tahmin değil

```
🔴 SCRATCH DEPO AĞACINA YAZILMAZ. Tasarım oturumu `denetim/_paralel/`
   altına 79 dosyayı GERÇEK ADLARIYLA (yerlesimler.js · renkler.py …)
   yazmıştı; bayat bir `yerlesimler.js`in ağaçta gerçek adıyla durması,
   toplu bir commit'te GERİ ALINAMAZ hasar demektir (git'ten geri
   alınamaz, çünkü DAHA YENİ görünür). `tempfile.gettempdir()` kullan.
🔴 `arac/uret_petek.py` · `renkler.py` · `girdi.py` üçlüsü bir koşu
   SIRASINDA değişirse `girdi.motor_izi_dogrula` koşuyu ÖLDÜRÜR. Kendi
   sınav koşularında bunu bil.
🔴 İKİ KOŞUYU KIYASLAYAN HER ÖLÇÜM GİRDİNİN TAMAMINI DONDURMALI —
   `data/` YETMEZ, `arac/renkler.py` (BOYALAR) DE canlı girdidir.
   Tasarım oturumu bunu 51 saniye arayla iki koşuda ölçtü: girdi izi aynı
   çıktığı hâlde ETA 7.310 → 7.257, devlet 60 → 59 oldu.
   ⚠️ `girdi.anlik_goruntu()` bunu ÇÖZMEZ — o koşu BAŞINA kopya alır.
🔴 KABUK: `git commit -m` ile Türkçe/backtick YASAK → `Write` + `-F <yol>`.
   `py -c` ile Türkçe/backtick YASAK. Heredoc YASAK. Bash backtick'i
   komut sanar ve kelimeyi SİLER (`kavalali` ve `toga-timur` böyle silindi).
🔴 COMMIT: dosyaları ADIYLA yaz, DİZİN PATHSPEC'İ YASAK, ve aynı pathspec
   `git add` ile `git commit -F` İKİSİNDE DE tekrarlanır (`§7`).
```

## ⑤ HABERLEŞME
```
AÇILINCA   koordinatöre (`1.MURAT`) "açıldım, `arac/uret_petek.py` bende"
GİDİŞAT    tahtaya yaz: py arac/tahta.py yaz --kim "PARALEL UYGULAMA" \
                        --kime "1.MURAT" --mesaj "…"
           🔴 Kritik mesajı yazdıktan sonra `tahta.json`dan GERİ OKU —
             "yazıldı" cevabı yetmez, tahta mesaj kaybedebiliyor (`§7.1⑤b`)
KOŞU AÇARSAN  ÖNCE tahtaya "KOŞUYU BEN BAŞLATIYORUM · ~süre" yaz, 60 sn bekle
BİTİNCE    SAYIYLA teslim: "sıralı sha256 … · paralel sha256 … · DENK/AYRI",
           ve ölçmediklerini `D107` damgalarıyla (`ölçülemedi` / `okumadım`)
```

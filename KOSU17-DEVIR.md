# KOŞU 17 — Claude kapalıyken ne yapılacak

**28 Eylül 2026 · 08:20 · YILDIRIM BAYEZIT**
Emre: *"bu claude'yi de kapatacağım, koşu harici her şeyi kapat."*
Bu dosya, **Claude olmadan** koşuyu takip edip bitirmek içindir.

---

## ⓿ 🔴 İLK KOŞU ÇÖKTÜ — 28 Eylül 09:00 güncellemesi

**Koşu 17 bitmedi, SEGFAULT ile öldü.** Ölçüm yorum değil, bash'in kendi
satırı (`tasks/b5y19pz5o.output`):
```
/usr/bin/bash: line 1: 18746 Segmentation fault  py arac/uret_petek.py
```
```
başladı 03:05 · öldü 08:52 · 5s 47dk
aşama    "Yabancı devlet gövdeleri" — 608 devletin ~150'si bitmişti
Python tarafında traceback YOK · Windows hata kaydı YOK
disk 693 GB boş · taahhüt sınırı 46 GB ⇒ Python belleği TÜKENMEDİ
⇒ çökme bir C uzantısında (GEOS) oldu
ÇIKTI YAZILMADI: donemler.js · devletler_harita.js · petek_govde.js
hâlâ 03:03 damgalı · data/ufuk_bantlari.js hiç doğmadı
```

**KURTARILAN:** önbellek **8.045 kayıt** (govde 2239 · kusat 3074 · dolgu
1650 · col 1078 · 509 MB). Dört tuz dosyasına dokunulmadığı için tuz
değişmedi ⇒ yeni koşu bu kayıtlara isabet alıyor, baştan başlamıyor.

**KOŞU 17b BAŞLATILDI — 09:00.** Tek değişiklik: `MOTOR_PARALEL_ISCI` 4 → 2.
Gerekçesi ölçüldü: `uret_petek.py:573` `_ONB_ISLETIM` kümesinde bu değişken
var ⇒ tuza girmez ⇒ önbellek yaşar. Buna karşılık `MOTOR_PARALEL_KAPALI=1`
(sıralı yol) `:617`de `govde` katmanını ÖLÜ ilan ediyor ⇒ o seçenek 509
MB'ı çöpe atardı. Bu yüzden sıralıya değil, 2 iş parçacığına inildi.
Yeni koşunun logu tuzu `b249cf3b436a` diye bastı — koşu 17'nin tuzuyla
BİREBİR AYNI, yani isabet gerçek.

⚠️ **VE BU BİR TEŞHİS DEĞİL, BİR HAFİFLETME.** Segfault'un sebebini
bilmiyorum. İş parçacığını yarıya indirmek eşzamanlı GEOS çağrısını ve
tepe belleği yarıya indirir; sebep bunlardan biriyse geçer, değilse
geçmez. Önbellek sayesinde ~150. devlete hızla varılacak — **aynı yerde
yine çökerse** sebep belirli bir geometridir ve o zaman adıyla aranır.

---

## ① KOŞU YAŞIYOR MU — tek bakış

Koşu `C:/atlas-kosu17` içinde koşuyor ve ilerlemesini **bir dosyaya**
yazıyor. Claude'a gerek yok:

```
C:/atlas-kosu17/kosu17b.log      ← YENİ koşu (17b)
C:/atlas-kosu17/kosu17.log       ← ÇÖKEN koşu, kanıt olarak duruyor, dokunma
```

Dosyanın **değişme saati** ilerlediyse koşu yaşıyor. Nabız satırı 5
dakikada bir düşer (`💓`). Son satırlara bakmak yeter — dosyayı Not
Defteri ile açıp sona inmek de olur.

**Bitti mi?** Dosyanın en son satırında şu yazıyorsa bitmiştir:
```
KOSU 17b BITTI cikis=0        ← 0 ise sağlıklı bitti
```
Ondan hemen önce şu satır GÖRÜLMELİ:
```
Doğrulama: tüm yerleşimlerin peteği geçerli ✓
```
🔴 **`cikis=139` görürsen yine segfault olmuştur** — çıktı yazılmamıştır,
§④'ü KOŞTURMA. O hâlde §⑦'ye bak.

---

## ② 🔴 KOŞU CLAUDE KAPANINCA ÖLÜR MÜ

**Ölçülen kanıt: HAYIR.** Koşu 16 tam bunu yaşadı — oturum kapandı, koşu
devam etti ve `çıkış 0` ile bitti (27 Eylül 22:21). Windows, ebeveyn
süreç ölünce çocuğu öldürmez.

⚠️ **Ama garanti değil** ve bunu saklamıyorum: koşunun süreç zinciri
`py.exe → bash.exe → claude.exe`e çıkıyor. Bir kez ölçtüm, kural olarak
bilmiyorum.
⇒ **Kesin olsun istersen Claude'u kapatma, yalnız KÜÇÜLT.** Boşta duran
bu oturum ~500 MB yer, koşuyu garantiler.
⇒ Kapatırsan ilk iş `kosu17.log`un saatine bakmak: 10 dakika içinde
değişmiyorsa koşu ölmüştür.

---

## ③ ŞU AN NE KAPATILDI

```
14 tahta bekçisi (python)   08:15'te KAPATILDI — hepsi
```
🔴 **DÜZELTME (09:00 ölçümü):** "artık hiçbir oturum uyanmaz" dediğim şey
**artık doğru değil.** Süreç listesi ölçüldü: **dört bekçi kendini yeniden
kurmuş** (08:18-08:19) — `DUNYA-KRONO-0081` ve üç `HAZIR KITA 2809 025x`.
Demek ki o oturumlar öldürülmeden önce mesaj almış, uyanmış ve bekçilerini
sessizce yeniden kurmuşlar (`§7.2 ④`nün kendi talimatı bu).
⇒ Bellek yükü küçük (4 × ~44 MB) ve boş RAM 5,1 GB olduğu için
**kapatılmadılar.** Bellek daralırsa kapatılacak ilk şey bunlardır.
⇒ Öteki on oturuma yazılan tahta mesajları **okunmaz** — bu bilerek
yapıldı: koşu bitene kadar kimse çalışmasın diye.

**En büyük yük hâlâ Claude'un kendisi:** 22 süreç · **4,1 GB**.
Onları yalnız sen kapatabilirsin (uygulamayı kapatmak). Kapatınca boş
bellek ~4,7 GB'a çıkar ve koşu takasa düşmeden koşar.

Kalanlar küçük: Defender 331 MB (güvenlik, KAPATILMADI ve kapatılmamalı)
· Görev Yöneticisi 179 MB · Edge WebView 129 MB.

---

## ④ KOŞU BİTİNCE — sırayla, PowerShell'de

Her komut `C:\atlas` içinde çalışır. Hata verirse DURDUR, sonrakine geçme.

```powershell
cd C:\atlas

# 1) Çıktıyı ana depoya taşı  (5 dosya)
copy C:\atlas-kosu17\data\bolgeler.js            data\bolgeler.js
copy C:\atlas-kosu17\data\devletler_harita.js    data\devletler_harita.js
copy C:\atlas-kosu17\data\donemler.js            data\donemler.js
copy C:\atlas-kosu17\data\petek_govde.js         data\petek_govde.js
copy C:\atlas-kosu17\veri-kaynak\motor_kara.geojson veri-kaynak\motor_kara.geojson
# YENİ: bu koşu bir dosya daha üretiyor (ufuk bantları)
copy C:\atlas-kosu17\data\ufuk_bantlari.js       data\ufuk_bantlari.js

# 2) Denetim — "SONUÇ: temiz" GÖRÜLMEDEN devam etme
py arac\denetle.py

# 3) Palet ve devirler
py arac\renk_olc.py
py arac\uret_devirler.py
```

🔴 **VE BURADA DUR — YAYINLAMA.** Sebebi §⑤.

---

## ⑤ 🔴 BU KOŞU OTOMATİK YAYINLANMAMALI

Koşu 17'de **sürtünmeli yürüyüş ilk kez açık** (`MOTOR_YURUYUS=1`).
Ölçüldü: koşu 16'nın logunda `🚶` **sıfır kez** geçiyor — yani aylardır
"5 günlük yürüyüş / A görünümü" diye konuşulan şey haritada **hiç
çalışmamış**. Bu koşu onu ilk kez açıyor, üstüne 7 ve 10 günlük bantları
ve Boğaz yamasını ekliyor.

⇒ Harita **geniş ölçüde değişmiş olabilir.** Yayınlamadan önce Emre'nin
bakması gerekir. Yayın tek yönlü bir iştir; `main`e push = yayın.

Bakmak için sunucuya gerek yok: `C:\atlas\index.html` dosyasını
tarayıcıda aç, yerel veriyi okur.

Beğenilirse yayın:
```powershell
py arac\surum_damgala.py
git add -- data index.html veri-kaynak/motor_kara.geojson
git commit -F <mesaj-dosyasi>
git push origin main
```

---

## ⑥ KOŞUDAN SONRA ÖLÇÜLECEK ÜÇ ÖNGÖRÜ

Üçünü de başka oturumlar yazdı, sınanmadan kapanmasınlar:

```
BOGAZ-OLCUM-0081  el değiştiren parça 138 → en az +137 · sahipsiz ARTABİLİR
KORIDOR-0081      Uzunköprü peteği 1281-1443 komşulara GEÇMELİ (motorun devir
                  mekanizması ilk kez çalışacak) — H-0008'in kapanış kanıtı
                  denetle.py DEĞİL, bu ölçümdür
UFUK BANT         data/ufuk_bantlari.js yazılmalı ve
                  py denetim\ARAC-B-GORUNUM-UFUK-0072.py  0 ihlal vermeli
```

Gecenin tam durumu: [`oturumlar/GECE-0928-DURUM.md`](oturumlar/GECE-0928-DURUM.md)

---

## ⑦ KOŞU ÖLDÜYSE

Komut (bu, koşu 17b'yi başlatan komutun PowerShell karşılığıdır):
```powershell
cd C:\atlas-kosu17
$env:MOTOR_YURUYUS="1"; $env:MOTOR_UFUK_BANT="40,56,80"
$env:MOTOR_COL_UFUK_SAAT="56"; $env:MOTOR_PARALEL_ISCI="2"
py arac\uret_petek.py *> C:\atlas-kosu17\kosu17c.log
```
⚠️ Log adını **her koşuda değiştir** (17b → 17c → …): çöken koşunun logu
tek kanıttır, üstüne yazılırsa sebep bir daha ölçülemez.
⚠️ Önbellek `C:\atlas-kosu17\_motor_onbellek\` altında duruyor; ölen koşu
oraya ne yazdıysa yeni koşu onu kullanır, yani baştan başlamaz. Logun
başındaki `tuz b249cf3b436a` satırını GÖR — başka bir tuz yazıyorsa
önbellek ölmüştür ve koşu 11 saat sürecektir.
🔴 **İKİNCİ KEZ AYNI YERDE ÇÖKERSE** (~150. devlet) iş parçacığı sayısı
sebep değildir; o zaman `MOTOR_PARALEL_ISCI="1"` dene — ama `git diff`
alıp `denetim/` altına *hangi devlette* çöktüğünü yaz, çünkü asıl çare o
geometriyi bulmaktır, koşuyu tekrar tekrar başlatmak değil.

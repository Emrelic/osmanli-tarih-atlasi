# KOŞU 17 — Claude kapalıyken ne yapılacak

**28 Eylül 2026 · 08:20 · YILDIRIM BAYEZIT**
Emre: *"bu claude'yi de kapatacağım, koşu harici her şeyi kapat."*
Bu dosya, **Claude olmadan** koşuyu takip edip bitirmek içindir.

---

## ① KOŞU YAŞIYOR MU — tek bakış

Koşu `C:/atlas-kosu17` içinde koşuyor ve ilerlemesini **bir dosyaya**
yazıyor. Claude'a gerek yok:

```
C:/atlas-kosu17/kosu17.log
```

Dosyanın **değişme saati** ilerlediyse koşu yaşıyor. Nabız satırı 5
dakikada bir düşer (`💓`). Son satırlara bakmak yeter — dosyayı Not
Defteri ile açıp sona inmek de olur.

**Bitti mi?** Dosyanın en son satırında şu yazıyorsa bitmiştir:
```
KOSU 17 BITTI cikis=0        ← 0 ise sağlıklı bitti
```
Ondan hemen önce şu satır GÖRÜLMELİ:
```
Doğrulama: tüm yerleşimlerin peteği geçerli ✓
```

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
14 tahta bekçisi (python)   KAPATILDI — hepsi
9 oturumun bekçisi de dahil; artık hiçbir oturum tahtadan UYANMAZ
```
⇒ İşçi oturumlara yazılan tahta mesajları **okunmaz**. Bu bilerek
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

Yeniden başlatmak ~11 saattir; yarısından dönülmez. Komut:
```powershell
cd C:\atlas-kosu17
$env:MOTOR_YURUYUS="1"; $env:MOTOR_UFUK_BANT="40,56,80"; $env:MOTOR_COL_UFUK_SAAT="56"
py arac\uret_petek.py *> C:\atlas-kosu17\kosu17.log
```
⚠️ Önbellek `C:\atlas-kosu17\_motor_onbellek\` altında duruyor; ölen koşu
oraya ne yazdıysa yeni koşu onu kullanır, yani baştan başlamaz.

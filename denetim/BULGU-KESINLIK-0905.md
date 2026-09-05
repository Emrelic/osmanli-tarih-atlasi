# `s.kesinlik` — ÜÇ İHTİMALİN ÜÇÜ DE ÇÜRÜDÜ, DÖRDÜNCÜSÜ ÇIKTI

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-3003 · 5 Eylül 2026
> Koşu 5b CANLI · `data/*.js` · `arac/girdi.py` DONUK — **hiçbir veri yazılmadı**
> **HÜKÜM YOK — SAYI**

## ⇒ MANŞET: ALAN DOĞRU, KAYIT DOĞRU, **KÜTÜK SEVİYESİ YANLIŞ**
```
Sözleşmeye UYAN iki kayıt   🔴 UYARI VERİYOR   (Vidin · Kızıkermen)
Sözleşme DIŞINDAKİ tek kayıt 🟢 SESSİZ GEÇİYOR (Şırnak)
```
Uyarı bir kusuru göstermiyor — **kütüğün kendisi ters kayıtlı.**

## ① SEVKİN ÜÇ İHTİMALİ — ölçüldü

### 🟡 ① YAZIM HATASI → **ÇÜRÜDÜ**
İki kütüğün **31 alanının** tamamı tarandı; içinde `kes` geçen **tek**
alan `kesinlik`. Benzer ad (`kesin` · `kesinlik_`) **yok.** Ad birebir
doğru yazılmış.

### 🟠 ② YENİ ŞEMA ALANI, kütüğe eklenmemiş → **YARIM DOĞRU**
Alan **kayıtlı** — `girdi.py:867`, ve kaydeden commit'ler ölçüldü:
```
db9d87f  2 Eyl 10:55   e6ec695  2 Eyl 11:11
girdi.py:860-865'teki kendi yorumu: "ÜÇÜ DE VERİDE ZATEN CANLIYDI …
   kural yazılmış, veri yazılmış, ALET güncellenmemişti"
```
⇒ *"Kütüğe eklenmemiş"* **yanlış.** Eklenmiş — ama **yanlış kütüğe.**

### 🔴 ③ KATMAN KARIŞMASI (kronolojiden kopyalanmış) → **ÇÜRÜDÜ**
Kronolojinin hassasiyet alanı `kesinlik` **değil**; arayüz hassasiyeti
tarih dizgisinin **biçiminden** çıkarıyor (`app.js:43 kesinlikliYazi`).
İkinci argüman `gi` bir veri alanı **değil** — `gunIdx()`in döndürdüğü
sayı (`olaylar*.js`te `gi:` geçişi **0**, `kronoloji*.js`te **0**).
⇒ Yerleşim `kesinlik`i kronolojiden kopyalanmamış; `VERI-YAPISI.md`de
**kendi bağımsız tarihli kararı** var (1.MURAT, 2 Eylül).

## ② 🔴 ASIL BULGU — İKİ KÜTÜK, VE ALAN YANLIŞ OLANINDA
```
girdi.py:772  BILINEN_ALANLAR         24 alan · `kesinlik` VAR   ← KAYIT seviyesi
girdi.py:920  BILINEN_DONEM_ALANLARI   7 alan · `kesinlik` YOK   ← DÖNEM seviyesi
              tam liste: d · enklav · f · k · kaynak · t · y
girdi.py:1194 denetim `s`/`d`/`v`/`isg` dönemlerini İKİNCİ kütüğe sorar
              ve uyarı anahtarını `f"{kat}.{alan}"` diye kurar ⇒ `s.kesinlik`
```
**Ama sözleşme alanı DÖNEM İÇİ tarif ediyor** — `VERI-YAPISI.md`:
```
:171-179  🔜 `kesinlik` — ve ÜÇ ÖRNEĞİN ÜÇÜ DE dönem nesnesinin İÇİNDE:
             { f:"-0550-01-01", kesinlik:"onyil" }
             { f:"1427-06-01",  kesinlik:"yil"   }
             { f:"1453-05-29",  kesinlik:"gun"   }
:268-288  🆕 İKİ BİÇİM (karar: 1.MURAT, 2 Eylül) — ve gerekçesi bir DÖNEM:
             "Vidin'in AVUSTURYA DÖNEMİ Ekim 1689'da başlıyor … ama
              1690-09-09'da biterken gün belli"
```
⇒ Alan **dönem seviyesi için tasarlanmış**, **kayıt seviyesine kaydedilmiş.**

## ③ VERİDE NEREDE — üç konum, ve uyarı yalnız birinden
```
DÖNEM İÇİ   2 kayıt  🔴 UYARI                         ← sözleşmeye UYGUN
   Vidin              yerlesimler.js       s[1]  1689-10-01 → 1690-09-09
                      kesinlik = "ay"      (TDV ay veriyor, gün vermiyor)
   Kızıkermen         yerlesimler_ok106.js s[0]  1441-01-01 → 1526-01-01
                      kesinlik = "yuzyil"  ("15. yy ortası"; 1441 ALT SINIR)
KAYIT ÜSTÜ  1 kayıt  🟢 SESSİZ                        ← sözleşme DIŞI
   Şırnak             yerlesimler_ok109.js:155  kesinlik = "belirsiz"
```
🔴 **VE BİR İRONİ:** Şırnak'ın kendi yorumu (`ok109:144`) uyarıyı
**öngörüyor** — *"girdi.py onu tanımayacak ve «BILINEN_ALANLAR'da yok»
uyarısı verecek. Bilerek yazıldı, uyarı beklenen."*
**Şırnak uyarı VERMİYOR** (kayıt kütüğünde alan var). Uyarıyı veren, o
yorumun hiç bahsetmediği **iki başka kayıt.**
📌 ⇒ *Bir uyarının beklendiğini yazmak, beklenen uyarının o olduğunu
göstermez* — ve öngörü tuttuğu SANILDIĞI için kimse bakmamış.

## ④ ETKİSİ — bir şey kaybediyor muyuz
```
arac/uret_petek.py    2 geçiş · YORUM DIŞI 0   → motor OKUMUYOR
arac/denetle.py       2 geçiş · YORUM DIŞI 0   → denetim OKUMUYOR
js/app.js             2 GERÇEK okuma — ama BAŞKA KATMAN (aşağıda)
(256 dosya tarandı: arac/ · js/ · denetim/)
```
🟢 **Geometrik kayıp YOK** — motor alanı hiç görmüyor, kayıt sessizce
taşınıyor ve taşınması zararsız.
🔴 **Ama alanın VAAT ETTİĞİ ŞEY teslim edilmemiş.** `VERI-YAPISI.md:171`in
gerekçesi *"kullanıcı 1 Ocak gördüğünde gerçekten 1 Ocak sanıyor"*.
Arayüz bugün hassasiyeti **dizgi biçiminden** çıkarıyor:
```
app.js:43  p.length < 3          → "Ekim 1689"
           p[1]=="01" && p[2]=="01" → yalnız yıl
           öteki                 → TAM GÜN
```
⇒ Vidin'in `1689-10-01`i **tam gün biçiminde**, dolayısıyla arayüz onu
**gün** diye yazar. `kesinlik:"ay"` bunu düzeltmiyor, **çünkü kimse
okumuyor.** Alan `🔜 planlanan` listesinde ve gerçekten planlı hâlde.

## ⑤ 🔴 YAN BULGU — AYNI AD, İKİ AYRI DEĞER ALANI
`kesinlik` dört yerde yaşıyor ve **iki ayrık sözlük** taşıyor:
```
① yerleşim dönemi     gun · ay · yil · onyil · yuzyil · belirsiz   2 kayıt
② yerleşim kaydı      (aynı sözlük)                                1 kayıt
③ kronoloji maddesi   (aynı sözlük)  data/olaylar_p0037.js:19      1 kayıt
                      — ve AYNI Vidin olayı, t:"1689-10-01"
④ EK OKUMA kartı      kesin · tartismali · iddia · rivayet        10 kayıt
                      data/ekokuma*.js · app.js:6025-6031 OKUYOR
```
⚠️ ④ ötekilerle **hiç kesişmeyen** bir değer alanı. Bir alet
*"`kesinlik` değerleri şunlardır"* diye bir sözlük varsayarsa, dört
konumun üçünü ya da birini kaçırır.
⚪ `data/devletler.js`teki 10 geçiş **düz metin** (*"kesinlik düşük"*),
alan değil — ölçüldü, elendi.

## ⑥ 🔴 VE ③ HİÇBİR DENETİMİN KAPSAMINDA DEĞİL
```
kronoloji için bir ALAN KÜTÜĞÜ  : YOK   (arac/*.py tarandı, 0 eşleşme)
denetle.py alan adı denetliyor mu: HAYIR (0 eşleşme)
```
⇒ Alan adı denetimi **yalnız yerleşim katmanında** var. Kronolojiye
yazılan `kesinlik:"ay"` ne kayıtlı ne denetlenir — **hiçbir uyarı
üretmez.** Yerleşimdeki kardeşi gürültü yapıyor, kronolojideki
tamamen görünmez.

## ⑦ NE ÖLÇMEDİM
```
🔴 Kütük düzeltmesinin (alanı DÖNEM kütüğüne de eklemek) uyarıyı
   susturup susturmayacağını DENEMEDİM — `arac/girdi.py` koşu 5b
   sırasında DONUK (üç parmak izli dosyadan biri, §7).
🔴 Alanın kayıt seviyesinde MEŞRU olup olmadığını — Şırnak'ın
   `kesinlik:"belirsiz"`i sözleşmede yok ama YANLIŞ da olmayabilir;
   bu bir sözleşme kararı, ölçüm değil.
🔴 ④'ün (EK OKUMA) ad çakışmasının bilerek mi seçildiğini — git log
   ile kovalamadım.
⚪ Uyarının kaç koşudur bastığını — `girdi.yukle()` her çağrıda basıyor
   ama sayısını ölçmedim.
```

## ⑧ SEÇENEKLER — karar koordinatörün/Emre'nin, ölçüm yukarıda
```
A  alanı `BILINEN_DONEM_ALANLARI`na DA ekle   → uyarı susar, veri değişmez
   ⚠️ `girdi.py` DONUK; koşu 5b bitmeden yazılamaz
B  Vidin/Kızıkermen'i kayıt seviyesine taşı   → 🔴 sözleşmeye AYKIRI,
   ve Vidin'in gerekçesi zaten "bir DÖNEMİN iki ucu"
C  dokunma, uyarıyı bilinen gürültü say       → 🔴 "yazılı bir uyarı,
   okunmuş bir uyarı değildir" — bu gece üç kez ödendi
```
📌 Ölçümün söylediği tek şey: **uyarı veriyi değil KÜTÜĞÜ gösteriyor.**

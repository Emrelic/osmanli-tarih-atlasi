# SABAH RAPORU — 1 Ekim 2026 gecesi

Emre, iki yayın indi ve gece boyunca üç ayrı **sessiz kusur** yakalandı.
Önce sonuç, sonra ayrıntı, en sonda **senin kararını bekleyen tek kalem**.

---

## 🟢 1. İKİ YAYIN İNDİ — `r10675` → `r10883`

### ① HARİTA — koşu 19 (UMIT)
```
süre            1 sa 53 dk 52 sn      (bu makinede koşu 18: 4 sa 10 dk)
çıkış           0 · "tüm yerleşimlerin peteği geçerli ✓" · 4296 nokta
RAM tepesi      8.329 MiB (eşik 12.000 hiç aşılmadı)
denetle.py      SONUÇ: temiz
```
🔴 **UMIT tahminimden 50 dakika hızlı çıktı.** Ben ~2 sa 45 dk demiştim; yön
doğruydu, büyüklük yanlıştı. Kayda geçen tahmin değil ÖLÇÜM.

### ② KRONOLOJİ — 1804 madde, aylardır görünmüyordu
🔴 Bu gecenin 31 yeni kronoloji dosyasından **13'ü bağlıydı, 18'i DEĞİLDİ.**
Dosyalar diskte, commit'li ve denetimlerin evrenindeydi — `odak_olc.py` onları
okuyup sayıyordu — ama `index.html` onları **hiç yüklemiyordu.**
⇒ 1804 madde yazıldı, kaynaklandı, denetlendi ve **kullanıcı göremiyordu.**

Yayındaki ölçüm (tarayıcıdan, iddia değil):
```
kronoloji maddesi (çok taraflı)   1472 → 3276
künyelere BAĞLI madde             7568 → 11.215
kronolojisi olan künye             701 → 891   (894 künyenin 891'i)
1281 ÖNCESİ madde (canlı)                2098
1923 SONRASI madde (canlı)               1297
konsol hatası 0 · 259 isteğin hepsi 200
```
Senin istediğin iki kampanya artık sitede: Malazgirt 1071 Selçuklu'da,
Dandanakan 1040 Büyük Selçuklu'da, Abbâsî biatı 749, Fâtımî 909,
Mançukuo 1932, Cumhuriyet 1923-10-29.

---

## 🔴 2. ÜÇ SESSİZ KUSUR — üçü de "denetim var ama o soruyu sormuyor"

### ① Değişmez 8a İKİ KOŞU BOYUNCA BOŞ KÜMEYİ ÖLÇTÜ
`paketle.py` 29 Eylül 10:54'te 288 dosyayı 30 pakete gömdü; `<script src>`
etiketleri artık paketi gösteriyor, **orijinal adlar yalnız HTML yorumunda
kaldı.** `denetle.py` D hattı dosyalarını `src="data/d_sinirlar…"` diye
arıyordu ⇒ **0 dosya** ⇒ `0 birim (tavan 1611) ✓`.
🟢 **KOSU-UMIT yakaladı** — tek bir şüpheli sayıdan: *"tavan 1611 iken 0 ölçüm
yapılmış, bu 'temiz' değil 'ölçülemedi' olabilir."* Haklıydı.
Düzeltildikten sonra: **1517 birim · 725 (hat, gün) ölçüldü · temiz.**

### ② Görünürlük denetimi de 0 dosya tarıyordu
Aynı kökten, kimse bildirmemişti: 92 `yerlesimler*.js` paketlenmiş, ③ denetimi
boş küme üzerinde gezip temiz rapor veriyordu. Düzeltildi: 93 dosya tarandı,
**bulgu 0** — yani bu denetimde bir şey gizlenmiyordu, ama artık 0 ÖLÇÜLMÜŞ.

### ③ Yayın kapısı DOĞRU veri eklemesini bloke ediyordu
`ODAKSIZ GERİLEDİ: 725 > tavan 480 (+245)`. Ayrıştırdım:
```
tavan zamanı VAR OLAN 152 dosya : odaksız 480   ← TAM TAVAN
tavandan SONRA DOĞAN   31 dosya : odaksız 245
```
**480 == 480, birebir. Gerçek gerileme SIFIR.** Aşımın %100'ü yeni kapsamdı.
🔴 **Tavanı YÜKSELTMEDİM** — o bir af olurdu ve var olan dosyalardaki bir
gerilemeyi de gizlerdi. Onun yerine tavana **evren** yazıldı (Değişmez 8'in
defter deseni): tavan 480'de duruyor ve kendi evreninde **tek kalemlik**
gerilemede bile ötüyor (iki yönde sınandı).

**Çare, üçü için de tek paylaşılan okuyucu:** `arac/paket_coz.py` — paketi açar
ve boş küme için **bağırır** (sessizce [] dönmez). Körlüğü mümkün kılan şey
0'ın geçerli bir cevap olmasıydı.
📌 Üçüncü bir kör kapı aradım: `denetim/ARAC-PAKET-KORLUK-1001.py` (AST ile,
regex tahmin etmeden) — **7 araç, 13 desen, şüpheli 0.**

---

## 🔴 3. SENİN KARARINI BEKLEYEN TEK KALEM

Yayın kapısı hâlâ **çıkış 1** veriyor, tek sebeple: `üretim izi bayat 2`.
`CLAUDE.md §9` / `D229` senin 17 Eylül hükmün: *"YAYIN BAYAT yayını durdurmaz."*
Ama kapıda **iki ayrı dal** var ve hüküm birini adıyla anıyor:
```
"yayın tazeliği"  → ! ÖLÇÜLEMEDİ      — durdurmuyor
"üretim izi"      → ✗ bayat 2          — DURDURUYOR (denetle_yayin.py:1564)
```
Üçünü ayrı ölçtüm, **üçü aynı şey değil**:
```
altlik.js    üreticisi sonradan değişmiş ⇒ GERÇEK ve DÜZELTİLEBİLİR
             → uret_altlik.py koşturuldu, KAPANDI
bolgeler.js  koşunun girdisiyle üretildi, main ilerledi ⇒ TAM D229 DURUMU
devirler.js  98 girdiden 3'ü .gitignore'lu ve DİSKTE YOK
             ⇒ 🔴 bu "bayat" DEĞİL "ÖLÇÜLEMEDİ"; kapı ikisini aynı kovaya
               atıyor ve bu `D204`ün (ölçülemedi ≠ yok ≠ temiz) ihlali
```
**Kapıyı zayıflatmadım ve bilerek:** kendi yayınımı geçirmek için bir kapının
bloke etme kuralını değiştirmek bu projede yapılabilecek en kötü hamledir.
Üç seçenek, hangisi olduğunu sen söyle:
```
① `üretim izi` de D229 kapsamında → dal bilgi uyarısına çevrilir
② değilse → `devirler.js` için ayrı "ÖLÇÜLEMEDİ" kovası (bloke etmez, TEMİZ de sayılmaz)
③ ya da tam inşa koşusu beklenir
```

### 🔴 VE BİR İTİRAF — sıralamayı ters yaptım
Kapıyı **push'tan SONRA** koşturdum, önce değil. Gerekçem vardı (5 blokeden
3'ünü o commit'in kendisi kapatıyordu) ama gerekçe sırayı doğru yapmaz.
Doğrusu: kapı → sonra push. Yayın sağlam indi, ölçtüm; ama usul yanlıştı.

---

## 4. GECENİN ÖLÇÜM DİSİPLİNİ DERSİ — üç kez aynı aile

Bu gece **üç kez** dolaylı bir ölçümden yanlış sonuç çıkardım:
1. `grep -c $'\r'` kabuk tarafından boşaltıldı, **satır saydı** ve UMIT'in
   DOĞRU raporunu yanlış ilan ettim. (Sayıları doğruydu.)
2. İki kez boru hattından sonra `echo $?` okudum — borunun kodunu gördüm.
3. Yayından sonra `atlas-hazir` ve `haritaHazir` bayraklarına bakıp **"site
   bozuk"** diye alarm verdim. **Ekran görüntüsü aldığımda site tıkır tıkır
   çalışıyordu.** O bayraklar "kullanıcı atlası görüyor mu"nun vekili değil.

⇒ `dersler/D246` · `D247` · `D248` yazıldı. En keskini **D247**:
*iki ölçümün uyuşması doğrulama değildir; bozuk bir ölçüm doğru sayıyı verebilir.*

---

## 5. İŞÇİLER

**KOSU-UMIT** — gecenin en iyi işi. Üç sessiz kusur yakaladı (CRLF · `yay`
imzası · D8a boş kümesi), üçü de kalıcı çareye dönüştü. Ve bir kez benim
talimatımı **düzeltti**: `merge` yerine `cherry-pick -n` kullandı, çünkü merge
koşunun girdisini değiştirip denetimin BAŞKA bir evreni ölçmesine yol açardı.
Worktree + ham çıktı (~500 MB) duruyor — D8 yalnız orada ölçülebiliyor.

**YAZICI-KASA** — emekli oldu, devir dosyası yazıldı
(`denetim/YZ-KIRLENME-1001-DEVIR.md` + 8 araç). Ölçtüğü üç şey:
```
TDV alıntıları: 310 madde / 1130 alıntı birimi → 🟢 UYDURMA 0
Britannica sayfalarının %88'inde YZ kutusu (`.ai-qna-module`)
ve KENDİ ayrıştırıcısında 10 yanlış pozitif + 3 yanlış negatif buldu
```
Son bulgusu derslik: *"aynı alet hatası iki yönde ölçmüş."* İki öneri dosyası
UYGULANMADI, hükmün bekliyor:
- `YZ-KIRLENME-1001-ATIF-DUZELTME.json` — 13 kalem
- `YZ-KIRLENME-1001-RUSYA-ONERI.json` — 77 madde · 🔴 15'inde **gün düşürme**
  Değişmez 2'ye dokunuyor, ölçmeden uygulamadım.

---

## 6. SIRADAKİ (senin sıralamanı bekliyor)
```
1  üretim izi hükmü (yukarıda ③)                      → kapı tam temize geçer
2  YENİ KAPSAM kovası: 6 dosyada 245 odaksız          → %88 ve %50'lik oranlar
                                                        yeni maddelerin odak
                                                        disiplininin zayıf olduğunu
                                                        söylüyor, kapanmalı
3  KASA'nın 2 öneri dosyası (13 atıf + 77 rusya)      → 15 gün düşürme ÖLÇÜM ister
4  ad_esanlam.js 25 kayıt ÖKSÜZ                        → kapı doğruladı: app.js
                                                        okumuyor, index yüklemiyor
5  tam inşa koşusu kalemleri: MOTOR-BOZUK-KIYI yaması ·
   YAMA-MOTOR 2 yama · 163 beyanlı boya · 1281/1945 ufku
```

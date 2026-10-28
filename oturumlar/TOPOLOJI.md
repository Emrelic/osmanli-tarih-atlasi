# 🖧 TOPOLOJİ — beş makine, roller, çalışma tipleri ve BİRLEŞTİRME düzeni

> Emre'nin kararı, 4 Ekim 2026. Yazan: YILDIRIM BAYEZIT (koordinatör).
> 🔴 Bu dosya `CLAUDE.md §7`nin **makine** boyutudur. §7 hangi OTURUMUN hangi
> DOSYAYA yazacağını söyler; burada hangi MAKİNENİN hangi İŞİ yapacağı yazılı.
> İkisi çeliştiğinde: rol bu dosyadan, dosya sahipliği §7'den okunur.

---

## 1. ROLLER — Emre'nin tahsisi

| makine | rol | ne yapar | ne YAPMAZ |
|---|---|---|---|
| **EMRELIC** (laptop) | **koordinatör · hata kutusu paketleyici · planlayıcı · kullanıcı gözü ve kumanda merkezi** | dağıtım · hüküm · plan · `main`e birleştirme · Emre'nin parti/karar kutusu · siteye kullanıcı gözüyle bakmak | uzun koşu · toplu kod yazımı (TİP2+) |
| **HAVVA** | **koşucu + yayıncı** | `uret_petek.py` · `uret_devirler.py` · `renk_olc.py` · `paketle.py yenile` · `surum_damgala.py` · `denetle_yayin.py` | elle veri yazımı · araştırma · hüküm |
| **UMIT** | **yazıcı** — kod yazan Claude oturumlarını barındırır | `arac/*.py` · `js/*.js` · araç/yama yazımı · sınav betikleri | koşu · yayın · hüküm |
| **KASA** | **araştırmacı** — yalnız metin | TDV · literatür · bilimsel makale · gazetter · kaynak çıkarma → `denetim/KASA-*.md` | `data/` yazımı · kod · koşu · hüküm |
| **LAB** | **denetleyici** | `denetle.py` · `odak_olc.py` · `denetle_yayin.py` · sayım/ölçüm → `denetim/LAB-*.md` | **düzeltme** (§7: rapor/denetim oturumu düzeltme yapmaz) |

---

## 2. ÇALIŞMA TİPLERİ

| tip | kaç makine | kim ne yapar |
|---|---|---|
| **TİP 1** | 1 — yalnız EMRELIC | her iş tek makinede: gözlem · plan · koşu · araştırma · denetim · yazım |
| **TİP 2** | 2 | koşu **ve/veya** (kod yazımı + araştırma + denetim) ikinci makineye ayrılır. EMRELIC yalnız **hata paketleme · site denetimi · kullanıcı gözü**. Amacı: ağır iş sürerken laptopu yüklememek |
| **TİP 3** | 3 | EMRELIC hata paketleme + plan + koordinasyon · **UMIT** kod yazımı + araştırma + denetim · **HAVVA** koşu |
| **TİP 4** | 4 | LAB **yok**; denetim görevi de **UMIT**'te. EMRELIC + HAVVA + UMIT + KASA |
| **TİP 5** | 5 | beş makine, her biri §1'deki kendi rolüyle |

📌 **Tip bir KAPASİTE beyanıdır, bir vaat değil:** makineler kapalıysa (eczane
takvimi Pzt–Cmt 08:45–19:30, Pazar kapalı) fiilen TİP 1'desin. Gün içinde tip
DEĞİŞİR; hangi tipte olduğun `py arac/bekci_olc.py` + `ListAgents` ile ÖLÇÜLÜR,
tablodan okunmaz.

---

## 3. 🔴 BU TAHSİSİN DEĞİŞTİRDİĞİ İKİ ESKİ KURAL

Yazılmazsa her yeni oturum eski kuralı okur ve yeni düzeni reddeder
(`D258` ailesinin kardeşi: *kural yazılı olmayan kural değil, unutulan kuraldır*).

### ① "`uret_petek.py`yi yalnız Oturum 0 koşturur" (§7 · §9) → ARTIK HAVVA
Koşucu HAVVA'dır. Değişmeyen kısım: **koşu sürerken `data/` ve `arac/` DONUK**,
ve devir **sözle** yapılır ("girdi kilitli" / "dosya senin").

### ② Motor tuzu donması (§9.1 ③) — artık MAKİNELER ARASI, ve söz YETMEZ
Eskiden kod yazan ile koşan **aynı makinedeydi**; şimdi kod UMIT'te, koşu
HAVVA'da. Bir söz UMIT'teki üç oturumu durdurmaz.
🔴 **Mekanizma hazır, kullanılacak:** koşuyu başlatan HAVVA, koşudan ÖNCE
```bash
py arac/kaynak_durum.py kapat --kod KOSU      # ilanı TAHTAYA da yazar
```
koşar. `tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur ve
**çıkış 3** verir ⇒ UMIT'teki yazıcı oturumlar bekçisini kuramaz, durur.
Koşu bitince `py arac/kaynak_durum.py ac`.
⚠️ Yasak **zaten kurulmuş** bekçiyi düşürmez — bu yüzden ilan tahtaya da
yazılır ve HAVVA koşuyu başlatmadan ÖNCE 60 sn bekler (§7 "BEN BAŞLATIYORUM").
⚠️ Motor tuzu dört dosyadır: `uret_petek.py` · `renkler.py` · `girdi.py` ·
`motor_onbellek.py`. UMIT bunlara dokunacaksa koşu penceresi dışında dokunur.

---

## 4. 🔴 BİRLEŞTİRME DÜZENİ — beş makine `main`e birlikte push EDEMEZ

### Ölçüm — sorun tahmin değil, bugün iki kez yaşandı
```
son 200 commit'in 78'i (%39) TAHTA MESAJI
en çok değişen dosyalar:  oturumlar/TAHTA.md 78 · oturumlar/tahta.json 74
                          üçüncü sıra 9  ⇒ ilk ikisi 8 KAT önde
```
Vaka 1: UMIT'in deposu `tahta.json` çakışmasıyla rebase ortasında KİLİTLENDİ,
Emre'nin elle müdahalesini bekliyor. Vaka 2: bende `pull --rebase` iki kez
"unstaged changes" ile reddedildi; push yalnızca origin ayrışmadığı için geçti
— yani **doğruluk değil şans**.

### 🔴 Teşhis: git'i MESAJ YOLU olarak kullanıyoruz
`tahta.json` commit'lenmiş bir mesaj kuyruğudur. Her mesaj bir commit, ve o
commit'i **beş makine birleştirmek zorunda**. Çatışmanın %39'u projeyle
ilgisizdir. Bu bir git sorunu değil, bir **mimari seçim** sorunu.

### Çare — dört madde, fayda sırasına göre

**① TAHTAYI GİT'TEN ÇIKAR (en büyük kazanç).** `acici.py` altyapısı HAZIR:
jetonlu, yalnız özel ağ, her istek loglu. Ona bir `tahta` uç noktası eklenir,
tahta **tek makinede** (EMRELIC = kumanda merkezi) durur, ötekiler HTTP ile
yazar/okur. **Tek yazıcı ⇒ çatışma İMKÂNSIZ.** `tahta.json`/`TAHTA.md`
gitignore'a; tarih kaybolmasın diye koordinatör **günde bir** arşiv commit'i
atar. Tahmini etki: commit sayısında **%39 azalma**, ve UMIT'i kilitleyen
sınıfın TAMAMEN kalkması.
⚠️ Tek makinede durması tek arıza noktasıdır: EMRELIC kapalıysa tahta yok.
Çare, HTTP erişilemezse yerel dosyaya düşmek (`acici.py` deseni) — ama o anda
çatışma riski geri gelir, yani düşüş **beyanlı** olmalı.

**② `main`in TEK YAZICISI koordinatördür.** Hiçbir makine `main`e push etmez;
her makine kendi dalına push eder, EMRELIC birleştirir.
```
makine/umit · makine/kasa · makine/lab · makine/havva   (ya da iş adıyla dal)
```
📌 **Bu bugün ÖLÇÜLDÜ ve çalıştı:** KASA `kasa-dalga1-1003` dalına push etti,
ben tek komutla fast-forward ettim, **çatışma sıfır**. UMIT ise `main`e
yazmaya çalıştı ve kilitlendi. İki yöntem aynı gün yan yana denendi.
⇒ Faydası: bir makine tıkandığında **yalnız kendini** tıkar. Ve birleştirme
sırasını koordinatör seçer.

**③ YOL KÜMELERİ AYRIK OLSUN — çatışma YAPISAL olarak imkânsızlaşır.**
Emre'nin rol tahsisi bunu kendiliğinden veriyor; yazılı hâli:
```
UMIT     arac/*.py · js/*.js · denetim/ARAC-*
KASA     denetim/KASA-*
LAB      denetim/LAB-*
HAVVA    ÜRETİLEN data/*.js (donemler · bolgeler · devletler_harita · devirler ·
         paket_NN) + index.html damgası
EMRELIC  CLAUDE.md · kök *.md · oturumlar/* · ELLE yazılan data/yerlesimler*.js
```
Kümeler ayrıkken birleştirme **otomatik** olur. Çatışma yalnız gerçekten
paylaşılan birkaç dosyada kalır — ve onlar ①'de git'ten çıkıyor.

**④ ÜRETİLEN DOSYA BİRLEŞTİRİLMEZ, YENİDEN ÜRETİLİR.** `donemler.js`,
`bolgeler.js`, `devletler_harita.js`, `paket_NN.js` büyük üretilmiş
dosyalardır; satır satır birleştirmek **anlamsız ve tehlikelidir**.
```
Üretilen dosyada çatışma  ⇒  HAVVA'nın sürümünü BÜTÜN olarak al
                             (`git checkout --theirs`) ya da YENİDEN KOŞ.
                             Asla elle birleştirme. Asla elle düzenleme.
```
Tek yazıcısı HAVVA'dır; başka hiç kimse bu dosyalara yazmaz.

### Yapılmayacaklar — gerekçeli
- ⛔ **`merge=union` sürücüsü JSON'a UYGULANMAZ.** Append-only `.md` kütüklerde
  işe yarar, ama `tahta.json`/`defter.json` bir **JSON dizisi**dir: union
  birleştirme iki kapanış parantezi bırakıp dosyayı **geçersiz** yapabilir.
  Sessiz bozulma, çatışmadan kötüdür.
- ⛔ **`git add -A` ve dizin pathspec'i** (zaten `D223` yasağı). Beş makineli
  düzende tek bir `add -A`, başka makinenin yarım işini commit eder.
- ⛔ **Önbellekleri gitignore'a almak.** 4 Ekim'de önerdim, YANLIŞTI:
  `.gitignore:216` sebebini yazıyor — `denetim/*-onbellek/` **bilerek
  izleniyor**, çünkü `CLAUDE.md §4` alıntıları o gövdelerden kelimesi
  kelimesine alıyor, yani **alıntının delili**. Doğru iş tersi: izlenmeyen
  61 önbellek dosyası commit'lenmeli.

---

## 5. HER MAKİNENİN AÇILIŞ SÖZLEŞMESİ

```
① git -C C:\atlas pull --rebase          (yarım iş varsa ÖNCE onu çöz)
② CLAUDE.md + bu dosya + kendi şartnamen
③ rolünün DIŞINDA iş gelirse: YAPMA, koordinatöre yaz  (§7.1 ③)
④ commit: KENDİ dalına, AÇIK pathspec ile · `main`e push YOK
⑤ teslim TEK mesaj, üçlü kuralla · bekçi sorusu sonda
```
🔴 **Rol dışı iş reddi bir nezaket değil, çatışma önleyicidir:** KASA `data/`ya
yazarsa HAVVA'nın koşusu ve EMRELIC'in elle yazımı aynı dosyada buluşur.

---

# 6. 🆕 ALT KOORDİNATÖRLÜK — her makinenin kendi akış sorumlusu
*(Emre, 6 Ekim 2026: "umıt bilgisayarındaki irtibat noktası sorumlusunu alt
koordinatör ilan edelim … genel koordinatörden görevleri alıp kendi bilgisayarında
dağıtan oturum olsun.")*

## 6.1 NİÇİN GEREKTİ — ölçülmüş darboğaz, tasarım hevesi değil
5-6 Ekim gecesi sekiz işçi çalıştı. Sayılar:
```
dağıtılan görev          8
gelen teslim             8  (dördü AYNI yarım saatte)
genel koordinatörün
  verebildiği hüküm      5  → üçü bir sonraki tura kaldı
```
🔴 **Darboğaz makine değil KOORDİNATÖRÜN KENDİSİ.** Her işçi bir şartname ister ve
her teslim bir hüküm ister; ikisi de koordinatörün bağlamından yenir. 30 oturum
açmak 30 teslim demektir, 30 teslim de **hükmü verilmemiş teslim** demektir.
⚠️ Ve hükmü verilmemiş teslim, hiç yapılmamış işten KÖTÜDÜR: çürür, bayatlar,
sonra biri aynı işi yeniden yapar.

## 6.2 ALT KOORDİNATÖR KİMDİR
Her makinenin **irtibat noktası** (Remote Control ile açılan oturum) o makinenin
alt koordinatörüdür. Bugünkü kadro:
```
EMRELIC   GENEL KOORDİNATÖR (YILDIRIM BAYEZIT)  — alt koordinatörü YOK, kendisi odur
UMIT      alt koordinatör: UMIT irtibat oturumu     → yazma · araştırma · denetleme
HAVVA     alt koordinatör: HAVVA irtibat oturumu    → koşu + yayın (tek iş, tek oturum)
KASA      alt koordinatör: KASA irtibat oturumu     → araştırma (UMIT'ten devralabilir)
LAB       alt koordinatör: LAB irtibat oturumu      → denetleme (UMIT'ten devralabilir)
```

## 6.3 NE YAPAR — beş madde
1. **Genel koordinatörden İŞ ALIR, madde değil KÜME alır.** Genel koordinatör
   "şu 40 kalem senin makinende" der; hangisinin kime gideceğine alt koordinatör
   karar verir.
2. **Kendi makinesindeki hazır kıtaları ÖLÇER ve dağıtır** (`§7.3`: ad boşluk kanıtı
   değildir — `list_events` mesaj sayısı ölçülür; `lastActivityAt` sıcaklıktır,
   `isRunning` DEĞİL).
3. **Teslimleri TOPLAR ve ÖN ELEMEDEN geçirir.** Genel koordinatöre giden şey ham
   teslim değil, **özet + hüküm gerektiren kalemler**dir.
4. **Kendi makinesinin git akışını yürütür:** işçiler kendi dosyalarını adıyla
   commitler, alt koordinatör makine dalına push eder. `main`e **ASLA** push etmez.
5. **Çakışmayı kendi makinesinde keser:** aynı dosyaya iki işçi bakmayacak
   (`§7` — bölme ölçütü DOSYADIR).

## 6.4 NE YAPMAZ — ve bu liste yetkiden daha önemli
```
❌ KAPSAM kararı veremez          (yeni boyut · yeni künye sınıfı · yeni katman)
❌ TAVAN değiştiremez             (BEKLENEN_* sabitleri genel koordinatörde)
❌ main'e push edemez
❌ Emre'ye doğrudan kapsam sorusu soramaz — genel koordinatöre yazar
❌ başka makinenin işçisine görev veremez
❌ bir eşin REDDEDİLDİĞİ işi onun yerine yapamaz/yaptıramaz
```
🔴 Sonuncusu 5 Ekim'de yaşandı ve HAVVA doğru davrandı: izin reddi alınca
*"senin ya da başka bir oturumun benim yerime yapması da aynı reddin etrafından
dolaşmak olur"* dedi. **Bu kural artık yazılı.**

## 6.5 HÜKÜM SINIRI — alt koordinatör neyi karara bağlar
```
🟢 KARARA BAĞLAR   hangi işçi · hangi sıra · çakışma · ölçüm yeterli mi ·
                   teslim kabul mü (ölçüm eksikse GERİ GÖNDERİR)
🟡 ÖNERİR          veri düzeltmesi · tavan değişikliği · yeni ders
🔴 YUKARI TAŞIR    kapsam · model · kaynak çelişkisi · Emre'nin kararı
```
📌 Ölçüm ile hüküm ayrımı alt koordinatörde de geçerlidir: *bir işçinin sayısını
kabul etmeden ölç.* 5 Ekim'de bu üç kez işe yaradı (LAB "evrende 3" dedi, kapı 6
gösterdi · KASA "4 çift" dedi, kapı 3 gösterdi · işçi "kapı görmüyor" dedi, kapı
görüyordu).

---

# 7. 🔴 KOŞU ÖNCESİ PUSH DİSİPLİNİ — Emre'nin sorusunun ölçülmüş cevabı
*(Emre: "yapılan işleri herkesin koşu başlamadan önce push etmiş olması lazım diye
düşünüyorum doğru mu — herkes kendi işini push etmemiş olur ise havva eksik veri ile
koşu yapar.")*

**Doğru, ama eksik.** Ölçüldü (5 Ekim):
```
makine/havva   origin/main'e göre  65 geride · 1 ileride
makine/umit   240 geride · makine/kasa 337 · makine/lab 456 · makine/sonra1923 347
main son 6 SAATTE 96 commit aldı
```
🔴 **Push YETMEZ — makine dalına push etmek veriyi koşuya SOKMAZ.** Koşu
`origin/main`den taze worktree kurar; bir iş `makine/umit`e push edilmişse ve
`main`e BİRLEŞTİRİLMEMİŞSE, koşu onu GÖRMEZ.

## Koşu öncesi zincir — dördü de şart
```
① her işçi KENDİ dosyasını adıyla commitler        (§7 · D223, pathspec AÇIK)
② alt koordinatör makine dalına push eder
③ GENEL KOORDİNATÖR dalları main'e BİRLEŞTİRİR ve push eder   ← ATLANAN HALKA
④ koşucu: git fetch → git rev-parse origin/main → TEMELİ YAZAR → worktree
```
⚠️ **Commit edilmemiş iş hiçbir yere gitmez.** Koşu emrinden önce alt koordinatörler
"bende commit edilmemiş iş var mı" diye `git status --porcelain` ile ÖLÇER ve
genel koordinatöre **sayıyla** bildirir.

## Ve kaçınılmaz olanı da yazalım
`main` saatte ~16 commit alıyor, koşu 4-7 saat sürüyor. ⇒ **Koşu bitmeden bayatlar
ve bu NORMALDİR** (`D229`). Çare daha çok push değil, **TEMELİ YAZMAK**: çıktı
commit'i "temel \<hash\>" taşır. KOŞU 19 bunu yaptı ve 5 Ekim'de bir gerilemeyi
ararken o satır işe yaradı.
🔴 Peşinden koşma: "biraz daha güncel olsun" diye koşuyu geciktirmek, hiç
koşmamaktır.

---

# 8. 🆕 MESAJLAŞMANIN BEDELİ — ve niçin web tabanlı tahta ŞART
*(Emre, 6 Ekim: "bir yazı hem gönderene hem alana yazılarak token harcanmasına sebep
olabilir, ayrıca context'e katılmamış olur … web tabanlı bir sisteme oturumların mesaj
yazabilmesi sağlanmalı.")*

**İtiraz yerinde ve §4 ①'deki teşhisle aynı kök.** Bugünkü tahta üç ayrı bedel
ödetiyor:
```
① YAZIM BEDELİ    mesaj hem yazanın turunda üretilir hem okuyanın bağlamına girer
② GİT BEDELİ      her mesaj bir COMMIT, ve beş makine onu birleştirmek zorunda
                  (ölçüldü: son 200 commit'in %39'u tahta mesajı)
③ BAĞLAM BEDELİ   mesaj bağlamda KALMAZ; sonraki turda yeniden okunmak zorundadır
```
⇒ Çare `§4 ①`de yazılı ve altyapısı HAZIR: `acici.py` (jetonlu, yalnız özel ağ,
her istek loglu) üzerine bir `tahta` uç noktası; tahta **tek makinede** durur,
ötekiler HTTP ile yazar/okur. **Tek yazıcı ⇒ çatışma imkânsız**, ve mesaj git'ten
çıkınca ② tamamen kalkar.
⚠️ Tek arıza noktası: EMRELIC kapalıysa tahta yok. Düşüş yerel dosyaya olur ve
**BEYANLI** olur.
📌 Bu bir "güzel olur" değil ölçülmüş bir kazanç: commit sayısında ~%39 azalma ve
UMIT'i kilitleyen sınıfın tamamen kalkması.

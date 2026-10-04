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

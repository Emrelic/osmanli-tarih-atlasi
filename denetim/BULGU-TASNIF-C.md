# BULGU — TASNİF-C · 30 madde · parti-emrelic-0020 … 0025

```
OTURUM    TASNİF-C            TARİH    28 Ağustos 2026
TABAN     SINIFLANMADI.md'de bu paketlerin 30 satırı   (şartname ~27 diyordu)
VERİ      girdi.yukle() · 2607 nokta · 56 dosya · py arac/_yer_ara.py
YAYIN     data/donemler.js 2026-08-27 17:25 (son koşu) · index.html ?v=r3556
HÜKÜMLER  denetim/HUKUM-TASNIF-C.json   (30 madde, madde madde)
YETKİ     yalnız ÖLÇÜM ve HÜKÜM. data/ arac/ js/ ve kök *.md'ye YAZILMADI.
```

## 0. SAYIYLA

```
30 madde  →  🟢 kapanmış 2   🔵 kümeye git 13   🟠 uygulanmadı 3   🔴 yeni iş 12
```

| paket | satır | 🟢 | 🔵 | 🟠 | 🔴 |
|---|---|---|---|---|---|
| 0020 | 4 | — | 2 | 1 | 1 |
| 0021 | 11 | 2 | 6 | 1 | 2 |
| 0022 | 2 | — | 2 | — | — |
| 0023 | 4 | — | 2 | 1 | 1 |
| 0024 | 5 | — | — | — | 5 |
| 0025 | 4 | — | — | — | 4 |

⚠️ 0024/H-0001 tek satırda **iki ayrı hüküm** taşıyor: (a) Gümrü 🟢 kapandı,
(b) 35 şehir kronolojisi 🔴 açık. Tabloda 🔴 sayıldı — bir satır bir kova.

---

## 1. 🔴 ŞARTNAME SAYISI TUTMADI — ve yalnız benimki değil

Şartname bana *"~27 madde"* dedi. Ölçtüm: **30**.
Aynı komutu (`grep "^| parti-emrelic-XXXX "`) bütün tabloya koşturdum:

```
TASNİF    0002:6 0003:5 0004:3 0006:5 0007:1 + emrelic-0008:9   = 29   (~30)
TASNİF-B  emrelic 0010:1 0013:2 0014:0 0016:3 0017:1 0019:28    = 35   (~36)
TASNİF-C  (benim)                                                = 30   (~27)
TASNİF-D  emrelic 0027:1 0028:3 0029:3 0030:10 0031:12          = 29   (~34)
TASNİF-E  emrelic 0032:5 0033:17 0036:12                        = 34   (~39)
TASNİF-F  emrelic 0034:15                                       = 15   (~36)
------------------------------------------------------------------------
dağıtılan 172  +  parti-kasa-0010:1 · parti-kasa-0012:1  =  174 ✓
```

🔴 **İki bulgu, ikisi de koordinatörün karar alanı:**
1. **`parti-kasa-0010` ve `parti-kasa-0012` (2 madde) tabloda hiç geçmiyor** —
   kimseye verilmemiş.
2. **TASNİF-F'in sapması 21** (~36 denmiş, 15 var). `parti-emrelic-0014` ise
   `SINIFLANMADI.md`de **sıfır satır** — TASNİF-B'nin listesindeki bir paket boş.

---

## 2. 🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI — 3 madde

Kayıt *"çözülmüş"* gibi okunuyor, veride karşılığı yok.

### 🔴 0021/H-0007 — BAHREYN · **koordinatörün "cozuldu yaz" talimatı çürüdü**

Bana *"H-0007 ve H-0021'i bu gece kapattım, cozuldu yaz"* denmişti.
Kendim ölçtüm (`py arac/_yer_ara.py "Manama"`):

```
Manama (Bahreyn)  26.228  50.586  k2  tur:liman
    s: 1861-05-31 -> 1923-10-29  ingiltere        ← TEK DÖNEM
```

Portekiz (1521-1602) ve Safevî (1602-) dönemleri **veride YOK**.
Emre'nin şikâyeti *"Safevîlerin Bahreyn'i Portekizlilerden alması haritada
yansıtılmıyor"* idi — **bugün de yansımıyor.**

⇒ Kapanan şey **H-0021** (Katar yarımadasının kırmızılığı), **H-0007 değil.**

🟢 Ve çare hazır, yazan yok. `data/yerlesimler_ek_korfez.js`in kendi başlığı
bunu açıkça söylüyor: *"H-0007 ile İLGİLİ AYRI BULGU (bu dosyaya YAZILMADI,
çünkü Manama'nın kaydı data/yerlesimler.js'te ve bu oturumun dosyası DEĞİL)"* —
ve TDV `bahreyn` maddesi **20 Ağustos'ta doğrulanmış** (HTTP 200, gövde
okundu): *"Portekizliler, 1521'de Bahreyn'i ele geçirdiler … 1602'de İran'a
bağlı kuvvetler tarafından dışarı çıkarılmalarına kadar onların idaresinde
kaldı."*

**Kaynak var · ölçüm var · yazan yok. Sekiz gündür bekliyor.**

### 0020/H-0005 — MALTA KIYISI · `Z-0015` sekiz gündür kuyrukta
```
KARA_TOL = 0.002   uret_petek.py:404    ~220 m
SADE_TOL = 0.012   uret_petek.py:1146   ~1330 m
git log -S"SADE_TOL = "  →  son değişiklik eec59ab, 2026-07-28
```
Satır numaraları 376/1061 → 404/1146'ya kaymış (dosya değişmiş) ama
**sabitler değişmemiş.** Kıyı hâlâ 6 kat kabalaşıyor. Kabul edilmiş borç.

### 0023/H-0003 — KUTSAL İTTİFAK ROZETİ · `data/ittifaklar.js` **YOK**
Tasarım 24 Ağustos'ta yapılmış (commit `d9b255e`) ve commit mesajının
kendisi *"KOD YAZILMADI"* diyor. Dört gündür tasarım var, uygulama yok.
📌 `0027/H-0006` ile aynı kalem — başka bir tasnif oturumunun paketinde.

---

## 3. 🟢 KAPANMIŞ — 2 madde, ikisi de ölçüldü

### 0021/H-0029 — Dalmaçya adacıklarına sıçrayan kırmızı · **KAPANDI**
Beş adanın beşi de artık kendi kaydını taşıyor, `1281-01-01 → 1797-10-17`
arası **`venedik`**: Brakya (Brač) · Hvar (Lesina) · Korçula · Vis (Lissa) ·
Mliyet (Mljet). ⇒ `CLAUDE.md §2`nin **adıyla andığı** vaka (*"Brač, Hvar,
Korčula 1483'ten itibaren Osmanlı oldu (Mostar'dan)"*) kapandı.
🟢 Ve **yayına girmiş**: `Brakya` dizgisi `data/donemler.js` içinde geçiyor,
yani 27 Ağustos 17:25 koşusu bu noktaları gördü.

### 0021/H-0021 — Bahreyn kırmızılığı · **KAPANDI, ama bir tur gecikmeli**
`data/yerlesimler_ek_korfez.js` var ve `arac/girdi.py:543`te bağlı.
⚠️ **Gecikmeyi kayda geçiyorum** (`§11`: *çıktı girdinin bir tur
gerisindedir*): bağlama **henüz commit edilmemiş** (`git status M
arac/girdi.py`) ve son koşu 27 Ağustos 17:25. ⇒ Dolgu noktası **bir sonraki
koşuda** haritaya iner; bugünkü yayında (r3556) kırmızılık hâlâ görünür.

---

## 4. 🔵 KÜMEYE GİT — 13 madde

### 4.1 `oturumlar/FERHAT-PASA-1590.md` — AÇIK OTURUM, dört madde oraya
```
0020/H-0012 · 0020/H-0014 · 0021/H-0027 · 0021/H-0028
```
Dördü de aynı şeyi soruyor: 1590 Ferhat Paşa (TDV'de *"İstanbul"*)
antlaşmasıyla Doğu Anadolu ve Batı İran'da hangi şehir kime kaldı.
`FERHAT-PASA-1590.md`nin 16 yerlik listesi Emre'nin 21 adının **üstünü
örtüyor.** ⇒ Yeni iş açılmasın, o oturuma bağlansın.

### 4.2 sahiplik-teyidi (kaynak turu) — 5 madde
| madde | ölçüm | kalan iş |
|---|---|---|
| 0021/H-0002 | Dalmaçya kutusunda **24 nokta** (aş. §6) | kıyı şeridinin kaynak teyidi |
| 0021/H-0010 | 1638-12-24: Bağdat+Musul OSMANLI, **Erbil · Kerkük · Sâmerrâ · Tikrit · Şehrizor `safevi`** | TDV `bagdat` · `murad-iv`'ten fetih günleri |
| 0022/H-0001 | Parga `venedik` · Çehrin `lehistan` · Mejibuji OSMANLI — üçü de veride yazılı | Bucaş 1672 hükümleri; ⚠️ `parga` slug'ı ÖLÜ, genel madde denenmeli |
| 0022/H-0005 | altı bozkırın **beşinde sahip zaten `kirim`** | Deşt-i Kıpçak'ın el değiştirmesi gün hassasiyetinde yazılı DEĞİL — tek başına bir kaynak oturumu |
| 0023/H-0005 | **Kalocsa d: 1541-08-29 → 1686-09-02, Budin'le İKİ TARİH DE birebir aynı**; Şimontorna yalnız bitişte aynı | TDV'den gerçek düşüş günleri. Önem DÜŞÜK |

### 4.3 emilme — 2 madde · **ve ikisinde de aletin evreni dar**
`0021/H-0005` (Tuna, iki boşluk) ve `0021/H-0017` (Mısır, Kûm Ombo).
İkisinde de kutu **merkezi** BOYALI ölçülmüş — yani şikâyet kutu merkezinde
üretilmiyor. **Görselle eşleştirme hâlâ yapılmadı** (ben de yapmadım).
⇒ Kutu merkezi ölçümü bu iki madde için **yetersiz bir alet**; cevap ancak
`H-XXXX-1.png`deki boşluğun koordinatı okunarak verilir.

### 4.4 öteki iki
- **0021/H-0024** Orta Asya — motor kusuru yok (A1 tavanı k0=280 ≥ 139 km);
  nokta yoğunluğu **Kol A'da kayıtlı veri borcu**, siyasî yapı sorusu künye işi.
- **0023/H-0011** Niş/Vidin enklavı — Semendire eklendi (`cb24187`), Kragujevac ·
  Yagodina · Çaçak *"kaynak bulunamadı"* denip yazılmadı. Bugün hâlâ
  `Değişmez 7`in çıktısında **C-hakiki enklav** olarak duruyor
  (`e53c86a`, 27 Ağu 02:49 + `BULGU-ENKLAV-SORGU.md:21` bağımsız doğruluyor).
  ⚠️ *"Kaynak bulunamadı"* hükmü `§4`ün *"dar slug tutmazsa GENEL maddeyi dene"*
  kuralıyla **bir kez daha sınanmalı.**

---

## 5. 🔴 YENİ İŞ — 12 madde

### 5.1 🔴 EN BÜYÜK BULGU: **kırılma doğru günde, YANLIŞ MADDENİN altında** — 2 vaka

**0020/H-0013 — Ahıska'nın fethi, Fas'taki bir savaşın maddesine yapışmış**
```
1578-08-04'te kırılma                          0 adet   (tam tarama)
en yakın kırılma  1578-08-01  AHISKA  gurcistan → OSMANLI   (41,64 K / 42,99 D)
o güne en yakın madde  1578-08-04  "Vâdisseyl (Kasrılkebir) Savaşı ve
                                    Fas'ın Osmanlı himayesine girmesi"   3 gün
ikinci              1578-08-09  "Çıldır Zaferi — doğu savaşı başladı"    8 gün
```
⇒ Emre'nin gördüğü *"Kafkasya'da ufak bir toprak değişimi"* **tam olarak
Ahıska.** `Değişmez 2` temiz görüyor çünkü ±30 günde madde **var** — maddenin
**aynı şeyi anlatıp anlatmadığını sormuyor.**
🔴 **İkinci bulgu:** `1578-08-01`, Çıldır Zaferi'nden (08-09) **önce**. Ahıska
Çıldır'dan sonra alındıysa **tarih de yanlış.** Kaynakla sınanmadı.
🟠 Genel çaresi diye gösterilen `arac/denetle_iddia.py` (T-0109) **dosya olarak
yok** — şartnamesi `TESPIH-20260804.md:152`de *"hazır"* diyor, betik yazılmamış.

**0023/H-0010 — Knin'in Venedik'e kaybı, "Belgrad'ın kaybı" maddesinin altında**
```
Knin  d: 1522-05-29 → 1688-09-11   s: 1688-09-11 → 1797-10-17 venedik
```
Gerçek bir kırılma var, müstakil maddesi yok. Emre'nin kendi sözü şartı
belirliyor: *"tercihen ayrı bir madde ve madde açıklaması tahsis edilmeli"*
(`CLAUDE.md §10`: bu `Değişmez 2` ihlali sayılır). Önem: ORTA.

⚠️ **0025/H-0009 bu aileye AİT DEĞİL** — orada madde yok değil, **tarih yanlış.**
Karıştırılmasın.

### 5.2 🔴 KÜNYESİ OLMAYAN / KULLANILMAYAN KİMLİKLER — bugün ölçtüm
```
imereti                  künye VAR (devletler.js:1036) · renk VAR (#deea90) · veride  0 dönem
kartli · kaheti          künye YOK                                            veride  0 dönem
prusya · prusya-dukaligi künye YOK                                            veride  0 dönem
kurlandiya · livonya     künye YOK                                            veride  0 dönem
kraliyet-macaristani     künye YOK                                            veride  0 dönem
macaristan               —                                                    veride 60 dönem
```
- **0025/H-0001** Gürcistan iki kopuk parça → kopukluk **tarihen doğru**
  (1711'de İmereti · Kartli · Kaheti üç ayrı krallık, ikisi İran ikisi… biri
  Osmanlı tâbiiyetinde); yanlış olan **üçünü tek kimlik altında toplamak.**
  📌 En keskin kanıt: Kutaisi'nin `gurcistan` döneminin bitişi **1810-02-20**,
  `imereti` künyesinin `t`siyle **birebir aynı** — kaydı yazan İmereti'yi
  kastetmiş, kimliği yanlış yazmış.
- **0025/H-0004** Königsberg ve Memel `almanya` yazılı; 1561'de orası **Prusya
  Dukalığı** (1525, Lehistan'ın vasalı, Kutsal Roma'nın **dışında**).
- **0025/H-0005** Kraliyet Macaristanı **iki renge bölünmüş**: Eğri · Kanije
  `macaristan`, ama **başkenti Bratislava** ve Sopron · Nitra · Komárom · Uyvar
  `avusturya`. 🔴 **KARAR KOORDİNATÖRÜN** — veriye dokunulmadan önce (a) hepsi
  `macaristan` (b) hepsi `avusturya` (c) yeni `kraliyet-macaristani` künyesi
  şıklarından biri seçilmeli; 60 dönemin bir kısmı taşınacak.

### 5.3 🔴 NOKTASIZLIK — `CLAUDE.md §2`nin üç yeni vakası, üçü de ölçüldü
| madde | ölçüm | çare |
|---|---|---|
| 0024/H-0005 | **Kuveyt `kur:1716` · Muhammere `kur:1812`** ⇒ 1703'te sahipsizlikleri MEŞRU; toprak Abâdân'ın (`safevi`) peteğine düşüyor | Şattülarap ağzına 1-2 dolgu noktası. `Zübeyr` · `Ümmü Kasr` **veride yok** (tek eşleşme Deym Zübeyr, Sudan) |
| 0024/H-0008 | **Nyen · Koporye · İvangorod · Kingisepp — dördü de veride YOK** (Narva ve Oreşek var) | 3-4 İngriya noktası: `isvec` 1617 → 1703, sonra `rusya` |
| 0025/H-0009 | **Babaeski · Pınarhisar · Saray (Tekirdağ) kaydı yok** | Trakya orta kuşağı; yoklukları petekleri gereğinden geniş yapıyor |

🔴 **0024/H-0005 için `§3.5.1` şartı:** bu bir **sınır kayması** önerisidir,
**iki uç da ölçülmeli** — nokta eklenince Safevî tarafında yeni bir eksiklik
doğuyor mu, üretimden sonra bakılmalı.

### 5.4 🔴 0025/H-0009 — TRAKYA 1361: **on iki kayıt tek yuvarlak günde**
```
1361-01-01  ← TEK GÜNDE 12 YERLEŞİM (bugün birebir doğrulandı)
   Ahtapolu · Demirköy · Dereköy · Havsa · Kofçaz · Lalapaşa · Malko Tırnova ·
   Mustafapaşa · Orestiada · Rezve · Vize · İğneada
1361-02-01  Dimetoka
1361-03-01  EDİRNE          ← onlardan İKİ AY SONRA
1362-06-01  Kırklareli · Lüleburgaz
1371-09-26  Çirmen · Uzunköprü
```
İğneada · Rezve · Ahtapolu **Karadeniz kıyısında**, Edirne'nin 150 km
kuzeydoğusunda — ve veri onları **Edirne'den önce** Osmanlı yapıyor.
📌 `§11`: *"yuvarlak tarih yalnız yanlış değildir, çelişkiyi de saklar."*

### 5.5 🔴 0024/H-0002 — BÖLGE (`m:`) DELİKLERİ · **Emre 4/4 haklı**
```
Aşkale · Kelkit · Tosya · Karapınar · Ulukışla · Ilgın   →  6/6  m=(YOK), hepsi k=4
m: alanı boş olan kayıt:  1862 / 2607  =  %71,4
```
Aşkale (39,92 K / 40,69 D) Erzurum ile Erzincan'ın **tam arasında** ve `m:`
taşımadığı için bölge gövdesini ikiye bölüyor — Emre'nin gördüğü *"iki parça"*
bu. Kocaeli yarımadasında İzmit/Gebze `m:İstanbul`, İznik/Yalova `m:Bursa` ⇒
iki bölge gövdesi iç içe.
⇒ **Kısa vade** 6 kayda `m:`; **uzun vade** `VERI-YAPISI.md`nin **zaten
tasarladığı** `kd:[{f,t,k,m}]`. ⚠️ Yeni alan icat edilmemeli (`§11`, 8 Ağustos).

### 5.6 🔴 0024/H-0010 — HAKKINDA MENÜSÜ · **uygulayıcıya kritik uyarı**
Bu buton **vardı ve Emre'nin kendi isteğiyle silindi.** `index.html:23-28`:
> *"p2/H-0010 — kullanıcı: 'Hakkında butonuna artık gerek yok.' … Hakkında
> (proje künyesi + BEKLEYENLER tablosu) TAMAMEN kaldırıldı — js/app.js'teki
> hakkindaKur ve eşleri de silindi."*

⇒ **Ama istek tekrar değil:** silinen HAKKINDA *proje künyesi + BEKLEYENLER
tablosu* idi (iç işleyiş); bugün istenen **koşu ve yayın tarihi** (sürüm
bilgisi). **Aynı ad, başka içerik.** Eski modali geri getirmek, Emre'nin
reddettiği şeyi geri getirmek olur.
🟢 Verisi zaten üretiliyor: `arac/surum_damgala.py` → `?v=r3556`;
üretim koşusu `data/donemler.js`i sonunda damgalıyor → 2026-08-27 17:25.

### 5.7 🔴 0021/H-0030 — EFLAK SEFERİ · yarısı inmiş, yarısı hiç
🟢 İnen (commit `4581d71`, 19 Ağu 23:24, r2598): 41 antlaşmanın `lat`/`lon`u
yoktu → eklendi · `savasIsaretleri` yalnız `SAVASLAR`ı okuyordu → antlaşmalar
da okunur oldu · muharebe işaretleri çakışma elemesinde feda ediliyordu → düzeldi.
⚠️ **O oturum kendi düzeltmesini göremedi** (WebGL başlamadı) ⇒ Eflak seferi
işaretinin ekrana çıktığı **doğrulanmadı.**
🔴 Kalan (hiç dokunulmadı): üç voyvodalık başkentine üç ateş emojisi ·
saldırılan şehir/kalelerin gösterimi · birkaç kronoloji maddesi.
**İlk iş r3556'da işaretin gerçekten çizildiğini ekranda doğrulamak** — yoksa
kalan iş yanlış zemine kurulur.

### 5.8 🔴 0024/H-0001(b) — İRAN HAYALETİ + üç şehir kusuru

🔴 **Koordinatörün notu bir noktada BAYAT:** not *"50 dönemde hâlâ var"* diyor.
```
BUGÜN ÖLÇTÜM:  d:"iran" dönemi 7 · kayıt 7
sebep:         commit edb4134  (2026-08-25 02:42)
               "HAYALET DONEM 129 -> 8 · ENKLAV BEYANI 22 -> 58"
⇒ T-0101 borcu  124 → 50 → 7   ·  %94 ödenmiş
```
Not 20 Ağustos ölçümüne dayanıyor, arada ödeme yapılmış.
⚠️ **Kalan 7 dönemin hangi kayıtlarda olduğunu ÖLÇMEDİM.**

Ve üç ayrı açık kusur (üçü de bugün doğrulandı, ayrıntı `HUKUM-TASNIF-C.json`):
```
KUTAİSİ   imereti künyesi VAR + rengi VAR, veride 0 dönem; Osmanlı dönemi HİÇ yok
KARS      253 yıllık tek blok `gurcistan`; TDV o dönemi ALTIYA bölüyor
          (İlhanlı → 1358 Celâyirli → 1380 Karakoyunlu → 1386 Timur →
           Karakoyunlu → 1467 Akkoyunlu) · fetih 1534-06-01 ↔ TDV 1537 = 3 yıl erken
DERBEND   safevi 1501 ↔ TDV 1509 (8 yıl erken) · OSMANLI 1583 ↔ TDV 1578 (5 yıl geç)
          · rusya 1722-08 ↔ TDV 1722 Ağustos ✓
```
📌 KARS, `KONTROL.md 13-04`teki **Bağdat tek-blok deseninin ikinci vakası.**
📌 Slug notu: **`derbend` ölü ama `derbend--dagistan` CANLI** — `§4`ün `--`
deseni; `CLAUDE.md` `derbend`i ölü diye kaydetmiş, **canlı varyantını bilmiyor.**

---

## 6. 🟢 BİR BELGE BAYATLADI — `CLAUDE.md §3.5.1`

Orada aynen şu yazıyor:
> *"Dalmaçya anakarası (0 nokta, Karlofça'nın yedi kalesi yok)"*

**Bugün ölçtüm** — kutu `42,5-45,5 K / 15,0-18,0 D`, **24 nokta**, ve
1593-07-01 sahipleri tutarlı:
```
OSMANLI 12  Bihaç · Banaluka · Yayça · Travnik · Nadin · Knin · Vrana ·
            Livno · Sin · Klis · Koniçe · Mostar
venedik 10  Pag · Zadar · Uzunada · Şibenik · Split · Brakya · Hvar · Vis ·
            Korçula · Mliyet
avusturya 2 Karlovac · Sisak
```
⇒ O iki cümle **damgalanmalı** — `§11`in kendi kuralı: *ders SİLİNMEZ, vakanın
durumu DAMGALANIR.* Kök `*.md` benim dosyam değil, koordinatörün işi.
📌 Ve zararı somut: bugün bir oturum o paragrafı okuyup Dalmaçya'ya nokta
yazmaya kalksa **12 mükerrer nokta** üretirdi — Yukarı Macaristan vakasının
birebir tekrarı.

---

## 7. ÖLÇMEDİKLERİM — açıkça yazıyorum

```
· 0021/H-0005 ve H-0017'nin GÖRSELLERİNİ okumadım; iki boşluğun koordinatı bilinmiyor
· 0021/H-0029 adacıklarının YAYINDA görsel olarak doğru çizildiğini görmedim
  (yalnız veriyi ve donemler.js'te varlıklarını ölçtüm)
· 0024/H-0001'de kalan 7 `iran` döneminin HANGİ kayıtlarda olduğunu ölçmedim
· 0023/H-0005 · 0022/H-0001 · 0025/H-0001 · 0025/H-0004 için KAYNAK TURU YAPMADIM
· 0024/H-0010'da iki damganın arayüzden okunabilir olup olmadığını ölçmedim
· 0020/H-0013'te Ahıska'nın 1578-08-01 tarihini kaynakla SINAMADIM
```

---

## 8. KOORDİNATÖRE ÜÇ SORU

```
① parti-kasa-0010 ve parti-kasa-0012 kime gidecek? Tabloda yoklar.
② 0025/H-0005 KARAR bekliyor: Kraliyet Macaristanı (a) macaristan
   (b) avusturya (c) yeni `kraliyet-macaristani` künyesi.  ÖNERİM (c).
   Karar verilmeden veriye dokunulmamalı — 60 dönem etkileniyor.
③ 0024/H-0001① (Kutaisi → imereti) ile 0025/H-0001 AYNI KAYDA dokunuyor.
   Tek işe bağlanmazsa iki oturum aynı satırı ters yönlerde değiştirir.
```

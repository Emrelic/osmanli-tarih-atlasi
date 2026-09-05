# 34 ŞÜPHELİ KRONOLOJİ MADDESİ — TASNİF ve HÜKÜM

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2969 · 5 Eylül 2026
> Araç: `py arac/_kronoloji_uygula.py` **kuru koşu** — hiçbir şey yazılmadı.
> 🔴 **VERİ YAZILMADI.** Yama JSON'ları `node`/`json` ile okundu, regex yok.
```
218 madde · KABUL 202 · RED 16 · 🔴 ŞÜPHELİ 34
```

## ⇒ TASNİF
```
🟢 GERÇEK MÜKERRER   17   biri DÜŞER
🟡 İKİ AYRI OLAY     12   ikisi de KALIR
⚪ AYIRT EDİLEMEDİ    5   hüküm koordinatörde
```

---

## 🟢 KOVA 1 — GERÇEK MÜKERRER (17)

### 1a · Aynı gün, aynı olay, iki etiket — **YENİ DÜŞER** (9)
Mevcut madde yapısal olarak gerekli (`son`/`toprak-kayip` gövde sınırı
taşır); yeni maddenin **metni mevcut maddeye taşınabilir.**
| künye | gün | mevcut | yeni | olay |
|---|---|---|---|---|
| `solima-yalunka` | 1884-01-01 | `son` | `savas` | Samori'nin Falaba kuşatması |
| `nepal` | 1768-09-25 | `birlesme` | `kurulus` | Katmandu'nun alınışı |
| `ayutthaya` | 1569-01-01 | `toprak-kayip` | `vassal` | Birmanya'ya tâbi oluş |
| `lan-xang` | 1560-01-01 | `kurulus` | `hukumdar` | başkentin Vientiane'ye taşınması |
| `bali-kralliklari` | 1686-01-01 | `bolunme` | `hukumdar` | Gelgel'in dağılması |
| `sunda-pajajaran` | 1482-01-01 | `kurulus` | `hukumdar` | Sri Baduga'nın cülûsu |
| `navaho` | 1864-01-01 | `toprak-kayip` | `isgal` | Uzun Yürüyüş |
| `meskalero-apaci` | 1863-01-01 | `toprak-kayip` | `isgal` | Bosque Redondo sürgünü |
| `pagaruyung` | 1803-01-01 | `isyan` | `savas` | Padri hareketi/savaşı |

🔴 **VE İKİSİNDE MEVCUT MADDENİN `tur`U ŞÜPHELİ** — düzeltme değil, kayıt:
`lan-xang` bir **başkent taşıma**yı `kurulus` diye etiketlemiş;
`sunda-pajajaran` bir **cülûs**u `kurulus` diye. Yeni maddeler bunları
daha doğru etiketliyor ama **düşürülüyorlar.**
⇒ Öneri: mevcut maddeler kalsın, ama `tur` alanları ayrı bir kalemde
gözden geçirilsin.

### 1b · Aynı olay, farklı gün — **MEVCUT KAZANIR** (5)
`§4`: kaba `YYYY-01-01` bir **yazım**dır; gerçek gün varsa o kazanır.
```
`tran-hanedani`  yeni 1288-01-01  ↔  mevcut **1288-04-09**  Bạch Đằng
`lan-na`         yeni 1296-01-01  ↔  mevcut **1296-04-12**  Chiang Mai
`travankur`      yeni 1741-01-01  ↔  mevcut **1741-08-10**  Colachel
`mandan`         yeni 1837-01-01  ↔  mevcut **1837-06-01**  çiçek salgını
`kalikut`        yeni 1498-05-01  ↔  mevcut **1498-05-20**  da Gama
```
🔴 `kalikut` özel: yeni `1498-05-01` bir gün değil, **ay'ın 1'ine
kodlanmış bir AY** (`§4`ün 42-künye ekseni). Mevcut `1498-05-20` da
Gama'nın Kalikut'a ulaştığı bilinen gündür. ⇒ mevcut kalır.

### 1c · Aynı olay, farklı gün — **YENİ KAZANIR** (3)
```
`malva-sultanligi` yeni **1436-05-16** ↔ mevcut 1436-01-01  Mahmûd Halacî cülûsu
`campa`            yeni **1471-03-22** ↔ mevcut 1471-03-01  Vijaya'nın düşüşü
`ingiliz-malaya`   yeni **1819-02-06** ↔ mevcut 1819-01-01  Raffles-Singapur antlaşması
```
⚠️ Üçünde de yeninin `kaynak:` alanı günü destekliyor; kayda bakıldı,
kurala değil (M-2969 ③).

---

## 🟡 KOVA 2 — İKİ AYRI OLAY, İKİSİ DE KALIR (12)

| künye | gün(ler) | niçin AYRI |
|---|---|---|
| `teksas-cumhuriyeti` | 1836-03-02 · **1836-04-21** · **1836-10-01** | bağımsızlık ilânı · San Jacinto savaşı · Houston'ın seçilmesi — **üç ayrı olay**, yalnız yılları ortak |
| `choctaw` | **1830-09-15** · 1830-09-27 | müzakerenin başlaması (6000 kişilik toplantı) ↔ antlaşmanın imzalanması |
| `creek-konfederasyonu` | **1814-08-09** · 1814-03-27 | Fort Jackson Antlaşması ↔ Horseshoe Bend savaşı |
| `kocin` | **1503-09-27** · 1503-01-01 | Portekiz takviyesinin Kalikut'u püskürtmesi ↔ himaye anlaşması |
| `kaffa-kralligi` | **1897-01-01** · 1897-09-10 | seferin başlaması (31.000 kişilik ordu) ↔ kralın esir alınması |
| `sarawak-brooke` | **1841-08-18** · 1841-09-24 | Brooke'un isyanı bastırması ↔ Sultan'ın devri |
| `liptako` | 1810-01-01 ×2 | emirliğin **kuruluşu** ↔ Gwandu'ya **tâbiiyeti** |
| `valo` | 1855-02-25 ×2 | Dioubouldou muharebesi ↔ Fransız ilhakı |
| `pueblo-bagimsizligi` | 1680-08-10 `kurulus` | ayaklanma ↔ on iki yıllık bağımsızlık **döneminin başlaması** |

⚠️ `liptako` ve `valo`da iki olay **aynı gün**; `§8`e aykırı değil, ama
ikisi de kaba tarih (`1810-01-01`) taşıyor ⇒ gerçekten aynı gün mü,
yoksa aynı **yıl** mı — **ölçülemedi.**

---

## ⚪ KOVA 3 — AYIRT EDİLEMEDİ (5) · hüküm koordinatörde

```
`aro-konfederasyonu` 1901-12-28 ↔ 1901-11-28
   İKİSİ DE YAMADA (mevcut kayıt YOK). Arochukvu'nun düşüşü mü, seferin
   başlaması mı — iki maddenin metni karşılaştırılmalı. ÖLÇMEDİM.
`pueblo-bagimsizligi` 1692-09-12 ↔ 1692-08-01
   de Vargas'ın yeniden fethi; iki tarih de literatürde geçiyor.
   Karşı maddenin metnini GÖREMEDİM.
`pueblo-bagimsizligi` 1680-08-10 — 🔴 YAMA KENDİ İÇİNDE MÜKERRER
   ÜÇ yeni madde aynı gün: [isyan "Pueblo Ayaklanması başladı"] ·
   [isyan "Popé önderliğinde…"] · [kurulus "on iki yıllık dönem"]
   ⇒ İKİ `isyan` maddesi **aynı olayı iki kez** anlatıyor. Biri
     düşmeli — hangisi, metin sahibine sorulmalı.
`choctaw` 1830-09-27 — 🔴 YAMA KENDİ İÇİNDE MÜKERRER
   [antlasma "Dancing Rabbit Creek Antlaşması imzalandı"] ve
   [son "Dancing Rabbit Creek Antlaşması imzalandı: …"] — AYNI olay,
   iki etiket, ikisi de YENİ. Biri düşmeli.
`ingiliz-kuzey-amerika` 1763-02-10
   [kurulus "Paris Antlaşması ile Fransa Yeni Fransa'yı devretti"] ↔
   [toprak-kazanc "Paris Antlaşması ile Kanada'nın tamamı…"]
   AYNI olay ⇒ mükerrer GİBİ, ama `kurulus` etiketi bu künye için
   **gövdenin doğuşunu** işaretliyor olabilir ⇒ yapısal, düşürülemez.
   ⚪ `kurulus`un yapısal olup olmadığını ÖLÇMEDİM.
```

---

## 🔴 ② HÜKÜM İLE YAMA AYRIŞMASI — ÖLÇÜLDÜ, **BİRİ GERÇEK**

| künye | kuyruktaki HÜKÜM | yamada NE VAR | durum |
|---|---|---|---|
| `malva-sultanligi` | 1436-05-16 | **1436-05-16** | 🟢 UYUŞUYOR |
| `campa` | 1471-03-22 | **1471-03-22** | 🟢 UYUŞUYOR |
| `ingiliz-malaya` | 1819-02-06 | **1819-02-06** | 🟢 UYUŞUYOR |
| `hollanda-dogu-hint` | **"1619-05, YALNIZ AY — gün iddiası GERİ ÇEKİLDİ"** | **1619-05-30** | 🔴 **AYRIŞMIŞ** |

🔴 ⇒ Dördün **üçü uyuşuyor**, biri ayrışmış — ve ayrışmanın kaynağı
belgenin **kendi içinde**: aynı belgenin tablosu *"1619-05-30 …
benimki daha hassas"* diyor, özet satırı ise *"gün iddiası GERİ
ÇEKİLDİ"*. **İki cümle aynı belgede ve birbirini tutmuyor.**
⇒ Yama, geri çekilmemiş olan hâli taşıyor.
🟢 **ÖNERİ:** geri çekme geçerliyse yeni madde **DÜŞSÜN** — mevcut
`1619-01-01 kurulus` zaten var ve `§4`ün *"yıl biliniyor, gün
bilinmiyor"* yazımı; ay bilgisi maddenin **metnine** yazılır.
📌 Ve bu, `§11`in *"bir bilgi iki yerde durursa biri güncellenince
öteki bayatlar"* dersinin **aynı belge içi** hâli.

---

## ③ NE ÖLÇMEDİM
```
🔴 Kova 3'ün beşi — karşı maddelerin metnini göremedim ya da yapısal
   soru cevapsız
🔴 `liptako` ve `valo`da iki olayın gerçekten AYNI GÜN mü yoksa aynı
   YIL mı olduğunu (ikisi de kaba tarih)
🔴 Kova 1a'da düşürülen 9 maddenin METNİNİN mevcut maddeye taşınıp
   taşınmayacağını — bu bir içerik kararı, hüküm değil
🔴 Mevcut maddelerin `tur` alanlarını (iki şüpheli tespit edildi:
   `lan-xang` ve `sunda-pajajaran`) — AYRI KALEM
⚪ 16 RED maddesinin gerekçesini — sevkin kapsamı dışındaydı
```

---
---

# EK — 16 RED MADDESİ (M-2973)

## ⇒ MANŞET
```
Aracın verdiği gerekçe TEK: "MÜKERRER (aynı t + tur)"  ×16
🔴 AMA ALTINDA İKİ APAYRI SINIF VAR, ve ÇARELERİ FARKLI:
   🔴 ŞEMA/ARAÇ kusuru   9   mevcut kayıt YOK — İKİ YAMA ÇARPIŞMIŞ
   🟢 DOĞRU RED          7   madde gerçekten zaten var
```

## 🔴 SINIF A — **İKİ YAMA ÇARPIŞTI, MEVCUT KAYIT YOK** (9)
Bu dokuzda `devletler.js`te **hiçbir kayıt yok**; çarpışan iki taraf da
**yeni**. Araç ilk okuduğunu tutuyor, ikinciyi *"mükerrer"* diye
reddediyor.
```
farukiler 1370-01-01 · farukiler 1601-01-01 · teksas 1836-03-02 ·
teksas 1845-12-29 · cherokee 1791-07-02 · pueblo 1680-08-10 (ÜÇ madde) ·
natchez 1731-01-01 · cahokia 1050-01-01 · cahokia 1350-01-01
```
🔴 **HANGİSİNİN HAYATTA KALDIĞINI DOSYA OKUMA SIRASI BELİRLİYOR** —
içerik değil. Ve metinler **eşit değil**:
```
farukiler 1601  "Bâbürlüler Asîrgarh'ı alarak sultanlığa son verdi,
                 Handeş Bâbürlü eyaleti oldu"
            ↔   "Bâbürlü ordusu Handeş'i istilâ edip Asîrgarh'ı
                 KUŞATTI; muhasara sonunda…"        ← daha ayrıntılı
natchez 1731    "Fransızlar Natchez'i siyasî bir varlık olarak…"
            ↔   "Fransız ve müttefik seferleri 1731'e KADAR sürdü;
                 halkının çoğu…"                    ← farklı çerçeve
cahokia 1350    "Cahokia terk edildi" ↔ "Cahokia TAMAMEN terk edildi"
                                                     ← neredeyse aynı
```
⇒ **Bu bir ŞEMA/ARAÇ kusurudur:** araç *"mükerrer"* diyor ama gerçekte
**iki aday arasında sessizce seçim yapıyor**, ve ölçütü sıra.
🟢 **ÇARE:** çarpışan çiftler **karara bağlanmalı** (hangisi daha
ayrıntılı/kaynaklı), sonra kaybeden **kendi dosyasından düşürülmeli** —
`§11`: *"bir hüküm, veriye inmedikçe hüküm değil bir metindir."*
📌 Ve koordinatörün öngörüsü tuttu: künye tarafında dört red **şema**
çıkmıştı; kronolojide **dokuz** çıktı.

## 🟢 SINIF B — **DOĞRU RED, madde zaten var** (7)
```
ahom 1671-01-01 · travankur 1729-01-01 · mataram-sultanligi 1613-01-01 ·
malay-sultanliklari 1874-01-20 · lan-xang 1353-01-01 ·
dogu-sumatra-sultanliklari 1723-01-01 · savni 1794-08-20
```
Yedisinde de mevcut madde **aynı olayı** anlatıyor ⇒ red **doğru.**

### ⚠️ AMA İKİSİNDE RED BİR BİLGİ KAYBEDİYOR — kayıt, itiraz değil
```
🔴 `mataram-sultanligi` 1613-01-01  — ve bu ikisi AYNI İDDİA DEĞİL:
   mevcut  "Sultan Agung **DÖNEMİNDE** Cava'nın büyük bölümüne hâkim oldu"
   yeni    "Sultan Agung **TAHTA ÇIKTI** (1613-1646), Mataram bu dönemde…"
   ⇒ Mevcut, bir DÖNEM BOYU başarıyı cülûs yılına yazmış; yeni, cülûsun
     kendisini anlatıyor. `tur:hukumdar` ikisinde de aynı ama **fiil
     farklı.** Red, daha kesin olanı düşürüyor.
🟡 `travankur` 1729-01-01
   yeni "Marthanda Varma, **VENAD (Travankur'un öncülü)** tahtına çıkıp"
   ⇒ Mevcutta olmayan bir ayrıntı: taht Travankur'un değil ÖNCÜLÜNÜN.
```
⇒ İkisinde de **red doğru** (mükerrer), ama metin mevcuda **taşınabilir.**
Bu bir içerik kararı; hüküm değil.

## 🔴 VE BİR SAHİPLİK SORUSU — `§7`
M-2973 ③ *"`pueblo-bagimsizligi` mükerrerini SEN düzelt"* dedi. Ölçtüm:
```
pueblo-bagimsizligi → `KRONOLOJI-BOSKUNYE-0905.json`
                    ve `KRONOLOJI-KAMERIKA-0905.json`
BENİM yazdıklarım   → KRONOLOJI-SISAM · KRONOLOJI-YUNANANAKARA ·
                      KRONOLOJI-ARNAVUTLUK
```
🔴 **İkisi de benim dosyam DEĞİL.** `§7`: *"Kendi oturumunun dosyaları
dışına yazma. Emin değilsen sor."*
⇒ **DÜZELTMEDİM.** Hüküm hazır (üç maddenin ikisi `isyan` ve aynı olayı
anlatıyor; daha ayrıntılı olan — *"Popé önderliğinde…"* — kalmalı), ama
uygulaması dosya sahibine ya da merge'i yapana ait.
⚠️ Aynı şey `choctaw` ve `hollanda-dogu-hint` için de geçerli.

## NE ÖLÇMEDİM
```
🔴 SINIF A'daki 9 çiftin hangisinin daha kaynaklı olduğunu — metinleri
   gördüm, `kaynak:` alanlarını KARŞILAŞTIRMADIM
🔴 Aracın `t`+`tur` ölçütü dışında başka red dalı olup olmadığını —
   çıktıda yalnız bu gerekçe göründü, KODU OKUMADIM
⚪ 202 KABUL maddesini — sevkin kapsamı dışı
```

---
---

# EK 2 — DOKUZ ÇARPIŞMANIN HÜKMÜ (M-2980)

## ③ 🟢 ÖNCE ARACIN KODU — **16 TAM SAYIDIR, alt sınır DEĞİL**
`arac/_kronoloji_uygula.py` okundu. **ÜÇ red dalı var:**
```
:249  "şema eksik (t/tur/b)"           → bu koşuda **0** kez ateşledi
:252  "KÜNYE YOK (id tam eşleşmiyor)"  → bu koşuda **0** kez ateşledi
:256  "MÜKERRER (aynı t + tur)"        → **16** kez
```
🟢 ⇒ **Kronolojide şema kusuru YOK.** Künye tarafındaki dört `bolge:`
eksiği burada karşılığı olmayan bir vaka; 16 tam sayıdır.

🔴 **Ve `:259` Sınıf A'yı TASARIM olarak doğruluyor:**
```python
var.append([m["t"], m["tur"]])   # "aynı parti içinde de mükerrer olmasın"
```
⇒ Kabul edilen her madde görülmüşler kümesine ekleniyor; ikinci aday
bu yüzden çarpışıyor. **Davranış kasıtlı ve yorumda yazılı** — ama
tasarım adayları **sıralamıyor.** Kusur davranışta değil, **eksik olan
bir ölçütte.**

---

## ① DOKUZ ÇİFT — ölçüt **DAYANAK**, içerik zenginliği değil

| # | çift | KAZANAN | gerekçe (tek satır) |
|---|---|---|---|
| 1 | `farukiler` 1370-01-01 | ⚪ **hüküm koordinatörde** | ikisi de TDV `farukiler`, bu turda okundu — **dayanak EŞİT** |
| 2 | `farukiler` 1601-01-01 | 🟢 **GASYA** | BOSKUNYE'nin günü bir **aralık ucundan** (`1370-1601`) türetilmiş; GASYA olayın kendisini anlatıyor |
| 3 | `teksas` 1836-03-02 | 🟢 **KAMERIKA** | BOSKUNYE künyeden **devralmış ve doğrulamamış**; KAMERIKA (Texas State Library) doğrulamış |
| 4 | `teksas` 1845-12-29 | 🟢 **KAMERIKA** | aynı desen; BOSKUNYE'nin kendi damgası *"TARAFIMDAN DOĞRULANMADI"* |
| 5 | `cherokee` 1791-07-02 | 🟢 **KAMERIKA** | 🔴 **BİRİNCİL BELGE**: Avalon Project (Yale Law School), *Treaty With the Cherokee 1791* — gün antlaşmanın **kendi metninden**. BOSKUNYE künyeden devralmış ve künye bağımsız dayanak göstermiyor |
| 6 | `pueblo` 1680-08-10 | 🟢 **KAMERIKA** | çarpışan iki `isyan`dan KAMERIKA doğrulanmış, BOSKUNYE devralınmış. ⚠️ BOSKUNYE'nin `kurulus` maddesi **çarpışmıyor**, KALIR |
| 7 | `natchez` 1731-01-01 | 🔴 **BOSKUNYE** | **HAKEMLİ VE ADLI ÇALIŞMA**: Brown & Steponaitis, UNC Research Laboratories of Archaeology + Mississippi Dept. KAMERIKA'nınki adsız *"çevrimiçi ikincil kaynaklar"* |
| 8 | `cahokia` 1050-01-01 | ⚪ **hüküm koordinatörde** | BOSKUNYE kaynağı **ADIYLA** veriyor (EBSCO Research Starters, başlıkla) ama *"DEVRALDIM"*; KAMERIKA doğrulamış ama kaynağı **adsız**. `§4`'ün iki değeri çatışıyor |
| 9 | `cahokia` 1350-01-01 | 🟢 **KAMERIKA** | BOSKUNYE kendi damgasında *"DEVRALDIM · 🔴 GÜN YOK"* diyor; KAMERIKA bağımsız doğrulamış. ⚠️ metinler neredeyse aynı — kazanç küçük |

```
🟢 KARARA BAĞLANDI  7   (KAMERIKA 6 · BOSKUNYE 1)
⚪ KOORDİNATÖRDE    2   `farukiler 1370` · `cahokia 1050`
```

## 🔴 VE BİR DESEN — ama **tek yönlü DEĞİL**
Altı vakada `KRONOLOJI-KAMERIKA` kazandı ve sebebi hep aynı:
**BOSKUNYE künyenin kendi alanından DEVRALMIŞ ve doğrulamamış**, ve
bunu kendi `kaynak:` alanında **açıkça damgalamış** (`🟡 DEVRALDIM`).
📌 O damga bu hükmü mümkün kıldı — damgalanmasaydı iki taraf **eşit
görünürdü.** `§11`: *"ölçmediğini `ölçmedim` diye yaz"* — burada o
kural bir **hükmün dayanağı** oldu.

🔴 **Ama desen tek yönlü değil:** `natchez`te BOSKUNYE **hakemli ve
adlı** bir çalışma gösteriyor, KAMERIKA adsız bir doğrulama.
⇒ **Dosyaya göre değil, VAKAYA göre hüküm.** Altı kez aynı yöne
çıkması bir kural değil bir gözlem; yedincisi tersine döndü.

## ⚠️ VE BU HÜKÜMLERİN SINIRI
```
🔴 Yalnız `kaynak:` ALANLARINI okudum — kaynakların KENDİLERİNİ
   açmadım. "Avalon Project" ve "Brown & Steponaitis" beyandır,
   ben doğrulamadım.
🔴 Kaybeden metinlerin KAZANANA taşınabilecek ayrıntısını ölçmedim
   (örn. `farukiler 1601`de kaybedende "muhasara" var)
🔴 Uygulaması BANA AİT DEĞİL — `§7`, ve M-2980 ④: kaybeden kayıtların
   düşürülmesi merge'de koordinatöre ait. **Hiçbir dosyaya dokunmadım.**
```

---
---

# EK 3 — `farukiler 1370` ÇÖZÜLDÜ · ve KAYBEDEN METİNLERİN AYRINTISI

## ① `farukiler` 1370-01-01 — **merdivenin ②. basamağında ayrıldı**
```
① DAYANAK   ikisi de TDV `farukiler`, ikisi de bu turda okundu ⇒ EŞİT, geç
② İÇERİK    sınanabilir öğeler sayıldı:
   BOSKUNYE  Melik Ahmed (kişi) · **Handeş** (YER) · Fârûkî (hânedan)   = 3
   GASYA     Melik Ahmed (kişi) · Fârûkīler (hânedan) · **772/1370**    = 3
```
Sayı eşit ⇒ **cins sorulur:**
```
🟢 `Handeş`   kayıtta BAŞKA HİÇBİR YERDE olmayan bir bilgi — YER
🟡 `772/1370` `t:` alanında ZATEN olan bilgiyi başka bir takvimde
              tekrar ediyor
```
⇒ **HÜKÜM: BOSKUNYE** — `Handeş` kaydın taşımadığı bir öğe ekliyor;
Hicrî karşılık ise mevcut `t:`in başka bir yazımı.
⚠️ ③. basamağa (kıdem) **inilmedi** — ②'de ayrıldı.
🟢 Ve kaybedenin Hicrî tarihi **atılmıyor**: aşağıda 🟢 kovasında.

---

## ② KAYBEDEN METİNLERİN AYRINTISI — dokuz çift, üç kova

| çift | KAZANAN | kaybedende TAŞINABİLİR olan | kova |
|---|---|---|---|
| `farukiler` 1370 | BOSKUNYE | **«(772/1370)»** — Hicrî karşılık | 🟢 |
| `farukiler` 1601 | GASYA | **«Handeş Bâbürlü EYALETİ oldu»** — idarî sonuç | 🟢 |
| `teksas` 1836-03-02 | KAMERIKA | — (metinler neredeyse birebir) | 🟡 |
| `teksas` 1845-12-29 | KAMERIKA | **«cumhuriyet SONA ERDİ»** — `son` etiketinin yapısal karşılığı, kazananda YOK | 🟢 |
| `cherokee` 1791-07-02 | KAMERIKA | **«ABD HİMAYESİNİ TANIDI»** — antlaşmanın hükmü | 🟢 |
| `pueblo` 1680-08-10 | KAMERIKA | **«Yeni Meksika»** — adlandırılmış bölge (kazanan «bölgeden» diyor) | 🟢 |
| `natchez` 1731 | BOSKUNYE | **«müttefik seferleri 1731'e KADAR sürdü»** + halkın âkıbeti (öldürülme/esaret/dağılma) | 🟢 |
| `cahokia` 1050 | BOSKUNYE | **«20.000-100.000 nüfus»** — sayı, en sınanabilir öğe | 🟢 |
| `cahokia` 1350 | KAMERIKA | — («terk edildi» ↔ «tamamen terk edildi») | 🟡 |

```
🟢 TAŞINACAK  7      🟡 GEREKSİZ  2      🔴 ÇELİŞEN  0
```

## 🟢 ③ ÇELİŞEN KOVA **BOŞ** — ve bu bir teyit
Dokuz çiftin dokuzunda iki metin **aynı olayı** anlatıyor; hiçbirinde
kaybeden **başka bir şey** söylemiyor. En yakın iki aday sınandı ve
ikisi de çelişmedi:
```
`natchez` kazanan «Fransızlar Natchez'i siyasî bir varlık olarak dağıttı»
          kaybeden «seferler 1731'e KADAR sürdü»
          ⇒ biri SONUCU, öteki SÜRECİ anlatıyor — TAMAMLAYICI
`farukiler 1601` kazanan KUŞATMAYI, kaybeden İDARÎ SONUCU
          ⇒ aynı olayın iki safhası — TAMAMLAYICI
```
⇒ **«Mükerrer» hükümlerinin hiçbiri yeniden açılmıyor.**
📌 Ve bu kovanın boş çıkması bir *"yok"* değil bir **sınav sonucu**:
M-2985 ③ *"çelişen çıkarsa BİLDİR — bir mükerrer hükmünün yanlış
olabileceğinin tek işareti budur"* dedi; sınav koşuldu, işaret **yok.**

## ⚠️ VE İKİ ŞART — metin taşınırken
```
🔴 `cahokia 1050`ın `DEVRALDIM` damgası TAŞINIR (M-2985 ⑧).
   Düşürülürse hüküm bir doğrulama iddiasına döner ve o iddia SAHTE olur.
🔴 `natchez`in kazananı hakemli çalışmaya dayanıyor; kaybedenden
   taşınacak cümlenin dayanağı KAMERIKA'nın adsız doğrulamasıdır
   ⇒ taşınırken **kaynağı da taşınmalı**, yoksa hakemli bir kaydın
     içine adsız bir iddia girer.
```

## NE ÖLÇMEDİM
```
🔴 Taşınacak yedi cümlenin kazanan metne NASIL yerleşeceğini — bu bir
   yazım işi ve `§7`ye göre merge'de koordinatörün
🟢 `pueblo` — bu satır AÇIKTI, kapatıldı: kazananın tam metni okundu
   («Popé önderliğinde Pueblo halkları ayaklanıp İspanyol
   kolonizatörleri **bölgeden** kesin biçimde kovdu») ⇒ «Yeni Meksika»
   GERÇEKTEN geçmiyor, kaybedende var. 🟢 kovasındaki yeri **SAĞLAM.**
⚪ Kaynakların kendilerini — EK 2'deki aynı sınır sürüyor
```

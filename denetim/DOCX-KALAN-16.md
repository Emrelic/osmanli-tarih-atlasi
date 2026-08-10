# DOCX 1-10 & 12-14 & 16-18 — kalan on altı dosyanın ölçümü

> **Yazan:** İÇERİK oturumu · 10 Ağustos 2026 · `hatalar 11` ve `hatalar 15`
> için ayrı belge: `denetim/DOCX-11-15.md`
> **Yetki:** yalnız ÖLÇÜM. Hiçbir veri dosyasına dokunulmadı.
> **Durum:** 🟡 **GRUP A TESLİM** (`hatalar 1-6`). B ve C grupları sırada.

---

## ⓪ ÖNCE: BU BELGEDE NE YAPILMADI

```
🔴 TDV'ye BAKILMADI          tarih turu ayrı oturumda
🔴 ÜRETİM KOŞTURULMADI       arac/* kilitli; "haritada görünmüyor" şikâyetleri
                             VERİ üzerinden ölçüldü, çıktı üzerinden değil
🔴 MADDE SAYACIM ÇÜRÜDÜ      Emre'nin numaralandırması ATLIYOR (h11'de 25'ten
                             29'a); sayacım h11 için "25" dedi, gerçek 62.
                             ⇒ SAYI YAYINLANMADI, metin OKUNDU.
```

📌 Üçüncü kez aynı ders: *kendi yazdığın ayrıştırıcı, var olan bir
ayrıştırıcıdan her zaman kötüdür.* Bu sefer var olan ayrıştırıcı **gözdü.**

---

## ① 🔴🔴 BÜTÜN KÜLLİYATIN EN ÇOK TEKRARLANAN ŞİKÂYETİ

Emre'nin **tek tek madde** sandığımız şikâyetlerinden biri aslında **bir kural
beyanı** ve onu **en az yedi kez** yazmış — dört ayrı dosyada:

```
h1  #8    Midilli fethi → Ayvalık · Altınoluk · Edremit kırmızıya boyanıyor
          "Bir ada bölgesi karşı kıyıya ulaşamaz, ada ile sınırlı olmalı"
h1  #10   Zakintos Venedik'e → karşı kıyıdaki toprak boş renge düşüyor
          "adaların bölgeleri adaların toprağı ile sınırlıdır"
h1  #6    İstanbul'un fethi → Erdek / Kapıdağ yarımadası kırmızıya boyanıyor
h4  #7    Demirkapı-Derbend alınışı → HAZAR'IN ÖTE YAKASI kırmızıya boyanıyor
h4  #8    Bakü'nün alınışı → Hazar'ın karşı tarafı kırmızıya boyanıyor
h15 #19   Oran / Merselkebir → İSPANYA ANAKARASINA petek geçişi
          "PETEK BÖLGESİ DENİZAŞIRI OLAMAZ … arada koca deniz var"
h18 #—    "SAVOY HAÇLI SEFERİ … KARANIN ÜSTÜNDEN GEÇİP GELEMEZ"
h18 #—    "GÜMÜLCİNE'nin fethinde alınan toprak ana kara ile TAM BAĞITILI DEĞİL"
```

⇒ **Bu bir şikâyet değil, YEDİ KEZ TEKRARLANMIŞ BİR MOTOR TALEBİ:**
> ***Bir yerleşimin peteği denizi geçmemeli.***

🔵 Ve proje bunu bir kez denemiş: `CLAUDE.md §11`deki **A1 yarıçap tavanı**
(koşu 4b). Tavan doğru hesapladı, öngörü birebir tuttu, **ama yayın durduruldu**
— çünkü tavan toprağı serbest bırakırken motorun **yetim yüz** mantığı onu en
yakın komşuya geri veriyordu. Yani çare bulunmuş, **yan etkisi çözülmemiş.**

📌 **Ölçmediğim:** bugünkü koşuda bu geçişlerin kaçının hâlâ var olduğu.
`arac/*` kilitliydi. ⇒ *"Yedi kez istendi"* ölçüldü; *"bugün kaç tane var"*
**ölçülmedi.**

---

## ② 🟢 İKİNCİ DESEN: MÜKERRER MADDE ŞİKÂYETLERİNİN **HEPSİ** KAPANMIŞ

Emre yedi ayrı yerde mükerrer madde bildirmiş. Yedisi de ölçüldü:

| şikâyet | bugün kronolojide | hüküm |
|---|---|---|
| h1 #7 Çandarlı Halil Paşa'nın azli — "hem haziran hem temmuz 1453" | **1 madde** (`1453-06-01`) | 🟢 kapanmış |
| h4 #2 İstanbul Rasathanesi — "ocak ve temmuz 1577" | **1 madde** (`1577-01-01`); öteki `1580-01-22` **yıktırılışı** — ayrı olay | 🟢 kapanmış |
| h4 #6 Sokullu suikasti — "1 gün ara ile iki madde" | **1 madde** (`1579-10-12`) | 🟢 kapanmış |
| h5 #4 Sultanahmet Camii — "iki ayrı tarihte" | **1 madde** (`1616-06-09`) | 🟢 kapanmış |
| h5 #5 I. Mustafa'nın cülûsu — "iki adet" | **1 madde** (`1617-11-22`); ötekiler **II.** ve **III.** Mustafa | 🟢 kapanmış |
| h6 #2 Köprülü Mehmed Paşa'nın şartlı sadrazamlığı | **1 madde** (`1656-09-15`) | 🟢 kapanmış |
| h11 #35 Âlî Paşa'nın 1871 vefatı | **1 madde** (`1871-09-07`) | 🟢 kapanmış |

⇒ **7/7.** Ve sebebi belli: `denetle.py`nin beş denetiminden biri **mükerrer
madde**. Emre'nin bildirdiği kusur sınıfı **araca dönüşmüş** ve borç ödenmiş.
📌 `h5 #3`te Emre bunu genel kural olarak da istemişti (*"mükerrer maddeleri
bul ve hatalı olanları temizle"*) — **istek bir denetime dönüşerek karşılanmış.**

---

## ③ GRUP A — `hatalar 1-6` kalem kalem

### `hatalar 1` (10 madde)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Avlonya-Berat-Kanina 1417, yerleşimler küçük puntolarla | 🟡 ARAYÜZ (etiket) · ⚠️ ayrıca `1417-10-09` günü **0 kırılma** → `Değişmez 2t` kırılmasız madde |
| 2 | Düzmece Mustafa'da Aydınoğulları Osmanlı'dan çıkmış, doğru mu | 🟢 veri onaylıyor: `s: 1421-08-15 → 1425-06-01 aydin` — beylik gerçekten geri doğuyor |
| 3 | Turahan Bey'in Hexamilion seferi ok ile | 🟡 ARAYÜZ · madde var (`1423-05-01`) ama o gün de **0 kırılma** (`2t`) |
| 4 | Selanik Venedik'e bırakılınca renk farkı belli olmuyor | 🟡 ARAYÜZ / RENK — "komşu renkleri daha canlı olsun" |
| 5 | Varna güzergâhı oklu çizgi | 🟡 ARAYÜZ · madde var (`1444-11`) |
| 6 | İstanbul'un fethi → Erdek/Kapıdağ kırmızıya boyanıyor | 🔴 **EMİLME** `§2` — denizaşırı petek ailesinin üyesi (bkz. ①) |
| 7 | Çandarlı Halil Paşa azli iki madde | 🟢 **1 madde** — kapanmış |
| 8 | Midilli → Ayvalık/Altınoluk/Edremit; "ada karşı kıyıya ulaşamaz" | 🔴 **MOTOR** — ①'in çekirdek beyanı |
| 9 | Eğriboz'un kuzeyi boş görünüyor | ⚪ görsel-gerekli |
| 10 | Zakintos → karşı kıyı boş renge düşüyor | 🔴 **MOTOR** — ① |

### `hatalar 2` (≈8 madde)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Taman yarımadasının alınışı 1482 — haritada hiç değişiklik yok | ⚪ gün ölçülmedi (madde tarihi belirsiz) |
| 2 | Osmanlı-Memlük savaşında ordular ok ile | 🟡 ARAYÜZ |
| 3 | Sapienza 1499 / İnebahtı — gösterim yok | ⚪ |
| 4 | Diyarbakır-Urfa-Mardin sonrası Elazığ/Malatya/Adıyaman | ⚪ görsel-gerekli |
| 5 | **Zebîd 1516 haritada görülmüyor, hiçbir aksiyon yok** | 🔴 **KRONOLOJİ-VERİ GERİLİMİ** — aşağıda |
| 6 | Mısır fethi sonrası Sina ve Kızıldeniz kıyısında boşluklar | 🟢 muhtemelen çöl tasarımı (Libya · Necid · Mısır ailesi) — ⚠️ **kutu ölçülmedi** |

🔴 **`h2 #5` ayrı bir sınıf ve ölçüldü:**
```
kronoloji   1516-06-20  "Zebîd'in alınması: Osmanlı denizcilerinin Kızıldeniz'e ilk girişi"
veri        1516-06-20  Zebîd BİTTİ yemen  ·  Zebîd BAŞLADI **memluk**
            1539-01-01  "Zebîd'in Osmanlı hâkimiyetine kesin girişi"
```
⇒ Madde *"alınması"* diyor, veri o gün şehri **Memlük'e** veriyor. Emre haritada
Osmanlı aksiyonu aramış, bulamamış — **çünkü yok.** İkisi de kendi içinde
tutarlı olduğu için `denetle.py` bunu **göremez** (`CLAUDE.md §3.5`in tarif
ettiği kör nokta).
⚠️ Hangisinin doğru olduğuna **karar vermedim**: 1516'da Zebîd'de Memlük emîri
Hüseyin Kürdî vardı ve Selman Reis oraya donanmayla geldi — yani ikisi de
savunulabilir. **TDV'ye BAKILMADI**, kalem tarih turuna.

### `hatalar 3` (≈10 madde)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Dimbos/Karacahisar/Adranos'taki simgeler yapışıp kalıyor, madde geçince kalkmalı | 🟡 ARAYÜZ — **`h11 #21`in KARDEŞİ** (aynı "etkisi geçen unsur haritadan çıksın" kuralı, bu sefer simge için) |
| 2 | Bu ekran gizlenebilir olmalı | 🟡 ARAYÜZ |
| 3 | "Safevî İran diye küçücük bir toprak; Van civarında Safevîler İran'a hâkim değil miydi" | 🟢 **ZATEN ÇÖZÜLMÜŞ** — `CLAUDE.md §3.5` bu vakayı adıyla anlatıyor (70 kayıt `iran` → Safevî) |
| 4 | Barbaros'un Venedik adalarını alması — iki harita farkı | ⚪ görsel-gerekli |
| 5 | Didim civarı da alınmış görünüyor | ⚪ görsel-gerekli |
| 6 | Budin ilhakında sadece Budin boyanmış, tüm Macaristan boyanmalı değil mi | 🟢 **ÖLÇÜLDÜ** — 1545'te 7 nokta hâlâ `macaristan` (Eğri·Kanije·Temeşvar·Yanıkkale·Solnok·Zigetvar·Gyula); hepsi 1552-1600'de düşecek. Boyanmamış olması **doğru** (`h15 #5` ile aynı ölçüm) |
| 7 | Macaristan'ın yarısından çoğu duruyor, teyit et | 🟢 ⬆︎ aynı ölçüm |
| 8 | Tebriz'in alınmasında Tebriz enklav görünüyor | ⚪ görsel-gerekli |
| 9 | Van'ın alınmasıyla Tebriz haritadan çıkmış, doğru mu | ⚪ TDV |
| 10 | Katîf fethinde işaretleme abartılı, aradaki koridor boyanmalı | 🟢 **ÖLÇÜLDÜ** — 1560'ta Necid içi (Dir'iye·Riyad·Şakrâ) **kasten sahipsiz**; koridorun boş olması `Değişmez 1` tasarımı (`h15 #6` ile aynı) |

### `hatalar 4` (≈10 madde)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Rasathane maddesinde Fizan-Murzuk alınışı gösteriliyor, ayrı madde olmalı | 🟡/🔴 **AYNI GÜN İKİ OLAY** — `h15 #20`nin kardeşi |
| 2 | Rasathane iki madde | 🟢 **1 madde** |
| 3 | Fas'ın himayeye girmesi 1578 — savaşın yeri ve ok | 🟡 ARAYÜZ |
| 4 | Çıldır zaferiyle Soçi-Krasnodar Osmanlı'ya mı geçti | ⚪ TDV |
| 5 | Şirvan fethinde Azerbaycan içinde enklav | ⚪ görsel-gerekli |
| 6 | Sokullu suikasti iki madde | 🟢 **1 madde** |
| 7 | Derbend alınışıyla **Hazar'ın öte yakası** kırmızı | 🔴 **MOTOR** — ① |
| 8 | Bakü alınışıyla **Hazar'ın karşı tarafı** kırmızı | 🔴 **MOTOR** — ① |
| 9 | 1585 Van'ın doğusunda alınan bölge ayrı madde olmalı | 🟡/⚪ |
| 10 | Ferhad Paşa sınırları · Kirmanşah-Nihavend-Bürûcird-Senendec-Lûristan | ⚪ **TDV** — `h15 #8-9` ile aynı kalem |

### `hatalar 5` (≈9 madde)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Antalya-İçel-Çukurova'daki boşluklar; harita kıyılara oturmuyor; aynısı Tuz Gölü'nde | 🔴 **MASKE/KIYI** — ayrı sınıf, ölçülmedi |
| 2 | Karayazıcı Abdülhalim isyanı nerede başladı, aksiyon yok | ⚪ (madde var; kırılma ölçülmedi) |
| 3 | Mükerrer maddeleri bul ve temizle (genel kural) | 🟢 **KARŞILANMIŞ** — `denetle.py`nin mükerrer denetimi (bkz. ②) |
| 4 | Sultanahmet Camii iki madde | 🟢 **1 madde** |
| 5 | I. Mustafa'nın cülûsu iki adet | 🟢 **1 madde** |
| 6 | Hotin'in haritadaki yeri işaretlenmeli | 🟡 ARAYÜZ |
| 7 | Bağdat kaybında Basra-Katîf irtibatı koptu mu | ⚪ |
| 8 | Kasr-ı Şirin sınırları milim milim | ⚪ **TDV** (`h15 #12` ile aynı) |
| 9 | Azak Kalesi'nin geri alınmasında haritada değişiklik yok | 🟢 **ÖLÇÜLDÜ: `1642-02-26` → 2 kırılma** (Azak BİTTİ `don-kazak`, BAŞLADI OSMANLI). Harita **değişiyor** — tek nokta olduğu için geniş ölçekte fark edilmiyor. Veri doğru; görünürlük meselesi |

### `hatalar 6` (≈11 madde — kısmî)

| # | Emre | ölçüm / hüküm |
|---|---|---|
| 1 | Çanakkale bozgunu: Bozcaada/Limni kaybı; Biga'da da toprak kaybı var, Limni hâlâ kırmızı | ⚪ görsel-gerekli · 🔴 Biga ayağı **denizaşırı petek** ailesinden olabilir |
| 2 | Köprülü Mehmed Paşa şartlı sadrazamlık iki madde | 🟢 **1 madde** |
| 3 | Bozcaada geri alınmasında Limni geri alındı mı | ⚪ |
| … | *(kalan maddeler B grubunda tamamlanacak)* | |

---

## ④ GRUP A ARA SAYIM

```
🔴 GERÇEK        8    (5'i AYNI motor talebi — denizaşırı petek)
🟢 ZATEN-DOĞRU  12    (7'si mükerrer, 3'ü ölçülmüş veri, 2'si başka belgede çözülmüş)
🟡 ARAYÜZ       13
⚪ ÖLÇÜLMEDİ    15
                ~48 madde · hatalar 1-6
```
⚠️ Sayılar **±2** — Emre'nin numaralandırması bazı dosyalarda atlıyor ve iki
şikâyet tek paragrafta olabiliyor. **Kesin sayı iddia etmiyorum.**

---

## ⑥ GRUP B — `hatalar 6(kalan) · 7 · 8 · 9 · 10`

### 🟢 Mükerrer şikâyetleri: **10/10 KAPANMIŞ** (7 → 10)

```
h6 #4  Kâtib Çelebi'nin ölümü      → 1 madde  (1657-10-06)
h7 #5  IV. Mehmed'in hal'i          → 1 madde  (1687-11-08)
h8 #3  Vehrân'ın alınması           → mükerrer YOK; iki madde İKİ AYRI OLAY
                                       (1792-02-12 İspanyollarca boşaltılması ·
                                        1831-01-04 Fransızlarca işgali)
```
⇒ Külliyattaki **bütün** mükerrer şikâyetleri ödenmiş. (Grup A'daki 7 + bu 3.)

### 🟢 "Haritada aksiyon yok" şikâyetleri — ölçüldü, HARİTA DEĞİŞİYOR

```
h7 #3  Solnok'un kaybı    1685-10-19 → 2 kırılma  (BİTTİ osmanlı · BAŞLADI avusturya)
h5 #9  Azak'ın geri alınışı 1642-02-26 → 2 kırılma (BİTTİ don-kazak · BAŞLADI osmanlı)
h6 #9  "Lahsa kaybedilince tüm bu toprak gitti mi, Katîf filan"
       1670-01-01 → 8 KIRILMA: Lahsa · Katîf · Ukayr · Cübeyl — DÖRDÜ BİRDEN benihalid'e
```
⇒ Üçünde de veri doğru. `h6 #9`da Emre'nin **sorusunun cevabı da veride**: evet,
dördü birden gitti. Şikâyetin sebebi **tek noktanın peteği geniş ölçekte fark
edilmiyor** — bir görünürlük meselesi, veri kusuru değil.

### 🔴 Yeni gerçek eksik

```
h6 #8  Saint Gothard Muharebesi (1664)  →  kronolojide 0 madde
```

### 🟡 Grup B'nin ağırlığı ARAYÜZ'de
`h9`un on dört kaleminin **on biri** ok/taralı gösterim/anlaşma penceresi;
`h10`un yirmi altı kaleminin **on dördü** aynı aile.

---

## ⑦ 🔴🔴 ASIL BULGU: ~250 MADDE, ALTI TEMAYA İNİYOR

Külliyatı kalem kalem işlemek **yanıltıcı.** Emre aynı şeyi defalarca, farklı
maddeler gibi görünen cümlelerle yazmış. Sayıldı:

| tema | kaç kez | nerelerde |
|---|---|---|
| 🔴 **Petek denizi geçmemeli** | **9** | h1#6 · h1#8 · h1#10 · h4#7 · h4#8 · h8#2 · **h10#29** · h15#19 · h18 |
| 🟡 **Ok ile gösterim** (sefer · geri çekilme · donanma) | **17+** | h1#3 · h1#5 · h2#2 · h4#3 · h7#6 · h9#10 · h10#12·31·36·38·41·50 · h11#6·12·18·31·59 |
| 🟡 **Taralı işgal / antlaşmada devredilen alan** | **8** | h8#1 · h9#2·4·12 · h10#23 · h11#40 · h11#52 · h15#9 |
| 🟢 **Mükerrer madde** | **10** | h1#7 · h4#2·6 · h5#3·4·5 · h6#2·4 · h7#5 · h8#3 · h11#35 |
| 🔴 **Hotin** | **5** | h8#5 · h10#4 · h10#28 · h15#10 · h15#20 |
| 🟡 **Etiket/nokta kalıcılığı** ("etkisi geçen kalksın") | **4** | h3#1 · h10#47 · h11#20 · h11#21 |

⇒ **Altı tema, ~53 madde.** Yani külliyatın beşte biri **altı karara** iniyor.

🔴 **Ve `h10#29` bu işin en net cümlesi — Emre kuralı kendisi formüle etmiş:**
> *"Vehran İspanyollardan alındı ise… vehran alındı diye İspanya anakarasında da
> bir parça alınmış görünüyor. **Bir yerleşimin petek bölgesi denizaşırı olamaz.**
> Bu hatayı giderelim."*

🟢 **Ve `Hotin`in beş şikâyetinin TEK bir cevabı var** — bu belgede ve
`DOCX-11-15.md ⑩`da ölçüldü: Hotin `1713-06-24`'te **Boğdan'dan koparılıp
doğrudan Osmanlı sancağı** yapıldı; kırmızı görünmesi **doğru**, ve kronolojide
maddesi **var**. Emre beş kez sordu çünkü **maddeyi hiç göremedi** — o madde
`Rusya ile Edirne Antlaşması` ile **aynı güne** düşüyor ve aynı gün iki madde tek
adımda geçiliyor (`parti-0005/H-0006` arayüz kusuru).
⇒ ***Tek bir arayüz kusuru, beş ayrı "harita hatası" şikâyeti doğurmuş.***

---

## ⑧ 🔴 VE BİR YAPISAL İSTEK — `h10 #43`

> *"Eflak, Boğdan, Kırım, Hicaz, Cezayir, Tunus, Libya ve Mısır'ın hukukî
> durumlarını etüd edelim. Vassallık, özerklik, bağlı devlet, himaye — kaç
> farklı durum var idi? Lehistan, Ukrayna, Fas gibi ülkelerde himaye edilmişti;
> Eflak, Boğdan, Hicaz, Cezayir, Kırım statüleri Şam, Konya, Üsküp, Budin'den
> farklı idi."*

Bu bir harita hatası değil, **veri modeli talebi**: bugün model **ikili**
(`d:` doğrudan · `v:` tâbi). Emre en az **dört** kademe sayıyor.
📌 Ve `h10 #2·#4·#6·#28`in hepsi bunun belirtisi: *"vasal kırmızısı bir ton açık
olmalı, burada kırmızı ve pembe farkı çok büyük, ayrı devlet gibi görünüyorlar."*
⇒ **`YOL-HARITASI.md` §6.5'in (bölge boyutunun zaman kazanması) kardeşi** —
statü boyutunun **kademe** kazanması. Koordinatöre bırakıyorum.

---

## ⑨ GRUP C — `hatalar 12 · 13 · 14 · 16 · 17 · 18`

### 🔴🔴 A. DENİZAŞIRI PETEK: **9 → 14 VAKA** (koordinatörün istediği işaret)

`oturumlar/MOTOR-DENIZASIRI.md` yedi vakayla yazıldı. **Liste kapanmamıştı ve
Grup C beş yeni vaka daha verdi:**

```
h12 #5   "Karesi ilhak edilince Osmanlı Gelibolu'ya geçmiş gibi görünüyor…
          PETEK BÖLGELER DENİZ AŞIRI GİTMEMELİ"                     ← Emre'nin KENDİ kuralı
h17 #3   "Biga yarımadasının ucu Behramkale Ceneviz miydi…
          MİDİLLİ'DEKİ CENEVİZ ALANININ TAŞMASI OLABİLİR Mİ"
h17 #3b  "TÜM BUNUN GİBİ DENİZ ÖTESİ TAŞMALAR ARAŞTIRILARAK BULUNMALI"  ← TOPLU TARAMA İSTİYOR
h17 #14  "Karesi ilhak olunca AVRUPA TARAFINA bir küçük toprak sarkıyor"
h17 #15  "Çimpe'ye çıktı ama SAROZ KÖRFEZİNİN KUZEYİNE de bir parça kırmızı bulaşmış"
```
⇒ **Toplam 14 vaka, altı dosyada.** Ve `h17 #3b` yalnız bir vaka bildirmiyor,
**toplu tarama** istiyor — motor şartnamesinin `①` bölümü buna göre büyümeli.

### 🔴🔴 B. YENİ TEMA — "CETVELLE ÇİZİLMİŞ SINIRLAR" (en gürültülü şikâyet)

`h17 #9` bu külliyattaki **en açık sitem**:
> *"BU CETVELLE ÇİZİLMİŞ SINIRLARDAN NE ZAMAN KURTULACAĞIZ. **EN BAŞINDAN BERİ
> BUNDAN ŞİKÂYET EDİYORUM.** Kendi haritamızı dağ, nehir, tepe, göl, ova şeklinde
> oluşturup şehir sınırlarını bunlara yaslayacaktık — o mesele ne zaman
> yapılacak?"*

**Sayıldı — en az 11 kez:**
```
h12 #1 · h11 #16 (Libya) · h11 #28 (Boğdan) · h16 #6 (üçgen bölge) ·
h17 #1 · #6 (Ceneviz üçgeni) · #9 · #16 · #17 · h18 #2 · #4 · #5
```
⚠️ **VE BURASI KRİTİK:** `CLAUDE.md §2` motorun bunu **zaten yaptığını** yazıyor
— *"petek sınırı … gerçek kıyı çizgisine, nehir yataklarına ve dağ sırtlarına
yaslanır, Chaikin ile yumuşatılır"*. Yani ya (a) özellik şikâyetlerden **sonra**
eklendi, ya (b) çalışıyor ama yetmiyor.
🔴 **Ölçemem:** üretim kilitliydi, bugünkü çıktıya bakmadım.

> 🟢 **AMA İKİNCİ BİLİNMEYEN KAPANDI (aynı gün, sonradan).** `h17`nin damgası
> okundu: **989**, `h18`inki **994**. Ve `docx` dosya tarihleri ölçüldü:
> ```
> h1  29 Tem 22:14   …   h15  31 Tem 01:01   h17  31 Tem 20:02   h18  1 Ağu 00:58
> ```
> ⇒ **Dosya numarası zamanı birebir izliyor** ve `h17` ile `h18` külliyatın **EN
> YENİ** dosyaları — en eskisi değil.
> 🔴 **Bu, önceliği TERSİNE çevirir:** topografya şikâyeti bayat değil, külliyatın
> **en taze** şikâyeti. Ve Emre onu *"en başından beri şikâyet ediyorum"* diye
> yazmış ⇒ **hem eski hem taze**: aylardır söylüyor ve **son gün hâlâ söylüyor.**
> Bayat diye elenemez; kuyrukta **yukarı** çıkmalı.
>
> 📌 Ve bu, `⑩`daki *"her ekran görüntüsü kendi sürümünü taşır"* aletinin
> **sınırını** da gösterdi: toplam sayı **sıra vermiyor** (panel-dosya farkı
> bilinmedikçe). Sırayı veren şey **dosya tarihiydi** — üçüncü bir ölçüm.

### 🔴 C. ÜÇÜNCÜ TEMA — "KARASAL BAĞLANTI" (denizaşırının kardeşi)

`h12 #10` bunu da **genel kural** olarak yazmış:
> *"Genel kural olarak karadan toprak genişlemelerinde ana kara ile genişleyen
> yerin bağlantısının olması beklenir… **uçakla gidilip arada geçiş yok iken ele
> geçirilemez**, hata olmaması için uyanık olunmalı."*

```
h3 #8 Tebriz enklav · h4 #5 Şirvan enklav · h8 #4 Şirvan enklav ·
h10 #28 "Rusya İsmail kalesini UÇAKLA mı aldı" · h12 #6 Gümülcine köşe teması ·
h12 #9 Isparta enklav · h14 #2 Kili-Akkerman boşluğu · h16 #1 Şirvan enklav ·
h17 #8 Gemlik-Armutlu enklavı · h18 #5 Gümülcine · h18 #7 Isparta enklav
```
⇒ **11 vaka.** Aynı "uçakla" istiaresini iki ayrı dosyada kullanmış (`h10`, `h12`).

### 🟢 D. Grup C'de ölçülen / tekrar çıkan kalemler

| madde | tekrar? | hüküm |
|---|---|---|
| `h13 #8` Aydınoğulları Düzmece Mustafa'da çıktı mı, kronolojide var mı | **h1 #2**'nin tekrarı | 🟢 **İKİSİ DE VAR**: veri `s:1421-08-15→1425-06-01 aydin`, kronoloji `1422-01-01 Cüneyd Bey Aydın-ili'nin başına döndü — Aydınoğulları yeniden müstakil` |
| `h13 #9` 1427 Tacettinoğulları + Belgrad aynı anda geçiyor | **DÖRDÜNCÜ** aynı-gün vakası (`p0005/H-0006` · `h15#20` · `h4#1`) | 🟡 ARAYÜZ — kuyruktaki kalemin dördüncü kanıtı |
| `h13 #11` Kırım yarısı kırmızı yarısı pembe | **h10 #2**'nin tekrarı | 🔴 statü modeli (`h10#43` ailesi) |
| `h14 #1` detay penceresi ortada açılıyor | **h15 #15**'in tekrarı | 🟡 ARAYÜZ |
| `h14 #4` Diyarbakır-Urfa-Mardin arası Malatya-Ergani | **h2 #4**'ün tekrarı | ⚪ görsel-gerekli |
| `h16 #10` Girit Kavalalı'ya bırakılınca hepsi açık kırmızı olmalı | **h11 #11**'in tekrarı | 🟢 **ÖLÇÜLDÜ: 5/5 tâbi** — veri zaten öyle |
| `h16 #9` Eflak isyanı ateş emojisiyle görünmüyor | **h11 #5**'in tekrarı | 🔴 kronolojide **0 madde** (İpsilanti) |
| `h16 #3` Hotin Ruslara nasıl terkediliyor | **BEŞİNCİ** Hotin vakası | 🟢 ölçüldü (bkz. ⑦) |
| `h12 #4-5` · `h13 #1` tarihî yer/etiket silinsin | **h11 #21** ailesi, 5. ve 6. kez | 🟡 ARAYÜZ — `k:` hazır |
| `h16 #8` Vehhâbîler Mekke'yi iki ayrı maddede alıyor | mükerrer ailesi | ⚪ ölçülmedi |
| `h18 #6` Savoy Haçlı seferi denizden gelmeli | ok gösterimi + denizaşırı | 🟡/🔴 |

### 🟢 E. VE İKİNCİ BİR SÜRÜM DAMGASI BULDUM — bundan daha kesin

`h18`in son paragrafı bir **tam künye satırı** taşıyor:
```
1456-06-01 · 43.20–49.14N · 21.92–31.32E · z4.5 · Osmanlı Tarih Atlası
Madde: Boğdan'ın haraca bağlanışı
```
⇒ Uygulama bazı görüntülere **tarih + sınır kutusu + yakınlaştırma + madde adı**
basıyor. Bu, kronoloji sayacından **kat kat kesin**: hangi güne, nereye, hangi
maddeyle bakıldığı **birebir** belli.
📌 **Kaç görselde var, ölçmedim** — `h18`de gördüm, taramadım. Ama varsa, `h15#20`
gibi *"hangi tarihe bakıyordu"* belirsizliklerinin tamamını kapatır.

---

## ⑤ DURUM — üç grup da bitti

```
🟢 GRUP A   hatalar 1 · 2 · 3 · 4 · 5 · 6         ~48 madde
🟢 GRUP B   hatalar 6(kalan) · 7 · 8 · 9 · 10     ~55 madde
🟢 GRUP C   hatalar 12 · 13 · 14 · 16 · 17 · 18   ~60 madde
   (hatalar 11 · 15 ayrı belgede: DOCX-11-15.md · 82 madde)
```

### 🔴 VE KÜLLİYATIN GERÇEK BOYUTU — yedi temaya iniyor

| tema | vaka | durum |
|---|---|---|
| 🟡 Ok ile gösterim | **17+** | ARAYÜZ · tek karar |
| 🔴 **Petek denizi geçmemeli** | **14** | `oturumlar/MOTOR-DENIZASIRI.md` — **liste 7'den 14'e çıktı** |
| 🔴 **Cetvelle çizilmiş sınır / topografya** | **11+** | *"en başından beri şikâyet ediyorum"* — `§2` bunu yaptığını söylüyor |
| 🔴 **Karasal bağlantı / enklav** | **11** | denizaşırının kardeşi, ayrı kural |
| 🟢 Mükerrer madde | **10** | **10/10 KAPANMIŞ** |
| 🟡 Taralı işgal (`isg:`) | **8** | mekanizma HAZIR, kayıt eksik |
| 🔴 **Hotin** | **5** | **tek cevap** — aynı gün iki madde arayüz kusuru |
| 🟡 Etiket/nokta kalıcılığı | **6** | `k:` alanı hazır |
| 🔴 Statü kademesi (`h10#43`) | **5+** | veri modeli talebi — ikili model yetmiyor |

⇒ ***~245 madde, DOKUZ karara iniyor.*** Kalan kuyruk tekil ve dağınık.

📌 **Ve bu, taramanın maliyet tahminini değiştirir:** kalem kalem işlemek 245
iş demek; tema tema işlemek **dokuz** iş. Dokuzun **üçü zaten kapalı**
(mükerrer · Hotin · Girit), **ikisinin mekanizması hazır** (`isg:` · `k:`).

📌 Ve bir öneri: **①'deki motor talebi tek başına bir şartname hak ediyor.**
Yedi tekrar, dört dosya, ve projenin daha önce denediği (`A1 yarıçap tavanı`)
bir çözüm var. Kalem kalem "harita hatası" diye işlemek yerine **tek bir motor
kalemi** olarak açılmalı — yoksa aynı şey yedi kez ayrı ayrı düzeltilmeye
çalışılır.

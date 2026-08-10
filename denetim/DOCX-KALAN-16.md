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

## ⑤ SONRAKİ ADIM

```
GRUP B   hatalar 6 (kalan) · 7 · 8 · 9 · 10
GRUP C   hatalar 12 · 13 · 14 · 16 · 17 · 18
```

📌 Ve bir öneri: **①'deki motor talebi tek başına bir şartname hak ediyor.**
Yedi tekrar, dört dosya, ve projenin daha önce denediği (`A1 yarıçap tavanı`)
bir çözüm var. Kalem kalem "harita hatası" diye işlemek yerine **tek bir motor
kalemi** olarak açılmalı — yoksa aynı şey yedi kez ayrı ayrı düzeltilmeye
çalışılır.

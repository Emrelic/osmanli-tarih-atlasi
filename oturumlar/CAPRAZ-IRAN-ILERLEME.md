# ÇAPRAZ İRAN — ilerleme kaydı

> Oturum açılışı: 6 Ağustos 2026 · model Opus · rol ÇAPRAZ
> Görev tanımı: `oturumlar/CAPRAZ-IRAN-GOREV.md`
> Yazma yetkim: **yalnız bu dosya.** `data/` · `arac/` · `js/` · kök `*.md` bende değil.

---

# 📋 DEVİR — İran'da ne biliniyor, ne bilinmiyor

> **Bu bölüm tek başına okunmak için yazıldı.** Altındaki on bir teslim
> ölçümlerin kendisi; bu, ölçümlerin **haritası.**
> Kapanış: 6 Ağustos 2026 · 11 teslim · commit `d86bdb0` → `1b1127e`

## ① `iran` etiketi NE DEMEK — üç ayrı kullanım, üç ayrı ilaç

Brifing üç şık sunuyordu: *devlet / coğrafya / dolgu*. **Üçü de tek başına
yanlış.** Ölçüm `iran`ın **üç ayrı işte** kullanıldığını gösterdi:

| | ne | pencere | ilaç |
|---|---|---|---|
| **A** | **DOLGU** — halef yazılmamış | `1335-12-01 → 1381/86/87/93` · `1281 → …` | hanedan adlandırması (park) |
| **B** | **YANLIŞ ETİKET** — sahibi belli | `1507-05-24 → 1510-12-02` | ✅ düzeltildi (`buhara`) |
| **C** | **KASITLI ŞEMSİYE** — meşru | `1747-06-20 → 1796-01-01` (123 nokta) | 🔒 **dokunma** |

🔴 **C'ye dokunma.** `renkler.py:157-181`de gerekçesi yazılı: *"İran PARÇALI —
genel etiket burada MEŞRU; Horasan afsar, Şiraz zend, Tahran kacar aynı gün."*
`zend`in renksizliği de **ölçülmüş**, unutulmuş değil. Bu pencerenin TDV
araştırması `BEKLEYENLER.md`de **sahipsiz iş** olarak duruyor — ÇAPRAZ'ın
işi değil.

📌 Ve A'nın altında yatan şey **özensizlik değil, ifade edilmemiş bilgi.**
`iran`ın 1335 başlangıçlı dört penceresi **Timur'un sefer takvimidir**:
```
→1381-04-01  Horasan (Herat, Kert'in sonu)   →1387-11-01  Isfahan yağması
→1386-01-01  Azerbaycan                       →1393-01-01  Muzafferîler'in sonu
```
Veriyi kuran kişi sırayı gün gün biliyordu ve kodladı; **yalnız adlandırmadı.**

---

## ② KAPANANLAR

| iş | sonuç | commit |
|---|---|---|
| 🔴 **BENEK ŞİKÂYETİ** (p4/H-0009, üç kez gelmişti) | **enklav 9 → 0**, üç kesitte de | `5336407` |
| Şeybânî kümesi | 19 kayıt `iran` → `buhara`; maliyet **sıfır** | `69be9be` öncesi |
| İlhanlı bölmesi | 29 nokta; `1281→1335` ayrıldı | `69be9be` |
| Hazar kıyısı | ölçüldü, **park** (maliyet 2 künye + 2 renk) | teslim 6 |
| Hûzistan | **`bulunamadı`** — TDV pencereyi kapsamıyor | teslim 11 |
| `iran` 317 → 277 farkı | açıklandı: **veri düzeltildi**, dosya değil | teslim 5 |

**Beneğin sebebi neydi:** dokuz büyük şehir (Tebriz·Şiraz·Meşhed·Yezd·Kirman·
Erdebil·Nahçıvan·Urmiye·Tebbes) **Timurlu–Karakoyunlu–Akkoyunlu zincirinin
tamamından yoksundu**; 1335'ten doğrudan Safevî fethine atlıyorlardı. Küçük
komşuları düzgün işlenmişti. **En önemli şehirlerin verisi en az işlenmişti.**
Çare: komşunun zincirini kopyalamak. Yeni kimlik gerekmedi, **tek denetim
sayısı kıpırdamadı** — çünkü tarihler uydurulmadı, kopyalandı.

---

## ③ PARK EDİLENLER — her biri için yeniden açma ölçütü

| iş | niçin park | maliyet | 🔓 YENİDEN AÇMA ÖLÇÜTÜ |
|---|---|---|---|
| **Muzafferî + İncû + Kutluğhanlı**<br>(`iran 1335→1393`, 30 nokta) | şikâyet üretmiyor; kazanç görsel değil **kavramsal** | **3 künye + 3 renk**<br>`2s` Δ **0** (`1357` zaten kırılma günü) | RENK 2'nin İran kutusu **açılırsa**, ya da Emre *"bu dönemde kim yönetiyordu"* diye **tekrar sorarsa** |
| **Hazar kıyısı**<br>(Gîlân 2 + Mâzenderan 4) | aynı | **2 künye + 2 renk**<br>(`karkiya` · `marasi`) | RENK 2'nin *"Hazar kıyısı İran ailesinde olmak zorunda mı"* sorusuna **hüküm gelirse** |
| **Lur atabeglikleri** | yeni bulgu, sırası gelmedi | **2 künye + 2 renk** | `Luristan`ın 172 yıllık battaniyesi (`iran 1335→1508`) **şikâyet konusu olursa** |

⚠️ Üçü de **aynı sınıf**: tarihler zaten doğru, eksik olan yalnız **AD**.
Hiçbiri harita görünümünü değiştirmez — yalnız etiketi doğrulaştırır.

---

## ④ ÖLÇÜLMEMİŞ BOŞLUKLAR — "bakılmadı" ile "bakıldı, bulunamadı" ayrı

### 🔵 BAKILMADI (hiç dokunulmadı)
```
Cibâl kohortu       `iran 1335-12-01 → 1387-11-01` · 14 nokta
                    Celâyirli/Muzafferî çekişmesi olabilir
                    ⚠️ BEŞİNCİ KİMLİK ÇIKARABİLİR — maliyet 3 değil 4 olur
Sîstan'ın sahibi    Bem · Bempûr · Çâhbahâr · Hâş (4 nokta)
                    slug `sistan` ✓ CANLI, açılmadı
Kuzey Kafkas üçlüsü Derbend 42,06K · Tarki 42,98K · Ağraham burnu 43,97K
                    İlhanlı zarfının (Kuba 41,36K) KUZEYİNDE, Altın Orda cephesi
                    ⚠️ `derbend` ve `samahi` slugları ÖLÜ — ayrı araştırma
```

### 🟡 BAKILDI, BULUNAMADI (kapalı kalem — tekrar arama)
```
Hûzistan 1335-1393  8 nokta. `huzistan` ✓ ve `luristan` ✓ CANLI ama İKİSİ DE
                    pencereyi kapsamıyor. Çıpalar 1270'ler · 1396 · 1408 —
                    üçü de pencerenin DIŞINDA. TDV'ye BASMIYOR.
```

### 🟠 KAYDEDİLDİ, ÇÖZÜLMEDİ (çelişki — `§8`: karar koordinatörde)
```
B2   Hürmüz'de Portekiz başlangıcı   bizde 1515-04-01 · TDV 1514 (İKİ madde)
     temas olgusu ⇒ §3 "İKİSİ BİRDEN" ister. Jülyen şüphesi İŞLEMİYOR (1 yıl).
B3   Hürmüz'de Portekiz bitişi       bizde 1622-05-01 · TDV 23 Nisan 1622
     TDV gün veriyor, bizde ay hassasiyeti. Kolay düzeltme.
H-1  Hûzistan'da timurlu başlangıcı  bizde 1393 · TDV 1396          3 yıl
H-2  1408 Celâyirlî devri            verimizde YOK — §3.1 ⓪ olabilir
Şiraz/Kirman Safevî tarihi           1508 · 1510-12-02 ⟷ komşuları 1503
     🔴 Kirman'ın 1510-12-02'si MERV SAVAŞI'nın günü — Horasan tarihi.
     Battaniyenin bitişinden miras olabilir. ÖLÇÜLMEDİ.
```

### 🔴 YAPISAL — mimari kararı, ÇAPRAZ çözemez
```
`v:` yalnız OSMANLI tâbiliği ifade ediyor. 313 v: döneminin TAMAMI Osmanlı
sistemi içinde. Proje "Safevî tâbii" ya da "Portekiz tâbii" DİYEMİYOR.
İki bağımsız vakada çıktı:
   Hürmüz     1510-1622  Hürmüz Sultanlığı — önce Safevî sonra Portekiz tâbii
   Mâzenderan 1504-1596  Mar'aşîler — Safevî tâbii
§3.5 hayalet devletlerin AYNASI: orada olmayan devlet boyanıyordu,
burada OLAN devlet boyanamıyor.
```

---

## ⑤ ⚠️ SONRAKİ OTURUMA — brifingim üç yerinden yanlıştı

Görev tanımını koordinatör yazdı ve **kabul etti ki üç yerinden yanlıştı.**
Takip edilseydi hiçbiri bulunamazdı. Aynı tuzağa düşülmesin:

**① YANLIŞ TARİH — "1510'daki 33 nokta".** Brifing beni 1510'a yolladı.
Ama kendi cümlesi cevabı veriyordu: *"1600'de kendiliğinden bitiyor."*
🔑 **Bir şey kendiliğinden bitiyorsa orası SÖNDÜĞÜ yer, DOĞDUĞU yer değil.**
Beneğin kaynağı 1400-1500'dü. Ve `33` sayısı da yanlıştı — `kur:`/`bit:`
süzgeci uygulanmamış, doğrusu **30/136**.

**② YANLIŞ HİPOTEZLER.** Brifing dört hipotez verdi, kendisi *"bunlar
tahminlerim, dayanacağın şeyler değil"* diye uyardı — **ve uyarı haklıydı:**
```
"Özbek/Şeybânî olabilir"      ✅ DOĞRULANDI
"Mar'aşî olabilir"            ✅ DOĞRULANDI (ama tarihi 1596, brifing demedi)
"Hürmüz 1507'den Portekiz"    🔴 ÇÜRÜDÜ — TDV: 1507'de kuşattı, ALAMADI
                                  verimiz zaten doğruydu
"Kirman geç Safevî fethi"     🔴 asıl mesele o değildi
```

**③ YANLIŞ ŞIKLAR.** *"Devlet mi, coğrafya mı, dolgu mu"* — **üçü de tek
başına yanlış.** Cevap `§①`deki üçlü tablo.

### 🔑 VE İŞE YARAYAN YÖNTEM — kaynak değil, KOMŞU
Beneği çözen şey TDV araştırması **değildi**. Şuydu:
> **Bozuk noktayı en yakın komşusuyla TAM ZİNCİR olarak karşılaştır.**

Dokuz şehrin dokuzunda da aynı kusur çıktı, dış kaynağa gerek kalmadan.
Sebebi basit: **aynı bölgede komşu noktalar zıt işlem görmüşse, kusur
bilgide değil işlemdedir.** Kaynak araştırması pahalı ve yavaş; komşu
karşılaştırması bedava ve kesin. **Önce onu yap.**

⚠️ Ve devraldığın **hiçbir sayıya damgasız güvenme.** Bu oturumda üç belge
üç ayrı `iran` sayısı taşıyordu (`326` · `317` · `277`) ve **üçü de kendi
tarihinde doğruydu.** Bir sayı yanlış olmadan eskir.

---

## Açılış

Okunanlar: `CAPRAZ-IRAN-GOREV.md` · `CLAUDE.md` (baştan sona) ·
`oturumlar/CAPRAZ-GOREV.md` · `git log --oneline -8` (HEAD `47f8f97`).
Koordinatöre açılış haberi verildi.

---

## TESLİM 1 — B10 ölçümü: devraldığım üç sayıyı kendim saydım

**Ölçüm tabanı:** `arac/girdi.py` `GIRDI_DOSYALARI` — **16 dosya, 1713 nokta.**
Yükleyici olarak `girdi.yukle()`in kendisi kullanıldı (ayrı ayrıştırıcı yazmadım;
`CAPRAZ-GOREV.md §1`'in *"iki ayrıştırıcı aynı dosyada aynı sonucu verse bile biri
eksik dosya kümesi okuyorsa sayı yanlıştır"* dersi bunu gerektiriyor).

⚠️ `CLAUDE.md §5` hâlâ *"CANLI toplam 951 nokta, iki dosya"* diyor — **bayat.**
Canlı taban bugün 16 dosya / 1713 nokta ve `yerlesimler_asya.js` de içinde.
(Kök `*.md` bende değil; koordinatöre bildirildi.)

| brifingdeki | benim ölçümüm | hüküm |
|---|---|---|
| İran kutusu (lon 44-63 · lat 25-40) **149** nokta | **149** | ✓ tutuyor |
| 1510-06-15'te **33** `iran` noktası | **30** | 🔴 ölçüt farkı |
| `iran` **244** pencere, **1281→1779** | **277** pencere, **1281→1860** | 🔴 iki hata |

### 33 → 30 — `kur:`/`bit:` süzgeci

Brifing noktaların **var olup olmadığına** bakmamış. Süzgeci kaldırınca
brifingin bütün kesit sayılarını **birebir** yeniden ürettim:

```
süzgeçsiz  1510-06-15  safevi 101 · iran 33 · SAHIPSIZ 8 · cebri 4 · nebhani 2   ← brifing
süzgeçli   1510-06-15  safevi  94 · iran 30 · SAHIPSIZ 5 · cebri 4 · nebhani 2   ← doğrusu
```

⇒ Aritmetik doğru, **süzgeç yok.** 1510'da elenen üç `iran` noktası:

| nokta | sebep |
|---|---|
| Zerenc (Sîstan) | `bit:1383-01-01` — 1510'da **zaten ölü** |
| Tûs | `bit:1389-01-01` — 1510'da **zaten ölü** |
| Ferahâbâd | `kur:1611-01-01` — 1510'da **daha kurulmamış** |

📌 Üçü de 1510'da haritayı **hiç boyamıyor** (`kur:` peteği komşuya devrediyor —
`VERI-YAPISI` alan sözlüğü). Benek şikâyetinin sebebi olamazlar. **Gerçek iş 30.**

### 244 → 277 — kapsam adı yanlış yazılmış

`244` sayısı **kutu içi** ölçüm; brifing onu *"`iran` etiketi 244 pencerede
kullanılıyor"* diye **bütün taban** gibi sunuyor.

```
bütün canlı taban (16 dosya)   277 pencere / 133 nokta
yalnız kutu içi                244 pencere          ← brifingin sayısı
yalnız yerlesimler.js          268 pencere
en erken f: 1281-01-01   en geç t: 1860-01-01       ← brifing "1779" diyor
```

📌 `CAPRAZ-GOREV.md §1`'in kayıtlı hatasının **aynısı** (`fransa 178/149 → 99/98`,
`iran 326 → 317`): bir sayı ölçüldüğü kapsamdan koparılıp başka kapsamın sayısı
gibi aktarılıyor. Bu sefer yön ters — merge dışı dosya değil, **kutu daralması.**

---

## TESLİM 1b — brifingin sormadığı yer: 20 çift, biri %44

`iran`ın 277 penceresi yalnız **20 ayrık `(f,t)` çifti** kullanıyor.
⇒ İş 277 karar değil, **20 karar.** Dağılım:

```
1747-06-20 → 1796-01-01    123 nokta   %44   ← tek çift
1335-12-01 → 1393-01-01     28
1335-12-01 → 1386-01-01     21
1335-12-01 → 1381-01-01     19
1507-05-24 → 1510-12-02     19          ← 1510 beneklerinin ÇEKİRDEĞİ
1281-01-01 → 1501-07-01     16
1335-12-01 → 1387-11-01     13
1281-01-01 → 1508-01-01      8
1738-01-01 → 1747-06-20      5
1335-12-01 → 1596-01-01      5
1281-01-01 → 1510-12-02      5
1281-01-01 → 1503-01-01      4
1335-12-01 → 1538-01-01      3
1281-01-01 → 1592-01-01      2
1335-12-01 → 1411-01-01 · 1335-12-01 → 1510-12-02 · 1709-04-21 → 1747-06-20
1736-03-08 → 1785-01-01 · 1736-03-08 → 1860-01-01 · 1776-04-16 → 1779-04-01   (1'er)
```

### 🔴 %44'lük kütle KUSUR DEĞİL — kayıtlı bir karar

`arac/renkler.py` satır 157-176 (RENK oturumu, 3 Ağustos 2026):

> ```
> 1736-03-08 → 1747-06-20   `afsar`   (Nadir Şah, tartışmasız)
> 1747-06-20 → 1796-01-01   `iran`    (İran PARÇALI — genel etiket burada
>                                       MEŞRU; Horasan afsar, Şiraz zend,
>                                       Tahran kacar aynı gün)
> 1796-01-01 → dönem sonu   `kacar`
> ```
> *"🔴 `zend` YAZILMADI ve sebebi ÖLÇÜLDÜ, unutulduğu için değil: ① Şimdilik
> GEREKMİYOR — pencere 2 `iran` kalıyor. ② YER DE YOK: bu kutuda beşinci aile
> üyesi için uygun aday SIFIR."*

Doğruladım:

| | durum |
|---|---|
| `zend` künyesi | **VAR** — `data/devletler.js:1490`, 1751-1794, başkent Şiraz |
| `zend` rengi | **YOK** — `renkler.py`'de kayıt yok |
| `zend` yerleşim kullanımı | **0 pencere** |
| `afsar` | 128 pencere ✓ · renk `#f488fc` ✓ |
| `kacar` | 123 pencere ✓ · renk `#c840a8` ✓ |

⇒ **Brifing bu kaydı görmemiş** ve beni 277'nin %44'ünü "hata" sanarak aramaya
gönderiyordu. `CLAUDE.md §2`'nin *"ilk sorulacak soru"* mantığının belge tarafı:
bir etiket tuhaf görünüyorsa **önce o etiketin kayıtlı gerekçesi var mı** diye bak.

🟡 **AÇIK KALAN:** aynı yorum *"Pencere 2'nin TDV araştırması bitince kutu YENİDEN
ÖLÇÜLMELİ; gerekirse aile ikiye bölünür (safevi+afsar · iran+kacar+zend)"* diyor.
O araştırmanın **sahibi yazılı değil.** Koordinatöre soruldu.

---

## Soru ① — `iran` etiketi NE DEMEK? (ön hüküm, ölçümle)

Brifing üç şık veriyor: *devlet / coğrafya / dolgu*. **Üçü de tek başına yanlış** —
ölçüm `iran`ın **en az üç ayrı işte** kullanıldığını gösteriyor ve **her birinin
ilacı ayrı:**

| kullanım | pencere | ne olduğu | ilaç |
|---|---|---|---|
| **A · İlhanlı sonrası dolgu** | `1335-12-01 → 1381…1411` (82 nokta) | İlhanlı 1335'te bitti, halefi yazılmamış — **"kim olduğunu bilmiyoruz" dolgusu** | Celâyirli/Muzafferî/Kert/Serbedârî ayrımı |
| **B · Şeybânî işgali** | `1507-05-24 → 1510-12-02` (19 nokta) | Tarihi ele veriyor (aşağıda) — **yanlış etiket** | `buhara`/Şeybânî |
| **C · parçalılık şemsiyesi** | `1747-06-20 → 1796-01-01` (123 nokta) | **KASTEN, kayıtlı gerekçeyle meşru** | dokunulmaz (renk kutusu yeniden ölçülene dek) |

⚠️ Bu tabloyu **hüküm değil ön hüküm** sayıyorum: A ve B kaynaklandırılmadı.
C kaynaklı (renkler.py kaydı).

---

## Sıradaki iş — 19 noktalık Şeybânî kümesi

1510'daki 30 noktanın **19'u** tek pencerede: `1507-05-24 → 1510-12-02`.
Tarihlerin ikisi de adlandırılmış olaya oturuyor (`CAPRAZ-GOREV §3.2`:
**ad tarihi kilitler**):

```
1507         Şeybânî Han Herat'ı aldı — Timurlu Horasan'ın sonu
1510-12-02   MERV SAVAŞI — Şah İsmail, Şeybânî Han'ı öldürdü
```

⇒ Bu pencere **Horasan'ın Özbek/Şeybânî işgali.** Etiketi `iran` olmamalı.

19 nokta: Nesâ · Ebîverd · Merv · Bocnûrd · Kûçân · Esferâyin · Kelât-ı Nâdirî ·
Serahs · Sebzevâr · Nîşâbur · Turbet-i Haydariye · Turbet-i Câm · Turşiz · Kâin ·
Bîrcend · Kızılarvat · Dihistan ovası · (+2)

📌 Brifingin *"Özbek/Şeybânî çekişmesi olabilir"* hipotezi ölçümle **uyuşuyor** —
ama hipotez hâlâ hipotez, TDV'ye bakılmadı. **Sıradaki adım o.**
🟢 Renk engeli çıkmayabilir: `buhara` zaten 9 pencereyle kullanımda.
⚠️ `§3.5.1` gereği **İKİ UÇ** ölçülecek: 19'u Şeybânî'ye çevirmek Şeybânî'yi
olmadığı yerde büyütüyor mu?

---

## TESLİM 2 — 19 noktalık Şeybânî kümesi KAPANDI

### İKİ UÇ ölçümü (§3.5.1) — hiçbir sınır oynamıyor

Pencere `1507-05-24 → 1510-12-02` · 19 nokta. Komşu dönemler:

```
ÖNCEKİ  (1507-05-24'ten önce)     timurlu  19/19   İSTİSNASIZ
SONRAKİ (1510-12-02'den sonra)    safevi   19/19   İSTİSNASIZ
```

⇒ Pencere tam olarak Timurlu ile Safevî **arasında** duruyor. Etiket değişince
`timurlu`nun bitişi ve `safevi`nin başlangıcı **yerinde kalıyor**; yalnız
ortadaki 3,5 yılın adı değişiyor. §3.5.1'in *"öbür tarafta ne doğuyor"*
sorusunun cevabı: **hiçbir şey.** Geometri değil, yalnız kimlik.

### TDV — iki bağımsız madde aynı şeyi söylüyor

| slug | `<title>` sınaması | alıntı |
|---|---|---|
| `herat` | ✓ CANLI | *"Herat 913'te (1507) Özbekler"* tarafından ele geçirildi · *"916'da (1510) Safevî Hükümdarı Şah İsmâil tarafından zaptedildi"* |
| `merv` | ✓ CANLI | *"Şah İsmâil'in 916 (1510) yılında Şeybânî Han'ı yenmesinden sonra Safevî hâkimiyetine giren şehir"* |
| `seybaniler` | ✓ CANLI | *"916 (1510) yılında Şah İsmâil'le yaptığı savaşta yenilgiye uğrayıp hayatını kaybeden Şeybânî Han"* |
| `nisabur` | 🔴 **ÖLÜ** | doğrusu **`nisabur--iran`** (CANLI) — ama 1500-1520'ye **basmıyor** |

Hicrî çapraz kontrolü (`CAPRAZ-GOREV §4②` — bağımsız veriyle çarpıştır):
913 H = 1507-05-13 başlar ⇒ verideki `1507-05-24` **913'ün içinde** ✓
916 H = 1510-04-10 → 1511-03-30 ⇒ verideki `1510-12-02` **916'nın içinde** ✓
⇒ **Verinin tarihleri doğru. Yanlış olan tek şey ETİKET.**

### Kimlik önerisi: `iran` → `buhara` · yeni renk GEREKMİYOR

| ölçüt | durum |
|---|---|
| §3.5 ömür kontrolü | ✓ `devletler.js:1874` — `buhara` f:1500-01-01 t:1920-09-02 |
| künye içeriği | ✓ *"dört ardışık hanedanın (**Şeybânî**, Canoğulları, Mangıt) ortak adı"* |
| emsal | ✓ proje Şeybânî dönemini **zaten** `buhara` diyor: Hîve · Köhne Ürgenç · Hazârasp · Küngrat · Yeni Ürgenç · Mangışlak · Garabogaz · Çeleken · Bekdaş = `buhara` **1502→1512**, sonra `hive` |
| renk | ✓ `#4527a0` **mevcut** — RENK 2'nin kuyruğuna hiçbir şey eklemiyor |

📌 Hârizm'de yapılan işlem Horasan'da yapılmamış. Kusur bir bilgi eksikliği
değil, **bir işlemin yarım bırakılması.**

**Kesinlik kademeleri (§⑦②):**
```
KESİN    ( 1)  Merv — TDV `merv` birebir cümle
KUVVETLİ (16)  Nesâ·Ebîverd·Serahs·Sebzevâr·Nîşâbur·Kûçân·Bocnûrd·Esferâyin·
               Kelât-ı Nâdirî·Turbet-i Haydariye·Turbet-i Câm·Turşiz·Kâin·
               Bîrcend·Zerenc·Tûs
ZAYIF    ( 2)  Kızılarvat (38,98K 56,28D) · Dihistan ovası (38,17K 54,63D)
               Köpetdağ'ın KUZEYİNDE, Horasan dışı — Şeybânî hükmü buraya
               UZATILMAMALI. Ayrı soru.
```
⚠️ Zerenc (`bit:1383`) ve Tûs (`bit:1389`) 1507'de zaten ölü — düzeltme
yazılabilir ama haritada bir şey değiştirmez.

---

## 🔴 TESLİM 3 — BENEK ŞİKÂYETİNİN KAYNAĞI BULUNDU (ve 1510'da değil)

Brifing beni **1510'a** yönlendirdi. Orada bakılacak şey yoktu: 1600'de `iran`
kendiliğinden sıfırlanıyor, yani 1510 zaten **sönmekte olan** bir izdi.
Şikâyetin kaynağı **1400-1500 arasında** ve ölçülebilir.

### Enklav taraması — üç kesit, aynı dokuz şehir

Ölçüt: bir `iran` noktasının **en yakın 5 komşusunun hepsi** başka devlette.

```
1400-06-15   ENKLAV 10 / 44 `iran` noktası
1450-06-15   ENKLAV  9 / 43
1490-06-15   ENKLAV  9 / 43
```

**Üç kesitte de enklav olanlar — KRONİK:**

| şehir | çevresi 1400 | 1450 | 1490 | en yakın komşu |
|---|---|---|---|---|
| **Tebriz** | timurlu | karakoyunlu | akkoyunlu | 60 km |
| **Şiraz** | timurlu | timurlu | akkoyunlu | 83 km |
| **Meşhed** | timurlu | timurlu | timurlu | 73 km |
| **Yezd** | timurlu | timurlu | akkoyunlu | 56 km |
| **Kirman** | timurlu | timurlu | akkoyunlu | 105 km |
| **Erdebil** | timurlu | karakoyunlu | akkoyunlu | 54 km |
| **Nahçıvan** | timurlu | karakoyunlu | akkoyunlu | 34 km |
| **Urmiye** | timurlu | karakoyunlu | akkoyunlu | 77 km |
| **Tebbes** | timurlu | timurlu | timurlu | 212 km |

🔴 **Listeye bak: Tebriz · Şiraz · Meşhed · Yezd · Kirman · Erdebil.**
Bunlar İran'ın **en büyük şehirleri** — Tebriz başkent, Erdebil Safevî ocağı,
Meşhed ziyaretgâh. Tebbes dışında hepsi birinci sınıf merkez.

### Sebep — ölçüldü, ve bir TERSLİK

Bu dokuz şehir `1281-01-01 → [Safevî fetih tarihi]` **battaniyesi** taşıyor;
220-229 yıl tek pencere. Küçük komşuları ise düzgün işlenmiş:

```
Meşhed   iran      1281-01-01 → 1510-12-02              229 yıl, TEK pencere
Tûs      ilhanli   1281-01-01 → 1335-12-01              ← 10 km ötesi
         iran      1335-12-01 → 1381-01-01
         timurlu   1381-01-01 → 1507-05-24
```

⇒ **En önemli şehirlerin verisi en az işlenmiş.** Bir ters orantı:
işleme sırası büyüklükle ters gitmiş.

### Ve niçin bu kadar göze batıyor — renk ölçüldü

```
iran         #cc1664   parlak kırmızı-pembe
timurlu      #9c7563   soluk kahve
karakoyunlu  #305d30   koyu yeşil
akkoyunlu    #48ae48   parlak yeşil
```
⇒ Kahve/yeşil zemin üzerinde **parlak pembe tekil noktalar.** Kontrast azami.
Kullanıcının *"BENEK ENKLAV"* demesi bir abartma değil, **gördüğü şeyin tam
tarifi.** Renk kusuru değil — renk, veri kusurunu sadakatle gösteriyor.

### İki ayrı görsel kusur, aynı etiket

| dönem | görüntü | sebep | nokta |
|---|---|---|---|
| **1335-1400** | büyük pembe **kütle** | İlhanlı halefleri (Muzafferî · Kert · Serbedârî · Çobanlı · İncû) hiç yazılmamış | 1350'de 105 nokta `iran` |
| **1400-1510** | pembe **benekler** | dokuz büyük şehir battaniyeli, komşuları işlenmiş | 9 kronik enklav |

📌 `ilhanli` etiketinin 124 penceresi **birebir `1281-01-01 → 1335-12-01`**
kullanıyor — yani battaniyenin ilk 54 yılı **araştırma gerektirmiyor**,
projenin başka yerde zaten yaptığı işlemin aynısı. Geri kalanı (1335-1501)
hanedan hanedan araştırma ister.

---

## TESLİM 4 — Hürmüz kümesi (2 nokta): brifingin hipotezi KISMEN ÇÜRÜDÜ

Brifing: *"Hürmüz · Kişm → 1507'den PORTEKİZ olabilir."* Ölçtüm — **hayır.**

### Bizde ne var

```
Hürmüz Adası / Kişm (ikisi de aynı)
    iran      1281-01-01 → 1510-12-02      229 yıl battaniye
    safevi    1510-12-02 → 1515-04-01
    portekiz  1515-04-01 → 1622-05-01
    safevi    1622-05-01 → 1736-03-08
```

### Kaynakta ne var

`hurmuz` slug'ı 🔴 **ÖLÜ** (`<title>` "Arama - TDV"). §4③ gereği aradım:
doğrusu **`hurmuz--iran`** ✓ CANLI. İkinci madde `benderabbas` ✓ CANLI.

> `hurmuz--iran`: *"1507'de kumandan Albuquerque Hürmüz adasını kuşattı; ancak
> **alamayarak geri döndü**"*
> *"Fakat yedi yıl sonra tekrar kuşattığında sultanın **metbûu Şah İsmâil**'in
> o yıllarda Osmanlı Devleti ile mücadele etmesinden de yararlanarak adayı ele
> geçirdi ve **İran'ın vasalı olan sultanı Portekiz'e bağladı (1514)**"*
> *"Hürmüz, Portekizliler'in işgalinden 108 yıl sonra Safevî Şahı I. Abbas'ın
> zamanında geri alındı (**23 Nisan 1622**)"*
> *"İzkî, Suhâr, Hûr Fekkân ve Kebbâ gibi yerlerin **Hürmüz Sultanlığı**'na
> bağlı olduğundan"*

> `benderabbas`: *"**1514 yılında** Albuquerque'in kumandasındaki Portekizliler
> Hürmüz'ü ve kıyıdaki Gamrûn İskelesi'ni ele geçirdiler."*

### Hüküm — dört ayrı kalem

| # | konu | bizde | TDV | hüküm |
|---|---|---|---|---|
| B1 | 1507 Portekiz? | yok | *"alamayarak geri döndü"* | ✅ **UYUYOR** — brifingin hipotezi yanlış, verimiz doğru |
| B2 | Portekiz başlangıcı | `1515-04-01` | **1514** (iki madde birden) | 🟡 **ÇELİŞKİLİ** — kaydedildi, çözülmedi |
| B3 | Portekiz bitişi | `1622-05-01` | **23 Nisan 1622** | 🟡 TDV **gün** veriyor, bizde ay hassasiyeti — 8 gün |
| B4 | 1281-1510 `iran` | `iran` | **Hürmüz Sultanlığı** | 🔴 **ÇELİŞİYOR** — bağımsız devletti |

**B2 notu:** `CAPRAZ-GOREV §3` üçüncü satırı — bu bir **temas olgusu** (X bizden
Y'yi ne zaman aldı) ⇒ *"İKİSİ BİRDEN"* gerekiyor. Portekiz kaynakları
Albuquerque'in filosunun 26 Mart 1515'te Hürmüz'e vardığını verir; TDV
*"yedi yıl sonra"* (1507+7) diyerek 1514'e ulaşıyor. Fark ~1 yıl.
⚠️ `§2.1`'in Jülyen şüphesi **işlemiyor** (fark 10-13 gün değil, bir yıl).
📌 `§8` gereği **çözmedim, kaydettim.**

**B4 — ve burada projenin kendi kaydını düzeltiyorum.** `devletler.js:1581`
(`uman` künyesi) şöyle diyor:
> *"Cülfâr limanının **Hürmüz Krallığı**'na tâbiiyeti literatürde geçer ama
> **TDV'de ayrı madde bulunmadığı için** henüz ayrılmamıştır."*

🔴 **TDV'de madde VAR** — `hurmuz--iran`, ve *"Hürmüz Sultanlığı"* adını
kullanıyor. Erteleme gerekçesi **ölü bir slug denemesine** dayanıyor olabilir
(`hurmuz` ölü, `hurmuz--iran` canlı — §4③'ün tam deseni: *"Kaynak vardı,
adres yanlıştı"*). Bu, ertelenmiş bir kararın **yeniden açılması** demek.

### 🔴 YAPISAL BULGU — proje "Safevî tâbii" diye bir şey SÖYLEYEMİYOR

TDV Hürmüz sultanının **metbûunun Şah İsmâil** olduğunu, sonra **Portekiz'e
bağlandığını** söylüyor. Yani 1510-1622 arası Hürmüz bir **tâbi devlet** —
önce Safevî'nin, sonra Portekiz'in. Bizim veri ikisini de **doğrudan
hâkimiyet** olarak boyuyor.

Ölçtüm — bu bir ihmal değil, **şema sınırı.** 313 `v:` döneminin **tamamı**
Osmanlı sistemi içinde:
```
Kavalalı hanedanı 54 · Mısır (Kavalalı) 37 · Cezayir Ocaklığı 33 ·
Mısır (İbrâhim Paşa) 28 · Tunus Ocaklığı 27 · Trablusgarp Ocaklığı 26 ·
Eflak 16 · Boğdan 11 · Mekke Şerifliği 7 · Bulgaristan Prensliği 7 …
```
⇒ `v:` **Osmanlı'ya tâbilik** demek (motor onu açık Osmanlı tonu boyuyor,
`CLAUDE.md §1`). Yabancı bir devlete tâbilik ifade edilemiyor.

📌 Bu `CLAUDE.md §3.5`'in *"hayalet devletler"* sınıfının **aynası**: orada
olmayan devlet boyanıyordu, burada **olan devlet boyanamıyor.** Ve
`OGRENILENLER §72`'nin *"`Değişmez 1` 'kimsenin değildi' cevabını ifade
edemiyor"* teşhisiyle aynı aile — şema, gerçeğin bir hâlini **söyleyemiyor**.

⚠️ Bu benim çözeceğim bir şey değil (MİMARİ kararı). Kaydediyorum.

---

## TESLİM 5 — koordinatörün verdiği iş: `iran` 317 → 277 farkı AÇIKLANDI

Koordinatör: *"Sebebini de sen bul: dosya kümesi mi değişti, veri mi düzeltildi."*

**Cevap: VERİ DÜZELTİLDİ. Dosya kümesi değil.** Ve düzeltmelerin ikisi de
koordinatörün kendi commit'leri.

### Yöntem

Her commit'te **o commit'in `girdi.py` `GIRDI_DOSYALARI` listesi** okundu ve
yalnız o dosyalarda `d:"iran"` sayıldı. (Dosya kümesini sabitlemek değil,
**her tarihte o tarihin kümesini** kullanmak şart — yoksa `CAPRAZ-GOREV §1`'in
`fransa 178/149` hatası tekrar eder.)

🟢 Ölçek doğrulaması: yöntem bugün **277** veriyor, ayrıştırıcım da **277**.
Birebir tutuyor ⇒ vekil ölçü değil, tam ölçü.

### Zincir

```
08-01 16:05   317   ← ÇAPRAZ DOĞU burada ölçtü
08-01 18:11   323   +6    NOKTA EKLEME partileri (f0b385d ve öncesi)
08-02 14:06   326   +3    5 kıyı noktası maske içine (73f1ab0)
08-03 01:18   282   −44   🔴 "Isparta enklavı + Irak/Arabistan `iran` etiketi
                          TEMİZLİĞİ"  (47aa386)              ← ANA SEBEP
08-03 16:27   277   −5    "İRAN ÜÇE BÖLÜNDÜ: bir etiket altındaki üç hanedan
                          ayrıldı"  (5a7774b)
08-06 (bugün) 277
```

### Hüküm

**DOĞU'nun sayısı yanlış değildi — 1 Ağustos'ta doğruydu.** Veri onun altından
kaydı. İki ayrı düzeltme `iran` etiketini 49 pencere azalttı; ikisi de kayıtlı,
gerekçeli, doğru işlerdi.

📌 Ve bu, koordinatörün *"tekrar ölçmek israf değil"* hükmünün kanıtı — ama
tersi de doğru: **DOĞU'nun 317'si bayat değil, TARİHLİ.** Bir sayı yanlış
olmadan eskiyebilir. Aradaki fark, sayıyı **damgasız** aktarınca kayboluyor.

⇒ Öneri (koordinatöre): devredilen her sayının yanına **damga** yazılsın —
`iran 317 (2026-08-01)`. Bugün üç ayrı belge üç ayrı `iran` sayısı taşıyor
(`326` · `317` · `277`) ve üçü de kendi tarihinde doğruydu.

---

## TESLİM 5b — koordinatörün iki uyarısı: ikisi de doğrulandı

### "33 karar değil 6 karar" — TUTUYOR, her iki tabanda

```
SÜZGEÇSİZ (33 nokta)  →  6 ayrık çift
SÜZGEÇLİ  (30 nokta)  →  6 ayrık çift     ← süzgeç çift SAYISINI değiştirmiyor
```

| `(f,t)` çifti | kayıt | 1510'da BOYAYAN |
|---|---|---|
| `1507-05-24 → 1510-12-02` | 19 | **17** |
| `1281-01-01 → 1510-12-02` | 5 | 5 |
| `1335-12-01 → 1596-01-01` | 5 | **4** |
| `1281-01-01 → 1592-01-01` | 2 | 2 |
| `1335-12-01 → 1510-12-02` | 1 | 1 |
| `1335-12-01 → 1538-01-01` | 1 | 1 |

⚠️ **Teslim 2'yi burada inceltiyorum:** baskın çift **19 kayıt** taşıyor ama
1510'da **17'si** boyuyor (Zerenc `bit:1383` · Tûs `bit:1389`). Düzeltme
19'una da yazılabilir; haritada görünen 17.

### "Tabanı da düzelt" — uyarı yerinde, ve oran tahmini de doğru

```
süzgeçsiz taban 149 nokta → iran 33 = %22,1
süzgeçli  taban 136 nokta → iran 30 = %22,1
```
⇒ Süzgeç **oranı değiştirmiyor**, tabanı küçültüyor. Koordinatörün öngörüsü
birebir çıktı. Bundan sonra **30/136** yazıyorum, 30/149 değil.

---

## TESLİM 6 — Hazar kıyısı kümesi (7 nokta): tarihler DOĞRU, etiket yanlış

Brifingin hipotezi: *"Hazar kıyısı (Lâhîcan·Bârfurûş·Eşref) → yerel hanedanlar?
Mar'aşî?"* — **doğrulandı, ve tarihler zaten kaynağa oturuyor.**

### Bizde ne var

```
GÎLÂN     Lâhîcan · Bender Enzeli          iran  1281-01-01 → 1592-01-01
MÂZENDERAN Âmül · Sârî · Bârfurûş · Eşref  iran  1335-12-01 → 1596-01-01
           (+ Ferahâbâd, kur:1611 — pencereyi taşıyor ama hiç boyamıyor)
```

### Kaynakta ne var

| slug | sınama | alıntı |
|---|---|---|
| `gilan` | ✓ CANLI | *"Bölgeye **Kârkiyâ hânedanı** hâkim oldu."* · *"Safevî Hükümdarı I. Şah Abbas **1592**'de bölgeyi hâkimiyeti altına aldı."* |
| `mazenderan` | 🟡 **kütük** — *"bk. TABERİSTAN"*, içerik yok | — |
| `taberistan` | ✓ CANLI | *"Timur, **Mar'aşîler**'i mağlûp ederek burayı itaat altına aldı (**794/1392**) ve Mar'aşîler'i Mâverâünnehir'e sürgüne gönderdi"* · *"Taberistan **909 (1504)** yılında Safevîler'in eline geçti."* |
| `marasiler` | ✓ CANLI | *"XIV-XVI. yüzyıllar arasında İran'ın **Mâzenderan** bölgesinde hüküm süren"* · merkezleri **Âmül ve Sârî** · Safevî üstünlüğünden sonra *"onlara bağlı mahallî dinî-siyasî hâkimler statüsünde bölgedeki varlıklarını devam ettirdiler"* · Şah Abbas (1587-1629) döneminde dağıtılıp *"siyasî önemlerini büsbütün yitirerek"* |

### Hüküm — dört kalem

| # | konu | hüküm | kesinlik |
|---|---|---|---|
| **G-1** | Gîlân `iran` → **Kârkiyâ** | 🔴 ETİKET YANLIŞ, **tarih DOĞRU** (1592 birebir) | **KESİN** |
| **M-1** | Mâzenderan `iran` → **Mar'aşî** | 🔴 ETİKET YANLIŞ; merkezler (Âmül·Sârî) birebir tutuyor | **KUVVETLİ** |
| **M-2** | 1504 ⟷ 1596 | 🟡 **ÇELİŞKİLİ — çözmedim** (aşağıda) | — |
| **M-3** | 1392 Timur arası | 🟡 verimizde YOK — `iran` 1335→1596 kesintisiz | **KUVVETLİ** |

**M-2 — ve bu `§3.1 ⓪`nın kitabına uygun vakası.** TDV `taberistan` *"1504'te
Safevîler'in eline geçti"* diyor, bizim veri 1596 diyor. **Ama ikisi aynı
soruya cevap vermiyor:**
```
1504  Safevî ÜSTÜNLÜĞÜ kurulur      → "kim metbû"
1596  Mar'aşîler dağıtılır          → "yeri fiilen kim yönetiyor"
```
`marasiler` maddesi ikisini birden söylüyor: Safevî üstünlüğünden sonra
*"onlara bağlı mahallî hâkimler statüsünde varlıklarını devam ettirdiler."*
⇒ **Çelişki yok, iki ayrı soru var.** Haritanın sorduğu soru (`§3.1 ⓪`:
*"o gün orayı FİİLEN kim yönetiyordu"*) 1596'yı seçtirir. **Verimiz doğru.**

🔴 **VE BU, HÜRMÜZ'ÜN AYNI VAKASI.** İki bağımsız kümede aynı desen çıktı:
```
Hürmüz      1510-1622   Hürmüz Sultanlığı, önce Safevî sonra Portekiz tâbii
Mâzenderan  1504-1596   Mar'aşîler, Safevî tâbii
```
İkisinde de yerel hanedan **devam ediyor**, üstünlük başkasında. Şema bunu
söyleyemiyor (313 `v:` döneminin tamamı Osmanlı sistemi içinde — Teslim 4).
📌 Tek vaka bir tesadüf, iki vaka bir **desen.** Yapısal bulguyu güçlendiriyor.

### 🔴 BU KÜME BEDAVA DEĞİL — Şeybânî kümesinden farkı

```
devletler.js  `karkiya` YOK · `marasi` YOK · `gilan` YOK · `taberistan` YOK
renkler.py    hiçbiri YOK
```
⇒ `CAPRAZ-GOREV §7`: *"Renk olmadan yazılan kimlik BOYANMAZ — önerini renk
ihtiyacıyla birlikte ver."* **İki yeni künye + iki yeni renk gerekiyor.**

⚠️ Ve maliyeti hafife almıyorum: `renkler.py:170-176` İran ailesi kutusunun
**dolu** olduğunu ölçmüş (*"beşinci aile üyesi için uygun aday SIFIR"*).
🟢 Ama bir çıkış olabilir: Gîlân ve Mâzenderan **Hazar kıyısı**, Safevî
çekirdeğinden (Tebriz-Kazvin-İsfahan) coğrafî olarak ayrık. İran ailesi
bandında olmaları **gerekmeyebilir** — ayrı hanedanlar, ayrı aile.
⚠️ Bu bir RENK kararı, benim değil. **İddia etmiyorum, soruyorum.**

---

## TESLİM 7 — (a) İlhanlı kesiti: öneri hazır, ama KAZANCI SANDIĞIMDAN KÜÇÜK

Koordinatör (a)'yı onayladı: *"ölçüm sende, uygulama bende."* Ve uyardı:
*"Kısalttığın şeyi söyle — 'çözüldü' değil 'yarısı çözüldü' diye yaz."*

🔴 **Uyarısı yerindeydi ve gerçek daha da sert: yarısı değil, DÖRTTE BİRİ.**
Üstelik **benek şikâyetine hiç dokunmuyor.** Aşağıda.

### Kohort — 35 nokta, hiçbirinde `ilhanli` yok

`iran` penceresi `1281-01-01`de başlayan **35 nokta**. Hiçbirinde `ilhanli`
dönemi yok — **Tebriz dâhil.**

```
1281-01-01 → 1501-07-01   16      1281-01-01 → 1510-12-02    5
1281-01-01 → 1503-01-01    4      1281-01-01 → 1592-01-01    2
1281-01-01 → 1508-01-01    8
```

### Kaynak — TDV `ilhanlilar` ✓ CANLI

> *"Ebû Said Bahadır Han 1335'te henüz otuz yaşında iken ölmüş veya zehirlenerek
> öldürülmüş"* ve bu olay **devletin parçalanmasına** yol açtı.
> *"Devletin ilk başşehri **Tebriz** idi."*
> *"sınırları Amuderya'dan Fırat'a ve **Kafkasya**'dan Belûcistan'a kadar
> uzanıyor"* · *"**Kuzeyde Altın Orda**… ile mücadele hâlindeydi."*

📌 **Projenin `1335-12-01` tarihi doğrulanıyor** — Ebû Said 30 Kasım 1335'te
öldü, mevcut 124 pencere birebir o günü kullanıyor.
⚠️ TDV devletin **1353**'te yıkıldığını da söylüyor. `§3.1 ⓪`: iki ayrı soru —
*"hanedan resmen ne zaman bitti"* (1353) / *"birleşik İlhanlı idaresi ne zaman
bitti"* (1335). Haritanın sorusu ikincisi. **Mevcut 124 pencere doğru.**

🔴 **Ve Tebriz'in başkent olduğu doğrulandı** ⇒ İlhanlı'nın kendi payitahtı
`iran` boyalı. Bu, kohortun en tartışmasız kalemi.

### İç tutarsızlık — dış kaynağa bile gerek yok

Battaniyeli noktaların **en yakın `ilhanli` komşusu** ölçüldü. Aynı pencereyi
(`1281-01-01 → 1335-12-01`) taşıyan komşular hemen yanı başlarında:

```
Meşhed    22 km  ← Tûs              Tebriz    60 km  ← Merend  (BAŞKENT!)
Nahçıvan  34 km  ← Culfa            Kabala    61 km  ← Şeki
Şâbüran   42 km  ← Kuba             Urmiye    77 km  ← Selmâs
Ereş      43 km  ← Berde            Şiraz     83 km  ← Firûzâbâd
Erdebil   54 km  ← Astara           …
```
⇒ **Aynı bölgede, komşu noktalarda, zıt işlem.** Kusur bilgi eksikliği değil,
**işlemin bazı noktalara uygulanmamış olması.**

### 🔴 İKİ UÇ (§3.5.1) — kuzey ucunda GERÇEK risk var

```
mevcut `ilhanli` zarfı, Kafkasya'da EN KUZEY:  Kuba 41,36K · Şeki 41,19K
`altinorda` zarfı, EN GÜNEY:                   Donets 48,80K
```
Aradaki koridorda üç battaniye noktası var ve **üçü de mevcut `ilhanli`
zarfının kuzeyinde:**

| nokta | enlem | en yakın `ilhanli` | hüküm |
|---|---|---|---|
| Derbend | 42,06K | Kuba, 80 km | 🔴 **BEKLET** |
| Tarki (Tarku) | 42,98K | Kuba, 199 km | 🔴 **BEKLET** |
| Ağraham burnu | 43,97K | Kuba, 298 km | 🔴 **BEKLET** |

TDV *"Kuzeyde Altın Orda ile mücadele hâlindeydi"* diyor — Dağıstan cephesi
**savaş bölgesi**, el değiştiren bir hat. `ilhanli`yi 41,36'dan 43,97'ye
uzatmak, projenin bugüne kadar hiç boyamadığı bir kuşağa girmek olur.
⚠️ Ve kaynaklandırması kolay değil: `derbend` ve `samahi` slug'ları
`CLAUDE.md §4`'te **ÖLÜ olarak kayıtlı**. Ayrı bir araştırma kalemi.

### ⇒ ÖNERİ

```
🟢 32 nokta   iran 1281-01-01 → X
              ⇓ İKİYE BÖL
              ilhanli 1281-01-01 → 1335-12-01
              iran    1335-12-01 → X

🔴  3 nokta   Derbend · Tarki · Ağraham burnu — DOKUNMA, ayrı kaynak ister
```
🟢 Renk/künye borcu **YOK** — `ilhanli` dizinde ve `renkler.py`de var
(`#9f66c3`), 149 pencereyle canlı. Şeybânî kümesi gibi **sıfır maliyet.**

### 🔴 DÜRÜST MUHASEBE — kazanç sandığımdan küçük

```
bugünkü battaniye      7331 nokta-yıl
İlhanlı ile çözülen    1728 nokta-yıl   (54 yıl × 32 nokta)
GERİYE KALAN           5603 nokta-yıl   ← %76 hâlâ battaniye
```

Bölme sonrası kalanlar:
```
iran 1335-12-01 → 1501-07-01   13 nokta   166 yıl
iran 1335-12-01 → 1503-01-01    4 nokta   168 yıl
iran 1335-12-01 → 1508-01-01    8 nokta   173 yıl
iran 1335-12-01 → 1510-12-02    5 nokta   175 yıl
iran 1335-12-01 → 1592-01-01    2 nokta   257 yıl
```

### 🔴🔴 VE BENEK ŞİKÂYETİNE HİÇ DOKUNMUYOR — bunu açıkça yazıyorum

Dokuz kronik enklavı 1400 · 1450 · 1490 kesitlerinde ölçmüştüm.
**Üçü de 1335'ten SONRA.** Bölme 1281-1335'i düzeltiyor — yani **enklav
döneminden önceki** kesiti.

```
Tebriz    iran 1281→1501  ⇒  ilhanli 1281→1335 + iran 1335→1501  (166 yıl enklav)
Meşhed    iran 1281→1510  ⇒  ilhanli 1281→1335 + iran 1335→1510  (175 yıl enklav)
…dokuzunda da aynı
```

| ne | sonuç |
|---|---|
| 1300 kesiti (kutu içi) | ✅ `iran 25 → 0` · `ilhanli 100 → 125` — **temizlenir** |
| 1400 · 1450 · 1490 benekleri | ❌ **HİÇ DEĞİŞMEZ** — dokuz enklav yerinde durur |

⇒ Bu iş **doğru ve ucuz, ama Emre'nin şikâyetini çözmüyor.**
Şikâyeti çözen (b) — 1335-1400 halefleri. **Sıralama bunu söylüyor: (a) yan
kazanç, asıl iş (b).**
📌 `ONCELIK.md` mantığıyla: ucuz olması önceliklendirmez, **şikâyeti olan iş
öncelendirir** (koordinatörün pencere 2 için kullandığı ölçütün aynısı).

---

## 🔴 TESLİM 8 — BENEK ŞİKÂYETİ ÇÖZÜLDÜ. Simülasyonda **enklav 9 → 0**, maliyet **SIFIR**.

Koordinatör (b)'yi verdi ve `PARTİ 19` gereği maliyeti önden istedi.
**Cevap: sıfır yeni künye, sıfır yeni renk.** Ve iş sandığımdan bambaşka çıktı.

### Önce maliyet (istenen biçim)

```
muzafferi · kert · serbedari · cobanli · incu     dizin 0 · renk 0   🔴 BEŞİ DE YOK
celayirli                                          dizin 1 · renk 1   ✓
```
**Ama bunların hiçbiri gerekmiyor** — sebebi aşağıda.

### TDV `muzafferiler` ✓ CANLI — ve veriyi ele verdi

> Hânedan **718/1318**'de Ebû Said'in Yezd emirliğini Mübârizüddin'e vermesiyle
> kuruldu, **795/1393**'te **Timur tarafından ortadan kaldırıldı.**
> Toprakları: **Yezd · Fars · Isfahan · Kirman**, ara ara Azerbaycan.
> 1335 İlhanlı çöküşünden sonra bağımsızlaştılar.

Veride `iran 1335-12-01 → 1393-01-01` diye **28 noktalık** bir pencere var ve
coğrafyası **Fars + Kirman + Hûzistan** (lat 25,3-32,4 · lon 48,1-61,2).
**Muzafferî sahası, birebir.**

### 🔴 VE DÖRT PENCERENİN DÖRDÜ DE TİMUR'UN SEFER TAKVİMİ

`iran` `1335-12-01` başlangıçlı pencereler, bitişlerine göre:

| pencere | nokta | coğrafya | bitiş tarihi ne |
|---|---|---|---|
| `→ 1381-01-01` | 19 | Horasan (lon 54,6-61,9) | Timur'un **Horasan** seferi |
| `→ 1386-01-01` | 21 | Azerbaycan (lon 44,5-48,9) | Timur'un **Azerbaycan** seferi |
| `→ 1387-11-01` | 13 | Cibâl / Irâk-ı Acem | Timur'un **Isfahan** yağması (Kasım 1387) |
| `→ 1393-01-01` | 28 | Fars + Kirman + Hûzistan | **Muzafferîler'in sonu** (TDV: 795/1393) |

📌 **Veriyi kuran kişi Timur'un sefer sırasını gün gün biliyordu ve kodladı —
ama hanedanı adlandırmak yerine hepsine `iran` yazdı.** Yani eksik olan tek
şey AD. Tarihler zaten doğru, hem de olağanüstü isabetli.

### 🔴🔴 ASIL BULGU — enklavın sebebi Muzafferî DEĞİL, EKSİK ZİNCİR

Dokuz enklavı komşularıyla tam zincir olarak karşılaştırdım. **Dokuzunda da
aynı, tek kusur:**

```
ENKLAV (Şiraz)              KOMŞU (Firûzâbâd, 83 km)
ilhanli 1281→1335           ilhanli 1281→1335            ✓ aynı
iran    1335→1508           iran    1335→1393            🔴
safevi  1508→               timurlu 1393→1452            🔴 EKSİK
                            karakoyunlu 1452→1469        🔴 EKSİK
                            akkoyunlu   1469→1503        🔴 EKSİK
                            safevi      1503→
```

⇒ **Dokuz şehir, Timurlu-Karakoyunlu-Akkoyunlu zincirinin TAMAMINDAN yoksun.**
1335'ten doğrudan Safevî fethine atlıyorlar. Atladıkları aralık **tam olarak
enklav dönemi.**

📌 Bu yüzden (b)'nin cevabı `muzafferi` künyesi DEĞİL: enklav 1393 sonrasında
doğuyor, Muzafferî penceresi 1393'te bitiyor. **Muzafferî'yi adlandırmak
beneği çözmez** — eksik zinciri eklemek çözer.

### Komşu şablonları — bölge başına tekdüze (3/3 aynı)

```
FARS/KIRMAN   iran→1393-01-01 │ timurlu→1452 │ karakoyunlu→1469 │ akkoyunlu→1503 │ safevi
YEZD          iran→1387-11-01 │ timurlu→1452 │ karakoyunlu→1469 │ akkoyunlu→1503 │ safevi
AZERBAYCAN    iran→1386-01-01 │ timurlu→1406-10-21 │ karakoyunlu→1468-04-01 │ akkoyunlu→1501-07-01 │ safevi
HORASAN       iran→1381-01-01 │ timurlu→1507-05-24 │ buhara→1510-12-02 │ safevi
```
🟢 Horasan şablonunda `buhara` görünüyor — **Teslim 2 uygulanmış** (`69be9be`).

### ⚠️ TUZAK — körü körüne kopyalamak SAFEVÎ TARİHİNİ de değiştirirdi

```
Şiraz   safevi 1508-01-01      komşuları 1503-01-01     5 yıl fark
Kirman  safevi 1510-12-02      komşuları 1503-01-01     7,9 yıl fark
```
Kirman'ın `1510-12-02`si **Merv Savaşı'nın günü** — Horasan tarihi, Kirman'ın
değil. Battaniyenin bitiş tarihinden miras kalmış olabilir.

⇒ **Önerim Safevî tarihine DOKUNMUYOR.** Zincirin **son penceresi** şehrin
kendi Safevî tarihine kadar uzatılır (Şiraz'da `akkoyunlu 1469→1508`).
Böylece enklav kapanır, Safevî iddiası **değişmez.**
📌 `§3.5.1`: bir uçtan bakan düzeltme hatayı taşır. Safevî tarihi **ayrı bir
soru**, ayrı kaynak ister — ölçmedim, iddia etmiyorum, **işaretliyorum.**

### SİMÜLASYON — öneriyi koşturdum

```
              iran (kutu içi)        ENKLAV
1300-06-15     3 →  3                 0 → 0
1400-06-15    31 → 22                 9 → 0   ✅
1450-06-15    31 → 22                 9 → 0   ✅
1490-06-15    31 → 22                 9 → 0   ✅
```
🔴 **ENKLAV 9 → 0, üç kesitte de.**

### MALİYET — sıfır

```
ilhanli ✓  timurlu ✓  karakoyunlu ✓  akkoyunlu ✓  safevi ✓  buhara ✓
dizin 1 · renk 1, hepsi
```
**Şeybânî kümesi gibi bedava.** Hazar kümesi gibi değil.

🟡 Yan bulgu: `iran`ın **dizin künyesi YOK** (renk var, künye yok) — `§1.5`in
*"dizinsiz harita kimliği"* sınıfı. Benim işim değil, işaretliyorum.

### Geriye ne kalıyor — dürüstçe

Bu öneri **beneği** kapatıyor, **battaniyeyi** değil: `iran 1335→1381/86/87/93`
pencereleri duruyor (kutu içinde 22 nokta). Onlar hanedan adlandırması ister
(`muzafferi` · `serbedari`/`kert` · `cobanli` — beş künye + beş renk) ve
**şikâyet üretmiyorlar**, çünkü artık komşularıyla aynı renkteler.
⇒ Sıradaki iş o, ama **aciliyeti düştü.**

---

## TESLİM 9 — kalan 22 nokta: maliyet ve `2s` ÖNDEN (koordinatörün iki şartı)

### Önce: düzeltmenin oturduğunun teyidi

Kalan `iran` kohortları **tam olarak dokuz şehir kadar büyümüş:**
```
1335-12-01 → 1393-01-01   28 → 30   (+Şiraz +Kirman)
1335-12-01 → 1386-01-01   21 → 25   (+Tebriz +Erdebil +Urmiye +Nahçıvan)
1335-12-01 → 1381-01-01   19 → 21   (+Meşhed +Tebbes)
1335-12-01 → 1387-11-01   13 → 14   (+Yezd)
```
⇒ Dokuzu da doğru kohorta düşmüş. Şablon tuttu.

### ① MALİYET — 4 yeni künye + 4 yeni renk

| kohort | nokta | hanedan | künye | renk |
|---|---|---|---|---|
| `→1393` Fars+Kirman+Hûzistan | 30 | **Muzafferî** (TDV 1318-1393) | 🔴 YOK | 🔴 YOK |
| `→1386` Azerbaycan | 25 | **Çobanlı** (1335-1357) → **Celâyirli** (1357-1386) | Çobanlı 🔴 · Celâyirli ✓ | Çobanlı 🔴 · Celâyirli ✓ |
| `→1381` Horasan | 21 | **Serbedârî** (batı) + **Kert** (doğu/güney) | 🔴 ikisi de YOK | 🔴 ikisi de YOK |
| `→1387-11` Cibâl | 14 | araştırılmadı — Celâyirli/Muzafferî çekişmesi | ? | ? |

```
YENİ KÜNYE  4   muzafferi · cobanli · serbedari · kert
YENİ RENK   4   aynısı
HAZIR       1   celayirli (dizin ✓ renk ✓ #b5432f)
```
⚠️ Cibâl kohortu (14 nokta) ölçülmedi — beşinci bir kimlik çıkarabilir.
**Tahmin değil, boşluk olarak yazıyorum.**

### ② `2s` TAHMİNİ — yapısal olarak **0**, ama bir şartla

`denetle.py` `2s`yi **kırılma TARİHLERİNDEN** sayıyor. Bir pencerenin `d:`
alanını değiştirmek `f`/`t` sınırlarını **oynatmaz** ⇒ yeni kırılma tarihi
doğmaz ⇒ **`2s` değişimi 0.** Bu ampirik değil, **yapısal** bir garanti.

```
SAF ADLANDIRMA (sınır oynamaz)     2s Δ = 0   ← garantili
BÖLME (yeni iç sınır)              2s Δ = +1 per yeni tarih, maddesi yoksa
```
Tek bölme adayı: **Azerbaycan `1357`** (Çobanlı → Celâyirli).

### 🔴 ③ VE 1357'Yİ ÖLÇERKEN BUGÜNKÜ YAPISAL KUSURUN YENİ VAKASINI BULDUM

`denetle.py:179` bugün şunu yazmış: *"bu ölçüt TARİH YAKINLIĞINA bakıyor,
KONU YAKINLIĞINA bakmıyor"* ve Sibirya'dan altı örnek vermiş.
**Aynı kusur benim sahamda da var.** Aday kırılma tarihlerinin ±30 gününde
madde aradım:

| kırılma | eşleşen madde | hüküm |
|---|---|---|
| `1357-01-01` Çobanlı→Celâyirli | *"Süleyman Paşa'nın Trakya ilerleyişi: Malkara, İpsala…"* | 🔴 **ALAKASIZ** |
| `1381-01-01` Timur Horasan | *"Germiyan çeyizi: Kütahya'nın katılışı"* | 🔴 **ALAKASIZ** |
| `1386-01-01` Timur Azerbaycan | *"Niş'in fethi"* | 🔴 **ALAKASIZ** |
| `1393-01-01` Muzafferîler'in sonu | *"Anadolu Beylerbeyliği kuruldu"* | 🔴 **ALAKASIZ** |
| `1387-11-01` Isfahan yağması | *"Timur'un İran'ın büyük bölümünü hâkimiyeti altına alması"* | ✅ GERÇEK |
| `1335-12-01` Ebû Said | *"İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü"* | ✅ GERÇEK |

⇒ **Dört kırılma "maddeli" sayılıyor ama maddeleri Trakya · Kütahya · Niş ·
Anadolu Beylerbeyliği.** Kullanıcı **Şiraz'ın renk değiştirdiğini "Germiyan
çeyizi" maddesinin altında görecek** — `denetle.py`nin Vladivostok örneğinin
birebir aynısı, Osmanlı coğrafyasının **içinde.**

📌 Yani kusur *"tarihleri Osmanlı kronolojisinden bambaşka bir sahnede geçtiği
için görünür oldu"* diye açıklanmıştı; **İran sahnesi Osmanlı'ya yakın ve
kusur yine de var.** Sibirya'ya özgü değil.

🔴 **⇒ TAHMİNİM İKİ KATLI:**
```
sayısal      2s Δ = 0        (bölme yapılsa bile 1357'nin "maddesi var")
gerçekte     YALANCI GEÇİŞ   4 kırılma alakasız maddeye takılı
```
**Sayı temiz çıkacak ama temizlik sahte olacak.** Bunu önden söylüyorum ki
uygulandığında *"2s kıpırdamadı, demek doğru"* denmesin.

🟢 **Çaresi ucuz:** bu dört tarihe **gerçek madde** yazmak (Timur'un Horasan
1381 · Azerbaycan 1386 · Muzafferîler'in sonu 1393 · Celâyirli'nin Azerbaycan'ı
alışı 1357). Dördü de gerçek olay, uydurma gerekmiyor. Yazılırsa yalancı geçiş
**gerçek geçişe** döner. ⚠️ Kronoloji benim dosyam değil — kalem olarak veriyorum.

---

## 🔴 TESLİM 10 — kendi önerimi ÜÇÜNCÜ KEZ küçültüyorum: Muzafferî tek künye DEĞİL

Teslim 9'da *"Muzafferî tek başına — tek künye tek renk, saf adlandırma,
`2s` Δ=0 garantili"* demiştim. Koordinatör onayladı. **Ölçüm önerimi öldürdü.**

### TDV `muzafferiler` — ikinci çekiş, tarih sorarak

> Yezd: *"Sultan Ebû Said, Yezd emirliğini Mübârizüddin'e verdi **(718/1318)**"*
> İncû: *"**İncûlu Ebû İshak**'ı önce Kirman'da kuşattı; ardından İsfahan'da
> yakalayarak öldürttü ve bu hânedanı ortadan kaldırdı **(758/1357)**"*
> Kirman: *"Aynı yıl **Kutluğhanlılar**'dan bir prensesle evlenip Kirman
> eyaletini de kendi topraklarına kattı"* **(758/1357)**
> Toprakları: *"Yezd, Fars, İsfahan, Kirman ve zaman zaman Azerbaycan"*

📌 758 H = 1356-12-26 → 1357-12-15 ⇒ `1357` tutarlı.

### 🔴 İKİ AYRI SEBEPLE ÖNERİ ÇÖKÜYOR

**① 1335 BAŞLANGICI YANLIŞ — Muzafferî Fars ve Kirman'a 1357'de geliyor.**
```
Fars      1335-1357  İNCÛ (İncûlular)        →  1357-1393 Muzafferî
Kirman    1335-1357  KUTLUĞHANLI             →  1357-1393 Muzafferî
```
⇒ **Saf adlandırma değil, BÖLME.** Yeni kırılma tarihi (`1357`) doğuyor
⇒ **`2s` Δ=0 garantim bu kohort için GEÇERSİZ.** Teslim 9'daki muhakeme
doğruydu ama **şartı** (sınır oynamaz) sağlanmıyor.

**② 30 NOKTANIN 12'Sİ MUZAFFERÎ DEĞİL.** TDV toprak listesinde Hûzistan,
Mekran, Belûcistan, Sîstan **hiç geçmiyor.** İkinci çekişte doğrudan sordum:
> *"Makale Hûzistan (Ahvaz, Şüşter, Dizfûl, Abâdân), Mekran, Belûcistan veya
> Sîstan'ı Muzafferî toprağı olarak **anmıyor**. Bu bölgeler metinde
> **tamamen yok.**"*

| bölge | nokta | hüküm |
|---|---|---|
| **FARS** | 11 | Şiraz·Firûzâbâd·Kâzerûn·Fesâ·Dârâb·Cehrom·Lâr·Ebrekûh·Buşehr·Bender Rîg·Bender Lengeh — ✅ Muzafferî **1357'den** |
| **KIRMAN** | 7 | Kirman·Sircân·Rafsencân·Cîruft·Mînâb·Bender Abbas·Câsk — ✅ Muzafferî **1357'den** |
| **HÛZİSTAN** | 8 | Ahvaz·Şüşter·Dizfûl·Abâdân·Muhammere·Havîza·Râmhürmüz·Behbehân — 🔴 **DEĞİL** |
| **MEKRAN/SÎSTAN** | 4 | Bem·Bempûr·Çâhbahâr·Hâş — 🔴 **DEĞİL** |

⚠️ `§3.5.1`: 30'unu birden `muzafferi` yapmak **Muzafferî'yi olmadığı yerde
büyütürdü** — Basra körfezi başından Belûcistan'a. Tam da brifingin uyardığı
hata.

### GERÇEK MALİYET — 1 değil, en az 3 (belki 5)

```
muzafferi        🔴 künye yok · renk yok
incu             🔴 künye yok · renk yok   (Fars 1335-1357)
kutlughanli      🔴 künye yok · renk yok   (Kirman 1335-1357)
Hûzistan'ın sahibi   ÖLÇÜLMEDİ — muhtemelen Celâyirli (künye ✓ renk ✓)
Sîstan'ın sahibi     ÖLÇÜLMEDİ — Mihrâbânîler olabilir
```
⇒ **3 kesin + 2 olası = 3-5 künye/renk.** Teslim 9'da *"1"* demiştim.

### 🟢 SLUG TURU — dördü canlı, üçü ölü (kayda geçsin)

```
✅ CANLI   incu (İNCÜ) · kutlughanlilar · sistan · huzistan
🔴 ÖLÜ     incular (302) · kutlug-hanlilar (302) · mihrabaniler (302)
```
⚠️ Bunlar `<title>` "Arama"lı ölü değil, **302 yönlendirme** — yeni bir ölü
slug deseni. `§4`'ün *"HTTP 200 döndürür"* uyarısı bu biçimi kapsamıyor;
koordinatöre bildirildi.

### ⇒ ÖNERİM — iki şık, kararı koordinatöre bırakıyorum

**(i) DOĞRU YAP:** 3 künye + 3 renk · `1357` bölmesi · `1357` için bir
kronoloji maddesi (*"Mübârizüddin İncûlular'ı ortadan kaldırıp Kirman'ı
aldı"* — TDV `muzafferiler` kaynaklı, gerçek olay). Hûzistan ve Sîstan
**ayrı kalem**, dokunulmaz.

**(ii) PARK ET:** bu kohort artık **şikâyet üretmiyor** — dokuz enklav
kapandı, 22 nokta komşularıyla aynı renkte. `ONCELIK.md` mantığıyla
şikâyetsiz iş bekler.

🟢 **Ben (ii)'yi öneriyorum.** Gerekçe: maliyet 1'den 3-5'e çıktı, RENK 2'nin
kutusu dolu, ve kazanç görsel değil **kavramsal** (harita aynı görünecek,
yalnız etiket doğrulaşacak). Şikâyeti olan başka iş varken bu sıraya girmemeli.

📌 Ve bu, koordinatörün pencere 2 için kullandığı ölçütün **üçüncü kez**
uygulanması: *"şikâyeti olan işi bırakıp şikâyeti olmayana geçmek önceliği
tersine çevirir."* Bu sefer kendi işime uyguluyorum.

---

## TESLİM 11 — Hûzistan (8 nokta): hüküm **BULUNAMADI**, ama yanında bir bulgu

### ① `2s` TAHMİNİ — doğru evrende (koordinatörün uyarısı)

`denetle.py:1386` → `degismez2(Y_cekirdek, O, ("s",))`. Evreni **koddan**
okudum, canlı veriden değil:
```
kategori   YALNIZ `s:`          (`d:`/`v:` sayılmaz)
dosya      Y_cekirdek           (KUYRUK_DOSYALARI hariç)
```
Sekiz Hûzistan noktasının **sekizi de `yerlesimler.js`** ⇒ çekirdekte,
`2s` onları **sayıyor.**

Çekirdek `s:` ayrık kırılma tarihi: **689.** Aday sınırların durumu:

| tarih | ne | çekirdek `s:` kümesinde | `2s` etkisi |
|---|---|---|---|
| `1335-12-01` | mevcut başlangıç | ✓ VAR | **+0** |
| `1393-01-01` | mevcut bitiş | ✓ VAR | **+0** |
| `1357-01-01` | Muzafferî/İncû bölmesi | ✓ VAR | **+0** |
| `1396-01-01` | TDV: Muhammed Sultan | 🔴 YENİ | **+1** |
| `1408-01-01` | TDV: Celâyirlî kaleleri | 🔴 YENİ | **+1** |

🟢 **Sınır oynatmayan her adlandırma için `2s` Δ = 0.**
📌 Ve `1357`nin zaten kırılma günü olması Teslim 10'daki endişemi hafifletiyor:
Muzafferî bölmesi yapılırsa **`2s` sayısal olarak da 0** (yalancı geçiş
uyarısı ayrı mesele, o duruyor).

### ② HÜKÜM: **TDV'YE BASMIYOR** — bulunamadı

`huzistan` ✓ CANLI, ama **1335-1393 penceresini kapsamıyor.** Verdiği iki
çıpanın ikisi de pencerenin **dışında:**
> *"Moğol istilâsından sonra İlhanlı Hükümdarı **Abaka Han**, Hûzistan'ı
> **Luristan Atabegi I. Yûsuf Şah**'a iktâ olarak verdi."* (1270'ler)
> *"…Fars valisi **Muhammed Sultan** hâkimiyetini Luristan'dan Hûzistan'a
> kadar genişletti **(798/1396)**"*
> *"Hûzistan kaleleri **811'de (1408) Celâyirliler** tarafından zaptedildi."*

`luristan` ✓ CANLI, ama o da 1335 sonrasını söylemiyor — ve `huzistan`ın
andığı **"Hurşîdîler"i hiç anmıyor.**

⇒ **8 noktanın 1335-1393 sahibi için hükmüm: `bulunamadı`.**
Brifing `§⑥`: *"bulamadığını `bulunamadı` diye yaz — TDV'ye basmıyor diye
İŞARETLE, uydurma."* Öyle yapıyorum. **Öneri yok.**

### ③ 🟡 AMA İKİ ÇIPA VERİMİZLE ÇELİŞİYOR — kaydediyorum, çözmüyorum

```
bizde   iran 1335→1393  ·  timurlu 1393→1452
TDV     Timurlu hâkimiyeti 1396 (Muhammed Sultan) · Celâyirlî 1408
```
| # | konu | hüküm |
|---|---|---|
| H-1 | `timurlu` başlangıcı 1393 ⟷ TDV 1396 | 🟡 3 yıl, ÇELİŞKİLİ |
| H-2 | 1408 Celâyirlî devri verimizde YOK | 🟡 `timurlu 1393→1452` onu yutuyor |

⚠️ H-2'yi *"hata"* diye yazmıyorum: `§3.1 ⓪` — *"kaleleri zaptetti"* ile
*"bölgeye hâkim"* aynı soru olmayabilir. **Desen biriksin diye kaydediyorum.**
🟢 Ve Timur'un bölgede olduğu ayrıca doğrulandı (`luristan`: *"Timur bir
müddet bölgeye hâkim oldu ve **Şûs şehrinde ikamet etti**"*) — yani
`timurlu` etiketi **doğru**, tartışmalı olan yalnız günü.

### ③ 🔴 YAN BULGU — iki atabeglik, tam tarihli, atlasta HİÇ YOK

`luristan` maddesi Hûzistan'ı çözmedi ama başka bir şey verdi:
> *"**Lur-ı Büzürg (1155-1424)**"* güneydoğuda · *"**Lur-ı Kûçek (1184-1597)**"*
> kuzey ve batıda · *"zaman zaman birer İlhanlı vilâyeti statüsüne girdilerse
> de **Safevîler dönemine kadar varlıklarını korudular**"*

```
Lur-ı Büzürg  1155-1424   269 yıl
Lur-ı Kûçek   1184-1597   413 yıl   ← Safevî dönemine kadar
```
🔴 **İkisi de atlasta yok.** Ve `Luristan` (33,49K 48,36D) bir **battaniye
noktası**: `iran 1281→1508`. Yani 413 yıl yaşamış, TDV'de tam tarihli bir
atabeglik, haritada `iran` pembesi olarak duruyor.

📌 Bu, `iran` battaniyesinin **dördüncü** kullanım biçimi değil — üçüncüsünün
(A · dolgu) yeni bir örneği. Ama şunu gösteriyor: **battaniyenin altında
TDV'de tam tarihli hanedanlar var**, yani (b) işi sanıldığından daha
kaynaklanabilir.

### MALİYET (istenen biçim)
```
Hûzistan için        ÖNERİ YOK ⇒ künye 0 · renk 0 · 2s Δ 0
Lur atabeglikleri    lur-i-buzurg 🔴 · lur-i-kucek 🔴   ⇒ 2 künye + 2 renk
                     (luristan · hursidi · lur · atabeg · musasa: beşi de YOK)
```

---

## Sistem kaydı — koordinatöre bildirilenler

1. `CLAUDE.md §5` canlı taban satırı bayat (951/2 dosya → gerçekte 1713/16 dosya).
2. `BEKLEYENLER.md` **2 Ağustos tarihli, dört gün bayat.** Kullanıcının sorusu
   üzerine ölçüldü: ek oturum açma **ölçütü** yazılı (`ORGANIZASYON §1`) ve
   **talep biçimi** yazılı (`§17` dört alan), ama kuralın **ne sıklıkta
   işletileceği** yazılı değil — tetik yok.

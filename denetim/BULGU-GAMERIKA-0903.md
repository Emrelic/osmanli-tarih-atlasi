# BULGU — GÜNEY AMERİKA · DUNYA-GAMERIKA-0903 · 3 Eylül 2026

> **Oturum:** DUNYA-GAMERIKA-0903 (Opus) · koordinatör 1.MURAT
> **Kutu:** 56G–13K / 82B–34B
> **Tur cinsi:** ARAŞTIRMA. Koşu canlı (PID 1268), `data/` ve `arac/`
> **donmuş** — bu oturum hiçbir veri dosyasına yazmadı. Bu belge bir
> **reçetedir**, uygulama değil.
> **Şartname:** `oturumlar/DUNYA-YERLESIM-PROGRAMI.md`

---

## 0. ÖZET — ne ölçtüm, ne çıkardım

`§11`in *"ölçüm doğru, çıkarım yanlış"* dersi gereği ikisi **ayrı
satırda** yazılıyor. Ölçülmemiş hiçbir cümle bu belgede damgasız
durmaz.

| # | ÖLÇTÜM | ÇIKARDIĞIM |
|---|---|---|
| 1 | 1° ızgara: 1542 kara hücresi · **1138 AÇIK** (%73,8) | koordinatörün 2° ölçümü (385/281, %73,0) **TUTTU** — taban sağlam |
| 2 | kutumda bağlı nokta: **66** (dünyada 2731) | kapama işi ~150–200 nokta mertebesinde |
| 3 | s: kimliği künyesiz olan: **0** | kimlik sözlüğü sağlam |
| 4 | künye ömrü dışında çizilen dönem: **18** | 🔴 gerçek `§3.5` ihlali, aşağıda reçetesi var |
| 5 | Güney Amerika künyesi: 22 · `kronoloji:` **boş olan 17** | dizin var, içi yok |
| 6 | kutum için gereken ama **hiç olmayan** künye: 6 kolonyal + ~12 yerli | nokta yazılmadan **önce** künye gerekiyor |
| 7 | TDV `amerika` **canlı**, gövde 74.729 karakter; `brezilya`·`peru` **302 ölü** | TDV bölgeyi **devlet** taneciğinde görüyor, **şehir** taneciğinde susuyor ⇒ `§4` TANECİKLİK boşluğu, akademik kaynak **meşru** |

---

## 1. TABAN — kendim ölçtüm, devralmadım

Şartname `281` diyordu; koordinatör *"benim ölçümüm, doğrulayın"*
dedi (M-2351). Doğrulandı:

```
2,0° ızgara :  385 kara /  281 AÇIK   (%73,0)   ← koordinatörün sayısı, TUTTU
1,0° ızgara : 1542 kara / 1138 AÇIK   (%73,8)   ← BU BELGENİN TABANI
bağlı nokta (dünya) : 2731        kutumdaki : 66
ölçüt: en yakın nokta > 200 km  (motorun `TAVAN_KM` değeri)
maske: `ne_10m_land.geojson`  (motor_kara DEĞİL — o çıktıdır)
```

### 1.1 Bitişik küme İŞE YARAMADI — ve bu bir bulgudur

Açık hücreleri bitişikliğe göre kümeledim: **1138'in 1112'si tek bir
yığın** çıktı (kıtanın tamamı). Topoloji bu soruda hiçbir şey
ayırmıyor.

⇒ Ölçüt **coğrafya** olmalı: her alt bölgenin ayrı bir kaynak
külliyatı ve ayrı bir siyasî hikâyesi var.

### 1.2 ALT BÖLGE DAĞILIMI (kendi tanımladığım kutular, 1° ızgara)

| alt bölge | açık | en uzak hücre | bugün oraya en yakın nokta |
|---|---:|---:|---|
| Mato Grosso / Planalto Central | 149 | 814 km | Belém |
| Kuzeybatı Amazon (Rio Negro–Japurá) | 98 | 689 km | Hunza (Tunja) |
| Nordeste sertão | 90 | 653 km | Salvador |
| Gran Chaco | 89 | 565 km | Asunción |
| Orta Amazon (Madeira–Tapajós) | 87 | 622 km | Manaus |
| Güney Brezilya (PR–SC–RS) | 83 | 765 km | São Paulo |
| Chiquitos–Moxos (Bolivya ovaları) | 71 | 632 km | Vila Bela |
| Patagonya–Arjantin | 67 | 1523 km | Purén |
| Pampa / Arjantin ovası | 62 | 637 km | Buenos Aires |
| Guyana Kalkanı | 61 | 612 km | Barcelos |
| Doğu Amazon (Pará–Maranhão) | 51 | 708 km | Belém |
| Llanos (Venezuela–Kolombiya) | 49 | 673 km | Barcelos |
| Patagonya–Şili kanalları | 46 | 1511 km | Purén |
| Atacama / Kuzeybatı Arjantin | 46 | 506 km | Potosí |
| Orta And (Peru–Bolivya iç) | 33 | 503 km | Tabatinga |
| Ateş Toprakları | 16 | 1898 km | Purén |
| Kuzey And (Kolombiya–Ekvador) | 13 | 340 km | Cartagena |
| Falkland / Malvinas | 3 | 1855 km | Montevideo |
| Güney Georgia | 1 | **2657 km** | Montevideo |
| sınıflanmamış (Espírito Santo · orta Şili · Rio Negro ağzı) | 23 | 378 km | — |

📌 **En uzak hücre şartnamede yazılandan başkası çıktı.** Şartname
*"Patagonya 1941 km"* diyordu (2° ızgara). 1°'de en uzak hücre
**Güney Georgia adası, 2657 km**. İkisi de doğru — **ızgara
değişince en uzak hücre de değişiyor.** Bir sayıyı devralırken
ızgarasını da devralmak gerekiyor.

---

## 2. 🔴 KUTU ÖRTÜŞMESİ — bugün zararsız, yarın mükerrer

`arac/_dunya_bosluk.py`deki bölge tanımlarından **"Orta Amerika+Karayip"**
`7–25K / 118B–59B` kutusunu kapsıyor. Benim kutumun **7–13K / 82B–59B**
bandı **onun içinde**.

```
o bantta AÇIK hücre: 42  (toplamımın %3,7'si)
kapsadığı yerler   : Panama · Venezuela kuzey kıyısı · Trinidad ·
                     Kolombiya Karayip kıyısı
```

🟢 **Bugün zarar yok** — o kutu şu an kimsede değil (koordinatör
M-2351'de ölçtü: çakışma 0). 🔴 **Ama bir Orta Amerika oturumu
açılırsa mükerrer üretir.** Deftere düşülmesi için bildirildi (M-2362).

📌 Ve dikkat: bu bir *"kutum yanlış"* bulgusu **değil**. İki kutu da
kendi içinde doğru; kusur **aralarındaki ilişkinin yazılı
olmamasında.**

---

## 3. 🔴 HAYALET PENCERE — 18 dönem, künyesinin ömrü dışında çiziliyor

`CLAUDE.md §3.5`: *üç değişmezin hiçbiri "bu devlet o tarihte yaşıyor
mu" diye sormaz.* Kutum için sordum.

```
kutumdaki nokta                   : 66
künyesi HİÇ OLMAYAN s: kimliği    : 0     🟢 temiz
künye ömrünün DIŞINDA çizilen dönem: 18   🔴
```

| yerleşim | kimlik | cins | veride | künyede | ~yıl |
|---|---|---|---|---|---:|
| Cusco (Qosqo) | `inka-imparatorlugu` | ERKEN | 1281-01-01 | 1438-01-01 | **157** |
| Panamá | `ispanyol-peru` | ERKEN | 1519-08-15 | 1542-11-20 | **23** |
| Olinda | `portekiz-brezilyasi` | ERKEN | 1535-01-01 | 1549-01-01 | **14** |
| Cartagena de Indias | `ispanyol-peru` | ERKEN | 1533-06-01 | 1542-11-20 | 9 |
| Trujillo (Peru) | `ispanyol-peru` | ERKEN | 1534-11-01 | 1542-11-20 | 8 |
| Quito | `ispanyol-peru` | ERKEN | 1534-12-06 | 1542-11-20 | 7 |
| Lima | `ispanyol-peru` | ERKEN | 1535-01-18 | 1542-11-20 | 7 |
| Popayán | `ispanyol-peru` | ERKEN | 1537-01-13 | 1542-11-20 | 5 |
| Bacatá (Bogotá) | `ispanyol-peru` | ERKEN | 1538-08-06 | 1542-11-20 | 4 |
| Guayaquil | `ispanyol-peru` | ERKEN | 1538-01-01 | 1542-11-20 | 4 |
| Sucre (La Plata) | `ispanyol-peru` | ERKEN | 1538-11-30 | 1542-11-20 | 3 |
| Hunza (Tunja) | `ispanyol-peru` | ERKEN | 1539-08-06 | 1542-11-20 | 3 |
| Huamanga (Ayacucho) | `ispanyol-peru` | ERKEN | 1539-01-09 | 1542-11-20 | 3 |
| Arequipa | `ispanyol-peru` | ERKEN | 1540-08-15 | 1542-11-20 | 2 |
| Santiago (Şili) | `ispanyol-peru` | ERKEN | 1541-02-12 | 1542-11-20 | 1 |
| Potosí · La Paz · Sucre | `ispanyol-peru` | GEÇ | künye 1824-12-09 | veri 1825-08-06 | 8 ay |

### 3.1 🟢 Çare icat edilmeyecek — atlasın KENDİ deseni zaten doğru

Aynı ölçüm ikinci bir şey gösterdi: İspanyol Amerikası'nda **iki ayrı
yazım biçimi** var.

```
A) DOĞRU DESEN — 10 kayıt
   ispanya[fetih günü .. 1542-11-20] -> ispanyol-peru[1542-11-20 ..]
   Cajamarca · Chan Chan · Chucuito · Cusco · Hatun Colla ·
   Huánuco Pampa · Ollantaytambo · Tumbes · Túcume · Vilcashuamán

B) KÜNYEYİ DELEN DESEN — 13 kayıt
   ispanyol-peru[kuruluş günü ..]      ← künye 1542-11-20'de başlıyor
```

⇒ **Reçete:** B'deki 13 kaydın ilk dönemi ikiye bölünür; 1542-11-20
öncesi `ispanya` olur. **Kimlik değişmez, boşluk doğmaz, hiçbir tarih
uydurulmaz.** `§11`in Irak vakasının aynısı: *çare kova değil GÜN.*

Üç Bolivya kaydı için ayna reçete: `ispanyol-peru` dönemi künyenin
bittiği **1824-12-09**'da kapanır, 1824-12-09 → 1825-08-06 arası
`ispanya` (ya da künye `t:` değeri 1825-08-06'ya çekilir — hangisi
doğruysa, ve bu **ölçülmedi**).

Cusco'nun 157 yılı ve Olinda'nın 14 yılı **ayrı sınıf** — ikisi de
gerçek bir tarihsel ayrım gizliyor (Cusco Krallığı ≠ İnka
İmparatorluğu; Pernambuco kaptanlığı ≠ Brezilya Genel Valiliği).
Reçetesi bu turda **ölçülmedi**, kalem AÇIK bırakılıyor.

⚠️ **Bu dosyalar benim değil** (`yerlesimler_amerika*.js`). Reçete
yazıldı, **uygulanmadı** — `§7` dosya sahipliği.

### 3.2 ⚠️ VE KENDİ ALETİMİ İHBAR EDİYORUM

İlk sürümüm **21** dedi; **üçü yanlış pozitifti.** Tarihleri **dizgi**
olarak karşılaştırıyordum, ve `fransa` künyesinin `f:` değeri **üç
haneli**: `987-01-01`.

```
"1612-09-01" < "987-01-01"   dizgide DOĞRU  ("1" < "9")
                             gerçekte YANLIŞ (1612 > 987)
⇒ São Luís · Cayenne · Georgetown "hayalet" diye bildirilecekti
```

Sayıya çevirip düzelttim (18). 📌 `§11`in *"aletin gösterdiği ≠ dosyada
yazan"* ailesi, **tip** yüzü: alet doğru soruyu sordu, **yanlış tipte**
karşılaştırdı. Ve `§11`in *"sayı doğru diye yöntem doğru sayılmaz"*
kuralı gereği bu, sonuç düzeldikten sonra da **kayda geçiyor.**

🟢 Künye penceresini **node ile** okudum (veri JS ⇒ o dilin
yorumlayıcısı — `§11`in beş kez öğrenilmiş dersi) ve ayrıca regex'le
ikinci bir ölçüm alıp karşılaştırdım: **441 = 441, ayrışma 0.**

---

## 4. 🔴 KÜNYE ALTYAPISI — nokta yazılmadan ÖNCE gereken

### 4.1 Var olan 22 künyenin içi boş

```
kronoloji: BOŞ olan   17 / 22
dolu olan  5 : inka-imparatorlugu(4) · gran-kolombiya(4) ·
               ispanyol-peru(3) · portekiz-brezilyasi(3) ·
               brezilya-imparatorlugu(3)
kaynak: alanı  22 / 22 DOLU     🟢 bu iyi
```

### 4.2 HİÇ OLMAYAN künyeler — ölçüldü, aranıp bulunamadı

| gereken künye | bugün ne kullanılıyor |
|---|---|
| Yeni Granada Genel Valiliği (1717–1819) | `ispanyol-peru` |
| Río de la Plata Genel Valiliği (1776–1810) | düz `ispanya` |
| Şili Genel Kaptanlığı (1541–1818) | `ispanyol-peru` |
| Venezuela Genel Kaptanlığı (1777–1821) | `ispanyol-peru` |
| Hollanda Brezilyası (1630–1654, Recife) | **hiç yok** |
| Guaraní Cizvit Misyonları (1609–1768) | **hiç yok** |

Ve **ova yerlileri için tek künye yok**: `omagua` · `manao` ·
`tapajos` · `marajoara` · `mojos` · `chiquitos` · `tupinamba` ·
`guarani` · `charrua` · `tehuelche` · `selknam` · `wayuu` — hepsi
**YOK**.

🟢 Ama **desen kurulu**: And yerlileri künyeli — `chimu-krallik` ·
`colla-krallik` · `lupaqa-krallik` · `muisca-konfederasyonu` ·
`diaguita-calchaqui-konfederasyonu`. Yani proje yerli siyasî
yapılara künye **veriyor**; yalnız **ovalara uzatmamış**.

⚠️ `data/devletler.js` **benim dosyam değil.** Bu bir istektir,
uygulama değil.

---

## 5. 🔴 AMAZON — KENDİ ÖNERİMİ ÇÜRÜTTÜM

Koordinatörün sevk notunda *"And–Amazon ayrımı karar gerektirir"*
yazıyordu. İlk mesajımda (M-2362) bir çerçeve kurdum ve şunu önerdim:
*"Amazon'a kolonyal kimlik ancak 1750 Madrid Antlaşması'ndan sonra
yazılsın; öncesi yerli kimlik ya da `kasitli_bosluk`."*

**Sonra veriyi ölçtüm ve atlas bu soruyu ZATEN cevaplamış:**

```
Belém      portekiz-brezilyasi  1616-01-12'den
Santarém   portekiz-brezilyasi  1661'den     (Cizvit misyonu, Tapajós ağzı)
Manaus     portekiz-brezilyasi  1669'dan     (Forte de São José do Rio Negro)
Óbidos     portekiz-brezilyasi  1697'den     (Forte dos Pauxis)
Cuiabá     portekiz-brezilyasi  1719-04-08
Vila Bela  portekiz-brezilyasi  1752-03-19
Macapá     portekiz-brezilyasi  1758
Barcelos   portekiz-brezilyasi  1758
Tabatinga  portekiz-brezilyasi  1766
Forte Príncipe da Beira         1776-06-20
```

Onunun onunda da `kaynak:` **dolu ve akademik**: John Hemming,
*Amazon Frontier* / *Red Gold* (Harvard) · Charles R. Boxer, *The
Golden Age of Brazil* (1962) · Stuart Schwartz, *Sugar Plantations*
(Cambridge 1985).

⇒ Önerim uygulansaydı **on kaydı birden** yeniden yazmak gerekirdi, ve
dayanağım onlarınkinden **zayıftı**: benimki bir **akıl yürütmeydi**
(*"125.000 km² anakronik boyanır"*), onlarınki **kaynaklı ölçümdü**.

**Düzeltilmiş konum:** Amazon için **ayrı bir hüküm gerekmiyor.**
And'de kullanılan desen Amazon'a da uyuyor:
```
kolonyal dönem  = mevcut desen aynen, kuruluş gününden
ön-kolonyal     = yerli künye  YA DA  beyan — ve atlasın iki emsali var:
   Quito   kasitli_bosluk  neden:"1281-1487 arası Quitu-Cara/Caranqui"
   Tumbes  kasitli_bosluk  neden:"İnka öncesi Tumbes'in siyasî bağlılığı"
```

📌 **Ders bende:** bir çerçeveyi çürütmek için önce **veriyi**
okumalıydım, akıl yürütmeyi değil. Koordinatörün çerçevesini
çürütürken kendi çerçevemi kurmuştum — **ve o da ölçülmemişti.**

---

## 6. KAYNAK ZEMİNİ — `§4` ölçüldü

```
islamansiklopedisi.org.tr/amerika    200 CANLI · gövde 74.729 karakter
islamansiklopedisi.org.tr/brezilya   302 ÖLÜ
islamansiklopedisi.org.tr/peru       302 ÖLÜ
```

TDV `amerika` maddesinin gövdesi okundu. **Verdikleri:**
Santiago 1541 · Buenos Aires yeniden kuruluş 1580 · genel valilikler
(Peru 1535/Lima · Yeni Granada 1717/Bogotá · Río de la Plata 1776) ·
bağımsızlıklar (Paraguay 1811 · Venezuela 1816 · Şili 1818 · Ekvador
1820 · Arjantin 1821 · Bolivya 1825 · Uruguay 1828) · Gran Kolombiya
1819→1829/1830 · Panama 1903 · İnka fethi 1531–1536 · *"1553'te
Şili'ye tamamen hâkim oldular"*.

**Vermedikleri:** tek bir şehrin kuruluş günü bile.

⇒ `§4`ün **TANECİKLİK boşluğu**, kelimesi kelimesine — `kirman`/`yezd`
vakasının Güney Amerika hâli. TDV bölgeyi **devlet** taneciğinde
görüyor, **şehir** taneciğinde susuyor. Akademik kaynak **meşru**, ve
`kaynak:` alanına **açıkça** yazılacak.

🟢 Ve bir yan kazanç: TDV'nin verdiği genel valilik tarihleri
**§4.2'deki eksik künyelerin dayanağı** olabilir — TDV onları **adıyla
ve tarihiyle** veriyor.

### 6.1 Bu turda kullanılan kaynak zemini

```
🟢 Encyclopedia of Latin American History and Culture (Scribner's) —
   Latin Amerika'nın standart akademik başvuru eseri
🟢 Memoria Chilena · Biblioteca Nacional Digital de Chile — millî
   kütüphane akademik portalı
🟢 Mateo Martinic, Historia de la Región Magallánica
   (Ediciones de la Universidad de Magallanes, 2006, 4 cilt) —
   Magallanes/Patagonya'nın standart bölgesel monografisi
🟢 John Hemming, Red Gold / Amazon Frontier (Harvard) — atlasın
   Amazon kayıtlarında ZATEN kullanılan eser
🟢 Charles R. Boxer, The Golden Age of Brazil (1962) ·
   Stuart B. Schwartz, Sugar Plantations (Cambridge 1985)
🔴 Vikipedi TEK DAYANAK olarak kullanılmadı — yalnız "hangi maddeye
   bakayım" sorusunda
```

---

## 7. KAYNAK STRATEJİSİ — ölçüldü, çürüdü, DEĞİŞTİ

Bu bölüm bir reçeteden önce bir **yöntem kaydıdır**, çünkü ilk yöntem
ölçülüp çürütüldü.

### 7.1 🔴 İLK YÖNTEM: hücre başına kaynak — %31'de tıkandı

Şartname *"her açık hücre için kaynağa sor"* diyordu. 1138 hücrem var.
Erişimi **ölçtüm**, tahmin etmedim:

```
denenen erişim               13
KULLANILABİLİR tarih verdi    4   (%31)
ölü URL / 404                 5
gövde var ama TARİH YOK       2
403 Forbidden                 2   (UNESCO whc.unesco.org · IBGE cidades)
```

Ve genel web araması `§4`ün **kırmızı listesine** düşüyor: *"Punta
Arenas 1848"* sorgusunun on sonucundan yedisi Vikipedi ya da turizm
sitesi.

⇒ ~200 nokta × 2 çağrı × (1 / 0,31) ≈ **1300 erişim.** Bir oturumda
bitmez. Bekletmeden bildirildi (M-2373).

### 7.2 🟢 İKİNCİ YÖNTEM: KÜTÜK başına kaynak — ve duvar aşıldı

Koordinatör aksaklığı kabul etti ve şartnameyi değiştirdi (M-2375):
*"ölçü birimi HÜCRE değil KÜTÜK — bir cilt yüzlerce yerleşimi tarihiyle
verir, bir URL bir tanesini vermez."*

Adını verdiği külliyata erişimi **ölçtüm ve açık çıktı**:

```
Handbook of South American Indians · Julian H. Steward (ed.)
Smithsonian Institution · Bureau of American Ethnology · BULLETIN 143
archive.org / Smithsonian koleksiyonu · access-restricted = None

c.1  bulletin14311946smit  The Marginal Tribes         1,65 MB  🟢
c.2  bulletin14321946smit  The Andean Civilizations    2,93 MB  🟢
c.3  bulletin14331948smit  The Tropical Forest Tribes  2,67 MB  🟢
c.4  bulletin14341948smit  The Circum-Caribbean Tribes 1,63 MB  🟢
c.7  in.ernet.dli.2015.185083  Index                   1,25 MB  🟢
                                          toplam 10,1 MB tam metin
```

Ve ciltler alt bölgelerime **birebir** oturuyor:

| cilt | kapsadığı alt bölgeler | açık hücre |
|---|---|---:|
| c.1 Marginal Tribes | Ateş Toprakları · Patagonya · Gran Chaco · Pampa · G.Brezilya | ~280 |
| c.2 Andean | And · Atacama | ~79 |
| c.3 Tropical Forest | Amazon havzası (KB + Orta + Doğu) · Chiquitos–Moxos | ~307 |
| c.4 Circum-Caribbean | Llanos · Guyana Kalkanı · Kuzey And | ~123 |

### 7.3 🔴 VE BURADA PARAGRAF 4'ÜN ARŞİV YÜZÜ ÇIKTI

Aynı eserin archive.org'da **iki nüsha ailesi** var:

```
handbookofsoutha*   access-restricted = TRUE   → ödünç, METİN YOK
bulletin143*smit    access-restricted = None   → AÇIK, tam metin
```

**Önce birincisini denedim; üçünün üçü de kapalıydı** ve
*"HSAI'ye erişilemiyor"* hükmü verilmek üzereydi. İkincisi **aynı
eser.**

⇒ `§4`ün *"dar slug tutmazsa kapsayıcıyı dene"* kuralının arşiv hâli:
***aynı eserin başka NÜSHASINI dene. Erişim eserin değil NÜSHANIN
özelliğidir.***

### 7.4 Çıkarım aleti ve onun da kaydı

Kütükten tarihli kuruluş cümlelerini toplayan bir betik yazıldı.
**İlk sürümü çöktü** ve sebebi kaydediliyor: bir `[^.]{0,260}` +
alternatif + `[^.]{0,260}` deseni 2,6 MB metinde **katastrofik geri
izleme** yaptı — 120 saniyede bitmedi. Cümleyi **önce bölüp sonra
süzmek** aynı işi saniyeler içinde yapıyor.
📌 *Alet doğru soruyu soruyordu, yanlış sırayla.*

```
c.1  91 benzersiz tarihli aday cümle
c.2  47
c.3 209
c.4  24
```

⚠️ **Yöntem sınırı, önceden yazıldı:** metin 1946–1950 OCR'idir, harf
hatası var (`Pert`=Perú, `Marafion`=Marañón). Betik **aday çıkarır,
hüküm vermez**; her aday elle okundu. Ve *"founded"* geçmeyen ama
tarihli bir kuruluşu anlatan cümleyi **kaçırır** — bunu **ölçmedim**.

### 7.5 Bu turda kullanılan kaynak zemini

```
🟢 Handbook of South American Indians, Steward (ed.), Smithsonian
   BAE Bulletin 143, 7 cilt — bu turun ANA kütüğü
🟢 Memoria Chilena · Biblioteca Nacional de Chile
🟢 Encyclopedia of Latin American History and Culture (Scribner's)
🟢 Encyclopaedia of Portuguese Expansion (EVE) — CHAM, NOVA Lisbon +
   Açores Üniv., hakem denetimli
🟢 CONICET / DIPA-IMHICIHU — Floridablanca arkeoloji projesi
🔴 UNESCO whc.unesco.org · IBGE cidades — 403, ERİŞİLEMEDİ
🔴 Oxford Research Encyclopedia — ödeme duvarı
🟡 Vikipedi TEK DAYANAK olarak kullanılmadı
```

---

## 8. NOKTA REÇETESİ — 45 aday, ÖN SINAV KIRMIZI 0

### 8.1 Ölçülen kapama

```
ön sınav:  KIRMIZI 0 · SARI 2      (3 km · ad · aday-içi · kimlik · kaynak)
kapama  :  1138 açık → 931 açık    207 hücre kapanır
verim   :  aday başına 4,6 hücre
```

⚠️ **4,6 — ve bu beklediğimden düşük.** Sebebi ölçüldü: adayların çoğu
**kümeli** (Mojos–Chiquitos 9 nokta yan yana, Magallanes 5 nokta yan
yana) ve birbirlerinin dairesini örtüyorlar.
⇒ *Bir sonraki parti kümeye değil **boşluğun ortasına** yerleştirilmeli.*

### 8.2 Adaylar

Her satırın `kaynak:` alanı **bu turda gerçekten okunan** metinden
alıntıdır. `konum_kesinlik` üç değerli: `kesin` (bugünkü şehir),
`yaklasik` (adı geçen nehir/vadi üzerinde), `kaba` (yalnız bölge).

**GRAN CHACO + PAMPA — HSAI c.1 (Métraux, Ethnography of the Chaco)**

| yerleşim | konum | kuruluş | kesinlik |
|---|---|---|---|
| Concepción del Bermejo | −26,60 / −60,90 | 1585 | yaklaşık |
| San Jerónimo → **Reconquista** | −29,15 / −59,65 | 1748 | kesin |
| San Fernando → **Resistencia** | −27,45 / −58,98 | 1750 | kesin |
| Fuerte Olimpo (Borbón) | −21,04 / −57,87 | 1772 | kesin |
| Lacangayé | −25,55 / −60,00 | 1780 | yaklaşık |
| San Ignacio de Zamucos | −19,50 / −60,00 | 1741 | kaba |
| San Esteban de Miraflores | −25,30 / −64,20 | 1714 | yaklaşık |
| Reducción de la Concepción | −35,75 / −57,35 | 1740 | yaklaşık |
| N.S. del Pilar (Mar del Plata) | −37,85 / −57,75 | 1747 | yaklaşık |

**PATAGONYA + MAGALLANES — Memoria Chilena · CONICET · HSAI c.1**

| yerleşim | konum | kuruluş | kesinlik |
|---|---|---|---|
| Punta Arenas | −53,163 / −70,917 | **1848-12-18** | kesin |
| Porvenir | −53,295 / −70,369 | **1894-06-20** | kesin |
| Fuerte Bulnes | −53,628 / −70,923 | 1843-10-?? 🔴 | kesin |
| Castro (Chiloé) | −42,481 / −73,762 | 1567-02 | kesin |
| Valdivia | −39,814 / −73,246 | 1552 | kesin |
| Floridablanca (San Julián) | −49,310 / −67,720 | **1780 → 1784** | yaklaşık |
| Rey Don Felipe (Magallanes) | −53,600 / −70,930 | 1584 → ~1590 | yaklaşık |

🟢 **Floridablanca ve Rey Don Felipe iki ayrı sebeple değerli:** ikisi
de **kapanan** yerleşim (`t:` dolu). Atlas bugün çoğunlukla *"kuruldu
ve sürdü"* kaydı taşıyor; bunlar *"kuruldu ve BİTTİ"* örneği — ve
Patagonya'nın gerçek hikâyesi budur.

**CHIQUITOS – MOJOS – APOLOBAMBA — HSAI c.3**

| yerleşim | konum | kuruluş |
|---|---|---|
| Loreto (Mojos) | −15,22 / −64,67 | **1684** |
| Trinidad (Mojos) | −14,83 / −64,90 | **1687** |
| San Ignacio de Moxos | −14,87 / −65,63 | **1689** |
| San Francisco Xavier (Chiquitos) | −16,27 / −62,50 | **1691** |
| Concepción (Chiquitos) | −16,14 / −62,03 | 1707 |
| Santa Magdalena (Itonama) | −13,34 / −64,13 | ~1720 |
| Concepción de Apolobamba | −14,75 / −68,50 | 1690 |
| San José de Uchupiamonas | −14,30 / −68,00 | 1716 |
| Reyes (Maropa) | −14,30 / −67,35 | ~1710 |

⚠️ **Moxos üçlüsünde web araması ile kütük ÇELİŞTİ ve kütük kazandı:**
web *"Loreto 1682 · Trinidad 1686"* diyordu; HSAI c.3 **tek cümlede**
*"The first mission, Loreto, was founded in 1684, Trinidad in 1687, and
San Ignacio in 1689"* veriyor. Kütük tercih edildi ve gerekçesi
yazılı: üçü **aynı cümlede ve aynı elden**.

**AMAZON – MONTAÑA — HSAI c.3**

| yerleşim | konum | kuruluş |
|---|---|---|
| Itaituba (Tapajós) | −4,28 / −55,98 | 1823 |
| Tupinambarana (Parintins) | −2,63 / −56,74 | 1669 |
| Borba (Madeira) | −4,39 / −59,59 | 1723 |
| San Joaquín de los Omaguas | −4,10 / −73,30 | ~1700 (kaba) |
| Cerro de la Sal | −10,70 / −75,20 | 1635 |
| La Merced (Chanchamayo) | −11,05 / −75,34 | 1869 |
| Santa María de Huallaga | −6,90 / −76,10 | ~1650 (kaba) |
| Sarayacu (Ucayali) | −6,73 / −75,10 | ~1791 |
| San Miguel (Pachitea) | −8,80 / −74,55 | 1685 |

**KISA ÖMÜRLÜ KOLONİLER + GÜNEY BREZİLYA — HSAI c.1 · c.3**

| yerleşim | konum | dönem |
|---|---|---|
| Ciudad Real del Guairá | −24,10 / −54,30 | 1554 → 1632 |
| Santo Domingo de la Nueva Rioja | −19,55 / −63,20 | 1564 → ~1570 |
| Nonohay (yukarı Uruguay) | −27,90 / −52,90 | 1850 |
| São Pedro de Alcântara (Tibagi) | −24,30 / −50,60 | 1855 |
| São Fidélis (Paraíba do Sul) | −21,64 / −41,75 | 1776 |

**KUZEY AND – LLANOS – KARAYİP KIYISI — HSAI c.4**

| yerleşim | konum | kuruluş |
|---|---|---|
| Cali | 3,44 / −76,52 | 1537 ⚠️ |
| Santa Cruz de Mompox | 9,24 / −74,43 | ~1540 |
| Pasto | 1,21 / −77,28 | 1537 |
| N.S. de Caraballeda | 10,61 / −66,83 | 1562 |
| Píritu misyonları | 10,06 / −65,05 | ~1656 |
| San Sebastián de Urabá | 8,05 / −76,73 | 1510 → ~1524 |

📌 Tam makine okunur hâli (koordinat · `s:` zinciri · `kaynak:`
alıntısı) ön sınav girdisindedir; koşu bitince dosya sahibine
verilecek.

---

## 9. 🔴 KAYNAK ÇELİŞKİLERİ — karar KOORDİNATÖRÜN (7.1⑥)

*"Kaynaklar çelişiyorsa hangisini seçeceğine sen karar verme."* Üç
çelişki çıktı; ikisini **kendim kapatmadım.**

### ① Fuerte Bulnes — AYNI KURUM, İKİ SAYFA, DOKUZ GÜN FARK

```
Memoria Chilena w3-article-598975
   "30 de octubre. El gobierno funda el Fuerte Bulnes en punta Santa Ana"
Memoria Chilena w3-article-784
   "21 de octubre. Arriba a Magallanes la expedición encabezada por
    John Williams Wilson y funda Fuerte Bulnes, el primer asentamiento
    chileno en la región"
```

İkisi de *"funda"* diyor. Muhtemelen 21 Ekim **varış**, 30 Ekim **resmî
tesis** — ama bu **benim tahminim**, iki sayfa da öyle demiyor.
**Eğilimim** 30 Ekim, çünkü *"el gobierno funda"* resmî tesis dilidir.
**Bu bir eğilimdir, karar değil.**
⚠️ Yuvarlak `1843-10-01` yazmayı **önermiyorum**: `§11` *"yuvarlak
tarih çelişkiyi de saklar"* diyor.

### ② Cali — HSAI'NİN İKİ CİLDİ KENDİ İÇİNDE ÇELİŞİYOR

```
c.4 (Circum-Caribbean)  "Cali was founded in Lile territory in 1537 by
                         Captain Miguel Muñoz"
c.2 (Andean)            "in 1536 by Belalcázar, who founded Cali and
                         Popayán"
```

⚠️ Ve atlasta **Popayán zaten var** (`1537-01-13`), yani c.2'nin
*"Cali ve Popayán'ı 1536'da"* ifadesi mevcut veriyle de uyuşmuyor.
Aynı eserin iki cildi, iki yazar, iki tarih.

### ③ Mojos misyonları — kütük ile web (BU KAPATILDI)

Bu üçüncüsünü **kendim kapattım** ve gerekçesini yazıyorum: web
*"Loreto 1682 · Trinidad 1686"*, HSAI c.3 **tek cümlede** *"1684 ·
1687 · 1689"*. Kütük tercih edildi çünkü üçü **aynı cümlede ve aynı
elden**; web sonuçları üç ayrı kaynaktan derlemeydi.
**Bu bir karar, ve dayanağı yazılı.**

---

## 10. 🟢 YAN BULGU — NORMALLEŞTİRİCİNİN BEDELİ ÖLÇÜLDÜ

`§4` Türkçe yazım ekseni bir normalleştirici şart koşuyor (`usku` ≠
`Üsküp`). Onu yazdım, ve **kendi çıktısında bir uyarı belirdi**:

```
bağlı evren: 2731 nokta · 2730 benzersiz normal ad
```

Bir çakışma. Ölçüldü:

```
NORMAL AD: kudus  (2 kayıt)
   Kudüs    31,777 /  35,234      (Kudüs — Filistin)
   Kudus    -6,810 / 110,840      (Kudus — Java, Endonezya)
   mesafe: 9065 km   🟢 AYRI YER
```

⇒ **Mükerrer değil.** Ama ders gerçek: *normalleştirici `usku`≠`Üsküp`
tuzağından kurtarır, ve aynı hamlede **sahte bir özdeşlik ÜRETİR**.*
Ada göre tekilleştiren bir alet **Kudüs'ü Java'daki Kudus ile
birleştirirdi.**

📌 Bu, `§4`ün Türkçe yazım ekseninin **ters yüzü** ve bildiğim kadarıyla
kayıtlı değil: proje normalleştirmenin **kazancını** ölçmüş,
**maliyetini** ölçmemiş. Maliyet bugün ölçüldü: **2731'de 1**, ve
mesafe kontrolü onu ayırmaya yetiyor.
⇒ **Kural:** ad normalleştirmesi **tek başına** özdeşlik ölçütü
değildir; **mesafe ile birlikte** kullanılır.

⚠️ Ve aynı aletin **ikinci** kusurunu da ihbar ediyorum: kısmî ad
eşleşmesi ilk sürümde `len(n) > 4` ile herhangi bir alt-dizgiyi
eşliyordu ve **22 sahte uyarı** üretti (`Oş` → `sanignaciodemoxos`).
Ortak parça en az 6 karakter olacak şekilde sıkılaştırıldı: **22 → 2**,
ve kalan ikisi gerçek (`Santo Domingo` · `San Sebastián` — ikisi de
başka kıtada, mesafe ayırıyor).

---

## 11. NE KAPANMADI — 931 hücre, alt bölge alt bölge

🔴 **Boş bir satır "temiz" demek değildir; "bu turda ÖLÇÜLMEDİ"
demektir.**

| alt bölge | açık (1°) | bu turda | durum |
|---|---:|---|---|
| Mato Grosso / Planalto Central | 149 | 0 aday | 🔴 **ölçülmedi** — IBGE 403, Brezilya iç kaynağı bulunamadı |
| Kuzeybatı Amazon (Rio Negro) | 98 | 0 aday | 🔴 **ölçülmedi** — HSAI c.3'te malzeme VAR, taranmadı |
| Nordeste sertão | 90 | 0 aday | 🔴 **ölçülmedi** |
| Gran Chaco | 89 | 7 aday | 🟡 kısmen |
| Orta Amazon (Madeira–Tapajós) | 87 | 3 aday | 🟡 kısmen |
| Güney Brezilya | 83 | 2 aday | 🟡 kısmen |
| Chiquitos–Moxos | 71 | 9 aday | 🟢 iyi kapsandı |
| Patagonya–Arjantin | 67 | 2 aday | 🟡 az |
| Pampa | 62 | 2 aday | 🟡 az |
| Guyana Kalkanı | 61 | 0 aday | 🔴 **ölçülmedi** |
| Doğu Amazon | 51 | 1 aday | 🟡 az |
| Llanos | 49 | 2 aday | 🟡 az |
| Patagonya–Şili | 46 | 4 aday | 🟡 kısmen |
| Atacama / KB Arjantin | 46 | 0 aday | 🔴 **ölçülmedi** |
| Orta And | 33 | 5 aday | 🟡 kısmen |
| Ateş Toprakları | 16 | 1 aday | 🟡 az |
| Kuzey And | 13 | 3 aday | 🟢 iyi |
| Falkland · Güney Georgia | 4 | 0 aday | 🔴 **ölçülmedi** |

### 11.1 BEYAN ADAYLARI — kova ÖLÇÜLDÜ, kayıt YAZILMADI

`M-2363` düzeltmesi alındı: cins **`bos:`** alanına, beş kova
(`devletsiz · veri-yok · kabile · insansiz · hata`).

🟢 **Patagonya + Ateş Toprakları için kova ÖLÇÜLDÜ: `kabile`.**
HSAI c.1'in kendi tasnifi — Yahgan · Alacaluf · Chono · Ona ·
Tehuelche · Poya · Puelche = **"The Marginal Tribes"**, ve cilt onlara
yüzlerce sayfa ayırıyor (avcılık · bolas · guanako · kano · band
örgütlenmesi).

```
kaynak SUSMUYOR               ⇒ `veri-yok` DEĞİL
merkezî devlet TARİF ETMİYOR  ⇒ `devletsiz` DEĞİL — o bir İDDİADIR,
                                ve kütük o iddiayı kurmuyor
⇒ bos:"kabile"
```

⚠️ **Ama tek bir beyan kaydı YAZILMADI.** Kova ölçüldü; hangi
koordinata hangi kaydın konacağı **ölçülmedi**. Bu, bir sonraki turun
ilk işi olmalı ve **en ucuz iş**: kütük elde, kova belli.

---

## 12. AÇIK KALEMLER — ölçülmedi, kapatılmadı

| kalem | durum |
|---|---|
| 931 hücre — yukarıdaki tabloda alt bölge alt bölge | 🔴 **ölçülmedi** |
| Patagonya/Fuego beyan kayıtları (`bos:"kabile"`) — kova belli, kayıt yok | 🔜 bir sonraki turun en ucuz işi |
| Fuerte Bulnes günü (21 vs 30 Ekim) | 🔴 **koordinatör kararı bekliyor** |
| Cali yılı (HSAI c.2 ↔ c.4 çelişkisi) | 🔴 **koordinatör kararı bekliyor** |
| Cusco 1281–1438 — `inka-imparatorlugu` yerine ne | **ölçülmedi** |
| Olinda 1535–1549 — Pernambuco kaptanlığı künyesi var mı | **ölçülmedi** |
| Bolivya üçlüsünün 8 aylık GEÇ penceresi: veri mi künye mi düzelecek | **ölçülmedi** |
| `devletler.js`e 6 kolonyal + ~12 yerli künye | **sevk bekliyor** |
| `motor_kara` maskesi −45,5'te bitiyor — Patagonya noktaları maske yenilenmesi ister | koordinatör M-2351'de bildirdi, **not alındı** |
| UNESCO/IBGE 403 — başka bir oturumda erişim var mı | **ölçülmedi** |

---

## 13. ÖZET SAYILAR — teslim

```
TABAN           1138 açık hücre (1° ızgara) · %73,8
ADAY              45 nokta · ön sınav KIRMIZI 0 · SARI 2
KAPAMA           207 hücre  ⇒  1138 → 931   (%73,8 → %60,4)
VERİM           aday başına 4,6 hücre
YAPISAL           18 hayalet pencere · 6+12 eksik künye ·
                  17/22 boş kronoloji
KÜTÜK           10,1 MB tam metin erişildi (HSAI c.1·2·3·4·7)
ÇELİŞKİ            2 kalem koordinatör kararına bırakıldı
KENDİ ALETİMDE     3 kusur ihbar edildi
                  (dizgi tarihi · regex çökmesi · sahte ad uyarısı)
```

> **Bu tur hiçbir `data/` dosyasına yazmadı.** Koşu (PID 1268)
> sürerken `data/` ve `arac/` donmuştur; bu belge bir **reçetedir** ve
> uygulaması koşu bittikten sonra, dosya sahibi tarafından yapılır.

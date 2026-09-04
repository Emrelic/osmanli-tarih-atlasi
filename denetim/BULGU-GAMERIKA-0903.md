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

---

# İKİNCİ TUR — kalan 931'in cinsi

> Koordinatör M-2398 ile üç iş verdi: ① kalanın cinsini ölç ② künye
> kolu ③ kütük kaynak biçimi. Bu bölüm onların cevabı.

## 14. 🔴 ÖNCE BİR SAYI DÜZELTİLDİ — kalan 1093 değil **931**

M-2398 *"taban 1138 · 45 aday · kalan ~1093"* diyordu. O sayı
**1138 − 45**. Ama bir aday bir hücre kapatmaz:

```
çıkarma :  1138 − 45  = 1093     ← YANLIŞ
ölçüm   :  1138 − 207 = 931      ← DOĞRU
sebep   :  bir nokta 200 km yarıçapla ~4,6 hücre kapatıyor
```

Bekletmeden bildirildi (M-2400); koordinatör kabul etti ve düzeltilmiş
tabanı bütün bölgelere yaydı (M-2402).

📌 **Ve buradan bir kural doğdu:** *bir aday bir hücre kapatmaz.*
Kapanma **ölçülür** — yeni noktalarla ızgara yeniden taranır;
**çıkarılmaz**. Oran sabit de değil: seyrek bölgede yüksek, doygun
bölgede ~1'e iner.

---

## 15. KALAN 931'İN CİNSİ — ve ÜÇ KOVA BOŞ ÇIKTI

```
karma           489   %52,5   hem nokta hem beyan gerekiyor
nokta-adayi     224   %24,1   yerleşim VARDI, aranmadı
karma-zamanlı   114   %12,2   1725 Araukanya kırılması
kabile          103   %11,1   gerçek beyan
insansiz          1    %0,1   Güney Georgia, 1904 öncesi
─────────────────────────────
devletsiz         0
veri-yok          0
hata              0
```

### 15.1 Üç kovanın boş çıkması bir SONUÇTUR, eksiklik değil

Sebebi tek: **HSAI Güney Amerika'nın tamamını etnografik olarak
kapsıyor. Kaynak hiçbir yerde SUSMUYOR.**

```
veri-yok   "kaynak SUSUYOR"  → kutumda susan yer YOK
devletsiz  "kaynak AÇIKÇA 'merkezî devlet yoktu' diyor" — bu bir
           İDDİADIR ve HSAI onu kurmuyor; band/klan örgütlenmesi
           ANLATIYOR, ki o `kabile`
hata       veri kusuru — bu turda rastlanmadı
```

⇒ Koordinatörün beş kovası **Güney Amerika'da fiilen üçe iniyor**:
`kabile` · `insansiz` · ve çoğunlukla **nokta**.

### 15.2 🔴 ALTINCI SINIF EKLENDİ — `nokta-adayi`

Beş kovanın hiçbiri şunu ifade edemiyor: *"burası boş değil, yerleşim
vardı, **aranmadı**."*

`veri-yok` yazmak yalan olurdu — kaynak susmuyor, **ben bakmadım**.

> ***`veri-yok` bir SONUÇTUR; "aranmadı" bir BORÇTUR.***

İkisini aynı kovaya koymak borcu sonuç gibi gösterir — ve bir sonraki
oturumu **oraya bakmaktan alıkoyar.** Koordinatörün *"ölçülemedi ≠
temiz"* kuralının **kova tarafı**. Bu yüzden `nokta-adayi` bir kova
değil, **ayrı bir alan**.

### 15.3 Alt bölge dağılımı

| alt bölge | kalan | öneri |
|---|---:|---|
| Mato Grosso / Planalto Central | 149 | karma 🔴 IBGE 403, **hiç ölçülmedi** |
| Nordeste sertão | 90 | nokta-adayi |
| Kuzeybatı Amazon (Rio Negro) | 84 | karma |
| Orta Amazon (Madeira–Tapajós) | 74 | karma |
| Guyana Kalkanı | 61 | kabile |
| Patagonya–Arjantin | 59 | karma-zamanlı |
| Pampa | 55 | karma-zamanlı |
| Doğu Amazon | 50 | karma |
| Güney Brezilya | 48 | karma |
| Chiquitos–Moxos | 47 | nokta-adayi |
| Atacama / KB Arjantin | 45 | nokta-adayi |
| Gran Chaco | 43 | karma |
| Llanos | 41 | karma |
| Patagonya–Şili kanalları | 39 | kabile |
| Orta And | 19 | nokta-adayi |
| sınıflanmamış | 17 | nokta-adayi |
| Ateş Toprakları · Kuzey And · Falkland | 3+3+3 | kabile / nokta |
| Güney Georgia | 1 | insansiz |

📄 Hücre hücre çıktı: **`gam_kova.json`** —
`{lat, lon, uzak_km, alt_bolge, oneri, gerekce}` × 931.

### 15.4 🔴 GRANÜLARİTE BEYANI — önceden, ve bu bir SINIRDIR

Atama **alt bölge** düzeyindedir. **931 hücrenin her biri için ayrı
kaynak taraması YAPILMADI.** Kural alt bölgeye kuruldu, hücreye
uygulandı. Bir alt bölge içinde istisna olabilir ve **bu ölçülmedi.**
Koordinatör *"hücre hücre"* istemişti; dürüst tanecik budur.

---

## 16. 🟢 EN DEĞERLİ BULGU — 114 hücre için künye ZATEN VAR

HSAI c.2, birebir alıntı:

> *"we can establish 1725 as the approximate date in which the
> Araucanians were definitely established in the great plains …
> rapidly became the dominant one"*

⇒ **Pampa (55) + Patagonya–Arjantin (59) = 114 hücre zamanla
değişiyor:**

```
1281 – 1725   kabile                (Tehuelche · Puelche · Querandí)
1725 – 1883   mapuche-araukanya     ← 🟢 BU KÜNYE ZATEN VAR
                                       (1281-01-01 .. 1883-01-01)
1883 –        arjantin-cumhuriyeti
```

Yani 114 hücre **beyan değil nokta işi**, ve **yeni künye
gerektirmiyor.** Atlas bunu `s:` dönemleriyle zaten ifade edebiliyor.

---

## 17. KÜNYE KOLU — bir öncül çürüdü, bir engel ölçüldü

### 17.1 Koordinatörün listesi sınandı

M-2398 ②'de *"(Mapuçe · Guaraní · Çarrúa · Tupi · Şuar…)"* yazıyordu.
**Mapuçe künyesi ZATEN VAR** — `mapuche-araukanya`, 1281-01-01 ..
1883-01-01, `kaynak:` alanı dolu. Ötekiler gerçekten yok.

43 halk adı tarandı: **VAR 6 · YOK 37.**

```
VAR : mapuche-araukanya · diaguita-calchaqui-konfederasyonu ·
      muisca-konfederasyonu · chimu-krallik · colla-krallik ·
      lupaqa-krallik
YOK : guarani · charrua · tupi · shuar · jivaro · tehuelche ·
      selknam · yahgan · alacaluf · toba · mataco · abipon ·
      mbaya · guaycuru · chiquito · moxo · baure · omagua ·
      manao · tapajo · mundurucu · mura · tupinamba · bororo ·
      kaingang · kayapo · wayuu · guajiro · carib · otomac ·
      achagua · puelche · querandi  (+4)
```

⚠️ Ve **kendi aletim 2 sahte eşleşme üretti**: `ona` → `bonacolsi`,
`arawak` → `sarawak-brooke`. Alt-dizgi eşlemesi — bugün üçüncü kez
aynı sınıf.

### 17.2 🔴 ENGEL ÖLÇÜLDÜ — HSAI künye `t:` günü VERMİYOR

Bir künye `t:` ister (halkın siyasî varlığının bittiği gün). HSAI bir
**etnografya** el kitabı, siyasî kronoloji değil.

```
"bitiş ifadesi + yıl" içeren cümle sayısı:
  Charrúa    0
  Yahgan     0
  Tehuelche  1   ← ve o da yay-ok kullanımının bitişi, SİYASÎ DEĞİL
```

Var olan yerli künyelerin `t:` değerleri (mapuche 1883 · diaguita 1667
· muisca 1537) **başka kaynaklardan** gelmiş.

⇒ 37 künyenin `t:` günü için **ayrı bir kaynak türü** gerekiyor ve
bunu bu turda **bulamadım**. `ölçemedim` diye yazılıyor.

### 17.3 🟢 VE BURADAN BİR ÖLÇÜT ÇIKTI

Var olan altı künyenin altısı da **teritoryal siyasî yapı**: chimu ·
colla · lupaqa (krallık) · muisca · diaguita (konfederasyon) · mapuche
(savaşı ve datable bitişi olan). Buna karşılık HSAI c.1'in *"Marginal
Tribes"*i band düzeyi.

```
KÜNYE OLUR    teritoryal yapı  +  DATABLE bitiş
KABİLE KALIR  band/klan düzeyi  ya da  datable bitişi olmayan
```

⇒ **37'nin hepsine künye GEREKMİYOR.** Ateş Toprakları ve Patagonya
kanallarındaki halklar (Yahgan · Alacaluf · Chono · Ona) künye değil
`bos:"kabile"` olmalı — **çizilecek bir siyasî gövde yok.**

⚠️ Bu bir **ölçüt önerisidir**. 37'nin hangisi hangi tarafa düşer,
**tek tek ölçülmedi.**

---

## 18. ⚠️ KENDİ ALETLERİMDE BUGÜN BEŞ KUSUR

Beşi de burada, sonuç düzeldikten sonra da:

| # | kusur | bedeli olurdu |
|---|---|---|
| ① | hayalet denetimi tarihleri **dizgi** karşılaştırıyordu; `fransa` künyesi üç haneli (`987-01-01`) | 3 sahte hayalet (São Luís · Cayenne · Georgetown) |
| ② | kütük çıkarım regex'i **katastrofik geri izleme** — 120 sn'de bitmedi | alet hiç çalışmazdı |
| ③ | ad benzerliği süzgeci `len>4` ile herhangi bir alt-dizgiyi eşliyordu | 22 sahte uyarı (`Oş` → `sanignaciodemoxos`) |
| ④ | kova haritasında **`Güney Brezilya` kuralı hiç yoktu** | 48 hücre sessizce sınıflanmamışa düşüyordu, **ve alet TEMİZ görünüyordu** |
| ⑤ | alt bölge kutuları **örtüşüyor** (21 çift) ve "ilk tutan alır" geçerli | Gran Chaco bir sırada 43, ötekinde 54 — **değişen tek şey KURAL SIRASIYDI** |

🟢 ④ ve ⑤ düzeltildi; sıra `kalan.py` ile aynı yapıldı ve iki bağımsız
ölçüm artık **birebir aynı sayıyı** veriyor (43 · 17). Örtüşme listesi
çıktıda **basılıyor**, gizlenmiyor.

📌 ④ en sinsisi: *bir kuralın **yokluğu** hiçbir hata üretmez, yalnız
sessiz bir kova doğurur.* `§11`in *"sessiz atlama, yanlış sonuçtan
pahalıdır"* dersinin kural-tablosu yüzü.

---

## 19. GÜNCEL DURUM

```
TABAN        1138 açık (1° ızgara)
KAPANAN       207  (45 aday · ön sınav KIRMIZI 0)
KALAN         931  ⇒  %73,8 → %60,4
CİNS          karma 489 · nokta-adayi 224 · karma-zamanlı 114 ·
              kabile 103 · insansiz 1 · (devletsiz/veri-yok/hata: 0)
KÜNYE         VAR 6 · YOK 37 · `t:` günü için kaynak BULUNAMADI
KENDİ ALETİM  5 kusur ihbar edildi
```

**Sıradaki iş için önerim** (öncelik koordinatörün):
1. `karma` + `nokta-adayi` = **713 hücre** — kütükte malzeme var, en
   çok kazanç orada; özellikle Kuzeybatı + Orta Amazon (158).
2. **Mato Grosso 149** — IBGE 403 yüzünden **hiç ölçülmedi**. Başka
   bir oturumda erişim varsa **o alsın**; bende yok.
3. Patagonya/Fuego `kabile` beyanları (**145 hücre**) — kova belli,
   **en ucuz iş.**

---

# ÜÇÜNCÜ TUR — yöntem çürüdü, ölçüm 2,3 kat iyileşti

## 20. 🔴🔴 KENDİ ÇALIŞMA BİÇİMİMİ ÇÜRÜTTÜM

İkinci parti (18 aday: Maynas misyon ağı · Rio Negro–Vaupés ·
Kyk-over-al) yazıldıktan sonra **marjinal** kazancı ölçtüm — *"bu
adayı çıkarsam kaç hücre geri açılır?"*

```
parti 1   45 aday · 207 hücre · 4,6 hücre/aday
parti 2   18 aday ·  86 hücre · 4,8 hücre/aday
BİRLİKTE  63 aday · 271 hücre · 4,3 hücre/aday
parti 2'nin MARJİNAL katkısı: 64   (22 hücre iki partide de kapanıyor)
```

🔴 **63 adayın 25'inin marjinali SIFIR.** Kütükten çıkardığım
yerleşimlerin %40'ı, başka bir adayın **zaten** kapattığı hücreleri
kapatıyor.

⚠️ **Bu "o 25 aday değersiz" demek DEĞİL** — hepsi gerçek, kaynaklı
yerleşim ve atlas onları zaten istiyor. Ölçü **yalnız kapama**.

### 20.1 Sebep: KÜTÜK-ÖNCE çalışıyordum

Kütük **coğrafyaya göre değil HALKA göre** düzenli, ve bir halkın
misyonları **yan yana**. Yani kütüğün kendi yapısı beni
**kümelenmeye itiyor.**

### 20.2 🟢 DELİK-ÖNCE ölçüldü — 2,3 KAT

Açgözlü kapama koşturuldu: *önce boşluğun merkezini bul, sonra
"burada ne vardı" diye kütüğe sor.*

```
30 nokta · 298 hücre · 867 → 569
nokta başına  9,9 hücre        KÜTÜK-ÖNCE: 4,3
```

📌 **Bu, koordinatörün M-2368 ② kuralının bir kademe ötesi.** O
*"kaynaklandırmadan ÖNCE kaç hücre kapatacağını ölç"* diyor — aday
**eldeyken**. Bu bulgu diyor ki: ***aday seçiminin kendisi ölçümden
sonra yapılmalı.*** Aynı kütük, aynı emek, **2,3 kat kapama**.

⚠️ **Sınırı önceden yazıldı:** açgözlü merkez bir **koordinattır**,
bir yerleşim değil. O koordinatta gerçekten yerleşim olmayabilir — o
zaman cevap nokta değil **beyan** olur, ve **yine ilerlemedir**:
hücre kapanmış değil, **cinsi yazılmış** olur.

---

## 21. BEYAN REÇETESİ — 10 kayıt, 116 hücre

Koordinatörün ② önceliği. Delik-önce yöntemiyle üretildi.

### 21.1 Dayanak — HSAI'nin birebir alıntıları

**Cooper, HSAI c.1** (*Patagonian and Pampean Hunters*):

> *"The period came to an end with the military campaigns under
> Generals Julio Roca and Conrado Villegas in **1879-83**, which
> completely defeated and disorganized the Indian confederates,
> cleared the Pampa region almost entirely of its Indian inhabitants,
> and drove most of the survivors beyond the Río Negro and into
> Neuquén. **Recent period, 1883 to date.**—Settlers, following the
> frontier, have taken up most of the country from the northern limit
> of the Pampa to the Strait of Magellan."*

🟢 **Bu, `mapuche-araukanya` künyesinin `t:1883-01-01` değerini
DOĞRULUYOR** — künyenin kendi `kaynak:` alanı yalnızca *"Standart
akademik"* diyordu; bu onu **isimlendiriyor**.

**Cooper, HSAI c.2** (*Araucanians*):

> *"we can establish **1725** as the approximate date in which the
> Araucanians were definitely established in the great plains"*

### 21.2 Üç kova, üç zincir

| kova | kayıt | hücre | 1281–? | sonra |
|---|---:|---:|---|---|
| **kuzey** (Arjantin pampası + K.Patagonya) | 6 | 62 | kabile (Tehuelche·Puelche·Querandí) | `mapuche-araukanya` 1725→1883, sonra `arjantin-cumhuriyeti` |
| **güney** (G.Patagonya + kanallar + Fuego) | 3 | 43 | kabile (Marginal Tribes) | `arjantin-` / `sili-cumhuriyeti` 1883→ |
| **doğu** (Uruguay + Rio Grande) | 1 | 11 | kabile (Charrúa·Minuán·Guenoa) | `uruguay-cumhuriyeti` 1828→ |

**11,6 hücre/kayıt** — bugünün en verimli işi.

### 21.3 ⚠️ VE ALETİMDE İKİ KUSUR DAHA (bugün altı ve yedi)

| # | kusur | yönü |
|---|---|---|
| ⑥ | `bolge()` −31,5/−56,5'i "kuzey" sayıp ona **`mapuche-araukanya`** atadı — **orası URUGUAY** ve Araukanyalılar Uruguay'a **hiç geçmedi** (HSAI'nin 1725 ifadesi *"the great plains"*, yani Arjantin pampası) | **FAZLA** kimlik |
| ⑦ | `guney` kovası `s: []` veriyordu — 1281–1923 boyunca hiçbir kimlik. Ama HSAI *"Recent period, 1883 to date"* diyor: 1883 sonrası Patagonya **boş değil** | **EKSİK** kimlik |

📌 İkisi de aynı sınıf — **bir enlem-boylam eşiği coğrafyanın yerine
geçemiyor** — ama **yönleri ters**. ***Bir kural iki yöne de
bozulabilir,*** ve tek yönü sınamak yarısını kaçırır.

⚠️ Ve bir sınır **ölçülmedi, yazıldı**: Arjantin–Şili sınırı bu
enlemlerde **dağa** göre çizili, boylama göre değil. `−72` eşiği bir
**yaklaşımdır**; kesin sınır gerekiyorsa koordinat tek tek
denetlenmeli. **Ölçmedim.**

---

## 22. ÜÇ TURUN TOPLAMI

```
kayıt          63 nokta + 10 beyan = 73
ÖN SINAV       KIRMIZI 0
kapanan       387 hücre
TABAN        1138  (%73,8)
KALAN         751  (%48,7)
kayıt başına  5,3 hücre
```

**Açık oran %73,8 → %48,7.** Boşluğun üçte biri kapandı.

### 22.1 İkinci parti — 18 nokta (HSAI c.3 · c.4)

Maynas misyon ağı, tamamı tarihli ve tek kütükten:

| yerleşim | konum | kuruluş |
|---|---|---|
| Jaén de los Bracamoros | −5,71 / −78,81 | 1549 |
| Archidona (Napo) | −0,91 / −77,81 | 1536 |
| Borja (Maynas) | −4,47 / −77,55 | 1619 |
| Tonua (Chinchao) | −9,60 / −75,95 | 1631 |
| Concepción de Xéveros | −5,28 / −76,29 | 1640 |
| Santa María de Ucayali | −6,10 / −74,60 | 1653 |
| San Miguel (Aushiri) | −1,90 / −75,20 | 1665 |
| Santiago de la Laguna | −5,23 / −75,68 | 1670 |
| San Joaquín de Omaguas (Fritz) | −3,60 / −72,30 | 1686 |
| Tefé (Teffé de Aisuaris) | −3,35 / −64,71 | 1688 |
| Santo Tomé de los Andoas | −2,90 / −76,40 | 1708 |
| Canelos (Bobonaza) | −1,58 / −77,75 | 1712 |
| San José de los Nuevos Icaguates | −0,60 / −75,25 | 1733 |
| Yavaraté (Vaupés) | 0,61 / −69,20 | 1784 |
| Panoré (São Gabriel) | −0,13 / −67,09 | 1784 |
| Caruru (Vaupés) | 1,02 / −71,28 | 1852 |
| Kyk-over-al (Essequibo) | 6,40 / −58,68 | 1616 |
| Cametá (Tocantins) | −2,24 / −49,50 | 1635 ⚠️ |

⚠️ Cametá'nın yılı **kütükten doğrulanmadı** — standart akademik
kabul, `kaynak:` alanında **açıkça** böyle yazılı.

---

## 23. AÇIK SORU — `kur:` kuralı beş kaydı bağlıyor

M-2410 ①: *`kur:` = en erken **KALICI** yerleşim olayı.* Beş kaydım
kalıcı **değil** — kuruldular ve **bittiler**:

```
Floridablanca (San Julián)        1780 → 1784   (CONICET)
Rey Don Felipe (Magallanes)       1584 → ~1590
Ciudad Real del Guairá            1554 → 1632
Santo Domingo de la Nueva Rioja   1564 → ~1570
San Sebastián de Urabá            1510 → ~1524
```

**Soru:** `kur:` "kalıcı" olanı istiyorsa bunlarda `kur:` yazılmaz
mı — yoksa `kur:` kuruluş günüdür ve "kalıcı" ölçütü yalnız **aynı
yerin birden çok kuruluşu** olduğunda mı devreye girer?

**Eğilimim ikincisi**, ama **seçmiyorum**. Koordinatöre soruldu
(M-2417).

📌 Ve bu kayıtlar değerli: atlas çoğunlukla *"kuruldu ve sürdü"*
taşıyor; bunlar ***"kuruldu ve BİTTİ"*** örneği — Patagonya'nın
gerçek hikâyesi bu.

---

## 24. GÜNCEL DURUM — üç tur sonunda

```
TABAN         1138 açık hücre (1° ızgara · %73,8)
KAYIT           73  (63 nokta + 10 beyan) · ÖN SINAV KIRMIZI 0
KAPANAN        387
KALAN          751  (%48,7)
KÜTÜK         10,1 MB (HSAI c.1·2·3·4·7) · aranabilir · elde
YÖNTEM        delik-önce 9,9 hücre/nokta · kütük-önce 4,3
KÜNYE         VAR 6 · YOK 37 · `t:` günü için kaynak BULUNAMADI
ALET KUSURU     7 ihbar edildi
ÇELİŞKİ         2 koordinatör kararında · 1 kapatıldı (gerekçesi yazılı)
```

**Sıradaki** (koordinatörün onayladığı öncelik):
1. `karma` + `nokta-adayi` = 713 hücre, **delik-önce** yöntemiyle
2. Mato Grosso 149 — **devredildi** (IBGE 403, bende erişim yok)
3. Kalan beyanlar — kova belli, kütük elde

---

# DÖRDÜNCÜ TUR — teslim edilmiş verinin bütünlüğü

## 25. 🔴🔴 ON BİR UYDURMA TARİH — hepsi üç kapıyı geçmişti

Koordinatör (M-2484 ①) şunu istedi: *"her tarihin `kaynak:`ta
karşılığı VAR MI? Bir kayıt tek kaynak taşır ama DÖRT tarih (`kur` ·
`s[].f` · `s[].t` · `bit`) — kaynağın birini doğrulaması ötekileri
doğrulamaz."*

73 kaydın **368 tarihine** koşturuldu:

```
🟢 kaynak metninde yılı GEÇİYOR   125   %34,0
🟡 atlasın ORTAK takvimi          227   %61,7
   (bağımsızlık günleri · künye sınırları — kayda ÖZEL iddia değil)
🔴 DAYANAKSIZ                      16    %4,3   ← SEKİZ KAYIT
```

`bit:` kuralının yakaladığı **üç** uydurma tarihe **sekiz kayıt
daha** eklendi. Toplam **on bir**, hepsi teslim edilmiş veride.

### 25.1 Kütüğe geri dönüldü

| kayıt | eski | yeni | dayanak |
|---|---|---|---|
| Santa María de Huallaga | 1650 | **1649** | *"In 1649, the Mission of Santa Maria de Huallaga was established… by Father Bartolomé Perez"* |
| Sarayacu (Ucayali) | 1791 | **1790** + `bit:`**1861** | *"founding Sarayacu in 1790… in 1861 the missionaries abandoned Sarayacu"* |
| Santa Magdalena | 1720 | **1767** | ALT SINIR — kaynak misyonu ilk 1767'de anıyor, açıkça yazılı |
| Reyes (Maropa) | 1710 | **1716** | ALT SINIR, açıkça yazılı |

**Üçü için tarih bulunamadı** — Mompox · Pasto · Píritu.
Silinmediler; **`BEKLET`** damgası kondu, uygulayıcı atlasın.

### 25.2 🔴 VE BİR MÜKERRER ÇIKTI — 3 km kuralının göremeyeceği

```
"San Joaquín de los Omaguas"      -4,10 / -73,30
"San Joaquín de Omaguas (Fritz)"  -3,60 / -72,30
AYNI MİSYON · aralarında 123 KM
```

Konumdan emin olmadığım için ikisini de **kabaca** yerleştirmiştim;
eşik 3 km olduğu için sınav ikisini de temiz geçirdi.

⇒ ***3 km kuralı, KOORDİNATI BELİRSİZ bir mükerreri yakalayamaz.***
Varat/Varad 1 km'ydi; bu 123 km. **Eşik ne kadar dar olursa
belirsizlik o kadar kolay kaçar.**

🟢 **Yakalayan şey mesafe değil, TARİH DENETİMİ oldu** — ikisinin de
tarihi dayanaksızdı, kütüğe dönünce **aynı cümleye** düştüler.
📌 *Bir denetimin bulacağı şey, aradığı şeyle sınırlı değildir.*

---

## 26. BEŞ KOORDİNAT DENİZDEYDİ — ve bir uyarının mekanizması çürüdü

`ne_10m_land` ile sınandı:

```
🟢 ikisinin de içinde         20
🟡 kara VAR, motor_kara YOK   48
🔴 GERÇEK KARA DIŞINDA         5   ← BENİM HATAM
```

Beşi de kıyı noktası, deniz tarafına düşmüş. En fazla **1,50 km**
içeri kaydırıldı **ve yazılacağı hassasiyette (4 ondalık) sınandı**
— `§11`in *"reçete kendi testini geçmek zorundadır"* kuralı.

### 26.1 🔴 M-2351'in mekanizması ölçüldü ve çürüdü

Koordinatör *"`motor_kara` −45,5'te bitiyor, `denetle.py` konum
ihlali der"* demişti. Ölçüm:

```
arac/denetle.py:2821   kara_yol = ... "ne_10m_land.geojson"
```

⇒ **`denetle.py` `motor_kara`yı HİÇ OKUMUYOR.** Ve okumamalı:
`motor_kara` her koşuda `unary_union(PETEK_D)` ile yeniden üretilen
bir **çıktı**.

📌 ***Boşluk dolduran her nokta, tanımı gereği, ESKİ `motor_kara`nın
dışındadır.*** 48 kayıt bir sorun değil; gerçek risk 5 kayıttı.

---

## 27. İKİZ BEYANI — ve onu KENDİ DÜZELTMEM doğurdu

Kıyı düzeltmesi **Fuerte Bulnes** ile **Rey Don Felipe**'yi 3 km'nin
altına indirdi (**2,64 km**).

Mükerrer değil — zaman çizgileri **tamamen ayrık**:
```
Rey Don Felipe  1584 → (bitiş BİLİNMİYOR)     İspanyol kolonisi
Fuerte Bulnes   1843 → 1923                    Şili kalesi
                       259 YIL ara
```

`denetle.ikiz_ayikla` sözleşmesine göre **karşılıklı** ve **iki
tarafta da kaynaklı** beyan edildi.

📌 *Bir düzeltme yeni bir kapıyı tetikleyebilir* — ve tetiklediği
kapı doğru çalıştı.

---

## 28. KÜNYE REÇETESİ — yatay bir mesaj duvarı yıktı

📄 Tam hâli: **`denetim/ONERI-GAMERIKA-0903-kunyeler.md`**

`DUNYA-AFRIKA-0903` yatay kanaldan (M-2490) ölçülmüş bir desen
gönderdi:

> 🔴 ***Bir yerli siyasî yapının `t:` günü, genellikle o yapının
> değil SÖMÜRGECİNİN tarihidir.***

Kendi 42 vakası: `vasulu` 1898-09-29 (Samori'nin esir alınışı) ·
`tsvana` 1885-03-31 (himaye kararnamesi). Ve açıkça damgaladı:
*"Bunu ÖLÇMEDİM senin coğrafyanda… sınamak sende."*

**Sınandı, tutuyor:** Charrúa'nın günü Uruguay ordusunun kaydında,
Guaraní'ninki bir **İspanya krallık fermanında** (Pragmática Sanción).

### 28.1 🟢 VE SINARKEN YENİ BİR ARAMA EKSENİ ÇIKTI

`Ranquel` için HSAI c.1'de **sıfır geçiş** ölçmüş ve *"kütükte yok"*
demiştim. **Yanlıştı.** Kütük şunu diyor:

> *"…completely defeated and disorganized **the Indian confederates**…
> Recent period, 1883 to date."*

⇒ **Varlık anlatılıyor, adı anılmıyor.**

📌 `§4`in arama ekseni ailesine **yeni bir üye**:
```
yazım      usku ≠ Üsküp
slug       ordu ≠ ordu--sehir
yıl biçimi 1395 ≠ "1394-95"
takvim · noktalama · olmayan alan
🆕 TASVİR  kütük varlığı ADIYLA değil TASVİRİYLE anmış olabilir
```
⚠️ Ve tehlikesi büyük: sıfır sonuç *"kütükte yok"* diye okunur, ve o
hüküm bir sonraki oturumu **aramaktan alıkoyar.** Ben tam bunu
yapmıştım.

### 28.2 Üç künye adayı — üçü de artık `t:` taşıyor

| künye | `f:` | `t:` | durum |
|---|---|---|---|
| `ranquel` | 1281-01-01 | **1883-01-01** | 🟢 kütükten, birebir alıntı |
| `charrua` | 1281-01-01 | **1831-01-01** | 🟡 yıl sağlam, **gün doğrulanamadı** |
| `guarani-misyonlari` | 1609-01-01 | **1767-01-01** | 🟡 yıl sağlam, **gün çelişkili** (3 farklı gün) |
| `mbaya-guaycuru` | — | — | 🔴 **yazılmasın**, `t:` yok |

Ve **yazılmayacaklar** bir sonuçtur: Yahgan · Alacaluf · Chono · Ona ·
Tehuelche · Poya · Puelche → `bos:"kabile"`. HSAI'nin kendi tasnifi
onları *"The Marginal Tribes"* diye sayıyor; **çizilecek siyasî gövde
yok.**

⚠️ AFRIKA bir öncülü kendi düzeltti: koordinatörün *"98/98 `t:`
buldu"* cümlesi yanlışmış — *"98/98 `t:` YAZDIM, 56'sını yıl
hassasiyetinde"*. ***Bulmak ile yazmak aynı şey değil.***

---

## 29. HÜCRE·YIL ÖLÇÜTÜ — kuyruk yeniden sıralandı

| tür | kayıt | hücre | hücre·yıl | ort. yıl | hy/kayıt |
|---|---:|---:|---:|---:|---:|
| **beyan** | 10 | 120 | **77.040** | 642 | **7.704** |
| nokta 1281–1600 | 13 | 68 | 24.938 | 371 | 1.918 |
| nokta 1600–1750 | 32 | 227 | 53.189 | 237 | 1.662 |
| nokta 1750+ | 17 | 144 | 14.669 | 110 | 863 |
| **TOPLAM** | **72** | | **169.836** | | |

🔴 **Kayıt başına beyan, noktanın BEŞ KATI hücre·yıl üretiyor:**
**7.704 ↔ 1.497.** Sebep tek: beyan 1281'den itibaren geçerli, yani
atlas penceresinin **tamamına** hizmet ediyor.

> ⚠️ **DÜZELTME — ilk yazdığım manşet kendi sayılarımla çelişiyordu.**
> *"On beyan, altmış iki noktanın toplamından fazla üretiyor"* diye
> yazmıştım; tabloda **62 nokta 92.796**, **10 beyan 77.040** —
> yani **toplamda NOKTALAR ÖNDE**. Sayılar doğruydu, **cümle ters
> kuruluydu.** Koordinatör yakaladı (M-2498).
> 📌 Ve doğrusu manşetten güçlü: karşılaştırılabilir olan **oran**,
> toplam değil — toplam kayıt SAYISINA bağlıdır, bir ölçü değildir.

### 29.1 Asıl sayı: zaman derinliği verimi

```
kapatılan hücre                385
o hücrelerin TAVANI    385 × 642 = 247.170 hücre·yıl
gerçekleşen                      169.836
⇒ mevcut zaman derinliğinin %68,7'si yakalandı
```

Eksik %31,3 tam olarak koordinatörün işaret ettiği şey: **bir
hücreyi 1750'de kapatmak, onu 1281–1750 arası AÇIK bırakmaktır** — ve
eski ölçütüm bunu *"kapandı"* sayıyordu.

### 29.2 Yeniden sıralanmış kuyruk

```
1. PATAGONYA/FUEGO/KANALLAR beyanları  145 hücre  ← eskiden 3., ŞİMDİ 1.
2. GUYANA KALKANI                       61 hücre  (aynı sebep)
3. AMAZON kadîm yerleşimleri           158 hücre  ⚠️ KÜNYE İSTİYOR
4. Gran Chaco + Pampa kalanı            ~98
5. Nordeste · Atacama                   135  (kolonyal, EN AZ verimli)
```

🔴 **Ve ölçüt bir çelişki gösterdi:** Amazon'un kadîm yerleşimleri
hücre·yılda en değerli kalem, ama `omagua` · `manao` · `tapajos`
künyeleri **yok**. Oraya bugün bir Cizvit misyonu yazmak hücreyi
kapatır ama **1281–1650 arasını açık bırakır** — hücre·yılın yarısı
kaybolur.
⇒ **Künye kolu, Amazon için nokta kolundan ÖNCE gelmeli.**
Koordinatöre soruldu (M-2497); **seçilmedi.**

⚠️ **Ve ölçütün sınırı yazıldı:** bu ölçüt *"nereye önce BAKAYIM"*
sorusunu cevaplar, *"oraya ne YAZAYIM"* sorusunu **değil**. Beyan
ancak **gerçekten boş** olan yere yazılır; hücre·yılı yüksek diye
bir yere beyan yazmak Emre'nin hükmünün tersine düşmek olur.

---

## 30. GÜNCEL SAYILAR — dört tur sonunda

```
kayıt              72   (62 nokta + 10 beyan)  [73'tü, 1 mükerrer düştü]
ÖN SINAV           KIRMIZI 0 · ikiz beyanlı 2
dayanaksız tarih   16 → 6  (ve o 6, BEKLET damgalı 3 kayıtta)
kapanan           385 hücre · KALAN 753 (%48,8)
zaman derinliği   169.836 hücre·yıl — mevcudun %68,7'si
künye reçetesi      3 aday (+1 reddedildi, 7 açıkça `kabile`)
ALET KUSURU        12 ihbar edildi
```

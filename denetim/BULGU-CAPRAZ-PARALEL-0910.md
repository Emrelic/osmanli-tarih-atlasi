# ÇAPRAZ PARALEL — `uret_petek.py` paralelleştirmesinin çapraz denetimi

**Oturum:** ÇAPRAZ PARALEL (OPUS HAZIR KITA 405) · **10 Eylül 2026**
**Kip:** `§7` Oturum 2 — YALNIZ OKUR, düzeltme yazmaz. `arac/uret_petek.py`ye DOKUNULMADI.
**Aletler:** `denetim/ARAC-CAPRAZ-PARALEL-0910.py` · `denetim/ARAC-CAPRAZ-PARALEL-STRTREE-0910.py`
**Ölçümler:** `denetim/OLCUM-CAPRAZ-PARALEL-0910.json` · `denetim/OLCUM-CAPRAZ-PARALEL-STRTREE-0910.json`

> **ÖNCE ŞUNU YAZAYIM:** uygulama sağlam. Bit-denkliği gerçek, taban gerçek,
> negatif çapa gerçekten ötüyor, sınavın kapsamı doğru daraltılmış. Aşağıdaki
> beş bulgunun **hiçbiri çıktı değerlerini bozmuyor.** İkisi koşuyu ÖLDÜREBİLİR,
> biri planın vaadini yarıya indiriyor, ikisi raporu/nöbetçiyi kör ediyor.

---

## ⓪ MANŞET — dört bulgu, ağırlık sırasıyla

| # | Bulgu | Çıktıyı bozar mı | Ne yapar |
|---|---|---|---|
| **B1** | Tasarımın iki ölçümü hiç ÇARPILMAMIŞ: kazanç 4,51× değil ~1,57× | hayır | plan **7,3 saat** diyor, ölçüm **~14,1 saat** |
| **B2** | `list(_ex.map(...))` bütün ham geometriyi aynı anda tutuyor | hayır | **koşuyu öldürebilir** (boş RAM 1,1 GB) |
| **B3** | `ilerleme()` FAZ 2'ye taşındı ⇒ pahalı faz boyunca log DONUK | hayır | **nöbetçi kör** — "sürüyor" ile "takıldı" ayrılamaz |
| **B4** | FAZ 1 "yan etkisiz" iddiası ÇÜRÜK — 11 paylaşılan kaba yazılıyor | hayır | koşu raporundaki sayaçlar **eksik/fazla** basılır |

**B2 ve B3'ün çaresi AYNI ve TEK SATIR, ve bit-denkliğini BOZMAZ** (§④'te).

---

## ① FAZ 1 GERÇEKTEN YAN ETKİSİZ Mİ? — 🔴 HAYIR, İDDİA ÇÜRÜDÜ

Diff'in kendi cümlesi: *"YAN ETKİSİZ — havuza() ÇAĞRILMAZ, DEVLET_KAYIT'e
yazılmaz, **paylaşılan hiçbir sayaç güncellenmez**."*

`ARAC-CAPRAZ-PARALEL-0910.py` `_yabanci_devlet_faz1`ten ulaşılan çağrı grafını
AST ile çıkardı: **26 fonksiyon**, ve **11 paylaşılan kapta 29 yazım noktası**.

```
İDDİA SINAVI
  havuza       cagrilmiyor   🟢 DOĞRU
  hat_havuza   cagrilmiyor   🟢 DOĞRU
  ilerleme     cagrilmiyor   🟢 DOĞRU
  sayac        CAGRILIYOR    🔴 YANLIŞ  <- _kusatilmis, petek_epok üzerinden
```

### 🔴 Okuma-değiştirme-yazma taşıyan SAYAÇLAR (kayıp güncelleme üretir)

| kap | yer | desen |
|---|---|---|
| `_SAYAC` | `sayac()` 282 — `_kusatilmis`:3274 ve `petek_epok` çağırıyor | `r[0] += n; r[1] += sn` |
| `_KB_MUAF` | `delikleri_doldur`:1368 | `d[k] = d.get(k,0)+1` |
| `_B1_SAYAC` | `delikleri_doldur`:1386,1389 | `+= 1` |
| `_B23_SAYAC` | `_b2_enklav_birlestir` ×5 · `_b3_koridor_kirp` ×7 | `+= 1` |
| `_DOLGU_SAYAC` | `_dolgu_kumesi` ×5 | `+= 1` |

`x += 1` bir sözlük değerinde **GIL altında bile atomik değildir** (yükle-topla-yaz
üç ayrı bayt kodu) — diff'in kendi yorumu bunu `_PUAN_KESILEN` için doğru teşhis
edip FAZ 2'ye ertelemiş, ama **dolaylı çağrılarla gelen beş sayacı görmemiş.**

### Çıktıyı NASIL bozar: **BOZMAZ** — ve bunu ölçtüm

Beş sayacın da bütün okuma yerlerini taradım: `4983` · `5054-5056` · `5066-5076` ·
`5082-5083`. **Hepsi yalnız `print`.** Hiçbiri bir karara girmiyor ⇒ hash değişmez.

**Ama masum değil.** Kodun kendi yorumu (`:4420`) şunu diyor:

> *"SAYAÇ ŞART: sessizce eleyen bir kural, çalıştığı bilinmeyen kuraldır.
> Kaç petek çöl eşiğine takıldığı koşuda BASILIR."*

⇒ Bu sayaçlar bu projede **bir kuralın çalıştığının KANITI**. Eksik basmak o
kanıtı yok eder, ve eksikliğin kendisi görünmez. `§11 D015` ("ölçemediğini eleyen
süzgeç onu temiz sayar") ailesinin sayaç yüzü.

**İkinci zarar — süreler:** `_kusatilmis` ve `petek_epok`, `sayac()`e
`time.time()` farkı veriyor. Dört iş parçacığı altında bu **duvar saatidir ve
şişer**. `§1.5`in *"bir sayı okumadan önce koşunun logunu aç"* kuralına dayanan
her gelecek tahmin yanlış tabandan başlar (`D141`).

### 🟢 Önbellekler: değer olarak GÜVENLİ, hız olarak DEĞİL

7 önbellek "kontrol et sonra yaz" deseninde: `_CEP_ONBELLEK · _COL_NOKTA_ONBELLEK ·
_DOLGU_ONBELLEK · _IC_ONBELLEK · _KUS_ONBELLEK · _PUAN_ONBELLEK · _VARLIK_ONBELLEK`.

- Hepsi **saf fonksiyon** ⇒ aynı anahtar iki kez hesaplanırsa **değer aynı** ⇒ hash değişmez ✓
- **Yarı kurulmuş girdi ARADIM — `bulunamadı`.** `_DOLGU_ONBELLEK`in iki yazım
  noktasının ikisi de tam değer (`:4375` erken çıkış `{}`, `:4439` bitmiş `out`).
- `_PUAN_ONBELLEK` anahtarı `(did, aktif)`; her `did` **tek** iş parçacığında
  işleniyor ⇒ çapraz mükerrer hesap **YOK** ✓
- 🟡 Ötekiler **TARİHE** göre anahtarlı ⇒ devletler arası mükerrer hesap MÜMKÜN,
  ve en pahalısı `petek_epok` (3805 hücre üzerinde STRtree + Voronoi paylaştırma).
  Soğuk başlangıçta dört iş parçacığı aynı tarihi dört kez hesaplayabilir.
  ⇒ **hızlanmadan yer, korrektlikten yemez.** B1'in bir bileşeni.

### 🟡 Paylaşılan `STRtree` — `ölçülemedi`, ama risk DOĞRULANMADI

`delikleri_doldur` ve `gosterim_duzelt`, modül düzeyindeki `_TUM_AGAC` ve
`_KB_AGAC`i FAZ 1'den eşzamanlı sorguluyor. GEOS'un STRtree'si tarihsel olarak
**ilk sorguda** kurulur; tembelse bu bir yarıştır.

`ARAC-CAPRAZ-PARALEL-STRTREE-0910.py` ile ölçtüm (shapely 2.1.2 / GEOS 3.13.1):

```
(A) ilk sorgu / sonraki ortalama = 5,7x     -> öngörüm ÇÜRÜDÜ (ucurum YOK bekliyordum)
                                               ama 103 us vs 18 us; eşiğim (5.0) KEYFİYDİ,
                                               bu fark önbellek ısınmasıyla da açıklanır
(B) SOĞUK ağaç · 4 iş parçacığı · 100 tur -> AYRIŞAN 0      🟢 BELİRLEYİCİ OLAN BU
```

⇒ **Hüküm: yarış DOĞRULANMADI.** `D021` gereği bu *"yok"* değil *"oran düşük"*
demektir. `shapely.prepare(KARA)` (`:2092`) modül düzeyinde **bir kez** yapılıyor,
sonra yalnız okunuyor ⇒ orada da sorun yok.

---

## ② FAZ 2 SIRASI GERÇEKTEN ÖZGÜN MÜ? — 🟢 EVET, dört eksende de

| eksen | hüküm |
|---|---|
| `havuza()` çağrı dizisi | `_ex.map` girdiyle **aynı sırada** verir (belgelenmiş garanti) ⇒ özgün devlet sırası ✓ |
| devlet İÇİ dönem sırası | `ham` FAZ 1'de sırayla doluyor, FAZ 2 aynı sırayla tüketiyor ✓ |
| `_PUAN_KESILEN` float toplama sırası | `tani` **hem boş hem dolu gövde dalında** ekleniyor — eski kodun `sayac()` çağrıları da iki daldaydı ⇒ **birebir aynı sıra** ✓ |
| `_PUAN_TAMAMEN` | aynı ✓ |
| kanıt | sha256 DENK **ve** negatif çapa ters çevrilince AYRIŞIYOR ⇒ sıra gerçekten bağlayıcı, denklik tesadüf değil ✓ |

### 🟡 TEK SAPMA — `sayac()` süresi artık daha KISA ölçüyor

Eski kod `sayac("yabancı gövde geometrisi", time.time() - _t_gv)` çağrısını
**en sonda**, `representative_point()` ve `mp_koord()`tan SONRA yapıyordu.
Yeni kod `_sure`yi puan bloğundan hemen sonra donduruyor ⇒ o iki çağrının
süresi artık **sayaca girmiyor**.

**Çıktıyı NASIL bozar:** bozmaz — bu aşamanın maliyeti raporda **düşük** görünür.
`_ham_km2` maliyet notu (*"~1.970 çağrı; ölçüp bildireceğim"*) tam bu sayaca
dayanıyordu; o borç artık **yanlış bir sayıyla** kapanır.

---

## ③ SINAVIN DİŞLERİ VAR MI? — 🟡 VAR, AMA TEK SINIFA

**Hashlenen:** `DEV_HALKA + DEV_PARCA + DEVLET_KAYIT`, sonra `sys.exit(0)`
(`asama("Dönemler kuruluyor")` çapasında, `:4732`).
🟢 Kapsam **doğru daraltılmış**: değişen döngünün tam çıktısı, fazlası değil.

**Negatif çapa:** `_faz1_sonuc = list(reversed(_faz1_sonuc))` — FAZ 2'nin devlet
sırasını ters çevirir. `ayristi: true` ⇒ **ötüyor**, ve doğru şeye ötüyor.

### 🔴 Sorunun cevabı: FAZ 1'de bir yan etki olsaydı bu çapa ÖTMEZDİ

Üç ayrı sebepten:

```
(a) hashlenen kümede HİÇBİR SAYAÇ YOK
    _SAYAC · _B1_SAYAC · _B23_SAYAC · _DOLGU_SAYAC · _KB_MUAF  hepsi hash DIŞI
    ⇒ §①'deki beş sayaç bozulsa çapa SESSİZ kalır
(b) çapa BELİRLENİMCİ BİR PERMÜTASYONDUR
    Bir YARIŞ tanımı gereği ARALIKLIDIR; permütasyon onu üretemez.
(c) paralel kip BİR KEZ koşturuldu  (sonuçta tek "paralel" kaydı)
    ⇒ TEKRARLANABİLİRLİK hiç ölçülmedi
```

### 🟢 Ucuz kapatma — üç ek koşu, hiçbiri motoru tam koşturmaz

1. Paralel kipi **3 kez** koştur; üç sha da aynı olmalı (yarışı yakalar).
2. `MOTOR_PARALEL_ISCI=1` ve `=8` ile koştur; **işçi sayısı hash'i değiştirmemeli**
   (ölçekten bağımsızlığı çivi ler).
3. Sınav çıkışına **sayaç dökümü** ekle (`_SAYAC · _B1_SAYAC · _B23_SAYAC ·
   _DOLGU_SAYAC · _KB_MUAF`) ve sıralı ile paralel arasında karşılaştır —
   `§①`deki kayıp güncellemeyi **ölçülebilir** hâle getirir. Bugün ölçülemiyor.

### 🟢 Sınavın ölçtüğüm iyi yanları (bunlar kayda geçsin)

- `yama()` çapayı **tam 1 kez** bulmazsa `sys.exit` ediyor ⇒ `D155`in ("çapa zaten
  varsa betik sessizce hiçbir şey yapmaz") tam çaresi, **önceden** konmuş.
- `kucultme_ayni: true` ve iki kipin `girdi_izi`si birebir ⇒ `D123`ün istediği
  ortak taban gerçekten ortak; iç tutarlılık burada doğrulamanın YERİNE geçmiyor.
- Girdi dondurma 5 denemeye kadar `sha` sabitlenene dek tekrarlıyor ⇒ `§7`nin
  "koşarken girdi donmuştur" kuralı **mekanikleştirilmiş**.

---

## ④ KÜÇÜK KUTU NEYİ HİÇ ÇALIŞTIRMIYOR?

Kutu `(26, 36, 45, 42)` = Ege + Anadolu + Kafkas eteği · **3808 → 301 nokta · 59 devlet**.

### 🔴 B2 — EN AĞIRI: BELLEK. Ve küçük kutu bunu YAPISAL OLARAK gösteremez

```python
_faz1_sonuc = list(_ex.map(_yabanci_devlet_faz1, enumerate(BOYALAR.items(), 1)))
```

`list(...)` **bütün devletlerin bütün dönemlerinin havuzlanmamış `mp_koord()`
çıktısını AYNI ANDA** bellekte tutuyor. Eski kodda her gövde `havuza()`ya verilip
**hemen serbest kalıyordu** — kayıtta yalnız halka indeksi kalır.

```
devletler_harita.js            55,9 MB   (HAVUZLANMIŞ JSON)
havuza() belgesi               22.042 halkanın 6.112'si BİREBİR TEKRAR
   ⇒ havuzlanmamış hâli kabaca %38 daha büyük
Python iç içe float listesi    JSON metninin kabaca 5 KATI RAM
   ⇒ ~0,4-1 GB EK TEPE
yük dengesi ölçümü             rusya %22,2 · ingiltere %16,8
BOYALAR sırası                 rusya 80/579 (%14) · ingiltere 88/579 (%15)
   ⇒ EN BÜYÜK GÖVDELER FAZ 1'in ilk %14'ünde doğuyor ve
     KALAN %86 BOYUNCA BELLEKTE DURUYOR
```

🔴 **Ve tasarımın kendi §③'ü şunu yazmış: bu makinede boş RAM 1,1 GB.**
O satır *süreç* yolu için yazılmış; **iş parçacığı yolunun `list()` birikimi
hiç ölçülmemiş.**

> 🟡 **DAMGA:** 5× çarpanı bir **tahmindir**, ölçüm değil. Ama yön kesin ve
> tepe **yapısal olarak** eskinin ~1970 katına çıkıyor (1 gövde → bütün gövdeler).
> Ölçmenin ucuz yolu: sınav kopyasına FAZ 1 bitiminde `tracemalloc` /
> `psutil` RSS satırı koymak.

**Çıktıyı NASIL bozar:** değerleri bozmaz — **koşuyu öldürür.** `MemoryError`
ya da takas kırbaçlaması. Bu depoda koşu ölümü en pahalı olay (`§7`: koşu 8 =
10 saat 35 dakika).

### 🔴 B3 — İKİNCİSİ: NÖBETÇİ KÖR KALIYOR

`ilerleme()` artık **FAZ 2'de**, yani **bütün pahalı iş bittikten SONRA**.
Koşu boyunca son log satırı şuna donuyor:

```
  [PARALEL] FAZ 1 — 4 iş parçacığı, 579 devlet
```

sonra 579 ilerleme satırı bir anda basılıyor ve ETA'ları anlamsız oluyor.

**Çıktıyı NASIL bozar:** bozmaz — **nöbetçiyi kör eder.** `§7`nin nöbetçisi her
60 dakikada *"son log satırı"*nı basıyor; bu fazda **"sürüyor" ile "takıldı"
ayırt edilemez**. Bu depoda tam bu körlük **sekiz saat** sürdü (3 Eylül) ve
`CLAUDE.md` hükmü şu: *"Bir saat ses gelmezse hüküm 'koşu iyi gidiyor' değil,
'nöbetçi ölmüş olabilir'."* Yeni kod o cümlenin ön koşulunu ortadan kaldırıyor.
Ayrıca `ilerleme()`nin kendi belgesi yanlış ETA'nın bir koordinatörü yayın saati
duyurmaya götürdüğünü kaydediyor.

### 🟢 B2 ve B3'ÜN ÇARESİ AYNI, TEK SATIR, VE HASH'İ DEĞİŞTİRMEZ

`list(...)`i kaldır, `_ex.map(...)` **üretecini doğrudan dolaş**, FAZ 2 gövdesi
o döngünün içine girsin:

```
with _TPE(max_workers=_MOTOR_PARALEL_ISCI) as _ex:
    for _dv_i, (did, dad, renk, ham, tani) in enumerate(
            _ex.map(_yabanci_devlet_faz1, enumerate(BOYALAR.items(), 1)), 1):
        ...FAZ 2 gövdesi aynen...
```

- `map` **sırayı zaten koruyor** ⇒ `havuza()` çağrı dizisi DEĞİŞMEZ ⇒ **sha256 aynı**
- işlenen sonuç serbest bırakılır ⇒ tepe bellek işçi sayısıyla **sınırlanır**
- `ilerleme()` **gerçek** ilerlemeyi basar ⇒ nöbetçi görür
- negatif çapa hâlâ uygulanabilir (üreteci listeye alıp ters çevirerek)

⚠️ Bu bir **öneridir**; `§7` gereği uygulamayı ben yapmam. Ve uygulanırsa
**bit-denkliği sınavı yeniden koşturulmalıdır** — `D029`: bir reçete, uygulanınca
kendi testini geçmek zorundadır.

### 🟡 Kutunun hiç koşturmadığı kod yolları — ve sınav logu bunu GÖSTEREMEZ

Sınav `:4732`de çıkıyor; sayaç basımları `:4983-5083`te, yani **çıkıştan sonra**.
⇒ *"bu yollar koştu mu"* sorusu sınavın kendi çıktısından **cevaplanamıyor**.

Şüpheli küme (`ölçülemedi`): çöl tavanı (`_col_icinde` · `COL_PUAN_ESIK` ·
`col_dusen`/`col_gecen`) · B2 enklav · B3 koridor · delik doldurma muafiyeti
(`_KB_MUAF`) · en büyük birleşimler (`rusya` %22,2 — kutuda YOK).
Kapatması ucuz: `§③`teki 3. öneri (sınav çıkışına sayaç dökümü) **aynı anda**
bunu da kapatır.

---

## ⑤ `MOTOR_PARALEL_KAPALI=1` GERÇEKTEN ESKİ KOD MU? — 🟢 EVET, ÖLÇÜLDÜ

`git show HEAD:arac/uret_petek.py` satır **4501-4582** ile korunan blok
(**4605-4658**, dört boşluk dedent) karşılaştırıldı:

```
kod satırı        54  /  54
FARK              1 satır — yalnız bir SATIR SONU YORUMU
                  "g = gosterim_duzelt(g, aktif)      # B2 enklav + B3 koridor"
                                                      ^^^^ yorum düşmüş
yorumlar hariç    BİREBİR AYNI
```

⇒ **Sınav kendini kendine kıyaslamıyor. Taban gerçek.** `D123`ün tuzağı burada
kurulmamış.

### 🟡 Ama şimdi aynı mantığın İKİ KOPYASI var — `D143` deseni

*"Aynı işi yapan iki zincir betiği varsa, düzeltme yalnız birine iner."*
Bugün hiçbir denetim iki kopyanın ayrışmadığını sormuyor. Ve korunan kopya
**28 satır yorum kaybetti** — içinde koşu 6'nın **-6.947.000 km² (-%14,5)**
dersi de var (`D048`: silinen kodun mezar taşı). ⇒ İkizin **belgesiz** olanı o.

**İki seçenek, ikisi de ucuz:** (a) bit-denkliği çivilendikten sonra kopyayı
SİL ve sıralı tanığı `MOTOR_PARALEL_ISCI=1` ile üret; (b) kopya kalacaksa bir
**ayrışma bekçisi** yaz. (a) daha temiz ama sıralı tanığın *bağımsızlığını*
kaybettirir — karar koordinatörün.

---

## ⑥ 🔴🔴 SORULMAYAN ALTINCI SORU — İKİ ÖLÇÜM HİÇ ÇARPILMAMIŞ

Beş soruyu ölçerken tasarımın kendi iki sayısı yan yana geldi ve **çelişiyorlar**:

```
PARALEL-DENGE  (LPT ÇİZELGELEME tavanı)   N=4  4,00x   N=8  4,51x
PARALEL-GIL    (GEOS'un GERÇEKTEN verdiği) N=4  1,57x   N=8  1,65x
```

Tasarımın Amdahl tablosu **4,51×i** kullanmış:

```
YAZILI    aşama 4,51x -> koşu 2,77x -> 435 dk  (7,3 saat)
```

Ama 4,51× bir **çizelgeleme tavanıdır** — *"iş mükemmel bölünürse"* der.
Gerçekte ne kadarının paralel koştuğunu **GIL ölçümü** söylüyor ve o **1,57×**
(varsayılan `MOTOR_PARALEL_ISCI=4`). İki sayı **hiç çarpılmamış.**

Aynı Amdahl modeliyle (aşama payı %82,1 — tasarımın kendi sayısı; 4,51×i koyunca
2,77× ve 435 dk **birebir çıkıyor**, yani modeli doğru kurdum):

```
aşama 4,51x  -> koşu 2,77x -> 435 dk    (yazılı)
aşama 1,65x  -> koşu 1,48x -> 815 dk    (GIL, 8 işçi)
aşama 1,57x  -> koşu 1,42x -> 845 dk    (GIL, 4 işçi = VARSAYILAN)   ~14,1 SAAT
```

🔴 **Ve küçük kutu bunu ZATEN DOĞRULUYOR, kimse bakmamış:**
sınavın kendi süresi **51,0 sn → 42,5 sn = 1,20×**, 2,77× değil.

⇒ **Kazanç GERÇEK ama vaadin YARISI.** `§11 D081`/`D188` ailesi: iki ayrı soruya
verilen iki doğru sayı, birbirine çarpılmadan aynı cümlede kullanılmış.

> 🟡 **DAMGA — bu bir ÇÜRÜTME değil bir UYARI.** GIL ölçümü bir vekildir;
> gerçek gövde işi ondan daha uzun GEOS çağrıları içerebilir ve payı yükseltebilir.
> **Hüküm istemiyorum, ÖLÇÜM istiyorum:** ya GIL vekilinin neden temsil etmediği
> yazılsın, ya da bu fazın gerçek hızlanması TAM GİRDİYLE (ya da hiç değilse
> `rusya`yı içeren bir kutuyla) ölçülsün. Bugünkü hâliyle **7,3 saat beyanı
> dayanaksız** ve bir yayın saati o beyana bağlanabilir.

---

## ⑦ BULAMADIKLARIM — `D107` ayrımıyla

**`bulunamadı`** (arandı, yok):
- FAZ 1'de **çıktı değerlerini** bozan bir yan etki
- yarı kurulmuş önbellek girdisi (`_DOLGU_ONBELLEK`in iki yazımı da tam)
- sayaçların bir **karara** girdiği yer (hepsi yalnız `print`)
- FAZ 2'de sıra sapması (dört eksende de özgün)

**`ölçülemedi`**:
- paylaşılan `STRtree` yarışı — 100 turda 0 ayrışma, ama `D021` gereği bu bir
  **alt sınırdır**, yokluk kanıtı değil
- `list(_faz1_sonuc)`un gerçek tepe belleği (5× çarpanı TAHMİN)
- küçük kutunun hangi kod yollarını hiç koşturmadığı (sınav sayaçlardan önce çıkıyor)
- paralel kipin **tekrarlanabilirliği** (tek koşu var)

**`okumadım`**:
- `oturumlar/PARALEL-UYGULAMA-0910.md` (şartname) ve tahta `M-3288` (teslim raporu).
  Kasten: iddiaları **metinden değil koddan** ölçtüm. ⇒ *"Şartnamenin kabul
  ölçütü ② karşılandı mı"* sorusuna cevabım **yok**; yalnız kodun ve sınavın
  ne yaptığına cevabım var.
- `PARALEL-TASARIM-0910.md`nin §⑤/§⑥ dışındaki bölümleri.

---

## ⑧ KENDİ ÖNGÖRÜLERİM — ikisi çürüdü, yazıyorum (`D022` · `D056`)

| öngörü | sonuç |
|---|---|
| Paylaşılan STRtree tembel kuruluyorsa yarış olur; ölçümde **uçurum GÖRMEYECEĞİM** | 🔴 **ÇÜRÜDÜ** — 5,7× uçurum çıktı. Ama eşiğim (5,0) **keyfîydi** ve (B) sınavı belirleyici oldu. Ders: bir eşik ölçümden önce **gerekçelendirilmeli**, yoksa hükmü o eşik verir. |
| `rusya` geç sırada üretilirse FAZ 1'in kuyruğu tek iş parçacığına düşer | 🔴 **ÇÜRÜDÜ** — `rusya` 80/579 (%14), en ağır beşin hepsi ilk %16'da. Çizelgeleme sorunu **yok**. 🟢 Ama çürümesi **B2'yi güçlendirdi**: en büyük gövdeler erken doğup kalan %86 boyunca bellekte duruyor. |
| Sayaç yarışı çıktıyı bozar | 🟡 **KARIŞIK** — yarış var, çıktıyı bozmuyor; bozduğu şey **raporun kendisi**. |

---

**ÖZET:** Uygulama korrekt. Bit-denkliği gerçek. Dört bulgunun hiçbiri çıktı
değerini bozmuyor. **B2 (bellek) ve B3 (nöbetçi körlüğü) koşu 9'dan ÖNCE tek
satırla kapanabilir ve kapanmalı; B1 (kazanç beyanı) bir ÖLÇÜM istiyor, bir
düzeltme değil; B4 (sayaçlar) koşu 9'u engellemez ama raporunu güvenilmez kılar.**

# MOTOR TAVAN-YÖN — ilerleme

**Oturum:** MOTOR TAVAN-YÖN · **Açılış:** 12 Ağustos 2026
**Şartname:** `oturumlar/MOTOR-TAVAN-YON.md`
**Yazma yetkim:** `arac/uret_petek.py` · `denetim/kosu-ongoru-MOTOR-TAVAN-YON.json` ·
bu dosya. **Koşuyu ben başlatmam.**

---

## ADIM 1 — ÖLÇÜM RAPORU

### ⓪ ÖNCE EVREN — çünkü iki kez yanlış kurdum ve ikisi de SESSİZDİ

```
KULLANDIĞIM EVREN   ham Voronoi ∩ GERÇEK KARA ∩ tavan
GERÇEK KARA         ne_10m_land ∩ BOLGE − göller   (uret_petek.py:274-333 zinciri)
TABAN               2356 nokta · 40 dosya  (ölçüm SIRASINDA 2345'ten kaydı)
GİRMEYEN            yaslama · Chaikin · sadeleştirme · yetim yüz · ada kuralı ·
                    kara-kısıtlı sahiplik · çöl tavanı
⇒ MUTLAK km² motorunkiyle AYNI OLMAZ; ORAN ve SIRALAMA anlamlıdır.
```

🔴 **VE İKİ ÖLÇÜM ALETİ YALAN SÖYLEDİ — ikisi de `arac/olc_enklav/_ortak.py`de,
ikisi de sessiz. (Benim yazma listemde değil, DOKUNMADIM; bildirdim.)**

```
① _ortak.km2()      GeometryCollection'a 0.0 döner — `geom_type != "Polygon"`
                    guardı bütün koleksiyonu atıyor.
   BEDELİ ÖLÇÜLDÜ:  büyüyen çokgen daha sık GC üretti ⇒ ALAN BÜYÜRKEN
                    %30 KÜÇÜLMÜŞ göründü. Matematiksel olarak imkânsız bir
                    sonuçtu; onu gördüm, aleti sınadım, kusur çıktı.
② _ortak.oku_kara() adı "kara maskesi" ama okuduğu `motor_kara.geojson`
                    MOTORUN ÇIKTISI (`uret_petek.py:1720`,
                    `unary_union(PETEK_D)` — yani TAVAN UYGULANMIŞ hâli).
   BEDELİ ÖLÇÜLDÜ:  onunla kesince tavan "karanın %0,2'sini kesiyor" çıktı.
                    Gerçek %22,9. Tavanın kestiğini tavanla ölçmek — DAİRESEL.
```
📌 İkisi de `CLAUDE.md §11`in *"aletin gösterdiği ≠ ölçtüğü"* ailesinden, ve
ikincisi ötekinden sinsi: **ilki imkânsız bir sayı üretti (yakalandı), ikincisi
gayet makul bir sayı üretti.** Makul bir yanlış, saçma bir yanlıştan zordur.

🟢 **Ve evrenin doğru kurulduğunun bağımsız sağlaması:** benim ölçümüm A1
tavanının **karanın %22,9'unu** kestiğini söylüyor; motorun kendi logu
(`MIMARI §2.9`, koşu 4b) **%23,0** diyor. Farklı yoldan aynı sayı.

---

### ① TAVAN TAM OLARAK NE KESİYOR — **ve İKİ TAVAN VAR, BİRİ ÖLÜ**

Şartname ve `ETKI-ALANI-MATEMATIGI.md` tek bir tavandan söz ediyor
(`_tavan_daire`, `:599`). **İkincisi var ve ayrı bir kod:**

```
A1 YARIÇAP TAVANI    _tavan_daire :599 · TAVAN_DAIRE :605 · uygulama :1013
                     izotrop elips, kademe başına yarıçap
                     {k1:700 · k2:420 · k3:280 · k4:140 · k0:280} km
                     ÖLÇÜM: 391/2356 nokta bağlı · 17.198.016 km² kesiyor
                            = karanın %22,9'u

ÇÖL TAVANI           COL_TAVAN_KM = 300 :1549 · disk :1656 (AYRI, satır içi)
                     izotrop elips, HER KADEME İÇİN AYNI 300 km
                     yalnız çöl poligonu içinde, su tamponu dışında
```

🔴 **VE ÇÖL TAVANI KADEMELERİN ÇOĞUNDA YAPISAL OLARAK HİÇBİR ŞEY KESEMEZ:**
```
k0 = 280  ≤ 300   k3 = 280 ≤ 300   k4 = 140 ≤ 300     ⇒ A1 zaten daha içeride
k1 = 700  > 300   k2 = 420 > 300                       ⇒ yalnız burada işlevli
k1 + k2 = 62 nokta / 2356      (%2,6)
```
Yayındaki hücrelerde ölçtüm (2345 tabanı): **tüm pencerede 1 nokta** çöl
tavanına bağlı. ⇒ **Sahra çemberlerini ÇÖL TAVANI değil A1 çiziyor.**
Bu, doğal bir varsayımı çürütüyor: ad "çöl tavanı", ama çöldeki yuvarlakların
sahibi o değil.

⚠️ **ÖLÇMEDİM:** çöl tavanının k1/k2 noktalarında bugün ne kadar km² kestiği.
Motor bunu her koşuda basıyor (`_tv_n petek kısaldı`), koşu logundan okunur.

---

### ② YÖNE DUYARLILIK KANCASI VAR MI — **YOK. "Zaten vardı" DEĞİL.**

```
grep: yön · yon_ · azimut · anizotrop · sektör   →  tavan kodunda SIFIR eşleşme
_tavan_daire(p, r_km, lat)                       →  r_km SKALER, tek argüman
TAVAN_DAIRE = [...]                              →  nokta başına TEK elips, BİR KEZ
çöl diski :1656                                  →  64 köşe, sabit yarıçap
```
⇒ Değişecek şey bir sayı değil bir **fonksiyon**: `_tavan_daire` skalerden
yön vektörüne döner. (`olc_b_hazirlik.py §④` bunu zaten *yorum olarak* yazmış;
ben **ölçtüm** — kanca gerçekten yok.)

---

### ③ `KV_MIN_KM2 = 200` BU İŞİ NASIL ETKİLİYOR

**Ölçtüğüm:** KARA-KISITLI SAHİPLİK (`:1148`) yalnız **var olan petek
parçalarını** peteğe peteğe devreder (`:1327-1358`). Tavanın serbest
bıraktığı alan hiçbir peteğin parçası değildir ⇒ **ızgara onu hiç görmez.**

**Bundan çıkardığım (ayrı satır):** `KV_MIN_KM2` bu işi **bloke etmiyor**,
ama **yönünü değiştiriyor** — tavan gevşeyince petekler daha az parçalanır ve
kalan parçalar büyür; 200 km² eşiğinin ALTINDA kalan parça sayısı düşer ⇒
ızgaraya sorulan parça sayısı **artar** ⇒ `_kvdegisen` (el değiştiren parça)
sayısı **büyür.** Bu bir kusur değil, koşu logunda beklenen bir kayma.

⚠️ **ÖLÇMEDİM:** parça sayısının k_üst başına tam dağılımı. Öngörüye
*"ızgaraya sorulan parça artar"* diye YÖN yazacağım, sayı değil.

---

### ④ KOPUK ADACIK (②) TAVANDAN MI DOĞUYOR — **EVET, ÖLÇÜLDÜ**

Ölçüt: iki nokta **ham Voronoi komşusu** ise ve aralarındaki mesafe
`r_i + r_j`den büyükse, iki tavan birbirine değmez ⇒ aralarında **sahipsiz
şerit** kalır.

```
                      Voronoi komşu çifti   TAVANLAR DEĞMİYOR
SAHRA                        202                53  (%26)
HİMALAYA                      73                16  (%22)
YUAN/MOĞOL                   109                30  (%28)

en geniş şeritler:
  Turfan   <-> Şigatse   1522 km · tavan 560 · ŞERİT  962 km
  Hotan    <-> Şigatse   1205 km · tavan 560 · ŞERİT  645 km
  Dunhuang <-> Lhasa     1209 km · tavan 560 · ŞERİT  649 km
  Agadez   <-> Timbuktu  1171 km · tavan 560 · ŞERİT  611 km
```
⇒ Emre'nin *"Yuan hanedanının toprakları birbirinden hep ayrık"* cümlesi
**birebir bu.** Kusur veride değil, tavanın izotropluğunda.

🔴 **VE İLK ÖLÇÜMÜM BU SORUDA YANLIŞ EVREN KURDU:** "komşu" diye 25°lik
kutudaki HER çifti aldım ve *"Şigatse ↔ Moulmein 1680 km"* gibi çiftler
üretti. Sayılar (%89-92 kopuk) **anlamsızdı, atıldı.** Komşuluk gerçek
Voronoi komşuluğuyla yeniden kuruldu.

---

### ⑤ YÖNE DUYARLI TAVANIN ÖLÇÜLEN KAZANCI

Denenen biçim (`r(θ) ≥ r` her yönde ⇒ **yeni petek ⊇ eski petek**, tavan
yalnız gevşer):
```
r(θ) = min( k_üst · r ,  max( r , d(θ)/2 ) )        d(θ) = o sektörde en yakın komşu
       komşusuz sektörde r(θ) = k_üst · r           16 sektör, aralarda doğrusal geçiş
```

```
                 bugün İZOTROP        k=1,25        k=1,5         k=2,0
SAHRA   sahipsiz  5.039.465 km²   4.168.387     3.491.506     2.416.635
                                    (%83)         (%69)         (%48)
HİMALAYA          1.003.452         667.022       446.167       135.011
                                    (%66)         (%44)         (%13)
YUAN              1.234.632         654.384       362.812       130.753
                                    (%53)         (%29)         (%11)
RUB'UL HÂLÎ         221.408          71.971        28.250         5.216
TÜM PENCERE      17.197.999      12.217.005     8.992.113     5.324.224
                                    (%71)         (%52)         (%31)
```
🟢 **C13 GEÇME YOLU YAPISAL OLARAK SAĞLANIYOR:** `k_üst = 1,0`da her sektörde
`r(θ) = r` ⇒ çokgen izotrop elipsin ta kendisi. Ölçüm: **+0,00 % · dört
kutunun dördünde de.**

---

## 🔴 ADIM 1'İN EN ÖNEMLİ BULGUSU — ŞARTNAMENİN ③ ÖNGÖRÜSÜ ÇÜRÜDÜ

Şartname: *"③ OSMANLI alanı kaç kesitte değişir — **ÖNGÖRÜN 0 OLMALI, MAZERET
YOK**."*

```
ÖLÇTÜĞÜM     A1 tavanına bağlı 391 noktanın 108'i `d:` ya da `v:` TAŞIYOR
             o 108 noktada tavanın kestiği alan  927.141 km²
             en büyükleri  Cenîne 130.728 · Radom 108.766 · Tîne 69.741 ·
                           Gardâye 39.170 · Vargla 33.039 · Cağbûb 32.026

ÇIKARDIĞIM   tavan gevşetilince YALNIZ tavana bağlı petekler büyür; o kümenin
             108'i Osmanlı/tâbi ⇒ Osmanlı alanı ARTAR. "0 değişim" bir öngörü
             değil bir ÇELİŞKİ olur.
```
📌 Ve bu, `MIMARI §2.9` VAKA 1'in **aynası**: orada tavan SIKILDI ve Osmanlı
**yanlışlıkla** daraldı — bir kaçaktı. Burada tavan GEVŞİYOR ve Osmanlı
**doğrudan** genişliyor — kaçak değil, tanımın kendisi. İki vaka aynı çifti
(tavan ↔ sonraki aşama) kullanıyor ama biri kusur öteki sonuç.

### KARAR SAYISI — k_üst başına Osmanlı/tâbi kazancı

O 108 noktanın bugünkü toplam alanı **3.129.540 km²**:
```
k_üst = 1,0    3.129.540 km²        +0 km²   (+0,00 %)   ← C13 geçme yolu
k_üst = 1,1    3.322.998 km²  +193.458 km²   (+6,18 %)
k_üst = 1,25   3.554.796 km²  +425.256 km²  (+13,59 %)
k_üst = 1,5    3.813.884 km²  +684.344 km²  (+21,87 %)
k_üst = 2,0    4.008.572 km²  +879.032 km²  (+28,09 %)
```
⚠️ Bu **zamansız taban geometrisidir**. Bir noktanın kazandığı alan yalnız o
noktanın Osmanlı/tâbi OLDUĞU kesitlerde Osmanlı gövdesine eklenir; kesit başına
gerçek etki bundan **küçüktür.** Kesit başına sayı ancak KOŞUDAN sonra ölçülür.

📌 **Ve kazancın nerede olduğu, ne kadar olduğundan önemli:** en büyük
Osmanlı/tâbi kazançları Gardâye · Vargla · Cağbûb · Derc · Ğadâmis · Ubârî —
yani **Sahra ve Libya iç çölü.** Tavan tam da oraya *"Osmanlı bu kadar
uzağa hükmedemez"* demek için konmuştu. Gevşetmek orada tarihen tartışmalı bir
iddiayı büyütür. **Bu bir ölçüm değil bir uyarıdır; kararı koordinatör verir.**

🟢 **Ve bir rahatlatıcı ölçüm:** tavana bağlı 391 noktanın **76'sı
`kasitli_bosluk`.** Onların peteği büyüyünce boyanan alan artmaz — nokta zaten
sahipsiz. Yani ⑤ öngörüsü (kasıtlı boşluk boyanmasın) bu değişiklikten
**doğrudan zarar görmez.**
⚠️ **ÖLÇMEDİM:** 108 (Osmanlı/tâbi) ile 76 (`kasitli_bosluk`) kümelerinin
kesişimi.

**Koordinatöre sorulan (karar onun, ADIM 2 buna bağlı):**
```
(a) ③ yeniden yazılsın: "Osmanlı N kesitte değişir, +X km², X şu tavanın
    altında" — mazeretsizlik SAYIYA taşınır          ← ÖNERİM
(b) k_üst küçük tutulsun (1,10-1,25), Osmanlı etkisi ihmal edilebilsin
(c) yöne duyarlılık yalnız çöl/`kasitli_bosluk` kuşağına kısıtlansın
    — ama Himalaya ve Yuan çözülmez, yani şikâyetin yarısı kalır
```

---

---

## ⑥ ADIM 2 İÇİN ÖNCEDEN ÇIKARILAN TUZAK — `TAVAN_DAIRE` ÜÇ YERDE OKUNUYOR

```
:605    TAVAN_DAIRE = [...]              kurulum
:1013   kara_kesik.intersection(...)     KIYI KESİMİ — asıl uygulama
:1110   _pp.intersection(TAVAN_DAIRE[_en])   🔴 ADA KURALI — "boşta kalan pay"
                                              yalnız tavanın içinde verilir
```
🔴 **`:1110` unutulursa iki aşama ayrışır:** kıyı kesimi yeni yön çokgenini
kullanır, ada kuralı ESKİ izotrop elipsi. O zaman ada kuralı, yön çokgeninin
kazandığı toprağı **geri vermez** — ve `MIMARI §2.9`un *"aşamalar arası
sözleşme yok"* ailesine **yeni bir vaka** eklenir, üstelik onu okuyarak.
⇒ ADIM 2'de üç yer de aynı fonksiyondan beslenecek.

📌 Ve `:1110`un yorumu bunu zaten söylüyor: *"boşta kalan pay yalnız ALICININ
TAVAN DAİRESİ İÇİNDE kalan kadarıyla verilir"* — yani tavan orada bir **kaçak
tıkacı.** Tıkaç gevşerse kaçak da gevşer; bu **kusur değil sonuç**, ama
öngörüde yazılı olmalı.

---

---
---

# ADIM 2 — UYGULAMA

Koordinatör onayı geldi ve ③'ü **daha iyi bir biçimde** yeniden yazdı:
> *"Ölçüt **değişmemek** değil, **ÖNGÖRÜLEN KADAR değişmek** olmalı. VAKA 1'de
> tehlikeli olan şey 'Osmanlı değişti' değildi — **'kimsenin ÖNGÖRMEDİĞİ bir
> sebeple değişti'**ydi."*

📌 Bu benim (a) şıkkımdan iyi: ben mazeretsizliği **gevşetiyordum**, o
**taşıdı**. Ve tam da VAKA 1'i yakalayabilecek tek biçim bu — orada da Osmanlı
değişmişti, ama **hesabın dışında.**

---

## ① `_ortak.py` DÜZELTİLDİ (koordinatör yetki açtı)

```
km2()               GeometryCollection'ı açıyor, İÇ İÇE olsa bile.
                    Niçin yanlış olduğu dosyada YAZILI.
oku_kara()          DAVRANIŞI DEĞİŞMEDİ — `olc_delik_yayin` ve
                    `olc_delik_kendi` için "yayında burası kara mı" DOĞRU
                    sorudur ve doğru evren odur. Değişen yalnız BAŞLIK:
                    niçin bir GİRDİ maskesi olmadığı yazıldı.
oku_girdi_karasi()  🟢 YENİ — motorun gerçek girdi maskesi
                    (`ne_10m_land` ∩ BOLGE − göller). Sabitler
                    (`KARA_TOL`, `DOGAL_GOL`) motordan CANLI okunuyor,
                    kopyalanmıyor. Süreç içinde önbellekli.
```
⚠️ **Davranışı değiştirmemek bilinçli:** iki betik `oku_kara()`yı doğru
sebeple kullanıyor. Bir aleti "yanlış" diye düzeltmek, onu doğru kullananları
bozabilirdi. Kusur **aletin kendisinde değil, ADINDA ve BELGESİNDEYDİ.**

**C13 — iki yönde:** `GEÇME 7 · ATEŞLEME 5 · KALAN 0 · çıkış kodu 0`
Ateşleme **zorlandı**: sentetik bir `GeometryCollection` yetmez, *shapely'nin
KENDİSİ* GC üretsin diye bir kesişim kuruldu (bir parçası örtüşen, öteki
parçası yalnız kenardan değen iki poligon).

### 🟢 VE KOORDİNATÖRÜN KORKUSU ÖLÇÜLDÜ, ÇÜRÜDÜ
Koordinatör *"`olc_b_hazirlik` çıktısını Emre'ye rapor ettim, o sayılar
etkilenmiş olabilir"* dedi. Eski ve yeni `km2` **aynı geometri kümesinde** yan
yana koşturuldu:
```
"bugün" satırı (HUCRE doğrudan)     FARK 0 km²  · GC üreten geometri 0
"DARALTMA" tablosu (×0,9/0,75/0,5)  FARK 0 km²  · GC üreten kesişim 0
"TAVANA BAĞLI 75"                   `boundary.distance` — km2'ye HİÇ dokunmuyor
```
⇒ **Etkilenmemiş.** Sebebi tutarlı: kusur ancak çokgen **büyürken** ateşliyor;
`olc_b_hazirlik` yalnız **daraltma** ölçüyordu.

🔴 **AMA O SAYILAR BAŞKA BİR SEBEPTEN BAYAT:** `petek_govde.js` 2345 gövde,
veri 2356 nokta ⇒ indeks eşlemesi geçersiz. Aynı kutu bugün 6.489.793 →
**5.859.584** km² (−%9,7), bağlı 75 → **54** (−%28) veriyor. Bu `km2` kusuru
değil, `OKU-BENI §③`ün uyardığı **indeks kayması** — orada 4 nokta %13,5/%20
sapma vermişti, burada 11 nokta.
⇒ Emre'ye düzeltme **gerekmiyor** (sayılar üretildiklerinde doğruydu); ama
**bir sonraki koşuya kadar yenilenemezler.**

---

## ②′ NİHAİ TASARIM: **(d) ALAN KORUYAN ANİZOTROPİ** — ve gevşetme ÇÜRÜDÜ

Koordinatör benim üç şıkkımın hiçbirini seçmedi, **dördüncüsünü** koydu ve
kararını değiştiren şey benim kendi uyarımdı (*"kazanç Sahra ve Libya iç
çölünde, tavan tam da oraya konmuştu"*). Teşhisi:
```
Emre ne dedi   "pergelle çizilmiş gibi YUVARLAK"   → ŞEKİL kusuru
gevşetme       alanı büyütür                       → BOYUT değişimi
⇒ YANLIŞ EKSENDE ÇARE
```

🔴 **VE ÖLÇÜM BUNU DOĞRULADI — gevşetmenin bedeli var, kazancı yok** (2362 taban):
```
k_üst   kopuk çift %          en büyük petek     Osmanlı      toplam
        Sahra/Himalaya/Yuan
1,0        11 / 11 / 18          245.514 km²          +0       +0,00%
1,5         8 /  8 / 16          375.863 km²    +225.274       +5,23%
2,0         8 /  8 / 16          539.518 km²    +272.170       +7,37%
```
Boşluğu neredeyse hiç kapatmıyor (%18 → %16), ama en büyük peteği
`banda-adalari`nın **573.188 km²**'sine doğru taşıyor.
📌 Ve kendi cümlem bunu zaten söylüyordu: **daha büyük bir çember, çember
olmaktan çıkmaz.** Ölçüm o cümleyi sayıya çevirdi.

### 🔴 DİSK-ALANI NORMALİZASYONUNU KULLANMADIM — ve sebebi ölçülebilir

Koordinatörün yazdığı `∮r(θ)²dθ/2 = πR²` **diskin** alanını korur. Ama
boyanan alan `hücre ∩ tavan`dır, ve şekil tam da tavanın **BAĞLADIĞI** yöne
(hücrenin büyük olduğu yön) uzanıp **bağlamadığı** yöne (hücrenin zaten küçük
olduğu yön) çekilir ⇒ **kesişim sistematik olarak BÜYÜR.**
⇒ Disk-normalizasyonu *"alan korundu"* raporlar ve boyanan alan artar; yani
mazeretsiz ①'i **sessizce** ihlal ederdi.

**Yerine: λ, peteğin KENDİSİ üzerinde çözülüyor** (ikiye bölme, 24 adım):
```
alan(hücre ∩ çokgen(λ·w))  =  alan(hücre ∩ daire(R))
w_s = d_s/2  (o sektörün en yakın Voronoi komşusu) · boş sektörde AÇISAL ara değer
şekil oranı sınırı ×1,75 (dar mızrak çıkmasın) · 16 sektör · 128 köşe
```
🟢 Böylece ① bir umut değil **hesabın kendisi**, ve **nokta başına** sağlanıyor.

🟢 **Bedava kazanç:** tavan **bağlamayan** noktada fonksiyon daireyi **aynen**
döndürüyor ⇒ ~1970 noktada çıktı bugünkünün **birebir aynısı**, tek bit
değişmiyor. Değişen yalnız tavanın gerçekten kestiği yerler.

🟢 **Motorun içine nöbetçi kondu:** her koşuda alan koruma sapmasının medyanı
ve azamîsi basılıyor; %1'i aşarsa `✗`. *"Korudum" demek yetmez, ÖLÇÜLÜR.*

---

## ② İLK BİÇİM (GEVŞETME) — ve niçin bırakıldı

🔴 **ADIM 1'de ölçtüğüm biçim komşusuz sektöre `k·r` veriyordu — yani BOŞLUĞA
DOĞRU büyütüyordu.** Sayıları iyi görünüyordu (Sahra sahipsiz alanı %69'a
iniyordu) ve tam da bu yüzden tehlikeliydi:
```
🔴 boşluğa doğru büyümek = tavanın VAR OLUŞ SEBEBİNİ geri getirmek
   (`banda-adalari` 573.188 km² — kendi yüzölçümünün ~3.200 katı)
🔴 ve Emre'nin şikâyetini ÇÖZMEZ: daha büyük bir çember, çember olmaktan çıkmaz
```

**Motora giren düzeltilmiş biçim:**
```
r(θ) = min(k_üst·r , max(r , d(θ)/2))     o sektörde VORONOİ KOMŞUSU varsa
r(θ) = r                                   komşu YOKSA — uzama yok
d(θ) = o sektördeki en yakın Voronoi komşusunun uzaklığı · 16 sektör · 128 köşe
```
📌 **Ve bu, Emre'nin ikinci sezgisinin ta kendisi** (`ETKI-ALANI §②`): *iki
merkez BİRLİKTE, tek merkezin tek başına tutamayacağı yeri tutar.* **Tek
başına kalan merkez tutamaz.** Büyüme bir ödül değil, bir **buluşma**.

**Niçin `d/2`:** komşu `d` km ötedeyse Voronoi sınırı zaten tam ortadan geçer.
Tavanı o yönde `d/2`ye çıkarmak *"tavan bu yönde hiç bağlamasın"* demektir —
sınırı bölüşüm belirler, pergel değil. Aradaki sahipsiz şerit **kapanır**.

**Niçin komşuluk = Voronoi komşuluğu, "en yakın N nokta" değil:** bir nokta
bana yakın olsa bile araya başka bir hücre giriyorsa **benim sınırımı o
çizmez.** Tavanın soracağı soru *"bu yönde sınırımı kim çiziyor"* — cevabı
Voronoi komşuluğudur.

### C13 — İKİ YÖNDE, GERÇEK KOD ÜZERİNDE
Test kodu kopyalamıyor: `_tavan_daire` · `_tavan_cokgen` ve dört sabit
`uret_petek.py`den **`ast` ile çıkarılıp** sahte bir evrende koşturuluyor.
(Kopya yazsaydım motor değişince test **sessizce** bayatlardı.)
```
GEÇME    5/5  k_üst=1,0 → çıktı `_tavan_daire` ile BİREBİR (equals_exact 1e-12)
              dört ayrı evrende: komşusuz · yakın · uzak · sekiz komşu
              🟢 YAPISAL: fonksiyon, hiçbir yönde uzama yoksa `_tavan_daire`in
                 KENDİSİNİ döndürüyor — yaklaşık değil, aynı nesne
ATEŞLEME 9/9  komşusuz nokta HİÇ uzamıyor (izotropun kendisi) ·
              komşulu yönde 280 → 420 · komşusuz yönde 280 (uzamıyor) ·
              yakın komşuya uzama yok (d/2 < r) ·
              orta komşuda tam d/2'de (353 km) buluşuyor ·
              iki tavan artık DEĞİYOR (706 km = aralığın kendisi) ·
              6 evrende KÜÇÜLEN 0 (yeni ⊇ eski) · üst kat aşılmıyor
ÇIKIŞ KODU 0
```
⚠️ **Geçme yolu ZORLANDI:** `TAVAN_UST_KAT` gerçek veride 1,0 değil, o yüzden
sabit geçici olarak 1,0'a çekilerek sınandı — `C13`ün *"zorlanamayan dal,
denetimsiz daldır"* kuralı.

---

---

## ③ ÖNGÖRÜ — `denetim/kosu-ongoru-MOTOR-TAVAN-YON.json`

Sekiz kalem, **beşi mazeretsiz**, dört kalem açıkça `ölçmedim`.

```
①  OSMANLI/tâbi alan     7.545.554 → 7.546.840 km²   Δ = +0,017 %   ✓  MAZERET YOK
②  kasıtlı boşluk        boyanan 0 olmalı                           MAZERET YOK
③  şekil verilen petek   398 · daire AYNEN 1964 · çözülemedi 0
④  alan koruma sapması   medyan %0,0000 · azamî %0,0001             MAZERET YOK
⑤  🔴 DEĞMEYEN TAVAN     Sahra 26,8→29,3 · Him 23,9→31,3 · Yuan 27,3→32,1
⑥  en büyük petek        245.514 → 246.857 km²  (nöbetçi 573.188)   MAZERET YOK
⑦  toplam boyanan alan   57.785.787 → 57.803.160 km²  Δ = +0,030 %
⑧  denetle.py            sahipsiz 180 · iç boşluk 0 · Değişmez 2 = 0 MAZERET YOK
```

### 🔴 ⑤ ÖNGÖRÜNÜN ÇÜRÜTTÜĞÜ ŞEY — VE BUNU SAKLAMIYORUM

Kopuk adacık oranı **kapanmadı, ARTTI.** Sebebi tasarımın kendisi: alan koruyan
şekil, komşusu **yakın** olan yöne (tavanların zaten değdiği yön) **çekilir**,
komşusu **uzak** olan yöne (zaten değmediği yön) uzanır ⇒ değme oranı düşer.

⇒ ***(d) ÇEMBERİ çözer, BOŞLUĞU çözmez — hatta biraz kötüleştirir.***
Koordinatörün ayrımı doğruydu ve sayı onu doğruladı:
```
ÇEMBER = ŞEKİL sorunu   → (d) çözer, bedeli YOK
BOŞLUK = BOYUT sorunu   → (d) çözmez; çözmek alan büyütmek ister
```
📌 Ve bu, üç biçimin **üçünün de** aynı şeyi söylemesidir: ilk biçim boşluğa
büyüttü (yanlış), ikinci biçim komşuya büyüttü (%18→%16, kazanç yok, bedel
büyük), üçüncü biçim alanı korudu (çember gitti, boşluk kaldı). **Boşluk bir
tavan sorunu değil.** Çaresi `ETKI-ALANI-MATEMATIGI` kademesi **C**'de
(maliyet yüzeyi) ya da **D**'de (eşik) — ikisi de yükseklik verisi bekliyor.

⚠️ **Ve boşluğun bir kısmı KUSUR DEĞİL:** Turfan↔Şigatse arasındaki 962 km'ye
ne Turfan ne Şigatse hükmediyordu. Harita *"burası kimsenin değildi"*
diyebilmeli. Koordinatörün talimatı: **ölç, kapatmaya çalışma.** Ölçüldü,
kapatılmadı.

---

## DURUM — TESLİM

```
✅ ADIM 1 ölçüldü ve raporlandı · koordinatör onayladı
✅ `_ortak.py` iki kusuru düzeltildi · C13 GEÇME 7 · ATEŞLEME 5 · çıkış 0
✅ ADIM 2: (d) ALAN KORUYAN ANİZOTROPİ uygulandı
✅ C13 (tavan) GEÇME 3 · ATEŞLEME 9 · çıkış 0
✅ öngörü KOŞUDAN ÖNCE yazıldı · 8 kalem · 5'i mazeretsiz · 4 `ölçmedim`
✅ py_compile temiz · 0x00 = 0 · 0x08 = 0
⛔ KOŞUYU BEN BAŞLATMADIM
```

```
arac/uret_petek.py            +238 / −2
arac/olc_enklav/_ortak.py     +124 / −12
denetim/kosu-ongoru-MOTOR-TAVAN-YON.json   yeni
oturumlar/MOTOR-TAVAN-YON-ILERLEME.md      bu dosya
```

### ⚠️ KOŞUYU BAŞLATANIN BİLMESİ GEREKENLER

1. **Koşu ~2-5 dk uzayabilir** — bağlayan ~398 peteğin λ'sı ikiye bölmeyle
   çözülüyor. **Bu bir kestirim, ÖLÇMEDİM.**
2. Motor iki yeni satır basıyor: `ALAN KORUYAN anizotropi: … şekil verildi`
   ve `alan koruma sapması: medyan … azamî …`. **İkincisi bir NÖBETÇİ** —
   `✗` basarsa öngörü ④ çürümüş demektir.
3. `renk_olc.py` **şart**: petek geometrisi 398 noktada değişti ⇒ komşuluk
   değişti ⇒ `CLAUDE.md §9` gereği yeni renk çakışması doğabilir.
4. `olc_b_hazirlik.py` koşudan **sonra** koşturulmalı — bugün hizalama
   nöbetçisi durdurdu (petek_govde 2345 ↔ veri 2362).

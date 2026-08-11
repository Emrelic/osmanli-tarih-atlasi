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

## DURUM

```
✅ ADIM 1 ölçüldü — dört sorunun dördü + karar sayıları
🟡 ADIM 1 raporu koordinatöre gönderildi, ONAY BEKLİYOR
⛔ ADIM 2'ye onaysız GEÇİLMEYECEK
```
`arac/uret_petek.py`ye **henüz tek satır yazılmadı** (`py_compile` temiz ·
0x00 ve 0x08 baytı 0 · 3254 satır — değişiklik öncesi taban).

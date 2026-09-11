# B KABUL SINAVI — B ne zaman "bitti" sayılacak?

> **Oturum:** KITA 4 — B KABUL SINAVI · **Sevk:** 1.MURAT, 12 Eylül 2026
> (M-3521'in devamı) · `arac/` AÇIK ama BU OTURUM YAZMADI, yalnız
> `denetle.py`yi read-only koşturdu. Öngörü: `denetim/ONGORU-B-KABUL-0912.json`,
> commit `7d3db97`, ölçümden/sentezden ÖNCE.
> Girdi: `oturumlar/GORUNUM-ABC-0910.md` · `oturumlar/TASMA-OLCUM-0911.md`
> (TAŞMA ÖLÇÜM + TAŞMA PROTOTİP + TAŞMA PROTOTİP II) ·
> `oturumlar/B-BOSLUK-PAYLASTIRMA-0911.md` · `denetim/BULGU-B-UCUZ-PARCALAR-0911.md`
> (kendi eski işim) · tahta M-3516/M-3517 (KITA 7 B3, KITA 3 boşluk paylaştırma
> açılış mesajları) · `denetle.py` canlı çıktısı (bu oturum koşturdu, 12 Eylül).

## D022 KARNESİ — 4 öngörü, hepsi TUTTU (ölçüm ucuz, sentez baskın olduğu için)

```
O1 denetle.py sayıları 1.MURAT'ınkiyle birebir eşleşecek   TUTTU (aşağıda ①)
O2 B2 kabul sınavı için Cebel Merre/Tarsus yeter, yeni      TUTTU
   örnek aramaya gerek yok
O3 B3 kabul sınavı ŞU AN yazılamaz — tanım belirsizliği     TUTTU (KITA 7'nin
   çözülmemiş                                               kendi açılışı doğruluyor)
O4 boşluk paylaştırma regresyon listesi ZATEN yazılmış,      TUTTU — asıl işim
   asıl iş üç parçayı BİRLEŞTİRMEK                          BİRLEŞTİRME oldu
```

---

## ① CANLI BASELINE — 12 Eylül, `denetle.py` bu oturum tarafından koşturuldu

```
Değişmez 1   ✓ 3808 yerleşim, 314 sahipsiz (beklenen 314)
Değişmez 1b  ✓ pencere-arası boşluk 0 (beklenen 0)
Değişmez 1c  ✓ sahipsiz+BELGESİZ 4 (tavan 4)
Değişmez 2   ✓ 520 kırılma, 0 açık
Değişmez 2s  ✓ 1327 yabancı kırılması · 104 AÇIK (tavan 121) · 364 kapsam dışı
Değişmez 2i  ✓ 62 işgal kırılması, 3 açık (tavan 3)
Değişmez 2t  ✓ kırılmasız madde 12 (tavan 42)
Değişmez 4   ✓ 9 hayalet dönem
Değişmez 4c  ✓ 132 dönem devletin ölümünü aşıyor (beklenen 132)
Değişmez 4d  ✓ 358 dönem doğumdan önce (beklenen 409 — 🟡 bu satır 409≠358,
               ölçülen 358, aşağıda not düşüldü, KENDİ İŞİM DEĞİL, mevcut
               script'in kendi beklenen/ölçülen farkı — B'yle ilgisiz, ayrı
               bir borç olarak işaretliyorum, DÜZELTMİYORUM)
Değişmez 7   ✓ 650 sorgusuz enklav (beklenen 650)
```

🟢 **O1 TUTTU:** 1.MURAT'ın verdiği dört sayı (314 · 4 · 650 · 132) canlı
koşuyla birebir eşleşti — koşu 9 kapandıktan sonra veri gerçekten donmuş,
bayat bir tablo değil (`D150` riski burada gerçekleşmedi).

🟡 **AMA BİR SATIR KENDİ İÇİNDE TUTARSIZ ÇIKTI** (B'den bağımsız, ayrıca
bildiriyorum, `§7.1⑥` gereği bekletmeden): `Değişmez 4d` "358 dönem
(beklenen 409)" basıyor — beklenen ile ölçülen aynı satırda FARKLI. Bu
`denetle.py`nin kendi iç mesajı, benim ölçümüm değil; B KABUL SINAVI'nın
kapsamı dışında ama **bir kardeş oturuma (Değişmez 4 ailesine bakan) haber
vermeye değer.** Tahtaya ayrıca düşürüyorum.

⇒ **BU 12 SATIR, B'nin regresyon sınavının "ÖNCE" fotoğrafıdır.** B
indikten sonra aynı komut tekrar koşturulup bu tabloyla satır satır
karşılaştırılacak.

---

## ② B'NİN TANIMI — ÜÇ PARÇA, İKİSİ UCUZ/HEURİSTİK BİRİ PAHALI/YENİDEN TASARIM

`GORUNUM-ABC-0910.md`nin kendi sırası (④): B2 enklav + B3 koridor = "ucuz
iki parça" (mevcut mekanizmanın AYARI), boşluk paylaştırma = "pahalı
parça" (MOTOR DEĞİŞİKLİĞİ). Bu gece üçü de aynı anda ilerliyor ve **üçü
farklı olgunlukta**:

```
B2 enklav      🟡 sıfırdan yazılmıyor, EŞİK gevşetiliyor (250→500? km)
               Şu an ölçüde: KITA ? henüz teslim etmedi (bu sınav
               yazılırken açık kalem)
B3 koridor     🟡 KITA 7 açıldı (M-3516) — "gövde ortalaması vs ağız
               genişliği" İKİ TANIMI birlikte loglayan bir yama yazıp
               ölçecek, henüz teslim YOK
Boşluk         🔴🔴 TANIM DEĞİŞTİ — artık "sahipsiz toprağı paylaştırma
paylaştırma    kuralı" değil, `_kvsahip` ızgarasının DOĞRUDAN
               poligonlaştırılması (akış-tabanlı sınır). Bu B'nin ④'te
               "pahalı parça, ayrı koşu" diye ayrılan kısmı ile AYNI ŞEY
               çıktı — ③'ün kendi şartnamesi bunu açıkça yazıyor.
```

🔴 **VE BU, ÖNEMLİ BİR REFRAME:** B artık üç eşit ağırlıklı "ayar" değil;
ikisi ayar, biri **motorun yeni bir üretim yolu** (`MOTOR_AKIS_SINIR_KAPALI`
anahtarı önerilmiş, `B-BOSLUK-PAYLASTIRMA-0911.md §④`). Kabul sınavının
üçü için AYNI ŞEKİLDE yazılamayacağı buradan çıkıyor — B2/B3 basit
eşik-öncesi/sonrası karşılaştırmasıyla test edilir, boşluk paylaştırma
görsel+istatistiksel bir REGRESYON PAKETİ ister.

---

## ③ HER PARÇA İÇİN KABUL SINAVI

### ③a B2 ENKLAV — kabul sınavı YAZILABİLİR, iki adı somut örnekle

**Bilinen POZİTİF (KESİN birleşmeli):**
```
Tarsus     2.137 km² · 371 km · 3 görünüm    ⇒ küçük, tekil, gerçek artefakt
Azak      15.796 km² · 323 km · 18 görünüm   ⇒ tekrarlayan, küçük
```
**Bilinen NEGATİF (KESİN kalmalı, birleşTİRİLMEMELİ):**
```
Cebel Merre  406.228 km² · 279 km · 1 görünüm (1883-12-23)
             ⇒ Bulgaristan'dan (110.879 km²) BÜYÜK — bir ÜLKE ölçeği,
               "küçük enklav" tanımına HİÇ girmiyor. `D081`: eşiği
               yalnız MESAFEYE bağlarsan (279 km, listedeki en düşük
               mesafelerden biri) Cebel Merre'yi AYIRAMAZSIN — alan
               (km²) da eşiğin İÇİNDE olmalı, tek boyutlu mesafe eşiği
               YETMEZ.
```
**SINAV MADDESİ B2-1:** yeni eşik(ler) uygulandıktan sonra
`_b2_enklav_birlestir()` çıktısında Tarsus VE Azak birleşmiş, Cebel Merre
AYRI kalmış olmalı. Üçünün ÜÇÜ de tek bir çalıştırmada aynı anda
sağlanmalı — yalnız biri sağlanıp diğeri gözden kaçarsa (`D010`: yeni
denetim iki yönde de sınanmadan çalışıyor sayılmaz) sınav YARIM sayılır.

**SINAV MADDESİ B2-2 (sayısal tavan):** `Değişmez 7` (650 sorgusuz enklav)
bu değişiklikten sonra **kesinlikle düşmeli** (bazı enklavlar artık
"sorgusuz" değil, birleşti); YÖNÜ bilinir (azalma), TUTARI bilinmez —
yeni sayı önceden yazılıp commit'lenecek (`D022`), sonra ölçülecek.

### ③b B3 KORİDOR — kabul sınavı ŞARTLI, tanım netleşmeden yazılamaz

KITA 7'nin kendi açılışı iki rakip tanımı aynı anda test edeceğini
söylüyor: *"gövde ortalaması vs ağız genişliği."* Emre'nin kuralı
*"koridorun derinliği koridor ağzının genişliğini geçemez"* — ama
**"derinlik" ve "genişlik" nasıl ölçülür** (poligonun uzun ekseni mi,
en dar kesiti mi) henüz KARARLAŞTIRILMAMIŞ.

🔴 **BU SINAV MADDESİ D081'İN TAM ÖRNEĞİ:** iki tanım FARKLI sayı
üretebiliyorsa ("kaç petek ihlal ediyor") kabul eşiği o iki tanımdan
HANGİSİNE göre yazılacağı belirtilmeden anlamsız olur — cevap "evet
sınav yazıldı" olsa bile SORU eksik sorulmuş sayılır.

**SINAV MADDESİ B3-1 (şartlı, KITA 7 tanımı netleştirince aktifleşir):**
düzeltmeden ÖNCE ihlal eden petek sayısı N₀, düzeltmeden SONRA N₁ < N₀,
ve **kendi eski işimin (`BULGU-B-UCUZ-PARCALAR-0911.md`) kaydettiği
D010 dersi tekrarlanmasın diye**: N₁ ölçümü mutlaka B3 KENDİ pipeline
sırasında (coastline kırpmadan ÖNCE, `uret_petek.py`'nin gerçek sırasıyla)
yapılmalı — kendi işimde bu sıra karıştırılmış, sayı kendi kendimce
retrakte edilmişti (106.123 → `ölçülemedi`). **Bu hatayı B3 kabul sınavına
kalıtsal olarak MİRAS BIRAKMAYIN.**

**SINAV MADDESİ B3-2 (görsel):** korunması gereken en az bir MEŞRU dar
geçit örneği (ör. bir boğaz/istmus — Karlofça pilotundaki Bosna-Sava hat
bölgesi ya da benzeri, KITA 7'nin kendi ölçümünden bir isim seçilecek)
düzeltmeden sonra da YANLIŞLIKLA sığlaştırılmamış olmalı — `D010`'un
"iki yönde de sına" kuralı: yalnız "ihlal azaldı mı" değil "meşru dar
geçit hâlâ dar mı kaldı mı" da sorulmalı.

### ③c BOŞLUK PAYLAŞTIRMA — kabul sınavı GÖRSEL+SAYISAL bir PAKET

Bu parça artık basit bir eşik değil, **motorun yeni bir üretim yolu**
(`_kvsahip` poligonlaştırması). Kabul sınavı `TAŞMA PROTOTİP`in kendi
karnesinden (P1-P7) doğrudan devralınabilir — YENİDEN İCAT ETMİYORUM:

```
SINAV C-1  Dijkstra süresi, tam ölçekte, koşunun %1'ini AŞMAMALI
           (pilot ölççüde 1,36× artış ölçüldü, tam koşuda +37..49 sn/
           çağrı = %0,15 — bu tavan zaten TUTUYOR, yalnız TEKRAR
           doğrulanacak)
SINAV C-2  poligon sayısı mertebe 300-20.000 arası kalmalı (bugünkü
           halka sayısı 22.577 ile AYNI MERTEBEDE — büyük sapma motorun
           bir şeyi yanlış parçaladığının işareti)
SINAV C-3  dosya boyutu (donemler.js) bugünkünün 0,5-1,5 katı arasında
           kalmalı (TAŞMA ÖLÇÜM'ün türetimi: poligonlaştırma dosyayı
           BÜYÜTMEZ, ~0,9 kat)
SINAV C-4  GÖRSEL — en az İKİ bölgede önce/sonra/üst-üste üçlü panel:
           · Doğu Anadolu (TASMA-PROTOTIP-1-YANYANA-0911.png — ZATEN VAR)
           · Toroslar+Akdeniz (TASMA-PROTOTIP-5-TOROS-0911.png — ZATEN VAR)
           🔴 EKSİK — bu ikisi dağ/eğim odaklı, DÜZLÜK-vs-DAĞ KARŞITLIĞI
           (Emre'nin asıl cümlesi: "düzlük daha çok pay alır") HENÜZ
           GÖRSELLEŞTİRİLMEDİ. Üçüncü panel ÖNERİYORUM:
           · Mezopotamya ovası ↔ Zagros eteği (düz-dağ karşıtlığı SAF
             hâliyle, engel terimi (nehir/sırt) devreye girdikten SONRA
             anlamlı — bkz. SINAV C-5)
SINAV C-5  ENGEL TERİMİ (nehir/sırt çarpanı 13,0/15,0) devredeyse: sınır
           bandını kesen petek sayısı bugünküne göre ARTMALI (bu bir
           BAŞARI işaretidir — `TAŞMA PROTOTİP II`nin kendi D049
           itirafı: "azalmalı" sanılan sınav TERS etiketliydi, gerçek
           yön ARTIŞ). B KABUL SINAVI bu tersine dönmüş etiketi
           MİRAS ALIYOR ve DOĞRU yönle yazıyor: +%29..34 bandı içi
           kesişim beklenir, "0 kesişim" ya da "azalma" görülürse
           mekanizma ÇALIŞMIYOR demektir.
```

🟡 **DÜRÜSTLÜK MADDESİ (TAŞMA PROTOTİP'ten miras):** engel terimi
eklendiğinde gözle fark İNCE olabilir (%6,0, birinci sıçramanın —%8,64—
üçte biri kadar). Kabul sınavı *"harita çarpıcı biçimde değişti"*
BEKLEMESİN — sayısal kanıt (SINAV C-5) görsel kanıttan (SINAV C-4) daha
güvenilir olabilir, ikisi ÇELİŞİRSE sayısal olan öncelikli sayılsın ve
çelişki bildirilsin.

---

## ④ REGRESYON PAKETİ — hangi tavan/eşik yeniden ölçülmeli

`B-BOSLUK-PAYLASTIRMA-0911.md §③`nin kendi listesi ZATEN kapsamlı; onu
TEKRARLAMIYORUM, yalnız (a) canlı sayılarla EŞLİYORUM, (b) B2/B3'ü de
kapsayacak şekilde GENİŞLETİYORUM, (c) bir MADDE EKLİYORUM (④e).

```
🔴 KESİN YENİDEN TÜRETİLMELİ:
 ④a Değişmez 2s tavanı        BUGÜN: 104 açık (tavan 121) — akış-tabanlı
     (kardeşin listesi)       sınır FARKLI parça deseni üretirse bu ikisi
                              birlikte KAYMALI, ayrı ayrı değil (tavan
                              sabit kalıp açık sayısı değişirse ALARM)
 ④b Değişmez 2i tavanı        BUGÜN: 3 açık (tavan 3) — SIFIR PAY var,
     (kardeşin listesi)       yani bugünkü sayı zaten tavanda. B sonrası
                              4 çıkarsa bu KESİN görülür ve tavan da
                              YENİDEN TARTIŞILMALI (gevşetilecek mi,
                              yoksa gerçek bir bozulma mı — `D036`)
 ④c Değişmez 2t tavanı        BUGÜN: 12 (tavan 42) — bol pay var,
     (kardeşin listesi)       küçük artışlar ALARM üretmez
 ④d B2_ENKLAV_KM eşiği        BUGÜN: 650 sorgusuz enklav (Değişmez 7) —
     (kardeşin listesi +      ③a'nın B2-2 maddesiyle BİRLEŞTİRİLDİ:
     benim B2 sınavım)        yeni eşik sonrası bu sayı AZALMALI, ama
                              Cebel Merre gibi MEŞRU enklavlar 650'nin
                              İÇİNDE kalmaya devam etmeli (③a)
 ④e 🆕 renk_olc.py ΔE         (kardeşin listesi bunu zaten sayıyor,
     komşuluk taraması        BEN buraya SOMUT bir sınır ekliyorum:)
                              akış-tabanlı sınır YENİ komşuluklar
                              üretirse `§9`'un kuralı gereği ÇALIŞTIRILMASI
                              ZORUNLU — çalıştırılmadan "B bitti" denemez.
                              Bu maddenin YOKLUĞU (yalnız hatırlatılıp
                              sayı verilmemesi) `D035`'in riski: ölçülmüş
                              ile hatırlanmış yan yana durunca okuyan
                              ikisini de ölçülmüş sanır — BEN bunu
                              ayırt ediyorum, ④a-d ÖLÇÜLDÜ (bugünün
                              sayısı var), ④e henüz YALNIZ KURAL,
                              sayı YOK.
 ④f SADE_TOL/KARA_TOL         (kardeşin listesi) — TAŞMA PROTOTİP'in
                              "fisto" bulgusu somut görsel kanıt taşıyor
                              (`TASMA-PROTOTIP-3-MERDIVEN-0911.png`)

🟢 MUHTEMELEN DEĞİŞMEZ (kardeşin listesi, teyit ediyorum):
   Değişmez 1/1b/1c (sahipsizlik) · Konum denetimi · KV_MIN_KM2

⚪ ÖLÇÜLEMEDİ (kardeşin listesi, teyit ediyorum, EKLEMİYORUM):
   Değişmez 3 (m: coğrafî eksen) · bileşen kilidi (_kv_bilesen)
```

---

## ⑤ TEK BİR SATIRDA KABUL/RED KURALI

Üç parça birden bittiğinde, "B bitti" denecekse:

```
① ③a'nın İKİ sınavı (Tarsus/Azak birleşti, Cebel Merre kalmadı) — İKİSİ DE
② ③b'nin tanımı netleşmiş VE en az bir düzeltme-öncesi/sonrası sayı çifti var
③ ③c'nin C-1..C-5 sınavlarının EN AZ C-1/C-2/C-3 (sayısal) geçmiş olması
   — C-4/C-5 (görsel/engel) BEKLEYEBİLİR, ayrı bir tur olarak sevk edilebilir
   (TAŞMA PROTOTİP'in kendisi bunu "ikinci tur" diye zaten ayırmıştı)
④ ④a-④f'nin HER BİRİ için "önce/sonra" çifti YAZILI olmalı — tek taraflı
   ("sonra"yı unutup yalnız "önce"yi kaydetmek) `D069`nun riski: bir
   hüküm dosyası bir ölçüm değil ölçümün FOTOĞRAFIDIR ve fotoğraf eskir.
```

🔴 **VE BİR ŞEY KESİN DEĞİL, AÇIKÇA BIRAKIYORUM:** ①②③④'ün HEPSİNİN AYNI
TURDA bitmesi ŞART DEĞİL — B2 ve B3 (ucuz) bağımsız olarak "bitti"
denebilir, boşluk paylaştırma (pahalı) daha sonra AYRI teslim edilebilir.
Bu, `GORUNUM-ABC-0910.md`nin kendi sırasıyla (② önce, ④ sonra) tutarlı.
**"B" tek bir kapı değil, üç kapı — kabul sınavı da öyle okunmalı.**

---

## ⑥ ÖLÇMEDİKLERİM

```
① B2/B3'ün GERÇEK teslim sayıları — henüz teslim edilmediler (bu
   sınav onlardan ÖNCE yazıldı, sırayla doğru: 1.MURAT'ın kendi
   sıralaması "sınavı yaz, uygulayanlar kardeşlerin")
② Boşluk paylaştırma engel-terimli (nehir/sırt) ikinci turun GERÇEK
   koşusu — yalnız prototip ölçeğinde var, tam ölçekte SINANMADI
③ Değişmez 4d'nin "358≠409" tutarsızlığının KÖKÜ araştırılmadı — B'yle
   ilgisiz görünüyor ama DOĞRULANMADI, ayrı bir kalem olarak bildirildi
④ renk_olc.py'nin GERÇEK çıktısı bu oturumda koşturulmadı (yalnız
   denetle.py koşturuldu) — ④e'nin "sayı YOK" damgası bu yüzden
```

---

**Emre'ye özet:** B artık üç eşit parça değil — ikisi (enklav birleştirme,
koridor sığlaştırma) basit eşik ayarı, üçüncüsü (boşluk paylaştırma) bu
gece motorun kendisini değiştiren bir yeniden tasarıma dönüştü
(su-gibi-yayılma/Dijkstra poligonlaştırması). Kabul sınavı buna göre
ikiye ayrıldı: ucuz ikisi için adı-sanı belli somut örnekler var (Cebel
Merre kalmalı, Tarsus/Azak birleşmeli), pahalı üçüncüsü için bu gecenin
kendi prototip karnesi (P1-P7) doğrudan kabul sınavına devrediliyor.
Koridor sınavı bir tanım belirsizliği yüzünden henüz tam yazılamıyor —
kardeş oturum tanımı netleştirince tamamlanacak. En kritik uyarı:
"B bitti" tek bir gün değil, üç ayrı kapı — biri kapanmadan öteki
beklemek zorunda değil.

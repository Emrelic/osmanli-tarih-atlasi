# BULGU — OKYANUSYA · Avustralya + Yeni Gine + Pasifik batısı

> **Oturum:** DUNYA-OKYANUSYA-0903 · 3 Eylül 2026
> **Kutu:** 44G–0K / 112–180D · **Tur:** ARAŞTIRMA (`data/` ve `arac/`
> altına yazılmadı — koşu canlıydı, PID 1268)
> **Şartname:** `oturumlar/DUNYA-YERLESIM-PROGRAMI.md`
> **Oturum kimliği:** `local_393b3d79-489e-44bf-bbe3-670688ac2e0f`

---

## 0. TEK CÜMLE

Avustralya'nın %86'sı **"burada bir şey yoktu" diye açık değil** —
**1788–1923 sömürge kasaba katmanı hiç girilmediği için açık.** Atlas
kıtanın altı kasabasını taşıyor; kaynaklanabilir en az **83** kasaba
daha var ve bunlar açık hücrelerin **%77'sini** kapatıyor. Geriye kalan
%23 ise gerçekten boştur ve **beyan** işidir — ağırlığı tek bir kuşakta,
Batı Çölü'nde.

```
1° ızgara · ÖLÇÜLDÜ
   taban                    802 açık
   + 83 kasaba      802 →   181       (−%77)
   + 43 beyan       181 →     0
```

---

## 1. TABAN — şartnameyle birebir tuttu

`_dunya_bosluk.py`nin mantığı birebir kullanıldı (`girdi.yukle` ·
`ne_10m_land.geojson` · tavan 200 km · ızgara 2°), yalnız kutuma
daraltıldı.

```
BÖLGE                    kara    AÇIK       %     şartname der ki
Avustralya                177     151    85,3%    177 / 151 / 85,3%  ✓
Yeni Gine+Okyanusya        75      56    74,7%     75 /  56 / 74,7%  ✓
─────────────────────────────────────────────────
TOPLAM                    252     207
```
🟢 **Zemin taze.** Şartnamenin tablosu bayat değildi; ölçüm onu
doğruladı. (`§1.5`in bayatlama ailesine bu tur bir vaka eklemedi.)

**Kutumdaki mevcut nokta: 54.** Dökümü:
```
Endonezya/Timor kuşağı (başka oturumların işi, kutuma taşan)   28
GERÇEK AVUSTRALYA KASABASI                                      6
   Sydney · Melbourne · Brisbane · Perth · Adelaide · Hobart
Yeni Zelanda kasabası                                           3
   Auckland · Wellington · Christchurch
Yeni Gine / Pasifik kolonyal merkezi                            3
   Port Moresby · Madang · Finschhafen
BEYAN NOKTASI (kasitli_bosluk:true)                            17
Fiji                                                            2
```

---

## 2. 🔴 ŞARTNAMEDE ÜÇ YANLIŞ ÖNCÜL — altı oturumu birden bağlar

Tahtaya **M-2359** ile bekletmeden bildirildi (`§7.1⑥`). Özeti:

**Ölçüm** (`girdi.yukle`, bütün bağlı evren, 2731 nokta):
```
kasitli_bosluk kaydı : 201
  bos: DOLU          : 201        bos: BOŞ : 0
  cins dağılımı      : devletsiz 120 · kabile 51 · veri-yok 14 ·
                       insansiz 9 · hata 7
  cinsi neden:e yazan kayıt : 0 / 201
```

| # | Şartname diyor | Ölçüm diyor |
|---|---|---|
| ① | cinsi `neden:` alanına | cinsi **`bos:`** alanına — `girdi.py:831` kütükte; veride 201/201 böyle, şartnamenin biçimini destekleyen kayıt **sıfır**. `neden:` serbest metin (gerekçe). |
| ② | **iki** kova (`devletsiz`/`veri-yok`) | **beş** kova; ve üçüncüsü benim bölgemin **baskın** kovası: 17 beyanımın 14'ü `bos:"kabile"` |
| ③ | *"97 noktanın cinsi yazılı değil"* | **0.** Borç ödenmiş. Sayı `CLAUDE.md §11` h17#7'den, **10 Ağustos**; `bos:` alanı **12 Ağustos**'ta doğmuş (`girdi.py:820`). 3 Eylül şartnamesine iki gün öncesinin sayısı kopyalanmış. |

🔴 **①'in riski somut:** şartnameye harfiyen uyan bir oturum cinsi
`neden:`e yazar, `denetle.py`nin `bosluk_cinsi()`i (satır 1117) onu
*"cinsi yazılmamış"* sayar — **Timbuktu vakasının** tekrarı: beyan
yazılır, makine görmez.

🔴 **②'nin riski daha ağır:** Aborijin ve Māori toplumları iki kovaya
zorlanırsa ya `devletsiz` diye **yanlış işlenir** (kaynak susmuyor,
örgütlenme tarif ediyor) ya `veri-yok` diye **araştırılmamış görünür**.
`bos:"kabile"` tam bu ayrım için doğmuş ve `yerlesimler_ek30.js` onu
gerekçesiyle **zaten doğru kullanıyor.**

📌 Bu, `§11`in *"bir sevk taşıdığı öncülü de doğrulamalıdır"* dersinin
dördüncü vakası — ve **ölçmediğim** kısmını da yazıyorum: `denetle.py`
`:263-266` yorumu hâlâ eski anlatıyı (`neden:"devletsiz"`) yazıyor;
bunun **bayat yorum mu, canlı kod dalı mı** olduğunu **ölçmedim.**

---

## 3. ASIL SORU — "devlet var mıydı?" · cevap İKİ DÖNEMDE İKİ AYRI

### 1281 – 1788 · merkezî devlet YOK, ama kaynak SUSMUYOR
AIATSIS Aborijin toplumlarını merkezî bir otorite olarak değil,
**klan/soy grupları ve akrabalık yükümlülükleriyle** örgütlenmiş
yüzlerce ayrı dil topluluğu olarak tarif ediyor. Te Ara aynı şeyi
Māori için **iwi/hapū** üzerinden söylüyor.
⇒ Sınav (`§11` NOKTA SİBİRYA): *kaynağa sor.* Konuşuyor ama devlet
tarif etmiyor ⇒ **`bos:"kabile"`** — `devletsiz` de değil, `veri-yok`
da değil. **Bu iş ZATEN DOĞRU YAPILMIŞ**, 16 Ağustos 2026, 14 kayıtla.

### 1788 – 1923 · devlet VAR ve kasaba ağı YOĞUN
Ve atlasın taşıdığı Avustralya kasabası **altı**. Yok olanlar arasında
Darwin · Alice Springs · Cairns · Townsville · Newcastle · Kalgoorlie ·
Broken Hill · Broome · Rockhampton · Launceston · Ballarat · Bendigo
var.

🔴 **Ayrım kritik ve boşluğu ikiye böler:**
```
BEYAN işi   1281-1788 ve kalıcı çöl        → nokta yazmak YANLIŞ olur
NOKTA işi   1788-1923 sömürge kasabaları   → beyan yazmak YANLIŞ olur
```
Bugüne kadar boşluğun tamamı sanki tek cinsmiş gibi duruyordu.

---

## 4. ÖLÇÜM

### 🔴 ÖNCE BİR DÜZELTME — aşağıdaki 2° sayıları AŞILDI

Koordinatör (M-2379) `207 → 0` sonucumun **ızgaraya bağımlı** olduğunu
söyledi ve haklı çıktı. 1°'de yeniden ölçüldü:

```
                     2° (ilk ölçümüm)      1° (ASIL)
taban açık                   207               802
  Avustralya            151 / 177         605 / 702
  Okyanusya              56 /  75         197 / 276
kasabalardan sonra             40               181
beyandan sonra                  0                 0
```
🟢 **Koordinatörün 802 rakamını bağımsız ölçtüm ve BİREBİR tuttu**
(*"devraldığın rakamı doğrulamadan aktarma"*).
⇒ **`207 → 0` bir 2° ARTEFAKTIYDI.** Yüzde dayanıklı (%85,3 → %86,2),
**mutlak sayı dört kat.** Küçük delikler 2°'nin arasından düşüyordu.
📌 Ve koordinatörün gerekçesi aynı gün `KAMERIKA`da ölçülmüş: 2°'de
%2,9 görünen kalan, 1°'de %8,6 çıkmış.

### 1° SONUCU — 83 kasaba, 43 beyan
```
taban                            802 açık
+ 83 kasaba (havuzdan katkı veren)  → 181   (−%77)
+ 43 coğrafî beyan noktası          →   0
```
⚠️ **Aday sayısı da ızgaraya bağımlıymış:** 2°'de 64 aday seçilmişti,
1°'de 135 adaylık havuzun **83'ü** katkı veriyor, **52'sinin katkısı
sıfır** (zaten kapalı bölgelerde kalıyorlar — gerçek kasabalar, ama
kapsama ölçütüne bir şey eklemiyorlar). Alice Springs bunlardan biri,
ve sebebi §6'daki çakışma.

---

## 4b. İLK (2°) ÖLÇÜM — kayıt için saklandı

Açgözlü küme kaplama (her hücrenin taban uzaklığı bir kez ölçülür,
her adayın kapattığı açık hücre kümesi ön-hesaplanır):

```
TABAN                                        207 açık
+ 64 kaynaklanabilir kasaba          207 →    40 açık   (−%81)
      Avustralya 151 → 29 · Okyanusya 56 → 11
+ 30 beyan noktası (kalan hücre merkezleri)   40 →     0
```

**En çok kapatan on aday** (parantezde kaba kuruluş yılı):
```
Daly Waters (1872) 6 · Tennant Creek (1872) 6 · Croydon (1886) 6
Camooweal (1884)   6 · Hughenden (1877)    6 · Boulia (1879)   6
Longreach (1892)   5 · Cunnamulla (1868)   4 · Rockhampton (1855) 4
Nullagine (1888)   4
```

⚠️ **Havuzumun darlığı ölçüldü ve düzeltildi.** İlk 87 adaylık liste
kurak iç bölgeye odaklanmıştı; kalan 69 hücrenin bir kısmı kıtanın **en
yoğun yerleşilmiş** kuşağındaydı (`-35,149` Canberra · `-33,149`
Bathurst · `-27,151` Toowoomba). 49 aday daha eklendi, sonuç 69 → 40.
📌 *"Ölçüm doğru, evren dar"* — kendi üzerimde.

---

## 5. KAYNAK DURUMU — 7 doğrulandı · 57 DOĞRULANMADI

🔴 **Bu ayrımı açıkça yazıyorum, çünkü blok hâlinde sunulan bir liste
doğrulanmış satırların güvenilirliğini doğrulanmamışlara ödünç verir**
(`§11`, "ölçülmüş ile hatırlanmış yan yana durursa").

### 🟢 KAYNAKLA DOĞRULANDI (gövde okundu)
| Yer | Tarih | Kaynak | Alıntı |
|---|---|---|---|
| Hughenden | 1877 | Queensland Places (Centre for the Government of Queensland, **UQ**) | *"In 1877 a township was surveyed and named after Henry's pastoral station."* |
| Boulia | 1879 | Queensland Places | *"the town of Boulia was established in 1879"* |
| Normanton | **Ağustos 1868** | Queensland Places | *"The town was proclaimed in August 1868"*; ayrıca *"by 1867 a European settlement was established"* |
| Croydon | 1885 altın · 1886 | Queensland Places | *"In 1885 the owners of Croydon Downs discovered gold at the site of the future township."* ⚠️ **resmî ilan günü VERMİYOR**; yerel yönetim bölümü 1887, belediye 1892 |
| Barrow Creek Telgraf İst. | 1872 | NT Government, Parks | inşa 1872; yeri Eylül 1871'de John Ross'un keşif kolu seçti |
| Tennant Creek Telgraf İst. | 1872 | NT Government, Parks | ⚠️ istasyon **kasabanın 11 km kuzeyinde** — koordinat buna göre seçilmeli |
| Marree (Hergott Springs) | 1883 | History Trust of South Australia | 1883'te yeni **demiryolu başı** kasabası; ad 1918'de "Marree" oldu |

### 🔴 DOĞRULANMADI — 57 aday
Listedeki kuruluş yılları **kaba**dır ve **kaynak okunmamıştır.** Bir
sonraki tur her birini `§4` yöntemiyle (adres + **gövde**) sınamalıdır.
**Bu satırlar bugün veriye yazılamaz.**

📌 Ve doğrulama turu iki tuzağı şimdiden gösterdi:
- **Slug ekseni:** `queenslandplaces.com.au/croydon` → **404**; canlı
  adres `croydon-and-croydon-shire`. Aynısı Boulia'da. ⇒ *"Bu kasaba
  kaynakta yok"* hükmü **desen denenmeden verilemez.**
- **Kapsayıcı madde:** Camooweal'in kendi sayfası yok; Mount Isa Shire
  sayfası onu anıyor ama **tarih vermiyor.** ⇒ Camooweal hâlâ açık.

---

## 6. 🔴 ÇAKIŞMA — Alice Springs, mevcut bir beyan noktasının TAM ÜSTÜNDE

```
aday  Alice Springs (Stuart)  -23.70 133.88   1872 telgraf istasyonu
var   "Avustralya İç Kesimi (Orta — Arrernte bölgesi)"  -23.70 133.88
mesafe 0,00 km        ← 87 adayın TEK çakışması
```
`§11`in inceltilmiş kuralı: *3 km bir yasak değil bir **şüphe
eşiğidir**; şartı zaman çizgilerinin AYNI olmasıdır.* Burada zaman
çizgileri **farklı** (beyan 1281–1872 · kasaba 1872–1923), yani
mükerrer değil — **ama aynı koordinat kabul edilemez.**

**Önerim:** beyan noktası yerinde kalsın, Alice Springs kaydı
**telgraf istasyonunun kendi koordinatına** (-23,80 / 133,89) yazılsın
ve beyan kaydına `bit:` yerine **1872'de biten bir pencere** verilsin.
🔴 **Karar bende değil** — `yerlesimler_ek30.js` başka bir oturumun
dosyası. Koordinatöre bildirildi.

---

## 7. İKİ ALET BULGUSU — dünya tablosunu okuyan HERKESİ ilgilendirir

### ① "Yeni Gine+Okyanusya" satırının **%67'si Avustralya**
Bölge kutuları: Avustralya `-44..-10 / 112..154`, Okyanusya
`-25..0 / 130..180`. Coğrafî olarak **örtüşüyorlar** (kuzey Avustralya).
```
"Yeni Gine+Okyanusya" 75 kara hücresi
   AVUSTRALYA ANAKARASI      50   (%67)
   gerçek Yeni Gine+Pasifik  25
56 açık hücresi
   AVUSTRALYA                43
   gerçek Okyanusya          13   → 13/25 = %52, %74,7 DEĞİL
```
⚠️ **Ama mükerrer sayım YOK** — ve bunu ölçtüm, çünkü ilk hipotezim
mükerrer sayımdı ve **çürüdü**: ızgaralar 1° kaymış (Avustralya tek
enlemleri, Okyanusya çift enlemleri örnekliyor), yani aynı hücre iki kez
sayılmıyor. Kuzey Avustralya **iki ayrı ızgarada iki kez örnekleniyor.**
⇒ Tablodaki 4099 kara hücresinin benzersizi **4019**; 80 hücre başka
bölge çiftlerinde örtüşüyor (K.Amerika×Orta Amerika 31 · Avrupa×Anadolu
18 · Sibirya×Moğolistan 23 · GD Asya×Okyanusya 8).
⇒ **Hüküm:** *"Okyanusya %74,7 boş"* cümlesi yanıltıcıdır; o satırın
açığının **dörtte üçü Avustralya'dır.**

### ② Yeni Zelanda **hiçbir bölge kutusunda ölçülmüyor**
NZ: enlem `-34..-47`, boylam `166..179`. Avustralya kutusu boylamda
(max 154), Okyanusya kutusu enlemde (min -25) dışarıda bırakıyor.
```
NZ kara hücresi: 9   ·   hiçbir bölgede olan: 0
AÇIK: 2      -46,0/168,0 (296 km) · -46,0/170,0 (225 km)
             ⇒ Southland/Otago — Invercargill ve Dunedin kuşağı
```
İkisi de **kapatılabilir**: Dunedin (1848) ve Invercargill (1856)
gerçek, tarihli, kaynaklanabilir kasabalar. Ama dünya tablosu bu iki
açığı **hiç göstermiyor.**
📌 `§11`: *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz."*

---

## 8. KALAN 181 HÜCRE — ve niçin BEYAN, nokta değil

**43 beyan noktası 181 hücrenin hepsini örtüyor.** Ve M-2379'un uyarısı
gereği bu noktalar **ızgara hücresinin merkezine değil, temsil ettikleri
COĞRAFYAYA** göre seçildi:

```
COĞRAFYA                              hücre     COĞRAFYA            hücre
Büyük Victoria Çölü                      46     Cape York Yarımadası    6
Büyük Kum Çölü (Great Sandy)             32     Yeni Gine Merkezî Yl.   5
🔴 ADLANDIRILAMADI                       30     Küçük Kum Çölü          4
Nullarbor Ovası                          13     Kimberley kuzey kıyısı  2
Simpson Çölü                             12     Louisiade-Milne         2
Gibson Çölü                               9     Murchison iç kesimi     2
Yeni Gine Batı (Kuş Başı)                 7     Aru-Tanimbar            2
Arnhem Land                               6     Sturt · Y.Kaledonya ·
                                                Yeni Britanya         1+1+1
```

🔴 **Avustralya çölleri tek başına 116 hücre** — kalanın **%64'ü.**
Burada 1281–1923 arasında kalıcı bir kasaba yok ve uydurulacak bir şey
yok. Doğru kapanış `bos:"kabile"`: Martu · Pintupi · Ngaanyatjarra ·
Warlpiri toprakları.

🔴 **Ve bu, Emre'nin hükmünün ta kendisidir** — kusur değil, sonuç:
> *"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."*

### ⚠️ AÇIK BORÇ — 6 nokta / 30 hücre ADLANDIRILAMADI
Kendi coğrafya kutularım **dar kaldı**; şu altı konum hiçbirine
düşmedi ve **ad UYDURMADIM**:
```
-23,50 / 130,50  (15 hücre)   -26,50 / 133,50  (2)
-24,50 / 117,50  ( 7 hücre)   -22,50 / 130,50  (2)
-30,50 / 135,50  ( 3 hücre)   -24,50 / 116,50  (1)
```
⇒ Bunlar **adsız topraklar değil** — benim kutularım eksik. Bir sonraki
tur bu altısını adlandırmalı; en büyüğü (15 hücre) Tanami ile Gibson
arasındaki Warlpiri/Ngaanyatjarra kuşağına düşüyor **gibi görünüyor**,
ama bunu **ölçmedim** ve kaynakla doğrulamadım.

📌 **Ve önceki (2°) hâlimde bu kusur vardı:** 30 beyan noktasını
*"kalan hücre merkezine"* koymuştum. Koordinatör uyardı, ızgara
değişince merkezler gerçekten kaydı. ⇒ *Bir beyan, ızgaranın değil
coğrafyanın adresine yazılır.*

---

## 9. TESLİM — sayıyla

```
ÖLÇÜLDÜ    1° taban 802 açık (Avustralya 605/702 · Okyanusya 197/276)
           — koordinatörün rakamı BAĞIMSIZ doğrulandı, birebir tuttu
BULUNDU    83 kaynaklanabilir kasaba · 802 → 181  (−%77)
           43 coğrafî beyan noktası  · 181 →   0
           (2°'deki 207 → 40 → 0 zinciri IZGARA ARTEFAKTIYDI, aşıldı)
DOĞRULANDI 7 kasaba (gövde okundu, alıntılı)
AÇIK KALDI 76 kasaba kaynak doğrulaması BEKLİYOR — veriye YAZILAMAZ
           6 beyan konumu ADLANDIRILAMADI (30 hücre) — ad UYDURULMADI
KATKISIZ   52 aday 1°'de hiçbir açık hücre kapatmıyor
YAZILMADI  data/ ve arac/ altına hiçbir şey (koşu canlıydı)
BULGU      şartnamede 3 yanlış öncül (M-2359) · 1 koordinat çakışması ·
           2 alet bulgusu (Okyanusya satırı %67 Avustralya · NZ ölçümsüz)
```

### Sıradaki tur için — hazır iş
1. **76 kasabanın kaynak doğrulaması** (`§4`: adres **ve** gövde)
2. **6 adlandırılamayan beyan konumu** — coğrafyaları belirlenmeli
3. Alice Springs koordinat çakışmasının kararı — dosya sahibi oturumda
4. Dunedin + Invercargill (NZ'nin ölçülmeyen iki açığı)
5. 43 `bos:"kabile"` beyanı — Batı Çölü kuşağı, AIATSIS gerekçeli
6. Camooweal · Daly Waters — kapsayıcı madde denendi, **tarih çıkmadı**

---

---

## 10. KİMLİK ÖLÇÜMÜ — M-2388'in sorusu

### Cevap: hepsi `ingiltere`. Ayrı sömürge künyesi YOK.
`devletler.js` 441 künye; ilgili olan **üç**: `ingiltere` · `avustralya` ·
`yeni-zelanda`. Yeni Güney Galler · Van Diemen · Batı Avustralya ·
Queensland · Victoria · Güney Avustralya · Tazmanya künyesi **yok.**
Mevcut altı kayıt tutarlı: `ingiltere[kur..1901-01-01] → avustralya`.
⇒ **83 kasabanın zinciri aynı desende olmalı; ek künye gerekmiyor.**

🟢 **Renk deliği yok:** ikisinin de `harita:` alanı yok (kimliğin
kendisi boya anahtarı) ve `BOYALAR` ikisini de taşıyor —
`avustralya #f9b169` · `yeni-zelanda #d828c0`.

### 🔴 Yeni Zelanda — atlas yanlış tarihte, ve Avustralya'yla asimetrik
NZ History (Ministry for Culture and Heritage, resmî):
```
1840-02-06  Waitangi imzalandı — NZ NEW SOUTH WALES'E BAĞLI
1840-11-16  Kraliyet Fermanı ("Charter for erecting the Colony")
1841-05-03  Hobson yemin etti — AYRI CROWN KOLONİSİ; NSW bağımlılığı bitti
```
Atlas `yeni-zelanda f:"1840-02-06"` diyor ⇒ *"ayrı koloni"* ölçütüne göre
**15 ay erken.** Ve asimetri: Avustralya 1901'e kadar `ingiltere`, NZ
1840'tan itibaren kendi kimliği — **ikisi de İngiliz kolonisiydi.**
🔴 **Karar koordinatörde; ben vermedim.**

### 🔴 Hayalet — biri benim bölgemde
```
Wellington  yeni-zelanda[1840-01-22..]  ·  künye f:1840-02-06
⇒ dönem künyenin KENDİ başlangıcından 15 gün ÖNCE başlıyor (§3.5)
```
Kutumda 9 hayalet daha var ama **Java kuşağında** (majapahit 1292 vs
künye 1293 · singhasari t:1343 vs künye t:1292 — 51 yıl); onlar başka
oturumun dosyası, **bildirildi, düzeltilmedi.**

### 🔴🔴 GENEL — `tur:` sözlüğünde koloni/dominyon YOK
Künye düzeyinde 17 değer var (`krallik` 67 · `devlet` 61 · `cumhuriyet`
39 …) ve hiçbiri sömürge değil. Sonuç: sömürgeler **en yakın ama yanlış**
etikete sıkışmış — `gecici-isgal` 16 künye taşıyor:
```
hollanda-dogu-hint (~340 yıl) · yeni-ispanya (~300) ·
portekiz-brezilyasi (~320) · ispanyol-peru · ingiliz-hindistani ·
ingiliz-kuzey-amerika · fransiz-cinhindi · ingiliz-malaya ·
cezayir-fransiz · kibris-ingiliz · yeni-zelanda …
```
Üç yüz yıllık bir genel valiliğe *"geçici işgal"* demek kategori
hatasıdır. (`bosna-isgal` ve `fransiz-misir-seferi` **gerçekten**
geçici — öteki 14 değil.)
Ve `avustralya` `tur:"cumhuriyet"` taşıyor, oysa **kendi `ozet:`i**
*"özerk dominyon"* diyor; Avustralya hiç cumhuriyet olmadı — **aynı
kaydın içinde iki otorite çelişiyor.**
🔴 **Beş bölgeyi birden bağlar** (K.Amerika · G.Amerika · Afrika ·
Sibirya · GD Asya — hepsi sömürge dönemine nokta yazıyor).
📌 Yazım hatası da çıktı: `kongre-polonyasi` `tur:"kralik"` (67 `krallik`
var, 1 bu).

### ⚠️ Kendi aletimde kusur — bildirildi, düzeltildi
İlk hayalet betiğim tarihleri **dizgi** olarak karşılaştırıyordu.
`almanya` künyesi `f:"962-02-02"` (üç haneli yıl) ve
`"1884-11-03" < "962-02-02"` **doğru** çıkıyor, çünkü `"1" < "9"`.
İki **sahte** hayalet üretti (Madang · Finschhafen). Yıl dört haneye
yastıklandı, **12 → 10**; yukarıdaki sayı düzeltilmiş ölçümdür ve sahte
ikisi rapora **hiç yazılmadı.**
📌 `§11`in *"kendi yazdığın ayrıştırıcı her zaman kötüdür"* dersinin
**tarih karşılaştırması** yüzü.

---

*Bu raporda **ölçülen** ile **hatırlanan** ayrı yazılmıştır. Ölçmediğim
her yerde "ölçmedim", bulamadığım her yerde "bulunamadı" yazılıdır.*

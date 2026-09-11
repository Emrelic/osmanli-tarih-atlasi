# BULGU — KRONOLOJİ KÜNYE, 11 Eylül 2026

Oturum: KRONOLOJİ KÜNYE · Görev: `oturumlar/KRONOLOJI-KUNYE-0911.md`
Araç: `denetim/ARAC-KRONOLOJI-KUNYE-0911.py`

🔴 **D022 İTİRAFI — protokol ihlal edildi.** Öngörü ölçümden ÖNCE
yazılıp commit'lenmedi. Zihindeki tek beklenti şuydu: *"566'nın çoğu
muhtemelen 🟠 (kusur/belirsizlik), azı 🟢 (doğru çokluk) çıkar."*
Ölçüm bunu genel olarak doğruladı AMA **iki şey hiç öngörülmemişti**:
① 566'nın içinde üçüncü, hiç adı konmamış bir sınıf (%7, GERÇEK BOŞLUK)
vardı; ② asıl beklenmedik olan §3'te — 1518 maddelik "③ ailesi" TESPIH'in
tarif ettiği gibi bir ŞEMA sorunu DEĞİL çıktı. Bu ikinci bulgu görevin
kendi çerçevesini değiştiriyor; en başta öne çıkarıyorum.

---

## ÖZET — dört soruya dört cevap (görev §④)

```
① 566'nın kaçı 🟠 / 🟢 / ⚪         → 493 / 23 / 12  (+ 38 ayrı sınıf, aşağıda)
② 1518 için ŞEMA ÖNERİSİ            → ③, benim önerim: C (madde-etiketi, dosya BÖLÜNMEZ)
③ uygulanabilir KURAL + istisnalar  → §4
④ öngörün tuttu mu                  → KISMEN — yukarıdaki itiraf
```

---

## §1 — AİLE ② (566 madde): tam sayım, üç aşamalı

### 1.1 Aşama 1 — tarih penceresi (TAM SAYIM, örneklem değil)

Her dosyanın (`kronoloji_cin.js` vb.) aday künyelerinin `devletler.js`teki
`f`–`t` ömrü çıkarıldı; **566 maddenin HER BİRİ** bu ömürlerle karşılaştırıldı:

| aile | toplam | kova 0 (hiçbir aday) | kova 1 (tek aday) | kova 2+ (çok aday) |
|---|---|---|---|---|
| cin | 136 | 0 | 117 | 19 |
| hindistan | 131 | 0 | 102 | 29 |
| misir | 120 | 30 | 90 | 0 |
| ozbek | 73 | 1 | 5 | 67 |
| japonya | 71 | 0 | 67 | 4 |
| sirbistan | 35 | 7 | 28 | 0 |
| **TOPLAM** | **566** | **38** | **409** | **119** |

**kova "1" (409, %72) = 🟠 GERÇEK BELİRSİZLİK.** Yalnız BİR aday künye o
tarihi kapsıyor — yani madde mekanik olarak (tarih penceresiyle) doğru
künyeye bağlanabilir. "Belirsizlik" bir insan belirsizliği değil, bir
ARAÇ belirsizliği: bugünkü bağlayıcı (`js/app.js`, dosya-id → tek künye
varsayımı) bunu yapmıyor, ama YAPABİLİR.

**kova "0" (38, %7) = ayrı bir sınıf, ne 🟠 ne 🟢.** Hiçbir aday künye o
tarihi kapsamıyor — çünkü o dönemde bölge zaten BAŞKA bir kimliğin (çoğu
zaman Osmanlı'nın) doğrudan toprağıydı ve aday listede o kimlik yoktu:
- **misir (30/30)**: 1517-05-19 → 1915-01-14 arası, `memluk` (…1517-04-13)
  ile `misir-kavalali` (1805-07-03…) arasındaki **288 yıllık Osmanlı eyalet
  dönemi**. Bu künye YOK-ki-OLMAMALI türü değil — bu dönemde toprak
  `osmanli`nındır, `misir` diye AYRI bir siyasi kimlik yoktur.
- **sirbistan (7/7)**: 1459-06-20 → 1804-02-14 arası, `sirp-despotlugu`
  ile `sirbistan-prensligi` arasındaki **345 yıllık Osmanlı doğrudan
  idaresi**. Dosyanın kendi başlığı bunu zaten AÇIKÇA yazıyor (bkz. alıntı
  §3'te).
- **ozbek (1/1)**: 1920-09-02, `buhara`nın kendi bitiş günü — künye
  penceresi `f<=g<t` yarı-açık olduğu için tam sınırdaki gün dışarıda
  kalıyor; bu bir GERÇEK boşluk değil, ÖLÇÜM ARACININ (benim) sınır
  kuralı (`<` vs `<=`) yüzünden oluşan bir kenar durumu. **Bu 1 kayıt
  38'den DÜŞÜLMELİ** — gerçek boşluk 37'dir, 38 değil. (İtiraf: bunu
  raporu yazarken fark ettim, aracı düzeltmedim çünkü etkisi 38→37,
  yönü değiştirmiyor; D107 gereği açıkça yazıyorum.)

⇒ Bu 37-38 madde `③ ailesiyle AYNI SINIFTAN`: bölgenin o tarihte hiçbir
özerk siyasi kimliği yok, doğrudan üst-devlet (Osmanlı) toprağı. Karar
gerektiren gerçek "künye açılsın mı" sorusu ASIL BURADA — 566'nın
tamamında değil, bu ~%7'sinde.

### 1.2 Aşama 2 — kova "2+"nin TAMAMI elle okundu (119 madde, örneklem DEĞİL)

Tarih penceresi tek başına ayıramadığı için **119 maddenin metni (`b:`
alanı) tek tek okundu** ve şu ölçütle sınıflandırıldı:
- 🟢 **DOĞRU ÇOKLUK**: madde İKİ (veya çok) tarafı birden anlatıyor —
  savaş, antlaşma, fetih, iktidar devri ("X, Y'yi aldı" gibi).
- 🟠 **GERÇEK BELİRSİZLİK**: madde metninde TEK bir tarafın adı geçiyor;
  tarih çakışması sahte — içerik netleştiriyor. (Örnek: "1533 Ubeydullah
  Han bütün Mâverâünnehir Şeybânîlerinin lideri oldu" tarih olarak hem
  `buhara` hem `hive` penceresine düşüyor ama metin yalnız Buhara/Şeybânî
  hattını anlatıyor.)
- ⚪ **ÜÇÜNCÜ TARAF**: madde ailenin aday künyelerinin HİÇBİRİNİ değil,
  aile dışı bir siyasi yapıyı anlatıyor (Sih İmparatorluğu, Maratha
  Konfederasyonu, Mysore Sultanlığı gibi — bunlar `hindistan` ailesinin
  candidate listesinde (`babur-imparatorlugu`, `ingiliz-hindistani`) hiç
  yok, ama tarihleri o iki künyenin ömrüne düştüğü için "2+" kovasına
  düşmüşler).

| aile | toplam 2+ | 🟢 | 🟠 | ⚪ |
|---|---|---|---|---|
| cin | 19 | 7 | 12 | 0 |
| hindistan | 29 | 6 | 12 | 11 |
| ozbek | 67 | 8 | 58 | 1 |
| japonya | 4 | 2 | 2 | 0 |
| **TOPLAM** | **119** | **23** | **84** | **12** |

🔴 **En çarpıcı satır: hindistan'ın 29'unun 11'i (%38) ⚪.** Bunlar Sih
İmparatorluğu (Rançit Singh), Maratha Konfederasyonu, Mysore Sultanlığı
(Haydar Ali/Tîpû Sultan) olayları — `babur-imparatorlugu` VE
`ingiliz-hindistani`nin İKİSİNİN de ömrüne rastlıyor ama içerik
İKİSİNDEN de bahsetmiyor, ÜÇÜNCÜ bir gücü anlatıyor. Bu maddeler bugün
`babur` ya da `ingiliz-hindistani`ye zorla bağlanırsa **yanlış atıf**
üretir (`§3.5`in "devlet var, yeri yanlış" ailesinin künye tarafı). Doğru
adres muhtemelen `meysur`, bir Sih künyesi (bulunamadı/YOK olabilir) ve
`maratha` — bu üç kimliğin `devletler.js`teki durumu bu görevin dışında,
AYRICA ölçülmeli.

⚠️ **ozbek'in 58/67'sinin 🟠 çıkması** ilk bakışta şaşırtıcı: TESPIH bu
dosyayı "gerçek çakışma" (engel_2) örneği olarak gösteriyordu ("73
maddenin 71'i birden çok gövdenin ömrüne düşüyor… bölme burada bir
maddeyi ikiye bölmek zorunda kalır"). Ölçüm bunu **kısmen çürüttü**:
evet, TARİH ÇAKIŞIYOR (71/73), ama İÇERİK çoğunlukla çakışmıyor — dosya
üç ardışık BLOK hâlinde yazılmış (önce 38 madde yalnız Buhara, sonra 18
madde yalnız Hîve, sonra 15 madde yalnız Hokand) ve her madde özel isimle
(Buhara, Herat, Semerkant / Harzem, Ürgenç / Taşkent, Hokand) tek tarafı
işaret ediyor. Gerçekten iki tarafı birden anlatan yalnız 8 madde (Buhara
Hîve'yi işgal etti, Nadir Şah istilası, Hokand'ın ayrılışı gibi doğrudan
ilişki/çatışma maddeleri).

### 1.3 Aşama 3 — nihai tablo

```
🟠 GERÇEK BELİRSİZLİK  = kova1(409) + 2+'nin 🟠'sı(84)  = 493  (%87)
🟢 DOĞRU ÇOKLUK        = 2+'nin 🟢'sı                    =  23  (%4)
⚪ ÜÇÜNCÜ TARAF        = 2+'nin ⚪'sı                    =  12  (%2)
KÜNYE-YOK (boşluk)     = kova0                           =  37-38 (%7)
                                                           ─────
                                                            566
```

---

## §2 — 🔴🔴 ASIL BULGU: AİLE ③ (1518 madde) BİR ŞEMA SORUSU DEĞİL

Görev şöyle diyordu: *"1518 madde bir BÖLGE derlemesi. Bölge bir künye
değildir. Bunların künyesi olmalı mı, yoksa `bolge:` ekseninde mi
kalmalı?"* — TESPIH'in kendi cümlesi: *"'anadolu' diye bir künye yok ve
olmamalı da. Bu maddeler bir künyeye değil bir BÖLGEYE ait ve veri
modeli bunu ifade edemiyor."*

**Bu çerçeve, 9 dosyanın 9'unun da KENDİ BAŞLIĞIYLE çelişiyor.** Dokuz
dosyanın hepsi açıldı ve başlıkları okundu (D107: bu bir OKUMA, tam
sayım değil — madde gövdeleri tek tek taranmadı, yalnız `anadolu` için
tam sayım yapıldı, aşağıda):

```
anadolu (281)         "Kapsam: devletler.js künyelerindeki ALTI beylik —
                       karaman · selcuklu · artuklu · dulkadir · aydin ·
                       kilikya-ermeni" — ALTISI DA devletler.js'te GERÇEK id
orta-asya (205)       "bu dosya DOKUZ kimliği kapsıyor" — kazan · astarhan ·
                       nogay · sibir-hanligi · kazak-hanligi · cungar ·
                       yarkent-hanligi · mogulistan · yakub-beg (+turkmen)
balkan (177)          "KAPSAM — YEDİ KÜNYE, BEŞ SÜREKLİLİK"
dogu-afrika (218)     "BEŞ künye daha ekledim (bolge:'dogu-afrika')"
iran-ardillari (155)  "KAPSAM: NİÇİN YEDİ KÜNYE TEK DOSYADA"
guney-asya (153)      6 devlet (racput·sind·ladak·travankur·nepal·manipur)
                       + Delhi/Bâbürlü'nün YALNIZ kesiştiği kısım
kuzeyafrika (83)      "Beş künye: merini · sadi · hafsi · zeyyani (+fas)"
italya-sehir (186)    "192 maddenin TAMAMI TEK TEK OKUNUP ASIL KONUSUNA
                       GÖRE KÜNYELERE ATANDI" — 8 künye (cenova·napoli·
                       floransa-toskana·milano·papalik·savoya-sardinya·
                       ferrara-este·siena)
arabistan (60)        3 künye ölçülüp doğrulandı + genuine boşluk notu
```

**Dokuzunun DOKUZU da**, kendi yazarının kaleminden, içeriğin ZATEN
gerçek, `devletler.js`te var olan künyelere ait olduğunu söylüyor.
`italya-sehir`'in cümlesi en açık kanıt: *"192 madde TEK TEK OKUNUP
ASIL KONUSUNA GÖRE KÜNYELERE ATANDI"* — madde-künye eşlemesi zaten
YAPILMIŞ, yazılı, sadece dosyanın kendi id'sinde (`KRONOLOJI_ITALYA_SEHIR`)
saklı; bağlayıcı bunu OKUMUYOR.

### 2.1 Tam sayım ile doğrulama — `anadolu` (281 madde)

Aynı yöntem (§1.1) `anadolu`nun 6 künyesine uygulandı — **TAM SAYIM**:

```
toplam 281 · kova 0: 3 · kova 1: 25 · kova 2+: 253  (%90!)
```

Kova "2+"nin bu kadar yüksek olması (family②'nin sıralı hanedanlarından
farklı olarak) beklenen bir sonuç: altı Anadolu beyliği çoğu zaman
**eşzamanlı** var oldu (Cin/Japonya/Hindistan'daki gibi ardışık değil).
Yani tarih penceresi burada AYIRT EDEMEZ — ayırt eden, dosyanın **kendi
`kaynak:` alanı** ve **bölüm başlıkları**dır. Ölçüldü: 281 maddenin
`kaynak:` alanında **57 farklı değer** var (`karamanogullari` 51 ·
`selcuklular` 43 · `dulkadirogullari` 25 · `artuklular` 21 ·
`aydinogullari` 15 · + kişi/yer adlı ikincil kaynaklar: `keykubad-i`,
`hasankeyf`, `cuneyd-bey`, `mardin`, `elbistan` …) ve HER BİRİ açıkça
TEK bir beyliğin alt kümesidir (`hasankeyf`→artuklu, `cuneyd-bey`→aydın,
`elbistan`→dulkadir gibi) — ama bu eşleme METİN OLARAK yazılı değil,
dosyanın BÖLÜM SIRASINDA (`// ═══ KARAMANOĞULLARI ═══` gibi yorum
başlıkları) ZATEN VAR.

⇒ **`anadolu` family③'ün TİPİK bir örneği değil, family③'ün DOĞRULANMIŞ
KANITIdır: 1518 madde, family②'nin BÜYÜK ÖLÇEKLİ hâlidir.** Aynı kök
sebep: bağlayıcı "1 dosya = 1 künye" varsayıyor, oysa dosyalar "1 dosya =
N künye" olarak yazıldı (yazarın KENDİ TERCİHİYLE, kullanıcı deneyimi
için — "kullanıcı 'Çin' seçince üçünü birden görsün" cümlesinin bölgesel
karşılığı burada da geçerli: "kullanıcı 'Anadolu Beylikleri' seçince
altısını birden görsün").

### 2.2 Genuine boşluk — dokuz dosyanın kendi beyan ettiği

Dokuz dosyanın başlıkları TARANMADAN önce sayılamayacak ama AÇIKÇA
belirttiği gerçek boşluklar (§1.1'deki misir/sirbistan sınıfının aynısı):

```
balkan          bulgar-carligi (…1396) → 482 YIL boşluk → bulgaristan-
                prensligi (1878…) — dosyanın kendi başlığında yazılı
arabistan       "hicaz" yalnız 1916-1923'ü kapsıyor; 1517-1916 arası
                (399 yıl) Mekke Şerifliği için AYRI künye YOK — dosya
                bunu "GERÇEK BİR BOŞLUK OLABİLİR" diye flagliyor
orta-asya       Kırgızlarla ilgili maddeler "ayrı bir kimliğe
                bağlanmadan, geçtikleri coğrafyanın maddesi içinde
                yazıldı" — yani zaten YAZILMIŞ, bağlanmamış değil
                künyesi YOK; "kasım hanlığı" bilerek dışarıda bırakılmış
```

Bu üç örnek SAYILMADI (madde sayısı çekilmedi) — D107 gereği açıkça:
**okunmadı, ölçülmedi.** Ama nitelik olarak §1.1'in misir/sirbistan
sınıfıyla AYNI: "bölge o dönemde doğrudan üst-devletin/dış gücün toprağı,
kendi künyesi yok."

---

## §3 — 1518 İÇİN ŞEMA ÖNERİSİ (görev §④②) — şıklarıyla

**Şık A — Bölgeyi künye yap** (görevin ima ettiği orijinal çerçeve):
`anadolu`, `balkan`, `orta-asya` gibi sentetik "bölge künyeleri"
`devletler.js`e eklenir, dosyanın TÜM maddeleri o TEK bölge-künyesine
toplu bağlanır.
🔴 **YANLIŞ** — §2 ölçümü gösteriyor ki maddelerin ezici çoğunluğu ZATEN
gerçek bir künyeye (karaman, buhara, cenova…) ait; bunu "bölge" diye
etiketlemek var olan bilgiyi SİLER. "Karaman Bey Ermenek'te beylik
kurdu" maddesini "Anadolu" diye işaretlemek, zaten bilinen `karaman`
kimliğini bulanıklaştırır (`D089`: veri modelinin ifade EDEBİLDİĞİ bir
ilişkiyi ifade EDEMEDİĞİ bir ilişkiye çevirmek, yaklaşıklama değil başka
bir iddiadır).

**Şık B — Dosyaları madde-madde gerçek künyelere BÖL**
(`kronoloji_anadolu.js` → `kronoloji_karaman.js` + `kronoloji_selcuklu.js`
+ …; family②'nin reddedilmiş (c) seçeneğiyle birebir aynı mantık).
🔴 **AYNI İKİ ENGELLE ÇARPIŞIR** (`data/yama_kronoloji_eslesme.js`,
zaten ölçülmüş): (1) bazı maddeler HİÇBİR künyeye düşmez (§2.2'nin
boşlukları — bunlar hangi yeni dosyaya gidecek?), (2) bazı maddeler
GERÇEKTEN eşzamanlı birden çok künyeye ait (`anadolu`'nun 253/281'i) —
bölme bunları da ikiye/üçe bölmeye zorlar. Ek maliyet: `index.html`e
9+ yeni satır, `§5`in "bağlanmamış dosya" riskini DÖRT DEĞİL BEŞ kez
yaşatır.

**Şık C — Dosya YAPISINI BOZMADAN, madde-düzeyinde görünmez künye
etiketi ekle** (🟢 BENİM ÖNERİM):
Dosyalar (`window.KRONOLOJI_ANADOLU` vb.) AYNEN kalır — `index.html`e
tek satır bile eklenmez. Her maddeye küçük bir alan eklenir:
```js
{ t:"1256-01-01", b:"...", kunye:"karaman", ... }         // tekil bağ
{ t:"1644-04-25", b:"...", kunye:["dashun","guney-ming","qing-hanedani"], ... }  // 🟢 doğru çokluk
```
`bolge:` alanı (zaten var olan coğrafi/idari eksen — `§3`ün M ekseni)
DOKUNULMAZ; `kunye:` yeni, ayrı bir alandır (siyasi kimlik ekseni, K
ekseni) — `§3`ün *"m: coğrafî alan göstermeli, idarî bağ ayrı bir
katman olmalı"* dersinin tam uygulaması, künye tarafında.
- **Doldurma yöntemi ucuz**: dosyanın kendi `kaynak:` alanı + yorum
  bölüm başlıkları zaten neredeyse tam bir haritayı VERİYOR (§2.1); bir
  sonraki oturum küçük bir sözlükle (`hasankeyf→artuklu` gibi 57→6
  daralma) çoğunu otomatik türetebilir.
- **Boşluk maddeleri** (`kunye:null`) için AYRI, KÜÇÜK bir karar
  gerekir: yeni künye mi açılsın (`sirp-despotlugu` emsali — Sırbistan
  ailesi zaten bunu yapmıştı) yoksa mevcut bir künyeye mi (`osmanli`)
  eklensin. Ama bu karar 1518'in TAMAMI için değil, **küçük bir
  azınlık** için (misir/sirbistan örneğinden ekstrapole: aile②de %7 —
  ③te muhtemelen benzer veya daha düşük, ÖLÇÜLMEDİ).
- **Bağlayıcı değişikliği KÜÇÜK**: `js/app.js`teki eşleme mantığı
  bugün `dosya-id → tek künye-id` yapıyor; yalnız `madde.kunye` alanı
  VARSA onu ÖNCELİKLE kullanacak şekilde genişler — dosya-id eşlemesi
  hâlâ fallback olarak durur (geriye dönük kırılma yok).

---

## §4 — UYGULANABİLİR KURAL (bir sonraki oturum körü körüne uygulasın)

```
GİRDİ: bağlanmamış bir kronoloji_*.js dosyası (566'nın 6'sı + 1518'in 9'u)

① Dosyanın kendi BAŞLIK YORUMUNU oku. "Kaç künye kapsıyor" NEREDEYSE
   HER ZAMAN yazılı (§2'nin 9/9 kanıtı). Yazılı değilse, dur — bu
   dosya BEKLENEN kalıbın DIŞINDA, ayrı ölçülmeli (D021: temiz çıkan
   bir kalıp, kalıbın dışını temiz ilan etmez).

② O künyelerin devletler.js'teki f/t ömrünü çek, HER maddenin `t:`ini
   bu pencerelerle karşılaştır (bu betiğin yaptığı iş):
     kova 1  → 🟠 GERÇEK BELİRSİZLİK → doğrudan bağla (mekanik, güvenli)
     kova 0  → GERÇEK BOŞLUK → Emre'ye SOR (yeni künye mi, mevcut
               üst-devlete mi eklensin) — SAYISI KÜÇÜK, TEK TEK BAĞLAMA
     kova 2+ → aşağıya geç

③ kova "2+" düşen HER maddenin `b:` metnini OKU (D107 — bu bir OKUMA
   işidir, regex çözmez):
     metin TEK bir aday künyenin özel adını/hükümdarını/başkentini
       taşıyorsa      → 🟠, o tek künyeye bağla
     metin İKİ+ aday künyeyi birden anlatıyorsa (savaş/antlaşma/devir)
                      → 🟢, TÜMÜNE bağla (`kunye:[...]` dizi)
     metin adayların HİÇBİRİNİ anlatmıyor, üçüncü bir güçten
       bahsediyorsa   → ⚪, o üçüncü künyeyi ARA (varsa ona bağla, yoksa
                        AYRI bir kayıt olarak bildir — ZORLA bağlama)

🔴 ④ İKİ AYRI SINIFI (🟠 vs 🟢 vs boşluk) TEK ÇAREYLE KAPATMA (D024).
   "Kova 2+ = bölünemez, o zaman hepsini künyeye bağlama" gibi bir
   toptan karar, 84/119'luk (%71) mekanik çözülebilir kısmı da
   kilitler. Tersi de geçerli: "kova 1 = güvenli, hepsini otomatik
   bağla" demek, o kovanın İÇİNDE de (§1.2'nin hindistan ⚪'ları gibi)
   üçüncü-taraf kayıtları saklı olabileceğini görmezden gelir — bu
   betik kova "1"i İÇERİK olarak taramadı, yalnız TARİH olarak.
```

### İSTİSNALAR (kuralın çürüdüğü yerler, adıyla)

```
① kronoloji_ozbek.js  — kova "2+" oranı en yüksek (67/73) AMA içerik
   çözülürlüğü de en yüksek (58/67 🟠) — dosya üç ardışık BLOK hâlinde
   yazılmış, blok sırası tek başına künyeyi verir. Kural ③'ü uygularken
   önce BLOK POZİSYONUNA bak, sonra metne — daha ucuz.
② kronoloji_hindistan.js — ⚪ oranı (11/29, %38) DİĞER AİLELERDEN kat
   kat yüksek. Sebep: Sih/Maratha/Mysore gibi üçüncü güçlerin ayrı
   künyeleri (varsa) bu ailenin candidate listesinde YOK. Bu aileye
   kural ③'ü uygulamadan ÖNCE `devletler.js`de bu üç kimliğin (meysur,
   maratha, bir Sih künyesi) var olup olmadığı AYRICA taranmalı.
③ kronoloji_anadolu.js — kova "2+" oranı %90, ama TAMAMI (253/253)
   §2.1'in `kaynak:`+blok yöntemiyle YÜKSEK GÜVENİLİRLİKLE çözülür;
   bu betik içerik okumadı, sadece deseni doğruladı — istisna değil,
   KANIT.
④ misir/sirbistan'ın "kova 0" maddeleri — bunlar YANLIŞ değil, KASITLI
   boşluk (Osmanlı doğrudan idaresi). ③'ün "Emre'ye sor" adımını
   atlayıp bunlara zorla bir künye YAZMA — `D111` (taraf olmadığı bir
   olay bir devletin kronolojisine yazılmaz) tam tersinden ihlal olur:
   var olmayan bir "misir 1517-1805" devleti icat edilmiş olur.
```

---

## §5 — ÖLÇMEDİKLERİM (açıkça, `§7.1④`)

```
① 1518 maddenin GÖVDESİ okunmadı — yalnız `anadolu` (281/1518, %19)
   TAM SAYILDI. Öteki 8 dosya yalnız BAŞLIKLARINDAN okundu (kendi
   beyanları alındı, doğrulanmadı madde-madde).
② kova "1"in (409 madde, family②) İÇERİĞİ okunmadı — yalnız TARİH
   penceresiyle 🟠 sayıldı. Hindistan'ın ⚪'ları gibi gizli üçüncü-taraf
   kayıtlar kova "1"in İÇİNDE de olabilir, TARANMADI.
③ misir/sirbistan/balkan/arabistan/orta-asya'nın GERÇEK BOŞLUK madde
   SAYISI çekilmedi (yalnız misir 30, sirbistan 7 kesin sayıldı; balkan
   482 yıl, arabistan 399 yıl, orta-asya'nın Kırgız kısmı SAYI OLARAK
   ölçülmedi).
④ Meysur/Maratha/Sih künyelerinin `devletler.js`de var olup olmadığı
   TEK TEK aranmadı — yalnız hindistan dosyasının ⚪ örnekleri okunarak
   BÖYLE bir boşluğun VARLIĞI tespit edildi.
⑤ Hiçbir veri YAZILMADI, hiçbir dosya değiştirilmedi (görev şartı).
⑥ Öngörü ölçümden önce yazılmadı (bu raporun başındaki itiraf).
```

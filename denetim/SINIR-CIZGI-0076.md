# SINIR-CIZGI-0076 — çizgi anlamı · doğu/Afrika teyit · arayüz · TASNİFSİZ SÜPÜRGESİ
23 Eylül 2026 · oturum `SINIR-CIZGI-0076` (Opus 5) · paket `parti-emrelic-0076`
Şartname: `oturumlar/ORTAK-0076.md` + `oturumlar/SEVK-0076.md`
🔴 `data/` · `js/` · `index.html` · `arac/` dosyalarına **DOKUNULMADI** (ORTAK §2–3).
Bütün düzeltmeler `denetim/SINIR-CIZGI-0076-YAMA-*.js` altında, uygulanmaya hazır.

**Madde sayım 23** (20 değil): sevk listesinde 21 numara vardı, süpürgeden sonra
koordinatör H-0078 ve H-0080'i ekledi (M-5019).

---

## 0. ÖNCE SÜPÜRGE — kimseye verilmemiş madde var mıydı

Alet: `denetim/SINIR-CIZGI-0076-supurge.py` (tekrar koşar).

| ölçü | sonuç |
|---|---|
| `PARTI.md` `## H-` başlığı | **164** · tekil 164 · mükerrer **0** |
| `SEVK-0076.md` sekiz listede atanan | **162** tekil |
| iki kişiye birden verilen | **0** |
| sevkte var, pakette yok (hayalet) | **0** |
| 🔴 **kimseye verilmemiş** | **2** — `H-0078` · `H-0080` |
| başlık iddiası ≠ liste sayımı | 2 yerde: HARITA-0076 (20/19) · SINIR-CIZGI-0076 (20/21) |

162 + 2 = 164. Koordinatör iki açığı bu oturuma verdi, başlık sayımlarını düzeltti
(M-5019). **Bu ölçüm bir kez yapıldı, bir daha yapılmaz; alet dosyada duruyor.**

---

## 1. 🔴 ÖNGÖRÜ SINAVI — ÖNGÖRÜ ÇÜRÜDÜ

> Şartnamedeki öngörü (ölçümden ÖNCE yazıldı): *"H-0041 H-0042 H-0059 H-0116
> H-0120 H-0144 H-0155 — bu 7 maddenin kökü TEK olabilir: çizgi katmanı kendini
> anlatmıyor (`kaynak:` ve geçerlilik penceresi kullanıcıya gösterilmiyor).
> Sınav: 7'sinin ≥5'i bu kökse öngörü doğru."*

**Sonuç: 7'nin 0'ı bu kök. Öngörü ÇÜRÜDÜ.** Üç ölçüm çürüttü:

**① Kaynak ve pencere ZATEN gösteriliyor.** `js/d_katman.js` `_dPopupHtml`
(satır 265) bugün şunları basıyor: antlaşmanın adı (başlık), sınıf etiketi,
uzunluk, kesinlik, **"Geçerli: … – …" penceresi** (`_dPencereSatiri`, :241),
**dayanak listesi** (`_dDayanakSatirlari`, :198) ve hat/dolgu ayrımını anlatan
bir uyarı satırı. Bu, 21 Eylül'de CIZGI-ANLAM-0072/DALGA-0074 H-0006 ile eklendi.
Çizilebilir 349 kaydın `dayanak[]` doluluğu **%100** (bu oturum teyit etti).

**② Maddelerin İSTEDİĞİ şey bilgi gösterimi değil.** Yedi maddenin emir cümleleri
tek tek okundu: *"renklendirme buna uydurulmalı"* (H-0042 H-0120 H-0144 H-0155),
*"gösterilmesini engelleyelim / bertaraf edilmiyor"* (H-0041 H-0116),
*"yanlış tarihte ise kaldıralım, doğru ise renklendirmeyi uyduralım"* (H-0059).
**Hiçbiri "bu çizginin kaynağını göster" demiyor.** 7/7'si RENGİN HATTA
OTURMASINI istiyor; 3'ü ayrıca ANAKRONİZM iddia ediyor.

**③ Anakronizm iddiası da çürüdü — 8 kesitin 7'sinde çizgi O GÜN GEÇERLİ.**
Alet: `denetim/SINIR-CIZGI-0076-OLCUM.js` (görsellerin alt şeridinden okunan
gün + kutu ile).

| madde | kesit | o gün o kutuda çizilen kayıt | dayanağı | hüküm |
|---|---|---|---|---|
| H-0041 | 1878-06-04 | `d1829-osm-rus-1/2` [E] 1829-09-14→1878-07-13 | Edirne Antlaşması (1829-09-14) | geçerli |
| H-0059 | 1881-12-20 | `d1878-ru-ro-prut/tuna` [E] 1881-03-26→1917-03-15 | Berlin Antlaşması 1878 | geçerli |
| H-0116 | 1909-04-27 | **0 kayıt** — o kutuya değen D kaydı hiç yok | — | **D katmanı DEĞİL** (§2) |
| H-0118 | 1910-05-19 | `d1910-libya-tunus/cezayir-…` [E] f **= kesit günü** | Trablus Sözleşmesi (1910-05-19) | geçerli |
| H-0120 | 1911-10-08 | `d1906-filistin-misir-hidivlik` [E] 1906-10-01→1914-12-18 | Refah Anlaşması (1906-10-01) | geçerli |
| H-0144 | 1913-06-29 | `g3-bg-ro-dobruca-p4` [E] · `g3-bg-ro-tuna-p4` [C] | Berlin Antlaşması | geçerli |
| H-0155 | 1913-11-14 | `g1-gr-srb-1/2` · `d1923-gr-bg-bati` [E] f=1913-08-10 | Bükreş Antlaşması | geçerli |
| H-0156 | 1913-11-17 | `d1913-osm-ir-1/2/3` · `g1-osm-ir` [E] f **= kesit günü** | İstanbul Protokolü (1913-11-17) | geçerli |

H-0156'da Emre *"bu sınır çizgileri çok uzun zamandır haritada gösteriliyor"* diyor;
ölçüm tersini söylüyor: dört kaydın dördü de **tam o gün** yürürlüğe giriyor.
H-0118'de de aynı — çizgi Emre'nin baktığı günün kendi antlaşmasıdır.

**Geniş evrende anakronizm taraması** (aynı alet): çizilebilir 349 kaydın
343'ünde dayanak tarihi var; **21'inde `f` en erken dayanaktan önce.** Ama bu 21'in
sınananları sahte pozitif: dayanak tarihleri **1964 · 1967 · 1971 · 1993** gibi
MODERN YAYIN tarihleri (`d1812-ru-bg-prut` f 1812, dayanağı 1964 basımı).
⇒ **Ölçülen gerçek anakronizm: 0.** (Şema "belgenin imza günü" ile "kaynağın
yayın günü"nü aynı alanda taşıyor — ayrı bir kusur, §6'da kalem olarak yazıldı.)

### Öyleyse KÖK NE — tek cümleyle
**Boyama hattı hiç okumuyor.** `arac/uret_petek.py` içinde `d_sinirlar`/`D_SINIRLAR`/
`sol_taraf` geçen satır **0**'dır (D-RENK-0073 ölçtü, 20 Eylül). Renk yerleşim
peteğinden, çizgi antlaşma metninden gelir; ikisi birbirini hiç görmez. Sapma
ölçüldü: dünya genelinde **medyan 117 km**, Emre'nin yakın kesitlerinde
**8–17 km medyan**. Emre'nin **7 maddesinin 7'si bu tek kökün farklı kesitleridir.**

🔴 **VE BU KALEM ZATEN EMRE'DE:** D-RENK-0073 üç seçenek sunup (a kesme ·
b hattan poligon · c karışık) **(c)**'yi önerdi ve 7 soru sordu; cevap gelmedi.
Bu oturum o ölçümü TEKRARLAMADI (ORTAK §1④). Yedi maddenin hükmü bu yüzden
`senin-kararin`: yapılacak iş bilinmiyor değil, **hangi seçenek olduğu**
bilinmiyor. Seçenekler `denetim/D-RENK-0073-OLCUM-0920.md §5`tedir.

---

## 2. H-0116 — TEK BAŞINA ÇÖZÜLEN MADDE: çizgi D katmanı değildi

*"BU ÇİZGİ NEYİN NESİ VE NEDEN GİTMİYOR… NEDEN BERTARAF EDİLMİYOR"* — 1909-04-27,
Bosna Brod.

| ölçüm | sonuç |
|---|---|
| Kutuda (44,80–45,20K · 17,86–19,35D) o gün yürürlükte D/E/C hattı | **0** |
| O kutuya **herhangi bir tarihte** değen D kaydı | **0** |
| Çizen katman | `hukuki-sinir-hat` — `js/app.js:1877`, `#1a1a1a`, kesik `[2, 1.3]` |
| Kayıt | **`karlofca-bosna-sava-1699`** (`data/hukuki_sinirlar.js:290`) |
| Kaydın kendi TDV alıntısı | *"Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi."* |
| Kaydın geometrisi | `hat.tur:"dogal-tanimsiz"` + **2 nokta** → app.js düz kiriş çiziyor |
| **Düz kiriş** | 110,8 km · 2 nokta |
| **Gerçek Sava** (aynı iki uç, Natural Earth 10m) | 156,1 km · 28 nokta |
| **Kirişin nehirden sapması** | en çok **16,2 km** · ortalama 4,4 km · %41 kısa |
| Kaydın penceresi | `f:1699-01-26` **`t:1918-11-11`** — "Habsburg künyesinin sonu" |

Yani ekranda karadan geçen düz kesik çizgi, **Sava'nın yerine çizilmiş bir
kiriştir**; ve 1909'da hâlâ duruyor olmasının sebebi penceresinin tarihî değil
KÜNYESEL olmasıdır. TDV (birincil) üç tarih verdi:

- `pasarofca-antlasmasi`: **21 Temmuz 1718** · *"…sol taraf Drina suyu ve Sava
  nehrine kadar Osmanlı Devleti'nde kalmak üzere…"*
- `bosna-hersek`: *"1718 Pasarofça Antlaşması ile Sava'nın güneyindeki şerit
  şeklinde arazi Avusturya'ya verildi"* · *"1739 Belgrad Antlaşması ile Avusturya…
  bütün yerleri geri verdi"*
- `bosna-hersek`: *"29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı"* ·
  *"7 Ekim 1908'de buranın resmen Avusturya-Macaristan toprağı olduğu ilân edildi"* ·
  *"Osmanlı Devleti'nin hakları 1908'deki katî ilhaka kadar resmen sürmüştü."*

⇒ Tek pencere ÜÇ dönemi sıkıştırıyor. **Yama:** `denetim/SINIR-CIZGI-0076-YAMA-hukuki_sinirlar.js`
— `t` 1718-07-21'e çekilir, hat 30 noktalı Sava gövdesiyle değişir, 1739–1908 için
ayrı kayıt eklenir. 🔴 **Kod değişikliği GEREKMİYOR:** `js/app.js:7368` (C-NSEGMENT)
N≥3 noktalı hattı zaten tam polyline olarak çiziyor.
Belgrad Antlaşması'nın GÜNÜ TDV'de **bulunamadı** (`belgrad-antlasmasi` slug'ı arama
sayfasına düşüyor, `belgrad` maddesi yalnız "1739" diyor) — gün uydurulmadı,
`f:"1739-01-01"` + `f_hassasiyet:"yil"` yazıldı.

---

## 3. Doğu / Afrika teyidi

### H-0097 — Şehrizor ve Halepçe o dönemde Osmanlı'da mıydı? → **EVET**
Veri (1900-09-01): Şehrizor `OSMANLI 1630-03-16→1918-10-30` · Halepçe ve Kifri
`OSMANLI 1638-12-24→1917-03-11` · Merîvan/Bâne/Serdeşt `kacar`.
Görselden PİKSEL ölçümü (`denetim/SINIR-CIZGI-0076-PIKSEL.py`): Şehrizor `#aa4f54` ·
Halepçe `#a6535b` · Kifri `#ac5056` (üçü de Osmanlı gövdesi) — Merîvan `#c287a9`
(Kaçar). **Harita veriyle uyumlu.**
Kaynak — TDV `sehrizor`: *"Kanûnî Sultan Süleyman'ın Irakeyn Seferi sırasında Osmanlı
idaresi altına girdi (941/1535)"* · *"I. Dünya Savaşı sonrasına kadar genellikle
Osmanlı idaresinde kaldı."* Halepçe TDV'nin bu maddesinde **geçmiyor** (bulunamadı);
hüküm Şehrizor bölgesi üzerinden verildi.

### H-0076 — 1884-02-01'de Sudan Mısır'da mıydı, elden çıkmış mıydı? → **İKİSİ DE**
Veri: Hartum · Dongola · Sennar `v: misir-kavalali` **1885-01-26'ya kadar**;
Kordofan (Ubeyyid) `mehdi` **1882-09-07**'den; Berber `mehdi` **1884-05-01**'den;
El-Fâşir (Dârfûr) `mehdi` **1883-12-23**'ten.
TDV `sudan`: *"Dârfûr ve Bahrülgazâl … Aralık 1883 ve Nisan 1884'te Mehdî
kuvvetlerine teslim oldu"* · Mehdî kuvvetleri *"26 Ocak 1885"*te Hartum'a girdi.
⇒ Atlasın Dârfûr günü (1883-12-23) TDV'nin "Aralık 1883"üyle **uyumlu**; Nil vadisi
1884 Şubatında hâlâ Mısır'da. **Harita doğru.**

### H-0078 — Hartum düşünce elden çıkan topraklar doğru mu? → **EVET, ama tek güne yığılmış**
`1885-01-26`'da kırılan yerleşim: **35** (Dongola · Hartum · Sennar · Kerma · Debbe ·
Merevî · Ebû Hamed · Şendî · Vad Medenî · Ed-Düveym · Kosti · Kadârif · Rusayris ·
Fâzûğlî · Nühûd · Kesela · Delgo · Abrî · Kortî · Ed-Dâmer · Kabûşiyye · Ümmü Dermân ·
Sincâ · Müsellemiyye · Rufâa · El-Kavâ · Cebeleyn · Kurmuk · Er-Renk · Fâşoda ·
Malakal · Şereyk · Kerreri · El-Menâkıl · Ed-Damazîn). Hepsi `misir-kavalali` → `mehdi`.
Kordofan · Dârfûr · Berber bu yığının DIŞINDA, kendi erken günleriyle — yani tasnif
bilinçli yapılmış. TDV yalnız Hartum'un gününü (26 Ocak 1885) veriyor; kalan 34
yerleşimin ayrı devir günü için kaynak **bulunamadı**. Yığın tarih bir hüküm değil
bir YAKLAŞIKLAMADIR; bugünkü hâliyle savunulabilir, ayrı kaynak çıkarsa incelenir.

### H-0080 — Sevâkin · Sinkat · Hayya · Derudeb · Muhammed Kol Britanya'ya geçmiş, maddesi yok → **EMRE HAKLI**
`1885-02-05`te kırılan **10** yerleşim: İtalya'ya Masavva · Dahlak · Arkîko;
**İngiltere'ye Halâib · Akīk · Sinkat · Hayyâ · Trinkitât · Muhammed Kol · Derûdeb**
— yedisi de o güne kadar **OSMANLI DOĞRUDAN** (`d:`). O günün tek kronoloji maddesi
Masavva/İtalya'yı anlatıyor, **İngiltere'yi hiç anmıyor**. Değişmez 2 ±30 gün ölçütünü
teknik olarak geçiyor, ama devir ANLATILMIYOR.
Ayrıca **iki katman iki gün söylüyor**: Sevâkin kaydı `ingiltere` **1884-02-01**
diyor; 1885-02-05 maddesi ise Sevâkin'in "aynı süreçte elden çıktığını" söylüyor.
🔴 **Madde YAZILMADI, çünkü tarihin kaynağı yok.** TDV tarandı: `sudan` (kıyı yok) ·
`habes-eyaleti` (*"İtalya … 1884'te Assab'ı, 1885'te … Masavva'ı ele geçirdi"* —
iç kasabalar yok) · `sevakin` (slug arama sayfasına düşüyor). Taslak ve **ara çözüm
önerisi** `denetim/SINIR-CIZGI-0076-YAMA-olaylar.js §②`de.

### H-0149 — Katar yarımadasının bir kısmı başka egemenlikte görünüyor → **KUSUR, YAMASI HAZIR**
1913-07-29 kutusunda 5 nokta: Doha `katar` · **"Katar Yarımadası (iç, dolgu)"
SAHİPSİZ** · Ukayr ve Lahsa `suud-ucuncu` · Manama `ingiltere`. Beyaz kalan batı/iç
yarım, o dolgu noktasının penceresizliğidir. Kaydın kendi notu da *"bağlılık
bulunamadı"* diyor. **Bu oturum kaynağı buldu** — TDV `katar`: *"Osmanlı Devleti
Katar yarımadası üzerindeki bütün taleplerinden feragat etti, buranın Şeyh Câsim b.
Sânî ve halefleri tarafından yönetilmesi konusunda mutabakata varıldı."* Hüküm
**yarımadanın tamamı** hakkındadır. Yama: `…-YAMA-yerlesimler.js §②` (tek pencere,
1913-07-29→1923-10-29, `d:"katar"`). Kronoloji maddesi o gün ZATEN var.
(Ölçümün 1871 kesiti HARITA-0076'dan hediye geldi — M-5028.)

### H-0004 — 1856'da Çerkezistan müstakil miydi, Rusya'ya mı bağlıydı? → **HARİTA DOĞRU**
Görsel 1856-06-07, "ÇERKEZ KABİLE BİRLİKLERİ". TDV `cerkezler`: 1828-29 savaşından
sonra *"Osmanlı Devleti, Çerkezler üzerindeki haklarından Rusya lehine vazgeçti"*
(yani HUKUKÎ devir 1829'dur) · *"Kırım Savaşı sırasında (1853-1856) müttefik
donanmasının yardımıyla Taman yarımadasının bir kısmını ele geçiren… Çerkezler 13
Haziran 1861'de Soçi'de yaptıkları toplantının ardından, Osmanlı Devleti, İngiltere
ve Fransa'dan yardım istediler"* · sürgün 1861'de kararlaştırıldı, 1864'te tamamlandı.
⇒ 1856'da **fiilî bağımsız kabile birlikleri** doğrudur; Rusya'nın hakkı o tarihte
HUKUKÎ, fiilî denetim değil. Atlasın gösterimi kaynakla uyumlu.
**Not (kalem):** atlasta hukukî/fiilî ayrımı yalnız D KATMANINDA (D/E/F sınıfları)
var, DOLGUDA yok — bu madde o eksiğin bir örneğidir.

### H-0099 — Suriye Çölü'ndeki "aşiret yönetimi" görünümü gerçek mi? → **KASITLI, AMA KAYNAKSIZ**
1900-09-01, kutu 30,78–33,20K · 37,42–40,39D: kutuda **yalnız 2 nokta** var, ikisi de
sahipsiz dolgu — "Vâdî Sirhân" ve "Hamâd (Bâdiyetü'ş-Şâm içi)". İkisinin de `neden`
alanı açık: *"bedevi aşiretlerin (Rüvele, Anize) göçer denetimindeydi, yerleşik devlet
idaresi yoktu."* Yani görünüm bir kusur değil, BEYAN.
🔴 Ama o beyanın `kaynak` alanı **yok**. TDV `aneze` denendi — arama sayfasına düşüyor,
madde gövdesi alınamadı (**bulunamadı**). Hüküm: görünüm kasıtlı ve makul, fakat
"yüzyıllardır hiç devlet yapısı yok muydu" sorusunun KAYNAKLI cevabı bu turda
verilemedi; iki noktaya `kaynak:` eklenmesi ayrı kalem.

### H-0037 — 93 Harbi'nde Eflak-Boğdan'ın kırmızı görünmesi → **KUSUR, YAMASI HAZIR**
Ölçüldü: **18 yerleşimin** tâbilik penceresi 1878-07-13'te (Berlin) bitiyor — 15'i
`eflak`/`bogdan` → `romanya`, 3'ü (İsmail · Kahul · Bolgrad) → `rusya`. Yani atlas
Romanya'yı savaşın tamamında Osmanlı tâbisi gösteriyor.
TDV `romanya`: *"9 Mayıs 1877 tarihinde bağımsızlığını ilân etti"* · *"1877-1878
Osmanlı-Rus Savaşı'na katılan ve özellikle Plevne'de Osmanlılar'ın yenilgisine çok
önemli katkıda bulunan"* · bağımsızlık *"Berlin Kongresi'nde (1878) tanındı"*.
⇒ Emre'nin sunduğu iki seçenek de kaynakla uyuşmuyor: **Romanya işgal edilmedi,
Rusya'nın parçası da olmadı — müttefik bağımsız devletti.** Doğru gösterim:
1877-05-09'dan itibaren kendi rengi. Yama 15 kaydı düzeltir
(`…-YAMA-yerlesimler.js §①`) ve **zorunlu eşi** olan kronoloji maddesini
(`…-YAMA-olaylar.js §①`) getirir — bugün 1877 Mayısında Romanya bağımsızlığına dair
madde **yok**, yama tek başına uygulanırsa 15 kırılma AÇIK kalır.

### H-0054 — Rus ilerleme oku Edirne'den kalkmış görünüyor → **ÇÖZÜLEMEDİ (kaynak yok)**
Kayıt bulundu: `data/savaslar.js` → *"Rus ordusunun Yeşilköy'e gelişi (1878)"*,
`tur:"sefer"`, `f:"1878-01-31"`, `t:"1878-03-03"`, `yol:[[26.56,41.68],[28.82,40.96]]`
— yani **Edirne → Yeşilköy**, 2 nokta. Emre haklı: ok Edirne'den başlıyor.
Ama kaydın kendi penceresi de 31 Ocak 1878'de açılıyor ve TDV `ayastefanos-antlasmasi`
o günü şöyle anıyor: *"31 Ocak 1878 tarihinde Edirne Mütarekesi imzalandı"* ve Ruslar
*"doğuda Erzurum'a, batıda da İstanbul önlerine kadar geldiler"*. ⇒ Mevcut ok, mütareke
sonrası SON AYAĞI doğru anlatıyor; kusur eksiklik, yanlışlık değil.
Harekâtın başlangıcını (Tuna geçişi) eklemek için gün ve güzergâh gerekiyor; TDV'de
**bulunamadı** (`93-harbi`, `ayastefanos-antlasmasi`, `doksanuc` denendi — ilk ikisi
gövde vermedi/tarih içermedi). Uydurma güzergâh çizilmedi. Öneri: ayrı ayaklar
(Tuna geçişi → Plevne → Şıpka → Edirne) kendi tarihleriyle ayrı `sefer` kayıtları
olarak eklensin; TEK uzun ok ANAKRONİK olur (ok penceresi başına bir ayak).

### H-0126 — Kiklad adaları Osmanlı'dan nasıl ve neden çıktı? → **KART YAZILDI**
Ölçüldü: 16 Kiklad adası atlasta `OSMANLI 1566-04-15 → 1830-02-03`; çapa maddeler
veride var (1566-04-15 "Nakşa Dukalığı'nın ilhakı", 1830-02-03 "Bağımsızlığın Londra
Protokolü ile tanınması"). Kart: `denetim/SINIR-CIZGI-0076-YAMA-ekokuma_p76h.js`.
⚠️ *"Yunan anakarası ile bağlantısı çok güçlü mü idi"* sorusunun NİCEL cevabı
TDV `yunanistan` maddesinde **bulunamadı**; kartta yalnız idarî süreklilik anlatıldı,
"güç derecesi" hakkında hüküm VERİLMEDİ.

### H-0002 — Tanzimat'ta eksik kalan, Islahat Fermanı ile tamamlandı → **KART YAZILDI**
Çapalar veride doğrulandı (1839-11-03 · 1856-02-18). Kart aynı dosyada; cizye,
karma mahkeme, şahitlik, askerlik/bedel-i askerî, mülk edinme, cemaat nizamnameleri
eksenleri TDV `islahat-fermani`den. Askerliğin 1908'e kadar uygulanmadığı da yazıldı.

---

## 4. Arayüz

### H-0137 — "bir sürü aynı simge" → **KUSUR BULUNDU, YAMASI HAZIR**
Emre'nin görselinde (1913-03-06) lejantta **15 satır** var: `yunanistan` **9 kez**,
`italya` 3, `İngiltere` 2, `fransa-cumhuriyet` 1 — eşsiz işgalci **4**.
Sebep `js/app.js:4323`: `isgalLejanti(fs)` gelen HER FEATURE için bir satır basıyor,
`fs` ise `ISGALLER`daki her KAYIT için bir feature taşıyor. Tekilleştirme yok.
Yama (`…-YAMA-app_js.js §③`): satırlar (işgalci + sahip + renk) üçlüsünde
tekilleştirilir, kaç alanı kapsadığı sayıyla yazılır — *"yunanistan · 9 alan"*.

### H-0123 — işgal taraması: işgal edenin rengi iki kat, edilenin tek kat
Bugünkü desen (`isgalDesenleriKur`, K=8): işgalci **5** / sahip **3** = **1,67 : 1**.
Emre'nin kuralı **2 : 1**. 8 piksel 2:1'e tam bölünmüyor; yama K=6 yapıp **4/2 = tam
2:1** kuruyor (`…-YAMA-app_js.js §①`). Lejant şeridi de aynı orana (%66,7/%33,3)
çekiliyor ve sahip rengini artık sabit `#8e0b22` varsaymıyor.
🔴 **"İtalya sarı olduğu hâlde alâkasız renkle taranmış" kısmı BU YAMAYLA ÇÖZÜLMEZ.**
Ölçüldü — `data/devirler.js` ISGALLER kayıtlarının renkleri: italya `#74a074` (yeşil) ·
rusya `#4f7d4f` (yeşil) · almanya `#78d028` (yeşil) · yunanistan `#20e0c0` (turkuaz) ·
ingiltere `#7e3d8f` (mor) · avusturya `#bdab3f` · fransa-cumhuriyet `#00297c` ·
ispanya `#ea0cea`. Yani işgal katmanı, devletin HARİTA renginden AYRI bir palet
kullanıyor. `devirler.js` ÜRETİLMİŞ dosyadır (`uret_devirler.py`), elle düzenlenmez;
düzeltmesi üretici + koşu ister. **Kalem `senin-kararin`:** işgal rengi devletin
harita rengiyle aynı mı olsun (o zaman komşu devletle karışma riski ölçülmeli), yoksa
ayrı palet kalıp lejantta adıyla mı açıklansın?

---

## 5. Hükümler (23 madde)

Makine okunur hâli: `denetim/SINIR-CIZGI-0076-CEVAP.json`
(🔴 paylaşılan `CEVAP.json`a YAZILMADI — sekiz oturum aynı dosyayı okuyup yazarsa
son yazan ötekileri siler. Birleştirme koordinatörde; anahtarlar hazır.)

| madde | hüküm | tek cümle |
|---|---|---|
| H-0002 | `sirada` | ek okuma kartı yazıldı (`ekokuma_p76h`) |
| H-0004 | `zaten-dogru` | 1856'da fiilî bağımsız kabile birlikleri — TDV `cerkezler` |
| H-0037 | `sirada` | 15 kayıt + 1 kronoloji maddesi yaması hazır (bağımsızlık 1877-05-09) |
| H-0041 | `senin-kararin` | çizgi geçerli (Edirne 1829); kök renk-hat, D-RENK-0073 (a/b/c) |
| H-0042 | `senin-kararin` | genel kural talebi — aynı kök, aynı üç seçenek |
| H-0054 | `cozulemedi` | ok kaydı bulundu; harekâtın başlangıç güzergâhı TDV'de bulunamadı |
| H-0059 | `senin-kararin` | çizgi geçerli (Berlin 1878/1881 tahdidi); kök renk-hat |
| H-0066 | `senin-kararin` | ucu açık kapsam (7 bölge) — §6'da ölçüsü |
| H-0076 | `zaten-dogru` | 1884-02'de Nil vadisi Mısır'da, Kordofan/Dârfûr Mehdî'de |
| H-0078 | `zaten-dogru` | 35 yerleşim 1885-01-26'da düşüyor; yığın gün, kaynaklı tek gün Hartum |
| H-0080 | `senin-kararin` | 7 yerleşim İngiltere'ye geçiyor, maddesi yok; tarihin kaynağı da yok |
| H-0097 | `zaten-dogru` | Şehrizor + Halepçe Osmanlı; piksel ve TDV ile teyit |
| H-0099 | `zaten-dogru` | kasıtlı sahipsiz dolgu, beyanı var; beyanın kaynağı yok (ayrı kalem) |
| H-0116 | `sirada` | çizgi C katmanının Karlofça kaydı; geometri + pencere yaması hazır |
| H-0118 | `senin-kararin` | çizgi o günün antlaşması; kök renk-hat |
| H-0120 | `senin-kararin` | çizgi geçerli (Refah 1906); kök renk-hat |
| H-0123 | `sirada` | 2:1 oran yaması hazır · renk paleti eşleşmesi ayrı `senin-kararin` |
| H-0126 | `sirada` | ek okuma kartı yazıldı; "bağ gücü" sorusu bulunamadı |
| H-0137 | `sirada` | lejant tekilleştirme yaması hazır |
| H-0144 | `senin-kararin` | çizgi geçerli; kök renk-hat |
| H-0149 | `sirada` | dolgu noktasına TDV kaynaklı `katar` penceresi yaması hazır |
| H-0155 | `senin-kararin` | çizgiler Bükreş 1913 sınırı, o gün geçerli; kök renk-hat |
| H-0156 | `senin-kararin` | dört kayıt da TAM o gün yürürlüğe giriyor; kök renk-hat |

---

## 6. Ne istiyorum — beş kalem

1. **🔴 D-RENK-0073'ün üç seçeneği (a/b/c) hâlâ cevapsız.** Bu oturumun 9 maddesi
   (H-0041 H-0042 H-0059 H-0118 H-0120 H-0144 H-0155 H-0156 + H-0123'ün renk ayağı)
   o karara bağlı. Ölçüm önerisi (c). Karar gelmeden bu 9 madde kapanmaz.
2. **Yama uygulama sırası — ÇAKIŞMA UYARISI.** HARITA-0076 da `data/hukuki_sinirlar.js`e
   yama hazırlıyor (M-5028, `denetim/HARITA-0076-YAMA-hukuki_sinirlar.md` — `kapsama.kutu`
   opak dikdörtgeni, 3 kayıt). Benim yamam **başka kayıtlara** dokunuyor
   (`karlofca-bosna-sava-1699` + yeni `belgrad-bosna-sava-1739`), ama aynı dosya.
   Sıra koordinatörde.
3. **H-0037 + H-0149 yamaları Değişmez 2'ye dokunuyor:** yerleşim yaması ve olay
   yaması **birlikte** uygulanmalı, sonra `py arac/denetle.py`. H-0149 sahipsiz
   sayısını 1 düşürür → `py arac/durum_tablosu.py --yaz`.
4. **H-0066 ucu açık** (M-5024 ④ gereği kapsam açılmadı): *"1800'den itibaren
   Osmanlı toprakları kapanın elinde kalmış gibi görünüyor — tartışma ek okuması"*
   + yedi bölge (Cezayir · Tunus · Mısır · Balkanlar · Kafkaslar · Kıbrıs · Girit).
   Ölçü: yedi bölgenin her biri ayrı bir kart demek, her kart TDV'de ayrı madde
   taraması; tek kart yapılırsa yedi bölgeyi tek `sebep→sonuç` çiftine sıkıştırmak
   gerekir ki bu bir tez değil slogan olur. **Kapsamı Emre açar:** yedi ayrı kart mı,
   tek "uzun XIX. yüzyıl" kartı mı, yoksa şimdilik hiç mi?
5. **Şema kalemi (küçük ama tekrar eden):** D kayıtlarının `dayanak[].tarih` alanı
   hem ANTLAŞMA GÜNÜNÜ hem KAYNAĞIN YAYIN YILINI taşıyor. Anakronizm taramasında
   21 sahte pozitif bundan çıktı. Ayrı bir `yayin` alanı (ya da `tarih_turu`) bu
   sınıfı tümden kapatır. Karar şema sahibinindir.

---

## 7. Üretilen dosyalar

| dosya | ne |
|---|---|
| `denetim/SINIR-CIZGI-0076.md` | bu rapor |
| `denetim/SINIR-CIZGI-0076-CEVAP.json` | 23 maddenin hükmü (birleştirilmeyi bekler) |
| `denetim/SINIR-CIZGI-0076-YAMA-hukuki_sinirlar.js` | H-0116 (Sava gövdesi + pencere) |
| `denetim/SINIR-CIZGI-0076-YAMA-yerlesimler.js` | H-0037 (15 kayıt) · H-0149 (1 pencere) |
| `denetim/SINIR-CIZGI-0076-YAMA-olaylar.js` | H-0037 kronoloji maddesi · H-0080 taslak + ara çözüm |
| `denetim/SINIR-CIZGI-0076-YAMA-app_js.js` | H-0123 (2:1 desen) · H-0137 (lejant tekilleştirme) |
| `denetim/SINIR-CIZGI-0076-YAMA-ekokuma_p76h.js` | H-0002 · H-0126 kartları (`window.EKOKUMA_P76H`) |
| `denetim/SINIR-CIZGI-0076-supurge.py` | tasnifsiz süpürgesi (164 ↔ sekiz liste) |
| `denetim/SINIR-CIZGI-0076-OLCUM.js` | anakronizm taraması + kesit başına hangi kayıt |
| `denetim/SINIR-CIZGI-0076-KATMAN-AVI.js` | "bu çizgi neyin nesi" — kutudaki her katmanı tarar |
| `denetim/SINIR-CIZGI-0076-HUKUKI.js` | C kayıtlarını gün+kutu ile süzer (`{lat,lon}` nesnesi) |
| `denetim/SINIR-CIZGI-0076-SAVA.js` | düz kiriş ↔ Sava sapma ölçümü |
| `denetim/SINIR-CIZGI-0076-YERLESIM.py` | kutu+gün → yerleşim ve o günkü sahibi |
| `denetim/SINIR-CIZGI-0076-TOPLU-GUN.py` | "toplu gün" (batch date) avı |
| `denetim/SINIR-CIZGI-0076-PIKSEL.py` | görseldeki koordinatın rengini okur |
| `denetim/SINIR-CIZGI-0076-KAYIT.py` · `-ROMANYA.py` · `-cikar.py` · `-mesaj.py` · `-kirp.py` | yardımcı |

**Kaynaklar (TDV İslâm Ansiklopedisi):** `bosna-hersek` · `pasarofca-antlasmasi` ·
`belgrad` · `katar` · `sehrizor` · `sudan` · `habes-eyaleti` · `cerkezler` ·
`romanya` · `islahat-fermani` · `yunanistan` · `ayastefanos-antlasmasi`.
**Bulunamadı olarak kayda geçenler:** Belgrad Antlaşması'nın günü · Sinkat/Hayya/
Derudeb'in devir günü · Tuna geçişinin günü ve güzergâhı · Kiklad'ın anakara bağının
niceliği · Aneze/Bâdiye'nin idarî durumu · Halepçe (TDV `sehrizor` maddesinde).

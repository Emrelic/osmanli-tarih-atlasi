# LAB-KONUM-KESIN-1010: eşik altı ama nesnesi kesin üç nokta (Van · Kandehar · Angkor)

> **Yalnız öneri.** `data/` dokunulmadı (KOŞU 22 için donuk). Commit ve push yapılmadı.
> **Taban:** `origin/main` @ `46ebbc3c6` (HUKUM §6.3 commit'i). Okuma ayrık worktree'de yapıldı (`C:\atlas-konumkesin`). Her `git apply --check` denemesinden sonra worktree `git checkout .` ile temizlendi; iş bitince worktree kaldırıldı.
> **Kurallar:**
> - HUKUM-KASA-1010 §6.1: tanığın kendi hatası. Ṯ tek tanıkken eşik ≥10 km. TGN tek başına ≥5 km sayılmaz.
> - §6.2: tanık hangi NESNEYİ gösteriyor? Bu kuralın ikinci yüzü: tanığın geometri türü. Alan ile nokta arasındaki mesafe bir konum testi değildir.
> - §9.4: tanığın çözünürlüğü.
> - **§6.3 (46ebbc3c6): koordinat zamana bağlı bir iddiadır.** Pencere tek katmanlıysa çare TAŞIMA'dır. Pencere hem tarihî sitenin hem modern şehrin dönemini kapsıyorsa çare İKAME'dir.
> - **Koordinatörün eşik-düşer kuralı (bu gece):** ≥5 km eşiği tanığın HATASI için konmuştur. Tanık KESİN, ADLI ve UZUN SÜRE TANIKLANMIŞ bir nesneyi gösteriyorsa nesne kimliği kesindir. Bu durumda **eşik düşer ve kararı yalnız mesafe verir.**
> Girdi: `LAB-KONUM-KATMAN-1010.md` (TEMİZ-SINIRDA-GERÇEK tablosu). Pleiades kayıtları bu turda `places/<id>/json` üzerinden yeniden okundu. TGN, SPARQL ile yeniden sorgulandı.

## Sonuç (tek bakışta)

| ad | dosya:satır | ESKİ | YENİ (kesin nesne) | fark | ölçülen pencere | çare (§6.3) | hangi diff |
|---|---|---|---|---|---|---|---|
| **Van** | `data/yerlesimler.js:246` (+ `data/sehirler.js:190`) | 38.502, 43.393 | **38.5019, 43.3401** | **4,60 km** | 1232-01-01 → 1923-10-29 | **İKAME** (§6.3 harfiyle). tur:kale olduğu için **TAŞIMA da savunulabilir**, karar koordinatörde | `-v2-ikame-secenegi.diff` **veya** `-v2-tasima-secenegi.diff` |
| **Kandehar** | `data/yerlesimler_asya.js:564` (564–575) | 31.6100, 65.7100 | **31.6026, 65.6589** | **4,91 km** | 1281-01-01 → 1923-10-29 | **İKAME** | yalnız `-v2-ikame-secenegi.diff` |
| **Angkor (Siem Reap)** | `data/yerlesimler_asya.js:3288` (3288–3292) | 13.4120, 103.8670 | **13.4413, 103.8590** | **3,37 km** | 1281-01-01 → 1923-10-29 | **İKAME** ("terk edilmiş ⇒ düz taşıma" beklentisi ölçümde tutmadı) | `-v2-ikame-secenegi.diff` **veya** `-v2-tasima-secenegi.diff` |

⇒ **Üç kalemin hiçbiri tek katmanlı değil. Bu yüzden hiçbiri ana `v2.diff`'e girmedi.** Ana diff yalnız v1'in 7 kalemidir (aşağıda §4).

---

## 1 · VAN

**Atlasın çizdiği nesne.** Kayıt `tur:"kale"` (yerlesimler.js:246). Tarihçe metni ve `sehirler.js:190` aynı nesneyi anlatıyor: *"Van Gölü kıyısında … kilit bir kale"*, yapılar *"Van Kalesi, Hüsrev Paşa Külliyesi, Ulucami"*. Bunların hepsi kalede ve kale eteğindeki eski şehirde.

**Tanıklar:**

| tanık | gösterdiği nesne | geometri | atlas noktasına |
|---|---|---|---|
| Pleiades [964673805](https://pleiades.stoa.org/places/964673805) *Van Fortress* | citadel. Konumlar: OSM (citadel, −900..−600, LineString) ve CIGS (findspot). İkisi 0,2 km içinde | kaya üzerindeki kale: iyi tanımlı, nokta benzeri | **4,60** |
| Pleiades [874771](https://pleiades.stoa.org/places/874771) *Ṭušpa* | aynı kaya (OSM "Van Fortress") | aynı | 4,74 |
| TGN [7695076](http://vocab.getty.edu/page/tgn/7695076) *Van Kalesi* (castles) | **YANLIŞ NESNE:** 38.5214, 43.4055 noktası Rusahinili/Toprakkale'de (Pleiades 379202545'e 0,18 km) | — | 2,41 · **sayılmadı** (§6.2) |
| Ṯ WAN (*villages*) | — | — | 9,2 · gürültü bandında, sayılmadı |

**Eşik-düşer kuralı uygulanıyor:** Van Fortress kesin, adlı ve uzun süre tanıklanmış bir nesne. Aynı kaya Urartu'dan 1923'e kadar duruyor. Pleiades'te iki bağımsız konum var (OSM ve CIGS) ve ayrıca Tušpa'nın ayrı kaydı. ⇒ Kararı mesafe verir: **4,60 km gerçek fark ⇒ KESİN.** YENİ nokta olarak Pleiades `reprPoint` (38.5019, 43.3401) seçildi; OSM ile CIGS konumlarının ortası.

**Ölçülen pencere** (koordinatörün ①. talimatı):
- `s:`:
  - `{f:"1232-01-01",t:"1281-01-01",d:"selcuklu"}`
  - 1281–1351 ilhanli
  - 1351–1467 karakoyunlu
  - 1467–1502 akkoyunlu
  - 1502–**1548-08-24** safevi
  - `{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}`
- `d:` `{f:"1548-08-24",t:"1920-04-23",y:"kusatma"}`
- `data/sehirler.js:190` `k:[{f:"1548-08-24",t:"1918-10-30"}]`

⇒ **Pencere 1915–18'in ÖTESİNE uzanıyor.** 1920-04-23 ile 1923-10-29 arasında tbmm-turkiye segmenti var, ayrıca Osmanlı `d:`'sinin 1918–1920 kuyruğu var.

**Karar (sunuluyor, verilmiyor):**

| seçenek | ne yapar | artı | eksi |
|---|---|---|---|
| **(a) İKAME** (§6.3 harfiyle) | Yeni kayıt **"Van (Kale ve Eski Şehir)"** 38.5019/43.3401 eklenir: `s:` 1232→1548, `d:` 1548→1920, `bit:"1920-04-23"`. Modern "Van" yerinde kalır: `kur:"1920-04-23"`, `s:` yalnız 1920–1923 | Her dönem doğru nesnede durur | Modern kayıt yalnız 3,5 yıl yaşar. Bölme günü kaydın kendi 1920-04-23 sınırından alındı: eski şehrin terki (1915–18) **kaynakla teyit edilmedi**. Ad referansı olan **17 dosya, 25 satır** var (`kronoloji_*`, `olaylar_ek5/ek20`, `yer_yama.js:83`, `koridor_f5c9a5.js:66`, `sehirler.js:190`); 1920 öncesini anlatanların `yer_id`'si yeni kayda bağlanmalı. Bu diff'te bağlanmadı |
| **(b) TAŞIMA** | yerlesimler.js:246 ve sehirler.js:190 kaleye taşınır | **tur:kale ⇒ kayıt bir KALE iddiası.** Kale 1232–1923 boyunca aynı kayada duruyor, dolayısıyla kale nesnesine göre pencere tek katmanlı. 1918–1923'te modern şehrin doğru nesne olduğu yalnız *şehir* okumasında geçerli. Diff tek satır (+ sehirler) | 1920–1923'ü şehir olarak okuyan biri için nokta 4,6 km batıda kalır. Bozulan dönem pencerenin %0,5'i |
| (c) dokunma | — | sıfır risk | 1232–1920 boyunca kale 4,6 km yanlış yerde |

LAB'in görüşü (yalnız tavsiye): kayıt `kale` olduğu sürece (b) daha az şey bozuyor. (a) ancak kayıt "şehir" olarak okunacaksa gerekli.

⚠️ `data/koridor_f5c9a5.js:66` (`h2b-van`, `kaynak:"bulunamadı"`) aynı koordinatı taşıyor. Üretilmiş bir koridor verisi gibi duruyor; iki seçenekte de elle değiştirilmedi.

## 2 · KANDEHAR

**Atlasın çizdiği nesne.** Kayıt `tur:"sehir"`. Yorum satırı (559–563): *"1522 Bâbür, 1537 Safevî … 1747'de Ahmed Şah Dürrânî burada taç giydi"*. Kaydın 1281–1738 bölümü Eski Kandehar'ı (Şehr-i Kohne) anlatıyor. 1747 sonrası bölümü modern şehri anlatıyor. TGN [7002248](http://vocab.getty.edu/page/tgn/7002248) modern Kandahar'ı atlas noktasına 0,98 km uzakta gösteriyor ⇒ **atlas noktası MODERN şehirde.**

**Tanıklar:**

| tanık | nesne | atlas noktasına |
|---|---|---|
| Pleiades [630721027](https://pleiades.stoa.org/places/630721027) *Old Kandahar citadel* | kale (CIGS, −1000..1000) + OSM "Old Kandahar". İki konum 0,01 km içinde | **4,91** |
| Pleiades [59669](https://pleiades.stoa.org/places/59669) *Alexandria/Qandahār* | ören yeri (CIGS) | 4,87 (630721027'ye 0,19 km) |
| Ṯ QANDAHAR_656E316N_S/_R | iki kayıt aynı koordinatta, `_S` kaydı bölge koordinatının kopyası | 4,16 · sayılmadı |

**Eşik-düşer kuralı:** Eski Kandehar kalesi adlı bir nesne. "Kandehar'da en az iki bin yıl yerel güç merkezi" olarak tanıklanmış. İki bağımsız Pleiades kaydı 0,19 km içinde. ⇒ **4,91 km gerçek fark ⇒ KESİN.** YENİ nokta 630721027 `reprPoint` (31.6026, 65.6589). Kale seçildi, çünkü kayıt 1281–1738 boyunca yönetim merkezini (kaleyi) temsil ediyor.

**Ölçülen pencere** (`yerlesimler_asya.js:564-575`):
- `s:` 1281→1370 cagatay
- 1370→1522-09-06 timurlu
- 1522–1709: altı Bâbürlü/Safevî segmenti
- `{f:"1709-04-21",t:"1738-03-24",d:"galzay"}`
- `{f:"1738-03-24",t:"1747-06-20",d:"afsar"}`
- 1747-06-20→1826 afgan-durrani
- 1826→**1923-10-29** afganistan

⇒ **Pencere 1738/1747'nin 185 yıl ötesine uzanıyor** (pencerenin %29'u) ⇒ **çok katmanlı ⇒ İKAME.** Düz taşıma 1738–1923'ü bozar. Bu yüzden **taşıma seçeneği sunulmadı.**

**İKAME taslağı** (`-v2-ikame-secenegi.diff`):
- Yeni kayıt **"Kandehar (Eski Şehir)"** 31.6026/65.6589, `bit:"1738-03-24"`, `s:` 1281→1738-03-24. Mevcut segmentler aynen taşındı.
- Modern "Kandehar" yerinde kalır, `kur:"1738-03-24"`, `s:` 1738→1923.

**Açık noktalar:**
- Bölme günü kaydın kendi 1738-03-24 sınırı (Nâdir Şah). Yıkım günü kaynakla teyit edilmedi.
- 1738–1761 arasındaki Nâdirâbâd üçüncü bir yerdir ve tanığı yok. Bu taslakta modern noktaya bırakıldı.
- Ad referansı **12 dosya, 20 satır**:
  - `kademe_4ff22b.js:56`: Zünnûn Argun merkezliği, yani eski şehre ait.
  - `devletler.js:2196` galzay `baskent:"Kandehar"`.
  - `kronoloji_iran.js` 215/439/457, `kronoloji_safevi.js:150`.
  - `kaynakli_halka_kronoloji.js` 65/81.

  1738 öncesini anlatanların yeni kayda bağlanması gerekir; bu taslakta bağlanmadı.

## 3 · ANGKOR (Siem Reap)

**Tanık ve nesne tam olarak belirlendi.** KATMAN raporundaki tanık Pleiades [531398484](https://pleiades.stoa.org/places/531398484) *Angkor* idi: 13.43333/103.8333, **UNESCO temsil noktası, dakika-yuvarlak**, 4,35 km. Bu kayıt 400 km²'lik bir alanın temsil noktası ⇒ §9.4 ve ADA yüzü ⇒ **tanık sayılmaz.** Doğru nesneler ayrı kayıtlarla tanıklı:

| nesne | tanık 1 | tanık 2 | atlas noktasına |
|---|---|---|---|
| **Angkor Wat** (mâbet, 1100–2100) | Pleiades [835369289](https://pleiades.stoa.org/places/835369289) | TGN [6000279](http://vocab.getty.edu/page/tgn/6000279) | **0,06 / 0,07** ⇒ **atlas noktası tam Angkor Wat** |
| **Angkor Thom** (surlu başkent, 1100–1699; Pleiades: *"abandoned by 1609"*) | Pleiades [364279264](https://pleiades.stoa.org/places/364279264) | TGN [7004075](http://vocab.getty.edu/page/tgn/7004075) *Prasat Angkor Thom* (deserted settlements) | **3,37 / 3,30** (iki tanık arası 0,08 km) |
| Siem Reap kasabası | TGN [1066431](http://vocab.getty.edu/page/tgn/1066431) (inhabited, 1′ yuvarlak) | — | 5,36 |

**Eşik-düşer kuralı:** 1281–1431 başkenti Angkor Thom. Kesin, adlı, iki bağımsız tanıklı bir nesne ⇒ **3,37 km gerçek fark ⇒ KESİN** (1281–1431 için). YENİ nokta Pleiades 364279264 `reprPoint` (13.4413, 103.8590); Bayon'la (96853716) aynı nokta.

**Ölçülen pencere** (`yerlesimler_asya.js:3288-3292`):
- `kd:[{f:"1281-01-01",t:"1431-01-01",k:1}]`
- `s:` 1281→1431 angkor-kmer
- 1431→1795 kamboc-kralligi
- 1795→1907-03-23 siyam-chakri
- 1907→**1923-10-29** fransiz-cinhindi

Kaydın kendi yorumu (3283–3285): *"Şehir tamamen boşalmadığı (Angkor Wat işleyen bir mâbet olarak kaldığı) için bit: YAZILMADI."*
⇒ **Koordinatörün "terk edilmiş şehrin modern noktası olmayabilir ⇒ düz taşıma" beklentisi ölçümle TUTMADI.** Kaydın yazarı 1431 sonrası için bilerek bir nesne seçmiş: işleyen mâbet Angkor Wat. Atlas noktası tam o nesnenin üstünde (0,06 km). Kaydın adı da "(Siem Reap)". ⇒ **Pencere çok katmanlı: 1281–1431 Angkor Thom, 1431–1923 Angkor Wat/Siem Reap ⇒ İKAME.**

| seçenek | ne yapar | artı | eksi |
|---|---|---|---|
| **(a) İKAME** (`-v2-ikame-secenegi.diff`) | Yeni kayıt **"Angkor Thom (Yaşodharapura)"** 13.4413/103.8590, `k:1`, `bit:"1431-01-01"`, `s:` 1281–1431. Mevcut kayıt Angkor Wat'ta kalır: `kur:"1431-01-01"`, `kd` kaldırılır (başkentlik yeni kayda geçer) | İki dönem de kendi nesnesinde | İki nokta 3,37 km arayla duruyor. VERI-YAPISI'nın "3 km içinde ikinci nokta açma" kuralının hemen üstünde, ve zamanda çakışmıyorlar. Ad referansı **5 dosya, 8 satır**: `kademe_f5c9a5.js:81` kd'si yeni kayda geçmeli, `kronoloji_cok_once1281_dogu_asya.js` 399/405/418 `yer:"Angkor (Yasodharapura)"`. Bağlanmadı |
| **(b) TAŞIMA** (`-v2-tasima-secenegi.diff`) | Nokta Angkor Thom'a taşınır | Tek satır. Başkent dönemi düzelir | 1431–1923 boyunca nokta Angkor Wat'tan 3,4 km, Siem Reap'ten 8,4 km uzakta kalır; kaydın yazarının açık tercihine aykırı |
| (c) dokunma | — | Fark 3,4 km ve tek sahip (angkor-kmer) bölgesinin içinde; motor etkisi büyük olasılıkla ihmal edilebilir | 1281–1431 başkenti 3,4 km kayık |

---

## 4 · Ana diff: `LAB-KONUM-ONERI-1010-v2.diff` ve `-v2.json`

- **İçerik:** v1'in 7 kalemi (Merv · Turfan · Maskat · Tâif · Hürmüz Adası · Silifke · Tırgan).
  - `uret.py ana` ile **46ebbc3c6 tabanında yeniden üretildi.**
  - Satır numaraları ab9aa9571 ile aynı çıktı: 215, 1042, 1463, 1712, 2274 (`yerlesimler.js`) · 2430 (`_asya`) · 457 (`_h2_kuzeyafrika`). Hiçbir satır kaymamış.
  - v1 diff'i de yeni tabana temiz uygulanıyor.
- **KESİN kalemlerden ana diff'e giren: YOK.** Üçünün de penceresi çok katmanlı (§6.3).
- `git apply --check` (46ebbc3c6):

  | diff | sonuç |
  |---|---|
  | `-v2.diff` | **GEÇTİ** |
  | `-v2-tasima-secenegi.diff` (Van + sehirler.js Van + Angkor) | **GEÇTİ** |
  | `-v2-ikame-secenegi.diff` (Van + Kandehar + Angkor) | **GEÇTİ** |
  | `LAB-KONUM-ADAY-1010-pantelerya.diff` | **GEÇTİ** |

- **Birlikte sınandı:**
  - `v2 + pantelerya + ikame` uygulandı ve `node` ile üç dosya parse edildi.
  - Bölünmüş kayıtların `kur/bit/s` pencereleri okunup doğrulandı: boşluk yok, çakışma yok.
  - `v2 + pantelerya + tasima` da birlikte temiz uygulanıyor; `sehirler.js` parse oldu.
  - **tasima ile ikame Van ve Angkor için birbirini DIŞLAR.** İkisi birlikte uygulanmaz.
- Her sınamadan sonra `git checkout .` çalıştırıldı; `git status` boş.
- **Bu turda koşulmayanlar:**
  - `paketle.py yenile/sina`: v1'de belirtilen bayat paket durumu (paket_13/14/22/23) hâlâ geçerli varsayılmalı.
  - Değişmez denetimleri.

  İKAME diff'i yeni ad üretiyor. Ad referanslarının bağlanması ayrı bir iş.
- Yeni koordinatların hepsi `motor_kara` içinde. En yakın başka atlas noktası her durumda yalnız kendi eski noktası (4,6 / 4,9 / 3,4 km); sonraki komşu ≥47 km.
- Yeni alan tasarlanmadı: İKAME taslağı yalnız var olan `kur:` · `bit:` · `not:` alanlarını kullanıyor.

## 5 · Öngörü ↔ ölçüm

*(Öngörü görev metnine dayanıyordu; ayrı bir dosyaya önceden yazılmadı. Bunu beyan ediyorum.)*

| | öngörü | ölçüm |
|---|---|---|
| Van | tek katmanlı (kale) ⇒ v2'ye girer | Pencere 1920–23'e uzanıyor ⇒ §6.3 harfiyle İKAME. Kale okumasıyla taşıma seçeneği ayrı tutuldu |
| Kandehar | İKAME | **tuttu** |
| Angkor | KATMAN'ın 4,35 km tanığıyla taşıma | **Tanık yanlış tanıktı** (UNESCO alan noktası, dakika-yuvarlak). Doğru nesne Angkor Thom, 3,37 km. Atlas noktası Angkor Wat'ta. Kaydın yorumu 1431 sonrası için bu noktayı bilerek seçmiş ⇒ İKAME |
| TGN "Van Kalesi" | Van'ı teyit eder | **Yanlış nesne** (Toprakkale). TGN'nin tek-tanık güvenilmezliğine bir örnek daha |

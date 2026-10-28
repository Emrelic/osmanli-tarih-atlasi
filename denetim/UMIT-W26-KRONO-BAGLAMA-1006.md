# UMIT-W26-KRONO-BAGLAMA-1006 — B) KRONOLOJİ EZİLDİ · A) ad eşlemesi

Ağaç `C:\atlas-w26` = origin/main `847408ea` (detached). `data/`, motor tuzu ve `kronoloji_*`ye DOKUNULMADI.

## 0. ÖNGÖRÜ (B düzeltmesi) — diff YAZILMADAN ÖNCE mühürlendi
Ön ölçüm (§1): 26 künye eziliyor · künyenin kendi 228 maddesi siliniyor:
dosyada AYNI t+b 1 · AYNI GÜN 143 · yalnız AYNI YIL 40 · hiç karşılık YOK 44.

Kural (meşru ezme = künye maddesi dosyada TEMSİL EDİLİYOR):
künye maddesi K, dosyada şu F'lerden biri varsa düşer; yoksa EKLENİR:
(a) F.t === K.t · (b) |F.t − K.t| ≤ 30 gün (Değişmez 2'nin penceresi) ·
(c) K.t `YYYY-01-01` (yıl hassasiyeti, §4) ve F aynı yıl.

| öngörü | değer |
|---|---|
| eklenen (korunan) künye maddesi | **52 ± 3** (YOK 44 + YIL'dan 8–10) |
| meşru ezilen (düşen) | **176 ± 3** (gün 144 + YIL'dan ~30–32) |
| `iran` sekmesi | 107 → **113** (6 Pehlevi maddesi geri) |
| `rusya` | +1 (1568 Astrahan seferi) |
| düşenlerin içinde AYRI olay (yanlış meşru) | ≤ 3, adıyla listelenecek |
| çok taraflı ekleyici (`cokTarafliKronolojiEkle`) davranışı | değişmez |

### Öngörü tuttu mu (ölçüm §1.4)
| öngörü | ölçülen | |
|---|---|---|
| korunan 52 ± 3 | **54** (228 − 174) | ✓ |
| meşru ezilen 176 ± 3 | **174** | ✓ |
| `iran` 107 → 113 | 6/6 Pehlevi maddesi korundu (EZİLEN listesinden çıktı) | ✓ |
| `rusya` +1 | 1568 Astrahan korundu (14/15 düştü) | ✓ |
| düşenlerde AYRI olay ≤ 3 | **2 kesin + 1 sınırda** (§1.4) | ✓ |
| çok taraflı ekleyici değişmez | bağlı 26 dosya / 2479 madde, önce = sonra; COK kesitine dokunulmadı | ✓ |

## 1. B) KRONOLOJİ EZİLDİ — süzgeç kusuru

### 1.1 Kod
`js/app.js` (origin/main `847408ea`):
- `:14251` `derinKronolojiBindir` IIFE,
- `:14284` `D[i].kronoloji = derin;` — künyenin kendi dizisini KOŞULSUZ değiştiriyordu,
- `:14281-14283` yalnız `console.warn` basıyordu.

**Koşul:** künye `id`si ad eşlemesiyle bir `KRONOLOJI_<ID>` dosyasına düşüyor (`:14267-14273`) ve künyenin `kronoloji` alanı dolu. **Ölçüm:** bağlanan 26 dosyanın **26'sında da** bu koşul var.

### 1.2 Ölçüm — 26 künye · 228 madde (hepsi adıyla)
Ölçüm aracı `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py`. Bu araç app.js'in GERÇEK kesitini koşturur; benim taklidim (`olc.js`) de aynı sayıyı verdi.

| künye | kendi madde | dosya | aynı gün | yalnız aynı yıl | hiç karşılık yok |
|---|---|---|---|---|---|
| habsburg | 14 | 117 | 14 | 0 | 0 |
| rusya | 15 | 158 | 14 | 0 | 1 |
| lehistan | 12 | 78 | 10 | 2 | 0 |
| venedik | 11 | 86 | 6 | 4 | 1 |
| **iran** | **6** | 107 | 0 | 0 | **6** (Pehlevi 1925-1979) |
| bizans | 15 | 97 | 10 | 2 | 3 |
| memluk | 10 | 155 | 6 | 1 | 3 |
| kirim | 10 | 91 | 8 | 2 | 0 |
| macaristan | 12 | 127 | 8 | 3 | 1 |
| ingiltere | 6 | 270 | 6 | 0 | 0 |
| fransa | 3 | 184 | 2 | 1 | 0 |
| **almanya** | 11 | 132 | 3 | 2 | **6** (1933-1945) |
| ispanya | 7 | 158 | 5 | 0 | 2 (1936-1939) |
| portekiz | 6 | 86 | 2 | 0 | 4 |
| akkoyunlu | 12 | 77 | 9 | 1 | 2 |
| karakoyunlu | 11 | 70 | 5 | 5 | 1 |
| altinorda | 5 | 44 | 4 | 0 | 1 |
| hollanda | 7 | 42 | 5 | 0 | 2 |
| isvec | 3 | 95 | 1 | 2 | 0 |
| timurlu | 10 | 24 | 2 | 5 | 3 |
| atina-dukaligi | 4 | 25 | 3 | 1 | 0 |
| gurcistan | 13 | 45 | 9 | 2 | 2 |
| katalan | 4 | 9 | 3 | 1 | 0 |
| naksa-dukaligi | 3 | 25 | 2 | 1 | 0 |
| rodos-sovalyeleri | 7 | 96 | 6 | 1 | 0 |
| safevi | 11 | 81 | 1 | 4 | 6 |
| **TOPLAM** | **228** | | **144** (1'i t+b birebir) | **40** | **44** |

- Aynı gün örneklemi okundu (habsburg 13, rusya 14, lehistan 10, venedik 3): **hepsi AYNI OLAY**, başlık yeniden yazılmış. Bu, 0929 raporunun 6/6 örneğiyle uyumlu.
- "Hiç karşılık yok" kovası çoğunlukla dosyanın tarih aralığı DIŞINDA kalıyor: `iran` 1925-79 · `almanya` 1933-45 · `ispanya` 1936-39 · `memluk` 1250-77 · `portekiz` 1097/1128 · `macaristan` 1000.
- Önceki ölçüm `KRONO-BAGLAMA-0929.md` §2: 27 künye / 222 madde. Bugün **26 / 228**.

### 1.3 Düzeltme — `denetim/KRONO-EZILDI-1006.diff` (yalnız `js/app.js`, 80 satır, LF, CR 0)
- `=` yerine BİRLEŞTİRME geldi. Künye maddesi dosyada TEMSİL EDİLİYORSA düşer; edilmiyorsa EKLENİR.
- Temsil kuralı §0'daki (a)/(b)/(c). Kural 0929'un (a) seçeneğidir; (b)/(c) eklendi, çünkü 0929'un 14 "çift-gün tarih çelişkisi"ni de topluyor (Kandiye 09-27/09-06, İznik 03-02/03-01 …).
- Dosya dizisi DEĞİŞTİRİLMEZ (`concat`). Ek yoksa künye dosyanın KENDİ dizisini gösterir, yani eski davranış bit bit aynı kalır (sınav S1/S7).
- Birleşik dizi gün sayısıyla sıralanır. Üç haneli yıl dizgi tuzağına (D205) düşmez (sınav S8).
- Konsol mesajları değişti:
  - meşru düşüş → `console.log`,
  - korunan → `🟡 KRONOLOJİ KORUNDU` (`warn`).
  - `🔴 KRONOLOJİ EZİLDİ` metni artık BASILMIYOR. `ODAK-SEKME-1006/1006b.diff`in `bagla_log` süzgeci `EZİLDİ`yi arıyordu; kırılmaz, yalnız boş döner.

### 1.4 Sınav — iki yön
| sınav | sonuç |
|---|---|
| KAPI önce | EZİLEN 26 künye / **228** · karşılıksız 79 |
| KAPI sonra | EZİLEN 25 künye / **174** · karşılıksız 28 · `iran` listeden ÇIKTI |
| sentetik 8 durum (`sinav.js`, gerçek kesit `vm`de) | **8/8**: aynı gün düşer · +30 gün düşer · +31 KALIR · yıl hassas aynı yıl düşer · gün hassas 6 ay uzak KALIR · iran deseni KALIR · boş künye = dosyanın kendisi (kimlik) · 697 yılı KALIR ve sırada başta |
| `node --check js/app.js` | ✓ |
| `git apply --check` | origin/main üstüne `-R` ✓ · `C:\atlas-umit` (`a9254b03`) üstüne ileri ✓ |

**Meşru düşen ama aynı günde karşılığı olmayan 28 madde tek tek okundu.** 25'i aynı olayın 1-30 gün ya da yıl hassasiyeti farkı; bunlar TARİH ÇELİŞKİSİ, kaynakla çözülmeli. **AYRI olay olup düşenler:**
- `timurlu 1449-01-01` "Uluğ Bey tahta çıktı". Dosyadaki karşılığı 1449-10-25 "öz oğlu tarafından öldürüldü".
- `safevi 1503-01-01` "Diyarbekir, Bağdat ve Musul ele geçirildi". Dosyadaki karşılığı 1503-06-01 "Hemedan".
- (sınırda) `karakoyunlu 1406-01-01` "Tebriz'i ele geçirdi". Dosyadaki karşılığı 1406-10-15 "Aras zaferi".

Üçü de yıl hassasiyetli (`-01-01`) künye maddesi. Kuralın (c) maddesi bilinçli bir bedeldir; yazılırsa bu üç maddenin dosyaya taşınması gerekir.

### 1.5 KAPI aracı hakkında
`ARAC-KRONO-BAGLAMA-0929-KAPI.py` "ekranda olmayan künye maddesi"ni hâlâ EZİLEN sayar ve çıkış 1 verir. Meşru düşüş (174) ile kayıp arasında ayrım yapmaz. Aracın sahibi ben değilim; DOKUNULMADI. Önerim: `karsiliksiz` yerine "temsil edilmeyen" ölçütü (`kronoTemsilEdiliyor` kesitin içinde olduğu için doğrudan çağrılabilir).

## 2. A) AD EŞLEMESİ — yalnız ölçüm + tablo (hiçbir dosyaya yazılmadı)

### 2.1 Eşleme nerede
`js/app.js` (origin/main):
- `:14250` `var KRONOLOJI_ID_OZEL = {};` → **BOŞ** istisna sözlüğü.
- `:14267` aday = `KRONOLOJI_ID_OZEL[anahtar] || anahtar.slice(10).toLowerCase()`.
- `:14268` `_`→`-` ikinci aday.
- `:14272-14273` `DEVLETLER`de `id` birebir eşitliği.
- `:14284` bindirme.

Eşleme bir pencere sınaması YAPMAZ: dosya künyenin penceresine bakılmadan TOPTAN bağlanır.

⚠️ `KRONOLOJI_ID_OZEL` tek başına çare değildir: bir dosyayı TEK künyeye yönlendirir, birleşik dosyayı bölemez. Çare, maddeyi ayrı künyelere dağıtmaktır (0929 §3 mekanizması: `KRONOLOJI_X` → `KRONOLOJI_COK_X` + madde başına `devlet:`). Bu `data/kronoloji_*` sahibinin işidir.

### 2.2 Ölçüm (yıl `pad`li)
İlk taklidim dizgi karşılaştırması yüzünden `venedik` (697), `ingiltere` (927) ve `bizans` (330) için 86/270/97 YANLIŞ kirli verdi; `pad` ile düzeltildi (D205).

26 bağlı eşlemenin **15'inde 321 madde** künye penceresi dışında. 11 eşleme temiz (0).

| eşleme | künye penceresi | dışarıda / dosya | yön |
|---|---|---|---|
| `KRONOLOJI_IRAN` → `iran` (Pehlevi) | 1925-12-12 → 2026-08-07 | **107 / 107** | hepsi önce |
| `KRONOLOJI_FRANSA` → `fransa` (Krallık) | 987 → 1792-09-22 | **91 / 184** | hepsi sonra |
| `KRONOLOJI_MACARISTAN` → `macaristan` (bağımsız) | 1000 → 1526-08-29 | **83 / 127** | hepsi sonra |
| `KRONOLOJI_GURCISTAN` | 1008 → 1801-09-12 | 8 / 45 | 1 önce · 7 sonra |
| `KRONOLOJI_ISPANYA` | 1479-01-20 → 1945 | 7 / 158 | önce |
| `KRONOLOJI_KIRIM` | 1441 → 1783-04-19 | 5 / 91 | sonra |
| `KRONOLOJI_SAFEVI` | 1501-07-01 → 1736-03-08 | 5 / 81 | 3 önce · 2 sonra |
| `KRONOLOJI_HOLLANDA` | 1581-07-26 → 1945 | 3 / 42 | önce |
| `KRONOLOJI_NAKSA_DUKALIGI` | 1207 → 1579 | 3 / 25 | 2 önce · 1 sonra |
| `KRONOLOJI_ATINA_DUKALIGI` | 1205 → 1458-06-04 | 2 / 25 | 1 · 1 |
| `KRONOLOJI_KATALAN` | 1311-03-15 → 1388-05-02 | 2 / 9 | önce |
| `KRONOLOJI_RODOS_SOVALYELERI` | 1310 → 1798-06-12 | 2 / 96 | önce |
| `KRONOLOJI_LEHISTAN` | 1569-07-01 → 1795-10-24 | 1 / 78 | sonra |
| `KRONOLOJI_VENEDIK` | 697 → 1797-05-12 | 1 / 86 | sonra |
| `KRONOLOJI_KARAKOYUNLU` | 1351 → 1469-12-19 | 1 / 70 | sonra |

**Ayrı sınıf (A'nın dışında, sayıyla):** 15 `KRONOLOJI_*` dosyası hiçbir künyeye eşlenmiyor, toplam **2.084 madde** sitede ERİŞİLEMEZ. Dosyalar: cin, hindistan, japonya, misir, ozbek, anadolu, arabistan, balkan, dogu_afrika, guney_asya, iran_ardillari, italya_sehir, kuzeyafrika, orta_asya, sirbistan. 0929 §3'te ölçülmüş ve UYGULA aracı yazılmış; bugünkü durumunu ölçmedim.

### 2.3 Önerilen künye — madde madde
🔴 **Künye SEÇİMİ kapsam kararıdır; bu tablo yalnız ÖNERİDİR.** Hiçbir künye genişletilmedi.

Yöntem, sırayla:
1. **ELLE:** küçük kümeler (40 madde) tek tek okundu.
2. **kelime:** başlıkta hanedan/kişi adı geçiyorsa (Timur, Uzun Hasan, Nadir, Zend, Szapolyai, Bethlen …) ve o künyenin penceresi maddeyi kapsıyorsa o künye.
3. **tarih sırası:** yoksa dönemin hâkim yapısı.
   - iran: ilhanlı <1353 · celâyirli <1381 · timurlu <1447-03-13 · karakoyunlu <1467-11-10 · akkoyunlu <1501-07-01 · safevî <1736-03-08 · afşar <1751 · zend <1789-03-21 · kaçar.
   - fransa: `fransa-cumhuriyet`.
   - macaristan: `macaristan-habsburg`, 1918-11-16 sonrası `macaristan-naiplik`.

Bu sınırlar BENİM önerimdir, kaynaklı değildir. Çakışan pencerelerde "öteki adaylar" sütunu dolu.

**Ölçüm:**
- Önerilen künyenin penceresi maddeyi kapsamayan: **0 / 308**.
- `bulunamadı`: **13**. Polity yok ya da madde Osmanlı çekirdek kronolojisine ait (künyesi yok). Bunların 2'si §3.5 ② "künyeyi genişlet" adayı (naksa 1205 Sanudo, rodos 1306 çıkarma); kaynak ister ve genişletme bu işte YASAK.

Özet:
- **iran (107):** kaçar 40 · safevî 39 · timurlu 8 · afşar 7 · zend 4 · ilhanlı 3 · akkoyunlu 3 · serbedârî 1 · muzafferî 1 · karakoyunlu 1.
- **fransa (91):** `fransa-cumhuriyet` 91 (ek taraf adayları: Cezayir 1830, Tunus 1881).
- **macaristan (83):** `macaristan-habsburg` 72 · erdel 6 · doğu-macar 3 · orta-macar 2.
- **küçükler (40):** aşağıdaki tablolarda.

### `lehistan` ← `KRONOLOJI_LEHISTAN` · künye 1569-07-01 → 1795-10-24 · 1/78 dışarıda
Özet: `bulunamadı` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1797-01-09 | Dąbrowski Lejyonları İtalya'da kuruldu | `bulunamadı` | ELLE · Lehistan 1795 taksimle bitti, 1807 Varşova Dukalığı öncesi — polity yok; taraf olarak `fransa-cumhuriyet` (lejyon Fransız hizmetinde) |  |

### `venedik` ← `KRONOLOJI_VENEDIK` · künye 697-01-01 → 1797-05-12 · 1/86 dışarıda
Özet: `habsburg` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1797-10-17 | Campoformio Antlaşması — Venedik'in Avusturya'ya verilmesi | `habsburg` | ELLE · Campoformio: Venedik toprağı Avusturya'ya; cumhuriyet 1797-05-12 bitti |  |

### `iran` ← `KRONOLOJI_IRAN` · künye 1925-12-12 → 2026-08-07 · 107/107 dışarıda
Özet: `kacar` 40 · `safevi` 39 · `timurlu` 8 · `afsar` 7 · `zend` 4 · `ilhanli` 3 · `akkoyunlu` 3 · `serbedariler` 1 · `muzafferi` 1 · `karakoyunlu` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1295-06-19 | Gazan Han İslâm'ı kabul etti | `ilhanli` | kelime |  |
| 1335-11-30 | Ebû Said'in ölümü — İlhanlı Devleti'nin fiilen dağılması | `ilhanli` | kelime | muzafferi |
| 1337-09-09 | Serbedârî hareketinin kuruluşu (Sebzevar) | `serbedariler` | kelime | muzafferi |
| 1353-01-01 | Muzafferîler Şîraz'ı ele geçirdi | `muzafferi` | kelime | celayirli, serbedariler, karakoyunlu, akkoyunlu |
| 1381-01-01 | Timur'un İran seferleri başladı | `timurlu` | kelime | celayirli, muzafferi, serbedariler, karakoyunlu, akkoyunlu |
| 1387-11-18 | İsfahan katliamı | `timurlu` | tarih sırası | celayirli, muzafferi, karakoyunlu, akkoyunlu |
| 1405-02-18 | Timur öldü | `timurlu` | kelime | celayirli, karakoyunlu, akkoyunlu |
| 1409-01-01 | Şahruh Herat'ı başşehir yaptı — Timurlu "altın çağı" | `timurlu` | kelime | celayirli, karakoyunlu, akkoyunlu |
| 1447-03-13 | Şahruh'un ölümü — Timurlu toprakları parçalandı | `timurlu` | kelime | karakoyunlu, akkoyunlu |
| 1375-01-01 | Karakoyunlu Konfederasyonu'nun kuruluşu | `karakoyunlu` | kelime | celayirli, muzafferi, serbedariler, timurlu, akkoyunlu |
| 1467-11-10 | Akkoyunlu, Karakoyunlu'yu yendi — Uzun Hasan'ın yükselişi | `akkoyunlu` | kelime | timurlu, karakoyunlu |
| 1473-08-11 | Otlukbeli Muharebesi — Osmanlı, Akkoyunlu'yu yendi | `akkoyunlu` | kelime | timurlu |
| 1478-01-06 | Uzun Hasan öldü, Akkoyunlu parçalanmaya başladı | `akkoyunlu` | kelime | timurlu |
| 1501-07-01 | Şah İsmail Tebriz'de tahta çıktı — Safevî Devleti kuruldu | `safevi` | tarih sırası | timurlu, akkoyunlu |
| 1502-01-01 | On İki İmam Şiîliği resmî mezhep ilan edildi | `safevi` | tarih sırası | timurlu, akkoyunlu |
| 1507-01-01 | Diyarbakır ve Bağdat'ın fethi | `safevi` | tarih sırası | timurlu, akkoyunlu |
| 1510-12-02 | Şeybânî Han'ın yenilgisi — Horasan Safevî'ye geçti | `safevi` | tarih sırası | akkoyunlu |
| 1514-08-23 | Çaldıran Muharebesi — Osmanlı'ya ağır yenilgi | `safevi` | tarih sırası |  |
| 1524-05-23 | Şah İsmail öldü, I. Tahmasb tahta çıktı | `safevi` | tarih sırası |  |
| 1534-01-01 | Osmanlı-Safevî Savaşı başladı (1555'e dek) | `safevi` | tarih sırası |  |
| 1534-12-04 | Bağdat Osmanlı'ya geçti | `safevi` | tarih sırası |  |
| 1548-01-01 | Başkent Tebriz'den Kazvin'e taşındı | `safevi` | tarih sırası |  |
| 1555-05-29 | Amasya Antlaşması — ilk Osmanlı-Safevî barışı | `safevi` | tarih sırası |  |
| 1576-05-14 | I. Tahmasb öldü — veraset krizi başladı | `safevi` | tarih sırası |  |
| 1578-01-01 | Osmanlı-Safevî Savaşı başladı (1590'a dek) | `safevi` | tarih sırası |  |
| 1590-03-21 | Ferhad Paşa (İstanbul) Antlaşması — büyük toprak kaybı | `safevi` | tarih sırası |  |
| 1587-10-01 | I. Şah Abbas tahta çıktı | `safevi` | tarih sırası |  |
| 1598-01-01 | Başkent İsfahan'a taşındı | `safevi` | tarih sırası |  |
| 1598-01-01 | Gulâm ordu reformu — Kızılbaş gücünün dengelenmesi | `safevi` | tarih sırası |  |
| 1603-09-26 | Osmanlı-Safevî Savaşı başladı (1639'a dek) — intikam seferi | `safevi` | tarih sırası |  |
| 1622-05-01 | Hürmüz'ün Portekiz'den geri alınması | `safevi` | tarih sırası |  |
| 1629-01-19 | Şah Abbas öldü | `safevi` | tarih sırası |  |
| 1638-12-24 | Bağdat Osmanlı'ya kesin olarak kaybedildi | `safevi` | tarih sırası |  |
| 1639-05-17 | Kasr-ı Şirin Antlaşması — kalıcı sınır | `safevi` | tarih sırası |  |
| 1666-01-01 | II. Abbas öldü, Şah Süleyman tahta çıktı — duraklama başladı | `safevi` | tarih sırası |  |
| 1694-07-29 | Şah Sultan Hüseyin tahta çıktı | `safevi` | tarih sırası |  |
| 1709-01-01 | Mir Veys Han'ın Kandehar'da isyanı — Afgan bağımsızlığı | `safevi` | tarih sırası |  |
| 1722-03-08 | Gülnâbâd Muharebesi — Safevî ordusu dağıldı | `safevi` | tarih sırası | galzay |
| 1722-10-23 | İsfahan düştü — Safevî Devleti fiilen sona erdi | `safevi` | tarih sırası | galzay |
| 1723-06-24 | Osmanlı, İran'ın batı topraklarını işgale başladı | `safevi` | tarih sırası | galzay |
| 1729-01-01 | Nadir Han, Afganları yenip İsfahan'ı geri aldı | `safevi` | tarih sırası | galzay |
| 1736-03-08 | Nadir Şah, kendini şah ilan etti — Afşar Devleti kuruldu | `afsar` | kelime | safevi, galzay |
| 1739-03-13 | Nadir Şah'ın Hindistan seferi — Delhi'nin yağmalanması | `afsar` | kelime |  |
| 1743-01-01 | Osmanlı-İran Savaşı başladı (1746'ya dek) | `afsar` | tarih sırası |  |
| 1747-06-20 | Nadir Şah suikastla öldürüldü | `afsar` | kelime |  |
| 1750-01-01 | Kerim Han Zend'in yükselişi başladı | `afsar` | tarih sırası | afgan-durrani |
| 1765-01-01 | Şîraz başkent yapıldı — Zend "altın çağı" | `zend` | kelime | afsar, afgan-durrani |
| 1779-03-01 | Kerim Han öldü — Zend hânedanında taht kavgaları başladı | `zend` | kelime | afsar, afgan-durrani |
| 1794-01-01 | Lütf Ali Han'ın yenilgisi — Zend hânedanı sona erdi | `zend` | kelime | afsar, afgan-durrani, kacar |
| 1796-03-21 | Ağa Muhammed Han taç giydi — Kaçar Devleti kuruldu | `kacar` | tarih sırası | afgan-durrani |
| 1795-01-01 | Tiflis'in yağmalanması | `kacar` | tarih sırası | afsar, afgan-durrani |
| 1797-06-17 | Ağa Muhammed Han suikastla öldürüldü | `kacar` | tarih sırası | afgan-durrani |
| 1804-06-10 | Birinci Rus-İran Savaşı başladı (1813'e dek) | `kacar` | tarih sırası | afgan-durrani |
| 1813-10-24 | Gülistan Antlaşması — Kafkasya'nın büyük kısmı kaybedildi | `kacar` | tarih sırası | afgan-durrani |
| 1826-07-19 | İkinci Rus-İran Savaşı başladı (1828'e dek) | `kacar` | tarih sırası |  |
| 1828-02-10 | Türkmençay Antlaşması — Erivan ve Nahcıvan kaybedildi | `kacar` | tarih sırası |  |
| 1834-10-23 | Fetih Ali Şah öldü, Muhammed Şah tahta çıktı | `kacar` | tarih sırası |  |
| 1848-09-05 | Nâsırüddin Şah tahta çıktı | `kacar` | tarih sırası |  |
| 1848-01-01 | Emîr Kebîr sadrazam oldu — modernleşme girişimi | `kacar` | tarih sırası |  |
| 1852-01-10 | Emîr Kebîr'in idamı | `kacar` | tarih sırası |  |
| 1856-10-01 | Herat Savaşı — İngiltere ile çatışma | `kacar` | tarih sırası |  |
| 1872-01-01 | Reuter İmtiyazı — yabancı imtiyazlara tepkinin başlangıcı | `kacar` | tarih sırası |  |
| 1890-03-08 | Tütün İmtiyazı verildi | `kacar` | tarih sırası |  |
| 1891-12-01 | Tütün İsyanı — büyük fetva ve kitlesel boykot | `kacar` | tarih sırası |  |
| 1896-05-01 | Nâsırüddin Şah suikastla öldürüldü | `kacar` | tarih sırası |  |
| 1901-05-28 | D'Arcy Petrol İmtiyazı | `kacar` | tarih sırası |  |
| 1905-01-01 | Meşrutiyet hareketinin başlaması — Tahran'da bast (sığınma) eylemleri | `kacar` | tarih sırası |  |
| 1906-08-05 | Muzafferüddin Şah anayasayı imzaladı — Meşrutiyet ilan edildi | `kacar` | tarih sırası |  |
| 1907-08-31 | 1907 İngiliz-Rus Antlaşması — İran nüfuz bölgelerine bölündü | `kacar` | tarih sırası |  |
| 1908-06-23 | Muhammed Ali Şah'ın Meclis'i bombalaması — küçük istibdat | `kacar` | tarih sırası |  |
| 1909-07-16 | Muhammed Ali Şah tahttan indirildi | `kacar` | tarih sırası |  |
| 1911-11-24 | Rusya'nın ikinci ültimatomu — Meclis kapatıldı | `kacar` | tarih sırası |  |
| 1914-11-01 | I. Dünya Savaşı'nda tarafsızlık ilan edildi (fiilen işgal edildi) | `kacar` | tarih sırası |  |
| 1919-08-09 | 1919 İngiliz-İran Antlaşması — fiilî himaye girişimi | `kacar` | tarih sırası |  |
| 1921-02-21 | Rıza Han'ın darbesi | `kacar` | tarih sırası |  |
| 1923-10-28 | Ahmed Şah ülkeyi terk etti, Rıza Han başbakan oldu | `kacar` | tarih sırası |  |
| 1304-05-21 | Olcaytu (Öljeytü) Şiîliği kabul etti | `ilhanli` | kelime |  |
| 1370-04-09 | Timur, Mâverâünnehir'de tek hâkim oldu | `timurlu` | kelime | celayirli, muzafferi, serbedariler, karakoyunlu, akkoyunlu |
| 1420-01-01 | Baysungur'un Herat nakkaşhânesi — minyatür sanatının zirvesi | `timurlu` | kelime | celayirli, karakoyunlu, akkoyunlu |
| 1458-01-01 | Ebû Said Mirza, Timurlu topraklarını yeniden birleştirdi | `timurlu` | kelime | karakoyunlu, akkoyunlu |
| 1524-01-01 | Kızılbaş naiplik dönemi (Tahmasb'ın çocukluğu) | `safevi` | tarih sırası |  |
| 1555-01-01 | İran halı ve ipek dokuma sanayii zirveye ulaştı | `safevi` | tarih sırası |  |
| 1576-08-11 | II. İsmail'in kısa ve kanlı saltanatı başladı | `safevi` | tarih sırası |  |
| 1598-01-01 | İngiliz Sherley kardeşlerin İsfahan'a gelişi — Avrupa diplomasisi | `safevi` | tarih sırası |  |
| 1618-09-26 | Osmanlı-Safevî Savaşı (Nasuh Paşa sonrası) yeniden alevlendi | `safevi` | tarih sırası |  |
| 1623-11-28 | Bağdat'ın Safevîlerce ele geçirilmesi | `safevi` | tarih sırası |  |
| 1600-01-01 | İpek ticareti devlet tekeline alındı | `safevi` | tarih sırası |  |
| 1649-01-01 | Kandehar'ın Babürlülerden geri alınması | `safevi` | tarih sırası |  |
| 1666-01-01 | Kaşan-İsfahan bölgesinde veba salgını | `safevi` | tarih sırası |  |
| 1699-01-01 | Belûc ve Afgan sınır boylarında merkezî otoritenin zayıflaması | `safevi` | tarih sırası |  |
| 1730-01-01 | Osmanlı ile savaş yeniden başladı (1736'ya dek, aralıklı) | `safevi` | tarih sırası | galzay |
| 1738-03-24 | Kandehar'ın fethi — Afgan meselesinin kapanması | `afsar` | tarih sırası |  |
| 1741-01-01 | Rıza Kulı Mirza'nın kör edilmesi | `afsar` | kelime |  |
| 1775-04-16 | Zend, Basra'yı kuşattı ve ele geçirdi | `zend` | kelime | afsar, afgan-durrani |
| 1844-05-23 | Bâb'ın (Seyyid Ali Muhammed Şirazi) davasını ilan etmesi | `kacar` | tarih sırası |  |
| 1850-07-09 | Bâb'ın idamı — Babî isyanlarının bastırılması | `kacar` | tarih sırası |  |
| 1837-11-23 | Birinci Herat kuşatması (1838'e dek) | `kacar` | tarih sırası |  |
| 1851-12-28 | Dâru'l-Fünûn açıldı | `kacar` | tarih sırası |  |
| 1873-01-01 | Nâsırüddin Şah'ın ilk Avrupa seyahati | `kacar` | tarih sırası |  |
| 1896-01-01 | Müzafferüddin Şah tahta çıktı — mali kriz derinleşti | `kacar` | tarih sırası |  |
| 1908-01-01 | Sattâr Han'ın Tebriz direnişi (1909'a dek) | `kacar` | tarih sırası |  |
| 1908-05-26 | Mesced-i Süleyman'da petrol bulundu | `kacar` | tarih sırası |  |
| 1909-04-14 | Anglo-Persian Oil Company kuruldu | `kacar` | tarih sırası |  |
| 1915-01-01 | Kafkas-İran cephesinde Osmanlı-Rus çatışmaları | `kacar` | tarih sırası |  |
| 1917-01-01 | 1917-1919 büyük kıtlığı | `kacar` | tarih sırası |  |
| 1920-06-05 | Gîlân Sovyet Cumhuriyeti ilan edildi (Cengelî hareketi) | `kacar` | tarih sırası |  |
| 1922-01-01 | Şeyh Hazal ve Simko Kürt isyanlarının bastırılması | `kacar` | tarih sırası |  |

### `kirim` ← `KRONOLOJI_KIRIM` · künye 1441-01-01 → 1783-04-19 · 5/91 dışarıda
Özet: `rusya` 3 · `bulunamadı` 2

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1784-01-08 | İstanbul'da imzalanan antlaşmayla Osmanlı, Kırım'ın Rusya'ya ilhakını resmen tan | `rusya` | ELLE · ilhak sonrası — Rusya'nın tanınan ilhakı |  |
| 1787-08-01 | Son han Şâhin Giray, Rodos'ta idam edildi | `rusya` | ELLE · Şâhin Giray idamı (Rodos) — hanlık bitmiş; Osmanlı çekirdek kronolojisi de aday |  |
| 1787-08-01 | Şehbaz Giray, Osmanlı tarafından Kuban hanı tayin edildi — hanlığı ihya girişimi | `rusya` | ELLE · Şâhin Giray idamı (Rodos) — hanlık bitmiş; Osmanlı çekirdek kronolojisi de aday |  |
| 1789-02-01 | Baht Giray, Kuban hanı tayin edildi | `bulunamadı` | ELLE · Kuban hanı tayini — Osmanlı tarafı; Osmanlı çekirdek kronolojisi (künye yok) |  |
| 1792-01-01 | Yaş Antlaşması sonrası Osmanlı, Kırım Hanlığı'nı yeniden canlandırma fikrinden v | `bulunamadı` | ELLE · Yaş sonrası — Osmanlı çekirdek kronolojisi (künye yok) |  |

### `macaristan` ← `KRONOLOJI_MACARISTAN` · künye 1000-01-01 → 1526-08-29 · 83/127 dışarıda
Özet: `macaristan-habsburg` 72 · `erdel` 6 · `dogu-macar-kralligi` 3 · `orta-macar-kralligi` 2

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1526-11-10 | Szapolyai János'un (I. János) rakip kral seçilmesi | `dogu-macar-kralligi` | kelime | habsburg |
| 1526-12-17 | I. Ferdinand'ın da kral seçilmesi — iki kral dönemi | `macaristan-habsburg` | tarih sırası | dogu-macar-kralligi, habsburg |
| 1538-02-24 | Nagyvárad Antlaşması — Zápolya-Ferdinand paylaşımı | `dogu-macar-kralligi` | kelime | habsburg |
| 1540-07-22 | I. János'un (Szapolyai) ölümü ve János Zsigmond'un doğumu | `dogu-macar-kralligi` | kelime | habsburg |
| 1541-08-29 | Budin'in Osmanlı tarafından fethi — ülkenin üçe bölünmesi | `macaristan-habsburg` | tarih sırası | dogu-macar-kralligi, erdel, habsburg |
| 1552-09-04 | Eğri Kalesi'nin savunması — Dobó István'ın direnişi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1566-09-07 | Sigetvár Kuşatması ve Kanuni'nin ölümü | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1571-08-16 | Torda Edikti — Erdel'de din özgürlüğünün yasalaşması | `erdel` | kelime | habsburg |
| 1590-07-20 | Vizsoly İncili'nin basımı — tam Macarca Kutsal Kitap | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1604-10-15 | Bocskai İstván ayaklanmasının başlaması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1606-06-23 | Viyana Barışı — Bocskai'nin din ve anayasal haklarının tanınması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1606-11-11 | Zitvatorok Antlaşması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1613-10-23 | Bethlen Gábor'un Erdel prensi seçilmesi | `erdel` | kelime | habsburg |
| 1619-08-26 | Bethlen Gábor'un Bohemya seferi — Otuz Yıl Savaşları'na katılım | `erdel` | kelime | habsburg |
| 1621-12-31 | Nikolsburg Barışı | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1622-01-01 | Gyulafehérvár Akademisi'nin (Collegium Academicum) kurulması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1629-11-15 | Bethlen Gábor'un ölümü | `erdel` | kelime | habsburg |
| 1657-01-01 | II. Rákóczi György'nin talihsiz Lehistan seferi | `erdel` | kelime | habsburg |
| 1660-08-27 | Nagyvárad'ın Osmanlı'ya düşmesi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1671-04-30 | Wesselényi Tertibi'nin bastırılması ve Macar anayasasının askıya alınması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1678-09-13 | Thököly İmre'nin Kuruc hareketinin başına geçmesi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1682-09-16 | Thököly İmre'nin Fülek'te Osmanlı vasalı Orta Macar kralı olarak tanınması | `orta-macar-kralligi` | kelime | erdel, habsburg |
| 1685-10-15 | Thököly'nin Varad'da tutuklanması ve Orta Macar Krallığı'nın çöküşü | `orta-macar-kralligi` | kelime | erdel, habsburg |
| 1686-09-02 | Budin'in Habsburglar tarafından geri alınması | `macaristan-habsburg` | tarih sırası | erdel, orta-macar-kralligi, habsburg |
| 1687-08-12 | İkinci Mohaç (Harsány) zaferi | `macaristan-habsburg` | tarih sırası | erdel, orta-macar-kralligi, habsburg |
| 1687-12-09 | Pressburg Diyeti — Macar tacının Habsburg hanedanında kalıtsallaşması | `macaristan-habsburg` | tarih sırası | erdel, orta-macar-kralligi, habsburg |
| 1697-09-11 | Zenta zaferi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1699-01-26 | Karlofça Antlaşması — Macaristan'ın Habsburg tacında bütünleşmesi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1703-06-07 | II. Rákóczi Ferenc'in Brezán Manifestosu — bağımsızlık savaşının başlaması | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1704-07-08 | Rákóczi'nin Erdel Prensi seçilmesi | `erdel` | kelime | habsburg |
| 1707-06-13 | Ónod Diyeti — Habsburg hanedanının tahttan indirildiğinin ilanı | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1708-08-03 | Trencsén Muharebesi — Rákóczi'nin dönüm noktası bozgunu | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1711-04-29 | Szatmár Barışı | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1711-02-21 | Rákóczi'nin sürgüne gitmesi | `macaristan-habsburg` | tarih sırası | erdel, habsburg |
| 1720-01-01 | Bácska ve Bánát'a Alman (Schwaben) göçmenlerin iskânının başlaması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1723-06-19 | Macar Diyeti'nin Pragmatik Yaptırım'ı onaylaması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1741-09-11 | Macar Diyeti'nin 'Vitam et sanguinem' desteği — Maria Theresia'ya silahlı yemin | `macaristan-habsburg` | tarih sırası | habsburg |
| 1738-01-01 | Büyük veba salgınının Güney Macaristan'ı vurması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1735-06-22 | Selmecbánya Maden Akademisi'nin kurulması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1777-08-22 | Ratio Educationis'in yayımlanması — ilk modern eğitim reformu | `macaristan-habsburg` | tarih sırası | habsburg |
| 1784-05-11 | II. József'in Macarcayı idare dilinden kaldırıp Almancayı getirmesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1790-01-28 | II. József'in ölüm döşeğinde reformlarını geri alması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1795-05-20 | Martinovics Ignác ve Macar Yakobenlerinin idamı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1811-01-01 | Kazinczy Ferenc'in 'nyelvújítás' (dil yenileme) hareketinin doruğa çıkması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1825-11-11 | Széchenyi István'ın Macar Bilimler Akademisi için bağışını duyurması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1830-01-01 | Széchenyi'nin 'Hitel' (Kredi) adlı eserinin yayımlanması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1831-08-01 | Doğu Slovakya kolera isyanı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1836-05-25 | Macarcanın kısmen resmî dil olarak kabul edilmesi (1836 Dil Yasası) | `macaristan-habsburg` | tarih sırası | habsburg |
| 1837-08-22 | Pesti Nemzeti Színház'ın (Ulusal Tiyatro) açılışı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1844-11-13 | Macarcanın tam resmî devlet dili ilan edilmesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1844-07-02 | 'Himnusz'un (Macar millî marşı) bestelenmesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1848-03-15 | Pest Devrimi — 12 Nokta ve basın özgürlüğü | `macaristan-habsburg` | tarih sırası | habsburg |
| 1848-04-11 | Nisan Yasaları'nın (April Laws) onaylanması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1848-09-29 | Pákozd Muharebesi — Hırvat Ban'ı Jelačić'in bozgunu | `macaristan-habsburg` | tarih sırası | habsburg |
| 1849-01-05 | Habsburg ordusunun Pest-Budin'i işgali | `macaristan-habsburg` | tarih sırası | habsburg |
| 1849-04-14 | Debrecen'de Habsburg hanedanının hal'i ve bağımsızlığın ilanı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1849-08-13 | Világos'ta teslim — ayaklanmanın Rus yardımıyla bastırılması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1849-10-06 | Aradi Vértanúk — on üç Macar generalinin idamı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1850-01-01 | Bach döneminin merkezîleştirici idaresinin kurulması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1854-03-02 | Urbéri kárpótlás — serflik tazminatının yasal çerçevesinin tamamlanması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1859-06-24 | Solferino bozgununun Bach sisteminin çöküşünü hızlandırması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1861-04-02 | Deák Ferenc'in 'Húsvéti cikk' (Paskalya Makalesi) ile uzlaşma çerçevesini önerme | `macaristan-habsburg` | tarih sırası | habsburg |
| 1866-07-03 | Königgrätz bozgununun Ausgleich'i kaçınılmaz kılması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1867-02-17 | Andrássy Gyula'nın Macaristan başbakanı olması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1867-03-30 | Ausgleich — Avusturya-Macaristan ikili monarşisinin kurulması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1867-06-08 | I. Ferenc József'in Budin'de Macar kralı olarak taç giymesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1868-11-17 | Hırvat-Macar Uzlaşması (Nagodba) | `macaristan-habsburg` | tarih sırası | habsburg |
| 1868-12-06 | 1868 Milliyetler Kanunu | `macaristan-habsburg` | tarih sırası | habsburg |
| 1867-12-14 | 1867 Yahudi Emansipasyon Yasası | `macaristan-habsburg` | tarih sırası | habsburg |
| 1868-11-01 | Magyar Államvasutak'ın (MÁV, Macar Devlet Demiryolları) kurulması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1873-05-09 | Viyana borsa çöküşünün Macar ekonomisine sıçraması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1873-11-17 | Buda, Óbuda ve Pest'in birleşerek Budapeşte'yi oluşturması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1875-11-14 | Liszt Ferenc Zeneakademisi'nin (Müzik Akademisi) kurulması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1875-01-01 | Tisza Kálmán'ın Liberal Parti'yi kurup on beş yıllık iktidarını başlatması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1878-01-01 | Avusturya-Macaristan Gümrük ve Ticaret Birliği'nin on yıllık yenilenmesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1896-05-02 | Kontinental Avrupa'nın ilk yeraltı metrosunun (Földalatti) Budapeşte'de açılışı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1896-05-02 | Macar Millî Bin Yılı (Millennium) sergisinin açılışı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1904-01-01 | Országház'ın (Macar Parlamento Binası) tamamlanması | `macaristan-habsburg` | tarih sırası | habsburg |
| 1905-01-19 | 1905 seçim krizi — Ferenc József'in genel oy tehdidiyle Liberal Parti'ye baskısı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1908-01-01 | 'Nyugat' (Batı) edebiyat dergisinin çıkışı — Macar modernizminin başlangıcı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1914-07-28 | Avusturya-Macaristan'ın Sırbistan'a savaş ilanı | `macaristan-habsburg` | tarih sırası | habsburg |
| 1918-10-31 | Aster Devrimi (Őszirózsás forradalom) — Károlyi Mihály'nın iktidara gelmesi | `macaristan-habsburg` | tarih sırası | habsburg |
| 1918-11-16 | Macaristan Halk Cumhuriyeti'nin ilanı — 637 yıllık krallık geleneğinin fiilen ke | `macaristan-habsburg` | tarih sırası |  |

### `fransa` ← `KRONOLOJI_FRANSA` · künye 987-01-01 → 1792-09-22 · 91/184 dışarıda
Özet: `fransa-cumhuriyet` 91

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1793-01-21 | XVI. Louis'nin idamı | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-04-06 | Kamu Selameti Komitesi'nin kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-07-13 | Marat'nın suikastı | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-08-01 | Metrik sistemin kabulü | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-08-10 | Louvre'un halka açık müze olarak açılması | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-09-05 | Terör Dönemi'nin resmen ilanı | `fransa-cumhuriyet` | tarih sırası |  |
| 1793-10-16 | Marie Antoinette'in idamı | `fransa-cumhuriyet` | tarih sırası |  |
| 1794-06-08 | Yüce Varlık Bayramı — Robespierre'in yeni devlet dini | `fransa-cumhuriyet` | tarih sırası |  |
| 1794-07-28 | Thermidor Tepkisi — Robespierre'in idamı | `fransa-cumhuriyet` | tarih sırası |  |
| 1794-03-11 | École Polytechnique'in kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1795-08-22 | Yıl III Anayasası ve Direktuvar'ın kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1796-04-12 | Napolyon Bonapart'ın İtalya Seferi'nin başlaması | `fransa-cumhuriyet` | tarih sırası |  |
| 1797-10-17 | Campo Formio Antlaşması | `fransa-cumhuriyet` | tarih sırası |  |
| 1798-07-01 | Napolyon'un Mısır Seferi'nin başlaması | `fransa-cumhuriyet` | tarih sırası |  |
| 1799-11-09 | 18 Brumaire Darbesi — Napolyon'un iktidara gelişi | `fransa-cumhuriyet` | tarih sırası |  |
| 1800-01-18 | Fransa Bankası'nın (Banque de France) kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1801-07-15 | Napolyon-Papalık Konkordatosu | `fransa-cumhuriyet` | tarih sırası |  |
| 1802-05-19 | Légion d'Honneur nişanının kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1802-03-25 | Amiens Barışı | `fransa-cumhuriyet` | tarih sırası |  |
| 1802-05-01 | Lise (Lycée) sisteminin kurulması | `fransa-cumhuriyet` | tarih sırası |  |
| 1804-03-21 | Napolyon Kanunu'nun (Code civil) yürürlüğe girmesi | `fransa-cumhuriyet` | tarih sırası |  |
| 1804-12-02 | Napolyon Notre-Dame'da taç giydi | `fransa-cumhuriyet` | tarih sırası |  |
| 1805-12-02 | Austerlitz Savaşı — 'Üç İmparator Muharebesi' | `fransa-cumhuriyet` | tarih sırası |  |
| 1806-08-06 | Kutsal Roma-Germen İmparatorluğu'nun sona ermesi | `fransa-cumhuriyet` | tarih sırası |  |
| 1806-11-21 | Kıta Ablukası'nın (Berlin Kararnamesi) ilanı | `fransa-cumhuriyet` | tarih sırası |  |
| 1807-07-07 | Tilsit Antlaşması | `fransa-cumhuriyet` | tarih sırası |  |
| 1808-09-27 | Erfurt Kongresi — Napolyon-Çar Aleksandr görüşmesi | `fransa-cumhuriyet` | tarih sırası |  |
| 1809-05-17 | Papalık topraklarının Fransa'ya ilhakı | `fransa-cumhuriyet` | tarih sırası |  |
| 1812-06-24 | Napolyon'un Rusya Seferi'nin başlaması | `fransa-cumhuriyet` | tarih sırası |  |
| 1813-10-19 | Leipzig Savaşı — 'Milletler Savaşı' | `fransa-cumhuriyet` | tarih sırası |  |
| 1814-04-06 | Napolyon'un tahttan feragati ve Elba'ya sürgünü | `fransa-cumhuriyet` | tarih sırası |  |
| 1815-03-20 | Napolyon'un Elba'dan dönüşü — Yüz Gün | `fransa-cumhuriyet` | tarih sırası |  |
| 1815-06-18 | Waterloo Savaşı — Napolyon'un kesin yenilgisi | `fransa-cumhuriyet` | tarih sırası |  |
| 1815-06-09 | Viyana Kongresi Nihaî Senedi'nin imzalanması | `fransa-cumhuriyet` | tarih sırası |  |
| 1824-09-16 | X. Charles'ın tahta çıkışı | `fransa-cumhuriyet` | tarih sırası |  |
| 1827-10-20 | Navarin Deniz Savaşı | `fransa-cumhuriyet` | tarih sırası |  |
| 1829-04-24 | Yunanistan bağımsızlığının Bâbıâli'ye kabul ettirilmesi | `fransa-cumhuriyet` | tarih sırası |  |
| 1830-06-14 | Fransa'nın Cezayir'i işgali | `fransa-cumhuriyet` | tarih sırası |  |
| 1830-07-28 | Temmuz Devrimi ('Üç Şanlı Gün') | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1830-08-09 | Louis Philippe'in tahta çıkışı — Temmuz Monarşisi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1830-02-25 | 'Hernani Savaşı' — Victor Hugo ve Romantizmin zaferi | `fransa-cumhuriyet` | tarih sırası |  |
| 1833-07-08 | Hünkâr İskelesi Antlaşması'nın imzalanması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1840-07-15 | Londra Antlaşması — Osmanlı toprak bütünlüğünün Avrupa güvencesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1848-02-24 | Şubat Devrimi — II. Cumhuriyet'in ilanı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1848-04-27 | Fransız sömürgelerinde köleliğin kaldırılması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1848-12-10 | Louis-Napoléon Bonapart'ın cumhurbaşkanı seçilmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1852-12-02 | III. Napolyon'un imparator ilan edilmesi — II. İmparatorluk | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1854-03-27 | Fransa Rusya'ya savaş ilan etti — Kırım Savaşı'na Osmanlı yanında giriş | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1855-05-15 | Paris Dünya Sergisi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1856-02-18 | Islahat Fermanı'nın ilanı — Paris Kongresi'nin gölgesinde | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1857-08-20 | Baudelaire'in 'Kötülük Çiçekleri' davası | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1859-06-24 | Solferino Savaşı — İtalyan birliği için Fransız desteği | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1863-06-10 | Meksika Seferi — Maximilian'ın imparator ilanı hazırlığı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1863-05-15 | 'Çayırda Öğle Yemeği' skandalı — Manet ve modern resmin doğuşu | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1869-11-17 | Süveyş Kanalı'nın açılışı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1870-07-19 | Fransa-Prusya Savaşı'nın başlaması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1870-09-02 | Sedan Savaşı — III. Napolyon'un esir düşmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1870-09-04 | III. Cumhuriyet'in ilanı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1871-01-18 | Alman İmparatorluğu'nun Versay'da ilanı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1871-03-18 | Paris Komünü'nün ilanı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1871-05-21 | 'Kanlı Hafta' — Paris Komünü'nün bastırılması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1871-05-10 | Frankfurt Antlaşması — Alsace-Lorraine'in kaybı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1875-02-25 | III. Cumhuriyet Anayasa Yasaları'nın kabulü | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz |
| 1882-03-28 | Jules Ferry Yasası — ilköğretim zorunlu ve laik oldu | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1881-05-12 | Bardo Antlaşması — Tunus'un Fransız himayesine girmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1885-07-06 | Pasteur'ün ilk kuduz aşısı uygulaması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1889-05-06 | Eyfel Kulesi'nin açılışı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1889-01-27 | Boulanger Krizi'nin doruğu | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1894-12-22 | Alfred Dreyfus'un vatana ihanetten mahkûm edilmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1895-12-28 | Lumière Kardeşler'in ilk sinema gösterimi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1898-01-13 | Émile Zola'nın 'İtham Ediyorum' (J'accuse) mektubu | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1898-12-26 | Curie çiftinin polonyum ve radyumu keşfi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1904-04-08 | İtilâf-ı Müselles'in temeli — İngiltere-Fransa Antant Cordiale'i | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1905-12-09 | Kilise ve Devletin Ayrılması Yasası | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1911-11-04 | İkinci Fas Krizi — Agadir Krizi'nin çözümü | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1912-03-30 | Fas Antlaşması — Fransız himayesinin resmîleşmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1914-07-31 | Jean Jaurès'in suikastı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1914-08-03 | Almanya'nın Fransa'ya savaş ilanı | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1914-09-05 | Marne Savaşı — Paris'in kurtarılması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1916-02-21 | Verdun Savaşı'nın başlaması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1916-05-16 | Sykes-Picot Antlaşması'nın imzalanması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1916-09-15 | İlk tank saldırısı — Somme Muharebesi'nde | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1917-04-16 | Nivelle Taarruzu ve Fransız ordusu isyanları | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1917-04-17 | Saint-Jean-de-Maurienne Antlaşması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1918-11-11 | Compiègne Ateşkesi — I. Dünya Savaşı'nın Batı Cephesi'nde sona ermesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1919-06-28 | Versay Antlaşması'nın imzalanması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1920-04-25 | San Remo Konferansı — manda paylaşımının kesinleşmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1920-07-24 | Meysalun Savaşı — Fransa'nın Şam'ı işgali | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1920-08-10 | Sevr Antlaşması'nın imzalanması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1921-10-20 | Ankara Antlaşması — Fransa'nın Anadolu'daki savaşı sona erdirmesi | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |
| 1923-07-24 | Lozan Antlaşması'nın imzalanması | `fransa-cumhuriyet` | tarih sırası | cezayir-fransiz, tunus-beyligi-fransiz |

### `ispanya` ← `KRONOLOJI_ISPANYA` · künye 1479-01-20 → 1945-09-02 · 7/158 dışarıda
Özet: `kastilya` 6 · `aragon` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1340-10-30 | Río Salado Savaşı — Merînî-Nasrî ittifakının kesin yenilgisi | `kastilya` | ELLE · Río Salado — alt: granada |  |
| 1385-08-14 | Aljubarrota Savaşı — Portekiz bağımsızlığı Kastilya karşısında pekişti | `kastilya` | ELLE · Aljubarrota — alt: portekiz |  |
| 1391-06-04 | Sevilla'da başlayan toplu Yahudi katliamları bütün Kastilya'ya yayıldı | `kastilya` | ELLE ·  |  |
| 1412-06-24 | Caspe Uzlaşması — Aragon tahtına Trastámara hanedanı geçti | `aragon` | ELLE · Caspe |  |
| 1469-10-19 | İsabel ile Fernando'nun evliliği — iki taç aynı hanedanda birleşti | `kastilya` | ELLE · alt: aragon (iki taç) |  |
| 1474-12-13 | İsabel, Kastilya kraliçesi ilan edildi | `kastilya` | ELLE ·  |  |
| 1478-11-01 | İspanyol Engizisyonu kuruldu | `kastilya` | ELLE · Engizisyon (Kastilya'da kuruldu) — künye f 1479-01-20'ye 80 gün |  |

### `karakoyunlu` ← `KRONOLOJI_KARAKOYUNLU` · künye 1351-01-01 → 1469-12-19 · 1/70 dışarıda
Özet: `akkoyunlu` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1479-01-01 | Baharlı beylerinin diriliş girişimi Kirman'da başarısız oldu | `akkoyunlu` | ELLE · Baharlı girişimi Akkoyunlu topraklarında (Kirman) |  |

### `hollanda` ← `KRONOLOJI_HOLLANDA` · künye 1581-07-26 → 1945-09-02 · 3/42 dışarıda
Özet: `habsburg-hollandasi` 3

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1568-01-01 | Seksen Yıl Savaşları'nın başlaması — İspanya'ya karşı isyan | `habsburg-hollandasi` | ELLE ·  |  |
| 1575-02-08 | Leiden Üniversitesi'nin kurulması | `habsburg-hollandasi` | ELLE ·  |  |
| 1579-01-23 | Utrecht Birliği — kuzey vilâyetlerinin birleşmesi | `habsburg-hollandasi` | ELLE · Utrecht Birliği — ardılın kuruluş belgesi; 1581 öncesi |  |

### `atina-dukaligi` ← `KRONOLOJI_ATINA_DUKALIGI` · künye 1205-01-01 → 1458-06-04 · 2/25 dışarıda
Özet: `latin-imparatorlugu` 1 · `bulunamadı` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1204-04-13 | IV. Haçlı Seferi'nin İstanbul'u alması | `latin-imparatorlugu` | ELLE · alt: bizans |  |
| 1458-08-01 | Fâtih'in Atina'yı ziyareti ve şehre imtiyaz vermesi | `bulunamadı` | ELLE · Fâtih'in ziyareti — Osmanlı çekirdek kronolojisi (künye yok) |  |

### `gurcistan` ← `KRONOLOJI_GURCISTAN` · künye 1008-01-01 → 1801-09-12 · 8/45 dışarıda
Özet: `rusya` 3 · `gurcistan-demokratik-cumhuriyeti` 3 · `bulunamadı` 1 · `imereti` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 0645-01-01 | Tiflis'in İslam fetih ordularınca alınması | `bulunamadı` | ELLE · Tiflis'in İslam fethi — taraf `hulefa-yi-rasidin` (632-661) var, Gürcü tarafı (Kartli/İberya) künyesi YOK |  |
| 1804-01-01 | İmereti ve Guriya'nın Rusya ile birleşmesi | `rusya` | ELLE · alt: imereti (t 1810-02-20) |  |
| 1810-02-20 | İmereti Krallığı'nın kesin ilhakı — Kral II. Solomon tahttan indirildi | `imereti` | ELLE · künye t = madde günü; alt: rusya |  |
| 1811-01-01 | Gürcü Ortodoks Kilisesi'nin otosefalisinin kaldırılması | `rusya` | ELLE ·  |  |
| 1829-09-14 | Edirne Antlaşması — Ahıska ve Ahılkelek Rusya'ya terkedildi | `rusya` | ELLE ·  |  |
| 1918-05-26 | Gürcistan Demokratik Cumhuriyeti'nin bağımsızlığını ilan etmesi | `gurcistan-demokratik-cumhuriyeti` | ELLE ·  |  |
| 1921-02-25 | Sovyet Rusya ordularının Tiflis'i işgali | `gurcistan-demokratik-cumhuriyeti` | ELLE · alt: sovyet-rusya |  |
| 1921-03-16 | Batum'un düşüşü — Gürcistan Demokratik Cumhuriyeti'nin sonu | `gurcistan-demokratik-cumhuriyeti` | ELLE · künye t = madde günü |  |

### `katalan` ← `KRONOLOJI_KATALAN` · künye 1311-03-15 → 1388-05-02 · 2/9 dışarıda
Özet: `bizans` 2

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1303-09-01 | Katalan Kumpanyası'nın Bizans hizmetine girmesi | `bizans` | ELLE · Kumpanya henüz devlet değil (künye f 1311-03-15) |  |
| 1305-04-30 | Roger de Flor'un öldürülmesi ve 'Katalan İntikamı'nın başlaması | `bizans` | ELLE · aynı |  |

### `naksa-dukaligi` ← `KRONOLOJI_NAKSA_DUKALIGI` · künye 1207-01-01 → 1579-01-01 · 3/25 dışarıda
Özet: `bulunamadı` 2 · `latin-imparatorlugu` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1204-04-13 | IV. Haçlı Seferi'nin İstanbul'u alması — Ege'de Latin düzeninin doğuşu | `latin-imparatorlugu` | ELLE ·  |  |
| 1205-01-01 | Marco Sanudo'nun sekiz gemiyle Nakşa'yı fethi | `bulunamadı` | ELLE · Sanudo'nun fethi = dukalığın kuruluşu; künye f 1207-01-01 — §3.5 ② (künyeyi GENİŞLET) adayı, kaynak gerekir |  |
| 1669-01-01 | Osmanlı sayımında Nakşa'nın Latin ve Ortodoks nüfusu | `bulunamadı` | ELLE · Osmanlı sayımı — Osmanlı çekirdek kronolojisi (künye yok) |  |

### `rodos-sovalyeleri` ← `KRONOLOJI_RODOS_SOVALYELERI` · künye 1310-01-01 → 1798-06-12 · 2/96 dışarıda
Özet: `kudus-kralligi` 1 · `bulunamadı` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1291-05-18 | Akkâ'nın düşüşü — tarikatın Kutsal Topraklar'dan çıkışı | `kudus-kralligi` | ELLE · künye t = madde günü |  |
| 1306-06-27 | Foulques de Villaret'nin Rodos'a çıkarması | `bulunamadı` | ELLE · Rodos çıkarması = tarikat devletinin başlangıcı; künye f 1310-01-01 — §3.5 ② adayı |  |

### `safevi` ← `KRONOLOJI_SAFEVI` · künye 1501-07-01 → 1736-03-08 · 5/81 dışarıda
Özet: `akkoyunlu` 2 · `zend` 2 · `sirvansah` 1

| tarih | madde | önerilen künye | yol | penceresi tutan öteki adaylar |
|---|---|---|---|---|
| 1500-01-01 | Erdebil tarikatının Kızılbaş silahlı harekete dönüşmesi | `akkoyunlu` | ELLE · Safevî devlet öncesi |  |
| 1500-12-01 | Şirvanşah Ferruh Yesar'ın yenilgisi — ilk büyük Kızılbaş zaferi | `sirvansah` | ELLE · alt: akkoyunlu |  |
| 1501-04-01 | Şarur Muharebesi — Akkoyunlu Elvend Mirza'nın yenilgisi | `akkoyunlu` | ELLE · Şarur |  |
| 1750-06-01 | Kerim Han Zend'in nominal Safevî şehzadesi III. İsmail'i şah ilan etmesi | `zend` | ELLE · künye f 1751-01-01 — 7 ay önce; alt: afsar |  |
| 1773-01-01 | III. İsmail'in ölümü — Safevî hânedan çizgisinin fiilen tükenmesi | `zend` | ELLE ·  |  |

## 3. Bulunamadı / ölçülmedi
- Gerçek tarayıcıda sekme sayımı yapılmadı. Ölçüm node `vm` + app.js'in gerçek kesitiyle yapıldı (KAPI aracı ve kendi taklidim aynı sayıyı verdi).
- §1.4'teki 25 tarih çelişkisinde hangi günün doğru olduğu: kaynak okunmadı (veri sahibinin işi).
- `bulunamadı` 13 madde için künye yok. Gürcistan 645: Kartli/İberya künyesi YOK.
- 15 eşlenmeyen dosyanın (2.084 madde) bugünkü durumu: 0929 UYGULA'nın uygulanıp uygulanmadığı ölçülmedi.

## 4. Değişen dosyalar
- `C:\atlas-umit\denetim\KRONO-EZILDI-1006.diff` (yeni)
- `C:\atlas-umit\denetim\UMIT-W26-KRONO-BAGLAMA-1006.md` (yeni)
- Commit yok. `C:\atlas-w26` ağacı kaldırıldı.
- Ölçüm betikleri scratchpad'de kaldı: `olc.js` · `det.js` · `pen.js` · `tablo.js` · `sinav.js`.


---

# EK — KRONO-EZILDI-1006b + KAPI-0929 temsil ölçütü (koordinatör, 6 Ekim)

## E0. ÖNGÖRÜ — diff'ler YAZILMADAN ÖNCE mühürlendi
| öngörü | değer |
|---|---|
| (c) çıkınca korunan | 54 → **71 ± 3** (yalnız (c) ile düşen 17 madde geri gelir) |
| meşru düşüş | 174 → **157 ± 3** |
| timurlu 1449 · safevi 1503 · karakoyunlu 1406 | üçü de KORUNUR |
| ekranda MÜKERRER görünen künye maddesi (dosyada aynı olay var) | **17 ± 4** (yeni 14 + eski 3: kırım 1571, macaristan 1308, isveç 1714) — küçük ⇒ tavan GEREKMEZ |
| kapı, yamalı app.js | EZİLEN (kayıp) **0** · TEMSİL **157 ± 3** · çıkış 0 (eşlenmeyen 15 dosya ayrı ihlal olarak hâlâ çıkış 1 verir) |
| kapı, yamasız app.js | ekranda olmayan 228 · EZİLEN (kayıp) **71 ± 3** · TEMSİL **157 ± 3** · ÖTER |

### E0'ın sonucu — öngörü tuttu mu
| öngörü | ölçülen | |
|---|---|---|
| korunan 71 ± 3 | **72** | ✓ |
| meşru düşüş 157 ± 3 | **156** | ✓ |
| timurlu 1449 · safevi 1503 · karakoyunlu 1406 KORUNUR | üçü de ekranda (`kor.js`) | ✓ |
| mükerrer 17 ± 4 | **17** | ✓ |
| kapı yamalı: kayıp 0 · temsil 157 ± 3 | kayıp **0** · temsil **156** · çıkış 1 (yalnız 15 eşlenmeyen dosyadan) | ✓ |
| kapı yamasız: düşen 228 · kayıp 71 ± 3 | düşen **228** · kayıp **72** · temsil **156** · ÖTER | ✓ |

## E1. KRONO-EZILDI-1006b (`denetim/KRONO-EZILDI-1006b.diff`, 1006'nın ÜSTÜNE, yalnız `js/app.js`, 34 satır, CR 0)
- (c) çıkarıldı. İstisna listesi YOK. `kronoTemsilEdiliyor` = (a) aynı gün ∨ (b) ±30 gün.
- Gerekçe yorumu koda yazıldı (D263: `-01-01` "gün bilinmiyor"dur, yılla eşlemek sahte kesinliktir).
- **Ek düzeltme `kronoGun`:** `Date.UTC(y, …)` 0-99 yıllarını 1900+y'ye kaydırıyordu. Örnek: 0050-12-31 ile 1950-12-31 "aynı gün" sayılıyordu. Artık `setUTCFullYear` kullanılıyor; sınav S9.
  - Bugünkü veride etkisi yok, çünkü bağlı dosyaların en erken yılı 0645. Atlas MÖ 12000'e gidiyor; o yüzden düzeltildi.
- Zincir sınandı: origin/main `62b34920` → 1006 → 1006b → kapı yaması. Sonuç `cmp` ile birebir ✓. `node --check` ✓.

## E2. KAPI-0929 temsil ölçütü (`denetim/ARAC-KRONO-BAGLAMA-0929-KAPI-1006b.diff` — `.js` + `.py`, 127 satır, CR 0)
**İkinci tanım YOK.** `.js`, `function kronoGun(` → `(function derinKronolojiBindir()` aralığını app.js'ten KESİP ayrı bir `vm` bağlamında koşar ve `kronoTemsilEdiliyor`u çağırır.
- Yüklem bulunamazsa **ÖLÇÜLEMEDİ (çıkış 2)** — sessiz "hepsi kayıp" yok.
- `--yuklem <yol>` yalnız sınav içindir: yamasız app.js'in DAVRANIŞINI yamalının YÜKLEMİYLE sınıflar. Kullanıldığında çıktıda `⚠️ SINAV KİPİ` basılır.

Çıktı, iki sayı AYRI:
```
  ekrandan düşen künye maddesi: 156 (25 künye)
  EZİLEN (kayıp): 0  ← İHLAL — dosyada temsil EDİLMİYOR, sitede GÖRÜNMEZ
  TEMSİL EDİLİYOR (meşru düşüş): 156  ← kusur değil (dosyada aynı gün ya da ±30 gün)
```
- Künye başına `KAYIP n · temsil m`; her kayıp maddesi `✗ id tarih başlık` diye adıyla basılır.
- Çıkış: `1` = eşlenmeyen dosya VAR ya da kayıp > 0. Meşru düşüş çıkışı ETKİLEMEZ.
- JSON alanları değişti: `karsiliksiz`/`karsiliksiz_madde` → `dusen` · `kayip` · `temsil` · `kayip_madde` · `temsil_madde`. Bu alanları okuyan başka bir dosya aradım (`grep karsiliksiz`): `.py` dışında tüketicisi YOK.

### İki yönlü sınav
| koşul | düşen | EZİLEN (kayıp) | TEMSİL | çıkış |
|---|---|---|---|---|
| yamalı app.js (1006+1006b) | 156 | **0** | 156 | 1 — yalnız 15 eşlenmeyen dosya |
| YAMASIZ app.js + 1006b yüklemi (`--yuklem`) | **228** | **72** (adıyla basıldı) ÖTTÜ | 156 | 1 |
| YAMASIZ app.js, `--yuklem` yok | — | — | — | **2 ÖLÇÜLEMEDİ** (yüklem yok) |
| sentetik `sinav.js` (gerçek kesit) | | | | **10/10** — S4 artık KALIR (yıl hassas, 60 gün) · S4b yıl hassas, yıl sınırında 1 gün → düşer · S9 0050 ≠ 1950 |

📌 "Yamasız 228 ötmeli" şartı: yamasız app.js 228 maddeyi ekrandan düşürüyor. Kapı bunun 72'sini KAYIP (ihlal) diye öttürüyor; 156'sını meşru düşüş diye ayrı basıyor. 228'in tamamı ihlal DEĞİLDİR — ayrımın amacı tam da bu.
⚠️ Kapının ihlal çıkışını tek başına sınamak için eşlenmeyen 15 dosyasız bir evren kurulmadı. Çıkış ifadesi `e or kayip`; `kayip` bileşeni yamasız koşuda 72 olarak ölçüldü.

## E3. MÜKERRER ölçümü (koordinatör şartı)
Korunan **72** künye maddesinin **28**'inde dosyada aynı yılda madde var. 28'i tek tek okundu:

**MÜKERRER — aynı olay, farklı gün: 17**
| künye | künye maddesi | dosyadaki karşılığı |
|---|---|---|
| venedik | 1645-01-01 Girit Savaşı başladı | 1645-08-22 Girit Savaşı'nın başlaması, Hanya |
| memluk | 1382-01-01 Burcî, Bahrî'nin yerini aldı | 1382-11-27 Berkuk tahta — Bahrî'den Burcî'ye |
| kirim | 1571-05-24 Devlet Giray Moskova'yı yaktı | 1571-01-01 … Moskova önlerine ulaştı ve şehri ateşe verdi |
| macaristan | 1308-06-15 Anjou Károly tahta çıktı | 1308-11-27 Károly Róbert'in kral ilanı |
| fransa | 1536-01-01 Kapitülasyonlar | 1536-02-18 Kapitülasyonlar |
| akkoyunlu | 1467-01-01 Karakoyunlu'yu yıktı | 1467-11-10 Bingöl baskını |
| karakoyunlu | 1410-01-01 Celâyirli'yi yıkıp Bağdat | 1410-08-30 Esed zaferi |
| karakoyunlu | 1420-01-01 Kara Yûsuf'un ölümü | 1420-11-13 Kara Yûsuf öldü |
| karakoyunlu | 1438-01-01 Cihanşah tahta | 1438-04-19 Cihan Şah tahta |
| karakoyunlu | 1447-01-01 Şâhruh'un ölümüyle | 1447-03-13 Şâhruh'un ölümü |
| isvec | 1714-02-01 Osmanlı topraklarını terk | 1714-10-11 XII. Karl ayrıldı |
| timurlu | 1400-01-01 Halep ve Şam | 1400-10-01 Halep'in düşüşü |
| timurlu | 1409-01-01 Şâhruh başa geçti | 1409-05-01 Şahruh Semerkant'ı alıp birlik |
| atina-dukaligi | 1388-01-01 Nerio Atina'yı aldı | 1388-05-02 aynı |
| gurcistan | 1578-01-01 Tiflis'i ele geçirdi | 1578-08-24 Tiflis'in fethi |
| katalan | 1303-01-01 Kumpanya Bizans hizmetine | 1303-09-01 aynı |
| naksa-dukaligi | 1537-01-01 Barbaros haraca bağladı | 1537-11-01 aynı |

**AYRI olay (korunması doğru): 11**
- Koordinatörün sınaması istediği üç madde: timurlu 1449 Uluğ Bey tahta · safevi 1503 Diyarbekir/Bağdat/Musul · karakoyunlu 1406 Tebriz.
- Öbürleri:
  - lehistan 1620-09 Hotin savaşları başladı / Cecora 10-07
  - venedik 1684 Mora'yı fethetti / Kutsal İttifak'a katılma
  - macaristan 1443-11 İzladi / Uzun Sefer başı
  - almanya 1806-08-06 Kutsal Roma ilga / Jena
  - timurlu 1398-12-17 Delhi / sefer kararı
  - timurlu 1405-02-18 Timur öldü / taht mücadelesi 04-01
  - safevi 1501-07 Tebriz / Şarur 04-01
  - safevi 1524-05-23 İsmail öldü / son yıllar

**Hüküm:** 17 mükerrer küçük. Bütün korunanların %24'ü, bağlı 2.479 maddenin %0,7'si. ⇒ **Tavan GEREKMEZ.**
- 17'nin 14'ü künye tarafında, 1'i (kırım 1571) dosya tarafında `-01-01` (gün bilinmiyor); 2'si (macaristan 1308, isveç 1714) iki tarafta da gün hassas ama farklı. Çaresi veri tarafında: künye maddesini silmek ya da dosyadaki günle düzeltmek, kaynakla.
- Bu 17 + §1.4'ün 25 tarih çelişkisi aynı kaynak araştırmasına girer. Kesişim büyüktür: 25'in 14'ü zaten bu liste (1006'da (c) ile düşüp şimdi korunanlar).

## E4. Değişen dosyalar (atlas-umit, commit yok)
- `denetim/KRONO-EZILDI-1006b.diff` (yeni) — 1006'nın üstüne
- `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI-1006b.diff` (yeni) — kapının `.js` + `.py`'si
- `denetim/UMIT-W26-KRONO-BAGLAMA-1006.md` (bu ek)
- `C:\atlas-w26` kaldırıldı.

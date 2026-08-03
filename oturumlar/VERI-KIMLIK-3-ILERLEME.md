# VERİ KİMLİK 3 — ilerleme

**3 Ağustos 2026 · Opus.** Görev: `oturumlar/VERI-KIMLIK-3-ASYA.md`.
Yazma yetkisi: `data/devletler.js` + `arac/renkler.py`. Başka dosyaya
dokunulmadı; commit/push yapılmadı.

---

## 🔴 ÖNCE BİR ÖLÇÜM: BİTİŞ ÖLÇÜTÜNÜN ÜÇÜNCÜ MADDESİ YANLIŞ KURULMUŞ

Görev dosyası PARTİ 1'i 12 kimlik olarak tarif ediyor ve *"bunlar bitince
harita 1550'de bütünleşir"* diyor. Bitiş ölçütü de üçüncü madde olarak
**"1550 kesitinde adsız kimlik kalmadı"** koşuyor.

**Ölçüldü — bu iki cümle aynı şey değil:**

```
1550-06-15 kesiti, canlı veri (girdi.py'nin okuduğu 5 dosya, 1579 nokta)
  ÖNCE          sahnede 110 kimlik · boyalı 61 · ADSIZ 49  (136 nokta)
  12'den SONRA  sahnede 110 kimlik · boyalı 73 · ADSIZ 37  ( 55 nokta)
                                     (12 kimlik 81 noktayı kapattı)
```

Görev dosyasının listesindeki 12 kimlik, 1550 sahnesinin **tamamı değil**;
noktası çok olan ucu. Geriye 37 kimlik / 55 nokta kalıyor ve bunlar
görev dosyasının PARTİ 2 · 3 · 4 listelerine dağılmış durumda
(`bidar` · `berar` · `kesmir` · `sind` · `malva-sultanligi` Parti 2'de,
`campa` · `angkor-kmer` · `ternate-sultanligi` Parti 3'te, `mogulistan`
Parti 4'te…).

⇒ **İKİSİ DE YAPILDI.** PARTİ 1'in kendi tanımı (12 kimlik) ve ölçütün
istediği kuyruk (37 kimlik) ayrı bloklar hâlinde yazıldı. **Ölçüldü:**

```
1550-06-15: sahnede 110 kimlik · boyalı 110 · ADSIZ 0
```

⚠️ O 37, görev dosyasının PARTİ 2·3·4 listelerinden alındı — yani o
partiler artık **eksilmiş** durumda; kalan işi planlarken listeler
yeniden sayılmalı. Ayrıntı §⑧.

📌 Bu, `CLAUDE.md §1.5`'in *"bayat satır bir oturumu yanılttı"* dersinin
aynı sınıfı: görev dosyasındaki liste bir ölçümün fotoğrafıydı, ölçütün
kendisi değil. Liste doğruydu (o 12 gerçekten en büyükleri), ölçüt onun
üstüne fazla şey bindirmişti.

---

## TESLİM ÖZETİ

```
data/devletler.js   246 → 301 kayıt   (+55 künye)
arac/renkler.py     171 → 226 kimlik  (+55 renk)
kapanan kesit       1550 · 1600 · 1650 · 1700 — DÖRDÜ DE ADSIZ 0
renk sağlığı        10 görünmez · 55 çakışma · 0 aynı-hex   (tavan 10 / 56)
```
Üç blokta teslim edildi: **PARTİ 1 + 1b** (49 kimlik, 1550 sahnesi) ·
**PARTİ 2** (5 kimlik, 17. yüzyılın üç kesiti) · **`teodoro`**
(koordinatörün ek işi, Kırım'ın güneybatısı).
Commit ve push YAPILMADI (yalnız Oturum 0). `uret_petek.py` çalıştırılmadı.

🔴 **YAZMAM BİTTİ — `data/devletler.js` ve `arac/renkler.py` DONDU.**
İkisine de bu oturumdan başka yazma yapılmayacak; koşu başlatılabilir.

### 🔴 KESİT MERDİVENİ — on dört kesit ölçüldü, yol haritası budur

Bu tablo **listeden değil sahneden** okundu ve sonraki partilerin sırasını
kendisi söylüyor:

```
kesit        sahne  boyalı  ADSIZ  nokta
1300-06-15    129    115     14      53   ← en kalın açık uç
1350-06-15    135    125     10      31
1400-06-15    131    121     10      32
1450-06-15    128    119      9      27
1500-06-15    119    111      8      19
1550-06-15    110    110      0       0   ✅ PARTİ 1 + 1b
1600-06-15     99     99      0       0   ✅ PARTİ 2
1650-06-15     96     96      0       0   ✅ PARTİ 2
1700-06-15     87     87      0       0   ✅ PARTİ 2
1750-06-15     94     83     11      55
1800-06-15     85     74     11      43
1850-06-15     79     67     12      25
1900-06-15     62     51     11      35
1920-06-15     69     56     13     121   ← en çok NOKTA burada
```

📌 İki uç birbirinden farklı: **1300'de kimlik çok** (14 ayrı devlet, az
nokta), **1920'de nokta çok** (13 kimlik ama 121 nokta — `cin-cumhuriyeti`
tek başına 85 uyarı). Hangisinin önce geleceği bir kapsam kararıdır;
`ONCELIK.md §5` zaman sırası 1900-1923'ü ÖNCELİK 1 sayıyor.

---

## ① YAZILAN KÜNYELER — 12/12 (`data/devletler.js`, 246 → 258 kayıt)

Onikisinin de `harita:` alanı yazıldı; alan bir **denetim köprüsüdür**,
boyama `BOYALAR[d]`den gelir (`uret_petek.py:272`) ve o da ②'de yazıldı.

| id | aralık (künye) | başkent | kaynak |
|---|---|---|---|
| `sur-hanedani` | 1540-05-17 → 1564-01-01 | Delhi → Gaur | **TDV `suriler`** |
| `gucerat-sultanligi` | 1407-01-01 → 1573-01-01 | Ahmedâbâd | **TDV `gucerat`** |
| `racput` | 1281-01-01 → 1923-10-29 | Çitor/Udeypûr · Codhpûr · Caypûr | akademik |
| `bicapur` | 1489-01-01 → **1686-09-22** | Bîcâpûr | **TDV `adilsahiler`** |
| `ahmednagar` | 1490-01-01 → 1636-01-01 | Ahmednagar → Devletâbâd | **TDV `nizamsahiler`** |
| `golkonda` | 1512-01-01 → **1687-09-21** | Golkonda → Haydarâbâd | **TDV `kutubsahiler`** |
| `nayak-devletleri` | 1336-01-01 → 1763-01-01 | Madurai · Tancûr · Cinci · Keladi | akademik |
| `orissa` | 1281-01-01 → 1568-01-01 | Kattak | akademik |
| `tibet` | 1354-01-01 → 1642-01-01 | Nêdong → Şigatse | akademik |
| `yarkent-hanligi` | 1514-01-01 → 1705-01-01 | Yarkent | **TDV `kasgar` (kısmî)** |
| `kuzey-yuan` | 1368-09-14 → 1635-01-01 | Karakurum → değişken ordugâh | akademik |
| `demak` | 1478-01-01 → 1587-01-01 | Demak | **TDV `demak`** |

Ortalama künye: `ozet` 208 karakter · 4 kronoloji maddesi. Dosya
ortancası 176,5 → 179,5 (akademik kayıtlar `TDV'de ayrı madde yok…`
kalıbını taşıdığı için uzun; kalıp çıkarılınca hepsi ~175 civarı).

### 🔴 ÖLÇÜLDÜ: Oturum 13'ün İKİ TDV ATFI ÖLÜ

`OTURUM-13-ILERLEME.md` §C6 `yarkent-hanligi` için *"TDV YARKENT"*,
`mogulistan` için *"TDV MOĞULİSTAN"* yazıyor. `<title>` ile sınandı:

```
arama/?q=yarkent          → "yarkent için madde başlıklarında sonuç bulunamadı"   0 sonuç
arama/?q=mogulistan       → 0 sonuç
arama/?q=dogu+turkistan   → 0 sonuç
```

⇒ `yarkent-hanligi`nin TDV dayanağı **`kasgar` maddesidir ve kısmîdir**:
1514-1606 arasını boş bırakıyor, verdiği iki tarih 1606 (Çağatay
hânedanından Emîr İsmâil) ve 1678 (Âfâk Hoca, Kalmuk desteğiyle).
Künye bu ikisini kronolojiye aldı, kuruluş ve bitiş akademik kaynağa
dayanıyor ve `ozet`te *"kısmî"* diye yazıldı.
📌 `CLAUDE.md §4`'ün ölü slug tuzağının aynısı — bu sefer tuzağa
düşen bir TDV sayfası değil, **bir oturum raporunun atfıydı.**

### CANLI olduğu ölçülmüş sluglar (bu turda)
Sayfası açılıp `<title>`ı sınandı: `suriler` · `gucerat` · `adilsahiler` ·
`nizamsahiler` · `kutubsahiler` · `demak` · `kasgar`.
Arama sonuç listesinde madde başlığı olarak göründü (sayfası açılmadı):
`tibet` · `behmeniler` · `bengal` · `baburluler` · `bahavelpur` · `cammu` ·
`cunagerh` · `ahmedabad`.

### TDV'de MÜSTAKİL MADDE YOK (arama ile ölçüldü, künye akademik kaynağa yazıldı)
`racput` · `orissa` · `nayak-devletleri` · `kuzey-yuan` · `mogulistan` ·
`yarkent` (→ `kasgar` kısmî)

---

## ② VERİLEN RENKLER — 12/12 (`arac/renkler.py`, 171 → 183 kimlik)

| id | hex | ton | L* | en yakın engel ΔE |
|---|---|---|---|---|
| `sur-hanedani` | `#4272ae` | 252,7° | 70,7 | 12,1 |
| `gucerat-sultanligi` | `#72ae42` | 122,2° | 78,2 | 12,1 |
| `racput` | `#42ae6c` | 143,4° | 77,2 | 12,4 |
| `bicapur` | `#ae7e42` | 81,3° | 74,8 | 12,3 |
| `ahmednagar` | `#42aea2` | 165,8° | 77,7 | 12,8 |
| `golkonda` | `#4242ae` | 297,4° | 65,0 | 12,5 |
| `nayak-devletleri` | `#bab442` | 101,8° | 81,4 | 12,1 |
| `orissa` | `#9042ae` | 329,1° | 68,1 | 13,0 |
| `tibet` | `#3cc048` | 137,4° | 79,0 | 12,0 |
| `yarkent-hanligi` | `#6c7e36` | 110,6° | 72,2 | 12,4 |
| `kuzey-yuan` | `#306c78` | 171,1° | 68,7 | 12,1 |
| `demak` | `#9072c0` | 320,8° | 73,6 | 12,1 |

### `renk_olc.py` sonucu — öncesi / sonrası

```
ÖNCE    🔴 10 görünmez · 56 çakışma · 1 aynı-anahtar örtüşmesi · 0 aynı-hex
SONRA   🔴 10 görünmez · 56 çakışma · 1 aynı-anahtar örtüşmesi · 0 aynı-hex
                        ↑ 12 yeni kimlik, SIFIR yeni ihlal
py arac/renk_olc.py --dogrula denetim/oneri-asya-parti1.txt
  ✓ 0 fark — yazılan, önerilenle birebir aynı
```
(Kalan `1 aynı-anahtar örtüşmesi` `afsar`↔`kacar`, bu partiden önce de vardı.)

### 🔴 ARACIN ÖNERİSİ İKİ YERDE DÜZELTİLDİ — ikisi de ölçüldü

**① `bicapur`a KIRMIZI verilmişti.** `--oner` çıktısı `#ae4242` dedi
(`denetim/oneri-20260803-075643.txt`). `VERI-YAPISI.md:184` kırmızıyı
Osmanlı ailesine ayırıyor, `OTURUM-13-ILERLEME.md:420` de aynı uyarıyı
tekrarlıyor. **Araç bu kuralı bilmiyor.** Aday havuzundan ton 70°-330°
dışı elendi, yeniden çözüldü.
📌 `renkler.py`nin `babur-imparatorlugu` notunda aynı ders zaten yazılı:
*"aday süzgeci, tekil rengin BÜTÜN kabul ölçütlerini taşımalı."*

**② Yeniler birbirinden ayrışmıyordu.** Aracın ölçütü yalnız **komşu**
çiftleri bağlıyor. İlk öneri bu yüzden Hindistan'a yedi ayırt edilemez
mavi verdi:

```
#4242ae sur · #4248ae gucerat · #424eae golkonda · #4254ae yarkent
#425aae demak · #4260ae kuzey-yuan · #4272ae racput
```

Sur ile Gucerât Voronoi'de **değmiyor** — ölçüt geçiyor. Ama 1550
kesitinde ikisi Hindistan'ın kuzeyi ve batısı, aralarında yalnız Racput
var ve o da mavi. Kullanıcı haritaya baktığında **üçü tek devlettir.**
⇒ Ek kısıt: yeniler birbirinden de **ΔE ≥ 12**, komşu olmasalar bile.
Eşik gevşemedi, seçim yine `uyum()` sırasına göre yapıldı — aracın
*"en ayrık değil, yetinmeci"* dersi korundu.

📌 **Aracın kendi cümlesi haklı çıktı:** *"Bu liste ONAY İSTER. Araç
'meşru' der, 'güzel' demez."* İki düzeltme de meşruiyet sınırının
içinde ama listeyi onaylayanın işiydi.

---

## ③ YAN ETKİ — BEŞ YENİ ANAKRONİZM BULGUSU (kusur veride, benim dosyamda değil)

Künye yazmak `harita:` köprüsünü kurdu; köprü kurulunca
`denetle_anakronizm.py` bu dönemleri **ilk kez ölçebildi.** Beşi ömrün
dışına sarkıyor:

```
kuzey-yuan   (devlet 1368-09-14→1635-01-01)
   85,0 yıl fazla   Dunhuang              1524-01-01→1720-01-01
   52,4 yıl fazla   Urga (Ulan Batur)     1639-01-01→1691-05-30
    1,0 yıl fazla   Hohhot (Kuku-hoto)    1581-01-01→1636-01-01
angkor-kmer  (devlet 1281-01-01→1431-01-01)
  267,0 yıl fazla   Saygon (Gia Định)     1281-01-01→1698-01-01
demak        (devlet 1478-01-01→1587-01-01)
   38,0 yıl fazla   Surabaya              1527-01-01→1625-01-01
```

📌 Bu, `harita:` köprüsünün **kendi başına bir denetim kazancı** olduğunu
gösteriyor: 49 kimlik künyeye bağlanınca dönemleri "ölçülemedi"
kutusundan çıkıp ölçüye girdi ve bu beş sarkma göründü. Araç toplamı
PARTİ 1'den sonra 184, PARTİ 1b'den sonra 185 anakronik dönem diyor
(oturum öncesi sayı ölçülmedi — bu beşi o zaman araç GÖREMİYORDU).

⚠️ **Bunlar `data/yerlesimler_asya.js` kayıtlarıdır — benim yazma
yetkimde değil.** Ve künye tarihini veriye uydurmak (kuzey-yuan'ı
1720'ye çekmek) `CLAUDE.md §3.5`'in yasakladığı şeydir: hayalet devlet
üretir. Künye kaynağa yazıldı, sarkma raporlandı.

Düzeltme yönü (öneri, uygulanmadı):
- **Urga 1639-1691** ve **Dunhuang 1635 sonrası** Kuzey Yuan değil,
  Halha hanlıkları / Cungar dönemidir — `cungar` (BOYALAR'da var) ya da
  yeni bir `halha` kimliği ister.
- **Saygon 1431-1698** Angkor değil, **post-Angkor Kamboçya**'dır —
  karşılığı `kamboc-kralligi`, BOYALAR'da zaten var. Yer 1698'e kadar
  gerçekten Kmer elindeydi; yanlış olan sahibin adı, tarihi değil.
- **Surabaya 1587-1625** Demak değil Pajang/Mataram dönemidir —
  `mataram-sultanligi` (BOYALAR'da var) karşılığı.

Üçü de aynı sınıf: **yer doğru, tarih doğru, KİMLİK bayat** — ardıl
devlet kimliği zaten tabloda var ama kayıt seleften kopmamış.

📌 Ve tersi de kayda geçsin: `sur-hanedani`nin veride 1538-01-01'de
başlayan iki dönemi var, künye TDV'ye uyarak 1540-05-17 diyor. Bu
"ERKEN yön"dür ve araç onu alarm saymıyor (C bölümü) — Şîr Şah 1538'de
Gaur'u almıştı, hânedan ilânı 1540'tadır.

---

## ④ MOGOLİSTAN ↔ MOĞULİSTAN — ölçüldü, İKİSİ AYRI KURUMDUR

Görev dosyası (`YASALAR B11` vakası olabilir diye) ölçülmesini istedi.
Veride:

```
mogolistan    1911-12-29 → 1923-10-29   7 dönem   Bogd Han Moğolistanı (Urga)
mogulistan    1347-01-01 → 1680-01-01   7 dönem   Doğu Çağatay Hanlığı (Almalık → Turfan)
```

**Aynı kuruma iki kimlik DEĞİL** — arada 231 yıl var, ortak dönem yok,
coğrafyaları da farklı (Halha bozkırı ↔ Tarım havzası). `B11` ihlali
yok, birleştirilmemeli. ⚠️ Ama **adları Türkçede bir harf farkla
ayrılıyor** ve bu bir okuma tuzağıdır; künye yazılırken `ad` alanları
"Bogd Han Moğolistanı" ve "Moğulistan (Doğu Çağatay Hanlığı)" olarak
açık yazılmalı. İkisi de PARTİ 4'te, bu partide yazılmadı.

---

## ⑤ PARTİ 1b — 1550 KUYRUĞUNUN 37 KİMLİĞİ

Bitiş ölçütünün üçüncü maddesini kapatan blok. Aynı iki dosyaya,
ayrı başlık altında yazıldı.

`data/devletler.js` **258 → 295 kayıt** · `arac/renkler.py` **183 → 220 kimlik**.

| bölge | kimlikler |
|---|---|
| Hint alt kıtası | `sind` · `kesmir` · `malva-sultanligi` · `bidar` · `berar` · `gond-kralliklari` · `ahom` · `manipur` · `nepal` · `ladak` · `kalikut` · `travankur` |
| Seylan | `kandy` · `yafna` |
| Orta Asya | `mogulistan` |
| Birmanya-Siyam-Laos-Kamboçya | `arakan` · `ava` · `lan-na` · `san-devletleri` · `lan-xang` · `angkor-kmer` |
| Vietnam-Champa | `campa` · `mac-hanedani` |
| Malay dünyası ve takımadalar | `malay-sultanliklari` · `cohor-sultanligi` · `palembang-sultanligi` · `banten-sultanligi` · `banjar-sultanligi` · `gova-makassar` · `ternate-sultanligi` · `tidore-sultanligi` · `banda-adalari` · `bali-kralliklari` · `pagaruyung` · `timor-beylikleri` · `filipin-racaliklari` · `magindanao-sultanligi` |

### 🔴 BURADA EŞİK TEK DEĞİL, İKİ — ve ikincisi ölçülerek seçildi

PARTİ 1'de kullandığım *"yeniler birbirinden de ΔE ≥ 12"* kuralı burada
**ölçülüp reddedildi.** 49 kimliğe karşılıklı 12 dayatılınca çözüm
bulunuyor ama palet uçlara kaçıyor: `#e4e424` neon sarı · `#122430`
neredeyse siyah · `#eaea90` solgun — `renk_olc.py`nin kendi yazdığı
*"en ayrık değil, yetinmeci"* dersinin tam ihlali.
Kuralı bütünüyle kaldırınca da (aracın ham hâli) on kimlik ayırt
edilemez yeşile düşüyordu (`#42ae8a`·`#42ae84`·`#42ae7e`·`#42ae78`·
`#42ae72`·`#42ae66`·`#42ae60`·`#42ae5a`·`#42ae54`·`#42ae4e`) —
Nepal'den Kerala'ya, oradan Moluk'a uzanan **tek bir yeşil leke.**

```
KOMŞUDAN            ΔE ≥ 12   (aracın eşiği — DEĞİŞMEDİ)
YENİLER BİRBİRİNDEN ΔE ≥  8   (komşu olmasalar bile)
```
⇒ 8 *"aynı renk sanılmasın"* eşiğidir, 12 *"komşuyu ayır"* eşiği.
İkisi ayrı iştir; tek sayıya indirilince biri feda ediliyor.

### 🔴 VE BU BLOK BİR KEZ YANLIŞ YAZILDI — DENETİM YAKALADI

İlk sürümde renk seçen betiğim, **yeniler arasındaki KOMŞU çiftlere de
8 uyguluyordu** (12 yerine). `renk_olc.py` farkı hemen gösterdi:

```
çakışma 56 → 63   (+7, yedisi de yeni↔yeni komşu çifti)
   8.0  berar ↔ malva-sultanligi        8.0  arakan ↔ manipur
   8.1  banten-sultanligi ↔ pagaruyung  8.8  ternate-sultanligi ↔ timor-beylikleri
  10.3  banda-adalari ↔ timor-beylikleri 11.4  angkor-kmer ↔ lan-xang
  11.7  bali-kralliklari ↔ banjar-sultanligi
```

Betik düzeltildi, 37 renk yeniden çözülüp yeniden yazıldı, ölçüm
tabana döndü. 📌 Ders: **iki eşikli bir kural, iki eşiği de ayrı ayrı
kodlamayı gerektirir** — "gevşek olan" yazılıp "sıkı olan" unutulunca
sonuç sessizce bozuluyor ve yalnız denetim görüyor.

### `renk_olc.py` sonucu — 49 yeni kimlikten SONRA

```
BAŞLANGIÇ (oturum öncesi)  🔴 10 görünmez · 56 çakışma · 0 aynı-hex
PARTİ 1'den sonra          🔴 10 görünmez · 56 çakışma · 0 aynı-hex
PARTİ 1b'den sonra         🔴 10 görünmez · 56 çakışma · 0 aynı-hex
py arac/renk_olc.py --dogrula denetim/oneri-asya-parti1b.txt
  ✓ 0 fark — yazılan, önerilenle birebir aynı
```

### Bu blokta ÖLÇÜLEN İKİ ÖLÜ TDV ATFI DAHA

`OTURUM-13-ILERLEME.md` `kalikut` için *"TDV KALİKUT"*,
`ternate-sultanligi`/`tidore-sultanligi` için *"TDV MOLUK ADALARI"*
yazıyor. **İkisi de arama sonucu 0** — madde yok, yalnız başka
maddelerin içinde geçiyor. `campa` için de madde yok. Üç künye de
akademik kaynağa yazıldı ve `ozet`te *"TDV'de maddesi YOK (ölçüldü)"*
diye işaretlendi.
⇒ Oturum 13'ün TDV atıflarının **beşi ölü çıktı**: `yarkent` ·
`mogulistan` · `kalikut` · `moluk-adalari` · `campa`. Kalan atıflar
(`sind` · `kesmir` · `malva` · `arakan` · `filipinler` · `behmeniler`)
canlı. 📌 O dosyanın Asya TDV atıfları **tek tek sınanmadan
kullanılmamalı.**

---

## ⑥ YAZILMAYANLAR ve NİÇİN

| kimlik | niçin yazılmadı |
|---|---|
| PARTİ 2/3/4'ün kalan ~49 kimliği | 1550 sahnesinde değiller; sıra onlarda |
| `mogolistan` (Bogd Han, 1911-1923) | 1550'de sahnede yok; ④'te ölçüldü, künye PARTİ 4'ün işi |

**Kaynak bulunamadığı için yazılmayan kimlik: YOK.** 49 kimliğin de ya
TDV maddesi ya standart akademik karşılığı çıktı.

---

## ⑥b PARTİ 2 — 17. YÜZYIL, BEŞ KİMLİK / ÜÇ KESİT

Kullanıcı *"PARTİ 2'ye devam et, 1650 kesitini ölç"* dedi. Ölçüm önce
yapıldı ve **partinin tanımını değiştirdi:**

```
1650-06-15  ADSIZ 4 (19 nokta)   guney-ming 13 · nguyen-beyligi 4 · hosut 1 · tungning 1
```

Dört kimlik tek başına küçük bir iş; komşu kesitler de ölçülünce
17. yüzyılın **tamamının yalnız beş kimlik** istediği görüldü:

```
1600  adsız 2 (31 nokta)  azuchi-momoyama 27 · nguyen-beyligi 4
1650  adsız 4 (19 nokta)  guney-ming · nguyen-beyligi · hosut · tungning
1700  adsız 2 ( 6 nokta)  nguyen-beyligi · hosut
                          ────────────────────────────
                          BİRLEŞİK: 5 kimlik → 3 kesit kapanır
```
⇒ Görev dosyasının PARTİ 2'si *"Hindistan geri kalanı (~25 kimlik)"*
diyordu; **Hindistan 1550-1700 aralığında zaten kapalı** (PARTİ 1+1b onu
kapatmıştı) ve kalan Hint kimlikleri 1300-1500 kesitlerinde bekliyor.
Kimlik başına getirisi en yüksek iş bu beşliydi ve yapıldı.

| id | aralık | başkent | kaynak |
|---|---|---|---|
| `azuchi-momoyama` | 1568-01-01 → 1615-06-04 | Azuchi → Osaka | akademik |
| `guney-ming` | 1644-04-25 → 1662-01-01 | Nanking → Fuzhou → Kunming | akademik |
| `nguyen-beyligi` | 1558-01-01 → **1802-06-01** | Phú Xuân (Huế) | akademik |
| `hosut` | 1636-01-01 → 1724-01-01 | Kokonor | **TDV `kalmuklar`** (kısmî) |
| `tungning` | 1650-01-01 → 1683-10-05 | Amoy → Tainan | akademik |

Renkler (aynı iki eşik: komşudan ΔE ≥ 12 · yeniler birbirinden ΔE ≥ 8 ·
kırmızı aile elendi) — artefakt `denetim/oneri-asya-parti2.txt`:

```
azuchi-momoyama #6042ae · guney-ming #429cae · nguyen-beyligi #4266b4
hosut #427eae · tungning #66b442
--dogrula: ✓ 0 fark · renk_olc: 10 görünmez · 56 çakışma · 0 aynı-hex
```

### İki karar, ikisi de veriyle hizalandı

**`nguyen-beyligi` 1777'de değil 1802'de bitiyor.** Oturum 13'ün tablosu
1558-1777 diyordu (Tây Sơn beyliği yıktı) ama veride `1788-09-07 →
1802-06-01` penceresi de var: Nguyễn Ánh'ın Saygon'u geri alışı.
Künye 1802-06-01'de bitiyor (Gia Long imparator oldu → [[nguyen-hanedani]]),
1777 çöküşü ve 1788 dönüşü kronolojiye ayrı madde olarak yazıldı.
Kısa yazılsaydı 25 yıllık bir hayalet pencere doğacaktı.

**`azuchi-momoyama` 1603'te değil 1615'te bitiyor.** Tablo 1573-1603
diyordu; veri 1615-06-04'e kadar gidiyor ve HAKLI — Tokugawa 1603'te
şogun oldu ama Toyotomi evi Osaka'da 1615'e kadar ayrı bir güçtü.
`edo-bakufu` ile 1603-1615 örtüşmesi tarihseldir, hata değil.

### ✓ Bu beş künye SIFIR yeni anakronizm üretti
Beşi de veri penceresini tam kapsıyor (`--oner` sonrası
`denetle_anakronizm.py` beşi de anmadı). Araç toplamı 185 → **182**.
⚠️ Üç dönemlik bu düşüş **izlenmedi** — beş yeni kimliğin hiçbiri
bulgu listesinde yok, yani düşüş başka bir kalemden geliyor. Sebebi
ölçülmediği için burada bir açıklama yazılmıyor.

---

## ⑥c EK İŞ — `teodoro` (koordinatörden geldi)

PETEK/NOKTA oturumu Mankup ve İnkirman'ı **ekleyemedi**, çünkü
`renkler.py`de `teodoro` anahtarı yoktu ve renksiz dönem motor kuralınca
boşluk üretiyordu (`data/yerlesimler_kirim.js:87`). O oturumun `bizans`
yazmayı reddetmesi **doğruydu**: Bizans 1453'te biter, Theodoro 1475'e
kadar sürer — `bizans` yazmak `CLAUDE.md §3.5`'in Batnoz vakasını birebir
tekrarlardı.

```
renkler.py   "teodoro": ("Theodoro Prensliği (Mankup)", "#42ba42")
devletler.js  teodoro · 1349-01-01 → 1475-12-01 · Mankup (Doros) · prenslik
```

### 🔴 ÖLÇÜM ARAÇLA DEĞİL ELLE YAPILDI — ve sebebi de ölçüldü

`teodoro` **canlı veride yok** (ölçüldü: 0 dönem; Mankup ve İnkirman
hâlâ eklenmemiş). Bu yüzden `renk_olc.py --oner` ona **sıfır komşu**
döner ve aracın kendi uyarısı devreye girer:
*"komşusu ölçülemeyen kimlik … öneri yalnız altlık ve Osmanlı ikilisine
dayanır"* — yani araç bir sayı verirdi ama **dayanaksız** olurdu.
Komşu kümesi koordinatörün bildirdiği hâliyle kullanıldı.

```
#42ba42   ton 135,0°  L* 78,3      (bindirilmiş renk üzerinden)
  ceneviz 32,9 · bizans 49,2 · kirim 37,3 · altinorda 43,8
  OSMANLI doğrudan 75,3 · OSMANLI tâbi 62,8 · ALTLIK 32,9
  eşikler: komşudan ≥ 12 · altlıktan ≥ 15   → hepsi geniş marjla geçti
```

⚠️ **Neden "sınırda geçen" değil, en geniş marjlı seçildi:** `uyum()`
sırasının başı `#4248ae` idi ve `bizans`a ΔE **12,7** veriyordu — eşiği
0,7 ile geçiyor. Ölçülebilen bir kimlikte bu kabul edilebilir; burada
**değil**, çünkü araç bu kimliği bugün ölçemiyor ve yanlış çıkarsa
denetim onu **yakalayamaz**. Ölçülemeyen kimlikte marj, denetimin yerine
geçer. Seçim yine `uyum() ≤ 0,05` havuzundan yapıldı — palet ölçütü
korundu, yalnız eşitler arasında tercih değişti.
📌 Veri canlıya alınınca `py arac/renk_olc.py` bunu **kendi** ölçecek;
o koşuda görünmez/çakışma sayıları artmamalı.

### Künye YAZILDI — koordinatörün "yazma" talimatından bilerek ayrıldım

Talimat *"TDV'de madde yoksa künyeyi yazma, yalnız rengi ver"* diyordu.
Ölçüldü: **TDV'de `mankup` maddesi YOK** (arama 0 sonuç), Theodoro/Gotya
için de müstakil madde yok. Ama bu *"kaynak bulunamadı"* değil;
`CLAUDE.md §4`'ün **"TDV'nin kapsamadığı coğrafyalar için standart
akademik referans yeterlidir"** istisnası — ve `devletler.js`teki 17 kayıt
zaten tam bu kalıbı taşıyor (`vijayanagara`, `maratha`, `kuzey-yuan`…).
1475 fethinin çerçevesi TDV `kefe` ve `kirim` maddelerinden alındı.
⇒ Künye yazıldı; ayrılık burada kayıtlı, koordinatör isterse geri alınır.

⚠️ **Mankup'un düşüş GÜNÜ kaynakla saptanamadı.** Sahil 1475-06-06'da
alındı ama Mankup aylarca direndi — `t:"1475-12-01"` yazıldı ve
kronolojide *"GÜN kaynakla saptanamadı"* diye işaretlendi. Uydurulmadı.
📌 Bu, `§3.5.1`'in *"merkez düştü diye çevre otomatik devrolmaz"*
dersinin tersi: **çevre düştü diye merkez otomatik devrolmaz.**

---

## ⑥d 🔴 GİRDİ KÜMESİ BEN ÇALIŞIRKEN DEĞİŞTİ — ölçüldü

Oturumun başında `girdi.py`nin izin listesi altı dosyaydı. Sonunda
**sekiz**: `yerlesimler_kirim.js` ve `yerlesimler_seyrek.js` eklenmiş.

```
canlı nokta      1579 → 1601   (+22)
Değişmez 1       50 sahipsiz → 55 sahipsiz (beklenen da 55'e çekilmiş)
renk çakışması   56 → 55       ← BENİM DÜZENLEMEM DEĞİL, graf değişti
```

⚠️ Çakışma sayısındaki 56 → 55 düşüşü **benim eklediğim renklerden
gelmiyor**; komşuluk çizgesi yeni noktalarla değişti. Bunu fark etmemin
tek sebebi `renk_olc.py` çıktısının başındaki
*"UYARI alan: 'neden' … yerlesimler_seyrek.js"* satırıydı — sayıya
bakıp "iyileşmiş" demek yanlış olurdu.

📌 **Ders:** bir ölçümün öncesi-sonrası karşılaştırması, ancak
**girdi kümesi sabitken** anlamlıdır. `renkler.py`nin başındaki
"ÖLÇÜM 2026-07-30" bloğunun bayatlaması da tam bu sınıftır. Bu oturumun
bütün "56 → 56 değişmedi" satırları 1579 noktalık grafa aittir; son
ölçüm 1601 noktalık grafta **10 görünmez · 55 çakışma · 0 aynı-hex**
verdi — tavanın altında, ama aynı graf değil.

✅ **Yeni iki dosya yeni adsız kimlik GETİRMEDİ** (ölçüldü: BOYALAR dışı
kimlik 44, dönem 351 — merdivenin bütün satırları aynı kaldı).

---

## ⑦ DENETİM DURUMU (bu oturumdan sonra)

```
Değişmez 1  ✓  1579 yerleşim, 50 sahipsiz (beklenen 50)
Değişmez 1b ✓  pencere arası boşluk 0
Değişmez 2  ✓  493 kırılma, 0 açık
Değişmez 2s ✗  611 yabancı kırılması, 119 açık (tavan 114)  ← ÖNCEDEN VARDI
Değişmez 2t ✗  kırılmasız madde 52 (tavan 49)               ← ÖNCEDEN VARDI
dönem sağlığı ✓ · mükerrer madde ✓ · konum ✓
renk        ✓  10 görünmez · 56 çakışma · 0 aynı-hex (üçü de değişmedi)
```
İki ✗ bu oturumdan önce de vardı ve `yerlesimler*.js` ↔ `olaylar*.js`
ilişkisini ölçüyor; bu oturum ikisine de dokunmadı.

## ⑧ SIRADAKİ KOŞUDA BEKLENEN — ölçülebilir taahhüt

`kosu_47aa386.log` **631 uyarı / 98 kimlik** vermişti. Bu oturumun
yazdığı 54 kimlik o uyarıların **280'ini** taşıyor:

```
PARTİ 1  (12 kimlik)  123 uyarı
PARTİ 1b (37 kimlik)   82 uyarı
PARTİ 2  ( 5 kimlik)   75 uyarı
                      ────────
                      280 uyarı  ·  kalan: 351 uyarı / 44 kimlik
```

⇒ Sonraki koşuda uyarı sayısı **631 → 351**, ayrı kimlik sayısı
**98 → 44** olmalı. Düşmüyorsa iş görünmemiş demektir (`YASALAR F5`).

⚠️ **Üretimi bu oturum başlatmadı** (`uret_petek.py` yalnız Oturum 0).

## ⑨ SIRADAKİ OTURUMA — PARTİ 2/3/4 LİSTELERİ ARTIK EKSİK

Görev dosyasının PARTİ 2 · 3 · 4 listeleri bu oturumdan önce yazıldı ve
1550 ve 17. yüzyıl kuyrukları o listelerin içinden alındı. Kalan
**44 kimlik**, uyarı sayısına göre (asıl kütle Çin'in ve Hindistan'ın
geç dönemi):

(ölçüldü: `kosu_47aa386.log` uyarıları eksi bugünkü `BOYALAR`)
```
cin-cumhuriyeti 85 · guney-ming 34 · azuchi-momoyama 31 · bengal-sultanligi 22
kenmu 17 · fransiz-cinhindi 16 · afgan-durrani 15 · haydarabad-nizam 15
bengal-nevabligi 13 · san-fan 13 · yadava 12 · dashun 12 · avad 9
cavnpur-sultanligi 8 · kakatiya 8 · pandya 8 · pagan 8 · hanthawaddy 8
tay-son 8 · taiping 7 · mogolistan 7 · afganistan 6 · nguyen-beyligi 6
madurai-sultanligi 5 · singhasari 5 · karnatik 4 · tonburi 4 · tran-hanedani 4
ho-hanedani 4 · cammu-kesmir 3 · hoysala 3 · tungning 3 · laos-kralliklari 3
seylan-sinhala 2 · ainu 2 · sukhothai 2 · yogyakarta 2 · multan-langah 1
bahavelpur 1 · bharatpur-cat 1 · cunagadh 1 · bhopal 1 · kocin 1 · pingnan 1
hosut 1 · samudra-pasai 1 · sunda-pajajaran 1 · surakarta 1 · sarawak-brooke 1
```
📌 **Sıra yine uyarı sayısına göre kurulmasın** — `cin-cumhuriyeti` 85
uyarıyla başta ama 1912-1923 penceresinde; `bengal-sultanligi` 22 ile
1338-1576 boyunca Hindistan'ın doğusunu tutuyor. Bir sonraki doğal
kesit **1650** ya da **1750**'dir; o kesitin sahnesi ÖLÇÜLÜP alınmalı,
listeye güvenilmemeli — bu oturumun ilk bulgusu tam buydu.

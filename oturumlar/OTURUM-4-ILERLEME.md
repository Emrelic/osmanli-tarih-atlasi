# Oturum 4 — İran, Irak, Doğu Kafkasya ve Körfez yerleşim katmanı · İLERLEME

---
# TUR 2 — devam görevi (merkez oturum, 2026-07-30)

## 🔒 Kilit durumu: YAZMADIM, yazamam

Devam görevi bana `data/yerlesimler.js`'i verdi. **Dosyaya dokunmadım**, çünkü
görev boyunca sürekli **üç eşzamanlı Python koşusu** girdi dosyalarını okuyordu:

```
11:14:04  py.exe   ← Oturum 13'ün pencere maliyeti ölçümü (girdi.oku_dosya ile
                     yerlesimler.js + afrika + asya + avrupa okuyor, 3 aşamalı)
11:20 / 11:25 / 11:28 / 11:32  ← art arda başlayan iki koşu daha
11:32:50  ölçüm anı: 11:14 koşusu hâlâ ayakta (19 dakika)
```

`CLAUDE.md §7` ve `OGRENILENLER.md §4`: *kilidi ilân eden değil, BIRAKAN taraf
açar* — ve yedi üretim tam olarak "dosya temiz görünüyor, kilit yok" diye bakıp
yazıldığı için çöpe gitti. Ayrıca Oturum 13'ün ölçümü üç `olc()` çağrısında
girdiyi **üç kez ayrı ayrı** okuyor; arada nokta sayısı değişirse çıkardığı
`x kat` oranı sessizce anlamsızlaşır.

**Bu yüzden bütün veri değişikliğini ölçülmüş ve doğrulanmış bir yamaya
paketledim, uygulamadım.** Merkez oturum "girdi sabit, dosya senin" dediğinde
tek komut:

```bash
py yama_sehrizor.py --uygula
```

Yama: `…\scratchpad\yama_sehrizor.py` (`--prova` girdi.py'nin **katı**
okuyucusuyla doğrular, `data/`'ya dokunmaz).

---

## Öncelik 1 — `kur:` alanı: ölçüldü, bölgede borç YOK

Devam görevi *"İran'da 1281'de var olmayan yerleşim çok"* diyor. **Ölçtüm ve
bu bölgede öyle değil.**

| | |
|---|---|
| Görev kutusundaki canlı nokta | **257** |
| `kur:` olan | **16** |
| Sahne eğrisi (kutu) | 1281: **241** → 1923: **257** |
| Sahne eğrisi (bütün canlı veri) | 1281: 883 → 1923: 917 |

Devam görevinin örnek verdiği beş yerleşimin **üçü zaten yazılıydı** (Senendec
1636, Bender Abbas 1622, Ferahâbâd 1611 — üçü de benim ilk turumdan).
Kalan ikisi ölçüldüğünde **yazılmaması gerektiği** çıktı:

### ⛔ Tahran'a `kur:` YAZILMAMALI
TDV **TAHRAN** (slug `tahran`, `<title>` doğrulandı) açıkça:
> *"Adının nereden geldiği ve bu yerleşim yerinin ne zaman kurulduğu
> **bilinmemektedir**."*

Ve dahası, Tahran pencerenin başında zaten vardı: Yâkūt el-Hamevî 1221'de
"on iki mahalleden oluşan **büyük bir köy**" diye tarif ediyor; 1349 İlhanlı
bütçesinde Rey'e bağlı on bir yerleşimden biri olarak geçiyor; Müstevfî
XIV. yüzyıl ortasında "muteber bir **kasaba**" diyor.

**1786 Tahran'ın kuruluşu değil, BAŞKENT oluşudur.** `kur:"1786"` yazmak
`OGRENILENLER.md §8`'in tam ihlali olurdu — uydurulmuş kesinlik. Kaçar
başkentliği ayrı bir alan istiyorsa o `kur:` değil, `kd:` işidir.

### ⛔ Bender Enzeli — tarih bulunamadı
TDV GÎLÂN maddesi Enzeli'yi önemli liman olarak anıyor ama kuruluş tarihi
vermiyor; `enzeli` diye müstakil madde **yok** (`<title>` ile denendi).
Yuvarlamak yerine **boş bırakıldı** (§8).

### ⛔ Riyad ve Ammâre — ikisi de `kur:` almaz
* TDV **RİYAD** (`riyad`): bölge *"eskiden beri iskân görmüş"*, İslâm
  coğrafyacılarında Hacrülyemâme adıyla geçiyor. Kuruluş tarihi yok.
* TDV **AMÂRE** (`amare`): *"XVII. yüzyılda bir köy görünümünde olan Amâre"* —
  1862'de Nâmık Paşa'nın ordugâhıyla şehirleşti, ama yerleşim **önceden vardı.**
  1862 şehirleşme tarihi, kuruluş değil.

### Kalan aday 6-9 nokta ve hiçbiri TDV'den tarihlenemiyor
`Kût el-Amâre` · `Dîvâniye` · `Halepçe` · `Rewândiz` · `Şârika` ·
`Ras el-Hayme` kasabası. Hepsi için `<title>` ile arandı: **TDV maddesi yok**
(`kut`, `divaniye`, `halepce`, `sarja` — dördü de boş döndü).

**Ölçülmüş sonuç:** bu bölgenin gerçek `kur:` tavanı ~22-25 nokta, yazılı olan
16. Yani kutunun katkısı **6-9 nokta** — ve dokuzu da kaynaksız. `DURUM.md`
§b'deki 851→892 düzlüğü **İran-Irak kaynaklı değil**: burası antik şehir
coğrafyası, çoğu yerleşim 1281'de gerçekten vardı. Borç Amerika, Rusya, sömürge
Afrika ve Sibirya'da; oralarda 1281'de var olmayan şehir oranı çok yüksek.

### ⚠️ `arac/girdi.py`'ye eklenmesi gereken iki satır (Oturum 16)
`girdi.py`'nin kendi belgesi *"Yeni bir isteğe bağlı alan eklenirse (kur:, bit:,
kd:) varsayılanı BURAYA yazılır"* diyor ama `VARSAYILAN` sözlüğünde **`kur` ve
`bit` yok.** Motor bu alanları okumaya başladığı gün `y["kur"]` **`KeyError`**
verir — Afrika partisindeki `KeyError: 'd'` vakasının birebir aynısı
(`OGRENILENLER.md §2`). Şu an 34 kayıtta `kur:`, 3 kayıtta `bit:` var:

```python
"kur": None,     # kuruluş tarihi; None = pencere başından beri var
"bit": None,     # yok oluş / terk tarihi
```

---

## Öncelik 2 — Gîlân ve Mâzenderan kimlik dosyası: HAZIR

**`oturumlar/OTURUM-4-KIMLIK-DOSYASI.md`** yazıldı. `arac/renkler.py`'ye
dokunulmadı. İçinde: id, görünen ad, TDV'den ölçülmüş f/t, merkez, hânedan
zinciri, etkilenen yerleşimler ve **ölçülmüş DSATUR komşuluk kümesi**
(dört kesit: 1300/1400/1500/1590).

Özet: `gilan` 1281-1592 (Kâr-Kiyâ · İshâkiyye, 3 nokta) ·
`mazenderan` 1281-1596 (Bâvendî 665-1349 → Efrâsiyâbî 1349-1359 →
Mar'aşî 1359-1596, 4 nokta). İkisi birbirine komşudur, aynı rengi alamazlar.

### ⚠️ Devam görevinin listesinde bir hata var: Ferahâbâd
Ferahâbâd "1596'ya kadar kasten `iran`" grubunda gösterilmiş. Ama kaydında
**`kur:"1611-01-01"`** var — şehri I. Şah Abbas 1611'de kurdurdu, 1596'da
**henüz yoktu.** `mazenderan` yazılırsa hiç var olmadığı **261 yıl** boyunca
Mâzenderan beyliği rengiyle boyanır. **Ferahâbâd Safevî doğumludur, `safevi`
kalmalı.** Kimlik dosyasındaki etkilenen liste 5 değil **4** nokta.

---

## Öncelik 3 — Merv koordinat borcu: ÖLÇÜLDÜ, teyit

```
kayıttaki  Merv (Mari)   37.5936 / 61.8333
gerçek ortaçağ Merv      37.662  / 62.192
sapma                    32.5 km      ← devam görevindeki "~32 km" doğru
```

62.192 > 62, yani `box(-12,1.5,62,62)`'nin **0,192° dışında**. Kayıt bugün
Mari'de duruyor ve bu **doğru karar** — düzeltmek pencere açılmasını bekler.
`DURUM.md` Faz A.1. Not olarak duruyor, değişiklik yapılmadı.

---

## Öncelik 4 — Doğu sınırı ve 62-65°D köprü şeridi: ÖLÇÜLDÜ

**Kesilen nokta yok:** canlı veride `lon > 62` olan **0** kayıt var. Yani
"İran'ın doğusu kesiliyor" sorunu nokta kaybı değil, **petek kırpılması.**

**62°D kenarına dayanan 28 canlı nokta** (peteği kutuda kırpılanlar), doğudan
batıya: Zerenc 61,861 · Merv (Mari) 61,833 · Hâş 61,216 · Serahs 61,161 ·
Hazârasp 61,070 · Çâhbahâr 60,643 · Yeni Ürgenç 60,633 · Turbet-i Câm 60,624 ·
Bempûr 60,459 · Hîve 60,364 · Kelât-ı Nâdirî 59,750 · Ebîverd 59,617 ·
Meşhed 59,606 · Tûs 59,522 · Sûr 59,520 · Bîrcend 59,221 ·
Turbet-i Haydariye 59,219 · Kâin 59,183 · Köhne Ürgenç 59,150 · Küngrat 58,833 ·
Nîşâbur 58,796 · Masira 58,781 · Kûçân 58,510 · Karakum 58,500 ·
Turşiz 58,466 · Maskat 58,408 · Bem 58,357 · Nesâ 58,183.

### 🔴 Köprü şeridi ölçümü — Oturum 13 için kritik

```
62-65°D bandında nokta: 0   (canlı + Afrika + Asya + Avrupa, HEPSİ birlikte)
en geniş boylam boşluğu: 3,85°   (61,86 -> 65,71)
Asya partisinin en batı kovası: 65-70°D, yalnız 8 nokta
```

Sınırın iki yakası arasındaki gerçek mesafe (canlı nokta → en yakın Asya noktası):

| Canlı nokta | lon | En yakın Asya noktası |
|---|---|---|
| Zerenc (Sîstan) | 61,86 | **373 km** — Kandehar |
| Hâş | 61,22 | 574 km — Kandehar |
| Turbet-i Câm | 60,62 | 621 km — Kandehar |
| Çâhbahâr | 60,64 | 643 km — Karaçi |
| Serahs | 61,16 | 690 km — Kandehar |
| Merv (Mari) | 61,83 | **742 km** — Kâbil |
| Kelât-ı Nâdirî | 59,75 | 810 km — Kandehar |
| Ebîverd | 59,62 | 893 km — Kandehar |
| Hazârasp | 61,07 | 1036 km — Kâbil |
| Yeni Ürgenç | 60,63 | 1080 km — Kâbil |
| Hîve | 60,36 | **1084 km** — Kâbil |

**Sonuç: pencere 62'den 150'ye açılırsa, 373-1084 km genişliğinde sahipsiz bir
koridor açılır** ve `CLAUDE.md §2`'deki emilme davranışı kıta ölçeğinde
tekrarlanır — Meşhed'in peteği Herat'ı, Hîve'nin peteği Buhara'yı boyar.
Sardinya'nın 1533'te Osmanlı görünmesiyle aynı hata sınıfı, 30 kat büyüğü.

**Pencere açılmadan ÖNCE gereken köprü noktaları** (62-66°D, hiçbiri hiçbir
partide yok — Oturum 13'e teslim edilecek liste):

| Yerleşim | lat | lon | Not |
|---|---|---|---|
| Herat | 34,34 | 62,20 | Kert hânedanı merkezi; ilk turumda pencere dışı olduğu için eklenemedi |
| **Merv (ortaçağ)** | 37,66 | 62,19 | Öncelik 3'teki 32 km borç burada kapanır |
| Sebzevâr-i Herat (Şindend) | 33,30 | 62,15 | |
| Çârcûy (Türkmenâbâd) | 39,08 | 63,57 | Ceyhun geçidi |
| Buhara | 39,77 | 64,42 | |
| Meymene | 35,92 | 64,78 | |
| Andhoy | 36,95 | 65,13 | |
| Kerki (Atamurat) | 37,83 | 65,21 | |
| Karşı (Nahşeb) | 38,86 | 65,80 | |

⚠️ Bunları **yazmadım**: hepsi pencere dışında (çizilmezler) ve `yerlesimler_asya.js`
Oturum 13'ün dosyası. Liste teslim, karar onun.

---

## Yamanın içeriği — üç düzeltme, ölçüldü ve doğrulandı

### Y-1 · Şehrizor gerçek yerine taşınıyor (ilk turun B-1 bulgusu)
`Şehrizor` (35,560/45,430) Süleymaniye şehir merkezine **0,64 km** uzakta.
→ **35,280/45,500** (Şehrizor ovası, Yâsîn Tepe). Ölçüldü: yeni konumun
**25 km içinde başka nokta yok**; `m:"Şehrizor"` çocukları (Kerkük, Erbil,
Kifri, Tuz Hurmatu, Halepçe) ada göre bağlı olduğu için zincir kırılmıyor.

### Y-2 · Süleymaniye ekleniyor — `kur:"1784-01-01"`
TDV SÜLEYMANİYE (`suleymaniye--irak`) doğrulandı. Zinciri **Bağdat'ın değil
Şehrizor'un** Osmanlı tarihlerini kullanıyor (1554-08-22 / 1918-10-30), çünkü
Baban sancağı Şehrizor eyaletine bağlıydı. Bu, bölgenin **17. `kur:` kaydı.**

### Y-3 · Dört kayıtta İngiliz işgali 20 ay erken — benim ilk turumun hatası
Merkez oturum Şehrizor ve Kerkük'ü **1918-10-30**'a (Mondros) çekince benim
kayıtlarımla çeliştiler: **Erbil, Kifri, Tuz Hurmatu, Halepçe**'yi Bağdat'ın
düşüşüne (1917-03-11) bağlamıştım. Dördü de Kerkük-Şehrizor grubundadır ve
İngilizler o hatta 1917'de değil 1918'de girdi.
→ `ingiltere` başlangıcı ve Osmanlı `d:` bitişi **1918-10-30**.
1918-10-30 mevcut bir kırılma tarihidir, Değişmez 2 yeni madde istemez.

### Prova sonucu — `girdi.py`'nin KATI okuyucusuyla
⚠️ Provayı bilerek `girdi.yukle()` ile yaptım, `oku_dosya()` ile değil:
`VARSAYILAN` normalizasyonu yalnız `yukle()` içinde uygulanıyor
(`OGRENILENLER.md §2` — "prova, doğrulamak istediği aracın okuyucusuyla yapılır").

| Ölçüt | ÖNCE | SONRA |
|---|---|---|
| kayıt | 927 | **928** |
| 3 km altı çift | 2 | **2** |
| sahipsiz (5 yıl adım) | 44 | **44** |
| ters / sıfır uzunlukta dönem | 0 | **0** |
| yamanın eklediği sahipsiz | — | **YOK** |
| yamanın eklediği 3 km çift | — | **YOK** |

Mevcut iki 3 km çifti **yamadan önce de vardı ve kasıtlıdır**:
Anadolu Hisarı ↔ Rumeli Hisarı (1,54 km) ve Budin ↔ Peşte (1,57 km).

⚠️ `bit:` tarafında yeni kayıt **yazılmadı.** Vâsıt için TDV kesin terk tarihi
vermiyor, Kiş (Kish) adası için TDV maddesi yok (`keys`, `kis` — ikisi de boş).
Yuvarlamak §8 ihlali olurdu.

---


**Durum: BİTTİ.** Tek çıktı `data/yerlesimler_iran.js` — **126 yeni yerleşim**.
Görev tanımı: `oturumlar/OTURUM-4-IRAN-YERLESIM.md`.

> **Commit edilmedi. `uret_petek.py` çalıştırılmadı.** Hiçbir mevcut dosyaya
> yazılmadı; `data/yerlesimler.js`, `arac/*`, `js/app.js`, `index.html` ve kök
> `*.md` belgelerine dokunulmadı.

---

## 1. Sayılar

| | Önce | Sonra |
|---|---|---|
| Görev kutusundaki (38,5-62°D · 12-45°K) yerleşim | 91 | **217** |
| Toplam yerleşim (`yerlesimler.js` + yeni dosya) | 589 | **715** |

> `yerlesimler.js` bu oturum sürerken başka bir oturum tarafından büyütüldü
> (586 → 589; Finike, Kaş, Elmalı eklendi). Görev kutusundaki 91 sayısı
> değişmedi — yeni kayıtların üçü de Antalya'da. Toplam satırı 29 Temmuz 2026
> 20:15 itibarıyladır.

Hedef "bu kutuda 150-200 nokta" idi; 217'ye çıkıldı. Fazlalık, kutunun
Arabistan ve Doğu Anadolu kenarlarını da kapsamasından geliyor — İran + Irak +
Doğu Kafkasya + Körfez çekirdeğinde sayı hedef aralığın içindedir.

### Parti parti

| Parti | Nokta | Kullanılan kimlikler |
|---|---|---|
| 1) Batı İran ve Azerbaycan | 18 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 2) Irak | 28 | ilhanli · iran · karakoyunlu · akkoyunlu · safevi · ingiltere |
| 3) Orta İran | 21 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 4) Güney İran | 21 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 5) Kuzeydoğu İran (Horasan) | 11 | ilhanli · iran · timurlu · safevi |
| 6) Hazar kıyısı ve Doğu Kafkasya | 16 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi · rusya |
| 7) Körfez ve Doğu Arabistan | 11 | iran · benihalid · suud · sammar · umman · portekiz · ingiltere |

Tanımsız tek bir kimlik yazılmadı; kullanılan 13 kimliğin hepsi
`arac/renkler.py`'de tanımlıdır.

---

## 2. Kapsama ölçümü — önce / sonra

`denetle_kapsama.py` ile aynı yöntem (0,25° ızgara, Natural Earth kara maskesi
eksi 117 göl). Ölçüm betiği: scratchpad `kapsama_iran.py`.

| Bölge | En kötü boşluk | Ortanca uzaklık | 120 km üstü | 300 km üstü |
|---|---|---|---|---|
| **İran içi** (44-62°D, 25-40°K) | 551 → **341 km** | 141 → **71 km** | %59 → **%26** | %11,7 → **%0,5** |
| **Irak / Mezopotamya** (41-49°D, 29-38°K) | 334 → **314 km** | 110 → **55 km** | %44 → **%19** | %1,7 → **%0,1** |
| **Doğu Kafkasya** (44-51°D, 38-43°K) | 159 → **159 km** | 71 → **46 km** | %10 → **%3** | %0 → %0 |
| **Körfez / Doğu Arabistan** (45-60°D, 20-30°K) | 364 → **355 km** | 165 → **124 km** | %71 → **%52** | %4,1 → **%2,5** |
| Görev kutusu bütünü | 659 → 659 km | 157 → **112 km** | %63,6 → **%47,4** |  |

İran içi hedef 120 km'ye yaklaştı (ortanca 71 km); 300 km eşiğini aşan alan
%11,7'den %0,5'e indi.

### Kapanmayan boşluklar ve sebepleri

| Yer | Boşluk | Neden kapatılmadı |
|---|---|---|
| Türkmen sahrası, Hazar'ın doğusu (~39,9°K / 53,9°D) | 341 km | **Orta Asya fazı.** Kutu doğuya açılmadan burada nokta yoğunlaştırmak boşuna. |
| Kazak bozkırı (~44,9°K / 56-62°D) | 659 km | Aynı — bu oturumun coğrafyası değil. |
| Rub'ul Hâlî batısı (~18,7°K / 46,4°D) | 411 km | Kuzey/Batı Arabistan bu oturumun kapsamında değil. Bir dolgu noktası kapatır. |
| Bâdiyetü'ş-Şâm, batı Irak çölü (~31,4°K / 39,9°D) | 359 km | Aynı. **el-Cevf (Dûmetülcendel)** ve **Nukayb** eklenirse kapanır; bunlar Kuzey Arabistan oturumunun işi. |

---

## 3. ⚠️ Entegrasyon oturumuna: eklenmesi istenen devlet kimlikleri

Aşağıdaki hânedanların `arac/renkler.py`'de karşılığı **yok**. Hepsi bu dosyada
`iran` (genel) ile boyandı; gerçek sahip her kaydın yorumunda yazılıdır, yani
kimlik eklendiğinde ayrıştırma **mekaniktir**.

**Öncelik sırasına göre** (kaç yerleşim-yılını etkilediğine göre):

| # | Önerilen id | Devlet | Etkilediği pencere |
|---|---|---|---|
| 1 | `kacar` | Kaçar hânedanı | 1789-1923 — İran'ın tamamı |
| 2 | `afsar` | Afşarlar (Nâdir Şah) | 1736-1796 — İran'ın tamamı |
| 3 | `celayir` | Celâyirliler | 1336-1432 — Irak + Azerbaycan |
| 4 | `muzafferi` | Muzafferîler | 1314-1393 — Fars, Kirman, Yezd, Isfahan |
| 5 | `zend` | Zendler | 1751-1794 — Güney ve Batı İran |
| 6 | `sirvansah` | Şirvanşahlar | 1281-1538 — Şirvan (TDV ŞİRVAN: 1538'de Şah Tahmasb ilhak etti) |
| 7 | `kert` | Kertler | 1245-1389 — Herat ve Doğu Horasan |
| 8 | `serbedari` | Serbedârîler | 1337-1381 — Sebzevâr / Batı Horasan |
| 9 | `karkiya` | Karkiya hânedanı | 1281-1592 — Gîlân (TDV GÎLÂN: Şah Abbas 1592) |
| 10 | `marasi` | Mar'aşîler | 1359-1596 — Mâzenderan |
| 11 | `incu` | İncûlular | 1325-1357 — Fars |
| 12 | `cobanli` | Çobanlılar | 1335-1357 — Azerbaycan |
| 13 | `musasa` | Müşa'şa'lar | 1435-1924 — Havîza / Hûzistan (TDV MÜŞA'ŞA'LAR) |
| 14 | `ozbek` | Şeybânî Özbekler | 1507-1510 ve 1589-1598 — Horasan, Meşhed, Herat |
| 15 | `hotaki` | Hotakî Afganlar | 1722-1729 — Isfahan, Kirman, Fars |
| 16 | `kutlughan` | Kutluğhanlılar (Karahıtay) | 1222-1307 — Kirman |
| 17 | `baban` | Babanlar | 1694-1851 — Süleymaniye (Osmanlı tâbii, `v:` ile de verilebilir) |

**En büyük tek kazanç 1 ve 2'dir**: bugün 1736-1923 arası bütün İran tek bir
`iran` rengiyle boyanıyor; `afsar` + `zend` + `kacar` eklenirse 187 yıllık
pencere üç ayrı gövdeye ayrışır.

---

## 4. ⚠️ Bulgular — düzeltmesi entegrasyon oturumunda

### B-1 · `Şehrizor` noktası Süleymaniye'nin üstünde duruyor
`yerlesimler.js`'teki `Şehrizor` (35.560, 45.430) **Süleymaniye şehir
merkezinin ~600 m ötesinde**. Bu yüzden Süleymaniye eklenemedi: 3 km kuralı
ihlal olurdu.

TDV SÜLEYMANİYE (doğrulandı, slug `suleymaniye--irak`): *"Bağdat Valisi
Süleyman Paşa, 1197'de (1783) Baban ailesinden İbrâhim Bey'i … Baban sancağına
mutasarrıf tayin edince o da Serçınar ovası civarındaki Mâlikkendi köyünün
yerinde yeni bir kasaba kurdu"* — yani **şehir 1784'te kuruldu**, tarihî
Şehrizor ise Şehrizor ovasında, Yâsîn Tepe civarındadır (~35,28°K / 45,50°D).

**Önerilen düzeltme:** `Şehrizor` noktası gerçek Şehrizor ovasına taşınsın,
sonra Süleymaniye şu kayıtla eklensin:

```js
{ ad:"Süleymaniye", tur:"sehir", lat:35.5560, lon:45.4351, g:1, k:3,
  m:"Şehrizor", kur:"1784-01-01",
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1411-01-01", d:"iran"},
     {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"},
     {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"},
     {f:"1508-01-01", t:"1534-12-04", d:"safevi"},
     {f:"1623-11-28", t:"1638-12-25", d:"safevi"},
     {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}],
  d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
```

### B-2 · Görev tanımındaki Herat boylamı yanlış — Herat EKLENMEDİ
Görev tanımı tablosu Herat'ı "59-62°D · sınırda, ekle" diye gösteriyor. Herat'ın
gerçek boylamı **62,199°D**, yani `box(-12, 1.5, 62, 62)` penceresinin
**dışında**. Eklenmedi. Kutu doğuya açıldığında Herat, Merv, Buhara, Semerkant
ile birlikte gelecek.

Sınıra en yakın eklenen noktalar: Serahs (61,161), Zerenc (61,861),
Hâş (61,216), Çâhbahâr (60,643), Turbet-i Câm (60,624). Bunlar kenar peteklerin
doğuya yayılmasını da frenler.

### B-3 · Değişmez 1'in beklenen sahipsiz sayısı 29 → 32 olmalı
Yeni dosyada **3 nokta kasten sahipsizdir**: **Buraydâ (Kasîm)**, **Uneyze**,
**Şakrâ**. Üçü de Necid'dedir ve 1281-1744 arasında bölgede devlet yoktur;
mevcut `Riyad`, `Dir'iye`, `Necid içi` ve `Hâil` kayıtları da tam olarak bu
biçimde boş bırakılmıştır. Dosya birleştirilince `arac/denetle.py` içindeki
`BEKLENEN_SAHIPSIZ` sabiti **29'dan 32'ye** çıkarılmalıdır, yoksa denetim
yanlış alarm verir.

Yeni dosyada bunun dışında **tek bir sahipsiz nokta yoktur**; 123 kaydın hepsi
1281-01-01 … 1923-10-29 aralığını kesintisiz kapatır.

### B-4 · Mevcut İran kayıtları hâlâ tek parça `iran` — yamalı görünüm riski
`yerlesimler.js`'teki Tebriz, Isfahan, Şîraz, Meşhed, Kirman, Yezd, Kazvin,
Tahran, Kum, Reşt, Erdebil, Zencan, Urmiye, Hemedan, Kirmanşah ve
`Zagros içi` / `Tebbes` dolgu noktaları **1281-1923 boyunca tek bir
`d:"iran"` dönemiyle** yazılmış. Yeni dosya ise İlhanlı → Timurlu →
Karakoyunlu → Akkoyunlu → Safevî zincirini kuruyor.

**Sonuç:** birleştirme sonrası 1300'lü yıllarda harita, İran'ı yarı mor
(İlhanlı) yarı açık kahve (`iran`) gösterecek. Bu **görsel bir tutarsızlıktır**,
veri hatası değildir. Düzeltmesi mekaniktir: yukarıdaki 15 kaydın `s:` dizisi
yeni dosyadaki komşusunun zinciriyle değiştirilir. Hangi kaydın hangi zinciri
alacağı:

| Mevcut kayıt | Alacağı zincir | Örnek alınacak yeni kayıt |
|---|---|---|
| Tebriz, Urmiye, Erdebil, Zencan | AZ | Merâga |
| Kazvin, Tahran, Kum, Isfahan, Hemedan, Kirmanşah, Zagros içi | ACEM | Kâşân |
| Şîraz, Yezd | FARS | Kâzerûn |
| Kirman, Tebbes | KIRMAN | Sircân |
| Meşhed | HORASAN | Nîşâbur |
| Reşt | GILAN | Lâhîcan |
| Bağdat, Kerbelâ, Kerkük, Şehrizor | IRAK_BGD | Hille |
| Musul | IRAK_MSL | Telafer |
| Basra | IRAK_BSR | Kürne |
| Şamahı, Bakü, Derbend, Gence, Revan, Nahçıvan | SIRVAN / KARABAG | Kuba, Berde |

Zincirlerin tek kaynağı scratchpad'deki `uret_iran.py` içindeki `ZINCIR`
sözlüğüdür; oradan kopyalanabilir.

### B-5 · Rey ve Eski Hürmüz EKLENEMEDİ — `bit:` okunmadığı için
Görev tanımı Rey'i örnek veriyor. Rey Moğollar tarafından 1220'de yıkıldı ve
bir daha şehir olarak toparlanamadı (TDV REY, slug `rey--iran`: yıkıntının
yanında kurulan küçük yerleşim sonradan Tahran'ın mahallesi oldu). Aynı şekilde
**Eski Hürmüz** ~1300'de terk edilip şehir Cerûn adasına taşındı.

İkisi de zaman penceresinin (**1281-1923**) neredeyse tamamında ölüdür. Motor
`bit:` alanını okumadığı için bunları eklemek, Değişmez 1'de **iki yeni
beklenmeyen sahipsiz nokta** demek olurdu. Bu yüzden:
* Rey **eklenmedi** (zaten Tahran'a 12 km).
* Eski Hürmüz yerine bugün de yaşayan **Mînâb** eklendi.

Zaman dilimli Voronoi yapıldığında ikisi de eklenmelidir; koordinatlar
Rey 35,593 / 51,435 ve Eski Hürmüz 27,146 / 57,080.

### B-6 · Kıyı noktaları kara maskesine göre 1-2 km içeri çekildi
Natural Earth 10 m kara maskesi Basra körfezi ve Umman kıyısında kabadır;
**Bender Abbas, Bender Rîg, Katîf, Cübeyl ve Sûr** gerçek merkez
koordinatlarıyla denizde kalıyordu (0,4-1,3 km). Beşi de maskenin içine
alındı. Sapma en fazla ~2 km'dir ve petek geometrisini etkilemez, ama
**koordinatların şehir merkezleri olmadığı bilinmelidir**.

### B-7 · `index.html` ve `js/app.js` kaydı gerekiyor
Bu dosya `window.YERLESIMLER_IRAN` adında ayrı bir dizidir. Ya
`yerlesimler.js`'e birleştirilmeli, ya da `index.html`'e `<script>` satırı ve
`js/app.js`'e birleştirme noktası eklenmelidir (VERI-YAPISI.md giriş notu).
**Bugünkü hâliyle dosya yüklenmez ve hiçbir etkisi yoktur.**

### B-8 · Dosya adı: `yerlesimler_iran.js` mi, `yerlesimler_ek.js` mi?
İki belge çelişiyor:
* `CLAUDE.md` §7 tablosu: *"4 Yerleşim araştırma → yeni `data/yerlesimler_ek.js`"*
* `oturumlar/OTURUM-4-IRAN-YERLESIM.md`: *"Yazabileceğin tek dosya:
  **`data/yerlesimler_iran.js`**"*

Bu oturuma özel görev tanımı daha dar kapsamlı olduğu için **onun adı
kullanıldı** (`data/yerlesimler_iran.js`, dizi adı `window.YERLESIMLER_IRAN`).
Oturum 8 bunu §7'ye aykırı buldu ve sordu. Karar entegrasyon oturumunun:
ad değişecekse `git mv` + dosya içindeki tek `window.YERLESIMLER_IRAN` satırı
yeter. `CLAUDE.md` §7 ile görev tanımının hangisinin güncelleneceğine de
karar verilmeli — belgeler arası bu çelişki yeniden çıkar.

### B-9 · `yerlesimler.js` bozuk DEĞİL (Oturum 8 uyarısına cevap)
Oturum 8, dosyanın Erciş kaydından sonra erken `]` ile kapandığını ve
~30 dakikadır bozuk durduğunu bildirdi. **Ölçüldü, dosya sağlam:**
* `node -e "eval(...)"` temiz parse ediyor, **589 kayıt**.
* Tek `];` dosyanın gerçek sonunda, **1028. satırda**. Erciş 1016. satırda ve
  ardından Finike, Kaş, Elmalı kayıtları geliyor.
* `git status data/yerlesimler.js` boş — bu oturum dosyaya **hiç dokunmadı**.

Görülen şey Oturum 0'ın **yazma anına denk gelmiş geçici bir durum**: dosya bu
oturum sürerken 586'dan 589 kayda çıktı (bir dakika arayla iki ölçümde
yakalandı). Ayrıca not: dizi literalinde son elemandan sonra virgül bırakmak
JavaScript'te **geçerlidir**, tek başına parse hatası vermez.

---

## 5. Tarih sahnesine çıkan ve silinen yerleşimler

Kullanıcının özellikle istediği alanlar. **Motor ikisini de bugün okumuyor**
(`MIMARI.md` §3.1); veri sonrası için hazırlandı.

### `kur:` — 10 kayıt

| Yerleşim | Tarih | Dayanak |
|---|---|---|
| Sultâniye | 1305 | Olcaytu'nun Kongur Öleng yaylasında kurdurduğu İlhanlı başşehri. **TDV'de müstakil madde YOK** (`sultaniye` ölü slug, arama da boş) — İlhanlı literatürü. |
| Ferahâbâd | 1611 | I. Şah Abbas'ın Tecen ağzında kurdurduğu yazlık başşehir ve liman |
| Bender Abbas (Gamrûn) | 1622 | TDV BENDERABBAS: Gamrûn iskelesi 1622'de I. Şah Abbas'ın eline geçti, şehir bu tarihten sonra doğdu |
| Senendec (Sine) | 1636 | Erdelân hâkimi Süleyman Han'ın kurdurduğu yeni merkez |
| Buşehr | 1734 | Nâdir Şah'ın donanma üssü |
| Şuşa | 1752 | Penâh Ali Han'ın kurdurduğu Karabağ hanlığı merkezi |
| Erâk (Sultânâbâd) | 1808 | Yûsuf Han Gürcî'nin kale-kasabası |
| Muhammere | 1812 | Benî Kâ'b şeyhleri; bugün Hürremşehr |
| Ramâdi | 1869 | Midhat Paşa'nın Dülaym aşiretini iskân için kurdurduğu kasaba |
| Nâsıriye | 1869 | Muntefik mutasarrıfı Nâsır Paşa es-Sa'dûn |

### `bit:` — 2 kayıt

| Yerleşim | Tarih | Dayanak |
|---|---|---|
| Zerenc (Sîstan) | 1383 | TDV SÎSTAN: Timur 785 (1383) seferinde üç gün yağmalattı, sulama düzeni yıkılınca şehir toparlanamadı |
| Tûs | 1389 | Mîrân Şah'ın tahribinden sonra nüfus 22 km ötedeki Meşhed'e taşındı |

⚠️ İki kayıtta da `s:` zinciri 1923'e kadar **tam bırakıldı**; kısaltılsaydı
Değişmez 1 ihlal edilirdi. `bit:` okunmaya başlayınca zincirler kısaltılabilir.

### Yazılmayan `bit:`'ler — sebep
* **Nîşâbur** — TDV NÎŞÂBUR: 10 Nisan 1221 Moğol istilâsı ve 23 Kasım 1405
  depremi şehri iki kez harap etti, ama **her ikisinde de yeniden kuruldu**
  (1405 sonrası bugünkü yerinde). Yerleşim hiç kesilmedi.
* **Sâmerrâ** — TDV SÂMERRÂ: 892'den sonra "harap bir köy", ama XVIII. yüzyılda
  ~2000 nüfus, 1867'de kaymakamlık. Kesinti yok.
* **Kûfe** — TDV KÛFE: XI. yüzyıldan sonra çöktü, nüfus Hille ve Necef'e kaydı;
  cami çevresinde yerleşim sürdü.
* **Vâsıt** — TDV VÂSIT: 1440'larda Müşa'şa'lar tahrip etti, halk dönüp
  harabenin batısında ikinci şehri kurdu; Dicle mecrası değişince köye döndü.
  **Kesin terk tarihi verilmiyor** — tarih bulunmadan `bit:` yazılmadı.

---

## 6. Kaynak ve yöntem notları

* **TDV birincil kaynak olarak kullanıldı.** Doğrulanan maddeler:
  `suleymaniye--irak`, `benderabbas`, `esterabad`, `sirvan`, `gilan`, `fars`,
  `kirman`, `sistan`, `suster`, `erbil`, `nisabur--iran`, `rey--iran`, `vasit`,
  `samerra`, `kufe`, `tikrit`, `ahvaz`, `musasalar`, `kuba--azerbaycan`,
  `talis-hanligi`, `hille`, `necef`, `mazenderan`, `tus`, `kum`, `kasan`.
* **Ölü slug tuzağına iki kez düşüldü ve `<title>` kontrolüyle yakalandı:**
  `sultaniye` ve `nisabur` maddeleri **YOKTUR** — ikisi de HTTP 200 döndürüp
  "Arama - TDV İslâm Ansiklopedisi" başlığı veriyor. Nîşâbur'un gerçek slug'ı
  **`nisabur--iran`**, Rey'inki **`rey--iran`**. Sultâniye'nin maddesi hiç yok.
  Sâve, Sebzevâr, Damgan, Semnân, Bistâm için de madde bulunamadı.
* TDV'nin arama sayfası `href` değerlerini **tırnaksız** yazıyor
  (`<a href=/nisabur--iran>`); slug avlarken bunu hesaba katmak gerekiyor.
* `s:` dönem değişimleri Değişmez 2 tarafından denetlenmiyor (denetim yalnız
  `d:` ve `v:` bakıyor). Buna rağmen **bütün Osmanlı `d:` kırılmaları
  `yerlesimler.js`'te zaten maddesi olan tarihlere hizalandı** — yeni tek bir
  kronoloji maddesi gerekmiyor. Hizalama gerekçeleri kayıtların yorumundadır
  (Erbil 1535→1534-12-04, 28 gün; Fâv 1914-11-06→1914-11-22, 16 gün).

## 7. Öz denetim — hepsi temiz

`denetle_iran.py` (scratchpad), 7 kontrol:

| Kontrol | Sonuç |
|---|---|
| 1) Noktalar karada mı (kara maskesi eksi göller) | ✓ 126/126 |
| 2) 3 km içinde mükerrer (mevcut 586 kayıtla birlikte) | ✓ yok; en yakın çift Kûfe↔Necef 8,93 km |
| 3) Değişmez 1 — sahipsizlik | ✓ 3 kasten (bkz. B-3), beklenmeyen 0 |
| 3b) Ters / sıfır uzunluk / çakışan dönem, kapsama boşluğu | ✓ yok; her kayıt 1281-01-01 … 1923-10-29'u tam kapatıyor |
| 4) Değişmez 2 — `d:`/`v:` kırılmalarının maddesi | ✓ AÇIK = 0 |
| 5) `m:` alanı var olan bir yerleşime işaret ediyor mu | ✓ 31 kayıt, hepsi eşleşiyor |
| 6) Devlet kimlikleri `renkler.py`'de tanımlı mı | ✓ 13 kimlik, hepsi tanımlı |
| 7) Ad benzersizliği (dosya içi + mevcutla) | ✓ çakışma yok |

Üretim ve denetim betikleri:
`…\scratchpad\uret_iran.py` · `denetle_iran.py` · `kapsama_iran.py`.
`yerlesimler_iran.js` **elle düzenlenmemeli**, `uret_iran.py` üzerinden
yeniden üretilmelidir — zincirler orada tek yerde tanımlıdır.

---

# EK — İkinci görev: hatalar 11 (KOORDINASYON.md §4)

**Tarih:** 2026-07-30 · **Kaynak:** merkez oturumun cross-session görevi
**Yazma izni:** yalnız `oturumlar/OTURUM-4-DUZELTMELER.md` ve
`oturumlar/OTURUM-4-KRONOLOJI.md`. `data/yerlesimler.js`'e **yazılmadı.**

## B bloğu — TAMAMLANDI

`oturumlar/OTURUM-4-KRONOLOJI.md` yazıldı. **19 iş kalemi**, bunların
**13'ü geçirilmeye hazır**, 5'i doğrulama bekliyor.

| Madde | Kapsam | Sonuç |
|---|---|---|
| md.2 | Bükreş antlaşması + savaşa giden yol | Hotin **teyit edildi, hata yok**; Kafkasya'da 1812-05-28'de **kayıp yok** (Kuban sınır kaldı, Anapa Osmanlı'da). Savaş zinciri için 2 hazır madde (İbrâil 1809-12-02, Rusçuk 1810-09-26) + 1 gün doğrulaması bekleyen. |
| md.7 | 1828-29 Rus ilerlemeleri | 3 hazır madde. **Kritik bulgu: Varna ve Kars işgalleri GEÇİCİDİR**, Edirne Antlaşması'yla geri alınmıştır — haritada kalıcı gösteriliyorsa hata. Kalıcı kayıp Ahıska. |
| md.8+10 | Cezayir'in işgali | Kırılmaların hepsi zaten maddeli; eksik olan **zincirdi**. 4 hazır madde (yelpaze → abluka → çıkarma → sürgün). |
| md.9 | Yunan isyanı | Yeni maddeden çok **düzeltme** çıktı: Navarin `1827-10` → `1827-10-20` (§8 ihlali), birleşik `1830-02` kaydı silinmeli, Tripoliçe/Missolonghi 1 gün kaymış. |

## A bloğu — BAŞLANMADI

`oturumlar/OTURUM-4-DUZELTMELER.md` henüz yok. 7 madde (md.1, 20, 24, 25, 34,
35, 53 — Hicaz/Yemen/Arabistan/Körfez) sıradaki turun ilk işi.
Ayrıca önceki turdan devreden ve **düzeltme satırına çevrilmesi gereken** 3 iş
var (`scratchpad/yama_sehrizor.py` içinde ölçülmüş, uygulanmadı):
Şehrizor koordinat kayması · Süleymaniye'nin eklenmesi · Erbil-Kifri-Tuz
Hurmatu-Halepçe'nin `1917-03-11` → `1918-10-30` düzeltmesi.

## Slug doğrulaması

1806-1836 aralığındaki mevcut kronolojinin kullandığı **55 slug** `<title>` ile
sınandı: **53 CANLI, 2 ÖLÜ.**

- 🔴 `bukres-antlasmasi` — **mevcut veride kullanılıyor** (1812-05-28) → `bucak`
- 🔴 `kabakci-mustafa` — **mevcut veride kullanılıyor** (1807-05-25) → `kabakci-isyani`
- Müstakil maddesi olmadığı ölçülenler: `turkmencay-antlasmasi`,
  `gulistan-antlasmasi`, `imereti`
- 🪤 `gulistan` **CANLI ama antlaşma değil** — Sa'dî'nin *Gülistân*'ı. Tuzak.

## "Kaynak yok" işaretlenenler (uydurulmadı)

1. **Kutayis'in Rus ilhakı (1810-02-20)** — `imereti` maddesi yok, `gurcistan` ve
   `kafkasya` gün vermiyor.
2. **Rusçuk zaferi (1811-06)** — TDV yalnız "1811 Haziranında" diyor.
3. **Varna'nın düşüşü (1828)** — TDV "üç aylık kuşatma sonunda", gün yok.
4. **Kars'ın işgali (1828)** — TDV yalnız yıl veriyor.
5. **Gülistan Antlaşması'nın günü** — TDV yalnız "1813". Verideki `1813-10-24`
   TDV'den gelmiyor.

## 🔴 Motor bulgusu — Değişmez 2'nin kör noktası

**Değişmez 2 ölçüm komutu yalnız `d:` ve `v:` dönemlerini tarıyor, `s:`
dönemlerini hiç taramıyor.** Yabancı devletten yabancı devlete geçiş denetime
görünmez; denetim "AÇIK = 0" derken harita sessizce değişir.

İki ölçülmüş kurban:
- **1813-10-24 — 15 nokta birden `iran` → `rusya`** (Gülistan). En yakın madde
  19 gün önceki "Belgrad'ın geri alınışı" — tamamen alâkasız. Kullanıcı
  Kafkasya'nın komple renk değiştirdiğini görüyor, listede Belgrad yazıyor.
  Bu tam olarak CLAUDE.md §10'un tarif ettiği hata.
- **1810-02-20 — Kutayis** `gurcistan` → `rusya`. En yakın madde 411 gün uzakta.

**Öneri (Oturum 6'nın işi):** `arac/denetle.py`'nin 2. kontrolüne `s:` taraması
eklensin. Osmanlı sınırını etkilemediği için acil değil, ama dünya kapsamı
açıldıkça `s:` geçişleri çoğalacak ve körlük büyüyecek.

---

# EK 2 — hatalar 15 İran ekseni (md.8 · md.11 · md.6)

**Tarih:** 2026-07-31 · **Çıktı:** `oturumlar/OTURUM-4-DUZELTMELER.md`
`data/yerlesimler.js`'e **yazılmadı.**

## En acil bulgu: 5 ölü slug veride AKTİF

İran ekseninin kronoloji maddelerinin yarısı var olmayan TDV maddelerine
bağlanıyor. `ferhad-pasa-antlasmasi` (2 kayıt) · `kasr-i-sirin-antlasmasi` ·
`cildir-savasi` · `mesaleler-savasi` · `ozdemiroglu-osman-pasa`.
Hepsine `<title>` ile doğrulanmış canlı karşılık önerildi.
Yönlendirme tuzağı (OGRENILENLER §20) iki kez işe yaradı:
`nihavend` → **`nihavend--iran`**, `kasr-i-sirin-antlasmasi` → **`kasrisirin-antlasmasi`**
(ikincisi "zuhab" aramasıyla bulundu — antlaşmanın diğer adı Zühâb).

## md.8 — kullanıcının iddiası doğrulandı

- **Nihavend:** kayıt VAR (`Nihâvend`, diakritik). Fetih TDV'ye göre **1588 sonu**,
  veride 1590-03-21. Kaydı değiştirmemeyi, 1588 fethine ayrı madde yazmayı önerdim.
- **Urmiye: GERÇEK EKSİK.** Osmanlı dönemi hiç yok; TDV üç dönem veriyor.
- **Hoy:** aynı kusur — Tebriz'e bağlı Osmanlı sancağıydı, kalesini Ferhad Paşa
  yaptırdı, veride `d:` yok.
- Merend · Selmâs · Mâku · Culfa: slug'lar ölü, **kaynak yok**, uydurulmadı.
- 1578-1590 fetih zinciri: **10 kırılmanın 10'u maddeli.**

## md.11 — Kasr-ı Şirin: düzeltme çıkmadı, 7/7 doğru

Bağdat · Basra · Şehrizor Osmanlı, Revan Safevî, Kars · Ahıska · Van Osmanlı —
yedisi de haritada doğru. Antlaşma tarihi (1639-05-17) da doğru.

**"Milim milim" sorusunun cevabını kaynağın kendisi veriyor:** TDV sınırın
**2185 km** olduğunu, bunun **1296 km'sinin ihtilâflı kaldığını** yazıyor.
1639'da çizgi düzeyinde sınır **yoktur**. Bu bir ölçüm eksikliği değil,
ölçülmüş tarihî olgudur.

## md.6 — Lahsa/Katîf kopukluğu GERÇEK

En yakın iki Osmanlı noktası **Fâv ↔ Cübeyl = 350,3 km**. Oturum 2'nin
100 km kuralına göre gerçek tarihî sıçrama. TDV: Lahsâ bir **vahalar bölgesi**,
Osmanlı oraya **Portekiz tehdidine karşı kıyıdan** girdi ve **Basra
beylerbeyiliğine bağladı (1547)**, sonra ayrı beylerbeyilik yaptı (1553 sonrası).
Aradaki çöl **Benî Hâlid** sahasıydı. İdarî olarak bağlı, coğrafî olarak kopuk.

⚠️ Merkezin verdiği "91,42 km" rakamı bu bileşene ait değil; BITISIKLIK
raporunda Basra **C kategorisinde (uzak kara sıçraması, tarihsel)** geçiyor.

Yan bulgu: Katîf grubunun 1871 tarihi **1871-04-20** yazılı, TDV **5 Haziran
1871** diyor; ayrıca **1818-1830** ve **1840-1842** Mısır/Osmanlı dönemleri eksik.

## A bloğu — HÂLÂ AÇIK

md.1, 20, 24, 25, 34, 35, 53 (Arabistan/Yemen/Hicaz). md.6 araştırması
Katîf/Lahsa üzerinden oraya değdi; sıradaki tur oradan devam edecek.

---

# EK 3 — hatalar 16 İran/Kafkas/Arabistan (6 madde)

**Tarih:** 2026-07-31 · **Çıktı:** `oturumlar/OTURUM-4-DUZELTMELER.md` sonuna eklendi.
`data/yerlesimler.js`'e **yazılmadı.**

| madde | sonuç |
|---|---|
| **md.2** Urmiye/Nahçıvan | Nahçıvan **zaten doğru** (1725-1730). **Urmiye eksik — kullanıcı haklı.** Ayrıca Hemedan Antlaşması'nın bölge hükmüne göre 9 nokta daha eksik: Hoy, Selmâs, Merend, Culfa, Mâku (Azerbaycan) + Sakkız, Sine, Merîvan, Bîcâr, Mîyandoab (İran Kürdistanı). Hoy TDV ile doğrulandı; diğerleri için **karar bekliyor** (bölge adı şehir düzeyine genişletilsin mi?). |
| **md.1** Şirvan 1723 enklavı | ✅ **Harita doğru.** Şamahı 1723-08, aradakiler 1724 sonu – 1725 Eylül. Enklav gerçek ve geçici. |
| **md.4** Basra işgali | 🔴 **`isg:` örtüsüne geçilmeli.** İşgal, fetih değil. 64,6 km'lik sahte kopukluğu kapatır. |
| **md.5** "üçgen" | 🟡 **Hipotez:** Basra'nın 1776-1779 İran peteği. md.4 çözülürse kendiliğinden kapanır. **Ekran görüntüsü gerekiyor.** |
| **md.8** mükerrer Vehhâbî | 🔴 **BULUNDU** — 1803-05-15 ve 1806-02-01. İkisinin tam metni raporda. TDV 1806'da ayrı bir Mekke fethi tanımıyor → 1806 kaydı **silinmeli**, Mekke'nin harita tarihi **1803-05-15** olmalı. |
| **md.8** kalan Osmanlı toprağı | ✅ **CİDDE, ve doğru.** Vehhâbîler alamadı. *(hatalar 11 md.1'in ikinci yarısı da bu.)* |
| **md.9** Sohum/Anapa | ✅ **Tarihen doğru** — Kuban sınır. 🟡 Anapa'nın **1791-07-26 → 1792-01-10** Rus işgali eksik (TDV gün gün veriyor). ⚠️ 1807 işgali TDV ANAPA'da **geçmiyor** — doğrulanamadı. |

## Oturum 2'ye iki girdi

1. **Mükerrer denetimi bu çifti kaçırdı.** Ölçüt ±400 gün + kök benzerliği
   (eşik 0,34); çift **1023 gün** aralıklı ve başlıklar **zıt**
   ("ele geçirmesi" ↔ "kaybı"), yani benzerlik skorunu aşağı çekiyor.
   **Öneri:** `yer:` + `k:` üzerinden ikinci geçiş, pencere genişletilsin.
   Bu çiftte `yer:` = "Mekke" ve `k:` = "kayip" **birebir aynı.**
2. **Cidde, 100 km kuralının karşı örneği.** Cidde↔Mekke **68,9 km** ve kopukluk
   **gerçek** (Vehhâbîler Cidde'yi alamadı, Şerif Gālib tutundu).
   Kural "100 km altı = hata" değil, **"100 km altı = incelenmeli"** olmalı;
   **deniz erişimi olan noktalar muaf tutulmalı.**

## Bu turda ölçülen ölü slug'lar

`hemedan-antlasmasi` · `zendiler` · `nadir-sah` · `suud` · `abaza`
Canlı: `hemedan` · `kerim-han-zend` · `basra` · `anapa` · `sohum` ·
`vehhabilik` · `mekke` · `medine` · `taif` · `gurcistan` · `iran`

## Hâlâ açık

hatalar 11 **A bloğu** (Arabistan/Yemen/Hicaz — md.1, 20, 24, 25, 34, 35, 53).
md.1'in bir yarısı bu turda cevaplandı (**Cidde**). Kalanlar sıradaki turda.

---

# EK 4 - DOGU (A4): hayalet nokta GERI CEKILDI + Basra karari

**Tarih:** 2026-07-31

## Geri cekilen bulgu

Onceki turda "dogu bolgesinde 15 kur: kaydinin 10u hayalet nokta" diye rapor
ettim. **YANLIS. Geri cektim.**

Motor kur:/bit: alanlarini b781c2c commitinden beri okuyor. Kodda dogruladim:
uret_petek.py:903 devir_kumesi() tam olarak o kumeyi hesapliyor ve noktalari
sahneden cikarip paylarini o gun var olan komsulara dagitiyor.

**Hatanin kaynagi olcum yontemimdi:** sahipligi data/yerlesimler.js ten okudum,
yani VERININ NE YAZDIGINI olctum. Oysa soru MOTORUN NE CIZDIGIYDI. Veride
Nasiriye nin 1600 de d:osmanli yazmasi dogru; motor onu o gun haritaya koymuyor.

Rapordaki bolum geri cekildi olarak isaretlendi, asli details icinde saklandi.

## Kendime ders (OGRENILENLER adayi)

Bir ALANIN ya da MOTORUN DAVRANISI hakkinda hukum verilecekse belgeye veya
baska bir oturumun raporuna degil KODA bakilmali. YAPILACAKLAR.md deki
"motor kur: okumuyor" satiri bir gun fazla acik kaldigi icin ust uste yanlis
teshis uretti. Bu turda ayni tuzaga iki kez dustum:
  1. y:"vassal" gecersiz sanmak  -> js/app.js:782 de tanimli cikti
  2. hayalet nokta                -> uret_petek.py:903 te cozulmus cikti
Ikisinde de kaynak bir RAPORDU, kod degil.

Bundan sonra olcum bildirirken KAYNAGINI da yaziyorum: ne okudum, nereden.

## Basra y: - karari KORUYORUM

vassal in yeni tanimiyla (tabiyet/itaat yoluyla EDINIM) yeniden sinadim.
Tanim soruyu suna indirgiyor: bu d: donemi NASIL edinildi?

  d: donemi baslangici  1546-01-01  (onerim 1545-12-26)
  Ayas Pasa nin girisi  1545-12-26   -> alti gun

Rasid b. Megamis in itaati 1534/1538 dir ve o edinim 1545 ten ONCE bozulmustur
(TDV: Seyh Yahya "Osmanli yonetimine karsi tavir aldi"). 1545 teki sey bir
itaat kabulu degil, kaybedilmis bir yerin geri alinmasidir: 120 gemi, karadan
harekat, "mudafileri tesirsiz hale getirdi".

=> y:"savas". vassal / ilhak / kusatma bu donem icin uygun degil.

**Ama vassal kelimesi bosa yazilmamis.** Yeni tanim, onceki raporda bildirdigim
1b bulgusunu curutmuyor, GUCLENDIRIYOR: 1534-1545 arasi Basra veride safevi
gorunuyor, oysa TDV ye gore Osmanli tabisi ve 1538 den itibaren Kanuni adina
sikke kesiyor. Eksik donem tam da vassal in ders kitabi ornegi:
  v: [{ f:"1534-12-04", t:"1545-12-26", y:"vassal" }]
Kayittaki vassal kelimesi gercek bir olayin fosili - yanlis gozde duruyor.

## Iki tarih

- fetih: 1546-01-01 -> **1545-12-26** (TDV gunu veriyor; mevcut deger yil
  sinirini atliyor, harita fethi 1546 da gosteriyor)
- Iran isgali: **yil dogru**. "1775-1779" TDV nin anlatisi degil, BASRA
  maddesinin kaynakcasindaki makale basligi. TDV KERIM HAN ZEND: "1776 da
  Kerim Han in kardesi Sadik Han Basra yi ele gecirdi." Baslangic gunu
  kaynaksiz -> 1776-01-01.
- **Bitise yil-basi kurali UYGULANMAMALI:** TDV Basra nin ancak Kerim Han in
  vefatindan SONRA geri alindigini, olumun de 2 Mart 1779 oldugunu yaziyor.
  1779-01-01 yazmak olayi olumden iki ay oncesine tasir - kanitlanabilir
  bicimde yanlis. Uydurma gunu baska bir uydurmayla degistirmis oluruz.

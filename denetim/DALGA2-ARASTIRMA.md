# 🔬 DALGA 2 ARAŞTIRMA RAPORLARI — battaniye ad / hayalet devlet

> Beş tek kullanımlık araştırma oturumunun bulguları. **Oturumlar kapandı,
> bulgu burada yaşıyor** — bu dosyanın var olma sebebi budur.
> Şartname: `oturumlar/ARASTIRMA-KUNYE.md` · Ölçüm tabanı: 7 Ağustos 2026

## Durum — **5/5 TESLİM ETTİ**

| oturum | kapsam | zaten var | yeni künye | bulunamadı |
|---|---|---|---|---|
| 1 Balkanlar-Doğu Avrupa | 8 kimlik | 3 | 2 | 3 |
| 2 Akdeniz-İtalya-İberya | 7 kimlik | 3 | 4 | 0 |
| 3 Afrika-Arabistan | 6 kimlik | 2 | 3 | 2 |
| 4 Hindistan-İran-Anadolu | 5 kimlik | **5** | **0** | **0** |
| 5 Doğu-Güneydoğu Asya | 7 kimlik | 3 | 3 (4 kayıt) | 1 |
| **TOPLAM** | **33** | **16** | **12** | **6** |

🔴 **EN ÖNEMLİ SONUÇ: 33 kimliğin 16'sının karşılığı DİZİNDE ZATEN VARDI.**
Yani işin yarısı yeni araştırma değil, **veri düzeltmesi** — künye de renk de
yazılmadan, yalnız haritadaki etiket değişerek kapanıyor. Dalga 2'nin fiyatı
*"35 kimlik × araştırma"* sanılıyordu; ölçüm **12 künye + 16 etiket düzeltmesi**
dedi.

---

## 🟢 A — DİZİNDE ZATEN VAR (16 kalem) · yalnız etiket düzeltmesi

| kimlik | pencere | doğru kimlik | not |
|---|---|---|---|
| `kirim` | 1281 → 1441 · **7 kayıt** (Özi · Anapa · Soçi · Tuapse · Kuban · Maykop · Kabartay) | `altinorda` | **Komşu 20+ kayıt zaten doğru** — saf veri hatası, en ucuz düzeltme |
| `bogdan` | 1281 → 1359 | `altinorda` → ~1347 `macaristan` | ikisi de dizinde |
| `kazak-hanligi` | 1847 → 1868 (arka) | `rusya` | 1867 Nizamnâmesi 1868'de tam idare |
| `ispanya` | 1281 → 1479 · **8 nokta** | `kastilya` (Madrid · Sevilla) · `aragon` (Barselona · Valensiya · Mayorka · İbiza · Kalyari · Sasari) | Toledo/Valladolid/Zaragoza **zaten doğru** |
| `navarra` | — | **künye hatası** | `t:"1512-07-25"` → **`1620-10-19`**; künyenin kendi kronolojisi zaten öyle diyor |
| `milanoduka` | 1281 → 1395 | aynı hanedan (Visconti) | yeni künye değil, `f:` 1311'e çekilir |
| `angkor-kmer` | 1431 → 1698 | `kamboc-kralligi` (`devletler.js:2377`, 1431-1923) | boşluğu **tam** kapsıyor |
| `demak` | 1587 → 1625 (arka) | `mataram-sultanligi` (`devletler.js:2415`) | künye tam 1587'de başlıyor |
| `kuzey-yuan` | 1524 → 1720 (arka) | `qing-hanedani` (`devletler.js:2223`) | ⚠️ **çekince aşağıda** |
| `umman` | 1281 → 1507/1515 · 8 nokta | `nebhani` (`devletler.js:1683`) | ✅ **UYGULANDI** |
| **`maratha`** | iki uçta | `bicapur` · `maratha` · `ingiliz-hindistani` | üçü de kayıtlı; 1818 sonrası **kasıtlı** |
| **`meysur`** | 1565 / 1687 → 1923 | `ingiliz-hindistani` (1799 sonrası) | TDV zinciri tam: Talikota → Vodeyar → Haydar Ali → Tîpû → İngiliz kuklası |
| **`sih-imparatorlugu`** | 1765 → 1801 | aynı gövdenin erken evresi (Misl Konfederasyonu) | künyenin `f:`i 1765'e çekilir |
| 🔴 **`artuklu`** | **1281 → 1465** · Harput · Çemişgezek · Palu | `ilhanli` → `akkoyunlu` | **aşağıda** |
| 🔴 **`hamid`** | **1402-09-15 → 1414-06-01** · Isparta | `karaman` | **aşağıda** |
| `benihalid` | 1818 → 1841 | kendisi, 1830'da biter | ✅ künye düzeltildi |

### 🔴 `artuklu` — künyenin KENDİ kronolojisi kendini yalanlıyor

Harput · Çemişgezek · Palu, **atlasın tamamını** (1281 → 1465) `artuklu`
boyuyor. Ama `devletler.js`teki `artuklu` kaydının kendi kronolojisi diyor ki:
> *"1234-01-01 toprak-kayip: **Harput kolu Anadolu Selçuklularına geçti**"*

⇒ **Atlas başladığında (1281) bölge 47 yıldır Artuklu'da değildi.** Bu bir
taşma değil, tam bir hayalet. TDV `harput` (200) zinciri veriyor: 1234 Selçuklu
→ Kösedağ sonrası **İlhanlı** → 14. yy'da Dulkadırlı/Kadı Burhaneddin/
Karakoyunlu/Akkoyunlu arası el değiştirme → **1465 Uzun Hasan kesin Akkoyunlu**.
İkisi de dizinde: `ilhanli` (1256-1353) · `akkoyunlu`.
⚠️ 1353-1465 arası kesin tarihler TDV'de **yok** — o aralık *"birden çok küçük
yapı, net tarih bulunamadı."*
📌 Ve slug tuzağı burada da çıktı: künyenin kaynak alanında `artukogullari`
denenmiş ve ölü çıkmış; **doğrusu `artuklular` (200).**

### 🔴 `hamid` — muhtemel tarih uydurma, TDV kendi maddesiyle yalanlıyor

Isparta, **Fetret devri boyunca** (1402-09-15 → 1414-06-01, **gün
hassasiyetinde**) yeniden `hamid` yazıyor. TDV `isparta` (200) aynen:
> *"Timur'un ordularının geri dönüşü sırasında … Isparta'nın etkilenip
> etkilenmediğine dair bilgi yok. Onun ayrılmasından sonra **muhtemelen
> Karamanoğulları yöreyi ellerine geçirdiler**. Bu sırada Isparta'nın kimin
> elinde kaldığı **belli değildir** … kati hâkimiyet II. Murad döneminde."*

TDV `hamidogullari` (200) 1391 sonrası bir restorasyondan **hiç bahsetmiyor**.
Üstelik `fetret-mehmed` künyesi **1413-07-05**'te bitiyor, haritanın penceresi
**1414-06-01**'e kadar sürüyor — **11 ay** fark, Fetret prensleriyle de
örtüşmüyor.
⇒ En olası aday **`karaman`** (dizinde, 1256-1487) ve komşu Beyşehir ·
Seydişehir · Akşehir **aynı pencerede zaten `karaman`** yazıyor. Isparta'nın
tek başına `hamid` kalması iç tutarsızlık.

⚠️ **`kuzey-yuan` çekincesi:** Batı Moğolistan (Cungar/Dzungar) 1691'de Qing'e
bağlanmadı, **1755**'e kadar bağımsız kaldı. Pencere coğrafî olarak oraya denk
geliyorsa doğru cevap `qing-hanedani` **değil** Dzungar'dır — ve Dzungar
dizinde **yok**. *"Hangi noktaların etkilendiğini görmeden ayıramadım."*

---

## 🔴 B — YENİ KÜNYE İSTEYEN (12 kalem)

| kimlik | boşluk | gereken künye | kaynak |
|---|---|---|---|
| `altinorda` | 1502 → **1556** (arka) · 6 kayıt | **`astarhan-hanligi`** | TDV `astarhan-hanligi` **200** — *"1466-1556 yılları arasında"* · haritanın 1556'sıyla **birebir** |
| `adal` | 1281 → 1415 | **`evfat`** 1285-1415 | TDV **`evfat` 200** (rapor önce 302 dedi, **yanıldı**) |
| `darfur` | 1281 → 1695 | **`dacu`** 1200-1400 · **`tunciler`** 1400-1695 | TDV `darfur` 200 |
| `somali` | 1281 → 1500 · Mogadişu | **`makdisu-sultanligi`** | TDV `makdisu` **200** ⚠️ `mogadisu` canlı ama **içi boş** |
| `sardinya` | 1281 → 1720 | **`savoya`** (Kontluk → 1416 Dükalık) | Britannica — TDV kapsamı dışı |
| `toskana` | 1281 → 1532 | **`floransa`** (Cumhuriyet) | künyenin kendi özeti zaten söylüyor |
| `mantua` | 1281 → 1328 | **`bonacolsi`** 1273-1328-08-16 | Britannica · tek net hanedan |
| `irlanda` | 1922-12-06 → 1923 | **`irlanda-hur-devleti`** | Anglo-İrlanda Antlaşması · düşük öncelik |
| `gurcistan` | (a) 1801→1810 (b) 1918→1921 | **İmereti Krallığı** · **Gürcistan Demokratik Cumhuriyeti** | ⚠️ TDV'de **müstakil madde YOK** (arandı) |
| `ryukyu` | 1322 → 1429 | **Sanzan dönemi** (Hokuzan/Chūzan/Nanzan) | G. H. Kerr, *Okinawa* · 1281-1322 **isimsiz kalmalı** |
| `brunei-sultanligi` | 1281 → 1368 | **Poni (Po-ni) Krallığı** | TDV `bruney` 200 + Britannica |
| `mataram-sultanligi` | 1755 → 1811 (arka) | **Surakarta Sunanlığı** + **Yogyakarta Sultanlığı** (Giyanti Antlaşması, 13 Şubat 1755) | Hollanda kolonyal kaynaklı · TDV'de `mataram` **302 ölü** |

---

## ⚪ C — BULUNAMADI (6 kalem) · hepsi dürüstçe işaretlendi

| kimlik | niçin |
|---|---|
| `bosna` 1281→1353 | TDV isim vermiyor, yalnız *"Bizans ve yerli hanedanlar"*. **Kısmen çözülebilir:** künye 1377 → 1353'e çekilebilir (aynı hükümdar Tvrtko zaten **Ban** olarak hüküm sürüyordu) |
| `eflak` 1281→1310/1330 | **Kumanlar (Kıpçaklar)** → Moğol sonrası karışık Bizans/Macar sınırı. TDV tek isim vermiyor |
| `arnavutluk` 1281→1443 | **Gerçekten fragmante:** Bizans → Sırp (Duşan 1343-46) → yerel beyler (Balşa · Topya · Kastriyota). Tek isim yok |
| `kaffa` 1281→1390 | **Mato hânedanı** — 32 kral sayılıyor, **tek birinin adı bile bilinmiyor**. TDV'de madde yok (`kefa`·`kafa`·`kaffa` üçü de 302) |
| `somali` (iç/güney) | Merka · Beledveyne · Baydoa · Obbiya · Galkayo · Garoove · Ayl. **TDV `somali` maddesi bile belge sunmuyor** |
| `sulu-sultanligi` 1281→1457 | TDV `sulu` (200) **çok kısa**, öncesine değinmiyor. 1390-1457 için *"Buansa Racalığı"* adayı var ama **kaynak zayıf**; 1281-1390 tamamen açık |

---

## 🟡 D — KÜNYE-TDV TARİH ÇELİŞKİLERİ (5 kalem) · VERİ DEVLET'e

| künye | künyede yazan | TDV'nin dediği | fark |
|---|---|---|---|
| `eflak` | `f:1330` | Basarab I **1310**'da voyvoda | 20 yıl |
| `brunei-sultanligi` | `f:1368` | kuruluş **1405-1415** (Awang Betatar → Muhammed Şah) | ~40 yıl |
| `demak` | `t:1587` | Demak **1578**'de çöktü | 9 yıl |
| `navarra` | `t:1512-07-25` | kendi kronolojisi **1620-10-19** | 108 yıl |
| `sih-imparatorlugu` | `f:1801` | Misl konfederasyonu **1765**'ten aynı gövde | 36 yıl |

---

## 📌 TURUN KENDİ DERSLERİ

**① İşin yarısı araştırma değil, veri düzeltmesiymiş.** 33 kimliğin 16'sının
karşılığı dizindeydi. 4 numaralı oturum **5/5 "zaten var"** buldu — sıfır yeni
künye. *"Dizinde zaten var mı"* sorusunu şartnameye koymak, işin fiyatını
yarıya indirdi.

**② Künyenin KENDİ kronolojisi haritayı yalanlayabiliyor.** `artuklu`
kaydı *"1234'te Harput kolu gitti"* diye yazıyor, harita aynı yeri 1465'e
kadar Artuklu boyuyor. **Denetim bunu hiç sormuyor** — künye içi kronoloji ile
harita arasında bir tutarlılık ölçütü yok. Yeni bir değişmez adayı.

**③ Ölü slug tuzağı bu turda ÜÇ kez çıktı ve üçü de farklı biçimdi:**
`evfat` **canlıyken ölü ilan edildi** · `mogadisu` **canlı ama içi boş**,
asıl madde `makdisu` · `artukogullari` ölü, doğrusu **`artuklular`**.

**④ Komşu tutarlılığı bu kez DELİL olarak kullanıldı — ve doğruydu.**
Isparta'nın `hamid` kalması, komşu Beyşehir/Seydişehir/Akşehir `karaman`
yazarken **iç tutarsızlık** sayıldı. ⚠️ Ama tek başına delil değildi: TDV
`isparta` maddesi ayrıca *"Karamanoğulları ellerine geçirdiler"* diyor.
📌 **Komşu tutarlılığı hipotez üretir, kaynak doğrular.**

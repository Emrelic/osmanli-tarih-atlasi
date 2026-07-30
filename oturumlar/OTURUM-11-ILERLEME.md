# Oturum 11 — Hazar doğusu ve Orta Asya yerleşim katmanı · İLERLEME

**Durum:** iş bitti, entegrasyon bekliyor.
**Yazılan tek dosya:** `data/yerlesimler_ortaasya.js` — **16 yerleşim**.
**Commit atılmadı. `arac/uret_petek.py` çalıştırılmadı.**

---

## 1. Bildirilen hata kapandı mı — ölçüm

Görev tanımındaki tablonun aynısı, öncesi ve sonrası:

| Yer | ÖNCE (en yakın yerleşim) | SONRA |
|---|---|---|
| Türkmenbaşı (Krasnovodsk) | **Bakü 266 km** — denizin öbür yakası | kendi noktası, 0 km |
| Hazar doğu kıyısı ortası (42.0/52.8) | **Bakü 305 km** | Garabogaz (Bekdaş) 51 km |
| Mangışlak | **Astrahan 269 km** | kendi noktası, 0 km |
| Uzboy çölü | Karakum 260 km | kendi noktası, 0 km |
| Merv / Mari | Serahs 131 km | kendi noktası, 0 km |
| Hîve | **Karakum 262 km** | kendi noktası, 0 km |
| Ürgenç | **Karakum 320 km** | kendi noktası, 0 km |
| Aral güney kıyısı | **Karakum 399 km** | Küngrat 0 km |
| Üstyurt ortası (43.6/54.5) | **Bakü 525 km** | Üstyurt platosu (batı) 83 km |

Hazar'ın doğu kıyısının tamamı artık **kendi tarafındaki** noktalara bağlı.
Bakü'nün peteği denizi aşamaz; 1578-1607 Şirvan penceresinde Türkmen sahili
Osmanlı boyanmayacak.

### Kapsama (MIMARI.md §5, seyrek bölge ölçütü 300 km)

Kara maskesi 0,25° ızgaraya bölünüp her hücrenin en yakın yerleşime uzaklığı
ölçüldü:

| Alt bölge | Hücre | En kötü ÖNCE | En kötü SONRA | Ölçüt |
|---|---|---|---|---|
| Hazar doğu kıyısı ve Üstyurt (49-57°D, 37-46°K) | 587 | 680 km | **262 km** | ✅ |
| Harezm + kuzey Horasan (57-62°D, 36-44°K) | 589 | 544 km | **247 km** | ✅ |
| Aral kuzeyi — Kazak bozkırı (55-62°D, 44-48°K) | 405 | 848 km | 567 km | ❌ kapsam dışı |

Görev tanımının üç öncelik başlığının **üçü de** ölçütü geçiyor. Aral'ın
kuzeyi (Kazalinsk-Aktöbe-Turgay kuşağı) bu oturumun kapsamında değildi;
§6'da öneri olarak bırakıldı.

---

## 2. Eklenen 16 nokta

### Hazar doğu kıyısı (5) — bildirilen hatayı doğrudan kapatan noktalar
| Ad | Tür | Enlem | Boylam | Not |
|---|---|---|---|---|
| Krasnovodsk (Türkmenbaşı) | liman | 40.0220 | 52.9600 | `kur:"1869-01-01"` |
| Çeleken | bolge | 39.4600 | 53.1400 | maske yüzünden ~3 km kaydırıldı |
| Garabogaz (Bekdaş) | bolge | 41.5619 | 52.6014 | Kara Boğaz'ın batı kordonu |
| Mangışlak | bolge | 44.5100 | 50.2670 | Tüp-Karagan burnu |
| Dihistan ovası (Meşhed-i Misriyân) | bolge | 38.1667 | 54.6333 | |

### Çöl dolguları (3) — **kasten sahipsiz**
| Ad | Tür | Enlem | Boylam |
|---|---|---|---|
| Uzboy | bolge | 39.9000 | 55.5000 |
| Üstyurt platosu (batı) | bolge | 43.8000 | 53.5000 |
| Üstyurt platosu (doğu) | bolge | 43.5000 | 56.5000 |

### Harezm (5)
| Ad | Tür | Enlem | Boylam | Not |
|---|---|---|---|---|
| Hîve | sehir | 41.3783 | 60.3639 | |
| Hazârasp | kale | 41.3200 | 61.0700 | |
| Köhne Ürgenç (Gürgenç) | sehir | 42.3417 | 59.1500 | `bit:"1646-01-01"` |
| Yeni Ürgenç | sehir | 41.5500 | 60.6333 | `kur:"1646-01-01"` |
| Küngrat | sehir | 43.0833 | 58.8333 | Aral güney kıyısı |

### Kuzey Horasan (3)
| Ad | Tür | Enlem | Boylam | Not |
|---|---|---|---|---|
| Nesâ | sehir | 37.9667 | 58.1833 | Ahal vahası |
| Ebîverd | sehir | 37.9000 | 59.6167 | |
| Merv (Mari) | sehir | 37.5936 | 61.8333 | ⚠️ kutu sınırı, bkz. §5 |

---

## 3. Devlet kimlikleri — **dördü de oturum sırasında eklendi**

Görev tanımı "eksik devletleri EKLEME, ihtiyaç listeni yaz" diyordu. Liste
hazırlandı, ama **entegrasyon oturumu bu oturum sürerken dördünü de
`arac/renkler.py`'ye eklemiş** (satır 100-107). Doğrulandı: bu dosyada
kullanılan hiçbir kimlik artık BOYALAR'ın dışında değil, hiçbir pencere
boyasız kalmıyor.

| Kimlik | Tam ad | Varlık aralığı | Merkez | TDV maddesi | Durum |
|---|---|---|---|---|---|
| `cagatay` | Çağatay Hanlığı | 1227-1370 | Almalık / Karşı | `cagatay-hanligi` | ✅ eklendi `#6a1b9a` |
| `hive` | Hîve Hanlığı (Harezm) | 1512-1920 | Ürgenç → Hîve (~1603) | `hive-hanligi` | ✅ eklendi `#00695c` |
| `buhara` | Buhara Hanlığı | 1500-1920 | Buhara | `buhara-hanligi` | ✅ eklendi `#4527a0` |
| `turkmen` | Türkmen boyları (Yomut, Teke, Göklen) | boy düzeni, devlet değil | — | `turkmenler` | ✅ eklendi `#8d6e63` |

### ⚠️ İki renk uyarısı — ölçüldü, düzeltme entegrasyonun işi

`arac/renkler.py` bu oturumun yazma yetkisi dışında; yalnız bildiriliyor.

**1. `turkmen` (#8d6e63) ile `iran` (#b5885b): ΔE 22.7 (ham hex).**
renkler.py kendi başlığında dolgunun **%30 saydamlıkla** fiziki altlığa
bindiğini ve bu bindirmenin renk farklarını **yaklaşık üçte bire**
sıkıştırdığını yazıyor → bindirilmiş ΔE ≈ **7.6**. Bu iki devlet
**1860-1881 arasında Kopet Dağ boyunca doğrudan sınırdaş** (Nesâ/Ebîverd
`turkmen`, güneyindeki Kûçân/Bocnûrd/Meşhed `iran`). Tam da Türkmen
boylarının fiilî bağımsızlık penceresi haritada görünmez hâle gelebilir.
Öneri: `turkmen` toprak tonundan çıkarılıp doygun bir tona çekilsin.

**2. `turkmen` (#8d6e63) ile `timurlu` (#8d6e63): birebir aynı hex.**
Bu dosyada ikisi hiçbir tarihte aynı anda sahnede değil (`timurlu`
1502/1507'de biter, `turkmen` 1600'de başlar), yani harita yanılmaz. Ama
**lejantta iki satır aynı kareyi gösterir.**

Ölçülen komşuluk ΔE'leri (ham hex, aynı anda sahnede olan çiftler):
`cagatay↔altinorda` 59.7 · `cagatay↔ilhanli` 36.7 · `hive↔safevi` 58.4 ·
`hive↔turkmen` 42.4 · `turkmen↔safevi` 38.9 · `turkmen↔rusya` 37.6 ·
`buhara↔hive` 96.5 · `buhara↔iran` 102.4 — hepsi rahat.

### Bu oturumda İHTİYAÇ DUYULMAYAN ama kutu açılınca gerekecek kimlikler
`hokand` (Hokand Hanlığı 1710-1876, TDV `hokand-hanligi`) ·
`kazak` (Kazak hanlıkları) · `nogay` · `sibir` · `karakalpak`.
Hiçbiri 62°D'nin batısında toprak taşımıyor, o yüzden listeye yazılmadı.

---

## 4. Üç değişmez — denetlendi

`arac/denetle.py` yalnız `yerlesimler.js`'i okuyor, yeni dosyayı görmüyor.
Bu yüzden aynı fonksiyonlar (`degismez1`, `degismez2`) import edilip
**birleşik küme** (722 + 16 = 738) üzerinde koşturuldu.

| Denetim | Önce | Sonra | Sonuç |
|---|---|---|---|
| **Değişmez 1** — sahipsizlik yok | 32 sahipsiz | **35** | ⚠️ +3, hepsi kasten (§4.1) |
| **Değişmez 2** — sessiz toprak değişimi yok | 427 kırılma / 0 açık | 427 / **0** | ✅ değişmedi |
| Dönem sağlığı (ters / sıfır / çakışma / boşluk) | — | **0** | ✅ |
| 3 km mükerrer | — | en yakın çift **29.5 km** (Hîve↔Yeni Ürgenç) | ✅ |
| Nokta karada mı | — | 16/16 karada, 0'ı göl içinde, 16/16 kutu içinde | ✅ |
| Ad çakışması | — | 0 | ✅ |

`arac/denetle.py` mevcut hâliyle de temiz koşuyor: `32 sahipsiz (beklenen 32)`,
`427 kırılma, 0 açık`, `381 çelişki (beklenen ≤381)`, `SONUÇ: temiz`.

### 4.1 ⚠️ BİRLEŞTİRMEDE YAPILACAK TEK KOD DEĞİŞİKLİĞİ

`arac/denetle.py`:
```python
BEKLENEN_SAHIPSIZ = 32   # →  35
```
Üçü de kasten sahipsiz dolgu noktasıdır, mevcut `Karakum` ile aynı desen:
**Uzboy**, **Üstyurt platosu (batı)**, **Üstyurt platosu (doğu)** — susuz çöl
ve plato, `MIMARI.md` §6'daki `bos:"devletsiz"` durumu. Başka hiçbir kayıt
sahipsiz değil; 13 yerleşimin hepsi 1281-01-01'den 1923-10-29'a kesintisiz
zincire sahip.

`BEKLENEN_YERLESIM` de 722 → 738 olacak.

### 4.2 Değişmez 2 neden hiç etkilenmedi
Denetim yalnız `d:` (doğrudan Osmanlı) ve `v:` (tâbi) dönemlerinin başını ve
sonunu sorguluyor. Bu dosyadaki 16 kaydın **hiçbirinin `d:` veya `v:` dönemi
yok** — hepsi yabancı sahiplik (`s:`). Tek bir yeni kronoloji maddesi
gerekmiyor.

### 4.3 Değişmez 3
16 kaydın hepsinde `k:0` ve `m` alanı **yok**. Değişmez 3 sayacı yalnız
`m` alanı dolu kayıtları sayıyor, dolayısıyla **381 tavanı değişmiyor.**

---

## 5. Bilinçli olarak yapılan tavizler — hepsi tek tek

### 5.1 Merv, gerçek yerinde değil (~32 km batıda)
Ortaçağ Merv'i (Sultan Kale) **37.662°K / 62.192°D**'de, yani `BOLGE =
box(-12, 1.5, 62, 62)` kutusunun **0.19° dışında**. Kutu dışına konan
noktanın peteği `intersection(BOLGE)` ile boşalır. Nokta bu yüzden vahanın
batı ucuna, bugünkü Mari şehrine (37.5936 / 61.8333) konuldu.
**Kutu doğuya açıldığında 37.662 / 62.192'ye taşınmalıdır** — dosyada
yorumla işaretli.

### 5.2 Çeleken, maske yüzünden ~3 km kaydırıldı
Gerçek merkez (39.486 / 53.124) Natural Earth 10 m maskesinde **denizde**
kalıyor. Nokta 39.460 / 53.140'a çekildi. Şehir merkezi değildir,
`tur:"bolge"`dir. Aynı sebeple Kara Boğaz noktası lagünün içine değil
(41.30/54.00 maskede **su** çıktı) batı kordonuna, Bekdaş'a konuldu.

### 5.3 Yıl başına yaslanan dokuz kırılma
TDV yıl veriyor, gün vermiyor; `CLAUDE.md` §4 gereği `YYYY-01-01` yazıldı ve
gerekçesi her kaydın yorumunda duruyor: 1502 (Şeybânî Han'ın Harezm'i
işgali) · 1512 (Hîve Hanlığı'nın kuruluşu) · 1600 (Mangışlak/Balhan'da
Türkmen boylarının Hîve'den kopuşu) · 1740 (Nâdir Şah'ın Hîve seferi) ·
1785 (Buhara'da Mangıt hanedanının başı) · 1860 (Türkmen fiilî
bağımsızlığının başı) · 1869 (Krasnovodsk) · 1881 (Mangışlak'ın Kafkasya
idaresine bağlanması) · 1884 (Merv'in Rusya'ya geçmesi).
**Gün verilen kırılmalar:** 1747-06-20 (Nâdir Şah'ın öldürülmesi),
1881-01-30 (Aşkabad), 1920-04-26 (Hârizm Halk Cumhuriyeti) ve mevcut
`yerlesimler.js` zincirinden aynen alınan 1335-12-01, 1507-05-24,
1510-12-02, 1736-03-08.

### 5.4 1600 tarihi — en zayıf halka
TDV MANGIŞLAK, bölgenin "XVI. yy başında" Hîve Hanlığı'na girdiğini ve
"yaklaşık bir asır sonra" Türkmen boylarının göreli bağımsızlığını geri
kazandığını yazıyor; kesin yıl vermiyor. `1600-01-01` bu iki ifadenin
toplamıdır, yüzyıl başına yaslanmıştır. **Bu dosyadaki en yumuşak tarih
budur.** Daha iyi bir kaynak bulunursa ilk düzeltilecek satır bu.

### 5.5 1873 Rus vasallığında kimlik DEĞİŞTİRİLMEDİ
Hîve 29 Mayıs 1873'te Rus vasalı oldu ama **hanedan ve idare yerinde kaldı**.
Harita bu yüzden 1873'te değil, son han Seyyid Abdullah'ın çekilmesi ve
26 Nisan 1920'de Hârizm Halk Cumhuriyeti'nin ilânında `rusya`ya dönüyor.
Karşı görüş savunulabilir; ama Osmanlı dışındaki devletler için "tâbi"
mekanizması (`v:`) yok, o yüzden ikisinden biri seçilmek zorundaydı.

### 5.6 Esterâbâd'ın 1723-1734 Rus penceresi Dihistan'a uygulanmadı
Komşu Esterâbâd kaydında 1723-09-23 → 1734-01-01 arası `rusya` var
(Petro'nun Hazar seferi / 1723 Petersburg antlaşması). Antlaşma Gîlân,
Mâzenderan ve Esterâbâd'ı kapsıyor; **Etrek'in kuzeyindeki Türkmen bozkırını
değil.** Dihistan ovası o pencerede `safevi` bırakıldı.

### 5.7 "iran" genel kimliğinin kullanımı
Oturum 4'ün (`yerlesimler_iran.js`) kurduğu geleneğe uyuldu: İlhanlı sonrası
Kertler/Serbedârîler (1335-1381), 1507-1510 Şeybânî Özbek işgali ve 1736
sonrası Afşar-Zend-Kaçar hanedanları ayrı kimlik almadığı için genel `iran`
ile boyanıyor. Komşu Nîşâbur, Tûs, Serahs, Kelât-ı Nâdirî, Kûçân kayıtları
birebir bu zinciri taşıyor; **bu dosya onlarla hizalıdır**, ayrı bir yorum
üretmedi. Bir gün `afsar`/`zend`/`kacar` kimlikleri eklenirse bu dosya da
onlarla birlikte güncellenmeli.

---

## 6. Eklenmeyenler ve gerekçeleri

| Eklenmedi | Gerekçe |
|---|---|
| **Kât (Beruni)** 41.693/60.752 | Yeni Ürgenç'e 18.7 km; bütün tarih boyunca aynı sahibi taşıyor, ayrı petek kazandırmıyor. TDV HÂRİZM'de adı geçiyor (Çağatay ulusu tarafında); kutu doğuya açılırken eklenebilir |
| **Aşkabad** 37.95/58.38 | Nesâ'ya 17 km; 1881'de Rus garnizon şehri olarak kuruldu, öncesi köydür. Nesâ'nın peteği aynı vahayı temsil ediyor |
| **Guryev / Atyrau** 47.11/51.92 | Hazar'ın kuzeydoğu köşesi; Astrahan'a ~300 km, bildirilen hatanın dışında. Görev tanımının üç önceliğinde yok |
| **Buhara, Semerkant, Çârcûy, Kerki, Taşkent, Hokand** | 62°D'nin doğusunda; `BOLGE` kutusu açılmadan çizilmezler |

### Sıradaki oturum için öneri — Aral kuzeyi
Ölçüm, kutu içinde kalan **tek büyük boşluğu** Aral'ın kuzeyinde gösteriyor:
55-62°D / 44-48°K, en kötü **567 km** (@47.75°K / 61.75°D). Kapatmak için
kabaca dört nokta yetiyor: **Kazalinsk** (45.76/62.10 — sınırda),
**Aral (Aralsk)** (46.79/61.66), **Emba/Aktöbe** (50.28/57.17),
**Guryev/Atyrau** (47.11/51.92). Bu kuşak Nogay, Kazak ve Rus sınır hattı
tarihidir; `kazak` ve `nogay` kimlikleri gerekecek. **Ayrı bir oturumun
işidir** — bu oturumun görev tanımında yok.

---

## 7. Kaynaklar

Hepsi TDV; her slug `<title>` ile doğrulandı (`CLAUDE.md` §4 ölü slug tuzağı).

| Slug | `<title>` doğrulaması | Ne için kullanıldı |
|---|---|---|
| `harizm` | HÂRİZM ✓ | ulus bölünmesi, Sûfî hanedanı, 1502, 1576 Amuderya, 1873, 1920 |
| `gurgenc` | GÜRGENÇ ✓ | 1221 yıkımı, 1388 Timur, 1645 sonrası Yeni Ürgenç |
| `urgenc` | ÜRGENÇ ✓ (→ `gurgenc`'e yönlendiriyor) | ad doğrulaması |
| `hive-hanligi` | HÎVE HANLIĞI ✓ | 1512 kuruluş, 1740 Nâdir Şah, 1873, 1920-02-02 / 1920-04-26 |
| `merv` | MERV ✓ | 1221, 1410 Şâhruh bendi, 1510 Safevî, Murad Han'ın yıkımı, 1884 |
| `mangislak` | MANGIŞLAK ✓ | Altın Orda, Hîve, Türkmen kopuşu, Kazak Aday, 1881 |
| `cagatay-hanligi` | ÇAĞATAY HANLIĞI ✓ | 1227-1370, Harezm'in Algu döneminde fethi, 1334 bölünme |
| `buhara-hanligi` | BUHARA HANLIĞI ✓ | Şeybânî 1500-1599, Canoğulları 1599-1785, **Mangıt 1785 sonrası** |
| `turkmenistan` | TÜRKMENİSTAN ✓ | 1869 Krasnovodsk, 24 Ocak 1881 Göktepe, 30 Ocak 1881 Aşkabad, 1884 Merv, "yaklaşık 1860-1884" fiilî bağımsızlık |
| `turkmenler` | TÜRKMENLER ✓ | `turkmen` kimliği için |
| `hokand-hanligi` | HOKAND HANLIĞI ✓ | ileriki oturum önerisi |

**TDV'de maddesi OLMAYANLAR** — arama sıfır sonuç verdi, zincirleri bölge
maddelerinden (`harizm`, `turkmenistan`) ve komşu yerleşim kayıtlarından
türetildi, dosyada tek tek işaretlendi: **Hazârasp**, **Nesâ** (şehir
maddesi yok, `nesai` hadis âlimidir), **Dihistan** (yalnız madde içlerinde
geçiyor), **Ebîverd**, **Küngrat**, **Çeleken**.

---

## 8. Entegrasyon oturumuna kontrol listesi

> **Not:** 1 ve 2 bu oturum sürerken entegrasyon oturumunca **zaten yapıldı**
> (commit `c5cc446` "Oturum 11 birleştirildi: Hazar doğusu ve Harezm —
> 16 yerleşim"). Birleşme doğrulandı: 16 kaydın 16'sı `yerlesimler.js`'te,
> `tur/lat/lon/k/kur/bit` ve `s:` zincirlerinde **0 fark**, hiçbirine `d:`
> veya `v:` eklenmemiş. `py arac/denetle.py` → `738 yerleşim, 35 sahipsiz
> (beklenen 35)`, `427 kırılma, 0 açık`, `SONUÇ: temiz`.

1. ✅ `data/yerlesimler_ortaasya.js` içindeki 16 kayıt `data/yerlesimler.js`'e
   eklendi.
2. ✅ `arac/denetle.py`: `BEKLENEN_YERLESIM` 722 → **738**,
   `BEKLENEN_SAHIPSIZ` 32 → **35** yapıldı. (`BEKLENEN_KIRILMA` ve
   `BEKLENEN_CELISKI_UST_SINIR` **değişmedi** — doğrusu budur.)
3. ⬜ `CLAUDE.md` §3'teki "567 yerleşimin 29'u sahipsiz" cümlesi zaten
   güncel değildi; **738/35** olarak düzeltilmeli. §1.5 tablosundaki
   "567 yerleşim" ve "29 nokta" satırları da öyle.
4. ⬜ `arac/renkler.py`: `turkmen` rengini `iran`'dan uzaklaştır (§3'teki
   bindirilmiş ΔE ≈ 7.6 ölçümü; 1860-1881 arası Kopet Dağ boyunca doğrudan
   sınırdaşlar) ve `timurlu` ile **birebir aynı** olan `#8d6e63`'ten çıkar.
5. ⬜ `py arac/uret_petek.py` — üretimde bu 16 nokta için **hiç** "UYARI boya"
   satırı çıkmamalı; çıkarsa renkler.py'ye eklenen dört kimlikten biri
   düşmüş demektir.
6. ⬜ Üretim sonrası gözle bak: **1578-1607 penceresinde Hazar'ın doğu kıyısı
   Osmanlı kırmızısı OLMAMALI** — bu oturumun tek amacı buydu. Harita
   üretilmeden bu göz denetimi yapılamaz; veri düzeyinde ölçüm §1'de.

---
---

# İKİNCİ TUR — merkez oturumun devam görevi

**Yazılan dosyalar:** `data/yerlesimler_ortaasya2.js` (7 nokta) ·
`oturumlar/OTURUM-11-KIMLIK.md` (kimlik künyesi + komşuluk çizgesi) · bu bölüm.
**`data/yerlesimler.js`'e DOKUNULMADI** — gerekçe §11.
**Commit atılmadı. `uret_petek.py` çalıştırılmadı.**

## 9. 🔴 BİRİNCİ TURUN AÇTIĞI İKİ HATA — ikisi de ölçüldü

Devam görevini yaparken kendi işimi ölçtüm ve **birinci partinin iki yeni hata
açtığını** buldum. İkisi de "sessiz hata" sınıfında (`OGRENILENLER` §1): üç
değişmez temiz raporluyor, harita yanlış çizecek.

### 9.1 Küngrat, emilme hatasını Hazar'dan Aral'ın kuzeyine taşıdı

Birinci partide Küngrat'ı (43.083/58.833) Aral'ın güney kıyısını kapatmak için
koydum. Ama Küngrat eklenince Aral'ın **kuzeyi** de ona bağlandı: o bozkırın
en yakın noktası artık Küngrat ve arada **475 km** var. Yani **Hîve Hanlığı'nın
rengi bütün Kazak bozkırına taşacaktı.**

Ölçüm — Kazak bozkırı kutusu (48-62°D / 43-52°K, 1705 ızgara hücresi, ölçüt 300 km):

| | En kötü uzaklık | 300 km'yi aşan hücre |
|---|---|---|
| mevcut 927 nokta | **721 km** | 729 |
| bu partinin 5 bozkır noktasıyla | **360 km** | **23** |

Kalan 23 hücre **51.75°K / 61.75°D** civarında — güney Ural / Turgay, yani
`OTURUM-16-KUZEY-DOGU-AVRUPA` kutusunun (44-62°K) içi. Bana ait değil,
o oturuma bırakıyorum.

### 9.2 🔴 ARAL GÖLÜ KARA MASKESİNDE YOK — daha büyük ve benden bağımsız

Bu benim açtığım hata değil ama **birinci partim onu görünür hâle getirdi**.
Natural Earth 10 m **kuruma sonrası** Aral'ı modelliyor. Göl katmanında (117 göl)
Aral adına yalnız iki artık var:

```
"South Aral Sea"  58.22-59.31°D / 44.42-46.01°K
"North Aral Sea"  59.98-61.53°D / 46.09-46.78°K
```

Oysa 1281-1923 boyunca Aral, kabaca **43.5-46.8°K / 58.2-61.8°D** kutusunu
dolduran ~68.000 km²'lik bir göldü. Ölçtüm: o kutunun maskede **KARA** olan
kısmı ≈ **88.000 km²** ve o alanı hangi peteğin yuttuğu şöyle (447 örnek hücre):

```
Küngrat                  424 hücre   %95
Üstyurt platosu (doğu)    23 hücre   %5
```

**Yani üretimden sonra Aral gölünün yerinde Hîve Hanlığı rengi bir gövde
duracak.** Kullanıcı bunu "Aral gölü neden Hîve olmuş" diye bildirecek.

Bu, projenin zaten tanıdığı bir sınıfın **aynadaki hâli**: modern baraj gölleri
(Nâsır, Keban, Atatürk, Esed, Mingeçevir) kasten çıkarılmıyor çünkü 1281-1923
atlasında **anakronik delik** açıyorlardı. Aral tersi — **küçüldüğü** için
modern maske onu **eksik** gösteriyor.

**Öneri** (`veri-kaynak/` ve `uret_petek.py` benim dosyam değil):
1960 kıyı çizgisiyle bir "tarihî Aral" poligonu göl çıkarma kümesine eklensin.
Kaba `box(58.2, 43.5, 61.8, 46.8)` bile bugünkü hâlden iyidir; doğrusu 1960
kıyı çizgisidir. **Aynı soru Hazar için de sorulmalı** — Hazar 1281-1923
arasında bugünküne yakındı, orada sorun görünmüyor, ama ölçülmedi.

⚠️ Bu partinin 7 noktasından hiçbiri tarihî Aral kutusunun içinde değil —
denetlendi. İlk denemede "Aral kuzeyi 46.80/61.00" ve "Aral kuzeybatısı
45.60/58.50" yazmıştım; **ikisi de tarihî gölün içine düşüyordu**, taşındılar
(47.20/61.50 ve 45.60/56.50).

## 10. Öncelik 1 — ölçüm, merkez oturumun listesini üç yerde düzeltiyor

Merkez oturum "62°D'nin batısında hâlâ seyreklik var" dedi ve bir hat verdi.
Ölçtüm; hattın çoğu **zaten kapalıydı**, gerçek boşluk başka yerdeydi.

### 10.1 Üç düzeltme

| Merkezin istediği | Ölçüm | Yaptığım |
|---|---|---|
| **Çârcûy** (39.083/63.583) | **62°D'nin DOĞUSU** — pencere dışı. Ayrıca `OTURUM-15-KOPRU-BOLGESI` kutusunun (60-70°D / 23-40°K) içinde | **yazmadım** — Oturum 15'in işi |
| **Kerki** (37.833/65.200) | aynı — pencere dışı, köprü kutusunda | **yazmadım** |
| **Nebitdağ** (Balkanabat) | **1933'te** Neftedag adıyla kurulmuş Sovyet petrol kasabası — atlasın 1281-1923 ufkunun dışında | **yazmadım**; o kıyıyı birinci partinin Çeleken ve Krasnovodsk noktaları taşıyor |
| **"Gürgenç" ve "Köneürgenç"** | **aynı şehir** | birinci partide "Köhne Ürgenç (Gürgenç)" olarak tek kayıt hâlinde zaten var |
| Hive · Merv · Dehistan · Nisa · Türkmenbaşı | birinci partide **var** | — |
| Serahs · Meşhed | çekirdekte **var** | — |

### 10.2 Gerçek boşluk nerede — vaha/çöl ölçütü ayrı ayrı

`MIMARI` §5: seyrek (bozkır/çöl) 300 km, normal 120 km. Turkmenistan çöldür ama
vahalar yerleşik tarım şeridi; ikisini ayrı ölçtüm.

| Alan | Ölçüt | Mevcut en kötü | Sonuç |
|---|---|---|---|
| Kopet Dağ eteği (Ahal) | 120 km | 145 km @38.50/56.30 | ✗ → Kızılarvat ile **130 km** |
| Etrek-Gürgan (Türkmensahra) | 120 km | 145 km @38.50/56.30 | ✗ → **127 km** |
| Merv-Murgab vahası | 120 km | **110 km** | ✓ |
| Karakum içi | 300 km | **212 km** | ✓ |
| Kızılkum batısı (62°D'ye kadar) | 300 km | **264 km** | ✓ |
| Üstyurt-Aral arası | 300 km | 378 km | ✗ → §9.1 partisi |

Yani **62°D'nin batısında, 46°K'nın güneyinde Orta Asya çöl ölçütünü zaten
her yerde geçiyordu.** Kalan sapma iki yerde: (a) Ahal'ın batı ucunda 145 km —
Kızılarvat ile 130'a indi, kalanı Kopet Dağ'ın yerleşim olmayan yamacında;
(b) Aral'ın kuzeyi — §9.1.

⚠️ **Dürüst sınır:** Ahal ve Etrek şeritlerinde 120 km ölçütü tam sağlanmıyor
(130 ve 127 km). Daha fazla nokta koymadım çünkü kalan sapma **dağ yamacında ve
tuz düzlüğünde** — orada tarihî yerleşim yok, nokta koymak çölü şehirlendirmek
olurdu (Oturum 14'ün Sahra kararıyla aynı mantık). Bu şeritleri "seyrek"
saymak da savunulabilir; o zaman ikisi de ✓ olur. **Ölçütü ben seçmedim,
ikisini de bastım.**

## 11. Öncelik 4 — `kur:` alanı

`DURUM.md`'nin ölçümü: 1281'de 851 nokta, 1923'te 892 — zaman çizgisi
neredeyse düz. Bu partide **üç kayıt** gerçek kuruluş tarihi taşıyor:

| Yerleşim | `kur:` | Dayanak |
|---|---|---|
| Aşkabad | **1881-01-30** | TDV TÜRKMENİSTAN: "Aşkabad işgal edildi (30 Ocak)"; Göktepe'nin düşüşünden 6 gün sonra. **Bu partide gün hassasiyetli tek tarih.** |
| Aktöbe | 1869-01-01 | Rus bozkır karakolu; yıl hassasiyetinde, TDV maddesi yok |
| Guryev (Atyrau) | 1640-01-01 | Yayık ağzında Guryev ailesinin kalesi; yıl hassasiyetinde, TDV maddesi yok |

Üçünün de kuruluş öncesi dönemi **sahipsiz değil**: aynı coğrafyayı taşıyan
dolgu noktaları (Emba, Üstyurt kuzeyi, Aral kuzeyi, Nesâ) o pencerede sahibi
yazıyor. Birinci turda Krasnovodsk + Çeleken çiftinde kurulan desen.

## 12. Neden `data/yerlesimler.js`'e yazmadım — kilit

Merkez oturum "yazabilirsin ama dosya **çok sahipli ve KİLİTLİ**, kilidi ilân
eden değil BIRAKAN taraf açar" dedi. **Kimse bana devir yapmadı.** Üstelik
yazarken ölçtüm: başka bir oturumun girdi dosyalarını okuyan **iki ölçüm betiği
koşuyordu** (PID 18084 / 19100 — pencere genişletme maliyeti ölçümü;
373 sn CPU). `uret_petek.py` değildi, ama `OGRENILENLER` §4'teki kayıt tam bu:
*"iki kez de 'dosya temiz görünüyor, kilit yok' diye bakıp yazdım"* — yedi
üretim böyle gitti.

Ayrı dosya **güvenli**, çünkü `arac/girdi.py` glob değil **izin listesi**
kullanıyor ve kendi başlığında gerekçesini yazıyor: bu dosya
`GIRDI_DOSYALARI`'na eklenmedikçe motor onu okumaz. Yani depoda durması
mükerrer nokta üretmez — merkez oturumun birinci parti için haklı olarak
endişelendiği durum (`data/` altında kalan **zaten birleştirilmiş** kopya)
bundan farklıdır.

**Bedeli:** merkeze bir merge adımı + `girdi.py`'ye bir satır.
**Alternatifin bedeli:** sekizinci boşa giden üretim.

## 13. Merge provası — motorun okuyucusuyla

`OGRENILENLER` §2: *"bir prova, doğrulamak istediği aracın okuyucusuyla
yapılmalı; toleranslı okuyucuyla yapılan prova katı aracı doğrulamaz."*
Bu yüzden prova `arac/girdi.py` ile yapıldı (`denetle.py`'nin toleranslı
çeviricisiyle değil) ve `girdi.VARSAYILAN` normalizasyonundan sonra motorun
`y["d"]` okuyabildiği tek tek denetlendi — Afrika partisinin `KeyError: 'd'`
vakası budur.

| Denetim | Sonuç |
|---|---|
| `girdi.oku_dosya` dosyayı okudu | ✓ 7 nokta |
| Ad çakışması (927 kayda karşı) | **0** |
| Değişmez 1 — sahipsizlik | 34 → **34** (+0) |
| Değişmez 2 — kırılma / açık | 451 → 451 / **0 → 0** |
| Değişmez 3 — çelişki | 381 → **381** (+0) |
| Dönem sağlığı (ters/sıfır/çakışma/boşluk) | **0** |
| 3 km yakınlık (`girdi.yakin_ciftler`) | bu partiyi ilgilendiren **0** |
| Kutu içi · karada · göl dışı | **7/7** |
| Tarihî Aral kutusunun dışında | **7/7** |

**Prova TEMİZ.** Değişmez 2'nin hiç etkilenmemesi beklenendir: 7 kaydın
hiçbirinde `d:` veya `v:` yok, hepsi `s:` — kronoloji maddesi gerekmiyor.

⚠️ İki not:
- Canlı girdi provayı yaparken **917 değil 927**'ydi; başka bir oturum arada
  10 nokta eklemiş. Sayılar o ana aittir.
- Mevcut kümede 3 km'den yakın **iki çift** var ve **ikisi de doğru**:
  `Anadolu Hisarı ↔ Rumeli Hisarı` 1.54 km (Boğaz'ın iki yakası) ve
  `Budin ↔ Peşte` 1.57 km (Tuna'nın iki yakası). Kimse bunları "mükerrer"
  diye birleştirmesin.

## 14. Öncelik 3 — köprü şeridi: ayrı kalsın

`oturumlar/OTURUM-13-ASYA görevi` oturumuna yazdım, cevabını bekliyorum.
**Önerim: şerit benim dosyama GİRMESİN.** Gerekçeler:

1. Zaten kendi brief'i ve kendi dosyası var: `oturumlar/OTURUM-15-KOPRU-BOLGESI.md`
   → `data/yerlesimler_kopru.js`, 60-70°D / 23-40°K, hedef 55-80 nokta.
   Oturum 13 boşluğu kendi ilerleme notunda oraya devretmiş.
2. Coğrafya örtüşmüyor: benim bölgem 35-47°K, köprü brief'i 23-40°K.
3. Tek dosya = tek sahip (`CLAUDE.md` §7). Üçüncü bir dosyaya bölmek
   Herat / Serahs / Meşhed'i mükerrer yazma riski doğuruyor.

**Ölçtüğüm iki şey köprü kararını doğruluyor:**
- `yerlesimler_asya.js`'in 344 noktasından **66°D'nin batısında yalnız 1 tane**
  var: Kandehar (65.710/31.610). 62-65.7°D arası gerçekten tamamen boş.
- Merkezin bana verdiği Çârcûy ve Kerki **o kutunun içinde** — köprünün işi.

Dikiş listesini (benim 23 noktamın koordinatları, yeniden yazılmaması için)
Oturum 13'e gönderdim.

## 15. Bu turun kontrol listesi — merkeze

1. ⬜ `data/yerlesimler_ortaasya2.js` (7 nokta) `yerlesimler.js`'e birleştirilsin
   **ya da** `girdi.py`'nin `GIRDI_DOSYALARI` listesine eklensin. Kilidi sen
   tutuyorsun; hangisini seçeceğini sen bil.
2. ⬜ Birleştirilirse `denetle.py`: `BEKLENEN_YERLESIM` +7.
   `BEKLENEN_SAHIPSIZ` **değişmiyor** (bu partide kasten sahipsiz nokta yok),
   `BEKLENEN_KIRILMA` ve `BEKLENEN_CELISKI_UST_SINIR` de **değişmiyor**.
3. ⬜ `arac/renkler.py` (Oturum 16): `nogay` ve `kazak` eklensin —
   künye ve komşuluk çizgesi `oturumlar/OTURUM-11-KIMLIK.md`'de.
   Yazım tercihi `kazak` mı `kazak-hanligi` mı: karar sizin, bu dosyada
   değişecek satır sayısı 3.
4. 🔴 ⬜ **Tarihî Aral poligonu** göl çıkarma kümesine eklensin (§9.2).
   Bu, 7 noktalık partiden **daha önemli** — ~88.000 km²'lik bir gövde
   yanlış devlete boyanıyor.
5. ⬜ `arac/renkler.py`: `turkmen` rengi `iran`'dan uzaklaştırılsın ve
   `timurlu` ile aynı hex'ten çıkarılsın (birinci turdan devreden borç).
6. ⬜ Üretim sonrası `OGRENILENLER` §10 gereği **ölç**: 1578-1607'de Hazar'ın
   doğu kıyısında ve 1512-1868'de Kazak bozkırında boyanan alan gerçekten
   değişti mi? Δ alan sıfırsa düzeltme kullanıcıya görünmüyor demektir.

# Asya partisinin devlet kimlikleri — DSATUR girdisi ve renk analizi

**Ölçüm tarihi:** 2026-07-30 · **Ölçen:** Oturum 13 (Asya)
**`arac/renkler.py`'ye DOKUNULMADI.** Bu belge yalnız ölçüm ve öneri taşır.

> **SÜRÜM 2** — Merkez oturumun düzeltmesi ve Oturum 12'nin İtalyan şehir
> devletleri ölçümü üzerine yeniden yazıldı. Ölçüm yöntemi Oturum 12'ninkiyle
> aynı hâle getirildi (shapely `voronoi_diagram`, 7 kesit, iki komşuluk
> varyantı). **İki kendi hatam düzeltildi**, §1.4'te açıkça yazılı.

---

## 0. Baş sonuç

**Asya partisi mevcut renk paletiyle boyanabilir. Yeni renk gerekmiyor, kimlik
birleştirmesi de gerekmiyor.**

| Ölçüm | Sonuç |
|---|---|
| Kesit başına en çok kaç renk (gerçekçi komşuluk) | **5** |
| Kesit başına en çok kaç renk (muhafazakâr) | **5** |
| Kümülatif, her kimliğe tek sabit renk (gerçekçi) | **7** |
| Kümülatif, her kimliğe tek sabit renk (muhafazakâr) | **8** |
| `renkler.py`'de bugün kullanılan | 10-12 |
| **Yeni renk gerekiyor mu?** | **Hayır** |

---

## 1. İki farklı "kaç renk" sorusu var — ve ikisi farklı cevap veriyor

Bu, benim ilk raporumun 8 demesiyle Oturum 12'nin 5 demesi arasındaki farkın
sebebi. İkisi de doğru, çünkü **farklı soruları** cevaplıyorlar:

- **KESİT SORUSU** — *"1600 yılına bakan bir kullanıcı ekranda kaç farklı renk
  görür?"* Cevap: **en çok 5.** Bu, okunabilirliğin sorusudur.
- **KÜMÜLATİF SORU** — *"Her devlete bütün atlas boyunca TEK sabit renk verirsek
  kaç renk gerekir?"* Cevap: **7 (gerçekçi) / 8 (muhafazakâr).**

**`renkler.py` mimarisi kümülatif olanı zorunlu kılıyor:** `BOYALAR` sözlüğü
her kimliğe tek hex atıyor, tarihe göre değişmiyor. Bir devletin rengi 1400'de
mavi, 1600'de yeşil olamaz — kullanıcı onu iki ayrı devlet sanar.

> **Bu yüzden bağlayıcı sayı 7'dir (gerçekçi komşulukla), 5 değil.**
> Ve 7, `renkler.py`'nin kendi başlığında yazan sayının **aynısıdır** —
> yani Asya partisi renk bütçesini hiç zorlamıyor.

### 1.1 Kesit kesit ölçüm (Oturum 12'nin yöntemi)

shapely `voronoi_diagram(MultiPoint(noktalar), envelope=box(-13,-13,151,67))`,
1 271 nokta → 1 271 hücre, eşleşmeyen hücre 0.
Komşuluk iki varyantta ölçüldü:
- **muhafazakâr** — iki hücrenin ortak sınırı varsa komşu (deniz aşırı dahil):
  **3 788 kenar**
- **gerçekçi** — ortak sınır **karayı kesiyorsa** komşu: **3 173 kenar**

| Kesit | Sahnede kimlik | Bunun kaçı Asya | Muhafazakâr | Gerçekçi |
|---|---|---|---|---|
| 1300 | 116 | 51 | 5 renk (309 kenar) | **4 renk** (239) |
| 1400 | 116 | 56 | 5 renk (318) | **4 renk** (248) |
| 1500 | 111 | 65 | 5 renk (285) | 5 renk (218) |
| 1600 | 93 | 57 | 5 renk (248) | **4 renk** (193) |
| 1700 | 84 | 52 | 5 renk (237) | 5 renk (189) |
| 1800 | 85 | 52 | 5 renk (245) | **4 renk** (199) |
| 1900 | 63 | 39 | 5 renk (177) | 5 renk (136) |

**Hiçbir kesitte 5 rengi aşmıyor** — Oturum 12'nin Batı Avrupa için bulduğunun
birebir aynısı. Merkez oturumun *"113 yeni kimlik DSATUR'u ciddi zorlayacak"*
endişesi Asya için de **yersiz çıktı.**

⚠️ Deniz aşırı komşuluğun bedeli ölçüldü ve beklendiği gibi Asya'da anlamlı:
615 kenar (3 788 → 3 173) deniz aşırıdır ve dört kesitte rengi 5'ten 4'e
düşürüyor. Endonezya-Filipin-Japonya takımadaları yüzünden bu fark Avrupa'dakinden
büyük; bu yüzden **iki varyant ayrı ayrı raporlandı.**

### 1.2 Bu oturumun 98 yeni kimliğinden kaçı aynı anda sahnede

| Kesit | 1300 | 1400 | 1500 | 1600 | 1700 | 1800 | 1900 |
|---|---|---|---|---|---|---|---|
| **98'den sahnede olan** | 42 | 43 | **49** | 41 | 27 | 30 | 20 |

**En yüksek: 51 kimlik aynı anda (1514).** Yani 98 kimliğin yarısından fazlası
hiçbir zaman aynı kareye girmiyor. 1700 sonrası sayı hızla düşüyor çünkü
Bâbürlü, Qing ve sömürge idareleri küçük devletleri yutuyor.

### 1.3 Renk paylaşımı adayları — asıl tasarruf yolu

Merkez oturumun işaret ettiği doğru kaldıraç bu. Ölçüldü:

> **98 kimlikten kurulabilecek 4 753 çiftin 1 808'i (%38) hiçbir yıl aynı anda
> sahnede değil.** Bu çiftlerin her biri güvenle **aynı rengi paylaşabilir.**

Salt eş-zamanlılık gözetilirse 98 kimlik **51 renge** sığıyor; komşuluk da
hesaba katılınca (§1) **7'ye** iniyor. Yani paylaşım zaten DSATUR'un doğal
sonucu — ayrıca elle liste tutmaya gerek yok, **DSATUR'u çalıştırmak yeter.**

Örnek, hiç eş-zamanlı olmayan üçlüler (birebir aynı rengi alabilirler):

| Kimlik A | Kimlik B | Neden çakışmıyor |
|---|---|---|
| `pagan` (…1313) | `konbaung` (1752…) | dört yüzyıl arayla |
| `yadava` (…1318) | `haydarabad-nizam` (1724…) | aynı toprak, dört yüzyıl arayla |
| `singhasari` (…1292) | `yogyakarta` (1755…) | aynı ada, beş yüzyıl arayla |
| `madurai-sultanligi` (1335-1378) | `travankur` … | çakışmıyorlarsa paylaşır |

⚠️ **Ama dikkat:** paylaşım listesini elle tutmak gereksiz ve hataya açık.
`renkler.py`'ye kimlikler eklenip DSATUR koşturulursa paylaşım kendiliğinden
çıkar. Elle liste yalnız **palet küçük tutulmak istenirse** gerekir.

### 1.4 ⚠️ İKİ HATAMI DÜZELTİYORUM

**Hata 1 — `laos` birleştirmesine "bedava" demiştim, değil.**
Sürüm 1'de `laos` (lan-xang + laos-kralliklari) için zamansal bedel **0**
yazmıştım; ölçüm çıktım **2** diyordu, tabloya yanlış geçirmişim. İki kırılma
demek, Lan Xang'ın **1707'deki üçe bölünmesinin haritadan silinmesi** demek.
Merkez oturumun yeni ölçütü ("ayrı boyanması tarihî olarak anlamsız olmalı")
gereği bu birleştirme **reddedilmelidir.**

**Hata 2 — `mogol` birleştirmesini önermiştim, geri çekiyorum.**
Ölçüm doğruydu (0 zamansal, 0 mekânsal bedel) ama ölçüm eksik soruyordu.
`kuzey-yuan` (1368-1635, Moğolistan), `hosut` (1636-1724, **Kokonor/Qinghai**)
ve `mogolistan` (1911-1923) **farklı coğrafyalarda** duruyor. Tek kimlikte
toplamak, Kokonor'u Moğolistan'ın devamı gibi gösterir — Oturum 12'nin
bulduğu **"hayalet birleşik devlet"** hatasının aynısı, yalnız zaman ekseninde.

> ### 🔻 DÜZELTİLMİŞ ÖNERİ: 98 → 98. Hiçbir birleştirme önerilmiyor.
>
> Sürüm 1'de "98 → 95" demiştim. İki adayın ikisi de yeni ölçütü geçmiyor.
> Zaten §1'de ölçüldüğü gibi birleştirme **tek renk bile kazandırmıyor.**

### 1.5 Birleştirme neden faydasız — kendi ölçümüm de aynı sonuca vardı

Merkez oturumun uyarısından bağımsız olarak sürüm 1'de şunu ölçmüştüm ve
sonuç Oturum 12'ninkiyle örtüşüyor:

| Senaryo | Kimlik | Kümülatif renk |
|---|---|---|
| Birleştirme yok | 246 | 8 |
| **90 kimlik → 15 gruba indirildi (%30 azalma)** | **171** | **8** |

**%30 kimlik indirimi renk sayısını hiç düşürmedi.** Sebep Oturum 12'nin
söylediğinin aynısı: birleşik düğüm komşularının **bileşimini** alıyor, yani
çizgede daha kısıtlı bir düğüm oluyor.

Birleştirmenin bedeli iki eksende ölçüldü — **yalnız birine bakmak yanıltır**:

| Grup | Üye | Zamansal (kaybolan kırılma) | Mekânsal (silinen sınır) | Karar |
|---|---|---|---|---|
| `mogol` (kuzey-yuan+hosut+mogolistan) | 3 | 0 | 0 | ❌ farklı coğrafya (§1.4) |
| `laos` | 2 | **2** | 0 | ❌ 1707 bölünmesi silinir |
| `kore` (goryeo+joseon) | 2 | 15 | 0 | ❌ 1392 hanedan değişimi silinir |
| `hint-islam` (delhi+sur+babur) | 3 | 70 | 34 | ❌ |
| `hint-bolgesel` | 6 | 2 | 306 | ❌ Gucerât–Mâlvâ sınırı silinir |
| `hint-hindu` | 7 | **0** | **442** | ❌ 1281 karesi tek renk olur |
| `dekken` (behmeni+beş halef) | 6 | 23 | **2 293** | ❌ |
| `birmanya` | 6 | 27 | 2 700 | ❌ Arakan–Toungoo sınırı silinir |
| `dogu-turkistan` | 4 | 11 | 854 | ❌ |
| `cava` | 8 | 14 | 493 | ❌ Yogyakarta–Surakarta bölünmesi silinir |
| `siyam` | 5 | 9 | 487 | ❌ |
| `vietnam` | 7 | 34 | 452 | ❌ Trịnh–Nguyễn bölünmesi silinir |
| `japonya` | 6 | 117 | 71 | ❌ |
| `cin` | 9 | **297** | 983 | ❌ en pahalı |
| `takimada` (16 ada devleti) | 16 | 1 | **11 242** | ❌ en yıkıcı |

`hint-hindu` satırı ölçütün neden çift olması gerektiğini gösteriyor: zamansal
bedeli **sıfır** ama mekânsal bedeli **442** — Yâdava, Kâkatiya ve Hoysala
1281-1310 arasında **aynı anda ve yan yana** duruyor. Yalnız zamansal bakan
biri "bedava" der ve 1281 karesini tek renge boyar.

`takimada` satırı da aynı tuzağın uç örneği: zamansal bedel **1**, mekânsal
bedel **11 242** — Ternate ile Tidore 11 km arayla iki ayrı sultanlıktır ve
tam da o ayrım baharat savaşlarının konusudur.

---

## 2. `renkler.py`'ye eklenecekler — üç sınıf

Asya partisi 147 kimlik kullanıyor. Ölçülmüş dağılım:

| Sınıf | Sayı | Ne gerekiyor |
|---|---|---|
| `renkler.py`'de **TANIMLI**, doğrudan kullanıldı | **12** | hiçbir şey |
| `devletler.js`'te **VAR**, `renkler.py`'de yok | **37** | yalnız renk |
| **YENİ öneri** (hiçbir yerde yok) | **98** | ad + renk (+ `devletler.js` kaydı) |

**Tanımlı 12:** `ingiltere` · `fransa` · `portekiz` · `ispanya` · `hollanda` ·
`danimarka` · `almanya` · `rusya` · `timurlu` · `cagatay` · `safevi` · `iran`

**Dizinde olup renksiz 37:** `abd` · `ace-sultanligi` · `ayutthaya` ·
`babur-imparatorlugu` · `behmeni` · `brunei-sultanligi` · `cungar` ·
`delhi-sultanligi` · `edo-bakufu` · `goryeo` · `hollanda-dogu-hint` ·
`ingiliz-hindistani` · `ingiliz-malaya` · `joseon` · `kamakura` ·
`kamboc-kralligi` · `konbaung` · `le-hanedani` · `majapahit` ·
`malaka-sultanligi` · `maratha` · `mataram-sultanligi` · `meiji-japonya` ·
`meysur` · `ming-hanedani` · `muromachi` · `nguyen-hanedani` · `qing-hanedani` ·
`ryukyu` · `sih-imparatorlugu` · `siyam-chakri` · `sulu-sultanligi` ·
`tibet-ganden-phodrang` · `toungoo` · `vijayanagara` · `yakub-beg` ·
`yuan-hanedani`

> Bu 37'nin tam adı, aralığı ve merkezi **zaten `devletler.js`'te**; oradan
> okunmalı, burada tekrarlanmadı. Üçünün kullanım aralığı dizindekinden
> geniştir ve gerekçesi `OTURUM-13-ILERLEME.md` §B'dedir
> (`sih-imparatorlugu`, `meysur`, `yakub-beg`).

98 yeni kimliğin tam adı, aralığı, merkezi ve kaynağı
**`oturumlar/OTURUM-13-ILERLEME.md` §C**'dedir — burada tekrarlanmıyor.
Aşağıdaki §7 tablosu onun yerine **DSATUR'un ihtiyaç duyduğu** bilgiyi veriyor:
komşuluk ve derece.

---

## 3. Asıl darboğaz: lejant, renk değil

Asya canlıya alınırsa haritada gövdesi olan devlet **109 → 244** olur. Bunlar
8 rengi paylaşır, yani **renk artık kimliği taşımaz** — `renkler.py`'nin kendi
başlığındaki kural devreye girer: *"Renk KİMLİK taşımaz, AYIRMA işi görür.
Kimliği etiket taşır."*

Bu kural bugün 109 devletle zorlanıyor, 244 devletle **çöker**: aynı sahnede
otuz farklı devlet aynı üç rengi paylaşacak.

**Öneri (Oturum 1 / arayüz işi, bu oturumun yetkisinde değil):**
- Lejant **o anki kesitte sahnede olan** devletleri göstersin, hepsini değil.
  Ölçüldü: aynı anda en çok **133 kimlik** sahnede (1403), ortalama çok daha az.
- Renk + **etiket** birlikte okunmalı; etiketsiz renk 244 devlette anlamsız.

---

## 4. ⚠️ %30 saydamlık uyarısı — bu partiye özel

`renkler.py` başlığı: *"Dolgu %30 saydamlıkla fiziki altlığın üzerine biniyor…
bu karışım renk farklarını yaklaşık üçte bire sıkıştırır."*

Asya partisinde bu uyarı iki yerde kritik:

1. **Ternate ↔ Tidore** — 11.2 km arayla iki ayrı sultanlık, 1281-1663 boyunca
   sürekli sahnede ve sürekli komşu. İki petek ekranda yan yana birkaç pikseldir;
   bindirilmiş ΔE düşükse ayrım tamamen kaybolur.
2. **Yogyakarta ↔ Surakarta** — 52 km arayla, 1755'ten sonra Cava'nın
   bölünmesinin **tek** göstergesi.
3. **le-hanedani ↔ nguyen-beyligi** — 1600-1774 Trịnh–Nguyễn bölünmesi;
   Gianh ırmağında doğrudan sınırdaş ve 174 yıl boyunca sahnede.

Bu üç çifte **ham hex'te değil, bindirilmiş renkte** ölçülmüş ΔE ile renk
verilmelidir.

---

## 5. Renk eklerken uyulacak sıra

**Birleştirme yok** (§1.4). Yapılacak iş yalnız renk atamaktır:

1. **98 yeni + 37 dizin kimliği birlikte** `renkler.py`'ye eklenir. İkisi
   ayrı turlarda eklenirse parti yarım boyanır ve renksiz delik açılır.
2. Ekleme sırası **derece** sırasına göre olsun (§7 tablosundaki "derece"
   sütunu): yüksek dereceli kimlik önce renk alsın — DSATUR'un doğal sırası
   budur ve palet küçük tutulmak istenirse fark yaratır.
3. Renk **paylaşımı** ayrıca planlanmasın; §1.3'te ölçüldü, DSATUR'u
   çalıştırmak yeterli. 98 kimliğin çiftlerinin %38'i hiç eş-zamanlı değil ve
   paylaşımı algoritma kendiliğinden buluyor.
4. §4'teki **üç kritik çift** için renk, ham hex'te değil **bindirilmiş**
   (%30 saydamlık) renkte ΔE ölçülerek verilsin.

---

## 6. Kaç renk gerçekten gerekiyor — özet tablo

| Soru | Ölçülmüş cevap |
|---|---|
| **Kesit başına en çok (gerçekçi komşuluk)** | **4-5** |
| Kesit başına en çok (muhafazakâr) | 5 |
| **Kümülatif, tek sabit renk (gerçekçi)** | **7** ← `renkler.py` mimarisi bunu ister |
| Kümülatif, tek sabit renk (muhafazakâr) | 8 |
| Asya olmadan kümülatif | 7 |
| 90 kimlik 15 gruba inerse | 8 (değişmiyor) |
| Çizgedeki en büyük klik (alt sınır) | 7 |
| `renkler.py`'de bugün kaç renk var? | 10-12 |
| **Yeni renk gerekiyor mu?** | **Hayır — mevcut palet yetiyor** |

⚠️ Kümülatif sayının 7 mi 8 mi olduğu **komşuluk tanımına** bağlı: deniz aşırı
kenarlar sayılırsa 8, yalnız karada dokunanlar sayılırsa 7. Motor petekleri
karaya kırptığı için **gerçekçi olan 7'dir**; 8, güvenli üst sınır olarak
duruyor.

---

## 7. 98 yeni kimlik — DSATUR girdi tablosu

Sütunlar:
- **aralık** — bu dosyada kullanıldığı en erken `f` ve en geç `t` (devletin
  gerçek ömrü değil, **haritada boyandığı** aralık)
- **pencere** — kaç sahiplik penceresinde kullanıldığı (renk önceliği)
- **derece** — komşuluk çizgesindeki komşu kimlik sayısı (DSATUR sırası)
- **komşuları** — 1281-1923 arasında herhangi bir yıl **sınırdaş olduğu** bütün
  kimlikler. Bu liste ölçülmüştür, elle yazılmamıştır.

⚠️ İzole (hiç komşusu olmayan) kimlik **yok**; 98'inin de en az bir komşusu var,
yani hiçbiri "renk vermesek de olur" değil.

| id | aralık | pencere | derece | komşuları |
|---|---|---|---|---|
| `afgan-durrani` | 1747–1834 | 15 | 12 | `afganistan`, `babur-imparatorlugu`, `bahavelpur`, `buhara`, `cungar`, `hive`, `iran`, `ladak`, `qing-hanedani`, `racput`, `sih-imparatorlugu`, `sind` |
| `afganistan` | 1826–1923 | 6 | 13 | `afgan-durrani`, `buhara`, `cin-cumhuriyeti`, `hive`, `ingiliz-hindistani`, `ingiltere`, `iran`, `qing-hanedani`, `rusya`, `sih-imparatorlugu`, `sind`, `turkmen`, `yakub-beg` |
| `ahmednagar` | 1490–1636 | 8 | 7 | `babur-imparatorlugu`, `behmeni`, `bicapur`, `bidar`, `gucerat-sultanligi`, `malva-sultanligi`, `portekiz` |
| `ahom` | 1281–1817 | 2 | 14 | `babur-imparatorlugu`, `bengal-nevabligi`, `bengal-sultanligi`, `delhi-sultanligi`, `guney-ming`, `ingiliz-hindistani`, `manipur`, `ming-hanedani`, `qing-hanedani`, `san-fan`, `sur-hanedani`, `tibet`, `tibet-ganden-phodrang`, `yuan-hanedani` |
| `ainu` | 1281–1550 | 2 | 4 | `joseon`, `kamakura`, `kenmu`, `muromachi` |
| `angkor-kmer` | 1281–1698 | 3 | 10 | `ayutthaya`, `campa`, `cohor-sultanligi`, `kamboc-kralligi`, `lan-xang`, `le-hanedani`, `malaka-sultanligi`, `malay-sultanliklari`, `nguyen-beyligi`, `sukhothai` |
| `arakan` | 1281–1785 | 2 | 15 | `ava`, `babur-imparatorlugu`, `bengal-nevabligi`, `bengal-sultanligi`, `delhi-sultanligi`, `hanthawaddy`, `ingiliz-hindistani`, `ingiltere`, `konbaung`, `manipur`, `maratha`, `orissa`, `pagan`, `sur-hanedani`, `toungoo` |
| `ava` | 1313–1555 | 4 | 8 | `arakan`, `bengal-sultanligi`, `delhi-sultanligi`, `hanthawaddy`, `lan-na`, `manipur`, `san-devletleri`, `toungoo` |
| `avad` | 1722–1856 | 9 | 9 | `babur-imparatorlugu`, `bengal-nevabligi`, `cammu-kesmir`, `gond-kralliklari`, `ingiliz-hindistani`, `ladak`, `maratha`, `nepal`, `sih-imparatorlugu` |
| `azuchi-momoyama` | 1567–1615 | 31 | 7 | `banda-adalari`, `edo-bakufu`, `joseon`, `muromachi`, `portekiz`, `ryukyu`, `ternate-sultanligi` |
| `bahavelpur` | 1748–1923 | 1 | 6 | `afgan-durrani`, `babur-imparatorlugu`, `ingiliz-hindistani`, `racput`, `sih-imparatorlugu`, `sind` |
| `bali-kralliklari` | 1478–1908 | 2 | 9 | `banjar-sultanligi`, `demak`, `gova-makassar`, `hollanda-dogu-hint`, `ingiltere`, `majapahit`, `mataram-sultanligi`, `timor-beylikleri`, `yogyakarta` |
| `banda-adalari` | 1281–1621 | 1 | 11 | `azuchi-momoyama`, `edo-bakufu`, `hollanda-dogu-hint`, `ispanya`, `kamakura`, `kenmu`, `muromachi`, `portekiz`, `ternate-sultanligi`, `tidore-sultanligi`, `timor-beylikleri` |
| `banjar-sultanligi` | 1526–1860 | 1 | 9 | `bali-kralliklari`, `brunei-sultanligi`, `demak`, `gova-makassar`, `hollanda-dogu-hint`, `ingiltere`, `majapahit`, `mataram-sultanligi`, `sarawak-brooke` |
| `banten-sultanligi` | 1527–1811 | 1 | 6 | `hollanda-dogu-hint`, `ingiltere`, `pagaruyung`, `palembang-sultanligi`, `somali`, `yogyakarta` |
| `bengal-nevabligi` | 1717–1764 | 13 | 13 | `ahom`, `arakan`, `avad`, `babur-imparatorlugu`, `fransa`, `ingiliz-hindistani`, `ingiltere`, `konbaung`, `manipur`, `maratha`, `nepal`, `tibet-ganden-phodrang`, `toungoo` |
| `bengal-sultanligi` | 1338–1592 | 22 | 13 | `ahom`, `arakan`, `ava`, `babur-imparatorlugu`, `delhi-sultanligi`, `golkonda`, `gond-kralliklari`, `manipur`, `nepal`, `orissa`, `tibet`, `toungoo`, `yuan-hanedani` |
| `berar` | 1490–1574 | 1 | 4 | `babur-imparatorlugu`, `bidar`, `gucerat-sultanligi`, `malva-sultanligi` |
| `bharatpur-cat` | 1733–1923 | 1 | 4 | `babur-imparatorlugu`, `ingiliz-hindistani`, `maratha`, `racput` |
| `bhopal` | 1707–1923 | 1 | 6 | `babur-imparatorlugu`, `gond-kralliklari`, `haydarabad-nizam`, `ingiliz-hindistani`, `maratha`, `racput` |
| `bicapur` | 1490–1687 | 16 | 14 | `ahmednagar`, `babur-imparatorlugu`, `behmeni`, `bidar`, `fransa`, `golkonda`, `gucerat-sultanligi`, `ingiltere`, `maratha`, `meysur`, `nayak-devletleri`, `portekiz`, `umman`, `vijayanagara` |
| `bidar` | 1489–1619 | 2 | 7 | `ahmednagar`, `babur-imparatorlugu`, `behmeni`, `berar`, `bicapur`, `golkonda`, `vijayanagara` |
| `cammu-kesmir` | 1846–1923 | 3 | 7 | `avad`, `cin-cumhuriyeti`, `ingiliz-hindistani`, `nepal`, `qing-hanedani`, `sih-imparatorlugu`, `yakub-beg` |
| `campa` | 1281–1832 | 5 | 14 | `angkor-kmer`, `brunei-sultanligi`, `filipin-racaliklari`, `ho-hanedani`, `ingiltere`, `ispanya`, `lan-xang`, `le-hanedani`, `ming-hanedani`, `nguyen-beyligi`, `nguyen-hanedani`, `tay-son`, `tran-hanedani`, `yuan-hanedani` |
| `cavnpur-sultanligi` | 1394–1479 | 8 | 6 | `delhi-sultanligi`, `gond-kralliklari`, `ladak`, `nepal`, `orissa`, `racput` |
| `cin-cumhuriyeti` | 1911–1923 | 85 | 16 | `abd`, `afganistan`, `almanya`, `cammu-kesmir`, `fransiz-cinhindi`, `hive`, `ingiliz-hindistani`, `ingiltere`, `meiji-japonya`, `mogolistan`, `nepal`, `portekiz`, `qing-hanedani`, `rusya`, `san-devletleri`, `tibet-ganden-phodrang` |
| `cohor-sultanligi` | 1528–1923 | 1 | 13 | `angkor-kmer`, `brunei-sultanligi`, `fransiz-cinhindi`, `hollanda-dogu-hint`, `ingiliz-malaya`, `ingiltere`, `malay-sultanliklari`, `nguyen-beyligi`, `nguyen-hanedani`, `portekiz`, `sarawak-brooke`, `siyam-chakri`, `tay-son` |
| `cunagadh` | 1748–1923 | 1 | 7 | `babur-imparatorlugu`, `ingiliz-hindistani`, `maratha`, `portekiz`, `racput`, `sind`, `umman` |
| `dashun` | 1641–1647 | 12 | 5 | `guney-ming`, `hosut`, `ming-hanedani`, `qing-hanedani`, `tibet-ganden-phodrang` |
| `demak` | 1478–1625 | 4 | 4 | `bali-kralliklari`, `banjar-sultanligi`, `majapahit`, `mataram-sultanligi` |
| `filipin-racaliklari` | 1281–1571 | 2 | 12 | `brunei-sultanligi`, `campa`, `ispanya`, `le-hanedani`, `magindanao-sultanligi`, `ming-hanedani`, `nguyen-beyligi`, `portekiz`, `ryukyu`, `sulu-sultanligi`, `ternate-sultanligi`, `yuan-hanedani` |
| `fransiz-cinhindi` | 1859–1923 | 16 | 12 | `abd`, `brunei-sultanligi`, `cin-cumhuriyeti`, `cohor-sultanligi`, `ispanya`, `kamboc-kralligi`, `laos-kralliklari`, `nguyen-hanedani`, `qing-hanedani`, `san-devletleri`, `sarawak-brooke`, `siyam-chakri` |
| `golkonda` | 1512–1687 | 6 | 11 | `ace-sultanligi`, `babur-imparatorlugu`, `bengal-sultanligi`, `bicapur`, `bidar`, `gond-kralliklari`, `hanthawaddy`, `ingiltere`, `orissa`, `toungoo`, `vijayanagara` |
| `gond-kralliklari` | 1281–1781 | 2 | 15 | `avad`, `babur-imparatorlugu`, `behmeni`, `bengal-sultanligi`, `bhopal`, `cavnpur-sultanligi`, `delhi-sultanligi`, `golkonda`, `haydarabad-nizam`, `ingiliz-hindistani`, `kakatiya`, `maratha`, `orissa`, `racput`, `sur-hanedani` |
| `gova-makassar` | 1281–1667 | 1 | 10 | `bali-kralliklari`, `banjar-sultanligi`, `brunei-sultanligi`, `hollanda-dogu-hint`, `majapahit`, `portekiz`, `singhasari`, `sulu-sultanligi`, `ternate-sultanligi`, `timor-beylikleri` |
| `gucerat-sultanligi` | 1407–1573 | 11 | 10 | `ahmednagar`, `babur-imparatorlugu`, `behmeni`, `berar`, `bicapur`, `delhi-sultanligi`, `malva-sultanligi`, `portekiz`, `racput`, `umman` |
| `guney-ming` | 1644–1659 | 34 | 16 | `ahom`, `dashun`, `hollanda-dogu-hint`, `ispanya`, `joseon`, `lan-xang`, `le-hanedani`, `mac-hanedani`, `ming-hanedani`, `nguyen-beyligi`, `portekiz`, `qing-hanedani`, `ryukyu`, `san-devletleri`, `tibet-ganden-phodrang`, `tungning` |
| `hanthawaddy` | 1287–1757 | 8 | 17 | `ace-sultanligi`, `arakan`, `ava`, `ayutthaya`, `babur-imparatorlugu`, `behmeni`, `delhi-sultanligi`, `golkonda`, `haydarabad-nizam`, `kakatiya`, `konbaung`, `lan-na`, `maratha`, `orissa`, `pagan`, `sukhothai`, `toungoo` |
| `haydarabad-nizam` | 1724–1923 | 15 | 15 | `ace-sultanligi`, `babur-imparatorlugu`, `bhopal`, `fransa`, `gond-kralliklari`, `hanthawaddy`, `ingiliz-hindistani`, `ingiltere`, `karnatik`, `konbaung`, `maratha`, `meysur`, `nayak-devletleri`, `portekiz`, `toungoo` |
| `ho-hanedani` | 1400–1407 | 4 | 3 | `campa`, `lan-xang`, `ming-hanedani` |
| `hosut` | 1636–1724 | 1 | 6 | `dashun`, `ming-hanedani`, `qing-hanedani`, `san-fan`, `tibet`, `tibet-ganden-phodrang` |
| `hoysala` | 1281–1343 | 3 | 8 | `delhi-sultanligi`, `kalikut`, `kocin`, `madurai-sultanligi`, `pandya`, `umman`, `vijayanagara`, `yadava` |
| `kakatiya` | 1281–1323 | 8 | 7 | `delhi-sultanligi`, `gond-kralliklari`, `hanthawaddy`, `orissa`, `pagan`, `pandya`, `yadava` |
| `kalikut` | 1281–1766 | 2 | 7 | `hollanda`, `hoysala`, `kocin`, `meysur`, `portekiz`, `umman`, `vijayanagara` |
| `kandy` | 1469–1815 | 1 | 6 | `ace-sultanligi`, `hollanda`, `ingiltere`, `portekiz`, `seylan-sinhala`, `yafna` |
| `karnatik` | 1714–1801 | 4 | 9 | `babur-imparatorlugu`, `fransa`, `haydarabad-nizam`, `hollanda`, `ingiliz-hindistani`, `ingiltere`, `maratha`, `meysur`, `travankur` |
| `kenmu` | 1333–1336 | 17 | 6 | `ainu`, `banda-adalari`, `goryeo`, `ryukyu`, `ternate-sultanligi`, `yuan-hanedani` |
| `kesmir` | 1281–1586 | 2 | 7 | `babur-imparatorlugu`, `cagatay`, `delhi-sultanligi`, `ladak`, `mogulistan`, `sur-hanedani`, `yarkent-hanligi` |
| `kocin` | 1281–1503 | 1 | 9 | `delhi-sultanligi`, `hoysala`, `kalikut`, `madurai-sultanligi`, `pandya`, `portekiz`, `travankur`, `umman`, `vijayanagara` |
| `kuzey-yuan` | 1368–1720 | 6 | 7 | `cungar`, `ming-hanedani`, `mogulistan`, `qing-hanedani`, `rusya`, `tibet`, `tibet-ganden-phodrang` |
| `ladak` | 1281–1834 | 1 | 16 | `afgan-durrani`, `avad`, `babur-imparatorlugu`, `cagatay`, `cavnpur-sultanligi`, `cungar`, `delhi-sultanligi`, `ingiliz-hindistani`, `kesmir`, `maratha`, `mogulistan`, `nepal`, `qing-hanedani`, `sih-imparatorlugu`, `sur-hanedani`, `yarkent-hanligi` |
| `lan-na` | 1296–1558 | 1 | 8 | `ava`, `ayutthaya`, `hanthawaddy`, `lan-xang`, `pagan`, `san-devletleri`, `sukhothai`, `toungoo` |
| `lan-xang` | 1281–1707 | 2 | 18 | `angkor-kmer`, `ayutthaya`, `campa`, `guney-ming`, `ho-hanedani`, `kamboc-kralligi`, `lan-na`, `le-hanedani`, `mac-hanedani`, `ming-hanedani`, `nguyen-beyligi`, `qing-hanedani`, `san-devletleri`, `san-fan`, `sukhothai`, `toungoo`, `tran-hanedani`, `yuan-hanedani` |
| `laos-kralliklari` | 1707–1893 | 3 | 13 | `ayutthaya`, `fransiz-cinhindi`, `kamboc-kralligi`, `konbaung`, `le-hanedani`, `nguyen-beyligi`, `nguyen-hanedani`, `qing-hanedani`, `san-devletleri`, `siyam-chakri`, `tay-son`, `tonburi`, `toungoo` |
| `mac-hanedani` | 1527–1677 | 3 | 7 | `guney-ming`, `lan-xang`, `le-hanedani`, `ming-hanedani`, `nguyen-beyligi`, `qing-hanedani`, `san-fan` |
| `madurai-sultanligi` | 1335–1378 | 5 | 7 | `delhi-sultanligi`, `hoysala`, `kocin`, `seylan-sinhala`, `travankur`, `vijayanagara`, `yafna` |
| `magindanao-sultanligi` | 1281–1888 | 1 | 6 | `filipin-racaliklari`, `hollanda-dogu-hint`, `ispanya`, `portekiz`, `sulu-sultanligi`, `ternate-sultanligi` |
| `malay-sultanliklari` | 1281–1909 | 6 | 16 | `ace-sultanligi`, `angkor-kmer`, `ayutthaya`, `cohor-sultanligi`, `hollanda-dogu-hint`, `ingiliz-malaya`, `ingiltere`, `kamboc-kralligi`, `malaka-sultanligi`, `nguyen-beyligi`, `portekiz`, `samudra-pasai`, `siyam-chakri`, `sukhothai`, `tay-son`, `tonburi` |
| `malva-sultanligi` | 1392–1561 | 3 | 6 | `ahmednagar`, `behmeni`, `berar`, `delhi-sultanligi`, `gucerat-sultanligi`, `racput` |
| `manipur` | 1281–1923 | 2 | 12 | `ahom`, `arakan`, `ava`, `babur-imparatorlugu`, `bengal-nevabligi`, `bengal-sultanligi`, `delhi-sultanligi`, `ingiliz-hindistani`, `konbaung`, `pagan`, `sur-hanedani`, `toungoo` |
| `mogolistan` | 1911–1923 | 7 | 3 | `cin-cumhuriyeti`, `qing-hanedani`, `rusya` |
| `mogulistan` | 1347–1680 | 7 | 20 | `altinorda`, `babur-imparatorlugu`, `buhara`, `cagatay`, `cungar`, `delhi-sultanligi`, `hive`, `kazan`, `kesmir`, `kuzey-yuan`, `ladak`, `ming-hanedani`, `nepal`, `qing-hanedani`, `rusya`, `tibet`, `tibet-ganden-phodrang`, `timurlu`, `yarkent-hanligi`, `yuan-hanedani` |
| `multan-langah` | 1445–1528 | 1 | 3 | `babur-imparatorlugu`, `delhi-sultanligi`, `timurlu` |
| `nayak-devletleri` | 1336–1763 | 7 | 15 | `babur-imparatorlugu`, `behmeni`, `bicapur`, `danimarka`, `delhi-sultanligi`, `haydarabad-nizam`, `hollanda`, `ingiltere`, `maratha`, `meysur`, `portekiz`, `travankur`, `umman`, `vijayanagara`, `yafna` |
| `nepal` | 1281–1923 | 1 | 21 | `avad`, `babur-imparatorlugu`, `bengal-nevabligi`, `bengal-sultanligi`, `cagatay`, `cammu-kesmir`, `cavnpur-sultanligi`, `cin-cumhuriyeti`, `cungar`, `delhi-sultanligi`, `ingiliz-hindistani`, `ladak`, `mogulistan`, `qing-hanedani`, `sih-imparatorlugu`, `sur-hanedani`, `tibet`, `tibet-ganden-phodrang`, `yakub-beg`, `yarkent-hanligi`, `yuan-hanedani` |
| `nguyen-beyligi` | 1558–1802 | 6 | 17 | `angkor-kmer`, `campa`, `cohor-sultanligi`, `filipin-racaliklari`, `guney-ming`, `ingiltere`, `ispanya`, `kamboc-kralligi`, `lan-xang`, `laos-kralliklari`, `le-hanedani`, `mac-hanedani`, `malay-sultanliklari`, `ming-hanedani`, `qing-hanedani`, `siyam-chakri`, `tay-son` |
| `orissa` | 1281–1568 | 3 | 13 | `arakan`, `babur-imparatorlugu`, `behmeni`, `bengal-sultanligi`, `cavnpur-sultanligi`, `delhi-sultanligi`, `golkonda`, `gond-kralliklari`, `hanthawaddy`, `kakatiya`, `pagan`, `sur-hanedani`, `toungoo` |
| `pagan` | 1281–1313 | 8 | 9 | `arakan`, `delhi-sultanligi`, `hanthawaddy`, `kakatiya`, `lan-na`, `manipur`, `orissa`, `san-devletleri`, `sukhothai` |
| `pagaruyung` | 1281–1685 | 2 | 11 | `ace-sultanligi`, `banten-sultanligi`, `hollanda`, `hollanda-dogu-hint`, `malaka-sultanligi`, `palembang-sultanligi`, `portekiz`, `samudra-pasai`, `seylan-sinhala`, `somali`, `sunda-pajajaran` |
| `palembang-sultanligi` | 1281–1825 | 1 | 5 | `banten-sultanligi`, `hollanda-dogu-hint`, `ingiltere`, `pagaruyung`, `sunda-pajajaran` |
| `pandya` | 1281–1311 | 8 | 6 | `hoysala`, `kakatiya`, `kocin`, `seylan-sinhala`, `travankur`, `yafna` |
| `pingnan` | 1856–1873 | 1 | 5 | `ingiliz-hindistani`, `konbaung`, `qing-hanedani`, `san-devletleri`, `tibet-ganden-phodrang` |
| `racput` | 1281–1923 | 22 | 18 | `afgan-durrani`, `babur-imparatorlugu`, `bahavelpur`, `bharatpur-cat`, `bhopal`, `cavnpur-sultanligi`, `cunagadh`, `delhi-sultanligi`, `gond-kralliklari`, `gucerat-sultanligi`, `ingiliz-hindistani`, `malva-sultanligi`, `maratha`, `sih-imparatorlugu`, `sind`, `sur-hanedani`, `umman`, `yadava` |
| `samudra-pasai` | 1281–1521 | 1 | 5 | `ace-sultanligi`, `ayutthaya`, `malay-sultanliklari`, `pagaruyung`, `sukhothai` |
| `san-devletleri` | 1281–1923 | 1 | 17 | `ava`, `cin-cumhuriyeti`, `fransiz-cinhindi`, `guney-ming`, `ingiliz-hindistani`, `konbaung`, `lan-na`, `lan-xang`, `laos-kralliklari`, `ming-hanedani`, `pagan`, `pingnan`, `qing-hanedani`, `san-fan`, `siyam-chakri`, `toungoo`, `yuan-hanedani` |
| `san-fan` | 1673–1681 | 13 | 10 | `ahom`, `hosut`, `lan-xang`, `le-hanedani`, `mac-hanedani`, `portekiz`, `qing-hanedani`, `san-devletleri`, `tibet-ganden-phodrang`, `tungning` |
| `sarawak-brooke` | 1841–1923 | 1 | 7 | `banjar-sultanligi`, `brunei-sultanligi`, `cohor-sultanligi`, `fransiz-cinhindi`, `hollanda-dogu-hint`, `ingiliz-malaya`, `nguyen-hanedani` |
| `seylan-sinhala` | 1281–1518 | 2 | 10 | `ace-sultanligi`, `delhi-sultanligi`, `kandy`, `madurai-sultanligi`, `pagaruyung`, `pandya`, `somali`, `travankur`, `vijayanagara`, `yafna` |
| `sind` | 1281–1843 | 6 | 13 | `afgan-durrani`, `afganistan`, `babur-imparatorlugu`, `bahavelpur`, `cunagadh`, `ingiliz-hindistani`, `ingiltere`, `iran`, `racput`, `safevi`, `sih-imparatorlugu`, `sur-hanedani`, `umman` |
| `singhasari` | 1281–1343 | 5 | 3 | `gova-makassar`, `majapahit`, `timor-beylikleri` |
| `sukhothai` | 1281–1438 | 2 | 9 | `angkor-kmer`, `ayutthaya`, `hanthawaddy`, `kamboc-kralligi`, `lan-na`, `lan-xang`, `malay-sultanliklari`, `pagan`, `samudra-pasai` |
| `sunda-pajajaran` | 1281–1527 | 1 | 3 | `pagaruyung`, `palembang-sultanligi`, `somali` |
| `sur-hanedani` | 1538–1564 | 32 | 12 | `ahom`, `arakan`, `babur-imparatorlugu`, `gond-kralliklari`, `kesmir`, `ladak`, `manipur`, `nepal`, `orissa`, `racput`, `sind`, `tibet` |
| `surakarta` | 1816–1923 | 1 | 2 | `hollanda-dogu-hint`, `yogyakarta` |
| `taiping` | 1853–1864 | 7 | 1 | `qing-hanedani` |
| `tay-son` | 1773–1802 | 8 | 11 | `campa`, `cohor-sultanligi`, `ispanya`, `kamboc-kralligi`, `laos-kralliklari`, `le-hanedani`, `malay-sultanliklari`, `nguyen-beyligi`, `nguyen-hanedani`, `qing-hanedani`, `siyam-chakri` |
| `ternate-sultanligi` | 1281–1657 | 4 | 16 | `azuchi-momoyama`, `banda-adalari`, `edo-bakufu`, `filipin-racaliklari`, `gova-makassar`, `hollanda-dogu-hint`, `ispanya`, `kamakura`, `kenmu`, `magindanao-sultanligi`, `muromachi`, `portekiz`, `ryukyu`, `sulu-sultanligi`, `tidore-sultanligi`, `timor-beylikleri` |
| `tibet` | 1354–1642 | 4 | 11 | `ahom`, `babur-imparatorlugu`, `bengal-sultanligi`, `hosut`, `kuzey-yuan`, `ming-hanedani`, `mogulistan`, `nepal`, `sur-hanedani`, `yarkent-hanligi`, `yuan-hanedani` |
| `tidore-sultanligi` | 1281–1923 | 1 | 6 | `banda-adalari`, `hollanda-dogu-hint`, `ingiltere`, `ispanya`, `portekiz`, `ternate-sultanligi` |
| `timor-beylikleri` | 1281–1769 | 2 | 9 | `bali-kralliklari`, `banda-adalari`, `gova-makassar`, `hollanda-dogu-hint`, `majapahit`, `portekiz`, `singhasari`, `somali`, `ternate-sultanligi` |
| `tonburi` | 1767–1782 | 4 | 6 | `ace-sultanligi`, `kamboc-kralligi`, `konbaung`, `laos-kralliklari`, `malay-sultanliklari`, `siyam-chakri` |
| `tran-hanedani` | 1281–1400 | 4 | 4 | `campa`, `lan-xang`, `ming-hanedani`, `yuan-hanedani` |
| `travankur` | 1281–1923 | 2 | 15 | `delhi-sultanligi`, `hollanda`, `ingiliz-hindistani`, `ingiltere`, `italya`, `karnatik`, `kocin`, `madurai-sultanligi`, `nayak-devletleri`, `pandya`, `portekiz`, `seylan-sinhala`, `somali`, `umman`, `vijayanagara` |
| `tungning` | 1650–1683 | 3 | 7 | `guney-ming`, `hollanda-dogu-hint`, `ispanya`, `ming-hanedani`, `qing-hanedani`, `ryukyu`, `san-fan` |
| `yadava` | 1281–1318 | 12 | 5 | `delhi-sultanligi`, `hoysala`, `kakatiya`, `racput`, `umman` |
| `yafna` | 1281–1619 | 1 | 9 | `ace-sultanligi`, `delhi-sultanligi`, `kandy`, `madurai-sultanligi`, `nayak-devletleri`, `pandya`, `portekiz`, `seylan-sinhala`, `vijayanagara` |
| `yarkent-hanligi` | 1514–1705 | 4 | 9 | `babur-imparatorlugu`, `cungar`, `hive`, `kesmir`, `ladak`, `mogulistan`, `nepal`, `tibet`, `tibet-ganden-phodrang` |
| `yogyakarta` | 1755–1923 | 2 | 7 | `bali-kralliklari`, `banten-sultanligi`, `hollanda-dogu-hint`, `italya`, `mataram-sultanligi`, `somali`, `surakarta` |

---

## 8. Yöntem, ve tablonun bilinen zayıf noktası

Bütün sayılar `veri-kaynak/` altındaki gerçek maske ve `data/yerlesimler*.js`
verisiyle, motorun kullandığı kütüphaneyle (shapely/GEOS) üretildi. Üç adım:

1. **Komşuluk (§1'deki sayılar, Oturum 12'nin yöntemi):**
   `voronoi_diagram(MultiPoint(noktalar), envelope=box(-13,-13,151,67))` →
   1 271 hücre, eşleşmeyen 0. İki hücrenin **ortak sınırı** varsa muhafazakâr
   kenar (3 788); ortak sınır **karayı kesiyorsa** gerçekçi kenar (3 173).
2. **Zaman:** kesit ölçümü 7 tarihte (1300…1900); kümülatif ölçüm 1281-1923
   arası **her yıl** (643 kesit). Bir kenarın iki ucu o yıl farklı devletteyse
   iki kimlik arasına çatışma kenarı konur.
3. **Boyama:** DSATUR (400 rastgele başlangıç) + artımlı yerel arama
   (renk başına 8 × 300 000 adım). Alt sınır için açgözlü maksimum klik.

### ⚠️ §7 tablosu ESKİ yöntemle üretildi — okyanus üzerinden komşuluk

§7'deki komşu listeleri **Delaunay** üçgenlemesiyle çıkarıldı (sürüm 1).
Delaunay karaya kırpılmadığı için seyrek bölgelerde okyanusu aşan kenarlar
üretiyor; tabloda izleri var: `yogyakarta` komşuları arasında `somali` ve
`italya` görünüyor — gerçekte aralarında Hint Okyanusu var.

Ölçüldü: 4 477 Delaunay kenarının 284'ü 600 km'den, 102'si 1 000 km'den uzun.

| Yöntem | Çatışma kenarı | Kümülatif renk |
|---|---|---|
| Delaunay, filtresiz | 1 613 | 8 |
| Delaunay, ≤ 600 km | 1 302 | 8 |
| Delaunay, ≤ 300 km | 1 011 | 7 |
| **Voronoi, muhafazakâr** | **1 522** | **8** |
| **Voronoi, gerçekçi (karada)** | **1 248** | **7** |

Voronoi ölçümü Delaunay'ı **doğruluyor** ve belirsizliği kapatıyor: fark
tamamen deniz aşırı komşuluktan geliyor, motor petekleri karaya kırptığı için
**gerçekçi olan 7'dir.**

> ⚠️ **§7 tablosu yeniden üretilmelidir** — ve bunu ölçtüm, sıralama
> gerçekten değişiyor. Muhafazakâr ile gerçekçi komşuluk arasında 98 yeni
> kimliğin ortalama derecesi **9.5 → 7.7** düşüyor ve **ilk 12'nin yalnız
> 7'si ortak** (ilk 20'nin 13'ü). Düşenler beklenen isimler: `ternate-sultanligi`,
> `malay-sultanliklari`, `nguyen-beyligi`, `hanthawaddy`, `guney-ming` —
> hepsi ada ya da kıyı devleti, yani deniz aşırı kenarlarla şişmişler.
> Değişmeyen tepe: `nepal` (21), `mogulistan` (20), `lan-xang` (18),
> `racput`, `san-devletleri`, `ladak`.
>
> Yani §7 tablosu **komşu kimliklerin listesi olarak** doğru (kapsayıcı, üst
> sınır), ama **DSATUR sıralaması için gerçekçi komşulukla yeniden
> üretilmeli.** Bu, entegrasyon oturumu renk atarken 15 dakikalık bir iştir.

⚠️ Ölçüm sırasında başka bir oturum `yerlesimler.js`'e yazıyordu; nokta
sayıları `DURUM.md`'deki 917 ile ±%1 oynayabilir. Renk sayıları etkilenmez —
7 ve 8 değerleri girdinin küçük oynamalarına duyarsızdır.

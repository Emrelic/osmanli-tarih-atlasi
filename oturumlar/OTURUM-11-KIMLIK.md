# Oturum 11 — Orta Asya devlet kimlikleri künyesi

**Kime:** `arac/renkler.py`'yi tutan oturum (Oturum 16) ve entegrasyon oturumu.
**Bu dosya renkler.py'ye YAZMAZ.** Merkez oturumun isteği üzerine yalnız künye
ve **komşuluk çizgesi** veriyor — DSATUR komşuluk çizgesi olmadan çalışamaz.

Künye biçimi: `id · ad · f/t · merkez · TDV maddesi · aynı anda sahnede olduğu
ve SINIRDAŞ olduğu kimlikler`.

> **Komşuluk tanımı:** iki kimlik "komşu" sayılır ancak ve ancak (a) zaman
> pencereleri kesişiyorsa **ve** (b) coğrafyaları bitişikse. DSATUR için önemli
> olan budur; yalnız aynı bölgede olmak yetmez, aynı ANDA olmaları gerekir.
> Örnek: `timurlu` (biter 1507) ile `turkmen` (başlar 1600) bu tanıma göre
> komşu DEĞİLDİR — bugün ikisinin hex'i birebir aynı olmasına rağmen harita
> yanılmıyor, yalnız lejant iki satırda aynı kareyi gösteriyor.

Bütün TDV slug'ları `<title>` ile doğrulandı (`CLAUDE.md` §4 ölü slug tuzağı).

---

## A. ŞİMDİ GEREKEN İKİ KİMLİK

`data/yerlesimler_ortaasya2.js` bu ikisini kullanıyor. Tanımlı olmadıkları için
bugün o pencereler boyanmıyor (üretim `UYARI boya` satırı basar); Değişmez 1
temiz kalıyor.

### `nogay` — Nogay Ordası
| | |
|---|---|
| **Ad** | Nogay Ordası |
| **f / t** | ~1500 – 1644 *(bu atlasta kullanılan pencere)* |
| **Merkez** | Saraycık (Yayık ırmağı) |
| **TDV** | `nogaylar` → NOGAYLAR ✓ |
| **Coğrafya** | Deşt-i Kıpçak; batıda İdil (Volga) sol yakası, **doğuda "Emba nehrinden Aral gölüne"** (TDV'nin kendi ifadesi) |
| **Sınırdaş + eşzamanlı** | `kazak` · `hive` · `rusya` · `kazan` (→1552) · `sibir` (→1598) · `turkmen` (1600→) · `kirim` · `altinorda` (→1502) |

⚠️ **f/t hakkında dürüst not:** TDV kuruluş için yıl vermiyor ("Altın Orda'nın
dağılma sürecinde ortaya çıkan"). 1500 yüzyıl başına yaslamadır. Bitiş için de
yıl vermiyor; 1644 TDV'nin andığı Kalmuk seferi yılıdır ve **bu künyenin en
zayıf halkasıdır**. Nogaylar 1644'te yok olmadı — Küçük Nogay Kuban-Azak'ta
1783'e kadar sürdü (TDV: Suvarov 1783'te yendi). Bu atlasta `nogay` yalnız
**Yayık-Emba-Aral şeridi** için kullanılıyor; Kuban-Azak kolu için ayrı bir
pencere gerekirse `t` 1783'e uzar.

### `kazak` — Kazak Hanlığı
| | |
|---|---|
| **Ad** | Kazak Hanlığı |
| **f / t** | ~1500 – 1868 *(bu atlasta kullanılan pencere)* |
| **Merkez** | Türkistan (Yesi) / Seyhun boyu; sonra cüz merkezleri |
| **TDV** | `kazaklar` → KAZAKLAR ✓ · `kazakistan` → KAZAKİSTAN ✓ |
| **Coğrafya** | Kazak bozkırı; Seyhun (Sirderya) boyu, Aral kuzeyi, Emba-Yayık, Yedisu |
| **Sınırdaş + eşzamanlı** | `nogay` (→1644) · `hive` · `buhara` · `hokand` (1710→) · `rusya` · `sibir` (→1598) · `kalmuk` (1634-1758) · `karakalpak` · `turkmen` (1600→) |

⚠️ TDV "ilk birleşik Kazak Hanlığı XVI. yüzyılın başlarında Kasım Han
tarafından" diyor; 1500 yüzyıl başına yaslamadır. Bitiş için TDV Rus düzenleme
yıllarını sayıyor (1822 · 1824 · 1867 · **1868** · 1891); Ural ve Turgay
oblastlarını kuran 1868 seçildi.
⚠️ **Üç cüz (küçük / orta / büyük) tek kimlikte toplandı.** Bu atlasın
pencere içi kısmı yalnız **Küçük Cüz**'ü görüyor; kutu doğuya açılınca Orta ve
Büyük Cüz de sahneye girer ve ayrıştırma gerekebilir. Bugün ayırmak erken.

### ⚠️ Yazım tercihi — bir satırlık karar
Merkez oturum kimlik listesinde `kazak-hanligi` yazımını önerdi. Ben mevcut
**kısa id geleneğine** uydum: `kazan`, `kirim`, `altinorda`, `hive`, `buhara`,
`turkmen`. Uzun yazım tercih edilirse `data/yerlesimler_ortaasya2.js` içinde
değişecek satır sayısı **3** (`Aral kuzeyi`, `Üstyurt kuzeyi`, `Emba (Cem)`).
Kararı renkler.py'yi tutan oturum versin; ben tek biçimde bıraktım.

---

## B. PENCERE 62°D'NİN DOĞUSUNA AÇILINCA GEREKECEK KİMLİKLER

Bunları **şimdi eklemeyin** — hiçbiri bugün pencere içinde toprak taşımıyor,
eklenirlerse DSATUR'a boş yük olurlar. Künye, açılış geldiğinde araştırma
tekrarlanmasın diye burada duruyor.

| id | Ad | f / t | Merkez | TDV | Coğrafya |
|---|---|---|---|---|---|
| `hokand` | Hokand Hanlığı | 1710 – 1876 | Hokand | `hokand-hanligi` ✓ | Fergana |
| `kasgar` | Yarkent (Kâşgar) Hanlığı | 1514 – 1705 | Yarkend | `kasgar` ✓ · `hoten` ✓ | Tarım havzası, Doğu Türkistan |
| `kalmuk` | Kalmuk / Cungar Hanlığı | 1634 – 1758 | Kulca | `kalmuklar` ✓ · `kulca` ✓ | Cungarya, Yedisu |
| `sibir` | Sibir Hanlığı | 1468 – 1598 | Kaşlık (İsker) | `sibir-hanligi` ✓ · `kucum-han` ✓ | Batı Sibirya, Tobol-İrtiş |
| `karakalpak` | Karakalpaklar | XVIII-XIX. yy | Aral deltası | `karakalpaklar` ✓ | Aşağı Seyhun, Aral deltası |

**Merkez oturumun listesindeki üç kimlik hakkında GEREKÇELİ İTİRAZ:**

- **`siban` · `astrahanli` · `mangit` EKLENMESİN.** TDV `buhara-hanligi`
  maddesi bu üçünü **Buhara Hanlığı'nın ardışık hanedanları** olarak tanımlıyor:
  Şeybânîler 1500-1599, Canoğulları (Astrahanlılar) 1599-1785, Mangıtlar
  1785 sonrası. Üçü aynı devletin dönemleridir, **eşzamanlı komşu değildirler**
  — yani renk onları ayırmaz, yalnız aynı gövdeyi zamanda üçe böler.
  `renkler.py`'nin kendi kuralı bunu zaten söylüyor: *"Renk KİMLİK taşımaz,
  AYIRMA işi görür. Kimliği etiket taşır."* Hanedan ayrımı etiket/dizin işidir
  (`data/devletler.js`), boya işi değil. Mevcut tek `buhara` kimliği doğrudur.
- **`karahanli` (999-1211) BUGÜN GEREKSİZ.** Atlasın zaman tabanı 1281;
  Karahanlılar o tarihten 70 yıl önce bitmiş. Zaman ekseni geriye açılırsa
  gerekir (`YOL-HARITASI` Eksen 1), coğrafya açılırsa değil. TDV `karahanlilar` ✓.
- **`yarkend` yerine `kasgar`.** TDV'de "Yarkend" başlıklı müstakil madde
  **yoktur** (arama sıfır başlık döndürdü, 21 içerik eşleşmesi var); devletin
  anlatıldığı yer `kasgar` maddesidir. İki ayrı kimlik açmak, tek devlete iki
  renk verir.

---

## C. KOMŞULUK ÇİZGESİ — DSATUR girdisi

Yalnız **eşzamanlı ve sınırdaş** çiftler. `—` sütunundakiler bu bölgede
zaten tanımlı kimlikler; DSATUR'un bunların rengini de kısıt olarak alması
gerekiyor.

```
nogay      ── kazak · hive · rusya · kazan · sibir · turkmen · kirim · altinorda
kazak      ── nogay · hive · buhara · hokand · rusya · sibir · kalmuk ·
              karakalpak · turkmen
hokand     ── buhara · kazak · kalmuk · rusya
kasgar     ── kazak · kalmuk · buhara
kalmuk     ── kazak · kasgar · hokand · rusya
sibir      ── nogay · kazak · rusya · kazan
karakalpak ── hive · kazak · buhara
```

Zaten tanımlı olanların bu bölgedeki komşulukları (birinci partiden ölçüldü):

```
cagatay    ── altinorda · ilhanli                      (1281-1379)
altinorda  ── cagatay · ilhanli · timurlu · nogay · kazak · rusya   (1281-1502)
timurlu    ── altinorda · iran · safevi                (1379-1507)
hive       ── safevi · iran · turkmen · buhara · kazak · nogay ·
              karakalpak · rusya                       (1512-1920)
buhara     ── hive · iran · kazak · hokand · kasgar · karakalpak    (1500-1920)
turkmen    ── hive · iran · safevi · rusya · kazak · nogay          (1600-1884)
```

**Kritik kısıt:** `nogay` ve `kazak` birbirine komşu **ve** ikisi de
`hive` · `rusya` · `turkmen` · `buhara` ile komşu. Yani bu altılı kümenin
tamamı birbirinden ayırt edilebilir olmalı. Bugünkü renkler:

```
hive     #00695c  teal            rusya    #4f7d4f  yeşil
buhara   #4527a0  koyu çivit      turkmen  #8d6e63  kahve
altinorda #9e7d9e mor-gri         kazan    #c98f6b  ten
```

`nogay` ve `kazak` bu yedisinden ve birbirinden uzak durmalı. Renk seçimini
DSATUR'a bırakıyorum; yalnız **kırmızı tonları Osmanlı ailesine ayrılmıştır**
(`renkler.py` başlığı) ve bozkır kimlikleri toprak/bej tonlarından uzak
seçilmeli — `renkler.py` İlhanlı yorumunda yazılı: toprak tonları arazi
kabartma katmanının bejiyle karışıp "burada kimse yok" görüntüsü veriyor.

---

## D. ÖNCEKİ TURDAN DEVREDEN İKİ RENK BORCU

`oturumlar/OTURUM-11-ILERLEME.md` §3'te ölçülmüştü, hâlâ açık:

1. **`turkmen` (#8d6e63) ↔ `iran` (#b5885b): ham ΔE 22.7.** `renkler.py` kendi
   başlığında dolgunun %30 saydamlıkla altlığa bindiğini ve farkların
   **yaklaşık üçte bire** sıkıştığını yazıyor → bindirilmiş ΔE ≈ **7.6**.
   Bu ikisi **1860-1881 arasında Kopet Dağ boyunca doğrudan sınırdaş**
   (Nesâ · Ebîverd · Kızılarvat `turkmen`, güneyindeki Kûçân · Bocnûrd ·
   Meşhed `iran`). Türkmen boylarının fiilî bağımsızlık penceresi görünmez
   hâle gelebilir.
2. **`turkmen` (#8d6e63) = `timurlu` (#8d6e63): birebir aynı hex.** Harita
   yanılmıyor (eşzamanlı değiller) ama lejantta iki satır aynı kare.

---

## E. BU KÜNYENİN DAYANDIĞI TDV MADDELERİ

| Slug | `<title>` | Ne için |
|---|---|---|
| `nogaylar` | NOGAYLAR ✓ | Nogay yurdunun sınırları, 1557-58 bölünme, 1644 Kalmuk seferi, 1783 Suvarov |
| `kazaklar` | KAZAKLAR ✓ | Kasım Han, üç cüz, 1822·1824·1867·1868·1891 Rus düzenlemeleri |
| `kazakistan` | KAZAKİSTAN ✓ | coğrafî çerçeve |
| `hokand-hanligi` | HOKAND HANLIĞI ✓ | 1710-1876, Fergana, merkez Hokand |
| `buhara-hanligi` | BUHARA HANLIĞI ✓ | Şeybânî 1500-1599 · Canoğulları 1599-1785 · Mangıt 1785→ |
| `sibir-hanligi` | SİBİR HANLIĞI ✓ | Batı Sibirya Türk-Tatar hanlığı |
| `kucum-han` | KÜÇÜM HAN ✓ | 1563-1581 |
| `kalmuklar` | KALMUKLAR ✓ | Cungar/Kalmuk; TDV'de ayrı "Cungar" maddesi YOK |
| `kasgar` | KÂŞGAR ✓ | Yarkent Hanlığı burada anlatılıyor; ayrı "Yarkend" maddesi YOK |
| `hoten` · `kulca` · `almalig` | ✓ | Doğu Türkistan yer maddeleri |
| `karakalpaklar` | KARAKALPAKLAR ✓ | Aral deltası |
| `karahanlilar` | KARAHANLILAR ✓ | 1281 öncesi — bugün gereksiz |
| `maveraunnehir` | MÂVERÂÜNNEHİR ✓ | bölge çerçevesi |
| `turkistan` | TÜRKİSTAN ✓ | bölge çerçevesi |

# ÇAPRAZ DOĞU — bulgular ve öneriler

> Görev tanımı: `oturumlar/CAPRAZ-GOREV.md` §7 · Kapsam: İran'ın altı hanedanı + Memlük
> Yetki: bu dosya + `CAPRAZ-DOGU-ILERLEME.md`. Veriye ve `arac/`'a yazmam; öneri üretirim.
> Çıktı biçimi §8: ① bizde ne var ② kaynakta ne var ③ hüküm.

---

## 0. TESLİM 1 — `iran` torbası (1 Ağustos)

Birinci iş şuydu: *"326 pencerenin her biri hangi hanedana ait?"* Cevap aşağıda,
ama önce **paydayı düzeltmem gerekti** ve düzeltme işin şeklini değiştirdi.

---

## 1. 🔴 PAYDA DÜZELTMESİ — 326 değil 317, ve fark CANLI OLMAYAN dosyalardan geliyor

### ① Bizde ne var

```
dosya                        nokta   s:"iran" pencere   ayrık nokta
yerlesimler.js                 791          317              169   ← CANLI
yerlesimler_afrika.js          184            0                0   ← CANLI
--------------------------------------------------------  canlı toplam: 317 / 169
yerlesimler_asya.js            344            6                6   ← merge dışı
yerlesimler_ortaasya2.js         7            3                1   ← merge dışı
yerlesimler_avrupa.js          237            0                0   ← merge dışı
--------------------------------------------------------  beş dosya:    326 / 176
```

Koordinatörün verdiği **326 / 176 sayısı beş dosyanın toplamı**; canlı harita
**317 / 169** taşıyor. `arac/girdi.py`'deki `GIRDI_DOSYALARI` iki dosya okuyor
(`yerlesimler.js` + `yerlesimler_afrika.js`), öbür üçü izin listesinde yorum
satırında.

### ③ Hüküm — **rakam yanlış değil, PAYDASI yanlış**

Fark 9 pencere ve **hiçbiri haritada çizilmiyor.** Üstelik `yerlesimler_asya.js`'in
6 tanesi 62°D'nin doğusunda, yani dosya merge edilse **bile** pencere açılmadan
görünmezler. Bu, `CLAUDE.md`'nin *"hangi DOSYA canlı"* uyarısının birebir tekrarı:
ayrıştırıcı doğruydu, **dosya kümesi** genişti.

📌 İşe etkisi: düzeltilecek pencere sayısı 326 değil **317**, ve düzeltmenin
haritada görüneceği yer **yalnız** `yerlesimler.js`.

---

## 2. 🔴 "BENEKLİ PARÇALI" GÖRÜNTÜNÜN SEBEBİ — ölçüldü, mekanizma kanıtlandı

Kullanıcı İran'ın *"benekli parçalı"* göründüğünü bildirmişti. Sebebi tahmin
değil, **ölçüm**: her `iran` noktasının **en yakın yabancı komşusunun** hangi
devlet olduğunu saydım.

| tarih | `s:"iran"` nokta | en yakın komşusu **gerçek hanedan** olan |
|---|---|---|
| 1300-06-15 | 47 | **`ilhanli` 44** · altinorda 2 · umman 1 |
| 1350-06-15 | 164 | altinorda 43 · **`ilhanli` 36** · umman 34 · memluk 26 · cagatay 11 |
| 1400-06-15 | 84 | **`timurlu` 75** · artuklu 3 · karakoyunlu 2 |
| 1450-06-15 | 56 | **`karakoyunlu` 27 · `timurlu` 26** |
| 1490-06-15 | 61 | **`akkoyunlu` 56** · timurlu 2 |

### ③ Hüküm — bu bir periyotlaşma hatası değil, **AYNI DEVLETİN İKİ ADI**

1300'de İran'da tek bir devlet var: İlhanlılar. Veride o devlet **iki ayrı kimlikle**
duruyor — 142 nokta `ilhanli`, 47 nokta `iran` — ve ikisinin **ayrı rengi var**:

```
"ilhanli"  #7a5ba0  mor        142 nokta
"iran"     #b5885b  ten rengi   47 nokta   ← aynı devlet, başka boya
```

⇒ **Benek buradan.** 44/47 komşuluk oranı, iki boyanın **iç içe geçtiğini**
gösteriyor; uzak iki bölge değil, aynı bölgenin yan yana noktaları. Aynı desen
1400'de `timurlu` ile, 1450'de `karakoyunlu` ile, 1490'da `akkoyunlu` ile
tekrarlıyor. **Beş kesitin beşinde de** torba, gerçek hanedanın tam yanında.

📌 Bu, `CLAUDE.md §3.5`'te kullanıcının sorduğu *"Van civarında Safevîler İran'a
hâkim değiller miydi?"* şikâyetinin **1501 öncesi hâli** — orada `iran` vs `safevi`
idi, burada `iran` vs `ilhanli`/`timurlu`/`karakoyunlu`/`akkoyunlu`.

---

## 3. 317 PENCERENİN ANATOMİSİ — 24 grup, hepsi tek tek atandı

İyi haber: 317 pencere **yalnız 24 ayrık `(f,t)` çifti** kullanıyor. Yani iş
317 karar değil, **24 karar**. Aşağıdaki tabloda her grubun önerilen hanedanı ve
dayandığı TDV maddesi var.

### 3.1 · Grup A — **1736 SONRASI**: üç hanedan, tek boya (130 pencere)

| # | pencere | nokta | bölge | önerilen kimlik |
|---|---|---|---|---|
| A1 | `1736-03-08 → 1923-10-29` | **101** | bütün İran | `afsar` → `zend`/`afsar` → `kacar` **üçe bölünecek** |
| A2 | `1736-03-08 → 1813-10-24` | 16 | Kafkasya (Gülistan'a kadar) | aynı üçlü bölme |
| A3 | `1736-03-08 → 1828-02-10` | 3 | Revan · Astara · Lenkeran (Türkmençay'a kadar) | aynı üçlü bölme |
| A4 | `1736-03-08 → 1860-01-01` | 3 | Dihistan · Nesâ · Ebîverd | aynı üçlü bölme |
| A5 | `1736-03-08 → 1785-01-01` | 1 | Merv | `afsar` |
| A6 | `1740-01-01 → 1747-06-20` | 5 | Hîve · Hazârasp · Ürgenç · Küngrat | **`afsar`** (saf) |
| A7 | `1776-04-16 → 1779-04-01` | 1 | Basra | **`zend`** (saf) |

🔴 **A1 tek başına 101 nokta × 187 yıl.** Haritada Nâdir Şah'tan Birinci Dünya
Savaşı'na kadar İran **tek renk** — Afşar, Zend ve Kaçar aynı boyada.

🟢 **A6 ve A7 zaten hanedan sınırlarına oturmuş** ama adı konmamış: A6'nın bitişi
`1747-06-20` **Nâdir Şah'ın öldürüldüğü gün**, A7 `1776→1779` **Sâdık Han Zend'in
Basra işgali.** Yani veri hanedanı **biliyor**, yalnız `iran` diye yazıyor.
Bu ikisi öneriyi doğrulayan iç kanıt: sınırlar zaten hanedan sınırı.

### 3.2 · Grup B — **1335-1501 İLHANLI HALEFLERİ** (117 pencere)

TDV `iran` maddesi bu bölünmeyi zaten yapıyor; bizim gruplarımız neredeyse
**birebir** oturuyor.

| # | pencere | nokta | bölge | önerilen kimlik | TDV dayanağı |
|---|---|---|---|---|---|
| B1 | `1335-12-01 → 1411-01-01` | 28 | Irak (Sâmerrâ→Fâv, Erbil, Zaho) | **`celayirli`** | `celayirliler`: 1340-1431 |
| B2 | `1335-12-01 → 1393-01-01` | 28 | Huzistan · Fars sahili · Kirman · Mekran | **`muzafferi`** | `muzafferiler`: 1318-**1393** ✓ bitiş birebir |
| B3 | `1335-12-01 → 1387-11-01` | 13 | Cibâl · Isfahan çevresi | **`muzafferi`** | aynı madde |
| B4 | `1335-12-01 → 1386-01-01` | 21 | Azerbaycan · Kürdistan | **`cobanli` 1335-1357 + `celayirli` 1357-1386** ⚠ bölünmeli | `iran`: Melik Eşref öl. 758/**1357** |
| B5 | `1335-12-01 → 1381-01-01` | 18 | Horasan · Sîstan | **`kert` (Herat kanadı) + `serbedari` (Sebzevâr kanadı)** ⚠ bölünmeli | `kert`: 1245-1389 · `serbedariler`: 1337-1386 |
| B6 | `1335-12-01 → 1596-01-01` | 5 | Mâzenderan (Sârî · Âmül · Ferahâbâd) | **`marasi`** (Mar'aşî seyyidleri) | ⚠ doğrulanmadı, §5'te |
| B7 | `1335-12-01 → 1538-01-01` | 3 | Şirvan (Salyan · Kuba · Şeki) | **`sirvansah`** | `sirvansahlar`: Safevî ilhakı **Ekim 1538** ✓ |
| B8 | `1335-12-01 → 1510-12-02` | 1 | Esterâbâd | `serbedari`→`timurlu`→`ozbek` zinciri |  |
| B9 | `1507-05-24 → 1510-12-02` | **18** | Horasan tamamı | **`ozbek` (Şeybânî)** | `seybaniler`: Horasan 905-913/1500-1507, Şeybânî Han öl. **916/1510** ✓ |

🟢 **B9 en temiz vaka.** Pencere `1507-05-24 → 1510-12-02`; TDV Şeybânî Han'ın
Horasan'ı 1507'de aldığını, 1510'da Şah İsmâil'e yenilip öldüğünü söylüyor.
**Tarih doğru, ad yanlış** — bu üç buçuk yıl Özbek hâkimiyeti, "İran" değil.

### 3.3 · Grup C — **1281'DEN BAŞLAYAN DEV TORBALAR** (47 pencere) 🔴 en kötüsü

| # | pencere | süre | nokta | ne kadar hanedan içeriyor |
|---|---|---|---|---|
| C1 | `1281-01-01 → 1501-07-01` | **220 yıl** | 16 | İlhanlı · Çobanlı · Celâyirli · Karakoyunlu · Akkoyunlu (Tebriz, Bakü, Derbend, Revan…) |
| C2 | `1281-01-01 → 1508-01-01` | **227 yıl** | 15 | + Musul, Bağdat, Basra, Şiraz, Lahsa |
| C3 | `1281-01-01 → 1510-12-02` | **230 yıl** | 5 | Meşhed, Kirman, Hürmüz Adası, Kişm |
| C4 | `1281-01-01 → 1503-01-01` | 222 yıl | 4 | Isfahan, Kazvin, Kum, Tahran |
| C5 | `1281-01-01 → 1592-01-01` | 311 yıl | 2 | Lâhîcan, Bender Enzeli (Gîlân) |
| C6 | `1281-01-01 → 1550-01-01` | 269 yıl | 3 | **Katîf · Ukayr · Cübeyl** ← ✋ Doğu Arabistan, İran değil |
| C7 | `1281-01-01 → 1515-04-01` | 234 yıl | 2 | **Ras el-Hayme · Şârika** ← ✋ Hürmüz krallığı |
| C8 | `1469-01-01 → 1546-01-01` | 77 yıl | 5 | Semâve · Nâsıriye · Ammâre · Kürne · Fâv (Müşa'şa'?) |

🔴 **C1-C5, Tebriz'i 220 yıl boyunca tek bir "İran" olarak boyuyor** — İlhanlı'nın
başkentiyken de, Celâyirli başkentiyken de, Karakoyunlu ve Akkoyunlu başkentiyken
de. Yanı başındaki noktalar bu sürede **dört kez renk değiştiriyor.** §2'deki
44/47 komşuluk oranı buradan çıkıyor.

✋ **C6 ve C7 benim kapsamımda değil ama bulgu olarak kaydediyorum:** Katîf/Ukayr/
Cübeyl Doğu Arabistan (Cebrîler), Ras el-Hayme/Şârika ise Hürmüz krallığıdır —
ikisi de İran hanedanı değil. **ÇAPRAZ DOĞU'nun değil, ARAŞTIRMA ARABİSTAN'ın
alanı.** Koordinatöre havale ediyorum.

---

## 4. TDV ÇAPRAZ DOĞRULAMASI — 10 slug sınandı, `<title>` ile

| slug | durum | verdiği |
|---|---|---|
| `ilhanlilar` | 🟢 canlı | 1256-**1353**; Ebû Said öl. 1335 |
| `celayirliler` | 🟢 canlı | 1340-1431; Üveys 1358 Tebriz |
| `muzafferiler` | 🟢 canlı | 1318-1393; Şah Mansûr 795/1393 Şiraz |
| `serbedariler` | 🟢 canlı | 9 Şâban 737 / **13 Mart 1337** – 788/1386; Timur 783/1381 |
| `sirvansahlar` | 🟢 canlı | 799-1607; Safevî ilhakı 945 Cemâziyelevvel / **Ekim 1538** |
| `zendler` | 🟢 canlı | 1751-1794; Kerim Han öl. Mart 1779; Basra 1776, üç yıl |
| `kacarlar` | 🟢 canlı | **1796**-1925; Ağa Muhammed Han Tahran'da taç |
| `seybaniler` | 🟢 canlı | 1500-1599; Horasan 905-913/1500-1507; Şeybânî Han öl. 916/1510 |
| `iran` | 🟢 canlı | **halef devlet tablosunun tamamı** — aşağıda |
| `nadir-sah--iran` | 🟢 canlı | taç 24 Şevval 1148 / 8 Mart 1736; öl. 11 Cemâziyelâhir 1160 / **20 Haziran 1747** |
| `kertler` | 🔴 **ÖLÜ** | → doğrusu **`kert`** (1245-1389) |
| `afsarlar` | 🔴 **ÖLÜ** | → doğrusu **`avsarlilar`** (1736-**1804**) |
| `cobanlilar` | 🔴 **ÖLÜ** | müstakil madde **YOK**; bilgi `iran` maddesinin içinde |

📌 **Kural ③ iki kez daha doğrulandı:** ölü slug "kaynak yok" demek değil, **adres
yanlış** demekti. `kertler`→`kert`, `afsarlar`→`avsarlilar`. Üçüncüsü (`cobanlilar`)
gerçekten yok — ama bilgi TDV'de **var**, `iran` maddesinin içinde.
⇒ Bu üçü `CLAUDE.md`'deki ölü slug listesine eklenmeli (koordinatörün dosyası).

### TDV `iran` maddesinin halef devlet tablosu — bizim B grubumuzun aynası

| hanedan | TDV `iran` maddesi | bizim B grubu |
|---|---|---|
| Çobanoğulları | Azerbaycan, 736/1335 → Melik Eşref öl. **758/1357** | B4'ün ilk yarısı |
| Celâyirliler | **1340-1431** | B1 (1335→1411) |
| Muzafferîler | **1318-1393**, "Orta ve Güney İran" | B2, B3 ✓ |
| Kertler | **1245-1389** | B5'in Herat kanadı |
| Serbedârîler | **1336-1386**, "Timur tarafından yıkıldı" | B5'in Sebzevâr kanadı |

---

## 5. 🔴 KAYDEDİLEN ÇELİŞKİLER — çözülmedi, kaydedildi (§8 gereği)

Görev tanımı: *"Çelişki bulduğunuzda ÇÖZMEYE ÇALIŞMAYIN — kaydedin."* Beş tane var.

### Ç1 · Nâdir Şah'ın ölümü: TDV kendi içinde çelişiyor — **ve bizim verimiz haklı**

| kaynak | tarih |
|---|---|
| TDV `avsarlilar` | *"21 Mayıs 1747"* |
| TDV `nadir-sah--iran` | *"11 Cemâziyelâhir 1160 / **20 Haziran 1747**"* |
| **bizim veri** (A6 penceresinin bitişi) | **`1747-06-20`** |

**Hüküm: uyuyor.** `CAPRAZ-GOREV §4④` gereği *olayın kendi maddesi esastır* →
`nadir-sah--iran` kazanır, hicrî karşılığı da onu tutuyor (11 Cemâziyelâhir 1160 =
20 Haziran 1747). Verimiz doğru; **düzeltme gerekmiyor.**
📌 Bu, Ridâniye vakasının (`memlukler` 23 Ocak ↔ `ridaniye-savasi` 22 Ocak) birebir
tekrarı — **aynı kural ikinci kez kâr etti.**

### Ç2 · İlhanlı'nın sonu: **1335 mi 1353 mü**

Bizde 164 pencere `1335-12-01`'de başlıyor. TDV `ilhanlilar` devletin yıkılışını
**1353 (754)** veriyor; 1335 Ebû Said'in ölümü. İkisi de doğru olabilir (1335 fiilî
parçalanma, 1353 kurumun sonu) ama **hangisini kullandığımız yazılı değil.**
**Hüküm: doğrulanamadı** — `devletler.js`'teki `ilhanli` kaydının `t:` alanının ne
olduğu kontrol edilmeli. Kararı ben vermiyorum.

### Ç3 · Serbedârîler'in kuruluşu: `1336` ↔ `13 Mart 1337`

TDV `iran` maddesi *"1336-1386"*, TDV `serbedariler` maddesi *"9 Şâban 737 / 13 Mart
1337"* diyor. **Hüküm: çelişiyor**, ve `§4④` gereği hanedanın kendi maddesi
(`serbedariler`) esas alınmalı → **1337-03-13**.

### Ç4 · Şirvan: 1500 mü 1538 mi 1607 mi

Bizde B7 `1538-01-01`'de bitiyor. TDV: Şah İsmâil **906/1500**'de Ferruh Yesâr'ı
öldürüyor, Safevî ilhakı **Ekim 1538**, hanedanın kesin sonu **1016/1607**.
Yani üç ayrı "son" var ve bizimki (1538) **ortadakine** denk geliyor — ama
`1538-01-01` ile *Ekim 1538* arasında **~9 ay** fark var.
**Hüküm: uyuyor, hassasiyeti eksik.** `§4⑤` gereği kaynağın verdiği hassasiyet
korunmalı: `1538-10-01` + `gun:"Ekim 1538"`.

### Ç5 · Isfahan katliamı: `787/1385` ↔ bizim `1387-11-01`

TDV `muzafferiler` özeti Timur'un Isfahan'daki katliamını **787/1385** veriyor;
bizim B3 penceresi `1387-11-01`'de bitiyor (yaygın tarih Kasım 1387 = 789).
**Hüküm: doğrulanamadı — tek çekiş, özetleyici artefaktı olabilir.**
`§4①` gereği ikinci bir çekişle (`isfahan` maddesi) sınanmadan hüküm verilmez.

⚠️ **Özetleyici artefaktı uyarısı:** `ilhanlilar` çekişi 1335 için *"Hicrî 717 H"*
üretti. 1335 milâdî = **735-736 hicrî**; 717 hicrî = 1317-18 milâdî. Yani sayı
maddeden değil, özetleyiciden geldi. **Bu turda TDV'den gelen hiçbir hicrî karşılık
tek başına kullanılmadı** — hepsi milâdî ile çarpıştırıldı (`§4②`).

---

## 6. ÖNERİ — kimlik şeması ve renk ihtiyacı

Kullanıcının istediği adlandırma: *"Safevî İranı · Afşar İranı · Akkoyunlu İranı ·
Kaçar İranı"*, ve *"İran"* bunların **birleşimi** olarak türetilecek.

### 6.1 · Şema

```
"İran"  ARTIK BİR BOYA DEĞİL — bir TÜRETİLMİŞ BİRLEŞİM etiketi.
        Haritada hiçbir nokta s:"iran" taşımaz; "İran" adı, o tarihte
        hangi hanedan hangi toprağı tutuyorsa onların birleşimidir.
```

⇒ Bunun **bedava bir yan etkisi** var: `iran` (#b5885b, ten rengi) boya slotu
**boşalıyor.** 12 yeni kimlik, 12 değil **11 yeni renk** istiyor.

### 6.2 · Öncelik sırası — haritada görünürlüğe göre

| sıra | kimlik | pencere | kapsadığı yıl | neden bu sırada |
|---|---|---|---|---|
| **1** | `kacar` | ~104 | 1794/96-1923 | **129 yıl × 101 nokta** — modern dönemin tamamı tek renk |
| **2** | `afsar` | ~130 | 1736-1747 (Horasan 1804) | A1-A6'nın ön dilimi; A6 zaten hanedan sınırında |
| **3** | `zend` | ~102 | 1751-1794 | A7 (Basra) zaten saf Zend |
| **4** | `celayirli` | ~49 | 1340-1431 | Irak'ın tamamı + Azerbaycan'ın ikinci yarısı |
| **5** | `muzafferi` | 41 | 1318-1393 | bitişi TDV ile **birebir** uyuyor, en düşük riskli |
| **6** | `ozbek` | 18 | 1507-1510 | tarih zaten doğru, yalnız ad değişiyor |
| **7** | `kert` + `serbedari` | 18 | 1337-1386/89 | coğrafî bölme gerekiyor (Herat ↔ Sebzevâr) |
| **8** | `cobanli` | 21 | 1335-1357 | ⚠ TDV'de müstakil madde yok, `iran` maddesinden |
| **9** | `marasi` | 5 | 1359-1596 | ⚠ henüz doğrulanmadı |
| **10** | `sirvansah` | 3 | →1538 | küçük ama kimlik `renkler.py`'de zaten **tanımsız** |

**Bugün renk sahibi olanlar:** `ilhanli` · `timurlu` · `karakoyunlu` · `akkoyunlu` ·
`safevi` · `buhara` · `hive` · `iran`.
**Renk isteyenler (11):** `afsar` · `zend` · `kacar` · `celayirli` · `muzafferi` ·
`serbedari` · `kert` · `ozbek` · `sirvansah` · `cobanli` · `marasi`.

### 6.3 · Renk kısıtı — VERİ KİMLİK'e not

⚠️ **`renkler.py` benim dosyam değil**, hex önermiyorum. Ama bir **kısıt** öneriyorum
ve gerekçesi §2'nin ölçümü:

> Bu 11 kimliğin çoğu **birbirinin ardılı** ve haritada **yan yana** duruyorlar
> (44/47 komşuluk). DSATUR yalnız *"komşular ayırt edilsin"* diye çalışırsa
> Afşar-Zend-Kaçar birbirinden **maksimum uzak** üç renk alır ve kullanıcı üç ayrı
> ülke görür. Oysa istenen okuma: *"aynı ülke, başka hanedan."*
>
> ⇒ **Aynı ülkenin ardıl hanedanları bir renk AİLESİ paylaşmalı** (ton aynı,
> parlaklık/doygunluk farklı); DSATUR kısıtı aileler **arasında** uygulanmalı.
> Emsal zaten var: `safevi` **#6b4a7d** mor, `ilhanli` **#7a5ba0** mor.

📌 Bu bir **yeni işlev** talebi, ölçümden çıkan bir kusur değil — `ORGANIZASYON`
gereği kullanıcıya sorulması gereken sınıfta. Kararı koordinatöre bırakıyorum.

### 6.4 · Uygulama notu — kimin işi

Öneriler `yerlesimler.js`'e işlenecek; o dosyanın yazarı **YAMACI / koordinatör**.
24 grubun her biri **tek bir toplu değişiklik**; ama `CLAUDE.md §11`'in
`replace(eski, yeni, 1)` tuzağı burada birebir geçerli: `1736-03-08` damgası
**101 kayıtta** aynı, tek eşleşme değiştirilirse sessiz sahipsizlik açar.
⇒ Yama betiği yazılırken **tüm eşleşmeler** değiştirilmeli ve arkasından
**Değişmez 1 + Değişmez 2** koşturulmalı.

---

## 7. AÇIK KALANLAR — sıradaki turum

1. **Grup A'nın gün hassasiyetli sınırları.** Afşar→Zend→Kaçar geçişi tek bir
   tarih değil: 1747-1751 fetret, Zend güneybatıda / Afşar Horasan'da **aynı anda**.
   Nokta nokta bölme gerekiyor; kaynak `zendler` + `avsarlilar` + `kacarlar`.
2. **B4 ve B5'in coğrafî bölünmesi** (Çobanlı↔Celâyirli, Kert↔Serbedârî).
3. **Ç2 ve Ç5'in ikinci çekişi** — `devletler.js`'teki `ilhanli` ömrü ve `isfahan`.
4. **`marasi` (Mâzenderan) doğrulaması** — TDV'de slug aranacak.
5. 🟡 **İkinci iş: Memlük** — Kızıldeniz kıyısındaki 39,7 yıl fazlalık ve
   Suriye-Filistin-Hicaz kesiti. Henüz başlamadım.

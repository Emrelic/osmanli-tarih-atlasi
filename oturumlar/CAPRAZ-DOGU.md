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

## 7. AÇIK KALANLAR — Teslim 1 sonunda

1. ✅ **Grup A'nın gün hassasiyetli sınırları** → §8'de yapıldı
2. **B4 ve B5'in coğrafî bölünmesi** (Çobanlı↔Celâyirli, Kert↔Serbedârî)
3. **Ç2 ve Ç5'in ikinci çekişi** — `devletler.js`'teki `ilhanli` ömrü ve `isfahan`
4. **`marasi` (Mâzenderan) doğrulaması** — TDV'de slug aranacak
5. 🟡 **İkinci iş: Memlük** — Kızıldeniz 39,7 yıl fazlalık, Suriye-Filistin-Hicaz

---
---

# TESLİM 2 — Grup A'nın hanedan bölünmesi ve renk ailesi ölçümü

> Kullanıcı kararı geldi: **"aynı renk ailesi, farklı parlaklık."** §9'da ölçtüm —
> karar **uygulanabilir**, ama uygulanabildiği yer ile uygulanamadığı yer ayrı.

---

## 8. GRUP A — 130 pencerenin blok blok bölünmesi

### 8.1 · Kaynak iskeleti — yalnız TDV'den, gün hassasiyeti korunarak

| olay | tarih | kaynak | hassasiyet |
|---|---|---|---|
| Nâdir Şah Mugan'da taç giydi | **1736-03-08** | `nadir-sah--iran` + `avsarlilar` (24 Şevval 1148) | **gün** ✓ iki madde |
| Nâdir Şah öldürüldü | **1747-06-20** | `nadir-sah--iran` (11 Cemâziyelâhir 1160) | **gün** ✓ |
| Kerim Han Isfahan'a girdi | **1751-01** | `kerim-han-zend` (*"1751 yılının Ocak ayında"*) | **ay** |
| Kerim Han Şiraz'a yerleşti | **1765** | `kerim-han-zend` | **yıl** |
| Kerim Han öldü | **1779-03-02** | `kerim-han-zend` (13 Safer 1193) | **gün** ✓ |
| Lutf Ali Han öldürüldü | **1794-12** | `zendler` (Cemâziyelâhir 1209) | **ay** |
| Ağa Muhammed Han Tahran'da taç giydi | **1796** | `kacarlar` | **yıl** |
| Son Afşar Horasan'da idam edildi | **1804-02** | `avsarlilar` | **ay** |

⚠️ `§4⑤` gereği **hassasiyet olduğu gibi taşınır**: ay bilinen yerde `YYYY-MM-01`
+ `gun:` alanı; yıl bilinen yerde `YYYY-01-01`. **Gün uydurmadım.**

🟢 **Yeni kazanç:** `kerim-han-zend` Kerim Han'ın ölümüne **13 Safer 1193 / 2 Mart
1779** diyor; `zendler` maddesi yalnız *"Mart 1779"* veriyordu. `§4④` (olayın kendi
maddesi esastır) burada **gün hassasiyeti kazandırdı** — hanedan maddesinden
kişinin maddesine inmek bir basamak keskinlik verdi.

### 8.2 · 130 pencere altı coğrafî bloğa ayrıldı

| blok | pencere | mevcut bitişler |
|---|---|---|
| FARS-GÜNEY-KİRMAN | 41 | 1923-10-29 ×41 |
| KAFKASYA | 25 | 1813-10-24 ×16 · 1923-10-29 ×6 · 1828-02-10 ×3 |
| ORTA-BATI İRAN | 23 | 1923-10-29 ×23 |
| HORASAN-SÎSTAN | 23 | 1923-10-29 ×19 · 1860-01-01 ×3 · 1785-01-01 ×1 |
| HAZAR-GÎLÂN-MÂZENDERAN | 12 | 1923-10-29 ×12 |
| HÂRİZM | 5 | 1747-06-20 ×5 |
| IRAK (Basra) | 1 | 1779-04-01 ×1 |

### 8.3 · 🟢 SIFIR RİSKLİ — 6 pencere, tek kelime değişiyor

Bu altısında **tarih hiç değişmiyor**, yalnız `d:"iran"` → doğru hanedan:

```
HÂRİZM      Hîve · Hazârasp · Köhne Ürgenç · Yeni Ürgenç · Küngrat
            {f:"1740-01-01", t:"1747-06-20", d:"iran"}  →  d:"afsar"
            gerekçe: pencerenin bitişi Nâdir Şah'ın öldüğü GÜN

IRAK        Basra
            {f:"1776-04-16", t:"1779-04-01", d:"iran"}  →  d:"zend"
            gerekçe: TDV `zendler` — Sâdık Han Zend'in 1776 Basra işgali
```

📌 Bu altı pencere §5'te söylediğim şeyin kanıtı: **veri hanedanı zaten biliyor,
adını koymuyor.** Tarihler hanedan sınırına gün gün oturmuş.

### 8.4 · 🟢 DÜŞÜK RİSKLİ — 130 pencerenin HEPSİNİN ön dilimi

```
BÜTÜN Grup A:  {f:"1736-03-08", …, d:"iran"}
            →  {f:"1736-03-08", t:"1747-06-20", d:"afsar"}  + arkasından blok zinciri
```
İki ucu da **gün hassasiyetinde ve iki bağımsız TDV maddesiyle** doğrulanmış.
Bu tek adım **11 yıl × 130 pencereyi** torbadan çıkarıyor ve hiçbir yorum istemiyor.

### 8.5 · 🟡 ORTA RİSKLİ — HORASAN-SÎSTAN (23 pencere)

Horasan, Nâdir'in ölümünden sonra **Afşar elinde kaldı** (Şahruh Şah); İran'ın geri
kalanından ayrı bir zaman çizgisi izliyor.

```
afsar   1736-03-08 → 1796-01-01     (Şahruh, TDV `avsarlilar` süreklilik veriyor)
kacar   1796-01-01 → [mevcut bitiş: 1923-10-29 ×19 · 1860-01-01 ×3 · 1785-01-01 ×1]
```

⚠️ **Çelişki Ç6 (kaydedildi, çözülmedi):** TDV `avsarlilar` Afşar hâkimiyetinin
Horasan'da **Şubat 1804**'e kadar sürdüğünü söylüyor; `kacarlar` ve Ağa Muhammed
Han'ın Meşhed seferi **1796**'yı veriyor. İkisi çelişmiyor da olabilir (1796
Şahruh'un tahttan indirilmesi, 1804 son Afşar iddiacısının idamı) ama **hangisinin
"hâkimiyet sonu" olduğu kaynaklarda ayrılmıyor.** Ben 1796'yı önerdim çünkü
haritada *hâkimiyet* boyanıyor, *iddia* değil — ama karar koordinatörün.

### 8.6 · 🔴 AÇIK — 76 pencere fetret, 25 pencere Kafkasya

**Fetret (FARS-GÜNEY 41 + ORTA-BATI 23 + HAZAR 12 = 76):**
```
afsar    1736-03-08 → 1747-06-20      ✓ kaynaklı
???      1747-06-20 → 1751-01-01      🔴 DOĞRULANAMADI — kimlik önermiyorum
zend     1751-01-01 → 1794-12-01      ✓ kaynaklı (ay hassasiyeti)
kacar    1794-12-01 → 1923-10-29      ✓ kaynaklı
```
🔴 **1747-1751 fetreti için kabul edilebilir kaynak bulamadım.** Bölgesel
hâkimiyet dağılımını (Azerbaycan'da Âzâd Han, Mâzenderan'da Muhammed Hasan Han
Kaçar, Horasan'da Şahruh) yalnız **Vikipedi türevi** aramalarda bulabildim ve
`CAPRAZ-GOREV §3` gereği *"Vikipedi aday üreticidir, kaynak değil."*
**Hüküm: doğrulanamadı** — ve `§8` gereği bu **tam bir hüküm**, boşluk değil.

⚠️ Aynı sebeple **HAZAR bloğunun 12 penceresi işaretli**: 1751-1759 arası
Gîlân/Mâzenderan'ın Zend değil Kaçar (Muhammed Hasan Han) elinde olduğu iddiası
var ama doğrulanmadı. Şimdilik Zend zinciriyle bıraktım, **işaretli**.

**KAFKASYA (25 pencere) — bir sonraki turun asıl işi:**
```
afsar    1736-03-08 → 1747-06-20      ✓ kaynaklı
???      1747-06-20 → 1795/96         🔴 HANLIKLAR — sınanacak iddia
kacar    1795/96 → [1813-10-24 ×16 · 1828-02-10 ×3 · 1923-10-29 ×6]
```
🔴 **Sınanacak iddia:** *"Nâdir Şah'ın ölümünden Ağa Muhammed Han'ın 1795 seferine
kadar Kafkasya hanlıkları (Karabağ · Şeki · Şirvan · Bakü · Kuba · Gence · Revan ·
Nahçıvan · Talış) fiilen bağımsızdı; veri onları kesintisiz İran boyuyor."*
Doğruysa **48 yıl × 25 nokta** hayalet İran hâkimiyeti demektir. Her hanlığın TDV
maddesi ayrı ayrı sınanacak — sonraki tur.

### 8.7 · Uygulama uyarısı — YAMACI'ya

`1736-03-08` damgası **130 kayıtta aynı**. `CLAUDE.md §11`'in
`replace(eski, yeni, 1)` tuzağı birebir geçerli: tek eşleşme değiştirilirse
sessiz sahipsizlik penceresi açılır. **Tüm eşleşmeler** değişmeli, arkasından
**Değişmez 1 + Değişmez 2** koşmalı.

---

## 9. ⭐ RENK AİLESİ — kullanıcının kararı ölçüldü: uygulanabilir, ama her yerde değil

Kullanıcı *"aynı renk ailesi, farklı parlaklık"* dedi. MOTOR'un ölçtüğü tavan:
**%44 opaklıkta bir ailenin L\* genişliği 28,7** ve altı üye 10'ar basamak
istediğinde ulaşılabilir azami fark **6**. Yani *"aile kaç üye taşır"* sorusunun
cevabı sabit değil — **kaç üyenin AYNI ANDA yaşadığına** bağlı.

### 9.1 · Ölçüm: İran ailesinin azami eş zamanlı üye sayısı

```
AZAMİ EŞ ZAMANLI ÜYE: 9   (yıl 1378)
   celayirli · muzafferi · kert · serbedari · marasi
   sirvansah · timurlu · karakoyunlu · akkoyunlu

yıl    eş zamanlı üye
1300    3      1450    5      1600    1      1750    1
1350    6      1500    5      1650    1      1775    2
1375    8      1525    4      1700    1      1800    2
1400    6      1550    3      1725    1      1825+   1
```

### 9.2 · 🔴 Sonuç: karar 1600 SONRASI bedava, 1335-1500 arası İMKÂNSIZ

| dönem | eş zamanlı üye | 28,7 L\* kaç basamağa böler | hüküm |
|---|---|---|---|
| 1600-1923 | **1-2** | 14,3 · **istenen 10'un üstünde** | 🟢 **uygulanabilir** |
| 1500-1600 | 3-5 | 7,2-9,6 | 🟡 sınırda |
| 1335-1500 | **6-9** | 3,2-5,7 · **istenenin yarısından az** | 🔴 **imkânsız** |

### 9.3 · Ve bu bir kusur değil — DOĞRU okuma zaten farklı

1378'de İran'da dokuz devlet var çünkü **İran gerçekten parçalanmıştı.** Orada
kullanıcının istediği okuma (*"aynı ülke, başka hanedan"*) tarihen **yanlış** olur;
doğru okuma *"İran dağıldı, birbiriyle savaşan ayrı devletler"*. Aile boyası
o okumayı **gizler.**

⇒ **Önerim — iki ayrı kural, ikisi de kullanıcının kararına sadık:**

```
① ARDIL ZİNCİR  →  AİLE (aynı ton, parlaklıkla ayrılır)
   ilhanli → safevi → afsar → zend → kacar
   "aynı ülkenin ardıl hanedanı" okuması DOĞRU olduğu tek küme

② PARÇALANMA DEVLETLERİ  →  AYRI TON (normal DSATUR)
   cobanli · celayirli · muzafferi · kert · serbedari · marasi
   sirvansah · timurlu · karakoyunlu · akkoyunlu · ozbek
   bunlar birbirinin ardılı DEĞİL, birbirinin RAKİBİ
```

### 9.4 · 🟢 Ve ① için ölçüm çok rahat çıkıyor — üç basamak yetiyor

Ardıl zincirin beş üyesi var ama **hiçbir anda ikiden fazlası yaşamıyor.**
Örtüşmeyen üyeler **aynı parlaklık basamağını paylaşabilir**:

| basamak | üyeler | örtüşür mü |
|---|---|---|
| **1** | `ilhanli` (1256-1335) + `kacar` (1796-1925) | hiç örtüşmüyor ✓ |
| **2** | `safevi` (1501-1736) + `zend` (1751-1794) | hiç örtüşmüyor ✓ |
| **3** | `afsar` (1736-1804) | — |

Sınama: `afsar`+`zend` 1751-94'te birlikte → basamak 3 ↔ 2 **farklı** ✓ ·
`afsar`+`kacar` 1796-1804'te birlikte → 3 ↔ 1 **farklı** ✓

```
3 basamak → 2 aralık → 28,7 / 2 = 14,3 L*  ⇒ istenen 10'un ÜSTÜNDE, payı da var
```

📌 **Kilit fikir:** parlaklık basamağı **hanedan başına değil, ÇAKIŞMA başına**
dağıtılır. Beş hanedana beş basamak arandığı için tavan yetmiyor görünüyordu;
zaman ekseni hesaba katılınca üç basamak yetiyor ve **ölçülen tavanın yarısı boş
kalıyor.** Kullanıcının kararı, kısıtı zorlamadan uygulanabiliyor.

⚠️ `renkler.py` benim dosyam değil — hex önermiyorum. Yukarıdaki **kısıt**
VERİ KİMLİK'e girdi: `safevi #6b4a7d` ile `ilhanli #7a5ba0` zaten bu ailenin
içinde, zincir onların tonundan türetilebilir.

---

## 10. AÇIK KALANLAR — sıradaki tur

1. 🔴 **Kafkasya hanlıkları 1747-1795** — 48 yıl × 25 nokta hayalet İran olabilir.
   Her hanlığın TDV maddesi ayrı sınanacak. **En yüksek öncelik.**
2. 🔴 **1747-1751 fetretine kabul edilebilir kaynak** — Iranica ve Britannica
   **HTTP 403** veriyor (§11), başka bir akademik kaynak gerekiyor.
3. B4/B5 coğrafî bölme · Ç2, Ç5, Ç6 ikinci çekiş · `marasi` slug araması
4. 🟡 **İkinci iş: Memlük**

---

## 11. ⚠️ KAYNAK ERİŞİMİ — ÇAPRAZ KUZEY ve BATI'yı da ilgilendirir (Teslim 2)

`CAPRAZ-GOREV §3` *"bir dış devletin kendi iç kronolojisi → o devletin akademik
kaynağı"* diyor. İran için o kaynak **Encyclopaedia Iranica**'dır ve:

```
iranicaonline.org        HTTP 403 Forbidden   (3 deneme, farklı maddeler)
britannica.com           HTTP 403 Forbidden   (2 deneme)
```

⇒ Bu turda çapraz kaynak olarak **yalnız TDV'nin kendi içindeki farklı maddeleri**
kullanabildim (`avsarlilar` ↔ `nadir-sah--iran` gibi). Bu **gerçek bir çapraz
doğrulama** ama *"karşı tarafın kendi tarih yazımı"* değil — görev tanımının asıl
istediği şey henüz sağlanamıyor.

📌 KUZEY (Rus kaynakları) ve BATI (Venedik arşivi) aynı duvara çarpacaksa **ortak
bir çözüm gerekiyor** — koordinatöre bildirdim.

---
---

# TESLİM 3 — Kafkasya: iddia DOĞRULANDI, altından ikinci hata çıktı

> Sınanacak iddia: *"Nâdir Şah'ın ölümünden Ağa Muhammed Han'ın 1795 seferine
> kadar Kafkasya hanlıkları fiilen bağımsızdı; veri onları kesintisiz İran
> boyuyor."* **Doğrulandı** — dört bağımsız TDV maddesiyle.

---

## 12. 🔴 BULGU: 1188 NOKTA-YIL HAYALET İRAN HÂKİMİYETİ

### ② Kaynakta ne var — dört madde, dördü de aynı şeyi söylüyor

| madde | ne diyor |
|---|---|
| `karabag` 🟢 | *Penah Ali*, Nâdir Şah'ın 1747'deki ölümünden sonra Horasan'dan dönüp **hanlığı kurdu**; 1748-1750'de Bayat, Şahbulak, Askeran ve **Şuşa (Penahâbâd)** kalelerini yaptırdı |
| `gence` 🟢 | *"Nâdir Şah'ın ölümünden sonra Gence, XVIII. yüzyılın ortalarında Azerbaycan'da kurulan **yarı müstakil hanlıklardan biri** oldu"* |
| `baku` 🟢 | *"**bağımsız** Bakü Hanlığı kurulduğunda (1747)"* |
| `sirvan` 🟢 | 1747'den sonra Şirvan hanları belirgin **özerklikle** yönetti |

### ① Bizde ne var

25 Kafkasya noktasının **hepsi** `iran 1736-03-08 → 1813-10-24` (ya da
`1828-02-10`) taşıyor. Hanlıkların hiçbiri veride **yok**.

```
25 nokta × 47,5 yıl (1747-06-20 → 1795-01-01) = 1188 nokta-yıl hayalet İran
```

### ③ Hüküm: **ÇELİŞİYOR** — `§3.5` sınıfının Doğu'daki en büyük vakası

Karşılaştırma: `CLAUDE.md §3.5` tablosunda Batnoz 84 yıl, İbrim 38 yıl, Sevâkin
40 yıl. **Bu vaka 25 noktada 47,5 yıl** — tek tek daha küçük, toplamda hepsinden
büyük.

📌 **Ama kusurun cinsi farklı ve bu önemli.** `§3.5` *"devlet o tarihte yaşıyor
mu"* diye soruyor; İran 1795'te **gerçekten vardı.** Buradaki kusur şu: **o
tarihte oraya hâkim değildi.** Ömür denetimi bunu göremez.
⇒ **Ayrı bir denetim sınıfı gerekiyor** — DENETÇİ'ye not.

---

## 13. 🔴 İKİNCİ HATA: RUS FETHİ TOPTAN 1813'E BAĞLANMIŞ

İddiayı sınarken beklemediğim bir şey çıktı. Üç hanlık **Gülistan'dan önce**
Rus oldu:

| nokta | veride | TDV'de | fazla |
|---|---|---|---|
| **Gence** | `1813-10-24` | **1804-01-03** — *"Han Cevâd Han şehid düşerek şehir Rusya'nın eline geçti"* (kuşatma 20 Kasım 1803) | **9,8 yıl** |
| **Berde (Karabağ)** | `1813-10-24` | **1805-05** Kürekçay | **8,4 yıl** |
| **Şuşa** | `1813-10-24` | **1805-05** Kürekçay | **8,4 yıl** |
| **Bakü** | `1813-10-24` | **1806** Rus ilhakı | **7,8 yıl** |
| Şamahı | `1813-10-24` | 1813 Gülistan | ✓ uyuyor |

⚠️ **Yalnız 5 nokta sınandı, 20'si sınanmadı.** Desen tuttuğuna göre oradan da
çıkması beklenir ama **ölçmeden söylemiyorum** (`§7④`).

📌 Gülistan **hukukî** tarihtir, fiilî fetih değil. Proje bu ayrımı zaten biliyor
(`KARAR-DAYANAK 19-20`, *"fiilî çekilme"*) — burada uygulanmamış.

---

## 14. ⭐ VE AĞA MUHAMMED HAN ŞUŞA'YI ALAMADI — kendi önerimi çürüttüm

`karabag`: Ağa Muhammed Han **1795'te Şuşa'yı kuşattı ve alamadı**; 1797'deki
ikinci kuşatmada İbrâhim Halil Han çekildi, ama Ağa Muhammed **Haziran 1797'de
öldürülünce** geri döndü.

⇒ §8.6'da önerdiğim `kacar 1795/96 → …` zinciri Karabağ'ın iki noktasında
(Berde, Şuşa) **tutmuyor**: orada Kaçar hâkimiyeti hiç kurulmadı, hanlık
doğrudan **1805 Kürekçay'la Rusya'ya** geçti.

📌 Kendi önerimi kendi turumda çürüttüğüm ilk vaka — ve tam bu yüzden nokta
nokta sınanması gerekiyordu. Toplu kabul edilseydi **1795-1805 arası on yıllık
sahte Kaçar hâkimiyeti** yazmış olacaktık.

---

## 15. ⭐ KENDİ VERİMİZİN İÇ KANITI — kardeş nokta çelişkisi

Koordinatörün çerçeve düzeltmesini (*"bir kaydımız, kardeşlerinin taşıdığı
zinciri taşıyor mu"*) Kafkasya'ya uyguladım. **Yöntem:** 100 km içindeki
çiftler, aynı tarihte farklı devlet gösteriyor mu? (Osmanlı↔tâbi muaf.)

```
1300-06-15   18 çelişkili kardeş çift
1350-06-15    0
1400-06-15   12
1440-06-15   12
1480-06-15   12
             --  54 vaka
```

**En sıkı vakalar:**
```
34 km   Nahçıvan  iran  <->  Culfa    ilhanli / timurlu / karakoyunlu / akkoyunlu
43 km   Ereş      iran  <->  Berde    (aynı dört kesitte dört ayrı devlet)
63 km   Nahçıvan  iran  <->  Ordubad
73 km   Gence     iran  <->  Berde
```

### Kafkasya'da iki kodlama deseni var, komşular birbirine karışmış

```
DESEN A (13 nokta) — ayrıntılı, büyük ölçüde doğru
  ilhanli 1281→1335 | iran 1335→1386 | timurlu 1386→1406-10-21
  karakoyunlu 1406→1468-04-01 | akkoyunlu 1468→1501-07-01 | safevi 1501→…
  Hoy · Merend · Culfa · Ahar · Mâku · Astara · Lenkeran · Berde · Şuşa · Ordubad
  (+ Salyan · Kuba · Şeki, `iran 1335→1538` varyantı)

DESEN B (12 nokta) — düz torba
  iran 1281→1501-07-01 | safevi 1501→…
  Tarki · Ağraham · Nahçıvan · Revan · Gence · Şamahı · Bakü · Derbend
  Kabala · Ereş · Şâbüran · Mahmudâbâd
```

⇒ **Onarım tarifi hazır: Desen B noktaları Desen A'daki kardeşinin zincirini
alır.** Nahçıvan → Culfa'nınki, Gence → Berde'ninki.

⚠️ **`40a66fc`/Srebrenik dersi birebir geçerli:** *"yanlış komşu kopyalanmıştı."*
Kardeş **coğrafî yakınlığa göre değil, aynı siyasî birime ait olmaya göre**
seçilmeli. Nahçıvan-Culfa doğru (ikisi de Nahçıvan hattı), Gence-Berde doğru;
ama **Tarki** (Dağıstan, Kumuk şamhallığı) hiçbirine benzemez, ayrı ele alınmalı.

### 📌 Ve yöntemin kendi körlüğü ölçüldü: 1350'de sıfır çelişki

1350 kesitinde hiç çelişki çıkmadı — çünkü **o tarihte iki desen de `iran`**
diyor (Desen A'nın `iran 1335→1386` dilimi).

> **Torba, kardeş karşılaştırmasına tam olarak kendi en geniş olduğu pencerede
> görünmez oluyor.**

⇒ Yöntem güçlü ama **torbanın çakıştığı yerde kör.** Orada tek çare dış kaynak —
bu da §11'deki erişim sorununu daha önemli yapıyor. Sınırı **ölçerek**
söylüyorum, tahmin ederek değil.

---

## 16. 🔴 ÜÇÜNCÜ BULGU: ŞİRVAN İKİYE BÖLÜNMÜŞ, BAŞKENT YANLIŞ TARAFTA

TDV `sirvan`: bölge **Şamahı · Bakü · Kabala · Şâbüran · Mahmudâbâd · Salyan ·
Derbend**'i kapsıyor. Bizde bu noktalar **iki ayrı zincire** dağılmış:

```
sirvansah davranışı (3)   iran 1335→1538 | safevi 1538→…   Salyan · Kuba · Şeki
düz torba          (7)    iran 1281→1501 | safevi 1501→…   Şamahı · Bakü · Kabala
                                                           Şâbüran · Mahmudâbâd
                                                           Ereş · Derbend
```

🔴 **Şamahı Şirvanşahlar'ın başkenti**, Bakü ise XV. yüzyıldan sonra başkent
(TDV `baku`: *"Şirvanşahlar'ın başşehri"*). **İkisi de yanlış grupta** —
başkent, taşrasından daha kaba kodlanmış.

⇒ §3.2'deki B7 önerim genişliyor: `sirvansah` **3 noktaya değil 10 noktaya**
uygulanmalı, bitiş TDV'nin verdiği **Ekim 1538**.

---

## 17. ÖNERİ — Kafkasya nasıl modellenecek (iki seçenek, karar sende)

25 nokta yaklaşık **12 hanlığa** dağılıyor: Karabağ · Gence · Şirvan · Bakü ·
Kuba · Şeki · Derbend · Talış · Revan · Nahçıvan · Karadağ · Hoy-Mâku
(+ Tarki: Kumuk şamhallığı).

| | **Seçenek 1 — her hanlık ayrı kimlik** | **Seçenek 2 — tek `kafkas-hanliklari`** |
|---|---|---|
| renk | **12 yeni renk** | **1 yeni renk** |
| gösterir | hanlıkların ayrı olduğunu | *"ne İran ne Rusya"* ara sınıfı |
| gizler | — | hanlıklar arası rekabeti |
| §9 kuralı | çağdaş rakipler → ayrı ton **gerekir** | — |

🟡 **Önerim Seçenek 2**, gerekçesi §9'un ölçümü: 12 çağdaş kimlik 12 ayrı ton
ister, oysa bu 25 nokta haritada **avuç içi kadar** bir alanda. 12 ton orada
okunmaz. Tek sınıf + nokta başına `k:` etiketi, kullanıcının gördüğü asıl
bilgiyi (*"İran burayı 1747'de kaybetti, Rusya 1804-1813'te aldı"*)
kaybetmeden veriyor.
⚠️ Bu bir **gösterim kararı**, ölçümden çıkan kusur değil — kullanıcıya
sorulacak sınıfta. Ben ölçtüm, karar sende.

---

## 18. AÇIK KALANLAR — Teslim 3 sonu

1. 🔴 **Kalan 20 Kafkasya noktasının Rus fetih tarihi** — 5'inde desen çıktı,
   20'si **sınanmadı** (Revan 1827, Nahçıvan 1828, Kuba/Derbend 1806, Şeki 1805
   beklenir ama ölçülmedi)
2. 🔴 1747-1751 fetreti — hâlâ kaynaksız (§11)
3. B4/B5 coğrafî bölme · Ç2, Ç5, Ç6 ikinci çekiş · `marasi` slug
4. 🟡 **İkinci iş: Memlük** — henüz başlamadım

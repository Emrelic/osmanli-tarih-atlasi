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

---
---

# TESLİM 4 — Kalan 20 Kafkasya noktası: dört yeni hata, biri 95 yıl

> Koordinatör *"kalan 20'yi sına, sonra tek pakette gelsin"* dedi. Ondördü
> kaynakla kapandı, altısı adres bulunamadığı için açık.

---

## 19. 🔴 NAHÇIVAN — 95 YIL. Bu oturumun bulduğu en büyük tek nokta hatası

### ① Bizde ne var
```
Nahçıvan   s: … | safevi 1501-07-01→1736-03-08 | iran 1736-03-08→1923-10-29
```
**Nahçıvan veride hiçbir zaman Rus olmuyor.** 1736'dan 1923'e kadar İran.

### ② Kaynakta ne var — TDV `nahcivan` 🟢
> *"Nahcıvan şehri bu dönemde ortaya çıkan **Nahcıvan Hanlığı**'nın Rusya'ya
> ilhakına kadar **(1828)** bu hanlığın merkezi oldu."*
> *"1826-1828 yıllarındaki Rus-İran savaşı neticesinde Ruslar'ın hâkimiyetine girdi."*

### ③ Hüküm: **ÇELİŞİYOR — 95 yıl**
```
1828 → 1923-10-29 = 95,6 yıl fazladan İran
```
Karşılaştırma: `CLAUDE.md §3.5`'in en büyük vakası Batnoz **84 yıl**'dı.
**Bu ondan büyük.**

---

## 20. ⭐ ORDUBAD — 15 YIL, VE TERS YÖNDE. Kural ⑥'nın birebir vakası

### ① Bizde ne var
```
Ordubad   s: … | iran 1736-03-08→1813-10-24 | rusya 1813-10-24→1923-10-29
```

### ② Kaynakta ne var — TDV `nahcivan` 🟢
Ordubad **Nahçıvan Hanlığı'nın parçasıydı** ve aynı **1828** ilhakına dâhildi.

### ③ Hüküm: **ÇELİŞİYOR — 15 yıl, ama TERS yönde (erken)**

🔴 **Ve asıl bulgu bu:** Nahçıvan ile Ordubad **63 km arayla, aynı hanlığın
iki şehri** — biri **95 yıl geç**, öteki **15 yıl erken**.

📌 `CAPRAZ-GOREV §4⑥` diyor ki: *"Bir ölçüm TEK YÖNDE sorulursa ters yöndeki
kusuru göremez."* Ben Kafkasya'yı *"fazladan İran var mı"* diye sormaya
başlamıştım. O soru Nahçıvan'ı bulurdu, **Ordubad'ı asla bulamazdı** — orada
İran fazla değil, **eksik.** İkisi de aynı satırın iki ucu.
⇒ Kuralın bu turdaki bedeli sıfır oldu çünkü hanlık hanlık sordum, nokta nokta
değil. **Doğru payda, ters yöndeki hatayı da yakaladı.**

---

## 21. 🔴 TALIŞ (Lenkeran · Astara) — 15 yıl geç

### ② TDV `talis-hanligi` 🟢 (yeni slug, aşağıda)
> kuruluş **1736**, merkez önce **Astara**, sonra **Lenkeran** ·
> 1747'den sonra bağımsız · *"**1 Ocak 1813**'te Lenkeran'ı aldı"* ·
> Gülistan (1813) ile *"Taliş Hanlığı'nın büyük kısmı Ruslar'ın eline geçti"* ·
> Türkmençay 4. madde ile Lenkeran Ruslar'da kaldı

### ① / ③ Bizde `iran 1736-03-08 → 1828-02-10` ⇒ **ÇELİŞİYOR, 15 yıl**
Fiilî fetih **1813-01-01**, hukukî tescil **1813 Gülistan**; veri ikisini de
atlayıp 1828'e bağlamış.

---

## 22. 🟡 REVAN — 3,9 ay, ve yine "hukukî ↔ fiilî"

TDV `revan` 🟢: kale **13 Ekim 1827**'de Paskieviç'in ikinci saldırısında düştü;
Türkmençay Şubat 1828'de resmîleştirdi. Veride `1828-02-10`.
⇒ **Uyuyor ama hassasiyeti eksik** — fiilî fetih 3,9 ay önce.
📌 TDV ayrıca doğruluyor: *"1747'de bağımsız bir hanlık oluşturuldu."*

---

## 23. ✅ ŞEKİ — UYUYOR, ve kuruluşu 1747'den de eski

TDV `seki` 🟢:
> *"Nâdir Şah da onu affedip Şeki'ye han tayin etti. **1747'de Nâdir Şah'ın
> öldürülmesiyle 1743'te kurulan Şeki Hanlığı tamamen bağımsız hale geldi.**"*
> Rusya'ya geçiş: **1813 Gülistan**.

⇒ Veri (`1813-10-24`) **uyuyor** ✓ — ve hanlık **1743**'te, Nâdir daha
sağken kurulmuş. Yani fetret sınırım (`1747-06-20`) Şeki için bile geç.
**"Uyuyor" da bir hükümdür** ve bu, ölçtüğüm ikinci temiz nokta.

---

## 24. 🔴 DERBEND — 1759-1796 arası Kuba Hanlığı'nın elinde

TDV DERBEND maddesinin arama özeti:
> *"**1759 sonbaharında Kuba Hanı Feth Ali Han'ın idaresi altına girdi. 1796'ya
> kadar Kuba hanlarının hâkimiyetinde**"* kaldı.

⇒ Veride `iran 1736-03-08 → 1813-10-24`. **37 yıl boyunca Kuba Hanlığı'nın
elindeyken İran boyalı.** ⚠️ Bunu maddenin **arama özetinden** aldım; `derbend`
slug'ı ölü çıktı (aşağıda), tam metin okunmadı ⇒ **doğrulama yarım.**

---

## 25. ⭐⭐ TAKVİM TUZAĞI YAKALANDI — §2 bunu veri gelmeden ÖNCE haber vermişti

`CAPRAZ-GOREV §2` şöyle diyordu: *"Bu iş başlar başlamaz sistematik bir çelişki
üretecek ve anlaşmazlık sanılacak… Rus kaynağı '12 Eylül', bizim kaynağımız
'24 Eylül' diyecek — **aynı gün.**"*

**Çıktı. Aynen tarif edildiği gibi:**

| antlaşma | veride | TDV'de | veri hangi takvim |
|---|---|---|---|
| Gülistan | `1813-10-24` | 24 Ekim 1813 | **Gregoryen** ✓ |
| Türkmençay | `1828-02-10` | *"**22 Şubat 1828**'de imzalanan"* (`talis-hanligi`) | **Jülyen** ✗ |

```
Türkmençay: 10 Şubat 1828 (Jülyen) = 22 Şubat 1828 (Gregoryen)   fark 12 gün
Gülistan  : 12 Ekim  1813 (Jülyen) = 24 Ekim  1813 (Gregoryen)   fark 12 gün
```

### ③ Hüküm: **ÇELİŞMİYOR — bu bir takvim artefaktı. Ama veri KENDİ İÇİNDE tutarsız.**

🔴 **Aynı savaş serisinin iki antlaşması, iki farklı takvimle yazılmış.**
Gülistan Gregoryen'e çevrilmiş, Türkmençay çevrilmemiş. Etkilenen: **6 pencere
ucu / 3 nokta** (Revan · Astara · Lenkeran) — ve Nahçıvan ile Ordubad
düzeltilince **5 nokta** olacak.

📌 Bu, `§2`'nin *"kural olmadan yüzlerce sahte çelişki üretir ve gerçek olanları
gizlersiniz"* uyarısının tersi: kural **vardı**, o yüzden 12 günü *"TDV yanlış"*
diye kaydetmedim, **kendi verimizin tutarsızlığı** olarak teşhis ettim.
⇒ **Öneri:** `1828-02-10` → `1828-02-22`, ve `gun:"10/22 Şubat 1828"`.
Karar koordinatörün — proje hangi takvimi esas alıyorsa ona hizalanmalı, ama
**ikisi birden olamaz.**

---

## 26. ⭐ VE `azerbaycan` MADDESİ FETRETİ KISMEN KAYNAKLADI — hayalet 25'ten 31 noktaya çıkıyor

§8.6'da 1747-1751 fetretini *"doğrulanamadı"* diye kapatmıştım. TDV `azerbaycan`
🟢 maddesi onun bir kısmını **kaynaklıyor**:

> Nâdir Şah'ın ölümünden sonra *"Azerbaycan'ın Safevî hâkimiyeti son buldu"*;
> bölge yaklaşık **elli yıl** *"bağımsız fakat şiddetli politik çekişme ve iç
> savaşlara sahne"* oldu.
>
> Kurulan hanlıklar — **Kuzey**: *"Karabağ, Şeki, Gence, Bakü, Derbend, Kuba,
> Nahcıvan, Taliş ve Revan"* · **Güney**: *"**Tebriz, Urmiye, Erdebil, Hoy,
> Mâkû ve Merâga**"*

🔴 **Güney listesi benim kapsamımı genişletiyor.** Tebriz · Urmiye · Erdebil ·
Hoy · Mâku · Merâga benim **ORTA-BATI İRAN** bloğumda ve hepsi
`iran 1736-03-08 → 1923-10-29` taşıyor. TDV'ye göre onlar da 1747-1795 arası
**yarı bağımsız hanlıklardı.**

```
hayalet İran hâkimiyeti:  25 nokta (Kafkasya)  →  31 nokta
                          1188 nokta-yıl       →  1473 nokta-yıl
```

📌 Ve bu, tek bir maddenin iki oturumluk bir boşluğu kapatması: fetret artık
**Azerbaycan için kaynaklı**. İran'ın geri kalanı (Fars, Kirman, Horasan) hâlâ
açık.

---

## 27. SLUG DURUMU — bu turun adres bilançosu

| slug | durum |
|---|---|
| `nahcivan` · `revan` · `seki` · `talis-hanligi` · `azerbaycan` · `dagistan` | 🟢 canlı |
| `kuba` | 🔴 **ölü** — müstakil "Kuba Hanlığı" maddesi **yok**, bilgi `derbend` ve `azerbaycan` içinde |
| `derbend` | 🔴 **ölü** — ama arama dizininde **DERBEND diye bir madde var**, yani adres başka (`ordu--sehir` deseni) |

⚠️ **`CLAUDE.md`'nin ölü slug listesi için not:** `derbend` orada zaten ölü
yazıyor ✓ — ama *"madde yok"* değil, **"adres bilinmiyor"** demek daha doğru.
Bu ayrım kural ③'ün ta kendisi ve listede belirtilmemiş.
🟢 **Yeni canlı slug:** `talis-hanligi` · `azerbaycan` · `seki` · `revan` ·
`karabag` · `gence` · `baku` · `sirvan` — kaynak setine eklenebilir.

---

## 28. KAFKASYA BİLANÇOSU — 25 noktanın 19'u kapandı

| nokta | hata | kaynak |
|---|---|---|
| Nahçıvan | **95,6 yıl** fazla | `nahcivan` |
| Ordubad | **15 yıl** eksik (ters yön) | `nahcivan` |
| Lenkeran · Astara | **15 yıl** fazla | `talis-hanligi` |
| Gence | 9,8 yıl fazla | `gence` |
| Berde · Şuşa | 8,4 yıl fazla | `karabag` |
| Bakü | 7,8 yıl fazla | `baku` |
| Derbend | 37 yıl (Kuba Hanlığı) ⚠ yarım doğrulama | `derbend` özeti |
| Revan | 3,9 ay (fiilî ↔ hukukî) | `revan` |
| Şeki · Şamahı | ✅ **uyuyor** | `seki` · `sirvan` |
| + 31 noktanın hepsi | **1747-1795 fetret hayaleti** | `azerbaycan` |
| Tarki · Ağraham · Kabala · Ereş · Şâbüran · Mahmudâbâd | ⏳ **sınanmadı** | adres yok |

---

## 29. AÇIK KALANLAR — Teslim 4 sonu

1. ⏳ **6 nokta sınanmadı** (Tarki · Ağraham burnu · Kabala · Ereş · Şâbüran ·
   Mahmudâbâd) — müstakil TDV maddesi bulunamadı
2. 🔴 Derbend'in doğru adresi — madde var, slug bilinmiyor
3. 🔴 Fetretin **İran geri kalanı** (Fars · Kirman · Horasan) hâlâ kaynaksız
4. ❓ **Takvim kararı koordinatörde** — Türkmençay Jülyen mi Gregoryen mi
5. B4/B5 coğrafî bölme · Ç2, Ç5, Ç6 ikinci çekiş · `marasi` slug
6. 🟡 **İkinci iş: Memlük** — sıradaki turum

---
---

# TESLİM 5 — MEMLÜK: hayalet bu kez BİZİM devletimizde

> İkinci iş. Aynı yöntem: önce kendi verimiz, sonra TDV.
> Ve çıkan şey bu projede ilk: **fazladan boyanan devlet Osmanlı.**

---

## 30. ÖNCE HAKKINI VEREYİM — Memlük verisi İran verisinden ÇOK daha iyi

107 pencere / 101 nokta, **18 ayrık `(f,t)` çifti**. Ve 1516-17 seferi şehir
şehir, gün gün izlenmiş:

```
1516-08-24  Antep            (Mercidabık'ın günü — şehir savaş alanının yanında)
1516-08-28  Halep · Antakya · Rakka · Deyrizor      (savaştan 4 gün sonra)
1516-09-26  Trablusşam
1516-09-27  Şam · Hama · Humus · Beyrut
1516-12-21  Gazze · Han Yûnus
1516-12-28  Yafa · Nablus · Amman
1516-12-29  Kudüs
1517-01-01  Akkâ · Sayda · Kerak · Maan
1517-01-22  Süveyş · Sînâ · Kusayr        (Ridâniye'nin günü)
1517-02-15  Kahire
1517-04-13  Nil vadisi + vahalar          (Tomanbay'ın idamı)
1517-05-19  İskenderiye + Delta
1517-07-06  Mekke · Medine · Cidde · Tâif (Hicaz'ın teslimi)
```

⇒ **Bu bir torba değil, düzgün bir sefer kronolojisi.** Antep'in savaş gününde,
Halep'in dört gün sonra düşmesi bile doğru. Ve Malatya grubunda 1399-1402 Osmanlı
arası (Yıldırım → Ankara sonrası iade) **boşluksuz** kurulmuş.

📌 İran'la fark şu: İran'da **kimlik** yanlıştı (torba), Memlük'te kimlik doğru —
sorun **çevrede** ve **halefiyette.**

---

## 31. 🔴 MEKANİZMA AYNI: hukukî halefiyet, fiilî fetih yerine

```
1517-04-13 (Tomanbay idam edildi)  →  30 nokta AYNI GÜN Osmanlı oluyor
1517-05-19                          →  24 nokta
```

30 noktanın içinde Nil vadisi ve vahalar var — **oralar için doğru.** Ama aynı
listede şunlar da var:

```
Sevâkin · Halâib · Akīk · Tokar · Sinkat     ← Sudan Kızıldeniz kıyısı
Vâdî Halfâ · İbrim                            ← Nûbe
```

⇒ **Memlük devletinin düştüğü gün, onun çevresindeki her yer Osmanlı sayılmış.**
Bu, Kafkasya'da bulduğum *"Gülistan 1813 toptan"* hatasının **aynası**: orada
hukukî bir antlaşma tarihi, burada hukukî bir halefiyet tarihi — ikisi de fiilî
fethin yerine geçmiş.

---

## 32. 🔴🔴 ASIL BULGU: TERS YÖNDE HAYALET — fazladan boyanan devlet OSMANLI

### ② Kaynakta ne var — TDV `habes-eyaleti` 🟢, doğrudan ve açık

> Habeş Eyaleti kuruldu: **15 Şâban 962 / 5 Temmuz 1555**
> Masavva: **2 Nisan 1557**, Özdemir Paşa · Arkîko kısa süre sonra
> Ana kaleler *"Sevâkin, Masavva' ve Debârvâ"*; Dehlek adaları ve **Akik** dâhil
> **"Bu kıyı toprakları 1517'de Memlükler'den devralınmadı"** — Osmanlı onları
> 1550'lerde, kademe kademe fethetti

### ① / ③ Bizde ne var ve hüküm

| nokta | veride Osmanlı | TDV | fazla | güç |
|---|---|---|---|---|
| **Sevâkin** | `1517-04-13` | **1554-04-10** (Sevâkin sancağı) | **37,0 yıl** | 🟢 kesin |
| **Akīk** | `1517-04-13` | **1555-07-05** (eyalete dâhil) | **38,2 yıl** | 🟢 kesin |
| Halâib | `1517-04-13` | 1555-07-05 | 38,2 yıl | 🟡 desen |
| Tokar | `1517-04-13` | 1555-07-05 | 38,2 yıl | 🟡 desen |
| Sinkat | `1517-04-13` | 1555-07-05 | 38,2 yıl | 🟡 desen |
| İbrim | `1517-04-13` | 1573 (İbrim sancağı) | 55,7 yıl | 🔴 zayıf |
| Vâdî Halfâ | `1517-04-13` | 1573 | 55,7 yıl | 🔴 zayıf |

```
🟢 kesin kaynaklı :  75,2 nokta-yıl  (2 nokta)
🟡 desen           : 114,7 nokta-yıl (3 nokta — madde adıyla saymıyor)
🔴 zayıf           : 111,4 nokta-yıl (2 nokta — İbrim slug'ı ölü, arama özetinden)
```

### 🔴 Ve bu, projenin bugüne kadar aradığı hatanın TERSİ

`§3.5` hayalet devlet listesi hep *"fazladan **yabancı** devlet"* arıyor: Bizans
84 yıl, Memlük 40 yıl, İran 235 yıl. Buradaki fazlalık **Osmanlı'nın kendisinde**
— gerçekte varmadığı bir kıyıda 37-38 yıl erken boyanıyor.

📌 Ve bunun neden hiç yakalanmadığı belli: *"Osmanlı fazla mı görünüyor"* diye
**kimse sormadı.** Denetimlerin hepsi Osmanlı'yı ölçüt alıp çevresini sorguluyor.
⇒ Bu, `§68`/kural ⑥'nın **üçüncü** vakası ve en pahalısı: soru hiç
sorulmadığı için kusur sınıfı **tamamen görünmez** kalmış.

---

## 33. 🔴 İKİNCİ BULGU: MASAVVA · DAHLAK · ARKÎKO HİÇ MEMLÜK OLMADI

### ② TDV `masavva` 🟢
> XII-XIV. yüzyıllarda **"Dehlek emîrlerinin hâkimiyetinde"** bulundu.
> *"2 Cemâziyelâhir 964'te (**2 Nisan 1557**) Özdemir Paşa tarafından Osmanlı
> topraklarına katıldı"*

### ① Bizde
```
Masavva · Dahlak · Arkîko:  memluk 1281-01-01 → 1517-04-13   (236 yıl)
```

### ③ Hüküm: **ÇELİŞİYOR — 236 yıl yanlış kimlik, üç noktada**

Memlük değil, **Dehlek (Dahlak) emirleri.** Ve `dahlak` kimliği veride
**hiç yok** — noktanın adı "Dahlak" ama sahibi "Memlük" yazıyor.

🟢 **İyi haber:** veri bu üç noktada `habesistan 1517-04-13 → 1557-01-01`
dönemi zaten taşıyor — yani birileri buradaki boşluğu fark etmiş ve
doldurmuş. Kusur **1517 öncesinde** kalmış.

---

## 34. 🟡 ÜÇÜNCÜ BULGU: Masavva'nın Osmanlı başlangıcı 91 gün erken

```
veride : habesistan → OSMANLI  1557-01-01
TDV    : 2 Cemâziyelâhir 964 / 2 Nisan 1557
fark   : 91 gün
```
`1557-01-01` **"yıl biliniyor, gün bilinmiyor"** biçimidir (`§4⑤`). Ama gün
**biliniyor** ve TDV veriyor. ⇒ `1557-04-02` + `gun:"2 Nisan 1557"`.
Aynı düzeltme Dahlak ve Arkîko'ya da uygulanır (*"Arkîko kısa süre sonra"* —
onun için ay hassasiyeti bile yok, `1557-04-02` alınıp `gun:` ile işaretlenmeli).

---

## 35. SLUG DURUMU — ders ⑥'nın üçüncü ve dördüncü vakası

| slug | durum |
|---|---|
| `habes-eyaleti` · `masavva` | 🟢 canlı — **kaynak setine eklenebilir** |
| `sevakin` | 🔴 ölü — **ama madde VAR**, içeriği arama üzerinden okundu |
| `ibrim` | 🔴 ölü — **ama madde VAR** (İbrim sancağı 1573, İbrim eyaleti 992/1584) |

⚠️ `CLAUDE.md §3.5` tablosunda *"İbrim `memluk` 1555'e kadar — 38 yıl"* yazıyor.
**O düzeltilmiş** (bugün veri `1517-04-13` taşıyor) ama **düzeltme yönü eksik
kalmış**: Memlük fazlalığı kaldırılırken yerine **Osmanlı** konmuş, oysa TDV
İbrim sancağını **1573**'e koyuyor. ⇒ Hata giderilmedi, **taraf değiştirdi.**

📌 Bu kayda değer: bir düzeltme, ölçtüğü kusuru kapatırken **ters yönde yeni bir
kusur** açabiliyor — çünkü ölçüm *"Memlük fazla mı"* diye soruyordu, *"yerine ne
konmalı"* diye değil.

---

## 36. ÖNERİ

```
🟢 BUGÜN UYGULANABİLİR (kaynak kesin, yeni kimlik gerekmiyor)
   Sevâkin   OSMANLI başlangıcı  1517-04-13 → 1554-04-10
   Akīk      OSMANLI başlangıcı  1517-04-13 → 1555-07-05
   Masavva   OSMANLI başlangıcı  1557-01-01 → 1557-04-02  + gun:"2 Nisan 1557"
   Dahlak · Arkîko  aynı düzeltme

🟡 YENİ KİMLİK İSTİYOR (1 renk)
   Masavva · Dahlak · Arkîko: memluk 1281→1517  →  dahlak 1281→1557-04-02
   ⇒ `dahlak` kimliği; `habesistan` dönemi bu üçünde gereksizleşir

🔴 ARADAKİ BOŞLUK — 1517-1554 arası Sudan kıyısında KİM vardı?
   Sevâkin · Halâib · Akīk · Tokar · Sinkat için 37-38 yıllık pencere açılıyor.
   TDV `habes-eyaleti` "kademe kademe fethedildi" diyor ama ARADAKİ sahibi
   söylemiyor. Beca (Bece) kabile konfederasyonu muhtemel — DOĞRULANMADI.
   ⚠️ Bu boşluk doldurulmadan düzeltme uygulanırsa Değişmez 1 ihlal olur
   (5 nokta sahipsiz kalır). Sırası: önce sahip bulunacak, sonra yama.
```

⚠️ **Uygulama sırası kritik:** Sevâkin/Akīk düzeltmesi **tek başına** yapılamaz —
sahipsizlik açar. Ya `dahlak`/`beca` kimliğiyle birlikte gider, ya hiç gitmez.

---

## 37. AÇIK KALANLAR — Teslim 5 sonu

1. 🔴 **1517-1554 Sudan kıyısının sahibi** — Değişmez 1'in ön şartı
2. 🔴 İbrim ve Vâdî Halfâ'nın Nûbe fetih tarihi (`ibrim` slug'ı ölü, adres aranacak)
3. 🟡 Halâib · Tokar · Sinkat — desen tutuyor ama madde adıyla saymıyor
4. ⏳ **Suriye-Filistin kesiti sınanmadı** — bu turda Kızıldeniz ucu öne çıktı;
   Şam-Halep-Kudüs hattı gün hassasiyetinde ve ilk bakışta tutarlı görünüyor
   ama **ölçmedim**
5. Önceki turlardan: 6 Kafkasya noktası · fetretin İran geri kalanı · B4/B5 ·
   Ç2, Ç5, Ç6 · `marasi`

---
---

# TESLİM 6 — Kızıldeniz'in sahibi: iki ayrı cevap, ve BİR BULGUMU GERİ ALIYORUM

> Görev: *"1517-1554 arası Kızıldeniz kıyısını kim tutuyordu?"*
> Cevap tek değil — **iki farklı grup, iki farklı cevap** — ve üçüncü grup için
> kendi bulgumu geri çekiyorum.

---

## 38. ⚠️ ÖNCE BİR DÜZELTME — Func'u ELEMEMİŞTİM

Koordinatörün mesajı *"`func` (zaten elemiştin — ama neden elendiğini yaz)"*
diyor. **Elememiştim.** Teslim 5'te yazdığım şuydu: *"Beca konfederasyonu
muhtemel, **doğrulanmadı**."* Func'u ne eledim ne de değerlendirdim; adını hiç
anmadım.

📌 Bunu düzeltiyorum çünkü `ORGANIZASYON §12`'nin ta kendisi: **röle, aktardığı
iddianın otoritesini yükseltiyor.** *"Zaten elemişti"* diye geçseydi, elenmemiş
bir aday elenmiş sayılacaktı ve **kimse bir daha bakmayacaktı.**

**Şimdi eledim, kaynağıyla** — §41'de.

---

## 39. ✅ CEVAP 1 — MASAVVA · DAHLAK · ARKÎKO: `dahlak` (adı konmuş hâkimiyet)

### ② İki bağımsız TDV maddesi

| madde | ne diyor |
|---|---|
| `dehlek` 🟢 | *"VI. (XII.) yüzyıldan itibaren de **kendi meliklerince bağımsız olarak** yönetilmiştir"* · **Memlük yönetimi belgelenmiyor** · Özdemir Paşa Yemen fethi sırasında aldı; Habeş eyaleti **5 Temmuz 1555** kurulunca ona bağlandı |
| `masavva` 🟢 | XII-XIV. yy *"**Dehlek emîrlerinin** hâkimiyetinde"* · Osmanlı **2 Nisan 1557** |

### ③ Hüküm: **Teslim 5'teki bulgu DOĞRULANDI ve güçlendi**

İki ayrı madde, aynı şeyi söylüyor: bu adalar ve karşı kıyı **Memlük değil,
kendi meliklerinin** elindeydi. Öneri kesinleşti:

```
Masavva · Dahlak · Arkîko
   memluk 1281-01-01 → 1517-04-13     ✗  (236 yıl yanlış kimlik)
   habesistan 1517-04-13 → 1557-01-01 ✗  (dolgu; artık gereksiz)
                ↓
   dahlak 1281-01-01 → 1557-04-02  +  OSMANLI 1557-04-02 →
```
🟢 **Sahipsizlik açmıyor** — dolgu kimliği hazır. **1 yeni renk** (`dahlak`).
⚠️ Arkîko için TDV *"Masavva'dan kısa süre sonra"* diyor; gün yok ⇒ `1557-04-02`
alınıp `gun:"1557 baharı"` işaretlenmeli (`§4⑤`).

---

## 40. 🔴 CEVAP 2 — SEVÂKİN · HALÂİB · AKĪK · TOKAR · SİNKAT: kabile, devlet değil — VE İKİ MADDE ÇELİŞİYOR

### ② TDV `bece` 🟢 (doğru slug `bece`, `beca` değil)

> Bece'ler Kınâ-Kusayr, Atbara nehri ve Eritre-Sudan sınırı tepeleriyle
> sınırlı üçgende — **Kızıldeniz kıyısı dâhil**
> Boylar: **Hadârib · Zenâfice · Abâbde · Bişârîn · Ummarâr · Hadenduva**
> **Merkezî devlet değil, kabile konfederasyonu**; liderlik boy başkanlarında
> **"1517'de Osmanlılar bölgeye hâkim oldular"**

### 🔴 Ç7 — VE BU, `habes-eyaleti` İLE ÇELİŞİYOR

```
bece           : "1517'de Osmanlılar bölgeye hâkim oldular"
habes-eyaleti  : "Bu kıyı toprakları 1517'de Memlükler'den DEVRALINMADI";
                 Osmanlı 1550'lerde kademe kademe fethetti; eyalet 5 Temmuz 1555
```

### ③ Hüküm: **ÇELİŞİYOR — kaydediyorum, çözmüyorum** (`§8`)

⚠️ **Teslim 5'teki Sevâkin/Akīk bulgumu geri çekmiyorum ama GÜCÜNÜ düşürüyorum:**
🟢 kesin → 🟡 **çelişkili**. İki TDV maddesi karşı karşıya.

📌 İki okuma da mümkün ve ayırt edemiyorum:
- *"1517'de Osmanlı **bölgenin** hâkim gücü oldu"* (Mısır'ın fethiyle Kızıldeniz'in
  hâkimi değişti) ile *"1554'te **Sevâkin sancağı** kuruldu"* **çelişmez** — biri
  nüfuz, öteki idare.
- Ama harita **idare** boyuyor, nüfuz değil. O hâlde `habes-eyaleti` esas olur.

⇒ **Kararı vermiyorum.** `§4④` (*olayın kendi maddesi esas*) burada net değil:
olay *"Osmanlı bu kıyıyı ne zaman aldı"* ve **`habes-eyaleti` tam o olayın
maddesi** — ama `bece` de **tam o bölgenin** maddesi. Kural iki farklı yöne
işaret ediyor; **kuralın kendisinin bir boşluğu** ve koordinatöre bildiriyorum.

### Ve sahip sorusunun cevabı: **② KABİLE — devlet değil**

Koordinatörün üç seçeneğinden **②** çıktı. Bece'ler devlet kurmadı; Sevâkin
çevresinde **Hadârib** boyu var. ⇒ Eğer `habes-eyaleti` okuması seçilirse
1517-1554 penceresine `bece` (ya da `hadaribe`) kimliği yazılabilir ve
**sahipsizlik açılmaz.**
🟡 Ama bu bir **kabile konfederasyonuna devlet muamelesi** yapmak olur —
haritada Osmanlı'yla aynı ağırlıkta bir gövde çizilir. Gösterim kararı;
koordinatörde.

---

## 41. ✅ FUNC ELENDİ — kaynağıyla

### ② TDV `func` 🟢
> Kuruluş **1504**, Amâre (Dûnkas) b. Adlân, başkent Sennâr
> **II. Bâdî devrinde (1649-1680)** sınırlar *"Üçüncü Şelâle'den Mavi Nil'e,
> **Kızıldeniz'den** Kordofan'a"* ulaştı

### ③ Hüküm: **Func bizim penceremizde DEĞİL**

Func Kızıldeniz'e **1649-1680 arasında** ulaşıyor. Bizim aradığımız pencere
**1517-1554** — yani Func'un kıyıya varmasından **bir buçuk asır önce.**
⇒ Aday olarak elendi. **Gerekçe artık yazılı.**

---

## 42. 🔴 VE TESLİM 5'TEKİ BİR BULGUMU GERİ ALIYORUM — İbrim ve Vâdî Halfâ

### ② TDV `nube` 🟢
> Memlük hâkimiyeti Yavuz'un Mısır fethiyle sona erdi. Ardından
> **"Osmanlılar, Aşağı Nûbe'de Halfa vadisine kadar olan bölgeyi kontrolleri
> altına aldı"**
> **981 (1573)**: İbrim **sancağı** Habeş eyaletine bağlandı
> **992 (1584)**: İbrim eyalet yapıldı, iki yıl sonra tekrar sancak

### ③ Hüküm: **BULGUM ÇÜRÜDÜ — verimiz doğru**

Teslim 5'te İbrim ve Vâdî Halfâ için *"55,7 yıl erken Osmanlı"* demiştim ve
**🔴 zayıf** diye etiketlemiştim. Gerekçem `ibrim` maddesinin arama özetindeki
*"İbrim sancağı 1573"* ibaresiydi. `nube` maddesi bunu açıklıyor:

> **1573 fetih tarihi değil, İDARÎ BAĞLANMA tarihi.** Fetih Mısır'ın
> fethiyle, yani **1517**'de olmuş.

⇒ **Veri (`OSMANLI 1517-04-13`) doğru. 111,4 nokta-yıllık iddiam geçersiz.**

📌 Ve bu, etiketlemenin işe yaradığı yer: bulguyu **🔴 zayıf** diye
işaretlediğim için kimse ona dayanarak yama yazmadı. **Güç etiketi olmasaydı
doğru bir kaydı bozacaktık.**
⇒ Ders önerisi ⑩ (§43).

---

## 43. BİLANÇO — Teslim 5'in üç iddiası, Teslim 6'da ne oldu

| iddia | Teslim 5 | Teslim 6 | sonuç |
|---|---|---|---|
| Masavva·Dahlak·Arkîko Memlük değil | 🟢 kesin | **iki maddeyle doğrulandı** | ✅ güçlendi |
| Sevâkin·Akīk 37-38 yıl erken Osmanlı | 🟢 kesin | **`bece` çelişiyor** | 🟡 çelişkili |
| İbrim·Vâdî Halfâ 55,7 yıl erken | 🔴 zayıf | **`nube` çürüttü** | ❌ **geri alındı** |

⇒ Erken Osmanlı hayaletinin ölçülmüş toplamı **190,9 → 75,2 nokta-yıl**
(ve o 75,2 de artık 🟡 çelişkili).

### 📌 Ders önerisi ⑩ — koordinatöre

> **Bulguya güç etiketi koymak, yanlış bulgunun maliyetini sıfıra indirir.**
> Teslim 5'te üç iddia vardı; biri çürüdü. Çürüyeni **🔴 zayıf** diye
> işaretlediğim için hiçbir yama ona dayanmadı, hiçbir şey bozulmadı. Etiket
> olmasaydı *"55,7 yıl fazla"* diye doğru bir kayıt bozulacaktı.
> ⇒ **Yanlış bulgu ücretsizdir; etiketsiz bulgu değildir.**

📌 Ve bunun ikinci yüzü: `§72`'deki sabah vakası tam bunun eksikliğiydi —
*"hayalet Memlük 39,7 yıl"* teşhisi doğruydu ama **güç etiketi yoktu**, yama
hemen uygulandı ve hayalet taraf değiştirdi.

---

## 44. ÖNERİ ÖZETİ — sıraya konmuş hâlde

```
🟢 ŞİMDİ UYGULANABİLİR — kaynak iki maddeyle sağlam, sahipsizlik açmıyor
   Masavva · Dahlak · Arkîko
     memluk 1281→1517-04-13  +  habesistan 1517-04-13→1557-01-01
        ↓
     dahlak 1281-01-01 → 1557-04-02  +  OSMANLI 1557-04-02 →
     (1 yeni renk: `dahlak`)

🟢 ŞİMDİ UYGULANABİLİR — gün hassasiyeti düzeltmesi
     Masavva OSMANLI başlangıcı 1557-01-01 → 1557-04-02 + gun:"2 Nisan 1557"

🟡 KARAR BEKLİYOR — iki TDV maddesi çelişiyor (Ç7)
     Sevâkin · Halâib · Akīk · Tokar · Sinkat  1517-1554
     bece: "1517'de Osmanlılar hâkim oldular"  ↔  habes-eyaleti: "devralınmadı"

❌ GERİ ALINDI
     İbrim · Vâdî Halfâ — veri doğru, iddiam yanlıştı
```

---

## 45. AÇIK KALANLAR — Teslim 6 sonu

1. 🟡 **Ç7 kararı** — `bece` mi `habes-eyaleti` mi; ve seçilirse `bece`
   kimliği kabile konfederasyonuna devlet muamelesi yapar mı
2. ⏳ **Suriye-Filistin kesiti** — hâlâ ölçmedim
3. `sevakin` ve `ibrim` müstakil madde YOK (içerik `habes-eyaleti` ve `nube`'de)
4. Önceki turlardan: 6 Kafkasya noktası · fetretin İran geri kalanı · B4/B5 ·
   Ç2, Ç5, Ç6 · `marasi`

---
---

# TESLİM 7 — Ölçüt sınandı (yedi çelişkiye birden) + Fransa'ya ilk bakış

---

## 46. Ç7 ÖLÇÜT SINAMASI — tek vakada "tuttu" demek bir şey söylemez

Koordinatör üç kademeli ölçüt verdi ve *"sen sına, tutmazsa ölçüt yanlıştır"*
dedi. **Tek vakada sınamadım** — o vaka ölçütü seçemez, yalnız onaylar.
Kayıtlı **yedi çelişkinin hepsine** uyguladım.

| vaka | ① BELGE>ÖZET | ② ÖZEL>GENEL | |
|---|---|---|---|
| Ç1 Nâdir Şah ölümü | `nadir-sah--iran` | `nadir-sah--iran` | aynı |
| **Ç2 İlhanlı sonu** | **`iran` (1335)** | **`ilhanlilar` (1353)** | 🔴 **AYRI** |
| Ç3 Serbedârî kuruluş | `serbedariler` | `serbedariler` | aynı |
| Ç4 Şirvan sonu | — aynı madde — | — aynı madde — | uygulanamaz |
| Ç5 Isfahan | — tek kaynak — | — tek kaynak — | uygulanamaz |
| **Ç6 Horasan Afşar sonu** | ikisi de olay | **`avsarlilar` (1804)** | 🔴 **AYRI** |
| **Ç7 Sudan kıyısı** | **`habes-eyaleti`** | **`habes-eyaleti`** | **aynı** |

```
uygulanabilir 5 · iki kademe aynı yön 3 · AYRI yön 2
```

### ✅ Ç7: ölçüt AYIRT ETTİ — `habes-eyaleti` kazanıyor

①: *"Sevâkin sancağı **10 Nisan 1554**'te kuruldu"* ve *"eyalet **5 Temmuz
1555**"* — tarihli, failli (Özdemir Paşa), tekil **tayin/tesis kayıtları**.
`bece`'nin *"1517'de Osmanlılar bölgeye hâkim oldular"*ı fail ve olay taşımayan
bir dönem cümlesi. **Belge kazanır.**
②: `habes-eyaleti`'nin konusu **o kıyının idaresi**, `bece`'nin konusu bir
**kavim**. Yer ↔ kavim ekseninde ② de ayırt ediyor.

⇒ Teslim 6'da *"kural iki yöne işaret ediyor"* demiştim; **senin ② formülasyonun
(`konusu O YER olan`) o belirsizliği kapatıyor.** Ç7 çözüldü:
**Sevâkin/Akīk bulgusu 🟡 ÇELİŞKİLİ → 🟢 KESİN'e döner.**
⚠️ Ama etiketi yükseltme kararı sende — ben ölçütü uyguladım, hükmü sen ver.

### 🔴 AMA ÖLÇÜT İKİ YERDE ÇATLADI — ve çatlaklar aynı cinsten

**Ç2 — kademe SIRASI burada karar veriyor, dekoratif değil.**
`iran` maddesi tarihli-failli olaylar veriyor (Ebû Said'in vefatı 736/1335,
Melik Eşref'in ölümü 758/1357); `ilhanlilar` bir **kurum ömrü etiketi** veriyor
(1256-1353). ① → 1335, ② → 1353.
🟢 **①'i önce uygulamak bizim mevcut verimizi doğruluyor** (`1335-12-01`, 164
pencere). Yani sıralaman boşuna değil: **Ç2'de sonucu belirliyor.**

**Ç6 — ölçüt burada YANLIŞ cevabı veriyor.**
② `avsarlilar`'ı (**Şubat 1804**) seçer. Ama onaylanmış cevap **1796** ve
gerekçesi ölçütte hiç yok: *"harita **hâkimiyet** boyuyor, **iddia** değil."*

### 📌 Ve iki çatlağın ortak tanısı — ölçüte KADEME ⓪ öneriyorum

Ç6 ve Ç4 aslında **kaynak çelişkisi değil.** İki madde farklı **soruya** cevap
veriyor:
```
Ç6  1796 = hâkimiyetin sonu      1804 = iddianın sonu       → farklı SORU
Ç4  1500 = Ferruh Yesâr'ın ölümü  1538 = ilhak  1607 = kesin son
    üçü de AYNI maddede — çünkü üç ayrı soru               → farklı SORU
```
Ölçüt *"hangi kaynak daha güvenilir"* diye soruyor ve bu ikisinde **kaynakların
ikisi de doğru.** Güvenilirlik sıralaması burada kendinden emin bir **yanlış**
cevap üretiyor (Ç6 → 1804).

```
KADEME ⓪ — önce sor: iki madde AYNI soruya mı cevap veriyor?
   Hayırsa çelişki yoktur; haritanın sorduğu soru hangisiyse O alınır.
   (Bu atlasın sorduğu soru: "o gün orada fiilen kim hâkimdi?")
   Ancak aynı soruysa ①②③'e geç.
```
⇒ Bu uygulanınca: Ç6 → **1796** ✓ (onaylanmış cevap), Ç4 → **1538** ✓
(ilhak, hâkimiyet sorusu), Ç7 → ⓪'ı geçer (ikisi de *"ne zaman aldı"* diyor),
①②'ye iner, **`habes-eyaleti`** ✓.

📌 **Ölçütün kendi sınavı:** yedi vakanın ikisinde yanlış cevap veriyordu ve
ikisi de aynı sebepten. Kademe ⓪ olmadan ölçüt, **çelişki olmayan yerde çelişki
görüp** taraf seçiyor.

---

## 47. FRANSA — ilk bakış, ve bir uyarı

⚠️ **Kapsam notu:** `CAPRAZ-GOREV §1`'de Fransa **ÇAPRAZ BATI**'da listeli.
Koordinatör bana verdi; §1'in *"kasıtlı örtüşme"* kuralına giriyorsa sorun yok
ama **ikimizin aynı işi iki kez yapmaması** için koordinatöre bildirdim.

### Anatomi

```
90 pencere / 90 nokta / 29 ayrık (f,t) çifti
```
Ve veri büyük ölçüde **iyi**: Cezayir fethi şehir şehir gün gün
(1830-07-05 Cezayir · 1831-01-04 Oran · 1832-03-01 Annaba · 1833-09-29 Bicâye ·
1837-10-13 Konstantin · 1843-06-12 Sîdî Bel Abbès · 1852-12-04 Ağvât),
Tunus 1881-05-12 (Bardo), Suriye-Lübnan 1918 Ekim'i gün gün, İyon adaları
1797-1815, Malta 1798-1800, Cenova 1797-1815, Korsika 1768-05-15.

### 🔴 AMA BİR TORBA VAR — ve tam da çekirdek Fransa'da

```
1281-01-01 → 1923-10-29   (4 nokta)   Paris · Lyon · Marsilya · Bordo
```
**642 yıl, tek pencere.** `iran` torbasının aynısı, bu kez Fransa'nın kendisinde.

### 🟡 Sınanacak üç iddia (DESEN — henüz kaynak turu yapılmadı)

| nokta | iddia | tahminî büyüklük |
|---|---|---|
| **Bordo** | 1453'e kadar **İngiliz** (Guyenne/Akitanya) | ~172 yıl |
| **Marsilya** | Provence 1481'e kadar Fransa değil (Anjou kontluğu) | ~200 yıl |
| **Paris** | 1420-1436 İngiliz-Burgonya işgali (Troyes) | ~16 yıl |
| Lyon | 1312'ye kadar imparatorluk toprağı | ~31 yıl |

⚠️ **Bunlar `DESEN` etiketli** — genel tarih bilgisinden geliyor, **kaynak turu
yapılmadı** (`§73`: yama yalnız `KESİN` satıra dayanır). Sıradaki turda
doğrulanacak.

📌 Ama şu şimdiden söylenebilir: `1281→1923` penceresi **Yüzyıl Savaşları'nı
haritadan tamamen siliyor.** Osmanlı atlası için çevre bir ayrıntı değil —
Fransa'nın Osmanlı'yla ittifakı (1536) **Bordo'nun Fransız olmasından yalnız
83 yıl sonra** ve harita bunu hiç göstermiyor.

---

## 48. AÇIK KALANLAR — Teslim 7 sonu

1. ❓ **Kademe ⓪ önerisi koordinatörde** — Ç6/Ç4'ü ölçüt yanlış çözüyor
2. ❓ **Ç7 etiket yükseltmesi** (🟡→🟢) koordinatörün hükmüne bağlı
3. 🟡 **Fransa çekirdeğinin dört noktası** — kaynak turu sıradaki iş
4. ⏳ Suriye-Filistin kesiti (üçüncü turdur sırada)
5. Önceki turlardan: 6 Kafkasya noktası · fetretin İran geri kalanı · B4/B5 ·
   Ç2, Ç5 · `marasi`

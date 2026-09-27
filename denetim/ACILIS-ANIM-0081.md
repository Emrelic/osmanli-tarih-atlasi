# ACILIS-ANIM-0081 — açılış animasyonu: ÖLÇÜM + TASARIM

**28 Eylül 2026 · parti-emrelic-0080 H-0001 · işçi: ACILIS-ANIM-0081 (Opus)**
Kod YAZILMADI. `js/app.js`, `css/style.css`, `index.html` DOKUNULMADI.
Ölçüm aletleri (tekrar koşulabilir):
`denetim/ACILIS-ANIM-0081-zaman-olc.py` · `-govde-olc.py` · `-avmac-olc.py`

---

## 0. En önemli bulgu — bu iş SIFIRDAN değil, ve bugünkü hâlinde bir YÖN HATASI var

🔴 **Açılış perdesi zaten VAR:** `ARAYUZ-0077 · H-0002` (commit `46aaf6e7`,
27 Eyl 11:59). Kendi yorumuna göre Emre'nin önceki isteği:
*"dönen bir dünyadan tanıdık ülke haritaları teker teker fırlasın."*
H-0001 bunun **ikinci turudur**: yön · daha çok künye · "etrafa serpilsin".

| Emre'nin H-0001'de istediği | bugün (`css/style.css:2893-2971`) | durum |
|---|---|---|
| dünya dönsün | `html::after` dairesinde kara şeridi kayıyor (`kureDon 9s`) | ✓ var |
| **batıdan doğuya** | `@keyframes kureDon { to { background-position: -360px … } }` → şerit **SOLA** kayar | 🔴 **TERS** |
| haritalar teker teker fırlasın | `body::before` tek öğe, 10 silüet × 2 sn, `steps(1)` ile resim değişir | ✓ var |
| **dünyanın ARKASINDAN** çıksın | silüet merkezden çıkıyor ama z-index 9002 > küre 9001 → ÖNÜNDEN | 🟡 kısmen |
| **etrafa serpilsin, renk renk** | hep AYNI noktaya (`translate(150px,-70px)`) gelip SÖNÜYOR; birikmez | 🔴 yok |
| 21 künye | 10 silüet (TUR FRA GBR ITA RUS ESP **JPN** CHN IND + Osmanlı 1600) | 🟡 7/21 |

**Yön hatası — gerekçe.** Kuzeyi yukarıda bir küreye önden bakınca (ekvator
üstünden) dönüş batıdan doğuya olduğu için yakın yüzey **soldan SAĞA** akar.
Şerit eşdikdörtgendir (x = boylam+180, batı solda — `ARAYUZ-0077-yukleme-silueti.py`).
`background-position` 0 → −360px görüntüyü **sola** kaydırır ⇒ yüzey sağdan
sola akıyor ⇒ küre **doğudan batıya** dönüyor. Çare tek satır:
`to { background-position: 360px 50%, 0 0; }`. Emre'nin *"hatalı ise düzelt"*
dediği şey muhtemelen tam budur: bugünkü animasyon ters.

---

## ① Bugün açılışta ne oluyor — satır numarası ve ms

**Akış:**
- `css/style.css` `<head>`de → perde **ilk boyamada VAR** (saf CSS, JS beklemez).
- `index.html` 277 `<script>` senkron; `data/devletler_harita.js` **:1355**,
  `data/donemler.js` **:1357**, `js/app.js` **:1512**.
- `js/app.js:1403` `new maplibregl.Map(…)` · center [30,40] · zoom 5.5.
- Harita hazır olunca `js/app.js:2859-2860` `document.documentElement.classList.add("atlas-hazir")`
  → `css/style.css:2966` perdeyi kaldırır. **Başka açılış animasyonu yok** (flyTo/rotate yok).

**Ölçüm** — headless Chrome (selenium), yazılım WebGL (SwiftShader), önbellek KAPALI,
yayın `r10409`, 3 koşu (`ACILIS-ANIM-0081-zaman-olc.py`):

| | koşu 1 | koşu 2 | koşu 3 |
|---|---|---|---|
| ilk boyama (FCP) = perdenin görünmesi | 4.992 ms | 4.144 | 6.348 |
| son JS indi | 43.453 | 31.968 | 50.978 |
| DOMContentLoaded | 67.356 | 59.652 | 85.935 |
| **`atlas-hazir` = perdenin kalkması** | **81.941** | **75.174** | **103.198** |
| **PERDE SÜRESİ** | **76,9 sn** | **71,0 sn** | **96,9 sn** |
| perde süresince ana iş parçacığı uzun görev toplamı | 24,8 sn | 27,3 sn | 37,3 sn |
| en uzun tek uzun görev | 11,6 sn | 12,8 sn | 13,8 sn |
| JS aktarım / açılmış | 43,5 MB / 157,3 MB (277 dosya) | ← | ← |

⚠️ **Evren:** headless + yazılım WebGL gerçek GPU'lu tarayıcıdan YAVAŞTIR;
mutlak saniyeler üst sınır sayılmalı. GPU'suz ilk iki denemede (harita hiç
hazır olmadı, ölçüm aletinin hatası — düzeltildi) DCL 33,6 / 37,0 sn çıktı.
Gerçek tarayıcıda ölçülemedi: uygulama penceresi gizliydi, boyama olmadı.
Önbellekli (ikinci ziyaret) perde süresi **ölçülmedi**.
⇒ **Perde onlarca saniye ekranda kalıyor.** Her ziyaretçinin ilk gördüğü şey bu.
Süs değil, sitenin vitrini.

**Bugünkü perdenin ikinci kusuru — donuyor.** `kureDon` `background-position`
canlandırır, `silDegis` `background-image` değiştirir. İkisi de **ana iş
parçacığında** koşar ve uzun görev sürerken DONAR. Perde süresinin %35-38'i
uzun görevdir (24,8/71 … 37,3/97). Tek donma 11-14 sn. Aynı dosyada
`ARAYUZ-0077 H-0034` (`#mesgul`, `:2974`) bunu zaten biliyor ve
`transform`/`opacity` kullanıyor, çünkü bunlar bileşik (compositor) katmanda
JS kilitliyken de akar. Perdenin kendi yorumu da itiraf ediyor:
*"canlandırma çoğu zaman hiç başlamıyor"* (`:2929`).

---

## ② 21 künyenin haritası nereden gelecek

### ②a Öncül düzeltmesi
`data/devletler_harita.js` (89,47 MB diskte) açılışta **ZATEN indiriliyor**:
`index.html:1355` senkron `<script>`. Ama perde FCP'de (≈4-6 sn) görünüyor,
son JS 32-51 sn'de iniyor. Silüet perdeyle birlikte lazım olduğu için bu
dosyadan **okunamaz**. ⇒ Sonuç değişmedi: **CSS'e gömülü, önceden üretilmiş
silüet seti** gerekir (bugünkü yöntem, `denetim/ARAYUZ-0077-yukleme-silueti.py`).

### ②b Künye taraması
`data/devletler.js` 678 id tarandı, TAHMİN EDİLEN id aranmadı (D215).
🔴 **Dizinin kendi başlığı: "1200-1924 arası dünyada var olmuş devletlerin
indeksi."** Antik dönem bu dizinin DIŞINDA.
`DEVLET_HARITA` (584 gövde) en erken dönem başı **1281-01-01**.

| Emre'nin adı | künye (`devletler.js`) | atlas gövdesi — zirve kesiti | silüet kaynağı önerisi |
|---|---|---|---|
| Türkiye | `tbmm-turkiye` 1920-1923 | 1921-10-20→1923-10-29, 932 B | NE modern `TUR` (bugünkü) |
| Rusya | `rusya` | 1864, 988 B | NE `RUS` (bugünkü) |
| İran | `iran` 1925+ · `safevi` · `kacar` | safevi 1534 1445 B · kacar 1794 713 B | NE `IRN` |
| Avusturya | `habsburg` (harita:`avusturya`) | avusturya 1814 970 B | NE `AUT` |
| Almanya | `almanya` "Kutsal Roma / Almanya" 962-1923 | 1911-1914, 716 B | NE `DEU` |
| Fransa | `fransa` | 1746, 1083 B | NE `FRA` (bugünkü) |
| İtalya | `italya` | 1923, 842 B | NE `ITA` (bugünkü) |
| İngiltere | `ingiltere` | 1900 (sömürgelerle 922°²) | NE `GBR` (bugünkü) |
| İspanya | `ispanya` | 1698, 792 B | NE `ESP` (bugünkü) |
| Polonya | `polonya` 1918+ · `lehistan` | lehistan 1580 728 B | NE `POL` |
| Çin | `ming-hanedani` · `qing-hanedani` · `cin-cumhuriyeti` | qing 1858 2146 B | NE `CHN` (bugünkü) |
| Hindistan | modern YOK · `babur-imparatorlugu` · `ingiliz-hindistani` | babür 1687 1305 B | NE `IND` (bugünkü) |
| ABD | `abd` | 1900, 1487 B | NE `USA` |
| **Osmanlı İmparatorluğu** | künye YOK (özel `OSMANLI`, `donemler.js`) | 1600 zirvesi zaten üretilmiş (`denetim/ARAYUZ-0077-osmanli-zirve.json`) | ✓ bugünkü |
| **Roma İmparatorluğu** | 🔴 **YOK** — yalnız `bizans` (330-1461) ve `almanya` "Kutsal Roma" | bizans 1299: 20°²; klasik Roma yok | **dış kaynak** |
| **Avusturya-Macaristan** | ayrı künye YOK (`habsburg` + `macaristan-habsburg`) | ✓ `avusturya` 1908-10-05→1918-01-01 gövdesi **Macaristan'ı içeriyor**: Budapeşte, Viyana, Zagreb, Kolojvar, Prag, Lemberg, Saraybosna 7/7 içinde, 80,8°² | atlas gövdesi 1914 |
| **Alman İmparatorluğu** | ayrı künye YOK; `almanya` 1911-1914 kesiti tam o | 716 B | atlas gövdesi 1914 |
| **İngiliz İmparatorluğu** | ayrı künye YOK; `ingiltere` 1900 gövdesi sömürgeleri de taşıyor (922°²) + 14 `ingiliz-*` künye | dünyaya dağılmış, **tek silüet olmaz** | atlas gövdesi 1900, **mini dünya haritası üzerinde** |
| **Cengiz Han İmparatorluğu** | `mogol-imparatorlugu` 1206-1260 **VAR** | 🔴 **gövde YOK** (atlas 1281'den başlar) | **dış kaynak** |
| **İskender İmparatorluğu** | 🔴 **YOK** (yalnız `arnavutluk-iskenderbey`, alakasız) | yok | **dış kaynak** |
| **Persler** | 🔴 **YOK** (Ahameniş/Sasani yok) | yok | **dış kaynak** |

Sayım: **21 ad** (Emre "avusturya"yı ve "avusturya-macaristan"ı ayrı yazmış).
- NE modern ile hazır: **13** (13/13 `ADM0_A3` NE dosyasında ölçüldü: var)
- atlasın kendi verisiyle: **4** (Osmanlı ✓ mevcut · Av-Mac · Alman İmp. · İngiliz İmp.)
- 🔴 atlasta HİÇ yok, dış kaynak ister: **4** (Roma · Cengiz · İskender · Persler)

### ②c Dış kaynak dört ad için — kaynak kuralı sorusu
Silüet süstür ama **bir imparatorluğun şekli bir tarih hükmüdür**. §4 kırmızı
çizgi geçerli: Vikipedi görseli, popüler harita, YZ çizimi KULLANILAMAZ.
Aday akademik veri kümeleri **aranmadı, lisansı doğrulanmadı**:
AWMC (UNC, Ancient World Mapping Center) ve DARMC (Harvard). Bunlara bakmak ayrı
bir kaynak işidir. ⇒ Bu dört ad **Emre/koordinatör kararı** ister (bkz. ④).

### ②d Boyut
Bugünkü blok `css/style.css:3016-3029` ≈ **31,9 KB** ham:
kara şeridi 14,8 KB + 10 silüet 17,1 KB, ortalama **1,7 KB/silüet** (URI kodlu).
Ölçülen SVG yol boyları (kodlamasız): 447-2410 B, ortanca ≈ 990 B.
Tahmin **(hesap, ölçüm değil):**
- 21 silüet × ~1,9 KB ≈ **40 KB** (+23 KB ham)
- İngiliz İmp. mini dünya haritası ≈ +3-5 KB
- gzip sonrası ≈ **+8-10 KB**

---

## ③ Maliyet — ilk boyamayı kaç ms geciktirir

- **Animasyonun kendisi: 0 ms.** CSS canlandırması FCP'yi beklemez. Harita
  hazır olunca kalkar, `atlas-hazir` kancası değişmez.
- **Ek CSS baytı** (+8-10 KB gzip): `style.css` bugün 56 KB aktarımla 243 ms'de
  indi (625→868 ms). Doğrusal ölçekle **≈ +35-45 ms** FCP. Tahmindir, ölçülmedi.
- **Statik HTML** (bileşik katman için ≈ 25 öğe, `index.html` başında): ihmal
  edilebilir, < 1 KB.
- **Haritayı geciktirir mi:** transform/opacity bileşik katmanda koşar, ana iş
  parçacığından kare çalmaz. 21 silüet × 2 sn = 42 sn, ölçülen perde süresinin
  (71-97 sn) altında. ⇒ **perdeyi uzatmaya gerek yok.** Önbellekli ziyarette
  perde kısa kalırsa dizi yarıda kesilir. Bu kabul edilmeli, "animasyon bitsin
  diye bekle" YAPILMAMALI.
- `prefers-reduced-motion` bugünkü gibi korunur.

---

## ④ Öneri — tam mı, sade mi

**Önerim: SADE + DÜZELTME, iki basamak.**

**Basamak 1 — hemen, küçük (tek oturum, ~1-2 saat):**
1. **Yön düzeltmesi:** batıdan doğuya (tek satır).
2. **Donmayı gider:** küre ve silüetler `transform`/`opacity` ile bileşik
   katmana. Pseudo-öğeyle olmaz (çocuk kırpılamaz) → `index.html` `<body>`
   başına statik perde işaretlemesi: `.kure > .serit` + N×`.sil`.
3. **Serpme:** her silüet ayrı öğe. Kürenin ARKASINDAN (z-index altta,
   scale .1) çıkar, kendi hedef noktasına uçar ve **orada KALIR**
   (`animation-fill-mode: forwards`, `animation-delay: i×2s`). Hedefler
   kürenin çevresine, ekran boşluklarına dağılır.
4. **17 silüet:** 13 NE modern + Osmanlı 1600 + Av-Mac 1914 + Alman İmp.
   1914 + İngiliz İmp. 1900. Hepsinin kaynağı bugün elde.
   Japonya çıkar: Emre'nin yeni listesinde yok.
5. `js/app.js`e **dokunulmaz**, `atlas-hazir` kancası yeter.

**Basamak 2 — Emre kararı:** Roma · Cengiz · İskender · Persler. Atlasta
yoklar. Akademik kaynak bulunur, lisansı teyit edilir, `gorsel_kaynak`
benzeri bir künye satırı yazılır, sonra eklenir. Bulunamazsa bu dört ad
**`bulunamadı` diye yazılır, uydurulmaz.**

**Tam istenen (21, tek seferde) önermiyorum.** Dört antik silüet için kaynak
kuralını gevşetmek ya da ayrı bir kaynak işi açmak gerekir.

---

## ⑤ Emre'nin öteki 29 maddesinin yanında nereye düşer — görüşüm

- **Düşük öncelik, ama sıfır değil.** Paketin ağırlığı sınıf A'da:
  11 madde, arkasında `denetle.py` Değişmez 7'nin **725'lik** enklav kovası.
  B · C · D de verinin doğruluğu, yani projenin amacı olan "kronoloji ile
  harita birbirini doğrular". H-0001 bunların hiçbirini ilerletmez.
- **Ama iki gerekçe onu en sona atmayı da yanlış kılar:**
  ① bugünkü perde **ters dönüyor**; bu bir süs isteği değil, görünen bir
  kusur ve Emre bunu açıkça sordu.
  ② perde **71-97 sn** ekranda ve süresinin üçte biri boyunca donuk.
  Her ziyaretçinin ilk dakikası bu.
- **Hacim:** basamak 1, sınıf E'nin öteki maddelerinden küçük. H-0027 (fetih
  pasajı) bir alt uygulama; H-0012 ve H-0015 ARAYUZ kolunda sürüyor. Çakışan
  tek dosya `css/style.css` (ARAYUZ-0077-B'nin eli değiyor). ⇒ **E sınıfının
  sonuna, ARAYUZ kolunun sırasına**, A-D'nin önüne değil. Basamak 2 ONCELIK'te
  **Emre'nin hükmüne** kalsın.
- **Yan bulgu (kapsam dışı, yalnız kayıt):** perdenin asıl nedeni açılışta
  **157 MB JS** (43,5 MB aktarım, 277 dosya) ve 11-14 sn'lik tek uzun görev.
  Animasyon bu bekleyişi güzelleştirir. Bekleyişi kısaltan iş ayrıdır.

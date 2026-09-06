# 39 MAĞRİB GÜNÜ — **39 DEĞİL 28**, ve ayıraç bir DİKDÖRTGEN OLAMAZ

> **ORTADOĞU · 7 Eylül 2026 · VERİ YAZILMADI.**
> Alet: `denetim/ARAC-ORTADOGU-MAGRIB39-0907.js`

---

## ① ÖNCE: LİSTENİN TAMAMINI GÖRMEK GEREKTİ

`ARAC-AVRUPA-MAGRIB-ELE-0907.js:79` listeyi **`.slice(0, 14)`** ile
kırpıyor: 39 gün ölçülüyor, **14'ü basılıyor.** Kalan 25 ölçülmüş ama
görünmüyor.
📌 Bu gecenin dersi: *"kırpılmış bir çıktı da bir ölçüm değildir —
`tail`i görülmemiş bir çıktı, ölçülmemiş bir kuyruktur."*
🟢 Ölçütü **aynen devraldım**, yeniden türetmedim (`BENIM` kümesi · `UC`
uçları · `magrib()` yüklemi satır 20-23'ten birebir). İlk denememde
kendi kutumu kurmuştum ve **100 gün** çıkmıştı — başka bir evren.

## ② 🔴 DOKUZ GÜN BENİM DEĞİL — `magrib()` ENDÜLÜS'Ü YUTUYOR

```
magrib(y) = y.lat < 38.0 && y.lon >= -17 && y.lon <= 25 && y.lat > 19
```
Bu kutu **güney İspanya'yı ve Malta'yı** içine alıyor:
```
nokta                     enlem,boylam    magrib()  cascade
Granada                   37.18, -3.60    MAGRIB    IBERYA
Málaga                    36.72, -4.42    MAGRIB    IBERYA
Ronda                     36.74, -5.17    MAGRIB    IBERYA
Mojácar                   37.14, -1.85    MAGRIB    IBERYA
Almería                   36.83, -2.46    MAGRIB    IBERYA
Motril                    36.74, -3.52    MAGRIB    IBERYA
Cebelitarık (Gibraltar)   36.14, -5.35    MAGRIB    IBERYA
Malta                     35.90, 14.51    MAGRIB    BATI-ORTA-AVRUPA
```
⇒ **9 gün** AVRUPA'nın: `1485-05-22` Ronda · `1487-08-18` Málaga ·
`1488-06-10` Mojácar · `1489-12-22` Almería/Motril · `1492-01-02`
Granada · `1462-08-20` ve `1704-08-04` Cebelitarık · `1798-06-12` ve
`1800-09-05` Malta. **Reconquista ve Malta — Mağrib değil.**

### 🔴 VE BU BİR AYAR HATASI DEĞİL, YAPISAL BİR SINIR
Aynı ölçüm gerçek Mağrib'in de cascade tarafından Avrupa'ya atandığını
gösteriyor — **aletin var olma sebebi bu:**
```
Tunus     36.80, 10.18   cascade=ITALYA    ← cascade YANLIŞ, magrib() DÜZELTİYOR
Cezayir   36.75,  3.06   cascade=IBERYA    ← aynı
```
⇒ Cascade Mağrib'i Avrupa'ya atıyor, `magrib()` düzeltiyor — ama
**aşırı düzeltiyor.** Ve bir dikdörtgen bunu çözemez:
```
Cebelitarık (İberya)  36.14°K, -5.35     Ceuta/Tanca (Mağrib)  35.8°K
Almería   (İberya)    36.83°K, -2.46     Melilla  (Mağrib)     35.3°K, -2.95
```
İki kıta **aynı enlem ve boylam bandında** ve arada Akdeniz var.
***Hiçbir enlem/boylam dikdörtgeni İberya ile Mağrib'i ayıramaz*** —
ayıracak olan şey **kara maskesi** ya da açık bir **ad listesi**.
🟡 Kısa vadede en ucuzu ad listesi: sekiz nokta, hepsi yukarıda.

## ③ 🔴 İKİ GÜN ATLAS PENCERESİNİN DIŞINDA
```
1924-11-15   Şefşâven
1926-05-27   Şefşâven
```
Atlas penceresi `1923-10-29`da bitiyor. Bu iki gün **Rif Savaşı**
tarihleri ve pencerenin dışında. Bir kırılma günü olarak defterde
duruyorlar ama 1923 kesitinde **görünmezler.**
⚪ Damga: **ölçülemedi** — kaydın niçin pencere dışına taştığına
bakmadım; kasıtlı bir kuyruk mu, kusur mu, ÖLÇMEDİM.

## ④ GERÇEK KAPSAM VE DAYANAK DURUMU

```
alet verdi                39 gün · 238 nokta
🔴 AVRUPA'nın (Endülüs/Malta)   -9 gün
🟡 pencere dışı                 -2 gün  (ayrı kalem)
────────────────────────────────────────
⇒ GERÇEK MAĞRİB KALEMİ          28 gün
```
**Dayanak durumu — künye çaprazı ÖNCE soruldu (⑱'in kuralı):**
```
🟡 künye çaprazı OLAN     5 / 39
   1830-07-05  cezayir-ocagi.t + cezayir-fransiz.f   (41 nokta)
   1881-05-12  tunus-ocagi.t                          (36 nokta)
   1832-11-22  abdulkadir.f                           (11 nokta)
   1798-06-12  rodos-sovalyeleri.t                    (Malta — AVRUPA'nın)
   1492-01-02  granada.t                              (Granada — AVRUPA'nın)
🔴 çaprazı OLMAYAN       34 / 39
```
⚠️ **Künyenin günü BİR KAYNAK DEĞİLDİR** (`§4`) — bu bir **çapraz
kontrol**. Dayanak yine TDV'den gelir.

**Bu gece kendi turlarımda ZATEN ÖLÇTÜKLERİM (TDV, gövde kesilmeden):**
```
🟢 1881-05-12  BİREBİR · TDV `tunus` — «12 Mayıs 1881'de Tunus beyi ile
               Bardo Antlaşması'nı imzalayarak bu eyaleti kendi
               himayelerine aldıklarını duyurdular»            36 nokta
🟢 1837-10-13  BİREBİR · TDV `cezayir` — «Kostantîne şehrini ele
               geçirdiler (13 Ekim 1837)»                        3 nokta
🟡 1830-07-05  TDV `cezayir` BAŞKA GÜN veriyor: «14 Haziran 1830»
               (çıkarma). 5 Temmuz = Cezayir'in TESLİMİ — çelişki
               DEĞİL, farklı olay; ama gün TDV'de adıyla YOK.   41 nokta
⚪ 1844-03-04  ÖLÇÜLEMEDİ · TDV `cezayir` bu günü vermiyor (İsly
               14 Ağustos · Tanca 10 Eylül 1844)                10 nokta
```
⇒ 28 günün **2'si dayanaklı**, 1'i açıklamalı, 1'i ölçülemedi,
**24'ü açık.**

## ⑤ ÖLÇMEDİĞİM
```
🔴 24 açık günün TDV taraması — bu tur yapılmadı.
🔴 En büyük üç açık gün — `1705-07-17` (35 nokta, Tunus Hüseynî
   hânedanı) · `1574-08-25` (34, Tunus'un Osmanlı fethi) ·
   `1519-09-01` (25, zeyyani/Tilimsan) — TDV'ye SORULMADI.
🔴 Şefşâven'in pencere dışı iki gününün sebebi.
🔴 `magrib()` yükleminin AVRUPA tarafında kaç günü YANLIŞ ELEDİĞİ —
   ters yönü ölçmedim (bu ölçüm yalnız bana FAZLA gelenleri buldu).
```

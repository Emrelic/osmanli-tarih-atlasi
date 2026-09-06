# ENKLAV TEYİDİNİN İKİ AÇIK KALEMİ — ölçüldü, **biri gerçek anakronizm**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor,
> `data/` donuk). Alet: `denetim/ARAC-ENKLAV-ACIK-KALEM-0906.js`
> Dayanak: `OLCUM-ENKLAV-TEYIT-0906.md §⑤` — o belge iki kalemi **adıyla**
> açık bırakmıştı.

---

## ① 🔴 `Sutter's Fort` — BULUNDU, VE ANAKRONİZM GERÇEK

Önceki tur şöyle yazmıştı: *"kaydı veride bulamadım (kesme işareti aramayı
bozdu), **teyit edilmedi**."*

🟢 **Kayıt duruyordu** — bulunamamasının sebebi veri değil **arama**:
```
data/yerlesimler_kamerika.js
  ad : "Sutter's Fort (Sacramento)"
  kur: 1839-01-01
  s  : 1839-01-01 → 1923-10-29   abd        🔴 kaynak YOK
```

📌 Kesme işareti **üç ayrı kod noktasıyla** yazılabiliyor (`U+0027` ·
`U+2019` · `U+02BC`) ve naif bir arama yalnız birini bulur. Bu,
`CLAUDE.md §4`ün Türkçe yazım ekseninin (`usku` ≠ `Üsküp`) **noktalama**
yüzü — aynı aile, altıncı vaka. Çare aynı: **normalleştirici**, ve bu
turda kesme işaretine agnostik olanı kullanıldı.

### KUSUR
Sutter 1839'da **Meksika hükümetinden** aldığı arazi imtiyazıyla
(*Nueva Helvetia*) kaleyi kurdu — Meksika vatandaşı olmuştu. Kaliforniya
o tarihte **Meksika toprağıdır**; Amerika'ya geçişi Guadalupe Hidalgo
Antlaşması'yladır (**2 Şubat 1848**; fiilî ABD işgali Temmuz 1846).
⇒ Kayıt ABD'yi **~9 yıl erken** başlatıyor.

⚠️ **`kur:` DOĞRU, sahip YANLIŞ.** Bu, `§3.5`in *hayalet devlet*
ailesinden değil — devlet vardı (ABD 1776'dan beri), **orada değildi.**
Yani `§3.5.-1`in **"DEVLET VAR, YERİ YANLIŞ"** sınıfı.

### 🟢 ÖN KOŞUL ÖLÇÜLDÜ — çare UCUZ (`§3.5.0`)
*Bir ardıl künyenin var olması, yazılabilir olduğu anlamına gelmez;
penceresi de tutmalı.* Ölçüldü:
```
meksika   1821-09-27 → 1923-10-29   ✓ 1839'u ve 1848'i KAPSIYOR
abd       1776-07-04 → 1923-10-29   ✓
veride `meksika` dönemi: 84         ⇒ RENK VAR, yeni künye/renk GEREKMEZ
```
⇒ Önerilen zincir:
```
s: 1839-01-01 → 1848-02-02   meksika
s: 1848-02-02 → 1923-10-29   abd
```
🟢 `Değişmez 1` bozulmaz (boşluk doğmuyor), yeni kimlik doğmuyor.

### 🔴 AMA UYGULANMADI — İKİ SEBEP, İKİSİ DE YAZILI
```
① data/ DONUK — koşu 7b sürüyor
② KAYNAK ARANMADI. Yukarıdaki tarihler GENEL TARİH BİLGİSİDİR; TDV'ye ya
   da akademik bir kaynağa SORULMADI. `§4`: künyenin/verinin günü bir
   kaynak değildir, ve kaynağı yazılmayan bilgi kaynağı olmayandan ayırt
   edilemez.
   ⇒ Damga: **"okumadım"** — `bulunamadı` DEĞİL. Aramadım bile.
      (4 Eylül'de doğan üçüncü damga; yanlış damga hatayı KALICILAŞTIRIR.)
```
🔜 Yama ancak `1848-02-02` bir kaynakla eşleştikten sonra yazılır.

---

## ② 🟢 `safevi` ERZURUM KUŞAĞI — ANAKRONİZM **DEĞİL**, kaynaksızlık

Önceki tur: *"tarihen mümkün (1502-1514), ama **ölçülmedi**."* Ölçüldü:
```
Aşkale     s:safevi 1502-01-01 → 1518-01-01    kaynak YOK
Erzincan   s:safevi 1502-01-01 → 1514-09-06    kaynak YOK
Erzurum    s:safevi 1502-01-01 → 1518-01-01    kaynak YOK
Kemah      s:safevi 1502-01-01 → 1515-05-19    kaynak YOK
```
⇒ **Tarihler tutarlı ve tarihen savunulur:** Şah İsmâil 1501'de devleti
kurdu, Doğu Anadolu 1500'lerin başında Safevî nüfuzuna girdi, Çaldıran
(23 Ağustos 1514) sonrası bölge Osmanlı'ya geçti. `Erzincan 1514-09-06`
Çaldıran'dan 14 gün sonra; `Kemah 1515-05-19` gün hassasiyetli ve bilinen
Kemah fethiyle uyumlu.

🟢 **HÜKÜM: bu kalem bir enklav kusuru DEĞİL.** Enklav denetimi onu
bildirdi çünkü Safevî gövdesi o yıllarda Doğu Anadolu'da ana gövdeden
kopuk görünüyor — ama **veri doğru**, ve `§11`in *"atlas seferi değil
tasarrufu boyar"* ölçütü burada tasarrufun gerçekten olduğunu söylüyor.

🟡 **Kalan borç kaynak:** dördünde de `kaynak` YOK. Bu bir anakronizm
değil bir **izlenebilirlik** eksiği (`§4` kırmızı çizgisi).

---

## ③ NE DEĞİŞTİ

```
OLCUM-ENKLAV-TEYIT-0906.md §⑤'in üç açık kaleminden İKİSİ kapandı:
  ✅ Sutter's Fort  → BULUNDU · anakronizm GERÇEK · çare UCUZ · kaynak BEKLİYOR
  ✅ safevi Erzurum → ÖLÇÜLDÜ · anakronizm DEĞİL · kaynak borcu var
  ⬜ kalan 420 soru → hâlâ açık (bir işçi oturum işi; oturumlar ÖLÜ)
```

📌 Ve doğrulanmış anakronizm sayısı **3 → 4**: üç Zimbabve kaydı + Sutter.
⚠️ Dördünün dördü de `kaynak` alanı **boş ya da "bulunamadi"** olan
kayıtlardan çıktı. ⇒ *"Kaynaksızlık, anakronizmin en iyi arama
anahtarı"* gözlemi **dördüncü kez** tuttu — ama bu bir **korelasyon**,
bir kural değil: `OLCUM-ENKLAV-TEYIT §④`te aynı sezgiden türetilen
bir süzgeç **çürümüştü** (547/651 = %84 kaynaksız; ayırt etmiyor).

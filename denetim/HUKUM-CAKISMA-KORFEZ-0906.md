# HÜKÜM — KÖRFEZ ÜÇLÜSÜ: **ikisi sahte çakışma, biri gerçek model sorusu**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> Alet: `denetim/ARAC-KORFEZ-USTKUME-0906.js` — dönemler **alan alan**
> karşılaştırıldı. Gözle *"aynı görünüyor"* demek ölçüm değildir.

---

## ① 🟢 DOHA + KUVEYT — ÇAKIŞMA GERÇEK DEĞİL, karar MEKANİK

```
Doha (Katar)
  yer_yama_1923_duzeltme.js    s· v· isg  → TABANLA AYNI (no-op)
  yer_yama_vassal_kid_0906.js  v          → ÜST KÜME, yalnız alan EKLİYOR: statu, kid
Kuveyt
  yer_yama_1923_duzeltme.js    s· v· isg  → TABANLA AYNI (no-op)
  yer_yama_vassal_kid_0906.js  v          → ÜST KÜME, yalnız alan EKLİYOR: statu, kid
```

⇒ `1923_duzeltme` bu iki kayıt için **hiçbir şey değiştirmiyor** — zaten
uygulanmış. `vassal_kid` ise aynı dönemlere **yalnız iki alan** ekliyor.
Tarihsel bir soru **yok**.

🟢 **KARAR:** `1923_duzeltme`den Doha ve Kuveyt kayıtları **düşürülür**,
`vassal_kid` kalır. Çakışma mekanik olarak kapanır.
📌 Kasr-ı Şîrîn'de (`§⑤`) çıkan **üst küme** vakasının aynısı: uygulayıcı
*"aynı alan, farklı değer"* diyor ama biri ötekinin üst kümesi.

---

## ② 🔴 MANAMA — GERÇEK ÇAKIŞMA, VE BİR **MODEL** SORUSU

```
taban + gece_v1      s: bahreyn 1783 → 1861-05-31
                     s: ingiltere 1861-05-31 → 1923-10-29   ← İNGİLTERE EGEMEN
1923_duzeltme        s: bahreyn 1783 → 1923-10-29
                     isg: ingiltere 1861-05-31 → 1923-10-29 ← BAHREYN SÜRÜYOR
```

Soru *"hangi tarih doğru"* değil: ***bir himaye, egemenlik devri gibi mi
yazılır, yoksa polity sürerken bir ÖRTÜ olarak mı?***

### 🟢 HÜKÜM: `1923_duzeltme` — ve **dört bağımsız dayanak**

```
① KÜNYE KENDİ SÖYLÜYOR   bahreyn  1783-01-01 → 1923-10-29
   ⇒ Taban, KENDİ künyesiyle çelişiyor: künye Bahreyn'i 1923'e kadar
     yaşatıyor, veri onu 1861'de öldürüyor.
② ATLASIN KONVANSİYONU   `isg:ingiltere` — 225 DÖNEM
   (Kahire · İskenderiye · Dimyat · Asyut · Asvan · İbrim … 1882-09-13)
   Desen açık: polity `s:` olarak SÜRER, İngiltere `isg:` örtü olur.
③ AYNI DOSYADAKİ KOMŞULAR  Doha ve Kuveyt TAM BÖYLE modellenmiş:
     Doha    s:katar 1913-07-29→1923  +  isg:ingiltere 1916-11-03→1923
     Kuveyt  s:kuveyt 1914-11-22→1923 +  isg:ingiltere 1914-11-22→1923
   ⇒ Manama, Körfez'de TEK istisna.
④ TARİH                  Bahreyn hiç ilhak edilmedi; Âl Halîfe bütün
   dönem boyunca hüküm sürdü, İngiltere dış ilişkileri tuttu.
```

📌 Ve bu, `KÜRE GÖRÜNÜM`ün bugün ölçtüğü boşluğun **çaresinin bir
örneği**: `v:` dönemleri kimlik taşımadığı için Osmanlı dışı himaye
ifade edilemiyordu — ama `isg:` **taşıyor**, ve 225 dönemde zaten
kullanılıyor. ⇒ Sömürge himayesi için ① yolu (`v:`) kapalı, **③ yolu
(`s:` sürer + `isg:` örtü) açık ve yerleşmiş.**

---

## ③ 🔴 AYRI TUTULAN SORU: `1861-05-31` doğru gün mü?

Bugün başka bir ölçüm (`Manama himaye günü`) üç adayı (1861 · 1880 ·
1892) **eledi** ve TDV'den `1913-07-29`u çıkardı (Hakkı Paşa – Sir Edward
Grey). Ama o gün **Osmanlı'nın Bahreyn iddiasından vazgeçtiği** gündür —
İngiliz himayesinin başladığı gün değil. `1861-05-31` ise Britanya-Bahreyn
**Daimî Sulh Antlaşması**dır, yani ayrı bir olay.

🔴 **BU ÇAKIŞMANIN İÇİNDE ÇÖZÜLMEZ.** Bu hüküm `isg:` MODELİNİ seçiyor,
GÜNÜ değil. Gün bugünkü değeriyle (`1861-05-31`) taşınır.
📌 `§11`: *"iki ayrı kusur tek satırda raporlanırsa, çareleri ters olsa
bile aynı çare uygulanır."* Başkale/Çaldıran'da `1548-08-24↔25` için
verilen kararın aynısı.
🔜 **AÇIK KALEM:** Bahreyn'de İngiliz himayesinin başlangıç günü —
1861-05-31 mi, 1913-07-29 mu, yoksa ikisi iki ayrı kırılma mı?
**ÖLÇMEDİM.**

---

## ④ UYGULAMA (koşu bitince, `data/` çözülünce)
```
① `yer_yama_1923_duzeltme.js`ten Doha ve Kuveyt DÜŞÜRÜLÜR   (no-op'lar)
② Manama'da `1923_duzeltme` KALIR, `yer_yama_gece_v1.js`ten Manama
   DÜŞÜRÜLÜR
③ kuru koşu: çakışma 18 → 15 olmalı
   (Başkale + Çaldıran ayrıca çözülürse ⇒ 13)
```

⚠️ **Sınav önceden yazılıyor:** ③'teki sayı tutmazsa bu hüküm değil
**uygulama** yanlıştır — ya bir kayıt düşürülmemiştir ya da başka bir
dosya aynı alanı yazıyordur. Sayıyı sonradan açıklamak, mazereti bulguya
benzetir.

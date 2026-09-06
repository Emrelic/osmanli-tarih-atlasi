# YAMA GÜVENLİK TARAMASI — **6 yama delik açıyor**, ve biri bir KORUMAYI ATLIYOR

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> Alet: `denetim/ARAC-YAMA-KAYIP-TARAMA-0906.js`
> Doğuran soru: Timbuktu'da kendi yamamın 613 yıllık bir delik açacağını
> bulduktan sonra — *"aynı tehlike başka yamalarda da var mı?"*

---

## ① ÖLÇÜM — 975 yama kaydı tarandı

Soru: *"bu diziyi tabanın YERİNE koyduğumda ne KAYBOLUYOR?"* Uygulayıcı
`s:`/`d:`/`v:` dizisini **bütün olarak** değiştiriyor ⇒ **kısmî bir dizi,
tam diziyi siler.**

```
🔴 TAM KAYIP (tabanda KAPALI olan aralık, yamadan sonra AÇIK) : 6
🟡 dönem sayısı azalıyor ama aralık kapalı                     : 2
```

```
Honolulu             [yer_yama_1923_bosluk_0906.js]  1795-01-01 → 1898-08-12
Timbuktu             [yer_yama_1923_bosluk_0906.js]  1281→1430 · 1468→1591 · 1591→1700
Timbuktu             [yer_yama_timbuktu.js]          aynı üç aralık
Akçahisar (Kruja)    [yer_yama_arnavutluk.js]        1912-11-28 → 1923-10-29
Floransa             [yer_yama_floransa.js]          1861-03-17 → 1923-10-29
Ahıska               [yer_yama_sh106.js]             1578-08-01 → 1829-09-14  (251 YIL)
```
⚠️ **İkisi benim** (`1923_bosluk_0906`).

---

## ② 🟢 DÖRDÜ ZATEN KORUNUYOR — ve koruma bir veri kaybından doğmuş

Kuru koşu ölçüldü:
```
Ahıska · Akçahisar · Floransa   → "KAPSAM DARALDI" uyarısı ALIYOR, UYGULANMIYOR
Timbuktu (iki yama)             → "ÇAKIŞMA" ile duruyor
Honolulu                        → 🔴 HİÇBİR UYARI ALMIYOR
```
`_sahiplik_uygula.py:678` çevresindeki koruma tam bunun için yazılmış ve
kendi yorumunda gerekçesi var: 29 Ağustos'ta Çaçak yaması altı dönemin
beşini silmiş, **113 yıl sahipsiz** kalmış. Kural: *"genişleme serbest,
daralma insan kararı ister."*

🟢 Ve Timbuktu'yu durduran şey **çakışma tespiti** oldu.
📌 ⇒ ***Bir çakışma listesi yalnız çözülmemiş iş değildir — içinde
önlenmiş kaza da olabilir.*** 18 çakışmayı bugüne kadar borç sayıyordum.

---

## ③ 🔴🔴 HONOLULU KORUMAYI ATLIYOR — sebebi MÜKERRER ALAN

Ham metin okundu (`data/yerlesimler_4ff22b.js:83`). Kayıt **iki `s:`**
taşıyor:
```
ad: satırında   s:[{f:"1898-08-12",t:"1923-10-29",d:"abd"}]      ← YARIM UYGULAMADAN
altta           s: [{1795-01-01→1898-08-12, hawaii-kralligi},
                    {1898-08-12→1923-10-29, abd}]                ← ELLE DÜZELTMEDEN
ve iki `kaynak:` · iki `tur:`
```

🔴 **VE İKİ ALET AYNI KAYDI FARKLI OKUYOR:**
```
JavaScript           SON anahtarı alır  → 2 dönem   ⇒ SİTE DOĞRU ÇALIŞIYOR
_sahiplik_uygula     `_dilim` regex'i İLK `s:[`i alır → 1 dönem
```
⇒ Koruma, baktığı (ilk) diziyi yamanın önerdiğiyle **aynı** görüyor,
`kayip_ar` boş çıkıyor, uyarı **ötmüyor**. Bir veri kaybından doğmuş
koruma, **mükerrer alan yüzünden kör kalıyor**.

📌 `§11`in *"aletin gösterdiği ≠ dosyada yazan"* ailesinin yeni üyesi ve
en ince olanı: dosya **bozuk değil** (JS onu geçerli okuyor, site
çalışıyor) — ama **iki okuyucu farklı cevap veriyor** ve hangisinin
doğru olduğu **alanın SIRASINA** bağlı. Hiçbir denetim bunu sormuyordu.

🔴 **VE KUSUR BENİM:** yarım uygulama `s:`yi `ad:` satırına yazmış; ben
elle düzeltirken **ikinci bir `s:` ekledim**, ilkini kaldırmadım.

---

## ④ ⚠️ BİR TARAMA DENENDİ VE **GÜVENİLMEZ ÇIKTI — SAYI YAZMIYORUM**

*"Kaç kayıtta mükerrer alan var?"* diye bir alet yazdım; **322** dedi.
Doğruladım, **kendi aletim bozuk**:
```
rapor      Akkirman ve Kili → yerlesimler.js:346
gerçek     346. satırda Mora (Tripoliçe) · Modon var, ve o satırda `ad:` YALNIZ 1
```
Blok ayırıcı hem satır numarasını kaçırıyor hem bitişik kayıtları
birleştirip sahte `×2` üretiyor.

🟢 **Alet SİLİNDİ** (commit edilmemişti). Gerekçe: bu projede en pahalı
kusur sınıfı *"hata vermeyen, temiz bir sayı üreten bozuk alet"* — ve
`denetim/` altında duran 322'lik bir rapor, bir sonraki oturumu **yanlış
bir tabana** oturturdu.
⇒ **Mükerrer alanın yaygınlığı: ÖLÇÜLEMEDİ.** `bulunamadı` değil,
**ölçemedim**. Doğru yol JS'in kendi ayrıştırıcısı olmalı — regex değil
(`§11`, bu projede yedinci kez).

---

## ⑤ HÜKÜM VE SIRA
```
🔴 `yer_yama_1923_bosluk_0906.js` — Honolulu ve Timbuktu kayıtları
   UYGULANMAZ. Honolulu için kayıt zaten DOĞRU (JS 2 dönem okuyor);
   yamanın orada yapacak işi YOK.
🔧 `yerlesimler_4ff22b.js` Honolulu kaydı TEMİZLENİR: `ad:` satırındaki
   mükerrer `s:`, `kaynak:`, `tur:` silinir. Değer değişmez — yalnız
   iki okuyucu AYNI şeyi görmeye başlar.
🔜 Ahıska · Akçahisar · Floransa: "KAPSAM DARALDI" uyarıları AÇIK kalem.
   Üçünde de soru aynı: yama EKLEME mi DEĞİŞTİRME mi? ÖLÇMEDİM.
🔜 Mükerrer alan taraması — JS ayrıştırıcısıyla YENİDEN yazılacak.
```

# SINIR-KAFRIKA-0907 — İLERLEME

**Bölge:** Kuzey Afrika + Sahra (Fas · Batı Sahra · Cezayir · Tunus ·
Libya · Mısır · Sudan)
**Çıktı:** `denetim/SINIR-HUKUKI-KAFRIKA-0907.json`
**Ad alanı (birleştirme günü için):** `data/sinir_hukuki_kafrika.js` →
`window.SINIR_HUKUKI_KAFRIKA`

---

## TUR 1 — PAYDA · KAYNAK · KAYIT

### Sayılar

```
PAYDA                       25 kara kenarı · 2.353 tepe · 17.056 km
   çekirdek-içi              9
   çekirdek-dışı komşu      16

KOVA
   🟢 hukuki                14   C'ye girer — bugünkü NE çizgisi 1923 için geçerli
   🔴 bulunamadi             6   C'ye GİRMEZ, A/B'de kalır
   ⚪ olculemedi             5   IBS serisinde çalışma yok, başka kaynak gerek

nitelik_1923 (şemaya EKLENEN alan)
   uluslararası             13
   iç-idarî                  6   ← 1923'te AYNI GÜCÜN iç çizgisiydi
   yok                       1   ← kenar 1923'te HİÇ YOKTU (Sudan/G.Sudan)
   (ölçülmedi)               5
```

### Kaynak

**TDV önce denendi** (`§4` birincil): 26 slug sınandı, **22 canlı**. Ama
gövdeler sınır *tanımı* vermiyor — `libya` gövdesi 92.955 karakter ve
1925 akdini hiç anmıyor. ⇒ `§4`ün **TANECİKLİK boşluğu** (coğrafî değil):
TDV bölgeyi görüyor, sınır delimitasyonu taneciğinde konuşmuyor.
🟢 TDV yine de bir teyit verdi: `sudan` gövdesi kondominyumun gününü
veriyor — *«19 Ocak 1899'da … "condominium" … yeni bir idare başlattı»*.

**Dışarı çıkılan kaynak, adıyla:**
> U.S. Department of State, Bureau of Intelligence and Research, Office of
> the Geographer — *International Boundary Study* serisi. Her sınır için
> ayrı çalışma; tanımlayıcı antlaşmayı adı ve günüyle verir, metnini
> alıntılar. Nüsha: Florida State University College of Law Research Center.

`§5`in 🔴 listesine girmiyor (forum/blog/derleme/YZ üretimi değil) ⇒ kabul.
Seriden **16 çalışma** okundu; 1–160 arası **118 numara** taranıp
başlıkları çıkarıldı.

🔴 **`§4⑦` birebir tekrarlandı:** `WebFetch` bu PDF'ler için *"binary,
okunamıyor"* dedi. **Metin katmanları vardı** — `pypdf` 7.133–27.539
karakter okudu. İkinci çıkarıcı denenmeden `bulunamadi` yazılsaydı 16
kenar boşuna kapanacaktı.

---

## BULGULAR

### ① 🔴 Devralınan bir öncül çürüdü — **Aouzou**

Sevkim *"Aouzou 1994 · NE bugünkü çizgiyi taşıyor"* diyerek bunu bir
**değişim adayı** olarak işaretlemişti (🟡 damgalı, doğrulanmamış).
Ölçüm **tersini** gösterdi:

```
1935 Fransız-İtalyan anlaşması (Aouzou'yu İtalya'ya verecek olan)
   → HİÇ ONAYLANMADI
UAD 3 Şubat 1994 → 1955 Fransız-Libya Antlaşması'nı, yani 1899 Beyanı
   ve 1919 Sözleşmesi hattını TEYİT ETTİ
```
⇒ **1994 hattı değiştirmedi, GERİ GETİRDİ.** Bugünkü Çad–Libya çizgisi
1923'te de yürürlükteydi ⇒ 🟢 `hukuki`.

### ② 🔴 Çapa 87 günle ıskalıyor — **Çad–Sudan ve Orta Afrika–Sudan**

```
çapa                    1923-10-29
Londra Protokolü        1924-01-21   (nota teatisi 1924-01-24)
fark                    87 gün
```
Çapa gününde yürürlükte olan şey 1899 Beyanı'nın **genel hizasıydı**;
kesin hat henüz çizilmemişti. ⇒ İki kenar da C'ye **girmiyor**.
📌 Bu iki kenar, çapanın ne kadar keskin bir soru olduğunun ölçülmüş
örneği: üç ay erken bir çapa ikisini de 🟢 yapardı.

### ③ 🔴 En keskin vaka — **Mısır–Libya: 1923'te çizgi YOKTU**

Kaynak bunu adıyla söylüyor: batı ucu *"not determined until 26 years
later by the Egypto-Italian accord of 1925"*. Sınır **6 Aralık 1925**
Çağbub Antlaşması'yla delimite edildi, 9 Kasım 1926'da netleştirildi,
Mısır **7 Temmuz 1932**'de onayladı. ⇒ Çapa gününde bir çizgi değil bir
**nüfuz belirsizliği** vardı.

### ④ Kaynağın kendi içindeki üç çelişki — ikisi çözüldü, biri açık

```
① Fr-Türk Tunus/Trablus sözleşmesi
   ibs001 "12 May 1910" (5 kez) ¦ ibs121 "May 19, 1910" (4 kez)
   ⇒ ibs121'de AĞIRLIK: o sınırın kendi çalışması, belgenin BAŞLIĞINI ve
     İMZA YERİNİ verip Madde 1'i alıntılıyor. "12 May" SİLİNMEDİ.
② Fr-İspanyol 1904 sözleşmesi
   ibs084 "October 3" ¦ ibs088 "October 4"
   🟢 ÇÖZÜLDÜ ve kaynağın KENDİ İÇİNDEN: ibs088'in kendi kaynakçası
     "Paris, October 3, 1904" diyor ⇒ gövdedeki "4" dizgi hatası.
③ Niamey Sözleşmesi
   ibs096 aynı belgede "June 20" ve "June 30" ⇒ 084/088/099 "June 20"
   ⚠️ İkinci sözleşme: ibs099 "August 16", ibs084/088 "August 26"
      → ÇÖZÜLMEDİ, `olculemedi`.
```

### ⑤ Üç veri bulgusu (kimlik_1923'ü atlasın kendi verisinden ölçerken)

🔴 **Sudan iki kimlikle boyanıyor ve ayrım coğrafî değil**
`ingiltere` 61 nokta (enlem 9,95–20,83) · `ingiliz-sudani` 11 nokta
(10,63–20,80) — aralıklar iç içe. Künye doğru olanı taşıyor. **Altı
kenarımın `kimlik_1923`ünü belirsiz bırakıyor.** Düzeltmedim (`data/`
donuk ve benim dosyam değil), bildirdim.

🔴 **Tunus'un tamamı adsız tâbi** — 36 noktanın 36'sı `v:`, demet tek:
`(k=None, kid=None, statu='vassal')`, 1705-07-17 → 1923-10-29. Ve
`tunus-ocagi` genişletmesi **diskte yok**:
`t: 1881-05-12 (disk) · 1923-10-29 (yamalı)`.
⇒ `KIMLIK-KID-0907`e yatay yazıldı: yama inmeden `kid` yazılırsa 36
kayıtta pencere ihlali doğar. **Sıra: önce künye, sonra `kid`.**

🟢 **Libya'nın 11 "sahipsiz"i kusur değil, BEYAN** — 11'inin 11'i `bos:`
dolu ve `neden:` gerekçeli (Serîr · Rebyâne · Kufra `bos:"kabile"` —
Sünûsî ağı…). Alarm yazacaktım; `bos:` okununca sınıflandırılmış bir
sonuç çıktı.
📌 Aynı "11 sahipsiz" satırı, `bos:` okunmadan bir Değişmez 1 alarmıydı.

### ⑥ Mısır geometrisi — kilit bu bölgede yok (çapraz ölçüm)

`make_valid` deltası Mısır'ın **beş kenarında da 0,0000 km · 0 tepe**.
Kusur noktası 35,621087°D / 23,139293°K, en yakın paylaşılan kenara
**127 km** — Mısır'ın kara sınırları batıda ~25°D, güneyde 22°K, doğuda
~34,2°D olduğuna göre nokta üçünün de dışında, yani **kıyı halkasında**.
Kalem `KADEME-MODEL-0907`de; hüküm vermedim, teyide kadar kenarları
`olculemedi` kovasında tuttum, teyit gelince normal kovaya aldım.

---

## ŞEMADAN SAPMA — bildirildi, tek başıma genişletmedim

`nitelik_1923` alanı ortak şartnamede **yok**. `hal`ın üç kovası bölgemin
bir kenar sınıfını ifade edemiyor: **çizgi 1923'te vardı ama uluslararası
sınır değildi — aynı gücün iç idarî çizgisiydi** (Cezayir–Mali/Nijer/
Moritanya: Fransa–Fransa; Fas–Batı Sahra: İspanya–İspanya; Bir Tawil:
Mısır iç idarî). Altı kenar bu sınıfta.

`hal` üç kovada **bırakıldı**, bilgi ayrı bir alana yazıldı — bir `if`
ile sorulabilir, ve kova açılırsa mekanik eşleşir:
```js
KAFRIKA.kenarlar.filter(k => k.nitelik_1923 === "ic-idari")   // 6
```
Karar 1.MURAT'ta (M-3180 · M-3199).

---

## AÇIK KALEMLER

```
⚪ Cezayir–Fas (1551 km) · Cezayir–Tunus (917) · Habeşistan–Sudan (715) ·
   Eritre–Sudan (595) · Fas–İspanya (21,5)
   → IBS serisinde çalışma YOK (1-160 tarandı). Brownlie, *African
     Boundaries: A Legal and Diplomatic Encyclopaedia* aranacak.
   ⚠️ Fas–İspanya'da 1923 kimliği ayrıca karışık: atlasta
     `rif-cumhuriyeti` künyesi VAR (1921-09-18 → 1923-10-29) ve tam o
     çevrede. Tahmin YAZILMADI.
⚪ Batı Sahra'da atlas noktası SIFIR — üç kenarım (2.914 km) noktasız bir
   toprağa bakıyor. `§2` gereği o toprak en yakın peteğe emiliyor.
   Bu benim kalemim değil ama bildirildi.
⚪ Bir Tawil'de de atlas noktası sıfır (beklenen — 2.060 km²).
```

## ALETLER (hepsi `denetim/` altında, hepsi kendi kendine yeterli)

```
ARAC-SINIR-KAFRIKA-PAYDA-0907.py       kenar çıkarımı (tolerans/eşik YOK)
ARAC-SINIR-KAFRIKA-MISIR-0907.py       Mısır geçersizliği çapraz ölçümü
ARAC-SINIR-KAFRIKA-TDV-0907.py         TDV gövde tarayıcı (KESMEZ, sınır korumalı)
ARAC-SINIR-KAFRIKA-IBS-0907.py         IBS PDF okuyucu (pypdf)
ARAC-SINIR-KAFRIKA-DAYANAK-0907.py     antlaşma+tarih cümlesi çıkarıcı
ARAC-SINIR-KAFRIKA-KIMLIK1923-0907.py  kimlik_1923'ü atlas verisinden ölçer
ARAC-SINIR-KAFRIKA-YAZ-0907.py         kayıt üreteci
```

# SINIR-KAFRIKA-0907 — İLERLEME

**Bölge:** Kuzey Afrika + Sahra (Fas · Batı Sahra · Cezayir · Tunus ·
Libya · Mısır · Sudan)
**Çıktı:** `denetim/SINIR-HUKUKI-KAFRIKA-0907.json`
**Ad alanı (birleştirme günü için):** `data/sinir_hukuki_kafrika.js` →
`window.SINIR_HUKUKI_KAFRIKA`

---

## TUR 1 — PAYDA · KAYNAK · KAYIT

### Sayılar

> 🟡 **BU BLOK TUR 2'DE DEĞİŞTİ — silinmedi, DAMGALANDI.** Dördüncü kova
> (`ayni-kimlik`) 7 Eylül 14:53'te şartnameye eklendi ve üç kenar oraya
> geçti; Habeşistan–Sudan tur 3'te kaynağıyla kapandı.
> **Güncel sayılar aşağıda, "TUR 2 · TUR 3" başlığında.**

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
ARAC-SINIR-KAFRIKA-KOVA4-0907.py       dördüncü kova sınavı (yetkili tablo)
ARAC-SINIR-KAFRIKA-UYARI-0907.py       sınavın koşamadığı kenarlara çekince
ARAC-SINIR-KAFRIKA-ACIK5-0907.py       ikinci kaynak turu
```

---

## TUR 2 · TUR 3 — DÖRDÜNCÜ KOVA VE İKİNCİ KAYNAK

### Güncel sayılar

```
🟢 hukuki       12   C'ye girer
🟣 ayni-kimlik   3   1923'te iki uç da aynı atlas kimliği ⇒ C'de sınır değil
🔴 bulunamadi    6   C'ye GİRMEZ
⚪ olculemedi    4
─────────────────
                25   payda · 17.056 km · geometrisi çıkarılamayan 0

kaynağını AÇIP OKUDUĞUM (verbatim alıntı taşıyan) kenar: 20/25
```

### 🟢 İki bağımsız ölçüm birebir örtüştü

`kimlik_1923` iki kez ölçüldü: bir kez benim aletimle (`1923-10-01`), bir
kez `KIMLIK-1923-0907`in yetkili tablosuyla (`1923-10-28`). **17 DOGRUDAN
ucun 17'sinde aynı kimlik · ayrışma 0.** Farklı gün, farklı alet, aynı
cevap — tek bir ölçümün veremeyeceği bir güven.
📌 Yetkili tablo devralındı, kendi ölçümüm KIYAS'a düşürüldü.

### 🔴 Dördüncü kovanın sınavı 25'in 18'inde koştu

```
KOŞTU        18
KOŞAMADI      7   Batı Sahra'ya bakan 3 (atlas noktası 0 · BOYANMIYOR)
                  Bir Tawil'e bakan 2 (kimlik bir TAHMİN · EMILME)
                  Tunus'a bakan 2 (kid yok)
KOŞTU ama YANLIŞ CEVAP VERDİ  1
```

**Yanlış cevap veren:** `South Sudan ↔ Sudan`. Sınav FARKLI diyor
(`ingiliz-sudani` ↔ `ingiltere`) ⇒ gerçek bir C kenarı sayardı. Tarihen
iki yaka da Anglo-Mısır Kondominyumu — **aynı varlık**. Sebep atlasın
Sudan'ı iki kimlikle boyaması (61 / 11, enlem aralıkları iç içe).
⇒ **Sınav doğru, girdi bozuk.** Ve sınav mekanik olduğu için bozuk girdiyi
sessizce yutuyor: hata vermiyor, temiz bir "FARKLI" üretiyor.
📌 Bu, kovanın ölçülebilir olmasının **lehine** bir kayıt: yorum isteyen
bir ölçütte bu kenar sessizce geçerdi.

**Ve kovanın gerekçe örneği kovanın sınavına girmiyor:** M-3183 dördüncü
kovayı *«Cezayir–Tunus 1923'te iki Fransız toprağı arasındaki idarî bir
hattı»* diye gerekçelendirdi; o kenarda sınav **koşmuyor** (Tunus'un `k`
ve `kid` alanı None). ⇒ Kovanın bu bölgedeki kapsamı **`kid` işine bağlı.**

### Bir tuzaktan dönüldü

Yetkili tablo Bir Tawil için `misir-kralligi` veriyor ve Mısır ucu da
`misir-kralligi` ⇒ sınav naif koşulsa **`ayni-kimlik`** derdi. Ama o değer
`EMILME` kovasında ve tablonun kendi notu *"EMILME bir TAHMİN"* diyor.
Sınav iki uçta da **DOGRUDAN şartıyla** koşuldu. ⇒ Tahmin, ölçümün yerine
geçmez.

### IBS serisi tüketildi

1–200 arası numara denendi; seride **175 çalışma var** ve şu beş sınır
için **yok**: Cezayir–Fas · Cezayir–Tunus · Habeşistan–Sudan ·
Eritre–Sudan · Fas–İspanya. Bu artık tahmin değil **ölçüm** — ama yalnız
o seri için.

### TUR 3 — ikinci kaynak

🟢 **Habeşistan–Sudan KAPANDI** (715,1 km): 1902 (15 Mayıs) ve 1907
Anglo-Etiyopya delimitasyon antlaşmaları, 1903 (Binbaşı Gwynn) ve 1909'da
demarke. Kaynak: *Wondwosen Teshome, "Colonial Boundaries of Africa: The
Case of Ethiopia's Boundary with Sudan", Ege Academic Review, 2009*
(hakemli, açık erişim) — **açıp okudum**, alıntı verbatim.
⚠️ Çekince gizlenmedi: Gwynn demarkasyonu tek taraflıydı ve Etiyopya bugün
de kabul etmiyor. Hukukî ihtilâf gerçek; hattın 1923'te de aynı hat olduğu
değişmiyor, ve atlas tasarrufu boyar.

🟡 **Üçü için iz bulundu ama KAYNAK AÇILMADI ⇒ `olculemedi` DURUYOR.**
Bir arama motorunun özeti bir kaynak değildir; okunmuş saymak `§4`ün en
sinsi ihlali olurdu, çünkü alan **dolu görünür**.
```
Cezayir–Fas    🟡 1845 Lalla Maghnia sınırı ~165 km delimite etti,
                  4. madde çölün delimitasyonunu gereksiz saydı;
                  bugünkü hat 15 Haziran 1972 Rabat Sözleşmesi
                  ⇒ doğruysa 1.551 km'nin çoğu 1923'te DELİMİTE DEĞİLDİ
Eritre–Sudan   🟡 1891/1894 Anglo-İtalyan protokolleri · 1898 delimitasyon
                  · 1899 demarkasyon komisyonu · Kasım 1901 anlaşması
                  ⇒ hepsi çapadan önce, muhtemelen 🟢 olacak
Fas–İspanya    ⚪ okumadım
```

### 🔴 Bir eşleşme tuzağı kayda geçti

Arama sonucu Cezayir–Fas 1972 Sözleşmesi'ni **UNTS vol. 1035, I-15406**
diye verdi. Belgeyi indirip okudum: o belge **Moritanya–Fas, 14 Nisan
1976** sözleşmesi. ⇒ *Eşleşme bulmak, doğru şeyi bulmak değildir.*

### Sıradaki turun ilk işi

`Cezayir–Fas` (1.551 km) — bölgemin en uzun ikinci kenarı, ve tek bir
kaynak okuması onu `bulunamadi` kovasına taşıyacak gibi görünüyor.

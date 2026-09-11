# ŞEMA — C (hukukî sınır) + Karlofça pilotu

> **Oturum:** C ŞEMA PİLOT (eski ad: KÜRESEL GÖRÜNÜM) · **Sevk:** `oturumlar/C-SEMA-PILOT-0911.md`
> **Tarih:** 11 Eylül 2026 · **Cins:** ŞEMA ÖNERİSİ + PİLOT, veri YAZILMADI.
> `data/*.js` ve `arac/*.py` **okunuyor, değiştirilmiyor.**

---

## 0. D022 ÖNGÖRÜ — ölçümden/kodlamadan ÖNCE yazıldı

```
Karlofça pilotu ~1,5-2 saat esdeğer sürer.
TAHMİN ① sınırın bir kısmı DÜZ ÇİZGİ olacak, doğal hatta karşılık gelmeyecek
TAHMİN ② hat TEK BAŞINA yetmeyecek, bir KAPSAMA ALANI da gerekecek
TAHMİN ③ TDV'nin Karlofça maddesi zayıf/kısmi çıkacak, birincil metne
         (antlaşmanın kendi diline) gidilmesi gerekecek
```
Sonuç aşağıda: **② TUTTU** (güçlendirilmiş biçimde) · **③ TUTTU** (TDV
maddesi vardı ama özet düzeyinde, İngilizce kaynaktaki doğrudan alıntı
daha ayrıntılıydı) · **① ÇÜRÜDÜ** — Karlofça'da bulduğum hiçbir segment
saf "düz çizgi" değildi; hepsi ya adlı bir nehre ya da isimli bir kaleye
bağlı. Bu üçüncü tahminin çürümesi aşağıdaki `§3`ün ANA BULGUSUNU doğuruyor.

---

## 1. KAYNAK — ne okundu

```
🟢 TDV `karlofca` (HTTP 200, gövde okundu — özet, madde numarası yok)
🟢 Wikipedia `Treaty of Karlowitz` — orijinal İngilizce çeviriden doğrudan
   alıntı: "Thence its Boundarys shall be carry'd on from the hither
   Banks of the Marosche to the River Teysse, and from the hither Bank
   of the Teysse to the Danube"
🔴 `karlofca-antlasmasi` / `karlofca-muahedesi` — TDV'de ÖLÜ (302), §4③ tuzağı
⚪ Antlaşmanın Latince/orijinal tam metni — ARANMADI (kapsam dışı bırakıldı,
   iki kaynağın BİRBİRİNİ DOĞRULAMASI yeterli görüldü: TDV "Sava nehri"
   diyor, İngilizce kaynak nehir isimlerini teyit ediyor)
```
`kaynak:` alanına göre ikisi de yazılacak — Emre'nin kararı (M-3329)
antlaşma metnini birincil sayıyor; TDV'nin kendisi de metni **aktarıyor**,
yani TDV kuralı bozulmuyor.

---

## 2. ŞEMA ÖNERİSİ

### 2.1 İKİ AYRI KAYIT CİNSİ VAR — bulgunun kendisi

Karlofça'yı okurken antlaşmanın sınır maddelerinin **hepsi aynı biçimde
olmadığı** ortaya çıktı. İkisini TEK şemaya sıkıştırmak zorlardı:

```
① HAT — sınır bir nehri/coğrafî çizgiyi takip ediyor
   örnek: "Sava nehrinin Bosut'un döküldüğü yerden Brod Kalesi'ne kadar"
② NOKTA-ATAMASI — antlaşma bir YERİ bir tarafa veriyor, çizgi tarif etmiyor
   örnek: "Kostayniça Avusturya'da kaldı", "Suçava Osmanlılara geri verildi"
```

**② zaten mevcut A/B mekanizmasıyla çözülür** — yer bir `yerlesimler.js`
noktasıysa `d:`/`s:`/`v:` dizisine yeni bir dönem eklemek yeterlidir, C'ye
hiç gerek yoktur. C'nin asıl işi yalnız **①**dir. Bu ayrım şartnamenin
kendi cümlesiyle örtüşüyor: *"C, A/B'nin ÜSTÜNE EKLENMİŞ bölgesel
görünümdür"* — ② zaten A/B'nin içinde, üstüne bir şey eklemiyor.

### 2.2 HAT kaydı — önerilen alanlar

```js
// data/hukuki_sinirlar.js  →  window.HUKUKI_SINIRLAR  (§7 ad alanı kuralı)
{
  id: "karlofca-bosna-sava",
  antlasma: "karlofca",              // savaslar.js'teki antlaşma künyesine bağ
  f: "1699-01-26", t: null,          // null = bir sonraki antlaşma değiştirene kadar açık
  taraf_a: "osmanli", taraf_b: "avusturya",
  hat: [
    { tur: "nehir", ad: "Sava",
      baslangic: { aciklama: "Bosut'un Sava'ya döküldüğü yer", lat:.., lon:.. },
      bitis:     { aciklama: "Brod Kalesi", lat:.., lon:.. } }
  ],
  kapsama: { tur: "bbox", kutu: [lat1,lon1,lat2,lon2] },   // bkz. §2.3 — ZORUNLU
  kaynak: "Karlofça Antlaşması, Bosna maddesi — TDV `karlofca`: " +
          "\"Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot " +
          "Kalesi'ne kadar sınır olması kabul edildi.\""
}
```
Alan alan gerekçe:
- `f:`/`t:` — mevcut A/B deseninin AYNISI, yeni bir kural icat edilmedi.
- `taraf_a`/`taraf_b` — `devletler.js` künyeleri, YÖNSÜZ değil: motorun
  hangi tarafın hangi yarıya düştüğünü bilmesi için isimlendirilmiş iki
  taraf şart (aşağı bakan/yukarı bakan gibi göreli bir tarif KIRILGAN olur).
- `hat` bir DİZİ — tek bir antlaşma maddesi birden çok nehri art arda
  kullanabiliyor (Banat: Maros → Tisza → Tuna, `§3.2`).
- `kapsama` — bkz. §2.3, koordinatörün "hat yeter mi" sorusunun cevabı.

### 2.3 🔴 EN ZOR SORU'NUN CEVABI — hat TEK BAŞINA YETMEZ

Şartname soruyordu: *"motor bu bölgede Voronoi'yi değil bu hattı
kullansın emrini nereden alacak?"* Koordinatörün önerisi *"hat olarak
toplansın, alana çevirmek sonradan yapılabilir"* idi.

**Ölçtüğüm/okuduğum kadarıyla önerinin kendisi YANLIŞ DEĞİL ama EKSİK.**
Hat gerekli, ama tek başına yetmiyor — iki ayrı sebeple:

```
① Bir hat yalnız bir EĞRİDİR; hangi tarafın hangi devlete ait olduğunu
   TAŞIMAZ. `taraf_a`/`taraf_b` alanı bunu kısmen çözer ama motorun bunu
   GEOMETRİYE çevirmesi için hattın bir KAPALI BÖLGEYİ ikiye BÖLMESİ
   gerekir — açık bir eğri tek başına bir alanı ikiye ayırmaz.
② `CLAUDE.md §2`nin kendi zayıf noktası burada TAM ISABETLE çıkıyor:
   Brod, Bosut, Kostayniça, Bihke, Novi, Krupa — sınırı tarif eden
   isimlerin HİÇBİRİ `yerlesimler.js`'te YOK (aşağıda `§3.3` ölçüldü).
   Yani o bölgede Voronoi'nin bilgisi OLMAYAN bir alan var; motor oraya
   bir "en yakın komşu" atayacak ve hat onu YALNIZ COSMETİK olarak
   düzeltebilir — sahiplik ATAMASINI değil.
```
⇒ **`kapsama` alanı ZORUNLUDUR**, öneri değil: hattı kesin bir bölgeye
(bbox/poligon) yerleştirip *"bu kutunun içinde Voronoi değil BU HAT
karar verir, hattın taraf_a tarafı taraf_a'nındır"* demek gerekiyor.
Koordinatörün *"alana çevirmek sonradan her zaman yapılabilir"* cümlesi
**yön olarak doğru** (hat → alan tek yönlü bir dönüşüm, tersi zor) ama
*"C bugün yazılabilir, kapsama YARIN eklenir"* diye okunursa yanlış:
kapsama olmadan hat motor için **hiçbir şey ifade etmiyor**, ikisi
BİRLİKTE doğuyor.

### 2.4 🟢 VE MEVCUT MEKANİZMAYLA ÇAKIŞMA — beklenmeyen bulgu

`arac/uret_petek.py:552` içindeki `BUYUK` kümesi (doğal hatlara yaslama)
**Sava, Tisza/Tisa, Danube/Tuna/Dunav, Drava**'yı ZATEN adlı akarsu
olarak tanıyor. Yani Bosna sınırının (Sava) ve Banat'ın Tisza/Tuna
ayaklarının **coğrafyası motora zaten TANIDIK.**

⚠️ Ama bu, C'yi GEREKSİZ kılmıyor — yalnız **rolünü daraltıyor**: yaslama
mekanizması bir kenarı yalnız o kenar ZATEN İKİ FARKLI SAHİPLİ PETEK
ARASINDAYSA nehre çeker (33 km yarıçapta). Nokta yoksa (Brod/Bosut gibi)
kenar hiç doğmuyor, yaslayacak bir şey yok. ⇒ **C'nin işi tam bu boşluğu
doldurmak**: nokta seyrekliğinin bıraktığı kesin bir sahiplik boşluğunda
otoriter bir çizgi dayatmak. Zaten yeterince yoğun noktası olan bir
sınırda (varsayımsal) C GEREKSİZ olurdu — bu, `§4` açık sorusuna bağlanıyor.

---

## 3. PİLOT — KARLOFÇA (1699-01-26), UÇTAN UCA

Tam kodlanmış çıktı: `denetim/PILOT-C-KARLOFCA-0911.json`. Burada özet:

### 3.1 Bosna sınırı — HAT, temiz örnek
```
"Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar
sınır olması kabul edildi." (TDV karlofca)
```
Sava zaten `BUYUK`'te (§2.4). Şemaya HAT olarak düştü, `kapsama` bbox'ı
Bosna-Sava havzasına çizildi (kaba, kesin koordinat SONRAKİ iş).

### 3.2 🔴 Macaristan/Banat sınırı — HAT, ama TIKANDI
```
"Thence its Boundarys shall be carry'd on from the hither Banks of the
Marosche to the River Teysse, and from the hither Bank of the Teysse
to the Danube" (Wikipedia, Karlofça'nın İngilizce çevirisinden)
```
Üç nehir art arda: **Maros(Mureş) → Tisza → Tuna.** Tisza ve Tuna
`BUYUK`'te var; **Maros/Mureş YOK.** ⇒ Bu segment bugün motora
tanıtılmamış bir nehirle sınırlı — C şeması bunu bir `hat` girdisi olarak
YAZABİLİR ama motor onu çizmeden önce `BUYUK`'e `"Maros","Mures","Mureș"`
eklenmesi gerekir (bu, C'nin değil `uret_petek.py`nin bir satırlık borcu).

### 🔴 DÜZELTME (11 Eylül, sonraki tur — `HAZIRLIK-BOSNA-NOKTA-0911.json`)
Aşağıdaki §3.3'te **"Bihke: false"** yazıyordu — **YANLIŞTI.** ASCII
alt-dizgi araması Türkçe `ç` ile Hırvatça `ć` arasındaki farktan dolayı
**`Bihaç (Bihać)` kaydını kaçırdı** (`data/yerlesimler_ek.js`, 44.817,
15.871 — ZATEN VAR). Kendi hatam, `§4`/`D054`/`D064`'ün aynı sınıfı.
Ayrıntı ve düzeltilmiş liste: `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json`.

### 3.3 🔴🔴 Bosna'nın kale listesi — NOKTA-ATAMASI, ama noktalar YOK
```
"Kostayniçe Avusturya'da kaldı; diğer kaleleri (Bihke, Novi, Krupa vb.)
boşaltıldı." (TDV karlofca)
```
Taradım (`girdi.GIRDI_DOSYALARI`, 77 dosya): **Kostayniça, Bihke, Novi
(Bosna'nınki — Herceg Novi ayrı, o VAR), Krupa, Brod — HİÇBİRİ
`yerlesimler.js` ailesinde YOK.** Bu §2.3'teki kapsama zorunluluğunun
somut kanıtı: bu beş kalenin sahiplik değişimi bugün **hiçbir mekanizmayla**
ifade edilemiyor — ne C, ne A/B, çünkü nokta yok. Çare C DEĞİL, **yeni
yerleşim noktası eklemek** (§6, mevcut yöntem); C yalnız bu noktalar
eklendikten SONRA aralarındaki BOŞLUĞU (Voronoi'nin belirsiz bıraktığı
kesimi) hatla netleştirebilir.

### 3.4 🟢 Lehistan sınırı — NOKTA-ATAMASI, ve ZATEN ÇÖZÜLEBİLİR
```
"Podolya boşaltıldı, Kamaniçe Kalesi yıkıldı, Suçeva, Roman ve diğer
kaleleri Osmanlılar geri aldı." (TDV karlofca)
```
**Suçava (Suceava) `yerlesimler.js`'te VAR** (`ad:"Suçava (Suceava)"`).
⇒ Bu madde **C gerektirmiyor** — doğrudan o noktanın `d:` dizisine
`{f:"1699-01-26", ...}` eklemek yeterli. Kamaniçe ve Bar (Podolya) da
noktada var (`Bar (Podolya)`), ayrıca aranmadı ama muhtemelen aynı sınıf.

### 3.5 🟢 Venedik sınırı — NOKTA-ATAMASI, KISMEN ÇÖZÜLEBİLİR
```
"Ayamavra adaları, Korent denizi kuzey kıyıları ve bazı kalelerin
(Kataro, Trebinye) iadesi" (TDV karlofca)
```
**Ayamavra ve Trebinye VAR**; Kataro (Kotor) ve Korent kıyısı taranmadı
(kapsam dışı bırakıldı — pilotun amacı tükendi). Aynı desen: bu madde de
büyük ölçüde A/B'nin işi, C'nin değil.

---

## 4. SONUÇ — şemanın NEYİ İFADE EDEMEDİĞİ

```
🔴 Hat TEK BAŞINA sahiplik atamaz — kapsama alanı ZORUNLU, isteğe bağlı değil
🔴 Kapsama alanının motor tarafından NASIL petek/poligona çevrileceği
   (hattın kapsamayı ikiye bölmesi) TASARLANMADI — bu bir SONRAKİ iş,
   ölçülmedi, `öngörü` bile yazılmadı: gerçek bir geometri problemi
   (açık eğri + kapalı bölge → iki yarım poligon) ve `arac/`e dokunmadan
   sınanamaz
🟡 Karlofça'nın BEŞ maddesinden dördü (Banat kısmen, Bosna kale listesi,
   Lehistan, Venedik) C'YE HİÇ İHTİYAÇ DUYMUYOR — ya mevcut A/B'ye
   (nokta varsa) ya yeni nokta eklemeye (§6) düşüyor. C'nin net alanı
   Karlofça'da yalnız BİR segment: Bosna'nın Sava sınırı, ve o da zaten
   `BUYUK`'ün tanıdığı bir nehir.
⇒ Bu pilotun asıl bulgusu: **C'ye ihtiyaç GERÇEK ama Karlofça onu dar bir
  yüzeyde gösteriyor.** Daha keskin bir test, doğal hatta HİÇ karşılık
  GELMEYEN bir antlaşma sınırı olurdu (düz enlem/boylam çizgisi, sömürge
  dönemi cetvel sınırları gibi) — Karlofça'da böyle bir segment BULAMADIM.
```

---

## 4b. İKİNCİ PİLOT — MİDYE-ENEZ (C PİLOT MİDYE-ENEZ, aynı gün) — EN GÜÇLÜ ÖRNEK

Karlofça zayıf bir örnekti (5 maddenin 4'ü C'ye ihtiyaç duymuyordu). Midye-Enez
(Londra Antlaşması 1913, Madde II) **en güçlü örnek**: antlaşmanın kendi metni
*"a line drawn from Enos on the Aegean Sea to Midia on the Black Sea"* diyor —
hiçbir doğal unsura (nehir/dağ) dayanmıyor, düz/cetvel çizgisi. Tam kodlama:
`denetim/PILOT-C-MIDYE-ENEZ-0911.json`. Üç somut ilerleme:

**① KAPSAMA ALANI ARTIK FORMÜLLÜ.** Karlofça pilotu kapsama'yı yalnız bir bbox
*önerisi* olarak bırakmıştı ("kesin koordinat SONRAKİ iş"). Bu pilot bir
**cross-product testi** verdi: `A`=Enez, `B`=Midye, herhangi bir `P` noktası için
`cross = (B.lon-A.lon)*(P.lat-A.lat) - (B.lat-A.lat)*(P.lon-A.lon)`; işaret
tarafı belirler. İstanbul (-2,08 → Osmanlı) ve Kırklareli (+0,99 → Balkan) ile
doğrulandı — Kırklareli bu antlaşmayla gerçekten geçici olarak Bulgaristan'a
geçmişti. ⇒ §2.3'ün "kapsama nasıl poligona çevrilir" sorusunun **düz çizgili
hatlar için** somut cevabı budur (eğri hatlar için hâlâ açık, bkz. §4 SONUÇ).

**② NOKTA-EKSİĞİ İKİ SINIFA AYRILDI.** Karlofça'nın Bosna kale örneği
(Kostayniça vb.) "②NOKTA-ATAMASI, nokta yok, çare C değil nokta eklemek"
diyordu. Midye-Enez'de de bir uç (Midye/Kıyıköy) nokta olarak YOK, ama bu kez
**①HAT tipi** bir sınır — ve hat kendi kapsama alanı içinde Voronoi'nin
YERİNE geçtiği için nokta OLMADAN DA çalışıyor. ⇒ **Kural netleşti: nokta
eksikliği yalnız ②'de (nokta-atamasında) BLOKE EDİCİdir; ①'de (hat+kapsama)
İSTEĞE BAĞLIDIR** (genel harita tamlığı için faydalı ama C'nin çalışması buna
bağlı değil). İki pilot bu ayrımı BİRLİKTE ispatlıyor.

**③ C KAYDININ ÖLÜMÜ ÇÖZÜLDÜ — §5③'ün önerisi doğrulandı.** Midye-Enez hattı
fiilen 29 Haziran 1913'te (II. Balkan Savaşı, Osmanlı ordusu hattı aştı) sona
erdi; hukuken 29 Eylül 1913'te (İstanbul Antlaşması, Meriç sınırı) yeni bir
çizgiyle değişti. Bulgu: **`f:`/`t:` standart deseni YETER, ayrı bir "artık
geçersiz" beyanına gerek yok.** `t:` dolduğunda ve ardıl bir C kaydı yoksa
bölge otomatik A/B'ye (Voronoi + varsa doğal yaslama) döner — çünkü kapsama
zaten yalnız o kaydın `f:`/`t:` penceresinde geçerlidir. Ve ardıl (Meriç)
zaten C GEREKTİRMİYOR (Meriç `BUYUK`'te tanınıyor, `BİRİNCİL-C-0911`'de
ölçüldü) — yani bu örnekte üstüne binen şey yeni bir C kaydı değil, sade A/B.

📌 Ders: hat-tipi (Midye-Enez) ile nokta-atama-tipi (Karlofça Bosna kaleleri)
sınırların nokta-bağımlılığı FARKLI — bir "C'ye nokta lazım mı" sorusu tek
cevaplı değil, sınıfa göre değişiyor.

---

## 5. AÇIK SORULAR — Emre'ye

```
① C, yalnız "nokta YOK ve hat da doğal hatta uymuyor" durumunda mı
   gerekli, yoksa "TDV/antlaşma bir hat tarif ediyorsa" HER ZAMAN mı C
   yazılsın (nokta yeterli olsa bile)? Öneri: BİRİNCİSİ — ikincisi C'yi
   A/B'nin yerine geçirir, üstüne eklemez.
② `kapsama` alanı kim çizecek — elle mi (bbox/poligon), yoksa `taraf_a`/
   `taraf_b`'nin O ANKİ petek kümesinden OTOMATİK mi türetilecek? Otomatik
   olursa C'nin "elle yazılan tek coğrafî kaynak" (`yerlesimler.js`)
   ilkesine yeni bir istisna açılır (`§8`).
③ Bir HAT sonraki bir antlaşmayla değişince (`t:` kapanınca) o bölgedeki
   Voronoi NASIL geri devreye girer — kapsama alanı da mı kapanır, yoksa
   yeni bir C kaydı mı üstüne biner? Öneri: yeni kayıt üstüne biner
   (mevcut A/B'nin dönem-üstüne-dönem deseniyle TUTARLI).
④ `hukuki_sinirlar.js` yeni bir dosya mı, yoksa mevcut `savaslar.js`
   içine mi (zaten antlaşma künyesi orada) eklenir? Öneri: AYRI dosya —
   `savaslar.js` bugün coğrafî geometri taşımıyor, `§7` ad alanı kuralı
   (D175) yeni bir sorumluluğun yeni bir dosyada durmasını öğütlüyor.
```

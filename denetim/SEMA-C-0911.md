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

## 4c. ÜÇÜNCÜ PİLOT — ŞATTÜLARAP (C ŞEMA KAPANIŞ, aynı gün) — DESENİ KIRDI

İstenen tam olarak buydu: *"üçüncüsü deseni kırmalı, yoksa tesadüf olabilir."*
Kırdı — ama beklenmedik yönde: **kendi `BİRİNCİL-C-0911` hükmümü çürüttü.**

Tam kodlama ve düzeltme: `denetim/PILOT-C-SATTULARAP-0911.json`.

**① CROSS-PRODUCT EĞRİ HATLARDA KIRILIYOR — ölçüldü.** `veri-kaynak/
ne_10m_rivers.geojson`'daki gerçek "Shatt al Arab" geometrisi (66 nokta,
~163 km) Midye-Enez'in aynı 2-uç-noktalı düz-çizgi testine karşı sınandı:
gerçek nehir bu düz çizgiyi **4 kez kesiyor**, en fazla **11,1 km** sapıyor.
⇒ **Cross-product SADECE hattın gerçekten düz/cetvel olduğu (Midye-Enez)
durumlarda güvenlidir; kıvrımlı doğal hatlarda 11 km'lik bir şeritte YANLIŞ
TARAF atar.** Eğri hatlar için ya nehrin kendi polyline'ı segment segment
kullanılmalı, ya da (bu örnekte olduğu gibi) C'ye hiç gerek kalmaz (aşağı bak).

**② 🔴🔴 KENDİ HATAM BULUNDU VE DÜZELTİLDİ.** `BİRİNCİL-C-0911.json`
Şattülarap için "`BUYUK` setinde tanınmıyor, motor otomatik yaslayamaz" diye
`C_GEREKLİ` hükmü vermişti — bu **yalnızca ad listesine** bakılarak
söylenmişti. `arac/uret_petek.py:629`'daki İKİNCİ kapı (Natural Earth
`scalerank <= 5.0`) hiç kontrol edilmemiş. Ölçüldü: Shatt al Arab
`scalerank=3.0` — eşiğin altında, yani **ad listesinde olmasa bile
`NEHIR_HAT` havuzuna zaten giriyor.** Basra (6,1 km) ve Muhammere (1,7 km)
33,3 km'lik yaslama yarıçapının çok içinde. ⇒ **Motor bu sınırı otomatik
yaslayabilir — hiçbir kod değişikliği bile gerekmez.** Düzeltilmiş damga:
`AB_YETER`. `BİRİNCİL-C-0911.json`'a bu düzeltme kendi içinde işlendi
(orijinal hüküm SİLİNMEDİ, "yanlıştı" diye damgalandı — D049/D107).

📌 Ders (`D043`'ün yeni bir yüzü): **iki kapılı bir süzgeçte yalnız birini
kontrol etmek, ikisini de kontrol etmemiş olmakla AYNI SONUCU verir —
ama YANLIŞ bir güvenle.** `BUYUK` "tek kapı" SANILDI, değildi.

**③ SONUÇ: 3. pilot için C kaydı YAZILMADI, çünkü gerekmiyor.** Üç
pilotun (Karlofça · Midye-Enez · Şattülarap) ortak deseni artık şu:
```
Karlofça     yer devri (②) — C'nin işi değil, A/B'nin işi
Midye-Enez   yapay düz çizgi (①), doğal unsura HİÇ dayanmıyor — C GEREKLİ
Şattülarap   doğal eğri hat (①), AMA motor onu ZATEN TANIYOR — C GEREKMİYOR
```
⇒ **C yalnız "doğal unsura dayanmayan, yapay/cetvel sınır" durumunda kesin
gereklidir.** Doğal bir hat (nehir/dağ) söz konusu olduğunda önce "motor bu
hattı zaten biliyor mu" (ad listesi VE scalerank, ikisi de) sorulmalı —
çoğu zaman cevap evet çıkıyor ve C'ye hiç gerek kalmıyor.

---

## 6. ŞEMA KESİNLEŞTİRME

### 6.1 Kayıt cinsleri — üç pilotun ayırdığı

```
① HAT              antlaşma bir çizgi/hat tarif ediyor (nehir/dağ/cetvel)
   ①a doğal, motor TANIYOR (ad listesi ∪ scalerank≤5)   → C GEREKMEZ, A/B yeter
   ①b doğal, motor TANIMIYOR (küçük/kaba çizilmiş nehir) → C gerekebilir
       (bu envanterde HİÇ örneği çıkmadı — üç aday da ya ②'ydi ya ①a ya
       tamamen yapay; ①b hâlâ TEORİK, ölçülmüş bir örneği yok)
   ①c yapay/cetvel (düz çizgi, hiçbir doğal unsura dayanmaz) → C KESİN GEREKLİ
② NOKTA-ATAMASI    antlaşma bir YERİ bir tarafa veriyor, çizgi tarif etmiyor
   → C'nin işi DEĞİL, mevcut A/B (nokta varsa d:/s:/v: dönemi eklemek) yeter;
     nokta yoksa çare YENİ NOKTA EKLEMEK (§2 işi), C DEĞİL
```
110 tekil antlaşmanın (`ENVANTER-C-II-0911`) dar-NET_SINIR 16 kaydından
**yalnız 2'si ①c sınıfına düşüyor: Kasr-ı Şirin (geniş bölge/Zagros,
kesin çizgisiz) ve Midye-Enez (yapay düz çizgi).** Şattülarap ①a'ya
düzeltildi. Diğer 13'ü ya ② ya da zaten `A/B_YETER` idi.

### 6.2 Zorunlu alanlar (`window.HUKUKI_SINIRLAR`, `§7` ad alanı kuralı:
dosya adındaki ayırt edici parça — `hukuki_sinirlar` — değişken adında da)

```js
// data/hukuki_sinirlar.js  →  window.HUKUKI_SINIRLAR
{
  id: "midye-enez-1913",             // benzersiz
  antlasma: "midye-enez-1913",       // savaslar.js/ANTLASMALAR künyesine bağ (varsa)
  f: "1913-05-30", t: "1913-06-29",  // A/B'nin d:/s:/v: deseniyle AYNI biçim
  taraf_a: "balkan-devletleri", taraf_b: "osmanli",
  hat: [{ tur:"duz_cizgi"|"nehir"|"dag", ad:"...",
          baslangic:{ad,lat,lon,kaynak,dogrulanmadi:bool},
          bitis:{ad,lat,lon,kaynak,dogrulanmadi:bool} }],
  kapsama: { tur:"bbox", kutu:{lat_min,lat_max,lon_min,lon_max},
             yon_kurali: "cross>0 -> taraf_a, cross<0 -> taraf_b" },  // ZORUNLU, §2.3
  kaynak: "antlaşma metninin kendisi/neşri — birincil"
}
```
`dogrulanmadi:true` bir uç için koordinat kaynağı zayıfsa/bulunamadıysa
kullanılır (D107 — "bulunamadı" bir SONUÇTUR, uydurmaktan iyidir).

### 6.3 Motor entegrasyon noktası — TASARLANDI, UYGULANMADI

`arac/uret_petek.py`'nin gün-bazlı üretim döngüsünde önerilen sıra:
```
1) Voronoi hücreleri hesaplanır (mevcut)
2) dogal_hatta_yasla() ile doğal hatlara çekilir (mevcut)
3) 🆕 O GÜN aktif (f<=g<t) bir HUKUKI_SINIRLAR kaydı varsa: kaydın
   `kapsama` kutusu içindeki hücre/kenarlar, Voronoi/yaslama SONUCU
   GÖRMEZDEN GELİNEREK `yon_kurali`ye göre taraf_a/taraf_b'ye
   YENİDEN atanır (bir tür son-aşama override, boya/BOYALAR
   adımından ÖNCE).
```
⚠️ Bu sıra **tasarım önerisidir, `arac/`e dokunularak SINANMADI** —
görev şartı `data/` VE (dolaylı olarak) `arac/` donuktu. Gerçek entegrasyon
ayrı bir motor oturumunun işi (D107: öneri ≠ ölçüm).

---

## 5. AÇIK SORULAR — Emre'ye (TEK YERDE toplandı, üç pilot sonrası)

```
① C hangi durumda gerekli? ÖNERİ (üç pilotla GÜÇLENDİ): yalnız ①c —
   "doğal unsura HİÇ dayanmayan, yapay/cetvel sınır" durumunda. Doğal
   hat (①a/①b) varsa önce motorun onu TANIYIP TANIMADIĞI (ad listesi
   VE scalerank) ölçülmeli — Şattülarap'ta ölçülmeden C'ye gidilmiş
   olsaydı BOŞ YERE bir kayıt yazılırdı.
② `kapsama` alanı elle mi otomatik mi? ÖNERİ: ELLE, ama artık bir
   YÖNTEMLE — cross-product formülü (bu oturumda verildi, iki test
   noktasıyla doğrulandı) düz çizgiler için ELLE hesaplanabilir bir
   kural sağlıyor. Otomatik türetme (taraf_a/b'nin o anki petek
   kümesinden) hâlâ ayrı bir risk taşıyor (§8 istisnası).
③ C kaydı nasıl "ölür"? ÇÖZÜLDÜ (Midye-Enez pilotu): `f:`/`t:` standart
   deseni yeter, ayrı "geçersiz" beyanına gerek yok; `t:` dolduğunda
   ardıl kayıt yoksa bölge otomatik A/B'ye döner.
④ Dosya: `hukuki_sinirlar.js` mi, `savaslar.js` içine mi? ÖNERİ: AYRI
   dosya (`§7`/D175 — yeni sorumluluk yeni dosyada durur).
⑤ 🆕 Karlofça'nın Bosna kale listesi (Kostayniça, Bihke/Bihać, Novi,
   Krupa, Brod — SEMA-C §3.3) hâlâ `yerlesimler.js`'te YOK. Bunlar C'nin
   değil §2'nin (yeni nokta ekleme) işi — ama BEKLEMEDE, kimse
   üstlenmedi. Emre'ye: bu 5 nokta ayrı bir NOKTA EKLEME görevine mi
   dönüşsün?
⑥ 🆕 EN ÖNEMLİSİ — C'YE DEĞER Mİ? Bkz. §7 aşağıda, ayrı ve dürüst bir
   bölüm olarak.
```

---

## 7. DÜRÜST TAHMİN — C'YE DEĞER Mİ?

```
110 tekil antlaşmanın (ENVANTER-C-II) dar-NET_SINIR kümesi: 16
Bunların BİRİNCİL METİNLE kesinleşen C_GEREKLİ sayısı:      2
  (Kasr-ı Şirin 1639 · Midye-Enez 1913 — Şattülarap DÜZELTİLDİ, çıktı)
```
**Cevap: iki antlaşma için ayrı bir şema+motor katmanı yazmaya BUGÜN
değmez.** Gerekçe:
- Maliyet: yeni dosya (`hukuki_sinirlar.js`) + yeni ad alanı + motora yeni
  bir üçüncü-aşama override adımı (§6.3, sınanmamış, gerçek risk taşıyor —
  Voronoi/yaslama SONUCUNU ezen bir mekanizma, `§2`'nin zayıf noktasına
  YENİ bir dokunma yüzeyi açar).
- Fayda: 2 kayıt. Kasr-ı Şirin zaten "geniş bölge, kesin çizgisiz" — C ile
  bile MÜKEMMEL çözülemez (§4 SONUÇ, hâlâ geçerli: kapsama→poligon
  dönüşümü tasarlanmadı). Midye-Enez tek başına GERÇEKTEN net bir C adayı.
- ⇒ **Öneri (kararı Emre verir): C'yi ŞİMDİ bir motor katmanı olarak
  YAZMA. Bunun yerine Midye-Enez (ve gerekirse Kasr-ı Şirin) için, o
  bölgenin/döneminin d: dönemini ELLE, kabaca bugünkü A/B şemasıyla
  (mümkün olan en yakın yaklaşıklıkla) kodla — 2 kayıt için özel bir
  şema fazlalık.** C şeması (bu üç pilotun ürettiği bilgi) BELGELENMİŞ
  DURUYOR (`SEMA-C-0911.md`, üç `PILOT-C-*.json`) — envanter büyür de
  ①c sınıfı 10-15 kayda çıkarsa, o zaman motor katmanı yeniden gündeme
  gelebilir. Bugün için maliyet/fayda dengesi KATMANA KARŞI.
```

---

## 8. EMRE'NİN KARARI — C YAZILACAK (C ŞEMA YAZIM, aynı gün)

> **§7'nin "değmez" önerisi bir TAVSİYEYDİ, HÜKÜM DEĞİL — Emre'ye götürüldü
> ve KARARI TERS ÇIKTI: C yazılacak.** Gerekçesi bugünün 1-2 vakalık
> ölçümü değil, **atlasın gelecekteki (dünya kapsamı açıldığındaki)
> ihtiyacı** — Sykes-Picot tipi cetvel sınırlar, sömürge sınırları,
> meridyen/paralel hatları çoğalınca C'siz kalmak pahalı olur. Bu bölüm
> şemayı **o geleceğe göre**, uygulanabilir ayrıntıda kesinleştiriyor.
> `data/` ve `arac/` hâlâ DONUK — burada YALNIZ şema, kod YAZILMADI.

### 8.1 `window.HUKUKI_SINIRLAR` — tam alan listesi

`§7` ad alanı kuralı: dosya `data/hukuki_sinirlar.js` → değişken
`window.HUKUKI_SINIRLAR` (dosya adındaki ayırt edici parça aynen değişkende).

```js
window.HUKUKI_SINIRLAR = [
{
  id: "midye-enez-1913",                    // ZORUNLU, benzersiz
  taraflar: ["osmanli", "balkan-devletleri"],  // ZORUNLU, [taraf_a, taraf_b] — İKİ devletler.js künye id'si
                                             // 🔴 "balkan-devletleri" TEKİL bir künye DEĞİL (devletler.js'te
                                             // yok) — bu alan HER ZAMAN gerçek, TEKİL iki künye id'si taşımalı.
                                             // Midye-Enez'in taraf_b'si bu yüzden GERÇEKTE "bulgaristan-kralligi"
                                             // olmalı (§8.5'te düzeltildi) — burada YANLIŞ örnek olarak
                                             // BİLEREK bırakıldı, hatanın kendisi bir UYARI taşısın diye.
  f: "1913-05-30", t: "1913-06-29",         // ZORUNLU — A/B'nin d:/s:/v: deseniyle AYNI biçim (gün hassasiyeti)
  hat: {
    tur: "cetvel",                          // ZORUNLU — "dogal-tanimsiz" | "cetvel" (§8.2)
    nokta_dizisi: [                         // ZORUNLU, ≥2 nokta, [lon,lat] sırayla
      { lon: 26.075, lat: 40.724, ad: "Enez", kaynak: "data/yerlesimler.js:126 (mevcut nokta)" },
      { lon: 28.09611, lat: 41.63528, ad: "Midye (Kıyıköy)",
        kaynak: "Wikipedia 'Kıyıköy', 41°38'07\"N 28°05'46\"E — iki bağımsız kaynakla teyitli",
        dogrulanmadi: false }
    ]
  },
  kapsama: {                                // ZORUNLU, §8.2
    tur: "bbox",
    kutu: { lat_min: 40.5, lat_max: 42.0, lon_min: 25.8, lon_max: 29.3 },
    yon_kurali: "yerel_cross_pozitif_taraf_a"   // bkz §8.2 algoritma
  },
  kaynak: {                                 // ZORUNLU — antlaşma BİRİNCİL
    tur: "antlaşma metni (neşir)",
    madde: "Madde II",
    alinti: "His Majesty the Emperor of the Ottomans cedes ... to the west of a line drawn from Enos on the Aegean Sea to Midia on the Black Sea",
    url: "https://en.wikisource.org/wiki/Treaty_of_London_-_Peace_Treaty_between_Greece,_Bulgaria,_Serbia,_Montenegro_and_the_Ottoman_Empire"
  },
  kaynak_ikincil: {                         // İSTEĞE BAĞLI — TDV/akademik ikinci kaynak, varsa
    tur: null, not: "Bu vaka için ikincil kaynak aranmadı (kapsam dışıydı) — alan boş bırakılabilir, YOK diye SİLİNMEZ (D107)"
  }
}
];
```

Alan alan gerekçe (§2.2'nin ilk taslağından FARKLILAŞAN kısımlar):
- `taraflar` artık dizi (eski taslakta `taraf_a`/`taraf_b` ayrı alanlardı) —
  `kapsama.yon_kurali` string'i hangisinin "pozitif" tarafı olduğunu söylüyor,
  böylece iki alan tek bir çift + bir kuralla ifade ediliyor.
- `hat.nokta_dizisi` — SEMA-C §4b/§4c'nin iki pilotundan (Midye-Enez düz,
  Şattülarap eğri) çıkan BİRLEŞİK temsil: ①c (cetvel) için 2 nokta yeter,
  ①b (doğal-tanınmayan) için nehrin/dağın GERÇEK polyline'ı (Natural Earth
  kaynağından ya da elle sayısallaştırılmış) buraya yazılır — TEK şema,
  İKİ hat cinsi.
- `kaynak`/`kaynak_ikincil` ayrı nesneler (eski taslakta tek string'di) —
  Emre'nin M-3329 kararı (antlaşma metni birincil, TDV ikincil) burada
  ŞEMAYA gömüldü, her yeni C kaydı bu ayrımı YAZMAK ZORUNDA.

### 8.2 Hat cinsleri VE eğri-hat çözümü (koordinatörün ④ sorusu — ÇÖZÜLDÜ)

```
①a DOĞAL-TANINAN     motor zaten tanıyor (BUYUK ad listesi ∪ scalerank≤5,
                      ya da FEATURECLA=Range/mtn/Plateau/Gorge/Wetlands)
                      → C YAZILMAZ, A/B + dogal_hatta_yasla YETER
①b DOĞAL-TANINMAYAN  gerçek nehir/dağ AMA motor tanımıyor (Adige, Mureş —
                      KAPSAM-C-0911'de ölçüldü) → C hattı GERÇEK polyline
                      taşır (Natural Earth'ten aynı geometri kopyalanır)
①c YAPAY/CETVEL       hiçbir doğal unsura dayanmaz (Midye-Enez) → C hattı
                      İKİ (ya da az sayıda düz segment) NOKTA taşır
②  NOKTA-ATAMASI      🔴 C'YE HİÇ GİRMEZ — antlaşma bir YERİ bir tarafa
                      veriyor, ÇİZGİ tarif ETMİYOR (Karlofça'nın Bosna kale
                      listesi, Amasya'nın şehir listesi). Çare mevcut A/B
                      (nokta varsa d:/s:/v: dönemi eklemek) ya da nokta
                      eksikse §2 (yeni yerleşim). `window.HUKUKI_SINIRLAR`a
                      YAZILMAZ — bu şemanın EN SIK ihlal edileceği yer
                      olacağı için AÇIKÇA burada tekrarlanıyor.
```

**🔴 EĞRİ HAT PROBLEMİ — ÇÖZÜLDÜ (ölçülemedi denmedi):**
Koordinatörün kendi ölçümü (KAPSAM-C-0911): 2-uçlu düz-çizgi cross-product,
Şattülarap'ın gerçek eğrisine karşı 11,1 km sapıyor ve çizgiyi 4 kez kesiyor
— **global** cross-product (tek bir A→B vektörü) eğri hatta güvenilmez.

**Çözüm: YEREL (nearest-segment) cross-product — motorun KENDİ
`dogal_hatta_yasla()` mekanizmasının BİREBİR AYNI deseni.**
```
Herhangi bir petek-kenar noktası P için:
  1) q = nearest_points(HAT_POLYLINE, P)[0]   — polyline üzerindeki en yakın nokta
     (nokta_dizisi'nden kurulan bir LineString; ①c'de 2 nokta = tek segment,
     ①b'de N nokta = N-1 segment — AYNI kod ikisini de kapsar)
  2) q'nun düştüğü SEGMENTİN yerel teğet vektörü (dx,dy) bulunur
     (o segmentin iki ucu arasındaki fark — GLOBAL A→B DEĞİL, YEREL segment)
  3) cross_yerel = dx*(P.y - q.y) - dy*(P.x - q.x)
  4) cross_yerel > 0 → taraf_a (yon_kurali'ne göre), < 0 → taraf_b
```
Bu, Midye-Enez'de (①c, tek segment) global cross-product ile TAM AYNI
sonucu verir (segment zaten global doğrunun kendisi) — ①b'de (Şattülarap
gibi çok segmentli eğri hatlarda) ise YEREL teğet kullanıldığı için 11 km'lik
sapma sorunu ORTADAN KALKAR, çünkü karar HER ZAMAN en yakın gerçek nehir
parçasına göre veriliyor, uzak bir düz-çizgi referansına göre DEĞİL.
⚠️ **Bu bir TASARIM ÇÖZÜMÜdür, KOD OLARAK YAZILMADI/SINANMADI** (`arac/`
donuk) — kendine has riskleri var (keskin U-dönüşlü nehirlerde iki uzak
segment aynı P'ye yakın olabilir, "en yakın" tekil olmayabilir) ve bir
uygulama oturumunda gerçek geometriyle sınanmalı. D107 gereği açıkça:
**tasarlandı, sınanmadı.**

### 8.3 Motor entegrasyon noktası — bulundu, satır numarasıyla

`arac/uret_petek.py`nin **iki farklı** aşaması var ve C İKİSİNE DE
KARIŞMAMALI:
```
satır 1740-1750  "Kenarlar doğal hatlara yaslanıp yumuşatılıyor"
                  → STATİK, TEK SEFERLİK, TÜM TARİHTEN BAĞIMSIZ geometri
                  (paylaşılan petek ÖRTÜSÜ inşa ediliyor — burada `g:` /
                  tarih YOK). C BURAYA GİRMEZ — C tarihe bağlı, bu aşama değil.
satır 4842-4856  "Dönemler kuruluyor (delta yapısı)" iç döngüsü
                  `for i in range(len(tarihler) - 1): a, b = tarihler[i], tarihler[i+1]`
                  — HER DÖNEM (a,b) için `tabi`/`dogrudan` (v:/d: aktif
                  nokta kümeleri) burada hesaplanıyor. C BURAYA GİRER:
                  `tabi`/`dogrudan` hesaplandıktan HEMEN SONRA (satır ~4856),
                  o dönemde (a<t_C ve b>f_C, yani C kaydıyla ZAMAN ÖRTÜŞÜYORSA)
                  aktif bir HUKUKI_SINIRLAR kaydı varsa: `kapsama` kutusu
                  içindeki petek YÜZLERİ (bu döngüden SONRAKİ gövde/petek
                  montaj adımlarının girdisi olan `_kume`/yüz listesi),
                  Voronoi'nin/`_kume`'nin normal atadığı sahibi YERİNE,
                  §8.2'nin yerel-cross-product kuralına göre YENİDEN
                  taraf_a/taraf_b'ye atanır.
```
⚠️ **Bunun ÖTESİNDEKİ (gövde/petek montajının TAM MEKANİĞİ — `_kume`'nin
bu döngüde mi yoksa `dogrudan`/`tabi`'den TÜRETİLEN ayrı bir adımda mı
kullanıldığı) satır satır İZLENMEDİ** — bu, dosyanın 4800+ satırının
TAMAMINI okumayı gerektirir ve bu görevin (şema yazımı, `arac/` donuk)
kapsamı dışında. **Verdiğim satır aralığı (~4842-4856) doğrulanmış bir
GİRİŞ NOKTASI, ama tam patch NOKTASI değil** — bir uygulama oturumu bu
döngünün çıktısının nasıl gövdeye dönüştüğünü SATIR SATIR izlemeli.
D107 gereği açıkça: **yapısal konum bulundu, tam mekanik İZLENMEDİ.**

### 8.4 `index.html` değişikliği

```
🔴 §5 kuralı: yeni bir veri dosyası eklersen index.html'e de satır eklemelisin.
   YENİ SATIR: <script src="data/hukuki_sinirlar.js"></script>
   KONUM: data/devletler.js'in HEMEN SONRASI önerilir (künye verisiyle aynı
   katman, savaslar.js'ten önce — hukuki_sinirlar bir künyeler-arası İLİŞKİ
   taşıdığı için künye listesinden sonra, ama antlaşma/savaş verisinden
   önce mantıklı bir okuma sırası kurar). KESİN SIRA `js/app.js`in hangi
   sırayla `window.*` okuduğuna bağlı — BU GÖREVDE SINANMADI (data/ donuk).
```

### 8.5 SINAV TASARIMI — C doğru çalıştığını nasıl kanıtlar (D010: iki yönde)

Midye-Enez'in kabul ölçütü, `taraflar` alanının doğru künyelerle
düzeltildiği varsayımıyla (§8.1'in kendi uyarısı — `bulgaristan-kralligi`,
`balkan-devletleri` değil):

```
SINAV 1 — HAT DOĞRU ÇALIŞIYOR MU (pozitif yön)
  girdi   : 1913-06-10 (Midye-Enez'in aktif olduğu bir gün, f<g<t)
  beklenen: İstanbul (28.97,41.0) → osmanli tarafında BOYALI
            Kırklareli (27.225,41.735) → bulgaristan-kralligi tarafında BOYALI
  kontrol : petek_govde.js'te o güne en yakın dönemde bu iki noktanın
            HANGİ gövdeye ait olduğu okunur — cross_yerel işaretiyle
            HESAPLANAN taraf İLE EŞLEŞMELİ (§8.2'nin dogrulama testi,
            zaten bu oturumda İstanbul/Kırklareli için elle YAPILMIŞTI —
            şimdi gerçek petek çıktısında TEKRARLANMALI)

SINAV 2 — C'SİZ BÖLGELER DEĞİŞMEMİŞ Mİ (negatif yön — D010'un ASIL vurgusu)
  yöntem : C EKLENMEDEN ÖNCEKİ bir referans koşusu (ör. koşu 9'un çıktısı)
           ile C EKLENDİKTEN SONRAKİ koşunun `petek_govde.js`i, HUKUKI_
           SINIRLAR kayıtlarının kapsama kutularının DIŞINDAKİ TÜM
           hücreler için birebir DİFF'lenir
  beklenen: fark SIFIR (byte-eşit ya da geometri-eşit) — Midye-Enez'in
           kapsama kutusu (§8.1: 40.5-42.0K/25.8-29.3D) DIŞINDA HİÇBİR
           petek, hiçbir tarihte DEĞİŞMEMELİ
  neden_kritik: SEMA §2.3'ün kendi uyarısı — C, Voronoi/yaslama SONUCUNU
           EZEN bir mekanizma; yanlış uygulanırsa kapsama kutusu dışına
           TAŞABİLİR (bir bug) ya da kutu içi/dışı sınırında YENİ bir
           dikiş/çatlak yaratabilir (poligon kapanmama riski, §2.3'ün
           "açık eğri + kapalı bölge → iki yarım poligon" sorunuyla AYNI
           SINIF) — bu sınav olmadan bu risk GÖRÜNMEZ kalır

SINAV 3 — ZAMAN SINIRI DOĞRU MU
  girdi  : 1913-05-25 (f'den ÖNCE) ve 1913-07-05 (t'den SONRA)
  beklenen: HER İKİ günde de bölge NORMAL A/B'ye (Voronoi+yaslama) göre
           boyalı — yani 05-25'te ESKİ sınır (savaş öncesi Ottoman Thrace),
           07-05'te YENİ durum (Osmanlı ordusu hattı zaten aşmış) — C'nin
           etkisi YALNIZ [f,t) penceresinde görünmeli, dışında SIFIR
```
Bu üç sınavın 1'i ölçüldü (İstanbul/Kırklareli işaret testi, elle), 2'si ve
3'ü TASARLANDI ama arac/ donuk olduğu için KOŞULMADI — bir uygulama
oturumunun KABUL ÖLÇÜTÜ olarak kullanılması ÖNERİLİR.

### 8.6 🆕 ŞEMA GENİŞLEMESİ — `hat.tur:"paralel"|"meridyen"` (C DOSYA YAZIM, ikinci kayıt)

İkinci gerçek kayıt (Mısır-Sudan, 1899, 22. paralel — `TASLAK-hukuki_sinirlar.js`)
yazılırken §8.1'in şeması EKSİK çıktı: `hat:` alanı yalnız `nokta_dizisi`
(çizgi hat) öngörüyordu, ama bu antlaşmanın birincil metni (Wikisource
"Sudan Convention 1899" Madde I) sınırı **tek bir enlem değeriyle**
tanımlıyor — çizgi değil eşik. C VERİ TOPLAMA'nın bağımsız bulgusuyla
(kendi raporu, "Sykes-Picot'nin TAM TERSİ: saf paralel/meridyen eşiği,
cross-product'tan UCUZ") örtüşüyor — iki oturum aynı ihtiyacı farklı
yollarla buldu.

```
hat.tur ARTIK ÜÇ DEĞER ALIYOR:
  "cetvel" | "dogal-tanimsiz"   → hat.nokta_dizisi (§8.2, YEREL cross-product)
  "paralel"                     → hat.enlem (sayı) — kapsama.yon_kurali:
                                   "P.lat >= X -> taraf, P.lat < X -> öteki"
  "meridyen"                    → hat.boylam (sayı) — aynı desen, boylam ekseninde
```
Bu üçüncü tür cross-product/nearest-segment GEREKTİRMEZ — motor için
EN UCUZ hat cinsi (tek sayısal karşılaştırma). Şemaya İKİNCİ bir gerçek
kayıtla (tek örnekle değil, D021 gereği) eklendiği için hem KAYIT hem
ŞEMA aynı anda doğrulanmış oluyor.

---

## 9.5 🔴 M-3480 — KAPSAMA KUTUSU DOĞAL SINIRA GENİŞLETME KURALI

*(numaralandırma notu: bu bölüm §9'un (M-3463) hemen ardından, §10'dan
ÖNCE gelecek şekilde konumlandırıldı — dosyanın kendi önceki bölümleri
de (§4b/4c/6, §5/7/8'den önce) numaraya göre değil KRONOLOJİK sırayla
eklenmiş, bu doküman GENEL olarak "ekleme sırası = numara sırası değil"
konvansiyonunu zaten taşıyor.)

> **YAZIM KURALI (Emre'nin kararı, aynen):** *"Bir C kaydının kapsama
> alanı, hattın geçtiği yerden başlayıp doğal bir sınıra kadar uzatılır.
> Kutu, hattın dar çevresine KIRPILMAZ. Ölçüt: kapsama alanının kenarı,
> gözle ayırt edilebilir bir sınır değişimi ÜRETMEMELİDİR."*

**Gerekçe:** dar bir dikdörtgenin düz kenarı, dışarıdaki A/B'nin organik
(kıyıya/nehre/sırta yaslanmış) sınırıyla uyuşmaz — ekranda yapay bir
dikiş oluşur. Geniş kutuda dikiş aynı-renkli/belirsiz bir bölgenin
içinde kalıp GÖRÜNMEZ olur.

**🔴 Bedel — C DENETİMİ'nin C5 bulgusuyla DOĞRUDAN çatışıyor:** kutu
genişledikçe içine DAHA ÇOK gerçek yerleşim girer, ve `sezgi_kapali`
o bölgede TÜM sezgiyi kapattığı için bu noktaların HEPSİ `gereken_
cografya` ile kaplanmalı — yoksa sahipsiz kalıp harita delinir
(`Değişmez 1`). Midye-Enez'de ölçüldü: eski dar kutu ~42-44 yerleşim,
yeni geniş kutu (Ege-Karadeniz) ~67 — ve belgenin kendisi bunların
YALNIZ 2'sini (Enez, Midye) adlandırıyor. **Kalan 65 nokta için ÜÇ
seçenek var (geometrik otomatik atama / metinden çıkarsama / kısmî
sezgi), KARAR VERİLMEDİ** — bkz. `TASLAK-hukuki_sinirlar.js`'in
`kapsama_kaplama_analizi` alanı, tam ölçüm ve üç şık orada.

**Şemaya eklenen:** `kapsama.kutu_eski_dar` (izlenebilirlik için önceki
dar kutu SİLİNMEDEN saklanır, D100) ve `kapsama.dogal_sinir_gerekcesi`
(hangi doğal unsura kadar genişletildiği, tek cümlede).

**🆕 BEŞİNCİ hat türü — `hat.tur:"karma"`:** C DOSYA YAZIM'ın Karlofça-
Una kaydı (Una nehri + Novi/Dubica/Kostajnica gibi garnizon kaleleri
AYNI antlaşma maddesinde) şemayı bir kez daha kırdı: tek bir kayıt hem
ÇİZGİ (nehir) hem NOKTA LİSTESİ taşıyabiliyor. `hat.tur:"karma"` alanı
`cizgi_segmenti` (§8.2 formatı) VE `nokta_atamalari` (§9.3③ formatı)
alanlarını BİRLİKTE taşır. Bu türün `kapsama` hesaplama yöntemi
(segment-bbox + nokta-tamponu nasıl birleşir) **TASARLANMADI** — D107.

**🆕 `gereken_cografya.tur` dördüncü değer alıyor: `"bolge"`** — bazı
antlaşma maddeleri (Karlofça'nın "Korent kıyısı" gibi) ne nokta ne çizgi,
bir KIYI ŞERİDİ/BÖLGE tarif eder. Bu bir şema-tamlığı kararıdır (Emre'nin
substantif kararlarından ayrı), C DOSYA YAZIM tarafından verildi.

---

## 9. 🔴🔴 EMRE'NİN TANIM DÜZELTMESİ (M-3463) — ŞEMA GÖZDEN GEÇİRİLDİ

> **AYNEN:** *"C uygulanınca artık tavan, enklav düzeltme, koridor doldurma,
> boşluk kapatma, arazi bölüşme filan hiçbir şey kalmaz. Belgede ne varsa
> o çizilir. Belgede belirtilen nehir dağ yerleşim ne varsa haritaya
> konur ve sınır bunların arasından geçirilir."*

**Bu bölümün 1-8 arası HİÇBİR ölçümünü/pilotunu SİLMİYORUM** (D100:
izlenebilirlik doğrulanmışlıktan önce gelir) — aşağıda hangi bölüm
DURUYOR, hangisi SÜPÜRÜLDÜ, açıkça işaretliyorum.

### 9.1 NE ÇÜRÜDÜ

```
🔴 §4 ("İKİ AYRI KAYIT CİNSİ VAR") — ②NOKTA-ATAMASI'nın "C'ye hiç gerek
   yok, zaten A/B çözer" hükmü YANLIŞTI. Emre'nin tanımıyla nokta-ataması
   da C'dir: belge bir yeri sayıyorsa o yer haritaya KONUR (yoksa
   eklenir) ve komşularıyla ilişkisi C'nin kapsama/devralma alanı
   içinde çözülür — A/B'nin kendi sezgisine (Voronoi/emilme) BIRAKILMAZ.
🔴 §6.1 "① / ②" ayrımı (HAT vs NOKTA-ATAMASI, ikincisi "C'nin işi değil")
   AYNI SEBEPTEN çürüdü.
🔴 §7 DÜRÜST TAHMİN'in "110 antlaşmada C kesin gerekli: 1-2 vaka" sonucu
   ARTIK YANLIŞ TABANDAN ÖLÇÜLMÜŞTÜ — o ölçüm yalnız ①c'yi (yapay/cetvel
   hat) sayıyordu, ②'yi (nokta-ataması) HİÇ saymamıştı. GENİŞ ölçüt
   (%83, ENVANTER-C-0911) artık DAR ölçütten (%15) daha yakın bir taban
   olabilir — Emre'nin M-3463'teki kendi tahmini de bu yönde. KESİN
   SAYI BU OTURUMDA YENİDEN ÖLÇÜLMEDİ, yalnız YÖN değişikliği kayda
   geçiyor (D107: aranmadı ≠ ölçüldü).
```

### 9.2 NE DURUYOR (değişmedi)

```
🟢 §8.1 kayıt iskeleti (id/taraflar/f:/t:/hat/kapsama/kaynak/kaynak_ikincil)
🟢 §8.2 yerel (nearest-segment) cross-product — ①a/①b/①c çizgi hatlar için
🟢 §8.6 paralel/meridyen türü
🟢 §8.5 üç sınav tasarımı (D010, iki yön) — YENİ hat türleri için de
   AYNI mantıkla uygulanır, yalnız sınav senaryoları çoğalır
🟢 Kaynak kuralı (antlaşma metni birincil, M-3329) — DEĞİŞMEDİ
🟢 C'siz bölgelerin hiç etkilenmemesi — DEĞİŞMEDİ, hatta GÜÇLENDİ (9.3)
```

### 9.3 ŞEMAYA ÜÇ YENİ ZORUNLU/EK ALAN

```
① kapsama.sezgi_kapali: true   — 🆕 ZORUNLU alan. Kapsama alanı artık
   yalnız "hangi taraf hangi tarafta" testi için değil, "A/B'nin
   sezgisel mekanizmaları (B2 enklav birleştirme, B3 koridor kırpma,
   boşluk paylaştırma, çöl tavanı, A1 yarıçap tavanı, §2 emilme kuralı)
   bu kutunun içinde KAPALI" beyanıdır. Motor entegrasyon noktası
   (§8.3) bu alanı görünce yalnız sahiplik atamasını değil, o adımlardan
   HİÇBİRİNİ bu bölgede ÇALIŞTIRMAMALI — bu §8.3'ün betimlediği "kenar
   yeniden atama" işleminden DAHA GENİŞ bir müdahale, motor
   entegrasyonunun kendisi YENİDEN gözden geçirilmeli (§9.4).

② gereken_cografya: [...]         — 🆕 ZORUNLU alan. Belgenin andığı
   HER nehir/dağ/yerleşim, adı+atlasta var mı damgasıyla burada listelenir:
   { ad, tur:"nehir"|"dag"|"yerlesim", atlasta_var: true|false,
     atlasta_kaynak: "data/yerlesimler.js:NNN" | null,
     not: "..." }
   `atlasta_var:false` bir MAZERET değil, C'nin kendi iş kalemidir
   (Emre'nin cümlesi) — bu envanterin KENDİSİ, hangi yeni noktaların
   ekleneceğinin (§2 işi, ayrı oturum) SİPARİŞ LİSTESİDİR.

③ hat.tur: "nokta-kumesi"          — 🆕 DÖRDÜNCÜ hat türü (cetvel/
   dogal-tanimsiz/paralel'den SONRA). Belge bir ÇİZGİ değil bir NOKTA
   LİSTESİ veriyorsa (Karlofça'nın Bosna kale listesi gibi): `hat.nokta_dizisi`
   YOK, bunun yerine `nokta_atamalari: [{ad, lat, lon, taraf, kaynak}, ...]`
   — HER nokta DOĞRUDAN bir tarafa atanır, cross-product/segment testi
   GEREKMEZ (bu, §8.6'nın "paralel" türünden bile ucuz — sıfır geometri,
   yalnız liste).
```

### 9.4 🔴 §8.3'ÜN MOTOR ENTEGRASYON NOKTASI YENİDEN GÖZDEN GEÇİRİLMELİ

§8.3, C'yi yalnız "dönem döngüsünde sahiplik yeniden ata" olarak
tarif ediyordu (satır ~4842-4856). Emre'nin tanımıyla C, kapsama
alanı içindeki **B2/B3/boşluk/çöl-tavanı/A1/§2-emilme** adımlarının
TAMAMINI atlamalı — bu adımların HER BİRİ `uret_petek.py`de FARKLI
satırlarda (§2.4'te anılan yaslama SIRT_HAT/NEHIR_HAT ayrı, B2/B3
fonksiyonları `_b2_enklav_birlestir`/`_b3_koridor_kirp` satır 1512/1614
ayrı, çöl tavanı satır 2662 ayrı, A1 tavanı "Kıyı kesimi... A1 YARIÇAP
TAVANI" satır 1898 ayrı). ⇒ **§8.3'ün verdiği TEK giriş noktası ARTIK
YETERSİZ — C'nin gerçek entegrasyonu, kapsama alanı içindeki HER
sezgisel adımı ayrı ayrı BY-PASS eden ÇOK NOKTALI bir müdahale
gerektiriyor.** Bu, bu oturumun (şema/dosya yazımı, `arac/` donuk)
kapsamının AÇIKÇA ÖTESİNE geçiyor — bir uygulama oturumunun bu 5-6
fonksiyonun HER BİRİNE "eğer kapsama_alani_icindeyse atla" kontrolü
eklemesi gerekecek. D107: **konum listesi verildi, tam entegrasyon
TASARLANMADI.**

---

## 11. 🆕 C KAYIT ÜRETİMİ (aynı gün) — `hassasiyet:` alanı + 10 kayıt

**Zemin:** `denetim/BULGU-BELGE-HASSASIYETI-0911.md` (kardeş oturum) üç
düzey ölçtü — ①ÇİZGİ (belge geometri veriyor) · ②YER (belge yer listesi
veriyor, aradaki çizgiyi VERMİYOR) · ③BÖLGE (ne çizgi ne yer, yalnız isim).
Bu üçü, `TASLAK-hukuki_sinirlar.js`'teki HER kayda `hassasiyet:
"cizgi"|"yer"|"bolge"` alanı olarak eklendi — **kardeş oturumun (KASR-I
ŞİRİN ZİNCİRİ) bulduğu riski önlemek için**: aynı hat için ardışık
kayıtlar farklı hassasiyette olabilir, damgalanmazsa okuyan ikisini eşit
sanır (`§4`'ün "sahte kesinlik" kusurunun C yüzü).

**🆕 DÖRDÜNCÜ değer gerekti: `"karma"`** — Karlofça'nın Una/Bosna maddesi
AYNI ANDA ①ÇİZGİ (Una nehri) VE ②YER (garnizon kaleleri) taşıyor;
üç-değerli şema bunu ifade edemedi, D107 gereği açıkça dördüncü bir
değer eklendi. Aynı desen `karlofca-venedik-1699`de de (esas "yer" ama
"Korent kıyısı" alt-öğesi ③BÖLGE seviyesinde) İÇTEN görülüyor — bu kayıt
saf `"yer"` bırakıldı ama karışıklığı AÇIKÇA bir yorumla işaretlendi.

**Toplam durum:** 10 kayıt — 6 `cizgi` (Midye-Enez, Mısır-Sudan/22.paralel,
Karlofça-Sava, Karlofça-Banat, Erzurum-II/Şattülarap, Bahçesaray-Özü),
3 `yer` (Karlofça-kaleler/Lehistan/Venedik), 1 `karma` (Karlofça-Una).
**Bahçesaray-Özü koordinat/kapsama kutusu TAMAMEN eksik bırakıldı**
(`ONEMLI_EKSIK` alanıyla işaretli); Erzurum-Şattülarap'ın nehir uçları
`dogrulanmadi:true` ama Muhammere/Basra/kapsama kutusu GERÇEK koordinat
taşıyor — ikisi FARKLI eksiklik derecesinde, ayrı ayrı damgalandı.

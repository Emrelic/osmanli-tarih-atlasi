# ÇAPRAZ GÜNEY — bulgular

> **Kapsam:** KUZEY AFRİKA — Mağrib · Tunus · Trablusgarp · ocaklıklar · 1830-1911
> sömürge dalgası. Koordinatör 1 Ağustos'ta onayladı ve `CAPRAZ-GOREV §1`'e satır
> ekledi. **Kesit sınırı coğrafyadır, kimlik değil.**
>
> ⛔ **Bana ait OLMAYAN, kasten dokunulmayanlar:** Mısır · Sudan · Kızıldeniz ·
> Hicaz (`ARAŞTIRMA ARAP AFRİKA`) · Suriye-Lübnan (`ÇAPRAZ AKDENİZ` A-4) ·
> Dubrovnik (`ÇAPRAZ BATI`) · Malta (ölçülmedi, istenirse alınır) · `fransa`
> devletinin kendisi (`ÇAPRAZ DOĞU`). Kuzey Afrika'daki `fransa` **pencereleri**
> bende, `fransa` **kaydı** değil.
>
> **Yetki:** yalnız bu dosya ve `-ILERLEME.md`. Veriye, `arac/`'a, kök defterlere
> yazılmadı. Öneriler koordinatör üzerinden `YAMACI` · `VERİ DEVLET` · `VERİ
> KİMLİK`'e gider.
>
> **Ölçüm tabanı:** `arac/girdi.py yukle()` → **976 nokta** · dizin
> `data/devletler.js` → **242 kayıt** · kesit kutusu **lon −18…26 / lat 18…38**
> → **151 nokta**. Ölçüm commit'i `-ILERLEME.md §1`'de (`ORGANIZASYON §14`).

---

## 🟢 ÖNCE İYİ HABER — ocaklık katmanı DOLU, ve bu nadir

Bugün üç ayrı oturum *"dizinde kayıt var, haritada kullanım 0"* vakası bildirdi
(DENETÇİ `kasitli_bosluk` · BATI Macaristan · AKDENİZ `cezayir-fransiz`).
Ocaklıklarda **tersi** çıktı — `v:` pencereleri yazılmış ve işliyor:

```
Cezayir Ocaklığı (dayı idaresi)                    33 pencere
Tunus Ocaklığı (Hüseynîler)                        27
Trablusgarp Ocaklığı (Karamanlılar)                26
Ahmed Bey'in Konstantin beyliği (± "Osmanlı adına") 14
Osmanlı hükümranlık iddiası (ocaklık lağvedildi)   10
Sahra vahalarının özerk idaresi                     3
```
📌 Ve ayrım **gerçekten inceltilmiş**: Konstantin 1830-1837 ayrı, Sahra vahaları
1852-1854'e kadar ayrı, Oran'ın 1708-1732 ve 1792-1831 İspanyol araları ayrı
pencerelerde. **Bu kesit "hiç modellenmemiş" değil; kusurları bunun ÜSTÜNDE.**

---

## 🔴 G-1 · KESİTİN EN BÜYÜK RAKAMI — `fransa`, 8.051 yıl-nokta / 64 nokta

**Yeni bir sınıf değil; AKDENİZ'in A-2'sinin Kuzey Afrika'daki BÜYÜKLÜĞÜ.**
Onlar sınıfı kurdu (*"`fransa` bir TORBA, dizin kaydı 1792'de ölüyor"*), ben
kesitimde ölçtüm.

### ① BİZDE NE VAR
```
dizin  fransa  "Fransa Krallığı"   987-01-01 → 1792-09-21
kesit  s:"fransa"   64 pencere / 64 nokta,  hepsi t: 1923-10-29
       tekil fazlalık  131,1 yıl × 64 nokta  =  8.051,2 yıl-nokta
```
### ② KAYNAKTA NE VAR
Kaynak turu **yapılmadı** — çünkü bu bir kaynak sorusu değil. Cezayir 1830,
Tunus 1881, Fizan/Trablusgarp'ta İtalya 1912 tarihleri kesitte **zaten doğru**;
yanlış olan yalnız **o günden sonraki kimliğin adı.**

### ③ HÜKÜM — **ÇELİŞİYOR** (tanım ekseninde), 64 pencere.
⚠️ **Ve düzeltmesi bende değil:** `fransa` kaydının yeniden tanımlanması
(987→1923+ ülke mi, rejimler ayrı kimlik mi) **ÇAPRAZ DOĞU + koordinatör** kararı.
📌 Kesitimin katkısı: **AKDENİZ'in 131,1 yıllık "en uzun tekil fazlalık"ı tek
nokta değil, 64 noktada birden.** Sömürge katmanının tamamı bu tek karara asılı.
🟢 Ve doğru kimlik dizinde **hazır bekliyor**: `cezayir-fransiz` "Fransız Cezayir
İşgali" `1830-07-05 → 1923-10-29` — **`harita:` alanı boş, kullanım 0.**
(AKDENİZ de aynı kaydı gördü; ben **kaç noktayı** kurtaracağını ölçtüm: Cezayir
kesitinde 40 nokta.)

---

## 🔴 G-2 · FAS — 642 YILLIK TEK PENCERE, ve doğru kimlik dizinde duruyor

Kesitin **yapısal olarak en bozuk** kalemi ve `iran` torbasının Mağrib'deki eşi.

### ① BİZDE NE VAR — ölçüldü
```
Fas (Fez) · Merakeş · Rabat · Agadir
   s: [ { f:"1281-01-01", t:"1923-10-29", d:"fas" } ]      ← TEK PENCERE, 642 yıl
Tanca
   s: [ 1281→1471 fas · 1471-08-28→1661-01-23 portekiz ·
        1661-01-23→1684-02-05 ingiltere · 1684→1923 fas ]  ← ZENGİN
```
```
dizin  fas     "Fas (Sâdî / Alevî Şerifleri)"      1549-01-01 → 1923-10-29
       merini  "Merînî ve Vattâsî Fas Krallığı"    1196-01-01 → 1549-01-01
                                     harita: YOK  ·  kullanım: 0
⇒ erken fazlalık  268,0 yıl × 5 nokta  =  1.340,0 yıl-nokta
```

### ② KAYNAKTA NE VAR — TDV `meriniler` (`<title>` sınandı: **CANLI**,
"MERÎNÎLER - TDV İslâm Ansiklopedisi")
> Merînîler **"1196-1465"** — *"Berberî hanedanı… Mağrib'de iki buçuk asra yakın
> hüküm sürmüştür."*
> Vattâsîler: *"…iktidarı ondan aldı ve Vattâsîler bölgede hâkim oldu
> **(876/1471-72)**."* Merînî sonu: **869/1465**, son sultanın halk ayaklanmasıyla
> ortadan kaldırılması.

⇒ **Dizin kaydı TDV ile uyuyor** (1196→1549, Merînî+Vattâsî birleşik). Yanlış
olan dizin değil, **haritanın o kaydı hiç kullanmaması.**

### ③ HÜKÜM — **ÇELİŞİYOR.** 1281-1549 arası Fas, haritada var olmayan bir
hanedanla boyanıyor.

### 🔴 VE BU, `§80.1`'İN TEK SORGUSUNUN **GÖREMEDİĞİ** VAKA — ders önerisi

`OGRENILENLER §80.1` bugün 16:29'da yazıldı: *"`s:` penceresi `1923-10-29`'a
uzanan her kimlik, dizindeki ömrüyle karşılaştırıldı… tek sorgu yeter."*
**Fas o sorgudan TEMİZ geçer:**
```
Fas (Fez)   harita  1281-01-01 → 1923-10-29
            dizin   1549-01-01 → 1923-10-29
            ufuk ucu:  1923-10-29 = 1923-10-29   ✓ TAM UYUYOR
            başlangıç: 1281      ↔ 1549          ✗ 268 YIL — sorgu BURAYA BAKMIYOR
```
⇒ `§80.1` **tek yönlüdür**: yalnız `t:` ucunu sorar. Fas, Sevilla ve `merini`
sınıfının tamamı `f:` ucunda saklı.
📌 Ve bu, `CAPRAZ-GOREV §4 ⑥`'nın (`OGRENILENLER §68` — *"bir ölçüm TEK YÖNDE
sorulursa ters yöndeki kusuru göremez"*) **kuralın kendisine uygulanmış hâli.**
🟢 **Ben taramamı baştan iki yönlü kurdum** (`-ILERLEME §2`) ve GEÇ sınıfı 4
kimlik, ERKEN sınıfı **4 ayrı kimlik** verdi — kesişim yok. Yani tek yön,
kesitimdeki kusurların **yarısını** hiç görmezdi.
⇒ **Öneri: dördüncü değişmez iki ucu birden ölçsün.** `§80.1` şu an *"dizinde
karşılığı yok"* diyor; eklenmesi gereken *"dizinde karşılığı var ama BAŞKA
tarihlerde."*

🟢 **Ve bu, `iran`'dan UCUZ bir iştir:** ÇAPRAZ DOĞU'da üç kimlik (`afsar`,
`zend`, `kacar`) **hiç yoktu**; burada kimlik **var**, yalnız iki alan eksik:
```
merini kaydına  harita:"merini"   +   renkler.py'de bir renk
5 noktada tek kırılma: 1549-01-01  (dizinin kendi devir tarihi)
```
⚠️ **Ama `1549-01-01` yıl hassasiyetli bir yer tutucudur** (`§76`) ve
TDV `meriniler` maddesi Sa'dî geçişini **vermiyor** — maddenin anlatısı
1471-72'de bitiyor. **Günü kaynaklamadan yazılmasın**; `fas` ve `sadiler`
maddeleri ayrı bir turda okunmalı.
📌 Ve `1465-1471` arası (Merînî bitti, Vattâsî henüz değil) dizinin tek kaydında
**gizli** — TDV ikisini ayırıyor, dizin birleştiriyor. Çelişki değil, **çözünürlük
farkı**; kaydediyorum.

---

## 🔴 G-3 · CEZAYİR 1830 — pencerenin bitişi ÜÇÜNCÜ BİR SORUNUN cevabı

Koordinatörün bana verdiği ilk iş buydu: *"Cezayir'de Osmanlı hükümranlığı
gerçekten sürdü mü, yoksa 1830 bir devir miydi?"* Kaynaklandı, ve cevap
**ikisinden hiçbiri değil.**

### ① BİZDE NE VAR — ölçüldü
```
10 nokta  (Dellîs · Tenes · Şelif · Mustagānim · Muaskar · Sîdî Bel Abbès ·
           Ayn Temûşent · Nedrûme · Mesîle · Bû Sa'âde)

   v: { f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası
                                            (ocaklık lağvedildi)" }
   s: { f:"1832-11-22", t:"…",           d:"abdulkadir" }

   871 gün = 2,38 yıl × 10 nokta = 23,8 yıl-nokta,  Osmanlı TÂBİ rengiyle boyalı
```
⚠️ Kesitteki `isg:` pencere sayısı: **1** (tek `ingiltere` kaydı). Yani
Cezayir'in tamamı `d:`/`v:`/`s:` ekseninde, de facto/de jure ayrımı **yok.**

### ② KAYNAKTA NE VAR — TDV `cezayir` (`<title>` sınandı: **CANLI**,
"CEZAYİR - TDV İslâm Ansiklopedisi")
```
"5 Temmuz 1830 günü Cezayir şehrini işgal ettiler"          → de facto son
"1847'de Fransız işgalini tanıyarak Cezayir üzerindeki
 haklarının sona erdiğini ilân etti"                        → de JURE son
Konstantin: "13 Ekim 1837"                                  ✓ bizde AYNEN var
Abdülkādir teslim: "23 Aralık 1847"                         ✓ bizde AYNEN var
batı/iç kesim (Tilimsân · Muasker · Saîde…)  1839-1847 arası, ayrı ayrı
```

### ③ HÜKÜM — **ÇELİŞİYOR**, ve çelişkinin cinsi `§74`:

```
1830-07-05   Osmanlı FİİLÎ hâkimiyetinin sonu    (dayı teslim, ocaklık lağvedildi)
1847         Osmanlı HUKUKÎ hakkının sonu        (TDV: "haklarının sona erdiğini ilân etti")
1832-11-22   ← VERİDEKİ TARİH.  İKİSİ DE DEĞİL.
```
🔴 **1832-11-22, Abdülkādir'in sultan ilan edildiği gündür — yani pencerenin
bitişi, ÖNCEKİ sahibin çıkışını değil SONRAKİ sahibin girişini anlatıyor.**

📌 Ve mekanizması bilinen bir mekanizma — `OGRENILENLER §72`: *"`Değişmez 1`
'kimsenin değildi' cevabını ifade edemiyor, o yüzden veriyi en yakın komşuya
itiyor."* Burada **geriye doğru itti**: 1830-1832 arası sahipsiz kalacaktı,
boşluk **Osmanlı'ya** doldurularak kapandı.
⇒ Bu, `CLAUDE.md §3.5.1`'in kendi sınıfıdır: **"Osmanlı fazla mı görünüyor?"** —
ve cevabı bu kesitte **evet, 23,8 yıl-nokta.**

### ❓ AMA ÇÖZMÜYORUM — çünkü hangi eksende yanlış olduğu bir ŞEMA kararı
```
okuma A (de facto):  v: kalksın → 1830-07-05'ten 1832-11-22'ye kadar SAHİPSİZ
                     ⚠️ 10 noktada 871 günlük sahipsiz pencere açar
                     ⚠️⚠️ AMA "sahipsiz 34 → 44" DEMİYORUM — ölçmedim, ve
                        muhtemelen YANLIŞ olurdu: §3'ün tarayıcısı 20 yılda bir
                        (1820, 1840…) örnekliyor, 871 günlük bir pencereye
                        HİÇ DENK GELMEYEBİLİR. ⇒ Sayaç değişmeden delik açılır.
                        📌 Bu, kusurun kendisinden ayrı bir bulgudur.
okuma B (de jure):   v: 1847'ye UZASIN
                     ⚠️ o zaman abdulkadir pencereleriyle çakışır (10 noktada)
okuma C (ikisi ayrı): d:/v: de jure  +  isg: de facto — Mısır 1882-1914 deseni
                     ⚠️ ve `isg:` YAZILIYOR AMA ÇİZİLMİYOR (koordinatör bildirdi:
                        MOTOR yedi aralığın üçünü üretiyor) ⇒ yazılsa da görünmez
```
⇒ **Karar koordinatörde.** `CAPRAZ-GOREV §8`: çelişki çözülmeden kaydedilir.
📌 Ve ben C'yi *öneriyorum ama savunmuyorum*: ÇAPRAZ BATI bugün 134 sandviç ölçüp
`isg:` genişletmesinin **mekanik ölçütle** yapılamayacağını gösterdi. Bu 10 nokta
tek tek kaynak ister; TDV `cezayir` batı kesimi için **1839-1847 arası ayrı ayrı
tarihler** veriyor ve ben onları **çekmedim.**

---

## 🟡 G-4 · "AHMED BEY'İN KONSTANTİN BEYLİĞİ" — aynı beylik, İKİ AD

Küçük ama kesin, ve etiket kullanıcıya görünüyor.
```
"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"   5 nokta
   Konstantin · Annaba · Bicâye · Setif · Biskra
"Ahmed Bey'in Konstantin beyliği"                   9 nokta
   Cicel · Kolo · Sikikde · Mîle · Kalme · Sûk Ahrâs · Tebesse · Batna · Berc Bû Areric
```
**Hepsi `f:"1830-07-05"`.** Aynı gün, aynı beylik, aynı olay — **iki farklı `k:`
dizgesi.**

### ③ HÜKÜM — **ÇELİŞİYOR** (iç tutarlılık). Hangisinin doğru olduğu bir kaynak
sorusu değil, **bir seçim**; ama ikisinin birden durması seçim değil, kusurdur.
📌 Ve bu, AKDENİZ'in B-2 / `OGRENILENLER §80`'inin **kardeşi**: orada bir olay
noktalarının hepsine yazılmıyordu; burada **hepsine yazılıyor ama aynı sözcüklerle
değil.** Üç değişmez de kör, çünkü `k:` bir dizgedir, denetlenmiyor.

---

## 🟡 G-5 · FİZAN — AKDENİZ'in B-4'ü devralındı ve **doğrulandı**

AKDENİZ *"Kuzey Afrika turumda kaynaklanacak"* demişti; o tur bende.
```
dizin  hafsi  1229-01-01 → 1574-09-13
harita Murzuk (Fizan) · Gât · Sokna · Câlû · Sebha · Ubârî
       s:"hafsi"  1281-01-01 → 1577-01-01
       841 gün = 2,30 yıl × 6 nokta = 13,8 yıl-nokta
```
🟢 **Bağımsız ölçümüm AKDENİZ'in rakamıyla birebir aynı çıktı** (2,3 yıl × 6).
**HÜKÜM — ÇELİŞİYOR**, ama `1577-01-01` yıl hassasiyetli bir yer tutucudur ve
`§76` gereği **gerçek gün bulunmadan 1574'e çekilmesini önermiyorum.** AKDENİZ'in
hükmü aynen ayakta.

🔴 **Ama bir katman daha var ve o AKDENİZ'de yoktu:** Fizan'ın 1281-1577 arası
**Hafsî olması** ayrıca sorgulanmalı. Kayıt Fizan'ı 296 yıl boyunca Tunus'a
bağlıyor; Fizan'ın kendi hanedanı (Evlâd-ı Muhammed) `devletler.js`'in 242
kaydında **yok.** ⚠️ Koordinatör bugün *"Fizan çengeli … hataydı, kaldırdım"*
diye ayrı bir kalem kapattı — **aynı şey mi, başka şey mi ÖLÇMEDİM.** Kaynak
turu gerekiyor (`fizan` slug'ı `CLAUDE.md §4`'te **CANLI** kayıtlı).

---

## ⚪ G-6 · KESİT KENARI — benim olmayan iki kalem, kaydedip bırakıyorum

**① SEVİLLA — 198,0 yıl.** Kutumun kuzeybatı köşesine düşüyor ama **İber
yarımadasıdır, Kuzey Afrika değil.**
```
harita  Sevilla  s: 1281-01-01 → 1923-10-29  d:"ispanya"   ← TEK PENCERE, 642 yıl
dizin   ispanya   "İspanya (Kastilya-Aragon)"  1479-01-20 →
        kastilya  "Kastilya Tacı"  1230-09-23 → 1479-01-20   harita: YOK · kullanım 0
```
📌 **G-2'nin birebir aynısı** ve **AKDENİZ'in B-3 Aragon notunun eşi** — orada da
*"o dönem ada Aragon'undur, dizinde Aragon kaydı yok"* denmişti. **Burada kayıt
VAR** (`aragon` 1164→1479 ve `kastilya` 1230→1479, ikisi de `harita:` boş).
⇒ Yani `aragon`/`kastilya` **kimlik isteği değil, `harita:` + renk isteği.**
AKDENİZ'in B-3'üne bu düzeltme gitmeli. **Ben yazmıyorum, ölçümü veriyorum.**

**② NAPOLİ ufuk kenarı — ÇELİŞKİ SAYMIYORUM.** Malta · Pantelerya · Sirakuza ·
Zaklise, `napoli` dizin `f=1282-01-01` iken haritada `1281-01-01`'den başlıyor:
**1,0 yıl × 4.** `1281-01-01` atlasın ufkudur; bu bir ölçüm artefaktıdır, kusur
değil. (AKDENİZ'in v2 taraması da ufuk kenarını muaf tutuyor — aynı kararı
veriyorum.) `italya` 1861-02-13 ↔ 1861-03-17 farkı da onların **B-5**'inde
**zaten kayıtlı**, tekrar açmıyorum.

---

## Sıradaki (aksi söylenmezse)

1. **Cezayir batı kesimi gün gün** — TDV `cezayir`'in verdiği 1839-1847 tarihleri
   (Tilimsân · Muasker · Saîde · Medye · Milyâne · Şerşâl) noktalarımıza
   oturtulacak. G-3'ün kararını bekliyor ama **kaynaklaması karardan bağımsız.**
2. **Tunus 1705 ve Trablusgarp 1711/1835** — ocaklık pencereleri kaynaklanmadı;
   `BALKAN`'ın statü listesi bu üç tarihi veriyordu, TDV'den doğrulanacak.
3. **Fizan'ın kendi hanedanı** (Evlâd-ı Muhammed) — G-5'in ikinci katmanı.
4. **1830-1911 sömürge dalgasının İtalya ucu** — Trablusgarp 1911-10-05
   (dizin `trablusgarp-ocagi` t:) ↔ Murzuk `s:italya f:1912-10-18`; **379 gün**,
   Uşi Antlaşması mı işgal mi — `§74` adayı, ölçtüm, **çözmedim.**

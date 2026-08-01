# ÇAPRAZ KUZEY — Rusya + Lehistan çapraz doğrulaması

> Görev tanımı: `oturumlar/CAPRAZ-GOREV.md §7`.
> Yazma yetkim: yalnız bu dosya + `CAPRAZ-KUZEY-ILERLEME.md`. **Veriye yazmadım.**
> Çıktı biçimi §8: ① bizde ne var · ② kaynakta ne var · ③ hüküm.
> Ölçüm tabanı: **CANLI dosyalar** = `yerlesimler.js` + `yerlesimler_afrika.js`
> (`arac/girdi.py` `GIRDI_DOSYALARI`'ndan doğrulandı), 975 nokta.
> ⚠️ `yerlesimler_avrupa.js` merge dışı — Uppsala/Kalmar/Turku gibi noktalar
> **canlı değil**; ilk ölçümümde yanlışlıkla saymıştım, düzeltildi.

---

## 0. TUR ÖZETİ

| # | bulgu | hüküm |
|---|---|---|
| **B1** | Kiev ve Poltava geçişleri **iki ayrı takvimde** yazılmış | 🔴 çelişiyor |
| **B2** | Azak 1696 için üç ayrı tarih dolaşıyor (bizde · Jülyen · TDV) | 🔴 çelişiyor |
| **B3** | Zaporojye Hetmanlığı **hiç boyanmıyor** (0 pencere), Çehrin 1648-1678 `lehistan` | 🔴 çelişiyor |
| **B4** | 6 nokta `altinorda` → `rusya` diye **1556'da** geçiyor; üçü o tarihte **kurulmamıştı** | 🔴 çelişiyor |
| **B5** | `altinorda`nın bitişi 5 noktada 1441, bir noktada 1502 — bugünkü düzeltme **yarım kaldı** | 🟡 tutarsız |
| **B6** | 1569 Ejderhan seferi — **ilk Osmanlı-Rus savaşı** — 1009 maddelik kronolojide yok | 🔴 eksik |
| **B7** | Zuravno Antlaşması (1676) kronolojide yok; Kamaniçe'nin hukukî devri boşlukta | 🟡 eksik |
| **B8** | Kamaniçe 1672-08-27 ve Bucaş 1672-10-18 — TDV ile **gün gün tutuyor** | 🟢 uyuyor |
| **B9** | `lehistan` slug'ı çapraz gönderme kabuğu; gerçek madde `polonya` | 📌 adres düzeltmesi |

---

## 1. 🔴 B1 — AYNI KÜMEDE İKİ TAKVİM (görev tanımı §2'nin canlı vakası)

### ① Bizde ne var
`data/yerlesimler.js`, iki komşu nokta, aynı savaşın iki antlaşması:

```
Poltava   s:"lehistan" → s:"rusya"   1654-01-18
Kiev      s:"lehistan" → s:"rusya"   1667-01-30
```

### ② Kaynakta ne var
| olay | Jülyen (O.S.) | Gregoryen (N.S.) | kaynak |
|---|---|---|---|
| Andrusova Mütarekesi | **30 Ocak 1667** | **9 Şubat 1667** | çift gösterimli künye: *"signed on 9 February [O.S. 30 January] 1667"* |
| Pereyaslav Radası | 8 Ocak 1654 | **18 Ocak 1654** | *"The Pereiaslav Council of Ukrainians took place on January 18"* |

TDV `ukrayna` ikisini de yıl düzeyinde doğruluyor: *"1654 Pereyaslav"*, *"1667 Andrusova"*.

### ③ HÜKÜM — **ÇELİŞİYOR**, ve çelişki bizim içimizde
- **Poltava 1654-01-18 = Gregoryen** (dönüştürülmüş, doğru)
- **Kiev 1667-01-30 = Jülyen** (ham, dönüştürülmemiş)

Aynı savaşın iki antlaşması, aynı dosyada, **iki ayrı takvimle** yazılmış. Projenin
bütün harita tarihleri Gregoryen olduğuna göre Kiev **10 gün erken** duruyor.

> **Öneri (VERİ oturumuna):** `Kiev` kaydında `s:"lehistan"` bitişi ve `s:"rusya"`
> başlangıcı `1667-01-30` → **`1667-02-09`**.
> ⚠️ Bu bir `s:` → `s:` geçişi, yani **Değişmez 2 kırılma saymıyor** — madde
> gerekmez, denetim de bu hatayı hiç görmez. Kural ⑥'nın birebir örneği.

📌 **Ve asıl mesele tek kayıt değil:** bu, Rus tarafından gelen **her** tarihin
hangi takvimde alındığının kayıtlı olmadığını gösteriyor. Görev tanımı §2 bunu
veri gelmeden önce öngörmüştü; ilk turda canlı vakası çıktı.

---

## 2. 🔴 B2 — AZAK 1696: TEK OLAY, ÜÇ TARİH

### ① Bizde ne var
```
yerlesimler.js   Azak  s:"rusya"  1696-07-19 → 1711-07-21
olaylar          1696-07-19  "Azak Kalesi'nin kaybı"
```

### ② Kaynakta ne var
TDV **`azak`** (`<title>` doğrulandı: "AZAK - TDV İslâm Ansiklopedisi"):
> **6 Ağustos 1696 (1108)** — I. Petro 31.000 asker ve 170 topla Azak'ı aldı.
> 1695'teki ilk kuşatma 95 gün sürmüş ve başarısız olmuştu.

Rus tarih yazımının verdiği gün: **19 Temmuz 1696 Jülyen** = 29 Temmuz Gregoryen.

### ③ HÜKÜM — **ÇELİŞİYOR**, ve deseni B1 ile aynı
```
bizim kaydımız      1696-07-19   ← Rus Jülyen günü, ham
Gregoryen karşılığı 1696-07-29
TDV                 1696-08-06   ← hicrî 1108'den dönüşmüş olması muhtemel
```
Üç tarih, en geniş açıklık **18 gün**.

⚠️ **Çözmedim, kaydediyorum** (§8'in son notu). Sebebi: bu tek bir hata değil,
muhtemelen bir **dönüştürme zinciri farkı** (hicrî → milâdî vs Jülyen → Gregoryen)
ve ancak birkaç vaka birikince hangi ucun kaydığı görülür. Şu an elimde iki vaka
var (B1, B2); üçüncüsü gelince desen kararlaşır.

📌 Aynı kayıtta **ikinci** bir soru daha var: TDV `azak`, *"1739 Belgrad
Antlaşması Azak'ı temelli Rusya'ya bıraktı (istihkâmların yıkılması şartıyla)"*
diyor. Bizim veri Azak'ı **1774-07-21**'de (Küçük Kaynarca) Rusya'ya veriyor,
kronolojimiz ise 1739 için *"Azak'ın tarafsızlaştırılması"* diyor. **Bizim ayrımımız
TDV'nin özetinden daha ince ve büyük ihtimalle daha doğru** — ama fark kayda geçsin.

---

## 3. 🔴 B3 — ZAPOROJYE HETMANLIĞI HARİTADA HİÇ YOK

### ① Bizde ne var
```
data/devletler.js   zaporojye  "Zaporojye Kazak Hetmanlığı"  1552-01-01 → 1775-06-16
CANLI yerleşimde    s:"zaporojye"   0 pencere / 0 nokta
```
Hetmanlığın **başkenti** olan nokta ise şöyle yazılmış:
```
Çehrin (Çigirin)   s:"lehistan"  1281-01-01 → 1678-07-19
Poltava            s:"lehistan"  1362-01-01 → 1654-01-18
```

### ② Kaynakta ne var
TDV **`ukrayna`** (`<title>` doğrulandı):
> 1648'de Bogdan Hmelnitski'nin Kazak ayaklanması Lehistan'ı yendi · 1654
> Pereyaslav ile Moskova'ya bağlandı · 1667 Andrusova Ukrayna'yı böldü ·
> *"Özü nehrinin batısı (Sağ Yaka Ukraynası) Lehistan'ın, doğusu (Sol Yaka
> Ukraynası) Kiyef dahil olmak üzere Rusya'nın hâkimiyetine girdi; güneyi ise
> Türk hâkimiyeti altındaydı."*

### ③ HÜKÜM — **ÇELİŞİYOR**
Haritamız 1648-1654 arasını **Lehistan** boyuyor. O yıllarda Lehistan orada
fiilen yoktu: Hmelnitski ayaklanması Lehistan ordusunu yenmiş, bölge Kazak
Hetmanlığı yönetimindeydi. Yani **kaybeden tarafın kendi kaydı** ile bizim
haritamız 6 yıl boyunca zıt şey söylüyor — çapraz doğrulamanın aradığı sınıf tam bu.

Dahası: Çehrin 1678-07-19'da Osmanlı'ya geçiyor (kronolojide *"Çehrin Kalesi'nin
fethi"* maddesi **var**, doğru) ama **kimden** alındığı haritada Lehistan
görünüyor — oysa Çehrin, Doroşenko'nun hetmanlık merkeziydi ve TDV'ye göre
Doroşenko 1672'den sonra Osmanlı hâkimiyetini kabul etmişti.

> **Öneri (VERİ oturumuna) — en az iki kayıt:**
> ```
> Çehrin (Çigirin)   s:"lehistan" 1281-01-01 → 1648-XX-XX
>                    s:"zaporojye" 1648-XX-XX → 1678-07-19
> Poltava            s:"lehistan" 1362-01-01 → 1648-XX-XX
>                    s:"zaporojye" 1648-XX-XX → 1654-01-18
> ```
> ⚠️ **1648'in günü henüz doğrulanmadı.** TDV yalnız yılı veriyor. Kural ⑤
> gereği gün uydurmam; `1648-01-01` yazılır ya da Ukrayna/Leh kaynağından gün
> alınır. Bir sonraki turda arayacağım.
>
> ⚠️ **Renk uyarısı:** `zaporojye` `devletler.js`'te var ama `renkler.py`'de
> **rengi yok** (Oturum 16 E.4 ölçümü). Renk atanmadan yazılırsa bölge
> **boyanmaz** — öneri renk talebiyle birlikte gitmeli (VERİ KİMLİK).

---

## 4. 🔴 B4 — ALTI NOKTA 1556'DA RUS OLUYOR, ÜÇÜ O TARİHTE YOK

### ① Bizde ne var
Altı nokta aynı gün, aynı desenle geçiyor:
```
Terek deltası (Kızlar)   altinorda 1281-01-01 → 1556-01-01 → rusya 1923-10-29
Astrahan                 aynı
Saratov                  aynı
Tsaritsyn                aynı
Kalmuk bozkırı           aynı
Ural eteği               aynı
```

### ② Kaynakta ne var
TDV **`astarhan-hanligi`** (`<title>` doğrulandı; ⚠️ `ejderhan` slug'ı **ÖLÜ**):
> Hanlık **1466-1556** arasında hüküm sürdü. Ruslar, IV. İvan'ın **1552**'de
> Kazan Hanlığı'nı almasının ardından Astarhan'ı işgal etti.

Şehirlerin kuruluşu (akademik standart, TDV kapsamı dışı):
Tsaritsyn **1589** · Saratov **1590** · Terek kalesi **1567**'den sonra ·
Kalmuklar Aşağı Volga'ya **1630'larda** geldi.

### ③ HÜKÜM — **ÇELİŞİYOR**, iki ayrı kusur iç içe
1. **Astarhan Hanlığı haritada hiç yok.** `astarhan` kimliği `devletler.js`'te
   kayıtlı (1466-1556) ama **0 pencere** kullanıyor. Yani hanlığın **90 yılı**
   `altinorda` boyalı. Koordinatörün notu *"1502 sonrası 54 yıl"* diyordu;
   hanlığın kendi kuruluşundan sayınca **90 yıl**.
2. **Üç nokta kurulmadan Rus oluyor.** Saratov ve Tsaritsyn 1556'da yoktu;
   Kalmuk bozkırında 1556'da Kalmuk yoktu. Bu, kaydın *"1556'da Rusya buraya
   dayandı"* demesini sağlıyor — oysa Rus yerleşimi Volga'nın aşağısına
   **30-35 yıl sonra** indi.

> **Öneri:** ① `astarhan` penceresi açılsın (1466 → 1556, altı noktanın ilgili
> olanlarına). ② Saratov / Tsaritsyn / Kalmuk bozkırı için `kur:` alanı ve
> gerçek tarih. ⚠️ `astarhan` **rengi yok** — VERİ KİMLİK'e talep gerekli.
> ⚠️ `kur:` motorun okumadığı alan (Oturum 16 E.6) — o blokaj kapanmadan
> tam çözüm gelmez, ama kayıt doğru yazılabilir.

---

## 5. 🟡 B5 — BUGÜNKÜ DEŞT-İ KIPÇAK DÜZELTMESİ YARIM KALDI

### ① Bizde ne var
Koordinatörün bildirdiği düzeltme uygulanmış:
```
Bozkır (Deşt-i Kıpçak)   altinorda 1281-01-01 → 1502-03-01   ✅ düzeltildi
```
Ama aynı kuşaktaki beş komşu nokta hâlâ eski tarihte:
```
Bahçesaray · Hacıbey (Odessa) · Harkov · Voronej · Rostov (Don)
                         altinorda 1281-01-01 → 1441-01-01
```

### ③ HÜKÜM — **TUTARSIZ**, ama tamamı hata değil
Ayrım **savunulabilir** ve önemli:
- **Bahçesaray** için 1441 doğru — Kırım Hanlığı orada 1441'de kuruldu.
- **Harkov · Voronej · Rostov (Don)** Kırım'da değil, **Don-Dinyeper bozkırında**;
  orası 1502'ye kadar Büyük Orda'nın sahasıydı, Kırım'ın değil. Bu üçü için 1441
  aynı gerekçeyle **erken** görünüyor — yani Deşt-i Kıpçak'a uygulanan düzeltmenin
  kapsamına girmeleri gerekirdi.

> **Öneri:** düzeltmenin gerekçesi (TDV `altin-orda-hanligi`: *"1241-1502
> Deştikıpçak'ta hüküm süren"*) bu üç noktaya da uygulanabilir mi diye
> **ölçülsün.** Ben hüküm vermiyorum: Harkov ve Voronej'in 15. yy'da kime ait
> sayılacağı Rus tarih yazımında *"Vahşi Bozkır"* (Дикое поле) diye geçen,
> **sahipsiz** sayılan bir alan — ve bu, projenin "kasten boş" 34 noktası
> sınıfına girebilir. Bir sonraki turumun konusu.

---

## 6. 🔴 B6 — İLK OSMANLI-RUS SAVAŞI KRONOLOJİDE YOK

Kullanıcının sorusu: *"Rusya ne zaman kuruldu, **nasıl Osmanlı sınırına dayandı**,
anlamamız lazım."*

### ① Bizde ne var
1009 maddelik kronolojide Rusya'yla ilgili **ilk** madde:
```
1637-06-18   Azak Kalesi'nin Don Kazaklarına kaybı
```
Öncesinde Kazan (1552), Astarhan (1556), 1569 seferi — **hiçbiri yok.**
Haritada ise Rusya 1552'de Kazan'a, 1556'da Astrahan'a çoktan oturuyor.

### ② Kaynakta ne var
TDV **`astarhan-hanligi`**:
> **1569 baharı** — Kefe Beyi **Kasım Bey**, II. Selim'in emriyle Don ve Volga'yı
> birleştirecek bir kanal açıp Rusları Astarhan'dan çıkarmayı denedi. Arazi
> güçlüğü ve Kırım'ın desteklememesi yüzünden proje başarısız oldu.

### ③ HÜKÜM — **EKSİK**, ve tam kullanıcının sorduğu yeri boş bırakıyor
Zincir şu ve haritamız üçüncü halkasını hiç anlatmıyor:
```
1552  Kazan düşer        → haritada VAR (kazan → rusya), maddesi YOK
1556  Astarhan düşer     → haritada VAR (altinorda → rusya), maddesi YOK
1569  Ejderhan seferi    → İLK OSMANLI-RUS SAVAŞI, ne haritada ne kronolojide
1637  Azak (Kazaklar)    → ilk madde burada başlıyor
1681  Bahçesaray         → kronolojide "Rusya ile ilk resmî barış" deniyor
```
⚠️ Kronolojideki *"ilk resmî barış"* ifadesi doğru; ama **ilk savaşı** hiç
anlatmadığımız için kullanıcı 1681'e kadar Rusya'nın nereden geldiğini göremiyor.

> **Öneri (VERİ KRONOLOJİ'ye) — üç madde:**
> | tarih | madde | kaynak |
> |---|---|---|
> | 1552-10-02 | Kazan Hanlığı'nın Ruslara düşüşü | TDV `astarhan-hanligi` (dolaylı), `kazan-hanligi` doğrulanmalı |
> | 1556-01-01 | Astarhan Hanlığı'nın sonu — Rusya Hazar'a ulaşıyor | TDV `astarhan-hanligi` |
> | 1569-01-01 | Ejderhan seferi — Don-Volga kanalı teşebbüsü, Kefe Beyi Kasım Bey | TDV `astarhan-hanligi` |
>
> ⚠️ Üçünün de **günü yok**; kural ⑤ gereği `YYYY-01-01` yazılır ve `gun:`
> alanına *"1569 baharı"* konur — dosyada 18 emsali var.
> 📌 Üçü de `s:` → `s:` geçişi olduğu için **Değişmez 2 bunları hiç istemedi.**
> Yani denetim temiz raporlarken kronolojinin en büyük boşluklarından biri
> duruyordu. Kural ⑥.

---

## 7. 🟡 B7 — ZURAVNO (1676) YOK: KAMANİÇE'NİN HUKUKÎ DEVRİ BOŞLUKTA

### ① Bizde ne var
```
1672-08-27  Kamaniçe'nin fethi ve Podolya Eyaleti'nin kurulması     ✅
1672-10-18  Bucaş Antlaşması — en geniş sınırlar                    ✅
      (1673-1676 arası Lehistan'la ilgili madde YOK)
1699-01-26  Karlofça Antlaşması                                     ✅
```

### ② Kaynakta ne var
TDV **`polonya`** (`<title>` doğrulandı):
> Kamaniçe **27 Ağustos 1672** · Bucaş Antlaşması **18 Ekim 1672** ·
> Sobieski'nin Hotin yakınlarında zaferi **17 Ekim 1673** ·
> **Zuravno Antlaşması 27 Ekim 1676**

### ③ HÜKÜM — **EKSİK**
Bucaş'ı Lehistan meclisi onaylamadı ve savaş 1676'ya kadar sürdü; Podolya'nın
Osmanlı'da kalmasını **hukuken sağlayan antlaşma Zuravno'dur.** Haritamız
Kamaniçe'yi 1672-1699 Osmanlı gösteriyor (doğru), ama arada dört yıllık savaşın
ve onu bitiren antlaşmanın izi yok.

> **Öneri (VERİ KRONOLOJİ'ye):** `1676-10-27` Zuravno Antlaşması — Podolya'nın
> Osmanlı'da kalışının teyidi. TDV `polonya` künyeli. (`1673-10-17` Hotin
> yenilgisi de aynı maddede anılabilir.)

---

## 8. 🟢 B8 — TUTAN TARAF: KAMANİÇE VE BUCAŞ GÜN GÜN DOĞRU

Çapraz doğrulamanın **negatif sonucu da bir sonuçtur** ve kaydı önemlidir:

| olay | bizde | TDV `polonya` | hüküm |
|---|---|---|---|
| Kamaniçe'nin fethi | `1672-08-27` (hem kronoloji hem 4 yerleşim kaydı) | *"27 Ağustos 1672"* | 🟢 **tutuyor** |
| Bucaş Antlaşması | `1672-10-18` | *"18 Ekim 1672"* | 🟢 **tutuyor** |
| Karlofça | `1699-01-26` (5 yerleşim kaydı) | 1699 | 🟢 tutuyor |

📌 Anlamı: Osmanlı-Leh temas tarihlerinin **Osmanlı tarafı sağlam.** B1'deki
takvim kayması Osmanlı kaynaklı tarihlerde değil, **Rus kaynaklı** tarihlerde
çıktı. Bu, B1/B2'nin rastgele bir hata değil **yönlü bir sapma** olduğunun ilk
işareti — ve tam da §3'ün *"anlaşmazlık kusur değil bulgudur"* dediği desen.

---

## 9. 📌 B9 — `lehistan` SLUG'I KABUK, GERÇEK MADDE `polonya`

`islamansiklopedisi.org.tr/lehistan` → `<title>` **"LEHİSTAN - TDV İslâm
Ansiklopedisi"** (yani ölü değil) ama gövdesi tek satır: **`bk. POLONYA`**.
Bütün içerik `islamansiklopedisi.org.tr/polonya`'da.

Aynı tur, ikinci vaka: `ejderhan` → `<title>` **"Arama - TDV İslâm
Ansiklopedisi"** = **ÖLÜ**; gerçek madde **`astarhan-hanligi`**.

⚠️ `oturumlar/OTURUM-16-KUZEY-DOGU-AVRUPA.md §5`, kullanılabilir TDV maddeleri
arasında **"LEHİSTAN"**'ı sayıyor. Teknik olarak yanlış değil ama oraya giden
bir oturum **boş sayfa** bulur. Kural ③'ün üçüncü çeşidi: *slug canlı, madde
kabuk.*

### Bu turda ölçülen sluglar
```
CANLI + dolu     azak · ukrayna · polonya · astarhan-hanligi
CANLI ama KABUK  lehistan            (bk. POLONYA)
ÖLÜ              ejderhan            (doğrusu: astarhan-hanligi)
```

---

## 10. LEHİSTAN NOKTA ENVANTERİ — birinci işin cevabı

**16 nokta / 23 pencere.** Koordinatörün sorduğu beş şeyin durumu:

| sorulan | veride | not |
|---|---|---|
| **Kamaniçe (1672-1699)** | ✅ tam | `lehistan` →1672-08-27→ Osmanlı →1699-01-26→ `lehistan` →1793→ `rusya` |
| **Hotin** | ✅ var ama **Lehistan değil** | Boğdan/Osmanlı zincirinde; `rusya` yalnız 1769-1774 ve 1812'den sonra |
| **Podolya** | ✅ dört sancak merkezi tam | Kamaniçe · Bar · Meciboj · Yazlofça (Oturum 16 E.1'de eklenmiş) |
| **Zaporojye** | 🔴 **hiç yok** | B3 |
| **Ukrayna kazakları** | 🔴 **hiç yok** | B3 — sağ/sol yaka ayrımı da yok |

**Lehistan'ın 16 noktası:** Krakov · Varşova · Poznan · Gdansk · Vilnius · Minsk ·
Lvov · Smolensk · Kiev · Poltava · Kamaniçe · Bar · Meciboj · Yazlofça · Çehrin · Riga

TDV `polonya`'nın andığı şehirler: *Varşova, Kraków, Gdansk, Wrocław, Łódź,
Szczecin, Vilna, Kiyef, Kamaniçe, Danzig, Lemberg, Posen.*
→ **Kaynağın andığı her merkez zaten veride var.** Yani "16 nokta az" tespiti
doğru ama eksiklik **şehir listesinde değil**: eksik olan **Kazak/Hetmanlık
katmanı** (B3) ve Litvanya'nın ayrı gövde olarak hiç görünmemesi.

⚠️ Litvanya konusunda **öneri üretmiyorum**: Oturum 16 E.3 bunu ölçmüş ve
`lehistan` kimliğinin Litvanya'yı kasten kapsadığını, ayırmanın Vilnius/Minsk/
Kiev/Smolensk'i bölmeyi gerektirdiğini yazmış. Karar koordinatörde.

---

---
---

# TUR 2 — Karlofça kesişimi ve Vahşi Bozkır

Koordinatörün bıraktığı iki soru. Sırasıyla.

---

## 12. 🟢 B10 — KARLOFÇA: DÖRT KAYNAKTAN OKUNDU, HARİTAMIZ **DOĞRU**

Görev tanımı §1'in *"asıl sınav"* dediği kesişim. Sonuç beklediğimin tersi çıktı:
**bulacağım hata çıkmadı, onun yerine tasarımın neden doğru olduğu ortaya çıktı.**

### ① Bizde ne var
`1699-01-26` günü haritada **yalnız 5 nokta** kımıldıyor — ve **hepsi Lehistan**:
```
Kamaniçe · Bar (Podolya) · Meciboj · Yazlofça · Çehrin (Çigirin)
        d:OSMANLI biter  →  s:"lehistan" başlar
```
Avusturya'nın ve Venedik'in kazanımları **o gün hiç kımıldamıyor**; hepsi
1683-1694 arasındaki **fetih günlerine** yazılmış (Budin 1686-09-02, Erdel
1687-08-12, Mora 1687-08-01, Atina 1687-09-26 …). Ve **hiçbir Rus noktası**
1699'da kımıldamıyor.

### ② Kaynakta ne var
TDV **`karlofca`** (`<title>` doğrulandı; ⚠️ `karlofca-antlasmasi` **ÖLÜ**):
> İmza **24 Receb 1110 / 26 Ocak 1699**
> **Avusturya:** Banat (Timişvar) hariç Macaristan'ın çoğu ve Erdel
> **Venedik:** Dalmaçya kıyı kaleleri ve Mora'nın bir kısmı
> **Lehistan:** *"Kamaniçe Kalesi'ni ve Podolya bölgesini geri aldı"*
> **Rusya:** tam antlaşma **değil** — *"barış antlaşmasının daha sonra akdi
> şartıyla … iki yıllığına beş maddelik bir **mütareke**"*
> Tam Osmanlı-Rus barışı ayrıca İstanbul'da: **27 Muharrem 1112 / 14 Temmuz 1700**,
> Azak Rusya'ya bırakıldı.

### ③ HÜKÜM — **UYUYOR**, üç ayrı noktada
1. **Tarih tutuyor.** `1699-01-26` ↔ TDV "26 Ocak 1699". 🟢
2. **Lehistan tarafı tam.** TDV "Kamaniçe + Podolya" diyor; bizde Kamaniçe ve
   Podolya'nın **dört sancak merkezinin hepsi** o gün Lehistan'a dönüyor. 🟢
3. **Rusya'nın farklı statüsü haritada doğru görünüyor.** Karlofça'da Rusya'ya
   toprak geçmediği için hiçbir Rus noktası kımıldamıyor; Azak ise
   kronolojimizde **`1700-07-14 İstanbul Antlaşması`** maddesiyle duruyor —
   TDV'nin verdiği **14 Temmuz 1700** ile **gün gün aynı.** 🟢

📌 **Ve görünürdeki tutarsızlık aslında tutarlılık:** aynı antlaşmada Lehistan
**antlaşma gününü**, Avusturya/Venedik **fetih günlerini** kullanıyor. İki ayrı
konvansiyon gibi duruyor ama değil — ikisi de **fiilî hâkimiyeti** yazıyor:
Budin 1686'da fiilen düştü, Kamaniçe 1699'a kadar Osmanlı garnizonundaydı.
Karlofça Avusturya için *"olanı tescil etti"*, Lehistan için *"el değiştirtti"*.
**Harita bunu doğru ayırmış.**

### 📌 ÇAPRAZ BATI'ya devrettiğim uç
TDV Venedik için *"Dalmaçya kıyı kaleleri"* diyor; bizim veride **1699'da Venedik
tarafında hiçbir hareket yok.** Karlofça'da Venedik'in *kaybettiği* bir şey var
mı (özellikle Dalmaçya'da ve Mora dışındaki iskelelerde) — bu benim değil
**ÇAPRAZ BATI'nın** ucu. Aynı antlaşmanın dört kaynaktan okunması budur.

---

## 13. 🔴 B11 — VAHŞİ BOZKIR: `kirim` BOYASI KAYNAĞIN SÖYLEDİĞİNDEN FAZLASINI İDDİA EDİYOR

Koordinatörün sorusu: *"Harkov/Voronej ikisi `s:"kirim"` taşıyor ve 1476'da orası
devletsizdi. Senin kaynakların ne diyor?"*

### ① Bizde ne var
```
Harkov         altinorda 1281→1441 · kirim 1441→1654 · rusya 1654→1923
Voronej        altinorda 1281→1441 · kirim 1441→1585 · rusya 1585→1923
Rostov (Don)   altinorda 1281→1441 · kirim 1441→1739 · rusya 1739→1923   kur:1749-12-15
```
Yani Kırım Hanlığı bu üç noktada **213 · 144 · 298 yıl** boyunca tek renk toprak
sahibi olarak boyanıyor.

### ② Kaynakta ne var
TDV **`kirim`** (`<title>` doğrulandı: "KIRIM - TDV İslâm Ansiklopedisi"):
> Kuzey sınırları **belirsiz ve değişken** idi.
> Kuzey bozkırlar esas olarak **nüfuz ve akın sahasıydı, yerleşik merkezî idare
> değil.**
> *"Steplerdeki göçebeler"* · *"Nogaylar'ın hana tâbiiyetleri **gevşek**"*
> Hanlık bu bölgelerde doğrudan kontrol yerine **göçebe kabileler vasıtasıyla**
> etkiliydi.
> Kuruluş: *"gerçek kurucusu Hacı Giray olup adını taşıyan en eski para
> **845 (1441-42)** tarihini taşır."*

### ③ HÜKÜM — **ÇELİŞİYOR**, ve koordinatörün sezgisi doğru
TDV, Kırım'ın kuzey bozkırında **yerleşik idaresi olmadığını açıkça yazıyor.**
Bizim haritamız ise orayı Kırım'ın **doğrudan toprağı** olarak boyuyor. Yani
kaynak *"nüfuz sahası"* derken harita *"mülk"* diyor.

📌 **1441 tarihi ise doğru** — TDV Hacı Giray'ın en eski parasını 845 (1441-42)
veriyor, `devletler.js`'teki 1441 ile tutuyor. Sorun **tarihte değil,
tarihin neye uygulandığında.**

### 🔴 Ve altında ikinci bir kusur çıktı: iki nokta 1441'de HENÜZ YOK
Verinin kendi geçiş tarihleri, o şehirlerin **kuruluş yıllarıyla** birebir aynı:
```
Voronej  kirim → rusya  1585-01-01     Voronej kalesi 1585'te kuruldu
Harkov   kirim → rusya  1654-01-01     Harkov 1654'te kuruldu
```
Yani kaydı yazan oturum, kuruluş yılını **el değiştirme günü** olarak kullanmış.
Ama o zaman **öncesindeki 144/213 yıl**, var olmayan bir şehrin peteğini
Kırım'a veriyor.

⚠️ Ve aynı dosyada **doğru deseni** taşıyan bir emsal var:
```
Rostov (Don)   kur:"1749-12-15"     ← bu noktada kur: VAR
Harkov         kur: YOK
Voronej        kur: YOK
```
Aynı bölgede, aynı sınıftan üç noktaya **üç farklı muamele.**

> **Öneri — iki kademeli, ikincisi bende değil:**
> **(a) Mekanik, hemen yapılabilir:** `Harkov` `kur:"1654-01-01"`,
> `Voronej` `kur:"1585-01-01"`. Bu, Rostov'daki mevcut deseni izler ve
> hiçbir kırılma üretmez.
> ⚠️ Motor `kur:` okumuyor (Oturum 16 E.6) — kayıt doğru olur, **etki blokajın
> arkasında bekler.**
>
> **(b) Tasarım kararı, koordinatörde:** 1441-1585/1654 arası bozkır ne
> boyanmalı? Üç seçenek var ve üçü de projede **zaten mevcut**:
> | seçenek | emsali | sonucu |
> |---|---|---|
> | `kirim` kalsın | bugünkü | kaynak *"nüfuz"* derken harita *"mülk"* diyor |
> | **kasten boş** | Sahra / Rub'ul Hâlî'nin 34 noktası | Değişmez 1'in muaf listesine girer |
> | **`serbest-hale`** (sönen kenar) | `KOORDINATOR-DURUM §3.1` | sahipsizlik **keskin çizgi değil**, sönerek biter |
>
> 📌 **Üçüncüsünü öneriyorum** ve sebebi tam bu vaka: Vahşi Bozkır'ın sınırı
> gerçekten keskin değildi — TDV'nin *"belirsiz ve değişken"* ve *"tâbiiyetleri
> gevşek"* ifadeleri, `serbest-hale` mekanizmasının **görsel karşılığıyla**
> birebir aynı şeyi anlatıyor. Sönen kenar bu proje için bir estetik değil,
> **bir kaynak ifadesinin doğru çevirisi.**
> ⚠️ `KOORDINATOR-DURUM §3.1`: sönen kenar **yayına girmeden** çöl tavanı
> inmemeli. Bu öneri o sıra bağının **arkasında** durur.

---

## 14. ⭐ B12 — TAKVİM SAPMASI SINIF OLARAK TARANABİLİR: **KAYNAĞA BAĞLI**

Koordinatör *"yönlü olması sınıf olarak taranabilir demek"* dedi. Tur 2'de iki
yeni vaka çıktı ve **hipotezi doğruladılar.** Bütün tablo:

| olayın tarihi bizde | kaynağı | sonuç |
|---|---|---|
| `1672-08-27` Kamaniçe | TDV `polonya` | 🟢 gün gün aynı |
| `1672-10-18` Bucaş | TDV `polonya` | 🟢 gün gün aynı |
| `1699-01-26` Karlofça | TDV `karlofca` | 🟢 gün gün aynı |
| **`1700-07-14` İstanbul** | TDV `karlofca` | 🟢 **gün gün aynı** |
| `1667-01-30` Andrusova → Kiev | Rus tarih yazımı | 🔴 **ham Jülyen, 10 gün** |
| `1696-07-19` Azak | Rus tarih yazımı | 🔴 ham Jülyen (TDV: 6 Ağustos) |
| `1654-01-18` Pereyaslav → Poltava | Rus tarih yazımı | 🟢 dönüştürülmüş |

### HÜKÜM
> **TDV'den gelen dört tarihin dördü de doğru. Sapma yalnız Rus tarih
> yazımından alınan tarihlerde var — ve orada bile tutarsız: biri dönüştürülmüş,
> ikisi ham.**

⇒ Tarama ölçütü artık yazılabilir: **`kaynak:` alanı TDV olmayan ve 1582-1918
arası Rusya/Lehistan/İsveç kaynaklı her tarih**, Jülyen olma ihtimali taşır.
Bu, tek tek bakmadan **sınıfı daraltıyor** — koordinatörün istediği şey buydu.

⚠️ Ama **ölçüt henüz eşik değil**: elimde 3 Rus kaynaklı vaka var, biri temiz.
`ORGANIZASYON §7.4` (*"ölçmeden eşik koyma"*) gereği bunu **denetim kuralı diye
önermiyorum**; önce vaka sayısı artmalı.

---

---
---

# TUR 3 — kendi iddiamı çürüttüm, altından blokaj çıktı

---

## 16. ❌ B4'ÜN YARISI DÜŞTÜ — `kur:` alanına bakmamıştım

Koordinatör ölçtü, ben de bağımsız ölçtüm. **İkisi de aynı sonucu verdi: hatalıydım.**

```
Saratov      kur:"1590-07-12"   tur:"sehir"     ← VAR
Tsaritsyn    kur:"1589-07-02"   tur:"sehir"     ← VAR
Kalmuk bozkırı  kur: yok        tur:"bolge"     ← bölgenin kuruluş tarihi olmaz
```

Ve motorun `kur:`'u **gerçekten uyguladığını** doğruladım — `arac/uret_petek.py`
1259 · 1274 · 1298. satırlar `petek_epok()` içinde:
```python
if not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g)):
```

⇒ **`s:` penceresinin 1556'da başlaması kusur değil.** Kayıt *"kurulduğunda Rus
toprağındaydı"* diyor ve nokta 1590'a kadar haritada **hiç çizilmiyor.**

### Hatanın sınıfı — ve kendi bulgumun aynısı
`s:` alanına baktım, `kur:` alanına bakmadım. Bu, **B12'de kendi bulduğum kural
⑥'nın bana çarpmış hâli**: ölçüm doğru yöndeydi, **eksik boyutluydu.** Tur 2'de
aynı şeyi B5'te yaşamıştım (`altinorda`nın bitişine bakıp devamına bakmamak).
**Aynı tur içinde üçüncü kez.**

> 📌 Kayda geçsin: bir kaydı *"yanlış"* ilan etmeden önce **bütün alanları**
> okunur — `s:` · `d:` · `v:` · `kur:` · `bit:` · `tur:`. Tek alan hikâyeyi
> anlatmıyor.

### B4'ten AYAKTA KALAN — ve asıl iddia buydu
| iddia | durum |
|---|---|
| Saratov/Tsaritsyn 1556'da yok | ❌ **düştü** — `kur:` var, motor uyguluyor |
| Kalmuk bozkırı `kur:` yok | ❌ **düştü** — `tur:"bolge"`, kuruluşu olmaz |
| **`astarhan` 0 pencere — hanlık 1466-1556 boyunca hiç boyanmıyor** | ✅ **ayakta** |
| **Harkov ve Voronej `kur:` taşımıyor** | ✅ **ayakta** (Ö9, B11) |

⇒ B4'ün asıl gövdesi — **`astarhan` kimliğinin hiç kullanılmaması** — etkilenmedi.
Düşen kısım, ona eklediğim ikincil gerekçeydi.

---

## 17. 🔴 B13 — `OTURUM-16 E.6` BAYAT: KAPALI SANILAN KAPI AÇIK

İddiamı ölçerken beklemediğim bir şey çıktı ve **bu, düşen iddiadan daha
değerli.**

### ① Belgede ne yazıyor
`oturumlar/OTURUM-16-KUZEY-DOGU-AVRUPA.md §E.6`:
> **⛔ BLOKAJ: motor `kur:`/`bit:` okumuyor**
> `arac/uret_petek.py` `kur:` alanını **görmüyor**; henüz kurulmamış şehrin
> peteği 1281'den beri var ve komşularından toprak koparıyor.
> → *"**merge motor düzelene kadar yapılmayacak.**"*

### ② Kodda ne var
`arac/uret_petek.py:1135-1160` — o blokajın **çözümü yazılmış ve yürürlükte.**
Başlık: `# ---------------- kur: / bit: — VARLIK EPOKLARI ----------------`
Açıklama **geçmiş zamanda**: *"Motor `kur:` alanını **okumuyordu**"*.
Ve çözümün kanonik örneği olarak **tam da bu bölgeden** bir nokta anılıyor:
> *"St. Petersburg ise `kur:1703` olduğu hâlde `s:` 1281'den rusya diyor — işte
> yanlış boyanan budur ve **devredilir**."*

Ölçtüm: `St. Petersburg  kur:"1703-05-27"` ✓ · canlı veride **35 nokta** `kur:` taşıyor.

### ③ HÜKÜM — **BAYAT BELGE**, ve maliyeti somut
E.6 bir **kapı kapatıyor**: *"Kuzey-Doğu Avrupa partisi (228 nokta) merge
edilmeyecek, çünkü motor `kur:` okumuyor."* **O kapı artık açık.**

⚠️ Bugün o dosyayı okuyan bir oturum, **var olmayan bir blokaj yüzünden**
merge'i bekletir. Ve bekletirken haklı olduğunu sanır — çünkü belge öyle diyor.

📌 **Bu, CLAUDE.md §5'in kendi uyardığı sınıfın aynısı** (*"bayat satır bir
araştırma oturumunu doğrudan yanılttı"*). Aynı belge ailesinde ikinci vaka.
Ve benim Tur 1'deki `yerlesimler_avrupa.js` hatamla **aynı kök**: belgeye
güvenip ölçmemek.

> **Öneri (koordinatöre):** `OTURUM-16 §E.6` bloğu **kapandı** diye
> işaretlensin. ⚠️ Merge'in önünde başka engel var mı **ölçmedim** — E.6'nın
> saydığı kimlik/renk şartı (15 tanımsız kimlik) ayrı bir kapı ve **o hâlâ
> kapalı olabilir.** Yalnız `kur:` gerekçesinin düştüğünü söylüyorum.

---

## 18. ❌ ÜÇÜNCÜ TAKVİM VAKASI ÇÖZÜLDÜ — vaka değilmiş

Bahçesaray `1681-01-11`'i üçüncü takvim adayı olarak sıraya almıştım. Ölçtüm:

### ① Bizde ne var
`data/olaylar_ek5.js:242`:
```js
t:"1681-01-11", b:"Bahçesaray Antlaşması — Rusya ile ilk resmî barış",
gun:"1681", kaynak:"merzifonlu-kara-mustafa-pasa"
```
**`gun:` alanı "1681" diyor — yalnız yıl.**

### ② Kaynakta ne var
TDV `bahcesaray` (`<title>` doğrulandı): *"1681'de Bahçesaray'da Osmanlı Devleti
ile Rusya arasında bir antlaşma imzalandı"* — **gün vermiyor.**

### ③ HÜKÜM — **TAKVİM VAKASI DEĞİL**, kayıt doğru davranmış
Maddeyi yazan oturum günü bilmediğini **açıkça yazmış** (`gun:"1681"`) ve
`t:` alanını yalnız sıralama damgası olarak kullanmış. Bu, `CAPRAZ-GOREV.md`
kural ⑤'in birebir doğru uygulanışı: *kaynağın verdiği hassasiyet, verildiği
gibi yazılır.*

⇒ Takvim hipotezimin (B12) vaka sayısı **artmadı**: hâlâ 3 Rus kaynaklı tarih.
Eşik önermemekte haklıymışım.

🟡 **Küçük bir tutarsızlık** yine de var, ayrı sınıftan: `CLAUDE.md §4` günü
bilinmeyen tarih için **`YYYY-01-01`** diyor; bu kayıt `1681-01-11` kullanıyor.
Zararsız (çünkü `gun:` doğruyu söylüyor) ama `t:`'yi gün sanan bir okuyucu
**sahte hassasiyet** görür. Kayıt olarak bırakıyorum, düzeltme önermiyorum —
tek vaka üzerinden konvansiyon değiştirilmez.

---

---
---

# TUR 4 — `astarhan` penceresi: uygulamaya hazır paket

Koordinatörün istediği: *"hangi noktalara yazılacağını hazırla, renk gelince tek
turda uygulanır."* Paket aşağıda. **Veriye yazmadım.**

---

## 21. ⚙️ ÖNCE ELEME — hangi nokta o tarihte GERÇEKTEN çiziliyor

Tur 3'ün dersini kendime uyguladım: `s:` penceresine bakmak yetmez, **nokta
çiziliyor mu** ona bakılır. 1500-06-15 kesitinde Volga-Hazar kutusu:

| nokta | çiziliyor mu | bugün boyalı | `tur:` |
|---|---|---|---|
| Astrahan | ✅ **EVET** | `altinorda` | sehir |
| Terek deltası (Kızlar) | ✅ EVET | `altinorda` | bolge |
| Kalmuk bozkırı | ✅ EVET | `altinorda` | bolge |
| Ural eteği | ✅ EVET | `altinorda` | bolge |
| Mangışlak | ✅ EVET | `altinorda` | bolge |
| Garabogaz (Bekdaş) | ✅ EVET | `altinorda` | bolge |
| Bozkır (Deşt-i Kıpçak) | ✅ EVET | `altinorda` | bolge |
| **Tsaritsyn** | ❌ hayır (`kur:1589`) | — | sehir |
| **Saratov** | ❌ hayır (`kur:1590`) | — | sehir |
| **Ufa** | ❌ hayır (`kur:1574`) | — | sehir |
| Üstyurt platosu (doğu/batı) | ✅ EVET | **`—` sahipsiz** | bolge |

> 🔴 **Doğrudan sonuç: Saratov ve Tsaritsyn'e DOKUNULMAYACAK.**
> `kur:` tarihlerinden önce çizilmiyorlar; `s:` pencerelerinin 1556'da başlaması
> haritada **hiçbir şey göstermiyor.** Tur 3'te düşen iddiam tam buydu ve şimdi
> **iş tasarrufuna** dönüştü: paket 7 noktaya iniyor, 9'a değil.

📌 Ve kayda değer: **Üstyurt platosunun iki noktası `—` (sahipsiz)** — yani
projenin "kasten boş" sınıfı bu kutuda zaten işliyor. B11'de önerdiğim
çözümün emsali burada, aynı coğrafyada, çalışır hâlde duruyor.

---

## 22. 📦 PAKET — `astarhan` ve `nogay`, TDV ile sınırlandırılmış

### ② Kaynakta ne var
**TDV `astarhan-hanligi`** (`<title>` doğrulandı):
> Hanlık **1466-1556**. Ruslar, IV. İvan'ın **1552**'de Kazan'ı almasının
> ardından Astarhan'ı işgal etti.

**TDV `nogaylar`** (`<title>` doğrulandı: "NOGAYLAR - TDV İslâm Ansiklopedisi"):
> Sahası Deşt-i Kıpçak'ta: **batıda "İdil'in (Volga) sol yakasındaki alçak
> ovalar"**, kuzeydoğuda İrtiş nehrinin kolları ve ovaları, doğuda **"Emba
> nehrinden Aral gölüne kadar"**. Başşehir **Sarayçık**.
> Kalmukların ağır baskısı Nogayları batıya sürdü; **1644**'te bir çarpışma.

⇒ **Ölçüt kaynaktan çıkıyor ve nettir: Volga'nın SOL (doğu) yakası Nogay'dır.**

### ③ Öneri — nokta nokta

**A) `astarhan` 1466-01-01 → 1556-01-01** *(Volga ağzı ve batısı)*

| nokta | konum | gerekçe | güven |
|---|---|---|---|
| **Astrahan** | 46.35, 48.03 | hanlığın **başşehri** | 🟢 kesin |
| Kalmuk bozkırı | 46.50, 45.50 | Volga'nın **batısı**, hanlığın otlağı | 🟡 orta |
| Terek deltası (Kızlar) | 43.85, 46.72 | hanlık ile yerel güçler arasında | 🟡 zayıf |

**B) `nogay`** *(Volga'nın SOL yakası — TDV'nin çizdiği sınır)*

| nokta | konum | gerekçe | güven |
|---|---|---|---|
| **Ural eteği** | 51.00, 52.00 | Volga'nın doğusu, Yayık havzası — **tam Nogay sahası** | 🟢 kesin |
| **Mangışlak** | 44.51, 50.27 | Hazar'ın doğu kıyısı, *"Emba'dan Aral'a"* içinde | 🟢 kesin |

⚠️ **Tarih aralığı için ölçüt yok.** TDV Nogay için tek kuruluş tarihi vermiyor
(*"Edige'nin 1420'deki ölümüne"* dayandırıyor); `devletler.js` **1440-1783**
diyor. Kural ⑤ gereği **gün uydurmuyorum**: aralık `devletler.js`'ten alınmalı
ya da ayrıca araştırılmalı. Bu, paketin **açık ucu** ve öyle işaretliyorum.

### ⛔ PAKETE ALMADIKLARIM — ve neden

| nokta | neden almadım |
|---|---|
| Saratov · Tsaritsyn · Ufa | `kur:` öncesi çizilmiyor — **etkisiz değişiklik** (§21) |
| Garabogaz · Çeleken | Türkmen kıyısı; Nogay mı Hîve mi **ölçmedim** |
| Üstyurt (doğu/batı) | zaten `—` sahipsiz; **kasten boş** olabilir, dokunmam |
| Bozkır (Deşt-i Kıpçak) | bugün düzeltildi (1502 → `kirim`), **açmıyorum** |

---

## 23. ⚠️ PAKETİN ÖNÜNDEKİ İKİ KAPI — ikisi de bende değil

1. **Renk.** `astarhan` ve `nogay`, `renkler.py`'de **yok** (Oturum 16 E.4).
   Renksiz kimlik **boyanmaz** — paket renk gelmeden uygulanırsa haritada
   `altinorda` yerine **delik** açar. Bu, düzeltmeyi düzeltmeden kötü yapar.
2. **Değişmez 1.** Yedi noktanın hepsi bugün sahipli; paket sahipliği
   değiştiriyor, **kaldırmıyor** — yani sahipsiz sayısı 34'te kalmalı.
   ⚠️ **Ölçmedim** (veriye yazamadığım için koşturamam). Uygulayan oturum
   `denetle.py`'yi koştursun.

---

## 24. 📌 VE BİR ÖLÇÜM SORUSU — kimin cevaplayacağını bilmiyorum

`astarhan` ve `nogay` eklenince `altinorda` bu kutuda **ne kadar küçülür?**
Bugün 22 pencere / 22 nokta taşıyor ve bunun **7'si** bu pakette. Yani Altın
Orda'nın haritadaki gövdesinin **üçte biri**, aslında ondan sonra gelen iki
devletin sahası.

Bu bir hata değil — Altın Orda'nın halefleri hep onun içinden çıktı. Ama
**kullanıcının "Rusya nasıl sınıra dayandı" sorusunun görsel cevabı buna bağlı**:
bugün harita 1502'de kocaman bir `altinorda`dan doğrudan `rusya`ya atlıyor.
Araya `astarhan` · `kazan` · `nogay` girince **Rusya'nın Volga'yı adım adım
inişi görünür hâle geliyor** — B6'daki üç kronoloji maddesinin haritadaki
karşılığı tam bu.

---

---
---

# TUR 5 — sistematik takvim taraması

Koordinatörün verdiği görev. Yöntem onun tarif ettiği üç adım; **kanıt ölçütü
katı tutuldu:** bir tarihe "Jülyen" demek için kaynağın **çift gösterim**
(`19 April [O.S. 8 April]`) vermesi şart. Vermiyorsa fark ne olursa olsun
*"sebebi belirsiz"* yazdım.

---

## 26. 📋 TARAMA TABANI

`rusya` · `lehistan` · `isvec` pencerelerinin **1582-1918 arasındaki bütün sınır
günleri: 63 ayrı gün.** Bunların TDV'de karşılığı olan ve/veya antlaşmaya bağlı
olanları tarandı.

### 🟢 GREGORYEN — doğru, dokunulmayacak (7)

| tarih | olay | kaynak | hicrî karşılığı |
|---|---|---|---|
| `1654-01-18` | Pereyaslav → Poltava | çift gösterim | — |
| **`1667-02-09`** | Andrusova → Kiev | çift gösterim | — |
| `1672-08-27` | Kamaniçe | TDV `polonya` | — |
| `1672-10-18` | Bucaş | TDV `polonya` | — |
| `1699-01-26` | Karlofça | TDV `karlofca` | **24 Receb 1110** |
| `1700-07-14` | İstanbul | TDV `karlofca` | **27 Muharrem 1112** |
| **`1774-07-21`** | Küçük Kaynarca | TDV `kucuk-kaynarca-antlasmasi` | **12 Cemâziyelevvel 1188** |

✅ **`1667-02-09` — Tur 1'deki Kiev düzeltmem veride uygulanmış**, ölçtüm ve gördüm.

### 🔴 JÜLYEN — çift gösterimle kanıtlı (2 yeni)

**① Kırım'ın ilhakı — `1783-04-08` → `1783-04-19`**
```
② KAYNAK:  "19 April [O.S. 8 April] 1783"   ← çift gösterim, 11 gün
① BİZDE:   Bahçesaray · Kuban (Yekaterinodar) · Bozkır (Deşt-i Kıpçak)
           s:"kirim" biter → s:"rusya" başlar   1783-04-08
           + data/devletler.js  kirim  t:"1783-04-08"
           + kronoloji  t:"1783-04"  "Kırım'ın Rusya'ya ilhakı"
③ HÜKÜM:   ÇELİŞİYOR — ham Jülyen. Üç veri dosyasına birden dokunuyor.
```

**② Nystad Antlaşması — `1721-08-30` → `1721-09-10`**
```
② KAYNAK:  "10 September [O.S. 30 August] 1721"   ← çift gösterim, 11 gün
① BİZDE:   Riga  s:"isvec" biter → s:"rusya" başlar   1721-08-30
③ HÜKÜM:   ÇELİŞİYOR — ham Jülyen.
```
📌 Bu ikincisi ayrıca **İsveç kapısını** açıyor: İsveç 1753'e kadar Jülyen
kullandı, yani `isvec` pencerelerinin **hepsi** aynı şüphe altında.

### 🟡 SEBEBİ BELİRSİZ — fark var ama çift gösterim YOK (4)

| tarih | olay | neden hüküm veremiyorum |
|---|---|---|
| `1696-07-19` | Azak'ın Petro'ya kaybı | TDV **6 Ağustos** diyor; ne Jülyen (19 Tem) ne Gregoryen (29 Tem) ile tutuyor. **Üç ayrı tarih**, çift gösterim yok |
| `1637-06-18` | Azak'ın Kazaklara kaybı | TDV yalnız **yıl** veriyor |
| `1617-02-27` | Stolbovo → St. Petersburg | ölçülmedi, kaynak aranmadı |
| `1621-09-15` | Riga'nın İsveç'e geçişi | İsveç Jülyen'i (1753'e kadar) — **aday**, ölçülmedi |
| `1769-09-19` | Hotin'in Ruslara kaybı | ölçülmedi |

⚠️ Bunları **düzeltme önerisi olarak vermiyorum.** Koordinatörün kuralı açık:
çift gösterim yoksa fark başka sebeptendir.

---

## 27. 🔴 B14 — HİPOTEZİMDE DELİK VAR: **TDV DE JÜLYEN TAŞIYABİLİYOR**

Tur 2'de şunu yazmıştım (B12):
> *"TDV'den gelen dört tarihin dördü de doğru. Sapma yalnız Rus tarih
> yazımından alınan tarihlerde var."*

**Bu turda çürüdü.** Kırım'ın ilhakı için TDV `kirim` şöyle diyor:
> *"Kırım'ın Rusya tarafından ilhakı **8 Nisan 1783** tarihinde gerçekleşmiştir.
> Hicrî karşılığı ise **1197**."*

**TDV'nin verdiği gün, Jülyen günün ta kendisi.** Yani *"TDV'den geldiyse
temizdir"* ölçütü **yanlış** — ve bu ölçüte dayanan bir tarama, en açık iki
vakadan birini kaçırırdı.

### Ve yerine geçecek ölçüt kendini gösterdi: **hicrî karşılık**

| olay | TDV'nin verdiği hicrî | sonuç |
|---|---|---|
| Karlofça | **24 Receb 1110** (gün+ay) | 🟢 Gregoryen |
| İstanbul 1700 | **27 Muharrem 1112** (gün+ay) | 🟢 Gregoryen |
| Küçük Kaynarca | **12 Cemâziyelevvel 1188** (gün+ay) | 🟢 Gregoryen |
| Kırım ilhakı | **1197** (yalnız yıl) | 🔴 **Jülyen** |
| Azak 1696 | **1108** (yalnız yıl) | 🟡 tutmuyor |

**Mekanizma:** TDV bir tarihi **gün-ay hicrîsiyle** veriyorsa elinde bir
**Osmanlı belgesi** var demektir; hicrî ↔ milâdî çevirisi o belgeden yapılmış ve
doğrudur. Yalnız **yıl** veriyorsa olayın birincil kaydı **Rus/Batı belgesidir**
ve TDV o günü **çevirmeden aktarmış** olabilir.

⇒ Doğru ölçüt *"kaynak TDV mi"* değil, **"olayın birincil belgesi Osmanlı mı"**.

⚠️ **EŞİK ÖNERMİYORUM.** n=5 ve ayrım beş vakada da tutuyor — ama beş vaka
kural yapmaz (`ORGANIZASYON §7.4`, bugün bunu üç kez kendime uyguladım).
Hipotez olarak kaydediliyor; sınanacak.

📌 Ve şunu kendi payıma yazıyorum: **B12'yi kuran da ben, çürüten de ben.**
Tur 2'de dört temiz TDV vakası gördüm ve genelleme yaptım; beşincisi kırdı.
Bu, §20'deki desenin dördüncü tekrarı — **yön doğru, boyut eksik**: "kaynak
kim" boyutuna baktım, "birincil belge hangi devletin" boyutuna bakmadım.

---

## 28. 🔴 B15 — TÜRKMENÇAY VERİDE **İKİ AYRI GÜNDE** DURUYOR

Tarama sırasında çıktı; alanı ÇAPRAZ DOĞU'nun ama bulan benim.

```
1828-02-10   Astara · Lenkeran           → s:"rusya"    ← JÜLYEN, düzeltilmemiş
1828-02-22   Nahçıvan · Revan · Ordubad  → s:"rusya"    ← Gregoryen, düzeltilmiş
```

**Tek antlaşma, iki gün, 12 gün arayla.** ÇAPRAZ DOĞU'nun düzeltmesi üç noktaya
uygulanmış, **iki noktaya uygulanmamış.**

### ③ HÜKÜM — **YARIM DÜZELTME**, ve düzeltmeden önceki hâlden kötü
Önce hepsi tutarlı biçimde yanlıştı; şimdi harita 12 gün boyunca **Talış'ı Rus,
Revan'ı Osmanlı** gösteriyor — yani antlaşmanın yarısı yürürlükte.

⚠️ Bu, `CLAUDE.md §11`'deki **`replace(eski, yeni, 1)`** vakasının aynı sınıfı:
toplu düzeltmede bazı eşleşmelerin atlanması. O vakada 8 aylık sahipsiz pencere
açılmıştı.

> **Öneri (ÇAPRAZ DOĞU'ya / uygulayan oturuma):** `Astara` ve `Lenkeran`
> `1828-02-10` → **`1828-02-22`**. Ve düzeltmeden sonra
> *"bu tarihi taşıyan başka kayıt kaldı mı"* diye **tekrar taransın.**

---

---
---

# TUR 6 — Kırım paketi: üç sorunun cevabı + Nystad

Koordinatörün sorduğu ①②③. **Veriye yazmadım.**

---

## 30. ① `1783-04-19` TAM OLARAK NE?

**Cevap: Rusya'nın tek taraflı ilhak İLANI.** Ne antlaşma, ne fiilî işgal.

TDV **`sahin-giray`** (`<title>` doğrulandı):
> *"Ruslar da **8 Nisan 1783**'te Kırım'ın ilhakını **resmen ilân ettiler**."*

Ve fiilî son **daha erken**:
| tarih | olay | kaynak |
|---|---|---|
| **14 Mayıs 1782** | Şâhin Giray desteğini yitirip **Ruslara sığındı** — fiilî hanlık bitti | TDV `sahin-giray` |
| **Ekim 1782** | General Potemkin **resmî işgali başlattı** | TDV `sahin-giray` |
| **8/19 Nisan 1783** | Rusya ilhakı **ilân etti** (tek taraflı) | TDV + çift gösterim |

⇒ İlhak günü bir **ilan**dır; ne öncesi boş ne sonrası tamamlanmış.

---

## 31. ② HANLIĞIN `t:`'Sİ — cevap ne 1783 ne 1792, **1784**

Koordinatörün sorusu *"1783 mü, Yaş 1792 mi"* idi. **İkisi de değil.**

TDV **`kirim`**:
> *"Osmanlı Devleti, **8 Ocak 1784**'te İstanbul'da imzaladığı bir antlaşma ile
> **Kırım, Taman ve Kuban**'ın Rusya'ya ilhakını **tanıdı**."*

Yaş (1792) ise başka bir işe bakıyor: *"Dinyester'e kadar ihtilâflı araziyi
Rusya'ya terketti"* ve Bucak — **Kırım'ın tanınması değil.**

### 🔴 Ve bu, koordinatörün endişesini büyük ölçüde kaldırıyor
> *"Kırım'ın `t:`'sini 1783'e çekersen 1783-1792 arası hanlık yok görünür;
> oysa Osmanlı onu **9 yıl** daha tanıyor olabilir."*

**Boşluk 9 yıl değil, 9 AY** — 19 Nisan 1783 → 8 Ocak 1784. §72'nin *"iki ucu da
ölç"* uyarısı yerindeydi ama ölçünce **ikinci uç çok daha yakın** çıktı.

### Üç aday, karar koordinatörde
| aday | ne demek | dayanağı |
|---|---|---|
| `1782-05-14` | fiilî son (Şâhin Giray kaçtı) | TDV `sahin-giray` |
| **`1783-04-19`** | Rusya'nın ilhak ilanı | TDV + çift gösterim |
| `1784-01-08` | **Osmanlı'nın tanıması** (de jure) | TDV `kirim` |

> **Önerim — ama kararı vermiyorum:** `yerlesimler.js`'in üç noktası
> **`1783-04-19`** olsun, çünkü projenin yerleşim ekseni **fiilî hâkimiyeti**
> yazıyor (B10'da Karlofça'da ölçtük: Avusturya'nın kazanımları antlaşma
> gününe değil **fetih gününe** yazılı). `devletler.js`'in `kirim t:` alanı da
> aynı gün olsun ki iki eksen çelişmesin; **1784-01-08 kayıt notuna** yazılsın.
>
> ⚠️ Bu bir **tercih**, ölçüm değil. Ters yönü de savunulabilir: `devletler.js`
> bir **kurum** dizinidir ve kurumun hukukî sonu 1784'tür. Karar senin.

⚠️ **`1784-01-08` B14 ölçütüyle sınanmadı:** TDV bu tarihin **hicrî
karşılığını vermedi** (bu çekişte). Kendi kuralıma göre *"yalnız yıl veren"*
sınıfa girip girmediği belirsiz — yani **bu tarih de Jülyen olabilir** ve
öyleyse Gregoryen'i `1784-01-19`. **Ölçülmedi, uyarı olarak bırakıyorum.**

---

## 32. ③ ÜÇ NOKTA AYNI GÜNDE Mİ — evet, ama **dördüncüsü 9 yıl erken**

### Sorulan kısmın cevabı
`1783-04-08` üç nokta taşıyor ve üçü de manifestonun kapsamında:
```
Bahçesaray (44.75, 33.86)  → Kırım
Kuban (Yekaterinodar)      → Kuban
Bozkır (Deşt-i Kıpçak)     → bozkır
```
TDV'nin saydığı üçlü — *"Kırım, Taman ve Kuban"* — ile örtüşüyor. **Yayılma yok.**

### 🔴 B16 — ama TDV'nin üçlüsündeki **TAMAN** başka günde
```
1774-07-21'de rusya'ya geçenler:  Kefe · Kerç · Azak · Taman · Kabartay
```
**② KAYNAK:** TDV `kucuk-kaynarca-antlasmasi`, 1774'te Rusya'ya geçenleri
sayıyor: **"Azak, Kerç, Yenikale ve Kılburun"** — *Kefe ve Taman listede YOK.*
Ve TDV `kirim`, **Taman**'ın ilhakının **1784**'te tanındığını söylüyor.

**③ HÜKÜM — ÇELİŞİYOR.** İki nokta 1774'te Rus boyanıyor:
| nokta | bizde | kaynağa göre |
|---|---|---|
| **Kefe** | `rusya` 1774-07-21'den | Küçük Kaynarca listesinde yok → hanlıkta kalmalı |
| **Taman** | `rusya` 1774-07-21'den | 1784'te tanınan üçlünün içinde → 1783'e ait |

⇒ **Kefe, Osmanlı'nın Kırım'daki sancak merkeziydi** ve haritamız onu
**9 yıl erken** Rus gösteriyor.

🟡 **Kabartay (Nalçik) ölçülmedi** — Küçük Kaynarca'da Kabartay'ın statüsü ayrı
bir maddeye bağlanmıştı; hüküm vermiyorum.

📌 Bu bulgu **③'ü sorarken çıktı** ve sorunun cevabını tersine çevirdi: üç nokta
dağılmış değil, **dördüncüsü kopmuş.**

---

## 33. 📦 TESLİM PAKETİ — Kırım + Nystad

### A) Nystad — temiz, tek nokta, bağımsız
```
Riga    s:"isvec" biter → s:"rusya" başlar
        1721-08-30  →  1721-09-10
```
✅ Çift gösterim var (*"10 September [O.S. 30 August] 1721"*) · taraf İsveç ·
`devletler.js`'te bu tarihe bağlı kayıt **yok** (ölçtüm: 0) · başka nokta
etkilenmiyor. **Tek başına uygulanabilir.**

### B) Kırım — üç dosya, birlikte gitmeli
```
data/yerlesimler.js   Bahçesaray · Kuban (Yekaterinodar) · Bozkır (Deşt-i Kıpçak)
                      s:"kirim" t: ve s:"rusya" f:   1783-04-08 → 1783-04-19
data/devletler.js     kirim  t:"1783-04-08" → "1783-04-19"      (1 kayıt, ölçüldü)
data/olaylar*.js      "1783-04"  Kırım'ın Rusya'ya ilhakı  → gün eklenebilir
```
⚠️ Kronoloji maddesi `t:"1783-04"` — **ay hassasiyetinde.** `CLAUDE.md §8` ay
hassasiyetinin gün hassasiyetli yerleşim değişimlerinden **önce sıralandığını**
ve senkronu bozduğunu söylüyor. Gün verilecekse `1783-04-19` olmalı.

### C) Ayrı karar bekleyen — pakete koymadım
```
Kefe · Taman   1774-07-21 → ?   (B16 — kaynak çelişiyor, doğru gün belirsiz)
```
Kefe/Taman'ın **hangi güne** taşınacağı ayrı bir araştırma: 1783-04-19 mu,
1784-01-08 mi, yoksa Potemkin'in Ekim 1782 işgali mi? **Ölçmedim.**

---

## 34. SIRADAKİ TUR — kendi kuyruğum

1. **1648 Hmelnitski ayaklanmasının günü** — Ukrayna/Leh kaynağından; B3'ün
   önerisi bu tarihe bağlı. **Dört turdur sırada, hâlâ yapılmadı** — bu turun
   borcu, önce o yapılacak.
2. ~~`astarhan` 90 yıllık taşması~~ → **§22'de paketlendi**, renk bekliyor.
   Açık ucu: `nogay` tarih aralığı.
3. **Hacıbey (Odessa)** — Tur 2'de fark edildi, ölçülmedi: `d:OSMANLI`
   **1538-09-01**'de başlıyor ama `s:kirim` **1441-1538** ile örtüşmüyor mu,
   ve 1792-01-09 (Yaş) tarihi Rus kaynağıyla tutuyor mu?
4. **`nogay` kimliği** — 0 pencere. TDV `kirim` *"Nogaylar'ın hana tâbiiyetleri
   gevşek"* diyor; Nogay Ordası'nın kendi sahası B11'in çözümünün parçası.
5. **Dördüncü takvim vakası aranacak** — Bahçesaray aday olmaktan çıktı (§18).
   B12 hâlâ 3 vakalı; eşik için yenisi gerek.

---

## 20. 📌 BU OTURUMUN KENDİ HATA DESENİ — üç turda üç kez

Kayda geçiyorum çünkü **üçü de aynı sınıftan** ve bir sonraki turumu bağlıyor:

| tur | ne yaptım | eksik boyut |
|---|---|---|
| 1 | Kapsamı bütün `yerlesimler*.js` üzerinden ölçtüm | **hangi dosyalar canlı** (`girdi.py`) |
| 2 | `altinorda`nın bitişine baktım, B5'i "yarım düzeltme" ilan ettim | **sonra kim alıyor** (`kirim` zinciri) |
| 3 | `s:` penceresine baktım, Saratov'u "yok" ilan ettim | **`kur:` alanı** |

Üçünde de **ölçüm yönü doğru, boyutu eksikti** — ve üçünde de düzeltme yine
ölçümden geldi, tartışmadan değil.

⇒ **Kendi kuralım:** bir kaydı ya da bir sayıyı *"yanlış"* ilan etmeden önce
şu iki soruyu sor: **(a)** hangi dosya kümesini okuyorum · **(b)** bu kaydın
başka hangi alanı bu hükmü değiştirebilir. İkisi de ucuz; ikisini atlamanın
bedeli bu turda **iki düşen iddia** oldu.

📌 Ve teselli edici olan taraf: **aynı yöntem hem hatayı üretti hem yakaladı.**
B13 (bayat blokaj) tam da düşen iddiayı ölçerken çıktı — yani yanlış iddiayı
kovalamak, doğru bulguyu getirdi.

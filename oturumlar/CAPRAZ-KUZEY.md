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

## 11. SIRADAKİ TUR — kendi kuyruğum

1. **1648 Hmelnitski ayaklanmasının günü** — Ukrayna/Leh kaynağından; B3'ün
   önerisi bu tarihe bağlı.
2. **Üçüncü takvim vakası** — B1 ve B2 bir desen kurdu; üçüncüsü hangi ucun
   (hicrî mi Jülyen mi) kaydığını söyleyecek. Aday: Bahçesaray 1681-01-11
   (bizde) ↔ 3/13 Ocak 1681.
3. **Vahşi Bozkır** — Harkov · Voronej · Rostov 1441-1502 arası gerçekten
   Kırım'ın mıydı, yoksa "kasten boş" sınıfına mı giriyor (B5).
4. **1699 Karlofça'nın dört oturumluk kesişimi** — görev tanımı §1'in kasıtlı
   örtüşmesi; Lehistan ve Rusya tarafını ben yazacağım.

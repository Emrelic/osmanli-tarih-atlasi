# "Künye var, veri BAŞKA kimlik boyuyor" — 22 künyenin taranması

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2785 ⑦ · 5 Eylül 2026
> Alet: `denetim/ARAC-ORTEN-KUNYE-0905.py` (salt okuma)
> 🔴 **KABA KUTU KULLANILDI VE DAMGALANIYOR** — künyelerde koordinat yok,
> yalnız 27 kaba `bolge`. Coğrafyayı ölçmek için **elle yazılmış
> dikdörtgenler** kullanıldı; sınırlarda taşar ya da eksik kalır ve
> tarihsel sınırları değil bugünkü coğrafî adları izler.
> ⇒ **Bu bir aday listesidir, bir hüküm değil.**

---

## SORU (sevkten birebir)
*"Bu künyenin coğrafyasında ve penceresinde, veri BAŞKA bir kimlik mi
kullanıyor? Kullanıyorsa o kimlik DOĞRU MU?"*

## KAPSAM — 41'in 22'si tarandı
41 kullanılmayan künyenin **22'si** seçildi: coğrafyası atlasta nokta
taşıdığı **bilinen** ya da `zeta` desenine benzeyen olanlar. Kalan 19
(çoğu Güney Amerika ve Kuzey Amerika yerli konfederasyonları)
**taranmadı** — `okumadım`.

## 🔴 SONUÇ: 22'sinin 22'si de "örtülüyor". ⚪ BOŞ kova: **0**.
Yani taranan künyelerin **hiçbiri** ileri dönük bir dizin kaydı değil —
hepsinin coğrafyasını atlas **bugün başka bir kimlikle boyuyor.**

---

# 🔴🔴 ASIL BULGU: BEŞİ TEK BİR SİSTEMİK SORUN

Beş künye, coğrafyasında **`tabi(v:)`** buldu — yani veri *"Osmanlı'ya
tâbi"* diyor ama **hangi tâbi olduğunu SÖYLEYEMİYOR:**

| künye | pencere | kutuda `tabi(v:)` |
|---|---|---|
| `misir-kavalali` | 1805-1914 | **53** / 57 |
| `cezayir-ocagi` | 1516-1830 | **40** / 56 |
| `trablusgarp-ocagi` | 1551-1911 | **40** / 53 |
| `tunus-ocagi` | 1574-1881 | **42** / 43 |
| `erdel` | 1570-1711 | **5** / 6 |
| | | **180 nokta-gözlemi** |

⇒ Bu **beş ayrı kusur değil, BİR tanesi**: `v:` alanı kimlik taşımıyor
(ölçüldü: 423 `v:` döneminin hiçbirinde `d:` yok). Cezayir Ocağı da
Kavalalı Mısır'ı da Erdel Prensliği de haritada **aynı jenerik tâbi**
olarak çiziliyor.

📌 **Ve bu proje bunu ZATEN BİLİYOR** — `CLAUDE.md`de M-0019/TUNA-HAVZASI
kaydı birebir şunu diyor:
> *"`erdel` kimliği bu kutuda HİÇ KULLANILMIYOR — 158 yıllık bir
> prenslik, adı olmadan jenerik 'tâbi' olarak çiziliyor."*

Yeni olan: bunun **tek bir vaka değil beş vaka** olduğu ve **180 nokta**
tuttuğu. Ve Emre'nin kendi renk ilkesi (*"statüler bir küme değil SIRALI
BİR MERDİVEN"*) tam bu boşluğu hedefliyor.
🔴 **Bu bir veri kusuru değil, bir MODEL kusuru** — ve benim kalemim değil.

---

# 🔴 SEKİZ GÜÇLÜ ADAY — ikame kimlik muhtemelen YANLIŞ

⚠️ Aşağıdaki gerekçeler **tarih bilgisinden** geliyor, bu turda
**kaynakla doğrulanmadı**. Her biri ayrıca sınanmalı.

```
① evfat            1285-1415   10 nokta → habesistan 7 · adal 2 · SAHİPSİZ 1
   İfat bir MÜSLÜMAN emirliğiydi ve Hristiyan Habeşistan'la savaş
   hâlindeydi. `habesistan` boyamak polityi TERSİNE çeviriyor.
   🔴 En güçlü adayım.

② girit-devleti    1898-1913    5 nokta → yunanistan 5
   Girit 1913'e kadar Osmanlı hükümranlığı altında ÖZERK bir devletti.
   1905 kesitinde `yunanistan` boyamak sekiz yıl erken ilhak demektir.

③ bosna-isgal      1878-1908   26 nokta → OSMANLI 15 · avusturya 11
   🔴 VERİ KENDİ İÇİNDE BÖLÜNMÜŞ: aynı bölge, aynı gün, iki kimlik.
   Hangisi doğru olursa olsun bu bir TUTARSIZLIK.

④ kutlughanli      1222-1306   10 nokta → ilhanli 9 · SAHİPSİZ 1
   Kirman'da ayrı bir hânedan; İlhanlı 1256'da kuruldu, yani pencerenin
   ilk 34 yılında İlhanlı DİYE BİR ŞEY YOK.
   📌 Bu turda kapattığım `iran` hayaletleriyle AYNI SINIF.

⑤ hersek           1435-1482    5 nokta → bosna 3 · venedik 1 · macaristan 1
   Kosača Dukalığı Bosna'dan 1435'te AYRILDI — künyenin `f:`i tam o.
   `bosna` boyamak ayrılmayı hiç göstermiyor.

⑥ makdisu-sult.    1281-1500   23 nokta → somali 20 · adal 3
   14. yüzyılda `somali` bir siyasî kimlik DEĞİL. Anakronik.

⑦ bohemya          1198-1526    2 nokta → almanya 2
   Bohemya bir KRALLIKTI. Kutsal Roma bağı var ama `almanya` değil.

⑧ sarki-rumeli     1878-1885   14 nokta → OSMANLI 11 · tabi(v:) 3
   Yine BÖLÜNMÜŞ veri, ve vilayet ÖZERKTİ.
   ⚠️ `CLAUDE.md §4`: `sarki-rumeli` TDV'de kalıcı `bulunamadı` —
   kaynak bulmak zor olacak.
```

---

# 🟡 DOKUZ AYRINTI ADAYI — ikame savunulabilir, ayrıntı kaybı var

```
mora-despotlugu → bizans 8 · venedik 5     Mora bir Bizans apanajıydı
naksa-dukaligi  → venedik 10               Dukalık Venedik kökenliydi
kibris-ingiliz  → ingiltere 6              idare İngiliz'di (hükümranlık Osmanlı)
oniki-ada-ital. → italya 11 · OSMANLI 5    işgalci doğru
polonya-erken   → lehistan 8 · almanya 3   `lehistan` aynı devlet
floransa        → toskana 1 · siena 1 · piza 1
kasim           → rusya 1                  Kasımov Moskova'nın tâbiiydi
dubrovnik       → OSMANLI 2 · venedik 1 · tabi(v:) 1
                  ⚠️ Ragusa hiç DOĞRUDAN Osmanlı olmadı — haraçgüzardı.
                  İki `OSMANLI` noktası 🔴 kovasına yakın.
zeta            → venedik 2 · sirbistan 1 · bosna 1 · SAHİPSİZ 1
                  🔴 AMA `zeta` BU TURDA ZATEN DOĞRULANDI: Leş 1356-1387
                  arasını `arnavutluk` diye boyuyordu ve yaması yazıldı.
```

---

# 🔴 KENDİ HATAM — ve bu oturumda ÖLÇTÜĞÜM bir tuzağa DÜŞTÜM

Aletin ilk sürümü `dubrovnik`i **"pencere atlas dışında"** diye sessizce
eledi. Sebep:
```python
max("700-01-01", "1281-01-01")  →  "700-01-01"     # "7" > "1"
```
**Üç haneli yıl tuzağı.** Bu oturumda daha önce ölçmüş ve *"18 künye üç
haneli yıl taşıyor"* diye kaydetmiştim — **ve kendi aletimde tekrarladım.**

⚠️ Ve tehlikesi: alet **hata vermedi**, `dubrovnik`i `ATLANAN` kovasına
koydu ve o kova okunmasaydı künye *"taranmış"* sayılacaktı.
🟢 Düzeltildi (`pad()` — yıl dört haneye tamamlanıyor) ve `dubrovnik`
ölçüldü: 4 nokta, ve **iki `OSMANLI`** çıktı. Yani düzeltme bir kova
değil, bir **bulgu** kazandırdı.
📌 `§11`in *"aletin gösterdiği ≠ dosyada yazan"* ailesi, ve bu gecenin
**ikinci** "dersi bilen taraf dersi çiğnedi" vakası.

---

# ÖLÇMEDİKLERİM
```
OKUMADIM   41'in kalan 19'unu (çoğu Amerika yerli konfederasyonu)
OLÇMEDİM   🔴/🟡 ayrımını KAYNAKLA — gerekçeler tarih bilgisinden,
           bu turda hiçbiri TDV'ye ya da akademik kaynağa sorulmadı
OLÇMEDİM   kutuların doğruluğunu — elle yazıldı, sınanmadı
OLÇMEDİM   `trablusgarp-ocagi` kutusundaki 12 SAHİPSİZ noktayı —
           muhtemelen `kasitli_bosluk` çöl dolgusu ama BAKMADIM
OLÇMEDİM   tek kesit dışında hiçbir tarihi — her künye için pencerenin
           ORTASINDAN TEK BİR GÜN örneklendi. Pencere içinde kimlik
           değişiyorsa göremem.
```

🔴 **Son satır aletin en büyük sınırı:** `cezayir-ocagi` 314 yıl sürüyor
ve ben **tek bir günü** (1673-06-15) ölçtüm. *"Temiz çıkan bir örneklem,
örneklemin dışını temiz ilan etmez"* — burada tersi de geçerli: **kirli
çıkan bir örneklem de pencerenin tamamı hakkında konuşmaz.**

---

## TESLİM — sayıyla
```
taranan          22 künye (41'in 22'si)
🔴 örtülüyor     22 · ⚪ boş 0 · atlanan 0
   ├─ SİSTEMİK    5 künye · 180 nokta · TEK sebep (`v:` kimlik taşımıyor)
   ├─ güçlü aday  8 künye
   └─ ayrıntı     9 künye
kaynakla doğrulanan  0  ← bu tur ÖLÇÜM turuydu, doğrulama turu DEĞİL
alette bulunan kusur 1 (üç haneli yıl) — düzeltildi, bir bulgu kazandırdı
```


---

# 🔴🔴 DÜZELTME — BULGU ③ YANLIŞTI, VE SEBEBİ BENİM ALETİMDİ
*(aynı gün, sevk M-2788 ⑤ üzerine ölçüldü)*

## Ne demiştim
> *"③ `bosna-isgal` 26 nokta → OSMANLI 15 · avusturya 11 · 🔴 **VERİ
> KENDİ İÇİNDE BÖLÜNMÜŞ**: aynı bölge, aynı gün, iki kimlik. Hangisi
> doğru olursa olsun bu bir TUTARSIZLIK."*

## Gerçek — ve tam tersi
```
Saraybosna · Mostar · Banaluka …  (15 nokta)
   d:   1448-01-01 → 1908-10-05
   isg: 1878-07-29 → 1908-10-05   avusturya
```
🟢 **Veri ZATEN doğru ve ZATEN Kahire desenini kullanıyor** — hem de
sevkin ⓐ şıkkında tartışmaya açtığı **fiilî işgal günüyle** (07-29),
Berlin Antlaşması günüyle değil. Yani sormaya hazırlandığım soru
**veride çoktan cevaplanmış.**

Kalan 11 `avusturya` noktası Bosna **değil**: Brač gibi **Dalmaçya**
noktaları, `s:1797-10-17`den beri Avusturyalı — ve **doğru.**

## İKİ AYRI KUSUR, İKİSİ DE BENDE
```
① ALET KÖRLÜĞÜ  `sahip()` eşleşen İLK alanı döndürüp gerisini YUTUYORDU.
                `isg:` alanını HİÇ okumuyordu ⇒ `d:OSMANLI + isg:avusturya`
                taşıyan 15 noktayı düpedüz "OSMANLI" diye raporladı.
② KABA KUTU     Bosna kutusu Dalmaçya kıyısını da içine alıyordu.
```
⚠️ ②'yi **damgalamıştım** (*"kaba kutu, çıktı bir aday listesidir"*).
🔴 **①'i damgalamamıştım** — ve asıl zararı o verdi. Bir aleti
*"kaba"* diye damgalamak, onun **kör** olduğunu söylemez.

## Ve tehlikesi ölçülebilir cinstendi
Bu yanlış bulgu bir sevke dönüştü, koordinatör onu doğruladı ve bana
*"yamayı yaz"* dedi. **Yazsaydım, doğru veriyi bozacaktım** — hem de
*"tutarsızlığı düzelttim"* raporuyla.
📌 `§11`: *"aracın söylediğini yapmadan önce aracın ne ölçtüğünü anla."*
Ve bir kademe ötesi: ***kendi yazdığın aracın söylediğini yapmadan önce
de.***

## `sarki-rumeli` de aynı — ve onu VERİNİN KENDİ İMZASIYLA ölçtüm
Kutuyla değil, `v: 1878-07-13 → 1885-09-18` dönemini **arayarak**:
```
Filibe (BAŞKENT) · Eski Zağra · Tatarpazarcığı      → 3 nokta, DOĞRU
```
Kutumdaki öteki 11 nokta (Edirne · Kırklareli · Havsa · Lalapaşa ·
Kofçaz · Dereköy · Mustafapaşa · Orestiada · Çirmen · Kırcaali ·
Elhova) **Şarkî Rumeli'de değildi** — Edirne vilâyetindeydiler ve
`d:OSMANLI` olmaları **doğru.**

⇒ Veri Şarkî Rumeli'yi **zaten ifade ediyor.** Eksik olan tek şey `v:`
alanının **adı taşımaması** — ki o, Emre'ye çoktan gitmiş olan `v:`
kimlik meselesinin **ta kendisi**, ayrı bir kusur değil.

---

# ⇒ HÜKÜM: BU İKİ KALEM İÇİN YAMA YAZILMAYACAK
```
bosna-isgal    🟢 veri DOĞRU (15 nokta, isg: deseni, fiilî gün)
sarki-rumeli   🟢 veri DOĞRU (3 nokta, v: deseni)
kalan fark     ikisinde de yalnız KÜNYE ADI kullanılmıyor —
               ve sebebi `v:`/`isg:` kimlik meselesi, veri kusuru değil
```

🟡 **Tek gerçek açık kalem — ve küçük:** ilhak günü **üç yerde üç
farklı:**
```
veri    1908-10-05      künye bosna-isgal  1908-10-06      TDV  1908-10-07
```
Üçünün de bir dayanağı olabilir (Franz Joseph'in imzası · tarihlenişi ·
ilânı). **ÖLÇTÜM, KARAR VERMEDİM** — bir gün seçmek için üç kaynağın
hangisinin neyi tarif ettiğini bilmek gerekir ve ben bakmadım.

## VE ÖTEKİ BULGULARIM DA YENİDEN OKUNMALI
Alet düzeltildi (`sahip()` artık bileşik durum döndürüyor) ve tarama
tekrarlandı. `bosna-isgal` dışındaki 21 künyenin sayıları **değişmedi**
— çünkü kesit günlerinde `isg:` örtüsü yoktu. Ama bu bir **şans**:
`kibris-ingiliz` · `misir-kavalali` · `oniki-ada-italyan` üçü de `isg:`
kullanan coğrafyalar ve **başka bir kesit günü seçseydim aynı hatayı
orada da yapardım.**


---

# İKİNCİ OKUMA — düzeltilmiş aletle, ÜÇ kesit günüyle
*(sevk `1.MURAT` M-2794 ⑤ · aynı gün)*

Alet iki yerden düzeltildi ve tarama tekrarlandı:
```
① sahip()   artık BİLEŞİK durum döndürüyor (`isg:` dâhil, `+` ile)
② kesitler() TEK gün yerine ÜÇ gün: pencere BAŞI · ORTASI · SONU
```

## 🔴 SONUÇ ①: 22 künyenin **11'inde** kesitler arası FARK var
Yani **yarısında** tek gün örnekleme gerçek bir değişimi kaçırıyordu.
```
cezayir-ocagi · dubrovnik · floransa · hersek · kasim · misir-kavalali
mora-despotlugu · naksa-dukaligi · polonya-erken · trablusgarp-ocagi
tunus-ocagi · zeta
```
Bu, ilk raporda **kendi yazdığım sınırın ölçülmüş hâli** — o zaman bir
endişeydi, şimdi bir sayı.

## 🔴 SONUÇ ②: ÖNGÖRDÜĞÜM KÖRLÜK GERÇEKTEN ORADAYDI
İlk raporda şöyle yazmıştım: *"`kibris-ingiliz` · `misir-kavalali` ·
`oniki-ada-italyan` üçü de `isg:` kullanan coğrafyalar ve başka bir
kesit günü seçseydim aynı hatayı orada da yapardım."*
**Ölçüldü — `misir-kavalali`de birebir çıktı:**
```
1806-06-15   tabi(v:) 52 · SAHİPSİZ 3 · OSMANLI 2
1859-06-15   tabi(v:) 53 · OSMANLI 2            ← İLK RAPORUN KESİTİ
1913-06-15   tabi(v:)+isg:ingiltere 53          ← KÖRLÜĞÜN GÖRÜNDÜĞÜ YER
```
İlk kesitim (1859) İngiliz işgalinden **23 yıl önceydi**; körlük orada
görünemezdi. Tesadüfen doğru çıkmıştım.

---

# 🟢 YENİ ÖLÇÜM — `isg:` NEREYE BİNİYOR (bugüne kadar hiç ölçülmedi)

98 `isg:` döneminin tamamı, her birinin **kendi orta günü** örneklenerek:
```
tabi(v:) + isg:      59
OSMANLI  + isg:      39
                     ──
                     98
s:<yabancı> + isg:    0     ← 🔴 SIFIR
```

⇒ ***`isg:` YALNIZCA Osmanlı toprağının (doğrudan ya da tâbi) üzerine
biniyor. Bir yabancı devletin toprağı üzerine HİÇ binmiyor.***

Bu bir kusur değil, **ölçülmemiş bir kısıt**: atlas bir Osmanlı
atlası olduğu için işgal örtüsü de yalnız Osmanlı gövdesi için
üretilmiş. Ama şimdi **sayıyla** biliniyor, ve bir sonraki oturum
*"Fransa'nın işgal ettiği bir yeri `isg:` ile yazayım"* dediğinde
bunun **emsalsiz** olduğunu görecek.

---

# ÖNCEKİ KOVALARIN DURUMU — hangileri DEĞİŞTİ

## 🔴 İKİSİ ÇÜRÜDÜ (yukarıdaki DÜZELTME bölümü)
```
③ bosna-isgal    üç kesitte de `OSMANLI+isg:avusturya` 15 — ZATEN DOĞRU
⑧ sarki-rumeli   üç kesitte de `OSMANLI 11 · tabi(v:) 3` — ZATEN DOĞRU
                 (o 11, Edirne vilâyeti noktaları; kutu hatası)
```

## 🟢 BEŞİ AYAKTA — ve üç kesitte de STABİL, yani iddia GÜÇLENDİ
```
① evfat        1286 · 1350 · 1414  →  habesistan 7 · adal 2   DEĞİŞMİYOR
④ kutlughanli  1282 · 1293 · 1305  →  ilhanli 9               DEĞİŞMİYOR
⑥ makdisu      1282 · 1390 · 1499  →  somali 20 · adal 3      DEĞİŞMİYOR
② girit-devleti 1899 · 1905 · 1912 →  yunanistan 5            DEĞİŞMİYOR
⑦ bohemya      1282 · 1403 · 1525  →  almanya 2               DEĞİŞMİYOR
```
⚠️ **"Stabil" ≠ "doğru".** Burada stabillik, ikame kimliğin pencerenin
**tamamında** kullanıldığını gösteriyor — yani ezilme **kısmî değil
tam.** ①④ için kaynak zaten bunun bir **tâbiiyet ezilmesi** olduğunu
gösterdi (`BULGU-ORTEN-KAYNAK-0905.md`).

## 🟡 BİRİ KISMEN İFADE EDİLİYORMUŞ
```
⑤ hersek   1436 · 1458  →  bosna 3 · venedik 1 · macaristan 1
           1481         →  OSMANLI 2 · bosna 1 · venedik 1 · tabi(v:) 1
```
Son kesitte Osmanlı fethi **görünüyor** (TDV: sancak 1470, kalanı 1482).
Yani veri fethi biliyor, bilmediği yalnızca **1435-1470 arası ayrı
dukalık.** İddia daralıyor ama düşmüyor.

## 🔴 VE "180 NOKTA-GÖZLEMİ" SAYIM BİR GÜNÜN SAYISIYDI
İlk raporun manşeti beş künyede **180 `tabi(v:)`** diyordu. Üç kesitle
bakınca o sayı **pencerenin ortasına** ait çıkıyor:
```
cezayir-ocagi     1517 zeyyani 39 · hafsi 10   │ 1673 tabi(v:) 40 │ 1829 tabi(v:) 50
tunus-ocagi       1575 OSMANLI 42              │ 1727 tabi(v:) 42 │ 1880 tabi(v:) 36
trablusgarp-ocagi 1552 OSMANLI 27 · hafsi 13   │ 1731 tabi(v:) 40 │ 1910 OSMANLI 40
erdel             1571 tabi(v:) 5              │ 1640 tabi(v:) 5  │ 1710 avusturya 5
```
⇒ Manşet **yanlış değil ama dar**: `tabi(v:)` gerçekten Ocak dönemini
kaplıyor, fakat pencerelerin uçlarında **fetih öncesi devletler** ve
**doğrudan Osmanlı** var. Ocaklar bir devletin bütün ömrü değil, bir
**evresi** — ve veri o evreyi doğru yerde gösteriyor.
🟢 Bu, `v:` bulgusunu **zayıflatmıyor**: ortadaki evrede kimliğin
kaybolması hâlâ gerçek. Ama *"180 nokta"* sayısı bir **gün** sayısıdır,
bir **pencere** sayısı değil — ve öyle raporlanmalıydı.

---

## BU OKUMADA ÖLÇMEDİKLERİM
```
ÖLÇMEDİM   üç kesitin YETERLİ olduğunu — `trablusgarp-ocagi` 360 yıl
           sürüyor ve hâlâ 3 gün örnekliyorum. Üç, birden iyidir;
           yeterli olduğunu göstermez.
ÖLÇMEDİM   kutuları — hâlâ elle yazılı ve hâlâ sınanmadı. `bosna-isgal`
           vakası kutunun YANLIŞ OLABİLECEĞİNİ gösterdi (Dalmaçya),
           ötekiler için AYNI KONTROL YAPILMADI.
OKUMADIM   41'in kalan 19'unu
```
🔴 **İkinci satır önemli:** `bosna-isgal`de kutu hatası bir yanlış bulgu
üretti ve yakalandı. **Öteki 21 kutunun hiçbiri aynı gözle
denetlenmedi** — yani bu raporun geri kalanında da bir kutu hatası
olabilir ve onu ölçmedim.


---

# KUTU DENETİMİ — 22 kutunun tamamı gözle okundu
*(sevk `1.MURAT` M-2797 ⑤ · aynı gün)*

Her kutuya düşen noktaların **adları basıldı** ve üç soru soruldu:
(a) bu ad gerçekten o coğrafyada mı? (b) kutu komşu bölgeye taşıyor mu?
(c) kutu künyenin coğrafyasını tam kapsıyor mu?

## 🔴 SONUÇ: 22 kutunun **16'sı KİRLİ**. Temiz olan 6.

```
🟢 TEMİZ (6)
   girit-devleti     5 nokta, hepsi Girit
   kibris-ingiliz    6 nokta, hepsi Kıbrıs
   kasim             1 nokta (Kasimov)
   naksa-dukaligi    10 nokta, hepsi Kiklad ve hepsi dukalık içinde
   zeta              5 nokta (Cetinje · Kotor · Podgorica · İşkodra · Herceg Novi)
   floransa          3 nokta — Pisa 1406'dan Floransalı, Siena 1555'e kadar
                     BAĞIMSIZ; sınırda ama savunulabilir
```

```
🔴 KİRLİ (16) — ve taşan yerler
   cezayir-ocagi      🔴🔴 ÜÇ ülkeye taşıyor: İSPANYA (Almería · Mojácar) ·
                      TUNUS (Kef · Kafsa · Tozer · Nefta · Tabarka · Kasrayn ·
                      Cendûbe · Tebesse …) · FAS (Fîgîg · Vecde/Oujda)
   tunus-ocagi        Cezayir (Annaba · Sûk Ahrâs · Tebesse) · Libya (Nâlût ·
                      Sinâvin · Derc · Ğadâmis)
   trablusgarp-ocagi  Cezayir (Tâsîlî n'Accer · Cânet/Djanet) · Tunus (Tatavin)
   oniki-ada-italyan  🔴 ANADOLU ANAKARASI: Bodrum · Datça · Marmaris · Milas ·
                      Balat — "OSMANLI 5" bulgusu BUNLARDI ve DOĞRULAR
   polonya-erken      Prusya (Gdansk · Elbing · Torun) · Litvanya
                      (Brest-Litovsk · Grodno · Białystok)
   erdel              🔴 BOĞDAN: Suçava (Suceava) — Erdel değil Moldavya
   evfat              Adal/Harar (Harar · Dire Dava) · Cibuti (Dikhil) ·
                      Ogaden (Gode · Kelâfo)
   makdisu-sult.      🔴 iç Somali/Ogaden: Gode · Baydoa · Hudur · Luuk ·
                      Bardere · Diinsoor · Dolo Odo · Garbahârey
   kutlughanli        Yezd (ayrı vilâyet) · Lâr (Lâristan) · Bender Abbas ·
                      Mînâb (Hürmüz kıyısı) · Dârâb (Fars)
   bohemya            🔴 REGENSBURG BAVYERA'DIR — iki noktanın biri
   hersek             Dubrovnik · Mliyet — ikisi de RAGUSA
   dubrovnik          Trebinye · Herseknovi — ikisi de HERSEK
   mora-despotlugu    Attika/Boiotia: Kulluk (Salamis) · İstefe (Tebai) ·
                      Egina · İnebahtı — Mora değil
   misir-kavalali     Filistin (Gazze · Han Yûnus)
   bosna-isgal        DALMAÇYA (zaten bildirildi)
   sarki-rumeli       EDİRNE VİLÂYETİ (zaten bildirildi)
```

---

# 🟢 VE SEKİZ "GÜÇLÜ ADAY"IN BEŞİ YENİDEN ÖLÇÜLDÜ — kutu yerine AD KÜMESİ

Damgalamakla yetinmedim: kirli kutulu beş adayı, coğrafyada **adı adı
seçilmiş** kümelerle yeniden ölçtüm.
🔴 **Küme benim coğrafya hükmümdür, bir kaynak değil** — kutudan dar ve
daha savunulabilir, ama yine de bir hüküm.

```
künye              kutu → küme    üç kesitte de
──────────────────────────────────────────────────────────
evfat              10 →  6        habesistan 6      DEĞİŞMİYOR
kutlughanli        10 →  5        ilhanli 5         DEĞİŞMİYOR
makdisu-sultanligi 23 →  5        somali 5          DEĞİŞMİYOR
bohemya             2 →  1        almanya 1         DEĞİŞMİYOR
hersek              5 →  3        bosna 3 · 1481'de OSMANLI 2 · bosna 1
```

## ⇒ HÜKÜM: BEŞİ DE AYAKTA — ama SAYILARI ŞİŞMİŞTİ
**Kirlenme bulguyu ÜRETMEDİ, sayısını BÜYÜTTÜ.** İkame kimlik, coğrafyada
gerçekten olan noktaların **tamamında** kullanılıyor.
🔴 En büyük düzeltme `makdisu`: **23 → 5.** Manşetim dört kat şişikti.

📌 Ve bu ayrım önemli: bir kutu hatası **iki** şey yapabilir —
```
BULGUYU UYDURUR       (bosna-isgal: Dalmaçya noktaları "bölünme" gösterdi)
BULGUYU ŞİŞİRİR       (makdisu: 18 fazladan nokta sayıya girdi)
```
İlkinde bulgu **ölür**, ikincisinde **küçülür.** İkisini ayırmadan
*"kutu kirli"* demek, ölen ile küçüleni aynı kovaya koyar.

---

# 🔴 BU DENETİMİN KENDİ SINIRI — ve ölçmedim

**Yalnız GENİŞ kutuyu aradım, DAR kutuyu aramadım.**
```
GENİŞ kutu → YANLIŞ POZİTİF   (coğrafyada olmayan nokta sayıldı)  ← BUNU BULDUM
DAR   kutu → YANLIŞ NEGATİF   (coğrafyada olan nokta KAÇTI)       ← BAKMADIM
```
Dar kutuyu bulmak için künyenin **gerçek sınırlarını** bilmek gerekir; ben
yalnız *"kutuya düşen adlar oraya ait mi"* diye sordum, *"oraya ait olup
kutuya düşmeyen var mı"* diye **sormadım.**
⚠️ Yani `⚪ BOŞ kova: 0` sonucu hâlâ ölçülmemiş bir varsayıma dayanıyor:
kutular dar olsaydı bazı künyeler **haksız yere** "örtülüyor" değil "boş"
görünebilirdi — ama tersi de mümkün ve **ikisini de ölçmedim.**

📌 Ve `oniki-ada-italyan` bunun bir emsali: kutu Anadolu anakarasına
taşıyordu (yanlış pozitif) **ve** Dodekanez'in kuzey adalarını
(Rodos'un kuzeyi) kapsıyor mu, ona **bakmadım.**

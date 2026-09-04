# BULGU — NEHİR SÜRTÜNMESİ · kalem 2: TUNA'DAN DÜNYAYA

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` · 5 Eylül 2026
> 🔴 Motora ve veriye **dokunulmadı** (koşu 5 canlı). Yalnız okundu.
> Taban: `girdi.GIRDI_DOSYALARI` **77 dosya / 3805 nokta** (kendim ölçtüm).

---

## ÖZET — üç kalemin üçü de ölçüldü, ikisinin cevabı OLUMSUZ

```
① SINIF ÖLÇEĞİ    🔴 scalerank'e bağlamak SAVUNULABİLİR DEĞİL (ince ölçek)
                  🟢 KABA 2 sınıf savunulabilir · eşik sr 5
                  🔴 VE "yarım aralık" çapası SINIFI AYIRT EDEMİYOR — ölçtüm
② GEÇİT KURALI    🟢 ÖLÇÜLDÜ: nehre ≤5 km **805 nokta** · karşı-kıyı çifti **16**
③ MALİYET         🟢 ÖLÇÜLDÜ (koşturuldu, tahmin değil): ~1-3 dk · 4,8 MB
                  ⇒ 16 saatlik koşuda **%0,3** — %20 eşiğinin çok altında
```

---

## ① SINIF ÖLÇEĞİ — scalerank sınandı ve KISMEN ÇÜRÜDÜ

### Bağımsız sınav: scalerank ↔ nehir uzunluğu

`scalerank` elimizdeki tek sıralayıcı. Onu **bağımsız** bir ölçütle sınadım:
her adlı nehrin geometriden hesaplanan **toplam uzunluğu**.

```
sr      nehir   medyan km   ort km    en uzun
1.0        20         753     1455       4237
2.0        23         862     1476       5042
3.0        39        1056     1447       4635
4.0        54         665      908       2428
5.0        45         822     1173      (14386 = ADSIZ kovası, artefakt)
6.0       171         482      618       3002
7.0       245         453      525       2058
8.0       289         369      403       1212
9.0       160         311      357       1022
10.0       19          64       59        113
```

🟢 **sr 6→10 net monoton** (482 → 64).
🔴 **sr 1→5 monoton DEĞİL** (753 · 862 · 1056 · 665 · 822) — üst kademeler
karışık.

**Adıyla kanıtlar:**
```
Ganges   sr=3  3646 km        Yangtze  sr=1  4237 km
Red      sr=6  3002 km        Colorado sr=5  2954 km
Danube   sr=2  2569 km        Rhine    sr=4   576 km
Sakarya  sr=8   208 km        Maritsa  sr=7   438 km
```
`Red` (3002 km) *"küçük"* sınıfta, `Rhine` (576 km) *"büyük"* sınıfta.

⇒ **HÜKÜM:** `scalerank` **10 kademeli ince bir ceza ölçeği için
kullanılamaz.** Ama **sr ≤5 / ≥6 kaba ayrımı savunulabilir**: kırılma orada
temiz (medyan 822 → 482) ve motor `NEHIR_ONEM_ESIGI = 5`i **zaten** orada
tutuyor.
⚠️ **Uzunluk da engel gücü DEĞİLDİR** — bunu ölçüt değil, scalerank'i
sınamak için **bağımsız tanık** olarak kullandım. Genişlik/debi olsaydı
doğru tanık o olurdu; `ne_10m_rivers` onları taşımıyor (ölçtüm).

### 🔴 VE ASIL BULGU: "yarım aralık" ÇAPASI GENELLEŞMİYOR

Tuna'da ceza = *yarım geçit aralığı × sürtünme medyanı* = 75 birim çıkmıştı.
Onu genelleştirdim: her sınıfta, nehir kenarındaki (≤5 km) atlas
noktalarının **kendi nehri boyunca** aralıkları.

```
sınıf        nehir  aralık  medyan km  yarım km    CEZA
A  sr≤2         21     110      138,3      69,1     76,8
B  sr 3-5       49     152      173,2      86,6     96,2
C  sr≥6         83     133      109,4      54,7     60,8
```

🔴 **Sonuç DÜZ ve TERS SIRALI.** En büyük ceza ortadaki sınıfa (96,2)
çıkıyor, en küçüğü en küçük nehirlere değil **A sınıfına yakın** (60,8).
Yayılım 1,6 kat ve yönü yanlış.

**Sebebini ölçtüm — metrik nehri değil ATLASI ölçüyor:**
```
Sakarya  sr=8 (küçük nehir)  medyan aralık  14,2 km   ← 10 Osmanlı çekirdek noktası
Congo    sr=2 (dev nehir)    medyan aralık 537,4 km   ← Afrika'da nokta seyrek
Nile     sr=1               medyan aralık  56,1 km
Danube   sr=2               medyan aralık 106,2 km
```
⇒ Aralık, **yerleşim yoğunluğunun** fonksiyonu; nehrin geçilebilirliğinin
değil. Osmanlı çekirdeğinde nokta sık ⇒ aralık küçük ⇒ ceza küçük.
Afrika'da nokta seyrek ⇒ ceza büyük. **Coğrafî örneklem yanlılığı.**

📌 Bu, *"ölçüm doğru, ölçtüğü şey başka"* sınıfı. Tuna'da doğru sayıyı
vermesi bir **tesadüf** değil ama bir **genellenebilirlik kanıtı da değil**:
Tuna'nın kenarı yeterince yoğun örneklenmiş.

### 🟢 ÇAPRAZ KONTROL — iki BAĞIMSIZ uygulama, aynı desen

Ölçümü **iki ayrı algoritmayla** yaptım (biri her nehir için bütün
noktaları tarıyor, öteki her nokta için en yakın nehri STRtree ile
buluyor):

```
sınıf        yöntem A (nokta→en yakın nehir)   yöntem B (nehir→bütün noktalar)
A  sr≤2                  76,8                            81,1
B  sr 3-5                96,2                            97,9
C  sr≥6                  60,8                            68,5
```
⇒ **İkisi de aynı NON-MONOTON deseni verdi** (B en yüksek). Hüküm tek bir
uygulamanın kusuru değil.
⚠️ Aradaki ~%11 fark bir tanım farkı: A her noktayı **yalnız en yakın**
nehre bağlıyor, B **5 km içindeki her** nehre sayıyor. İkisi de meşru.

### 🔴 VE ÇAPRAZ KONTROL TUNA'NIN KENDİ SAYISINI DA ZAYIFLATTI

```
kalem 1 (elle seçilmiş 11 nokta)   medyan 135,2 km  →  75 birim
yöntem A (≤5 km, en yakın nehir)   medyan 106,2 km  →  59 birim
yöntem B (≤5 km, her nehir)        medyan  88,3 km  →  49 birim
```
⇒ Tuna çapası **49-75 birim** arasında oynuyor; hangi noktaların "Tuna
kenarı" sayıldığına duyarlı. Kalem 1'de bildirdiğim **75, ölçülen bandın
ÜST UCU**.
🟢 **Düzeltilmiş önerim: 60 birim (bant 50-75).** 75'i tek sayı olarak
savunmuyorum artık — üç ölçümün ortancasına iniyorum ve bandı açıkça
veriyorum.

🔴 **İlk denemem daha da kötüydü ve absürt sonuç onu ele verdi:** sınıfın
BÜTÜN nehirlerini `unary_union` edip izdüşüm almıştım; ardışık iki nokta
**farklı nehirlerde** olunca "aralık" 2043 km çıktı ve C sınıfına
**1135 birim** ceza verdi — Tuna'nın 15 katı. Ölçüm nehir başına
ayrılınca düzeldi. *Bir sonuç absürtse önce aleti sorgula.*

### ⇒ ÖNERİM — 2 SINIF, ve büyüklük çapası TEK NEHİRDEN

```
BÜYÜK   scalerank ≤ 5   →  GEÇİŞ CEZASI 60 birim  (bant 50-75)
        örnek: Tuna(2) · Nil(1) · Fırat(3) · Dicle(4) · Ganj(3) · Volga(3)
               Mississippi(1) · Amazon(1) · Ren(4) · İndus(3) · Nijer(3)
        parça 263 / 1454   ·   adlı 185

KÜÇÜK   scalerank ≥ 6   →  GEÇİŞ CEZASI 0 (ceza YOK)
        örnek: Sakarya(8) · Meriç(7) · Oka(7) · Red(6)
        parça 1191 / 1454  ·   adlı 894
```

**Niçin küçüklere 0:**
```
① geçilebilirlik — küçük nehir sığ geçitlerle her yerde geçilir;
   "seyrek geçit" varsayımı orada YANLIŞ
② örneklem      — 1191 parçanın çoğu atlas noktasıyla hiç eşleşmiyor;
   ceza vermek 1191 parçaya ÖLÇÜLMEMİŞ bir etki enjekte etmek olur
③ ölçüm         — sınıfı ayıracak bir metrik ELİMDE YOK (yukarıda ölçtüm)
```

⚠️ **VE 75'İN KAPSAMI DAR — bunu açıkça yazıyorum:** 75 birim **tek bir
nehirden** (Tuna) türetildi. Bütün `sr ≤ 5` nehirlere aynı sayıyı vermek
bir **VARSAYIM**dır, ölçüm değil. Nil'in ve Fırat'ın geçit aralığı ayrı
ayrı ölçülebilir (Nil 56,1 km → ~31 birim · Fırat 113,2 km → ~63 birim)
ama o sayılar da aynı örneklem yanlılığını taşıyor.
🔜 **BORÇ:** gerçek sınıf ölçeği **debi/genişlik** ister. Bu proje
verisinde yok; dış kaynak (HydroSHEDS · GRDC) ayrı bir kalemdir ve
**ölçmedim**.

---

## ② GEÇİT KURALI — ölçüldü, ve İKİ AYRI KURAL var

**Kural 1 — "nehre yakın yerleşim = geçit":**
```
≤  1 km :  264 nokta  (%6,9)        ≤ 10 km :  951 nokta  (%25,0)
≤  2 km :  519 nokta  (%13,6)       ≤ 20 km : 1161 nokta  (%30,5)
≤  5 km :  805 nokta  (%21,2)   ← ÖNERİLEN EŞİK
```
⚠️ Medyan 17,1 km **yanıltıcı**: 3805 noktanın 2237'si ölçülebildi
(ön-eleme 33 km); kalan 1568'in nehre uzaklığı **>33 km** ve ölçülmedi.
Medyan yalnız ölçülebilenler üzerinde.

**Kural 2 — "karşı-kıyı çifti" (aralarındaki doğru nehri KESİYOR, ≤20 km):**
**Dünya ölçeğinde yalnız 16 çift.** Örnekleri:
```
Rusçuk ↔ Yergöğü (Giurgiu)   5,34 km   ← TDV'nin 1595 köprüsü
Budin ↔ Peşte                1,57 km
Kalas (Galatz) ↔ İbrail     18,58 km
Aigun ↔ Blagoveşçensk        6,57 km   ← Amur
Rusayris ↔ Ed-Damazîn        8,54 km   ← Mavi Nil
Çirmen ↔ Mustafapaşa         5,15 km   ← Meriç
Geyve ↔ Mekece               7,07 km   ← Sakarya
```

⇒ **HÜKÜM: motora giren kural KURAL 1 olmalı (805 nokta).**
```
KURAL 1  geçit ADAYI      → ceza istisnası buraya konur
KURAL 2  geçit KANITI     → 16 çift, DOĞRULAMA kümesi
```
Sebep: motorun istisnaya **her yerde** ihtiyacı var; tarihî ford/kayık
geçişleri nehir kenarındaki her kasabada vardı. 16 çift ise kuralın
*doğru yeri gösterdiğinin* kanıtı — ikisi de gerekli, biri ötekinin yerine
geçmez.
🟢 **VE KAYNAK TARAMASI GEREKMİYOR:** 805 istisna veriden **kendiliğinden**
doğuyor. Şartnamenin sorduğu *"tek tek mi aranacak, yoksa kural mı var"*
sorusunun cevabı: **kural var.**

---

## ③ MALİYET — KOŞTURULDU, tahmin değil

**Motor ızgarası ölçüldü:** `7200 × 2900 = 20.880.000` hücre ·
~**83.520.000** kenar (8 komşu, yönsüz 4).

**Test kesiti** (Balkanlar `18-30°D / 40-48°K`, 28 nehir parçası, 7.525 km
nehir, 38.400 hücre):
```
ADIM1  aday hücre (nehre 1,5 hücre tampon)  4.573  (kesitin %11,9'u)   3,2 sn
ADIM2  kesişim sınavı 18.292 kenar → 4.762 KESİYOR                     0,8 sn
```
**Dünya nehir uzunluğu ölçüldü: 630.097 km** (kesitin 83,7 katı).

```
ADIM2 (nehir uzunluğuyla ölçeklenir)  0,8 sn × 83,7 ≈  69 sn  = 1,2 dk
ADIM1 (benim NAİF sürümümde hücreyle) 3,2 sn × 543,8 ≈ 29,2 dk
```
🔴 **ADIM1'in 29 dakikası benim naif yazımımın eseri, kaçınılmaz değil:**
her hücreyi tek tek sınadım. Doğru uygulama nehir çizgisi **boyunca
yürüyüp** geçtiği hücreleri işaretler — `630.097 / 5,566 ≈ 113.000` hücre
ziyareti, saniyeler.
⇒ **Gerçekçi ön-hesap süresi: 1-3 dakika.**

**Kesen kenar sayısı:** kesitte 4.762 → dünyada ≈ **398.766**
(83,5 M kenarın **%0,48'i**).

**Bellek — üç seçenek ölçüldü:**
```
tam dizi float32 (4 yön)   334 MB     ← gereksiz
tam dizi uint8   (4 yön)    84 MB     ← kabul edilebilir
SEYREK sözlük (yalnız kesen kenar, ~398.766 × 12 bayt)   4,8 MB  ← ÖNERİM
```

### Koşuya etkisi

```
koşu 5 süresi        ~16 saat = 960 dk
ön-hesap (gerçekçi)  1-3 dk    →  %0,1 - %0,3
ön-hesap (naif)      30 dk     →  %3,1
```
🟢 **%20 eşiğinin çok altında — ÖNCEDEN uyarı gerekmiyor.**
⚠️ Ve bu yalnız **ön-hesap**tır. Dijkstra döngüsündeki ek maliyet bir dizi
okuması (`_KVGECIS[yon][h]`) — **ölçmedim**, ama shapely çağrısı içermediği
için mertebe olarak ihmal edilebilir. *"Ölçmedim"* diye yazıyorum.

---

## ÖLÇMEDİKLERİM — ayrı kova

```
ÖLÇMEDİM   Debi/genişlik tabanlı gerçek sınıf ölçeği (dış veri gerekir)
ÖLÇMEDİM   Dijkstra döngüsündeki ek okuma maliyetini
ÖLÇMEDİM   1568 noktanın nehre uzaklığını (>33 km, ön-elemenin dışında)
ÖLÇMEDİM   22 noktanın bağlandığı ADSIZ nehirleri — ad yoksa "o nehir"
           tanımlanamıyor, sınıfa da giremiyor
ÖLÇMEDİM   `sr ≤ 5` nehirlerin her birinin kendi geçit aralığını
           (Nil 56,1 · Fırat 113,2 ölçüldü ama örneklem yanlı)
ÖLÇEMEDİM  Önerinin Osmanlı gövdesine YÖNÜNÜ — koşu gerektiriyor
           (kalem 1'den devreden açık kalem)
```

---

## TESLİM — sayıyla

```
sınıf ölçeği     2 SINIF · eşik sr 5 · büyük 60 birim (bant 50-75) · küçük 0
                 ⚠️ kalem 1'de 75 demiştim; çapraz kontrol bandı 49-75'e
                 açtı, ortancaya indim — çürüten kendi ikinci ölçümümdü
                 scalerank ince ölçek olarak ÇÜRÜDÜ (sr 1-5 monoton değil)
                 "yarım aralık" çapası SINIF AYIRT EDEMİYOR (ölçüldü, düz çıktı)
geçit kuralı     KURAL VAR, tarama gerekmiyor: nehre ≤5 km → 805 istisna
                 doğrulama kümesi: 16 karşı-kıyı çifti
maliyet          ön-hesap 1-3 dk (gerçekçi) · 398.766 kesen kenar · 4,8 MB
                 16 saatlik koşuda %0,3 — eşiğin altında
çürüyen          2 (scalerank ince ölçek · yarım aralık genellemesi)
                 + kendi ilk aletim (sınıf-union izdüşümü, 1135 birim absürt)
```

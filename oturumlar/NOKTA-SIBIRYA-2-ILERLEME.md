<!-- DURUM: CALISIYORUM | 2026-08-16 | ek31 acildi: 2 nokta (Abalak · Kizil-Tura) · asil urun OLCUM: Degismez 5c'yi doguran 10 nokta · kendi denetimim 4 hata yakaladi ve DUZELTILDI -->
# NOKTA SİBİRYA 2 — ilerleme

**Oturum:** `local_dc1f5720-f6a1-4891-a08a-e22c1fe02da4`
**Önceki adlarım:** OPUS HAZIR KITA 6 → NOKTA MENZİL → **NOKTA SİBİRYA 2**
**Görev:** [oturumlar/NOKTA-SIBIRYA-2.md](NOKTA-SIBIRYA-2.md) · tahta `M-0115`
**Dosyam:** `data/yerlesimler_ek31.js`

---

## ⓪ IS 0 — bölge sanıldığından DOLU

Sibirya kutusu (50-73°K / 52-180°D): **77 nokta zaten var.**
```
kur: VAR                      19
kur: YOK ama 1281'de SAHİPLİ  10   ← 🔴 hiçbir denetimin görmediği sınıf
kur: YOK, 1281'de sahipsiz    48   ← 48/48'inde `bos:` bayrağı VAR
```

### 🟢 ASIL ÜRÜN BU DOSYA DEĞİL, ÖLÇÜMDÜ — `Değişmez 5c` doğdu
`Değişmez 5`in iki dalı da o 10 noktayı **göremiyordu**: `5a` `kur:`ı
olmayana bakmıyor, `5b` ilk dönemi 1381'den sonra olana bakıyor. Bu sınıfın
`kur:`ı **hiç yok** ve ilk dönemi 1281'de başlıyor — **ikisinin arasından
geçiyorlardı.** Koordinatör `Değişmez 5c` olarak koda çevirdi
(`M-0119` · `M-0121` · `M-0122`).

### Ve "hepsi hayalet değil" — kaynağa sorup ayırdım
```
🟢 MEŞRU     Tümen (Çimgi-Tura) · Tobolsk (İsker)
             TDV `sibir-hanligi` ikisini de ADIYLA sayıyor — Rus ostrogu
             değil, fetihten ÖNCE var olan Tatar şehirleri
🟡 ALAN ADI  Ural eteği · Baraba bozkırı · Buryat toprakları · Kazak bozkırı
             yerleşim değil bölge dolgusu; `kur:` kavramı uygulanmaz
🔴 ŞÜPHELİ   Çerdın · Pustozersk · Ust-Tsilma · Yelabuga
             VERİ ZAMAN'ın menzilinde DE değiller (onunki "kur: var ama geç")
```

### Ural farkı — çelişki değil, SORU farkı çıktı
Şartname *1281'de 6*, ben *20* ölçtüm. *"Şartname yanlış"* demedim, kutu
istedim. Kutular **birebir aynıymış**; fark şuradan: ben `kur:` kontrolü
**yapmadım**, yalnız *"dönem 1281'i kapsıyor mu"* sordum. İkimiz de doğru
ölçmüşüz, farklı soru sormuşuz — ve aradaki boşluk **14 hayaleti** ortaya
çıkardı.

---

## ① ek31 — 2 nokta yazıldı

TDV `sibir-hanligi` (gövdesi okundu) beş şehir adı verdi:
*"Kızıl-Tura, Karaçin, Taşatkan, Abalak, Tarhankale vb."* — **hiçbiri
veride yok.** Ama TDV **koordinat vermiyor**, ve ikisini yazabildim:

```
Abalak       58,129 / 68,594   ✅ özdeşleştirme TARTIŞMASIZ (yer adı sürekli,
                                  1636 manastırı aynı yerde), Tobolsk'a 21 km
Kızıl-Tura   57,700 / 71,170   🟡 özdeşleştirme ZAYIF (Ust-İşim), TDV
                                  söylemiyor, akademik kaynakta doğrulanamadı
```
**Yazılmayanlar ve sebepleri dosyada:** Karaçin (konum onlarca km belirsiz,
3 km ihlali riski) · Taşatkan · Tarhankale (modern karşılığı bulunamadı).
📌 Üçü de *"araştırılmadı"* değil **"arandı, koordinatı bulunamadı"** —
eksik olan tarih değil **koordinat**. Bir sonraki oturum sıfırdan aramasın.

## ② 🔴 KENDİ DENETİMİM TESLİMDEN ÖNCE DÖRT HATA YAKALADI

İlk yazdığım dönemler `§3.5`in **hayalet devlet** sınıfına giriyordu:
```
yazdığım    sibir-hanligi 1428 →  rusya 1923'e kadar
künye ömrü  sibir-hanligi 1430-01-01 → 1598-08-20
            rusya         1547-01-16 → 1917-03-15
```
⇒ Hanlık künyesinden **2 yıl önce** başlıyordu; `rusya` künyesi 1917'de
bittiği hâlde **1923'e kadar** boyuyordu.

🟢 **Ve künye benim uydurduğumdan iyisini verdi: `1598-08-20`.** Ben *"gün
bilinmiyor"* deyip `1598-01-01` yazmıştım; künyede **kesin gün** duruyormuş.
⇒ Uydurulmuş yuvarlak tarih, **var olan kesin tarihi örtüyordu** — `§11`in
*"yuvarlak tarih yalnız yanlış değil, çelişkiyi de saklar"* dersinin
tersten hâli.

Düzeltilmiş zincir künyelerle **birebir**:
`altinorda` → `sibir-hanligi` → `rusya` → `rusya-gecici-hukumet` →
`sovyet-rusya`, beşinin de rengi VAR, **HATA: 0**.

⚠️ **Bir tutarsızlık bildirdim:** Sibirya'daki mevcut noktalar bu 1917
zincirini **kullanmıyor** (kutuda 1900 sonrası tek kayıt var, o da
`cin-cumhuriyeti`). Benim dosyamın kusuru değil ama komşularımla ayrışıyor.

---

## ③ YAKUTİSTAN + KAMÇATKA 1281 KESİTİ — 3 nokta eklendi ✅

### Ölçüm önce, nokta sonra
Sorulan soru *"kaç nokta var"* değil: **`§2` gereği bu alan kimin peteğine
emiliyor?** 1281'de **sahnede olan** noktalar ayrıldı (`kur:`ı 1281'den
sonra olan nokta o gün sahnede DEĞİLDİR) ve ızgara tarandı:
```
1281'de sahnede            2241 / 2527 nokta
500 km'den uzak hücre      8 · EN KÖTÜSÜ 751 km
```

### 🔴 Ve sebep tek bir yerde toplandı — KAMÇATKA
```
56°K 160°D → "Koryak toprakları"  751 km
56°K 168°D → "Koryak toprakları"  678 km
56°K 152°D → "Ohotsk"             642 km
```
Çünkü **Petropavlovsk'un `kur:`ı 1740** — yarımadanın tek noktası 1281'de
sahnede değil. Kamçatka o gün **boştu** ve yüzlerce km öteden emiliyordu.
📌 NOKTA SİBİRYA'nın kapattığı *"Çukotka 2.106 km öteden emiliyor"*
kusurunun kardeşi: orada **kimlik yanlıştı**, burada **nokta hiç yoktu.**

### Eklenenler ve boşluğun CİNSİ
```
Kamçatka (İtelmen toprakları)         55,000 / 158,500   veri-yok
Kolıma havzası (Yukagir toprakları)   66,000 / 152,000   veri-yok
Doğu Sibirya kıyısı (Çuvan-Yukagir)   70,000 / 161,000   veri-yok
```
Üçü de **`veri-yok`**, ve bu bir tercih değil sınavın sonucu: TDV bu
halkları (İtelmen · Yukagir · Çuvan) **kapsamıyor**, akademik literatürü
ise **aramadım**. `devletsiz` deseydim *"bir daha bakılmasın"* demiş
olurdum — yani ölçmediğim bir şeyi ölçmüş gibi gösterirdim.
⇒ Çukotka'ya bakılmayacak (kaynak konuştu), **buraya bakılacak.**

### Sonuç — 8 boşluğun 7'si kapandı
```
56°K 152°D  642 → 425 km ✓      64°K 152°D  555 → 223 km ✓
56°K 160°D  751 → 146 km ✓      68°K 160°D  567 → 226 km ✓
56°K 168°D  678 → 609 km 🔴     72°K 160°D  709 → 226 km ✓
```
⚠️ Kalan tek hücre **56°K / 168°D — Bering Denizi**, Kamçatka'nın ~300 km
doğusunda açık su. Kara maskesi zaten kesiyor ⇒ nokta gerekmiyor.
**Ölçüm bu; "deniz olduğu için önemsiz" çıkarımını da ayrı yazıyorum.**

### Denetim
```
3 km ihlali   0   (en yakın 21,3 km)
yapı          mevcut boşluk noktalarıyla birebir: tur:"bolge" · bos:true ·
              s/d/v 0/0/0 · neden: alanı CİNS önekiyle başlıyor
yorum         TEMİZ
```

## ④ TDV'NİN VERDİĞİ SEKİZ AD — 2 yazıldı, 6 KOORDİNATSIZ

Koordinatörün hükmü (`M-0214`): **yazma, kaydet.** *"Koordinatı belirsiz
bir adı yazmak, 3 km kuralını çiğneyip çelişen ikiz kayıt üretir."*

| ad | kaynak | durum |
|---|---|---|
| **Abalak** | TDV `sibir-hanligi` | 🟢 YAZILDI · 58,129/68,594 · özdeşleştirme tartışmasız |
| **Kızıl-Tura** | TDV `sibir-hanligi` | 🟢 YAZILDI · 57,700/71,170 · özdeşleştirme ZAYIF (Ust-İşim), damgalandı |
| Karaçin | TDV `sibir-hanligi` | 🔴 `bulunamadı — arandı, koordinat yok` (Tobolsk çevresi, onlarca km belirsiz) |
| Taşatkan | TDV `sibir-hanligi` | 🔴 `bulunamadı — arandı, koordinat yok` |
| Tarhankale | TDV `sibir-hanligi` | 🔴 `bulunamadı — arandı, koordinat yok` (ad genel, Sibirya'da birden çok yerde) |
| Samar | TDV `baraba` | 🔴 `bulunamadı — arandı, koordinat yok` |
| **Şarkel** | TDV `baraba` | 🔴 `bulunamadı` + 🔴 **AD TUZAĞI** — Hazarların Don'daki Sarkel'iyle aynı ad; karıştıran nokta 3.000 km batıya düşer |
| Kondu-Tura | TDV `baraba` | 🔴 `bulunamadı — arandı, koordinat yok` |

🔴 **Eksik olan ad değil KOORDİNAT** — ve bu artık ölçülmüş bir borç.
Sebep de kayıtlı: TDV adları veriyor, koordinat vermiyor; bu oturumun
elinde **arama motoru yok** (yalnız doğrudan URL çekilebiliyor).
⇒ *"ölçmedim"* değil **"ölçemiyorum"** — biri başka bir turu çağırır,
öteki **araç ya da başka bir oturum** gerektirir.

### 🟢 Ve bir çapraz doğrulama — İsker
```
`baraba`         "Tura Özbek Hanlığı'nın başşehri… İskir veya Esker şehri idi"
`sibir-hanligi`  "başşehrini Sibir (Tatarcası İsker 'eski kale') şehrine taşıması"
```
İki **bağımsız** TDV maddesi aynı yeri gösteriyor ⇒ veride `Tobolsk (İsker)`
diye duran nokta doğru, ve Abalak'ın dönem çizgisini ona yaslamam da doğru.
Koordinatörün değerlendirmesi: *"iki ayrı TDV maddesi aynı şeyi söylüyorsa
o artık tahmin değil."*

### Tarih notu (ölçüm değil, NOT)
*"Baraba 1579'dan itibaren Yermak idaresindeki Rus kazaklarının yağmasına
uğradı."* ⇒ bölgenin Rus baskısına açılışı **1579**; `sibir-hanligi`
künyesinin sonu **1598-08-20**. Arada **19 yıllık geçiş** var.

## ⑤ 🔴 BATI KUTUSU BLOKU KALKTI — ve BENİM ÇIKARIMIM YANLIŞTI

Sekiz saat *"VERİ ZAMAN `kur:` yazınca batı kutusu çökecek"* diye bekledim.
Motor ölçtü (`M-0342`) ve **beklediğim şey olmayacak bir şeymiş.**

### Ölçüm — motorun, benim değil
```
04:20 koşusunun kuşatılmışlık listesi   78 ad (log "78 yerleşim" diyor)
benim 29 noktam                          29
KESİŞİM                                   0
```
Ve karşı sınav da yapmış — *"sıfır bulduysam belki hiçbir şey
bulamıyorumdur"* diye: `Adapazarı` · `Anadolu Hisarı` · `Cibûtî` listede
**True** çıktı ⇒ **sıfır gerçek bir sıfır, aletin sessizliği değil.**
📌 `§11`in *"ölçemediğini eleyen süzgeç onu temiz sayar"* dersini
uygulamış — ben sormamıştım, o kendi yaptı.

### 🔴 BENİM KUSURUM — ölçüm doğru, ÇIKARIM yanlış
```
ÖLÇTÜĞÜM   29 nokta sahneden düşerse 25 hücre 500 km'yi aşar, en kötüsü 1.312 km
            → BU DOĞRUYDU
ÇIKARDIĞIM  "o toprak 1.312 km öteden BOYANIR" (§2 emilmesi)
            → BU YANLIŞTI
GERÇEK      `kur:` yazılan nokta sahneden çıkar AMA hiçbir dala girmediği
            için peteği DEVREDİLMEZ — kendinde kalır, sahibi olmadığı için
            haritada BOŞLUK görünür, komşuya EMİLMEZ
```
⇒ Korktuğum emilme **olmuyor**; olan şey **boşluk**, ve `OGRENILENLER §72`ye
göre **doğru cevap** odur. Yani düzeltilmesi gereken bir kusur değil,
gerçeğin görünür hâli.
📌 Bütün gün başkalarında işaretlediğim sınıfın ta kendisi: **ölçüm doğru,
çıkarım yanlış.** Sayıyı doğru hesapladım, sayının ne anlama geldiğini
yanlış okudum — ve o yanlış okuma **beni sekiz saat bekletti.**

### ⇒ BATI KUTUSU: DOLGU NOKTASI GEREKMİYOR
Bugünkü ölçüm (500 km+ boşluk **0**) zaten geçerli taban, ve `kur:` yazımı
onu değiştirmeyecek. **Batı kutusunda yazılacak nokta yok.**
⚠️ Motorun kendi sınırı: ölçüm 04:20 koşusunun listesinden; ŞU AN KOŞAN
koşunun listesini okumadı, o gün bugün veri değişti. Koşu bitince teyit
edeceğini yazdı. Blok şimdi kalkıyor, teyit gelmezse haber verecek.

## ⑥ SIRADAKİ
- Dört şüpheliyi (Çerdın · Pustozersk · Ust-Tsilma · Yelabuga) kaynağa
  sorup `kur:` teklifi çıkarmak — **ölç ve BİLDİR, YAZMA** (M-0147)
- ~~🔴 Dosya `girdi.py`ye **bağlanmadı** — koordinatörde~~
  🟢 **BAĞLANDI** (16 Ağustos 2026) · `girdi.py` 48 dosya · tabanda 6/6

---

# ⑦ KOL C · SİBİRYA DİLİMİ — ölçüm ve teslim (16 Ağustos 2026, M-0668)

Koordinatör `M-0654` ile Kol C'nin Sibirya dilimini bu oturuma verdi.
**Sonuç: bu dosyada yazılacak hiçbir şey yok — ve bu bir sonuçtur.**

## ⑦.1 İki yanlış alarmımı yazmadan önce kendim çürüttüm

```
ALARM 1  "Tomsk·Yakutsk·İrkutsk tur:kale ama bos:devletsiz ⇒ Sibirya'nın
          fethi haritada hiç görünmüyor olabilir"
ÇÜRÜK    63 noktanın 52'sinde `rusya` dönemi VAR (Tomsk 1604 · Yakutsk
          1632 · İrkutsk 1661). `kasitli_bosluk` burada "kalıcı boşluk"
          değil "KURULUŞ ÖNCESİ boşluk" demek. Modelleme DOĞRU.

ALARM 2  "`kur:` yazarsam kasıtlı boşluk yok olur, komşu emer"
ÇÜRÜK    uret_petek.py:2444 — "devir YALNIZ kurulmamış VE o tarihte bir
          sahibi YAZILI peteklere uygulanır". Kurulmamış+sahipsiz =
          motor DOKUNMUYOR. Kuveyt (`kur:1716`) birebir aynı şekil.
```
📌 İkisini de **koda bakarak** çürüttüm, akıl yürüterek değil.

## ⑦.2 Asıl bulgu — kuruluş tarihleri ZATEN veride

Her ostrogun kuruluş yılı **ilk `rusya` döneminin `f:`si** olarak duruyor.
⇒ C'nin Sibirya dilimi **araştırma değil ALAN YAZMA** işi.
```
kur: yazılmaya hazır   43     kur: zaten var   3
ilk dönemi 1281         7     benim dosyamda   0
```
**Dosya kırılımı — tamamı başkasında:**
`ek13` 12 · `ek8` 11 · `ek9` 11 · `ek18` 9 · **`ek31` 0**

## 🔴 ⑦.3 Mekanik kural ALTI kayıtta kırılıyor

*"`kur:` = ilk dönemin `f:`si"* çoğunda doğru, altısında **yanlış** —
o kayıtlarda ilk dönem bir kuruluş değil bir **el değiştirme**:
```
🔴 Barnaul · Biysk · Pavlodar · Semipalatinsk · Zmeinogorsk
      ilk dönem 1635 `cungar` — Cungar hâkimiyeti (Barnaul gerçekte 1730)
🔴 Nikolayevsk (Amur ağzı)
      ilk dönem 1689-09-06 `qing` — Nerçinsk Antlaşması
⚠️ Aleksandrovsk (K. Sahalin) `bos:"hata"` — zaten hatalı damgalı
🟢 GÜVENLİ 37 — ilk sahip `rusya` ve `neden:` aynı yılı gerekçelendiriyor
```
Ayırmasaydım liste *"mekanik"* diye teslim edilip **altı uydurma kuruluş
tarihi** veriye girecekti.

## ⑦.4 Kendi iki noktam — kaynakla kapandı, İKİSİNE DE YAZILMADI

| nokta | hüküm | dayanak |
|---|---|---|
| **Kızıl-Tura** | 🟢 `kur:` **yazılmaz** — verim doğru | Akbaba, Y. (2024), *An Example of Turkish-Tatar Urbanism in Siberia: Kyzyl Tura*, **Selçuk Türkiyat** (61): 47-67, doi:10.21563/sutad.1360861 — hakemli. *"a prominent administrative centre in the period immediately preceding the conquests of Genghis Khan"* ⇒ 1281'den ÖNCE var |
| **Abalak** | 🔴 `bulunamadı` — dokunulmadı | TDV `sibir-hanligi` adı sayıyor, **tarih vermiyor**. Öteki sonuçlar turizm/blog düzeyinde ⇒ kırmızı çizgi, kullanılmadı |

⚠️ `bit:` de yazılmadı: makale Kızıl-Tura için *"downfall began in the
16th century"* diyor — bir **çöküş**, terk YILI değil.

🟡 **ÖLÇÜLMEMİŞ ŞÜPHE (veriye yansıtılmadı):** Abalak adının hanlık devri
bir Tatar beyinden geldiği söyleniyor; doğruysa `s:1281 altinorda` dönemi
anakronik olabilir. **Ölçmedim, kaynağım yok, değiştirmedim** — bir gün
bakılsın diye kayda geçiyor.

## ⑦.5 Ölçmediğim

43 kaydın `neden:` alanlarındaki tarihlerin **kaynağını tek tek
doğrulamadım**; 30'unda *"🔴 TDV'ye basmıyor"* notu var, yani akademik
kaynağa dayanıyorlar ama **hangisine bakmadım.** Yazacak oturum bunu
doğrulamalı.

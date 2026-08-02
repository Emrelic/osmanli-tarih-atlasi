# KARAR — `BOLGE` kutusu ŞİMDİLİK AÇILMIYOR, ve açılınca TEK SEFERDE açılacak

> MOTOR 2'nin İş C ölçümü üzerine (`eb8a59e`). Ölçüm **koordinatörün
> çerçevesini çürüttü**: mesele süre değilmiş.

---

## 1. ÖLÇÜM — MOTOR 2, 2 Ağustos

```
BUGÜN     box(-12, 1.5,  62, 62)    3.363 der² · 1.102 poligon · 43 dk (r578)
lon142    box(-12, 1.5, 142, 62)    6.417 der² ×1,91 · 2.522 poligon ×2,29
                                     nokta 320/344 · tahmin 82-99 dk, ~90
TAM       box(-12, -11, 142, 62)    6.915 der² ×2,06 · 3.047 poligon ×2,76
                                     nokta 344/344 · tahmin 90-120 dk, ~105
```

🔴 **BENİM HATAM — kutuyu TEK BOYUTLU düşündüm.** Brifingimde *"lon 141.35'e
kadar"* yazdım ve **enleme hiç bakmadım.** Kutunun güney sınırı `1,5°K`;
Asya partisi `−10,18`'e iniyor. ⇒ *"lon 142"* Asya'yı **tam almıyor**:
24 nokta (Singapur · Cava · Bali · Ternate · Timor…) **boylamdan değil
GÜNEYDEN** dışarıda kalıyor.

📌 `YASALAR C9`: aracın kör noktası aynadaki yönü sormamaktır. Ölçümü
tek eksende istedim, ikinci eksen görünmedi.

---

## 2. 🔴 ASIL BULGU — mesele SÜRE DEĞİL

```
62..142° şeridine eklenen 1.421 poligonun 1.261'i  <0,01 der²  = MİNİK ADA
```

Ve `CLAUDE.md §2`'nin bilinen zaafı tam buraya basıyor:
> *"Noktası olmayan bölge en yakın peteğe soğurulur ve **O PETEĞİN
> sahibiyle boyanır**."*

⇒ Kutu bugün açılırsa **1.261 adacık**, yüzlerce kilometre ötedeki bir
anakara noktasının sahibiyle boyanır. Bu, motorun **en pahalı hata
sınıfı**dır:
> *"Yanlış renk boşluktan KÖTÜDÜR: boşluk 'bilmiyoruz' der, yanlış renk
> 'biliyoruz' der."* (`uret_petek.py:1243`)

⚠️ Ve ikinci engel bağımsız olarak duruyor: **Asya'nın 147 kimliğinin
135'inin rengi yok.** Kutu açılsa 320 nokta girer ve **boyanmaz.**

🔴 ⇒ **Kutu darboğaz değil.** Bugün açmak haritayı iyileştirmez, **yeni bir
biçimde bozar.** 90 dakika sorun değil — 90 dakika sonunda çıkacak harita
sorun.

---

## 2c. ✅ ADACIK ZARARI ÖLÇÜLDÜ (İş K, `12a2a1a`) — **ENGEL SAYISI 2'DEN 1'E DÜŞTÜ**

`§2` *"kutu bugün açılırsa 1.261 adacık yanlış boyanır"* diyordu. **Doğruydu
ama eksikti:** o cümle sorunun kutuyla **doğduğunu** îma ediyordu. Ölçüm
tersini gösterdi.

```
                          parça   yanlış devlet adayı        alan
BUGÜNKÜ kutu, canlı veri   1.006   27 parça              2.751 km²
KİLİTLİ kutu (142/−11/64)  3.023  161 parça             25.566 km²
                                   ────────────────────────────────
                                   ×6 parça · ×9,3 alan
```

🔴 **SORUN BUGÜN DE VAR.** Bornholm sınıfı adalar Kopenhag↔Berlin↔Hamburg
arasında, Manş adaları Londra↔Paris (286 km), Abu Dabi↔Buraymî kıyı
adacıkları. ⇒ **Kutu sorunu YARATMIYOR, BÜYÜTÜYOR.**

⇒ **Adacık kuralı kutunun ÖN KOŞULU DEĞİL.** Ayrı ve **zaten açık** bir iş.
Kutunun önünde bugün **tek engel kaldı: Asya'nın 135 rengi.**

### 📌 Ve kuralın bedeli İLK KEZ sayıda

```
kural UYGULANIRSA    25.566 km²  yanlış renk adayı
kural UYGULANMAZSA  884.543 km²  boşluk
oran                 1 : 35   ⇒ kuralın bedeli önlediğinin %2,9'u
```
*"Yanlış renk boşluktan kötüdür"* doğruymuş — ve artık **ucuz olduğu da
ölçülü.**

### 🟢 VE UCUZ BİR AZALTMA YOLU ÇIKTI

Zararın **%45'i TEK parçada**: **Palawan 11.534 km² → Manila'ya soğuruluyor**
(anakarası Brunei tarafı). Diğer büyükler: Sahalin/Hokkaido (3.026 km² →
Sapporo), Sumatra doğu kıyısı (Singapur çekiyor), Mergui adaları (Banda
Açe'den 633 km).

⇒ **Birkaç hedefli veri noktası zararın yarısını tek başına düşürür.**
Şema işi değil, **nokta ekleme** işi.

⚠️ Soğurma mesafeleri: medyan 96 km · P90 497 km · **maks 2.014 km**
(118 km²'lik bir parça **Ndjamena'ya** soğuruluyor). Ölçüm düz mesafe;
motorun kara-yolu Dijkstra'sının **alt sınırı**.

---

## 3. KARAR ① — SIRA (⚠️ §2c ile GÜNCELLENDİ, iki engel BİRE düştü)

```
1. RENK PARTİSİ      Asya'nın 135'i        ← kutunun TEK kalan engeli
2. KUTU              tek koşuda
```

~~2. ADACIK KURALI~~ — **artık ön koşul değil.** `§2c` ölçtü: sorun bugün de
var (27 parça / 2.751 km²), kutu onu **büyütüyor, yaratmıyor.** Ayrı ve
zaten açık bir iş; hedef listesi `§7`'de hazır.

📌 Ve bu, `§82.2`'nin uygulanmış hâli: *"sıralarken 'kaynağı hazır mı' kadar
'MOTOR BU ŞEKLİ ÇİZEBİLİYOR MU' diye sor."* Sordum, cevap **bugün hayır** —
ama sebebi ikiden bire indi.

---

## 3b. 🔴 KUTU DÖRT KENARLI — ve bugün ÜÇÜ ayrı ayrı soruldu

```
box(-12, 1.5, 62, 62)
     │    │   │   └── KUZEY 62°K   ← İş I: Trondheim (63,4) · Sundsvall (62,4) DIŞARIDA
     │    │   └────── DOĞU  62°D   ← İş C: Asya 65,7'den başlıyor
     │    └────────── GÜNEY 1,5°K  ← İş C: Endonezya −10,18'e iniyor
     └─────────────── BATI −12°B   ← HİÇ SORULMADI
```

📌 Ve deseni gör: **her ölçüm kendi eksenini buldu, ötekini bulamadı.**
- Ben doğuyu sordum (`lon 141`), İş C güneyi **buldu**
- İş I Avrupa'yı ölçtü, kuzeyi **buldu**
- Batıyı **kimse sormadı** ve kimse bulmadı

⇒ `YASALAR C9` üçüncü kez: aracın kör noktası **aynadaki yönü sormamaktır.**
Burada ayna dört yüzlü ve üç kez farklı yüzünden yakalandık.

⚠️ **Kuzey kenarı için erken hüküm verme:** 2 nokta için tavan 62→64'e
çıkarmak *az* görünüyor, ama 62→71 (Nordkapp) **bütün Kuzey İskandinavya ve
Kuzey Rusya'yı** ekler. **Nokta başına maliyet** ölçülmeden karar verilmez.

---

## 3c. ✅ KENAR FİYATLARI ÖLÇÜLDÜ (İş J, `5492b1c`) — ve kutu değeri KİLİTLENDİ

```
kenar              yeni nokta   +alan der²   tahmin      dk/nokta
DOĞU  62 → 142        +320        +3.054      88 dk       0,1     🟢 açık ara en verimli
GÜNEY 1,5 → −11         +0          +354      48 dk       —       (tek başına getirisiz)
KUZEY 62 → 64           +2           +99      46 dk       1,4     🟢 ucuz
KUZEY 62 → 71           +2 (AYNI)   +325      53 dk       5,2     🔴 3,3 kat pahalı, EK GETİRİ SIFIR
BATI  −12 → ?            —            —        —          —       SORU YOK: lon<−12 nokta BULUNAMADI (0/1.579)
```

🔴 **KENAR ETKİLEŞİMİ — getiri TOPLAMSAL DEĞİL, ölçüldü:**
```
GÜNEY tek başına        +0 nokta
GÜNEY, DOĞU açıkken    +24 nokta (Endonezya)
```
⇒ **Maliyette bağımsız, getiride değil.** Güney kenarı yalnız Doğu ile
birlikte anlam taşıyor (koşullu maliyeti ~0,2 dk/nokta).

📌 Ve Batı kenarı için doğru cevap **"ölçmedim" değil "soru yok"**: evrenin
en batısı Tralee (−9,70). MOTOR 2 kenarı ölçmeyi **reddetti** ve gerekçesini
yazdı — negatif sonuç da sonuçtur.

---

## 4. KARAR ② — açılacak değer: **`box(-12, -11, 142, 64)`**

Üç kenar açılır, biri açılmaz:
```
✅ DOĞU  142    0,1 dk/nokta — 320 nokta, tartışmasız
✅ GÜNEY −11    yalnız Doğu ile birlikte +24 nokta
✅ KUZEY  64    +3 dk'ya 2 nokta; Avrupa partisini 235/237 → 237/237 tamamlar
❌ KUZEY  71    AYNI 2 nokta için 3,3 kat — Norveç fiyortu +424 poligon,
                EK GETİRİ SIFIR. Nordkapp ancak Kuzey İskandinavya/Rusya
                noktaları YAZILIRSA anlam kazanır.
❌ BATI         soru yok
```

⚠️ **`64`'ü aşan her derece bugün getirisizdir.** Kuzey kenarı ileride
tekrar açılabilir — ama o zaman gerekçe **veri** olacak, coğrafya değil.

### Niçin tek seferde
```
üç kenarı birlikte açmak   ≈ 95-105 dk (İş C tavanı: ~160)
ikinci bir koşu             ≈ 105 dk + ikinci göç + ikinci denetim turu
```
⇒ Kademeli açmanın hiçbir gerekçesi yok.

---

## 4b. NİÇİN TEK SEFERDE — gerekçe (değer için `§4`'e bak)

```
lon142 → tam kutu farkı:   ~15 dk (90 → 105)
ikinci bir koşu maliyeti:  ~105 dk + ikinci göç olayı + ikinci denetim turu
```
⇒ **İki adımda açmak, tek adımda açmaktan yedi kat pahalı.**

⚠️ **BU BÖLÜMDEKİ ESKİ DEĞER SİLİNDİ.** Burada bir ara `box(-12,-11,142,62)`
yazıyordu; `§3c` kuzey kenarını ölçtükten sonra **`64`** oldu ve iki bölüm
birbirini tutmuyordu. **Geçerli değer YALNIZ `§4`'te**, ve `§6` gereği
**geçici** (Sahalin).

📌 Bu dosyanın kendisi bugün *"iki otorite"* tuzağına düştü: aynı sayı iki
bölümde durdu ve ayrıştı. Projede bu **dördüncü** vaka.

⚠️ Ve açılırken `denetle.py:980-981`'deki iki elle kopya (`_KARA_TOL`,
`_DOGAL_GOL`) da kaynağa bağlanmış olmalı — İş B-2. Biri açıkken kutu
açılırsa denetim ile motor farklı maske ölçer.

---

## 5. TAKIMADA — süre kadar ÇIKTI da karar istiyor

`§82` (adacık kalesi) bugüne kadar **üç noktalık** bir sorundu (Granbosa,
Suda, Spinalonga). Takımadada **1.261 parçaya** çıkıyor.

MOTOR 2'nin ölçtüğü tavan: ada kuralı parça×nokta ile ölçeklenirse süre
**~130 dk** (tam kutuda **~160 dk**). Yani belirsizlik **iki kat**.

⇒ Adacık kuralı kararı **hem çıktıyı hem süreyi** belirliyor; kutudan önce
gelmesinin ikinci sebebi bu.

---

## 6. 🔴 KİLİTLENEN DEĞER KUSURLU ÇIKTI — kenar Sahalin'i ikiye bölüyor

MOTOR 2, İş L (`9154665`): kilitli kutunun doğu kenarı **142**, Sahalin adası
**141,6 – 144,7** ⇒ **ada ortadan ikiye bölünüyor.**

🔴 **Ve bu benim türetme hatam:** değeri *"Asya partisinin en doğu noktası
141,35"* diye çıkardım. Yani kutuyu **VERİNİN yayılımına** göre
boyutlandırdım, **COĞRAFYAYA** göre değil.

> **Yarım ada, yanlış renkten de kötü görünebilir** — yanlış renk
> *"biliyoruz"* der, yarım ada *"harita bozuk"* der.

📌 Ders, ve bugün kutuda **dördüncü** kez aynı sınıf:
> **Kutu kenarı verinin yayılımına göre değil, COĞRAFYANIN DİKİŞLERİNE göre
> seçilir.** Nokta listesi kenarın *nerede olması gerektiğini* söylemez;
> yalnız **en az nerede** olması gerektiğini söyler.

⇒ İş M açıldı: (①) dört kenarın herhangi biri **başka** bir kara kütlesini
bölüyor mu — %5 eşiğiyle · (②) doğu kenarını ~145'e uzatmanın maliyeti.
**Kutu değeri, ① cevaplanana kadar GEÇİCİ sayılır.**

---

## 7. 📌 HEDEF NOKTA LİSTESİ HAZIR (İş L) — kutudan bağımsız çalışabilir

```
YENİ KUTU     12 nokta → 25.566 km²'nin %98'i
              ilk 3 nokta %75 · ilk 5 %84 · ilk 10 %95
BUGÜN         gerçek acil yük ~1.000 km² (Rügen 969 km²)
```

⚠️ **Ve MOTOR 2 kendi vekilini kendi bulgusuna karşı sınadı:** İş K'nin
*"bugün 27 parça / 2.751 km²"* rakamının bir kısmı **yanlış alarm.**
`Jersey` tarihen İngiliz tacına bağlı, `Bornholm`/`Samsø` Danimarka —
coğrafî anakara vekili orada tarihe aykırı konuşuyor. Liste **güven
sütunuyla** işaretli.

⇒ `YASALAR B13`: vekil ölçüt sonucu değiştirir; **vekilin NEYİ ölçmediğini
yazmak ölçümün parçasıdır.**

**İlk üç hedef:**
```
1  Palawan/Balabac   (7,01 · 118,47)  11.881 km² · 19 parça · anakara Brunei
2  Riau takımadası   (0,76 · 104,23)   3.900 km² · 52 parça · Singapur çekiyor
3  Sahalin batı şer. (52,50 · 141,90)  3.392 km² · Sapporo 943 km öteden
```
🟡 Atanmadı — veri oturumu işi. Koordinatlar **temsil noktası**; tarihî
merkeze kaydırılmalı (Palawan → Taytay gibi) ve `s:`/`d:` zinciri kaynakla
kurulmalı. **MOTOR 2 tarih uydurmadı.**

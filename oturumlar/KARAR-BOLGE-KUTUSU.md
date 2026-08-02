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

## 3. KARAR ① — SIRA DEĞİŞTİ, kutu ÜÇÜNCÜ

```
1. RENK PARTİSİ      15 Avrupa + İran zinciri (3-4) + Asya'nın 135'i
                     renk_olc.py --oner ile BİRLİKTE, tek tek değil
2. ADACIK KURALI     noktasız kara parçası ne olacak?
                     boya / boş bırak / kasitli_bosluk — `bos:` şemasının vakası
3. KUTU              ikisi bitince, TEK koşuda
```

📌 Ve bu, `§82.2`'nin uygulanmış hâli: *"sıralarken 'kaynağı hazır mı' kadar
'MOTOR BU ŞEKLİ ÇİZEBİLİYOR MU' diye sor."* Sordum, cevap **bugün hayır.**

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

## 4b. KARAR ② — açılınca **TAM KUTU**, `lon142` değil

```
lon142 → TAM kutu farkı:   ~15 dk (90 → 105)
ikinci bir koşu maliyeti:  ~105 dk + ikinci göç olayı + ikinci denetim turu
```
⇒ **İki adımda açmak, tek adımda açmaktan yedi kat pahalı.** 24 Endonezya
noktasını dışarıda bırakıp sonra ikinci kez açmanın hiçbir gerekçesi yok.

🔴 Açılacak değer: **`box(-12, -11, 142, 62)`**

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

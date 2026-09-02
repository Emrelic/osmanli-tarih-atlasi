# BOZKIR NOKTA ÖNERİSİ — `0034/H-0036` · 25 aday, ölçülmüş boşluk haritasıyla

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname M-1903, kalem (3)
> 🔒 Koşu canlı · `arac/` üçlüsü okundu, YAZILMADI.
> 🔴 **BU BİR YAMA DEĞİL, BİR HEDEF LİSTESİDİR.** Hiçbir dönem yazılmadı; niçin
> yazılmadığı `§4`te ölçümle duruyor. Yeni nokta zaten yama ile inmiyor
> (`_sahiplik_uygula.py`: *"veride YOK — yeni nokta, yama ile yazılmaz"*).

---

## 1. TABAN — `H-0036`nın ölçümü (kutu: Emre'nin görselinin künyesi)

`1637-06-18 · 42,36-51,16K / 29,02-48,58D`
```
                                nokta   ~alan(bin km²)   nokta/100.000 km²   en yakın komşu (ortanca)
BOZKIR kutusu                     61         1.461             4,2                  71 km
KIYAS Batı Anadolu                89           231            38,5                  21 km
KIYAS Rumeli                     103           334            30,8                  23 km
```
61 noktanın **16'sı `k=0` dolgu** ⇒ gerçek yerleşim **45**.

---

## 2. BOŞLUK HARİTASI — motorun KENDİ kara maskesiyle ölçüldü

`veri-kaynak/motor_kara.geojson` yüklendi, kutu 0,25°lik ızgarayla tarandı,
**2145 kara hücresi**nin her biri için en yakın yerleşime uzaklık hesaplandı.
```
kara hücrelerinin en yakın noktaya uzaklığı: ORTANCA 70 km
```
Birbirinden ≥120 km ayrı **en büyük 22 boşluk** (km = o hücrenin en yakın
yerleşime uzaklığı):
```
 1. 177,9  50,61K 48,52D      12. 130,4  50,86K 44,02D
 2. 175,7  44,86K 45,02D      13. 128,6  51,11K 29,02D
 3. 174,2  49,86K 40,77D      14. 123,5  48,11K 37,52D
 4. 161,2  49,86K 42,77D      15. 120,8  46,36K 41,02D
 5. 149,3  45,36K 46,52D      16. 120,0  48,11K 48,52D
 6. 149,1  49,11K 30,52D      17. 119,7  48,61K 35,77D
 7. 148,7  50,36K 38,77D      18. 119,4  43,86K 42,02D
 8. 144,8  45,86K 43,77D      19. 118,3  50,11K 32,27D
 9. 136,0  47,36K 44,02D      20. 115,6  50,11K 47,02D
10. 135,6  47,86K 32,77D      21. 111,8  51,11K 40,52D
11. 131,5  46,11K 38,27D      22. 111,8  48,61K 34,02D
```
📌 `CLAUDE.md §2`: *"noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
SAHİBİYLE boyanır."* Yukarıdaki her satır, **178 km'ye kadar uzaktaki bir
sahibin rengini giyen** bir kara parçasıdır.

---

## 3. YİRMİ BEŞ ADAY — hepsi 3 km kapısından GEÇTİ

`girdi.yukle()` (2624 nokta) ile sınandı: **ad çakışması 0 · 3 km altı 0 ·
kutu dışı 0**.
```
                                              en yakın mevcut nokta
─── KUZEYBATI (Özi–Yedisan–Bucak) ──────────────────────────────────────────
Kılburun (Kinburn)      46,53 · 31,83   Özi                        24,4 km
Dubossary (Dubasar)     47,27 · 29,16   Orhei                      28,3 km
Balta                   47,94 · 29,62   Orhei                      86,0 km
Kızıkermen (Gazi Kerman) 46,84 · 33,42  Or Kapı (Ferahkirman)      78,4 km
─── DNİEPER–ZAPOROJYE ──────────────────────────────────────────────────────
Kodak Kalesi            48,44 · 35,13   Zaporojye Seçi             80,5 km   ⇒ boşluk 17
Yelisavetgrad           48,51 · 32,26   Çehrin (Çigirin)           69,6 km   ⇒ boşluk 10
Kremençuk               49,07 · 33,42   Çehrin (Çigirin)           55,1 km   ⇒ boşluk 22
Uman                    48,75 · 30,22   Yedisan bozkırı           137,5 km   ⇒ boşluk 6
─── SLOBODA / DON YUKARISI ─────────────────────────────────────────────────
Lubnı                   50,02 · 33,00   Çehrin                    107,6 km   ⇒ boşluk 19
Sumı                    50,91 · 34,80   Putivl                     80,4 km
Çuguyev                 49,83 · 36,68   Harkov                     37,0 km
İzyum                   49,21 · 37,29   Sloboda bozkırı             6,6 km   🟡 aşağıya bak
Bahmut                  48,60 · 38,00   Donets bozkırı             76,7 km   ⇒ boşluk 14
Ostrogojsk              50,86 · 39,07   Voronej                    90,6 km   ⇒ boşluk 7
Uryupinsk (Hoper)       50,80 · 42,01   Borisoglebsk               63,2 km   ⇒ boşluk 4
─── KIRIM / KERÇ ───────────────────────────────────────────────────────────
Yenikale                45,35 · 36,60   Kerç                       10,4 km   🟡
Arabat                  45,30 · 35,49   Kefe                       31,0 km
─── KUBAN / TAMAN ──────────────────────────────────────────────────────────
Temrük                  45,27 · 37,39   Anapa                      42,2 km
Kopıl (Kuban serdarlığı) 45,26 · 38,13  Kuban (Yekaterinodar)      70,8 km
Açuyev (Kuban ağzı)     46,05 · 38,15   Kuban (Yekaterinodar)     129,9 km   ⇒ boşluk 11
Sucuk Kale              44,72 · 37,78   Anapa                      41,4 km
─── KUZEY KAFKAS HATTI ─────────────────────────────────────────────────────
Stavropol               45,04 · 41,97   Stavropol–Kuma bozkırı     53,9 km
Georgiyevsk             44,15 · 43,47   Kabartay (Nalçik)          73,5 km   ⇒ boşluk 18
Mozdok                  43,75 · 44,66   Vladikavkaz                80,7 km
Macar (Mecer)           44,78 · 44,16   Stavropol–Kuma bozkırı    123,3 km   ⇒ boşluk 2
```
🟡 **İki uyarı, ikisi de sınırın üstünde ama dikkat ister:**
`İzyum` **6,6 km** ile `Sloboda bozkırı`na yakın — ama o bir **`k=0` DOLGU**
noktası, gerçek yerleşim değil. İzyum inerse dolgunun hâlâ gerekli olup olmadığı
**ayrıca ölçülmeli** (dolgu, noktasızlığı kapatmak için konmuştu).
`Yenikale` **10,4 km** ile Kerç'e yakın; Boğaz'ın iki ucundaki iki ayrı kale,
ayrılmaları tarihen doğru — ama 3 km kuralının kenarına yakın, kayda geçsin.

---

## 4. 🔴 NİÇİN HİÇBİR DÖNEM YAZMADIM — ölçtüm, uydurmadım

`CLAUDE.md §4` TDV'yi esas alıyor. **Ölçüm: TDV bu taneciği kapsamıyor.**
```
DENENEN SLUG: 22          CANLI (200): 4       ÖLÜ (302): 18
🟢 canlı  kirim · uman · silistre · kalmuklar · nogaylar (+ akkirman · azak · bucak · kefe)
🔴 ölü    temruk · taman · sucuk-kalesi · kopil · kilburun · kinburun · balta ·
          yenikale · arabat · ozi · bender · kizikermen · gazikerman · gazi-kerman ·
          macar · mecer · kodak · bahmut · ostrogojsk · yayik · saraycik · ozu-eyaleti ·
          kirim-hanligi · kuban · nogay · yedisan · kalmuk · dest-i-kipcak
```
Ve `§4`ün *"dar slug tutmazsa GENEL maddeyi dene"* kuralını uyguladım —
**iki genel madde okundu ve ikisi de gerekli taneciği TAŞIMIYOR:**
```
`kirim`     Yenikale · Or Kapı (1538 Sâhib Giray) · Kılburun (1774'te Rusya'ya)
            veriyor; Kopıl · Temrük · Açu · Arabat için TARİH YOK
`nogaylar`  "Yedisan, Camboyluk, Bucak ve Kuban Nogayları, Kırım Hanlığı'nın
            hâkimiyeti altındaydı" (XVIII. yy başı) — Kopıl · Açuyev · Temrük
            ADI GEÇMİYOR, Yediçkul kolundan HİÇ söz edilmiyor
`silistre`  eyaletin KUZEY kalelerini hiç anlatmıyor (madde Tuna'daki şehre dair)
```
⇒ Bu, `CLAUDE.md §4`ün **COĞRAFÎ değil TANECİKLİK boşluğu** — TDV bölgeyi
görüyor ama **o incelikte konuşmuyor**. Kuralın hükmü açık: standart akademik
kaynak **meşrudur**, şartı `kaynak:` alanına **açıkça yazılmasıdır**.

🔴 **O akademik turu BU TURDA YAPMADIM ve "yaptım" demiyorum.** 25 adayın
**dönemleri YAZILMADI**; bu dosya *"nereye bakılacak"* der, *"ne yazılacak"*
demez. Tarih uydurmak, boş bırakmaktan **kat kat** pahalıdır.

---

## 5. ETKİ — 25 aday inse ne olur

```
                        nokta   nokta/100.000 km²   en yakın komşu (ortanca)
bugün                     61           4,2                71 km
25 aday inince            86           5,9  (+%41)        59 km
hedef: Rumeli'nin yarısı ~219          15,0                  —
```
⇒ **25 aday tek başına yetmez** ve bunu baştan yazıyorum: kutuyu Rumeli'nin
yarısına çıkarmak ~158 nokta ister. Bu liste **ilk dilim**dir; en büyük
boşlukların 11'ini doğrudan hedefliyor.

---

## 6. ÖNERİLEN İŞ BÖLÜMÜ — iki paket, çünkü kaynakları AYRI

```
PAKET A — OSMANLI/KIRIM KALELERİ (12 aday)
   Kılburun · Kızıkermen · Yenikale · Arabat · Temrük · Kopıl · Açuyev ·
   Sucuk Kale · Balta · Dubossary · Kodak · Uman
   Kaynak: TDV kısmen (kirim maddesi) + Osmanlı arşiv/eyalet literatürü.
   🟢 Bu paket ATLASIN KENDİ KONUSU: Osmanlı-Kırım sınır kaleleri.

PAKET B — RUS/UKRAYNA HAT ŞEHİRLERİ (13 aday)
   Yelisavetgrad · Kremençuk · Lubnı · Sumı · Çuguyev · İzyum · Bahmut ·
   Ostrogojsk · Uryupinsk · Stavropol · Georgiyevsk · Mozdok · Macar
   Kaynak: TDV'de YOK (ölçüldü) ⇒ standart akademik kaynak, `kaynak:` alanına
   "bulunamadı — TDV bu taneciği kapsamıyor" damgasıyla.
   ⚠️ Bu paket `§1.6`nın kapsam sorusuna değiyor: bunlar Osmanlı'nın değil
     RUSYA'nın hat şehirleri. Atlasın konusu devletler ve sınırlarıdır, ve
     bozkırın kuzey yarısını Rusya boyuyor — yani gerekli. Ama önceliği
     koordinatör vermeli, ben vermiyorum.
```

📌 Ve bir sıra uyarısı (`CLAUDE.md §6`): nokta yoğunluğu **haritayı doğrudan
etkiler**. 25 nokta inince bu kutudaki gövde parçalanması **değişecek** —
`H-0036`nın *"dört parçalı Kırım bozkırı"* görüntüsü ancak koşudan sonra
yeniden ölçülebilir. Öngörümü şimdiden yazıyorum, çürütülebilir:
**parça sayısı AZALIR ama SIFIRLANMAZ**, çünkü ölçtüğüm gibi kopukluğun bir
kısmı GERÇEK (Özi · Akkirman · Kerç · Taman · Azak bozkırı gerçekten kesiyor).

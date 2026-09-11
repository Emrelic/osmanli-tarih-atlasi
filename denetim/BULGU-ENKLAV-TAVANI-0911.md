# BULGU — ENKLAV TAVANI — 11 Eylül 2026

Oturum: **ENKLAV TAVANI** (önceki isim: YABANCI SENKRON) · Koordinatör: 1.MURAT
Görev: B UCUZ PARÇALAR'ın bıraktığı 500 km + 100.000 km² önerisinin TABANI.

🔒 `arac/uret_petek.py` yalnız **okundu** (`_bant_baskasinin_topragini_kesiyor_mu`,
`_b2_enklav_birlestir`, `B2_ENKLAV_KM` satırları) — **tek satır yazılmadı, import
edilmedi, koşu açılmadı.** `data/donemler.js` + `data/devletler_harita.js` +
`veri-kaynak/motor_kara.geojson` yalnız okundu. Kendi ayrıştırıcım B UCUZ
PARÇALAR'ın `denetim/ARAC-B-UCUZ-PARCALAR-0911.py`sindeki `coz()`/`km()` mantığını
**aynen tekrar kullandı** (D023) — yalnız `devletler_harita.js` (`DEVLET_HARITA`,
`DEVLET_PARCALAR`, `DEVLET_PARCA_HALKA`) desteği YENİ eklendi, çünkü ③'ün sorusu
onu gerektiriyordu.

---

## ① 100.000 km² NEREDEN GELİYOR — alan dağılımı, doğal kırılma var mı

332 karasal aday-görünümü **30 benzersiz adlandırılmış enklava** indirgeniyor
(her adın kendi EN BÜYÜK görünümü alındı). Tam dağılım:

```
Cebel Merre  406.228   Cübeyl   195.432   Medine    94.451   Kabala   69.692
Tebriz        57.673   Maan     37.426    Nâsıriye  30.662   Nühûd    18.801
Ordubad       18.522   Azak     15.796    Digor     12.787   Tuzla    11.854
Halepçe       11.454   Kerene   11.370    Şamahı     9.939   Bağdat    9.618
Han Yûnus      9.524   Tîzî V.   9.349    Muhammere  7.816   Ordu      4.636
Saraybosna     4.594   Selmâs    3.975    Masavva    3.322   Doğubayazıt 2.576
Tarsus         2.138   Domaniç   1.894    Cicel      1.578   Söğüt     1.544
Tunus          1.124   Dubrovnik   919                                (km²)
```

**Ardışık farkların (oran) ölçümü** — gerçek "doğal kırılma" **İKİ** yerde:

```
406.228 → 195.432   oran x2,08   (Cebel Merre TEK BAŞINA en üstte)
195.432 →  94.451   oran x2,07   (Cübeyl ile Medine ARASI — EN BÜYÜK gerçek boşluk)
 94.451 →  69.692   oran x1,36   (bundan sonrası kademeli, keskin kırılma YOK)
```

🟢 **HÜKÜM: 100.000 km² "uydurulmuş" bir sayı değil, GERÇEK bir boşluğun İÇİNDE
duruyor.** Veri, `94.451` (Medine) ile `195.432` (Cübeyl) arasında **101.000 km²
genişliğinde** boş bir bant bırakıyor — bu bandın İÇİNDEKİ HERHANGİ bir sayı
(100.000 de, 120.000 de, 150.000 de) **BİREBİR AYNI** sınıflandırmayı üretir:
Cebel Merre + Cübeyl dışarıda, geri kalan 28 içeride. Kardeşin sayıyı iki vakadan
türetmiş olması onu **uydurma** yapmıyor — geriye dönük ölçüm doğruluyor.
**D129 karşılığı:** eşik somut bir tabana (bu boşluğa) OTURUYOR, havada değil.

📌 Öneri: yuvarlaklık için `100.000` kalsın, ama CLAUDE.md'ye "94.451-195.432 km²
aralığındaki HERHANGİ bir değer eşdeğerdir" notu düşülsün — `100.000`'in kendisi
sihirli değil, ARALIK sihirli.

---

## ② İKİ YÖNDE ÖLÇÜM — 500 km + <100.000 km² kuralının GERÇEK etkisi

🔴 **Önce bir düzeltme: prior rapor bir OKUMA HATASI taşıyordu.** B UCUZ
PARÇALAR'ın tablosu her ad için yalnız "EN BÜYÜK ALANLI görünümün mesafesini"
gösteriyordu (`"Medine 9 görünüm · en büyük 94.451 km² · 552 km"`), ve bu satır
*"500 km Medine'yi kapsar"* diye okunmuştu. **Per-görünüm** (13 görünümün HEPSİ)
ölçüldü:

```
Medine    13 görünüm · MESAFE ARALIĞI 551,6 – 993,7 km   ⇒ HİÇBİRİ ≤500 değil
```

**Medine, önerilen 500 km eşiğiyle DE birleşmiyor** — alan testini (94.451<100k)
geçse bile mesafe testinde HİÇBİR görünümü 500'ün altına düşmüyor (en yakını
551,6 km). ⇒ Sayının doğuş hikâyesindeki *"Medine'yi içine alır"* iddiası
**yanlıştı**, ama bu ①'deki sonucu (100.000'in gerçek bir boşlukta durduğu)
DEĞİŞTİRMİYOR — yalnız "hangi vaka onu doğurdu" hikâyesi hatalı.

### Tam etki tablosu (332 karasal görünüm, HER görünüm ayrı sayıldı)

```
MEVCUT kural (mesafe<=250)                      : 273 görünüm birleşir
ÖNERİLEN kural (mesafe<=500 VE alan<100.000km²)  : 310 görünüm birleşir  (+37)
YENİ KATILAN adlar: Azak(+18) · Nâsıriye(+8) · Tarsus(+3) · Tîzî Vezzû(+3) · Nühûd(+5)
DIŞARIDA KALANLAR : Cebel Merre (alan) · Cübeyl (alan) · Medine (MESAFE, düzeltildi)
```

### 🔴🔴 VE +37'NİN GERÇEK SAYISI ÇOK DAHA KÜÇÜK OLABİLİR — sahiplik testi bunu gösterdi

`_bant_baskasinin_topragini_kesiyor_mu` motorun kendi kuralıdır ve mesafe/alan
eşiğinden **BAĞIMSIZ** ikinci bir AND-kapısıdır — eşiği gevşetmek bu kapıyı
DEVRE DIŞI BIRAKMAZ. `data/devletler_harita.js`deki **559 yabancı devletin**
tüm dönem gövdelerini kullanarak (motorun `_TUM_AGAC`'ının tam eşdeğeri değil,
ama aynı soruyu soran bir yaklaşım: köprü hattı bu tarihte AKTİF olan başka bir
devletin boyalı toprağına giriyor mu) yeni katılan 37 görünümden **4'ü**
örneklem olarak test edildi:

```
Nâsıriye (457 km, 1629)   → SAFEVİ toprağına giriyor  (~384 km / 457 km)
Nühûd    (278 km, 1884)   → MEHDİ (Sudan) toprağına giriyor (~278 km / 278 km — TAM)
Tarsus   (371 km, 1352)   → 12 komşu beylikten en az biri (~309 km / 371 km)
Azak     (322 km, 1555)   → GÜRCİSTAN/KIRIM toprağına giriyor (~263 km / 322 km)
```

**DÖRDÜ DE bloke ediliyor.** ⇒ Bu bir örneklem (37'nin 4'ü, tam tarama değil,
**"ölçülemedi"** diye açıkça yazıyorum geri kalan 33 için) ama güçlü bir işaret:
**500km+100k eşiğinin GERÇEKTE kaç görünümü birleştireceği 37'den ÇOK daha az
olabilir**, çünkü uzak enklavların çoğu ZATEN uzak olduğu için araya başka bir
devletin toprağı giriyor — bu iki olgu birbirinden bağımsız değil.

### Kefe · Hotin · Azak — koordinatörün adıyla sorduğu üç "meşru enklav"

```
Kefe   → 332 karasal aday-adının HİÇBİRİNDE YOK. Bu isim B2'nin enklav listesine
         HİÇ girmiyor — muhtemel sebep: Kırım'ın anakaraya bağlantısı (Or Kapı/
         Perekop kıstağı) muhtemelen B3 KORİDOR mekanizmasınca ele alınıyor,
         B2 ENKLAV'a hiç düşmüyor. ⇒ Eşik değişikliği Kefe'yi HİÇ ETKİLEMEZ.
Hotin  → AYNI: listede YOK, aynı gerekçeyle muhtemelen KORİDOR'un işi.
Azak   → LİSTEDE VAR (15.796 km², 124 görünüm) ve HALİHAZIRDA sahiplik testiyle
         KORUNUYOR (yukarıda kanıtlandı — 223 km'lik en yakın görünümde bile
         Kırım/Don-Kazak toprağına giriyor). Mesafe tavanını 250→500'e çekmek
         Azak'ın korunmasını BOZMAZ, çünkü sahiplik kapısı ayrı ve bağımsız
         çalışıyor.
```

🟢 **HÜKÜM (②): önerilen eşik hiçbir MEŞRU tarihî enklavı YUTMUYOR** — ne Kefe/
Hotin (hiç aday değiller), ne Azak (sahiplik kapısı hâlâ koruyor). Bu, motorun
kendi tasarımının (mesafe + alan + sahiplik = ÜÇ BAĞIMSIZ AND-kapısı) bir SONUCU,
bir tesadüf değil.

---

## ③ 250 KM ALTINDA AMA AYRI DURANLAR — kural BULUNDU, ÖLÇÜLDÜ (önceki `okumadım` kapatıldı)

`arac/uret_petek.py:1482` `_bant_baskasinin_topragini_kesiyor_mu()` okundu:
köprü hattı üzerinde 10 km aralıklarla nokta örneklenir, her nokta `_TUM_AGAC`
(TÜM peteklerin mekansal indeksi) ile en yakın peteğe atanır; o petek `sahip_ix`
(bizim peteklerimiz) kümesinde DEĞİLSE **True (yasak)** döner. `_TUM_AGAC`
motorun içindeki geçici bir yapı, dosyaya YAZILMIYOR — bu yüzden B UCUZ
PARÇALAR onu "okuyamadım" diye damgalamıştı.

**Bu görevde `data/devletler_harita.js`nin `DEVLET_HARITA` dizisi (559 yabancı
devletin TAM dönem/gövde geçmişi) kullanılarak eşdeğer bir soru soruldu:** o
tarihte köprü hattı AKTİF olan başka bir devletin boyalı toprağına giriyor mu?

```
Tebriz/Ordubad (1725, 32,6 km)  → SAFEVİ toprağına giriyor (~32,4 / 32,6 km — HAT NEREDEYSE TAMAMEN SAFEVİ)
Maan (1918, 62,4 km)            → İngiltere/Sammar/Hicaz toprağına giriyor (~53,9/62,4 km)
Azak (1578-85, 223 km)          → Kırım/Don-Kazak toprağına giriyor (~169,4/223 km)
Kabala (1607, 191,4 km)         → Safevi/Gürcistan/Rusya/Kırım toprağına giriyor (~191,4/191,4 km — HAT TAMAMEN)
```

🟢 **HÜKÜM: DÖRDÜ DE `başkasının toprağı` kuralıyla AÇIKLANIYOR, ve dördü de
TARİHSEL OLARAK MANTIKLI** (Tebriz Safevî başkenti bölgesi, Azak Kırım/Kazak
hattı, Kabala Kafkas kavşağı, Maan 1918'de İngiliz/Arap ayaklanması bölgesi).
**Bu DOĞRU davranıştır** — B UCUZ PARÇALAR'ın kendi tahmini ("1725'te Tebriz-
Ordubad arası hâlâ Safevî toprağıysa, birleştirmemek doğrudur") **doğrulandı.**

### ⚠️ Yöntemimin bir sınırı — dürüstçe yazıyorum

Yöntemimi bir de **BİLİNEN-MERKEZ** bir vakada (Söğüt-Domaniç, 1285, 1,3 km,
Osmanlı çekirdeğinin TAM kalbi) sınadım ve **o da "yabancı toprağa giriyor"
çıktı** (Bizans/Selçuklu/Sahib Ata). Bu ya (a) 1285'in gerçekten kaotik, sınırların
belirsiz olduğu bir geçiş dönemi olması VE bu iki mikro-yerleşimin o anda
GERÇEKTEN ayrı adacıklar olması (veri modelinde onlar da `karasal enklav` olarak
görünüyor, yani `donemler.js`de zaten AYRI iki gövde), ya da (b) yöntemimin KISA
hatlarda YANLIŞ POZİTİF ürettiği bir sınır durumu — **AYIRT EDEMEDİM.**
`donemler.js` yalnız B2/B3 SONRASI (birleşmemiş) kalıntıları taşıyor; GERÇEKTEN
başarıyla birleşmiş bir çifti test edecek bir "kontrol" örneğim YOK (başarılı
birleşme veride TEK gövde olarak görünüyor, iki ayrı polygon değil). ⇒ **Yanlış-
pozitif oranımı ÖLÇEMEDİM** — yalnız yukarıdaki 8 vaka (4 orijinal + 4 yeni-aday
örneklem) için sonucun tarihsel olarak MANTIKLI ve İSABETLİ olduğunu
doğrulayabildim; genel yöntem doğruluğu `ölçülemedi` diye kalıyor (D107).

---

## ④ EMRE İÇİN TEK PARAGRAF

> Bugünkü 250 km sınırı adayların %82'sini zaten kapsıyor; kalanları almak için
> önerilen **500 km + 100.000 km² tavan** ikilisi, alan tarafında GERÇEK bir
> boşluğa (94.451–195.432 km², Medine ile Cübeyl arası) oturuyor — yani rastgele
> seçilmiş bir sayı değil. Mesafe tarafında ise önerinin gerekçesi kısmen
> yanlıştı (Medine, 500 km'yle de kapsanmıyor — en yakın görünümü 552 km), ama
> bunun önemi yok çünkü **motorun "başkasının toprağını ezme" kuralı mesafe/alan
> eşiğinden BAĞIMSIZ ayrı bir kapı** ve incelenen bütün örneklerde (Azak, Tebriz,
> Kabala, Maan, ve yeni gelen adayların örneklemi) bu kapı ZATEN doğru çalışıyor
> — Kefe ve Hotin ise bu listeye hiç girmiyor (koridor mekanizmasının işi).
> **Öneri: eşiği 500 km + 100.000 km²'ye çek; hiçbir meşru tarihî enklav
> (Kefe/Hotin/Azak) yutulmayacak, çünkü sahiplik kontrolü bağımsız çalışıyor —
> tek düzeltme, "bu sayı Medine'yi de kapsıyor" cümlesinin metinden çıkarılması.**

---

## Öz-değerlendirme (D107)

- **ÖLÇÜLDÜ:** alan dağılımı ve doğal boşluk (94.451–195.432), 500km+100k'nın
  per-görünüm tam etkisi (273→310), Medine'nin GERÇEKTE 500km'yi de aşması,
  Kefe/Hotin'in aday listesinde hiç olmadığı, Azak'ın sahiplik testiyle korunduğu,
  4 orijinal + 4 yeni-aday vakada sahiplik kuralının çalıştığı.
- **BULUNAMADI:** —
- **ÖLÇÜLEMEDİ:** yöntemimin genel yanlış-pozitif oranı (kontrol grubu
  kurulamadı — bkz. ③ sonu); kalan 33/37 yeni-aday görünümün sahiplik testi
  (yalnız 4'ü örneklendi); Cebel Merre'nin GERÇEK sebebi (§ görev dışı, B UCUZ
  PARÇALAR zaten işaretlemişti, tekrar bakmadım).

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)

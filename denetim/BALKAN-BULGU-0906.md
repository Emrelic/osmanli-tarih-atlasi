# BALKAN-DOĞU AVRUPA — 1923 sınır denetimi · BULGULAR · 6 Eylül 2026

> Oturum: `BALKAN-DOĞU AVRUPA` · Koordinatör: 1.MURAT HÜDAVENDİGAR
> Yöntem: `oturumlar/YONTEM-1923-SINIR.md` (TEK OTORİTE)
> Bölge ölçütü: `denetim/ARAC-BOLGE-KUTU-0906.js` (TEK OTORİTE, cascade)

---

## ⓪ TABAN — DOĞRULANDI

```
BALKANLAR 389 + DOGU-AVRUPA 206 = 595 nokta · 18 BENZERSİZ kimlik
```
Alet: `denetim/ARAC-BALKAN-DENETIM-0906.js` (sürüm 2 — otoriteyi ÇAĞIRIR,
kendi kutusunu KURMAZ). Şartnamenin sayısı **birebir** üretildi.

⚠️ Şartname *"26 kimlik"* diyordu; ölçüm **18**. Koordinatör düzeltti: 26 bir
TOPLAM'dı, alt bölgeler toplandığı için şişikti (ASYA yakaladı).

---

## ① 🔴 D SINIFI TRİYAJI GÜVENİLMEZ — ölçüldü

> Koordinatörün isteğiyle ayrı satır: **`ARAC-1923-TRIYAJ-0906.js`in D
> sınıfına (sömürge/metropol şüphesi) dokunacak her oturumun bilmesi
> gereken şey budur.**

D sınıfı, künyenin `bolge:` alanını `BOLGE_KUTU` (satır 62-66) sözlüğündeki
**bağımsız dikdörtgenlerle** karşılaştırır. O dikdörtgenler bir bölüntü
DEĞİLDİR — ölçüldü (`denetim/ARAC-KUTU-KAPSAMA-0906.js`):

```
kutu zarfında (lat 35-72 · lon -12..60) sahipli nokta   1278
🔴 HİÇBİR kutuya girmeyen      122   (%9,5)
🟡 BİRDEN ÇOK kutuya giren     483   (%37,8)
en büyük örtüşmeler: anadolu∩balkanlar 106 · bati-avrupa∩iberya 85 ·
                     balkanlar∩italya 62 · dogu-avrupa∩kuzey-avrupa 47
```

⇒ D sınıfının *"bölgesinin DIŞINDA"* saydığı noktaların bir kısmı aslında
**hiçbir kutuya girmiyor** (yani "dışında" sayılması bir ölçüm değil, bir
kapsama boşluğu), bir kısmı da **başka bir kutunun içinde**.
🔴 Öksüzlerin içinde **Atina · Girit · bütün Kiklad adaları · Kıbrıs ·
Malta · Kafkasya · Levant** var — ve üçü GERÇEK hayalet taşıyor
(Soçi · Sohum · Derbend, `rusya`, 6,6 yıl).

📌 Koordinatör D'yi zaten *"aday listesi, kusur listesi değil"* diye
damgalamıştı; bu ölçüm **niçin** öyle olduğunu veriyor. Damga doğruydu,
gerekçesi eksikti.
🟢 Ve bu bulgu partisyonu ÇÜRÜTMÜYOR — `ARAC-BOLGE-KUTU-0906.js` bir
cascade olduğu için öksüz 0 · örtüşme 0. Çürüyen yalnız **D sınıfının
kullandığı eski kutular.**

---

## ② KUSUR TABLOSU — bütün küme tarandı, elle verilen liste değil

```
🔴 4c HAYALET   8 nokta-dönem / 4 kimlik
   rusya      3   Soçi · Tuapse · İsmail      künye t:1917-03-15   6,6 yıl
   romanya    2   Bükreş · Yaş                künye t:1881-03-26  42,6 yıl
   karadag    2   Cetinje · Podgorica         künye t:1918-11-26   4,9 yıl
   avusturya  1   Graz                        künye t:1918-11-11   5,0 yıl
                  [`avusturya` bir id DEĞİL — `habsburg`un `harita:` anahtarı]
🟢 4d ERKEN          0
🟢 KÜNYESİZ kimlik   0
🟢 RENKSİZ (çizilmeyen) 0
```
📌 **Şartnamenin beş kaleminin dışında altıncı bir 4c/4d kusuru ÇIKMADI.**
Bu bir kapsam kanıtıdır: liste elle verilmedi, bütün küme tarandı.

⚠️ Ama **4c/4d kusurun tamamı değildir** — aşağıdaki ③ ve ④ hiçbir künyeyi
aşmıyor ve hiçbir denetime görünmüyor.

---

## ③ 🔴🔴 BESARABYA — 7 nokta, 6'sı GÖRÜNMEZ

```
GÖRÜNEN     İsmail  `rusya 1878-07-13 → 1923-10-29`  ⇒ 4c GÖRÜR
GÖRÜNMEYEN  Kili · Kahul · Bolgrad · Soroka · Orhei · Bender
            `sovyet-rusya 1917-11-07 → 1923-10-29`
            `sovyet-rusya` künyesi 1923-10-29'a AÇIK ⇒ HİÇBİR KÜNYE AŞILMIYOR
```
🔴 TDV üç gövdede Besarabya'yı **1918'den itibaren Romanya'da** gösteriyor
(`bucak` · `kili` · `romanya`). Ayrıntı ve alıntılar:
`denetim/yer_yama_balkan_1923.js` başlığı.

📌 Sınıf: **künye penceresi İÇİNDE kalan yanlış atıf.** Aynı sınıfın bir
önceki vakası `hafsi` (5 Eylül): orada 29 kusurun 17'si görünmüyordu,
burada 7'nin 6'sı. ⇒ *Bir denetimin gördüğü şey, kusurun büyüklüğüyle
değil, kusurun denetimin SORDUĞU SORUYA denk gelmesiyle belirleniyor.*

---

## ④ 🔴 YENİ KUSUR SINIFI — `OSMANLI` ile `tbmm-turkiye` ÇATIŞIYOR

Şartnamede yok; kümeyi tararken çıktı.

```
1923-10-28'de  tbmm-turkiye  230 nokta   ·   OSMANLI (`d:`)  12 nokta
tbmm-turkiye başlangıç günleri:
   1920-04-23  210   ·   1921-10-13  10   ·   1921-10-20   8   ·   1922-09  2
```

🔴 **VE DÖRT NOKTA AYNI GÜNÜ FARKLI ALANDA TAŞIYOR:**
```
Antep · Kilis · Mersin · Payas     `d:` OSMANLI      1921-10-20 → 1923-10-29
Suruç · Akçakale · Ceylanpınar ·   `s:` tbmm-turkiye 1921-10-20 → 1923-10-29
Nusaybin · Silopi · Dörtyol ·
Erzin · Yumurtalık
```
⇒ **Aynı gün (Ankara İtilâfnâmesi), aynı olay, İKİ FARKLI KODLAMA.**
🔴 Ve en keskin çift: **Payas (36,76/36,21) `OSMANLI`** ile **Dörtyol
(36,84/36,22) `tbmm-turkiye`** — aradaki mesafe **9 km**.

Kalan sekiz `OSMANLI` noktası hiç bölünmemiş:
```
Ilgın · Karapınar · Ulukışla  d: 1468-01-01 → 1923-10-29
Tosya                         d: 1461-06-01 → 1923-10-29
Kelkit                        d: 1473-08-11 → 1923-10-29
Çaldıran · Başkale            d: 1639-05-17 → 1923-10-29   ← ORTADOĞU'nun
Şırnak                        d: 1891-01-01 → 1923-10-29   ← ORTADOĞU'nun
```

🔴 **HİÇBİR DENETİME GÖRÜNMÜYOR** çünkü `d:` Osmanlı çekirdek katmanıdır ve
**künyesi yoktur** — `4c`/`4d` bir künye penceresi ister, burada pencere
kavramı yok. Besarabya ile aynı aile: *denetimin sorusu bu kaydı hiç
kapsamıyor.*

⚠️ **HÜKÜM VERMİYORUM.** Bu bir veri hatası da olabilir, bir modelleme
seçimi de: `d:`nin 1923-10-29'a kadar sürmesi "Osmanlı Devleti resmen
29 Ekim'e kadar vardı" demenin bir yolu olabilir. Ama o zaman **230
noktanın niçin `tbmm-turkiye` olduğu** açıklanmalı — ve ikisi aynı anda
doğru olamaz.
⇒ Karar koordinatörün. Benim payım **9 nokta**, ORTADOĞU'nun **3**.

---

## ⑤ KAPSAM — 595'in %57'si Balkanlar/Doğu Avrupa

Cascade bir bölüntüdür ve bölüntü olmak için coğrafî olmak zorunda değil.
Kabaca tasnif edildi (bir ölçüt değil, **rapor** içindir):
```
BALKAN / DOĞU AVRUPA   337  (%57)
ANADOLU                173  (%29)   ← cascade Batı+Orta Anadolu'yu bize verir
İTALYA anakara/ada      50  (%8)    ← Roma · Napoli · Venedik · Sicilya
KIBRIS                  20  (%3)
LEVANT (Suriye)         15  (%3)    🔴 12'si ORTADOĞU'nun yamasında ZATEN VAR
```
🔴 **`denetim/yer_yama_manda_0906.js` benim kutumdaki 12 Suriye noktasını
zaten işlemiş** (Antakya · Halep · Hama · Humus · Trablusşam · Rakka ·
Tedmür · Azez · Münbiç · Cerablus · Ayn el-Arab · İskenderun).
⇒ Cascade matematiksel olarak temiz, ama **fiilî iş bölümü ondan farklı**.
Zarar YOK (onlar yaptı, ben yapmadım) — ama bir sonraki oturum cascade'e
bakıp *"bu 12 bende"* derse ikinci kez yapar.

---

## ⑤b 🟢 KALEM ④ ÖLÇÜLDÜ VE **REDDEDİLDİ** — `oniki-ada-italyan` YAZILMAZ

Şartname bunu *"künye VAR, RENGİ YOK ⇒ hazır bekleyen künye"* diye veriyor.
Ölçüldü: **kusur yok, ve künye atıl olduğu için değil — atlasın ona
ihtiyacı olmadığı için atıl.**

### TDV statüyü açıkça söylüyor: 1912-1923 arası **İŞGAL**
> `oniki-ada` (Cevdet Küçük): «İtalya **28 Nisan - 20 Mayıs 1912** tarihleri
> arasında … toplam on altı adayı **işgal etti**.» ·
> «Böylece … Osmanlı Devleti'nin adalar üzerindeki **egemenlik hakları
> kaldırılmamış oldu**.» · «Antlaşmayı 11 Ocak 1924'te tasdik eden İtalya
> **resmen egemenliğine aldığı** Rodos, Oniki Ada ve Meis'i…»
> `rodos`: «**1522-1912 yılları arasında** Osmanlı Devleti idaresi altında»

### Ve atlas bunu ZATEN tam olarak böyle modellemiş
```
d:   OSMANLI            … → 1923-07-24    egemenlik (TDV ile BİREBİR)
isg: italya 1912-05-xx  → 1923-07-24      işgal örtüsü — 13/13 ADA VAR
s:   italya 1923-07-24  → 1923-10-29      Lozan
```
`isg:` günleri ada ada ayrışmış: `Rodos·Lindos 05-04` · dokuz ada `05-12` ·
`İstanköy 05-21`. Kronoloji de tam: çekirdekte 0 gün uzaklıkta ve konusu
birebir üç madde («Rodos'un İtalyan işgali» · «Onikiada'nın İtalyan işgali»
· «İstanköy'ün işgali») artı `1923-07-24` «Lozan Antlaşması».

⇒ **HÜKÜM ÖNERİSİ (hüküm koordinatörün):** `oniki-ada-italyan`ı `s:` olarak
yazmak, TDV'nin *"egemenlik hakları kaldırılmamış"* cümlesini çiğner —
**işgali tasarruf yapar** (`§11`in SEFER · ANILMA · İSYAN · İDARÎ DEVİR
ailesinin beşincisi). `isg:`e ikinci kimlik koymak da mükerrer olur.
🟢 **Renk kalemi KAPANIYOR: bu künye için renk gerekmiyor.**

### 🟡 İki küçük bulgu — DEĞİŞTİRİLMEDİ
```
İSTANKÖY 1 GÜN AYRIŞIYOR: veri `isg:1912-05-21` (ve çekirdek maddesi de
   21'inde) · TDV İKİ gövdede «20 Mayıs 1912»
   🔴 Değiştirilmedi: kapatılacak ihlal YOK, verinin kaynağı bilinmiyor,
     ve 1 günlük "düzeltme" hem `isg:`i hem kronoloji maddesini bağlar.
13 `isg:` DÖNEMİNİN 13'ünde de `kaynak:` BOŞ — günler gün hassasiyetinde
   ama dayanağı yazılı değil (`§4`).
```

---

## ⑤c 🔴🔴 ATLAS ÇAPINDA KRONOLOJİ BORCU — 1917 RUS İHTİLÂLLERİ

Kafkas yamasının 2s kapısı ölçülürken çıktı; **bu bölgeden büyük.**

```
1917-03-15  veride 446 DÖNEMİN kırılma günü
            en yakın çekirdek madde  4 gün · «Bağdat'ın kaybı»       ALAKASIZ
1917-11-07  veride 896 DÖNEMİN kırılma günü
            en yakın çekirdek madde  0 gün · «Üçüncü Gazze Muharebesi
                                       — Gazze ve Han Yûnus'un kaybı» ALAKASIZ
```
Çekirdek tarandı (`ihtilâl|ihtilal|devrim|bolşevik|Çarlık`, 34 dosya):
🔴 **1917 Rus ihtilâlleri hakkında çekirdekte TEK BİR MADDE YOK.** On
eşleşmenin hepsi başka olaylar (Fransız Devrimi · Sırp İsyanı · 1848 …).

⇒ **1342 dönem sınırı**, olayı çekirdekte anlatılmadan kapanıyor.
`Değişmez 2` **tesadüfen** geçiyor — YÖNTEM §⑤'in tarif ettiği tuzağın
atlastaki en yüklü örneği.

⚠️ İki madde `KRONOLOJI-BALKAN-0906.json`a **ayrı kovada** kondu: ön koşul
DEĞİLLER ve **kaynakları aranmadı** (TDV `rusya` okunmadı — damga:
**okumadım**, `kaynak:` alanına aynen yazıldı). Ön koşul maddeleriyle aynı
kovaya konsaydı, aranmamış bir kaynak aranmış görünürdü.

---

## ⑤d 🟡 AÇIK KALEM — SOHUM ve GÜRCİSTAN KONVANSİYONU (bu turda YAZILMADI)

> Koordinatör hükmü: *"YAZMA, KAYIT AÇ."* Sevk sonraya; altı oturum yüklü.
> Kimlik kalemi kuralı geçerli: ilk ölçen bu oturum.

`rusya` hayaletinin altı noktasından **beşi** yazıldı
(`denetim/yer_yama_kafkas_rusya.js` — Soçi·Tuapse·Maykop·Derbend, artı
İsmail Besarabya yamasında). **Sohum yazılmadı.**

### Niçin: komşu kanıtı BÖLÜNÜYOR
```
Sohum (43,00 / 41,02 — Abhazya)   bugün: `rusya 1810-07-11 → 1923-10-29`
en yakın üç komşu ÜÇ FARKLI konvansiyon söylüyor:
  Soçi     123,8 km   kendisi de BOZUK (bu yamanın konusu)
  Kutaisi  159,4 km   transkafkasya 1917-11-07 → 1918-05-26
                      gurcistan-demokratik-cumhuriyeti → 1921-03-16
                      sovyet-rusya 1921-03-16 → 1923-10-29
  Batum    159,4 km   sovyet-rusya 1917-11-07 → 1918-04-14
                      🔴 BOŞLUK 1918-04-14 → 1918-12-01 (8 ay)
                      gurcistan-demokratik 1918-12-01 → 1921-03-16
                      sovyet-rusya 1921-03-16 → 1923-10-29
  ve Tiflis           DÜZ üç parçalı zincir (transkafkasya HİÇ YOK)
```
⇒ **Verinin kendi Gürcü konvansiyonu tutarlı değil.** Sohum için bir zincir
seçmek, üç konvansiyondan birini **kaynaksız tercih etmek** olurdu.
🟢 Kimlikler hazır ve renkli — `transkafkasya` (1917-11-07 → 1918-05-28) ·
`gurcistan-demokratik-cumhuriyeti` (1918-05-26 → 1921-03-16). **Eksik olan
kimlik değil, HÜKÜM.**

### Bu kalemin İÇİNDEKİLER — üçü ayrı ölçüm ister
```
① Sohum'un 1917-1923 zinciri            (kimlik seçimi)
② Batum'un 1918-04-14 → 1918-12-01 arası 8 AYLIK BOŞLUĞU
   ⚠️ Bu bir `Değişmez 1` ihlali olabilir — ÖLÇÜLMEDİ
③ Kutaisi ↔ Tiflis ayrışması: `transkafkasya` kimliği bazı noktalarda VAR,
   bazılarında YOK. Hangisi doğru — ve kaç nokta etkileniyor? ÖLÇÜLMEDİ
```
⚠️ **Coğrafî sahiplik ayrı:** cascade Sohum·Batum·Kutaisi·Tiflis'i
`ORTADOGU-IRAN`a veriyor (lon ≥ 40 ya da lat < 34-72 bandı dışı). Ama
`rusya` bir **kimlik kalemi** ve bölünmez ⇒ ilk ölçen bu oturumda.

---

## ⑥ ÜRETİLEN DOSYALAR

```
denetim/yer_yama_balkan_1923.js                11 kayıt · biçim sınavı ÇIKIŞ 0
denetim/yer_yama_kafkas_rusya.js                4 kayıt · biçim sınavı ÇIKIŞ 0
denetim/yer_yama_tbmm_dort_0906.js              4 kayıt · biçim sınavı ÇIKIŞ 0
denetim/yer_yama_ada_kaynak.js                 13 kayıt · `kaynak:` doldurma
denetim/yer_yama_ada_istankoy.js                1 kayıt · 🔴 KRONOLOJİ İLE
                                                BİRLİKTE uygulanır
denetim/yer_yama_balkan_avusturya_BEKLIYOR.js   1 kayıt · 🔴 RENK BEKLİYOR
denetim/KRONOLOJI-BALKAN-0906.json              4 madde + 1 mevcut madde
                                                düzeltmesi · ÜÇ KOVA
denetim/KRONOLOJI-1917-TASIMA-0906.json         3 madde · KUYRUKTAN
                                                ÇEKİRDEĞE TAŞIMA
denetim/ONERI-KUNYE-BALKAN-0906.json            künye beyanı (silme DEĞİL)
denetim/ARAC-BALKAN-TABAN-0906.js               taban ölçümü (iki tanım)
denetim/ARAC-BALKAN-KALEM-0906.js               beş kalemin ölçümü
denetim/ARAC-BALKAN-DENETIM-0906.js             tam kimlik denetimi (sürüm 2)
denetim/ARAC-KUTU-KAPSAMA-0906.js               D sınıfı bulgusu (§①)
```

---

## ⑦ DAMGALAR

```
ölçtüm      taban 595/18 · 4c-4d tam tarama · Besarabya 7 · OSMANLI/TBMM 12 ·
            D sınıfı kapsama · üretim sınavı (kapsam daralması 0, yeni
            sahipsizlik 0)
bulunamadı  Karadağ'ın Sırbistan'a katılma günü — TDV `karadag` TARİHSİZ
bulunamadı  `Burgaz (Burgas)` ve `Dobriç` — atlasta gerçekten YOK
            (`Lüleburgaz` BAŞKA yer, 41,41/27,36 — `§4` Türkçe yazım tuzağı)
ölçülemedi  `karadag` künyesinin `t:1918-11-26` gününün DAYANAĞI
ölçülemedi  1916-1918 Bulgar Dobruca geri alışı (Silistre'den devraldığım
            açık kalem) — TDV `dobruca` susuyor, akademik kaynağa ÇIKMADIM
okumadım    ~337 Balkan/Doğu Avrupa noktasının nokta nokta kaynak denetimi
            (şartname ⑧) — bu turda YAPILMADI
dokunmadım  `data/*.js` · `arac/*.py` (Koşu 7b canlı) · Viyana (kimlik
            kalemi bende ama nokta AVRUPA'nın kutusunda — koordinatör
            "tek yamada, sende" dedi, AVRUPA açılınca haber verilecek)
```

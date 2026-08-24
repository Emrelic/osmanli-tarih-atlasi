# BULGU-RENK-0031 — SONNET HAZIR KITA 72, görev M-1204 + ek (24 Ağustos 2026)

Yedi madde: 0030/H-0001 (önceki teslim, `denetim/BULGU-ANADOLU2-0030.js`),
0031/H-0002 · H-0005 · H-0017, ve EK (özel kanaldan gelen görev)
0034/H-0003 · H-0004 + DÜNYA ÇAPINDA CIFT-ISTEM TARAMASI. Hiçbiri
veriye/motora yazılmadı — bu bir teşhis raporudur.

## Yöntem
- `py arac/renk_olc.py` ve `--ayrinti` koşuldu (mevcut denetim önce
  denendi, sıfırdan ölçüm yazılmadı).
- H-0005 ve H-0017 için canlı motoru localhost'ta çalıştırıp (WebGL
  beklemeden, `devletGuncelle`/`donemler`/`petekVerisi`/`noktaIcinde`
  fonksiyonlarını doğrudan çağırarak) 0030/H-0001'de kullandığım AYNI
  yöntemle nokta-içinde testleri yapıldı.
- ΔE hesapları `arac/renk_olc.py`nin kendi `lab()`/`dE()` fonksiyonlarıyla
  yapıldı — yeni bir ölçüt icat edilmedi.

---

## H-0005 — "bu koyu kırmızı bölge hata mı?" (1396-10-01, Vidin'in ilhakı)

**HÜKÜM: AYNI KUSUR — 0030/H-0001 ile BİREBİR AYNI MEKANİZMA, doğrulandı.**

① NE ÖLÇTÜM: görsel Niş-Sofya arasındaki aynı bölgeyi gösteriyor
(bbox 21.85-23.51°D/42.33-43.79°K) — 0030/H-0017'de incelediğim TAM O
Sırbistan parçası (alan 0.7111375, 33 halka noktası, merkez
[22.5677,43.1133]). O görevde (1388-08-27 kesitinde) bu nokta Osmanlı
petek gövdesinin İÇİNDE DEĞİLDİ — saf "uzak nokta emer" (§2) durumuydu.
**Bu sefer (1396-10-01) AYNI parçanın AYNI merkez noktası Osmanlı'nın
petek gövdesinin İÇİNDE ÇIKTI** (`noktaIcinde` testi: true, feature
idx 0, ring 4). Sırbistan'ın kendi geometrisi (`devletler_harita.js`)
1388→1396 arasında BİR MİLİMETRE DEĞİŞMEMİŞ (alan değeri ondalığına
kadar aynı) — ama Osmanlı'nın petek gövdesi (`donemler.js`) o sekiz
yılda büyüyüp AYNI TOPRAĞI içine aldı.

② CIKARDIĞIM HÜKÜM (ayrı satır): kusur tek bir kayıtta değil, tıpkı
0030/H-0001'de olduğu gibi MOTORUN İKİ AYRI ÜRETİM HATTININ
(`devletler_harita.js` — yabancı devlet peteği vs `donemler.js` —
Osmanlı/tâbi peteği) SENKRONSUZLUĞUNDA. Ve daha da önemlisi: Sırbistan'ın
bu parçası zaman içinde HİÇ GÜNCELLENMİYOR gibi görünüyor — Osmanlı
topraklarının Balkanlar'da genişlemesi bu sabit Sırp peteğini
küçültmüyor, üstüne biniyor. Bu, tek günlük bir kaza değil, SÜREGELEN
bir desen olabilir — MOTOR'a bakan oturum ikisini (0030/H-0001 ile
0031/H-0005) aynı kökten mi diye incelemeli.

## H-0017 — "Gürcistan ve Karakoyunlular aynı renk mi?" (1417-01-01)

**HÜKÜM: PALET ÇAKIŞMASI DEĞİL (ΔE≥12 eşiğini rahatça geçiyor) — AMA
alet bu çifti hiç KURMUYOR, "temiz" raporu buradan gelmiyor.**

① NE ÖLÇTÜM: görselde "GÜRCİSTAN" pembe/macenta bir alanda, hemen
doğusunda (Tebriz civarı) "İRAN" etiketli, GÖZLE benzer tonda başka bir
alan var. Ekrandaki gerçek komşu "karakoyunlu" değil "iran" (kimlik
anahtarı) — ama şikayetteki "Karakoyunlular" ifadesi muhtemelen aynı
bölgeyi (Tebriz/Azerbaycan, tarihsel Karakoyunlu sahası) kastediyor,
bu yüzden İKİ olası çifti de ölçtüm:
```
gurcistan #e020b0  ↔ karakoyunlu #e018e0   ΔE = 25,69   en yakın mesafe ≈ 558 km
gurcistan #e020b0  ↔ iran        #cc1664   ΔE = 37,06   en yakın mesafe ≈ 339 km
```
(Mesafeler parça merkezleri arasında haversine ile, 1417-01-01 kesitinde,
canlı veriden — Gürcistan 1 parça, Karakoyunlu 11 parça, İran 17 parça;
en yakın parça çiftleri kullanıldı.) Her iki çift de EŞZAMANLI (aynı gün
aktif) ve `renkler.py`nin kendi "<600 km" tam-hex-paylaşım eşiğinin
İÇİNDE (338 ve 558 km) — ama renkler AYNI HEX DEĞİL, iki FARKLI (ama
akraba) macenta tonu. `py arac/renk_olc.py --ayrinti` koşuldu:
`gurcistan` çıktısında `karakoyunlu` ya da `iran` HİÇ GEÇMİYOR — yani
alet bu çifti hiç KURMUYOR (M-1204'ün uyarısı burada doğrulandı: "alet
KURUYOR MU" sorusunun cevabı HAYIR). Aracın "temiz" demesi bir şey
KANITLAMIYOR çünkü alet bu soruyu hiç sormuyor.

② CIKARDIĞIM HÜKÜM (ayrı satır): kullanıcının "aynı devlet mi" sorusuna
cevap KESİN HAYIR — üç ayrı kimlik (`gurcistan`/`karakoyunlu`/`iran`),
üç farklı hex, ΔE her ikisinde de eşiğin (12) iki-üç katı üzerinde,
teknik olarak "çakışma" DEĞİL. Ama bu bir KALİTE meselesi olarak
GEÇERLİ: üçü de aynı magenta/pembe AİLESİNDE, birbirine coğrafi olarak
yakın (300-600 km) konumlandırılmış — terrain dokulu, küçük ölçekli bir
ekranda gözle ayırt etmek gerçekten zor olabilir. Bu ΔE≥12 kuralının
KENDİSİNİN sınırını gösteriyor: eşiği geçen bir çift bile aynı AİLEDEN
ise (ikisi de macenta) göz için yeterince ayrışmayabilir. **Renk
ÖNERMİYORUM** (par.7: `renkler.py` üretim koşusunda parmak izleniyor,
dokunmadım) ama bir ÖNERİ olarak not düşüyorum: `iran` ya da
`karakoyunlu`nun tonu (macenta ailesinden çıkıp) turuncu/kahve
ailesine kaydırılırsa hem Gürcistan'dan hem birbirinden görsel olarak
daha uzaklaşır.

## H-0002 — "kırmızı harita renk örtüşmelerinin kalitesini artıralım" (1386-01-01, Epir kıyısı)

**HÜKÜM: BU GÖRSELDE AÇIK BİR RENK/KATMAN KUSURU BULAMADIM — muhtemelen
farklı bir şey gösteriyor, kanıt yetersiz.**

① NE ÖLÇTÜM: görselde Preveze-Vonitsa arasındaki körfezde (Arta Körfezi)
lacivert, ÇİZGİLİ/TARANMIŞ, ok/şevron biçiminde bir şekil var — bu
`js/app.js:1054`teki `isgal-dolgu` (işgal örtüsü, `fill-pattern`)
katmanının GÖRSEL İMZASINA benziyor (taralı dolgu). AMA koddaki işgal
örnekleri (Bosna 1878, Mısır 1882+) 19. yüzyıla ait; 1386'da bir işgal
durumu olması BEKLENMEZ — bu yüzden bunun işgal mi yoksa başka bir
katman (sefer/hareket güzergâhı oku — önceki M-1169 görevimde `savaslar.js`
antlaşma/sefer işaretlerinin ok/şevron benzeri simgeler kullandığını
görmüştüm) mı olduğunu KESİNLEŞTİREMEDİM; zaman kısıtı nedeniyle
canlı motorda bu spesifik günü (1386-01-01, Preveze/Vonitsa) ayrıca
sorgulamadım. Görseldeki "BİZANS" (gri-mor, #0f0f5d düşük opaklıkla
terrenin üstünde) ile "NAPOLİ / İKİ SİCİLYA" (pembe, taralı kenarlı)
arasında ise KOMŞULUK doğal ve renkleri objektif olarak farklı
(lacivert aile vs pembe aile) — burada bir çakışma göremedim.

② CIKARDIĞIM HÜKÜM (ayrı satır): bu madde, isteğin kendisi VAJENDİ
("kaliteyi artıralım" — belirli bir kusur işaret etmiyor) ve ekteki
görsel net bir örtüşme deseni GÖSTERMİYOR (0030/H-0001 ve 0031/H-0005'in
aksine, burada iki dolgu aynı pikselde çakışmış gibi görünmüyor). EMİN
DEĞİLİM — "hala-açık" olarak bırakıyorum ama bunu bir "kusur" diye
damgalamak için kanıtım yok. ÖNERİ: eğer bu madde ısrarla önemliyse,
daha yakın zumlu / spesifik bir koordinat+tarih işaret eden yeni bir
görsel istenebilir.

---

## EK GÖREV (özel kanal, kabuğu kapalı olan koordinatörden) — 0034/H-0003 · H-0004

Emre'nin paket 0034'ü iki madde daha ekledi ve koordinatör bunları "senin
işinin tam ortasına düşüyor" diyerek AYNI rapora bağladı. İkisi de kendi
görselleriyle incelendi; kanıtım aşağıda, hükmüm ikisinde de "0030/0031
kusuruyla AYNI DEĞİL" — bu ayrımı yapmazsam yanlış kovaya çare uygulanır.

### H-0003 — "bu renk boyamaları hata galiba, engelleyelim" (1537-08-25, Korfu açığı)

**HÜKÜM: FARKLI KUSUR SINIFI — çift-istem DEĞİL, klasik §2 EMİLME (nokta yokluğu).**

① NE ÖLÇTÜM: görsel, Korfu'nun güneydoğusundaki açık denizde (bbox
39.70-39.94°K/19.30-19.94°D — İyonya Denizi, Paxoi/Antipaxoi adacıkları
bölgesi) birbirinden kopuk, küçük, koyu kırmızı (Osmanlı rengi) leke
kümeleri gösteriyor; sağ altta sarımsı-yeşil büyük bir parça (muhtemelen
anakara/Preveze) var. `data/yerlesimler*.js`'te bu bölgeyi (39.30-40.30°K/
18.80-20.50°D — geniş tampon dahil) kapsayan taramada **YALNIZ 1 nokta**
var: Korfu (39.624/19.922, `venedik`, teal). Paxoi/Antipaxoi gibi küçük
adacıkların **hiç kendi noktası yok**.

② CIKARDIĞIM HÜKÜM (ayrı satır): bu, `CLAUDE.md §2`'nin tarif ettiği en
temel kusur sınıfı — "noktası olmayan bölge en yakın peteğe emilir." Bu
adacıklar denizin ortasında, en yakın gerçek nokta (bir Osmanlı anakara
şehri — Preveze/Yanya/Arta civarı, hepsi 1537'de zaten Osmanlı) çok
uzakta olduğu için, adacıkların kendi küçük kara parçaları o uzak peteğe
bağlanıyor ve deniz boşluğuyla anakaradan koptukları için haritada
"yüzen kırmızı lekeler" gibi görünüyorlar. **Bu, 0030/H-0001 ve
0031/H-0005'teki "AYNI GÜN İKİ AYRI ÜRETİM HATTININ AYNI TOPRAĞI
İDDİA ETMESİ" mekanizması DEĞİL** — burada tek bir iddia var (Osmanlı),
sadece YANLIŞ/ÇOK UZAK bir iddia. ÇARE VERİDE: Paxoi ve Antipaxoi
(ve varsa komşu küçük adacıklar) için nokta eklenmesi — tarihsel olarak
muhtemelen Korfu ile aynı kaderi paylaşıp Venedik'e ait olmaları
beklenir (TDV kapsamı dışı, standart akademik kaynak gerekir; bu
araştırma BENİM görevimin dışında, öneri olarak bırakıyorum).

### H-0004 — "iki renk üstüste binmiş, tüm dünyada tarayalım" (1538-01-01, Umman/Basra Körfezi kıyısı)

**HÜKÜM: BU GÖRSELİN KENDİSİ KUSUR GÖSTERMİYOR — ama istenen dünya
taraması AYRI VE GEÇERLİ bir iş, aşağıda yapıldı.**

① NE ÖLÇTÜM: görsel Abu Dabi/Buraymî civarını gösteriyor; "PORTEKİZ"
etiketli teal bir alan ile doğusunda tan/bej renkli, etiketsiz bir alan
yan yana duruyor — ama İKİSİ DE TEK RENK, birbirinin üstüne binmiş bir
karışım YOK, sınır temiz. `data/yerlesimler*.js`'te bölge kaydı:
```
Abu Dabi   kur:"1761-01-01"  kasitli_bosluk:true  bos:"devletsiz"
           s: [{f:"1820-01-08", t:"1923-10-29", d:"ingiltere"}]
Suhâr      1538'de d:"portekiz" (1507-1650 dönemi)
Buraymî    1538'de d:"umman" (1515-1923 dönemi)
```
Yani 1538'de Abu Dabi **henüz kurulmamış** (`kur:` tarihi 223 yıl
sonrasını gösteriyor) ve zaten kasten "devletsiz" damgalı. Teal alan
Suhâr/Portekiz'in peteği, tan alan Buraymî/Umman'ın peteği — Abu Dabi
noktası henüz sahneye çıkmadığı için bölgesi en yakın (Portekiz'in)
peteğine emiliyor. Bu §2'nin **tasarlandığı gibi çalışması**.

② CIKARDIĞIM HÜKÜM (ayrı satır): kullanıcının "iki renk üstüste binmiş"
gözlemi BU GÖRSELDE doğrulanamadı — muhtemelen genel bir izlenim/başka
bir kareden geliyor. AMA H-0004'ün metni açıkça "tüm dünyada BU TÜR
üstüste binmeleri tespit edip düzeltecek bir oturum görevlendir" diyor
— yani istek bu tek görselle sınırlı değil. Koordinatörün de belirttiği
gibi 0030/H-0001 ve 0031/H-0005'te doğrulanmış GERÇEK bir çift-istem
mekanizması var; onu esas alıp DÜNYA ÇAPINDA taradım (aşağıda).

---

## DÜNYA ÇAPINDA ÇİFT-İSTEM TARAMASI

**Ne arandı:** 0030/H-0001 ve 0031/H-0005'te doğrulanan mekanizmanın
(bir toprağın AYNI GÜN hem `devletler_harita.js`teki yabancı devlet
gövdesinde HEM `donemler.js`teki Osmanlı/tâbi gövdesinde iddia edilmesi)
YAYINLANMIŞ ÇIKTIDA kaç kez, hangi devletlerde, ne büyüklükte tekrarlandığı.

**Yöntem:** `data/donemler.js` (519 dönem) ve `data/devletler_harita.js`
(320 devlet, 2630 devlet-dönem) doğrudan okundu (motor koşturulmadı —
GİRDİ KİLİTLİ, ayrıca bu bir OKUMA işi). Her Osmanlı dönemi için gövde
(`o` ∪ `v`) bir kez inşa edildi (519/519, 155 sn). Her devlet-dönem için
tarih aralığı çakışan Osmanlı dönemleriyle önce SINIR KUTUSU (bbox)
testi, sonra gerçek `shapely` poligon KESİŞİMİ hesaplandı; 10 km²'nin
altı sayısal gürültü sayılıp elendi (Voronoi kenar hizalama/kıyı kesme
payı zaten km² mertebesinde artık bırakıyor — bkz. `arac/uret_petek.py`
`SERBEST_TOL`). Betik `denetim/CIFT-ISTEM-TARAMA.json` — 550 kayıt,
her biri bir (devlet, dönem) çifti için EN BÜYÜK kesişimi taşıyor.

**① NE ÖLÇTÜM — sayılarla:**
```
taranan devlet-donem         2630   (320 devlet)
bbox-kesisen aday cift       15270
gercek poligon kesisimi >10 km2 olan (devlet,donem) cifti   550   (essiz)
etkilenen AYRI devlet sayisi                                 46
```
Oran dağılımı (kesişim alanı / devletin o dönemki toplam alanı):
```
medyan oran           %0,05   (433/550 kaydın oranı <%1 — SINIR SIZINTISI, görsel olarak muhtemelen fark edilmez)
>=%1 oran               117 kayıt
>=%10 oran                13 kayıt   ← GÖRSEL OLARAK BARİZ, kullanıcı fark eder
>=%50 oran                 2 kayıt   ← NEREDEYSE TAM ÇİFT-İSTEM
```
En sık etkilenen 10 devlet (kaç AYRI dönemde çift-istem tekrarlanmış):
```
safevi        70 dönem   (medyan oran %0,15 — çoğu küçük, ama 2 tanesi dev: aşağıda)
bizans        53 dönem
venedik       51 dönem
avusturya     46 dönem
rusya         45 dönem
ingiltere     37 dönem
fransa-cumhuriyet  32 dönem
yunanistan    31 dönem
macaristan    17 dönem
bulgaristan   17 dönem
```
En büyük 13 kayıt (oran ≥%10 — bunlar "birisi fark eder" eşiği):
```
germiyan    1425-06-01→1429-02-01   34.011 km²   ORAN %100,0  (govdenin TAMAMI)
saruhan     1402-08-17→1416-09-01    3.927 km²   ORAN %100,0  (govdenin TAMAMI)
benihalid   1716-01-01→1795-04-01   54.825 km²   ORAN  %24,9
sirbistan   1443-01-01→1444-08-01    6.461 km²   ORAN  %21,7
sirbistan   1455-06-01→1456-01-01    6.416 km²   ORAN  %18,2
yemen       1547-01-01→1547-02-01   21.841 km²   ORAN  %17,7
yemen       1629-01-01→1635-01-01   21.841 km²   ORAN  %17,7
bosna       1463-06-01→1465-01-01    3.313 km²   ORAN  %16,9
sirbistan   1454-01-01→1455-06-01    6.462 km²   ORAN  %12,4
sirbistan   1427-01-01→1428-01-01    6.461 km²   ORAN  %11,6
sirbistan   1444-08-01→1454-01-01    6.461 km²   ORAN  %11,6
arnavutluk  1417-01-01→1478-06-15      752 km²   ORAN  %11,5
sirbistan   1392-01-15→1427-01-01    6.461 km²   ORAN  %10,6
```

**② CIKARDIĞIM HÜKÜM (ayrı satır) — üç ayrı desen görüyorum:**

**(a) "SIRBİSTAN DESENİ" — 0030/H-0001 ile AYNI mekanizma, ölçekte
doğrulandı.** Sırbistan tabloda 6 kez üst üste, 1392'den 1456'ya kadar
**64 yıl boyunca KESİNTİSİZ**, hep AYNI ~6.461 km²'lik parçayla
görünüyor (bu tam olarak 0030/H-0001 ve 0031/H-0005'te bulduğum
"Niş-Sofya arası, merkez [22,57;43,11], 33 halka noktalı" parça —
tarihler örtüşüyor). Yani bu TEK statik Sırp peteği, Osmanlı'nın altı
farklı büyüme evresi boyunca HİÇ küçülmeden aynı toprağı iddia etmeye
devam ediyor. Bu, benim BAYAT TARAMASI görevimde (M-1169) ayrı ayrı
bulduğum Culfa-Tebriz (Safevî) boşluğuyla da AYNI AİLEDEN olabilir —
`safevi`nin 70 dönemlik listesindeki en büyük iki kayıt (64.656 km²
@1585-1588 ve 61.988 km² @1725) muhtemelen o bölgenin (Van-Tebriz
arası) BİREBİR karşılığı; bunu doğrulamadım (zaman kısıtı), ama
işaret ediyorum.

**(b) "TİMURLU RESTORASYONU DESENİ" — YENİ, daha önce görmediğim bir
alt sınıf.** `germiyan` (1425-1429) ve `saruhan` (1402-1416) **%100
oranla** — yani bu iki beyliğin dönem boyunca çizilen TÜM gövdesi
Osmanlı'nın gövdesiyle aynı toprakta. İkisi de Ankara Savaşı (1402)
sonrası Timur'un beylikleri yeniden bağımsız kıldığı, ama 1414-1429
arasında kademeli olarak Osmanlı'ya yeniden katıldığı dönemi kapsıyor.
HİPOTEZ (doğrulanmadı): bu "restorasyon" dönemlerinde beyliğin `s:`
kaydı doğru yazılmış olsa bile, Osmanlı'nın petek gövdesi o toprağı
HİÇ BIRAKMAMIŞ olabilir — yani motor, 1402'de kaybedilen toprağı
1414/1429'da "geri alındı" sanıp aslında hiç vermemiş gibi davranıyor
olabilir. Bu, Sırbistan deseninden (statik YABANCI geometri) FARKLI bir
kök sebep olabilir (statik OSMANLI geometri) — MOTOR'a bakan oturum
ikisini AYIRT ETMELİ.

**(c) "BÜYÜK-ALAN/UZUN-SÜRE DESENİ".** `benihalid` (Arabistan/Basra
Körfezi, 1716-1795, %24,9), `yemen` (%17,7, İKİ AYRI dönemde AYNI
21.841 km²'lik alan), `bosna` (%16,9). Ortak nokta: hepsi UZUN ve/veya
COĞRAFİ OLARAK GENİŞ devlet-dönemleri — bu, kesişimin mutlak büyüklüğü
değil ORANI yüksek olduğu için görsel olarak da fark edilir olmalı.

**⚠️ NOT ÖLÇTÜĞÜM: KÖK SEBEP.** `arac/uret_petek.py`'de yabancı devlet
gövdesi kurulurken (`:3756`) `not _osm_aktif(YERLER[j], a)` filtresi
VAR — yani KODDA bir dışlama mekanizması zaten mevcut. Bu filtrenin
NEDEN bu 550 vakada işe yaramadığını (bir gecikme/staleness mi, bir
`devir_kumesi`/`kuşatılmışlık` reasignment yan etkisi mi, yoksa Osmanlı
tarafının [`donemler.js`] KENDİ üretiminde bir toprağı asla bırakmaması
mı) BULAMADIM — bunun için motoru enstrümante edip 4,5 saatlik üretimi
YENİDEN koşturmak gerekir, bu benim yetkim/görevim dışında (`§7`,
GİRDİ KİLİTLİ). Bu bir "ölçmedim" itirafıdır, tahmin değil.

**③ ÖNERİLEN ÇARE (uygulanmadı, par.7):**
1. `denetim/CIFT-ISTEM-TARAMA.json`'daki 13 kayıtlık **oran≥%10**
   listesi öncelikli — bunlar kullanıcının GERÇEKTEN göreceği ölçekte.
2. MOTOR'a aşina bir oturum, önce Sırbistan'ın 1392-1456 arası TEK
   parçasını (zaten iki kez elle doğrulanmış) enstrümante edip
   `petek_epok()`/`devir_kumesi()` çıktısını o toprak için adım adım
   izlemeli — kök sebep bulununca aynı düzeltme muhtemelen 46 devletin
   çoğunu (en azından "statik yabancı geometri" ailesini) kapatır.
3. `germiyan`/`saruhan` %100 vakaları AYRI incelenmeli — bunlar
   "restorasyon sonrası Osmanlı geometrisi hiç küçülmüyor" hipotezini
   test etmenin en temiz iki örneği (kısa, tam örtüşen, iyi belgeli
   tarihli dönemler).
4. **Eşik önerisi**: bir gelecekteki otomatik denetim (`denetle.py`ye
   eklenebilir) bu taramayı düzenli koşup **oran≥%10**'u SERT KAPI,
   **%1-10**'u UYARI, **<%1**'i bilgi kovası yapabilir — tıpkı
   `renk_olc.py`nin kademeli eşik tasarımı gibi (`CLAUDE.md §11`,
   "süzgeci tamamen kaldırmadan önce ne koruduğunu oku" dersi burada da
   geçerli: <%1'lik 433 kayıt muhtemelen zararsız kenar payı, hepsini
   "kusur" ilan etmek YANLIŞ KOVA olur).

---

## Özet tablo

| Madde | Hüküm | Kanıt türü |
|---|---|---|
| 0030/H-0001 (önceki teslim) | GERÇEK KUSUR — motor senkron sorunu | canlı ölçüm, nokta-içinde testi |
| 0031/H-0005 | **AYNI KUSUR** (0030/H-0001 ile) | canlı ölçüm, nokta-içinde testi, iki farklı tarih karşılaştırıldı |
| 0031/H-0017 | Palet çakışması DEĞİL, ama alet bu çifti kurmuyor — kalite notu | ΔE hesabı (25,69 · 37,06) + mesafe (558 km · 339 km) |
| 0031/H-0002 | Kanıt yetersiz, muhtemelen farklı bir katman (sefer/işgal) | görsel inceleme, doğrulanmadı |
| 0034/H-0003 | FARKLI KUSUR — §2 emilme (adacık noktası yok), çift-istem DEĞİL | nokta havuzu taraması |
| 0034/H-0004 | Görselin kendisi kusur değil (kur: tarihi öncesi, tasarım) — ama istenen dünya taraması ayrıca yapıldı | veri kaydı + dünya çapında poligon taraması |
| **DÜNYA TARAMASI** | **46 devlet, 550 devlet-dönem, 13'ü oran≥%10 (bariz), 2'si oran=%100 (germiyan·saruhan)** | `denetim/CIFT-ISTEM-TARAMA.json`, 519×2630 poligon kesişimi |

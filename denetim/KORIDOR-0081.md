# KORIDOR-0081 — rapor

## ⑦ ÖNGÖRÜ (ölçümden ÖNCE yazıldı · 28 Eylül 2026 · DEĞİŞTİRİLMEYECEK)

Paketin 10 vakası (H-0007 · H-0013 · H-0008 · H-0011 · H-0018 · H-0024 · H-0025 ·
H-0028 · H-0029 · H-0030), Emre'nin dört sınıfına dağılım tahmini:

```
① pas geçildi (eksklav doğru)      2
② birlikte alındı (kronoloji eksik) 3
③ anılmayacak önemde (kapsanır)    4
④ tâbi küçük yer (katılır)         1
```

Ek öngörü: en az 2 vaka dört sınıfın HİÇBİRİNE düşmeyecek — kusur koridorda değil,
fethedilen şehrin kendi `s:` döneminde / noktasızlıkta (petek emilmesi, CLAUDE.md §2)
çıkacak. H-0007 ve H-0013 aynı vaka olduğundan aynı sınıfa düşecek.

---

## 0. Özet — üç cümle

1. **Emre'nin dört sınıfı 10 vakanın yalnız 4'ünü açıklıyor.** En büyük kova (4 vaka)
   dört sınıfın hiçbiri değil: **koridor doğru, UZAKTAKİ kayıt yanlış** (kaynaksız,
   atlas-içi devralma ya da yıl→`01-01` kodlaması yüzünden olaydan aylar önce).
   Emre bunu H-0007'de kendisi söylemiş: *"değil ise yeni ele geçirmelerin doğruluğu
   sorgulanmalı."* Ölçüt bu cümleyi dördün ÖNÜNE koyuyor.
2. Kalan ikisi de koridor sınıfı değil: **anakronik vekil nokta** (Uzunköprü: kasaba
   1443'te köprüyle doğdu, atlas ona 1281'den Bizans sahibi yazmış) ve **öncü boşluk**
   (H-0030: altı Bosna noktasının fetih öncesi sahibi YOK ⇒ motor alanı BOŞ çiziyor —
   Değişmez 1 ve 1b bu soruyu sormuyor).
3. Kaynaklı ve kesin 4 kalem `denetim/KORIDOR-0081-uygula.py`de (kuru koşusu temiz);
   725'lik kovaya dokunulmadı, H-0019 açılmadı.

---

## ① ÖLÇÜT — bir kopukluk nasıl KARARA bağlanır

**Tanım.** Bir `d:`/`s:` kırılmasında (gün *g*) devlet X, *P* noktasını alıyor ve *P*
X'in gövdesinden kopuk. **Koridor** = *g* günü X'e ait olmayan ve *P*'ye X'in
gövdesinden DAHA YAKIN olan noktalar (Emre'nin cümlesinin birebir geometrisi:
`uzak(q, P) < uzak(P, gövde)` ve `uzak(q, gövde) < uzak(P, gövde)`).

**Sorular SIRAYLA sorulur** — ilk üçü kaynak aramadan ucuzdur ve çareleri kaynak
işi değildir; sıra atlanırsa kaynak araştırması motor kusurunu "tarih" diye yazar.

```
S0  NOKTA VAR MI?  mercek aralığı > 40 km (§⑥)  → Ⓝ ETİKETİ (CLAUDE.md §2).
    Çare kolu: yerleşim yoğunluğu (Oturum 0). ⚠️ SONLANDIRICI DEĞİL — S1-S4
    yine sorulur (§⑥: 40 km'de gerçek bir ada da Ⓝ çıkıyor). [28 Eyl düzeltmesi;
    ilk metin "kaynak ARANMAZ" diyordu ve bir ① vakasını kapatırdı.]
S1  KORİDOR NOKTASININ O GÜN SAHİBİ VAR MI?  yoksa → Ⓑ ÖNCÜ BOŞLUK.
    Çare: eksik dönem kaynaktan yazılır (ya da kasitli_bosluk beyanı).
S2  UZAKTAKİ KAYIT KAYNAKLI MI?  `kaynak:` yok · "veri-içi sözleşme" (D207) ·
    yıl-hassasiyetli `01-01` olayın kendisinden önce düşüyor · kaynakta birden
    çok tarih var ve seçilen, kopukluğu doğuran  → ⑤ UZAK KAYIT SORGULANIR.
    Çare: UZAK kaydın tarihi/sahibi düzelir; koridora DOKUNULMAZ.
S3  KORİDOR NOKTASI O GÜN VAR MIYDI?  kasaba sonradan kuruldu (kaynakta
    kuruluş) ve kayıt ona önceki bir sahip yazmış → ⑥ ANAKRONİK VEKİL.
    Çare: `kur:` yazılır; motor kurulmamış-boyanmış peteği komşuya devreder
    (uret_petek.py ~4604). Yeni sahip YAZILMAZ.
S4  (ancak şimdi) KAYNAK KORİDOR İÇİN NE DİYOR?
      aynı olayda/önce alındı, adıyla        → ② kronoloji + dönem yazılır
      fethedilene bağlıydı (nahiye/tâbi)      → ④ tâbilik/katılım yazılır
      başkasında kaldı, açık tanıklık         → ① `enklav:true` + kaynak
      susuyor; kaynak "X ve yöresi/çevresi"   → ③ uzak fethin dönemi koridoru
        diyor ve koridor küçük yer              kapsar (kaynak cümlesiyle)
      susuyor; hiçbiri                        → ① VARSAYILAN + "bulunamadı"
                                                (şartname ⑤: belgesiz koridor
                                                boyanmaz)
```

📌 S4'ün beş çıkışından dördü Emre'nin dört ihtimali; beşincisi (susan kaynak)
şartnamenin ⑤ maddesi. S0–S3 bu işin yeni katkısıdır ve hepsi **10 vakanın içinden
ölçülerek** doğdu, masa başında değil.

---

## ② PAKETİN 10 VAKASI — ölçütle sınıflandırma

> ⚠️ D207: atlas dökümleri (`KORIDOR-0081-dok.py`, `-kutu.py`) yalnız "harita ne
> gösteriyor" sorusunu cevaplar. Hükümlerin dayanağı sağdaki kaynak sütunudur.

| madde | hüküm | ölçülen | kaynak |
|---|---|---|---|
| **H-0007** | **⑤** + Ⓝ | Ahtapolu · Rezve · İğneada `d:` **1361-01-01**, `kaynak:"veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari"` — dayanağı ATLASIN KENDİSİ. O üç kayıt sonra TDV'yle **1369**'a düzeldi, kıyıdaki üç bağımlı düzelmedi ⇒ kopukluk 1361-1369. Koridor (Vize · Demirköy · Dereköy · Kofçaz · Kırklareli) **doğru**. Kıyıda Midye · Kıyıköy · Pınarhisar · Misivri · Ahyolu · Süzebolu için **nokta yok**. | TDV murad-i: *"770 (1369) baharında Pınarhisar, Kırkkilise ve Vize"* · kıyı üçlüsünün fethi: **bulunamadı** (TDV `ahtapolu`/`igneada`/`ahtabolu` 302) |
| **H-0013** | **⑤** | H-0007'nin aynısı (Dimetoka maddesi 1361-01-01 günüyle aynı kırılma) | aynı |
| **H-0008** | **⑥** | Uzunköprü `s: bizans 1281→1371-09-26`, kaynaksız; Edirne · Dimetoka 1361, Keşan 1360 ⇒ 10 yıllık ada. Kasaba o gün **yoktu**. | TDV murad-ii: *"Ergene Köprüsü … 1443'te tamamlanmıştır"*, köprü ucuna mescid, imaret, hamam, pazar yapıldı → `kur:"1443-01-01"` (uygula'da) |
| **H-0011** | **⑤** + ⑥ + Ⓝ | Gümülcine `d:` 1363, kaynaksız. Dedeağaç `s: bizans →1371-09-26` (kasaba XIX. yy — **kaynak bulunamadı**, TDV `dedeagac` 302). "Örmen" atlasta **nokta yok**. | TDV gumulcine KENDİ İÇİNDE üç tarih: *"762 (1361) civarı … bazı kaynaklarda 1363 … son araştırmalar 1371 Meriç savaşından biraz önce"* (D211 ⑥: bildirildi, TDV-içi seçim koordinatörün) |
| **H-0018** | **①** gerçek + Ⓝ | 1412: Şehirköy despotta, Niş · Vidin · Sofya Musa'da → Pirot gerçekten ada. 1413 sonrası Vidin adası: 42,6–44,3K × 21,5–24,6D kutusunda **toplam 4 nokta** (Sofya · Vidin · Niş · Şehirköy) — Kuzeybatı Bulgaristan boş, Niş/Şehirköy petekleri onu yutuyor. | TDV sehirkoy: *"1412'de Sırp Despotu Stefan Lazareviç tarafından alındı ve Mûsâ Çelebi'nin saldırısına karşı savunuldu"* · TDV nis: Niş 1413'te Stefan'a verildi |
| **H-0024** | **⑤** (hassasiyet) | Şehirköy `s: sirp-despotlugu` **1443-01-01** = YIL. Sefer 1443 Ekim-Aralık; `01-01` kodu haçlıyı İzladi'den (1443-11-01) 10 ay önce Pirot'a koyuyor ⇒ Niş Osmanlı iken Pirot haçlı: yapay ada. Kronoloji maddesinin *"aynı seferin devamında kasımda İzladi"* sıralaması da kaynakta yok (sahte kesinlik). **Güzergâh cevabı:** Morava vadisi. | TDV alacahisar: *"1443'te Alacahisar ve civarını yakıp yıktı"* · TDV nis: 1443'te Osmanlı kuvvetleri bozuldu, üs olmasın diye şehri kendileri yıktılar · TDV sehirkoy: 1443 zapt, gün yok |
| **H-0025** | **②** | Harita 1444-08-01'de Niş · Alacahisar · Kragujevac · Yagodina · Çaçak'ı iade ediyor; madde yalnız Semendire'yi anıyor. Vidin iade edilmiyor — **doğru**. Priştine atlasta 1439-44 hiç Osmanlı olmadığı için iadesi görünmüyor (aşağıda yan bulgu 4). | TDV semendire: *"yirmi dört önemli kalesiyle birlikte Semendire'yi ve işgal altındaki diğer Sırp topraklarını geri verdi"* · TDV nis · alacahisar · sehirkoy · pristine: dördü de 1444'te Sırplar'a |
| **H-0028** | **②** (Niş) · **①** (Priştine) | 1428: Niş · Şehirköy · Alacahisar aynı gün Osmanlı (harita doğru). Madde Alacahisar + Şehirköy'ü anıyor, **Niş'i anmıyor**. Priştine Sırp — doğru. | TDV nis: *"831'de (1428) Osmanlılar şehri geri aldı"* · TDV pristine: Osmanlı idaresi 1439-1444 ve 1455 — 1428'de değil |
| **H-0029** | **①** (koridor değil) | Braşov · Erdel Belgradı · Segesvar · Orsova `macaristan`; Eflak `tâbi` — sefer ilhak değil vasallık, harita bunu doğru gösteriyor. | TDV erdel: Alba Julia (Gyulafehérvár) ve Sighişoara (Segesvar) Erdel ovasının şehirleri; *"Buranın en önemli şehri … Kronstadt adıyla kurulan Braşov'dur"* · Orsova: **ad geçen TDV cümlesi bulunamadı**; TDV demirkapi yalnız *"1526'ya kadar Osmanlı-Macar sınır bölgesi"* diyor (D211 ⑧: dolaylı, dayanak sayılmadı) |
| **H-0030** | **Ⓑ** öncü boşluk | Görsel: 1478-06-15, 43,97–46,27K × 15,60–18,62D. Kutuda 6 nokta o gün **sahipsiz**: Krupa · Bosna Novi'si · Bosna Brod'u · Bosna Dubiçası · Kostayniçe · Jasenovaç — hiçbirinin Osmanlı fethinden önce dönemi yok. Krupa'nın `kur:"1565-01-01"`i **fetih yılı**, kuruluş değil. | HE (LZMK) altı madde: hepsi fetihten önce hrvatsko-ugarsko soylu mülkü (Babonić · Zrinski · Frankapan · ivanovci · Berislavić); Kostajnica 1258 IV. Béla beratı, Krupa XIII. yy sonu. → uygula'da |

### ⑦ Öngörü sınavı

```
                 öngörü   ölçüm
①                  2        2    ✓ (H-0018 Pirot · H-0029)
②                  3        2    ✗ bir eksik
③                  4        0    ✗ TAMAMEN ÇÜRÜDÜ
④                  1        0    ✗
dördün dışı      ≥ 2        6    ✓ yön doğru, ölçek 3 kat yanlış
  ⑤ uzak kayıt              4    (H-0007 · H-0013 · H-0011 · H-0024)
  ⑥ anakronik vekil         1    (H-0008; H-0011'de ikincil)
  Ⓑ öncü boşluk             1    (H-0030)
```

**Yanlış YÖNE tuttu:** ③'ün "koridor önemsizdi, uzak fetih kapsar" diye en büyük kova
olacağını sanmıştım — koridoru doğru, uzağı yanlış sanan bir görüş. Ölçüm tersini
gösterdi: **koridor kayıtları kaynaklıydı (Vize 1369 · Niş 1428 · Priştine), kaynaksız
olan uzaktaki kayıtlardı.** Emre'nin dört sınıfı "koridor mu eksik" diye soruyor; 10
vakanın 4'ünde cevap "koridor değil, fetih kaydı eksik/yanlış". Öngörünün çürümesi
S2'yi ölçütün başına koyma kararının kendisidir.

---

## ③ UYGULAYICI — `denetim/KORIDOR-0081-uygula.py`

Kuru koşu varsayılan; `--uygula` yazar. Her değişiklik `count == 1` sınaması arkasında,
iki kez koşulursa DURUR. Değişen dosya kümesi (4):

```
data/yerlesimler_ek29.js  H-0030  altı noktaya fetih öncesi s: (macaristan 1281→1526-08-29,
                                  avusturya 1526-08-29→fetih) · Krupa kur: silinir
data/yerlesimler_ek24.js  H-0008  Uzunköprü kur:"1443-01-01"
data/olaylar_serhat.js    H-0028  1428 maddesine Niş (b: · d: · kaynak:)
data/olaylar_ek.js        H-0025  1444 maddesine iade edilen yerler adıyla
```

Sınandı: değişmiş `yerlesimler_ek29.js` metni `girdi._cevir` ile ayrıştırıldı, altı
kaydın ilk iki dönemi beklenen gibi okundu, Krupa `kur=None`. `avusturya` künyesi
`f:"1526-08-29"`, `macaristan` `t:"1526-08-29"` — ikisi de pencere içinde.
**Koşturulmadı:** `denetle.py` (motor çıktısı ölçen değişmezler koşudan sonra anlamlı).
Beklenen yön: Değişmez 1 aynı (bu noktalar "tam sahipsiz" sayılmıyordu), Değişmez 7
H-0030 ve H-0008 bölgesinde −, H-0030 Bihaç eksklavı değişebilir (Krupa artık 1565
öncesi macaristan) — **ölçülmedi, öngörüdür.**

**Uygulayıcıya GİRMEYENLER ve nedeni:**
- H-0007/13 kıyı üçlüsü: doğru fetih yılı **bulunamadı**; 1361'i 1369'a çekmek bir
  uydurmayı başkasıyla değiştirmek olur (D210). Üstelik yan bulgu 1 bu kayıtları
  1403'ten itibaren BÜTÜNÜYLE değiştiriyor.
- H-0011 Gümülcine: TDV kendi içinde üç tarih veriyor; seçim koordinatör hükmü.
- H-0024 Şehirköy 1443: gün kaynakta yok; `01-01`'i Kasım'a çekmek "komşu günü"
  şartlarından ikisini karşılıyor (aynı süreç, yakın konum) ama İzladi maddesinin
  kendi günü de kaba (`1443-11-01` "Kasım 1443 - Ocak 1444") ⇒ zincirleme devralma
  yasağına takılıyor. Koordinatör hükmü.
- H-0030 fetih günleri HE ile çelişiyor (Jasenovac HE 1536 / atlas 1538 · Bosna Brod'u
  HE 1536 / atlas 1538 · Bosna Novi'si HE 1557 / atlas 1556) — mevcut kayıtlar
  kendi kaynaklarını taşıyor, dokunulmadı, bildirildi.

---

### ③b DÜZELTME — S3'ün çaresi YANLIŞTI (28 Eylül, koordinatörün koşusundan sonra)

Koordinatör `--uygula` koştu: Değişmez 1 314→309 ✓, 2s 180→179 ✓, ama **Değişmez 5a
✗ 1** — Uzunköprü `kur:1443` · ilk dönem 1281 (bizans) · 162 yıl önce. Raporda
"motor kurulmamış-boyanmış peteği devreder, `kur:` yazmak yeter" demiştim; motor için
doğru, **denetim için yanlış**: 5a "kuruluştan önce dönem"i affedilmez hata sayar.
Ve öbür çıkış da kapalı: 1443 öncesi dönemleri silmek noktayı "kurulmamış VE
sahipsiz" yapar, motor bunu KASITLI BOŞLUK sayıp devretmez (uret_petek.py ~4603) ⇒
Ergene vadisinde yeni delik.
⇒ **Ölçülen çelişki:** motorun devir mekanizması tam 5a'nın yasakladığı veri
biçimiyle tetikleniyor. 5a tavanı 0 olduğuna göre devir bugün hiçbir kayıtta
çalışmıyor. S3 (anakronik vekil) bu yüzden **veriyle çözülemez**; bir kural kararı
ister (5a'ya "kur öncesi dönem = devir beyanı" istisnası mı, yoksa motor devrini
sahipsiz kurulmamış noktaya da açmak mı). Karar koordinatör/Emre'nin.
`kur:` geri alındı: `denetim/KORIDOR-0081-uzunkopru-geri.py`. H-0008 AÇIK.

## ⑥ S0 EŞİĞİ — koordinatör şartı (28 Eylül): "S0'a SAYI koy"

Alet: `denetim/KORIDOR-0081-s0.py`. Ada, **göreli komşuluk çizgesiyle** (RNG ⊂
Delaunay: a-b arasındaki merceğe nokta düşmüyorsa komşu) bulunur — petek
bitişikliğinin kaynaksız yaklaşığı. P = adanın gövdeye en yakın üyesi, B = gövdedeki
karşılığı; **mercek** = o gün var olan, X'e ait olmayan, `uzak(q,P)` ve `uzak(q,B)`
ikisi de `uzak(P,B)`den küçük noktalar.

```
S0 ÖLÇÜSÜ   aralık = uzak(P,B) / (n_mercek + 1)     — merceği kaç km'de bir nokta bölüyor
S0 EŞİĞİ    aralık > 40 km  ⇒ Ⓝ ETİKETİ
```

| vaka | uzak(P,B) | n_mercek | aralık | 30 km | **40 km** | 50 km | ilk teslimdeki hükmüm |
|---|---|---|---|---|---|---|---|
| H-0007 | 77,2 | 6 | 11,0 | – | – | – | ⑤ (kıyı ötesi noktasız ama mercek DOLU) |
| H-0008 | 137,6 | 20 | 6,6 | – | – | – | ⑥ |
| H-0011 | 69,0 | 1 | 34,5 | Ⓝ | – | – | ⑤+⑥+Ⓝ |
| H-0018a Pirot 1412 | 112,4 | 1 | 56,2 | Ⓝ | **Ⓝ** | Ⓝ | ① gerçek |
| H-0018b Vidin 1413 | 148,6 | 2 | 49,5 | Ⓝ | **Ⓝ** | – | Ⓝ |
| H-0024 Pirot 1443 | 128,3 | 2 | 42,8 | Ⓝ | **Ⓝ** | – | ⑤ |
| H-0028 Alacahisar 1428 | — | — | — | | ADA DEĞİL (RNG'de gövdeye bağlı) | | ② |
| H-0025 · H-0029 · H-0030 | ada sorusu değil (iade listesi · sınır · sahipsizlik) | | | | | | |

🔴 **Eşik bir KAÇIŞ KAPISI olmasın diye S0 ARTIK SONLANDIRICI DEĞİL** — ölçüm bunu
kendisi gösterdi: 40 km'de Pirot 1412 Ⓝ çıkıyor, oysa TDV onu **gerçek ada** (①)
diye tanıklıyor. Eski metnim ("Ⓝ ise kaynak ARANMAZ") o vakayı kaynak işi yapılmadan
kapatırdı — koordinatörün korktuğu şey tam buydu ve 10 vakanın içinde gerçekleşti.
**Yeni kural:** Ⓝ bir ETİKETTİR, çare kolu açar (nokta yoğunluğu, Oturum 0) ama
S1–S4 YİNE sorulur. Ⓝ'nin ayırt edici değeri S4'ten sonra doğar: mercekteki bütün
noktaların sahibi kaynakla doğrulandıysa ve ada hâlâ duruyorsa, adanın sebebi
yalnız noktasızlıktır (H-0018b: Niş ve Pirot TDV'ye göre gerçekten despotta; Vidin'i
gövdeye bağlayan Kuzeybatı Bulgaristan'da **hiç nokta yok**).
📌 40 km'nin gerekçesi: 30 km H-0011'i de etiketler (merceği 1 nokta, 34,5 km —
koridor YOK değil SEYREK); 50 km H-0018b'yi kaçırır (Vidin'in adası noktasızlıktan
başka hiçbir şeyle açıklanamıyor). **Editoryal eşik, ölçülmüş iki uç arasında.**

🔴 **İKİNCİ TESLİMİ DEĞİŞTİREN BULGU — Değişmez 7 H-0007'yi GÖRMÜYOR.** D7'nin
bağı 150 km'lik mesafe; 1365'te İğneada→Lüleburgaz 77 km ⇒ D7'ye göre 92 noktalık
tek Osmanlı bileşeni, ada yok. Haritada ise ada (arada 6 Bizans noktası). RNG ile
bakınca ada. ⇒ **725 kovası Emre'nin kendi vakalarını İÇERMEYEBİLİR.** İkinci teslim
725'i S0–S3'ten geçirmeden önce kovanın kendisini RNG ile yeniden ölçmeli; aksi hâlde
yanlış evrende çalışırız. (Kaç vakayı kaçırdığını ölçmedim — D7'nin kendi listesini
`denetle.py` koşusu olmadan alamadım.)

## ⑦ 31 ÖNCÜ BOŞLUĞUN SINIFLAMASI (koordinatör ④)

Alet: `denetim/KORIDOR-0081-oncu-sinif.py`. Ölçüt kaynaksız ve yapısal: ilk dönemden
bir gün önce, o gün var olan en yakın 6 komşunun kaçı sahipli.
`ⓓ DELİK` ≥ 4 sahipli (boşluk dolu toprağın ortasında, görünür) · `ⓚ KASITLI` ≤ 2
(boş bölgenin parçası, eksik olan bayrak) · `ⓢ SINIR` 3.

```
31 = 5 H-0030 (uygulayıcıyla KAPANDI — koşudan sonra ağaçta artık öncü boşluk değil)
   + 15 ⓓ DELİK   Darfur 1400 · Agadez 1405 · Manama 1417 · Ecdâbiye 1551 · Tobruk 1556
                  Katar iç dolgu 1559 · Hâil 1779 · Antananarivo 1787 · Dilem 1792
                  Havta 1795 · Leylâ 1795 · Ogooué havzası 1837 · Hadramut 1881
                  Mukalla 1888 · Segu 1898
   +  7 ⓚ KASITLI Necid 1744 kümesi: Buraydâ · Dir'iye · Necid içi · Nefud · Riyad ·
                  Uneyze · Şakrâ — altısının 6/6 komşusu o gün sahipsiz; denetle.py'nin
                  kendi yorumu da "Riyad ve Dir'iye ile kasten sahipsiz" diyor ⇒ eksik
                  olan yalnız `kasitli_bosluk` bayrağı
   +  4 ⓢ SINIR   Bingazi · Merc · Beyzâ (1551, Berka kümesi) · Honolulu 1795
```

⚠️ ⓓ bir TARİH hükmü değil: "fetih öncesi sahip yazılmalı" der, **kim** olduğunu kaynak
söyler. İçinde bir alt sınıf var ve ayırmak kaynak ister: noktanın kendisi ilk
dönemiyle birlikte mi kuruldu (o zaman çare `kur:`, delik değil). Adayı: Agadez
(kuruluş tarihi ölçülmedi). Dördü (`tur:"bolge"`: Darfur · Katar iç dolgu · Ogooué ·
Hadramut) dolgu noktası — dolgunun sahipli komşular ortasında sahipsiz başlaması
kasıt olamaz, delik sınıfına yazdım.
⚠️ Ve alt sınır uyarısı aynen: `kur:`ı fetih yılıyla dolduranlar bu ölçümden kaçar.

## ④ YAN BULGULAR — işin içinden çıktı, kapsamı aşıyor

1. 🔴 **1403 Gelibolu Antlaşması Karadeniz kıyısı yazılmamış.** TDV
   suleyman-celebi-emir: *"Marmara denizinden Karadeniz'deki Mesembria'ya (Misivri)
   uzanan sahil toprakları Bizanslılar'a terkedildi."* Atlas Ahtapolu · Rezve · İğneada'yı
   1402-1413 Süleyman/Musa Çelebi'de gösteriyor. Kronoloji maddesi var (olaylar_ek.js
   `1403-06-01`, yalnız Selanik'i anıyor), yerleşim dönemi yok ⇒ Değişmez 2'nin ters yönü
   (madde var, kırılma yok). Bitiş günü (Osmanlı'nın geri alışı) **bulunamadı**. Sevk
   önerisi: Trakya/Karadeniz kıyı sahibine.
2. **Öncü boşluk — Değişmez 1 ve 1b'nin kör noktası.** `KORIDOR-0081-oncu-bosluk.py`:
   ilk dönemi 1281-01-01'den sonra başlayan, `kur:`u o dönemden önce/yok ve
   `kasitli_bosluk` taşımayan **31 nokta** (dünya). Değişmez 1 "hep sahipsiz"i, 1b
   "iki pencere arası"nı sorar; "ilk pencereden ÖNCE"yi kimse sormuyor. 31'in çoğu Necid
   (1744) · Libya (1551) · Körfez · Hadramut gibi kasıtlı çöl sınıfına BENZİYOR ama
   bayrak taşımıyor — ya bayrak eksik ya delik. Ayrıca `kur:`u fetih yılıyla dolduran
   kayıtlar (Krupa) bu ölçümden bile KAÇAR — sayı alt sınırdır.
3. **Sırp künyesi:** 1402 sonrası Priştine · Kragujevac · Semendire · Çaçak · Yagodina
   `d:"sirbistan"`, Niş · Şehirköy `d:"sirp-despotlugu"` — aynı polity iki kimlikle
   (renk aynı: ikisi de `harita:"sirbistan"`, görünmüyor ama Değişmez 4c/4d ve kronoloji
   bağı için iki ayrı devlet). `sirbistan-nemanjic` t: 1402-01-01. §3.5 künye aşımı
   sınıflaması gerekir — **sınıflandırmadım.**
4. **Priştine'nin iki penceresi eksik:** TDV pristine — 1412 Musa Çelebi, 1439-1444
   doğrudan Osmanlı (Gazi İsa Bey). Atlasta 1281-1455 kesintisiz `sirbistan`.
5. **Vidin 1408-1413:** TDV vidin — 1408'de Konstantin (Şişman oğlu) isyanı, 1413'te
   Musa'nın geri alma teşebbüsü *"Konstantin'in Vidin'i ele geçirdiğini gösterir"*.
   Atlas bu yılları Süleyman/Musa Çelebi'de gösteriyor.
6. **Alacahisar 1444-1454:** TDV — 1444'te Brankoviç'e, *"muhtemelen Varna zaferini
   takip eden günlerde"* yeniden Osmanlı, sonra tekrar Brankoviç, 1453 sonu/1454 başı
   Osmanlı. Atlas 1444-1454 tek parça despot.
7. **Anakronik vekil başka yerde de var:** 1365'te Mustafapaşa (Svilengrad) Osmanlı
   gösteriliyor; kasabanın kuruluşu kaynakla **ölçülmedi** — yalnız S3 adayı olarak
   not edildi (ad bir Osmanlı banisini çağrıştırıyor; bu bir ŞÜPHE, hüküm değil).

---

## ⑤ İSTEDİKLERİM

1. **Ölçüt kabulü** (§①, S0–S4 sırası). Kabul edilirse ikinci teslim 725'lik kovayı S0–S3
   ile MAKİNEYLE eler (kaynak aramadan: nokta sayısı · sahipsizlik · `kaynak:` alanı ·
   `kur:`), yalnız S4'e kalanlar kaynak ister. Öngörüm (ölçmeden): S0+S1+S2 725'in
   yarısından fazlasını alır.
2. `KORIDOR-0081-uygula.py --uygula` koşturulması (4 kalem, hepsi kaynaklı).
3. Yan bulgu 1'in (1403 kıyı) bir sahibe sevki — paketteki en büyük tek düzeltme o.
4. Değişmez 1'e "öncü boşluk" sorusunun eklenmesi kararı (yan bulgu 2) — `denetle.py`
   senin, ben dokunmadım.

## Dosyalar (hepsi bende, `denetim/KORIDOR-0081*`)

```
KORIDOR-0081.md              bu rapor
KORIDOR-0081-uygula.py       uygulayıcı (kuru koşu varsayılan)
KORIDOR-0081-dok.py          yerleşim dönem dökümü (atlas — delil değil)
KORIDOR-0081-kutu.py         kutu × gün sahiplik dökümü (atlas — delil değil)
KORIDOR-0081-oncu-bosluk.py  öncü boşluk ölçümü
KORIDOR-0081-tdv.py          TDV çekici (EKOKUMA-0077-C aracının kopyası)
KORIDOR-0081-tdv-onbellek/   çekilen TDV maddeleri (düz metin)
```

# LAB-KONUM-KUSURU-1010: devlet doğru, NOKTA yanlış (koordinat modern kasabada, tarihî site başka yerde)

> **Bu çalışma yalnız ölçümdür.** `data/` dosyalarına dokunulmadı (KOŞU 22 için donuk). Tavan yazılmadı, önerilmedi. `kaynak_durum.py ac` çalıştırılmadı. Push yapılmadı.
> **Taban:** `origin/main` @ `9ca1dba449dd27578452ce6e4667ebedd0961b49`. Ayrık worktree `C:\atlas-konum-olcum` üzerinde çalışıldı, iş bitince kaldırıldı.
> **Okuma:** `arac/girdi.py → yukle()` (izin listesi, **4300 nokta**). Yardımcı betikler scratch'te duruyor, depoya girmedi.
> **Kaynak kuralı (`oturumlar/HUKUM-KASA-1010.md §6`):** GeoNames modern koordinat için yeterlidir. Ortaçağ sitesi modern kasabadan AYRIYSA İKİNCİ TANIK ŞARTTIR. §6'nın saydığı tanıklar: **TGN · Pleiades · al-Ṯurayyā**. §6 Wikipedia/Wikidata'yı saymıyor. Bu yüzden bu raporda hiçbir kova Wikipedia'ya dayanmıyor. GeoNames yalnız *"atlas noktası modern kasabada mı"* sorusunun tanığı olarak kullanıldı.

## ⑤ ÖNGÖRÜ (ölçümden ÖNCE yazıldı: 2026-10-10 01:13 +0300)

| | öngörü |
|---|---|
| ① (a) ad farkı (parantezli/çift ad) bayrağı | ~600 nokta |
| ① (b) modern kuruluş yılı > ilk `s:` | ~10 |
| ① (c) ikinci gazetteer ≥5 km (kontrol edilenler içinde) | kontrol edilenlerin ~%25'i |
| ① (d) bilinen "taşınmış şehir" kalıbı | ~25 nokta |
| ① birleşim | ~650 |
| ① gerçek kusur tahmini (4300 içinde) | ~40 (%1) |
| ② KESİN | 6 (Merv, Delhi, Gence, Dimyat, Semerkant, +1) |
| ② ADAY | ~15 |
| ③ en büyük petek değişimi | Merv, ~2.000–5.000 km²; tipik ~200–800 km² |

**Karşılaştırma en altta (§ "Öngörü - ölçüm").**

---

## Yöntem: tanıklar indirildi, eşleştirme mekanik yapıldı

| tanık | ne alındı (gerçekten çekilen URL) | kayıt |
|---|---|---|
| al-Ṯurayyā | `https://raw.githubusercontent.com/althurayya/althurayya.github.io/master/master/places_new_structure.geojson` | 2.521 yer |
| Pleiades | `https://atlantides.org/downloads/pleiades/dumps/pleiades-places-latest.csv.gz` + `…/pleiades-names-latest.csv.gz` | 34.878 yer (koordinatlı) |
| Getty TGN | `https://vocab.getty.edu/sparql.json` (luc:term sorgusu). Kullanılan ID'ler aşağıdaki tablolarda | aday başına |
| GeoNames (yalnız modern) | `https://www.geonames.org/search.html?q=…` · `https://www.geonames.org/287286` | aday başına |

**Eşleştirme:** Her atlas noktası için 80 km içindeki gazetteer kayıtlarına bakıldı. Ad normalleştirildi (TR/translit katlama, `al-`/`el-` atma, ünsüz iskeleti), ardından difflib oranı hesaplandı. Eşik **0,84**, sinyal için **≥0,95**. Sonuç: **700 nokta** en az bir tanıkla eşleşti. Ad tutmayan ama koordinatı yakın olan yer de olabilir; bunlar eşleşmiş sayılmadı.

🔴 **TANIK GÜRÜLTÜSÜ ÖLÇÜLDÜ, eşik buna göre ayarlandı.** Pleiades'in atlasla ≤1,5 km uyuştuğu 99 noktada al-Ṯurayyā'nın atlasa uzaklığı şöyle çıktı: **medyan 2,9 km · p90 8,7 km** (maks. 41 km, çoğu bölge ya da kent adı karışıklığı). Yani al-Ṯurayyā tek başına 5–10 km dediğinde bu, kendi koordinat hatası kadardır. Bu yüzden şu kural konuldu:
- **al-Ṯurayyā tek tanık** olarak ancak **≥10 km** ise sinyaldir. 5–10 km arası `GÜRÜLTÜ` kovasına gider.
- **Pleiades** ancak `locationPrecision=precise` ise ve **≥5 km** ise sinyaldir.
- Her sinyalde varlık eşleşmesi elle okundu. Ada merkezi ile kasaba, bölge ile şehir, antik polis ile Osmanlı kasabası ya da tamamen başka kent çıkan 43 eşleşme `YANLIŞ EŞLEŞME / KAPSAM DIŞI` sayıldı ve kusur sayılmadı.

---

## ① EVREN: dört mekanik ölçüt

| ölçüt | tanım | işaretlenen |
|---|---|---|
| **(a)** ad farkı | `ad` parantez ya da `/` içeriyor, veya `data/ad_esanlam.js` eşanlam anahtarı | **1.430** |
| **(b)** modern kuruluş > ilk `s:` | Mekanik olarak **ÖLÇÜLEMEDİ**: veride modern yerleşimin kuruluş yılı alanı yok (`kur:` atlas yerleşimini anlatıyor). Yerine kullanılan vekil (b′): kaydın `not/kaynak/neden` metninde *harabe · ören · taşındı · moved · abandon · terk · modern kasaba · arkeolojik …* geçmesi | **44** (b′). Bunların 4'ü kendi notunda kusuru beyan ediyor: aşağıda `ADAY-BEYAN` |
| **(c)** ikinci gazetteer uzak | Yukarıdaki geçerli sinyal kuralı (Ṯ≥10 km · Pleiades precise ≥5 km) + TGN'den elle eklenen 9 | **92** |
| **(d)** bilinen "taşınmış şehir" kalıbı | Merv/Mary, Delhi, Gence, Dimyat, Semerkant, Rey/Tahran, Basra, Termez, Turfan/Koço, Kazan/İske Kazan, Malatya/Battalgazi, Kabala, Şâbüran, Şeki, Esferâyin, Sirte, Kusayr, Hürmüz, Köhne Ürgenç, Van, Erciş, Hasankeyf, Efes/Ayasuluk, Milet/Balat, Zerenc, Menûf/Şibînülkûm, Vaddân, Gavr, Pandua, Devagiri, Tatta, Sultâniye, Saray, Yeni Saray, Bulgar, Fustat/Kahire, Rakka, Almalık, Balasagun, Sığnak, Karakurum, Hotan, Dvin, Vijayanagara, Bîdar, Katye | **46** |
| **birleşim** | (a)∪(b′)∪(c)∪(d) | **1.524** |

Kesişimler: (a)∩(d) = 21 · (c)∩(d) = 19. **(a) neredeyse kör bir ölçüt çıktı:** 1.430 işaretin büyük kısmı "Türkçe tarihî ad (modern ad)" biçiminde. Bu biçim yalnız bir ad çevirisini gösteriyor, konum riski taşımıyor.

**Ölçülen toplam (evrenden bağımsız, tanıkla eşleşen):** 623 nokta. 4300 noktanın **~3.680'i hiçbir tanıkta yok.** al-Ṯurayyā ortaçağ İslam dünyasını, Pleiades antik/geç antik dünyayı kapsıyor. Amerika, Sahraaltı Afrika, Sibirya ve Okyanusya bu iki tanığın kapsamı dışında kalıyor.

---

## ② ADLI LİSTE

### KESİN: iki bağımsız tarihî tanık ≥5 km diyor ve birbiriyle uyuşuyor; atlas noktası modern kasabada (GeoNames/TGN modern ile ≤1 km) — **4**

| nokta | atlas | modern-kasaba tanığı | tarihî site tanıkları (atlasa km) | tanıklar arası | ilk `s:` |
|---|---|---|---|---|---|
| **Merv (Mari)** | 37.5936, 61.8333 | GeoNames 1218667 Mary **0,3 km** · TGN 7012226 Mary **0,7 km** | Pleiades 990688484 *Sultan Kala* (mediaeval) **30,4** · TGN 7012244 *Merv* (deserted settlements) **32,5** · al-Ṯurayyā MARW_621E376N_S **25,4** · Pleiades Gyaur-Kala 31,4 | Ṯ–Pl 5,1 km | 1221 |
| **Turfan** | 42.951, 89.19 | GeoNames 1529114 Turpan **1,0** · TGN 7001479 Laochenglu 1,0 | Pleiades 999273476 *Gaochang* **29,6** · TGN 6003062 *Gaochang* (deserted) **29,7** · TGN 8209497 Gaochang Gucheng (ruins) 41,1 | Pl–TGN 0,3 km | 1281 |
| **Maskat** | 23.588, 58.408 | GeoNames 287286 Muscat **0,4** (Bawshar/Khuwair, modern başkent bölgesi) | TGN 7018048 *Masqat* **23,2** · al-Ṯurayyā MASQAT_586E235N_S **23,8** | Ṯ–TGN 8,1 km | 1281 |
| **Kusayr** | 26.104, 34.283 | TGN 7029532 Quseir **0,4** | TGN 6004056 *Al Quşayr al Qadīm* (deserted) **6,1** · Pleiades 786069 *Myos Hormos?* **7,0** | 0,9 km | 1281 |

⚠️ Kusayr'da al-Ṯurayyā (QUSAYR 0,6 km) modern kasabayı veriyor. Yani tanıklar arasında bir çelişki var, ama iki tanık eski limanda birleşiyor. Taşıma yalnız 6 km. Turfan'da modern konum 15. yüzyıldan sonrası için doğru olabilir. Pencerenin başında (1281–14. yy) Koço/Gaochang başkentti. Bu hüküm tarih kaynağı ister, bu raporda verilmedi.

### YAN-KESİN: ayrı bir kusur sınıfı; nokta modern kasabada da değil, tarihî sitede de değil — **4**

| nokta | atlas | tanıklar (atlasa km) | not |
|---|---|---|---|
| **Tâif** | 21.437, 40.513 | TGN 1084782 **21,4** · GeoNames 107968 **21,1** · Pleiades 869702585 **21,1** · al-Ṯurayyā **26,9** | Kent ile tarihî site aynı yerde. Nokta ~21 km kuzeyde |
| **Hürmüz Adası** | 26.861, 56.366 | TGN 8891531 Jazīreh-ye Hormoz **24,7** · Pleiades 30251 Organa (island) **24,8** · **TGN 1007774 Lārak 2,9 km** | **Nokta Lârek adasında duruyor.** Ayrıca: Eski Hürmüz (anakara, ~1300'e kadar) için al-Ṯurayyā 63,6 / Pleiades Harmozeia 36,3 |
| **Silifke** | 36.309, 33.938 | GeoNames 300808 **7,7** · Pleiades Seleucia ad Calycadnum **8,0** | Kent ile antik kent aynı yerde. Nokta ~8 km güneyde (delta) |
| **Tırgan (Traghan)** | 26.13, 14.47 | GeoNames 2210242 Taraghin **23,5** · Pleiades Traghen **19,1** | Nokta ~20 km kuzeyde |

### ADAY: tek geçerli tarihî tanık; atlas modern kasabada — **11**

| nokta | atlas = modern? | tanık (atlasa km) | not |
|---|---|---|---|
| Delhi | GeoNames 1273294 1,8 km (Şâhcihânâbâd, 1639) | TGN 7593819 *Lal-Kot* (ruins) **12,8** · TGN Tughlakābād 15,2 (inhabited) · Pleiades Indabara 5,3 (antik) | Sultanlık başkentleri (Lal Kot → Siri → Tughlakâbâd → Firuzâbâd → Dinpenah) güneyde. Nokta 1639 sonrası için doğru |
| Termez | GeoNames 1215957 **0,0** | Pleiades 971886 *Tarmita/Termez* **8,8** | al-Ṯurayyā 7,2 km ama ters yönde (Ṯ–Pl 11,7 km), uyuşmuyor ⇒ tek tanık |
| Basra | GeoNames 99532 0,3 · TGN 7016465 4,2 | al-Ṯurayyā *al-Baṣra* **13,4** | Pleiades "[Basra]" 3,6 km (modern koordinat izlenimi) |
| Gence | GeoNames 586523 0,2 · TGN 7017286 4,1 | al-Ṯurayyā *Ǧanza* **14,7** | Eski Gence için TGN/Pleiades kaydı yok |
| Kabala | GeoNames 585231 0,3 · TGN 1056159 2,2 | al-Ṯurayyā *Qabala* **26,2** | |
| Şâbüran | (GeoNames yalnız rayon) | al-Ṯurayyā *Šābarān* **18,9** | |
| Şeki (Nuha) | GeoNames 585170 0,0 · TGN 1051599 | al-Ṯurayyā *Šakkī* **17,7** | |
| Sirte | GeoNames 2210554 0,4 · TGN 1090708 | Pleiades 159615010 *Surt* (mediaeval) **49,6** | al-Ṯurayyā 11,9 km, ama başka yönde. Ortaçağ Surt'unun 1281'den önce terk edilip edilmediği ölçülmedi |
| Zerenc (Sîstan) | GeoNames 1120985 0,2 · TGN 7002242 | al-Ṯurayyā *Zaranǧ* **32,2** · Pleiades *Shahristan/Zarang?* 22,4 (soru işaretli) | İki tanık birbirinden 22,7 km uzakta ⇒ KESİN'e alınmadı |
| Turşiz (Kâşmer) | GeoNames 128447 0,0 | al-Ṯurayyā *Ṭurṯīṯ* **12,5** | |
| Vaddân (Cufre) | — | Pleiades 354167 *Waddan* **5,7** (al-Ṯurayyā 25,9, başka yönde) | Eşiğin hemen üstünde |

**ADAY-İKAME (2):** Nokta modern kenti temsil ediyor, ama bölgenin tarihî merkezi başka bir kent. Tahran → Rey: TGN 7002140 Rayy **12,1** · Pleiades 903104 11,8 · al-Ṯurayyā 12,7, yani üç tanık uyuşuyor. Ancak kayıt "Tahran" adını taşıyor ve köy olarak Tahran da vardı. Bu yüzden tanım gereği KESİN değil. Şibînülkûm (Menûfiye) → Menûf: al-Ṯurayyā **13,9**.
**ADAY-YAN (2):** Nokta ne modern ne tarihî yerde. Ebîverd: Pleiades 952058 **42,6**, GeoNames Kaka 61,4. Zaklise: Pleiades Zakynthos (settlement) **10,6**.
**ADAY-BEYAN (4, kaydın KENDİ notu söylüyor):** Dera Gazi Han (*"Konum modern şehir; tarihî şehir ~14 km doğuda (70,78D)"*, bütün pencere boyunca) · Kansk (1636–1640 *"koordinat BAŞKA bir yerdir"*) · Rio de Contas (1723–1745, ilk merkez 12 km aşağıda) · Brisbane (1824–1825, Redcliffe).
**ADAY-ZAYIF (13, tek tanık; muhtemelen tanığın kendi koordinat hatası ya da aynı sürekli kent):** Kâin, Ukayr, Tâverğa, Zevîle, Köhne Ürgenç (Ṯ 14 km, TGN 4,8), Niksar (Pl 5,9), Seydişehir (Pl 9,9), Duhok (Pl 6,1), Şumnu (Pl 7,5), Doyran (Pl 5,0), İsfakiye (Pl 7,2), Meşhed (Pl 5,4), Şehrizor (Ṯ 62,9, bölge adı).
**ÇELİŞKİLİ (1):** Esferâyin. al-Ṯurayyā 12,2 diyor, ama atlas modern kasabada da değil (GeoNames 13,2). Nokta zaten tarihî sitede olabilir. Ölçülemedi.

### TEMİZ-ÖLÇÜLDÜ: geçerli tanık ≤5 km — **566**
Brifte adı geçen adaylar: **Dimyat** (Pleiades Tamiathis 0,2 · Ṯ 3,1; ilk `s:` 1250, yani yeni şehir dönemi) · **Semerkant** (Pleiades Marakanda/Afrasiyab 2,5; ilk `s:` 1220, yani Moğol sonrası şehir) · **Malatya** (Pleiades Melitene 4,0 · Ṯ 2,1. ⚠️ sınırda; TGN'de Battalgazi yalnız idari birim olarak var, 8 km) · **Van** (Pleiades Tušpa 4,7. ⚠️ sınırda; Ṯ 9,2 gürültü bandında). Ayrıca: Erciş, Kûfe, Katîf, Gazne, Bulgar, Buhara, Nîşâbur, Nesâ, Hasankeyf, Ecdâbiye, Pandua (TGN ruins 0), Devletâbâd (TGN 0,6), Karakurum (TGN 3,9), Dvin, Bîdar, Balasagun (TGN Burana 1,7), Vijayanagara (TGN 0,5), Tatta …
**GÜRÜLTÜ (20, yalnız al-Ṯurayyā 5–10 km = kendi p90'ının içinde):** Atfîh, Bedir, Benzert, Burûcird, Bürüllüs, Cehrom, Cidde, Cîruft, Dahlak, Hânekîn, Kâşân, Merâga, Nizva, Ras el-Hayme (Cülfâr), Sebzevâr, Taraz, Tenes, Tortosa, Tûs, Yenbu.

---

## ③ ETKİ: Voronoi "ya taşınsaydı" hesabı (scratch'te; veri değişmedi)

**Model:** Seçilen günde sahibi olan bütün noktalar alındı (`v`→tâbi, `d`→osmanli, `s`→`s.d`; `kur` öncesi yok sayıldı), ±8° pencerede. Yerel eşdikdörtgen km projeksiyonunda shapely `voronoi_diagram` kuruldu. Hücreler `veri-kaynak/motor_kara.geojson` ile kırpıldı ve 200 km daireyle sınırlandı (A1 tavanı yaklaşığı). Motorun yürüyüş, nehir, çöl ve epok kuralları **YOK**. Sayılar bu yüzden yaklaşıktır, motor çıktısı değildir. Günler: ilk dönemin ortası, en uzun dönemin ortası, ayrıca nokta o gün sahipliyse 1300-07-01 / 1500-07-01 / 1700-07-01. Tam tablo: `LAB-KONUM-KUSURU-1010-etki.csv` (96 satır).

| nokta | kova | taşıma km | gün · sahip | hücre km² önce→sonra | **simetrik fark km²** | sahip net (km²) |
|---|---|---|---|---|---|---|
| Merv (Mari) | KESİN | 30,4 | 1238 · moğol | 88.519→91.705 | **19.764** | moğol **+7.644** |
| Merv (Mari) | KESİN | 30,4 | 1300 · ilhanlı | 68.274→71.923 | **11.232** | ilhanlı **+6.807** · çağatay **−3.728** |
| Merv (Mari) | KESİN | 30,4 | 1500 · timurlu | 68.274→71.923 | 11.232 | timurlu +6.807 · buhara −3.728 |
| Turfan | KESİN | 29,7 | 1300 · çağatay | 74.236→70.093 | 7.247 | çağatay +225 · yuan −328 |
| Maskat | KESİN | 23,2 | 1300 · nebhânî | 9.023→7.646 | 1.763 | (sahip değişmiyor) |
| Kusayr | KESİN | 6,1 | 1300 · memlük | 15.806→15.513 | 836 | — |
| Tâif | YAN-K | 21,4 | 1300 · memlük | 24.971→23.015 | 9.002 | 1660: tâbi −786 / osmanli +786 |
| Hürmüz Adası | YAN-K | 24,7 | 1300 · hürmüz | 4.895→10.380 | 5.920 | hürmüz **+3.775** · ilhanlı **−3.867** |
| Silifke | YAN-K | 8,0 | 1300 · karaman | 4.891→5.410 | 532 | karaman +186 · kilikya −155 |
| Tırgan | YAN-K | 19,1 | 1300 · kanem-bornu | 7.198→7.382 | 3.214 | — |
| Ebîverd | ADAY-YAN | 42,6 | 1300 · ilhanlı | 40.234→28.917 | **18.101** | ilhanlı **−5.218** |
| Zerenc | ADAY | 32,2 | 1309 · ilhanlı | 96.911→92.207 | 10.694 | ilhanlı **−5.531** · çağatay +1.229 |
| Sirte | ADAY | 49,5 | 1300 · hafsî | 20.359→17.521 | 7.728 | hafsî −1.835 · kanem-bornu +1.835 |
| Delhi | ADAY | 12,8 | 1199 · gurlu | 80.304→79.394 | 7.515 | gurlu −3.037 |
| Basra | ADAY | 13,4 | 1300 · ilhanlı | 22.812→28.338 | 7.427 | ilhanlı +1.582 (1661: osmanli +1.504) |
| Gence | ADAY | 14,7 | 1245 · moğol | 80.315→80.558 | 6.547 | moğol +2.100 · altınorda −1.770 |
| Dera Gazi Han | BEYAN | 14,4 | 1513 · langah | 57.778→58.553 | 4.542 | langah −1.743 |
| Termez | ADAY | 8,8 | 1300 · çağatay | 28.154→28.143 | 4.059 | 1500: timurlu +126 / buhara −126 |
| Şeki | ADAY | 17,7 | 1300 · ilhanlı | 9.333→10.241 | 2.545 | ilhanlı +1.462 · altınorda −1.016 · gürcistan −446 |
| Kabala | ADAY | 26,2 | 1500 · şirvanşah | 4.949→5.025 | 3.379 | şirvanşah +283 · akkoyunlu −283 |

**Sahip net neden sıfıra toplanmıyor:** 200 km tavanı ve kara kırpması yüzünden. Nokta taşınınca hücreye giren ya da hücreden çıkan kara, tavanın dışında kalan "sahipsiz" alanla yer değiştiriyor.

---

## ④ ÖLÇÜLEMEDİ

- Evren (1.524) içinde tanığı olmayan ya da yalnız gürültü bandında kalan: **1.322**. Ad listesi `LAB-KONUM-KUSURU-1010-noktalar.csv` dosyasında, `kova=ÖLÇÜLEMEDİ`.
- Bunlardan **öncelikli 564**: Afro-Avrasya'da (lon > −20), ilk dönemi ≤1500, `tur≠bolge`. Liste `LAB-KONUM-KUSURU-1010-olculemedi-oncelik.csv`.
- **(d) kalıp listesinden ölçülemeyen 9:** Kazan (İske Kazan için TGN/Pleiades/Ṯ kaydı yok) · Gaur (TGN'de yok) · Sultâniye · Saray (Selitrennoye) · Yeni Saray (Tsarev) · Almalık (TGN'de yalnız Huocheng idari birimi, 2,7 km) · Sığnak · Hotan (TGN Hetian modern = atlas; Yotkan kaydı yok) · Katye.

---

## Öngörü - ölçüm

| | öngörü | ölçüm | |
|---|---|---|---|
| (a) | ~600 | **1.430** | 2,4 kat fazla. Parantezli ad yazımı beklediğimden çok daha yaygın ve konum riskini neredeyse hiç ayırt etmiyor |
| (b) | ~10 | mekanik **ölçülemedi** · vekil (b′) 44 → 4 BEYAN | Veri modern kuruluş yılı taşımıyor |
| (c) | kontrol edilenlerin ~%25'i | ham sinyal 92/623 = **%14,8** · elle okunduktan sonra gerçek sinyal 23/623 = **%3,7** | Yanlış eşleşme ve tanık gürültüsü çok yüksek |
| (d) | ~25 | **46** | |
| birleşim | ~650 | **1.524** | (a) şişirdi |
| gerçek kusur | ~40 | **alt sınır 21** modern-kasaba sınıfı (4 KESİN + 11 ADAY + 2 İKAME + 4 BEYAN) + **6** yan sınıf (4 YAN-KESİN + 2 ADAY-YAN). 4300'ün ~%86'sı tanık kapsamı dışında olduğundan üst sınır **ölçülemedi** | |
| KESİN | 6, adlarıyla | **4**: Merv · Turfan · Maskat · Kusayr | Adını verdiğim beş adaydan **yalnız Merv** tuttu. Delhi ve Gence ADAY çıktı. Dimyat ve Semerkant TEMİZ çıktı (atlas dönemi taşınmadan sonra başlıyor). Turfan, Maskat ve Kusayr'ı öngörmemiştim |
| ADAY | ~15 | **11** (+2 İKAME +4 BEYAN +2 YAN +13 ZAYIF) | |
| ③ Merv | 2.000–5.000 km² | hücre alanı **+3.186…+3.649**, simetrik fark **11.232–19.764**, sahip net **+6.807 / −3.728** | Alan değişimi aralıkta kaldı, el değiştiren toprak 2–4 kat fazla çıktı |
| ③ tipik | 200–800 km² | simetrik fark medyanı ~3.300 km² | Öngörü düşüktü: Orta Asya/İran'da hücreler büyük |

## Yan bulgu (bu görevin sınıfı DEĞİL, ama ölçüldü)
**YAN-KESİN** sınıfı (Tâif 21 km · Hürmüz Adası = Lârek · Silifke 8 km · Tırgan 20 km) "modern kasaba" kusuru değildir. Nokta hiçbir tanığın gösterdiği yerde durmuyor. Kaynağı muhtemelen elle girilmiş ya da kaydırılmış koordinat. D204'ün üçüncü kardeşi olarak ayrı bir sınıf açılmaya değer. Bu raporda öneri değil, yalnız ölçüm olarak duruyor.

## Sınırlar
- al-Ṯurayyā ve Pleiades tam döküm olarak alındı. TGN ve GeoNames ise yalnız adaylar için sorgulandı.
- KESİN için gereken "tarihî site atlas döneminde orada mıydı" sorusu (ör. Turfan 15. yy sonrası, Sirte, Kusayr'ın Memlük sonrası) tarih kaynağı ister. Bu raporda **hüküm verilmedi**.
- Voronoi modeli sadeleştirilmiştir (yukarıda). Sayıların motorun gerçek petek değişimine eşit olması beklenmez.

## Dosyalar
- `denetim/LAB-KONUM-KUSURU-1010-noktalar.csv`: evren ∪ ölçülen (1.943 satır). Kriter bayrakları, kova, tanık adı ve km.
- `denetim/LAB-KONUM-KUSURU-1010-etki.csv`: Voronoi ya-taşınsaydı hesabı (96 satır).
- `denetim/LAB-KONUM-KUSURU-1010-olculemedi-oncelik.csv`: öncelikli ölçülemeyen 564 nokta.

## EK — 10 Ekim: Malatya yeniden değerlendirildi (KASA bildirdi, LAB ölçtü)

**İlk hüküm:** TEMİZ-ÖLÇÜLDÜ ("Melitene 4,0 km"). **Yeni hüküm: ÖLÇÜLEMEDİ** — kıyas yanlış nesneyle yapılmış.
- Pleiades 629040 "Melitene" reprPoint 38.382217/38.361152 = Pleiades 25078867 "Arslantepe (Melid)" höyüğü
  (38.382059/38.361202; fark 0,02 km). Yani 4,02 km'lik kıyas modern Malatya ↔ Tunç/Demir Çağı **höyüğü**dür,
  Roma/Ortaçağ Malatya'sı (Battalgazi) değil. (Pleiades 629039 "Melitene" 38.4417/37.6847 ayrı ve uzak bir kayıt.)
- al-Ṯurayyā MALATIN_383E383N_S ("Malaṭīn, Malaṭiya", coord_certainty "certain") 38.35806/38.35767 → atlas noktasına
  2,1 km, yani **modern şehir merkezini** veriyor. Ortaçağ Malatya'sı Battalgazi'de olduğuna göre bu Ṯ okuması,
  Ṯ'nin ölçülmüş hata bandı (p90 8,7 km) içinde bir kayma olabilir; tanık olarak Battalgazi'yi ayırt edemiyor.
- KASA: atlas Malatya (38.353/38.334) TGN 1086264 modern Malatya'ya (inhabited) 1,54 km ⇒ nokta **modern şehirde**.
  Battalgazi için TGN'de yalnız idari birim var.
- Battalgazi için HUKUM §6'nın kabul ettiği bir tanıkta (Pleiades/Ṯ/TGN site kaydı) kaynaklı koordinat **YOK**.
  Yaklaşık konum (~38,42K · 38,365D, kaynaksız) atlas noktasına ~8 km olurdu — bu bir ölçüm DEĞİL, yalnız büyüklük.
- (d) "taşınmış şehir" kalıbı Malatya/Battalgazi'yi zaten işaretliyordu; atlas Malatya'nın dönemleri 1281–1845.
  ⇒ 1281–1839 dönemleri için konum sorusu AÇIK.

**Kova:** TEMİZ-ÖLÇÜLDÜ → **ÖLÇÜLEMEDİ** (ikinci tanık yok; mevcut tanıklar ya höyüğü ya modern merkezi ölçüyor).
Sınıf dersi: bir tanığın **hangi nesneyi** ölçtüğü (höyük / antik şehir / ortaçağ şehri / modern şehir) doğrulanmadan
"yakın" sonucu TEMİZ sayılmamalı. Aynı risk Pleiades'in tek reprPoint'i çok dönemli yerleşimleri birleştirdiği her
kayıtta var. Kaynak: KASA `denetim/KASA-MILID-1010.md` (makine/kasa). CSV satırı tarihli ölçüm olarak bırakıldı.

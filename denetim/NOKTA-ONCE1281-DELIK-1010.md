# NOKTA-ONCE1281-DELIK-1010 — 1000-1280 diliminin sahipsiz noktalarından EN KÂRLI 20

**Oturum:** NOKTA-ONCE1281-DELIK-1010 (EMRELIC, Opus) · **Taban:** `origin/main` `7a613d9e`
(worktree `C:\atlas-delik1010`, dal `nokta-once1281-delik-1010`) · **UFUK ölçüldü:** `arac/girdi.py:739`
`UFUK = ("1000-01-01", "1945-09-02")`. Önceki teslimdeki "ufuk 1281" hatamın dersi uygulandı: sabit hatıradan değil,
dosyadan okundu.
🔴 `data/` DONUK ⇒ **veri yazılmadı**; bu bir ADAY listesidir. Zincirler bir sonraki iş.
**Kaynak evren:** LAB `LAB-KUR-SAYIM-1010` (ağaç `e54e60df`). **Sıfırdan kurulmadı**, bugünkü tabanda YENİDEN SAYILDI ve tuttu (§1).

---

## SONUÇ
1. **Evren:** 2.742 boş site. Bunların 263'ü `kasitli_bosluk`, 147'si `f`'siz dolgu ⇒ **2.470 aday.** Sıralama:
   en-yakın-komşu (EYK) mesafesi, `kur`/`bit` kuralıyla 1250-01-01'de sahnedeki 2.824 siteye göre.
2. **TDV taraması:** 650 aday · **927 geçerli yanıt** (ilk koşu 622: 592×302 + 30×200 · ikinci koşu 305: 262×302 + 43×200;
   slug = ad + parantez içi adlar). İlk 400 + İslâm kutusundan 401-911. sıradaki 250 aday tarandı. 73 tane 200 yanıtı geldi;
   bunlardan ~46'sı gerçek YER maddesi (geri kalanı boş kalıp, terim ya da kabile maddesi). **1000-1280 için sahip cümlesi
   taşıyan yer maddesi: 23** (Kandehar dahil, o yalnız yüzyıl veriyor). Bunlar 650 adayın %3,5'i.
3. **En kârlı 20 aşağıda (§3).** Dördünde aynı zamanda bir **KÜNYE/VERİ KUSURU** çıktı (§4): Taiz · Sivrihisar · Silifke · Hanbalık.
4. 🔴 **Boyama uyarısı:** 20'nin üçünde sahiplerin bir kısmı BOYALAR'da YOK (`zureyi`, `eyyubi`, `resuli`, `suleyhi`,
   `mogol-imparatorlugu`, `endulus-emevi`, `endulus-tavaif`). Pencere yazılsa da o dilim **motor partisine kadar boyanmaz.**
5. **Sınıf dağılımı (2.470):** 1281 sahibinin künyesi 1281'den önce başlıyor: **2.026** (811'i ≤1000). Künye 1281 ve
   sonrası: 381. Künye yok: 62. ⇒ Deliğin büyük kısmı **künye değil TANIKLIK** eksiği: sahip devlet vardı, yerin o yıllardaki kaydı yok.

## 0. ÖNGÖRÜ — ölçümden ÖNCE (sıralama ve TDV taraması koşulmadan) · KARNE
```
① EYK ilk 100'ün ≥ %60'ı TDV kapsamı DIŞINDA (Sibirya, Amerika, Sahra, Okyanusya)
② ilk 100'de TDV 200 + doğru madde ≈ 15-20; sahip cümlesi taşıyan ≈ 8-12
③ 20'yi doldurmak için ilk ~250'ye inmek gerekecek
④ 20'nin 20'si dolar; ama ilk 50 EYK'dan yalnız ~5'i kaynaklı; gün hassasiyeti 20'nin ≤ 4'ünde
Risk: ad'dan türetilen slug yanlış madde getirir (D211②)
```
| Öngörü | Ölçüm | |
|---|---|---|
| ① ilk 100'ün ≥%60'ı dışarıda | **84/100** İslâm kutusu DIŞINDA (ilk 50'de 38) | ✓ yön doğru, öngörü kaba kaldı |
| ② ilk 100'de 15-20 doğru madde | **3** (Kandehar · Multan · Zerenc); sahip cümlesi taşıyan **2** (Kandehar yalnız YÜZYIL veriyor) | ✗ **5 kat iyimser** |
| ③ ~250'ye inmek | **906. sıraya** inmek gerekti | ✗ **3,6 kat iyimser** |
| ④ 20 dolar · ilk 50'den ~5 kaynaklı · gün ≤4 | ✓ 20 doldu · ilk 50'den **1** (Kandehar, yüzyıl) · gün **3** (Buhara ×2, Zencan ay) | ✓ / ✗ / ✓ |
| Risk: yanlış madde | ✓ çıktı: **4 terim maddesi** (`bahriye` · `hami` · `say` · `tumen`), **1 kabile** (`kungrat`), **10 boş kalıp** (~6,4 KB gövde: timbuktu, leh, deli, lagos, nasik, ouagadougou, lar, burgos, golkonda, sevilla…) | ✓ |
📌 **Çürüme sebebi tek:** EYK büyüklüğü ile TDV kapsamı **TERS** ilişkili. Büyük delik seyrek bölgede, TDV yoğun bölgede.
"Kârlı" iki ölçütün kesişimi ve kesişim dar. ⇒ Bu dilimin büyük delikleri (Amerika · Sahra altı · Sibirya) TDV ile
KAPANMAZ, `§4`'ün akademik kaynak yolu gerekir. **Ayrı kalem.**

## 1. EVREN — LAB ile karşılaştırma (aynı sayı bugünkü tabanda tuttu)
```
                         LAB (e54e60df)   BEN (7a613d9e)
toplam nokta             4.300            4.300
kur: YOK                 2.823            2.823
kur'suz ∩ 1000-1280 boyar   80               80
kur'suz BOŞ (sahnede)    2.743 (1280-12-31) 2.742 (1250-01-01 kesiti)
kasitli_bosluk           263              263
```
Tek fark (2.743 ↔ 2.742) KESİT GÜNÜ farkı: LAB 1280-12-31, ben 1250-01-01 (bir nokta o aralıkta `bit:` ile sahneden çıkıyor). Veri farkı değil.

## 2. YÖNTEM
- **EYK:** her aday için 1250-01-01'de sahnedeki (kur ≤ g, bit > g) en yakın siteye büyük daire mesafesi. Petek
  büyüklüğünün vekilidir; gerçek alan değildir (kıyı ve maske kesimi hesaba katılmadı).
- **TDV:** sıralı, 1,2 sn aralıklı GET, 429/503'te geri çekilme (bu koşularda 429/503 kalmadı). ⚠️ İlk deneme 6 paralel istekle yapıldı, 588 yanıt
  **429/503** döndü ve **tamamen atıldı.** O koşu "1 isabet" diyordu; **ölçülemedi idi, yok değil** (`D211⑤`).
- **İsabet tanımı:** 200 + gövde > 8 KB + maddenin konusu YER (ilk cümle elle okundu) + 1000-1280 aralığında bir el
  değiştirme ya da hâkim cümlesi. Bölge maddeleri (Darfur, Arakan, Keşmir, Sîstan) **şehir tanığı sayılmadı** (bayrak kuralı).
- **Hicrî:** TDV'nin "(hicrî/mîlâdî)" çiftlerinde **kesişimin ilk günü** (§4 yeni kural). Tablo hesabı ±1-2 gün.

## 3. EN KÂRLI 20 (EYK sırasıyla) — tanıklar, künye, boya
`B` = sahip künyesi BOYALAR'da · `✗B` = boyanmaz (motor partisi) · `⇢` = 1281 sahibiyle birleşir (Z6 'birlesti' deseni)

| # | sıra | Nokta | EYK km | 1281 sahibi | TDV | 1000-1280 tanıkları (sahip · en erken izinli gün · hassasiyet) |
|---|---|---|---|---|---|---|
| 1 | 60 | **Multan** | 312 | delhi-sultanligi | `multan` | gazneli «zaptetti (396/1006)» **1006-01-01** (396∩1006) · tekrar «400’de (1010)» · gurlu «571’de (1175-76)» **1175-07-22** · delhi «626 (1228) yılında Sultan İltutmış burayı eyalet merkezi yaptı» TANIK **1228-11-30** ⇢ · B B B |
| 2 | 61 | **Zerenc (Sîstan)** | 311 | ilhanli | `zerenc` | gazneli «393’te (1003)» **1003-01-01** · buyuk-selcuklu «432’de (1040)» **1040-09-11** · (1228-35 Moğol tahribatı = sahiplik DEĞİL) · B B |
| 3 | 140 | **Turfan** | 237 | cagatay | `turfan` | koco-uygur «1209 yılına kadar bağımsız» · «1209’da Cengiz Han’a … itaat ettiler» ⇒ 1209'dan sonra `v:` mogol-imparatorlugu adayı · B / **✗B** |
| 4 | 175 | **Mangışlak** | 210 | altinorda | `mangislak` (bölge=nokta adı) | harizmsah «1128 yılından önce Mangışlak’ı zaptetti» ⇒ TANIK ≤1128, f bulunamadı · B |
| 5 | 318 | **Buhara** | 156 | cagatay | `buhara` | bati-karahanli «Arslan Han devrinde (1102-1130)» TANIK · karahitay «5 Safer 536 (**9 Eylül 1141**) … Katvân savaşından sonra … idaresine geçti» GÜN · harizmsah «614’te (1217-18)» TANIK · mogol «4 Zilhicce 616 (**10 Şubat 1220**) … işgal» GÜN · (1273-01-28 İlhanlı 7 gün = `isg`) · B B B **✗B** |
| 6 | 365 | **Balasagun** | 144 | cagatay | `balasagun` | karahitay «Gürhan Balasagun’u ele geçirdi (1130) ve orayı merkez yaptı» **1130-01-01** · «Ağustos-Eylül 1210’da şehri kuşattılar ve … içeri girdiler» · Moğol akrabalık 1218 · B |
| 7 | 391 | **Pekin (Hanbalık)** | 140 | yuan-hanedani | `hanbalik` | Kubilay «1264 yılında idare merkezini … Hanbalık’a nakletti» TANIK 1264 · 🔴 §4.4 |
| 8 | 396 | **Aden** | 139 | resuli | `aden` | zureyi «1125’te istiklâlini ilân» · eyyubi «1173 yılına kadar … sonra … 1228’e kadar Eyyûbîler» · resuli «1454’e kadar Resûlîler» ⇢ · **✗B ✗B ✗B** |
| 9 | 440 | **Bîcâpur** | 132 | yadava | `bicapur` | yadava «1190 yılından itibaren bir asır süreyle Yadava Krallığı’nın yönetimi altında» **1190-01-01** ⇢ · B · **EN UCUZ: tek pencere geriye çekilir** |
| 10 | 459 | **Gazne** | 129 | cagatay | `gazne` | gazneli «(963-1186)» · Sencer istilâları 510/1117, 529/1135 (`isg` adayı) · gurlu «Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı» **1173-01-01** · B B |
| 11 | 515 | **Kirmanşah** | 121 | ilhanli | `kirmansah` | buyuk-selcuklu «437’de (1045) … Selçuklu topraklarına kattı» **1045-07-19** · B |
| 12 | 651 | **Kirman** | 105 | ilhanli | `kirman` | gazneli «423’te (1032)» **1032-01-01** · kirman-selcuklu «(440/1048)» **1048-06-16** · Melik Dînâr «583’te (1187)» (künye YOK) · kutlughanli «619’da (1222)» **1222-02-15** · B B B |
| 13 | 654 | **Zencan** | 105 | ilhanli | `zencan` | gazneli «(Ramazan 420 / Eylül 1029)» AY · buyuk-selcuklu «Dandanakan Savaşı’nın (1040) ardından … Zencan … idaresini verdi» · B B |
| 14 | 657 | **Kazvin** | 104 | ilhanli | `kazvin` | gazneli «420’de de (1029)» **1029-01-20** · mogol «Mengü Kağan 651’de (1253) … vali tayin» TANIK **1253-03-03** · B **✗B** |
| 15 | 696 | **Silifke** | 101 | karaman | `silifke` | Rubenî «Rupen zamanında (1175-1187) Silifke’yi ellerine geçirdi» (künye ÖNCESİ, kilikya-ermeni f 1199) · isbitariyye «Levon … Silifke’yi Saint Jean şövalyelerine terketti (1210)» · 🔴 §4.3 |
| 16 | 727 | **Silistre** | 98 | bulgaristan | `silistre` | bulgar-carligi «Bulgar Krallığı boyunca (1189-1393)» **1189-01-01** ⇢ · B · **UCUZ** |
| 17 | 763 | **Sivrihisar** | 94 | selcuklu | `sivrihisar` | selcuklu «1074’te … Selçuklular’ın hâkimiyetine girdi» · 🔴 §4.2 (künye f 1075) ⇢ · B |
| 18 | 842 | **Taiz** | 88 | **yemen (?)** | `taiz` | eyyubi «Eyyûbîler döneminde (1174-1229) Taiz’i ikamet merkezi edinen Turan Şah» TANIK · resuli «653’te (1255) başşehir» **1255-02-10** · **✗B ✗B** · 🔴 §4.1 |
| 19 | 852 | **Kurtuba** | 88 | kastilya | `kurtuba` | Hammûdî 1016-1022 · Cehverî 1031-1070 · Abbâdî · murabitlar «1091’de» · muvahhidler «1148’de» · Hûdî «1228’de» (künye YOK) · kastilya «1236’da» ⇢ · ✗B(tavaif) B B B |
| 20 | 859 | **Köhne Ürgenç (Gürgenç)** | 86 | altinorda | `gurgenc` | gazneli «408’de (1017)» · Şah Melik «(433/1041)» (künye?) · buyuk-selcuklu «434’te (1043)» **1043-01-01** · harizmsah «Muhammed hârizmşah tayin edildi (1128)» · Atsız bağımsız «(536/1141)» · B B B |

**Elenen yer maddeleri (sahip cümlesi var ama zayıf):** Kandehar (EYK 333, yalnız YÜZYIL: «X. yüzyılda Gazneliler’in» ⇒ yıl
yazılamaz, `§4`) · Tahran (yerleşim cümleleri var, sahip yok) · Şîraz · Tiflis · Kâşân · Hokand · Tebük · Tedmür · Hayber ·
Malta · Medine (EYK < 83 ya da sahip cümlesi yok). Bölge maddeleri (Darfur · Arakan · Keşmir · Sîstan) şehre taşınmadı.

## 4. 🔴 YAN BULGULAR — dördü de 20'nin içinden çıktı, hepsi AYRI KALEM
### 4.1 TAİZ — 1281-1547 sahibi YANLIŞ olabilir (`D204`: devlet var, yeri yanlış) — **1281 SONRASI, bugünkü harita**
```
atlas  Taiz s: [{f:"1281-01-01", t:"1547-02-01", d:"yemen"}]   kaynak alanı: YOK   (yemen = yemen-zeydi harita anahtarı)
TDV    taiz  «Resûlî hânedanının ikinci sultanı el-Melikü’l-Muzaffer Yûsuf’un Taiz’i 653’te (1255) başşehir yapmasıyla…»
             «Resûlîler devrinde (1229-1454) başşehir olduğu yıllar»
TDV    aden  «… 1454’e kadar Resûlîler, 1517’ye kadar Tâhirîler hüküm sürmüşlerdir»
komşu  Aden s:[0] = resuli (atlas)
```
⇒ Atlas Resûlî başşehrini 266 yıl boyunca Zeydî imamlığına boyuyor. Aynı desenin Ebha (Asir) (`yemen` 1281) ve
öteki Yemen noktalarında olup olmadığı **ölçülmedi.** Ayrıca `resuli` BOYALAR'da YOK (§3 uyarısı) ⇒ düzeltme motor partisine bağlı.

### 4.2 SİVRİHİSAR — künye ÖNCESİ fetih (`HUKUM §1-A`)
TDV «1074’te … Selçuklular’ın hâkimiyetine girdi» ↔ `selcuklu` künyesi `f:1075-01-01`. Tinmel/Evdağust/Melfi'nin dördüncü sınıfı:
hareket (Süleyman Şah'ın Anadolu ilerleyişi) künyeden önce. **Künye genişletilmez** (`§1-A`). 1074 dilimi için ya ayrı kimlik ya beyanlı boşluk.

### 4.3 SİLİFKE — `isbitariyye` künyesinin `t:1285`i ile ÇELİŞEBİLİR (önceki teslimim)
TDV `silifke`: «Levon … Silifke’yi Saint Jean şövalyelerine terketti (1210); böylece Silifke ve çevresi **uzun müddet** … Saint Jean
şövalyelerinin elinde kaldı». Önerdiğim `isbitariyye` künyesi `bolge:"suriye-filistin"` ve `t:1285-05-25` (TDV `daviyye`: «Ortadoğu’daki
varlıkları sona erdi»). ⇒ Silifke 1285'ten sonra da Hospitalier ise künye ona yetmez. «Uzun müddet» bitiş vermiyor ⇒ **ölçülemedi.**
Künye inmeden önce Silifke'nin Hospitalier dönemi ölçülmeli. Ayrıca 1175-1187 Rubenî dilimi künyesiz (`kilikya-ermeni` f 1199).
Bu sınıfı `KAYNAK-EKSIK-SEHIR-1010` (Sis/Anavarza) zaten bulmuştu.

### 4.4 HANBALIK — `mogol-imparatorlugu` t:1260 ↔ `yuan-hanedani` f:1271: **11 yıllık künye boşluğu**
TDV «1260’ta büyük kağan ilân edilen … Kubilay Han 1264 yılında idare merkezini … Hanbalık’a nakletti». 1260-1271 arasında Kubilay'ın
Kuzey Çin'i hangi künyede? `mogol-imparatorlugu` 1260'ta bitiyor, Yuan 1271'de başlıyor. Arada **kimlik yok** (ölçüldü, iki künye).
Kuzey Çin noktalarının 1260-1271'i bu yüzden ya boş ya Yuan künye öncesi. **Ölçülmedi, kalem.**

### 4.5 `boya_gerekli:true` bayrağı BAYAT olabilir (küçük)
`gazneli`, `gurlu`, `buyuk-selcuklu`, `kirman-selcuklu`, `karahitay`, `harizmsah`, `koco-uygur`, `bati/dogu-karahanli`, `murabitlar`,
`muvahhidler` künyelerinde `boya_gerekli:true` yazıyor, ama anahtarları **BOYALAR'da VAR** (`renkler.BOYALAR`, 704 anahtar; ölçüldü).
`§1.5` "5 BEYANLI boya borcu" diyor; bu bayrakların sayısı ondan çok fazla. Sayım başka bir tanımla yapılıyor olabilir,
**ölçülmedi.** Yanlış bir bayrak bir gün gerçek bir borcu gizler.

## 5. ÖNERİ — sıra
1. **Ucuzlar önce (tek pencere geriye çekilir, sahip aynı, boya VAR):** Bîcâpur (yadava 1190) · Silistre (bulgar 1189) ·
   Multan'ın delhi tanığı · Kurtuba'nın kastilya 1236'sı. Z6'nın `'birlesti'` deseni.
2. **Zincirliler (birden çok el değiştirme, hepsi boyalı):** Zerenc · Kirmanşah · Kirman · Zencan · Gazne · Gürgenç · Balasagun · Buhara.
3. **Boyası bekleyenler (motor partisinden SONRA anlamlı):** Aden · Taiz · Turfan (v: Moğol) · Kazvin'in 1253'ü.
4. **Önce kalemi çözülecekler:** Sivrihisar (§1-A) · Silifke (isbitariyye t) · Hanbalık (künye boşluğu) · Taiz 1281+ (§4.1, bugünkü haritada).
5. **TDV'nin kapatamayacağı büyük delikler** (EYK ilk 100'ün 84'ü): akademik kaynak işi, ayrı sevk.

## Ne ölçemedim
Mangışlak'ın Hârizmşah f'si · Multan 1175-1228 geçişleri (Gurlu→Kubâce→Delhi) · Silifke'nin Hospitalier bitişi · Kurtuba'da Hûdî ve
Abbâdî künyeleri (yok) · Şah Melik (Gürgenç 1041) künyesi · EYK'nın gerçek alanla ilişkisi (kara maskesi uygulanmadı) ·
`boya_gerekli` sayımının tanımı · Taiz deseninin öteki Yemen noktalarında olup olmadığı.

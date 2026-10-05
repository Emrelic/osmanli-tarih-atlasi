# UMIT-W12-NOT-CELISKI-1006 — alan ↔ kendi açıklaması çelişkisi

Ağaç: `C:\atlas-w12` (origin/main `7bb6b62c`, detached) · yalnız ölçüm · betik `denetim/ARAC-NOT-CELISKI-1006.py`

## 0. Mühürlü öngörü (ölçümden ÖNCE)
- turgut-reis (f 1485 ↔ "1487'de doğdu") ve uzun-hasan (f 1423 ↔ "hicrî 828 … (1425) doğdu") ① yakalanır.
- şeyh-bedreddin'in 1416'sı (kaçış) ② olur. ⚠️ Ama kaydın `t:1416`, aynı notun "823 (1420) yılında idam edildi" cümlesiyle çelişiyor ⇒ bedreddin'in `t` alanı ① çıkacak. Sınavın beklediği "②" yalnız 1416 geçişi için doğru.
- kisiler.js'te mekanik aday 20-60, elle doğrulanmış ① 5-20 · padisahlar.js'te ① 0-3 · yerleşimlerde metin alanı az (not/neden/devir_beyani); mekanik aday çok, ① az (≤ 10).

**Öngörü sınavı:**
- ✓ turgut-reis ve uzun-hasan ① çıktı.
- ✓ bedreddin'in 1416 geçişi ② çıktı; aynı kaydın `t` alanı ① çıktı.
- ✓ kisiler.js: mekanik aday 46 · elle doğrulanmış ① 7.
- ✓ padişah ① 0.
- ✓ yerleşim ① 0 (öngörü ≤ 10).
- Öngörüde OLMAYAN: yerleşim metninin büyük kısmı BAŞKA bir şeyi tarihliyor (§4).

## 1. Evren ve yöntem
- **Evren:** `kisiler.js` 288 kişi · `padisahlar.js` 41 kayıt · `girdi.GIRDI_DOSYALARI` 93 dosya, 4299 yerleşim. Döküm hatası 0 (node `vm`, yorum dahil ham nesne).
- **Karşılaştırılan alanlar:**

| dosya | alan | metindeki olay |
|---|---|---|
| kişi | `f` | doğum |
| kişi | `t` | ölüm (dosya başlığı: "f / t: doğum / ölüm yılı") |
| padişah | `dogum` · `olum` | doğum · ölüm |
| padişah | `from` · `tahta` | tahta çıkış |
| padişah | `to` | tahttan iniş |
| yerleşim | dönem `f`/`t` | devir (fetih/teslim/bağlanma/kuruluş …); hem dönemin kendi `kaynak` metni hem yerleşimin `not`/`neden`/`devir_beyani`/`kaynak` metni |

- **Metin:**
  - Kişi ve padişah kaydının dışlananlar hariç bütün dizgi alanları okundu (`not`, `ic_not_*`, `ovgu`, `yergi`, `tartisma`, `tarihciler`, `skandal`, `olum_sebep`, `kaynak` …).
  - Padişahta `dogum`/`olum`/`tahta` alanlarının parantez içi açıklaması da okundu.
- **Hicrî tespiti:**
  - ① "828 (1425)" · "823/1420" çiftlerinde miladî karşılık alınır (fark ±3 yıl sınanır).
  - ② "hicrî N" · "H. N" · "h. N" için iki miladî aday üretilir: ⌊N·0,970224+621,5774⌋ ve +1.
  - ③ Kişi ve padişahta, alanın yılından 300 yıldan fazla geride kalan ve 1350'den küçük bir sayı hicrî sayılır. Yerleşimde ③ kapalıdır: "923 km" gibi sayılar sahte hicrî üretti.
- **Bağlama:** yıl, aynı cümledeki en yakın olay fiiline bağlanır.
  - Türkçe yüklem sonda geldiği için yıldan sonra gelen fiil önceliklidir; önce gelen fiil 3 kat uzak sayılır.
  - Araya başka bir yıl girerse fiil o yıla geçer. "ya da / veya / -" ile bağlı alternatif yıllar birlikte bağlanır.
  - Tek harfli kısaltmalarda ("m. 1339") cümle bölünmez.
- **Mekanik sınıf:**
  - ① aday: alanın olayına bağlı yıllar var, hiçbiri alanla uyuşmuyor.
  - ② farklı olay: alanın yılı metinde başka bir olaya bağlı ya da bağsız.
  - ③ belirsiz: aynı olaya hem uyan hem uymayan yıl var (ihtilaf/aralık), ya da cümle bir düzeltme cümlesi ("eski", "yerine", "→", "değil").
  - Yerleşimde ① yalnız **yakın ıska** için verilir: dönem kaynağında ±10 yıl, yerleşim notunda ±5 yıl, ama hiçbir uçla birebir değil. Uzak yıl ③'e düşer (gerekçe §4).
- **Elle okuma:** ① adaylarının HEPSİ (kişi 10 · padişah 11 · yerleşim 84) tam metinden okundu. Hüküm elle verildi; mekanik sınıf hüküm değildir.

## 2. Sınav (iki yönde)
| vaka | beklenen | ölçülen |
|---|---|---|
| turgut-reis `f=1485` ↔ «yaklaşık 1487'de … doğdu» | ① | ① ✓ |
| uzun-hasan `f=1423` ↔ «hicrî 828 … (Şubat-Mart 1425) doğdu» | ① | ① ✓ |
| uzun-hasan, parantez SİLİNİP yalnız «hicrî 828 … doğdu» bırakılınca | ① (hicrî yolu tek başına) | ① ✓ · adaylar [1424, 1425] |
| ters yön: aynı metin, `f=1424` | temiz | temiz ✓ |
| ters yön: turgut `f=1485` + «yaklaşık 1485'te doğdu» | temiz | temiz ✓ |
| şeyh-bedreddin, 1416 geçişi «1416 civarında İznik'ten kaçarak» | ② | ② ✓ (bağsız / kaçış) |
| şeyh-bedreddin `t=1416` ↔ «Şeyh Bedreddin 823 (1420) yılında Serez'de idam edildi» | — | **①** |

⚠️ **Sınavın üçüncü maddesi kısmen yanlış kurulmuş.** Bedreddin'in 1416 geçişi gerçekten ② (kaçış). Ama kaydın `t` alanı 1416, notun kendisi ise ölümü "823 (1420)" diye veriyor. Bu, turgut ve uzun-hasan ile aynı sınıfta bir ①'dir. "Şeyh-bedreddin ② olmalı" hükmü kaydın tamamı için kabul edilirse gerçek bir çelişki temize çıkar.

## 3. Bulgular — kişi ve padişah

### 3.1 Elle doğrulanmış ① GERÇEK ÇELİŞKİ: 7 kayıt, hepsi `data/kisiler.js`
| dosya:satır | kayıt | alan=değer | metindeki yıl | metnin o yılı bağladığı (alıntı) | not |
|---|---|---|---|---|---|
| kisiler.js:147 | turgut-reis | f=1485 | 1487 | «yaklaşık 1487'de Menteşe sancağına bağlı Seravalos köyünde doğdu» | sınav vakası |
| kisiler.js:172 | uzun-hasan | f=1423 | hicrî 828 → 1424/1425 · metin (Şubat-Mart 1425) | «hicrî 828 yılının Rebîülevvel veya Rebîülâhir ayında (Şubat-Mart 1425) doğdu» | sınav vakası |
| kisiler.js:153 | seyh-bedreddin | t=1416 | 823 (1420) | «Şeyh Bedreddin 823 (1420) yılında Serez'de idam edildi» | 1416 notta kaçışın yılı (②) |
| kisiler.js:350 | cengiz-han | f=1162 | 1155 | «TDV İslâm Ansiklopedisi'ne göre 21 Ocak 1155'te … doğdu» | notta 1162 hiç geçmiyor (`donem` "yak. 1162–1227") |
| kisiler.js:57 | nevsehirli-damad-ibrahim-pasa | f=1666 | 1662 | «1662 dolayında Nevşehir'de doğdu» | "dolayında" ama 4 yıl fark |
| kisiler.js:436 | ahmed-cevdet-pasa | f=1822 | 1823 | «26-27 Mart 1823'te Bulgaristan'ın Lofça kasabasında doğdu» | gün kesin, yıl 1 eksik |
| kisiler.js:426 | piri-reis | t=1554 | 960 (1553) | «muhtemelen 960 (1553) yılı sonlarında … idam edildiği kaydedilir» | ① yumuşak: H.960 1553-12-06'da biter; not "muhtemelen" diyor ama alan 1554'ü taşıyor |

### 3.2 Mekanik ① adayı olup elle ② / ③ çıkanlar
- **Kişi (3):**
  - kubilay-han `t=1294` ← «Ağabeyi Mengü Kağan'ın 1259'daki ölümü»: **②**, başkasının ölümü.
  - nikolay1 `t=1855` ← «Kırım Savaşı'nı (1853) başlatan, savaş sürerken ölen çar»: **②**, 1853 savaşın başlangıcı.
  - mimar-sinan `f=1488` ← «1491'den önce … doğdu»: **çelişki değil**, metin bir üst sınır veriyor ve 1488 < 1491.
- **Padişah (11 adayın 11'i):**
  - murad2 `to=1444` ← «1446'da genç oğlunu tahttan indirip yeniden tahta çıktı»: **②**. Bu kayıt ilk saltanat; 1446 ikinci cülûs.
  - suleyman1 `olum=1566` ← «Şehzade Mustafa'nın 1553'te idamı»: **②**.
  - selim2 `from`/`tahta=1566` ← «Kıbrıs (1570-71)»: **②**, "tahta çıkan şehzade" ifadesi fetih yılına yanlış bağlandı.
  - mehmed4 `olum=1693` ← «1683 Viyana bozgunu … annesinin ölümü»: **②**.
  - selim3 `olum=1808` ← «tahttan indirilmesi (Mayıs 1807)» ve `from`/`tahta=1789` ← «yeniden tahta çıkarmak (1808)»: **②**. Not iki tarihi kendisi ayırıyor.
  - abdulaziz `olum=1876` ← «1881'de açılan Yıldız Sarayı davası»: **②**.
  - murad5 `from`/`tahta=1876` ← «1878 … yeniden tahta çıkarmak için baskın»: **②**.
- **Padişah gerçek ①: 0.**

### 3.3 ③ ve ② özet (elle okunmadı, tam liste betiğin `--json` çıktısında)
- Kişi: ② 14 · ③ 22. ③'ün çoğu notun KENDİ beyan ettiği ihtilaflar:
  - kavalali-mehmed-ali-pasa «1183 (1769) ya da 1184 (1770)»
  - ibrahim-muteferrika «Ölüm yılı 1745 kabul edilir; mezar taşındaki 1160 (1747)»
  - seyh-bedreddin `f` «hicrî 740-770 … 760 (1359)»
  - merzifonlu, babur: aynı yılın hicrî ve miladî yazımı
- Padişah: ② 31 · ③ 1 (orhan: Bursa 1326 / 1324 ayrımı, notun kendi beyanı).

## 4. Bulgular — yerleşimler: elle doğrulanmış ① 0
**Mekanik ① 84 adayın hepsi okundu: gerçek ① 0.**
- İlk koşuda (yakın ıska kuralı yokken) 231 aday çıkmıştı. 15'lik örneklem okununca yerleşim metninin çoğunlukla BAŞKA bir şeyi tarihlediği görüldü: belediye statüsü, komşu şehir, "Avusturya'da kaldı" (değişim YOK), "923 km". Kural bunun üzerine daraltıldı.

| sınıf | adet | kayıtlar |
|---|---|---|
| ② **beyanlı** (not sapmayı/çelişkiyi/eksiği KENDİSİ söylüyor) | 31 | Denizli · Lugos · Kirmanşah · Luristan (997/1589 itaat, Kütükoğlu) · Kerkük («KAYNAKLAR AYRIŞIR») · Sivrihisar · Hoy (`neden`: TDV 1739 pencereye sığmıyor, koordinatöre soruldu) · Nihâvend ×2 («başlangıç yıl kodu fetihten SONRAKİ ilk yıl başı») · Drežnik · Brest-Litovsk ×2 · Raipur ×2 · Port-Étienne · Puerto Villamil · Bonito · San Pedro de Atacama · Taltal · La Serena · Simití · Carora · Tonalá · Taşkurgan (1879) · Labuan ×2 («ÇELİŞKİ: … 1846») · Petseri ×2 · Lienz · Klagenfurt · Pago Pago |
| ② idarî statü (vila/distrito/belediye; `kur` idarî kuruluşu taşıyor) | 17 | Aquidauana ×2 · Três Lagoas · Diamantino · Porto Nacional · Lins · Cáceres · Correntina · Três Corações ×2 · Boa Vista · Ituango · Arauca · Carlsbad · Douglas ×2 · Birdsville |
| ② farklı olay | 12 | Kırım isg ×5 (1772 kurultay) · Bûr Sûdân (1899 künye günü) · Brisbane (taşınma) · Noumea (ilhak ↔ kuruluş) · Timber Creek · Şinkît · Sena Madureira · Cooktown (ad) |
| uyumlu: aralık / yuvarlama | 10 | Yergöğü (853 H = 1449-02-24…1450-02-13, `1450-01-01` aralıkta) · Higüey · Camagüey · Kılkış · Newcastle Waters · Başkurt ×2 · Guairá · Taşkurgan (1877 sonu → 1878-01-01) · Kesriye |
| ② başka yer | 8 | Bolayır · Maydos (Gelibolu şehri) · Taganrog (Azak) · Trinidad · San Ignacio (Loreto) · São Paulo de Olivença · Cushamen · Marabá |
| ② değişim yok | 3 | Freistadt · Bregenz ×2 («Avusturya'da kaldı») |
| ③ belirsiz | 3 | Silistre `s[1] eflak t=1419` ↔ «1418'de ölümüne kadar elinde tuttu» (Mircea'nın ölümü mü, devir mi?) · Putre «1880-1884 askerî işgal» (`isg` yok) · Sintang «1825'te çekildi» |

- 🟡 Douglas ve Carlsbad'da `kur`, metindeki "kuruldu" yılını değil belediye yılını taşıyor. Partinin kuralı Aquidauana notunda yazılı («köy kuruluşu … kur alınmadı»). Bu iki kayıtta ise kural yazılmamış; ② sayıldı, kuralın teyidi koordinatörde.
- ⚠️ **Ölçülemedi:** yerleşim ③ **205** kaydı ("uzak yıl") elle OKUNMADI. Yakın ıska kuralının bir bedeli var: alanla 10+ yıl farklı gerçek bir çelişki bu kovaya düşer ve görünmez.

## 5. Ne istiyorum / öneri (karar koordinatörde)
- **7 gerçek ①** veri düzeltmesi ister (`kisiler.js` sahibinin işi; bu oturum yazmadı). Her biri için kaynağın kendisi notta. Bir kısmı (cengiz-han 1155/1162, nevsehirli 1662/1666) bilinçli bir seçim olabilir; o hâlde notta beyan edilmesi gerekir.
- Bedreddin sınavı "② olmalı" diye kurulmuş, ama ölçüm `t` alanında ① veriyor (§2). Sınavın cümlesi düzeltilmeli.
- Kapıya bağlanırsa (öneri, karar sizde): yalnız kişi `f`/`t` için ① sayısı **7** tavan olarak dondurulabilir. Padişah ① 0. Yerleşim kapıya ALINMAMALI: 84 adayın 0'ı gerçek, gürültü çok yüksek.
- Yerleşim ③ 205'in okunması isteniyorsa ayrı iş.

Değişen/yeni dosyalar (commit yok): `C:\atlas-umit\denetim\ARAC-NOT-CELISKI-1006.py` · `C:\atlas-umit\denetim\UMIT-W12-NOT-CELISKI-1006.md`.
Yeniden üretme: `py denetim/ARAC-NOT-CELISKI-1006.py <depo-kökü> [--json <çıktı>]` (çıkış 0 ölçüldü · 2 ölçülemedi).

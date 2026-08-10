# TDV TARİH TURU — KUTU DENETİM'in bilerek boş bıraktığı günlerin kaynaktan doldurulması

> **Oturum:** TDV TARİH TURU (araştırmacı/çapraz) · **Tarih:** 10 Ağustos 2026
> **Yetki:** yalnız bu dosya + `oturumlar/TDV-TARIH-ILERLEME.md`. **Veriye dokunulmadı.**
> Düzeltmeleri KOORDİNATÖR uygular (`CLAUDE.md §7`).

---

## ⓪ ÖLÇÜM TABANI — devralınmadı, ölçüldü

```
yerleşim   2308        girdi dosyası  36        künye  392
kronoloji  1188 madde  (17 dosya: olaylar.js + olaylar_ek*.js)
```

⚠️ **Şartnamedeki iki sayı tutmadı, ikisini de düzelttim:**

| şartname / `§1.5` | ölçüm | not |
|---|---|---|
| künye **390** | **392** | VERİ DEVLET 2 aynı gün `gilan-kiya` + `mazenderan-marasi` yazmış |
| kronoloji **1158/1161** | **1188** | koşu sırasında 27 madde daha inmiş — **bir kalemi kapatmışlar (§⑦)** |

⚠️ **"11 tarih kalemi" de kaymış.** `sebep: TARİH` etiketli kalem tam **11**, ama
`p3/H-0008` = `p2/H-0025`'in aynısı ⇒ **10 ayrı soru**; ve şartnamenin *"en büyük
dördü"* arasında saydığı **İlhanlı üçlüsü `hayalet` etiketli**, o 11'in içinde
değil. Koordinatör onayıyla **12 soru** araştırıldı.

### Kullanılan aletler (scratchpad, geçici)

```
tdv.py         slug → HTTP kodu + <title> + GÖVDE (düz metin) · dört tuzak sınıfını ayırır
bul.py         çekilen gövdede kelime arar, TAM SATIRI basar (özet YOK, alıntı VAR)
taban*.py      girdi.py ÜZERİNDEN veri okur — kendi ayrıştırıcımı yazmadım
gun*.py        önerilen kırılma günü ÇEKİRDEKTE var mı (`§11` kova dersi)
kronoloji.py   o günün ±30 gününde madde var mı (Değişmez 2)
ara_madde.py   kronolojide kelime arar
```

📌 **`§11`: "veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır"** —
yerleşim verisini regex'le değil `arac/girdi.py`yi **içe aktararak** okudum.
🔴 **Ve TDV gövdelerini özetletmedim.** Bir özet aracı denendi ve doğru çıktı, ama
her alıntı ayrıca **ham HTML'den** doğrulandı: `CLAUDE.md §4` *"küçük model bu
projede kullanılmaz — uydurma kaynak üretiyor"* diyor, ve bu raporun tamamı
alıntıya dayanıyor.

---

## ① SLUG HARİTASI — 60 slug sınandı

### 🟢 CANLI (HTTP 200) ve **gövdesi okundu**

```
erzincan · kemah · ilhanlilar · karamanogullari · eretnaogullari · konya ·
aksaray · nigde · sivrihisar · cankiri · germiyanogullari · ankara ·
candarogullari · kastamonu · bagdat · celayirliler · timur · aydinogullari ·
cuneyd-bey · izvornik · tuzla--bosna-hersek · bosna-hersek · eflak ·
divrigi · malatya · arapkir
```

### 🔴 ÖLÜ (HTTP 302) — ve **beşinin doğrusu bulundu**

```
ölü                     doğrusu
otlukbeli           →   otlukbeli-savasi        200
ahiler              →   ahilik · ahi-evran      200   ← "kalıcı bulunamadı" damgası ÇÜRÜDÜ
eretna              →   eretnaogullari          200
sahibataogullari    →   sahib-ataogullari       200
tuzla               →   tuzla--bosna-hersek     200   ← `--sonek` deseninin BEŞİNCİ vakası
bosna · mutahharten · burhaneddin(→kadi-burhaneddin) · vlad · kaziklivoyvoda ·
amasra · caldiran(→caldiran-savasi) · gracanica · srebrenica
```

### 🔴 YENİ TUZAK ALT-SINIFI: **⑤ canlı slug, gövde bir ATIF**

`CLAUDE.md §4` dört alt-sınıf sayıyor. **Beşincisi ölçüldü:**

```
zvornik   HTTP 200 · <title> "ZVORNİK" · gövde 2.223 bayt
          içerik:  "ZVORNİK  bk. İZVORNİK"
```
③ (gövde boş) değil — gövde **dolu**, ama **bir yönlendirme notu.**
④ (boilerplate) değil — sayfa **doğru geldi.**
⇒ Kod ✓ · başlık ✓ · gövde ✓ · **bilgi SIFIR.** `izvornik` (10.675 bayt) gerçek maddedir.
📌 Sayfayı uzunluğuyla elemeyen bir araç bunu *"madde okundu"* diye raporlar.

📌 **Ve `ahiler` vakası bir kuralın eksik ayağını gösteriyor.** Bu depoda
*"`bulunamadı` bir SONUÇTUR"* yazılı — doğru, **ama yalnız arama tüketildiyse.**
Beş slug **yalnız adı değişerek** canlandı. ⇒ ***"bulunamadı" demeden önce ad
varyantları denenir: çoğul/tekil · `--sonek` · kapsayıcı madde.***

---

## ② KALEM KALEM — 12 soru

Her kalemde: **① doğru tarih (TAM ALINTI) · ② slug + HTTP + gövde · ③ güven ·
④ hangi kayda, hangi alana.**

---

### KALEM 1 · ERZİNCAN — `p4/H-0006` · **42 yıl** · 🟢 GÜVEN: **NET**

**① DOĞRU TARİH.** Otlukbeli bir fetih değil — TDV **iki ayrı maddede** söylüyor:

> `erzincan` [46] *"**Otlukbeli Savaşı'ndan (1473) sonra da Erzincan Akkoyunlu
> sınırları içinde kaldı.**"*
> `kemah` [44] *"Akkoyunlu idaresi 1473 Otlukbeli Savaşı'ndan sonra da sürdü."*

> `erzincan` [46] *"Akkoyunlu Devleti'nin dağılması ile Erzincan **Safevîler'in**
> kontrolü altına girdi. 1500'de Şah İsmâil Erzincan'a geldiği gibi… Şah İsmâil
> faaliyetleri için Erzincan'ı merkez seçip buraya güvenilir adamlarından **Nûr Ali
> Halife'yi tayin etti (1512)**. Nihayet Erzincan ve yöresi **1514'te** Yavuz Sultan
> Selim'in Çaldıran Seferi sırasında **savaşsız olarak** Osmanlı hâkimiyetine girdi."*
> `erzincan` [60] *"Erzincan, Bayburt ile birlikte **23 Ekim 1514**'te Bıyıklı
> Mehmed Bey'e (Paşa) beylerbeyilik olarak verilmişti."*

**② SLUG.** `erzincan` 200 · başlık `ERZİNCAN` · gövde 22.599 bayt **okundu**.
`kemah` 200 · gövde 16.611 bayt **okundu**. `otlukbeli` 302 → `otlukbeli-savasi` 200.

**③ GÜVEN: NET.** İki bağımsız madde aynı şeyi söylüyor.

**④ TESLİM.** `data/yerlesimler.js` · **Erzincan** (39,750/39,492)
```
d:  "1473-08-11"  →  "1514-10-23"
s:  {f:"1410-01-01", t:"1473-08-11", d:"akkoyunlu"}
 →  {f:"1410-01-01", t:"1422-01-01", d:"karakoyunlu"}     ← 🔴 aşağıya bak
    {f:"1422-01-01", t:"1502-01-01", d:"akkoyunlu"}
    {f:"1502-01-01", t:"1514-10-23", d:"safevi"}
```

⚠️ **`1514-01-01` yazılmadı, sebebi yazılı:** şartname *"gün yoksa `YYYY-01-01`"*
diyor; burada uygulamak **anakronik** olurdu — Yavuz İstanbul'dan **20 Mart
1514**'te çıktı, Çaldıran **23 Ağustos 1514**. Ocak 1514'te şehir Nûr Ali
Halife'nin elinde. **Yuvarlak yıl burada bilgi eksikliğini değil, yanlış bir
gerçeği yazardı.** `1514-10-23` TDV'nin verdiği **tek tam gündür**, Çaldıran'dan
sonradır, ve zinciri kapatır:
```
Erzincan 1514-10-23 · Kemah 1515-05-19 · Erzurum 1518 — üçü de BIYIKLI MEHMED PAŞA
```
🟢 **Verideki Kemah tarihi TDV'nin gününün birebir aynısı:** *"Kemah Osmanlı
idaresine girdi (5 Rebîülâhir 921 / **19 Mayıs 1515**)"*. ⇒ Kemah'ı yazan TDV'ye
bakmış; **Erzincan tek başına dışarıda kalmış.**

**§3.5.1 İKİ UÇ ÖLÇÜLDÜ:** boşluk açılmıyor — `akkoyunlu` 1502'ye, `safevi`
1502-1514'e uzuyor; **Kemah ve Erzurum'un zaten kullandığı `1502-01-01` sınırı.**

#### 🔴 YAN BULGU — kimsenin aramadığı 12 yıl, aynı kayıtta

> `erzincan` [46] *"Mutahharten'den sonra Erzincan **1410 yılında Karakoyunlu
> hâkimiyetine girdi**… Erzincan **Karayülük Osman tarafından alınarak Akkoyunlu
> topraklarına katıldı (1422)**."*

Veri 1410-1473 arasını tek parça `akkoyunlu` yazıyor. **1410-1422 KARAKOYUNLU.**
`karakoyunlu` künyesi `f:1351-01-01` — pencere uygun.
📌 KUTU listesinde yok; **maddeyi baştan sona okurken çıktı.**

---

### KALEM 2 · İLHANLI ÜÇLÜSÜ (Konya · Aksaray · Niğde) — `p2/H-0016` · **13 yıl** · 🟢 **NET**

**① DOĞRU TARİH.** Boşluğu kimin doldurduğu tahmin değil, alıntı:

> `karamanogullari` [62] *"Ebû Said Bahadır Han'ın ölümünün ardından… **Konya ve
> Beyşehir bile Eretnalılar'a kaptırılmıştır.**"*
> `eretnaogullari` [39] *"Ebû Said Bahadır Han'ın ölümü üzerine (**1335**)… Alâeddin
> Eretna'yı yerine vekil bırakması… **beyliğin temellerini attı.**"*
> `eretnaogullari` [39] Eretna öldüğünde (Mart 1352) hâkimiyetindekiler:
> *"…Ankara, Zile, Canik, Ürgüp, **Niğde, Aksaray**, Erzincan…"*
> `nigde` [55] *"733'te (1332-33)… İbn Battûta, **Niğde'nin Irak hükümdarına bağlı**
> büyük bir şehir olduğunu kaydeder."*  ← 1332'de hâlâ İLHANLI ✓
> `nigde` [55] *"XIV. yüzyılın ilk yarısında Niğde ve çevresi **Eretnaoğulları'nın**
> idaresi altına girdi."*
> `nigde` [58] *"Eretna Bey'in ölümünden sonra… Karamanoğlu Alâeddin Bey **768'de
> (1366-67) Niğde ve Aksaray'ı** kendi topraklarına kattı."*
> `konya` [71] *"Alâeddin Bey Konya'yı **Eretnalılar'ın elinden** aldı (768/1366-67)."*

**② SLUG.** `ilhanlilar` · `karamanogullari` · `eretnaogullari` · `konya` (72.395 b) ·
`aksaray` · `nigde` (40.850 b) — altısı da 200, başlıkları doğru, **altısının da
gövdesi okundu.** `eretna` 302 → `eretnaogullari`.

**③ GÜVEN: NET.** Dört ayrı madde `768/1366-67` diyor.

**④ TESLİM.** `data/yerlesimler.js` · **Konya · Aksaray · Niğde**

**A · UCUZ SÜRÜM** (üçüne de aynı — komşularla birebir aynı sınır):
```
s: {f:"1308-01-01", t:"1366-01-01", d:"ilhanli"}
→  {f:"1308-01-01", t:"1335-01-01", d:"ilhanli"}
   {f:"1335-01-01", t:"1366-01-01", d:"eretna"}
```
🟢 **`1335-01-01` sınırını veri ZATEN KULLANIYOR:** Kırşehir ve Sivas tam bu
deseni taşıyor (`ilhanli → 1335-01-01`, sonra `eretna → 1381`). Düzeltme mevcut
modele **uyum**, sapma değil.

**B · ZENGİN SÜRÜM** (yalnız Konya — TDV Konya'yı daha ince anlatıyor):
> `konya` [70] *"Demirtaş'ın Mısır'a ilticasından sonra Konya **tekrar
> Karamanoğulları'nın eline geçti (729/1328-29)**."*
> `eretnaogullari` [39] *"Eretna'nın, Karamanoğlu Ahmed Bey'in ölümünden sonra
> **1350'de Konya'yı da ele geçirdiği** anlaşılmaktadır."*
```
ilhanli 1308-01-01 → 1329-01-01
karaman 1329-01-01 → 1350-01-01
eretna  1350-01-01 → 1366-01-01
karaman 1366-01-01 → 1397-07-01   (değişmiyor)
```

**FATURA: SIFIR yeni kırılma günü.**
```
1335-01-01   36 uç · çekirdekte 26   ✓   ve maddesi VAR: "Eretna Beyliği'nin kuruluşu"
1350-01-01    4 uç · çekirdekte  4   ✓
1329-01-01    4 uç · çekirdekte  4   ✓
1366-01-01    6 uç · çekirdekte  6   ✓
```
⚠️ **Ama bir incelik:** `1366-01-01`, `1350-01-01` ve `1329-01-01` **bugün zaten
`2s`-AÇIK** (±30 günde madde yok; 1366'ya en yakın madde +212 gün). Düzeltme
bunu **kötüleştirmiyor** — ama *"768/1366-67: Karamanoğlu Alâeddin Bey Konya,
Aksaray ve Niğde'yi aldı"* maddesi yazılırsa **var olan bir açık kapanır.** Bedava
düzeltmenin üstüne bedava kazanç.

#### 🔴 YAN BULGU — Niğde'de EKSİK bir Osmanlı dönemi

> `nigde` [58] *"**800 (1397)** yılında yapılan Akçay Muharebesi'nde Karamanoğulları'nı
> ağır bir yenilgiye uğratan Yıldırım Bayezid **Konya, Lârende, Niğde, Develi,
> Aksaray'ı** alarak sahile kadar ilerledi."*

```
Konya    d:1397-07-01→1402-07-28 + timurlu + karaman   ✓
Aksaray  d:1397-07-01→1402-07-28 + timurlu + karaman   ✓
Niğde    ← ÜÇÜNÜN DE HİÇBİRİ YOK · s:karaman 1366→1468 TEK PARÇA
```
⇒ Aynı cümlede, aynı savaşta alınan üç şehrin ikisi haritada Osmanlı oluyor,
üçüncüsü olmuyor. **Beş yıllık delik.** `1397-07-01` ve `1402-07-28` günlerinin
ikisi de çekirdekte var ve **ikisinin de maddesi var** ⇒ bedava.

⚠️ **ÖLÇEMEDİM:** Niğde'nin 1419-1420 Memlük zaptını (`nigde` [58], `822/1419`)
**önermiyorum** — TDV *"Memlükler'in **himayesinde** Niğde Emîri Ali Bey'e
verildi"* diyor; doğrudan tasarruf mu himaye mi **ayırt edemedim.**

---

### KALEM 3 · SİVRİHİSAR — `p2/H-0015` + `e08/H-0001` · **27 yıl + 13 yıl** · 🟢 **NET**

**① DOĞRU TARİH.** 🔴 **KUTU DENETİM'in hatırladığı hipotez ÇÜRÜDÜ.** *"Germiyan'dan
çeyizle geçti (1381?)"* deniyordu (ve dürüstçe *"ölçmedim"* diye işaretlenmişti).
**Çeyiz listesi TDV'de tek tek yazılı ve Sivrihisar içinde YOK:**

> `germiyanogullari` [53] *"Süleyman Şah'ın, kızının düğünü dolayısıyla **Kütahya,
> Simav, Eğrigöz (Emet) ve Tavşanlı**'yı çeyiz olarak Osmanlılar'a vermesi…
> **1381 yılında** yapılan düğünden sonra Bayezid Kütahya'ya idareci gönderildi."*
> `germiyanogullari` [56] *"Böylece **1390 yılında** bütün Germiyan toprakları
> Osmanlılar'ın idaresi altına girdi."*
> `germiyanogullari` — **"Sivrihisar" kelimesi maddede SIFIR kez geçiyor.**

🟢 **Ve veri bu iki cümleyi ZATEN BİREBİR TAŞIYOR:** çeyiz dörtlüsü veride tam
`1381-01-01`; kalan Germiyan (Uşak · Alaşehir · Afyon) tam `1390-01-01`.
⇒ **Germiyan verisi TDV'den yazılmış ve DOĞRU. Sivrihisar o listeye ait değil.**

**Sivrihisar gerçekte kimindi:**
> `sivrihisar` [40] *"Anadolu'daki Moğol / İlhanlı idaresi sonrasında
> **Karamanoğulları'nın eline geçen** Sivrihisar, Orhan Gazi zamanında Ankara'nın
> fethinin ardından **757 (1356)** yılında Osmanlı idaresi altına alındı. Orhan
> Gazi'nin ölümüyle burası **tekrar Karamanoğulları** tarafından ele geçirildi.
> 1362'de… I. Murad… **764 (1363)** baharında… Sivrihisar tekrar Osmanlılar'ın
> hâkimiyetine geçti. Ankara Savaşı'nın ardından… Timur, Sivrihisar'ı Kırşehir ve
> Beypazarı ile birlikte **Karamanoğulları'na verdi**. Şehzadeler arası mücadeleler
> sırasında **Süleyman Çelebi tarafından muhasara edildiyse de alınamadı.** I.
> Mehmed… antlaşma gereği aralarında Sivrihisar'ın da bulunduğu bazı şehirler
> Osmanlılar'a geri verildi (**818/1415**)."*

⇒ **Yedi döneminin BEŞİ yanlış:**
```
veri                              TDV
s: germiyan 1300 → 1354-08-01     karaman
d: 1354-08-01 → 1402-07-28        1356 Osm · 1362 Karaman · 1363 Osm
s: timurlu         1402→1404      KARAMAN (Timur ona verdi)
s: suleyman-celebi 1404→1411      KARAMAN (Süleyman kuşattı, ALAMADI)
s: mehmed-celebi   1411→1413      KARAMAN
d: 1413-07-05'ten                 818/1415
```

**② SLUG.** `sivrihisar` 200 · gövde 13.424 b okundu. `germiyanogullari` 200 ·
gövde okundu.

**③ GÜVEN: NET** (sahiplik) · **yıl beyanı** (1356 · 1363 — TDV yalnız hicrî yıl
veriyor: 757 · 764; **gün YOK, uydurmadım**).

**④ TESLİM — iki seçenek:**
```
A · TAM    yedi dönemi TDV'ye göre yeniden yaz
           ⇒ 1356 · 1362 · 1363 · 1415 = DÖRT yeni kırılma günü
           ⇒ dördü de bugün ±30 günde MADDESİZ ⇒ dört yeni kronoloji maddesi
B · UCUZ   yalnız SAHİBİ düzelt: `germiyan` → `karaman`,
           1402-1415 üçlüsü → `karaman` · tarihlere DOKUNMA
           ⇒ SIFIR yeni madde
```
**ÖNERİM: B**, sonra fırsat olunca A. Hatanın **görünen** kısmı sahiplik;
tarihler ±2 yıl mertebesinde ve 27 yıllık lob hatası B ile zaten kapanıyor.

🟢 **VE BU, EMRE'NİN `e08/H-0001` SORUSUNU KAPATIYOR.** *"Germiyan ilk sahneye
çıktığında toprakları iki parça mıydı?"* — **HAYIR. Doğu lobu hiç Germiyan
olmadı.** İki parçalılık tarihî bir gerçek değil, **bir veri hatasının şekli.**

🔴 **Ve bir hayaleti daha besliyordu:** KUTU raporu *"Fetret'te Anadolu'da
`timurlu` sahipli SADECE ÜÇ nokta var: Ankara · Sivas · **Sivrihisar**"* diyordu.
TDV'ye göre Sivrihisar onlardan biri değil — **üç, ikiye iniyor.**

---

### KALEM 4 · ÇANKIRI — `p2/H-0015` · **38 yıl** · 🟢 **NET**

**① DOĞRU TARİH.** 🟢 **KUTU'nun hatırladığı "1392" DOĞRU ÇIKTI:**

> `candarogullari` [52] *"Yıldırım Bayezid büyük bir ordu ile Candaroğlu ülkesine
> girdi ve Süleyman Bey'i mağlûp ederek öldürdü. Böylece Candaroğulları
> Beyliği'nin **Kastamonu şubesi** Osmanlı Devleti topraklarına katılmış oldu
> (**1392**)."*
> `cankiri` [45] *"Bu devletin dağılmasından sonra… **Candaroğulları'nın
> hâkimiyetinde kaldı. I. Murad döneminde Osmanlı idaresine girdiyse de bu uzun
> süreli olmadı. I. Bayezid döneminde tekrar Osmanlı hâkimiyeti altına alınan**
> şehir, 1402 Ankara Savaşı'ndan sonra Timur tarafından İsfendiyaroğulları'na
> verildi."*

**② SLUG.** `cankiri` 200 · gövde 13.463 b okundu. `candarogullari` 200 · 25.971 b okundu.

**③ GÜVEN: NET.**

**④ TESLİM.** `data/yerlesimler.js` · **Çankırı** (40,601/33,616)
```
s: {f:"1309-01-01", t:"1354-08-01", d:"candar"}   →   t:"1392-11-01"
d: {f:"1354-08-01", ...}                          →   f:"1392-11-01"
(1402 sonrası `candar` ZATEN doğru ✓ — TDV: "Timur Çankırı ve Kalecik'i de vermişti")
```

🟢🟢 **GÜN `1392-01-01` DEĞİL `1392-11-01` — VE SEBEBİ ÖLÇÜLDÜ.** İlk önerim
`1392-01-01`di; kronolojiyi ölçünce **kendi önerimi çürüttüm:**
```
1392-01-01  maddesi VAR ama:  "Teke ilinin ilhakı: Antalya'nın katılışı"
                              ⇒ Çankırı'yı ANTALYA maddesine yapıştırırdı
                                = KUTU'nun şikâyet ettiği hatanın ta kendisi
1392-11-01  maddesi VAR:      "Kastamonu'nun ilhakı"   [olaylar_ek.js]   ✓✓
            ve ÇEKİRDEKTE 14 UÇLU BİR KIRILMA GÜNÜ:
            Kastamonu · Bartın · Safranbolu · Eflani · Devrek · Akçakoca ·
            Karadeniz Ereğli
```
⇒ **Çankırı, Candaroğulları'nın Kastamonu şubesinin TEK EKSİK ÜYESİ.** Kardeşleri
1392-11-01'de Osmanlı oluyor, Çankırı 38 yıl önce Ankara'nın gününe yapışmış.
**Doğru gün zaten veride, zaten maddeli. Bedava.**

⚠️ **I. Murad devrindeki kısa Osmanlı aralığını MODELLEMİYORUM** — TDV yıl
vermiyor. **`bulunamadı`.**

---

### KALEM 5 · ANKARA (`ahiler`) — `p2/H-0015` · **9,0 yıl erken + 0,6 yıl geç** · 🟡 KISMEN

**① DOĞRU TARİH.** 🟢 **`d:1354` DOĞRUYMUŞ:**

> `ankara` [258] *"Ankara **1354** yılında Orhan Gazi'nin oğlu Süleyman Paşa
> tarafından Osmanlı ülkesine katıldı."*
> `ankara` [186] *"Ankara **1304-1341** yılları arasında Anadolu'yu istilâ eden
> **İlhanlılar'a tâbi** idi… Bu dönemde yönetimi ellerinde tutan **ahîlerin**
> şehrin sosyoekonomik hayatında önemli rol oynadıkları bilinmektedir."*

**② SLUG.** `ankara` 200 · gövde okundu. `ahiler` **302 ÖLÜ** → **`ahilik` 200 ·
`ahi-evran` 200**. Ayrıca `ankara` maddesinin kaynakçasında *"Ankara'da Ahiler
Hükümeti"* ve *"Ankara'da Ahilere Ait İki Kitabe"* makaleleri duruyor.

**③ GÜVEN: NET** (fetih yılı) · **TARTIŞMALI** (`ahiler` uçları).

**④ TESLİM.** Fetih gününe **DOKUNMA** (`08-01` TDV'de yok ama zaten var olan,
maddeli bir kırılma günü). Kalan iki uç:
```
veri  s:ahiler 1281-01-01 → 1354-08-01
künye ahiler   1290-01-01 → 1354-01-01
① künyenin t:'si 1354-08-01'e çekilsin       (data/devletler.js — VERİ DEVLET'in dosyası)
② 1281-1290 başı `selcuklu` olsun            (künye 1075-1308, pencere uygun)
```
⚠️ **ÜÇÜNCÜ İHTİMALİ ÖLÇEMEDİM:** TDV Ankara'yı 1304-1341'de **İlhanlı'ya TÂBİ**
ve Ahîleri **yerel idare** sayıyor. Bu, `v:` (tâbi) kavramının **yabancı devlet**
hâli — veri modelinde karşılığı var mı **bilmiyorum, bakmadım.** Karar
koordinatörün.

---

### KALEM 6 · BAĞDAT — `p2/H-0025` = `p3/H-0008` · **18 yıl** · 🟡 KISMEN NET

**① DOĞRU TARİH.**

> `timur` [42] *"Bağdat'ı ele geçirdikten sonra (**20 Şevval 795 / 29 Ağustos
> 1393**) kuzeye doğru hareket ederek Tikrît'e ulaştı."*   ← **TAM GÜN**
> `bagdat` [134] *"Bağdat Timur tarafından **795'te (1393)** ve **803'te (1401)**
> olmak üzere iki defa işgal edildi… **Ahmed Celâyir 1405'te Bağdat'a dönerek**
> Timur'un yıktığı duvarları… tamir ettirmeye çalıştı."*
> `celayirliler` [42] *"…bağımsız bir devlet kurdu (**1340**)."*
> `celayirliler` [44] *"Ahmed, **Timur Semerkant'a dönünce** Memlük Sultanı
> Berkuk'un yardımı ile Bağdat'ı geri aldı… tekrar Mısır'a kaçtılar (**1400**)…
> Sultan Ahmed Celâyir, Timur-Yıldırım mücadelesini fırsat bilerek Bağdat'ı ele
> geçirdiyse de daha sonra burayı **Karakoyunlu Kara Yûsuf'a** bırakmak zorunda
> kaldı ve ancak Timur'un **1405**'te ölümünden sonra tekrar Bağdat'a hâkim
> olabildi… yakalanıp çocuklarıyla birlikte öldürüldü (**813/1410**)."*

🟢 **Kronolojideki iki tarih de TDV ile UYUMLU:** madde `1393-08-29` = TDV'nin
tam günü ✓ · madde `1401-01-01`, 803 AH'ın (22 Ağu 1400 – 11 Ağu 1401) içinde ✓.

**② SLUG.** `bagdat` 200 · gövde **114.113 bayt** okundu · `celayirliler` 200 ·
`timur` 200 · 30.956 b okundu.

**③ GÜVEN: NET** (1393-08-29 · 1401 · 1405 · 1410 · künye 1340) ·
**`bulunamadı`** (Ahmed'in 1393 sonrası **dönüş yılı** — TDV *"Timur Semerkant'a
dönünce"* diyor, **tarih vermiyor**).

**④ TESLİM.** `data/yerlesimler.js` · **Bağdat** (33,340/44,361)
```
s: {f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}    →  t:"1340-01-01"   🟢
s: {f:"1335-12-01", t:"1411-01-01", d:"celayirli"}  →  DÖRDE/BEŞE BÖLÜNECEK:
     {f:"1340-01-01", t:"1393-08-29", d:"celayirli"}
     {f:"1393-08-29", t:"????",       d:"timurlu"}     ← 🔴 dönüş yılı BULUNAMADI
     {f:"????",       t:"1401-01-01", d:"celayirli"}
     {f:"1401-01-01", t:"1405-01-01", d:"timurlu"}
     {f:"1405-01-01", t:"1411-01-01", d:"celayirli"}
```
🟢 **`1340-01-01` DÜZELTMESİ MÜKEMMEL OTURUYOR:** künye `celayirli f:1340-01-01`
ile **birebir**, ve o günün kronoloji maddesi hazır: ***"Celayirli Devleti'nin
kuruluşu — İlhanlı sonrası Azerbaycan"*** (54 uç, 52'si çekirdek). ⇒ Bugünkü
`1335-12-01` başlangıcı hem **4,1 yıl erken** hem de `CLAUDE.md §11`in yazdığı
**"İran fetreti"** vakasının Bağdat ayağı: 1335-12-01 Ebû Saîd'in ölüm günüdür,
**hiçbir ardılın gerçek başlangıcı değil.** Düzeltme boşluk açmıyor çünkü
`ilhanli` künyesi 1353'e kadar sürüyor.

⚠️ **`1393-08-29` yeni bir kırılma günü olacak — ama maddesi ZATEN VAR**
(*"Timur Bağdat'ı zaptetti — Celâyirliler Anadolu'ya kaçtı"*, +0 gün). `1401-01-01`
de öyle. ⇒ **Değişmez 2 açısından bedava.**

🔴 **SORUM VAR (§7.1 ⑥):** Ahmed Celâyir'in **1393-1401 arası dönüşü** için TDV
yıl vermiyor. Üç yol:
```
① 1394-01-01 yaz, "yıl beyanı — TDV vermiyor, standart akademik kabul" diye damgala
② dönüşü hiç modelleme: 1393-08-29 → 1401-01-01 arası `timurlu` kalsın
③ bana kaynak ver / başka oturuma sor
```
**Önerim ②** — çünkü ① uydurmaya en yakın seçenek ve TDV *"geri aldı"* diyor ama
**ne zaman demiyor**; ② en azından hiçbir yanlış gün yazmıyor. Kararı sen ver.

---

### KALEM 7 · ANADOLU SELÇUKLU 1308 — `p3/H-0006` · 🟢 **ZATEN KAPANMIŞ**

🔴 **BU KALEM ARTIK AÇIK DEĞİL — VE BUNU KİMSE BİLDİRMEMİŞ.**

KUTU DENETİM şöyle yazmıştı: *"Anadolu Selçuklu Devleti'nin SONU kronolojide
**SIFIR** kez anılıyor… o güne en yakın madde **579 gün** ötede."* Ölçtüm:

```
1308-01-01  ✓ MADDE VAR · +0 gün
   "Anadolu Selçuklu Devleti'nin fiilen sona ermesi — İlhanlı'nın doğrudan…"
                                                        [data/olaylar_ek16.js]
   "Aydınoğulları Beyliği'nin kuruluşu — İzmir, Ayasuluk, Tire'nin…"
                                                        [data/olaylar_ek16.js]
```

⇒ **`olaylar_ek16.js` yazılmış ve kalemi kapatmış.** KUTU'nun ölçümü **o an
doğruydu** (taban: kronoloji 1158-1161); benim tabanım **1188** — arada 27 madde
inmiş ve ikisi tam bu kalem.
📌 `CLAUDE.md §11` bu deseni yazıyor: *"aletim değişmedi, **EVRENİ** değişti."*
⚠️ **Bu satır yazılmazsa bir sonraki oturum madde YENİDEN yazar** — mükerrer.

🟡 **AÇIK KALAN kısım:** `1297-01-01` (6 nokta) ve `1300-01-01` (11 nokta)
dalgalarının maddesi hâlâ yok, ve üç yuvarlak yılın (1297 · 1300 · 1308) kendisi
sınanmadı. **Ölçtüm ama TDV'ye sormadım** — `anadolu-selcuklulari` ve `mesud-ii`
sluglarının ikisi de **200 (canlı)**, gövdelerini **okumadım**. Kapsam artarsa
okurum.

📌 **Bir incelik:** `1308-01-01`de kırılan 12 yerleşimin yalnız **6'sı** Selçuklu
(Aksaray · Bartın · Eflani · Konya · Niğde · Safranbolu). Öteki 6'sı
(Ayasuluk · Aydın · Birgi · Tire · Söke · Kuşadası) **`bizans` → `aydin`** —
ayrı bir olay (Aydınoğulları'nın kuruluşu), ve **onun da maddesi aynı gün var.**

---

### KALEM 8 · AYDIN / CÜNEYD BEY — `p3/H-0010` · 🟢 **NET** · ve çözümü BEKLENENİN TERSİ

**① DOĞRU TARİH.**

> `aydinogullari` [42] *"Sultan II. Murad ona Aydın-ili'ni vaad ederek bu
> ittifaktan ayırmış, **Cüneyd Bey de tekrar beyliğin başına geçmiştir (1422)**.
> Fakat yine rahat durmaması karşısında… onu yakalattı ve ailesiyle birlikte
> idam ettirdi (**829/1425-26**)."*
> `cuneyd-bey` [46] *"**Çelebi Mehmed'in vefatından sonra**… Düzmece Mustafa ile
> birlikte tekrar harekete geçen Cüneyd… Mustafa'dan ayrıldı ve **İzmire döndü.
> Ardından Ayasuluk'u ele geçirip** Aydınoğlu Mustafa Bey'i öldürdükten sonra…"*
> `cuneyd-bey` [117] *"Karasubaşı Cüneyd Bey'in **825 (1422)** tarihli gümüş sikkesi"*

**② SLUG.** `aydinogullari` 200 · 17.334 b okundu · `cuneyd-bey` 200 · 9.168 b okundu.

**③ GÜVEN: NET** (yıl 1422; TDV gün vermiyor).

**④ TESLİM.** 🟢 **Düzeltme yönü, sezginin TERSİ: maddeyi güne değil, GÜNÜ MADDEYE
taşı.**
```
data/yerlesimler.js · SEKİZ kayıt: İzmir · Aydın · Tire · Birgi ·
                       Ayasuluk (Selçuk) · Kuşadası · Söke · Çeşme
   d: …→"1421-08-15"        →   …→"1422-01-01"
   s: "1421-08-15"→"1425-06-01" aydin   →   "1422-01-01"→"1425-06-01" aydin
```
**Niçin `1422-01-01`:**
```
TDV                          "1422"                                        ✓
kronolojide o gün ZATEN VAR  "Cüneyd Bey Aydın-ili'nin başına döndü —
                              Aydınoğulları yeniden müstakil" [olaylar_ek11.js]  ✓✓
bugünkü gün 1421-08-15'in maddesi:  "Düzmece Mustafa ayaklanması"
                              ⇒ Emre'nin şikâyet ettiği YANLIŞ BAŞLIK
```
⇒ **Kırılma zaten kendi maddesinin 139 gün uzağında duruyordu; maddesi yazılmış
ve doğru yerde bekliyor.** Kırılmayı oraya taşımak hem TDV'yi hem Emre'yi hem
Değişmez 2'yi aynı anda karşılıyor.
⚠️ `1422-01-01` verideki **ilk** kırılma günü olacak (bugün 0 uç), ama maddesi
hazır ⇒ **yeni madde gerekmiyor.**

🟡 **Yan kalem (ÖNERMİYORUM, bildiriyorum):** `aydin` bitişi veride `1425-06-01`;
TDV `829/1425-26` ve `cuneyd-bey` maddesi *"(1426)"* diyor. 829 AH **13 Kasım
1425**'te başlıyor ⇒ `1425-06-01` **829'un dışında.** Ama o gün 30 uçlu ve maddeli
(*"Batı Anadolu beyliklerinin yeniden ilhakı: Aydın, Menteşe, Teke"*); ayrıca
`1426-01-01`de zaten *"Cüneyd Bey ve ailesinin idamı"* maddesi var.
⇒ **Taşımanın bedeli kazancından büyük. Kayda geçiriyorum, dokunma.**

---

### KALEM 9 · İZVORNİK ve TUZLA — `p3/H-0017` · 🔴 **İKİYE AYRILDI, VERDİKLER TERS**

KUTU bunu tek kalem sayıyordu (*"1460-01-01 YUVARLAK; gerçek gün TDV'den
alınacak… Bosna Krallığı 1463'te yıkıldı, İzvornik'in 1460'ta düşmesi
SINANMALI"*). Sınadım — **ikisi ayrı cevap veriyor.**

#### 9a · İZVORNİK — 🟢 **TARİH DOĞRUYMUŞ. GÜVEN: NET**

> `izvornik` [39] *"**Osmanlılar burayı 1460'ta fethettiler**, idarî ve askerî
> açıdan iyi konumda bulunduğundan bir kaza merkezi yaptılar. …İzvornik **1480**'de
> aynı adlı sancağın merkezi oldu."*

⇒ Kuşku **çürüdü**: 1460 doğru, Bosna Krallığı'nın 1463'teki yıkılışından önce
düşmesi TDV'ce teyitli. **Tarihe DOKUNULMAYACAK.**
⇒ Kalan kusur yalnız **kronoloji**: `1460-01-01`in tek maddesi *"Batı Karadeniz
kıyısının alınışı: Amasra"* ve İzvornik 1.100 km ötede. **Çare tarih değil,
MADDE.** (`data/olaylar_ek*.js` — VERİ KRONOLOJİ'nin işi.)

#### 9b · TUZLA (Bosna) — 🔴 **TARİH YANLIŞ. GÜVEN: TARTIŞMALI**

> `tuzla--bosna-hersek` [38] *"Burayı **1463**'te Osmanlı tarihçisi Neşrî
> Ağaçhisar diye zikreder. **Bosna kralı Ağaçhisar'ı Osmanlılar'ın eline
> geçmesini önlemek için yaktırmıştır.** Tarihî araştırmalarda uzun süre
> Tuzla'nın Osmanlılar tarafından **1512** yılında ele geçirildiği yazılmıştır.
> Ancak **872 (1467-68)** tarihli [defter] kayıtları buranın **1474 Nisanından
> önce** Osmanlı idaresine girdiğini gösterir."*
> [44] *"**1480**'de bu iki Tuzla… **İzvornik (Zvornik) sancağına dahil edildi.**"*

⇒ **1463'te Tuzla hâlâ Bosna kralınındır** — veri onu 1460'ta Osmanlı yapıyor.
⇒ **Veri 1460-01-01 diyor; TDV 1467-68 ile 1474 Nisanı arasını gösteriyor.**
```
öneri  s:bosna → t:"1468-01-01"  ·  d: f:"1468-01-01"     (872 defteri; YIL BEYANI)
```
⚠️ **TDV bir GÜN vermiyor, bir ARALIK veriyor.** `1468-01-01` bu aralığın
en erken savunulabilir ucudur ve **"yıl beyanı" diye damgalanmalıdır.**
⚠️ Ve `1480` de bir seçenek değil — o **idarî bağlanma**, fetih değil
(`§3.5`: *devletin yıkılışı ≠ o yerin fethi*'nin kardeşi).

📌 **Ders:** iki kayıt aynı güne yapıştığı için **tek kalem** sanılmıştı;
kaynak ikisini **ayırdı** ve **biri doğru, biri yanlış** çıktı. *Aynı gündeki
iki kayıt, aynı hatayı paylaşmak zorunda değil.*

**② SLUG.** `izvornik` 200 · 10.675 b okundu · `zvornik` 200 ama **ATIF gövdesi**
(`bk. İZVORNİK`, 2.223 b) · `tuzla` **302** → **`tuzla--bosna-hersek` 200** ·
18.460 b okundu · `bosna` 302 → `bosna-hersek` 200 · 59.026 b okundu.

---

### KALEM 10 · EFLAK — `p3/H-0018` · 🟢 **NET** · ve asıl kusur 1462'de DEĞİL

**① DOĞRU TARİH.** KUTU *"ara kademeler veride HİÇ YOK"* diyordu ve
*"hatırladım, yazan sınasın"* diye işaretlemişti. **TDV kademeleri tek tek veriyor:**

> `eflak` [45] *"Vlaicu **1373**'te I. Murad ile antlaşma imzaladı."*
> `eflak` [45] *"**Rovine**'deki çetin savaşta (**1394**) Osmanlı kuvvetleri üstün
> gelerek Mircea'yı tahtını terketmeye mecbur bıraktılar."*
> `eflak` [45] *"…Haçlı kuvvetlerinin **1396**'da Niğbolu'da yenilmesi üzerine
> **I. Bayezid'in hükümranlığını kabul etti** ve onun yanında Ankara Savaşı'na
> katıldı (1402)."*
> `eflak` [45] *"Nihayet **1417**'de Osmanlılar'ın üstün kuvveti karşısında daha
> fazla dayanamayacağını anlayıp **Osmanlı hükümranlığını kabul etti.**"*
> `eflak` [46] *"…**Segedin Antlaşması** ile Eflak'ın İstanbul'a haraç vermesi ve
> voyvodaların Macar kralına tâbi olması gibi **ikili bir hükümranlık** kabul
> edildi."*
> `eflak` [46] *"**1462**'de Fâtih Sultan Mehmed'in giriştiği harekât üzerine
> [Vlad] Transilvanya'ya çekildi… Vlad'dan sonra… kardeşi **Radu (1462-1474)**
> Eflak voyvodalığına getirildi. **Radu tam anlamıyla İstanbul'a tâbi oldu ve
> vergisini ödedi.**"*

**② SLUG.** `eflak` 200 · 23.224 b okundu. `vlad` · `kaziklivoyvoda` **302 ölü**
(müstakil madde yok — `eflak` maddesi konuyu kapsıyor).

**③ GÜVEN: NET.**

**④ TESLİM.** 🔴 **Asıl kusur "12 kayıt tek günde tâbi oluyor" değil — TÂBİİYETİN
45 YIL GEÇ BAŞLAMASI.**
```
veri     s: eflak 1281-01-01 → 1462-06-01   ·   v: 1462-06-01 → …
TDV      tâbiiyet 1396'da başlıyor, 1417'de KESİNLEŞİYOR
         1462 bir tâbiiyet başlangıcı DEĞİL — VOYVODA DEĞİŞİMİ (Vlad → Radu)
öneri    v: f:"1417-01-01"   (12 kaydın hepsi)
```
⇒ Böylece **1462-06-01'deki 24 uç tamamen kalkar**; Eflak seferi maddesi bir
*"çat diye ilhak"* değil, **zaten tâbi olan bir voyvodalıkta rejim değişikliği**
olarak anlatılır — ki tarihen doğrusu budur.

#### 🔴 YAN BULGU — Eflak'ın BAŞ tarafında 49 yıllık bir hayalet

```
künye  eflak  f:1330-01-01
veri   12 kaydın 12'si  s: 1281-01-01'den itibaren "eflak"
⇒ künye DOĞMADAN 49 yıl önce boyanıyor.
```
📌 `CLAUDE.md §3.5` hayalet devletleri **ölümden sonra** boyanmakla tarif ediyor;
bu **doğumdan önce** — aynı sınıfın ters yüzü, ve `§3.5`in denetimi bunu da
görmüyor. TDV Eflak'ın kuruluşunu Basarab'a bağlıyor; 1281-1330 arası bölge
Macar nüfuz alanıdır. **Kimin yazılacağını ÖLÇMEDİM** — `§3.5.1` gereği iki uç
ölçülmeden öneri vermiyorum.

---

### KALEM 11 · DİVRİĞİ · MALATYA · ARAPKİR — `e08/H-0002` + `e08/H-0003` · 🟢 **NET** · **110 yıl**

KUTU *"Memlük'ün kuzey ucu 1300'de Divriği'ye dayanıyor ve hiç değişmiyor…
bir sınır 50 yıl kılını kıpırdatmıyorsa **ölçülmüş değil VARSAYILMIŞ** demektir"*
diye yazmış ve *"TDV'ye bakmadım"* demişti. **Şüphe haklı çıktı ve büyüklüğü
tahminden fazla.**

#### 11a · DİVRİĞİ — 🟢 **NET**

> `divrigi` [48] *"Şehir daha sonra Kayseri ve Sivas yöresinde hüküm süren
> **Eretnaoğulları'nın hâkimiyetine girdi**. Kadı Burhâneddin ile Amasya Emîri
> Hacı Şadgeldi Paşa arasındaki mücadelelerden faydalanan **Memlükler tarafından
> zaptedildi (1391)**. …Yıldırım Bayezid **1398**'de Sivas, Malatya, Besni,
> Darende ve Divriği'yi iki ay muhasaradan sonra Osmanlı topraklarına kattı.
> Ancak Divriği yaklaşan Timur tehlikesinden dolayı **1401**'de tekrar
> Memlükler'e verildi."*
> `divrigi` [49] *"Divriği'nin **kesin olarak** Osmanlı idaresine girişi, Yavuz
> Sultan Selim'in **24 Ağustos 1516 Mercidâbık** Zaferi'nden sonradır."*

```
veri  s:memluk 1281-01-01 → 1399-09-01        TDV  Memlük ANCAK 1391'den
⇒ 110 YIL ERKEN MEMLÜK.  Öncesi: Mengücüklü → İlhanlı → Selçuklu → ERETNA
```
🟢 **Ve bitiş TDV ile BİREBİR:** veri `d:1516-08-24` = *"24 Ağustos 1516
Mercidâbık"* ✓✓. **Sonu doğru yazılmış, başı 110 yıl yanlış.**

🔴 **VE BU, EMRE'NİN GÖRDÜĞÜ "MEMLÜK KAMASI"NIN TA KENDİSİ.** `e08/H-0002`de
İlhanlı 1300'de 15 ayrık parçaya bölünüyordu ve Anadolu lobunu (97.871 km²)
ayıran şerit **Divriği-Arapkir-Malatya**'ydı. TDV'ye göre **o üçü 1300'de Memlük
DEĞİL.** ⇒ *"Tek düzeltme iki maddeyi birden çözüyor"* hükmü **doğrulandı**, ve
düzeltmenin içeriği artık kaynaklı.

#### 11b · MALATYA — 🟢 **NET, ve TDV TAM GÜN VERİYOR**

> `malatya` [63] *"Memlük Sultanı el-Melikü'n-Nâsır Muhammed b. Kalavun, **715'te
> (1315)** Dımaşk nâibi Seyfeddin Tengiz kumandasındaki bir orduyu Malatya'ya
> sevketti. **Memlük ordusu 22 Muharrem 715'te (28 Nisan 1315) şehre girdi.**"*
> `malatya` [65] *"Emîr Çoban şehirde tekrar hâkimiyet kurdu. Ardından bir ara
> **Eretnalılar'ın** idaresine giren Malatya'ya **1338**'den itibaren Memlükler
> hâkim oldu. XIV. yüzyılın ilk yarısından itibaren Malatya ve civarı
> **Dulkadıroğulları ile Memlükler** arasında mücadele alanı haline geldi."*
> `malatya` [66] *"Malatya ilk olarak **1399**'da Yıldırım Bayezid tarafından
> Osmanlı hâkimiyeti altına alındıysa da bu uzun süreli olmadı… **Timur'un
> Malatya'dan ayrılmasının ardından Dulkadıroğulları buraya tekrar hâkim oldu.**"*
> `malatya` [67] *"Mısır seferi sırasında Hadım Sinan Paşa kumandasındaki ordu
> **28 Temmuz 1516**'da… Malatya'yı ele geçirdi."*

```
veri   s:memluk 1281-01-01 → 1399-09-01      TDV  MEMLÜK 1315-04-28'DEN  (34 yıl erken)
veri   s:memluk 1402-07-28 → 1516-08-24      TDV  DULKADİR (114 yıl yanlış sahip)
veri   d:1516-08-24                          TDV  28 TEMMUZ 1516        (27 gün geç)
```
🟢 `dulkadir` künyesi `f:1337-01-01 t:1522-01-01` — pencere uygun.

#### 11c · ARAPKİR — 🟡 **TARTIŞMALI** (TDV kısa konuşuyor)

> `arapkir` [41] *"Bölge İran ve Bizanslılar'dan sonra XI. yüzyıl sonlarında
> **Selçuklu** Türkleri'nin eline geçti. **XV. yüzyıl başında Timûrîler
> tarafından zaptedilen** Arapkir, Yavuz Sultan Selim zamanında Osmanlı idaresine
> alındı (**1515**)."*

⇒ Madde **Memlük'ten hiç söz etmiyor** ve Osmanlı fethine **1515** diyor
(veri: `1516-08-24`). Ama madde çok kısa (10.724 b) ve ara dönemleri atlıyor.
⚠️ **`§4` TANECİKLİK boşluğu:** TDV bölgeyi görüyor ama **bu incelikte
konuşmuyor.** Arapkir'i Divriği-Malatya ile aynı pakette düzeltmek
savunulabilir (üçü 40 km yarıçapta, TDV üçünü aynı Yıldırım seferinde sayıyor),
ama **Arapkir için müstakil kaynak YOK.** Kararı koordinatöre bırakıyorum.

**② SLUG.** `divrigi` 200 · 17.246 b · `malatya` 200 · **58.738 b** · `arapkir`
200 · 10.724 b — üçünün de gövdesi okundu.

---

### KALEM 12 · SÂHİB ATAOĞULLARI (Afyon) — `e08/H-0001` · 🟡 **AÇIK**

Veri: Karahisâr-ı Sâhib (Afyon) `s:sahibata 1281-01-01 → 1341-01-01`, sonra
`germiyan`. Künye `sahibata f:1275-01-01 t:1341-01-01` — **veri ile künye uyumlu.**
KUTU *"Germiyan'ın onu kademeli yutması modellenmemiş"* demişti.

⚠️ **`sahibataogullari` 302 ÖLÜ; doğrusu `sahib-ataogullari` (200) BULUNDU ama
GÖVDESİNİ OKUMADIM** — sıra ona gelmeden kapsam doldu. **`ölçmedim` diye
yazıyorum**, `bulunamadı` değil.
🟢 Şu kadarı ölçüldü: Afyon'un `germiyan`a geçişi `1390-01-01`de değil
`1341-01-01`de başlıyor ve TDV `germiyanogullari` [45] Karahisar'ın Germiyan
nüfuzunda olduğunu **1327 civarında** zaten söylüyor
(*"Yâkub Bey'in damadı olan ve himayesinde bulunan Karahisar beyi"*).

---

## ③ TESLİM TABLOSU

| # | kalem | büyüklük | güven | fatura |
|---|---|---|---|---|
| 1 | Erzincan `d:` 1473→**1514-10-23** | 41 yıl | 🟢 NET | 1 yeni madde |
| 1b | Erzincan 1410-1422 → `karakoyunlu` | 12 yıl | 🟢 NET | bedava |
| 2 | Konya·Aksaray·Niğde `ilhanli`→`eretna` @1335 | 13 yıl ×3 | 🟢 NET | **bedava** |
| 2b | Niğde'ye 1397-1402 Osmanlı dönemi | 5 yıl | 🟢 NET | **bedava** |
| 3 | Sivrihisar `germiyan`→`karaman` (+1402-15) | 27 yıl | 🟢 NET | bedava (B sürümü) |
| 4 | Çankırı 1354-08-01 → **1392-11-01** | 38 yıl | 🟢 NET | **bedava** |
| 5 | Ankara `d:1354` DOĞRU · `ahiler` uçları | 9,6 yıl | 🟡 | künye işi |
| 6 | Bağdat `celayirli` 1335-12→**1340** + 4 bölme | 18 yıl | 🟡 | 1 soru açık |
| 7 | Anadolu Selçuklu 1308 | — | 🟢 **KAPANMIŞ** | iş YOK |
| 8 | Aydın 8 kayıt 1421-08-15 → **1422-01-01** | 139 gün | 🟢 NET | **bedava** |
| 9a | İzvornik 1460 **DOĞRUYMUŞ** | — | 🟢 NET | madde gerek |
| 9b | Tuzla 1460 → **~1468** | 8 yıl | 🟡 yıl beyanı | 1 madde |
| 10 | Eflak `v:` 1462 → **1417** | 45 yıl ×12 | 🟢 NET | 1 madde |
| 10b | Eflak 1281-1330 hayalet | 49 yıl ×12 | 🔴 ölçülmedi | — |
| 11a | Divriği `memluk` 1281 → **1391** | 110 yıl | 🟢 NET | bedava |
| 11b | Malatya `memluk` 1281 → **1315-04-28** · 1402-1516 → `dulkadir` · `d:` **1516-07-28** | 148 yıl | 🟢 NET | bedava |
| 11c | Arapkir | ? | 🟡 tartışmalı | karar gerek |
| 12 | Sâhib Ataoğulları | ? | ⚪ **ölçmedim** | — |

```
12 soru  →  🟢 NET 9  ·  🟡 TARTIŞMALI 3  ·  ⚪ ÖLÇMEDİM 1  ·  🟢 zaten KAPANMIŞ 1
            (Erzincan · İlhanlı üçlüsü · Sivrihisar · Çankırı · Aydın ·
             İzvornik · Eflak · Divriği · Malatya = NET)
```

---

## ④ 🔴 ÖLÇMEDİKLERİM — açıkça

```
· `ahilik` · `ahi-evran` · `sahib-ataogullari` · `anadolu-selcuklulari` ·
  `mesud-ii` · `otlukbeli-savasi` — HTTP kodunu ölçtüm (hepsi 200),
  GÖVDELERİNİ OKUMADIM.
· Sivrihisar'ın 1356 / 1363 GÜNLERİ: TDV yalnız hicrî yıl veriyor (757 · 764).
· Çankırı'nın I. Murad devri aralığı: TDV tarih vermiyor → `bulunamadı`.
· Ahmed Celâyir'in 1393 sonrası Bağdat'a dönüş yılı: TDV "Timur Semerkant'a
  dönünce" diyor, tarih YOK → `bulunamadı`, koordinatöre soruldu.
· Eflak'ın 1281-1330 arası sahibi: `§3.5.1` gereği İKİ UÇ ölçülmeden öneri
  vermedim.
· Ankara'nın İlhanlı tâbiiyetinin (`v:`) veri modelinde karşılığı olup
  olmadığına BAKMADIM.
· Niğde'nin 1419-20 Memlük "himaye"sinin doğrudan tasarruf sayılıp
  sayılmayacağını AYIRT EDEMEDİM.
· Hiçbir öneriyi denetimden geçirmedim: `denetle.py` KOŞTURMADIM
  (üretim kilidi — `arac/*` bende değil).
· Konya `d:1468-01-01` ile TDV'nin darphane cümlesi (`875/1470`) arasındaki
  iki yıllık farka BAKMADIM — kapsam dışı.
```

---

## ⑤ BU TURUN YÖNTEM DERSLERİ

1. 🔴 **"Şüpheli tarihi doğrula" ile "maddeyi baştan sona oku" AYNI İŞ DEĞİL.**
   Sorulan 12 sorunun cevabı yanında **kimsenin aramadığı beş hata** çıktı:
   Erzincan'ın Karakoyunlu'su (12 yıl) · Niğde'nin eksik Osmanlı dönemi (5 yıl) ·
   Sivrihisar'ın sahte `timurlu`su · Malatya'nın `dulkadir`i (114 yıl) ·
   Eflak'ın doğum öncesi hayaleti (49 yıl). **Hiçbiri şartnamede yoktu.**

2. 🔴 **"Bulunamadı" bir sonuçtur — ama yalnız ARAMA TÜKETİLDİYSE.**
   `ahiler` KUTU raporunda *"kalıcı bulunamadı"* diye kayıtlıydı; **çürüdü.**
   Beş slug yalnız **adı değişerek** canlandı.
   ⇒ ***"bulunamadı" demeden önce ad varyantları denenir.***

3. 🔴 **Aynı gündeki iki kayıt aynı hatayı paylaşmak zorunda değil.**
   İzvornik ve Tuzla `1460-01-01`de yan yanaydı, tek kalem sanıldı: **biri doğru
   çıktı, biri yanlış.**

4. 🟢 **Bazen düzeltme sezginin TERSİ yönde.** Aydın'da refleks *"maddeyi
   kırılmanın gününe taşı"*dır; ölçüm *"kırılmayı maddenin gününe taşı"* dedi —
   çünkü **madde zaten doğru yerde yazılmıştı.**

5. 🟢 **Bir öneri, kendi maddesini de sınamalı.** Çankırı için önce
   `1392-01-01` önerdim; kronolojiyi ölçünce o günün maddesinin **Antalya**
   olduğunu gördüm ve **kendi önerimi çürüttüm.** Doğrusu `1392-11-01`
   (*"Kastamonu'nun ilhakı"* + 14 uçlu kardeş kohortu).
   ⇒ *Değişmez 2'yi teknik olarak geçen bir gün, semantik olarak yanlış maddeye
   yapışabilir — ve bu tam olarak düzeltmeye çalıştığımız hatadır.*

6. 🔴 **`§4`'e beşinci tuzak alt-sınıfı:** canlı slug + doğru başlık + dolu gövde
   + **sıfır bilgi** (atıf maddesi). `zvornik` → `bk. İZVORNİK`.

7. 🟢 **Kapanmış bir borcu bildirmek, açık bir borcu bildirmek kadar değerli.**
   Kalem 7 (Selçuklu 1308) **kapanmıştı** ve kimse yazmamıştı. Bildirilmeseydi
   bir sonraki oturum **mükerrer madde** yazacaktı.

# SINAV TAKIMI — KOŞU 8

> Oturum **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> Koşu 8 CANLI (PID 10780, 11:17:46) · `data/*` ve `arac/*` **DONUK**
> Yazılan tek yer: `denetim/SINAV-KOSU8-*-0907.*` ve bu dosya.

---

## ⇒ TESLİM — üç sayı

```
SINAV YAZILDI                 3   (+1 fikstür +1 koşturucu)
DÖRT AYAĞI DA KOŞULAN         3   ·  zorlanan dal toplamı 32
BAYAT SINAV/ÖLÇÜT BULUNDU     5   ·  bayat SANILIP ölçümle ÇÜRÜYEN 3
```

🔴 **Ve şu ayrım en baştan yazılıyor:** bu takım `denetle.py` ·
`denetle_yayin.py` · `renk_olc.py`nin **yerini tutmaz.** Onlar yetkili
aletlerdir ve `oturumlar/KOSU-BITINCE-SIRA.md` sırasında koşarlar. Buraya
hiçbiri kopyalanmadı — kopyalansaydı iki otorite doğar ve bir gün
ayrışırlardı (`§11`, bu projede dört vaka; ve bir oturum `denetle.py`yi
taklit edip `4s` kovasını taşımadığı için **bütün gece iç tutarlı ama
yanlış** bir tabanla çalıştı).

---

## ⓪ KOŞU 8 NE DEĞİŞTİRİYOR — ÖLÇÜLDÜ, DEVRALINMADI

```
git log --since '7B başlangıcı' --until '8 başlangıcı'
        -- arac/uret_petek.py arac/renkler.py arac/girdi.py
⇒ TEK COMMIT:  2127303  "VASSAL ETIKET: MOTOR YAZILDI"
```

🟢 **Motor tarafında koşu 8'in YEGÂNE yeniliği `kayit["vl"]` çapa
listesidir.** (`uret_petek.py:4803-4847`, `kayit["v"]`in içinde.)
Çıktı farkının ikinci ve tek diğer kaynağı `data/` yamalarıdır.
⇒ Kıyas sınavının gücü buradan gelir: **iki bilinen değişken, üçüncüsü
yok.** Üçüncü bir fark çıkarsa açıklanamayan bir kaymadır.

**Ve `renkler.py` DEĞİŞMEDİ** — `ast` ile ölçüldü (regex ile değil):
`BOYALAR` 579 anahtar, 7B'ye göre **değişen 0 · eklenen 0**.

---

## ① KONTROL GRUBU — var, bedava, ve kimse yazmamıştı

```
data/donemler.js · devletler_harita.js · petek_govde.js
    son yazan commit  567895f  (7 Eyl 07:17)  =  KOŞU 7B'NİN ÇIKTISI
    git status        TEMİZ
⇒ `git show 567895f:data/donemler.js` — koşu 8 üstüne yazsa bile KAYBOLMAZ
```

Ölçüldü (7B çıktısı): `DONEMLER 524` · `v` taşıyan **468** ·
`vl` taşıyan **0** · `PETEKLER 3805` · alan kümesi
`{ad ao av b c e f o sb t v}` (11 alan).

📌 `CLAUDE.md §11`: *"bir ölçümü doğrulayan şey ikinci bir ölçüm değil,
ölçümün YOKLUĞUNDA ne olduğunu gösteren bir KONTROL'dür."* Bu projede
kontrol grubu genellikle **yoktu** — puanlama kapısı öngörüsünün dört
kalemi tam bu yüzden `ölçülemedi` damgasıyla kapanmıştı. Burada var.

---

## ② SINAVLAR — her biri dört alanla

### S1 · Ö9 GERİLEME — `denetim/SINAV-KOSU8-PETEKSIZ-0907.py`

```
① NE          girdide olup haritada çizilmeyen nokta
② MAZERET     YOK. `vl` çapası donemler.js'e alan EKLER, petek SİLMEZ.
③ NEREDEN     yetkili alet `denetim/ARAC-PETEKSIZ-0905.js`in çıktısı
              birim: NOKTA (adet) · PETEK (adet)
④ NEYE KARŞI  koşu 8 · kontrol 7B (`567895f`): 3805 petek, peteksiz 0
```
**EŞİK — ve tabanı:**
```
E1  peteksiz == 0                        taban: 7B ölçümü (0)
E2  PETEKLER == girdideki nokta sayısı   taban YOK — İLİŞKİ
```
🔴 **Sarılan aletin kendi eşiği (`oran > %5`) BU SORUYA GEVŞEK:** o eşik
%28,2'den %0'a inişi ölçmek için konmuştu; peteksiz 100 noktaya çıksa
(%2,6) hâlâ "GEÇTİ" derdi. Buradaki eşik **sıfır tolerans**.

### S2 · `vl` ÇIKTISI — `denetim/SINAV-KOSU8-VL-0907.js`

```
① NE          koşunun GERÇEKTEN yazdığı `vl` verisi:
              varlık · şema · adların veriye dayanması · çapanın KONUMU
② MAZERET     K1 için YOK (motor commit'i indi, koşu ondan sonra başladı).
              K6 için pay VAR ve ölçülü: `mp_koord` halka köşelerini 3
              ondalığa (~111 m) yuvarlar, çapa 4 ondalığa (~11 m) —
              sınırın üstündeki bir çapa yuvarlamayla dışarı düşebilir.
              ⇒ pay 0,002° (ızgaranın iki katı), ve pay AYRI SAYILIR.
③ NEREDEN     data/donemler.js → `DONEMLER[i].vl` ve `.v`
              beklenen ad kümesi → `arac/girdi.py` (elle liste YOK)
              birim: DÖNEM (adet) · ÇAPA (adet) · DERECE (konum)
④ NEYE KARŞI  koşu 8. Kontrol: 7B'de `vl` = 0 (ölçüldü).
```
**EŞİK — hepsi İLİŞKİ, hiçbiri sabit sayı:**
```
K1  `vl` taşıyan dönem > 0                       ← SESSİZ SIFIR KAPANI
K2  şema kusuru == 0  (k · s · p · mükerrer · boş dizi · `v` eşliği)
K5  her (k,s) çifti `girdi.py`nin kümesinde VAR
K6  gövde DIŞINDA kalan çapa == 0  (pay ≤0,002° AYRI kovada)
```
🟡 **İHLAL DEĞİL, GÖZLEM olarak basılanlar** — ve niçin:
`veride VAR ama hiç çapa üretmeyen (k,s) çifti` · `\`v\` taşıyıp \`vl\`
taşımayan dönem`. İkisi de **meşru olabilir**: `mp_koord` ~2 km²
altındaki poligonları düşürür, ve 56 `v:` dönemi **adsızdır** (kod onları
zaten eliyor). Sıfır olmaları BEKLENMİYOR; **sıçramaları** bir işarettir.

🔴 **NE ÖLÇMÜYOR — ve bu satır kasten uzun:**
```
· Etiketin EKRANDA görünüşü        → SINAV-VASSAL-GORUNUM-0907.js (başka oturum)
· Çapanın "iyi" yerde olup olmadığı → yalnız İÇERİDE Mİ diye soruyor
· Etiket METNİNİN iyi bir etiket olup olmadığı  → GÖZLEM, ihlal değil
· `k`/`statu` değerlerinin TARİHSEL doğruluğu   → `§4`ün işi
```

### S3 · KIYAS — `denetim/SINAV-KOSU8-KIYAS-0907.js`

```
① NE          koşu 8 ile 7B arasındaki fark İKİ BİLİNEN SEBEPLE
              açıklanabiliyor mu: (a) `vl` (b) `data/` yamaları
② MAZERET     DÖNEM sayısı ve alan farkı için VAR (veri yamaları kırılma
              günü ekler/çıkarır) ⇒ o kalemler GÖZLEM.
              E1/E2/E3/E4 için mazeret YOK.
③ NEREDEN     data/donemler.js  ↔  git show 567895f:data/donemler.js
              birim: ALAN ADI (küme) · DÖNEM · PETEK (adet) · km²
④ NEYE KARŞI  koşu 8 · kontrol 7B
```
```
E1  alan adı kümesi KOŞU8 ⊇ 7B          (alan KAYBOLMAZ)
E2  yeni alan kümesi tam olarak {vl}     (sürpriz alan yok)
E3  PETEKLER KOŞU8 ≥ 7B                  (petek KAYBOLMAZ)
E4  7B'de `vl`==0  ve  KOŞU8'de `vl`>0
E5  DÖNEM/alan farkı → 🟡 GÖZLEM
```
🔴 **E4'ün taban kontrolü ayrı bir dal:** taban `vl`≠0 çıkarsa sonuç
**İHLAL değil ÖLÇÜLEMEDİ** — yanlış commit kıyaslanıyor demektir.

### KOŞTURUCU · `denetim/SINAV-KOSU8-KOS-0907.py`

Üçünü sırayla koşturur ve **ön koşul kapısı** taşır:
```
① SÜREÇ  `uret_petek` canlı mı   (Win32_Process CommandLine ile — beyanla değil)
② ÇIKTI  donemler.js mtime
③ İZ     donemler.js `vl` TAŞIYOR mu   ← asıl ölçüt
```
🔴 **② tek başına yeterli sayılmıyor:** `§11` *"`mtime` bir ÖLÇÜM değil bir
DAMGADIR — içerik değişmeden de değişir"* (5 Eylül, `motor_kara.geojson`).
Hüküm ① ve ③'ten veriliyor.
🔴 **Ve koşu bitmeden koşarsa DURUYOR** (çıkış 2), çünkü o an verilen cevap
bir sonraki oturuma *"ölçüldü"* diye görünür.
🔴 **GLOB YOK, liste açık:** `SINAV-KOSU8-FIKSTUR-VL-0907.js` sözleşmenin
desenini tutturuyor ama bir sınav DEĞİL — bir glob onu sahiplenir ve
*"0 kayıt"* diye sessiz bir sıfır basardı (`§11`, iki vaka).

---

## ③ C13 DÖRT AYAK — hepsi ZORLANDI, bugün

| | S1 peteksiz | S2 `vl` | S3 kıyas |
|---|---|---|---|
| ① GEÇME | 🟢 gerçek veri (7B'de peteksiz zaten 0) | 🟢 **fikstürle** — sağlam `vl`ye SESSİZ, 4/4 | 🟢 ateşlemede sahte özetle |
| ② ATEŞLEME | 🟢 **9/9** dal | 🟢 **16/16** dal | 🟢 **7/7** dal |
| ③ GİRDİ | 🟢 yetkili alet gerçek dosyadan | 🟢 gerçek `data/donemler.js` | 🟢 gerçek git nesnesi (`567895f`) |
| ④ ÇIKTI | 🟢 ayrıştırdığım sayı = aletin BASTIĞI satır | 🟢 bilerek yanlış girdi (7B, `vl` yok) → **İHLAL bildirdi** | 🟢 aynı → **İHLAL bildirdi** |

**Zorlanan dal toplamı: 32.**

🔴 **S2'nin ① ayağı gerçek veriyle BUGÜN KOŞULAMAZDI** — koşu bitmeden
`vl` yok. Fikstürle zorlandı (`SINAV-KOSU8-FIKSTUR-VL-0907.js`), ve
fikstürün adları **uydurma değil**: `girdi.py`de gerçekten bulunan
(k,statu) çiftlerinden seçildi — uydurma bir ad K5'i **kendi kusuru
olmayan bir yerden** ötürtürdü.

### 🔴 VE ATEŞLEME İKİ KEZ SINAVIN KENDİSİNİ YAKALADI — ikisi de FİKSTÜR/BEKLENTİ

```
① PIP fikstürü YANLIŞ SEVİYEDE yazılmıştı (PARÇALAR ↔ PARÇA)
   dört PIP dalının İKİSİ yine de GEÇTİ — `false` beklenen dallar,
   yanlış seviyede de `false` döndüğü için
② peteksiz hükmünde tuple'ın TAMAMI beklenmişti; `hukum` hüküm
   satırlarını da döndürüyor
```
📌 İkisinde de **fonksiyon doğruydu, sınav yanlıştı** — ve ikisinde de
düzeltmeden önce teşhis ÖLÇÜLDÜ (`halkadaMi` ayrı koşturuldu ve doğru
çıktı). `§11`: *doğru hüküm, yanlış teşhisle gelebilir.*
📌 Ve ①'in asıl dersi: ***iki dal TESADÜFEN geçti.*** `§11`in *"doğru
sonucu güvenilmez yoldan veren alet kendini ele vermez"* dersinin canlı
hâli — ele veren şey ateşleme dalının kendisi oldu.

---

## ④ BAYAT SINAV AVI

**Evren (daraltıldı ve BEYAN EDİLDİ):** koşu 8'den sonra koşulacağı
yazılı olan ölçütler — `oturumlar/KOSU-BITINCE-SIRA.md` ve
`KOSU-SONRASI-KUYRUK.md`. ⚠️ Bu evrenin DIŞINDA en az **12 belge daha**
post-koşu kalem taşıyor (`denetim/BULGU-*.md` · `HUKUM-*.md`);
**taranmadı**, ve bu bir `ölçülemedi` değil **`okumadım`**.

### 🔴 BAYAT ÇIKANLAR — 5

```
B1  Ö9 "peteksiz %28,2 → ~%0"        borç 4 Eyl 17:15 `0e7cb11` ÖDENDİ
    ⇒ bayat çıktıya karşı bile GEÇİYOR; geçmesi HİÇBİR ŞEY kanıtlamıyor
    🟢 ÇARE: silinmedi, ANLAMI ters çevrildi (iyileşme → GERİLEME) · S1
    📌 Ve senin düzeltmen KISMEN İNMİŞ: `KOSU-BITINCE-SIRA.md:52` zaten
       "artık bir GERİLEME testidir" diyor. `CLAUDE.md:6472` ve
       `KOSU-SONRASI-KUYRUK.md:2431` da kaydı taşıyor. Eksik olan şey
       kayıt değil KOŞULABİLİR HÂL'di.

B2  `KOSU-BITINCE-SIRA.md` başlığı   "KOŞU 7b BİTİNCE" · PID **3880**
    gerçek: koşu 8 · PID **10780**
    ⇒ Belgenin tamamı bir önceki koşuya adreslenmiş.

B3  aynı belge §⑧ BLOKE:
    "VASSAL ETİKET ⇒ uret_petek DEĞİŞİKLİĞİ şart, yani YENİ BİR KOŞU"
    ⇒ O değişiklik `2127303` ile İNDİ ve **koşu 8 tam o yeni koşudur.**
       Kalem BLOKE DEĞİL — açık, ve bu takımın ana konusu.

B4  aynı belge §⑥ ①: "18 çakışma → hedef 18 → 0"
    ÖLÇÜLDÜ (kuru koşu, bugün):  **çakışma 23**
    (arada `59fd8d6` 91→26 ve `2127303` 26→23 indi; ayrıca 222 ad artık
     "ayrık alanlara dokunuyor, çakışma DEĞİL" diye doğru sınıflanıyor)

B5  aynı belge §⑦ araç borcu 1:
    "uret_petek.py: 'kesilen … km²' → 'km²·DÖNEM' (birim etiketi YANLIŞ)"
    ÖLÇÜLDÜ: `uret_petek.py:4606` **zaten** `km²·dönem` yazıyor.
    Düzelten commit `2192eab`, **3 Eylül 09:40** — borcu yazan belgeden
    ÜÇ GÜN ÖNCE.
    📌 `§11`in *"kendi ödediğin borcu, kaydını okumadan yeniden iş
       sanabilirsin"* dersinin BEŞİNCİ vakası.

B+  `kosu8.log` taban süresi: "ölçülen en uzun koşu **16s09dk**"
    gerçek: koşu 7B = **16s49dk** (`9de4c32`, bugün 07:15) ve 7B
    BUGÜNKÜ girdi büyüklüğüyle koştu.
    🔴 VE İLK DÜZELTMEM DE YETERSİZDİ — aşağıya bak.
```

### 🔴 B+ GENİŞLETİLDİ: BASİT TOPLAMA DA YANLIŞTI — `SINAV-KOSU8-BITIS-0907.py`

İlk düzeltmem *"11:17:46 + 16s49dk ≈ 04:05"* idi. **Kendi tahminimi
çürüttüm**: koşu 8 ölçülebilir biçimde daha yavaş ilerliyor.

7B'nin **kendi 16 aşamalık süre tablosu** (`kosu7-20260906-142320.log`)
ile koşu 8'in **iki gerçekleşmiş kilometre taşı** eşlendi:
```
motor_kara.geojson  12:27:30 → koşu 8'de  69,7 dk   (7B'de 36,0 dk)
data/bolgeler.js    13:06:50 → koşu 8'de 109,1 dk   (7B'de 65,8 dk)
⇒ iki nokta, iki bilinmeyen:  hız oranı r = 1,32 · ön süre P = 22,2 dk
```
```
BİTİŞ TAHMİNİ — ARALIK, tek sayı DEĞİL
   7B hızıyla (r=1,00)     → 8 Eylül 04:18   (17s 00dk)
   ölçülen hızla (r=1,32)  → 8 Eylül 09:38   (22s 21dk)
```
⚠️ **DAMGA: PROJEKSİYON, ölçüm değil.** r iki noktadan çözüldü (hata payı
yok) · makinede çok oturum var, CPU paylaşımı r'yi değiştirir · `vl`
çapası 7B tablosunda karşılığı olmayan yeni iş ekliyor.

🟢 **Kırılgan OLMAYAN sayı, ve karar bunun üzerine kurulmalı:**
```
7B'nin tablosuna göre `bolgeler.js`ten SONRAKİ iş = aşama süresinin %93,4'ü
   Yabancı devlet gövdeleri  13s 40dk  %82,2   ← koşu 8 ŞU AN burada
   Dönemler kuruluyor         1s 48dk  %10,9
Koşu 8 o noktaya 109 dakikada vardı.
```
⇒ **Koşu 8'in önünde işin %93'ü duruyor** — r'den bağımsız.
📌 Ve `§10`: bekçi süreye değil **gerçekleşmiş olaya** bağlanır; tetik
`data/donemler.js` olmaya devam etmeli. Bu sayı bir **planlama** girdisi.

### 🟢 BAYAT SANDIM, ÖLÇTÜM, ÇÜRÜDÜ — 3

```
Ç1  §⑤ renk çakışmaları (irak-kralligi ↔ misir-kralligi ΔE 1,09 vb.)
    `renkler.py` 6 Eylül'den sonra bir commit aldı ⇒ "hexler değişmiştir"
    diye şüphelendim. `ast` ile ölçüldü: BOYALAR 579 anahtar,
    7B'ye göre DEĞİŞEN 0 · EKLENEN 0. Dört çift de HÂLÂ CANLI.
    ⇒ Kalem AYAKTA, kayıt DOĞRU.

Ç2  §⑥ yama dosyaları (manda · silistre · KRONOLOJI-MANDA · mükerrer ·
    VAN-1548) — beşi de yerinde duruyor, uygulanmamış. AYAKTA.

Ç3  §⑧ "GEOMETRİ FETCH: <script> → fetch()+JSON"
    `index.html:1080` HÂLÂ `<script src="data/donemler.js?v=r6711">` ve
    `data/*.json` YOK. AYAKTA.
```
📌 Üç şüphenin üçü de çürüdü. ***Bir belgenin başlığının bayat olması,
maddelerinin de bayat olduğunu göstermez*** — `§11`in *"ölçek/görünürlük
sınıfı belirlemez, yalnız ÖLÇÜM belirler"* dersinin belge tarafı.

### ⚫ ÖLÇÜLEMEYEN / OKUNMAYAN — açıkça

```
⚫ §⑦ borç 2 `denetle.py`ye `harita:` çözümü  → İNMEMİŞ (son "harita"
   değişikliği 30 Ağustos `e1c16d2`). AYAKTA, ama "898 dönem denetime
   girer / yeni tavan ÖLÇÜLECEK" sayısını ben ÖLÇMEDİM.
⚫ §⑦ borç 3 `motor_kara.geojson` yeniden adlandırma → yapılmamış.
⚫ §⑦ borç 4 tamponsuz aşama dosyası → yazılmamış (`uret_petek.py`de iz yok).
   📌 Ve bu borç ŞU AN acıtıyor: koşu 8'in aşama tablosu `TextIOWrapper`
      tamponunda kilitli, `kosu_ayrik.log` 11:17'den beri 6 satır.
⚫ §⑧ TAVAN_KM → hâlâ `{1..4,0: 200}` = Ⓐ. Emre'nin kararı bekliyor.
```

### 🔴🔴 B6 · R1 KABUL TESTİ **HARCANMIŞ** — iki koşu önce, ve alet hâlâ soruyor

R1 tabanını 7B'ye göre yeniden ölçtüm (`ARAC-DIKIS-0904-*`, 1281-01-01).
Ölçerken taban değil **testin kendisi** çürüdü:

```
89cd681  R1 INDI  →  4 Eylül 17:32
koşu 5b  4 Eyl akşamı ·  koşu 7B  6 Eyl 14:23 → 7 Eyl 07:10
⇒ KOŞU 7B'NİN ÇIKTISI R1'İ ZATEN İÇERİYOR. R1 iki koşu eskidir.
```
Ama `ARAC-DIKIS-0904-olc.py` her koşuşta hâlâ şunu basıyor:
> `R1 KABUL TESTİ: DİKİŞ parçası 637  (reçete: R1'den sonra < 10)`

⇒ Koşu 8'den sonra bu aleti koşturan biri, **iki koşu önce inmiş bir
değişikliğin kabul testini** okuyacak ve *"R1 çalışmadı"* diye
yorumlayacak. Ö9'un birebir aynısı: **bayat bir ölçüt YANLIŞ SEBEPTEN
başarısız olur, ve başarısız olduğu için üstüne yanlış iş açılır.**
📌 Ö9 bayat bir ölçütün *"yanlış sebepten GEÇMESİ"*ydi; bu onun aynası —
*"yanlış sebepten KALMASI."* İkisi de aynı sınıf.

### 📏 R1 TABANI — 7B'ye göre ÖLÇÜLDÜ (1281-01-01, global)

```
                      5 Eylül (koşu 4b çıktısı)   BUGÜN (koşu 7B çıktısı)
yabancı gövde                    232                      232   ✓ BİREBİR
DİKİŞ                 640 parça / 34.318 km²     637 parça / 34.792 km²
KIYI KENARI        42.233 parça / 333.282 km²  42.233 parça / 333.919 km²
KAPSAMA                          357                      360
boşluk toplamı           53.783.178 km²            53.807.432 km²
```
🟢 **Taban KAYMAMIŞ** — ve bu, benim "5b→8 iki değişken taşır" endişemi
**çürütüyor.** `KIYI KENARI` parça sayısı **birebir 42.233**, gövde
birebir 232. Endişe ölçüldü ve yersizdi; ama artık taban **bugüne**
çapalı, yani koşu 8 kıyası tek değişkenli.
⚠️ `olc.py` gövdeyi **233** basıyor; fark Osmanlı gövdesini de sayması
(node aleti `yabancı gövde 232 · toplam öznitelik 233` diyor). İki sayaç,
tek gerçek — karıştırılmamalı.

### 🔴 VE R1'İN ETKİSİ ARTIK ÖLÇÜLEMEZ — bunu iddia DEĞİL, sınır olarak yazıyorum

```
640 (4b · R1 ÖNCESİ)  →  637 (7B · R1 SONRASI)
```
Bu **"R1 hiçbir şey yapmadı" DEMEK DEĞİLDİR:** iki ölçüm arasında
R1 **ve** `data/` (yeni noktalar, yamalar) birlikte değişti — **iki
değişken.** Tek değişkenli bir R1 kıyası hiç yapılmadı ve bugün
**yapılamaz** (kontrol grubu yok: R1'siz bir 7B çıktısı mevcut değil).
⇒ Damga: **ÖLÇÜLEMEDİ** — *"çürüdü"* değil.

### 🟢 Ö-F · YENİ ÖNGÖRÜ, ölçümden ÖNCE

```
Ö-F  koşu 8'in DİKİŞ ailesi 7B'ninkine ÇOK YAKIN çıkacak
     (≈637 parça / ≈34.792 km²)
② MAZERET  YOK — koşu 8'in tek motor değişikliği `vl` ve `vl` bir ETİKET
   ÇAPASI: `kayit["vl"]`e yazıyor, `PETEK_D`ye ya da gövde birleşimine
   DOKUNMUYOR (`uret_petek.py:4803-4847`, `kayit["v"]`in içinde).
   ⇒ Geometri değişmemeli. Sapma varsa sebebi `data/` yamalarıdır ve
     o sapma AÇIKLANABİLİR OLMALI.
③ NEREDEN  node ARAC-DIKIS-0904-govde.js 1281-01-01 <geojson>
           py   ARAC-DIKIS-0904-olc.py <geojson>
           birim: PARÇA (adet) ve km²  — 🔴 EŞİK km², parça DEĞİL
           (parça sayısı alan tabanına ve sadeleştirme gürültüsüne
            duyarlı, toplam alan değil — `SINAV-R1-TABAN-0905.md` EK)
④ NEYE KARŞI  koşu 8 · kontrol = BUGÜN ölçülen 7B tabanı (yukarıdaki tablo)
```
🔴 **Ve bir EŞİK SAYISI ÖNERMİYORUM** — aynı sebeple: R1'in dikiş alanını
ne kadar kapatacağı hâlâ bilinmiyor, ve bilmediğim bir şeye eşik koymak
onu ölçüm gibi gösterirdi. Bu bir **GERİLEME** testi: `vl` geometriye
dokunmadığına göre sayı **kaymamalı**; kayarsa sebebi aranır.

---

## ④b SEVKTEKİ "🟡 DEVRALDIM" ALETLERİ — doğrulandı

Sevk beş aleti *"hazır, ama DEVRALDIM — doğrula"* diye verdi. Doğrulandı:

```
🟢 arac/denetle.py · denetle_yayin.py · durum_tablosu.py
   YETKİLİ aletler. SARILMADI, KOPYALANMADI — koşturucunun
   HATIRLATMA bölümünde adlarıyla duruyorlar. İki otorite doğmasın.
🟢 denetim/ARAC-PETEKSIZ-0905.js
   KOŞU 8 ÇIKTISINI ölçen tek hazır alet. S1 onu SARIYOR.
   ⚠️ Kendi eşiği (%5) bu soruya gevşek — S1 sıfır tolerans koyuyor.
🔴 denetim/SINAV-JSON-ESDEGER-0907.py — **KAPSAM DIŞI, ve sebebi ölçüldü**
   O sınav koşu 8'in çıktısını DEĞİL, `.js`→`.json` DÖNÜŞÜMÜNÜ ölçüyor
   (YUK-FETCH-0907'nin işi). Ve o dönüşüm HENÜZ YAPILMADI:
       index.html:1080  hâlâ `<script src="data/donemler.js?v=r6711">`
       data/*.json      YOK
   ⇒ Takıma alınmadı. Bu bir atlama değil, ÖLÇÜLMÜŞ bir kapsam kararı.
⚪ denetim/ARAC-HAZIRLIK-0905.py — merge hazırlık panosu, SALT OKUR.
   Tamamlayıcı; bir çıktı sınavı değil.
```

## ④c GİRDİ PROVENANSI — R1 tabanı ölçülmeden ÖNCE

`SINAV-R1-TABAN-0905.md`in kendi yöntemi uygulandı (*"bir fark çıksaydı
iki açıklaması olurdu: girdi kayması ya da alet; ikincisini ölçebilmek
için önce birincisi elenmeli"*):

```
data/donemler.js          mtime 7 Eyl 07:10  = KOŞU 7B'nin çıktısı ✓
data/devletler_harita.js  mtime 7 Eyl 07:10  = aynı ✓
js/app.js                 mtime 7 Eyl 14:41  🔴 DEĞİŞMİŞ
   → ama alet ondan yalnız `parcaCoz`u çekiyor ve o fonksiyon son
     **29 Temmuz** (`e4c663e`) değişmiş ⇒ ELENDİ
veri-kaynak/motor_kara.geojson   mtime 7 Eyl **12:27** 🔴 KOŞU 8'İN İÇİNDE
```

🔴 **Ve dördüncüsü bir an "taban kirlendi" gibi göründü.** Ölçüldü:
```
git status --porcelain veri-kaynak/motor_kara.geojson   → BOŞ (commit'le AYNI)
boyut 8.016.830 — CLAUDE.md'nin 5 Eylül'de kaydettiği sayının AYNISI
```
⇒ Koşu 8 dosyayı 12:27'de **yeniden yazdı, aynı baytlarla.**
🟢 **Ve sebebi ölçülebilir, tesadüf değil:** dosya
`unary_union(PETEK_D)` — yani **bütün hücrelerin birleşimi.** Sahiplik
yamaları DÖNEM değiştirir, **hücre geometrisini değiştirmez**; nokta
sayısı (3805) ve `TAVAN_KM` (hepsi 200) de değişmedi ⇒ birleşim aynı.
📌 `§11`in *"`mtime` bir ÖLÇÜM değil bir DAMGADIR"* dersinin ikinci
vakası, **aynı dosyada** ve iki gün arayla.

⚠️ **Ve bir yan bulgu:** `CLAUDE.md` bu dosyayı *"`uret_petek.py:2776` onu
KOŞUNUN SONUNDA yazar"* diye kaydediyor. Bugün ölçüldü: satır **2811**
ve koşunun **70. dakikasında** yazılıyor. ⇒ *"Koşunun sonunda yazılır"*
cümlesi **bayat** (bekçi kurarken tetik olarak kullanılırsa erken öter).
Tetik `data/donemler.js` olmaya devam etmeli.

---

## ④d KAPSAM EKLEMESİ — 1.MURAT'ın iki sorusu, ölçüldü

### ① *"Koşu 8 sonrası ölçütlerden hangileri BAYAT BİR KOŞU BAŞLIĞININ ALTINDA?"*

Alet: `denetim/SINAV-KOSU8-BASLIK-0907.py` (C13② **10/10** dal).
```
evren      *.md, depo geneli · «koşu 7b» ya da «PID 3880» geçen
bulundu    51 DOSYA · 91 satır      (sevkteki liste 17'ydi — o yalnız
                                     `oturumlar/` + kök; `denetim/` +34)
🔴 BAŞLIK/KISIT  →  9 satır  →  ELLE OKUNDU  →  GERÇEKTEN BAYAT: 2 satır · 1 DOSYA
🟢 PROVENANS     → 46 satır  →  BAYAT DEĞİL
🟡 AYIRT EDİLEMEDİ → 36 satır → elle okunmadı, «temiz» DEĞİL
```
🔴 **Gerçekten bayat olan tek dosya: `oturumlar/KOSU-BITINCE-SIRA.md`**
(satır 1 başlık · satır 4 *"PID 3880 · koşu bittiği an yürütülecek"*) —
yani zaten B2 olarak bulduğum dosya. **Yeni bir bayat başlık ÇIKMADI.**

🟢 **VE BU NEGATİF SONUÇ, POZİTİFTEN DEĞERLİ:** *"koşu 7b geçen 51 dosya"*
listesini bayat saymak **50 dosyalık bir hayalet borç** üretirdi. Bir
belgenin *"koşu 7b sürüyor"* demesi çoğunlukla **PROVENANSTIR** — ölçümün
hangi koşullarda alındığını kaydeder ve o kayıt **zamanla yanlış olmaz.**
(Bu oturum da `R1TABAN`a *"koşu 8 CANLI"* yazdı; yarın o satır bayat
olmayacak.)

🔴 **VE SINIFLANDIRICI İLK KOŞUSUNDA 28 SAHTE 🔴 ÜRETTİ** — sebebi kural
sırasıydı: konum (*ilk 8 satır = başlık*) damgadan ÖNCE soruluyordu, oysa
bir belgenin künyesi **zaten ilk satırlardadır** ve provenansın doğal yeri
orasıdır. Sıra düzeltildi (damga her zaman önce), 30 satır → 8.
📌 Ve **bu dalı kendi ateşlemem KAÇIRMIŞTI**: damga↔KISIT önceliğini
sınamıştım, damga↔BAŞLIK önceliğini sınamamıştım. `§11`: *"C13 iki yönü
sına der ama HANGİ ÖZELLİĞİN sınanacağını söylemez."* Eksik dal eklendi.
⇒ Bugün **üçüncü kez** ateşleme/gerçek koşu sınavın kendisini yakaladı.

🟢 Ve elle okunan 8 satırın hükmü **betiğe yazıldı** (`ELLE_HUKUM`), yoksa
bir sonraki oturum aynı sekiz satırı yeniden okur ve **ödenmiş bir işi
yeni iş sanar.** Regex'i onları yutacak kadar gevşetmedim: gevşetmek
**gerçek** bir bayat başlığı da yutardı.

### ② *"Koşu 8 İÇİN yazılmış, henüz değerlendirilmemiş öngörü var mı?"*

```
tarandı    metninde «koşu 8» ya da «bir sonraki koşu» geçen *.md
🟢 TEK AÇIK KALEM  oturumlar/VASSAL-GORUNUM-0907.md:105
   "⚪ ÖLÇMEDİM  `vl` çapasının koşu 8 çıktısında GERÇEKTEN üretilip…"
   ⇒ Bu, S2'nin tam olarak doldurduğu boşluk. Mükerrer YOK, atlanan YOK.
⚪ ONERI-DEGISMEZ3-0907 · ONERI-BUDAMA-0907 — koşu 8'i UYGULAMA ZAMANI
   olarak anıyor, bir öngörü olarak DEĞİL. Kapsam dışı.
⚪ MOTOR-3-KALIBRASYON (4 Ağu) · MOTOR-TAVAN-YON (12 Ağu) — «bir sonraki
   koşu» ifadeleri o tarihlerin koşusuna ait, çoktan koşuldu.
```
⇒ **Koşu 8 için bekleyen, takımın dışında kalan bir öngörü YOK.**

### ③ M-3191 (çıpa günü `1923-10-29`) — sınavlarımı VURMUYOR, ölçüldü

```
girdi.UFUK = ('1281-01-01', '1923-10-29')
DONEMLER son dönem:  f=1923-07-24  t=1923-10-29
f == 1923-10-29 olan dönem: 0        t == 1923-10-29 olan dönem: 1
```
S2'nin K8b kalemi sorguyu **dönemin kendi `f`siyle** yapıyor (`f <= d.f < t`)
ve hiçbir dönemin `f`si ufuk gününe eşit değil ⇒ yarı açık aralık sorunu
**ateşlenmiyor.** S1/S3'te tarih sorgusu yok; R1 ölçümü sabit bir çapa
günü (`1281-01-01`) kullanıyor, ufku değil.
⇒ Damga: **ÖLÇÜLDÜ, etkilenmiyor** — *"bakmadım"* değil.

---

## ④e Ⓑ — BAYAT ÖLÇÜT AVI, GENİŞLETİLMİŞ EVREN

### 🔴 EVREN 12 DEĞİL **179** — `denetim/SINAV-KOSU8-EVREN-0907.py`

```
taranan                863 .md   (denetim/ + oturumlar/ + kök)
BİRLEŞİK EVREN         179 DOSYA        devralınan 12  ⇒ 15 KAT eksik
en geniş TEK desen      61 dosya        birleşik 179   ⇒  2,9 KAT
14 desenin 11'i «TEK KAYNAK» — başka hiçbir desenin getirmediği dosya
```
⇒ ***Bir evren sayısı asla tek desenden verilmez.*** Ve desen listesi elle
yazıldığı için **hâlâ eksik olabilir** — betikteki `YALNIZ` sütunu bunun
uyarısıdır.

🔴 **VE İLK ÖLÇÜM DENEMEM SESSİZCE ÇÖKTÜ:** kabuk döngüsünde `grep -F` ile
Türkçe desenler — **on üç desenin on üçü de «0 dosya»** dedi, aynı anda
birleşik `grep -E` **128** dedi. Hiçbir şey hata vermedi.
📌 Bugün üçüncü kez: `grep -P` → `ast` · `grep -F` döngüsü → Python `re` ·
sınıflandırıcı kural sırası. ⇒ *Dilin kendi yorumlayıcısına ver.*

### 🔴🔴 ÜÇÜNCÜ NORMALLEŞTİRME NEREDEYSE YAŞAYAN BİR KALEMİ KAPATTIRIYORDU

`HUKUM-CAKISMA-KORFEZ-0906`in hükmü üç adı düşürmeyi söylüyor. Düz
`grep` ile bakıldığında:
```
Doha    → iki dosyada da YOK      ⇒ "düşürülmüş" diye okunur
Manama  → iki dosyada da YOK      ⇒ "düşürülmüş"
Kuveyt  → 1923_duzeltme'de VAR
```
Normalleştirilerek ve dosyayı **kendi dilinde** okuyarak:
```
yer_yama_1923_duzeltme.js   Doha (Katar) ✓ · Kuveyt ✓ · Manama (Bahreyn) ✓
yer_yama_gece_v1.js         Manama (Bahreyn) ✓
```
⇒ **Hüküm HİÇ UYGULANMAMIŞ.** Düz aramaya güvenseydim *"kısmen
uygulanmış"* diye rapor edecek ve **yaşayan bir kalemi kapatacaktım.**
📌 Bugünün üçüncü ad vakası (`Cânet (Djanet)` · `grep -P` · bu) ve
**bedeli en yükseği**: ötekiler yanlış bir *çürüme* üretecekti, bu yanlış
bir *tamamlanma*.

### 🆕 YENİ SINIF: **ÖKSÜZLEŞMİŞ ÖNGÖRÜ**

`BULGU-GEOMETRI-0904.md` dokuz öngörü taşıyor, başlığı *"koşu bitince
sınanacak"*. Ölçüldü — **dördünün hiçbir yerde hükmü YOK:**
```
🟢 Ö5 · Ö6 · Ö11   belgede değerlendirilmiş (TUTTU / KISMEN / ÇÜRÜDÜ)
🟢 Ö1 · Ö7 · Ö9    bu oturum çözdü (Cânet PETEKLER'de · peteksiz 0 · Ö9→S1)
🔴 Ö3 · Ö4 · Ö10 · Ö12   HİÇBİR YERDE HÜKÜM YOK
   ve Ö4 açıkça "mazeret YOK" diyor — sert bir öngörü, hiç sınanmamış
```
4 Eylül'de *"bir sonraki koşu"* için yazıldılar; o günden beri **koşu 5b,
6, 7, 7b koştu ve hiçbiri değerlendirilmedi.**
⇒ ***Bir öngörü, yazıldığı koşu geçtiği hâlde değerlendirilmezse
ÖKSÜZLEŞİR:*** metni hâlâ *"koşu bitince sınanacak"* der ve bir sonraki
okuyucuya **bekleyen** görünür. Ne tutmuştur, ne çürümüştür — **yoktur.**
📌 `§11`in *"öngörü ölçümden ÖNCE yazılır"* disiplininin eksik ayağı:
**yazmak yetmiyor, SINAV ANINI da sahiplenmek gerekiyor.** Bu, bu oturumun
`Ö-A…Ö-F` kalemlerine de bir uyarıdır — onların sahibi belli (`SINAV-KOSU8`
takımı, koşu 8), ama sahip yazılmasa aynı yere düşerlerdi.

### Ⓑ — DOKUZ BELGENİN DURUMU
```
🔴 BAYAT (borç ödenmiş, kayıt bilmiyor)
   BULGU-S121-TABLO:72      `ikiz` → girdi.py:882'de VAR
   ESLEME-VASSAL-KUNYE:152  `kid`  → BILINEN_DONEM_ALANLARI'nda VAR
   BULGU-GEOMETRI:531 Ö1    Cânet (Djanet) PETEKLER'de VAR
⚪ AÇIK, gerçek
   HUKUM-CAKISMA-KORFEZ     hiç uygulanmamış (yukarıda)
   HUKUM-MANDA-KIMLIK       beş yama dosyası yerinde, uygulanmamış
   BULGULAR-DORDUNCU:192    `_dolgu_kumesi` üç satırı (son değişiklik 27 Ağu)
   BULGU-GEOMETRI Ö3·Ö4·Ö10·Ö12   ÖKSÜZ (yukarıda)
🟢 ÖDENDİ, bu oturum sırasında
   HUKUM-NOT-ALANI          `not` şeması → `97523a7` (16:15) · DOĞRULADIM:
                            `sira` hem içeriyor hem `sira[6:]` kuyruğunda basıyor
⚪ BULGU-GAMERIKA · BULGU-PAKET-0031-0032 · BULGU-KAYNAK-DENETIM
   devir/gözden geçirme kalemleri — bayatlık ölçülemez, OKUNDU ama
   hüküm verilmedi
```

---

## ⑤ ÖNGÖRÜLER — ölçümden ÖNCE yazıldı, damgalı

```
Ö-A  koşu 8'in donemler.js'i `vl` TAŞIYACAK
     ② mazeret YOK   ③ donemler.js · DÖNEM adedi   ④ koşu 8 / kontrol 7B
Ö-B  7B çıktısında `vl` adedi 0    → 🟢 ZATEN DOĞRULANDI (524 dönem, vl 0)
Ö-C  peteksiz HÂLÂ 0 · PETEKLER == girdi nokta sayısı
     ② mazeret YOK — `vl` alan ekler, petek silmez
Ö-D  yeni alan kümesi tam olarak {vl}, başka sürpriz alan YOK
Ö-E  DÖNEM sayısı 524'ten SAPACAK (veri yamaları kırılma günü değiştirdi)
     ⚠️ bu bir İHLAL DEĞİL; sapmazsa da ihlal değil — GÖZLEM kalemi
```

🔴 **MAZERETİ OLMAYANLAR: Ö-A · Ö-C · Ö-D.** Tutmazlarsa koşu ya da
motor kusurludur; *"yeni yamalar geldi, olur böyle"* denmeyecek.
📌 Ve bu satır ölçümden **önce** yazıldı — `§11`: *"mazeretin de önceden
yazılması gerekiyor, yoksa her yanlış öngörü sonradan açıklanabilir hâle
gelir ve hiçbiri çürümez."*

---

## ⑥ KOŞU BİTİNCE — sıra

```bash
py denetim/SINAV-KOSU8-KOS-0907.py      # ön koşul kapısı + üç sınav
```
Kapı geçmezse **DURUR** (çıkış 2). Geçerse üçü koşar. Ardından yetkili
aletler — bu takım onların yerini TUTMAZ:
```bash
py arac/denetle.py                 # TABANI yamalardan ÖNCE ölç
py arac/durum_tablosu.py --yaz
py arac/renk_olc.py                # §9: veri değiştiyse ŞART
py arac/denetle_yayin.py           # SONUCU OKU, "geçti" varsayma
```

---

## ⑦ GÖZLEMLER — sevkin konusu değil, kayda geçsin

**(a) `vl` etiket metinleri bir ETİKET değil bir NOT olabilir.**
`girdi.py`den çıkarılan 40 benzersiz (k,statu) çiftinin içinde:
> `Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a
> geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)`

Bu bir harita etiketi olarak **çizilemez**. ⚠️ Ama bu **benim kapsamım
değil** (arayüz tarafı `VASSAL-GORUNUM-0907`de) ve ben yalnız **verinin**
böyle olduğunu ölçtüm; ekranda ne olacağını **ölçmedim**.

**(b) Yakın-mükerrer etiketler aynı dönemde İKİ çapa üretebilir.**
`Mısır (Kavalalı)` / `Kavalalı hanedanı` / `Mısır valiliği (Kavalalı
hanedanı)` — üçü ayrı (k,statu) çifti. Aynı gün ikisi birden aktifse iki
ayrı etiket doğar. **Bugünkü veride çakışıp çakışmadıklarını ÖLÇMEDİM**;
S2 bunu `vl` içindeki mükerrer (k,s) olarak değil, farklı adlar olarak
görür ve **ötmez** — ötmemesi doğru, ama kalem açık.

**(c) `girdi.yukle()` her koşuda bir uyarı basıyor:**
`s.kesinlik` `BILINEN_ALANLAR`da yok — 2 kayıtta (Vidin · Kızıkermen).
Bu `CLAUDE.md`de zaten kayıtlı (kütük ikiliği: `BILINEN_ALANLAR` ↔
`BILINEN_DONEM_ALANLARI`). Benim dosyam değil, **dokunmadım.**

---

## ⑧ NE ÖLÇMEDİM — açıkça

```
🔴 Koşu 8'in GERÇEK çıktısını — koşu sürüyor. S1/S2/S3'ün ① ayakları
   gerçek veriyle koşu bitince koşulacak. Bugünkü sonuçlar KONTROL
   GRUBUNA (7B) karşı alındı ve o yüzden S2/S3 bilerek ÖTÜYOR.
🔴 R1 dikiş tabanının 7B'ye göre yeniden ölçümü (yukarıda ⚫).
🔴 Evren dışındaki ~12 `denetim/BULGU-*.md` · `HUKUM-*.md` belgesindeki
   post-koşu kalemleri — OKUMADIM (`bulunamadı` değil, `okumadım`).
🔴 `vl` çapasının ekranda okunabilirliği — başka oturumun kapsamı.
🔴 §⑦ borç 2'nin "898 dönem / yeni tavan" sayısı.
```

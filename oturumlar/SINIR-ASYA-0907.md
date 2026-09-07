# SINIR-ASYA-0907 — ilerleme

> Oturum: `OPUS HAZIR KITA 137` · `local_a4314139-0ea6-4d11-ace2-1661739b57b6`
> Şartname: `oturumlar/SINIR-HUKUKI-ORTAK-0907.md` · koordinatör: 1.MURAT
> Bölge: **Asya (Arap/Anadolu/Kafkas hariç) + Okyanusya + Amerika**
> Ad alanı: `data/sinir_hukuki_asya.js` → `window.SINIR_HUKUKI_ASYA`

---

## ELİMDEKİ DOSYALAR
```
denetim/SINIR-HUKUKI-ASYA-0907.json          ← ÇIKTI (98 kayıt · 601.751 bayt)
denetim/ARAC-SINIR-ASYA-KENAR-0907.py        kenar çıkarımı
denetim/ARAC-SINIR-ASYA-KIMLIK1923-0907.py   poligon baskın kimliği
denetim/ARAC-SINIR-ASYA-KENARYANI-0907.py    kenar yanı kimliği
denetim/ARAC-SINIR-ASYA-URET-0907.py         üçünü birleştirip çıktıyı üretir
denetim/OLCUM-SINIR-ASYA-*.json              ara ölçümler
oturumlar/SINIR-ASYA-0907.md                 bu dosya
```
🔒 `data/` ve `arac/` **yalnız OKUNDU** — koşu 8 kilidi.

---

## ① KENAR ÇIKARIMI — 🟢 ÖLÇTÜM
```
bölge girdisi (NE ADMIN adıyla)  122   + komşu 2 (Russia · Iran)
NE'de bulunamayan ad               0   geçersiz geometri 0
kutu aday çift                   353   KENAR (payda) 98
yalnız noktada değen               0   toplam tepe (3 ond.) 31.771
birebir EKSİK tepe                 0 / 31.771
```
🟢 KADEME-MODEL'in *"kenar çıkarımı MEKANİK"* hükmü **devralınmadı, kendi
bölgemde yeniden ölçüldü** ve doğrulandı. `linemerge` baştan kondu.
📌 Bölge **kutuyla türetilmedi, adıyla yazıldı** — bir kutu İran'ı,
Türkiye'yi, Rusya'nın Avrupa yakasını da yakalardı.

---

## ② 1923 KİMLİĞİ — iki yöntem, ve İKİNCİSİ BİRİNCİYİ ÇÜRÜTTÜ

**Yöntem 1 — poligon baskın kimliği.** Her NE poligonunun içine düşen
atlas noktalarının `1923-10-28`deki sahibi. Sonuç: Orta Asya'nın beşi de
`sovyet-rusya` ⇒ *"bu kenarlar 1923'te iç idarî hat"*.

**Sonra `devletler.js` tarandı ve hüküm sarsıldı:**
```
buhara-halk-cumhuriyeti  1920-10-08 .. 1923-10-29   künye CANLI
harezm-halk-cumhuriyeti  1920-04-26 .. 1923-10-29   künye CANLI
tannu-tuva               1921-08-14 .. 1923-10-29   künye CANLI
```
⇒ **Baskın kimlik, KENARDAKİ kimliği gizleyebilir.**

> 🔴🔴 **BU GEREKÇE SONRADAN ÇÜRÜDÜ — ve çürüten ben oldum.** Üçünün de
> **veride kullanılıp kullanılmadığını ölçmemiştim.** Ölçüldü:
> ```
> tannu-tuva               veride dönem: 0
> buhara-halk-cumhuriyeti  veride dönem: 0
> harezm-halk-cumhuriyeti  veride dönem: 0
> tibet-ganden-phodrang    veride dönem: 8   ← GERÇEKTEN kullanılıyor
> sarawak-brooke           veride dönem: 1   ← GERÇEKTEN kullanılıyor
> ```
> ⇒ **Künye CANLI ama VERİDE YOK.** Yani Orta Asya atlasta gerçekten tek
> blok `sovyet-rusya`; baskın yöntemi orada bir şey gizlemiyordu.
> 🟢 **Ders ve yöntem AYAKTA, gerekçe DEĞİŞTİ:** kenar yanı yöntemi
> doğrulandı — ama Buhara/Hîve/Tuva ile değil, **Tibet ve Sarawak ile.**
> O ikisi veride var ve baskın yöntemi onları gerçekten gizliyordu.
> 📌 `§11`: *ölçüm doğru, çıkarım yanlış* — burada çıkarım doğruydu
> (kenar yanı daha keskin), **dayanağı** yanlıştı.
>
> 🔴 **VE ÇÜRÜME BİR VERİ BOŞLUĞU AÇIĞA ÇIKARDI (bölgemde, benim dosyam
> değil):** üç künye 1923'te canlı, veride sıfır kullanım ⇒ atlas Buhara
> HSC'yi, Harezm HSC'yi ve Tannu Tuva'yı 1923'te düz `sovyet-rusya`
> boyuyor. Bugünkü **Rusya-Moğolistan** sınırının bir bölümü 1923'te
> **Tuva-Moğolistan** sınırıydı; **Türkmenistan-Özbekistan** ve
> **Özbekistan** komşulukları Harezm/Buhara ile ayrışırdı.
> ⇒ `§11`in *"veri penceresi ile künye penceresi ayrı şeylerdir"* dersi:
> künye verinin **taahhüdü**; burada taahhüt var, veri onu ifade etmiyor.
> ⚠️ Bu, `1923te-ic-hat` hükmümü **bugünkü veri için** değiştirmez —
> ama künyeler uygulanırsa **7 Sovyet kenarından en az 3'ü** o kovadan
> çıkar.

**Yöntem 2 — kenar yanı.** Kenar geometrisi tamponlanır, iki poligonun
içinde kalan noktalar ayrı sayılır. Ve gizlenmiş kimlikleri **buldu**:
```
China ↔ India   baskın: cin-cumhuriyeti  →  kenar yanı: tibet-ganden-phodrang(4)
China ↔ Nepal   baskın: cin-cumhuriyeti  →  kenar yanı: tibet-ganden-phodrang(2)
Bhutan ↔ China  baskın: cin-cumhuriyeti  →  kenar yanı: tibet-ganden-phodrang(1)
Indonesia ↔ Malaysia  baskın: ingiliz-malaya → kenar yanı: sarawak-brooke(1)
Myanmar ↔ Thailand · Laos ↔ Myanmar        → kenar yanı: san-devletleri
India ↔ Pakistan                            → kenar yanı: racput · bahavelpur
```
🟢 **Tampon bir SEÇİMDİR ⇒ iki tamponla (1,0° ve 2,5°) ölçüldü.** Sonucu
değiştiren kenar: **5 / 98**, ve beşi de adıyla kayıtlı.
📌 Tek tamponla ölçseydim seçim görünmez olurdu.

⚠️ **Yöntemin sınırı, önceden yazıldı:** bu bir **VEKİLDİR**
(nokta-içinde-poligon). Atlasın o bölgedeki nokta yoğunluğu düşükse kimlik
`olculemedi` çıkar — ve öyle damgalanır.

⚠️ **Ölçüm günü `1923-10-28`, çıpa `1923-10-29`.** Atlas dönemleri `[f,t)`
yarı açık; `t:"1923-10-29"` taşıyan dönem 29 Ekim'de **kapsamaz**. 29'unda
ölçmek pencere ucunda biten bütün dönemleri **sahipsiz** gösterirdi.

---

## ③ ÇIKTI — 98/98 kayıt, hiçbiri "okumadım" değil
```
hal   olculemedi 83 · bulunamadi 15
cins  gercek-sinir-adayi 48 · 1923te-ic-hat 15 · kenar-yani-bos 11 ·
      kimlik-degil 10 · atlas-noktasi-yok 8 · yontem-celiskisi 6
```
🔴 **Boş bir `olculemedi` kaydı yazmadım, ama kayıtsız da bırakmadım** —
şartname ④'ün kendi semantiği: *kaydın hiç yazılmaması = okumadım.*
Her kenarın `hal`i, onun **nereye kadar götürüldüğünü** söyler.

### 🟢 EN SAĞLAM SONUÇ — 15 kenar 1923'te ULUSLARARASI SINIR DEĞİLDİ
```
SOVYET (7)   Kazakistan-Rusya · Kazakistan-Özbekistan · Türkmenistan-Özbekistan ·
             Tacikistan-Özbekistan · Kazakistan-Kırgızistan · Kırgızistan-Özbekistan ·
             Kırgızistan-Tacikistan
İNG. HİND(4) Hindistan-Pakistan · Bangladeş-Hindistan · Hindistan-Myanmar ·
             Bangladeş-Myanmar
ÇİNHİNDİ (3) Laos-Vietnam · Kamboçya-Vietnam · Kamboçya-Laos
JAPON (1)    Kuzey Kore - Güney Kore
```
⇒ Bunlar C'ye **1923 çıpasıyla giremez**: onları tarif eden bir 1923
antlaşması **olamaz**, çünkü taraf yok. `hal:"bulunamadi"` — ve bu
şartname ②'nin dediği gibi **bir başarısızlık değil, BİR SONUÇ.**

---

## ④ 🔴🔴 YAN BULGU — ATLASTA 18 NOKTALIK BİR ANAKRONİZM (benim dosyam DEĞİL)

Yöntem çelişkisi kovası `Mexico ↔ United States of America` kenarını
ayırdı: **çizginin iki yanı da `meksika`.** Sondalandı:
```
ABD poligonunun İÇİNDE, 1923-10-28'de `meksika` olan atlas noktası: 18
   Los Ángeles · Monterey · San José · Santa Bárbara · Tucson · Tubac ·
   Albuquerque · Las Vegas(NM) · Santa Rita del Cobre · Yuma · El Paso ·
   La Junta · Laredo · Nacogdoches · Los Adaes · Fort Robidoux ·
   St. Louis · Mission San Luis (Apalaçi, FLORIDA)
zincir: … 1821-09-27 `yeni-ispanya` → 1821-09-27..1923-10-29 `meksika`
```

🔴 **VE BU BİR DIŞ KAYNAK MESELESİ DEĞİL — ATLAS KENDİ İÇİNDE ÇELİŞİYOR:**
```
kronoloji  "Guadalupe Hidalgo Antlaşması Mexico City'de imzalandı" VAR
           ve künyesinde: "birincil belge: imza 2 Şubat 1848"
künye      teksas-cumhuriyeti 1836-03-02 .. 1845-12-29   VAR
           abd 1776-07-04 .. 1923-10-29                  VAR
kırılma    1848-02-02 → 7 yerleşimde UYGULANMIŞ
                        (Taos Pueblo · Acoma · Santa Fe …)
           1845-12-29 → 2 yerleşim (San Antonio · San Felipe)
           1853-12-30 / 1854-06-08 (Gadsden) → 0
           1821-02-22 (Adams-Onís, Florida)  → 0
```
⇒ **Atlas 1848'i biliyor, 7 yerleşime uygulamış, 18'ine uygulamamış.**

🔴 **VE HİÇBİR DEĞİŞMEZ BUNU SORMUYOR.** `Değişmez 2` *"bu kırılmanın
maddesi var mı"* diye sorar; `2t` *"bu maddenin kırılması var mı"* diye.
İkisi de `1848-02-02` için **KAPALI** — çünkü 7 yerleşim kırıldı.
***"Bu gün kırılması GEREKEN her yerleşim kırıldı mı?"* sorusunu kimse
sormuyor.** `CLAUDE.md §11`in *"Değişmez 2'nin KAPALI hükmü, o günün
BÜTÜN geçişlerinin anlatıldığı anlamına gelmez"* dersinin **yerleşim**
yüzü — orada bir gün birden çok geçiş taşıyordu, burada bir geçiş birden
çok yerleşim taşıyor.

⚠️ **DÜZELTMEYİ YAPMADIM:** `data/yerlesimler_kamerika.js` benim dosyam
değil ve koşu 8 kilidi var. Kayıt burada.
⚠️ Ve iki yön birden bozuk: **Tehuantepec** (Meksika'nın içinde)
`1783-09-03..1923-10-29 abd` taşıyor.

### Aynı sınıfın öteki üyeleri (bölgemde, ölçüldü)
```
Honduras'ın 3 noktası    1821-09-27 → 1923 `meksika`  · `honduras` künyesi YOK
                         (Trujillo · Río Tinto · Omoa)
Belize                   `ingiltere`  — `belize` künyesi YOK
Hong Kong                `ingiltere`  — ayrı künye YOK
Kosta Rika · El Salvador · Nikaragua · Butan   atlas noktası **0**
```
🔴 `honduras` · `nikaragua` · `kosta-rika` · `salvador` ·
`orta-amerika-federasyonu` · `belize` künyeleri **`devletler.js`te YOK**
(tarandı, tahmin edilmedi). ⇒ `§3.5.0`ın **ARDIL** sınıfı: kısaltmak
delik açar, kimlik yok ⇒ **bugün yazılamaz.**

---

## ⑤ KAYNAK ARAMASI — TDV turu · 1 kapandı, 5'i açık kaldı

Alet: `denetim/ARAC-SINIR-ASYA-TDV-0907.py` (önbellekli) ·
çıktı `OLCUM-SINIR-ASYA-TDV-0907.json` · gövdeler `denetim/_tdv_onbellek/`
🟢 Slug testi **iki yönde de** sınandı: 11 canlı slug **200**, kontrol
slug'ı `bulunmayanslug` **302** ⇒ test ayırt ediyor (`C13` ateşleme).

```
🟢 hukuki 1   Afganistan–Pakistan · DURAND HATTI · 1893-11-12 · kaynak `afganistan`
🟡 dayanak    Hindistan–Nepal · Suguali 1816 · kaynak `nepal`
              (dayanak var, "değişti mi" sorusu AÇIK ⇒ `hukuki` YAZILMADI)
⚪ bulunamadı İran–Türkmenistan · Afganistan–İran · Çin–Hindistan · Moğolistan–Rusya
```

🔴 **VE `§4⑧` TUZAĞININ CANLI ÖRNEĞİ ÇIKTI — İran–Türkmenistan:**
`Ahal` araması **eşleşti**; cümle şuydu:
> *"Türkmenler'in **Ahal Teke atı** da dünyaca ünlüdür."*

Bir **sayaç** bunu *"1881 Ahal antlaşması bulundu"* diye raporlardı.
Aletim eşleşme saymak yerine **cümleyi bastığı** için yakalandı.
📌 ⇒ Bir kaynak taramasında **eşleşme sayısı bir dayanak değildir**;
cümle okunmadan `hukuki` yazılamaz.

⚠️ **`kesinlik` alanı DOLDURULMADI ve sebebi ölçüldü:**
`koridor.js` → `kesinlik: 1` ve `3` (**tamsayı**, 64 kayıt) ·
yerleşim dönemleri → `kesinlik:"ay"` · `"yuzyil"` (**dizgi**).
**Aynı ad, iki ayrı değer alanı** — hangisinin geçtiği bu katmanda
kararlaştırılmamış. Tahminle doldurmak **üçüncü** bir yazım üretirdi.

⚠️ **Afganistan–Pakistan kapanışının sınırı, kaydın içine yazıldı:**
TDV *"koordinatları hiç değişmedi"* **demiyor**; hükmü *"1947'de olduğu
gibi devredildi"* ifadesinden **çıkardım.** Bu bir ÇIKARIM ve ikinci bir
kaynak onu sınamalı.

---

## ⑥ AÇIK KALEMLER
```
🔴 KARAR BEKLİYOR   Rusya/İran uçlu 7 kenarı ben mi yazayım? (M-3181)
⚪ OKUMADIM         48 "gerçek sınır adayı" kenarın hiçbirinde
                    "çizgi 1923'ten bugüne değişti mi" sorusu KAYNAĞA
                    SORULMADI. Sıradaki iş bu.
⚪ ESLEME           `ESLEME-NE-KIMLIK-0907.json` diskte YOK; 60 uç ülkenin
                    atlas kimliği eşlemesi onu bekliyor (o dosyaya YAZMIYORUM)
```

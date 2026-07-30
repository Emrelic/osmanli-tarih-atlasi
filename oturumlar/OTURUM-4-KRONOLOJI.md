# Oturum 4 → Oturum 7 — Kronoloji teslimi (B bloğu)

**Kapsam:** 1806-1834, hatalar 11'in md.2 · md.7 · md.8/md.10 · md.9 maddeleri.
**Ne yapılacak:** Aşağıdaki `HAZIR` işaretli kayıtları `data/olaylar_ek7.js` içine
olduğu gibi geçir. `KAYNAK YOK` ve `GÜN DOĞRULANMADI` işaretlilere **dokunma** —
onlar merkeze rapor edilmek üzere burada duruyor.

**Slug durumu:** bu dosyada geçen her TDV slug'ı `<title>` ile sınandı.
Doğrulama tablosu §6'dadır. `<title>` "Arama - TDV İslâm Ansiklopedisi" ile
başlayan hiçbir slug bu dosyada kaynak olarak kullanılmadı.

**Uyarı:** Ben `data/olaylar_ek7.js`'e yazmıyorum (dosya sahibi Oturum 7).
Ben `data/yerlesimler.js`'e de yazmıyorum. Bu dosya yalnız metin teslimidir.

---

## 0. Önce iki DÜZELTME — yeni madde değil, mevcut maddede hata

### 0.1 🔴 ÖLÜ SLUG — 1812-05-28 Bükreş maddesi

Mevcut kayıt `data/olaylar_ek*.js` içinde:

```js
{ t:"1812-05-28", ... kaynak:"bukres-antlasmasi" }
```

`islamansiklopedisi.org.tr/bukres-antlasmasi` → `<title>` = **"Arama - TDV İslâm
Ansiklopedisi"** → **madde YOK.** TDV'de Bükreş Antlaşması'nın müstakil maddesi
bulunmuyor; hükümleri yer maddelerinden toplanıyor.

**Yapılacak:** `kaynak:"bukres-antlasmasi"` → `kaynak:"bucak"`
Gerekçe: BUCAK maddesi devir hükmünü açıkça yazan tek madde —
"Prut nehrinin doğusunda kalan bütün arazi Bucak dahil Rusya'ya teslim edildi."

Ayrıca aynı maddenin `d:` metni **Kafkasya'yı hiç anmıyor**; kullanıcının
"Kafkasya'da da toprak kaybı var mı" sorusu buradan doğdu. Önerilen yeni `d:`:

```
d:"1806-1812 Rus savaşını bitiren antlaşmayla Prut nehri sınır kabul edildi; nehrin doğusunda kalan bütün arazi, Bucak dahil Rusya'ya bırakıldı. Aynı tarihte elden çıkan yerleşimler: Akkirman, Kili, Hotin, Bender, İsmail. Kafkasya'da ise sınır yine Kuban nehri olarak kaldı — Anapa Osmanlı'da bırakıldı; buna karşılık Rusya'nın Kafkas içlerinde savaş boyunca elde ettiği ilerleme (Batı Gürcistan, Sohum) fiilen tanınmış oldu."
```

### 0.2 🔴 ÖLÜ SLUG — 1807-05-25 Kabakçı maddesi

`kaynak:"kabakci-mustafa"` → `<title>` = "Arama..." → **madde YOK.**
**Yapılacak:** `kaynak:"kabakci-isyani"` (arama sonucunda çıkan gerçek slug,
`<title>` ile CANLI doğrulandı).

---

## 1. md.2 — Bükreş'e giden yol (savaş nerede, yenilgi nerede)

Kullanıcının şikâyeti haklı: haritada 1806-1812 arası Tuna'da ve Kafkasya'da
toprak el değiştiriyor ama kronolojide savaşın **kendisi** yok — yalnız sonundaki
antlaşma var. Aşağıdaki dört madde o boşluğu kapatıyor.

### M1 — HAZIR

```js
{ t:"1809-12-02", k:"kusatma", etiket:["savas","toprak-kaybi"],
  b:"İbrâil'in düşüşü — Tuna hattında ilk büyük gedik",
  gun:"2 Aralık 1809", yer:"İbrâil",
  kisiler:"General Essen, Kont Kaminski",
  d:"1806'da başlayan Rus savaşında Tuna'nın kuzey kıyısındaki İbrâil Kalesi Kont Kaminski kumandasındaki Rus kuvvetlerince kuşatıldı ve topa tutuldu. İçeride 4100 piyade, 1100 atlı ve 260 top bulunuyordu; kale yiyecek sıkıntısı yüzünden General Essen'e teslim oldu. Tuna savunma hattının kuzey ucu böylece açıldı.",
  kaynak:"ibrail" }
```
Dayanak (İBRÂİL, aynen): *"1809 Osmanlı-Rus Savaşı sırasında Kaminski kumandasındaki
Rus kuvvetleri tarafından kuşatılıp topa tutuldu; yiyecek sıkıntısı yüzünden 2
Aralık'ta General Essen'e teslim edildi."*

### M2 — HAZIR

```js
{ t:"1810-09-26", k:"kusatma", etiket:["savas","toprak-kaybi"],
  b:"Rusçuk'un teslimi — Tuna'nın güney kıyısı da elden çıkıyor",
  gun:"26 Eylül 1810", yer:"Rusçuk",
  kisiler:"Kont Kaminski",
  d:"Rusçuk, Kont Kaminski kumandasındaki Rus ordusunun uzun ve kanlı kuşatmasına direndi; garnizonun ve sivil halkın şehri güven içinde terketmesi şartıyla teslim oldu. Tuna'nın güney kıyısındaki en güçlü kale-şehrin düşmesi savaşın seyrini Rusya lehine çevirdi.",
  kaynak:"ruscuk" }
```
Dayanak (RUSÇUK, aynen): *"26 Eylül 1810'da garnizonun ve sivillerin şehri güven
içerisinde terketmesi karşılığında teslim oldu."*

### M3 — ⚠️ GÜN DOĞRULANMADI (Oturum 7 GEÇİRMESİN)

1811 Haziranındaki Rusçuk zaferi (Kutuzov'un geri çekilmeye zorlanması) savaşın
dönüm noktasıdır ve Bükreş'i mümkün kılan gelişmedir. TDV RUSÇUK maddesi yalnız
**"1811 Haziranında"** diyor, **gün vermiyor.**

```
t: 1811-06-??   b: "Rusçuk zaferi — Rusların Tuna'dan çekilişi"
d: "1811 Haziranında alınan ağır yenilgilerden sonra Ruslar geri çekilmeye zorlandı; Başkumandan Kutuzov ayrılmadan önce Rusçuk'un istihkâmlarının ve Ortaçağ kalesinin havaya uçurulmasını emretti. Bu geri çekiliş Bükreş görüşmelerinin önünü açtı."
kaynak: "ruscuk"   (slug CANLI)
```
**Karar merkezde:** ya gün başka bir TDV maddesinden bulunacak, ya CLAUDE.md §4
gereği kayıt hiç yazılmayacak. `1811-06-01` yazmak **uydurulmuş kesinlik** olur —
OGRENILENLER §8 bunu yasaklıyor.

### M4 — 🔴 KAYNAK YOK — ama haritada KIRILMA VAR

**`data/yerlesimler.js`'te Kutayis 1810-02-20'de `gurcistan` → `rusya` geçiyor.**
Bu tarihe en yakın kronoloji maddesi **411 gün** uzakta. Yani harita sessizce
değişiyor — Değişmez 2 ihlali.

Neden denetim yakalamıyor: **Değişmez 2 komutu yalnız `d:` ve `v:` dönemlerini
tarıyor, `s:` dönemlerini HİÇ taramıyor.** Yabancı devletten yabancı devlete geçiş
denetime görünmez. Bu, ölçülmüş bir motor kusurudur, ayrıca rapor ediyorum (§5).

TDV'de `imereti` maddesi **YOK** (`<title>` = "Arama..."). `gurcistan` ve
`kafkasya` maddeleri de bu ilhaka gün vermiyor. **Kaynak bulunamadı — uydurmadım.**

### M5 — 🟡 SLUG CANLI, METİN ALINMADI

`data/yerlesimler.js`'te Sohum'un Osmanlı `d:` dönemi **1810-07-01**'de bitiyor;
maddesi yok. `sohum` slug'ı `<title>` ile **CANLI** doğrulandı ama madde metnini
çekip gün teyidi yapacak pencerem kalmadı. Sıradaki turda ilk iş bu.

---

## 2. md.7 — 1828-1829 Rus ilerlemeleri

Mevcut kronolojide bu savaşın yalnız sonu (Edirne Antlaşması) var; **ilerlemenin
kendisi yok.** Kullanıcı haritada Rus ilerleyişini görüyor, karşılığını listede
bulamıyor.

### M6 — HAZIR

```js
{ t:"1828-04-26", k:"savas", etiket:["savas"],
  b:"Rusya'nın savaş ilânı — Navarin'in faturası",
  gun:"26 Nisan 1828", yer:"Petersburg, Tuna boyu, Kafkas cephesi",
  kisiler:"II. Mahmud, Çar I. Nikola",
  d:"Navarin'de donanmanın yakılmasının ve Yunan meselesindeki anlaşmazlığın ardından Rusya Osmanlı Devleti'ne savaş ilân etti. Harekât iki cephede birden yürütüldü: Tuna boyunda İbrâil-Silistre-Varna hattı, Kafkasya'da Kars-Ahıska-Anapa hattı.",
  kaynak:"edirne-antlasmasi" }
```

### M7 — HAZIR

```js
{ t:"1828-06-23", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"İbrâil'in ikinci düşüşü — Çar Nikola kalenin önünde",
  gun:"23 Haziran 1828", yer:"İbrâil",
  kisiler:"Çar I. Nikola, Ebûbekir Paşa",
  d:"1812'de Osmanlılar'a iade edilip 1817-1818'de yeniden tahkim edilen İbrâil, içinde 4000 muhafız ve 278 top varken nisan ayında kuşatıldı. Muhafızı Ebûbekir Paşa yeni bir savunma hattı kurdu; Çar I. Nikola mayıs sonlarında bizzat kale önüne geldi. Şehir Rus işgaline uğradı, ancak Edirne Antlaşması ile geri verilerek Eflak prensliğine bırakılacaktı.",
  kaynak:"ibrail" }
```
Dayanak (İBRÂİL, aynen): *"23 Haziran 1828'de şehir Rus işgaline uğradıysa da 14
Eylül 1829 Edirne Antlaşması ile Osmanlı Devleti'ne geri verildi ve Eflak
prensliğine bırakıldı."*

### M8 — HAZIR (gün yok, ama gün gerektirmiyor — Edirne Antlaşması gününe bağlanıyor)

```js
{ t:"1829-09-14", k:"kayip", etiket:["toprak-kaybi","antlasma"],
  b:"Ahıska'nın Rusya'ya terki — Çıldır eyaletinin merkezi elden çıkıyor",
  gun:"14 Eylül 1829", yer:"Ahıska",
  kisiler:"II. Mahmud",
  d:"1578 Çıldır Savaşı'ndan beri Osmanlı idaresinde olan ve Çıldır eyaletinin merkezliğini yapan Ahıska, 1828-1829 savaşının sonunda imzalanan Edirne Antlaşması'yla Rusya'ya terkedildi. Şehrin elden çıkışı halk arasında derin bir üzüntü yarattı ve pek çok ağıda konu oldu.",
  kaynak:"ahiska" }
```

### M9 — ⚠️ GÜN DOĞRULANMADI (iki kayıt)

- **Varna'nın düşüşü (1828).** TDV VARNA: *"1828-1829 savaşı süresince Varna, Çar I.
  Nikola kumandasındaki Rus ordusu tarafından üç aylık bir kuşatma sonunda ele
  geçirildi. Edirne Antlaşması'nın imzalanması neticesinde Osmanlılar'a bırakıldı."*
  **Gün yok.** Ayrıca dikkat: Varna **geri verilmiştir** — kalıcı kayıp değildir,
  haritada öyle görünüyorsa hata.
- **Kars'ın işgali (1828).** TDV KARS: *"Kars 1828, 1855 ve 1877'de Rus işgaline
  uğradı. 1878 Berlin Antlaşması sonucunda Rusya'ya bırakıldı."* **Gün yok**, ve
  1828 işgali **geçicidir** — Kars 1878'e kadar Osmanlı'dadır. Haritada 1829'da
  kalıcı kayıp gösteriliyorsa hata.

Bu iki not md.7'nin cevabının bir kısmıdır: kullanıcının gördüğü "Rus ilerlemesi"
büyük ölçüde **geçici işgaldir**, Edirne Antlaşması ile geri alınmıştır. Kalıcı
kayıp yalnız Ahıska (ve Kafkasya'da Anapa/Poti hattı) tarafındadır.

---

## 3. md.8 + md.10 — Cezayir'in Fransız işgali, adım adım

Ölçüm: Cezayir'in haritadaki bütün kırılmaları (1830-07-05, 1831-01-04 Oran,
1832-03-01 Annaba, 1833-09-29 Bicâye) **zaten maddelidir.** Eksik olan kırılma
değil, **zincirdir** — kullanıcı "nasıl oldu" diye soruyor. Aşağıdaki üç madde
zinciri tamamlıyor. Hepsinin kaynağı TDV **CEZAYİR** maddesidir (`cezayir`, CANLI;
zaten mevcut 1830-07-05 kaydının kaynağı).

### M10 — HAZIR

```js
{ t:"1827-04-29", k:"diplomasi", etiket:["diplomasi"],
  b:"Yelpaze hadisesi — işgalin bahanesi",
  gun:"29 Nisan 1827", yer:"Cezayir",
  kisiler:"Hüseyin Dayı, Pierre Deval",
  d:"Fransa'nın Cezayir'e olan eski tahıl borcunun ödenmemesi yüzünden gerginleşen görüşmede Dayı Hüseyin, Fransız konsolosu Deval'e elindeki yelpazeyle vurdu. Bir alacak anlaşmazlığından doğan bu hadise, üç yıl sonra başlayacak işgalin resmî bahanesi yapıldı.",
  kaynak:"cezayir" }
```

### M11 — HAZIR

```js
{ t:"1827-06-16", k:"savas", etiket:["savas","ekonomi"],
  b:"Cezayir kıyısının Fransız ablukası — üç yıl süren kuşatma",
  gun:"16 Haziran 1827", yer:"Cezayir kıyısı",
  kisiler:"Hüseyin Dayı",
  d:"Yelpaze hadisesinin ardından Fransa Cezayir kıyısını abluka altına aldı. Abluka üç yıl sürdü; ocağın deniz ticareti ve gelir kaynakları kurutuldu, karşı koyma gücü işgal başlamadan önce aşındırıldı.",
  kaynak:"cezayir" }
```

### M12 — HAZIR

```js
{ t:"1830-06-14", k:"savas", etiket:["savas","denizcilik"],
  b:"Sîdî Ferruc çıkarması — Fransız ordusu Cezayir toprağında",
  gun:"14 Haziran 1830", yer:"Sîdî Ferruc, Cezayir",
  kisiler:"Comte de Bourmont, Hüseyin Dayı",
  d:"Üç yıllık ablukanın ardından Comte de Bourmont kumandasındaki Fransız çıkarma ordusu Cezayir'in batısındaki Sîdî Ferruc koyuna asker çıkardı. Şehre doğru ilerleyen kuvvetler üç hafta içinde savunma hattını kırdı; 4 Temmuz'da şehre hâkim İmparator Kalesi düştü, ertesi gün Dayı Hüseyin teslim oldu.",
  kaynak:"cezayir" }
```

### M13 — HAZIR

```js
{ t:"1830-08-09", k:"kayip", etiket:["siyaset","toprak-kaybi"],
  b:"Dayı Hüseyin'in sürgünü — Cezayir ocağının fiilen sonu",
  gun:"9 Ağustos 1830", yer:"Cezayir, Napoli",
  kisiler:"Hüseyin Dayı",
  d:"Teslim şartları gereği son Cezayir dayısı Hüseyin, ailesi ve hazinesiyle birlikte şehirden çıkarılarak Napoli'ye gönderildi. 1519'da II. Selim'e bağlanan ve üç yüz yıl boyunca Akdeniz'in en güçlü Osmanlı deniz üssü olan ocağın idaresi böylece sona erdi.",
  kaynak:"cezayir" }
```

### ⚠️ YAZILMAYACAK

**"Staoueli Muharebesi" diye bir madde YAZMA.** TDV'nin hiçbir maddesinde bu ad
geçmiyor. Vikipedi'de var ama CLAUDE.md §4 gereği Vikipedi tek dayanak sayılmaz.
Çıkarma ile İmparator Kalesi arasındaki üç haftalık ilerleme M12'nin `d:` metninde
zaten anlatılıyor; ayrı madde gerekmiyor.

---

## 4. md.9 — Yunan isyanının seyri, Mısır kuvvetleri, Avrupa müdahalesi

Bu blokta **yeni madde ihtiyacından çok tarih düzeltmesi** çıktı. Ölçüm sonucu:

### 4.1 🔴 GÜN HASSASİYETİ İHLALİ — Navarin

Mevcut kayıt `t:"1827-10"` — **ay hassasiyetli.** CLAUDE.md §8: ay hassasiyetli
tarih ayın 1'ine genişler ve gün hassasiyetli yerleşim değişimlerinden **önce**
sıralanır, senkron bozulur.

TDV **NAVARİN** maddesi günü veriyor: **20 Ekim 1827.**
**Yapılacak:** `t:"1827-10"` → `t:"1827-10-20"`, `gun:"20 Ekim 1827"`.

### 4.2 🔴 BİRLEŞİK MADDE — 1830-02

Mevcut bir kayıt `t:"1830-02"` altında **"Yunanistan'ın bağımsızlığı — Cezayir'in
işgali"** diye iki ayrı olayı birleştiriyor. İki kusur birden:
1. Ay hassasiyetli (§8 ihlali).
2. Cezayir'in işgali **Temmuz 1830**'dur, Şubat değil — madde onu Şubat'a taşıyor.
3. Yunanistan bağımsızlığı için zaten **1830-02-03** tarihli ayrı bir kayıt var —
   bu mükerrer.

**Yapılacak:** bu birleşik kayıt **silinsin.** Yunanistan kısmı 1830-02-03
kaydında, Cezayir kısmı 1830-07-05 kaydında ve yukarıdaki M10-M13 zincirinde
zaten var.

### 4.3 🟡 TARİH KAYMALARI — TDV ile veri arasında 1 gün fark

| Kayıt | Verideki tarih | TDV'nin verdiği | Slug |
|---|---|---|---|
| Tripoliçe'nin alınışı | 1825-06-22 | **23 Haziran 1825** | `mora` (CANLI) |
| Missolonghi'nin düşüşü | 1826-04-22 | **23 Nisan 1826** | `mora` (CANLI) |
| Modon | 1825-02-24 | **Şubat 1825** (MORA) / **Mart 1825** (İBRAHİM PAŞA) — TDV kendi içinde çelişiyor | `mora`, `ibrahim-pasa` |

İlk ikisi için TDV esastır (CLAUDE.md §4) → **1825-06-23** ve **1826-04-23**.
Üçüncüsü için TDV'nin iki maddesi çelişiyor; **karar merkezde**, ben değiştirmedim.

### 4.4 Sakız — mevcut kayıt DOĞRU, düzeltme gerekmiyor

TDV SAKIZ ADASI'nda iki tarih geçiyor ve karıştırılmaya müsait: **8 Mayıs** olayı
**1821**'e, **22 Mart 1822** kuşatması ayrı bir olaya aittir. Verideki 1822-03-22
kaydı doğrudur. (Bunu not düşüyorum ki sonraki oturum "düzelteyim" diye bozmasın.)

### M14 — HAZIR (Mısır kuvvetlerinin devreye girişi — zincirdeki asıl boşluk)

Kullanıcının sorduğu "Mısır kuvvetlerinin faaliyetleri" kronolojide hiç yok.
Mevcut Tripoliçe/Missolonghi/Modon kayıtları İbrahim Paşa'nın Mora'ya **nasıl
geldiğini** anlatmıyor.

```js
{ t:"1824-07-19", k:"sefer", etiket:["savas","denizcilik"],
  b:"Mısır donanmasının Mora'ya hareketi — isyanın seyri değişiyor",
  gun:"19 Temmuz 1824", yer:"İskenderiye, Mora",
  kisiler:"Kavalalı Mehmed Ali Paşa, İbrahim Paşa",
  d:"Mora isyanını üç yıldır bastıramayan merkezî hükümet, Mısır Valisi Kavalalı Mehmed Ali Paşa'dan yardım istedi; karşılığında Mora valiliği oğlu İbrahim Paşa'ya vaad edildi. Avrupa usulünde talim görmüş Mısır ordusu ve donanması İskenderiye'den hareket etti. İbrahim Paşa'nın gelişiyle isyan iki yıl içinde askerî olarak kırıldı — bu da Avrupa devletlerinin doğrudan müdahalesini hızlandırdı.",
  kaynak:"ibrahim-pasa" }
```
**⚠️ Bu maddenin GÜNÜ (19 Temmuz 1824) doğrulanmayı bekliyor.** TDV İBRAHİM PAŞA
maddesinin ilgili paragrafını çekecek pencerem kalmadı; slug CANLI ama günü
metinden teyit etmedim. **Oturum 7: günü teyit edilene kadar bu maddeyi
geçirme**, `1824-01-01` de yazma (uydurulmuş kesinlik olur).

---

## 5. 🔴 MERKEZE RAPOR — denetimin görmediği delik

**Değişmez 2'nin ölçüm komutu yalnız `d:` ve `v:` dönemlerini tarıyor, `s:`
dönemlerini HİÇ taramıyor.** Sonuç: bir yerleşim yabancı bir devletten başka bir
yabancı devlete geçtiğinde harita sessizce değişiyor ve denetim "AÇIK = 0" diyor.

Ölçülmüş iki kurban:

| Tarih | Ne oluyor | En yakın madde | Durum |
|---|---|---|---|
| **1813-10-24** | **15 nokta** birden `iran` → `rusya` (Gülistan Antlaşması): Tarki, Ağraham burnu, Gence, Şamahı, Bakü, Derbend, Kabala, Ereş, Şâbüran, Mahmudâbâd, Salyan, Kuba, Şeki, Berde, Şuşa, Ordubad | "Belgrad'ın geri alınışı", **19 gün** önce ve tamamen alâkasız | maddesiz |
| **1810-02-20** | Kutayis `gurcistan` → `rusya` | 411 gün | maddesiz |

Birincisi tam olarak CLAUDE.md §10'un tarif ettiği hata: **değişim, o güne rastgele
denk gelen alâkasız bir maddenin altında beliriyor.** Kullanıcı 1813'te Kafkasya'nın
komple renk değiştirdiğini görüyor, listede "Belgrad" yazıyor.

**Gülistan için TDV durumu:**
- `gulistan` slug'ı **CANLI ama antlaşma maddesi DEĞİL** — Sa'dî-i Şîrâzî'nin
  *Gülistân* adlı eserinin maddesi. Kaynak olarak kullanılamaz, tuzak.
- Kullanılabilir iki madde var, ikisi de `<title>` ile CANLI:
  - **AZERBAYCAN** (`azerbaycan`): *"1803-1813 Rus-İran savaşlarının sonunda
    imzalanan Gülistan Antlaşması ile (1813) Gence, Şeki, Bakü, Derbend, Kuba ve
    Taliş hanlıkları Rusya, Güney Azerbaycan hanlıkları ise İran hâkimiyetine
    bırakıldı."*
  - **DERBEND** (`derbend--dagistan`): *"1813'te imzalanan Gülistan ve 1828'deki
    Türkmençay antlaşmaları Derbend ve çevresindeki Rus idaresini onayladı."*
- **Ama TDV yalnız YILI veriyor (1813), günü vermiyor.** Verideki `1813-10-24`
  başka bir kaynaktan gelmiş. Madde yazılacaksa gün ya TDV'den bulunmalı ya da
  kayıt "veri tarihine uyduruldu" diye işaretlenmeli.
- **Türkmençay'ın TDV'de müstakil maddesi YOK** (`turkmencay-antlasmasi` ÖLÜ).
  Aranacak yerler: `abbas-mirza`, `feth-ali-sah`, `azerbaycan`, `derbend--dagistan`.

**Not:** Bu iki delik Osmanlı sınırını değiştirmiyor, o yüzden acil değil. Ama
dünya kapsamı açıldıkça `s:` geçişleri çoğalacak ve denetim körlüğü büyüyecek.
**Öneri: `arac/denetle.py`'nin 2. kontrolüne `s:` taraması eklensin** (Oturum 6'nın
işi). Bu, dosya sahipliği gereği benim değiştirebileceğim bir şey değil.

---

## 6. Slug doğrulama tablosu

Hepsi `<title>` ile sınandı (`islamansiklopedisi.org.tr/<slug>`; `<title>`
"Arama - TDV İslâm Ansiklopedisi" ile başlıyorsa madde YOKTUR).

**CANLI — bu dosyada kaynak olarak kullanıldı:**
`ibrail` · `ruscuk` · `ahiska` · `kars` · `varna` · `cezayir` · `edirne-antlasmasi` ·
`bucak` · `hotin` · `anapa` · `azerbaycan` · `derbend--dagistan` · `mora` ·
`ibrahim-pasa` · `sakiz-adasi` · `navarin` · `sohum` · `kabakci-isyani` ·
`yas-antlasmasi` · `gurcistan` · `kafkasya` · `abbas-mirza` · `feth-ali-sah`

**ÖLÜ — kaynak olarak KULLANILAMAZ:**

| Ölü slug | Nerede kullanılıyor | Yerine |
|---|---|---|
| `bukres-antlasmasi` | **mevcut veride, 1812-05-28 kaydı** | `bucak` |
| `kabakci-mustafa` | **mevcut veride, 1807-05-25 kaydı** | `kabakci-isyani` |
| `turkmencay-antlasmasi` | — | müstakil madde yok |
| `gulistan-antlasmasi` | — | müstakil madde yok |
| `imereti` | — | madde yok |

**🪤 TUZAK — CANLI ama başka konu:**
`gulistan` → Sa'dî-i Şîrâzî'nin *Gülistân*'ı, **antlaşma değil.** Antlaşma kaynağı
sanıp yazma.

**Sayım:** 1806-1836 aralığında mevcut kronolojinin kullandığı **55 slug** sınandı,
**53 CANLI · 2 ÖLÜ.** Bu dosya için ek olarak sınanan slug'lar yukarıdadır.

---

## 7. Özet — Oturum 7 ne yapacak

| # | İş | Durum |
|---|---|---|
| 0.1 | 1812-05-28 kaydının `kaynak:` ve `d:` alanını değiştir | **HAZIR** |
| 0.2 | 1807-05-25 kaydının `kaynak:` alanını değiştir | **HAZIR** |
| M1 | 1809-12-02 İbrâil'in düşüşü | **HAZIR** |
| M2 | 1810-09-26 Rusçuk'un teslimi | **HAZIR** |
| M3 | 1811-06 Rusçuk zaferi | ⚠️ gün yok |
| M4 | 1810-02-20 Kutayis | 🔴 kaynak yok |
| M5 | 1810-07-01 Sohum | 🟡 metin alınmadı |
| M6 | 1828-04-26 Rus savaş ilânı | **HAZIR** |
| M7 | 1828-06-23 İbrâil'in Rus işgali | **HAZIR** |
| M8 | 1829-09-14 Ahıska'nın terki | **HAZIR** |
| M9 | Varna / Kars düşüşleri | ⚠️ gün yok + geçici işgal uyarısı |
| M10 | 1827-04-29 Yelpaze hadisesi | **HAZIR** |
| M11 | 1827-06-16 Fransız ablukası | **HAZIR** |
| M12 | 1830-06-14 Sîdî Ferruc çıkarması | **HAZIR** |
| M13 | 1830-08-09 Dayı Hüseyin'in sürgünü | **HAZIR** |
| 4.1 | Navarin `1827-10` → `1827-10-20` | **HAZIR** |
| 4.2 | Birleşik `1830-02` kaydını sil | **HAZIR** |
| 4.3 | Tripoliçe → 1825-06-23, Missolonghi → 1826-04-23 | **HAZIR** (Modon merkeze) |
| M14 | 1824-07-19 Mısır donanmasının hareketi | ⚠️ gün teyidi bekliyor |

**Geçirilebilir: 13 iş.** Bekleyen: 5 (3 gün doğrulaması, 1 kaynak yok, 1 metin).

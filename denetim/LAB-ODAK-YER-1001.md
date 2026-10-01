# LAB-ODAK-YER-1001: bekletilen 20 odak kaleminde olay yeri

- Tarih: 2026-10-01 · Makine: EMRE (LAB irtibat oturumu) · Dal: `lab-odak-1001` (origin/main efaa19a7'den)
- Girdi: `denetim/ODAK-ONERI-1001.json`, `BEKLET` sözlüğündeki 20 kalem (sıra numaraları 1'den başlıyor)
- Soru: Olay fiilen nerede geçti? ① atlasta var → tam ad · ② atlasta yok → "atlasta yok: <ad>" · ③ "yersiz" · kaynak yoksa "bulunamadı"
- Yöntem: TDV İslâm Ansiklopedisi maddeleri `curl` ile ham hâlde indirildi, HTML'den metin çıkarıldı, cümleler `grep` ile birebir alındı. TDV kapsamı dışındaki 4 kalemde (#17, #21, #46, #52) İngilizce Vikipedi'nin düz metni (API `extracts`) ve kaydın kendi `kaynak` alanı okundu. **Arama motoru yalnızca URL bulmak için kullanıldı. Özet metni kaynak olarak kullanılmadı.**
- "Atlasta var mı?" sorusu `data/yerlesimler*.js` ve `bekleyen_*.js` dosyalarındaki 4.284 `ad` değeri üzerinde ölçüldü. Bulunan adların koordinatları da kontrol edildi.

## Özet

| Sonuç | Adet | Kalemler |
|---|---|---|
| ① atlasta VAR | 3 | #30 Suruç · #32 Şam · #42 Şam |
| ② atlasta YOK | 10 | #10 · #11 · #29 Tel İfrîn · #25 Dâşilû (Rey) · #27 Şeyzer · #28 Sınnebra Köprüsü · #33 Hârim · #36 Hittîn · #45 Zafâr · #52 Jarosław |
| ③ yersiz | 5 | #17 · #21 · #35 · #37 · #46 |
| bulunamadı | 2 | #26 · #38 |

**20 kalemin 20'sinde araç önerisinin yanlış olduğu doğrulandı:** önerilen adların hiçbiri olayın geçtiği yer değil. Bekletme kararı 20/20 doğru.

⚠️ **Tuzak:** #52 için atlastaki `Yaroslavl` (lat 57,626 · lon 39,894) Rusya'daki Volga kenti. Olay Polonya'daki Jarosław'da (San nehri kıyısı) geçti. Adların benzerliği yüzünden bir araç bu eşlemeyi kolayca yapabilir; **yapılmamalı**.
⚠️ **Tuzak:** #25 için atlastaki `Tahran` Rey'in yerine kullanılmamalı. Olay Rey'den 72 km uzaktaki Dâşilû'da geçti.

## Kalem kalem

### ① Atlasta var

**#30 · 1122-01-01 · "Urfa kontu Josselin, Artuklu Belek'e esir düştü" → öneri Urfa ✗ → `Suruç`**
- TDV, BELEK b. BEHRÂM (https://islamansiklopedisi.org.tr/belek-b-behram): «…Belek, 13 Eylül 1122'de Urfa Kontu Josselin de Courtenay ile Birecik Senyörü Galéran du Puiset'i Serûc yakınlarında mağlûp ve esir etti.»
- Aynı madde Serûc = Suruç eşitliğini veriyor: «…Serûc'u (Suruç) Sökmen b. Artuk'a iktâ etmiş…». Atlastaki `Suruç` lat 36,976 · lon 38,427.
- 📌 Ek bulgu: TDV burada günü de veriyor (13 Eylül 1122). Atlas kaydı yalnızca yılı taşıyor (`1122-01-01`).

**#32 · 1154-04-25 · "Nûreddin Mahmud Dımaşk'ı aldı" → öneri Halep ✗ → `Şam`**
- TDV, ZENGÎLER (https://islamansiklopedisi.org.tr/zengiler): «25 Nisan 1154'te Dımaşk'ı zapteden Nûreddin, Halep ve Dımaşk'ı kendi hâkimiyeti altında birleştirmek suretiyle bölgenin en güçlü hükümdarı oldu.»
- Atlastaki `Şam` lat 33,513 · lon 36,292 (Dımaşk). Gün de atlasla aynı.

**#42 · 1250-01-01 · "Halep'in el-Melikü'n-Nâsır Yûsuf'u Dımaşk'a hâkim oldu" → öneri Halep ✗ → `Şam`**
- TDV, el-MELİKÜ'n-NÂSIR, Yûsuf (https://islamansiklopedisi.org.tr/el-melikun-nasir-yusuf): «el-Melikü'n-Nâsır, 648 (1250) yılında … ümerâ tarafından Dımaşk'a davet edildi ve şehri savaşmaksızın…»

### ② Atlasta yok

**#10 · 1119-01-01 · "İlgazi ve Togan Arslan Tel İfrîn'de Antakya Prinkepsi Roger'i yok etti" → öneri Antakya ✗ → atlasta yok: Tel İfrîn (vadisi)**
**#11 · 1119-06-28 · "Kanlı Meydan Savaşı…" → öneri Antakya ✗ → atlasta yok: Tel İfrîn (vadisi)**
**#29 · 1119-06-28 · "Kanlı Meydan (Ager Sanguinis)…" → öneri Antakya ✗ → atlasta yok: Tel İfrîn (vadisi)**
- TDV, İLGAZİ, Necmeddin (https://islamansiklopedisi.org.tr/ilgazi-necmeddin): «Tel İfrîn vadisinde, … Antakya Prinkepsi Ruggero di Salerno ile yaptığı, kaynaklarda "Kanlı Meydan Savaşı" (Ager Sanguinis = Ma'reketü sâhati'd-dem) olarak geçen savaşta Haçlı ordusunu âdeta imha etti (17 Rebîülevvel 513 / 28 Haziran 1119). Ölüler arasında Ruggero da bulunuyordu.»
- 🔴 **Mükerrer kayıt bulgusu:** Bu üç kalem **aynı olayı** anlatıyor: Tel İfrîn = Kanlı Meydan = Ager Sanguinis ve Roger bu savaşta öldü. #10 ile #11 aynı dosyada (`kronoloji_cok_once1281_anadolu.js`) bulunuyor; #10 olayı `1119-01-01` (yalnızca yıl), #11 ise `1119-06-28` (gün) ile veriyor. #29 aynı olayın `ortadogu` dosyasındaki kopyası. #10'un ayrı bir olay değil, #11'in tarihsiz kopyası olma ihtimali yüksek. Birleştirme/silme kararı koordinatörün.

**#25 · 1095-02-25 · "Tutuş Rey yakınında öldü…" → öneri Halep ✗ → atlasta yok: Dâşilû (Rey yakını)**
- TDV, TUTUŞ (https://islamansiklopedisi.org.tr/tutus): «…şehir dışına çıktı ve Rey'den 72 km. uzaklıktaki Dâşilû'da karargâh kurdu; Berkyaruk da ordusuyla buraya geldi. Bazı çarpışmalardan sonra esas savaş 17 Safer 488'de (26 Şubat 1095) başladı.»
- Halep, olaydan sonra kurulan şubenin adı: «Tutuş'un ölümü üzerine oğlu Rıdvan, Suriye Selçukluları'nın Halep şubesini kurdu».
- Atlasta `Rey` yok. `Tahran` var, ama Dâşilû'nun yerine kullanılmamalı.
- 📌 Ek bulgu: Atlas `1095-02-25` diyor, TDV ise esas savaşın başlangıcını **26 Şubat 1095** veriyor (1 gün fark). Tutuş'un öldüğü gün bu cümlede ayrıca belirtilmiyor: **ölçülemedi**.

**#27 · 1111-01-01 · "Mevdûd ve Tuğtegin Şeyzer önünde Antakya Haçlılarını yendi" → öneri Antakya ✗ → atlasta yok: Şeyzer**
- TDV, ŞEYZER (https://islamansiklopedisi.org.tr/seyzer): «…Dımaşk Atabegi Tuğtegin ile birlikte yardıma gelen ve Şeyzerli 500 piyadeyi de ordusuna katan Mevdûd, Haçlı ordusunu Şeyzer önlerinde ağır bir yenilgiye uğrattı (505/1111).»

**#28 · 1113-06-28 · "Tuğtegin ve Mevdûd Kudüs Kralı Baudouin'i bozguna uğrattı" → öneri Kudüs ✗ → atlasta yok: Sınnebra Köprüsü (Taberiye yakını)**
- TDV, MEVDÛD b. ALTUNTEGİN (https://islamansiklopedisi.org.tr/mevdud-b-altuntegin): «…Kral Baudouin, daha sonra Mevdûd'la savaşa hazırlanmak maksadıyla Sınnebra Köprüsü'nün batısında mevzilendi. … Savaş beklenmedik bir şekilde başladı. Türkler Haçlı ordusunu bozup 2000 kişiyi öldürerek önemli bir zafer kazandılar … (11 Muharrem 507 / 28 Haziran 1113).»
- Koordinatörün notunda "olay yeri belirsiz" yazıyordu; TDV yeri veriyor. Atlasta `Taberiye` de yok.

**#33 · 1164-08-10 · "Nûreddin Mahmud … Hârim'i Haçlılar'dan geri aldı" → öneri Musul ✗ → atlasta yok: Hârim**
- TDV, ZENGÎLER: «Hârim önlerine gelen ordu şiddetli bir kuşatmanın ardından şehri ele geçirdi (19 Ramazan 559 / 10 Ağustos 1164).»
- Musul'un rolü taraf: «…kardeşi Nusretüddin Mîr-i Mîrân'dan önce Musul ordusuna kumanda eden Ali Küçük katıldı.»
- Not: TDV'nin `harim` adresi başka bir maddeye ("HARİM") çıkıyor; Hârim kasabasının ayrı maddesine ulaşılamadı.

**#36 · 1187-07-04 · "Hıttîn Savaşı…" → öneri Kudüs ✗ → atlasta yok: Hittîn (Hattîn)**
- TDV, HİTTÎN SAVAŞI (https://islamansiklopedisi.org.tr/hittin-savasi): «…Haçlılar, Taberiye ile Saffûriye'nin arasında yer alan Lûbye ovasındaki Hittîn (Hattîn) köyünün üst tarafında uzanan düzlüğe varmışlardı.» Gün: «25 Rebîülâhir (4 Temmuz) Cumartesi sabahı…»
- 📌 Haftagünü sınavı: 4 Temmuz 1187, Jülyen takviminde **cumartesi**. Kaynakla uyuşuyor.

**#45 · 1279-01-01 · "Resûlîler Zafâr'ı aldı (ertesi yıl Şibâm ve Hadramut)" → öneri Hadramut ✗ → atlasta yok: Zafâr**
- TDV, RESÛLÎLER (https://islamansiklopedisi.org.tr/resuliler): «…678'de (1279) Zafâr'ı, ertesi yıl da Şibâm ve Hadramut'u topraklarına kattı.»
- TDV, ZAFÂR (https://islamansiklopedisi.org.tr/zafar): «Yapılan savaşta Sâlim b. İdrîs öldürüldü ve şehir 678'de (1279) Resûlî topraklarına katıldı.»
- Hadramut 1280 olayına ait. Bu kalemde kullanılmamalı.

**#52 · 1245-08-17 · "Yaroslav Muharebesi: Danilo, Çernigov-Macar-Polonya koalisyonunu yendi" → öneri Çernigov ✗ → atlasta yok: Jarosław (San nehri)**
- Vikipedi, "Battle of Yaroslavl (1245)" (https://en.wikipedia.org/wiki/Battle_of_Yaroslavl_(1245)): «…fought on 17 August 1245 near San next to the town of Yaroslavl, between the Kingdom of Galicia–Volhynia led by Daniel of Galicia…»
- Atlas kaydının kendi `yer` alanı: `"Yaroslav (Jarosław)"`. Kaydın kaynağı Encyclopedia of Ukraine, "Danylo Romanovych".
- 🔴 Atlastaki `Yaroslavl` başka bir şehir (Rusya, 57,6°K). **Kullanılmamalı.**

### ③ Yersiz

**#17 · 1214-01-01 · "Theodoros Laskaris Trabzon Rum İmparatorluğu'nun batı topraklarının çoğunu ilhak etti" → öneri Trabzon ✗ → yersiz**
- Gerekçe: Bir bölgenin (batı Paflagonya) ilhakı; tek bir olay yeri yok.
- Vikipedi, "Theodore I Laskaris": «Theodore conquered western Paphlagonia on the Black Sea coast from Alexios I of Trebizond.» Bu cümle tarih vermiyor.
- Not: Bölgedeki Herakleia Pontike (atlasta `Karadeniz Ereğli`) ve Amastris (atlasta `Amasra`) bu ilhakın konusu olabilir, ancak okuduğum kaynak hangisinin 1214'te alındığını söylemiyor: **ölçülemedi**. Tahmin yazmıyorum.

**#21 · 1259-01-01 · "Epir'in büyük kısmı İznik denetimine geçti" → öneri İznik ✗ → yersiz**
- Gerekçe: Bir sürecin sonucu. Vikipedi, "Despotate of Epirus": «…in 1259 William was captured at the disastrous Battle of Pelagonia. Michael VIII went on to capture Michael II's capital of Arta, leaving Epirus with only Ioannina and Vonitsa.»
- Not: Süreç Pelagonya Savaşı ile başlıyor ve Arta'nın alınmasıyla sürüyor. `Arta` ve `Yanya` atlasta var, ama kalem bu iki noktadan birini değil süreci anlatıyor. İznik ise devralan TARAF.

**#35 · 1174-01-01 · "Turan Şah Yemen'i fethetti: Zebîd ve San'a Eyyûbîler'e geçti" → öneri Zebîd → yersiz**
- Gerekçe: Bir sefer; birden çok şehir sırayla alındı. TDV, TURAN ŞAH (https://islamansiklopedisi.org.tr/turan-sah): «Turan Şah yol üzerinde önce Hicaz'ı ele geçirdi, ardından Yemen'e girerek Zebîd'i kontrol altına aldı … Ardından bölgenin stratejik limanı Aden'i … Taiz, Ta'ker (Ta'kür) ve Cened kalelerine hâkim olan Turan Şah, San'a'yı da zaptederek…»
- Not: Tek nokta zorunluysa TDV'ye göre ilk alınan şehir Zebîd (atlasta `Zebîd` var). Ancak kalem "Yemen'i fethetti" diyor; bu bir seçim kararı, koordinatörün.

**#37 · 1192-09-01 · "Selâhaddin ile Richard arasında barış…" → öneri Yafa ✗ → yersiz**
- TDV, SELÂHADDÎN-i EYYÛBÎ (https://islamansiklopedisi.org.tr/selahaddin-i-eyyubi): «Nihayet 21 Şâban 588 (1 Eylül 1192) tarihinde iki taraf arasında üç yıl sekiz ay süreli barış antlaşması imzalandı. Bazı tarihçilerin Akkâ ile Yafa arasındaki sahil şeridinin…»
- Gerekçe: TDV antlaşmanın **imzalandığı yeri vermiyor**. Antlaşmanın konusu bir kıyı şeridi (iki uç). Gün atlasla aynı.

**#46 · 1082-01-01 · "Çandelalar Ecmîr'e (Çavhanlara) tâbi oldu" → öneri Ecmîr ✗ → yersiz**
- Gerekçe: Bir tâbiyet (statü) değişikliği, olay yeri yok. Ecmîr tâbi olunan TARAF. Kaydın kendi `yer` alanı `"Bundelkhand"` (bir bölge). Kaydın kaynağı: Britannica «Chandela»: 'In 1082 they were reduced to vassalage by Ajmer.'
- ⚠️ Gözlem (doğrulanmadı): Vikipedi "Chandelas of Jejakabhukti" Çavhan (Chahamana) saldırısını 1182-83'e (Prithviraj) koyuyor ve 1082 için bir Ajmer tâbiyetinden söz etmiyor. Britannica'nın 1082'si ile arada 100 yıl var. Bu bir yazım hatası olabilir. Britannica sayfasını açıp okumadım: **ölçülemedi**.

### Bulunamadı

**#26 · 1105-08-27 · "Remle yöresinde Fâtımî-Dımaşk ordusu ile Kudüs Haçlıları çarpıştı" → öneri Kudüs ✗ → bulunamadı**
- TDV, TUĞTEGİN (https://islamansiklopedisi.org.tr/tugtegin): «Fâtımî ordusunun 27 Ağustos 1105'te Kudüs Kralı Baudouin idaresindeki Haçlı ordusuyla giriştiği şiddetli muharebede her iki taraf da ağır kayıplar verdi.» Gün atlasla aynı, ancak **yer verilmiyor**.
- TDV REMLE maddesi (https://islamansiklopedisi.org.tr/remle) 1105 savaşından söz etmiyor. "Remle" yalnızca atlas başlığında geçiyor ve okuduğum kaynakta doğrulanmadı. Kudüs ise kesin olarak taraf. (Remle zaten atlasta yok.)

**#38 · 1219-01-01 · "Zap Suyu Savaşı: Kökböri ve III. İmâdüddin Zengî Musul ordusunu yendi" → öneri Musul ✗ → bulunamadı**
- TDV, ZENGÎLER: «…Lü'lü' … tarafından kardeşi I. Nâsırüddin Mahmûd … tayin edildi (616/1219). III. İmâdüddin Zengî … Kökböri'nin yardımıyla Musul'a bağlı yerleri almaya başladı. … [el-Melikü'l-E]şref Mûsâ'dan aldığı kuvvetler Kökböri tarafından hezimete uğratılıp Musul'a kadar takip edildi.»
- TDV savaşı doğruluyor ama **yer vermiyor**. "Zap" adı TDV'de yalnızca 1186 ve 1220 bağlamlarında geçiyor (1220'de «el-Melikü'l-Eşref'in Zap nehri kıyısındaki karargâhında yapılan görüşmeler»). TDV KÖKBÖRİ maddesinde bu savaş yok. "Musul'a kadar takip edildi" ifadesi savaşın Musul'da **olmadığını** gösteriyor; öneri kesin olarak yanlış.

## Bulamadıklarım
- #26 ve #38'in olay yeri: TDV'de yok (bulunamadı).
- Hârim kasabasının ayrı TDV maddesi (`harim` adresi başka bir maddeye çıkıyor).
- #17'de hangi Paflagonya kalesinin 1214'te alındığı ve #46'daki 1082/1182 sorusu: birincil kaynak okunmadı.
- #25'te Tutuş'un öldüğü gün (TDV yalnızca savaşın başladığı günü veriyor).

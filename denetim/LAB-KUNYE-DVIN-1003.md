# LAB-KUNYE-DVIN-1003: Dvin'in ömrü, Şeddâdî kolları, Eyyûbî Meyyâfârikîn künye taslağı

- Tarih: 2026-10-01 · Makine: EMRE (LAB) · Dal: `lab-odak-1003`
- Koordinatörün sırası: ② Dvin'in terk tarihi · ③ Şeddâdî kolları (kol ayrımı mı, çelişki mi?) · ④ Eyyûbî künye taslağı · ⑤ "kaydın iddiası kendi kaynağında yok" sayımı.
- **`data/`'ya hiçbir şey yazılmadı.** Künye ve pencere önerileri taslaktır; yazmak koordinatörün işi.

## ② Dvin'in ömrü: ÖLÇÜLDÜ

| Ölçüm | Kaynak (birebir) |
|---|---|
| 640: Müslüman fethi, sonra halife valisinin merkezi | Iranica DVIN (https://www.iranicaonline.org/articles/dvin): «The city was conquered by the Muslims on 17 Šawwāl 19/6 October 640…» |
| 951: Şeddâdî kuruluşu | TDV ŞEDDÂDÎLER: «Muhammed b. Şeddâd … Dvin'i ele geçirdi ve Şeddâdîler hânedanını kurdu (951).» |
| 1225: hâlâ zapt edilen bir şehir | TDV GÜRCİSTAN: «Celâleddin Hârizmşah … 622'de (1225) Duvîn'i zaptetti.» |
| 1200 sonrası geç canlanma | Iranica DVIN: «A late flowering took place in the time of the Armenian Zakʿarids (after 1200)…» |
| **1233-1236: kesin çöküş** | Iranica DVIN: «…until the Mongol conquerors again destroyed the city, **between 1233 and 1236**, thus bringing about its definitive decline. Today there is only a small settlement on the site.» |

**Öneri (karar koordinatörün):** Dvin noktasının ömrü **1236'da kapanır**. Kaynak bir aralık veriyor (1233-1236), gün yok; `D210` gereği `1236-01-01` ya da aralığın başı `1233-01-01` seçilebilir. Hangisi seçilirse seçilsin, `ic_not` ile "Iranica: Moğol tahribi 1233-1236 arası, 'definitive decline'" diye beyan edilmeli.
⚠️ "Today there is only a small settlement on the site": Kaynak yerleşimin tamamen bittiğini değil, **şehrin** bittiğini söylüyor. 1236 sonrası için atlasın "şehir yok" mu, "köy düzeyinde sürüyor" mu diyeceği ayrı bir karar. `Değişmez 1` açısından en güvenli yol, noktanın penceresini 1236'da kapatmak.
⇒ **Nokta açmanın ön koşulu karşılandı.** Dvin, Ani, Meyyâfârikîn ve Harran ile birlikte listede kalabilir.

## ③ Şeddâdî kolları: ÇELİŞKİ DEĞİL, KOL AYRIMI

### ① TDV'nin cümlesi Dvin'i hangi kola atfediyor?
Cümlenin tam bağlamı (TDV ŞEDDÂDÎLER):
> «…Savtegin'in Arrân'ı zaptetmesi üzerine (468/1075-76) bölge Selçuklu idaresine girdi, **böylece Şeddâdîler'in Gence kolu sona erdi.** Sultan Melikşah'ın ölümünden (485/1092) sonra … Doğu Anadolu'da ve Kafkaslar bölgesinde Gürcü tehlikesi baş gösterdi. **Ani ve bu sırada Şeddâdîler'e bağlı olduğu anlaşılan Dvin** mahallî beyliklerle Gürcüler'in hedefi haline geldi. … Ancak Şeddâdîler 1105 yılına kadar şehri ellerinde tuttular. Kızılarslan'ın halefi Togan Arslan 512'de (1118) tekrar Dvin'e saldırdı ve **Menûçihr'i** öldürerek şehri topraklarına kattı. Menûçihr'in yerine oğlu Ebü'l-Esvâr II. Şâvur geçti…»

- Cümle **Gence kolunun 1075'te bittiğini söyledikten sonra** geliyor ve Dvin'i **Ani ile birlikte** anıyor. 1118'de Dvin'de öldürülen Menûçihr'in halefi Ebü'l-Esvâr II. Şâvur, Ani kolunun hükümdarı (aynı madde: «Selçuklu vasalı sıfatıyla Ani'de elli dört yıl hüküm süren Menûçihr»).
- Iranica SHADDADIDS de Dvin'i Menûçihr'in (Ani) döneminde anıyor: «…Manučehr's brother was killed fighting against the Saljuq chief Qezel. Since Qezel had also attempted to seize Dvin, it seems that the latter city was still at least sometimes under Shaddadid control…»
- ⇒ **1075-1105 (ve muhtemelen 1118'e kadar) Dvin'i tutan kol: Ani kolu.**
- ⚠️ TDV'nin iç gerilimi: Aynı paragraf hem «1105 yılına kadar tuttular» hem «Togan Arslan 512'de (1118) **tekrar** Dvin'e saldırdı ve Menûçihr'i öldürerek şehri topraklarına kattı» diyor. 1105-1118 arasında Dvin'in kimde olduğu **ölçülemedi** (Iranica da «at least sometimes» diyerek ihtiyatlı).

### ② devletler.js'de Dvin'i tutan kol için ayrı bir künye var mı?
devletler.js node ile yüklendi ve `sedd` ile `Dvin/Duvîn` için tarandı: **yalnızca iki Şeddâdî künyesi var**:
- `seddadiler-gence` · f 951-01-01 · t 1075-01-01 · `baskent: "Dvin, 971'den Gence"` · `ic_not_t`: TDV 468/1075-76 ve Iranica «Sav Tegin, who seized the region by force from Fażlun in 1075, ending the dynasty's reign».
- `seddadiler-ani` · f 1064-01-01 · t 1175-01-01.
- Dvin'e ait üçüncü bir künye **yok**.

### ③ 1075 hangi olay?
TDV: «Savtegin'in Arrân'ı zaptetmesi üzerine (468/1075-76) bölge Selçuklu idaresine girdi, böylece Şeddâdîler'in Gence kolu sona erdi.» ⇒ **1075 Gence kolunun sonu. `seddadiler-gence`'nin `t:` değeri DOĞRU; uzatılmamalı.** Uzatılırsa 30 yıl boyunca var olmayan bir Gence emirliği haritada yaşar.

### Hüküm önerisi
- **Sınıf: ② ya da hiçbiri.** Dvin'in 1075-1105 sahibi zaten var olan bir künye: `seddadiler-ani` (1064→1175). Yeni künye ve `t:` değişikliği **gerekmiyor**. Yapılacak tek şey, Dvin noktasının sahiplik zincirinde 1075-1105 aralığına `seddadiler-ani` yazmak. Bu, nokta dosyasındaki benim "`seddadiler-gence` ⚠️" satırımın düzeltmesidir.
- 1105-1118: ölçülemedi. TDV'deki gerilim nedeniyle bu aralık "sahibi ölçülemedi" diye beyan edilmeli ya da (koordinatör kararıyla) `seddadiler-ani` 1118'e kadar uzatılmalı. Kaynak ikisini de desteklemiyor.

## ④ Künye taslağı: Meyyâfârikîn Eyyûbîleri

TDV EYYÛBÎLER'in hükümdar listesinde bu kol **ayrı bir başlık** olarak geçiyor:
> «4. **Meyyâfârikīn, Cebel ve Sincar Kolu (Diyarbekir)** I. el-Melikü'n-Nâsır Selâhaddin 581 (1185) · I. el-Melikü'l-Âdil Seyfeddin 591 (1195) · el-Melikü'l-Evhad Necmeddin Eyyûb 596 (1200) · I. el-Melikü'l-Eşref Muzafferüddin 607 (1210) · el-Melikü'l-Muzaffer Şehâbeddin 617 (1220) · II. el-Melikü'l-Kâmil Nâsıreddin 642-658 (1244-1260)»

Taslak (devletler.js üslubunda; mevcut emsaller `eyyubi-halep`, `eyyubi-hama`, `eyyubi-hisnikeyfa`):
```
id      : "eyyubi-meyyafarikin"
ad      : "Meyyâfârikîn Eyyûbîleri (Diyarbekir kolu)"
tur     : "emirlik"            ← emsallerdeki tur değeriyle karşılaştırılmalı (ölçmedim)
bolge   : ölçülemedi           ← emsallerin bolge değeri okunup aynısı verilmeli
f       : "1185-01-01"   ic_not_f: TDV EYYÛBÎLER listesi «581 (1185)»; TDV MEYYÂFÂRİKĪN
                         «Meyyâfârikīn, 581'de (1185) Selâhaddîn-i Eyyûbî tarafından … ele geçirildi». Gün yok (D210).
t       : "1260-01-01"   ic_not_t: TDV EYYÛBÎLER «642-658 (1244-1260)»; TDV MEYYÂFÂRİKĪN
                         «Eyyûbîler 658 (1260) yılına kadar Meyyâfârikīn'ı ellerinde tuttular»;
                         TDV EYYÛBÎLER «Hülâgû … ertesi yıl da [1259] Meyyâfârikīn'ı ve el-Cezîre
                         bölgesini ele geçirmişti». ⚠️ 1259 ile 1260 arasında gerilim var; teslim 1260.
ozet    : TDV EYYÛBÎLER: «Âdil'in üçüncü oğlu el-Melikü'l-Eşref Mûsâ'ya ise el-Cezîre bölgesi
          verildi.» · «el-Cezîre-Ahlat'ta hükümdar olan Eşref başarılı bir siyaset takip ederek…»
```

**Kapsadığı yerleşimler (ölçülen aralıklar):**

| Yerleşim | Aralık | Dayanak |
|---|---|---|
| Meyyâfârikîn | 1185-1260 (1191'de kısa bir Artuklu ara dönemi) | TDV MEYYÂFÂRİKĪN: «Artukoğlu Yavlak Arslan 587'de (1191) kısa bir müddet için şehri Eyyûbîler'den geri aldı. Eyyûbîler 658 (1260) yılına kadar…» |
| Ahlat | 1207/08-1230 | TDV AHLAT: «…şehir Eyyûbîler'den el-Melikü'l-Evhad b. Âdil'in eline geçti (604/1207-1208)» → «Nisan 1230'da Ahlat zaptedildi» (Hârizmşah). Evhad ve Eşref bu kolun listesinde. |
| Harran | **ölçülemedi** | Harran 1182'den beri Eyyûbî (TDV HARRAN), ama hangi kola bağlı olduğu yazılmıyor. el-Cezîre Eşref'e verildiği için bu kol olabilir, ancak bu bir çıkarım. 1236-1260 arası da ölçülemedi. |

**`harita:` gerekli mi?** Önerim: **Hayır, başlangıçta renksiz künye** (`boya_gerekli: false` ya da §1.5'teki renksiz künye kovası). Gerekçe: Bu künyenin acil işlevi, yeni açılacak Meyyâfârikîn noktasının 1185-1260 sahipliğini (`d:`) karşılamak (`Değişmez 1`). Bölge poligonu için kaynak ölçülmedi. Boya borcu açmak ayrı bir karar.
⚠️ Ayrıca `eyyubi` (Mısır kolu) `t: 1250-04-30` olarak duruyor ve TDV listesi bunu destekliyor («II. el-Melikü'l-Eşref Muzafferüddin 648-650 (1250-1252)» nominal; Memlük geçişi 1250). **`eyyubi` uzatılmamalı** (sınıf ①: ardıl/kardeş künye).

## ⑤ "Kaydın iddiası kendi kaynağında yok" sayımı

| Liste | Bulunamadı | Bu sınıf | Sonuç |
|---|---|---|---|
| ANADOLU (71) | 5 → yeniden ölçümden sonra 4 | **0** | #42 bu sınıfta sanılmıştı: **YANLIŞ**. TDV iddiayı veriyor (aşağıda). #19'un yeri de kaynakta var (Levunion). |

- **#42:** TDV DÂNİŞMENDLİLER: «…II. Kılıcarslan Yağıbasan üzerine yürüdüyse de Bizans kuvvetleri tarafından desteklenen Dânişmendli ordusu önünde mağlûp oldu (1162).» Kayıt **doğrulandı**; yalnızca yer yok.
- **Bu sınıfın bugünkü tek gerçek örneği** `b` alanı için değil, `yer` alanı için: YER-DAYANAK-1003'teki #4, #21, #31, #46 ve ANADOLU #9. **`b` alanının kendi kaynağında olmadığı bir kayıt bugün ölçülmedi.**
- 🔴 **Sayının dürüst hâli:** "Kaynağında yok" sınıfı için yeni bir denetim açılacaksa, bugünkü gerekçe **`b` değil `yer` alanı** (5 kayıt + #9 = 6). `b` için gerekçe **0**. Benim yanlış #42 ölçümüm bu sayıyı 1 gösterecekti.

## 🔴 Bugünkü üçüncü `head` hatam ve yöntem düzeltmesi
#34 (YER-DAYANAK), #19 ve #42 (ANADOLU) hatalarının üçü de aynı kökten geliyor: `grep … | head -N`. Pencerenin dışında kalan eşleşme "yok" sayıldı.
**Düzeltme:** Bu dosyadan itibaren "kaynakta yok" hükmü yalnızca iki şeyle verilir: (1) **eşleşme sayısı** (`grep -c` / Python `finditer` ile, sınırsız) ve (2) olay cümlesinin ±450 karakterlik **tam bağlamı**. Bugünkü bütün "yer verilmiyor" hükümleri bu yöntemle yeniden ölçüldü (ANADOLU-1003 düzeltme notunda listeli). Değişen yalnızca #19 ve #42.

## Bulamadıklarım
- Dvin 1105-1118 arasındaki sahip.
- Harran'ın hangi Eyyûbî koluna bağlı olduğu ve 1236-1260 arası sahibi.
- `eyyubi-meyyafarikin` için `tur` ve `bolge` değerleri (emsal künyeler okunmadı).

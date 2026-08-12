# DÖRT ALTYAPI MADDESİ — projenin taşıyıcı direkleri

> 🔴 **Emre'nin 11 Ağustos 2026 tarihli tanımı. BİREBİR ALINTI — özetlenmez.**
> Sebebi ölçülmüş bir derstir: *"kullanıcının cümlesi bir TALEP değil, bir
> ÖLÇÜT taşıyabilir — ve özet onu kaybeder."* Aşağıdaki dört maddede en az
> beş ayrı ölçüt gömülü ve hiçbiri başlıklarda görünmüyor.

> Bu dosya, 11 Ağustos sabahı cevapsız kalan *"üç maddeli altyapı hangisi"*
> sorusunun da cevabıdır: **üç değil dört madde**, ve tanımı Emre yaptı.

---

## ① COĞRAFYA / TOPOGRAFYA — engel hiyerarşisiyle

> *"tüm dünyadaki coğrafya topografya verileri dağ tepe nehir göl deniz çöl
> bozkır vahşi orman bataklık vesaire alanları bölgenin önem sırası ile
> korele bir şekilde tamamlamaya devam etmeliyiz ve hangi aşamada olduğumuzu
> tespit edelim.*
>
> *bu coğrafi yerleri insana engel teşkil eden dolayısı ile ordulara engel
> teşkil eden **dağ tepe sıradağ yarık kanyon nehir ırmak göl deniz en önce
> olmak üzere**, **çöl bozkır vahşi orman bataklık gibi verilerde ikinci
> önemde olmak üzere**, en engel teşkil etmeyen **ova plato yayla** verisi
> kalıyor. bozkır da aslında pek engel değil. **askeri literatürü de
> araştıralım.** tüm bu coğrafi topografik verileri haritamıza entegre
> etmeliyiz. **en önemli bölgede kalitesi yüksek ve önem azaldıkça
> kaliteden de ödün verir şekilde** işi ne kadar en iyiye taşırsak o kadar
> iyi."*

**Gömülü ölçütler:** ① engel = *insana*, dolayısıyla *orduya* engel ·
② üç kademe: **mutlak engel → yavaşlatıcı → engelsiz** · ③ bozkır ikinci
kademede yazılı ama Emre onu **ayrıca istisna tutuyor** ·
④ kalite **bölgenin önemiyle korele** — her yerde aynı kalite İSTENMİYOR ·
⑤ askerî literatür bir kaynak olarak **açıkça** isteniyor.

### Bugünkü durum — ölçüldü (11 Ağustos 2026)

```
🟢 VAR   kıyı çizgisi (motor_kara + ne_10m_land)     kodda 82 atıf
🟢 VAR   nehir (ne_10m_rivers, 7,3 MB)               kodda 41 atıf · eşik 5.0
🟢 VAR   göl  (ne_10m_lakes, 5,0 MB)                 kodda 11 atıf
🟡 KISMÎ sırt (ne_10m_geography_regions_polys)       kodda 20 atıf
🔴 YOK   yükseklik / eğim verisi                     "dağ" kodda HİÇ GEÇMİYOR
🔴 YOK   kanyon · yarık                              kodda HİÇ GEÇMİYOR
🔴 YOK   plato                                       kodda HİÇ GEÇMİYOR
🔴 YOK   vahşi orman · bataklık KATMANI              "orman" 2 · "bataklık" 1 atıf
⚠️ ÖLÇÜLMEDİ  "çöl" (27 atıf) ve "bozkır" (7 atıf) kodda geçiyor ama bunlar
             ENGEL KATMANI mı, yoksa yalnız çöl yarıçap tavanı mı —
             BAKILMADI. "Geçiyor" ile "engel olarak kullanılıyor" ayrı şey.
```

🔴 **Ve zaten ölçülmüş bir teşhis var:** Osmanlı çekirdeğinde iç sınırın
**%31,8'i düz**, ve düz kalanın **%40,3'ünün yanında hiç doğal hat YOK.**
⇒ *"Cetvel kusuru SÜZGEÇ değil VERİ YOKLUĞU."* Yani ①'in çaresi eşik
ayarlamak değil, **yeni hat verisi indirmek** — ve o internet kotası +
disk kararıdır, Emre'nin onayına bağlıdır.

---

## ② 1281 YERLEŞİMLERİ — ve "4. sınıfa bölge verilmez" kuralı

> *"1281 tarihi itibari ile tüm yerleşim yerlerini tüm yerleştirme
> işaretleme ve verimize alma işi yapılmalı.*
>
> *bu yerleşim yerlerinin özelliği ise şudur: **askeri siyasi idari olarak
> bir merkez olması** ve dolayısı ile ama küçük ama büyük **belli bir
> bölgeye hakim olması** önemlidir. işaretlenecek yerler belli bir bölgeye
> hakim olan askeri idari siyasi açıdan bölgenin merkezi olan yerler olmalı.
> bu merkeze bağlı olan ve tarihi kaynaklarda geçse de askeri açıdan bu
> merkezin edinilmesi ile tüm bölgenin düşmüş sayılacağı şekilde **diğer
> 4. sınıf yerleşim yerlerine bölge atamamıza gerek yok.** bu diğer
> yerleşim yerleri bu büyük merkez ile birlikte hareket eder. bu bölgenin
> içinde yer alır.*
>
> ***örnek olay:** istanbulu alan yeşilköyü de almış sayılır hatta çoğu
> durumda çatalcayı da almış sayılır tarihi olarak. **ama buna tek bir
> istisna var**: eğer tarihi olaylarda bu 4. derece yerleşimler bir mücadele
> alanı olarak görülüyor ise bunlara ancak o zaman bölge ve önem atfedilir.
> mesela 93 harbinde rus ordusu yeşilköye kadar ilerledi ama istanbula
> girmedi. mesela balkan savaşlarında bulgarlar çatalcaya dayandı. bu tür
> eğer detay bilgi tarihi kaynaklarda geçiyor ise o zaman bu 4. sınıf
> yerleşim yerlerinin detayı 3. veya 1. sınıf bölgelerin önem detayı ile
> aynı seviyeye gelir. ama yeşilköy tarihi kaynaklarda geçiyor diye bu
> istanbulun bir semti banliyösü olan yerleşime bölge atfedecek halimiz
> yok. koskoca 3000 yıllık dünyanın en önemli bir kaç şehrinden biri ve
> osmanlının başkentinin bölgesini yeşilköye tahsis etmek olamaz. **ama
> sadece o 93 harbinde bunun detayı kronolojik maddeyi açıklamak için
> geçici olarak bölge bölünebilir.**"*

**Gömülü ölçütler:** ① bir nokta *"var"* diye değil, **bölgeye hâkim**
diye işaretlenir · ② 4. sınıf bölge almaz, merkeziyle **birlikte hareket
eder** · ③ 🔴 **TEK İSTİSNA: mücadele alanı olmak.** Kaynakta geçmek
yetmez — *çatışma sahnesi* olmak gerekir · ④ ve istisna **kalıcı değil,
GEÇİCİ** — yalnız o kronoloji maddesini açıklamak için, o tarih aralığında.

📌 ④ tek başına `Madde 4`ün (zaman ayağı) gerekçesidir: geçici bölünme,
**zamanı olmayan bir bölge alanıyla ifade edilemez.**

### Bugünkü durum — ölçüldü

```
toplam nokta        2308        (36 girdi dosyası)
k:1  başkent/eyalet    4
k:2  sancak            58
k:3  kaza/kale        193
k:4  köy/nahiye       474   ← bunlara bölge ATANMAMALI
k:0  KADEMESİZ      1579   ← %68,4'ünde kademe HİÇ YAZILMAMIŞ
⇒ kademe yazılmış oran: %31,6
```
🔴 **Madde 2 ve 3 bu %31,6'nın üstüne kurulu.** Kademe yazılmadan
*"4. sınıfa bölge verme"* kuralı **uygulanamaz** — makine hangi noktanın
4. sınıf olduğunu bilmiyor.

---

## ③ BÖLGE PAYLAŞIMI — sınırlar coğrafyaya dayanır

> *"tüm yerleşim yerlerine bölge atfedeceğiz ve bu bölgeler 1.2.3. sınıf
> yerleşim yerleri coğrafyayı kendi aralarında paylaşacaklar **fakat
> sınırlar coğrafi topografik prensiplere göre dağıtılacak.** dağa nehire
> denize göle dayanan sınırlar yerleşim yerleri arasındaki bölgeleri
> ayırmakda kullanılacak. **bunun için askeri ya da coğrafi doktrin var ise
> onu da kullanabiliriz** — sürtünme, insan yürümesi, askeri engel açısından
> geçen gün konuştuğumuz doktrinler vardı."*

**Gömülü ölçütler:** ① bölgeyi **yalnız 1-2-3. sınıf** paylaşır ·
② sınır *"ortadan geçen çizgi"* değil, **doğal hatta yaslanan** çizgi ·
③ ölçüt mesafe değil **sürtünme / yürüme maliyeti** — yani cost-distance.

📌 Bu, `YAPILACAKLAR` listesindeki *"Cost-distance prototipi — Voronoi'nin
topografik hâli"* kaleminin ta kendisi ve ①'in çıktısını girdi olarak
kullanır. **③, ①'siz yapılamaz.**

---

## ④ BÖLGELERİN ZAMANLA BÖLÜNMESİ

> *"bir yerleşim yerine verilen bölgeler zaman çizelgesi ilerledikçe yeni
> tarih sahnesine çıkan şehirlerden dolayı bölünebilir. iki tarihi yerleşim
> kendi aralarındaki bölgeyi topografik verilere göre bölmüş iken daha
> sonra zaman çizelgesi ilerledikçe yeni çıkan bir yerleşim yeri, bu ikisinin
> arasında kurulan idari askeri siyasi bir yerleşim merkezi ve **tarih
> sahnesinde adı geçer geçmez** diğer iki tarihi merkez arasındaki bölgeyi
> yeniden bölüşüp biraz oradan biraz buradan toprak alarak kendi bölgesini
> oluşturur. **tam tersi ortadan kalkan şehirler var ise onlar da kendi
> bölgelerini etraflarındaki aktif şehirlere devrederler.**"*

**Gömülü ölçütler:** ① tetikleyici **"tarih sahnesinde adı geçmek"** —
kuruluş değil, **kayda girmek** · ② yeni bölge **komşulardan pay alarak**
doğar, boşluktan değil · ③ 🔴 **ters yön de kural**: sönen şehir bölgesini
komşulara **devreder** (boşluk bırakmaz).

### Bugünkü durum — ölçüldü

```
m:  (zamansız merkez bağı) olan nokta  : 661
kd: (ZAMANLI kademe + merkez) olan     :   0
⇒ ZAMAN AYAĞI HİÇ YOK — %0
```
🔴 Ve bu, `CLAUDE.md`de **`Değişmez 3`** diye zaten duran çözülmemiş
soruna birebir denk düşüyor: *"359 yerleşim-tarih çiftinde yerleşim ile
bağlı olduğu merkez farklı devletlerin elinde."* Sebebi de yazılı:
**`m:` alanının zaman boyutu yok.**
🟢 Ve çaresi de **zaten tasarlanmış**: `VERI-YAPISI.md` içinde
`kd:[{f,t,k,m}]` — kademeyi *ve* bağlı merkezi birlikte zamanlı yapıyor.
**Tasarım var, veri yok.**

---

## Toplu tablo — bugün nerede duruyoruz

| # | madde | ölçülen | dayandığı |
|---|---|---|---|
| ① | topografya | kıyı/nehir/göl **var** · yükseklik-kanyon-plato-orman-bataklık **yok** · çöl-bozkır **ölçülmedi** | — |
| ② | 1281 yerleşimleri | kademe **%31,6** (1579 nokta kademesiz) | ① |
| ③ | bölge paylaşımı | cost-distance **prototip yok** | ① + ② |
| ④ | bölgenin zaman ayağı | `kd:` **%0** (tasarım var, veri yok) | ② + ③ |

🔴 **Zincir tek yönlü: ④ ← ③ ← ② ← ①.** Yani en alttaki madde en
kritiği, ve o **①**. Ama ①'in kalan işi **veri indirmek** — yani token
değil, **internet kotası ve disk** meselesi.

⚠️ Bu tablo **kaba bir ilk ölçümdür**, tam denetim değil. Her satırın
kendi ölçüm aleti yazılmalı ve `durum_tablosu.py` gibi **üretilmeli** —
elle yazılan tablo bayatlar (`CLAUDE.md §1.5`, üç kez yaşandı).

---

# ⑤ KORİDOR AĞI — beşinci madde (Emre, 12 Ağustos 2026)

> *"Ayrıca mümkünse tüm koridorlar ağı ve yerleşim noktalarını da tüm dünya
> nezdinde ve bölgeleri ile birlikte benim 4 altyapı maddesi ile birlikte
> yapmamız lazım. **5. madde de bu koridorlar ağı.** Yani bildiğin örümcek
> ağı yahut balık ağı gibi **iplikler ve ipliklerin ortasında boğum
> noktalardan** oluşuyor."*

📌 Belgenin adı artık eksik: **DÖRT değil BEŞ madde.** Dosya adı `git`
geçmişini bozmamak için korundu; sayı burada düzeltildi.

## 🔴 YENİ OLAN: İKİ CİNS DÜĞÜM

Önceki iki ifadede (iplik ağı · koridor ağı) düğüm = **yerleşim** sanılıyordu.
Bu cümle onu ayırıyor: *"ipliklerin **ortasında** boğum noktalar."*

```
YERLEŞİM DÜĞÜMÜ     şehir · kasaba · kale       SAHİBİ VAR → BOYANIR
BOĞUM DÜĞÜMÜ        geçit · geçit-boğaz · geçiş yeri · köprü ·
                    yol kavşağı · menzil · derbend
                    ⇒ yerleşim OLMAYABİLİR ama KORİDORU DENETLER
```

⇒ Boğum, doktrindeki **choke point**'in ta kendisi. Ve tarihî karşılığı
belgeli bir kurumdur: **derbend teşkilatı** (geçit bekçiliği), **menzilhane**
(konak), **köprü**, **geçit**, **boğaz**.

🟢 Ve bu ayrım bir kusuru da açıklıyor: bugün bir geçidi haritada tutmanın
tek yolu oraya **yerleşim noktası koymaktı** — ve o nokta hemen bir **petek
sahibi** oluyordu, yani bir geçit **toprak boyuyordu.** Boğum düğümü bunu
çözer: *koridoru denetler, alan boyamaz.*

⚠️ **Ve bu, Emre'nin kendi sınırıyla uyumlu** (Boğdan mesajı):
*"sırf sınırı keskinleştireceğiz diye 4. sınıf yerlere bölge atfetmeyelim."*
Boğum düğümü tam olarak **bölge atfetmeden** haritaya girmenin yoludur.

## Öteki dört maddeyle ilişkisi — ⑤ onları BAĞLAR, tekrar etmez

```
① TOPOGRAFYA   ipliğin AĞIRLIĞINI verir (eğim · nehir · çöl)
               🔴 ama ⑤ ①'i BEKLEMEK ZORUNDA DEĞİL — ağırlık tarihî
                  kaynaktan da gelebilir (konak/menzil sayısı).
                  Bu bir HİPOTEZ, sınanmadı. MESAFE-VE-SURTUNME §⑧.
② 1281 YERLEŞİM  ağın YERLEŞİM düğümleri
               ⇒ ⑤ buna BOĞUM düğümlerini ekliyor — YENİ veri sınıfı
③ BÖLGE PAYI   "kardeş payı" artık alan üzerinde değil KENAR üzerinde
               hesaplanır ⇒ ③ün matematiği ⑤te yaşıyor
④ ZAMAN AYAĞI  🔴 KORİDOR DA ZAMANLA DEĞİŞİR — yol açılır, köprü yıkılır,
               geçit kapanır. Yani ⑤ de ④ün zaman alanına muhtaç.
               (Kenarın da `f`/`t`si olmalı.)
```

## Kapsam — Emre: "tüm dünya nezdinde"

⚠️ Bu, `ONCELIK.md`nin **çöl seyyahı ilkesiyle** çelişebilir ve
**çelişkiyi bildirmek koordinatörün borcudur:** bugün 2362 nokta var ve
harita penceresi dünyanın bir kısmını kapsıyor. *"Tüm dünya"* koridor ağı,
bugünkü nokta yoğunluğunun kaldıramayacağı bir hedef olabilir.
⇒ **Kademe önerisi (Emre onaylayacak):** önce Osmanlı kuşağı (kolların
belgeli olduğu yer), sonra halka halka. Ağ, noktaların gerisinden gelir.

## ⚠️ HİÇBİRİ ÖLÇÜLMEDİ — açıkça

```
· boğum düğümünün VERİ ŞEMASI                          yok
· kenarın şeması (uç · ağırlık · f/t · kalınlık)        yok
· 2362 nokta için kaç kenar doğar                       hesaplanmadı
· menzil/konak verisinin TDV'de sayıyla bulunup         SINANMADI
  bulunmadığı                                            (ucuz sınav)
· ağın petek motorunu değiştirip değiştirmeyeceği       karar YOK
· "tüm dünya" kapsamının maliyeti                        ölçülmedi
```
🔴 **Bilinmeden kod yazılmayacak.** Bu bölüm bir TASARIM değil, bir
**tasarım şartnamesidir.**

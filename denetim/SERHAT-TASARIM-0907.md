# SERHAT — `S` NEREYE YAZILMALI?  Üç model, ÖLÇÜLEREK karşılaştırıldı

```
OTURUM  SERHAT · 7 Eylül 2026
SORU    Emre: "k1 k2 k3 k4'e ek olarak serhat şehirlerini de tespit
        edelim, bunun adına da S diyelim … sınır şehirlerini ÇİFT
        olarak tutmalı … 1) hangi iki devlet 2) hangi tarih
        3) çifter çifter sınır yerleşimleri A-B C-D E-F"
KISIT   koşu 7b sürüyor · data/*.js ve arac/*.py DONUK
        ⇒ hiçbir şey koda yazılmadı; bu bir ÖLÇÜM ve TASARIM raporudur
```

> 🔴 **KARAR EMRE'NİN.** Bu belge bir hüküm değil, üç modelin **ölçülmüş**
> karşılaştırmasıdır. Aşağıdaki her satırın arkasında bir koşu var;
> ölçmediğim yere **`ölçmedim`** yazdım.

---

## ⓪ ÖNCE: EMRE'NİN İKİ CÜMLESİ AYNI ŞEYİ SÖYLEMİYOR

```
① "k1 k2 k3 k4'e EK OLARAK … buna da S diyelim"   → bir KADEME değeri
② "sınır şehirlerini ÇİFT olarak tutmalı,          → bir İLİŞKİ tablosu
    hangi iki devlet · hangi tarih · A-B C-D"
```
🟢 **Ve ikincisi birincisini içeriyor:** bir ilişki tablosu varsa `S`
damgası ondan **türetilir** (bir nokta herhangi bir çiftte görünüyorsa
o tarihte serhattır). Tersi doğru değil — bir `S` damgasından çift
tablosu türetilemez, çünkü *"kiminle"* bilgisi yoktur.

---

## ① ÜÇ MODEL

```
MODEL A   k: alanına yazılır          k:"S"          ← ①. cümlenin harfi
MODEL B   AYRI bir skaler alan        serhat:true    ← k:'yı korur
MODEL C   İLİŞKİ TABLOSU              {a,b,d1,d2,f,t} ← ②. cümlenin harfi
```

---

## ② KARŞILAŞTIRMA — dört ölçüt, hepsi ÖLÇÜLDÜ

| ölçüt | MODEL A `k:"S"` | MODEL B `serhat:true` | MODEL C ilişki tablosu |
|---|---|---|---|
| **zaman boyutu** | 🔴 YOK | 🔴 YOK | 🟢 `f`/`t` taşır |
| **"kiminle" bilgisi** | 🔴 YOK | 🔴 YOK | 🟢 `d1`/`d2` |
| **`Değişmez 3` kusurunu tekrar ediyor mu** | 🔴 EVET | 🟡 kısmen | 🟢 HAYIR |
| **motor okuyabilir mi** | 🔴 BOZUYOR (ölçüldü) | 🟢 dokunmaz | 🟢 dokunmaz |
| **arayüz çizebilir mi** | 🔴 ÇÖKÜYOR (ölçüldü) | 🟢 dokunmaz | 🟢 çizilebilir |
| **nehir eksenini taşır mı** | 🔴 hayır | 🔴 hayır | 🟢 `tur`/`nehir` |
| **ayrıca saklanıyor mu** | — | 🔴 evet (bayatlar) | 🟢 tek kaynak |

---

## ③ 🔴 ZAMAN — kararı tek başına belirleyen ölçüm

`k:` ve `serhat:` birer **skalerdir**: tek değer, zaman boyutu yok.
Serhat zamanla değişiyorsa ikisi de onu **ifade edemez.** Veriye soruldu
(`ARAC-SERHAT-ZAMAN-0907.py`, yedi kesit, Gabriel ölçütü):

```
kesit        sahnede   SERHAT
1400-06-15     2406     1297  (%53,9)
1500-06-15     2461     1207  (%49,0)
1600-06-15     2613     1165  (%44,6)
1700-06-15     2890     1265  (%43,8)
1800-06-15     3112     1317  (%42,3)
1900-06-15     3604     1418  (%39,3)
1923-10-28     3630     1454  (%40,1)
────────────────────────────────────────
🔴 DURUM DEĞİŞTİREN NOKTA   1672 / 3648  (%45,8)
```

⇒ **3648 noktanın 1672'si bazı dönemlerde serhat, bazılarında iç.**
Tek bir `S` damgası bu 1672 nokta için **yanlış olur** — hangi değeri
yazarsak yazalım.
⚠️ Ve bu bir **ALT SINIRDIR**: yalnız yedi kesit örneklendi, ara
dönemlerdeki değişimler görünmüyor.

### 🟢 Emre'nin ilkesi DOĞRULANDI — ama örneği kısmen çürüdü
```
kesit:       1400  1500  1600  1700  1800  1900  1923
Edirne       I     I     I     I     I     I     S
Belgrad      S     S     I     S     S     S     S     ← ilkenin CANLI hâli
Budin        I     I     S     I     I     I     I
İstanbul     S     I     I     I     I     I     I
```
Emre *"Edirne 1365-1453 serhat · 1453-1878 iç · 1878- serhat"* dedi.
Ölçüm Edirne'yi 1400'de **iç** buldu — 1393'te Bulgaristan, 1394'te
Teselya alınınca cephe Edirne'yi geçmişti; yani *"1365-1453"* aralığının
tamamı için serhat değil.
🟢 **Ama ilkenin kendisi başka bir şehirde birebir çıktı:** Belgrad
`S S I S S S S` — 1521'de alınıp derinlere gömülüyor, sonra cephe geri
geliyor. **Emre'nin tarif ettiği desen gerçek; örnek şehri yanlış.**

🔴 **VE BİR SINIR, GİZLEMİYORUM:** serhat, **nokta kümesinden** türetiliyor.
Karşı yakada nokta yoksa çift oluşmaz ve şehir *"iç"* görünür. Yani
`Edirne 1900 → I` tarihî bir hüküm **değil**, o kesitte Edirne'nin
Gabriel komşularının hepsinin aynı sahipte olduğunun ölçümüdür. Seyrek
bölgelerde serhat **eksik** raporlanır.

---

## ④ 🔴 MOTOR VE ARAYÜZ — `k:"S"` ne kırıyor (KOŞTURULDU, iddia değil)

`k:` beş yerde okunuyor ve **beşi de onu bir TAMSAYI KADEMESİ sayıyor**:
```
uret_petek.py:768    if y["k"] in (1, 2)              k1/k2 merkez tespiti
uret_petek.py:780    y["k"] in (3, 4)                 kademe zinciri denetimi
uret_petek.py:1077   TAVAN_KM.get(y.get("k") or 0)    YARIÇAP TAVANI
uret_petek.py:3928   if … or not y["k"]: continue     bolgeler.js üretimi
js/app.js:4753-57    kgruplar = {1:[],2:[],3:[],4:[]} şehirler dizini
```

Bu beş satır çıkarılıp `k:3` ve `k:"S"` ile **koşturuldu**
(`ARAC-SERHAT-KDENEY-0907.js`):

```
🔴 780   kademe zinciri denetimi     k:3 → true      k:"S" → false
🔴 4757  şehirler dizini             k:3 → sorunsuz  k:"S" → TypeError:
                                     Cannot read properties of undefined
                                     (reading 'push')
```
⇒ **Arayüzün şehirler sekmesi ÇÖKÜYOR.** `kgruplar["S"]` tanımsız.

Ve tavan kırılması — kademeye göre değişiyor:
```
k1  700 km → 280 km   (×0,40)   🔴 2,5 KAT DARALIR
k2  420 km → 280 km   (×0,67)   🔴
k3  280 km → 280 km             ⚪ görünmez (k0 ile aynı değer)
k4  140 km → 280 km   (×2,00)   🔴 2 KAT ŞİŞER
```
🟡 **Ve burada bir beklentim çürüdü:** ilk koşuda *"tavan k0'a düşer"*
dedim ve örneğim `k:3`tü — sayı **aynı** çıktı (280 = 280) ve fark
görünmedi. Öteki kademelerde ölçünce ortaya çıktı. *Bir kırılmayı tek
bir örnekle sınamak, onu sınamamaktır.*

📌 **Ve bu tam olarak `CLAUDE.md §3`ün kayıtlı hatasıdır:**
> *"kusur `m:` alanının güncellenmemesi değil, **`m:`nin YANLIŞ EKSENDE
> olması** … Mekân ekseni ile konu ekseni birbirine karışıyor ve
> **İKİSİ DE BOZULUYOR**."*

`k:` bir **hiyerarşi düzeyi**, serhat bir **konum ilişkisi**. Aynı alana
konursa ikisi de bozulur — ve bu sefer bozulma **ölçüldü**, tahmin değil.

---

## ⑤ MODEL C — ne saklanır, ne türetilir

```js
// data/sinir_ciftleri.js  (TASLAK — koşu bitmeden YAZILMAZ)
{ a:"Rusçuk", b:"Yergöğü (Giurgiu)",
  d1:"bulgaristan-kralligi", d2:"romanya-kralligi",
  f:"1913-08-10", t:"1923-10-29",
  tur:"nehir", nehir:"Danube",
  kaynak:"…" }
```
🟢 **`S` damgası SAKLANMAZ, TÜRETİLİR:** *bir nokta, verilen tarihte
herhangi bir çiftte görünüyorsa serhattır.* Böylece
`CLAUDE.md §11`in *"bir bilgi iki yerde durursa biri güncellenince
öteki bayatlar"* tuzağı **hiç doğmaz.**

🟢 Ve Emre'nin üç isteği birebir karşılanır:
```
1) hangi iki devletin sınırı   → d1, d2
2) hangi tarih                 → f, t
3) çifter çifter A-B C-D E-F   → a, b
```
🟢 Nehir ekseni de aynı kayda sığar (`tur`, `nehir`) — Model A ve B'de
sığacak yer **yok**.

---

## ⑥ BUGÜN ÖLÇÜLEN TABAN — Model C ne kadar büyük

```
kesit 1923-10-28 · sahnedeki nokta 3630 · kimlik 106
GABRIEL kenarı            6920
🔴 SINIR ÇİFTİ            1286      ← Emre'nin istediği "A-B C-D" listesi
   kimlik çifti            228
   nehre yaslanan          549  (%42,7)   🟢 Emre'nin sezgisi
   kara sınırı             737
```
### 🔴 1286 HAM SAYIDIR — kovalar ayrıldı (`SERHAT-KOVA-0907.md`)
```
TOPLAM sınır çifti (Gabriel)                 1286
🔴 ① ARTEFAKT — aynı devletin iki kimliği      48   (OSMANLI↔tbmm 35 · rusya↔sovyet 13)
🔴 ② DENİZ AŞIMI — kara sınırı değil          260
   ⚠️ İKİSİ BİRDEN (kesişim)                    2
🟢 TEMİZ KARA SINIRI ÇİFTİ                    980   (%76,2)
```
**Toplama denetimi:** 1286 − 48 − 260 + 2 = **980** ✓
⚠️ Kesişim **2** çıktı; iki elemeyi ayrı ayrı çıkarsaydım **978** derdim.
Örtüşmeyi ölçmek gerekiyordu.

| sayı | ne demek | nerede kullanılır |
|---|---|---|
| **1286** | Gabriel'in bulduğu her şey | ham ölçüm |
| **1238** | artefaktsız | veri düzeldikten sonra beklenen |
| **980** | 🟢 artefaktsız **VE** kara | **Emre'nin "A-B C-D" listesi** |
| **260** | deniz aşan | ayrı kategori — **silinmez, AYRILIR** |

🔴 **Deniz çiftleri silinmemeli.** Bir deniz sınırı da sınırdır
(Çanakkale · Malaka · Fin Körfezi); yalnız *"iki yerleşimin arasından
geçen bir çizgi"* olarak çizilemez. ⇒ `tur:"deniz"` diye ayrı bir kova —
**Model C'nin `tur` alanının zaten öngördüğü şey.**

⚪ **ÖLÇMEDİM:** 1281-1923'ün tamamında toplam kaç çift olacağını
ölçmedim — yalnız 1923 kesitini ve yedi örnek kesiti ölçtüm. Tablo
büyüklüğü **bilinmiyor**.

### 🟢 VE EMRE'NİN 2. ŞARTI ("hangi tarih") ARTIK ÇIKARILDI
`ARAC-SERHAT-TARIH-0907.py` — türetme değil **kesişim**: `a`nın aktif
sahiplik dönemi `[f1,t1)`, `b`ninki `[f2,t2)` ⇒ çift ancak
`[max(f1,f2), min(t1,t2))` aralığında **o iki sahiple** vardır.
```
1286 çiftin 1286'sı için pencere ÇIKARILDI · çıkarılamayan 0
pencere uzunluğu (yıl): min 0,27 · %25 5,0 · ORTANCA 21,4 · %75 62,6 · max 642,8
```
Emre'nin üç şartı, üçü bir arada:
```
Rusçuk ↔ Yergöğü (Giurgiu)
  1) bulgaristan-kralligi ↔ romanya-kralligi
  2) 1908-10-05 → 1923-10-29   (15,1 yıl)
  3) 5,3 km · TUNA
Çirmen ↔ Mustafapaşa (Svilengrad)
  1) yunanistan ↔ bulgaristan-kralligi
  2) 1920-05-14 → 1923-10-29   (3,5 yıl)
  3) 5,2 km · MERİÇ (Evros)
```
⚠️ **ÜST SINIRDIR:** kesişim, çiftin geçerli **olabileceği en geniş**
penceredir. Aradaki bir üçüncü nokta `kur:` ile doğup Gabriel kenarını
koparabilir. Komşuluğun ne zaman kurulup koptuğunu **ölçmedim.**
🔴 Ve bu, Model A/B'nin taşıyamayacağı üçüncü bilgidir: bir skaler
`S`, bu 1286 pencerenin hiçbirini ifade edemez.

---

## ⑦ SEÇMİYORUM — ölçüm ne diyor, karar Emre'nin

> 🔴 Koordinatör (M-3086): *"sen İKİ BİÇİMİ de tarif et ve maliyetlerini
> ÖLÇ, **SEÇME**."* Uyuyorum: aşağıda bir tercih yok, **ölçümün kendisi**
> var. Cümleyi okuyup kararı Emre verir.

**Ölçümün söylediği, tek satırda:**
> Emre'nin ikinci cümlesi (*"çift olarak tutmalı … hangi iki devlet ·
> hangi tarih · A-B C-D"*) birinci cümlesinin (*"buna da S diyelim"*)
> taşıdığı bilgiyi **kapsıyor**; tersi kapsamıyor. Ölçülen fark bu.
> `S` damgası C'de **kaybolmuyor, türetiliyor.**

### 🔴 VE GERÇEK SEÇİM ÜÇ ŞIKLI DEĞİL — «C YA DA HİÇ»

Model B (`serhat:true`) bir orta yol gibi duruyor ve **değil.** `serhat:`
de bir **skalerdir**; `③`teki ölçüm — 3648 noktanın 1672'sinin durum
değiştirmesi — **onu da aynen vurur.** B, A'nın motor/arayüz kırılmasını
önler ama **asıl imkânsızlığı çözmez.**
```
A  k:"S"        skaler  🔴 1672 nokta için yanlış  + motor/arayüz KIRILIR
B  serhat:true  skaler  🔴 1672 nokta için yanlış  · motor/arayüz sağlam
C  ilişki tablosu       🟢 zaman boyutu VAR
```
⇒ **B ucuz bir kaçış değil, aynı imkânsızlığın sessiz hâli.** Gerçek
seçim **C ya da hiç.**
📌 Bu satır koordinatörün uyarısıyla eklendi (M-3087): *"ölçümün A ile
B'yi BİRLİKTE eliyor; yoksa Emre B'yi 'ucuz kaçış' sanabilir."* Ölçüm
bendeydi, **çıkarımı o gördü.**

**Ve fiyat etiketleri — üçü de ölçüldü, hiçbiri yorum değil:**
```
MODEL A  k:"S"       arayüzün şehirler sekmesi ÇÖKER (TypeError, koşturuldu)
                     kademe zinciri denetimi susar · tavan k1'de 2,5 kat
                     daralır, k4'te 2 kat şişer
                     1672 nokta için zaten YANLIŞ (zaman boyutu yok)
MODEL B  serhat:true motor/arayüz BOZULMAZ · ama 1672 nokta için yine
                     yanlış · "kiminle" ve "hangi tarih" taşınamaz
                     ⇒ Emre'nin 3 şartından 1'ini karşılar
MODEL C  ilişki      motor/arayüz BOZULMAZ · Emre'nin 3 şartını da
         tablosu     karşılar · bugün motorun OKUMADIĞI bir katman
                     ⇒ haritayı etkilemesi isteniyorsa yeni okuma
                       noktası gerekir (ÖLÇMEDİM)
```

⚠️ **AMA BİR ŞART:** Model C bugün **motorun okumadığı** bir katmandır.
Motor `k:`yi okuyor, `sinir_ciftleri`ni okumaz. Serhat'ın haritayı
etkilemesi isteniyorsa (kalın sınır çizgisi, farklı sembol) motora ya da
`app.js`e yeni bir okuma noktası gerekir. **Bu ölçülmedi ve bu partinin
işi değil.**

🔴 **Ve eğer Emre `S`yi yine de `k:`de istiyorsa** — kararı onun — o
zaman bilinmesi gereken şey ölçüldü: **arayüzün şehirler sekmesi çöker**
(`kgruplar["S"]` tanımsız) ve `k:` alanının kendi işi (kademe) 1672
nokta için kaybolur. Bu bir itiraz değil, bir **fiyat etiketi**.

---

## ⑧ DAMGALAR — `YONTEM §④`
```
🟢 ölçüldü      zaman değişimi · motor/arayüz kırılması · 1286 çift ·
                nehir 549 · Gabriel ızgara sınavı (kaçan 0) · C13 17/17
🔴 bulunamadı   —
⚠️ ölçmedim     1281-1923 tamamında toplam çift sayısı ·
                Model C'nin motora/arayüze bağlanma maliyeti ·
                39 uzak kimlik çiftinin gerçekten deniz aşıp aşmadığı
⚪ okumadım     data/donemler.js · devletler_harita.js gövde geometrisi
                (Gabriel'i seçtim; gövde geometrisi ikinci bir yol olurdu)
```

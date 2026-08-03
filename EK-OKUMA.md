# EK OKUMA — sebep-sonuç · magazin · skandal

> **Kullanıcının tarifi (3 Ağustos 2026):** *"Kronoloji bölümünde bir
> maddeye tıklanıldığında altta özet penceresi açılır ve orada en altta
> «ek okuma», «skandal», «magazin» gibi buton ile ek okuma penceresi
> açılır."*

Üç kart tipi, tek eksen. `PADISAH-KARTVIZITI.md` ile kardeştir:
kartvizit **kişiyi** anlatır, bu kartlar **bağı** ve **rivayeti** anlatır.

---

## 🔴 EN ÖNEMLİ KURAL — `kesinlik:` alanı

Kullanıcının kendi sözü ve bu eksenin **belkemiği**:

> *"Söylenti olan magazinel şeyleri tarihî gerçek olmasından ziyade
> rivayet ya da magazin haberi gibi vermeliyiz."*

```javascript
kesinlik: "kesin"        belgeli, tartışmasız
          "tartismali"   kaynaklar ayrışır, ikisi de yazılır
          "iddia"        belirli bir tarafın öne sürdüğü
          "rivayet"      halk anlatısı / menkıbe — DOĞRULUĞU İDDİA EDİLMEZ
```

⚠️ **Alan boş bırakılamaz.** Bırakılırsa kart yayına girmez.
📌 Bu eksenin bütün cazibesi rivayetlerdedir — ve bütün riski de. Etiket
olmadan atlas bir **dedikodu deposuna** döner; etiketle **rivayetin
kendisini de tarih olarak** gösterir. Fark bu tek alandadır.

### Ölçüt örnekleri
```
rivayet     Yıldırım'ın yüzüğündeki zehri içmesi
            Sarı Selim'in hamamda düşerek ölmesi
            Genç Osman'a tecavüz edildiği söylentisi
tartismali  Yavuz'un babasını zehirlettiği
            Şah Kulu sonrası "40.000" rakamı  ← sayı kaynaklara göre uçar
kesin       Şehzade Mustafa'nın boğdurulması (1553)
            I. Ahmed'in ekberiyet sistemini getirmesi (1617)
```

## 🔴 İKİNCİ KURAL — kullanıcının yorumu karta girmez

Kullanıcı kendi kuralını koydu ve bu **bağlayıcıdır**:

> *"Tabii «mıymıntı» yorumu benim yorumum, sen onu maddeye yazma."*

```
YAZILMAZ  "mıymıntı Bayezid"
YAZILIR   "pasiflikle suçlandı; savunanlar fetihlerin hazmedilmesi için
           gerekli olduğunu söyler"
```
📌 `PADISAH-KARTVIZITI.md` III. kuralın aynısı: **taraf tutulmaz,
taraflar yazılır.**

---

# ① SEBEP-SONUÇ KARTLARI

Kullanıcı **28 halka** verdi. Ve bunlar ayrı çiftler değil — **tek bir
zincir**. En görüneni:

```
Fetret Devri
  └→ kardeş katli yasası
       └→ III. Murad'ın 100+ çocuğu
            └→ III. Mehmed'in 19 kardeşi boğdurması
                 └→ tepki: I. Ahmed ekberiyet + KAFES
                      └→ tecrübesiz padişahlar (I. Mustafa · Genç Osman)
                           └→ Genç Osman'ın feci sonu
                                └→ IV. Murad'ın demir yumruğu
```
🔴 **Zincir olduğu görünmezse kartlar anekdota düşer.** Osmanlı'nın
veraset krizi tek bir olay değil, **iki yüz yıllık bir geri besleme
döngüsüdür** — kartların asıl anlattığı budur.

## Şema

```javascript
{ id:"kardes-katli-kafes",
  tur:"sebep-sonuc",
  sebep:  { b:"III. Mehmed'in 19 kardeşini boğdurması", t:"1595-01-28" },
  sonuc:  { b:"I. Ahmed'in kardeş katlini kaldırıp kafes usulünü
              getirmesi", t:"1603-12-22" },
  bag:    "Kamuoyu tepkisi ve ulemânın rahatsızlığı",
  metin:  "…2-4 cümle…",
  kesinlik:"kesin",
  zincir: ["fetret-kardes-katli", "kafes-tecrubesizlik"],   // önce/sonra
  olay:   ["1595-01-28", "1603-12-22"],   // hangi kronoloji maddelerinde çıkar
  kaynak: "TDV: ahmed-i · kardes-katli" }
```
⚠️ `zincir:` alanı kartları **birbirine bağlar** — arayüz "bu neyin
sonucu, neye sebep oldu" diye gezdirebilsin diye. Tek tek kart yazıp
zinciri kurmamak, bu işin en kolay ve en kısır hâlidir.

## Kullanıcının 28 halkası — üç kümede

```
A. VERASET DÖNGÜSÜ (en güçlü zincir)      1·13·14·15·16·17·18·19·20·21·22
B. HANEDAN İÇİ ŞİDDET ve KADIN ETKİSİ     4·6·7·8·11·12
C. OTORİTE BOŞLUĞU ↔ GÜÇLÜ SADRAZAM       2·3·5·9·10·23·24·25·26·27·28
```
📌 **A ile başlanır.** En sıkı zincir, en iyi kaynaklı, ve öteki ikisi
zaten ona bağlanıyor.

⚠️ Bazı halkalar **tartışmalıdır ve öyle yazılır**:
```
#4  Yavuz'un babasını zehirlettiği          → tartismali
#6  Yavuz'un darbesi ↔ Kanunî'nin oğlunu    → yorum, "kesin" DEĞİL
#27 Merzifonlu'nun Murad Giray'a hakareti   → rivayet (kaynak zayıf)
```

---

# ② MAGAZİN / SKANDAL KARTLARI

Kullanıcının verdiği hazır liste — hepsi `kesinlik:` etiketiyle:

```
III. Murad ↔ Safiye                        ⚠️ DÜZELTME aşağıda
Kanunî ↔ Hürrem
Sarı Selim'in hamamda ölümü                rivayet
Kanunî'nin üç kez cenaze namazı            rivayet
Genç Osman'ın öldürülüş biçimi             rivayet
I. Mustafa'nın harem ağasınca kilitlenmesi
IV. Murad'ın içki-tütün yasağı ↔ kendi sirozu
Evliya Çelebi'nin hikâyeleri               rivayet (kaynağın kendisi öyle)
İbrâhim'in samur vergisi
maymunların ağaçlara asılması              rivayet
Yıldırım'ın yüzüğündeki zehir              rivayet
Yavuz'a vezir olsun diye beddua            rivayet
tahta çıkacağına korkudan inanmayan padişahlar
IV. Mehmed'in taht merasiminde korkması
```

## 🔴 KULLANICININ SORDUĞU DÜZELTME — karıştırılmış

> *"3. Murat'ın âşık olduğu Nurbanu, annesi Safiye — bu kısmı
> karıştırıyor olabilirim."*

**Karıştırılmış, ve tam tersi:**
```
NURBANU   II. Selim'in eşi · III. Murad'ın ANNESİ · valide sultan
SAFİYE    III. Murad'ın gözdesi · III. Mehmed'in annesi
```
⇒ Oğluna câriye bulup harem kurduran anne **Nurbanu**, âşık olunan
**Safiye**. Zincirin mantığı (`#11`) doğru, adlar yer değiştirmiş.

## Şema
```javascript
{ id:"sari-selim-hamam", tur:"magazin",
  baslik:"Sarı Selim'in hamamdaki ölümü",
  kisi:["selim2"],  t:"1574-12-15",
  metin:"…2-4 cümle…",
  kesinlik:"rivayet",
  not:"Çağdaş kaynaklar ölüm sebebini ayrıntılandırmaz; anlatı sonraki
       yüzyıl derlemelerinde yaygınlaşır.",
  kaynak:"TDV: selim-ii" }
```

---

# ③ ARAYÜZ — nereye çıkar

Kullanıcının tarifi birebir:
```
kronoloji maddesine tıkla
  └→ altta ÖZET penceresi                      (bugün zaten var)
       └→ en altta buton şeridi:
          [ 📖 EK OKUMA ]  [ 🔗 SEBEP-SONUÇ ]  [ 🎭 MAGAZİN ]
               └→ ek okuma penceresi
```
⚠️ **Buton yalnız kart VARSA çıkar.** Boş buton, olmayan içeriği vaat
eder — kullanıcının güvenini bir kez kırar, geri gelmez.
⚠️ `kesinlik:"rivayet"` olan kart **görsel olarak da ayrılır** (farklı
zemin + "rivayet" rozeti). Metin içinde yazmak yetmez; okuyan hızlı
geçerken rozeti görür, cümleyi görmez.

## Yükleme — `ANSİKLOPEDİ EKSENİ Kural ①`
```
data/ekokuma.js  ana yüke KATILMAZ
                 kullanıcı butona basınca yüklenir
```
Sayfa zaten 19,8 MB gzip indiriyor; bu eksen ona eklenemez.

---

# SIRA

```
① kesinlik: sözlüğü + şema kararı → VERI-YAPISI.md   UCUZ, önce bu
② A kümesi: veraset zinciri, 11 sebep-sonuç kartı     ARAŞTIRMA
③ magazin kartları — kullanıcının 14 kalemi          ARAŞTIRMA
④ ARAYÜZ: buton şeridi + ek okuma penceresi + rozet   ARAYÜZ
⑤ B ve C kümeleri (17 kart)                          ARAŞTIRMA
```

📌 **Uzunluk kuralı burada da geçerli** (`ANSİKLOPEDİ EKSENİ Kural ⓪`):
her kart 2-4 cümle, 900 karakter tavanı. Kart **sayısı** artar, kart
**uzunluğu** artmaz. Yirmi sekiz kısa kart, üç uzun makaleden hem daha
çok okunur hem daha ucuz bakılır.

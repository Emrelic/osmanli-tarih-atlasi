# ÖNERİ — KADEME C (hukukî sınır) VERİ MODELİ

> **KADEME-MODEL-0907 · 7 Eylül 2026** · şartname `oturumlar/KADEME-MODEL-0907.md`
> Hüküm dayanağı: `denetim/HUKUM-UC-KADEME-0907.md`
> 🔴 Bu bir **ÖNERİDİR** — kod değil, veri değil. `data/` ve `arac/` altına
> hiçbir şey yazılmadı (koşu 8 donuk).

---

## ⓪ ÖZET — üç cümle

1. **Kenar çıkarımı MEKANİK.** NE'nin komşu poligonları paylaştıkları kenarda
   **birebir aynı koordinatları** taşıyor: 342 kenar çiftinin **342'sinde**,
   68.994 hat tepesinin **68.994'ünde**. Tolerans kararı **GEREKMİYOR.**
2. **C katmanı küçük.** Bütün dünya kenarları, projenin kendi hassasiyetinde
   **1,05 MB** — `devletler_harita.js`in (53,4 MB) **%2'si.**
3. **Pahalı olan geometri değil, KİMLİK ve DAYANAK.** 175 uç ülkenin
   **169'u** atlas kimliğiyle otomatik eşleşmiyor (İngilizce ad), ve
   antlaşma dizini `id` taşımıyor.

---

## ① POLİGON → KENAR ÖLÇÜMÜ — sayıyla

Alet: `denetim/ARAC-KENAR-OLC-0907.py` · `ARAC-KENAR-OLC2-0907.py` ·
`ARAC-KENAR-KIMLIK-0907.py`
Çıktı: `denetim/OLCUM-KENAR-0907.json` · `OLCUM-KENAR2-0907.json` ·
`OLCUM-KENAR-KIMLIK-0907.json`

### ① a — TABAN
```
ne_10m_admin_0_countries.geojson   258 girdi · 548.471 tepe
geometri tipi                      MultiPolygon 151 · Polygon 107
geçersiz geometri                  1  🔴 ve adı: **Egypt**
```

### ① b — KOMŞULUK
```
kutu-kesişen aday çift             1182
GERÇEK KENAR paylaşan çift          342
yalnız NOKTADA değen çift             2   Zambia↔Botswana · Namibia↔Zimbabwe
                                          (Kazungula dörtlü kavşağı — KENAR DEĞİL)
ALAN olarak örtüşen çift              0   ⇒ topoloji temiz, poligonlar birbirine girmiyor
```
🔴 **`intersects` KOMŞULUK DEĞİLDİR** — iki ülke tek bir noktada da kesişir.
Ölçüt `boundary` kesişiminin **uzunluğu** olarak kuruldu, varlığı değil;
yoksa Kazungula'daki iki çift "kenar" sayılacaktı.

### ① c — ASIL SORU: kenar BİREBİR mi?
```
kenar paylaşan çift                 342
  TAMAMI birebir ortak              342   (%100)
  KISMEN ortak                        0
hat tepesi TOPLAM                69.011
  iki ülkenin de tepe kümesinde        0 EKSİK   (%0,000)
oran                asgari 1,0000 · ortanca 1,0000 · azami 1,0000
```
> ⇒ **KENAR ÇIKARIMI MEKANİK.** Tolerans yok, karar yok, eşik yok.

⚠️ **VE BU İKİ AŞAMADA ÖLÇÜLDÜ, çünkü birincisi yetmiyordu.** İlk alet
*"ortak tepesi olmayan çift: 0"* dedi ama asgarî ortak tepe **2**'ydi —
uzun bir kenarda yalnız iki uç eşleşiyorsa o kenar tepe-özdeş **değildir**.
İkinci alet doğru soruyu sordu: *paylaşılan ÇİZGİNİN tepelerinin kaçı iki
tarafta da var?* Cevap: **hepsi.**
📌 `§11`: *"ortak tepesi var"* ile *"kenarı birebir aynı"* aynı şey değil,
ve birincisi ikincisini ima etmiyor.

### ① d — KAÇIRILAN KOMŞU var mı? (yanlış negatif)
Kıl payı bir boşlukla ayrılmış iki poligon **değmez** ve hiç sayılmaz;
o zaman "342" bir **alt sınır** olurdu. Ölçüldü:
```
değmeyen aday çift                  838
  uzaklık < 0,001°                    1   China ↔ Macao        ~82 m
  uzaklık < 0,01°                     1   Cyprus ↔ N. Cyprus  ~489 m
  uzaklık < 0,1°                     12   (Katar-Bahreyn, Malezya-Singapur, Fas-Moritanya…)
  uzaklık ≥ 0,1°                    824   gerçekten uzak — ada/deniz
```
🟢 **Hiçbiri topoloji artefaktı değil**, hepsi GERÇEK boşluk: Macao bir
enklav, Kıbrıs'ta BM tampon bölgesi, Fas ile Moritanya arasında Batı Sahra
duruyor. ⇒ **342 bir alt sınır değil, TAM SAYI.**

### ① e — BOYUT (projenin kendi hassasiyetinde)
```
tepe — ham                       69.011
tepe — 3 ondalık, ardışık tekrarsız  68.614   (%99,4 korunuyor)
geometri gövdesi                  1,05 MB   (JSON, boşluksuz)
kıyas                            devletler_harita.js 53,4 MB · donemler.js 31,0 MB
kenar başına SÜREKLİ parça        asgari 1 · ortanca 1 · azami 5
```
🟢 **3 ondalığa yuvarlama birebirliği BOZMAZ** — iki ülke aynı float'ı
taşıyorsa aynı yuvarlanmışı da taşır. Yuvarlama ortak bir kenarı
*ayrıştıramaz*; yalnız ayrı iki kenarı *birleştirebilir* ve o da ölçüldü:
birden çok kenarda görünen tepe **183 / 68.231** — hepsi üçlü sınır
kavşağı, beklenen.

### ① f — 🔴 BİR ALET YANILDI VE ÖLÇEREK YAKALANDI
Üçüncü alet ilk koşusunda **137.234 tepe / 2,22 MB** dedi — ikinci aletin
68.994'ünün tam **2 katı**. Çelişki devralınmadı, ölçüldü:
```
Türkiye ↔ Suriye:  boundary.intersection → MultiLineString
   parça 182 · ham tepe 364 · BENZERSİZ 183
   ⇒ shapely kenarı SÜREKLİ bir çizgi olarak değil, İKİ NOKTALI
     PARÇALARIN yığını olarak veriyor; her iç tepe İKİ KEZ sayılıyor
```
`linemerge` kondu, sayı **69.011**'e indi ve ikinci aletle uyuştu.
📌 Ve bu yalnız bir sayım düzeltmesi değil **model kararı**: kenar zaten
sürekli bir çizgidir, 182 kopuk parça değil — veri de onu öyle saklamalı.

---

## ② MODEL — ve önce §11'in emrettiği ARAMA

🔴 Şartname *"alan icat etmeden önce VAR OLUP OLMADIĞINI ÖLÇ"* diyor.
Ölçtüm — ve **iki mevcut konvansiyon buldum, ikisini de kullanıyorum:**

```
window.KORIDOR_KENAR (data/koridor.js)   İKİ UÇLU KENAR kaydı ZATEN VAR:
   {u1, u2, f, t, donem_cinsi, kesinlik, kaynak, km, ...}
   ⇒ kenar biçimini İCAT ETMİYORUM, bu aileyi izliyorum

window.DEVLET_PARCALAR + dnm[].g          GEOMETRİ HAVUZU + İNDEKS
   (devletler_harita.js başlığı: "dnm[].g, DEVLET_PARCALAR havuzuna indekstir")
   ⇒ ama C için havuz ÖNERMİYORUM, gerekçe aşağıda
```

### ② a — 🔴 ÖNCE BİR AD ÇAKIŞMASI UYARISI
Bu projede **"kademe" kelimesi ZATEN DOLU** ve bambaşka bir şey demek:
```
MEVCUT   k:0-4  yerleşimin İDARÎ kademesi (eyalet/sancak merkezi…)
         window.KADEME_YAMA · YER_YAMA_KADEME · YER_YAMA_KADEME2 …
YENİ     A/B/C  haritanın GÖRÜNÜM kademesi (Emre'nin 7 Eylül kararı)
```
⇒ **Yeni katmanın ad alanına `KADEME` YAZILMAMALI.** `§11`in *"aynı kelime
iki ayrı şeyi anlatıyorsa, birini ölçen ötekini ölçtüğünü sanır"* dersi
(`KUYRUK` vakası) — orada bedeli bir yanlış cevaptı, burada bir `grep`in
iki ayrı katmanı karıştırması olur.

### ② b — DOSYA ADI ve AD ALANI (§7)
```
ÇEKİRDEK   data/sinir_hukuki.js            → window.SINIR_HUKUKI
BÖLGE      data/sinir_hukuki_<bolge>.js    → window.SINIR_HUKUKI_<BOLGE>
           örnek: sinir_hukuki_anadolu.js  → window.SINIR_HUKUKI_ANADOLU
HARİTA KATMANI (app.js)  "sinir-hukuki-cizgi"   (mevcut adlandırma ailesi)
```
🔴 **HER BÖLGE KOLU KENDİ AD ALANINI ALIR.** Bu, 14 kol açılmadan önce
yazılması gereken tek cümle: `KADEME_YAMA` vakasında beş dosya aynı
`window` adını kullandı ve birlikte okununca **537 kayıt 137'ye düştü**
(`§7`). Kolları açan sevk, her kola **dosya adını VE `window` adını
birlikte** vermeli.

🟢 **VE GEOMETRİ HAVUZU ÖNERMİYORUM — ölçüme dayanarak.** Havuz, aynı
halkanın yüzlerce dönemde tekrarlanmasını önlemek için var; burada her
kenar geometrisi **bir kez** kullanılıyor ve toplam **1,05 MB**. Havuz
sıfır kazanç getirir, buna karşılık 14 dosyadan gelen indekslerin
**çakışması** gibi gerçek bir risk doğurur. ⇒ Geometri kaydın **içinde**.

### ② c — KAYIT ŞEMASI
```js
window.SINIR_HUKUKI_ANADOLU = [
{
  // ── ① İKİ UÇ — atlas kimliği (devletler.js id), NE adı DEĞİL
  a:"tbmm-turkiye", b:"suriye-fransiz-mandasi",   // ALFABETİK: a < b (kararlı anahtar)

  // ── ② HANGİ TARİHTEN İTİBAREN HUKUKÎ
  f:"1923-07-24",              // dayanağın yürürlük günü
  t:"1923-10-29",              // bitiş
  t_cinsi:"pencere",           // 🔴 "pencere" = atlasın ucu, BİR İDDİA DEĞİL
                               //    "gercek"  = bu çizgi o gün gerçekten değişti
                               //    (koridor.js'teki `donem_cinsi` ailesi)

  // ── ③ DAYANAK
  hal:"hukuki",                // hukuki | bulunamadi | olculemedi   ← §④
  dayanak:"Lozan",             // ANTLASMALAR.ad — ölçüldü: (t|ad) 41/41 BENZERSİZ
  dayanak_t:"1923-07-24",      // ANTLASMALAR.t   (dizinde `id` YOK, §②d)
  madde:"3. madde",            // antlaşmanın hangi maddesi — yoksa "bulunamadı"
  kaynak:"lozan-antlasmasi",   // §4: TDV slug ya da akademik künye
  kesinlik:1,                  // koridor.js konvansiyonu

  // ── ④ GEOMETRİ — sürekli çizgi(ler), 3 ondalık, kaydın İÇİNDE
  gc:[[[42.357,37.110],[42.357,37.138], …]],   // parça dizisi (ortanca 1, azami 5)

  // ── İZLENEBİLİRLİK — geometri NEREDEN geldi
  ne_a:"Turkey", ne_b:"Syria", // NE'nin kendi adları
  ne_surum:"ne_10m_admin_0_countries",
  ne_degisti:false,            // 1923→bugün bu çizgi değişti mi   🔴 ÖLÇÜLMEDİ
  not:""
}];
```

### ② d — 🔴 ANTLAŞMA DİZİNİ ADRESLENEBİLİR DEĞİL
```
window.ANTLASMALAR   41 kayıt · alanlar: t ad savas_basi taraf_metin ozet
                     taraf topraklar lat lon
`id` alanı           YOK  (0 kayıtta)
(t|ad) çifti         41/41 BENZERSİZ  ⇒ bugün anahtar OLARAK KULLANILABİLİR
Lozan                VAR — t:"1923-07-24" · taraf:["tbmm-turkiye","ingiltere",…]
1920'ler             4 antlaşma: Sevr · Kars · Mudanya · Lozan
```
⇒ Kenar, antlaşmaya **`dayanak` + `dayanak_t`** ile bağlanıyor. Bu bir
ödün: `id` eklenirse mekanik olarak tek alana indirilebilir.
⚠️ Ve `ANTLASMALAR.topraklar` **serbest metin** — *"İşkodra ve Arnavutluk
kıyısı Venedik'ten Osmanlı'ya geçti"*. `§11`: **bir bilgi serbest metne
inerse inmiş sayılmaz**; bu yüzden antlaşma→geometri bağı `topraklar`dan
**türetilemez**, kenar kaydında ayrıca kurulmalı.

---

## ③ BEŞ SORUNUN BEŞİ

| # | soru | cevap | alan |
|---|---|---|---|
| ① | kenar KİMLE KİM arasında | iki **atlas kimliği**, alfabetik | `a` · `b` |
| ② | hangi TARİHTEN itibaren hukukî | dayanağın yürürlük günü; bitiş ve **bitişin cinsi** ayrı | `f` · `t` · `t_cinsi` |
| ③ | DAYANAĞI ne | antlaşma adı + tarihi + maddesi + `§4` kaynağı | `dayanak` · `dayanak_t` · `madde` · `kaynak` |
| ④ | geometrisi NEREDE | kaydın içinde, sürekli çizgi dizisi, 3 ondalık | `gc` (+ `ne_a`/`ne_b` izlenebilirlik) |
| ⑤ | hukukî DEĞİLSE ne olur | kayıt **YAZILIR**, `hal` ≠ `"hukuki"` olur; C'de çizilmez, A/B görünür — ve **sessiz değildir** | `hal` |

### ⑤'in ayrıntısı — SESSİZ OLMAMASI nasıl sağlanıyor
Şartname *"A/B'ye düşer — ve bu SESSİZ olmamalı"* diyor. Çare, `§4`ün üç
damgasını veriye taşımak:
```
hal:"hukuki"      dayanağı bulundu, C'de ÇİZİLİR
hal:"bulunamadi"  ARANDI, dayanak yok  → C'de çizilmez, A/B kalır
hal:"olculemedi"  kaynak alınamadı (302 · boilerplate · 000) → kalem AÇIK
KAYIT YOK         hiç bakılmadı ("okumadım")
```
🟢 Sınav tek soru — `§11`: ***bunu bir `if` ile sorabiliyor muyum?***
```js
SINIR_HUKUKI.filter(k => k.hal === "bulunamadi")   // arandı, yok
SINIR_HUKUKI.filter(k => k.hal === "olculemedi")   // kalem AÇIK
// ve "kayıt yok" ile "bulunamadı" ARTIK AYRI ŞEY
```
⚠️ Bu ayrım olmadan `bulunamadi` ile `okumadım` aynı görünür ve
`§11`in ölçtüğü hata tekrar eder: **yanlış damga hatayı KALICILAŞTIRIR** —
bir sonraki oturumu aramaktan alıkoyar.

---

## ④ UÇLARIN KİMLİĞİ — asıl maliyet burada

```
kenar ucu olan NE ülkesi           175
  atlas kimliğiyle otomatik EŞLEŞEN  6   Burundi · Guatemala · Haiti ·
                                         Iran · Nepal · Yemen→yemen-zeydi
  otomatik eşleşmeyen              169   🟡
künye (devletler.js)               627
```
🔴 **BU SAYI "169 KİMLİK YOK" DEMEK DEĞİL.** NE'nin adları İngilizce
(`Turkey` · `Greece` · `Egypt`), atlasınkiler Türkçe. `§4`ün Türkçe yazım
ekseni: *bir kimliği YOK ilan etmeden önce `devletler.js` TARANIR, TAHMİN
EDİLEN id ARANMAZ* — ve o eksen bu projede `ingiliz-hindistani` vakasında
bir hükmü çürüttü. Eşleşen 6'nın altısı da **tesadüfen aynı yazılan** adlar.
Ortak normalleştirici (`denetim/ARAC-NORMAL-0903.py` ailesi) kullanıldı;
kusur normalleştiricide değil, **dilde.**

⇒ **Bir `NE adı → atlas kimliği` eşleme tablosu GEREKLİ ve bu ayrı bir
kalem** — geometri işi değil, kimlik işi. 169 satır.

⚠️ Ve tablo **düz bir ad eşlemesi olamaz**, çünkü NE'nin girdilerinin
hepsi devlet değil:
```
Sovereign country 185 · Dependency 33 · Country 19 · Indeterminate 12
Disputed 5 · Sovereignty 2 · Lease 2
örnek devlet-olmayan: Akrotiri · Baikonur · Bir Tawil · Siachen Glacier ·
                      Southern Patagonian Ice Field · Cyprus U.N. Buffer Zone
```
⇒ Tablonun **"kimlik değil"** kovası olmalı; yoksa "Baikonur" bir devlet
kimliği arar ve bulunamayınca `bulunamadı` yazılır — **yanlış damga.**

🔴 **VE DAHA DERİN BİR SINIR:** NE **2020'lerin** ülkelerini taşıyor,
kenarın uçları ise **1923'ün** kimlikleri olmalı. `Syria` bugün bir devlet,
1923'te **Fransız mandası**. ⇒ Eşleme tablosu *ad → kimlik* değil,
***ad + TARİH → kimlik*** olmalı. Aksi hâlde model `§3.5`in hayalet devlet
ailesine kendi eliyle bir üye katar.

---

## ⑤ ÖLÇEMEDİKLERİM — adıyla

```
⚪ 1923 → bugün DEĞİŞEN sınırların SAYISI.  Hükmün ⑥. açık sorusu, ve
   `③ ÇIPA` kaleminin işi. Ölçmedim; `ne_degisti` alanı onu TAŞIYABİLİR
   ama bugün hiçbir kayıtta DOLU DEĞİL.
⚪ NE 1:10m genelleştirmesinin hukukî çizgi için YETERLİ olup olmadığı.
   Antlaşma metni bir çizgiyi coğrafî tarifle verir (nehir yatağı, meridyen);
   NE'nin sadeleştirilmiş çizgisi ona ne kadar uyuyor — ÖLÇMEDİM.
⚪ `Egypt`in geçersiz geometrisinin kenar çıkarımını bozup bozmadığı.
   Mısır'ın kenarları 342'nin içinde göründü ve `intersection` hata
   VERMEDİ — ama geçerli olmayan bir poligonla yapılan kesişimin
   güvenilirliğini AYRICA SINAMADIM. Atlas için kritik bir ülke.
⚪ Ada/çok parçalı ülkelerde kenarın parça bazında doğruluğu. Çift bazında
   ölçtüm (342), parça bazında DEĞİL.
⚪ Herhangi bir sınırın GERÇEK antlaşma maddesi. Bu kalem MODEL kalemiydi;
   tek bir `dayanak` bile doldurmadım — örnek kayıttaki "3. madde"
   BİR ŞABLONDUR, bir iddia DEĞİL.
```

---

## ⑥ SENİN KARARINI BEKLEYEN — ben vermedim

```
① `t_cinsi` alanı KABUL mü? (pencere ucunu bir iddiadan ayırmak için
   öneriyorum; `§4`ün 14 künyeyi yanlış sayan `1923-10-29` vakası)
② `hal` üç kovalı mı kalsın, yoksa `bulunamadi`/`olculemedi` ayrı bir
   dosyaya mı gitsin? (Ben AYNI dosyada öneriyorum — ayrı dosya, `§11`in
   "glob bir ad sözleşmesidir" tuzağını davet eder.)
③ NE→kimlik eşleme tablosu KİMİN kalemi? Geometri işi değil; bence
   kolları açmadan ÖNCE tek elden yazılmalı, yoksa 14 kol 14 ayrı
   transliterasyon üretir.
④ `ANTLASMALAR`a `id` eklensin mi? Ekleyen `data/savaslar.js`e dokunur —
   benim yetkim DIŞINDA, ve koşu 8 donuk.
```

## ⑦ DURUM
```
✅ İŞLERİM BİTTİ — model önerisi teslim.
⏳ BEKLİYORUM: ⑥'daki dört karar · 1.MURAT · onay gelmeden hiçbir bölge
   kolu açılmamalı (şartname ⑤).
```

# MOTOR 3 — koşu 4,7 saat: ölçüldü, sebep tek satırda

**3 Ağustos 2026 · Opus.** Görev tanımı: `MOTOR-3-KALIBRASYON.md`.
🔴 `uret_petek.py` **çalıştırılmadı** — yama yazıldı, koşuyu Oturum 0 dener.

---

## TEK CÜMLE

> **4 saat 41 dakikalık koşunun 241 dakikası — %86'sı — `_kusatilmis()`
> içindeki TEK BİR SATIRDA geçiyor, ve o satır aynı 96 değeri 1.207 kez
> yeniden hesaplıyor.** Önbelleğe alındı; 25 tarihte eski/yeni sonuç
> karşılaştırıldı, **fark 0**.

Beklenen koşu: **281 dk → ~50 dk.**

---

## ① AŞAMA ZAMANLAYICISI — yazıldı (denenmedi)

`arac/uret_petek.py`. Üç ayrı şey ölçülüyor, üçü de gerekli:

```
asama()     ardışık ana aşamalar (23 adet) — toplamları koşu süresini verir
sayac()     ÇAPRAZ maliyet: aşamalara DAĞILMIŞ tek bir işlev
ilerleme()  uzun döngülerde satır + tahminî kalan süre
asama_ozet() sonda ÖZET TABLO: aşama · süre · pay
```

🔴 **`sayac()` olmasaydı bu bulgu görünmezdi.** Kuşatılmışlık ÜÇ ayrı
aşamadan çağrılıyor; aşama tablosu tek başına onu asla gösteremezdi — 241
dakika üç aşamaya bölünmüş hâlde kaybolurdu. Aşama tablosu *nerede*, çapraz
sayaç *ne* olduğunu söyler.

⚠️ **Tamponlama da düzeltildi** ve bu bir yan iş değil, ön koşuldu:
`sys.stdout` sarmalayıcısı blok tamponluydu, yani `py -u` ile başlatılsa
bile satırlar ancak çıkışta boşalıyordu (görev tanımındaki "4s39dk boyunca
kör kalındı" vakası). `line_buffering=True` eklendi.

⚠️ Ve **3s42dk'lık blok tek satır basmıyordu** — üç oturum "takıldı mı,
ilerliyor mu" sorusunu cevaplayamadan bekledi. Artık her 10 devlette bir
satır akıyor.

## ② 3s42dk'LIK BLOK — ölçülmüş bilanço

### Önce: "işaret" mi, kanıt mı — kesinleştirildi

Görev tanımı haklı olarak uyardı: dosya damgası *yazma anını* verir. **Ama
bu vakada damga kanıta dönüşüyor**, çünkü `bolgeler.js` yazımı (`uret_petek.py`
bölge bloğunun sonu) ile `devletler_harita.js` yazımı arasında kodda **başka
hiçbir şey yok**. 01:56 → 05:38 arası, tanımı gereği, yabancı devlet gövdeleri
bloğudur. Tahmin değil.

### Sonra: bloğun içi

Ölçüm canlı veriyle yapıldı (`girdi.py` + üretilmiş `petek_govde.js`
geometrisi + yeniden kurulmuş kara maskesi), motor çalıştırılmadan.

```
                                  ölçülen        gerçek blok 222 dk
  kuşatılmışlık (_kusatilmis)     212 dk  %96
  gövde geometrisi                  9 dk   %4
  ─────────────────────────────────────────
  TOPLAM                          221 dk          ✓ 222 dk ile kapanıyor
```

**Bilançonun 1 dakika farkla kapanması, ölçümün kendi doğrulamasıdır.**

Gövde geometrisinin içi (1.741 gövde, tur başı 0,32 sn):

```
  kapat()  (buffer +0,15 / −0,15)   %56,5     5,3 dk
  intersection(KARA)                %23,5     2,2 dk
  unary_union(hücreler)             %12,0     1,1 dk
  mp_koord + havuza (json)           %5,5     0,5 dk
  delikleri_doldur                   %2,5     0,2 dk
```

Kuşatılmışlığın içi — ve asıl bulgu:

```
  ic = c.boundary.difference(_KIYI_TAMPON)      %96,5   ← BU SATIR
  komşu sorgusu (STRtree)                        %0,5
  ort = ic.intersection(...)                     %3,0
```

### Niçin yanıyordu

`c = PETEK_D[i]` ve `_KIYI_TAMPON` **sabittir**. `PETEK_D`ye yazan son satır
çöl tavanı bloğundadır; `_kusatilmis` ilk kez ondan çok sonra çağrılır.
Yani `ic` **`g` tarihinden bağımsızdır** — ama her tarih için baştan
hesaplanıyordu:

```
  1.207 ayrı tarih × 43,3 aday × 0,27 sn/aday  =  241 dk
  gerçekte hesaplanması gereken:  96 ayrı değer
```

**Cevaplar (görev tanımının dört sorusu):**

| Soru | Ölçülen cevap |
|---|---|
| kaç devlet × kaç epok × kaç birleşim | 169 devlet · 3.238 iç tur · **1.741 gövde** · 63.459 hücre birleşimi |
| nokta sayısıyla mı, kimlik sayısıyla mı | **İkisiyle de değil** — baskın terim `ayrı tarih × kur:/bit: nokta`. Bkz. ③ |
| aynı birleşim tekrar mı hesaplanıyor | **EVET, 1.207 kez 96 değer.** Yamanın konusu bu |
| 35,9 MB'da geometri tekrarı var mı | **Havuz zaten çalışıyor**: 15.201 eşsiz parça, 76.007 atıf → 2,1× tasarruf. Kalan sıkışmayan pay: parçaların %36'sı yalnız TEK dönemde kullanılıyor. Havuzdan daha fazlası çıkmaz |

### Ve blok yalnız orada yanmıyordu

Aynı işlev `Varlık epokları` aşamasında da 121 tarih için koşuyor:
**121 × 14,57 sn ≈ 29,4 dk**, yani 37,4 dakikalık ilk fazın **%79'u.**

```
  kuşatılmışlık TOPLAM   241 dk   =  koşunun %86'sı
```

📌 Yani görev tanımının hipotezi ("koşunun %79'u TEK aşamada") **doğruydu ama
eksikti**: iş tek aşamada değil, tek İŞLEVDE geçiyor ve o işlev üç aşamaya
dağılmış. Aşama ekseninden bakan hiçbir ölçüm bunu bulamazdı.

### Yama ve sınavı

`_IC_ONBELLEK` + `_CEP_ONBELLEK` (ikisi de indeks → geometri, 96 kayıt).

```
  ÇIKTI AYNILIĞI   25 tarih sınandı, frozenset farkı = 0   ✓ BİREBİR
  HIZ              ilk çağrı önbelleği doldurur (24 sn),
                   sonraki her tarih 20,6 sn → 0,64 sn     ≈ 30×
```

🔴 **Ve varsayım ölçülüyor, varsayılmıyor.** Önbelleğin tek geçerlilik şartı
"PETEK_D bu noktadan sonra değişmez". Bu depoda bir garantinin doğru olduğunu
varsaymak yasak — kara-kısıtlı sahiplik bloğunun kendi notu: *"garanti
EDİLDİĞİNİ VARSAYMAK yerine ölçülür; ilk koşuyu düşüren tam buydu."*
Bu yüzden `_PETEK_MUHUR` (kayıt sayısı + köşe sayısı + toplam alan) önbellek
kurulurken alınıyor ve **üç çıktının üçü de yazılmadan önce** sınanıyor;
tutmazsa koşu `SystemExit` ile ölüyor. Sessiz bayat harita üretilemez.

## ③ KİMLİK SAYISINA BAĞLILIK — ölçülmüş ilişki, tahmin değil

VERİ KİMLİK 3'ün 98 kimliği koşuyu uzatır mı? **Bugünkü BOYALAR ile, verideki
bütün kimlikler boyalı olsaydıki hâl yan yana ölçüldü:**

```
                        bugün    hepsi boyalı    artış
  kimlik                  181            267     1,48×
  ayrı tarih            1.186          1.214     1,02×   ← baskın terim
  gövde (geometri)      1.823          2.071     1,14×
  birleşen hücre       63.947         65.699     1,03×
```

**Karmaşıklık kimlik sayısıyla BÜYÜMÜYOR.** Sebebi ölçüldü: yeni kimliklerin
noktaları zaten canlı (`yerlesimler_asya.js` girdide), kırılma tarihleri de
büyük ölçüde mevcut tarihlerle çakışıyor (`YYYY-01-01` yer tutucuları).
%48 kimlik artışı, baskın terime **%2** ekliyor.

⇒ **98 kimlik eklenince koşu 4,7 saatten uzamaz.** Yamadan sonra beklenen
etki: ~10,5 dk yerine ~12 dk (gövde ekseninde +%14).

⚠️ Gerçek büyüme ekseni başka: `ayrı tarih × kur:/bit: taşıyan nokta`
(bugün 1.207 × 132). İkisi de **nokta** eklendikçe büyür, kimlik eklendikçe
değil. Yamadan sonra tarih başı maliyet 0,47 sn olduğu için bu eksen de
yakın vadede tehlikeli değil.

⚠️ **`renkler.py` ölçüm sırasında CANLI değişti** — BOYALAR 171 → 181 → 183
(RENK oturumu çalışıyor). Yukarıdaki oranlar dayanıklı, mutlak sayılar
oynaktır.

## ④ BÖLÜNEBİLİRLİK — cevap: **HAYIR, ve bugün bölmek yanlış olur**

### Bağımlılık haritası (ölçüldü)

| Aşama | Girdinin hangi kısmına bağlı |
|---|---|
| kara maskesi · göller · nehir · dağ | `veri-kaynak/*` + `goller.js` + `BOLGE` + `KARA_TOL` |
| Voronoi → kenar ağı → yaslama → polygonize → coverage_simplify → kıyı kesimi → ada kuralı → Dijkstra → çöl tavanı | **yalnız yerleşim lat/lon** + yukarıdakiler |
| ⇒ **PETEK_D** | ⬆ buraya kadar `d:`/`v:`/`s:`/`kur:`/`bit:` HİÇ OKUNMAZ |
| kuşatılmışlık · varlık devirleri | PETEK_D + `kur:`/`bit:` + `d/v/s` |
| bölgeler · yabancı gövdeler · dönemler | PETEK_D + `d/v/s` + `k/m` + BOYALAR |

📌 Kesim çizgisi **PETEK_D**'dir ve iddia göz kararı değil: PETEK_D donana
kadarki 1.112 satır tarandı, tarih alanlarına **iki** dokunuş var
(`uret_petek.py:368` boya uyarısı, `:411` kademe uyarısı) ve **ikisi de yalnız
`print`**. PETEK_D, koordinat listesinin saf fonksiyonudur.

### Niçin yine de HAYIR

Yamadan sonra beklenen dağılım:

```
  PETEK_D üretimi (önbelleğe ALINABİLİR kısım)   ~8 dk   %16
  kuşatılmışlık                                 ~10 dk   %20
  yabancı gövdeler                              ~10 dk   %20
  dönemler + çıktı yazımı                       ~21 dk   %43
```

Üç gerekçe:

1. **4,7 saatlik dert yapısal değildi, tekrarlanan bir hesaptı.** Bölme,
   çözülmüş bir sorunu çözerdi. `ONCELIK.md K6` ile aynı mantık: pahalı
   işten önce sebebi ölç.
2. **Önbelleğe alınabilir tek önek ~8 dakika.** En iyi ihtimalle %16 kazanç.
3. **Kalan %84, düzenlemelerin DEĞİŞTİRDİĞİ alanlara bağlı.** "Yalnız
   `yerlesimler.js` değişti, atla" kuralı pratikte hiçbir şeyi atlamaz:
   bu depoda `yerlesimler.js` düzenlemelerinin neredeyse tamamı `d:`/`v:`/`s:`
   tarih alanlarına dokunuyor, koordinatlara değil.

⇒ **Kazancı %16, riski "sessiz bayat çıktı".** Bu depo o riske beş üretim
kaybetti (`CLAUDE.md §7`). Fiyat/risk oranı tutmuyor.

### Cevap ne zaman EVET'e döner — ve o gün nasıl yapılır

Zamanlayıcı bir sonraki koşuda **`Kıyı kesimi` + `Dijkstra` + `Ada kuralı`
toplamının 20 dakikayı aştığını** gösterirse mesele yeniden açılır. O gün
yapılacak şey (tasarım hazır, uygulanmadı):

```
ANAHTAR = sha256(
    ① sıralı (ad, lat, lon) listesi          ← geometrinin gerçek girdisi
    ② BOLGE.bounds · KARA_TOL · SADE_TOL · KORUMA_PAYI · KV_ADIM ·
      KV_MIN_KM2 · COL_TAVAN_KM · COL_SU_MUAF_KM · COL_MUAF_YERLESIM_BAZLI
    ③ veri-kaynak/*.geojson sha256'ları
    ④ _MOTOR_IZI  (uret_petek.py + girdi.py + renkler.py) )
```

④ kasten kaba: **motor kodunun her düzenlemesi önbelleği çöpe atar.** Bedeli
8 dakikalık yeniden üretim, karşılığı "hangi kod değişikliği geometriyi
etkiler" sorusunu hiç sormak zorunda kalmamak. Bu depoda o soruyu ince
ayarlamaya çalışmak, tam olarak beş üretimi yakan hata sınıfıdır.

**Doğrulama yolu — öneri bunsuz kumardır:**
```
· önbellek WKB'siyle birlikte ANAHTAR'ını da taşır; yükleme anında
  yeniden hesaplanıp karşılaştırılır, tutmazsa sessizce YENİDEN ÜRETİLİR
· kullanılan ANAHTAR üç çıktının URETIM_IZI'ine yazılır → denetle_yayin.py
  "bu harita hangi geometriden çıktı" sorusunu dosyadan cevaplayabilir
· `--taze` bayrağı önbelleği tümüyle atlar; yayın öncesi son koşu
  HER ZAMAN `--taze` ile yapılır
· kabul sınavı: aynı girdiyle önbellekli ve önbelleksiz iki koşu,
  donemler.js + devletler_harita.js + bolgeler.js için BAYT BAYT aynı
```

## ⑤ YAPILAMAYANLAR

```
· Motor ÇALIŞTIRILMADI (görev kuralı). Yama uçtan uca denenmedi;
  sözdizimi denetlendi, zamanlayıcı yardımcıları kendi metninden
  çıkarılıp ayrıca sınandı, önbellek 25 tarihte doğrulandı.
· Ölçüm PETEK_D'nin KENDİSİYLE değil, petek_govde.js'ten geri kurulmuş
  hâliyle yapıldı (koordinatlar 3 ondalığa yuvarlı) + kara maskesi yeniden
  kuruldu. Bilançonun 221/222 dk ile kapanması bunun iyi bir vekil
  olduğunun delilidir, ama alt kalemler ± okunmalıdır.
· İlk fazın kuşatılmışlık DIŞI ~8 dakikası ve son fazın 21 dakikası
  AYRIŞTIRILMADI. Bunları bir sonraki koşunun kendi bilançosu yazacak —
  görev tanımının asıl istediği de buydu.
· Yamanın hız kazancı MODEL: 281 dk → ~50 dk. Gerçek sayı Oturum 0'ın
  koşusundan gelir.
```

## ⑥ 130 BOZUK KENAR — ölçüldü, sebep bulundu

```
kıyı kesimi sonrası örtü: 130 bozuk kenar (taban 32) ✗ TABANIN ÜSTÜNDE
```

### Cevap: iki ayrı olay tek sayaçta toplanıyor, ve taban bayat

130 kenarın 130'u ayrı yerleşimden. Logdaki WKT'ler ayrıştırılıp her kenar
coğrafi olarak konumlandırıldı (kara maskesi + Natural Earth çöl poligonları):

```
  ÇÖL   (kıyıdan >25 km uzak)      73     ← YENİ SINIF, kıyıyla ilgisi YOK
  KIYI  (<1 km)                    57     ← belgelenmiş ULP sınıfı
  ────────────────────────────────────
                                  130     (artık kalmadı)
```

**Bir kıyı kesimi artefaktı Ténéré'nin ortasında, kıyıdan 470 km içeride
olamaz.** Agadez · Ma'tan es-Sarra · Hoggar · Tibesti · Kaşgar · Hotan ·
Turfan · Ürümçi · Hohhot · Baotou · Dunhuang — hepsi iç çöl.

### Sebep: ÇÖL TAVANI, ve bu KASITLI bir şey

Sayaç `_bozuk_dok(PETEK_D, "kıyı")` diye etiketli ama **kıyı kesiminden dört
aşama sonra** koşuyor: kıyı kesimi → ada kuralı → kara-kısıtlı sahiplik →
**çöl tavanı** → sayaç. Çöl tavanı 82 peteği kısaltıp **4.609.677 km²'yi
sahipsizleştiriyor** ve bunu bilerek yapıyor (*"tavan yalnız ÇIKARIR"*).

Sahipsiz alan = örtüde **delik** = `coverage_invalid_edges`in bildirmesi
gereken şey. Sayaç doğru çalışıyor; **ölçtüğü şey kusur değil, özellik.**

Mekanizma: her yerleşim KENDİ noktasına 300 km'lik diskle kesiliyor. Yan yana
iki çöl peteği ortak kenarlarını farklı disklerle kesince aralarında sahipsiz
bir şerit kalıyor. İki bağımsız delil:

```
① kesişim  — çöl tavanının EN ÇOK kısalttığı 12 peteğin 11'i bozuk kenar
             bildiriyor (Agadez · Agadir · Cenîne · Hazârasp · Hoggar ·
             Kalgan · Kaşgar · Ma'tan es-Sarra · Ndjamena · Tibesti · Timbuktu)
② yarıçap  — çöl sınıfındaki kenarların kendi yerleşim noktasına uzaklığı:
             medyan 311 km, 44/73'ü ≥270 km → tam diskin kenarında
```

Karşı sınama: **kara-kısıtlı sahiplik devri sebep DEĞİL** — logda adı geçen
37 yerleşimin yalnız 1'i bozuk kenar bildiriyor (Padang).

### Ve taban 32, bu motorun tabanı değil

```
31 Temmuz 14:01   a148161   BOZUK_KIYI_TABAN = 32 ölçüldü (r217)
31 Temmuz 18:43   2254268   ÇÖL TAVANI eklendi (r280)      ← 4s42dk sonra
02 Ağustos 15:10  6bfcc0d   KUTU AÇILDI (Asya · Endonezya · Japonya)
```

Taban ölçüldüğünde **çöl tavanı henüz yoktu** — sahipsiz alan üreten aşama
yoktu, yani çöl sınıfı var olamazdı. Kutu da küçüktü: Taklamakan, Gobi,
Endonezya, Filipinler kapsamda değildi ve nokta sayısı 951'di. **Taban iki
yapısal değişiklikten sonra hiç yeniden ölçülmedi.**

Kıyı sınıfı tek başına alındığında büyüme oransal:
```
  nokta   951 → 1.579   1,66×
  kıyı sınıfı  32 → 57   1,78×    (üstelik kıyı çok daha parçalı:
                                   Endonezya · Filipinler · Japonya · Ege)
```
⇒ **Kıyı ekseninde de yeni bir uyuşmazlığa delil yok.**

### Hüküm

**✗ YANLIŞ ALARM.** 130 sayısı iki alakasız olayın toplamı ve 32 tabanı
başka bir motordan kalma. Bugünkü çıktının bozulduğuna dair delil yok —
ama bu satır bugünkü hâliyle **her koşuda ✗ basacak ve gerçek bir regresyon
çıktığında kimse bakmayacak.** Deponun kendi vakası birebir bu:
> *"⚠️ BU SATIR YILLARDIR '✗' BASIYORDU VE KİMSE BAKMIYORDU"*

### Yama — UYGULANDI (koordinatör kararı, 3 Ağustos)

Ölçüt **gevşetilmedi** (`CLAUDE.md §11`) — tabanı 130'a çekmek yanlış cevap
olurdu, çünkü 130'un 73'ü kasıtlı sahipsiz alanın kenarı. Bunun yerine sayaç
ikiye ayrıldı ve **nöbetçi çöl tavanının ÖNÜNE alındı**:

```
uret_petek.py:968   _nk0 = _bozuk_dok(PETEK_D, "çöl öncesi")   ← NÖBETÇİ
                    taban 57 · ✗ basabilir
uret_petek.py:1193  _nk  = _bozuk_dok(PETEK_D, "çöl sonrası")  ← BİLGİ
                    "çöl öncesi N → tavanın açtığı M; BEKLENEN"
```

📌 Yeni nöbetçi, taban 32'yi üreten r217 koşusuyla **aynı ölçümdür** (kıyı
kesimi + ada kuralı + kara-kısıtlı sahiplik sonrası). Yalnız yeri düzeltildi;
ölçtüğü şey değişmedi, o yüzden karşılaştırma anlamlı kaldı.

**`BOZUK_KIYI_TABAN` 32 → 57.**

⚠️ **57 türetilmiş bir sayıdır, ölçülmüş değil — ve saklanmıyor.** Çöl tavanı
SONRASI çıktının sınıflandırılmasından geldi; nöbetçi ise artık çöl tavanı
ÖNCESİNDE duruyor. İki nokta aynı geometriyi görmüyor, dolayısıyla ilk koşu
57'yi doğrulayabilir de düzeltebilir de.

Bu yüzden nöbetçi **ÇİFT YÖNLÜ** yazıldı — üç dalı da sınandı:

```
  ölçülen 57  →  ✓
  ölçülen 92  →  ✗ TABANIN ÜSTÜNDE — YENİ UYUŞMAZLIK
  ölçülen 41  →  ✓ — ⚠️ TABAN GEVŞEK, BOZUK_KIYI_TABAN = 41 yapılmalı
```

🔴 Alt dal, bu bölümün anlattığı hastalığın **tekrarını önlemek için** var:
bu depoda ölçülmüş bir sabit, motor altından değiştiğinde yeniden ölçülmüyor
(taban 32 · `_KUS_BEKLENEN` 8 ad · `MOTOR-3` görev tanımındaki bayat
`1 ✓ 1579/50` satırı — üçü de aynı sınıf). Yalnız üst sınırı bekleyen bir
nöbetçi, tabanın **gevşediğini** asla söylemez. Artık koşu kendi tabanını
düzeltmeyi teklif ediyor.

⇒ **İlk koşudan sonra yapılacak tek iş:** log "TABAN GEVŞEK" ya da "TABANIN
ÜSTÜNDE" diyorsa `BOZUK_KIYI_TABAN` o sayıya çekilir ve gerekçesi buraya
yazılır. "✓" diyorsa 57 doğrulanmış demektir.

## 🔴 YOL ÜSTÜNDE BULUNAN, BENİM İŞİM OLMAYAN

`kuşatılmışlık devri` listesinde **44 ad `✗ BEKLENMEDİK — İNCELE`** basıyor
(`_KUS_BEKLENEN` 8 adlık, veri 1.579 noktaya çıkmış). Uyarı mekanizması
çalışıyor ama beklenen küme bayat — bir öncekiyle **aynı hastalık**: ölçülmüş
bir sabit, motor altından değişince yeniden ölçülmemiş. Ya güncellenmeli ya
da 44 vaka incelenmeli.

---

## BİTİŞ ÖLÇÜTÜ — durum

```
✓ bir sonraki koşu kendi aşama bilançosunu YAZIYOR    (yama hazır)
✓ 3s42dk'lık bloğun içi isimlendirildi                (%96 kuşatılmışlık,
                                                       %4 gövde geometrisi)
✓ "bölünebilir mi" sorusunun cevabı gerekçeli          (HAYIR — %16 kazanç,
                                                       sessiz bayat riski)
```

⚠️ **Çıktı değişmemeli şartı:** yama davranışı değil yalnız TEKRARI kaldırıyor
ve bu ölçüldü (25 tarih, fark 0). Koşudan sonra `denetle.py` şu satırı
birebir vermelidir:

```
1 ✓ 1579/50 · 1b ✓ 0 · 2 ✓ 493/0 · 2s 119 · 2t 52 · konum ✓ 0
```

Bir sayı bile oynarsa yama geri alınır. Geri alma **üç bağımsız parçaya**
ayrılabilir, hiçbiri diğerini gerektirmez:

```
① zamanlayıcı      yalnız print + line_buffering — veriye dokunmaz
② önbellek         _ic_kara · _cep · _PETEK_MUHUR — 25 tarihte fark 0
③ bozuk kenar      _nk0 nöbetçisi + taban 57 — yalnız ölçüm/print
```

📌 ①'in ve ③'ün `donemler.js` · `devletler_harita.js` · `bolgeler.js`
üzerinde **hiçbir etkisi olamaz**: ikisi de yalnız `print` yapıyor, tek
veri yazan ②'dir ve o da çıktı-aynılığı sınavından geçti.

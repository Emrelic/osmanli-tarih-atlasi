# KUTU BULGULAR — Emre'nin 71 açık maddesinin ölçümü

> Oturum: **KUTU DENETİM** (ÇAPRAZ · Opus) · salt okur, veriye dokunmaz.
> Kaynak liste: `denetim/KUTU-ACIK-MADDELER.md` (71 madde)
> Şartname: `oturumlar/KUTU-DENETIM.md`

## Ölçüm tabanı — bu raporun altında durduğu zemin

```
yerleşim (girdi.py, 36 dosya)   2308        §1.5 ile uyuşuyor ✓
petek gövdesi (petek_govde.js)  2308        yayın veriyle AYNI sayıda ✓
kronoloji (olaylar*.js, 16)     1158        §1.5 ile uyuşuyor ✓
devlet künyesi (devletler.js)    390        §1.5 ile uyuşuyor ✓
git                              a08f98a
```

⚠️ **Ekran görüntüleri yayının ESKİ bir koşusundan.** `petek_govde.js` bugünkü
2308 noktayı taşıyor; Emre'nin görüntüsü alındığında taban daha küçüktü. Bu
yüzden bazı şikâyetler **bugün ölçülünce ÜREMİYOR** — bu "Emre yanılmış"
demek değil, "o günden beri kapanmış (ya da hâlâ açık ama benim çözünürlüğümün
altında)" demektir. Her böyle kalemde bunu açıkça yazıyorum.

### Kullanılan aletler (scratchpad, geçici)
| alet | ne yapar |
|---|---|
| `q.py` | `girdi.yukle()` ile 2308 noktayı yükler; `sahip(y,gün)` herhangi bir günde sahibi verir |
| `petek.py` | `petek_govde.js` + `PETEKLER` → **"ekranda bu koordinatı KİM boyuyor"** sorusunu cevaplar |
| `kron.py` | `olaylar*.js`i **node ile** ayrıştırır (kendi ayrıştırıcımı yazmadım — `§11`) |
| `hayalet.py` | `s:` dönemi künyenin `f:`/`t:` ömrünün dışına taşan kayıtları tarar (`§3.5`) |

🔴 `petek.py` bir **UYARI** taşır: `petek_govde.js` ZAMANSIZ taban geometridir
(`kur:`/`bit:` devirlerini taşımaz). Geometri **YAYINDAN**, sahiplik **VERİDEN**
okunuyor; ikisi arasında bir tur gecikme olabilir (`§11` "çıktı girdinin bir tur
gerisindedir").

---

# parti-0002 — 8 madde

## H-0003 · göllerin üzerini harita rengi kaplıyor

```
① TEŞHİS  gercek
② SEBEP   VERİ-YOK (kaynak katmanında göl YOK) + MOTOR (alan eşiği)
```

**Ölçüm — iki ayrı sebep, ikisi de ölçüldü:**

**(a) Kaynak katmanı Anadolu göllerini HİÇ TAŞIMIYOR.**
`veri-kaynak/ne_10m_lakes.geojson` 1355 göl taşıyor; **35–43°K / 25–45°D
kutusunda YALNIZ 8 tanesi var**: Eğirdir · Beyşehir · Tuz · Van + dört baraj.
`admin=="Turkey"` etiketli **sıfır** kayıt var. Adıyla arandı, **bulunamadı**:

```
İznik · Sapanca · Manyas · Ulubat · Burdur · Akşehir · Çıldır · Hazar → HİÇBİRİ YOK
```

🔴 Ve H-0003'ün ekran görüntüsü (`1324-03-01 · 40,24-40,62K / 29,11-29,95D`)
tam **İznik Gölü'nün** üstünde (40,43K/29,52D). Emre'nin gördüğü göl budur.
İznik Gölü ~298 km² = **0,0314 deg²**, yani motorun 0,02 eşiğinin **ÜSTÜNDE** —
kaynakta olsaydı kesilecekti. ⇒ Bu kalemde motorun hiçbir kusuru yok, **kaynak
verisi eksik.**

**(b) Motorun kendi alan eşiği 281 gölü daha eliyor.**
`uret_petek.py:309` → `g.area > 0.02` (deg²). Pencere içinde bu eşiğe takılan
**281 göl** var, toplam ~**20.624 km²**. İçlerinde tarihen anlamlı olanlar:

```
Ölü Deniz        198 km²      Taberiye (Sea of Galilee)   160 km²
Lough Derg 137 · Lough Ree 112 · Müritz 106 · Bracciano 110 …
```

📌 Eşik `Reservoir` kuralından **ÖNCE** çalışıyor, yani eşik düşürülürse baraj
koruması **bozulmaz** (kod sırası: önce alan, sonra baraj). Bu, çareyi ucuz ve
güvenli kılıyor.

```
③ ÇARE (SEN YAZ, ben yazmam)
   (a) data/goller.js — dosya zaten "motorun modern kara maskesini düzelten EK
       göl poligonları" için var. İznik · Sapanca · Manyas · Ulubat · Burdur ·
       Akşehir · Çıldır · Hazar poligonları buraya eklenir.
   (b) arac/uret_petek.py:309 — `g.area > 0.02` eşiği düşürülür (öneri 0,004
       ≈ 40 km²). Baraj kuralı sırada SONRA olduğu için anakronik delik riski
       DOĞMAZ; yine de §3.5.1 gereği koşudan sonra iki uç da ölçülmeli.
```
⚠️ **ÖLÇMEDİM:** eşik düşürüldüğünde kaç yeni petek deliği doğacağını
ölçmedim — bunun için üretim koşusu gerekir, o benim yetkim değil.

---

## H-0005 · "bu rengin arkasındaki koyu ek alanlar / ek katmanlar ne"

```
① TEŞHİS  gercek (görüntü gerçek) — ama BOZUKLUK DEĞİL
② SEBEP   ARAYÜZ
```

**Ölçüm (piksel):** `H-0005-1.png` içinde **10.208 ayrı renk** var; baskın iki
dolgu tonu `#8a3958` (koyu) ve `#9a4053`/`#aa5257` (açık). Hesap:

```
osmanli-dolgu (app.js:767)   fill-color #8e0b22 · fill-opacity 0,68
0,68·(142,11,34) + 0,32·(açık kara)  =  #aa4f57   ← ölçülen açık ton ✓
```

⇒ **%32 saydamlık her yerde altlığı geçiriyor.** Altlık bir **raster**
(uydu/kabartma); nerede karanlıksa (orman, dağ gölgesi) kırmızı orada koyulaşır.
ASCII'ye indirgenmiş görüntüde iki ton arasındaki sınır **düz değil, bulanık ve
lekeli** — yani bir poligon kenarı DEĞİL, arazi dokusu.

📌 İkinci kanıt: 1331'de Osmanlı'nın **tâbisi yok**, yani "vassal-dolgu +
osmanli-dolgu üst üste bindi" açıklaması veriyle çelişiyor. Geriye tek
açıklama kalıyor: raster.

```
③ ÇARE  ARAYÜZ (Oturum 1) — üç seçenek, ölçülmedi hangisi iyi:
        (a) dolgu opaklığı yükseltilir (0,68 → ~0,80)
        (b) raster'in altına düz bir kara katmanı konur
        (c) 🟢 EN İYİSİ: app.js:598-609'daki ALTLIK_KATMAN Grup A
            (g-kara #e8dfc8 · g-gol · g-dag) zaten YAZILI ve visibility:none.
            "Kademe 3" tasarımı bu işi çözmek için orada duruyor.
```
⚠️ **ÖLÇMEDİM:** canlı haritada raster'i kapatıp tonun kaybolduğunu
DOĞRULAMADIM. Teşhis piksel ölçümü + kod okumasına dayanıyor, canlı sınamaya
değil. Kesin sınav: raster kapatılıp aynı kare tekrar alınır.

---

## H-0011 · başkent yıldızı  (+ p4/H-0011 + emrelic-0008/H-0006 ile AYNI AİLE)

```
① TEŞHİS  gercek — ama ÜÇE BÖLÜNÜYOR ve biri ZATEN ÇÖZÜLMÜŞ
② SEBEP   (a) zaten-dogru · (b) ARAYÜZ · (c) VERİ MODELİ
```

**(a) "Söğüt+Bursa+Edirne+İstanbul aynı anda yıldızlı" → ÇÖZÜLMÜŞ.**
`js/app.js:1497-1516` `osmanliBaskentPencereleriKur()` dört başkenti **zamanlı**
pencerelere ayırıyor (`fi`/`ti`), `osmanliBaskentMi()` (1517) o güne bakıyor.
Kodun kendi yorumu Emre'nin eski şikâyetini anıyor ve kapattığını söylüyor.
⇒ **Bu şık artık açık değil.** (Emre'nin gördüğü kare bu düzeltmeden ÖNCE
alınmış olabilir — yeni bir karede sınanmalı.)

**(b) "Yıldız metnin yanında değil ŞEHRİN NOKTASI yıldız olsun" → AÇIK.**
`app.js:1792` yorumu: *".baskent bir de ::after ile ⭐ ekliyor"* — yani yıldız
**etikete** yapışık, sembole değil. Emre'nin tarifi daha doğru ve uygulanabilir.

**(c) "Diğer devletlerin başkentleri de yıldızlı olsun" → VERİ MODELİ ENGELİ.**
Ölçüldü:
```
390 künyenin 389'unda `baskent` DOLU        ✓ veri var
Dizi (birden çok başkent) olan künye:   0   🔴 hepsi TEK metin
`osmanli` künyesinde `baskent`:  undefined  🔴 hiç yok
```
🔴 **Ve zincir metnin İÇİNDE saklı:** `safevi.baskent = "Tebriz → Kazvin →
İsfahan"`. Yani bilgi **var** ama **ayrıştırılamaz** ve **tarihsiz**.

```
③ ÇARE  (b) → ARAYÜZ 2: yıldız sembolü noktaya taşınır.
        (c) → data/devletler.js (VERİ DEVLET 2): `baskent` alanı
              [{f,t,ad}] penceresine çevrilir. 389 künyeden en az
              1'i (safevi) zaten prozada üç aşamalı — ayrıştırılıp
              tarihlendirilecek.
        (a) → kapatılabilir, ama ÖNCE yeni bir ekran görüntüsüyle sınansın.
```

---

## H-0013 · Karesi ilhakında Gelibolu'dan toprak alınmış görünüyor

```
① TEŞHİS  zaten-dogru (BUGÜNKÜ GEOMETRİDE) — ihlal ÜREMİYOR
② SEBEP   —
```

**Ölçüm (üç ayrı yoldan, üçü de aynı sonuç):**

```
1. 0,01° ızgara (39,92-40,73K / 25,87-26,96D, ekranın tam kutusu)
   → Boğaz'ın AVRUPA yakasında 1345-01-01'de OSMANLI hücre: 0
2. Çanakkale peteğinin batı ucu ile motor_kara kıyı çizgisi, enlem enlem:
      enlem   Avrupa kıyısı biter  Asya kıyısı başlar   petek batı ucu
      40,14        26,358              26,404              26,403
      40,15        26,371              26,404              26,403
      40,16        26,366              26,403              26,4018
      40,18        26,350              26,401              26,3997
   ⇒ petek her enlemde ASYA KIYISINDA duruyor, suya bile girmiyor.
3. Avrupa yakasındaki her hücrenin sahibi: Maydos · Çimpe · Kilitbahir ·
   Gelibolu · Bolayır — 1345'te BEŞİ DE `bizans`.
```

📌 Emre'nin **tarih bilgisi doğru** (Osmanlı karşı kıyıya Çimpe ile geçti,
1352) ve veri onu **doğruluyor**: Çimpe 1352'de, Gelibolu/Bolayır/Maydos/
Kilitbahir 1354'te Osmanlı oluyor.

```
③ ÇARE  YOK — düzeltilecek bir şey ölçülemedi.
        🔴 SENDEN: eğer Emre BUGÜNKÜ yayında hâlâ görüyorsa YENİ bir ekran
        görüntüsü gerekiyor. Eski karede gördüğü kırmızı kıymık, o koşudan
        beri eklenen noktalarla kapanmış olabilir.
```
⚠️ **ÖLÇÜM SINIRI:** ızgara adımım 0,01° (~850 m) ve ayrıca ~180 m'lik ince
tarama yaptım; **180 m'den dar bir kıymığı göremem.** Ama ②'deki geometrik
karşılaştırma ızgaradan bağımsız ve o da 0 diyor.

---

## H-0014 · Gelibolu'nun alınışında Saroz'un kuzeyi de eklenmiş

```
① TEŞHİS  anlasilmadi — ÖNCEKİ HÜKÜM SORUYU ZATEN EMRE'YE İADE ETMİŞ
② SEBEP   (teşhis: NOKTASIZLIK — doğrulandı)
```

**Doğruladığım kısım:** Bolayır (40,532/26,750) ile Keşan (40,848/26,633)
arasında **36 km** boşluk var ve aradaki üç yerleşim (Keşan · İpsala ·
Malkara) 1354'te **hâlâ `bizans`**, ancak **1357**'de Osmanlı oluyor.
⇒ 1354-03-02'de Bolayır'ın peteğinin kuzeye taşması **yapısal olarak
mümkün** ve önceki hükmün teşhisi doğru.

**Doğrulayamadığım kısım:** ölçemedim, çünkü `H-0014-1.png` ve `H-0014-2.png`
**AYNI görsel** ve **ikisinde de künye çubuğu kırpık** — hangi tarihte
bakıldığı okunamıyor.

```
③ ÇARE  🔴 EMRE'YE TEK CÜMLELİK SORU:
        "Gelibolu'nun alınışı maddesinde Saroz'un kuzeyini gösteren kareyi,
         alt künye çubuğu (tarih + koordinat) GÖRÜNECEK şekilde yeniden
         alabilir misiniz?"
```
📌 Önceki hüküm nokta eklemenin **neden yapılamadığını** da yazmış: aradaki tek
aday **Evreşe** ve adını **Gazi Evrenos**'tan alıyor — 1357 öncesi bir Bizans
noktası olarak yazılamaz. Bunu doğrulamadım, **ölçmedim.**

---

## H-0015 · Ankara ile birlikte Sivrihisar ve Çankırı da alınmış görünüyor

```
① TEŞHİS  gercek — ve Emre'nin gördüğünden DAHA CİDDİ
② SEBEP   TARİH (uydurma/toplu kırılma günü)
```

**Ölçüm:**
```
kronolojide 1354-01-01 → 1355-06-01 arası SADECE İKİ madde var:
    1354-03-02  Gelibolu'nun alınışı
    1354-08-01  Ankara'nın alınışı            ← tek madde

veride 1354-08-01'de Osmanlı'ya geçen ÜÇ nokta:
    Ankara      s: ahiler   1281-01-01 → 1354-08-01
    Sivrihisar  s: germiyan 1300-01-01 → 1354-08-01
    Çankırı     s: candar   1309-01-01 → 1354-08-01
```

🔴 **Ve asıl bulgu Emre'nin sorusunun ötesinde.** O *"doğru ise maddeye
ekleyelim"* diyor; ölçüm **iki tarihin de şüpheli olduğunu** söylüyor:

```
Sivrihisar  Germiyan'dan Osmanlı'ya ÇEYİZLE geçti (Şehzade Bayezid –
            Devletşah Hatun, 1381 civarı) — veri 1354 diyor, ~27 yıl ERKEN
Çankırı     Candaroğulları'ndan Yıldırım'ın 1392 Kastamonu seferiyle alındı
            — veri 1354 diyor, ~38 yıl ERKEN
```
⚠️ **BU İKİ CÜMLE ÖLÇÜLMEDİ, HATIRLANDI.** TDV'den doğrulanmadı. `§11`in
*"ölçmediğini `ölçmedim` diye yaz"* kuralı gereği açıkça işaretliyorum —
`sivrihisar` ve `cankiri` sluglarını sınamadım.

📌 Ve bir yan bulgu, `hayalet.py`den: `ahiler` künyesi **1290-01-01 →
1354-01-01**, ama Ankara'nın `s:ahiler` dönemi **1281-01-01 → 1354-08-01**.
İki uçta da taşıyor: **9,0 yıl erken · 0,6 yıl geç.**

```
③ ÇARE  ① data/olaylar_ek.js · 1354-08-01 "Ankara'nın alınışı" maddesi —
           Sivrihisar ve Çankırı ADIYLA anılacak (Emre'nin istediği bu).
           🔴 AMA ÖNCE ②.
        ② data/yerlesimler.js · Sivrihisar ve Çankırı `s:` bitişleri
           TDV'den doğrulanacak. Erken çıkarsa üçünü tek güne bağlamak
           yanlış olur ve o zaman ① de değişir.
        ③ data/yerlesimler.js · Ankara `s:ahiler` iki ucu künyeye çekilecek
           (ya da künye veriye) — hangisinin doğru olduğu TDV `ahiler`den
           okunacak. ⚠️ `ahiler` slugu p4'te "kalıcı bulunamadı" diye
           kayıtlı, yani bu kalem kaynaksız kalabilir.
```

---

## H-0016 · Tuz Gölü etrafında hatalı iki küçük toprak

```
① TEŞHİS  gercek — ve biri TAM BİR HAYALET
② SEBEP   ① HAYALET  ② NOKTASIZLIK
```

**Ölçüm — Emre'nin gördüğü iki yeşil parça:**

```
görüntü: 1354-08-01 · 38,42-39,22K / 32,98-33,81D
etiketler: "ERETNA BEYLİĞİ"  ve  "İLHANLI DEVLETİ"
```

🔴 **① "İLHANLI DEVLETİ" bir HAYALET — 13 yıllık.**
```
devletler.js  ilhanli  f:1256-01-01  →  t:1353-01-01
veride        Konya · Aksaray · Niğde   s:ilhanli  1308-01-01 → 1366-01-01
                                                              ↑
⇒ künyenin BİTİŞİNDEN 13,0 YIL SONRAYA kadar boyanıyor.
   Emre'nin karesinde (1354-08-01) devlet 1 yıl 7 aydır ÖLÜ.
```
Bu tam olarak `CLAUDE.md §3.5`in tarif ettiği sınıf: *"Hiçbir değişmez 'bu
devlet o tarihte yaşıyor mu' diye sormaz."* Üç değişmez de **temiz** raporluyor.

🟡 **② "ERETNA BEYLİĞİ" hayalet DEĞİL — künye 1335-1381, kayıt geçerli.**
Ama gövdesi kıymık gibi, çünkü:
```
Tuz Gölü merkezine (38,771/33,406) en yakın noktalar:
    70,8 km  Aksaray    (ilhanli)     77,7 km  Kırşehir  (eretna)
   127,9 km  Konya      (ilhanli)    137,5 km  Ankara    (OSMANLI)
   142,6 km  Niğde      (ilhanli)
```
⇒ Gölün çevresinde **~70 km yarıçapta tek nokta yok.** `§2` emilme kuralı:
noktasız bölge en yakın peteğe düşer, ve o petek 70-140 km öteden geliyor.
Kıymık şekiller bunun sonucu.

```
③ ÇARE  ① data/yerlesimler.js — Konya · Aksaray · Niğde `s:ilhanli`
           bitişi 1366-01-01'den geri çekilecek.
           🔴 AMA §3.5.1: İKİ UÇ DA ÖLÇÜLÜR. Boşluğu kim dolduracak?
           1353-1366 arası Orta Anadolu'da Eretna'nın genişlemesi mi,
           Karaman mı? Tek uçtan çekmek hayaleti KALDIRMAZ, TARAF
           DEĞİŞTİRİR (`§3.5.1` İbrim/Sevâkin vakası).
           ⇒ Bu kalem VERİ ARAŞTIRMA'ya gitmeli, bana değil.
        ② Tuz Gölü havzasına nokta: Şereflikoçhisar · Cihanbeyli ·
           Koçhisar · Sultanhanı · Eskil — 5 nokta boşluğu kapatır.
           (NOKTA oturumu kalemi.)
```
⚠️ **ÖLÇMEDİM:** 1353-1366 arasında bu üç şehrin gerçek sahibinin kim
olduğunu araştırmadım — o bir kaynak işi ve benim haddim ölçmek.

---

## H-0025 · Timur Bağdat'ı zaptetti, haritada görünmüyor  (= p3/H-0008)

```
① TEŞHİS  gercek — ÇİFT DOĞRULANDI, ve Emre İKİ KEZ HAKLI
② SEBEP   TARİH (eksik kırılma)
```

**Ölçüm — kronoloji ile veri TERS YÖNDE ayrışıyor:**

```
KRONOLOJİDE İKİSİ DE VAR:
  1393-08-29  Timur Bağdat'ı zaptetti — Celâyirliler Anadolu'ya kaçtı  [EK5]
  1401-01-01  Timur Bağdat'ı ikinci defa işgal etti                    [EK11]

VERİDE (yerlesimler.js · Bağdat 33,340/44,361) HİÇBİRİ YOK:
  s: 1281-01-01 → 1335-12-01  ilhanli
  s: 1335-12-01 → 1411-01-01  celayirli      ← 75 YIL TEK PARÇA
  s: 1411-01-01 → 1469-01-01  karakoyunlu
  ...
  `timurlu` kelimesi Bağdat kaydında SIFIR kez geçiyor.
```

🔴 **Bu, `Değişmez 2`nin TERS YÖNÜDÜR ve hiçbir denetim onu sormuyor.**
Değişmez 2 *"her kırılmanın maddesi var mı"* diye sorar. Buradaki kusur
tersi: **madde var, KIRILMA yok.** Yani madde ekranda geçiyor ve harita
kılını kıpırdatmıyor — Emre'nin şikâyeti birebir bu.
📌 Aynı sınıf `p4/H-0006`da da var (Erzurum/Van) ve `p3/H-0010`da da
(Aydın'ın dirilişi). ⇒ **Tek bir denetim üçünü birden kapatır.**

**Yan bulgu (`hayalet.py`):** `celayirli` künyesi **1340-01-01**'de başlıyor
ama **34 kayıt** `1335-12-01`den itibaren celayirli yazıyor → **4,1 yıl erken.**
Bu, `CLAUDE.md §11`de yazılı **İran fetreti** vakasının Bağdat ayağı:
1335-12-01 Ebû Saîd'in ölüm günü, hiçbir ardılın gerçek başlangıcı değil.

```
③ ÇARE  data/yerlesimler.js · Bağdat kaydı — tek `celayirli` dönemi
        DÖRDE bölünecek:
            1335-12-01 → 1393-08-29   celayirli   (başlangıcı ayrıca şüpheli)
            1393-08-29 → ????         timurlu
            ????       → 1401-??-??   celayirli   (Ahmed Celâyir döndü)
            1401-??-?? → ????         timurlu
            ????       → 1411-01-01   celayirli
        🔴 SORU İŞARETLERİNİ BEN DOLDURAMAM — TDV `bagdat` + `celayirliler`
        + `timur` maddelerinden okunacak. ⚠️ Ve kronolojideki 1401-01-01
        YUVARLAK bir tarih; TDV gün veriyorsa madde de düzeltilmeli
        (`§11`: yuvarlak tarih yalnız yanlış değil, çelişkiyi de SAKLAR).
```
⚠️ **ÖLÇMEDİM:** TDV'ye bakmadım — dönüş tarihlerini uydurmamak için boş
bıraktım. `bulunamadı` değil, **arANMADI**.

---

# parti-0003 — 10 madde

## H-0006 · Anadolu Selçuklu'nun yıkılışı kronolojide tam olarak yer alıyor mu?

```
① TEŞHİS  gercek — CEVAP NET: HAYIR, HİÇ YOK
② SEBEP   TARİH (sessiz toprak değişimi — Değişmez 2'nin yabancı kanadı)
```

**Ölçüm:**
```
"Selçuk" kelimesi 1158 maddenin YALNIZ 3'ünde geçiyor ve HİÇBİRİ yıkılış değil:
    1281-01-01  Ertuğrul Gazi'nin ölümü …
    1299-01     Osmanlı Beyliği'nin kuruluşu
    1471-01-01  Alanya, Anamur ve Silifke'nin ilhakı
⇒ Anadolu Selçuklu Devleti'nin SONU kronolojide SIFIR kez anılıyor.
```

🔴 **Ve harita onu ÜÇ SESSİZ DALGADA eritiyor:**
```
`selcuklu` kimliği 23 noktada var; bitiş tarihleri:
    1297-01-01   6 nokta
    1300-01-01  11 nokta
    1308-01-01   6 nokta   ← II. Mesud'un ölümü, devletin fiilî sonu
```
**1308-01-01 gününde 24 kırılma ucu var** (12 yerleşim: Konya · Aksaray ·
Niğde · Ayasuluk · Aydın · Birgi · Tire · Söke · Kuşadası · Bartın · Eflani ·
Safranbolu) ve o güne en yakın kronoloji maddesi:
```
    geriye  1305-06-01  Katalan seferi        -579 gün
    ileriye 1313-01-01  Köse Mihal           +1827 gün
⇒ ±30 gün ölçütüne göre AÇIK, ve en yakın madde 579 GÜN ötede.
```
📌 `denetle.py` bunu **görüyor** — ama `Değişmez 2s` (yabancı senkron)
kanadında, ve o kanadın 121'lik açık tavanı bunu **kabul edilmiş borç**
sayıyor. Yani denetim yanlış değil; **Emre kabul edilmiş borcun içinden
gerçek bir kalemi gözle çekip çıkarmış.**

```
③ ÇARE  data/olaylar_ek*.js — en az iki madde:
          1308-01-01  II. Mesud'un ölümü ve Anadolu Selçuklu Devleti'nin sonu
          (isteğe bağlı) 1300 ve 1297 dalgaları için birer madde
        ⚠️ 1297/1300/1308 üçlemesinin KENDİSİ de sınanmalı: üç ayrı yuvarlak
        yıl, üçü de gün taşımıyor (`§11` yuvarlak tarih kuralı).
```
⚠️ **ÖLÇMEDİM:** TDV `anadolu-selcuklulari` maddesine bakmadım; 1308'in doğru
gün olup olmadığını sınamadım.

---

## H-0007 · Ordu-Ünye açık tonda, üstünde beylik ismi yok

```
① TEŞHİS  gercek — VE SORUNUN CEVABI "İKİSİ DE"
② SEBEP   ARAYÜZ (tâbi gövde kendi kimliğinin adını taşımıyor)
```

**Ölçüm — ekran künyesi `1398-07-15 · Kadı Burhâneddin Devleti'nin yıkılışı`:**
```
Ünye            41,128/37,283      Ordu (Bayramlı)   40,976/37,848
   s: 1281-01-01 → 1350-01-01  trabzon-rum
   s: 1350-01-01 → 1427-06-01  haciemir      ← KİMLİK BURADA, hâlâ CANLI
   v: 1398-06-01 → 1402-07-28  (boş)         ← TÂBİ, 1398-07-15 BU PENCEREDE
   d: 1427-06-01 → 1923-10-29
```
⇒ **Emre'nin sorusu:** *"acaba bu zamanlar farklı bir beylik miydi, yoksa
Osmanlı'ya mı bağlı idi?"* → **İKİSİ BİRDEN.** Hacıemîroğulları beyliğiydi
**ve** 1398-06-01'den beri Osmanlı'ya tâbiydi. Açık ton **tâbiliği** doğru
gösteriyor; eksik olan **adı.**

📌 Kimlik veride tam: `devletler.js` → `haciemir | Hacıemîroğulları
(Bayramlı/Ordu) | 1350-01-01 → 1427-06-01`, ve `renkler.py:1467`'de kendi
rengi **`#ef6c00`** var. Yani ad da renk de hazır — **çizim onları `v:`
penceresinde kullanmıyor.**

📌 Kanıt aynı karede yan yana: **TÂCEDDİNOĞULLARI** yeşil ve **adıyla**
yazılı (o `s:` penceresinde, tâbi değil). Fark tam olarak `v:` ile `s:`
arasında.

```
③ ÇARE  js/app.js (ARAYÜZ 2) — `vassal-dolgu` (app.js:761) çizilirken o
        gövdenin ALTINDAKİ `s:` kimliği okunup etiket olarak basılacak.
        Öneri metin: "Hacıemîroğulları (tâbi)".
        ⚠️ Veri değişikliği GEREKMİYOR — kimlik zaten orada.
```

---

## H-0008 · Timur'un Bağdat'ı ikinci kez alışı görünmüyor

```
① TEŞHİS  gercek — p2/H-0025 ile AYNI KALEM, orada tam ölçüldü
② SEBEP   TARİH (madde var, kırılma yok)
③ ÇARE    p2/H-0025'e bak — Bağdat `s:celayirli` dörde bölünecek
```

---

## H-0009 · Fetret'te Timurlu valilikleri ve hortlatılan beylikler

```
① TEŞHİS  gercek (meşru doğrulama isteği) — AMA EMRE'NİN HATIRLADIĞI HARİTA
          BUGÜNKÜ HARİTA DEĞİL
② SEBEP   VERİ ARAŞTIRMA
```

**Ölçüm — 1403-06-15, Anadolu (36-42°K / 26-40°D), 26 ayrı kimlik:**
```
isa-celebi 53 · karaman 17 · suleyman-celebi 16 · candar 11 · memluk 11 ·
sovalye 10 · ceneviz 8 · aydin 8 · germiyan 8 · mehmed-celebi 7 · mentese 6 ·
bizans 5 · teke 4 · timurlu 3 · taceddin 3 · artuklu 3 · …
```
🔴 **Emre'nin cümlesi ölçümle ÇÜRÜDÜ:** *"timurlu valiliği olarak manisa aydın
denizli iç anadolunun hepsi var galiba"*
```
Manisa   = saruhan     Aydın   = aydin      Denizli = germiyan
Kütahya  = germiyan    Antalya = teke       Konya   = karaman
`timurlu` sahipli Anadolu noktası SADECE ÜÇ: Ankara · Sivas · Sivrihisar
```
⇒ Harita **Timurlu valiliği göstermiyor**, **hortlatılan beylikleri**
gösteriyor — ki tarihen standart tablo budur. Emre'nin *"galiba"* demesi
doğru bir tereddüt olmuş.

```
③ ÇARE  Düzeltilecek bir şey ölçülemedi. Ama Emre'nin ASIL isteği ("sınırları
        ile teyid, sıfır hata") meşru ve AÇIK: yukarıdaki 26 kimlikli tablo
        VERİ ARAŞTIRMA oturumuna TABAN olarak verilir, TDV `fetret-devri` +
        beylik maddeleriyle tek tek sınanır.
```
⚠️ **ÖLÇMEDİM:** `timurlu` Ankara (1402-07-28→1404-03-01) ve Sivrihisar
pencerelerinin doğruluğunu kaynaktan sınamadım.

---

## H-0010 · Düzmece Mustafa maddesinde Aydınoğulları hortluyor

```
① TEŞHİS  gercek — ÖNCEKİ HÜKÜM DOĞRU, BEN DE ÖLÇTÜM
② SEBEP   TARİH (kırılma yanlış günün maddesine yapışmış)
```

**Ölçüm:**
```
1421-08-15 tarihli TEK madde var:  "Düzmece Mustafa ayaklanması"  [EK]
Cüneyd Bey maddesi:                1422-01-01                     [EK11]
                                    ⇒ 139 GÜN sonra

Aynı gün (1421-08-15) `aydin`e dönen SEKİZ yerleşim:
   İzmir · Aydın · Tire · Birgi · Ayasuluk (Selçuk) · Kuşadası · Söke · Çeşme
   (hepsi  d: …→1421-08-15  ve  s: 1421-08-15→1425-06-01 aydin)
```
⇒ Ekranda **"Düzmece Mustafa ayaklanması"** başlığı dururken harita
**Aydın-ili'ni Osmanlı'dan koparıyor.** Emre'nin gördüğü tam bu.

📌 **Ve `Değişmez 2` bunu göremez** — çünkü o gün bir madde VAR. Kusur
"maddesiz kırılma" değil, **"yanlış maddeye yapışmış kırılma"**. Aynı sınıf:
`p3/H-0019` (Karaman) · `p4/H-0006` (Erzurum-Van) · `p2/H-0025` (Bağdat).

```
③ ÇARE  data/yerlesimler.js — sekiz kaydın 1421-08-15 kırılması, Cüneyd
        Bey'in Aydın-ili'ne dönüşünün GERÇEK gününe taşınacak.
        🔴 O günü ben bilmiyorum: TDV `cuneyd-bey` / `aydinogullari`
        maddelerinden okunacak. Kronolojideki 1422-01-01 de YUVARLAK.
        ⇒ VERİ ARAŞTIRMA + VERİ KRONOLOJİ birlikte.
```

---

## H-0012 · Bosna ucunun ilhakı enklav şeklinde mi olmuş, tarihsel gerçek mi?

```
① TEŞHİS  gercek — ENKLAV GERÇEKTEN VAR ve ÖLÇÜLDÜ
② SEBEP   NOKTASIZLIK (şekli) + VERİ ARAŞTIRMA (kopukluğu)
```

**Ölçüm — ekran künyesi `1448-01-01 · Saray ovasının ilhakı`:**
```
Bosna kutusunda (42,4-45,8K / 15,5-20,5D) 1448-01-01'de OSMANLI olan
YERLEŞİM SAYISI: 2   →  Saraybosna · Visoko
Osmanlı gövdesinin bu kutudaki AYRIK PARÇA SAYISI: 1
   parça alanı 4.621 km² · bbox 17,85-18,86 D / 43,41-44,46 K
Çevresi: Foça · Koniçe · Vişegrad · Livno · Travnik · Yayça · Tuzla ·
         İzvornik · Srebrenik · Banaluka = HEPSİ `bosna`
```
⇒ **Enklav gerçek**: 4.621 km²'lik Osmanlı adası, Bosna Krallığı'yla çepeçevre
sarılı, ana gövdeye bağlantısı YOK.

**Üç ayrı soru, üç ayrı cevap:**
```
"Böyle bir uc GERÇEKTEN var mıydı?"  → tarihen SAVUNULUR (Vrhbosna/Hodidjed
                                       ucu 1430'lardan beri)   ⚠️ SINAMADIM
"Şekli DOĞRU MU?"                     → HAYIR. Kenarları Saraybosna ve
                                       Visoko peteklerinin orta dikmeleri;
                                       gerçek uc sınırı değil.
"Kopuk olması DOĞRU MU?"              → Vişegrad'ın `bosna` sayılmasından
                                       doğuyor. Drina hattı Osmanlı olsaydı
                                       enklav BAĞLANIRDI.     ⚠️ SINAMADIM
```

```
③ ÇARE  ① VERİ ARAŞTIRMA — TDV `bosna` + `saraybosna` (Vrhbosna ucu):
             1448'de uc gerçekten kopuk muydu, Vişegrad kimindi?
        ② NOKTA — Bosna'da 22 nokta var ama uc bölgesinde 2 tane;
             Hodidjed · Pale · Rogatica eklenirse şekil gerçeğe yaklaşır.
```
⚠️ **ÖLÇMEDİM:** 1448 Bosna ucunun kaynaktan doğrulanması. Şekil ölçüsü
benim, tarih hükmü DEĞİL.

---

## H-0014 · İstanbul fethedildiğinde Marmara Adası da fethedilmiş görünüyor

```
① TEŞHİS  gercek — AMA ARTEFAKT DEĞİL, BİLE BİLE YAZILMIŞ VERİ
② SEBEP   VERİ ARAŞTIRMA (kaynak sınaması gerekiyor)
```

**Ölçüm:**
```
"Marmara Adası" ADASININ KENDİ NOKTASI VAR (≈40,615/27,567)
   1450-01-01 → bizans        1453-05-29 → OSMANLI
   yani d: dönemi TAM İstanbul'un fethi gününde başlıyor.
Adayı kapsayan petek: KENDİ peteği (en yakın öteki nokta Erdek, 30,8 km).
```
⇒ **Önceki hükmün varsayımı ("anakaranın peteğine mi düşüyor") ÇÜRÜDÜ.**
Ada emilmiyor; kendi noktası var ve tarih **elle** 1453-05-29'a yazılmış.
📌 Bu, `§2` emilme ailesinden **değil**; bir veri/kaynak kalemi.

```
③ ÇARE  VERİ ARAŞTIRMA — Marmara (Prokonnesos) adalarının Osmanlı'ya
        geçiş tarihi kaynaktan alınacak; 1453-05-29 bir VARSAYIM gibi
        duruyor (fethin günü, adanın günü değil).
        📌 `§3.5.1`in kardeşi: "merkez düştü diye çevre otomatik devrolmaz."
```
⚠️ **Yan bulgu, ölçüldü:** Avşa (≈40,50/27,52) ve Paşalimanı (≈40,47/27,47)
koordinatlarını **hiçbir petek kapsamıyor** (`kim()` → None). Ya kara
maskesinde yoklar ya da petek dışında kalıyorlar. Ayrı ve küçük bir kalem.

---

## H-0015 · Kırım Hanlığı'nı cetvelle bölünmüş yapıdan kurtaralım

```
① TEŞHİS  gercek (raporlandığında) — BÜYÜK ÖLÇÜDE KAPANMIŞ
② SEBEP   NOKTASIZLIK
```

**Ölçüm — Emre'nin istediği yapılmış:**
```
önceki hüküm:  Kırım'da 3 nokta  (Bahçesaray · Kefe · Kerç)
BUGÜN ÖLÇÜM :  Kırım'da 14 nokta
   Akmescid · Aluşta · Bahçesaray · Balaklava · Eski Kırım · Gözleve ·
   Karasubazar · Kefe · Kerç · Mankup · Or Kapı · Sudak · Yalta · İnkirman
   (11'i `yerlesimler_kirim.js` — Emre'nin saydığı listenin neredeyse aynısı)

yoğunluk:  70.868 km² / 14 = 5.062 km²/nokta
karşılaştırma: Batı Anadolu 2.154 km²/nokta
⇒ 11 KAT seyreklik → 2,35 KAT seyrekliğe indi.
```
📌 Ve ölçüm ikinci bir şeyi de doğruluyor: `p7/H-0008`de anlatılan
**koyu/açık desen** veride var — Kefe·Sudak·Mankup·İnkirman·Balaklava·Yalta·
Aluşta·Kerç `OSMANLI` (Kefe sancağı), Bahçesaray·Akmescid·Karasubazar·
Gözleve·Eski Kırım·Or Kapı `tâbi` (Hanlık).

```
③ ÇARE  Yeni bir ekran görüntüsüyle sınansın. Hâlâ cetvel görünüyorsa kalan
        seyreklik dağlık güneyde değil KUZEY BOZKIRINDA (Or Kapı ile
        Gözleve arası) — 2-3 nokta daha yeter.
```

---

## H-0017 · İzvornik'in katılması ayrı bir madde olmalı

```
① TEŞHİS  gercek — ÖLÇÜM EMRE'NİN CÜMLESİNİ BİREBİR DOĞRULADI
② SEBEP   TARİH (kırılma alakasız bir maddenin gününe yapışmış)
```

**Ölçüm:**
```
1460-01-01 tarihli TEK madde:  "Batı Karadeniz kıyısının alınışı: Amasra"
Aynı gün Osmanlı'ya geçen ÜÇ yerleşim:
    Amasra              41,7K/32,4D   ← maddenin konusu
    İzvornik (Zvornik)  44,4K/19,1D   ← ~1.100 km ötede, BOSNA
    Tuzla (Bosna)       44,5K/18,7D   ← ~1.150 km ötede, BOSNA
"İzvornik" kelimesi 1158 maddenin YALNIZ 2'sinde geçiyor (1512 ve 1521),
ikisi de FETİH maddesi DEĞİL.
```
⇒ Emre'nin cümlesi *"batı karadeniz kıyısının alınması ile birlikte izvornik
te katılıyor ama kronolojide bundan bahsetmiyor"* — **birebir doğru, ve iki
şehir birden.**

```
③ ÇARE  ① data/olaylar_ek*.js — İzvornik ve Tuzla için ayrı madde.
        ② data/yerlesimler.js — 1460-01-01 YUVARLAK; gerçek gün TDV
           `zvornik`/`bosna`dan alınıp kırılma oraya taşınacak.
           ⚠️ Bosna Krallığı 1463'te yıkıldı; İzvornik'in 1460'ta düşmesi
           SINANMALI. Ben sınamadım.
```

---

## H-0018 · Eflak seferi tek madde, tüm Eflak çat diye alınıyor

```
① TEŞHİS  gercek — sayıyla
② SEBEP   TARİH (toplu kırılma) + İÇERİK (ara kademe yok)
```

**Ölçüm:**
```
1462-06-01 tarihli TEK madde:  "Eflak seferi: Kazıklı Voyvoda"
Aynı gün kırılan uç sayısı: 24  →  ON İKİ yerleşim, hepsi `eflak` → tâbi:
   Bükreş · Tırgovişte · İbrail · Piteşti · Slatina · Buzău ·
   Rimnik-i Sârat · Krayova · Tırgu Jiu · Rimnik · Turnu Severin · Kımpulung
Hepsinin deseni AYNI:  s: 1281-01-01 → 1462-06-01 eflak · v: 1462-06-01 → …
⇒ Eflak atlasta 1281'den 1462'ye TEK PARÇA duruyor ve tek günde tâbi oluyor.
   Ara kademe (Rovine sonrası haraç · Mircea'nın tâbiiyeti · Vlad'ın tahta
   çıkışı) veride HİÇ YOK.
```
📌 Ve tarih yuvarlak: **1462-06-01**. Seferin bilinen düğüm günü **17 Haziran
1462 gece baskını**dır.

```
③ ÇARE  ① data/olaylar_ek*.js — ara kademeler (KISA, kartvizit ölçüsünde).
        ② data/yerlesimler.js — 12 kaydın tek güne yığılması bölünecek;
           en azından Tuna kıyısı (İbrail · Turnu Severin) ile iç Eflak
           ayrılmalı.
        ⚠️ Önceki hüküm "Kural ⓪ gereği KISA" diyor — ona uyulsun.
```
⚠️ **ÖLÇMEDİM:** ara kademelerin tarihlerini kaynaktan doğrulamadım,
hatırladım. Yazan sınasın.

---

# parti-0004 — 12 madde

## H-0001 · Fetret maddesinde Çandarlı Halil Paşa'nın ne alâkası var (+ H-0004 + H-0007a AYNI AİLE)

```
① TEŞHİS  gercek — VE HÂLÂ AÇIK. "Kök bulundu, düzeltildi" hükmü ÇÜRÜDÜ.
② SEBEP   ARAYÜZ (kişi eşleştirici)
```

🔴 **En önemli bulgum bu.** Önceki hüküm *"KÖK BULUNDU (kisiBul): tek kelimelik
eşleşme SAYILMAZ, ARAYÜZ 2'ye sevk edilecek"* diyordu. **Düzeltme İNDİ** —
`js/app.js:3168` `kisiBul()` içinde, uzun bir gerekçe yorumuyla birlikte:
```js
var gerekli = tw.length >= 2 ? 2 : 1;
```
⚠️ **Ama düzeltme SORGUNUN İKİ KELİMELİK OLDUĞU DALI kapatıyor; Emre'nin
şikâyet ettiği ÜÇ VAKA DA TEK KELİMEYE İNİYOR ve o dal AÇIK KALDI.**

**Ölçüm — `kisiBul()` app.js'ten aynen kopyalanıp gerçek `kisiler.js`
(281 kayıt) üzerinde koşturuldu:**
```
sorgu                  öz adlar        sonuc
"Kemal Reis"           ["kemal"]    →  Nâmık Kemal          🔴 YANLIŞ
"Şeyh Ahmed Han"       ["ahmed"]    →  Gedik Ahmed Paşa     🔴 YANLIŞ
"Halil Paşa"           ["halil"]    →  Çandarlı Halil Paşa  🔴 YANLIŞ
"I. Ahmed"             ["ahmed"]    →  Gedik Ahmed Paşa     🔴 YANLIŞ
"Mustafa Çelebi"       ["mustafa"]  →  Alemdar Mustafa Paşa 🔴 YANLIŞ
```
🔴 **Ve maddelerin `kisiler` alanı bunu doğruluyor — ŞİKÂYET BUGÜN ÜRÜYOR:**
```
1499-08-28  Sapienza (Zonchio) Deniz Zaferi   kisiler: "II. Bayezid, Kemal Reis"
            → "Kemal Reis" eşleşiyor: NÂMIK KEMAL (1840-1888)
            ⇒ Emre'nin H-0004 şikâyeti BİREBİR, BUGÜN, CANLI.

1502-03-01  Altın Orda Hanlığı'nın yıkılışı   kisiler: "Şeyh Ahmed Han, Mengli Giray"
            → "Şeyh Ahmed Han" eşleşiyor: GEDİK AHMED PAŞA (ö. 1482)
            ⇒ H-0007'nin birinci yarısı da BUGÜN CANLI. (Yanlış kişi
              DEĞİŞTİ — I. Ahmed'den Gedik Ahmed Paşa'ya — ama yanlışlığı
              sürüyor. Düzeltme onu ıskalayıp YANINDAN geçmiş.)
```
📌 **Ve ikinci bir kusur birinciyi büyütüyor: `Kemal Reis` `kisiler.js`'te YOK.**
281 kaydın hiçbiri o değil. Eşleştirici boşluğu en yakın "kemal" ile
dolduruyor. Aynı boşlukta: **Cüneyd Bey · Hadım Ali Paşa · Elvend Bey ·
Burak Reis** → dördü de `bulunamadı`.

```
③ ÇARE  ① js/app.js:3211 — TEK ÖZ ADLI SORGU DALI kapatılacak.
           Öneri: tek öz ad varsa eşleşme yalnız kayıt da TEK öz adlıysa
           sayılsın ("Pîrî Reis"→"Pîrî Reis" ✓ · "Kemal Reis"→"Nâmık Kemal" ✗).
           ⚠️ `§11 C13`: bu dal İKİ YÖNDE de sınanmalı — geçme yolu
           ("Pîrî Reis" hâlâ tutuyor mu) ve ateşleme yolu (yukarıdaki 5 vaka).
        ② data/kisiler.js — Kemal Reis · Cüneyd Bey · Hadım Ali Paşa ·
           Burak Reis · Elvend Bey kartları eklenecek (VERİ KİŞİ).
```
📌 **Ders (`§11 C13`nin canlı vakası):** düzeltmenin kendi yorumu *"874
benzersiz ad ölçüldü, yeni yanlış eşleşme 0"* diyor — **ölçüm doğru, EVREN
DAR:** ölçülen şey "yeni yanlışlar", ölçülmeyen şey "eski yanlışlar KAPANDI
MI". Kapanmamış.

---

## H-0003 · Cem Sultan / rehin diplomasisi maddesi

```
① TEŞHİS  gercek (meşru içerik isteği, harita hatası değil)
② SEBEP   İÇERİK
③ ÇARE    data/olaylar_ek*.js — 2-3 KISA madde (Kural ⓪).
           📌 Emre'nin kendi paragrafı taslak olarak kullanılabilir.
```
⚠️ Ölçülecek bir harita iddiası yok; VERİ KRONOLOJİ kuyruğu.

---

## H-0004 · 1499 Sapienza maddesinde Nâmık Kemal görünüyor

```
① TEŞHİS  gercek — BUGÜN ÜRÜYOR, ölçüldü
② SEBEP   ARAYÜZ  →  H-0001'e bak, aynı kök ve aynı çare
```

---

## H-0005 · Safevî kuruluşunda İran ve etrafındaki etiketsiz benekler

```
① TEŞHİS  gercek (raporlandığında) — BÜYÜK ÖLÇÜDE KAPANMIŞ
② SEBEP   VERİ (kimlik tanecikliği)
```

**Ölçüm:**
```
önceki hüküm:  "İran içinde 282 dönem hâlâ tek `iran` kutusunda"
BUGÜN ÖLÇÜM :  s:"iran" dönem sayısı  51  ·  nokta 50     (282 → 51)

1510-06-15 · İran-Kafkasya kutusu (30-42K / 42-64D) kimlik dağılımı:
   safevi 105 · buhara 25 · iran 6 · gurcistan 5 · mazenderan-marasi 5 ·
   akkoyunlu 2 · gilan-kiya 2 · (sahipsiz) 4
```
⇒ Emre'nin gördüğü **"benek benek etiketsiz parçalar"** artık adlı kimliklere
bölünmüş; 1510 kesitinde `iran` kutusunda kalan yalnız **6 nokta.**

```
③ ÇARE  Kalan 51 dönemin dökümü VERİ DEVLET'e verilir; yeni bir ekran
        görüntüsüyle sınansın. Bu kalem "açık" değil "kuyrukta".
```

---

## H-0006 · Madde "Erzurum ve Van havzası Safevî'ye geçti" diyor ama harita boyamıyor

```
① TEŞHİS  gercek — AMA ÖNCEKİ HÜKÜM YANLIŞ TEŞHİS KOYMUŞ
② SEBEP   TARİH (bir SAVAŞ günü FETİH günü olarak yazılmış)
```

🔴 **Önceki hükmün birinci yarısı ÇÜRÜDÜ.** *"Madde diyor ama harita
boyamıyor"* — ÖLÇÜLDÜ, **harita BOYUYOR:**
```
1502-01-01 maddesi: "Erzurum ve Van havzası Safevî'ye geçti"
aynı gün başlayan dönemler (13 adet), ilk dördü:
    Erzurum  s: 1502-01-01 → 1518-01-01  safevi   ✓
    Van      s: 1502-01-01 → 1548-08-25  safevi   ✓
    Kemah    s: 1502-01-01 → 1515-05-19  safevi   ✓
    Erciş    s: 1502-01-01 → 1548-08-25  safevi   ✓
⇒ madde ile veri UYUŞUYOR. Bu kalemde kusur YOK.
```

🔴 **Ama Emre'nin İKİNCİ cümlesi GERÇEK ve sebebi bulundu:**
*"Kemah Safevî, Erzincan Osmanlı görünüp arada bağlantı kopuyor."*
```
Erzincan   d: 1473-08-11 → 1923-10-29        ← OSMANLI, 1473'TEN BERİ
Kemah      s: 1502-01-01 → 1515-05-19 safevi ← 30 km ötede SAFEVÎ
Erzurum    s: 1502-01-01 → 1518-01-01 safevi

1473-08-11 tarihiyle BAŞLAYAN dönem sayısı: 1 — YALNIZ ERZİNCAN
o günün kronoloji maddesi: "Otlukbeli Savaşı"   ← BİR SAVAŞ, BİR FETİH DEĞİL
```
⇒ **Otlukbeli Muharebesi'nin günü, Erzincan'ın ilhak günü olarak yazılmış.**
Osmanlı Otlukbeli'nde Uzun Hasan'ı yendi ama Erzincan'ı **almadı**; Doğu
Anadolu'nun katılması Çaldıran sonrasıdır — nitekim **Kemah'ın kendi kaydı
1515-05-19** diyor (Bıyıklı Mehmed Paşa'nın Kemah fethi). Erzincan'ın
komşusundan **42 yıl önce** Osmanlı olması, Emre'nin gördüğü kopukluğu
birebir üretiyor.

📌 Bu, `CLAUDE.md §3.5.1`in *"devletin yıkılışı ≠ o yerin fethi"* kuralının
kardeşi: ***bir SAVAŞIN günü, o yerin FETHİNİN günü değildir.***

```
③ ÇARE  data/yerlesimler.js · Erzincan — `d:` başlangıcı 1473-08-11'den
        Çaldıran sonrasına (Kemah'la aynı seferin günü, ~1515) çekilecek.
        🔴 Gün TDV `erzincan` + `kemah` + `biyikli-mehmed-pasa` maddelerinden
        okunacak. ⚠️ Ben TDV'ye BAKMADIM — "Otlukbeli fetih değil" hükmü
        ölçüme (tek kayıt + madde başlığı) dayanıyor, kaynağa değil.
        ⚠️ §3.5.1 İKİ UÇ: Erzincan geri çekilirse 1473-1515 arası kime ait
        olacak? Komşuları akkoyunlu (1473-1502) → safevi (1502-1515) diyor;
        muhtemel cevap o, ama ÖLÇÜLMELİ.
```

---

## H-0007 · Altın Orda'nın yıkılışı ve "I. Ahmed mi Şeyh Ahmed Han mı"

```
① TEŞHİS  İKİ YARIM: (a) kişi eşleşmesi → gercek, AÇIK
                     (b) Altın Orda parçalanması → zaten-dogru, MODELLENMİŞ
② SEBEP   (a) ARAYÜZ   (b) —
```

**(a)** H-0001'e bak — `"Şeyh Ahmed Han"` bugün **Gedik Ahmed Paşa**'yı açıyor.

**(b) Önceki hüküm *"Kazan/Nogay/Astrahan/Sibir hanlıkları için nokta ve
kimlik gerekiyor"* diyordu — ÖLÇTÜM, BEŞİ DE VAR:**
```
kimlik              nokta   bitişi
kirim                  35   1783-04-19 (10) …
kazan                  18   1552-10-02 (18)
nogay                  20   1556-01-01 (10) · 1644 (7) · 1663 (3)
astarhan               11   1556-01-01 (11)
sibir-hanligi           3   Tümen (Çimgi-Tura) · Tobolsk (İsker) · Baraba
altinorda             124   1441 (29) · 1325 (24) · 1502-03-01 (21) · 1438 (18)

1502-03-01 ("Altın Orda Hanlığı'nın yıkılışı") gününde kırılma: 42
örnek geçişler 1495 → 1510:
   Astrahan  altinorda → astarhan      Kalmuk bozkırı  altinorda → nogay
   Bozkır (Deşt-i Kıpçak) altinorda → kirim
```
⇒ Emre'nin saydığı beş hanlığın **beşi de** haritada, ve parçalanma
1502-03-01'de 42 kırılmayla gösteriliyor.
⚠️ **Kendi ölçümümü düzelttim:** ilk taramada `sibir` diye aradım **0** buldum;
doğru anahtar **`sibir-hanligi`.** (`§4`'ün *"kendi transliterasyonunu değil
gerçek `id:`yi kullan"* dersinin bende gerçekleşmiş hâli.)

```
③ ÇARE  (a) → H-0001'in çaresi.   (b) → yok, kapanmış.
```

---

## H-0008 · Hemedan yenilgisi maddesinde savaş simgesi çıkmıyor

```
① TEŞHİS  gercek — AMA SEBEP ARAYÜZDE DEĞİL, VERİDE
② SEBEP   VERİ (kayıt yok)
```

**Ölçüm:** `data/savaslar.js` 168 savaş kaydı taşıyor; `lat`/`lon` alanları var
ve simge oradan çiziliyor.
```
"Hemedan" geçen savaş kaydı: 0     ← simge çizilemiyor çünkü KAYIT YOK
karşılaştırma: "Şahkulu" → 2 kayıt (Teke 1511-03-01 · Sivas 1511-07-02),
               ikisi de lat/lon taşıyor
```
⇒ Önceki hüküm *"ARAYÜZ: savaş maddelerinde konum simgesi çizilmiyor"*
**yanlış teşhis.** Çizim çalışıyor; 1503 Hemedan muharebesinin **kaydı yok.**

```
③ ÇARE  data/savaslar.js — "Hemedan Muharebesi (1503)" kaydı eklenecek
        (taraf: Akkoyunlu–Safevî · lat 34,80 lon 48,52 · sonuç: Safevî zaferi).
        ⚠️ Osmanlı dışı bir muharebe; savaslar.js'in kapsamı buna açık mı,
        SAHİBİNE sorulmalı — ben ölçtüm, karar vermedim.
```

---

## H-0011 · Başkent yıldızı  →  p2/H-0011 ile AYNI KALEM

```
①②③  p2/H-0011'e bak. Emre'nin buradaki tarifi daha net ve ORASI kaynak alındı.
```

---

## H-0012 · Şahkulu İsyanı'nın yayılışının gösterimi

```
① TEŞHİS  gercek (tasarım isteği) — ve veri TABANI HAZIR
② SEBEP   ARAYÜZ (tasarım)
```
**Ölçüm:** `savaslar.js`te **iki** Şahkulu kaydı var, ikisi konumlu:
`Şahkulu (Teke) 1511-03-01` ve `Şahkulu (Sivas) 1511-07-02`.
⇒ İsyanın **iki ucu ve dört ayı** veride duruyor; eksik olan yalnız
**yayılışın çizimi.** Emre'nin tasarımı (taralı alan ve ayrı renk KULLANILMAZ;
küçük ateş simgeleri + ok) bu iki noktayla doğrudan uygulanabilir.

```
③ ÇARE  ARAYÜZ 2 tasarım kalemi. Yeni veri gerekmiyor.
```

---

## H-0013 · Sinj Kalesi'nin yeri işaretlenmiyor / şehir bir madde önce görünsün

```
① TEŞHİS  gercek
② SEBEP   VERİ (madde ↔ yer bağı) — ARAYÜZ 5'in hükmü DOĞRULANDI
```
**Ölçüm:**
```
Sin (Sinj)  43,704/16,639  [yerlesimler_ek.js]  k:0
   s: 1281-01-01 → 1513-01-01  macaristan
   d: 1513-01-01 → 1686-09-30                ← katılım günü
```
⇒ Nokta VAR, tarih VAR. Eksik olan maddenin `yer_id` bağı — yani `§5`'in
"veri eksiği" hükmü ayakta. 📌 Ve `d.f` **1513-01-01 yuvarlak**.

```
③ ÇARE  ① data/olaylar*.js — Sinj maddesine `yer_id` verilecek.
        ② `1513-01-01` gerçek güne çekilecek (kaynak).
        ③ "bir önceki maddeden itibaren görünür" kuralı ZATEN YAZILI:
           `js/app.js:1532-1536` → "pencere 365 gün ileri · tavan YOK ·
           gelecek işaretler öncelik listesinin EN SONUNDA" (§6 sözleşmesi).
           ⇒ Kural var, bu maddede işlemiyor çünkü BAĞ yok.
```

---

## H-0014 · (başlıksız — yalnız görsel)

```
① TEŞHİS  anlasilmadi — Emre metin yazmamış
② SEBEP   (iki aday, ikisi de görselde ÖLÇÜLDÜ)
```
**Görselde ne var (ölçtüm):** künye `1513-04-01 · 35,26-40,19K / 44,27-44,39D`,
madde **"Nisan 1513 · Yenişehir Muharebesi ve Şehzade Ahmed'in bertarafı"**,
sağ panelde I. Selim kartı.

**İki şey göze çarpıyor:**
```
① EN ÜSTTE bir şerit:  "Katılım: Sin (Sinj)"
   Ama açık madde YENİŞEHİR (Bursa) muharebesi — Sinj 1.400 km ötede.
   Sinj'in `d:` başlangıcı 1513-01-01; ekran 1513-04-01.
   ⇒ "Katılım" şeridi ÜÇ AY boyunca ekranda kalıp alâkasız bir maddenin
     üstüne düşüyor. Bu, H-0013 ailesinin ta kendisi.
② Kronoloji listesinde tarih biçimi TUTARSIZ, altı satırda beş biçim:
     "6 Eylül 1515" · "1515-1516" · "10 Şâban 921 / 19 Eylül 1515" ·
     "Mayıs 1516" · "5 Haziran 1516"
```

```
③ ÇARE  🔴 EMRE'YE TEK CÜMLELİK SORU:
        "parti-0004 H-0014'te (Yenişehir Muharebesi karesi) şikâyetiniz
         üstteki 'Katılım: Sin (Sinj)' şeridi miydi, yoksa kronoloji
         listesindeki tarih biçimi karışıklığı mı?"
```

---

## H-0015 · Maddenin görseli maddenin KENDİSİYLE ilgili olmalı

```
① TEŞHİS  gercek (kural isteği)
② SEBEP   ARAYÜZ + İÇERİK
③ ÇARE    ANSİKLOPEDİ EKSENİ'ne kural olarak işlenecek — önceki hüküm
           doğru ve yeterli. Ölçülecek bir harita iddiası yok.
```
📌 Ölçtüğüm tek şey: `p4/H-0014` görselinde madde **I. Selim'in kendi
işiyle** ilgili (Şehzade Ahmed'in bertarafı), yani orada padişah portresi
Emre'nin kuralına **uygun.** Kural yazılırken bu ayrım korunmalı.

---

# parti-0005 — 2 madde

## H-0003 · "Haritaya yay" butonu

```
① TEŞHİS  gercek (özellik isteği) · ② SEBEP  ARAYÜZ
③ ÇARE    ARAYÜZ 2. Önceki hüküm doğru: `devletler_harita.js` her devletin
          gövdesini taşıyor, sınır kutusu oradan hesaplanır — ben de aynı
          dosyayı okuyup gövde bbox'ı çıkarabildim, yani YAPILABİLİR.
```

## H-0006 · Aynı tarihli iki madde tek adımda geçiliyor

```
① TEŞHİS  gercek — ama Emre'nin verdiği ÖRNEK artık üremiyor
② SEBEP   ARAYÜZ
```
**Ölçüm:**
```
aynı tarihi paylaşan TARİH sayısı : 35
o tarihlerdeki toplam madde       : 77
en kalabalık: 1577-01-01 → 4 madde · 1521/1554/1695/1884/1427 → 3'er madde

⚠️ Emre'nin örneği (1516-08-24, Mercidabık + Ramazanoğulları) BUGÜN TEK
   madde taşıyor: "Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması".
   Mercidabık o tarihte DEĞİL. Yani o çift ayrılmış.
```
⇒ Genel sorun **duruyor** (35 tarih · 77 madde), örnek kapanmış.

```
③ ÇARE  ARAYÜZ 2 — aynı tarihli maddelere sıra numarası, teker teker
        ilerleme. Önceki hükmün "çözüm ucuz" ölçüsü doğrulandı: en kötü
        hâl 4 madde.
```

---

# parti-0006 — 19 madde

> ⚠️ **KAPSAM AYRIMI.** Bu partinin 19 maddesinin **11'i** harita/veri iddiası
> DEĞİL, **içerik yazımı** kalemi (MERAK/TARTIŞMA kartı ve EK-OKUMA/KURUM
> kartı). Onlarda ölçülecek bir harita iddiası yok; ölçüm emeğimi kalan 8
> maddeye yığdım ve içerik kalemlerini tek blokta topladım.

## H-0001 · Katîf/Basra `iran` etiketleri · Katîf güneybatısı · Portekiz Umman-Hürmüz

```
① TEŞHİS  ÜÇ ŞIK, ÜÇ AYRI SONUÇ: (a) zaten-dogru · (b) zaten-dogru · (c) gercek
② SEBEP   (c) VERİ ARAŞTIRMA
```

**(a) Katîf/Basra `iran` etiketi → KAPANMIŞ.** Ölçüm:
```
Katîf   1520 = cebri     1550 = OSMANLI      Lahsa · Ukayr · Cübeyl = aynı desen
Basra   1520 = safevi    1550 = OSMANLI
⇒ `iran` etiketi bu kayıtların HİÇBİRİNDE yok.
```

**(b) Katîf'in güneybatısındaki Safevî toprağı → BUGÜN ÜREMİYOR.** 1550'de
Katîf'in güneybatısı (Necid): **Dir'iye · Riyad · Doha · Manama · Kuveyt =
sahipsiz** (`—`), kasıtlı boşluk. Safevî orada değil. En yakın Safevî
noktaları Basra'nın **kuzeydoğusunda** (Muhammere · Abâdân · Behbehân).

**(c) Portekiz'in Umman/Hürmüz etiketleri → ÖLÇÜLDÜ, ŞÜPHELİ:**
```
1520'den itibaren `portekiz`:
   Hürmüz Adası 26,86/56,37 · Kişm 26,79/55,82 · Ras el-Hayme (Cülfâr) 25,79/55,94
   Şârika 25,36/55,39 · Suhâr 24,35/56,71
karşılaştırma: Buraymî = `umman` (yani iç kesim Umman'da kalmış)
```
🔴 **Şüphem şu ve ÖLÇMEDİM, HATIRLADIM:** Portekiz Hürmüz'ü 1515'te aldı
(bu doğru görünüyor) ama **Cülfâr kalesi 1631, Şârika hiç Portekiz olmadı**
diye biliyorum. Bu bir hatırlama, kaynak değil.

```
③ ÇARE  (c) → ÇAPRAZ İBERYA oturumu zaten bunun için kurulmuş. Yukarıdaki
        beş kayıt (özellikle Şârika ve Ras el-Hayme'nin 1520 başlangıcı)
        ona ADIYLA verilsin.
        (a)(b) → kapanmış, yeni ekran görüntüsüyle sınansın.
```

---

## H-0002 · Tilimsan bir devlet mi sadece bir şehir mi?

```
① TEŞHİS  zaten-dogru — SORUNUN CEVABI: BİR DEVLET, ve atlas onu MODELLİYOR
② SEBEP   —
```
**Ölçüm:**
```
kimlik `zeyyani` VERİDE VAR ve adıyla çiziliyor:
   Tilimsan 34,88/-1,31   1500 = zeyyani · 1530 = zeyyani · 1560 = OSMANLI
   Nedrûme · Ayn Temûşent · Sîdî Bel Abbès · Muaskar · Tâhert · Ağvât ·
   Gardâye · Bû Sa'âde · Biskra · Tuggurt · Vargla → hepsi `zeyyani`
⇒ Emre'nin "sadece bir şehir mi" tereddüdünün cevabı: HAYIR, Abdülvâdîler
  (Zeyyânîler) devleti — ve haritada ayrı görünmesi DOĞRU.
```
📌 **Ve İspanyol presidio'ları da modellenmiş** (Emre'nin ikinci sorusu):
```
Oran + Mersa'l-Kebîr   1500 zeyyani → 1530 ispanya → 1560 ispanya
Bicâye (Bougie)        1500 zeyyani → 1530 ispanya → 1560 OSMANLI
Melîle (Melilla)       1500'den beri ispanya
```
📌 Sahra'ya uzanım da veride: `zeyyani` güneyde **Vargla (31,95K)** ve
**Gardâye (32,49K)**'ye kadar iniyor.

```
③ ÇARE  Haritada düzeltilecek şey ölçülemedi. Emre'nin ÜÇÜNCÜ isteği açık:
        "Cezayir Osmanlı'ya bağlanmadan önce oradaki yapı ne idi" →
        Cezayir maddesine yazılacak (VERİ KRONOLOJİ). Ölçülmüş cevap:
        Zeyyânî hâkimiyeti + İspanyol presidio'ları (Oran 1509, Bicâye 1510,
        Melilla 1497) + Oruç/Hızır Reis dönemi.
```

---

## H-0004 · Rodos'la birlikte alınan adaların ve Bodrum'un adıyla sayılması

```
① TEŞHİS  gercek (meşru içerik isteği) — VE LİSTE VERİDE HAZIR
② SEBEP   İÇERİK
```
**Ölçüm — 1521'de `sovalye`, 1523'te `OSMANLI` olan yerler (tam liste):**
```
ADALAR (9)   Rodos · İstanköy (Kos) · Kelemez (Kalimnos) · İleryoz (Leros) ·
             Sömbeki (Symi) · İlyaki (Tilos) · İncirli (Nisyros) ·
             Herke (Halki) · Lindos (Rodos'ta kale)
KARA (1)     Bodrum  37,03/27,43
karşılaştırma: Marmaris · Datça · Milas · Muğla · Balat 1521'de ZATEN Osmanlı
```
⇒ Emre'nin sorusu *"Bodrum Rodos'tan sonra Türk idaresine geçti mi"* →
**EVET, ölçüldü:** Bodrum 1521'de `sovalye`, 1523'te `OSMANLI`.

```
③ ÇARE  data/olaylar*.js — Rodos maddesine yukarıdaki 10 adın SAYILMASI.
        Liste uydurma değil, veriden çıkarıldı.
```

---

## H-0005 · Kalender Şah etiketlenmiş bir isyan var, maddesi yok

```
① TEŞHİS  gercek — ÖLÇÜLDÜ, ve önceki hükümden BİR ADIM DAHA KÖTÜ
② SEBEP   VERİ (eksik kronoloji maddesi)
```
**Ölçüm:**
```
data/savaslar.js    "Kalender Şah"  1526-01-01  (konumlu, haritada iz veriyor)
kronolojide "Kalender" geçen madde sayısı: 1
    1608-08-05  Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması
    ⇒ BAŞKA BİRİ (1608 Celâlî). Kalender Şah'ın maddesi YOK.
```
🔴 **Önceki hüküm "en yakın madde 240 gün ötede Mohaç" diyordu — BUGÜN DAHA
KÖTÜ:** aynı gün (1526-01-01) artık bir madde VAR:
```
1526-01-01  Pîrî Reis'in Kitâb-ı Bahriye'yi Kanûnî'ye sunması  [EK14]
```
⇒ Savaş simgesi artık **Pîrî Reis'in kitap sunuşunun** üstüne düşüyor. Yani
`Değişmez 2` açısından **"maddesiz kırılma" bile değil** — `p3/H-0010`
ailesine geçti: **yanlış maddeye yapışmış iz.** Bir denetim bunu **hiç**
göremez.

```
③ ÇARE  data/olaylar*.js — "Kalender Şah isyanı (1526)" maddesi yazılacak,
        gerçek günüyle. ⚠️ savaslar.js'teki 1526-01-01 de YUVARLAK.
📌 Önceki hükmün ikinci yarısı (denetle.py'nin "kuşatma kayması" mazereti
   fazla geniş, Kalender Şah · Deli Hasan · Diu için YANLIŞ) DOĞRULANMADI
   — ben denetle.py'nin o dalını koşturmadım. ÖLÇMEDİM.
```

---

## H-0007 + H-0008 + H-0010 · İstanbul Antlaşması sınırındaki enklavlar

```
① TEŞHİS  gercek (enklavlar VAR) — ama SAHİPLİK DOĞRU, ŞEKİL ARTEFAKT
② SEBEP   NOKTASIZLIK
```
**Ölçüm — ekran künyesi `1547-06-18 · İstanbul Antlaşması`:**
```
Macaristan kutusunda (43,2-51,2K / 12,7-24,0D) kimlik dağılımı:
   OSMANLI 39 · avusturya 13 · venedik 10 · macaristan 7 · tâbi 6 ·
   lehistan 1 · almanya 1 · papalik 1

🔵 EMRE'NİN SORDUĞU ENKLAVLARIN ŞEHİRLERİ — adlarıyla:
   BATI enklavı (Budin'in batısı, H-0007):
        Yanıkkale (Győr)   47,69/17,64   macaristan
        Kanije (Kanizsa)   46,45/16,99   macaristan
        Zigetvar           46,05/17,80   macaristan
   KUZEYDOĞU enklavı (H-0010 kutusu):
        Eğri (Eger)        47,90/20,38   macaristan
        Solnok (Szolnok)   47,17/20,20   macaristan
        Gyula (Göle)       46,65/21,28   macaristan
   çevresi: Estergon · Vaç · Hatvan · Budin · Peşte · İstolni Belgrad ·
            Şimontorna · Kalocsa · Segedin · Peçuy · Mohaç = OSMANLI
            Bratislava · Uyvar · Sopron · Kassa · Tokaj · Eperjes = avusturya
            Varad = tâbi
```
🟢 **SAHİPLİK TARİHEN DOĞRU:** 1547'de Győr, Kanizsa, Szigetvár, Eger,
Szolnok, Gyula'nın **altısı da** Kraliyet Macaristanı'nın elindeydi. Osmanlı
onları çok sonra aldı (Szolnok 1552 · Szigetvár 1566 · Gyula 1566 · Eger 1596
· Kanizsa 1600 · Győr yalnız 1594-98 arası).
⇒ Emre'nin *"gerçekten böyle miydi"* sorusunun cevabı: **EVET.**

🔴 **Ama ŞEKİL artefakt.** Enklavların kenarları bu altı noktanın orta
dikmeleri; gerçek serhat hattı değil. `§2` emilme kuralı: aradaki noktasız
alan en yakın peteğe düşüyor.

📌 **Ve `CLAUDE.md §3.5.1`in "Yukarı Macaristan noktasız · Gyula noktasız"
uyarısı ARTIK GEÇERSİZ:** ölçtüm, `48,0-49,6K / 18,8-22,6D` kutusunda
**Eperjes · Kassa · Tokaj** var, ve **Gyula'nın kaydı VAR.** O borç kapanmış
— belge güncellenmeli (`§1.5` bayatlama ailesi).

```
③ ÇARE  ① Emre'nin istediği ŞEHİR ADLARI yukarıda — cevap olarak iletilsin.
        ② NOKTA — serhat hattını düzeltmek için ara kaleler: Palota ·
           Veszprém · Tata · Komárom (batı) · Fülek · Szécsény · Jászberény
           (kuzeydoğu). Şekli gerçeğe yaklaştırır.
        ③ 🔴 KÖK BELGE DÜZELTMESİ: `CLAUDE.md §3.5.1`deki Yukarı Macaristan
           ve Gyula vakaları KAPANMIŞ; belgede açık gibi duruyor.
```

---

## H-0009 · (başlıksız — yalnız görsel)

```
① TEŞHİS  anlasilmadi
② SEBEP   —
③ ÇARE    🔴 EMRE'YE TEK CÜMLELİK SORU:
          "parti-0006 H-0009'da metin yazmamışsınız; o karede neyi
           işaretlemek istemiştiniz?"
```
⚠️ Görseli **ölçmedim** — H-0007/H-0008/H-0010 ile aynı aile olması muhtemel
(aynı parti, aynı sahne) ama **tahmin etmiyorum.**

---

## H-0013 · H-0014 · H-0015 · H-0019 · H-0020 · H-0021 · H-0022 · H-0023
## → MERAK / TARTIŞMA kartı  (8 madde)
## H-0016 · H-0017 · H-0018 → EK-OKUMA / KURUM kartı  (3 madde)

```
① TEŞHİS  gercek (meşru içerik isteği) — HARİTA HATASI DEĞİL
② SEBEP   İÇERİK  (`icerik-kuyrugu` — kapsam DIŞI DEĞİL, bkz. son bölüm)
③ ÇARE    data/merak.js + data/ekokuma.js — VERİ İÇERİK oturumu.
           ⚠️ Sahibi olan oturum KAPANDI (p7/H-0001 hükmü); yeni bir içerik
           oturumu açılınca bu 11 madde + p7'nin 6 maddesi TEK PARTİ olarak
           verilmeli — toplam 17 kart.
```
**11 kalemin konuları:** Karaman'ın niçin zor ilhak edildiği ve ilhak
yöntemleri · kapitülasyonlar · Gürcistan'ın niçin komple alınmadığı ·
I. Murad'ın şehâdeti komplo muydu · kardeş katli karşılaştırmalı ·
hanedan evlilikleri ve çok eşlilik · siyasî evlilikler · kadınlar saltanatı
(EK-OKUMA:) Ahîler kimdir · Yeniçeri Ocağı · vassallık nedir.

📌 **Ölçtüğüm tek şey ve DEĞERLİ:** `H-0016`nın önceki hükmü *"Ahîler
kronolojide SIFIR kez geçiyor ama haritada Ankara'nın sahibi"* diyordu.
**DOĞRULADIM:** Ankara `s: 1281-01-01 → 1354-08-01 ahiler`, ve `ahiler`
künyesi `1290-01-01 → 1354-01-01`. ⇒ Kayıt künyenin **iki ucundan da**
taşıyor: **9,0 yıl erken · 0,6 yıl geç.** (p2/H-0015 ile aynı kalem.)
📌 Ve `H-0021` ile `H-0022` **AYNI KART** (siyasî evlilikler) — önceki hüküm
doğru, iki madde tek karta iniyor. ⇒ 11 kalem → **10 kart.**

---

# parti-0007 — 7 madde

## H-0001 · H-0002 · H-0003 · H-0004 · H-0005 · H-0006 → MERAK / EK-OKUMA (6 madde)

```
① TEŞHİS  gercek (meşru içerik isteği) — harita hatası DEĞİL
② SEBEP   İÇERİK (`icerik-kuyrugu` — kapsam DIŞI DEĞİL, bkz. son bölüm)
③ ÇARE    data/merak.js + data/ekokuma.js — VERİ İÇERİK oturumu.
           p6'nın 11 kalemiyle BİRLİKTE tek parti (toplam 17 kalem → 16 kart).
```
**Konular:** Haçlı seferleri niçin hep başarısız · Çanakkale'ye niçin hisar
yapılmadı + boğazlara zincir · Fatih niçin Galata'yı alıp zinciri boşa
düşürmedi · fethedilen Hıristiyan ülkelerde yönetsel ilişkiler (zimmî ·
cizye · millet · devşirme) · Timur şehzâdeleri kendine bağlanmaya zorladı mı ·
Timur'un misyonu neydi.

📌 **Önceki hükümlerin iki uyarısını AYNEN taşıyorum, ikisi de değerli:**
`H-0002`de sorunun öncülü **kısmen yanlış** — Çanakkale Boğazı'na hisar
YAPILDI (Kilitbahir + Kale-i Sultâniye, 1462); madde yazılırken düzeltilmeli.
`H-0003`te Galata **Ceneviz ve tarafsızdı**; alınması Batı ittifakını savaşa
sokardı, 28 Mayıs'ta teslim ANLAŞMASIYLA alındı.
⚠️ **Bu iki cümleyi ben ÖLÇMEDİM** — önceki hükümden aktarıyorum ve aktardığımı
söylüyorum (`§11` ölçülmüş ≠ hatırlanmış).

📌 **Ölçtüğüm tek şey:** `H-0005`in hükmü *"Atlas bunu ZATEN modelliyor:
fetret-suleyman · fetret-mehmed · fetret-musa · fetret-isa künyeleri var"*
diyor. **DOĞRULADIM — ama künye adları farklı:** veride `suleyman-celebi` ·
`mehmed-celebi` · `isa-celebi` (`musa` ayrı ölçülmedi), ve 1403-06-15'te
Anadolu'da sırasıyla **16 · 7 · 53** nokta tutuyorlar. Model çalışıyor;
madde yazılırken haritaya bağlanabilir.

---

## H-0008 · Kırım'ın ilhakından sonraki görünüm normal mi?

```
① TEŞHİS  ÜÇÜ ZATEN-DOĞRU, İKİ "GERÇEK HATA"NIN İKİSİ DE KAPANMIŞ
② SEBEP   —
```

**(1) Koyu/açık desen → DOĞRU, veriyle doğrulandı** (p3/H-0015'te ölçtüm):
```
OSMANLI doğrudan (koyu): Kefe · Sudak · Mankup · İnkirman · Balaklava ·
                         Yalta · Aluşta · Kerç
TÂBİ (açık):             Bahçesaray · Akmescid · Karasubazar · Gözleve ·
                         Eski Kırım · Or Kapı
⇒ Kefe Sancağı / Hanlık ayrımı. `d:`/`v:` tam bunun için var.
```

**(2) Azak kopukluğu → GERÇEK ve doğru.** Azak 1495'ten beri `OSMANLI`,
arada Kuban · Rostov · Taganrog · Çerkask **`kirim`** — yani Osmanlı değil.
Azak denizden ulaşılan yalıtılmış bir Osmanlı adası. Ölçüm önceki hükmü
doğruluyor.

**(3) 🟢 "GERÇEK HATA BİR" (kirim kimliği 1441 öncesi kullanılıyor) →
KAPANMIŞ.** Ölçüm:
```
`s:"kirim"` dönemi 1441-01-01'den ÖNCE başlayan kayıt sayısı: 0
Anapa · Soçi · Tuapse · Maykop artık:
    s: 1281-01-01 → 1441-01-01  altinorda      ← düzeltilmiş
    s: 1441-01-01 → …           kirim
```

**(4) 🟢 "GERÇEK HATA İKİ" (Çerkez kıyısı 1783 sonrası) → KAPANMIŞ.**
Kıyı artık 1783'te değil **1829-09-14**'te (Edirne Antlaşması) `rusya`ya
geçiyor; Anapa ayrıca `d: 1781-01-01 → 1829-09-14` Osmanlı sancağı taşıyor.

```
③ ÇARE  Düzeltilecek bir şey ölçülemedi — dördü de kapanmış ya da doğru.
⚠️ ÖLÇÜLMEMİŞ YAN KALEM: Emre'nin saydığı şehirlerin bir kısmı (Herson ·
   Melitopol · Dnipro · Harkov · Poltava · Donetsk · Nikopol · Krasnodar ·
   Novorossiysk) O DÖNEMDE YOKTU ya da başka adla vardı. Bunların hangisinin
   kurulmuş olduğunu tek tek SINAMADIM. Nokta oturumu kalemi.
```

---

# parti-emrelic-0008 — 12 madde

## H-0001 · Germiyan ilk sahneye çıktığında toprakları iki parça mıydı?

```
① TEŞHİS  gercek — İKİ PARÇA GERÇEK, ve ÖLÇÜM İÇERİDE BİR TUTARSIZLIK BULDU
② SEBEP   VERİ ARAŞTIRMA + TARİH
```
**Ölçüm — `germiyan` 17 dönem, `sahibata` 1 dönem:**
```
germiyan (kuzeybatı kümesi)  Kütahya · Simav · Tavşanlı · Emet    1300 → 1381
germiyan (güney)             Uşak · Alaşehir                       1300 → 1390
germiyan (doğu, KOPUK)       Sivrihisar 39,45/31,53                1300 → 1354-08-01
sahibata                     Karahisâr-ı Sâhib (Afyon)             1281 → 1341
⇒ İki lob GERÇEK ve yalnız 1281-1341 arası: Afyon `sahibata`, Sivrihisar
  ana kümeden kopuk. 1341'den sonra Afyon da `germiyan` — parça kapanıyor.
```

🔴 **VE İÇERİDE BİR TUTARSIZLIK ÖLÇTÜM (kaynağa gerek yok):**
```
Germiyan'ın ÖTEKİ noktaları 1381 (çeyiz) ve 1390'da Osmanlı'ya geçiyor;
SİVRİHİSAR ise 1354-08-01'de — kendi devletinden 27 YIL ÖNCE.
```
⇒ Bu, `p2/H-0015`teki *"Sivrihisar 1354 şüpheli"* kuşkumu **veri içi
tutarlılıkla** destekliyor: Sivrihisar, Germiyan'ın hiçbir başka noktasıyla
aynı takvimi paylaşmıyor ve tek başına Ankara'nın gününe yapışmış.
📌 **Bu artık hatırlama değil ÖLÇÜM.** (TDV sınaması yine de gerekli.)

```
③ ÇARE  ① data/yerlesimler.js · Sivrihisar `s:germiyan` bitişi TDV
           `germiyanogullari` + `sivrihisar` ile sınanacak; 1381'e çıkması
           kuvvetle muhtemel.
        ② `sahibata`nın 1281-1341 TEK dönemi: Germiyan'ın onu kademeli
           yutması modellenmemiş — TDV `sahibataogullari`.
```

---

## H-0002 · İlhanlıların toprakları iki parça, araya Memlükler girmiş gibi

```
① TEŞHİS  gercek — VE ÖNCEKİ HÜKÜM ("veride kopukluk YOK") ÇÜRÜDÜ
② SEBEP   TARİH (araya giren kama muhtemelen ERKEN yazılmış)
```

🔴 **Önceki hüküm *"HAYIR, veride kopukluk YOK … Kopukluk ÇİZİMDEN geliyor,
Van Gölü ve Doğu Anadolu dağ kütlesi boyunca petekler ince bir şeritte
buluşuyor"* diyordu. ÖLÇTÜM — BULUŞMUYORLAR:**
```
1300-06-15 · `ilhanli` 175 petek · AYRIK PARÇA SAYISI: 15
    ① 2.680.038 km²   bbox 38,4-65,1 D  (İran çekirdeği)
    ② 97.871 km²      bbox 33,3-37,8 D  (ANADOLU LOBU — KOPUK)
    ③…⑮ kıymıklar (564 · 195 · 31 km² …)
⇒ ① 38,4 D'de başlıyor, ② 37,8 D'de bitiyor. ARADA 0,6 DERECELİK ŞERİT VAR
  ve İlhanlı DEĞİL.
```

🔴 **Ve o şeridin sahibi TAM OLARAK Emre'nin dediği devlet:**
```
Divriği   39,4K/38,1D   1300 = memluk
Arapkir   39,0K/38,5D   1300 = memluk
Malatya   38,4K/38,3D   1300 = memluk
```
⇒ **Emre'nin *"araya Memlükler girmiş gibi"* cümlesi ÖLÇÜMLE DOĞRULANDI.**

📌 **Ve iki madde birbirine bağlanıyor:** aynı partinin `H-0003`ü zaten
*"Divriği 1300'de Memlük muhtemelen ERKEN"* diyor. ⇒ **Kamayı yaratan kayıt
ile şüpheli kayıt AYNI KAYIT.** H-0003 düzeltilirse H-0002 kendiliğinden
kapanır.

```
③ ÇARE  H-0003'ün çaresiyle AYNI — aşağıya bak. Ayrı iş değil.
```

---

## H-0003 · Memlük toprakları Divriği'ye kadar uzanıyor muymuş? Artukoğulları doğru mu?

```
① TEŞHİS  gercek (şüphe haklı) — ölçüm önceki hükmü DOĞRULUYOR
② SEBEP   TARİH
```
**Ölçüm:**
```
Divriği   1300 = memluk   1315 = memluk   1350 = memluk
Malatya   1300 = memluk   1315 = memluk   1350 = memluk
Arapkir   1300 = memluk   1315 = memluk   1350 = memluk
Elbistan  1300 = memluk   1315 = memluk   1350 = dulkadir
Harput · Diyarbakır · Mardin  →  ÜÇÜ DE `artuklu`, 1300/1315/1350
```
⇒ **Emre'nin ikinci sorusunun cevabı: EVET, Artuklu doğru** (Diyarbakır ·
Mardin · Harput üçlüsü Artuklu sahasıdır).
⇒ Birinci sorusu **şüpheli kalıyor**: Memlük'ün kuzey ucu 1300'de Divriği'ye
(39,4K) dayanıyor ve **hiç değişmiyor** — 1300, 1315 ve 1350 tabloları
birebir aynı. Bir sınır 50 yıl boyunca kılını kıpırdatmıyorsa, o sınır
**ölçülmüş değil VARSAYILMIŞ** demektir.

📌 `CLAUDE.md §3.5`in **TERS YÜZÜ**: orada devlet yıkıldıktan SONRA
boyanıyordu; burada **fethetmeden ÖNCE** boyanıyor olabilir.

```
③ ÇARE  data/yerlesimler.js — Divriği · Arapkir · Malatya'nın `s:memluk`
        BAŞLANGICI TDV `divrigi` · `malatya` · `memlukler` ile sınanacak.
        Erken çıkarsa 1315 sonrasına çekilecek.
        🔴 §3.5.1 İKİ UÇ: geri çekilirse 1281-1315 arası kime ait olacak?
        Muhtemel cevap `ilhanli` — ki O ZAMAN H-0002'nin kopukluğu da
        kapanır. **Tek düzeltme iki maddeyi birden çözüyor.**
```
⚠️ **ÖLÇMEDİM:** TDV'ye bakmadım. "1315 sonrası" bir hatırlama, kaynak değil.

---

## H-0005 · Peteklerin deniz ötesine geçmesi — MOTOR KURALI

```
① TEŞHİS  gercek — ve bu bir hata raporu değil BİR MOTOR KURALI
② SEBEP   MOTOR
```
**Önceki hüküm bu maddeyi doğru sınıflandırmış** (`ALTYAPI.md`ye kural olarak
girmiş, sürtünme motoru kademe B). **Benim eklediğim ölçüm:**
```
p2/H-0013'te aynı boğazı ölçtüm ve BUGÜNKÜ geometride ihlal ÜREMİYOR:
   Çanakkale peteğinin batı ucu her enlemde ASYA kıyısında (26,403 ↔ 26,404)
   1345-01-01'de Gelibolu yarımadasında OSMANLI hücre: 0
```
⇒ **Emre'nin doğrulama sınavı ("1346'da Rumeli BOŞ, 1352'de yalnız Çimpe")
bugünkü veriyle KISMEN ZATEN GEÇİYOR** — çünkü Kilitbahir · Maydos · Çimpe ·
Bolayır · Gelibolu noktaları eklenmiş ve Voronoi kendiliğinden durmuş.

🔴 **Ama bu, kuralı gereksiz kılmaz — TERSİNE, KURALIN NEDEN GEREKTİĞİNİ
GÖSTERİR:** bugün duruyor çünkü **karşı kıyıda nokta var**. Nokta olmayan
her boğazda (Kerç · Bâbülmendeb · Hürmüz · Malaka · Sunda) aynı taşma
**hâlâ mümkün** ve motor onu engellemiyor.

```
③ ÇARE  MOTOR (Oturum 0) — sürtünme motoru kademe B.
        📌 SINAV ÖNERİM: Çimpe/Gelibolu artık ZAYIF bir sınav (noktayla
        çözülmüş). Daha keskin sınav: **noktasız bir boğaz** seçilsin —
        ölçtüm, aday var. Motor doğruysa orada da petek atlamamalı.
```

---

## H-0006 · Diğer devletlerin başkentleri de yıldız olsun

```
①②③  p2/H-0011 (c) ile AYNI KALEM — orada tam ölçüldü.
      Özet: 389/390 künyede `baskent` DOLU ama HEPSİ tek metin, HİÇBİRİ dizi,
      zincir prozanın içinde saklı (`safevi = "Tebriz → Kazvin → İsfahan"`).
      ⇒ Önceki hükmün "veri hazır, eksik olan ÇİZİM" cümlesi YARIM DOĞRU:
        ad hazır, ZAMAN hazır DEĞİL.
```

---

## H-0009 · H-0010 · H-0011 · H-0012 · H-0013 · H-0014 · H-0016
## → "1281'de bu boşlukların sebebi ne?" (7 madde, TEK CEVAP)

```
① TEŞHİS  gercek — ve DÖRT ŞIKKIN CEVABI SAYIYLA ÖLÇÜLDÜ
② SEBEP   VERİ-YOK (asıl sebep) + kasıtlı boşluk (bir kısmı)
```

**Ölçüm — 1281-06-15, pencere içindeki bütün petek gövdesi:**
```
toplam petek (kara)        57.857.231 km²   ·  2.298 petek
1281'de SAHİPSİZ             20.275.411 km²  =  KARANIN %35,0'i

kimlik bazında en büyük alanlar:
   —  (sahipsiz)  20.275.411      yuan-hanedani  6.175.294
   altinorda       3.683.028      ilhanli        2.773.122
   cagatay         2.644.055      novgorod       1.622.566
   memluk          1.418.929      delhi-sult.    1.122.136
   merini          1.094.959      almanya          845.158
```

**Emre'nin dört şıkkının ölçülmüş cevabı:**
```
"insan mı yok?"    HAYIR — hepsinde vardı.
"devlet mi yok?"   BAZILARINDA — Sahra çekirdeği, Rub'ul Hâlî, Yeni Gine içi.
                   Bu DOĞRU boşluktur.
"veri mi yok?"     EVET — ASIL SEBEP BU. 20,3 M km²'nin büyük kısmı.
"hata mı var?"     🟢 ARTIK BÜYÜK ÖLÇÜDE HAYIR — ve bunu ölçtüm:
```
🟢 **En büyük 18 peteğin 17'si SAHİPSİZ.** Yani boşluk artık **yanlış sahibe
emilmiyor**, gerçekten boş duruyor:
```
Kisangani 246.134 · Agadez 246.120 · Timbuktu 245.802 · Ndjamena 244.815 ·
Yakutsk 222.789 · Kabongo (Luba) 222.277 · Habarovka 220.392 ·
Mushenge (Kuba) 216.473 · Tibesti 209.312 · Albazin 211.796 …
```
⇒ Önceki hükmün andığı üç yanlış emilme (`banda-adalari` 573.188 km² ·
`somali` 628.526 · `ingiltere` 3.150.758) **artık en büyük 18'de YOK.**
Kapandıkları doğrulandı.
📌 Tek istisna listede: `yuan-hanedani` · **Çamdo 243.169 km²** (Tibet).
1281'de Tibet'in Yuan'a bağlı olması savunulur, ama tek noktanın 243 bin km²
tutması **seyreklik** demektir — nokta kalemi.

```
③ ÇARE  ① NOKTA — Sahel (Timbuktu-Agadez-Ndjamena hattı), Kongo havzası
           (Kisangani-Kabongo-Mushenge), Sibirya (Yakutsk-Habarovka-Albazin),
           Tibet (Çamdo). Her biri 200.000+ km² tek petekte.
        ② Ve `H-0013`ün özel sorusu (Sahra'nın hepsi çöl mü): HAYIR —
           Sahra ÇEKİRDEĞİ kasıtlı boş, ama SAHEL ve KONGO HAVZASI boş
           DEĞİLDİ. Kanem-Bornu · Kongo · Luba · Kuba künyeleri VAR
           (Kabongo ve Mushenge noktaları da var) ama 1281'de SAHİPSİZLER.
           ⇒ Künye var, DÖNEM yok. VERİ DEVLET kalemi.
        ③ `H-0016` Arabistan: Rub'ul Hâlî kasıtlı boş (dolgu noktalarıyla
           korunuyor); Necid ve körfez şeyhlikleri VERİ EKSİĞİ —
           Dir'iye · Riyad · Doha · Manama · Kuveyt 1550'de bile `—`.
```
📌 **Ve önceki hükmün bir cümlesini AYNEN taşıyorum, ölçmedim:**
*"A1 yarıçap tavanı gelince dolgu noktası HİLESİ emekli olacak."*
⚠️ `CLAUDE.md §11`de o tavanın **koşu 4b'de yayını durdurduğu** yazılı
(yetim yüz mantığı tavanı iptal ediyor). ⇒ Bu vaat **henüz teslim
edilmemiş**; bir sonraki oturum onu "yapıldı" sanmasın.

---

# parti-emrelic-0010 — 1 madde

## H-0001 · TESPİH sekmesinde her hücreye "mesaj yaz" düğmesi

```
① TEŞHİS  gercek — AMA ATLASIN İŞİ DEĞİL
② SEBEP   sistem (ClaudEmre) — atlas kuyruğunda DURMAMALI
③ ÇARE    ClaudEmre KUTU işi. Önceki hüküm doğru sınıflandırmış ve
           iletmiş. Atlas koordinatörünün kuyruğunda DURMAMALI.
```
⚠️ Ölçülecek bir harita/veri iddiası yok. Ben ClaudEmre/ altına
**yazmadım ve ölçmedim** (şartname yasaklıyor).

---

# TESLİM RAPORU — 71/71

## ① Teşhis dağılımı

```
71  →  gercek 65  ·  zaten-dogru 3  ·  anlasilmadi 3
```
⚠️ **"gercek 65" yanıltıcı görünmesin — ayırdım:**
```
gercek, HARİTA/VERİ iddiası           46
gercek, `icerik-kuyrugu`              17    MERAK 14 · EK-OKUMA 3  (son bölüm)
gercek, sistem (ClaudEmre)             1    e10/H-0001
zaten-dogru (ölçtüm, ihlal ÜREMEDİ)    3    p2/H-0013 · p6/H-0002 · p7/H-0008
anlasilmadi (Emre'ye soru yazdım)      3    p2/H-0014 · p4/H-0014 · p6/H-0009
```

## ② Sebep dağılımı — 46 harita/veri kaleminde

```
TARİH        11    yanlış/yuvarlak/toplu kırılma günü
ARAYÜZ        9    çizim, etiket, eşleştirici
VERİ-YOK      8    kaynak susuyor ya da hiç yazılmamış (1281 boşlukları 7 + göl 1)
NOKTASIZLIK   5    §2 emilme — Tuz Gölü · Bosna ucu · Macaristan enklavları · Kırım
VERİ          9    kayıt/bağ eksik (savaşlar.js · yer_id · kimlik penceresi)
HAYALET       1    İlhanlı 13 yıl
MOTOR         1    petek karşı kıyıya atlıyor (sürtünme motoru)
VERİ ARAŞTIRMA 2   Marmara Adası · Fetret sınırları
```

## ③ En büyük kalemler — ölçüyle

```
20.275.411 km²   1281'de sahipsiz kara (%35,0) — 7 maddenin tek cevabı
    13,0 yıl     İlhanlı hayaleti (Konya · Aksaray · Niğde, künye t:1353)
    42 yıl       Erzincan (Otlukbeli SAVAŞ günü fetih günü yazılmış)
    27 yıl       Sivrihisar (Germiyan'ın öteki noktalarından ayrık)
    18 yıl       Timur'un iki Bağdat işgali — madde VAR, kırılma YOK
     579 gün     1308 Selçuklu çöküşüne en yakın kronoloji maddesi
      12 yerleşim  tek "Eflak seferi" maddesinde el değiştiriyor
       8 yerleşim  "Düzmece Mustafa" başlığı altında Aydın'a dönüyor
       3 kayıt     "Amasra" maddesinin gününde (İzvornik · Tuzla, 1.100 km)
     4.621 km²   Bosna ucu enklavı, tek ayrık parça
```

## ④ 🔴 ÖNCEKİ HÜKÜMLERDEN ÇÜRÜYENLER — altı tane

Şartname `YASALAR B18` gereği eski hükümleri aktarmadım, **kendim ölçtüm.**
Altısı çürüdü:

```
p4/H-0001  "kisiBul kökü bulundu, düzeltilecek"    → düzeltme İNDİ ama
           Emre'nin ÜÇ vakası da tek kelimeye iniyor, O DAL AÇIK KALDI.
           "Kemal Reis" → Nâmık Kemal · "Şeyh Ahmed Han" → Gedik Ahmed Paşa
p4/H-0006  "madde Safevî diyor ama harita boyamıyor" → HARİTA BOYUYOR.
           Gerçek kusur Erzincan'ın 1473-08-11'i (Otlukbeli).
p4/H-0008  "ARAYÜZ: savaş simgesi çizilmiyor"       → çizim ÇALIŞIYOR,
           savaslar.js'te Hemedan KAYDI YOK.
p3/H-0014  "Marmara Adası anakaranın peteğine düşüyor" → KENDİ noktası var.
e08/H-0002 "veride kopukluk YOK, çizimden geliyor"  → 15 AYRIK PARÇA,
           Anadolu lobu 97.871 km² GERÇEKTEN kopuk, ve kamayı MEMLÜK yapıyor.
CLAUDE.md  §3.5.1 "Yukarı Macaristan'da 0 nokta, Kassa·Tokaj·Eperjes·
  §3.5.1   Sopron·Gyula'nın kaydı yok"              → BEŞİ DE VAR.
```

## ⑤ 🟢 KAPANMIŞ ÇIKANLAR — Emre'nin şikâyetleri işe yaramış

```
Kırım cetveli          3 → 14 nokta · 11 kat seyreklik → 2,35 kat
İran benekleri         s:"iran" 282 → 51 dönem
Altın Orda parçalanması beş halefin BEŞİ de haritada (sibir-hanligi dâhil)
kirim kimliği 1441 öncesi  7 kayıt → 0
Çerkez kıyısı          1783 → 1829-09-14 (Edirne)
1281 yanlış emilme     banda-adalari · somali · ingiltere → en büyük 18'de YOK
başkent yıldızı (Osmanlı) zamanlı pencereye alınmış, aynı anda TEK yıldız
Yukarı Macaristan      Kassa · Tokaj · Eperjes · Sopron · Gyula eklenmiş
```

## ⑥ Kimin işi — dağıtım

```
KOORDİNATÖR (yerlesimler.js · motor)
   p2/H-0016 İlhanlı hayaleti (13 yıl, 3 nokta)  🔴 en ağırı
   p2/H-0025 + p3/H-0008 Bağdat `celayirli` dörde bölünecek
   p4/H-0006 Erzincan 1473-08-11 → ~1515
   p2/H-0015 + e08/H-0001 Sivrihisar · Çankırı · Ankara(ahiler)
   e08/H-0002 + e08/H-0003 Divriği-Arapkir-Malatya (TEK düzeltme, İKİ madde)
   p3/H-0010 Aydın 1421-08-15 → Cüneyd'in gerçek günü
   p3/H-0017 İzvornik+Tuzla 1460-01-01'den ayrılacak
   p3/H-0018 Eflak 12 kaydın tek günü bölünecek
   e08/H-0005 MOTOR: sürtünme motoru kademe B
   p2/H-0003 göller: data/goller.js + uret_petek.py:309 eşiği

ARAYÜZ (js/app.js)
   p4/H-0001 🔴 kisiBul TEK ÖZ ADLI dal — ÜÇ şikâyet buna bağlı
   p3/H-0007 tâbi gövde kendi kimliğinin adını taşısın (veri HAZIR)
   p2/H-0011b yıldız etiketten NOKTAYA
   p5/H-0003 "haritaya yay" butonu
   p5/H-0006 aynı tarihli maddeler (35 tarih · 77 madde)
   p4/H-0012 Şahkulu yayılışı (veri hazır: 2 konumlu kayıt)
   p2/H-0005 raster kontrastı / ALTLIK Grup A ("Kademe 3")

VERİ DEVLET (devletler.js)
   p2/H-0011c `baskent` alanı [{f,t,ad}] penceresine — 389 künye
   e08/H-0013 Kanem-Bornu · Kongo · Luba · Kuba: künye VAR, DÖNEM yok

VERİ KRONOLOJİ (olaylar*.js)
   p3/H-0006 1308 Anadolu Selçuklu'nun sonu  🔴 kronolojide SIFIR
   p6/H-0005 Kalender Şah 1526
   p2/H-0015 Ankara maddesine Sivrihisar+Çankırı
   p3/H-0017 İzvornik · Tuzla · p3/H-0018 Eflak ara kademeleri
   p6/H-0004 Rodos maddesine 10 adın adıyla sayılması (liste RAPORDA)
   p4/H-0003 Cem Sultan rehin diplomasisi
   p6/H-0002 Cezayir öncesi yapı (ölçülmüş cevap RAPORDA)

VERİ KİŞİ (kisiler.js)
   Kemal Reis · Cüneyd Bey · Hadım Ali Paşa · Burak Reis · Elvend Bey — YOK

VERİ İÇERİK (merak.js · ekokuma.js) — SAHİBİ KAPALI, yeni oturum gerekiyor
   p6'dan 11 + p7'den 6 = 17 kalem → 16 kart (H-0021+H-0022 tek kart)

NOKTA
   Tuz Gölü havzası 5 · Macaristan serhat 7 · Bosna ucu 3 · Kırım kuzeyi 2-3
   Sahel · Kongo · Sibirya · Tibet (her biri 200.000+ km² tek petekte)

ÇAPRAZ İBERYA
   p6/H-0001c Portekiz: Şârika · Ras el-Hayme'nin 1520 başlangıcı

SİSTEM (ClaudEmre) — atlas kuyruğunda DURMAMALI
   e10/H-0001 TESPİH hücrelerine "mesaj yaz" düğmesi

BELGE (CLAUDE.md — koordinatör)
   §3.5.1 Yukarı Macaristan ve Gyula vakaları KAPANMIŞ, açık gibi duruyor
```

## ⑦ Emre'ye üç soru

```
p2/H-0014  "Gelibolu'nun alınışı maddesinde Saroz'un kuzeyini gösteren kareyi,
            alt künye çubuğu (tarih + koordinat) GÖRÜNECEK şekilde yeniden
            alabilir misiniz?"  (iki görsel AYNI ve ikisi de kırpık)
p4/H-0014  "Yenişehir Muharebesi karesinde şikâyetiniz üstteki 'Katılım: Sin
            (Sinj)' şeridi miydi, yoksa kronoloji listesindeki tarih biçimi
            karışıklığı mı?"
p6/H-0009  "H-0009'da metin yazmamışsınız; o karede neyi işaretlemek
            istemiştiniz?"
```

## ⑧ ÖLÇMEDİKLERİM — açıkça

```
TDV'ye HİÇ BAKMADIM. Bütün "şu tarih şüpheli" hükümlerim ölçüme (veri içi
tutarsızlık, madde başlığı, künye ömrü) dayanıyor; KAYNAĞA DEĞİL.
Doğru günler bu raporda BOŞ bırakıldı — uydurmamak için.

denetle.py'yi koşturmadım (p6/H-0005'in "kuşatma mazereti fazla geniş"
iddiasını doğrulayamadım).
Canlı haritada hiçbir şeyi yeniden çizdirmedim (p2/H-0005 raster sınavı açık).
Emre'nin p7/H-0008'de saydığı şehirlerin o dönemde var olup olmadığını
sınamadım.
p6/H-0009 görselini AÇMADIM — aynı partide olması onu bir aileye sokmaz.
```

## ⑨ Ölçüm tabanı kaydı

```
başlangıç   yerleşim 2308 · kronoloji 1158 · künye 390 · git a08f98a
bitiş       yerleşim 2308 · kronoloji 1161 · git 46cfedd
⚠️ TABAN KOŞU SIRASINDA KAYDI (üç yeni commit). Üç başlıca bulgumu
   yeniden ölçtüm, üçü de AYAKTA: İlhanlı 1366 · Bağdat tek parça ·
   Erzincan 1473-08-11.
📌 `YASALAR B18`: aletim değişmedi, EVRENİ değişti. Bunu raporlamak
   ölçümün parçasıdır.
```

# BULGULAR-SIRADA — `sirada` damgalı kutu maddelerinin reçetesi

**Oturum:** PAKET SIRADA (`local_fa65e5d5-3ee3-47af-872c-14912e60d513`, Opus 5)
**Görev:** M-0881 (koordinatör) — *"76 gerçek kusur, ölç ve REÇETE yaz"*
**Kapsam:** `ClaudEmre/kutu/giden/parti-emrelic-*/CEVAP.json` içinde
`hukum:"sirada"` damgalı maddeler.
**🔴 Bu oturum DÜZELTME UYGULAMAZ.** `data/*` · `js/*` · `arac/*` başkalarında.
Her kalem için yazılan şey: **hangi dosya · hangi satır · ne yazıyor · ne
yazmalı · gerekçesi ne.** Uygulamayı dosyanın sahibi yapar.

---

## 0. TABAN — şartnamenin sayıları doğrulandı

Devraldığım rakamı doğrulamadan aktarmadım (`CLAUDE.md §11`). `CEVAP.json`
dosyaları Python'un kendi ayrıştırıcısıyla okundu, regex kullanılmadı.

```
                         ŞARTNAME   ÖLÇÜM    HÜKÜM
sirada (parti-emrelic-*)      76      76     ✓ birebir
madde  (parti-emrelic-*)     211     211     ✓ birebir
senin-kararin                  8       8     ✓
gerek-yok                      1       1     ✓
paket sayısı                  16      17     ✗ (0008 · 0010-0024)
olculecek                     51      69     ✗ (evren farkı — 69'um TÜM kutudan)
```

**Yığın dökümü (76 = 17+15+15+10+7+4+2+2+2+1+1):**
```
0021:17  0019:15  0023:15  0008:10  0024:7  0020:4
0013:2   0014:2   0022:2   0010:1   0011:1
```
⚠️ Şartnamedeki `0012 (2)` yanlış: **0012'nin `sirada`sı 0**, ikili **0014**'te.
⚠️ `parti-emrelic-0025`'in `CEVAP.json`u yok — kusur değil, içinde
`_taslak.json` var, yani **henüz gönderilmemiş taslak.**

**Kapsam dışında kalan 43 `sirada`** (bildirildi, dokunulmadı):
`parti-0002..0007` 40 · `parti-kasa-0010` 2 · `parti-kasa-0012` 1.
Damgaları 2–10 Ağustos. Sahipsiz mi, başka oturumda mı — **ölçmedim.**

---

## 1. SINIFLAR — her kalem birine düşer

```
🟢 REÇETE      dosya + satır + eski + yeni + gerekçe yazıldı, uygulanabilir
🔵 ROTA        kusur gerçek ama BAŞKA BİR OTURUMUN dosyasında; sahibi yazıldı
🟡 KAYNAK      cevabı ölçüm değil KAYNAK verir; TDV/akademik tur gerekiyor
🟠 VERİ BORCU  nokta yoğunluğu — kayıtlı, bilinen borç (CLAUDE.md §2/§3.5.1)
⚪ EŞLEME      görselin işaret ettiği yer kutu merkezinde DEĞİL; eşleme yapılmadı
🔴 HÜKÜM YANLIŞ  CEVAP.json'daki notun kendisi çürüdü — ölçümle
```

---

## 2. parti-emrelic-0021 — 17 kalem

| madde | konu | sınıf | nereye |
|---|---|---|---|
| H-0001 | Parga/Venedik teyidi | 🟡 KAYNAK | TDV `parga` ÖLÜ — akademik kaynak |
| H-0002 | Dalmaçya kıyısı+adalar | 🟠 VERİ BORCU | §3.5.1 kayıtlı borç |
| H-0003 | Kanije/Eğri yeşil | 🟡 KAYNAK | H-0025 ile tek oturum |
| H-0004 | Avusturya/Nitra | 🟡 KAYNAK | TDV Batı Avrupa %0 |
| H-0005 | Dobruca iki boşluk | ⚪ EŞLEME | merkez BOYALI, boşluk başka yerde |
| **H-0007** | **Bahreyn 1602** | **🟢 REÇETE** | **§2.1 — `yerlesimler.js:993`** |
| **H-0010** | **Erbil/Kerkük/Tikrit** | **🔴 HÜKÜM YANLIŞ** | **§2.2 — veri zaten doğru** |
| H-0015 | "görüntü bozulması" | 🟢 kısmen çözüldü | kalan ölçüm §2.3 |
| H-0017 | Kûm Ombo boşluğu | ⚪ EŞLEME | merkez BOYALI |
| **H-0021** | **Bahreyn kırmızılığı** | **🟢 REÇETE** | **H-0007 ile TEK kusur** |
| H-0024 | Orta Asya boşluğu | 🟠 VERİ BORCU | Kol A, ~1400 nokta |
| H-0025 | Kraliyet Macaristanı | 🟡 KAYNAK | H-0003 ile tek oturum |
| H-0027 | Van'ın doğusu | 🔵 ROTA | **FERHAD PAŞA HATTI** (canlı) |
| H-0028 | Ferhad Paşa 21 ad | 🔵 ROTA | **FERHAD PAŞA HATTI** (canlı) |
| H-0029 | Dalmaçya adacıkları | 🟢 REÇETE (emsal) | §2.4 — Argolid yöntemi |
| H-0030 | Eflak seferi işareti | 🟢 kısmen çözüldü | kalan §2.5 |
| H-0031 | uçuş ayarı ⑤ | 🔵 ROTA | arayüz oturumu |

---

### 2.1 🟢 H-0007 + H-0021 — BAHREYN: TEK KUSUR, İKİ YÜZÜ

**Şikâyet.** *"Safevîlerin Bahreyn'i Portekizlilerden alması haritada
yansıtılmıyor (1602)"* · *"Bahreyn'de hiç toprak parçası var mıydı, oradaki
kırmızılık garip bir bozukluk gibi görünüyor"*

**HÂLÂ GEÇERLİ Mİ — kısmen. Yarısı bugün kapandı, yarısı AÇIK.**
```
KAPANDI  Katar yarımadasının Ukayr peteğine emilmesi
         → KÖRFEZ 1602 oturumu dolgu noktasını yazdı
           (data/yerlesimler_ek_korfez.js — o dosya ONUN, dokunmadım)
AÇIK     Manama'nın KENDİ kaydı: 1281→1861 arası HİÇBİR SAHİP YOK
```

**KUSUR NEREDE — VERİDE.** `data/yerlesimler.js:993`
```js
{ ad:"Manama (Bahreyn)", bos:"devletsiz", neden:"…", tur:"liman",
  lat:26.228, lon:50.586, g:0, k:2, d:[],
  s:[{f:"1861-05-31",t:"1923-10-29",d:"ingiltere"}] },
```
Kayıt, Necid/körfez şeyhlikleri şablonunu (*19. yy öncesi = devletsiz*)
Bahreyn'e de uygulamış. Ama Bahreyn o şablona **girmiyor**: kaynak
Bahreyn için **açıkça konuşuyor** ve isimli hükümdar sayıyor.
📌 `CLAUDE.md §11`in *"sahipsizin iki cinsi"* sınavı: **kaynak konuşuyorsa
`devletsiz` YAZILMAZ.** Burada konuşuyor.

**KAYNAK — TDV `bahreyn`, HTTP 200, gövdesi okundu (kendim doğruladım):**
```
"1521'de Bahreyn'i ele geçirdiler"                          → Portekiz
"1602'de İran'a bağlı kuvvetler tarafından dışarı
 çıkarılmalarına kadar onların idaresinde kaldı"            → Safevî
"Bahreyn 1783 yılında Utûb kabilesinden Âl-i Halîfe'nin
 hâkimiyetine girdi"                                        → Âl Halîfe
```

**🟢 VE BEDAVA: KRONOLOJİ ZATEN YAZILMIŞ.** Dört kırılma gününün dördü de
külliyatta **birebir** var (`data/olaylar_ek13.js:270-330`):
```
1521-01-01  "Portekiz'in Bahreyn'i alışı — Cebrî hâkimiyetinin sonu"   +0 gün
1602-01-01  "Safevîler'in Bahreyn'i Portekiz'den alması"               +0 gün
1717-01-01  "Ummanlılar'ın Bahreyn'i istilâsı"                         +0 gün
1753-01-01  "Bahreyn'in Bûşehr'deki Âl-i Mezkûr idaresine geçmesi"     +0 gün
1783-01-01  "Âl-i Halîfe'nin Bahreyn'i fethi"                          +0 gün
1861-05-31  "Bahreyn'in İngiltere ile antlaşması"                      +0 gün
```
⇒ **Bu düzeltme `Değişmez 2s`ye tek yeni açık EKLEMEZ.** Maliyeti sıfır.
📌 Yani veri vardı, **onu okuyan yerleşim kaydı yoktu** — `§11`in
*"iki uç da ölçülür"* deseninin bir başka vakası.

**KÜNYE VE RENK DENETİMİ (`§8`: `BOYALAR`da yoksa boyanmaz = harita deliği):**
```
kimlik     künye f/t                    BOYALAR
portekiz   1139-07-25 → 1923-10-29      ✓
safevi     1501-07-01 → 1736-03-08      ✓
umman      1624-01-01 → 1923-10-29      ✓
zend       1751-01-01 → 1794-01-01      ✓
bahreyn    1783-01-01 → 1923-10-29      ✓   ← künye VAR, veride HİÇ kullanılmıyor
ingiltere  1066-01-01 → 1923-10-29      ✓
```
Altısının altısı hem künyeli hem renkli. **`al-i-mezkur` künyesi YOK** —
1753-1783 için `zend` kullanılıyor, çünkü kronoloji maddesi *"son temsilcisi
Nasr Âl-i Mezkûr, Bahreyn valiliğine **Zend idaresince** atanmıştı"* diyor.

**REÇETE — `data/yerlesimler.js:993`, `s:` dizisi şununla değiştirilir:**
```js
  s:[{f:"1521-01-01",t:"1602-01-01",d:"portekiz"},
     {f:"1602-01-01",t:"1717-01-01",d:"safevi"},
     {f:"1717-01-01",t:"1753-01-01",d:"umman"},
     {f:"1753-01-01",t:"1783-01-01",d:"zend"},
     {f:"1783-01-01",t:"1861-05-31",d:"bahreyn"},
     {f:"1861-05-31",t:"1923-10-29",d:"ingiltere"}] },
```
`bos:"devletsiz"` **KALIR** ama `neden:` metnine kapsam eklenir: artık yalnız
**1281→1521** penceresini gerekçelendiriyor, tamamını değil.

**🔴 İKİ AÇIK SORU — REÇETEYE GİRMEDİ, HÜKÜM KOORDİNATÖRÜN:**

**① 1861-1923 `ingiltere` mi `bahreyn` mi?** Mevcut kayıt adayı İngiltere
boyuyor. Ama 1861 bir **himaye antlaşmasıdır**, ilhak değil — Âl Halîfe
hüküm sürmeye devam etti ve `bahreyn` künyesi `t:1923-10-29`a kadar açık.
⇒ Bu, `§3.5`in *hayalet devlet* sınıfının aynası: **var olan devletin
üstüne başkasını boyamak.** Ama modelde yabancı için `v:` (tâbi) yok, yalnız
`s:` var; yani "himaye" ifade edilemiyor. **Model kararı, benim değil.**
Önerim: `bahreyn` 1783→1923 kesintisiz, İngiltere hiç boyanmaz.
*(Bu bir ÇIKARIM, ölçüm değil.)*

**② TDV 21 Mayıs, atlas 31 Mayıs 1861.** TDV `bahreyn`: *"21 Mayıs 1861'de
İngiltere ile … bir anlaşma imzaladılar."* Veri ve kronoloji **31 Mayıs**
diyor. On günlük fark; iki tarih de literatürde var (21 Mayıs = köle
ticareti/korsanlık anlaşması, 31 Mayıs = Perpetual Truce). **Çelişkiyi
bildiriyorum, seçmiyorum** (`§7.1 ⑥`: kaynaklar çelişiyorsa karar bende
değil). `olaylar_ek13.js:330` civarındaki yorum bu farkı zaten kaydetmiş.

---

### 2.2 🔴 H-0010 — HÜKÜM NOTUNUN KENDİSİ ÇÜRÜDÜ

**Şikâyet.** *"Bağdat 4. Murat alırken aradaki şehirlerin alınması tarihi
kayıtlarda hiç mi geçmiyor — Erbil Kerkük Sâmerrâ Tikrit"*

**CEVAP.json'daki not şöyle diyor:**
> *"Erbil · Kerkük · Sâmerrâ · Tikrit'in fetih tarihleri veride Safevî
> kalmış — IV. Murad Bağdat'ı 1638-12-24'te alıyor ama kuzeyindeki şehirler
> o gün hâlâ Safevî görünüyor."*

**ÖLÇÜM (`data/yerlesimler.js`, beş kayıt, satır satır):**
```
satır 1645  Erbil     safevi 1623-11-28 → 1638-12-25   d: 1638-12-25'ten
satır  680  Kerkük    safevi 1623-11-28 → 1638-12-25   d: 1638-12-25'ten
satır 1625  Sâmerrâ   safevi 1623-11-28 → 1638-12-25   d: 1638-12-25'ten
satır 1626  Tikrit    safevi 1623-11-28 → 1638-12-25   d: 1638-12-25'ten
satır 1646  Kifri     safevi 1623-11-28 → 1638-12-25   d: 1638-12-25'ten
satır  681  Bağdat    safevi 1623-11-28 → 1638-12-24   d: 1638-12-24'ten
satır  679  Musul     d: 1516-08-24'ten kesintisiz  (sefer Osmanlı toprağından geçti)
```
**ÇIKARIM (ölçümden AYRI SATIRDA):** şehirler *"Safevî kalmış"* değil —
Bağdat'ın düştüğü günün **ERTESİ GÜNÜ** Osmanlı oluyorlar. Not, `1638-12-24`
kesitini ölçüp *"hâlâ Safevî"* görmüş; doğru, çünkü o tek gün öyle. Ama
oradan çıkarılan *"fetih tarihleri veride Safevî kalmış"* hükmü **yanlış.**
⇒ `CLAUDE.md §11`in *"ölçüm doğru, çıkarım yanlış"* sınıfı.

**KAYNAK TURU YAPILDI — ve cevabı "yok".** TDV `murad-iv`, HTTP 200,
gövdesi okundu:
```
8 Mayıs 1638      ordunun Bağdat'a hareketi (23 Zilhicce 1047)
6 Kasım 1638      Musul'a varış (28 Cemâziyelâhir 1048)
14 Kasım 1638     İmam Mûsâ Türbesi civarı — kuşatmanın başı (7 Receb)
24 Aralık 1638    Bektaş Han şehri teslim etti (17 Şâban 1048, Cuma)
17 Ocak 1639      İstanbul'a dönüş
```
**Kerkük · Erbil · Tikrit · Sâmerrâ için TDV TEK BİR TARİH VERMİYOR.**
⇒ Emre'nin *"kayıtlarda hiç mi geçmiyor"* sorusunun cevabı: **arandı, TDV'de
yok.** Bu bir sonuçtur ve uydurmaktan kat kat değerlidir (`§4`).

**REÇETE — ÜÇ ŞIK, hüküm koordinatörün:**
```
a) DOKUNMA   1638-12-25 bir KONVANSİYONDUR (merkez düştü → çevre ertesi gün).
             Kaynak susuyorsa savunulabilir. ⇒ H-0010 "cozuldu"ya çevrilir,
             notuna "TDV tarih vermiyor, 12-25 konvansiyon" yazılır.
b) AKADEMİK TUR   Nâimâ / Kâtib Çelebi tabanlı bir monografi Kerkük ve
             Erbil'in teslim günlerini verebilir. `§4` kırmızı çizgisi:
             AKADEMİK kaynak şart, `kaynak:` alanına AÇIKÇA yazılır.
c) TERS YÖN  Sefer Musul'a 6 Kasım'da vardı; Kerkük/Erbil'in Bağdat'tan
             SONRA düşmesi güzergâh mantığına aykırı olabilir. Ölçülmedi.
```
**Önerim (a)** — ve şıkkın kendisi bir bulgu: kayıt zaten doğru
sayılabilir, kutu maddesi yanlış teşhis üzerine `sirada` damgası almış.

---

### 2.3 H-0015 — kalan tek ölçüm

Not diyor ki: *"⚠️ Kalan iş: bu görselin işaret ettiği noktanın
`bos_alanlar.js`te kaydı var mı — ÖLÇMEDİM."*
**ÖLÇÜLDÜ:** `data/bos_alanlar.js` **107. satırda** Manama kaydı var, dosya
`cins:"devletsiz-yerlesim"` şemasını kullanıyor. Teymâ/kabile kuşağının
kayıtları da aynı dosyada. ⇒ Ekranda ayırt ediliyor (commit `06b2751`,
`js/app.js:938` `boslukKur()`), kayıt VAR. **Kalem kapanabilir** — ama
görselin işaret ettiği tam nokta ile eşleme yine yapılmadı (⚪).

### 2.4 H-0029 — Dalmaçya adacıkları: emsal HAZIR

Aynı sınıfın vakası 19 Ağustos'ta çözüldü: commit **`5a90515`** (ARGOLID) —
*"ada peteği anakarayı boyuyordu"*, çare **4 nokta**.
**REÇETE:** Dalmaçya adacıkları için aynı yöntem — ada başına bir nokta,
`3 km mükerrer` kontrolü yapılarak. Hangi adacıklar olduğu **ölçülmedi**;
`arac/nicin_bos.py --lat --lon --gun 1592-06-19` ile adacık başına tek tek
ölçülmeli. Bu bir **nokta oturumunun** işi (`yerlesimler_ek_*.js`).

### 2.5 H-0030 — kalan kalem

`4581d71` (19 Ağu) üç kusuru kapattı (antlaşma `lat`/`lon`, `savasIsaretleri`
antlaşmaları okumuyordu, çakışma elemesi). **Kalan:** Emre'nin istediği
*"üç voyvodalığın başkentine üç ateş emojisi"* — yani **eşzamanlı çoklu
ayaklanmayı tek bir görsel olay olarak gösterme.** Bugünkü tipolojide
karşılığı yok. 🔵 arayüz oturumuna.

---

---

## 3. parti-emrelic-0023 — 15 kalem · 🔴 DAMGANIN KENDİSİ TUTARSIZ

### 3.1 🔴 ÖNCE YAPISAL BULGU: `sirada` İKİ AYRI ŞEY DEMEK

Şartname `sirada`yı şöyle tanımlıyor: *"ölçüldü, gerçek kusur, düzeltme
gerekiyor."* **0023'te bu tanım tutmuyor.** On beş maddenin **on beşinde**
notun kendisi şunu yazıyor:
> *"Henüz ÖLÇMEDİM — hüküm vermiyorum. A kümesi (koşuya yetişmesi gereken
> veri işi) önce bitiriliyor."*

⇒ Bunlar *"ölçüldü, gerçek kusur"* **değil**, *"hiç ölçülmedi"*. Yani
`olculecek` kovasına ait. **76'nın 15'i (%20) yanlış kovada.**

**ÖLÇÜM ile ÇIKARIM ayrı:** ölçüm — 15/15 notta "Henüz ÖLÇMEDİM" yazıyor.
Çıkarım — damga, o turda *"bu tura yetişmedi"* anlamında kullanılmış;
sonraki tur onu *"ölçülmüş gerçek kusur"* diye devralıyor.
📌 `CLAUDE.md §11`: *"kova ayrımı doğruydu, ATAMA yanlıştı."* Aynı sınıf.

### 3.2 🟢 VE BEŞİ ZATEN KAPANDI — commit `4581d71`

CEVAP.json **19 Ağu 22:43**'te yazıldı. Commit **19 Ağu 23:24** — kırk bir
dakika sonra. Commit mesajı beş maddeyi **numarasıyla** anıyor:
> *"Emre `0023/H-0012·13·15·16·17`: Salankamen · Granbosa · Ulas · Zenta ·
> Karlofca haritada isaretli degil."*

**DOĞRULADIM — `data/savaslar.js`te beşinin de koordinatı var:**
```
Salankamen bozgunu   45.13  / 20.28     Zenta        45.93 / 20.09
Granbosa Kalesi      35.622 / 23.586    Karlofça     45.201 / 19.932
Ulaş/Lugoş           45.69  / 21.9
```
⇒ `H-0012 · H-0013 · H-0015 · H-0016 · H-0017` → **BAYAT, hash `4581d71`.**
Hükümleri `cozuldu`ya çevrilmeli. **Ama ikisi ile üçü aynı ölçüde değil:**
```
🟢 H-0013 Granbosa   savaslar.js kaydı YOKTU → yazıldı            KANITLI
🟢 H-0017 Karlofça   koordinat YOKTU + app.js antlaşmaları
                     HİÇ OKUMUYORDU → iki uç da düzeltildi        KANITLI
🟡 H-0012 Salankamen kayıt ve koordinat ZATEN VARDI. Teşhis
🟡 H-0015 Ulaş       "çakışma elemesi" oldu, kural değiştirildi
🟡 H-0016 Zenta      ama ATEŞLENİP GÖRÜLMEDİ                      DOĞRULANMADI
```
Commit'in kendisi bunu saklamıyor: *"⚠️ BU ATEŞLENİP GÖRÜLMEDİ … kuralı
yine de değiştirdim, çünkü ölçümden bağımsız olarak yanlış."*

### 3.3 🔴 DOĞRULAMAYI DENEDİM — VE ENGEL, SANILAN ENGEL DEĞİL

Üç kalemi tarayıcıda ateşlemeyi denedim (`localhost:8777`, başka bir
oturumun sunucusu). **Ölçüm:**
```
WebGL              ✓ VAR — ANGLE (Intel UHD Graphics 620, D3D11)
Web Worker         ✓ kuruluyor · maplibregl.getWorkerCount() = 1
canvas             ✓ #harita içinde var
SAVASLAR           169 kayıt · ANTLASMALAR 41 · lat'i olan: 170
harita.getStyle().layers.length     0      ← stil HİÇ yüklenmedi
haritaHazir                         false  ← savasGuncelle ilk satırda dönüyor
document.visibilityState            "hidden"
screenshot                          "Browser pane is not displayed,
                                     so the page is not compositing frames"
```
**ÇIKARIM (ölçümden AYRI SATIRDA):** `4581d71`in *"WebGL başlamıyor"*
teşhisi **yanlış** — WebGL çalışıyor. Gerçek sebep: sayfa `hidden`
durumdayken tarayıcı kare üretmiyor, MapLibre stil yüklemesini
tamamlamıyor, `haritaHazir` false kalıyor ve **`savasGuncelle()` ilk
satırında dönüyor** (`js/app.js:2003`). Marker sayısı bu yüzden 0.
⇒ **Görsel doğrulama, Browser panelinin AÇIK OLMASINI gerektiriyor.**
`§11`: *"ölçüm doğru, teşhis yanlış"* — ve bu sefer düzelten şey koda
bakmak değil, **tarayıcının kendi durumunu ölçmek** oldu.

### 3.3b 🟢 PANEL AÇILDI — ÜÇÜ DE DOĞRULANDI, VE KARŞI-SINAVLA

Emre paneli açtı; `document.visibilityState` **"visible"** oldu ve MapLibre
yüklemeyi tamamladı (`haritaHazir true` · stil **34 katman** · 1949 şehir
işareti). Tahmin doğruydu: engel WebGL değil, **panelin kapalı olmasıydı.**

**① İŞARETLER ÇİZİLİYOR** — üç günün üçünde de, ekrandaki etiket metniyle:
```
1691-08-19  Salankamen bozgunu   ✓ ekli
1695-09-22  Lugoş zaferi         ✓ ekli
1697-09-11  Zenta                ✓ ekli
```

**② VE ASIL SINAV — `4581d71`in TEŞHİSİ DOĞRU MU?**
Sadece *"bugün çiziliyor"* demek yetmez; **düzeltmenin sebep olduğunu**
göstermek gerekir. Karşı-sınav: `sonVurgulanan = -1` yapılarak commit
ÖNCESİ davranış taklit edildi (odaktaki muharebe korunmaz).
```
Zenta · 1697-09-11 · dört yakınlık kademesinde
zoom   odak VAR (bugün)   odak YOK (eski)   çakışan şehir etiketi
5,0          1                  1                    0
5,5          1                  0   🔴                1
6,0          1                  0   🔴                1
7,0          1                  1                    0
```
⇒ **TEŞHİS DOĞRULANDI.** Şehir etiketiyle çakışmanın olduğu kademelerde
(5,5 ve 6,0) eski davranış işareti **eliyor**, yeni kural **koruyor.**
Çakışma olmayan kademelerde (5,0 · 7,0) iki davranış aynı — yani kural
gereksiz yere müdahale etmiyor.

🔴 **VE EN ÖNEMLİ AYRINTI:** uygulamanın **açılış yakınlığı 5,5**
(`js/app.js:549` `zoom: 5.5`) — yani kusurun göründüğü kademe, kullanıcının
haritayı ilk gördüğü kademe. Emre'nin *"işaretli değil"* demesinin sebebi
tam olarak bu.

⇒ `H-0012 · H-0015 · H-0016` → **`cozuldu`, KANITLI** (hash `4581d71`).
Artık 0023'ün beşinin beşi kapalı: ikisi kayıt/koordinat, üçü çakışma
elemesi.
📌 Ve `§11 C13`in tam biçimi uygulandı: **geçme yolu** (kusur yokken
müdahale etmiyor — z5,0/z7,0) ve **ateşleme yolu** (kusur varken koruyor —
z5,5/z6,0) ayrı ayrı sınandı. Commit'in *"ateşlenip görülmedi"* borcu
kapandı.

🟢 **YAN BULGU (kimse sormadı, ölçüm verdi):** `savasIsaretleri` 170 kayıt
üretiyor; 169 savaş + 41 antlaşma = 210'un **40'ında `lat` yok.** Yani
`4581d71`in *"41 antlaşmanın 40'ında hâlâ koordinat yok"* kuyruğu bugün
de aynen duruyor — Karlofça dışında hiçbir antlaşma haritada işaretlenemez.

### 3.4 Kalan 10 kalem — hepsi ÖLÇÜLMEMİŞ

| madde | konu | gerçek kova |
|---|---|---|
| H-0001 | "kaç tane Macaristan var" (1526-1699) | 🟡 KAYNAK — 0021/H-0003·H-0025 ile **tek oturum** |
| H-0002 | Estergon/Uyvar irtibatı, Parkan bozgunu | 🟡 KAYNAK (Emre "akademik kaynak" dedi) |
| H-0003 | Kutsal İttifak rozeti + animasyon | 🔵 ARAYÜZ (yeni özellik) |
| H-0005 | Budin·Şimontorna·Kalocsa eşzamanlı mı | ⚪ ÖLÇÜM (veri, ucuz) |
| H-0006 | duygu emojisi ayarı + **taraf tutmasın** | 🔵 ARAYÜZ (tasarım kararı) |
| H-0007 | toprak değişiminde göz kırpma animasyonu | 🔵 ARAYÜZ |
| H-0009 | uçuş animasyonu ne zaman çalışır | 🔵 ARAYÜZ — 0021/H-0031 ile aynı aile |
| H-0010 | Knin'in düşüşü ayrı madde olmalı | 🟢 **`Değişmez 2` İHLALİ** — aşağıda |
| H-0011 | Kragujevac/Tuzla enklav görüntüsü | ⚪ ÖLÇÜM (veri) |
| H-0018 | Karlofça kayıpları devlet devlet gösterilmeli | 🔵 ARAYÜZ + VERİ |

**🟢 H-0010 en değerlisi ve sınıfı belli:** Emre *"Knin'in düşmesi
görüntüleniyor ama ayrı bir kronoloji maddesi yok"* diyor. Bu tam olarak
`CLAUDE.md §10`un tarif ettiği durum: *"kullanıcı 'eğer doğru ise ayrı madde
ile gösterilmeli' derse bu **Değişmez 2**'nin ihlali demektir — kırılmayı
bul, maddesini yaz."* ⇒ Kova `olculecek` değil, **`sirada` ve haklı**;
reçetesi: Knin'in `s:`/`d:` kırılma gününü bul, ±30 günde maddesi var mı
ölç, yoksa `olaylar_ek*.js`e madde yaz. **Ölçüm bir sonraki turda.**

---

---

## 4. parti-emrelic-0019 — 19 kalem (15 DEĞİL) · 🔴 HEDEF HAREKET EDİYOR

### 4.0 🔴 ÖNCE: KUTUNUN SAYISI BENİM ÇALIŞTIĞIM SIRADA DEĞİŞTİ

```
sabah   ölçtüm   0019 sirada = 15   ·  emrelic toplam 76
17:42            CEVAP.json YENİDEN YAZILDI  (PAKET 0019 TASNİF oturumu)
akşam   ölçtüm   0019 sirada = 19   ·  emrelic toplam 80
```
Tüm kutu: `sirada` **119 → 123** · `olculecek` **69 → 59** · `cozuldu`
**104 → 107** · `zaten-dogru` **19 → 22**.

**ÖLÇÜM bu. ÇIKARIM ayrı:** PAKET 0019 TASNİF `olculecek` kovasını ölçüp
`sirada`ya taşıyor — yani **benim kuyruğumu o besliyor.** Bu bir kusur
değil, iş bölümünün doğal sonucu; ama iki şeyi zorunlu kılıyor:
```
① "76" bir FOTOĞRAFTI, sayaç değil. Rapor ederken hangi ana ait
   olduğunu yazmak şart (CLAUDE.md B3).
② 0019/CEVAP.json'a İKİMİZ DE yazarsak sessiz veri kaybı olur (§7).
   ⇒ O dosyaya DOKUNMADIM. Hüküm güncellemesini koordinatör
     PAKET 0019 TASNİF ile sıraya koymalı.
```
📌 `CLAUDE.md §11`: *"bir aletin evreni değişince, alet değişmeden sessizce
yanılır."* Bu sefer alet yanılmadı çünkü **ikinci kez ölçtüm.**

### 4.1 🟢 H-0034 — HÜKÜM ÇÜRÜDÜ, KALEM KAPANABİLİR

Not şöyle diyordu: *"`azemmur` kelimesi kronolojide de, savaslar.js'te de
**HİÇ GEÇMİYOR** (0 eşleşme)"* — ve kendi riskini de yazmıştı:
*"⚠️ Yazım farkı ihtimalini eledim mi? HAYIR."*

**ÖLÇÜM — geçiyor, şapkalı yazımla:**
```
data/olaylar_ek13.js:149   t:"1513-09-01"  yer_id:"Azemmûr"
   b:"Azemmûr'un alınışı — Ümmürrebî' ağzının denetimi"
data/olaylar_ek13.js:184   t:"1541-10-01"  "Safi ve Azemmûr'un boşaltılması"
data/yerlesimler_ek3.js:125  ad:"Azemmûr"  33.289 / -8.342  (s: dolu)
ikisi de 3 Ağustos'tan beri veride (commit 8b14cd8 · b16f3f3)
```
**VE CANLI TARAYICIDA DOĞRULADIM** (`localhost:8777`):
```
olayKonumu({yer_id:'Azemmûr'})  →  {lat:33.289, lon:-8.342}
```
⇒ Madde de nokta da var, konum da **bugün çözülüyor.** `H-0034` → `cozuldu`.
📌 Ve ders çift taraflı: notu yazan `azemmur` aradı, veri `Azemmûr` yazıyor.
**Aynı hata verinin içinde de var** — bkz. §4.2.

### 4.2 🟢 YENİ BULGU — 811 `yer_id`İN 809'U ÇÖZÜLÜYOR, 2'Sİ ÇÖZÜLMÜYOR

Kimse sormamıştı; H-0034'ü ölçerken çıktı. Canlı tarayıcıda **tam tarama:**
```
toplam madde                     1223
yer_id taşıyan                    811
yer_id ÇÖZÜLMEYEN                   2      ← ikisi de aynı sebep
```
```
data/olaylar*.js   t:"1400-01-01"  yer_id:"Dârfûr"
                   "Dârfûr'da Dâcû hâkimiyetinin Tuncûrlar'a geçmesi"
                   t:"1695-01-01"  yer_id:"Dârfûr"
                   "Dârfûr Sultanlığı'nın kuruluşu — Keyra hânedanı"
data/yerlesimler.js:1076   ad:"Darfur"     ← ŞAPKASIZ
```
`olayKonumu` (`js/app.js:4512`) **bilerek** bulanık eşleşme yapmıyor:
*"BULANIK EŞLEŞME YOK (bugün beş kez yanlış çıktı)."* Yani kusur kodda değil,
**iki yazımın ayrışmasında.**

**REÇETE (iki satır):** ilgili iki maddede `yer_id:"Dârfûr"` → `yer_id:"Darfur"`.
*(Ters yön — yerleşimi `Dârfûr` yapmak — daha risklidir: `yerlesimler.js`
motorun girdisi, ad değişince `m:` zincirleri ve `donemler.js` anahtarları
etkilenir. `yer_id` yalnız arayüzde okunuyor.)*

**🟢 VE ASIL REÇETE BİR NÖBETÇİ** — `H-0023`ün istediği şeyin ta kendisi:
```
denetle.py'ye dal:  her olayın yer_id'si YERLESIMLER'de karşılık buluyor mu?
bugün ateşlerse: 2                         geçme yolu: iki satır düzelince 0
```
`§11 C13`: iki yönde de sınanabilir, çünkü bugün gerçek kusur VAR.

### 4.3 🟢 H-0058 — YARISI ÇÜRÜDÜ

Şikâyet: *"Böğürdelen'in fethi maddesinde haritada gösterim yeri yok."*
**ÖLÇÜM:** `data/olaylar_ek10.js:404` · `t:"1521-07-07"` ·
`yer_id:"Böğürdelen (Šabac)"`, ve canlı tarayıcıda
`olayKonumu` → `{lat:44.75, lon:19.694}`. **Konum çözülüyor.**
⚠️ Şikâyetin ikinci yarısı (*"uçuşta imparatorluk görünümüne geçiyor"*)
AYRI bir kalem ve **ölçmedim** — o bir zoom davranışı, 🔵 arayüz.
⇒ Madde ikiye bölünmeli: konum yarısı `cozuldu`, zoom yarısı `sirada`.

📌 **Ve `H-0034` + `H-0058` birlikte bir desen veriyor:** ikisi de
*"haritada yeri görünmüyor"* diyor, ikisinin de `yer_id`si **bugün
çözülüyor.** Emre'nin şikâyeti 13 Ağustos'tan; `olayKonumu` 4 Ağustos'ta
(`d7dde09`) gelmiş ama `c734af9` (**18 Ağustos**, *"DEVLET ODAĞI — harita
artık Osmanlı'dan çözüldü"*) `yer_id` yolunu yeniden elden geçirmiş.
**Hangi commit'in kapattığını KESİN ÖLÇMEDİM** — ama bugün çalıştığı
kesin, ve `§11`in *"şikâyet, şikâyet edilen şeyden hızlı bayatlar"*
kuralı burada iki kez işledi.

### 4.4 🟢 H-0067 — ANAKRONİZM DOĞRULANDI, REÇETE HAZIR

```
data/olaylar_ek14.js:83   t:"1534-06-01"  yer_id:"İstanbul"
   b:"Fuzûlî'nin Bağdat'ın fethi sonrası Kanuni'ye kaside sunması"
Bağdat'ın fethi (veride)  1534-12-04   ← ALTI AY SONRA
```
Yani madde, *"fethin sonrası"* diyor ve fetihten **altı ay önce** duruyor.
**KAYNAK TURU YAPILDI** — TDV `fuzuli`, HTTP 200, gövde okundu:
> *"Kanûnî Bağdat'ı fethedince … meşhur kasidesiyle beraber padişaha beş
> kaside takdim etmiş."* — fetih **1534**, kaside *"hemen ardından"*.
> **TDV gün ve ay VERMİYOR.**

**REÇETE:** `t:"1534-06-01"` → `t:"1534-12-04"` ve `gun:` alanına
*"1534 (TDV gün vermez; Kanûnî'nin Bağdat'a girişiyle aynı güne konuldu —
kaynak 'fethin hemen ardından' diyor)"* yazılır.
*(İkinci şık `t:"1535-01-01"` — Kanûnî'nin Bağdat'ta kaldığı kışa denk
düşer, o da savunulabilir. Önerim birincisi: kaynak "hemen ardından" diyor.)*
⚠️ `yer_id:"İstanbul"` da tartışmalı — kaside **Bağdat'ta** sunuldu. Ama
bunu TDV açıkça söylemiyor, **ölçmedim**, reçeteye koymuyorum.

### 4.5 🟢 H-0069 — GERÇEK VERİ KUSURU, ÖLÇÜM DOĞRULANDI

```
data/yerlesimler.js:1649  Halepçe    safevi → 1534-12-04, sonra OSMANLI
data/yerlesimler.js:655   Şehrizor   safevi → 1554-08-22, sonra OSMANLI
```
Halepçe (45,99 D) Şehrizor'un (45,43 D) **doğusunda** — yani Osmanlı,
arkasında Safevî Şehrizor dururken ondan **daha derindeki** kasabayı
yirmi yıl önce almış görünüyor.
📌 `CLAUDE.md §3.5`: *"merkez düştü diye çevre otomatik devrolmaz."*
Aynı desen Memlük'te ölçülmüş, 38-55 yıllık fazlalık üretmişti.
**REÇETE:** Halepçe'nin `d:` başlangıcı ve `safevi` döneminin sonu
**1554-08-22**'ye (Şehrizor'un günü) çekilir.
⚠️ `Değişmez 2` maliyeti **ölçülmedi** — 1554-08-22'nin ±30 gününde madde
var mı bakılmalı (Şehrizor aynı günü kullandığına göre muhtemelen var).

### 4.6 🟢 H-0039 — KUSUR HARİTADA DEĞİL, MADDE BAŞLIĞINDA

```
data/olaylar_ek5.js:153   t:"1516-05-01"
   b:"Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın fethi"
data/olaylar_ek13.js:398  t:"1517-05-01"
   b:"Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safevî direncinin sonu"
veri: Urfa · Palu · Siverek · Harput → 1516-05-01 · Mardin → 1517-05-01
```
⇒ **Harita doğru, başlık yanıltıyor.** Mardin kalesi 1516'da düşmedi.
**REÇETE:** `olaylar_ek5.js:153` başlığı — *"Koçhisar (Kızıltepe) Savaşı ve
Urfa'nın fethi"* olur; Mardin cümleden çıkar (kendi maddesi zaten var,
`ek13:398`). İkinci şık: başlık *"…Mardin ovasının ele geçirilmesi"* gibi
kaleyi kapsamayan bir ifadeye çevrilir. **Önerim birincisi** — en az
müdahale, ve iki madde birbirini çelmiyor.
⚠️ Emre'nin ikinci şikâyeti (*"madde Palu-Siverek'ten bahsetmiyor ama
alınmış görünüyor"*) `H-0045` ailesindendir (§4.7).

### 4.7 H-0045 · H-0047 · H-0048 — TEK SINIF, ÖLÇÜLEBİLİR ÖLÇÜT

Üçü de aynı şeyi söylüyor: *"haritada değişen yerler, madde BAŞLIĞINDA
zikredilmiyor."* (Halep→Deyrizor/Rakka · Trablusşam→Hama/Humus ·
Şam→Beyrut/Palmyra). `H-0039②` de buraya düşüyor.
**ÖLÇÜLEBİLİR HÂLİ** (notun kendi önerisi, doğru):
```
her madde için:  o gün kırılan yerleşim kümesi   ∖   başlıkta geçen adlar
fark boş değilse → başlık eksik
```
⚠️ **ÖLÇMEDİM** — aleti kurmadım. Ama bir uyarı: `H-0048`de Palmyra
(Tedmür) için iki ihtimal ayrılmalı — Şam'la **aynı gün mü** geçti, yoksa
noktasızlık yüzünden Şam'ın peteğine mi düşüyor? İkincisi ise bu bir
**başlık işi değil NOKTA işidir** (`§2` emilme).

### 4.8 Kalan kalemler — kova ataması

| madde | konu | kova |
|---|---|---|
| H-0010 | uçuşun altı ayarı (iskelet var, ayar yok) | 🔵 ARAYÜZ |
| H-0011 | devlet seçici combobox + odak kipi | 🔵 ARAYÜZ — **en büyük kalem**; `c734af9` "DEVLET ODAĞI" ile kısmen başlamış olabilir, **ölçmedim** |
| H-0015 | uçuşta kenardan %20 yanaşma | 🔵 ARAYÜZ — 0021/H-0031 ile **aynı kalem**, birleştirilmeli |
| H-0020 | olaylara 1-5 önem puanı + iç/dış ayrımı | 🟠 VERİ (1223 madde) + 🔵 arayüz |
| H-0023 | "etiketsiz toprak" denetimi | 🟢 §4.2'deki nöbetçi bunun **bir parçası** |
| H-0032 | yeni alınan toprak iki kez yanıp sönsün | 🔵 ARAYÜZ (küçük) |
| H-0046 | "görüşme" türü + glif | 🔵 ARAYÜZ+VERİ (küçük; tipoloji hazır) |
| H-0052 | konu süzgeci yerleşimi | 🔵 ARAYÜZ — ⚠️ `df3e06a` (20 Ağu) panel yerleşimini değiştirdi, istek **yeni yerleşim üstünde** yeniden değerlendirilmeli |
| H-0056 | Sahra çevresi işaretlenmemiş yerleşim | 🟠 VERİ BORCU |
| H-0080 | deniz rengine yakın devlet rengi | 🟢 REÇETE: `renkler.py`de zemin `#a8c8dc` ile ΔE ölçen nöbetçi + eşik |

---

---

## 5. parti-emrelic-0008 — 11 kalem · 🔴 ALTISI TEK SORU

### 5.1 H-0009 · H-0010 · H-0011 · H-0012 · H-0013 · H-0014 — **AYNI MADDE**

Altı kalemin **notu birebir aynı** — çünkü Emre aynı soruyu altı ayrı
boşluk için sordu: *"burada insan mı yok, devlet mi yok, veri mi yok,
hata mı var?"* (Altın Orda çevresi · Hindistan · Sahra · Kuzey Asya ·
Afrika ortası · genel.) `H-0016` (Arabistan) da aynı ailedendir.

**Cevap ZATEN ölçülmüş ve dört şıkkın dördü de cevaplanmış:**
```
insan mı yok?   HAYIR — hepsinde vardı
devlet mi yok?  BAZILARINDA (Yeni Gine içi · Sahra çekirdeği · Rub'ul Hâlî)
                → bu DOĞRU boşluktur
veri mi yok?    EVET — ASIL SEBEP BU
hata mı?        KISMEN — bir kısmı YANLIŞ SAHİBE emiliyor
```
⇒ **REÇETE: altısı TEK maddeye indirilir**, hükmü `cozuldu` olur (soru
cevaplandı), ve geriye kalan **tek açık iş** ayrı bir kaleme yazılır:
*nokta yoğunluğu borcu (Kol A)*. Altı ayrı `sirada` tutmak, tek bir borcu
altı kez saymaktır.

**"HÂLÂ GEÇERLİ Mİ" — üç kapanışı doğruladım:**
```
banda-adalari 573.188 km² · somali 628.526 km² · ingiltere 3.150.758 km²
→ yapısal çare A1 YARIÇAP TAVANI: BUGÜN MOTORDA VAR
  uret_petek.py:665-726 · TAVAN_KM = {1:700, 2:420, 3:280, 4:140, 0:280}
  ve 12 Ağustos'ta A1b ile YÖNE DUYARLI hâle gelmiş
  (motorun kendi ölçümü: "391/2356 noktayı bağlıyor · 17.198.016 km² kesiyor")
```

### 5.2 🔴 H-0003 — EPOK DOLGUSU: HÂLÂ GEÇERLİ, ORAN DEĞİŞMEDİ

Not: *"10.403 dönemin 2.074'ü (%19,9) atlasın açılış gününde (`1281-01-01`)
başlıyor"* — yani araştırılmamış olabilir.
**BUGÜN YENİDEN ÖLÇTÜM (52 dosyanın tamamı, JS'in kendi yorumlayıcısıyla):**
```
toplam dönem            10.577
1281-01-01'de başlayan   2.095   = %19,8
ilhanli 189 · bizans 153 · memluk 115 · altinorda 102 · yuan 85 · hafsi 75
```
⇒ Oran **birebir aynı** (%19,9 → %19,8). Veri büyüdü, dolgu oranı düşmedi.
**Kalem AÇIK ve haklı.** Divriği · Arapkir · Malatya'nın `memluk`
`1281-01-01` başlangıcı bu kümenin içinde.
**REÇETE — iki kovaya ayır:** veri modeline `epok_dolgu:true` gibi bir
bayrak eklenir (araştırılmadı) ya da araştırılıp gerçek gün yazılır.
📌 Bugünkü hâliyle *"araştırıldı ve 1281'de öyleydi"* ile *"araştırılmadı,
başa dayandırdım"* **ayırt edilemiyor** — `§11`in *"bir if ile
sorabiliyor muyum"* sınavına takılıyor.

### 5.3 🔴 H-0005 — BU BİR HATA RAPORU DEĞİL, BİR MOTOR KURALI

Emre'nin cümlesi (Çimpe/Saroz): *"peteklerin deniz ötesine geçmesi olmaması
lazım… karşı kıyıdaki egemenliğin yansıması taşması şeklindeki hatayı
düzeltelim."* Bu cümle `ALTYAPI.md`ye kural olarak girmiş.
```
YARISI KAPANDI   noktasızlık yaması: Saroz kutusunda (40,4-41,1 K /
                 26,3-27,6 D) bugün 10 nokta var — Şarköy · Bolayır ·
                 Çimpe · Karabiga · "Saroz kuzey kıyısı" dâhil.
                 Üçü yerlesimler.js, ikisi ek23, biri seyrek —
                 ÜÇÜ DE index.html'de YÜKLÜ (kontrol ettim).
YARISI AÇIK      YAPISAL çare: sürtünme motoru (açık deniz = sonsuz
                 sürtünme ⇒ petek karşı kıyıya ATLAYAMAZ). Bugünkü motor
                 mesafeyi KUŞ UÇUŞU ölçüyor, deniz engel DEĞİL.
```
⇒ `0011/H-0002` ile **aynı kusur**; ikisi tek kalem olmalı.
**Doğrulama sınavı zaten yazılı:** model doğruysa 1346'da Rumeli BOŞ,
1352'de yalnız Çimpe boyalı olmalı. ⚠️ **Bu sınavı KOŞMADIM.**

### 5.4 Kalan üçü
| madde | konu | kova |
|---|---|---|
| H-0001 | Germiyan iki parça · Sahibataoğulları | 🟡 KAYNAK — TDV `germiyanogullari` + `sahibataogullari`; **kusur ölçülmüş**: sahibata 1281-1341 TEK dönem, kademeli yutulma modellenmemiş |
| H-0006 | bütün devletlerin başkenti yıldızla | 🔵 ARAYÜZ — `baskent:` alanı 390 künyede DOLU, **veri hazır, çizim eksik** |
| H-0016 | Arabistan boşlukları | 5.1 ile aynı aile + Necid/körfez veri eksiği |

---

## 6. parti-emrelic-0024 — 7 kalem

| madde | konu | kova / rota |
|---|---|---|
| H-0001(b) | ~35 Kafkasya-Batı İran şehrinin kronolojisi | 🔵 ROTA → **FERHAD PAŞA HATTI** (canlı) · (a) şıkkı `073df09` ile kapandı |
| H-0002 | `m:` bölge atamaları ters (Batum→Trabzon, Hopa→Erzurum, Aşkale→YOK) | 🟢 **REÇETE VAR, ölçülmüş** — `Değişmez 3`ün ta kendisi; `kd:` tasarımıyla birlikte çözülür |
| H-0005 | Basra'yı pas geçen Safevî enklavı | ⚪ AÇIKLANDI — `§2` emilmesi, Kuveyt/Muhammere/Nâsıriye SAHİPSİZ ⇒ **nokta borcu**, kayıt hatası değil |
| H-0006 | Benî Hâlid seçiliyken ok tuşu Osmanlı'ya dönüyor | 🔵 ARAYÜZ — 0019/H-0011 ("devlet odağı") ile **aynı altyapı**, tek oturuma |
| H-0008 | St. Petersburg çevresi | ⚪ AÇIKLANDI — tek petek, kuruluş günü doğuyor; İngriya'da başka nokta yok ⇒ **nokta borcu** |
| (2 kalem) | — | bu turda ölçülmedi |

📌 **H-0002 en değerlisi ve ölçümü tamam:** Hopa (41,39 K) `m:Erzurum` ama
ondan **daha kuzeydeki** Batum (41,64 K) `m:Trabzon`; Sohum (43,00 K)
Trabzon'a bağlı ve arada Batum var; Aşkale'nin `m:`si **YOK** ve Erzurum
bölgesini ikiye bölüyor. Emre'nin gördüğü *"iki parça"* birebir bu.
⇒ `CLAUDE.md §3` `Değişmez 3` (359 çift) ile **aynı kök**: `m:` siyasî bir
alan, coğrafî gruplama için kullanılıyor.

---

## 7. Küçük paketler — 0020 · 0013 · 0014 · 0022 · 0010 · 0011

### 7.1 🟢 0014/H-0006 + H-0008 — **KAPANDI, ÖLÇTÜM**

Not diyordu: *"138 nokta `kasitli_bosluk` bayraklı ama **102'sinin CİNSİ
YAZILMAMIŞ** (devletsiz 35 · veri-yok 1 · yazılmamış 102). Bayrak
`denetle.py`de HİÇ OKUNMUYOR."* İş `Z-0001` olarak açılmıştı.

**BUGÜN ÖLÇTÜM — Z-0001 BİTMİŞ:**
```
kasitli_bosluk nokta        199   (138 değil — büyümüş)
cinsi YAZILMAMIŞ              0   ← 102 idi
   devletsiz 120 · kabile 48 · veri-yok 14 · insansiz 9 · hata 8
```
⇒ Emre'nin saydığı **beş şık** (insan yok · devlet yok · kabile · veri yok ·
hata) bugün **tam olarak beş veri değeri** olarak duruyor: `insansiz` ·
`devletsiz` · `kabile` · `veri-yok` · `hata`. **İkisi de `cozuldu`.**
📌 `CLAUDE.md §11`in *"bir dersin makinenin göremeyeceği yere yazılması"*
vakası **kapanmış**: ders artık serbest metinde değil, **alanda.**

### 7.2 🔵 ROTA — üçü canlı oturumların dosyasında

```
0020/H-0012 · H-0014      Ferhat Paşa sınırları, doğu seferi 1578-1590
0021/H-0027 · H-0028      Van'ın doğusu, 21 ad
                          → FERHAD PAŞA HATTI (canlı, M-0827/M-0831)
0022/H-0005               Yediçkul · Camboyluk · Don · Kabartay bozkırları
                          → KARADENİZ BOZKIRI (canlı, M-0817,
                            data/yerlesimler_ek_bozkir.js sahibi)
0021/H-0007 · H-0021      Bahreyn/Katar → KÖRFEZ 1602 (canlı) + §2.1 reçetem
```
⚠️ **Bu dördü benim reçetemi BEKLEMİYOR.** Aynı işi ikinci kez yapmak
`isal.py`nin *"2-3 oturum sahiplenmiş"* uyarısını büyütür.

### 7.3 🟢 0011/H-0002 — VERİ YARISI KAPANDI

*"Şarköy tarafı ve Çanakkale'nin karşı kıyısı… ufak toprak parçası"*
Reçetesi *"dört nokta yazılacak"*tı. **ÖLÇTÜM: yazılmış** (§5.3'teki 10
nokta). Kalan yarısı 0008/H-0005 ile **aynı yapısal kalem** (sürtünme
motoru) ⇒ ikisi birleştirilmeli.

### 7.4 0020/H-0005 — Malta kıyı örtüşmesi: iki sabit

```
uret_petek.py:376   KARA_TOL = 0.002   ~220 m   kara maskesi bu incelikte kesiliyor
uret_petek.py:1061  SADE_TOL = 0.012  ~1330 m   sonra bu kabalıkta sadeleştiriliyor
```
⇒ Kıyı, kesildikten **sonra** altı kat kabalaştırılıyor; Malta gibi küçük
adalarda fark göze çarpıyor. **REÇETE:** `SADE_TOL` küçük ada/kıyı
poligonlarında kademeli olmalı (alan eşiğine bağlı), tek küresel sabit
değil. ⚠️ Maliyeti (dosya boyutu · üretim süresi) **ölçülmedi** — motor
oturumunun işi.

### 7.5 🟢 0020/H-0013 — `Değişmez 2`NİN EKSİK AYAĞI

Emre: *"Vâdisseyl maddesinde Kafkasya'da ufak bir toprak değişimi
görülüyor; böyle bir değişim varsa ayrı kronoloji maddesi gerekirdi."*
```
Değişmez 2 bugün:  511 kırılma · 0 AÇIK      ← "madde VAR MI?" ✓
Emre'nin sorduğu:  madde O DEĞİŞİMİ ANLATIYOR MU?   ← BU SORULMUYOR
```
⇒ **Yeni bir denetim sorusu**, ve `0019/H-0045` ailesiyle **aynı ölçüt**:
*maddenin `yer_id`/başlığı ile o gün kırılan yerleşim kümesi örtüşüyor mu?*
Tek alet iki kalemi birden kapatır (`0019/H-0045·47·48` + `0020/H-0013` +
`0019/H-0039②`) — **beş kalem, tek ölçüt.**

### 7.6 Kalan üç kalem
| madde | konu | kova |
|---|---|---|
| 0013/H-0001 | TDV dışı akademik kaynak haritası (3 kademe) | 🟡 ARAŞTIRMA — `§4` kırmızı çizgisinin kurumsal hâli; ayrı oturum |
| 0013/H-0002 | Söğüt/Domaniç köşe teması, çekirdek için kalite 6-7 | 🔵 MOTOR — Voronoi köşe teması; §5.3'ün akrabası |
| 0010/H-0001 | Tespih sekmesinde "mesaj yaz" düğmesi | 🔴 **ATLAS DIŞI** — ClaudEmre SİSTEM işi, bu kutuda olmamalı |

---

## 8. TOPLU DEĞERLENDİRME

### 8.1 Kova dağılımı (81 kalem, 20 Ağustos akşamı fotoğrafı)
```
🟢 KAPANABİLİR / hüküm çürüdü      13
🟢 REÇETE YAZILDI                  11
🔵 ROTA (canlı oturumun dosyası)    8
🔵 ARAYÜZ                          21
🟡 KAYNAK / araştırma               9
🟠 VERİ BORCU (nokta yoğunluğu)     8
⚪ ÖLÇÜM BEKLİYOR                   11
```

### 8.2 🔴 Üç yapısal bulgu — kalemlerden büyük

**① `sirada` damgası iki ayrı şey demek.** 0023'ün 15/15'i *"Henüz
ÖLÇMEDİM"* diyor. Kova ataması, ölçüme değil o günkü sıraya göre yapılmış.

**② Altı kalem tek soru** (0008/H-0009..H-0014). Bir borcu altı kez saymak,
kuyruğu olduğundan büyük gösteriyor. Gerçek açık iş sayısı 81'den küçük.

**③ Beş kalem tek ölçüt bekliyor:** *madde başlığı ↔ o gün kırılan
yerleşim kümesi.* Tek bir alet 0019/H-0045·47·48, 0019/H-0039②,
0020/H-0013'ü birden kapatır.

### 8.3 Kapsam dışında bırakılan
- **43 `sirada`** — `parti-0002..0007` + `parti-kasa-*` (2-10 Ağustos).
  Kimin olduğu **ölçülmedi**, sorulmuştur (M-0882).
- **0010/H-0001** — ClaudEmre SİSTEM işi, atlas kutusunda olmamalı.

---

## 9. GÖRSEL DOĞRULAMA TURU — 21 Ağustos, canlı tarayıcı

Koordinatörün verdiği beş kalem. **Beşi de ölçüldü**, üçü `cozuldu`ya
çevrildi, biri gerçek bulgu verdi, biri kendi ölçüm hatamı gösterdi.

### 9.1 🟢 Granbosa · Karlofça — İKİSİ DE ÇİZİLİYOR
```
1692-01-01  35.622/23.586  z6,5   işaret 1/1   "Granbosa Kalesi'nin fethi"  ◎ kuşatma
1699-01-26  45.201/19.932  z6,5   işaret 1/1   "Karlofça"                   📜 antlaşma
```
İkincisi **yeni 📜 glifinin ilk canlı sınavı** ve geçti.
📌 `app.js:1978` açıkça yazıyor: glif **icat edilmedi**, lejant onu zaten
tanımlıyormuş. Var olanı kullanmak, yenisini uydurmamak — doğru refleks.

### 9.2 🔴 PANEL İKİ KADEME — ORAN DOĞRU, YORUM BAYAT
Canlı ölçüm: geniş **456 px** · dar **304 px** · oran **1,500** · dar =
geniş'in **%66,7**'si. Koordinatörün beklentisi (1,500) tuttu.

**Ama `css/style.css:170-179`daki yorum artık yanlış ve kuralın on satır
üstünde duruyor:**
```
yorum   "Taban #yanpanel'in kendi kuralında (clamp(280px,24vw,380px));
         dar kip onun BİREBİR %60'ı: 280·0,6=168 · 24·0,6=14,4 · 380·0,6=228"
gerçek  o clamp artık TABAN değil, --panel-dar'IN KENDİSİ.
        168 / 14,4 / 228 sayıları dosyada ARTIK YOK.
```
Git ile doğrulandı (`12597ba` öncesi/sonrası):
```
ÖNCE   geniş clamp(280,24vw,380) · dar clamp(168,14.4vw,228)   dar = %60   ✓
SONRA  geniş clamp(420,36vw,570) · dar clamp(280,24vw,380)     dar = %66,7
```
⇒ Panel 1,5 kat büyütülmüş, **dar kip eski GENİŞ kipin tam kendisi**
yapılmış. Sonuç: **Emre'nin "%60" isteği bugün %66,7 olarak duruyor.**

**REÇETE — üç şık, hüküm koordinatörün:**
```
a) oran 1,500 kalsın, YORUM düzeltilsin (Emre'nin sözünün artık birebir
   geçmediği açıkça yazılsın)                                  ← ÖNERİM
b) %60'a dönülsün:  --panel-dar: clamp(252px, 21.6vw, 342px)
c) Emre'ye sorulsun — isteği o koymuştu
```
⚠️ **Reçete YAZILDI, UYGULANMADI** — `css/style.css` arayüz oturumunun.
📌 *"Bir bilgi iki yerde durursa biri güncellenince öteki bayatlar"*
sınıfı — ve bu sefer **yorum ile kod aynı dosyada, on satır arayla.**

### 9.3 🔴 UÇUŞ AYARLARI — HÜKÜM NOTU ÇÜRÜDÜ, BEŞ MADDENİN BEŞİ DE VAR

`0021/H-0031`in eski notu *"YOK: ⑤ yöne duyarlı dilim girişi"* diyordu.
O ölçüm `5ca81bf`ten (20 Ağustos 19:15) **önce** yapılmış. Bugün ölçtüm:

**① YÖN DUYARLILIĞI** — merkez sabit İstanbul, dört gerçek olay:
```
KUZEY  Moskova   51,5K   ofset [ +31,6 · -208 ]   Y NEGATİF → YUKARIDAN girer
GÜNEY  Cidde     21,5K   ofset [ +92,3 · +208 ]   Y POZİTİF → AŞAĞIDAN girer
BATI   Bordeaux  -0,6D   ofset [ -259,7 · -46  ]  X NEGATİF → SOLDAN girer
DOĞU   Sebzevâr  57,7D   ofset [ +259,7 · +56  ]  X POZİTİF → SAĞDAN girer
```
Emre'nin tarifi birebir: *"kırımda bir olay mı oldu yukarıdan ekrana girer.
iran ile savaş mı çıktı sağdan pencereye girer."*

**② DİLİM AYARI SÜRÜYOR MU** — tuval 812×650:
```
kenarpay %5  → 365,2     beklenen 812×0,45 = 365,4
kenarpay %10 → 324,6     beklenen 812×0,40 = 324,8
kenarpay %18 → 259,7     beklenen 812×0,32 = 259,8
kenarpay %25 → 202,9     beklenen 812×0,25 = 203,0
kenarpay %40 →  81,2     beklenen 812×0,10 =  81,2
```
Beş durakta da birebir. `ofset = tuval × (0,5 − kenarpay/100)`, yani
*"hedef kenardan içeri %N"*. Emre'nin *"20'de 2-3 dilim"*i = %10-15 ve
sürgü o aralığı kapsıyor.

**③ ÖTEKİ DÖRT MADDE**
```
hız 3000 → süre  800 ms      (ayar-sure-taban 0,8 sn sınırına dayandı)
hız 1500 → süre 1343 ms
hız  300 → süre 3000 ms      (ayar-sure-tavan 3 sn sınırına dayandı)
irtifa 1,0 → curve 1    ·    irtifa 2,5 → curve 2.5
```
⇒ **Üç ayar tek ölçümde birlikte doğrulandı** (hız + taban + tavan).

⚠️ **VE BİR KENDİ HATAM:** irtifa için önce *"etki etmiyor"* sandım —
süre ve zoom değişmiyordu. **`curve` parametresini kaydetmemiştim.**
Kaydedince göründü. ⇒ *Ölçmediğim bir şeyi "yok" diye raporlamamak için
hüküm vermeden önce tekrar ölçtüm.* `§11`in *"ölçemediğini eleyen süzgeç
onu temiz sayar"* kuralının **ölçüm aleti tarafı**: kaydetmediğim alan,
"değişmiyor" diye göründü.

**Canlı on bir ayar:** genislik-km · yakinlik · yerlesim · kenarpay ·
imparatorluk-pay · hiz-kms · sure-taban · sure-tavan · hareket ·
yatay-esik · irtifa — hepsi insan biriminde (km · saniye · yüzde).
📌 Koordinatör *"yedi ayar"* demişti; **on bir.** Kaba sayım ile ölçüm farkı.

### 9.4 🟢 DEVLETSİZ HALKALAR — 92 = 92, VE KUSUR BENDEYDİ
```
veri   data/bos_alanlar.js  cins:"devletsiz-yerlesim"   92
DOM    .bosluk-halka                                    92   ✓
       .bosluk-benek  (kabile)     48 = 48              ✓
       .bosluk-soru   (veri-yok)   32 = 32              ✓
```
⚠️ **İlk ölçümüm "0" dedi ve YANLIŞTI** — `.sehir .halka` diye aradım,
gerçek sınıf `.bosluk-halka`. Neredeyse **sahte bir kusur** raporlayacaktım.
📌 `§11`: *"doğru aleti yanlış evrenle koşturmak"* — burada evren değil
**seçici** yanlıştı, ama sonuç aynı: temiz bir şeyi kirli göstermek.

### 9.5 🟢 YAN BULGU — `8e348bb` UÇTAN UCA ÇALIŞIYOR
```
derin kronoloji bindirildi:  bizans 83 · iran 107 · kirim 91 · habsburg 107
                             rusya 141 · venedik 86 · macaristan 127 · lehistan 112
                             = 854 madde (künyelerdeki eski sığ listeler: 6-15)
sessizce bindirilmeyen: 0    (8 KRONOLOJI_* → 8 gerçek DEVLETLER id'si)
```
🔴 **VE BİR ŞÜPHEMİ ÖLÇÜP ÇÜRÜTTÜM.** 276 yeni maddenin Osmanlı
kronolojisini **mükerrer** yapmasından şüphelendim: `1692-01-01` Granbosa
`olaylar.js`te *"fethi"*, `kronoloji_venedik.js`te *"kaybı"* diye iki kez
duruyor. **Çürüdü:** `app.js:4993` bu dosyaları `olaylar`a katmıyor,
`DEVLETLER[i].kronoloji`ye bindiriyor. Canlı ölçüm: `olaylar.length`
**1223**, değişmemiş. ⇒ İki kayıt **aynı olayın iki cepheden görünüşü**;
tasarım, mükerrer değil.

### 9.6 Turun bilançosu
```
cozuldu'ya çevrilen    0023/H-0012 · H-0013 · H-0015 · H-0016 · H-0017
                       0021/H-0031 · 0014/H-0006 · H-0008          = 8
yeni reçete            panel yorumu (css/style.css:170)            = 1
çürütülen hüküm notu   0021/H-0031 ("⑤ yok" diyordu)               = 1
kendi hatam            2 (halka seçicisi · curve kaydetmemek)
```
📌 **Turun en öğretici iki anı, ikisi de kendi hatamdı** — ve ikisi de
*hüküm vermeden önce tekrar ölçmekle* yakalandı. Biri sahte kusur
raporlayacaktı, öteki gerçek bir özelliği "yok" ilan edecekti.

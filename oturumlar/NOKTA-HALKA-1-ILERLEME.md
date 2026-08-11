# NOKTA HALKA-1 — ilerleme notu

> Şartname: `oturumlar/NOKTA-HALKA-1.md` (koordinatörün dosyası — okunur, YAZILMAZ).
> Bu dosya yalnız bu oturumun ilerleme notudur. Yazma yetkim: bu dosya +
> `data/yerlesimler_ek23.js`.

---

## ① ÖLÇÜM TABANI (11 Ağustos 2026)

```
canlı evren   2308 nokta / 36 girdi dosyası   (girdi.yukle, kendi ayrıştırıcımı YAZMADIM)
kutu 39,2-41,4°K / 25,8-29,6°D   →   51 nokta
```

Sahiplik sorusu **her yerde `v:` → `d:` → `s:`** sırasıyla soruldu
(`VERI-YAPISI.md`: ters sıra makul bir sayı üretir ve **sessizce yanlıştır**).

### Dört adayın dördü de gerçek kusur — ama İKİSİNİN YÖNÜ ŞARTNAMEDEKİNDEN BAŞKA

| aday | EMEN nokta | mesafe | ürettiği görüntü | yön |
|---|---|---|---|---|
| 1 Behramkale | **Molova (Molyvos)** — Lesbos ADASI | 19,3 km | Troas anakarası 1281-1462 **ceneviz** | 🔴 CENEVİZ fazla |
| 2 Beykoz | **Boğaziçi (Rumeli yakası)** — AVRUPA yakası | 4,4 km | Anadolu yakası 1453'e kadar **bizans** | 🔴 OSMANLI **eksik** |
| 3 Şarköy | **Karabiga** — Marmara'nın KARŞI kıyısı | 27,3 km | Şarköy+Mürefte **1345'ten OSMANLI** | 🟢 Osmanlı fazla |
| 4 Saroz kuzeyi | **Çimpe** (10,8 km) · **Bolayır** (14,8 km) | — | kuzey kıyı **1352/1354'ten OSMANLI** | 🟢 Osmanlı fazla |

③ ve ④ Emre'yi **birebir** doğruluyor (`ŞARKÖY … KARESİ İLHAKI İLE ALINMIŞ GİBİ` ·
`ÇİMPE KALESİ ELE GEÇTİĞİNDE … SAROZUN KUZEYİNE`).

① ve ②'de kusur var ama **Osmanlı fazlalığı değil**. Şartname bütün işi
*"olmaması gereken Osmanlı toprak parçaları"* diye çerçeveliyor;
`CLAUDE.md §3.5.1`: *noktasızlık İKİ YÖNE de hata üretir ve hangi yöne ürettiği
**komşunun kimliğine** bağlıdır.* Burada komşular bir ada (Ceneviz) ve karşı
yakadaki bir dolgu noktası (Bizans).

---

## ② 🔴 EMRE'NİN BİRİNCİ ŞİKÂYETİNİN SEBEBİ ŞARTNAMEDE YOK — VE YENİ NOKTA DEĞİL

> *"ÇANAKKALENİN KARŞI KIYISI KARESİ İLHAKI İLE ALINMIŞ GİBİ **UFAK BİR TOPRAK
> PARÇASI** GÖRÜNÜYOR"*

Çanakkale'nin karşı kıyısı **Kilitbahir tarafı, yani Avrupa yakası**. Ölçüldü:

```
Kilitbahir   kur:"1452-01-01"
girdi.py BILINEN_ALANLAR: "kur: motor petek_epok() bu tarihten ÖNCE peteği
                           komşuya DEVREDER"
1452 öncesi peteği kim alıyor?
    Çanakkale        4,183 km   1346:OSMANLI  1350:OSMANLI     ← KAZANAN
    Maydos (Eceabat) 4,347 km   1346:bizans   1350:bizans
    fark 0,164 km
```

🔴 **Ve kaydın kendi zaman çizgisi ZATEN DOĞRU** — `kur:` onu bastırıyor:

```
s  1281-01-01 → 1354-03-02  bizans        ← 1452'ye kadar HİÇ ÇİZİLMİYOR
d  1354-03-02 → 1366-08-01  OSMANLI
s  1366-08-01 → 1376-09-01  bizans
d  1376-09-01 → 1402-07-28  OSMANLI  … (fetret payları) …
```

⇒ Kusur **veri eksikliği değil, kaydın kendi içindeki çelişki**: bir yandan
1281'den beri sahip yazıyor, öte yandan `kur:1452` diyor. Motor `kur:`a uyuyor,
toprak 0,164 km farkla Çanakkale'ye gidiyor ve **1345-1452 arası Avrupa yakasında
Osmanlı görünüyor.** Emre'nin gördüğü "ufak toprak parçası" bu.

🔴🔴 **VE BU BÖLÜMÜN HÜKMÜ YANLIŞTI — GERİ ALIYORUM (aynı gün, ölçümle).**

Yukarıdaki **aritmetik doğru**: Kilitbahir'in kendi konumu 1452 öncesi
Çanakkale'ye 0,164 km farkla düşüyor. Ama ondan çıkardığım **sonuç yanlıştı**:
*"demek ki Avrupa yakasında Osmanlı lekesi var."* Ölçtüm — **yok.**

```
odakli olcum · 0,005° (≈0,56 km) · ORNEKLEME YOK · 7.047 hucre, 4.132 kara
bogaz bu cozunurlukte AYRILIYOR:  Maydos #1 (Avrupa) · Çanakkale #0 (Asya)

1300  Gelibolu yarimadasinda OSMANLI:    0 km²  (0 hucre)
1350  Gelibolu yarimadasinda OSMANLI:    0 km²  (0 hucre)
1360  Gelibolu yarimadasinda OSMANLI:  656 km²  ← Maydos ve Kilitbahir'in KENDISI
                                                  (1354'ten Osmanli — DOGRU)
Kilitbahir'in kur: alani KALDIRILSA:  hicbir tarihte fark 0 km²
```

⇒ **`kur:` kaldırmak hiçbir şeyi değiştirmiyor.** Çanakkale'nin kazandığı sliver
kara maskesinde **su**; yarımadanın tamamı Maydos'a (1354'e kadar Bizans) düşüyor.

🔴 **Ve ilk ölçümüm de kirliydi**: Avrupa yakasını `lon>26.45 & lat<40.22 değilse`
diye kaba bir kutuyla süzmüştüm; o süzgeç **Lapseki-Çardak (ASYA) hücrelerini**
içeri aldı ve *"182 km² Osmanlı lekesi, %100'ü Çanakkale'den"* dedi. Doğrusu
bileşen sınavıyla çıktı: **0 km².**

📌 `CLAUDE.md §11`in **en sık hata sınıfı** bende gerçekleşti:
***ölçüm doğru, çıkarım yanlış.*** 0,164 km'lik fark gerçekti; *"öyleyse ekranda
leke vardır"* çıkarımı ölçülmemişti — ve ben onu koordinatöre **bulgu diye**
gönderdim. Rapor `④`ün *"ölçmediğini `ölçmedim` diye yaz"* kuralını çiğnedim:
iki satırı (biri ölçüm, biri çıkarım) **tek satırda** birleştirdim ve çıkarım,
ölçümün güvenilirliğini **ödünç aldı**.

⇒ **BEŞİNCİ NOKTA GEREKMİYOR** ve `kur:` düzeltmesi de gerekmiyor.
Emre'nin birinci şikâyetinin bugünkü veride karşılığı **bulunamadı** — bu bir
sonuçtur, ve büyük ihtimalle `§11`in *"bir şikâyet, şikâyet edilen şeyden daha
hızlı bayatlar"* vakası (külliyat 29 Temmuz-1 Ağustos tarihli).
⚠️ Ölçmediğim: şikâyetin hangi yayına ait olduğu. Ekran görüntüsündeki
`N / TOPLAM başlık` sayacı bunu söylerdi; görsel bende yok.

---

## ③ 🔴 ÖNGÖRÜ — ÖLÇÜMDEN **ÖNCE** YAZILDI, DAMGALI

> `CLAUDE.md §11`: *"Sonradan yazılan beklenti ölçümü gördükten sonra farkında
> olmadan ona göre şekillenir ve hiçbir zaman yanlış çıkmaz — yani hiçbir şey
> öğretmez."* Aşağıdaki altı kalem **grid ölçümü koşmadan önce** yazıldı.

Ölçüm yöntemi: 0,02° ızgara · kara maskesi `denetle.konum_denetimi` ile
(kendi maskemi yazmıyorum, `§11` "kendi yazdığın ayrıştırıcı her zaman kötüdür") ·
her hücrede en yakın nokta **önce** ve **sonra**.

```
① Behramkale   1400 kesitinde `ceneviz` → `karesi/OSMANLI` dönen alan   2.000-3.500 km²
② Beykoz       1400 kesitinde `bizans` → OSMANLI dönen alan               300-600 km²
③ Şarköy       1350 kesitinde OSMANLI → `bizans` dönen alan               600-1.200 km²
④ Saroz        1355 kesitinde OSMANLI → `bizans` dönen alan               400-900 km²
⑤ ③+④ toplamı, Emre'nin şikâyet ettiği "fazla Osmanlı"        1.000-2.000 km²
⑥ 1700 kesitinde DEĞİŞEN alan (hepsi Osmanlı olmalı)                    0 km²
```

**MAZERETİ ÖNCEDEN YAZIYORUM** (`§11`: *mazeretin de önceden yazılması gerekir*):

- ①-④ **aralık** tahminidir; tutmazsa mazereti *"aralık dar seçilmiş"* olabilir.
- ⑤ şartnamedeki **1.798 km²** ile çapraz sınanacak. Aynı şeyi ölçmüyoruz
  (o 5 açık şikâyetin toplamı, benimki iki kesit) ama **mertebe** tutmalı.
  Tutmazsa mazeret yok — biri yanlış ölçüyor demektir.
- 🔴 **⑥'nın mazereti YOKTUR.** 1700'de bölgenin tamamı Osmanlı; yeni dört nokta
  o kesitte **tek metrekare** değiştirmemeli. Değiştirirse zaman çizgilerimden
  biri yanlış yazılmış demektir ve **nokta değil VERİ düzeltilir.**

---

## ④ KAYNAK TURU — ölçülmüş

TDV slug sınavı (`curl -o /dev/null -w %{http_code}`, `§4`):

```
🔴 ÖLÜ (302)   assos · behramkale · ayvacik · edremit · yoros · anadolu-kavagi ·
               sarkoy · kesan · enez · ipsala · saros · bolayir · cimpe · malkara ·
               ganos · peristasis · karesi · trakya · biga · rodosto
🟢 CANLI (200) beykoz · gelibolu · midilli · tekirdag · canakkale · karesiogullari ·
               edirne · bogazici
```

⚠️ **Ve `beykoz` `§4②` tuzağının ta kendisi çıktı:** HTTP 200, başlık "BEYKOZ",
ama gövde **çapraz gönderme kütüğü** — *"bk. BOĞAZİÇİ"*, *"bk. İSTANBUL"*.
Düz metni **2.628 karakter** ve tamamı arayüz. `§4③/④`ün beşinci alt-sınıfı:
madde var, gövde var, ama gövde **başka maddeye yönlendirmeden ibaret**.
⇒ `bogazici` (70.716 karakter) okundu, aranan bilgi **oradaydı**.
📌 `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"* kuralı yine tuttu.

Okunan gövdelerden çıkan ve **mevcut veriyle karşılaştırılan** tarihler:

| madde | TDV'nin dediği | veride | uyum |
|---|---|---|---|
| `karesiogullari` | Karesi Beyliği ilhakı **746/1345 veya hemen sonrası** | Edremit/Çanakkale/Karabiga `d:1345-01-01` | ✓ |
| `gelibolu` | Çimbi Hisarı üs olarak verildi (**1352**) | Çimpe `d:1352-03-01` | ✓ |
| `gelibolu` | **2 Mart 1354** zelzele, Osmanlılar şehri aldı | Gelibolu/Bolayır/Maydos `d:1354-03-02` | ✓ |
| `gelibolu` | **13 Ağustos 1366** Amedeo aldı, **1376** ikinci fetih | `s:bizans 1366-08-01→1376-09-01` | ✓ |
| `tekirdag` | bölgenin fethi **1357-1358**, Şehzade Murad | Tekirdağ/Keşan/Malkara `d:1357-01-01` | ✓ |
| `bogazici` | *"Yıldırım Bayezid Anadolukavağı'ndaki Yoros Kalesi'ni de almış"* | Anadolu Hisarı `d:1395-08-01` | ✓ |
| `hudavendigar-camii--behramkale` | Behramkale = **Assos harabeleri üzerinde**; bölgede kesin Osmanlı hâkimiyeti **I. Murad devrinde**, cami 1365 sonrası | — | ⚠️ aşağıya bak |

⚠️ **Tek gerilim ① Behramkale'de ve saklamıyorum:** TDV camii maddesi *"bölgede
kesin Osmanlı hâkimiyeti I. Murad döneminde (1362-1389) kuruldu"* diyor; oysa
iki mainland komşusu (Edremit 60 km · Çanakkale 73 km) veride **1345**'ten
Osmanlı. İkisi çelişmiyor — *"kesin hâkimiyet"* pekişmeyi anlatıyor, ilhakı
değil — ama **1345'i seçmemin sebebi TDV değil, komşu tutarlılığı ve
sıfır kırılma borcu.** Bu bir tercih ve burada yazılı duruyor.

---

## ⑤ TASARIM KARARI — SIFIR KIRILMA BORCU

Dört noktanın **hiçbir tarihi icat edilmedi**; bütün `f:`/`t:` değerleri canlı
çekirdek veride **zaten var olan** kırılma günleridir.
⇒ `Değişmez 2` / `2s` borcu **yapısal sıfır**.
📌 `§11`: *"bu gün zaten var" yetmiyor — hangi KOVADA olduğu da sorulmalı.*
Kullanılan günlerin hepsi `yerlesimler.js` **çekirdeğinden** alındı
(Edremit · Çanakkale · Karabiga · Çimpe · Bolayır · Keşan · Malkara ·
Tekirdağ · Anadolu Hisarı), kuyruk dosyalarından değil.
Ölçüldü: çekirdekte olmayan gün **0**.

---

## ⑥ ÖLÇÜM — VE ÖNGÖRÜMÜN BEŞİ ÇÜRÜDÜ

Yöntem: 0,02° ızgara · kara maskesi **`denetle.konum_denetimi`** ile
(kendi maskemi yazmadım) · her kara hücresinde en yakın nokta önce/sonra ·
sahiplik `v:`→`d:`→`s:`. Izgara **4.066 hücre, 2.473'ü kara**.

**Nokta başına, tek tek eklenerek** (toplu ölçüm payları karıştırıyordu):

| nokta | 1350 | 1355 | 1400-1440 | 1500 · 1700 |
|---|---|---|---|---|
| ① Behramkale | **+851** | +851 | +851 | 0 · 0 |
| ② Beykoz | −97 | −97 | **+216** | 0 · 0 |
| ③ Şarköy | −68 | **−275** | +34 | 0 · 0 |
| ④ Saroz kuzey kıyısı | 0 | **−331** | 0 | 0 · 0 |

*(+ = Osmanlı büyüyor, − = Osmanlı küçülüyor; km²)*

**Emre'nin şikâyet ettiği fazla Osmanlı, 1355 kesitinde: −606 km²** (③+④).
①'in +851'i ters yönde ve **doğru yönde**: Ceneviz Molyvos'un anakaraya taşan
peteği geri çekiliyor.

### ÖNGÖRÜ KARNESİ — 6'da 1

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ① | 2.000-3.500 km² | **489** | 🔴 4-7 kat |
| ② | 300-600 km² | **216** | 🔴 |
| ③ | 600-1.200 km² | **68** | 🔴 9-18 kat |
| ④ | 400-900 km² | **331** | 🔴 kıl payı altında |
| ⑤ | 1.000-2.000 km² | **606** | 🔴 |
| ⑥ | **0 km²** (mazeretsiz) | **0** | 🟢 **TUTTU** |

🔴 **Beşi de AYNI YÖNDE yanlıştı — hepsini büyük tahmin ettim.** Bu, dağınık
bir hata değil **sistematik bir yanlış model**: alanı *"yanlış boyanan kıyı ne
kadar uzun"* diye tahmin ettim. Gerçek sınır o değil — **orta dikmenin ne kadar
kaydığı**, ve kıyıda o çokgenin yarısı **deniz**.

🟢 **Taşınabilir sayı (sonraki NOKTA oturumlarına):** komşuları 15-30 km ötede
olan **tek bir kıyı noktası 100-500 km² mertebesinde geri kazanır** — binlerce
değil. Bu sayı bu oturumda ölçüldü ve öngörümü çürüterek doğdu.
📌 `§11`: *"Beş öngörülük bir kümede bilgiyi yalnız YANLIŞ OLAN taşıdı."*
Tutan tek kalem (⑥) hiçbir şey öğretmedi; çürüyen beşi bir ölçü birimi verdi.

⚠️ **VE ŞARTNAMEYLE ÇAPRAZ SINAMA TUTMADI — saklamıyorum.** Şartname beş açık
şikâyet için **1.798 km²** diyor; benim ③+④'üm **606 km²**, yani %34'ü.
Aynı şeyi ölçmüyoruz (o beş şikâyet, ben iki nokta ve iki kesit) ama farkı
*"açıkladım"* demiyorum — **ölçmedim.** Kalan ~1.200 km²'nin nerede olduğu
bu oturumda **bilinmiyor**; büyük ihtimalle Kilitbahir `kur:` kalemi (§②)
ve şartnamede sayılmayan öteki şikâyetler.

---

## ⑦ ÖZ DENETİM — DOKUZ KONTROL, 8'İ TEMİZ

Dosya **canlıymış gibi** ölçüldü, `girdi.py`ye dokunulmadan.
⚠️ İlk satır bir `assert`: dosyam `GIRDI_DOSYALARI`nda **olmamalı** — yoksa
kendimi kendimle karşılaştırırdım (`§11`, 7 Ağustos'ta üç oturum bu tuzağa düştü).

| # | kontrol | sonuç |
|---|---|---|
| ① | ayrıştırma + bilinmeyen alan | 4 kayıt · bilinmeyen alan **0** |
| ② | ad çakışması | canlıyla **0** · kendi içinde **0** |
| ③ | 3 km (geniş evren: 2308 canlı + kendi arası) | ihlal **0** · en yakın çift **4,36 km** (Beykoz ↔ Boğaziçi Rumeli yakası) |
| ④ | kara maskesi (`denetle.konum_denetimi`) | maske dışı **0** · pencere dışı **0** |
| ⑤ | kimlik: renk **ve** künye | 6 kimlik · renksiz **0** · **künyesiz 4** ⚠️ |
| ⑥ | dönem sağlığı (ters/sıfır/kategori-içi çakışma) | kusur **0** |
| ⑦ | Değişmez 1 — günlük tam tarama (örnekleme YOK) | sahipsiz **0** |
| ⑧ | yeni gün (Değişmez 2/2s borcu) | çekirdekte olmayan gün **0** |
| ⑨ | devlet ömrü (§3.5 hayalet) | hayalet **0** |

### 🔴 İKİ BAYRAK ARACIN KUSURUYDU, VERİNİN DEĞİL — VE İKİSİNİ DE SINADIM

Aracım önce ⑦'de **4 sahipsiz kayıt** ve ⑨'da **4 hayalet devlet** bildirdi.
İkisini de *"düzeltmeden önce"* karşı sınamaya soktum (`§11`: *aracın
söylediğini yapmadan önce aracın ne ölçtüğünü anla*):

```
⑦  ufuk sonu    Dönem sonu DIŞLAYICI, çekirdeğin tamamı t:"1923-10-29" yazıyor.
                KARŞI SINAMA — aynı tarama, son gün DAHİL, beş ÇEKİRDEK kaydına:
                  Karabiga 1 · Edremit 1 · Keşan 1 · Malkara 1 · Anadolu Hisarı 1
                ⇒ Beşi de "sahipsiz" çıkıyor. KONVANSİYON, kusur değil. Araç düzeltildi.

⑨  hayalet      `bizans` künyesi f:"330-05-11" — ÜÇ HANELİ YIL.
                Düz dize karşılaştırması "1281-01-01" < "330-05-11" diyor
                (leksikografik olarak DOĞRU, tarih olarak YANLIŞ).
                ⇒ Yıl sıfır dolgulandı, hayalet 4 → 0.
```
📌 Veriyi *"düzeltseydim"* dördünün de doğru zaman çizgisini bozacaktım —
ihlal kapanır, **gerçek silinirdi**. `§11`in "pencere dışı noktayı düzeltmek"
vakasının aynısı, bu sefer benim aracımda.

### ⚠️ ⑤ — KÜNYESİZ DÖRT KİMLİK **BU DOSYANIN ESERİ DEĞİL**

```
isa-celebi       canlı çekirdekte  53 kayıt   renk VAR · künye YOK
mehmed-celebi                    116 kayıt   renk VAR · künye YOK
musa-celebi                       92 kayıt   renk VAR · künye YOK
suleyman-celebi                  148 kayıt   renk VAR · künye YOK
```
Dördü de Fetret şehzade payı ve **409 canlı kayıtta zaten kullanılıyor**
(Yenişehir · İnegöl · Aydos · Çorlu · Lüleburgaz…). Renkleri var, boyanıyorlar;
eksik olan `devletler.js` künyesi. **Bu dosya yeni bir boşluk açmıyor** —
mevcut bir borcun üstüne biniyor. Koordinatöre bildirildi.
📌 Ölçmeseydim bunu *"kendi kusurum"* sanıp ya kimlikleri değiştirecek ya da
sessizce geçecektim; ikisi de yanlış olurdu.

---

## ⑧ TESLİM — 4 → 4

```
data/yerlesimler_ek23.js   4 nokta   ·   9 kontrolün 8'i temiz
Behramkale (Assos)   39.4897  26.3376  kale   k:4 m:Bursa
Beykoz               41.1275  29.0925  sehir  k:4 m:İstanbul
Şarköy               40.6142  27.1146  liman  k:4 m:Edirne
Saroz kuzey kıyısı   40.6456  26.6950  bolge  k:0
```
3 km kuralına takılan **yok** (en yakın çift 4,36 km).
Kaynağı bulunamayan **bir** kayıt: Saroz kuzey kıyısı — `tur:"bolge"` dolgu,
ve *"bulunamadı"* diye açıkça yazıldı (o kıyıda TDV müstakil madde taşımıyor).

### KOORDİNATÖRDEN GEREKENLER

1. **`arac/girdi.py` → `GIRDI_DOSYALARI`'na `yerlesimler_ek23.js`.**
   Bekleyen engel **yok**: yeni renk 0, yeni künye 0, `2/2s` borcu 0.
2. **`index.html` + `js/app.js`** — script satırı ve birleştirme noktası
   (`VERI-YAPISI.md`: *"yeni bir veri dosyası eklersen index.html'e satır
   eklemen ve app.js'te birleştirme noktasına katman şart"*).
3. ~~`Kilitbahir`'in `kur:` alanı~~ — 🔴 **GERİ ALINDI, §② bak.**
   ⚠️ **AMA GERİ ALMA YETİŞMEDİ: koordinatör `kur:`i KALDIRDI (`a550bcd`).**
   Bkz. §⑪ — kaldırmanın etkisi ölçüldü ve **net olarak ters yönde.**

---

## ⑪ KAPANIŞTAN SONRA — `kur:` KALDIRILDI, ETKİSİ ÖLÇÜLDÜ

Koordinatör teslimi kabul ederken *"③ Kilitbahir `kur:` KALDIRILDI"* yazdı.
O, **geri aldığım** öneriydi; geri alma mesajı ona yetişmemiş görünüyor
(cevabında bileşen kilidi ölçümüne ya da *"beşinci nokta iptal"*e değinmiyor).

Doğrulandı: `girdi.py` 37 dosya · **2312 nokta** · `ek23`ün dördü de canlı ·
`Kilitbahir.kur` artık **None**.

**Etki ölçüldü** — canlı evrende, kara maskesi + bileşen ayrımıyla
(ham kutu ölçümü *"265 hücre"* demişti; **deniz ve boğaz-aşırı yapaylık** —
aynı hatayı ikinci kez yaptım ve ikinci kez maskeyle düzelttim):

```
0,005° · 4.896 kara hücresi · bileşen 2 (Avrupa#1 · Asya#0)

1300   toplam 23 km²    ASYA  karesi  → bizans   19 km²   🔴
                        AVRUPA karesi → bizans    3 km²
1350   toplam 23 km²    ASYA  OSMANLI → bizans   19 km²   🔴
                        AVRUPA OSMANLI→ bizans    3 km²
1400   0 km²      1440   0 km²
```

🔴 **Etkinin %83'ü YANLIŞ YAKADA.** `kur:` kalkınca Kilitbahir 1281'den itibaren
petek sahibi oluyor ve **1,3 km'lik boğazı geçip Anadolu kıyısına** 19 km²
Bizans boyuyor — oysa orası 1345'e kadar Karesi, sonra Osmanlı.
⚠️ Ve motorun `kara-kısıtlı sahiplik` süzgeci bunu **yakalayamaz**:
`KV_MIN_KM2 = 200` (`uret_petek.py:1178`) ve parça **19 km²**, tabanın çok altında.

⇒ Kazanç 3 km², bedel 19 km². `§3.5.1`: *bir sınır kayması önerildiğinde
İKİ UÇ DA ölçülür* — bu düzeltme tek uçtan bakılarak yapıldı (**benim tek uçlu
raporum yüzünden**) ve hatayı silmedi, **taraf değiştirdi.**

📌 Büyüklük küçük (23 km², iki kesit) — acil değil. Ama kayıt altına alınmazsa
`§11`in *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye yeniden
bulunur"* vakası olur. **Kararı koordinatörün.** Önerim: `kur:"1452-01-01"`
geri konsun; kaldırılmasının dayanağı benim çürütülmüş hükmümdü.
4. **`data/devletler.js`** — `isa-celebi` · `mehmed-celebi` · `musa-celebi` ·
   `suleyman-celebi` **künyesiz** (renkleri var, 409 canlı kayıtta
   kullanılıyorlar). **Bu dosyanın eseri değil**, mevcut borç.
5. **Bölgesel borç — 1912-13 Bulgar işgali.** Tekirdağ'da var, **Keşan ve
   Malkara'da yok**. Şarköy'e tek başına yazmak Bulgar adacığı üretirdi, o
   yüzden yazmadım (§⑤). Küme hâlinde düzeltilmeli.
6. ⚠️ **Şartnamedeki 1.798 km² ile benim 606 km²'m arasındaki fark ÖLÇÜLMEDİ.**
   Açıklama üretmiyorum — *"ölçmediğimi `ölçmedim` diye yazıyorum"* (`§11`).

---

## ⑨ BİLEŞEN KİLİDİ — KOORDİNATÖRÜN HİPOTEZİ ÖLÇÜLDÜ, YARISI ÇÜRÜDÜ

Koordinatör *"koşudan sonra 'kim kapattı' diye soracağız, önce yaz"* dedi.
Yazmadan önce **ölçtüm** — hipotez ölçülebilirdi:

Yöntem: motorun **kendi** ızgara adımı (`KV_ADIM = 0.05`, `uret_petek.py:1177`)
ve **kendi çapası** (`BOLGE.bounds = -25,-11`) ⇒ hücre merkezleri birebir
motorunki. Kara/deniz `denetle.konum_denetimi` ile. Bağlılık 4- ve 8-komşuluk
(motor *"oktil yaklaşımı"* diyor ⇒ 8 geçerli olan).

| vaka | koordinatörün hipotezi | **ölçüm (8-komşuluk)** | |
|---|---|---|---|
| ① Behramkale ← Molyvos | su aşırı → kilit KAPATABİLİR | **AYRI bileşen** (#1 vs #0) | ✅ **tuttu** |
| ③ Şarköy ← Karabiga | su aşırı → kilit KAPATABİLİR | **AYNI bileşen** | 🔴 **çürüdü** |
| ② Beykoz ← Boğaziçi Rumeli | kapatmaz | AYNI bileşen | ✅ tuttu |
| ④ Saroz ← Çimpe | kapatmaz (aynı kara) | AYNI bileşen (4-komşulukta AYRI) | ✅ tuttu |

🔴 **③'ün çürüme sebebi tek cümle: "denizaşırı" ≠ "ayrı bileşen".**
Karabiga ile Şarköy Marmara'nın iki yakasında ve 27 km arayda — ama Marmara
**kapalı bir deniz**, ikisi arasında kesintisiz kara yolu var (Bursa → İzmit →
İstanbul → Çorlu → Tekirdağ). Bileşen kilidi **mesafeyi değil bileşeni** sorar;
gerçek ada atlamalarını keser, körfez/iç deniz karşılıklarını **kesmez**.

### 🔴 ÖNGÖRÜ — koşudan ÖNCE, damgalı

```
① Behramkale   BILESEN KILIDI kapatir. Molyvos ayri bilesende; Troas anakarasi
               ayni bilesendeki Canakkale/Edremit'e duser = OSMANLI 1345'ten.
               ⇒ Nokta olmadan da Ceneviz hayaleti KALKAR. Nokta yine de dogru
                 (Troas'in kendi tohumu olmali) ama RENGI degistiren o degil.
② Beykoz       NE kilit NE kara-kisitli sahiplik kapatir. Bogaz ~700 m, 0,05°
               izgarada tek bilesen; parca ~216 km², KV_MIN_KM2'nin (200) hemen
               ustunde ⇒ belirsiz. ⇒ NOKTAYLA kapanir.
③ Şarköy       Kilit KAPATMAZ. Ama kara-kisitli sahiplik (uret_petek.py:1148)
               DEVREYE GIREBILIR: Karabiga→Sarkoy duz hatti denizi kesiyor ve
               parca ~275 km² > 200 ⇒ izgara karar verir, kara yolu ~400 km.
               ⇒ KISMEN zaten kapali olabilir; nokta onu KESINLESTIRIR.
④ Saroz        Kilit KAPATMAZ. Parca 331 km² > 200 ve Cimpe→kuzey kiyi hatti
               korfezi kesiyor ⇒ burada da izgara devrede olabilir.
               ⇒ KISMEN zaten kapali olabilir; nokta KESINLESTIRIR.
```

⚠️ **VE BU, ÖLÇÜMLERİMİN TAVAN OLDUĞU ANLAMINA GELİR.** Benim ızgaram **düz
mesafe** Voronoi'si; motor **kara yolu** kısıtlı. ⇒ ① ve ③'te (su aşırı emilme)
verdiğim `+851` ve `−275` km² **üst sınırdır**, motor bir kısmını zaten
kesiyor olabilir. ② ve ④'te (aynı kara, hat çoğunlukla karada) proxy motora
yakın olmalı.
📌 Bunu koşudan **sonra** fark etseydim *"ha zaten kara-kısıtlıydı"* derdim ve
mazeret bulguya benzerdi. Şimdi yazıyorum: **çürütülebilir.**

---

## ⑩ BEYKOZ — koordinatörün istediği ek kaynak sınandı

`anadoluhisari` **CANLI** (200) ve gövdesi okundu; `yoros-kalesi` ve
`guzelcehisar` **302 (ölü)**.

```
"Yıldırım Bayezid (1389-1402), bu hisarı İstanbul Boğazı'nın en dar yerinde ve
 ARTIK OSMANLI BEYLİĞİ'NİN KONTROLÜ ALTINDA OLAN Anadolu tarafında … yaptırtmıştır"
"Bayezid, Koca-eli'nden YOROS'A GİDERKEN Şile fethine Yahşi Bey'i yollamış,
 kendisi de YOROS'TAN GEÇERKEN Güzelcehisar denilen kaleyi yaptırmıştır"
inşa tarihi: Âşıkpaşazâde 793 (1390-91) · Nişancı Mehmed Paşa 797 (1394-95)
"Ankara Savaşı'nı (1402) takip eden dağılma döneminde de kalenin BİZANS'IN
 ELİNE GEÇMEYİP TÜRKLER'DE KALDIĞI tahmin edilmektedir"
```

⇒ İki sonuç:
1. **Fetret payları doğru yazılmış.** TDV açıkça *"Bizans'ın eline geçmedi"*
   diyor; Beykoz'un `1402-1413` şehzade payları (Anadolu Hisarı'nın aynısı)
   Bizans'a dönmüyor. ✓
2. ⚠️ **`1395-08-01` bir ÜST SINIRDIR, kesin tarih değil.** TDV Anadolu
   yakasının hisar yapılırken **zaten Osmanlı kontrolünde** olduğunu söylüyor ve
   inşa için 1390-91 ile 1394-95 arasında iki rivayet veriyor. Yani Beykoz
   gerçekte **daha erken** Osmanlı; günü bilinmiyor.
   ⇒ `§4` *"tarih uydurma"* gereği daha erken bir gün **icat etmedim**;
   çekirdekte var olan `1395-08-01`i kullandım. Bu bir **tercih** ve
   kaydın etkisi ölçülmüş: 1350-1355 arası **−97 km²** (o yıllarda Beykoz'u
   Bizans göstermek, gerçekte Osmanlı olabilecek bir kıyıyı Bizans boyar).
   **Bu, dosyanın en zayıf kalemi ve burada yazılı duruyor.**
